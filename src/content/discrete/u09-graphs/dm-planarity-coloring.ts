import type { Lesson } from '../../types';

// Figures (graph drawings generated with the graph kit; theme-aware SVG).
const FIG: Record<string, string> = {
  "cube": `<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg"><line x1="50.0" y1="30.0" x2="230.0" y2="30.0" stroke="currentColor" stroke-width="1.6"/><line x1="240.0" y1="40.0" x2="240.0" y2="200.0" stroke="currentColor" stroke-width="1.6"/><line x1="230.0" y1="210.0" x2="50.0" y2="210.0" stroke="currentColor" stroke-width="1.6"/><line x1="40.0" y1="200.0" x2="40.0" y2="40.0" stroke="currentColor" stroke-width="1.6"/><line x1="110.0" y1="85.0" x2="170.0" y2="85.0" stroke="currentColor" stroke-width="1.6"/><line x1="180.0" y1="95.0" x2="180.0" y2="145.0" stroke="currentColor" stroke-width="1.6"/><line x1="170.0" y1="155.0" x2="110.0" y2="155.0" stroke="currentColor" stroke-width="1.6"/><line x1="100.0" y1="145.0" x2="100.0" y2="95.0" stroke="currentColor" stroke-width="1.6"/><line x1="47.4" y1="36.8" x2="92.6" y2="78.2" stroke="currentColor" stroke-width="1.6"/><line x1="232.6" y1="36.8" x2="187.4" y2="78.2" stroke="currentColor" stroke-width="1.6"/><line x1="232.6" y1="203.2" x2="187.4" y2="161.8" stroke="currentColor" stroke-width="1.6"/><line x1="47.4" y1="203.2" x2="92.6" y2="161.8" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="240" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="240" cy="210" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="210" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="85" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="180" cy="85" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="180" cy="155" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="155" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="140" y="125" text-anchor="middle" font-size="13" class="t-blue">1</text><text x="140" y="60" text-anchor="middle" font-size="13" class="t-blue">2</text><text x="210" y="125" text-anchor="middle" font-size="13" class="t-blue">3</text><text x="140" y="190" text-anchor="middle" font-size="13" class="t-blue">4</text><text x="70" y="125" text-anchor="middle" font-size="13" class="t-blue">5</text><text x="270" y="125" text-anchor="start" font-size="13" class="t-blue">6 (outer)</text></svg>`,
  "exam": `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg"><line x1="60.0" y1="77.0" x2="60.0" y2="173.0" stroke="currentColor" stroke-width="1.6"/><line x1="72.0" y1="72.0" x2="178.0" y2="178.0" stroke="currentColor" stroke-width="1.6"/><line x1="77.0" y1="190.0" x2="173.0" y2="190.0" stroke="currentColor" stroke-width="1.6"/><line x1="77.0" y1="60.0" x2="173.0" y2="60.0" stroke="currentColor" stroke-width="1.6"/><line x1="206.8" y1="57.6" x2="313.2" y2="42.4" stroke="currentColor" stroke-width="1.6"/><line x1="203.4" y1="70.5" x2="316.6" y2="159.5" stroke="currentColor" stroke-width="1.6"/><line x1="330.0" y1="57.0" x2="330.0" y2="153.0" stroke="currentColor" stroke-width="1.6"/><line x1="206.8" y1="187.6" x2="313.2" y2="172.4" stroke="currentColor" stroke-width="1.6"/><circle cx="60" cy="60" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><text x="60" y="65" text-anchor="middle" font-size="14" class="t-blue">D</text><text x="60" y="36" text-anchor="middle" font-size="12" class="t-gray">Discrete · slot 1</text><circle cx="60" cy="190" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="60" y="195" text-anchor="middle" font-size="14" class="t-orange">C</text><text x="60" y="222" text-anchor="middle" font-size="12" class="t-gray">Calc · slot 2</text><circle cx="190" cy="190" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="190" y="195" text-anchor="middle" font-size="14" class="t-green">P</text><text x="190" y="222" text-anchor="middle" font-size="12" class="t-gray">Physics · slot 3</text><circle cx="190" cy="60" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="190" y="65" text-anchor="middle" font-size="14" class="t-orange">G</text><text x="190" y="36" text-anchor="middle" font-size="12" class="t-gray">Graphics · slot 2</text><circle cx="330" cy="40" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="330" y="45" text-anchor="middle" font-size="14" class="t-green">A</text><text x="330" y="16" text-anchor="middle" font-size="12" class="t-gray">AI · slot 3</text><circle cx="330" cy="170" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><text x="330" y="175" text-anchor="middle" font-size="14" class="t-blue">N</text><text x="330" y="202" text-anchor="middle" font-size="12" class="t-gray">Networks · slot 1</text></svg>`,
  "examplain": `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg"><line x1="60.0" y1="77.0" x2="60.0" y2="173.0" stroke="currentColor" stroke-width="1.6"/><line x1="72.0" y1="72.0" x2="178.0" y2="178.0" stroke="currentColor" stroke-width="1.6"/><line x1="77.0" y1="190.0" x2="173.0" y2="190.0" stroke="currentColor" stroke-width="1.6"/><line x1="77.0" y1="60.0" x2="173.0" y2="60.0" stroke="currentColor" stroke-width="1.6"/><line x1="206.8" y1="57.6" x2="313.2" y2="42.4" stroke="currentColor" stroke-width="1.6"/><line x1="203.4" y1="70.5" x2="316.6" y2="159.5" stroke="currentColor" stroke-width="1.6"/><line x1="330.0" y1="57.0" x2="330.0" y2="153.0" stroke="currentColor" stroke-width="1.6"/><line x1="206.8" y1="187.6" x2="313.2" y2="172.4" stroke="currentColor" stroke-width="1.6"/><circle cx="60" cy="60" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="65" text-anchor="middle" font-size="14">D</text><text x="60" y="36" text-anchor="middle" font-size="12" class="t-gray">Discrete</text><circle cx="60" cy="190" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="195" text-anchor="middle" font-size="14">C</text><text x="60" y="222" text-anchor="middle" font-size="12" class="t-gray">Calc</text><circle cx="190" cy="190" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="195" text-anchor="middle" font-size="14">P</text><text x="190" y="222" text-anchor="middle" font-size="12" class="t-gray">Physics</text><circle cx="190" cy="60" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="65" text-anchor="middle" font-size="14">G</text><text x="190" y="36" text-anchor="middle" font-size="12" class="t-gray">Graphics</text><circle cx="330" cy="40" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="330" y="45" text-anchor="middle" font-size="14">A</text><text x="330" y="16" text-anchor="middle" font-size="12" class="t-gray">AI</text><circle cx="330" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="330" y="175" text-anchor="middle" font-size="14">N</text><text x="330" y="202" text-anchor="middle" font-size="12" class="t-gray">Networks</text></svg>`,
  "k4": `<svg viewBox="0 0 520 235" xmlns="http://www.w3.org/2000/svg"><line x1="55.0" y1="40.0" x2="145.0" y2="40.0" stroke="currentColor" stroke-width="1.6"/><line x1="160.0" y1="55.0" x2="160.0" y2="145.0" stroke="currentColor" stroke-width="1.6"/><line x1="145.0" y1="160.0" x2="55.0" y2="160.0" stroke="currentColor" stroke-width="1.6"/><line x1="40.0" y1="145.0" x2="40.0" y2="55.0" stroke="currentColor" stroke-width="1.6"/><line x1="50.6" y1="50.6" x2="149.4" y2="149.4" stroke="currentColor" stroke-width="1.6"/><line x1="149.4" y1="50.6" x2="50.6" y2="149.4" stroke="currentColor" stroke-width="1.6"/><line x1="361.8" y1="37.5" x2="273.2" y2="172.5" stroke="currentColor" stroke-width="1.6"/><line x1="280.0" y1="185.0" x2="460.0" y2="185.0" stroke="currentColor" stroke-width="1.6"/><line x1="462.2" y1="177.1" x2="382.8" y2="127.9" stroke="currentColor" stroke-width="1.6"/><line x1="370.0" y1="105.0" x2="370.0" y2="40.0" stroke="currentColor" stroke-width="1.6"/><line x1="378.2" y1="37.5" x2="466.8" y2="172.5" stroke="currentColor" stroke-width="1.6"/><line x1="277.8" y1="177.1" x2="357.2" y2="127.9" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="40" y="45" text-anchor="middle" font-size="14">a</text><circle cx="160" cy="40" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="45" text-anchor="middle" font-size="14">b</text><circle cx="160" cy="160" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="165" text-anchor="middle" font-size="14">c</text><circle cx="40" cy="160" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="40" y="165" text-anchor="middle" font-size="14">d</text><circle cx="370" cy="25" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="370" y="30" text-anchor="middle" font-size="14">a</text><circle cx="265" cy="185" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="265" y="190" text-anchor="middle" font-size="14">b</text><circle cx="475" cy="185" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="475" y="190" text-anchor="middle" font-size="14">c</text><circle cx="370" cy="120" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="370" y="125" text-anchor="middle" font-size="14">d</text><text x="100" y="210" text-anchor="middle" font-size="13">K₄ with a crossing</text><text x="370" y="225" text-anchor="middle" font-size="13">the same K₄, plane drawing</text><text x="345" y="115" text-anchor="middle" font-size="13" class="t-blue">f₁</text><text x="395" y="115" text-anchor="middle" font-size="13" class="t-blue">f₂</text><text x="370" y="170" text-anchor="middle" font-size="13" class="t-blue">f₃</text><text x="470" y="60" text-anchor="middle" font-size="13" class="t-blue">f₄ (outer)</text></svg>`,
  "k5k33": `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><line x1="143.6" y1="36.3" x2="66.4" y2="173.7" stroke="currentColor" stroke-width="1.6"/><line x1="156.4" y1="36.3" x2="233.6" y2="173.7" stroke="currentColor" stroke-width="1.6"/><line x1="73.0" y1="185.0" x2="227.0" y2="185.0" stroke="currentColor" stroke-width="1.6"/><line x1="150.0" y1="38.0" x2="150.0" y2="112.0" stroke="currentColor" stroke-width="1.6"/><line x1="70.8" y1="177.8" x2="139.2" y2="132.2" stroke="currentColor" stroke-width="1.6"/><line x1="229.2" y1="177.8" x2="160.8" y2="132.2" stroke="currentColor" stroke-width="1.6"/><line x1="138.6" y1="228.7" x2="71.4" y2="191.3" stroke="currentColor" stroke-width="1.6"/><line x1="161.4" y1="228.7" x2="228.6" y2="191.3" stroke="currentColor" stroke-width="1.6"/><line x1="150.0" y1="222.0" x2="150.0" y2="138.0" stroke="currentColor" stroke-width="2.6" class="s-red"/><line x1="411.3" y1="51.5" x2="458.0" y2="78.5" stroke="currentColor" stroke-width="1.6"/><line x1="469.3" y1="98.0" x2="469.3" y2="152.0" stroke="currentColor" stroke-width="1.6"/><line x1="458.0" y1="171.5" x2="411.3" y2="198.5" stroke="currentColor" stroke-width="1.6"/><line x1="388.7" y1="198.5" x2="342.0" y2="171.5" stroke="currentColor" stroke-width="1.6"/><line x1="330.7" y1="152.0" x2="330.7" y2="98.0" stroke="currentColor" stroke-width="1.6"/><line x1="342.0" y1="78.5" x2="388.7" y2="51.5" stroke="currentColor" stroke-width="1.6"/><line x1="400.0" y1="58.0" x2="400.0" y2="192.0" stroke="currentColor" stroke-width="1.6"/><line x1="458.0" y1="91.5" x2="342.0" y2="158.5" stroke="currentColor" stroke-width="2.6" class="s-red"/><path d="M470.3,178.0 Q475.3,242.6 400.0,262.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M400.0,262.0 Q244.3,220.9 323.7,96.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M137.6,238.9 Q82.6,256.4 12.0,258.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12.0,258.0 Q-22.2,80.3 137.6,29.0" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="150" cy="25" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="30" text-anchor="middle" font-size="14">a</text><circle cx="60" cy="185" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="190" text-anchor="middle" font-size="14">b</text><circle cx="240" cy="185" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="240" y="190" text-anchor="middle" font-size="14">c</text><circle cx="150" cy="125" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="130" text-anchor="middle" font-size="14">d</text><circle cx="150" cy="235" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="240" text-anchor="middle" font-size="14">e</text><circle cx="400" cy="45" r="13" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="469.3" cy="85" r="13" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><circle cx="469.3" cy="165" r="13" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="400" cy="205" r="13" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><circle cx="330.7" cy="165" r="13" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="330.7" cy="85" r="13" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><circle cx="400" cy="262" r="0.01" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="258" r="0.01" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="295" text-anchor="middle" font-size="13">K₅: one crossing remains</text><text x="400" y="295" text-anchor="middle" font-size="13">K₃,₃: one crossing remains</text></svg>`,
  "map": `<svg viewBox="-5 -5 330 220" xmlns="http://www.w3.org/2000/svg"><polygon points="160.0,56.0 160.0,-0.0 320.0,0.0 320.0,56.0 209.5,91.9" fill="currentColor" fill-opacity="0.28" class="f-blue" stroke="currentColor" stroke-width="1.6"/><polygon points="209.5,91.9 320.0,56.0 320.0,210.0 234.1,210.0 190.6,150.1" fill="currentColor" fill-opacity="0.28" class="f-orange" stroke="currentColor" stroke-width="1.6"/><polygon points="190.6,150.1 234.1,210.0 85.9,210.0 129.4,150.1" fill="currentColor" fill-opacity="0.28" class="f-blue" stroke="currentColor" stroke-width="1.6"/><polygon points="129.4,150.1 85.9,210.0 0.0,210.0 0.0,56.0 110.5,91.9" fill="currentColor" fill-opacity="0.28" class="f-orange" stroke="currentColor" stroke-width="1.6"/><polygon points="110.5,91.9 0.0,56.0 0.0,0.0 160.0,-0.0 160.0,56.0" fill="currentColor" fill-opacity="0.28" class="f-green" stroke="currentColor" stroke-width="1.6"/><polygon points="160.0,56.0 209.5,91.9 190.6,150.1 129.4,150.1 110.5,91.9" fill="currentColor" fill-opacity="0.32" class="f-purple" stroke="currentColor" stroke-width="1.6"/><line x1="160.0" y1="108.0" x2="215.8" y2="43.3" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="215.8" y1="43.3" x2="250.4" y2="132.7" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="160.0" y1="108.0" x2="250.4" y2="132.7" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="250.4" y1="132.7" x2="160.0" y2="188.0" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="160.0" y1="108.0" x2="160.0" y2="188.0" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="160.0" y1="188.0" x2="69.6" y2="132.7" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="160.0" y1="108.0" x2="69.6" y2="132.7" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="69.6" y1="132.7" x2="104.2" y2="43.3" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="160.0" y1="108.0" x2="104.2" y2="43.3" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="104.2" y1="43.3" x2="215.8" y2="43.3" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><circle cx="215.8" cy="43.3" r="5" fill="currentColor"/><circle cx="250.4" cy="132.7" r="5" fill="currentColor"/><circle cx="160.0" cy="188.0" r="5" fill="currentColor"/><circle cx="69.6" cy="132.7" r="5" fill="currentColor"/><circle cx="104.2" cy="43.3" r="5" fill="currentColor"/><circle cx="160.0" cy="108.0" r="5" fill="currentColor"/></svg>`,
  "w5": `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg"><line x1="120.0" y1="100.0" x2="120.0" y2="45.0" stroke="currentColor" stroke-width="1.6"/><line x1="132.1" y1="38.8" x2="188.7" y2="79.9" stroke="currentColor" stroke-width="1.6"/><line x1="134.3" y1="110.4" x2="186.5" y2="93.3" stroke="currentColor" stroke-width="1.6"/><line x1="196.2" y1="103.0" x2="174.6" y2="169.5" stroke="currentColor" stroke-width="1.6"/><line x1="128.8" y1="127.1" x2="161.2" y2="171.7" stroke="currentColor" stroke-width="1.6"/><line x1="155.0" y1="183.8" x2="85.0" y2="183.8" stroke="currentColor" stroke-width="1.6"/><line x1="111.2" y1="127.1" x2="78.8" y2="171.7" stroke="currentColor" stroke-width="1.6"/><line x1="65.4" y1="169.5" x2="43.8" y2="103.0" stroke="currentColor" stroke-width="1.6"/><line x1="105.7" y1="110.4" x2="53.5" y2="93.3" stroke="currentColor" stroke-width="1.6"/><line x1="51.3" y1="79.9" x2="107.9" y2="38.8" stroke="currentColor" stroke-width="1.6"/><circle cx="120" cy="115" r="15" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-purple f-purple"/><text x="120" y="120" text-anchor="middle" font-size="14" class="t-purple">4</text><circle cx="120" cy="30" r="15" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><text x="120" y="35" text-anchor="middle" font-size="14" class="t-blue">1</text><circle cx="200.8" cy="88.7" r="15" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="200.8" y="93.7" text-anchor="middle" font-size="14" class="t-orange">2</text><circle cx="170" cy="183.8" r="15" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><text x="170" y="188.8" text-anchor="middle" font-size="14" class="t-blue">1</text><circle cx="70" cy="183.8" r="15" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="70" y="188.8" text-anchor="middle" font-size="14" class="t-orange">2</text><circle cx="39.2" cy="88.7" r="15" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="39.2" y="93.7" text-anchor="middle" font-size="14" class="t-green">3</text></svg>`,
  "w6": `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg"><line x1="120.0" y1="102.0" x2="120.0" y2="43.0" stroke="currentColor" stroke-width="1.6"/><line x1="131.3" y1="36.5" x2="182.3" y2="66.0" stroke="currentColor" stroke-width="1.6"/><line x1="131.3" y1="108.5" x2="182.3" y2="79.0" stroke="currentColor" stroke-width="1.6"/><line x1="193.6" y1="85.5" x2="193.6" y2="144.5" stroke="currentColor" stroke-width="1.6"/><line x1="131.3" y1="121.5" x2="182.3" y2="151.0" stroke="currentColor" stroke-width="1.6"/><line x1="182.3" y1="164.0" x2="131.3" y2="193.5" stroke="currentColor" stroke-width="1.6"/><line x1="120.0" y1="128.0" x2="120.0" y2="187.0" stroke="currentColor" stroke-width="1.6"/><line x1="108.7" y1="193.5" x2="57.7" y2="164.0" stroke="currentColor" stroke-width="1.6"/><line x1="108.7" y1="121.5" x2="57.7" y2="151.0" stroke="currentColor" stroke-width="1.6"/><line x1="46.4" y1="144.5" x2="46.4" y2="85.5" stroke="currentColor" stroke-width="1.6"/><line x1="108.7" y1="108.5" x2="57.7" y2="79.0" stroke="currentColor" stroke-width="1.6"/><line x1="57.7" y1="66.0" x2="108.7" y2="36.5" stroke="currentColor" stroke-width="1.6"/><circle cx="120" cy="115" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="120" cy="30" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="193.6" cy="72.5" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="193.6" cy="157.5" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="120" cy="200" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="46.4" cy="157.5" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="46.4" cy="72.5" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
};

// Runnable C++ examples and their exact output.
const CODE: Record<string, string> = {
  "greedy": `#include <cstdio>
#include <string>
#include <vector>

// Greedy coloring: give each vertex, in the given order, the smallest color
// not already used by a colored neighbour. Returns the number of colors used.
int greedyColor(const std::vector<std::vector<int>>& adj, const std::vector<int>& order,
                std::vector<int>& color) {
    color.assign(adj.size(), -1);
    int used = 0;
    for (int v : order) {
        std::vector<bool> taken(adj.size() + 1, false);
        for (int w : adj[v])
            if (color[w] != -1) taken[color[w]] = true;
        int c = 0;
        while (taken[c]) ++c;  // smallest free color
        color[v] = c;
        if (c + 1 > used) used = c + 1;
    }
    return used;
}

int main() {
    const std::string name = "DCPGAN";  // Discrete, Calc, Physics, Graphics, AI, Networks
    std::vector<std::vector<int>> adj(6);
    auto conflict = [&](int u, int v) { adj[u].push_back(v); adj[v].push_back(u); };
    conflict(0, 1); conflict(0, 2); conflict(1, 2); conflict(0, 3);  // D-C D-P C-P D-G
    conflict(3, 4); conflict(3, 5); conflict(4, 5); conflict(2, 5);  // G-A G-N A-N P-N

    std::vector<int> color;
    for (const auto& order : {std::vector<int>{0, 1, 2, 3, 4, 5},    // D C P G A N
                              std::vector<int>{0, 2, 3, 5, 1, 4}}) { // D P G N C A
        int k = greedyColor(adj, order, color);
        std::printf("order");
        for (int v : order) std::printf(" %c", name[v]);
        std::printf(": %d time slots |", k);
        for (int v = 0; v < 6; ++v) std::printf(" %c=%d", name[v], color[v] + 1);
        std::printf("\\n");
    }
}`,
};

const OUT: Record<string, string> = {
  "greedy": `order D C P G A N: 4 time slots | D=1 C=2 P=3 G=2 A=1 N=4
order D P G N C A: 3 time slots | D=1 C=3 P=2 G=2 A=3 N=1`,
};

export const lesson: Lesson = {
  id: 'dm-planarity-coloring',
  title: 'Planar Graphs and Graph Coloring',
  summary: 'Which graphs can be drawn without crossings? Euler\'s formula $v - e + f = 2$, why $K_5$ and $K_{3,3}$ can never be untangled, and coloring: chromatic number, the four color theorem, greedy coloring in C++, and scheduling with colors.',
  minutes: 22,
  objectives: [
    'Decide whether a drawing is a plane drawing, count its faces, and apply Euler\'s formula $v - e + f = 2$ (with its proof sketch)',
    'Derive $e \\le 3v - 6$ (and $e \\le 2v - 4$ without triangles) and use them to prove $K_5$ and $K_{3,3}$ non-planar',
    'Find the chromatic number of small graphs using lower bounds (cliques, odd cycles) and explicit colorings',
    'State the four color theorem, explain the map-to-graph translation, and prove the six color theorem',
    'Implement greedy coloring, explain why vertex order matters, and model exam scheduling, register allocation and frequency assignment as coloring problems',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Planar graphs and faces',
      blocks: [
        {
          type: 'p',
          text: 'A circuit-board designer wants to route copper traces between components without two traces crossing. A level designer wants corridors that never pass over each other. Both are asking whether a graph can be drawn in the plane without crossings.',
        },
        {
          type: 'definition',
          term: 'Planar graph',
          text: 'A graph is [[dm-planar-graph|planar]] if it **can** be drawn in the plane with no two edges crossing (edges may meet only at shared endpoints). Such a drawing is a **plane drawing**. It divides the plane into regions called **faces**, including one unbounded **outer face**.',
        },
        {
          type: 'figure',
          svg: FIG.k4,
          alt: 'Left: K4 drawn as a square with both diagonals crossing. Right: the same K4 drawn as a triangle a, b, c with d in the middle joined to all three corners; its four faces f1, f2, f3 and the outer face f4 are labeled.',
          caption: 'The left drawing has a crossing, but $K_4$ is still planar: the right drawing has none. It has $4$ faces — three triangles inside plus the outer face.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Planar is a property of the graph, not the drawing',
          text: 'A messy drawing with crossings proves nothing. To show a graph **is** planar, exhibit one plane drawing. To show it is **not**, you need an argument that rules out every possible drawing — which is what Euler\'s formula will give us.',
        },
        {
          type: 'p',
          text: 'Faces are counted in a specific plane drawing, but (for connected planar graphs) every plane drawing of the same graph has the same number of faces. That surprising fact is a consequence of the formula on the next card.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'True or false: if a drawing of a graph has two edges that cross, then the graph is not planar.',
      answer: false,
      explanation: 'False. Planarity asks whether **some** drawing avoids crossings. The square-with-diagonals drawing of $K_4$ has a crossing, yet moving one vertex inside the triangle of the others removes it. Only an argument about all drawings (such as $e \\le 3v - 6$) can prove non-planarity.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Euler\'s formula: v − e + f = 2',
      blocks: [
        {
          type: 'theorem',
          name: 'Euler\'s formula',
          tex: 'v - e + f = 2',
          text: 'For every **connected** plane drawing with $v$ vertices, $e$ edges and $f$ faces (counting the outer face).',
        },
        {
          type: 'figure',
          svg: FIG.cube,
          alt: 'The cube graph drawn in the plane as a small square inside a large square, corners joined; faces numbered 1 to 6, with 6 the outer face.',
          caption: 'The cube graph: $v = 8$, $e = 12$, and $6$ faces (the inner square, four trapezoids and the outside) — like the $6$ faces of a cube.',
          maxWidth: 340,
        },
        {
          type: 'derivation',
          title: 'Check the formula on two examples',
          steps: [
            { tex: 'K_4:\\quad 4 - 6 + 4 = 2', why: 'The plane drawing of $K_4$ above: $4$ vertices, $\\binom{4}{2} = 6$ edges, $4$ faces.' },
            { tex: '\\text{cube}:\\quad 8 - 12 + 6 = 2', why: 'Count from the figure. This is also Euler\'s polyhedron formula $V - E + F = 2$ for the cube.' },
          ],
          result: 'Both give $2$, as the theorem promises.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Proof sketch: induction on the number of edges',
          text: 'Fix $v$ and induct on $e$. A connected graph with no cycle is a tree (next unit), which has $e = v - 1$ edges and only the outer face, so $v - (v - 1) + 1 = 2$. Otherwise some edge lies on a cycle. In a plane drawing a cycle separates the plane into an inside and an outside, so that edge has **different** faces on its two sides. Delete it: the two faces merge into one, the graph stays connected (the rest of the cycle still links its endpoints), $e$ drops by $1$ and $f$ drops by $1$, so $v - e + f$ is unchanged. By the induction hypothesis the smaller graph gives $2$, so the original does too. $\\blacksquare$',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'From polyhedra to graphs',
          text: 'Euler stated $V - E + F = 2$ for convex polyhedra in 1750. Squash a polyhedron flat by looking through one face (it becomes the outer face) and you get a plane graph — that is exactly the cube figure above. The number $2$ is the **Euler characteristic** of the sphere; on a torus (a donut-shaped world, like a game map that wraps around both ways) it becomes $0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A connected planar graph has $10$ vertices and $15$ edges. How many faces does every plane drawing of it have (including the outer face)?',
      label: '$f =$',
      answer: '7',
      explanation: 'Euler\'s formula: $f = 2 - v + e = 2 - 10 + 15 = 7$. Because the right side depends only on $v$ and $e$, every plane drawing of this graph has exactly $7$ faces. (The Petersen graph also has $10$ vertices and $15$ edges, but it is not planar, so the formula does not apply to it.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Why K₅ and K₃,₃ are not planar',
      blocks: [
        {
          type: 'p',
          text: 'Euler\'s formula turns into a quick **edge budget**: a planar graph cannot have too many edges.',
        },
        {
          type: 'derivation',
          title: 'A simple planar graph with $v \\ge 3$ has $e \\le 3v - 6$',
          steps: [
            { tex: '\\text{each face is bounded by } \\ge 3 \\text{ edges}', why: 'The graph is simple (no loops or parallel edges), so no face can be bounded by just $1$ or $2$ edges. (Assume the graph is connected and has at least $3$ edges; other cases are easy.)' },
            { tex: '2e \\ge 3f', why: 'Count (face, boundary edge) pairs: each face contributes at least $3$, and each edge borders at most $2$ faces. Double counting again.' },
            { tex: 'f = 2 - v + e', why: 'Euler\'s formula.' },
            { tex: '2e \\ge 3(2 - v + e) = 6 - 3v + 3e', why: 'Substitute.' },
            { tex: 'e \\le 3v - 6', why: 'Rearrange: move $3e$ to the left and $2e$ to the right.' },
          ],
          result: 'Every simple planar graph with $v \\ge 3$ vertices has at most $3v - 6$ edges.',
        },
        {
          type: 'list',
          items: [
            '**$K_5$:** $v = 5$, $e = 10$, but $3v - 6 = 9$. Since $10 > 9$, $K_5$ is not planar.',
            '**$K_{3,3}$:** $v = 6$, $e = 9 \\le 12 = 3v - 6$, so this test says nothing. But $K_{3,3}$ is bipartite, so it has no triangles and every face needs $\\ge 4$ edges. Redo the argument with $2e \\ge 4f$ to get $e \\le 2v - 4 = 8$. Since $9 > 8$, $K_{3,3}$ is not planar.',
          ],
        },
        {
          type: 'figure',
          svg: FIG.k5k33,
          alt: 'Left: K5 drawn with only one crossing, a red edge from d to e crossing edge b-c. Right: K3,3 as a hexagon of alternating blue and orange vertices, one diagonal inside, one routed outside around the bottom, and a red diagonal that crosses the inside diagonal.',
          caption: 'The best you can do: each graph can be drawn with **one** crossing (red), never zero. $K_{3,3}$ is the classic "three houses, three utilities" puzzle.',
        },
        {
          type: 'theorem',
          name: 'Kuratowski\'s theorem (1930)',
          text: 'A graph is planar if and only if it does not contain a subdivision of $K_5$ or of $K_{3,3}$ (a copy of one of them in which edges may be replaced by paths). These two graphs are the only fundamental obstructions to planarity.',
        },
        {
          type: 'p',
          text: 'One more consequence will matter for coloring: **every simple planar graph has a vertex of degree at most $5$**. If all degrees were $\\ge 6$, the handshaking theorem would give $2e \\ge 6v$, so $e \\ge 3v > 3v - 6$.',
        },
        {
          type: 'graph',
          x: [2, 11],
          y: [0, 50],
          xStep: 1,
          yStep: 10,
          functions: [
            { expr: 'x(x-1)/2', label: 'edges of $K_n$: $\\frac{n(n-1)}{2}$', color: 'red', domain: [3, 11] },
            { expr: '3x - 6', label: 'planar budget $3n - 6$', color: 'blue', domain: [3, 11] },
          ],
          points: [
            { x: 'n', y: 'n(n-1)/2', color: 'red' },
            { x: 'n', y: '3n - 6', color: 'blue' },
          ],
          sliders: [{ name: 'n', min: 3, max: 10, step: 1, value: 5, label: 'number of vertices $n$' }],
          readouts: [
            { label: 'edges of $K_n$', expr: 'n(n-1)/2', digits: 0 },
            { label: '$3n - 6$', expr: '3n - 6', digits: 0 },
          ],
          caption: 'The quadratic edge count of $K_n$ overtakes the linear planar budget after $n = 4$: $K_3$ and $K_4$ fit ($3 \\le 3$, $6 \\le 6$), $K_5$ does not ($10 > 9$), and the gap only grows. Planar graphs are always **sparse**: $e = O(v)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'Find the first incorrect line in this "proof" that $K_{3,3}$ is planar.',
      lines: [
        '$K_{3,3}$ is simple, with $v = 6$ vertices and $e = 3 \\cdot 3 = 9$ edges.',
        'For simple planar graphs with $v \\ge 3$, $e \\le 3v - 6$.',
        'Here $3v - 6 = 12$, and indeed $9 \\le 12$.',
        'Since $K_{3,3}$ satisfies the inequality, $K_{3,3}$ is planar.',
      ],
      errorLines: [4],
      explanation: 'Line 4 runs the implication backwards (affirming the consequent). The theorem says *planar ⟹ $e \\le 3v - 6$*; it does not say that satisfying the inequality makes a graph planar. The inequality is a necessary condition only — useful for proving graphs **non**-planar. In fact $K_{3,3}$ is not planar: having no triangles it must satisfy $e \\le 2v - 4 = 8$, and $9 > 8$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'What is the largest number of edges a simple planar graph with $12$ vertices can have?',
      answer: '30',
      label: '$e_{\\max} =$',
      hint: 'Use the edge budget for simple planar graphs.',
      explanation: 'The bound gives $e \\le 3 \\cdot 12 - 6 = 30$, and it is achieved: the icosahedron (a 20-sided die) has $12$ vertices, $30$ edges and $20$ triangular faces. Check with Euler: $12 - 30 + 20 = 2$. A graph meets the bound exactly when every face, including the outer one, is a triangle (a "triangulation").',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Graph coloring and the chromatic number',
      blocks: [
        {
          type: 'definition',
          term: 'Proper coloring, chromatic number',
          text: 'A (proper) **coloring** of a graph assigns a color to each vertex so that **adjacent vertices get different colors**. The [[dm-chromatic-number|chromatic number]] $\\chi(G)$ is the smallest number of colors that suffices.',
        },
        {
          type: 'table',
          headers: ['Graph', '$\\chi(G)$', 'Reason'],
          rows: [
            ['$K_n$', '$n$', 'every two vertices are adjacent, so all colors differ'],
            ['$C_n$, $n$ even', '$2$', 'alternate two colors around the cycle'],
            ['$C_n$, $n$ odd', '$3$', 'alternating fails when you get back to the start'],
            ['bipartite (with an edge)', '$2$', 'color each part with its own color; conversely, a 2-coloring *is* a bipartition'],
            ['any graph with max degree $\\Delta$', '$\\le \\Delta + 1$', 'greedy coloring (below) never needs more'],
          ],
        },
        {
          type: 'p',
          text: 'Proving $\\chi(G) = k$ always takes **two** arguments: an explicit coloring with $k$ colors (upper bound) and a reason $k - 1$ colors cannot work (lower bound). Typical lower bounds: a **clique** $K_r$ inside $G$ forces $\\chi \\ge r$; an **odd cycle** forces $\\chi \\ge 3$.',
        },
        {
          type: 'figure',
          svg: FIG.w5,
          alt: 'The wheel W5: a purple hub labeled 4 joined to a 5-cycle whose vertices are colored 1, 2, 1, 2, 3 going clockwise from the top.',
          caption: 'The wheel $W_5$ (a hub joined to all vertices of $C_5$) needs $4$ colors.',
          maxWidth: 230,
        },
        {
          type: 'derivation',
          title: '$\\chi(W_5) = 4$',
          steps: [
            { tex: '\\chi(C_5) = 3', why: 'The rim is an odd cycle: alternating two colors fails when you return to the start, and colors $1, 2, 1, 2, 3$ work.' },
            { tex: '\\text{hub} \\sim \\text{every rim vertex}', why: 'The hub is adjacent to all five rim vertices, so it cannot reuse any of the $\\ge 3$ colors on the rim.' },
            { tex: '\\chi(W_5) \\ge 3 + 1 = 4', why: 'Lower bound.' },
            { tex: '\\chi(W_5) \\le 4', why: 'The coloring in the figure uses exactly $4$ colors and is proper.' },
          ],
          result: '$\\chi(W_5) = 4$, even though $W_5$ contains no $K_4$. Cliques are not the only reason a graph needs many colors.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Computing χ is hard',
          text: 'Deciding whether $\\chi(G) \\le 3$ is NP-complete, like the Hamilton circuit problem. For large graphs we use heuristics (like greedy coloring) that give good, not always optimal, colorings.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'What is the chromatic number of the wheel $W_6$ — a hub joined to every vertex of a 6-cycle?',
      figure: {
        type: 'figure',
        svg: FIG.w6,
        alt: 'A hexagon of six vertices with a hub in the middle joined to all six.',
        maxWidth: 220,
      },
      label: '$\\chi(W_6) =$',
      answer: '3',
      hint: 'Is the rim an even or an odd cycle?',
      explanation: 'The rim $C_6$ is an even cycle, so it can be colored with two alternating colors $1, 2, 1, 2, 1, 2$. The hub is adjacent to every rim vertex, so it needs a third color — and $3$ suffices. A lower bound of $3$ comes from any triangle (hub plus two neighbouring rim vertices). So $\\chi(W_6) = 3$, while $\\chi(W_5) = 4$: the parity of the rim makes the difference.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Map coloring and the four color theorem',
      blocks: [
        {
          type: 'p',
          text: 'Map makers color countries so that countries sharing a border get different colors. Turn the map into a graph — the **dual graph**: one vertex per region, an edge whenever two regions share a border (not just a corner point). The dual of a map is planar, so map coloring *is* coloring planar graphs.',
        },
        {
          type: 'figure',
          svg: FIG.map,
          alt: 'A rectangular map split into a central purple pentagon surrounded by five regions colored green, blue, orange, blue, orange. Dots in each region joined by dashed lines form the dual graph, a wheel with five spokes.',
          caption: 'A map whose dual graph (dashed) is the wheel $W_5$. The central country borders all five others, which form an odd ring — so this map really needs $4$ colors.',
          maxWidth: 360,
        },
        {
          type: 'theorem',
          name: 'Four color theorem',
          text: 'Every planar graph has chromatic number at most $4$. Equivalently, every map in the plane can be colored with four colors so that neighbouring regions differ.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: '124 years and a computer',
          text: 'Francis Guthrie conjectured it in 1852 while coloring a map of English counties. Alfred Kempe published a "proof" in 1879 that stood for eleven years until Percy Heawood found the flaw (and salvaged a proof of the **five** color theorem). Kenneth Appel and Wolfgang Haken finally proved it in 1976 by reducing it to $1\\,936$ configurations checked by computer — the first major theorem proved with essential computer help. A simpler computer proof followed in 1997, and in 2005 Georges Gonthier verified it completely in the Coq proof assistant.',
        },
        {
          type: 'p',
          text: 'Four colors is hard to prove; **six** colors takes one paragraph, using the fact that every planar graph has a vertex of degree $\\le 5$.',
        },
        {
          type: 'theorem',
          name: 'Six color theorem',
          text: 'Every simple planar graph can be properly colored with $6$ colors. *Proof by induction on $n$, the number of vertices.* If $n \\le 6$, give every vertex its own color. Otherwise pick a vertex $v$ of degree $\\le 5$. The graph $G - v$ is planar with $n - 1$ vertices, so by the induction hypothesis it has a $6$-coloring. The $\\le 5$ neighbours of $v$ use at most $5$ colors, leaving at least one of the $6$ free for $v$. $\\blacksquare$',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why removing a vertex keeps the graph planar',
          text: 'Erase $v$ and its edges from a plane drawing: what remains is still a drawing with no crossings. Planarity is inherited by every subgraph, which is exactly what lets the induction hypothesis apply to $G - v$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'Arrange the inductive step of the six color theorem proof (for a simple planar graph $G$ with $n > 6$ vertices).',
      lines: [
        'Because $G$ is simple and planar, $e \\le 3n - 6$, so some vertex $v$ has $\\deg(v) \\le 5$.',
        'Delete $v$: the graph $G - v$ is still simple and planar, with $n - 1$ vertices.',
        'By the induction hypothesis, $G - v$ has a proper coloring with $6$ colors.',
        'The at most $5$ neighbours of $v$ use at most $5$ of the $6$ colors.',
        'Give $v$ a color none of its neighbours uses; this is a proper $6$-coloring of $G$.',
      ],
      explanation: 'The structure is: find a low-degree vertex (Euler\'s formula via the edge budget), remove it, color the rest by induction, then put the vertex back with a spare color. Each line needs the one before it: you cannot apply the induction hypothesis before you have a smaller planar graph, and you cannot pick a spare color before you know the neighbours are colored.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Greedy coloring and scheduling',
      blocks: [
        {
          type: 'p',
          text: 'Coloring is really about **conflicts**. A university must schedule final exams; two courses that share a student cannot be at the same time. Make each course a vertex and join two courses that share a student. A proper coloring is a valid timetable (colors = time slots), and $\\chi(G)$ is the **fewest slots** possible.',
        },
        {
          type: 'figure',
          svg: FIG.exam,
          alt: 'Six courses: Discrete, Calc, Physics, Graphics, AI, Networks. Conflict edges: Discrete-Calc, Discrete-Physics, Calc-Physics, Discrete-Graphics, Graphics-AI, Graphics-Networks, AI-Networks, Physics-Networks. Colored with 3 slots: Discrete and Networks slot 1, Calc and Graphics slot 2, Physics and AI slot 3.',
          caption: 'An exam conflict graph colored with $3$ slots. It contains triangles (Discrete–Calc–Physics), so $3$ is optimal.',
          maxWidth: 400,
        },
        {
          type: 'p',
          text: '**Greedy coloring** goes through the vertices in some order and gives each one the smallest color not used by its already-colored neighbours. A vertex has at most $\\Delta$ neighbours, so some color among $1, \\dots, \\Delta + 1$ is always free: greedy never uses more than $\\Delta + 1$ colors. But the result depends on the **order**:',
        },
        {
          type: 'code',
          title: 'greedy_coloring.cpp',
          runnable: true,
          code: CODE.greedy,
          output: OUT.greedy,
          annotations: [
            { lines: '11-18', text: 'For each vertex in order: mark the colors of its colored neighbours as taken, then take the smallest free one.' },
            { lines: '12', text: 'At most $\\deg(v) \\le n - 1$ colors can be taken, so a free color always exists among the first $n$.' },
            { lines: '27-28', text: 'The conflict graph from the figure.' },
            { lines: '31-32', text: 'Two orders. The second puts the high-degree courses first ("Welsh–Powell" order).' },
          ],
        },
        {
          type: 'p',
          text: 'With the first order, Networks arrives last and finds slots $1$ (AI), $2$ (Graphics) and $3$ (Physics) all taken, so it opens a $4$th slot. Coloring the high-degree vertices first avoids this and finds an optimal $3$-coloring. In fact *some* order always makes greedy optimal — but finding it is as hard as computing $\\chi$.',
        },
        {
          type: 'list',
          items: [
            '**Register allocation:** compilers build an *interference graph* of variables that are alive at the same time; colors are CPU registers. Uncolorable variables are "spilled" to memory.',
            '**Frequency assignment:** radio towers (or Wi-Fi access points) that are close interfere; colors are frequency channels.',
            '**Sudoku:** a $9$-coloring of a fixed graph on $81$ cells with some colors given.',
            '**Games:** coloring a level\'s region graph so adjacent areas get different tile sets, or scheduling parallel jobs in a task graph so that jobs touching the same data never run in the same batch.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'How this is tested',
          text: 'Expect "find $\\chi(G)$ and prove it": give a coloring **and** a lower-bound argument (a clique, an odd cycle, or a hub over an odd cycle). Stating only a coloring proves an upper bound, not the chromatic number.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Greedy coloring of a conflict graph used $5$ colors. What can you conclude about its chromatic number?',
      options: [
        { text: '$\\chi(G) = 5$', why: 'Greedy is not guaranteed to be optimal; the exam example used $4$ colors with one order and $3$ with another.' },
        { text: '$\\chi(G) \\le 5$', correct: true, why: 'Greedy produced a valid $5$-coloring, so $5$ colors certainly suffice. That is an upper bound only.' },
        { text: '$\\chi(G) \\ge 5$', why: 'A lower bound needs a reason fewer colors are impossible (a $K_5$, for example). Greedy\'s output gives no such reason.' },
        { text: 'The graph has maximum degree exactly $4$', why: 'Greedy uses at most $\\Delta + 1$ colors, so $5$ colors only tells you $\\Delta \\ge 4$, not that $\\Delta = 4$.' },
      ],
      explanation: 'Any proper coloring with $k$ colors shows $\\chi(G) \\le k$. Greedy always produces a proper coloring, so we learn $\\chi(G) \\le 5$. To pin down $\\chi$ you also need a lower bound — and from $5 \\le \\Delta + 1$ we also learn $\\Delta \\ge 4$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Using this conflict graph, what is the minimum number of exam time slots needed?',
      figure: {
        type: 'figure',
        svg: FIG.examplain,
        alt: 'Six courses: Discrete, Calc, Physics, Graphics, AI, Networks. Conflict edges: Discrete-Calc, Discrete-Physics, Calc-Physics, Discrete-Graphics, Graphics-AI, Graphics-Networks, AI-Networks, Physics-Networks.',
        maxWidth: 400,
      },
      answer: '3',
      hint: 'Find a lower bound from a small clique, then try to build a coloring that matches it.',
      explanation: 'Lower bound: Discrete, Calc and Physics are pairwise in conflict (a triangle), so at least $3$ slots are needed. Upper bound: slot 1 = Discrete, Networks; slot 2 = Calc, Graphics; slot 3 = Physics, AI. Check every edge: no two courses in the same slot conflict. So the minimum is $\\chi = 3$. If you got $4$, you probably colored greedily in the order D, C, P, G, A, N — a valid timetable, but not the best one.',
    },
  ],
  takeaways: [
    'A graph is planar if *some* drawing has no crossings; a connected plane drawing satisfies Euler\'s formula $v - e + f = 2$.',
    'Simple planar graphs obey $e \\le 3v - 6$ (and $e \\le 2v - 4$ without triangles), which proves $K_5$ and $K_{3,3}$ non-planar; Kuratowski\'s theorem says these are the only obstructions.',
    'The chromatic number $\\chi(G)$ needs both a coloring (upper bound) and an obstruction such as a clique or odd cycle (lower bound).',
    'Every planar graph is 4-colorable (Appel–Haken, 1976, computer-assisted); the six color theorem follows by induction from the existence of a vertex of degree $\\le 5$.',
    'Greedy coloring uses at most $\\Delta + 1$ colors but depends on vertex order; coloring models exam timetables, register allocation and frequency assignment.',
  ],
  reading: [
    { title: 'Levin, Discrete Mathematics: An Open Introduction — Planar graphs and coloring', url: 'https://discrete.openmathbooks.org/dmoi3.html', source: 'book', note: 'Sections 4.3 and 4.4 prove Euler\'s formula and the non-planarity of $K_5$ and $K_{3,3}$, then turn to coloring.' },
    { title: 'Four color theorem (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Four_color_theorem', source: 'wikipedia', note: 'The long history, Kempe\'s flawed proof and how the computer-assisted proof works.' },
    { title: 'Planar graph (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Planar_graph', source: 'wikipedia', note: 'Euler\'s formula, Kuratowski\'s and Wagner\'s theorems and planarity testing in linear time.' },
    { title: 'Greedy coloring (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Greedy_coloring', source: 'wikipedia', note: 'How vertex orderings affect greedy coloring, with the Welsh–Powell and degeneracy orderings.' },
  ],
};
