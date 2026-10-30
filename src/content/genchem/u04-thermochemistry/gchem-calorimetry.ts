import type { Lesson } from '../../types';

const FIG_COFFEE = `<svg viewBox="0 0 500 302" xmlns="http://www.w3.org/2000/svg"><path d="M 130 90 L 150 265 L 270 265 L 290 90" fill="none" stroke="currentColor" class="s-gray" stroke-width="2.2"/><path d="M 142 96 L 160 255 L 260 255 L 278 96" fill="none" stroke="currentColor" class="s-gray" stroke-width="2.2"/><path d="M 151 150 L 160 254 L 260 254 L 269 150 Z" fill="currentColor" class="f-blue" fill-opacity="0.3"/><rect x="120" y="80" width="180" height="12" rx="3" fill="currentColor" class="f-gray"/><rect x="225" y="20" width="12" height="210" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="231" cy="232" r="9" fill="currentColor" class="f-red"/><rect x="228" y="120" width="6" height="110" fill="currentColor" class="f-red"/><line x1="180" y1="30" x2="180" y2="230" stroke="currentColor" stroke-width="2.2"/><ellipse cx="180" cy="230" rx="18" ry="5" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="180.0" y1="26.0" x2="180.0" y2="16.0" stroke="currentColor" stroke-width="1.6"/><polygon points="180.0,10.0 183.3,16.0 176.7,16.0" fill="currentColor"/><line x1="180.0" y1="14.0" x2="180.0" y2="26.0" stroke="currentColor" stroke-width="1.6"/><polygon points="180.0,32.0 176.7,26.0 183.3,26.0" fill="currentColor"/><text x="345" y="40" text-anchor="start" font-size="13">thermometer</text><line x1="342" y1="36" x2="240" y2="50" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="30" y="30" text-anchor="start" font-size="13">stirrer</text><line x1="78" y1="27" x2="176" y2="45" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="345" y="86" text-anchor="start" font-size="13">lid</text><line x1="342" y1="84" x2="300" y2="86" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="345" y="140" text-anchor="start" font-size="13">two nested</text><text x="345" y="156" text-anchor="start" font-size="13">foam cups</text><line x1="342" y1="146" x2="284" y2="140" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="345" y="205" text-anchor="start" font-size="13">solution where</text><text x="345" y="221" text-anchor="start" font-size="13">the reaction runs</text><line x1="342" y1="212" x2="262" y2="215" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="30" y="175" text-anchor="start" font-size="13" class="t-teal">open to the</text><text x="30" y="191" text-anchor="start" font-size="13" class="t-teal">atmosphere:</text><text x="30" y="207" text-anchor="start" font-size="13" class="t-teal" font-weight="600">constant P</text><text x="250" y="292" text-anchor="middle" font-size="14" font-weight="600">q(reaction) = −q(solution) = −m c ΔT   ⟹   measures ΔH</text></svg>`;
const FIG_BOMB = `<svg viewBox="0 0 500 315" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="60" width="260" height="215" rx="10" fill="none" stroke="currentColor" class="s-orange" stroke-width="2" stroke-dasharray="7 4"/><rect x="90" y="80" width="220" height="180" rx="6" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="92" y="105" width="216" height="153" rx="4" fill="currentColor" class="f-blue" fill-opacity="0.25"/><rect x="160" y="150" width="80" height="95" rx="10" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="3"/><rect x="170" y="140" width="60" height="14" rx="3" fill="currentColor" class="f-gray"/><path d="M 185 215 L 190 230 L 210 230 L 215 215 Z" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1.5"/><path d="M 188 22 L 188 210" fill="none" stroke="currentColor" class="s-red" stroke-width="1.8"/><path d="M 212 22 L 212 210" fill="none" stroke="currentColor" class="s-red" stroke-width="1.8"/><path d="M 188 210 Q 200 202 212 210" fill="none" stroke="currentColor" class="s-red" stroke-width="1.8"/><rect x="262" y="22" width="12" height="200" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="268" cy="224" r="9" fill="currentColor" class="f-red"/><rect x="265" y="130" width="6" height="92" fill="currentColor" class="f-red"/><line x1="125" y1="25" x2="125" y2="235" stroke="currentColor" stroke-width="2.2"/><ellipse cx="125" cy="235" rx="16" ry="5" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="350" y="32" text-anchor="start" font-size="13">thermometer</text><line x1="346" y1="28" x2="276" y2="50" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="200" y="14" text-anchor="middle" font-size="13" class="t-red">ignition wires</text><text x="350" y="120" text-anchor="start" font-size="13">water, known mass</text><line x1="346" y1="116" x2="305" y2="125" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="350" y="160" text-anchor="start" font-size="13">sealed steel "bomb"</text><text x="350" y="176" text-anchor="start" font-size="13">with O₂ at ~30 atm</text><line x1="346" y1="156" x2="242" y2="175" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="350" y="215" text-anchor="start" font-size="13">sample in cup</text><line x1="346" y1="211" x2="217" y2="222" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="350" y="262" text-anchor="start" font-size="13" class="t-orange">insulated jacket</text><line x1="346" y1="258" x2="331" y2="262" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="20" y="18" text-anchor="start" font-size="13">stirrer</text><line x1="52" y1="22" x2="121" y2="40" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="250" y="305" text-anchor="middle" font-size="14" font-weight="600">rigid walls: constant V, w = 0  ⟹  q(rxn) = −C(cal)·ΔT = ΔE</text></svg>`;

export const lesson: Lesson = {
  id: 'gchem-calorimetry',
  title: 'Calorimetry',
  summary: 'Measure heat with temperature: heat capacity and q = mcΔT, why water is such a heat sponge, heat exchange between objects, coffee-cup and bomb calorimeters, food energy and the MRE flameless ration heater.',
  minutes: 19,
  objectives: [
    'Use $q = mc\\Delta T$ and $q = C\\Delta T$, and distinguish specific heat, molar heat capacity and heat capacity',
    'Explain why water\'s specific heat is so large and what that does for climate and cooling',
    'Solve heat-exchange (mixing) problems with $q_{\\text{hot}} + q_{\\text{cold}} = 0$',
    'Analyze coffee-cup (constant pressure, $\\Delta H$) and bomb (constant volume, $\\Delta E$) calorimetry data, including calibration',
    'Estimate food energy and the magnesium needed by a flameless ration heater',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Heat capacity and specific heat',
      blocks: [
        {
          type: 'p',
          text: 'You cannot see heat flow, but you can see what it does: it changes temperature. [[gchem-calorimetry|Calorimetry]] turns a thermometer reading into a number of joules. The bridge is how much energy a sample needs per degree.',
        },
        {
          type: 'definition',
          term: 'Heat capacity and specific heat',
          text: 'The **heat capacity** $C$ of an object is the heat needed to raise its temperature by 1 °C (units J/°C). The [[gchem-specific-heat|specific heat]] $c$ is the heat capacity *per gram* of a substance (J/(g·°C)), and the **molar heat capacity** $C_m$ is per mole (J/(mol·°C)). $C$ belongs to an object; $c$ and $C_m$ belong to a substance.',
        },
        {
          type: 'theorem',
          name: 'Heat and temperature change',
          tex: 'q = mc\\,\\Delta T = C\\,\\Delta T, \\qquad \\Delta T = T_{\\text{final}} - T_{\\text{initial}}',
          text: 'Valid when no phase change happens and $c$ is roughly constant over the range. A change of 1 °C equals a change of 1 K, so $\\Delta T$ is the same in either scale.',
        },
        {
          type: 'derivation',
          title: 'Heating 1.50 L of water for coffee, from 15.0 °C to 95.0 °C',
          steps: [
            { tex: 'm = 1.50\\ \\text{L} \\times 1000\\ \\tfrac{\\text{g}}{\\text{L}} = 1500\\ \\text{g}', why: 'Water\'s density is about 1.00 g/mL, so 1 L has a mass of about 1000 g.' },
            { tex: '\\Delta T = 95.0 - 15.0 = 80.0\\ \\text{°C}', why: 'Final minus initial: positive, because the water warms.' },
            { tex: 'q = (1500\\ \\cancel{\\text{g}})(4.184\\ \\tfrac{\\text{J}}{\\cancel{\\text{g}}\\cdot\\cancel{\\text{°C}}})(80.0\\ \\cancel{\\text{°C}}) = 5.02 \\times 10^{5}\\ \\text{J}', why: 'Grams and degrees cancel, leaving joules. Positive $q$: heat flows into the water.' },
          ],
          result: 'About 502 kJ, roughly what 10 g of propane releases when it burns. Real stoves need more, since much of the flame\'s heat warms the air instead of the pot.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 150],
          xStep: 1,
          yStep: 25,
          functions: [
            { expr: '20 + 1000x/(m*4.184)', label: 'water', color: 'blue' },
            { expr: '20 + 1000x/(m*0.897)', label: 'aluminum', color: 'gray' },
            { expr: '20 + 1000x/(m*0.449)', label: 'iron', color: 'red' },
          ],
          sliders: [{ name: 'm', min: 50, max: 500, step: 10, value: 100, label: 'mass of each sample $m$ (g)' }],
          readouts: [
            { label: 'water: °C per kJ $=$', expr: '1000/(m*4.184)', digits: 3 },
            { label: 'iron: °C per kJ $=$', expr: '1000/(m*0.449)', digits: 3 },
          ],
          caption: 'Temperature (°C, vertical) of three samples starting at 20 °C as heat is added (kJ, horizontal). Each line has slope $1/(mc)$: the larger the heat capacity $mc$, the flatter the line. Water barely moves while iron shoots up. Increase $m$ and every line flattens.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A 25.0 g piece of an unknown metal absorbs 562 J of heat as it warms from 21.0 °C to 46.0 °C. What is its specific heat? Give three significant figures. (Then compare with the table on the next card to identify the metal.)',
      hint: 'Rearrange $q = mc\\Delta T$ to $c = \\dfrac{q}{m\\Delta T}$.',
      label: '$c =$',
      unit: 'J/(g·°C)',
      answer: '562/(25.0*25.0)',
      answerTex: '0.899\\ \\text{J/(g·°C)}',
      tolerance: 0.0006,
      explanation: '$\\Delta T = 46.0 - 21.0 = 25.0$ °C, so $c = \\dfrac{562\\ \\text{J}}{(25.0\\ \\text{g})(25.0\\ \\text{°C})} = 0.899$ J/(g·°C). That matches aluminum (0.897). Measuring specific heat is a classic way to identify a metal, as long as no phase change occurs in the range.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Why water is a heat sponge',
      blocks: [
        {
          type: 'table',
          headers: ['Substance', 'Specific heat $c$ (J/(g·°C))', 'Molar heat capacity (J/(mol·°C))'],
          rows: [
            ['water, liquid', '$4.184$', '$75.4$'],
            ['ice', '$2.09$', '$37.7$'],
            ['aluminum', '$0.897$', '$24.2$'],
            ['iron', '$0.449$', '$25.1$'],
            ['copper', '$0.385$', '$24.5$'],
            ['lead', '$0.129$', '$26.7$'],
            ['dry air (constant P)', '$1.01$', '$29.2$'],
          ],
          caption: 'Values near 25 °C (OpenStax Chemistry 2e Table 5.1 and standard tables). Molar heat capacity = $c \\times$ molar mass.',
        },
        {
          type: 'p',
          text: 'Look at the last column for the metals: aluminum, iron, copper and lead all sit near 25 J/(mol·°C), about $3R$. This is the **law of Dulong and Petit**: in a simple solid each atom vibrates in three directions, and each direction soaks up the same share of energy. Per *mole of atoms*, metals are all alike. Per *gram* they differ only because their atoms have different masses; a gram of lead holds few atoms, so it heats up fast.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why water\'s specific heat is so large',
          text: 'Two reasons stack up. First, water molecules are light (18 g/mol), so a gram holds 0.0555 mol of them, three times as many molecules as a gram of iron holds atoms. Second, each molecule absorbs a lot: liquid water\'s 75 J/(mol·°C) is close to $9R$, as if all three atoms vibrated like atoms in a solid. The hydrogen-bonded network of the liquid can rock, twist and stretch in many ways, and energy spent bending and breaking hydrogen bonds does not raise the kinetic energy that a thermometer reads.',
        },
        {
          type: 'list',
          items: [
            '**Climate.** The oceans absorb heat all summer and release it all winter with only modest temperature changes, so coastal cities have milder seasons than inland ones at the same latitude. More than 90% of the extra heat trapped by greenhouse gases has gone into the oceans.',
            '**Cooling.** Engines, power plants and nuclear reactors are cooled by water (or water–glycol) because each kilogram carries away about 4.2 kJ per degree of warming, four times what the same mass of air carries.',
            '**Your body.** About 60% of your mass is water, which buffers your temperature against sudden heat loads. Sweating adds the much larger energy of evaporation (about 2.4 kJ per gram at skin temperature).',
          ],
        },
        {
          type: 'derivation',
          title: 'Warm 1.00 kg of water and 1.00 kg of iron by 10.0 °C',
          steps: [
            { tex: 'q_{\\text{water}} = (1000\\ \\text{g})(4.184)(10.0) = 4.18 \\times 10^{4}\\ \\text{J}', why: '$q = mc\\Delta T$ with water\'s specific heat.' },
            { tex: 'q_{\\text{iron}} = (1000\\ \\text{g})(0.449)(10.0) = 4.49 \\times 10^{3}\\ \\text{J}', why: 'Same mass, same temperature change, iron\'s specific heat.' },
            { tex: '\\frac{q_{\\text{water}}}{q_{\\text{iron}}} = \\frac{4.184}{0.449} = 9.3', why: 'Everything else cancels; only the specific heats remain.' },
          ],
          result: 'Kilogram for kilogram, water stores 9.3 times as much heat per degree as iron.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A 100 g block of iron and 100 g of water, both at 20 °C, each absorb 2.0 kJ of heat. Which is true?',
      options: [
        { text: 'Both warm by the same amount, since they absorb the same heat', why: 'Equal heat gives equal $\\Delta T$ only for equal heat capacities $mc$. The specific heats differ by a factor of 9.3.' },
        { text: 'The water warms more, because water conducts heat better', why: 'How fast heat travels (conductivity) is a different property. Once the heat is absorbed, $\\Delta T = q/(mc)$, and water\'s large $c$ makes its $\\Delta T$ small.' },
        { text: 'The iron warms about 9 times as much as the water', correct: true, why: 'Iron: $\\Delta T = 2000/(100 \\times 0.449) = 44.5$ °C. Water: $2000/(100 \\times 4.184) = 4.8$ °C. The ratio is $4.184/0.449 = 9.3$.' },
        { text: 'The iron warms about 9 times *less* than the water', why: 'This inverts the relation. A smaller specific heat means a *larger* temperature change for the same heat.' },
      ],
      explanation: 'Rearranged, $\\Delta T = \\dfrac{q}{mc}$: temperature change is inversely proportional to specific heat. Iron ends near 64 °C; the water only reaches about 25 °C. This is why a metal pan handle gets hot fast while the water inside takes much longer.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Heat exchange: heat lost = heat gained',
      blocks: [
        {
          type: 'p',
          text: 'Drop a hot metal into cool water inside an insulated container. Heat flows from the metal to the water until both reach the same final temperature $T_f$. If no heat escapes, energy conservation says every joule the metal loses, the water gains.',
        },
        {
          type: 'theorem',
          name: 'Heat exchange in an insulated container',
          tex: 'q_{\\text{hot}} + q_{\\text{cold}} = 0 \\quad\\Longleftrightarrow\\quad -q_{\\text{hot}} = q_{\\text{cold}}',
          text: 'Each $q = mc(T_f - T_i)$ carries its own sign: negative for the object that cools, positive for the one that warms.',
        },
        {
          type: 'derivation',
          title: '50.0 g of copper at 100.0 °C dropped into 100.0 g of water at 22.0 °C',
          steps: [
            { tex: 'm_{\\ce{Cu}}c_{\\ce{Cu}}(T_f - 100.0) + m_{\\text{w}}c_{\\text{w}}(T_f - 22.0) = 0', why: 'Heat gained by copper (negative, it cools) plus heat gained by water (positive) is zero.' },
            { tex: '(50.0)(0.385)(T_f - 100.0) + (100.0)(4.184)(T_f - 22.0) = 0', why: 'Substitute masses (g) and specific heats (J/(g·°C)).' },
            { tex: '19.25\\,T_f - 1925 + 418.4\\,T_f - 9204.8 = 0', why: 'Distribute each product.' },
            { tex: '437.65\\,T_f = 11\\,129.8', why: 'Collect the $T_f$ terms on one side and the constants on the other.' },
            { tex: 'T_f = 25.4\\ \\text{°C}', why: 'Divide. Check: $25.4$ lies between 22.0 and 100.0, and much closer to the water\'s starting temperature, because the water has 22 times the heat capacity.' },
          ],
          result: 'Copper loses $19.25 \\times (25.43 - 100.0) = -1435$ J and the water gains $418.4 \\times (25.43 - 22.0) = +1435$ J: the books balance.',
        },
        {
          type: 'p',
          text: 'Solving the general equation gives a formula worth recognizing: $T_f = \\dfrac{\\sum m_i c_i T_i}{\\sum m_i c_i}$, a **weighted average** of the starting temperatures, weighted by heat capacity. The final temperature must lie between the starting ones; a result outside that range means a sign error.',
        },
        {
          type: 'graph',
          x: [0, 5],
          y: [0, 105],
          xStep: 1,
          yStep: 10,
          functions: [
            { expr: '(38.5m + 9204.8)/(0.385m + 418.4) + (100 - (38.5m + 9204.8)/(0.385m + 418.4))*e^(-1.5x)', label: 'copper', color: 'red' },
            { expr: '(38.5m + 9204.8)/(0.385m + 418.4) - ((38.5m + 9204.8)/(0.385m + 418.4) - 22)*e^(-1.5x)', label: 'water', color: 'blue' },
          ],
          hlines: [{ y: '(38.5m + 9204.8)/(0.385m + 418.4)', label: 'T_f', color: 'gray' }],
          sliders: [{ name: 'm', min: 10, max: 1000, step: 10, value: 50, label: 'mass of copper (g)' }],
          readouts: [{ label: '$T_f$ (°C) $=$', expr: '(38.5m + 9204.8)/(0.385m + 418.4)', digits: 3 }],
          caption: 'Temperature against time (arbitrary units) for hot copper in 100.0 g of water starting at 22.0 °C. The copper drops a long way, the water rises a little, and they meet at the weighted average. Drag the copper mass up to 1000 g: its heat capacity (385 J/°C) approaches the water\'s (418 J/°C), and $T_f$ moves toward the midpoint.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A 75.0 g iron bolt at 150.0 °C is dropped into 250.0 g of water at 20.0 °C in an insulated cup. Find the final temperature. ($c_{\\ce{Fe}} = 0.449$, $c_{\\text{water}} = 4.184$ J/(g·°C); give one decimal place.)',
      hint: 'Set $(75.0)(0.449)(T_f - 150.0) + (250.0)(4.184)(T_f - 20.0) = 0$ and solve for $T_f$.',
      label: '$T_f =$',
      unit: '°C',
      answer: '(75.0*0.449*150.0 + 250.0*4.184*20.0)/(75.0*0.449 + 250.0*4.184)',
      answerTex: '24.1\\ \\text{°C}',
      tolerance: 0.06,
      explanation: 'Heat capacities: iron $75.0 \\times 0.449 = 33.68$ J/°C; water $250.0 \\times 4.184 = 1046$ J/°C. Then $T_f = \\dfrac{33.68(150.0) + 1046(20.0)}{33.68 + 1046} = \\dfrac{5051 + 20\\,920}{1079.7} = 24.1$ °C. The water warms only 4.1 °C while the iron cools by 126 °C, because the water\'s heat capacity is 31 times larger.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: '40.0 g of aluminum ($c = 0.897$) at 95.0 °C is placed in 120.0 g of water ($c = 4.184$) at 18.0 °C. A student finds the final temperature. Tap the first line that is wrong.',
      lines: [
        'Heat lost by the aluminum equals heat gained by the water: $q_{\\ce{Al}} + q_{\\text{w}} = 0$',
        '$(40.0)(0.897)(T_f - 95.0) = (120.0)(4.184)(T_f - 18.0)$',
        '$35.88\\,T_f - 3409 = 502.1\\,T_f - 9037$',
        '$T_f = 12.1$ °C',
      ],
      errorLines: [2],
      explanation: 'Line 1 is right, but line 2 sets $q_{\\ce{Al}} = q_{\\text{w}}$ instead of $q_{\\ce{Al}} = -q_{\\text{w}}$. Both sides now have the same sign convention, so the equation demands that the aluminum *gain* heat. The red flag is the answer: 12.1 °C is colder than both starting temperatures. Correctly, $35.88(T_f - 95.0) + 502.1(T_f - 18.0) = 0$ gives $T_f = \\dfrac{3409 + 9037}{538.0} = 23.1$ °C.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Coffee-cup calorimetry: constant pressure',
      blocks: [
        {
          type: 'p',
          text: 'To measure the heat of a reaction in solution, run it inside the water whose temperature you watch. A **coffee-cup calorimeter** is two nested foam cups with a loose lid, a thermometer and a stirrer. Foam conducts heat poorly, so for a few minutes almost no heat leaks in or out.',
        },
        {
          type: 'figure',
          svg: FIG_COFFEE,
          alt: 'Two nested foam cups holding a solution, with a lid, a thermometer and a stirrer passing through the lid. A note says the cup is open to the atmosphere, so pressure is constant. The caption line reads q reaction equals minus q solution equals minus m c delta T, which measures delta H.',
          caption: 'The reaction is the system; the solution it is dissolved in is (nearly all of) the surroundings. Because the cup is open to the air, the measurement happens at constant atmospheric pressure.',
        },
        {
          type: 'p',
          text: 'The reaction\'s heat goes into the solution, so $q_{\\text{rxn}} = -q_{\\text{soln}} = -m_{\\text{soln}}c_{\\text{soln}}\\Delta T$. If the solution warms, $q_{\\text{rxn}}$ is negative: the reaction released heat. Heat measured at constant pressure is called $q_p$, and the next lesson shows that $q_p$ equals the [[gchem-enthalpy|enthalpy]] change $\\Delta H$. Dividing by moles gives $\\Delta H$ in kJ/mol.',
        },
        {
          type: 'derivation',
          title: '50.0 mL of 1.00 M HCl + 50.0 mL of 1.00 M NaOH; temperature rises from 22.0 °C to 28.7 °C',
          steps: [
            { tex: '\\ce{H+(aq) + OH-(aq) -> H2O(l)}', why: 'The net ionic equation for any strong acid with a strong base.' },
            { tex: 'm_{\\text{soln}} = 100.0\\ \\text{mL} \\times 1.00\\ \\text{g/mL} = 100.0\\ \\text{g}', why: 'Standard assumptions: dilute solutions have the density and specific heat (4.184 J/(g·°C)) of water, and the cup absorbs negligible heat.' },
            { tex: 'q_{\\text{soln}} = (100.0)(4.184)(28.7 - 22.0) = +2.80 \\times 10^{3}\\ \\text{J}', why: 'The solution gained heat.' },
            { tex: 'q_{\\text{rxn}} = -2.80 \\times 10^{3}\\ \\text{J}', why: 'Whatever the solution gained, the reaction lost.' },
            { tex: 'n = (0.0500\\ \\text{L})(1.00\\ \\text{mol/L}) = 0.0500\\ \\text{mol}\\ \\ce{H2O}\\ \\text{formed}', why: '[[molarity|Molarity]] times volume gives moles. Acid and base are in a 1 : 1 ratio and equal amounts, so neither is in excess.' },
            { tex: '\\Delta H = \\frac{-2.80\\ \\text{kJ}}{0.0500\\ \\text{mol}} = -56\\ \\text{kJ/mol}', why: 'Heat per mole of reaction, in kJ. Two significant figures, limited by $\\Delta T = 6.7$ °C.' },
          ],
          result: 'Neutralization releases about 56 kJ per mole of water formed; the accepted value is $-55.8$ kJ/mol.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Instant cold packs',
          text: 'A first-aid cold pack is a coffee-cup calorimeter in a plastic bag. Squeezing it breaks an inner pouch of water, and solid ammonium nitrate (or urea) dissolves. That dissolution is endothermic: the "reaction" draws heat from the water, so the solution and the injury it rests on get cold.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: '10.0 g of $\\ce{NH4NO3}$ (molar mass 80.04 g/mol) dissolves in 100.0 g of water in a coffee-cup calorimeter. The temperature falls from 22.0 °C to 15.0 °C. Find $\\Delta H$ of dissolution in kJ per mole of $\\ce{NH4NO3}$. Treat the 110.0 g solution as having $c = 4.184$ J/(g·°C); give three significant figures with the correct sign.',
      hint: '$q_{\\text{soln}} = (110.0)(4.184)(15.0 - 22.0)$ is negative, so $q_{\\text{rxn}}$ is positive. Divide by moles of $\\ce{NH4NO3}$.',
      label: '$\\Delta H =$',
      unit: 'kJ/mol',
      answer: '110.0*4.184*7.0/(10.0/80.04)/1000',
      answerTex: '+25.8\\ \\text{kJ/mol}',
      tolerance: 0.1,
      explanation: '$q_{\\text{soln}} = (110.0)(4.184)(-7.0) = -3222$ J, so $q_{\\text{rxn}} = +3222$ J $= +3.222$ kJ. Moles: $10.0 / 80.04 = 0.1249$ mol. $\\Delta H = +3.222 / 0.1249 = +25.8$ kJ/mol. Positive: dissolving ammonium nitrate is endothermic, which is exactly why it works in cold packs.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Bomb calorimetry: constant volume',
      blocks: [
        {
          type: 'p',
          text: 'Combustion makes hot gases and needs pure oxygen, so it cannot run in a foam cup. A **[[gchem-bomb-calorimeter|bomb calorimeter]]** burns a weighed sample inside a sealed steel vessel (the "bomb") filled with oxygen under pressure, submerged in a carefully measured bath of water.',
        },
        {
          type: 'figure',
          svg: FIG_BOMB,
          alt: 'A steel bomb containing a sample cup sits in a bucket of water inside a dashed insulated jacket. Ignition wires run down into the bomb to the sample. A thermometer and a stirrer dip into the water. The caption line says rigid walls mean constant volume and zero work, so q reaction equals minus C cal times delta T equals delta E.',
          caption: 'Ignition wires light the sample. The heat spreads into the bomb, the water and the bucket, and the thermometer records the rise. The rigid steel walls keep the volume constant.',
        },
        {
          type: 'p',
          text: 'Two differences from the coffee cup matter. First, the volume is fixed, so no PV work is done: $w = 0$ and the first law gives $\\Delta E = q_v$. A bomb calorimeter measures the **internal energy** change. Second, the bomb and bucket absorb a lot of heat themselves, so instead of $mc$ you use the heat capacity of the **whole calorimeter**, $C_{\\text{cal}}$, found by burning a standard of known energy.',
        },
        {
          type: 'derivation',
          title: 'Calibrate, then burn octane',
          steps: [
            { tex: 'C_{\\text{cal}} = \\frac{(1.000\\ \\text{g})(26.43\\ \\text{kJ/g})}{2.267\\ \\text{°C}} = 11.66\\ \\text{kJ/°C}', why: 'Calibration: burning 1.000 g of benzoic acid, the standard, releases 26.43 kJ and raised the temperature 2.267 °C.' },
            { tex: 'q_{\\text{cal}} = (11.66\\ \\text{kJ/°C})(2.049\\ \\text{°C}) = 23.89\\ \\text{kJ}', why: 'Now 0.5000 g of octane raises the temperature 2.049 °C in the same calorimeter.' },
            { tex: 'q_{\\text{rxn}} = -23.89\\ \\text{kJ} \\implies \\frac{-23.89\\ \\text{kJ}}{0.5000\\ \\text{g}} = -47.78\\ \\text{kJ/g}', why: 'The calorimeter gained what the reaction released.' },
            { tex: '\\Delta E = -47.78\\ \\tfrac{\\text{kJ}}{\\text{g}} \\times 114.23\\ \\tfrac{\\text{g}}{\\text{mol}} = -5.458 \\times 10^{3}\\ \\text{kJ/mol}', why: 'Per mole of octane, using its molar mass. This is $\\Delta E$ (constant volume), not $\\Delta H$.' },
          ],
          result: 'For octane, $\\Delta E = -5458$ kJ/mol. The next lesson converts this to $\\Delta H = -5469$ kJ/mol, a difference of only 0.2%, and the lesson after that recovers the same number from tables.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love asking which calorimeter measures what. Coffee cup: open, constant $P$, $q_p = \\Delta H$, uses $mc\\Delta T$ of the solution. Bomb: sealed, constant $V$, $q_v = \\Delta E$, uses $C_{\\text{cal}}\\Delta T$ of the whole apparatus. In both, $q_{\\text{rxn}}$ has the opposite sign to the heat the calorimeter absorbs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Complete the statement.',
      template: 'A coffee-cup calorimeter works at constant pressure, so the heat it measures is ___. A bomb calorimeter works at constant volume, so the heat it measures is ___.',
      blanks: [{ answers: ['$\\Delta H$'] }, { answers: ['$\\Delta E$'] }],
      wordBank: ['$\\Delta H$', '$\\Delta E$', '$w$', '$\\Delta T$'],
      explanation: 'At constant volume no PV work is possible ($w = 0$), so the first law gives $q_v = \\Delta E$. At constant pressure the system may push the atmosphere back, and the heat absorbed is $q_p = \\Delta H$, the enthalpy change (defined next lesson). $\\Delta T$ is what both calorimeters *read*, not what they report, and $w$ is not heat at all.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A 0.500 g sample of a dried snack bar burns in a bomb calorimeter with $C_{\\text{cal}} = 9.85$ kJ/°C, and the temperature rises 1.13 °C. What is its energy content in **food Calories per gram**? (1 Cal = 4.184 kJ; three significant figures.)',
      hint: 'Heat released $= C_{\\text{cal}}\\Delta T$; divide by the mass, then convert kJ to Cal.',
      label: 'energy $=$',
      unit: 'Cal/g',
      answer: '9.85*1.13/0.500/4.184',
      answerTex: '5.32\\ \\text{Cal/g}',
      tolerance: 0.006,
      explanation: '$q = (9.85\\ \\text{kJ/°C})(1.13\\ \\text{°C}) = 11.13$ kJ released by 0.500 g, so 22.26 kJ/g. Dividing by 4.184 kJ/Cal gives 5.32 Cal/g. That sits between carbohydrate (4 Cal/g) and fat (9 Cal/g), as you would expect for a snack bar with nuts or chocolate.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Food energy and the flameless ration heater',
      blocks: [
        {
          type: 'p',
          text: 'Nutrition labels come from bomb-calorimeter data corrected for digestion (we do not burn fiber, and protein leaves as urea rather than $\\ce{N2}$). The resulting **Atwater factors** are the numbers on every label:',
        },
        {
          type: 'table',
          headers: ['Nutrient', 'Cal/g', 'kJ/g'],
          rows: [
            ['carbohydrate', '4', '17'],
            ['protein', '4', '17'],
            ['fat', '9', '37'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why fat carries twice the energy',
          text: 'Combustion energy comes from turning C–H bonds into C=O and O–H bonds. A sugar such as glucose, $\\ce{C6H12O6}$, already has an oxygen on almost every carbon: it is partly "burned". A fat molecule is mostly long $\\ce{-CH2-}$ chains with very little oxygen, so each gram has far more C–H bonds left to oxidize. Animals store energy as fat for the same reason aircraft carry kerosene: maximum energy per kilogram carried.',
        },
        {
          type: 'p',
          text: 'In the field, an MRE entrée is heated with no fuel and no flame. The **flameless ration heater** is a pad of magnesium powder (with a little iron and salt). Add a splash of water and it reacts:',
        },
        {
          type: 'math',
          tex: '\\ce{Mg(s) + 2H2O(l) -> Mg(OH)2(s) + H2(g)} \\qquad \\Delta H = -352.9\\ \\text{kJ/mol Mg}',
          caption: 'The $\\Delta H$ comes from standard enthalpies of formation, the topic of this unit\'s last lesson.',
        },
        {
          type: 'derivation',
          title: 'How much magnesium does it take to heat an entrée?',
          steps: [
            { tex: 'q = (227\\ \\text{g})(4.18\\ \\tfrac{\\text{J}}{\\text{g·°C}})(56\\ \\text{°C}) = 5.3 \\times 10^{4}\\ \\text{J} = 53\\ \\text{kJ}', why: 'The heater\'s design goal is roughly to warm an 8-ounce (227 g) entrée by 100 °F (56 °C). Treat the food as mostly water.' },
            { tex: 'n_{\\ce{Mg}} = \\frac{53\\ \\text{kJ}}{352.9\\ \\text{kJ/mol}} = 0.15\\ \\text{mol}', why: 'Use $\\Delta H$ as a conversion factor: 352.9 kJ released per mole of Mg.' },
            { tex: 'm_{\\ce{Mg}} = (0.15\\ \\text{mol})(24.31\\ \\text{g/mol}) = 3.7\\ \\text{g}', why: 'Moles to grams.' },
          ],
          result: 'About 3.7 g of magnesium would do it if every joule reached the food. In practice much of the heat warms the pouch, the water and the air, so real heaters carry more magnesium than this ideal minimum.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why the iron, the salt and the warning label',
          text: 'Pure magnesium quickly coats itself with $\\ce{Mg(OH)2}$ and the reaction stalls. Iron in contact with magnesium in salt water forms tiny galvanic cells that keep the magnesium corroding fast (the electrochemistry unit explains how). The reaction also releases **hydrogen gas**, which is flammable, so heaters are used in ventilated spaces, never in a closed vehicle or tent.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'You want to heat 250 g of water from 10.0 °C to 60.0 °C with the ration-heater reaction ($\\Delta H = -352.9$ kJ per mol Mg). If only **50%** of the heat released reaches the water, what mass of magnesium is needed? ($c = 4.184$ J/(g·°C), Mg 24.31 g/mol; three significant figures.)',
      hint: 'Heat the water needs $= mc\\Delta T$. The reaction must release twice that. Then kJ → mol Mg → g Mg.',
      label: 'mass Mg $=$',
      unit: 'g',
      answer: '250*4.184*50/0.5/1000/352.9*24.31',
      answerTex: '7.21\\ \\text{g}',
      tolerance: 0.03,
      explanation: 'Water needs $(250)(4.184)(50.0) = 52\\,300$ J $= 52.30$ kJ. At 50% efficiency the reaction must release $52.30 / 0.50 = 104.6$ kJ. Moles of Mg: $104.6 / 352.9 = 0.2964$ mol; mass: $0.2964 \\times 24.31 = 7.21$ g. Halving the efficiency doubles the fuel, which is why insulating the pouch matters as much as the chemistry.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'Because the bomb is sealed and rigid, a bomb calorimeter measures the enthalpy change $\\Delta H$ of a combustion directly.',
      answer: false,
      explanation: 'Rigid walls mean constant **volume**, so $w = 0$ and the heat measured is $q_v = \\Delta E$, the internal energy change. $\\Delta H$ is the heat at constant **pressure**. For octane the two differ by only about 11 kJ/mol out of 5470 (because the moles of gas change during the reaction), and the next lesson shows how to convert one into the other.',
    },
  ],
  takeaways: [
    '$q = mc\\Delta T$ (or $C\\Delta T$ for a whole object); specific heat is per gram, molar heat capacity per mole, heat capacity per object.',
    'Water\'s specific heat, 4.184 J/(g·°C), is unusually large (light molecules plus a hydrogen-bonded network), which moderates climate and makes water the go-to coolant. Metals all have about $3R \\approx 25$ J/(mol·°C) (Dulong–Petit).',
    'In an insulated container $q_{\\text{hot}} + q_{\\text{cold}} = 0$; the final temperature is the heat-capacity-weighted average and must lie between the starting temperatures.',
    'Coffee-cup calorimeter: constant $P$, $q_{\\text{rxn}} = -m_{\\text{soln}}c\\Delta T = \\Delta H$. Bomb calorimeter: constant $V$, $q_{\\text{rxn}} = -C_{\\text{cal}}\\Delta T = \\Delta E$, with $C_{\\text{cal}}$ from a benzoic acid calibration.',
    'Food energy: about 4 Cal/g for carbohydrate and protein, 9 Cal/g for fat (1 Cal = 4.184 kJ).',
    'A flameless ration heater uses $\\ce{Mg + 2H2O -> Mg(OH)2 + H2}$, about 353 kJ per mol Mg: a few grams of magnesium can heat an entrée, and the released hydrogen calls for ventilation.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 5: Thermochemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/5-introduction',
      source: 'openstax',
      note: 'Section 5.2 (Calorimetry) works through metal-in-water, coffee-cup and bomb calorimetry problems, with a feature on measuring food Calories.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The free "Energy Forms and Changes" simulation lets you heat iron, brick, water and olive oil side by side and watch their temperatures diverge.',
    },
    {
      title: 'Wikipedia — Flameless ration heater',
      url: 'https://en.wikipedia.org/wiki/Flameless_ration_heater',
      source: 'wikipedia',
      note: 'How the MRE heater is built, the role of iron and salt, and its hydrogen-gas safety precautions.',
    },
    {
      title: 'Wikipedia — Dulong–Petit law',
      url: 'https://en.wikipedia.org/wiki/Dulong%E2%80%93Petit_law',
      source: 'wikipedia',
      note: 'Why the molar heat capacity of many solid elements is close to $3R$, and where the law breaks down at low temperature.',
    },
  ],
};
