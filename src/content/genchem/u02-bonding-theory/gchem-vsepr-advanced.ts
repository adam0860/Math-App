import type { Lesson } from '../../types';

// <figures> (generated from hand-written SVG; electron counts checked)
const FIG = {
  ax_vs_eq: '<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg"><text x="130" y="105" text-anchor="middle" dominant-baseline="central" style="font-size:22px">S</text><ellipse cx="130" cy="68.8" rx="22" ry="12.8" transform="rotate(-90 130 68.8)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="126" cy="65.8" r="2.3" fill="currentColor"/><circle cx="134" cy="65.8" r="2.3" fill="currentColor"/><text x="130" y="163" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="130" y1="118.2" x2="130" y2="151.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="72" y="109.6" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="118.7" y1="105.9" x2="82.3" y2="108.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="166" y="134" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><polygon points="139.3,112.5 155,130.3 160,124.1" fill="currentColor"/><text x="168.3" y="84.1" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="141.2" y1="97.4" x2="142.4" y2="99.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="144" y1="95.2" x2="145.8" y2="98.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="146.9" y1="93" x2="149.2" y2="97.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="149.7" y1="90.8" x2="152.6" y2="96.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="152.5" y1="88.6" x2="156" y2="94.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="155.4" y1="86.4" x2="159.4" y2="93.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="130" y1="68.8" x2="83.6" y2="108.7" class="s-red" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 4"/><line x1="130" y1="68.8" x2="158.8" y2="128.2" class="s-red" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 4"/><line x1="130" y1="68.8" x2="160.6" y2="88.3" class="s-red" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 4"/><text x="130" y="200" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">lone pair axial</text><text x="130" y="220" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-red">3 neighbors at 90°</text><text x="390" y="105" text-anchor="middle" dominant-baseline="central" style="font-size:22px">S</text><text x="390" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="390" y1="91.8" x2="390" y2="58.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="390" y="163" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="390" y1="118.2" x2="390" y2="151.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse cx="353.9" cy="107.9" rx="22" ry="12.8" transform="rotate(175.4 353.9 107.9)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="351.2" cy="112.1" r="2.3" fill="currentColor"/><circle cx="350.6" cy="104.1" r="2.3" fill="currentColor"/><text x="426" y="134" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><polygon points="399.3,112.5 415,130.3 420,124.1" fill="currentColor"/><text x="428.3" y="84.1" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="401.2" y1="97.4" x2="402.4" y2="99.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="404" y1="95.2" x2="405.8" y2="98.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="406.9" y1="93" x2="409.2" y2="97.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="409.7" y1="90.8" x2="412.6" y2="96.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="412.5" y1="88.6" x2="416" y2="94.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="415.4" y1="86.4" x2="419.4" y2="93.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="353.9" y1="107.9" x2="390" y2="58.6" class="s-red" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 4"/><line x1="353.9" y1="107.9" x2="390" y2="151.4" class="s-red" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 4"/><text x="390" y="200" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">lone pair equatorial</text><text x="390" y="220" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-green">2 neighbors at 90° (preferred)</text><text x="260" y="14" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">red dashes: 90° contacts with the lone pair</text></svg>',
  five: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><text x="65" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:22px">P</text><text x="65" y="48" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">Cl</text><line x1="65" y1="78.8" x2="65" y2="59.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="65" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">Cl</text><line x1="65" y1="105.2" x2="65" y2="124.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="21" y="95.5" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">Cl</text><line x1="53.7" y1="92.9" x2="36" y2="94.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="92.3" y="114" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">Cl</text><polygon points="74.3,99.5 79.3,108.7 84.3,102.4" fill="currentColor"/><text x="94" y="76.2" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">Cl</text><line x1="75.2" y1="85" x2="76.4" y2="87.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="76" y1="83.9" x2="77.8" y2="87.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="76.8" y1="82.8" x2="79.1" y2="87.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="77.6" y1="81.7" x2="80.5" y2="87" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="78.4" y1="80.6" x2="81.8" y2="86.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="79.2" y1="79.5" x2="83.2" y2="86.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="65" y="168" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">trigonal</text><text x="65" y="187" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">bipyramidal</text><text x="65" y="206" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">PCl₅ · AX₅</text><text x="195" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:22px">S</text><text x="195" y="48" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="195" y1="78.8" x2="195" y2="59.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="195" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="195" y1="105.2" x2="195" y2="124.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse cx="164.5" cy="94.4" rx="16.7" ry="9.7" transform="rotate(175.4 164.5 94.4)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="161.8" cy="98.7" r="2.3" fill="currentColor"/><circle cx="161.2" cy="90.7" r="2.3" fill="currentColor"/><text x="222.3" y="114" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><polygon points="204.3,99.5 211.3,110.3 216.4,104.1" fill="currentColor"/><text x="224" y="76.2" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="205.4" y1="84.9" x2="206.6" y2="87.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="206.7" y1="83.5" x2="208.5" y2="86.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="208" y1="82.1" x2="210.4" y2="86.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="209.3" y1="80.7" x2="212.2" y2="86.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="210.6" y1="79.4" x2="214.1" y2="85.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="211.9" y1="78" x2="215.9" y2="85.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="195" y="168" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">seesaw</text><text x="195" y="187" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">SF₄ · AX₄E</text><text x="325" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:22px">Cl</text><text x="325" y="48" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="325" y1="78.8" x2="325" y2="59.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="325" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="325" y1="105.2" x2="325" y2="124.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="281" y="95.5" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="308.3" y1="93.3" x2="291.3" y2="94.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse cx="348.8" cy="111.2" rx="16.7" ry="9.7" transform="rotate(38.9 348.8 111.2)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="353.7" cy="110" r="2.3" fill="currentColor"/><circle cx="348.6" cy="116.2" r="2.3" fill="currentColor"/><ellipse cx="351.9" cy="77.3" rx="16.7" ry="9.7" transform="rotate(-28.6 351.9 77.3)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="352.6" cy="72.4" r="2.3" fill="currentColor"/><circle cx="356.4" cy="79.4" r="2.3" fill="currentColor"/><text x="325" y="168" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">T-shaped</text><text x="325" y="187" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">ClF₃ · AX₃E₂</text><text x="455" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:22px">Xe</text><text x="455" y="48" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="455" y1="78.8" x2="455" y2="59.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="455" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="455" y1="105.2" x2="455" y2="124.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse cx="424.5" cy="94.4" rx="16.7" ry="9.7" transform="rotate(175.4 424.5 94.4)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="421.8" cy="98.7" r="2.3" fill="currentColor"/><circle cx="421.2" cy="90.7" r="2.3" fill="currentColor"/><ellipse cx="478.8" cy="111.2" rx="16.7" ry="9.7" transform="rotate(38.9 478.8 111.2)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="483.7" cy="110" r="2.3" fill="currentColor"/><circle cx="478.6" cy="116.2" r="2.3" fill="currentColor"/><ellipse cx="481.9" cy="77.3" rx="16.7" ry="9.7" transform="rotate(-28.6 481.9 77.3)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="482.6" cy="72.4" r="2.3" fill="currentColor"/><circle cx="486.4" cy="79.4" r="2.3" fill="currentColor"/><text x="455" y="168" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">linear</text><text x="455" y="187" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">XeF₂ · AX₂E₃</text><text x="260" y="14" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">five electron groups: lone pairs (purple) always take equatorial positions</text></svg>',
  parents: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg"><text x="130" y="100" text-anchor="middle" dominant-baseline="central" style="font-size:22px">P</text><text x="130" y="44" text-anchor="middle" dominant-baseline="central" style="font-size:20px" class="t-blue">Cl</text><line x1="130" y1="86.8" x2="130" y2="56.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="130" y="156" text-anchor="middle" dominant-baseline="central" style="font-size:20px" class="t-blue">Cl</text><line x1="130" y1="113.2" x2="130" y2="143.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="74" y="104.5" text-anchor="middle" dominant-baseline="central" style="font-size:20px" class="t-orange">Cl</text><line x1="118.7" y1="100.9" x2="89.6" y2="103.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="164.7" y="128" text-anchor="middle" dominant-baseline="central" style="font-size:20px" class="t-orange">Cl</text><polygon points="139.3,107.5 151.4,122.4 156.4,116.1" fill="currentColor"/><text x="167" y="79.8" text-anchor="middle" dominant-baseline="central" style="font-size:20px" class="t-orange">Cl</text><line x1="140.8" y1="92.7" x2="142" y2="94.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="142.8" y1="90.9" x2="144.6" y2="94.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="144.9" y1="89.1" x2="147.2" y2="93.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="146.9" y1="87.3" x2="149.8" y2="92.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="149" y1="85.5" x2="152.4" y2="91.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="151" y1="83.8" x2="155" y2="91.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="130" y="192" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">trigonal bipyramidal (5)</text><text x="130" y="211" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">ax–eq 90° · eq–eq 120° · ax–ax 180°</text><text x="98" y="44" text-anchor="end" dominant-baseline="central" style="font-size:14.6px" class="t-blue">axial</text><text x="74" y="128" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-orange">equatorial</text><text x="390" y="100" text-anchor="middle" dominant-baseline="central" style="font-size:22px">S</text><text x="390" y="44" text-anchor="middle" dominant-baseline="central" style="font-size:20px">F</text><line x1="390" y1="86.8" x2="390" y2="56.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="390" y="156" text-anchor="middle" dominant-baseline="central" style="font-size:20px">F</text><line x1="390" y1="113.2" x2="390" y2="143.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="349.7" y="123.5" text-anchor="middle" dominant-baseline="central" style="font-size:20px">F</text><polygon points="379.9,105.9 357.2,114.5 361.2,121.4" fill="currentColor"/><text x="430.3" y="123.5" text-anchor="middle" dominant-baseline="central" style="font-size:20px">F</text><polygon points="400.1,105.9 418.8,121.4 422.8,114.5" fill="currentColor"/><text x="349.7" y="77.6" text-anchor="middle" dominant-baseline="central" style="font-size:20px">F</text><line x1="377.5" y1="94.5" x2="378.7" y2="92.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="373.8" y1="93.1" x2="375.6" y2="89.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="370.1" y1="91.7" x2="372.4" y2="87.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="366.3" y1="90.3" x2="369.3" y2="85" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="362.6" y1="88.9" x2="366.2" y2="82.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="358.9" y1="87.6" x2="363" y2="80.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="430.3" y="77.6" text-anchor="middle" dominant-baseline="central" style="font-size:20px">F</text><line x1="401.3" y1="92.3" x2="402.5" y2="94.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="404.4" y1="89.8" x2="406.2" y2="93.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="407.6" y1="87.4" x2="409.9" y2="91.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="410.7" y1="85" x2="413.7" y2="90.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="413.8" y1="82.6" x2="417.4" y2="88.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="417" y1="80.2" x2="421.1" y2="87.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="390" y="192" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">octahedral (6)</text><text x="390" y="211" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">every neighbor 90° · opposite 180°</text></svg>',
  six: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg"><text x="90" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:22px">S</text><text x="90" y="46" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="90" y1="78.8" x2="90" y2="57.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="90" y="138" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="90" y1="105.2" x2="90" y2="126.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="56.9" y="111.3" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><polygon points="79.9,97.9 64.1,102.5 68.1,109.4" fill="currentColor"/><text x="123.1" y="111.3" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><polygon points="100.1,97.9 111.9,109.4 115.9,102.5" fill="currentColor"/><text x="56.9" y="73.6" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="78" y1="86.8" x2="79.3" y2="84.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="75.5" y1="86.1" x2="77.3" y2="82.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="72.9" y1="85.3" x2="75.3" y2="81" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="70.4" y1="84.6" x2="73.3" y2="79.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="67.8" y1="83.8" x2="71.3" y2="77.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="65.3" y1="83.1" x2="69.3" y2="75.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="123.1" y="73.6" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="100.7" y1="84.6" x2="102" y2="86.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="102.7" y1="82.8" x2="104.5" y2="86.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="104.7" y1="81" x2="107.1" y2="85.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="106.7" y1="79.3" x2="109.6" y2="84.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="108.7" y1="77.5" x2="112.2" y2="83.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="110.7" y1="75.7" x2="114.7" y2="83.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="90" y="172" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">octahedral</text><text x="90" y="191" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">SF₆ · AX₆</text><text x="260" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:22px">Br</text><text x="260" y="46" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="260" y1="78.8" x2="260" y2="57.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse cx="260" cy="123.4" rx="17.5" ry="10.1" transform="rotate(90 260 123.4)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="264" cy="126.4" r="2.3" fill="currentColor"/><circle cx="256" cy="126.4" r="2.3" fill="currentColor"/><text x="226.9" y="111.3" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><polygon points="246.6,99.8 234.1,102.5 238.1,109.4" fill="currentColor"/><text x="293.1" y="111.3" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><polygon points="273.4,99.8 281.9,109.4 285.9,102.5" fill="currentColor"/><text x="226.9" y="73.6" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="244.9" y1="85.1" x2="246.1" y2="82.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="242.9" y1="84.7" x2="244.7" y2="81.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="240.9" y1="84.2" x2="243.3" y2="79.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="238.9" y1="83.8" x2="241.9" y2="78.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="237" y1="83.3" x2="240.5" y2="77" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="235" y1="82.9" x2="239.1" y2="75.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="293.1" y="73.6" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="273.9" y1="82.8" x2="275.1" y2="85.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="275.3" y1="81.4" x2="277.1" y2="84.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="276.7" y1="79.9" x2="279.1" y2="84.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="278.1" y1="78.5" x2="281.1" y2="83.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="279.5" y1="77" x2="283" y2="83.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="280.9" y1="75.6" x2="285" y2="82.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="260" y="172" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">square pyramidal</text><text x="260" y="191" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">BrF₅ · AX₅E</text><text x="430" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:22px">Xe</text><ellipse cx="430" cy="60.6" rx="17.5" ry="10.1" transform="rotate(-90 430 60.6)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="426" cy="57.6" r="2.3" fill="currentColor"/><circle cx="434" cy="57.6" r="2.3" fill="currentColor"/><ellipse cx="430" cy="123.4" rx="17.5" ry="10.1" transform="rotate(90 430 123.4)" class="f-purple s-purple" fill-opacity="0.18" stroke-width="1.2"/><circle cx="434" cy="126.4" r="2.3" fill="currentColor"/><circle cx="426" cy="126.4" r="2.3" fill="currentColor"/><text x="396.9" y="111.3" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><polygon points="416.6,99.8 404.1,102.5 408.1,109.4" fill="currentColor"/><text x="463.1" y="111.3" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><polygon points="443.4,99.8 451.9,109.4 455.9,102.5" fill="currentColor"/><text x="396.9" y="73.6" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="414.9" y1="85.1" x2="416.1" y2="82.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="412.9" y1="84.7" x2="414.7" y2="81.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="410.9" y1="84.2" x2="413.3" y2="79.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="408.9" y1="83.8" x2="411.9" y2="78.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="407" y1="83.3" x2="410.5" y2="77" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="405" y1="82.9" x2="409.1" y2="75.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="463.1" y="73.6" text-anchor="middle" dominant-baseline="central" style="font-size:21.3px">F</text><line x1="443.9" y1="82.8" x2="445.1" y2="85.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="445.3" y1="81.4" x2="447.1" y2="84.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="446.7" y1="79.9" x2="449.1" y2="84.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="448.1" y1="78.5" x2="451.1" y2="83.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="449.5" y1="77" x2="453" y2="83.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><line x1="450.9" y1="75.6" x2="455" y2="82.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="butt"/><text x="430" y="172" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">square planar</text><text x="430" y="191" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">XeF₄ · AX₄E₂</text><text x="260" y="14" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">six electron groups: a second lone pair goes opposite the first</text></svg>',
};
// </figures>

const DEG = 'a*pi/180'; // slider a (degrees) in radians

export const lesson: Lesson = {
  id: 'gchem-vsepr-advanced',
  title: 'VSEPR for Five and Six Electron Groups',
  summary: 'Extend VSEPR to trigonal bipyramidal and octahedral electron geometries: seesaw, T-shaped, linear, square pyramidal and square planar molecules, where lone pairs go and why, and which shapes are polar.',
  minutes: 20,
  objectives: [
    'Describe the trigonal bipyramidal and octahedral electron geometries, their axial and equatorial positions, and their bond angles',
    'Explain with 90° contact counting why lone pairs occupy equatorial positions in a trigonal bipyramid and opposite positions in an octahedron',
    'Predict the molecular geometry (seesaw, T-shaped, linear, square pyramidal, square planar) and AXₘEₙ class of a molecule from its Lewis structure',
    'Explain the direction of bond-angle deviations caused by lone pairs',
    'Decide molecular polarity in these geometries by adding bond dipole vectors',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Two new electron geometries',
      blocks: [
        {
          type: 'p',
          text: 'In Foundations, [[vsepr|VSEPR]] handled two, three and four electron groups: linear, trigonal planar and tetrahedral. You also drew [[chem-expanded-octet|expanded octets]] last lesson: $\\ce{PCl5}$ with five groups around phosphorus, $\\ce{SF6}$ with six around sulfur. The principle is unchanged: [[chem-electron-group|electron groups]] (bonds of any order, and lone pairs) arrange themselves to be as far apart as possible.',
        },
        {
          type: 'figure',
          svg: FIG.parents,
          alt: 'Left: PCl5 as a trigonal bipyramid. Two axial Cl atoms (blue) above and below P; three equatorial Cl atoms (orange), one drawn in the plane to the left, one on a wedge toward the viewer, one on a dashed wedge away. Caption: axial–equatorial 90°, equatorial–equatorial 120°, axial–axial 180°. Right: SF6 as an octahedron: F above and below S, and four F around the middle, two on wedges and two on dashed wedges. Caption: every neighbor 90°, opposite 180°.',
          caption: 'Wedges point toward you, dashed wedges away. The trigonal bipyramid has **two different kinds of position**; the octahedron has only one kind, so all six positions are equivalent.',
        },
        {
          type: 'table',
          headers: ['Groups', 'Electron geometry', 'Angles between groups', 'Positions'],
          rows: [
            ['5', 'trigonal bipyramidal', '$90^\\circ$ (ax–eq), $120^\\circ$ (eq–eq), $180^\\circ$ (ax–ax)', '2 axial + 3 equatorial'],
            ['6', 'octahedral', '$90^\\circ$ (neighbors), $180^\\circ$ (opposite)', '6 equivalent'],
          ],
        },
        {
          type: 'definition',
          term: 'Axial and equatorial positions',
          text: 'In a trigonal bipyramid the three [[gchem-equatorial-position|equatorial]] positions form a triangle around the "equator" of the central atom, $120^\\circ$ apart. The two [[gchem-axial-position|axial]] positions lie on the axis through the poles, $90^\\circ$ from every equatorial position and $180^\\circ$ from each other.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why five is awkward and six is not',
          text: 'Six points on a sphere can be spaced perfectly evenly (the vertices of an octahedron). Five cannot: no arrangement makes every point equivalent. The trigonal bipyramid is the best compromise, and its unevenness is why it has two kinds of position. That asymmetry is the source of everything new in this lesson.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Points on a sphere',
          text: 'VSEPR is a version of a classic optimization problem: place $N$ mutually repelling points on a sphere. Game developers meet it when spreading spawn directions, light probes or sample rays evenly. A tiny simulation (each point pushes on the others with a $1/d^2$ force, then is renormalized onto the sphere, repeat) settles into a linear arrangement for 2 points, a triangle for 3, a tetrahedron for 4, a trigonal bipyramid for 5 and an octahedron for 6, reproducing the VSEPR table from pure geometry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'In $\\ce{PCl5}$ (an ideal trigonal bipyramid), how many of the Cl–P–Cl bond angles are exactly $90^\\circ$?',
      hint: 'Every axial Cl is $90^\\circ$ from every equatorial Cl. Count axial × equatorial pairs.',
      label: 'number of 90° angles $=$',
      answer: '6',
      explanation: 'Each of the 2 axial Cl atoms makes a $90^\\circ$ angle with each of the 3 equatorial Cl atoms: $2 \\times 3 = 6$. The remaining pairs are 3 equatorial–equatorial pairs at $120^\\circ$ and 1 axial–axial pair at $180^\\circ$, for $6 + 3 + 1 = 10 = \\binom{5}{2}$ angles in all. Real $\\ce{PCl5}$ shows the crowding: its axial P–Cl bonds (214 pm) are longer than the equatorial ones (202 pm), because each axial bond has three neighbors at $90^\\circ$ instead of two.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Where the lone pairs go, and why',
      blocks: [
        {
          type: 'p',
          text: 'Recall from Foundations that a lone pair is held by only one nucleus, so its electron cloud is fatter near the central atom than a bonding pair\'s. Repulsions rank: **lone pair–lone pair > lone pair–bond pair > bond pair–bond pair**. In a trigonal bipyramid the positions are not equivalent, so it matters where the lone pairs sit.',
        },
        {
          type: 'p',
          text: 'Repulsion between electron groups rises very steeply as they get closer, so the contacts at $90^\\circ$ dominate and those at $120^\\circ$ or more barely matter. The graph models the repulsion between two groups on a sphere as $1/d^n$, with $d$ the straight-line distance between them.',
        },
        {
          type: 'graph',
          x: [70, 180],
          y: [0, 2],
          xStep: 30,
          yStep: 0.5,
          functions: [{ expr: '(sin(pi/4)/sin(x*pi/360))^n', label: 'repulsion $\\propto 1/d^n$, relative to a $90^\\circ$ contact', color: 'purple' }],
          vlines: [{ x: 90, label: '90°', color: 'red' }, { x: 120, label: '120°', color: 'gray' }],
          points: [
            { x: 90, y: 1, color: 'red' },
            { x: 120, y: '(sin(pi/4)/sin(pi/3))^n', color: 'gray' },
          ],
          sliders: [{ name: 'n', min: 1, max: 12, step: 1, value: 6, label: 'steepness exponent $n$' }],
          readouts: [{ label: 'repulsion at 90° ÷ repulsion at 120° $=$', expr: '(sin(pi/3)/sin(pi/4))^n', digits: 2 }],
          caption: 'Horizontal axis: angle $\\theta$ between two groups (degrees) on a unit sphere, where their distance is $d = 2\\sin(\\theta/2)$. Vertical axis: repulsion divided by its value at $90^\\circ$. Even with a gentle $n = 1$ (pure Coulomb), a $90^\\circ$ contact is 1.22 times a $120^\\circ$ one; for the steep short-range repulsion of overlapping electron clouds ($n \\approx 6$–$12$) it is 3 to 11 times larger. So: **count the $90^\\circ$ contacts.**',
        },
        {
          type: 'figure',
          svg: FIG.ax_vs_eq,
          alt: 'Two trigonal bipyramids for SF4. Left: the lone pair (purple lobe) in an axial position, with red dashed lines to the three equatorial F atoms at 90 degrees, labeled 3 neighbors at 90°. Right: the lone pair in an equatorial position, with red dashed lines to the two axial F atoms, labeled 2 neighbors at 90°, preferred.',
          caption: 'An axial position has three neighbors at $90^\\circ$; an equatorial position has only two. Putting the bulky lone pair equatorial means fewer of the strongest repulsions.',
        },
        {
          type: 'theorem',
          name: 'Placing lone pairs',
          text: '**Five groups:** lone pairs go in equatorial positions (one, two or all three). **Six groups:** the first lone pair can go anywhere (all positions are equivalent); a second goes **opposite** the first ($180^\\circ$ apart), so the two lone pairs never meet at $90^\\circ$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Not "lone pairs go where there is more room"',
          text: 'Students sometimes argue that the axial position "points into open space". It does not: an axial position is the **most** crowded, with three $90^\\circ$ neighbors. Always count $90^\\circ$ contacts.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'In a molecule with five electron groups and one lone pair, the lone pair occupies an axial position, because there it is farthest from the other groups.',
      answer: false,
      explanation: 'The lone pair goes **equatorial**. An axial position has three neighbors at $90^\\circ$; an equatorial position has two at $90^\\circ$ and two at $120^\\circ$. Because repulsion grows so steeply at short distance, minimizing the number of $90^\\circ$ contacts with the lone pair wins. That gives the seesaw shape of $\\ce{SF4}$, not a trigonal pyramid.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The five-group family: seesaw, T-shaped, linear',
      blocks: [
        {
          type: 'p',
          text: 'Chemists label a molecule $\\ce{AX}_m\\ce{E}_n$: central atom A, $m$ bonded atoms X, $n$ lone pairs E. The electron geometry depends on $m + n$; the molecular geometry (the shape you name) describes the **atoms** only.',
        },
        {
          type: 'figure',
          svg: FIG.five,
          alt: 'Four trigonal-bipyramid-based shapes. PCl5 (AX5): trigonal bipyramidal. SF4 (AX4E): one purple lone-pair lobe in an equatorial position, four F atoms, seesaw. ClF3 (AX3E2): two equatorial lone pairs, three F atoms in a T, T-shaped. XeF2 (AX2E3): three equatorial lone pairs, two axial F atoms, linear.',
          caption: 'Fill the equator with lone pairs one at a time and the atoms left behind trace a seesaw, a T, then a straight line.',
        },
        {
          type: 'table',
          headers: ['Class', 'Shape', 'Example', 'Ideal → real angles'],
          rows: [
            ['$\\ce{AX5}$', 'trigonal bipyramidal', '$\\ce{PCl5}$, $\\ce{PF5}$', '$90^\\circ$, $120^\\circ$, $180^\\circ$'],
            ['$\\ce{AX4E}$', 'seesaw', '$\\ce{SF4}$', 'ax–ax $180^\\circ \\to 173^\\circ$; eq–eq $120^\\circ \\to 102^\\circ$'],
            ['$\\ce{AX3E2}$', 'T-shaped', '$\\ce{ClF3}$, $\\ce{BrF3}$', 'ax–eq $90^\\circ \\to 87.5^\\circ$'],
            ['$\\ce{AX2E3}$', 'linear', '$\\ce{XeF2}$, $\\ce{I3-}$', '$180^\\circ$ (exactly, by symmetry)'],
          ],
          caption: 'Measured angles from gas-phase structures. Every deviation points the same way: bonded atoms are pushed **away from** the lone pairs.',
        },
        {
          type: 'derivation',
          title: 'Shape of sulfur tetrafluoride, $\\ce{SF4}$',
          steps: [
            { tex: '6 + 4(7) = 34\\ \\text{valence electrons}', why: 'S is in group 16, each F in group 17.' },
            { tex: '34 - 4(2) - 4(6) = 2 \\implies 1\\ \\text{lone pair on S}', why: 'Four S–F bonds use 8, three lone pairs on each F use 24; the last 2 go on sulfur.' },
            { tex: '4 + 1 = 5\\ \\text{groups} \\implies \\text{trigonal bipyramidal electron geometry}', why: 'Four bonds plus one lone pair: class $\\ce{AX4E}$.' },
            { tex: '\\text{lone pair equatorial} \\implies \\text{seesaw}', why: 'The remaining atoms: two axial F and two equatorial F. Tip the drawing on its side and it looks like a playground seesaw.' },
          ],
          result: 'Seesaw. The axial F–S–F angle closes to $173^\\circ$ and the equatorial F–S–F angle to $102^\\circ$, both bent away from the lone pair.',
        },
        {
          type: 'derivation',
          title: 'Shape of chlorine trifluoride, $\\ce{ClF3}$',
          steps: [
            { tex: '7 + 3(7) = 28', why: 'Cl and three F, all group 17.' },
            { tex: '28 - 3(2) - 3(6) = 4 \\implies 2\\ \\text{lone pairs on Cl}', why: 'Three bonds and the F lone pairs use 24; 4 electrons remain.' },
            { tex: '3 + 2 = 5\\ \\text{groups},\\ \\ce{AX3E2}', why: 'Trigonal bipyramidal electron geometry.' },
            { tex: '\\text{both lone pairs equatorial} \\implies \\text{T-shaped}', why: 'Two equatorial lone pairs make 4 lone pair–bond pair contacts at $90^\\circ$ and none between the lone pairs. Putting them axial would make 6; one axial and one equatorial would bring the two lone pairs together at $90^\\circ$.' },
          ],
          result: 'T-shaped: the three F atoms and Cl lie in one plane, with F–Cl–F angles of $87.5^\\circ$ (not quite $90^\\circ$).',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Chemistry you would not want to meet',
          text: '$\\ce{ClF3}$ is among the most aggressive oxidizers known: it sets fire to glass, sand and asbestos. Its T shape has been confirmed by spectroscopy and diffraction; nobody needs to handle it to learn its geometry, which is exactly the point of a model like VSEPR.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Classify xenon difluoride, $\\ce{XeF2}$ (22 valence electrons).',
      template: '$\\ce{XeF2}$ has ___ lone pairs on Xe, so it is class ___ with ___ electron geometry, and its molecular shape is ___.',
      blanks: [{ answers: ['3'] }, { answers: ['$\\ce{AX2E3}$'] }, { answers: ['trigonal bipyramidal'] }, { answers: ['linear'] }],
      wordBank: ['3', '2', '$\\ce{AX2E3}$', '$\\ce{AX2E2}$', 'trigonal bipyramidal', 'tetrahedral', 'linear', 'bent'],
      explanation: '$8 + 2(7) = 22$ electrons; two Xe–F bonds and six F lone pairs use 16, leaving 6 = 3 lone pairs on Xe. Five groups give a trigonal bipyramid; all three lone pairs take the equatorial positions, leaving the F atoms axial at $180^\\circ$. "Bent" would be the answer for $\\ce{AX2E2}$ (four groups, like water); here the third lone pair restores a straight line.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The six-group family: square pyramidal, square planar',
      blocks: [
        {
          type: 'figure',
          svg: FIG.six,
          alt: 'Three octahedron-based shapes. SF6 (AX6): octahedral. BrF5 (AX5E): one lone-pair lobe pointing down, five F atoms, square pyramidal. XeF4 (AX4E2): lone pairs pointing up and down, four F atoms in a square, square planar.',
          caption: 'In an octahedron all six positions are equivalent, so the first lone pair can go anywhere. The second goes directly opposite it.',
        },
        {
          type: 'table',
          headers: ['Class', 'Shape', 'Example', 'Angles'],
          rows: [
            ['$\\ce{AX6}$', 'octahedral', '$\\ce{SF6}$', '$90^\\circ$, $180^\\circ$'],
            ['$\\ce{AX5E}$', 'square pyramidal', '$\\ce{BrF5}$, $\\ce{IF5}$', 'apex–base $90^\\circ \\to 84.8^\\circ$ in $\\ce{BrF5}$'],
            ['$\\ce{AX4E2}$', 'square planar', '$\\ce{XeF4}$, $\\ce{ICl4-}$', '$90^\\circ$ (exactly, by symmetry)'],
          ],
        },
        {
          type: 'derivation',
          title: 'Shape of bromine pentafluoride, $\\ce{BrF5}$',
          steps: [
            { tex: '7 + 5(7) = 42', why: 'Br and five F, all group 17.' },
            { tex: '42 - 5(2) - 5(6) = 2 \\implies 1\\ \\text{lone pair on Br}', why: 'Five bonds plus the F lone pairs use 40.' },
            { tex: '5 + 1 = 6\\ \\text{groups},\\ \\ce{AX5E} \\implies \\text{square pyramidal}', why: 'Remove one vertex of an octahedron and a square pyramid remains: four F in a square base, one at the apex.' },
            { tex: '\\angle \\ce{F_{apex}-Br-F_{base}} = 84.8^\\circ < 90^\\circ', why: 'The lone pair sits below the base and pushes the four basal F atoms up, toward the apex.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Shape of xenon tetrafluoride, $\\ce{XeF4}$',
          steps: [
            { tex: '8 + 4(7) = 36 \\implies 2\\ \\text{lone pairs on Xe}', why: 'From the last lesson: four bonds and twelve F lone pairs use 32, leaving 4.' },
            { tex: '4 + 2 = 6\\ \\text{groups},\\ \\ce{AX4E2}', why: 'Octahedral electron geometry.' },
            { tex: '\\text{lone pairs opposite (trans)} \\implies \\text{square planar}', why: 'Opposite lone pairs are $180^\\circ$ apart. Adjacent (cis) placement would put them $90^\\circ$ apart, the worst possible contact.' },
          ],
          result: 'Square planar: Xe and the four F atoms lie in one plane, with $90^\\circ$ F–Xe–F angles. $\\ce{XeF4}$ was one of the first noble-gas compounds made (1962), and its square shape was one of the early successes of VSEPR.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Noble gases that bond',
          text: 'Until 1962 textbooks said noble gases form no compounds. Neil Bartlett noticed that $\\ce{PtF6}$ could pull an electron off $\\ce{O2}$, and that xenon\'s ionization energy is almost the same as oxygen\'s. Within months xenon fluorides were made, and VSEPR predicted their shapes (linear $\\ce{XeF2}$, square planar $\\ce{XeF4}$) correctly before the structures were measured.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'The ion $\\ce{IF4+}$ has iodine in the center. How many lone pairs are on iodine?',
      hint: 'Count $7 + 4(7)$, then subtract one electron for the positive charge. Bonds and F lone pairs use the rest.',
      label: 'lone pairs on I $=$',
      answer: '1',
      explanation: '$7 + 28 - 1 = 34$ electrons. Four I–F bonds (8) and three lone pairs on each F (24) use 32, leaving 2: one lone pair on I. That makes 5 groups, class $\\ce{AX4E}$, so $\\ce{IF4+}$ is a **seesaw**, the same shape as $\\ce{SF4}$ (which has exactly the same electron count). Compare $\\ce{IF4-}$ ($36$ electrons, two lone pairs): square planar.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Polarity: adding the bond dipoles',
      blocks: [
        {
          type: 'p',
          text: 'As in Foundations, a molecule is polar when its bond dipoles do not cancel. Each bond dipole is a [[vector|vector]] pointing from the $\\delta+$ central atom to the more electronegative outer atom; the molecular dipole is their sum. With five and six groups, symmetry does most of the work.',
        },
        {
          type: 'derivation',
          title: 'The trigonal bipyramid is nonpolar ($\\ce{PCl5}$)',
          steps: [
            { tex: '\\boldsymbol{\\mu}_{\\text{ax}} = \\mu(0, 0, 1) + \\mu(0, 0, -1) = \\mathbf{0}', why: 'The two axial dipoles are equal and opposite. Take $z$ as the axis.' },
            { tex: '\\boldsymbol{\\mu}_{\\text{eq}} = \\mu\\big[(1, 0) + (\\cos 120^\\circ, \\sin 120^\\circ) + (\\cos 240^\\circ, \\sin 240^\\circ)\\big]', why: 'The three equatorial dipoles lie in the $xy$-plane, $120^\\circ$ apart (assuming equal bonds).' },
            { tex: '= \\mu\\big(1 - \\tfrac12 - \\tfrac12,\\ 0 + \\tfrac{\\sqrt3}{2} - \\tfrac{\\sqrt3}{2}\\big) = \\mathbf{0}', why: 'Components add to zero: three unit vectors at $120^\\circ$ form a closed triangle tip to tail.' },
          ],
          result: 'Total dipole zero. The axial and equatorial bonds of $\\ce{PCl5}$ have different lengths, but each set cancels on its own, so the molecule is nonpolar anyway.',
        },
        {
          type: 'p',
          text: 'Remove atoms and the cancellation can fail. Below is the T-shaped $\\ce{ClF3}$ in its own plane: Cl at the origin, the equatorial F along $+x$, the two axial F above and below, and the lone pairs (not drawn) off to the left. Slide the angle between the axial and equatorial bonds.',
        },
        {
          type: 'graph',
          x: [-1.6, 2.6],
          y: [-1.8, 1.4],
          equal: true,
          xStep: 1,
          yStep: 1,
          segments: [
            { from: [0, 0], to: [1, 0], color: 'purple', arrow: true, label: 'eq' },
            { from: [0, 0], to: [`cos(${DEG})`, `sin(${DEG})`], color: 'purple', arrow: true, label: 'ax' },
            { from: [0, 0], to: [`cos(${DEG})`, `-sin(${DEG})`], color: 'purple', arrow: true, label: 'ax' },
            { from: [0, -1.5], to: [`1 + 2cos(${DEG})`, -1.5], color: 'red', arrow: true, label: 'sum' },
          ],
          points: [
            { x: 0, y: 0, label: 'Cl', color: 'gray' },
            { x: -0.9, y: 0.45, label: 'lone pair', color: 'purple' },
            { x: -0.9, y: -0.45, label: 'lone pair', color: 'purple' },
          ],
          sliders: [{ name: 'a', min: 75, max: 105, step: 0.5, value: 87.5, label: 'F(ax)–Cl–F(eq) angle (degrees)' }],
          readouts: [{ label: 'net bond dipole, in units of one bond dipole $= 1 + 2\\cos\\theta =$', expr: `1 + 2cos(${DEG})`, digits: 3 }],
          caption: 'The vertical components of the axial dipoles always cancel; their horizontal components add to the equatorial one. At $90^\\circ$ the sum is exactly one bond dipole; at the real $87.5^\\circ$ it is a bit larger. No angle you could reach makes it zero, so the T shape is polar. (This bond-dipole model ignores the lone pairs\' own contribution, which is why measured dipoles are not simple multiples of a bond dipole.)',
        },
        {
          type: 'table',
          headers: ['Shape', 'Polar?', 'Why'],
          rows: [
            ['trigonal bipyramidal, octahedral', 'no', 'opposite pairs and equatorial triangles cancel'],
            ['linear ($\\ce{XeF2}$, $\\ce{I3-}$)', 'no', 'two equal dipoles at $180^\\circ$'],
            ['square planar ($\\ce{XeF4}$)', 'no', 'two opposite pairs cancel'],
            ['seesaw ($\\ce{SF4}$, 0.63 D)', 'yes', 'equatorial dipoles add, axial ones nearly cancel'],
            ['T-shaped ($\\ce{ClF3}$, 0.6 D)', 'yes', 'nothing balances the single equatorial bond'],
            ['square pyramidal ($\\ce{BrF5}$, 1.5 D)', 'yes', 'the base cancels; the apex bond does not'],
          ],
          caption: 'Assuming all outer atoms are the same. A rule that works: if the lone pairs are arranged symmetrically (none; three equatorial; two opposite), the molecule is nonpolar.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'In the simple bond-dipole model of $\\ce{ClF3}$ with all three Cl–F bond dipoles equal to $\\mu$, the measured F(ax)–Cl–F(eq) angle is $87.5^\\circ$. What is the magnitude of the net bond dipole, in units of $\\mu$? Give two decimal places.',
      hint: 'Put the equatorial dipole along $+x$. Each axial dipole makes an angle of $87.5^\\circ$ with it, so its $x$-component is $\\mu\\cos 87.5^\\circ$, and the $y$-components cancel.',
      label: '$|\\boldsymbol{\\mu}_{\\text{net}}| =$',
      unit: 'μ',
      answer: '1 + 2cos(87.5pi/180)',
      answerTex: '1.09\\,\\mu',
      tolerance: 0.005,
      explanation: '$x$: $\\mu + 2\\mu\\cos 87.5^\\circ = \\mu(1 + 2 \\times 0.0436) = 1.087\\mu$. $y$: $\\mu\\sin 87.5^\\circ - \\mu\\sin 87.5^\\circ = 0$. So $|\\boldsymbol{\\mu}_{\\text{net}}| \\approx 1.09\\mu$, pointing along the equatorial bond, away from the lone pairs. Because the axial F atoms lean slightly toward the equatorial F (away from the lone pairs), they add a little to the net dipole instead of cancelling.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Putting it together: the triiodide ion',
      blocks: [
        {
          type: 'p',
          text: 'Here is the full procedure, which works for every molecule or ion with one central atom:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Lewis structure', text: 'Count valence electrons (adjust for charge), connect, complete the outer atoms, put leftovers on the central atom.' },
            { title: 'Count groups', text: 'Bonds (any order counts once) plus lone pairs on the central atom: $m + n$.' },
            { title: 'Electron geometry', text: '2 linear, 3 trigonal planar, 4 tetrahedral, 5 trigonal bipyramidal, 6 octahedral.' },
            { title: 'Place lone pairs', text: 'Five groups: equatorial. Six groups: opposite each other.' },
            { title: 'Name the shape and angles', text: 'Look at the atoms only; lone pairs squeeze nearby bond angles.' },
            { title: 'Decide polarity', text: 'Add bond dipoles as vectors, using symmetry.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Shape of the triiodide ion, $\\ce{I3-}$',
          steps: [
            { tex: '3(7) + 1 = 22\\ \\text{electrons}', why: 'Three iodine atoms plus one for the negative charge.' },
            { tex: '\\ce{I-I-I}:\\ 22 - 2(2) - 2(6) = 6 \\implies 3\\ \\text{lone pairs on the central I}', why: 'Two bonds use 4; three lone pairs on each end I use 12; six electrons remain for the center.' },
            { tex: '2 + 3 = 5\\ \\text{groups},\\ \\ce{AX2E3}', why: 'Trigonal bipyramidal electron geometry, exactly like $\\ce{XeF2}$ (also 22 electrons).' },
            { tex: '\\text{three equatorial lone pairs} \\implies \\text{linear},\\ 180^\\circ', why: 'The two outer I atoms are axial. Symmetric, so the bond dipoles (zero anyway, for identical atoms) cancel.' },
          ],
          result: '$\\ce{I3-}$ is linear. It is what forms when iodine dissolves in potassium iodide solution, the brown "tincture" used for disinfecting wounds and treating water, and it is the species that turns starch blue-black.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Common traps',
          text: 'Forgetting the lone pairs on the central atom (so $\\ce{SF4}$ becomes "tetrahedral" and $\\ce{XeF4}$ becomes "tetrahedral"); naming the electron geometry when the molecular geometry was asked; and drawing $\\ce{XeF2}$ as bent by analogy with water. Write the $\\ce{AX}_m\\ce{E}_n$ label every time: it forces you to count both.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      multi: true,
      prompt: 'Select **all** the nonpolar molecules.',
      options: [
        { text: '$\\ce{XeF4}$ (square planar)', correct: true, why: 'Two pairs of opposite Xe–F dipoles cancel.' },
        { text: '$\\ce{SF4}$ (seesaw)', why: 'The two equatorial dipoles, $102^\\circ$ apart, add to a net dipole that nothing opposes. Measured: 0.63 D.' },
        { text: '$\\ce{XeF2}$ (linear)', correct: true, why: 'Two equal dipoles at $180^\\circ$ cancel exactly.' },
        { text: '$\\ce{BrF5}$ (square pyramidal)', why: 'The four basal dipoles cancel in the plane of the base, but the apical Br–F dipole is left over. Measured: 1.5 D.' },
        { text: '$\\ce{PF5}$ (trigonal bipyramidal)', correct: true, why: 'Axial dipoles cancel each other, and the three equatorial dipoles at $120^\\circ$ cancel too.' },
      ],
      explanation: 'The nonpolar ones are those whose lone pairs (if any) are arranged symmetrically: $\\ce{PF5}$ has none, $\\ce{XeF2}$ has three spread around the equator, $\\ce{XeF4}$ has two opposite each other. A single lone pair ($\\ce{SF4}$, $\\ce{BrF5}$) or two equatorial lone pairs ($\\ce{ClF3}$) always leave the molecule polar when the outer atoms are identical.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Order the steps to predict the shape of iodine pentafluoride, $\\ce{IF5}$.',
      lines: [
        'Count valence electrons: $7 + 5(7) = 42$',
        'Five I–F bonds and three lone pairs on each F use 40; one lone pair goes on I',
        'Six electron groups: octahedral electron geometry ($\\ce{AX5E}$)',
        'The lone pair takes one octahedral vertex: square pyramidal',
        'The four basal F atoms tilt toward the apex: F–I–F angles a little under $90^\\circ$',
      ],
      distractors: ['Five bonds means five groups: trigonal bipyramidal'],
      explanation: 'The distractor forgets the lone pair on iodine, the most common VSEPR mistake. $\\ce{IF5}$ is isostructural with $\\ce{BrF5}$: square pyramidal, polar, with the basal fluorines pushed away from the lone pair.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student predicts the shape of $\\ce{SF4}$. Tap the first line that is wrong.',
      lines: [
        'Valence electrons: $6 + 4(7) = 34$',
        'Four S–F bonds and the F lone pairs use $8 + 24 = 32$, leaving 2 electrons as one lone pair on S',
        'Electron groups on S: 4 bonds, so 4 groups',
        'Four groups give a tetrahedral shape with $109.5^\\circ$ angles',
      ],
      errorLines: [3],
      explanation: 'The lone pair is an electron group too: $4 + 1 = 5$ groups, trigonal bipyramidal electron geometry. With the lone pair equatorial, $\\ce{SF4}$ is a **seesaw** (F–S–F about $173^\\circ$ axially and $102^\\circ$ equatorially), and it is polar. The student did line 2 correctly and then ignored its result.',
    },
  ],
  takeaways: [
    'Five groups: trigonal bipyramidal (2 axial + 3 equatorial; 90°, 120°, 180°). Six groups: octahedral (all positions equivalent; 90°, 180°).',
    'Repulsion rises steeply at short range, so count 90° contacts: lone pairs go equatorial in a trigonal bipyramid (2 contacts instead of 3) and opposite each other in an octahedron.',
    'Five-group shapes: AX₅ trigonal bipyramidal, AX₄E seesaw (SF₄), AX₃E₂ T-shaped (ClF₃), AX₂E₃ linear (XeF₂, I₃⁻).',
    'Six-group shapes: AX₆ octahedral (SF₆), AX₅E square pyramidal (BrF₅), AX₄E₂ square planar (XeF₄).',
    'Lone pairs push bonded atoms away: SF₄ 173° and 102°, ClF₃ 87.5°, BrF₅ 84.8°.',
    'Polarity is a vector sum: trigonal bipyramidal, octahedral, linear and square planar molecules (identical outer atoms) are nonpolar; seesaw, T-shaped and square pyramidal are polar.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 7: Chemical Bonding and Molecular Geometry',
      url: 'https://openstax.org/books/chemistry-2e/pages/7-introduction',
      source: 'openstax',
      note: 'Section 7.6 (Molecular Structure and Polarity) has the full VSEPR table with 3D images and worked examples for five and six electron groups.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The free "Molecule Shapes" simulation lets you add bonds and lone pairs up to six groups and rotate the result in 3D; watch where lone pairs settle.',
    },
    {
      title: 'Wikipedia — VSEPR theory',
      url: 'https://en.wikipedia.org/wiki/VSEPR_theory',
      source: 'wikipedia',
      note: 'The AXE table with examples, the history of Gillespie and Nyholm\'s model, and its known exceptions.',
    },
    {
      title: 'Wikipedia — Thomson problem',
      url: 'https://en.wikipedia.org/wiki/Thomson_problem',
      source: 'wikipedia',
      note: 'The points-on-a-sphere optimization behind VSEPR geometry, with solutions for many values of N.',
    },
  ],
};
