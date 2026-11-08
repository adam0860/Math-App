import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-redox',
  title: 'Oxidation States and Redox Reactions',
  summary: 'Oxidation and reduction as electron transfer, the priority rules for oxidation numbers (including fractional averages), oxidizing and reducing agents, the activity series, combustion, corrosion and disproportionation.',
  minutes: 20,
  objectives: [
    'Define oxidation and reduction as loss and gain of electrons and explain why they always occur together',
    'Assign oxidation numbers using the rules in priority order, including peroxides, hydrides, $\\ce{OF2}$ and fractional averages such as $\\ce{Fe3O4}$ and $\\ce{S4O6^2-}$',
    'Decide whether a reaction is redox and identify the oxidizing and reducing agents',
    'Use the metal activity series and the halogen series to predict single-replacement reactions and write their net ionic equations',
    'Analyze combustion, corrosion and the MRE flameless heater as redox reactions, and recognize disproportionation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Oxidation and reduction are electron transfer',
      blocks: [
        {
          type: 'p',
          text: 'Burn magnesium ribbon and it flares into white magnesium oxide: $\\ce{2Mg + O2 -> 2MgO}$. The product is ionic, $\\ce{Mg^2+}$ and $\\ce{O^2-}$, so during the reaction each magnesium atom **lost** two electrons and each oxygen atom **gained** two. Split the reaction into its two halves and the electron bookkeeping becomes visible:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\ce{2Mg -> 2Mg^2+ + 4e-} && \\text{electrons lost: oxidation} \\\\ &\\ce{O2 + 4e- -> 2O^2-} && \\text{electrons gained: reduction} \\end{aligned}',
          caption: 'Four electrons leave the magnesium and four arrive at the oxygen. Add the two halves and the electrons cancel.',
        },
        {
          type: 'definition',
          term: 'Oxidation and reduction',
          text: '[[gchem-oxidation|Oxidation]] is the loss of electrons; [[gchem-reduction|reduction]] is the gain of electrons. A reaction in which electrons are transferred is an oxidation–reduction, or **redox**, reaction. Mnemonic: **OIL RIG**, Oxidation Is Loss, Reduction Is Gain.',
        },
        {
          type: 'p',
          text: 'Oxygen is not required. In $\\ce{Mg + Cl2 -> MgCl2}$ the magnesium is oxidized just as surely, and in $\\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$ (which you saw in Foundations) zinc atoms hand two electrons each to copper ions in solution.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the two always come together',
          text: 'Free electrons cannot accumulate in a beaker: a solution with a net negative charge of even a microgram of electrons would carry an enormous electrostatic energy. So every electron lost by one species must be gained by another at the same time. That is why we speak of redox **reactions**, and why the number of electrons lost always equals the number gained, the rule that the next lesson turns into a balancing method.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'The words are older than the electron. "Oxidation" meant combining with oxygen (Lavoisier\'s new chemistry of the 1770s), and "reduction" came from smelting: reducing a heavy ore to its metal reduces its mass. Once chemists understood both processes as electron transfer, the names were kept and the meanings generalized.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'In the reaction $\\ce{2Na + Cl2 -> 2NaCl}$, which statement is correct?',
      options: [
        { text: 'Sodium is reduced because it gains a positive charge', why: 'Becoming positive means losing electrons. Losing electrons is oxidation, not reduction.' },
        { text: 'Chlorine is oxidized because it is a nonmetal', why: 'Being a nonmetal does not decide anything. Each Cl atom gains an electron to become $\\ce{Cl-}$, which is reduction.' },
        { text: 'Sodium is oxidized and chlorine is reduced; two electrons are transferred per $\\ce{Cl2}$', correct: true, why: 'Each Na loses one electron ($\\ce{Na -> Na+ + e-}$), and each $\\ce{Cl2}$ gains two ($\\ce{Cl2 + 2e- -> 2Cl-}$), which is why two Na are needed per $\\ce{Cl2}$.' },
        { text: 'This is not a redox reaction because no oxygen is involved', why: 'Redox is about electron transfer, not oxygen. Sodium chloride is ionic, so electrons clearly moved.' },
      ],
      explanation: 'Sodium goes from neutral atoms to $\\ce{Na+}$ (electrons lost: oxidized); chlorine goes from neutral $\\ce{Cl2}$ to $\\ce{Cl-}$ (electrons gained: reduced). The halves are $\\ce{2Na -> 2Na+ + 2e-}$ and $\\ce{Cl2 + 2e- -> 2Cl-}$, and the two electrons cancel when they are added.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Oxidation numbers: electron bookkeeping for every atom',
      blocks: [
        {
          type: 'p',
          text: 'With ions it is easy to see who lost electrons. In covalent molecules ($\\ce{CH4}$ burning, $\\ce{H2O2}$ decomposing) nothing is fully transferred, so chemists use a bookkeeping device: the [[gchem-oxidation-number|oxidation number]] (or oxidation state). It is the charge an atom **would** have if every bond to it were fully ionic, with the shared electrons given to the more [[electronegativity|electronegative]] atom, and electrons shared between identical atoms split evenly.',
        },
        {
          type: 'p',
          text: 'You almost never need to draw the bonds. These rules give the answer, and they are applied **in order**: when two rules conflict, the one higher on the list wins.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Free elements are 0', text: 'Any element uncombined with other elements: $\\ce{Fe}$, $\\ce{O2}$, $\\ce{O3}$, $\\ce{P4}$, $\\ce{S8}$, $\\ce{Cl2}$.' },
            { title: 'The sum equals the charge', text: 'Oxidation numbers add to 0 in a neutral compound and to the ion charge in an ion. A monatomic ion\'s oxidation number is its charge ($\\ce{Fe^3+}$ is +3).' },
            { title: 'Group 1 is +1, Group 2 is +2', text: 'In compounds, always. Aluminum is +3.' },
            { title: 'Fluorine is −1', text: 'In all compounds, since it is the most electronegative element.' },
            { title: 'Hydrogen is +1', text: 'Unless a higher rule overrides it: in metal hydrides such as $\\ce{NaH}$ or $\\ce{CaH2}$, the metal wins and H is −1.' },
            { title: 'Oxygen is −2', text: 'Unless a higher rule overrides it: −1 in peroxides ($\\ce{H2O2}$, $\\ce{Na2O2}$), −1/2 in superoxides ($\\ce{KO2}$), +2 in $\\ce{OF2}$.' },
            { title: 'Cl, Br, I are −1', text: 'Unless bonded to oxygen or a more electronegative halogen: Cl is +1 in $\\ce{ClO-}$ and +7 in $\\ce{ClO4-}$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Six assignments, each with the rule that decides it',
          steps: [
            { tex: '\\ce{Cr2O7^2-}: \\ 2x + 7(-2) = -2 \\implies x = +6', why: 'O is −2 (rule 6); the sum equals the ion charge (rule 2). Solve for chromium.' },
            { tex: '\\ce{NH4+}: \\ x + 4(+1) = +1 \\implies x = -3', why: 'H is +1 with nonmetals (rule 5). Nitrogen is more electronegative than hydrogen, so a negative value makes sense.' },
            { tex: '\\ce{ClO4-}: \\ x + 4(-2) = -1 \\implies x = +7', why: 'O beats Cl (rule 6 is above rule 7), so chlorine takes whatever is left: its maximum, +7.' },
            { tex: '\\ce{NaH}: \\ \\text{Na} = +1 \\implies \\text{H} = -1', why: 'Rule 3 (Group 1 is +1) is above rule 5, so the metal wins and hydrogen is the hydride ion, $\\ce{H-}$.' },
            { tex: '\\ce{H2O2}: \\ 2(+1) + 2x = 0 \\implies x = -1', why: 'Rule 5 (H is +1) is above rule 6, so oxygen must give way: the peroxide case. The O–O bond is split evenly.' },
            { tex: '\\ce{OF2}: \\ x + 2(-1) = 0 \\implies x = +2', why: 'Rule 4 (F is −1) is above rule 6. Oxygen is positive only when bonded to the one element more electronegative than itself.' },
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ahr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" class="f-red"/></marker><marker id="ahb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" class="f-blue"/></marker></defs><line x1="20" y1="100" x2="480" y2="100" stroke="currentColor" stroke-width="1.8"/><line x1="34" y1="94" x2="34" y2="106" stroke="currentColor" stroke-width="1.8"/><text x="34" y="124" text-anchor="middle" font-size="14" font-weight="600">−3</text><text x="34" y="66" text-anchor="middle" font-size="13" class="t-teal">NH₃</text><text x="34" y="84" text-anchor="middle" font-size="13" class="t-teal">NH₄⁺</text><line x1="88" y1="94" x2="88" y2="106" stroke="currentColor" stroke-width="1.8"/><text x="88" y="124" text-anchor="middle" font-size="14" font-weight="600">−2</text><text x="88" y="84" text-anchor="middle" font-size="13" class="t-teal">N₂H₄</text><line x1="142" y1="94" x2="142" y2="106" stroke="currentColor" stroke-width="1.8"/><text x="142" y="124" text-anchor="middle" font-size="14" font-weight="600">−1</text><text x="142" y="84" text-anchor="middle" font-size="13" class="t-teal">NH₂OH</text><line x1="196" y1="94" x2="196" y2="106" stroke="currentColor" stroke-width="1.8"/><text x="196" y="124" text-anchor="middle" font-size="14" font-weight="600">0</text><text x="196" y="84" text-anchor="middle" font-size="13" class="t-teal">N₂</text><line x1="250" y1="94" x2="250" y2="106" stroke="currentColor" stroke-width="1.8"/><text x="250" y="124" text-anchor="middle" font-size="14" font-weight="600">+1</text><text x="250" y="84" text-anchor="middle" font-size="13" class="t-teal">N₂O</text><line x1="304" y1="94" x2="304" y2="106" stroke="currentColor" stroke-width="1.8"/><text x="304" y="124" text-anchor="middle" font-size="14" font-weight="600">+2</text><text x="304" y="84" text-anchor="middle" font-size="13" class="t-teal">NO</text><line x1="358" y1="94" x2="358" y2="106" stroke="currentColor" stroke-width="1.8"/><text x="358" y="124" text-anchor="middle" font-size="14" font-weight="600">+3</text><text x="358" y="66" text-anchor="middle" font-size="13" class="t-teal">HNO₂</text><text x="358" y="84" text-anchor="middle" font-size="13" class="t-teal">NO₂⁻</text><line x1="412" y1="94" x2="412" y2="106" stroke="currentColor" stroke-width="1.8"/><text x="412" y="124" text-anchor="middle" font-size="14" font-weight="600">+4</text><text x="412" y="84" text-anchor="middle" font-size="13" class="t-teal">NO₂</text><line x1="466" y1="94" x2="466" y2="106" stroke="currentColor" stroke-width="1.8"/><text x="466" y="124" text-anchor="middle" font-size="14" font-weight="600">+5</text><text x="466" y="66" text-anchor="middle" font-size="13" class="t-teal">HNO₃</text><text x="466" y="84" text-anchor="middle" font-size="13" class="t-teal">NO₃⁻</text><text x="250" y="24" text-anchor="middle" font-size="13" class="t-gray">oxidation number of nitrogen</text><line x1="88" y1="148" x2="412" y2="148" stroke="currentColor" class="s-red" stroke-width="2" marker-end="url(#ahr)"/><text x="250.0" y="142" text-anchor="middle" font-size="13" class="t-red">oxidation: electrons lost, number rises</text><line x1="412" y1="176" x2="88" y2="176" stroke="currentColor" class="s-blue" stroke-width="2" marker-end="url(#ahb)"/><text x="250.0" y="194" text-anchor="middle" font-size="13" class="t-blue">reduction: electrons gained, number falls</text></svg>`,
          alt: 'A number line of nitrogen oxidation numbers from minus 3 to plus 5, with species above each: ammonia and ammonium at minus 3, hydrazine at minus 2, hydroxylamine at minus 1, N2 at 0, N2O at plus 1, NO at plus 2, nitrous acid and nitrite at plus 3, NO2 at plus 4, nitric acid and nitrate at plus 5. An arrow to the right is labeled oxidation, electrons lost, number rises; an arrow to the left is labeled reduction, electrons gained, number falls.',
          caption: 'Nitrogen spans nine oxidation states. Moving right on this line is oxidation, moving left is reduction, whatever the species looks like.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Assign the oxidation number of the named atom. Type a signed integer such as 4 or -2.',
      template: 'Mn in $\\ce{KMnO4}$: ___ · S in $\\ce{Na2S2O3}$: ___ · Cl in $\\ce{Ca(ClO)2}$: ___',
      blanks: [{ answers: ['7', '+7'] }, { answers: ['2', '+2'] }, { answers: ['1', '+1'] }],
      explanation: '$\\ce{KMnO4}$: $+1 + x + 4(-2) = 0$, so Mn is +7. $\\ce{Na2S2O3}$ (thiosulfate): $2(+1) + 2x + 3(-2) = 0$, so $2x = 4$ and S averages +2. $\\ce{Ca(ClO)2}$ (calcium hypochlorite): $+2 + 2(x - 2) = 0$, so $x - 2 = -1$ and Cl is +1. Hypochlorite chlorine at +1 is "hungry" to return to −1, which is why it is such a good disinfecting oxidizer.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Fractional oxidation numbers are averages',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes the sum rule gives a fraction. That does not mean an atom holds a fraction of an electron: it means **atoms of the same element in the compound are in different oxidation states**, and the sum rule only sees their average.',
        },
        {
          type: 'derivation',
          title: 'Magnetite and tetrathionate',
          steps: [
            { tex: '\\ce{Fe3O4}: \\ 3x + 4(-2) = 0 \\implies x = +\\tfrac{8}{3} \\approx +2.67', why: 'The sum rule gives an average. Magnetite (the magnetic black iron oxide, and black rust) is really $\\ce{FeO * Fe2O3}$: one $\\ce{Fe^2+}$ and two $\\ce{Fe^3+}$ per formula unit.' },
            { tex: '\\tfrac{(+2) + 2(+3)}{3} = +\\tfrac{8}{3}', why: 'Check: the individual states average to the same value.' },
            { tex: '\\ce{S4O6^2-}: \\ 4x + 6(-2) = -2 \\implies x = +\\tfrac{10}{4} = +2.5', why: 'The tetrathionate ion, formed when thiosulfate is oxidized by iodine, has an average sulfur oxidation number of +2.5.' },
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg"><line x1="122.0" y1="109.9" x2="184.8" y2="135.8" stroke="currentColor" stroke-width="1.8"/><line x1="207.1" y1="135.3" x2="274.7" y2="109.0" stroke="currentColor" stroke-width="1.8"/><line x1="297.0" y1="109.9" x2="359.8" y2="135.8" stroke="currentColor" stroke-width="1.8"/><line x1="106.8" y1="92.0" x2="106.8" y2="56.0" stroke="currentColor" stroke-width="1.8"/><line x1="113.2" y1="92.0" x2="113.2" y2="56.0" stroke="currentColor" stroke-width="1.8"/><text x="110" y="51" text-anchor="middle" font-size="18" class="t-red">O</text><line x1="97.0" y1="108.2" x2="61.0" y2="108.2" stroke="currentColor" stroke-width="1.8"/><line x1="97.0" y1="101.8" x2="61.0" y2="101.8" stroke="currentColor" stroke-width="1.8"/><text x="50" y="111" text-anchor="middle" font-size="18" class="t-red">O</text><line x1="110.0" y1="118.0" x2="110.0" y2="154.0" stroke="currentColor" stroke-width="1.8"/><text x="110" y="171" text-anchor="middle" font-size="18" class="t-red">O</text><text x="122" y="161" text-anchor="middle" font-size="13" class="t-red">−</text><line x1="366.8" y1="127.0" x2="366.8" y2="91.0" stroke="currentColor" stroke-width="1.8"/><line x1="373.2" y1="127.0" x2="373.2" y2="91.0" stroke="currentColor" stroke-width="1.8"/><text x="370" y="86" text-anchor="middle" font-size="18" class="t-red">O</text><line x1="383.0" y1="136.8" x2="419.0" y2="136.8" stroke="currentColor" stroke-width="1.8"/><line x1="383.0" y1="143.2" x2="419.0" y2="143.2" stroke="currentColor" stroke-width="1.8"/><text x="430" y="146" text-anchor="middle" font-size="18" class="t-red">O</text><line x1="370.0" y1="153.0" x2="370.0" y2="189.0" stroke="currentColor" stroke-width="1.8"/><text x="370" y="206" text-anchor="middle" font-size="18" class="t-red">O</text><text x="382" y="196" text-anchor="middle" font-size="13" class="t-red">−</text><text x="110" y="111" text-anchor="middle" font-size="18" class="t-orange" font-weight="600">S</text><text x="195" y="146" text-anchor="middle" font-size="18" class="t-orange" font-weight="600">S</text><text x="285" y="111" text-anchor="middle" font-size="18" class="t-orange" font-weight="600">S</text><text x="370" y="146" text-anchor="middle" font-size="18" class="t-orange" font-weight="600">S</text><rect x="57" y="126" width="34" height="21" rx="10" fill="currentColor" class="f-purple" fill-opacity="0.15"/><text x="74" y="142" text-anchor="middle" font-size="14" class="t-purple" font-weight="600">+5</text><rect x="178" y="159" width="34" height="21" rx="10" fill="currentColor" class="f-purple" fill-opacity="0.15"/><text x="195" y="175" text-anchor="middle" font-size="14" class="t-purple" font-weight="600">0</text><rect x="268" y="64" width="34" height="21" rx="10" fill="currentColor" class="f-purple" fill-opacity="0.15"/><text x="285" y="80" text-anchor="middle" font-size="14" class="t-purple" font-weight="600">0</text><rect x="389" y="89" width="34" height="21" rx="10" fill="currentColor" class="f-purple" fill-opacity="0.15"/><text x="406" y="105" text-anchor="middle" font-size="14" class="t-purple" font-weight="600">+5</text><text x="240" y="236" text-anchor="middle" font-size="13" class="t-gray">S₄O₆²⁻ (lone pairs omitted) · average for S: (5 + 0 + 0 + 5) ÷ 4 = +2.5</text></svg>`,
          alt: 'Structure of the tetrathionate ion: a chain of four sulfur atoms. Each end sulfur is bonded to three oxygen atoms and has oxidation number plus 5. The two middle sulfurs are bonded only to sulfur and have oxidation number 0.',
          caption: 'Assign each bond\'s electrons to the more electronegative atom: the end sulfurs give up their electrons to oxygen and are +5; the middle sulfurs are bonded only to sulfur, share evenly, and are 0. The average is +2.5.',
          maxWidth: 480,
        },
        {
          type: 'p',
          text: 'Oxidation numbers of carbon in organic molecules are worth a look, because they track **how much energy a fuel can release**. Every carbon in these one-carbon molecules sits at a different rung:',
        },
        {
          type: 'table',
          headers: ['Molecule', '$\\ce{CH4}$', '$\\ce{CH3OH}$', '$\\ce{HCHO}$', '$\\ce{HCOOH}$', '$\\ce{CO2}$'],
          rows: [['C oxidation number', '−4', '−2', '0', '+2', '+4']],
          caption: 'Methane, methanol, formaldehyde, formic acid, carbon dioxide. Each step to the right removes two electrons from carbon.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Reduced carbon is a charged battery',
          text: 'Burning takes carbon all the way to +4. The more reduced the carbon starts out, the more electrons it hands to oxygen, and the more energy is released. That is why fats (long chains, carbon near −2) yield about 37 kJ per gram while carbohydrates (carbon near 0, as in glucose) yield about 17 kJ per gram, and why hydrocarbon fuels like JP-8 pack far more energy per kilogram than alcohols.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'What is the **average** oxidation number of carbon in propane, $\\ce{C3H8}$? Give an exact fraction or a decimal to two places.',
      hint: 'H is +1. Three carbons share whatever charge is needed to make the sum 0.',
      label: 'average C oxidation number $=$',
      answer: '-8/3',
      answerTex: '-\\tfrac{8}{3} \\approx -2.67',
      explanation: '$3x + 8(+1) = 0$ gives $x = -\\tfrac{8}{3} \\approx -2.67$. As with $\\ce{Fe3O4}$ this is an average: drawing the bonds, the two end carbons ($\\ce{CH3}$) are each −3 and the middle carbon ($\\ce{CH2}$) is −2, and $\\tfrac{-3 - 2 - 3}{3} = -\\tfrac{8}{3}$. Each C–H bond gives carbon −1, and C–C bonds count zero.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Is it redox? Oxidizing and reducing agents',
      blocks: [
        {
          type: 'p',
          text: 'A reaction is redox **if and only if some oxidation number changes**. Precipitation and acid–base reactions, the other two big families of aqueous reactions, change none: in $\\ce{Ag+ + Cl- -> AgCl}$ and $\\ce{H+ + OH- -> H2O}$ every atom keeps its oxidation number.',
        },
        {
          type: 'definition',
          term: 'Oxidizing agent and reducing agent',
          text: 'The [[gchem-oxidizing-agent|oxidizing agent]] is the reactant that takes electrons, so it causes the oxidation of something else and is **itself reduced**. The [[gchem-reducing-agent|reducing agent]] supplies electrons, causes a reduction, and is **itself oxidized**. The agent is the whole reactant species ($\\ce{MnO4-}$, not "Mn").',
        },
        {
          type: 'derivation',
          title: 'Iron smelting in a blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂',
          steps: [
            { tex: '\\text{Fe}: +3 \\to 0 \\quad \\text{(gains 3 e}^- \\text{ per atom)}', why: 'In $\\ce{Fe2O3}$, $2x + 3(-2) = 0$ gives +3; iron metal is 0. The number falls, so iron is reduced.' },
            { tex: '\\text{C}: +2 \\to +4 \\quad \\text{(loses 2 e}^- \\text{ per atom)}', why: 'In $\\ce{CO}$, C is +2; in $\\ce{CO2}$, C is +4. The number rises, so carbon is oxidized.' },
            { tex: '\\text{O}: -2 \\to -2', why: 'Oxygen does not change. Not every element in a redox reaction is oxidized or reduced.' },
            { tex: '2 \\times 3 = 6\\ \\text{e}^-\\ \\text{gained} = 3 \\times 2 = 6\\ \\text{e}^-\\ \\text{lost}', why: 'Two Fe atoms gain 3 each; three C atoms lose 2 each. The balanced equation already makes electrons lost equal electrons gained.' },
            { tex: '\\text{oxidizing agent: } \\ce{Fe2O3}, \\quad \\text{reducing agent: } \\ce{CO}', why: '$\\ce{Fe2O3}$ contains the atom that is reduced, so it is the oxidizing agent; $\\ce{CO}$ contains the atom that is oxidized, so it is the reducing agent.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Oxidizers in the field',
          text: 'Hypochlorite (calcium hypochlorite, HTH, and household bleach) disinfects water and serves in decontamination solutions for one reason: chlorine at +1 is a strong oxidizing agent that tears electrons out of the molecules of microbes and many toxic compounds, breaking them apart. The same property is why oxidizers are stored separately from fuels: an oxidizer plus a reducing agent is the chemistry of fire.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Do not use "an element appears on one side" as a redox test. Usually it works, but $\\ce{3O2 -> 2O3}$ (ozone formation in lightning) has oxygen at 0 on both sides: no oxidation number changes, so it is not redox. Always check the numbers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Copper dissolves in concentrated nitric acid, releasing brown $\\ce{NO2}$ gas: $\\ce{Cu + 4HNO3 -> Cu(NO3)2 + 2NO2 + 2H2O}$. What is the oxidizing agent?',
      options: [
        { text: '$\\ce{Cu}$', why: 'Copper goes from 0 to +2: it loses electrons, so it is oxidized and is the **reducing** agent.' },
        { text: '$\\ce{HNO3}$', correct: true, why: 'Nitrogen goes from +5 in $\\ce{HNO3}$ to +4 in $\\ce{NO2}$: it gains electrons, so $\\ce{HNO3}$ is reduced and is the oxidizing agent.' },
        { text: '$\\ce{NO2}$', why: '$\\ce{NO2}$ is a product, the reduced form of the oxidizing agent. Agents are reactants.' },
        { text: '$\\ce{H2O}$', why: 'Water is a product, and neither H (+1) nor O (−2) changes oxidation number.' },
      ],
      explanation: 'Assign numbers: Cu 0 → +2 (oxidized); N +5 → +4 in $\\ce{NO2}$ (reduced); H and O unchanged. The reactant containing the reduced atom, $\\ce{HNO3}$, is the oxidizing agent. Subtle point: only 2 of the 4 $\\ce{HNO3}$ are reduced; the other 2 become nitrate ions in $\\ce{Cu(NO3)2}$ with N still at +5. Electrons: 1 Cu loses 2; 2 N gain 1 each. Copper is below hydrogen in the activity series and does not dissolve in $\\ce{HCl}$; nitric acid dissolves it because nitrate, not $\\ce{H+}$, is the oxidizer.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The activity series: predicting single replacement',
      blocks: [
        {
          type: 'p',
          text: 'In a single-replacement reaction an element displaces another from a compound: $\\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$. In redox language, the free metal is the reducing agent and the metal ion is the oxidizing agent. The [[chem-activity-series|activity series]] ranks metals by how readily they are oxidized, so a metal reduces the ion of any metal **below** it.',
        },
        {
          type: 'table',
          headers: ['Metals (most active first)', 'Displace H₂ from', 'Example'],
          rows: [
            ['Li, K, Ba, Ca, Na', 'cold water (and acids, violently)', '$\\ce{2Na + 2H2O -> 2Na+ + 2OH- + H2}$'],
            ['Mg, Al, Zn, Cr, Fe', 'steam (Mg: hot water) and acids', '$\\ce{Zn + 2H+ -> Zn^2+ + H2}$'],
            ['Ni, Sn, Pb', 'acids only, slowly', '$\\ce{Ni + 2H+ -> Ni^2+ + H2}$'],
            ['**H₂**', '(reference point)', 'metals above reduce $\\ce{H+}$; metals below cannot'],
            ['Cu, Ag, Hg, Pt, Au', 'nothing: no reaction with $\\ce{H+}$', '$\\ce{Cu + HCl}$: NR'],
          ],
          caption: 'Any metal can reduce the ions of metals in a lower row (and lower within a row: Zn reduces $\\ce{Fe^2+}$, Fe reduces $\\ce{Ni^2+}$).',
        },
        {
          type: 'derivation',
          title: 'Aluminum foil in copper(II) sulfate solution',
          steps: [
            { tex: '\\text{Al above Cu} \\implies \\text{reaction occurs}', why: 'Aluminum is more active, so it reduces $\\ce{Cu^2+}$. The blue solution fades and copper metal appears on the foil.' },
            { tex: '\\ce{Al -> Al^3+ + 3e-} \\quad \\ce{Cu^2+ + 2e- -> Cu}', why: 'Oxidation and reduction halves. Aluminum loses 3, copper gains 2.' },
            { tex: '\\ce{2Al(s) + 3Cu^2+(aq) -> 2Al^3+(aq) + 3Cu(s)}', why: 'Multiply to 6 electrons each (2 × 3 = 3 × 2). Sulfate is a spectator. Charge check: $3(+2) = +6$ on the left, $2(+3) = +6$ on the right.' },
          ],
        },
        {
          type: 'p',
          text: 'The halogens form their own series, ranked by **oxidizing** strength: $\\ce{F2 > Cl2 > Br2 > I2}$. A halogen oxidizes the halide ions below it: $\\ce{Cl2 + 2Br- -> 2Cl- + Br2}$ is how bromine is extracted from brine, but $\\ce{I2 + Cl-}$ gives no reaction.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'What the series really measures',
          text: 'The activity series is a ranking of how strongly each metal holds its valence electrons in water: ionization energy, plus the energy released when the ion is hydrated. The electrochemistry unit replaces this list with numbers, standard reduction potentials $E^\\circ$, which predict the same reactions and also tell you the voltage a battery made from the pair would give.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The series predicts whether a reaction is favorable, not how fast. Aluminum is very active, yet an aluminum pan does not dissolve in water: a thin, tight $\\ce{Al2O3}$ film protects the surface. Scratch the film in the presence of chloride or mercury salts and it reacts vigorously.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Using the activity series (Li, K, Ba, Ca, Na, Mg, Al, Zn, Cr, Fe, Ni, Sn, Pb, H₂, Cu, Ag, Hg, Pt, Au) and the halogen series ($\\ce{F2 > Cl2 > Br2 > I2}$), which mixture **will** react?',
      options: [
        { text: '$\\ce{Ag(s) + HCl(aq)}$', why: 'Silver is below hydrogen, so it cannot reduce $\\ce{H+}$. No reaction.' },
        { text: '$\\ce{Cu(s) + FeSO4(aq)}$', why: 'Copper is below iron, so it cannot reduce $\\ce{Fe^2+}$. No reaction.' },
        { text: '$\\ce{Ni(s) + Pb(NO3)2(aq)}$', correct: true, why: 'Nickel is above lead, so it reduces $\\ce{Pb^2+}$: $\\ce{Ni + Pb^2+ -> Ni^2+ + Pb}$.' },
        { text: '$\\ce{I2(aq) + NaCl(aq)}$', why: 'Iodine is a weaker oxidizing agent than chlorine, so it cannot oxidize $\\ce{Cl-}$ to $\\ce{Cl2}$. The reverse reaction, $\\ce{Cl2 + 2I- -> 2Cl- + I2}$, is the one that happens.' },
      ],
      explanation: 'A free metal reacts with the ion of a metal below it (or with $\\ce{H+}$ if it is above $\\ce{H2}$); a halogen reacts with the halide of one below it. Only nickel and lead(II) fit: $\\ce{Ni(s) + Pb^2+(aq) -> Ni^2+(aq) + Pb(s)}$, with nitrate as the spectator. Nickel is oxidized (reducing agent) and $\\ce{Pb^2+}$ is reduced (oxidizing agent).',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Combustion, corrosion and the flameless ration heater',
      blocks: [
        {
          type: 'p',
          text: 'Every [[combustion]] is a redox reaction: the fuel is the reducing agent and $\\ce{O2}$ the oxidizing agent. Counting electrons shows how much "work" each fuel molecule does.',
        },
        {
          type: 'derivation',
          title: 'Electrons transferred when methane burns: CH₄ + 2O₂ → CO₂ + 2H₂O',
          steps: [
            { tex: '\\text{C}: -4\\ (\\ce{CH4}) \\to +4\\ (\\ce{CO2})', why: 'Carbon loses 8 electrons: it is oxidized. H stays +1 throughout.' },
            { tex: '\\text{O}: 0\\ (\\ce{O2}) \\to -2\\ (\\ce{CO2},\\ \\ce{H2O})', why: 'Each of the 4 oxygen atoms gains 2 electrons: reduced.' },
            { tex: '8\\ \\text{e}^-\\ \\text{lost} = 4 \\times 2 = 8\\ \\text{e}^-\\ \\text{gained}', why: 'One methane molecule moves 8 electrons to oxygen.' },
          ],
        },
        {
          type: 'p',
          text: '**Corrosion** is unwanted, slow oxidation of a metal. Iron rusts when both oxygen and water are present: overall $\\ce{4Fe + 3O2 -> 2Fe2O3}$ (the rust is hydrated to varying degrees), with Fe going from 0 to +3. It actually runs as a tiny electrochemical cell on the metal surface, which is why salt water (more ions to carry current) speeds it up and why a coating of a *more* active metal, zinc in galvanized steel, protects iron by being oxidized first. The electrochemistry unit treats this in detail.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The MRE flameless ration heater',
          text: 'The heater pad in a Meal, Ready-to-Eat contains magnesium powder alloyed with a little iron, plus salt. Add water and magnesium is oxidized by water itself: $\\ce{Mg(s) + 2H2O(l) -> Mg(OH)2(s) + H2(g)}$. Mg goes from 0 to +2 and H from +1 to 0. The reaction is very exothermic, enough to raise an 8-ounce entrée by about 100 °F in roughly 10 to 12 minutes. The iron and salt create millions of tiny galvanic cells that make magnesium corrode fast instead of slowly. Note the product: hydrogen gas, which is why the instructions say to use the heater in a ventilated area, away from flames.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Propane burns according to $\\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}$. How many electrons are transferred from fuel to oxygen per molecule of propane burned?',
      hint: 'Either count what carbon loses (average −8/3 → +4, times 3 atoms) or what oxygen gains (10 O atoms, 0 → −2).',
      label: 'electrons per $\\ce{C3H8}$ $=$',
      answer: '20',
      explanation: 'Oxygen side: $5\\ \\ce{O2}$ is 10 O atoms, each going from 0 to −2, so 20 electrons are gained. Carbon side: each C goes from an average of $-\\tfrac{8}{3}$ to +4, a change of $\\tfrac{20}{3}$, and $3 \\times \\tfrac{20}{3} = 20$ electrons are lost. The two counts agree, as they must. Compare methane: 8 electrons per molecule, but only one carbon. Per carbon, propane gives $20/3 \\approx 6.7$ electrons and methane 8, since methane\'s carbon is more reduced.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Disproportionation: one element goes both ways',
      blocks: [
        {
          type: 'p',
          text: 'In a [[gchem-disproportionation|disproportionation]] reaction, atoms of the **same element in the same species** are both oxidized and reduced. The species acts as its own oxidizing and reducing agent. This is only possible if the element starts in an **intermediate** oxidation state, with room to go both up and down.',
        },
        {
          type: 'derivation',
          title: 'Hydrogen peroxide decomposing: 2H₂O₂ → 2H₂O + O₂',
          steps: [
            { tex: '\\text{O in } \\ce{H2O2}: -1', why: 'The peroxide rule: H is +1, so each O is −1.' },
            { tex: '-1 \\to -2 \\ (\\ce{H2O}) \\quad \\text{reduction}', why: 'Two of the four oxygen atoms gain one electron each.' },
            { tex: '-1 \\to 0 \\ (\\ce{O2}) \\quad \\text{oxidation}', why: 'The other two oxygen atoms lose one electron each. 2 electrons gained = 2 lost.' },
          ],
          result: 'Peroxide sits between −2 (water) and 0 (oxygen gas), so it can fall either way. That is why it slowly decomposes in the bottle (faster with light or traces of metal ions, hence the brown bottles).',
        },
        {
          type: 'derivation',
          title: 'Making bleach: Cl₂ + 2NaOH → NaCl + NaClO + H₂O',
          steps: [
            { tex: '\\text{Cl}: 0\\ (\\ce{Cl2}) \\to -1\\ (\\ce{NaCl})', why: 'One chlorine atom is reduced to chloride.' },
            { tex: '\\text{Cl}: 0\\ (\\ce{Cl2}) \\to +1\\ (\\ce{NaClO})', why: 'The other chlorine atom is oxidized to hypochlorite: $+1 + x - 2 = 0$.' },
            { tex: '\\ce{Cl2 + 2OH- -> Cl- + ClO- + H2O}', why: 'Net ionic equation ($\\ce{Na+}$ is a spectator). Chlorine bubbled into cold sodium hydroxide is exactly how household bleach is made.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How to spot it',
          text: 'Look for one element that appears in a single reactant and in **two** products at two different oxidation numbers, one higher and one lower than where it started. The reverse, two species of the same element meeting in the middle ($\\ce{IO3- + 5I- + 6H+ -> 3I2 + 3H2O}$, I going from +5 and −1 to 0), is called **comproportionation**.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student assigns oxidation numbers in oxygen difluoride, $\\ce{OF2}$. Tap the first line that is wrong.',
      lines: [
        '$\\ce{OF2}$ is a neutral molecule, so the oxidation numbers must sum to 0',
        'Oxygen in compounds is −2, so O $= -2$',
        'Then $-2 + 2x = 0$, so each F is $+1$',
        'So in $\\ce{OF2}$ fluorine is positive and oxygen is negative',
      ],
      errorLines: [2],
      explanation: 'The rules have a priority order, and "fluorine is −1" ranks above "oxygen is −2". Fluorine is the most electronegative element, so in every compound it is −1. Line 2 should read F $= -1$; then $x + 2(-1) = 0$ gives O $= +2$. $\\ce{OF2}$ is the textbook case of positive oxygen. A result of F $= +1$ should itself be a red flag: fluorine never takes a positive oxidation number.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'Any reaction in which an element appears in its free (uncombined) form, as a reactant or a product, must be a redox reaction.',
      answer: false,
      explanation: 'The conversion of oxygen to ozone, $\\ce{3O2 -> 2O3}$, involves only free elements, but oxygen is 0 on both sides, so no oxidation number changes and it is not redox. (Converting graphite to diamond is another example.) The only reliable test is whether some oxidation number changes. It is true that when an element is converted to or from a **compound**, the reaction is redox.',
    },
  ],
  takeaways: [
    'Oxidation is loss of electrons (oxidation number rises); reduction is gain (number falls). They always happen together, with electrons lost = electrons gained.',
    'Oxidation-number rules in priority order: free element 0; sum = charge; Group 1 +1, Group 2 +2; F −1; H +1; O −2; Cl/Br/I −1. Higher rules win: H is −1 in $\\ce{NaH}$, O is −1 in $\\ce{H2O2}$ and +2 in $\\ce{OF2}$.',
    'Fractional values ($\\ce{Fe3O4}$ +8/3, $\\ce{S4O6^2-}$ +2.5, $\\ce{C3H8}$ −8/3) are averages over atoms in different states.',
    'The oxidizing agent is reduced; the reducing agent is oxidized. A reaction is redox only if some oxidation number changes.',
    'Activity series: a metal reduces the ions of metals below it, and metals above $\\ce{H2}$ release hydrogen from acids; halogens oxidize the halides below them.',
    'Combustion, corrosion and the MRE heater ($\\ce{Mg + 2H2O -> Mg(OH)2 + H2}$) are redox; in disproportionation one element in an intermediate state is both oxidized and reduced.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 4: Stoichiometry of Chemical Reactions',
      url: 'https://openstax.org/books/chemistry-2e/pages/4-introduction',
      source: 'openstax',
      note: 'Section 4.2 introduces oxidation–reduction reactions, oxidation numbers and single-displacement reactions with the activity series.',
    },
    {
      title: 'Wikipedia — Oxidation state',
      url: 'https://en.wikipedia.org/wiki/Oxidation_state',
      source: 'wikipedia',
      note: 'The formal definition, the rules, and many examples of unusual and fractional oxidation states.',
    },
    {
      title: 'Wikipedia — Flameless ration heater',
      url: 'https://en.wikipedia.org/wiki/Flameless_ration_heater',
      source: 'wikipedia',
      note: 'How the magnesium–iron heater in MREs works, with its chemistry and safety notes.',
    },
    {
      title: 'Wikipedia — Disproportionation',
      url: 'https://en.wikipedia.org/wiki/Disproportionation',
      source: 'wikipedia',
      note: 'More examples of species that react with themselves, from peroxide to chlorine in base.',
    },
  ],
};
