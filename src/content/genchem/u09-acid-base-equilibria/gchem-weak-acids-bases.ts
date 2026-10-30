import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-weak-acids-bases',
  title: 'Weak Acids, Weak Bases, Ka and Kb',
  summary: 'Put a number on "weak": Ka, Kb and pKa, the pH of weak acid and base solutions by ICE table, percent ionization, Ka·Kb = Kw, and why molecular structure makes some acids stronger than others.',
  minutes: 20,
  objectives: [
    'Write $K_a$ and $K_b$ expressions and convert between $K_a$ and $\\text{p}K_a$',
    'Calculate the pH of a weak acid or weak base solution with an ICE table, and check the small-$x$ approximation with the 5% rule',
    'Calculate percent ionization and explain why it increases when a weak acid is diluted',
    'Use $K_a K_b = K_w$ to find the strength of a conjugate base or acid',
    'Predict relative acid strength from bond strength, electronegativity, the number of oxygens in an oxyacid, and resonance stabilization of the conjugate base',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From "a little" to a number: the acid ionization constant',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations you met acids as proton donors, [[chem-conjugate-acid-base-pair|conjugate pairs]] that differ by one $\\ce{H+}$, and the split between [[chem-strong-acid|strong acids]] (100% ionized) and weak acids (only partly ionized). You also met $K_w$ and pH. Now that Unit 8 has given you [[gchem-equilibrium-constant|equilibrium constants]] and [[gchem-ice-table|ICE tables]], "weak" can become a number.',
        },
        {
          type: 'p',
          text: 'A weak acid $\\ce{HA}$ transfers a proton to water, and the reverse reaction runs too, so the solution settles at an equilibrium with most of the acid still intact:',
        },
        {
          type: 'math',
          tex: '\\ce{HA(aq) + H2O(l) <=> H3O+(aq) + A-(aq)}',
          caption: 'Forward: the acid donates a proton to water. Reverse: the conjugate base $\\ce{A-}$ takes it back from $\\ce{H3O+}$.',
        },
        {
          type: 'definition',
          term: 'Acid ionization constant',
          text: 'The [[gchem-acid-ionization-constant|acid ionization constant]] $K_a$ is the equilibrium constant for that reaction: $K_a = \\dfrac{[\\ce{H3O+}][\\ce{A-}]}{[\\ce{HA}]}$. The larger $K_a$, the further the equilibrium lies to the right and the stronger the acid.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why water is missing from the expression',
          text: 'Water is the solvent, a nearly pure liquid. In Unit 8 you saw that pure liquids and solids enter $K$ with an activity of 1. Numerically, water is about $55.5\\ \\text{M}$, and ionizing a weak acid uses up at most a few hundredths of a mole per liter of it, so its concentration is effectively a constant that has been absorbed into $K_a$.',
        },
        {
          type: 'p',
          text: 'Because $K_a$ values span many powers of ten, chemists use the same trick as pH. The [[gchem-pka]] is $\\text{p}K_a = -\\log K_a$, so $K_a = 10^{-\\text{p}K_a}$. **A smaller pKa means a stronger acid**, and each pKa unit is a factor of 10 in $K_a$.',
        },
        {
          type: 'table',
          headers: ['Acid', 'Conjugate base', '$K_a$ (25 °C)', '$\\text{p}K_a$'],
          rows: [
            ['hydrogen sulfate ion, $\\ce{HSO4-}$', '$\\ce{SO4^2-}$', '$1.2 \\times 10^{-2}$', '1.92'],
            ['hydrofluoric acid, $\\ce{HF}$', '$\\ce{F-}$', '$3.5 \\times 10^{-4}$', '3.46'],
            ['formic acid, $\\ce{HCOOH}$', '$\\ce{HCOO-}$', '$1.8 \\times 10^{-4}$', '3.74'],
            ['acetic acid, $\\ce{CH3COOH}$', '$\\ce{CH3COO-}$', '$1.8 \\times 10^{-5}$', '4.74'],
            ['hypochlorous acid, $\\ce{HOCl}$', '$\\ce{OCl-}$', '$2.9 \\times 10^{-8}$', '7.54'],
            ['hydrocyanic acid, $\\ce{HCN}$', '$\\ce{CN-}$', '$4.9 \\times 10^{-10}$', '9.31'],
          ],
          caption: 'Typical textbook values (OpenStax *Chemistry 2e*, Appendix H, gives very similar ones). Acetic acid is also written $\\ce{HC2H3O2}$. The strong acids have $K_a \\gg 1$ and are usually not listed at all.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'A weak acid in your canteen',
          text: 'Hypochlorous acid, $\\ce{HOCl}$, is the actual disinfectant in chlorinated tap water, pool water and chlorine-based water purification tablets. It is a weak acid with $\\text{p}K_a = 7.54$, and the next lessons show why that number decides how well the water is disinfected at a given pH.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Four solutions each contain one of these acids at the same concentration, $0.10\\ \\text{M}$. Which solution has the **lowest pH**?',
      options: [
        { text: 'Hydrocyanic acid, $K_a = 4.9 \\times 10^{-10}$', why: 'This is the weakest acid in the list (largest pKa, 9.31). It produces the least $\\ce{H3O+}$ and gives the highest pH.' },
        { text: 'Hydrofluoric acid, $K_a = 3.5 \\times 10^{-4}$', correct: true, why: 'Largest $K_a$ (smallest pKa, 3.46) means the equilibrium lies furthest to the right, so the most $\\ce{H3O+}$ forms and the pH is lowest.' },
        { text: 'Acetic acid, $K_a = 1.8 \\times 10^{-5}$', why: 'Acetic acid is about 20 times weaker than HF ($3.5 \\times 10^{-4} / 1.8 \\times 10^{-5} \\approx 19$).' },
        { text: 'Hypochlorous acid, $K_a = 2.9 \\times 10^{-8}$', why: 'A pKa of 7.54 makes HOCl a very weak acid. Do not confuse "more negative exponent" with "stronger": $10^{-8}$ is far smaller than $10^{-4}$.' },
      ],
      explanation: 'At equal concentration, the acid with the largest $K_a$ (equivalently the smallest pKa) ionizes most and gives the most $\\ce{H3O+}$. Ranking by $K_a$: HF ($3.5 \\times 10^{-4}$) > acetic ($1.8 \\times 10^{-5}$) > HOCl ($2.9 \\times 10^{-8}$) > HCN ($4.9 \\times 10^{-10}$). The pH values come out as about 2.24, 2.87, 4.27 and 5.15.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The pH of a weak acid: ICE table and the 5% rule',
      blocks: [
        {
          type: 'p',
          text: 'To find the pH of $0.10\\ \\text{M}$ acetic acid you need $[\\ce{H3O+}]$ at equilibrium. This is exactly the ICE-table problem from Unit 8: write the Initial concentrations, the Change in terms of one unknown $x$, and the Equilibrium concentrations, then substitute into $K_a$.',
        },
        {
          type: 'table',
          headers: ['Row', '$[\\ce{CH3COOH}]$', '$[\\ce{H3O+}]$', '$[\\ce{CH3COO-}]$'],
          rows: [
            ['**I**nitial', '$0.10$', '$\\approx 0$', '$0$'],
            ['**C**hange', '$-x$', '$+x$', '$+x$'],
            ['**E**quilibrium', '$0.10 - x$', '$x$', '$x$'],
          ],
          caption: 'Each acid molecule that ionizes makes one $\\ce{H3O+}$ and one $\\ce{CH3COO-}$, so all three changes are $x$. Water itself contributes only $10^{-7}\\ \\text{M}$ of $\\ce{H3O+}$, negligible next to what the acid makes.',
        },
        {
          type: 'derivation',
          title: 'pH of 0.10 M acetic acid ($K_a = 1.8 \\times 10^{-5}$)',
          steps: [
            { tex: 'K_a = \\frac{[\\ce{H3O+}][\\ce{CH3COO-}]}{[\\ce{CH3COOH}]} = \\frac{x \\cdot x}{0.10 - x} = 1.8 \\times 10^{-5}', why: 'Substitute the equilibrium row of the ICE table into the $K_a$ expression.' },
            { tex: '\\frac{x^2}{0.10 - x} \\approx \\frac{x^2}{0.10}', why: 'Approximation: $K_a$ is small, so only a tiny fraction ionizes and $x \\ll 0.10$. Subtracting a tiny $x$ from 0.10 barely changes it. We must check this afterwards.' },
            { tex: 'x^2 = (0.10)(1.8 \\times 10^{-5}) = 1.8 \\times 10^{-6}', why: 'Multiply both sides by 0.10.' },
            { tex: 'x = \\sqrt{1.8 \\times 10^{-6}} = 1.34 \\times 10^{-3}\\ \\text{M} = [\\ce{H3O+}]', why: 'Take the positive square root (a concentration cannot be negative).' },
            { tex: '\\frac{1.34 \\times 10^{-3}}{0.10} \\times 100\\% = 1.3\\% < 5\\%\\ \\checkmark', why: 'The [[gchem-five-percent-rule|5% check]]: $x$ is only 1.3% of the initial concentration, so neglecting it in $0.10 - x$ was justified.' },
            { tex: '\\text{pH} = -\\log(1.34 \\times 10^{-3}) = 2.87', why: 'Definition of pH. Two decimal places, matching the two significant figures of the data.' },
          ],
          result: 'pH $= 2.87$. Solving the full quadratic instead gives $x = 1.33 \\times 10^{-3}\\ \\text{M}$ and pH $2.875$: the approximation moved the answer by only 0.003. Compare $0.10\\ \\text{M}$ HCl, pH $1.00$: the weak acid makes about 75 times less $\\ce{H3O+}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why 5%, and when the approximation fails',
          text: 'With the approximation, $x = \\sqrt{K_a C}$, so the fraction ionized is $x / C = \\sqrt{K_a / C}$. That stays below 0.05 exactly when $K_a / C < 0.0025$, that is, when $C / K_a > 400$. For $0.10\\ \\text{M}$ acetic acid, $C / K_a \\approx 5600$: safe. For a fairly strong weak acid like HF at low concentration it fails, and then you solve the quadratic $x^2 + K_a x - K_a C = 0$ exactly. Five percent is a convention: it keeps the error in pH below about 0.01, smaller than the uncertainty in typical $K_a$ data.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Solving the quadratic in code',
          text: 'The positive root is $x = \\frac{-K_a + \\sqrt{K_a^2 + 4K_aC}}{2}$. When $K_a \\gg C$ (a very dilute or nearly strong acid) the numerator subtracts two almost equal floating-point numbers and loses digits: catastrophic cancellation. Multiply top and bottom by the conjugate to get the equivalent, stable form `x = 2*Ka*C / (Ka + sqrt(Ka*Ka + 4*Ka*C))`, which a simulation can evaluate safely over any range of concentrations.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Chlorine-treated water contains hypochlorous acid. What is the pH of a $0.050\\ \\text{M}$ solution of $\\ce{HOCl}$, $K_a = 2.9 \\times 10^{-8}$? Give the pH to two decimal places.',
      hint: 'ICE table: $\\frac{x^2}{0.050 - x} = 2.9 \\times 10^{-8}$. $K_a$ is tiny, so try $x \\ll 0.050$ and check it.',
      label: 'pH $=$',
      answer: '-log(sqrt(2.9*10^-8*0.050))',
      answerTex: '4.42',
      tolerance: 0.006,
      explanation: 'With $x \\ll 0.050$: $x^2 = (0.050)(2.9 \\times 10^{-8}) = 1.45 \\times 10^{-9}$, so $x = [\\ce{H3O+}] = 3.81 \\times 10^{-5}\\ \\text{M}$. Check: $3.81 \\times 10^{-5} / 0.050 = 0.076\\%$, far below 5%. Then pH $= -\\log(3.81 \\times 10^{-5}) = 4.42$. Only about 1 molecule in 1300 is ionized.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Percent ionization, and why dilution increases it',
      blocks: [
        {
          type: 'definition',
          term: 'Percent ionization',
          text: 'The [[gchem-percent-ionization|percent ionization]] of a weak acid is the fraction of its molecules that have donated a proton: $\\dfrac{[\\ce{H3O+}]_{\\text{eq}}}{[\\ce{HA}]_0} \\times 100\\%$, where $[\\ce{HA}]_0$ is the concentration you made up.',
        },
        {
          type: 'p',
          text: 'Here is a surprise. With the approximation, $x = \\sqrt{K_a C}$, so percent ionization $= 100\\sqrt{K_a / C}$. **The more dilute the acid, the larger the fraction ionized.** Dilute a hundredfold and the percent ionization rises tenfold. For acetic acid, exact quadratic solutions give 0.42% at $1.0\\ \\text{M}$, 1.33% at $0.10\\ \\text{M}$, 4.15% at $0.010\\ \\text{M}$ and 12.5% at $0.0010\\ \\text{M}$.',
        },
        {
          type: 'graph',
          x: [-5, 0],
          y: [0, 100],
          xStep: 1,
          yStep: 10,
          functions: [
            { expr: '100*(-10^(-p) + sqrt(10^(-2p) + 4*10^(-p)*10^x))/(2*10^x)', label: 'exact (quadratic)', color: 'blue' },
            { expr: '100*sqrt(10^(-p)/10^x)', label: 'approximation $100\\sqrt{K_a/C}$', color: 'orange', dashed: true },
          ],
          hlines: [{ y: 5, color: 'gray' }],
          sliders: [{ name: 'p', min: 2, max: 8, step: 0.005, value: 4.745, label: '$\\text{p}K_a$' }],
          readouts: [
            { label: '% ionized at $0.10$ M', expr: '100*(-10^(-p) + sqrt(10^(-2p) + 0.4*10^(-p)))/0.2', digits: 3 },
            { label: '% ionized at $0.0010$ M', expr: '100*(-10^(-p) + sqrt(10^(-2p) + 0.004*10^(-p)))/0.002', digits: 3 },
          ],
          caption: 'Horizontal axis: $\\log_{10}$ of the acid concentration $C$ (so $-1$ means $0.10\\ \\text{M}$, $-3$ means $0.0010\\ \\text{M}$). Moving left (diluting) raises the percent ionized. The dashed approximation tracks the exact curve while both are below about 5%, then overshoots (the gray line marks 5%), even past 100%, which is impossible. Lower the pKa (a stronger acid) and the curve rises at every concentration. (Below about $10^{-6}\\ \\text{M}$ the ionization of water itself also matters; this model ignores it.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why diluting pushes the equilibrium to the right',
          text: 'Take an equilibrium mixture and add water until every concentration is $\\frac{1}{10}$ as large. The [[gchem-reaction-quotient|reaction quotient]] becomes $Q = \\frac{(x/10)(x/10)}{(C - x)/10} = \\frac{1}{10}\\cdot\\frac{x^2}{C - x} = \\frac{K_a}{10}$. Now $Q < K_a$, so the reaction runs forward until $Q$ climbs back to $K_a$: more molecules ionize. The deeper reason is that the product side has **two** dissolved particles for each one on the reactant side, and dilution favors the side with more dissolved particles, just as lowering the pressure favors the side with more gas molecules ([[gchem-le-chatelier|Le Châtelier]]).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'More ionized does not mean more acidic',
          text: 'Diluting $0.10\\ \\text{M}$ acetic acid to $0.0010\\ \\text{M}$ raises the percent ionized from 1.3% to 12.5%, but $[\\ce{H3O+}]$ still falls, from $1.33 \\times 10^{-3}$ to $1.25 \\times 10^{-4}\\ \\text{M}$, and the pH rises from 2.88 to 3.90. A larger fraction of a much smaller amount is still less.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'What is the percent ionization of $0.0100\\ \\text{M}$ HF, $K_a = 3.5 \\times 10^{-4}$? Check the 5% rule; if it fails, solve the quadratic. Give three significant figures.',
      hint: 'The approximation gives $x = \\sqrt{(3.5 \\times 10^{-4})(0.0100)}$, which is more than 5% of 0.0100. Solve $x^2 + (3.5 \\times 10^{-4})x - 3.5 \\times 10^{-6} = 0$ with the quadratic formula.',
      label: 'percent ionization $=$',
      unit: '%',
      answer: '100*(-3.5*10^-4 + sqrt((3.5*10^-4)^2 + 4*3.5*10^-4*0.0100))/(2*0.0100)',
      answerTex: '17.0\\%',
      tolerance: 0.15,
      explanation: 'The approximation gives $x = 1.87 \\times 10^{-3}$, which is 18.7% of 0.0100: far above 5%, so it is not valid. Expanding $\\frac{x^2}{0.0100 - x} = 3.5 \\times 10^{-4}$ gives $x^2 + (3.5 \\times 10^{-4})x - 3.5 \\times 10^{-6} = 0$, and the [[quadratic-formula]] gives $x = \\frac{-3.5 \\times 10^{-4} + \\sqrt{(3.5 \\times 10^{-4})^2 + 1.4 \\times 10^{-5}}}{2} = 1.70 \\times 10^{-3}\\ \\text{M}$. Percent ionization $= \\frac{1.70 \\times 10^{-3}}{0.0100} \\times 100\\% = 17.0\\%$ (and pH $= 2.77$). The failed approximation overestimated it, as the dashed curve in the graph does.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'Diluting a weak acid solution increases its percent ionization, so the diluted solution has a lower pH than the original.',
      answer: false,
      explanation: 'The first half is true: dilution makes $Q < K_a$ and drives more ionization. But the second half is false. The fraction ionized grows only as $1/\\sqrt{C}$ while the amount of acid per liter falls as $C$, so $[\\ce{H3O+}] \\approx \\sqrt{K_a C}$ decreases and the pH **rises**. Diluting 100-fold raises the pH by about 1 unit for a weak acid (compared with 2 units for a strong acid).',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Weak bases and Kb',
      blocks: [
        {
          type: 'p',
          text: 'A weak base $\\ce{B}$ takes a proton **from** water, leaving hydroxide behind. Ammonia is the classic example: the lone pair on nitrogen accepts the proton. Amines, molecules in which one or more H atoms of ammonia are replaced by carbon groups (methylamine, $\\ce{CH3NH2}$; pyridine, $\\ce{C5H5N}$), behave the same way.',
        },
        {
          type: 'math',
          tex: '\\ce{B(aq) + H2O(l) <=> BH+(aq) + OH-(aq)} \\qquad K_b = \\frac{[\\ce{BH+}][\\ce{OH-}]}{[\\ce{B}]}',
          caption: 'The [[gchem-base-ionization-constant|base ionization constant]] $K_b$. As with $K_a$, water is left out, and $\\text{p}K_b = -\\log K_b$.',
        },
        {
          type: 'table',
          headers: ['Weak base', '$K_b$ (25 °C)', '$\\text{p}K_b$'],
          rows: [
            ['methylamine, $\\ce{CH3NH2}$', '$4.4 \\times 10^{-4}$', '3.36'],
            ['ammonia, $\\ce{NH3}$', '$1.8 \\times 10^{-5}$', '4.74'],
            ['pyridine, $\\ce{C5H5N}$', '$1.7 \\times 10^{-9}$', '8.77'],
          ],
        },
        {
          type: 'derivation',
          title: 'pH of 0.20 M ammonia ($K_b = 1.8 \\times 10^{-5}$)',
          steps: [
            { tex: '\\begin{array}{lccc} & [\\ce{NH3}] & [\\ce{NH4+}] & [\\ce{OH-}] \\\\ \\hline \\text{I} & 0.20 & 0 & \\approx 0 \\\\ \\text{C} & -x & +x & +x \\\\ \\text{E} & 0.20 - x & x & x \\end{array}', why: 'Same ICE pattern as for an acid, but the product that tells you the pH is now $\\ce{OH-}$.' },
            { tex: '\\frac{x^2}{0.20 - x} = 1.8 \\times 10^{-5} \\implies \\frac{x^2}{0.20} \\approx 1.8 \\times 10^{-5}', why: 'Substitute into $K_b$ and assume $x \\ll 0.20$.' },
            { tex: 'x = \\sqrt{3.6 \\times 10^{-6}} = 1.90 \\times 10^{-3}\\ \\text{M} = [\\ce{OH-}]', why: 'Check: $1.90 \\times 10^{-3} / 0.20 = 0.95\\%$, below 5%.' },
            { tex: '\\text{pOH} = -\\log(1.90 \\times 10^{-3}) = 2.72', why: 'Here $x$ is the hydroxide concentration, so its negative log is the pOH, not the pH.' },
            { tex: '\\text{pH} = 14.00 - 2.72 = 11.28', why: 'At 25 °C, $\\text{pH} + \\text{pOH} = 14.00$ (from $K_w = 1.0 \\times 10^{-14}$).' },
          ],
          result: 'pH $= 11.28$: clearly basic, but far less so than $0.20\\ \\text{M}$ NaOH (pH 13.30).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The classic weak-base slip',
          text: 'In a weak base problem, $x$ is $[\\ce{OH-}]$. Writing pH $= -\\log x = 2.72$ gives an acidic pH for a base, an answer that should set off alarms. Always finish with $\\text{pH} = 14.00 - \\text{pOH}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Pyridine, $\\ce{C5H5N}$, is a weak base with $K_b = 1.7 \\times 10^{-9}$. What is the pH of a $0.20\\ \\text{M}$ pyridine solution? Give two decimal places.',
      hint: 'Find $x = [\\ce{OH-}] \\approx \\sqrt{K_b C}$, then pOH, then pH $= 14.00 - $ pOH.',
      label: 'pH $=$',
      answer: '14 + log(sqrt(1.7*10^-9*0.20))',
      answerTex: '9.27',
      tolerance: 0.006,
      explanation: '$x^2 = (0.20)(1.7 \\times 10^{-9}) = 3.4 \\times 10^{-10}$, so $x = [\\ce{OH-}] = 1.84 \\times 10^{-5}\\ \\text{M}$ (0.009% of 0.20, so the approximation is excellent). pOH $= -\\log(1.84 \\times 10^{-5}) = 4.73$ and pH $= 14.00 - 4.73 = 9.27$. Pyridine is about 10 000 times weaker a base than ammonia, so its solution is much less basic.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Conjugate pairs: $K_a \\cdot K_b = K_w$',
      blocks: [
        {
          type: 'p',
          text: 'The conjugate base of a weak acid is itself a weak base. Acetate ion takes protons from water: $\\ce{CH3COO- + H2O <=> CH3COOH + OH-}$. Its $K_b$ is not independent of the acid\'s $K_a$. Add the two reactions:',
        },
        {
          type: 'derivation',
          title: 'Adding the acid and base reactions of one conjugate pair',
          steps: [
            { tex: '\\ce{HA + H2O <=> H3O+ + A-} \\qquad K_a', why: 'The acid ionization.' },
            { tex: '\\ce{A- + H2O <=> HA + OH-} \\qquad K_b', why: 'The base reaction of the conjugate base.' },
            { tex: '\\ce{2H2O <=> H3O+ + OH-} \\qquad K = K_a K_b', why: 'Adding reactions multiplies their equilibrium constants (Unit 8). $\\ce{HA}$ and $\\ce{A-}$ cancel from both sides.' },
            { tex: 'K_a K_b = K_w = 1.0 \\times 10^{-14}\\ \\ (25\\ ^\\circ\\text{C})', why: 'The sum is water\'s [[chem-water-autoionization|autoionization]], whose constant is $K_w$.' },
            { tex: '\\text{p}K_a + \\text{p}K_b = 14.00', why: 'Take $-\\log$ of both sides: the log of a product is a sum of logs.' },
          ],
          result: 'You can check it directly: $K_a K_b = \\frac{[\\ce{H3O+}][\\ce{A-}]}{[\\ce{HA}]} \\cdot \\frac{[\\ce{HA}][\\ce{OH-}]}{[\\ce{A-}]} = [\\ce{H3O+}][\\ce{OH-}]$.',
        },
        {
          type: 'p',
          text: 'So the conjugate base of acetic acid has $K_b = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$, and the conjugate acid of ammonia, $\\ce{NH4+}$, has $K_a = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$. Tables usually list only one of each pair, because the other follows.',
        },
        {
          type: 'table',
          headers: ['Acid', '$K_a$', 'Conjugate base', '$K_b = K_w / K_a$'],
          rows: [
            ['$\\ce{HCl}$ (strong)', '$\\gg 1$', '$\\ce{Cl-}$', 'negligible'],
            ['$\\ce{HF}$', '$3.5 \\times 10^{-4}$', '$\\ce{F-}$', '$2.9 \\times 10^{-11}$'],
            ['$\\ce{CH3COOH}$', '$1.8 \\times 10^{-5}$', '$\\ce{CH3COO-}$', '$5.6 \\times 10^{-10}$'],
            ['$\\ce{HOCl}$', '$2.9 \\times 10^{-8}$', '$\\ce{OCl-}$', '$3.4 \\times 10^{-7}$'],
            ['$\\ce{HCN}$', '$4.9 \\times 10^{-10}$', '$\\ce{CN-}$', '$2.0 \\times 10^{-5}$'],
          ],
          caption: 'Read down the columns: as the acids get weaker, their conjugate bases get stronger. Cyanide is about as strong a base as ammonia.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A tug of war for one proton',
          text: 'An acid that lets go of its proton easily is paired with a base that has little grip on it, and vice versa. The product of the two "grips" is fixed by water at $10^{-14}$. That is why the conjugate base of a strong acid ($\\ce{Cl-}$, $\\ce{NO3-}$) is too weak to make a solution basic at all.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Complete the statements about a conjugate acid–base pair at 25 °C.',
      template: 'The stronger the acid, the ___ its conjugate base. For any conjugate pair, $\\text{p}K_a + \\text{p}K_b =$ ___.',
      blanks: [{ answers: ['weaker'] }, { answers: ['14.00'] }],
      wordBank: ['weaker', 'stronger', '14.00', '7.00', '1.00'],
      explanation: 'From $K_a K_b = K_w$: if $K_a$ goes up, $K_b = K_w / K_a$ must go down, so a stronger acid has a weaker conjugate base. Taking $-\\log$ of $K_a K_b = 1.0 \\times 10^{-14}$ gives $\\text{p}K_a + \\text{p}K_b = 14.00$. For example acetic acid (pKa 4.74) has a conjugate base with pKb 9.26.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Why some acids are stronger: binary acids',
      blocks: [
        {
          type: 'p',
          text: 'Why is HF weak while HCl is strong? Why is acetic acid a far better acid than ethanol, even though both have an O–H? Acid strength is about how easily $\\ce{H-X}$ gives up $\\ce{H+}$, and two factors dominate: **how strong the H–X bond is** and **how stable the conjugate base $\\ce{X-}$ is**.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg"><text x="190" y="20" text-anchor="middle" font-size="13" class="t-gray">Across period 2: electronegativity wins</text><g font-size="16" text-anchor="middle"><rect x="22" y="34" width="76" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="62">CH₄</text><rect x="117" y="34" width="76" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="155" y="62">NH₃</text><rect x="212" y="34" width="76" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="250" y="62">H₂O</text><rect x="307" y="34" width="76" height="44" rx="8" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.2"/><text x="345" y="62">HF</text><rect x="307" y="128" width="76" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="345" y="156">HCl</text><rect x="307" y="186" width="76" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="345" y="214">HBr</text><rect x="307" y="244" width="76" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="345" y="272">HI</text></g><g font-size="12" text-anchor="middle" class="t-gray"><text x="60" y="94">EN(C) 2.5</text><text x="155" y="94">EN(N) 3.0</text><text x="250" y="94">EN(O) 3.5</text><text x="345" y="94">EN(F) 4.0</text></g><line x1="30" y1="110" x2="290" y2="110" stroke="currentColor" class="s-orange" stroke-width="2.4"/><polyline points="281,104 291,110 281,116" fill="none" stroke="currentColor" class="s-orange" stroke-width="2.4"/><text x="160" y="128" text-anchor="middle" font-size="13" class="t-orange">acid strength increases →</text><text x="160" y="146" text-anchor="middle" font-size="12" class="t-gray">more polar H–X bond, more stable X⁻</text><g font-size="12" text-anchor="start"><text x="392" y="61">565 kJ/mol</text><text x="392" y="155">431 kJ/mol</text><text x="392" y="213">366 kJ/mol</text><text x="392" y="271">299 kJ/mol</text></g><text x="440" y="24" text-anchor="middle" font-size="12" class="t-gray">H–X bond</text><text x="440" y="38" text-anchor="middle" font-size="12" class="t-gray">enthalpy</text><line x1="290" y1="130" x2="290" y2="282" stroke="currentColor" class="s-purple" stroke-width="2.4"/><polyline points="284,273 290,283 296,273" fill="none" stroke="currentColor" class="s-purple" stroke-width="2.4"/><text x="200" y="196" text-anchor="middle" font-size="13" class="t-purple">acid strength</text><text x="200" y="213" text-anchor="middle" font-size="13" class="t-purple">increases ↓</text><text x="200" y="232" text-anchor="middle" font-size="12" class="t-gray">weaker, longer H–X bond</text><text x="200" y="248" text-anchor="middle" font-size="12" class="t-gray">(down group 17)</text></svg>`,
          alt: 'Row of period-2 hydrides CH4, NH3, H2O, HF with electronegativities 2.5, 3.0, 3.5, 4.0 and an arrow showing acid strength increasing to the right. Column of hydrogen halides HF, HCl, HBr, HI with bond enthalpies 565, 431, 366 and 299 kilojoules per mole and an arrow showing acid strength increasing downward.',
          caption: 'Two trends for binary acids $\\ce{H_nX}$. **Across a period** the atoms are similar in size, so [[electronegativity]] decides: a more electronegative X pulls the bonding electrons away from H and holds the negative charge of $\\ce{X-}$ more comfortably. **Down a group** X gets much larger and the H–X bond much weaker, and bond strength wins.',
        },
        {
          type: 'p',
          text: 'Across period 2, $\\ce{CH4}$ is not acidic at all, $\\ce{NH3}$ is only a fantastically weak acid, water is amphoteric, and HF is a weak acid with $K_a = 3.5 \\times 10^{-4}$. Down group 17, the bond enthalpy drops from 565 to 299 kJ/mol and HCl, HBr and HI are all strong. The same happens in group 16: $\\ce{H2O} < \\ce{H2S} < \\ce{H2Se} < \\ce{H2Te}$ in acid strength.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bond strength beats electronegativity down a group',
          text: 'F is more electronegative than I, which by itself would make HF the stronger acid. But the H–F bond is short and very strong (the small F 2p orbital overlaps well with H 1s), and the large $\\ce{I-}$ ion spreads its charge over a much bigger volume, which water stabilizes easily. Breaking 565 kJ/mol versus 299 kJ/mol is an enormous difference, and it outweighs the polarity effect. Across a period the bond strengths are more alike, so polarity takes over.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Which of these group 16 hydrides is the **strongest** acid in water?',
      options: [
        { text: '$\\ce{H2O}$', why: 'Oxygen is the most electronegative, but down a group bond strength dominates. The O–H bond is the strongest of the four, so water is the weakest acid here.' },
        { text: '$\\ce{H2S}$', why: '$\\ce{H2S}$ ($K_{a1} \\approx 10^{-7}$) is more acidic than water, but the heavier hydrides below it have still weaker bonds.' },
        { text: '$\\ce{H2Se}$', why: 'Stronger than $\\ce{H2S}$, but not the strongest: tellurium is larger still.' },
        { text: '$\\ce{H2Te}$', correct: true, why: 'Te is the largest atom, so the H–Te bond is the longest and weakest, and the charge of $\\ce{HTe-}$ is spread over the largest volume.' },
      ],
      explanation: 'Down a group, the H–X bond weakens as X gets larger, and that effect outweighs the drop in electronegativity. So acid strength increases $\\ce{H2O} < \\ce{H2S} < \\ce{H2Se} < \\ce{H2Te}$, exactly parallel to $\\ce{HF} < \\ce{HCl} < \\ce{HBr} < \\ce{HI}$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Oxyacids and resonance: stabilizing the conjugate base',
      blocks: [
        {
          type: 'p',
          text: 'In an [[gchem-oxyacid|oxyacid]] the acidic H is bonded to an O, which is bonded to a central atom Y: $\\ce{H-O-Y}$. The O–H bonds are all similar, so what differs is how well the rest of the molecule pulls electron density away from that O–H and spreads out the negative charge left behind. Two rules follow.',
        },
        {
          type: 'table',
          headers: ['Same number of O, different Y', '$K_a$', 'Same Y, more O', '$K_a$'],
          rows: [
            ['$\\ce{HOCl}$ (EN of Cl 3.2)', '$2.9 \\times 10^{-8}$', '$\\ce{HOCl}$', '$2.9 \\times 10^{-8}$'],
            ['$\\ce{HOBr}$ (EN of Br 3.0)', '$2.8 \\times 10^{-9}$', '$\\ce{HClO2}$', '$1.1 \\times 10^{-2}$'],
            ['$\\ce{HOI}$ (EN of I 2.7)', '$2.3 \\times 10^{-11}$', '$\\ce{HClO3}$', '$\\approx 1$ (nearly strong)'],
            ['—', '—', '$\\ce{HClO4}$', 'strong'],
          ],
          caption: 'Left: a more electronegative central atom makes a stronger oxyacid. Right: each extra oxygen on the central atom makes the acid stronger, by a large factor.',
        },
        {
          type: 'p',
          text: 'Extra oxygens help in two ways. They are electronegative, so they withdraw electron density through the bonds (an **inductive effect**). More importantly, they let the conjugate base spread its negative charge by [[chem-resonance|resonance]]: in $\\ce{ClO4-}$ the charge is shared by four equivalent oxygens, in $\\ce{OCl-}$ it sits on one. A conjugate base with its charge spread out is more stable, and a more stable conjugate base means a stronger acid.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg"><text x="250" y="18" text-anchor="middle" font-size="13" class="t-gray">acetate ion, CH₃COO⁻: two resonance structures and their hybrid</text><text x="28" y="96" text-anchor="middle" font-size="16">H₃C</text><text x="86" y="96" text-anchor="middle" font-size="16">C</text><text x="122" y="52" text-anchor="middle" font-size="16">O</text><text x="122" y="140" text-anchor="middle" font-size="16">O</text><line x1="50" y1="91" x2="76" y2="91" stroke="currentColor" stroke-width="1.8"/><line x1="91" y1="80" x2="113" y2="57" stroke="currentColor" stroke-width="1.8"/><line x1="97" y1="85" x2="118" y2="62" stroke="currentColor" stroke-width="1.8"/><line x1="91" y1="101" x2="113" y2="125" stroke="currentColor" stroke-width="1.8"/><text x="136" y="132" text-anchor="middle" font-size="14" class="t-red">−</text><text x="160" y="96" text-anchor="middle" font-size="20">↔</text><text x="196" y="96" text-anchor="middle" font-size="16">H₃C</text><text x="254" y="96" text-anchor="middle" font-size="16">C</text><text x="290" y="52" text-anchor="middle" font-size="16">O</text><text x="290" y="140" text-anchor="middle" font-size="16">O</text><line x1="218" y1="91" x2="244" y2="91" stroke="currentColor" stroke-width="1.8"/><line x1="259" y1="80" x2="281" y2="57" stroke="currentColor" stroke-width="1.8"/><line x1="259" y1="101" x2="281" y2="125" stroke="currentColor" stroke-width="1.8"/><line x1="265" y1="96" x2="286" y2="120" stroke="currentColor" stroke-width="1.8"/><text x="304" y="44" text-anchor="middle" font-size="14" class="t-red">−</text><text x="322" y="96" text-anchor="middle" font-size="20">=</text><text x="352" y="96" text-anchor="middle" font-size="16">H₃C</text><text x="410" y="96" text-anchor="middle" font-size="16">C</text><text x="446" y="52" text-anchor="middle" font-size="16">O</text><text x="446" y="140" text-anchor="middle" font-size="16">O</text><line x1="374" y1="91" x2="400" y2="91" stroke="currentColor" stroke-width="1.8"/><line x1="415" y1="80" x2="437" y2="57" stroke="currentColor" stroke-width="1.8"/><line x1="421" y1="85" x2="442" y2="62" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 3"/><line x1="415" y1="101" x2="437" y2="125" stroke="currentColor" stroke-width="1.8"/><line x1="421" y1="96" x2="442" y2="120" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 3"/><text x="460" y="34" text-anchor="middle" font-size="12" class="t-red">−½</text><text x="460" y="158" text-anchor="middle" font-size="12" class="t-red">−½</text><text x="410" y="182" text-anchor="middle" font-size="12" class="t-gray">hybrid: each C–O is 1½ bonds</text><line x1="20" y1="196" x2="480" y2="196" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="4 4"/><text x="125" y="222" text-anchor="middle" font-size="13">acetic acid: charge spread over 2 O</text><text x="125" y="246" text-anchor="middle" font-size="14" class="t-blue">pKₐ ≈ 4.7</text><text x="330" y="236" text-anchor="middle" font-size="16">CH₃CH₂</text><text x="400" y="236" text-anchor="middle" font-size="16">O</text><text x="413" y="228" text-anchor="middle" font-size="14" class="t-red">−</text><line x1="363" y1="231" x2="389" y2="231" stroke="currentColor" stroke-width="1.8"/><text x="370" y="262" text-anchor="middle" font-size="13">ethoxide: charge on one O; ethanol pKₐ ≈ 16</text></svg>`,
          alt: 'Two resonance structures of the acetate ion, each with one C=O double bond and one C–O single bond carrying a negative charge, and the resonance hybrid with two equivalent partial double bonds and a charge of minus one half on each oxygen. Below, the ethoxide ion with its charge on a single oxygen. Acetic acid has pKa about 4.7, ethanol about 16.',
          caption: 'The same idea explains why carboxylic acids are acids at all. Acetate spreads its charge over two oxygens; ethoxide cannot. That one difference is worth about 11 pKa units: a factor of roughly $10^{11}$ in $K_a$.',
        },
        {
          type: 'p',
          text: 'Inductive effects also work through a carbon chain. Replacing the H atoms of acetic acid\'s $\\ce{CH3}$ group with electronegative Cl atoms pulls charge away from the carboxylate and stabilizes it: the pKa falls from 4.74 (acetic) to about 2.9 (chloroacetic), 1.3 (dichloroacetic) and 0.7 (trichloroacetic).',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'How strength questions are graded',
          text: 'For "which acid is stronger and why", name the factor that differs: bond strength (going down a group), electronegativity (across a period, or of the central atom in an oxyacid), the number of oxygens, or resonance/inductive stabilization of the conjugate base. Then connect it to the stability of $\\ce{A-}$ or the ease of breaking H–A. A list of factors without saying which one applies earns little credit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Arrange these oxyacids from **weakest** (top) to **strongest** (bottom).',
      hint: 'First compare the central atoms (Cl > Br > I in electronegativity), then the number of oxygens on chlorine.',
      lines: ['$\\ce{HOI}$', '$\\ce{HOBr}$', '$\\ce{HOCl}$', '$\\ce{HClO2}$', '$\\ce{HClO4}$'],
      explanation: 'The three hypohalous acids $\\ce{HOX}$ have one O each, so the central atom\'s electronegativity decides: I (2.7) < Br (3.0) < Cl (3.2), giving $K_a$ values $2.3 \\times 10^{-11} < 2.8 \\times 10^{-9} < 2.9 \\times 10^{-8}$. Then, with Cl fixed, adding oxygens strengthens the acid enormously: $\\ce{HClO2}$ ($1.1 \\times 10^{-2}$) and finally $\\ce{HClO4}$, one of the strongest acids known, whose conjugate base spreads its charge over four oxygens.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'A student calculates the pH of $0.10\\ \\text{M}$ hydrocyanic acid, $K_a = 4.9 \\times 10^{-10}$. Tap the first line that is wrong.',
      lines: [
        'ICE table and $K_a$: $\\frac{x^2}{0.10 - x} = 4.9 \\times 10^{-10}$',
        '$K_a$ is tiny, so $x \\ll 0.10$: $\\frac{x^2}{0.10} = 4.9 \\times 10^{-10}$',
        '$x^2 = 4.9 \\times 10^{-11}$',
        '$x = [\\ce{H3O+}] = 4.9 \\times 10^{-11}\\ \\text{M}$',
        'pH $= -\\log(4.9 \\times 10^{-11}) = 10.31$',
      ],
      errorLines: [4],
      explanation: 'Line 4 forgets the square root: $x = \\sqrt{4.9 \\times 10^{-11}} = 7.0 \\times 10^{-6}\\ \\text{M}$. Then pH $= -\\log(7.0 \\times 10^{-6}) = 5.15$ (and the 5% check is easily passed: 0.007%). The wrong answer, pH 10.31, is basic, which is impossible for a solution of an acid in water. Always sanity-check: a weak acid gives a pH between that of the strong acid at the same concentration (here 1.00) and 7.',
    },
  ],
  takeaways: [
    '$K_a = \\frac{[\\ce{H3O+}][\\ce{A-}]}{[\\ce{HA}]}$ and $K_b = \\frac{[\\ce{BH+}][\\ce{OH-}]}{[\\ce{B}]}$; $\\text{p}K_a = -\\log K_a$, and a smaller pKa means a stronger acid.',
    'For a weak acid, the ICE table gives $\\frac{x^2}{C - x} = K_a$; if $x / C < 5\\%$ (roughly $C / K_a > 400$) use $x \\approx \\sqrt{K_a C}$, otherwise solve the quadratic.',
    'For a weak base, $x$ is $[\\ce{OH-}]$: find pOH, then pH $= 14.00 - $ pOH.',
    'Percent ionization $\\approx 100\\sqrt{K_a / C}$ rises on dilution because dilution makes $Q < K_a$; the pH still rises.',
    '$K_a K_b = K_w$ and $\\text{p}K_a + \\text{p}K_b = 14.00$ for a conjugate pair: the stronger the acid, the weaker its conjugate base.',
    'Binary acids: electronegativity rules across a period, bond strength down a group. Oxyacids: a more electronegative central atom and more oxygens make a stronger acid. Resonance and inductive stabilization of $\\ce{A-}$ make carboxylic acids acidic.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 14: Acid-Base Equilibria',
      url: 'https://openstax.org/books/chemistry-2e/pages/14-introduction',
      source: 'openstax',
      note: 'Sections 14.3 and 14.4 cover Ka, Kb, percent ionization, ICE-table pH calculations and the effect of molecular structure on acid strength.',
    },
    {
      title: 'Wikipedia — Acid dissociation constant',
      url: 'https://en.wikipedia.org/wiki/Acid_dissociation_constant',
      source: 'wikipedia',
      note: 'A thorough treatment of Ka and pKa, including the structural factors that set acid strength and a long table of values.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "weak acids and bases" for more worked ICE-table problems with the 5% check.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The acids and bases unit has short videos on weak acid and weak base equilibria and on Ka·Kb = Kw.',
    },
  ],
};
