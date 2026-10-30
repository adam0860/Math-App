import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_SP = `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg">
<line x1="13" y1="85" x2="117" y2="85" stroke="currentColor" stroke-opacity="0.45"/><line x1="65" y1="137" x2="65" y2="33" stroke="currentColor" stroke-opacity="0.45"/><line x1="87.6" y1="62.4" x2="42.4" y2="107.6" stroke="currentColor" stroke-opacity="0.45"/><text x="124.0" y="89.0" text-anchor="middle" font-size="12" class="t-gray">x</text><text x="35.4" y="119.6" text-anchor="middle" font-size="12" class="t-gray">y</text><text x="65.0" y="28.0" text-anchor="middle" font-size="12" class="t-gray">z</text>
<circle cx="65" cy="85" r="32" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<text x="65.0" y="175.0" text-anchor="middle" font-size="15">s</text>
<text x="65.0" y="195.0" text-anchor="middle" font-size="11" class="t-gray">ℓ = 0, sphere</text>
<line x1="143" y1="85" x2="247" y2="85" stroke="currentColor" stroke-opacity="0.45"/><line x1="195" y1="137" x2="195" y2="33" stroke="currentColor" stroke-opacity="0.45"/><line x1="217.6" y1="62.4" x2="172.4" y2="107.6" stroke="currentColor" stroke-opacity="0.45"/><text x="254.0" y="89.0" text-anchor="middle" font-size="12" class="t-gray">x</text><text x="165.4" y="119.6" text-anchor="middle" font-size="12" class="t-gray">y</text><text x="195.0" y="28.0" text-anchor="middle" font-size="12" class="t-gray">z</text>
<path d="M0,0 C13.8,-18.0 46.0,-18.0 46.0,0 C46.0,18.0 13.8,18.0 0,0 Z" transform="translate(195,85) rotate(0) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C13.8,-18.0 46.0,-18.0 46.0,0 C46.0,18.0 13.8,18.0 0,0 Z" transform="translate(195,85) rotate(180) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<text x="195" y="175" text-anchor="middle" font-size="15">p<tspan font-size="11" dy="4">x</tspan></text>
<text x="195.0" y="195.0" text-anchor="middle" font-size="11" class="t-gray">node: yz plane</text>
<line x1="273" y1="85" x2="377" y2="85" stroke="currentColor" stroke-opacity="0.45"/><line x1="325" y1="137" x2="325" y2="33" stroke="currentColor" stroke-opacity="0.45"/><line x1="347.6" y1="62.4" x2="302.4" y2="107.6" stroke="currentColor" stroke-opacity="0.45"/><text x="384.0" y="89.0" text-anchor="middle" font-size="12" class="t-gray">x</text><text x="295.4" y="119.6" text-anchor="middle" font-size="12" class="t-gray">y</text><text x="325.0" y="28.0" text-anchor="middle" font-size="12" class="t-gray">z</text>
<path d="M0,0 C10.8,-16.0 36.0,-16.0 36.0,0 C36.0,16.0 10.8,16.0 0,0 Z" transform="translate(325,85) rotate(135) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-16.0 36.0,-16.0 36.0,0 C36.0,16.0 10.8,16.0 0,0 Z" transform="translate(325,85) rotate(-45) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<text x="325" y="175" text-anchor="middle" font-size="15">p<tspan font-size="11" dy="4">y</tspan></text>
<text x="325.0" y="195.0" text-anchor="middle" font-size="11" class="t-gray">node: xz plane</text>
<line x1="403" y1="85" x2="507" y2="85" stroke="currentColor" stroke-opacity="0.45"/><line x1="455" y1="137" x2="455" y2="33" stroke="currentColor" stroke-opacity="0.45"/><line x1="477.6" y1="62.4" x2="432.4" y2="107.6" stroke="currentColor" stroke-opacity="0.45"/><text x="514.0" y="89.0" text-anchor="middle" font-size="12" class="t-gray">x</text><text x="425.4" y="119.6" text-anchor="middle" font-size="12" class="t-gray">y</text><text x="455.0" y="28.0" text-anchor="middle" font-size="12" class="t-gray">z</text>
<path d="M0,0 C13.8,-18.0 46.0,-18.0 46.0,0 C46.0,18.0 13.8,18.0 0,0 Z" transform="translate(455,85) rotate(-90) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C13.8,-18.0 46.0,-18.0 46.0,0 C46.0,18.0 13.8,18.0 0,0 Z" transform="translate(455,85) rotate(90) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<text x="455" y="175" text-anchor="middle" font-size="15">p<tspan font-size="11" dy="4">z</tspan></text>
<text x="455.0" y="195.0" text-anchor="middle" font-size="11" class="t-gray">node: xy plane</text>
<text x="260.0" y="222.0" text-anchor="middle" font-size="11" class="t-gray">blue and red = opposite signs (phases) of ψ; ψ = 0 on the nodal plane</text>
</svg>`;

const FIG_D = `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
<line x1="10" y1="78" x2="94" y2="78" stroke="currentColor" stroke-opacity="0.45"/><line x1="52" y1="120" x2="52" y2="36" stroke="currentColor" stroke-opacity="0.45"/><text x="100.0" y="82.0" text-anchor="middle" font-size="11" class="t-gray">x</text><text x="52.0" y="31.0" text-anchor="middle" font-size="11" class="t-gray">y</text>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(52,78) rotate(-45) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(52,78) rotate(-135) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(52,78) rotate(-225) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(52,78) rotate(-315) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<text x="52" y="158" text-anchor="middle" font-size="14">d<tspan font-size="10" dy="4">xy</tspan></text>
<line x1="114" y1="78" x2="198" y2="78" stroke="currentColor" stroke-opacity="0.45"/><line x1="156" y1="120" x2="156" y2="36" stroke="currentColor" stroke-opacity="0.45"/><text x="204.0" y="82.0" text-anchor="middle" font-size="11" class="t-gray">x</text><text x="156.0" y="31.0" text-anchor="middle" font-size="11" class="t-gray">z</text>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(156,78) rotate(-45) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(156,78) rotate(-135) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(156,78) rotate(-225) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(156,78) rotate(-315) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<text x="156" y="158" text-anchor="middle" font-size="14">d<tspan font-size="10" dy="4">xz</tspan></text>
<line x1="218" y1="78" x2="302" y2="78" stroke="currentColor" stroke-opacity="0.45"/><line x1="260" y1="120" x2="260" y2="36" stroke="currentColor" stroke-opacity="0.45"/><text x="308.0" y="82.0" text-anchor="middle" font-size="11" class="t-gray">y</text><text x="260.0" y="31.0" text-anchor="middle" font-size="11" class="t-gray">z</text>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(260,78) rotate(-45) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(260,78) rotate(-135) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(260,78) rotate(-225) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(260,78) rotate(-315) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<text x="260" y="158" text-anchor="middle" font-size="14">d<tspan font-size="10" dy="4">yz</tspan></text>
<line x1="322" y1="78" x2="406" y2="78" stroke="currentColor" stroke-opacity="0.45"/><line x1="364" y1="120" x2="364" y2="36" stroke="currentColor" stroke-opacity="0.45"/><text x="412.0" y="82.0" text-anchor="middle" font-size="11" class="t-gray">x</text><text x="364.0" y="31.0" text-anchor="middle" font-size="11" class="t-gray">y</text>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(364,78) rotate(0) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(364,78) rotate(-90) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(364,78) rotate(-180) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C10.8,-13.0 36.0,-13.0 36.0,0 C36.0,13.0 10.8,13.0 0,0 Z" transform="translate(364,78) rotate(-270) scale(1.0,1)" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<text x="364" y="158" text-anchor="middle" font-size="14">d<tspan font-size="10" dy="4">x²−y²</tspan></text>
<line x1="426" y1="78" x2="510" y2="78" stroke="currentColor" stroke-opacity="0.45"/><line x1="468" y1="120" x2="468" y2="36" stroke="currentColor" stroke-opacity="0.45"/><text x="516.0" y="82.0" text-anchor="middle" font-size="11" class="t-gray">x</text><text x="468.0" y="31.0" text-anchor="middle" font-size="11" class="t-gray">z</text>
<ellipse cx="468" cy="78" rx="24" ry="8" fill="currentColor" class="f-red s-red" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C12.0,-14.0 40.0,-14.0 40.0,0 C40.0,14.0 12.0,14.0 0,0 Z" transform="translate(468,78) rotate(-90) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<path d="M0,0 C12.0,-14.0 40.0,-14.0 40.0,0 C40.0,14.0 12.0,14.0 0,0 Z" transform="translate(468,78) rotate(90) scale(1.0,1)" fill="currentColor" class="f-blue s-blue" fill-opacity="0.35" stroke-width="1.2"/>
<text x="468" y="158" text-anchor="middle" font-size="14">d<tspan font-size="10" dy="4">z²</tspan></text>
<line x1="22" y1="174" x2="290" y2="174" stroke="currentColor" stroke-opacity="0.4"/><text x="156.0" y="190.0" text-anchor="middle" font-size="11" class="t-gray">lobes between the axes</text>
<line x1="322" y1="174" x2="510" y2="174" stroke="currentColor" stroke-opacity="0.4"/><text x="416.0" y="190.0" text-anchor="middle" font-size="11" class="t-gray">lobes along the axes</text>
<text x="260.0" y="212.0" text-anchor="middle" font-size="11" class="t-gray">each drawn in the plane that contains its lobes; every d orbital has 2 angular nodes</text>
</svg>`;

const FIG_SPLIT = `<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg">
<text x="130.0" y="22.0" text-anchor="middle" font-size="13">Hydrogen (1 electron)</text>
<text x="390.0" y="22.0" text-anchor="middle" font-size="13">Many-electron atom</text>
<line x1="18" y1="40" x2="18" y2="300" stroke="currentColor" stroke-width="1.2"/><polygon points="14.4,42 18,36 21.6,42" fill="currentColor"/>
<text x="12.0" y="170.0" text-anchor="middle" font-size="12" class="t-gray" transform="rotate(-90 12 170)">energy</text>
<rect x="60.0" y="278.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="50.0" y="289.0" text-anchor="end" font-size="12">1s</text>
<rect x="60.0" y="168.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="84.0" y="168.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="97.0" y="168.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="110.0" y="168.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="50.0" y="179.0" text-anchor="end" font-size="12">n = 2</text>
<text x="66.0" y="197.0" text-anchor="middle" font-size="10" class="t-gray">2s</text><text x="103.0" y="197.0" text-anchor="middle" font-size="10" class="t-gray">2p</text>
<rect x="60.0" y="103.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="84.0" y="103.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="97.0" y="103.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="110.0" y="103.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="134.0" y="103.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="147.0" y="103.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="160.0" y="103.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="173.0" y="103.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="186.0" y="103.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="50.0" y="114.0" text-anchor="end" font-size="12">n = 3</text>
<text x="66.0" y="132.0" text-anchor="middle" font-size="10" class="t-gray">3s</text><text x="103.0" y="132.0" text-anchor="middle" font-size="10" class="t-gray">3p</text><text x="166.0" y="132.0" text-anchor="middle" font-size="10" class="t-gray">3d</text>
<line x1="60" y1="78" x2="240" y2="78" stroke="currentColor" stroke-width="1.5"/>
<text x="50.0" y="82.0" text-anchor="end" font-size="12">n = 4</text>
<text x="150.0" y="70.0" text-anchor="middle" font-size="10" class="t-gray">4s 4p 4d 4f all equal</text>
<rect x="330.0" y="283.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="324.0" y="294.0" text-anchor="end" font-size="12" class="t-blue">1s</text>
<rect x="330.0" y="208.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="324.0" y="219.0" text-anchor="end" font-size="12" class="t-blue">2s</text>
<rect x="370.0" y="183.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="383.0" y="183.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="396.0" y="183.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="364.0" y="194.0" text-anchor="end" font-size="12" class="t-green">2p</text>
<rect x="330.0" y="143.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="324.0" y="154.0" text-anchor="end" font-size="12" class="t-blue">3s</text>
<rect x="370.0" y="123.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="383.0" y="123.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="396.0" y="123.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="364.0" y="134.0" text-anchor="end" font-size="12" class="t-green">3p</text>
<rect x="330.0" y="97.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="324.0" y="108.0" text-anchor="end" font-size="12" class="t-blue">4s</text>
<rect x="420.0" y="83.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="433.0" y="83.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="446.0" y="83.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="459.0" y="83.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="472.0" y="83.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="414.0" y="94.0" text-anchor="end" font-size="12" class="t-orange">3d</text>
<rect x="370.0" y="63.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="383.0" y="63.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="396.0" y="63.5" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="364.0" y="74.0" text-anchor="end" font-size="12" class="t-green">4p</text>
<line x1="262" y1="40" x2="262" y2="300" stroke="currentColor" stroke-opacity="0.25"/>
<text x="390.0" y="320.0" text-anchor="middle" font-size="11" class="t-gray">s &lt; p &lt; d within a shell; 4s drops below 3d</text>
<text x="130.0" y="320.0" text-anchor="middle" font-size="11" class="t-gray">energy depends only on n</text>
</svg>`;

export const lesson: Lesson = {
  id: 'gchem-quantum-numbers',
  title: 'Quantum Numbers and Orbitals',
  summary: 'The four quantum numbers as an electron\'s address: allowed values, counting orbitals and electrons, the shapes and nodes of s, p and d orbitals, the Pauli principle, and why subshell energies split in many-electron atoms.',
  minutes: 21,
  objectives: [
    'State the allowed values and physical meaning of $n$, $\\ell$, $m_\\ell$ and $m_s$, and decide whether a set of quantum numbers is allowed',
    'Count orbitals and electrons in a subshell ($2\\ell + 1$ orbitals) and in a shell ($n^2$ orbitals, $2n^2$ electrons)',
    'Describe the shapes of $s$, $p$ and $d$ orbitals and count their radial ($n - \\ell - 1$) and angular ($\\ell$) nodes',
    'State the Pauli exclusion principle in terms of quantum numbers and use it to list the electrons in a subshell',
    'Explain with penetration and shielding why $ns < np < nd$ in many-electron atoms, and why 4s fills before 3d',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Three dimensions, three quantum numbers',
      blocks: [
        {
          type: 'p',
          text: 'The particle in a box needed one quantum number, $n$, because it moved along one line and one boundary condition did the quantizing. An electron in an atom moves in three dimensions, and solving the Schrödinger equation for hydrogen produces **three** [[gchem-quantum-numbers|quantum numbers]], one for each dimension of the standing wave. A fourth, for spin, is added on top. Together they form a unique address for every electron.',
        },
        {
          type: 'table',
          headers: ['Symbol', 'Name', 'Allowed values', 'What it determines'],
          rows: [
            ['$n$', 'principal', '$1, 2, 3, \\dots$', 'shell: size and (for hydrogen) energy'],
            ['$\\ell$', 'angular momentum (azimuthal)', '$0, 1, \\dots, n - 1$', 'subshell: shape ($s, p, d, f$ for $\\ell = 0, 1, 2, 3$)'],
            ['$m_\\ell$', 'magnetic', '$-\\ell, \\dots, 0, \\dots, +\\ell$ (integers)', 'which orbital: orientation in space'],
            ['$m_s$', 'spin', '$+\\frac{1}{2}$ or $-\\frac{1}{2}$', 'spin direction ("up" or "down")'],
          ],
          caption: 'Each choice of $(n, \\ell, m_\\ell)$ is one orbital; adding $m_s$ specifies one electron.',
        },
        {
          type: 'derivation',
          title: 'Every orbital in shell $n = 3$',
          steps: [
            { tex: 'n = 3 \\implies \\ell \\in \\{0, 1, 2\\}', why: '$\\ell$ runs from 0 up to $n - 1 = 2$: the $3s$, $3p$ and $3d$ subshells.' },
            { tex: '\\ell = 0: m_\\ell = 0 \\quad (1\\ \\text{orbital, } 3s)', why: 'For $\\ell = 0$, the only integer between $-0$ and $+0$ is 0.' },
            { tex: '\\ell = 1: m_\\ell \\in \\{-1, 0, +1\\} \\quad (3\\ \\text{orbitals, } 3p)', why: 'Integers from $-1$ to $+1$.' },
            { tex: '\\ell = 2: m_\\ell \\in \\{-2, -1, 0, +1, +2\\} \\quad (5\\ \\text{orbitals, } 3d)', why: 'Integers from $-2$ to $+2$.' },
            { tex: '1 + 3 + 5 = 9\\ \\text{orbitals}', why: 'Add them up: shell 3 has 9 orbitals and room for 18 electrons.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\ell$ can be at most $n - 1$',
          text: 'Recall that higher energy means more nodes. An orbital in shell $n$ has $n - 1$ nodes in total. Some are **angular nodes** (planes or cones through the nucleus), and there are exactly $\\ell$ of them; the rest are **radial nodes** (spheres), $n - \\ell - 1$ of them. A count of nodes cannot be negative, so $n - \\ell - 1 \\ge 0$, that is, $\\ell \\le n - 1$. There is no $2d$ and no $3f$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Where s, p, d, f come from',
          text: 'Before anyone understood orbitals, spectroscopists sorted the lines of alkali-metal spectra into series they called **s**harp, **p**rincipal, **d**iffuse and **f**undamental. Those lines turned out to come from electrons in subshells with $\\ell = 0, 1, 2, 3$, and the initials stuck. After $f$ the letters continue alphabetically: $g, h, \\dots$',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which set of quantum numbers $(n, \\ell, m_\\ell, m_s)$ is **allowed** for an electron in an atom?',
      options: [
        { text: '$(2, 2, 0, +\\frac{1}{2})$', why: 'Not allowed: $\\ell$ can be at most $n - 1 = 1$. There is no $2d$ subshell.' },
        { text: '$(3, 1, -2, -\\frac{1}{2})$', why: 'Not allowed: with $\\ell = 1$, $m_\\ell$ can only be $-1$, $0$ or $+1$.' },
        { text: '$(4, 3, -2, +\\frac{1}{2})$', correct: true, why: 'Allowed: $\\ell = 3 \\le n - 1 = 3$ (a $4f$ orbital), $|m_\\ell| = 2 \\le 3$, and $m_s = +\\frac{1}{2}$.' },
        { text: '$(3, 0, 0, 0)$', why: 'Not allowed: an electron\'s spin quantum number is always $+\\frac{1}{2}$ or $-\\frac{1}{2}$, never 0.' },
      ],
      explanation: 'Check the rules in order: $n \\ge 1$; $0 \\le \\ell \\le n - 1$; $-\\ell \\le m_\\ell \\le +\\ell$; $m_s = \\pm\\frac{1}{2}$. Only $(4, 3, -2, +\\frac{1}{2})$ passes all four. It describes one electron in one of the seven $4f$ orbitals.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Counting orbitals and electrons',
      blocks: [
        {
          type: 'p',
          text: 'Because $m_\\ell$ runs over the integers from $-\\ell$ to $+\\ell$, a subshell with angular momentum $\\ell$ contains $2\\ell + 1$ orbitals. Each orbital holds at most two electrons (the reason comes later in this lesson). Foundations stated the $2n^2$ rule; now you can prove it from the quantum numbers.',
        },
        {
          type: 'derivation',
          title: 'Orbitals in shell $n$',
          steps: [
            { tex: '\\text{orbitals} = \\sum_{\\ell = 0}^{n - 1} (2\\ell + 1)', why: 'Add the $2\\ell + 1$ orbitals of each subshell, for every allowed $\\ell$.' },
            { tex: '= 2\\sum_{\\ell = 0}^{n - 1} \\ell + \\sum_{\\ell = 0}^{n - 1} 1 = 2 \\cdot \\frac{(n - 1)n}{2} + n', why: 'Split the sum. The first is $0 + 1 + \\cdots + (n - 1) = \\frac{(n - 1)n}{2}$; the second adds 1 a total of $n$ times.' },
            { tex: '= n^2 - n + n = n^2', why: 'Simplify.' },
            { tex: '\\text{electrons} = 2n^2', why: 'Two electrons per orbital.' },
          ],
          result: 'Shells hold 2, 8, 18, 32, … electrons, which is where the lengths of the periodic table\'s rows come from.',
        },
        {
          type: 'table',
          headers: ['$n$', 'Subshells', 'Orbitals per subshell', 'Orbitals ($n^2$)', 'Electrons ($2n^2$)'],
          rows: [
            ['$1$', '$1s$', '$1$', '$1$', '$2$'],
            ['$2$', '$2s, 2p$', '$1, 3$', '$4$', '$8$'],
            ['$3$', '$3s, 3p, 3d$', '$1, 3, 5$', '$9$', '$18$'],
            ['$4$', '$4s, 4p, 4d, 4f$', '$1, 3, 5, 7$', '$16$', '$32$'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'To count electrons that share some quantum numbers, list what is free to vary. "How many electrons have $n = 3$, $\\ell = 1$?" fixes the $3p$ subshell: 3 orbitals × 2 = 6. "How many have $n = 3$, $m_\\ell = 0$?" allows $\\ell = 0, 1, 2$, each with one $m_\\ell = 0$ orbital: 3 orbitals × 2 = 6.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'How many electrons in an atom can have $n = 4$ **and** $m_\\ell = -1$?',
      hint: 'Which values of $\\ell$ are possible for $n = 4$, and which of them allow $m_\\ell = -1$?',
      label: 'electrons:',
      answer: '6',
      explanation: 'For $n = 4$, $\\ell$ can be 0, 1, 2 or 3. $m_\\ell = -1$ requires $\\ell \\ge 1$, so it exists in the $4p$, $4d$ and $4f$ subshells: one orbital in each, 3 orbitals in all. Each holds two electrons ($m_s = \\pm\\frac{1}{2}$), giving $3 \\times 2 = 6$ electrons.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Shapes of s and p orbitals, and their nodes',
      blocks: [
        {
          type: 'p',
          text: 'An orbital\'s shape is drawn as a **boundary surface** enclosing about 90% of the probability. The shape is set by $\\ell$, the size by $n$. Every $s$ orbital ($\\ell = 0$) is a sphere. Every $p$ orbital ($\\ell = 1$) has two lobes on opposite sides of the nucleus, and the three $p$ orbitals of a subshell point along the $x$, $y$ and $z$ axes.',
        },
        {
          type: 'figure',
          svg: FIG_SP,
          alt: 'Four sets of x, y, z axes. The s orbital is a sphere centered on the origin. The p x orbital has a blue lobe along positive x and a red lobe along negative x. The p y orbital has lobes along the y axis, drawn diagonally in perspective. The p z orbital has a blue lobe up along z and a red lobe down. Under each p orbital its nodal plane is named: yz, xz and xy.',
          caption: 'The two lobes of a $p$ orbital have opposite signs of $\\psi$ (blue and red). Between them is a **nodal plane** through the nucleus, where $\\psi = 0$. The signs do not affect $\\psi^2$, but they decide how orbitals combine when atoms bond (unit 2).',
        },
        {
          type: 'theorem',
          name: 'Counting nodes',
          tex: '\\text{angular nodes} = \\ell, \\qquad \\text{radial nodes} = n - \\ell - 1, \\qquad \\text{total} = n - 1',
          text: 'Angular nodes are planes (or cones) through the nucleus; radial nodes are spheres around it. In the radial probability plot, each radial node is a point where $P(r) = 0$.',
        },
        {
          type: 'table',
          headers: ['Orbital', '$n$', '$\\ell$', 'Angular nodes', 'Radial nodes'],
          rows: [
            ['$1s$', '$1$', '$0$', '$0$', '$0$'],
            ['$2s$', '$2$', '$0$', '$0$', '$1$'],
            ['$2p$', '$2$', '$1$', '$1$', '$0$'],
            ['$3p$', '$3$', '$1$', '$1$', '$1$'],
            ['$3d$', '$3$', '$2$', '$2$', '$0$'],
            ['$4f$', '$4$', '$3$', '$3$', '$0$'],
          ],
          caption: 'Each step up in $n$ adds one node; $\\ell$ decides how many of them are angular.',
        },
        {
          type: 'derivation',
          title: 'The nodes of a $3p$ orbital',
          steps: [
            { tex: '\\text{total} = n - 1 = 2', why: 'A shell-3 orbital has two nodes in all.' },
            { tex: '\\text{angular} = \\ell = 1', why: 'One nodal plane through the nucleus, like every $p$ orbital.' },
            { tex: '\\text{radial} = n - \\ell - 1 = 3 - 1 - 1 = 1', why: 'One spherical node. For hydrogen it sits at $r = 6a_0$, where the radial part of $\\psi_{3p}$, proportional to $(6 - r/a_0)$, changes sign.' },
          ],
          result: 'A $3p$ orbital looks like a $2p$ from far away, but each lobe contains a small inner lobe of opposite sign, separated by a spherical node.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'How many **radial** nodes does a $5d$ orbital have?',
      hint: 'Radial nodes $= n - \\ell - 1$; a $d$ orbital has $\\ell = 2$.',
      label: 'radial nodes:',
      answer: '2',
      explanation: 'For $5d$, $n = 5$ and $\\ell = 2$, so there are $5 - 2 - 1 = 2$ radial (spherical) nodes. It also has $\\ell = 2$ angular nodes, for a total of $n - 1 = 4$. Two orbitals of the same type differ only in their radial nodes: $3d$ has none, $4d$ has one, $5d$ has two.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The five d orbitals (and a word on f)',
      blocks: [
        {
          type: 'p',
          text: 'With $\\ell = 2$, each $d$ subshell has five orbitals, each with two angular nodes. Four of them are four-leaf clovers and one is unique. They are named by the axes or planes their lobes relate to.',
        },
        {
          type: 'figure',
          svg: FIG_D,
          alt: 'Five d orbitals, each drawn in the plane containing its lobes. d x y, d x z and d y z have four lobes pointing between the axes of their plane, alternating blue and red. d x squared minus y squared has four lobes pointing along the x and y axes, blue on x and red on y. d z squared has two blue lobes along the z axis and a red ring around the middle.',
          caption: 'Three $d$ orbitals ($d_{xy}$, $d_{xz}$, $d_{yz}$) point **between** the axes; two ($d_{x^2-y^2}$ and $d_{z^2}$) point **along** them. That difference is the key to transition-metal colors and magnetism in unit 12.',
        },
        {
          type: 'list',
          items: [
            '$d_{xy}$, $d_{xz}$, $d_{yz}$: four lobes in the named plane, between the axes; the two nodal planes are the other two coordinate planes.',
            '$d_{x^2-y^2}$: four lobes in the $xy$-plane, along the $x$ and $y$ axes; its nodes are the planes $y = x$ and $y = -x$.',
            '$d_{z^2}$: two lobes along $z$ and a doughnut-shaped ring in the $xy$-plane; its two angular nodes are cones rather than planes.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Labels versus $m_\\ell$ values',
          text: 'The five $d$ orbitals have $m_\\ell = -2, \\dots, +2$, but the familiar real-valued shapes ($d_{xy}$, $d_{xz}$, and so on) are combinations of the $\\pm m_\\ell$ solutions, so do not try to match each picture to one $m_\\ell$. Only $d_{z^2}$ corresponds to a single value, $m_\\ell = 0$. The count, five, is what matters for configurations.',
        },
        {
          type: 'p',
          text: 'The seven $f$ orbitals ($\\ell = 3$, three angular nodes each) have more complicated shapes. They are buried deep inside the atom, which is why the lanthanides, which fill $4f$, are so chemically similar to one another.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Which orbital has its electron density concentrated in four lobes pointing directly **along** the $x$ and $y$ axes?',
      options: [
        { text: '$d_{xy}$', why: 'Its lobes lie in the $xy$-plane but point **between** the axes, at 45°. The axes themselves lie in its nodal planes.' },
        { text: '$d_{z^2}$', why: 'Its two main lobes point along $z$, with a ring in the $xy$-plane, not four lobes on $x$ and $y$.' },
        { text: '$d_{x^2-y^2}$', correct: true, why: 'Its name says it: the density is large where $x^2 - y^2$ is large in magnitude, which is along the $x$ and $y$ axes.' },
        { text: '$p_x$', why: 'A $p_x$ orbital has only two lobes, both along the $x$ axis.' },
      ],
      explanation: '$d_{x^2-y^2}$ points along $x$ and $y$; $d_{xy}$ is the same shape rotated by 45° so that it points between them. In a complex where six ligands approach a metal along $\\pm x$, $\\pm y$, $\\pm z$, the orbitals that point at the ligands ($d_{x^2-y^2}$ and $d_{z^2}$) are raised in energy relative to the other three. That splitting explains why many transition-metal compounds are colored.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Spin and the Pauli exclusion principle',
      blocks: [
        {
          type: 'p',
          text: 'In 1922 Otto Stern and Walther Gerlach sent a beam of silver atoms through a nonuniform magnetic field. Classically the tiny atomic magnets would point every which way and smear into a continuous band. Instead the beam split cleanly into **two**. Silver has one unpaired electron, and that electron behaves as a tiny magnet that can only be "up" or "down". This intrinsic property is **[[gchem-electron-spin|spin]]**, labeled by $m_s = +\\frac{1}{2}$ or $-\\frac{1}{2}$.',
        },
        {
          type: 'definition',
          term: 'Pauli exclusion principle (quantum-number form)',
          text: 'No two electrons in the same atom can have the same set of four quantum numbers $(n, \\ell, m_\\ell, m_s)$. Two electrons in the same orbital already share $n$, $\\ell$ and $m_\\ell$, so they must differ in $m_s$: an orbital holds **at most two electrons, with opposite spins**.',
        },
        {
          type: 'derivation',
          title: 'The six electrons of a full $2p$ subshell (neon)',
          steps: [
            { tex: '(2, 1, -1, +\\tfrac{1}{2}),\\ (2, 1, -1, -\\tfrac{1}{2})', why: 'The orbital with $m_\\ell = -1$: two electrons, differing only in spin.' },
            { tex: '(2, 1, 0, +\\tfrac{1}{2}),\\ (2, 1, 0, -\\tfrac{1}{2})', why: 'The orbital with $m_\\ell = 0$.' },
            { tex: '(2, 1, +1, +\\tfrac{1}{2}),\\ (2, 1, +1, -\\tfrac{1}{2})', why: 'The orbital with $m_\\ell = +1$. All six sets are different, and no seventh set exists with $n = 2$, $\\ell = 1$.' },
          ],
          result: 'A $p$ subshell is full at six electrons because there are exactly six distinct quantum-number sets for it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A composite primary key',
          text: 'Think of the electrons in an atom as rows in a database table with a composite primary key `(n, l, ml, ms)`. Pauli is the uniqueness constraint: inserting a second row with an existing key fails. The capacity of each subshell is simply the number of distinct keys available: $2(2\\ell + 1)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the periodic table depends on it',
          text: 'Without the exclusion principle every electron would drop into $1s$, every atom would look like a slightly heavier helium, and there would be no shells, no valence electrons and no chemistry. Pauli forces electrons to stack into higher and higher orbitals, and that stacking is the periodic table. It is also why matter resists being compressed: you cannot push two electrons into the same state.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student works out how many electrons a $4f$ subshell can hold. Tap the first line that is wrong.',
      lines: [
        'A $4f$ orbital has $n = 4$ and $\\ell = 3$.',
        '$\\ell = 3$ is allowed, since $\\ell$ can be at most $n - 1 = 3$.',
        'For $\\ell = 3$, $m_\\ell$ can be $0, 1, 2, 3$: four orbitals.',
        'Each orbital holds two electrons, with $m_s = +\\frac{1}{2}$ and $-\\frac{1}{2}$.',
        'So the $4f$ subshell holds $4 \\times 2 = 8$ electrons.',
      ],
      errorLines: [3],
      explanation: '$m_\\ell$ runs over **all** integers from $-\\ell$ to $+\\ell$, negatives included: $-3, -2, -1, 0, 1, 2, 3$. That is $2\\ell + 1 = 7$ orbitals, and $7 \\times 2 = 14$ electrons. The lanthanide series is 14 elements long because 14 electrons fill $4f$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Energy order in many-electron atoms: penetration and shielding',
      blocks: [
        {
          type: 'p',
          text: 'In hydrogen, the energy depends only on $n$: $2s$ and $2p$ have exactly the same energy, as do $3s$, $3p$ and $3d$. Orbitals with equal energies are called **[[gchem-degenerate-orbitals|degenerate]]**. Add a second electron and that degeneracy breaks, because each electron is partly **shielded** from the nucleus by the others, and how much shielding it feels depends on how much the orbital **[[gchem-penetration|penetrates]]** toward the nucleus.',
        },
        {
          type: 'figure',
          svg: FIG_SPLIT,
          alt: 'Two energy diagrams side by side. Left, hydrogen: each shell n equals 1, 2, 3 is one row of orbital boxes at one energy, with 2s and 2p level, and 3s, 3p and 3d level; n equals 4 is a single line labelled 4s 4p 4d 4f all equal. Right, a many-electron atom: 1s lowest, then 2s below 2p, then 3s below 3p, then 4s, slightly below 3d, then 4p.',
          caption: 'Left: in hydrogen all subshells of a shell are degenerate. Right: in a many-electron atom they split, $s < p < d$, and the split is large enough that $4s$ lies below $3d$ for potassium and calcium.',
        },
        {
          type: 'graph',
          x: [0, 25],
          y: [0, 0.12],
          xStep: 5,
          yStep: 0.02,
          height: 300,
          functions: [
            { expr: '4x^2(2x^2 - 18x + 27)^2*e^(-2x/3)/19683', label: '3s', color: 'blue', domain: [0, 25] },
            { expr: '8x^4(x - 6)^2*e^(-2x/3)/19683', label: '3p', color: 'green', domain: [0, 25] },
            { expr: '8x^6*e^(-2x/3)/98415', label: '3d', color: 'orange', domain: [0, 25] },
          ],
          caption: 'Radial probability $P(r)$ for hydrogen\'s $3s$, $3p$ and $3d$ (horizontal axis in Bohr radii). The $3d$ peak is actually the closest in, but $3s$ has two small inner humps and $3p$ one: they **penetrate** close to the nucleus, inside where core electrons would sit.',
        },
        {
          type: 'table',
          headers: ['Orbital', 'Inner humps', 'Probability inside $r = a_0$'],
          rows: [
            ['$3s$', '$2$', '$0.99\\%$'],
            ['$3p$', '$1$', '$0.13\\%$'],
            ['$3d$', '$0$', '$0.00065\\%$'],
          ],
          caption: 'Hydrogen values, from integrating $P(r)$. Inside $a_0$ is roughly where the $1s$ core electrons of a heavier atom would be.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why penetration lowers the energy',
          text: 'An electron that spends time **inside** the core electrons is no longer shielded by them during those visits; it feels nearly the full nuclear charge, and that strong attraction lowers its energy a lot. An $s$ electron penetrates most, a $p$ electron less, a $d$ electron hardly at all. So within a shell the energies run $ns < np < nd < nf$. For potassium, $4s$ penetrates so much better than $3d$ that it ends up lower in energy and fills first, the $n + \\ell$ rule from Foundations.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Penetration is not the same as average size',
          text: 'Do not argue "2s is smaller than 2p, so it is lower in energy". In hydrogen the average distance of a $2s$ electron ($6a_0$) is actually **larger** than for $2p$ ($5a_0$). What matters is the small inner part of the $2s$ distribution that reaches inside the $1s$ core.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'In a lithium atom ($1s^2\\,2s^1$), why is the $2s$ orbital lower in energy than $2p$?',
      options: [
        { text: 'The $2s$ electron is closer to the nucleus on average than a $2p$ electron would be', why: 'Not so: in a hydrogen-like atom the average radius of $2s$ is larger than that of $2p$. Average size is not the deciding factor.' },
        { text: 'The $2s$ orbital has fewer nodes than $2p$', why: 'Both have exactly one node ($n - 1 = 1$): $2s$ has a radial node, $2p$ an angular one.' },
        { text: 'The $2s$ orbital penetrates the $1s$ core, so it is less shielded and feels a larger effective nuclear charge', correct: true, why: 'Part of the $2s$ distribution lies inside the $1s$ electrons, where it feels nearly the full $+3$ nuclear charge. A $2p$ electron is excluded from the nucleus by its nodal plane and is shielded more.' },
        { text: 'An $s$ orbital holds only two electrons, so there is less repulsion in it', why: 'Lithium\'s $2s$ holds only one electron, and the energy ordering is a property of the orbitals themselves, true even for one electron in each.' },
      ],
      explanation: 'Splitting of $2s$ and $2p$ is a many-electron effect. In hydrogen they are degenerate. In lithium, the $2s$ electron\'s inner hump takes it inside the $1s^2$ core, where shielding fails and the attraction is strong. A $2p$ electron has zero density at the nucleus and stays mostly outside the core, so it sees a smaller effective charge and has higher energy.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'In a hydrogen atom, the $2s$ and $2p$ orbitals have exactly the same energy.',
      answer: true,
      explanation: 'With only one electron there is nothing to shield it, and hydrogen\'s energy depends only on $n$: $E_n = -2.179 \\times 10^{-18}\\ \\text{J}/n^2$. All four $n = 2$ orbitals are degenerate. The ordering $2s < 2p$ appears only in atoms with two or more electrons, where penetration and shielding come into play.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Potassium is $[\\text{Ar}]\\,4s^1$. Give the quantum numbers of its outermost (valence) electron.',
      template: '$n =$ ___ , $\\ell =$ ___ , $m_\\ell =$ ___ , and $m_s$ is $+\\frac{1}{2}$ or $-\\frac{1}{2}$.',
      blanks: [{ answers: ['$4$'] }, { answers: ['$0$'] }, { answers: ['$0$'] }],
      wordBank: ['$4$', '$3$', '$0$', '$0$', '$1$', '$-1$'],
      explanation: 'A $4s$ electron has $n = 4$ and, being in an $s$ subshell, $\\ell = 0$. With $\\ell = 0$ the only possible $m_\\ell$ is 0. Its spin can be either value, since it is alone in its orbital. A common slip is to give $\\ell = 1$ by thinking "first subshell"; $\\ell$ counts from 0.',
    },
  ],
  takeaways: [
    '$n = 1, 2, \\dots$ (shell, size); $\\ell = 0, \\dots, n - 1$ (shape: $s, p, d, f$); $m_\\ell = -\\ell, \\dots, +\\ell$ (orientation); $m_s = \\pm\\frac{1}{2}$ (spin).',
    'A subshell has $2\\ell + 1$ orbitals; a shell has $\\sum (2\\ell + 1) = n^2$ orbitals and holds $2n^2$ electrons.',
    '$s$ orbitals are spheres, $p$ orbitals are two-lobed dumbbells along the axes, and four of the five $d$ orbitals are four-lobed; lobes of opposite sign are separated by nodes.',
    'An orbital has $\\ell$ angular nodes and $n - \\ell - 1$ radial nodes, $n - 1$ in total.',
    'Pauli: no two electrons in an atom share all four quantum numbers, so an orbital holds at most two electrons, with opposite spins.',
    'In hydrogen, energy depends only on $n$. In many-electron atoms, penetration and shielding split each shell: $ns < np < nd < nf$, and $4s$ falls below $3d$ for K and Ca.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 6: Electronic Structure and Periodic Properties of Elements',
      url: 'https://openstax.org/books/chemistry-2e/pages/6-introduction',
      source: 'openstax',
      note: 'Section 6.3 introduces the four quantum numbers and orbital shapes, with practice on allowed sets.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search for "atomic orbitals" and "penetration and shielding" for alternative explanations and 3D orbital renderings.',
    },
    {
      title: 'Wikipedia — Atomic orbital',
      url: 'https://en.wikipedia.org/wiki/Atomic_orbital',
      source: 'wikipedia',
      note: 'A table of real orbital shapes for $s$ through $f$, and how the real orbitals are built from the complex $m_\\ell$ solutions.',
    },
    {
      title: 'Wikipedia — Stern–Gerlach experiment',
      url: 'https://en.wikipedia.org/wiki/Stern%E2%80%93Gerlach_experiment',
      source: 'wikipedia',
      note: 'The 1922 experiment that revealed spin quantization by splitting a beam of silver atoms in two.',
    },
  ],
};
