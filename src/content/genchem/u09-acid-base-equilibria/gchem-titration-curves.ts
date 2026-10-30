import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-titration-curves',
  title: 'Titration Curves and Indicators',
  summary: 'Follow the pH through a titration: strong acid with strong base, weak acid with strong base (buffer region, pH = pKa at half-equivalence, basic equivalence point), weak base with strong acid and polyprotic acids, then choose an indicator that changes color at the right moment.',
  minutes: 22,
  objectives: [
    'Calculate the pH at any point of a strong acid–strong base titration',
    'Calculate the pH in each region of a weak acid–strong base titration: initial, buffer region, half-equivalence, equivalence and excess base',
    'Explain why pH $=$ pKa at the half-equivalence point and why the equivalence point of a weak acid is basic (and of a weak base acidic)',
    'Predict how pKa and concentration change the shape of a titration curve, and interpret the two equivalence points of a polyprotic acid',
    'Explain how an acid–base indicator works and choose one whose color change matches the equivalence-point pH',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The strong acid–strong base curve',
      blocks: [
        {
          type: 'p',
          text: 'In Unit 3 you used [[chem-titration|titrations]] to find unknown concentrations: add base from a buret until the [[gchem-equivalence-point|equivalence point]], where the moles of base added exactly match the moles of acid present. Now follow the **pH** the whole way. A plot of pH against volume of titrant is a [[gchem-titration-curve|titration curve]], and its shape tells you what kind of acid you are titrating.',
        },
        {
          type: 'p',
          text: 'Start with 25.00 mL of $0.100\\ \\text{M}$ HCl (2.500 mmol) titrated with $0.100\\ \\text{M}$ NaOH. Every added $\\ce{OH-}$ neutralizes an $\\ce{H3O+}$ completely, so each point is a pure stoichiometry problem: whatever is left over, strong acid or strong base, sets the pH. Remember to divide by the **total** volume.',
        },
        {
          type: 'derivation',
          title: 'Two points on the curve',
          steps: [
            { tex: '10.00\\ \\text{mL NaOH: } 1.000\\ \\text{mmol}\\ \\ce{OH-} \\text{ reacts with } 1.000\\ \\text{mmol}\\ \\ce{H3O+}', why: '$0.100\\ \\text{mmol/mL} \\times 10.00\\ \\text{mL} = 1.000$ mmol. Strong acid + strong base goes to completion.' },
            { tex: '[\\ce{H3O+}] = \\frac{2.500 - 1.000\\ \\text{mmol}}{25.00 + 10.00\\ \\text{mL}} = 0.0429\\ \\text{M} \\implies \\text{pH} = 1.37', why: 'Leftover acid divided by the total volume. Millimoles per milliliter equals moles per liter.' },
            { tex: '26.00\\ \\text{mL NaOH: } 2.600 - 2.500 = 0.100\\ \\text{mmol}\\ \\ce{OH-} \\text{ in excess}', why: 'Past equivalence, all the acid is gone and the extra base remains.' },
            { tex: '[\\ce{OH-}] = \\frac{0.100\\ \\text{mmol}}{51.00\\ \\text{mL}} = 1.96 \\times 10^{-3}\\ \\text{M} \\implies \\text{pOH} = 2.71,\\ \\text{pH} = 11.29', why: 'Excess hydroxide over total volume, then $\\text{pH} = 14.00 - \\text{pOH}$.' },
          ],
        },
        {
          type: 'table',
          headers: ['NaOH added (mL)', '0', '10.00', '20.00', '24.90', '25.00', '25.10', '26.00', '35.00'],
          rows: [['pH', '1.00', '1.37', '1.95', '3.70', '7.00', '10.30', '11.29', '12.22']],
          caption: 'At the equivalence point the solution is just NaCl in water: pH 7.00.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 14],
          xStep: 5,
          yStep: 2,
          parametric: [
            { x: '25*(0.1 - 10^(-t) + 10^(t - 14))/(0.1 + 10^(-t) - 10^(t - 14))', y: 't', t: [0.9, 12.9], label: '25.00 mL of 0.100 M HCl', color: 'red' },
          ],
          points: [
            { x: 10, y: 1.37, label: '(10.00, 1.37)' },
            { x: 25, y: 7, label: 'equivalence (25.00, 7.00)' },
            { x: 26, y: 11.29 },
          ],
          vlines: [{ x: 25, color: 'gray' }],
          caption: 'Horizontal axis: mL of $0.100\\ \\text{M}$ NaOH added. The pH creeps up for 24 mL, then shoots from about 3.7 to 10.3 between 24.90 and 25.10 mL (four drops), then levels off as excess base accumulates.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the jump is so steep',
          text: 'pH is a logarithm. At 24.90 mL, 0.010 mmol of acid is left, $[\\ce{H3O+}] = 2.0 \\times 10^{-4}\\ \\text{M}$. At 25.10 mL, 0.010 mmol of base is in excess, $[\\ce{H3O+}] = 5.0 \\times 10^{-11}\\ \\text{M}$. Just 0.20 mL changes $[\\ce{H3O+}]$ by a factor of about four million, which is 6.6 pH units. Far from equivalence, the same 0.20 mL changes the leftover acid by only a few percent, a tiny step on a log scale. That steep cliff is what makes a sharp [[gchem-end-point|end point]] possible.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'In the titration of 25.00 mL of $0.100\\ \\text{M}$ HCl with $0.100\\ \\text{M}$ NaOH, what is the pH after 20.00 mL of NaOH has been added? Give two decimal places.',
      hint: 'Leftover $\\ce{H3O+}$: $2.500 - 2.000$ mmol, in a total of $25.00 + 20.00$ mL.',
      label: 'pH $=$',
      answer: '-log((2.500 - 2.000)/45.00)',
      answerTex: '1.95',
      tolerance: 0.006,
      explanation: 'The base added is $20.00 \\times 0.100 = 2.000$ mmol, which neutralizes 2.000 of the 2.500 mmol of acid. The remaining 0.500 mmol of $\\ce{H3O+}$ is in 45.00 mL: $[\\ce{H3O+}] = 0.0111\\ \\text{M}$, pH $= 1.95$. Forgetting the added volume (dividing by 25.00 mL) would give 1.70.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Weak acid–strong base: the start and the buffer region',
      blocks: [
        {
          type: 'p',
          text: 'Now titrate 25.00 mL of $0.100\\ \\text{M}$ acetic acid ($K_a = 1.8 \\times 10^{-5}$, pKa 4.74) with $0.100\\ \\text{M}$ NaOH. The equivalence volume is again 25.00 mL, but the curve has four distinct regions, and each uses a tool from earlier in this unit.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Initial (0 mL)', text: 'Just a weak acid: ICE table with $K_a$.' },
            { title: 'Buffer region (between 0 and 25 mL)', text: 'Stoichiometry turns some HA into $\\ce{A-}$; then Henderson–Hasselbalch.' },
            { title: 'Equivalence (25.00 mL)', text: 'All HA has become $\\ce{A-}$: a weak base problem with $K_b = K_w / K_a$.' },
            { title: 'Past equivalence', text: 'Excess $\\ce{OH-}$ from the strong base sets the pH.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Initial pH and the buffer region',
          steps: [
            { tex: '0\\ \\text{mL: } [\\ce{H3O+}] \\approx \\sqrt{(1.8 \\times 10^{-5})(0.100)} = 1.34 \\times 10^{-3}\\ \\text{M} \\implies \\text{pH} = 2.87', why: 'Weak acid alone, exactly as in the first lesson of this unit. Much higher than the 1.00 of HCl at the same concentration.' },
            { tex: '10.00\\ \\text{mL: } \\ce{HA + OH- -> A- + H2O}, \\quad 2.500 - 1.000 = 1.500\\ \\text{mmol HA},\\ \\ 1.000\\ \\text{mmol}\\ \\ce{A-}', why: 'Stoichiometry step: 1.000 mmol of $\\ce{OH-}$ converts 1.000 mmol of acid into acetate.' },
            { tex: '\\text{pH} = 4.74 + \\log\\frac{1.000}{1.500} = 4.57', why: 'The flask now holds a buffer. Use the mole ratio; the total volume cancels.' },
            { tex: '12.50\\ \\text{mL: } 1.250\\ \\text{mmol HA},\\ \\ 1.250\\ \\text{mmol}\\ \\ce{A-} \\implies \\text{pH} = 4.74 + \\log 1 = 4.74', why: 'Halfway to equivalence, half the acid has been converted: the ratio is exactly 1.' },
          ],
        },
        {
          type: 'definition',
          term: 'Half-equivalence point',
          text: 'At the [[gchem-half-equivalence-point|half-equivalence point]] (half the equivalence volume), $[\\ce{HA}] = [\\ce{A-}]$, so **pH $=$ pKa**. Reading the pH there is the standard way to measure the pKa of an unknown weak acid.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'The buffer region is the flattest part of the curve, centered on the half-equivalence point, and it spans roughly pKa ± 1, exactly the buffer range from the previous lesson. A titration curve is a buffer being made and then used up.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'An unknown monoprotic weak acid is titrated with NaOH. The equivalence point is reached at 30.0 mL, and after 15.0 mL had been added the pH was 4.20. What is $K_a$ of the acid?',
      options: [
        { text: '$6.3 \\times 10^{-5}$', correct: true, why: '15.0 mL is half of 30.0 mL, so this is the half-equivalence point and pKa $=$ pH $= 4.20$. $K_a = 10^{-4.20} = 6.3 \\times 10^{-5}$ (benzoic acid has this value).' },
        { text: '$4.20$', why: '4.20 is the pKa, not $K_a$. Convert with $K_a = 10^{-\\text{p}K_a}$.' },
        { text: '$1.6 \\times 10^{-10}$', why: 'That is $10^{-9.80}$, the $K_b$ of the conjugate base ($K_w / K_a$), not the $K_a$ of the acid.' },
        { text: 'It cannot be found without the acid\'s concentration', why: 'At half-equivalence the amounts of HA and $\\ce{A-}$ are equal whatever the concentration, so pH $=$ pKa directly.' },
      ],
      explanation: 'At half the equivalence volume, half of the acid has been converted to its conjugate base, $[\\ce{HA}] = [\\ce{A-}]$, and Henderson–Hasselbalch gives pH $=$ pKa. So pKa $= 4.20$ and $K_a = 10^{-4.20} = 6.3 \\times 10^{-5}$. No concentration or volume data needed beyond identifying the half-equivalence point.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Weak acid–strong base: equivalence and beyond',
      blocks: [
        {
          type: 'p',
          text: 'At 25.00 mL all 2.500 mmol of acetic acid has become acetate, in a total of 50.00 mL. The flask holds nothing but sodium acetate solution, and you already know from the salts lesson that it is **basic**.',
        },
        {
          type: 'derivation',
          title: 'Equivalence point (25.00 mL) and excess base (30.00 mL)',
          steps: [
            { tex: '[\\ce{A-}] = \\frac{2.500\\ \\text{mmol}}{50.00\\ \\text{mL}} = 0.0500\\ \\text{M}', why: 'All the acid is now acetate. Use the **total** volume: 25.00 mL of acid plus 25.00 mL of base.' },
            { tex: 'K_b = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}', why: 'Acetate is the conjugate base of acetic acid.' },
            { tex: '[\\ce{OH-}] = \\sqrt{(5.6 \\times 10^{-10})(0.0500)} = 5.3 \\times 10^{-6}\\ \\text{M} \\implies \\text{pOH} = 5.28', why: 'Weak base ICE table with the small-$x$ approximation.' },
            { tex: '\\text{pH} = 14.00 - 5.28 = 8.72', why: 'The equivalence point of a weak acid titrated with a strong base is always above 7.' },
            { tex: '30.00\\ \\text{mL: } [\\ce{OH-}] = \\frac{3.000 - 2.500\\ \\text{mmol}}{55.00\\ \\text{mL}} = 9.09 \\times 10^{-3}\\ \\text{M} \\implies \\text{pH} = 11.96', why: 'Past equivalence, the excess strong base swamps the tiny amount of $\\ce{OH-}$ that acetate makes, so only the excess counts. This is the same pH as in the HCl titration at 30 mL.' },
          ],
        },
        {
          type: 'table',
          headers: ['NaOH (mL)', 'Region', 'Method', 'pH'],
          rows: [
            ['0', 'initial', 'weak acid, $K_a$', '2.87'],
            ['10.00', 'buffer', 'Henderson–Hasselbalch', '4.57'],
            ['12.50', 'half-equivalence', 'pH $=$ pKa', '4.74'],
            ['25.00', 'equivalence', 'weak base $\\ce{A-}$, $K_b$', '8.72'],
            ['30.00', 'excess base', 'excess $\\ce{OH-}$', '11.96'],
          ],
          caption: 'The fully worked titration of 25.00 mL of $0.100\\ \\text{M}$ acetic acid with $0.100\\ \\text{M}$ NaOH. A full numerical solution of the equilibria agrees with every entry to within 0.01.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "neutralized" does not mean "neutral"',
          text: 'The equivalence point means equal moles of acid and base have reacted, a statement about **stoichiometry**. The pH there depends on what is left in the flask. For HCl + NaOH it is NaCl (neutral ions, pH 7). For acetic acid + NaOH it is sodium acetate, and acetate is a weak base. For a weak base titrated with a strong acid, the product is a weak acid and the equivalence point is below 7.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: '20.00 mL of $0.150\\ \\text{M}$ benzoic acid ($K_a = 6.3 \\times 10^{-5}$) is titrated with $0.150\\ \\text{M}$ NaOH. What is the pH at the equivalence point? Give two decimal places.',
      hint: 'Equivalence at 20.00 mL of NaOH. Benzoate: 3.000 mmol in 40.00 mL total. Then $K_b = K_w / K_a$ and a weak-base ICE table.',
      label: 'pH $=$',
      answer: '14 + log(sqrt(1.0*10^-14/(6.3*10^-5)*3.000/40.00))',
      answerTex: '8.54',
      tolerance: 0.006,
      explanation: 'Moles of acid $= 20.00 \\times 0.150 = 3.000$ mmol, so 20.00 mL of base reaches equivalence and the total volume is 40.00 mL: $[\\ce{C6H5COO-}] = 0.0750\\ \\text{M}$. $K_b = 1.0 \\times 10^{-14} / 6.3 \\times 10^{-5} = 1.59 \\times 10^{-10}$, $[\\ce{OH-}] = \\sqrt{(1.59 \\times 10^{-10})(0.0750)} = 3.45 \\times 10^{-6}\\ \\text{M}$, pOH $= 5.46$, pH $= 8.54$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student calculates the equivalence-point pH for 25.00 mL of $0.100\\ \\text{M}$ HF ($K_a = 3.5 \\times 10^{-4}$) titrated with $0.100\\ \\text{M}$ NaOH. Tap the first line that is wrong.',
      lines: [
        'Moles HF $= 25.00\\ \\text{mL} \\times 0.100\\ \\text{M} = 2.500$ mmol, so 25.00 mL of NaOH is needed',
        'At equivalence, $[\\ce{F-}] = \\frac{2.500\\ \\text{mmol}}{25.00\\ \\text{mL}} = 0.100\\ \\text{M}$',
        '$K_b = \\frac{1.0 \\times 10^{-14}}{3.5 \\times 10^{-4}} = 2.9 \\times 10^{-11}$',
        '$[\\ce{OH-}] = \\sqrt{(2.9 \\times 10^{-11})(0.100)} = 1.7 \\times 10^{-6}\\ \\text{M}$, pOH $= 5.77$',
        'pH $= 14.00 - 5.77 = 8.23$',
      ],
      errorLines: [2],
      explanation: 'Line 2 ignores the volume of base added. At equivalence the solution volume is $25.00 + 25.00 = 50.00$ mL, so $[\\ce{F-}] = 0.0500\\ \\text{M}$. Then $[\\ce{OH-}] = \\sqrt{(2.86 \\times 10^{-11})(0.0500)} = 1.20 \\times 10^{-6}\\ \\text{M}$, pOH $= 5.92$ and pH $= 8.08$. Diluting the conjugate base lowers the equivalence pH a little, so forgetting the dilution always overestimates it.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Explore: how pKa and concentration shape the curve',
      blocks: [
        {
          type: 'p',
          text: 'The graph below is an exact titration curve for 25.00 mL of a weak acid HA (concentration $c$) titrated with NaOH of the same concentration, together with the strong acid HCl at the same concentration for comparison. Move the sliders and watch three things: where the curve starts, where the half-equivalence point sits, and how tall the jump at 25 mL is.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 14],
          xStep: 5,
          yStep: 2,
          parametric: [
            { x: '25*(c*10^(-p)/(10^(-p) + 10^(-t)) - 10^(-t) + 10^(t - 14))/(c + 10^(-t) - 10^(t - 14))', y: 't', t: [0.2, '13.95 + log(c)'], label: 'weak acid, pKa $= p$', color: 'blue' },
            { x: '25*(c - 10^(-t) + 10^(t - 14))/(c + 10^(-t) - 10^(t - 14))', y: 't', t: [0.2, '13.95 + log(c)'], label: 'strong acid (HCl)', color: 'gray', dashed: true },
          ],
          points: [{ x: 12.5, y: 'p', label: 'half-equivalence: pH = pKa', color: 'blue' }],
          vlines: [{ x: 25, label: 'equivalence', color: 'gray' }],
          sliders: [
            { name: 'p', min: 2, max: 10, step: 0.01, value: 4.74, label: '$\\text{p}K_a$ of the weak acid' },
            { name: 'c', min: 0.001, max: 0.5, step: 0.001, value: 0.1, label: 'concentration $c$ of acid and base (M)' },
          ],
          readouts: [
            { label: 'initial pH $\\approx \\frac{1}{2}(\\text{p}K_a - \\log c) =$', expr: '(p - log(c))/2', digits: 2 },
            { label: 'equivalence pH $\\approx$', expr: '7 + p/2 + log(c/2)/2', digits: 2 },
          ],
          caption: 'Horizontal axis: mL of NaOH added; vertical axis: pH. Raise the pKa (weaker acid): the start and the buffer region rise, the equivalence point moves up, and the jump shrinks; by pKa ≈ 10 there is no usable jump at all. Lower $c$: both curves start higher and end lower, and the jumps shrink. Above pKa ≈ 3 the blue point sits right on the curve; for stronger weak acids the acid ionizes noticeably on its own and the half-equivalence pH is slightly above pKa. (The readouts use the small-$x$ approximations from earlier lessons.)',
        },
        {
          type: 'deepdive',
          title: 'Deriving the plotted formula',
          blocks: [
            {
              type: 'p',
              text: 'Let $V_a = 25.00$ mL of acid (total concentration $C_a$) receive $V_b$ mL of NaOH ($C_b$). Write $h = [\\ce{H3O+}]$. After mixing, $[\\ce{Na+}] = \\frac{C_b V_b}{V_a + V_b}$ and the total of $\\ce{HA} + \\ce{A-}$ is $\\frac{C_a V_a}{V_a + V_b}$, of which the fraction $\\alpha = \\frac{K_a}{K_a + h}$ is ionized (solve $K_a = \\frac{h[\\ce{A-}]}{[\\ce{HA}]}$ for $[\\ce{A-}]$ as a share of the total). Electrical neutrality requires positive charge to equal negative charge:',
            },
            {
              type: 'derivation',
              steps: [
                { tex: '[\\ce{Na+}] + h = [\\ce{A-}] + [\\ce{OH-}]', why: 'Charge balance: every solution is electrically neutral.' },
                { tex: '\\frac{C_b V_b}{V_a + V_b} + h = \\frac{C_a V_a}{V_a + V_b}\\,\\alpha + \\frac{K_w}{h}', why: 'Substitute each concentration; $[\\ce{OH-}] = K_w / h$.' },
                { tex: 'C_b V_b + (h - \\tfrac{K_w}{h})(V_a + V_b) = C_a V_a\\,\\alpha', why: 'Multiply through by $V_a + V_b$.' },
                { tex: 'V_b = V_a\\,\\frac{C_a\\,\\alpha - h + K_w/h}{C_b + h - K_w/h}', why: 'Collect the $V_b$ terms and solve. This is linear in $V_b$, while solving for $h$ would require a cubic.' },
              ],
              result: 'So instead of computing pH as a function of volume, the graph computes volume as a function of pH, $h = 10^{-t}$, and draws the parametric curve $(V_b(t), t)$. Setting $\\alpha = 1$ gives the strong acid curve. Checked numerically: at $V_b = 10.00$, 12.50, 25.00 and 30.00 mL this formula reproduces pH 4.57, 4.74, 8.72 and 11.96.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Plot the inverse when the inverse is easy',
          text: 'When $y(x)$ is only defined implicitly but $x(y)$ has a closed form, sweep $y$ and plot $(x(y), y)$. It also spends samples where they matter: equal steps in pH put many points on the near-vertical jump, where equal steps in volume would leave a gap. The same trick shows up in graphics and games, for example sampling a curve by its arc length or a tone curve by its output value.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'When weak acids of the same concentration are titrated with the same NaOH, the weaker the acid (the larger its pKa), the larger the pH jump at the equivalence point.',
      answer: false,
      explanation: 'It is the other way round. A weaker acid starts at a higher pH and its buffer region sits higher (around its pKa), while past equivalence every curve follows the same excess-base line. So the jump has less room: with pKa 4.74 the pH rises from about 7.1 to 10.3 between 24.90 and 25.10 mL, but with pKa 9 the curve barely bends. Acids with pKa above about 8 (at $0.1\\ \\text{M}$) cannot be titrated accurately with an indicator.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Weak base–strong acid',
      blocks: [
        {
          type: 'p',
          text: 'Titrating a weak base with a strong acid gives the mirror-image curve: it starts basic and falls. For 25.00 mL of $0.100\\ \\text{M}$ $\\ce{NH3}$ ($K_b = 1.8 \\times 10^{-5}$) titrated with $0.100\\ \\text{M}$ HCl, the same four regions appear, with the roles of acid and base swapped.',
        },
        {
          type: 'table',
          headers: ['HCl (mL)', 'Region', 'Calculation', 'pH'],
          rows: [
            ['0', 'initial', '$[\\ce{OH-}] = \\sqrt{K_b C}$', '11.13'],
            ['12.50', 'half-equivalence', 'pH $=$ pKa of $\\ce{NH4+}$ $= 14.00 - 4.74$', '9.26'],
            ['25.00', 'equivalence', '$0.0500\\ \\text{M}$ $\\ce{NH4+}$, $K_a = 5.6 \\times 10^{-10}$', '5.28'],
            ['30.00', 'excess acid', '$[\\ce{H3O+}] = 0.500\\ \\text{mmol} / 55.00\\ \\text{mL}$', '2.04'],
          ],
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 14],
          xStep: 5,
          yStep: 2,
          parametric: [
            { x: '25*(0.1*10^(-t)/(10^(-t) + 5.56*10^(-10)) + 10^(-t) - 10^(t - 14))/(0.1 - 10^(-t) + 10^(t - 14))', y: 't', t: [1.05, 12], label: '25.00 mL of 0.100 M $\\ce{NH3}$ + 0.100 M HCl', color: 'purple' },
          ],
          points: [
            { x: 12.5, y: 9.26, label: 'pH = pKa(NH₄⁺) = 9.26' },
            { x: 25, y: 5.28, label: 'equivalence, pH 5.28' },
          ],
          vlines: [{ x: 25, color: 'gray' }],
          caption: 'Horizontal axis: mL of HCl added. The equivalence point is **acidic** because the flask then contains ammonium chloride, and $\\ce{NH4+}$ is a weak acid. Between 24.90 and 25.10 mL the pH drops from about 6.9 to 3.7.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Weak with weak does not titrate well',
          text: 'Titrating a weak acid with a weak base (say acetic acid with ammonia) gives almost no jump at all: neither side drives the pH far. That is why titrants are always strong acids or strong bases.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'You are asked for the pH at some point in a weak acid–strong base titration. Put the steps of a reliable method in order.',
      lines: [
        'Find the moles of acid and the equivalence volume',
        'Compare the volume added with the equivalence volume to identify the region',
        'Do the stoichiometry: let the added $\\ce{OH-}$ convert HA into $\\ce{A-}$ completely',
        'Apply the method for that region ($K_a$, Henderson–Hasselbalch, $K_b$ of $\\ce{A-}$, or excess $\\ce{OH-}$), using the total volume where concentrations are needed',
      ],
      explanation: 'Equivalence volume first, because it tells you which region you are in. Then stoichiometry (strong base reacts completely), then the equilibrium appropriate to what is in the flask. The order mirrors the buffer calculation from the previous lesson; the only addition is deciding the region.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Polyprotic acids: one jump per proton',
      blocks: [
        {
          type: 'p',
          text: 'A diprotic or triprotic acid loses its protons one at a time during a titration, because the first proton is much more acidic than the second. If successive $K_a$ values differ by a factor of about $10^4$ or more, the curve shows a separate equivalence point for each proton, equally spaced in volume.',
        },
        {
          type: 'graph',
          x: [0, 80],
          y: [0, 14],
          xStep: 10,
          yStep: 2,
          parametric: [
            { x: '25*(0.1*(7.5*10^(-3)*10^t + 9.3*10^(-10)*10^(2t) + 5.859*10^(-22)*10^(3t))/(1 + 7.5*10^(-3)*10^t + 4.65*10^(-10)*10^(2t) + 1.953*10^(-22)*10^(3t)) - 10^(-t) + 10^(t - 14))/(0.1 + 10^(-t) - 10^(t - 14))', y: 't', t: [1.5, 12.9], label: '25.00 mL of 0.100 M $\\ce{H3PO4}$ + 0.100 M NaOH', color: 'teal' },
          ],
          points: [
            { x: 25, y: 4.70, label: 'first equivalence, pH 4.7' },
            { x: 37.5, y: 7.21, label: 'pH = pKa₂ = 7.21' },
            { x: 50, y: 9.68, label: 'second equivalence, pH 9.7' },
          ],
          vlines: [{ x: 25, color: 'gray' }, { x: 50, color: 'gray' }, { x: 75, color: 'gray', dashed: true }],
          caption: 'Exact curve, drawn from the same charge-balance method as the interactive graph, with all three $K_a$ values of phosphoric acid. Two jumps, at 25 and 50 mL. Halfway between them (37.5 mL) $[\\ce{H2PO4-}] = [\\ce{HPO4^2-}]$ and pH $= \\text{p}K_{a2}$. There is no jump at 75 mL: $K_{a3} = 4.2 \\times 10^{-13}$ is so small that $\\ce{HPO4^2-}$ behaves almost like water toward the added $\\ce{OH-}$.',
        },
        {
          type: 'list',
          items: [
            '**First equivalence:** all $\\ce{H3PO4}$ has become $\\ce{H2PO4-}$, an amphiprotic ion. Its pH is approximately the average of the two neighboring pKa values: $\\frac{2.12 + 7.21}{2} = 4.67$ (exact: 4.70).',
            '**Second equivalence:** all $\\ce{HPO4^2-}$, pH $\\approx \\frac{7.21 + 12.38}{2} = 9.8$ (exact, with dilution and water: 9.7).',
            '**First half-equivalence (12.5 mL):** pH is 2.27, not quite pKa₁ = 2.12, because with $K_{a1}$ as large as $7.5 \\times 10^{-3}$ the acid ionizes noticeably on its own and the Henderson–Hasselbalch assumptions fail.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Two end points in one flask',
          text: 'Sodium carbonate titrated with HCl shows the same two-step pattern in reverse: $\\ce{CO3^2- -> HCO3-}$ (end point near pH 8.3, phenolphthalein) and then $\\ce{HCO3- -> H2CO3}$ (near pH 4, methyl orange). Water-quality labs use exactly this to report the "alkalinity" of a water supply, which matters for both corrosion of pipes and the dose of coagulant needed in treatment.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: '20.0 mL of $0.150\\ \\text{M}$ of a diprotic acid $\\ce{H2A}$ (with well-separated $K_a$ values) is titrated with $0.100\\ \\text{M}$ NaOH. Type the volumes in mL.',
      template: 'The first equivalence point is at ___ mL of NaOH and the second at ___ mL.',
      blanks: [{ answers: ['30.0', '30'] }, { answers: ['60.0', '60'] }],
      explanation: 'Moles of $\\ce{H2A} = 20.0 \\times 0.150 = 3.00$ mmol. The first proton needs 3.00 mmol of NaOH: $3.00 / 0.100 = 30.0$ mL. The second proton needs another 3.00 mmol, so the second equivalence point is at 60.0 mL. Equivalence points of a polyprotic acid are equally spaced in volume, and the pH at 45.0 mL (halfway between them) equals $\\text{p}K_{a2}$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Indicators and choosing one',
      blocks: [
        {
          type: 'p',
          text: 'An [[gchem-acid-base-indicator|acid–base indicator]] is itself a weak acid, $\\ce{HIn}$, whose acid form and conjugate base form have different colors. A few drops in the flask take part in the equilibrium $\\ce{HIn <=> H+ + In-}$ without noticeably affecting the pH.',
        },
        {
          type: 'derivation',
          title: 'Why the color change spans about two pH units',
          steps: [
            { tex: '\\text{pH} = \\text{p}K_{\\text{In}} + \\log\\frac{[\\ce{In-}]}{[\\ce{HIn}]}', why: 'Henderson–Hasselbalch applied to the indicator: the solution\'s pH (set by the titration) fixes the ratio of the two colored forms.' },
            { tex: '\\frac{[\\ce{In-}]}{[\\ce{HIn}]} \\lesssim \\frac{1}{10} \\implies \\text{pH} \\lesssim \\text{p}K_{\\text{In}} - 1', why: 'Your eye sees the acid color when the acid form outnumbers the base form about 10 to 1.' },
            { tex: '\\frac{[\\ce{In-}]}{[\\ce{HIn}]} \\gtrsim 10 \\implies \\text{pH} \\gtrsim \\text{p}K_{\\text{In}} + 1', why: 'And the base color when the base form wins by about 10 to 1. In between you see a mixture.' },
          ],
          result: 'The transition range is roughly $\\text{p}K_{\\text{In}} \\pm 1$. (The real ranges are not perfectly symmetric because the eye is more sensitive to some colors than others.)',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 272" xmlns="http://www.w3.org/2000/svg"><text x="6" y="42" font-size="12.5">methyl orange</text><text x="6" y="57" font-size="11" class="t-gray">red → yellow</text><line x1="140" y1="44" x2="214.4" y2="44" stroke="currentColor" class="s-red" stroke-width="7"/><rect x="214.4" y="35" width="31.2" height="18" rx="3" stroke-opacity="0.8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="230.0" y="31" text-anchor="middle" font-size="10.5" class="t-gray">3.1–4.4</text><line x1="245.60000000000002" y1="44" x2="476" y2="44" stroke="currentColor" class="s-orange" stroke-width="7"/><text x="6" y="82" font-size="12.5">methyl red</text><text x="6" y="97" font-size="11" class="t-gray">red → yellow</text><line x1="140" y1="84" x2="245.60000000000002" y2="84" stroke="currentColor" class="s-red" stroke-width="7"/><rect x="245.60000000000002" y="75" width="43.2" height="18" rx="3" stroke-opacity="0.8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="267.2" y="71" text-anchor="middle" font-size="10.5" class="t-gray">4.4–6.2</text><line x1="288.8" y1="84" x2="476" y2="84" stroke="currentColor" class="s-orange" stroke-width="7"/><text x="6" y="122" font-size="12.5">bromothymol blue</text><text x="6" y="137" font-size="11" class="t-gray">yellow → blue</text><line x1="140" y1="124" x2="284.0" y2="124" stroke="currentColor" class="s-orange" stroke-width="7"/><rect x="284.0" y="115" width="38.4" height="18" rx="3" stroke-opacity="0.8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="303.2" y="111" text-anchor="middle" font-size="10.5" class="t-gray">6.0–7.6</text><line x1="322.4" y1="124" x2="476" y2="124" stroke="currentColor" class="s-blue" stroke-width="7"/><text x="6" y="162" font-size="12.5">phenolphthalein</text><text x="6" y="177" font-size="11" class="t-gray">colorless → pink</text><line x1="140" y1="164" x2="336.79999999999995" y2="164" stroke="currentColor" class="s-gray" stroke-width="2" stroke-dasharray="3 4"/><rect x="336.79999999999995" y="155" width="43.2" height="18" rx="3" stroke-opacity="0.8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="358.4" y="151" text-anchor="middle" font-size="10.5" class="t-gray">8.2–10.0</text><line x1="380.0" y1="164" x2="476" y2="164" stroke="currentColor" class="s-purple" stroke-width="7"/><text x="6" y="202" font-size="12.5">alizarin yellow R</text><text x="6" y="217" font-size="11" class="t-gray">yellow → red</text><line x1="140" y1="204" x2="382.4" y2="204" stroke="currentColor" class="s-orange" stroke-width="7"/><rect x="382.4" y="195" width="45.6" height="18" rx="3" stroke-opacity="0.8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="405.2" y="191" text-anchor="middle" font-size="10.5" class="t-gray">10.1–12.0</text><line x1="428.0" y1="204" x2="476" y2="204" stroke="currentColor" class="s-red" stroke-width="7"/><line x1="140" y1="232" x2="476" y2="232" stroke="currentColor" stroke-width="1.4"/><line x1="140" y1="232" x2="140" y2="237" stroke="currentColor" stroke-width="1.2"/><text x="140" y="250" text-anchor="middle" font-size="11">0</text><line x1="188" y1="232" x2="188" y2="237" stroke="currentColor" stroke-width="1.2"/><text x="188" y="250" text-anchor="middle" font-size="11">2</text><line x1="236" y1="232" x2="236" y2="237" stroke="currentColor" stroke-width="1.2"/><text x="236" y="250" text-anchor="middle" font-size="11">4</text><line x1="284" y1="232" x2="284" y2="237" stroke="currentColor" stroke-width="1.2"/><text x="284" y="250" text-anchor="middle" font-size="11">6</text><line x1="332" y1="232" x2="332" y2="237" stroke="currentColor" stroke-width="1.2"/><text x="332" y="250" text-anchor="middle" font-size="11">8</text><line x1="380" y1="232" x2="380" y2="237" stroke="currentColor" stroke-width="1.2"/><text x="380" y="250" text-anchor="middle" font-size="11">10</text><line x1="428" y1="232" x2="428" y2="237" stroke="currentColor" stroke-width="1.2"/><text x="428" y="250" text-anchor="middle" font-size="11">12</text><line x1="476" y1="232" x2="476" y2="237" stroke="currentColor" stroke-width="1.2"/><text x="476" y="250" text-anchor="middle" font-size="11">14</text><text x="308" y="267" text-anchor="middle" font-size="12">pH</text><line x1="266.7" y1="22" x2="266.7" y2="232" stroke="currentColor" class="s-teal" stroke-width="1.5" stroke-dasharray="5 4"/><text x="266.7" y="16" text-anchor="middle" font-size="11" class="t-teal">5.28</text><line x1="308.0" y1="22" x2="308.0" y2="232" stroke="currentColor" class="s-green" stroke-width="1.5" stroke-dasharray="5 4"/><text x="308.0" y="16" text-anchor="middle" font-size="11" class="t-green">7.00</text><line x1="349.3" y1="22" x2="349.3" y2="232" stroke="currentColor" class="s-teal" stroke-width="1.5" stroke-dasharray="5 4"/><text x="349.3" y="16" text-anchor="middle" font-size="11" class="t-teal">8.72</text></svg>`,
          alt: 'Five indicators drawn as horizontal bars over a pH axis from 0 to 14, each with its acid color to the left of a boxed transition range and its base color to the right: methyl orange red to yellow, 3.1 to 4.4; methyl red red to yellow, 4.4 to 6.2; bromothymol blue yellow to blue, 6.0 to 7.6; phenolphthalein colorless to pink, 8.2 to 10.0; alizarin yellow R yellow to red, 10.1 to 12.0. Dashed vertical lines mark pH 5.28, 7.00 and 8.72.',
          caption: 'Transition ranges of common indicators. The dashed lines are the three equivalence points from this lesson: $\\ce{NH3}$ + HCl (5.28), HCl + NaOH (7.00) and acetic acid + NaOH (8.72). Pick the indicator whose box contains, or sits right next to, the equivalence pH.',
        },
        {
          type: 'p',
          text: 'The pH at which the indicator changes color is the [[gchem-end-point|end point]]; the goal is to make it coincide with the equivalence point. Because the curve is nearly vertical there, the requirement is forgiving: any indicator whose range lies inside the steep jump changes color within a drop of the equivalence point.',
        },
        {
          type: 'list',
          items: [
            '**Strong acid + strong base** (jump from about 4 to 10): methyl red, bromothymol blue and phenolphthalein all work.',
            '**Weak acid + strong base** (equivalence 8.72, jump about 7 to 10): **phenolphthalein**. Methyl red would change color in the buffer region, far too early.',
            '**Weak base + strong acid** (equivalence 5.28, jump about 6.9 down to 3.7): **methyl red**. Phenolphthalein would change in the buffer region of the ammonia.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The standard question gives you a titration and a table of indicator ranges. First decide whether the equivalence point is acidic, neutral or basic (what salt is in the flask?), then pick the indicator whose range contains that pH. Justify it in one sentence: "the color change must occur in the steep part of the curve around the equivalence pH of 8.7".',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'You titrate aqueous ammonia with hydrochloric acid. The equivalence point is at pH 5.3. Which indicator should you use?',
      options: [
        { text: 'Phenolphthalein (8.2–10.0)', why: 'Phenolphthalein would lose its pink color around pH 8–9, still in the ammonia buffer region, long before the equivalence point.' },
        { text: 'Methyl red (4.4–6.2)', correct: true, why: 'Its range brackets the equivalence pH of 5.3 and lies within the steep part of the curve.' },
        { text: 'Alizarin yellow R (10.1–12.0)', why: 'This changes near the very start of the titration, where the solution is still mostly ammonia.' },
        { text: 'Any indicator, since every titration ends at pH 7', why: 'Only strong acid–strong base titrations have a neutral equivalence point. Here the flask contains $\\ce{NH4Cl}$, which is acidic.' },
      ],
      explanation: 'At equivalence the flask contains ammonium chloride, a weak acid, so the pH is below 7 (5.28 for 0.100 M solutions). Methyl red, with a transition range of 4.4–6.2, changes color right at the steep drop. Indicators that change at higher pH would signal an end point in the buffer region, giving a volume that is far too small.',
    },
  ],
  takeaways: [
    'Strong acid–strong base: the leftover strong acid or base (over the total volume) sets the pH; equivalence is at pH 7, with a very steep jump around it.',
    'Weak acid–strong base has four regions: weak acid ($K_a$), buffer (Henderson–Hasselbalch), equivalence (weak base $\\ce{A-}$ with $K_b = K_w/K_a$, pH $> 7$), and excess $\\ce{OH-}$.',
    'At the half-equivalence point pH $=$ pKa, the easiest way to measure a pKa.',
    'Weaker acids and more dilute solutions give smaller jumps; a weak base titrated with a strong acid has an acidic equivalence point.',
    'A polyprotic acid with well-separated $K_a$ values gives one equivalence point per proton, equally spaced in volume, with pH $= \\text{p}K_{a2}$ halfway between the first and second.',
    'An indicator changes color over about $\\text{p}K_{\\text{In}} \\pm 1$; choose one whose range contains the equivalence-point pH (phenolphthalein for weak acid + strong base, methyl red for weak base + strong acid).',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 14: Acid-Base Equilibria',
      url: 'https://openstax.org/books/chemistry-2e/pages/14-introduction',
      source: 'openstax',
      note: 'Section 14.7, Acid-Base Titrations, computes the same strong and weak acid titration curves and discusses indicators.',
    },
    {
      title: 'Wikipedia — Titration curve',
      url: 'https://en.wikipedia.org/wiki/Titration_curve',
      source: 'wikipedia',
      note: 'Shapes of titration curves for different acid–base combinations, including polyprotic acids.',
    },
    {
      title: 'Wikipedia — pH indicator',
      url: 'https://en.wikipedia.org/wiki/PH_indicator',
      source: 'wikipedia',
      note: 'A large table of indicators with their transition ranges and colors, and how they work.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search the chemistry simulations for acid–base solutions to see how pH relates to the species present.',
    },
  ],
};
