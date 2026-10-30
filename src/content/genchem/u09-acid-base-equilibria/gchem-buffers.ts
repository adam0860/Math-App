import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-buffers',
  title: 'Buffers',
  summary: 'The common-ion effect, how a weak acid and its conjugate base hold the pH steady, the Henderson–Hasselbalch equation, the two-step calculation after adding strong acid or base, buffer capacity and range, designing a buffer, and the bicarbonate buffer in your blood.',
  minutes: 22,
  objectives: [
    'Explain the common-ion effect and calculate the pH of a weak acid containing its conjugate base',
    'Explain at the particle level how a buffer neutralizes added $\\ce{H3O+}$ and $\\ce{OH-}$',
    'Derive the Henderson–Hasselbalch equation and use it to find buffer pH',
    'Calculate the pH of a buffer after adding strong acid or base: stoichiometry first, then equilibrium',
    'Describe buffer capacity and range ($\\text{p}K_a \\pm 1$), design a buffer of a target pH, and analyze the blood bicarbonate buffer',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The common-ion effect',
      blocks: [
        {
          type: 'p',
          text: 'In the first lesson of this unit, $0.10\\ \\text{M}$ acetic acid had pH 2.87 and was 1.3% ionized. Now dissolve sodium acetate in it too, so the solution starts out with $0.10\\ \\text{M}$ acetate ion, one of the products of the acid\'s ionization. Le Châtelier predicts that the equilibrium $\\ce{CH3COOH + H2O <=> H3O+ + CH3COO-}$ shifts left. The ICE table measures by how much.',
        },
        {
          type: 'derivation',
          title: '0.10 M $\\ce{CH3COOH}$ + 0.10 M $\\ce{NaCH3COO}$ ($K_a = 1.8 \\times 10^{-5}$)',
          steps: [
            { tex: '\\begin{array}{lccc} & [\\ce{CH3COOH}] & [\\ce{H3O+}] & [\\ce{CH3COO-}] \\\\ \\hline \\text{I} & 0.10 & \\approx 0 & 0.10 \\\\ \\text{C} & -x & +x & +x \\\\ \\text{E} & 0.10 - x & x & 0.10 + x \\end{array}', why: 'The only difference from the plain acid is the **initial** acetate, $0.10\\ \\text{M}$ from the fully dissolved salt ($\\ce{Na+}$ is a spectator).' },
            { tex: 'K_a = \\frac{x(0.10 + x)}{0.10 - x} = 1.8 \\times 10^{-5}', why: 'Substitute the equilibrium row into $K_a$.' },
            { tex: '\\frac{x(0.10)}{0.10} \\approx 1.8 \\times 10^{-5} \\implies x = 1.8 \\times 10^{-5}\\ \\text{M}', why: 'With a large initial acetate, $x$ is tiny compared with 0.10 in both places. The 0.10s cancel.' },
            { tex: '\\text{pH} = -\\log(1.8 \\times 10^{-5}) = 4.74', why: 'Check: $x$ is 0.018% of 0.10. The approximation is excellent.' },
          ],
          result: 'pH $= 4.74$ instead of 2.87, and only 0.018% of the acid is ionized instead of 1.3%: the added acetate suppressed the ionization about 75-fold.',
        },
        {
          type: 'definition',
          term: 'Common-ion effect',
          text: 'The [[gchem-common-ion-effect|common-ion effect]] is the suppression of an equilibrium by adding an ion that it already produces. It explains buffers in this lesson and the reduced solubility of salts in the last lesson of the unit.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the pH came out equal to the pKa',
          text: 'Solve $K_a = \\frac{[\\ce{H3O+}][\\ce{A-}]}{[\\ce{HA}]}$ for the hydronium: $[\\ce{H3O+}] = K_a \\frac{[\\ce{HA}]}{[\\ce{A-}]}$. When the acid and its conjugate base are present in **equal** amounts, the ratio is 1 and $[\\ce{H3O+}] = K_a$ exactly, so pH $=$ pKa. That observation is the seed of everything else in this lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A solution is $0.20\\ \\text{M}$ in $\\ce{NH3}$ and $0.10\\ \\text{M}$ in $\\ce{NH4Cl}$. Use an ICE table with $K_b = 1.8 \\times 10^{-5}$ to find its pH (two decimal places).',
      hint: 'Initial: $[\\ce{NH3}] = 0.20$, $[\\ce{NH4+}] = 0.10$, $[\\ce{OH-}] \\approx 0$. Then $\\frac{(0.10 + x)x}{0.20 - x} \\approx \\frac{0.10x}{0.20} = K_b$.',
      label: 'pH $=$',
      answer: '14 + log(1.8*10^-5*0.20/0.10)',
      answerTex: '9.56',
      tolerance: 0.006,
      explanation: 'With the common ion $\\ce{NH4+}$ present, $x = [\\ce{OH-}] = K_b \\cdot \\frac{0.20}{0.10} = 3.6 \\times 10^{-5}\\ \\text{M}$ (tiny compared with 0.10 and 0.20, so the approximation holds). pOH $= -\\log(3.6 \\times 10^{-5}) = 4.44$ and pH $= 14.00 - 4.44 = 9.56$. Ammonia alone at $0.20\\ \\text{M}$ would give pH 11.28.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'How a buffer works',
      blocks: [
        {
          type: 'p',
          text: 'Add $0.010\\ \\text{mol}$ of NaOH to a liter of pure water and the pH leaps from 7.00 to 12.00. Add the same NaOH to a liter of the acetic acid–acetate mixture you just analyzed and the pH moves from 4.74 to 4.83. The mixture is a **buffer**.',
        },
        {
          type: 'definition',
          term: 'Buffer',
          text: 'A [[gchem-buffer|buffer]] is a solution that resists changes in pH when small amounts of strong acid or base are added. It contains a weak acid and its conjugate base (or a weak base and its conjugate acid), both in substantial and comparable amounts.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 30 500 270" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="60" width="140" height="140" rx="10" fill="none" stroke="currentColor" class="s-red" stroke-width="1.8"/><text x="74" y="50" text-anchor="middle" font-size="13">after adding H₃O⁺</text><circle cx="34" cy="100" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="34" y="104" text-anchor="middle" font-size="11">HA</text><circle cx="74" cy="94" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="74" y="98" text-anchor="middle" font-size="11">A⁻</text><circle cx="114" cy="104" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="114" y="108" text-anchor="middle" font-size="11">HA</text><circle cx="46" cy="140" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="46" y="144" text-anchor="middle" font-size="11">A⁻</text><circle cx="90" cy="136" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="90" y="140" text-anchor="middle" font-size="11">HA</text><circle cx="124" cy="152" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="124" y="156" text-anchor="middle" font-size="11">A⁻</text><circle cx="36" cy="176" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="36" y="180" text-anchor="middle" font-size="11">HA</text><circle cx="82" cy="178" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="82" y="182" text-anchor="middle" font-size="11">HA</text><text x="74" y="220" text-anchor="middle" font-size="12">5 HA : 3 A⁻</text><text x="74" y="238" text-anchor="middle" font-size="13" class="t-purple">pH = 4.52</text><rect x="180" y="60" width="140" height="140" rx="10" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.8"/><text x="250" y="50" text-anchor="middle" font-size="13">buffer</text><circle cx="210" cy="100" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="210" y="104" text-anchor="middle" font-size="11">HA</text><circle cx="250" cy="94" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="250" y="98" text-anchor="middle" font-size="11">A⁻</text><circle cx="290" cy="104" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="290" y="108" text-anchor="middle" font-size="11">HA</text><circle cx="222" cy="140" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="222" y="144" text-anchor="middle" font-size="11">A⁻</text><circle cx="266" cy="136" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="266" y="140" text-anchor="middle" font-size="11">HA</text><circle cx="300" cy="152" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="300" y="156" text-anchor="middle" font-size="11">A⁻</text><circle cx="212" cy="176" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="212" y="180" text-anchor="middle" font-size="11">HA</text><circle cx="258" cy="178" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="258" y="182" text-anchor="middle" font-size="11">A⁻</text><text x="250" y="220" text-anchor="middle" font-size="12">4 HA : 4 A⁻</text><text x="250" y="238" text-anchor="middle" font-size="13" class="t-purple">pH = 4.74</text><rect x="356" y="60" width="140" height="140" rx="10" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><text x="426" y="50" text-anchor="middle" font-size="13">after adding OH⁻</text><circle cx="386" cy="100" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="386" y="104" text-anchor="middle" font-size="11">HA</text><circle cx="426" cy="94" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="426" y="98" text-anchor="middle" font-size="11">A⁻</text><circle cx="466" cy="104" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="466" y="108" text-anchor="middle" font-size="11">HA</text><circle cx="398" cy="140" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="398" y="144" text-anchor="middle" font-size="11">A⁻</text><circle cx="442" cy="136" r="14" fill="currentColor" class="f-blue" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="442" y="140" text-anchor="middle" font-size="11">HA</text><circle cx="476" cy="152" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="476" y="156" text-anchor="middle" font-size="11">A⁻</text><circle cx="388" cy="176" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="388" y="180" text-anchor="middle" font-size="11">A⁻</text><circle cx="434" cy="178" r="14" fill="currentColor" class="f-red" fill-opacity="0.22" stroke="currentColor" stroke-width="1.3"/><text x="434" y="182" text-anchor="middle" font-size="11">A⁻</text><text x="426" y="220" text-anchor="middle" font-size="12">3 HA : 5 A⁻</text><text x="426" y="238" text-anchor="middle" font-size="13" class="t-purple">pH = 4.96</text><line x1="176" y1="130" x2="150" y2="130" stroke="currentColor" class="s-red" stroke-width="2.2"/><polyline points="158,124 149,130 158,136" fill="none" stroke="currentColor" class="s-red" stroke-width="2.2"/><line x1="324" y1="130" x2="350" y2="130" stroke="currentColor" class="s-blue" stroke-width="2.2"/><polyline points="342,124 351,130 342,136" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.2"/><text x="124" y="266" text-anchor="middle" font-size="12" class="t-red">A⁻ + H₃O⁺ → HA + H₂O</text><text x="376" y="266" text-anchor="middle" font-size="12" class="t-blue">HA + OH⁻ → A⁻ + H₂O</text><text x="250" y="290" text-anchor="middle" font-size="12" class="t-gray">pKₐ = 4.74 (acetic acid); the strong acid or base becomes the buffer's own weak partner</text></svg>`,
          alt: 'Three boxes of particles. Center: a buffer with 4 HA and 4 A minus particles, pH 4.74. Left, after adding hydronium: 5 HA and 3 A minus, pH 4.52, with the reaction A minus plus H3O plus gives HA plus water. Right, after adding hydroxide: 3 HA and 5 A minus, pH 4.96, with the reaction HA plus OH minus gives A minus plus water.',
          caption: 'Each component neutralizes one kind of intruder. Added $\\ce{H3O+}$ is captured by $\\ce{A-}$; added $\\ce{OH-}$ is captured by $\\ce{HA}$. Both reactions go essentially to completion (they are the reverse of a weak acid or weak base ionization), so the strong acid or base disappears and only the HA : A⁻ ratio shifts a little.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the pH barely moves',
          text: 'From the previous card, $[\\ce{H3O+}] = K_a \\frac{[\\ce{HA}]}{[\\ce{A-}]}$. The pH depends only on the **ratio** of the two components. If both are present in large amounts, converting a little of one into the other changes the ratio only slightly, and the logarithm in pH softens it further. Without a buffer, every added $\\ce{OH-}$ ion stays free and directly sets the pH.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A strong acid and its salt is not a buffer',
          text: 'HCl with NaCl does not buffer: $\\ce{Cl-}$ is too weak a base to capture added $\\ce{H3O+}$, and there is no weak acid to capture $\\ce{OH-}$. A buffer needs a **weak** conjugate pair, so that each partner can actually react.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Which of these mixtures, each dissolved in water to make 1.0 L, is a buffer?',
      options: [
        { text: '0.10 mol HCl and 0.10 mol NaCl', why: 'HCl is a strong acid and $\\ce{Cl-}$ has no base strength. Nothing can capture added $\\ce{H3O+}$.' },
        { text: '0.10 mol $\\ce{CH3COOH}$ and 0.10 mol NaOH', why: 'The NaOH converts **all** of the acetic acid into acetate. With no weak acid left, there is nothing to neutralize added base; this is just a sodium acetate solution.' },
        { text: '0.10 mol $\\ce{CH3COOH}$ and 0.050 mol NaOH', correct: true, why: 'NaOH neutralizes half the acid, leaving 0.050 mol $\\ce{CH3COOH}$ and 0.050 mol $\\ce{CH3COO-}$: a buffer with pH $=$ pKa $= 4.74$. Partial neutralization is a common way to make a buffer.' },
        { text: '0.10 mol NaOH and 0.10 mol NaCl', why: 'A strong base with a neutral salt. There is no weak conjugate pair at all.' },
      ],
      explanation: 'A buffer needs significant amounts of both a weak acid and its conjugate base. You can mix them directly or make one from the other: adding strong base to a weak acid (less than one equivalent) produces the conjugate base in place. Half-neutralizing gives equal amounts, the most balanced buffer possible.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The Henderson–Hasselbalch equation',
      blocks: [
        {
          type: 'p',
          text: 'Taking the logarithm of the $K_a$ expression turns the buffer insight into a one-line formula.',
        },
        {
          type: 'derivation',
          title: 'Derivation',
          steps: [
            { tex: 'K_a = \\frac{[\\ce{H3O+}][\\ce{A-}]}{[\\ce{HA}]}', why: 'Start from the acid ionization constant.' },
            { tex: '[\\ce{H3O+}] = K_a \\cdot \\frac{[\\ce{HA}]}{[\\ce{A-}]}', why: 'Solve for the hydronium concentration.' },
            { tex: '-\\log[\\ce{H3O+}] = -\\log K_a - \\log\\frac{[\\ce{HA}]}{[\\ce{A-}]}', why: 'Take $-\\log$ of both sides; the log of a product is the sum of the logs.' },
            { tex: '\\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]}', why: '$-\\log\\frac{a}{b} = +\\log\\frac{b}{a}$: flipping the fraction absorbs the minus sign.' },
          ],
          result: 'This is the [[gchem-henderson-hasselbalch|Henderson–Hasselbalch equation]]. Base on top, acid on the bottom.',
        },
        {
          type: 'p',
          text: 'The equation itself is exact at equilibrium. The shortcut is to plug in the concentrations you **made up** rather than the equilibrium ones. The common-ion card showed why that works: the acid ionizes so little in the presence of its conjugate base that $0.10 - x \\approx 0.10$ and $0.10 + x \\approx 0.10$. It is reliable when both concentrations are much larger than $K_a$ (say $\\ge 100 K_a$) and their ratio lies between 0.1 and 10.',
        },
        {
          type: 'derivation',
          title: 'pH of 0.25 M $\\ce{CH3COOH}$ / 0.15 M $\\ce{NaCH3COO}$',
          steps: [
            { tex: '\\text{p}K_a = -\\log(1.8 \\times 10^{-5}) = 4.74', why: 'Convert the constant once.' },
            { tex: '\\text{pH} = 4.74 + \\log\\frac{0.15}{0.25} = 4.74 + \\log 0.60', why: 'Conjugate base (acetate) on top, acid on the bottom.' },
            { tex: '= 4.74 - 0.22 = 4.52', why: 'More acid than base, so the pH sits a little below the pKa.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Moles work as well as molarities',
          text: 'Both $\\ce{HA}$ and $\\ce{A-}$ are in the same solution volume $V$, so $\\frac{[\\ce{A-}]}{[\\ce{HA}]} = \\frac{n_{\\ce{A-}}/V}{n_{\\ce{HA}}/V} = \\frac{n_{\\ce{A-}}}{n_{\\ce{HA}}}$. Use moles directly: it saves dividing by volumes and it is exactly what you need after a stoichiometry step. It also explains why diluting a buffer leaves its pH unchanged.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Chlorine disinfection depends on pH',
          text: 'In chlorinated water, $\\ce{HOCl}$ ($\\text{p}K_a = 7.54$) is a far more effective germicide than $\\ce{OCl-}$. Henderson–Hasselbalch gives the fraction: at pH 6.5, $\\log\\frac{[\\ce{OCl-}]}{[\\ce{HOCl}]} = -1.04$, so about 92% is $\\ce{HOCl}$; at pH 8.5 only about 10% is. That is why water treatment guidance asks for a pH below 8 for chlorine disinfection.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Complete the Henderson–Hasselbalch equation for a buffer of a weak acid HA and its conjugate base.',
      template: 'pH $=$ ___ $+ \\log$ ( ___ / ___ )',
      blanks: [{ answers: ['$\\text{p}K_a$'] }, { answers: ['$[\\ce{A-}]$'] }, { answers: ['$[\\ce{HA}]$'] }],
      wordBank: ['$\\text{p}K_a$', '$[\\ce{A-}]$', '$[\\ce{HA}]$', '$\\text{p}K_b$', '$[\\ce{H3O+}]$'],
      explanation: 'pH $= \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]}$. A quick way to remember the order: adding more conjugate **base** should raise the pH, so the base goes on top. With more base than acid the log is positive and pH $>$ pKa; with equal amounts the log is 0 and pH $=$ pKa.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Adding strong acid or base: stoichiometry, then equilibrium',
      blocks: [
        {
          type: 'p',
          text: 'When strong base is added to a buffer, two very different things happen, and you calculate them separately. First the strong base reacts **completely** with the weak acid (a reaction with an enormous $K$, so treat it like a limiting-reactant problem). Then the remaining weak acid and conjugate base settle into their equilibrium, which Henderson–Hasselbalch handles.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Convert to moles', text: 'Find moles of $\\ce{HA}$, $\\ce{A-}$ and the added strong acid or base.' },
            { title: 'Stoichiometry (to completion)', text: 'Added $\\ce{OH-}$: $\\ce{HA + OH- -> A- + H2O}$, so HA goes down and $\\ce{A-}$ goes up by the moles of $\\ce{OH-}$. Added $\\ce{H3O+}$: $\\ce{A- + H3O+ -> HA + H2O}$, the reverse.' },
            { title: 'Equilibrium', text: 'Put the new mole ratio into $\\text{pH} = \\text{p}K_a + \\log\\frac{n_{\\ce{A-}}}{n_{\\ce{HA}}}$.' },
          ],
        },
        {
          type: 'derivation',
          title: '1.00 L of 0.100 M $\\ce{CH3COOH}$ / 0.100 M $\\ce{CH3COO-}$ + 0.010 mol NaOH',
          steps: [
            { tex: 'n_{\\ce{HA}} = 0.100\\ \\text{mol}, \\quad n_{\\ce{A-}} = 0.100\\ \\text{mol}, \\quad n_{\\ce{OH-}} = 0.010\\ \\text{mol}', why: 'Molarity × volume, with $V = 1.00$ L. Assume the solid NaOH does not change the volume.' },
            { tex: '\\begin{array}{lccc} & \\ce{CH3COOH} & \\ce{OH-} & \\ce{CH3COO-} \\\\ \\hline \\text{before} & 0.100 & 0.010 & 0.100 \\\\ \\text{change} & -0.010 & -0.010 & +0.010 \\\\ \\text{after} & 0.090 & 0 & 0.110 \\end{array}', why: 'Stoichiometry table in moles. $\\ce{OH-}$ is the limiting reactant and is used up completely.' },
            { tex: '\\text{pH} = 4.74 + \\log\\frac{0.110}{0.090} = 4.74 + 0.087 = 4.83', why: 'Henderson–Hasselbalch with the new mole ratio.' },
          ],
          result: 'The pH rises by only 0.09. The same 0.010 mol of NaOH in a liter of pure water would give $[\\ce{OH-}] = 0.010\\ \\text{M}$, pH 12.00: a rise of 5 units. (Solving the full equilibrium numerically also gives 4.83.)',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not put the strong base into an ICE table with $K_a$',
          text: 'A common mistake is to add 0.010 to $[\\ce{OH-}]$ in the equilibrium expression. Strong acid and strong base never "sit in equilibrium" with a buffer; they are consumed first. Only after the stoichiometry step is done do you use $K_a$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A buffer is 0.500 L of solution that is $0.20\\ \\text{M}$ $\\ce{NH3}$ and $0.20\\ \\text{M}$ $\\ce{NH4Cl}$. You add 0.020 mol HCl (assume no volume change). What is the new pH? $K_b(\\ce{NH3}) = 1.8 \\times 10^{-5}$, so $\\text{p}K_a(\\ce{NH4+}) = 9.26$. Give two decimal places.',
      hint: 'Moles first: 0.100 mol of each. The acid reacts with the base component: $\\ce{NH3 + H3O+ -> NH4+ + H2O}$. Then pH $= 9.26 + \\log\\frac{n_{\\ce{NH3}}}{n_{\\ce{NH4+}}}$.',
      label: 'pH $=$',
      answer: '14 + log(1.8*10^-5) + log(0.080/0.120)',
      answerTex: '9.08',
      tolerance: 0.006,
      explanation: 'Before: $n_{\\ce{NH3}} = n_{\\ce{NH4+}} = 0.500 \\times 0.20 = 0.100$ mol. The 0.020 mol $\\ce{H3O+}$ converts 0.020 mol $\\ce{NH3}$ into $\\ce{NH4+}$: after, 0.080 mol $\\ce{NH3}$ and 0.120 mol $\\ce{NH4+}$. Here the weak acid is $\\ce{NH4+}$ and the conjugate base is $\\ce{NH3}$, so pH $= 9.26 + \\log\\frac{0.080}{0.120} = 9.26 - 0.18 = 9.08$, a drop of only 0.18.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student adds 0.010 mol HCl to 1.00 L of buffer containing 0.100 mol $\\ce{CH3COOH}$ and 0.100 mol $\\ce{CH3COO-}$ ($\\text{p}K_a = 4.74$). Tap the first line that is wrong.',
      lines: [
        'Moles before: $\\ce{CH3COOH}$ 0.100, $\\ce{CH3COO-}$ 0.100, $\\ce{H3O+}$ 0.010',
        'Reaction: $\\ce{CH3COO- + H3O+ -> CH3COOH + H2O}$, goes to completion',
        'After: $\\ce{CH3COOH}$ 0.090 mol, $\\ce{CH3COO-}$ 0.110 mol',
        'pH $= 4.74 + \\log\\frac{0.110}{0.090} = 4.83$',
      ],
      errorLines: [3],
      explanation: 'The reaction in line 2 is correct, but line 3 applies it backward. Acetate is **consumed** and acetic acid is **formed**: after, $\\ce{CH3COOH} = 0.110$ mol and $\\ce{CH3COO-} = 0.090$ mol. Then pH $= 4.74 + \\log\\frac{0.090}{0.110} = 4.74 - 0.09 = 4.65$. Sanity check: adding acid must lower the pH, and the student\'s answer went up.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Buffer capacity and buffer range',
      blocks: [
        {
          type: 'p',
          text: 'A buffer is not a bottomless sink. Each mole of added $\\ce{OH-}$ uses up a mole of HA, and once the HA is nearly gone the next drop of base has nothing to react with. Two separate ideas describe the limits.',
        },
        {
          type: 'list',
          items: [
            '**[[gchem-buffer-capacity|Buffer capacity]]** is how much strong acid or base the buffer can absorb before the pH changes appreciably. It is proportional to the **amounts** of HA and $\\ce{A-}$: a $1.0\\ \\text{M}$ buffer has ten times the capacity of a $0.10\\ \\text{M}$ buffer with the same pH.',
            '**Buffer range** is the pH interval where the buffer works well, about $\\text{p}K_a \\pm 1$. Outside it the ratio $[\\ce{A-}]/[\\ce{HA}]$ is beyond 10 or below 0.1, one component is scarce, and the pH starts to run.',
          ],
        },
        {
          type: 'graph',
          x: [-0.2, 0.2],
          y: [0, 14],
          xStep: 0.05,
          yStep: 2,
          parametric: [
            { x: '2c*10^(-p)/(10^(-p) + 10^(-t)) + 10^(t - 14) - 10^(-t) - c', y: 't', t: [0.3, 13.7], label: 'buffer', color: 'blue' },
            { x: '10^(t - 14) - 10^(-t)', y: 't', t: [0.3, 13.7], label: 'pure water', color: 'red', dashed: true },
          ],
          hlines: [
            { y: 'p - 1', color: 'gray' },
            { y: 'p + 1', color: 'gray' },
          ],
          sliders: [
            { name: 'c', min: 0.01, max: 0.2, step: 0.01, value: 0.1, label: 'concentration of each component (M)' },
            { name: 'p', min: 3, max: 11, step: 0.01, value: 4.74, label: '$\\text{p}K_a$' },
          ],
          readouts: [
            { label: 'mol/L of base to raise pH from pKa to pKa + 1:', expr: '9c/11', digits: 4 },
          ],
          caption: 'Horizontal axis: moles of strong base added per liter (negative values mean strong acid added). Vertical axis: pH. The buffer (blue) starts with $c$ M of HA and $c$ M of $\\ce{A-}$; the gray lines mark its range, pKa ± 1. Pure water (red, dashed) jumps the instant anything is added. Increase $c$: the flat region widens in proportion, because capacity is set by the amounts present. The curve turns steep near $\\pm c$, when one component runs out.',
        },
        {
          type: 'deepdive',
          title: 'Where the plotted curve comes from',
          blocks: [
            {
              type: 'p',
              text: 'The curve is exact, not Henderson–Hasselbalch. Start from the buffer ($c$ mol HA and $c$ mol NaA per liter) and add $b$ mol/L of NaOH. The solution must be electrically neutral (**charge balance**): total positive charge $[\\ce{Na+}] + [\\ce{H3O+}]$ equals total negative charge $[\\ce{A-}] + [\\ce{OH-}]$. Here $[\\ce{Na+}] = c + b$, and the acetate is the fraction $\\frac{K_a}{K_a + [\\ce{H3O+}]}$ of the total $2c$ (from the $K_a$ expression).',
            },
            {
              type: 'math',
              tex: 'c + b + [\\ce{H3O+}] = \\frac{2c\\,K_a}{K_a + [\\ce{H3O+}]} + \\frac{K_w}{[\\ce{H3O+}]} \\implies b = \\frac{2c\\,K_a}{K_a + h} + \\frac{K_w}{h} - h - c, \\quad h = 10^{-\\text{pH}}',
              caption: 'Solving for $\\text{pH}$ in terms of $b$ would need a cubic, but $b$ in terms of pH is explicit, so the graph plots $(b(\\text{pH}), \\text{pH})$ as a parametric curve. Setting $c = 0$ gives the pure-water curve.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect "which buffer has the greater capacity" (the one with more moles of both components) and "which acid would you choose for a pH 9 buffer" (the one with pKa closest to 9). Do not confuse the two: concentration sets capacity, pKa sets the pH where the buffer can work.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'A buffer that is $0.010\\ \\text{M}$ in both acetic acid and acetate has the same pH as one that is $1.0\\ \\text{M}$ in both, and it resists added strong base just as well.',
      answer: false,
      explanation: 'The first half is true: both have ratio 1, so both have pH $=$ pKa $= 4.74$. The second half is false. Capacity depends on the amounts present. One liter of the dilute buffer is overwhelmed by about 0.01 mol of NaOH (the acetic acid is all used up), while the concentrated one can absorb nearly 1 mol. Play with the concentration slider in the graph to see the flat region shrink.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Designing a buffer of a target pH',
      blocks: [
        {
          type: 'p',
          text: 'To make a buffer, first choose a conjugate pair whose pKa is within 1 unit of the target pH (ideally as close as possible, for the best capacity against both acid and base). Then use Henderson–Hasselbalch backwards to find the ratio, and stoichiometry to find the amounts.',
        },
        {
          type: 'table',
          headers: ['Buffer pair (acid / base)', '$\\text{p}K_a$', 'Useful range'],
          rows: [
            ['$\\ce{CH3COOH}$ / $\\ce{CH3COO-}$', '4.74', '3.7–5.7'],
            ['$\\ce{H2CO3}$ / $\\ce{HCO3-}$', '6.37', '5.4–7.4'],
            ['$\\ce{H2PO4-}$ / $\\ce{HPO4^2-}$', '7.21', '6.2–8.2'],
            ['$\\ce{NH4+}$ / $\\ce{NH3}$', '9.26', '8.3–10.3'],
            ['$\\ce{HCO3-}$ / $\\ce{CO3^2-}$', '10.33', '9.3–11.3'],
          ],
        },
        {
          type: 'derivation',
          title: 'A pH 5.00 acetate buffer from 1.00 L of 0.200 M acetic acid',
          steps: [
            { tex: '\\log\\frac{n_{\\ce{A-}}}{n_{\\ce{HA}}} = \\text{pH} - \\text{p}K_a = 5.00 - 4.745 = 0.255', why: 'Acetic acid is a good choice: 5.00 is within its range. Henderson–Hasselbalch solved for the log ratio, using the unrounded $\\text{p}K_a = -\\log(1.8 \\times 10^{-5}) = 4.745$, because a small error in a log becomes a larger error in the ratio.' },
            { tex: '\\frac{n_{\\ce{A-}}}{n_{\\ce{HA}}} = 10^{0.255} = 1.80', why: 'Undo the log. Equivalently, the ratio is $K_a / [\\ce{H3O+}] = 1.8 \\times 10^{-5} / 1.0 \\times 10^{-5}$.' },
            { tex: 'n_{\\ce{A-}} = 1.80 \\times 0.200\\ \\text{mol} = 0.360\\ \\text{mol}\\ \\ce{NaCH3COO}', why: 'Keep all 0.200 mol of acetic acid and add the salt.' },
            { tex: '0.360\\ \\text{mol} \\times 82.03\\ \\text{g/mol} = 29.5\\ \\text{g}', why: 'Molar mass of sodium acetate, $\\ce{NaC2H3O2}$.' },
          ],
          result: 'Dissolve 29.5 g of sodium acetate in the acid and make up to 1.00 L. Alternatively, add NaOH to the acid: $n$ mol of NaOH gives $\\frac{n}{0.200 - n} = 1.80$, so $n = 0.129$ mol (129 mL of 1.00 M NaOH). In practice you then fine-tune with a pH meter.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'You need a phosphate buffer at pH 7.40, made from $\\ce{NaH2PO4}$ and $\\ce{Na2HPO4}$. For $\\ce{H2PO4- <=> H+ + HPO4^2-}$, $K_{a2} = 6.2 \\times 10^{-8}$. What mole ratio $n(\\ce{HPO4^2-}) / n(\\ce{H2PO4-})$ is needed? Give two decimal places.',
      hint: '$\\text{p}K_{a2} = -\\log(6.2 \\times 10^{-8}) = 7.21$. Then $\\log(\\text{ratio}) = 7.40 - 7.21$.',
      label: 'ratio $=$',
      answer: '10^(7.40 + log(6.2*10^-8))',
      answerTex: '1.56',
      tolerance: 0.015,
      explanation: 'Here the weak acid is $\\ce{H2PO4-}$ and its conjugate base is $\\ce{HPO4^2-}$, so the relevant constant is $K_{a2}$: $\\text{p}K_{a2} = 7.208$. Then $\\log(\\text{ratio}) = 7.40 - 7.208 = 0.192$ and ratio $= 10^{0.192} = 1.56$. Phosphate buffer at pH 7.4 is the standard "physiological" lab buffer (PBS) for exactly this reason: its pKa sits right next to the pH of blood.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Blood: the bicarbonate buffer',
      blocks: [
        {
          type: 'p',
          text: 'Blood plasma stays between pH 7.35 and 7.45. Its main buffer is carbonic acid and bicarbonate, linked to the carbon dioxide your cells make:',
        },
        {
          type: 'math',
          tex: '\\ce{CO2(aq) + H2O <=> H2CO3 <=> H+ + HCO3-}',
          caption: 'At body temperature, treating all dissolved $\\ce{CO2}$ as the acid gives an effective $\\text{p}K_a = 6.1$. Dissolved $\\ce{CO2}$ (in mM) is about $0.03 \\times P_{\\ce{CO2}}$ (in mmHg).',
        },
        {
          type: 'derivation',
          title: 'Normal arterial blood',
          steps: [
            { tex: '[\\ce{CO2}] = 0.03 \\times 40 = 1.2\\ \\text{mM}', why: 'Normal arterial $P_{\\ce{CO2}}$ is 40 mmHg.' },
            { tex: '[\\ce{HCO3-}] = 24\\ \\text{mM}', why: 'Normal plasma bicarbonate.' },
            { tex: '\\text{pH} = 6.1 + \\log\\frac{24}{1.2} = 6.1 + \\log 20 = 7.40', why: 'Henderson–Hasselbalch with base (bicarbonate) over acid (dissolved $\\ce{CO2}$).' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a pKa of 6.1 works at pH 7.4',
          text: 'A ratio of 20 : 1 is outside the "pKa ± 1" rule, so a closed beaker of this mixture would be a poor buffer against base. Blood is an **open system**: the lungs adjust $P_{\\ce{CO2}}$ within minutes by changing your breathing, and the kidneys adjust $[\\ce{HCO3-}]$ over hours to days. Acid from metabolism (lactic acid during hard exercise) converts $\\ce{HCO3-}$ to $\\ce{CO2}$, which you simply exhale. The large bicarbonate reserve and the controllable acid make this buffer far more powerful than its pKa suggests.',
        },
        {
          type: 'list',
          items: [
            '**Hyperventilation** (panic, or the fast breathing of a new arrival at high altitude) blows off $\\ce{CO2}$, the ratio rises and the pH climbs: **respiratory alkalosis**, with tingling and lightheadedness. Over a few days at altitude the kidneys excrete bicarbonate to compensate; acetazolamide, used to prevent altitude sickness, speeds this up.',
            '**Hypoventilation** (breath-holding, a rebreather with exhausted $\\ce{CO2}$ absorbent, airway obstruction) raises $P_{\\ce{CO2}}$ and lowers the pH: **respiratory acidosis**. Rising $\\ce{CO2}$, not falling oxygen, is what drives the urge to breathe.',
            '**Metabolic acidosis** (uncontrolled diabetes, severe exertion, shock) consumes bicarbonate; the body responds by breathing harder to lower $P_{\\ce{CO2}}$ and restore the ratio.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'A soldier newly arrived at high altitude breathes rapidly and lowers arterial $P_{\\ce{CO2}}$ to 30 mmHg, while bicarbonate stays at 24 mM for now. Using $\\text{p}K_a = 6.1$ and $[\\ce{CO2}] = 0.03 \\times P_{\\ce{CO2}}$, what happens to blood pH?',
      options: [
        { text: 'It falls to about 7.28: acidosis', why: 'Lowering $\\ce{CO2}$ removes acid, so the pH must rise, not fall. A pH of 7.28 would need $P_{\\ce{CO2}}$ to **rise** to about 53 mmHg.' },
        { text: 'It stays at 7.40, because blood is buffered', why: 'Buffering limits the change, but here the buffer\'s own acid component is being removed. The ratio $[\\ce{HCO3-}]/[\\ce{CO2}]$ changes, so the pH must change.' },
        { text: 'It rises to about 7.53: respiratory alkalosis', correct: true, why: '$[\\ce{CO2}] = 0.03 \\times 30 = 0.90$ mM; pH $= 6.1 + \\log\\frac{24}{0.90} = 6.1 + 1.43 = 7.53$.' },
        { text: 'It rises to about 8.5, dangerously high', why: 'That would need a ratio of about 250. The ratio only goes from 20 to about 27.' },
      ],
      explanation: 'With less $\\ce{CO2}$ (the acid component), the ratio base/acid rises from $24/1.2 = 20$ to $24/0.90 = 26.7$, and pH $= 6.1 + \\log 26.7 = 7.53$. This is respiratory alkalosis. Over the next days the kidneys excrete bicarbonate, bringing the ratio and the pH back toward normal: acclimatization.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Order the steps for finding the pH of a buffer after adding a strong base.',
      lines: [
        'Convert the buffer components and the added base to moles',
        'Let the $\\ce{OH-}$ react completely with HA: $\\ce{HA + OH- -> A- + H2O}$',
        'Record the new moles of HA and $\\ce{A-}$ (the strong base is used up)',
        'Substitute the new mole ratio into $\\text{pH} = \\text{p}K_a + \\log\\frac{n_{\\ce{A-}}}{n_{\\ce{HA}}}$',
      ],
      distractors: ['Add the moles of $\\ce{OH-}$ to the equilibrium row of a $K_a$ ICE table'],
      explanation: 'Stoichiometry first, equilibrium second. The strong base reacts to completion, so it never appears in the equilibrium step. The distractor is the classic error of treating the strong base as an equilibrium species. (If the added base exceeds the moles of HA, the buffer is destroyed and the excess $\\ce{OH-}$ sets the pH directly.)',
    },
  ],
  takeaways: [
    'Common-ion effect: adding $\\ce{A-}$ to $\\ce{HA}$ suppresses its ionization; with equal amounts, pH $=$ pKa.',
    'A buffer is a weak acid plus its conjugate base: $\\ce{A-}$ captures added $\\ce{H3O+}$, $\\ce{HA}$ captures added $\\ce{OH-}$, and only the ratio shifts.',
    'Henderson–Hasselbalch: $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]}$, and the ratio can be taken in moles.',
    'After adding strong acid or base: first stoichiometry to completion (in moles), then Henderson–Hasselbalch with the new ratio.',
    'Capacity grows with the amounts of the components; the useful range is about pKa ± 1. Choose a pair with pKa near the target pH.',
    'Blood: pH $= 6.1 + \\log\\frac{[\\ce{HCO3-}]}{0.03\\,P_{\\ce{CO2}}}$; the lungs control $\\ce{CO2}$ and the kidneys control bicarbonate, so breathing changes pH quickly.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 14: Acid-Base Equilibria',
      url: 'https://openstax.org/books/chemistry-2e/pages/14-introduction',
      source: 'openstax',
      note: 'Section 14.6, Buffers, covers buffer action, Henderson–Hasselbalch, buffer capacity and the blood buffer system.',
    },
    {
      title: 'Wikipedia — Henderson–Hasselbalch equation',
      url: 'https://en.wikipedia.org/wiki/Henderson%E2%80%93Hasselbalch_equation',
      source: 'wikipedia',
      note: 'Derivation, history and the assumptions behind the equation, including its use in physiology.',
    },
    {
      title: 'Wikipedia — Bicarbonate buffer system',
      url: 'https://en.wikipedia.org/wiki/Bicarbonate_buffer_system',
      source: 'wikipedia',
      note: 'How the lungs and kidneys control the two halves of the blood buffer, and what happens in acidosis and alkalosis.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The "Acid-Base Solutions" simulation lets you compare strong, weak and buffered solutions at the particle level.',
    },
  ],
};
