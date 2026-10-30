import type { Lesson } from '../../types';

// <figures> (generated from hand-written SVG; electron counts checked)
const FIG = {
  bf3: '<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg"><text x="120" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:24px">B</text><text x="120" y="42" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="120" y1="78" x2="120" y2="56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="101.5" cy="46" r="2.6" fill="currentColor"/><circle cx="101.5" cy="38" r="2.6" fill="currentColor"/><circle cx="116" cy="21.5" r="2.6" fill="currentColor"/><circle cx="124" cy="21.5" r="2.6" fill="currentColor"/><circle cx="138.5" cy="38" r="2.6" fill="currentColor"/><circle cx="138.5" cy="46" r="2.6" fill="currentColor"/><text x="76.7" y="117" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="109.3" y1="98.2" x2="87.4" y2="110.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="90.1" cy="132.2" r="2.6" fill="currentColor"/><circle cx="83.2" cy="136.2" r="2.6" fill="currentColor"/><circle cx="62.3" cy="129.9" r="2.6" fill="currentColor"/><circle cx="58.3" cy="123" r="2.6" fill="currentColor"/><circle cx="63.3" cy="101.8" r="2.6" fill="currentColor"/><circle cx="70.2" cy="97.8" r="2.6" fill="currentColor"/><text x="163.3" y="117" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="130.7" y1="98.2" x2="152.6" y2="110.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="169.8" cy="97.8" r="2.6" fill="currentColor"/><circle cx="176.7" cy="101.8" r="2.6" fill="currentColor"/><circle cx="181.7" cy="123" r="2.6" fill="currentColor"/><circle cx="177.7" cy="129.9" r="2.6" fill="currentColor"/><circle cx="156.8" cy="136.2" r="2.6" fill="currentColor"/><circle cx="149.9" cy="132.2" r="2.6" fill="currentColor"/><text x="240" y="80" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">B: only 6 e⁻</text><text x="240" y="100" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">yet stable</text></svg>',
  co2_steps: '<svg viewBox="0 0 480 198" xmlns="http://www.w3.org/2000/svg"><text x="20" y="14" text-anchor="start" dominant-baseline="central" style="font-size:15.7px" class="t-gray">After step 4 (outer octets filled):</text><text x="170" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="240" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="310" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="182" y1="50" x2="228" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="252" y1="50" x2="298" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="166" cy="29.5" r="2.6" fill="currentColor"/><circle cx="174" cy="29.5" r="2.6" fill="currentColor"/><circle cx="151.5" cy="54" r="2.6" fill="currentColor"/><circle cx="151.5" cy="46" r="2.6" fill="currentColor"/><circle cx="174" cy="70.5" r="2.6" class="f-orange"/><circle cx="166" cy="70.5" r="2.6" class="f-orange"/><circle cx="306" cy="29.5" r="2.6" fill="currentColor"/><circle cx="314" cy="29.5" r="2.6" fill="currentColor"/><circle cx="328.5" cy="46" r="2.6" fill="currentColor"/><circle cx="328.5" cy="54" r="2.6" fill="currentColor"/><circle cx="314" cy="70.5" r="2.6" class="f-orange"/><circle cx="306" cy="70.5" r="2.6" class="f-orange"/><text x="400" y="42" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">C has only 4 e⁻</text><text x="400" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">(needs 8)</text><line x1="240" y1="88" x2="240" y2="114" class="s-orange" stroke-width="2" stroke-linecap="round"/><polygon points="240,122 244,114 236,114" class="f-orange"/><text x="252" y="105" text-anchor="start" dominant-baseline="central" style="font-size:15.7px" class="t-orange">each O shares one orange pair</text><text x="170" y="165" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="240" y="165" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="310" y="165" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="182" y1="162" x2="228" y2="162" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="182" y1="168" x2="228" y2="168" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="252" y1="162" x2="298" y2="162" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="252" y1="168" x2="298" y2="168" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="156.6" cy="149.8" r="2.6" fill="currentColor"/><circle cx="163.5" cy="145.8" r="2.6" fill="currentColor"/><circle cx="163.5" cy="184.2" r="2.6" fill="currentColor"/><circle cx="156.6" cy="180.2" r="2.6" fill="currentColor"/><circle cx="316.5" cy="145.8" r="2.6" fill="currentColor"/><circle cx="323.4" cy="149.8" r="2.6" fill="currentColor"/><circle cx="323.4" cy="180.2" r="2.6" fill="currentColor"/><circle cx="316.5" cy="184.2" r="2.6" fill="currentColor"/><text x="400" y="165" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-green">every atom: 8 ✓</text></svg>',
  co3_resonance: '<svg viewBox="0 0 572 170" xmlns="http://www.w3.org/2000/svg"><text x="86" y="88" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="86" y="42" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="83" y1="74" x2="83" y2="56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="89" y1="74" x2="89" y2="56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="67.6" cy="36" r="2.6" fill="currentColor"/><circle cx="71.6" cy="29.1" r="2.6" fill="currentColor"/><circle cx="100.4" cy="29.1" r="2.6" fill="currentColor"/><circle cx="104.4" cy="36" r="2.6" fill="currentColor"/><text x="46.2" y="111" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="75.3" y1="94.2" x2="56.9" y2="104.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="59.6" cy="126.2" r="2.6" fill="currentColor"/><circle cx="52.6" cy="130.2" r="2.6" fill="currentColor"/><circle cx="31.8" cy="123.9" r="2.6" fill="currentColor"/><circle cx="27.8" cy="117" r="2.6" fill="currentColor"/><circle cx="32.8" cy="95.8" r="2.6" fill="currentColor"/><circle cx="39.7" cy="91.8" r="2.6" fill="currentColor"/><text x="125.8" y="111" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="96.7" y1="94.2" x2="115.1" y2="104.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="132.3" cy="91.8" r="2.6" fill="currentColor"/><circle cx="139.2" cy="95.8" r="2.6" fill="currentColor"/><circle cx="144.2" cy="117" r="2.6" fill="currentColor"/><circle cx="140.2" cy="123.9" r="2.6" fill="currentColor"/><circle cx="119.4" cy="130.2" r="2.6" fill="currentColor"/><circle cx="112.4" cy="126.2" r="2.6" fill="currentColor"/><path d="M25,12 L18,12 L18,156 L25,156" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M147,12 L154,12 L154,156 L147,156" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="160" y="16" text-anchor="start" dominant-baseline="central" style="font-size:19.0px">2−</text><text x="283" y="88" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="283" y="42" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="283" y1="74" x2="283" y2="56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="264.5" cy="46" r="2.6" fill="currentColor"/><circle cx="264.5" cy="38" r="2.6" fill="currentColor"/><circle cx="279" cy="21.5" r="2.6" fill="currentColor"/><circle cx="287" cy="21.5" r="2.6" fill="currentColor"/><circle cx="301.5" cy="38" r="2.6" fill="currentColor"/><circle cx="301.5" cy="46" r="2.6" fill="currentColor"/><text x="243.2" y="111" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="273.8" y1="96.8" x2="255.4" y2="107.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="270.8" y1="91.6" x2="252.4" y2="102.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="247.2" cy="131.5" r="2.6" fill="currentColor"/><circle cx="239.2" cy="131.5" r="2.6" fill="currentColor"/><circle cx="224.8" cy="105" r="2.6" fill="currentColor"/><circle cx="228.8" cy="98.1" r="2.6" fill="currentColor"/><text x="322.8" y="111" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="293.7" y1="94.2" x2="312.1" y2="104.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="329.3" cy="91.8" r="2.6" fill="currentColor"/><circle cx="336.2" cy="95.8" r="2.6" fill="currentColor"/><circle cx="341.2" cy="117" r="2.6" fill="currentColor"/><circle cx="337.2" cy="123.9" r="2.6" fill="currentColor"/><circle cx="316.4" cy="130.2" r="2.6" fill="currentColor"/><circle cx="309.4" cy="126.2" r="2.6" fill="currentColor"/><path d="M222,12 L215,12 L215,156 L222,156" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M344,12 L351,12 L351,156 L344,156" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="357" y="16" text-anchor="start" dominant-baseline="central" style="font-size:19.0px">2−</text><text x="480" y="88" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="480" y="42" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="480" y1="74" x2="480" y2="56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="461.5" cy="46" r="2.6" fill="currentColor"/><circle cx="461.5" cy="38" r="2.6" fill="currentColor"/><circle cx="476" cy="21.5" r="2.6" fill="currentColor"/><circle cx="484" cy="21.5" r="2.6" fill="currentColor"/><circle cx="498.5" cy="38" r="2.6" fill="currentColor"/><circle cx="498.5" cy="46" r="2.6" fill="currentColor"/><text x="440.2" y="111" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="469.3" y1="94.2" x2="450.9" y2="104.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="453.6" cy="126.2" r="2.6" fill="currentColor"/><circle cx="446.6" cy="130.2" r="2.6" fill="currentColor"/><circle cx="425.8" cy="123.9" r="2.6" fill="currentColor"/><circle cx="421.8" cy="117" r="2.6" fill="currentColor"/><circle cx="426.8" cy="95.8" r="2.6" fill="currentColor"/><circle cx="433.7" cy="91.8" r="2.6" fill="currentColor"/><text x="519.8" y="111" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><line x1="492.2" y1="91.6" x2="510.6" y2="102.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="489.2" y1="96.8" x2="507.6" y2="107.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="534.2" cy="98.1" r="2.6" fill="currentColor"/><circle cx="538.2" cy="105" r="2.6" fill="currentColor"/><circle cx="523.8" cy="131.5" r="2.6" fill="currentColor"/><circle cx="515.8" cy="131.5" r="2.6" fill="currentColor"/><path d="M419,12 L412,12 L412,156 L419,156" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M541,12 L548,12 L548,156 L541,156" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="554" y="16" text-anchor="start" dominant-baseline="central" style="font-size:19.0px">2−</text><line x1="188" y1="88" x2="199" y2="88" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="206,88 199,84.5 199,91.5" fill="currentColor"/><line x1="196" y1="88" x2="185" y2="88" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="178,88 185,91.5 185,84.5" fill="currentColor"/><line x1="385" y1="88" x2="396" y2="88" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="403,88 396,84.5 396,91.5" fill="currentColor"/><line x1="393" y1="88" x2="382" y2="88" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="375,88 382,91.5 382,84.5" fill="currentColor"/></svg>',
  ethane_ethene_ethyne: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg"><text x="66" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="124" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="20" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="66" y="44" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="66" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="170" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="124" y="44" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="124" y="136" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="78" y1="90" x2="112" y2="90" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="54" y1="90" x2="32" y2="90" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="66" y1="76" x2="66" y2="58" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="66" y1="104" x2="66" y2="122" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="136" y1="90" x2="158" y2="90" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="124" y1="76" x2="124" y2="58" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="124" y1="104" x2="124" y2="122" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="95" y="172" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px">C₂H₆ (ethane)</text><text x="95" y="194" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">C–C single</text><text x="236" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="296" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="210" y="48" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="210" y="132" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="322" y="48" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="322" y="132" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="248" y1="87" x2="284" y2="87" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="248" y1="93" x2="284" y2="93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="229" y1="78.7" x2="217" y2="59.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="229" y1="101.3" x2="217" y2="120.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="303" y1="78.7" x2="315" y2="59.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="303" y1="101.3" x2="315" y2="120.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="266" y="172" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px">C₂H₄ (ethene)</text><text x="266" y="194" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">C=C double</text><text x="412" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="470" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="368" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="514" y="90" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="424" y1="83" x2="458" y2="83" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="424" y1="90" x2="458" y2="90" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="424" y1="97" x2="458" y2="97" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="400" y1="90" x2="380" y2="90" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="482" y1="90" x2="502" y2="90" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="441" y="172" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px">C₂H₂ (ethyne)</text><text x="441" y="194" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">C≡C triple</text></svg>',
  f2_octets: '<svg viewBox="0 0 330 130" xmlns="http://www.w3.org/2000/svg"><text x="130" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><text x="200" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><line x1="142" y1="62" x2="188" y2="62" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="126" cy="41.5" r="2.6" fill="currentColor"/><circle cx="134" cy="41.5" r="2.6" fill="currentColor"/><circle cx="111.5" cy="66" r="2.6" fill="currentColor"/><circle cx="111.5" cy="58" r="2.6" fill="currentColor"/><circle cx="134" cy="82.5" r="2.6" fill="currentColor"/><circle cx="126" cy="82.5" r="2.6" fill="currentColor"/><circle cx="196" cy="41.5" r="2.6" fill="currentColor"/><circle cx="204" cy="41.5" r="2.6" fill="currentColor"/><circle cx="218.5" cy="58" r="2.6" fill="currentColor"/><circle cx="218.5" cy="66" r="2.6" fill="currentColor"/><circle cx="204" cy="82.5" r="2.6" fill="currentColor"/><circle cx="196" cy="82.5" r="2.6" fill="currentColor"/><ellipse cx="135" cy="62" rx="47" ry="34" fill="none" class="s-blue" stroke-width="1.6" stroke-dasharray="5 4"/><ellipse cx="195" cy="62" rx="47" ry="34" fill="none" class="s-orange" stroke-width="1.6" stroke-dasharray="5 4"/><text x="60" y="18" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">8 around F</text><text x="270" y="18" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-orange">8 around F</text><text x="165" y="115" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">the shared pair counts for both</text></svg>',
  h2_share: '<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg"><text x="40" y="40" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><circle cx="58.5" cy="40" r="2.6" class="f-blue"/><text x="85" y="40" text-anchor="middle" dominant-baseline="central" style="font-size:22px">+</text><text x="130" y="40" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><circle cx="111.5" cy="40" r="2.6" class="f-red"/><line x1="165" y1="40" x2="202" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="210,40 202,36 202,44" fill="currentColor"/><text x="240" y="40" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="284" y="40" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><circle cx="258" cy="40" r="2.6" class="f-blue"/><circle cx="266" cy="40" r="2.6" class="f-red"/><text x="320" y="40" text-anchor="middle" dominant-baseline="central" style="font-size:22px">=</text><text x="355" y="40" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="410" y="40" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="367" y1="40" x2="398" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse cx="220" cy="165" rx="120" ry="48" class="f-blue" fill-opacity="0.13"/><ellipse cx="220" cy="165" rx="58" ry="30" class="f-blue" fill-opacity="0.18"/><circle cx="150" cy="165" r="15" class="f-red"/><text x="150" y="165" text-anchor="middle" dominant-baseline="central" style="font-size:22px">+</text><circle cx="290" cy="165" r="15" class="f-red"/><text x="290" y="165" text-anchor="middle" dominant-baseline="central" style="font-size:22px">+</text><circle cx="213" cy="165" r="4" class="f-blue"/><circle cx="227" cy="165" r="4" class="f-blue"/><line x1="177" y1="165" x2="196" y2="165" class="s-gray" stroke-width="2" stroke-linecap="round"/><polygon points="203,165 196,161.5 196,168.5" class="f-gray"/><line x1="263" y1="165" x2="244" y2="165" class="s-gray" stroke-width="2" stroke-linecap="round"/><polygon points="237,165 244,168.5 244,161.5" class="f-gray"/><text x="150" y="199" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">nucleus</text><text x="290" y="199" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">nucleus</text><text x="220" y="103" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">shared pair: attracted by both nuclei</text></svg>',
  h2o: '<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><text x="150" y="60" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><text x="96" y="96" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="204" y="96" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="139.6" y1="66.9" x2="106.4" y2="89.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="160.4" y1="66.9" x2="193.6" y2="89.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="133.5" cy="49.2" r="2.6" fill="currentColor"/><circle cx="139.2" cy="43.5" r="2.6" fill="currentColor"/><circle cx="160.8" cy="43.5" r="2.6" fill="currentColor"/><circle cx="166.5" cy="49.2" r="2.6" fill="currentColor"/><text x="150" y="125" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">2 bonding pairs + 2 lone pairs = 8 e⁻</text></svg>',
  lewis_symbols: '<svg viewBox="0 0 470 120" xmlns="http://www.w3.org/2000/svg"><text x="45" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><circle cx="45" cy="29.5" r="2.6" fill="currentColor"/><text x="45" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">1 bond</text><text x="140" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><circle cx="140" cy="29.5" r="2.6" fill="currentColor"/><circle cx="158.5" cy="50" r="2.6" fill="currentColor"/><circle cx="140" cy="70.5" r="2.6" fill="currentColor"/><circle cx="121.5" cy="50" r="2.6" fill="currentColor"/><text x="140" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">4 bonds</text><text x="235" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><circle cx="231" cy="29.5" r="2.6" fill="currentColor"/><circle cx="239" cy="29.5" r="2.6" fill="currentColor"/><circle cx="253.5" cy="50" r="2.6" fill="currentColor"/><circle cx="235" cy="70.5" r="2.6" fill="currentColor"/><circle cx="216.5" cy="50" r="2.6" fill="currentColor"/><text x="235" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">3 bonds</text><text x="330" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">O</text><circle cx="326" cy="29.5" r="2.6" fill="currentColor"/><circle cx="334" cy="29.5" r="2.6" fill="currentColor"/><circle cx="348.5" cy="46" r="2.6" fill="currentColor"/><circle cx="348.5" cy="54" r="2.6" fill="currentColor"/><circle cx="330" cy="70.5" r="2.6" fill="currentColor"/><circle cx="311.5" cy="50" r="2.6" fill="currentColor"/><text x="330" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">2 bonds</text><text x="425" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">F</text><circle cx="421" cy="29.5" r="2.6" fill="currentColor"/><circle cx="429" cy="29.5" r="2.6" fill="currentColor"/><circle cx="443.5" cy="46" r="2.6" fill="currentColor"/><circle cx="443.5" cy="54" r="2.6" fill="currentColor"/><circle cx="429" cy="70.5" r="2.6" fill="currentColor"/><circle cx="421" cy="70.5" r="2.6" fill="currentColor"/><circle cx="406.5" cy="50" r="2.6" fill="currentColor"/><text x="425" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">1 bond</text></svg>',
  n2_hcn: '<svg viewBox="0 0 420 110" xmlns="http://www.w3.org/2000/svg"><text x="60" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><text x="120" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><line x1="72" y1="43" x2="108" y2="43" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="72" y1="50" x2="108" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="72" y1="57" x2="108" y2="57" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="41.5" cy="54" r="2.6" fill="currentColor"/><circle cx="41.5" cy="46" r="2.6" fill="currentColor"/><circle cx="138.5" cy="46" r="2.6" fill="currentColor"/><circle cx="138.5" cy="54" r="2.6" fill="currentColor"/><text x="90" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">N₂: 10 e⁻</text><text x="240" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="292" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="352" y="50" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><line x1="252" y1="50" x2="280" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="304" y1="43" x2="340" y2="43" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="304" y1="50" x2="340" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="304" y1="57" x2="340" y2="57" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="370.5" cy="46" r="2.6" fill="currentColor"/><circle cx="370.5" cy="54" r="2.6" fill="currentColor"/><text x="300" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">HCN: 1 + 4 + 5 = 10 e⁻</text></svg>',
  nh3_ch4: '<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg"><text x="100" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><text x="52" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="148" y="92" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="100" y="112" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="89.5" y1="68.6" x2="62.5" y2="85.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="110.5" y1="68.6" x2="137.5" y2="85.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="100" y1="76" x2="100" y2="98" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="96" cy="41.5" r="2.6" fill="currentColor"/><circle cx="104" cy="41.5" r="2.6" fill="currentColor"/><text x="100" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">NH₃: 5 + 3(1) = 8 e⁻</text><text x="300" y="72" text-anchor="middle" dominant-baseline="central" style="font-size:24px">C</text><text x="300" y="26" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="300" y="118" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="254" y="72" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="346" y="72" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="300" y1="58" x2="300" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="300" y1="86" x2="300" y2="104" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="288" y1="72" x2="266" y2="72" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="312" y1="72" x2="334" y2="72" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><text x="300" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">CH₄: 4 + 4(1) = 8 e⁻</text></svg>',
  nh4: '<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><text x="105" y="75" text-anchor="middle" dominant-baseline="central" style="font-size:24px">N</text><text x="105" y="27" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="105" y="123" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="57" y="75" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><text x="153" y="75" text-anchor="middle" dominant-baseline="central" style="font-size:24px">H</text><line x1="105" y1="61" x2="105" y2="41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="105" y1="89" x2="105" y2="109" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="93" y1="75" x2="69" y2="75" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="117" y1="75" x2="141" y2="75" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M43,10 L36,10 L36,140 L43,140" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M167,10 L174,10 L174,140 L167,140" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="180" y="14" text-anchor="start" dominant-baseline="central" style="font-size:20px">+</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'chem-covalent-lewis',
  title: 'Covalent Bonds and Lewis Structures',
  summary: 'When two nonmetals meet, neither gives up an electron — so they share. Learn why sharing holds atoms together and how to draw any small molecule\'s Lewis structure.',
  minutes: 21,
  objectives: [
    'Explain why a shared pair of electrons holds two atoms together, using the energy-versus-distance curve',
    'Distinguish bonding pairs from lone pairs and count electrons around each atom',
    'Relate single, double and triple bonds to bond length and bond strength',
    'Draw Lewis structures for molecules and polyatomic ions with a reliable step-by-step method',
    'Recognize resonance structures and the main exceptions to the octet rule',
    'Name binary molecular compounds with Greek prefixes',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Sharing instead of transferring',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson a metal handed electrons to a nonmetal. But what happens when two nonmetals meet — say, two hydrogen atoms, or carbon and oxygen? Both atoms hold their electrons tightly (high [[electronegativity|electronegativity]]), so neither will give one up. Instead they **share**.',
        },
        {
          type: 'figure',
          svg: FIG.h2_share,
          alt: 'Top: H with one blue dot plus H with one red dot gives H:H, which is also written H–H. Bottom: two red positive nuclei with a pair of blue electrons between them inside a shaded electron cloud; gray arrows show each nucleus attracting the shared pair.',
          caption: 'Each hydrogen brings one electron. The shared pair sits between the nuclei, attracted by **both** of them — that mutual attraction is the bond. A line in a structure stands for one shared pair.',
          maxWidth: 480,
        },
        {
          type: 'definition',
          term: 'Covalent bond',
          text: 'A [[covalent-bond|covalent bond]] is a pair of electrons shared between two atoms. Each shared pair counts toward the outer shell of **both** atoms. Compounds held together by covalent bonds form discrete **molecules** (like $\\ce{H2O}$ or $\\ce{CO2}$), unlike the endless lattice of an ionic solid.',
        },
        {
          type: 'p',
          text: 'Why does sharing hold atoms together? Watch the energy of two hydrogen atoms as you bring them closer. Far apart they ignore each other: zero energy. As they approach, each nucleus starts attracting the other atom\'s electron and the energy drops. Too close, and the two positive nuclei repel, so the energy shoots up. The bond sits at the bottom of the valley.',
        },
        {
          type: 'graph',
          x: [20, 300],
          y: [-500, 500],
          xStep: 40,
          yStep: 100,
          functions: [{ expr: '436((1 - e^(-0.0194(x - 74)))^2 - 1)', label: 'energy of two H atoms (kJ/mol)', color: 'blue' }],
          points: [{ x: 'r', y: '436((1 - e^(-0.0194(r - 74)))^2 - 1)', label: 'you are here', color: 'red' }],
          vlines: [{ x: 74, label: '74 pm', color: 'green' }],
          hlines: [{ y: 0, label: 'separate atoms', color: 'gray' }],
          sliders: [{ name: 'r', min: 40, max: 300, step: 1, value: 200, label: 'distance between nuclei $r$ (pm)' }],
          readouts: [{ label: 'energy (kJ/mol) $\\approx$', expr: '436((1 - e^(-0.0194(r - 74)))^2 - 1)', digits: 0 }],
          caption: 'A model energy curve for $\\ce{H2}$ (horizontal axis in picometres, $1\\ \\text{pm} = 10^{-12}\\ \\text{m}$). Slide $r$ toward the minimum at $74\\ \\text{pm}$, the **bond length**. The depth of the valley, $436\\ \\text{kJ/mol}$, is the **bond energy**: what it costs to pull the atoms apart again.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why sharing lowers the energy',
          text: 'An electron between two nuclei is attracted by two positive charges instead of one, so it is held more tightly — lower energy — than in either separate atom. The nuclei, in turn, are both pulled toward the electron pair between them, which pulls them toward each other. It is the same electrostatic attraction as in an ionic bond, just with the electrons in the middle instead of on one side.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'On the energy curve for $\\ce{H2}$, the energy rises steeply when the nuclei are pushed closer than $74\\ \\text{pm}$. Why?',
      options: [
        { text: 'The two positively charged nuclei repel each other more and more strongly', correct: true, why: 'At very short range nucleus–nucleus repulsion (and electron–electron repulsion) outweighs the attraction to the shared pair, so the energy climbs.' },
        { text: 'The shared electrons leave the molecule', why: 'Nothing is removed; the electrons stay. The rise comes from repulsion between like charges.' },
        { text: 'The bond becomes a double bond', why: 'Hydrogen has only one electron to share, so it can form only a single bond, at any distance.' },
        { text: 'Gravity between the atoms becomes stronger', why: 'Gravity between atoms is utterly negligible — about $10^{36}$ times weaker than the electrostatic forces involved.' },
      ],
      explanation: 'A bond length is a balance point: attraction of both nuclei to the shared electrons pulls the atoms together, and repulsion between the nuclei pushes them apart. At $74\\ \\text{pm}$ the two balance and the energy is lowest. Closer than that, repulsion wins.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Lewis symbols, bonding pairs and lone pairs',
      blocks: [
        {
          type: 'p',
          text: 'Gilbert N. Lewis drew atoms as their symbol surrounded by dots, one per valence electron. Dots go on the four sides, one at a time before pairing up. The unpaired dots are the electrons available to share, so they tell you how many bonds an atom usually forms.',
        },
        {
          type: 'figure',
          svg: FIG.lewis_symbols,
          alt: 'Lewis symbols: H with 1 dot (1 bond), C with 4 single dots (4 bonds), N with one pair and 3 single dots (3 bonds), O with two pairs and 2 single dots (2 bonds), F with three pairs and 1 single dot (1 bond).',
          caption: 'Each unpaired electron can pair with an electron from another atom to form one bond. A handy memory aid for the usual bond counts of H, O, N, C is **HONC 1-2-3-4**.',
        },
        {
          type: 'p',
          text: 'In a [[lewis-structure|Lewis structure]] of a molecule, every valence electron appears either as part of a bond or as a **[[lone-pair|lone pair]]** — a pair that belongs to one atom only and is not shared. To check the octet of an atom, count every electron touching it: both electrons of each bond it is in, plus its own lone pairs.',
        },
        {
          type: 'figure',
          svg: FIG.f2_octets,
          alt: 'F2: two F atoms joined by a single bond; each F has three lone pairs. A blue dashed loop encloses the left F, its lone pairs and the bond; an orange loop encloses the right F, its lone pairs and the bond. Both loops contain 8 electrons.',
          caption: 'In $\\ce{F2}$ each fluorine has 3 lone pairs (6 electrons) plus the shared pair (2 electrons) = 8. The shared pair is counted in both circles — that is the whole point of sharing.',
          maxWidth: 380,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two different counts',
          text: '**Total electrons drawn** counts each electron once: $\\ce{F2}$ has $2 \\times 7 = 14$ (one bonding pair + 6 lone pairs). **Electrons around an atom** (the octet check) counts a shared pair for both atoms. Mixing them up is the most common source of wrong Lewis structures.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Chlorine gas, $\\ce{Cl2}$, has the same kind of Lewis structure as $\\ce{F2}$. How many **lone pairs** does the whole molecule have?',
      hint: 'Total valence electrons $= 2 \\times 7$. Two of them form the bond.',
      label: 'lone pairs $=$',
      answer: '6',
      explanation: 'Each Cl has 7 valence electrons, so the molecule has 14. The single bond uses 2, leaving 12 electrons = 6 lone pairs, three on each chlorine. Octet check: each Cl has $6 + 2 = 8$ ✓.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Single, double and triple bonds',
      blocks: [
        {
          type: 'p',
          text: 'Two atoms can share more than one pair. A [[double-bond|double bond]] shares two pairs (4 electrons, drawn $=$) and a triple bond shares three pairs (6 electrons, drawn $\\equiv$). The number of shared pairs is called the **bond order**.',
        },
        {
          type: 'figure',
          svg: FIG.ethane_ethene_ethyne,
          alt: 'Three hydrocarbons. Ethane C2H6: two carbons joined by a single bond, each with three H. Ethene C2H4: C=C double bond, each carbon with two H. Ethyne C2H2: H–C≡C–H with a triple bond.',
          caption: 'Each carbon has 8 electrons around it in all three molecules: 4 bonds in ethane, 2 + 2 + 4 in ethene, 2 + 6 in ethyne.',
        },
        {
          type: 'table',
          headers: ['Bond', 'Shared electrons', 'Average length', 'Average bond energy'],
          rows: [
            ['$\\ce{C-C}$', '2', '$154\\ \\text{pm}$', '$347\\ \\text{kJ/mol}$'],
            ['$\\ce{C=C}$', '4', '$134\\ \\text{pm}$', '$614\\ \\text{kJ/mol}$'],
            ['$\\ce{C#C}$', '6', '$120\\ \\text{pm}$', '$839\\ \\text{kJ/mol}$'],
            ['$\\ce{N#N}$ (in $\\ce{N2}$)', '6', '$110\\ \\text{pm}$', '$945\\ \\text{kJ/mol}$'],
          ],
          caption: 'More shared pairs → shorter and stronger bonds.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why more pairs means shorter and stronger',
          text: 'More electron density between the nuclei means a stronger pull drawing both nuclei in, so the balance point (the bottom of the energy valley) moves closer and gets deeper. Notice, though, that a double bond is *not* twice as strong as a single bond ($614 < 2 \\times 347$): the second and third pairs sit in less favorable regions beside the bond axis. General Chemistry explains this with sigma and pi bonds.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The strength of $\\ce{N2}$',
          text: 'The $\\ce{N#N}$ triple bond is one of the strongest bonds in chemistry. That is why the nitrogen that makes up 78% of air is so unreactive — and why reactions that *produce* $\\ce{N2}$ release so much energy and gas so fast. A car airbag inflates in about 30 milliseconds this way.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'In $\\ce{F2}$ the atoms share one pair, in $\\ce{O2}$ two pairs, and in $\\ce{N2}$ three pairs. Which molecule has the **shortest** bond?',
      options: [
        { text: '$\\ce{F2}$', why: 'A single bond is the longest of the three (about $142\\ \\text{pm}$).' },
        { text: '$\\ce{O2}$', why: 'A double bond (about $121\\ \\text{pm}$) is shorter than a single bond but longer than a triple bond.' },
        { text: '$\\ce{N2}$', correct: true, why: 'Three shared pairs pull the nuclei closest together: about $110\\ \\text{pm}$.' },
        { text: 'All three are the same length, since all are diatomic', why: 'Bond length depends on how many pairs are shared (and the atoms\' sizes), not on how many atoms are in the molecule.' },
      ],
      explanation: 'Bond order goes 1 → 2 → 3 from $\\ce{F2}$ to $\\ce{O2}$ to $\\ce{N2}$, and bond length shrinks with each extra shared pair while bond energy grows ($\\ce{F2}$ about $159$, $\\ce{O2}$ about $498$, $\\ce{N2}$ about $945\\ \\text{kJ/mol}$).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Drawing Lewis structures: the method',
      blocks: [
        {
          type: 'p',
          text: 'For bigger molecules, guessing where dots go is slow and error-prone. This procedure works for nearly every molecule and ion you will meet in this course. Treat it like an algorithm: run every step, in order, every time.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Count valence electrons', text: 'Add the valence electrons of all atoms. For an anion **add** one electron per negative charge; for a cation **subtract** one per positive charge.' },
            { title: 'Sketch the skeleton', text: 'The least electronegative atom goes in the center (often the one written first; carbon is almost always central). Hydrogen is **never** central — it forms only one bond. Halogens are usually on the outside.' },
            { title: 'Connect with single bonds', text: 'Join each outer atom to the central atom with one bond. Subtract 2 electrons per bond.' },
            { title: 'Complete the outer atoms', text: 'Give each outer atom lone pairs until it has 8 electrons (hydrogen needs only its 2, so it gets none).' },
            { title: 'Leftovers go on the center', text: 'Place any remaining electrons on the central atom as lone pairs.' },
            { title: 'Fix the center with multiple bonds', text: 'If the central atom has fewer than 8, turn a lone pair on a neighboring outer atom into a shared pair (a double bond). Repeat if needed.' },
            { title: 'Check', text: 'Electrons drawn = the count from step 1, and every atom has an octet (H: 2).' },
          ],
        },
        {
          type: 'derivation',
          title: 'Lewis structure of water, $\\ce{H2O}$',
          steps: [
            { tex: '2(1) + 6 = 8\\ \\text{valence electrons}', why: 'Hydrogen (group 1) has 1; oxygen (group 16) has 6.' },
            { tex: '\\ce{H-O-H}', why: 'H cannot be central, so O goes in the middle.' },
            { tex: '8 - 2(2) = 4\\ \\text{left}', why: 'Two single bonds use 4 electrons.' },
            { tex: '\\text{H: } 2 \\text{ each} \\checkmark', why: 'Each hydrogen already has its 2 electrons from the bond, so it gets no lone pairs.' },
            { tex: '\\text{O: } 4 \\text{ electrons} \\to 2 \\text{ lone pairs}', why: 'The 4 leftover electrons go on the central oxygen.' },
            { tex: '\\text{O: } 2(2) + 2(2) = 8 \\checkmark', why: 'Oxygen has two bonding pairs and two lone pairs: an octet.' },
            { tex: '\\text{drawn: } 4 + 4 = 8 \\checkmark', why: 'Electrons in bonds (4) plus electrons in lone pairs (4) match the count from step 1. Nothing lost, nothing invented.' },
          ],
          result: 'Water has two O–H bonds and two lone pairs on oxygen. Those lone pairs will bend the molecule in the next lesson.',
        },
        {
          type: 'figure',
          svg: FIG.h2o,
          alt: 'Lewis structure of water: O in the center with two lone pairs above it and single bonds down to two H atoms.',
          maxWidth: 300,
        },
        {
          type: 'p',
          text: 'Ammonia and methane follow the same recipe. $\\ce{NH3}$: $5 + 3 = 8$ electrons, three N–H bonds use 6, and the last 2 become a lone pair on nitrogen. $\\ce{CH4}$: $4 + 4 = 8$ electrons, all used by four C–H bonds.',
        },
        {
          type: 'figure',
          svg: FIG.nh3_ch4,
          alt: 'Lewis structures: NH3 with N bonded to three H atoms and one lone pair on N; CH4 with C bonded to four H atoms and no lone pairs.',
          caption: 'Same 8 electrons, different arrangements: nitrogen keeps one pair to itself; carbon shares all four.',
          maxWidth: 440,
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Put the steps for drawing a Lewis structure in order.',
      lines: [
        'Count the total valence electrons (adjust for any charge)',
        'Arrange the skeleton with the least electronegative atom (not H) in the center',
        'Connect each outer atom to the center with a single bond',
        'Complete the octets of the outer atoms with lone pairs',
        'Put leftover electrons on the central atom',
        'Form multiple bonds if the central atom still lacks an octet',
      ],
      distractors: ['Give every atom, including hydrogen, four lone pairs'],
      explanation: 'Counting comes first because every later step spends from that budget. Outer atoms are completed before the center because the center is the atom most likely to need multiple bonds — and multiple bonds are the last resort, made by borrowing lone pairs from outer atoms. Hydrogen never gets lone pairs: its single bond already fills its shell of 2.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'When the method calls for multiple bonds: $\\ce{CO2}$, $\\ce{N2}$, $\\ce{HCN}$',
      blocks: [
        {
          type: 'p',
          text: 'Step 6 is where most of the interesting chemistry hides. Carbon dioxide — what you exhale and what every combustion engine produces — shows it clearly.',
        },
        {
          type: 'derivation',
          title: 'Lewis structure of $\\ce{CO2}$',
          steps: [
            { tex: '4 + 2(6) = 16\\ \\text{valence electrons}', why: 'Carbon (group 14) has 4; each oxygen has 6.' },
            { tex: '\\ce{O-C-O}', why: 'Carbon is less electronegative than oxygen, so it is central.' },
            { tex: '16 - 2(2) = 12\\ \\text{left}', why: 'Two single bonds use 4 electrons.' },
            { tex: '12 - 2(6) = 0\\ \\text{left}', why: 'Each oxygen gets 3 lone pairs (6 electrons) to reach 8. That uses everything.' },
            { tex: '\\text{C: } 2 + 2 = 4 \\text{ electrons} \\;\\times', why: 'Carbon touches only two bonding pairs — it is 4 short of an octet, and no electrons remain.' },
            { tex: '\\ce{O=C=O}', why: 'Turn one lone pair on **each** oxygen into a shared pair. Now C has $4 + 4 = 8$, each O has $4 + 4 = 8$, and the total is still 16.' },
          ],
          result: 'Carbon dioxide is $\\ce{O=C=O}$, with two lone pairs on each oxygen.',
        },
        {
          type: 'figure',
          svg: FIG.co2_steps,
          alt: 'Top: O–C–O with three lone pairs on each O; one lone pair on each O is orange; note says C has only 4 electrons. An orange arrow labeled share one orange pair from each O points down to O=C=O with two lone pairs on each O, and a check that every atom has 8.',
          caption: 'Moving electrons never changes the total — it only changes whether a pair is shared. That is why step 6 cannot break your electron count.',
        },
        {
          type: 'p',
          text: 'The same move makes triple bonds. **$\\ce{N2}$** has 10 electrons; after one N–N bond, 8 remain, which cannot give both atoms an octet. Sharing two more pairs gives $\\ce{N#N}$ with one lone pair on each N. **$\\ce{HCN}$** (hydrogen cyanide) has $1 + 4 + 5 = 10$: H–C–N uses 4, the other 6 go on N as lone pairs, carbon has only 4, so two of nitrogen\'s pairs become shared: $\\ce{H-C#N}$ with one lone pair on N.',
        },
        {
          type: 'figure',
          svg: FIG.n2_hcn,
          alt: 'N2 drawn as N triple-bonded to N with one lone pair on the outer side of each N. HCN drawn as H–C triple-bonded to N with one lone pair on N.',
          caption: 'Both have 10 valence electrons and a triple bond. Check: $\\ce{HCN}$ carbon has $2 + 6 = 8$, nitrogen $6 + 2 = 8$.',
          maxWidth: 460,
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Which pair to share?',
          text: 'Borrow lone pairs from an outer atom bonded to the electron-poor central atom — never from hydrogen (it has none) and usually not from halogens. If two outer atoms are equivalent, sharing from either gives the same molecule (or, as you will see next, a set of resonance structures).',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Formaldehyde, $\\ce{CH2O}$, is used to preserve biological specimens. How many valence electrons does its Lewis structure contain in total?',
      hint: 'C is in group 14, O in group 16, and there are two H atoms.',
      label: 'valence electrons $=$',
      answer: '12',
      explanation: '$4 + 2(1) + 6 = 12$. Finishing the method: carbon is central with bonds to both H and to O (6 electrons used); 6 more go on O as lone pairs; carbon then has only 6, so one oxygen lone pair becomes a second C–O bond. Result: $\\ce{H2C=O}$ with two lone pairs on oxygen.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Polyatomic ions and resonance',
      blocks: [
        {
          type: 'p',
          text: 'The polyatomic ions from the last lesson are covalently bonded inside; only the group as a whole carries a charge. The method handles them with one change in step 1, and the finished structure goes in square brackets with the charge outside.',
        },
        {
          type: 'figure',
          svg: FIG.nh4,
          alt: 'Ammonium ion: N in the center single-bonded to four H atoms, no lone pairs, enclosed in square brackets with a plus sign at the upper right.',
          caption: '$\\ce{NH4+}$: $5 + 4(1) - 1 = 8$ electrons, exactly enough for four N–H bonds. The positive charge means one electron fewer than the neutral atoms bring.',
          maxWidth: 240,
        },
        {
          type: 'derivation',
          title: 'Lewis structure of the carbonate ion, $\\ce{CO3^2-}$',
          steps: [
            { tex: '4 + 3(6) + 2 = 24\\ \\text{electrons}', why: 'Carbon 4, each oxygen 6, plus 2 extra electrons for the $2-$ charge.' },
            { tex: '24 - 3(2) = 18\\ \\text{left}', why: 'Carbon in the center with single bonds to three oxygens uses 6.' },
            { tex: '18 - 3(6) = 0\\ \\text{left}', why: 'Each oxygen gets 3 lone pairs.' },
            { tex: '\\text{C: } 3(2) = 6 \\;\\times \\implies \\text{one C=O double bond}', why: 'Carbon is 2 short, so one oxygen shares one of its lone pairs.' },
          ],
          result: 'One double bond and two single bonds — but *which* oxygen gets the double bond?',
        },
        {
          type: 'p',
          text: 'Any of the three oxygens could. All three drawings are equally valid, so we draw all of them joined by double-headed arrows. These are [[chem-resonance|resonance structures]].',
        },
        {
          type: 'figure',
          svg: FIG.co3_resonance,
          alt: 'Three bracketed carbonate structures, each with charge 2-, joined by double-headed arrows. In each, C is bonded to three O atoms; the double bond goes to the top O in the first, the lower-left O in the second and the lower-right O in the third. Double-bonded O has two lone pairs, single-bonded O atoms have three.',
          caption: 'The three resonance structures of carbonate. Each contains 24 electrons and gives every atom an octet.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Resonance does not mean flipping',
          text: 'The real carbonate ion is not switching between the three pictures. Experiments show all three C–O bonds are identical, about $129\\ \\text{pm}$ — between a C–O single bond (about $143\\ \\text{pm}$) and a C=O double bond (about $122\\ \\text{pm}$). The extra electron pair is spread over all three bonds, so each is "one and a third" bonds. Lewis structures, which put every pair in one place, simply cannot draw that with a single picture. Ozone, $\\ce{O3}$, is another classic case: two resonance structures, two identical O–O bonds.',
        },
        {
          type: 'deepdive',
          title: 'Where does the charge sit? Formal charge',
          blocks: [
            {
              type: 'p',
              text: 'A bookkeeping tool assigns each atom a **formal charge**: its valence electrons, minus its lone-pair electrons, minus half its bonding electrons.',
            },
            { type: 'math', tex: '\\text{FC} = V - L - \\tfrac{1}{2}B' },
            {
              type: 'p',
              text: 'In carbonate: the double-bonded O has $6 - 4 - 2 = 0$; each single-bonded O has $6 - 6 - 1 = -1$; carbon has $4 - 0 - 4 = 0$. The sum, $-2$, is the ion\'s charge. Formal charge is used in General Chemistry to choose the best of several possible Lewis structures.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student draws the ammonium ion, $\\ce{NH4+}$. Tap the first line that is wrong.',
      lines: [
        'Nitrogen has 5 valence electrons and the four H atoms have 4: $5 + 4 = 9$.',
        'The charge is $1+$, so add one electron: $9 + 1 = 10$.',
        'Four N–H single bonds use $4 \\times 2 = 8$ electrons.',
        'The remaining 2 electrons form a lone pair on nitrogen.',
      ],
      errorLines: [2],
      explanation: 'A positive charge means the ion has **lost** an electron, so you subtract: $9 - 1 = 8$. All 8 electrons are used by the four N–H bonds, and nitrogen has no lone pair (it would otherwise have 10 electrons around it, breaking the octet). Rule: add electrons for negative charges, subtract for positive.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'How many valence electrons are in the Lewis structure of the nitrate ion, $\\ce{NO3-}$?',
      hint: 'N is in group 15 and O in group 16. Then account for the charge.',
      label: 'electrons $=$',
      answer: '24',
      explanation: '$5 + 3(6) + 1 = 24$: the $1-$ charge adds one electron. Like carbonate (also 24 electrons, three O around a central atom), nitrate ends up with one N=O double bond and two N–O single bonds, so it too has three resonance structures.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'When the octet rule bends',
      blocks: [
        {
          type: 'p',
          text: 'The octet rule is a guide, not a law. Three kinds of molecules break it, and each break has a reason.',
        },
        {
          type: 'figure',
          svg: FIG.bf3,
          alt: 'BF3: boron in the center single-bonded to three fluorine atoms, each F with three lone pairs; B has no lone pairs. Note: B has only 6 electrons, yet stable.',
          caption: 'Boron trifluoride: 24 electrons, every fluorine has an octet, boron has only 6.',
          maxWidth: 340,
        },
        {
          type: 'list',
          items: [
            '**Too few electrons.** Boron (3 valence electrons) and beryllium (2) often end up with 6 and 4. In $\\ce{BF3}$ the method would suggest a B=F double bond, but fluorine is so electronegative that it does not share its lone pairs readily. The evidence: $\\ce{BF3}$ eagerly grabs a lone pair from another molecule, as in $\\ce{BF3 + NH3 -> F3B-NH3}$, exactly what an electron-short atom should do.',
            '**An odd number of electrons.** Nitrogen monoxide, $\\ce{NO}$, has $5 + 6 = 11$ valence electrons. An odd total cannot be split into pairs, so one atom must be short. Such molecules (called radicals) tend to be very reactive.',
            '**Too many electrons: expanded octets.** Atoms in period 3 and below are larger and can hold more than eight electrons around them. In $\\ce{PCl5}$ phosphorus has 10, and in $\\ce{SF6}$ (a gas used to insulate high-voltage switchgear) sulfur has 12. Period-2 atoms — C, N, O, F — never exceed 8, so an [[chem-expanded-octet|expanded octet]] is only possible from period 3 down.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What instructors check',
          text: 'In this course, expect structures that obey the octet rule plus the $\\ce{BF3}$ type of exception. The checks graders apply are the same ones you should: the right total electron count, H with exactly 2, C/N/O/F with never more than 8, and brackets plus charge on every ion.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'Every atom in a stable molecule must end up with exactly eight electrons around it.',
      answer: false,
      explanation: 'Hydrogen is complete with 2. Boron in $\\ce{BF3}$ is stable with 6. Molecules with an odd number of electrons, like $\\ce{NO}$, cannot give every atom an octet. And period-3 atoms can exceed eight ($\\ce{SF6}$: 12 around sulfur). The octet rule is reliable for C, N, O and F, which is why it works so well for most molecules you meet.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Naming binary molecular compounds',
      blocks: [
        {
          type: 'p',
          text: 'In ionic compounds the charges fix the ratio, so names need no numbers. Two nonmetals, though, can combine in several ratios — carbon and oxygen form both $\\ce{CO}$ and $\\ce{CO2}$ — so the name must say how many of each atom there are. Greek prefixes do that job.',
        },
        {
          type: 'table',
          headers: ['Number', 'Prefix', 'Number', 'Prefix'],
          rows: [
            ['1', 'mono-', '6', 'hexa-'],
            ['2', 'di-', '7', 'hepta-'],
            ['3', 'tri-', '8', 'octa-'],
            ['4', 'tetra-', '9', 'nona-'],
            ['5', 'penta-', '10', 'deca-'],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Name the first element (the one farther left on the periodic table) with a prefix — but drop **mono-** for the first element.',
            'Name the second element with a prefix (always, including mono-) and the ending **-ide**.',
            'Drop the final *a* or *o* of a prefix before "oxide": monoxide, pentoxide (not monooxide, pentaoxide).',
          ],
        },
        {
          type: 'table',
          headers: ['Formula', 'Name'],
          rows: [
            ['$\\ce{CO}$', 'carbon monoxide'],
            ['$\\ce{CO2}$', 'carbon dioxide'],
            ['$\\ce{N2O}$', 'dinitrogen monoxide ("nitrous oxide")'],
            ['$\\ce{N2O4}$', 'dinitrogen tetroxide'],
            ['$\\ce{CCl4}$', 'carbon tetrachloride'],
            ['$\\ce{SF6}$', 'sulfur hexafluoride'],
            ['$\\ce{P4O10}$', 'tetraphosphorus decoxide'],
          ],
        },
        {
          type: 'derivation',
          title: 'Name $\\ce{N2O5}$',
          steps: [
            { tex: '\\ce{N}: 2 \\to \\text{dinitrogen}', why: 'Two nitrogen atoms: prefix di-. Nitrogen and oxygen are both nonmetals, so this is a molecular compound and prefixes apply.' },
            { tex: '\\ce{O}: 5 \\to \\text{penta} + \\text{oxide}', why: 'Five oxygen atoms: penta-, and the second element takes -ide.' },
            { tex: '\\text{dinitrogen pentoxide}', why: 'Drop the *a* of penta- before the vowel of oxide.' },
          ],
          result: '$\\ce{N2O5}$ is dinitrogen pentoxide.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Prefixes are for nonmetal + nonmetal only',
          text: 'If the first element is a metal, the compound is ionic and gets **no** prefixes: $\\ce{CaCl2}$ is calcium chloride, $\\ce{Al2O3}$ is aluminum oxide. Using "calcium dichloride" is the classic way to mix up the two systems.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why the prefix matters: CO vs CO₂',
          text: 'One oxygen atom separates a harmless gas from a deadly one. Carbon monoxide, from incomplete combustion in engines, generators and heaters, binds to hemoglobin far more tightly than oxygen does. It is the reason vehicles and space heaters are never run in a closed tent, garage or shelter without ventilation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'fill',
      prompt: 'Complete the names and formulas of these molecular compounds.',
      template: '$\\ce{P2O5}$ is ___, and sulfur trioxide has the formula ___.',
      blanks: [{ answers: ['diphosphorus pentoxide'] }, { answers: ['$\\ce{SO3}$'] }],
      wordBank: ['diphosphorus pentoxide', 'phosphorus oxide', 'diphosphorus pentaoxide', 'phosphorus(V) oxide', '$\\ce{SO3}$', '$\\ce{S3O}$', '$\\ce{SO3^2-}$'],
      explanation: 'Two P atoms → diphosphorus; five O atoms → pentoxide (the *a* is dropped before "oxide"). "Phosphorus(V) oxide" uses the ionic Roman-numeral system, which is not used for two nonmetals in this course. Sulfur trioxide means one S (no mono- on the first element) and three O: $\\ce{SO3}$, a neutral molecule — not the sulfite ion $\\ce{SO3^2-}$.',
    },
  ],
  takeaways: [
    'A covalent bond is a shared electron pair attracted by both nuclei; the bond length sits at the minimum of the energy-versus-distance curve, and the depth of that minimum is the bond energy.',
    'In a Lewis structure every valence electron is in a bond or a lone pair; a shared pair counts toward the octet of both atoms (H needs only 2).',
    'Double and triple bonds share 2 and 3 pairs; higher bond order means shorter, stronger bonds.',
    'Method: count valence electrons (± charge), skeleton, single bonds, complete outer atoms, leftovers to the center, then multiple bonds if the center is short — and check the totals.',
    'Resonance structures are alternative drawings of one real particle whose electrons are spread out (carbonate, nitrate, ozone); B, odd-electron molecules and period-3 atoms can break the octet rule.',
    'Binary molecular compounds use prefixes (mono-, di-, tri-, …) — never for ionic compounds.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 7: Chemical Bonding and Molecular Geometry',
      url: 'https://openstax.org/books/chemistry-2e/pages/7-introduction',
      source: 'openstax',
      note: 'Sections 7.2 to 7.5 cover covalent bonding, Lewis structures, formal charge, resonance and bond strengths with many more examples.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search for "Lewis structures" for extra worked examples, including expanded octets.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'Video walk-throughs of drawing Lewis structures and resonance.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Try the "Build a Molecule" and "Molecule Shapes" simulations to assemble molecules from atoms.',
    },
  ],
};
