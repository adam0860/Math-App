import type { Lesson } from '../../types';

// <figures> (hand-written SVG, each rendered and checked in light and dark themes)
const FIG = {
  energy: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="270" x2="22" y2="40" stroke="currentColor" stroke-width="1.5"/><polygon points="22,32 17,42 27,42" fill="currentColor"/><text x="14" y="160" text-anchor="middle" font-size="12" transform="rotate(-90 14 160)">enthalpy H</text><text x="148" y="20" text-anchor="middle" font-size="14" font-weight="600" class="t-blue">Exothermic: ΔHₛₒₗₙ &lt; 0</text><line x1="34" y1="214" x2="98" y2="214" stroke="currentColor"  stroke-width="3"/><text x="66" y="232" text-anchor="middle" font-size="11">solute + solvent</text><line x1="76" y1="211" x2="76" y2="135" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="76,135 71,144 81,144" fill="currentColor" class="f-red"/><text x="70" y="177.0" text-anchor="end" font-size="12" class="t-red">ΔH₁</text><line x1="64" y1="132" x2="138" y2="132" stroke="currentColor"  stroke-width="3"/><text x="88" y="124" text-anchor="middle" font-size="11">solute apart</text><line x1="130" y1="129" x2="130" y2="65" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="130,65 125,74 135,74" fill="currentColor" class="f-red"/><text x="124" y="101.0" text-anchor="end" font-size="12" class="t-red">ΔH₂</text><line x1="110" y1="62" x2="226" y2="62" stroke="currentColor"  stroke-width="3"/><text x="168" y="54" text-anchor="middle" font-size="11">solute and solvent apart</text><line x1="192" y1="65" x2="192" y2="247" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="192,247 187,238 197,238" fill="currentColor" class="f-blue"/><text x="186" y="160.0" text-anchor="end" font-size="12" class="t-blue">ΔH₃</text><line x1="166" y1="250" x2="266" y2="250" stroke="currentColor" class="s-purple" stroke-width="3"/><text x="226" y="268" text-anchor="middle" font-size="11" class="t-purple">solution</text><text x="248" y="236.0" text-anchor="end" font-size="12" class="t-purple">ΔHₛₒₗₙ</text><line x1="98" y1="214" x2="266" y2="214" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="254" y1="215" x2="254" y2="248" stroke="currentColor" class="s-purple" stroke-width="2"/><polygon points="254,248 249,239 259,239" fill="currentColor" class="f-purple"/><line x1="268" y1="30" x2="268" y2="280" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="2 4"/><text x="396" y="20" text-anchor="middle" font-size="14" font-weight="600" class="t-red">Endothermic: ΔHₛₒₗₙ &gt; 0</text><line x1="282" y1="214" x2="346" y2="214" stroke="currentColor"  stroke-width="3"/><text x="314" y="232" text-anchor="middle" font-size="11">solute + solvent</text><line x1="324" y1="211" x2="324" y2="135" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="324,135 319,144 329,144" fill="currentColor" class="f-red"/><text x="318" y="177.0" text-anchor="end" font-size="12" class="t-red">ΔH₁</text><line x1="312" y1="132" x2="386" y2="132" stroke="currentColor"  stroke-width="3"/><text x="336" y="124" text-anchor="middle" font-size="11">solute apart</text><line x1="378" y1="129" x2="378" y2="65" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="378,65 373,74 383,74" fill="currentColor" class="f-red"/><text x="372" y="101.0" text-anchor="end" font-size="12" class="t-red">ΔH₂</text><line x1="358" y1="62" x2="474" y2="62" stroke="currentColor"  stroke-width="3"/><text x="416" y="54" text-anchor="middle" font-size="11">solute and solvent apart</text><line x1="440" y1="65" x2="440" y2="173" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="440,173 435,164 445,164" fill="currentColor" class="f-blue"/><text x="434" y="123.0" text-anchor="end" font-size="12" class="t-blue">ΔH₃</text><line x1="414" y1="176" x2="514" y2="176" stroke="currentColor" class="s-purple" stroke-width="3"/><text x="404" y="168" text-anchor="middle" font-size="11" class="t-purple">solution</text><text x="496" y="199.0" text-anchor="end" font-size="12" class="t-purple">ΔHₛₒₗₙ</text><line x1="346" y1="214" x2="514" y2="214" stroke="currentColor" class="s-gray" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="502" y1="213" x2="502" y2="178" stroke="currentColor" class="s-purple" stroke-width="2"/><polygon points="502,178 497,187 507,187" fill="currentColor" class="f-purple"/><text x="260" y="294" text-anchor="middle" font-size="12">red: break attractions (cost energy) · blue: form solute–solvent attractions (release energy)</text></svg>`,
  henry: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="170" width="170" height="80" class="f-blue" fill="currentColor" fill-opacity="0.15"/><line x1="30" y1="170" x2="200" y2="170" stroke="currentColor" class="s-blue" stroke-width="1.5"/><path d="M30 40 V250 H200 V40" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="33" y="50" width="164" height="10" fill="currentColor" class="f-gray" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/><line x1="115.0" y1="50" x2="115.0" y2="22" stroke="currentColor" stroke-width="3"/><text x="129.0" y="34" font-size="14" text-anchor="start">pressure P</text><circle cx="77.5" cy="82.5" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="100.2" cy="86.7" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="53.4" cy="106.9" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="174.3" cy="139.6" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="152.7" cy="92.2" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="120.2" cy="198.4" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="68.5" cy="189.5" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="74.4" cy="232.2" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><text x="115.0" y="272" text-anchor="middle" font-size="13">3 dissolved</text><line x1="215" y1="150" x2="262" y2="150" stroke="currentColor" stroke-width="2.5"/><polygon points="270,150 260,145 260,155" fill="currentColor"/><text x="240" y="130" text-anchor="middle" font-size="12">double</text><text x="240" y="172" text-anchor="middle" font-size="12">P(gas)</text><rect x="280" y="170" width="170" height="80" class="f-blue" fill="currentColor" fill-opacity="0.15"/><line x1="280" y1="170" x2="450" y2="170" stroke="currentColor" class="s-blue" stroke-width="1.5"/><path d="M280 40 V250 H450 V40" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="283" y="50" width="164" height="10" fill="currentColor" class="f-gray" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/><line x1="365.0" y1="50" x2="365.0" y2="22" stroke="currentColor" stroke-width="3"/><text x="379.0" y="34" font-size="14" text-anchor="start">pressure 2P</text><circle cx="411.7" cy="140.1" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="407.7" cy="89.9" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="338.0" cy="125.4" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="380.0" cy="129.1" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="365.8" cy="88.6" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="316.9" cy="99.0" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="300.6" cy="125.4" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="435.6" cy="90.0" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="352.3" cy="151.4" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="341.0" cy="74.8" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="300.4" cy="192.8" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="405.3" cy="202.9" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="335.2" cy="189.0" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="433.4" cy="206.0" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="329.4" cy="235.9" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><circle cx="364.2" cy="188.8" r="7" class="f-red" fill="currentColor" stroke="currentColor" stroke-width="1"/><text x="365.0" y="272" text-anchor="middle" font-size="13">6 dissolved: S doubles</text></svg>`,
  tyndall: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="132" width="34" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="42,138 56,128 56,172 42,162" fill="none" stroke="currentColor" stroke-width="2"/><text x="32" y="195" text-anchor="middle" font-size="12">light</text><line x1="56" y1="150" x2="110" y2="150" stroke="currentColor" class="s-orange" stroke-width="3" stroke-dasharray="6 4"/><line x1="260" y1="150" x2="320" y2="150" stroke="currentColor" class="s-orange" stroke-width="3" stroke-dasharray="6 4"/><rect x="110" y="90" width="150" height="130" fill="currentColor" class="f-blue" fill-opacity="0.1"/><path d="M104 70 L110 76 V220 H260 V76 L266 70" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="185.0" y="250" text-anchor="middle" font-size="14" font-weight="600">true solution</text><text x="185.0" y="268" text-anchor="middle" font-size="12" class="t-gray">beam passes unseen</text><rect x="320" y="90" width="150" height="130" fill="currentColor" class="f-orange" fill-opacity="0.18"/><path d="M314 70 L320 76 V220 H470 V76 L476 70" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="320" y="141" width="150" height="18" class="f-orange" fill="currentColor" fill-opacity="0.55"/><circle cx="371.4" cy="116.6" r="2.6" fill="currentColor" class="f-gray"/><circle cx="415.2" cy="108.0" r="2.6" fill="currentColor" class="f-gray"/><circle cx="399.8" cy="140.2" r="2.6" fill="currentColor" class="f-gray"/><circle cx="335.8" cy="155.8" r="2.6" fill="currentColor" class="f-gray"/><circle cx="333.0" cy="147.7" r="2.6" fill="currentColor" class="f-gray"/><circle cx="337.4" cy="110.0" r="2.6" fill="currentColor" class="f-gray"/><circle cx="384.9" cy="191.0" r="2.6" fill="currentColor" class="f-gray"/><circle cx="344.6" cy="124.6" r="2.6" fill="currentColor" class="f-gray"/><circle cx="412.1" cy="204.2" r="2.6" fill="currentColor" class="f-gray"/><circle cx="405.3" cy="143.6" r="2.6" fill="currentColor" class="f-gray"/><circle cx="458.8" cy="105.1" r="2.6" fill="currentColor" class="f-gray"/><circle cx="443.0" cy="131.9" r="2.6" fill="currentColor" class="f-gray"/><circle cx="347.3" cy="113.0" r="2.6" fill="currentColor" class="f-gray"/><circle cx="369.3" cy="189.8" r="2.6" fill="currentColor" class="f-gray"/><circle cx="352.2" cy="164.0" r="2.6" fill="currentColor" class="f-gray"/><circle cx="413.6" cy="141.0" r="2.6" fill="currentColor" class="f-gray"/><line x1="345" y1="137" x2="353" y2="120" stroke="currentColor" class="s-orange" stroke-width="1.6" stroke-linecap="round"/><line x1="345" y1="163" x2="353" y2="180" stroke="currentColor" class="s-orange" stroke-width="1.6" stroke-linecap="round"/><line x1="375" y1="137" x2="367" y2="120" stroke="currentColor" class="s-orange" stroke-width="1.6" stroke-linecap="round"/><line x1="375" y1="163" x2="367" y2="180" stroke="currentColor" class="s-orange" stroke-width="1.6" stroke-linecap="round"/><line x1="405" y1="137" x2="413" y2="120" stroke="currentColor" class="s-orange" stroke-width="1.6" stroke-linecap="round"/><line x1="405" y1="163" x2="413" y2="180" stroke="currentColor" class="s-orange" stroke-width="1.6" stroke-linecap="round"/><line x1="435" y1="137" x2="427" y2="120" stroke="currentColor" class="s-orange" stroke-width="1.6" stroke-linecap="round"/><line x1="435" y1="163" x2="427" y2="180" stroke="currentColor" class="s-orange" stroke-width="1.6" stroke-linecap="round"/><text x="395.0" y="250" text-anchor="middle" font-size="14" font-weight="600">colloid</text><text x="395.0" y="268" text-anchor="middle" font-size="12" class="t-gray">beam visible (scattered)</text><text x="250" y="30" text-anchor="middle" font-size="13">Particles of 1–1000 nm scatter light; ions and small molecules (&lt; 1 nm) do not.</text></svg>`,
};
// </figures>

export const lesson: Lesson = {
  id: 'gchem-solution-process',
  title: 'The Solution Process and Solubility',
  summary: 'Why things dissolve, measured in energy: the three-step enthalpy model, cold and hot packs, how temperature and pressure set solubility (Henry\'s law and the bends), and colloids.',
  minutes: 20,
  objectives: [
    'Break dissolving into three enthalpy steps and use them to explain the sign of $\\Delta H_{\\text{soln}}$',
    'Combine lattice energy and hydration enthalpy to estimate the enthalpy of solution of an ionic solid',
    'Explain why some salts dissolve endothermically, and calculate the temperature change of a cold or hot pack',
    'Predict how temperature changes the solubility of solids and of gases, and explain why',
    'Use Henry\'s law $S = k_H P$ for carbonated drinks, dissolved oxygen and decompression sickness in divers',
    'Distinguish solutions, colloids and suspensions, and explain the Tyndall effect',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Dissolving is an energy trade in three steps',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations you met the vocabulary: a [[solute]] dissolves in a [[solvent]] to make a [[chemical-solution|solution]], and "like dissolves like" because similar [[intermolecular-forces|intermolecular forces]] can replace each other. Now you will put numbers on that slogan. Dissolving is a trade of attractions, and every trade has an energy bill.',
        },
        {
          type: 'p',
          text: '[[gchem-enthalpy|Enthalpy]] is a state function, so you may imagine any path from start to finish. The most useful path splits dissolving into three hypothetical steps:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Separate the solute ($\\Delta H_1 > 0$)', text: 'Pull solute particles away from each other, overcoming solute–solute attractions. Breaking attractions always costs energy.' },
            { title: 'Make room in the solvent ($\\Delta H_2 > 0$)', text: 'Push solvent molecules apart to open cavities, overcoming solvent–solvent attractions. Also costs energy.' },
            { title: 'Mix ($\\Delta H_3 < 0$)', text: 'Let solute particles fall into the cavities. New solute–solvent attractions form and release energy.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Enthalpy of solution',
          tex: '\\Delta H_{\\text{soln}} = \\Delta H_1 + \\Delta H_2 + \\Delta H_3',
          text: 'The [[gchem-enthalpy-of-solution|enthalpy of solution]] is exothermic ($\\Delta H_{\\text{soln}} < 0$) when the new solute–solvent attractions release more energy than the two separations cost; endothermic when they release less.',
        },
        {
          type: 'figure',
          svg: FIG.energy,
          alt: 'Two enthalpy diagrams side by side. In each, red arrows go up from solute plus solvent to solute apart (Delta H1) and then to solute and solvent apart (Delta H2). A blue arrow comes down (Delta H3) to the solution level. On the left the solution level ends below the start, so Delta H soln is negative; on the right it ends above the start, so Delta H soln is positive.',
          caption: 'The two red climbs are the cost; the blue drop is the payback. Whether the solution ends below the starting line (exothermic, left) or above it (endothermic, right) depends only on which is bigger.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we may use an imaginary path',
          text: 'Nobody actually pulls a crystal apart into a gas of ions and then drops them into water. But enthalpy depends only on the starting and ending states, not on the route (that is Hess\'s law from the thermochemistry unit). So the sum of the three imaginary steps equals the heat you really measure when the solid dissolves in a calorimeter.',
        },
        {
          type: 'p',
          text: 'This model explains "like dissolves like" quantitatively. Oil in water fails because $\\Delta H_2$ is large (water\'s hydrogen bonds must break to make a cavity) while $\\Delta H_3$ is small (oil can offer water only weak dispersion forces). Ethanol in water succeeds because ethanol hydrogen-bonds to water, so $\\Delta H_3$ pays back most of the cost.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which condition makes dissolving **exothermic** ($\\Delta H_{\\text{soln}} < 0$)?',
      options: [
        { text: '$\\Delta H_1$ and $\\Delta H_2$ are negative', why: 'Steps 1 and 2 break attractions, and breaking attractions always costs energy. Both are positive for every solute and solvent.' },
        { text: 'The energy released by forming solute–solvent attractions exceeds the energy needed to separate solute and solvent', correct: true, why: 'That is $|\\Delta H_3| > \\Delta H_1 + \\Delta H_2$, so the sum is negative and heat flows out to the surroundings.' },
        { text: '$\\Delta H_3$ is positive', why: 'Forming attractions releases energy, so $\\Delta H_3$ is negative. A positive $\\Delta H_3$ would make $\\Delta H_{\\text{soln}}$ even more positive.' },
        { text: 'Solute and solvent have exactly the same polarity', why: 'Similar polarity helps a substance dissolve, but it does not fix the sign of $\\Delta H_{\\text{soln}}$. Many well-matched pairs, such as $\\ce{NaCl}$ and water, dissolve slightly endothermically.' },
      ],
      explanation: '$\\Delta H_{\\text{soln}} = \\Delta H_1 + \\Delta H_2 + \\Delta H_3$ with the first two positive (breaking) and the third negative (forming). The total is negative exactly when the payback $|\\Delta H_3|$ is larger than the combined cost $\\Delta H_1 + \\Delta H_2$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Ionic solids: lattice energy versus hydration',
      blocks: [
        {
          type: 'p',
          text: 'For a salt dissolving in water, step 1 is pulling the crystal apart into gaseous ions. Its cost is the [[gchem-lattice-energy|lattice energy]] you met in the bonding unit, which is huge: hundreds of kJ per mole. Steps 2 and 3 are usually combined into one number, the [[gchem-hydration-enthalpy|hydration enthalpy]]: the enthalpy change when the gaseous ions are surrounded by water molecules.',
        },
        {
          type: 'math',
          tex: '\\Delta H_{\\text{soln}} = \\underbrace{U_{\\text{lattice}}}_{>0,\\ \\text{break crystal}} + \\underbrace{\\Delta H_{\\text{hydration}}}_{<0,\\ \\text{surround ions with water}}',
          caption: 'Here $U_{\\text{lattice}}$ is the (positive) energy to separate 1 mol of the solid into gaseous ions. In water, solvation is called hydration.',
        },
        {
          type: 'p',
          text: 'Each ion pulls on the dipoles of nearby water molecules: the partially negative oxygen points toward a cation, the partially positive hydrogens toward an anion. These ion–dipole attractions are strong, which is why water can dissolve ionic crystals at all.',
        },
        {
          type: 'derivation',
          title: 'Enthalpy of solution of $\\ce{NaCl}$',
          steps: [
            { tex: '\\ce{NaCl(s) -> Na+(g) + Cl-(g)} \\qquad \\Delta H = +788\\ \\text{kJ/mol}', why: 'Step 1, the lattice energy of $\\ce{NaCl}$: pull the crystal apart into gaseous ions.' },
            { tex: '\\ce{Na+(g) + Cl-(g) -> Na+(aq) + Cl-(aq)} \\qquad \\Delta H = -784\\ \\text{kJ/mol}', why: 'Steps 2 and 3 combined: the hydration enthalpy of one mole of each ion.' },
            { tex: '\\Delta H_{\\text{soln}} = +788 + (-784) = +4\\ \\text{kJ/mol}', why: 'Hess\'s law: add the two steps. The gaseous ions cancel, leaving $\\ce{NaCl(s) -> Na+(aq) + Cl-(aq)}$.' },
          ],
          result: 'Two enormous numbers nearly cancel, leaving a tiny endothermic $\\Delta H_{\\text{soln}}$ (the measured value is $+3.9$ kJ/mol). That is typical: $\\Delta H_{\\text{soln}}$ is a small difference of large terms, so it can have either sign.',
        },
        {
          type: 'table',
          headers: ['Solute', '$\\Delta H_{\\text{soln}}$ (kJ/mol)', 'Feels'],
          rows: [
            ['$\\ce{NH4NO3}$', '$+25.7$', 'cold'],
            ['$\\ce{KNO3}$', '$+34.9$', 'cold'],
            ['$\\ce{NaCl}$', '$+3.9$', 'barely cooler'],
            ['$\\ce{NaOH}$', '$-44.5$', 'hot'],
            ['$\\ce{CaCl2}$', '$-81.3$', 'hot'],
          ],
          caption: 'Standard enthalpies of solution in water at 25 °C (standard handbook values, infinite dilution).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why would anything dissolve if it costs energy?',
          text: 'If nature only ran "downhill" in energy, $\\ce{NH4NO3}$ would never dissolve. It does, readily, because energy is only half the story. The other half is [[gchem-entropy|entropy]], a measure of how many ways the particles can be arranged. Ions locked in a crystal have few arrangements; ions wandering through a liquid have astronomically many. The thermodynamics unit makes this exact with $\\Delta G = \\Delta H - T\\Delta S$: a process is [[gchem-spontaneous-process|spontaneous]] when $\\Delta G < 0$, which an endothermic process ($\\Delta H > 0$) can still achieve if its entropy gain ($\\Delta S > 0$) is large enough. Two ideal gases mix completely with $\\Delta H = 0$ for exactly this reason.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Potassium chloride has a lattice energy of $+715$ kJ/mol, and the hydration enthalpy of $\\ce{K+(g)}$ plus $\\ce{Cl-(g)}$ is $-698$ kJ/mol. Estimate $\\Delta H_{\\text{soln}}$ of $\\ce{KCl}$ (whole number, with sign).',
      hint: 'Add the cost of breaking the lattice to the (negative) hydration enthalpy.',
      label: '$\\Delta H_{\\text{soln}} =$',
      unit: 'kJ/mol',
      answer: '715 - 698',
      answerTex: '+17\\ \\text{kJ/mol}',
      tolerance: 0.5,
      explanation: '$\\Delta H_{\\text{soln}} = U_{\\text{lattice}} + \\Delta H_{\\text{hydration}} = 715 + (-698) = +17$ kJ/mol. The positive sign means dissolving $\\ce{KCl}$ absorbs heat, so the water gets colder (the measured value is $+17.2$ kJ/mol). Notice again that a small answer comes from two large, nearly cancelling numbers: an error of just 2% in either one would change the answer by almost 100%.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'Because dissolving ammonium nitrate in water is endothermic, it cannot happen spontaneously; you must keep heating the mixture to make it dissolve.',
      answer: false,
      explanation: 'Ammonium nitrate dissolves spontaneously and quickly at room temperature, pulling the heat it needs out of the water (that is how a cold pack works). Spontaneity is decided by $\\Delta G = \\Delta H - T\\Delta S$, not by $\\Delta H$ alone. Here the large entropy gain of ions spreading through the liquid outweighs the $+25.7$ kJ/mol enthalpy cost.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Cold packs, hot packs and the ration heater',
      blocks: [
        {
          type: 'p',
          text: 'An instant cold pack is a plastic bag holding a solid, usually $\\ce{NH4NO3}$, and an inner pouch of water. Squeeze it, the pouch bursts, and the salt dissolves. The heat absorbed comes from the water itself, so the mixture gets cold. An instant hot pack is the same design with a salt that dissolves exothermically, such as $\\ce{CaCl2}$ or $\\ce{MgSO4}$.',
        },
        {
          type: 'math',
          tex: '\\ce{NH4NO3(s) ->[H2O] NH4+(aq) + NO3-(aq)} \\qquad \\Delta H_{\\text{soln}} = +25.7\\ \\text{kJ/mol}',
        },
        {
          type: 'derivation',
          title: 'How cold does a pack get? 50.0 g $\\ce{NH4NO3}$ in 125 g of water at 25.0 °C',
          steps: [
            { tex: 'n = \\frac{50.0\\ \\cancel{\\text{g}}}{80.04\\ \\cancel{\\text{g}}/\\text{mol}} = 0.6247\\ \\text{mol}\\ \\ce{NH4NO3}', why: 'Molar mass of $\\ce{NH4NO3}$: $2(14.007) + 4(1.008) + 3(15.999) = 80.04$ g/mol.' },
            { tex: 'q_{\\text{absorbed}} = 0.6247\\ \\cancel{\\text{mol}} \\times 25.7\\ \\text{kJ}/\\cancel{\\text{mol}} = 16.05\\ \\text{kJ}', why: 'Each mole dissolving absorbs 25.7 kJ. This heat is taken from the solution.' },
            { tex: 'q_{\\text{solution}} = -16.05\\ \\text{kJ} = -16\\,050\\ \\text{J}', why: 'Assume an insulated pack: the heat absorbed by dissolving equals the heat lost by the solution.' },
            { tex: '\\Delta T = \\frac{q}{m c} = \\frac{-16\\,050\\ \\text{J}}{(175\\ \\text{g})(4.18\\ \\text{J g}^{-1}\\,^\\circ\\text{C}^{-1})} = -21.9\\ ^\\circ\\text{C}', why: 'From $q = mc\\Delta T$ (calorimetry unit). The mass is solution, $50.0 + 125 = 175$ g, and we approximate its specific heat by that of water.' },
            { tex: 'T_{\\text{final}} = 25.0 - 21.9 = 3.1\\ ^\\circ\\text{C}', why: 'Subtract the drop from the starting temperature.' },
          ],
          result: 'The pack falls to about 3 °C, close to ice-water cold, with no refrigerator: useful in a field first-aid kit.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The MRE heater is a reaction, not a dissolution',
          text: 'The flameless ration heater in a Meal, Ready-to-Eat looks like a hot pack, but its heat comes from a chemical reaction. Adding salt water to powdered magnesium (alloyed with a little iron) gives $\\ce{Mg(s) + 2H2O(l) -> Mg(OH)2(s) + H2(g)}$ with $\\Delta H^\\circ \\approx -353$ kJ per mole of Mg, roughly four times the heat of dissolving a mole of $\\ce{CaCl2}$. The hydrogen gas it releases is why the instructions say to use it in a ventilated space and away from flames.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Reusable "click" hand warmers work differently again: they hold a *supersaturated* sodium acetate solution. Clicking the metal disc seeds crystallization, and crystallizing is the reverse of an endothermic dissolution, so it releases heat. Boiling the pouch redissolves the crystals and resets it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'A hot pack contains 40.0 g of $\\ce{CaCl2}$ ($M = 110.98$ g/mol, $\\Delta H_{\\text{soln}} = -81.3$ kJ/mol) and 100.0 g of water. Assuming no heat is lost and the solution\'s specific heat is $4.18\\ \\text{J g}^{-1}\\,^\\circ\\text{C}^{-1}$, by how many degrees does its temperature **rise**? (three significant figures)',
      hint: 'Moles of $\\ce{CaCl2}$ → heat released ($n \\times 81.3$ kJ) → $\\Delta T = q/(mc)$ with $m = 140.0$ g.',
      label: '$\\Delta T =$',
      unit: '°C',
      answer: '(40.0/110.98)*81.3*1000/(140.0*4.18)',
      answerTex: '50.1\\ ^\\circ\\text{C}',
      tolerance: 0.15,
      explanation: '$n = 40.0 / 110.98 = 0.3604$ mol; heat released $= 0.3604 \\times 81.3 = 29.30$ kJ $= 29\\,300$ J. The solution has mass $40.0 + 100.0 = 140.0$ g, so $\\Delta T = \\frac{29\\,300}{140.0 \\times 4.18} = 50.1$ °C. Starting at 20 °C the pack would reach about 70 °C in theory; real packs lose heat to the bag and surroundings and peak lower.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Temperature and solubility: solids versus gases',
      blocks: [
        {
          type: 'p',
          text: 'At saturation, dissolving and crystallizing run at equal rates: a [[gchem-dynamic-equilibrium|dynamic equilibrium]] between undissolved and dissolved solute. Heating favors whichever direction absorbs heat (a preview of [[gchem-le-chatelier|Le Châtelier\'s principle]] from the equilibrium unit). So the sign of the enthalpy of dissolving tells you which way solubility moves with temperature.',
        },
        {
          type: 'list',
          items: [
            '**Most ionic and molecular solids** dissolve endothermically near saturation, so they become **more** soluble when heated. The steeper the curve, the more endothermic: $\\ce{KNO3}$ ($+34.9$ kJ/mol) climbs steeply while $\\ce{NaCl}$ ($+3.9$ kJ/mol) is nearly flat.',
            '**A few solids** that dissolve exothermically, such as cerium(III) sulfate, become *less* soluble when heated.',
            '**Every gas** in water becomes less soluble when heated. A gas has no solute–solute attractions to break ($\\Delta H_1 \\approx 0$) and only small cavity costs, so dissolving it is exothermic. It also loses a lot of entropy when its molecules are captured by the liquid, and at higher $T$ that loss counts for more.',
          ],
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [0, 250],
          xStep: 10,
          yStep: 25,
          functions: [
            { expr: '0.0000205x^3 + 0.014445x^2 + 0.66566x + 12.881', label: '$\\ce{KNO3}$', color: 'blue', domain: [0, 100] },
            { expr: '27.6 + 0.291x', label: '$\\ce{KCl}$', color: 'green', domain: [0, 100] },
            { expr: '35.7 + 0.035x', label: '$\\ce{NaCl}$', color: 'orange', domain: [0, 100] },
          ],
          vlines: [{ x: 'u', label: 'T', color: 'gray' }],
          sliders: [{ name: 'u', min: 0, max: 100, step: 1, value: 20, label: 'temperature (°C)' }],
          readouts: [
            { label: '$\\ce{KNO3}$ (g per 100 g water) $=$', expr: '0.0000205u^3 + 0.014445u^2 + 0.66566u + 12.881', digits: 3 },
            { label: '$\\ce{NaCl}$ (g per 100 g water) $=$', expr: '35.7 + 0.035u', digits: 3 },
          ],
          caption: 'Solubility (grams per 100 g of water, smooth fits to handbook data) against temperature in °C. Slide the temperature: $\\ce{KNO3}$ goes from about 13 g at 0 °C to about 246 g at 100 °C, while $\\ce{NaCl}$ barely moves. That is why recrystallization (dissolve hot, cool, collect crystals) works beautifully for $\\ce{KNO3}$ and poorly for table salt.',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 16],
          xStep: 5,
          yStep: 2,
          functions: [{ expr: '14.46 - 0.3376x + 0.003489x^2', label: 'dissolved $\\ce{O2}$ (mg/L)', color: 'blue', domain: [0, 40] }],
          hlines: [{ y: 5, label: 'stress for many fish', color: 'red' }],
          caption: 'Dissolved oxygen in fresh water in equilibrium with air at 1 atm, against temperature in °C (fit to tabulated data). Water at 30 °C holds only about half the oxygen of water at 0 °C. Warm discharge from power plants ("thermal pollution") can push a river below the level fish need.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Solubility is not speed',
          text: 'Stirring, grinding and heating all make a solid dissolve **faster**. Only temperature changes **how much** can dissolve (its solubility). Stirring sugar into iced tea gets you to saturation sooner; it does not raise the saturation limit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'An opened can of soda goes flat much faster on a hot day than in the refrigerator. Which explanation is correct?',
      options: [
        { text: 'Dissolving $\\ce{CO2}$ in water is endothermic, so heating should increase its solubility', why: 'The premise is backwards: dissolving a gas is exothermic, which is why heating *lowers* gas solubility.' },
        { text: 'Dissolving $\\ce{CO2}$ is exothermic, so at higher temperature the equilibrium shifts toward undissolved gas: the solubility drops and the excess escapes', correct: true, why: 'Heat favors the endothermic direction, which for a gas is leaving the solution. The warmer soda is supersaturated relative to its new, lower solubility.' },
        { text: 'Warm water has stronger hydrogen bonds that push the $\\ce{CO2}$ out', why: 'Hydrogen bonding gets weaker, not stronger, with temperature. The effect is about the energy and entropy of dissolving the gas.' },
        { text: 'Heating breaks the $\\ce{CO2}$ molecules apart', why: '$\\ce{CO2}$ is very stable; nothing decomposes at drink temperatures. The gas simply comes out of solution.' },
      ],
      explanation: 'For any gas, $\\ce{gas + water <=> solution}$ releases heat. Raising $T$ shifts this equilibrium to the left, so less gas can stay dissolved. A warm soda is holding more $\\ce{CO2}$ than its new solubility allows, and bubbles out until it reaches the lower equilibrium. The same physics explains why fish crowd into deep, cool water in summer.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Pressure and gas solubility: Henry\'s law',
      blocks: [
        {
          type: 'p',
          text: 'Pressure barely affects the solubility of solids and liquids, because they are nearly incompressible. For gases it is decisive. Double the pressure of a gas above a liquid and twice as much of it dissolves. This is [[gchem-henrys-law|Henry\'s law]].',
        },
        {
          type: 'theorem',
          name: 'Henry\'s law',
          tex: 'S_{\\text{gas}} = k_H\\,P_{\\text{gas}}',
          text: '$S_{\\text{gas}}$ is the solubility (molarity of dissolved gas), $P_{\\text{gas}}$ is the **partial pressure** of that gas above the liquid, and $k_H$ is the Henry\'s law constant, which depends on the gas, the solvent and the temperature.',
        },
        {
          type: 'figure',
          svg: FIG.henry,
          alt: 'Two piston cylinders with liquid in the bottom. Left: pressure P, five gas molecules above the liquid and three dissolved. Right: pressure 2P, ten gas molecules above and six dissolved.',
          caption: 'Twice the gas pressure means twice as many gas molecules striking the surface each second, so twice as many must be dissolved before escapes balance captures.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why solubility is proportional to pressure',
          text: 'Think kinetically. Gas molecules enter the liquid at a rate proportional to how often they hit the surface, which by [[chem-kinetic-molecular-theory|kinetic-molecular theory]] is proportional to $P$: rate$_{\\text{in}} = k_1 P$. Dissolved molecules escape at a rate proportional to their concentration: rate$_{\\text{out}} = k_2 S$. At equilibrium the rates are equal, $k_1 P = k_2 S$, so $S = (k_1/k_2) P = k_H P$. The law holds for dilute solutions of gases that do not react with the solvent; very soluble gases such as $\\ce{NH3}$, which reacts with water, deviate strongly.',
        },
        {
          type: 'table',
          headers: ['Gas', '$k_H$ in water at 25 °C (M/atm)'],
          rows: [
            ['$\\ce{He}$', '$3.7 \\times 10^{-4}$'],
            ['$\\ce{N2}$', '$6.1 \\times 10^{-4}$'],
            ['$\\ce{O2}$', '$1.3 \\times 10^{-3}$'],
            ['$\\ce{CO2}$', '$3.4 \\times 10^{-2}$'],
          ],
          caption: 'Typical textbook values. $\\ce{CO2}$ is about 50 times more soluble than $\\ce{N2}$ because it interacts more strongly with water (and a small fraction reacts to form carbonic acid).',
        },
        {
          type: 'derivation',
          title: 'Why a soda fizzes: bottled under 3.0 atm of $\\ce{CO2}$, opened in air',
          steps: [
            { tex: 'S_{\\text{sealed}} = (3.4 \\times 10^{-2}\\ \\text{M/atm})(3.0\\ \\text{atm}) = 0.10\\ \\text{M}', why: 'In the sealed can, the gas above the drink is nearly pure $\\ce{CO2}$ at about 3 atm. The atm units cancel, leaving molarity.' },
            { tex: 'P_{\\ce{CO2}}^{\\text{air}} \\approx 4.2 \\times 10^{-4}\\ \\text{atm}', why: 'Air is about 0.042% $\\ce{CO2}$ by moles, so by Dalton\'s law its partial pressure is $0.00042 \\times 1$ atm. Henry\'s law needs the partial pressure, not the total.' },
            { tex: 'S_{\\text{open}} = (3.4 \\times 10^{-2})(4.2 \\times 10^{-4}) = 1.4 \\times 10^{-5}\\ \\text{M}', why: 'The equilibrium solubility once the can is open: about 7000 times lower.' },
            { tex: 'V = \\frac{nRT}{P} = \\frac{(0.10\\ \\text{mol})(0.08206\\ \\text{L atm mol}^{-1}\\text{K}^{-1})(298\\ \\text{K})}{1.00\\ \\text{atm}} \\approx 2.5\\ \\text{L}', why: 'Essentially all 0.10 mol per liter must eventually leave. The ideal gas law turns that into a volume at 25 °C and 1 atm.' },
          ],
          result: 'Each liter of soda has to release about 2.5 L of $\\ce{CO2}$ to reach equilibrium with air. It does so slowly, through bubbles that nucleate on scratches and dust, which is why a drink takes hours to go completely flat.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Air is 21% $\\ce{O2}$ by moles. Use Henry\'s law with $k_H(\\ce{O2}) = 1.3 \\times 10^{-3}$ M/atm to estimate the dissolved oxygen in water open to air at 1.00 atm and 25 °C, in **milligrams per liter** ($\\ce{O2}$: 32.00 g/mol; two significant figures).',
      hint: 'Partial pressure first: $P_{\\ce{O2}} = 0.21 \\times 1.00$ atm. Then $S = k_H P$ in mol/L, then multiply by 32.00 g/mol and by 1000 mg/g.',
      label: '$[\\ce{O2}] =$',
      unit: 'mg/L',
      answer: '1.3*10^-3*0.21*32.00*1000',
      answerTex: '8.7\\ \\text{mg/L}',
      tolerance: 0.06,
      explanation: '$P_{\\ce{O2}} = 0.21$ atm, so $S = (1.3 \\times 10^{-3})(0.21) = 2.73 \\times 10^{-4}$ M. Converting: $2.73 \\times 10^{-4}\\ \\text{mol/L} \\times 32.00\\ \\text{g/mol} = 8.7 \\times 10^{-3}$ g/L $= 8.7$ mg/L. Measured tables give 8.3 mg/L at 25 °C; the small difference comes from the rounded constant and from water vapor diluting the air right above the surface. Using the total pressure (1.00 atm) instead of the partial pressure would overestimate by a factor of almost 5.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Diving, altitude and the bends',
      blocks: [
        {
          type: 'p',
          text: 'Seawater adds about 1 atm of pressure for every 10 m (33 ft) of depth. A scuba regulator delivers air at the surrounding pressure, so at 30 m a diver breathes air at about 4 atm. Every gas in it, including the 78% that is $\\ce{N2}$, has four times its surface partial pressure, and by Henry\'s law the blood and tissues slowly load up with four times as much dissolved nitrogen.',
        },
        {
          type: 'derivation',
          title: 'Extra nitrogen in the blood after a long stay at 30 m (treat blood as water)',
          steps: [
            { tex: 'S_{\\text{surface}} = (6.1 \\times 10^{-4})(0.78 \\times 1.0\\ \\text{atm}) = 4.8 \\times 10^{-4}\\ \\text{M}', why: 'At the surface, $P_{\\ce{N2}} = 0.78$ atm.' },
            { tex: 'S_{30\\,\\text{m}} = (6.1 \\times 10^{-4})(0.78 \\times 4.0\\ \\text{atm}) = 1.9 \\times 10^{-3}\\ \\text{M}', why: 'Total pressure is 1 atm of air plus 3 atm of water, so $P_{\\ce{N2}} = 0.78 \\times 4.0 = 3.1$ atm.' },
            { tex: '\\Delta n = (1.9 \\times 10^{-3} - 4.8 \\times 10^{-4})\\ \\tfrac{\\text{mol}}{\\text{L}} \\times 5.0\\ \\text{L} = 7.1 \\times 10^{-3}\\ \\text{mol}', why: 'The excess per liter, times an adult\'s roughly 5 L of blood.' },
            { tex: 'V = \\frac{(7.1 \\times 10^{-3})(0.08206)(310)}{1.0} \\approx 0.18\\ \\text{L}', why: 'Ideal gas law at body temperature (310 K) and 1 atm: the volume this nitrogen would occupy as gas.' },
          ],
          result: 'Roughly 180 mL of nitrogen gas is waiting to come out of the blood alone, and fatty tissue, where nitrogen is several times more soluble, holds much more.',
        },
        {
          type: 'p',
          text: 'Ascend slowly and the extra nitrogen diffuses from tissues into the blood and out through the lungs. Ascend fast and the tissues are suddenly **supersaturated**, exactly like a soda when the cap comes off: nitrogen forms bubbles in joints, tissues and blood vessels. This is decompression sickness, "the bends", which causes joint pain, paralysis, or worse.',
        },
        {
          type: 'list',
          items: [
            '**Decompression stops:** dive tables and dive computers schedule pauses during ascent so dissolved $\\ce{N2}$ can leave gradually instead of forming bubbles.',
            '**Treatment:** a recompression (hyperbaric) chamber raises the pressure again, which shrinks bubbles (Boyle\'s law) and pushes the gas back into solution (Henry\'s law). The patient breathes oxygen while the pressure is lowered slowly.',
            '**Altitude is the same physics:** flying soon after diving lowers the pressure further and can trigger the bends; high-altitude parachutists and pilots in unpressurized aircraft pre-breathe pure oxygen to flush nitrogen out of their tissues before ascent.',
            '**Deep diving gases:** helium has a smaller $k_H$ than nitrogen and does not cause nitrogen narcosis, so deep divers breathe helium–oxygen mixtures.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A dive computer is a differential-equation solver',
          text: 'Dive computers model the body as several tissue "compartments" with half-times ranging from a few minutes to many hours (the Bühlmann model). Each compartment\'s nitrogen pressure obeys $\\frac{dP_t}{dt} = k\\,(P_{\\text{amb}} - P_t)$ with $k = \\ln 2 / t_{1/2}$: it relaxes exponentially toward the ambient nitrogen pressure. The firmware advances this every few seconds with an update like `Pt += (Pamb - Pt) * (1 - exp(-k * dt));` and forbids any ascent that would make a compartment too supersaturated.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student estimates the concentration of dissolved $\\ce{N2}$ in a diver\'s blood at 20 m of seawater ($k_H = 6.1 \\times 10^{-4}$ M/atm; air is 78% $\\ce{N2}$). Tap the first line that is wrong.',
      lines: [
        'Pressure at 20 m: 1.0 atm (air) + 2.0 atm (water) = 3.0 atm total',
        'Henry\'s law: $S = k_H P = (6.1 \\times 10^{-4})(3.0) = 1.8 \\times 10^{-3}$ M',
        'At the surface: $S = (6.1 \\times 10^{-4})(0.78) = 4.8 \\times 10^{-4}$ M',
        'So at 20 m the blood holds $1.8 \\times 10^{-3} / 4.8 \\times 10^{-4} \\approx 3.8$ times as much $\\ce{N2}$',
      ],
      errorLines: [2],
      explanation: 'Henry\'s law uses the **partial pressure** of the dissolving gas, not the total pressure. The diver breathes air at 3.0 atm, so $P_{\\ce{N2}} = 0.78 \\times 3.0 = 2.34$ atm and $S = (6.1 \\times 10^{-4})(2.34) = 1.4 \\times 10^{-3}$ M. Line 3 correctly uses the partial pressure at the surface, so the ratio is exactly $3.0$: the dissolved nitrogen scales with depth pressure, not 3.8.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Between solutions and suspensions: colloids',
      blocks: [
        {
          type: 'p',
          text: 'Mixtures form a spectrum by particle size. In a true solution the dispersed particles are single ions or molecules, under about 1 nm across. In a **suspension** they are larger than about 1000 nm (1 µm) and settle out, like sand stirred into water. In between lies the [[gchem-colloid|colloid]]: particles of roughly 1–1000 nm that stay dispersed indefinitely.',
        },
        {
          type: 'table',
          headers: ['Colloid type', 'Dispersed in', 'Examples'],
          rows: [
            ['Aerosol', 'liquid or solid in gas', 'fog, clouds, smoke, smoke screens'],
            ['Foam', 'gas in liquid', 'whipped cream, firefighting foam'],
            ['Emulsion', 'liquid in liquid', 'milk, mayonnaise'],
            ['Sol', 'solid in liquid', 'paint, ink'],
            ['Gel', 'liquid held in a solid network', 'gelatin, jelly'],
          ],
        },
        {
          type: 'p',
          text: 'Colloidal particles stay up because they are small enough to be kicked around by random molecular collisions (Brownian motion) and because they often carry like electric charges on their surfaces, so they repel instead of clumping. Emulsions such as mayonnaise also need an **emulsifier**, a molecule with a polar end and a nonpolar end (like soap or the lecithin in egg yolk) that coats the droplets.',
        },
        {
          type: 'figure',
          svg: FIG.tyndall,
          alt: 'A light shines a beam through two beakers. In the first, a true solution, the beam cannot be seen inside the liquid. In the second, a colloid with small dispersed particles, the beam shows as a bright band with light scattering off to the sides.',
          caption: 'The [[gchem-tyndall-effect|Tyndall effect]]: colloidal particles are comparable in size to the wavelength of visible light (400–700 nm) and scatter it sideways, so the beam\'s path becomes visible. Ions are far too small to do this.',
        },
        {
          type: 'p',
          text: 'You have seen the Tyndall effect in headlight beams in fog, sunbeams in a dusty room and searchlights at night. It is also why military smoke screens work: an aerosol of particles about the size of the wavelength of light scatters light in every direction, so the view through it is lost. A quick lab test follows from it: shine a laser pointer through a liquid; if you see the beam inside, it is a colloid, not a true solution.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the statements.',
      template: 'Fog scatters a headlight beam because it is a ___ of tiny water droplets; this scattering is called the ___. Clear salt water does not scatter the beam because its dissolved ions are smaller than about ___.',
      blanks: [{ answers: ['colloid'] }, { answers: ['Tyndall effect'] }, { answers: ['1 nm'] }],
      wordBank: ['colloid', 'true solution', 'Tyndall effect', 'Henry\'s law', '1 nm', '1 mm'],
      explanation: 'Fog is an aerosol, a colloid of liquid droplets in air, with droplets large enough (around the wavelength of light) to scatter light: the Tyndall effect. Dissolved ions are under 1 nm, hundreds of times smaller than visible wavelengths, so a true solution transmits the beam without making it visible. Henry\'s law is about gas solubility and pressure, and 1 mm particles would form a suspension that settles out.',
    },
  ],
  takeaways: [
    'Dissolving = separate solute ($\\Delta H_1 > 0$) + separate solvent ($\\Delta H_2 > 0$) + form solute–solvent attractions ($\\Delta H_3 < 0$); $\\Delta H_{\\text{soln}}$ is their sum and can have either sign.',
    'For a salt in water, $\\Delta H_{\\text{soln}} = U_{\\text{lattice}} + \\Delta H_{\\text{hydration}}$: a small difference between two very large numbers.',
    'Endothermic dissolving (cold packs with $\\ce{NH4NO3}$) still happens spontaneously because of the entropy gain; exothermic dissolving ($\\ce{CaCl2}$) makes hot packs.',
    'Most solids get more soluble when heated; every gas gets less soluble when heated (dissolving a gas is exothermic).',
    'Henry\'s law: $S = k_H P_{\\text{gas}}$, with the gas\'s **partial** pressure. It explains fizzing drinks, dissolved oxygen in rivers, and the bends in divers who ascend too fast.',
    'Colloids have particles of about 1–1000 nm that stay dispersed and scatter light (Tyndall effect); true solutions do not scatter.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 11: Solutions and Colloids',
      url: 'https://openstax.org/books/chemistry-2e/pages/11-introduction',
      source: 'openstax',
      note: 'Sections 11.1, 11.3 and 11.5 cover the dissolution process, solubility (including Henry\'s law) and colloids, with worked examples.',
    },
    {
      title: 'Wikipedia — Henry\'s law',
      url: 'https://en.wikipedia.org/wiki/Henry%27s_law',
      source: 'wikipedia',
      note: 'The many unit conventions for Henry\'s constant, its temperature dependence, and applications from soda to geochemistry.',
    },
    {
      title: 'Wikipedia — Decompression sickness',
      url: 'https://en.wikipedia.org/wiki/Decompression_sickness',
      source: 'wikipedia',
      note: 'Causes, symptoms, prevention with decompression schedules, and hyperbaric treatment of the bends, including altitude exposure.',
    },
    {
      title: 'Wikipedia — Tyndall effect',
      url: 'https://en.wikipedia.org/wiki/Tyndall_effect',
      source: 'wikipedia',
      note: 'Light scattering by colloids, how it differs from Rayleigh scattering by molecules, and everyday examples.',
    },
  ],
};
