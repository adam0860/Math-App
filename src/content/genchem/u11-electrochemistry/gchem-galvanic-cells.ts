import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-galvanic-cells',
  title: 'Galvanic Cells and Standard Potentials',
  summary: 'Separate the two halves of a redox reaction and the electrons must travel through a wire: anodes, cathodes, salt bridges, cell notation, the standard hydrogen electrode and the table of reduction potentials.',
  minutes: 20,
  objectives: [
    'Identify the anode, cathode, electrode signs, electron flow and ion flow in a galvanic cell',
    'Write and read cell (line) notation, including cells that need an inert electrode',
    'Explain why the standard hydrogen electrode is defined as 0 V and how the reduction-potential table is built from it',
    'Calculate $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$ without multiplying potentials by coefficients',
    'Use the table to predict spontaneity and to rank oxidizing and reducing agents',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Same reaction, different route: separating the half-reactions',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations you dropped a zinc strip into blue copper(II) sulfate solution. The zinc slowly dissolved, reddish copper metal coated it, the blue faded, and the beaker got slightly warm. The [[chem-activity-series|activity series]] said it would happen because zinc gives up [[electron|electrons]] more readily than copper.',
        },
        {
          type: 'p',
          text: 'Unit 3 gave you the tools to describe it precisely. Zinc goes from [[gchem-oxidation-number|oxidation number]] 0 to +2 (it is **[[gchem-oxidation|oxidized]]**), copper goes from +2 to 0 (it is **[[gchem-reduction|reduced]]**), and sulfate is a [[chem-spectator-ion|spectator ion]]. Split into [[gchem-half-reaction|half-reactions]]:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} \\text{oxidation:}&\\quad \\ce{Zn(s) -> Zn^2+(aq) + 2e-} \\\\ \\text{reduction:}&\\quad \\ce{Cu^2+(aq) + 2e- -> Cu(s)} \\\\ \\text{overall:}&\\quad \\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)} \\end{aligned}',
          caption: 'Two electrons leave each zinc atom and end up on a copper ion.',
        },
        {
          type: 'p',
          text: 'In the beaker the electrons jump directly from zinc atoms to copper ions touching the strip. The energy released just warms the solution. Now imagine putting the zinc and the copper ions in **different containers** joined by a metal wire. The electrons still want to make the trip, but the only path is through the wire. A flow of electrons through a wire is an electric current, and a current can run a motor, a radio or a phone.',
        },
        {
          type: 'definition',
          term: 'Galvanic (voltaic) cell',
          text: 'A [[gchem-galvanic-cell|galvanic cell]] is a device that uses a spontaneous redox reaction to drive electrons through an external circuit. The oxidation and the reduction happen in separate compartments (half-cells), so the electrons must travel through the wire to get from one to the other.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why separation turns heat into useful work',
          text: 'The reaction and its energy are the same either way. The only difference is the *route*. Mixed together, the electron transfer happens over atomic distances and the energy appears as random molecular motion (heat), which is hard to use. Separated, every transferred electron must pass through your circuit, so the energy is delivered as ordered electrical work. Every battery in a radio, a night-vision device or a vehicle is one or more galvanic cells built on this trick.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Luigi Galvani saw dissected frog legs twitch when touched by two different metals (1780s) and thought the electricity came from the animal. Alessandro Volta showed it came from the metals and built the first battery, a stack of zinc and copper discs separated by brine-soaked cloth (1800). John Daniell\'s zinc–copper cell (1836) gave a steady voltage and powered early telegraph networks.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A zinc strip sits directly in 1 M $\\ce{CuSO4}$ solution and reacts completely. Compared with running the same reaction in a galvanic cell connected to a motor, what is different?',
      options: [
        { text: 'The beaker reaction transfers fewer electrons per zinc atom', why: 'Each Zn atom loses exactly two electrons either way; the half-reactions are identical.' },
        { text: 'The beaker reaction releases its energy almost entirely as heat instead of electrical work', correct: true, why: 'Same reaction, same total energy change. Direct contact lets electrons hop without passing through any circuit, so no work can be extracted from them.' },
        { text: 'Only the galvanic cell reaction is spontaneous', why: 'The reaction is spontaneous in both cases; that is why it happens on its own in the beaker. The cell only changes where the electrons travel.' },
        { text: 'In the beaker, copper is oxidized and zinc is reduced', why: 'The chemistry does not flip. Zinc is oxidized (0 → +2) and copper(II) is reduced (+2 → 0) in both setups.' },
      ],
      explanation: 'A galvanic cell does not change the reaction, only the path of the electrons. In the beaker, electrons pass straight from Zn atoms to $\\ce{Cu^2+}$ ions at the metal surface and the energy shows up as a temperature rise. In the cell, the compartments are separated, so the electrons must go through the external wire and the motor, delivering the energy as work.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Anatomy of a cell: anode, cathode and salt bridge',
      blocks: [
        {
          type: 'p',
          text: 'Here is the classic Daniell cell. Each half-cell is a metal [[gchem-electrode|electrode]] dipping into a solution of its own ions. A wire (through a voltmeter) connects the two electrodes, and a salt bridge connects the two solutions.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 390" xmlns="http://www.w3.org/2000/svg"><path d="M110 130 V40 H238" fill="none" stroke="currentColor" stroke-width="2"/><path d="M282 40 H410 V130" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="260" cy="40" r="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="260" y="46" text-anchor="middle" font-size="16" font-weight="600">V</text><text x="330" y="64" text-anchor="middle" font-size="13" font-weight="600">1.10 V</text><polyline points="166,34 176,40 166,46" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><text x="160" y="28" text-anchor="middle" font-size="14" class="t-blue">e⁻</text><polyline points="346,34 356,40 346,46" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><text x="350" y="28" text-anchor="middle" font-size="14" class="t-blue">e⁻</text><text x="175" y="64" text-anchor="middle" font-size="12" class="t-blue">electron flow</text><rect x="40" y="185" width="150" height="145" class="f-gray" fill="currentColor" fill-opacity="0.12"/><rect x="330" y="185" width="150" height="145" class="f-blue" fill="currentColor" fill-opacity="0.2"/><path d="M40 150 V330 H190 V150" fill="none" stroke="currentColor" stroke-width="2"/><path d="M330 150 V330 H480 V150" fill="none" stroke="currentColor" stroke-width="2"/><rect x="95" y="130" width="30" height="168" class="f-gray" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/><rect x="395" y="130" width="30" height="168" class="f-orange" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/><text x="110" y="232" text-anchor="middle" font-size="14" font-weight="600">Zn</text><text x="410" y="232" text-anchor="middle" font-size="14" font-weight="600">Cu</text><path d="M150 255 V100 H370 V255" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M172 255 V122 H348 V255" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="150" y1="255" x2="172" y2="255" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2"/><line x1="348" y1="255" x2="370" y2="255" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2"/><text x="260" y="95" text-anchor="middle" font-size="12.5">salt bridge (KNO₃)</text><text x="215" y="116" text-anchor="middle" font-size="12" class="t-purple">← NO₃⁻</text><text x="305" y="116" text-anchor="middle" font-size="12" class="t-red">K⁺ →</text><text x="70" y="205" text-anchor="middle" font-size="12">Zn²⁺</text><text x="70" y="270" text-anchor="middle" font-size="12">SO₄²⁻</text><text x="455" y="205" text-anchor="middle" font-size="12">Cu²⁺</text><text x="455" y="270" text-anchor="middle" font-size="12">SO₄²⁻</text><text x="115" y="320" text-anchor="middle" font-size="12" class="t-gray">1 M ZnSO₄</text><text x="405" y="320" text-anchor="middle" font-size="12" class="t-gray">1 M CuSO₄</text><text x="115" y="354" text-anchor="middle" font-size="14" font-weight="600">Anode (−): oxidation</text><text x="115" y="376" text-anchor="middle" font-size="13">Zn → Zn²⁺ + 2e⁻</text><text x="405" y="354" text-anchor="middle" font-size="14" font-weight="600">Cathode (+): reduction</text><text x="405" y="376" text-anchor="middle" font-size="13">Cu²⁺ + 2e⁻ → Cu</text></svg>`,
          alt: 'Daniell cell. Left beaker: zinc electrode in 1 M zinc sulfate, labeled anode, negative, oxidation, Zn to Zn2+ plus 2 electrons. Right beaker: copper electrode in 1 M copper sulfate, labeled cathode, positive, reduction, Cu2+ plus 2 electrons to Cu. A wire through a voltmeter reading 1.10 V joins the electrodes, with electron arrows pointing from zinc to copper. An inverted U-shaped salt bridge of KNO3 joins the solutions; nitrate ions move left toward the anode and potassium ions move right toward the cathode.',
          caption: 'Electrons travel through the **wire** from the zinc anode to the copper cathode. Ions travel through the **salt bridge**: anions ($\\ce{NO3-}$) toward the anode, cations ($\\ce{K+}$) toward the cathode. Nothing carries electrons through the solutions.',
        },
        {
          type: 'list',
          items: [
            'The [[gchem-anode|anode]] is where **oxidation** happens. Zinc atoms leave the electrode as $\\ce{Zn^2+}$ ions, so the zinc strip slowly loses mass. The electrons they leave behind make the anode the **negative** terminal of a galvanic cell.',
            'The [[gchem-cathode|cathode]] is where **reduction** happens. $\\ce{Cu^2+}$ ions pick up electrons from the electrode and plate out as copper, so the copper strip gains mass and the blue solution fades. Electrons are pulled away from this electrode, making it the **positive** terminal.',
            'Electrons always flow through the external circuit **from anode to cathode** (from − to +).',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Memory aids',
          text: '**An Ox, Red Cat**: anode = oxidation, reduction = cathode. Alphabetical order works too: **a**node and **o**xidation both start with vowels; **c**athode and **r**eduction both start with consonants. And electrons flow alphabetically, from **a** to **c**.',
        },
        {
          type: 'p',
          text: 'Why is the [[gchem-salt-bridge|salt bridge]] needed? As the cell runs, the anode compartment fills with extra $\\ce{Zn^2+}$ (excess positive charge) and the cathode compartment loses $\\ce{Cu^2+}$ (leaving excess $\\ce{SO4^2-}$, net negative charge). Within a fraction of a second, this charge imbalance would push back hard enough to stop the electrons completely. The salt bridge, a tube of gel containing an inert [[chem-electrolyte|electrolyte]] such as $\\ce{KNO3}$, lets ions migrate: $\\ce{NO3-}$ flows into the anode side to balance the new $\\ce{Zn^2+}$, and $\\ce{K+}$ flows into the cathode side to replace the lost $\\ce{Cu^2+}$. Each compartment stays electrically neutral and the current keeps flowing.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Electrons do not swim',
          text: 'Free electrons cannot travel through water or through the salt bridge. The circuit is completed by two different charge carriers: **electrons in the metal wire** and **ions in the solutions and bridge**. Remove the salt bridge (or cut the wire) and the current stops immediately. Also, do not confuse "anions move toward the anode" with attraction to a positive charge: the anode of a galvanic cell is negative. Anions go there because that is where new positive ions are being made.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the description of a running galvanic cell.',
      template: 'Oxidation happens at the ___, which is the ___ terminal of the cell. Electrons travel from anode to cathode through the ___, while anions in the salt bridge drift toward the ___.',
      blanks: [{ answers: ['anode'] }, { answers: ['negative'] }, { answers: ['external wire'] }, { answers: ['anode'] }],
      wordBank: ['anode', 'anode', 'cathode', 'negative', 'positive', 'external wire', 'salt bridge'],
      explanation: 'Oxidation happens at the **anode**; the electrons released there make it the **negative** terminal of a galvanic cell. Electrons can only travel through metal, so they go through the **external wire** to the cathode. Inside, the anode compartment gains positive ions ($\\ce{Zn^2+}$ in the Daniell cell), so **anions** from the salt bridge move toward the **anode** to keep it neutral, and cations move toward the cathode.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Cell notation: a whole cell on one line',
      blocks: [
        {
          type: 'p',
          text: 'Drawing beakers every time is slow, so chemists use [[gchem-cell-notation|cell notation]] (also called line notation). The Daniell cell is:',
        },
        {
          type: 'math',
          tex: '\\ce{Zn(s) | Zn^2+(aq, 1 M) || Cu^2+(aq, 1 M) | Cu(s)}',
          caption: 'Anode on the left, cathode on the right. Read it left to right as the path the electrons\' story takes: zinc metal becomes zinc ion … copper ion becomes copper metal.',
        },
        {
          type: 'list',
          items: [
            '**Anode half-cell on the left, cathode half-cell on the right.**',
            'A single vertical line $|$ marks a **phase boundary** (solid electrode | solution, or gas | solution).',
            'A double line $||$ is the **salt bridge**.',
            'Species in the **same phase** are separated by commas, not lines. Concentrations or pressures go in parentheses when they matter.',
            'The electrodes sit at the far ends of the line.',
          ],
        },
        {
          type: 'p',
          text: 'Sometimes neither species in a half-reaction is a metal you can make a wire from, for example $\\ce{Fe^3+ + e- -> Fe^2+}$ (both ions are dissolved). Then an **inert electrode**, usually platinum or graphite, provides a surface for the electron transfer without reacting itself. It still appears in the notation, at the outer end:',
        },
        {
          type: 'math',
          tex: '\\ce{Cu(s) | Cu^2+(aq) || Fe^3+(aq), Fe^2+(aq) | Pt(s)}',
          caption: '$\\ce{Fe^3+}$ and $\\ce{Fe^2+}$ are in the same solution, so they are separated by a comma.',
        },
        {
          type: 'derivation',
          title: 'From notation to the overall reaction',
          steps: [
            { tex: '\\ce{Cu(s) | Cu^2+(aq) || Fe^3+(aq), Fe^2+(aq) | Pt(s)}', why: 'Left side is the anode, right side the cathode.' },
            { tex: '\\text{anode: } \\ce{Cu -> Cu^2+ + 2e-}', why: 'Read the left half-cell left to right: Cu metal becomes $\\ce{Cu^2+}$, an oxidation.' },
            { tex: '\\text{cathode: } \\ce{Fe^3+ + e- -> Fe^2+}', why: 'In the right half-cell, $\\ce{Fe^3+}$ gains an electron at the platinum surface. Pt itself does not change.' },
            { tex: '\\ce{2Fe^3+ + 2e- -> 2Fe^2+}', why: 'Copper releases 2 electrons, so double the iron half-reaction to consume 2 electrons. Electrons lost must equal electrons gained (the half-reaction method from unit 3).' },
            { tex: '\\ce{Cu(s) + 2Fe^3+(aq) -> Cu^2+(aq) + 2Fe^2+(aq)}', why: 'Add the half-reactions; the $\\ce{2e-}$ cancel. Check: atoms balance, and charge is $+6$ on both sides.' },
          ],
          result: 'This reaction is used to etch copper off printed circuit boards with iron(III) chloride solution.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'In a galvanic cell, zinc metal is oxidized and $\\ce{Fe^3+}$ is reduced to $\\ce{Fe^2+}$ on a platinum wire. Which cell notation is correct?',
      options: [
        { text: '$\\ce{Pt(s) | Fe^3+(aq), Fe^2+(aq) || Zn^2+(aq) | Zn(s)}$', why: 'This puts the cathode on the left. By convention the anode (where Zn is oxidized) is written on the left.' },
        { text: '$\\ce{Zn(s) | Zn^2+(aq) || Fe^3+(aq) | Fe^2+(aq) | Pt(s)}$', why: 'A single line means a phase boundary, but $\\ce{Fe^3+}$ and $\\ce{Fe^2+}$ are dissolved in the same solution. They need a comma.' },
        { text: '$\\ce{Zn(s) | Zn^2+(aq) || Fe^3+(aq), Fe^2+(aq) | Fe(s)}$', why: 'Iron metal is not part of the $\\ce{Fe^3+}$/$\\ce{Fe^2+}$ half-reaction, and an iron electrode would react with $\\ce{Fe^3+}$ itself. An inert electrode (Pt) is required.' },
        { text: '$\\ce{Zn(s) | Zn^2+(aq) || Fe^3+(aq), Fe^2+(aq) | Pt(s)}$', correct: true, why: 'Anode on the left, salt bridge in the middle, the two iron ions in one phase separated by a comma, and the inert Pt electrode at the far right.' },
      ],
      explanation: 'Build it from the rules: anode half-cell first ($\\ce{Zn(s) | Zn^2+(aq)}$), then the salt bridge ($||$), then the cathode solution with both dissolved iron ions separated by a comma, then the electrode that touches it, $\\ce{Pt(s)}$. The overall reaction is $\\ce{Zn + 2Fe^3+ -> Zn^2+ + 2Fe^2+}$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Measuring potential: the standard hydrogen electrode',
      blocks: [
        {
          type: 'p',
          text: 'The voltmeter on the Daniell cell reads about 1.10 V. This [[gchem-cell-potential|cell potential]] $E_{\\text{cell}}$ (also called the electromotive force, emf) measures how hard the cell pushes electrons through the circuit. One volt is one joule per coulomb, so $E_{\\text{cell}}$ is the energy each unit of charge delivers as it goes around the circuit.',
        },
        {
          type: 'p',
          text: 'It would be convenient to give each half-reaction its own number, then combine any two. But a voltmeter only ever measures a **difference** between two electrodes; a single half-cell has no measurable potential on its own. The solution is the same one surveyors use for altitude: pick a reference and call it zero. Mountain heights are measured from sea level, and voltages in a circuit are measured from "ground".',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 440 340" xmlns="http://www.w3.org/2000/svg"><rect x="120" y="160" width="190" height="130" class="f-blue" fill="currentColor" fill-opacity="0.15"/><path d="M120 120 V290 H310 V120" fill="none" stroke="currentColor" stroke-width="2"/><path d="M186 230 V45 Q186 35 196 35 H224 Q234 35 234 45 V75 H320 M234 97 H320 M234 97 V230" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="210" y1="10" x2="210" y2="200" stroke="currentColor" stroke-width="2"/><rect x="198" y="200" width="24" height="42" class="f-gray" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/><g fill="none" stroke="currentColor" class="s-teal" stroke-width="1.4"><circle cx="192" cy="250" r="4"/><circle cx="229" cy="254" r="4"/><circle cx="205" cy="263" r="3.5"/><circle cx="218" cy="275" r="3"/><circle cx="196" cy="210" r="3"/><circle cx="226" cy="218" r="3"/></g><line x1="305" y1="86" x2="262" y2="86" stroke="currentColor" class="s-teal" stroke-width="2"/><polyline points="270,80 260,86 270,92" fill="none" stroke="currentColor" class="s-teal" stroke-width="2"/><text x="335" y="80" font-size="13" class="t-teal">H₂(g) in,</text><text x="335" y="97" font-size="13" class="t-teal">1 bar</text><text x="252" y="22" font-size="12" class="t-gray">wire to the other half-cell</text><line x1="196" y1="221" x2="105" y2="221" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="60" y="216" text-anchor="middle" font-size="12.5">Pt electrode</text><text x="60" y="232" text-anchor="middle" font-size="11.5" class="t-gray">(platinum black)</text><line x1="234" y1="258" x2="330" y2="258" stroke="currentColor" class="s-gray" stroke-width="1"/><text x="375" y="262" text-anchor="middle" font-size="12.5" class="t-teal">H₂ bubbles</text><text x="160" y="282" text-anchor="middle" font-size="12.5">1 M H⁺(aq)</text><text x="220" y="316" text-anchor="middle" font-size="14">2H⁺(aq) + 2e⁻ ⇌ H₂(g)</text><text x="220" y="335" text-anchor="middle" font-size="13" class="t-blue">E° = 0 V exactly (by definition)</text></svg>`,
          alt: 'Standard hydrogen electrode: a platinum plate coated with platinum black dips into 1 M H+ solution. Hydrogen gas at 1 bar is bubbled over it through a glass hood with a side arm. A wire leads up to the other half-cell. The half-reaction 2H+ + 2e- in equilibrium with H2(g) has E° = 0 V exactly, by definition.',
          caption: 'The [[gchem-standard-hydrogen-electrode|standard hydrogen electrode]] (SHE). The fluffy "platinum black" coating gives a huge surface area on which $\\ce{H+}$ and $\\ce{H2}$ can exchange electrons quickly.',
        },
        {
          type: 'definition',
          term: 'Standard conditions for electrochemistry',
          text: 'All dissolved species at 1 M, all gases at 1 bar, solids and liquids pure, usually at 25 °C. A potential measured under these conditions gets a degree sign: $E^\\circ$. The SHE is $\\ce{Pt(s) | H2(g, 1 bar) | H+(aq, 1 M)}$, and its potential is **defined** as exactly $0$ V.',
        },
        {
          type: 'derivation',
          title: 'Finding the zinc potential from one measurement',
          steps: [
            { tex: '\\ce{Zn(s) | Zn^2+(aq, 1 M) || H+(aq, 1 M) | H2(g, 1 bar) | Pt(s)}', why: 'Connect a standard zinc half-cell to the SHE. Zinc dissolves and $\\ce{H2}$ bubbles form at the platinum, so zinc is the anode.' },
            { tex: 'E^\\circ_{\\text{cell}} = 0.762\\ \\text{V (measured)}', why: 'The voltmeter reading, with the zinc electrode as the negative terminal.' },
            { tex: '0.762\\ \\text{V} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0 - E^\\circ(\\ce{Zn^2+/Zn})', why: 'The cell potential is the cathode\'s reduction potential minus the anode\'s (justified two cards from now). The SHE is the cathode, with $E^\\circ = 0$.' },
            { tex: 'E^\\circ(\\ce{Zn^2+/Zn}) = -0.762\\ \\text{V}', why: 'A negative reduction potential means $\\ce{Zn^2+}$ is *harder* to reduce than $\\ce{H+}$; equivalently, Zn metal gives away electrons more readily than $\\ce{H2}$ does.' },
          ],
          result: 'Pairing copper with the SHE instead gives 0.337 V with copper as the cathode, so $E^\\circ(\\ce{Cu^2+/Cu}) = +0.337$ V. Every value in the table is found this way, directly or by combining measurements.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'In practice, labs use more convenient reference electrodes, such as silver/silver chloride ($E^\\circ = +0.222$ V) or the saturated calomel electrode, whose potentials relative to the SHE are known precisely. The SHE remains the zero of the scale.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The table of standard reduction potentials',
      blocks: [
        {
          type: 'p',
          text: 'A [[gchem-standard-reduction-potential|standard reduction potential]] $E^\\circ$ measures a half-reaction\'s tendency to proceed as a **reduction**, relative to the SHE. By convention every entry is written as a reduction (electrons on the left). The values below come from Appendix L of OpenStax *Chemistry 2e* and are the ones used throughout this unit.',
        },
        {
          type: 'table',
          headers: ['Half-reaction (reduction)', '$E^\\circ$ (V)'],
          rows: [
            ['$\\ce{F2(g) + 2e- -> 2F-(aq)}$', '$+2.866$'],
            ['$\\ce{MnO4-(aq) + 8H+(aq) + 5e- -> Mn^2+(aq) + 4H2O(l)}$', '$+1.507$'],
            ['$\\ce{Au^3+(aq) + 3e- -> Au(s)}$', '$+1.498$'],
            ['$\\ce{Cl2(g) + 2e- -> 2Cl-(aq)}$', '$+1.358$'],
            ['$\\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)}$', '$+1.229$'],
            ['$\\ce{Br2(l) + 2e- -> 2Br-(aq)}$', '$+1.087$'],
            ['$\\ce{Ag+(aq) + e- -> Ag(s)}$', '$+0.7996$'],
            ['$\\ce{Fe^3+(aq) + e- -> Fe^2+(aq)}$', '$+0.771$'],
            ['$\\ce{I2(s) + 2e- -> 2I-(aq)}$', '$+0.5355$'],
            ['$\\ce{O2(g) + 2H2O(l) + 4e- -> 4OH-(aq)}$', '$+0.401$'],
            ['$\\ce{Cu^2+(aq) + 2e- -> Cu(s)}$', '$+0.337$'],
            ['$\\ce{2H+(aq) + 2e- -> H2(g)}$', '$0.000$ (definition)'],
            ['$\\ce{Pb^2+(aq) + 2e- -> Pb(s)}$', '$-0.1262$'],
            ['$\\ce{Sn^2+(aq) + 2e- -> Sn(s)}$', '$-0.1375$'],
            ['$\\ce{Ni^2+(aq) + 2e- -> Ni(s)}$', '$-0.257$'],
            ['$\\ce{Fe^2+(aq) + 2e- -> Fe(s)}$', '$-0.447$'],
            ['$\\ce{Zn^2+(aq) + 2e- -> Zn(s)}$', '$-0.7618$'],
            ['$\\ce{2H2O(l) + 2e- -> H2(g) + 2OH-(aq)}$', '$-0.8277$'],
            ['$\\ce{Al^3+(aq) + 3e- -> Al(s)}$', '$-1.662$'],
            ['$\\ce{Mg^2+(aq) + 2e- -> Mg(s)}$', '$-2.372$'],
            ['$\\ce{Na+(aq) + e- -> Na(s)}$', '$-2.71$'],
            ['$\\ce{Li+(aq) + e- -> Li(s)}$', '$-3.04$'],
          ],
          caption: 'Standard reduction potentials at 25 °C (OpenStax *Chemistry 2e*, Appendix L). Some tables round copper to $+0.34$ V and zinc to $-0.76$ V.',
        },
        {
          type: 'p',
          text: 'Reading the table is the key skill of this lesson:',
        },
        {
          type: 'list',
          items: [
            '**High (positive) $E^\\circ$:** the species on the **left** grabs electrons eagerly. $\\ce{F2}$ at the top is the strongest **[[gchem-oxidizing-agent|oxidizing agent]]** (the species that gets reduced while oxidizing something else). Chlorine, permanganate and oxygen are also strong; that is why chlorine and oxygen-based oxidizers are used for disinfection and decontamination.',
            '**Low (negative) $E^\\circ$:** the species on the **right** gives electrons away eagerly. Lithium metal at the bottom is the strongest **[[gchem-reducing-agent|reducing agent]]** (the species that gets oxidized while reducing something else).',
            'Each couple works both ways: a strong oxidizing agent has a weak conjugate reducing agent and vice versa. $\\ce{F-}$ is a hopeless reducing agent; $\\ce{Li+}$ is a hopeless oxidizing agent.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this is the activity series, with numbers',
          text: 'The metals near the bottom (Li, Na, Mg, Al, Zn) are the "active" metals of the Foundations activity series; the ones near the top (Ag, Au) are the unreactive ones. The activity series is just the right-hand column of this table read from bottom to top. The table adds something the series could not: **how much** more strongly one species pulls electrons than another, in volts.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Using the table ($E^\\circ$: $\\ce{Al^3+/Al}$ $-1.662$ V, $\\ce{Mg^2+/Mg}$ $-2.372$ V, $\\ce{Zn^2+/Zn}$ $-0.7618$ V, $\\ce{Cu^2+/Cu}$ $+0.337$ V), which of these species is the **strongest reducing agent**?',
      options: [
        { text: '$\\ce{Mg^2+(aq)}$', why: 'Its couple has the most negative $E^\\circ$, but $\\ce{Mg^2+}$ is the *oxidized* form, on the left of the half-reaction. It has no tendency to give up electrons, so it cannot be a reducing agent at all. Mg metal would be the strongest.' },
        { text: '$\\ce{Zn(s)}$', why: 'Zinc is a good reducing agent, but its couple ($-0.7618$ V) sits above aluminum\'s, so Al gives up electrons more readily.' },
        { text: '$\\ce{Al(s)}$', correct: true, why: 'Among the species offered that can actually give up electrons (the metals on the right of each half-reaction), aluminum has the most negative $E^\\circ$.' },
        { text: '$\\ce{Cu(s)}$', why: 'Copper\'s couple has the most positive $E^\\circ$ of the metals listed, so Cu is the weakest reducing agent of the three metals.' },
      ],
      explanation: 'Reducing agents are on the **right** side of reduction half-reactions (the reduced forms), and the lower the $E^\\circ$, the stronger they are. The candidates on the right are Al, Zn and Cu; aluminum\'s $-1.662$ V is the lowest. $\\ce{Mg^2+}$ is a trap: its couple is lowest, but it is the oxidized form and has no electrons to give.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Calculating the cell potential',
      blocks: [
        {
          type: 'p',
          text: 'In a galvanic cell, the half-reaction with the **higher** reduction potential wins the tug-of-war for electrons and runs as written, as a reduction (the cathode). The other is forced to run backward, as an oxidation (the anode). The cell potential is the difference:',
        },
        {
          type: 'theorem',
          name: 'Standard cell potential',
          tex: 'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}',
          text: 'Both values are **reduction** potentials straight from the table. Do not change the sign of the anode value yourself; the subtraction already accounts for running it in reverse.',
        },
        {
          type: 'derivation',
          title: 'The Daniell cell',
          steps: [
            { tex: '\\ce{Cu^2+ + 2e- -> Cu}\\quad E^\\circ = +0.337\\ \\text{V}', why: 'Look up both couples. Copper has the higher $E^\\circ$, so $\\ce{Cu^2+}$ is reduced: copper is the cathode.' },
            { tex: '\\ce{Zn^2+ + 2e- -> Zn}\\quad E^\\circ = -0.7618\\ \\text{V}', why: 'The lower couple runs in reverse ($\\ce{Zn -> Zn^2+ + 2e-}$): zinc is the anode.' },
            { tex: 'E^\\circ_{\\text{cell}} = 0.337\\ \\text{V} - (-0.7618\\ \\text{V})', why: 'Cathode minus anode, both as reduction potentials.' },
            { tex: '= 1.099\\ \\text{V} \\approx 1.10\\ \\text{V}', why: 'Matches the voltmeter in the figure. A positive $E^\\circ_{\\text{cell}}$ means the cell runs spontaneously as written.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Aluminum and silver: different electron counts',
          steps: [
            { tex: '\\text{cathode: } \\ce{Ag+ + e- -> Ag}\\quad E^\\circ = +0.7996\\ \\text{V}', why: 'Silver has the higher reduction potential.' },
            { tex: '\\text{anode: } \\ce{Al -> Al^3+ + 3e-}\\quad (E^\\circ_{\\text{red}} = -1.662\\ \\text{V})', why: 'Aluminum\'s half-reaction is reversed. Keep its *table* value for the formula.' },
            { tex: '\\ce{Al(s) + 3Ag+(aq) -> Al^3+(aq) + 3Ag(s)}', why: 'Each Al gives 3 electrons and each $\\ce{Ag+}$ takes 1, so triple the silver half-reaction. Charge check: $+3$ on both sides.' },
            { tex: 'E^\\circ_{\\text{cell}} = 0.7996 - (-1.662) = 2.462\\ \\text{V}', why: 'The factor of 3 used to balance electrons does **not** multiply the potential.' },
          ],
          result: 'Write the balanced equation with coefficients, but compute $E^\\circ_{\\text{cell}}$ from the unscaled table values.',
        },
        {
          type: 'compare',
          left: { title: 'Wrong', tone: 'bad', tex: ['E^\\circ_{\\text{cell}} = 3(0.7996) - (-1.662)', '= 4.061\\ \\text{V}'], text: 'Multiplying a potential by the coefficient.' },
          right: { title: 'Right', tone: 'good', tex: ['E^\\circ_{\\text{cell}} = 0.7996 - (-1.662)', '= 2.462\\ \\text{V}'], text: 'Potentials are not scaled by coefficients.' },
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why potentials do not scale with coefficients',
          text: 'A potential is energy **per unit charge** (joules per coulomb), an *intensive* property like temperature or density. Running the reaction three times over moves three times as much charge and releases three times as much energy, but the energy per coulomb is unchanged, just as two cups of coffee from the same pot are not twice as hot. The total energy, which does scale, is handled by the free energy $\\Delta G^\\circ = -nFE^\\circ$ in the next lesson, where $n$ carries the electron count.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Calculate $E^\\circ_{\\text{cell}}$ for $\\ce{Mg(s) | Mg^2+(aq) || Ni^2+(aq) | Ni(s)}$. Use $E^\\circ(\\ce{Mg^2+/Mg}) = -2.372$ V and $E^\\circ(\\ce{Ni^2+/Ni}) = -0.257$ V. Give three decimal places.',
      hint: 'In the notation, the anode is on the left. $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$ with both as reduction potentials.',
      label: '$E^\\circ_{\\text{cell}} =$',
      unit: 'V',
      answer: '-0.257 - (-2.372)',
      answerTex: '2.115\\ \\text{V}',
      tolerance: 0.0005,
      explanation: 'Magnesium (left) is the anode and nickel (right) is the cathode. $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = -0.257 - (-2.372) = +2.115$ V. Both reduction potentials are negative, but what matters is the **difference**: nickel ions pull electrons 2.115 V harder than magnesium ions do, so Mg reduces $\\ce{Ni^2+}$ spontaneously ($\\ce{Mg + Ni^2+ -> Mg^2+ + Ni}$).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student finds the standard potential of a cell made from aluminum and copper half-cells. Tap the first line that is wrong.',
      lines: [
        'Table: $\\ce{Al^3+ + 3e- -> Al}$, $E^\\circ = -1.662$ V; $\\ce{Cu^2+ + 2e- -> Cu}$, $E^\\circ = +0.337$ V',
        '$\\ce{Cu^2+}$ has the higher $E^\\circ$, so copper is the cathode and aluminum is the anode',
        'Balance electrons (6 each): $\\ce{2Al + 3Cu^2+ -> 2Al^3+ + 3Cu}$',
        '$E^\\circ_{\\text{cell}} = 3(0.337) - 2(-1.662) = 4.335$ V',
        'Since $E^\\circ_{\\text{cell}} > 0$, the reaction is spontaneous as written',
      ],
      errorLines: [4],
      explanation: 'Line 4 multiplies each potential by its coefficient. Potentials are intensive (energy per coulomb), so they are never scaled: $E^\\circ_{\\text{cell}} = 0.337 - (-1.662) = 1.999$ V. Lines 1–3 are right: copper\'s higher $E^\\circ$ makes it the cathode, and the 2 : 3 coefficients are needed to balance 6 electrons. The conclusion in line 5 is still true, since the correct $E^\\circ_{\\text{cell}}$ is also positive.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Predicting what reacts with what',
      blocks: [
        {
          type: 'p',
          text: 'The sign of $E^\\circ_{\\text{cell}}$ tells you the direction of a reaction under standard conditions, whether or not anyone builds a cell:',
        },
        {
          type: 'list',
          items: [
            '$E^\\circ_{\\text{cell}} > 0$: spontaneous as written.',
            '$E^\\circ_{\\text{cell}} < 0$: not spontaneous as written; the **reverse** reaction is spontaneous.',
            '$E^\\circ_{\\text{cell}} = 0$: neither direction is favored under standard conditions.',
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg"><line x1="265" y1="20" x2="265" y2="380" stroke="currentColor" stroke-width="2"/><text x="265" y="14" text-anchor="middle" font-size="12" class="t-gray">E° (V)</text><line x1="259" y1="42" x2="271" y2="42" stroke="currentColor" stroke-width="2"/><text x="255" y="47" text-anchor="end" font-size="12" class="t-gray">+2.87</text><text x="205" y="47" text-anchor="end" font-size="14">F₂ + 2e⁻ →</text><text x="282" y="47" font-size="14">2F⁻</text><line x1="259" y1="125" x2="271" y2="125" stroke="currentColor" stroke-width="2"/><text x="255" y="130" text-anchor="end" font-size="12" class="t-gray">+1.36</text><text x="205" y="130" text-anchor="end" font-size="14">Cl₂ + 2e⁻ →</text><text x="282" y="130" font-size="14">2Cl⁻</text><line x1="259" y1="181" x2="271" y2="181" stroke="currentColor" stroke-width="2"/><text x="255" y="186" text-anchor="end" font-size="12" class="t-gray">+0.34</text><text x="205" y="186" text-anchor="end" font-size="14" class="t-blue" font-weight="600">Cu²⁺ + 2e⁻ →</text><text x="282" y="186" font-size="14">Cu</text><line x1="259" y1="200" x2="271" y2="200" stroke="currentColor" stroke-width="2"/><text x="255" y="204" text-anchor="end" font-size="12" class="t-gray">0.00</text><text x="205" y="205" text-anchor="end" font-size="14">2H⁺ + 2e⁻ →</text><text x="282" y="205" font-size="14">H₂</text><line x1="259" y1="242" x2="271" y2="242" stroke="currentColor" stroke-width="2"/><text x="255" y="246" text-anchor="end" font-size="12" class="t-gray">−0.76</text><text x="205" y="247" text-anchor="end" font-size="14">Zn²⁺ + 2e⁻ →</text><text x="282" y="247" font-size="14" class="t-red" font-weight="600">Zn</text><line x1="259" y1="291" x2="271" y2="291" stroke="currentColor" stroke-width="2"/><text x="255" y="296" text-anchor="end" font-size="12" class="t-gray">−1.66</text><text x="205" y="296" text-anchor="end" font-size="14">Al³⁺ + 3e⁻ →</text><text x="282" y="296" font-size="14">Al</text><line x1="259" y1="367" x2="271" y2="367" stroke="currentColor" stroke-width="2"/><text x="255" y="372" text-anchor="end" font-size="12" class="t-gray">−3.04</text><text x="205" y="372" text-anchor="end" font-size="14">Li⁺ + e⁻ →</text><text x="282" y="372" font-size="14">Li</text><line x1="40" y1="330" x2="40" y2="40" stroke="currentColor" class="s-blue" stroke-width="2.5"/><polyline points="33,50 40,38 47,50" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.5"/><text x="0" y="0" transform="translate(28 190) rotate(-90)" text-anchor="middle" font-size="13" class="t-blue">stronger oxidizing agents (left side)</text><line x1="470" y1="60" x2="470" y2="350" stroke="currentColor" class="s-red" stroke-width="2.5"/><polyline points="463,340 470,352 477,340" fill="none" stroke="currentColor" class="s-red" stroke-width="2.5"/><text x="0" y="0" transform="translate(490 205) rotate(90)" text-anchor="middle" font-size="13" class="t-red">stronger reducing agents (right side)</text><path d="M 310 236 C 435 236, 435 155, 320 155 L 150 155 L 150 166" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.8" stroke-dasharray="5 3"/><polyline points="144,160 150,169 156,160" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.8"/><text x="322" y="198" font-size="12" class="t-purple">Zn gives e⁻</text><text x="322" y="213" font-size="12" class="t-purple">to Cu²⁺</text></svg>`,
          alt: 'A vertical E° scale. Left of the axis, from top to bottom: F2 + 2e- at +2.87, Cl2 + 2e- at +1.36, Cu2+ + 2e- at +0.34 (highlighted), 2H+ + 2e- at 0.00, Zn2+ + 2e- at -0.76, Al3+ + 3e- at -1.66, Li+ + e- at -3.04. Right of the axis are the reduced forms: 2F-, 2Cl-, Cu, H2, Zn (highlighted), Al, Li. A blue arrow on the far left points up, labeled stronger oxidizing agents. A red arrow on the far right points down, labeled stronger reducing agents. A dashed arrow runs from Zn on the right up and over to Cu2+ on the left, labeled Zn gives electrons to Cu2+.',
          caption: 'A species on the **right** of a lower couple spontaneously reduces a species on the **left** of a higher couple. Electrons "fall" from low $E^\\circ$ to high $E^\\circ$, like water running downhill, and the height difference is $E^\\circ_{\\text{cell}}$.',
        },
        {
          type: 'derivation',
          title: 'Will iron(III) oxidize iodide?',
          steps: [
            { tex: '\\ce{2Fe^3+(aq) + 2I-(aq) -> 2Fe^2+(aq) + I2(s)}', why: 'The proposed reaction: $\\ce{Fe^3+}$ is reduced and $\\ce{I-}$ is oxidized.' },
            { tex: 'E^\\circ_{\\text{cathode}} = E^\\circ(\\ce{Fe^3+/Fe^2+}) = +0.771\\ \\text{V}', why: 'The species being reduced defines the cathode.' },
            { tex: 'E^\\circ_{\\text{anode}} = E^\\circ(\\ce{I2/I-}) = +0.5355\\ \\text{V}', why: 'The species being oxidized defines the anode; use the table value for the reduction $\\ce{I2 + 2e- -> 2I-}$.' },
            { tex: 'E^\\circ_{\\text{cell}} = 0.771 - 0.5355 = +0.236\\ \\text{V} > 0', why: 'Positive, so the reaction is spontaneous: mixing iron(III) and iodide solutions turns them brown with iodine.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Does copper dissolve in hydrochloric acid?',
          steps: [
            { tex: '\\ce{Cu(s) + 2H+(aq) -> Cu^2+(aq) + H2(g)}', why: 'The proposed reaction: $\\ce{H+}$ reduced at the cathode, Cu oxidized at the anode.' },
            { tex: 'E^\\circ_{\\text{cell}} = 0.000 - 0.337 = -0.337\\ \\text{V} < 0', why: 'Negative: not spontaneous. The reverse, $\\ce{H2}$ reducing $\\ce{Cu^2+}$, is the spontaneous direction.' },
          ],
          result: 'Copper sits above hydrogen, so 1 M HCl does not dissolve it. Zinc ($E^\\circ_{\\text{cell}} = 0.000 - (-0.7618) = +0.762$ V) dissolves readily and releases hydrogen. Gold, far above hydrogen, resists nearly every acid, which is why it stays shiny for thousands of years.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love "will A react with B?" questions. Decide which species would be reduced (that couple is the cathode) and which oxidized (the anode), then compute $E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$. Positive means yes. A quick check: the oxidizing agent must sit **higher** in the table than the reducing agent\'s couple.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: '$E^\\circ_{\\text{cell}} > 0$ predicts that a reaction *can* happen, not how fast. Aluminum ($E^\\circ = -1.662$ V) should react vigorously with water and air, yet aluminum foil is stable, because a thin, tough oxide film forms on its surface and blocks further reaction. Speed is kinetics (unit 7), not thermodynamics.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'Under standard conditions, copper metal dissolves in 1 M hydrochloric acid and releases hydrogen gas. ($E^\\circ$: $\\ce{Cu^2+/Cu}$ $+0.337$ V; $\\ce{H+/H2}$ $0.000$ V)',
      answer: false,
      explanation: 'For $\\ce{Cu + 2H+ -> Cu^2+ + H2}$, $\\ce{H+}$ would be reduced (cathode) and Cu oxidized (anode): $E^\\circ_{\\text{cell}} = 0.000 - 0.337 = -0.337$ V. A negative cell potential means the reaction is not spontaneous; $\\ce{H+}$ is too weak an oxidizing agent to take electrons from copper. (Copper does dissolve in nitric acid, because nitrate is a much stronger oxidizing agent than $\\ce{H+}$.)',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Iron(II) is often measured by titration with permanganate: $\\ce{MnO4-(aq) + 8H+(aq) + 5Fe^2+(aq) -> Mn^2+(aq) + 5Fe^3+(aq) + 4H2O(l)}$. Using $E^\\circ(\\ce{MnO4-/Mn^2+}) = +1.507$ V and $E^\\circ(\\ce{Fe^3+/Fe^2+}) = +0.771$ V, calculate $E^\\circ$ for this reaction (three decimal places).',
      hint: 'Which species is reduced? That couple is the cathode. Do not multiply by 5.',
      label: '$E^\\circ_{\\text{cell}} =$',
      unit: 'V',
      answer: '1.507 - 0.771',
      answerTex: '0.736\\ \\text{V}',
      tolerance: 0.0005,
      explanation: 'Manganese goes from +7 in $\\ce{MnO4-}$ to +2 in $\\ce{Mn^2+}$: permanganate is reduced, so its couple is the cathode. $\\ce{Fe^2+}$ is oxidized to $\\ce{Fe^3+}$, so the iron couple is the anode. $E^\\circ_{\\text{cell}} = 1.507 - 0.771 = 0.736$ V. The coefficient 5 balances the 5 electrons but does not touch the potential. The large positive value is why the titration goes essentially to completion.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Put the steps in order for finding the overall reaction and $E^\\circ_{\\text{cell}}$ of a galvanic cell built from two half-cells.',
      lines: [
        'Look up the standard reduction potential of each half-reaction',
        'Make the half-reaction with the higher $E^\\circ$ the cathode (reduction)',
        'Reverse the other half-reaction to get the anode oxidation',
        'Multiply the half-reactions so electrons lost equal electrons gained, then add them',
        'Compute $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$ from the table values',
      ],
      distractors: ['Multiply each $E^\\circ$ by the factor used to balance its half-reaction'],
      explanation: 'Data first, then decide the roles (the higher reduction potential wins and becomes the cathode), reverse the anode half-reaction, balance electrons and add to get the overall equation, and finally subtract the table values. The distractor is the classic mistake: potentials are intensive and are never multiplied by coefficients.',
    },
  ],
  takeaways: [
    'A galvanic cell separates oxidation (at the **anode**, negative) from reduction (at the **cathode**, positive), so electrons must flow anode → cathode through an external wire and do work.',
    'The salt bridge keeps each compartment neutral: anions migrate toward the anode, cations toward the cathode. Electrons never travel through the solution.',
    'Cell notation: anode $|$ anode solution $||$ cathode solution $|$ cathode; commas separate species in the same phase; inert Pt or graphite electrodes go at the ends when needed.',
    'Only potential differences are measurable; the standard hydrogen electrode is defined as 0 V and every $E^\\circ$ is a reduction potential relative to it.',
    '$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$, using table values; never multiply a potential by a coefficient.',
    'High $E^\\circ$: strong oxidizing agent on the left ($\\ce{F2}$). Low $E^\\circ$: strong reducing agent on the right (Li). Positive $E^\\circ_{\\text{cell}}$ means spontaneous under standard conditions.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 17: Electrochemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/17-introduction',
      source: 'openstax',
      note: 'Sections 17.2 and 17.3 cover galvanic cells, cell notation and standard reduction potentials; Appendix L is the full table used here.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The oxidation–reduction and electrochemistry unit has short videos on galvanic cells and using the potential table.',
    },
    {
      title: 'Wikipedia — Galvanic cell',
      url: 'https://en.wikipedia.org/wiki/Galvanic_cell',
      source: 'wikipedia',
      note: 'Diagrams, the history from Galvani and Volta, and the Daniell cell in detail.',
    },
    {
      title: 'Wikipedia — Standard hydrogen electrode',
      url: 'https://en.wikipedia.org/wiki/Standard_hydrogen_electrode',
      source: 'wikipedia',
      note: 'How the reference electrode is built and why platinum black is used.',
    },
  ],
};
