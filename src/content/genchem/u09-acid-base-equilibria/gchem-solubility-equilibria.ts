import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-solubility-equilibria',
  title: 'Solubility Equilibria and Ksp',
  summary: 'Turn "insoluble" into a number: the solubility product Ksp, molar solubility, the common-ion effect, predicting and separating precipitates with Q versus Ksp, why acids dissolve tooth enamel and limestone caves, and how complex ions pull a solid into solution.',
  minutes: 24,
  objectives: [
    'Write $K_{sp}$ expressions and convert between $K_{sp}$ and molar solubility for 1 : 1, 1 : 2 and 3 : 2 salts',
    'Compare solubilities correctly, using $K_{sp}$ directly only for salts with the same ion ratio',
    'Calculate solubility in the presence of a common ion',
    'Predict whether a precipitate forms by comparing $Q$ with $K_{sp}$, and plan a selective precipitation',
    'Explain how pH changes the solubility of hydroxides, carbonates and phosphates, and how complex-ion formation ($K_f$) increases solubility',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Ksp: an equilibrium between a solid and its ions',
      blocks: [
        {
          type: 'p',
          text: 'The [[chem-solubility-rules|solubility rules]] call silver chloride "insoluble", and in Unit 3 you used them to predict precipitates. But no ionic solid is completely insoluble. Shake AgCl with water and a tiny amount dissolves until the solution is [[chem-saturated-solution|saturated]]. From then on ions leave the crystal and rejoin it at equal rates: a dynamic equilibrium.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 22 500 232" xmlns="http://www.w3.org/2000/svg"><path d="M 40 30 L 40 220 Q 40 232 52 232 L 268 232 Q 280 232 280 220 L 280 30" fill="none" stroke="currentColor" stroke-width="2"/><line x1="40" y1="60" x2="280" y2="60" stroke="currentColor" class="s-blue" stroke-width="1.2" stroke-dasharray="6 4"/><circle cx="92" cy="222" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="109" cy="222" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="126" cy="222" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="143" cy="222" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="160" cy="222" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="177" cy="222" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="194" cy="222" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="211" cy="222" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="228" cy="222" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="100" cy="207" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="117" cy="207" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="134" cy="207" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="151" cy="207" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="168" cy="207" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="185" cy="207" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="202" cy="207" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="219" cy="207" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="236" cy="207" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="126" cy="192" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="143" cy="192" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="160" cy="192" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><circle cx="177" cy="192" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><circle cx="194" cy="192" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><text x="160" y="248" text-anchor="middle" font-size="12" class="t-gray">solid AgCl</text><circle cx="70" cy="90" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><text x="81" y="86" font-size="11">Ag⁺</text><circle cx="120" cy="80" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><text x="132" y="75" font-size="11">Cl⁻</text><circle cx="200" cy="95" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><text x="211" y="91" font-size="11">Ag⁺</text><circle cx="250" cy="85" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><text x="262" y="80" font-size="11">Cl⁻</text><circle cx="90" cy="140" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><text x="101" y="136" font-size="11">Ag⁺</text><circle cx="160" cy="125" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><text x="172" y="120" font-size="11">Cl⁻</text><circle cx="230" cy="140" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><text x="241" y="136" font-size="11">Ag⁺</text><circle cx="60" cy="180" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><text x="72" y="175" font-size="11">Cl⁻</text><circle cx="130" cy="170" r="7" fill="currentColor" class="f-green" fill-opacity="0.55"/><text x="142" y="165" font-size="11">Cl⁻</text><circle cx="196" cy="168" r="5" fill="currentColor" class="f-gray" fill-opacity="0.9"/><text x="207" y="164" font-size="11">Ag⁺</text><path d="M 100 186 Q 92 168 104 154" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><polyline points="96,157 104,154 104,162" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8"/><path d="M 252 150 Q 264 168 254 186" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.8"/><polyline points="261,180 254,187 251,178" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.8"/><text x="384" y="60" text-anchor="middle" font-size="13">saturated solution:</text><text x="384" y="80" text-anchor="middle" font-size="13">dissolving and precipitating</text><text x="384" y="100" text-anchor="middle" font-size="13">at equal rates</text><text x="384" y="134" text-anchor="middle" font-size="13" class="t-orange">↑ dissolve</text><text x="384" y="154" text-anchor="middle" font-size="13" class="t-purple">↓ precipitate</text><text x="384" y="190" text-anchor="middle" font-size="14">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)</text><text x="384" y="214" text-anchor="middle" font-size="14" class="t-blue">K<tspan baseline-shift="sub" font-size="10">sp</tspan> = [Ag⁺][Cl⁻] = 1.8 × 10⁻¹⁰</text></svg>`,
          alt: 'A beaker with a pile of solid silver chloride at the bottom, made of alternating gray silver ions and green chloride ions, and a few dissolved silver and chloride ions in the solution above. A curved arrow shows ions leaving the solid and another shows ions returning. Beside it: AgCl(s) is in equilibrium with Ag+(aq) and Cl−(aq), and Ksp equals the product of the ion concentrations, 1.8 × 10⁻¹⁰.',
          caption: 'In a saturated solution with solid present, dissolving and precipitating balance. Adding more solid does not change the ion concentrations; it just sits on the bottom.',
        },
        {
          type: 'definition',
          term: 'Solubility product constant',
          text: 'For a slightly soluble salt $\\ce{M_mX_n(s) <=> m M^{n+}(aq) + n X^{m-}(aq)}$, the [[gchem-solubility-product|solubility product constant]] is $K_{sp} = [\\ce{M^{n+}}]^m[\\ce{X^{m-}}]^n$. The solid does not appear.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the solid is left out',
          text: 'This is a [[gchem-heterogeneous-equilibrium|heterogeneous equilibrium]]: a pure solid has an activity of 1, whatever its amount. Physically, only the crystal **surface** exchanges ions, and both the dissolving rate and the precipitating rate scale with that same surface area, so the area cancels out of the balance. The ion concentrations at equilibrium depend only on temperature, not on how much solid is present (as long as some is).',
        },
        {
          type: 'table',
          headers: ['Salt', 'Dissolution', '$K_{sp}$ (25 °C)'],
          rows: [
            ['$\\ce{AgCl}$', '$\\ce{AgCl <=> Ag+ + Cl-}$', '$1.8 \\times 10^{-10}$'],
            ['$\\ce{AgBr}$', '$\\ce{AgBr <=> Ag+ + Br-}$', '$5.0 \\times 10^{-13}$'],
            ['$\\ce{AgI}$', '$\\ce{AgI <=> Ag+ + I-}$', '$8.3 \\times 10^{-17}$'],
            ['$\\ce{Ag2CrO4}$', '$\\ce{Ag2CrO4 <=> 2Ag+ + CrO4^2-}$', '$1.1 \\times 10^{-12}$'],
            ['$\\ce{CaF2}$', '$\\ce{CaF2 <=> Ca^2+ + 2F-}$', '$3.9 \\times 10^{-11}$'],
            ['$\\ce{PbI2}$', '$\\ce{PbI2 <=> Pb^2+ + 2I-}$', '$1.4 \\times 10^{-8}$'],
            ['$\\ce{PbCl2}$', '$\\ce{PbCl2 <=> Pb^2+ + 2Cl-}$', '$1.7 \\times 10^{-5}$'],
            ['$\\ce{Mg(OH)2}$', '$\\ce{Mg(OH)2 <=> Mg^2+ + 2OH-}$', '$5.6 \\times 10^{-12}$'],
            ['$\\ce{CaCO3}$', '$\\ce{CaCO3 <=> Ca^2+ + CO3^2-}$', '$4.5 \\times 10^{-9}$'],
            ['$\\ce{Ca3(PO4)2}$', '$\\ce{Ca3(PO4)2 <=> 3Ca^2+ + 2PO4^3-}$', '$2.0 \\times 10^{-29}$'],
          ],
          caption: 'Typical textbook values; different tables differ somewhat, because these are hard to measure. All the problems in this lesson use the values in this table.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Complete the $K_{sp}$ expression for calcium phosphate, $\\ce{Ca3(PO4)2(s) <=> 3Ca^2+(aq) + 2PO4^3-(aq)}$. Type the exponents.',
      template: '$K_{sp} = [\\ce{Ca^2+}]$ raised to the power ___ times $[\\ce{PO4^3-}]$ raised to the power ___',
      blanks: [{ answers: ['3'] }, { answers: ['2'] }],
      explanation: 'Each ion concentration is raised to its coefficient in the dissolution equation: $K_{sp} = [\\ce{Ca^2+}]^3[\\ce{PO4^3-}]^2$. The solid $\\ce{Ca3(PO4)2}$ itself does not appear. Calcium phosphate minerals are the inorganic part of bone and teeth, and this tiny $K_{sp}$ ($2.0 \\times 10^{-29}$) is part of why they last.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Molar solubility and Ksp',
      blocks: [
        {
          type: 'p',
          text: 'The [[gchem-molar-solubility|molar solubility]] $s$ is the number of moles of solid that dissolve per liter of saturated solution. Each formula unit that dissolves releases ions in the ratio of the formula, so every ion concentration is a multiple of $s$. Substitute those into $K_{sp}$ and solve.',
        },
        {
          type: 'derivation',
          title: 'Three salts, three formulas (pure water)',
          steps: [
            { tex: '\\ce{AgCl}: [\\ce{Ag+}] = s,\\ [\\ce{Cl-}] = s \\implies K_{sp} = s^2', why: '1 : 1 salt.' },
            { tex: 's = \\sqrt{1.8 \\times 10^{-10}} = 1.3 \\times 10^{-5}\\ \\text{M}', why: 'About 2 mg of AgCl per liter.' },
            { tex: '\\ce{CaF2}: [\\ce{Ca^2+}] = s,\\ [\\ce{F-}] = 2s \\implies K_{sp} = s(2s)^2 = 4s^3', why: 'Each $\\ce{CaF2}$ gives **two** fluoride ions, and that $2s$ is then **squared** because of the coefficient 2.' },
            { tex: 's = \\sqrt[3]{\\frac{3.9 \\times 10^{-11}}{4}} = 2.1 \\times 10^{-4}\\ \\text{M}', why: 'Cube root, since $s^3 = K_{sp}/4$.' },
            { tex: '\\ce{Ca3(PO4)2}: [\\ce{Ca^2+}] = 3s,\\ [\\ce{PO4^3-}] = 2s \\implies K_{sp} = (3s)^3(2s)^2 = 108s^5', why: 'A 3 : 2 salt: $27 \\times 4 = 108$.' },
            { tex: 's = \\sqrt[5]{\\frac{2.0 \\times 10^{-29}}{108}} = 7.1 \\times 10^{-7}\\ \\text{M}', why: 'Fifth root. (This idealized value ignores the fact that phosphate ion is also a base; see the pH card below.)' },
          ],
        },
        {
          type: 'derivation',
          title: 'Going backward: $K_{sp}$ of $\\ce{PbI2}$ from a measured solubility of 0.70 g/L',
          steps: [
            { tex: 's = \\frac{0.70\\ \\text{g/L}}{461.0\\ \\text{g/mol}} = 1.52 \\times 10^{-3}\\ \\text{M}', why: 'Grams per liter to moles per liter with the molar mass of $\\ce{PbI2}$ ($207.2 + 2 \\times 126.90$).' },
            { tex: '[\\ce{Pb^2+}] = 1.52 \\times 10^{-3},\\quad [\\ce{I-}] = 2(1.52 \\times 10^{-3}) = 3.04 \\times 10^{-3}', why: 'Each dissolved $\\ce{PbI2}$ releases one $\\ce{Pb^2+}$ and two $\\ce{I-}$.' },
            { tex: 'K_{sp} = (1.52 \\times 10^{-3})(3.04 \\times 10^{-3})^2 = 1.4 \\times 10^{-8}', why: 'Same as $4s^3$. It matches the table.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The factor of 4 (or 108)',
          text: 'For $\\ce{CaF2}$ the most common errors are $K_{sp} = s \\cdot s^2$ (forgetting that $[\\ce{F-}] = 2s$) and $K_{sp} = s \\cdot 2s$ (forgetting to square). Write the ICE-style line "$[\\ce{Ca^2+}] = s$, $[\\ce{F-}] = 2s$" before you substitute, every time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'What is the molar solubility of silver chromate, $\\ce{Ag2CrO4}$, in pure water? $K_{sp} = 1.1 \\times 10^{-12}$. Give two significant figures (e.g. `6.5e-5`).',
      hint: '$[\\ce{Ag+}] = 2s$ and $[\\ce{CrO4^2-}] = s$, so $K_{sp} = (2s)^2 s = 4s^3$.',
      label: '$s =$',
      unit: 'M',
      answer: '(1.1*10^-12/4)^(1/3)',
      answerTex: '6.5 \\times 10^{-5}\\ \\text{M}',
      tolerance: 0.06e-5,
      explanation: '$4s^3 = 1.1 \\times 10^{-12}$, so $s^3 = 2.75 \\times 10^{-13}$ and $s = \\sqrt[3]{2.75 \\times 10^{-13}} = 6.5 \\times 10^{-5}\\ \\text{M}$. Then $[\\ce{Ag+}] = 1.3 \\times 10^{-4}\\ \\text{M}$ and $[\\ce{CrO4^2-}] = 6.5 \\times 10^{-5}\\ \\text{M}$. Notice this is about **five times more soluble** than AgCl ($1.3 \\times 10^{-5}\\ \\text{M}$), even though its $K_{sp}$ is 160 times smaller. The next card explains why.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'The molar solubility of $\\ce{CaF2}$ is measured as $2.15 \\times 10^{-4}\\ \\text{M}$. A student calculates $K_{sp}$. Tap the first line that is wrong.',
      lines: [
        '$\\ce{CaF2(s) <=> Ca^2+(aq) + 2F-(aq)}$',
        '$[\\ce{Ca^2+}] = 2.15 \\times 10^{-4}\\ \\text{M}$, $[\\ce{F-}] = 4.30 \\times 10^{-4}\\ \\text{M}$',
        '$K_{sp} = [\\ce{Ca^2+}][\\ce{F-}] = (2.15 \\times 10^{-4})(4.30 \\times 10^{-4})$',
        '$K_{sp} = 9.2 \\times 10^{-8}$',
      ],
      errorLines: [3],
      explanation: 'Line 2 correctly doubles the fluoride concentration, but line 3 forgets that the coefficient 2 also becomes an exponent: $K_{sp} = [\\ce{Ca^2+}][\\ce{F-}]^2 = (2.15 \\times 10^{-4})(4.30 \\times 10^{-4})^2 = 4.0 \\times 10^{-11}$, consistent with the table value $3.9 \\times 10^{-11}$. The student\'s answer is more than 2000 times too large.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Comparing solubilities: only like with like',
      blocks: [
        {
          type: 'p',
          text: 'It is tempting to say "smaller $K_{sp}$, less soluble". That works only for salts with the **same ion ratio**, because the formula linking $s$ to $K_{sp}$ ($s^2$, $4s^3$, $108s^5$) depends on the ratio.',
        },
        {
          type: 'table',
          headers: ['Salt', 'Type', '$K_{sp}$', 'Molar solubility $s$'],
          rows: [
            ['$\\ce{AgCl}$', '1 : 1', '$1.8 \\times 10^{-10}$', '$1.3 \\times 10^{-5}$ M'],
            ['$\\ce{AgBr}$', '1 : 1', '$5.0 \\times 10^{-13}$', '$7.1 \\times 10^{-7}$ M'],
            ['$\\ce{Ag2CrO4}$', '2 : 1', '$1.1 \\times 10^{-12}$', '$6.5 \\times 10^{-5}$ M'],
            ['$\\ce{CaF2}$', '1 : 2', '$3.9 \\times 10^{-11}$', '$2.1 \\times 10^{-4}$ M'],
          ],
          caption: 'Among the 1 : 1 silver halides, smaller $K_{sp}$ does mean less soluble. But $\\ce{Ag2CrO4}$, with a smaller $K_{sp}$ than AgCl, is the more soluble of the two.',
        },
        {
          type: 'graph',
          x: [-30, 0],
          y: [-10, 0],
          xStep: 5,
          yStep: 2,
          functions: [
            { expr: 'x/2', label: '1 : 1 salt, $s = \\sqrt{K_{sp}}$', color: 'blue' },
            { expr: '(x - log(4))/3', label: '1 : 2 or 2 : 1 salt, $s = \\sqrt[3]{K_{sp}/4}$', color: 'orange' },
            { expr: '(x - log(108))/5', label: '3 : 2 salt, $s = \\sqrt[5]{K_{sp}/108}$', color: 'purple' },
          ],
          points: [
            { x: -9.745, y: -4.872, label: 'AgCl', color: 'blue' },
            { x: -11.959, y: -4.187, label: 'Ag₂CrO₄', color: 'orange' },
          ],
          caption: 'Horizontal axis: $\\log_{10} K_{sp}$; vertical axis: $\\log_{10} s$. Because $s$ is a square, cube or fifth root of $K_{sp}$, the lines have slopes $\\frac{1}{2}$, $\\frac{1}{3}$ and $\\frac{1}{5}$. For small $K_{sp}$ the root with the higher index gives the larger $s$, so at the same $K_{sp}$ a 2 : 1 salt is far more soluble than a 1 : 1 salt. AgCl sits **lower** than $\\ce{Ag2CrO4}$ even though it is further right.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'To compare salts of different types, compute each molar solubility and compare those. Comparing $K_{sp}$ values directly is like comparing an area with a volume.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Which of these silver salts has the **highest molar solubility** in pure water? $K_{sp}$: AgCl $1.8 \\times 10^{-10}$, AgBr $5.0 \\times 10^{-13}$, AgI $8.3 \\times 10^{-17}$, $\\ce{Ag2CrO4}$ $1.1 \\times 10^{-12}$.',
      options: [
        { text: 'AgCl', why: 'AgCl has the largest $K_{sp}$, but it is a 1 : 1 salt: $s = \\sqrt{1.8 \\times 10^{-10}} = 1.3 \\times 10^{-5}$ M, which is less than the chromate\'s.' },
        { text: 'AgBr', why: '$s = \\sqrt{5.0 \\times 10^{-13}} = 7.1 \\times 10^{-7}$ M. Less soluble than AgCl.' },
        { text: 'AgI', why: '$s = \\sqrt{8.3 \\times 10^{-17}} = 9.1 \\times 10^{-9}$ M: the least soluble of all.' },
        { text: '$\\ce{Ag2CrO4}$', correct: true, why: 'As a 2 : 1 salt, $s = \\sqrt[3]{K_{sp}/4} = 6.5 \\times 10^{-5}$ M, the largest of the four despite its small $K_{sp}$.' },
      ],
      explanation: 'Convert each $K_{sp}$ into a molar solubility with the formula for its type, then compare. The three 1 : 1 halides rank in order of $K_{sp}$ (AgCl > AgBr > AgI), but silver chromate, whose $K_{sp}$ is set by a cube rather than a square, has the largest $s$ at $6.5 \\times 10^{-5}$ M.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The common-ion effect on solubility',
      blocks: [
        {
          type: 'p',
          text: 'The [[gchem-common-ion-effect|common-ion effect]] from the buffers lesson applies here too. If the water already contains $\\ce{Cl-}$, the equilibrium $\\ce{AgCl <=> Ag+ + Cl-}$ is pushed to the left and less AgCl can dissolve.',
        },
        {
          type: 'derivation',
          title: 'Solubility of AgCl in 0.10 M NaCl',
          steps: [
            { tex: '\\begin{array}{lcc} & [\\ce{Ag+}] & [\\ce{Cl-}] \\\\ \\hline \\text{I} & 0 & 0.10 \\\\ \\text{C} & +s & +s \\\\ \\text{E} & s & 0.10 + s \\end{array}', why: 'The NaCl supplies $0.10\\ \\text{M}$ chloride before any AgCl dissolves.' },
            { tex: 'K_{sp} = s(0.10 + s) = 1.8 \\times 10^{-10}', why: 'Substitute into $K_{sp}$.' },
            { tex: 's(0.10) \\approx 1.8 \\times 10^{-10} \\implies s = 1.8 \\times 10^{-9}\\ \\text{M}', why: '$s$ will be tiny compared with 0.10, so $0.10 + s \\approx 0.10$. Check: $1.8 \\times 10^{-9} \\ll 0.10$.' },
          ],
          result: 'The solubility drops from $1.3 \\times 10^{-5}$ M in pure water to $1.8 \\times 10^{-9}$ M: about 7500 times less. Analytical chemists wash a silver chloride precipitate with dilute chloride or nitric acid solution rather than pure water partly for this reason: it keeps the product from redissolving.',
        },
        {
          type: 'p',
          text: 'The same approximation works for other ratios as long as you keep the coefficients. For $\\ce{CaF2}$ in $0.010\\ \\text{M}$ NaF: $K_{sp} = s(0.010 + 2s)^2 \\approx s(0.010)^2$, so $s = \\frac{3.9 \\times 10^{-11}}{1.0 \\times 10^{-4}} = 3.9 \\times 10^{-7}\\ \\text{M}$, about 550 times less than in pure water.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Fluoride and teeth',
          text: 'Fluoridated water ($\\sim 0.7\\ \\text{mg/L}$, about $4 \\times 10^{-5}\\ \\text{M}$ fluoride) is far too dilute to precipitate $\\ce{CaF2}$ in your body. Its benefit comes from swapping into tooth enamel, as the pH card below explains.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'What is the molar solubility of $\\ce{PbI2}$ ($K_{sp} = 1.4 \\times 10^{-8}$) in $0.10\\ \\text{M}$ NaI? Give two significant figures (e.g. `1.4e-6`).',
      hint: '$[\\ce{Pb^2+}] = s$ and $[\\ce{I-}] = 0.10 + 2s \\approx 0.10$. Then $K_{sp} = s(0.10)^2$.',
      label: '$s =$',
      unit: 'M',
      answer: '1.4*10^-8/0.10^2',
      answerTex: '1.4 \\times 10^{-6}\\ \\text{M}',
      tolerance: 0.06e-6,
      explanation: '$K_{sp} = [\\ce{Pb^2+}][\\ce{I-}]^2 = s(0.10 + 2s)^2 \\approx s(0.010)$, so $s = \\frac{1.4 \\times 10^{-8}}{0.010} = 1.4 \\times 10^{-6}\\ \\text{M}$. Check: $2s = 2.8 \\times 10^{-6}$ is negligible next to 0.10. In pure water $s = \\sqrt[3]{1.4 \\times 10^{-8}/4} = 1.5 \\times 10^{-3}\\ \\text{M}$, so the iodide cut the solubility about 1000-fold. A common mistake is to forget to square the 0.10, giving $1.4 \\times 10^{-7}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Will a precipitate form? Q versus Ksp',
      blocks: [
        {
          type: 'p',
          text: 'When you mix two solutions you have not reached equilibrium yet, so compute the [[gchem-reaction-quotient|reaction quotient]] $Q$, the same expression as $K_{sp}$ but with the concentrations right after mixing (sometimes called the **ion product**). Then compare, exactly as in Unit 8:',
        },
        {
          type: 'list',
          items: [
            '$Q < K_{sp}$: the solution is unsaturated. No precipitate; more solid could dissolve.',
            '$Q = K_{sp}$: saturated, at equilibrium.',
            '$Q > K_{sp}$: supersaturated. Solid precipitates until the ion concentrations fall to make $Q = K_{sp}$.',
          ],
        },
        {
          type: 'derivation',
          title: 'Mix 50.0 mL of $2.0 \\times 10^{-4}$ M $\\ce{AgNO3}$ with 50.0 mL of $2.0 \\times 10^{-4}$ M NaCl',
          steps: [
            { tex: '[\\ce{Ag+}] = [\\ce{Cl-}] = 2.0 \\times 10^{-4} \\times \\frac{50.0\\ \\text{mL}}{100.0\\ \\text{mL}} = 1.0 \\times 10^{-4}\\ \\text{M}', why: 'Mixing equal volumes **dilutes** each ion by half. Forgetting this is the most common error.' },
            { tex: 'Q = [\\ce{Ag+}][\\ce{Cl-}] = (1.0 \\times 10^{-4})^2 = 1.0 \\times 10^{-8}', why: 'Same form as the $K_{sp}$ expression.' },
            { tex: 'Q = 1.0 \\times 10^{-8} > K_{sp} = 1.8 \\times 10^{-10}', why: 'Compare. $Q$ is about 55 times too large.' },
          ],
          result: 'AgCl precipitates, even at these tiny concentrations. Silver chloride is so insoluble that a faint cloudiness with $\\ce{AgNO3}$ is a sensitive test for chloride in water.',
        },
        {
          type: 'p',
          text: 'By contrast, mixing 100 mL of $0.0010\\ \\text{M}$ $\\ce{Pb(NO3)2}$ with 100 mL of $0.0020\\ \\text{M}$ NaCl gives $[\\ce{Pb^2+}] = 5.0 \\times 10^{-4}$, $[\\ce{Cl-}] = 1.0 \\times 10^{-3}$ and $Q = (5.0 \\times 10^{-4})(1.0 \\times 10^{-3})^2 = 5.0 \\times 10^{-10}$, far below $K_{sp}(\\ce{PbCl2}) = 1.7 \\times 10^{-5}$. No precipitate: lead chloride is only "insoluble" at much higher concentrations.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Equal volumes of $0.0020\\ \\text{M}$ $\\ce{CaCl2}$ and $0.0020\\ \\text{M}$ NaF are mixed. $K_{sp}(\\ce{CaF2}) = 3.9 \\times 10^{-11}$. Which statement is correct?',
      options: [
        { text: '$Q = 1.0 \\times 10^{-9} > K_{sp}$, so $\\ce{CaF2}$ precipitates', correct: true, why: 'After mixing each concentration is halved: $[\\ce{Ca^2+}] = [\\ce{F-}] = 1.0 \\times 10^{-3}$ M. $Q = (1.0 \\times 10^{-3})(1.0 \\times 10^{-3})^2 = 1.0 \\times 10^{-9}$, about 26 times $K_{sp}$.' },
        { text: '$Q = 8.0 \\times 10^{-9} > K_{sp}$, so $\\ce{CaF2}$ precipitates', why: 'Right conclusion, wrong $Q$: this uses the concentrations before mixing ($0.0020^3$). Mixing equal volumes halves each one.' },
        { text: '$Q = 1.0 \\times 10^{-6} > K_{sp}$, so $\\ce{CaF2}$ precipitates', why: 'This forgets to square $[\\ce{F-}]$: $(1.0 \\times 10^{-3})(1.0 \\times 10^{-3})$. The coefficient 2 becomes an exponent.' },
        { text: '$Q < K_{sp}$, so no precipitate forms', why: 'With the correct $Q = 1.0 \\times 10^{-9}$, $Q$ is larger than $K_{sp} = 3.9 \\times 10^{-11}$.' },
      ],
      explanation: 'Step 1, dilution on mixing: each ion goes from 0.0020 to 0.0010 M. Step 2, $Q = [\\ce{Ca^2+}][\\ce{F-}]^2 = (0.0010)(0.0010)^2 = 1.0 \\times 10^{-9}$. Step 3, compare: $Q > K_{sp}$, so calcium fluoride precipitates until $[\\ce{Ca^2+}][\\ce{F-}]^2$ falls to $3.9 \\times 10^{-11}$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Selective precipitation',
      blocks: [
        {
          type: 'p',
          text: 'When a solution holds several ions that precipitate with the same reagent, the one needing the **lowest** reagent concentration comes out first. Adding the reagent slowly can remove one ion almost completely before the next begins to precipitate: [[gchem-selective-precipitation|selective precipitation]].',
        },
        {
          type: 'derivation',
          title: 'Adding $\\ce{Ag+}$ to a solution 0.010 M in $\\ce{Cl-}$ and 0.010 M in $\\ce{CrO4^2-}$',
          steps: [
            { tex: '\\ce{AgCl}: [\\ce{Ag+}] = \\frac{K_{sp}}{[\\ce{Cl-}]} = \\frac{1.8 \\times 10^{-10}}{0.010} = 1.8 \\times 10^{-8}\\ \\text{M}', why: 'The silver concentration at which $Q$ just reaches $K_{sp}$ for AgCl.' },
            { tex: '\\ce{Ag2CrO4}: [\\ce{Ag+}] = \\sqrt{\\frac{K_{sp}}{[\\ce{CrO4^2-}]}} = \\sqrt{\\frac{1.1 \\times 10^{-12}}{0.010}} = 1.0 \\times 10^{-5}\\ \\text{M}', why: 'From $K_{sp} = [\\ce{Ag+}]^2[\\ce{CrO4^2-}]$. Note the square root.' },
            { tex: '1.8 \\times 10^{-8} < 1.0 \\times 10^{-5} \\implies \\ce{AgCl}\\ \\text{precipitates first}', why: 'AgCl needs about 600 times less silver to start precipitating.' },
            { tex: '[\\ce{Cl-}]_{\\text{left}} = \\frac{1.8 \\times 10^{-10}}{1.0 \\times 10^{-5}} = 1.7 \\times 10^{-5}\\ \\text{M}', why: 'When $[\\ce{Ag+}]$ finally reaches $1.0 \\times 10^{-5}$ M and red $\\ce{Ag2CrO4}$ begins to form, this is all the chloride still dissolved (using the unrounded $1.05 \\times 10^{-5}$).' },
          ],
          result: 'By the time the first red silver chromate appears, $1 - \\frac{1.7 \\times 10^{-5}}{0.010} = 99.8\\%$ of the chloride has precipitated. This is the **Mohr method** for measuring chloride: titrate with $\\ce{AgNO3}$ using a little chromate as the indicator, and the red color marks the end point.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Selective precipitation works well when the required reagent concentrations differ by a factor of 1000 or more. It is the basis of classical qualitative analysis, where groups of metal ions are separated by adding chloride, then sulfide at controlled pH, then carbonate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'A solution is $0.010\\ \\text{M}$ in each of $\\ce{I-}$, $\\ce{Br-}$, $\\ce{Cl-}$ and $\\ce{CrO4^2-}$. Solid $\\ce{AgNO3}$ is added slowly. Put the precipitates in the order they **begin** to form (first at the top). Use the $K_{sp}$ table from the first card.',
      hint: 'For each anion, find the $[\\ce{Ag+}]$ at which $Q = K_{sp}$. Remember the square root for $\\ce{Ag2CrO4}$.',
      lines: ['$\\ce{AgI}$', '$\\ce{AgBr}$', '$\\ce{AgCl}$', '$\\ce{Ag2CrO4}$'],
      explanation: 'Required $[\\ce{Ag+}]$: AgI $8.3 \\times 10^{-17}/0.010 = 8.3 \\times 10^{-15}$ M; AgBr $5.0 \\times 10^{-11}$ M; AgCl $1.8 \\times 10^{-8}$ M; $\\ce{Ag2CrO4}$ $\\sqrt{1.1 \\times 10^{-12}/0.010} = 1.0 \\times 10^{-5}$ M. The smallest requirement precipitates first. Note that $\\ce{Ag2CrO4}$ comes last even though its $K_{sp}$ is smaller than that of AgCl: the square root makes a 2 : 1 salt need more silver.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'pH and solubility: teeth and caves',
      blocks: [
        {
          type: 'p',
          text: 'If a salt\'s anion is a base ($\\ce{OH-}$, $\\ce{CO3^2-}$, $\\ce{PO4^3-}$, $\\ce{F-}$, $\\ce{S^2-}$), adding acid removes that anion from solution by protonating it. By Le Châtelier, more solid dissolves to replace it. Salts of the anions of strong acids (AgCl, $\\ce{BaSO4}$) barely care about pH.',
        },
        {
          type: 'p',
          text: 'Hydroxides show the effect most directly. In a solution whose pH is held fixed (buffered), $[\\ce{OH-}]$ is known and $K_{sp} = s[\\ce{OH-}]^2$, so $s = K_{sp} / [\\ce{OH-}]^2$. Each unit **drop** in pH makes $[\\ce{OH-}]$ ten times smaller and the solubility a hundred times **larger**.',
        },
        {
          type: 'graph',
          x: [8, 12],
          y: [-6, 0],
          xStep: 0.5,
          yStep: 1,
          functions: [{ expr: 'log(5.6*10^(-12)) + 28 - 2x', label: '$\\log_{10} s$ for $\\ce{Mg(OH)2}$', color: 'green' }],
          points: [{ x: 10.35, y: -3.951, label: 'saturated in pure water (pH 10.35)' }],
          caption: 'Horizontal axis: pH (held constant by a buffer); vertical axis: $\\log_{10}$ of the molar solubility of $\\ce{Mg(OH)2}$. The line has slope $-2$ because $s = K_{sp}/[\\ce{OH-}]^2$ and $\\log[\\ce{OH-}] = \\text{pH} - 14$. Milk of magnesia barely dissolves in the bottle (pH about 10) but dissolves readily in stomach acid, which is how it works as an antacid.',
        },
        {
          type: 'p',
          text: '**Tooth enamel** is mostly hydroxyapatite, $\\ce{Ca5(PO4)3OH}$, which dissolves as $\\ce{Ca5(PO4)3OH(s) <=> 5Ca^2+ + 3PO4^3- + OH-}$. Both anions are bases. Bacteria in plaque ferment sugars into acids, and below about pH 5.5 the $\\ce{H3O+}$ eats up $\\ce{OH-}$ and $\\ce{PO4^3-}$, enamel dissolves, and a cavity begins. Fluoride replaces $\\ce{OH-}$ to form fluorapatite, $\\ce{Ca5(PO4)3F}$, which is much less soluble and, because $\\ce{F-}$ is a far weaker base than $\\ce{OH-}$, far less sensitive to acid.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 304" xmlns="http://www.w3.org/2000/svg"><g class="s-blue" stroke="currentColor" stroke-width="1.6"><line x1="60" y1="8" x2="54" y2="22"/><line x1="90" y1="4" x2="84" y2="18"/><line x1="120" y1="10" x2="114" y2="24"/><line x1="150" y1="5" x2="144" y2="19"/></g><text x="170" y="18" font-size="12" class="t-blue">rain</text><rect x="10" y="30" width="480" height="34" fill="currentColor" class="f-orange" fill-opacity="0.18"/><text x="20" y="52" font-size="12">soil: decaying matter releases CO₂ → water becomes CO₂-rich (carbonic acid)</text><line x1="10" y1="64" x2="490" y2="64" stroke="currentColor" class="s-gray" stroke-width="1.2"/><line x1="10" y1="80" x2="490" y2="80" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="10" y1="98" x2="122" y2="98" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="300" y1="98" x2="490" y2="98" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="10" y1="116" x2="122" y2="116" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="300" y1="116" x2="490" y2="116" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="10" y1="134" x2="350" y2="134" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="10" y1="64" x2="10" y2="80" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="70" y1="64" x2="70" y2="80" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="130" y1="64" x2="130" y2="80" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="190" y1="64" x2="190" y2="80" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="250" y1="64" x2="250" y2="80" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="310" y1="64" x2="310" y2="80" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="370" y1="64" x2="370" y2="80" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="430" y1="64" x2="430" y2="80" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="40" y1="82" x2="40" y2="98" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="100" y1="82" x2="100" y2="98" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="340" y1="82" x2="340" y2="98" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="400" y1="82" x2="400" y2="98" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="460" y1="82" x2="460" y2="98" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="10" y1="100" x2="10" y2="116" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="70" y1="100" x2="70" y2="116" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="310" y1="100" x2="310" y2="116" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="370" y1="100" x2="370" y2="116" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="430" y1="100" x2="430" y2="116" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="40" y1="118" x2="40" y2="134" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="100" y1="118" x2="100" y2="134" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="340" y1="118" x2="340" y2="134" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="10" y1="136" x2="10" y2="148" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="70" y1="136" x2="70" y2="148" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="130" y1="136" x2="130" y2="148" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="190" y1="136" x2="190" y2="148" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="250" y1="136" x2="250" y2="148" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><line x1="310" y1="136" x2="310" y2="148" stroke="currentColor" class="s-gray" stroke-width="0.8" stroke-opacity="0.6"/><path d="M 110 64 L 118 98 L 106 126 L 116 156" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.2"/><text x="128" y="102" font-size="11.5" class="t-blue">acidic water widens cracks:</text><text x="128" y="118" font-size="11.5" class="t-blue">CaCO₃ dissolves</text><path d="M 40 170 Q 60 150 140 156 L 380 150 Q 470 152 470 200 L 470 262 Q 460 280 380 278 L 90 280 Q 40 278 40 240 Z" fill="currentColor" class="f-gray" fill-opacity="0.0" stroke="currentColor" stroke-width="1.5"/><path d="M 40 170 Q 60 150 140 156 L 380 150 Q 470 152 470 200 L 470 262 Q 460 280 380 278 L 90 280 Q 40 278 40 240 Z" fill="currentColor" class="f-gray" fill-opacity="0.0"/><polygon points="280,151 300,151 290,212" fill="currentColor" class="f-gray" fill-opacity="0.75"/><polygon points="276,279 304,279 290,240" fill="currentColor" class="f-gray" fill-opacity="0.75"/><ellipse cx="290" cy="225" rx="3" ry="4.5" fill="currentColor" class="f-blue"/><text x="232" y="184" text-anchor="end" font-size="11">stalactite</text><line x1="235" y1="181" x2="282" y2="181" stroke="currentColor" stroke-width="0.8"/><text x="232" y="266" text-anchor="end" font-size="11">stalagmite</text><line x1="235" y1="263" x2="282" y2="263" stroke="currentColor" stroke-width="0.8"/><text x="318" y="196" font-size="11" class="t-orange">drip loses CO₂ to cave air</text><text x="318" y="212" font-size="11" class="t-orange">→ equilibrium shifts left</text><text x="318" y="228" font-size="11" class="t-orange">→ CaCO₃ deposits</text><text x="70" y="214" font-size="13">cave</text><text x="420" y="140" text-anchor="middle" font-size="12" class="t-gray">limestone, CaCO₃</text><text x="250" y="296" text-anchor="middle" font-size="13">CaCO₃(s) + CO₂(aq) + H₂O(l) ⇌ Ca²⁺(aq) + 2 HCO₃⁻(aq)</text></svg>`,
          alt: 'Cross-section of the ground. Rain falls on soil, where decaying matter releases carbon dioxide and the water becomes carbonic acid. Below is limestone with a crack widened by acidic water. Below that is a cave with a stalactite hanging from the ceiling and a stalagmite rising from the floor, with a drop of water between them. Text notes that the drip loses CO2 to the cave air, the equilibrium shifts left and calcium carbonate deposits. At the bottom: CaCO3(s) + CO2(aq) + H2O(l) ⇌ Ca2+(aq) + 2 HCO3−(aq).',
          caption: 'Limestone caves are a $K_{sp}$ story run forward and backward. Water rich in $\\ce{CO2}$ converts insoluble $\\ce{CaCO3}$ into soluble calcium bicarbonate and carves the cave. When a drip meets cave air with less $\\ce{CO2}$, it loses $\\ce{CO2}$, the equilibrium shifts left, and $\\ce{CaCO3}$ deposits as stalactites and stalagmites. Ocean acidification threatens shell-building organisms by the same chemistry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'What is the molar solubility of $\\ce{Mg(OH)2}$ ($K_{sp} = 5.6 \\times 10^{-12}$) in a solution buffered at pH 10.00? Give two significant figures (e.g. `5.6e-4`).',
      hint: 'pH 10.00 means pOH 4.00, so $[\\ce{OH-}] = 1.0 \\times 10^{-4}$ M, fixed by the buffer. Then $s = K_{sp}/[\\ce{OH-}]^2$.',
      label: '$s =$',
      unit: 'M',
      answer: '5.6*10^-12/(1.0*10^-4)^2',
      answerTex: '5.6 \\times 10^{-4}\\ \\text{M}',
      tolerance: 0.06e-4,
      explanation: '$[\\ce{OH-}] = 10^{-4.00} = 1.0 \\times 10^{-4}$ M is held constant by the buffer, so $[\\ce{Mg^2+}] = s = \\frac{5.6 \\times 10^{-12}}{(1.0 \\times 10^{-4})^2} = 5.6 \\times 10^{-4}$ M. In pure water, $4s^3 = K_{sp}$ gives $s = 1.1 \\times 10^{-4}$ M (and a pH of 10.35). The buffer at the slightly lower pH of 10.00 makes it five times more soluble; at pH 9.00 it would be 100 times more soluble again.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Complex-ion formation: Kf',
      blocks: [
        {
          type: 'p',
          text: 'Metal ions are [[gchem-lewis-acid|Lewis acids]], and molecules or ions with lone pairs (ammonia, cyanide, thiosulfate, hydroxide) can bond to them to form **complex ions**. The equilibrium constant for building the complex is the [[gchem-formation-constant|formation constant]] $K_f$:',
        },
        {
          type: 'math',
          tex: '\\ce{Ag+(aq) + 2NH3(aq) <=> [Ag(NH3)2]+(aq)} \\qquad K_f = \\frac{[\\ce{[Ag(NH3)2]+}]}{[\\ce{Ag+}][\\ce{NH3}]^2} = 1.7 \\times 10^7',
        },
        {
          type: 'p',
          text: 'A large $K_f$ means the complex soaks up free $\\ce{Ag+}$. Put solid AgCl in ammonia: every $\\ce{Ag+}$ that dissolves is captured, $Q$ for AgCl stays below $K_{sp}$, and more solid dissolves. Adding the two reactions multiplies their constants:',
        },
        {
          type: 'derivation',
          title: 'Solubility of AgCl in 1.0 M $\\ce{NH3}$',
          steps: [
            { tex: '\\ce{AgCl(s) + 2NH3 <=> [Ag(NH3)2]+ + Cl-} \\qquad K = K_{sp}K_f = (1.8 \\times 10^{-10})(1.7 \\times 10^{7}) = 3.1 \\times 10^{-3}', why: 'Sum of $\\ce{AgCl <=> Ag+ + Cl-}$ and the complex formation; the free $\\ce{Ag+}$ cancels.' },
            { tex: '\\frac{s \\cdot s}{(1.0 - 2s)^2} = 3.1 \\times 10^{-3}', why: 'ICE table: each dissolved AgCl gives one complex ion and one $\\ce{Cl-}$ and uses two $\\ce{NH3}$.' },
            { tex: '\\frac{s}{1.0 - 2s} = \\sqrt{3.06 \\times 10^{-3}} = 0.0553', why: 'Both sides are perfect squares, so take the square root; no approximation needed.' },
            { tex: 's = \\frac{0.0553}{1 + 2(0.0553)} = 0.050\\ \\text{M}', why: 'Solve the linear equation $s = 0.0553(1.0 - 2s)$.' },
          ],
          result: 'About $0.050\\ \\text{M}$, roughly 3700 times the solubility in pure water ($1.3 \\times 10^{-5}$ M). This is how silver halides are separated in qualitative analysis, and how the thiosulfate "fixer" in film photography washes away the unexposed silver bromide.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Amphoteric hydroxides',
          text: '$\\ce{Al(OH)3}$ is insoluble near neutral pH but dissolves in strong acid (as $\\ce{Al^3+}$) **and** in strong base, as the complex ion $\\ce{[Al(OH)4]-}$. Hydroxides that dissolve at both ends of the pH scale are called amphoteric. Unit 12 returns to complex ions and their structures.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'truefalse',
      prompt: 'Silver chloride is more soluble in aqueous ammonia than in pure water, because ammonia binds free $\\ce{Ag+}$ as $\\ce{[Ag(NH3)2]+}$ and keeps $Q$ for AgCl below $K_{sp}$.',
      answer: true,
      explanation: 'Correct. Complex formation removes free $\\ce{Ag+}$, so the dissolution equilibrium shifts right. The overall constant is $K_{sp}K_f = 3.1 \\times 10^{-3}$, and in $1.0\\ \\text{M}$ $\\ce{NH3}$ about $0.050\\ \\text{M}$ AgCl dissolves, compared with $1.3 \\times 10^{-5}\\ \\text{M}$ in water. It is the opposite of the common-ion effect: there an added ion that the equilibrium **produces** lowers solubility; here an added reagent that **consumes** a product raises it.',
    },
  ],
  takeaways: [
    '$K_{sp} = [\\ce{M^{n+}}]^m[\\ce{X^{m-}}]^n$ for $\\ce{M_mX_n(s)}$; the solid is omitted.',
    'Molar solubility: $K_{sp} = s^2$ (1 : 1), $4s^3$ (1 : 2 or 2 : 1), $108s^5$ (3 : 2). Compare $K_{sp}$ values directly only for salts of the same type; otherwise compare $s$.',
    'A common ion lowers solubility: AgCl drops from $1.3 \\times 10^{-5}$ M in water to $1.8 \\times 10^{-9}$ M in 0.10 M NaCl.',
    'Precipitation: compute $Q$ with the concentrations after mixing (remember dilution); $Q > K_{sp}$ means a precipitate forms.',
    'Selective precipitation: the salt that needs the lowest reagent concentration precipitates first (the Mohr method uses this).',
    'Salts with basic anions (hydroxides, carbonates, phosphates) dissolve more in acid: tooth decay, cave formation, antacids. Complex-ion formation ($K_f$) also raises solubility; the overall constant is $K_{sp}K_f$.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 15: Equilibria of Other Reaction Classes',
      url: 'https://openstax.org/books/chemistry-2e/pages/15-introduction',
      source: 'openstax',
      note: 'Section 15.1 covers Ksp, molar solubility, the common-ion effect and precipitation; 15.2 and 15.3 cover complex ions and coupled equilibria.',
    },
    {
      title: 'Wikipedia — Solubility equilibrium',
      url: 'https://en.wikipedia.org/wiki/Solubility_equilibrium',
      source: 'wikipedia',
      note: 'The solubility product, common-ion and pH effects, and complex formation, with many examples.',
    },
    {
      title: 'Wikipedia — Speleothem',
      url: 'https://en.wikipedia.org/wiki/Speleothem',
      source: 'wikipedia',
      note: 'How stalactites, stalagmites and other cave formations grow from carbonate equilibria.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "solubility product" for further practice problems on Ksp, Q and selective precipitation.',
    },
  ],
};
