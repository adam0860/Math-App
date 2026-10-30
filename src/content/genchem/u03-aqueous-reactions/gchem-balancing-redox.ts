import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-balancing-redox',
  title: 'Balancing Redox by Half-Reactions',
  summary: 'The half-reaction method in acidic and basic solution, step by step, checking both atoms and charge, and redox titrations with permanganate as its own indicator.',
  minutes: 20,
  objectives: [
    'Explain why a redox equation must balance charge as well as atoms, and why electrons lost must equal electrons gained',
    'Balance redox equations in acidic solution with the half-reaction method ($\\ce{H2O}$, $\\ce{H+}$, $\\ce{e-}$)',
    'Convert an acidic-solution result to basic solution by adding $\\ce{OH-}$, including a disproportionation',
    'Check a balanced redox equation for atoms, charge and consistency with oxidation-number changes',
    'Solve redox titration problems with permanganate, including standardization against sodium oxalate',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why inspection fails for redox',
      blocks: [
        {
          type: 'p',
          text: 'Copper wire in silver nitrate solution grows silver crystals. Try writing it: $\\ce{Cu + Ag+ -> Cu^2+ + Ag}$. Count atoms: one Cu and one Ag on each side, apparently balanced. Count charge: +1 on the left, +2 on the right. **Charge is not conserved**, so the equation is wrong.',
        },
        {
          type: 'p',
          text: 'The electrons explain why. Each copper atom gives up **two** electrons; each silver ion accepts only **one**. To use every electron, two silver ions are needed per copper atom:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\ce{Cu -> Cu^2+ + 2e-} \\\\ &\\ce{2Ag+ + 2e- -> 2Ag} \\\\ \\hline &\\ce{Cu + 2Ag+ -> Cu^2+ + 2Ag} \\end{aligned}',
          caption: 'Charge: +2 on each side. Atoms: balanced. Electrons: 2 lost, 2 gained.',
        },
        {
          type: 'theorem',
          name: 'Two conservation laws for every redox equation',
          text: 'A balanced redox equation conserves **atoms** of each element and **total charge**. Equivalently: atoms balance, and electrons lost by the reducing agent equal electrons gained by the oxidizing agent.',
        },
        {
          type: 'p',
          text: 'For simple ion–metal reactions you can juggle this in your head. For reactions like $\\ce{MnO4- + Fe^2+ -> Mn^2+ + Fe^3+}$ in acid, where oxygen and hydrogen also have to come from somewhere (the water), you need a method. The standard one splits the reaction into its two [[gchem-half-reaction|half-reactions]], balances each separately, then recombines them.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why split the reaction at all',
          text: 'Each half-reaction is a smaller problem with only one element changing oxidation number, so it balances almost mechanically. Electrons appear explicitly in each half, and matching them is just finding a least common multiple. It is also physically real: in a battery the two halves happen at different electrodes, and the electrons travel between them through the wire.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Chromium metal reduces tin(IV) ions: $\\ce{Cr + Sn^4+ -> Cr^3+ + Sn^2+}$. Which is the correctly balanced equation?',
      options: [
        { text: '$\\ce{Cr + Sn^4+ -> Cr^3+ + Sn^2+}$', why: 'Atoms balance, but charge does not: +4 on the left, +5 on the right. Cr loses 3 electrons while $\\ce{Sn^4+}$ gains only 2.' },
        { text: '$\\ce{3Cr + 2Sn^4+ -> 3Cr^3+ + 2Sn^2+}$', why: 'This swaps the multipliers: 3 Cr lose 9 electrons but 2 Sn gain only 4. Charge: +8 left, +13 right.' },
        { text: '$\\ce{2Cr + 3Sn^4+ -> 2Cr^3+ + 3Sn^2+}$', correct: true, why: '2 Cr lose $2 \\times 3 = 6$ electrons, 3 $\\ce{Sn^4+}$ gain $3 \\times 2 = 6$. Charge: +12 on both sides.' },
        { text: '$\\ce{Cr + 2Sn^4+ -> Cr^3+ + 2Sn^2+}$', why: 'Electrons: 3 lost, 4 gained. Charge: +8 left, +7 right.' },
      ],
      explanation: 'Half-reactions: $\\ce{Cr -> Cr^3+ + 3e-}$ and $\\ce{Sn^4+ + 2e- -> Sn^2+}$. The least common multiple of 3 and 2 is 6, so multiply the chromium half by 2 and the tin half by 3. Then electrons cancel: $\\ce{2Cr + 3Sn^4+ -> 2Cr^3+ + 3Sn^2+}$, with +12 of charge on each side.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The half-reaction method in acidic solution',
      blocks: [
        {
          type: 'p',
          text: 'Most redox reactions with oxyanions ($\\ce{MnO4-}$, $\\ce{Cr2O7^2-}$, $\\ce{NO3-}$) are run in acid. In acidic water the species available in large amounts are $\\ce{H2O}$ and $\\ce{H+}$, so those are what you may add to balance oxygen and hydrogen.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Split', text: 'Assign oxidation numbers, find what is oxidized and what is reduced, and write the two half-reactions (skeletons, unbalanced).' },
            { title: 'Balance other atoms', text: 'In each half, balance every element except O and H.' },
            { title: 'Balance O with water', text: 'Add $\\ce{H2O}$ to the side that needs oxygen.' },
            { title: 'Balance H with H⁺', text: 'Add $\\ce{H+}$ to the side that needs hydrogen.' },
            { title: 'Balance charge with electrons', text: 'Add $\\ce{e-}$ to the more positive side until both sides have the same charge. Electrons appear on the right in the oxidation, on the left in the reduction.' },
            { title: 'Equalize electrons and add', text: 'Multiply each half by the factor that makes the electrons equal, then add the halves.' },
            { title: 'Cancel and check', text: 'Cancel electrons and anything else on both sides ($\\ce{H2O}$, $\\ce{H+}$). Check every element and the total charge.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Permanganate oxidizes iron(II): MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (acidic)',
          steps: [
            { tex: '\\text{Mn}: +7 \\to +2 \\ (\\text{reduced}), \\quad \\text{Fe}: +2 \\to +3 \\ (\\text{oxidized})', why: 'Step 1: oxidation numbers identify the two halves.' },
            { tex: '\\ce{Fe^2+ -> Fe^3+ + e-}', why: 'Oxidation half. Fe is balanced, there is no O or H, and one electron on the right makes both sides +2.' },
            { tex: '\\ce{MnO4- -> Mn^2+ + 4H2O}', why: 'Reduction half: Mn already balanced; four O on the left, so add 4 $\\ce{H2O}$ on the right.' },
            { tex: '\\ce{MnO4- + 8H+ -> Mn^2+ + 4H2O}', why: 'The water brought 8 H to the right, so add 8 $\\ce{H+}$ on the left.' },
            { tex: '\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}', why: 'Charge: left $-1 + 8 = +7$, right $+2$. Add 5 electrons to the left to make it +2. Cross-check: Mn dropped from +7 to +2, a gain of exactly 5 electrons.' },
            { tex: '5 \\times (\\ce{Fe^2+ -> Fe^3+ + e-})', why: 'Step 6: the reduction uses 5 electrons, the oxidation supplies 1, so multiply the iron half by 5.' },
            { tex: '\\ce{MnO4- + 8H+ + 5Fe^2+ -> Mn^2+ + 5Fe^3+ + 4H2O}', why: 'Add; the 5 electrons cancel. Check atoms: Mn 1, O 4, H 8, Fe 5 on each side. Charge: $-1 + 8 + 10 = +17$ left, $+2 + 15 = +17$ right.' },
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 236" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ahp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" class="f-purple"/></marker></defs><rect x="8" y="10" width="360" height="54" rx="9" fill="currentColor" class="f-red" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="20" y="29" text-anchor="start" font-size="12.5" class="t-red">oxidation half (× 5): Fe +2 → +3</text><text x="188" y="53" text-anchor="middle" font-size="15">5 Fe²⁺ → 5 Fe³⁺ + 5 e⁻</text><rect x="8" y="80" width="360" height="54" rx="9" fill="currentColor" class="f-blue" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="20" y="99" text-anchor="start" font-size="12.5" class="t-blue">reduction half (× 1): Mn +7 → +2</text><text x="188" y="123" text-anchor="middle" font-size="15">MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O</text><path d="M372 40 C 420 45, 420 100, 374 106" fill="none" stroke="currentColor" class="s-purple" stroke-width="2" marker-end="url(#ahp)"/><text x="458" y="70" text-anchor="middle" font-size="14" class="t-purple" font-weight="600">5 e⁻</text><text x="458" y="87" text-anchor="middle" font-size="11.5" class="t-gray">handed over</text><line x1="8" y1="150" x2="368" y2="150" stroke="currentColor" stroke-width="1.2"/><text x="188" y="178" text-anchor="middle" font-size="15" font-weight="600">MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O</text><text x="188" y="202" text-anchor="middle" font-size="12.5" class="t-gray">electrons cancel: 5 on each side</text><text x="188" y="223" text-anchor="middle" font-size="12.5" class="t-green">charge check: left −1 + 8 + 10 = +17, right +2 + 15 = +17</text></svg>`,
          alt: 'Two stacked boxes. Top: oxidation half, multiplied by 5: 5 Fe2+ gives 5 Fe3+ plus 5 electrons. Bottom: reduction half, multiplied by 1: permanganate plus 8 H+ plus 5 electrons gives Mn2+ plus 4 water. A curved arrow labeled 5 electrons handed over goes from the top box to the bottom box. Below a line, the overall equation and the charge check: plus 17 on each side.',
          caption: 'The multipliers exist only to make the electrons match. Once they do, the electrons cancel and never appear in the overall equation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'Put the steps of the half-reaction method (acidic solution) in the correct order.',
      lines: [
        'Split the reaction into oxidation and reduction half-reactions',
        'Balance all atoms other than O and H',
        'Balance O by adding $\\ce{H2O}$',
        'Balance H by adding $\\ce{H+}$',
        'Balance charge by adding $\\ce{e-}$',
        'Multiply the halves so electrons lost equal electrons gained, then add them',
        'Cancel common species and check atoms and charge',
      ],
      explanation: 'The order matters. Other atoms come first because adding water and $\\ce{H+}$ never changes them. Oxygen comes before hydrogen because adding $\\ce{H2O}$ also adds hydrogen, which the $\\ce{H+}$ step then fixes. Electrons come last within each half because only then is the charge final. Finally, equalize electrons, add, cancel and check both atoms and charge.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Two more acidic examples: dichromate and oxalate',
      blocks: [
        {
          type: 'derivation',
          title: 'Dichromate oxidizes iodide: Cr₂O₇²⁻ + I⁻ → Cr³⁺ + I₂ (acidic)',
          steps: [
            { tex: '\\ce{2I- -> I2 + 2e-}', why: 'Oxidation: balance I first (2 on the left), then add 2 electrons on the right to make both sides −2.' },
            { tex: '\\ce{Cr2O7^2- -> 2Cr^3+}', why: 'Reduction: balance Cr first. The 2 is easy to forget, and every later step depends on it.' },
            { tex: '\\ce{Cr2O7^2- + 14H+ -> 2Cr^3+ + 7H2O}', why: '7 O need 7 $\\ce{H2O}$ on the right; those 14 H need 14 $\\ce{H+}$ on the left.' },
            { tex: '\\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O}', why: 'Charge: left $-2 + 14 = +12$, right $+6$. Add 6 electrons to the left. Cross-check: two Cr each go +6 → +3, gaining $2 \\times 3 = 6$.' },
            { tex: '\\ce{Cr2O7^2- + 14H+ + 6I- -> 2Cr^3+ + 3I2 + 7H2O}', why: 'Multiply the iodide half by 3 (6 electrons) and add. Atoms: Cr 2, O 7, H 14, I 6. Charge: $-2 + 14 - 6 = +6$; right $2(+3) = +6$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Permanganate oxidizes oxalate: MnO₄⁻ + C₂O₄²⁻ → Mn²⁺ + CO₂ (acidic)',
          steps: [
            { tex: '\\ce{C2O4^2- -> 2CO2 + 2e-}', why: 'C goes from +3 (in oxalate: $2x - 8 = -2$) to +4. Two carbons, so 2 electrons. Charge: −2 = 0 + (−2).' },
            { tex: '\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}', why: 'The same permanganate half as before: it is the same whatever it oxidizes.' },
            { tex: '2 \\times (\\text{Mn half}) + 5 \\times (\\text{C half}): \\ 10\\ \\text{e}^-', why: 'LCM of 5 and 2 is 10.' },
            { tex: '\\ce{2MnO4- + 16H+ + 5C2O4^2- -> 2Mn^2+ + 10CO2 + 8H2O}', why: 'Add and cancel electrons. Atoms: Mn 2, O $8 + 20 = 28 = 20 + 8$, H 16, C 10. Charge: $-2 + 16 - 10 = +4$; right $+4$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Reuse half-reactions',
          text: 'A half-reaction depends only on the species in it, so you can keep a mental library: permanganate to $\\ce{Mn^2+}$ always takes 5 electrons and 8 $\\ce{H+}$; dichromate to $\\ce{Cr^3+}$ always takes 6 electrons and 14 $\\ce{H+}$. Tables of standard reduction potentials in the electrochemistry unit are exactly such a library, each half written as a reduction.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Never balance oxygen by adding $\\ce{O2}$ or $\\ce{O^2-}$, and never balance hydrogen with $\\ce{H2}$, unless they are genuinely reactants or products. Free oxide ions do not exist in water, and $\\ce{O2}$ or $\\ce{H2}$ would mean a different reaction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Copper dissolves in dilute nitric acid, releasing colorless NO gas. The half-reactions are $\\ce{Cu -> Cu^2+ + 2e-}$ and $\\ce{NO3- + 4H+ + 3e- -> NO + 2H2O}$. Type the smallest whole-number coefficients of the balanced equation.',
      template: '___ $\\ce{Cu}$ + ___ $\\ce{NO3-}$ + ___ $\\ce{H+}$ $\\ce{->}$ ___ $\\ce{Cu^2+}$ + ___ $\\ce{NO}$ + ___ $\\ce{H2O}$',
      blanks: [{ answers: ['3'] }, { answers: ['2'] }, { answers: ['8'] }, { answers: ['3'] }, { answers: ['2'] }, { answers: ['4'] }],
      hint: 'Copper gives 2 electrons, nitrate takes 3. The LCM is 6.',
      explanation: 'Multiply the copper half by 3 and the nitrate half by 2: $\\ce{3Cu -> 3Cu^2+ + 6e-}$ and $\\ce{2NO3- + 8H+ + 6e- -> 2NO + 4H2O}$. Adding gives $\\ce{3Cu + 2NO3- + 8H+ -> 3Cu^2+ + 2NO + 4H2O}$. Check atoms: Cu 3, N 2, O 6 = 2 + 4, H 8. Charge: $-2 + 8 = +6$ on the left, $3(+2) = +6$ on the right. In the molecular equation, $\\ce{3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO + 4H2O}$, six of the eight nitrates are spectators.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Balancing in basic solution',
      blocks: [
        {
          type: 'p',
          text: 'In basic solution there is almost no $\\ce{H+}$, so a final answer containing $\\ce{H+}$ is wrong. The cleanest method: **balance as if acidic, then neutralize**. Add as many $\\ce{OH-}$ to **both** sides as there are $\\ce{H+}$; on the side with $\\ce{H+}$ they combine into water ($\\ce{H+ + OH- -> H2O}$); then cancel any water that appears on both sides.',
        },
        {
          type: 'derivation',
          title: 'Permanganate oxidizes iodide in base: MnO₄⁻ + I⁻ → MnO₂ + IO₃⁻',
          steps: [
            { tex: '\\ce{I- + 3H2O -> IO3- + 6H+ + 6e-}', why: 'Oxidation (I: −1 → +5, six electrons). 3 $\\ce{H2O}$ supply the oxygen, 6 $\\ce{H+}$ balance H, 6 $\\ce{e-}$ make both sides −1.' },
            { tex: '\\ce{MnO4- + 4H+ + 3e- -> MnO2 + 2H2O}', why: 'Reduction (Mn: +7 → +4, three electrons). Two O go to water, which needs 4 $\\ce{H+}$. Charge: $-1 + 4 - 3 = 0$.' },
            { tex: '\\ce{2MnO4- + 8H+ + I- + 3H2O -> 2MnO2 + 4H2O + IO3- + 6H+}', why: 'Multiply the reduction by 2 (6 electrons each) and add; the electrons cancel.' },
            { tex: '\\ce{2MnO4- + 2H+ + I- -> 2MnO2 + IO3- + H2O}', why: 'Cancel 6 $\\ce{H+}$ and 3 $\\ce{H2O}$ from both sides. This is the acidic-solution answer.' },
            { tex: '\\ce{2MnO4- + 2H2O + I- -> 2MnO2 + IO3- + H2O + 2OH-}', why: 'Add 2 $\\ce{OH-}$ to both sides; on the left, $\\ce{2H+ + 2OH-}$ become 2 $\\ce{H2O}$.' },
            { tex: '\\ce{2MnO4- + I- + H2O -> 2MnO2 + IO3- + 2OH-}', why: 'Cancel one water. Check: Mn 2; O $8 + 1 = 9 = 4 + 3 + 2$; H 2; I 1. Charge: $-2 - 1 = -3$ and $-1 - 2 = -3$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'A disproportionation: chlorine in hot base, Cl₂ → Cl⁻ + ClO₃⁻',
          steps: [
            { tex: '\\ce{Cl2 + 2e- -> 2Cl-}', why: 'Reduction: Cl 0 → −1. The same species is the starting material for both halves.' },
            { tex: '\\ce{Cl2 + 6H2O -> 2ClO3- + 12H+ + 10e-}', why: 'Oxidation: Cl 0 → +5, two atoms, so 10 electrons. 6 O from water, 12 $\\ce{H+}$ to balance H.' },
            { tex: '\\ce{6Cl2 + 6H2O -> 10Cl- + 2ClO3- + 12H+}', why: '5 × reduction + 1 × oxidation, then add. Electrons: 10 each.' },
            { tex: '\\ce{3Cl2 + 3H2O -> 5Cl- + ClO3- + 6H+}', why: 'Divide every coefficient by 2 for smallest whole numbers.' },
            { tex: '\\ce{3Cl2 + 6OH- -> 5Cl- + ClO3- + 3H2O}', why: 'Add 6 $\\ce{OH-}$ to both sides (6 $\\ce{H2O}$ form on the right), cancel 3 waters. Charge: −6 and $-5 - 1 = -6$.' },
          ],
          result: 'In **cold** base chlorine stops at hypochlorite (bleach), $\\ce{Cl2 + 2OH- -> Cl- + ClO- + H2O}$; in hot base it goes on to chlorate. Same element, same method.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student balances the reduction of nitrate to ammonium in acidic solution, $\\ce{NO3- -> NH4+}$. Tap the first line that is wrong.',
      lines: [
        'N is already balanced: one on each side',
        'Balance O: $\\ce{NO3- -> NH4+ + 3H2O}$',
        'Balance H (4 + 6 = 10 on the right): $\\ce{10H+ + NO3- -> NH4+ + 3H2O}$',
        'Charge: left $+10 - 1 = +9$, right $+1$, so add 8 electrons to the right: $\\ce{10H+ + NO3- -> NH4+ + 3H2O + 8e-}$',
      ],
      errorLines: [4],
      explanation: 'Electrons are added to the **more positive** side to lower its charge. The left is +9 and the right is +1, so 8 electrons go on the left: $\\ce{NO3- + 10H+ + 8e- -> NH4+ + 3H2O}$, with +1 on each side. Line 4 puts them on the right, making the right side −7. The oxidation numbers confirm it: N goes from +5 to −3, a gain of 8 electrons, which means a reduction with electrons as a reactant.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Checking your answer, and the linear-algebra view',
      blocks: [
        {
          type: 'p',
          text: 'Every redox answer gets three checks, and they catch different mistakes:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Atoms.** Count every element, including O and H, on both sides.',
            '**Charge.** Sum the charges on each side. They must be equal, though not necessarily zero.',
            '**Electrons vs oxidation numbers.** The electrons in each half must match the change in oxidation number times the number of atoms changing (Mn +7 → +2 is 5; two Cr +6 → +3 is 6).',
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Atoms balance, charge does not',
            tone: 'bad',
            tex: ['\\ce{MnO4- + 8H+ + Fe^2+ -> Mn^2+ + Fe^3+ + 4H2O}', '\\text{charge: } +9 \\ne +5'],
            text: 'Looks balanced element by element, but iron supplies only 1 electron where permanganate needs 5.',
          },
          right: {
            title: 'Atoms and charge both balance',
            tone: 'good',
            tex: ['\\ce{MnO4- + 8H+ + 5Fe^2+ -> Mn^2+ + 5Fe^3+ + 4H2O}', '\\text{charge: } +17 = +17'],
            text: 'Five iron(II) ions provide the five electrons.',
          },
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Balancing as a null space, now with a charge row',
          text: 'In Foundations you balanced combustion by finding the [[null-space]] of an element-count [[matrix]]. Redox needs one more row: **charge**. For $\\ce{MnO4-}$, $\\ce{H+}$, $\\ce{Fe^2+}$ $\\to$ $\\ce{Mn^2+}$, $\\ce{Fe^3+}$, $\\ce{H2O}$ (products negated), the rows Mn, O, H, Fe and charge give $A = \\begin{bmatrix} 1&0&0&-1&0&0 \\\\ 4&0&0&0&0&-1 \\\\ 0&1&0&0&0&-2 \\\\ 0&0&1&0&-1&0 \\\\ -1&1&2&-2&-3&0 \\end{bmatrix}$. Its null space is spanned by $(\\tfrac14, 2, \\tfrac54, \\tfrac14, \\tfrac54, 1)$, which scales to $(1, 8, 5, 1, 5, 4)$, the half-reaction answer. Drop the charge row and the null space becomes **two**-dimensional: $(0,0,1,0,1,0)$, "$\\ce{Fe^2+ -> Fe^3+}$" on its own, satisfies every atom count. The charge row is exactly what rules out that unphysical solution, which is the linear-algebra version of "electrons lost = electrons gained".',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Balance in **basic** solution: $\\ce{CrO4^2- + SO3^2- -> Cr(OH)3 + SO4^2-}$. Using smallest whole-number coefficients, how many $\\ce{OH-}$ ions appear in the balanced equation?',
      hint: 'Acidic halves: $\\ce{CrO4^2- + 5H+ + 3e- -> Cr(OH)3 + H2O}$ and $\\ce{SO3^2- + H2O -> SO4^2- + 2H+ + 2e-}$. Equalize electrons (6), add, cancel, then add $\\ce{OH-}$ to both sides for every remaining $\\ce{H+}$.',
      label: 'number of $\\ce{OH-}$ $=$',
      answer: '4',
      explanation: 'Multiply the chromium half by 2 and the sulfite half by 3: $\\ce{2CrO4^2- + 10H+ + 6e- -> 2Cr(OH)3 + 2H2O}$ and $\\ce{3SO3^2- + 3H2O -> 3SO4^2- + 6H+ + 6e-}$. Adding and cancelling 6 $\\ce{H+}$ and 2 $\\ce{H2O}$ gives $\\ce{2CrO4^2- + 3SO3^2- + 4H+ + H2O -> 2Cr(OH)3 + 3SO4^2-}$. Add 4 $\\ce{OH-}$ to both sides: the left gains 4 more waters, so $\\ce{2CrO4^2- + 3SO3^2- + 5H2O -> 2Cr(OH)3 + 3SO4^2- + 4OH-}$. Check: charge $-4 - 6 = -10$ and $-6 - 4 = -10$; O $8 + 9 + 5 = 22 = 6 + 12 + 4$; H $10 = 6 + 4$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Redox titrations: permanganate is its own indicator',
      blocks: [
        {
          type: 'p',
          text: 'A redox titration uses an oxidizing or reducing titrant exactly as an acid–base titration uses $\\ce{OH-}$. Potassium permanganate is the classic oxidizing titrant, and it has a bonus: $\\ce{MnO4-}$ is intensely purple, while its product $\\ce{Mn^2+}$ is almost colorless. While any reducing agent remains in the flask, each purple drop is decolorized instantly. **One drop past the equivalence point**, unreacted permanganate survives and the solution turns a persistent pale pink. No added indicator is needed.',
        },
        {
          type: 'graph',
          x: [0, 60],
          y: [0, 5.5],
          xStep: 10,
          yStep: 1,
          functions: [
            { expr: 'max(0, n - 0.1x)', label: '$\\ce{Fe^2+}$ left (mmol)', color: 'blue' },
            { expr: 'max(0, 0.02x - n/5)', label: 'excess $\\ce{MnO4-}$ (mmol): pink', color: 'purple' },
          ],
          vlines: [{ x: '10n', label: 'end point', color: 'gray' }],
          sliders: [{ name: 'n', min: 1, max: 5, step: 0.1, value: 2.9, label: '$\\ce{Fe^2+}$ in the flask (mmol)' }],
          readouts: [{ label: 'end-point volume (mL) $=$', expr: '10n', digits: 3 }],
          caption: 'Horizontal axis: mL of 0.0200 M $\\ce{KMnO4}$. Each mL delivers 0.0200 mmol of $\\ce{MnO4-}$, which oxidizes $5 \\times 0.0200 = 0.100$ mmol of $\\ce{Fe^2+}$. Permanganate cannot accumulate (purple line at zero) until the iron is gone; then it appears immediately, and the color tells you to stop.',
        },
        {
          type: 'p',
          text: 'Permanganate solutions slowly decompose, so like NaOH they are **standardized**, here against the primary standard sodium oxalate, $\\ce{Na2C2O4}$ (134.00 g/mol), using the oxalate equation you balanced above.',
        },
        {
          type: 'derivation',
          title: 'Standardizing KMnO₄: 0.2500 g of Na₂C₂O₄ needs 37.30 mL',
          steps: [
            { tex: '\\ce{2MnO4- + 16H+ + 5C2O4^2- -> 2Mn^2+ + 10CO2 + 8H2O}', why: 'The balanced equation supplies the mole ratio: 2 permanganate per 5 oxalate.' },
            { tex: 'n(\\ce{C2O4^2-}) = \\frac{0.2500\\ \\text{g}}{134.00\\ \\text{g/mol}} = 1.8657 \\times 10^{-3}\\ \\text{mol}', why: 'Moles of the weighed primary standard.' },
            { tex: 'n(\\ce{MnO4-}) = 1.8657 \\times 10^{-3} \\times \\tfrac{2}{5} = 7.463 \\times 10^{-4}\\ \\text{mol}', why: 'Mole ratio from the equation. Not 1 : 1: this is where redox titrations differ from simple acid–base ones.' },
            { tex: '[\\ce{KMnO4}] = \\frac{7.463 \\times 10^{-4}\\ \\text{mol}}{0.03730\\ \\text{L}} = 0.02001\\ \\text{M}', why: 'Divide by the buret volume. (The titration is done in hot sulfuric acid, because the reaction with oxalate is slow when cold.)' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Other redox titrations need indicators. In **iodometry**, iodine is titrated with thiosulfate, $\\ce{2S2O3^2- + I2 -> S4O6^2- + 2I-}$ (that is where the tetrathionate ion of the last lesson comes from), and starch is added near the end: it forms a deep blue complex with $\\ce{I2}$ that vanishes sharply when the last iodine is reduced.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A 0.4500 g sample of iron ore is dissolved in acid and all the iron is converted to $\\ce{Fe^2+}$. Titration requires 28.75 mL of 0.02000 M $\\ce{KMnO4}$ ($\\ce{MnO4- + 8H+ + 5Fe^2+ -> Mn^2+ + 5Fe^3+ + 4H2O}$). What is the mass percent of iron in the ore? Fe = 55.845 g/mol; four significant figures.',
      hint: 'Moles $\\ce{MnO4-}$ = $M \\times V$; moles Fe = 5 × that; grams Fe = moles × 55.845; percent = grams ÷ 0.4500 × 100.',
      label: 'mass % Fe $=$',
      unit: '%',
      answer: '0.02000*0.02875*5*55.845/0.4500*100',
      answerTex: '35.68\\%',
      tolerance: 0.006,
      explanation: '$n(\\ce{MnO4-}) = 0.02875\\ \\text{L} \\times 0.02000\\ \\text{M} = 5.750 \\times 10^{-4}$ mol. Each permanganate oxidizes 5 $\\ce{Fe^2+}$, so $n(\\text{Fe}) = 2.875 \\times 10^{-3}$ mol, and $2.875 \\times 10^{-3} \\times 55.845 = 0.1606$ g of Fe. Mass percent $= 0.1606 / 0.4500 \\times 100\\% = 35.68\\%$. Using a 1 : 1 ratio by mistake gives 7.14%.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A 10.00 mL sample of a hydrogen peroxide disinfectant is titrated in acid with 0.02000 M $\\ce{KMnO4}$; the pink end point appears at 17.60 mL. Peroxide is oxidized to $\\ce{O2}$ and permanganate is reduced to $\\ce{Mn^2+}$. Balance the equation yourself, then find the molarity of $\\ce{H2O2}$ to three significant figures.',
      hint: 'Oxidation half: $\\ce{H2O2 -> O2 + 2H+ + 2e-}$. Reduction half: $\\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}$. LCM of 2 and 5 is 10.',
      label: '$[\\ce{H2O2}] =$',
      unit: 'M',
      answer: '0.02000*0.01760*5/2/0.01000',
      answerTex: '0.0880\\ \\text{M}',
      tolerance: 0.00006,
      explanation: 'Multiply the peroxide half by 5 and the permanganate half by 2, add, and cancel 10 $\\ce{H+}$: $\\ce{2MnO4- + 5H2O2 + 6H+ -> 2Mn^2+ + 5O2 + 8H2O}$ (charge +4 on each side). Then $n(\\ce{MnO4-}) = 0.01760 \\times 0.02000 = 3.520 \\times 10^{-4}$ mol, $n(\\ce{H2O2}) = \\tfrac{5}{2} \\times 3.520 \\times 10^{-4} = 8.800 \\times 10^{-4}$ mol, and $[\\ce{H2O2}] = 8.800 \\times 10^{-4} / 0.01000\\ \\text{L} = 0.0880$ M. Note that here peroxide is the **reducing** agent: oxygen goes from −1 up to 0.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'In a correctly balanced redox equation, the total charge on each side must be zero.',
      answer: false,
      explanation: 'Charge must be **equal** on the two sides, not zero. $\\ce{MnO4- + 8H+ + 5Fe^2+ -> Mn^2+ + 5Fe^3+ + 4H2O}$ has +17 on each side, and the basic-solution answer $\\ce{2MnO4- + I- + H2O -> 2MnO2 + IO3- + 2OH-}$ has −3 on each side. Net ionic equations leave out the spectator ions that would make the whole solution neutral, so their sides usually carry a net charge.',
    },
  ],
  takeaways: [
    'A redox equation must balance atoms **and** charge; equivalently, electrons lost = electrons gained.',
    'Acidic solution: split into halves → balance other atoms → O with $\\ce{H2O}$ → H with $\\ce{H+}$ → charge with $\\ce{e-}$ → equalize electrons and add → cancel and check.',
    'Basic solution: balance as acidic, add one $\\ce{OH-}$ to both sides for each $\\ce{H+}$, combine into water, cancel water.',
    'Cross-check each half: electrons = change in oxidation number × number of atoms changing (permanganate to $\\ce{Mn^2+}$: 5; dichromate to $\\ce{Cr^3+}$: 6).',
    'As linear algebra, the charge row is what pins the null space of the balancing matrix down to one physical reaction.',
    'Permanganate is self-indicating (purple → colorless until the end point, then pink); it is standardized with sodium oxalate, and redox titration mole ratios come from the balanced equation (e.g. 5 $\\ce{Fe^2+}$ per $\\ce{MnO4-}$).',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 17: Electrochemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/17-introduction',
      source: 'openstax',
      note: 'Section 17.1 reviews redox chemistry and works through the half-reaction method in acidic and basic solution.',
    },
    {
      title: 'OpenStax Chemistry 2e — Chapter 4: Stoichiometry of Chemical Reactions',
      url: 'https://openstax.org/books/chemistry-2e/pages/4-introduction',
      source: 'openstax',
      note: 'Section 4.2 introduces the half-reaction method and section 4.5 covers titration calculations.',
    },
    {
      title: 'Wikipedia — Permanganometry',
      url: 'https://en.wikipedia.org/wiki/Permanganometry',
      source: 'wikipedia',
      note: 'Redox titrations with permanganate: what can be determined, standardization with oxalate, and the self-indicating end point.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "balancing redox reactions" for many more worked examples in acidic and basic solution.',
    },
  ],
};
