import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-batteries-electrolysis',
  title: 'Batteries, Corrosion and Electrolysis',
  summary: 'Electrochemistry in the real world: alkaline, lead–acid and lithium-ion batteries, fuel cells, rust and how to stop it, and electrolysis, from silver plating to aluminum smelting with Faraday\'s laws.',
  minutes: 22,
  objectives: [
    'Write the electrode reactions of alkaline, lead–acid and lithium-ion cells and explain how intercalation lets a lithium-ion battery recharge',
    'Compare batteries by voltage, capacity and specific energy, and explain why specific energy matters for phones, drones and field radios',
    'Describe corrosion of iron as a galvanic cell and explain how coatings, galvanizing and sacrificial anodes prevent it',
    'Contrast electrolytic and galvanic cells and predict the products of electrolysis of molten salts, water and brine, including the role of overpotential',
    'Use Faraday\'s laws ($q = It$, $n_{e^-} = q/F$) to relate current, time and mass deposited in electroplating and aluminum production',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Batteries: galvanic cells you can carry',
      blocks: [
        {
          type: 'p',
          text: 'A [[gchem-battery|battery]] is one or more galvanic cells in a package. A **primary** battery (an alkaline AA) is used once and thrown away; a **secondary** battery (a car battery, a phone battery) can be recharged by forcing its reaction backward. Cells in series add their voltages: six 2-volt cells make a 12-volt car battery.',
        },
        {
          type: 'p',
          text: 'Two ideas from the last lesson explain good battery design. The voltage is set by $E^\\circ$ of the cell reaction. And by the Nernst equation, if the reactants and products are **pure solids** (or their concentrations cancel), $Q$ stays constant as the battery runs, so the voltage stays nearly constant until a reactant is used up.',
        },
        {
          type: 'heading',
          text: 'The alkaline cell (≈1.5 V)',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} \\text{anode:}&\\quad \\ce{Zn(s) + 2OH-(aq) -> ZnO(s) + H2O(l) + 2e-} \\\\ \\text{cathode:}&\\quad \\ce{2MnO2(s) + H2O(l) + 2e- -> Mn2O3(s) + 2OH-(aq)} \\\\ \\text{overall:}&\\quad \\ce{Zn(s) + 2MnO2(s) -> ZnO(s) + Mn2O3(s)} \\end{aligned}',
          caption: 'Powdered zinc in a potassium hydroxide gel is the anode; manganese dioxide mixed with graphite is the cathode. Water and hydroxide cancel in the overall reaction.',
        },
        {
          type: 'p',
          text: 'Every species in the overall equation is a solid, so $Q = 1$ throughout the discharge, which is why an alkaline cell holds close to its starting voltage much better than the older zinc–carbon cells it replaced.',
        },
        {
          type: 'heading',
          text: 'The lead–acid battery (≈2 V per cell)',
        },
        {
          type: 'table',
          headers: ['Electrode', 'Half-reaction (discharge)', '$E^\\circ_{\\text{red}}$ (V)'],
          rows: [
            ['anode (−), Pb', '$\\ce{Pb(s) + SO4^2-(aq) -> PbSO4(s) + 2e-}$', '$-0.3505$'],
            ['cathode (+), $\\ce{PbO2}$', '$\\ce{PbO2(s) + SO4^2-(aq) + 4H+(aq) + 2e- -> PbSO4(s) + 2H2O(l)}$', '$+1.69$'],
          ],
          caption: 'Values from OpenStax *Chemistry 2e*, Appendix L. The reduction potential listed for the anode is that of $\\ce{PbSO4 + 2e- -> Pb + SO4^2-}$.',
        },
        {
          type: 'math',
          tex: '\\ce{Pb(s) + PbO2(s) + 2SO4^2-(aq) + 4H+(aq) -> 2PbSO4(s) + 2H2O(l)}',
          caption: 'Both electrodes turn into lead(II) sulfate while sulfuric acid is consumed and water is made.',
        },
        {
          type: 'list',
          items: [
            'Because the acid is used up on discharge, the electrolyte\'s density drops; a hydrometer reading of the acid tells you the state of charge.',
            'Recharging (by the alternator, or a charger) drives the reaction backward, re-forming Pb and $\\ce{PbO2}$. Overcharging also electrolyzes water into $\\ce{H2}$ and $\\ce{O2}$, which is why battery rooms must be ventilated and kept free of sparks.',
            'Lead–acid is heavy (about 30–40 Wh/kg) but cheap, rugged and able to deliver hundreds of amperes for a starter motor. Many military vehicles run 24-volt systems by putting two 12-volt batteries in series.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why sulfuric acid spills need a base, not water alone',
          text: 'The electrolyte is roughly 30–40% sulfuric acid. Diluting a spill spreads the acid; neutralizing it with a weak base such as sodium bicarbonate removes the hazard: $\\ce{H+ + HCO3- -> H2O + CO2}$. The fizzing stops when the acid is gone.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Using the lead–acid half-reaction potentials in the table ($+1.69$ V and $-0.3505$ V), what standard voltage do **six** lead–acid cells connected in series provide? Give three significant figures.',
      hint: 'First $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$ for one cell. Series connections add voltages.',
      label: '$E^\\circ_{\\text{battery}} =$',
      unit: 'V',
      answer: '6*(1.69 - (-0.3505))',
      answerTex: '12.2\\ \\text{V}',
      tolerance: 0.06,
      explanation: 'One cell: $E^\\circ = 1.69 - (-0.3505) = 2.04$ V. Six in series: $6 \\times 2.04 = 12.2$ V, the familiar "12-volt" battery (a fully charged one reads about 12.6–12.7 V because its acid is more concentrated than 1 M). Note that adding cells **in series** multiplies the voltage, unlike multiplying a half-reaction by a coefficient, which leaves $E^\\circ$ unchanged: here you really have six separate pumps pushing the same electrons in turn.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Lithium-ion: rocking ions between layers',
      blocks: [
        {
          type: 'p',
          text: 'Lithium is the ideal battery metal on paper. It has the most negative reduction potential in the table ($-3.04$ V), so it gives the highest voltage, and it is the lightest metal (6.94 g/mol), so each gram stores a lot of charge. Pure lithium metal is dangerous to cycle, though, so the lithium-ion cell never makes the metal at all. Instead it uses [[gchem-intercalation|intercalation]]: lithium ions slide in and out between the layers of two host solids.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 372" xmlns="http://www.w3.org/2000/svg"><rect x="172" y="70" width="176" height="210" class="f-teal" fill="currentColor" fill-opacity="0.1"/><rect x="36" y="70" width="10" height="210" class="f-orange" fill="currentColor" fill-opacity="0.8"/><rect x="474" y="70" width="10" height="210" class="f-gray" fill="currentColor" fill-opacity="0.8"/><line x1="50" y1="80" x2="168" y2="80" stroke="currentColor" stroke-width="2.2" stroke-dasharray="10 3"/><line x1="50" y1="108" x2="168" y2="108" stroke="currentColor" stroke-width="2.2" stroke-dasharray="10 3"/><line x1="50" y1="136" x2="168" y2="136" stroke="currentColor" stroke-width="2.2" stroke-dasharray="10 3"/><line x1="50" y1="164" x2="168" y2="164" stroke="currentColor" stroke-width="2.2" stroke-dasharray="10 3"/><line x1="50" y1="192" x2="168" y2="192" stroke="currentColor" stroke-width="2.2" stroke-dasharray="10 3"/><line x1="50" y1="220" x2="168" y2="220" stroke="currentColor" stroke-width="2.2" stroke-dasharray="10 3"/><line x1="50" y1="248" x2="168" y2="248" stroke="currentColor" stroke-width="2.2" stroke-dasharray="10 3"/><line x1="50" y1="276" x2="168" y2="276" stroke="currentColor" stroke-width="2.2" stroke-dasharray="10 3"/><circle cx="75" cy="94" r="5.5" class="f-red" fill="currentColor"/><circle cx="140" cy="94" r="5.5" class="f-red" fill="currentColor"/><circle cx="105" cy="122" r="5.5" class="f-red" fill="currentColor"/><circle cx="75" cy="150" r="5.5" class="f-red" fill="currentColor"/><circle cx="140" cy="150" r="5.5" class="f-red" fill="currentColor"/><circle cx="105" cy="178" r="5.5" class="f-red" fill="currentColor"/><circle cx="75" cy="206" r="5.5" class="f-red" fill="currentColor"/><circle cx="140" cy="206" r="5.5" class="f-red" fill="currentColor"/><circle cx="105" cy="234" r="5.5" class="f-red" fill="currentColor"/><circle cx="75" cy="262" r="5.5" class="f-red" fill="currentColor"/><circle cx="140" cy="262" r="5.5" class="f-red" fill="currentColor"/><rect x="352" y="76" width="118" height="9" class="f-blue" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><rect x="352" y="104" width="118" height="9" class="f-blue" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><rect x="352" y="132" width="118" height="9" class="f-blue" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><rect x="352" y="160" width="118" height="9" class="f-blue" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><rect x="352" y="188" width="118" height="9" class="f-blue" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><rect x="352" y="216" width="118" height="9" class="f-blue" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><rect x="352" y="244" width="118" height="9" class="f-blue" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><rect x="352" y="272" width="118" height="9" class="f-blue" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/><circle cx="375" cy="94" r="5.5" fill="none" stroke="currentColor" class="s-red" stroke-width="1.2" stroke-dasharray="2 2"/><circle cx="410" cy="94" r="5.5" class="f-red" fill="currentColor"/><circle cx="445" cy="94" r="5.5" class="f-red" fill="currentColor"/><circle cx="375" cy="122" r="5.5" class="f-red" fill="currentColor"/><circle cx="410" cy="122" r="5.5" class="f-red" fill="currentColor"/><circle cx="445" cy="122" r="5.5" fill="none" stroke="currentColor" class="s-red" stroke-width="1.2" stroke-dasharray="2 2"/><circle cx="375" cy="150" r="5.5" class="f-red" fill="currentColor"/><circle cx="410" cy="150" r="5.5" fill="none" stroke="currentColor" class="s-red" stroke-width="1.2" stroke-dasharray="2 2"/><circle cx="445" cy="150" r="5.5" class="f-red" fill="currentColor"/><circle cx="375" cy="178" r="5.5" fill="none" stroke="currentColor" class="s-red" stroke-width="1.2" stroke-dasharray="2 2"/><circle cx="410" cy="178" r="5.5" class="f-red" fill="currentColor"/><circle cx="445" cy="178" r="5.5" class="f-red" fill="currentColor"/><circle cx="375" cy="206" r="5.5" class="f-red" fill="currentColor"/><circle cx="410" cy="206" r="5.5" class="f-red" fill="currentColor"/><circle cx="445" cy="206" r="5.5" fill="none" stroke="currentColor" class="s-red" stroke-width="1.2" stroke-dasharray="2 2"/><circle cx="375" cy="234" r="5.5" class="f-red" fill="currentColor"/><circle cx="410" cy="234" r="5.5" fill="none" stroke="currentColor" class="s-red" stroke-width="1.2" stroke-dasharray="2 2"/><circle cx="445" cy="234" r="5.5" class="f-red" fill="currentColor"/><circle cx="375" cy="262" r="5.5" fill="none" stroke="currentColor" class="s-red" stroke-width="1.2" stroke-dasharray="2 2"/><circle cx="410" cy="262" r="5.5" class="f-red" fill="currentColor"/><circle cx="445" cy="262" r="5.5" class="f-red" fill="currentColor"/><line x1="260" y1="70" x2="260" y2="280" stroke="currentColor" class="s-gray" stroke-width="2" stroke-dasharray="6 4"/><text x="260" y="296" text-anchor="middle" font-size="11.5" class="t-gray">porous separator</text><line x1="180" y1="122" x2="336" y2="122" stroke="currentColor" class="s-red" stroke-width="2"/><polyline points="328,116 338,122 328,128" fill="none" stroke="currentColor" class="s-red" stroke-width="2"/><text x="220" y="116" text-anchor="middle" font-size="12.5" class="t-red">Li⁺</text><line x1="180" y1="178" x2="336" y2="178" stroke="currentColor" class="s-red" stroke-width="2"/><polyline points="328,172 338,178 328,184" fill="none" stroke="currentColor" class="s-red" stroke-width="2"/><text x="220" y="172" text-anchor="middle" font-size="12.5" class="t-red">Li⁺</text><line x1="180" y1="234" x2="336" y2="234" stroke="currentColor" class="s-red" stroke-width="2"/><polyline points="328,228 338,234 328,240" fill="none" stroke="currentColor" class="s-red" stroke-width="2"/><text x="220" y="228" text-anchor="middle" font-size="12.5" class="t-red">Li⁺</text><path d="M41 70 V32 H230 M290 32 H479 V70" fill="none" stroke="currentColor" stroke-width="2"/><rect x="230" y="20" width="60" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="260" y="37" text-anchor="middle" font-size="12.5">load</text><polyline points="125,26 135,32 125,38" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><text x="130" y="18" text-anchor="middle" font-size="13" class="t-blue">e⁻</text><polyline points="385,26 395,32 385,38" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><text x="390" y="18" text-anchor="middle" font-size="13" class="t-blue">e⁻</text><text x="260" y="62" text-anchor="middle" font-size="11.5" class="t-teal">electrolyte: Li⁺ salt in organic solvent</text><text x="109" y="318" text-anchor="middle" font-size="13.5" font-weight="600">Anode (−): graphite</text><text x="109" y="338" text-anchor="middle" font-size="12.5">LiC₆ → C₆ + Li⁺ + e⁻</text><text x="411" y="318" text-anchor="middle" font-size="13.5" font-weight="600">Cathode (+): CoO₂ layers</text><text x="411" y="338" text-anchor="middle" font-size="12.5">CoO₂ + Li⁺ + e⁻ → LiCoO₂</text><text x="260" y="366" text-anchor="middle" font-size="11.5" class="t-gray">discharging shown; charging pushes Li⁺ and e⁻ back the other way</text></svg>`,
          alt: 'Lithium-ion cell during discharge. On the left, a copper current collector holds stacked graphite layers with lithium ions between them; this is the negative anode. On the right, an aluminum current collector holds stacked cobalt oxide layers with some filled and some empty lithium sites; this is the positive cathode. Between them is an electrolyte of a lithium salt in organic solvent, with a porous separator down the middle. Red arrows show Li+ ions moving from the graphite to the oxide through the electrolyte. Above, an external circuit through a load carries electrons from left to right. Equations: LiC6 to C6 + Li+ + e- at the anode, CoO2 + Li+ + e- to LiCoO2 at the cathode. Charging pushes ions and electrons back the other way.',
          caption: 'Discharge: $\\ce{Li+}$ leaves the graphite and slides into vacant sites between the $\\ce{CoO2}$ layers, while an electron makes the same trip through your device. Neither host structure is destroyed, so the cell can repeat this hundreds to thousands of times. Charging reverses both flows.',
        },
        {
          type: 'math',
          tex: '\\ce{LiC6 + CoO2 -> C6 + LiCoO2}\\qquad E \\approx 3.7\\ \\text{V}',
          caption: 'Simplified overall discharge reaction (in a real cell only part of the cobalt oxide\'s lithium sites cycle). Other cathodes use iron phosphate ($\\ce{LiFePO4}$, about 3.2 V) or nickel–manganese–cobalt oxides.',
        },
        {
          type: 'derivation',
          title: 'How much charge can graphite hold?',
          steps: [
            { tex: '\\ce{C6 + Li+ + e- -> LiC6}', why: 'Fully lithiated graphite holds one Li per six carbon atoms, so 1 mol of electrons per 6 mol of carbon.' },
            { tex: '6 \\times 12.011\\ \\text{g/mol} = 72.07\\ \\text{g of C per mol e}^-', why: 'Mass of host per mole of electrons stored.' },
            { tex: '\\frac{96{,}485\\ \\text{C}}{72.07\\ \\text{g}} = 1339\\ \\text{C/g}', why: 'One mole of electrons carries $F$ coulombs.' },
            { tex: '\\frac{1339\\ \\text{C/g}}{3.6\\ \\text{C/mAh}} = 372\\ \\text{mAh/g}', why: '$1\\ \\text{mAh} = 10^{-3}\\ \\text{A} \\times 3600\\ \\text{s} = 3.6$ C. Battery makers quote capacity in mAh.' },
          ],
          result: 'The theoretical capacity of a graphite anode is 372 mAh/g, a number you will find on every battery-materials datasheet. Silicon can hold far more lithium, which is why silicon-blended anodes are an active research area.',
        },
        {
          type: 'p',
          text: 'Battery energy is voltage times charge: **energy (Wh) = voltage (V) × capacity (Ah)**. What matters for anything you carry is [[gchem-specific-energy|specific energy]], energy per kilogram:',
        },
        {
          type: 'table',
          headers: ['Energy source', 'Approximate specific energy'],
          rows: [
            ['Lead–acid', '30–40 Wh/kg'],
            ['Nickel–metal hydride', '60–120 Wh/kg'],
            ['Lithium-ion', '150–270 Wh/kg'],
            ['Diesel or jet fuel (chemical energy)', 'about 12,000 Wh/kg'],
          ],
          caption: 'Typical ranges; exact values vary with design. A diesel generator turns only about a third of the fuel\'s energy into electricity, but even so, fuel stores far more energy per kilogram than any battery.',
        },
        {
          type: 'list',
          items: [
            '**Phones and laptops:** a 3.85 V, 4.5 Ah phone battery stores $3.85 \\times 4.5 = 17$ Wh. Higher specific energy means a thinner, lighter phone or a longer day.',
            '**Drones:** the battery is often the heaviest single component, and every extra gram must be lifted continuously. Flight time rises roughly in proportion to the battery\'s specific energy.',
            '**Military radios and field electronics:** on multi-day foot patrols, batteries for radios, GPS, night-vision devices and other gear add many kilograms to each person\'s load. Every gain in Wh/kg is weight a soldier does not carry.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Why lithium-ion cells can catch fire',
          text: 'At 3.7 V the cell voltage is far beyond the 1.23 V at which water decomposes, so the electrolyte must be a lithium salt in a flammable **organic** solvent. If a cell is punctured, overcharged or overheated, exothermic side reactions can heat it faster than it can cool, a runaway that ignites the solvent. That is why damaged packs are isolated, why chargers cut off at a set voltage, and why lithium batteries have special shipping rules.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A lithium-ion battery pack for a field radio is rated at 14.4 V and 6.0 Ah and has a mass of 0.60 kg. What is its specific energy in Wh/kg? Give three significant figures.',
      hint: 'Energy (Wh) = voltage (V) × capacity (Ah). Then divide by the mass.',
      label: 'specific energy $=$',
      unit: 'Wh/kg',
      answer: '14.4*6.0/0.60',
      answerTex: '144\\ \\text{Wh/kg}',
      tolerance: 0.6,
      explanation: 'Energy $= 14.4\\ \\text{V} \\times 6.0\\ \\text{Ah} = 86.4$ Wh (since $\\text{V} \\times \\text{A} = \\text{W}$). Specific energy $= \\frac{86.4\\ \\text{Wh}}{0.60\\ \\text{kg}} = 144$ Wh/kg, in the normal range for a lithium-ion pack. The 14.4 V comes from four cells of about 3.6 V in series. A lead–acid pack storing the same energy at 35 Wh/kg would weigh about 2.5 kg.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Fuel cells: batteries that never run down',
      blocks: [
        {
          type: 'p',
          text: 'A battery carries its reactants inside and dies when they are used up. A [[gchem-fuel-cell|fuel cell]] is a galvanic cell whose reactants are fed in continuously, so it runs as long as you supply fuel. The best-known type uses hydrogen and oxygen across a proton-exchange membrane (PEM):',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} \\text{anode:}&\\quad \\ce{2H2(g) -> 4H+(aq) + 4e-} \\\\ \\text{cathode:}&\\quad \\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)} \\\\ \\text{overall:}&\\quad \\ce{2H2(g) + O2(g) -> 2H2O(l)} \\qquad E^\\circ = 1.229\\ \\text{V} \\end{aligned}',
          caption: 'Protons cross the membrane; electrons take the external circuit. Platinum catalysts on each side speed up the electrode reactions. Under load a real cell delivers about 0.6–0.8 V.',
        },
        {
          type: 'derivation',
          title: 'The theoretical efficiency limit',
          steps: [
            { tex: '\\Delta G^\\circ = -nFE^\\circ = -(4)(96{,}485)(1.229)\\ \\text{J} = -474.3\\ \\text{kJ}', why: 'Maximum electrical work for 2 mol of water formed, from the previous lesson.' },
            { tex: '\\Delta H^\\circ = 2(-285.8\\ \\text{kJ}) = -571.6\\ \\text{kJ}', why: 'Total energy released as heat if the hydrogen were simply burned ($\\Delta H^\\circ_f$ of liquid water is $-285.8$ kJ/mol).' },
            { tex: '\\text{max efficiency} = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ} = \\frac{474.3}{571.6} = 0.830 = 83\\%', why: 'The fraction of the reaction\'s energy that can become work; the rest, $T\\Delta S^\\circ$, must leave as heat because entropy decreases when gases become liquid water.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why fuel cells beat engines on paper',
          text: 'A heat engine (diesel, gas turbine) first turns chemical energy into heat, then heat into work, and the second step is capped by the Carnot limit $1 - T_{\\text{cold}}/T_{\\text{hot}}$. A fuel cell skips the heat step and converts free energy directly to electrical work, so it is not Carnot-limited. Real systems reach roughly 40–60%, still better than most small generators, and they run nearly silently with a low heat signature. The Apollo spacecraft used hydrogen–oxygen fuel cells for power, and the crews drank the water they made.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'Like a diesel generator, a hydrogen fuel cell\'s maximum possible efficiency is set by the Carnot limit $1 - T_{\\text{cold}}/T_{\\text{hot}}$.',
      answer: false,
      explanation: 'The Carnot limit applies to heat engines, which convert heat into work. A fuel cell converts chemical free energy **directly** into electrical work, with no hot-to-cold heat flow in between, so its ceiling is $\\Delta G^\\circ/\\Delta H^\\circ$ (83% for hydrogen and oxygen forming liquid water at 25 °C) regardless of the operating temperature difference.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Corrosion: the galvanic cell nobody wanted',
      blocks: [
        {
          type: 'p',
          text: '[[gchem-corrosion|Corrosion]] is a metal being oxidized by its environment. For iron and steel it is an electrochemical cell built by nature: one region of the metal acts as the anode, another as the cathode, the metal itself is the wire, and a film of water is the electrolyte.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg"><path d="M90 200 C 95 70, 425 70, 430 200 Z" class="f-blue" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6"/><path d="M20 200 H240 Q260 224 280 200 H500 V268 H20 Z" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.6"/><path d="M240 200 Q260 224 280 200 Z" class="f-blue" fill="currentColor" fill-opacity="0.18"/><text x="470" y="258" text-anchor="middle" font-size="13" font-weight="600">Fe</text><ellipse cx="112" cy="196" rx="20" ry="6" class="f-orange" fill="currentColor"/><ellipse cx="408" cy="196" rx="20" ry="6" class="f-orange" fill="currentColor"/><line x1="260" y1="204" x2="260" y2="176" stroke="currentColor" class="s-purple" stroke-width="2"/><polyline points="254,184 260,174 266,184" fill="none" stroke="currentColor" class="s-purple" stroke-width="2"/><text x="260" y="166" text-anchor="middle" font-size="13" class="t-purple">Fe²⁺</text><text x="260" y="130" text-anchor="middle" font-size="12" class="t-blue">water drop (electrolyte)</text><line x1="236" y1="236" x2="130" y2="236" stroke="currentColor" class="s-blue" stroke-width="2"/><polyline points="140,230 128,236 140,242" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><line x1="284" y1="236" x2="390" y2="236" stroke="currentColor" class="s-blue" stroke-width="2"/><polyline points="380,230 392,236 380,242" fill="none" stroke="currentColor" class="s-blue" stroke-width="2"/><text x="183" y="258" text-anchor="middle" font-size="12" class="t-blue">e⁻</text><text x="337" y="258" text-anchor="middle" font-size="12" class="t-blue">e⁻</text><line x1="40" y1="150" x2="88" y2="175" stroke="currentColor" class="s-teal" stroke-width="2"/><polyline points="78,175 90,176 84,166" fill="none" stroke="currentColor" class="s-teal" stroke-width="2"/><text x="32" y="142" text-anchor="middle" font-size="12.5" class="t-teal">O₂</text><line x1="480" y1="150" x2="432" y2="175" stroke="currentColor" class="s-teal" stroke-width="2"/><polyline points="442,175 430,176 436,166" fill="none" stroke="currentColor" class="s-teal" stroke-width="2"/><text x="488" y="142" text-anchor="middle" font-size="12.5" class="t-teal">O₂</text><text x="260" y="22" text-anchor="middle" font-size="13" font-weight="600">Cathode at the edge (plenty of O₂):</text><text x="260" y="42" text-anchor="middle" font-size="13">O₂ + 2H₂O + 4e⁻ → 4OH⁻</text><line x1="180" y1="48" x2="104" y2="158" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><line x1="340" y1="48" x2="416" y2="158" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><text x="112" y="186" text-anchor="middle" font-size="10.5" class="t-orange">rust</text><text x="408" y="186" text-anchor="middle" font-size="10.5" class="t-orange">rust</text><text x="260" y="292" text-anchor="middle" font-size="13" font-weight="600">Anode at the center (little O₂): Fe → Fe²⁺ + 2e⁻</text><text x="260" y="312" text-anchor="middle" font-size="12" class="t-gray">electrons travel through the metal; ions travel through the water</text></svg>`,
          alt: 'A water drop sits on an iron surface. At the center of the drop, where little oxygen reaches, a pit forms in the iron and Fe2+ ions move up into the water; this is the anode, Fe to Fe2+ plus 2 electrons. Electron arrows inside the iron point outward from the center toward the edges of the drop. At the edges, oxygen from the air enters the drop; this is the cathode, O2 plus 2 H2O plus 4 electrons to 4 OH-. Rust deposits form as rings at the edges of the drop. Caption text: electrons travel through the metal; ions travel through the water.',
          caption: 'Oxygen reaches the edge of the drop easily, so that is where $\\ce{O2}$ is reduced. The iron is eaten away at the center, where oxygen is scarce. $\\ce{Fe^2+}$ and $\\ce{OH-}$ meet and are oxidized further by air to rust, $\\ce{Fe2O3*xH2O}$, often in a ring some distance from the pit.',
        },
        {
          type: 'derivation',
          title: 'The rusting cell',
          steps: [
            { tex: '\\text{anode: } \\ce{Fe(s) -> Fe^2+(aq) + 2e-}\\quad (E^\\circ_{\\text{red}} = -0.447\\ \\text{V})', why: 'Iron is oxidized where oxygen is scarce.' },
            { tex: '\\text{cathode: } \\ce{O2(g) + 2H2O(l) + 4e- -> 4OH-(aq)}\\quad (E^\\circ = +0.401\\ \\text{V})', why: 'Oxygen is reduced in neutral water. In acidic water, $\\ce{O2 + 4H+ + 4e- -> 2H2O}$ (+1.229 V) makes the driving force even larger, which is why acid rain speeds corrosion.' },
            { tex: 'E^\\circ_{\\text{cell}} = 0.401 - (-0.447) = +0.848\\ \\text{V}', why: 'Strongly positive: iron rusts spontaneously wherever water and oxygen are both present.' },
          ],
        },
        {
          type: 'p',
          text: 'Salt makes it worse: dissolved ions make the water a much better conductor, so the corrosion current flows more easily. Ships, coastal bases and vehicles driven on salted winter roads or through surf rust fast, which is why equipment is rinsed with fresh water after salt exposure. **Prevention** attacks one part of the cell:',
        },
        {
          type: 'list',
          items: [
            '**Barriers:** paint, oil, grease and plastic coatings keep water and oxygen off the metal. They fail at the first scratch.',
            '**Galvanizing:** a zinc coating. Zinc is a barrier, but it is also more active than iron ($-0.7618$ V vs $-0.447$ V). Where the coating is scratched, zinc becomes the anode and corrodes instead of the exposed iron, which becomes the cathode.',
            '**Sacrificial anodes:** blocks of zinc, magnesium or aluminum bolted or wired to ship hulls, buried pipelines, storage tanks and home water heaters. They dissolve slowly and are replaced; the steel stays the cathode. This is [[gchem-cathodic-protection|cathodic protection]]. Large structures may instead use an external power supply to push electrons into the steel (impressed-current protection).',
            '**Alloying:** stainless steel contains chromium, which forms a thin, self-healing oxide film that blocks further corrosion.',
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><text x="130" y="20" text-anchor="middle" font-size="14" font-weight="600">Galvanized steel, scratched</text><rect x="120" y="126" width="20" height="14" class="f-blue" fill="currentColor" fill-opacity="0.15"/><path d="M35 126 C 35 82, 225 82, 225 126 Z" class="f-blue" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.2"/><rect x="20" y="126" width="100" height="14" class="f-teal" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><rect x="140" y="126" width="100" height="14" class="f-teal" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><rect x="20" y="140" width="220" height="50" class="f-gray" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><text x="200" y="174" text-anchor="middle" font-size="12.5">steel (Fe)</text><line x1="95" y1="124" x2="85" y2="96" stroke="currentColor" class="s-purple" stroke-width="1.8"/><polyline points="80,104 84,93 91,102" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.8"/><text x="72" y="88" text-anchor="middle" font-size="12" class="t-purple">Zn²⁺</text><path d="M100 148 Q 115 158 128 142" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><polyline points="120,143 129,140 128,150" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><text x="86" y="160" text-anchor="middle" font-size="12" class="t-blue">e⁻</text><text x="170" y="112" text-anchor="middle" font-size="11" class="t-gray">water</text><text x="70" y="214" text-anchor="middle" font-size="12" class="t-teal">Zn coating = anode</text><line x1="70" y1="203" x2="60" y2="141" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><text x="185" y="214" text-anchor="middle" font-size="12">bare Fe in scratch</text><text x="185" y="230" text-anchor="middle" font-size="12">= cathode</text><line x1="170" y1="203" x2="132" y2="140" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><text x="130" y="262" text-anchor="middle" font-size="12">Zn → Zn²⁺ + 2e⁻ (Zn corrodes)</text><text x="130" y="280" text-anchor="middle" font-size="12">O₂ + 2H₂O + 4e⁻ → 4OH⁻ on the iron</text><line x1="262" y1="10" x2="262" y2="290" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="392" y="20" text-anchor="middle" font-size="14" font-weight="600">Sacrificial anodes on a hull</text><rect x="272" y="95" width="242" height="165" class="f-blue" fill="currentColor" fill-opacity="0.15"/><line x1="272" y1="95" x2="514" y2="95" stroke="currentColor" class="s-blue" stroke-width="1.4" stroke-dasharray="6 4"/><text x="498" y="88" text-anchor="end" font-size="11" class="t-blue">waterline</text><path d="M312 40 V150 Q312 222 392 222 Q472 222 472 150 V40" class="f-gray" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/><text x="392" y="110" text-anchor="middle" font-size="12.5">steel hull</text><text x="392" y="127" text-anchor="middle" font-size="12.5">= cathode</text><rect x="298" y="150" width="14" height="28" class="f-teal" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1"/><rect x="472" y="150" width="14" height="28" class="f-teal" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1"/><rect x="378" y="222" width="28" height="12" class="f-teal" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1"/><line x1="298" y1="164" x2="284" y2="164" stroke="currentColor" class="s-purple" stroke-width="1.6"/><polyline points="290,159 282,164 290,169" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.6"/><line x1="486" y1="164" x2="500" y2="164" stroke="currentColor" class="s-purple" stroke-width="1.6"/><polyline points="494,159 502,164 494,169" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.6"/><text x="290" y="146" text-anchor="middle" font-size="11" class="t-purple">Zn²⁺</text><text x="494" y="146" text-anchor="middle" font-size="11" class="t-purple">Zn²⁺</text><text x="392" y="252" text-anchor="middle" font-size="12" class="t-teal">Zn (or Mg, Al) blocks = anodes</text><text x="392" y="280" text-anchor="middle" font-size="12">replaced as they dissolve</text><path d="M330 164 Q350 175 362 168" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.6"/><polyline points="354,166 364,167 358,175" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.6"/><text x="346" y="190" text-anchor="middle" font-size="11.5" class="t-blue">e⁻ into hull</text></svg>`,
          alt: 'Two panels. Left, galvanized steel with a scratch: a zinc coating on a steel base has a gap where bare iron is exposed under a water film. Zn2+ ions leave the zinc coating, which is labeled anode, and electrons flow through the steel to the bare iron in the scratch, labeled cathode. Equations: Zn to Zn2+ plus 2 electrons (zinc corrodes); O2 plus 2 H2O plus 4 electrons to 4 OH- on the iron. Right, sacrificial anodes on a hull: a steel ship hull labeled cathode sits below a dashed waterline in seawater, with zinc blocks attached on its sides and bottom labeled Zn, Mg or Al blocks equal anodes, replaced as they dissolve. Zn2+ arrows leave the blocks and an electron arrow points into the hull.',
          caption: 'In both cases the protecting metal has a lower reduction potential than iron, so it becomes the anode of the corrosion cell and the steel becomes the cathode, where only $\\ce{O2}$ is reduced and no iron is lost.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Tin plating is the opposite case',
          text: 'Tin cans are steel coated with tin, which is **less** active than iron ($-0.1375$ V vs $-0.447$ V). Intact, the tin is a fine barrier. Once scratched, the iron becomes the anode and the tin the cathode, so the exposed iron corrodes **faster** than bare steel would. A protective metal works sacrificially only if it is below iron in the table.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Which metal could serve as a sacrificial anode to protect a steel pipeline? ($E^\\circ$ in V: $\\ce{Fe^2+/Fe}$ $-0.447$, $\\ce{Mg^2+/Mg}$ $-2.372$, $\\ce{Ni^2+/Ni}$ $-0.257$, $\\ce{Sn^2+/Sn}$ $-0.1375$, $\\ce{Cu^2+/Cu}$ $+0.337$)',
      options: [
        { text: 'Copper', why: 'Copper is far less active than iron ($+0.337$ V). Connected to steel, it would act as the cathode and make the iron corrode faster.' },
        { text: 'Tin', why: 'Tin ($-0.1375$ V) is above iron in the table, so iron would be the anode. Tin protects only as an unbroken barrier.' },
        { text: 'Magnesium', correct: true, why: 'Magnesium ($-2.372$ V) is much more easily oxidized than iron, so it becomes the anode and corrodes while the steel stays the cathode.' },
        { text: 'Nickel', why: 'Nickel ($-0.257$ V) is a reasonable corrosion-resistant metal, but it sits above iron, so it would not sacrifice itself for the steel.' },
      ],
      explanation: 'A sacrificial anode must be the anode of the cell it forms with iron, so its reduction potential must be **lower** (more negative) than iron\'s $-0.447$ V. Of the choices, only magnesium qualifies. Zinc ($-0.7618$ V) and aluminum alloys ($-1.662$ V) are also used; magnesium is common for buried pipelines because its larger driving force pushes current through poorly conducting soil.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'fill',
      prompt: 'Complete the description of rusting and galvanizing.',
      template: 'When steel rusts, iron is oxidized at ___ sites and oxygen is reduced at ___ sites, while electrons travel through the ___. A zinc coating keeps protecting a scratch because zinc has a ___ reduction potential than iron.',
      blanks: [{ answers: ['anodic'] }, { answers: ['cathodic'] }, { answers: ['metal'] }, { answers: ['lower'] }],
      wordBank: ['anodic', 'cathodic', 'metal', 'water', 'lower', 'higher'],
      explanation: 'Iron is oxidized at **anodic** sites (oxygen-poor regions), and $\\ce{O2}$ is reduced at **cathodic** sites (oxygen-rich regions). Electrons move through the **metal**, while ions move through the water film. Zinc has a **lower** (more negative) reduction potential than iron, $-0.7618$ V vs $-0.447$ V, so zinc is oxidized in preference and the exposed iron becomes the cathode.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Electrolysis: running a cell uphill',
      blocks: [
        {
          type: 'p',
          text: 'Every galvanic cell has a reverse reaction with negative $E^\\circ$, which will not happen on its own. Connect a power supply whose voltage exceeds the cell\'s and you can force it to run. Driving a nonspontaneous redox reaction with electrical energy is [[gchem-electrolysis|electrolysis]], and the device is an [[gchem-electrolytic-cell|electrolytic cell]]. Charging your phone is electrolysis: the charger drives the discharge reaction backward.',
        },
        {
          type: 'table',
          headers: ['Feature', 'Galvanic cell', 'Electrolytic cell'],
          rows: [
            ['Reaction', 'spontaneous, $\\Delta G < 0$', 'nonspontaneous, $\\Delta G > 0$'],
            ['Energy', 'chemical → electrical', 'electrical → chemical'],
            ['Anode', 'oxidation, **negative**', 'oxidation, **positive**'],
            ['Cathode', 'reduction, **positive**', 'reduction, **negative**'],
            ['Electrons', 'pushed by the reaction', 'pushed by the power supply'],
          ],
          caption: '"An Ox, Red Cat" never changes. Only the electrode signs flip, because the power supply now decides where electrons are pushed.',
        },
        {
          type: 'p',
          text: '**Molten sodium chloride.** Sodium is far too reactive to be found as a metal, so it is made by electrolyzing molten NaCl. It must be molten (above 801 °C): in the solid the ions cannot move, and in water, water itself would be reduced instead of $\\ce{Na+}$.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 370" xmlns="http://www.w3.org/2000/svg"><path d="M252 42 H130 V120" fill="none" stroke="currentColor" stroke-width="2"/><path d="M268 42 H390 V120" fill="none" stroke="currentColor" stroke-width="2"/><line x1="252" y1="30" x2="252" y2="54" stroke="currentColor" stroke-width="5"/><line x1="268" y1="20" x2="268" y2="64" stroke="currentColor" stroke-width="2"/><text x="240" y="26" text-anchor="middle" font-size="16" font-weight="600">−</text><text x="282" y="18" text-anchor="middle" font-size="16" font-weight="600">+</text><text x="260" y="84" text-anchor="middle" font-size="12" class="t-gray">DC power supply pushes</text><text x="260" y="99" text-anchor="middle" font-size="12" class="t-gray">electrons "uphill"</text><polyline points="124,84 130,96 136,84" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><text x="112" y="92" text-anchor="end" font-size="13" class="t-blue">e⁻</text><polyline points="384,96 390,84 396,96" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><text x="408" y="92" font-size="13" class="t-blue">e⁻</text><rect x="60" y="160" width="400" height="140" class="f-orange" fill="currentColor" fill-opacity="0.15"/><path d="M60 130 V300 H460 V130" fill="none" stroke="currentColor" stroke-width="2"/><rect x="118" y="120" width="24" height="150" class="f-gray" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/><rect x="378" y="120" width="24" height="150" class="f-gray" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/><g class="f-gray" fill="currentColor"><circle cx="150" cy="200" r="4"/><circle cx="153" cy="232" r="5"/><circle cx="149" cy="262" r="4"/></g><text x="165" y="186" font-size="11" class="t-gray">Na(l)</text><g fill="none" stroke="currentColor" class="s-green" stroke-width="1.4"><circle cx="370" cy="236" r="4"/><circle cx="366" cy="206" r="5"/><circle cx="371" cy="178" r="4"/><circle cx="368" cy="150" r="3.5"/></g><text x="352" y="150" text-anchor="end" font-size="11" class="t-green">Cl₂(g)</text><text x="230" y="204" text-anchor="middle" font-size="13" class="t-red">← Na⁺</text><text x="290" y="244" text-anchor="middle" font-size="13" class="t-purple">Cl⁻ →</text><text x="260" y="290" text-anchor="middle" font-size="12" class="t-orange">molten NaCl (above 801 °C)</text><text x="130" y="326" text-anchor="middle" font-size="14" font-weight="600">Cathode (−): reduction</text><text x="130" y="347" text-anchor="middle" font-size="13">Na⁺ + e⁻ → Na(l)</text><text x="390" y="326" text-anchor="middle" font-size="14" font-weight="600">Anode (+): oxidation</text><text x="390" y="347" text-anchor="middle" font-size="13">2Cl⁻ → Cl₂(g) + 2e⁻</text><text x="260" y="366" text-anchor="middle" font-size="11.5" class="t-gray">inert electrodes; overall 2NaCl(l) → 2Na(l) + Cl₂(g)</text></svg>`,
          alt: 'Electrolysis of molten NaCl. A DC power supply is drawn at the top with its negative terminal wired to the left electrode and its positive terminal to the right electrode. Electron arrows point down the left wire into the left electrode and up the right wire out of the right electrode. The electrodes dip into molten NaCl, labeled above 801 degrees C. Na+ ions move left toward the left electrode, where droplets of liquid sodium form; this is the cathode, negative, reduction, Na+ plus e- to Na(l). Cl- ions move right toward the right electrode, where chlorine gas bubbles form; this is the anode, positive, oxidation, 2Cl- to Cl2(g) plus 2e-. Overall 2NaCl(l) to 2Na(l) plus Cl2(g).',
          caption: 'The power supply pulls electrons out of the anode (making it positive) and pushes them into the cathode (making it negative). Cations migrate to the cathode and anions to the anode, exactly as in a galvanic cell.',
        },
        {
          type: 'derivation',
          title: 'Minimum voltage for molten NaCl (estimate)',
          steps: [
            { tex: '\\ce{2NaCl(l) -> 2Na(l) + Cl2(g)}', why: 'Cathode: $\\ce{Na+ + e- -> Na}$; anode: $\\ce{2Cl- -> Cl2 + 2e-}$.' },
            { tex: 'E^\\circ_{\\text{cell}} \\approx E^\\circ(\\ce{Na+/Na}) - E^\\circ(\\ce{Cl2/Cl-}) = -2.71 - 1.358 = -4.07\\ \\text{V}', why: 'Cathode minus anode as always. Negative: nonspontaneous. (Aqueous table values only estimate the molten-salt numbers.)' },
            { tex: 'E_{\\text{applied}} > 4.07\\ \\text{V}', why: 'The supply must push at least as hard as the reaction pushes back, plus extra to overcome resistance and slow electrode kinetics.' },
          ],
          result: 'The industrial Downs cell adds calcium chloride to lower the melting point to about 600 °C and keeps the sodium and chlorine apart so they cannot recombine.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Molten magnesium chloride, $\\ce{MgCl2(l)}$, is electrolyzed with inert electrodes. What forms at each electrode?',
      options: [
        { text: 'Cathode: Mg metal; anode: $\\ce{Cl2}$ gas', correct: true, why: 'Reduction at the cathode: $\\ce{Mg^2+ + 2e- -> Mg}$. Oxidation at the anode: $\\ce{2Cl- -> Cl2 + 2e-}$. This is how most magnesium metal is produced.' },
        { text: 'Cathode: $\\ce{Cl2}$ gas; anode: Mg metal', why: 'Reversed. Forming $\\ce{Cl2}$ from $\\ce{Cl-}$ is an oxidation, which always happens at the anode; forming Mg from $\\ce{Mg^2+}$ is a reduction (cathode).' },
        { text: 'Cathode: $\\ce{H2}$ gas; anode: $\\ce{O2}$ gas', why: 'These are the products of electrolyzing water. A molten salt contains no water, so only $\\ce{Mg^2+}$ and $\\ce{Cl-}$ are available.' },
        { text: 'Nothing, because $E^\\circ_{\\text{cell}}$ is negative', why: 'A negative $E^\\circ_{\\text{cell}}$ (about $-3.7$ V here) means the reaction is not spontaneous, which is exactly why a power supply is used. Electrolysis forces it.' },
      ],
      explanation: 'In a molten salt the only species are the cation and the anion. The cation is reduced at the cathode (negative electrode in an electrolytic cell) and the anion is oxidized at the anode (positive electrode): $\\ce{MgCl2(l) -> Mg(l) + Cl2(g)}$. The estimated minimum voltage is $E^\\circ(\\ce{Mg}) - E^\\circ(\\ce{Cl2}) = -2.372 - 1.358 = -3.73$ V, so more than 3.7 V must be applied.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Electrolysis in water, and the overpotential surprise',
      blocks: [
        {
          type: 'p',
          text: 'In water there are more candidates for each electrode, because **water itself** can be oxidized or reduced. The rule of thumb: at the cathode, the species easiest to reduce (highest $E^\\circ$) wins; at the anode, the species easiest to oxidize (lowest $E^\\circ$ for its couple) wins, subject to one important correction.',
        },
        {
          type: 'derivation',
          title: 'Splitting water',
          steps: [
            { tex: '\\text{cathode: } \\ce{4H+(aq) + 4e- -> 2H2(g)}\\quad E^\\circ = 0.000\\ \\text{V}', why: 'Hydrogen ions (or water molecules, in neutral solution) are reduced.' },
            { tex: '\\text{anode: } \\ce{2H2O(l) -> O2(g) + 4H+(aq) + 4e-}\\quad (E^\\circ_{\\text{red}} = 1.229\\ \\text{V})', why: 'Water is oxidized to oxygen.' },
            { tex: '\\ce{2H2O(l) -> 2H2(g) + O2(g)}\\quad E^\\circ_{\\text{cell}} = 0.000 - 1.229 = -1.229\\ \\text{V}', why: 'The $\\ce{H+}$ cancel. The minimum voltage is 1.23 V, the reverse of the fuel cell. Twice as many moles (and volumes) of $\\ce{H2}$ as $\\ce{O2}$.' },
          ],
          result: 'Pure water barely conducts, so an inert electrolyte such as $\\ce{Na2SO4}$ or KOH is added to carry the current. Nuclear submarines make their breathing oxygen this way from seawater-derived fresh water.',
        },
        {
          type: 'definition',
          term: 'Overpotential',
          text: 'Real electrolyzers need about 1.8–2.0 V, not 1.23 V. Part of the extra is simple resistance; the rest is [[gchem-overpotential|overpotential]]: extra voltage needed to make an electrode reaction go at a useful **rate**. Electron transfer at a surface has an activation barrier (unit 7), and forming gas bubbles, especially $\\ce{O2}$, is notoriously slow. The size depends on the electrode material and the current.',
        },
        {
          type: 'p',
          text: '**Brine (concentrated aqueous NaCl).** At the cathode, water ($-0.83$ V in neutral solution) is far easier to reduce than $\\ce{Na+}$ ($-2.71$ V), so the products are $\\ce{H2}$ and $\\ce{OH-}$, never sodium metal. At the anode, the table says water oxidation ($1.229$ V) should beat chloride ($1.358$ V), since it needs less voltage. But oxygen\'s large overpotential reverses the order, and **chlorine** comes off instead:',
        },
        {
          type: 'math',
          tex: '\\ce{2NaCl(aq) + 2H2O(l) -> 2NaOH(aq) + H2(g) + Cl2(g)}',
          caption: 'The chlor-alkali process, one of the largest industrial uses of electricity, supplies chlorine for water disinfection and PVC and sodium hydroxide for soap, paper and aluminum refining.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect "predict the products" questions for molten salts (cation reduced, anion oxidized), aqueous solutions of active-metal salts (water reduced to $\\ce{H2}$ at the cathode) and halide solutions (halogen at the anode for $\\ce{Cl-}$, $\\ce{Br-}$, $\\ce{I-}$ because of the $\\ce{O2}$ overpotential; $\\ce{O2}$ for sulfate or nitrate solutions, whose anions are very hard to oxidize).',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Concentrated aqueous NaCl is electrolyzed. What forms at the **cathode**? ($E^\\circ$: $\\ce{Na+/Na}$ $-2.71$ V; $\\ce{2H2O + 2e- -> H2 + 2OH-}$ $-0.8277$ V)',
      options: [
        { text: 'Sodium metal', why: 'Reducing $\\ce{Na+}$ requires a far more negative potential ($-2.71$ V) than reducing water ($-0.83$ V). Water wins, and any sodium formed would react with water anyway.' },
        { text: '$\\ce{Cl2}$ gas', why: '$\\ce{Cl2}$ comes from oxidizing $\\ce{Cl-}$, and oxidation happens at the anode, not the cathode.' },
        { text: '$\\ce{H2}$ gas and $\\ce{OH-}$ ions', correct: true, why: 'Water is the easiest species to reduce: $\\ce{2H2O + 2e- -> H2 + 2OH-}$. The hydroxide left behind makes the solution around the cathode basic (the "alkali" of chlor-alkali).' },
        { text: '$\\ce{O2}$ gas', why: '$\\ce{O2}$ forms by oxidizing water, an anode reaction. In brine it is suppressed even at the anode by its large overpotential.' },
      ],
      explanation: 'At the cathode the competition is between reducing $\\ce{Na+}$ ($E^\\circ = -2.71$ V) and reducing water ($-0.83$ V). The higher reduction potential wins, so hydrogen gas and hydroxide form. That is why sodium metal must be made from **molten** NaCl, with no water present.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Faraday\'s laws: counting electrons with an ammeter',
      blocks: [
        {
          type: 'p',
          text: 'In electrolysis, electrons are a reactant you can measure with a clock and an ammeter. Current is charge per time, so a steady current $I$ for time $t$ delivers charge $q = It$ (amperes × seconds = coulombs). Divide by $F$ and you have moles of electrons; the half-reaction converts those into moles of product. These are [[gchem-faradays-laws|Faraday\'s laws of electrolysis]]:',
        },
        {
          type: 'theorem',
          name: 'From current to mass',
          tex: 'q = It \\qquad n_{e^-} = \\frac{q}{F} \\qquad n_{\\text{metal}} = \\frac{n_{e^-}}{z} \\qquad m = n_{\\text{metal}}\\, M',
          text: '$z$ is the number of electrons per formula unit in the half-reaction (2 for $\\ce{Cu^2+ + 2e- -> Cu}$), and $M$ is the molar mass. If the current varies, $q = \\int_0^t I(t)\\,dt$.',
        },
        {
          type: 'derivation',
          title: 'Electroplating: copper-plating a part',
          steps: [
            { tex: '\\ce{Cu^2+(aq) + 2e- -> Cu(s)}', why: 'The part to be plated is the cathode in a copper sulfate bath; a copper anode dissolves to replace the ions used.' },
            { tex: 'n_{\\ce{Cu}} = \\frac{2.00\\ \\text{g}}{63.55\\ \\text{g/mol}} = 0.03147\\ \\text{mol}', why: 'Goal: deposit 2.00 g of copper. Work backward from the mass.' },
            { tex: 'n_{e^-} = 2 \\times 0.03147 = 0.06294\\ \\text{mol e}^-', why: 'Two electrons per copper atom.' },
            { tex: 'q = (0.06294\\ \\text{mol})(96{,}485\\ \\text{C/mol}) = 6073\\ \\text{C}', why: 'Moles of electrons to coulombs.' },
            { tex: 't = \\frac{q}{I} = \\frac{6073\\ \\text{C}}{1.50\\ \\text{A}} = 4049\\ \\text{s} = 67.5\\ \\text{min}', why: 'One ampere is one coulomb per second.' },
          ],
          result: 'At 1.50 A, plating 2.00 g of copper takes about 67 minutes (assuming every electron goes into copper, called 100% current efficiency).',
        },
        {
          type: 'graph',
          x: [0, 120],
          y: [0, 20],
          xStep: 15,
          yStep: 2,
          functions: [
            { expr: 'i*60*x*107.87/96485', label: 'silver, $z = 1$', color: 'gray' },
            { expr: 'i*60*x*63.55/(2*96485)', label: 'copper, $z = 2$', color: 'orange' },
          ],
          sliders: [{ name: 'i', min: 0.5, max: 5, step: 0.1, value: 1.5, label: 'current $I$ (A)' }],
          readouts: [
            { label: 'Ag after 60 min (g) $=$', expr: 'i*3600*107.87/96485', digits: 3 },
            { label: 'Cu after 60 min (g) $=$', expr: 'i*3600*63.55/(2*96485)', digits: 3 },
          ],
          caption: 'Horizontal axis: time in minutes; vertical axis: mass deposited in grams. Mass grows linearly with both time and current. Silver piles up about 3.4 times faster than copper at the same current: it needs only one electron per atom, and each atom is heavier.',
        },
        {
          type: 'derivation',
          title: 'Aluminum: one smelting cell for one day',
          steps: [
            { tex: '\\ce{Al^3+ + 3e- -> Al(l)}', why: 'In the Hall–Héroult process, aluminum oxide is dissolved in molten cryolite ($\\ce{Na3AlF6}$) at about 960 °C and reduced at the cathode. The carbon anodes are slowly burned away to $\\ce{CO2}$.' },
            { tex: 'q = (3.00 \\times 10^{5}\\ \\text{A})(86{,}400\\ \\text{s}) = 2.592 \\times 10^{10}\\ \\text{C}', why: 'A modern cell runs at roughly 300,000 A; one day is 86,400 s.' },
            { tex: 'n_{e^-} = \\frac{2.592 \\times 10^{10}}{96{,}485} = 2.686 \\times 10^{5}\\ \\text{mol}', why: 'Coulombs to moles of electrons.' },
            { tex: 'n_{\\ce{Al}} = \\frac{2.686 \\times 10^{5}}{3} = 8.955 \\times 10^{4}\\ \\text{mol}', why: 'Three electrons per aluminum atom.' },
            { tex: 'm = (8.955 \\times 10^{4}\\ \\text{mol})(26.98\\ \\text{g/mol}) = 2.42 \\times 10^{6}\\ \\text{g}', why: 'About 2.4 metric tons per cell per day at 100% current efficiency (real cells reach about 95%).' },
          ],
          result: 'At about 4.2 V, that charge costs $2.592 \\times 10^{10}\\ \\text{C} \\times 4.2\\ \\text{V} \\approx 1.1 \\times 10^{11}$ J, roughly 12.5 kWh per kilogram of aluminum. That enormous electricity demand is why smelters are built next to cheap hydroelectric power, and why recycling aluminum, which only needs melting, saves about 95% of the energy.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why charge is the right thing to count',
          text: 'Each atom deposited needs a fixed, whole number of electrons, so mass is proportional to charge, the same way product is proportional to a limiting reactant in stoichiometry. The ammeter is effectively a counter of electrons: $1\\ \\text{A}$ for $1\\ \\text{s}$ is $\\frac{1}{96{,}485}$ mol, about $6.2 \\times 10^{18}$ electrons.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A spoon is silver-plated from a $\\ce{Ag+}$ solution with a current of 0.750 A for 25.0 minutes. What mass of silver is deposited? Use $F = 96{,}485$ C/mol and $M(\\ce{Ag}) = 107.87$ g/mol; three significant figures.',
      hint: 'Convert minutes to seconds, then $q = It$, then $q/F$ gives moles of electrons, and $\\ce{Ag+ + e- -> Ag}$ is 1 : 1.',
      label: 'mass Ag $=$',
      unit: 'g',
      answer: '0.750*25.0*60/96485*107.87',
      answerTex: '1.26\\ \\text{g}',
      tolerance: 0.006,
      explanation: '$t = 25.0 \\times 60 = 1500$ s; $q = (0.750\\ \\text{A})(1500\\ \\text{s}) = 1125$ C. $n_{e^-} = \\frac{1125}{96{,}485} = 0.01166$ mol, and one electron deposits one silver atom, so $n_{\\ce{Ag}} = 0.01166$ mol. $m = 0.01166 \\times 107.87 = 1.26$ g. Forgetting to convert minutes to seconds gives a mass 60 times too small.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Order the steps for finding the mass of metal deposited by a known current in a known time.',
      lines: [
        'Convert the time to seconds and compute the charge $q = It$',
        'Convert charge to moles of electrons: $n_{e^-} = q/F$',
        'Use the half-reaction to convert moles of electrons to moles of metal (divide by $z$)',
        'Multiply moles of metal by the molar mass to get grams',
      ],
      distractors: ['Multiply the current by the molar mass of the metal'],
      explanation: 'It is the stoichiometry roadmap with electrons as the "reactant": current and time give charge, the Faraday constant turns charge into moles of electrons, the half-reaction gives the mole ratio to metal, and the molar mass gives grams. The distractor skips the electron count and has the wrong units.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'error',
      prompt: 'A student calculates the aluminum produced by a smelting cell running at $1.00 \\times 10^{5}$ A for 1.00 hour. Tap the first line that is wrong.',
      lines: [
        '$q = (1.00 \\times 10^{5}\\ \\text{A})(3600\\ \\text{s}) = 3.60 \\times 10^{8}$ C',
        '$n_{e^-} = \\frac{3.60 \\times 10^{8}\\ \\text{C}}{96{,}485\\ \\text{C/mol}} = 3731$ mol',
        'Since $\\ce{Al^3+ + 3e- -> Al}$, $n_{\\ce{Al}} = 3731$ mol',
        '$m = 3731\\ \\text{mol} \\times 26.98\\ \\text{g/mol} = 1.01 \\times 10^{5}$ g $= 101$ kg',
      ],
      errorLines: [3],
      explanation: 'Line 3 ignores the electron count. Each $\\ce{Al^3+}$ needs **three** electrons, so $n_{\\ce{Al}} = \\frac{3731}{3} = 1244$ mol, and $m = 1244 \\times 26.98 = 3.36 \\times 10^{4}$ g $= 33.6$ kg. The student\'s answer is three times too large. Lines 1 and 2 are correct: one hour is 3600 s, and dividing coulombs by $F$ gives moles of electrons.',
    },
  ],
  takeaways: [
    'Batteries are galvanic cells: alkaline Zn/$\\ce{MnO2}$ (≈1.5 V, all-solid overall reaction so the voltage holds steady), lead–acid Pb/$\\ce{PbO2}$/$\\ce{H2SO4}$ (2.04 V per cell, six in series for 12 V).',
    'Lithium-ion cells shuttle $\\ce{Li+}$ by intercalation between graphite and a layered oxide (≈3.7 V); lithium\'s low $E^\\circ$ and low mass give the high specific energy (Wh/kg) that phones, drones and field radios need.',
    'Fuel cells are continuously fed galvanic cells; $\\ce{H2/O2}$ gives 1.229 V and a theoretical efficiency $\\Delta G^\\circ/\\Delta H^\\circ = 83\\%$, not limited by Carnot.',
    'Rusting is a galvanic cell (Fe anode, $\\ce{O2}$ cathode, water as electrolyte). Galvanizing and sacrificial anodes work because Zn, Mg and Al have lower $E^\\circ$ than Fe, making the steel the cathode.',
    'Electrolysis forces a nonspontaneous reaction: anode still oxidation (now +), cathode still reduction (now −). Molten NaCl gives Na and $\\ce{Cl2}$; water needs at least 1.23 V; brine gives $\\ce{H2}$, $\\ce{OH-}$ and $\\ce{Cl2}$ because of the $\\ce{O2}$ overpotential.',
    'Faraday\'s laws: $q = It$, $n_{e^-} = q/F$, $n_{\\text{metal}} = n_{e^-}/z$, $m = nM$.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 17: Electrochemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/17-introduction',
      source: 'openstax',
      note: 'Sections 17.5–17.7 cover batteries and fuel cells, corrosion and electrolysis, including quantitative electrolysis problems.',
    },
    {
      title: 'Wikipedia — Lithium-ion battery',
      url: 'https://en.wikipedia.org/wiki/Lithium-ion_battery',
      source: 'wikipedia',
      note: 'Electrode materials, specific energy figures, safety and the history behind the 2019 Nobel Prize in Chemistry.',
    },
    {
      title: 'Wikipedia — Cathodic protection',
      url: 'https://en.wikipedia.org/wiki/Cathodic_protection',
      source: 'wikipedia',
      note: 'Sacrificial anodes on ships, pipelines and water heaters, and impressed-current systems.',
    },
    {
      title: 'Wikipedia — Hall–Héroult process',
      url: 'https://en.wikipedia.org/wiki/Hall%E2%80%93H%C3%A9roult_process',
      source: 'wikipedia',
      note: 'How aluminum is smelted by electrolysis and why it uses so much electricity.',
    },
  ],
};
