import type { Lesson } from '../../types';

const FIG_MOTION = `<svg viewBox="0 0 500 218" xmlns="http://www.w3.org/2000/svg"><text x="85" y="22" text-anchor="middle" font-size="15" font-weight="600">Translation</text><line x1="62.0" y1="75" x2="108.0" y2="75" stroke="currentColor" stroke-width="4"/><circle cx="62.0" cy="75" r="14" fill="currentColor" class="f-blue"/><circle cx="108.0" cy="75" r="14" fill="currentColor" class="f-blue"/><line x1="55.0" y1="112.0" x2="126.0" y2="112.0" stroke="currentColor" class="s-orange" stroke-width="2.5"/><polygon points="135.0,112.0 126.0,117.0 126.0,107.0" fill="currentColor" class="f-orange"/><text x="85" y="145" text-anchor="middle" font-size="13">the whole molecule</text><text x="85" y="163" text-anchor="middle" font-size="13">moves: KE = ½mv²</text><text x="250" y="22" text-anchor="middle" font-size="15" font-weight="600">Rotation</text><line x1="227.0" y1="75" x2="273.0" y2="75" stroke="currentColor" stroke-width="4"/><circle cx="227.0" cy="75" r="14" fill="currentColor" class="f-blue"/><circle cx="273.0" cy="75" r="14" fill="currentColor" class="f-blue"/><path d="M 208 100 A 50 26 0 0 0 286 108" fill="none" stroke="currentColor" class="s-orange" stroke-width="2.5"/><line x1="280.0" y1="111.0" x2="288.2" y2="106.4" stroke="currentColor" class="s-orange" stroke-width="2.5"/><polygon points="296.0,102.0 290.6,110.7 285.7,102.1" fill="currentColor" class="f-orange"/><text x="250" y="145" text-anchor="middle" font-size="13">it tumbles about</text><text x="250" y="163" text-anchor="middle" font-size="13">its center of mass</text><text x="415" y="22" text-anchor="middle" font-size="15" font-weight="600">Vibration</text><polyline points="390.0,75 394.2,67 402.5,83 410.8,67 419.2,83 427.5,67 435.8,83 440.0,75" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="378.0" cy="75" r="14" fill="currentColor" class="f-blue"/><circle cx="452.0" cy="75" r="14" fill="currentColor" class="f-blue"/><line x1="372.0" y1="112.0" x2="349.0" y2="112.0" stroke="currentColor" class="s-orange" stroke-width="2.5"/><polygon points="340.0,112.0 349.0,107.0 349.0,117.0" fill="currentColor" class="f-orange"/><line x1="458.0" y1="112.0" x2="481.0" y2="112.0" stroke="currentColor" class="s-orange" stroke-width="2.5"/><polygon points="490.0,112.0 481.0,117.0 481.0,107.0" fill="currentColor" class="f-orange"/><text x="415" y="145" text-anchor="middle" font-size="13">the bond stretches:</text><text x="415" y="163" text-anchor="middle" font-size="13">KE ⇄ PE back and forth</text><text x="250" y="192" text-anchor="middle" font-size="13" class="t-gray">Internal energy E = the energy of all these motions</text><text x="250" y="210" text-anchor="middle" font-size="13" class="t-gray">+ the potential energy of every attraction and repulsion</text></svg>`;
const FIG_SYSTEMS = `<svg viewBox="0 0 500 218" xmlns="http://www.w3.org/2000/svg"><text x="85" y="22" text-anchor="middle" font-size="15" font-weight="600">Open</text><rect x="52.0" y="100" width="66" height="56" rx="6" fill="currentColor" class="f-blue" fill-opacity="0.35"/><path d="M 50.0 60 L 50.0 150 Q 50.0 158 58.0 158 L 112.0 158 Q 120.0 158 120.0 150 L 120.0 60" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="73.0" y1="92.0" x2="73.0" y2="50.0" stroke="currentColor" class="s-gray" stroke-width="2"/><polygon points="73.0,42.0 77.4,50.0 68.6,50.0" fill="currentColor" class="f-gray"/><line x1="97.0" y1="92.0" x2="97.0" y2="56.0" stroke="currentColor" class="s-gray" stroke-width="2"/><polygon points="97.0,48.0 101.4,56.0 92.6,56.0" fill="currentColor" class="f-gray"/><text x="133" y="52" text-anchor="middle" font-size="12" class="t-gray">vapor</text><line x1="10.0" y1="128.0" x2="36.0" y2="128.0" stroke="currentColor" class="s-red" stroke-width="2.5"/><polygon points="45.0,128.0 36.0,132.9 36.0,123.0" fill="currentColor" class="f-red"/><text x="25" y="118" text-anchor="middle" font-size="13" class="t-red">q</text><text x="85" y="190" text-anchor="middle" font-size="13">matter ✓  energy ✓</text><text x="250" y="22" text-anchor="middle" font-size="15" font-weight="600">Closed</text><rect x="217.0" y="100" width="66" height="56" rx="6" fill="currentColor" class="f-blue" fill-opacity="0.35"/><path d="M 215.0 60 L 215.0 150 Q 215.0 158 223.0 158 L 277.0 158 Q 285.0 158 285.0 150 L 285.0 60" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="210" y="52" width="80" height="10" rx="2" fill="currentColor" class="f-gray"/><line x1="175.0" y1="128.0" x2="201.0" y2="128.0" stroke="currentColor" class="s-red" stroke-width="2.5"/><polygon points="210.0,128.0 201.0,132.9 201.0,123.0" fill="currentColor" class="f-red"/><text x="190" y="118" text-anchor="middle" font-size="13" class="t-red">q</text><line x1="290.0" y1="128.0" x2="316.0" y2="128.0" stroke="currentColor" class="s-red" stroke-width="2.5"/><polygon points="325.0,128.0 316.0,132.9 316.0,123.0" fill="currentColor" class="f-red"/><text x="310" y="118" text-anchor="middle" font-size="13" class="t-red">q</text><text x="250" y="190" text-anchor="middle" font-size="13">matter ✗  energy ✓</text><text x="415" y="22" text-anchor="middle" font-size="15" font-weight="600">Isolated</text><rect x="363" y="44" width="104" height="130" rx="12" fill="none" stroke="currentColor" class="s-orange" stroke-width="2" stroke-dasharray="6 4"/><rect x="382.0" y="100" width="66" height="56" rx="6" fill="currentColor" class="f-blue" fill-opacity="0.35"/><path d="M 380.0 60 L 380.0 150 Q 380.0 158 388.0 158 L 442.0 158 Q 450.0 158 450.0 150 L 450.0 60" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="375" y="52" width="80" height="10" rx="2" fill="currentColor" class="f-gray"/><text x="415" y="210" text-anchor="middle" font-size="12" class="t-orange">(insulated, sealed)</text><text x="415" y="190" text-anchor="middle" font-size="13">matter ✗  energy ✗</text><text x="250" y="210" text-anchor="middle" font-size="12" class="t-gray">(stoppered)</text><text x="85" y="210" text-anchor="middle" font-size="12" class="t-gray">(an open beaker)</text></svg>`;
const FIG_SIGNS = `<svg viewBox="0 0 500 252" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="488" height="240" rx="14" fill="none" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="5 4"/><text x="250" y="28" text-anchor="middle" font-size="13" class="t-gray">SURROUNDINGS</text><rect x="170" y="70" width="160" height="110" rx="12" fill="currentColor" class="f-blue" fill-opacity="0.12" stroke="currentColor" stroke-width="2.2"/><text x="250" y="118" text-anchor="middle" font-size="16" font-weight="600">SYSTEM</text><text x="250" y="142" text-anchor="middle" font-size="15">ΔE = q + w</text><line x1="40.0" y1="95.0" x2="154.0" y2="95.0" stroke="currentColor" class="s-red" stroke-width="3"/><polygon points="165.0,95.0 154.0,101.0 154.0,89.0" fill="currentColor" class="f-red"/><text x="100" y="85" text-anchor="middle" font-size="13" class="t-red">heat in: q &gt; 0</text><line x1="165.0" y1="155.0" x2="51.0" y2="155.0" stroke="currentColor" class="s-red" stroke-width="3"/><polygon points="40.0,155.0 51.0,148.9 51.0,161.1" fill="currentColor" class="f-red"/><text x="100" y="177" text-anchor="middle" font-size="13" class="t-red">heat out: q &lt; 0</text><text x="100" y="116" text-anchor="middle" font-size="12" class="t-gray">(endothermic)</text><text x="100" y="195" text-anchor="middle" font-size="12" class="t-gray">(exothermic)</text><text x="400" y="116" text-anchor="middle" font-size="12" class="t-gray">(e.g. compression)</text><text x="400" y="210" text-anchor="middle" font-size="12" class="t-gray">(e.g. expansion)</text><line x1="460.0" y1="95.0" x2="346.0" y2="95.0" stroke="currentColor" class="s-purple" stroke-width="3"/><polygon points="335.0,95.0 346.0,89.0 346.0,101.0" fill="currentColor" class="f-purple"/><text x="400" y="72" text-anchor="middle" font-size="13" class="t-purple">work done ON</text><text x="400" y="87" text-anchor="middle" font-size="13" class="t-purple">system: w &gt; 0</text><line x1="335.0" y1="155.0" x2="449.0" y2="155.0" stroke="currentColor" class="s-purple" stroke-width="3"/><polygon points="460.0,155.0 449.0,161.1 449.0,148.9" fill="currentColor" class="f-purple"/><text x="400" y="177" text-anchor="middle" font-size="13" class="t-purple">work done BY</text><text x="400" y="192" text-anchor="middle" font-size="13" class="t-purple">system: w &lt; 0</text><text x="250" y="234" text-anchor="middle" font-size="12">Arrows pointing in add energy to the system (+); arrows pointing out remove it (−).</text></svg>`;
const FIG_PISTON = `<svg viewBox="0 0 500 285" xmlns="http://www.w3.org/2000/svg"><path d="M 40 40 L 40 250 L 170 250 L 170 40" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="43" y="162" width="124" height="86" fill="currentColor" class="f-blue" fill-opacity="0.15"/><circle cx="77.2" cy="209.9" r="3.2" fill="currentColor" class="f-blue"/><circle cx="91.2" cy="213.9" r="3.2" fill="currentColor" class="f-blue"/><circle cx="118.3" cy="178.3" r="3.2" fill="currentColor" class="f-blue"/><circle cx="53.4" cy="229.3" r="3.2" fill="currentColor" class="f-blue"/><circle cx="79.5" cy="189.5" r="3.2" fill="currentColor" class="f-blue"/><circle cx="157.5" cy="205.0" r="3.2" fill="currentColor" class="f-blue"/><circle cx="140.7" cy="205.4" r="3.2" fill="currentColor" class="f-blue"/><circle cx="119.7" cy="183.9" r="3.2" fill="currentColor" class="f-blue"/><circle cx="119.3" cy="231.3" r="3.2" fill="currentColor" class="f-blue"/><circle cx="107.5" cy="222.9" r="3.2" fill="currentColor" class="f-blue"/><circle cx="123.2" cy="178.2" r="3.2" fill="currentColor" class="f-blue"/><circle cx="132.4" cy="213.0" r="3.2" fill="currentColor" class="f-blue"/><circle cx="83.9" cy="176.0" r="3.2" fill="currentColor" class="f-blue"/><circle cx="143.7" cy="205.2" r="3.2" fill="currentColor" class="f-blue"/><rect x="43" y="150" width="124" height="12" fill="currentColor" class="f-gray"/><rect x="100.0" y="120" width="10" height="30" fill="currentColor" class="f-gray"/><line x1="64.0" y1="116.0" x2="64.0" y2="138.0" stroke="currentColor" class="s-orange" stroke-width="2.2"/><polygon points="64.0,146.0 59.6,138.0 68.4,138.0" fill="currentColor" class="f-orange"/><line x1="146.0" y1="116.0" x2="146.0" y2="138.0" stroke="currentColor" class="s-orange" stroke-width="2.2"/><polygon points="146.0,146.0 141.6,138.0 150.4,138.0" fill="currentColor" class="f-orange"/><text x="125.0" y="114" text-anchor="middle" font-size="14" class="t-orange">P</text><text x="134.0" y="119" text-anchor="middle" font-size="10" class="t-orange">ext</text><text x="105.0" y="275" text-anchor="middle" font-size="13">initial: V₁</text><path d="M 290 40 L 290 250 L 420 250 L 420 40" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="293" y="92" width="124" height="156" fill="currentColor" class="f-blue" fill-opacity="0.15"/><circle cx="378.2" cy="223.5" r="3.2" fill="currentColor" class="f-blue"/><circle cx="377.7" cy="229.3" r="3.2" fill="currentColor" class="f-blue"/><circle cx="343.9" cy="212.9" r="3.2" fill="currentColor" class="f-blue"/><circle cx="349.1" cy="231.2" r="3.2" fill="currentColor" class="f-blue"/><circle cx="395.2" cy="117.3" r="3.2" fill="currentColor" class="f-blue"/><circle cx="316.4" cy="133.5" r="3.2" fill="currentColor" class="f-blue"/><circle cx="404.3" cy="163.3" r="3.2" fill="currentColor" class="f-blue"/><circle cx="368.4" cy="144.9" r="3.2" fill="currentColor" class="f-blue"/><circle cx="355.8" cy="156.5" r="3.2" fill="currentColor" class="f-blue"/><circle cx="339.2" cy="183.6" r="3.2" fill="currentColor" class="f-blue"/><circle cx="363.9" cy="227.0" r="3.2" fill="currentColor" class="f-blue"/><circle cx="374.3" cy="230.3" r="3.2" fill="currentColor" class="f-blue"/><circle cx="392.8" cy="238.8" r="3.2" fill="currentColor" class="f-blue"/><circle cx="373.2" cy="126.2" r="3.2" fill="currentColor" class="f-blue"/><rect x="293" y="80" width="124" height="12" fill="currentColor" class="f-gray"/><rect x="350.0" y="50" width="10" height="30" fill="currentColor" class="f-gray"/><line x1="314.0" y1="46.0" x2="314.0" y2="68.0" stroke="currentColor" class="s-orange" stroke-width="2.2"/><polygon points="314.0,76.0 309.6,68.0 318.4,68.0" fill="currentColor" class="f-orange"/><line x1="396.0" y1="46.0" x2="396.0" y2="68.0" stroke="currentColor" class="s-orange" stroke-width="2.2"/><polygon points="396.0,76.0 391.6,68.0 400.4,68.0" fill="currentColor" class="f-orange"/><text x="375.0" y="44" text-anchor="middle" font-size="14" class="t-orange">P</text><text x="384.0" y="49" text-anchor="middle" font-size="10" class="t-orange">ext</text><text x="355.0" y="275" text-anchor="middle" font-size="13">final: V₂ = V₁ + AΔh</text><line x1="290" y1="150" x2="420" y2="150" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="440.0" y1="150.0" x2="440.0" y2="102.0" stroke="currentColor" stroke-width="1.8"/><polygon points="440.0,95.0 443.9,102.0 436.1,102.0" fill="currentColor"/><line x1="440.0" y1="95.0" x2="440.0" y2="143.0" stroke="currentColor" stroke-width="1.8"/><polygon points="440.0,150.0 436.1,143.0 443.9,143.0" fill="currentColor"/><text x="452" y="127" text-anchor="start" font-size="14">Δh</text><line x1="185.0" y1="160.0" x2="266.0" y2="160.0" stroke="currentColor" stroke-width="2"/><polygon points="275.0,160.0 266.0,164.9 266.0,155.1" fill="currentColor"/><text x="230" y="150" text-anchor="middle" font-size="12">gas expands</text><text x="272" y="64" text-anchor="end" font-size="12" class="t-gray">piston,</text><text x="272" y="79" text-anchor="end" font-size="12" class="t-gray">area A</text><line x1="274.0" y1="76.0" x2="286.5" y2="81.6" stroke="currentColor" class="s-gray" stroke-width="1.5"/><polygon points="292.0,84.0 285.2,84.6 287.9,78.5" fill="currentColor" class="f-gray"/></svg>`;

export const lesson: Lesson = {
  id: 'gchem-energy-heat-work',
  title: 'Energy, Heat and Work',
  summary: 'Internal energy at the molecular level, system and surroundings, the first law ΔE = q + w with its sign conventions, pressure–volume work as an integral, and state versus path functions.',
  minutes: 18,
  objectives: [
    'Describe internal energy as the kinetic and potential energy of a system\'s particles, and distinguish temperature, heat and thermal energy',
    'Classify systems as open, closed or isolated and identify heat and work crossing the boundary',
    'Apply the first law $\\Delta E = q + w$ with the chemist\'s sign convention',
    'Compute pressure–volume work $w = -P_{\\text{ext}}\\Delta V$, convert L·atm to joules, and evaluate $w = -\\int P\\,dV$ for a reversible isothermal expansion',
    'Explain why $E$ is a state function while $q$ and $w$ depend on the path',
    'Convert between J, kJ, cal, Calories and watt-hours',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Energy at the molecular level',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations you met the heating curve: added energy either speeds particles up (temperature rises) or pulls them apart against their attractions (temperature stays flat). Thermochemistry makes that bookkeeping exact. It asks how much energy a reaction releases or absorbs, where that energy goes, and how to measure it.',
        },
        {
          type: 'p',
          text: 'Every form of energy is one of two kinds. **Kinetic energy** is energy of motion, $E_k = \\tfrac{1}{2}mv^2$. **Potential energy** is energy of position: stored in the arrangement of objects that attract or repel each other. At the molecular scale the "objects" are electrons and nuclei, and the force is the electrostatic (Coulomb) force.',
        },
        {
          type: 'figure',
          svg: FIG_MOTION,
          alt: 'Three diatomic molecules. Translation: the whole molecule moves along an arrow. Rotation: the molecule tumbles about its center, shown with a curved arrow. Vibration: the bond is drawn as a spring with arrows pointing outward, energy sloshing between kinetic and potential.',
          caption: 'The kinetic energy of a molecule is split among translation, rotation and vibration. Chemical energy is potential energy: the arrangement of electrons and nuclei in bonds and between molecules.',
        },
        {
          type: 'definition',
          term: 'Internal energy $E$',
          text: 'The [[gchem-internal-energy|internal energy]] $E$ (some books write $U$) of a sample is the total of the kinetic and potential energies of all its particles. You can never measure $E$ itself, only changes $\\Delta E = E_{\\text{final}} - E_{\\text{initial}}$, and that is all chemistry ever needs.',
        },
        {
          type: 'derivation',
          title: 'How much kinetic energy does one mole of moving $\\ce{N2}$ carry?',
          steps: [
            { tex: 'm = \\frac{28.014\\ \\text{g/mol}}{6.022 \\times 10^{23}\\ \\text{mol}^{-1}} = 4.652 \\times 10^{-23}\\ \\text{g} = 4.652 \\times 10^{-26}\\ \\text{kg}', why: 'Mass of one molecule: molar mass divided by Avogadro\'s number, then grams to kilograms because a joule is $\\text{kg·m}^2/\\text{s}^2$.' },
            { tex: 'E_k = \\tfrac{1}{2}(4.652 \\times 10^{-26}\\ \\text{kg})(500\\ \\text{m/s})^2 = 5.81 \\times 10^{-21}\\ \\text{J}', why: 'A typical $\\ce{N2}$ molecule in room air moves at about 500 m/s (faster than a rifle bullet).' },
            { tex: '5.81 \\times 10^{-21}\\ \\tfrac{\\text{J}}{\\text{molecule}} \\times 6.022 \\times 10^{23}\\ \\tfrac{\\text{molecules}}{\\text{mol}} = 3.50 \\times 10^{3}\\ \\text{J/mol}', why: 'Scale up to a mole so the number can be compared with chemical energies, which are quoted per mole.' },
          ],
          result: 'About 3.5 kJ/mol of translational kinetic energy at room temperature. Compare the potential energy locked in the $\\ce{N#N}$ triple bond: about 945 kJ/mol, nearly 300 times more.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why reactions dwarf warming',
          text: 'Temperature measures the *average* kinetic energy per particle (for a gas, $\\tfrac{3}{2}RT$ per mole, 3.7 kJ/mol at 298 K). Chemical reactions rearrange bonds, which changes potential energy by hundreds of kJ/mol. That is why a few grams of fuel can boil a pot of water: a small rearrangement of electrons pays for a large amount of random motion.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A full bathtub (150 kg of water at 40 °C) and a cup of tea (0.25 kg of water at 100 °C). Which statement is correct?',
      options: [
        { text: 'The tea has more thermal energy because it is hotter', why: 'Temperature is the *average* kinetic energy per molecule, not the total. The tea\'s molecules are faster on average, but there are 600 times fewer of them.' },
        { text: 'The bathtub has more thermal energy; the tea has the higher temperature', correct: true, why: 'Thermal energy is a total over all particles, so it grows with the amount of matter. Temperature is an average, so it does not.' },
        { text: 'They have the same thermal energy because both are water', why: 'Same substance, but very different amounts and temperatures; the totals differ enormously.' },
        { text: 'Neither has thermal energy until heat flows', why: 'Every sample above absolute zero has thermal energy. Heat is energy *in transit*, not the energy a sample holds.' },
      ],
      explanation: 'Temperature is **intensive** (it does not depend on the amount) and tracks average kinetic energy per particle. Thermal energy, like internal energy, is **extensive**: it adds up over every particle. Dip the cup into the bath and heat flows from the tea to the bath, from high to low *temperature*, even though the bath holds far more energy.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'System, surroundings, heat and work',
      blocks: [
        {
          type: 'p',
          text: 'To track energy you first draw a boundary. The [[gchem-thermo-system|system]] is the part you study, usually the reacting chemicals. The **surroundings** are everything else: the flask, the water bath, the air, you. Energy that leaves the system arrives in the surroundings, and vice versa.',
        },
        {
          type: 'figure',
          svg: FIG_SYSTEMS,
          alt: 'Three containers. Open: a beaker with vapor rising and heat entering; matter and energy can cross. Closed: a stoppered beaker with heat entering and leaving; only energy crosses. Isolated: a stoppered beaker inside a dashed insulated boundary; nothing crosses.',
          caption: 'An open system exchanges matter and energy, a closed system exchanges only energy, and an isolated system exchanges neither. A good thermos is close to isolated; the whole universe is isolated by definition.',
        },
        {
          type: 'p',
          text: 'Energy can cross the boundary of a closed system in only two ways:',
        },
        {
          type: 'list',
          items: [
            '**[[gchem-heat|Heat]]** ($q$): energy transferred because of a temperature difference. At the molecular level, fast particles of the hotter side collide with slower particles of the cooler side and share their kinetic energy. Heat always flows spontaneously from higher to lower temperature.',
            '**Work** ($w$): energy transferred when a force moves something through a distance, $w = F\\,d$. At the molecular level, work is *organized* motion: every molecule of a piston moves the same direction together. In chemistry the most common work is a gas pushing back the atmosphere.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Heat is a transfer, not a substance',
          text: 'Everyday language says an object "contains heat". Thermodynamics never does. A hot brick contains *internal energy*; *heat* is the name for energy while it crosses a boundary because of a temperature difference. Once it has arrived it is just internal energy again, with no memory of whether it came as heat or work.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'A 50 °C block of iron contains more heat than a 20 °C block of the same mass.',
      answer: false,
      explanation: 'Objects contain **internal energy**, not heat. The warmer block does have more internal (thermal) energy, but heat is defined only as energy *transferred* because of a temperature difference. If you put the two blocks in contact, heat flows from the 50 °C block to the 20 °C block until both reach 35 °C; before and after that, neither "contains" heat.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The first law: ΔE = q + w',
      blocks: [
        {
          type: 'p',
          text: 'Energy is conserved: it is never created or destroyed, only moved or converted. For a closed system that means the internal energy changes by exactly the energy that crosses the boundary as heat plus the energy that crosses as work.',
        },
        {
          type: 'theorem',
          name: 'First law of thermodynamics',
          tex: '\\Delta E = q + w',
          text: 'The [[gchem-first-law|first law]]: $q$ and $w$ are counted from the **system\'s** point of view. Energy flowing in is positive, energy flowing out is negative.',
        },
        {
          type: 'figure',
          svg: FIG_SIGNS,
          alt: 'A box labelled system with delta E equals q plus w, inside a dashed region labelled surroundings. On the left, a red arrow into the box is heat in, q positive (endothermic), and a red arrow out is heat out, q negative (exothermic). On the right, a purple arrow in is work done on the system, w positive (compression), and a purple arrow out is work done by the system, w negative (expansion).',
          caption: 'Sign convention: think of the system\'s bank account. Deposits (heat in, work done on it) are positive; withdrawals (heat out, work done by it) are negative.',
        },
        {
          type: 'derivation',
          title: 'A gas absorbs 250 J of heat and does 85 J of work pushing a piston',
          steps: [
            { tex: 'q = +250\\ \\text{J}', why: 'Heat flows **into** the system, so $q$ is positive.' },
            { tex: 'w = -85\\ \\text{J}', why: 'The gas does work **on** the surroundings (it pushes the piston out), so energy leaves the system: $w$ is negative.' },
            { tex: '\\Delta E = q + w = 250\\ \\text{J} + (-85\\ \\text{J}) = +165\\ \\text{J}', why: 'Add the two transfers. Of the 250 J that came in, 85 J left again as work; the other 165 J stayed and raised the internal energy.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why chemists use the system\'s point of view',
          text: 'Engineers studying engines often write $\\Delta U = Q - W$, where $W$ is the work done *by* the gas, because an engine\'s job is to do work. Chemists care about what happens to the chemicals, so every transfer is signed relative to the system and both terms add. The physics is identical; only the bookkeeping differs. When you read another textbook, check which convention it uses before trusting a sign.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A reaction mixture releases 1.25 kJ of heat to its surroundings while the surroundings do 0.40 kJ of work on it (the mixture is compressed). What is $\\Delta E$ of the system? Give two decimal places.',
      hint: 'Heat out is negative; work done **on** the system is positive. Then add.',
      label: '$\\Delta E =$',
      unit: 'kJ',
      answer: '-1.25 + 0.40',
      answerTex: '-0.85\\ \\text{kJ}',
      tolerance: 0.005,
      explanation: '$q = -1.25$ kJ (heat leaves), $w = +0.40$ kJ (work done on the system). $\\Delta E = q + w = -1.25 + 0.40 = -0.85$ kJ. The system lost more energy as heat than it gained as work, so its internal energy fell.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Choose the signs.',
      template: 'A piston compresses a gas while the gas loses heat to the cold cylinder walls. For the gas, $q$ is ___ and $w$ is ___.',
      blanks: [{ answers: ['negative'] }, { answers: ['positive'] }],
      wordBank: ['positive', 'negative', 'zero'],
      explanation: 'Heat leaves the gas, so $q < 0$. Compression means the surroundings push the piston in and do work **on** the gas, so $w > 0$. Whether $\\Delta E$ ends up positive or negative depends on which transfer is larger.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Pressure–volume work',
      blocks: [
        {
          type: 'p',
          text: 'When a reaction makes gas in an open container, the gas has to shove the atmosphere out of the way. That is real work, and the system pays for it. The piston picture makes the formula transparent.',
        },
        {
          type: 'figure',
          svg: FIG_PISTON,
          alt: 'Two cylinders with a piston of area A. Orange arrows labelled P ext press down on the piston. In the second cylinder the gas has expanded and the piston has risen by a height delta h, so the volume increased by A times delta h.',
          caption: 'The gas pushes the piston up a distance $\\Delta h$ against the constant external pressure. The swept volume is $\\Delta V = A\\,\\Delta h$.',
        },
        {
          type: 'derivation',
          title: 'From force × distance to $-P\\Delta V$',
          steps: [
            { tex: 'F = P_{\\text{ext}}\\,A', why: 'Pressure is force per area, so the outside pushes on the piston with force $P_{\\text{ext}} A$.' },
            { tex: '\\text{work done by the gas} = F\\,\\Delta h = P_{\\text{ext}}\\,A\\,\\Delta h = P_{\\text{ext}}\\,\\Delta V', why: 'To move the piston up $\\Delta h$, the gas must exert at least that force through that distance. $A\\,\\Delta h$ is the change in volume.' },
            { tex: 'w = -P_{\\text{ext}}\\,\\Delta V', why: 'Work done **by** the system is energy leaving it, so in the chemist\'s convention it gets a minus sign.' },
          ],
          result: 'Expansion ($\\Delta V > 0$) gives $w < 0$; compression gives $w > 0$; no volume change gives no PV work.',
        },
        {
          type: 'p',
          text: 'With pressure in atm and volume in liters, $P\\Delta V$ comes out in liter-atmospheres. Since $1\\ \\text{atm} = 101\\,325\\ \\text{Pa}$ and $1\\ \\text{L} = 10^{-3}\\ \\text{m}^3$, one L·atm is $101.325\\ \\text{Pa·m}^3 = 101.325$ J.',
        },
        {
          type: 'derivation',
          title: 'A gas expands from 2.0 L to 5.5 L against a constant 1.20 atm',
          steps: [
            { tex: '\\Delta V = 5.5\\ \\text{L} - 2.0\\ \\text{L} = 3.5\\ \\text{L}', why: 'Final minus initial.' },
            { tex: 'w = -(1.20\\ \\text{atm})(3.5\\ \\text{L}) = -4.2\\ \\text{L·atm}', why: 'Use the **external** pressure, the pressure the gas pushes against.' },
            { tex: 'w = -4.2\\ \\cancel{\\text{L·atm}} \\times \\frac{101.325\\ \\text{J}}{1\\ \\cancel{\\text{L·atm}}} = -4.3 \\times 10^{2}\\ \\text{J}', why: 'Convert to joules; two significant figures, set by 3.5 L.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Expansion into a vacuum does no work',
          text: 'If $P_{\\text{ext}} = 0$ (a gas rushing into an evacuated chamber), then $w = -0 \\cdot \\Delta V = 0$. There is nothing to push against. The work depends on the opposing pressure, not on how much the gas "wants" to expand.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A gas is compressed from 12.0 L to 4.5 L by a constant external pressure of 2.00 atm. Find $w$ for the gas in **kJ** (three significant figures; $1\\ \\text{L·atm} = 101.325$ J).',
      hint: '$\\Delta V$ is negative for a compression, so $w = -P_{\\text{ext}}\\Delta V$ comes out positive.',
      label: '$w =$',
      unit: 'kJ',
      answer: '-2.00*(4.5-12.0)*101.325/1000',
      answerTex: '+1.52\\ \\text{kJ}',
      tolerance: 0.005,
      explanation: '$\\Delta V = 4.5 - 12.0 = -7.5$ L. $w = -(2.00\\ \\text{atm})(-7.5\\ \\text{L}) = +15.0$ L·atm $= 15.0 \\times 101.325 = 1520$ J $= +1.52$ kJ. Positive, because the surroundings did work on the gas.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Work as an integral',
      blocks: [
        {
          type: 'p',
          text: '$w = -P_{\\text{ext}}\\Delta V$ assumes the external pressure stays constant. In general it changes as the volume changes, and you already know what to do with a quantity that varies: slice the change into tiny pieces and add them up. For a small volume change $dV$ the work is $-P_{\\text{ext}}\\,dV$, so',
        },
        {
          type: 'math',
          tex: 'w = -\\int_{V_1}^{V_2} P_{\\text{ext}}\\,dV',
          caption: 'Exactly the [[work]] integral from Calculus II, with pressure as force per area and volume as area times distance. The magnitude of $w$ is the area under the $P_{\\text{ext}}$–$V$ curve.',
        },
        {
          type: 'p',
          text: 'The graph shows 1.00 mol of ideal gas at 298 K ($nRT = 24.45$ L·atm) expanding from 10 L. The curve is the gas\'s own pressure, $P = nRT/V$. Expand in $n$ steps: at each step drop the outside pressure to the value the gas will have at the end of that step, and let it expand. Each step contributes one rectangle.',
        },
        {
          type: 'graph',
          x: [0, 45],
          y: [0, 3],
          xStep: 5,
          yStep: 0.5,
          functions: [{ expr: '24.45/x', label: '$P = nRT/V$ (atm)', color: 'blue', domain: [5, 45] }],
          riemann: { expr: '24.45/x', from: 10, to: 'b', n: 'n', method: 'right', color: 'orange' },
          points: [
            { x: 10, y: 2.445, label: 'start (10 L)' },
            { x: 'b', y: '24.45/b', label: 'end' },
          ],
          sliders: [
            { name: 'b', min: 12, max: 40, step: 1, value: 30, label: 'final volume $V_2$ (L)' },
            { name: 'n', min: 1, max: 30, step: 1, value: 1, label: 'number of steps $n$' },
          ],
          readouts: [
            { label: 'one step ($n = 1$): $w$ (kJ) $=$', expr: '-24.45/b*(b-10)*0.101325', digits: 3 },
            { label: 'reversible ($n \\to \\infty$): $w$ (kJ) $=$', expr: '-24.45*ln(b/10)*0.101325', digits: 3 },
          ],
          caption: 'Horizontal axis: volume (L); vertical axis: pressure (atm). With $n = 1$ the gas expands in one jump against the final pressure, and $|w|$ is a single rectangle. Raise $n$: the rectangles (a right Riemann sum) fill more of the area under the curve, and the gas does more work. The limit is the **reversible** expansion.',
        },
        {
          type: 'derivation',
          title: 'Reversible isothermal expansion of an ideal gas',
          steps: [
            { tex: 'w = -\\int_{V_1}^{V_2} P_{\\text{ext}}\\,dV = -\\int_{V_1}^{V_2} \\frac{nRT}{V}\\,dV', why: 'Reversible means the outside pressure is kept infinitesimally below the gas pressure at every instant, so $P_{\\text{ext}} = P = nRT/V$ from the [[ideal-gas-law]].' },
            { tex: '= -nRT \\int_{V_1}^{V_2} \\frac{dV}{V}', why: 'Isothermal: $T$ is constant, so $nRT$ comes out of the integral.' },
            { tex: '= -nRT \\left[\\ln V\\right]_{V_1}^{V_2} = -nRT\\ln\\frac{V_2}{V_1}', why: 'The antiderivative of $1/V$ is $\\ln V$; the difference of logs is the log of the quotient.' },
            { tex: '\\text{10 L} \\to \\text{30 L:}\\ \\ w = -(8.314)(298)\\ln 3\\ \\text{J} = -2.72\\ \\text{kJ}', why: 'Use $R = 8.314$ J/(mol·K) to get joules directly. Compare the one-step value on the graph, $-1.65$ kJ.' },
          ],
          result: 'The reversible path extracts the **maximum** work an expansion between these two states can deliver. Any real, faster expansion delivers less.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A physics engine does the same sum',
          text: 'A game that simulates a gas spring or a piston updates the volume a little each frame and accumulates `work += -P * dV`. That is a Riemann sum with one rectangle per frame; a smaller timestep gives more rectangles and a more accurate total, exactly like raising $n$ on the slider.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: '1.00 mol of an ideal gas expands **reversibly and isothermally** at 298 K from 10.0 L to 20.0 L. Find $w$ in kJ (three significant figures; $R = 8.314$ J/(mol·K)).',
      hint: '$w = -nRT\\ln(V_2/V_1)$, and $V_2/V_1 = 2$.',
      label: '$w =$',
      unit: 'kJ',
      answer: '-8.314*298*ln(2)/1000',
      answerTex: '-1.72\\ \\text{kJ}',
      tolerance: 0.005,
      explanation: '$w = -(1.00)(8.314)(298)\\ln 2 = -(2477.6)(0.6931) = -1717$ J $= -1.72$ kJ. Negative because the gas does work on the surroundings. The answer depends only on the **ratio** of volumes: doubling from 10 to 20 L takes the same work as doubling from 1 to 2 L, a fingerprint of the logarithm.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'State functions and path functions',
      blocks: [
        {
          type: 'p',
          text: 'Drive from a valley town at 300 m elevation to a mountain pass at 2,300 m. Your change in elevation is $+2{,}000$ m whether you take the straight highway or a winding detour. The distance you drove depends entirely on the route. Elevation is a function of *where you are*; distance is a function of *how you got there*.',
        },
        {
          type: 'definition',
          term: 'State function',
          text: 'A [[gchem-state-function|state function]] depends only on the present state of the system (its composition, $T$, $P$, $V$), not on its history. Its change is final minus initial, whatever path connects them. Internal energy, enthalpy, pressure, volume and temperature are state functions. Heat and work are **path functions**: they describe *how* energy moved, not a property the system has.',
        },
        {
          type: 'table',
          headers: ['Expanding 1.00 mol of ideal gas, 10 L → 30 L at 298 K', 'one step', 'reversible'],
          rows: [
            ['$w$', '$-1.65$ kJ', '$-2.72$ kJ'],
            ['$q$', '$+1.65$ kJ', '$+2.72$ kJ'],
            ['$\\Delta E = q + w$', '$0$', '$0$'],
          ],
          caption: 'Same initial state, same final state. For an ideal gas $E$ depends only on $T$, which did not change, so $\\Delta E = 0$ on both paths. The heat and work split it differently.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the first law needs $q$ and $w$ together',
          text: 'Neither $q$ nor $w$ alone is fixed by the start and end states, but their **sum** always is. That is the content of the first law: two path-dependent quantities add up to a path-independent one. It is like the Fundamental Theorem of Calculus: $\\int_a^b F\'(x)\\,dx = F(b) - F(a)$ depends only on the endpoints because the integrand is the derivative of a function of position. $dE$ is such a derivative; $\\delta q$ and $\\delta w$ separately are not.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'This is the idea that makes the rest of the unit work. Because enthalpy is a state function, you can compute $\\Delta H$ for a reaction along *any* convenient path of imaginary steps (Hess\'s law), and the answer is the same as for the real reaction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Which of these is **not** a state function?',
      options: [
        { text: 'Internal energy $E$', why: '$E$ depends only on the state of the system; $\\Delta E = E_{\\text{final}} - E_{\\text{initial}}$ for any path.' },
        { text: 'Volume $V$', why: 'The volume of a gas sample is a property of its present state, regardless of how it got there.' },
        { text: 'Work $w$', correct: true, why: 'Work depends on the path: the same expansion did $-1.65$ kJ of work in one step and $-2.72$ kJ reversibly.' },
        { text: 'Temperature $T$', why: 'Temperature is a property of the present state; a cup of coffee at 60 °C has no memory of whether it was heated or cooled to get there.' },
      ],
      explanation: 'State functions ($E$, $H$, $P$, $V$, $T$) describe the system. Path functions ($q$, $w$) describe a process, how energy crossed the boundary along the way. That is why you write $\\Delta E$ and $\\Delta V$ but never "$\\Delta q$" or "$\\Delta w$": a system does not *have* a work.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Energy units and conversions',
      blocks: [
        {
          type: 'p',
          text: 'The SI unit of energy is the **joule**, $1\\ \\text{J} = 1\\ \\text{kg·m}^2/\\text{s}^2$, the kinetic energy of a 2 kg mass moving at 1 m/s. Chemical energies are usually kilojoules per mole. Several older units survive, and you will meet all of them.',
        },
        {
          type: 'table',
          headers: ['Unit', 'In joules', 'Where you see it'],
          rows: [
            ['kilojoule (kJ)', '$10^{3}$ J', 'reaction enthalpies, kJ/mol'],
            ['[[gchem-calorie|calorie]] (cal)', '$4.184$ J (exact, by definition)', 'older chemistry tables'],
            ['Calorie (Cal) = kilocalorie (kcal)', '$4184$ J', 'food labels (US)'],
            ['liter-atmosphere (L·atm)', '$101.325$ J', 'gas work'],
            ['watt-hour (Wh)', '$3600$ J', 'batteries; 1 W = 1 J/s'],
            ['kilowatt-hour (kWh)', '$3.6 \\times 10^{6}$ J', 'electric bills'],
          ],
        },
        {
          type: 'p',
          text: 'The calorie was first defined as the heat that warms 1 g of water by 1 °C. That is why water\'s specific heat is $1.000\\ \\text{cal/(g·°C)} = 4.184\\ \\text{J/(g·°C)}$, a number you will use constantly in the next lesson.',
        },
        {
          type: 'derivation',
          title: 'How much power does a soldier on MREs run on?',
          steps: [
            { tex: '1250\\ \\cancel{\\text{Cal}} \\times \\frac{4.184\\ \\text{kJ}}{1\\ \\cancel{\\text{Cal}}} = 5.23 \\times 10^{3}\\ \\text{kJ}', why: 'One MRE provides roughly 1,250 food Calories. A Calorie is a kilocalorie, so 1 Cal = 4.184 kJ.' },
            { tex: '3 \\times 5230\\ \\text{kJ} = 1.57 \\times 10^{4}\\ \\text{kJ} = 1.57 \\times 10^{7}\\ \\text{J per day}', why: 'Three meals a day; convert kJ to J to get ready for watts.' },
            { tex: '\\frac{1.57 \\times 10^{7}\\ \\text{J}}{86\\,400\\ \\text{s}} \\approx 182\\ \\text{W}', why: 'Power is energy per time; a day has $24 \\times 3600 = 86\\,400$ s.' },
          ],
          result: 'A body living on three MREs a day dissipates energy at an average of about 180 W, roughly two old incandescent bulbs. A 2,000 Cal civilian diet is about 97 W.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'A food "Calorie" (capital C) is 1000 chemistry "calories". European labels sidestep the confusion by printing kJ: a 250 Cal snack is listed as 1046 kJ.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A rugged power bank is rated at 74 Wh. How many **food Calories** of energy does it store? (1 Wh = 3600 J; 1 Cal = 4184 J; three significant figures.)',
      hint: 'Wh → J (× 3600), then J → Cal (÷ 4184).',
      label: 'energy $=$',
      unit: 'Cal',
      answer: '74*3600/4184',
      answerTex: '63.7\\ \\text{Cal}',
      tolerance: 0.06,
      explanation: '$74\\ \\text{Wh} \\times 3600\\ \\text{J/Wh} = 2.664 \\times 10^{5}$ J $= 266$ kJ. Dividing by 4184 J/Cal gives 63.7 Cal, less than a slice of bread. A battery that can charge a phone several times stores less energy than a snack; the next lessons show why fuels and food hold so much more energy per gram than batteries do.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'A gas absorbs 3.20 kJ of heat and expands from 1.0 L to 6.0 L against a constant 2.0 atm. A student computes $\\Delta E$. Tap the first line that is wrong.',
      lines: [
        '$q = +3.20$ kJ, because heat flows into the gas',
        '$w = -P_{\\text{ext}}\\Delta V = -(2.0\\ \\text{atm})(5.0\\ \\text{L}) = -10.\\ \\text{L·atm}$',
        '$w = -10.\\ \\text{L·atm} \\times 101.325\\ \\text{J/(L·atm)} = -1013\\ \\text{J} = -1.01\\ \\text{kJ}$',
        '$\\Delta E = q - w = 3.20 - (-1.01) = 4.21$ kJ',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are right: heat in is positive, and work done by an expanding gas is negative. Line 4 uses the engineering form $q - w$ with a $w$ that already carries the chemist\'s sign, so the work is subtracted twice. With $\\Delta E = q + w$: $3.20 + (-1.01) = +2.19$ kJ. Of the 3.20 kJ absorbed, 1.01 kJ left again as work.',
    },
  ],
  takeaways: [
    'Internal energy $E$ is the total kinetic + potential energy of a system\'s particles; temperature tracks only the average kinetic energy per particle.',
    'Energy crosses a closed system\'s boundary as heat $q$ (driven by a temperature difference) or work $w$ (a force through a distance). Heat is a transfer, not something an object contains.',
    'First law: $\\Delta E = q + w$, with transfers **into** the system positive and **out of** it negative.',
    'Pressure–volume work: $w = -P_{\\text{ext}}\\Delta V$ for constant external pressure, $w = -\\int P_{\\text{ext}}\\,dV$ in general; $1\\ \\text{L·atm} = 101.325$ J. Reversible isothermal ideal-gas expansion: $w = -nRT\\ln(V_2/V_1)$, the maximum work.',
    '$E$, $H$, $P$, $V$, $T$ are state functions (path-independent); $q$ and $w$ are path functions, but their sum $\\Delta E$ is not.',
    '$1\\ \\text{cal} = 4.184$ J exactly; $1\\ \\text{Cal} = 1\\ \\text{kcal} = 4.184$ kJ; $1\\ \\text{Wh} = 3600$ J.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 5: Thermochemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/5-introduction',
      source: 'openstax',
      note: 'Section 5.1 covers energy basics, units and specific heat; section 5.3 introduces internal energy, heat, work and the first law with the same sign convention used here.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "pressure-volume work" or "first law of thermodynamics" for worked examples, including reversible versus irreversible expansions.',
    },
    {
      title: 'Wikipedia — First law of thermodynamics',
      url: 'https://en.wikipedia.org/wiki/First_law_of_thermodynamics',
      source: 'wikipedia',
      note: 'The history of the law and a side-by-side discussion of the physics and chemistry sign conventions.',
    },
    {
      title: 'Wikipedia — State function',
      url: 'https://en.wikipedia.org/wiki/State_function',
      source: 'wikipedia',
      note: 'Why internal energy is a state function while heat and work are path functions, with the exact-differential view.',
    },
  ],
};
