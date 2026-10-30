import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-le-chatelier',
  title: 'The Reaction Quotient and Le Châtelier\'s Principle',
  summary: 'Compare $Q$ with $K$ to predict which way a reaction runs, then use that one idea to explain every Le Châtelier shift, from the Haber process to breathing at altitude.',
  minutes: 19,
  objectives: [
    'Calculate the reaction quotient $Q$ and use $Q$ versus $K$ to predict the direction of net reaction',
    'Predict the effect of adding or removing a species, changing the volume, and adding an inert gas, by tracking how $Q$ changes',
    'Explain why temperature is the only change that alters $K$, and predict the direction of the change from the sign of $\\Delta H$',
    'Explain why a catalyst speeds up the approach to equilibrium without shifting it',
    'Analyze the conditions of the Haber–Bosch process as a compromise between yield and rate, and apply equilibrium reasoning to hemoglobin at altitude',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The reaction quotient Q',
      blocks: [
        {
          type: 'p',
          text: 'The equilibrium constant tells you where a reaction ends up. To know which way a mixture will go **from where it is now**, evaluate the same mass-action expression with the current concentrations. The result is the [[gchem-reaction-quotient|reaction quotient]] $Q$.',
        },
        {
          type: 'definition',
          term: 'Reaction quotient',
          text: 'For $a\\ce{A} + b\\ce{B} <=> c\\ce{C} + d\\ce{D}$, $Q_c = \\dfrac{[\\ce{C}]^c[\\ce{D}]^d}{[\\ce{A}]^a[\\ce{B}]^b}$ using the concentrations at **any** moment (with partial pressures, $Q_p$). Same form as $K$; at equilibrium, and only then, $Q = K$.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="100" x2="480" y2="100" stroke="currentColor" stroke-width="2"/><polyline points="472,94 482,100 472,106" fill="none" stroke="currentColor" stroke-width="2"/><text x="470" y="125" text-anchor="end" font-size="12.5" class="t-gray">large Q (mostly products)</text><text x="30" y="125" text-anchor="start" font-size="12.5" class="t-gray">small Q (mostly reactants)</text><line x1="250" y1="84" x2="250" y2="116" stroke="currentColor" class="s-purple" stroke-width="3"/><text x="250" y="140" text-anchor="middle" font-size="15" class="t-purple">Q = K</text><text x="250" y="158" text-anchor="middle" font-size="12.5" class="t-purple">equilibrium: no net change</text><circle cx="95" cy="100" r="6" fill="currentColor" class="f-blue"/><line x1="105" y1="72" x2="228" y2="72" stroke="currentColor" class="s-blue" stroke-width="2.5"/><polyline points="219,65 229,72 219,79" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.5"/><text x="135" y="28" text-anchor="middle" font-size="14" class="t-blue">Q &lt; K</text><text x="135" y="47" text-anchor="middle" font-size="12.5">too few products:</text><text x="135" y="62" text-anchor="middle" font-size="12.5">net forward reaction →</text><circle cx="405" cy="100" r="6" fill="currentColor" class="f-red"/><line x1="395" y1="72" x2="272" y2="72" stroke="currentColor" class="s-red" stroke-width="2.5"/><polyline points="281,65 271,72 281,79" fill="none" stroke="currentColor" class="s-red" stroke-width="2.5"/><text x="365" y="28" text-anchor="middle" font-size="14" class="t-red">Q &gt; K</text><text x="365" y="47" text-anchor="middle" font-size="12.5">too many products:</text><text x="365" y="62" text-anchor="middle" font-size="12.5">← net reverse reaction</text><text x="250" y="182" text-anchor="middle" font-size="13">Either way, the reaction moves Q toward K.</text></svg>`,
          alt: 'A number line for Q on a logarithmic scale with K marked in the middle. A point to the left of K labeled Q less than K has an arrow pointing right toward K: too few products, net forward reaction. A point to the right labeled Q greater than K has an arrow pointing left: too many products, net reverse reaction.',
          caption: 'The whole lesson in one picture: a reacting mixture always moves $Q$ toward $K$.',
        },
        {
          type: 'p',
          text: 'Why does the reaction always move $Q$ **toward** $K$? As the forward reaction proceeds, products grow and reactants shrink, so the numerator rises and the denominator falls: $Q$ increases steadily. The reverse reaction makes $Q$ decrease steadily. The graph shows this for $\\ce{N2O4 <=> 2NO2}$ starting from 1 M of $\\ce{N2O4}$.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [-5, 3],
          xStep: 0.1,
          yStep: 1,
          functions: [{ expr: 'log(4x^2/(1 - x))', label: '$\\log_{10} Q$', color: 'blue' }],
          hlines: [{ y: 'k', label: 'log K', color: 'purple' }],
          points: [{ x: '(-10^k + sqrt(10^(2k) + 16*10^k))/8', y: 'k', label: 'equilibrium', color: 'purple' }],
          sliders: [{ name: 'k', min: -4, max: 2, step: 0.01, value: -2.33, label: '$\\log_{10} K$' }],
          readouts: [{ label: '$x_{\\text{eq}}$ (M of $\\ce{N2O4}$ reacted) $=$', expr: '(-10^k + sqrt(10^(2k) + 16*10^k))/8', digits: 4 }],
          caption: 'Horizontal axis: $x$, the mol/L of $\\ce{N2O4}$ that has reacted, so $[\\ce{N2O4}] = 1 - x$ and $[\\ce{NO2}] = 2x$. $Q$ rises monotonically from 0 toward $\\infty$, so it crosses $K$ exactly once: there is exactly one equilibrium state. At 25 °C, $\\log_{10} K = -2.33$.',
        },
        {
          type: 'derivation',
          title: 'Which way will it go? (ammonia at 472 °C, $K_c = 0.105$)',
          steps: [
            { tex: 'Q_c = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3}', why: 'Same expression as $K_c$, but filled with the current concentrations.' },
            { tex: '\\text{Mixture 1: } Q_c = \\frac{(0.20)^2}{(0.50)(0.80)^3} = \\frac{0.040}{0.256} = 0.156', why: '$[\\ce{N2}] = 0.50$ M, $[\\ce{H2}] = 0.80$ M, $[\\ce{NH3}] = 0.20$ M.' },
            { tex: '0.156 > 0.105 \\implies \\text{net reverse: } \\ce{NH3}\\ \\text{decomposes}', why: '$Q > K$: too much product for equilibrium, so some ammonia breaks down until $Q$ falls to $K$.' },
            { tex: '\\text{Mixture 2: } Q_c = \\frac{(0.10)^2}{(1.00)(1.00)^3} = 0.0100', why: '$[\\ce{N2}] = [\\ce{H2}] = 1.00$ M, $[\\ce{NH3}] = 0.10$ M.' },
            { tex: '0.0100 < 0.105 \\implies \\text{net forward: more } \\ce{NH3}\\ \\text{forms}', why: '$Q < K$: too little product, so the forward reaction runs until $Q$ rises to $K$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A flask at 25 °C contains $[\\ce{N2O4}] = 0.0500$ M and $[\\ce{NO2}] = 0.0300$ M. For $\\ce{N2O4(g) <=> 2NO2(g)}$, $K_c = 4.64 \\times 10^{-3}$. Calculate $Q_c$ (three significant figures).',
      hint: '$Q_c = \\dfrac{[\\ce{NO2}]^2}{[\\ce{N2O4}]}$. Do not forget the square.',
      label: '$Q_c =$',
      answer: '0.0300^2/0.0500',
      answerTex: '0.0180',
      tolerance: 0.00006,
      explanation: '$Q_c = \\dfrac{(0.0300)^2}{0.0500} = \\dfrac{9.00 \\times 10^{-4}}{0.0500} = 0.0180$. Since $0.0180 > 4.64 \\times 10^{-3}$, $Q > K$: there is too much $\\ce{NO2}$, so the net reaction runs in reverse ($\\ce{2NO2 -> N2O4}$) and the brown color fades a little until $Q = K$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Le Châtelier\'s principle: adding and removing substances',
      blocks: [
        {
          type: 'p',
          text: 'In 1884 Henri Le Châtelier summarized how equilibria respond to being disturbed. [[gchem-le-chatelier|Le Châtelier\'s principle]]: *if a system at equilibrium is disturbed, the net reaction shifts in the direction that partly counteracts the disturbance.* It is a useful slogan, but you do not have to memorize it as a separate law. It follows from $Q$ versus $K$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Start at equilibrium', text: '$Q = K$.' },
            { title: 'Disturb', text: 'Adding or removing a species changes $Q$ instantly; $K$ is unchanged (the temperature is the same).' },
            { title: 'Compare', text: 'Now $Q \\ne K$. If $Q < K$ the net reaction runs forward; if $Q > K$ it runs in reverse.' },
            { title: 'Re-equilibrate', text: 'The reaction runs until $Q = K$ again, at a new set of concentrations.' },
          ],
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 2],
          xStep: 1,
          yStep: 0.5,
          functions: [
            { expr: '1/3', label: '$[\\ce{A}]$', color: 'blue', domain: [0, 3] },
            { expr: '(1 + d)/3 + 2d/3*e^(-1.5(x - 3))', color: 'blue', domain: [3, 10] },
            { expr: '2/3', label: '$[\\ce{B}]$', color: 'red', domain: [0, 3] },
            { expr: '2(1 + d)/3 - 2d/3*e^(-1.5(x - 3))', color: 'red', domain: [3, 10] },
          ],
          vlines: [{ x: 3, label: 'add A', color: 'gray' }],
          sliders: [{ name: 'd', min: 0, max: 1.5, step: 0.05, value: 0.75, label: 'A added (M)' }],
          readouts: [
            { label: '$Q$ just after adding $=$', expr: '(2/3)/(1/3 + d)', digits: 3 },
            { label: '$K =$', expr: '2', digits: 3 },
          ],
          caption: 'A ⇌ B with $K = [\\ce{B}]/[\\ce{A}] = 2$, at equilibrium until $t = 3$ s, when extra A is injected. $Q$ drops below $K$, so A converts to B until the ratio is 2 again. Notice that the new $[\\ce{A}]$ is still **higher** than before: the shift only partly undoes the disturbance.',
        },
        {
          type: 'derivation',
          title: 'Doubling the nitrogen in an ammonia equilibrium (472 °C)',
          steps: [
            { tex: 'K_c = \\frac{(0.00272)^2}{(0.0402)(0.1207)^3} = 0.105', why: 'The equilibrium mixture from the previous lesson: $Q = K$.' },
            { tex: 'Q_c = \\frac{(0.00272)^2}{(0.0804)(0.1207)^3} = \\frac{0.105}{2} = 0.0524', why: 'Doubling $[\\ce{N2}]$ doubles the denominator, so $Q$ is halved instantly. $K$ has not changed.' },
            { tex: 'Q_c < K_c \\implies \\text{net forward}', why: 'Too little product for equilibrium: $\\ce{N2}$ and $\\ce{H2}$ react to make more $\\ce{NH3}$, using up some of the added $\\ce{N2}$.' },
          ],
          result: 'Adding a reactant shifts the equilibrium toward products. By the same argument, **removing a product** (which lowers $Q$) also drives the reaction forward, and adding a product or removing a reactant drives it in reverse.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Pure solids and liquids do not count',
          text: 'Adding more $\\ce{CaCO3(s)}$ to $\\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$ causes no shift, because solids are not in $Q$. "Adding a species" means changing a concentration or partial pressure that appears in $Q$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A mixture of $\\ce{N2}$, $\\ce{H2}$ and $\\ce{NH3}$ is at equilibrium. Extra $\\ce{H2}$ is injected at constant volume and temperature, and the system re-establishes equilibrium. Compared with the **original** equilibrium, which is true?',
      options: [
        { text: '$[\\ce{NH3}]$ is higher, $[\\ce{N2}]$ is lower, and $[\\ce{H2}]$ is higher', correct: true, why: 'The forward shift makes ammonia and consumes nitrogen, but it uses up only part of the added hydrogen, so $[\\ce{H2}]$ stays above its original value.' },
        { text: '$[\\ce{NH3}]$ is higher, and $[\\ce{N2}]$ and $[\\ce{H2}]$ are both back to their original values', why: 'The shift only partly counteracts the disturbance. If $[\\ce{N2}]$ and $[\\ce{H2}]$ were back to their old values, more $\\ce{NH3}$ would make $Q > K$.' },
        { text: '$K$ has increased because there is more $\\ce{H2}$', why: '$K$ changes only with temperature. Adding a reactant changes $Q$, not $K$.' },
        { text: 'Nothing changes, because the system was already at equilibrium', why: 'Once $\\ce{H2}$ is added the mixture is no longer at equilibrium: $Q < K$.' },
      ],
      explanation: 'Adding $\\ce{H2}$ makes $Q < K$, so the net reaction runs forward: $\\ce{N2}$ and $\\ce{H2}$ are consumed and $\\ce{NH3}$ forms until $Q = K$. Nitrogen ends up below its original value (some was used and none was added), ammonia above, and hydrogen above its original value but below the value just after the injection. That is the meaning of "partly counteracts".',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Changing volume or pressure, and adding an inert gas',
      blocks: [
        {
          type: 'p',
          text: 'Squeeze a gas mixture into half the volume and **every** concentration doubles at once. Whether that changes $Q$ depends on how many factors of concentration sit on top versus underneath: if the volume is divided by $s$, $Q$ is multiplied by $s^{\\Delta n}$, where $\\Delta n$ is the change in moles of gas.',
        },
        {
          type: 'derivation',
          title: 'Compressing $\\ce{N2O4 <=> 2NO2}$ to half its volume (25 °C)',
          steps: [
            { tex: '[\\ce{N2O4}] = 0.0898\\ \\text{M}, \\quad [\\ce{NO2}] = 0.0204\\ \\text{M}, \\quad Q = K = 4.64 \\times 10^{-3}', why: 'An equilibrium mixture from the previous lesson\'s table.' },
            { tex: '[\\ce{N2O4}] = 0.1796\\ \\text{M}, \\quad [\\ce{NO2}] = 0.0408\\ \\text{M}', why: 'Halving the volume doubles both concentrations instantly.' },
            { tex: 'Q = \\frac{(0.0408)^2}{0.1796} = 9.27 \\times 10^{-3} = 2K', why: 'The numerator gains a factor of $2^2 = 4$, the denominator a factor of 2: net factor $2^{\\Delta n} = 2^1$.' },
            { tex: 'Q > K \\implies \\text{net reverse: } \\ce{2NO2 -> N2O4}', why: 'The mixture shifts toward the side with **fewer** gas molecules (1 instead of 2), which lowers the pressure: the shift partly counteracts the compression.' },
          ],
          result: 'Solving for the new equilibrium (the method of the next lesson) gives $[\\ce{N2O4}] = 0.185$ M and $[\\ce{NO2}] = 0.0293$ M. $[\\ce{NO2}]$ is higher than the original 0.0204 M, but well below the 0.0408 M just after compression.',
        },
        {
          type: 'table',
          headers: ['change', 'effect on $Q$', 'shift'],
          rows: [
            ['decrease volume (raise pressure)', '$\\times s^{\\Delta n}$ with $s > 1$', 'toward fewer gas moles'],
            ['increase volume (lower pressure)', '$\\times s^{\\Delta n}$ with $s < 1$', 'toward more gas moles'],
            ['any volume change with $\\Delta n = 0$', 'none', 'no shift (e.g. $\\ce{H2 + I2 <=> 2HI}$)'],
            ['add inert gas, constant volume', 'none', 'no shift'],
            ['add inert gas, constant total pressure', 'like a volume increase', 'toward more gas moles'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why argon in a rigid tank changes nothing',
          text: 'Pumping argon into a rigid vessel raises the **total** pressure, but each reacting gas still has the same moles in the same volume, so every concentration and partial pressure, and therefore $Q$, is unchanged. Only changes that alter the terms inside $Q$ can shift an equilibrium. If instead the vessel has a piston that keeps the total pressure constant, the argon pushes the volume up and dilutes the reacting gases, which **does** change $Q$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5 (cont.)
    {
      kind: 'numeric',
      prompt: 'An equilibrium mixture at 25 °C has $[\\ce{N2O4}] = 0.0898$ M and $[\\ce{NO2}] = 0.0204$ M. It is suddenly compressed to **one-third** of its volume. Calculate $Q_c$ immediately after the compression, before any reaction (three significant figures).',
      hint: 'Every concentration triples. Then $Q_c = \\dfrac{[\\ce{NO2}]^2}{[\\ce{N2O4}]}$.',
      label: '$Q_c =$',
      answer: '(3*0.0204)^2/(3*0.0898)',
      answerTex: '0.0139',
      tolerance: 0.00006,
      explanation: 'New concentrations: $[\\ce{N2O4}] = 0.2694$ M and $[\\ce{NO2}] = 0.0612$ M, so $Q_c = \\dfrac{(0.0612)^2}{0.2694} = 0.0139$. That is $3^{\\Delta n} = 3^1 = 3$ times $K_c = 4.64 \\times 10^{-3}$. Since $Q > K$, the net reaction runs in reverse, toward $\\ce{N2O4}$, the side with fewer gas molecules.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'An equilibrium mixture of $\\ce{2SO2(g) + O2(g) <=> 2SO3(g)}$ is compressed to half its volume at constant temperature. Complete the reasoning.',
      template: 'Every concentration doubles, so $Q$ becomes ___ $K$. The net reaction runs to the ___, toward the side with ___ moles of gas.',
      blanks: [{ answers: ['smaller than'] }, { answers: ['right'] }, { answers: ['fewer'] }],
      wordBank: ['smaller than', 'larger than', 'equal to', 'right', 'left', 'fewer', 'more'],
      explanation: '$Q = \\dfrac{[\\ce{SO3}]^2}{[\\ce{SO2}]^2[\\ce{O2}]}$. Doubling everything multiplies the numerator by 4 and the denominator by 8, so $Q$ is halved: $Q = K/2 < K$. (Equivalently, $\\Delta n = 2 - 3 = -1$, and $2^{-1} = \\tfrac{1}{2}$.) The net reaction runs forward, to the right, from 3 moles of gas to 2, which partly relieves the higher pressure.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'Pumping argon into a rigid steel vessel containing $\\ce{N2}$, $\\ce{H2}$ and $\\ce{NH3}$ at equilibrium raises the total pressure, so the equilibrium shifts toward $\\ce{NH3}$ (fewer gas moles).',
      answer: false,
      explanation: 'At constant volume the argon does not change the moles or the volume of any reacting gas, so their concentrations and partial pressures are unchanged, and so is $Q$. With $Q = K$ still, there is no shift. "Higher pressure favors fewer gas moles" applies when the pressure rises **because the volume shrinks**, which raises every reacting gas\'s concentration.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Temperature: the one change that moves K',
      blocks: [
        {
          type: 'p',
          text: 'Every change so far altered $Q$ and left $K$ alone. Temperature is different: $K$ itself depends on $T$, through the enthalpy change $\\Delta H^\\circ$ of the reaction. A handy bookkeeping trick is to write heat into the equation as if it were a reactant or product:',
        },
        {
          type: 'list',
          items: [
            '**Exothermic** ($\\Delta H < 0$): reactants $\\ce{<=>}$ products + heat. Raising $T$ "adds heat", shifting the equilibrium left: $K$ **decreases**.',
            '**Endothermic** ($\\Delta H > 0$): reactants + heat $\\ce{<=>}$ products. Raising $T$ shifts it right: $K$ **increases**.',
          ],
        },
        {
          type: 'p',
          text: 'The trick is a mnemonic, not an explanation. The real reason comes from kinetics: $K = k_f/k_r$, and each rate constant obeys the Arrhenius equation.',
        },
        {
          type: 'derivation',
          title: 'Why K depends on T (via Arrhenius)',
          steps: [
            { tex: 'K = \\frac{k_f}{k_r} = \\frac{A_f\\, e^{-E_{a,f}/RT}}{A_r\\, e^{-E_{a,r}/RT}}', why: 'Equal forward and reverse rates give $K = k_f/k_r$ for an elementary step; each $k$ has Arrhenius form.' },
            { tex: '= \\frac{A_f}{A_r}\\, e^{-(E_{a,f} - E_{a,r})/RT}', why: 'Combine the exponentials.' },
            { tex: 'E_{a,f} - E_{a,r} \\approx \\Delta H^\\circ \\implies K \\propto e^{-\\Delta H^\\circ/RT}', why: 'On a reaction energy diagram, the forward barrier minus the reverse barrier is the energy difference between products and reactants, which is essentially $\\Delta H$.' },
            { tex: '\\Delta H^\\circ > 0:\\ T \\uparrow \\implies -\\tfrac{\\Delta H^\\circ}{RT}\\ \\text{less negative} \\implies K \\uparrow', why: 'For an endothermic reaction the exponent is negative and shrinks in size as $T$ rises, so $K$ grows. For $\\Delta H^\\circ < 0$ the exponent is positive and shrinks as $T$ rises, so $K$ falls.' },
          ],
          result: 'Raising the temperature increases $K$ for an endothermic reaction and decreases it for an exothermic one, exactly what the "heat as a reactant or product" mnemonic predicts. In kinetic terms: for an exothermic reaction the reverse barrier is the larger one, so heating speeds the reverse reaction more. The Thermodynamics unit derives the quantitative form, the [[gchem-van-t-hoff-equation|van \'t Hoff equation]], from free energy.',
        },
        {
          type: 'graph',
          x: [250, 450],
          y: [-7, 6],
          xStep: 25,
          yStep: 1,
          functions: [{ expr: 'log(0.15) - h*1000/(8.314*ln(10))*(1/x - 1/298)', label: '$\\log_{10} K$', color: 'red' }],
          points: [{ x: 298, y: 'log(0.15)', label: '298 K', color: 'gray' }],
          sliders: [{ name: 'h', min: -100, max: 100, step: 1, value: 57, label: '$\\Delta H^\\circ$ (kJ/mol)' }],
          readouts: [{ label: '$K$ at 350 K $=$', expr: '0.15*10^(-h*1000/(8.314*ln(10))*(1/350 - 1/298))', digits: 4 }],
          caption: 'Horizontal axis: $T$ in kelvin. A reaction with $K = 0.15$ at 298 K. With $\\Delta H^\\circ > 0$ (endothermic), $K$ rises with $T$. Drag $\\Delta H^\\circ$ below zero and the curve tilts down. At $\\Delta H^\\circ = 0$, temperature has no effect on $K$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'See it in the lab',
          text: 'Seal some $\\ce{N2O4}/\\ce{NO2}$ mixture in two glass tubes and put one in hot water, one in ice water. Within a minute their colors differ, and they stay different: each tube has settled at its own equilibrium, because each temperature has its own $K$. The next question asks what the colors tell you.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'A sealed tube of $\\ce{N2O4}$ and $\\ce{NO2}$ at equilibrium turns a deeper brown when dipped in hot water and almost colorless in ice water. What can you conclude about $\\ce{N2O4(g) <=> 2NO2(g)}$?',
      options: [
        { text: 'The forward reaction is endothermic, so $K$ increases as the temperature rises', correct: true, why: 'More brown $\\ce{NO2}$ at higher $T$ means the equilibrium lies further right, so $K$ is larger. A $K$ that grows with $T$ is the signature of $\\Delta H^\\circ > 0$.' },
        { text: 'The forward reaction is exothermic, and heating adds heat that pushes it toward products', why: 'Backwards: if heat were a product (exothermic), adding heat would push the equilibrium toward **reactants**, and the tube would get paler when heated.' },
        { text: '$K$ is unchanged; heating just speeds up the forward reaction', why: 'Heating speeds up both directions. A different color at a steady temperature means a different equilibrium composition, so $K$ itself has changed.' },
        { text: 'Heating raises the pressure, which shifts the equilibrium toward more gas molecules', why: 'In a sealed rigid tube heating does not change the concentrations, so $Q_c$ is unchanged. The shift happens because $K$ changes, not $Q$; and higher pressure would favor fewer molecules anyway.' },
      ],
      explanation: 'Temperature is the one disturbance that changes $K$. Here, more $\\ce{NO2}$ when hot means $K$ increases with $T$, so the forward reaction must absorb heat: $\\ce{N2O4 + heat <=> 2NO2}$. That fits the chemistry, since the forward reaction breaks the N–N bond ($\\Delta H^\\circ = +57.2$ kJ/mol).',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Case study: the Haber–Bosch process',
      blocks: [
        {
          type: 'p',
          text: 'Roughly half the nitrogen in the proteins of your body passed through an ammonia plant, because synthetic fertilizer feeds about half the world. Fritz Haber found the conditions in 1909 and Carl Bosch scaled them up; the same ammonia also supplied nitrates for munitions in the First World War. The chemistry is one equilibrium:',
        },
        {
          type: 'math',
          tex: '\\ce{N2(g) + 3H2(g) <=> 2NH3(g)} \\qquad \\Delta H^\\circ = -92.2\\ \\text{kJ}',
        },
        {
          type: 'list',
          items: [
            '**Pressure:** $\\Delta n = -2$ (four gas moles become two), so high pressure favors ammonia.',
            '**Temperature:** exothermic, so **low** temperature gives a larger $K$ and a higher yield.',
            '**Removing product:** cooling the outlet gas condenses liquid ammonia; this keeps $Q$ low, and the unreacted $\\ce{N2}$ and $\\ce{H2}$ are recycled through the reactor.',
          ],
        },
        {
          type: 'graph',
          x: [200, 700],
          y: [0, 100],
          xStep: 50,
          yStep: 10,
          parametric: [
            { x: '12633/(ln(256t^2/(27(1 - t)^4*p^2)) + 27.48) - 273.15', y: '100t', t: [0.003, 0.97], label: 'equilibrium % $\\ce{NH3}$ at the slider pressure', color: 'blue' },
            { x: '12633/(ln(256t^2/(27(1 - t)^4*50^2)) + 27.48) - 273.15', y: '100t', t: [0.003, 0.97], label: '50 atm', color: 'gray', dashed: true },
          ],
          vlines: [{ x: 450, label: '450 °C', color: 'orange' }],
          sliders: [{ name: 'p', min: 10, max: 1000, step: 10, value: 200, label: 'total pressure (atm)' }],
          caption: 'Equilibrium mole percent of ammonia (vertical) against temperature in °C (horizontal), for a 1 : 3 mixture of $\\ce{N2}$ and $\\ce{H2}$ (ideal-gas model fitted to measured $K_p$ values). Yield falls steeply as $T$ rises and climbs with pressure. At 200 atm the model gives about 62% at 300 °C, 35% at 400 °C and 17% at 500 °C.',
        },
        {
          type: 'p',
          text: 'So why not run at 200 °C, where the equilibrium yield is over 80%? Because the reaction would barely move. The $\\ce{N#N}$ triple bond is extremely strong, and even over a catalyst the rate at 200 °C is far too slow. Plants run at about 400–450 °C: hot enough to be fast, cool enough for a usable yield (in practice about 15% conversion per pass, since the gas does not stay long enough to reach full equilibrium), at roughly 150–300 atm, with an iron catalyst. Higher pressures would raise the yield further but need thicker steel and more compressor power; the cost outweighs the gain.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the catalyst does not change the yield',
          text: 'A catalyst lowers the activation energy of the forward **and** reverse reactions by the same amount (it provides one new pathway, used in both directions). Both rate constants grow by the same factor, so $K = k_f/k_r$ is unchanged. The catalyst gets the gas to the **same** equilibrium mixture faster. In the Haber plant that is everything: it lets the reaction run fast at a temperature low enough to keep $K$ reasonable.',
        },
        {
          type: 'graph',
          x: [0, 8],
          y: [0, 1],
          xStep: 1,
          yStep: 0.2,
          functions: [
            { expr: '2/3*(1 - e^(-1.5x))', label: 'uncatalyzed', color: 'gray', dashed: true },
            { expr: '2/3*(1 - e^(-1.5c*x))', label: 'with catalyst', color: 'green' },
          ],
          hlines: [{ y: '2/3', label: 'equilibrium', color: 'purple' }],
          sliders: [{ name: 'c', min: 1, max: 10, step: 0.5, value: 4, label: 'catalyst speed-up factor' }],
          caption: 'Product concentration (M) against time (s) for A ⇌ B with $K = 2$, starting from 1 M of A. A catalyst that multiplies both $k_f$ and $k_r$ by the same factor reaches equilibrium sooner, but at exactly the same level.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'The equilibrium yield of ammonia is far higher at 200 °C than at 450 °C. Why do Haber–Bosch plants operate at about 400–450 °C anyway?',
      options: [
        { text: 'Because $K$ increases with temperature for this reaction', why: 'The reaction is exothermic, so $K$ **decreases** as $T$ rises. Higher temperature costs yield.' },
        { text: 'Because at 200 °C the reaction is far too slow, even with a catalyst; 400–450 °C is a compromise between yield and rate', correct: true, why: 'Equilibrium favors low $T$, kinetics favors high $T$. The plant runs where ammonia is produced fastest per hour, not where the equilibrium yield is highest.' },
        { text: 'Because the iron catalyst shifts the equilibrium toward ammonia at high temperature', why: 'A catalyst never shifts an equilibrium. It only speeds up both directions equally.' },
        { text: 'Because heating the gas raises its pressure, which favors ammonia', why: 'The operating pressure is set by compressors. And the effect of temperature on $K$ outweighs any pressure effect: hotter means less ammonia at equilibrium.' },
      ],
      explanation: 'The two goals conflict. Thermodynamics (Le Châtelier for an exothermic reaction) says cooler is better for yield; kinetics (Arrhenius) says hotter is faster. Plants accept a modest yield per pass at 400–450 °C, then condense out the ammonia and recycle the unreacted gas, so over many passes nearly all the hydrogen and nitrogen are converted.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Equilibrium in your blood: hemoglobin and altitude',
      blocks: [
        {
          type: 'p',
          text: 'Oxygen travels in your blood bound to hemoglobin (Hb). Each Hb binds up to four $\\ce{O2}$, but a simplified one-step equilibrium captures the logic:',
        },
        {
          type: 'math',
          tex: '\\ce{Hb(aq) + O2(aq) <=> HbO2(aq)} \\qquad K = \\frac{[\\ce{HbO2}]}{[\\ce{Hb}][\\ce{O2}]}',
          caption: 'In the lungs, high $[\\ce{O2}]$ drives the reaction right; in working muscle, low $[\\ce{O2}]$ lets it run left and release oxygen.',
        },
        {
          type: 'p',
          text: 'The dissolved $[\\ce{O2}]$ follows the partial pressure of oxygen in the air you breathe. At sea level that is about 0.21 atm. At 3,500 m the air pressure is only about 0.65 atm, so $P_{\\ce{O2}}$ falls to roughly 0.14 atm; on the summit of Everest, about 0.07 atm.',
        },
        {
          type: 'derivation',
          title: 'Arriving at altitude',
          steps: [
            { tex: '[\\ce{O2}] \\downarrow \\implies Q = \\frac{[\\ce{HbO2}]}{[\\ce{Hb}][\\ce{O2}]} \\uparrow \\implies Q > K', why: 'Less oxygen in the denominator makes $Q$ larger than $K$.' },
            { tex: '\\text{net reverse: } \\ce{HbO2 -> Hb + O2}', why: 'Less of the hemoglobin is loaded with oxygen, so less reaches the tissues: headache, fatigue and shortness of breath (altitude sickness).' },
            { tex: '\\text{acclimatization: } [\\ce{Hb}] \\uparrow \\implies Q \\downarrow \\implies \\text{net forward}', why: 'Over days to weeks the kidneys release the hormone EPO and the body makes more hemoglobin. Adding a reactant pushes the equilibrium back toward $\\ce{HbO2}$.' },
          ],
          result: 'This is why mountain units and high-altitude athletes acclimatize gradually, and why athletes who live high and train low arrive at sea level with extra hemoglobin.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Carbon monoxide: a competing equilibrium',
          text: 'Carbon monoxide binds to hemoglobin roughly 200 times more strongly than oxygen: $\\ce{HbO2 + CO <=> HbCO + O2}$ has a large $K$. Even a small $P_{\\ce{CO}}$ (an engine or generator running in an enclosed space) converts much of the hemoglobin. Treatment is pure Le Châtelier: breathe pure oxygen, ideally in a hyperbaric chamber at 2–3 atm, so the very high $P_{\\ce{O2}}$ drives $\\ce{HbCO + O2 -> HbO2 + CO}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'A soldier flies from sea level to a base at 3,500 m. Using $\\ce{Hb + O2 <=> HbO2}$, which statement is correct?',
      options: [
        { text: 'Lower $P_{\\ce{O2}}$ makes $Q > K$, so less $\\ce{HbO2}$ forms; over weeks the body makes more Hb, which shifts the equilibrium back toward $\\ce{HbO2}$', correct: true, why: 'Removing a reactant ($\\ce{O2}$) shifts left; adding a different reactant (Hb) shifts right again.' },
        { text: '$K$ decreases at altitude because the air pressure is lower', why: '$K$ depends only on temperature, and body temperature has not changed. The lower pressure changes $Q$.' },
        { text: 'The lower total pressure shifts the equilibrium toward the side with more molecules, $\\ce{HbO2}$', why: 'Two species combine into one, so the side with more particles is Hb + $\\ce{O2}$. In any case the effect comes from the lower $[\\ce{O2}]$ in $Q$.' },
        { text: 'There is no effect, because hemoglobin is in solution and pressure only affects gases', why: 'The dissolved $[\\ce{O2}]$ is proportional to $P_{\\ce{O2}}$ in the lungs, so a lower partial pressure lowers $[\\ce{O2}]$ in $Q$.' },
      ],
      explanation: 'At altitude $[\\ce{O2}]$ in the blood drops, $Q = \\frac{[\\ce{HbO2}]}{[\\ce{Hb}][\\ce{O2}]}$ rises above $K$, and the equilibrium shifts left: less oxygen is carried. Acclimatization raises the hemoglobin concentration, which lowers $Q$ again and restores much of the oxygen-carrying capacity. $K$ never changes, because the temperature (37 °C) does not.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student predicts the effect of five changes on $\\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$, $\\Delta H^\\circ = -92.2$ kJ. Tap the line with the mistake.',
      lines: [
        'Add $\\ce{N2}$: $Q$ falls below $K$, net forward, more $\\ce{NH3}$.',
        'Condense out $\\ce{NH3}$: $Q$ falls below $K$, net forward, more $\\ce{NH3}$ forms.',
        'Halve the volume: $Q$ falls to $K/4$, net forward, more $\\ce{NH3}$.',
        'Add an iron catalyst: it speeds the forward reaction, so the equilibrium shifts toward $\\ce{NH3}$.',
        'Raise the temperature: $K$ decreases (exothermic), net reverse, less $\\ce{NH3}$.',
      ],
      errorLines: [4],
      explanation: 'A catalyst speeds the forward **and** reverse reactions by the same factor, so $K$ and the equilibrium composition are unchanged; it only shortens the time to reach equilibrium. The other lines are right; in line 3, doubling every concentration multiplies $Q$ by $2^{\\Delta n} = 2^{-2} = \\tfrac{1}{4}$.',
    },
  ],
  takeaways: [
    '$Q$ has the same form as $K$ but uses the current concentrations. $Q < K$: net forward; $Q > K$: net reverse; $Q = K$: equilibrium.',
    'Le Châtelier\'s principle follows from $Q$ versus $K$: adding a reactant or removing a product lowers $Q$ and drives the reaction forward, and the shift only partly undoes the change.',
    'Shrinking the volume multiplies $Q$ by $s^{\\Delta n}$ and shifts toward fewer gas moles; no shift if $\\Delta n = 0$, and none from an inert gas at constant volume.',
    'Only temperature changes $K$: raising $T$ increases $K$ for endothermic reactions ($\\Delta H > 0$) and decreases it for exothermic ones; the Thermodynamics unit makes this quantitative.',
    'A catalyst speeds both directions equally: equilibrium is reached faster, but at the same composition.',
    'Haber–Bosch: high pressure and low temperature favor ammonia; 400–450 °C is a compromise with rate, plus an iron catalyst, product removal and recycling.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 13: Fundamental Equilibrium Concepts',
      url: 'https://openstax.org/books/chemistry-2e/pages/13-introduction',
      source: 'openstax',
      note: 'Section 13.3, "Shifting Equilibria: Le Châtelier\'s Principle", covers concentration, pressure, temperature and catalyst effects, with the Haber process as an example.',
    },
    {
      title: 'Wikipedia — Le Chatelier\'s principle',
      url: 'https://en.wikipedia.org/wiki/Le_Chatelier%27s_principle',
      source: 'wikipedia',
      note: 'The history of the principle and its limits, including cases where the simple slogan misleads.',
    },
    {
      title: 'Wikipedia — Haber process',
      url: 'https://en.wikipedia.org/wiki/Haber_process',
      source: 'wikipedia',
      note: 'Operating conditions, catalysts, energy use and the enormous historical impact of synthetic ammonia.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The free "Reactions & Rates" simulation lets you watch a reversible reaction reach equilibrium and respond to changes in temperature.',
    },
  ],
};
