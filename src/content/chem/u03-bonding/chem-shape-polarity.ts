import type { Lesson } from '../../types';

// <figures> (generated from hand-written SVG; electron counts checked)
const FIG = {
  dipole_sum: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><text x="120" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="60" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="180" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="108" y1="93" x2="72" y2="93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="108" y1="87" x2="72" y2="87" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="132" y1="87" x2="168" y2="87" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="132" y1="93" x2="168" y2="93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="108" y1="60" x2="75" y2="60" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><polygon points="66,60 75,64.5 75,55.5" class="f-purple"/><line x1="99" y1="66" x2="99" y2="54" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><line x1="132" y1="60" x2="165" y2="60" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><polygon points="174,60 165,55.5 165,64.5" class="f-purple"/><line x1="141" y1="54" x2="141" y2="66" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><text x="120" y="135" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">equal and opposite:</text><text x="120" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">net dipole = 0</text><text x="120" y="182" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-green">CO₂ is nonpolar</text><text x="380" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="332.6" y="106.7" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="427.4" y="106.7" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="370" y1="77.7" x2="342.5" y2="99" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="390" y1="77.7" x2="417.5" y2="99" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="332.5" y1="90.3" x2="350.7" y2="76.3" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><polygon points="357.8,70.7 347.9,72.7 353.4,79.8" class="f-purple"/><line x1="335.9" y1="80.1" x2="343.3" y2="89.6" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><line x1="427.5" y1="90.3" x2="409.3" y2="76.3" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><polygon points="402.2,70.7 406.6,79.8 412.1,72.7" class="f-purple"/><line x1="416.7" y1="89.6" x2="424.1" y2="80.1" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><line x1="380" y1="132" x2="380" y2="97" class="s-red" stroke-width="3" stroke-linecap="round"/><polygon points="380,86 374.5,97 385.5,97" class="f-red"/><line x1="374" y1="123" x2="386" y2="123" class="s-red" stroke-width="3" stroke-linecap="round"/><text x="390" y="120" text-anchor="start" dominant-baseline="central" style="font-size:15.7px" class="t-red">net</text><text x="380" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">bent: the vectors do not cancel</text><text x="380" y="182" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-red">H₂O is polar</text><text x="260" y="218" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-purple">purple arrows: bond dipoles (pointing to the more electronegative atom)</text></svg>',
  egeom: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg"><text x="85" y="95" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="29" y="95" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="141" y="95" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="73" y1="98" x2="41" y2="98" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="73" y1="92" x2="41" y2="92" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="97" y1="92" x2="129" y2="92" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="97" y1="98" x2="129" y2="98" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M113,95 A28,28 0 0 0 57,95" fill="none" class="s-blue" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="85" y="53" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">180°</text><text x="85" y="160" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">linear</text><text x="85" y="182" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">2 groups · CO₂</text><text x="260" y="100" text-anchor="middle" dominant-baseline="central" style="font-size:24px">B</text><text x="260" y="46" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="260" y1="86" x2="260" y2="60" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="213.2" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="249.3" y1="106.2" x2="224" y2="120.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="306.8" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="270.7" y1="106.2" x2="296" y2="120.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M240.9,111 A22,22 0 0 0 279.1,111" fill="none" class="s-blue" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="260" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">120°</text><text x="260" y="160" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">trigonal planar</text><text x="260" y="182" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">3 groups · BF₃</text><text x="430" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="430" y="40" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="382.9" y="114" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="459.8" y="134.6" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="482.2" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="430" y1="78" x2="430" y2="54" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="418.9" y1="97.2" x2="394" y2="108.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="437.6,102.8 448.6,126.4 455.9,121.2" fill="currentColor"/><line x1="444.4" y1="94.5" x2="443.7" y2="97.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="449.4" y1="95.1" x2="448.4" y2="99" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="454.4" y1="95.8" x2="453" y2="100.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="459.3" y1="96.4" x2="457.6" y2="102.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="464.3" y1="97.1" x2="462.2" y2="104.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="469.3" y1="97.7" x2="466.9" y2="106.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><path d="M430,70 A22,22 0 0 0 410.1,101.3" fill="none" class="s-blue" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="390.2" y="69" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">109.5°</text><text x="430" y="160" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">tetrahedral</text><text x="430" y="182" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">4 groups · CH₄</text></svg>',
  en_continuum: '<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="64" width="55.8" height="28" class="f-green" fill-opacity="0.25"/><rect x="85.8" y="64" width="223" height="28" class="f-orange" fill-opacity="0.22"/><rect x="308.8" y="64" width="181.2" height="28" class="f-purple" fill-opacity="0.22"/><text x="57.9" y="18" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px;font-weight:600" class="t-green">nonpolar</text><text x="57.9" y="36" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px;font-weight:600" class="t-green">covalent</text><text x="197.3" y="18" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px;font-weight:600" class="t-orange">polar covalent</text><text x="197.3" y="36" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-orange">unequal sharing, δ+ and δ−</text><text x="399.4" y="18" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px;font-weight:600" class="t-purple">ionic</text><text x="399.4" y="36" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-purple">electron transfer</text><line x1="30" y1="60" x2="30" y2="92" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><text x="30" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">0</text><line x1="85.8" y1="60" x2="85.8" y2="92" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><text x="85.8" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">0.4</text><line x1="308.8" y1="60" x2="308.8" y2="92" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><text x="308.8" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">2</text><line x1="448.2" y1="60" x2="448.2" y2="92" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><text x="448.2" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">3</text><line x1="30" y1="92" x2="490" y2="92" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><text x="490" y="50" text-anchor="end" dominant-baseline="central" style="font-size:14.6px" class="t-gray">ΔEN</text><line x1="30" y1="92" x2="30" y2="126" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 3"/><circle cx="30" cy="92" r="3.2" fill="currentColor"/><text x="30" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">H–H 0.00</text><line x1="78.8" y1="92" x2="78.8" y2="154" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 3"/><circle cx="78.8" cy="92" r="3.2" fill="currentColor"/><text x="78.8" y="164" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">C–H 0.35</text><line x1="163.8" y1="92" x2="163.8" y2="126" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 3"/><circle cx="163.8" cy="92" r="3.2" fill="currentColor"/><text x="163.8" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">H–Cl 0.96</text><line x1="202.8" y1="92" x2="202.8" y2="154" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 3"/><circle cx="202.8" cy="92" r="3.2" fill="currentColor"/><text x="202.8" y="164" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">O–H 1.24</text><line x1="278.1" y1="92" x2="278.1" y2="126" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 3"/><circle cx="278.1" cy="92" r="3.2" fill="currentColor"/><text x="278.1" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">H–F 1.78</text><line x1="340.8" y1="92" x2="340.8" y2="154" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 3"/><circle cx="340.8" cy="92" r="3.2" fill="currentColor"/><text x="340.8" y="164" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Na–Cl 2.23</text><line x1="470.5" y1="92" x2="470.5" y2="126" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 3"/><circle cx="470.5" cy="92" r="3.2" fill="currentColor"/><text x="470.5" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">K–F 3.16</text></svg>',
  hbond_water: '<svg viewBox="0 0 520 238" xmlns="http://www.w3.org/2000/svg"><text x="260" y="122" text-anchor="middle" dominant-baseline="central" style="font-size:22px">O</text><text x="231.5" y="144" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="252.1" y1="128.1" x2="237.9" y2="139.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="288.5" y="144" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="267.9" y1="128.1" x2="282.1" y2="139.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="192" y="174.7" text-anchor="middle" dominant-baseline="central" style="font-size:22px">O</text><text x="159.5" y="190.1" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="183" y1="179" x2="166.7" y2="186.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="215.1" y="202.2" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="198.4" y1="182.3" x2="210" y2="196.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="224.4" y1="149.5" x2="201.5" y2="167.3" class="s-blue" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2 5"/><text x="328" y="174.7" text-anchor="middle" dominant-baseline="central" style="font-size:22px">O</text><text x="304.9" y="202.2" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="321.6" y1="182.3" x2="310" y2="196.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="360.5" y="190.1" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="337" y1="179" x2="353.3" y2="186.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="295.6" y1="149.5" x2="318.5" y2="167.3" class="s-blue" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2 5"/><text x="203.8" y="41.7" text-anchor="middle" dominant-baseline="central" style="font-size:22px">O</text><text x="224.4" y="71.2" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="209.5" y1="49.9" x2="219.8" y2="64.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="227.2" y="14.3" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="210.3" y1="34.1" x2="222" y2="20.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="229.6" y1="78.6" x2="253.1" y2="112.2" class="s-blue" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2 5"/><text x="316.2" y="41.7" text-anchor="middle" dominant-baseline="central" style="font-size:22px">O</text><text x="295.6" y="71.2" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="310.5" y1="49.9" x2="300.2" y2="64.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="292.8" y="14.3" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">H</text><line x1="309.7" y1="34.1" x2="298" y2="20.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="290.4" y1="78.6" x2="266.9" y2="112.2" class="s-blue" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2 5"/><text x="440" y="30" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">⋯ hydrogen bond</text><text x="440" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-blue">(between molecules)</text><text x="80" y="30" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">— covalent O–H bond</text><text x="80" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">(inside a molecule)</text></svg>',
  hcl_dipole: '<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg"><ellipse cx="190" cy="70" rx="110" ry="40" class="f-blue" fill-opacity="0.10"/><ellipse cx="214" cy="70" rx="62" ry="32" class="f-blue" fill-opacity="0.16"/><text x="120" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="220" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Cl</text><line x1="132" y1="70" x2="202" y2="70" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="120" y="34" text-anchor="middle" dominant-baseline="central" style="font-size:19.0px" class="t-blue">δ+</text><text x="222" y="26" text-anchor="middle" dominant-baseline="central" style="font-size:19.0px" class="t-red">δ−</text><line x1="112" y1="126" x2="227" y2="126" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><polygon points="236,126 227,121.5 227,130.5" class="f-purple"/><line x1="121" y1="120" x2="121" y2="132" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><text x="180" y="148" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-purple">dipole arrow: + end → − end</text><text x="330" y="60" text-anchor="end" dominant-baseline="central" style="font-size:14.6px" class="t-gray">EN 3.16</text><text x="60" y="80" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">EN 2.20</text></svg>',
  lp_shapes: '<svg viewBox="0 0 520 262" xmlns="http://www.w3.org/2000/svg"><text x="80" y="105" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="80" y="53" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="80" y1="91" x2="80" y2="67" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="32.9" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="68.9" y1="110.2" x2="44" y2="121.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="109.8" y="147.6" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><polygon points="87.6,115.8 98.6,139.4 105.9,134.2" fill="currentColor"/><text x="130.2" y="118.5" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="94.3" y1="107.4" x2="93.6" y2="110" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="98.9" y1="108" x2="97.9" y2="111.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="103.6" y1="108.6" x2="102.2" y2="113.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="108.2" y1="109.1" x2="106.5" y2="115.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="112.9" y1="109.7" x2="110.8" y2="117.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="117.5" y1="110.2" x2="115.1" y2="119.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><path d="M80,83 A22,22 0 0 0 60.1,114.3" fill="none" class="s-blue" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="38.4" y="81" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">109.5°</text><text x="85" y="176" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">CH₄</text><text x="85" y="197" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">tetrahedral</text><text x="85" y="218" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">4 bonds, 0 lone pairs</text><text x="255" y="112" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><ellipse cx="255" cy="85" rx="15" ry="10" transform="rotate(-90 255 85)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="251" cy="85" r="2.4" fill="currentColor"/><circle cx="259" cy="85" r="2.4" fill="currentColor"/><text x="207.9" y="134" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="243.9" y1="117.2" x2="219" y2="128.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="284.8" y="154.6" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><polygon points="262.6,122.8 273.6,146.4 280.9,141.2" fill="currentColor"/><text x="305.2" y="125.5" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="269.3" y1="114.4" x2="268.6" y2="117" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="273.9" y1="115" x2="272.9" y2="118.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="278.6" y1="115.6" x2="277.2" y2="120.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="283.2" y1="116.1" x2="281.5" y2="122.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="287.9" y1="116.7" x2="285.8" y2="124.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="292.5" y1="117.2" x2="290.1" y2="126.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><path d="M235.1,121.3 A22,22 0 0 0 267.6,130" fill="none" class="s-blue" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="244.6" y="150.6" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">107°</text><text x="260" y="176" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">NH₃</text><text x="260" y="197" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">trigonal pyramidal</text><text x="260" y="218" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">3 bonds, 1 lone pair</text><text x="435" y="100" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="392.3" y="133.1" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="477.7" y="133.1" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="425" y1="107.7" x2="402.3" y2="125.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="445" y1="107.7" x2="467.7" y2="125.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse cx="419.5" cy="77.9" rx="15" ry="10" transform="rotate(-125 419.5 77.9)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="416.2" cy="80.2" r="2.4" fill="currentColor"/><circle cx="422.8" cy="75.6" r="2.4" fill="currentColor"/><ellipse cx="450.5" cy="77.9" rx="15" ry="10" transform="rotate(-55 450.5 77.9)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="447.2" cy="75.6" r="2.4" fill="currentColor"/><circle cx="453.8" cy="80.2" r="2.4" fill="currentColor"/><path d="M419.2,112.2 A20,20 0 0 0 450.8,112.2" fill="none" class="s-blue" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="435" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">104.5°</text><text x="435" y="176" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">H₂O</text><text x="435" y="197" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600">bent</text><text x="435" y="218" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">2 bonds, 2 lone pairs</text><text x="260" y="250" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-purple">All three have 4 electron groups (tetrahedral electron geometry).</text></svg>',
  wedge_legend: '<svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg"><text x="30" y="22" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="100" y="22" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="42" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="128" y="22" text-anchor="start" dominant-baseline="central" style="font-size:16.8px">bond in the plane of the page</text><text x="30" y="60" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="100" y="60" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><polygon points="42,60 88,64.5 88,55.5" fill="currentColor"/><text x="128" y="60" text-anchor="start" dominant-baseline="central" style="font-size:16.8px">bond coming toward you</text><text x="30" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="100" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="45.8" y1="96.7" x2="45.8" y2="99.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="53.5" y1="96" x2="53.5" y2="100" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="61.2" y1="95.3" x2="61.2" y2="100.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="68.8" y1="94.7" x2="68.8" y2="101.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="76.5" y1="94" x2="76.5" y2="102" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="84.2" y1="93.3" x2="84.2" y2="102.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="128" y="98" text-anchor="start" dominant-baseline="central" style="font-size:16.8px">bond going away from you</text></svg>',
};
// </figures>

const HALF = 'a*pi/360'; // half of the bond angle a (degrees), in radians

export const lesson: Lesson = {
  id: 'chem-shape-polarity',
  title: 'Molecular Shape and Polarity',
  summary: 'Electron groups push each other as far apart as possible, which fixes a molecule\'s 3D shape. Add up its bond dipoles like vectors and you can predict whether it is polar — and why water is so unusual.',
  minutes: 21,
  objectives: [
    'Use VSEPR theory to predict electron-group geometry and molecular geometry from a Lewis structure',
    'State the ideal bond angles 180°, 120° and 109.5°, and explain why lone pairs shrink them (107°, 104.5°)',
    'Read and draw wedge-and-dash structures',
    'Classify a bond as nonpolar, polar covalent or ionic from the electronegativity difference, and mark partial charges',
    'Decide whether a molecule is polar by adding bond dipoles as vectors',
    'Name the three main intermolecular forces and use them to explain boiling points and "like dissolves like"',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Electron groups push apart: VSEPR',
      blocks: [
        {
          type: 'p',
          text: 'A Lewis structure tells you which atoms are bonded, but it is flat. Real molecules are three-dimensional, and their shape decides almost everything about how they behave: whether they dissolve in water, how they fit into a protein, what temperature they boil at.',
        },
        {
          type: 'p',
          text: 'The shape comes from a simple idea. Around a central atom, the electrons sit in a few regions — bonds and lone pairs. All of them are negative, so they repel each other and spread out as far as possible. This is [[vsepr|VSEPR]] theory (Valence Shell Electron Pair Repulsion).',
        },
        {
          type: 'definition',
          term: 'Electron group',
          text: 'An [[chem-electron-group|electron group]] is one region of electrons around the central atom: **a lone pair, a single bond, a double bond or a triple bond each count as one group**. A double bond counts once because its electrons all lie between the same two atoms, pointing in the same direction.',
        },
        {
          type: 'figure',
          svg: FIG.egeom,
          alt: 'Three shapes. Linear: O=C=O with a 180 degree arc. Trigonal planar: B with three F atoms at 120 degrees. Tetrahedral: C with four H atoms, one up, one lower left, one on a solid wedge and one on a dashed wedge, with a 109.5 degree arc.',
          caption: 'Two groups point opposite ways (180°), three spread into a flat triangle (120°), four point to the corners of a tetrahedron (109.5°). Lone pairs on the outer atoms are left out of shape drawings.',
        },
        {
          type: 'figure',
          svg: FIG.wedge_legend,
          alt: 'Legend: a plain line is a bond in the plane of the page; a solid wedge is a bond coming toward you; a dashed wedge is a bond going away from you.',
          caption: 'Wedge-and-dash notation draws 3D on flat paper. The narrow end of a wedge is at the central atom.',
          maxWidth: 400,
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Balloons',
          text: 'Tie two balloons together at their knots and they point in opposite directions. Three settle into a flat triangle, and four into a tetrahedron. Nobody arranges them — each balloon simply takes up space and pushes the others away. Electron groups do the same.',
        },
        {
          type: 'derivation',
          title: 'Why the tetrahedral angle is $109.5^\\circ$, not $90^\\circ$',
          steps: [
            { tex: '\\mathbf{u} = (1, 1, 1), \\quad \\mathbf{v} = (1, -1, -1)', why: 'Put carbon at the origin. Four bonds pointing to alternate corners of a cube, $(1,1,1)$, $(1,-1,-1)$, $(-1,1,-1)$, $(-1,-1,1)$, are as far apart as four directions in 3D can be. Take two of them.' },
            { tex: '\\mathbf{u} \\cdot \\mathbf{v} = 1 - 1 - 1 = -1', why: 'The [[dot-product|dot product]] multiplies matching components and adds.' },
            { tex: '\\lVert \\mathbf{u} \\rVert = \\lVert \\mathbf{v} \\rVert = \\sqrt{3}', why: 'Each vector has length $\\sqrt{1^2 + 1^2 + 1^2}$.' },
            { tex: '\\cos\\theta = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\lVert\\mathbf{u}\\rVert\\,\\lVert\\mathbf{v}\\rVert} = \\frac{-1}{3}', why: 'The angle formula from vector geometry.' },
            { tex: '\\theta = \\arccos\\left(-\\tfrac{1}{3}\\right) \\approx 109.47^\\circ', why: 'Every pair of the four vectors gives the same dot product, so all six H–C–H angles are equal.' },
          ],
          result: 'The tetrahedral angle is $\\arccos(-1/3) \\approx 109.5^\\circ$. In 3D, four groups can do better than the $90^\\circ$ of a flat cross. (Notice also that the four vectors add up to $(0, 0, 0)$ — remember that when we get to polarity.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why groups, not atoms, decide',
          text: 'Repulsion comes from electrons, and every group is a cloud of electrons whether or not an atom sits at the end of it. So you first find how the **groups** arrange themselves, then look at where the **atoms** are. That two-step view is the key to the next card.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Hydrogen cyanide is $\\ce{H-C#N}$, with a lone pair on nitrogen. How many electron groups surround the **carbon** atom?',
      hint: 'A triple bond counts as one group, just like a single bond.',
      label: 'electron groups $=$',
      answer: '2',
      explanation: 'Carbon has a single bond to H and a triple bond to N, and no lone pairs: 2 groups. Two groups point in opposite directions, so $\\ce{HCN}$ is **linear** with a $180^\\circ$ angle — the same shape as $\\ce{CO2}$. Counting the 3 bonding pairs of the triple bond separately is the classic mistake; all six of its electrons lie in the same direction.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Lone pairs: electron geometry vs molecular geometry',
      blocks: [
        {
          type: 'p',
          text: 'Methane, ammonia and water each have **four** electron groups around the central atom, so in all three the groups point toward the corners of a tetrahedron: the **electron-group geometry** is tetrahedral. But when we name a molecule\'s shape — its [[molecular-geometry|molecular geometry]] — we describe where the **atoms** are. Lone pairs are there, pushing, but invisible in the name.',
        },
        {
          type: 'figure',
          svg: FIG.lp_shapes,
          alt: 'Three 3D structures. CH4: tetrahedral with 109.5 degrees. NH3: N with a purple lone-pair lobe on top and three H atoms below, trigonal pyramidal, 107 degrees. H2O: O with two purple lone-pair lobes above and two H atoms below, bent, 104.5 degrees.',
          caption: 'Purple lobes are lone pairs. Replace one H with a lone pair and the tetrahedron becomes a pyramid; replace two and only a bent line of three atoms remains.',
        },
        {
          type: 'table',
          headers: ['Groups', 'Lone pairs', 'Molecular geometry', 'Angle', 'Example'],
          rows: [
            ['2', '0', 'linear', '$180^\\circ$', '$\\ce{CO2}$, $\\ce{HCN}$'],
            ['3', '0', 'trigonal planar', '$120^\\circ$', '$\\ce{BF3}$, $\\ce{CO3^2-}$'],
            ['3', '1', 'bent', 'about $117^\\circ$', '$\\ce{O3}$'],
            ['4', '0', 'tetrahedral', '$109.5^\\circ$', '$\\ce{CH4}$, $\\ce{NH4+}$'],
            ['4', '1', 'trigonal pyramidal', 'about $107^\\circ$', '$\\ce{NH3}$'],
            ['4', '2', 'bent', 'about $104.5^\\circ$', '$\\ce{H2O}$'],
          ],
          caption: 'The electron-group geometry is set by the number of groups (2 linear, 3 trigonal planar, 4 tetrahedral); lone pairs then decide the molecular geometry.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why lone pairs squeeze the bond angles',
          text: 'A bonding pair is held between two nuclei, so it is pulled out into a slim region. A lone pair is held by only one nucleus, so it sits closer to that atom and spreads wider. Fatter clouds push harder, so the bonds get squeezed together: $109.5^\\circ$ in $\\ce{CH4}$, $107^\\circ$ with one lone pair in $\\ce{NH3}$, $104.5^\\circ$ with two in $\\ce{H2O}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Water is not linear',
          text: 'The Lewis structure $\\ce{H-O-H}$ is often typed in a straight line, but that is just typography. Oxygen has four electron groups, so water is bent. That bend is the single most important fact in this lesson: it makes water polar, and almost everything special about water follows.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Describe ammonia, $\\ce{NH3}$ (three N–H bonds and one lone pair on N).',
      template: 'Its electron-group geometry is ___, its molecular geometry is ___, and its H–N–H angle is about ___.',
      blanks: [{ answers: ['tetrahedral'] }, { answers: ['trigonal pyramidal'] }, { answers: ['$107^\\circ$'] }],
      wordBank: ['tetrahedral', 'trigonal pyramidal', 'trigonal planar', 'bent', '$107^\\circ$', '$120^\\circ$', '$109.5^\\circ$', '$90^\\circ$'],
      explanation: 'Four electron groups (3 bonds + 1 lone pair) arrange tetrahedrally. Naming only the atoms, N sits at the top of a pyramid with the three H atoms as its base: trigonal pyramidal. The lone pair pushes the bonds a little closer than $109.5^\\circ$, to about $107^\\circ$. "Trigonal planar" would need 3 groups and no lone pair, like $\\ce{BF3}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'From Lewis structure to shape',
      blocks: [
        {
          type: 'p',
          text: 'Predicting a shape is a short pipeline, and every stage uses something you already know.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Draw the Lewis structure', text: 'Use the method from the last lesson.' },
            { title: 'Count electron groups on the central atom', text: 'Bonds (single, double or triple: one each) plus lone pairs.' },
            { title: 'Electron-group geometry', text: '2 → linear, 3 → trigonal planar, 4 → tetrahedral.' },
            { title: 'Molecular geometry', text: 'Look only at the atoms: use the lone-pair count and the table.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Shape of formaldehyde, $\\ce{H2C=O}$',
          steps: [
            { tex: '\\ce{H2C=O}: 12\\ \\text{electrons}, \\text{ two lone pairs on O}', why: 'You built this Lewis structure in the last lesson: C central, single bonds to two H, a double bond to O.' },
            { tex: '\\text{C: } 2\\ \\text{single} + 1\\ \\text{double} + 0\\ \\text{lone pairs} = 3\\ \\text{groups}', why: 'The double bond counts as one group.' },
            { tex: '3\\ \\text{groups} \\implies \\text{trigonal planar}, \\approx 120^\\circ', why: 'Three groups spread out in a flat triangle.' },
            { tex: '0\\ \\text{lone pairs on C} \\implies \\text{molecular geometry: trigonal planar}', why: 'With no lone pairs on the central atom, the atoms sit where the groups point. (The measured H–C–H angle is about $116^\\circ$: the double bond\'s extra electrons push a little harder.)' },
          ],
          result: 'Formaldehyde is flat and trigonal planar.',
        },
        {
          type: 'derivation',
          title: 'Shape of phosphorus trichloride, $\\ce{PCl3}$',
          steps: [
            { tex: '5 + 3(7) = 26\\ \\text{electrons}', why: 'P is in group 15, each Cl in group 17.' },
            { tex: '26 - 3(2) - 3(6) = 2 \\implies 1\\ \\text{lone pair on P}', why: 'Three P–Cl bonds use 6, the three Cl atoms take 6 each, and the last 2 electrons go on phosphorus.' },
            { tex: '3\\ \\text{bonds} + 1\\ \\text{lone pair} = 4\\ \\text{groups} \\implies \\text{tetrahedral electron geometry}', why: 'Four groups point to tetrahedral corners.' },
            { tex: '1\\ \\text{lone pair} \\implies \\text{trigonal pyramidal}', why: 'Same pattern as ammonia: one corner is a lone pair, so the atoms form a pyramid (measured angle about $100^\\circ$).' },
          ],
          result: '$\\ce{PCl3}$ is trigonal pyramidal, like $\\ce{NH3}$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love to ask for both geometries. If a question says "shape" or "molecular geometry", name the arrangement of atoms (bent, pyramidal). If it says "electron geometry" or "electron-pair geometry", count the lone pairs as directions too (tetrahedral for water). Five and six groups (trigonal bipyramidal, octahedral) appear in General Chemistry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'Put the steps for predicting the molecular geometry of $\\ce{H2S}$ in order.',
      lines: [
        'Draw the Lewis structure: S central, two S–H bonds, two lone pairs on S',
        'Count electron groups on S: $2 + 2 = 4$',
        'Four groups → tetrahedral electron-group geometry',
        'Two of the groups are lone pairs → molecular geometry is bent',
      ],
      distractors: ['Two atoms are bonded to S → molecular geometry is linear'],
      explanation: 'Hydrogen sulfide follows exactly the same path as water (sulfur is below oxygen in group 16): 8 valence electrons, two bonds, two lone pairs, four groups, tetrahedral electron geometry, bent molecule. The distractor counts only the bonded atoms and forgets that lone pairs take up space.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Bond polarity: unequal sharing',
      blocks: [
        {
          type: 'p',
          text: 'In $\\ce{H2}$ or $\\ce{Cl2}$ the two atoms are identical, so they share the electron pair equally. But in $\\ce{H-Cl}$ chlorine pulls harder. [[electronegativity|Electronegativity]] (EN) measures that pull on shared electrons; it rises toward the upper right of the periodic table, peaking at fluorine.',
        },
        {
          type: 'table',
          headers: ['Element', 'H', 'C', 'N', 'O', 'F', 'Na', 'S', 'Cl'],
          rows: [['EN (Pauling)', '2.20', '2.55', '3.04', '3.44', '3.98', '0.93', '2.58', '3.16']],
        },
        {
          type: 'p',
          text: 'When the electrons spend more time near one atom, that atom carries a small negative charge, written $\\delta-$ ("delta minus"), and its partner a small positive charge, $\\delta+$. The bond is a [[polar-bond|polar bond]]: it has a positive end and a negative end — a **bond dipole**. Chemists draw it as an arrow pointing toward the negative end with a cross on the positive tail.',
        },
        {
          type: 'figure',
          svg: FIG.hcl_dipole,
          alt: 'H–Cl with a shaded electron cloud shifted toward Cl; delta plus over H, delta minus over Cl; EN 2.20 under H and 3.16 by Cl; a purple dipole arrow below pointing from H (crossed tail) to Cl.',
          caption: 'In $\\ce{HCl}$ the shared pair is pulled toward chlorine, so H is $\\delta+$ and Cl is $\\delta-$.',
          maxWidth: 400,
        },
        {
          type: 'p',
          text: 'The size of the electronegativity difference, $\\Delta\\text{EN}$, tells you how lopsided the sharing is. Bonding is a continuum, from perfectly equal sharing to complete transfer:',
        },
        {
          type: 'figure',
          svg: FIG.en_continuum,
          alt: 'A horizontal scale of electronegativity difference from 0 to 3.3. Green zone 0 to 0.4: nonpolar covalent. Orange zone 0.4 to 2.0: polar covalent, unequal sharing. Purple zone above 2.0: ionic, electron transfer. Example bonds: H–H 0.00, C–H 0.35, H–Cl 0.96, O–H 1.24, H–F 1.78, Na–Cl 2.23, K–F 3.16.',
          caption: 'Rough guide: $\\Delta\\text{EN} < 0.4$ nonpolar covalent, $0.4$ to $2.0$ polar covalent, above $2.0$ mostly ionic. The boundaries are conventions; nature changes smoothly.',
        },
        {
          type: 'derivation',
          title: 'Classify the H–Cl bond',
          steps: [
            { tex: '\\Delta\\text{EN} = 3.16 - 2.20 = 0.96', why: 'Subtract the smaller electronegativity from the larger. The difference is always taken as positive.' },
            { tex: '0.4 < 0.96 < 2.0 \\implies \\text{polar covalent}', why: 'It falls in the middle band of the continuum.' },
            { tex: '\\overset{\\delta+}{\\ce{H}}-\\overset{\\delta-}{\\ce{Cl}}', why: 'The more electronegative atom gets the partial negative charge.' },
          ],
          result: 'H–Cl is a polar covalent bond with the negative end on chlorine.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Cutoffs differ between books',
          text: 'Some textbooks put the ionic boundary at $1.7$ or $1.8$ instead of $2.0$. Do not treat any cutoff as a law: the more useful rule is that metal + nonmetal compounds behave ionically, while nonmetal + nonmetal bonds are covalent, polar or not.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Using $\\text{EN(O)} = 3.44$ and $\\text{EN(H)} = 2.20$, find the electronegativity difference for an O–H bond. (Two decimal places.)',
      label: '$\\Delta\\text{EN} =$',
      answer: '1.24',
      answerTex: '1.24',
      tolerance: 0.005,
      explanation: '$\\Delta\\text{EN} = 3.44 - 2.20 = 1.24$, squarely polar covalent, with oxygen $\\delta-$ and hydrogen $\\delta+$. O–H bonds are much more polar than C–H bonds ($\\Delta\\text{EN} = 0.35$), which is a big part of why water and alcohols behave so differently from oils and fuels.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Which bond is the **most** polar? (EN: H 2.20, C 2.55, N 3.04, O 3.44, F 3.98)',
      options: [
        { text: 'C–H', why: '$\\Delta\\text{EN} = 0.35$: essentially nonpolar.' },
        { text: 'N–H', why: '$\\Delta\\text{EN} = 0.84$: polar, but less than the bonds to O and F.' },
        { text: 'O–H', why: '$\\Delta\\text{EN} = 1.24$: quite polar, but fluorine pulls harder still.' },
        { text: 'F–H', correct: true, why: '$\\Delta\\text{EN} = 3.98 - 2.20 = 1.78$, the largest difference.' },
      ],
      explanation: 'Bond polarity grows with $\\Delta\\text{EN}$. All four bonds share hydrogen, so the winner is simply the most electronegative partner, fluorine. Moving across period 2 from C to F, electronegativity rises and so does the polarity of the bond to H.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Molecular polarity: add the bond dipoles as vectors',
      blocks: [
        {
          type: 'p',
          text: 'A bond dipole has a size and a direction — it is a [[vector|vector]]. A molecule\'s overall polarity is the **vector sum** of all its bond dipoles. If they cancel, the molecule is nonpolar even though its bonds are polar; if they do not, the molecule is a [[polar-molecule|polar molecule]] with a positive side and a negative side.',
        },
        {
          type: 'p',
          text: 'Here is water. Each purple arrow is one O–H bond dipole (pointing from H toward O). The second arrow is drawn tip-to-tail from the end of the first, exactly as you add vectors, and the red arrow is the sum. Drag the bond angle to $180^\\circ$ — the shape of $\\ce{CO2}$ — and watch the sum vanish.',
        },
        {
          type: 'graph',
          x: [-2.2, 2.2],
          y: [-1.3, 2.3],
          equal: true,
          xStep: 1,
          yStep: 1,
          segments: [
            { from: [0, 0], to: [`-sin(${HALF})`, `-cos(${HALF})`], color: 'gray' },
            { from: [0, 0], to: [`sin(${HALF})`, `-cos(${HALF})`], color: 'gray' },
            { from: [0, 0], to: [`sin(${HALF})`, `cos(${HALF})`], color: 'purple', arrow: true, label: 'bond dipole 1' },
            { from: [`sin(${HALF})`, `cos(${HALF})`], to: [0, `2cos(${HALF})`], color: 'purple', arrow: true, dashed: true, label: 'bond dipole 2' },
            { from: [0, 0], to: [0, `2cos(${HALF})`], color: 'red', arrow: true, label: 'sum' },
          ],
          points: [
            { x: 0, y: 0, label: 'O', color: 'red' },
            { x: `-sin(${HALF})`, y: `-cos(${HALF})`, label: 'H', color: 'gray' },
            { x: `sin(${HALF})`, y: `-cos(${HALF})`, label: 'H', color: 'gray' },
          ],
          sliders: [{ name: 'a', min: 90, max: 180, step: 0.5, value: 104.5, label: 'bond angle (degrees)' }],
          readouts: [{ label: 'net dipole, in units of one bond dipole $= 2\\cos(\\theta/2) =$', expr: `2cos(${HALF})`, digits: 3 }],
          caption: 'Gray: the molecule (O at the origin, two H atoms). At water\'s $104.5^\\circ$ the sum is about $1.22$ bond dipoles, pointing toward oxygen. At $180^\\circ$ the two dipoles are equal and opposite, and the sum is exactly $0$.',
        },
        {
          type: 'derivation',
          title: 'Net dipole of a bent molecule with bond angle $\\theta$',
          steps: [
            { tex: '\\boldsymbol{\\mu}_1 = \\mu\\left(\\sin\\tfrac{\\theta}{2},\\ \\cos\\tfrac{\\theta}{2}\\right)', why: 'Each bond makes an angle $\\theta/2$ with the vertical axis of symmetry, and each bond dipole has magnitude $\\mu$. The first points up and to the right (from the left H toward O).' },
            { tex: '\\boldsymbol{\\mu}_2 = \\mu\\left(-\\sin\\tfrac{\\theta}{2},\\ \\cos\\tfrac{\\theta}{2}\\right)', why: 'The mirror image: up and to the left (from the right H toward O).' },
            { tex: '\\boldsymbol{\\mu}_1 + \\boldsymbol{\\mu}_2 = \\left(0,\\ 2\\mu\\cos\\tfrac{\\theta}{2}\\right)', why: 'Add components. The horizontal parts cancel by symmetry; the vertical parts add.' },
            { tex: '\\lVert \\boldsymbol{\\mu}_1 + \\boldsymbol{\\mu}_2 \\rVert = 2\\mu\\cos\\tfrac{\\theta}{2}', why: 'This is zero only when $\\cos\\frac{\\theta}{2} = 0$, that is, $\\theta = 180^\\circ$: a linear molecule.' },
          ],
          result: 'A bent molecule with polar bonds is always polar; a linear, symmetric one is not.',
        },
        {
          type: 'figure',
          svg: FIG.dipole_sum,
          alt: 'Left: O=C=O with two purple dipole arrows pointing outward toward each O, labeled equal and opposite, net dipole 0, CO2 is nonpolar. Right: bent water with purple dipole arrows along each bond toward O and a red net dipole arrow pointing up toward O, labeled H2O is polar.',
          caption: 'Same kind of bonds, different shapes, opposite verdicts. Shape decides polarity.',
        },
        {
          type: 'p',
          text: 'Symmetry generalizes this. Three equal dipoles at $120^\\circ$ ($\\ce{BF3}$) cancel, and so do four equal dipoles pointing to the corners of a tetrahedron ($\\ce{CH4}$, $\\ce{CCl4}$) — those four cube-corner vectors from the first card add to $(0, 0, 0)$. Break the symmetry, with a lone pair ($\\ce{NH3}$) or a different outer atom ($\\ce{CH3Cl}$), and a net dipole appears.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Same math as a physics engine',
          text: 'Summing bond dipoles is exactly how a game engine finds the net force on a rigid body: add the force vectors component by component, `net = f1 + f2 + f3`. Symmetric loads (a box resting evenly on four legs) cancel sideways for the same reason $\\ce{CCl4}$ is nonpolar.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Units and conventions',
          text: 'Dipole sizes are measured in debyes (D): water $1.85\\ \\text{D}$, ammonia $1.47\\ \\text{D}$, $\\ce{CO2}$ exactly $0$. Physicists draw the dipole vector from $-$ to $+$, the opposite of the chemists\' arrow, but the cancellation argument is identical either way.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Suppose each O–H bond in water has a bond dipole of $1.5\\ \\text{D}$ and the bond angle is $104.5^\\circ$. Using $\\mu_{\\text{net}} = 2\\mu\\cos(\\theta/2)$, find the magnitude of water\'s net dipole. (Two decimal places.)',
      hint: '$\\theta/2 = 52.25^\\circ$. Make sure your calculator is in degree mode.',
      label: '$\\mu_{\\text{net}} =$',
      unit: 'D',
      answer: '2*1.5*cos(52.25*pi/180)',
      answerTex: '1.84\\ \\text{D}',
      tolerance: 0.006,
      explanation: '$\\mu_{\\text{net}} = 2(1.5)\\cos 52.25^\\circ = 3.0 \\times 0.6122 \\approx 1.84\\ \\text{D}$, close to the measured $1.85\\ \\text{D}$. If you got about $-1.21$ your calculator was in radian mode; if you got $3.0$ you added the magnitudes as if the bonds were parallel.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'Carbon dioxide contains polar C=O bonds, so $\\ce{CO2}$ is a polar molecule.',
      answer: false,
      explanation: 'Each C=O bond is polar ($\\Delta\\text{EN} = 0.89$), but $\\ce{CO2}$ is linear, so its two bond dipoles are equal and point in exactly opposite directions. Their vector sum is zero: $\\ce{CO2}$ is nonpolar. Polar bonds are necessary for a polar molecule, but not sufficient — the shape must also let the dipoles add up.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student decides whether carbon tetrachloride, $\\ce{CCl4}$, is polar. Tap the first line that is wrong. (EN: C 2.55, Cl 3.16)',
      lines: [
        '$\\Delta\\text{EN} = 3.16 - 2.55 = 0.61$, so each C–Cl bond is polar, with Cl $\\delta-$.',
        'Carbon has four bonds and no lone pairs: 4 electron groups.',
        'So $\\ce{CCl4}$ is tetrahedral, with $109.5^\\circ$ angles.',
        'All four bond dipoles point away from carbon, so they add up and $\\ce{CCl4}$ is polar.',
      ],
      errorLines: [4],
      explanation: 'Lines 1 to 3 are correct. But four equal vectors pointing to the corners of a regular tetrahedron add to zero (like the four cube-corner vectors whose sum is $(0,0,0)$). Pointing "away from carbon" in four symmetric directions means pulling equally every way. $\\ce{CCl4}$ is **nonpolar**, which is why it dissolves greases and was once used as a dry-cleaning solvent.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Forces between molecules',
      blocks: [
        {
          type: 'p',
          text: 'Covalent bonds hold atoms together **inside** a molecule. Much weaker attractions act **between** molecules: [[intermolecular-forces|intermolecular forces]]. They decide whether a substance is a gas, liquid or solid at room temperature. When water boils, its O–H bonds stay intact; only the attractions between molecules are overcome.',
        },
        {
          type: 'list',
          items: [
            '**London dispersion forces** (all molecules). Electrons slosh around, so for an instant one side of a molecule is slightly negative; that temporary dipole induces one in a neighbor, and they attract. More electrons (bigger molecules) means stronger dispersion forces.',
            '**Dipole–dipole forces** (polar molecules). The $\\delta+$ end of one molecule attracts the $\\delta-$ end of another. $\\ce{HCl}$ (molar mass $36.5\\ \\text{g/mol}$) boils at $-85\\ ^\\circ\\text{C}$, while nonpolar $\\ce{F2}$ ($38.0\\ \\text{g/mol}$) boils at $-188\\ ^\\circ\\text{C}$.',
            '**Hydrogen bonding** (an extra-strong dipole–dipole force). When H is bonded to N, O or F, it is so $\\delta+$ and so small that it attracts a lone pair on an N, O or F of a neighboring molecule. Hydrogen bonds are roughly $20\\ \\text{kJ/mol}$, about one-twentieth of an O–H covalent bond, but far stronger than other intermolecular attractions.',
          ],
        },
        {
          type: 'table',
          headers: ['Halogen', 'Electrons per molecule', 'Boiling point', 'State at 25 °C'],
          rows: [
            ['$\\ce{F2}$', '18', '$-188\\ ^\\circ\\text{C}$', 'gas'],
            ['$\\ce{Cl2}$', '34', '$-34\\ ^\\circ\\text{C}$', 'gas'],
            ['$\\ce{Br2}$', '70', '$59\\ ^\\circ\\text{C}$', 'liquid'],
            ['$\\ce{I2}$', '106', '$184\\ ^\\circ\\text{C}$', 'solid'],
          ],
          caption: 'All nonpolar, so only dispersion forces act. More electrons → stronger dispersion → higher boiling point.',
        },
        {
          type: 'figure',
          svg: FIG.hbond_water,
          alt: 'A central water molecule surrounded by four others. Blue dotted lines connect each H of the central molecule to the O of a neighbor, and the H of two upper neighbors to the central O. Labels: solid line is a covalent O–H bond inside a molecule; dotted line is a hydrogen bond between molecules.',
          caption: 'Each water molecule can donate two hydrogen bonds (through its H atoms) and accept two (through its lone pairs), knitting liquid water into a constantly shifting network.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only N, O and F?',
          text: 'These three are among the most electronegative elements, so an H bonded to them is stripped nearly bare: a tiny, concentrated $\\delta+$. They are also small atoms whose lone pairs are compact and easy to approach. Chlorine is even slightly more electronegative than nitrogen (3.16 vs 3.04), but it is a much larger atom, so its lone pairs are spread out and it forms only weak hydrogen bonds.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Which of these substances has hydrogen bonding between its molecules?',
      options: [
        { text: '$\\ce{CH4}$ (methane)', why: 'Its H atoms are bonded to carbon, which is not electronegative enough. Methane has only dispersion forces.' },
        { text: '$\\ce{HCl}$ (hydrogen chloride)', why: 'Polar, so dipole–dipole forces act, but Cl is too large to make strong hydrogen bonds. Only H bonded to N, O or F counts.' },
        { text: '$\\ce{NH3}$ (ammonia)', correct: true, why: 'H is bonded to N, and N has a lone pair to accept a hydrogen bond from a neighbor.' },
        { text: '$\\ce{CO2}$ (carbon dioxide)', why: 'It has no hydrogen at all, and the molecule is nonpolar: dispersion forces only.' },
      ],
      explanation: 'Hydrogen bonding needs an H covalently bonded to N, O or F on one molecule and a lone pair on N, O or F of another. Ammonia has both, which is why it boils at $-33\\ ^\\circ\\text{C}$, much higher than methane ($-162\\ ^\\circ\\text{C}$) despite nearly the same molar mass.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Why water\'s polarity matters',
      blocks: [
        {
          type: 'p',
          text: 'Water is a small, light molecule. By the trend of its chemical relatives it "should" be a gas at room temperature. The graph shows how strange it really is.',
        },
        {
          type: 'graph',
          x: [0, 140],
          y: [-180, 120],
          xStep: 20,
          yStep: 40,
          segments: [
            { from: [18.02, 100], to: [34.08, -60.3], color: 'red' },
            { from: [34.08, -60.3], to: [80.99, -41.3], color: 'red' },
            { from: [80.99, -41.3], to: [129.62, -2.2], color: 'red' },
            { from: [34.08, -60.3], to: [18.02, -66.8], color: 'red', dashed: true },
            { from: [16.04, -161.5], to: [32.12, -111.9], color: 'blue' },
            { from: [32.12, -111.9], to: [76.66, -88.5], color: 'blue' },
            { from: [76.66, -88.5], to: [122.74, -51.8], color: 'blue' },
          ],
          points: [
            { x: 18.02, y: 100, label: 'H₂O', color: 'red' },
            { x: 34.08, y: -60.3, label: 'H₂S', color: 'red' },
            { x: 80.99, y: -41.3, label: 'H₂Se', color: 'red' },
            { x: 129.62, y: -2.2, label: 'H₂Te', color: 'red' },
            { x: 18.02, y: -66.8, label: 'trend', color: 'red', open: true },
            { x: 16.04, y: -161.5, label: 'CH₄', color: 'blue' },
            { x: 32.12, y: -111.9, label: 'SiH₄', color: 'blue' },
            { x: 76.66, y: -88.5, label: 'GeH₄', color: 'blue' },
            { x: 122.74, y: -51.8, label: 'SnH₄', color: 'blue' },
          ],
          hlines: [{ y: 0, color: 'gray' }],
          caption: 'Boiling point (°C, vertical) against molar mass (g/mol, horizontal) for the hydrides of group 14 (blue, nonpolar) and group 16 (red, bent and polar). Each family boils higher as the molecules get heavier — except water, which boils more than $160\\ ^\\circ\\text{C}$ above where the $\\ce{H2S}$–$\\ce{H2Se}$ trend line (dashed) would put it.',
        },
        {
          type: 'p',
          text: 'Hydrogen bonding is the reason. Every water molecule is gripped by up to four hydrogen bonds, and they all have to be loosened before it can escape into the gas. Without them, Earth would have no liquid oceans. The same network makes ice an open, hexagonal lattice that is *less* dense than liquid water ($0.917$ versus $1.000\\ \\text{g/mL}$), so ice floats and lakes freeze from the top down.',
        },
        {
          type: 'heading',
          text: 'Like dissolves like',
        },
        {
          type: 'p',
          text: 'A substance dissolves when the attractions it forms with the [[solvent|solvent]] can replace the ones it gives up. Polar water surrounds ions and polar molecules: the $\\delta-$ oxygen ends face cations, the $\\delta+$ hydrogen ends face anions. That is how salt dissolves. Sugar and ethanol, full of O–H groups, hydrogen bond with water and mix freely.',
        },
        {
          type: 'p',
          text: 'Nonpolar molecules like oils, gasoline and diesel (chains of C–H bonds with $\\Delta\\text{EN} = 0.35$) offer water nothing to hold on to, and water molecules would rather stick to each other. So fuel and water separate, with the less dense fuel on top — the reason vehicle fuel systems carry water separators that drain off the water collecting at the bottom, and why oil spills spread across the sea surface instead of mixing in.',
        },
        {
          type: 'compare',
          left: {
            title: 'Polar solvent (water)',
            tone: 'neutral',
            text: 'Dissolves ionic compounds ($\\ce{NaCl}$) and polar molecules (sugar, ethanol, ammonia).',
          },
          right: {
            title: 'Nonpolar solvent (hexane, gasoline)',
            tone: 'neutral',
            text: 'Dissolves nonpolar substances (oils, grease, wax, iodine $\\ce{I2}$).',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Soap: a molecule with two personalities',
          text: 'A soap molecule has a long nonpolar hydrocarbon tail and a charged, polar head. The tails bury themselves in grease while the heads stay in the water, so the grease is carried away in tiny droplets. That is "like dissolves like" used on both ends at once.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'Grease on an engine part will not wash off with plain water. Which liquid is most likely to dissolve it?',
      options: [
        { text: 'Salt water', why: 'Adding ions makes the water no less polar. Grease is still nonpolar, so it still will not dissolve.' },
        { text: 'Hexane, a nonpolar hydrocarbon solvent', correct: true, why: 'Grease is nonpolar; a nonpolar solvent forms dispersion attractions with it just as good as the ones grease forms with itself. Like dissolves like.' },
        { text: 'Ethanol mixed half and half with water', why: 'Mostly polar, hydrogen-bonded liquid. It dissolves nonpolar grease only slightly.' },
        { text: 'Hot water', why: 'Heat speeds things up but does not change water\'s polarity. Hot water softens grease; it does not dissolve it.' },
      ],
      explanation: 'Grease is made of long nonpolar hydrocarbon chains. Water molecules hold on to each other by hydrogen bonds and gain nothing by surrounding a nonpolar chain, so they push it out. A nonpolar solvent such as hexane (or the petroleum solvents in parts cleaners) mixes with grease because both sides attract only by dispersion forces.',
    },
  ],
  takeaways: [
    'VSEPR: electron groups (each bond, single or multiple, and each lone pair) repel and spread out — 2 groups linear 180°, 3 trigonal planar 120°, 4 tetrahedral 109.5° ($\\arccos(-1/3)$).',
    'Molecular geometry names where the atoms are: 4 groups with 1 lone pair is trigonal pyramidal (about 107°), with 2 lone pairs bent (about 104.5°); lone pairs squeeze bond angles.',
    'Wedges point toward you, dashed wedges away, plain lines lie in the page.',
    'Bond polarity grows with $\\Delta\\text{EN}$: roughly below 0.4 nonpolar, 0.4–2.0 polar covalent ($\\delta+$/$\\delta-$), above 2.0 ionic — a continuum.',
    'A molecule is polar when its bond dipoles do not cancel as vectors: $\\ce{CO2}$, $\\ce{BF3}$ and $\\ce{CCl4}$ are nonpolar by symmetry; bent $\\ce{H2O}$ and pyramidal $\\ce{NH3}$ are polar.',
    'Intermolecular forces: dispersion (all, grows with size), dipole–dipole (polar), hydrogen bonding (H on N, O, F); they explain water\'s high boiling point and "like dissolves like".',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 7: Chemical Bonding and Molecular Geometry',
      url: 'https://openstax.org/books/chemistry-2e/pages/7-introduction',
      source: 'openstax',
      note: 'Section 7.6 develops VSEPR theory and molecular polarity, including the five- and six-group shapes.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for "Molecule Shapes" (add bonds and lone pairs and watch the angles change) and "Molecule Polarity" (see bond dipoles add up).',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'Video lessons on VSEPR, electronegativity, dipole moments and intermolecular forces.',
    },
    {
      title: 'Wikipedia — Hydrogen bond',
      url: 'https://en.wikipedia.org/wiki/Hydrogen_bond',
      source: 'wikipedia',
      note: 'More on hydrogen bonding in water, ice, DNA and proteins.',
    },
  ],
};
