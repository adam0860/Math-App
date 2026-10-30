import type { Lesson } from '../../types';

// <figures> (generated from hand-written SVG; electron counts checked)
const FIG = {
  diatomics: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><line x1="83" y1="30" x2="133" y2="30" class="s-red" stroke-width="2.2" stroke-linecap="round"/><text x="175" y="30" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-red">σ*2p</text><line x1="53" y1="70" x2="103" y2="70" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="113" y1="70" x2="163" y2="70" class="s-red" stroke-width="2.2" stroke-linecap="round"/><text x="175" y="70" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-red">π*2p</text><line x1="83" y1="112" x2="133" y2="112" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="102" y1="116" x2="102" y2="96" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="102" y1="96" x2="107" y2="102" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="114" y1="96" x2="114" y2="114" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="114" y1="114" x2="119" y2="108" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="175" y="112" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-blue">σ2p</text><line x1="53" y1="140" x2="103" y2="140" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="72" y1="144" x2="72" y2="124" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="72" y1="124" x2="77" y2="130" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="84" y1="124" x2="84" y2="142" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="84" y1="142" x2="89" y2="136" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="113" y1="140" x2="163" y2="140" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="132" y1="144" x2="132" y2="124" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="132" y1="124" x2="137" y2="130" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="144" y1="124" x2="144" y2="142" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="144" y1="142" x2="149" y2="136" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="175" y="140" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-blue">π2p</text><line x1="83" y1="190" x2="133" y2="190" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="102" y1="194" x2="102" y2="174" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="102" y1="174" x2="107" y2="180" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="114" y1="174" x2="114" y2="192" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="114" y1="192" x2="119" y2="186" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="175" y="190" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-red">σ*2s</text><line x1="83" y1="228" x2="133" y2="228" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="102" y1="232" x2="102" y2="212" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="102" y1="212" x2="107" y2="218" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="114" y1="212" x2="114" y2="230" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="114" y1="230" x2="119" y2="224" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="175" y="228" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-blue">σ2s</text><text x="115" y="262" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">B₂, C₂, N₂ (shown: N₂)</text><text x="115" y="284" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">10 e⁻ · bond order 3 · all paired</text><line x1="343" y1="30" x2="393" y2="30" class="s-red" stroke-width="2.2" stroke-linecap="round"/><text x="435" y="30" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-red">σ*2p</text><line x1="313" y1="70" x2="363" y2="70" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="338" y1="74" x2="338" y2="54" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="338" y1="54" x2="343" y2="60" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="373" y1="70" x2="423" y2="70" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="398" y1="74" x2="398" y2="54" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="398" y1="54" x2="403" y2="60" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="435" y="70" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-red">π*2p</text><line x1="313" y1="112" x2="363" y2="112" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="332" y1="116" x2="332" y2="96" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="332" y1="96" x2="337" y2="102" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="344" y1="96" x2="344" y2="114" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="344" y1="114" x2="349" y2="108" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="373" y1="112" x2="423" y2="112" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="392" y1="116" x2="392" y2="96" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="392" y1="96" x2="397" y2="102" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="404" y1="96" x2="404" y2="114" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="404" y1="114" x2="409" y2="108" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="435" y="112" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-blue">π2p</text><line x1="343" y1="140" x2="393" y2="140" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="362" y1="144" x2="362" y2="124" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="362" y1="124" x2="367" y2="130" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="374" y1="124" x2="374" y2="142" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="374" y1="142" x2="379" y2="136" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="435" y="140" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-blue">σ2p</text><line x1="343" y1="190" x2="393" y2="190" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="362" y1="194" x2="362" y2="174" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="362" y1="174" x2="367" y2="180" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="374" y1="174" x2="374" y2="192" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="374" y1="192" x2="379" y2="186" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="435" y="190" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-red">σ*2s</text><line x1="343" y1="228" x2="393" y2="228" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="362" y1="232" x2="362" y2="212" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="362" y1="212" x2="367" y2="218" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="374" y1="212" x2="374" y2="230" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="374" y1="230" x2="379" y2="224" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><text x="435" y="228" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-blue">σ2s</text><text x="375" y="262" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">O₂, F₂ (shown: O₂)</text><text x="375" y="284" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">12 e⁻ · bond order 2 · 2 unpaired</text><line x1="258" y1="20" x2="258" y2="250" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 4"/></svg>',
  h2_he2: '<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg"><line x1="24" y1="125" x2="68" y2="125" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="46" y1="129" x2="46" y2="109" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="46" y1="109" x2="51" y2="115" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="210" y1="125" x2="254" y2="125" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="232" y1="129" x2="232" y2="109" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="232" y1="109" x2="237" y2="115" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="109" y1="175" x2="169" y2="175" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="133" y1="179" x2="133" y2="159" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="133" y1="159" x2="138" y2="165" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="145" y1="159" x2="145" y2="177" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="145" y1="177" x2="150" y2="171" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="109" y1="65" x2="169" y2="65" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="68" y1="125" x2="109" y2="175" class="s-gray" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="68" y1="125" x2="109" y2="65" class="s-gray" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="210" y1="125" x2="169" y2="175" class="s-gray" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="210" y1="125" x2="169" y2="65" class="s-gray" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="46" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px">H 1s</text><text x="232" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px">H 1s</text><text x="139" y="195" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-blue">σ1s (bonding)</text><text x="139" y="39" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-red">σ*1s (antibonding)</text><text x="139" y="222" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">H₂: σ1s²</text><text x="139" y="242" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">bond order ½(2 − 0) = 1 ✓</text><line x1="284" y1="125" x2="328" y2="125" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="300" y1="129" x2="300" y2="109" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="300" y1="109" x2="305" y2="115" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="312" y1="109" x2="312" y2="127" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="312" y1="127" x2="317" y2="121" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="470" y1="125" x2="514" y2="125" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="486" y1="129" x2="486" y2="109" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="486" y1="109" x2="491" y2="115" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="498" y1="109" x2="498" y2="127" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="498" y1="127" x2="503" y2="121" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="369" y1="175" x2="429" y2="175" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><line x1="393" y1="179" x2="393" y2="159" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="393" y1="159" x2="398" y2="165" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="405" y1="159" x2="405" y2="177" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="405" y1="177" x2="410" y2="171" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="369" y1="65" x2="429" y2="65" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="393" y1="69" x2="393" y2="49" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="393" y1="49" x2="398" y2="55" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="405" y1="49" x2="405" y2="67" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="405" y1="67" x2="410" y2="61" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="328" y1="125" x2="369" y2="175" class="s-gray" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="328" y1="125" x2="369" y2="65" class="s-gray" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="470" y1="125" x2="429" y2="175" class="s-gray" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="470" y1="125" x2="429" y2="65" class="s-gray" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="306" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px">He 1s</text><text x="492" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px">He 1s</text><text x="399" y="195" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-blue">σ1s (bonding)</text><text x="399" y="39" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-red">σ*1s (antibonding)</text><text x="399" y="222" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">He₂: σ1s² σ*1s²</text><text x="399" y="242" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">bond order ½(2 − 2) = 0 ✗</text><line x1="270" y1="20" x2="270" y2="230" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 4"/><text x="8" y="120" text-anchor="middle" dominant-baseline="central" transform="rotate(-90 8 120)" class="t-gray" style="font-size:13.4px">energy</text></svg>',
  p_mos: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><ellipse cx="55" cy="70" rx="20" ry="13" class="f-red s-red" fill-opacity="0.25" stroke-width="1.4"/><ellipse cx="125" cy="70" rx="42" ry="20" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><ellipse cx="195" cy="70" rx="20" ry="13" class="f-red s-red" fill-opacity="0.25" stroke-width="1.4"/><circle cx="100" cy="70" r="3" fill="currentColor"/><circle cx="150" cy="70" r="3" fill="currentColor"/><text x="125" y="112" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-blue">σ2p: density builds between nuclei</text><ellipse cx="318" cy="70" rx="22" ry="13" class="f-red s-red" fill-opacity="0.25" stroke-width="1.4"/><ellipse cx="358" cy="70" rx="18" ry="14" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><ellipse cx="402" cy="70" rx="18" ry="14" class="f-red s-red" fill-opacity="0.25" stroke-width="1.4"/><ellipse cx="442" cy="70" rx="22" ry="13" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><circle cx="340" cy="70" r="3" fill="currentColor"/><circle cx="420" cy="70" r="3" fill="currentColor"/><line x1="380" y1="36" x2="380" y2="104" class="s-gray" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/><text x="380" y="112" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-red">σ*2p: node between nuclei</text><circle cx="100" cy="205" r="3" fill="currentColor"/><circle cx="150" cy="205" r="3" fill="currentColor"/><rect x="72" y="147" width="106" height="44" rx="22" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><rect x="72" y="219" width="106" height="44" rx="22" class="f-red s-red" fill-opacity="0.25" stroke-width="1.4"/><line x1="60" y1="205" x2="190" y2="205" class="s-gray" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/><text x="125" y="279" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-blue">π2p: side-by-side, in phase</text><circle cx="365" cy="205" r="3" fill="currentColor"/><circle cx="415" cy="205" r="3" fill="currentColor"/><ellipse cx="362" cy="171" rx="17" ry="22" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><ellipse cx="418" cy="171" rx="17" ry="22" class="f-red s-red" fill-opacity="0.25" stroke-width="1.4"/><ellipse cx="362" cy="239" rx="17" ry="22" class="f-red s-red" fill-opacity="0.25" stroke-width="1.4"/><ellipse cx="418" cy="239" rx="17" ry="22" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.4"/><line x1="330" y1="205" x2="450" y2="205" class="s-gray" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="390" y1="145" x2="390" y2="265" class="s-gray" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/><text x="390" y="279" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-red">π*2p: out of phase, extra node</text><text x="260" y="14" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">blue and red: opposite signs of the wavefunction · dashed: nodes</text></svg>',
};
// </figures>

// 1s-like orbitals on two nuclei at x = -d/2 and x = +d/2 (distances in bohr, a0 = 52.9 pm)
const P1 = 'e^(-abs(x + d/2))';
const P2 = 'e^(-abs(x - d/2))';
const S = 'e^(-d)(1 + d + d^2/3)'; // overlap integral of two hydrogen 1s orbitals

export const lesson: Lesson = {
  id: 'gchem-mo-theory',
  title: 'Molecular Orbital Theory',
  summary: 'Combine atomic orbitals into bonding and antibonding molecular orbitals, fill MO diagrams for H₂, He₂ and the second-period diatomics, compute bond orders, and see why O₂ is magnetic when Lewis structures say it should not be.',
  minutes: 22,
  objectives: [
    'Build bonding and antibonding molecular orbitals as sums and differences of atomic orbitals, and explain the energy difference through constructive and destructive interference',
    'Fill MO diagrams for H₂, He₂ and their ions, and compute bond order as ½(bonding − antibonding)',
    'Construct the second-period diatomic MO diagrams with and without s–p mixing, and predict bond order and magnetism for B₂ through F₂ and their ions',
    'Explain the paramagnetism of O₂ and why Lewis structures and valence bond theory miss it',
    'Describe heteronuclear diatomics (CO, NO, HF) qualitatively and identify the HOMO and LUMO of a molecule',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Adding and subtracting orbitals',
      blocks: [
        {
          type: 'p',
          text: 'Pour liquid oxygen between the poles of a strong magnet and it sticks there, bridging the gap. That means $\\ce{O2}$ has **unpaired electrons** (it is [[gchem-paramagnetic|paramagnetic]]). Yet its Lewis structure, $\\ce{O=O}$ with two lone pairs on each atom, pairs every electron, and valence bond theory agrees. Something is missing from both models.',
        },
        {
          type: 'p',
          text: 'Valence bond theory keeps electrons in orbitals that belong to one atom or one pair of atoms. [[gchem-molecular-orbital|Molecular orbital (MO) theory]] takes the quantum picture seriously for the whole molecule: electrons occupy orbitals that extend over **all** the nuclei. The standard way to build them is to combine atomic orbitals (LCAO, a linear combination of atomic orbitals). For two identical atoms A and B:',
        },
        {
          type: 'math',
          tex: '\\psi_{\\text{bonding}} = \\psi_A + \\psi_B, \\qquad \\psi_{\\text{antibonding}} = \\psi_A - \\psi_B',
          caption: 'Up to a normalization constant. Two atomic orbitals in, two molecular orbitals out: orbitals are always conserved.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-1.4, 2.2],
          xStep: 1,
          yStep: 0.5,
          functions: [
            { expr: P1, label: '$\\psi_A$', color: 'gray', dashed: true },
            { expr: P2, label: '$\\psi_B$', color: 'gray', dashed: true },
            { expr: `${P1} + ${P2}`, label: '$\\psi_A + \\psi_B$ (bonding)', color: 'blue' },
            { expr: `${P1} - ${P2}`, label: '$\\psi_A - \\psi_B$ (antibonding)', color: 'red' },
          ],
          points: [
            { x: '-d/2', y: 0, label: 'A', color: 'gray' },
            { x: 'd/2', y: 0, label: 'B', color: 'gray' },
          ],
          sliders: [{ name: 'd', min: 0.4, max: 6, step: 0.1, value: 1.4, label: 'nuclear separation $d$ (bohr; $1\\ \\text{bohr} = 52.9$ pm)' }],
          readouts: [
            { label: 'overlap integral $S = e^{-d}(1 + d + d^2/3) =$', expr: S, digits: 3 },
            { label: 'bonding amplitude at the midpoint $= 2e^{-d/2} =$', expr: '2e^(-d/2)', digits: 3 },
          ],
          caption: 'Two hydrogen 1s orbitals (dashed) along the bond axis, centered on A and B. Their sum (blue) piles up amplitude **between** the nuclei; their difference (red) passes through zero at the midpoint, a node. Pull the atoms apart ($d = 6$) and they stop overlapping: sum and difference each look like two separate atoms. At the real H₂ separation, $d = 1.4$, the overlap is $S \\approx 0.75$.',
        },
        {
          type: 'definition',
          term: 'Bonding and antibonding orbitals',
          text: 'A [[gchem-bonding-orbital|bonding MO]] comes from in-phase (constructive) combination; it concentrates electron density between the nuclei and lies **lower** in energy than the atomic orbitals. An [[gchem-antibonding-orbital|antibonding MO]] (marked with a star, $\\sigma^*$) comes from out-of-phase (destructive) combination; it has a [[gchem-node|node]] between the nuclei and lies **higher** in energy.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the in-phase combination is lower in energy',
          text: 'It is the same interference you know from waves. Where two waves meet in phase, amplitudes add; out of phase, they cancel. An electron in the bonding MO spends extra time between the nuclei, where it is attracted by both, so its energy drops. In the antibonding MO the electron is pushed out of that region and onto the far sides of the nuclei, where nothing shields the nuclei from each other, so its energy rises.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Using the graph\'s model, what is the probability density of an electron in the antibonding orbital $\\psi_A - \\psi_B$ exactly at the midpoint between the two nuclei?',
      options: [
        { text: 'Zero, at any separation', correct: true, why: 'At the midpoint $\\psi_A = \\psi_B$ by symmetry, so $\\psi_A - \\psi_B = 0$ and $|\\psi|^2 = 0$: a node.' },
        { text: 'Twice the density of one atom', why: 'That describes amplitudes adding, which is the bonding combination. In the antibonding one they subtract.' },
        { text: 'The same as for the separate atoms', why: 'The separate-atom (no-interference) density is $\\psi_A^2 + \\psi_B^2$, which is positive at the midpoint. Interference removes it in the antibonding MO.' },
        { text: 'Zero only when the atoms are far apart', why: 'It is the other way round: the node at the midpoint is exact at every separation, by symmetry. Far apart, the density there is small for every combination anyway.' },
      ],
      explanation: 'The two 1s orbitals have equal values at the midpoint (each is $e^{-d/2}$), so the difference vanishes there. The node in the antibonding orbital is a plane perpendicular to the bond, exactly halfway. This node is the signature of antibonding character.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'MO diagrams for H₂ and He₂, and bond order',
      blocks: [
        {
          type: 'p',
          text: 'Square the wavefunctions to see where the electron actually is. The graph compares each MO\'s density (normalized) with the density you would get from two non-interfering atoms, $\\tfrac12(\\psi_A^2 + \\psi_B^2)$.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [0, 1.6],
          xStep: 1,
          yStep: 0.5,
          functions: [
            { expr: `(${P1}^2 + ${P2}^2)/2`, label: 'no interference', color: 'gray', dashed: true },
            { expr: `(${P1} + ${P2})^2/(2(1 + ${S}))`, label: 'bonding $\\sigma$', color: 'blue' },
            { expr: `(${P1} - ${P2})^2/(2(1 - ${S}))`, label: 'antibonding $\\sigma^*$', color: 'red' },
          ],
          sliders: [{ name: 'd', min: 0.6, max: 4, step: 0.1, value: 1.4, label: 'nuclear separation $d$ (bohr)' }],
          readouts: [{ label: 'bonding density at the midpoint ÷ no-interference density $= \\tfrac{2}{1+S} =$', expr: `2/(1 + ${S})`, digits: 2 }],
          caption: 'Density along the bond axis. The bonding MO moves electron density **into** the region between the nuclei (14% more than no interference at $d = 1.4$); the antibonding MO moves it **out**, more strongly (its normalization factor $1/(1-S)$ is larger). That asymmetry is why an antibonding MO is raised in energy more than the bonding MO is lowered.',
        },
        {
          type: 'figure',
          svg: FIG.h2_he2,
          alt: 'Two MO energy diagrams. Left, H2: each H 1s level on the sides holds one electron; dashed lines connect them to a lower blue σ1s bonding level holding two paired electrons and a higher red σ*1s antibonding level that is empty; bond order ½(2 − 0) = 1. Right, He2: each He 1s holds two electrons; σ1s holds two and σ*1s holds two; bond order ½(2 − 2) = 0.',
          caption: 'Fill MOs exactly like atomic orbitals: lowest energy first, at most two electrons per orbital with opposite spins, and Hund\'s rule for orbitals of equal energy.',
        },
        {
          type: 'theorem',
          name: 'Bond order (MO theory)',
          tex: '\\text{bond order} = \\tfrac12\\,(\\text{electrons in bonding MOs} - \\text{electrons in antibonding MOs})',
          text: 'Bond order 0 means no net bond. Higher bond order means a shorter, stronger bond. Half-integer values are allowed.',
        },
        {
          type: 'derivation',
          title: 'Does $\\ce{He2}$ exist? And $\\ce{He2+}$?',
          steps: [
            { tex: '\\ce{He2}:\\ 4\\ e^-\\ \\to\\ (\\sigma_{1s})^2(\\sigma^*_{1s})^2', why: 'Two electrons from each He atom. Two go into the bonding MO, the next two must go into the antibonding MO.' },
            { tex: '\\text{BO} = \\tfrac12(2 - 2) = 0', why: 'The antibonding pair cancels the bonding pair (in fact slightly more than cancels, since $\\sigma^*$ is raised more than $\\sigma$ is lowered).' },
            { tex: '\\ce{He2+}:\\ 3\\ e^-\\ \\to\\ (\\sigma_{1s})^2(\\sigma^*_{1s})^1,\\quad \\text{BO} = \\tfrac12(2 - 1) = \\tfrac12', why: 'Remove one electron, from the highest occupied orbital, the antibonding one.' },
          ],
          result: '$\\ce{He2}$ does not form a chemical bond: helium is a monatomic gas. But $\\ce{He2+}$ is a real ion (seen in helium discharges), bond length 108 pm, bond energy about 240 kJ/mol. Removing an electron **strengthened** the bond, because it came out of an antibonding orbital.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'The hydride ion $\\ce{H-}$ can combine with H to form $\\ce{H2-}$ (three electrons in total). What is its bond order? Give a decimal or a fraction.',
      hint: 'Fill $\\sigma_{1s}$ first (two electrons), then $\\sigma^*_{1s}$.',
      label: 'bond order $=$',
      answer: '1/2',
      answerTex: '\\tfrac12',
      explanation: 'Configuration $(\\sigma_{1s})^2(\\sigma^*_{1s})^1$, so the bond order is $\\tfrac12(2 - 1) = \\tfrac12$: a weak bond, the same order as $\\ce{H2+}$ (one electron, $\\tfrac12(1 - 0)$) and $\\ce{He2+}$. Lewis structures cannot even draw half a bond; MO theory handles it naturally.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'σ and π MOs from p orbitals: the O₂ puzzle solved',
      blocks: [
        {
          type: 'p',
          text: 'In the second period the valence orbitals are 2s and 2p. Each pair of 2s orbitals gives $\\sigma_{2s}$ and $\\sigma^*_{2s}$. The 2p orbitals combine in two ways. Taking the bond as the $z$-axis, the two $2p_z$ orbitals point at each other and give $\\sigma_{2p}$ and $\\sigma^*_{2p}$. The $2p_x$ pair and the $2p_y$ pair overlap side by side and give two [[gchem-degenerate-orbitals|degenerate]] $\\pi_{2p}$ orbitals and two degenerate $\\pi^*_{2p}$ orbitals.',
        },
        {
          type: 'figure',
          svg: FIG.p_mos,
          alt: 'Four molecular orbital sketches with two nuclei each. σ2p: a large blue lobe enclosing both nuclei with small red lobes outside, density between nuclei. σ*2p: red, blue, node, red, blue along the axis, with a dashed node between the nuclei. π2p: a blue sausage above and a red sausage below the axis, nodal plane along the axis. π*2p: four lobes, blue and red alternating, with nodes along the axis and between the nuclei.',
          caption: 'Six 2p orbitals in, six MOs out: $\\sigma_{2p}$, two $\\pi_{2p}$, two $\\pi^*_{2p}$, $\\sigma^*_{2p}$. Every antibonding MO has a node cutting the bond between the nuclei.',
        },
        {
          type: 'p',
          text: 'For $\\ce{O2}$ and $\\ce{F2}$ the energy order is $\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p} < \\pi_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}$ (the right-hand diagram on the next card). $\\ce{O2}$ has $2 \\times 6 = 12$ valence electrons. After filling everything up to $\\pi_{2p}$ (10 electrons), two electrons remain for the two degenerate $\\pi^*_{2p}$ orbitals.',
        },
        {
          type: 'derivation',
          title: 'Molecular oxygen',
          steps: [
            { tex: '\\ce{O2}:\\ (\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4(\\pi^*_{2p})^2', why: '12 valence electrons, lowest energy first.' },
            { tex: '(\\pi^*_{2p})^2 = \\uparrow\\ \\ \\uparrow\\ \\text{(one in each, parallel spins)}', why: 'Hund\'s rule: electrons spread out over degenerate orbitals with parallel spins before pairing, exactly as in the $2p$ subshell of an N atom.' },
            { tex: '\\text{BO} = \\tfrac12(8 - 4) = 2', why: 'Bonding: $\\sigma_{2s}$, $\\sigma_{2p}$, $\\pi_{2p}$ hold 8. Antibonding: $\\sigma^*_{2s}$ and $\\pi^*_{2p}$ hold 4.' },
          ],
          result: 'A double bond (as Lewis said) **and** two unpaired electrons (as the magnet says). MO theory gets both right; this was one of its first great successes.',
        },
        {
          type: 'table',
          headers: ['Species', 'Electrons in $\\pi^*_{2p}$', 'Bond order', 'O–O length (pm)', 'Where you meet it'],
          rows: [
            ['$\\ce{O2+}$', '1', '2.5', '112', 'dioxygenyl salts, upper atmosphere'],
            ['$\\ce{O2}$', '2', '2', '121', 'air'],
            ['$\\ce{O2-}$ (superoxide)', '3', '1.5', '133', '$\\ce{KO2}$ in emergency oxygen generators'],
            ['$\\ce{O2^2-}$ (peroxide)', '4', '1', '149', '$\\ce{H2O2}$, $\\ce{Na2O2}$'],
          ],
          caption: 'Each electron added to $\\pi^*$ lowers the bond order by ½ and lengthens the bond. Potassium superoxide in rebreathers and self-rescuers both absorbs exhaled $\\ce{CO2}$ and releases oxygen: $\\ce{4KO2 + 2CO2 -> 2K2CO3 + 3O2}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why Lewis structures miss it',
          text: 'A Lewis structure insists that electrons come in localized pairs: bonds or lone pairs. Oxygen\'s two highest electrons occupy two different, equal-energy orbitals that each spread over **both** atoms. There is no Lewis drawing for "one electron in each of two delocalized antibonding orbitals". The unpaired electrons also explain why $\\ce{O2}$ behaves in many reactions like a (slow, selective) diradical.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'What is the bond order of the superoxide ion, $\\ce{O2-}$? Use the $\\ce{O2}$ diagram and add one electron.',
      hint: '$\\ce{O2-}$ has 13 valence electrons. The extra one goes into $\\pi^*_{2p}$.',
      label: 'bond order $=$',
      answer: '3/2',
      answerTex: '1.5',
      explanation: 'Configuration $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4(\\pi^*_{2p})^3$: 8 bonding and 5 antibonding electrons, so BO $= \\tfrac12(8 - 5) = 1.5$. The bond is longer and weaker than in $\\ce{O2}$ (133 versus 121 pm), and with an odd electron count, superoxide is a radical with one unpaired electron.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'Adding an electron to a diatomic molecule always makes its bond stronger, because there are more electrons holding the atoms together.',
      answer: false,
      explanation: 'It depends on which orbital receives the electron. Into a bonding MO (as in $\\ce{N2+} \\to \\ce{N2}$), the bond order rises and the bond strengthens. Into an antibonding MO (as in $\\ce{O2} \\to \\ce{O2-}$, BO 2 → 1.5), the bond weakens. Likewise, **removing** an electron strengthens the bond when it comes from an antibonding orbital: $\\ce{O2+}$ (BO 2.5) has a shorter, stronger bond than $\\ce{O2}$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Second-period diatomics and s–p mixing',
      blocks: [
        {
          type: 'p',
          text: 'There is a twist on the left side of period 2. In B, C and N the 2s and 2p energies are fairly close, so the $\\sigma_{2s}$ and $\\sigma_{2p}$ orbitals (same symmetry) interact and push each other apart. This [[gchem-sp-mixing|s–p mixing]] raises $\\sigma_{2p}$ **above** the $\\pi_{2p}$ pair. In O and F the 2s lies far below 2p, the mixing is weak, and the "expected" order returns.',
        },
        {
          type: 'figure',
          svg: FIG.diatomics,
          alt: 'Two MO energy-level diagrams. Left, for B2, C2 and N2, filled for N2 with 10 electrons: from bottom σ2s (2), σ*2s (2), a pair of π2p (2 each), σ2p (2), then empty π*2p pair and σ*2p; bond order 3, all paired. Right, for O2 and F2, filled for O2 with 12 electrons: σ2s (2), σ*2s (2), σ2p (2), π2p pair (2 each), π*2p pair with one electron each, parallel spins, and empty σ*2p; bond order 2, two unpaired.',
          caption: 'Blue: bonding. Red: antibonding. The only difference between the two diagrams is the order of $\\sigma_{2p}$ and $\\pi_{2p}$. For N₂ it does not change the bond order, but for B₂ and C₂ it changes the magnetism.',
        },
        {
          type: 'table',
          headers: ['Molecule', 'Valence $e^-$', 'Bond order', 'Unpaired', 'Length (pm)', 'Bond energy (kJ/mol)'],
          rows: [
            ['$\\ce{Li2}$', '2', '1', '0', '267', '≈ 105'],
            ['$\\ce{Be2}$', '4', '0', '0', '—', 'essentially unbound'],
            ['$\\ce{B2}$', '6', '1', '**2**', '159', '≈ 290'],
            ['$\\ce{C2}$', '8', '2', '0', '124', '≈ 600'],
            ['$\\ce{N2}$', '10', '3', '0', '110', '945'],
            ['$\\ce{O2}$', '12', '2', '**2**', '121', '498'],
            ['$\\ce{F2}$', '14', '1', '0', '142', '159'],
            ['$\\ce{Ne2}$', '16', '0', '0', '—', 'not bonded'],
          ],
          caption: 'Gas-phase molecules (rounded experimental values). Bond order rises to a maximum at $\\ce{N2}$ and falls again, and bond length and bond energy track it. $\\ce{B2}$ and $\\ce{O2}$ are paramagnetic.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'B₂ is the evidence for s–p mixing',
          text: '$\\ce{B2}$ has 6 valence electrons. After $\\sigma_{2s}^2\\,\\sigma^{*2}_{2s}$, two remain. Without mixing they would pair up in $\\sigma_{2p}$ and $\\ce{B2}$ would be [[gchem-diamagnetic|diamagnetic]]. With mixing, the lowest available level is the degenerate $\\pi_{2p}$ pair, and Hund\'s rule puts one electron in each: paramagnetic. Experiment says paramagnetic. Likewise $\\ce{C2}$ ($\\pi_{2p}^4$, all paired) is diamagnetic, which only the mixed order predicts.',
        },
        {
          type: 'derivation',
          title: 'Nitrogen\'s triple bond',
          steps: [
            { tex: '\\ce{N2}:\\ (\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\pi_{2p})^4(\\sigma_{2p})^2', why: '10 valence electrons in the mixed order.' },
            { tex: '\\text{BO} = \\tfrac12(8 - 2) = 3', why: '8 in bonding orbitals ($\\sigma_{2s}$, $\\pi_{2p}$, $\\sigma_{2p}$), 2 in $\\sigma^*_{2s}$.' },
          ],
          result: 'A triple bond with every antibonding 2p orbital empty: the strongest bond of any homonuclear diatomic (945 kJ/mol). It is why $\\ce{N2}$ makes up 78% of the air and barely reacts, and why so much energy is released when nitrogen compounds re-form $\\ce{N2}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: 'Order the valence molecular orbitals of $\\ce{N2}$ from lowest to highest energy.',
      lines: ['$\\sigma_{2s}$', '$\\sigma^*_{2s}$', '$\\pi_{2p}$ (two orbitals)', '$\\sigma_{2p}$', '$\\pi^*_{2p}$ (two orbitals)', '$\\sigma^*_{2p}$'],
      explanation: 'For B₂, C₂ and N₂, s–p mixing pushes $\\sigma_{2p}$ above $\\pi_{2p}$. For O₂ and F₂ the order of those two is reversed ($\\sigma_{2p}$ below $\\pi_{2p}$). In every case the 2s-derived MOs are lowest, and each antibonding MO lies above its bonding partner. $\\ce{N2}$ fills through $\\sigma_{2p}$: its HOMO is $\\sigma_{2p}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'How many unpaired electrons does the dicarbon anion $\\ce{C2-}$ have? Use the s–p mixed diagram.',
      hint: '$\\ce{C2}$ has 8 valence electrons: $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\pi_{2p})^4$. Where does a ninth go?',
      label: 'unpaired electrons $=$',
      answer: '1',
      explanation: 'The ninth electron goes into the next level up, $\\sigma_{2p}$ (above $\\pi_{2p}$ because of mixing), so $\\ce{C2-}$ has one unpaired electron and bond order $\\tfrac12(7 - 2) = 2.5$. Without mixing the order would give $(\\sigma_{2p})^2(\\pi_{2p})^3$, also with one unpaired electron, so for $\\ce{C2-}$ the two orderings happen to agree. They disagree for $\\ce{B2}$ and $\\ce{C2}$ themselves, which is how the mixing was confirmed.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Heteronuclear diatomics: CO, NO and HF',
      blocks: [
        {
          type: 'p',
          text: 'When the two atoms differ, their atomic orbitals start at different energies: the more electronegative atom\'s orbitals lie **lower**. The bonding MO then resembles the lower (more electronegative) atom\'s orbital more, and the antibonding MO resembles the higher one. In the limit of a very large energy gap, the "bonding MO" is essentially the anion\'s orbital: the bond has become ionic.',
        },
        {
          type: 'graph',
          x: [0, 8],
          y: [-5, 5],
          xStep: 1,
          yStep: 1,
          functions: [
            { expr: 'sqrt(x^2/4 + b^2)', label: 'antibonding MO', color: 'red' },
            { expr: '-sqrt(x^2/4 + b^2)', label: 'bonding MO', color: 'blue' },
            { expr: 'x/2', label: 'AO of less electronegative atom', color: 'gray', dashed: true },
            { expr: '-x/2', label: 'AO of more electronegative atom', color: 'gray', dashed: true },
          ],
          vlines: [{ x: 'g', color: 'green' }],
          sliders: [
            { name: 'b', min: 0.5, max: 3, step: 0.1, value: 1.5, label: 'interaction strength $|\\beta|$ (eV)' },
            { name: 'g', min: 0, max: 8, step: 0.1, value: 2, label: 'AO energy gap $\\Delta$ (eV)' },
          ],
          readouts: [
            { label: 'bonding MO stabilization below the lower AO (eV) $=$', expr: 'sqrt(g^2/4 + b^2) - g/2', digits: 2 },
            { label: 'share of the bonding MO on the more electronegative atom $=$', expr: '(1 + g/sqrt(g^2 + 4b^2))/2', digits: 2 },
          ],
          caption: 'MO energies from a two-orbital model, measured from the average of the two atomic orbital energies. At $\\Delta = 0$ (identical atoms) the split is largest, $\\pm|\\beta|$, and the bonding MO is shared 50:50. As the gap grows, the bonding MO hugs the lower atomic orbital: the covalent stabilization shrinks and the electrons move onto one atom. That is the polar-covalent to ionic continuum from Foundations, as an energy diagram.',
        },
        {
          type: 'deepdive',
          title: 'MO energies are eigenvalues',
          blocks: [
            {
              type: 'p',
              text: 'In the simplest (Hückel) model, the two MOs are the eigenvectors of a $2 \\times 2$ symmetric matrix whose diagonal holds the atomic orbital energies and whose off-diagonal holds the interaction $\\beta$ (negative):',
            },
            {
              type: 'math',
              tex: 'H = \\begin{pmatrix} \\alpha_A & \\beta \\\\ \\beta & \\alpha_B \\end{pmatrix}, \\qquad E_\\pm = \\frac{\\alpha_A + \\alpha_B}{2} \\pm \\sqrt{\\left(\\frac{\\alpha_A - \\alpha_B}{2}\\right)^2 + \\beta^2}',
              caption: 'For identical atoms ($\\alpha_A = \\alpha_B = \\alpha$) the eigenvalues are $\\alpha \\pm \\beta$ with eigenvectors $\\tfrac{1}{\\sqrt2}(1, \\pm 1)$: exactly $\\psi_A \\pm \\psi_B$.',
            },
            {
              type: 'p',
              text: 'Real quantum chemistry programs do the same thing with matrices of hundreds or thousands of basis functions: build the matrix, diagonalize it (`numpy.linalg.eigh` in Python), fill the lowest eigenvectors with electrons. The linear algebra you know is literally how molecular orbitals are computed.',
            },
          ],
        },
        {
          type: 'list',
          items: [
            '**CO** (10 valence electrons, like $\\ce{N2}$): bond order 3, 113 pm, 1072 kJ/mol, the strongest known chemical bond. Its HOMO is a σ orbital concentrated on **carbon**, which is why CO binds metals (including the iron in hemoglobin) through the C atom. That tight binding, about 200 times stronger than $\\ce{O2}$\'s, is what makes carbon monoxide from generators and heaters so dangerous in enclosed spaces.',
            '**NO** (11 valence electrons): the extra electron goes into a $\\pi^*$ orbital: bond order 2.5, one unpaired electron. MO theory explains the radical you drew awkwardly with a Lewis structure, and predicts that removing that electron gives $\\ce{NO+}$ with bond order 3 and a shorter bond (106 versus 115 pm), as observed.',
            '**HF**: the H 1s orbital mixes with the F 2p orbital that points at it to form a σ bonding MO that lies mostly on F (a polar bond). The other F 2p orbitals have no partner of matching symmetry on H, so they stay as **nonbonding** orbitals: the lone pairs.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Nitric oxide, $\\ce{NO}$, has 11 valence electrons and an MO diagram like that of $\\ce{O2}$ (with O\'s orbitals a little lower). Which description is correct?',
      options: [
        { text: 'Bond order 2.5, paramagnetic', correct: true, why: '8 bonding and 3 antibonding electrons (the last one alone in $\\pi^*$): $\\tfrac12(8 - 3) = 2.5$, and one unpaired electron.' },
        { text: 'Bond order 2, paramagnetic', why: 'Bond order 2 is $\\ce{O2}$ (12 electrons). NO has one fewer antibonding electron.' },
        { text: 'Bond order 3, diamagnetic', why: 'That is $\\ce{NO+}$ (10 electrons, isoelectronic with $\\ce{N2}$ and CO), after the $\\pi^*$ electron is removed.' },
        { text: 'Bond order 2.5, diamagnetic', why: 'An odd number of electrons can never be completely paired: NO must have at least one unpaired electron.' },
      ],
      explanation: 'Fill 11 electrons: $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4(\\pi^*_{2p})^1$. Bonding 8, antibonding 3: BO 2.5. The lone $\\pi^*$ electron makes NO a radical, and losing it is easy, which is why $\\ce{NO+}$ (BO 3) is a common ion.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'HOMO, LUMO and what MO theory buys you',
      blocks: [
        {
          type: 'p',
          text: 'Two orbitals deserve names because most chemistry happens there. The [[gchem-homo-lumo|HOMO]] is the highest occupied molecular orbital, holding the most loosely bound electrons: the ones a molecule gives away when it acts as an electron donor (a base, a nucleophile, a reducing agent). The **LUMO** is the lowest unoccupied molecular orbital: where a molecule accepts electrons.',
        },
        {
          type: 'table',
          headers: ['Molecule', 'HOMO', 'LUMO', 'Consequence'],
          rows: [
            ['$\\ce{N2}$', '$\\sigma_{2p}$', '$\\pi^*_{2p}$', 'large HOMO–LUMO gap and a triple bond: very unreactive'],
            ['$\\ce{O2}$', '$\\pi^*_{2p}$ (half filled)', '$\\pi^*_{2p}$ (same pair) / $\\sigma^*_{2p}$', 'can accept electrons into $\\pi^*$: a good oxidizer, forms $\\ce{O2-}$ and $\\ce{O2^2-}$'],
            ['$\\ce{CO}$', 'σ, mostly on C', '$\\pi^*$, mostly on C', 'donates from C and accepts back into $\\pi^*$: binds metals strongly'],
            ['$\\ce{F2}$', '$\\pi^*_{2p}$', '$\\sigma^*_{2p}$', 'low-lying empty $\\sigma^*$ accepts electrons and breaks the bond: violent oxidizer'],
          ],
        },
        {
          type: 'p',
          text: 'The HOMO–LUMO gap also sets the lowest-energy light a molecule absorbs. In large molecules with many delocalized π electrons (dyes, the retinal in your eye, the polymers in OLED screens) the gap shrinks into the visible range, which is why those molecules are colored. Organic chemistry builds heavily on this idea.',
        },
        {
          type: 'compare',
          left: {
            title: 'Lewis / valence bond',
            tone: 'neutral',
            text: 'Localized pairs between two atoms. Fast, intuitive, predicts shapes with VSEPR and hybrids. Misses $\\ce{O2}$ paramagnetism, needs resonance for delocalization, cannot describe half bonds well.',
          },
          right: {
            title: 'Molecular orbital',
            tone: 'neutral',
            text: 'Orbitals over the whole molecule. Explains magnetism, fractional bond orders, ions like $\\ce{He2+}$, color and HOMO/LUMO reactivity, and is how computers calculate molecules. Harder to draw for big molecules.',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What is tested',
          text: 'Expect to fill an MO diagram for a second-period diatomic or ion, state which ordering applies (mixed for up to $\\ce{N2}$, unmixed for $\\ce{O2}$, $\\ce{F2}$), then compute bond order, count unpaired electrons, and rank bond length or strength. The classic error: forgetting to adjust the electron count for charge, or adding electrons for a positive charge.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student finds the bond order of the peroxide ion, $\\ce{O2^2-}$. Tap the first line that is wrong.',
      lines: [
        'Each O atom has 6 valence electrons, so neutral $\\ce{O2}$ has 12.',
        'The $2-$ charge means two fewer electrons: $12 - 2 = 10$.',
        'Fill: $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4$, 8 bonding and 2 antibonding.',
        'Bond order $= \\tfrac12(8 - 2) = 3$.',
      ],
      errorLines: [2],
      explanation: 'A negative charge means **extra** electrons: $12 + 2 = 14$. Then $\\pi^*_{2p}$ is completely filled: $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2p})^2(\\pi_{2p})^4(\\pi^*_{2p})^4$, 8 bonding and 6 antibonding, bond order $\\tfrac12(8 - 6) = 1$. That matches the O–O single bond in hydrogen peroxide (149 pm), and peroxide is diamagnetic. A bond order of 3 for a species with more electrons than $\\ce{O2}$ should have been a red flag.',
    },
  ],
  takeaways: [
    'MOs are linear combinations of atomic orbitals: $\\psi_A + \\psi_B$ (bonding, density between the nuclei, lower energy) and $\\psi_A - \\psi_B$ (antibonding, node between the nuclei, higher energy). $n$ AOs give $n$ MOs.',
    'Bond order $= \\tfrac12$(bonding − antibonding electrons): H₂ 1, He₂ 0 (does not exist), He₂⁺ and H₂⁻ ½.',
    '2p orbitals give σ₂p/σ*₂p (end-on) and two π₂p/π*₂p (side-on). For O₂ and F₂, σ₂p lies below π₂p; for B₂, C₂ and N₂, s–p mixing puts σ₂p above π₂p.',
    'O₂ has bond order 2 and two unpaired π* electrons: MO theory explains its paramagnetism, which Lewis structures cannot. B₂ is paramagnetic too, the evidence for s–p mixing.',
    'Adding electrons to π* (O₂ → O₂⁻ → O₂²⁻) lowers bond order (2 → 1.5 → 1) and lengthens the bond; removing one (O₂⁺) raises it.',
    'In heteronuclear diatomics the bonding MO lies closer to the more electronegative atom\'s orbital (CO, NO, HF); the HOMO and LUMO are where molecules donate and accept electrons.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 8: Advanced Theories of Covalent Bonding',
      url: 'https://openstax.org/books/chemistry-2e/pages/8-introduction',
      source: 'openstax',
      note: 'Section 8.4 covers molecular orbital theory, MO diagrams for second-period diatomics, s–p mixing and the paramagnetism of oxygen.',
    },
    {
      title: 'Wikipedia — Molecular orbital diagram',
      url: 'https://en.wikipedia.org/wiki/Molecular_orbital_diagram',
      source: 'wikipedia',
      note: 'Diagrams for every second-period diatomic, with bond orders and the experimental evidence for s–p mixing.',
    },
    {
      title: 'MIT OpenCourseWare 5.111 Principles of Chemical Science',
      url: 'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/',
      source: 'other',
      note: 'The lectures on MO theory (search the lecture list for "molecular orbital theory") work through homonuclear and heteronuclear diatomics at this level.',
    },
    {
      title: 'Wikipedia — HOMO and LUMO',
      url: 'https://en.wikipedia.org/wiki/HOMO_and_LUMO',
      source: 'wikipedia',
      note: 'Frontier orbitals, the HOMO–LUMO gap, and its link to color and reactivity.',
    },
  ],
};
