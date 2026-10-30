import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-salts-polyprotic',
  title: 'Acid–Base Properties of Salts and Polyprotic Acids',
  summary: 'Why some salt solutions are acidic or basic, how hydrated metal ions act as acids, how polyprotic acids give up protons one at a time, and the broadest acid–base model of all: Lewis acids and bases.',
  minutes: 20,
  objectives: [
    'Predict whether a salt solution is acidic, basic or neutral from the acid and base its ions come from',
    'Calculate the pH of a salt solution such as sodium acetate or ammonium chloride using $K_b = K_w / K_a$ or $K_a = K_w / K_b$',
    'Explain why small, highly charged metal ions such as $\\ce{Al^3+}$ and $\\ce{Fe^3+}$ make water acidic',
    'Write the stepwise ionizations of $\\ce{H2SO4}$, $\\ce{H2CO3}$ and $\\ce{H3PO4}$ and calculate the pH of a polyprotic acid from its first ionization',
    'Identify Lewis acids and bases as electron-pair acceptors and donors',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Salts in water: which ions react?',
      blocks: [
        {
          type: 'p',
          text: 'Neutralization makes a salt and water, so you might expect every salt solution to be neutral. Measure a few and you find otherwise: $0.10\\ \\text{M}$ sodium acetate has pH 8.87, ammonium chloride is acidic, and aluminum chloride is about as acidic as vinegar. The ions of a salt are the conjugates of the acid and base that made it, and conjugates of **weak** acids and bases react with water.',
        },
        {
          type: 'definition',
          term: 'Hydrolysis of ions',
          text: 'The reaction of a dissolved ion with water that produces $\\ce{H3O+}$ or $\\ce{OH-}$ is called [[gchem-ion-hydrolysis|hydrolysis]]. An anion that is the conjugate base of a weak acid takes a proton from water (basic); a cation that is a weak acid gives one to water (acidic).',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 290" xmlns="http://www.w3.org/2000/svg"><text x="300" y="20" text-anchor="middle" font-size="13" class="t-gray">anion comes from…</text><text x="210" y="44" text-anchor="middle" font-size="13">a strong acid</text><text x="210" y="61" text-anchor="middle" font-size="12" class="t-gray">Cl⁻, Br⁻, I⁻, NO₃⁻, ClO₄⁻</text><text x="400" y="44" text-anchor="middle" font-size="13">a weak acid</text><text x="400" y="61" text-anchor="middle" font-size="12" class="t-gray">F⁻, CH₃COO⁻, CN⁻, CO₃²⁻</text><text x="56" y="116" text-anchor="middle" font-size="13">a strong base</text><text x="56" y="134" text-anchor="middle" font-size="12" class="t-gray">Na⁺, K⁺, Ca²⁺,</text><text x="56" y="150" text-anchor="middle" font-size="12" class="t-gray">Ba²⁺</text><text x="56" y="210" text-anchor="middle" font-size="13">is a weak acid</text><text x="56" y="228" text-anchor="middle" font-size="12" class="t-gray">NH₄⁺, Al³⁺,</text><text x="56" y="244" text-anchor="middle" font-size="12" class="t-gray">Fe³⁺</text><text x="56" y="84" text-anchor="middle" font-size="13" class="t-gray">cation…</text><rect x="118" y="74" width="184" height="94" rx="10" fill="none" stroke="currentColor" class="s-green" stroke-width="2"/><text x="210" y="112" text-anchor="middle" font-size="16" class="t-green">neutral</text><text x="210" y="134" text-anchor="middle" font-size="13">NaCl, KNO₃</text><text x="210" y="154" text-anchor="middle" font-size="12" class="t-gray">pH = 7</text><rect x="308" y="74" width="184" height="94" rx="10" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><text x="400" y="112" text-anchor="middle" font-size="16" class="t-blue">basic</text><text x="400" y="134" text-anchor="middle" font-size="13">NaF, CH₃COONa</text><text x="400" y="154" text-anchor="middle" font-size="12" class="t-gray">anion takes H⁺ from water</text><rect x="118" y="174" width="184" height="94" rx="10" fill="none" stroke="currentColor" class="s-red" stroke-width="2"/><text x="210" y="212" text-anchor="middle" font-size="16" class="t-red">acidic</text><text x="210" y="234" text-anchor="middle" font-size="13">NH₄Cl, AlCl₃</text><text x="210" y="254" text-anchor="middle" font-size="12" class="t-gray">cation gives H⁺ to water</text><rect x="308" y="174" width="184" height="94" rx="10" fill="none" stroke="currentColor" class="s-purple" stroke-width="2"/><text x="400" y="212" text-anchor="middle" font-size="16" class="t-purple">compare K<tspan baseline-shift="sub" font-size="11">a</tspan> and K<tspan baseline-shift="sub" font-size="11">b</tspan></text><text x="400" y="234" text-anchor="middle" font-size="13">NH₄F, NH₄CN</text><text x="400" y="254" text-anchor="middle" font-size="12" class="t-gray">larger constant wins</text></svg>`,
          alt: 'A two-by-two grid. Columns: anion from a strong acid (chloride, bromide, iodide, nitrate, perchlorate) or from a weak acid (fluoride, acetate, cyanide, carbonate). Rows: cation from a strong base (sodium, potassium, calcium, barium) or a cation that is a weak acid (ammonium, aluminum, iron three plus). Cells: neutral (NaCl, KNO3), basic (NaF, sodium acetate), acidic (NH4Cl, AlCl3), and compare Ka and Kb (NH4F, NH4CN).',
          caption: 'Ask two questions about each salt: does the anion come from a weak acid, and is the cation a weak acid? Each "yes" pushes the pH one way.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\ce{Cl-}$ and $\\ce{Na+}$ do nothing',
          text: 'From $K_a K_b = K_w$: HCl has $K_a \\gg 1$, so its conjugate base $\\ce{Cl-}$ has $K_b \\ll 10^{-14}$. It is too weak a base to take any measurable number of protons from water. Likewise $\\ce{Na+}$ is the "conjugate" of a strong base: a large, singly charged ion that binds water only loosely and has no proton to give. These are the spectator ions you met in net ionic equations, and they are spectators here too.',
        },
        {
          type: 'list',
          items: [
            '**Neutral ions:** the anions of the six strong acids ($\\ce{Cl-}$, $\\ce{Br-}$, $\\ce{I-}$, $\\ce{NO3-}$, $\\ce{ClO4-}$, and $\\ce{SO4^2-}$ only very slightly basic) and the cations of strong bases ($\\ce{Li+}$, $\\ce{Na+}$, $\\ce{K+}$, $\\ce{Ca^2+}$, $\\ce{Sr^2+}$, $\\ce{Ba^2+}$).',
            '**Basic anions:** conjugate bases of weak acids, e.g. $\\ce{F-}$, $\\ce{CH3COO-}$, $\\ce{CN-}$, $\\ce{OCl-}$, $\\ce{CO3^2-}$, $\\ce{PO4^3-}$.',
            '**Acidic cations:** conjugate acids of weak bases ($\\ce{NH4+}$, $\\ce{CH3NH3+}$) and small, highly charged metal ions ($\\ce{Al^3+}$, $\\ce{Fe^3+}$, $\\ce{Cr^3+}$).',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Classify each $0.10\\ \\text{M}$ salt solution.',
      template: '$\\ce{NaCN}$: ___. $\\ce{NH4NO3}$: ___. $\\ce{KBr}$: ___. $\\ce{Fe(NO3)3}$: ___.',
      blanks: [{ answers: ['basic'] }, { answers: ['acidic'] }, { answers: ['neutral'] }, { answers: ['acidic'] }],
      wordBank: ['acidic', 'acidic', 'basic', 'basic', 'neutral'],
      explanation: '$\\ce{NaCN}$: $\\ce{Na+}$ is neutral, $\\ce{CN-}$ is the conjugate base of the weak acid HCN, so the solution is **basic**. $\\ce{NH4NO3}$: $\\ce{NO3-}$ comes from a strong acid, $\\ce{NH4+}$ is a weak acid, so **acidic**. $\\ce{KBr}$: both ions come from a strong base and a strong acid, so **neutral**. $\\ce{Fe(NO3)3}$: the hydrated $\\ce{Fe^3+}$ ion is a fairly strong weak acid, so **acidic**.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'pH of a salt solution: sodium acetate and ammonium chloride',
      blocks: [
        {
          type: 'p',
          text: 'Once you know which ion reacts, the calculation is the weak-base or weak-acid calculation from the previous lesson. The only new step is getting the constant: tables list $K_a$ for acetic acid, not $K_b$ for acetate, so you use $K_b = K_w / K_a$.',
        },
        {
          type: 'derivation',
          title: 'pH of 0.10 M $\\ce{NaC2H3O2}$ (sodium acetate; $K_a$ of acetic acid $= 1.8 \\times 10^{-5}$)',
          steps: [
            { tex: '\\ce{NaC2H3O2(s) -> Na+(aq) + C2H3O2-(aq)}', why: 'The salt dissolves completely (it is a strong electrolyte). $\\ce{Na+}$ is a spectator; acetate is the conjugate base of a weak acid.' },
            { tex: '\\ce{C2H3O2- + H2O <=> HC2H3O2 + OH-}', why: 'Acetate hydrolysis: it takes a proton from water, releasing hydroxide.' },
            { tex: 'K_b = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}', why: 'Conjugate pair relation $K_a K_b = K_w$.' },
            { tex: '\\frac{x^2}{0.10 - x} = 5.6 \\times 10^{-10} \\implies x \\approx \\sqrt{5.6 \\times 10^{-11}} = 7.5 \\times 10^{-6}\\ \\text{M}', why: 'ICE table exactly as for ammonia, with $x = [\\ce{OH-}]$. $x$ is 0.0075% of 0.10, so the approximation is excellent.' },
            { tex: '\\text{pOH} = -\\log(7.5 \\times 10^{-6}) = 5.13 \\implies \\text{pH} = 14.00 - 5.13 = 8.87', why: 'Convert hydroxide to pOH, then to pH.' },
          ],
          result: 'pH $= 8.87$: mildly basic, as predicted.',
        },
        {
          type: 'derivation',
          title: 'pH of 0.25 M $\\ce{NH4Cl}$ ($K_b$ of ammonia $= 1.8 \\times 10^{-5}$)',
          steps: [
            { tex: '\\ce{NH4+ + H2O <=> NH3 + H3O+}', why: '$\\ce{Cl-}$ is a spectator; the ammonium ion is the conjugate acid of the weak base ammonia.' },
            { tex: 'K_a = \\frac{K_w}{K_b} = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}', why: 'Again the conjugate pair relation, this time solved for $K_a$.' },
            { tex: 'x = [\\ce{H3O+}] \\approx \\sqrt{(5.6 \\times 10^{-10})(0.25)} = 1.18 \\times 10^{-5}\\ \\text{M}', why: 'Weak acid shortcut $x \\approx \\sqrt{K_a C}$; $x$ is far below 5% of 0.25.' },
            { tex: '\\text{pH} = -\\log(1.18 \\times 10^{-5}) = 4.93', why: 'Here $x$ is $[\\ce{H3O+}]$ directly.' },
          ],
          result: 'pH $= 4.93$. Ammonium salts are mildly acidic, which is one reason ammonium-based fertilizers gradually acidify soil.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A quick sanity check',
          text: 'Acetic acid and ammonia have the same constant, $1.8 \\times 10^{-5}$, so acetate and ammonium have the same $5.6 \\times 10^{-10}$. At equal concentration their pH values are mirror images about 7: $0.10\\ \\text{M}$ sodium acetate is 8.87 and $0.10\\ \\text{M}$ ammonium chloride is $14.00 - 8.87 = 5.13$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Sodium fluoride is added to some toothpastes and drinking water. What is the pH of a $0.20\\ \\text{M}$ NaF solution? $K_a$ of HF $= 3.5 \\times 10^{-4}$, $K_w = 1.0 \\times 10^{-14}$. Give two decimal places.',
      hint: '$\\ce{F-}$ is the conjugate base of HF: $K_b = K_w / K_a$. Then $[\\ce{OH-}] \\approx \\sqrt{K_b C}$, pOH, and pH $= 14.00 - $ pOH.',
      label: 'pH $=$',
      answer: '14 + log(sqrt(1.0*10^-14/(3.5*10^-4)*0.20))',
      answerTex: '8.38',
      tolerance: 0.006,
      explanation: '$K_b = \\frac{1.0 \\times 10^{-14}}{3.5 \\times 10^{-4}} = 2.86 \\times 10^{-11}$. Then $[\\ce{OH-}] = \\sqrt{(2.86 \\times 10^{-11})(0.20)} = 2.39 \\times 10^{-6}\\ \\text{M}$, pOH $= 5.62$, and pH $= 14.00 - 5.62 = 8.38$. Fluoride is a weaker base than acetate (HF is a stronger acid than acetic acid), so even at twice the concentration this solution is less basic than $0.10\\ \\text{M}$ sodium acetate (pH 8.87).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'A student finds the pH of $0.10\\ \\text{M}$ KCN ($K_a$ of HCN $= 4.9 \\times 10^{-10}$). Tap the first line that is wrong.',
      lines: [
        '$\\ce{K+}$ is a spectator; $\\ce{CN- + H2O <=> HCN + OH-}$',
        '$K_b = \\frac{1.0 \\times 10^{-14}}{4.9 \\times 10^{-10}} = 2.0 \\times 10^{-5}$',
        '$\\frac{x^2}{0.10} = 2.0 \\times 10^{-5}$, so $x = 1.4 \\times 10^{-3}\\ \\text{M}$',
        'pH $= -\\log(1.4 \\times 10^{-3}) = 2.85$',
        'So a KCN solution is acidic.',
      ],
      errorLines: [4],
      explanation: 'In line 3, $x$ is $[\\ce{OH-}]$ because cyanide is a base. So $-\\log x = 2.85$ is the **pOH**, and pH $= 14.00 - 2.85 = 11.15$. KCN solutions are distinctly basic: cyanide is about as strong a base as ammonia because HCN is such a weak acid. (That is also why acidifying a cyanide solution is so dangerous: it converts $\\ce{CN-}$ into volatile, toxic HCN.)',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'When both ions react, and amphiprotic anions',
      blocks: [
        {
          type: 'p',
          text: 'In a salt like $\\ce{NH4CN}$ both ions hydrolyze: $\\ce{NH4+}$ makes $\\ce{H3O+}$ and $\\ce{CN-}$ makes $\\ce{OH-}$. Which wins? Compare the two constants. The ion with the larger $K$ produces more of its product ion.',
        },
        {
          type: 'table',
          headers: ['Salt', '$K_a$ of cation', '$K_b$ of anion', 'Solution'],
          rows: [
            ['$\\ce{NH4CN}$', '$5.6 \\times 10^{-10}$', '$2.0 \\times 10^{-5}$', 'basic ($K_b > K_a$)'],
            ['$\\ce{NH4F}$', '$5.6 \\times 10^{-10}$', '$2.9 \\times 10^{-11}$', 'acidic ($K_a > K_b$)'],
            ['$\\ce{NH4C2H3O2}$', '$5.6 \\times 10^{-10}$', '$5.6 \\times 10^{-10}$', 'neutral (equal)'],
          ],
        },
        {
          type: 'p',
          text: 'The same comparison settles anions that still carry an acidic hydrogen, such as $\\ce{HCO3-}$ and $\\ce{H2PO4-}$. These are **amphiprotic**: they can donate a proton or accept one. Their acid constant is the *second* $K_a$ of the parent acid; their base constant is $K_w$ divided by the *first* $K_a$ (because the acid they turn into by accepting a proton is the fully protonated parent).',
        },
        {
          type: 'derivation',
          title: 'Is baking soda ($\\ce{NaHCO3}$) acidic or basic?',
          steps: [
            { tex: '\\ce{HCO3- + H2O <=> CO3^2- + H3O+} \\qquad K_{a2} = 4.7 \\times 10^{-11}', why: 'As an acid, bicarbonate gives up its remaining proton; this is the second ionization of carbonic acid.' },
            { tex: '\\ce{HCO3- + H2O <=> H2CO3 + OH-} \\qquad K_b = \\frac{K_w}{K_{a1}} = \\frac{1.0 \\times 10^{-14}}{4.3 \\times 10^{-7}} = 2.3 \\times 10^{-8}', why: 'As a base, bicarbonate becomes carbonic acid, whose conjugate base it is. So use $K_{a1}$.' },
            { tex: 'K_b = 2.3 \\times 10^{-8} > K_{a2} = 4.7 \\times 10^{-11}', why: 'The base reaction has the constant about 500 times larger.' },
          ],
          result: 'Baking soda solutions are mildly basic (about pH 8.3), which is why baking soda neutralizes acid spills and stomach acid gently.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Sodium dihydrogen phosphate, $\\ce{NaH2PO4}$, contains the amphiprotic ion $\\ce{H2PO4-}$. For phosphoric acid, $K_{a1} = 7.5 \\times 10^{-3}$, $K_{a2} = 6.2 \\times 10^{-8}$, $K_{a3} = 4.2 \\times 10^{-13}$. Is a $\\ce{NaH2PO4}$ solution acidic or basic?',
      options: [
        { text: 'Acidic, because $K_{a2} = 6.2 \\times 10^{-8}$ is larger than $K_b = K_w / K_{a1} = 1.3 \\times 10^{-12}$', correct: true, why: 'As an acid, $\\ce{H2PO4-}$ loses a proton to become $\\ce{HPO4^2-}$ ($K_{a2}$). As a base it becomes $\\ce{H3PO4}$, so its $K_b$ is $K_w / K_{a1}$. The acid constant is about 50 000 times larger.' },
        { text: 'Basic, because $K_b = K_w / K_{a2} = 1.6 \\times 10^{-7}$ is larger than $K_{a2}$', why: '$K_w / K_{a2}$ is the $K_b$ of $\\ce{HPO4^2-}$, not of $\\ce{H2PO4-}$. When $\\ce{H2PO4-}$ accepts a proton it becomes $\\ce{H3PO4}$, so the relevant acid is the first ionization.' },
        { text: 'Neutral, because $\\ce{Na+}$ is a spectator ion', why: '$\\ce{Na+}$ is indeed a spectator, but the anion is not: it can both donate and accept protons, and the two tendencies are very unequal.' },
        { text: 'Acidic, because $K_{a1} = 7.5 \\times 10^{-3}$ is the largest constant', why: '$K_{a1}$ describes $\\ce{H3PO4}$ losing its first proton. There is no $\\ce{H3PO4}$ in this solution to begin with; the anion\'s acidity is $K_{a2}$.' },
      ],
      explanation: 'For an amphiprotic anion compare its own two constants. $\\ce{H2PO4-}$ as an acid: $K_{a2} = 6.2 \\times 10^{-8}$. As a base: $K_b = K_w / K_{a1} = 1.0 \\times 10^{-14} / 7.5 \\times 10^{-3} = 1.3 \\times 10^{-12}$. The acid reaction dominates, so the solution is acidic (about pH 4.7). By the same reasoning $\\ce{HPO4^2-}$ ($K_{a3} = 4.2 \\times 10^{-13}$ vs $K_b = 1.6 \\times 10^{-7}$) is basic. Mixtures of the two are the phosphate buffers of the next lesson.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Hydrated metal ions are acids',
      blocks: [
        {
          type: 'p',
          text: 'Why would a solution of $\\ce{AlCl3}$, with no hydrogen in its formula, be acidic? In water every metal ion is surrounded by water molecules bonded to it through oxygen lone pairs; $\\ce{Al^3+}$ holds six of them in an octahedron, $\\ce{[Al(H2O)6]^3+}$. The protons on those bound waters are the acidic ones.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 44 500 246" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2"><line x1="150" y1="122" x2="150" y2="78"/><line x1="150" y1="156" x2="150" y2="200"/><line x1="132" y1="140" x2="92" y2="140"/><line x1="168" y1="140" x2="214" y2="140"/><line x1="137" y1="153" x2="110" y2="180"/><line x1="163" y1="127" x2="190" y2="100"/></g><circle cx="150" cy="140" r="18" fill="currentColor" class="f-gray" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="150" y="145" text-anchor="middle" font-size="14">Al</text><text x="126" y="120" text-anchor="middle" font-size="12" class="t-red">3+</text><g font-size="14" text-anchor="middle"><text x="150" y="70">OH₂</text><text x="150" y="218">OH₂</text><text x="72" y="145">H₂O</text><text x="100" y="198">H₂O</text><text x="214" y="94">OH₂</text></g><text x="226" y="145" text-anchor="middle" font-size="16" font-weight="600">O</text><line x1="234" y1="134" x2="262" y2="110" stroke="currentColor" stroke-width="2"/><text x="270" y="108" text-anchor="middle" font-size="15">H</text><line x1="234" y1="147" x2="262" y2="171" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><text x="270" y="183" text-anchor="middle" font-size="15" class="t-blue">H</text><text x="286" y="172" text-anchor="middle" font-size="12" class="t-blue">δ+</text><path d="M 216 154 Q 195 176 172 156" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><polyline points="175.4,165.7 172,156 182,158.2" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><text x="196" y="190" text-anchor="middle" font-size="11" class="t-orange">e⁻ density</text><text x="196" y="203" text-anchor="middle" font-size="11" class="t-orange">pulled to Al³⁺</text><path d="M 282 190 Q 320 222 362 205" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><polyline points="352,200 363,205 354,213" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><text x="392" y="206" text-anchor="middle" font-size="15">H₂O</text><text x="392" y="226" text-anchor="middle" font-size="12" class="t-gray">→ H₃O⁺</text><text x="380" y="70" text-anchor="middle" font-size="13">small, highly charged</text><text x="380" y="88" text-anchor="middle" font-size="13">cation polarizes the</text><text x="380" y="106" text-anchor="middle" font-size="13">O–H bonds of bound water</text><text x="250" y="258" text-anchor="middle" font-size="14">[Al(H₂O)₆]³⁺ + H₂O ⇌ [Al(H₂O)₅(OH)]²⁺ + H₃O⁺</text><text x="250" y="280" text-anchor="middle" font-size="13" class="t-gray">Kₐ = 1.4 × 10⁻⁵ (about as acidic as acetic acid)</text></svg>`,
          alt: 'An aluminum 3+ ion surrounded by six water molecules. One water is drawn in detail: the aluminum pulls electron density from its oxygen, the O–H bond to one hydrogen is shown dashed and that hydrogen, marked delta plus, moves to a free water molecule to form hydronium. Below: the equation for the hexaaquaaluminum ion donating a proton, with Ka 1.4 × 10⁻⁵.',
          caption: 'The $3+$ charge concentrated on a small ion pulls electron density toward the metal, through O and away from the O–H bonds. Those bonds become more polar and weaker, so a bound water gives up $\\ce{H+}$ far more readily than free water.',
        },
        {
          type: 'derivation',
          title: 'pH of 0.10 M $\\ce{AlCl3}$ ($K_a = 1.4 \\times 10^{-5}$)',
          steps: [
            { tex: '\\ce{[Al(H2O)6]^3+ + H2O <=> [Al(H2O)5(OH)]^2+ + H3O+}', why: 'The hydrated ion acts as a weak monoprotic acid; $\\ce{Cl-}$ is a spectator.' },
            { tex: '\\frac{x^2}{0.10 - x} = 1.4 \\times 10^{-5} \\implies x \\approx \\sqrt{1.4 \\times 10^{-6}} = 1.18 \\times 10^{-3}\\ \\text{M}', why: 'Standard weak-acid ICE table. Check: $1.18 \\times 10^{-3} / 0.10 = 1.2\\% < 5\\%$.' },
            { tex: '\\text{pH} = -\\log(1.18 \\times 10^{-3}) = 2.93', why: 'Almost exactly the pH of $0.10\\ \\text{M}$ acetic acid (2.87).' },
          ],
        },
        {
          type: 'table',
          headers: ['Hydrated ion', 'Approximate $K_a$', 'Charge / size'],
          rows: [
            ['$\\ce{Na+}$', 'not measurable', '$+1$, large'],
            ['$\\ce{Mg^2+}$', '$\\sim 10^{-12}$', '$+2$, small'],
            ['$\\ce{Zn^2+}$', '$\\sim 10^{-9}$', '$+2$, small'],
            ['$\\ce{Al^3+}$', '$1.4 \\times 10^{-5}$', '$+3$, small'],
            ['$\\ce{Fe^3+}$', '$\\sim 6 \\times 10^{-3}$', '$+3$, small'],
          ],
          caption: 'Acidity rises with **charge density** (charge divided by size). A $0.10\\ \\text{M}$ iron(III) nitrate solution has a pH near 1.7, close to that of a dilute strong acid, and it slowly deposits rust-colored iron(III) hydroxide.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Field water treatment',
          text: 'Aluminum sulfate (alum) and iron(III) chloride are the standard coagulants for clarifying muddy water, from municipal plants to expedient field purification. The hydrated $\\ce{Al^3+}$ and $\\ce{Fe^3+}$ ions keep losing protons until they form gelatinous hydroxide flocs that trap clay and microbes, and the released $\\ce{H3O+}$ lowers the pH. That is why operators often add lime or soda ash to keep the pH in range, and why coagulation is followed by disinfection.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'What is the pH of a $0.050\\ \\text{M}$ $\\ce{Al(NO3)3}$ solution? Use $K_a = 1.4 \\times 10^{-5}$ for $\\ce{[Al(H2O)6]^3+}$. Give two decimal places.',
      hint: 'The nitrate ions are spectators. Treat the hydrated aluminum ion as a weak monoprotic acid at $0.050\\ \\text{M}$.',
      label: 'pH $=$',
      answer: '-log(sqrt(1.4*10^-5*0.050))',
      answerTex: '3.08',
      tolerance: 0.006,
      explanation: '$x^2 = (0.050)(1.4 \\times 10^{-5}) = 7.0 \\times 10^{-7}$, so $x = [\\ce{H3O+}] = 8.4 \\times 10^{-4}\\ \\text{M}$ (1.7% of 0.050, so the approximation holds). pH $= -\\log(8.4 \\times 10^{-4}) = 3.08$. The exact quadratic gives the same pH to two decimals.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Polyprotic acids give up protons one at a time',
      blocks: [
        {
          type: 'p',
          text: 'A [[gchem-polyprotic-acid|polyprotic acid]] has more than one ionizable proton. It never releases them all at once: each proton leaves in its own equilibrium step with its own constant. For phosphoric acid:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} \\ce{H3PO4 + H2O &<=> H3O+ + H2PO4-} & K_{a1} &= 7.5 \\times 10^{-3} \\\\ \\ce{H2PO4- + H2O &<=> H3O+ + HPO4^2-} & K_{a2} &= 6.2 \\times 10^{-8} \\\\ \\ce{HPO4^2- + H2O &<=> H3O+ + PO4^3-} & K_{a3} &= 4.2 \\times 10^{-13} \\end{aligned}',
        },
        {
          type: 'table',
          headers: ['Acid', '$K_{a1}$', '$K_{a2}$', '$K_{a3}$'],
          rows: [
            ['sulfuric, $\\ce{H2SO4}$', 'strong', '$1.2 \\times 10^{-2}$', '—'],
            ['carbonic, $\\ce{H2CO3}$', '$4.3 \\times 10^{-7}$', '$4.7 \\times 10^{-11}$', '—'],
            ['hydrogen sulfide, $\\ce{H2S}$', '$8.9 \\times 10^{-8}$', '$\\sim 10^{-19}$', '—'],
            ['phosphoric, $\\ce{H3PO4}$', '$7.5 \\times 10^{-3}$', '$6.2 \\times 10^{-8}$', '$4.2 \\times 10^{-13}$'],
          ],
          caption: 'Typical textbook values at 25 °C. For carbonic acid, "$\\ce{H2CO3}$" stands for all the dissolved $\\ce{CO2}$, most of which is actually $\\ce{CO2(aq)}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why each $K_a$ is so much smaller than the last',
          text: 'The first proton leaves a neutral molecule. The second must leave a negative ion, $\\ce{H2PO4-}$, which attracts it electrostatically, and the third must escape a $2-$ ion. Each step is harder, and the constants drop by factors of about $10^5$. That huge gap is what makes polyprotic acids easy to handle: at any pH, at most two neighboring species are present in significant amounts.',
        },
        {
          type: 'graph',
          x: [0, 14],
          y: [0, 1],
          xStep: 1,
          yStep: 0.2,
          functions: [
            { expr: '1/(1 + 7.5*10^(-3)*10^x + 4.65*10^(-10)*10^(2x) + 1.953*10^(-22)*10^(3x))', label: '$\\ce{H3PO4}$', color: 'red' },
            { expr: '7.5*10^(-3)*10^x/(1 + 7.5*10^(-3)*10^x + 4.65*10^(-10)*10^(2x) + 1.953*10^(-22)*10^(3x))', label: '$\\ce{H2PO4-}$', color: 'orange' },
            { expr: '4.65*10^(-10)*10^(2x)/(1 + 7.5*10^(-3)*10^x + 4.65*10^(-10)*10^(2x) + 1.953*10^(-22)*10^(3x))', label: '$\\ce{HPO4^2-}$', color: 'green' },
            { expr: '1.953*10^(-22)*10^(3x)/(1 + 7.5*10^(-3)*10^x + 4.65*10^(-10)*10^(2x) + 1.953*10^(-22)*10^(3x))', label: '$\\ce{PO4^3-}$', color: 'blue' },
          ],
          vlines: [{ x: 'q', label: 'pH', color: 'gray' }],
          sliders: [{ name: 'q', min: 0, max: 14, step: 0.05, value: 7.4, label: 'pH' }],
          readouts: [
            { label: '% $\\ce{H3PO4}$', expr: '100/(1 + 7.5*10^(-3)*10^q + 4.65*10^(-10)*10^(2q) + 1.953*10^(-22)*10^(3q))', digits: 2 },
            { label: '% $\\ce{H2PO4-}$', expr: '100*7.5*10^(-3)*10^q/(1 + 7.5*10^(-3)*10^q + 4.65*10^(-10)*10^(2q) + 1.953*10^(-22)*10^(3q))', digits: 2 },
            { label: '% $\\ce{HPO4^2-}$', expr: '100*4.65*10^(-10)*10^(2q)/(1 + 7.5*10^(-3)*10^q + 4.65*10^(-10)*10^(2q) + 1.953*10^(-22)*10^(3q))', digits: 2 },
            { label: '% $\\ce{PO4^3-}$', expr: '100*1.953*10^(-22)*10^(3q)/(1 + 7.5*10^(-3)*10^q + 4.65*10^(-10)*10^(2q) + 1.953*10^(-22)*10^(3q))', digits: 2 },
          ],
          caption: 'Fraction of all dissolved phosphate in each form versus pH. Neighboring curves cross at 0.5 exactly where pH $=$ pKa (2.12, 7.21, 12.38). At blood pH 7.4 the phosphate is about 39% $\\ce{H2PO4-}$ and 61% $\\ce{HPO4^2-}$, with essentially no $\\ce{H3PO4}$ or $\\ce{PO4^3-}$. Each fraction is $[\\text{species}]/C_{\\text{total}}$, built from the three $K_a$ expressions (the denominator is $1 + K_{a1}/[\\ce{H3O+}] + K_{a1}K_{a2}/[\\ce{H3O+}]^2 + K_{a1}K_{a2}K_{a3}/[\\ce{H3O+}]^3$).',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'pH of a polyprotic acid: the first ionization dominates',
      blocks: [
        {
          type: 'p',
          text: 'Because $K_{a2}$ is so much smaller than $K_{a1}$, the second ionization adds a negligible amount of $\\ce{H3O+}$ to what the first produced. So you find the pH from the first step alone, exactly as for a monoprotic weak acid. A carbonated drink is a good example: it holds roughly $0.040\\ \\text{M}$ dissolved $\\ce{CO2}$, which we treat as $\\ce{H2CO3}$.',
        },
        {
          type: 'derivation',
          title: '0.040 M $\\ce{H2CO3}$: pH, $[\\ce{HCO3-}]$ and $[\\ce{CO3^2-}]$',
          steps: [
            { tex: '\\frac{x^2}{0.040 - x} = K_{a1} = 4.3 \\times 10^{-7}', why: 'First ionization only: $\\ce{H2CO3 + H2O <=> H3O+ + HCO3-}$, ICE table with $x = [\\ce{H3O+}] = [\\ce{HCO3-}]$.' },
            { tex: 'x \\approx \\sqrt{(4.3 \\times 10^{-7})(0.040)} = 1.31 \\times 10^{-4}\\ \\text{M}', why: 'Small-$x$ approximation; $x$ is 0.33% of 0.040.' },
            { tex: '\\text{pH} = -\\log(1.31 \\times 10^{-4}) = 3.88', why: 'The second ionization will not change this; next lines show why.' },
            { tex: 'K_{a2} = \\frac{[\\ce{H3O+}][\\ce{CO3^2-}]}{[\\ce{HCO3-}]} = 4.7 \\times 10^{-11}', why: 'Now look at the second step, $\\ce{HCO3- + H2O <=> H3O+ + CO3^2-}$.' },
            { tex: '[\\ce{H3O+}] \\approx [\\ce{HCO3-}] \\implies [\\ce{CO3^2-}] \\approx K_{a2} = 4.7 \\times 10^{-11}\\ \\text{M}', why: 'From the first step, $[\\ce{H3O+}]$ and $[\\ce{HCO3-}]$ are equal (both $1.31 \\times 10^{-4}$), so they cancel in the $K_{a2}$ expression.' },
          ],
          result: 'pH $= 3.88$, $[\\ce{HCO3-}] = 1.3 \\times 10^{-4}\\ \\text{M}$, and $[\\ce{CO3^2-}] = 4.7 \\times 10^{-11}\\ \\text{M}$. The second ionization contributes about $5 \\times 10^{-11}\\ \\text{M}$ of $\\ce{H3O+}$, a millionth of the total.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'The rule "$[\\ce{A^2-}] \\approx K_{a2}$" holds for any solution of a weak diprotic acid **by itself**, at any concentration, as long as the first ionization dominates. Add a strong acid or a salt and the cancellation no longer happens.',
        },
        {
          type: 'deepdive',
          title: 'Sulfuric acid: when the second step matters',
          blocks: [
            {
              type: 'p',
              text: 'Sulfuric acid breaks the pattern because its first ionization is complete and its second, $K_{a2} = 1.2 \\times 10^{-2}$, is not small. In $0.010\\ \\text{M}$ $\\ce{H2SO4}$, the first step gives $0.010\\ \\text{M}$ each of $\\ce{H3O+}$ and $\\ce{HSO4-}$. The second step then starts from those values:',
            },
            {
              type: 'derivation',
              steps: [
                { tex: '\\frac{(0.010 + x)(x)}{0.010 - x} = 1.2 \\times 10^{-2}', why: 'ICE table for $\\ce{HSO4- <=> H+ + SO4^2-}$ with the $\\ce{H3O+}$ already present from step one (a common ion).' },
                { tex: 'x^2 + 0.022x - 1.2 \\times 10^{-4} = 0', why: 'Multiply out: $0.010x + x^2 = 1.2 \\times 10^{-4} - 0.012x$. No approximation is possible: $x$ will be comparable to 0.010.' },
                { tex: 'x = \\frac{-0.022 + \\sqrt{0.022^2 + 4.8 \\times 10^{-4}}}{2} = 4.5 \\times 10^{-3}\\ \\text{M}', why: 'Quadratic formula, positive root.' },
                { tex: '\\text{pH} = -\\log(0.010 + 0.0045) = 1.84', why: 'Total $[\\ce{H3O+}] = 0.0145\\ \\text{M}$, not 0.010 (pH 2.00) and not 0.020 (pH 1.70).' },
              ],
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Find the pH of $0.10\\ \\text{M}$ phosphoric acid, $K_{a1} = 7.5 \\times 10^{-3}$ (the later ionizations are negligible). Check the 5% rule; the approximation may fail. Give two decimal places.',
      hint: 'The shortcut gives $x = \\sqrt{7.5 \\times 10^{-4}} = 0.027$, which is 27% of 0.10. Solve $x^2 + (7.5 \\times 10^{-3})x - 7.5 \\times 10^{-4} = 0$ instead.',
      label: 'pH $=$',
      answer: '-log((-7.5*10^-3 + sqrt((7.5*10^-3)^2 + 4*7.5*10^-3*0.10))/2)',
      answerTex: '1.62',
      tolerance: 0.006,
      explanation: '$\\frac{x^2}{0.10 - x} = 7.5 \\times 10^{-3}$ gives $x^2 + 0.0075x - 0.00075 = 0$, so $x = \\frac{-0.0075 + \\sqrt{0.0075^2 + 0.0030}}{2} = 0.0239\\ \\text{M}$ and pH $= 1.62$. The shortcut would give pH 1.56, wrong by 0.06, because 24% of the acid ionizes. Adding the second and third ionizations changes nothing: a full numerical solution also gives 1.62, with $[\\ce{HPO4^2-}] = K_{a2} = 6.2 \\times 10^{-8}\\ \\text{M}$ and $[\\ce{PO4^3-}] \\approx 10^{-18}\\ \\text{M}$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Phosphoric acid has three acidic protons, so a $0.10\\ \\text{M}$ $\\ce{H3PO4}$ solution has $[\\ce{H3O+}]$ close to $0.30\\ \\text{M}$.',
      answer: false,
      explanation: 'That would be true only if all three ionizations were complete. In fact only the first is significant, and even it is incomplete: $[\\ce{H3O+}] = 0.024\\ \\text{M}$ (pH 1.62). The second and third steps add about $6 \\times 10^{-8}\\ \\text{M}$ and $10^{-18}\\ \\text{M}$. Counting protons gives the right answer for **titration stoichiometry** (it takes 3 mol NaOH to neutralize 1 mol $\\ce{H3PO4}$ completely) but not for the pH of the acid by itself.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Lewis acids and bases: following the electron pair',
      blocks: [
        {
          type: 'p',
          text: 'Brønsted–Lowry chemistry tracks the proton. In 1923, the same year, G. N. Lewis proposed tracking the **electron pair** instead. When a base accepts a proton, it does so by donating a lone pair to form a new bond with $\\ce{H+}$. Lewis noticed that many reactions without any proton form bonds the same way.',
        },
        {
          type: 'definition',
          term: 'Lewis acid and Lewis base',
          text: 'A [[gchem-lewis-acid|Lewis acid]] is an electron-pair **acceptor**; a [[gchem-lewis-base|Lewis base]] is an electron-pair **donor**. Their reaction forms a coordinate covalent bond (both electrons come from the base), and the product is called an adduct.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 52 500 178" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2"><line x1="80" y1="118" x2="80" y2="84"/><line x1="72" y1="134" x2="46" y2="150"/><line x1="88" y1="134" x2="114" y2="150"/></g><g font-size="16" text-anchor="middle"><text x="80" y="132" class="t-purple">B</text><text x="80" y="78">F</text><text x="38" y="162">F</text><text x="122" y="162">F</text></g><g stroke="currentColor" stroke-width="2"><line x1="222" y1="120" x2="246" y2="104"/><line x1="222" y1="132" x2="250" y2="140"/><line x1="214" y1="138" x2="222" y2="164"/></g><g font-size="16" text-anchor="middle"><text x="214" y="132" class="t-blue">N</text><text x="254" y="102">H</text><text x="260" y="148">H</text><text x="226" y="180">H</text></g><circle cx="198" cy="122" r="2.4" fill="currentColor" class="f-blue"/><circle cx="198" cy="132" r="2.4" fill="currentColor" class="f-blue"/><path d="M 192 118 Q 150 70 98 116" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><polyline points="99.5,105.5 98,116 108,113" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><text x="148" y="66" text-anchor="middle" font-size="12" class="t-blue">lone pair donated</text><text x="80" y="196" text-anchor="middle" font-size="12">Lewis acid</text><text x="80" y="212" text-anchor="middle" font-size="11" class="t-gray">B has 6 e⁻, empty orbital</text><text x="222" y="204" text-anchor="middle" font-size="12">Lewis base</text><text x="222" y="220" text-anchor="middle" font-size="11" class="t-gray">lone pair on N</text><line x1="282" y1="128" x2="318" y2="128" stroke="currentColor" stroke-width="2.2"/><polyline points="310,122 319,128 310,134" fill="none" stroke="currentColor" stroke-width="2.2"/><g stroke="currentColor" stroke-width="2"><line x1="370" y1="118" x2="370" y2="84"/><line x1="362" y1="134" x2="338" y2="152"/><line x1="364" y1="137" x2="380" y2="160"/><line x1="380" y1="127" x2="414" y2="127" class="s-blue" stroke-width="2.6"/><line x1="432" y1="120" x2="456" y2="104"/><line x1="432" y1="132" x2="460" y2="140"/><line x1="424" y1="138" x2="432" y2="164"/></g><g font-size="16" text-anchor="middle"><text x="370" y="132" class="t-purple">B</text><text x="370" y="78">F</text><text x="330" y="164">F</text><text x="386" y="176">F</text><text x="424" y="132" class="t-blue">N</text><text x="464" y="102">H</text><text x="470" y="148">H</text><text x="436" y="180">H</text></g><text x="358" y="112" text-anchor="middle" font-size="13" class="t-red">−</text><text x="412" y="112" text-anchor="middle" font-size="13" class="t-red">+</text><text x="400" y="204" text-anchor="middle" font-size="12">adduct F₃B–NH₃</text><text x="400" y="220" text-anchor="middle" font-size="11" class="t-gray">new B–N coordinate covalent bond</text></svg>`,
          alt: 'Boron trifluoride, with boron in purple, reacts with ammonia, whose nitrogen carries a lone pair drawn as two dots. A curved arrow goes from the lone pair to boron. The product is F3B–NH3 with a new boron–nitrogen bond, a formal negative charge on boron and a positive charge on nitrogen.',
          caption: 'Boron in $\\ce{BF3}$ has only six valence electrons and an empty orbital, so it accepts the [[lone-pair]] of ammonia. No proton moves, yet this is an acid–base reaction in the Lewis sense. The curved arrow (from electron pair to where it goes) is the notation organic chemists use for every reaction.',
        },
        {
          type: 'list',
          items: [
            '**Electron-deficient molecules:** $\\ce{BF3}$, $\\ce{AlCl3}$ (Lewis acid catalysts in industry).',
            '**Metal cations:** $\\ce{Al^3+}$ binding six water molecules is a Lewis acid–base reaction, and so is $\\ce{Ag+ + 2NH3 -> [Ag(NH3)2]+}$. These complex ions return in the solubility lesson and in Unit 12.',
            '**Molecules with polar multiple bonds:** $\\ce{CO2 + OH- -> HCO3-}$; the hydroxide lone pair attacks the carbon. This is how $\\ce{CO2}$ scrubbers in submarines and rebreathers work, using hydroxide absorbents.',
            '**Every Brønsted base is a Lewis base** (it donates a pair to $\\ce{H+}$), and $\\ce{H+}$ itself is a Lewis acid.',
          ],
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Three definitions, nested',
          text: 'Arrhenius (produces $\\ce{H+}$ or $\\ce{OH-}$ in water) is the smallest circle, Brønsted–Lowry (proton transfer in any solvent) contains it, and Lewis (electron-pair transfer) contains both. Use the narrowest one that does the job: Brønsted–Lowry for pH and buffers, Lewis for metal complexes and for organic reaction mechanisms.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Which species is a Lewis acid but **not** a Brønsted–Lowry acid?',
      options: [
        { text: '$\\ce{NH3}$', why: 'Ammonia has a lone pair to donate, so it is a Lewis **base** (and a Brønsted base).' },
        { text: '$\\ce{HF}$', why: 'HF donates protons, so it is a Brønsted acid. (It is also a Lewis acid in the broad sense, since it supplies $\\ce{H+}$.)' },
        { text: '$\\ce{BF3}$', correct: true, why: 'Boron has an empty orbital and accepts an electron pair, but $\\ce{BF3}$ has no hydrogen to donate, so it cannot be a Brønsted acid.' },
        { text: '$\\ce{OH-}$', why: 'Hydroxide donates a lone pair: it is a Lewis base and a Brønsted base.' },
      ],
      explanation: 'A Brønsted acid must have a proton to donate. A Lewis acid only needs to accept an electron pair. $\\ce{BF3}$, with a six-electron boron and an empty orbital, is the textbook example of a Lewis acid that is not a Brønsted acid; metal cations like $\\ce{Al^3+}$ and $\\ce{Ag+}$ are others.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Put the steps for finding the pH of a salt solution (for example $0.10\\ \\text{M}$ $\\ce{NH4Cl}$) in order.',
      lines: [
        'Split the salt into its ions and cross out spectators ($\\ce{Cl-}$)',
        'Write the hydrolysis of the reactive ion: $\\ce{NH4+ + H2O <=> NH3 + H3O+}$',
        'Get its constant from the conjugate: $K_a = K_w / K_b(\\ce{NH3})$',
        'Solve the ICE table for $x$ and check the 5% rule',
        'Convert $x$ to pH (via pOH if $x$ is $[\\ce{OH-}]$)',
      ],
      explanation: 'Identify the ions, decide which one reacts with water and in which direction, look up or compute its constant with $K_a K_b = K_w$, then solve exactly as for any weak acid or base. For $0.10\\ \\text{M}$ $\\ce{NH4Cl}$: $K_a = 5.6 \\times 10^{-10}$, $x = \\sqrt{5.6 \\times 10^{-11}} = 7.5 \\times 10^{-6}\\ \\text{M}$, pH $= 5.13$.',
    },
  ],
  takeaways: [
    'Anions of weak acids are basic; cations of weak bases and small, highly charged metal ions are acidic; ions of strong acids and strong bases are neutral.',
    'For the pH of a salt, use $K_b = K_w / K_a$ (or $K_a = K_w / K_b$) and solve a normal weak-base (or weak-acid) ICE table: $0.10\\ \\text{M}$ sodium acetate has pH 8.87, $0.25\\ \\text{M}$ ammonium chloride 4.93.',
    'If both ions react, or the anion is amphiprotic ($\\ce{HCO3-}$, $\\ce{H2PO4-}$), compare the acid constant with the base constant: the larger wins.',
    'Polyprotic acids ionize stepwise with $K_{a1} \\gg K_{a2} \\gg K_{a3}$; the pH comes from the first step, and for a diprotic acid alone $[\\ce{A^2-}] \\approx K_{a2}$.',
    'Species fractions cross at pH $=$ pKa; at most two neighboring forms of a polyprotic acid matter at any pH.',
    'Lewis acids accept electron pairs ($\\ce{BF3}$, metal ions, $\\ce{H+}$); Lewis bases donate them ($\\ce{NH3}$, $\\ce{H2O}$, $\\ce{OH-}$).',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 14: Acid-Base Equilibria',
      url: 'https://openstax.org/books/chemistry-2e/pages/14-introduction',
      source: 'openstax',
      note: 'Sections 14.4 and 14.5 cover hydrolysis of salts, hydrated metal ions and polyprotic acids, with worked examples.',
    },
    {
      title: 'OpenStax Chemistry 2e — Chapter 15: Equilibria of Other Reaction Classes',
      url: 'https://openstax.org/books/chemistry-2e/pages/15-introduction',
      source: 'openstax',
      note: 'Section 15.2 introduces Lewis acids and bases and the complex ions they form.',
    },
    {
      title: 'Wikipedia — Lewis acids and bases',
      url: 'https://en.wikipedia.org/wiki/Lewis_acids_and_bases',
      source: 'wikipedia',
      note: 'History of Lewis\'s definition and many examples of adducts, including BF3·NH3.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "polyprotic acids" for speciation diagrams of carbonic and phosphoric acid like the one in this lesson.',
    },
  ],
};
