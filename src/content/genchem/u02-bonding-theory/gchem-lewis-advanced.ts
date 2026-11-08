import type { Lesson } from '../../types';

// <figures> (generated from hand-written SVG; electron counts checked)
const FIG = {
  benzene: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg"><line x1="90" y1="29" x2="50.2" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="86.3" y1="39.2" x2="60.8" y2="53.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="50.2" y1="52" x2="50.2" y2="98" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="50.2" y1="98" x2="90" y2="121" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="60.8" y1="96.1" x2="86.3" y2="110.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="90" y1="121" x2="129.8" y2="98" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="129.8" y1="98" x2="129.8" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="122.8" y1="89.7" x2="122.8" y2="60.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="129.8" y1="52" x2="90" y2="29" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="250" y1="29" x2="210.2" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="210.2" y1="52" x2="210.2" y2="98" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="217.2" y1="60.3" x2="217.2" y2="89.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="210.2" y1="98" x2="250" y2="121" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="250" y1="121" x2="289.8" y2="98" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="253.7" y1="110.8" x2="279.2" y2="96.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="289.8" y1="98" x2="289.8" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="289.8" y1="52" x2="250" y2="29" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="279.2" y1="53.9" x2="253.7" y2="39.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="150" y1="75" x2="182" y2="75" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="190,75 182,71 182,79" fill="currentColor"/><line x1="182" y1="75" x2="150" y2="75" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="142,75 150,79 150,71" fill="currentColor"/><text x="170" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">two resonance structures (H atoms not drawn)</text><text x="380" y="75" text-anchor="middle" dominant-baseline="central" style="font-size:24px">=</text><line x1="450" y1="29" x2="410.2" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="410.2" y1="52" x2="410.2" y2="98" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="410.2" y1="98" x2="450" y2="121" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="450" y1="121" x2="489.8" y2="98" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="489.8" y1="98" x2="489.8" y2="52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="489.8" y1="52" x2="450" y2="29" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="450" cy="75" r="25.3" fill="none" class="s-purple" stroke-width="2"/><text x="440" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-purple">all six C–C bonds 139 pm</text></svg>',
  expanded: '<svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg"><text x="88" y="122" text-anchor="middle" dominant-baseline="central" style="font-size:24px">P</text><text x="88" y="56" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Cl</text><line x1="88" y1="108" x2="88" y2="70" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="84" cy="35.5" r="2.6" fill="currentColor"/><circle cx="92" cy="35.5" r="2.6" fill="currentColor"/><circle cx="63.5" cy="60" r="2.6" fill="currentColor"/><circle cx="63.5" cy="52" r="2.6" fill="currentColor"/><circle cx="112.5" cy="52" r="2.6" fill="currentColor"/><circle cx="112.5" cy="60" r="2.6" fill="currentColor"/><text x="25.2" y="101.6" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Cl</text><line x1="76.5" y1="118.2" x2="41.8" y2="107" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="1.3" cy="98" r="2.6" fill="currentColor"/><circle cx="3.7" cy="90.4" r="2.6" fill="currentColor"/><circle cx="22.6" cy="122.6" r="2.6" fill="currentColor"/><circle cx="15" cy="120.1" r="2.6" fill="currentColor"/><circle cx="27.8" cy="80.6" r="2.6" fill="currentColor"/><circle cx="35.4" cy="83.1" r="2.6" fill="currentColor"/><text x="49.2" y="175.4" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Cl</text><line x1="80.3" y1="132.6" x2="58" y2="163.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="39.8" cy="195.1" r="2.6" fill="currentColor"/><circle cx="33.3" cy="190.4" r="2.6" fill="currentColor"/><circle cx="69.9" cy="185.5" r="2.6" fill="currentColor"/><circle cx="65.2" cy="191.9" r="2.6" fill="currentColor"/><circle cx="28.5" cy="165.3" r="2.6" fill="currentColor"/><circle cx="33.2" cy="158.9" r="2.6" fill="currentColor"/><text x="126.8" y="175.4" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Cl</text><line x1="95.7" y1="132.6" x2="118" y2="163.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="142.7" cy="190.4" r="2.6" fill="currentColor"/><circle cx="136.2" cy="195.1" r="2.6" fill="currentColor"/><circle cx="142.8" cy="158.9" r="2.6" fill="currentColor"/><circle cx="147.5" cy="165.3" r="2.6" fill="currentColor"/><circle cx="110.8" cy="191.9" r="2.6" fill="currentColor"/><circle cx="106.1" cy="185.5" r="2.6" fill="currentColor"/><text x="150.8" y="101.6" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Cl</text><line x1="99.5" y1="118.2" x2="134.2" y2="107" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="172.3" cy="90.4" r="2.6" fill="currentColor"/><circle cx="174.7" cy="98" r="2.6" fill="currentColor"/><circle cx="140.6" cy="83.1" r="2.6" fill="currentColor"/><circle cx="148.2" cy="80.6" r="2.6" fill="currentColor"/><circle cx="161" cy="120.1" r="2.6" fill="currentColor"/><circle cx="153.4" cy="122.6" r="2.6" fill="currentColor"/><text x="88" y="232" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">PCl₅: 40 e⁻</text><text x="88" y="252" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-orange">10 around P</text><text x="262" y="122" text-anchor="middle" dominant-baseline="central" style="font-size:24px">S</text><text x="262" y="52" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="262" y1="108" x2="262" y2="66" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="258" cy="31.5" r="2.6" fill="currentColor"/><circle cx="266" cy="31.5" r="2.6" fill="currentColor"/><circle cx="243.5" cy="56" r="2.6" fill="currentColor"/><circle cx="243.5" cy="48" r="2.6" fill="currentColor"/><circle cx="280.5" cy="48" r="2.6" fill="currentColor"/><circle cx="280.5" cy="56" r="2.6" fill="currentColor"/><text x="322.6" y="87" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="272.7" y1="115.8" x2="311.9" y2="93.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="337" cy="74.1" r="2.6" fill="currentColor"/><circle cx="341" cy="81" r="2.6" fill="currentColor"/><circle cx="309.2" cy="71.8" r="2.6" fill="currentColor"/><circle cx="316.2" cy="67.8" r="2.6" fill="currentColor"/><circle cx="336" cy="102.2" r="2.6" fill="currentColor"/><circle cx="329.1" cy="106.2" r="2.6" fill="currentColor"/><text x="322.6" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="272.7" y1="128.2" x2="311.9" y2="150.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="341" cy="163" r="2.6" fill="currentColor"/><circle cx="337" cy="169.9" r="2.6" fill="currentColor"/><circle cx="329.1" cy="137.8" r="2.6" fill="currentColor"/><circle cx="336" cy="141.8" r="2.6" fill="currentColor"/><circle cx="316.2" cy="176.2" r="2.6" fill="currentColor"/><circle cx="309.2" cy="172.2" r="2.6" fill="currentColor"/><text x="262" y="192" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="262" y1="136" x2="262" y2="178" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="266" cy="212.5" r="2.6" fill="currentColor"/><circle cx="258" cy="212.5" r="2.6" fill="currentColor"/><circle cx="280.5" cy="188" r="2.6" fill="currentColor"/><circle cx="280.5" cy="196" r="2.6" fill="currentColor"/><circle cx="243.5" cy="196" r="2.6" fill="currentColor"/><circle cx="243.5" cy="188" r="2.6" fill="currentColor"/><text x="201.4" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="251.3" y1="128.2" x2="212.1" y2="150.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="187" cy="169.9" r="2.6" fill="currentColor"/><circle cx="183" cy="163" r="2.6" fill="currentColor"/><circle cx="214.8" cy="172.2" r="2.6" fill="currentColor"/><circle cx="207.8" cy="176.2" r="2.6" fill="currentColor"/><circle cx="188" cy="141.8" r="2.6" fill="currentColor"/><circle cx="194.9" cy="137.8" r="2.6" fill="currentColor"/><text x="201.4" y="87" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="251.3" y1="115.8" x2="212.1" y2="93.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="183" cy="81" r="2.6" fill="currentColor"/><circle cx="187" cy="74.1" r="2.6" fill="currentColor"/><circle cx="194.9" cy="106.2" r="2.6" fill="currentColor"/><circle cx="188" cy="102.2" r="2.6" fill="currentColor"/><circle cx="207.8" cy="67.8" r="2.6" fill="currentColor"/><circle cx="214.8" cy="71.8" r="2.6" fill="currentColor"/><text x="262" y="232" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">SF₆: 48 e⁻</text><text x="262" y="252" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-orange">12 around S</text><text x="432" y="122" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Xe</text><text x="432" y="58" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="432" y1="108" x2="432" y2="72" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="428" cy="37.5" r="2.6" fill="currentColor"/><circle cx="436" cy="37.5" r="2.6" fill="currentColor"/><circle cx="413.5" cy="62" r="2.6" fill="currentColor"/><circle cx="413.5" cy="54" r="2.6" fill="currentColor"/><circle cx="450.5" cy="54" r="2.6" fill="currentColor"/><circle cx="450.5" cy="62" r="2.6" fill="currentColor"/><text x="496" y="122" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="450" y1="122" x2="484" y2="122" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="514.5" cy="118" r="2.6" fill="currentColor"/><circle cx="514.5" cy="126" r="2.6" fill="currentColor"/><circle cx="492" cy="101.5" r="2.6" fill="currentColor"/><circle cx="500" cy="101.5" r="2.6" fill="currentColor"/><circle cx="500" cy="142.5" r="2.6" fill="currentColor"/><circle cx="492" cy="142.5" r="2.6" fill="currentColor"/><text x="432" y="186" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="432" y1="136" x2="432" y2="172" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="436" cy="206.5" r="2.6" fill="currentColor"/><circle cx="428" cy="206.5" r="2.6" fill="currentColor"/><circle cx="450.5" cy="182" r="2.6" fill="currentColor"/><circle cx="450.5" cy="190" r="2.6" fill="currentColor"/><circle cx="413.5" cy="190" r="2.6" fill="currentColor"/><circle cx="413.5" cy="182" r="2.6" fill="currentColor"/><text x="368" y="122" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="414" y1="122" x2="380" y2="122" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="349.5" cy="126" r="2.6" fill="currentColor"/><circle cx="349.5" cy="118" r="2.6" fill="currentColor"/><circle cx="372" cy="142.5" r="2.6" fill="currentColor"/><circle cx="364" cy="142.5" r="2.6" fill="currentColor"/><circle cx="364" cy="101.5" r="2.6" fill="currentColor"/><circle cx="372" cy="101.5" r="2.6" fill="currentColor"/><circle cx="447.6" cy="100.8" r="2.6" fill="currentColor"/><circle cx="453.2" cy="106.4" r="2.6" fill="currentColor"/><circle cx="416.4" cy="143.2" r="2.6" fill="currentColor"/><circle cx="410.8" cy="137.6" r="2.6" fill="currentColor"/><text x="432" y="232" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">XeF₄: 36 e⁻</text><text x="432" y="252" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-orange">12 around Xe (2 lone pairs)</text></svg>',
  o3: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><text x="70" y="73" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="22" y="113" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="118" y="113" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="62.2" y1="83.4" x2="33.6" y2="107.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="58.4" y1="78.8" x2="29.8" y2="102.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="79.7" y1="81.1" x2="108.3" y2="104.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="66" cy="52.5" r="2.6" fill="currentColor"/><circle cx="74" cy="52.5" r="2.6" fill="currentColor"/><circle cx="3.6" cy="107" r="2.6" fill="currentColor"/><circle cx="7.6" cy="100.1" r="2.6" fill="currentColor"/><circle cx="22.4" cy="133.8" r="2.6" fill="currentColor"/><circle cx="14.5" cy="132.4" r="2.6" fill="currentColor"/><circle cx="136.5" cy="109" r="2.6" fill="currentColor"/><circle cx="136.5" cy="117" r="2.6" fill="currentColor"/><circle cx="128.7" cy="130.6" r="2.6" fill="currentColor"/><circle cx="121.1" cy="133.3" r="2.6" fill="currentColor"/><circle cx="124.5" cy="93.8" r="2.6" fill="currentColor"/><circle cx="131.4" cy="97.8" r="2.6" fill="currentColor"/><text x="98" y="73" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">+1</text><text x="22" y="147" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><text x="118" y="147" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="262" y="73" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="214" y="113" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="310" y="113" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="252.3" y1="81.1" x2="223.7" y2="104.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="273.6" y1="78.8" x2="302.2" y2="102.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="269.8" y1="83.4" x2="298.4" y2="107.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="258" cy="52.5" r="2.6" fill="currentColor"/><circle cx="266" cy="52.5" r="2.6" fill="currentColor"/><circle cx="195.5" cy="117" r="2.6" fill="currentColor"/><circle cx="195.5" cy="109" r="2.6" fill="currentColor"/><circle cx="210.9" cy="133.3" r="2.6" fill="currentColor"/><circle cx="203.3" cy="130.6" r="2.6" fill="currentColor"/><circle cx="200.6" cy="97.8" r="2.6" fill="currentColor"/><circle cx="207.5" cy="93.8" r="2.6" fill="currentColor"/><circle cx="324.4" cy="100.1" r="2.6" fill="currentColor"/><circle cx="328.4" cy="107" r="2.6" fill="currentColor"/><circle cx="317.5" cy="132.4" r="2.6" fill="currentColor"/><circle cx="309.6" cy="133.8" r="2.6" fill="currentColor"/><text x="290" y="73" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">+1</text><text x="214" y="147" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="310" y="147" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><line x1="146" y1="95" x2="178" y2="95" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="186,95 178,91 178,99" fill="currentColor"/><line x1="178" y1="95" x2="146" y2="95" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="138,95 146,99 146,91" fill="currentColor"/><text x="430" y="73" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="382" y="113" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="478" y="113" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="420.3" y1="81.1" x2="391.7" y2="104.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="439.7" y1="81.1" x2="468.3" y2="104.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="414.6" y1="78" x2="389.7" y2="98.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4"/><line x1="445.4" y1="78" x2="470.3" y2="98.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4"/><text x="376" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px" class="t-red">δ−</text><text x="484" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px" class="t-red">δ−</text><text x="458" y="65" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px" class="t-blue">δ+</text><text x="430" y="177" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-purple">hybrid: two equal bonds</text><text x="430" y="195" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-purple">bond order 1½, 128 pm</text><text x="165" y="195" text-anchor="middle" dominant-baseline="central" style="font-size:15.1px" class="t-gray">two resonance structures (18 e⁻ each)</text><line x1="345" y1="30" x2="345" y2="170" class="s-gray" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 4"/></svg>',
  radicals: '<svg viewBox="0 0 520 205" xmlns="http://www.w3.org/2000/svg"><text x="80" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><text x="140" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="92" y1="82" x2="128" y2="82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="92" y1="88" x2="128" y2="88" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="61.5" cy="89" r="2.6" fill="currentColor"/><circle cx="61.5" cy="81" r="2.6" fill="currentColor"/><circle cx="80" cy="64.5" r="2.6" class="f-red"/><circle cx="136" cy="64.5" r="2.6" fill="currentColor"/><circle cx="144" cy="64.5" r="2.6" fill="currentColor"/><circle cx="144" cy="105.5" r="2.6" fill="currentColor"/><circle cx="136" cy="105.5" r="2.6" fill="currentColor"/><text x="110" y="140" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">NO: 5 + 6 = 11 e⁻</text><text x="110" y="160" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-red">unpaired electron on N</text><text x="360" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><text x="308" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="412" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="351.4" y1="71.6" x2="320" y2="93.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="348" y1="66.7" x2="316.6" y2="88.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="370.3" y1="69.1" x2="401.7" y2="90.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="360" cy="41.5" r="2.6" class="f-red"/><circle cx="289.6" cy="92" r="2.6" fill="currentColor"/><circle cx="293.6" cy="85.1" r="2.6" fill="currentColor"/><circle cx="306.6" cy="118.7" r="2.6" fill="currentColor"/><circle cx="298.9" cy="116.6" r="2.6" fill="currentColor"/><circle cx="430.5" cy="94" r="2.6" fill="currentColor"/><circle cx="430.5" cy="102" r="2.6" fill="currentColor"/><circle cx="422.7" cy="115.6" r="2.6" fill="currentColor"/><circle cx="415.1" cy="118.3" r="2.6" fill="currentColor"/><circle cx="418.5" cy="78.8" r="2.6" fill="currentColor"/><circle cx="425.4" cy="82.8" r="2.6" fill="currentColor"/><text x="386" y="60" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">+1</text><text x="446" y="102" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="274" y="102" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><text x="360" y="172" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">NO₂: 5 + 2(6) = 17 e⁻</text><text x="360" y="192" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">one resonance form shown</text><text x="260" y="16" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">odd electron counts: one electron must stay unpaired (red)</text></svg>',
  scn: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg"><text x="38" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">S</text><text x="86" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="134" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><line x1="50" y1="82" x2="74" y2="82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="50" y1="88" x2="74" y2="88" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="98" y1="82" x2="122" y2="82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="98" y1="88" x2="122" y2="88" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="34" cy="64.5" r="2.6" fill="currentColor"/><circle cx="42" cy="64.5" r="2.6" fill="currentColor"/><circle cx="42" cy="105.5" r="2.6" fill="currentColor"/><circle cx="34" cy="105.5" r="2.6" fill="currentColor"/><circle cx="130" cy="64.5" r="2.6" fill="currentColor"/><circle cx="138" cy="64.5" r="2.6" fill="currentColor"/><circle cx="138" cy="105.5" r="2.6" fill="currentColor"/><circle cx="130" cy="105.5" r="2.6" fill="currentColor"/><text x="38" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><text x="86" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><text x="134" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><path d="M18,50 L11,50 L11,120 L18,120" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M154,50 L161,50 L161,120 L154,120" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="167" y="54" text-anchor="start" dominant-baseline="central" style="font-size:20.2px">−</text><text x="86" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-green">best: −1 on N</text><text x="210" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">S</text><text x="258" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="306" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><line x1="222" y1="85" x2="246" y2="85" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="270" y1="78" x2="294" y2="78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="270" y1="85" x2="294" y2="85" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="270" y1="92" x2="294" y2="92" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="206" cy="64.5" r="2.6" fill="currentColor"/><circle cx="214" cy="64.5" r="2.6" fill="currentColor"/><circle cx="191.5" cy="89" r="2.6" fill="currentColor"/><circle cx="191.5" cy="81" r="2.6" fill="currentColor"/><circle cx="214" cy="105.5" r="2.6" fill="currentColor"/><circle cx="206" cy="105.5" r="2.6" fill="currentColor"/><circle cx="324.5" cy="81" r="2.6" fill="currentColor"/><circle cx="324.5" cy="89" r="2.6" fill="currentColor"/><text x="210" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="258" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><text x="306" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><path d="M190,50 L183,50 L183,120 L190,120" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M326,50 L333,50 L333,120 L326,120" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="339" y="54" text-anchor="start" dominant-baseline="central" style="font-size:20.2px">−</text><text x="258" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-orange">close second</text><text x="382" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">S</text><text x="430" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="478" y="85" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><line x1="394" y1="78" x2="418" y2="78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="394" y1="85" x2="418" y2="85" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="394" y1="92" x2="418" y2="92" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="442" y1="85" x2="466" y2="85" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="363.5" cy="89" r="2.6" fill="currentColor"/><circle cx="363.5" cy="81" r="2.6" fill="currentColor"/><circle cx="474" cy="64.5" r="2.6" fill="currentColor"/><circle cx="482" cy="64.5" r="2.6" fill="currentColor"/><circle cx="496.5" cy="81" r="2.6" fill="currentColor"/><circle cx="496.5" cy="89" r="2.6" fill="currentColor"/><circle cx="482" cy="105.5" r="2.6" fill="currentColor"/><circle cx="474" cy="105.5" r="2.6" fill="currentColor"/><text x="382" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">+1</text><text x="430" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><text x="478" y="47" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−2</text><path d="M362,50 L355,50 L355,120 L362,120" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M498,50 L505,50 L505,120 L498,120" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="511" y="54" text-anchor="start" dominant-baseline="central" style="font-size:20.2px">−</text><text x="430" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">poor: +1, −2</text><text x="260" y="16" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">formal charges in color · each structure has 16 valence electrons</text><text x="260" y="190" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">real ion: a blend of the first two (C–N near triple, S–C between single and double)</text></svg>',
  so4: '<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg"><text x="130" y="120" text-anchor="middle" dominant-baseline="central" style="font-size:24px">S</text><text x="130" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="130" y1="106" x2="130" y2="76" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="126" cy="41.5" r="2.6" fill="currentColor"/><circle cx="134" cy="41.5" r="2.6" fill="currentColor"/><circle cx="111.5" cy="66" r="2.6" fill="currentColor"/><circle cx="111.5" cy="58" r="2.6" fill="currentColor"/><circle cx="148.5" cy="58" r="2.6" fill="currentColor"/><circle cx="148.5" cy="66" r="2.6" fill="currentColor"/><text x="130" y="178" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="130" y1="134" x2="130" y2="164" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="134" cy="198.5" r="2.6" fill="currentColor"/><circle cx="126" cy="198.5" r="2.6" fill="currentColor"/><circle cx="148.5" cy="174" r="2.6" fill="currentColor"/><circle cx="148.5" cy="182" r="2.6" fill="currentColor"/><circle cx="111.5" cy="182" r="2.6" fill="currentColor"/><circle cx="111.5" cy="174" r="2.6" fill="currentColor"/><text x="68" y="120" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="118" y1="120" x2="80" y2="120" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="49.5" cy="124" r="2.6" fill="currentColor"/><circle cx="49.5" cy="116" r="2.6" fill="currentColor"/><circle cx="72" cy="140.5" r="2.6" fill="currentColor"/><circle cx="64" cy="140.5" r="2.6" fill="currentColor"/><circle cx="64" cy="99.5" r="2.6" fill="currentColor"/><circle cx="72" cy="99.5" r="2.6" fill="currentColor"/><text x="192" y="120" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="142" y1="120" x2="180" y2="120" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="210.5" cy="116" r="2.6" fill="currentColor"/><circle cx="210.5" cy="124" r="2.6" fill="currentColor"/><circle cx="188" cy="99.5" r="2.6" fill="currentColor"/><circle cx="196" cy="99.5" r="2.6" fill="currentColor"/><circle cx="196" cy="140.5" r="2.6" fill="currentColor"/><circle cx="188" cy="140.5" r="2.6" fill="currentColor"/><text x="156" y="56" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="156" y="184" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="66" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="194" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="152" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">+2</text><path d="M37,36 L30,36 L30,204 L37,204" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M223,36 L230,36 L230,204 L223,204" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="236" y="40" text-anchor="start" dominant-baseline="central" style="font-size:20.2px">2−</text><text x="130" y="222" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">A: octet on S</text><text x="130" y="242" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">formal charges +2 and four −1</text><text x="390" y="120" text-anchor="middle" dominant-baseline="central" style="font-size:24px">S</text><text x="390" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="387" y1="106" x2="387" y2="76" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="393" y1="106" x2="393" y2="76" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="371.5" cy="66" r="2.6" fill="currentColor"/><circle cx="371.5" cy="58" r="2.6" fill="currentColor"/><circle cx="408.5" cy="58" r="2.6" fill="currentColor"/><circle cx="408.5" cy="66" r="2.6" fill="currentColor"/><text x="390" y="178" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="390" y1="134" x2="390" y2="164" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="394" cy="198.5" r="2.6" fill="currentColor"/><circle cx="386" cy="198.5" r="2.6" fill="currentColor"/><circle cx="408.5" cy="174" r="2.6" fill="currentColor"/><circle cx="408.5" cy="182" r="2.6" fill="currentColor"/><circle cx="371.5" cy="182" r="2.6" fill="currentColor"/><circle cx="371.5" cy="174" r="2.6" fill="currentColor"/><text x="328" y="120" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="378" y1="120" x2="340" y2="120" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="309.5" cy="124" r="2.6" fill="currentColor"/><circle cx="309.5" cy="116" r="2.6" fill="currentColor"/><circle cx="332" cy="140.5" r="2.6" fill="currentColor"/><circle cx="324" cy="140.5" r="2.6" fill="currentColor"/><circle cx="324" cy="99.5" r="2.6" fill="currentColor"/><circle cx="332" cy="99.5" r="2.6" fill="currentColor"/><text x="452" y="120" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="402" y1="117" x2="440" y2="117" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="402" y1="123" x2="440" y2="123" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="448" cy="99.5" r="2.6" fill="currentColor"/><circle cx="456" cy="99.5" r="2.6" fill="currentColor"/><circle cx="456" cy="140.5" r="2.6" fill="currentColor"/><circle cx="448" cy="140.5" r="2.6" fill="currentColor"/><text x="416" y="56" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><text x="416" y="184" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="326" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">−1</text><text x="454" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><text x="412" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">0</text><path d="M297,36 L290,36 L290,204 L297,204" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M483,36 L490,36 L490,204 L483,204" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="496" y="40" text-anchor="start" dominant-baseline="central" style="font-size:20.2px">2−</text><text x="390" y="222" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px;font-weight:600">B: expanded (12 e⁻ on S)</text><text x="390" y="242" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">formal charges minimized</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'gchem-lewis-advanced',
  title: 'Formal Charge, Resonance and Bond Enthalpy',
  summary: 'Choose the best Lewis structure with formal charge, describe delocalized bonds with resonance and bond order, handle radicals and expanded octets, and estimate reaction enthalpies from bond enthalpies.',
  minutes: 22,
  objectives: [
    'Compute formal charges and use them to choose the best of several Lewis structures (SCN⁻, OCN⁻, CO₂, SO₄²⁻)',
    'Describe resonance as delocalization and compute fractional bond orders (O₃, NO₃⁻, CO₃²⁻, benzene)',
    'Draw odd-electron species (NO, NO₂) and molecules with expanded octets (PCl₅, SF₆, XeF₄), and state the modern view of "expanded" octets',
    'Relate bond order to bond length and bond enthalpy',
    'Estimate a reaction enthalpy as bonds broken minus bonds formed, and explain why the estimate is approximate',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Formal charge: whose electrons are they?',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations you learned to draw a [[lewis-structure|Lewis structure]] and met formal charge in a deep dive. Often the method gives **several** valid structures with the same atoms connected in the same order, each with every octet complete. Formal charge is how chemists pick between them.',
        },
        {
          type: 'definition',
          term: 'Formal charge',
          text: 'The [[gchem-formal-charge|formal charge]] of an atom in a Lewis structure is the charge it would carry if every bonding pair were split **equally** between its two atoms: $\\text{FC} = V - L - \\tfrac12 B$, where $V$ = valence electrons of the free atom, $L$ = electrons in its lone pairs, $B$ = electrons in its bonds. The formal charges always add up to the charge of the molecule or ion.',
        },
        {
          type: 'p',
          text: 'Think of it as an audit. A neutral free atom "owns" $V$ electrons. In the molecule it fully owns its lone pairs and half of each shared pair. If it now owns fewer than $V$, its formal charge is positive; more, negative.',
        },
        {
          type: 'derivation',
          title: 'Three Lewis structures for thiocyanate, $\\ce{SCN-}$',
          steps: [
            { tex: '6 + 4 + 5 + 1 = 16\\ \\text{valence electrons}', why: 'S (group 16), C (14), N (15), plus one for the $1-$ charge. Carbon, the least electronegative, is central.' },
            { tex: '[\\ce{S=C=N}]^-:\\ \\text{FC}(\\ce{S}) = 6 - 4 - 2 = 0,\\ \\text{FC}(\\ce{C}) = 4 - 0 - 4 = 0,\\ \\text{FC}(\\ce{N}) = 5 - 4 - 2 = -1', why: 'Two double bonds; S and N each keep two lone pairs (4 electrons) and share 4 bonding electrons.' },
            { tex: '[\\ce{S-C#N}]^-:\\ \\text{FC}(\\ce{S}) = 6 - 6 - 1 = -1,\\ \\text{FC}(\\ce{C}) = 0,\\ \\text{FC}(\\ce{N}) = 5 - 2 - 3 = 0', why: 'S has three lone pairs and one bond; N has one lone pair and a triple bond.' },
            { tex: '[\\ce{S#C-N}]^-:\\ \\text{FC}(\\ce{S}) = 6 - 2 - 3 = +1,\\ \\text{FC}(\\ce{C}) = 0,\\ \\text{FC}(\\ce{N}) = 5 - 6 - 1 = -2', why: 'The mirror image of the second structure. Check each sum: $0 + 0 - 1 = -1 + 0 + 0 = +1 + 0 - 2 = -1$, the ion\'s charge.' },
          ],
          result: 'Same skeleton, same 16 electrons, three different charge distributions.',
        },
        {
          type: 'figure',
          svg: FIG.scn,
          alt: 'Three bracketed thiocyanate structures with charge minus one. First: S=C=N with two lone pairs on S and on N, formal charges 0, 0, −1, labeled best. Second: S–C≡N with three lone pairs on S and one on N, formal charges −1, 0, 0, labeled close second. Third: S≡C–N with one lone pair on S and three on N, formal charges +1, 0, −2, labeled poor.',
          caption: 'Formal charges in color. The third structure separates charge ($+1$ next to $-2$ across the ion) and puts $-2$ on one atom; it contributes almost nothing.',
        },
        {
          type: 'theorem',
          name: 'Choosing the best structure',
          text: '1. Prefer formal charges as close to zero as possible. 2. Put negative formal charge on the more [[electronegativity|electronegative]] atom. 3. Avoid like charges on adjacent atoms. Throughout, period-2 atoms (C, N, O, F) never exceed an octet.',
        },
        {
          type: 'p',
          text: 'For $\\ce{SCN-}$, the first two structures each have a single $-1$. Rule 2 breaks the tie: N (3.04) is more electronegative than S (2.58), so $[\\ce{S=C=N}]^-$ is the best single structure. The second is close behind, and experiment agrees that both matter: the C–N bond (117 pm) is nearly a triple bond, and the S–C bond (165 pm) lies between a single (about 182 pm) and a double (about 160 pm). Thiocyanate even binds metal ions through either S or N, as you would expect if the negative charge is shared.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Formal charge is not the real charge',
          text: 'Formal charge pretends every bond is perfectly nonpolar. Real partial charges (from electronegativity differences) can differ a lot: in $\\ce{H2O}$ every formal charge is 0, yet oxygen carries a real partial charge of about $-0.7$. Use formal charge to **compare structures**, not to predict where the charge actually is.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Draw the perchlorate ion, $\\ce{ClO4-}$, with Cl in the center and four Cl–O **single** bonds, every O completing its octet with three lone pairs. What is the formal charge on chlorine in this structure?',
      hint: 'Chlorine has $V = 7$. In this structure it has no lone pairs and four bonds.',
      label: '$\\text{FC}(\\ce{Cl}) =$',
      answer: '3',
      explanation: '$\\text{FC} = 7 - 0 - \\tfrac12(8) = +3$. Each oxygen has $6 - 6 - 1 = -1$, so the sum is $3 + 4(-1) = -1$, the ion\'s charge. A $+3$ surrounded by four $-1$ charges is exactly the kind of charge separation the formal-charge rules dislike, which is why many textbooks draw perchlorate with three Cl=O double bonds (all charges 0 except one O at $-1$). The next cards discuss whether that is really better.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Different skeletons, and the sulfate debate',
      blocks: [
        {
          type: 'p',
          text: 'Formal charge also rules out wrong skeletons. Carbon dioxide has 16 valence electrons. Compare three octet structures:',
        },
        {
          type: 'table',
          headers: ['Structure', 'Formal charges', 'Verdict'],
          rows: [
            ['$\\ce{O=C=O}$', '$0,\\ 0,\\ 0$', 'Best: all zero. Matches the two equal C=O bonds (116 pm) and zero dipole.'],
            ['$\\ce{O#C-O}$', '$+1,\\ 0,\\ -1$', 'Valid octets, but separated charges. A minor contributor.'],
            ['$\\ce{C=O=O}$ (O central)', '$-2,\\ +2,\\ 0$', 'Wrong skeleton: large charges, and the electronegative atom carries $+2$.'],
          ],
          caption: 'Formal charge confirms the rule of thumb from Foundations: the least electronegative atom (here C) goes in the center.',
        },
        {
          type: 'heading',
          text: 'Sulfate: when the rules disagree',
        },
        {
          type: 'p',
          text: 'For $\\ce{SO4^2-}$ (32 valence electrons), the octet structure A has four S–O single bonds with formal charges $+2$ on S and $-1$ on every O. Structure B converts two lone pairs into S=O double bonds, giving 12 electrons around sulfur and formal charges of 0 on S, 0 on two O and $-1$ on the other two. Rule 1 prefers B; the octet rule prefers A.',
        },
        {
          type: 'figure',
          svg: FIG.so4,
          alt: 'Two bracketed sulfate structures with charge 2−. A: S with four single bonds to O, each O with three lone pairs; formal charges +2 on S and −1 on each O. B: S with two double bonds (top and right O, two lone pairs each) and two single bonds (left and bottom O, three lone pairs each); formal charges 0 on S and the double-bonded O, −1 on the single-bonded O.',
          caption: 'Both structures have 32 electrons and predict the same tetrahedral shape. B needs six resonance forms to make all four S–O bonds equal; A has equal bonds automatically.',
        },
        {
          type: 'p',
          text: 'Stated fairly, the evidence cuts both ways. The measured S–O bond length, 149 pm, is shorter than the S–OH single bond in sulfuric acid (157 pm), which seems to favor some double-bond character (B). But modern quantum calculations find almost no involvement of sulfur\'s d orbitals and a large positive charge on sulfur, closer to A; in that view the bonds are short because a highly charged S attracts each O strongly. Many general chemistry texts (including OpenStax) draw B; many inorganic and computational chemists prefer A.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What to do on an exam',
          text: 'Follow your course\'s convention, and know why both exist. Whichever you draw, the predictions that matter agree: four equivalent S–O bonds, tetrahedral geometry, and a $2-$ charge spread over the four oxygens. If asked for "the structure that minimizes formal charge", that is B.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'The cyanate ion, $\\ce{OCN-}$, has C in the center and 16 valence electrons. According to the formal-charge rules, which structure is best?',
      options: [
        { text: '$[\\ce{N#C-O}]^-$: formal charges N 0, C 0, O $-1$', correct: true, why: 'Only one nonzero formal charge, and it sits on oxygen, the most electronegative atom (3.44). Rules 1 and 2 are both satisfied.' },
        { text: '$[\\ce{N=C=O}]^-$: formal charges N $-1$, C 0, O 0', why: 'Also only one $-1$, but on N (3.04) rather than O (3.44). It is the second-best structure and contributes, but rule 2 ranks it below the first.' },
        { text: '$[\\ce{N-C#O}]^-$: formal charges N $-2$, C 0, O $+1$', why: 'This puts $+1$ on the most electronegative atom and $-2$ on N: the worst of the three.' },
        { text: 'All three are equally good, because each gives every atom an octet', why: 'Octets are necessary, not sufficient. Formal charge distinguishes structures that all satisfy the octet rule.' },
      ],
      explanation: 'Compare with thiocyanate: replacing S by O flips the verdict. In $\\ce{SCN-}$ nitrogen is more electronegative than sulfur, so the $-1$ goes on N; in $\\ce{OCN-}$ oxygen beats nitrogen, so it goes on O. The real cyanate ion is a resonance hybrid dominated by $[\\ce{N#C-O}]^-$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Resonance, delocalization and bond order',
      blocks: [
        {
          type: 'p',
          text: 'When two or more structures are equally good, as in ozone, no single picture is right. The real molecule is the [[chem-resonance|resonance]] hybrid: an average, with some electron pairs spread over several atoms instead of sitting between two. Those electrons are [[gchem-delocalized-electrons|delocalized]].',
        },
        {
          type: 'figure',
          svg: FIG.o3,
          alt: 'Left: two resonance structures of ozone joined by a double-headed arrow. In the first, the left O is double bonded to the central O and the right O is single bonded; in the second, the reverse. The central O has one lone pair and formal charge +1; the single-bonded terminal O has three lone pairs and −1; the double-bonded one has two lone pairs and 0. Right: the hybrid, with a solid plus a dashed line for each bond, δ+ on the central O and δ− on both ends, labeled two equal bonds, bond order 1½, 128 pm.',
          caption: 'Ozone\'s two O–O bonds are identical (128 pm), between the O–O single bond in $\\ce{H2O2}$ (148 pm) and the O=O double bond in $\\ce{O2}$ (121 pm). Bent shape, central O slightly positive: ozone is a polar molecule.',
        },
        {
          type: 'definition',
          term: 'Bond order',
          text: 'The [[gchem-bond-order|bond order]] between two atoms is the number of shared electron pairs between them: 1 for a single bond, 2 for a double, 3 for a triple. With resonance, average over the equivalent structures: $\\text{bond order} = \\dfrac{\\text{total shared pairs in the equivalent bonds}}{\\text{number of equivalent bonds}}$.',
        },
        {
          type: 'derivation',
          title: 'Fractional bond orders',
          steps: [
            { tex: '\\ce{O3}:\\ \\frac{2 + 1}{2} = \\frac{3}{2}', why: 'Each resonance structure has one double and one single O–O bond: 3 shared pairs over 2 bonds.' },
            { tex: '\\ce{NO3-}:\\ \\frac{2 + 1 + 1}{3} = \\frac{4}{3}', why: 'Nitrate (24 electrons) has three resonance structures, each with one N=O and two N–O: 4 pairs over 3 bonds. Measured: all three N–O bonds are 125 pm.' },
            { tex: '\\ce{C6H6}\\ (\\ce{C-C}):\\ \\frac{3(2) + 3(1)}{6} = \\frac{3}{2}', why: 'Benzene\'s ring has alternating double and single bonds in each of two resonance structures: 9 pairs over 6 bonds.' },
          ],
          result: 'Fractional bond orders are the signature of delocalization. Bond order, not the drawing, is what predicts bond length and strength.',
        },
        {
          type: 'figure',
          svg: FIG.benzene,
          alt: 'Two hexagons with alternating double bonds, shifted by one position, joined by a double-headed arrow, equal to a hexagon with a purple circle inside, labeled all six C–C bonds 139 pm.',
          caption: 'Benzene, a preview of organic chemistry. Six electrons are delocalized around the whole ring (the circle). All six C–C bonds are 139 pm, and the ring is unusually stable, a property chemists call aromaticity.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why delocalization stabilizes',
          text: 'An electron spread over a larger region has lower kinetic energy (for a particle in a box, the energy scales as $1/L^2$, where $L$ is the length of the box), and it can be attracted by more nuclei. So the real hybrid is **lower in energy** than any one resonance structure would be. For benzene that extra stability, the resonance energy, is about 150 kJ/mol: the reason benzene resists the addition reactions that ordinary C=C bonds undergo easily.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'The carbonate ion, $\\ce{CO3^2-}$, has three equivalent resonance structures, each with one C=O and two C–O bonds. What is the C–O bond order? (A fraction or two decimals.)',
      hint: 'Count shared pairs in one resonance structure and divide by the number of equivalent C–O bonds.',
      label: 'bond order $=$',
      answer: '4/3',
      answerTex: '\\tfrac{4}{3} \\approx 1.33',
      explanation: 'One double bond (2 pairs) plus two single bonds (1 pair each) gives 4 shared pairs spread over 3 equivalent bonds: $4/3$. The measured C–O length in carbonate, 129 pm, falls between a C–O single bond (143 pm) and a C=O double bond (123 pm), closer to the double, just as a bond order of $1\\tfrac13$ suggests.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Bond order, bond length and bond enthalpy',
      blocks: [
        {
          type: 'p',
          text: 'More shared pairs pull two nuclei closer and hold them more tightly. For bonds between the same two elements, a higher bond order means a **shorter** and **stronger** bond. The [[gchem-bond-enthalpy|bond enthalpy]] $D$ is the energy needed to break one mole of a bond in the gas phase, $\\ce{X-Y(g) -> X(g) + Y(g)}$, always positive.',
        },
        {
          type: 'table',
          headers: ['Bond', 'Order', 'Length (pm)', 'Enthalpy $D$ (kJ/mol)'],
          rows: [
            ['C–C', '1', '154', '345'],
            ['C=C', '2', '134', '611'],
            ['C≡C', '3', '120', '837'],
            ['C–O', '1', '143', '350'],
            ['C=O', '2', '123', '741 (799 in $\\ce{CO2}$)'],
            ['N–N / N=N / N≡N', '1 / 2 / 3', '145 / 125 / 110', '160 / 418 / 945'],
            ['O–O / O=O', '1 / 2', '148 / 121', '146 / 498'],
          ],
          caption: 'Typical lengths and average bond enthalpies (OpenStax *Chemistry 2e* Table 7.2 and standard compilations; values vary by a few percent with the molecule).',
        },
        {
          type: 'graph',
          x: [0.8, 3.2],
          y: [110, 160],
          xStep: 0.5,
          yStep: 10,
          functions: [{ expr: '154 - 71*log(x)', label: 'Pauling: $r_n = r_1 - 71\\log_{10} n$ (pm)', color: 'blue' }],
          points: [
            { x: 1, y: 154, label: 'ethane', color: 'green' },
            { x: '4/3', y: 142, label: 'graphite', color: 'green' },
            { x: 1.5, y: 139, label: 'benzene', color: 'green' },
            { x: 2, y: 134, label: 'ethylene', color: 'green' },
            { x: 3, y: 120, label: 'acetylene', color: 'green' },
            { x: 'n', y: '154 - 71*log(n)', color: 'red' },
          ],
          sliders: [{ name: 'n', min: 1, max: 3, step: 0.05, value: 1.5, label: 'C–C bond order $n$' }],
          readouts: [{ label: 'predicted C–C length (pm) $\\approx$', expr: '154 - 71*log(n)', digits: 1 }],
          caption: 'Measured carbon–carbon bond lengths (green) against Linus Pauling\'s empirical rule (blue). The curve flattens: each extra pair shortens the bond less than the one before. Fractional orders from resonance (graphite $\\tfrac43$, benzene $\\tfrac32$) fall within a few picometres of the curve.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A double bond is not two single bonds',
          text: 'C=C (611) is less than twice C–C (345), and C≡C (837) is far less than three times. The second and third pairs form a different, weaker kind of bond (a π bond), as the hybridization lesson explains. The opposite happens for nitrogen: N≡N (945) is almost six times N–N (160), because N–N single bonds are weakened by repulsion between the lone pairs on neighboring N atoms. That is why so many nitrogen compounds release energy when they form $\\ce{N2}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'Because a C=C bond contains two shared pairs, its bond enthalpy is about twice that of a C–C single bond.',
      answer: false,
      explanation: 'C=C is 611 kJ/mol, only 1.77 times C–C (345). The second pair forms a π bond, a side-by-side overlap that is weaker than the head-on σ overlap of the first pair. This is why alkenes react by breaking just the π bond (adding atoms across the double bond) while keeping the σ bond intact.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Odd-electron species: radicals',
      blocks: [
        {
          type: 'p',
          text: 'A molecule with an odd number of valence electrons cannot pair them all. One electron stays unpaired, and no atom-by-atom octet bookkeeping can fix that. Such a species is a [[gchem-free-radical|radical]] (or free radical).',
        },
        {
          type: 'figure',
          svg: FIG.radicals,
          alt: 'Left: nitric oxide, N double bonded to O, with one lone pair on N, two on O, and a single red dot (the unpaired electron) on N; 11 electrons. Right: nitrogen dioxide, bent, N in the center with a red unpaired electron, a double bond to the left O (two lone pairs, formal charge 0) and a single bond to the right O (three lone pairs, formal charge −1); N has formal charge +1; 17 electrons.',
          caption: 'Place the odd electron to give the best formal charges. In NO, putting it on N gives both atoms 0. In $\\ce{NO2}$ there are two equivalent resonance structures (the double bond on either side).',
        },
        {
          type: 'list',
          items: [
            '**$\\ce{NO}$** (11 electrons) forms in hot engines and lightning from $\\ce{N2}$ and $\\ce{O2}$. In the body it is a signaling molecule that relaxes blood vessels.',
            '**$\\ce{NO2}$** (17 electrons) is the brown gas in smog. Two radicals can pair their odd electrons into a bond: $\\ce{2NO2(g) <=> N2O4(g)}$, brown to colorless. Cooling the mixture fades the color as dimers form.',
            '**$\\ce{ClO2}$** (19 electrons) is a radical stable enough to bottle. It disinfects drinking water, and some field water-purification tablets work by releasing it.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why radicals are reactive',
          text: 'An unpaired electron sits in a half-filled orbital that can accept one more electron and form a pair. Pairing releases energy, so radicals grab electrons or atoms from other molecules, or combine with each other. In the atmosphere, in combustion and in the damage that oxidizers do to living tissue, the fast steps are almost always radical reactions.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Coming up',
          text: 'Molecular oxygen, $\\ce{O2}$, has an even number of electrons (12), and its Lewis structure $\\ce{O=O}$ pairs them all. Yet $\\ce{O2}$ has two unpaired electrons and is attracted to a magnet. Lewis structures cannot explain this; molecular orbital theory, at the end of this unit, can.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Which of these species is a radical?',
      options: [
        { text: '$\\ce{NO2-}$ (nitrite)', why: '$5 + 12 + 1 = 18$ electrons: even, all paired. Nitrite is an ordinary ion with two resonance structures.' },
        { text: '$\\ce{NO2+}$ (nitronium)', why: '$5 + 12 - 1 = 16$ electrons: even. It is linear $[\\ce{O=N=O}]^+$, isoelectronic with $\\ce{CO2}$.' },
        { text: '$\\ce{NO2}$', correct: true, why: '$5 + 12 = 17$ electrons: odd, so one electron must be unpaired.' },
        { text: '$\\ce{N2O4}$', why: '$2(5) + 4(6) = 34$ electrons: even. It forms when two $\\ce{NO2}$ radicals pair their odd electrons into an N–N bond.' },
      ],
      explanation: 'Count valence electrons, adjusting for charge: an odd total means a radical. Adding or removing one electron from $\\ce{NO2}$ (to make $\\ce{NO2-}$ or $\\ce{NO2+}$) gives an even count, and dimerizing two radicals pairs the odd electrons.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Expanded octets and what they really mean',
      blocks: [
        {
          type: 'p',
          text: 'Foundations showed that atoms from period 3 down can have more than eight electrons around them. The drawing method needs one change: after completing the outer atoms\' octets, put **all** leftover electrons on the central atom as lone pairs, even if that takes it past eight.',
        },
        {
          type: 'figure',
          svg: FIG.expanded,
          alt: 'Three Lewis structures. PCl5: P with five single bonds to Cl, each Cl with three lone pairs; 40 electrons, 10 around P. SF6: S with six single bonds to F, each F with three lone pairs; 48 electrons, 12 around S. XeF4: Xe with four single bonds to F, each F with three lone pairs, and two lone pairs on Xe; 36 electrons, 12 around Xe.',
          caption: 'All formal charges are zero in these structures. Lewis structures do not show 3D shape; the VSEPR lesson does.',
        },
        {
          type: 'derivation',
          title: 'Electron bookkeeping for $\\ce{XeF4}$',
          steps: [
            { tex: '8 + 4(7) = 36', why: 'Xenon is a noble gas with 8 valence electrons; each F brings 7.' },
            { tex: '36 - 4(2) - 4(6) = 4\\ \\text{left}', why: 'Four Xe–F bonds use 8; three lone pairs on each F use 24.' },
            { tex: '\\text{Xe: } 4(2) + 2(2) = 12\\ \\text{electrons}', why: 'The 4 leftover electrons go on Xe as two lone pairs.' },
            { tex: '\\text{FC(Xe)} = 8 - 4 - \\tfrac12(8) = 0', why: 'Every formal charge is zero, so this is the best structure.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'The modern view: no d orbitals needed',
          text: 'Older textbooks said period-3 atoms "use empty 3d orbitals" to hold the extra electrons. Quantum calculations show the 3d orbitals are too high in energy to take much part. A better picture: the bonds are very polar, and the "extra" electron density sits mostly on the electronegative outer atoms. In $\\ce{XeF2}$, for example, one F–Xe–F unit shares 4 electrons over 3 atoms (a three-center, four-electron bond), so xenon never really holds 10 electrons. Chemists call such molecules **hypervalent**; "[[chem-expanded-octet|expanded octet]]" is a useful bookkeeping label, not a literal count.',
        },
        {
          type: 'p',
          text: 'Why only period 3 and below? The central atom must be **large** enough to fit five or six neighbors, and the outer atoms are almost always very electronegative (F, Cl, O). Nitrogen is too small: $\\ce{NCl3}$ exists but $\\ce{NCl5}$ does not, while its larger cousin phosphorus makes both $\\ce{PCl3}$ and $\\ce{PCl5}$. $\\ce{SF6}$, chemically almost inert, insulates high-voltage switchgear, and its extreme stability is also why it is regulated as a very long-lived greenhouse gas.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Order the steps for drawing the Lewis structure of $\\ce{ICl4-}$ (iodine central).',
      lines: [
        'Count valence electrons: $7 + 4(7) + 1 = 36$',
        'Connect each Cl to I with a single bond (8 electrons used)',
        'Give each Cl three lone pairs (24 more, 32 used)',
        'Put the remaining 4 electrons on I as two lone pairs (12 electrons around I)',
        'Check formal charges: I is $7 - 4 - 4 = -1$, each Cl is 0, total $-1$',
      ],
      distractors: ['Convert a Cl lone pair into an I=Cl double bond so iodine has exactly 8'],
      explanation: '$\\ce{ICl4-}$ has the same electron arrangement as $\\ce{XeF4}$: four bonds and two lone pairs on the central atom. Leftover electrons always go on the central atom, even past an octet, because iodine (period 5) can hold them. The distractor goes the wrong way: the central atom already has too many electrons, not too few, and halogens rarely share lone pairs in double bonds.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Estimating ΔH from bond enthalpies',
      blocks: [
        {
          type: 'p',
          text: 'Here is a powerful use of bond enthalpies. Imagine any gas-phase reaction happening in two stages: first break every bond in the reactants, producing separate atoms (costs energy), then form every bond in the products (releases energy). Because energy changes do not depend on the path, the reaction enthalpy is approximately',
        },
        {
          type: 'theorem',
          name: 'Reaction enthalpy from bond enthalpies',
          tex: '\\Delta H_{\\text{rxn}} \\approx \\sum D(\\text{bonds broken}) - \\sum D(\\text{bonds formed})',
          text: 'Recall $\\Delta H < 0$ means energy is released ([[gchem-exothermic|exothermic]]). Reactions that trade weak bonds for strong ones are exothermic.',
        },
        {
          type: 'derivation',
          title: 'Burning methane: $\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g)}$',
          steps: [
            { tex: '\\text{broken: } 4\\,D(\\ce{C-H}) + 2\\,D(\\ce{O=O}) = 4(415) + 2(498) = 2656\\ \\text{kJ}', why: 'Count every bond in the reactants: $\\ce{CH4}$ has four C–H bonds; each of the two $\\ce{O2}$ has one O=O.' },
            { tex: '\\text{formed: } 2\\,D(\\ce{C=O}) + 4\\,D(\\ce{O-H}) = 2(741) + 4(464) = 3338\\ \\text{kJ}', why: '$\\ce{CO2}$ has two C=O bonds; each of the two waters has two O–H bonds. Using the **average** C=O value.' },
            { tex: '\\Delta H \\approx 2656 - 3338 = -682\\ \\text{kJ}', why: 'Broken minus formed. Negative: the product bonds are stronger in total, so energy is released.' },
            { tex: '\\text{with } D(\\ce{C=O in CO2}) = 799:\\ 2656 - 3454 = -798\\ \\text{kJ}', why: 'Using the C=O value measured for $\\ce{CO2}$ itself instead of the average over many molecules.' },
          ],
          result: 'The measured value is $-802$ kJ per mole of $\\ce{CH4}$. The average-value estimate is off by 15%; the better C=O value brings it within 1%.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the estimate is only approximate',
          text: 'A tabulated $D$ is an **average** over many molecules; the actual strength of a bond depends on its neighbors (the C=O in $\\ce{CO2}$ is 58 kJ/mol stronger than the average). Bond enthalpies also describe gas-phase molecules only: if water ends up liquid, its condensation releases another 44 kJ/mol that no bond table includes. For accurate values chemists use enthalpies of formation, the subject of the Thermochemistry unit. Bond enthalpies remain the best tool for **understanding** why a reaction is exothermic.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Fuels: the energy is in the oxygen',
          text: 'Why does burning release so much energy? Look at the numbers: the O=O bond (498 kJ/mol for two shared pairs) is weak for a double bond, while the C=O and O–H bonds in the products are strong. Most of the energy of combustion comes from replacing the weak bonds of $\\ce{O2}$ with strong ones. That is also why fuel energy density depends so much on hydrogen content: every C–H turns into an O–H, one of the strongest common single bonds.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Estimate $\\Delta H$ for $\\ce{H2(g) + Cl2(g) -> 2HCl(g)}$ from bond enthalpies: H–H 436, Cl–Cl 243, H–Cl 432 kJ/mol. Give the answer in kJ (for the equation as written) to the nearest kJ.',
      hint: 'Broken: one H–H and one Cl–Cl. Formed: two H–Cl.',
      label: '$\\Delta H \\approx$',
      unit: 'kJ',
      answer: '436 + 243 - 2*432',
      answerTex: '-185\\ \\text{kJ}',
      tolerance: 0.5,
      explanation: 'Broken: $436 + 243 = 679$ kJ. Formed: $2 \\times 432 = 864$ kJ. $\\Delta H \\approx 679 - 864 = -185$ kJ. The measured value is $-184.6$ kJ: excellent agreement, because diatomic bond enthalpies are measured for exactly these molecules rather than averaged. A mixture of hydrogen and chlorine can react explosively once started by light, which hints at the radical chain mechanism you will meet in kinetics.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A student estimates $\\Delta H$ for the Haber process, $\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$, using N≡N 945, H–H 436, N–H 390 kJ/mol. Tap the first line that is wrong.',
      lines: [
        'Bonds broken: one N≡N and three H–H',
        'Energy in: $945 + 3(436) = 2253$ kJ',
        'Bonds formed: each $\\ce{NH3}$ has three N–H bonds, so $3(390) = 1170$ kJ',
        '$\\Delta H \\approx 2253 - 1170 = +1083$ kJ',
      ],
      errorLines: [3],
      explanation: 'The equation makes **two** $\\ce{NH3}$ molecules, so six N–H bonds form: $6(390) = 2340$ kJ. Then $\\Delta H \\approx 2253 - 2340 = -87$ kJ, close to the measured $-92$ kJ. Always multiply bonds per molecule by the coefficient. A result of $+1083$ kJ should also have rung an alarm: the Haber process is known to be exothermic.',
    },
  ],
  takeaways: [
    'Formal charge $= V - L - \\tfrac12 B$; the best structure keeps formal charges near zero, puts negative charge on the more electronegative atom, and avoids adjacent like charges.',
    'SCN⁻ is best drawn $[\\ce{S=C=N}]^-$ and OCN⁻ as $[\\ce{N#C-O}]^-$; for SO₄²⁻, the octet and formal-charge-minimized structures are both defended, and both predict four equivalent bonds.',
    'Resonance describes delocalized electrons; bond order = shared pairs ÷ equivalent bonds ($\\ce{O3}$ $\\tfrac32$, $\\ce{NO3-}$ $\\tfrac43$, benzene $\\tfrac32$).',
    'Higher bond order means shorter and stronger bonds, but a double bond is not twice a single (C=C 611 vs C–C 345 kJ/mol).',
    'Odd-electron species (NO, NO₂, ClO₂) are radicals; "expanded octets" (PCl₅, SF₆, XeF₄) are bookkeeping for highly polar, delocalized bonding, not d-orbital use.',
    '$\\Delta H \\approx \\sum D(\\text{broken}) - \\sum D(\\text{formed})$: approximate because bond enthalpies are averages for gas-phase molecules.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 7: Chemical Bonding and Molecular Geometry',
      url: 'https://openstax.org/books/chemistry-2e/pages/7-introduction',
      source: 'openstax',
      note: 'Section 7.4 covers formal charge and resonance; Section 7.5 has the bond-enthalpy table and worked ΔH estimates.',
    },
    {
      title: 'Wikipedia — Hypervalent molecule',
      url: 'https://en.wikipedia.org/wiki/Hypervalent_molecule',
      source: 'wikipedia',
      note: 'The history of the expanded-octet idea and the three-center four-electron bond model that replaced d-orbital explanations.',
    },
    {
      title: 'Wikipedia — Bond-dissociation energy',
      url: 'https://en.wikipedia.org/wiki/Bond-dissociation_energy',
      source: 'wikipedia',
      note: 'Why the energy to break a specific bond differs from the average bond enthalpy, with tables of real values.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "Formal Charge" and "Resonance" for many more worked structures, including oxyanions like sulfate and phosphate.',
    },
  ],
};
