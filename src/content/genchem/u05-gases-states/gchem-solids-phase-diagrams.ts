import type { Lesson } from '../../types';

const FIG_CELLS = `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg"><line x1="25.0" y1="170.0" x2="57.1" y2="150.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/><line x1="25.0" y1="170.0" x2="25.0" y2="80.0" stroke="currentColor" stroke-width="1.5"/><line x1="25.0" y1="170.0" x2="115.0" y2="170.0" stroke="currentColor" stroke-width="1.5"/><line x1="57.1" y1="150.0" x2="57.1" y2="60.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/><line x1="57.1" y1="150.0" x2="147.1" y2="150.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/><line x1="25.0" y1="80.0" x2="57.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><line x1="25.0" y1="80.0" x2="115.0" y2="80.0" stroke="currentColor" stroke-width="1.5"/><line x1="57.1" y1="60.0" x2="147.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><line x1="115.0" y1="170.0" x2="147.1" y2="150.0" stroke="currentColor" stroke-width="1.5"/><line x1="115.0" y1="170.0" x2="115.0" y2="80.0" stroke="currentColor" stroke-width="1.5"/><line x1="147.1" y1="150.0" x2="147.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><line x1="115.0" y1="80.0" x2="147.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><circle cx="57.1" cy="150.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="57.1" cy="60.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="147.1" cy="150.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="147.1" cy="60.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="25.0" cy="170.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="25.0" cy="80.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="115.0" cy="170.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="115.0" cy="80.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><text x="86" y="30" text-anchor="middle" font-size="14">simple cubic</text><text x="86" y="202" text-anchor="middle" font-size="12">8 × ⅛ = 1 atom</text><text x="86" y="220" text-anchor="middle" font-size="12" class="t-gray">CN 6</text><line x1="195.0" y1="170.0" x2="227.1" y2="150.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/><line x1="195.0" y1="170.0" x2="195.0" y2="80.0" stroke="currentColor" stroke-width="1.5"/><line x1="195.0" y1="170.0" x2="285.0" y2="170.0" stroke="currentColor" stroke-width="1.5"/><line x1="227.1" y1="150.0" x2="227.1" y2="60.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/><line x1="227.1" y1="150.0" x2="317.1" y2="150.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/><line x1="195.0" y1="80.0" x2="227.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><line x1="195.0" y1="80.0" x2="285.0" y2="80.0" stroke="currentColor" stroke-width="1.5"/><line x1="227.1" y1="60.0" x2="317.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><line x1="285.0" y1="170.0" x2="317.1" y2="150.0" stroke="currentColor" stroke-width="1.5"/><line x1="285.0" y1="170.0" x2="285.0" y2="80.0" stroke="currentColor" stroke-width="1.5"/><line x1="317.1" y1="150.0" x2="317.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><line x1="285.0" y1="80.0" x2="317.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><circle cx="227.1" cy="150.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="227.1" cy="60.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="317.1" cy="150.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="317.1" cy="60.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="256.0" cy="115.0" r="11" fill="currentColor" class="f-red" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="195.0" cy="170.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="195.0" cy="80.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="285.0" cy="170.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="285.0" cy="80.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><text x="256" y="30" text-anchor="middle" font-size="14">body-centered (BCC)</text><text x="256" y="202" text-anchor="middle" font-size="12">8 × ⅛ + 1 = 2 atoms</text><text x="256" y="220" text-anchor="middle" font-size="12" class="t-gray">CN 8</text><line x1="365.0" y1="170.0" x2="397.1" y2="150.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/><line x1="365.0" y1="170.0" x2="365.0" y2="80.0" stroke="currentColor" stroke-width="1.5"/><line x1="365.0" y1="170.0" x2="455.0" y2="170.0" stroke="currentColor" stroke-width="1.5"/><line x1="397.1" y1="150.0" x2="397.1" y2="60.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/><line x1="397.1" y1="150.0" x2="487.1" y2="150.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/><line x1="365.0" y1="80.0" x2="397.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><line x1="365.0" y1="80.0" x2="455.0" y2="80.0" stroke="currentColor" stroke-width="1.5"/><line x1="397.1" y1="60.0" x2="487.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><line x1="455.0" y1="170.0" x2="487.1" y2="150.0" stroke="currentColor" stroke-width="1.5"/><line x1="455.0" y1="170.0" x2="455.0" y2="80.0" stroke="currentColor" stroke-width="1.5"/><line x1="487.1" y1="150.0" x2="487.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><line x1="455.0" y1="80.0" x2="487.1" y2="60.0" stroke="currentColor" stroke-width="1.5"/><circle cx="397.1" cy="150.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="397.1" cy="60.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="487.1" cy="150.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="487.1" cy="60.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="442.1" cy="105.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="426.0" cy="160.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="426.0" cy="70.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="381.0" cy="115.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="471.0" cy="115.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="365.0" cy="170.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="365.0" cy="80.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="455.0" cy="170.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="455.0" cy="80.0" r="10" fill="currentColor" class="f-gray" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><circle cx="410.0" cy="125.0" r="11" fill="currentColor" class="f-blue" fill-opacity="0.95" stroke="currentColor" stroke-width="1"/><text x="426" y="30" text-anchor="middle" font-size="14">face-centered (FCC)</text><text x="426" y="202" text-anchor="middle" font-size="12">8 × ⅛ + 6 × ½ = 4 atoms</text><text x="426" y="220" text-anchor="middle" font-size="12" class="t-gray">CN 12</text></svg>`;
const FIG_TOUCH = `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="cf"><rect x="40" y="55" width="150" height="150"/></clipPath><clipPath id="cb"><rect x="300" y="70" width="169.7" height="120"/></clipPath></defs><g clip-path="url(#cf)"><circle cx="40" cy="55" r="53.0" fill="currentColor" class="f-gray" fill-opacity="0.45" stroke="currentColor"/><circle cx="190" cy="55" r="53.0" fill="currentColor" class="f-gray" fill-opacity="0.45" stroke="currentColor"/><circle cx="40" cy="205" r="53.0" fill="currentColor" class="f-gray" fill-opacity="0.45" stroke="currentColor"/><circle cx="190" cy="205" r="53.0" fill="currentColor" class="f-gray" fill-opacity="0.45" stroke="currentColor"/><circle cx="115.0" cy="130.0" r="53.0" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor"/></g><rect x="40" y="55" width="150" height="150" fill="none" stroke="currentColor" stroke-width="2"/><line x1="40" y1="205" x2="190" y2="55" stroke="currentColor" class="s-red" stroke-width="2"/><text x="115.0" y="227" text-anchor="middle" font-size="13">a</text><text x="115.0" y="27" text-anchor="middle" font-size="14">FCC: one face</text><text x="115.0" y="45" text-anchor="middle" font-size="12" class="t-red">face diagonal √2·a = 4r</text><g clip-path="url(#cb)"><circle cx="300.0" cy="70" r="52.0" fill="currentColor" class="f-gray" fill-opacity="0.45" stroke="currentColor"/><circle cx="469.7" cy="70" r="52.0" fill="currentColor" class="f-gray" fill-opacity="0.45" stroke="currentColor"/><circle cx="300.0" cy="190" r="52.0" fill="currentColor" class="f-gray" fill-opacity="0.45" stroke="currentColor"/><circle cx="469.7" cy="190" r="52.0" fill="currentColor" class="f-gray" fill-opacity="0.45" stroke="currentColor"/><circle cx="384.9" cy="130.0" r="52.0" fill="currentColor" class="f-red" fill-opacity="0.5" stroke="currentColor"/></g><rect x="300" y="70" width="169.7" height="120" fill="none" stroke="currentColor" stroke-width="2"/><line x1="300" y1="190" x2="469.7" y2="70" stroke="currentColor" class="s-red" stroke-width="2"/><text x="384.9" y="212" text-anchor="middle" font-size="13">√2·a (face diagonal)</text><text x="288" y="135.0" text-anchor="middle" font-size="13">a</text><text x="384.9" y="28" text-anchor="middle" font-size="14">BCC: diagonal slice</text><text x="384.9" y="46" text-anchor="middle" font-size="12" class="t-red">body diagonal √3·a = 4r</text><text x="260" y="252" text-anchor="middle" font-size="12" class="t-gray">atoms touch along the red line; corners do not touch each other</text></svg>`;
const FIG_WATER_PD = `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg"><rect x="400" y="20" width="90" height="42" fill="currentColor" class="f-purple" fill-opacity="0.12"/><line x1="400" y1="20" x2="400" y2="62" stroke="currentColor" class="s-purple" stroke-dasharray="4 3"/><line x1="400" y1="62" x2="490" y2="62" stroke="currentColor" class="s-purple" stroke-dasharray="4 3"/><line x1="60" y1="225" x2="490" y2="225" stroke="currentColor" stroke-width="2"/><path d="M496 225 L486 220 L486 230 Z" fill="currentColor"/><line x1="60" y1="225" x2="60" y2="20" stroke="currentColor" stroke-width="2"/><path d="M60 14 L55 24 L65 24 Z" fill="currentColor"/><text x="480" y="246" text-anchor="end" font-size="13">temperature →</text><text x="50" y="30" text-anchor="end" font-size="13">P</text><line x1="60" y1="120" x2="490" y2="120" stroke="currentColor" class="s-gray" stroke-dasharray="5 4"/><text x="54" y="124" text-anchor="end" font-size="12">1 atm</text><path d="M62 218 Q130 214 170 175" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M170 175 Q300 170 400 62" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="170" y1="175" x2="155" y2="24" stroke="currentColor" stroke-width="2.5"/><circle cx="170" cy="175" r="5" fill="currentColor" class="f-red"/><circle cx="400" cy="62" r="5" fill="currentColor" class="f-red"/><text x="105" y="80" text-anchor="middle" font-size="14" class="">SOLID (ice)</text><text x="255" y="80" text-anchor="middle" font-size="14" class="">LIQUID</text><text x="330" y="195" text-anchor="middle" font-size="14" class="">GAS</text><text x="445" y="40" text-anchor="middle" font-size="11" class="t-purple">supercritical</text><text x="445" y="53" text-anchor="middle" font-size="11" class="t-purple">fluid</text><text x="250" y="192" text-anchor="middle" font-size="11" class="t-red">triple point</text><text x="250" y="206" text-anchor="middle" font-size="11" class="t-red">0.01 °C, 0.006 atm</text><text x="410" y="92" text-anchor="middle" font-size="11" class="t-red">critical point</text><text x="410" y="106" text-anchor="middle" font-size="11" class="t-red">374 °C, 218 atm</text><circle cx="164.5" cy="120.0" r="4" fill="currentColor" class="f-blue"/><line x1="164.5" y1="120.0" x2="164.5" y2="225" stroke="currentColor" class="s-blue" stroke-dasharray="2 3"/><text x="164.5" y="240" text-anchor="middle" font-size="11" class="t-blue">0 °C</text><circle cx="333.8" cy="120.0" r="4" fill="currentColor" class="f-blue"/><line x1="333.8" y1="120.0" x2="333.8" y2="225" stroke="currentColor" class="s-blue" stroke-dasharray="2 3"/><text x="333.8" y="240" text-anchor="middle" font-size="11" class="t-blue">100 °C</text><line x1="176" y1="181" x2="210" y2="186" stroke="currentColor" class="s-red" stroke-width="1"/><text x="130" y="140" text-anchor="middle" font-size="11" class="t-gray">slope &lt; 0</text></svg>`;
const FIG_CO2_PD = `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg"><rect x="390" y="20" width="100" height="50" fill="currentColor" class="f-purple" fill-opacity="0.12"/><line x1="390" y1="20" x2="390" y2="70" stroke="currentColor" class="s-purple" stroke-dasharray="4 3"/><line x1="390" y1="70" x2="490" y2="70" stroke="currentColor" class="s-purple" stroke-dasharray="4 3"/><line x1="60" y1="225" x2="490" y2="225" stroke="currentColor" stroke-width="2"/><path d="M496 225 L486 220 L486 230 Z" fill="currentColor"/><line x1="60" y1="225" x2="60" y2="20" stroke="currentColor" stroke-width="2"/><path d="M60 14 L55 24 L65 24 Z" fill="currentColor"/><text x="480" y="246" text-anchor="end" font-size="13">temperature →</text><text x="50" y="30" text-anchor="end" font-size="13">P</text><line x1="60" y1="200" x2="490" y2="200" stroke="currentColor" class="s-gray" stroke-dasharray="5 4"/><text x="54" y="204" text-anchor="end" font-size="12">1 atm</text><path d="M62 220 Q150 214 210 150" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M210 150 Q300 140 390 70" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="210" y1="150" x2="240" y2="24" stroke="currentColor" stroke-width="2.5"/><circle cx="210" cy="150" r="5" fill="currentColor" class="f-red"/><circle cx="390" cy="70" r="5" fill="currentColor" class="f-red"/><text x="130" y="90" text-anchor="middle" font-size="14" class="">SOLID (dry ice)</text><text x="300" y="70" text-anchor="middle" font-size="14" class="">LIQUID</text><text x="340" y="185" text-anchor="middle" font-size="14" class="">GAS</text><text x="445" y="40" text-anchor="middle" font-size="11" class="t-purple">supercritical</text><text x="445" y="53" text-anchor="middle" font-size="11" class="t-purple">fluid</text><text x="150" y="140" text-anchor="middle" font-size="11" class="t-red">triple point</text><text x="150" y="154" text-anchor="middle" font-size="11" class="t-red">−56.6 °C, 5.11 atm</text><text x="395" y="100" text-anchor="middle" font-size="11" class="t-red">critical point</text><text x="395" y="114" text-anchor="middle" font-size="11" class="t-red">31.0 °C, 72.8 atm</text><circle cx="141.9" cy="200.0" r="4" fill="currentColor" class="f-blue"/><line x1="141.9" y1="200.0" x2="141.9" y2="225" stroke="currentColor" class="s-blue" stroke-dasharray="2 3"/><text x="141.9" y="240" text-anchor="middle" font-size="11" class="t-blue">−78.5 °C</text><text x="300" y="214" text-anchor="middle" font-size="11" class="t-blue">at 1 atm: solid → gas directly</text><text x="262" y="40" text-anchor="start" font-size="11" class="t-gray">slope &gt; 0</text></svg>`;

export const lesson: Lesson = {
  id: 'gchem-solids-phase-diagrams',
  title: 'Solids and Phase Diagrams',
  summary: 'Classify solids by what holds them together, count atoms in cubic unit cells, compute densities from X-ray data, and read the phase diagrams of water and carbon dioxide.',
  minutes: 21,
  objectives: [
    'Classify solids as ionic, molecular, covalent network, metallic or amorphous and predict their properties',
    'Count atoms per unit cell and state coordination numbers for simple cubic, BCC and FCC lattices',
    'Relate edge length to atomic radius and derive packing efficiencies',
    'Calculate the density of a crystal from unit-cell data, and the reverse',
    'Read phase diagrams, explain the triple and critical points, and use the Clapeyron equation to explain the slope of water\'s melting line',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Five kinds of solid',
      blocks: [
        {
          type: 'p',
          text: 'A solid\'s properties are set by **what particles** sit at its lattice points and **what holds them together**. The forces range from the weak intermolecular attractions of the last lesson to full [[covalent-bond|covalent bonds]] running through an entire crystal, and the properties follow.',
        },
        {
          type: 'table',
          headers: ['Type', 'Particles and forces', 'Typical properties', 'Examples'],
          rows: [
            ['**Ionic**', 'cations and anions; [[ionic-bond|ionic bonding]]', 'high melting, hard but brittle, conduct only when molten or dissolved', '$\\ce{NaCl}$ (mp $801\\ ^\\circ\\text{C}$), $\\ce{MgO}$'],
            ['**Molecular**', 'molecules; intermolecular forces', 'low melting, soft, nonconducting', 'ice, dry ice, sugar, $\\ce{I2}$'],
            ['**Covalent network**', 'atoms; covalent bonds throughout', 'very hard, very high melting, usually nonconducting', 'diamond, quartz $\\ce{SiO2}$, $\\ce{SiC}$'],
            ['**Metallic**', 'cations in a "sea" of delocalized electrons', 'malleable, ductile, conduct heat and electricity, lustrous; mp varies widely', '$\\ce{Na}$ ($98\\ ^\\circ\\text{C}$), $\\ce{Fe}$ ($1538\\ ^\\circ\\text{C}$), $\\ce{W}$ ($3422\\ ^\\circ\\text{C}$)'],
            ['**Amorphous**', 'any of the above, without long-range order', 'soften gradually over a temperature range; break with curved surfaces', 'glass, most plastics, rubber'],
          ],
        },
        {
          type: 'p',
          text: 'The first four are **crystalline**: their particles repeat in a regular three-dimensional pattern, a [[chem-crystal-lattice|crystal lattice]], so they melt sharply at one temperature when the whole ordered structure gives way at once. An **amorphous** solid is frozen disorder, like a snapshot of a liquid; different regions are held with different strengths, so it softens over a range. That is what lets a glassblower work glass.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why metals bend and salts shatter',
          text: 'Push one layer of a metal past the next and the electron sea simply flows along: every cation still sits in a sea of electrons, and the metal bends. Push one layer of an ionic crystal by half a spacing and cations line up against cations, anions against anions. The layers repel and the crystal cleaves. Same strong forces, opposite responses to stress.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Covalent networks in body armor',
          text: 'The ceramic strike plates in many body-armor inserts are boron carbide or silicon carbide: covalent network solids with every atom locked to its neighbors by strong, directional covalent bonds. That makes them extremely hard (they blunt and shatter a projectile) and light, but, like all ceramics, brittle: a plate that has absorbed a hit is cracked and must be replaced.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'An unknown solid is extremely hard, does not melt below $2000\\ ^\\circ\\text{C}$, does not dissolve in water, and conducts electricity neither as a solid nor when strongly heated. What type of solid is it most likely to be?',
      options: [
        { text: 'Ionic', why: 'Ionic solids are hard and high-melting, but they are brittle rather than extremely hard, most dissolve in water, and molten ionic compounds conduct because their ions become mobile.' },
        { text: 'Molecular', why: 'Molecular solids are held by weak intermolecular forces, so they are soft and melt at low temperatures.' },
        { text: 'Covalent network', correct: true, why: 'Covalent bonds throughout the crystal make it very hard and very high-melting, and with no ions or free electrons it does not conduct. Silicon carbide fits this description.' },
        { text: 'Metallic', why: 'Metals conduct electricity in the solid state because of their delocalized electrons.' },
      ],
      explanation: 'Use the properties as a checklist. Conducting: rules out metals (solid) and ionic compounds (molten). Very hard and very high melting: rules out molecular solids. What remains is a covalent network, in which melting would mean breaking covalent bonds throughout the crystal.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Unit cells: counting atoms',
      blocks: [
        {
          type: 'p',
          text: 'A crystal is described by its [[gchem-unit-cell|unit cell]], the smallest box that rebuilds the whole crystal when stacked in three dimensions with no gaps, like a tile in a 3D tiling (or a chunk in a voxel game). For metals made of one kind of atom, three cubic cells cover a lot of ground.',
        },
        {
          type: 'figure',
          svg: FIG_CELLS,
          alt: 'Three cubes drawn in perspective. Simple cubic: an atom on each of the 8 corners, counting 8 times one-eighth equals 1 atom, coordination number 6. Body-centered cubic: corner atoms plus one red atom in the center, 8 times one-eighth plus 1 equals 2 atoms, coordination number 8. Face-centered cubic: corner atoms plus a blue atom in the center of each of the 6 faces, 8 times one-eighth plus 6 times one-half equals 4 atoms, coordination number 12.',
          caption: 'Atoms are drawn small so you can see the positions. In the real crystal they are large enough to touch their nearest neighbors.',
        },
        {
          type: 'p',
          text: 'Atoms on the surface of a cell are **shared** with neighboring cells, so only a fraction of each belongs to any one cell:',
        },
        {
          type: 'table',
          headers: ['Position', 'Cells sharing it', 'Fraction in this cell'],
          rows: [
            ['corner', '8', '$\\tfrac{1}{8}$'],
            ['edge', '4', '$\\tfrac{1}{4}$'],
            ['face', '2', '$\\tfrac{1}{2}$'],
            ['body (interior)', '1', '$1$'],
          ],
        },
        {
          type: 'p',
          text: 'The **coordination number** (CN) is the number of nearest neighbors each atom touches. In simple cubic, an atom touches 6 (up, down, left, right, front, back). In BCC, the body-center atom touches all 8 corners. In FCC, each atom touches 12: 4 in its own layer, 4 above and 4 below. Higher coordination means more bonds per atom and, as the next card shows, tighter packing.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Real examples: polonium is the only element that crystallizes in simple cubic. Iron (at room temperature), sodium, chromium and tungsten are BCC. Copper, aluminum, silver, gold, nickel and lead are FCC. Ionic sodium chloride is an FCC array of $\\ce{Cl-}$ with $\\ce{Na+}$ in the gaps: 4 $\\ce{Na+}$ and 4 $\\ce{Cl-}$ per cell, so 4 formula units.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Type the numbers.',
      template: 'A body-centered cubic cell contains ___ atoms. A face-centered cubic cell contains ___ atoms, and each atom in FCC has a coordination number of ___ .',
      blanks: [{ answers: ['2'] }, { answers: ['4'] }, { answers: ['12'] }],
      explanation: 'BCC: $8 \\times \\tfrac{1}{8}$ (corners) $+ 1$ (body center) $= 2$. FCC: $8 \\times \\tfrac{1}{8} + 6 \\times \\tfrac{1}{2}$ (faces) $= 1 + 3 = 4$. In FCC every atom touches 12 others: picture a face-center atom, with 4 neighbors at the corners of its own face and 4 face-center neighbors in each of the two cells it belongs to.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Edge length, radius and packing efficiency',
      blocks: [
        {
          type: 'p',
          text: 'X-ray diffraction measures the edge length $a$ of the unit cell. To turn that into an atomic radius $r$, find the line along which atoms actually **touch**.',
        },
        {
          type: 'figure',
          svg: FIG_TOUCH,
          alt: 'Left: one face of an FCC cell, a square of side a with quarter atoms in the corners and a whole atom in the center; a red diagonal passes through two corner atoms and the center atom, labeled face diagonal root 2 a equals 4r. Right: a diagonal slice through a BCC cell, a rectangle a high and root 2 a wide, with quarter atoms in the corners and the body-center atom; the red body diagonal, root 3 a equals 4r, passes through them.',
          caption: 'Along the red line the distance is $r + 2r + r = 4r$. The corner atoms themselves do not touch in FCC or BCC.',
        },
        {
          type: 'table',
          headers: ['Cell', 'Atoms touch along', 'Relation', 'Atoms per cell'],
          rows: [
            ['simple cubic', 'an edge', '$a = 2r$', '1'],
            ['BCC', 'the body diagonal', '$\\sqrt{3}\\,a = 4r$', '2'],
            ['FCC', 'a face diagonal', '$\\sqrt{2}\\,a = 4r$', '4'],
          ],
        },
        {
          type: 'p',
          text: 'The [[gchem-packing-efficiency|packing efficiency]] is the fraction of the cell\'s volume filled by atoms (spheres).',
        },
        {
          type: 'derivation',
          title: 'Packing efficiency of FCC',
          steps: [
            { tex: 'V_{\\text{atoms}} = 4 \\cdot \\tfrac{4}{3}\\pi r^3', why: 'Four whole atoms per FCC cell.' },
            { tex: 'a = \\frac{4r}{\\sqrt{2}} = 2\\sqrt{2}\\,r \\implies V_{\\text{cell}} = a^3 = 16\\sqrt{2}\\,r^3', why: 'From the face diagonal: $\\sqrt{2}\\,a = 4r$. Cube it: $(2\\sqrt{2})^3 = 8 \\cdot 2\\sqrt{2} = 16\\sqrt{2}$.' },
            { tex: '\\frac{V_{\\text{atoms}}}{V_{\\text{cell}}} = \\frac{\\tfrac{16}{3}\\pi r^3}{16\\sqrt{2}\\,r^3} = \\frac{\\pi}{3\\sqrt{2}}', why: 'Divide; $r^3$ cancels, so the answer is the same for every FCC metal.' },
            { tex: '= 0.740 = 74.0\\%', why: 'Evaluate.' },
          ],
          result: 'The same steps give $\\pi/6 = 52.4\\%$ for simple cubic and $\\sqrt{3}\\pi/8 = 68.0\\%$ for BCC.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Kepler conjectured in 1611 that no packing of equal spheres beats $74\\%$, the FCC value (hexagonal close packing, the other common metal structure, ties it). Stacking oranges at a market confirms it, but a proof took until Thomas Hales in 1998, and its computer-assisted verification was formally completed only in 2014.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Copper crystallizes in a face-centered cubic lattice with edge length $a = 361.5\\ \\text{pm}$. What is the atomic radius of copper, in pm? Give 3 significant figures.',
      hint: 'In FCC, atoms touch along the face diagonal: $\\sqrt{2}\\,a = 4r$.',
      label: '$r =$',
      unit: 'pm',
      answer: 'sqrt(2)*361.5/4',
      answerTex: '128\\ \\text{pm}',
      tolerance: 0.6,
      explanation: '$r = \\frac{\\sqrt{2}\\,a}{4} = \\frac{(1.4142)(361.5)}{4} = 127.8\\ \\text{pm} \\approx 128\\ \\text{pm}$. Using the simple-cubic relation $a = 2r$ would give $181\\ \\text{pm}$, and the BCC relation $\\sqrt{3}a = 4r$ would give $157\\ \\text{pm}$; the structure type matters.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Density from unit-cell data',
      blocks: [
        {
          type: 'p',
          text: 'One unit cell is a tiny sample of the whole crystal with the same [[density]]. Its mass is (atoms per cell) × (mass of one atom), and its volume is $a^3$.',
        },
        {
          type: 'theorem',
          name: 'Density of a crystal',
          tex: 'd = \\frac{Z\\,M}{N_A\\,a^3}',
          text: '$Z$ = atoms (or formula units) per cell, $M$ = molar mass, $N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}$, $a$ = edge length. With $a$ in cm, $d$ comes out in $\\text{g/cm}^3$; remember $1\\ \\text{pm} = 10^{-12}\\ \\text{m} = 10^{-10}\\ \\text{cm}$.',
        },
        {
          type: 'derivation',
          title: 'Density of copper (FCC, $a = 361.5\\ \\text{pm}$, $M = 63.546\\ \\text{g/mol}$)',
          steps: [
            { tex: 'a = 361.5\\ \\text{pm} \\times \\frac{10^{-10}\\ \\text{cm}}{1\\ \\text{pm}} = 3.615 \\times 10^{-8}\\ \\text{cm}', why: 'Convert first; cubing a conversion error makes it enormous.' },
            { tex: 'a^3 = (3.615 \\times 10^{-8}\\ \\text{cm})^3 = 4.724 \\times 10^{-23}\\ \\text{cm}^3', why: 'Volume of one cell. Cube the number **and** the power of ten: $(10^{-8})^3 = 10^{-24}$.' },
            { tex: 'm_{\\text{cell}} = \\frac{4 \\times 63.546\\ \\text{g/mol}}{6.022 \\times 10^{23}\\ \\text{mol}^{-1}} = 4.221 \\times 10^{-22}\\ \\text{g}', why: 'Four Cu atoms per FCC cell; molar mass ÷ Avogadro\'s number is the mass of one atom.' },
            { tex: 'd = \\frac{4.221 \\times 10^{-22}\\ \\text{g}}{4.724 \\times 10^{-23}\\ \\text{cm}^3} = 8.93\\ \\text{g/cm}^3', why: 'Mass over volume.' },
          ],
          result: 'The measured density of copper is $8.96\\ \\text{g/cm}^3$: X-ray geometry and a balance agree to within $0.3\\%$, strong evidence that the atomic picture is right.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this formula is so powerful',
          text: 'It links four quantities, so any three give the fourth. Measured density and edge length give $Z$, which identifies the cell type: iron ($d = 7.874\\ \\text{g/cm}^3$, $a = 286.65\\ \\text{pm}$) gives $Z = 2.00$, so it is BCC. Measured $d$, $a$ and $Z$ give $N_A$: X-ray crystal density measurements on ultra-pure silicon spheres were one of the methods used to fix Avogadro\'s number when the mole was redefined in 2019.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Iron is body-centered cubic with an edge length of $286.65\\ \\text{pm}$. Calculate its density in $\\text{g/cm}^3$. Use $M(\\ce{Fe}) = 55.845\\ \\text{g/mol}$ and $N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}$; 3 significant figures.',
      hint: '$d = \\dfrac{ZM}{N_A a^3}$ with $Z = 2$ and $a = 2.8665 \\times 10^{-8}\\ \\text{cm}$.',
      label: '$d =$',
      unit: 'g/cm³',
      answer: '2*55.845/(6.022*10^23*(2.8665*10^-8)^3)',
      answerTex: '7.87\\ \\text{g/cm}^3',
      tolerance: 0.006,
      explanation: '$a^3 = (2.8665 \\times 10^{-8}\\ \\text{cm})^3 = 2.3554 \\times 10^{-23}\\ \\text{cm}^3$. Mass per cell $= \\frac{2 \\times 55.845}{6.022 \\times 10^{23}} = 1.8547 \\times 10^{-22}\\ \\text{g}$. So $d = \\frac{1.8547 \\times 10^{-22}}{2.3554 \\times 10^{-23}} = 7.87\\ \\text{g/cm}^3$, matching the handbook value. Using $Z = 1$ would give half that; using $Z = 4$, double.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'Aluminum is FCC with $a = 404.95\\ \\text{pm}$ and $M = 26.982\\ \\text{g/mol}$. A student calculates its density. Tap the first line that is wrong.',
      lines: [
        '$a = 404.95\\ \\text{pm} = 4.0495 \\times 10^{-8}\\ \\text{cm}$, so $a^3 = 6.6406 \\times 10^{-23}\\ \\text{cm}^3$',
        'Atoms per cell: 8 corners + 6 faces $= 14$',
        'Mass per cell: $14 \\times 26.982 / (6.022 \\times 10^{23}) = 6.273 \\times 10^{-22}\\ \\text{g}$',
        '$d = 6.273 \\times 10^{-22} / 6.6406 \\times 10^{-23} = 9.45\\ \\text{g/cm}^3$',
      ],
      errorLines: [2],
      explanation: 'Corner and face atoms are shared with neighboring cells: each corner contributes $\\tfrac{1}{8}$ and each face $\\tfrac{1}{2}$, so $Z = 8 \\times \\tfrac{1}{8} + 6 \\times \\tfrac{1}{2} = 4$, not 14. Correctly, the mass per cell is $4 \\times 26.982/(6.022 \\times 10^{23}) = 1.792 \\times 10^{-22}\\ \\text{g}$ and $d = 2.70\\ \\text{g/cm}^3$, the familiar density of aluminum. A density of $9.45$ for a light metal should have raised a flag.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The phase diagram of water',
      blocks: [
        {
          type: 'p',
          text: 'A [[gchem-phase-diagram|phase diagram]] maps which phase is stable at each combination of temperature and pressure. Each region is one phase; each line is a set of conditions where two phases coexist in equilibrium. The liquid–gas line is exactly the vapor-pressure curve of the last lesson.',
        },
        {
          type: 'figure',
          svg: FIG_WATER_PD,
          alt: 'Schematic phase diagram of water, pressure up, temperature right. Regions: solid (ice) at left, liquid at top middle, gas at bottom right, and a shaded supercritical fluid region beyond the critical point. The melting line rises steeply and leans to the left from the triple point at 0.01 degrees and 0.006 atm. The vaporization curve rises from the triple point to the critical point at 374 degrees and 218 atm. A dashed 1 atm line crosses the melting line at 0 degrees and the vaporization curve at 100 degrees.',
          caption: 'Not to scale (the pressure axis spans a factor of over 30 000). Follow the dashed 1 atm line: ice melts at $0\\ ^\\circ\\text{C}$ and water boils at $100\\ ^\\circ\\text{C}$, the normal melting and boiling points.',
        },
        {
          type: 'list',
          items: [
            'The [[gchem-triple-point|triple point]] ($0.01\\ ^\\circ\\text{C}$, $0.006\\ \\text{atm}$ or $4.58\\ \\text{torr}$) is the only condition where ice, liquid water and vapor coexist. Below that pressure liquid water cannot exist: ice **sublimes**. Freeze-drying exploits this: frozen food (including freeze-dried field rations) is held below $4.58\\ \\text{torr}$ and its ice turns straight to vapor, leaving a light, shelf-stable product.',
            'The [[gchem-critical-point|critical point]] ($374\\ ^\\circ\\text{C}$, $218\\ \\text{atm}$) is where the vaporization curve ends. Beyond it the liquid and gas become indistinguishable.',
            'The melting line has a **negative slope**: squeeze ice and it can melt. Water is unusual; for almost every other substance the line leans the other way.',
          ],
        },
        {
          type: 'derivation',
          title: 'How steep is the melting line? (Clapeyron equation)',
          steps: [
            { tex: '\\frac{dP}{dT} = \\frac{\\Delta H_{\\text{fus}}}{T\\,\\Delta V_{\\text{fus}}}', why: 'The Clapeyron equation for the slope of any two-phase line, introduced last lesson.' },
            { tex: '\\Delta V_{\\text{fus}} = \\frac{18.02}{0.9998} - \\frac{18.02}{0.9168} = 18.02 - 19.66 = -1.63\\ \\text{cm}^3\\text{/mol}', why: 'Molar volume of liquid minus that of ice (densities $0.9998$ and $0.9168\\ \\text{g/cm}^3$ at $0\\ ^\\circ\\text{C}$). Negative: water **shrinks** when ice melts.' },
            { tex: '\\frac{dP}{dT} = \\frac{6010\\ \\text{J/mol}}{(273.15\\ \\text{K})(-1.63 \\times 10^{-6}\\ \\text{m}^3\\text{/mol})} = -1.35 \\times 10^{7}\\ \\text{Pa/K}', why: 'SI units: $\\text{J/m}^3 = \\text{Pa}$.' },
            { tex: '\\approx -133\\ \\text{atm per K}', why: 'Divide by $101\\,325\\ \\text{Pa/atm}$.' },
          ],
          result: 'Positive $\\Delta H_{\\text{fus}}$ with negative $\\Delta V_{\\text{fus}}$ gives a negative slope, but a very steep one: lowering the melting point by just $1\\ ^\\circ\\text{C}$ takes about $133\\ \\text{atm}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why ice skates glide (it is mostly not pressure)',
          text: 'The textbook story is that blade pressure melts the ice. Check it: even if a $70\\ \\text{kg}$ skater balanced on only $1\\ \\text{cm}^2$ of blade, the pressure would be about $68\\ \\text{atm}$, lowering the melting point by only about $0.5\\ ^\\circ\\text{C}$. Yet people skate happily at $-20\\ ^\\circ\\text{C}$. The accepted explanation is a thin, liquid-like layer that exists on ice surfaces well below $0\\ ^\\circ\\text{C}$, plus frictional heating as the blade moves. Pressure melting contributes, but only a little.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Using the phase diagram of water: a sample at $-10\\ ^\\circ\\text{C}$ starts at $0.001\\ \\text{atm}$, and the pressure is slowly raised to $1\\ \\text{atm}$ at constant temperature. What happens?',
      options: [
        { text: 'Gas → liquid → solid', why: 'At $-10\\ ^\\circ\\text{C}$ the vertical path passes left of the triple point, so it never enters the liquid region. Liquid water needs at least $0.006\\ \\text{atm}$ **and** a temperature near or above $0\\ ^\\circ\\text{C}$.' },
        { text: 'Gas → solid (deposition)', correct: true, why: 'The path crosses only the sublimation curve, going straight from vapor to ice.' },
        { text: 'Solid → liquid, because pressure melts ice', why: 'At $0.001\\ \\text{atm}$ and $-10\\ ^\\circ\\text{C}$ the sample starts as a gas, and raising the pressure to $1\\ \\text{atm}$ is nowhere near the more than $1000\\ \\text{atm}$ it would take to melt ice at $-10\\ ^\\circ\\text{C}$.' },
        { text: 'It stays a gas throughout', why: 'At $1\\ \\text{atm}$ and $-10\\ ^\\circ\\text{C}$ the stable phase of water is ice, so the path must cross a phase boundary.' },
      ],
      explanation: 'Draw a vertical line at $-10\\ ^\\circ\\text{C}$, which lies to the left of the triple point ($0.01\\ ^\\circ\\text{C}$). At very low pressure you are in the gas region; going up you cross the solid–gas (sublimation) line, where vapor deposits directly as ice, and stay in the solid region up to $1\\ \\text{atm}$. Frost forming on a cold night is the same deposition.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Using the Clapeyron result from this lesson, what pressure increase (in atm) is needed to lower the melting point of ice by $2.0\\ ^\\circ\\text{C}$? Use $\\Delta H_{\\text{fus}} = 6010\\ \\text{J/mol}$, $T = 273.15\\ \\text{K}$, $\\Delta V_{\\text{fus}} = -1.63\\ \\text{cm}^3\\text{/mol}$, and $1\\ \\text{atm} = 101\\,325\\ \\text{Pa}$. Give 3 significant figures.',
      hint: 'Slope $\\frac{dP}{dT} = \\frac{\\Delta H}{T\\,\\Delta V}$ in Pa/K (with $\\Delta V$ in $\\text{m}^3$). Multiply by $\\Delta T = -2.0\\ \\text{K}$, then convert to atm.',
      label: '$\\Delta P =$',
      unit: 'atm',
      answer: '2.0*6010/(273.15*1.63*10^-6)/101325',
      answerTex: '266\\ \\text{atm}',
      tolerance: 1.5,
      explanation: 'Slope: $\\frac{6010}{(273.15)(-1.63 \\times 10^{-6})} = -1.350 \\times 10^7\\ \\text{Pa/K}$. For $\\Delta T = -2.0\\ \\text{K}$: $\\Delta P = (-1.350 \\times 10^7)(-2.0) = 2.70 \\times 10^7\\ \\text{Pa} = 266\\ \\text{atm}$. A linear estimate is fine here because the line is nearly straight over a couple of degrees. Pressures like this exist under thick glaciers, where they help keep the base wet.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'The phase diagram of carbon dioxide',
      blocks: [
        {
          type: 'figure',
          svg: FIG_CO2_PD,
          alt: 'Schematic phase diagram of carbon dioxide. The triple point is at minus 56.6 degrees and 5.11 atm, above the dashed 1 atm line. The melting line rises steeply and leans to the right. The vaporization curve runs from the triple point to the critical point at 31.0 degrees and 72.8 atm. The 1 atm line crosses only the sublimation curve, at minus 78.5 degrees, labeled solid to gas directly.',
          caption: 'Not to scale. Because the triple point lies **above** $1\\ \\text{atm}$, liquid $\\ce{CO2}$ cannot exist at ordinary pressure.',
        },
        {
          type: 'list',
          items: [
            '**Dry ice.** At $1\\ \\text{atm}$, solid $\\ce{CO2}$ sublimes at $-78.5\\ ^\\circ\\text{C}$, leaving no puddle. It is ideal for shipping frozen blood products, vaccines and samples in the field. But each kilogram becomes about $550\\ \\text{L}$ of gas at room conditions: never seal dry ice in a closed container, and do not store it in a closed vehicle or small room, where the heavier-than-air $\\ce{CO2}$ can displace oxygen.',
            '**Liquid $\\ce{CO2}$** needs at least $5.11\\ \\text{atm}$. A $\\ce{CO2}$ fire extinguisher or beverage cylinder holds liquid in equilibrium with its vapor, at about $57\\ \\text{atm}$ at room temperature. When it discharges, the expanding gas cools so sharply that some of it freezes into "snow".',
            '**Positive melting slope.** Solid $\\ce{CO2}$ is denser than the liquid, so $\\Delta V_{\\text{fus}} > 0$ and by the Clapeyron equation the melting line leans to the right, like almost every other substance (water is the exception).',
            '**A low critical temperature.** At $31.0\\ ^\\circ\\text{C}$, a hot day pushes a $\\ce{CO2}$ cylinder past its critical temperature, and the liquid–gas boundary inside disappears.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Phase-diagram questions usually ask you to trace a horizontal path (heating at constant pressure) or a vertical one (compressing at constant temperature) and name each transition. Locate the triple point relative to the path first: it decides whether the liquid region can be crossed at all.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'If dry ice is cooled enough at a pressure of $1\\ \\text{atm}$, and then warmed slowly, it will melt into liquid carbon dioxide before it turns into gas.',
      answer: false,
      explanation: 'Liquid $\\ce{CO2}$ is only stable above the triple-point pressure, $5.11\\ \\text{atm}$. At $1\\ \\text{atm}$ a horizontal path on the phase diagram crosses only the sublimation curve, at $-78.5\\ ^\\circ\\text{C}$, so the solid goes straight to gas however slowly you warm it. To see liquid $\\ce{CO2}$ you must raise the pressure above $5.11\\ \\text{atm}$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Supercritical fluids',
      blocks: [
        {
          type: 'p',
          text: 'Heat a sealed tube of liquid and vapor. The liquid expands and gets less dense; more of it evaporates, so the vapor gets denser. At the critical temperature the two densities become equal, the meniscus between them fades and vanishes, and there is a single phase. Above both $T_c$ and $P_c$ the substance is a [[gchem-supercritical-fluid|supercritical fluid]].',
        },
        {
          type: 'p',
          text: 'A supercritical fluid is dense like a liquid, so it can dissolve things, but it flows and diffuses like a gas, so it penetrates porous solids quickly. Best of all, small changes in pressure or temperature change its density, and therefore its dissolving power, a great deal. Release the pressure and it simply becomes a gas, leaving no solvent behind.',
        },
        {
          type: 'list',
          items: [
            '**Supercritical $\\ce{CO2}$** (above $31\\ ^\\circ\\text{C}$ and $73\\ \\text{atm}$, mild conditions) decaffeinates coffee, extracts hop flavors and essential oils, and replaces chlorinated solvents in some dry cleaning. It is nontoxic, nonflammable and cheap.',
            '**Supercritical water** (above $374\\ ^\\circ\\text{C}$ and $218\\ \\text{atm}$) loses most of its hydrogen-bond network and dissolves organic compounds and oxygen. In *supercritical water oxidation* that combination destroys hazardous organic wastes completely.',
            '**Power plants.** Modern "supercritical" coal and steam plants run their boilers above water\'s critical point, which avoids boiling altogether and raises efficiency.',
          ],
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Think of the liquid–gas line as a road that ends at the critical point. Below it, getting from liquid to gas means crossing the road (boiling, with a visible boundary and a burst of $\\Delta H_{\\text{vap}}$). Go around the end of the road, through the supercritical region, and you get from liquid to gas without ever boiling: the properties change smoothly the whole way.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Solid $\\ce{CO2}$ at $-100\\ ^\\circ\\text{C}$ is heated at a constant pressure of $10\\ \\text{atm}$ until it reaches $25\\ ^\\circ\\text{C}$. Put what happens in order.',
      lines: [
        'The solid warms',
        'The solid melts to liquid',
        'The liquid warms',
        'The liquid boils to gas',
        'The gas warms',
      ],
      distractors: ['The solid sublimes directly to gas'],
      explanation: '$10\\ \\text{atm}$ is above the triple-point pressure ($5.11\\ \\text{atm}$) and below the critical pressure ($72.8\\ \\text{atm}$), so a horizontal path at $10\\ \\text{atm}$ crosses the melting line and then the vaporization curve, just as water does at $1\\ \\text{atm}$. Direct sublimation happens only on paths below the triple point, such as at $1\\ \\text{atm}$.',
    },
  ],
  takeaways: [
    'Solids are ionic, molecular, covalent network or metallic (all crystalline), or amorphous; the particles and forces predict hardness, melting point and conductivity.',
    'Atoms per cubic cell: corners $\\tfrac{1}{8}$, faces $\\tfrac{1}{2}$, edges $\\tfrac{1}{4}$, body $1$. Simple cubic 1 (CN 6), BCC 2 (CN 8), FCC 4 (CN 12).',
    'Atoms touch along an edge ($a = 2r$), body diagonal ($\\sqrt{3}a = 4r$) or face diagonal ($\\sqrt{2}a = 4r$); packing efficiencies 52%, 68% and 74%.',
    'Crystal density: $d = ZM/(N_A a^3)$, with $a$ converted to cm ($1\\ \\text{pm} = 10^{-10}\\ \\text{cm}$).',
    'Phase diagrams show the stable phase at each $T$ and $P$. Lines are two-phase equilibria, the triple point is three-phase, and the critical point ends the liquid–gas line. Water\'s melting line leans left because ice is less dense than water ($dP/dT \\approx -133\\ \\text{atm/K}$).',
    '$\\ce{CO2}$\'s triple point (5.11 atm) lies above 1 atm, so dry ice sublimes at $-78.5\\ ^\\circ\\text{C}$. Above $T_c$ and $P_c$ a substance is a supercritical fluid with tunable, liquid-like dissolving power and gas-like flow.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 10: Liquids and Solids',
      url: 'https://openstax.org/books/chemistry-2e/pages/10-introduction',
      source: 'openstax',
      note: 'Sections 10.4–10.6 cover phase diagrams, the kinds of crystalline solids, and lattice structures with unit-cell density calculations.',
    },
    {
      title: 'Wikipedia — Cubic crystal system',
      url: 'https://en.wikipedia.org/wiki/Cubic_crystal_system',
      source: 'wikipedia',
      note: 'Rotatable pictures of the simple cubic, BCC and FCC lattices, with lists of elements in each.',
    },
    {
      title: 'Wikipedia — Phase diagram',
      url: 'https://en.wikipedia.org/wiki/Phase_diagram',
      source: 'wikipedia',
      note: 'Real (to-scale) phase diagrams of water and carbon dioxide, including water\'s many high-pressure ice phases.',
    },
    {
      title: 'Wikipedia — Supercritical fluid',
      url: 'https://en.wikipedia.org/wiki/Supercritical_fluid',
      source: 'wikipedia',
      note: 'Properties and applications of supercritical $\\ce{CO2}$ and water, with photos of a meniscus disappearing at the critical point.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "unit cell" for more practice with atoms per cell, radii and densities, including ionic lattices such as NaCl and CsCl.',
    },
  ],
};
