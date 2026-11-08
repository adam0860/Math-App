import type { Lesson } from '../../types';

// Figures (graph drawings generated with the graph kit; theme-aware SVG).
const FIG: Record<string, string> = {
  "bip": `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><line x1="164.3" y1="37.2" x2="225.7" y2="67.8" stroke="currentColor" stroke-width="1.6"/><line x1="240.0" y1="91.0" x2="240.0" y2="134.0" stroke="currentColor" stroke-width="1.6"/><line x1="225.7" y1="157.2" x2="164.3" y2="187.8" stroke="currentColor" stroke-width="1.6"/><line x1="135.7" y1="187.8" x2="74.3" y2="157.2" stroke="currentColor" stroke-width="1.6"/><line x1="60.0" y1="134.0" x2="60.0" y2="91.0" stroke="currentColor" stroke-width="1.6"/><line x1="74.3" y1="67.8" x2="135.7" y2="37.2" stroke="currentColor" stroke-width="1.6"/><line x1="150.0" y1="46.0" x2="150.0" y2="179.0" stroke="currentColor" stroke-width="1.6"/><circle cx="150" cy="30" r="16" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="35" text-anchor="middle" font-size="14">1</text><circle cx="240" cy="75" r="16" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="240" y="80" text-anchor="middle" font-size="14">2</text><circle cx="240" cy="150" r="16" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="240" y="155" text-anchor="middle" font-size="14">3</text><circle cx="150" cy="195" r="16" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="200" text-anchor="middle" font-size="14">4</text><circle cx="60" cy="150" r="16" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="155" text-anchor="middle" font-size="14">5</text><circle cx="60" cy="75" r="16" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="80" text-anchor="middle" font-size="14">6</text></svg>`,
  "degrees": `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg"><line x1="62.0" y1="115.0" x2="128.0" y2="115.0" stroke="currentColor" stroke-width="1.6"/><line x1="159.8" y1="106.6" x2="245.2" y2="58.4" stroke="currentColor" stroke-width="1.6"/><line x1="159.8" y1="123.4" x2="245.2" y2="171.6" stroke="currentColor" stroke-width="1.6"/><line x1="260.0" y1="67.0" x2="260.0" y2="163.0" stroke="currentColor" stroke-width="1.6"/><line x1="277.0" y1="180.0" x2="368.0" y2="180.0" stroke="currentColor" stroke-width="1.6"/><line x1="277.0" y1="50.0" x2="368.0" y2="50.0" stroke="currentColor" stroke-width="1.6"/><line x1="385.0" y1="163.0" x2="385.0" y2="67.0" stroke="currentColor" stroke-width="1.6"/><circle cx="45" cy="115" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="45" y="120" text-anchor="middle" font-size="14">S</text><text x="45" y="147" text-anchor="middle" font-size="12" class="t-gray">deg 1</text><circle cx="145" cy="115" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="145" y="120" text-anchor="middle" font-size="14">H</text><text x="145" y="147" text-anchor="middle" font-size="12" class="t-gray">deg 3</text><circle cx="260" cy="50" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="260" y="55" text-anchor="middle" font-size="14">A</text><text x="260" y="26" text-anchor="middle" font-size="12" class="t-gray">deg 3</text><circle cx="260" cy="180" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="260" y="185" text-anchor="middle" font-size="14">L</text><text x="260" y="212" text-anchor="middle" font-size="12" class="t-gray">deg 3</text><circle cx="385" cy="50" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="385" y="55" text-anchor="middle" font-size="14">B</text><text x="385" y="26" text-anchor="middle" font-size="12" class="t-gray">deg 2</text><circle cx="385" cy="180" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="385" y="185" text-anchor="middle" font-size="14">V</text><text x="385" y="212" text-anchor="middle" font-size="12" class="t-gray">deg 2</text></svg>`,
  "iso": `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg"><line x1="122.1" y1="43.8" x2="159.7" y2="71.1" stroke="currentColor" stroke-width="1.6"/><line x1="374.6" y1="49.3" x2="403.6" y2="138.3" stroke="currentColor" stroke-width="1.8" class="s-purple"/><line x1="167.2" y1="94.2" x2="152.8" y2="138.3" stroke="currentColor" stroke-width="1.6"/><line x1="419.7" y1="88.7" x2="343.9" y2="143.8" stroke="currentColor" stroke-width="1.8" class="s-purple"/><line x1="133.2" y1="152.6" x2="86.8" y2="152.6" stroke="currentColor" stroke-width="1.6"/><line x1="396.1" y1="143.8" x2="320.3" y2="88.7" stroke="currentColor" stroke-width="1.8" class="s-purple"/><line x1="67.2" y1="138.3" x2="52.8" y2="94.2" stroke="currentColor" stroke-width="1.6"/><line x1="336.4" y1="138.3" x2="365.4" y2="49.3" stroke="currentColor" stroke-width="1.8" class="s-purple"/><line x1="60.3" y1="71.1" x2="97.9" y2="43.8" stroke="currentColor" stroke-width="1.6"/><line x1="323.2" y1="79.9" x2="416.8" y2="79.9" stroke="currentColor" stroke-width="1.8" class="s-purple"/><circle cx="110" cy="35" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="110" y="40" text-anchor="middle" font-size="14">a</text><circle cx="370" cy="35" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="370" y="40" text-anchor="middle" font-size="14" class="t-purple">1</text><circle cx="171.8" cy="79.9" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="171.8" y="84.9" text-anchor="middle" font-size="14">b</text><circle cx="431.8" cy="79.9" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="431.8" y="84.9" text-anchor="middle" font-size="14" class="t-purple">2</text><circle cx="148.2" cy="152.6" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="148.2" y="157.6" text-anchor="middle" font-size="14">c</text><circle cx="408.2" cy="152.6" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="408.2" y="157.6" text-anchor="middle" font-size="14" class="t-purple">3</text><circle cx="71.8" cy="152.6" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="71.8" y="157.6" text-anchor="middle" font-size="14">d</text><circle cx="331.8" cy="152.6" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="331.8" y="157.6" text-anchor="middle" font-size="14" class="t-purple">4</text><circle cx="48.2" cy="79.9" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="48.2" y="84.9" text-anchor="middle" font-size="14">e</text><circle cx="308.2" cy="79.9" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="308.2" y="84.9" text-anchor="middle" font-size="14" class="t-purple">5</text><text x="110" y="195" text-anchor="middle" font-size="13">G: a pentagon</text><text x="370" y="195" text-anchor="middle" font-size="13">H: a pentagram</text></svg>`,
  "kinds": `<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg"><line x1="43.0" y1="40.0" x2="87.0" y2="40.0" stroke="currentColor" stroke-width="1.6"/><line x1="30.0" y1="53.0" x2="30.0" y2="97.0" stroke="currentColor" stroke-width="1.6"/><line x1="100.0" y1="53.0" x2="100.0" y2="97.0" stroke="currentColor" stroke-width="1.6"/><line x1="43.0" y1="110.0" x2="87.0" y2="110.0" stroke="currentColor" stroke-width="1.6"/><line x1="90.8" y1="49.2" x2="39.2" y2="100.8" stroke="currentColor" stroke-width="1.6"/><path d="M172.3,44.2 Q195.0,52.0 217.7,44.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M172.3,35.8 Q195.0,28.0 217.7,35.8" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="165.8" y1="51.6" x2="189.2" y2="98.4" stroke="currentColor" stroke-width="1.6"/><line x1="224.2" y1="51.6" x2="200.8" y2="98.4" stroke="currentColor" stroke-width="1.6"/><path d="M208.0,117.2 C242.0,131.2 242.0,88.8 208.0,102.8" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="303.0" y1="40.0" x2="347.0" y2="40.0" stroke="currentColor" stroke-width="1.6"/><path d="M347.0,40.0 L338.9,43.8 L338.9,36.2 Z" fill="currentColor"/><line x1="360.0" y1="53.0" x2="360.0" y2="97.0" stroke="currentColor" stroke-width="1.6"/><path d="M360.0,97.0 L356.2,88.9 L363.8,88.9 Z" fill="currentColor"/><line x1="347.0" y1="110.0" x2="303.0" y2="110.0" stroke="currentColor" stroke-width="1.6"/><path d="M303.0,110.0 L311.1,106.2 L311.1,113.8 Z" fill="currentColor"/><line x1="290.0" y1="97.0" x2="290.0" y2="53.0" stroke="currentColor" stroke-width="1.6"/><path d="M290.0,53.0 L293.8,61.1 L286.2,61.1 Z" fill="currentColor"/><line x1="299.2" y1="49.2" x2="350.8" y2="100.8" stroke="currentColor" stroke-width="1.6"/><path d="M350.8,100.8 L342.3,97.8 L347.8,92.3 Z" fill="currentColor"/><line x1="433.0" y1="40.0" x2="477.0" y2="40.0" stroke="currentColor" stroke-width="1.6"/><line x1="420.0" y1="53.0" x2="420.0" y2="97.0" stroke="currentColor" stroke-width="1.6"/><line x1="490.0" y1="53.0" x2="490.0" y2="97.0" stroke="currentColor" stroke-width="1.6"/><line x1="433.0" y1="110.0" x2="477.0" y2="110.0" stroke="currentColor" stroke-width="1.6"/><line x1="429.2" y1="49.2" x2="480.8" y2="100.8" stroke="currentColor" stroke-width="1.6"/><circle cx="30" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="30" cy="110" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="110" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="230" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="195" cy="110" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="290" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="360" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="290" cy="110" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="360" cy="110" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="420" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="490" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="420" cy="110" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="490" cy="110" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="455.0" y="34.5" text-anchor="middle" font-size="13">4</text><text x="409.0" y="79.5" text-anchor="middle" font-size="13">7</text><text x="500.0" y="79.5" text-anchor="middle" font-size="13">2</text><text x="455.0" y="126.5" text-anchor="middle" font-size="13">5</text><text x="448.6" y="85.9" text-anchor="middle" font-size="13">3</text><text x="65" y="160" text-anchor="middle" font-size="13">simple</text><text x="195" y="160" text-anchor="middle" font-size="13">multigraph + loop</text><text x="325" y="160" text-anchor="middle" font-size="13">directed</text><text x="455" y="160" text-anchor="middle" font-size="13">weighted</text></svg>`,
  "level": `<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg"><line x1="80.0" y1="110.0" x2="113.0" y2="110.0" stroke="currentColor" stroke-width="1.6"/><line x1="171.5" y1="95.0" x2="233.5" y2="60.0" stroke="currentColor" stroke-width="1.6"/><line x1="171.5" y1="125.0" x2="233.5" y2="160.0" stroke="currentColor" stroke-width="1.6"/><line x1="260.0" y1="60.0" x2="260.0" y2="160.0" stroke="currentColor" stroke-width="1.6"/><line x1="292.0" y1="175.0" x2="353.0" y2="175.0" stroke="currentColor" stroke-width="1.6"/><line x1="298.0" y1="45.0" x2="353.0" y2="45.0" stroke="currentColor" stroke-width="1.6"/><line x1="385.0" y1="160.0" x2="385.0" y2="60.0" stroke="currentColor" stroke-width="1.6"/><rect x="10" y="95" width="70" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="45" y="115" text-anchor="middle" font-size="14" class="t-green">Spawn</text><rect x="113" y="95" width="64" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="145" y="115" text-anchor="middle" font-size="14">Hall</text><rect x="222" y="30" width="76" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="260" y="50" text-anchor="middle" font-size="14">Armory</text><rect x="228" y="160" width="64" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="260" y="180" text-anchor="middle" font-size="14">Lab</text><rect x="353" y="30" width="64" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="385" y="50" text-anchor="middle" font-size="14" class="t-red">Boss</text><rect x="353" y="160" width="64" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="385" y="180" text-anchor="middle" font-size="14">Vault</text></svg>`,
  "rep": `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><line x1="59.4" y1="90.9" x2="125.6" y2="49.1" stroke="currentColor" stroke-width="1.6"/><line x1="59.4" y1="109.1" x2="125.6" y2="150.9" stroke="currentColor" stroke-width="1.6"/><line x1="140.0" y1="57.0" x2="140.0" y2="143.0" stroke="currentColor" stroke-width="1.6"/><line x1="157.0" y1="40.0" x2="248.0" y2="40.0" stroke="currentColor" stroke-width="1.6"/><line x1="157.0" y1="160.0" x2="248.0" y2="160.0" stroke="currentColor" stroke-width="1.6"/><line x1="265.0" y1="57.0" x2="265.0" y2="143.0" stroke="currentColor" stroke-width="1.6"/><circle cx="45" cy="100" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="45" y="105" text-anchor="middle" font-size="14">0</text><circle cx="140" cy="40" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="140" y="45" text-anchor="middle" font-size="14">1</text><circle cx="140" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="140" y="165" text-anchor="middle" font-size="14">2</text><circle cx="265" cy="40" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="265" y="45" text-anchor="middle" font-size="14">3</text><circle cx="265" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="265" y="165" text-anchor="middle" font-size="14">4</text></svg>`,
  "samedeg": `<svg viewBox="0 0 480 195" xmlns="http://www.w3.org/2000/svg"><line x1="119.5" y1="40.5" x2="152.5" y2="59.5" stroke="currentColor" stroke-width="1.6"/><line x1="162.0" y1="76.0" x2="162.0" y2="114.0" stroke="currentColor" stroke-width="1.6"/><line x1="152.5" y1="130.5" x2="119.5" y2="149.5" stroke="currentColor" stroke-width="1.6"/><line x1="100.5" y1="149.5" x2="67.5" y2="130.5" stroke="currentColor" stroke-width="1.6"/><line x1="58.0" y1="114.0" x2="58.0" y2="76.0" stroke="currentColor" stroke-width="1.6"/><line x1="67.5" y1="59.5" x2="100.5" y2="40.5" stroke="currentColor" stroke-width="1.6"/><line x1="280.9" y1="50.2" x2="249.1" y2="129.8" stroke="currentColor" stroke-width="1.6"/><line x1="256.0" y1="140.0" x2="314.0" y2="140.0" stroke="currentColor" stroke-width="1.6"/><line x1="320.9" y1="129.8" x2="289.1" y2="50.2" stroke="currentColor" stroke-width="1.6"/><line x1="405.9" y1="50.2" x2="374.1" y2="129.8" stroke="currentColor" stroke-width="1.6"/><line x1="381.0" y1="140.0" x2="439.0" y2="140.0" stroke="currentColor" stroke-width="1.6"/><line x1="445.9" y1="129.8" x2="414.1" y2="50.2" stroke="currentColor" stroke-width="1.6"/><circle cx="110" cy="35" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="162" cy="65" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="162" cy="125" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="110" cy="155" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="58" cy="125" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="58" cy="65" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="285" cy="40" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="245" cy="140" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="325" cy="140" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="410" cy="40" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="370" cy="140" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="450" cy="140" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="110" y="185" text-anchor="middle" font-size="13">C₆: connected, one 6-cycle</text><text x="355" y="185" text-anchor="middle" font-size="13">two triangles: disconnected</text></svg>`,
  "special": `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><line x1="93.9" y1="39.5" x2="135.1" y2="69.3" stroke="currentColor" stroke-width="1.6"/><line x1="88.4" y1="43.5" x2="118.0" y2="134.7" stroke="currentColor" stroke-width="1.6"/><line x1="81.6" y1="43.5" x2="52.0" y2="134.7" stroke="currentColor" stroke-width="1.6"/><line x1="76.1" y1="39.5" x2="34.9" y2="69.3" stroke="currentColor" stroke-width="1.6"/><line x1="140.6" y1="86.3" x2="124.8" y2="134.7" stroke="currentColor" stroke-width="1.6"/><line x1="135.1" y1="82.3" x2="57.5" y2="138.7" stroke="currentColor" stroke-width="1.6"/><line x1="133.0" y1="75.8" x2="37.0" y2="75.8" stroke="currentColor" stroke-width="1.6"/><line x1="110.4" y1="145.2" x2="59.6" y2="145.2" stroke="currentColor" stroke-width="1.6"/><line x1="112.5" y1="138.7" x2="34.9" y2="82.3" stroke="currentColor" stroke-width="1.6"/><line x1="45.2" y1="134.7" x2="29.4" y2="86.3" stroke="currentColor" stroke-width="1.6"/><line x1="264.5" y1="38.5" x2="299.2" y2="58.5" stroke="currentColor" stroke-width="1.6"/><line x1="308.7" y1="75.0" x2="308.7" y2="115.0" stroke="currentColor" stroke-width="1.6"/><line x1="299.2" y1="131.5" x2="264.5" y2="151.5" stroke="currentColor" stroke-width="1.6"/><line x1="245.5" y1="151.5" x2="210.8" y2="131.5" stroke="currentColor" stroke-width="1.6"/><line x1="201.3" y1="115.0" x2="201.3" y2="75.0" stroke="currentColor" stroke-width="1.6"/><line x1="210.8" y1="58.5" x2="245.5" y2="38.5" stroke="currentColor" stroke-width="1.6"/><line x1="385.0" y1="51.0" x2="385.0" y2="139.0" stroke="currentColor" stroke-width="1.6"/><line x1="389.6" y1="50.0" x2="430.4" y2="140.0" stroke="currentColor" stroke-width="1.6"/><line x1="392.4" y1="48.1" x2="477.6" y2="141.9" stroke="currentColor" stroke-width="1.6"/><line x1="430.4" y1="50.0" x2="389.6" y2="140.0" stroke="currentColor" stroke-width="1.6"/><line x1="435.0" y1="51.0" x2="435.0" y2="139.0" stroke="currentColor" stroke-width="1.6"/><line x1="439.6" y1="50.0" x2="480.4" y2="140.0" stroke="currentColor" stroke-width="1.6"/><line x1="477.6" y1="48.1" x2="392.4" y2="141.9" stroke="currentColor" stroke-width="1.6"/><line x1="480.4" y1="50.0" x2="439.6" y2="140.0" stroke="currentColor" stroke-width="1.6"/><line x1="485.0" y1="51.0" x2="485.0" y2="139.0" stroke="currentColor" stroke-width="1.6"/><circle cx="85" cy="33" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="144" cy="75.8" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="121.4" cy="145.2" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="48.6" cy="145.2" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="26" cy="75.8" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="255" cy="33" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="308.7" cy="64" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="308.7" cy="126" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="255" cy="157" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="201.3" cy="126" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="201.3" cy="64" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="385" cy="40" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="385" cy="150" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><circle cx="435" cy="40" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="435" cy="150" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><circle cx="485" cy="40" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="485" cy="150" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="85" y="192" text-anchor="middle" font-size="13">K₅  (10 edges)</text><text x="255" y="192" text-anchor="middle" font-size="13">C₆  (6 edges)</text><text x="435" y="192" text-anchor="middle" font-size="13">K₃,₃  (9 edges)</text></svg>`,
};

// Runnable C++ examples and their exact output.
const CODE: Record<string, string> = {
  "adj": `#include <cstdio>
#include <utility>
#include <vector>

int main() {
    const int n = 5;
    const std::vector<std::pair<int, int>> edges = {
        {0, 1}, {0, 2}, {1, 2}, {1, 3}, {2, 4}, {3, 4}};

    // Adjacency matrix: n*n entries, O(1) edge test.
    std::vector<std::vector<int>> matrix(n, std::vector<int>(n, 0));
    // Adjacency list: one vector of neighbours per vertex, O(n + m) memory.
    std::vector<std::vector<int>> adj(n);

    for (auto [u, v] : edges) {
        matrix[u][v] = matrix[v][u] = 1;  // undirected: store both directions
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    int degreeSum = 0;
    for (int v = 0; v < n; ++v) {
        std::printf("%d:", v);
        for (int w : adj[v]) std::printf(" %d", w);
        std::printf("   (deg %zu)\\n", adj[v].size());
        degreeSum += static_cast<int>(adj[v].size());
    }
    std::printf("sum of degrees = %d, 2|E| = %zu\\n", degreeSum, 2 * edges.size());
    std::printf("edge {1,4}? %s   edge {3,4}? %s\\n",
                matrix[1][4] ? "yes" : "no", matrix[3][4] ? "yes" : "no");
}`,
};

const OUT: Record<string, string> = {
  "adj": `0: 1 2   (deg 2)
1: 0 2 3   (deg 3)
2: 0 1 4   (deg 3)
3: 1 4   (deg 2)
4: 2 3   (deg 2)
sum of degrees = 12, 2|E| = 12
edge {1,4}? no   edge {3,4}? yes`,
};

export const lesson: Lesson = {
  id: 'dm-graph-basics',
  title: 'Graphs, Terminology and Representations',
  summary: 'Dots and lines that model road maps, friend lists, nav meshes and level layouts: vertices, edges, degree and the handshaking theorem, the famous graph families, and how to store a graph in C++.',
  minutes: 20,
  objectives: [
    'Model a real system (roads, friendships, dependencies, a game level) as a graph $G = (V, E)$ and choose between simple, multi-, directed and weighted graphs',
    'Compute degrees and use the handshaking theorem $\\sum_{v} \\deg(v) = 2|E|$, including its proof and the corollary about odd-degree vertices',
    'Recognize $K_n$, $C_n$, bipartite graphs and $K_{m,n}$, count their edges, and test a small graph for bipartiteness',
    'Build the adjacency matrix and adjacency list of a graph and compare their memory and time costs',
    'Use graph invariants to show that two graphs are not isomorphic',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A graph is dots and the lines between them',
      blocks: [
        {
          type: 'p',
          text: 'Draw the rooms of a game level as boxes and connect two rooms whenever a door joins them. You have just drawn a **graph**. Nothing about the drawing matters except *which* things are connected: the sizes of the boxes, the lengths of the lines and where you put them on the page are all irrelevant.',
        },
        {
          type: 'figure',
          svg: FIG.level,
          alt: 'Six rooms: Spawn connects to Hall; Hall connects to Armory and Lab; Armory connects to Lab and Boss; Lab connects to Vault; Vault connects to Boss.',
          caption: 'A small level as a graph: $6$ rooms (vertices) and $7$ doors (edges). The level designer\'s question "can the player reach the Boss room without passing the Lab?" is a question about this graph.',
        },
        {
          type: 'definition',
          term: 'Graph',
          text: 'A [[dm-graph|graph]] $G = (V, E)$ consists of a nonempty set $V$ of **vertices** (also called nodes) and a set $E$ of **edges**, where each edge connects two vertices, its **endpoints**. In an undirected graph an edge is an unordered pair $\\{u, v\\}$. We write $|V|$ for the number of vertices and $|E|$ for the number of edges.',
        },
        {
          type: 'p',
          text: 'Two vertices joined by an edge are **adjacent** (neighbours), and the edge is **incident** to each of its endpoints. In the level above, Hall is adjacent to Spawn, Armory and Lab, so its **neighbourhood** is $N(\\text{Hall}) = \\{\\text{Spawn}, \\text{Armory}, \\text{Lab}\\}$.',
        },
        {
          type: 'table',
          headers: ['System', 'Vertices', 'Edges'],
          rows: [
            ['Road network / GPS', 'intersections', 'road segments (with lengths or travel times)'],
            ['Social network', 'people / accounts', '"are friends" (or "follows", which has a direction)'],
            ['Navigation mesh (AI pathfinding)', 'walkable polygons', 'shared polygon edges a character can cross'],
            ['Build system / tech tree', 'source files, tasks or upgrades', '"must be done before"'],
            ['Game level', 'rooms or zones', 'doors, corridors, teleporters'],
          ],
          caption: 'The same abstraction everywhere — which is why one algorithm (say, shortest paths) serves GPS, NPC pathfinding and network routing alike.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why throw the geometry away?',
          text: 'Because most questions people ask — Is everything reachable? What is the fewest number of hops? Can we visit every room once? — depend only on the connections. Forgetting positions turns a messy picture into a precise mathematical object, and an algorithm written for $G = (V, E)$ works for every system in the table. When distances *do* matter, we put them back as numbers on the edges (a weighted graph), still without coordinates.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which of these is most naturally modeled with **directed** edges (edges with a direction, drawn as arrows)?',
      options: [
        { text: 'Facebook-style friendships', why: 'Friendship is mutual: if Ana is friends with Ben, Ben is friends with Ana. An undirected edge captures that.' },
        { text: 'Two-way corridors between rooms of a level', why: 'A two-way corridor can be walked in either direction, so an undirected edge is the right model.' },
        { text: 'A tech tree where "Forge must be built before Steel Armor"', correct: true, why: 'Prerequisites are one-way: Forge → Steel Armor does not mean Steel Armor → Forge. Dependency graphs are the textbook example of directed graphs.' },
        { text: 'Which countries share a land border', why: 'Sharing a border is symmetric, so undirected edges suffice.' },
      ],
      explanation: 'Use a directed edge when the relationship is not symmetric: "comes before", "follows", "links to", a one-way street. Use an undirected edge when the relationship always holds both ways: "is friends with", "shares a border with", a two-way door.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Kinds of graphs: simple, multi, directed, weighted',
      blocks: [
        {
          type: 'p',
          text: 'Real systems need a few variations on the basic definition. The vocabulary below follows Rosen; other books use slightly different names, so always check how a text defines "graph" before you apply its theorems.',
        },
        {
          type: 'figure',
          svg: FIG.kinds,
          alt: 'Four small graphs: a simple graph; a multigraph with two parallel edges and a loop; a directed graph with arrows; a weighted graph with numbers on its edges.',
          caption: 'Left to right: a simple graph; a multigraph with two parallel edges and a loop; a directed graph; a weighted graph.',
        },
        {
          type: 'list',
          items: [
            'A [[dm-simple-graph|simple graph]] has undirected edges, **no loops** (edges from a vertex to itself) and **no parallel edges** (two edges joining the same pair). Unless we say otherwise, "graph" means simple graph.',
            'A [[dm-multigraph|multigraph]] allows parallel edges; a pseudograph also allows loops. Two bridges between the same pair of islands, or two different flights between the same cities, are parallel edges.',
            'A [[dm-directed-graph|directed graph]] (digraph) has edges that are **ordered** pairs $(u, v)$, drawn as arrows from $u$ (the tail) to $v$ (the head). $(u, v)$ and $(v, u)$ are different edges.',
            'A [[dm-weighted-graph|weighted graph]] attaches a number $w(e)$ to each edge: a length, a travel time, a cost, a bandwidth.',
          ],
        },
        {
          type: 'p',
          text: 'In set language, a simple graph\'s edge set is a [[relation]] on $V$ that is symmetric ($u \\sim v$ implies $v \\sim u$) and irreflexive (no $v \\sim v$). A directed graph is simply *any* relation on $V$, drawn with arrows. These options combine freely: GPS uses a weighted directed graph, because one-way streets have direction and every road has a length.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In a game engine',
          text: 'A navigation mesh is a weighted undirected graph (weights = distances between polygon centres). A jump-down ledge that cannot be climbed back up becomes a single **directed** edge. Unreal\'s Behavior Trees and Blueprint graphs, animation state machines and shader graphs are all directed graphs under the hood.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the classification.',
      template: 'An edge that starts and ends at the same vertex is a ___. Two distinct edges with the same pair of endpoints are ___ edges. A graph with neither is called ___.',
      blanks: [{ answers: ['loop'] }, { answers: ['parallel'] }, { answers: ['simple'] }],
      wordBank: ['loop', 'parallel', 'simple', 'directed', 'weighted', 'cycle'],
      explanation: 'A **loop** joins a vertex to itself; **parallel** (multiple) edges join the same two vertices. A **simple** graph forbids both, so between any two distinct vertices there is at most one edge, and an edge is just a 2-element set $\\{u, v\\}$. Directed and weighted describe extra information on edges, not their multiplicity.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Degree and the handshaking theorem',
      blocks: [
        {
          type: 'definition',
          term: 'Degree',
          text: 'The [[dm-degree|degree]] $\\deg(v)$ of a vertex $v$ in an undirected graph is the number of edges incident to $v$, where a loop counts **twice** (it touches $v$ at both ends). A vertex of degree $0$ is **isolated**; a vertex of degree $1$ is a **leaf** or pendant vertex.',
        },
        {
          type: 'figure',
          svg: FIG.degrees,
          alt: 'The level graph with letters S, H, A, L, B, V and degrees: S 1, H 3, A 3, L 3, B 2, V 2.',
          caption: 'The level graph with each room\'s degree. Spawn is a leaf (a dead end).',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Add up the degrees of the level graph',
          steps: [
            { tex: '\\deg(S) + \\deg(H) + \\deg(A) + \\deg(L) + \\deg(B) + \\deg(V)', why: 'Count, for each vertex, how many edges touch it.' },
            { tex: '= 1 + 3 + 3 + 3 + 2 + 2', why: 'Read off the figure: $S$ touches only $SH$; $H$ touches $HS, HA, HL$; and so on.' },
            { tex: '= 14 = 2 \\cdot 7 = 2|E|', why: 'The level has $7$ doors. The total is exactly twice the number of edges — not a coincidence.' },
          ],
          result: 'The degree sum is $14$, twice the $7$ edges.',
        },
        {
          type: 'theorem',
          name: 'Handshaking theorem',
          tex: '\\sum_{v \\in V} \\deg(v) = 2|E|',
          text: 'In every undirected graph (loops and parallel edges allowed), the degrees add up to twice the number of edges. The name comes from a party: the total number of hands shaken, summed over all guests, is twice the number of handshakes.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Proof: count the edge-ends two ways',
          text: 'Count the pairs (vertex, edge) where the edge touches the vertex — call them **edge-ends**. Counting by vertices: vertex $v$ contributes $\\deg(v)$ edge-ends, so the total is $\\sum_v \\deg(v)$. Counting by edges: every edge has exactly two ends (a loop has both ends at the same vertex, which is exactly why a loop counts $2$ toward the degree), so the total is $2|E|$. The same quantity counted two ways gives the same number. $\\blacksquare$\n\nThis technique — **double counting** — is one of the most useful ideas in combinatorics.',
        },
        {
          type: 'theorem',
          name: 'Corollary: odd vertices come in pairs',
          text: 'Every graph has an **even** number of vertices of odd degree. *Proof:* split the degree sum into the odd-degree vertices and the even-degree ones. The total $2|E|$ is even and the even-degree part is even, so the odd-degree part is even. A sum of odd numbers is even only when there is an even number of terms. $\\blacksquare$',
        },
        {
          type: 'p',
          text: 'For a **directed** graph, each edge $(u, v)$ adds $1$ to the **out-degree** $\\deg^+(u)$ and $1$ to the **in-degree** $\\deg^-(v)$, so $\\sum_v \\deg^-(v) = \\sum_v \\deg^+(v) = |E|$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A navigation mesh has $56$ triangles. Viewed as a graph (triangles are vertices, shared sides are edges), $40$ triangles have $3$ neighbours, $12$ have $2$ neighbours and $4$ have $1$ neighbour. How many edges does the graph have?',
      label: '$|E| =$',
      answer: '74',
      hint: 'Add up all the degrees, then use the handshaking theorem.',
      explanation: 'The degree sum is $40 \\cdot 3 + 12 \\cdot 2 + 4 \\cdot 1 = 120 + 24 + 4 = 148$. By the handshaking theorem $2|E| = 148$, so $|E| = 74$. Forgetting to halve gives $148$, which counts every shared side twice — once from each triangle that owns it.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'At a meetup of $7$ developers, could every person shake hands with exactly $3$ others? Find the first incorrect line.',
      lines: [
        'Model people as vertices and handshakes as edges of a simple graph with $7$ vertices.',
        'Each person shakes $3$ hands, so every vertex has degree $3$.',
        'The degree sum is $7 \\cdot 3 = 21$.',
        'By the handshaking theorem, the number of handshakes is $|E| = 21$.',
        'So it is possible, with $21$ handshakes in total.',
      ],
      errorLines: [4],
      explanation: 'Line 4 forgets the factor $2$: the theorem says $2|E| = 21$, so $|E| = 10.5$, which is not a whole number. So such a graph **cannot exist** — the answer is no. Equivalently, it would have $7$ vertices of odd degree, an odd number, contradicting the corollary that odd-degree vertices come in pairs.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Arrange the proof that every graph has an even number of odd-degree vertices.',
      lines: [
        'Let $O$ be the set of odd-degree vertices and $R$ the set of even-degree vertices.',
        'By the handshaking theorem, $\\sum_{v \\in O} \\deg(v) + \\sum_{v \\in R} \\deg(v) = 2|E|$, which is even.',
        'Each term of $\\sum_{v \\in R} \\deg(v)$ is even, so that sum is even.',
        'Therefore $\\sum_{v \\in O} \\deg(v) = 2|E| - \\sum_{v \\in R} \\deg(v)$ is even.',
        'A sum of odd numbers is even only if it has an even number of terms, so $|O|$ is even.',
      ],
      explanation: 'Name the two groups, apply the handshaking theorem to the whole graph, observe the even part is even, subtract to get that the odd part is even, and finish with the parity fact about sums of odd numbers. Each line uses only facts established by the lines above it.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Special graphs: complete, cycles and bipartite',
      blocks: [
        {
          type: 'p',
          text: 'A few families show up so often that they have names. You will meet them again in coloring, planarity and matching problems.',
        },
        {
          type: 'figure',
          svg: FIG.special,
          alt: 'Three graphs: K5, five vertices all joined to each other; C6, a hexagon; K3,3, three blue vertices on top each joined to all three orange vertices on the bottom.',
          caption: 'The complete graph $K_5$, the cycle $C_6$ and the complete bipartite graph $K_{3,3}$ (blue part on top, orange part below).',
        },
        {
          type: 'list',
          items: [
            'The [[dm-complete-graph|complete graph]] $K_n$: $n$ vertices, every pair joined. Every vertex has degree $n - 1$.',
            'The [[dm-cycle-graph|cycle]] $C_n$ ($n \\ge 3$): vertices $v_1, \\dots, v_n$ with edges $v_1v_2, v_2v_3, \\dots, v_{n-1}v_n, v_nv_1$. Every vertex has degree $2$, and $|E| = n$.',
            'A [[dm-bipartite-graph|bipartite graph]]: $V$ splits into two disjoint parts $V_1, V_2$ so that **every edge has one end in each part**. No edge stays inside a part.',
            'The complete bipartite graph $K_{m,n}$: parts of sizes $m$ and $n$, and **every** vertex of one part joined to every vertex of the other, so $|E| = mn$.',
          ],
        },
        {
          type: 'derivation',
          title: 'How many edges does $K_n$ have?',
          steps: [
            { tex: '\\sum_{v} \\deg(v) = n(n - 1)', why: 'Each of the $n$ vertices is adjacent to all $n - 1$ others.' },
            { tex: '2|E| = n(n - 1)', why: 'Handshaking theorem.' },
            { tex: '|E| = \\frac{n(n-1)}{2} = \\binom{n}{2}', why: 'Divide by $2$. It is also the number of ways to choose the $2$ endpoints out of $n$ — a [[binomial-coefficient]].' },
          ],
          result: '$K_n$ has $\\binom{n}{2} = \\frac{n(n-1)}{2}$ edges, the most any simple graph on $n$ vertices can have. $K_5$ has $10$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why an odd cycle can never be bipartite',
          text: 'Walk around a cycle $v_1 v_2 \\dots v_k v_1$ in a bipartite graph. Each step crosses to the other part, so the parts alternate: $v_1$ in $V_1$, $v_2$ in $V_2$, $v_3$ in $V_1$, … After $k$ steps you are back at $v_1$, which needs an **even** number of crossings. So every cycle in a bipartite graph has even length, and a triangle or a $C_5$ makes a graph non-bipartite. (The converse is also true: a graph with no odd cycles is bipartite — you will see the BFS-based test next lesson.)',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Bipartite graphs in games',
          text: 'Matchmaking (players vs. open lobby slots), assigning quests to party members, or "which item can be equipped in which slot" are bipartite: edges only go between two different kinds of thing. Maximum-matching algorithms on bipartite graphs solve these assignment problems efficiently.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'expr',
      prompt: 'A round-robin tournament has $n$ teams, and every pair of teams plays exactly once. That is the complete graph $K_n$. Write the number of games as a formula in $n$.',
      label: 'games $=$',
      answer: 'n(n-1)/2',
      answerTex: '\\frac{n(n-1)}{2}',
      variables: ['n'],
      domain: [2, 10],
      hint: 'Each team plays $n - 1$ games; each game involves two teams.',
      explanation: 'Each of the $n$ vertices has degree $n - 1$, so the degree sum is $n(n - 1)$, and the handshaking theorem halves it: $\\frac{n(n-1)}{2} = \\binom{n}{2}$. For $16$ teams that is $120$ games. The answer $n(n-1)$ counts every game twice — once from each team\'s schedule.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Is this graph bipartite? (It is the cycle $1\\,2\\,3\\,4\\,5\\,6$ plus the edge $\\{1, 4\\}$.)',
      figure: {
        type: 'figure',
        svg: FIG.bip,
        alt: 'A hexagon with vertices 1 to 6 in order, plus a vertical edge from 1 to 4.',
        maxWidth: 260,
      },
      options: [
        { text: 'No — it contains a cycle', why: 'Cycles are fine; only **odd** cycles are forbidden. Every cycle here has even length.' },
        { text: 'Yes, with parts $\\{1, 3, 5\\}$ and $\\{2, 4, 6\\}$', correct: true, why: 'Check all $7$ edges: $12, 23, 34, 45, 56, 61$ alternate between the parts, and $14$ joins $1 \\in V_1$ to $4 \\in V_2$. No edge stays inside a part.' },
        { text: 'Yes, with parts $\\{1, 2, 3\\}$ and $\\{4, 5, 6\\}$', why: 'The edge $\\{1, 2\\}$ lies entirely inside $\\{1, 2, 3\\}$, so this split fails.' },
        { text: 'No — the edge $\\{1, 4\\}$ creates a triangle', why: 'The new cycles are $1\\,2\\,3\\,4\\,1$ and $1\\,4\\,5\\,6\\,1$, both of length $4$. No triangle appears.' },
      ],
      explanation: 'Color vertex $1$ blue; its neighbours $2, 6, 4$ must be orange; their neighbours $3, 5$ must be blue. No conflict arises, so the graph is bipartite with parts $\\{1, 3, 5\\}$ and $\\{2, 4, 6\\}$. The chord $\\{1, 4\\}$ joins vertices that are an odd distance ($3$) apart around the hexagon, so it keeps all cycles even. A chord like $\\{1, 3\\}$ would have created the odd cycle $1\\,2\\,3\\,1$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Storing a graph: adjacency matrix vs. adjacency list',
      blocks: [
        {
          type: 'p',
          text: 'To run algorithms we need a data structure. Number the vertices $0, 1, \\dots, n - 1$ (as C++ does) and use one of two standard representations. Here is a running example with $n = 5$ and $m = 6$ edges.',
        },
        {
          type: 'figure',
          svg: FIG.rep,
          alt: 'Five vertices 0 to 4. Edges: 0-1, 0-2, 1-2, 1-3, 2-4, 3-4.',
          maxWidth: 300,
        },
        {
          type: 'table',
          headers: ['$A$', '0', '1', '2', '3', '4'],
          rows: [
            ['**0**', '0', '1', '1', '0', '0'],
            ['**1**', '1', '0', '1', '1', '0'],
            ['**2**', '1', '1', '0', '0', '1'],
            ['**3**', '0', '1', '0', '0', '1'],
            ['**4**', '0', '0', '1', '1', '0'],
          ],
          caption: 'The [[dm-adjacency-matrix|adjacency matrix]] $A$: $a_{ij} = 1$ if $\\{i, j\\}$ is an edge, else $0$. It is symmetric (undirected edges), has zeros on the diagonal (no loops), and row $i$ sums to $\\deg(i)$.',
        },
        {
          type: 'table',
          headers: ['Vertex', 'Neighbours'],
          rows: [
            ['0', '1, 2'],
            ['1', '0, 2, 3'],
            ['2', '0, 1, 4'],
            ['3', '1, 4'],
            ['4', '2, 3'],
          ],
          caption: 'The [[dm-adjacency-list|adjacency list]]: for each vertex, the list of its neighbours. Each undirected edge appears twice, once from each end, so the lists hold $2m = 12$ entries in total.',
        },
        {
          type: 'table',
          headers: ['Cost ($n$ vertices, $m$ edges)', 'Adjacency matrix', 'Adjacency list'],
          rows: [
            ['Memory', '$\\Theta(n^2)$', '$\\Theta(n + m)$'],
            ['Is $\\{u, v\\}$ an edge?', '$O(1)$: read $a_{uv}$', '$O(\\deg u)$: scan $u$\'s list'],
            ['Visit all neighbours of $v$', '$\\Theta(n)$: scan a whole row', '$\\Theta(\\deg v)$'],
            ['Visit every edge (BFS, DFS, Dijkstra…)', '$\\Theta(n^2)$', '$\\Theta(n + m)$'],
          ],
          caption: 'The trade-off, in [[big-o-notation]]. Most real graphs are **sparse** ($m$ much smaller than $n^2$), so lists win.',
        },
        {
          type: 'code',
          title: 'adjacency.cpp',
          runnable: true,
          code: CODE.adj,
          output: OUT.adj,
          annotations: [
            { lines: '7-8', text: 'The edge list of the running example: the simplest representation, and the usual input format.' },
            { lines: '11-13', text: 'Matrix: $n$ rows of $n$ ints. List: $n$ vectors that grow as edges are added.' },
            { lines: '15-19', text: 'An undirected edge is stored in **both** directions — that is why the matrix is symmetric and why the lists hold $2m$ entries.' },
            { lines: '22-27', text: 'Each list\'s length is the vertex degree; their sum checks the handshaking theorem.' },
            { lines: '29-30', text: 'The matrix answers "is this an edge?" in constant time.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Rule of thumb',
          text: 'A nav mesh with $10\\,000$ polygons and about $3$ neighbours each has $m \\approx 15\\,000$ edges. Its adjacency matrix has $10^8$ entries; its adjacency list about $30\\,000$. Use a matrix only for small or **dense** graphs (close to $K_n$), or when you need constant-time edge tests — for example, a $64 \\times 64$ "can these two collision layers interact?" table.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A simple undirected graph has $9$ vertices and $15$ edges. How many entries of its $9 \\times 9$ adjacency matrix equal $1$?',
      answer: '30',
      hint: 'Where does the edge $\\{u, v\\}$ show up in the matrix?',
      explanation: 'Each undirected edge $\\{u, v\\}$ puts a $1$ in **two** places, $a_{uv}$ and $a_{vu}$, and a simple graph has no loops on the diagonal. So there are $2 \\cdot 15 = 30$ ones. This is the handshaking theorem again: the row sums are the degrees, and the sum of all entries is $\\sum \\deg(v) = 2|E|$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'An open-world game has a road graph with $200\\,000$ intersections, each meeting $2$ to $4$ roads. The pathfinder repeatedly asks "list every road leaving this intersection". Which representation should you use?',
      options: [
        { text: 'Adjacency matrix, because edge lookups are $O(1)$', why: 'Constant-time edge tests are not what this workload needs, and the matrix would have $4 \\times 10^{10}$ entries — $5$ GB even at one bit per entry.' },
        { text: 'Adjacency list', correct: true, why: 'Memory is $\\Theta(n + m)$ — a few hundred thousand entries — and listing the neighbours of a vertex costs $\\Theta(\\deg v) \\le 4$ steps instead of scanning a row of $200\\,000$.' },
        { text: 'Either; they cost the same for sparse graphs', why: 'They cost very differently: $\\Theta(n^2)$ vs. $\\Theta(n + m)$ memory, and $\\Theta(n)$ vs. $\\Theta(\\deg v)$ to list neighbours.' },
      ],
      explanation: 'The graph is very sparse ($m \\le 2n$, far below $n^2$) and the main operation is "iterate over neighbours". Adjacency lists are built for exactly that. The matrix\'s one advantage, $O(1)$ edge tests, is not needed here, and its $n^2 = 4 \\times 10^{10}$ entries would not fit in memory.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Isomorphism: the same graph drawn twice',
      blocks: [
        {
          type: 'p',
          text: 'Since only connections matter, two drawings can show the **same** graph even when they look completely different. The pentagon and the pentagram below are the same graph with the vertices renamed.',
        },
        {
          type: 'figure',
          svg: FIG.iso,
          alt: 'Left, a pentagon a-b-c-d-e. Right, a five-pointed star whose vertices are labeled 1 to 5 around the circle, with edges 1-3, 3-5, 5-2, 2-4, 4-1.',
          caption: 'Map $a \\mapsto 1,\\ b \\mapsto 3,\\ c \\mapsto 5,\\ d \\mapsto 2,\\ e \\mapsto 4$. Each pentagon edge $ab, bc, cd, de, ea$ goes to a star edge $13, 35, 52, 24, 41$, and vice versa.',
        },
        {
          type: 'definition',
          term: 'Isomorphic graphs',
          text: 'Simple graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are [[dm-graph-isomorphism|isomorphic]] if there is a [[one-to-one-function|one-to-one]] and onto function $f: V_1 \\to V_2$ such that $\\{u, v\\} \\in E_1 \\iff \\{f(u), f(v)\\} \\in E_2$. In words: rename the vertices and the edge sets match exactly.',
        },
        {
          type: 'p',
          text: 'A property that every isomorphism preserves is called an **invariant**: the number of vertices, the number of edges, the **degree sequence** (all degrees, sorted), being connected, being bipartite, having a cycle of length $k$. Invariants are a one-way tool: if two graphs differ in any invariant they are **not** isomorphic, but agreeing on a handful of invariants proves nothing.',
        },
        {
          type: 'figure',
          svg: FIG.samedeg,
          alt: 'Left, a hexagon C6. Right, two separate triangles.',
          caption: 'Both graphs have $6$ vertices, $6$ edges and degree sequence $(2, 2, 2, 2, 2, 2)$, yet they are not isomorphic: $C_6$ is connected and has no triangle; the right graph is in two pieces and has two triangles.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'How hard is it?',
          text: 'Trying all $n!$ bijections is hopeless beyond tiny graphs ([[factorial]] growth: $20! \\approx 2.4 \\times 10^{18}$). No polynomial-time algorithm is known for graph isomorphism, but none is known to be impossible either; in 2015 László Babai found a quasi-polynomial algorithm. In practice, tools refine vertices by invariants (degree, neighbours\' degrees, …) and solve real instances fast.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'True or false: if two simple graphs have the same number of vertices, the same number of edges and the same degree sequence, they must be isomorphic.',
      answer: false,
      explanation: 'False. $C_6$ and two disjoint triangles both have six vertices of degree $2$ and six edges, but one is connected and the other is not, and only the second contains a triangle. Matching invariants is necessary for isomorphism, not sufficient. To prove two graphs **are** isomorphic you must exhibit a bijection that maps edges to edges.',
    },
  ],
  takeaways: [
    'A graph $G = (V, E)$ keeps only *which* things are connected; simple, multi-, directed and weighted graphs add or remove details as the model needs.',
    'Handshaking theorem: $\\sum_{v} \\deg(v) = 2|E|$, proved by double counting edge-ends; so the number of odd-degree vertices is always even.',
    '$K_n$ has $\\binom{n}{2}$ edges, $C_n$ has $n$, $K_{m,n}$ has $mn$; a graph with an odd cycle is never bipartite.',
    'Adjacency matrix: $\\Theta(n^2)$ memory, $O(1)$ edge tests. Adjacency list: $\\Theta(n + m)$ memory, fast neighbour iteration — the default for sparse graphs like nav meshes and road maps.',
    'Isomorphic graphs are the same up to renaming vertices; a differing invariant proves two graphs are different, but matching invariants prove nothing.',
  ],
  reading: [
    { title: 'Levin, Discrete Mathematics: An Open Introduction — Graph Theory', url: 'https://discrete.openmathbooks.org/dmoi3.html', source: 'book', note: 'Chapter 4 opens with definitions, the handshake lemma and isomorphism, with many small exercises.' },
    { title: 'MIT 6.042J Mathematics for Computer Science', url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/', source: 'other', note: 'The graph theory lectures cover degrees, the handshaking lemma and bipartite matching with a computer science slant.' },
    { title: 'Adjacency list (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Adjacency_list', source: 'wikipedia', note: 'Compares adjacency lists and matrices, including their memory use and operation costs.' },
    { title: 'Handshaking lemma (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Handshaking_lemma', source: 'wikipedia', note: 'The theorem, its proof by double counting and its history back to Euler.' },
  ],
};
