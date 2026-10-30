import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-coordination',
  title: 'Transition Metals and Coordination Compounds',
  summary: 'Electron configurations and oxidation states of transition-metal ions, ligands and chelates, geometry, naming and isomers of complexes, crystal field theory with its colors and magnetism, metals in living things, and a look back over General Chemistry.',
  minutes: 26,
  objectives: [
    'Write electron configurations of transition-metal ions (4s electrons leave first) and count d electrons',
    'Identify the ligands, coordination number, metal oxidation state and geometry of a coordination compound, including chelating ligands such as en and EDTA',
    'Name coordination compounds from their formulas using IUPAC rules',
    'Recognize geometric (cis/trans) and optical isomers of complexes',
    'Use crystal field theory to place d electrons in $t_{2g}$ and $e_g$ orbitals, decide between high spin and low spin with the spectrochemical series, and predict magnetism',
    'Relate color to the absorbed wavelength and calculate $\\Delta_o$ from an absorption maximum',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Transition metals and their ions',
      blocks: [
        {
          type: 'p',
          text: 'The [[chem-transition-metals|transition metals]] fill the d block, groups 3–12, where the $d$ subshell is being filled. Compared with the s-block metals they are hard, dense and high-melting (iron, chromium, tungsten), they form brightly **colored** compounds, many are **magnetic**, many are excellent **catalysts** (iron in ammonia synthesis, platinum and palladium in catalytic converters), and most show **several oxidation states**. Almost all of these properties trace back to partly filled $d$ orbitals, and this lesson builds the model that explains them.',
        },
        {
          type: 'p',
          text: 'First, [[electron-configuration|electron configurations]] of the ions. A neutral first-row atom fills $4s$ before $3d$: iron is $[\\text{Ar}]\\,4s^2 3d^6$. But when it ionizes, the **4s electrons leave first**.',
        },
        {
          type: 'derivation',
          title: 'Configurations of iron and its ions',
          steps: [
            { tex: '\\ce{Fe}: [\\text{Ar}]\\,4s^2\\,3d^6', why: '$Z = 26$: argon core (18) plus 8 valence electrons.' },
            { tex: '\\ce{Fe^2+}: [\\text{Ar}]\\,3d^6', why: 'Remove the two $4s$ electrons. Not $[\\text{Ar}]\\,4s^2 3d^4$.' },
            { tex: '\\ce{Fe^3+}: [\\text{Ar}]\\,3d^5', why: 'The third electron comes from $3d$. A half-filled $d^5$ set is especially stable, which helps explain why $\\ce{Fe^3+}$ (as in rust) is so common.' },
          ],
          result: 'Shortcut: for a first-row ion $\\ce{M^{n+}}$, the number of $d$ electrons is the group number minus $n$. $\\ce{Fe^3+}$: $8 - 3 = 5$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why 4s fills first but empties first',
          text: 'In a neutral atom the $4s$ and $3d$ energies are very close, and $4s$ wins because it penetrates closer to the nucleus. Once the atom is a cation, every electron feels a larger effective nuclear charge, and the $3d$ orbitals (same shell number as the core electrons, $n = 3$) drop below $4s$. So in ions the $3d$ subshell is lower in energy and the outer $4s$ electrons are removed first. Transition-metal ions never keep $4s$ electrons while their $3d$ is incomplete.',
        },
        {
          type: 'table',
          headers: ['Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn'],
          rows: [['+3', '+4, +3', '+5, +4, +3, +2', '+6, +3, +2', '+7, +4, +2', '+3, +2', '+3, +2', '+2', '+2, +1', '+2']],
          caption: 'Common oxidation states of the first transition series. They peak at manganese ($+7$, using all seven $4s + 3d$ electrons, as in permanganate $\\ce{MnO4-}$) and then shrink as the $d$ electrons become harder to remove. Scandium and zinc have only one.',
        },
        {
          type: 'p',
          text: 'High oxidation states make powerful oxidizers: purple permanganate ($\\ce{MnO4-}$, Mn $+7$) disinfects water and destroys organic contaminants, and yellow chromates and orange dichromates (Cr $+6$) are strong oxidizers that were long used in corrosion-inhibiting primers on aircraft, now being phased out because Cr(VI) is toxic and carcinogenic.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'How many $d$ electrons does each ion have? Type a number in each blank.',
      template: '$\\ce{Co^3+}$ (cobalt, $Z = 27$): ___ $d$ electrons\n\n$\\ce{Cu^2+}$ (copper, $Z = 29$): ___ $d$ electrons\n\n$\\ce{Zn^2+}$ (zinc, $Z = 30$): ___ $d$ electrons',
      blanks: [{ answers: ['6'] }, { answers: ['9'] }, { answers: ['10'] }],
      hint: 'Write the neutral atom\'s configuration, remove the $4s$ electrons first, then take any further electrons from $3d$. Or use group number minus charge.',
      explanation: 'Cobalt is $[\\text{Ar}]\\,4s^2 3d^7$; removing $4s^2$ and one $3d$ electron gives $\\ce{Co^3+}$ $= [\\text{Ar}]\\,3d^6$. Copper is $[\\text{Ar}]\\,4s^1 3d^{10}$ (one of the exceptions); removing the $4s$ electron and one $3d$ electron gives $\\ce{Cu^2+}$ $= [\\text{Ar}]\\,3d^9$. Zinc is $[\\text{Ar}]\\,4s^2 3d^{10}$, so $\\ce{Zn^2+}$ $= [\\text{Ar}]\\,3d^{10}$. Group-number check: $9 - 3 = 6$, $11 - 2 = 9$, $12 - 2 = 10$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Coordination compounds: metals and their ligands',
      blocks: [
        {
          type: 'p',
          text: 'Dissolve blue copper sulfate in water and add ammonia: the solution turns a deep royal blue. Four ammonia molecules have bonded to each copper ion to form the complex ion $\\ce{[Cu(NH3)4]^2+}$. Each $\\ce{NH3}$ donates its lone pair to an empty orbital of $\\ce{Cu^2+}$, a coordinate covalent bond. The metal is a [[gchem-lewis-acid|Lewis acid]] (electron-pair acceptor) and each ammonia a [[gchem-lewis-base|Lewis base]] (donor).',
        },
        {
          type: 'definition',
          term: 'Coordination compound',
          text: 'A [[gchem-coordination-compound|coordination compound]] contains a **complex**: a central metal atom or ion bonded to surrounding molecules or anions called [[gchem-ligand|ligands]]. The atom of the ligand that bonds to the metal is the **donor atom**, and the number of donor atoms bonded to the metal is the [[gchem-coordination-number|coordination number]]. In formulas the complex (the **coordination sphere**) is written in square brackets; ions outside the brackets are **counter-ions** that balance the charge.',
        },
        {
          type: 'p',
          text: 'Ligands are classified by how many donor atoms they use. A ligand that grips the metal with two or more donor atoms is a **chelating** ligand (from Greek *chele*, claw), and the complex it forms is a [[gchem-chelate|chelate]].',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 510 250" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="110" r="15" fill="currentColor" class="f-orange" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="70" y="115" text-anchor="middle" font-size="14">M</text><text x="70" y="53" text-anchor="middle" font-size="15" font-weight="600">NH₃</text><line x1="70.0" y1="62.0" x2="70.0" y2="87.0" stroke="currentColor" class="s-purple" stroke-width="2.2"/><polygon points="70.0,93.0 66.0,84.0 74.0,84.0" fill="currentColor" class="f-purple"/><text x="70" y="185" text-anchor="middle" font-size="14" font-weight="600">monodentate</text><text x="70" y="203" text-anchor="middle" font-size="12" class="t-gray">1 donor atom</text><text x="70" y="221" text-anchor="middle" font-size="12">H₂O, NH₃, Cl⁻, CN⁻, CO</text><circle cx="245" cy="120" r="15" fill="currentColor" class="f-orange" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="245" y="125" text-anchor="middle" font-size="14">M</text><text x="205.0" y="75.0" text-anchor="middle" font-size="15" font-weight="600" class="">N</text><text x="285.0" y="75.0" text-anchor="middle" font-size="15" font-weight="600" class="">N</text><line x1="211.0" y1="82.0" x2="230.9" y2="103.6" stroke="currentColor" class="s-purple" stroke-width="2.2"/><polygon points="235.0,108.0 226.0,104.1 231.8,98.7" fill="currentColor" class="f-purple"/><line x1="279.0" y1="82.0" x2="259.1" y2="103.6" stroke="currentColor" class="s-purple" stroke-width="2.2"/><polygon points="255.0,108.0 258.2,98.7 264.0,104.1" fill="currentColor" class="f-purple"/><line x1="210" y1="59" x2="219" y2="41" stroke="currentColor" stroke-width="2"/><line x1="238" y1="32" x2="252" y2="32" stroke="currentColor" stroke-width="2"/><line x1="280" y1="59" x2="271" y2="41" stroke="currentColor" stroke-width="2"/><text x="222" y="37" text-anchor="middle" font-size="13">CH₂</text><text x="268" y="37" text-anchor="middle" font-size="13">CH₂</text><text x="183" y="75" text-anchor="middle" font-size="12">H₂</text><text x="307" y="75" text-anchor="middle" font-size="12">H₂</text><text x="245" y="80" text-anchor="middle" font-size="11" class="t-green">5-ring</text><text x="245" y="185" text-anchor="middle" font-size="14" font-weight="600">bidentate (chelating)</text><text x="245" y="203" text-anchor="middle" font-size="12" class="t-gray">2 donor atoms</text><text x="245" y="221" text-anchor="middle" font-size="12">en, oxalate (C₂O₄²⁻)</text><circle cx="420" cy="105" r="15" fill="currentColor" class="f-orange" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="420" y="110" text-anchor="middle" font-size="14">M</text><path d="M390.0,50.0 Q420.0,28.0 450.0,50.0" fill="none" stroke="currentColor" class="s-green" stroke-width="3" stroke-opacity="0.8"/><path d="M390.0,50.0 Q355.6,63.0 358.0,100.0" fill="none" stroke="currentColor" class="s-green" stroke-width="3" stroke-opacity="0.8"/><path d="M450.0,50.0 Q484.4,63.0 482.0,100.0" fill="none" stroke="currentColor" class="s-green" stroke-width="3" stroke-opacity="0.8"/><path d="M390.0,50.0 Q277.4,93.5 388.0,155.0" fill="none" stroke="currentColor" class="s-green" stroke-width="3" stroke-opacity="0.8"/><path d="M450.0,50.0 Q562.6,93.5 452.0,155.0" fill="none" stroke="currentColor" class="s-green" stroke-width="3" stroke-opacity="0.8"/><line x1="394.8" y1="58.8" x2="409.9" y2="86.6" stroke="currentColor" class="s-purple" stroke-width="2.2"/><polygon points="412.8,91.8 405.0,85.8 412.0,82.0" fill="currentColor" class="f-purple"/><circle cx="390.0" cy="50.0" r="10" fill="currentColor" class="f-blue" fill-opacity="0.35"/><text x="390.0" y="55.0" text-anchor="middle" font-size="15" font-weight="600" class="">N</text><line x1="445.2" y1="58.8" x2="430.1" y2="86.6" stroke="currentColor" class="s-purple" stroke-width="2.2"/><polygon points="427.2,91.8 428.0,82.0 435.0,85.8" fill="currentColor" class="f-purple"/><circle cx="450.0" cy="50.0" r="10" fill="currentColor" class="f-blue" fill-opacity="0.35"/><text x="450.0" y="55.0" text-anchor="middle" font-size="15" font-weight="600" class="">N</text><line x1="368.0" y1="100.8" x2="399.1" y2="103.3" stroke="currentColor" class="s-purple" stroke-width="2.2"/><polygon points="405.0,103.8 395.8,107.1 396.4,99.1" fill="currentColor" class="f-purple"/><circle cx="358.0" cy="100.0" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="358.0" y="105.0" text-anchor="middle" font-size="15" font-weight="600" class="">O</text><line x1="472.0" y1="100.8" x2="440.9" y2="103.3" stroke="currentColor" class="s-purple" stroke-width="2.2"/><polygon points="435.0,103.8 443.6,99.1 444.2,107.1" fill="currentColor" class="f-purple"/><circle cx="482.0" cy="100.0" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="482.0" y="105.0" text-anchor="middle" font-size="15" font-weight="600" class="">O</text><line x1="393.4" y1="146.6" x2="408.7" y2="122.7" stroke="currentColor" class="s-purple" stroke-width="2.2"/><polygon points="411.9,117.6 410.4,127.4 403.7,123.1" fill="currentColor" class="f-purple"/><circle cx="388.0" cy="155.0" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="388.0" y="160.0" text-anchor="middle" font-size="15" font-weight="600" class="">O</text><line x1="446.6" y1="146.6" x2="431.3" y2="122.7" stroke="currentColor" class="s-purple" stroke-width="2.2"/><polygon points="428.1,117.6 436.3,123.1 429.6,127.4" fill="currentColor" class="f-purple"/><circle cx="452.0" cy="155.0" r="10" fill="currentColor" class="f-red" fill-opacity="0.35"/><text x="452.0" y="160.0" text-anchor="middle" font-size="15" font-weight="600" class="">O</text><text x="420" y="185" text-anchor="middle" font-size="14" font-weight="600">hexadentate</text><text x="420" y="203" text-anchor="middle" font-size="12" class="t-gray">6 donor atoms (2 N, 4 O)</text><text x="420" y="221" text-anchor="middle" font-size="12">EDTA⁴⁻</text><text x="255" y="246" text-anchor="middle" font-size="12" class="t-purple">arrows: lone pair donated to the metal (coordinate covalent bond)</text></svg>`,
          alt: 'Three panels. Monodentate: ammonia donates one lone pair to the metal. Bidentate: ethylenediamine, H2N-CH2-CH2-NH2, donates two nitrogen lone pairs, forming a five-membered ring with the metal. Hexadentate: EDTA surrounds the metal with two nitrogen and four oxygen donor atoms linked by a carbon backbone drawn in green.',
          caption: 'Ethylenediamine ("en", $\\ce{H2NCH2CH2NH2}$) closes a five-membered ring with the metal. $\\ce{EDTA^4-}$ wraps around a metal ion with six donor atoms (green lines: its carbon backbone), occupying every position of an octahedron by itself.',
        },
        {
          type: 'derivation',
          title: 'Taking apart $\\ce{[Co(NH3)5Cl]Cl2}$',
          steps: [
            { tex: '\\ce{[Co(NH3)5Cl]Cl2 -> [Co(NH3)5Cl]^2+ + 2Cl-}', why: 'The two chloride ions outside the brackets are counter-ions, so the complex ion carries a $2+$ charge.' },
            { tex: '\\text{ligands: } 5\\ \\ce{NH3}\\ (\\text{neutral}),\\ 1\\ \\ce{Cl-} \\implies \\text{CN} = 6', why: 'Six monodentate ligands, so six donor atoms (5 N and 1 Cl).' },
            { tex: 'x + 5(0) + (-1) = +2 \\implies x = +3', why: 'Oxidation state of Co: the metal\'s charge plus the ligand charges equals the charge of the complex ion.' },
          ],
          result: 'Cobalt(III), $d^6$, coordination number 6. Alfred Werner proved this kind of structure around 1900: silver nitrate precipitates only **two** of the three chlorides as AgCl, because the third is bonded to cobalt inside the coordination sphere.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why chelates hold on so tightly: the chelate effect',
          text: 'One EDTA can displace six water molecules: $\\ce{[M(H2O)6]^{n+} + EDTA^4-}$ $\\ce{-> [M(EDTA)]^{n-4} + 6H2O}$. Two particles become seven, so the entropy change is strongly positive, and $\\Delta G = \\Delta H - T\\Delta S$ is far more negative than for six separate monodentate ligands with similar bonds. Formation constants of EDTA complexes run to $10^{18}$ and beyond. That is why EDTA (as its calcium salt) is used to treat lead poisoning, softens hard water, and protects foods and shampoos from metal-catalyzed spoilage.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Potassium ferrocyanide, $\\ce{K4[Fe(CN)6]}$, is an anti-caking agent in road salt and table salt. Cyanide is $\\ce{CN-}$. How many $d$ electrons does the iron have?',
      hint: 'Four $\\ce{K+}$ outside the brackets means the complex ion is $\\ce{[Fe(CN)6]^4-}$. Find the oxidation state of Fe, then count $d$ electrons ($\\ce{Fe}$ is $[\\text{Ar}]\\,4s^2 3d^6$).',
      label: '$d$ electrons $=$',
      answer: '6',
      explanation: 'Charge balance: $4(+1) + (\\text{complex}) = 0$, so the complex is $\\ce{[Fe(CN)6]^4-}$. Then $x + 6(-1) = -4$ gives $x = +2$. $\\ce{Fe^2+}$ $= [\\text{Ar}]\\,3d^6$: six $d$ electrons. (The cyanide is locked so tightly to Fe(II) that this compound is not toxic, which is why it can be added to salt.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Coordination number and geometry',
      blocks: [
        {
          type: 'p',
          text: 'Coordination numbers from 2 to 8 occur, but 6 and 4 dominate. Each comes with a characteristic shape, and the shape is what the crystal field model will be built on.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 510 230" xmlns="http://www.w3.org/2000/svg"><line x1="98.5" y1="89.0" x2="97.5" y2="87.8" stroke="currentColor" stroke-width="1.5"/><line x1="101.7" y1="87.2" x2="99.5" y2="84.9" stroke="currentColor" stroke-width="1.5"/><line x1="104.8" y1="85.5" x2="101.6" y2="81.9" stroke="currentColor" stroke-width="1.5"/><line x1="107.9" y1="83.8" x2="103.6" y2="79.0" stroke="currentColor" stroke-width="1.5"/><line x1="111.0" y1="82.1" x2="105.7" y2="76.1" stroke="currentColor" stroke-width="1.5"/><line x1="114.1" y1="80.4" x2="107.7" y2="73.2" stroke="currentColor" stroke-width="1.5"/><line x1="117.2" y1="78.7" x2="109.8" y2="70.3" stroke="currentColor" stroke-width="1.5"/><circle cx="123.0" cy="66.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="123.0" y="70.5" text-anchor="middle" font-size="12">L</text><circle cx="85" cy="100" r="14" fill="currentColor" class="f-orange" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="85" y="105" text-anchor="middle" font-size="14">M</text><line x1="85.0" y1="86.0" x2="85.0" y2="49.0" stroke="currentColor" stroke-width="2.4"/><circle cx="85.0" cy="38.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="85.0" y="42.5" text-anchor="middle" font-size="12">L</text><line x1="85.0" y1="114.0" x2="85.0" y2="151.0" stroke="currentColor" stroke-width="2.4"/><circle cx="85.0" cy="162.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="85.0" y="166.5" text-anchor="middle" font-size="12">L</text><line x1="71.0" y1="100.0" x2="34.0" y2="100.0" stroke="currentColor" stroke-width="2.4"/><circle cx="23.0" cy="100.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="23.0" y="104.5" text-anchor="middle" font-size="12">L</text><line x1="99.0" y1="100.0" x2="136.0" y2="100.0" stroke="currentColor" stroke-width="2.4"/><circle cx="147.0" cy="100.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="147.0" y="104.5" text-anchor="middle" font-size="12">L</text><polygon points="74.6,109.3 51.2,122.2 59.2,131.1" fill="currentColor"/><circle cx="47.0" cy="134.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="47.0" y="138.5" text-anchor="middle" font-size="12">L</text><line x1="271.1" y1="104.5" x2="271.4" y2="102.9" stroke="currentColor" stroke-width="1.5"/><line x1="273.5" y1="105.9" x2="274.2" y2="102.7" stroke="currentColor" stroke-width="1.5"/><line x1="276.0" y1="107.2" x2="277.0" y2="102.5" stroke="currentColor" stroke-width="1.5"/><line x1="278.4" y1="108.6" x2="279.8" y2="102.4" stroke="currentColor" stroke-width="1.5"/><line x1="280.8" y1="110.0" x2="282.6" y2="102.2" stroke="currentColor" stroke-width="1.5"/><line x1="283.3" y1="111.4" x2="285.4" y2="102.0" stroke="currentColor" stroke-width="1.5"/><line x1="285.7" y1="112.7" x2="288.2" y2="101.8" stroke="currentColor" stroke-width="1.5"/><circle cx="299.0" cy="110.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="299.0" y="114.5" text-anchor="middle" font-size="12">L</text><circle cx="255" cy="100" r="14" fill="currentColor" class="f-orange" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="255" y="105" text-anchor="middle" font-size="14">M</text><line x1="255.0" y1="86.0" x2="255.0" y2="49.0" stroke="currentColor" stroke-width="2.4"/><circle cx="255.0" cy="38.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="255.0" y="42.5" text-anchor="middle" font-size="12">L</text><line x1="242.3" y1="105.9" x2="209.0" y2="121.4" stroke="currentColor" stroke-width="2.4"/><circle cx="199.0" cy="126.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="199.0" y="130.5" text-anchor="middle" font-size="12">L</text><polygon points="262.9,111.6 273.8,138.3 283.8,131.5" fill="currentColor"/><circle cx="285.0" cy="144.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="285.0" y="148.5" text-anchor="middle" font-size="12">L</text><polygon points="338,132 390,56 512,68 460,144" fill="currentColor" class="f-gray" fill-opacity="0.12" stroke="currentColor" class="s-gray" stroke-dasharray="4 3"/><line x1="415.8" y1="87.2" x2="414.5" y2="88.2" stroke="currentColor" stroke-width="1.5"/><line x1="415.3" y1="85.3" x2="412.8" y2="87.3" stroke="currentColor" stroke-width="1.5"/><line x1="414.8" y1="83.4" x2="411.0" y2="86.4" stroke="currentColor" stroke-width="1.5"/><line x1="414.3" y1="81.5" x2="409.3" y2="85.5" stroke="currentColor" stroke-width="1.5"/><line x1="413.8" y1="79.6" x2="407.5" y2="84.6" stroke="currentColor" stroke-width="1.5"/><line x1="413.3" y1="77.7" x2="405.8" y2="83.7" stroke="currentColor" stroke-width="1.5"/><line x1="412.8" y1="75.8" x2="404.1" y2="82.8" stroke="currentColor" stroke-width="1.5"/><circle cx="401.0" cy="70.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="401.0" y="74.5" text-anchor="middle" font-size="12">L</text><circle cx="425" cy="100" r="14" fill="currentColor" class="f-orange" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="425" y="105" text-anchor="middle" font-size="14">M</text><line x1="411.9" y1="104.8" x2="375.3" y2="118.2" stroke="currentColor" stroke-width="2.4"/><circle cx="365.0" cy="122.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="365.0" y="126.5" text-anchor="middle" font-size="12">L</text><line x1="438.1" y1="95.2" x2="474.7" y2="81.8" stroke="currentColor" stroke-width="2.4"/><circle cx="485.0" cy="78.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="485.0" y="82.5" text-anchor="middle" font-size="12">L</text><polygon points="433.7,110.9 437.4,125.2 446.8,117.7" fill="currentColor"/><circle cx="449.0" cy="130.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.3" stroke="currentColor" class="s-blue" stroke-width="1.4"/><text x="449.0" y="134.5" text-anchor="middle" font-size="12">L</text><text x="85" y="186" text-anchor="middle" font-size="14" font-weight="600">octahedral</text><text x="85" y="204" text-anchor="middle" font-size="12" class="t-gray">CN 6 · all angles 90°</text><text x="85" y="222" text-anchor="middle" font-size="12">[Co(NH₃)₆]³⁺</text><text x="255" y="186" text-anchor="middle" font-size="14" font-weight="600">tetrahedral</text><text x="255" y="204" text-anchor="middle" font-size="12" class="t-gray">CN 4 · 109.5°</text><text x="255" y="222" text-anchor="middle" font-size="12">[CoCl₄]²⁻, [Zn(NH₃)₄]²⁺</text><text x="425" y="186" text-anchor="middle" font-size="14" font-weight="600">square planar</text><text x="425" y="204" text-anchor="middle" font-size="12" class="t-gray">CN 4 · 90°, flat</text><text x="425" y="222" text-anchor="middle" font-size="12">[Ni(CN)₄]²⁻, cisplatin</text></svg>`,
          alt: 'Three geometries with a central metal M and ligands L. Octahedral: six ligands, four in a square and one above and one below, all at 90 degrees. Tetrahedral: four ligands at 109.5 degrees. Square planar: four ligands at the corners of a flat square around the metal. Examples: hexaamminecobalt(III) for octahedral, tetrachloridocobaltate(II) and tetraamminezinc for tetrahedral, tetracyanidonickelate(II) and cisplatin for square planar.',
          caption: 'Wedges point toward you and hashed bonds away. In the octahedron, the six ligands sit on the $\\pm x$, $\\pm y$ and $\\pm z$ axes. Square planar is the octahedron with the two axial ($\\pm z$) ligands removed.',
        },
        {
          type: 'table',
          headers: ['CN', 'Geometry', 'Typical metal ions', 'Examples'],
          rows: [
            ['2', 'linear', '$d^{10}$: $\\ce{Ag+}$, $\\ce{Au+}$, $\\ce{Cu+}$', '$\\ce{[Ag(NH3)2]+}$'],
            ['4', 'tetrahedral', '$d^{10}$ ($\\ce{Zn^2+}$), many with large ligands such as $\\ce{Cl-}$', '$\\ce{[Zn(NH3)4]^2+}$, $\\ce{[CoCl4]^2-}$'],
            ['4', 'square planar', '$d^8$: $\\ce{Pt^2+}$, $\\ce{Pd^2+}$, $\\ce{Au^3+}$, $\\ce{Ni^2+}$ with strong-field ligands', '$\\ce{[Pt(NH3)2Cl2]}$, $\\ce{[Ni(CN)4]^2-}$'],
            ['6', 'octahedral', 'by far the most common', '$\\ce{[Co(NH3)6]^3+}$, $\\ce{[Fe(H2O)6]^3+}$, $\\ce{[Fe(CN)6]^4-}$'],
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'With coordination number 4, exams expect: $d^8$ ions of the heavier metals ($\\ce{Pt^2+}$, $\\ce{Pd^2+}$, $\\ce{Au^3+}$) and $\\ce{Ni^2+}$ with cyanide are **square planar**; $d^{10}$ ions and most others are **tetrahedral**. Remember to count a bidentate ligand twice: $\\ce{[Co(en)3]^3+}$ has three ligands but coordination number 6.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'What is the most likely geometry of the diamagnetic complex ion $\\ce{[PtCl4]^2-}$?',
      options: [
        { text: 'Tetrahedral, because four ligands always spread out to 109.5°', why: 'Four ligands do not always adopt the tetrahedron. $\\ce{Pt^2+}$ is a heavy $d^8$ ion, and those strongly prefer square planar.' },
        { text: 'Octahedral, because platinum has coordination number 6', why: 'Count the ligands: four chlorides, so the coordination number here is 4. An octahedron needs six donor atoms.' },
        { text: 'Square planar, because $\\ce{Pt^2+}$ is a $d^8$ ion of a heavy metal', correct: true, why: 'Pt is in group 10, so $\\ce{Pt^2+}$ is $d^8$. Heavy $d^8$ ions (Pt, Pd, Au(III)) form square planar complexes, where the eight $d$ electrons pair up in the four lowest orbitals, consistent with the observed diamagnetism.' },
        { text: 'Linear, because the two negative charges repel each other', why: 'Linear geometry has coordination number 2. Here four chloride ions are bonded to the metal.' },
      ],
      explanation: 'Coordination number 4 allows tetrahedral or square planar. Platinum(II) is $d^8$ (group 10 minus 2), and $d^8$ ions of the second and third transition series are square planar. This is also the geometry of the anticancer drug cisplatin, $\\ce{[Pt(NH3)2Cl2]}$, made from $\\ce{[PtCl4]^2-}$ by replacing two chlorides with ammonia.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Naming coordination compounds',
      blocks: [
        {
          type: 'p',
          text: 'The names look intimidating, but they are assembled from a small kit of rules. Here they are in the order you apply them.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Cation first, then anion', text: 'As for any salt, name the cation before the anion, whether or not the complex is the cation. Example: potassium ... ferrate(III).' },
            { title: 'Ligands before the metal, alphabetically', text: 'Within the complex, list ligands in alphabetical order of their names, ignoring multiplying prefixes ("triammine" files under **a**).' },
            { title: 'Prefixes for how many', text: 'di-, tri-, tetra-, penta-, hexa- for simple ligands; bis-, tris-, tetrakis- (with parentheses) for ligands whose names already contain a number or are long, e.g. bis(ethylenediamine).' },
            { title: 'Ligand names', text: 'Anionic ligands end in **-o** (current IUPAC: **-ido**): chlorido, cyanido, hydroxido, oxalato. Neutral ligands keep their names, except water = **aqua**, ammonia = **ammine**, CO = **carbonyl**.' },
            { title: 'Metal and oxidation state', text: 'Give the oxidation state in Roman numerals in parentheses. If the **complex is an anion**, the metal name ends in **-ate**, using the Latin root for some: ferrate (Fe), cuprate (Cu), argentate (Ag), aurate (Au), plumbate (Pb), stannate (Sn); otherwise cobaltate, nickelate, platinate, zincate.' },
          ],
        },
        {
          type: 'table',
          headers: ['Ligand', 'Formula', 'Name in a complex', 'Charge'],
          rows: [
            ['water', '$\\ce{H2O}$', 'aqua', '0'],
            ['ammonia', '$\\ce{NH3}$', 'ammine (two m\'s)', '0'],
            ['carbon monoxide', '$\\ce{CO}$', 'carbonyl', '0'],
            ['ethylenediamine', '$\\ce{H2NCH2CH2NH2}$ (en)', 'ethylenediamine', '0'],
            ['chloride', '$\\ce{Cl-}$', 'chlorido (older: chloro)', '$-1$'],
            ['cyanide', '$\\ce{CN-}$', 'cyanido (older: cyano)', '$-1$'],
            ['hydroxide', '$\\ce{OH-}$', 'hydroxido (older: hydroxo)', '$-1$'],
            ['oxalate', '$\\ce{C2O4^2-}$ (ox)', 'oxalato', '$-2$'],
          ],
          caption: 'The older names (chloro, cyano) are still common in textbooks and on exams; either is accepted.',
        },
        {
          type: 'derivation',
          title: 'Two names, step by step',
          steps: [
            { tex: '\\ce{[Co(NH3)5Cl]Cl2}: \\quad \\text{Co is } +3 \\text{ (found earlier)}', why: 'Always find the oxidation state first.' },
            { tex: '\\text{pentaammine} + \\text{chlorido} + \\text{cobalt(III)}', why: '"ammine" (a) comes before "chlorido" (c). The complex is a cation, so plain "cobalt".' },
            { tex: '\\Rightarrow\\ \\text{pentaamminechloridocobalt(III) chloride}', why: 'The ligand and metal names run together as one word; the anion follows.' },
            { tex: '\\ce{K3[Fe(CN)6]}: \\quad x + 6(-1) = -3 \\implies x = +3', why: 'Three $\\ce{K+}$ make the complex $\\ce{[Fe(CN)6]^3-}$.' },
            { tex: '\\Rightarrow\\ \\text{potassium hexacyanidoferrate(III)}', why: 'The complex is an anion, so iron becomes "ferrate". Its traditional name is potassium ferricyanide.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'fill',
      prompt: 'Choose the correct name for each compound.',
      template: '$\\ce{[Cu(NH3)4]SO4}$: ___\n\n$\\ce{Na2[PtCl4]}$: ___',
      blanks: [{ answers: ['tetraamminecopper(II) sulfate'] }, { answers: ['sodium tetrachloridoplatinate(II)'] }],
      wordBank: [
        'tetraamminecopper(II) sulfate',
        'tetraamminecuprate(II) sulfate',
        'tetraamminecopper(IV) sulfate',
        'sodium tetrachloridoplatinate(II)',
        'sodium tetrachloridoplatinum(II)',
        'sodium tetrachloridoplatinate(IV)',
      ],
      hint: 'Find the charge of each complex from its counter-ions, then the metal\'s oxidation state. Only anionic complexes get the -ate ending.',
      explanation: 'Sulfate is $2-$, so $\\ce{[Cu(NH3)4]^2+}$ is a cation with Cu $+2$ (ammonia is neutral): tetraamminecopper(II) sulfate, with no -ate because the complex is a cation. Two $\\ce{Na+}$ make $\\ce{[PtCl4]^2-}$ an anion: $x + 4(-1) = -2$ gives Pt $+2$, and the anion takes -ate: sodium tetrachloridoplatinate(II). The (IV) options come from forgetting to subtract the ligand charges.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student names $\\ce{[Co(en)2Cl2]Cl}$, where en is ethylenediamine. Tap the first wrong line.',
      lines: [
        'One $\\ce{Cl-}$ is outside the brackets, so the complex ion is $\\ce{[Co(en)2Cl2]+}$',
        'en is neutral and each $\\ce{Cl-}$ is $-1$: $x + 0 + 2(-1) = +1$, so Co is $+3$',
        'Alphabetical order: chlorido (c) before ethylenediamine (e)',
        'Prefixes: di for chlorido, bis for ethylenediamine (its name is long and contains "di")',
        'Name: dichloridobis(ethylenediamine)cobaltate(III) chloride',
      ],
      errorLines: [5],
      explanation: 'The complex ion is a **cation** (charge $+1$), so the metal keeps its plain name: dichloridobis(ethylenediamine)cobalt(III) chloride. The -ate ending is only for complexes that are anions, such as $\\ce{[CoCl4]^2-}$, tetrachloridocobaltate(II). Every other step was right, including the oxidation state $+3$ and the bis prefix.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Isomers of complexes',
      blocks: [
        {
          type: 'p',
          text: 'Complexes with the same formula can differ in how the atoms are connected (**structural isomers**) or only in how they are arranged in space (**stereoisomers**). Structural isomers include *linkage* isomers, where a ligand can bind through either of two atoms (nitrite bonds through N as nitro, $\\ce{-NO2}$, or through O as nitrito, $\\ce{-ONO}$), and *ionization* isomers that swap a ligand with a counter-ion, such as $\\ce{[Co(NH3)5Br]SO4}$ (violet) and $\\ce{[Co(NH3)5SO4]Br}$ (red).',
        },
        {
          type: 'definition',
          term: 'Geometric isomers (cis and trans)',
          text: '[[gchem-geometric-isomer|Geometric isomers]] have the same ligands bonded to the metal but in different relative positions: **cis** (two identical ligands adjacent, at 90°) or **trans** (opposite each other, at 180°). They are different compounds with different properties.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="62" x2="110" y2="39" stroke="currentColor" stroke-width="2.2"/><text x="110" y="32" text-anchor="middle" font-size="15" font-weight="600" class="t-green">Cl</text><line x1="130" y1="82" x2="168" y2="82" stroke="currentColor" stroke-width="2.2"/><text x="184" y="87" text-anchor="middle" font-size="15" font-weight="600" class="t-green">Cl</text><line x1="90" y1="82" x2="66" y2="82" stroke="currentColor" stroke-width="2.2"/><text x="36" y="87" text-anchor="middle" font-size="15" font-weight="600" class="t-blue">H₃N</text><line x1="110" y1="97" x2="110" y2="120" stroke="currentColor" stroke-width="2.2"/><text x="110" y="142" text-anchor="middle" font-size="15" font-weight="600" class="t-blue">NH₃</text><text x="110" y="87" text-anchor="middle" font-size="15" font-weight="600">Pt</text><path d="M110,52 A30,30 0 0 1 140,82" fill="none" stroke="currentColor" class="s-red" stroke-width="1.5" stroke-dasharray="3 2"/><text x="140" y="58" font-size="12" class="t-red">90°</text><text x="110" y="174" text-anchor="middle" font-size="14" font-weight="600">cis</text><text x="110" y="192" text-anchor="middle" font-size="12" class="t-gray">Cl’s at 90° · cisplatin, anticancer drug</text><line x1="330" y1="62" x2="330" y2="39" stroke="currentColor" stroke-width="2.2"/><text x="330" y="32" text-anchor="middle" font-size="15" font-weight="600" class="t-green">Cl</text><line x1="330" y1="97" x2="330" y2="120" stroke="currentColor" stroke-width="2.2"/><text x="330" y="142" text-anchor="middle" font-size="15" font-weight="600" class="t-green">Cl</text><line x1="310" y1="82" x2="286" y2="82" stroke="currentColor" stroke-width="2.2"/><text x="256" y="87" text-anchor="middle" font-size="15" font-weight="600" class="t-blue">H₃N</text><line x1="350" y1="82" x2="374" y2="82" stroke="currentColor" stroke-width="2.2"/><text x="404" y="87" text-anchor="middle" font-size="15" font-weight="600" class="t-blue">NH₃</text><text x="330" y="87" text-anchor="middle" font-size="15" font-weight="600">Pt</text><text x="330" y="174" text-anchor="middle" font-size="14" font-weight="600">trans</text><text x="330" y="192" text-anchor="middle" font-size="12" class="t-gray">Cl’s at 180° · transplatin, inactive</text></svg>`,
          alt: 'Two square planar platinum complexes with two chlorides and two ammonias. In the cis isomer the two chlorides are adjacent at 90 degrees: this is cisplatin, an anticancer drug. In the trans isomer the chlorides are opposite at 180 degrees: transplatin, which is inactive.',
          caption: '$\\ce{[Pt(NH3)2Cl2]}$ exists as two isomers. Only the cis form, cisplatin, is an effective cancer drug, because only it can grip two neighboring sites on DNA.',
        },
        {
          type: 'list',
          items: [
            '**Square planar $\\ce{MA2B2}$** (like the platinum complex above): cis and trans exist.',
            '**Octahedral $\\ce{MA4B2}$**: cis and trans exist. $\\ce{[Co(NH3)4Cl2]+}$ is violet as cis and green as trans.',
            '**Tetrahedral**: no geometric isomers, because every corner of a tetrahedron is adjacent to every other.',
          ],
        },
        {
          type: 'definition',
          term: 'Optical isomers',
          text: '[[gchem-optical-isomer|Optical isomers]] (enantiomers) are non-superimposable mirror images, like your left and right hands. A molecule or ion with this handedness is **chiral**. Enantiomers have identical physical properties except that they rotate plane-polarized light in opposite directions, and they can behave very differently in the chiral environment of the body.',
        },
        {
          type: 'p',
          text: 'The classic chiral complex is $\\ce{[Co(en)3]^3+}$: three ethylenediamine rings wrapped around the octahedron like the blades of a propeller, which can twist left-handed or right-handed. No rotation turns one into the other. *cis*-$\\ce{[Co(en)2Cl2]+}$ is chiral too, while its trans isomer has a mirror plane and is not. Chirality becomes a central theme of Organic Chemistry, where most of the molecules of life are chiral.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Which of these complexes can exist as cis and trans geometric isomers?',
      options: [
        { text: '$\\ce{[Zn(NH3)2Cl2]}$ (tetrahedral)', why: 'In a tetrahedron all four positions are adjacent to each other, so there is only one way to place two $\\ce{Cl}$ and two $\\ce{NH3}$.' },
        { text: '$\\ce{[Co(NH3)5Cl]^2+}$ (octahedral)', why: 'With only one chloride there is nothing for it to be cis or trans **to**: all six positions of an octahedron are equivalent, so only one arrangement exists.' },
        { text: '$\\ce{[Pt(NH3)2Cl2]}$ (square planar)', correct: true, why: 'In a square the two chlorides can be adjacent (cis, cisplatin) or opposite (trans). These are two distinct compounds.' },
        { text: '$\\ce{[Co(NH3)6]^3+}$ (octahedral)', why: 'All six ligands are identical, so no isomers are possible.' },
      ],
      explanation: 'Geometric isomerism needs at least two kinds of ligand **and** a geometry where "adjacent" and "opposite" are different positions. Square planar and octahedral qualify; tetrahedral does not, because there is no "opposite" corner. $\\ce{[Pt(NH3)2Cl2]}$ is the textbook (and pharmacy) example.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Crystal field theory: splitting the d orbitals',
      blocks: [
        {
          type: 'p',
          text: 'Why are complexes colored, and why are some magnetic and others not? [[gchem-crystal-field-theory|Crystal field theory]] (CFT) answers both with a deliberately simple model: treat the ligands as negative point charges (or the negative ends of dipoles), and ask how their repulsion changes the energies of the metal\'s five $d$ orbitals.',
        },
        {
          type: 'p',
          text: 'Put six ligands on the $\\pm x$, $\\pm y$, $\\pm z$ axes, as in an octahedron. Two of the $d$ orbitals, $d_{z^2}$ and $d_{x^2-y^2}$, have their lobes pointing **straight at** the ligands; an electron in them is strongly repelled, so their energy rises. The other three, $d_{xy}$, $d_{xz}$ and $d_{yz}$, have lobes pointing **between** the axes, avoid the ligands, and end up lower.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 275" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="270" x2="22" y2="20" stroke="currentColor" stroke-width="1.3"/><polygon points="22,12 17,24 27,24" fill="currentColor"/><text x="14" y="150" text-anchor="middle" font-size="12" transform="rotate(-90 14 150)">energy</text><line x1="40" y1="190" x2="60" y2="190" stroke="currentColor" class="" stroke-width="3"/><line x1="66" y1="190" x2="86" y2="190" stroke="currentColor" class="" stroke-width="3"/><line x1="92" y1="190" x2="112" y2="190" stroke="currentColor" class="" stroke-width="3"/><line x1="118" y1="190" x2="138" y2="190" stroke="currentColor" class="" stroke-width="3"/><line x1="144" y1="190" x2="164" y2="190" stroke="currentColor" class="" stroke-width="3"/><text x="102.0" y="214" text-anchor="middle" font-size="12">free ion</text><text x="102.0" y="230" text-anchor="middle" font-size="12" class="t-gray">5 d orbitals, same energy</text><line x1="178" y1="162" x2="198" y2="162" stroke="currentColor" class="s-gray" stroke-width="3"/><line x1="204" y1="162" x2="224" y2="162" stroke="currentColor" class="s-gray" stroke-width="3"/><line x1="230" y1="162" x2="250" y2="162" stroke="currentColor" class="s-gray" stroke-width="3"/><line x1="256" y1="162" x2="276" y2="162" stroke="currentColor" class="s-gray" stroke-width="3"/><line x1="282" y1="162" x2="302" y2="162" stroke="currentColor" class="s-gray" stroke-width="3"/><text x="240.0" y="150" text-anchor="middle" font-size="11.5" class="t-gray">average (spherical field)</text><line x1="331" y1="90" x2="351" y2="90" stroke="currentColor" class="s-red" stroke-width="3"/><line x1="357" y1="90" x2="377" y2="90" stroke="currentColor" class="s-red" stroke-width="3"/><line x1="318" y1="210" x2="338" y2="210" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="344" y1="210" x2="364" y2="210" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="370" y1="210" x2="390" y2="210" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="168" y1="190" x2="174" y2="162" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="4 3"/><line x1="306" y1="162" x2="327" y2="90" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="4 3"/><line x1="306" y1="162" x2="314" y2="210" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="4 3"/><text x="354.0" y="60" text-anchor="middle" font-size="14" class="t-red">e<tspan font-size="10" dy="4">g</tspan></text><text x="354.0" y="78" text-anchor="middle" font-size="11.5">d(z²), d(x²−y²)</text><text x="354.0" y="232" text-anchor="middle" font-size="14" class="t-blue">t<tspan font-size="10" dy="4">2g</tspan></text><text x="354.0" y="248" text-anchor="middle" font-size="11.5">d(xy), d(xz), d(yz)</text><line x1="391" y1="90" x2="391" y2="210" stroke="currentColor" class="s-gray" stroke-width="1.2"/><line x1="387" y1="90" x2="395" y2="90" stroke="currentColor" class="s-gray" stroke-width="1.2"/><line x1="387" y1="162" x2="395" y2="162" stroke="currentColor" class="s-gray" stroke-width="1.2"/><line x1="387" y1="210" x2="395" y2="210" stroke="currentColor" class="s-gray" stroke-width="1.2"/><text x="398" y="130.0" font-size="11.5" class="t-red">+0.6Δₒ</text><text x="398" y="190.0" font-size="11.5" class="t-blue">−0.4Δₒ</text><line x1="449" y1="90" x2="449" y2="210" stroke="currentColor" stroke-width="1.6"/><line x1="444" y1="90" x2="454" y2="90" stroke="currentColor" stroke-width="1.6"/><line x1="444" y1="210" x2="454" y2="210" stroke="currentColor" stroke-width="1.6"/><text x="457" y="155.0" font-size="15" font-weight="600">Δₒ</text><text x="364.0" y="30" text-anchor="middle" font-size="12">octahedral field</text></svg>`,
          alt: 'Energy-level diagram. On the left, five degenerate d orbitals of the free ion. In the middle, all five raised to an average level by a spherical field. On the right, the octahedral field splits them into two higher e g orbitals, d z squared and d x squared minus y squared, at plus 0.6 delta o, and three lower t 2 g orbitals, d x y, d x z and d y z, at minus 0.4 delta o. The total gap is delta o.',
          caption: 'The octahedral field splits the $d$ orbitals into the higher $e_g$ pair and the lower $t_{2g}$ trio, separated by the [[gchem-crystal-field-splitting|crystal field splitting energy]] $\\Delta_o$. The average energy is preserved: $2(+0.6\\Delta_o) + 3(-0.4\\Delta_o) = 0$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why +0.6 and −0.4?',
          text: 'Splitting rearranges energy without changing the average (the "barycenter"). If the two $e_g$ orbitals rise by $a$ and the three $t_{2g}$ orbitals fall by $b$, then $2a = 3b$ and $a + b = \\Delta_o$. Solving gives $a = 0.6\\Delta_o$ and $b = 0.4\\Delta_o$. So each electron in $t_{2g}$ stabilizes the complex by $0.4\\Delta_o$, and each in $e_g$ destabilizes it by $0.6\\Delta_o$. The total is the **crystal field stabilization energy** (CFSE).',
        },
        {
          type: 'p',
          text: 'In a **tetrahedral** field the pattern flips: no ligand points straight at any $d$ orbital, the three $t_2$ orbitals ($d_{xy}$, $d_{xz}$, $d_{yz}$) come closest and lie higher, and the splitting is smaller, $\\Delta_t \\approx \\tfrac{4}{9}\\Delta_o$, so tetrahedral complexes are almost always high spin (next card).',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'High spin, low spin and the spectrochemical series',
      blocks: [
        {
          type: 'p',
          text: 'Fill the split orbitals with the metal\'s $d$ electrons. The first three go into $t_{2g}$, one per orbital ([[chem-hunds-rule|Hund\'s rule]]). The fourth faces a choice: pair up in $t_{2g}$, which costs the **pairing energy** $P$ (the extra repulsion of two electrons sharing an orbital), or climb to $e_g$, which costs $\\Delta_o$. Whichever is cheaper wins.',
        },
        {
          type: 'list',
          items: [
            '**Weak field ($\\Delta_o < P$):** electrons spread out into $e_g$ before pairing: a **[[gchem-high-spin|high-spin]]** complex with the maximum number of unpaired electrons.',
            '**Strong field ($\\Delta_o > P$):** electrons pair in $t_{2g}$ before using $e_g$: a **low-spin** complex.',
            'Only $d^4$, $d^5$, $d^6$ and $d^7$ octahedral ions have a choice; for $d^1$–$d^3$ and $d^8$–$d^{10}$ there is only one possible arrangement.',
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 470 250" xmlns="http://www.w3.org/2000/svg"><line x1="79" y1="140" x2="109" y2="140" stroke="currentColor" class="s-red" stroke-width="3"/><line x1="94.0" y1="136" x2="94.0" y2="114" stroke="currentColor" stroke-width="1.8"/><polyline points="90.0,120 94.0,114 98.0,120" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="117" y1="140" x2="147" y2="140" stroke="currentColor" class="s-red" stroke-width="3"/><line x1="132.0" y1="136" x2="132.0" y2="114" stroke="currentColor" stroke-width="1.8"/><polyline points="128.0,120 132.0,114 136.0,120" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="60" y1="190" x2="90" y2="190" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="70.0" y1="186" x2="70.0" y2="164" stroke="currentColor" stroke-width="1.8"/><polyline points="66.0,170 70.0,164 74.0,170" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="80.0" y1="164" x2="80.0" y2="186" stroke="currentColor" stroke-width="1.8"/><polyline points="76.0,180 80.0,186 84.0,180" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="98" y1="190" x2="128" y2="190" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="113.0" y1="186" x2="113.0" y2="164" stroke="currentColor" stroke-width="1.8"/><polyline points="109.0,170 113.0,164 117.0,170" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="136" y1="190" x2="166" y2="190" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="151.0" y1="186" x2="151.0" y2="164" stroke="currentColor" stroke-width="1.8"/><polyline points="147.0,170 151.0,164 155.0,170" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="50" y="144" text-anchor="end" font-size="13" class="t-red">e<tspan font-size="9.5" dy="4">g</tspan></text><text x="50" y="194" text-anchor="end" font-size="13" class="t-blue">t<tspan font-size="9.5" dy="4">2g</tspan></text><line x1="180" y1="140" x2="180" y2="190" stroke="currentColor" stroke-width="1.4"/><line x1="176" y1="140" x2="184" y2="140" stroke="currentColor" stroke-width="1.4"/><line x1="176" y1="190" x2="184" y2="190" stroke="currentColor" stroke-width="1.4"/><text x="186" y="170.0" font-size="13">Δₒ</text><text x="113.0" y="20" text-anchor="middle" font-size="14" font-weight="600">high spin</text><text x="113.0" y="38" text-anchor="middle" font-size="12.5">[Fe(H₂O)₆]²⁺</text><text x="113.0" y="220" text-anchor="middle" font-size="12" class="t-gray">weak field: Δₒ &lt; P</text><text x="113.0" y="238" text-anchor="middle" font-size="12.5" class="t-purple">4 unpaired · paramagnetic</text><line x1="319" y1="70" x2="349" y2="70" stroke="currentColor" class="s-red" stroke-width="3"/><line x1="357" y1="70" x2="387" y2="70" stroke="currentColor" class="s-red" stroke-width="3"/><line x1="300" y1="190" x2="330" y2="190" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="310.0" y1="186" x2="310.0" y2="164" stroke="currentColor" stroke-width="1.8"/><polyline points="306.0,170 310.0,164 314.0,170" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="320.0" y1="164" x2="320.0" y2="186" stroke="currentColor" stroke-width="1.8"/><polyline points="316.0,180 320.0,186 324.0,180" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="338" y1="190" x2="368" y2="190" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="348.0" y1="186" x2="348.0" y2="164" stroke="currentColor" stroke-width="1.8"/><polyline points="344.0,170 348.0,164 352.0,170" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="358.0" y1="164" x2="358.0" y2="186" stroke="currentColor" stroke-width="1.8"/><polyline points="354.0,180 358.0,186 362.0,180" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="376" y1="190" x2="406" y2="190" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="386.0" y1="186" x2="386.0" y2="164" stroke="currentColor" stroke-width="1.8"/><polyline points="382.0,170 386.0,164 390.0,170" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="396.0" y1="164" x2="396.0" y2="186" stroke="currentColor" stroke-width="1.8"/><polyline points="392.0,180 396.0,186 400.0,180" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="290" y="74" text-anchor="end" font-size="13" class="t-red">e<tspan font-size="9.5" dy="4">g</tspan></text><text x="290" y="194" text-anchor="end" font-size="13" class="t-blue">t<tspan font-size="9.5" dy="4">2g</tspan></text><line x1="420" y1="70" x2="420" y2="190" stroke="currentColor" stroke-width="1.4"/><line x1="416" y1="70" x2="424" y2="70" stroke="currentColor" stroke-width="1.4"/><line x1="416" y1="190" x2="424" y2="190" stroke="currentColor" stroke-width="1.4"/><text x="426" y="135.0" font-size="13">Δₒ</text><text x="353.0" y="20" text-anchor="middle" font-size="14" font-weight="600">low spin</text><text x="353.0" y="38" text-anchor="middle" font-size="12.5">[Fe(CN)₆]⁴⁻</text><text x="353.0" y="220" text-anchor="middle" font-size="12" class="t-gray">strong field: Δₒ &gt; P</text><text x="353.0" y="238" text-anchor="middle" font-size="12.5" class="t-purple">0 unpaired · diamagnetic</text></svg>`,
          alt: 'Two orbital diagrams for six d electrons. High spin, hexaaquairon(II): small gap; t2g has one paired and two single electrons, e g has two single electrons, four unpaired, paramagnetic. Low spin, hexacyanidoferrate(II): large gap; all six electrons paired in t2g, e g empty, zero unpaired, diamagnetic.',
          caption: 'The same $\\ce{Fe^2+}$ ion ($d^6$) with two different ligands. Water gives a small $\\Delta_o$ and four unpaired electrons; cyanide gives a large $\\Delta_o$ and none.',
        },
        {
          type: 'p',
          text: 'Which ligands split strongly? Measurements of many complexes put the common ligands in a fixed order, the [[gchem-spectrochemical-series|spectrochemical series]]:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\text{weak field: } \\ce{I- < Br- < Cl- < F- < OH- < H2O} \\\\ &< \\ce{NH3} < \\text{en} < \\ce{NO2- < CN- < CO} \\text{ : strong field} \\end{aligned}',
          caption: '$\\Delta_o$ also grows with the metal\'s charge ($\\ce{M^3+} > \\ce{M^2+}$) and down a group (4d and 5d metals are nearly always low spin).',
        },
        {
          type: 'derivation',
          title: 'Crystal field stabilization energy for $d^6$',
          steps: [
            { tex: '\\text{HS: } 4(-0.4\\Delta_o) + 2(+0.6\\Delta_o) = -0.4\\Delta_o', why: 'High spin, $t_{2g}^4 e_g^2$: four electrons in $t_{2g}$, two in $e_g$; one pair.' },
            { tex: '\\text{LS: } 6(-0.4\\Delta_o) + 2P = -2.4\\Delta_o + 2P', why: 'Low spin, $t_{2g}^6 e_g^0$: six electrons in $t_{2g}$ make three pairs, two more pairs than high spin, each costing $P$.' },
            { tex: '-2.4\\Delta_o + 2P < -0.4\\Delta_o \\iff \\Delta_o > P', why: 'Low spin wins when its total is lower. Rearranging gives the weak-field/strong-field rule, derived rather than memorized.' },
          ],
        },
        {
          type: 'p',
          text: '**Magnetism** is the experimental test. Unpaired electrons make a substance **paramagnetic** (drawn into a magnetic field); a substance with all electrons paired is **diamagnetic** (weakly pushed out). The pull grows with the number of unpaired electrons $n$, roughly as the spin-only magnetic moment $\\mu = \\sqrt{n(n+2)}$ Bohr magnetons. Weighing a sample in a magnetic field tells you $n$, and therefore whether the complex is high or low spin.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: '$\\ce{[CoF6]^3-}$ is octahedral. Fluoride is a weak-field ligand. How many unpaired electrons does the complex have?',
      hint: 'Find the oxidation state of Co and its $d$ count. Weak field means high spin: fill all five orbitals singly before pairing.',
      label: 'unpaired electrons $=$',
      answer: '4',
      explanation: '$x + 6(-1) = -3$ gives Co $+3$, so $\\ce{Co^3+}$ is $d^6$. With weak-field $\\ce{F-}$, $\\Delta_o < P$ and the complex is high spin: $t_{2g}^4 e_g^2$, with one pair in $t_{2g}$ and four unpaired electrons ($\\mu \\approx \\sqrt{24} = 4.9$ Bohr magnetons), so it is paramagnetic. Compare $\\ce{[Co(NH3)6]^3+}$: the same $d^6$ ion with stronger-field ammonia is low spin, $t_{2g}^6$, with zero unpaired electrons.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Why complexes are colored',
      blocks: [
        {
          type: 'p',
          text: 'The gap $\\Delta_o$ is typically 150–400 kJ/mol, which happens to match the energy of visible photons. A complex absorbs a photon whose energy equals the gap and promotes an electron from $t_{2g}$ to $e_g$ (a **d–d transition**):',
        },
        {
          type: 'math',
          tex: '\\Delta_o = E_{\\text{photon}} = \\frac{hc}{\\lambda}',
          caption: 'Larger splitting means higher-energy, shorter-wavelength light is absorbed.',
        },
        {
          type: 'p',
          text: 'The color you see is **not** the color absorbed. White light minus the absorbed band leaves mostly the [[gchem-complementary-color|complementary color]], the one opposite it on a color wheel.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 505 300" xmlns="http://www.w3.org/2000/svg"><path d="M132.0,80.7 A80,80 0 0 1 212.0,80.7 L189.0,120.6 A34,34 0 0 0 155.0,120.6 Z" fill="#e5484d" stroke="currentColor" stroke-width="1"/><text x="172.0" y="50.0" text-anchor="middle" font-size="13" font-weight="600">red</text><text x="172.0" y="65.0" text-anchor="middle" font-size="11" class="t-gray">620–750 nm</text><path d="M212.0,80.7 A80,80 0 0 1 252.0,150.0 L206.0,150.0 A34,34 0 0 0 189.0,120.6 Z" fill="#f08c2b" stroke="currentColor" stroke-width="1"/><text x="258.6" y="100.0" text-anchor="start" font-size="13" font-weight="600">orange</text><text x="258.6" y="115.0" text-anchor="start" font-size="11" class="t-gray">590–620 nm</text><path d="M252.0,150.0 A80,80 0 0 1 212.0,219.3 L189.0,179.4 A34,34 0 0 0 206.0,150.0 Z" fill="#f2d03b" stroke="currentColor" stroke-width="1"/><text x="258.6" y="200.0" text-anchor="start" font-size="13" font-weight="600">yellow</text><text x="258.6" y="215.0" text-anchor="start" font-size="11" class="t-gray">570–590 nm</text><path d="M212.0,219.3 A80,80 0 0 1 132.0,219.3 L155.0,179.4 A34,34 0 0 0 189.0,179.4 Z" fill="#2fb55d" stroke="currentColor" stroke-width="1"/><text x="172.0" y="250.0" text-anchor="middle" font-size="13" font-weight="600">green</text><text x="172.0" y="265.0" text-anchor="middle" font-size="11" class="t-gray">495–570 nm</text><path d="M132.0,219.3 A80,80 0 0 1 92.0,150.0 L138.0,150.0 A34,34 0 0 0 155.0,179.4 Z" fill="#3b6fe0" stroke="currentColor" stroke-width="1"/><text x="85.4" y="200.0" text-anchor="end" font-size="13" font-weight="600">blue</text><text x="85.4" y="215.0" text-anchor="end" font-size="11" class="t-gray">450–495 nm</text><path d="M92.0,150.0 A80,80 0 0 1 132.0,80.7 L155.0,120.6 A34,34 0 0 0 138.0,150.0 Z" fill="#8a4fd8" stroke="currentColor" stroke-width="1"/><text x="85.4" y="100.0" text-anchor="end" font-size="13" font-weight="600">violet</text><text x="85.4" y="115.0" text-anchor="end" font-size="11" class="t-gray">380–450 nm</text><line x1="224.0" y1="120.0" x2="123.5" y2="178.0" stroke="currentColor" stroke-width="2.2"/><polygon points="123.5,178.0 129.7,168.7 134.7,177.3" fill="currentColor"/><text x="352" y="70" font-size="12.5" class="">Opposite colors are</text><text x="352" y="88" font-size="12.5" class="">complementary.</text><text x="352" y="124" font-size="12.5" class="t-orange">A complex that absorbs</text><text x="352" y="142" font-size="12.5" class="t-orange">orange light (~600 nm)</text><text x="352" y="160" font-size="12.5" class="t-blue">looks blue: you see</text><text x="352" y="178" font-size="12.5" class="t-blue">what is left over.</text><text x="352" y="214" font-size="12.5" class="">Absorbs violet →</text><text x="352" y="232" font-size="12.5" class="">looks yellow.</text></svg>`,
          alt: 'A color wheel with red at top, then clockwise orange, yellow, green, blue and violet, each labeled with its wavelength range. An arrow goes from orange across the center to blue. Text: opposite colors are complementary; a complex that absorbs orange light near 600 nanometers looks blue; absorbs violet, looks yellow.',
          caption: 'Absorbed and observed colors sit opposite each other: red–green, orange–blue, yellow–violet. (Wavelength ranges are approximate.)',
        },
        {
          type: 'derivation',
          title: '$\\ce{[Ti(H2O)6]^3+}$ absorbs most strongly at 498 nm',
          steps: [
            { tex: 'E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(2.998 \\times 10^{8})}{498 \\times 10^{-9}}\\ \\text{J}', why: 'Energy of one photon, with $h$ in J s, $c$ in m/s and $\\lambda$ converted from nm to m. Seconds and meters cancel, leaving joules.' },
            { tex: '= 3.989 \\times 10^{-19}\\ \\text{J}', why: 'Per photon, that is, per complex ion.' },
            { tex: '\\Delta_o = (3.989 \\times 10^{-19}\\ \\text{J})(6.022 \\times 10^{23}\\ \\text{mol}^{-1})', why: 'Multiply by Avogadro\'s number to get energy per mole of complex.' },
            { tex: '= 2.40 \\times 10^{5}\\ \\text{J/mol} = 240\\ \\text{kJ/mol}', why: 'A typical splitting, comparable to a weak chemical bond.' },
          ],
          result: '$\\ce{Ti^3+}$ is $d^1$, so its single absorption band measures $\\Delta_o$ directly. It absorbs green-yellow light near 500 nm and the solution looks purple.',
        },
        {
          type: 'list',
          items: [
            '**Ligand changes color.** Pale blue $\\ce{[Cu(H2O)6]^2+}$ absorbs weakly in the red and near infrared; adding ammonia, a stronger-field ligand, shifts absorption to shorter wavelength (about 600 nm), giving deep blue $\\ce{[Cu(NH3)4]^2+}$.',
            '**$d^0$ and $d^{10}$ ions are colorless.** $\\ce{Sc^3+}$, $\\ce{Ti^4+}$ ($d^0$) and $\\ce{Zn^2+}$ ($d^{10}$) have no possible d–d transition: either no electron to promote or no empty $e_g$ place. That is why titanium dioxide and zinc oxide are brilliant white pigments and sunscreens.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'An octahedral complex has its absorption maximum at 600. nm. What is $\\Delta_o$ in kJ/mol? Use $h = 6.626 \\times 10^{-34}$ J s, $c = 2.998 \\times 10^{8}$ m/s and $N_A = 6.022 \\times 10^{23}$ mol⁻¹. (Three significant figures.)',
      hint: '$\\Delta_o = \\dfrac{hc}{\\lambda} \\times N_A$, with $\\lambda = 600. \\times 10^{-9}$ m. Divide by 1000 for kJ.',
      label: '$\\Delta_o =$',
      unit: 'kJ/mol',
      answer: '6.626*10^-34*2.998*10^8/(600*10^-9)*6.022*10^23/1000',
      answerTex: '199\\ \\text{kJ/mol}',
      tolerance: 0.6,
      explanation: 'One photon: $E = \\dfrac{(6.626 \\times 10^{-34})(2.998 \\times 10^{8})}{600. \\times 10^{-9}} = 3.311 \\times 10^{-19}$ J. Per mole: $3.311 \\times 10^{-19} \\times 6.022 \\times 10^{23} = 1.994 \\times 10^{5}$ J/mol $= 199$ kJ/mol. It absorbs orange light, so on the color wheel it looks blue. A longer absorption wavelength means a smaller $\\Delta_o$: this complex has a weaker field than $\\ce{[Ti(H2O)6]^3+}$ (240 kJ/mol at 498 nm).',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'truefalse',
      prompt: 'Aqueous $\\ce{Zn^2+}$ is colorless because zinc is not a metal that forms complexes.',
      answer: false,
      explanation: 'Zinc forms plenty of complexes ($\\ce{[Zn(H2O)6]^2+}$, $\\ce{[Zn(NH3)4]^2+}$, and zinc sites in hundreds of enzymes). The reason is its electron count: $\\ce{Zn^2+}$ is $d^{10}$, so both $t_{2g}$ and $e_g$ are full and no d–d transition is possible. With nothing absorbed in the visible, the solution transmits all colors and looks colorless. The same logic makes $d^0$ ions like $\\ce{Sc^3+}$ colorless.',
    },
    // ------------------------------------------------------------------ 18
    {
      kind: 'concept',
      title: 'Metals at work in living things',
      blocks: [
        {
          type: 'p',
          text: 'Life runs on coordination chemistry. The most important ligand in biology is the **porphyrin** ring: a flat, large ring whose four nitrogen atoms grip a metal ion at the center like a tetradentate chelate.',
        },
        {
          type: 'list',
          items: [
            '**Hemoglobin** carries oxygen in red blood cells using heme, an $\\ce{Fe^2+}$ porphyrin. The porphyrin supplies four N donors, a histidine from the protein is the fifth, and $\\ce{O2}$ binds reversibly at the sixth position of the octahedron. Binding $\\ce{O2}$ changes the iron\'s spin state and the crystal field, which is why oxygenated (arterial) blood is bright red and deoxygenated blood darker.',
            '**Carbon monoxide** is toxic because it is a strong-field ligand ($\\ce{CO}$ sits at the top of the spectrochemical series) that binds heme iron about 200 times more strongly than $\\ce{O2}$, blocking oxygen transport. **Cyanide** poisons by binding the iron of cytochrome c oxidase, the enzyme that lets cells use oxygen.',
            '**Chlorophyll** is a magnesium porphyrin. $\\ce{Mg^2+}$ has no $d$ electrons, so here the color comes from the ring\'s conjugated π electrons rather than d–d transitions: chlorophyll absorbs red and blue light for photosynthesis and reflects the green.',
            '**Cisplatin**, cis-$\\ce{[Pt(NH3)2Cl2]}$, is one of the most widely used cancer drugs. Inside a cell, where chloride concentration is low, its two cis chlorides are replaced by water, and platinum then binds two neighboring guanine bases of DNA, kinking the helix so the cell cannot divide. The trans isomer cannot reach two adjacent sites and is inactive.',
            '**Vitamin B₁₂** is a cobalt complex, and enzymes use zinc, copper, manganese and molybdenum at their active sites. EDTA chelation therapy removes lead by wrapping it in a soluble complex the kidneys can excrete.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why carbon monoxide detectors matter',
          text: 'Because CO is colorless and odorless and binds hemoglobin so tightly, a running generator, vehicle or heater in an enclosed space (a tent, vehicle cab or bunker) can be lethal before anyone notices symptoms. Treatment is high-concentration oxygen, which shifts the competition back toward $\\ce{O2}$ by Le Châtelier\'s principle.',
        },
      ],
    },
    // ------------------------------------------------------------------ 19
    {
      kind: 'concept',
      title: 'Looking back, and on to Organic Chemistry',
      blocks: [
        {
          type: 'p',
          text: 'This is the last lesson of General Chemistry. Take a moment to see how much ground you covered, because the course was really built around three questions you can now answer for almost any substance or reaction.',
        },
        {
          type: 'table',
          headers: ['Question', 'Where you learned to answer it'],
          rows: [
            ['**What is it, and why does it have that structure?**', 'Electronic structure and quantum numbers; bonding theory (formal charge, VSEPR, hybridization, MO theory); intermolecular forces, liquids and solids; and in this unit, nuclei and coordination complexes'],
            ['**Will it happen, and how far?**', 'Thermochemistry (ΔH, Hess\'s law), entropy and Gibbs free energy ($\\Delta G = \\Delta H - T\\Delta S$), equilibrium ($K$, $Q$, Le Châtelier, ICE tables), acid–base and solubility equilibria, and electrochemistry ($\\Delta G^\\circ = -nFE^\\circ = -RT\\ln K$)'],
            ['**How fast?**', 'Kinetics: rate laws, integrated rate laws and half-life (which you just met again in radioactive decay), the Arrhenius equation, mechanisms and catalysis'],
          ],
        },
        {
          type: 'p',
          text: 'Notice how often the same few ideas reappeared. Electrostatics explained lattice energy, intermolecular forces, nuclear stability and crystal field splitting. The exponential $e^{-x}$ appeared in the Boltzmann factor, the Arrhenius equation, first-order kinetics, radioactive decay and the link between $\\Delta G^\\circ$ and $K$. And the Lewis acid–base idea of a lone pair reaching for an empty orbital explained $\\ce{BF3}$, metal hydrates and every ligand in this lesson.',
        },
        {
          type: 'heading',
          text: 'Coming next: Organic Chemistry',
        },
        {
          type: 'p',
          text: 'Organic chemistry is the chemistry of carbon compounds: fuels and plastics, drugs and dyes, materials like nylon and Kevlar, and the molecules of life. Carbon earns its own course because it forms four strong bonds, to itself and to H, O, N and the halogens, in chains, rings and branches, giving millions of compounds. You already own the key tools:',
        },
        {
          type: 'list',
          items: [
            '**Structure:** $sp^3$, $sp^2$ and $sp$ hybridization and VSEPR predict the shapes of alkanes, alkenes and alkynes; resonance and formal charge explain why some molecules and ions are unusually stable.',
            '**Isomers and chirality:** the cis/trans and mirror-image isomers you met in complexes become a central theme (stereochemistry), because enzymes and drug receptors are chiral.',
            '**Functional groups:** alcohols, carboxylic acids, amines, carbonyls. Their reactivity follows from polarity, electronegativity, $K_a$ and $K_b$, which you can already reason about.',
            '**Mechanisms:** reactions are described step by step with curved arrows that track electron pairs moving from a Lewis base (a nucleophile) to a Lewis acid (an electrophile), while kinetics, thermodynamics and equilibrium decide which products form.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A habit worth carrying forward',
          text: 'Whenever a new reaction appears, ask the three course questions: what are the structures and where are the electrons, is it downhill ($\\Delta G < 0$, $K$ large), and is there a path fast enough to get there? That habit turns organic chemistry from a list of reactions to memorize into a set of predictions you can make.',
        },
      ],
    },
  ],
  takeaways: [
    'Transition-metal ions lose their $4s$ electrons first; the $d$ count of a first-row $\\ce{M^{n+}}$ is the group number minus $n$ (Fe²⁺ $d^6$, Fe³⁺ $d^5$, Cu²⁺ $d^9$).',
    'A complex is a Lewis acid–base adduct: a metal bonded to ligands through donor atoms. Coordination number counts donor atoms (en counts 2, EDTA 6); the metal\'s oxidation state = complex charge − sum of ligand charges.',
    'CN 6 is octahedral; CN 4 is tetrahedral or, for $d^8$ ions like Pt²⁺, square planar. Square planar MA₂B₂ and octahedral MA₄B₂ have cis/trans isomers; $\\ce{[Co(en)3]^3+}$ is chiral.',
    'Naming: cation before anion; ligands alphabetically (aqua, ammine, chlorido, cyanido…) with di/tri or bis/tris; Roman-numeral oxidation state; -ate (ferrate, cuprate) only for anionic complexes.',
    'In an octahedral field the $d$ orbitals split into $e_g$ (+0.6Δₒ) and $t_{2g}$ (−0.4Δₒ). Weak-field ligands (Δₒ < P) give high spin; strong-field ligands (Δₒ > P, e.g. CN⁻, CO) give low spin. Unpaired electrons make complexes paramagnetic.',
    'Complexes absorb light of energy Δₒ $= hc/\\lambda$ and show the complementary color; $d^0$ and $d^{10}$ ions are colorless.',
    'Metals in biology: Fe²⁺ heme carries O₂ (CO binds it about 200× more strongly), chlorophyll is a Mg porphyrin, and cis-platin kills cancer cells by binding DNA.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 19: Transition Metals and Coordination Chemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/19-introduction',
      source: 'openstax',
      note: 'Sections 19.2 and 19.3 cover ligands, naming, isomers, crystal field theory, color and magnetism, with many examples.',
    },
    {
      title: 'Wikipedia — Crystal field theory',
      url: 'https://en.wikipedia.org/wiki/Crystal_field_theory',
      source: 'wikipedia',
      note: 'Splitting diagrams for octahedral, tetrahedral and square planar fields, high and low spin, and stabilization energies.',
    },
    {
      title: 'Wikipedia — Spectrochemical series',
      url: 'https://en.wikipedia.org/wiki/Spectrochemical_series',
      source: 'wikipedia',
      note: 'The full ligand and metal series, with a note on why simple point-charge CFT cannot fully explain the ligand order.',
    },
    {
      title: 'Wikipedia — Cisplatin',
      url: 'https://en.wikipedia.org/wiki/Cisplatin',
      source: 'wikipedia',
      note: 'The accidental discovery of cisplatin, how it binds DNA, and why only the cis isomer works.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "coordination chemistry" or "ligand field theory" for deeper treatments, including the molecular-orbital view that refines crystal field theory.',
    },
  ],
};
