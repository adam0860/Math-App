import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-nernst',
  title: 'Cell Potential, Free Energy and the Nernst Equation',
  summary: 'Volts are joules per coulomb: connect $E^\\circ$ to $\\Delta G^\\circ$ and $K$, then let concentrations change with the Nernst equation, from dying batteries to concentration cells, pH meters and nerve cells.',
  minutes: 20,
  objectives: [
    'Derive and use $\\Delta G^\\circ = -nFE^\\circ$, identifying $n$ from a balanced equation',
    'Convert between $E^\\circ$, $\\Delta G^\\circ$ and $K$, and explain the sign relationships among them',
    'Derive the Nernst equation from $\\Delta G = \\Delta G^\\circ + RT\\ln Q$ and use its 25 °C form $E = E^\\circ - \\frac{0.0592}{n}\\log Q$',
    'Interpret the straight-line graph of $E$ against $\\log Q$ and explain why a battery\'s voltage stays nearly flat and then collapses',
    'Calculate the potential of a concentration cell and apply the idea to pH electrodes and nerve-cell membranes',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Volts are energy per charge: $\\Delta G^\\circ = -nFE^\\circ$',
      blocks: [
        {
          type: 'p',
          text: 'In unit 10 you learned that the Gibbs free energy change $\\Delta G$ decides whether a reaction is spontaneous, and that $-\\Delta G$ is the **maximum useful work** a reaction can deliver. A galvanic cell is a machine for extracting exactly that work as electricity. So cell potential and free energy must be two views of the same quantity.',
        },
        {
          type: 'p',
          text: 'The bridge is the definition of the volt. Moving a charge $q$ through a potential difference $E$ takes energy $qE$ (one volt is one joule per coulomb). To count the charge in a reaction, use the [[gchem-faraday-constant|Faraday constant]], the charge on one mole of electrons:',
        },
        {
          type: 'math',
          tex: 'F = N_A\\, e = (6.022 \\times 10^{23}\\ \\text{mol}^{-1})(1.602 \\times 10^{-19}\\ \\text{C}) = 96{,}485\\ \\text{C/mol}',
          caption: 'Michael Faraday measured this "quantity of electricity per equivalent" in the 1830s, long before anyone knew electrons existed.',
        },
        {
          type: 'derivation',
          title: 'From volts to free energy',
          steps: [
            { tex: 'q = nF', why: 'If the balanced equation transfers $n$ moles of electrons, the charge moved through the circuit is $n$ times the Faraday constant.' },
            { tex: 'w_{\\text{elec, max}} = qE = nFE', why: 'Electrical work delivered to the circuit = charge × potential difference. It is a maximum because it assumes no current is wasted as heat inside the cell (the reversible limit).' },
            { tex: '-\\Delta G = w_{\\text{max}} = nFE', why: 'The maximum useful work a reaction can do at constant $T$ and $P$ is $-\\Delta G$ (unit 10).' },
            { tex: '\\Delta G = -nFE \\qquad \\Delta G^\\circ = -nFE^\\circ', why: 'Rearrange. Under standard conditions every quantity gets a degree sign.' },
            { tex: '[\\text{mol e}^-]\\left[\\tfrac{\\text{C}}{\\text{mol e}^-}\\right]\\left[\\tfrac{\\text{J}}{\\text{C}}\\right] = \\text{J}', why: 'Units check: a volt is a joule per coulomb, so the result is joules (per mole of reaction as written).' },
          ],
        },
        {
          type: 'derivation',
          title: 'Free energy of the Daniell cell',
          steps: [
            { tex: '\\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)}, \\quad n = 2', why: 'Each Zn atom gives 2 electrons to one $\\ce{Cu^2+}$, so 2 mol of electrons flow per mole of reaction.' },
            { tex: '\\Delta G^\\circ = -(2\\ \\text{mol e}^-)(96{,}485\\ \\tfrac{\\text{C}}{\\text{mol e}^-})(1.099\\ \\tfrac{\\text{J}}{\\text{C}})', why: 'Substitute, writing volts as J/C so the units visibly cancel. $E^\\circ = 1.099$ V from the previous lesson.' },
            { tex: '= -2.121 \\times 10^{5}\\ \\text{J} = -212.1\\ \\text{kJ}', why: 'Per mole of reaction as written. Negative, as it must be for a spontaneous cell.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\Delta G$ scales but $E$ does not',
          text: 'Double the Daniell equation ($\\ce{2Zn + 2Cu^2+ -> \\dots}$) and $n$ becomes 4, so $\\Delta G^\\circ$ doubles to $-424$ kJ, because twice as much reaction releases twice as much energy. $E^\\circ$ stays 1.099 V, because the energy *per coulomb* is unchanged. The factor $n$ is where the bookkeeping of "how much" lives. The minus sign encodes the spontaneity rule: positive $E^\\circ$ gives negative $\\Delta G^\\circ$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'The relation also runs the other way. For the hydrogen fuel cell, $\\ce{2H2(g) + O2(g) -> 2H2O(l)}$ has $\\Delta G^\\circ = 2(-237.1) = -474.2$ kJ (from free energies of formation) and $n = 4$, so $E^\\circ = \\frac{474{,}200\\ \\text{J}}{4 \\times 96{,}485\\ \\text{C}} = 1.229$ V, exactly the $\\ce{O2/H2O}$ entry in the table. Thermodynamic tables and potential tables are the same data in different units.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'For $\\ce{Cu(s) + 2Ag+(aq) -> Cu^2+(aq) + 2Ag(s)}$, $E^\\circ_{\\text{cell}} = 0.7996 - 0.337 = 0.4626$ V. Calculate $\\Delta G^\\circ$ in kJ (per mole of reaction as written) with $F = 96{,}485$ C/mol. Give three significant figures.',
      hint: 'How many electrons does one Cu atom give up? That is $n$. Then $\\Delta G^\\circ = -nFE^\\circ$, and divide by 1000 for kJ.',
      label: '$\\Delta G^\\circ =$',
      unit: 'kJ',
      answer: '-2*96485*0.4626/1000',
      answerTex: '-89.3\\ \\text{kJ}',
      tolerance: 0.06,
      explanation: 'Copper goes from 0 to +2 and each of the two $\\ce{Ag+}$ ions takes one electron, so $n = 2$. $\\Delta G^\\circ = -(2)(96{,}485\\ \\text{C/mol})(0.4626\\ \\text{J/C}) = -89{,}270$ J $= -89.3$ kJ. A common slip is $n = 1$ (because each $\\ce{Ag+}$ gains one electron), which gives half the right answer; $n$ counts all electrons transferred in the balanced equation.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Potential and the equilibrium constant',
      blocks: [
        {
          type: 'p',
          text: 'Unit 10 also gave you $\\Delta G^\\circ = -RT\\ln K$. Two expressions for the same $\\Delta G^\\circ$ means the cell potential is secretly an equilibrium constant:',
        },
        {
          type: 'derivation',
          title: 'Connecting $E^\\circ$ and $K$',
          steps: [
            { tex: '-nFE^\\circ = -RT\\ln K', why: 'Both sides equal $\\Delta G^\\circ$.' },
            { tex: 'E^\\circ = \\frac{RT}{nF}\\ln K', why: 'Divide both sides by $-nF$.' },
            { tex: '\\frac{RT}{F} = \\frac{(8.314\\ \\text{J mol}^{-1}\\text{K}^{-1})(298.15\\ \\text{K})}{96{,}485\\ \\text{C mol}^{-1}} = 0.025693\\ \\text{V}', why: 'At 25 °C. J/C is a volt, and the mol and K units cancel.' },
            { tex: '\\ln K = \\ln 10 \\cdot \\log K = 2.3026\\,\\log K', why: 'Change of base: chemists usually prefer base-10 logarithms (see [[common-logarithm]]).' },
            { tex: 'E^\\circ = \\frac{0.05916\\ \\text{V}}{n}\\log K \\quad (25\\ ^\\circ\\text{C})', why: '$0.025693 \\times 2.3026 = 0.05916$ V, often rounded to 0.0592 V. Equivalently, $\\log K = \\frac{nE^\\circ}{0.05916\\ \\text{V}}$.' },
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg"><line x1="211.4" y1="71.5" x2="88.6" y2="226.5" stroke="currentColor" stroke-width="2"/><line x1="248.6" y1="71.5" x2="371.4" y2="226.5" stroke="currentColor" stroke-width="2"/><line x1="100" y1="250" x2="360" y2="250" stroke="currentColor" stroke-width="2"/><circle cx="230" cy="48" r="28" class="f-purple" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/><circle cx="70" cy="250" r="28" class="f-blue" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/><circle cx="390" cy="250" r="28" class="f-green" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/><text x="230" y="55" text-anchor="middle" font-size="18" font-weight="600" class="t-purple">ΔG°</text><text x="70" y="257" text-anchor="middle" font-size="18" font-weight="600" class="t-blue">E°</text><text x="390" y="257" text-anchor="middle" font-size="18" font-weight="600" class="t-green">K</text><text x="0" y="0" transform="translate(124 131) rotate(-51.6)" text-anchor="middle" font-size="14">ΔG° = −nFE°</text><text x="0" y="0" transform="translate(336 131) rotate(51.6)" text-anchor="middle" font-size="14">ΔG° = −RT ln K</text><text x="230" y="272" text-anchor="middle" font-size="14">E° = (RT/nF) ln K</text><text x="230" y="292" text-anchor="middle" font-size="12" class="t-gray">at 25 °C: E° = (0.0592 V/n) log K</text><text x="230" y="170" text-anchor="middle" font-size="12" class="t-gray">measure any one,</text><text x="230" y="186" text-anchor="middle" font-size="12" class="t-gray">calculate the other two</text></svg>`,
          alt: 'A triangle with Delta G degree at the top, E degree at the bottom left and K at the bottom right. The left edge is labeled Delta G degree equals minus n F E degree; the right edge Delta G degree equals minus R T ln K; the bottom edge E degree equals R T over n F ln K, and at 25 degrees C, E degree equals 0.0592 volts over n times log K. The center reads: measure any one, calculate the other two.',
          caption: 'Three faces of one fact. A voltmeter reading gives you the free energy change and the equilibrium constant of the cell reaction, often far more precisely than measuring tiny equilibrium concentrations.',
        },
        {
          type: 'table',
          headers: ['$E^\\circ_{\\text{cell}}$', '$\\Delta G^\\circ$', '$K$', 'At standard conditions'],
          rows: [
            ['$> 0$', '$< 0$', '$> 1$', 'forward reaction spontaneous; products favored'],
            ['$= 0$', '$= 0$', '$= 1$', 'at equilibrium already'],
            ['$< 0$', '$> 0$', '$< 1$', 'reverse reaction spontaneous; reactants favored'],
          ],
          caption: 'The signs always line up this way, because $\\Delta G^\\circ = -nFE^\\circ = -RT\\ln K$.',
        },
        {
          type: 'derivation',
          title: 'Equilibrium constant of the Daniell cell',
          steps: [
            { tex: '\\log K = \\frac{nE^\\circ}{0.05916\\ \\text{V}} = \\frac{2(1.099\\ \\text{V})}{0.05916\\ \\text{V}}', why: 'Rearranged 25 °C form; $n = 2$.' },
            { tex: '= 37.15', why: 'Volts cancel; $\\log K$ is dimensionless.' },
            { tex: 'K = 10^{37.15} = 1.4 \\times 10^{37}', why: 'Undo the base-10 logarithm. Keep 2 significant figures: digits after the decimal point in $\\log K$ set the precision of $K$.' },
          ],
          result: 'At equilibrium $\\frac{[\\ce{Zn^2+}]}{[\\ce{Cu^2+}]} = 1.4 \\times 10^{37}$: essentially every copper ion has been reduced. A one-volt cell potential corresponds to an overwhelmingly product-favored reaction.',
        },
        {
          type: 'graph',
          x: [-0.5, 1.5],
          y: [-30, 80],
          xStep: 0.25,
          yStep: 10,
          functions: [{ expr: 'n*x/0.05916', label: '$\\log K = \\frac{nE^\\circ}{0.05916}$', color: 'blue' }],
          points: [{ x: 'v', y: 'n*v/0.05916', label: 'your cell', color: 'red' }],
          sliders: [
            { name: 'n', min: 1, max: 4, step: 1, value: 2, label: 'electrons transferred $n$' },
            { name: 'v', min: -0.4, max: 1.4, step: 0.01, value: 0.1, label: '$E^\\circ$ (V)' },
          ],
          readouts: [{ label: '$\\log K =$', expr: 'n*v/0.05916', digits: 3 }],
          caption: 'Horizontal axis: $E^\\circ$ in volts; vertical axis: $\\log K$. A cell potential of just 0.10 V with $n = 2$ already gives $K \\approx 10^{3.4} \\approx 2400$. Each extra 59 mV multiplies $K$ by 10 when $n = 1$, and by 100 when $n = 2$. Small voltages mean huge equilibrium constants.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Calculate $K$ at 25 °C for $\\ce{Cu(s) + 2Ag+(aq) -> Cu^2+(aq) + 2Ag(s)}$, $E^\\circ = 0.4626$ V. Use $E^\\circ = \\frac{0.05916\\ \\text{V}}{n}\\log K$ and give two significant figures (scientific notation such as `3.1e12` is fine).',
      hint: '$\\log K = \\frac{nE^\\circ}{0.05916}$ with $n = 2$; then $K = 10^{\\log K}$.',
      label: '$K =$',
      answer: '10^(2*0.4626/0.05916)',
      answerTex: '4.4 \\times 10^{15}',
      tolerance: 1.5e14,
      explanation: '$\\log K = \\frac{2 \\times 0.4626}{0.05916} = 15.64$, so $K = 10^{15.64} = 4.4 \\times 10^{15}$. At equilibrium, $\\frac{[\\ce{Cu^2+}]}{[\\ce{Ag+}]^2} = 4.4 \\times 10^{15}$: copper strips silver ions out of solution almost completely, the reaction behind the classic "silver tree" demonstration. Note how sensitive $K$ is to rounding: using 0.0592 V gives $4.2 \\times 10^{15}$, so keep extra digits in $\\log K$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Away from standard conditions: the Nernst equation',
      blocks: [
        {
          type: 'p',
          text: 'Real cells are rarely at 1 M. As a battery runs, reactants are used up and products pile up, so its voltage changes. Unit 10 handled nonstandard conditions with the reaction quotient $Q$ (same form as $K$, but with the current concentrations; pure solids and liquids are left out, gases enter as partial pressures in bar):',
        },
        {
          type: 'math',
          tex: '\\Delta G = \\Delta G^\\circ + RT\\ln Q',
        },
        {
          type: 'derivation',
          title: 'Deriving the Nernst equation',
          steps: [
            { tex: '-nFE = -nFE^\\circ + RT\\ln Q', why: 'Replace $\\Delta G$ with $-nFE$ and $\\Delta G^\\circ$ with $-nFE^\\circ$.' },
            { tex: 'E = E^\\circ - \\frac{RT}{nF}\\ln Q', why: 'Divide every term by $-nF$. This is the [[gchem-nernst-equation|Nernst equation]] (Walther Nernst, 1889).' },
            { tex: 'E = E^\\circ - \\frac{0.05916\\ \\text{V}}{n}\\log Q \\quad (25\\ ^\\circ\\text{C})', why: 'Same constants as before: $\\frac{RT}{F}\\ln 10 = 0.05916$ V at 298.15 K.' },
          ],
        },
        {
          type: 'derivation',
          title: 'A Daniell cell with dilute copper',
          steps: [
            { tex: '\\ce{Zn(s) | Zn^2+(1.0 M) || Cu^2+(0.010 M) | Cu(s)}', why: 'The copper side has been run down to 0.010 M; zinc ion is at 1.0 M.' },
            { tex: 'Q = \\frac{[\\ce{Zn^2+}]}{[\\ce{Cu^2+}]} = \\frac{1.0}{0.010} = 100', why: 'Products over reactants from $\\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$. Zn and Cu are solids, so they do not appear.' },
            { tex: 'E = 1.099\\ \\text{V} - \\frac{0.05916\\ \\text{V}}{2}\\log 100', why: 'Nernst equation with $n = 2$.' },
            { tex: '= 1.099 - (0.02958)(2) = 1.040\\ \\text{V}', why: '$\\log 100 = 2$. The cell lost about 59 mV.' },
          ],
          result: 'A hundredfold drop in the copper concentration costs only 0.059 V. The logarithm makes cell voltages remarkably insensitive to concentration.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the voltage falls as $Q$ rises',
          text: 'More product and less reactant (larger $Q$) means the reaction has less "left to go", so it pushes electrons less hard: Le Châtelier\'s principle, expressed in volts. When $Q < 1$ (reactant-rich), $\\log Q < 0$ and $E$ is **larger** than $E^\\circ$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Getting $n$ and $Q$ right',
          text: 'Use one balanced overall equation for both: $n$ is the number of electrons transferred in **that** equation and $Q$ uses **its** coefficients as exponents. Doubling the equation squares $Q$ and doubles $n$, so $\\frac{1}{n}\\log Q$ (and $E$) comes out the same. Leave out solids and pure liquids, and never put the anode and cathode concentrations in upside down: $Q$ is products over reactants of the cell reaction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'For $\\ce{Cu(s) + 2Ag+(aq) -> Cu^2+(aq) + 2Ag(s)}$ ($E^\\circ = 0.4626$ V), find $E$ at 25 °C when $[\\ce{Cu^2+}] = 0.10$ M and $[\\ce{Ag+}] = 0.050$ M. Give three decimal places.',
      hint: '$Q = \\frac{[\\ce{Cu^2+}]}{[\\ce{Ag+}]^2}$, because $\\ce{Ag+}$ has coefficient 2. Then $E = E^\\circ - \\frac{0.05916}{2}\\log Q$.',
      label: '$E =$',
      unit: 'V',
      answer: '0.4626 - 0.05916/2*log(0.10/0.050^2)',
      answerTex: '0.415\\ \\text{V}',
      tolerance: 0.0006,
      explanation: '$Q = \\frac{0.10}{(0.050)^2} = \\frac{0.10}{0.0025} = 40$, so $\\log Q = 1.602$. Then $E = 0.4626 - (0.02958)(1.602) = 0.4626 - 0.0474 = 0.415$ V. Forgetting to square $[\\ce{Ag+}]$ gives $Q = 2$ and $E = 0.454$ V. The voltage is below $E^\\circ$ because the silver ion, a reactant, is dilute.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student calculates the potential of $\\ce{Zn(s) | Zn^2+(0.40 M) || Cu^2+(0.010 M) | Cu(s)}$ at 25 °C. Tap the first line that is wrong.',
      lines: [
        '$E^\\circ = 0.337 - (-0.7618) = 1.099$ V',
        'Cell reaction: $\\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$, so $n = 2$',
        '$Q = \\frac{[\\ce{Cu^2+}]}{[\\ce{Zn^2+}]} = \\frac{0.010}{0.40} = 0.025$',
        '$E = 1.099 - \\frac{0.0592}{2}\\log(0.025) = 1.099 + 0.047 = 1.146$ V',
      ],
      errorLines: [3],
      explanation: 'Line 3 has $Q$ upside down. $Q$ is products over reactants: $\\ce{Zn^2+}$ is a product and $\\ce{Cu^2+}$ a reactant, so $Q = \\frac{0.40}{0.010} = 40$. Then $E = 1.099 - (0.0296)(1.602) = 1.099 - 0.047 = 1.051$ V. A sanity check would have caught it: the reactant ($\\ce{Cu^2+}$) is dilute and the product is fairly concentrated, so $E$ must be **below** $E^\\circ$, not above it.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The graph of $E$ against $\\log Q$, and why batteries die suddenly',
      blocks: [
        {
          type: 'p',
          text: 'At 25 °C the Nernst equation is a straight line in $\\log Q$: intercept $E^\\circ$, slope $-\\frac{0.05916}{n}$ V per decade. Play with $n$ and $E^\\circ$:',
        },
        {
          type: 'graph',
          x: [-10, 60],
          y: [-0.6, 1.6],
          xStep: 10,
          yStep: 0.2,
          functions: [{ expr: 'v - 0.05916/n*x', label: '$E = E^\\circ - \\frac{0.05916}{n}\\log Q$', color: 'blue' }],
          points: [
            { x: 0, y: 'v', label: 'Q = 1: E = E°', color: 'purple' },
            { x: 'n*v/0.05916', y: 0, label: 'Q = K: E = 0', color: 'red' },
          ],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [
            { name: 'n', min: 1, max: 3, step: 1, value: 2, label: 'electrons transferred $n$' },
            { name: 'v', min: 0.2, max: 1.5, step: 0.01, value: 1.1, label: '$E^\\circ$ (V)' },
          ],
          readouts: [
            { label: 'slope (V per decade) $=$', expr: '-0.05916/n', digits: 4 },
            { label: '$\\log K =$', expr: 'n*v/0.05916', digits: 3 },
          ],
          caption: 'Horizontal axis: $\\log Q$; vertical axis: cell potential $E$ in volts. The line crosses $E = 0$ exactly at $\\log Q = \\log K$: a cell at equilibrium is a dead battery. Larger $n$ makes the line flatter, so the voltage is even less sensitive to concentration.',
        },
        {
          type: 'p',
          text: 'Notice the scale. For the Daniell cell, $E$ falls from 1.10 V to zero only after $Q$ has grown by 37 powers of ten. So what does a real discharge look like? Start both solutions at 1.0 M and let a fraction $f$ of the copper ions react. Then $[\\ce{Zn^2+}] = 1 + f$, $[\\ce{Cu^2+}] = 1 - f$, and',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0.9, 1.2],
          xStep: 0.1,
          yStep: 0.05,
          functions: [{ expr: '1.099 - 0.02958*log((1 + x)/(1 - x))', label: '$E$ (V)', color: 'blue', domain: [0, 0.99999] }],
          hlines: [{ y: 1.099, label: 'E° = 1.099 V', color: 'gray' }],
          caption: 'Horizontal axis: fraction $f$ of the $\\ce{Cu^2+}$ used up; vertical axis: cell potential. The voltage sags by only about 70 mV across 99% of the discharge, then plunges as the last copper ions run out and $\\log Q$ shoots toward infinity.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why your battery gauge cannot just read the voltage',
          text: 'Because the voltage curve is so flat, phones, drones and radios estimate charge by **coulomb counting**: integrating the measured current over time, $q = \\int I\\,dt$, in firmware, then correcting with the voltage near the ends of the curve where it finally moves. A game\'s "battery" meter that drops linearly with time is modeling the coulomb count, not the voltage.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'At 25 °C, a cell with $n = 2$ has its reaction quotient $Q$ increased by a factor of 10. How does the cell potential change?',
      options: [
        { text: 'It decreases by 0.0592 V', why: 'That is the change per factor of 10 when $n = 1$. With $n = 2$ the slope is halved.' },
        { text: 'It decreases by 0.0296 V', correct: true, why: '$\\Delta E = -\\frac{0.05916}{2}\\Delta(\\log Q) = -0.02958 \\times 1$ V.' },
        { text: 'It increases by 0.0296 V', why: 'Wrong sign: increasing $Q$ (more products) lowers $E$, because of the minus sign in the Nernst equation.' },
        { text: 'It decreases to one tenth of its value', why: '$E$ depends on $\\log Q$, not on $Q$ itself, so multiplying $Q$ by 10 subtracts a fixed amount rather than dividing $E$.' },
      ],
      explanation: 'The Nernst equation is linear in $\\log Q$ with slope $-\\frac{0.05916}{n}$ V. Multiplying $Q$ by 10 raises $\\log Q$ by exactly 1, so $E$ drops by $\\frac{0.05916}{2} = 0.0296$ V, about 30 mV, regardless of where you start.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Order the steps to find a cell\'s potential under nonstandard conditions.',
      lines: [
        'Calculate $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$',
        'Write the balanced overall reaction and read off $n$',
        'Write $Q$ (products over reactants, omitting solids and liquids) and evaluate it',
        'Substitute into $E = E^\\circ - \\frac{0.05916}{n}\\log Q$',
        'Check the sign: $E < E^\\circ$ when $Q > 1$, $E > E^\\circ$ when $Q < 1$',
      ],
      distractors: ['Multiply $E^\\circ$ by $n$ before using the Nernst equation'],
      explanation: 'Standard potential first, then the balanced equation (which fixes both $n$ and the exponents in $Q$), then $Q$, then the Nernst equation, and finally a Le Châtelier sanity check on the direction of the change. $E^\\circ$ is never multiplied by $n$; $n$ only appears in the denominator of the correction term.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Concentration cells: voltage from a difference in concentration',
      blocks: [
        {
          type: 'p',
          text: 'What if both half-cells are the same, copper in copper(II) solution, but at different concentrations? Then $E^\\circ = 0$ (the two standard potentials are identical), yet a voltmeter shows a voltage. This is a [[gchem-concentration-cell|concentration cell]], and its whole voltage comes from the Nernst term.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 405" xmlns="http://www.w3.org/2000/svg"><path d="M110 130 V40 H238" fill="none" stroke="currentColor" stroke-width="2"/><path d="M282 40 H410 V130" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="260" cy="40" r="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="260" y="46" text-anchor="middle" font-size="16" font-weight="600">V</text><text x="330" y="64" text-anchor="middle" font-size="13" font-weight="600">0.059 V</text><polyline points="166,34 176,40 166,46" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><text x="160" y="28" text-anchor="middle" font-size="14" class="t-blue">e⁻</text><polyline points="346,34 356,40 346,46" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><text x="350" y="28" text-anchor="middle" font-size="14" class="t-blue">e⁻</text><text x="175" y="64" text-anchor="middle" font-size="12" class="t-blue">electron flow</text><rect x="40" y="185" width="150" height="145" class="f-blue" fill="currentColor" fill-opacity="0.06"/><rect x="330" y="185" width="150" height="145" class="f-blue" fill="currentColor" fill-opacity="0.32"/><path d="M40 150 V330 H190 V150" fill="none" stroke="currentColor" stroke-width="2"/><path d="M330 150 V330 H480 V150" fill="none" stroke="currentColor" stroke-width="2"/><rect x="95" y="130" width="30" height="168" class="f-orange" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/><rect x="395" y="130" width="30" height="168" class="f-orange" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/><text x="110" y="232" text-anchor="middle" font-size="14" font-weight="600">Cu</text><text x="410" y="232" text-anchor="middle" font-size="14" font-weight="600">Cu</text><path d="M150 255 V100 H370 V255" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M172 255 V122 H348 V255" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="150" y1="255" x2="172" y2="255" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2"/><line x1="348" y1="255" x2="370" y2="255" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2"/><text x="260" y="95" text-anchor="middle" font-size="12.5">salt bridge (KNO₃)</text><text x="215" y="116" text-anchor="middle" font-size="12" class="t-purple">← NO₃⁻</text><text x="305" y="116" text-anchor="middle" font-size="12" class="t-red">K⁺ →</text><text x="70" y="205" text-anchor="middle" font-size="12">Cu²⁺</text><text x="455" y="205" text-anchor="middle" font-size="12">Cu²⁺</text><text x="115" y="320" text-anchor="middle" font-size="12" class="t-gray">0.010 M Cu²⁺</text><text x="405" y="320" text-anchor="middle" font-size="12" class="t-gray">1.0 M Cu²⁺</text><text x="115" y="354" text-anchor="middle" font-size="14" font-weight="600">Anode (−): oxidation</text><text x="115" y="376" text-anchor="middle" font-size="13">Cu → Cu²⁺ + 2e⁻</text><text x="405" y="354" text-anchor="middle" font-size="14" font-weight="600">Cathode (+): reduction</text><text x="405" y="376" text-anchor="middle" font-size="13">Cu²⁺ + 2e⁻ → Cu</text><text x="115" y="396" text-anchor="middle" font-size="12" class="t-gray">dilute side: [Cu²⁺] rises</text><text x="405" y="396" text-anchor="middle" font-size="12" class="t-gray">concentrated side: [Cu²⁺] falls</text></svg>`,
          alt: 'Concentration cell with two copper electrodes. Left beaker: 0.010 M Cu2+, labeled anode, negative, oxidation, Cu to Cu2+ plus 2 electrons, dilute side, Cu2+ concentration rises. Right beaker: 1.0 M Cu2+, labeled cathode, positive, reduction, Cu2+ plus 2 electrons to Cu, concentrated side, Cu2+ concentration falls. A voltmeter between them reads 0.059 V, electrons flow left to right, and a KNO3 salt bridge connects the solutions.',
          caption: 'The cell runs in the direction that makes the two concentrations more alike: copper dissolves on the dilute side and plates out on the concentrated side.',
        },
        {
          type: 'derivation',
          title: 'The copper concentration cell',
          steps: [
            { tex: '\\ce{Cu(s) | Cu^2+(0.010 M) || Cu^2+(1.0 M) | Cu(s)}', why: 'Dilute side as the anode, concentrated side as the cathode.' },
            { tex: '\\ce{Cu^2+(1.0 M) -> Cu^2+(0.010 M)}', why: 'Add the half-reactions: copper is oxidized on the left and reduced on the right, so the net change is just copper ions moving from concentrated to dilute. $n = 2$.' },
            { tex: 'Q = \\frac{[\\ce{Cu^2+}]_{\\text{dilute}}}{[\\ce{Cu^2+}]_{\\text{conc}}} = \\frac{0.010}{1.0} = 0.010', why: 'Product (the ion appearing on the dilute side) over reactant (the ion consumed on the concentrated side).' },
            { tex: 'E = 0 - \\frac{0.05916\\ \\text{V}}{2}\\log(0.010) = -(0.02958)(-2) = +0.0592\\ \\text{V}', why: '$E^\\circ = 0$, and $\\log 0.010 = -2$. Positive, so the cell runs spontaneously as written.' },
          ],
          result: 'The cell keeps running, with a falling voltage, until both sides reach the same concentration ($Q = 1$, $E = 0$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Where does the energy come from?',
          text: 'No new chemical bonds form; $\\Delta H \\approx 0$. The driving force is entirely entropic: ions spreading from a concentrated region into a dilute one is the same tendency that makes a drop of dye spread through water (unit 10). A concentration cell harvests that tendency as electrical work, with $\\Delta G = RT\\ln Q < 0$ per mole of ions moved.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Calculate the potential at 25 °C of the concentration cell $\\ce{Ag(s) | Ag+(0.0010 M) || Ag+(0.10 M) | Ag(s)}$. Give three decimal places.',
      hint: '$E^\\circ = 0$ and $n = 1$. $Q = \\frac{[\\ce{Ag+}]_{\\text{dilute}}}{[\\ce{Ag+}]_{\\text{conc}}}$.',
      label: '$E =$',
      unit: 'V',
      answer: '-0.05916*log(0.0010/0.10)',
      answerTex: '0.118\\ \\text{V}',
      tolerance: 0.0006,
      explanation: 'Silver dissolves on the dilute side (anode) and plates out on the concentrated side (cathode): net $\\ce{Ag+(0.10 M) -> Ag+(0.0010 M)}$ with $n = 1$. $Q = \\frac{0.0010}{0.10} = 0.010$, so $E = 0 - 0.05916\\log(0.010) = 0.05916 \\times 2 = 0.118$ V. Compare the copper cell with the same 100-fold ratio: 0.059 V, half as much, because copper transfers two electrons per ion.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'In a concentration cell, the electrode dipping into the more concentrated solution is the anode.',
      answer: false,
      explanation: 'The concentrated side is the **cathode**. The cell runs to even out the concentrations: metal ions are reduced and removed from the concentrated solution, and metal is oxidized into the dilute solution, raising its concentration. Oxidation on the dilute side makes that electrode the anode (the negative terminal).',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Concentration cells at work: pH meters and nerve cells',
      blocks: [
        {
          type: 'p',
          text: '**pH meters.** A hydrogen electrode responds to $[\\ce{H+}]$, so pairing an unknown solution with a standard one makes a concentration cell whose voltage reads out the [[ph|pH]].',
        },
        {
          type: 'derivation',
          title: 'Voltage is proportional to pH',
          steps: [
            { tex: '\\ce{Pt | H2(1 bar) | H+(x M) || H+(1 M) | H2(1 bar) | Pt}', why: 'The unknown solution (usually less acidic than 1 M) is the dilute side, so it is the anode.' },
            { tex: '\\ce{2H+(1 M) -> 2H+(x M)}, \\quad n = 2, \\quad E^\\circ = 0', why: 'Adding the half-reactions $\\ce{H2 -> 2H+(x) + 2e-}$ and $\\ce{2H+(1 M) + 2e- -> H2}$; the $\\ce{H2}$ cancels.' },
            { tex: 'E = -\\frac{0.05916}{2}\\log\\frac{x^2}{1^2} = -0.05916\\log x', why: 'Coefficient 2 gives squares in $Q$; then $\\log x^2 = 2\\log x$ cancels the 2 in $n$.' },
            { tex: 'E = (0.05916\\ \\text{V})\\,\\text{pH}', why: 'Since $\\text{pH} = -\\log[\\ce{H+}] = -\\log x$.' },
            { tex: 'E = 0.414\\ \\text{V} \\implies \\text{pH} = \\frac{0.414}{0.05916} = 7.00', why: 'Every pH unit adds 59.2 mV at 25 °C.' },
          ],
        },
        {
          type: 'p',
          text: 'Hydrogen gas is impractical in the field, so a real pH electrode uses a thin **glass membrane** whose surface exchanges $\\ce{H+}$ with the solution. The voltage across the glass depends on the $[\\ce{H+}]$ ratio between the inside filling solution and the sample, giving the same 59 mV per pH unit (at 25 °C), measured against a built-in reference electrode. You calibrate with two buffers to fix the intercept and slope, and the meter corrects the slope for temperature because it is proportional to $T$. Water-purification teams check pH this way before and after treatment, since disinfection with chlorine works best in a particular pH range.',
        },
        {
          type: 'p',
          text: '**Nerve cells.** Every neuron is a concentration cell. Pumps in the membrane keep $[\\ce{K+}]$ about 140 mM inside and 5 mM outside, while $\\ce{Na+}$ is about 145 mM outside and 12 mM inside. At rest the membrane is permeable mainly to $\\ce{K+}$, so the voltage settles near the value at which the electrical pull on $\\ce{K+}$ exactly balances its tendency to leak out. Physiologists write it as the potential of the inside relative to the outside, for an ion of charge $z$:',
        },
        {
          type: 'math',
          tex: 'E_{\\text{ion}} = \\frac{RT}{zF}\\ln\\frac{[\\text{ion}]_{\\text{out}}}{[\\text{ion}]_{\\text{in}}}',
          caption: 'The Nernst equation applied to a membrane, with $z$ playing the role of $n$.',
        },
        {
          type: 'derivation',
          title: 'Potassium equilibrium potential at body temperature',
          steps: [
            { tex: '\\frac{RT}{F} = \\frac{(8.314)(310\\ \\text{K})}{96{,}485} = 0.02671\\ \\text{V} = 26.7\\ \\text{mV}', why: 'Body temperature is 37 °C = 310 K, so the 25 °C constant 0.0592 does not apply.' },
            { tex: 'E_{\\ce{K}} = (26.7\\ \\text{mV})\\ln\\frac{5}{140} = (26.7)(-3.33)\\ \\text{mV}', why: '$z = +1$ for $\\ce{K+}$.' },
            { tex: '= -89\\ \\text{mV}', why: 'The inside is negative: positive $\\ce{K+}$ has leaked out until the negative interior holds the rest back.' },
          ],
          result: 'Measured resting potentials are about $-70$ mV, close to $E_{\\ce{K}}$ but pulled slightly positive by a small sodium leak. When a nerve fires, sodium channels open and the membrane swings toward the sodium potential, which is strongly positive; that spike is the action potential carrying every signal in your nervous system.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Calculate the sodium equilibrium potential $E_{\\ce{Na}}$ (inside relative to outside) for a neuron at 37 °C ($T = 310$ K) with $[\\ce{Na+}]_{\\text{out}} = 145$ mM and $[\\ce{Na+}]_{\\text{in}} = 12$ mM. Use $R = 8.314$ J mol⁻¹ K⁻¹ and $F = 96{,}485$ C/mol. Answer in millivolts to the nearest mV.',
      hint: '$E = \\frac{RT}{zF}\\ln\\frac{[\\ce{Na+}]_{\\text{out}}}{[\\ce{Na+}]_{\\text{in}}}$ with $z = 1$; multiply volts by 1000 for mV.',
      label: '$E_{\\ce{Na}} =$',
      unit: 'mV',
      answer: '8.314*310/96485*ln(145/12)*1000',
      answerTex: '+67\\ \\text{mV}',
      tolerance: 0.6,
      explanation: '$\\frac{RT}{F} = \\frac{8.314 \\times 310}{96{,}485} = 0.02671$ V and $\\ln\\frac{145}{12} = \\ln 12.08 = 2.492$, so $E_{\\ce{Na}} = 0.02671 \\times 2.492 = 0.0666$ V $= +67$ mV. Positive, because sodium is concentrated **outside**: the inside would have to be positive to stop $\\ce{Na+}$ rushing in. When sodium channels open during an action potential, the membrane voltage races from about $-70$ mV toward this value.',
    },
  ],
  takeaways: [
    '$\\Delta G = -nFE$: a cell\'s voltage is its free energy change per coulomb, with $F = 96{,}485$ C/mol and $n$ the electrons transferred in the balanced equation.',
    '$E^\\circ = \\frac{RT}{nF}\\ln K$, or $E^\\circ = \\frac{0.05916}{n}\\log K$ at 25 °C. Positive $E^\\circ$ ⇔ negative $\\Delta G^\\circ$ ⇔ $K > 1$.',
    'Nernst equation: $E = E^\\circ - \\frac{RT}{nF}\\ln Q = E^\\circ - \\frac{0.05916}{n}\\log Q$ (25 °C). $E$ falls as products build up and reaches 0 when $Q = K$.',
    '$E$ is linear in $\\log Q$, so a tenfold change in $Q$ shifts $E$ by only 59/$n$ mV; battery voltage stays nearly flat and collapses only as a reactant runs out.',
    'A concentration cell has $E^\\circ = 0$; the dilute side is the anode, and the cell runs until the concentrations are equal.',
    'pH electrodes (59.2 mV per pH unit at 25 °C) and nerve-cell membrane potentials (about $-70$ mV at rest) are concentration-cell potentials.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 17: Electrochemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/17-introduction',
      source: 'openstax',
      note: 'Section 17.4 covers $\\Delta G^\\circ$, $K$ and $E^\\circ$, the Nernst equation and concentration cells, with worked examples.',
    },
    {
      title: 'Wikipedia — Nernst equation',
      url: 'https://en.wikipedia.org/wiki/Nernst_equation',
      source: 'wikipedia',
      note: 'Derivations, the role of activities instead of concentrations, and the membrane-potential form used in biology.',
    },
    {
      title: 'Wikipedia — Resting potential',
      url: 'https://en.wikipedia.org/wiki/Resting_potential',
      source: 'wikipedia',
      note: 'How ion pumps and selective permeability turn a neuron into a concentration cell.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "Nernst equation" for alternative explanations and many extra practice problems with solutions.',
    },
  ],
};
