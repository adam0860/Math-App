import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-acids-bases',
  title: 'Acids, Bases and pH',
  summary: 'Proton donors and acceptors, why chemists measure acidity on a logarithmic scale, neutralization, and your first titration.',
  minutes: 22,
  objectives: [
    'Recognize acids and bases by their properties and by the Arrhenius and Brønsted–Lowry definitions',
    'Identify conjugate acid–base pairs in a proton-transfer reaction',
    'Distinguish strong from weak acids, and strength from concentration',
    'Use $K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14}$ and compute pH, pOH and $[\\ce{H+}]$ in both directions',
    'Write neutralization reactions and use titration data to find an unknown concentration',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What makes an acid an acid?',
      blocks: [
        {
          type: 'p',
          text: 'Long before anyone knew about ions, chemists sorted substances by how they behaved. Lemon juice, vinegar and the sulfuric acid in a vehicle battery share a set of properties; lye, ammonia and baking soda share an opposite set. And when you mix the two groups, each cancels the other\'s properties.',
        },
        {
          type: 'table',
          headers: ['[[acid|Acids]]', '[[base-chem|Bases]]'],
          rows: [
            ['taste sour (citrus, vinegar)', 'taste bitter, feel slippery (soap)'],
            ['turn blue litmus paper red', 'turn red litmus paper blue'],
            ['react with many metals, releasing $\\ce{H2}$ gas', 'dissolve grease and oils (drain cleaner)'],
            ['fizz with carbonates, releasing $\\ce{CO2}$', 'neutralize acids'],
            ['$\\ce{HCl}$, $\\ce{H2SO4}$, $\\ce{HNO3}$, $\\ce{CH3COOH}$', '$\\ce{NaOH}$, $\\ce{KOH}$, $\\ce{Ca(OH)2}$, $\\ce{NH3}$'],
          ],
          caption: 'Never taste or touch lab chemicals — concentrated acids and bases both destroy tissue. These properties are listed only so you recognize them.',
        },
        {
          type: 'p',
          text: 'In 1884 Svante Arrhenius explained these properties with ions. An **Arrhenius acid** produces hydrogen ions, $\\ce{H+}$, when it dissolves in water. An **Arrhenius base** produces hydroxide ions, $\\ce{OH-}$.',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\ce{HCl(aq) -> H+(aq) + Cl-(aq)} && \\text{acid} \\\\ &\\ce{NaOH(aq) -> Na+(aq) + OH-(aq)} && \\text{base} \\end{aligned}',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "$\\ce{H+}$" is really $\\ce{H3O+}$',
          text: 'A hydrogen atom that loses its electron is just a bare proton — tens of thousands of times smaller across than an atom, with a full $+1$ charge concentrated on it. Nothing that intensely charged stays alone in water: it instantly bonds to a lone pair on a water molecule, forming the [[chem-hydronium]] ion, $\\ce{H3O+}$. Chemists write $\\ce{H+(aq)}$ as shorthand, and $[\\ce{H+}]$ and $[\\ce{H3O+}]$ mean the same concentration.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Spill response',
          text: 'Motor pools keep baking soda ($\\ce{NaHCO3}$) near battery-charging areas. It neutralizes spilled sulfuric acid, and the fizzing of $\\ce{CO2}$ tells you the acid is still reacting; when the fizzing stops, the acid is used up. Baking soda is a weak base, so adding too much does no harm.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A clear liquid has leaked onto the floor near a battery bank. Which observation would confirm it is acidic?',
      options: [
        { text: 'It turns red litmus paper blue', why: 'That is the test result for a **base**. An acid turns blue litmus red.' },
        { text: 'It feels slippery between your fingers', why: 'Slipperiness is a property of bases (they react with the oils in your skin) — and you should never touch an unknown leak.' },
        { text: 'It fizzes when baking soda is sprinkled on it', correct: true, why: 'Acids react with carbonates and bicarbonates to release $\\ce{CO2}$ gas. Fizzing is a safe, quick sign of acid — and the baking soda is neutralizing it at the same time.' },
        { text: 'It conducts electricity', why: 'Acids conduct, but so do bases and salt solutions — any electrolyte. Conductivity does not single out an acid.' },
      ],
      explanation: 'Of these tests only the reaction with a bicarbonate is specific to acids: $\\ce{H2SO4 + 2NaHCO3 -> Na2SO4 + 2H2O + 2CO2}$. The $\\ce{CO2}$ bubbles are the evidence. Blue-turning litmus and slipperiness indicate a base, and conductivity only shows that ions are present.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Brønsted–Lowry: acids give protons, bases take them',
      blocks: [
        {
          type: 'p',
          text: 'Arrhenius\'s definition has a gap: ammonia, $\\ce{NH3}$, contains no $\\ce{OH}$ at all, yet it is clearly a base. In 1923 Johannes Brønsted and Thomas Lowry independently gave a broader definition that focuses on what actually moves in an acid–base reaction: a proton ($\\ce{H+}$).',
        },
        {
          type: 'definition',
          term: 'Brønsted–Lowry acids and bases',
          text: 'An **acid is a proton donor**. A **base is a proton acceptor**. An acid–base reaction is a proton transfer from the acid to the base.',
        },
        {
          type: 'math',
          tex: '\\ce{HCl + H2O -> H3O+ + Cl-}',
          caption: '$\\ce{HCl}$ donates its proton (acid); water accepts it (base).',
        },
        {
          type: 'p',
          text: 'Now look at ammonia. Its nitrogen has a lone pair, which grabs a proton from water. Water gives up a proton and is left as $\\ce{OH-}$ — and that is where ammonia\'s hydroxide comes from. Because the reaction can also run backward, we write the double arrow $\\ce{<=>}$.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="20 25 480 185" xmlns="http://www.w3.org/2000/svg"><text x="60" y="118" text-anchor="middle" style="font-size:22px">NH₃</text><text x="112" y="118" text-anchor="middle" style="font-size:22px">+</text><text x="165" y="118" text-anchor="middle" style="font-size:22px">H₂O</text><text x="238" y="118" text-anchor="middle" style="font-size:22px">⇌</text><text x="312" y="118" text-anchor="middle" style="font-size:22px">NH₄⁺</text><text x="372" y="118" text-anchor="middle" style="font-size:22px">+</text><text x="445" y="118" text-anchor="middle" style="font-size:22px">OH⁻</text><text x="60" y="144" text-anchor="middle" class="t-blue">base</text><text x="165" y="144" text-anchor="middle" class="t-red">acid</text><text x="305" y="144" text-anchor="middle" class="t-blue">conjugate acid</text><text x="445" y="144" text-anchor="middle" class="t-red">conjugate base</text><path d="M60 92 L60 50 L312 50 L312 92" fill="none" class="s-blue" stroke-width="2"/><text x="185" y="42" text-anchor="middle" class="t-blue">conjugate pair (differ by one H⁺)</text><path d="M165 154 L165 180 L445 180 L445 154" fill="none" class="s-red" stroke-width="2"/><text x="305" y="200" text-anchor="middle" class="t-red">conjugate pair (differ by one H⁺)</text><path d="M150 90 Q113 72 80 92" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3"/><path d="M78 94 L82 81 L89 91 Z" fill="currentColor"/><text x="114" y="68" text-anchor="middle" style="font-size:13px">H⁺</text></svg>',
          alt: 'The equation ammonia plus water in equilibrium with ammonium plus hydroxide. Ammonia is labeled base and ammonium conjugate acid, joined by a blue bracket. Water is labeled acid and hydroxide conjugate base, joined by a red bracket. A dashed arrow shows a proton moving from water to ammonia.',
          caption: 'Every acid–base reaction has two **conjugate pairs**. Remove $\\ce{H+}$ from an acid and you get its conjugate base; add $\\ce{H+}$ to a base and you get its conjugate acid.',
        },
        {
          type: 'p',
          text: 'Each [[chem-conjugate-acid-base-pair]] differs by exactly one $\\ce{H+}$ (and therefore by one unit of charge): $\\ce{NH3}$/$\\ce{NH4+}$, $\\ce{H2O}$/$\\ce{OH-}$, $\\ce{HCl}$/$\\ce{Cl-}$, $\\ce{H3O+}$/$\\ce{H2O}$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Water plays both roles',
          text: 'With $\\ce{HCl}$, water is a base (it accepts a proton). With $\\ce{NH3}$, water is an acid (it donates one). A substance that can act either way is called **amphoteric**. Whether something acts as an acid or a base depends on its partner — like a player who passes or receives depending on who has the ball.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Hydrofluoric acid reacts with water: $\\ce{HF(aq) + H2O(l) <=> F-(aq) + H3O+(aq)}$. Identify the conjugate species.',
      template: 'The conjugate base of $\\ce{HF}$ is ___, and the conjugate acid of $\\ce{H2O}$ is ___.',
      blanks: [{ answers: ['$\\ce{F-}$'] }, { answers: ['$\\ce{H3O+}$'] }],
      wordBank: ['$\\ce{F-}$', '$\\ce{H3O+}$', '$\\ce{OH-}$', '$\\ce{H2F+}$', '$\\ce{HF}$'],
      explanation: '$\\ce{HF}$ donates a proton and becomes $\\ce{F-}$ — remove one $\\ce{H}$ and lower the charge by one. Water accepts that proton and becomes $\\ce{H3O+}$ — add one $\\ce{H}$ and raise the charge by one. $\\ce{OH-}$ would be the conjugate *base* of water (water losing a proton), which is what happens with ammonia, not here.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Strong and weak acids',
      blocks: [
        {
          type: 'p',
          text: 'Some acids give up their protons completely; others hold on to most of them. A **strong acid** ionizes 100% in water — every molecule donates its proton, and the solution contains essentially no intact acid molecules. A **weak acid** ionizes only partially; in $0.10\\ \\text{M}$ acetic acid (vinegar\'s acid), only about $1\\%$ of the molecules are ionized at any moment.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 268" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="70" width="200" height="150" class="f-blue" fill-opacity="0.1"/><path d="M14 50 L20 56 L20 220 L220 220 L220 56 L226 50" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><rect x="280" y="70" width="200" height="150" class="f-blue" fill-opacity="0.1"/><path d="M274 50 L280 56 L280 220 L480 220 L480 56 L486 50" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><circle cx="139.7" cy="173.1" r="9" class="f-red"/><text x="139.7" y="178.1" text-anchor="middle" style="font-size:15px;font-weight:700;fill:#fff">+</text><circle cx="167.2" cy="195.6" r="11" class="f-teal"/><text x="167.2" y="200.6" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#fff">−</text><circle cx="44.6" cy="142.1" r="9" class="f-red"/><text x="44.6" y="147.1" text-anchor="middle" style="font-size:15px;font-weight:700;fill:#fff">+</text><circle cx="190.9" cy="162.7" r="11" class="f-teal"/><text x="190.9" y="167.7" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#fff">−</text><circle cx="184.1" cy="102.7" r="9" class="f-red"/><text x="184.1" y="107.7" text-anchor="middle" style="font-size:15px;font-weight:700;fill:#fff">+</text><circle cx="115.1" cy="117.6" r="11" class="f-teal"/><text x="115.1" y="122.6" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#fff">−</text><circle cx="84.7" cy="192.6" r="9" class="f-red"/><text x="84.7" y="197.6" text-anchor="middle" style="font-size:15px;font-weight:700;fill:#fff">+</text><circle cx="40.3" cy="187.6" r="11" class="f-teal"/><text x="40.3" y="192.6" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#fff">−</text><circle cx="73.5" cy="114.1" r="9" class="f-red"/><text x="73.5" y="119.1" text-anchor="middle" style="font-size:15px;font-weight:700;fill:#fff">+</text><circle cx="88.2" cy="157.5" r="11" class="f-teal"/><text x="88.2" y="162.5" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#fff">−</text><circle cx="41.5" cy="95.2" r="9" class="f-red"/><text x="41.5" y="100.2" text-anchor="middle" style="font-size:15px;font-weight:700;fill:#fff">+</text><circle cx="146.5" cy="137.1" r="11" class="f-teal"/><text x="146.5" y="142.1" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#fff">−</text><circle cx="374.1" cy="131.8" r="9" class="f-red"/><text x="374.1" y="136.8" text-anchor="middle" style="font-size:15px;font-weight:700;fill:#fff">+</text><circle cx="322.2" cy="187.1" r="11" class="f-teal"/><text x="322.2" y="192.1" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#fff">−</text><circle cx="310.5" cy="137.4" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="301.0" cy="146.3" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><circle cx="430.7" cy="99.5" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="443.7" cy="99.1" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><circle cx="423.1" cy="148.2" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="412.6" cy="140.6" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><circle cx="350.5" cy="106.3" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="338.1" cy="102.4" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><circle cx="368.2" cy="191.1" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="381.0" cy="193.5" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><circle cx="401.5" cy="115.1" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="395.5" cy="103.6" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><circle cx="293.9" cy="90.1" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="302.8" cy="99.5" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><circle cx="469.0" cy="164.5" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="457.8" cy="157.9" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><circle cx="416.9" cy="163.7" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="414.5" cy="176.4" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><text x="120" y="22" text-anchor="middle" style="font-weight:600">Strong acid: HCl</text><text x="120" y="42" text-anchor="middle" class="t-gray">every molecule ionized</text><text x="380" y="22" text-anchor="middle" style="font-weight:600">Weak acid: CH₃COOH</text><text x="380" y="42" text-anchor="middle" class="t-gray">most molecules intact</text><circle cx="40.0" cy="250.0" r="9" class="f-red"/><text x="40.0" y="255.0" text-anchor="middle" style="font-size:15px;font-weight:700;fill:#fff">+</text><text x="56" y="255">H₃O⁺</text><circle cx="130.0" cy="250.0" r="11" class="f-teal"/><text x="130.0" y="255.0" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#fff">−</text><text x="148" y="255">anion (Cl⁻, CH₃COO⁻)</text><circle cx="353.0" cy="250.0" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="340.0" cy="250.0" r="11" class="f-teal" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><text x="368" y="255">intact molecule</text></svg>',
          alt: 'Two beakers. The left beaker, labeled strong acid HCl, contains only separate hydronium ions and anions. The right beaker, labeled weak acid acetic acid, contains mostly intact acid molecules with just one hydronium ion and one anion.',
          caption: 'Full vs partial ionization. (The weak acid is drawn with 1 molecule in 10 ionized so you can see it; in real $0.10\\ \\text{M}$ acetic acid it is closer to 1 in 100.)',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\ce{HCl + H2O -> H3O+ + Cl-} \\\\ &\\ce{CH3COOH + H2O <=> H3O+ + CH3COO-} \\end{aligned}',
          caption: 'One-way arrow: the strong acid ionizes completely. Double arrow: the weak acid ionizes partially, and the reaction runs in both directions.',
        },
        {
          type: 'p',
          text: 'Only six common acids are strong: $\\ce{HCl}$, $\\ce{HBr}$, $\\ce{HI}$, $\\ce{HNO3}$, $\\ce{H2SO4}$ (its first proton) and $\\ce{HClO4}$. Memorize them; assume every other acid is weak. The strong bases are the hydroxides of group 1 metals ($\\ce{NaOH}$, $\\ce{KOH}$) and the heavier group 2 metals ($\\ce{Ca(OH)2}$, $\\ce{Ba(OH)2}$). Ammonia is the classic weak base. In the language of the solutions lesson, strong acids and bases are strong [[chem-electrolyte|electrolytes]]; weak ones are weak electrolytes.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Strong ≠ concentrated, and weak ≠ safe',
          text: '**Strength** is about the *fraction* of molecules that ionize. **Concentration** is about how many molecules are in each liter. A drop of $\\ce{HCl}$ in a swimming pool is a strong acid at a tiny concentration; glacial acetic acid is a weak acid at a huge concentration. And hydrofluoric acid is weak but extremely dangerous: it penetrates skin and attacks bone calcium. See the [[chem-strong-acid]] entry.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Coming in General Chemistry',
          text: 'How far a weak acid ionizes is measured by an equilibrium constant, the acid dissociation constant $K_a$ (and $K_b$ for weak bases). With it you can compute the pH of vinegar or ammonia exactly. For now, "strong = all, weak = a little" is enough.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'A $6\\ \\text{M}$ solution of acetic acid is a strong acid, because it is so concentrated.',
      answer: false,
      explanation: 'Acetic acid is a **weak** acid at any concentration, because only a small fraction of its molecules ionize. "Strong" and "weak" describe the *fraction ionized*; "concentrated" and "dilute" describe *how much acid per liter*. A $6\\ \\text{M}$ acetic acid solution is concentrated and weak; a $0.001\\ \\text{M}$ $\\ce{HCl}$ solution is dilute and strong.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Water ionizes itself: $K_w$',
      blocks: [
        {
          type: 'p',
          text: 'Even perfectly pure water is not just $\\ce{H2O}$ molecules. Because water is amphoteric, a few molecules transfer protons to their neighbors:',
        },
        {
          type: 'math',
          tex: '\\ce{H2O + H2O <=> H3O+ + OH-}',
          caption: 'The [[chem-water-autoionization]]. At any instant only about 2 molecules in a billion are ionized.',
        },
        {
          type: 'p',
          text: 'Careful measurements show that in pure water at $25\\ ^\\circ\\text{C}$, $[\\ce{H3O+}] = [\\ce{OH-}] = 1.0 \\times 10^{-7}\\ \\text{M}$ (square brackets mean "molarity of"). More importantly, in **any** aqueous solution at $25\\ ^\\circ\\text{C}$, the *product* of the two concentrations stays the same:',
        },
        {
          type: 'theorem',
          name: 'Ion product of water (25 °C)',
          tex: 'K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14}',
          text: 'Add acid and $[\\ce{H3O+}]$ goes up, so $[\\ce{OH-}]$ must go down to keep the product fixed — like a seesaw. **Neutral**: $[\\ce{H3O+}] = [\\ce{OH-}]$. **Acidic**: $[\\ce{H3O+}] > [\\ce{OH-}]$. **Basic**: $[\\ce{OH-}] > [\\ce{H3O+}]$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the product is fixed',
          text: 'Extra $\\ce{H3O+}$ ions from an acid bump into $\\ce{OH-}$ ions more often, so more of them recombine into water, until the product falls back to $K_w$. General Chemistry shows that $K_w$ is an *equilibrium constant* and explains why it is a product. Note that it depends on temperature: at body temperature ($37\\ ^\\circ\\text{C}$) $K_w$ is about $2.4 \\times 10^{-14}$. In this course we always use the $25\\ ^\\circ\\text{C}$ value.',
        },
        {
          type: 'derivation',
          title: 'Find $[\\ce{OH-}]$ in $0.010\\ \\text{M}$ $\\ce{HCl}$',
          steps: [
            { tex: '[\\ce{H3O+}] = 0.010\\ \\text{M} = 1.0 \\times 10^{-2}\\ \\text{M}', why: '$\\ce{HCl}$ is a strong acid, so every $\\ce{HCl}$ produces one $\\ce{H3O+}$. Water\'s own $10^{-7}\\ \\text{M}$ contribution is negligible next to this.' },
            { tex: '[\\ce{OH-}] = \\frac{K_w}{[\\ce{H3O+}]}', why: 'Solve $K_w = [\\ce{H3O+}][\\ce{OH-}]$ for the hydroxide concentration.' },
            { tex: '[\\ce{OH-}] = \\frac{1.0 \\times 10^{-14}}{1.0 \\times 10^{-2}} = 1.0 \\times 10^{-12}\\ \\text{M}', why: 'Divide coefficients and subtract exponents: $-14 - (-2) = -12$.' },
          ],
          result: 'Even in acid there is *some* hydroxide — just ten billion times less than the hydronium.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A solution at $25\\ ^\\circ\\text{C}$ has $[\\ce{H3O+}] = 2.5 \\times 10^{-4}\\ \\text{M}$. What is $[\\ce{OH-}]$? Type scientific notation like `4.2e-9` or `4.2*10^-9`.',
      hint: '$[\\ce{OH-}] = \\dfrac{1.0 \\times 10^{-14}}{2.5 \\times 10^{-4}}$. Divide $1.0$ by $2.5$, and subtract the exponents.',
      label: '$[\\ce{OH-}] =$',
      answer: '10^(-14)/(2.5*10^(-4))',
      answerTex: '4.0 \\times 10^{-11}\\ \\text{M}',
      tolerance: 0.05e-11,
      unit: 'M',
      explanation: '$[\\ce{OH-}] = \\frac{K_w}{[\\ce{H3O+}]} = \\frac{1.0 \\times 10^{-14}}{2.5 \\times 10^{-4}} = 0.40 \\times 10^{-10} = 4.0 \\times 10^{-11}\\ \\text{M}$. Since $[\\ce{H3O+}] > [\\ce{OH-}]$ by a huge factor, the solution is acidic.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'pH: acidity on a logarithmic scale',
      blocks: [
        {
          type: 'p',
          text: 'Hydronium concentrations in everyday solutions range from about $1\\ \\text{M}$ (battery acid) to $10^{-14}\\ \\text{M}$ (drain cleaner) — fourteen powers of ten. Numbers like $0.000\\ 000\\ 04$ are awkward to compare and impossible to graph on one linear axis. So in 1909 Søren Sørensen, a chemist at the Carlsberg brewery, proposed tracking just the *exponent*. You already know the tool that extracts an exponent: the [[logarithm]].',
        },
        {
          type: 'definition',
          term: 'pH and pOH',
          text: 'The [[ph]] of a solution is the negative base-10 logarithm of its hydronium concentration (in mol/L):\n\n$$\\text{pH} = -\\log[\\ce{H3O+}] \\qquad [\\ce{H3O+}] = 10^{-\\text{pH}}$$\n\nSimilarly $\\text{pOH} = -\\log[\\ce{OH-}]$. The minus sign simply makes the usual values positive, since these concentrations are below $1\\ \\text{M}$.',
        },
        {
          type: 'graph',
          x: [0, 0.01],
          y: [0, 8],
          xStep: 0.001,
          yStep: 1,
          functions: [{ expr: '-log(x)', label: '$\\text{pH} = -\\log[\\ce{H+}]$', color: 'blue', domain: [0.00000001, 0.01] }],
          points: [{ x: '10^(-p)', y: 'p', color: 'red' }],
          sliders: [{ name: 'p', min: 2, max: 7, step: 0.1, value: 2, label: 'pH' }],
          readouts: [{ label: '$[\\ce{H+}] = 10^{-\\text{pH}} =$ (M)', expr: '10^(-p)', digits: 8 }],
          caption: 'pH against $[\\ce{H+}]$ on an ordinary linear axis from $0$ to $0.01\\ \\text{M}$. Slide the pH from 2 up to 7: by pH 3 the point is already crowded toward the vertical axis, and pH 4 through 7 are squashed against it, indistinguishable. A log scale gives every power of ten equal room.',
        },
        {
          type: 'derivation',
          title: 'pH of $0.0025\\ \\text{M}$ $\\ce{HCl}$',
          steps: [
            { tex: '[\\ce{H3O+}] = 2.5 \\times 10^{-3}\\ \\text{M}', why: 'Strong acid: one $\\ce{H3O+}$ per $\\ce{HCl}$.' },
            { tex: '\\text{pH} = -\\log(2.5 \\times 10^{-3}) = -(\\log 2.5 + \\log 10^{-3})', why: 'The log of a product is the sum of the logs.' },
            { tex: '= -(0.398 - 3) = 2.60', why: '$\\log 10^{-3} = -3$ exactly; $\\log 2.5 = 0.398$. The integer part of a pH just records the power of ten.' },
          ],
          result: 'pH $= 2.60$. Two significant figures in $2.5 \\times 10^{-3}$ give **two decimal places** in the pH — the digits after the decimal point are the meaningful ones.',
        },
        {
          type: 'derivation',
          title: 'Going backward: find $[\\ce{H3O+}]$ when pH $= 8.30$',
          steps: [
            { tex: '[\\ce{H3O+}] = 10^{-8.30}', why: 'Undo the negative log: raise $10$ to the power $-\\text{pH}$.' },
            { tex: '= 10^{0.70} \\times 10^{-9} = 5.0 \\times 10^{-9}\\ \\text{M}', why: 'Split $-8.30 = 0.70 - 9$ to see the scientific notation; $10^{0.70} = 5.0$. Two decimal places in pH give two significant figures.' },
          ],
        },
        {
          type: 'p',
          text: 'Taking $-\\log$ of $K_w = [\\ce{H3O+}][\\ce{OH-}] = 10^{-14}$ turns the product into a sum, giving a handy relationship at $25\\ ^\\circ\\text{C}$:',
        },
        {
          type: 'math',
          tex: '\\text{pH} + \\text{pOH} = 14.00',
          caption: 'Example: $0.050\\ \\text{M}$ $\\ce{NaOH}$ has $\\text{pOH} = -\\log 0.050 = 1.30$, so $\\text{pH} = 14.00 - 1.30 = 12.70$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Log scales everywhere',
          text: 'Decibels for sound, the Richter scale, star magnitudes and f-stops on a camera are all log scales, used for the same reason: the raw quantities span many powers of ten. Game audio code converts volume sliders to decibels with `20 * log10(amplitude)` so that equal slider steps *sound* equal.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Find the pH of $3.2 \\times 10^{-4}\\ \\text{M}$ $\\ce{HNO3}$ (a strong acid). Give 2 decimal places.',
      hint: 'Strong acid, so $[\\ce{H3O+}] = 3.2 \\times 10^{-4}\\ \\text{M}$. Then pH $= -\\log[\\ce{H3O+}]$; on a calculator, `-log(3.2*10^-4)`.',
      label: 'pH $=$',
      answer: '-log(3.2*10^(-4))',
      answerTex: '3.49',
      tolerance: 0.005,
      explanation: '$\\ce{HNO3}$ ionizes completely, so $[\\ce{H3O+}] = 3.2 \\times 10^{-4}\\ \\text{M}$ and $\\text{pH} = -(\\log 3.2 + \\log 10^{-4}) = -(0.505 - 4) = 3.49$. Quick check: $3.2 \\times 10^{-4}$ lies between $10^{-4}$ (pH 4) and $10^{-3}$ (pH 3), so the pH must lie between 3 and 4.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The pH scale',
      blocks: [
        {
          type: 'p',
          text: 'At $25\\ ^\\circ\\text{C}$ neutral water has pH $7$. Lower is acidic, higher is basic — and because the scale is logarithmic, **each pH unit is a factor of 10** in $[\\ce{H3O+}]$. Lemon juice at pH $2$ is not "a bit more acidic" than coffee at pH $5$; it has $10^3 = 1000$ times the hydronium concentration.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="10 0 470 475" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="40" width="34" height="90" class="f-red"/><rect x="150" y="130" width="34" height="90" class="f-orange"/><rect x="150" y="220" width="34" height="60" class="f-green"/><rect x="150" y="280" width="34" height="60" class="f-teal"/><rect x="150" y="340" width="34" height="60" class="f-blue"/><rect x="150" y="400" width="34" height="60" class="f-purple"/><rect x="150" y="40" width="34" height="420" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="144" y1="40" x2="150" y2="40" stroke="currentColor"/><text x="140" y="45" text-anchor="end">0</text><text x="108" y="45" text-anchor="end" class="t-gray">10⁰</text><line x1="144" y1="70" x2="150" y2="70" stroke="currentColor"/><text x="140" y="75" text-anchor="end">1</text><text x="108" y="75" text-anchor="end" class="t-gray">10⁻¹</text><line x1="144" y1="100" x2="150" y2="100" stroke="currentColor"/><text x="140" y="105" text-anchor="end">2</text><text x="108" y="105" text-anchor="end" class="t-gray">10⁻²</text><line x1="144" y1="130" x2="150" y2="130" stroke="currentColor"/><text x="140" y="135" text-anchor="end">3</text><text x="108" y="135" text-anchor="end" class="t-gray">10⁻³</text><line x1="144" y1="160" x2="150" y2="160" stroke="currentColor"/><text x="140" y="165" text-anchor="end">4</text><text x="108" y="165" text-anchor="end" class="t-gray">10⁻⁴</text><line x1="144" y1="190" x2="150" y2="190" stroke="currentColor"/><text x="140" y="195" text-anchor="end">5</text><text x="108" y="195" text-anchor="end" class="t-gray">10⁻⁵</text><line x1="144" y1="220" x2="150" y2="220" stroke="currentColor"/><text x="140" y="225" text-anchor="end">6</text><text x="108" y="225" text-anchor="end" class="t-gray">10⁻⁶</text><line x1="144" y1="250" x2="150" y2="250" stroke="currentColor"/><text x="140" y="255" text-anchor="end">7</text><text x="108" y="255" text-anchor="end" class="t-gray">10⁻⁷</text><line x1="144" y1="280" x2="150" y2="280" stroke="currentColor"/><text x="140" y="285" text-anchor="end">8</text><text x="108" y="285" text-anchor="end" class="t-gray">10⁻⁸</text><line x1="144" y1="310" x2="150" y2="310" stroke="currentColor"/><text x="140" y="315" text-anchor="end">9</text><text x="108" y="315" text-anchor="end" class="t-gray">10⁻⁹</text><line x1="144" y1="340" x2="150" y2="340" stroke="currentColor"/><text x="140" y="345" text-anchor="end">10</text><text x="108" y="345" text-anchor="end" class="t-gray">10⁻¹⁰</text><line x1="144" y1="370" x2="150" y2="370" stroke="currentColor"/><text x="140" y="375" text-anchor="end">11</text><text x="108" y="375" text-anchor="end" class="t-gray">10⁻¹¹</text><line x1="144" y1="400" x2="150" y2="400" stroke="currentColor"/><text x="140" y="405" text-anchor="end">12</text><text x="108" y="405" text-anchor="end" class="t-gray">10⁻¹²</text><line x1="144" y1="430" x2="150" y2="430" stroke="currentColor"/><text x="140" y="435" text-anchor="end">13</text><text x="108" y="435" text-anchor="end" class="t-gray">10⁻¹³</text><line x1="144" y1="460" x2="150" y2="460" stroke="currentColor"/><text x="140" y="465" text-anchor="end">14</text><text x="108" y="465" text-anchor="end" class="t-gray">10⁻¹⁴</text><text x="136" y="22" text-anchor="end" style="font-weight:600">pH</text><text x="108" y="22" text-anchor="end" class="t-gray" style="font-weight:600">[H⁺] (M)</text><circle cx="184" cy="64.0" r="2.5" fill="currentColor"/><line x1="184" y1="64.0" x2="256" y2="52.0" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="57.0">battery acid <tspan class="t-gray">0.8</tspan></text><circle cx="184" cy="85.0" r="2.5" fill="currentColor"/><line x1="184" y1="85.0" x2="256" y2="82.5" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="87.5">stomach acid <tspan class="t-gray">1.5</tspan></text><circle cx="184" cy="106.0" r="2.5" fill="currentColor"/><line x1="184" y1="106.0" x2="256" y2="112.9" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="117.9">lemon juice <tspan class="t-gray">2.2</tspan></text><circle cx="184" cy="124.0" r="2.5" fill="currentColor"/><line x1="184" y1="124.0" x2="256" y2="143.4" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="148.4">vinegar <tspan class="t-gray">2.8</tspan></text><circle cx="184" cy="190.0" r="2.5" fill="currentColor"/><line x1="184" y1="190.0" x2="256" y2="173.8" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="178.8">black coffee <tspan class="t-gray">5.0</tspan></text><circle cx="184" cy="238.0" r="2.5" fill="currentColor"/><line x1="184" y1="238.0" x2="256" y2="204.3" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="209.3">milk <tspan class="t-gray">6.6</tspan></text><circle cx="184" cy="250.0" r="2.5" fill="currentColor"/><line x1="184" y1="250.0" x2="256" y2="234.8" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="239.8">pure water <tspan class="t-gray">7.0</tspan></text><circle cx="184" cy="262.0" r="2.5" fill="currentColor"/><line x1="184" y1="262.0" x2="256" y2="265.2" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="270.2">blood <tspan class="t-gray">7.4</tspan></text><circle cx="184" cy="283.0" r="2.5" fill="currentColor"/><line x1="184" y1="283.0" x2="256" y2="295.7" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="300.7">seawater <tspan class="t-gray">8.1</tspan></text><circle cx="184" cy="289.0" r="2.5" fill="currentColor"/><line x1="184" y1="289.0" x2="256" y2="326.2" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="331.2">baking soda solution <tspan class="t-gray">8.3</tspan></text><circle cx="184" cy="355.0" r="2.5" fill="currentColor"/><line x1="184" y1="355.0" x2="256" y2="356.6" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="361.6">milk of magnesia <tspan class="t-gray">10.5</tspan></text><circle cx="184" cy="385.0" r="2.5" fill="currentColor"/><line x1="184" y1="385.0" x2="256" y2="387.1" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="392.1">household ammonia <tspan class="t-gray">11.5</tspan></text><circle cx="184" cy="415.0" r="2.5" fill="currentColor"/><line x1="184" y1="415.0" x2="256" y2="417.5" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="422.5">bleach <tspan class="t-gray">12.5</tspan></text><circle cx="184" cy="445.0" r="2.5" fill="currentColor"/><line x1="184" y1="445.0" x2="256" y2="448.0" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="262" y="453.0">drain cleaner (lye) <tspan class="t-gray">13.5</tspan></text><text x="22" y="85.0" class="t-red" style="font-weight:600">more</text><text x="22" y="103.0" class="t-red" style="font-weight:600">acidic</text><text x="22" y="415.0" class="t-purple" style="font-weight:600">more</text><text x="22" y="433.0" class="t-purple" style="font-weight:600">basic</text><text x="22" y="255" class="t-green" style="font-weight:600">neutral</text></svg>',
          alt: 'A vertical pH scale from 0 at the top to 14 at the bottom, colored red for acidic, green near neutral and purple for basic, with hydronium concentrations from 10 to the 0 down to 10 to the minus 14 molar on the left. Everyday substances are labeled on the right: battery acid 0.8, stomach acid 1.5, lemon juice 2.2, vinegar 2.8, black coffee 5.0, milk 6.6, pure water 7.0, blood 7.4, seawater 8.1, baking soda solution 8.3, milk of magnesia 10.5, household ammonia 11.5, bleach 12.5, drain cleaner 13.5.',
          caption: 'Typical pH values (they vary from sample to sample). Read across: each step down the scale divides $[\\ce{H+}]$ by $10$.',
          maxWidth: 440,
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Your body runs on a narrow pH window',
          text: 'Blood is held between pH $7.35$ and $7.45$ by **buffers**, mixtures of a weak acid and its conjugate base that soak up added acid or base (a General Chemistry topic). Falling outside that range by just a few tenths — a factor of about 2 in $[\\ce{H+}]$ — is a medical emergency. Your stomach, meanwhile, runs at pH $1.5$–$3.5$ to digest food and kill bacteria.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'pH can go below 0 and above 14',
          text: 'The 0–14 range covers ordinary solutions, but it is not a law. $2\\ \\text{M}$ $\\ce{HCl}$ has $\\text{pH} = -\\log 2 = -0.30$. The formula does not care; only very concentrated solutions get there.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Lemon juice has pH $2.2$ and tomato juice has pH $4.2$. How do their hydronium concentrations compare?',
      options: [
        { text: 'Lemon juice has about $1.9$ times as much $\\ce{H3O+}$', why: 'That compares the pH numbers ($4.2 / 2.2$), but pH is a logarithm — ratios of pH values mean nothing.' },
        { text: 'Lemon juice has $2$ times as much $\\ce{H3O+}$', why: 'The pH *difference* is $2$, but a difference of $2$ in a log scale means a factor of $10^2$, not $2$.' },
        { text: 'Lemon juice has $100$ times as much $\\ce{H3O+}$', correct: true, why: '$\\frac{10^{-2.2}}{10^{-4.2}} = 10^{2} = 100$. Two pH units = two factors of ten.' },
        { text: 'Tomato juice has $100$ times as much $\\ce{H3O+}$', why: 'Right factor, wrong direction: a *lower* pH means *more* hydronium, because of the minus sign in $\\text{pH} = -\\log[\\ce{H3O+}]$.' },
      ],
      explanation: '$[\\ce{H3O+}] = 10^{-\\text{pH}}$, so the ratio is $\\frac{10^{-2.2}}{10^{-4.2}} = 10^{-2.2 - (-4.2)} = 10^{2} = 100$. In general, a pH difference of $\\Delta$ means a factor of $10^{\\Delta}$ in hydronium concentration, and the lower-pH solution is the more acidic one.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Neutralization: acid + base → salt + water',
      blocks: [
        {
          type: 'p',
          text: 'When an acid meets a base, the proton goes from the acid to the hydroxide and the two cancel into water. The leftover cation from the base and anion from the acid form an ionic compound called a **salt**. This is [[neutralization]]:',
        },
        {
          type: 'math',
          tex: '\\ce{\\underset{acid}{HCl} + \\underset{base}{NaOH} -> \\underset{salt}{NaCl} + \\underset{water}{H2O}}',
        },
        {
          type: 'p',
          text: 'Write it with ions and cross out the [[chem-spectator-ion|spectator ions]] ($\\ce{Na+}$ and $\\ce{Cl-}$ appear unchanged on both sides), and every strong acid–strong base neutralization reduces to the same [[chem-net-ionic-equation]]:',
        },
        {
          type: 'math',
          tex: '\\ce{H+(aq) + OH-(aq) -> H2O(l)}',
          caption: 'The real event in every strong acid–strong base neutralization. It releases heat — the solution warms up.',
        },
        {
          type: 'derivation',
          title: 'Balance the neutralization of sulfuric acid by potassium hydroxide',
          steps: [
            { tex: '\\ce{H2SO4 + KOH -> K2SO4 + H2O}', why: 'Salt: $\\ce{K+}$ from the base and $\\ce{SO4^2-}$ from the acid combine as $\\ce{K2SO4}$ (two $+1$ charges balance one $-2$).' },
            { tex: '\\ce{H2SO4 + 2KOH -> K2SO4 + H2O}', why: 'The salt needs two K, so take two $\\ce{KOH}$.' },
            { tex: '\\ce{H2SO4 + 2KOH -> K2SO4 + 2H2O}', why: 'Two acidic protons meet two hydroxides, making two waters. Check: K 2/2, S 1/1, O 6/6, H 4/4.' },
          ],
          result: 'One $\\ce{H2SO4}$ needs **two** $\\ce{KOH}$, because sulfuric acid has two protons to give. This 1 : 2 ratio matters in titrations.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Antacids',
          text: 'Heartburn is stomach acid ($\\ce{HCl}$) where it should not be. Antacid tablets are bases such as magnesium hydroxide or calcium carbonate: $\\ce{Mg(OH)2 + 2HCl -> MgCl2 + 2H2O}$. They are chosen to be weak or poorly soluble so they neutralize gently instead of swinging your stomach to a high pH.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Balance the neutralization of phosphoric acid by sodium hydroxide (type the coefficients).',
      template: '$\\ce{H3PO4}$ + ___ $\\ce{NaOH}$ $\\rightarrow$ $\\ce{Na3PO4}$ + ___ $\\ce{H2O}$',
      blanks: [{ answers: ['3'] }, { answers: ['3'] }],
      hint: 'How many protons does $\\ce{H3PO4}$ have to give? Each one needs its own hydroxide.',
      explanation: 'Phosphoric acid has three acidic protons, and the salt $\\ce{Na3PO4}$ needs three $\\ce{Na+}$, so three $\\ce{NaOH}$ are required. Three $\\ce{H+}$ plus three $\\ce{OH-}$ make three $\\ce{H2O}$: $\\ce{H3PO4 + 3NaOH -> Na3PO4 + 3H2O}$. Check: Na 3/3, P 1/1, O 7/7, H 6/6.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Titration: measuring an unknown concentration',
      blocks: [
        {
          type: 'p',
          text: 'Neutralization is also a measuring tool. In a [[chem-titration]], you put a measured volume of an acid of unknown concentration in a flask with a few drops of an **indicator** — phenolphthalein is colorless in acid and turns pink in base. Then you add a base of *known* molarity from a **buret** (a long graduated tube with a tap) until one drop turns the solution permanently pink.',
        },
        {
          type: 'p',
          text: 'At that moment, the **equivalence point**, the moles of base added exactly match the moles of acid present (in the ratio of the balanced equation). This is the solution-stoichiometry road map from the first lesson of this unit: volume × molarity → moles → mole ratio → moles → ÷ volume.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 14],
          xStep: 5,
          yStep: 1,
          functions: [{ expr: '-log(((25c - 0.1x)/(25 + x) + sqrt(((25c - 0.1x)/(25 + x))^2 + 4*10^(-14)))/2)', label: 'pH of the flask', color: 'blue', domain: [0, 50] }],
          hlines: [{ y: 7, label: 'pH 7', color: 'gray' }],
          vlines: [{ x: '250c', label: 'equivalence', color: 'red' }],
          sliders: [{ name: 'c', min: 0.05, max: 0.18, step: 0.005, value: 0.1, label: 'acid concentration (M)' }],
          readouts: [{ label: 'equivalence volume (mL) $=$', expr: '250c', digits: 1 }],
          caption: 'Titration curve: $25.0\\ \\text{mL}$ of $\\ce{HCl}$ titrated with $0.100\\ \\text{M}$ $\\ce{NaOH}$ (horizontal axis: mL of base added). The pH creeps up, then leaps by about 6 units within a few drops at the equivalence point — so a single drop flips the indicator. Change the acid concentration and watch the jump move.',
        },
        {
          type: 'derivation',
          title: '$25.00\\ \\text{mL}$ of $\\ce{HCl}$ needs $18.40\\ \\text{mL}$ of $0.1000\\ \\text{M}$ $\\ce{NaOH}$. Find $[\\ce{HCl}]$.',
          steps: [
            { tex: '0.01840\\ \\cancel{\\text{L}} \\times \\frac{0.1000\\ \\text{mol}\\ \\ce{NaOH}}{1\\ \\cancel{\\text{L}}} = 1.840 \\times 10^{-3}\\ \\text{mol}\\ \\ce{NaOH}', why: 'Start from the solution you know completely: volume (in L) times molarity gives moles.' },
            { tex: '1.840 \\times 10^{-3}\\ \\cancel{\\text{mol}\\ \\ce{NaOH}} \\times \\frac{1\\ \\text{mol}\\ \\ce{HCl}}{1\\ \\cancel{\\text{mol}\\ \\ce{NaOH}}} = 1.840 \\times 10^{-3}\\ \\text{mol}\\ \\ce{HCl}', why: '$\\ce{HCl + NaOH -> NaCl + H2O}$ is 1 : 1. At the equivalence point, moles of acid = moles of base × ratio.' },
            { tex: '[\\ce{HCl}] = \\frac{1.840 \\times 10^{-3}\\ \\text{mol}}{0.02500\\ \\text{L}} = 0.07360\\ \\text{M}', why: 'Molarity = moles ÷ liters of the acid sample. Burets read to $0.01\\ \\text{mL}$, so 4 significant figures are justified.' },
          ],
          result: 'The acid is $0.07360\\ \\text{M}$ $\\ce{HCl}$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Titration questions almost always hide a mole ratio. With $\\ce{H2SO4}$ (two protons) or $\\ce{Ca(OH)2}$ (two hydroxides) the ratio is not 1 : 1. Write the balanced equation first, every time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: '$20.00\\ \\text{mL}$ of sulfuric acid is titrated with $0.1200\\ \\text{M}$ $\\ce{NaOH}$; the endpoint comes at $32.50\\ \\text{mL}$. Tap the first line that is wrong.',
      lines: [
        '$\\ce{H2SO4 + 2NaOH -> Na2SO4 + 2H2O}$',
        'mol $\\ce{NaOH}$ $= (0.03250\\ \\text{L})(0.1200\\ \\text{mol/L}) = 3.900 \\times 10^{-3}$ mol',
        'mol $\\ce{H2SO4}$ $= 3.900 \\times 10^{-3}$ mol',
        '$[\\ce{H2SO4}] = \\dfrac{3.900 \\times 10^{-3}\\ \\text{mol}}{0.02000\\ \\text{L}} = 0.1950\\ \\text{M}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 ignores the mole ratio. The balanced equation says $1$ mol $\\ce{H2SO4}$ reacts with $2$ mol $\\ce{NaOH}$, so mol $\\ce{H2SO4} = 3.900 \\times 10^{-3} \\times \\frac{1}{2} = 1.950 \\times 10^{-3}$ mol. Then $[\\ce{H2SO4}] = \\frac{1.950 \\times 10^{-3}}{0.02000} = 0.09750\\ \\text{M}$ — half the student\'s answer.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'numeric',
      prompt: 'A $10.00\\ \\text{mL}$ sample of vinegar is titrated with $0.5000\\ \\text{M}$ $\\ce{NaOH}$. The phenolphthalein turns pink after $14.25\\ \\text{mL}$. What is the molarity of acetic acid in the vinegar? ($\\ce{CH3COOH + NaOH -> NaCH3COO + H2O}$) Give 4 significant figures.',
      hint: 'The ratio is 1 : 1. Moles of $\\ce{NaOH}$ = $0.01425\\ \\text{L} \\times 0.5000\\ \\text{mol/L}$.',
      label: '$M =$',
      answer: '0.5000*14.25/10.00',
      answerTex: '0.7125\\ \\text{M}',
      tolerance: 0.00006,
      unit: 'M',
      explanation: 'mol $\\ce{NaOH}$ $= 0.01425\\ \\text{L} \\times 0.5000\\ \\text{mol/L} = 7.125 \\times 10^{-3}$ mol $=$ mol acetic acid (1 : 1). Molarity $= \\frac{7.125 \\times 10^{-3}\\ \\text{mol}}{0.01000\\ \\text{L}} = 0.7125\\ \\text{M}$. With acetic acid\'s molar mass of $60.05\\ \\text{g/mol}$ that is $42.8\\ \\text{g}$ per liter, about $4.3\\ \\text{g}$ per $100\\ \\text{mL}$ — right in line with the "$4$–$5\\%$ acidity" printed on a vinegar label. (Acetic acid is weak, but the titration still counts *all* of it: as $\\ce{OH-}$ removes the ionized molecules, more ionize until every one has reacted.)',
    },
    // ------------------------------------------------------------------ 18
    {
      kind: 'concept',
      title: 'Looking back, looking ahead',
      blocks: [
        {
          type: 'p',
          text: 'That completes Chemistry Foundations. Step back and notice how much of it rests on a few ideas you now own:',
        },
        {
          type: 'list',
          items: [
            '**Measurement and units.** Significant figures and dimensional analysis — the conversion-factor chains in every calculation of this unit.',
            '**Atoms and the periodic table.** Protons, neutrons and electrons, and the trends that explain why sodium gives up an electron and chlorine takes one.',
            '**Bonding and shape.** Ionic and covalent bonds, Lewis structures and polarity — which is why water dissolves salt but not oil.',
            '**The mole and stoichiometry.** Counting particles by weighing them, and the mole ratio that powers solution stoichiometry, gas stoichiometry and titrations.',
            '**Solutions, gases, acids and bases.** Molarity, $PV = nRT$ and pH: three ways of turning a measurement into a count of moles.',
          ],
        },
        {
          type: 'p',
          text: 'Several threads in this lesson were deliberately left loose, and **General Chemistry** ties them off. The double arrow $\\ce{<=>}$ becomes **chemical equilibrium**, with equilibrium constants such as $K_a$, $K_b$ and $K_w$ that let you compute the pH of a weak acid, design a buffer, or predict how far any reaction goes. The heat released by neutralization becomes **thermochemistry**. "How fast does it happen?" becomes **kinetics**. The electron shells from unit 2 become the full **quantum model** of the atom, and the batteries and electrolytes you met here become **electrochemistry**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why chemistry keeps using the same few tools',
          text: 'Nearly every quantitative chemistry problem is the same game: convert what you can measure (grams, liters, pressure, pH) into moles, use a ratio that comes from the balanced equation, then convert back. The details grow richer in General Chemistry, but the strategy — units on every factor, moles in the middle — never changes.',
        },
      ],
    },
  ],
  takeaways: [
    'Arrhenius: acids make $\\ce{H+}$, bases make $\\ce{OH-}$ in water. Brønsted–Lowry: acids donate protons, bases accept them; conjugate pairs differ by one $\\ce{H+}$.',
    'Strong acids ($\\ce{HCl}$, $\\ce{HBr}$, $\\ce{HI}$, $\\ce{HNO3}$, $\\ce{H2SO4}$, $\\ce{HClO4}$) ionize completely; weak acids ionize partially. Strength is not concentration.',
    'Water autoionizes: $K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14}$ at $25\\ ^\\circ\\text{C}$, so one concentration determines the other.',
    '$\\text{pH} = -\\log[\\ce{H3O+}]$, $[\\ce{H3O+}] = 10^{-\\text{pH}}$, and $\\text{pH} + \\text{pOH} = 14.00$. Each pH unit is a factor of 10.',
    'Neutralization: acid + base → salt + water; the net ionic equation for strong acids and bases is $\\ce{H+ + OH- -> H2O}$.',
    'In a titration, at the equivalence point the moles of acid and base match in the ratio of the balanced equation: volume × molarity → moles → mole ratio → moles ÷ volume.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 14: Acid-Base Equilibria',
      url: 'https://openstax.org/books/chemistry-2e/pages/14-introduction',
      source: 'openstax',
      note: 'Brønsted–Lowry acids and bases, pH and pOH, and the $K_a$ and $K_b$ you will meet in General Chemistry.',
    },
    {
      title: 'Wikipedia — pH',
      url: 'https://en.wikipedia.org/wiki/PH',
      source: 'wikipedia',
      note: 'History of the pH scale, how pH meters and indicators work, and pH values of many common substances.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for "pH Scale" and "Acid-Base Solutions" to dip a virtual probe into everyday liquids and compare strong and weak acids.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'A free library of General Chemistry textbooks — a good next stop once you finish this course.',
    },
  ],
};
