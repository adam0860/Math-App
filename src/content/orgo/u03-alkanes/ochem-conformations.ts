import type { Lesson } from '../../types';

// <figures> (hand-written Newman projections; strain sums checked against the cost table)
const FIG = {
  c_butane: '<svg viewBox="0 0 520 205" xmlns="http://www.w3.org/2000/svg"><line x1="68.0" y1="102.0" x2="68.0" y2="126.0" stroke="currentColor" stroke-width="2"/><line x1="48.9" y1="69.0" x2="28.2" y2="57.0" stroke="currentColor" stroke-width="2"/><line x1="87.1" y1="69.0" x2="107.8" y2="57.0" stroke="currentColor" stroke-width="2"/><circle cx="68" cy="80" r="22" fill="none" stroke="currentColor" stroke-width="2"/><line x1="68" y1="80" x2="68.0" y2="34.0" stroke="currentColor" stroke-width="2"/><line x1="68" y1="80" x2="107.8" y2="103.0" stroke="currentColor" stroke-width="2"/><line x1="68" y1="80" x2="28.2" y2="103.0" stroke="currentColor" stroke-width="2"/><circle cx="68" cy="80" r="2.6" fill="currentColor"/><text x="68.0" y="18.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="121.7" y="111.0" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="14.3" y="111.0" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="68.0" y="142.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="14.3" y="49.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="121.7" y="49.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="68" y="172" text-anchor="middle" font-size="13" font-weight="600">anti, 180°</text><text x="68" y="190" text-anchor="middle" font-size="12.5" class="t-green">0 kJ/mol</text><line x1="215.1" y1="69.0" x2="235.8" y2="57.0" stroke="currentColor" stroke-width="2"/><line x1="196.0" y1="102.0" x2="196.0" y2="126.0" stroke="currentColor" stroke-width="2"/><line x1="176.9" y1="69.0" x2="156.2" y2="57.0" stroke="currentColor" stroke-width="2"/><circle cx="196" cy="80" r="22" fill="none" stroke="currentColor" stroke-width="2"/><line x1="196" y1="80" x2="196.0" y2="34.0" stroke="currentColor" stroke-width="2"/><line x1="196" y1="80" x2="235.8" y2="103.0" stroke="currentColor" stroke-width="2"/><line x1="196" y1="80" x2="156.2" y2="103.0" stroke="currentColor" stroke-width="2"/><circle cx="196" cy="80" r="2.6" fill="currentColor"/><text x="196.0" y="18.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="249.7" y="111.0" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="142.3" y="111.0" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="249.7" y="49.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="196.0" y="142.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="142.3" y="49.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="196" y="172" text-anchor="middle" font-size="13" font-weight="600">gauche, 60°</text><text x="196" y="190" text-anchor="middle" font-size="12.5" class="t-orange">3.8 (CH₃/CH₃ gauche)</text><line x1="340.9" y1="94.1" x2="359.2" y2="109.6" stroke="currentColor" stroke-width="2"/><line x1="303.3" y1="87.5" x2="280.8" y2="95.7" stroke="currentColor" stroke-width="2"/><line x1="327.8" y1="58.3" x2="332.0" y2="34.7" stroke="currentColor" stroke-width="2"/><circle cx="324" cy="80" r="22" fill="none" stroke="currentColor" stroke-width="2"/><line x1="324" y1="80" x2="324.0" y2="34.0" stroke="currentColor" stroke-width="2"/><line x1="324" y1="80" x2="363.8" y2="103.0" stroke="currentColor" stroke-width="2"/><line x1="324" y1="80" x2="284.2" y2="103.0" stroke="currentColor" stroke-width="2"/><circle cx="324" cy="80" r="2.6" fill="currentColor"/><text x="309.0" y="19.8" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="383.6" y="97.1" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="279.4" y="123.1" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="356.9" y="132.6" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="262.0" y="82.2" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="353.1" y="25.3" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="324" y="172" text-anchor="middle" font-size="13" font-weight="600">eclipsed, 120°</text><text x="324" y="190" text-anchor="middle" font-size="12.5" class="t-red">16 (2 CH₃/H + H/H)</text><line x1="455.8" y1="58.3" x2="460.0" y2="34.7" stroke="currentColor" stroke-width="2"/><line x1="468.9" y1="94.1" x2="487.2" y2="109.6" stroke="currentColor" stroke-width="2"/><line x1="431.3" y1="87.5" x2="408.8" y2="95.7" stroke="currentColor" stroke-width="2"/><circle cx="452" cy="80" r="22" fill="none" stroke="currentColor" stroke-width="2"/><line x1="452" y1="80" x2="452.0" y2="34.0" stroke="currentColor" stroke-width="2"/><line x1="452" y1="80" x2="491.8" y2="103.0" stroke="currentColor" stroke-width="2"/><line x1="452" y1="80" x2="412.2" y2="103.0" stroke="currentColor" stroke-width="2"/><circle cx="452" cy="80" r="2.6" fill="currentColor"/><text x="437.0" y="19.8" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="511.6" y="97.1" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="407.4" y="123.1" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="481.1" y="25.3" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="484.9" y="132.6" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="390.0" y="82.2" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="452" y="172" text-anchor="middle" font-size="13" font-weight="600">syn, 0°</text><text x="452" y="190" text-anchor="middle" font-size="12.5" class="t-red">19 (CH₃/CH₃ + 2 H/H)</text></svg>',
  c_ethane: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg"><line x1="152.5" y1="92.0" x2="178.5" y2="77.0" stroke="currentColor" stroke-width="2"/><line x1="130.0" y1="131.0" x2="130.0" y2="161.0" stroke="currentColor" stroke-width="2"/><line x1="107.5" y1="92.0" x2="81.5" y2="77.0" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="105" r="26" fill="none" stroke="currentColor" stroke-width="2"/><line x1="130" y1="105" x2="130.0" y2="49.0" stroke="currentColor" stroke-width="2"/><line x1="130" y1="105" x2="178.5" y2="133.0" stroke="currentColor" stroke-width="2"/><line x1="130" y1="105" x2="81.5" y2="133.0" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="105" r="2.6" fill="currentColor"/><text x="130.0" y="35.0" text-anchor="middle" dominant-baseline="central" font-size="14">H</text><text x="190.6" y="140.0" text-anchor="middle" dominant-baseline="central" font-size="14">H</text><text x="69.4" y="140.0" text-anchor="middle" dominant-baseline="central" font-size="14">H</text><text x="190.6" y="70.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-gray">H</text><text x="130.0" y="175.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-gray">H</text><text x="69.4" y="70.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-gray">H</text><text x="130" y="205" text-anchor="middle" font-size="13">staggered (dihedral 60°)</text><text x="130" y="224" text-anchor="middle" font-size="13" class="t-green">0 kJ/mol</text><line x1="394.5" y1="79.4" x2="399.7" y2="49.9" stroke="currentColor" stroke-width="2"/><line x1="409.9" y1="121.7" x2="432.9" y2="141.0" stroke="currentColor" stroke-width="2"/><line x1="365.6" y1="113.9" x2="337.4" y2="124.2" stroke="currentColor" stroke-width="2"/><circle cx="390" cy="105" r="26" fill="none" stroke="currentColor" stroke-width="2"/><line x1="390" y1="105" x2="390.0" y2="49.0" stroke="currentColor" stroke-width="2"/><line x1="390" y1="105" x2="438.5" y2="133.0" stroke="currentColor" stroke-width="2"/><line x1="390" y1="105" x2="341.5" y2="133.0" stroke="currentColor" stroke-width="2"/><circle cx="390" cy="105" r="2.6" fill="currentColor"/><text x="375.0" y="34.6" text-anchor="middle" dominant-baseline="central" font-size="14">H</text><text x="458.5" y="127.2" text-anchor="middle" dominant-baseline="central" font-size="14">H</text><text x="336.5" y="153.2" text-anchor="middle" dominant-baseline="central" font-size="14">H</text><text x="419.3" y="39.2" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-gray">H</text><text x="432.3" y="163.2" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-gray">H</text><text x="318.4" y="112.5" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-gray">H</text><text x="390" y="205" text-anchor="middle" font-size="13">eclipsed (dihedral 0°)</text><text x="390" y="224" text-anchor="middle" font-size="13" class="t-red">+12 kJ/mol: 3 × (H↔H eclipsed, 4.0)</text></svg>',
  c_quiz: '<svg viewBox="0 0 520 232" xmlns="http://www.w3.org/2000/svg"><line x1="108.8" y1="78.0" x2="131.3" y2="65.0" stroke="currentColor" stroke-width="2"/><line x1="88.0" y1="114.0" x2="88.0" y2="140.0" stroke="currentColor" stroke-width="2"/><line x1="67.2" y1="78.0" x2="44.7" y2="65.0" stroke="currentColor" stroke-width="2"/><circle cx="88" cy="90" r="24" fill="none" stroke="currentColor" stroke-width="2"/><line x1="88" y1="90" x2="88.0" y2="40.0" stroke="currentColor" stroke-width="2"/><line x1="88" y1="90" x2="131.3" y2="115.0" stroke="currentColor" stroke-width="2"/><line x1="88" y1="90" x2="44.7" y2="115.0" stroke="currentColor" stroke-width="2"/><circle cx="88" cy="90" r="2.6" fill="currentColor"/><text x="88.0" y="24.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="145.2" y="123.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="30.8" y="123.0" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="145.2" y="57.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-red">CH₃</text><text x="88.0" y="156.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="30.8" y="57.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="88" y="190" text-anchor="middle" font-size="15" font-weight="600">A</text><line x1="260.0" y1="114.0" x2="260.0" y2="140.0" stroke="currentColor" stroke-width="2"/><line x1="239.2" y1="78.0" x2="216.7" y2="65.0" stroke="currentColor" stroke-width="2"/><line x1="280.8" y1="78.0" x2="303.3" y2="65.0" stroke="currentColor" stroke-width="2"/><circle cx="260" cy="90" r="24" fill="none" stroke="currentColor" stroke-width="2"/><line x1="260" y1="90" x2="260.0" y2="40.0" stroke="currentColor" stroke-width="2"/><line x1="260" y1="90" x2="303.3" y2="115.0" stroke="currentColor" stroke-width="2"/><line x1="260" y1="90" x2="216.7" y2="115.0" stroke="currentColor" stroke-width="2"/><circle cx="260" cy="90" r="2.6" fill="currentColor"/><text x="260.0" y="24.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="317.2" y="123.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="202.8" y="123.0" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="260.0" y="156.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-red">CH₃</text><text x="202.8" y="57.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="317.2" y="57.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="260" y="190" text-anchor="middle" font-size="15" font-weight="600">B</text><line x1="436.2" y1="66.4" x2="440.7" y2="40.8" stroke="currentColor" stroke-width="2"/><line x1="450.4" y1="105.4" x2="470.3" y2="122.1" stroke="currentColor" stroke-width="2"/><line x1="409.4" y1="98.2" x2="385.0" y2="107.1" stroke="currentColor" stroke-width="2"/><circle cx="432" cy="90" r="24" fill="none" stroke="currentColor" stroke-width="2"/><line x1="432" y1="90" x2="432.0" y2="40.0" stroke="currentColor" stroke-width="2"/><line x1="432" y1="90" x2="475.3" y2="115.0" stroke="currentColor" stroke-width="2"/><line x1="432" y1="90" x2="388.7" y2="115.0" stroke="currentColor" stroke-width="2"/><circle cx="432" cy="90" r="2.6" fill="currentColor"/><text x="416.0" y="26.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="495.4" y="108.2" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-blue">CH₃</text><text x="384.5" y="135.8" text-anchor="middle" dominant-baseline="central" font-size="13">H</text><text x="463.0" y="31.7" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-red">CH₃</text><text x="467.0" y="146.0" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="366.0" y="92.3" text-anchor="middle" dominant-baseline="central" font-size="13" class="t-gray">H</text><text x="432" y="190" text-anchor="middle" font-size="15" font-weight="600">C</text><text x="260" y="222" text-anchor="middle" font-size="12" class="t-gray">front carbon C2 (blue CH₃ groups); back carbon C3 (red CH₃)</text></svg>',
  c_view: '<svg viewBox="0 0 560 265" xmlns="http://www.w3.org/2000/svg"><line x1="95.0" y1="135.0" x2="165.0" y2="65.0" stroke="currentColor" stroke-width="2.4"/><line x1="95.0" y1="135.0" x2="95.0" y2="173.0" stroke="currentColor" stroke-width="2"/><text x="95.0" y="185.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-blue">H</text><line x1="95.0" y1="135.0" x2="59.3" y2="122.0" stroke="currentColor" stroke-width="2"/><text x="48.0" y="117.9" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-blue">H</text><line x1="95.0" y1="135.0" x2="130.7" y2="122.0" stroke="currentColor" stroke-width="2"/><text x="142.0" y="117.9" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-blue">H</text><line x1="165.0" y1="65.0" x2="165.0" y2="27.0" stroke="currentColor" stroke-width="2"/><text x="165.0" y="15.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">H</text><line x1="165.0" y1="65.0" x2="129.3" y2="78.0" stroke="currentColor" stroke-width="2"/><text x="118.0" y="82.1" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">H</text><line x1="165.0" y1="65.0" x2="200.7" y2="78.0" stroke="currentColor" stroke-width="2"/><text x="212.0" y="82.1" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">H</text><circle cx="95" cy="135" r="3" fill="currentColor"/><circle cx="165" cy="65" r="3" fill="currentColor"/><text x="71" y="141" text-anchor="middle" font-size="12" class="t-blue">C₁</text><text x="185" y="51" text-anchor="middle" font-size="12" class="t-red">C₂</text><line x1="28.0" y1="200.0" x2="68.0" y2="160.0" stroke="currentColor" stroke-width="1.8" class="s-gray"/><path d="M68.0,160.0 L64.6,168.3 L59.7,163.4 Z" fill="currentColor" class="s-gray"/><text x="30" y="218" text-anchor="middle" font-size="12" class="t-gray">your eye</text><text x="110" y="250" text-anchor="middle" font-size="13">sawhorse</text><line x1="235.0" y1="110.0" x2="295.0" y2="110.0" stroke="currentColor" stroke-width="1.8"/><path d="M295.0,110.0 L286.7,113.5 L286.7,106.5 Z" fill="currentColor"/><text x="265" y="98" text-anchor="middle" font-size="11" class="t-gray">look down</text><text x="265" y="128" text-anchor="middle" font-size="11" class="t-gray">C₁→C₂</text><line x1="427.5" y1="102.0" x2="453.5" y2="87.0" stroke="currentColor" stroke-width="2"/><line x1="405.0" y1="141.0" x2="405.0" y2="171.0" stroke="currentColor" stroke-width="2"/><line x1="382.5" y1="102.0" x2="356.5" y2="87.0" stroke="currentColor" stroke-width="2"/><circle cx="405" cy="115" r="26" fill="none" stroke="currentColor" stroke-width="2"/><line x1="405" y1="115" x2="405.0" y2="59.0" stroke="currentColor" stroke-width="2"/><line x1="405" y1="115" x2="453.5" y2="143.0" stroke="currentColor" stroke-width="2"/><line x1="405" y1="115" x2="356.5" y2="143.0" stroke="currentColor" stroke-width="2"/><circle cx="405" cy="115" r="2.6" fill="currentColor"/><text x="405.0" y="45.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-blue">H</text><text x="465.6" y="150.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-blue">H</text><text x="344.4" y="150.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-blue">H</text><text x="465.6" y="80.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">H</text><text x="405.0" y="185.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">H</text><text x="344.4" y="80.0" text-anchor="middle" dominant-baseline="central" font-size="14" class="t-red">H</text><text x="405" y="250" text-anchor="middle" font-size="13">Newman projection</text><text x="470" y="40" text-anchor="start" font-size="11" class="t-blue">front C₁: bonds</text><text x="470" y="54" text-anchor="start" font-size="11" class="t-blue">meet at center</text><text x="462" y="185" text-anchor="start" font-size="11" class="t-red">back C₂: bonds</text><text x="462" y="199" text-anchor="start" font-size="11" class="t-red">start at circle</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-conformations',
  title: 'Conformations and Newman Projections',
  summary: 'Rotation about single bonds: sawhorse and Newman projections, staggered and eclipsed ethane, torsional and steric strain, the anti and gauche conformations of butane, an energy-versus-dihedral curve you can explore, and how ΔG sets the population of each conformer.',
  minutes: 19,
  objectives: [
    'Draw and read Newman projections and convert between sawhorse and Newman views',
    'Explain torsional strain in eclipsed ethane and estimate how fast ethane rotates at room temperature',
    'Name the conformations of butane (anti, gauche, eclipsed, syn) and add up their strain from a table of energy costs',
    'Read the energy-versus-dihedral curve of butane and connect its terms to torsional and steric strain',
    'Use the Boltzmann relation $K = e^{-\\Delta G/RT}$ to compute conformer populations, including degeneracy',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Rotation about σ bonds',
      blocks: [
        {
          type: 'p',
          text: 'A C–C [[gchem-sigma-bond|σ bond]] is cylindrically symmetric: twisting one carbon relative to the other leaves the orbital overlap unchanged. So the two ends of ethane spin past each other constantly. The different 3D shapes a molecule passes through by rotating about single bonds are its [[ochem-conformation|conformations]].',
        },
        {
          type: 'definition',
          term: 'Conformations versus isomers',
          text: 'Conformations (conformers) interconvert by rotation about single bonds, without breaking any bond, usually billions of times per second at room temperature. They are **not** different compounds. Constitutional isomers, by contrast, differ in which atoms are bonded and cannot interconvert without breaking bonds.',
        },
        {
          type: 'p',
          text: 'To see conformations you need drawings that show the angle around one bond. The **sawhorse** view looks at the C–C bond at an angle. The [[ochem-newman-projection|Newman projection]] looks straight down the bond: the front carbon is a point where its three bonds meet, and the back carbon is a circle from whose edge its three bonds emerge.',
        },
        {
          type: 'figure',
          svg: FIG.c_view,
          alt: 'Left: a sawhorse drawing of ethane, front carbon C1 lower left with three blue H, back carbon C2 upper right with three red H, and an eye looking up the C1 to C2 bond. Right: the corresponding Newman projection: three blue H bonds meeting at the center dot (front carbon), and a circle with three red H bonds starting at its edge (back carbon), rotated 60 degrees from the front bonds.',
          caption: 'The same staggered ethane in two views. In the Newman projection, bonds that meet at the center belong to the front carbon; bonds that stop at the circle belong to the back carbon. The circle itself is just a marker for the back carbon.',
        },
        {
          type: 'definition',
          term: 'Dihedral (torsion) angle',
          text: 'The [[ochem-dihedral-angle|dihedral angle]] between two groups on adjacent carbons is the angle between them as seen in the Newman projection: $0^\\circ$ when one hides the other, $60^\\circ$, $120^\\circ$ or $180^\\circ$ as they move apart.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A dihedral is four points',
          text: 'In code, a dihedral angle is computed from four atom positions $A$–$B$–$C$–$D$: take the normals $n_1 = (B - A) \\times (C - B)$ and $n_2 = (C - B) \\times (D - C)$, and the dihedral is the angle between the two planes, $\\operatorname{atan2}$ of a triple product and $n_1 \\cdot n_2$. Molecular viewers, protein-folding codes and game-engine IK solvers all use the same cross-product construction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'In a Newman projection of ethane viewed down the C1–C2 bond (C1 in front), what does the circle represent?',
      options: [
        { text: 'The front carbon, C1', why: 'The front carbon is the point at the center where its three bonds meet.' },
        { text: 'The back carbon, C2, hidden behind C1', correct: true, why: 'C2 lies directly behind C1, so it is drawn as a circle, and its bonds are drawn from the circle\'s edge so they look like they come from behind.' },
        { text: 'The C–C bond, seen end-on', why: 'Seen end-on, the C–C bond would be a point; it is not drawn at all.' },
        { text: 'The electron cloud of the σ bond', why: 'The circle is a drawing convention, not an orbital picture.' },
      ],
      explanation: 'Newman projections look straight down one bond. The front carbon hides the back one, so the back carbon is drawn as a circle and its three bonds start at the edge. Learn to read bonds that meet at the center as **front** and bonds that stop at the circle as **back**.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Ethane: staggered, eclipsed and torsional strain',
      blocks: [
        {
          type: 'p',
          text: 'Two conformations of ethane are special. In the **staggered** conformation each front C–H bisects two back C–H bonds (dihedral $60^\\circ$). In the **eclipsed** conformation each front C–H hides a back C–H (dihedral $0^\\circ$). Every other angle lies in between.',
        },
        {
          type: 'figure',
          svg: FIG.c_ethane,
          alt: 'Two Newman projections of ethane. Left: staggered, back H bonds exactly between front H bonds, labeled 0 kJ/mol. Right: eclipsed, each back H bond almost directly behind a front H bond (drawn slightly offset so both are visible), labeled plus 12 kJ/mol, three times 4.0 for H-H eclipsing.',
          caption: 'Eclipsed ethane is 12 kJ/mol higher in energy than staggered. Eclipsed bonds are drawn slightly offset so you can see both.',
        },
        {
          type: 'definition',
          term: 'Torsional strain',
          text: '[[ochem-torsional-strain|Torsional strain]] is the extra energy of a conformation caused by eclipsed bonds. In ethane each H↔H eclipsing costs about 4.0 kJ/mol, so the eclipsed conformation is $3 \\times 4.0 = 12$ kJ/mol above the staggered one.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why staggered is lower (it is not mainly the H atoms bumping)',
          text: 'The H atoms in eclipsed ethane are 230 pm apart, a little less than the sum of their van der Waals radii, so plain steric crowding explains only part of the barrier. Two effects together account for it: (1) repulsion between the electron pairs of eclipsed C–H bonds, and (2) a stabilizing donation, called [[ochem-hyperconjugation|hyperconjugation]], from each filled C–H [[gchem-bonding-orbital|bonding orbital]] into the empty C–H [[gchem-antibonding-orbital|antibonding orbital]] directly anti to it on the neighboring carbon. Anti bonds overlap best, and only the staggered geometry puts every C–H anti to another C–H. Chemists still debate the exact split; both favor staggered.',
        },
        {
          type: 'graph',
          x: [0, 360],
          y: [-1, 14],
          xStep: 60,
          yStep: 2,
          functions: [{ expr: '6(1 + cos(3x*pi/180))', label: 'ethane: $E = 6(1 + \\cos 3\\varphi)$ kJ/mol', color: 'blue' }],
          points: [{ x: 'd', y: '6(1 + cos(3d*pi/180))', color: 'red' }],
          sliders: [{ name: 'd', min: 0, max: 360, step: 1, value: 60, label: 'H–C–C–H dihedral $\\varphi$ (degrees)' }],
          readouts: [{ label: 'energy above staggered (kJ/mol) $=$', expr: '6(1 + cos(3d*pi/180))', digits: 1 }],
          caption: 'The three-fold cosine: three identical maxima (eclipsed, $0^\\circ$, $120^\\circ$, $240^\\circ$) and three identical minima (staggered). Rotating by $120^\\circ$ brings ethane back to an identical conformation.',
        },
        {
          type: 'p',
          text: 'A 12 kJ/mol barrier is small. Thermal energy at room temperature is $RT = 2.5$ kJ/mol, and from kinetics you know the rate of crossing a barrier goes as $e^{-E_a/RT}$. With a typical molecular "attempt frequency" of about $10^{13}$ per second, you can estimate how often ethane rotates.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Estimate how many times per second an ethane molecule rotates from one staggered conformation to the next at 298 K, using $k = A e^{-E_a/RT}$ with $A = 10^{13}\\ \\text{s}^{-1}$ and $E_a = 12$ kJ/mol. Give $k$ in units of $10^{10}\\ \\text{s}^{-1}$, to one decimal.',
      hint: '$E_a/RT = 12000 / (8.314 \\times 298)$. Then $k = 10^{13} e^{-E_a/RT}$; divide by $10^{10}$.',
      label: '$k \\approx$',
      unit: '× 10¹⁰ s⁻¹',
      answer: '10^3*exp(-12000/(8.314*298))',
      answerTex: '7.9',
      tolerance: 0.15,
      explanation: '$E_a/RT = 12000/(8.314 \\times 298) = 4.84$, so $e^{-4.84} = 7.9 \\times 10^{-3}$ and $k = 10^{13} \\times 7.9 \\times 10^{-3} = 7.9 \\times 10^{10}\\ \\text{s}^{-1}$. Ethane changes conformation about eighty billion times a second, which is why its conformers can never be separated: on any lab timescale you see only the average.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Bigger groups: an energy-cost table',
      blocks: [
        {
          type: 'p',
          text: 'Replace hydrogens with methyl groups and a second kind of strain appears. [[ochem-steric-strain|Steric strain]] is the repulsion between groups forced closer than their van der Waals radii allow. In conformations, it shows up both in eclipsed interactions involving large groups and in the **gauche** interaction: two groups $60^\\circ$ apart on adjacent carbons.',
        },
        {
          type: 'table',
          headers: ['Interaction', 'Cost (kJ/mol)', 'Main cause'],
          rows: [
            ['H ↔ H eclipsed', '4.0', 'torsional'],
            ['H ↔ $\\ce{CH3}$ eclipsed', '6.0', 'mostly torsional'],
            ['$\\ce{CH3}$ ↔ $\\ce{CH3}$ eclipsed', '11', 'torsional + steric'],
            ['$\\ce{CH3}$ ↔ $\\ce{CH3}$ gauche', '3.8', 'steric'],
          ],
          caption: 'Standard textbook values (McMurry/OpenStax). Add them up to estimate the strain of any conformation of a simple alkane.',
        },
        {
          type: 'p',
          text: 'The costs are additive to a good approximation, which turns conformational analysis into bookkeeping: draw the Newman projection, list every eclipsed pair and every gauche pair of non-hydrogen groups, and sum.',
        },
        {
          type: 'derivation',
          title: 'Butane with the two methyls eclipsed (dihedral $0^\\circ$)',
          steps: [
            { tex: '\\text{front C2: } \\ce{CH3}, \\ce{H}, \\ce{H};\\quad \\text{back C3: } \\ce{CH3}, \\ce{H}, \\ce{H}', why: 'Look down the C2–C3 bond of butane, $\\ce{CH3-CH2-CH2-CH3}$. Each middle carbon carries one methyl and two hydrogens.' },
            { tex: '\\ce{CH3} \\leftrightarrow \\ce{CH3}:\\ 11', why: 'The two methyls hide each other.' },
            { tex: '\\ce{H} \\leftrightarrow \\ce{H}:\\ 2 \\times 4.0 = 8.0', why: 'In an eclipsed conformation every front bond hides a back bond, so the remaining two pairs are H with H.' },
            { tex: 'E = 11 + 8.0 = 19\\ \\text{kJ/mol}', why: 'Sum of the interactions, relative to the strain-free anti conformation.' },
          ],
          result: 'The fully eclipsed ("syn") conformation of butane is about 19 kJ/mol above the most stable one.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Count every eclipsed pair',
          text: 'An eclipsed Newman projection always has **three** eclipsed pairs (and a staggered one has none). If your sum has fewer than three eclipsing terms, you have dropped one.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Propane, $\\ce{CH3CH2CH3}$, viewed down a C1–C2 bond, has one methyl group on the front carbon. Use the cost table to find its rotation barrier (eclipsed minus staggered energy).',
      hint: 'List the three eclipsed pairs. One involves the methyl.',
      label: 'barrier $=$',
      unit: 'kJ/mol',
      answer: '14',
      explanation: 'Front C2: $\\ce{CH3}$, H, H. Back C1: H, H, H. In the eclipsed conformation the methyl hides one H (6.0) and the two remaining front H hide back H (2 × 4.0 = 8.0). Total $6.0 + 8.0 = 14$ kJ/mol, matching the measured barrier of propane. The staggered conformation has no eclipsing and no gauche methyl pairs, so it is the zero.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Butane: anti, gauche, eclipsed and syn',
      blocks: [
        {
          type: 'p',
          text: 'Butane is the first alkane whose staggered conformations are not all equal. Rotating about C2–C3, the methyl–methyl dihedral passes through four distinct kinds of conformation.',
        },
        {
          type: 'figure',
          svg: FIG.c_butane,
          alt: 'Four Newman projections of butane along C2–C3, each with the front methyl at the top. Anti: back methyl at the bottom, 180 degrees away, 0 kJ/mol. Gauche: back methyl at the upper right, 60 degrees away, 3.8 kJ/mol. Eclipsed at 120 degrees: back methyl behind a front H, 16 kJ/mol. Syn at 0 degrees: back methyl directly behind the front methyl, 19 kJ/mol.',
          caption: '**Anti** ($180^\\circ$) is the global minimum. **Gauche** ($60^\\circ$) is staggered but pays 3.8 kJ/mol of steric strain. The $120^\\circ$ eclipsed form pays $2 \\times 6.0 + 4.0 = 16$; **syn** ($0^\\circ$) pays $11 + 2 \\times 4.0 = 19$.',
        },
        {
          type: 'graph',
          x: [0, 360],
          y: [-2, 22],
          xStep: 60,
          yStep: 4,
          functions: [
            { expr: '9.767 + 2.267cos(x*pi/180) - 0.267cos(2x*pi/180) + 7.233cos(3x*pi/180)', label: 'butane: $E(\\varphi)$ (kJ/mol)', color: 'blue' },
            { expr: '7.233(1 + cos(3x*pi/180))', label: 'three-fold torsional term alone', color: 'gray', dashed: true },
          ],
          points: [{ x: 'd', y: '9.767 + 2.267cos(d*pi/180) - 0.267cos(2d*pi/180) + 7.233cos(3d*pi/180)', color: 'red' }],
          sliders: [{ name: 'd', min: 0, max: 360, step: 1, value: 60, label: 'CH₃–C–C–CH₃ dihedral $\\varphi$ (degrees)' }],
          readouts: [
            { label: '$E$ above anti (kJ/mol) $=$', expr: '9.767 + 2.267cos(d*pi/180) - 0.267cos(2d*pi/180) + 7.233cos(3d*pi/180)', digits: 1 },
            { label: 'population relative to anti at 298 K, $e^{-E/RT} =$', expr: 'exp(-(9.767 + 2.267cos(d*pi/180) - 0.267cos(2d*pi/180) + 7.233cos(3d*pi/180))/(0.008314*298))', digits: 3 },
          ],
          caption: 'A four-term cosine series fitted exactly to the textbook energies (19 at $0^\\circ$, 3.8 at $60^\\circ$, 16 at $120^\\circ$, 0 at $180^\\circ$); its extrema land within $2^\\circ$ of those angles. Slide to $60^\\circ$ and $300^\\circ$: the two gauche minima are mirror images with identical energy. The dashed curve is ethane-like torsion; the difference between the curves is what the methyls add.',
        },
        {
          type: 'deepdive',
          title: 'What each cosine term means',
          blocks: [
            {
              type: 'math',
              tex: 'E(\\varphi) = 9.77 + 2.27\\cos\\varphi - 0.27\\cos 2\\varphi + 7.23\\cos 3\\varphi',
              caption: 'kJ/mol, with $\\varphi$ the methyl–methyl dihedral.',
            },
            {
              type: 'p',
              text: 'The $\\cos 3\\varphi$ term has period $120^\\circ$: it is the torsional strain that every sp³–sp³ bond has, the ethane barrier. The $\\cos\\varphi$ term has period $360^\\circ$ and peaks at $\\varphi = 0$: it is the extra steric repulsion that is worst when the methyls are closest (syn) and absent when they are anti. The small $\\cos 2\\varphi$ term fine-tunes the shape.',
            },
            {
              type: 'p',
              text: 'This is not just a classroom fit. Molecular-mechanics **force fields** (AMBER, OPLS, CHARMM) used to simulate proteins and screen drugs model every rotatable bond with exactly this kind of term, $\\sum_n \\tfrac{V_n}{2}\\,[1 + \\cos(n\\varphi - \\gamma)]$, with parameters fitted to quantum calculations, just as this series was fitted to the four textbook energies.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Zigzags everywhere',
          text: 'Because every C–C bond prefers anti, long alkane chains favor an all-anti **zigzag**. That is why bond-line drawings are zigzags, and why the chains in polyethylene and in the fatty acid tails of your cell membranes pack together like straight rods. Each gauche "kink" costs about 3.8 kJ/mol.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'fill',
      prompt: 'Name the butane conformations by the dihedral angle between the two methyl groups.',
      template: '$180^\\circ$: ___. $60^\\circ$: ___. $0^\\circ$: ___. The lowest-energy staggered conformation is ___.',
      blanks: [{ answers: ['anti'] }, { answers: ['gauche'] }, { answers: ['syn (fully eclipsed)'] }, { answers: ['anti'] }],
      wordBank: ['anti', 'anti', 'gauche', 'syn (fully eclipsed)', 'staggered at 120°', 'chair'],
      explanation: 'Anti ($180^\\circ$, 0 kJ/mol) and gauche ($60^\\circ$ or $300^\\circ$, 3.8 kJ/mol) are the two kinds of staggered conformation. At $0^\\circ$ the methyls eclipse each other: the syn or fully eclipsed conformation, the global maximum at 19 kJ/mol. A dihedral of $120^\\circ$ is eclipsed, not staggered (each methyl hides an H). "Chair" is a cyclohexane conformation, coming in the next lesson.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'How many molecules are in each conformation?',
      blocks: [
        {
          type: 'p',
          text: 'Because rotation is fast, the conformers of butane are in equilibrium, and General Chemistry already gave you the tool: $\\Delta G^\\circ = -RT\\ln K$, or $K = e^{-\\Delta G^\\circ/RT}$ ([[gchem-gibbs-energy|Gibbs energy]] and the [[gchem-equilibrium-constant|equilibrium constant]]). For one specific gauche conformer versus anti, $K = [\\text{gauche}]/[\\text{anti}] = e^{-3.8/RT}$.',
        },
        {
          type: 'p',
          text: 'There is one subtlety: **degeneracy**. Butane has one anti conformation but **two** gauche conformations ($60^\\circ$ and $300^\\circ$), mirror images with the same energy. Each contributes its own Boltzmann weight, so the populations are in the ratio $1 : e^{-\\Delta G/RT} : e^{-\\Delta G/RT}$. (The eclipsed forms are maxima, passed through rather than occupied, so they are left out.)',
        },
        {
          type: 'derivation',
          title: 'Percentage of butane that is anti at 298 K',
          steps: [
            { tex: 'RT = (8.314\\ \\text{J mol}^{-1}\\text{K}^{-1})(298\\ \\text{K}) = 2478\\ \\text{J/mol} = 2.478\\ \\text{kJ/mol}', why: 'Units must match $\\Delta G$, which is in kJ/mol.' },
            { tex: '\\frac{[\\text{one gauche}]}{[\\text{anti}]} = e^{-3.8/2.478} = e^{-1.534} = 0.216', why: 'Boltzmann factor for one gauche conformer relative to anti.' },
            { tex: '\\text{anti} : \\text{gauche}_{60} : \\text{gauche}_{300} = 1 : 0.216 : 0.216', why: 'Both gauche conformers have the same energy.' },
            { tex: 'f_{\\text{anti}} = \\frac{1}{1 + 2(0.216)} = \\frac{1}{1.431} = 0.699', why: 'Divide by the sum of all weights to turn ratios into fractions.' },
          ],
          result: 'About **70% anti and 30% gauche** at room temperature, close to what spectroscopy measures.',
        },
        {
          type: 'graph',
          x: [100, 1000],
          y: [0, 100],
          xStep: 100,
          yStep: 20,
          functions: [
            { expr: '100/(1 + 2exp(-1000g/(8.314x)))', label: '% anti', color: 'blue' },
            { expr: '100 - 100/(1 + 2exp(-1000g/(8.314x)))', label: '% gauche (both)', color: 'orange' },
          ],
          hlines: [{ y: 33.3, label: 'equal thirds', color: 'gray' }],
          vlines: [{ x: 298, label: '298 K', color: 'gray' }],
          sliders: [{ name: 'g', min: 0, max: 10, step: 0.1, value: 3.8, label: 'gauche − anti energy (kJ/mol)' }],
          readouts: [{ label: '% anti at 298 K $=$', expr: '100/(1 + 2exp(-1000g/(8.314*298)))', digits: 1 }],
          caption: 'Temperature on the horizontal axis (K). As $T$ rises the populations approach $\\tfrac13$ each, because every conformer becomes equally accessible. Set the energy gap to 0 and the two gauche forms outnumber anti two to one at every temperature: degeneracy is an entropy effect.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'The two classic errors',
          text: 'Forgetting that there are two gauche conformers, and using $R = 8.314$ with ΔG in kJ/mol (which makes every exponent 1000 times too large). Write the units on every line.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student computes the fraction of butane molecules in the anti conformation at 298 K. Tap the first incorrect line.',
      lines: [
        '$\\Delta G(\\text{gauche} - \\text{anti}) = 3.8$ kJ/mol',
        '$RT = 8.314 \\times 298 = 2478$ J/mol $= 2.48$ kJ/mol',
        'Each gauche : anti ratio $= e^{-3.8/2.48} = 0.22$',
        'Fraction anti $= \\dfrac{1}{1 + 0.22} = 0.82$',
        'So butane is 82% anti at 298 K.',
      ],
      errorLines: [4],
      explanation: 'Line 4 forgets the degeneracy: there are **two** gauche conformers ($60^\\circ$ and $300^\\circ$), each with weight 0.22. The fraction anti is $\\dfrac{1}{1 + 2(0.22)} = \\dfrac{1}{1.44} = 0.70$, so butane is about **70%** anti. Lines 1–3 are right, including the conversion of $RT$ to kJ/mol.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Branched alkanes: putting it together',
      blocks: [
        {
          type: 'p',
          text: 'The bookkeeping works for any acyclic alkane. Pick the bond, draw the front carbon with its three groups, then place the back carbon\'s groups in each staggered (and, if needed, eclipsed) arrangement and add up the costs.',
        },
        {
          type: 'derivation',
          title: '2-Methylbutane, looking down C2–C3',
          steps: [
            { tex: '\\text{front C2: } \\ce{CH3}, \\ce{CH3}, \\ce{H};\\quad \\text{back C3: } \\ce{CH3}, \\ce{H}, \\ce{H}', why: '2-Methylbutane is $\\ce{(CH3)2CH-CH2-CH3}$: C2 has two methyls and an H; C3 has the C4 methyl and two H.' },
            { tex: '\\text{back } \\ce{CH3} \\text{ anti to front H} \\implies 2 \\text{ gauche } \\ce{CH3}/\\ce{CH3}', why: 'If the back methyl sits opposite the front H, it is $60^\\circ$ from both front methyls.' },
            { tex: 'E = 2 \\times 3.8 = 7.6\\ \\text{kJ/mol}', why: 'Two gauche interactions.' },
            { tex: '\\text{back } \\ce{CH3} \\text{ anti to a front } \\ce{CH3} \\implies 1 \\text{ gauche},\\ E = 3.8', why: 'Now it is $60^\\circ$ from one methyl and from the H. There are two such conformers (anti to either front methyl), both at 3.8.' },
          ],
          result: 'The best staggered conformers of 2-methylbutane carry one unavoidable gauche interaction.',
        },
        {
          type: 'figure',
          svg: FIG.c_quiz,
          alt: 'Three Newman projections of 2-methylbutane along C2–C3. Front carbon in all three: blue CH3 at top, blue CH3 at lower right, H at lower left. A: staggered, back red CH3 at upper right, between the two front methyls, back H at bottom and upper left. B: staggered, back red CH3 at the bottom, opposite the top front methyl, back H at upper left and upper right. C: eclipsed, back red CH3 just behind the top front methyl, back H behind the other front methyl and behind the front H.',
          caption: 'Use these for the next question.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Conformers are not isolable isomers',
          text: 'Unless a barrier is very high (above roughly 90 kJ/mol, as in some crowded biaryls used in drugs), conformers interconvert far too fast to be separated. A question that asks you to "isolate the gauche conformer" of butane has no answer: you can only describe its population.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Rank the three conformations of 2-methylbutane in the figure above from most stable to least stable.',
      options: [
        { text: 'A > B > C', why: 'A looks symmetrical, but its back methyl sits between both front methyls: two gauche interactions (7.6 kJ/mol). B has only one (3.8).' },
        { text: 'B > A > C', correct: true, why: 'B: one gauche $\\ce{CH3}/\\ce{CH3}$ (3.8). A: two gauche (7.6). C is eclipsed: $\\ce{CH3}/\\ce{CH3}$ eclipsed (11) + $\\ce{CH3}/\\ce{H}$ eclipsed (6.0) + H/H (4.0) = 21 kJ/mol.' },
        { text: 'C > B > A', why: 'Eclipsed conformations are energy maxima; C, with two methyls eclipsed, is the least stable of all.' },
        { text: 'A = B > C', why: 'Both are staggered, but staggered conformations differ in their gauche interactions: A has two, B has one.' },
      ],
      explanation: 'Add the costs. **B**: back $\\ce{CH3}$ is anti to the top front $\\ce{CH3}$ and gauche to the other one: 3.8 kJ/mol. **A**: back $\\ce{CH3}$ sits between the two front methyls, gauche to both: 7.6 kJ/mol. **C**: eclipsed, $11 + 6.0 + 4.0 = 21$ kJ/mol. So B > A > C in stability.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Because the gauche conformation of butane is 3.8 kJ/mol less stable than anti, a sample of butane at room temperature contains essentially no gauche molecules.',
      answer: false,
      explanation: '3.8 kJ/mol is only about $1.5\\,RT$ at 298 K. Each gauche conformer has a Boltzmann weight of $e^{-1.53} = 0.22$ relative to anti, and there are two of them, so about 30% of butane molecules are gauche at any instant. Energy differences need to be around 10 kJ/mol (about $4\\,RT$) before the minor conformer drops to a few percent.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Run the population calculation backwards. For a hypothetical butane-like molecule with one anti and two equal-energy gauche conformers, how large would the gauche–anti energy gap have to be for the molecule to be **90% anti** at 298 K? Give kJ/mol to two decimals.',
      hint: 'Set $\\dfrac{1}{1 + 2w} = 0.90$ and solve for the Boltzmann weight $w$. Then $\\Delta G = -RT\\ln w$.',
      label: '$\\Delta G =$',
      unit: 'kJ/mol',
      answer: '8.314*298*ln(18)/1000',
      answerTex: '7.16',
      tolerance: 0.02,
      explanation: '$1 + 2w = 1/0.90 = 1.111$, so $2w = 0.111$ and $w = 1/18 = 0.0556$. Then $\\Delta G = -RT\\ln w = RT\\ln 18 = (2.478\\ \\text{kJ/mol})(2.890) = 7.16$ kJ/mol. Nearly double butane\'s 3.8 kJ/mol is needed to push the anti population from 70% to 90%, because the factor of 2 for the two gauche forms always works against anti.',
    },
  ],
  takeaways: [
    'Rotation about σ bonds interconverts conformations rapidly; conformers are not separable compounds.',
    'In a Newman projection, front bonds meet at the center and back bonds start at the circle; the dihedral angle is read directly from it.',
    'Eclipsed bonds cause torsional strain (ethane barrier 12 kJ/mol, 4.0 per H↔H pair); groups $60^\\circ$ apart (gauche) or eclipsed cause steric strain.',
    'Butane: anti (0) < gauche (3.8) < eclipsed at $120^\\circ$ (16) < syn (19 kJ/mol); strain energies are approximately additive.',
    'Conformer populations follow $K = e^{-\\Delta G/RT}$, weighted by degeneracy: butane is about 70% anti and 30% gauche at 298 K.',
    'Energy versus dihedral is a cosine series: a three-fold torsional term plus terms for steric effects, the same form force fields use.',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Sections 3.6 and 3.7 cover the conformations of ethane, propane and butane with the strain table used here.' },
    { title: 'Conformational isomerism', url: 'https://en.wikipedia.org/wiki/Conformational_isomerism', source: 'wikipedia', note: 'Newman projections, the butane energy profile and the hyperconjugation debate about ethane\'s barrier.' },
    { title: 'Newman projection', url: 'https://en.wikipedia.org/wiki/Newman_projection', source: 'wikipedia', note: 'The drawing convention, with sawhorse comparisons.' },
    { title: 'Khan Academy: Organic chemistry', url: 'https://www.khanacademy.org/science/organic-chemistry', source: 'khan', note: 'Video walkthroughs of Newman projections and butane conformational analysis.' },
  ],
};
