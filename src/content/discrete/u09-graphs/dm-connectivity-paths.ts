import type { Lesson } from '../../types';

// Figures (graph drawings generated with the graph kit; theme-aware SVG).
const FIG: Record<string, string> = {
  "bfs": `<svg viewBox="0 0 450 225" xmlns="http://www.w3.org/2000/svg"><line x1="63.0" y1="60.0" x2="147.0" y2="60.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="183.0" y1="60.0" x2="267.0" y2="60.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="303.0" y1="60.0" x2="387.0" y2="60.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="45.0" y1="78.0" x2="45.0" y2="152.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="165.0" y1="78.0" x2="165.0" y2="152.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="63.0" y1="170.0" x2="147.0" y2="170.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="183.0" y1="170.0" x2="267.0" y2="170.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="285.0" y1="78.0" x2="285.0" y2="152.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="405.0" y1="78.0" x2="405.0" y2="152.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="303.0" y1="170.0" x2="387.0" y2="170.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><circle cx="45" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="45" y="65" text-anchor="middle" font-size="14" class="t-green">A</text><text x="45" y="35" text-anchor="middle" font-size="12" class="t-gray">#1, d=0</text><circle cx="165" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="165" y="65" text-anchor="middle" font-size="14">B</text><text x="165" y="35" text-anchor="middle" font-size="12" class="t-gray">#2, d=1</text><circle cx="285" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="285" y="65" text-anchor="middle" font-size="14">C</text><text x="285" y="35" text-anchor="middle" font-size="12" class="t-gray">#4, d=2</text><circle cx="405" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="405" y="65" text-anchor="middle" font-size="14">D</text><text x="405" y="35" text-anchor="middle" font-size="12" class="t-gray">#6, d=3</text><circle cx="45" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="45" y="175" text-anchor="middle" font-size="14">E</text><text x="45" y="203" text-anchor="middle" font-size="12" class="t-gray">#3, d=1</text><circle cx="165" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="165" y="175" text-anchor="middle" font-size="14">F</text><text x="165" y="203" text-anchor="middle" font-size="12" class="t-gray">#5, d=2</text><circle cx="285" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="285" y="175" text-anchor="middle" font-size="14">G</text><text x="285" y="203" text-anchor="middle" font-size="12" class="t-gray">#7, d=3</text><circle cx="405" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="405" y="175" text-anchor="middle" font-size="14">H</text><text x="405" y="203" text-anchor="middle" font-size="12" class="t-gray">#8, d=4</text></svg>`,
  "comps": `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg"><line x1="52.0" y1="39.3" x2="118.0" y2="35.7" stroke="currentColor" stroke-width="1.6"/><line x1="124.6" y1="45.7" x2="95.4" y2="104.3" stroke="currentColor" stroke-width="1.6"/><line x1="83.3" y1="105.0" x2="46.7" y2="50.0" stroke="currentColor" stroke-width="1.6"/><line x1="100.6" y1="120.6" x2="164.4" y2="154.4" stroke="currentColor" stroke-width="1.6"/><line x1="251.2" y1="44.2" x2="308.8" y2="65.8" stroke="currentColor" stroke-width="1.6"/><line x1="331.4" y1="66.2" x2="398.6" y2="43.8" stroke="currentColor" stroke-width="1.6"/><line x1="321.3" y1="81.9" x2="328.7" y2="148.1" stroke="currentColor" stroke-width="1.6"/><line x1="403.3" y1="50.0" x2="336.7" y2="150.0" stroke="currentColor" stroke-width="1.6"/><line x1="51.9" y1="201.5" x2="108.1" y2="208.5" stroke="currentColor" stroke-width="1.6"/><line x1="132.0" y1="210.5" x2="238.0" y2="214.5" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="40" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="130" cy="35" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="90" cy="115" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="175" cy="160" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="240" cy="40" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="320" cy="70" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="410" cy="40" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="330" cy="160" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="200" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="120" cy="210" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="250" cy="215" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="430" cy="170" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
  "dfs": `<svg viewBox="0 0 450 225" xmlns="http://www.w3.org/2000/svg"><line x1="63.0" y1="60.0" x2="147.0" y2="60.0" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="183.0" y1="60.0" x2="267.0" y2="60.0" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="303.0" y1="60.0" x2="387.0" y2="60.0" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="45.0" y1="78.0" x2="45.0" y2="152.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="165.0" y1="78.0" x2="165.0" y2="152.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="63.0" y1="170.0" x2="147.0" y2="170.0" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="183.0" y1="170.0" x2="267.0" y2="170.0" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="285.0" y1="78.0" x2="285.0" y2="152.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="405.0" y1="78.0" x2="405.0" y2="152.0" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="303.0" y1="170.0" x2="387.0" y2="170.0" stroke="currentColor" stroke-width="3.2" class="s-purple"/><circle cx="45" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="45" y="65" text-anchor="middle" font-size="14" class="t-green">A</text><text x="45" y="35" text-anchor="middle" font-size="12" class="t-gray">#1</text><circle cx="165" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="165" y="65" text-anchor="middle" font-size="14">B</text><text x="165" y="35" text-anchor="middle" font-size="12" class="t-gray">#2</text><circle cx="285" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="285" y="65" text-anchor="middle" font-size="14">C</text><text x="285" y="35" text-anchor="middle" font-size="12" class="t-gray">#3</text><circle cx="405" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="405" y="65" text-anchor="middle" font-size="14">D</text><text x="405" y="35" text-anchor="middle" font-size="12" class="t-gray">#4</text><circle cx="45" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="45" y="175" text-anchor="middle" font-size="14">E</text><text x="45" y="203" text-anchor="middle" font-size="12" class="t-gray">#8</text><circle cx="165" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="165" y="175" text-anchor="middle" font-size="14">F</text><text x="165" y="203" text-anchor="middle" font-size="12" class="t-gray">#7</text><circle cx="285" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="285" y="175" text-anchor="middle" font-size="14">G</text><text x="285" y="203" text-anchor="middle" font-size="12" class="t-gray">#6</text><circle cx="405" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="405" y="175" text-anchor="middle" font-size="14">H</text><text x="405" y="203" text-anchor="middle" font-size="12" class="t-gray">#5</text></svg>`,
  "gridplain": `<svg viewBox="0 0 450 225" xmlns="http://www.w3.org/2000/svg"><line x1="63.0" y1="60.0" x2="147.0" y2="60.0" stroke="currentColor" stroke-width="1.6"/><line x1="183.0" y1="60.0" x2="267.0" y2="60.0" stroke="currentColor" stroke-width="1.6"/><line x1="303.0" y1="60.0" x2="387.0" y2="60.0" stroke="currentColor" stroke-width="1.6"/><line x1="45.0" y1="78.0" x2="45.0" y2="152.0" stroke="currentColor" stroke-width="1.6"/><line x1="165.0" y1="78.0" x2="165.0" y2="152.0" stroke="currentColor" stroke-width="1.6"/><line x1="63.0" y1="170.0" x2="147.0" y2="170.0" stroke="currentColor" stroke-width="1.6"/><line x1="183.0" y1="170.0" x2="267.0" y2="170.0" stroke="currentColor" stroke-width="1.6"/><line x1="285.0" y1="78.0" x2="285.0" y2="152.0" stroke="currentColor" stroke-width="1.6"/><line x1="405.0" y1="78.0" x2="405.0" y2="152.0" stroke="currentColor" stroke-width="1.6"/><line x1="303.0" y1="170.0" x2="387.0" y2="170.0" stroke="currentColor" stroke-width="1.6"/><circle cx="45" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="45" y="65" text-anchor="middle" font-size="14" class="t-green">A</text><circle cx="165" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="165" y="65" text-anchor="middle" font-size="14">B</text><circle cx="285" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="285" y="65" text-anchor="middle" font-size="14">C</text><circle cx="405" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="405" y="65" text-anchor="middle" font-size="14">D</text><circle cx="45" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="45" y="175" text-anchor="middle" font-size="14">E</text><circle cx="165" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="165" y="175" text-anchor="middle" font-size="14">F</text><circle cx="285" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="285" y="175" text-anchor="middle" font-size="14">G</text><circle cx="405" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="405" y="175" text-anchor="middle" font-size="14">H</text></svg>`,
  "hamilton": `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg"><line x1="51.0" y1="40.0" x2="189.0" y2="40.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="200.0" y1="51.0" x2="200.0" y2="189.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="189.0" y1="200.0" x2="51.0" y2="200.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="40.0" y1="189.0" x2="40.0" y2="51.0" stroke="currentColor" stroke-width="1.6"/><line x1="96.0" y1="85.0" x2="144.0" y2="85.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="155.0" y1="96.0" x2="155.0" y2="144.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="144.0" y1="155.0" x2="96.0" y2="155.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="85.0" y1="144.0" x2="85.0" y2="96.0" stroke="currentColor" stroke-width="1.6"/><line x1="47.8" y1="47.8" x2="77.2" y2="77.2" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="192.2" y1="47.8" x2="162.8" y2="77.2" stroke="currentColor" stroke-width="1.6"/><line x1="192.2" y1="192.2" x2="162.8" y2="162.8" stroke="currentColor" stroke-width="1.6"/><line x1="47.8" y1="192.2" x2="77.2" y2="162.8" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="311.0" y1="50.0" x2="359.0" y2="50.0" stroke="currentColor" stroke-width="1.6"/><line x1="300.0" y1="61.0" x2="300.0" y2="109.0" stroke="currentColor" stroke-width="1.6"/><line x1="381.0" y1="50.0" x2="429.0" y2="50.0" stroke="currentColor" stroke-width="1.6"/><line x1="370.0" y1="61.0" x2="370.0" y2="109.0" stroke="currentColor" stroke-width="1.6"/><line x1="440.0" y1="61.0" x2="440.0" y2="109.0" stroke="currentColor" stroke-width="1.6"/><line x1="311.0" y1="120.0" x2="359.0" y2="120.0" stroke="currentColor" stroke-width="1.6"/><line x1="300.0" y1="131.0" x2="300.0" y2="179.0" stroke="currentColor" stroke-width="1.6"/><line x1="381.0" y1="120.0" x2="429.0" y2="120.0" stroke="currentColor" stroke-width="1.6"/><line x1="370.0" y1="131.0" x2="370.0" y2="179.0" stroke="currentColor" stroke-width="1.6"/><line x1="440.0" y1="131.0" x2="440.0" y2="179.0" stroke="currentColor" stroke-width="1.6"/><line x1="311.0" y1="190.0" x2="359.0" y2="190.0" stroke="currentColor" stroke-width="1.6"/><line x1="381.0" y1="190.0" x2="429.0" y2="190.0" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="40" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="200" cy="40" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="200" cy="200" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="200" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="85" cy="85" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="155" cy="85" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="155" cy="155" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="85" cy="155" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="300" cy="50" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="370" cy="50" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><circle cx="440" cy="50" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="300" cy="120" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><circle cx="370" cy="120" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="440" cy="120" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><circle cx="300" cy="190" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="370" cy="190" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><circle cx="440" cy="190" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><text x="120" y="240" text-anchor="middle" font-size="13">cube: Hamilton circuit (orange)</text><text x="370" y="240" text-anchor="middle" font-size="13">3×3 grid: 5 blue, 4 orange</text></svg>`,
  "house": `<svg viewBox="0 0 280 250" xmlns="http://www.w3.org/2000/svg"><line x1="85.0" y1="220.0" x2="195.0" y2="220.0" stroke="currentColor" stroke-width="1.6"/><line x1="210.0" y1="205.0" x2="210.0" y2="115.0" stroke="currentColor" stroke-width="1.6"/><line x1="195.0" y1="100.0" x2="85.0" y2="100.0" stroke="currentColor" stroke-width="1.6"/><line x1="70.0" y1="115.0" x2="70.0" y2="205.0" stroke="currentColor" stroke-width="1.6"/><line x1="81.4" y1="210.2" x2="198.6" y2="109.8" stroke="currentColor" stroke-width="1.6"/><line x1="198.6" y1="210.2" x2="81.4" y2="109.8" stroke="currentColor" stroke-width="1.6"/><line x1="80.6" y1="89.4" x2="129.4" y2="40.6" stroke="currentColor" stroke-width="1.6"/><line x1="199.4" y1="89.4" x2="150.6" y2="40.6" stroke="currentColor" stroke-width="1.6"/><circle cx="70" cy="220" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="70" y="225" text-anchor="middle" font-size="14">a</text><circle cx="210" cy="220" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="210" y="225" text-anchor="middle" font-size="14">b</text><circle cx="210" cy="100" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="210" y="105" text-anchor="middle" font-size="14">c</text><circle cx="70" cy="100" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="70" y="105" text-anchor="middle" font-size="14">d</text><circle cx="140" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="140" y="35" text-anchor="middle" font-size="14">e</text></svg>`,
  "konig": `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg"><path d="M204.0,46.9 Q170.5,71.8 156.6,111.1" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M213.4,53.9 Q199.5,93.2 166.0,118.1" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M213.4,206.1 Q199.5,166.8 166.0,141.9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M204.0,213.1 Q170.5,188.2 156.6,148.9" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="235.7" y1="47.4" x2="324.3" y2="117.6" stroke="currentColor" stroke-width="1.6"/><line x1="235.7" y1="212.6" x2="324.3" y2="142.4" stroke="currentColor" stroke-width="1.6"/><line x1="170.0" y1="130.0" x2="320.0" y2="130.0" stroke="currentColor" stroke-width="1.6"/><circle cx="220" cy="35" r="20" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="220" y="40" text-anchor="middle" font-size="14">N</text><text x="246" y="40" text-anchor="start" font-size="12" class="t-gray">deg 3</text><circle cx="150" cy="130" r="20" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="135" text-anchor="middle" font-size="14">I</text><text x="124" y="135" text-anchor="end" font-size="12" class="t-gray">deg 5</text><circle cx="220" cy="225" r="20" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="220" y="230" text-anchor="middle" font-size="14">S</text><text x="246" y="230" text-anchor="start" font-size="12" class="t-gray">deg 3</text><circle cx="340" cy="130" r="20" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="340" y="135" text-anchor="middle" font-size="14">E</text><text x="366" y="135" text-anchor="start" font-size="12" class="t-gray">deg 3</text></svg>`,
  "tsp": `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg"><line x1="78.0" y1="50.0" x2="242.0" y2="50.0" stroke="currentColor" stroke-width="3.2" class="s-green"/><line x1="260.0" y1="68.0" x2="260.0" y2="172.0" stroke="currentColor" stroke-width="3.2" class="s-green"/><line x1="242.0" y1="190.0" x2="78.0" y2="190.0" stroke="currentColor" stroke-width="3.2" class="s-green"/><line x1="60.0" y1="68.0" x2="60.0" y2="172.0" stroke="currentColor" stroke-width="3.2" class="s-green"/><line x1="74.7" y1="60.3" x2="245.3" y2="179.7" stroke="currentColor" stroke-width="1.6"/><line x1="245.3" y1="60.3" x2="74.7" y2="179.7" stroke="currentColor" stroke-width="1.6"/><circle cx="60" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="55" text-anchor="middle" font-size="14">A</text><circle cx="260" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="260" y="55" text-anchor="middle" font-size="14">B</text><circle cx="260" cy="190" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="260" y="195" text-anchor="middle" font-size="14">C</text><circle cx="60" cy="190" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="195" text-anchor="middle" font-size="14">D</text><text x="160.0" y="42.5" text-anchor="middle" font-size="13" class="t-green">4</text><text x="249.0" y="124.5" text-anchor="middle" font-size="13" class="t-green">2</text><text x="160.0" y="206.5" text-anchor="middle" font-size="13" class="t-green">5</text><text x="49.0" y="124.5" text-anchor="middle" font-size="13" class="t-green">3</text><text x="102" y="104" text-anchor="middle" font-size="13">7</text><text x="218" y="104" text-anchor="middle" font-size="13">6</text></svg>`,
  "walk": `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg"><line x1="67.0" y1="45.0" x2="153.0" y2="45.0" stroke="currentColor" stroke-width="1.6"/><line x1="187.0" y1="45.0" x2="273.0" y2="45.0" stroke="currentColor" stroke-width="1.6"/><line x1="50.0" y1="62.0" x2="50.0" y2="138.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="170.0" y1="62.0" x2="170.0" y2="138.0" stroke="currentColor" stroke-width="1.6"/><line x1="290.0" y1="62.0" x2="290.0" y2="138.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="67.0" y1="155.0" x2="153.0" y2="155.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="187.0" y1="155.0" x2="273.0" y2="155.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="157.5" y1="56.5" x2="62.5" y2="143.5" stroke="currentColor" stroke-width="1.6"/><line x1="277.5" y1="56.5" x2="182.5" y2="143.5" stroke="currentColor" stroke-width="1.6"/><circle cx="50" cy="45" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="50" text-anchor="middle" font-size="14">1</text><circle cx="170" cy="45" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="170" y="50" text-anchor="middle" font-size="14">2</text><circle cx="290" cy="45" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="290" y="50" text-anchor="middle" font-size="14">3</text><circle cx="50" cy="155" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="160" text-anchor="middle" font-size="14">4</text><circle cx="170" cy="155" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="170" y="160" text-anchor="middle" font-size="14">5</text><circle cx="290" cy="155" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="290" y="160" text-anchor="middle" font-size="14">6</text></svg>`,
  "walkplain": `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg"><line x1="67.0" y1="45.0" x2="153.0" y2="45.0" stroke="currentColor" stroke-width="1.6"/><line x1="187.0" y1="45.0" x2="273.0" y2="45.0" stroke="currentColor" stroke-width="1.6"/><line x1="50.0" y1="62.0" x2="50.0" y2="138.0" stroke="currentColor" stroke-width="1.6"/><line x1="170.0" y1="62.0" x2="170.0" y2="138.0" stroke="currentColor" stroke-width="1.6"/><line x1="290.0" y1="62.0" x2="290.0" y2="138.0" stroke="currentColor" stroke-width="1.6"/><line x1="67.0" y1="155.0" x2="153.0" y2="155.0" stroke="currentColor" stroke-width="1.6"/><line x1="187.0" y1="155.0" x2="273.0" y2="155.0" stroke="currentColor" stroke-width="1.6"/><line x1="157.5" y1="56.5" x2="62.5" y2="143.5" stroke="currentColor" stroke-width="1.6"/><line x1="277.5" y1="56.5" x2="182.5" y2="143.5" stroke="currentColor" stroke-width="1.6"/><circle cx="50" cy="45" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="50" text-anchor="middle" font-size="14">1</text><circle cx="170" cy="45" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="170" y="50" text-anchor="middle" font-size="14">2</text><circle cx="290" cy="45" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="290" y="50" text-anchor="middle" font-size="14">3</text><circle cx="50" cy="155" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="160" text-anchor="middle" font-size="14">4</text><circle cx="170" cy="155" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="170" y="160" text-anchor="middle" font-size="14">5</text><circle cx="290" cy="155" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="290" y="160" text-anchor="middle" font-size="14">6</text></svg>`,
};

// Runnable C++ examples and their exact output.
const CODE: Record<string, string> = {
  "bfs": `#include <cstdio>
#include <queue>
#include <vector>

int main() {
    const char* name = "ABCDEFGH";
    // The level graph from the figure: A=0, B=1, ..., H=7.
    // Each list is sorted, so ties are broken alphabetically.
    std::vector<std::vector<int>> adj = {
        {1, 4}, {0, 2, 5}, {1, 3, 6}, {2, 7},   // A B C D
        {0, 5}, {1, 4, 6}, {2, 5, 7}, {3, 6}};  // E F G H

    std::vector<int> dist(adj.size(), -1);  // -1 = not discovered yet
    std::queue<int> q;
    dist[0] = 0;  // start at A
    q.push(0);

    while (!q.empty()) {
        int v = q.front();
        q.pop();
        std::printf("visit %c (distance %d)\\n", name[v], dist[v]);
        for (int w : adj[v]) {
            if (dist[w] == -1) {         // first time we see w
                dist[w] = dist[v] + 1;  // one layer further out
                q.push(w);
            }
        }
    }
}`,
  "dfs": `#include <cstdio>
#include <vector>

std::vector<std::vector<int>> adj;
std::vector<bool> seen;
const char* name = "ABCDEFGHXYZ";

void dfs(int v) {
    seen[v] = true;
    std::printf(" %c", name[v]);
    for (int w : adj[v])
        if (!seen[w]) dfs(w);  // go deeper; return here when stuck
}

int main() {
    // Same level graph (A..H), plus a separate island X-Y and a lone room Z.
    adj = {{1, 4}, {0, 2, 5}, {1, 3, 6}, {2, 7},
           {0, 5}, {1, 4, 6}, {2, 5, 7}, {3, 6},
           {9}, {8}, {}};
    seen.assign(adj.size(), false);

    int components = 0;
    for (int v = 0; v < static_cast<int>(adj.size()); ++v) {
        if (!seen[v]) {
            ++components;
            std::printf("component %d:", components);
            dfs(v);
            std::printf("\\n");
        }
    }
    std::printf("%d components\\n", components);
}`,
  "tsp": `#include <algorithm>
#include <cstdio>
#include <vector>

int main() {
    const char* name = "ABCD";
    const int w[4][4] = {{0, 4, 7, 3},   // A
                         {4, 0, 2, 6},   // B
                         {7, 2, 0, 5},   // C
                         {3, 6, 5, 0}};  // D

    std::vector<int> rest = {1, 2, 3};  // fix A as the start; permute the others
    int best = 1 << 30;
    do {
        if (rest.front() > rest.back()) continue;  // skip each tour's reverse
        int len = w[0][rest[0]] + w[rest[0]][rest[1]] + w[rest[1]][rest[2]] + w[rest[2]][0];
        std::printf("A %c %c %c A  length %d\\n", name[rest[0]], name[rest[1]], name[rest[2]], len);
        best = std::min(best, len);
    } while (std::next_permutation(rest.begin(), rest.end()));
    std::printf("shortest tour: %d\\n", best);
}`,
};

const OUT: Record<string, string> = {
  "bfs": `visit A (distance 0)
visit B (distance 1)
visit E (distance 1)
visit C (distance 2)
visit F (distance 2)
visit D (distance 3)
visit G (distance 3)
visit H (distance 4)`,
  "dfs": `component 1: A B C D H G F E
component 2: X Y
component 3: Z
3 components`,
  "tsp": `A B C D A  length 14
A B D C A  length 22
A C B D A  length 18
shortest tour: 14`,
};

export const lesson: Lesson = {
  id: 'dm-connectivity-paths',
  title: 'Connectivity, Euler and Hamilton Paths',
  summary: 'Walks, paths and cycles; connected components; exploring a graph with BFS and DFS; and the two classic touring problems — Euler\'s bridges (easy, thanks to one degree test) and Hamilton\'s circuits (hard, the road to the traveling salesperson).',
  minutes: 22,
  objectives: [
    'Distinguish walks, trails, paths and cycles, and decide whether a graph is connected and how many components it has',
    'Trace breadth-first search and depth-first search by hand and implement both in C++ in $O(n + m)$ time',
    'State and prove the degree conditions for Euler circuits and Euler paths, and apply them (Königsberg)',
    'Explain why Hamilton circuits have no known easy test, use simple obstructions (leaves, bipartite parity) and Dirac\'s theorem',
    'Solve a tiny traveling salesperson instance by brute force and explain why brute force does not scale',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Walks, paths and cycles',
      blocks: [
        {
          type: 'p',
          text: 'Most questions about a graph are about *getting around* it: can the player reach the vault? What is the shortest route? Can a patrol visit every corridor once? The basic object is a sequence of vertices in which each consecutive pair is joined by an edge.',
        },
        {
          type: 'definition',
          term: 'Walk, trail, path, cycle',
          text: 'A **walk** of length $k$ is a sequence $v_0, v_1, \\dots, v_k$ with each $\\{v_{i-1}, v_i\\}$ an edge; its **length** is the number of edges, $k$. A **trail** is a walk with no repeated edge. A [[dm-path|path]] is a walk with no repeated vertex. A [[dm-cycle|cycle]] is a closed walk $v_0, \\dots, v_k = v_0$ with $k \\ge 3$ and no other repeated vertex.',
        },
        {
          type: 'figure',
          svg: FIG.walk,
          alt: 'Six vertices in two rows: 1, 2, 3 on top and 4, 5, 6 below. Edges 1-2, 2-3, 1-4, 2-5, 3-6, 4-5, 5-6, 2-4, 3-5. The path 1-4-5-6-3 is highlighted.',
          caption: 'The path $1, 4, 5, 6, 3$ (blue) has length $4$. The closed walk $2, 4, 5, 2$ is a cycle of length $3$ (a triangle).',
          maxWidth: 340,
        },
        {
          type: 'derivation',
          title: 'Classify the sequence $1, 2, 4, 5, 2, 3$',
          steps: [
            { tex: '\\{1,2\\}, \\{2,4\\}, \\{4,5\\}, \\{5,2\\}, \\{2,3\\} \\in E', why: 'Check each consecutive pair against the figure. All five are edges, so this is a **walk** of length $5$.' },
            { tex: '\\text{all five edges are different}', why: 'No edge is used twice, so it is also a **trail**.' },
            { tex: 'v_1 = v_4 = 2', why: 'Vertex $2$ appears twice, so it is **not a path**. It is not a cycle either: it does not return to its start.' },
            { tex: '1, 2, 3', why: 'Cutting out the detour $2, 4, 5, 2$ leaves the path $1, 2, 3$ between the same endpoints — shorter, too.' },
          ],
          result: 'A walk and a trail, but not a path. Removing the repeated loop gives a path from $1$ to $3$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every walk contains a path',
          text: 'Take a walk from $u$ to $v$. If some vertex appears twice, delete everything strictly between its two occurrences (and one copy of it): you still have a walk from $u$ to $v$, and it is strictly shorter. Repeat. Lengths cannot shrink forever, so the process stops at a walk with no repeated vertex — a path. Hence: **if there is a walk from $u$ to $v$, there is a path from $u$ to $v$**, and a *shortest* walk is always a path.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Check your textbook\'s vocabulary',
          text: 'Rosen calls a walk a "path" and a path a "simple path"; Levin and most CS texts use the names above. Proofs do not care about names, but you must know which object a theorem is talking about.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'In the same graph, what is the sequence $3, 5, 4, 2, 3$?',
      figure: {
        type: 'figure',
        svg: FIG.walkplain,
        alt: 'Six vertices: 1, 2, 3 on top and 4, 5, 6 below. Edges 1-2, 2-3, 1-4, 2-5, 3-6, 4-5, 5-6, 2-4, 3-5.',
        maxWidth: 300,
      },
      options: [
        { text: 'A cycle of length $4$', correct: true, why: 'Edges $35, 54, 42, 23$ all exist, it returns to $3$, has length $4 \\ge 3$ and repeats no other vertex.' },
        { text: 'A cycle of length $5$', why: 'Length counts edges, not the vertices listed. Five listed vertices with the first equal to the last give $4$ edges.' },
        { text: 'A path, because no edge is repeated', why: 'A path may not repeat a **vertex**, and this sequence returns to $3$. A closed walk like this is a cycle, not a path.' },
        { text: 'Not a walk: $5$ and $4$ are not adjacent', why: 'They are: the bottom edge $\\{4, 5\\}$ is in the graph.' },
      ],
      explanation: 'Check every step: $\\{3,5\\}$ (diagonal), $\\{5,4\\}$ (bottom), $\\{4,2\\}$ (diagonal), $\\{2,3\\}$ (top) are all edges. The sequence starts and ends at $3$, has $4$ edges, and visits $5, 4, 2$ once each. That is exactly a cycle of length $4$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Connected graphs and components',
      blocks: [
        {
          type: 'definition',
          term: 'Connected, component',
          text: 'An undirected graph is [[dm-connected-graph|connected]] if there is a path between every pair of vertices. A **connected component** is a maximal connected piece: a set of vertices that can all reach each other and that cannot be enlarged without breaking that property.',
        },
        {
          type: 'p',
          text: 'Write $u \\sim v$ if there is a walk from $u$ to $v$. This [[relation]] is reflexive (the walk of length $0$), symmetric (reverse the walk) and transitive (glue a $u$–$v$ walk to a $v$–$w$ walk — this is why we allow walks, which may repeat vertices, and then use the fact that every walk contains a path). So $\\sim$ is an equivalence relation, and its equivalence classes are exactly the components. Every vertex lies in exactly one component; an isolated vertex is a component on its own.',
        },
        {
          type: 'figure',
          svg: FIG.comps,
          alt: 'A graph with several separate pieces: a triangle with a tail, a four-vertex piece containing a triangle, a path of three vertices, and a single isolated vertex.',
          caption: 'A disconnected graph. How many components does it have? (Answer in the next question.)',
          maxWidth: 440,
        },
        {
          type: 'p',
          text: 'In a **directed** graph we distinguish two notions. It is **strongly connected** if for all $u, v$ there is a directed path from $u$ to $v$ (following the arrows); it is **weakly connected** if it becomes connected after we ignore the directions. A level with a one-way drop into a pit may be weakly but not strongly connected — the player can get in but not out.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Level validation',
          text: 'Build tools for games routinely run a connectivity check on the nav mesh: any polygon in a component other than the player\'s spawn is unreachable (a floating island, a door that was never connected). A vertex whose removal disconnects the graph is a **cut vertex** — in level design, a choke point every player must pass.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'How many connected components does the graph in the figure have?',
      figure: {
        type: 'figure',
        svg: FIG.comps,
        alt: 'A graph with several separate pieces: a triangle with a tail, a four-vertex piece containing a triangle, a path of three vertices, and a single isolated vertex.',
        maxWidth: 440,
      },
      answer: '4',
      hint: 'Start anywhere, mark everything you can reach, then pick an unmarked vertex and repeat. Do not forget vertices with no edges.',
      explanation: 'The triangle with its tail is one component, the four-vertex piece (a triangle with a pendant) is another, the three-vertex path is a third, and the lone vertex on the right is a fourth: $4$ in total. The common mistake is $3$ — forgetting that an isolated vertex is a component by itself (it is connected to itself by the length-$0$ path).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'True or false: if a graph contains a walk from $u$ to $v$ that repeats vertices, then it also contains a path from $u$ to $v$.',
      answer: true,
      explanation: 'True. Whenever a vertex repeats, cut out the closed detour between its two occurrences; the result is a shorter walk between the same endpoints. Repeating this must stop, and it stops at a walk with no repeated vertex — a path. This is why "connected" can be defined with walks or with paths: they give the same notion.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Breadth-first search: explore in rings',
      blocks: [
        {
          type: 'p',
          text: 'To find everything reachable from a start vertex $s$, a program must explore systematically. [[dm-bfs|Breadth-first search]] (BFS) explores in rings: first $s$, then all neighbours of $s$, then all their unvisited neighbours, and so on. A **queue** (first in, first out) keeps the frontier in order.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Start', text: 'Mark $s$ discovered with distance $d(s) = 0$ and put it in the queue.' },
            { title: 'Dequeue', text: 'Remove the vertex $v$ at the front of the queue and visit it.' },
            { title: 'Discover neighbours', text: 'For each neighbour $w$ of $v$ (here: in alphabetical order) that has not been discovered, set $d(w) = d(v) + 1$ and add $w$ to the back of the queue.' },
            { title: 'Repeat', text: 'Until the queue is empty. Every vertex reachable from $s$ has been visited exactly once.' },
          ],
        },
        {
          type: 'figure',
          svg: FIG.bfs,
          alt: 'Eight rooms in two rows, A B C D on top and E F G H below. BFS from A: visit order A, B, E, C, F, D, G, H with distances 0, 1, 1, 2, 2, 3, 3, 4. Tree edges A-B, A-E, B-C, B-F, C-D, C-G, D-H are blue; E-F, F-G, G-H are dashed.',
          caption: 'BFS from $A$: visit number and distance at each vertex. Blue edges form the **BFS tree** (the edge along which each vertex was discovered); dashed edges were checked but led to already-discovered vertices.',
        },
        {
          type: 'table',
          headers: ['Visit', 'Queue after visiting', 'Newly discovered'],
          rows: [
            ['$A$', '$B, E$', '$B, E$ at distance $1$'],
            ['$B$', '$E, C, F$', '$C, F$ at distance $2$'],
            ['$E$', '$C, F$', 'none ($A$, $F$ already discovered)'],
            ['$C$', '$F, D, G$', '$D, G$ at distance $3$'],
            ['$F$', '$D, G$', 'none'],
            ['$D$', '$G, H$', '$H$ at distance $4$'],
            ['$G$', '$H$', 'none'],
            ['$H$', 'empty', 'none — done'],
          ],
          caption: 'The BFS trace. Vertices leave the queue in order of distance: all distance-$1$ vertices before any distance-$2$ vertex.',
        },
        {
          type: 'code',
          title: 'bfs.cpp',
          runnable: true,
          code: CODE.bfs,
          output: OUT.bfs,
          annotations: [
            { lines: '9-11', text: 'The adjacency list of the figure. Sorted lists make the visiting order match the hand trace.' },
            { lines: '13', text: '`dist` doubles as the "discovered" mark: $-1$ means not seen yet.' },
            { lines: '19-21', text: 'FIFO: the oldest discovered vertex is visited next — that is what makes the search go ring by ring.' },
            { lines: '23-25', text: 'Mark a vertex when it is **discovered**, not when it is visited, so it never enters the queue twice.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why BFS runs in $O(n + m)$ time',
          text: 'Each vertex enters the queue at most once (it is marked on entry), so there are at most $n$ dequeues. When $v$ is dequeued we scan its list, $\\deg(v)$ steps. In total that is $\\sum_v \\deg(v) = 2m$ scan steps by the handshaking theorem. So the work is $O(n + m)$ — linear in the size of the adjacency list. The distances it computes are shortest-path lengths; the next lesson proves it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Run BFS on the graph below starting at $D$, scanning neighbours in alphabetical order. $D$ is visited first; arrange the **next six** vertices in the order BFS visits them, then $E$ comes last.',
      figure: {
        type: 'figure',
        svg: FIG.gridplain,
        alt: 'Eight rooms in two rows, A B C D on top and E F G H below. Edges A-B, B-C, C-D, A-E, B-F, C-G, D-H, E-F, F-G, G-H.',
      },
      lines: ['$C$', '$H$', '$B$', '$G$', '$A$', '$F$'],
      hint: 'Neighbours of $D$: $C, H$. Then the neighbours of $C$, then of $H$, …',
      explanation: 'Queue trace: visit $D$ → enqueue $C, H$. Visit $C$ → enqueue $B, G$ ($D$ is done). Visit $H$ → $G$ is already discovered, nothing new. Visit $B$ → enqueue $A, F$. Visit $G$ → nothing new ($F$, $H$ discovered). Visit $A$ → enqueue $E$. Visit $F$ → nothing new. Visit $E$. Order: $D, C, H, B, G, A, F, E$, with distances $0, 1, 1, 2, 2, 3, 3, 4$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Depth-first search: go deep, then backtrack',
      blocks: [
        {
          type: 'p',
          text: '[[dm-dfs|Depth-first search]] (DFS) is the explorer who always takes an unexplored corridor when one is available and backs up only at dead ends. Recursion (or an explicit **stack**, last in first out) remembers the way back.',
        },
        {
          type: 'figure',
          svg: FIG.dfs,
          alt: 'The same eight-room graph. DFS from A visits A, B, C, D, H, G, F, E. Tree edges A-B, B-C, C-D, D-H, H-G, G-F, F-E are purple; A-E, B-F, C-G are dashed.',
          caption: 'Recursive DFS from $A$ (neighbours alphabetical): $A, B, C, D, H, G, F, E$. It runs along the top row, drops to $H$ and comes back along the bottom. The purple tree is a long path, unlike BFS\'s bushy tree.',
        },
        {
          type: 'code',
          title: 'dfs_components.cpp',
          runnable: true,
          code: CODE.dfs,
          output: OUT.dfs,
          annotations: [
            { lines: '8-13', text: 'Mark, visit, then recurse into each unseen neighbour. When the loop ends the call returns: that is the backtrack.' },
            { lines: '17-19', text: 'The level graph plus an island $X$–$Y$ and an isolated room $Z$.' },
            { lines: '22-30', text: 'Every DFS started from an unseen vertex sweeps out exactly one component, so counting the starts counts components.' },
          ],
        },
        {
          type: 'table',
          headers: ['Feature', 'BFS', 'DFS'],
          rows: [
            ['Frontier', 'queue (FIFO)', 'stack / recursion (LIFO)'],
            ['Shape of search', 'rings around the start', 'one long branch at a time'],
            ['Time', '$O(n + m)$', '$O(n + m)$'],
            ['Best for', 'fewest-edge paths, bipartite test, "within $k$ steps"', 'components, cycle detection, topological order, maze generation'],
          ],
          caption: 'Both visit every reachable vertex once and every edge twice (once from each end).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'DFS in games',
          text: 'The classic "recursive backtracker" maze generator is a DFS on a grid that knocks down a wall each time it steps to an unvisited cell, choosing neighbours in random order. Flood fill in paint programs and "which tiles belong to this territory?" in strategy games are DFS (or BFS) on a grid graph. For very deep graphs prefer an explicit `std::stack`: recursion depth equals the length of the current branch and can overflow the call stack.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Run **recursive** DFS on this graph starting at $E$, scanning neighbours alphabetically. In which order are the vertices visited?',
      figure: {
        type: 'figure',
        svg: FIG.gridplain,
        alt: 'Eight rooms in two rows, A B C D on top and E F G H below. Edges A-B, B-C, C-D, A-E, B-F, C-G, D-H, E-F, F-G, G-H.',
      },
      options: [
        { text: '$E, A, F, B, G, C, H, D$', why: 'That is BFS from $E$: it visits both neighbours $A, F$ of $E$ before going deeper.' },
        { text: '$E, A, B, C, D, H, G, F$', correct: true, why: '$E \\to A$ (first alphabetically) $\\to B$ (A\'s only new neighbour) $\\to C$ (B\'s first new neighbour, before $F$) $\\to D \\to H \\to G \\to F$. Each step goes to the alphabetically first **unseen** neighbour.' },
        { text: '$E, F, G, H, D, C, B, A$', why: 'This starts with $F$, but $A$ comes before $F$ alphabetically, so DFS goes to $A$ first.' },
        { text: '$E, A, B, F, G, C, D, H$', why: 'At $B$ the unseen neighbours are $C$ and $F$; alphabetical order picks $C$, not $F$.' },
      ],
      explanation: 'DFS from $E$: neighbours $A, F$ → go to $A$. From $A$: $B$ (since $E$ is seen). From $B$: $C$ before $F$. From $C$: $D$ before $G$. From $D$: $H$. From $H$: $G$. From $G$: $F$ (the only unseen neighbour). Every vertex is now seen; the recursion unwinds. Order: $E, A, B, C, D, H, G, F$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Euler circuits: the bridges of Königsberg',
      blocks: [
        {
          type: 'p',
          text: 'In 1736 the city of Königsberg had seven bridges joining two river banks ($N$, $S$) and two islands ($I$, $E$). Could a citizen stroll across every bridge exactly once and return home? Euler answered no — and in doing so founded graph theory. Land masses are vertices, bridges are edges (a multigraph: two pairs of land masses have two bridges each).',
        },
        {
          type: 'figure',
          svg: FIG.konig,
          alt: 'Königsberg as a multigraph: N and I joined by two edges, S and I joined by two edges, and single edges N-E, S-E, I-E. Degrees: I 5, N 3, S 3, E 3.',
          caption: 'Königsberg\'s bridges as a multigraph. All four vertices have **odd** degree.',
          maxWidth: 400,
        },
        {
          type: 'definition',
          term: 'Euler circuit and Euler path',
          text: 'An [[dm-euler-circuit|Euler circuit]] is a closed trail that uses **every edge exactly once**. An **Euler path** is a trail (not necessarily closed) that uses every edge exactly once.',
        },
        {
          type: 'theorem',
          name: 'Euler\'s theorem',
          text: 'Let $G$ be a connected multigraph with at least one edge. (1) $G$ has an Euler circuit **if and only if** every vertex has even degree. (2) $G$ has an Euler path but no Euler circuit **if and only if** exactly two vertices have odd degree; every Euler path then starts at one of them and ends at the other.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the degrees must be even',
          text: 'Follow an Euler circuit. Every time it passes *through* a vertex it arrives on one edge and leaves on another, using up $2$ of that vertex\'s edges. The start vertex is left at the beginning and re-entered at the end — another pair. Since every edge is used exactly once, each vertex\'s edges are split into such pairs, so every degree is even. For an Euler path the two ends get one unpaired edge each, so exactly those two are odd.',
        },
        {
          type: 'derivation',
          title: 'Settle Königsberg',
          steps: [
            { tex: '\\deg(I) = 5,\\ \\deg(N) = 3,\\ \\deg(S) = 3,\\ \\deg(E) = 3', why: 'Count bridge-ends at each land mass. Check: $5 + 3 + 3 + 3 = 14 = 2 \\cdot 7$ bridges.' },
            { tex: '\\#\\{\\text{odd-degree vertices}\\} = 4', why: 'All four are odd.' },
            { tex: '4 \\ne 0 \\text{ and } 4 \\ne 2', why: 'A circuit needs $0$ odd vertices; a path needs exactly $2$.' },
          ],
          result: 'No Euler circuit and not even an Euler path: the stroll is impossible, however clever the route.',
        },
        {
          type: 'heading',
          text: 'Finding one when the degrees are right: Hierholzer and Fleury',
        },
        {
          type: 'p',
          text: 'Sufficiency is constructive. **Hierholzer\'s algorithm**: start anywhere and keep walking along unused edges. Because every degree is even, you can only get stuck back at your start, so you have closed a circuit. If unused edges remain, some vertex on your circuit touches one (the graph is connected); walk a new closed sub-tour from there and **splice** it into the circuit. Repeat until every edge is used — $O(m)$ time with adjacency lists. **Fleury\'s algorithm** builds the trail in one pass with one rule: never cross a **bridge** (an edge whose removal disconnects the unused part) unless there is no other choice. It is easier to do by hand but slower on a computer.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where this shows up',
          text: 'Snow plows, street sweepers and mail carriers want to cover every street once (the "Chinese postman" problem builds on Euler\'s theorem). Puzzle games like "draw this figure in one stroke" are Euler-path puzzles in disguise — the level designer just has to ensure $0$ or $2$ odd vertices. DNA sequencing assemblers find Euler paths in de Bruijn graphs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'The "house of Santa Claus" puzzle asks you to draw this figure in one stroke without retracing a line. What does Euler\'s theorem say?',
      figure: {
        type: 'figure',
        svg: FIG.house,
        alt: 'A house shape: square a-b-c-d with both diagonals a-c and b-d, and a roof vertex e joined to c and d.',
        maxWidth: 240,
      },
      options: [
        { text: 'It has an Euler circuit, so you can start anywhere', why: 'An Euler circuit needs every degree even, but $a$ and $b$ have degree $3$.' },
        { text: 'It has an Euler path that must start at $a$ or $b$ and end at the other', correct: true, why: 'Degrees: $a = 3$, $b = 3$, $c = 4$, $d = 4$, $e = 2$. Exactly two odd vertices, $a$ and $b$, so an Euler path exists and runs between them.' },
        { text: 'It has an Euler path starting at the roof $e$', why: '$e$ has even degree $2$. An Euler path in a graph with two odd vertices must start and end at those odd vertices.' },
        { text: 'It is impossible, because the diagonals cross', why: 'The crossing is an artefact of the drawing, not a vertex. Only degrees and connectivity matter.' },
      ],
      explanation: 'Count degrees: $a$ touches $b, d, c$ (3); $b$ touches $a, c, d$ (3); $c$ touches $b, d, a, e$ (4); $d$ touches $c, a, b, e$ (4); $e$ touches $c, d$ (2). Exactly two odd vertices, so there is an Euler path from $a$ to $b$ — for example $a, b, c, a, d, c, e, d, b$ — and no Euler circuit. Starting at $c$, $d$ or $e$ always leaves you stranded.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student claims that the graph made of **two separate triangles** has an Euler circuit. Find the first incorrect line.',
      lines: [
        'Each vertex lies on exactly one triangle, so every vertex has degree $2$.',
        'Therefore every vertex has even degree.',
        'By Euler\'s theorem, the graph has an Euler circuit.',
        'The circuit uses all $6$ edges exactly once and returns to its start.',
      ],
      errorLines: [3],
      explanation: 'Line 3 applies Euler\'s theorem without checking its hypothesis: the graph must be **connected**. A single closed trail cannot jump from one triangle to the other, so no Euler circuit exists, even though every degree is even. Each triangle separately has its own Euler circuit. Always check "connected (apart from isolated vertices)" before applying the degree test.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Hamilton circuits and the traveling salesperson',
      blocks: [
        {
          type: 'p',
          text: 'Change one word — visit every **vertex** exactly once instead of every edge — and the problem becomes dramatically harder.',
        },
        {
          type: 'definition',
          term: 'Hamilton path and circuit',
          text: 'A **Hamilton path** is a path that visits every vertex exactly once. A [[dm-hamilton-circuit|Hamilton circuit]] is a cycle that visits every vertex exactly once. A graph with a Hamilton circuit is called Hamiltonian.',
        },
        {
          type: 'figure',
          svg: FIG.hamilton,
          alt: 'Left: the cube graph drawn as a square inside a square with corners joined; an 8-vertex Hamilton circuit is highlighted in orange. Right: the 3 by 3 grid graph with vertices colored alternately blue (5 corners and center) and orange (4 edge midpoints).',
          caption: 'The cube graph is Hamiltonian (orange circuit). The $3 \\times 3$ grid is not — and the coloring explains why.',
        },
        {
          type: 'p',
          text: 'For Euler circuits a ten-second degree check decides everything. For Hamilton circuits **no efficient test is known**: deciding whether a graph is Hamiltonian is NP-complete, and finding a polynomial-time algorithm would solve the famous P vs NP problem. What we do have are partial tools:',
        },
        {
          type: 'list',
          items: [
            '**Obstruction — a vertex of degree $1$:** a Hamilton circuit enters and leaves every vertex, so it needs degree $\\ge 2$ everywhere.',
            '**Obstruction — unbalanced bipartite graph:** a circuit in a bipartite graph alternates sides, so it uses equally many vertices of each side. The $3 \\times 3$ grid is bipartite with $5$ blue and $4$ orange vertices, so it has no Hamilton circuit.',
            '**Sufficient — Dirac\'s theorem (1952):** if $G$ is simple with $n \\ge 3$ vertices and $\\deg(v) \\ge n/2$ for every $v$, then $G$ is Hamiltonian. (The converse fails: $C_n$ is Hamiltonian with all degrees $2$.)',
          ],
        },
        {
          type: 'heading',
          text: 'The traveling salesperson problem',
        },
        {
          type: 'p',
          text: 'In the [[dm-tsp|traveling salesperson problem]] (TSP) the graph is complete and weighted, and we want the Hamilton circuit of minimum total weight. Brute force lists all tours: fix the start city, order the other $n - 1$ in $(n-1)!$ ways, and divide by $2$ because each tour can be traversed in two directions — $\\frac{(n-1)!}{2}$ tours.',
        },
        {
          type: 'figure',
          svg: FIG.tsp,
          alt: 'Four cities A, B, C, D. Weights: AB 4, BC 2, CD 5, DA 3, AC 7, BD 6. The tour A-B-C-D-A is highlighted in green.',
          caption: 'Four cities. The green tour $A, B, C, D, A$ is the shortest.',
          maxWidth: 300,
        },
        {
          type: 'derivation',
          title: 'Brute-force TSP on four cities',
          steps: [
            { tex: '\\tfrac{(4-1)!}{2} = 3 \\text{ tours}', why: 'Fix $A$ as the start; the orders of $B, C, D$ pair up into $3$ tours and their reverses.' },
            { tex: 'A\\,B\\,C\\,D\\,A:\\ 4 + 2 + 5 + 3 = 14', why: 'Add the weights $AB, BC, CD, DA$.' },
            { tex: 'A\\,B\\,D\\,C\\,A:\\ 4 + 6 + 5 + 7 = 22', why: 'Weights $AB, BD, DC, CA$.' },
            { tex: 'A\\,C\\,B\\,D\\,A:\\ 7 + 2 + 6 + 3 = 18', why: 'Weights $AC, CB, BD, DA$.' },
          ],
          result: 'The shortest tour is $A, B, C, D, A$ with length $14$.',
        },
        {
          type: 'code',
          title: 'tsp_bruteforce.cpp',
          runnable: true,
          code: CODE.tsp,
          output: OUT.tsp,
          annotations: [
            { lines: '7-10', text: 'The weight matrix of the four cities (an adjacency matrix with weights).' },
            { lines: '12-15', text: '`next_permutation` lists all $3! = 6$ orders of $B, C, D$; skipping orders whose first city is "larger" than the last removes each tour\'s mirror image.' },
            { lines: '16-18', text: 'Tour length = sum of the four legs; keep the minimum.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why brute force dies',
          text: 'For $n = 20$ cities there are $\\frac{19!}{2} \\approx 6 \\times 10^{16}$ tours — about two years at a billion tours per second. Real solvers use dynamic programming ($O(n^2 2^n)$), branch and bound, or fast heuristics such as nearest neighbour and 2-opt, which give good (not guaranteed optimal) tours. Games use the same heuristics to order waypoints, patrol routes and delivery quests.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'How many different Hamilton circuits does the complete graph $K_6$ have? (A circuit and its reverse, or the same circuit started at a different vertex, count as one.)',
      answer: '60',
      hint: 'Fix the starting vertex, order the rest, then account for direction.',
      explanation: 'Fix vertex $1$ as the start (rotations of the same cycle are not new). The other $5$ vertices can follow in $5! = 120$ orders, and every cycle appears twice — once in each direction — so there are $\\frac{120}{2} = 60$ Hamilton circuits. In general $K_n$ has $\\frac{(n-1)!}{2}$. Answering $720 = 6!$ counts each circuit $12$ times ($6$ starting points × $2$ directions).',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Four cities have road lengths $AB = 10$, $AC = 15$, $AD = 20$, $BC = 35$, $BD = 25$, $CD = 30$. What is the length of the shortest tour that visits every city once and returns to the start?',
      answer: '80',
      hint: 'There are only $\\frac{3!}{2} = 3$ tours. Compute all three.',
      explanation: 'The three tours from $A$: $A\\,B\\,C\\,D\\,A = 10 + 35 + 30 + 20 = 95$; $A\\,B\\,D\\,C\\,A = 10 + 25 + 30 + 15 = 80$; $A\\,C\\,B\\,D\\,A = 15 + 35 + 25 + 20 = 95$. The minimum is $80$. Notice that the greedy "always go to the nearest unvisited city" route from $A$ ($A \\to B \\to D \\to C \\to A$) happens to find it here, but greedy can fail badly on other inputs.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'True or false: the $5 \\times 5$ grid graph (25 vertices, each joined to its horizontal and vertical neighbours) has a Hamilton circuit.',
      answer: false,
      explanation: 'False. Color the grid like a checkerboard: every edge joins a black square to a white one, so the graph is bipartite, with $13$ squares of one color and $12$ of the other. A Hamilton circuit alternates colors, so it would need equally many of each. Since $13 \\ne 12$, none exists. (Any grid with an odd number of vertices fails this way; the $4 \\times 4$ grid, by contrast, does have one.)',
    },
  ],
  takeaways: [
    'A path repeats no vertex; a cycle is a closed path of length $\\ge 3$. Every walk from $u$ to $v$ contains a path from $u$ to $v$.',
    'The components of a graph are the classes of the equivalence relation "is joined by a walk to"; DFS or BFS from each unvisited vertex finds them in $O(n + m)$ time.',
    'BFS uses a queue and explores in rings (giving fewest-edge distances); DFS uses recursion or a stack and explores one branch at a time.',
    'A connected multigraph has an Euler circuit iff all degrees are even, and an Euler path (not circuit) iff exactly two degrees are odd — Königsberg has four odd vertices, so neither exists.',
    'Hamilton circuits have no known efficient test; use obstructions (degree-1 vertices, unbalanced bipartite sides) or Dirac\'s theorem. TSP brute force checks $\\frac{(n-1)!}{2}$ tours, which explodes quickly.',
  ],
  reading: [
    { title: 'Levin, Discrete Mathematics: An Open Introduction — Euler paths and circuits', url: 'https://discrete.openmathbooks.org/dmoi3.html', source: 'book', note: 'Section 4.4 treats Euler and Hamilton paths with clear proofs and puzzles to practise on.' },
    { title: 'Seven Bridges of Königsberg (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg', source: 'wikipedia', note: 'The history of the problem, maps of the city and Euler\'s original argument.' },
    { title: 'Breadth-first search (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Breadth-first_search', source: 'wikipedia', note: 'Pseudocode, an animation and applications of BFS, with a link to its sibling depth-first search.' },
    { title: 'Travelling salesman problem (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Travelling_salesman_problem', source: 'wikipedia', note: 'Exact algorithms, heuristics and the problem\'s place in complexity theory.' },
  ],
};
