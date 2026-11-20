import type { AlgoBlock, Lesson } from '../../types';

// ---- generated: figures, runnable examples and animation frames ----
const FIG: Record<string, string> = {
  "bplus": `<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg"><rect x="230.0" y="16" width="80" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="250.0" y="35" text-anchor="middle" font-size="12.5">30</text><text x="290.0" y="35" text-anchor="middle" font-size="12.5">60</text><line x1="270.0" y1="16" x2="270.0" y2="44" stroke="currentColor" stroke-width="0.8" class="s-gray"/><rect x="29.0" y="106" width="102" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="46.0" y="125" text-anchor="middle" font-size="12.5">5</text><text x="80.0" y="125" text-anchor="middle" font-size="12.5">12</text><line x1="63.0" y1="106" x2="63.0" y2="134" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="114.0" y="125" text-anchor="middle" font-size="12.5">21</text><line x1="97.0" y1="106" x2="97.0" y2="134" stroke="currentColor" stroke-width="0.8" class="s-gray"/><line x1="230.0" y1="44" x2="80" y2="106" stroke="currentColor" stroke-width="1.4"/><path d="M133.0,120 L211,120" stroke="currentColor" stroke-width="1.4" class="s-green" stroke-dasharray="4 3"/><path d="M219,120 L210,115 L210,125 Z" fill="currentColor" class="f-green"/><rect x="219.0" y="106" width="102" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="236.0" y="125" text-anchor="middle" font-size="12.5">30</text><text x="270.0" y="125" text-anchor="middle" font-size="12.5">41</text><line x1="253.0" y1="106" x2="253.0" y2="134" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="304.0" y="125" text-anchor="middle" font-size="12.5">52</text><line x1="287.0" y1="106" x2="287.0" y2="134" stroke="currentColor" stroke-width="0.8" class="s-gray"/><line x1="270.0" y1="44" x2="270" y2="106" stroke="currentColor" stroke-width="1.4"/><path d="M323.0,120 L401,120" stroke="currentColor" stroke-width="1.4" class="s-green" stroke-dasharray="4 3"/><path d="M409,120 L400,115 L400,125 Z" fill="currentColor" class="f-green"/><rect x="409.0" y="106" width="102" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="426.0" y="125" text-anchor="middle" font-size="12.5">60</text><text x="460.0" y="125" text-anchor="middle" font-size="12.5">75</text><line x1="443.0" y1="106" x2="443.0" y2="134" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="494.0" y="125" text-anchor="middle" font-size="12.5">88</text><line x1="477.0" y1="106" x2="477.0" y2="134" stroke="currentColor" stroke-width="0.8" class="s-gray"/><line x1="310.0" y1="44" x2="460" y2="106" stroke="currentColor" stroke-width="1.4"/><text x="270" y="168" text-anchor="middle" font-size="12" class="t-gray">internal nodes route searches; leaves hold the keys and link left to right for range scans</text></svg>`,
  "fib": `<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg"><line x1="165.7" y1="35.2" x2="104.3" y2="74.8" stroke="currentColor" stroke-width="1.6"/><line x1="79.6" y1="97.4" x2="55.4" y2="128.6" stroke="currentColor" stroke-width="1.6"/><line x1="38.9" y1="157.8" x2="28.6" y2="184.2" stroke="currentColor" stroke-width="1.6"/><line x1="100.4" y1="97.4" x2="124.6" y2="128.6" stroke="currentColor" stroke-width="1.6"/><line x1="194.3" y1="35.2" x2="255.7" y2="74.8" stroke="currentColor" stroke-width="1.6"/><line x1="259.6" y1="97.4" x2="235.4" y2="128.6" stroke="currentColor" stroke-width="1.6"/><circle cx="180.0" cy="26" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180.0" y="31.0" text-anchor="middle" font-size="14">5</text><text x="180.0" y="57" text-anchor="middle" font-size="11" class="t-gray">+1</text><circle cx="90.0" cy="84" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90.0" y="89.0" text-anchor="middle" font-size="14">3</text><text x="90.0" y="115" text-anchor="middle" font-size="11" class="t-gray">+1</text><circle cx="45.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="45.0" y="147.0" text-anchor="middle" font-size="14">2</text><text x="45.0" y="173" text-anchor="middle" font-size="11" class="t-gray">+1</text><circle cx="22.5" cy="200" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="22.5" y="205.0" text-anchor="middle" font-size="14">1</text><text x="22.5" y="231" text-anchor="middle" font-size="11" class="t-gray">0</text><circle cx="135.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="135.0" y="147.0" text-anchor="middle" font-size="14">4</text><text x="135.0" y="173" text-anchor="middle" font-size="11" class="t-gray">0</text><circle cx="270.0" cy="84" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="270.0" y="89.0" text-anchor="middle" font-size="14">7</text><text x="270.0" y="115" text-anchor="middle" font-size="11" class="t-gray">+1</text><circle cx="225.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="225.0" y="147.0" text-anchor="middle" font-size="14">6</text><text x="225.0" y="173" text-anchor="middle" font-size="11" class="t-gray">0</text></svg>`,
  "rb234": `<svg viewBox="0 0 540 222" xmlns="http://www.w3.org/2000/svg"><line x1="135.9" y1="33.4" x2="89.1" y2="64.6" stroke="currentColor" stroke-width="1.6"/><line x1="64.8" y1="87.6" x2="47.7" y2="110.4" stroke="currentColor" stroke-width="1.6"/><line x1="43.5" y1="139.9" x2="50.2" y2="158.1" stroke="currentColor" stroke-width="1.6"/><line x1="85.2" y1="87.6" x2="102.3" y2="110.4" stroke="currentColor" stroke-width="1.6"/><line x1="164.1" y1="33.4" x2="210.9" y2="64.6" stroke="currentColor" stroke-width="1.6"/><line x1="214.8" y1="87.6" x2="197.7" y2="110.4" stroke="currentColor" stroke-width="1.6"/><line x1="235.2" y1="87.6" x2="252.3" y2="110.4" stroke="currentColor" stroke-width="1.6"/><line x1="256.5" y1="139.9" x2="249.8" y2="158.1" stroke="currentColor" stroke-width="1.6"/><line x1="268.5" y1="139.9" x2="275.2" y2="158.1" stroke="currentColor" stroke-width="1.6"/><circle cx="150.0" cy="24" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150.0" y="28.7" text-anchor="middle" font-size="13">13</text><circle cx="75.0" cy="74" r="17" fill="currentColor" class="f-red"/><text x="75.0" y="78.7" text-anchor="middle" font-size="13" style="fill: #ffffff" font-weight="bold">8</text><circle cx="37.5" cy="124" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="37.5" y="128.7" text-anchor="middle" font-size="13">1</text><circle cx="56.2" cy="174" r="17" fill="currentColor" class="f-red"/><text x="56.2" y="178.7" text-anchor="middle" font-size="13" style="fill: #ffffff" font-weight="bold">6</text><circle cx="112.5" cy="124" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="112.5" y="128.7" text-anchor="middle" font-size="13">11</text><circle cx="225.0" cy="74" r="17" fill="currentColor" class="f-red"/><text x="225.0" y="78.7" text-anchor="middle" font-size="13" style="fill: #ffffff" font-weight="bold">17</text><circle cx="187.5" cy="124" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="187.5" y="128.7" text-anchor="middle" font-size="13">15</text><circle cx="262.5" cy="124" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="262.5" y="128.7" text-anchor="middle" font-size="13">25</text><circle cx="243.8" cy="174" r="17" fill="currentColor" class="f-red"/><text x="243.8" y="178.7" text-anchor="middle" font-size="13" style="fill: #ffffff" font-weight="bold">22</text><circle cx="281.2" cy="174" r="17" fill="currentColor" class="f-red"/><text x="281.2" y="178.7" text-anchor="middle" font-size="13" style="fill: #ffffff" font-weight="bold">27</text><text x="150" y="212" text-anchor="middle" font-size="12" class="t-gray">red–black tree (black height 2)</text><circle cx="150.0" cy="24" r="17" fill="currentColor"/><text x="150.0" y="28.7" text-anchor="middle" font-size="13" font-weight="bold" style="fill: var(--surface, #fff)">13</text><circle cx="37.5" cy="124" r="17" fill="currentColor"/><text x="37.5" y="128.7" text-anchor="middle" font-size="13" font-weight="bold" style="fill: var(--surface, #fff)">1</text><circle cx="112.5" cy="124" r="17" fill="currentColor"/><text x="112.5" y="128.7" text-anchor="middle" font-size="13" font-weight="bold" style="fill: var(--surface, #fff)">11</text><circle cx="187.5" cy="124" r="17" fill="currentColor"/><text x="187.5" y="128.7" text-anchor="middle" font-size="13" font-weight="bold" style="fill: var(--surface, #fff)">15</text><circle cx="262.5" cy="124" r="17" fill="currentColor"/><text x="262.5" y="128.7" text-anchor="middle" font-size="13" font-weight="bold" style="fill: var(--surface, #fff)">25</text><rect x="376.0" y="26" width="78" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="389.0" y="45" text-anchor="middle" font-size="13">8</text><text x="415.0" y="45" text-anchor="middle" font-size="13">13</text><line x1="402.0" y1="26" x2="402.0" y2="54" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="441.0" y="45" text-anchor="middle" font-size="13">17</text><line x1="428.0" y1="26" x2="428.0" y2="54" stroke="currentColor" stroke-width="0.8" class="s-gray"/><rect x="309.0" y="116" width="52" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="322.0" y="135" text-anchor="middle" font-size="13">1</text><text x="348.0" y="135" text-anchor="middle" font-size="13">6</text><line x1="335.0" y1="116" x2="335.0" y2="144" stroke="currentColor" stroke-width="0.8" class="s-gray"/><line x1="376.0" y1="54" x2="335" y2="116" stroke="currentColor" stroke-width="1.4"/><rect x="375.0" y="116" width="26" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="388.0" y="135" text-anchor="middle" font-size="13">11</text><line x1="402.0" y1="54" x2="388" y2="116" stroke="currentColor" stroke-width="1.4"/><rect x="419.0" y="116" width="26" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="432.0" y="135" text-anchor="middle" font-size="13">15</text><line x1="428.0" y1="54" x2="432" y2="116" stroke="currentColor" stroke-width="1.4"/><rect x="453.0" y="116" width="78" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="466.0" y="135" text-anchor="middle" font-size="13">22</text><text x="492.0" y="135" text-anchor="middle" font-size="13">25</text><line x1="479.0" y1="116" x2="479.0" y2="144" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="518.0" y="135" text-anchor="middle" font-size="13">27</text><line x1="505.0" y1="116" x2="505.0" y2="144" stroke="currentColor" stroke-width="0.8" class="s-gray"/><line x1="454.0" y1="54" x2="492" y2="116" stroke="currentColor" stroke-width="1.4"/><text x="415" y="212" text-anchor="middle" font-size="12" class="t-gray">the same keys as a 2-3-4 tree</text></svg>`,
  "rbbad": `<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg"><line x1="117.1" y1="37.1" x2="77.9" y2="70.9" stroke="currentColor" stroke-width="1.6"/><line x1="142.9" y1="37.1" x2="182.1" y2="70.9" stroke="currentColor" stroke-width="1.6"/><line x1="203.5" y1="96.7" x2="219.0" y2="123.3" stroke="currentColor" stroke-width="1.6"/><circle cx="130.0" cy="26" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="130.0" y="31.0" text-anchor="middle" font-size="14">20</text><circle cx="65.0" cy="82" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="65.0" y="87.0" text-anchor="middle" font-size="14">10</text><circle cx="195.0" cy="82" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="195.0" y="87.0" text-anchor="middle" font-size="14">30</text><circle cx="227.5" cy="138" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="227.5" y="143.0" text-anchor="middle" font-size="14">40</text><circle cx="130.0" cy="26" r="17" fill="currentColor"/><text x="130.0" y="30.7" text-anchor="middle" font-size="13" font-weight="bold" style="fill: var(--surface, #fff)">20</text><circle cx="65.0" cy="82" r="17" fill="currentColor"/><text x="65.0" y="86.7" text-anchor="middle" font-size="13" font-weight="bold" style="fill: var(--surface, #fff)">10</text><circle cx="195.0" cy="82" r="17" fill="currentColor"/><text x="195.0" y="86.7" text-anchor="middle" font-size="13" font-weight="bold" style="fill: var(--surface, #fff)">30</text><circle cx="227.5" cy="138" r="17" fill="currentColor"/><text x="227.5" y="142.7" text-anchor="middle" font-size="13" font-weight="bold" style="fill: var(--surface, #fff)">40</text></svg>`,
  "rotation": `<svg viewBox="0 0 540 222" xmlns="http://www.w3.org/2000/svg"><line x1="136.6" y1="46.5" x2="95.0" y2="79.0" stroke="currentColor" stroke-width="1.6"/><line x1="85.3" y1="109.9" x2="60.0" y2="146.0" stroke="currentColor" stroke-width="1.6"/><line x1="104.7" y1="109.9" x2="130.0" y2="146.0" stroke="currentColor" stroke-width="2.6" class="s-orange"/><line x1="160.6" y1="49.3" x2="190.0" y2="86.0" stroke="currentColor" stroke-width="1.6"/><circle cx="150" cy="36" r="17" fill="currentColor" fill-opacity="0.15" class="f-blue"/><circle cx="150" cy="36" r="17" fill="none" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="150" y="41" text-anchor="middle" font-size="15">y</text><circle cx="95" cy="96" r="17" fill="currentColor" fill-opacity="0.15" class="f-purple"/><circle cx="95" cy="96" r="17" fill="none" stroke="currentColor" stroke-width="2" class="s-purple"/><text x="95" y="101" text-anchor="middle" font-size="15">x</text><path d="M60,146 L38,186 L82,186 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="176" text-anchor="middle" font-size="14" font-style="italic">A</text><path d="M130,146 L108,186 L152,186 Z" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="130" y="176" text-anchor="middle" font-size="14" class="t-orange" font-style="italic">B</text><path d="M190,86 L168,126 L212,126 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="116" text-anchor="middle" font-size="14" font-style="italic">C</text><line x1="399.4" y1="49.3" x2="370.0" y2="86.0" stroke="currentColor" stroke-width="1.6"/><line x1="423.4" y1="46.5" x2="465.0" y2="79.0" stroke="currentColor" stroke-width="1.6"/><line x1="455.3" y1="109.9" x2="430.0" y2="146.0" stroke="currentColor" stroke-width="2.6" class="s-orange"/><line x1="474.7" y1="109.9" x2="500.0" y2="146.0" stroke="currentColor" stroke-width="1.6"/><circle cx="410" cy="36" r="17" fill="currentColor" fill-opacity="0.15" class="f-purple"/><circle cx="410" cy="36" r="17" fill="none" stroke="currentColor" stroke-width="2" class="s-purple"/><text x="410" y="41" text-anchor="middle" font-size="15">x</text><circle cx="465" cy="96" r="17" fill="currentColor" fill-opacity="0.15" class="f-blue"/><circle cx="465" cy="96" r="17" fill="none" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="465" y="101" text-anchor="middle" font-size="15">y</text><path d="M370,86 L348,126 L392,126 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="370" y="116" text-anchor="middle" font-size="14" font-style="italic">A</text><path d="M430,146 L408,186 L452,186 Z" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="430" y="176" text-anchor="middle" font-size="14" class="t-orange" font-style="italic">B</text><path d="M500,146 L478,186 L522,186 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="176" text-anchor="middle" font-size="14" font-style="italic">C</text><path d="M232,70 L282,70" stroke="currentColor" stroke-width="1.8"/><path d="M290,70 L280,65 L280,75 Z" fill="currentColor"/><text x="258" y="58" text-anchor="middle" font-size="11.5">right at y</text><path d="M290,110 L240,110" stroke="currentColor" stroke-width="1.8"/><path d="M232,110 L242,105 L242,115 Z" fill="currentColor"/><text x="262" y="130" text-anchor="middle" font-size="11.5">left at x</text><text x="130" y="212" text-anchor="middle" font-size="13" class="t-gray">inorder: A x B y C</text><text x="430" y="212" text-anchor="middle" font-size="13" class="t-gray">inorder: A x B y C</text></svg>`,
  "skip": `<svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="107" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.4" class="s-gray"/><rect x="14" y="73" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.4" class="s-gray"/><rect x="14" y="39" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.4" class="s-gray"/><text x="31" y="150" text-anchor="middle" font-size="11" class="t-gray">head</text><rect x="53" y="107" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="70" y="123" text-anchor="middle" font-size="12.5">3</text><rect x="109" y="107" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="126" y="123" text-anchor="middle" font-size="12.5">9</text><rect x="109" y="73" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="126" y="89" text-anchor="middle" font-size="12.5">9</text><rect x="109" y="39" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="126" y="55" text-anchor="middle" font-size="12.5">9</text><rect x="165" y="107" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="182" y="123" text-anchor="middle" font-size="12.5">14</text><rect x="221" y="107" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="238" y="123" text-anchor="middle" font-size="12.5">21</text><rect x="221" y="73" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="238" y="89" text-anchor="middle" font-size="12.5">21</text><rect x="277" y="107" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="294" y="123" text-anchor="middle" font-size="12.5">30</text><rect x="333" y="107" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350" y="123" text-anchor="middle" font-size="12.5">37</text><rect x="333" y="73" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350" y="89" text-anchor="middle" font-size="12.5">37</text><rect x="333" y="39" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350" y="55" text-anchor="middle" font-size="12.5">37</text><rect x="389" y="107" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="406" y="123" text-anchor="middle" font-size="12.5">45</text><rect x="445" y="107" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="462" y="123" text-anchor="middle" font-size="12.5">52</text><rect x="445" y="73" width="34" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="462" y="89" text-anchor="middle" font-size="12.5">52</text><line x1="48" y1="118" x2="46" y2="118" stroke="currentColor" stroke-width="1.2"/><path d="M53,118 L45,114 L45,122 Z" fill="currentColor"/><line x1="87" y1="118" x2="102" y2="118" stroke="currentColor" stroke-width="1.2"/><path d="M109,118 L101,114 L101,122 Z" fill="currentColor"/><line x1="143" y1="118" x2="158" y2="118" stroke="currentColor" stroke-width="1.2"/><path d="M165,118 L157,114 L157,122 Z" fill="currentColor"/><line x1="199" y1="118" x2="214" y2="118" stroke="currentColor" stroke-width="1.2"/><path d="M221,118 L213,114 L213,122 Z" fill="currentColor"/><line x1="255" y1="118" x2="270" y2="118" stroke="currentColor" stroke-width="2.4" class="s-orange"/><path d="M277,118 L269,114 L269,122 Z" fill="currentColor" class="f-orange"/><line x1="311" y1="118" x2="326" y2="118" stroke="currentColor" stroke-width="1.2"/><path d="M333,118 L325,114 L325,122 Z" fill="currentColor"/><line x1="367" y1="118" x2="382" y2="118" stroke="currentColor" stroke-width="1.2"/><path d="M389,118 L381,114 L381,122 Z" fill="currentColor"/><line x1="423" y1="118" x2="438" y2="118" stroke="currentColor" stroke-width="1.2"/><path d="M445,118 L437,114 L437,122 Z" fill="currentColor"/><line x1="48" y1="84" x2="102" y2="84" stroke="currentColor" stroke-width="1.2"/><path d="M109,84 L101,80 L101,88 Z" fill="currentColor"/><line x1="143" y1="84" x2="214" y2="84" stroke="currentColor" stroke-width="2.4" class="s-orange"/><path d="M221,84 L213,80 L213,88 Z" fill="currentColor" class="f-orange"/><line x1="255" y1="84" x2="326" y2="84" stroke="currentColor" stroke-width="1.2"/><path d="M333,84 L325,80 L325,88 Z" fill="currentColor"/><line x1="367" y1="84" x2="438" y2="84" stroke="currentColor" stroke-width="1.2"/><path d="M445,84 L437,80 L437,88 Z" fill="currentColor"/><line x1="48" y1="50" x2="102" y2="50" stroke="currentColor" stroke-width="2.4" class="s-orange"/><path d="M109,50 L101,46 L101,54 Z" fill="currentColor" class="f-orange"/><line x1="143" y1="50" x2="326" y2="50" stroke="currentColor" stroke-width="1.2"/><path d="M333,50 L325,46 L325,54 Z" fill="currentColor"/><line x1="126" y1="61" x2="126" y2="67" stroke="currentColor" stroke-width="2.4" class="s-orange"/><path d="M126,73 L122,65 L130,65 Z" fill="currentColor" class="f-orange"/><line x1="238" y1="95" x2="238" y2="101" stroke="currentColor" stroke-width="2.4" class="s-orange"/><path d="M238,107 L234,99 L242,99 Z" fill="currentColor" class="f-orange"/><text x="508" y="122" font-size="11" class="t-gray">level 0</text><text x="508" y="88" font-size="11" class="t-gray">level 1</text><text x="508" y="54" font-size="11" class="t-gray">level 2</text></svg>`,
};
const CODE: Record<string, string> = {
  "avl": `#include <algorithm>
#include <cstdio>
#include <cstdlib>
#include <memory>
#include <random>
#include <set>
#include <vector>

struct Node {
    int key;
    int height = 0;                       // a leaf has height 0
    std::unique_ptr<Node> left, right;
    explicit Node(int k) : key(k) {}
};
using Link = std::unique_ptr<Node>;

int h(const Link& t) { return t ? t->height : -1; }
void update(Node& t) { t.height = 1 + std::max(h(t.left), h(t.right)); }
int balance(const Node& t) { return h(t.left) - h(t.right); }

long long rotations = 0;

//      y            x          rotateRight(y): x moves up,
//     / \\          / \\         y moves down,
//    x   C   ->   A   y        and only B changes parent.
//   / \\              / \\       The inorder order A x B y C is kept.
//  A   B            B   C
void rotateRight(Link& y) {
    Link x = std::move(y->left);
    y->left = std::move(x->right);        // B becomes y's left subtree
    update(*y);                           // y is now below x: update it first
    x->right = std::move(y);
    update(*x);
    y = std::move(x);                     // x takes y's place in the parent's link
    ++rotations;
}
void rotateLeft(Link& x) {                // the mirror image
    Link y = std::move(x->right);
    x->right = std::move(y->left);
    update(*x);
    y->left = std::move(x);
    update(*y);
    x = std::move(y);
    ++rotations;
}

// Restore |balance| <= 1 at t, assuming its subtrees are AVL trees.
void rebalance(Link& t) {
    update(*t);
    int b = balance(*t);
    if (b > 1) {                                        // left-heavy
        if (balance(*t->left) < 0) rotateLeft(t->left); // LR: first make it LL
        rotateRight(t);                                 // LL
    } else if (b < -1) {                                // right-heavy
        if (balance(*t->right) > 0) rotateRight(t->right); // RL: first make it RR
        rotateLeft(t);                                     // RR
    }
}

void insert(Link& t, int key) {
    if (!t) { t = std::make_unique<Node>(key); return; }
    if (key < t->key)      insert(t->left, key);
    else if (key > t->key) insert(t->right, key);
    else return;                                        // already present
    rebalance(t);                                       // on the way back up
}

// Checks the BST order and the AVL condition; returns the true height or -2.
int check(const Node* t, long long lo, long long hi) {
    if (!t) return -1;
    if (t->key <= lo || t->key >= hi) return -2;
    int a = check(t->left.get(), lo, t->key), b = check(t->right.get(), t->key, hi);
    if (a == -2 || b == -2 || std::abs(a - b) > 1 || t->height != 1 + std::max(a, b)) return -2;
    return t->height;
}

int main() {
    Link root;
    for (int k = 1; k <= 1023; ++k) insert(root, k);    // sorted: the worst case for a plain BST
    std::printf("sorted 1..1023: height %d (plain BST: 1022), root %d, %lld rotations\\n",
                root->height, root->key, rotations);

    Link r;
    std::set<int> ref;
    std::mt19937 rng(99);
    rotations = 0;
    for (int i = 0; i < 100000; ++i) {
        int k = int(rng() % 1000000);
        insert(r, k);
        ref.insert(k);
    }
    int checked = check(r.get(), -1, 1LL << 40);
    std::printf("100000 random inserts: %zu distinct keys, height %d, valid %s, %lld rotations\\n",
                ref.size(), r->height, checked == r->height ? "yes" : "no", rotations);
}`,
  "nodes": `#include <algorithm>
#include <cstddef>
#include <cstdio>
#include <memory>
#include <set>
#include <vector>

// An allocator that counts what the container asks for.
std::size_t allocations = 0, bytes = 0;
template <class T> struct Counting {
    using value_type = T;
    Counting() = default;
    template <class U> Counting(const Counting<U>&) {}
    T* allocate(std::size_t n) {
        ++allocations;
        bytes += n * sizeof(T);
        return std::allocator<T>{}.allocate(n);
    }
    void deallocate(T* p, std::size_t n) { std::allocator<T>{}.deallocate(p, n); }
    friend bool operator==(const Counting&, const Counting&) { return true; }
};

int main() {
    const int n = 100000;
    {
        std::set<int, std::less<int>, Counting<int>> s;
        for (int k = 0; k < n; ++k) s.insert(k);       // sorted input is fine: it rebalances
        std::printf("std::set<int>:    %zu allocations, %zu bytes (%.0f per key)\\n",
                    allocations, bytes, double(bytes) / n);
    }
    allocations = bytes = 0;
    {
        std::vector<int, Counting<int>> v;
        v.reserve(n);
        for (int k = 0; k < n; ++k) v.push_back(k);    // already sorted
        bool found = std::binary_search(v.begin(), v.end(), 76543);
        std::printf("sorted vector:    %zu allocation,  %zu bytes (%.0f per key), found=%d\\n",
                    allocations, bytes, double(bytes) / n, found);
    }
}`,
};
const OUT: Record<string, string> = {
  "avl": `sorted 1..1023: height 9 (plain BST: 1022), root 512, 1013 rotations
100000 random inserts: 95215 distinct keys, height 19, valid yes, 66687 rotations`,
  "nodes": `std::set<int>:    100000 allocations, 4000000 bytes (40 per key)
sorted vector:    1 allocation,  400000 bytes (4 per key), found=1`,
};
const ALGO: Record<string, AlgoBlock> = {
  "avl": {"type": "algo", "view": "graph", "width": 420, "height": 272, "nodes": [{"id": "40@0", "x": 210.0, "y": 28, "label": "40"}, {"id": "20@1", "x": 111.0, "y": 80, "label": "20"}, {"id": "10@3", "x": 61.5, "y": 132, "label": "10"}, {"id": "20@0", "x": 210.0, "y": 28, "label": "20"}, {"id": "10@1", "x": 111.0, "y": 80, "label": "10"}, {"id": "40@2", "x": 309.0, "y": 80, "label": "40"}, {"id": "25@5", "x": 259.5, "y": 132, "label": "25"}, {"id": "30@12", "x": 284.2, "y": 184, "label": "30"}, {"id": "30@5", "x": 259.5, "y": 132, "label": "30"}, {"id": "25@11", "x": 234.8, "y": 184, "label": "25"}, {"id": "30@2", "x": 309.0, "y": 80, "label": "30"}, {"id": "40@6", "x": 358.5, "y": 132, "label": "40"}, {"id": "22@11", "x": 234.8, "y": 184, "label": "22"}, {"id": "25@2", "x": 309.0, "y": 80, "label": "25"}, {"id": "22@5", "x": 259.5, "y": 132, "label": "22"}, {"id": "30@6", "x": 358.5, "y": 132, "label": "30"}, {"id": "40@14", "x": 383.2, "y": 184, "label": "40"}, {"id": "25@0", "x": 210.0, "y": 28, "label": "25"}, {"id": "22@4", "x": 160.5, "y": 132, "label": "22"}, {"id": "50@14", "x": 383.2, "y": 184, "label": "50"}, {"id": "50@6", "x": 358.5, "y": 132, "label": "50"}, {"id": "60@14", "x": 383.2, "y": 184, "label": "60"}, {"id": "55@29", "x": 370.9, "y": 236, "label": "55"}, {"id": "55@14", "x": 383.2, "y": 184, "label": "55"}, {"id": "60@30", "x": 395.6, "y": 236, "label": "60"}, {"id": "55@6", "x": 358.5, "y": 132, "label": "55"}, {"id": "50@13", "x": 333.8, "y": 184, "label": "50"}], "edges": [{"from": "20@0", "to": "10@1"}, {"from": "20@0", "to": "25@2"}, {"from": "20@0", "to": "30@2"}, {"from": "20@0", "to": "40@2"}, {"from": "20@1", "to": "10@3"}, {"from": "20@1", "to": "22@4"}, {"from": "25@0", "to": "20@1"}, {"from": "25@0", "to": "30@2"}, {"from": "25@0", "to": "40@2"}, {"from": "25@2", "to": "22@5"}, {"from": "25@2", "to": "30@6"}, {"from": "25@5", "to": "22@11"}, {"from": "25@5", "to": "30@12"}, {"from": "30@2", "to": "25@5"}, {"from": "30@2", "to": "40@6"}, {"from": "30@5", "to": "25@11"}, {"from": "30@6", "to": "40@14"}, {"from": "40@0", "to": "20@1"}, {"from": "40@2", "to": "25@5"}, {"from": "40@2", "to": "30@5"}, {"from": "40@2", "to": "50@6"}, {"from": "40@2", "to": "55@6"}, {"from": "40@6", "to": "50@14"}, {"from": "50@6", "to": "55@14"}, {"from": "50@6", "to": "60@14"}, {"from": "55@14", "to": "60@30"}, {"from": "55@6", "to": "50@13"}, {"from": "55@6", "to": "60@14"}, {"from": "60@14", "to": "55@29"}], "interval": 1500, "frames": [{"note": "Insert $40, 20, 10, 25, 30, 22, 50, 60, 55$ into an empty AVL tree. The small numbers are balance factors, $h(\\text{left}) - h(\\text{right})$.", "hidden": ["40@0", "20@1", "10@3", "20@0", "10@1", "40@2", "25@5", "30@12", "30@5", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"]}, {"note": "Insert $40$ as a new leaf, exactly as in a plain BST.", "hidden": ["20@1", "10@3", "20@0", "10@1", "40@2", "25@5", "30@12", "30@5", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "40@0", "color": "green"}], "nodeNotes": [{"id": "40@0", "text": "0"}], "vars": [["rotations", "0"]]}, {"note": "Insert $20$ as a new leaf, exactly as in a plain BST (path $40$).", "hidden": ["10@3", "20@0", "10@1", "40@2", "25@5", "30@12", "30@5", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "40@0", "color": "blue"}, {"id": "20@1", "color": "green"}], "nodeNotes": [{"id": "40@0", "text": "+1"}, {"id": "20@1", "text": "0"}], "vars": [["rotations", "0"]]}, {"note": "Insert $10$ as a new leaf, exactly as in a plain BST (path $40 → 20$).", "hidden": ["20@0", "10@1", "40@2", "25@5", "30@12", "30@5", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "40@0", "color": "blue"}, {"id": "20@1", "color": "blue"}, {"id": "10@3", "color": "green"}], "nodeNotes": [{"id": "40@0", "text": "+1"}, {"id": "20@1", "text": "+1"}, {"id": "10@3", "text": "0"}], "vars": [["rotations", "0"]]}, {"note": "Walking back up, $40$ has balance factor $+2$. The new key went into its left child's **left** subtree (case LL): one right rotation.", "hidden": ["20@0", "10@1", "40@2", "25@5", "30@12", "30@5", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "40@0", "color": "red"}, {"id": "10@3", "color": "green"}], "nodeNotes": [{"id": "40@0", "text": "+2"}, {"id": "20@1", "text": "+1"}, {"id": "10@3", "text": "0"}], "vars": [["rotations", "0"], ["case", "LL"]]}, {"note": "Rotate right at $40$: $20$ moves up. All balance factors are back in $\\{-1, 0, +1\\}$, and this subtree has its old height, so no ancestor needs fixing.", "hidden": ["40@0", "20@1", "10@3", "25@5", "30@12", "30@5", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "20@0", "color": "green"}, {"id": "40@2", "color": "purple"}], "nodeNotes": [{"id": "20@0", "text": "0"}, {"id": "10@1", "text": "0"}, {"id": "40@2", "text": "0"}], "vars": [["rotations", "1"], ["case", "LL"]]}, {"note": "Insert $25$ as a new leaf, exactly as in a plain BST (path $20 → 40$).", "hidden": ["40@0", "20@1", "10@3", "30@12", "30@5", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "20@0", "color": "blue"}, {"id": "40@2", "color": "blue"}, {"id": "25@5", "color": "green"}], "nodeNotes": [{"id": "20@0", "text": "0"}, {"id": "10@1", "text": "0"}, {"id": "40@2", "text": "+1"}, {"id": "25@5", "text": "0"}], "vars": [["rotations", "1"]]}, {"note": "Insert $30$ as a new leaf, exactly as in a plain BST (path $20 → 40 → 25$).", "hidden": ["40@0", "20@1", "10@3", "30@5", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "20@0", "color": "blue"}, {"id": "40@2", "color": "blue"}, {"id": "25@5", "color": "blue"}, {"id": "30@12", "color": "green"}], "nodeNotes": [{"id": "20@0", "text": "−1"}, {"id": "10@1", "text": "0"}, {"id": "40@2", "text": "+1"}, {"id": "25@5", "text": "−1"}, {"id": "30@12", "text": "0"}], "vars": [["rotations", "1"]]}, {"note": "Walking back up, $40$ has balance factor $+2$. The new key went into its left child's **right** subtree (case LR): a double rotation, left then right.", "hidden": ["40@0", "20@1", "10@3", "30@5", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "40@2", "color": "red"}, {"id": "30@12", "color": "green"}], "nodeNotes": [{"id": "20@0", "text": "−2"}, {"id": "10@1", "text": "0"}, {"id": "40@2", "text": "+2"}, {"id": "25@5", "text": "−1"}, {"id": "30@12", "text": "0"}], "vars": [["rotations", "1"], ["case", "LR"]]}, {"note": "First rotation: left at 25. The shape is now the straight-line case.", "hidden": ["40@0", "20@1", "10@3", "25@5", "30@12", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "40@2", "color": "red"}, {"id": "30@5", "color": "orange"}], "nodeNotes": [{"id": "20@0", "text": "−2"}, {"id": "10@1", "text": "0"}, {"id": "40@2", "text": "+2"}, {"id": "30@5", "text": "+1"}, {"id": "25@11", "text": "0"}], "vars": [["rotations", "2"], ["case", "LR"]]}, {"note": "Rotate right at $40$: $30$ moves up. All balance factors are back in $\\{-1, 0, +1\\}$, and this subtree has its old height, so no ancestor needs fixing.", "hidden": ["40@0", "20@1", "10@3", "40@2", "30@12", "30@5", "25@11", "22@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "30@2", "color": "green"}, {"id": "40@6", "color": "purple"}], "nodeNotes": [{"id": "20@0", "text": "−1"}, {"id": "10@1", "text": "0"}, {"id": "30@2", "text": "0"}, {"id": "25@5", "text": "0"}, {"id": "40@6", "text": "0"}], "vars": [["rotations", "3"], ["case", "LR"]]}, {"note": "Insert $22$ as a new leaf, exactly as in a plain BST (path $20 → 30 → 25$).", "hidden": ["40@0", "20@1", "10@3", "40@2", "30@12", "30@5", "25@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "20@0", "color": "blue"}, {"id": "30@2", "color": "blue"}, {"id": "25@5", "color": "blue"}, {"id": "22@11", "color": "green"}], "nodeNotes": [{"id": "20@0", "text": "−1"}, {"id": "10@1", "text": "0"}, {"id": "30@2", "text": "0"}, {"id": "25@5", "text": "+1"}, {"id": "22@11", "text": "0"}, {"id": "40@6", "text": "0"}], "vars": [["rotations", "3"]]}, {"note": "Walking back up, $20$ has balance factor $−2$. The new key went into its right child's **left** subtree (case RL): a double rotation, right then left.", "hidden": ["40@0", "20@1", "10@3", "40@2", "30@12", "30@5", "25@11", "25@2", "22@5", "30@6", "40@14", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "20@0", "color": "red"}, {"id": "22@11", "color": "green"}], "nodeNotes": [{"id": "20@0", "text": "−2"}, {"id": "10@1", "text": "0"}, {"id": "30@2", "text": "+1"}, {"id": "25@5", "text": "+1"}, {"id": "22@11", "text": "0"}, {"id": "40@6", "text": "0"}], "vars": [["rotations", "3"], ["case", "RL"]]}, {"note": "First rotation: right at 30. The shape is now the straight-line case.", "hidden": ["40@0", "20@1", "10@3", "40@2", "25@5", "30@12", "30@5", "25@11", "30@2", "40@6", "22@11", "25@0", "22@4", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "20@0", "color": "red"}, {"id": "25@2", "color": "orange"}], "nodeNotes": [{"id": "20@0", "text": "−2"}, {"id": "10@1", "text": "0"}, {"id": "25@2", "text": "−1"}, {"id": "22@5", "text": "0"}, {"id": "30@6", "text": "−1"}, {"id": "40@14", "text": "0"}], "vars": [["rotations", "4"], ["case", "RL"]]}, {"note": "Rotate left at $20$: $25$ moves up. All balance factors are back in $\\{-1, 0, +1\\}$, and this subtree has its old height, so no ancestor needs fixing.", "hidden": ["40@0", "20@0", "10@1", "40@2", "25@5", "30@12", "30@5", "25@11", "22@11", "25@2", "22@5", "30@6", "40@14", "50@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "25@0", "color": "green"}, {"id": "20@1", "color": "purple"}], "nodeNotes": [{"id": "25@0", "text": "0"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "30@2", "text": "−1"}, {"id": "40@6", "text": "0"}], "vars": [["rotations", "5"], ["case", "RL"]]}, {"note": "Insert $50$ as a new leaf, exactly as in a plain BST (path $25 → 30 → 40$).", "hidden": ["40@0", "20@0", "10@1", "40@2", "25@5", "30@12", "30@5", "25@11", "22@11", "25@2", "22@5", "30@6", "40@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "25@0", "color": "blue"}, {"id": "30@2", "color": "blue"}, {"id": "40@6", "color": "blue"}, {"id": "50@14", "color": "green"}], "nodeNotes": [{"id": "25@0", "text": "0"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "30@2", "text": "−1"}, {"id": "40@6", "text": "−1"}, {"id": "50@14", "text": "0"}], "vars": [["rotations", "5"]]}, {"note": "Walking back up, $30$ has balance factor $−2$. The new key went into its right child's **right** subtree (case RR): one left rotation.", "hidden": ["40@0", "20@0", "10@1", "40@2", "25@5", "30@12", "30@5", "25@11", "22@11", "25@2", "22@5", "30@6", "40@14", "50@6", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "30@2", "color": "red"}, {"id": "50@14", "color": "green"}], "nodeNotes": [{"id": "25@0", "text": "−1"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "30@2", "text": "−2"}, {"id": "40@6", "text": "−1"}, {"id": "50@14", "text": "0"}], "vars": [["rotations", "5"], ["case", "RR"]]}, {"note": "Rotate left at $30$: $40$ moves up. All balance factors are back in $\\{-1, 0, +1\\}$, and this subtree has its old height, so no ancestor needs fixing.", "hidden": ["40@0", "20@0", "10@1", "25@5", "30@12", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "50@14", "60@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "40@2", "color": "green"}, {"id": "30@5", "color": "purple"}], "nodeNotes": [{"id": "25@0", "text": "0"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "40@2", "text": "0"}, {"id": "30@5", "text": "0"}, {"id": "50@6", "text": "0"}], "vars": [["rotations", "6"], ["case", "RR"]]}, {"note": "Insert $60$ as a new leaf, exactly as in a plain BST (path $25 → 40 → 50$).", "hidden": ["40@0", "20@0", "10@1", "25@5", "30@12", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "50@14", "55@29", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "25@0", "color": "blue"}, {"id": "40@2", "color": "blue"}, {"id": "50@6", "color": "blue"}, {"id": "60@14", "color": "green"}], "nodeNotes": [{"id": "25@0", "text": "0"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "40@2", "text": "0"}, {"id": "30@5", "text": "0"}, {"id": "50@6", "text": "−1"}, {"id": "60@14", "text": "0"}], "vars": [["rotations", "6"]]}, {"note": "Insert $55$ as a new leaf, exactly as in a plain BST (path $25 → 40 → 50 → 60$).", "hidden": ["40@0", "20@0", "10@1", "25@5", "30@12", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "50@14", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "25@0", "color": "blue"}, {"id": "40@2", "color": "blue"}, {"id": "50@6", "color": "blue"}, {"id": "60@14", "color": "blue"}, {"id": "55@29", "color": "green"}], "nodeNotes": [{"id": "25@0", "text": "−1"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "40@2", "text": "−1"}, {"id": "30@5", "text": "0"}, {"id": "50@6", "text": "−1"}, {"id": "60@14", "text": "+1"}, {"id": "55@29", "text": "0"}], "vars": [["rotations", "6"]]}, {"note": "Walking back up, $50$ has balance factor $−2$. The new key went into its right child's **left** subtree (case RL): a double rotation, right then left.", "hidden": ["40@0", "20@0", "10@1", "25@5", "30@12", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "50@14", "55@14", "60@30", "55@6", "50@13"], "nodeColors": [{"id": "50@6", "color": "red"}, {"id": "55@29", "color": "green"}], "nodeNotes": [{"id": "25@0", "text": "−1"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "40@2", "text": "−2"}, {"id": "30@5", "text": "0"}, {"id": "50@6", "text": "−2"}, {"id": "60@14", "text": "+1"}, {"id": "55@29", "text": "0"}], "vars": [["rotations", "6"], ["case", "RL"]]}, {"note": "First rotation: right at 60. The shape is now the straight-line case.", "hidden": ["40@0", "20@0", "10@1", "25@5", "30@12", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "50@14", "60@14", "55@29", "55@6", "50@13"], "nodeColors": [{"id": "50@6", "color": "red"}, {"id": "55@14", "color": "orange"}], "nodeNotes": [{"id": "25@0", "text": "−1"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "40@2", "text": "−2"}, {"id": "30@5", "text": "0"}, {"id": "50@6", "text": "−2"}, {"id": "55@14", "text": "−1"}, {"id": "60@30", "text": "0"}], "vars": [["rotations", "7"], ["case", "RL"]]}, {"note": "Rotate left at $50$: $55$ moves up. All balance factors are back in $\\{-1, 0, +1\\}$, and this subtree has its old height, so no ancestor needs fixing.", "hidden": ["40@0", "20@0", "10@1", "25@5", "30@12", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "50@14", "50@6", "55@29", "55@14", "60@30"], "nodeColors": [{"id": "55@6", "color": "green"}, {"id": "50@13", "color": "purple"}], "nodeNotes": [{"id": "25@0", "text": "−1"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "40@2", "text": "−1"}, {"id": "30@5", "text": "0"}, {"id": "55@6", "text": "0"}, {"id": "50@13", "text": "0"}, {"id": "60@14", "text": "0"}], "vars": [["rotations", "8"], ["case", "RL"]]}, {"note": "Done: $9$ keys, height $3$, after $8$ single rotations. Every case appeared: LL ($10$), LR ($30$), RL ($22$ and $55$), RR ($50$).", "hidden": ["40@0", "20@0", "10@1", "25@5", "30@12", "25@11", "30@2", "40@6", "22@11", "25@2", "22@5", "30@6", "40@14", "50@14", "50@6", "55@29", "55@14", "60@30"], "nodeNotes": [{"id": "25@0", "text": "−1"}, {"id": "20@1", "text": "0"}, {"id": "10@3", "text": "0"}, {"id": "22@4", "text": "0"}, {"id": "40@2", "text": "−1"}, {"id": "30@5", "text": "0"}, {"id": "55@6", "text": "0"}, {"id": "50@13", "text": "0"}, {"id": "60@14", "text": "0"}], "vars": [["rotations", "8"]]}], "caption": "Green: the new key or the node that moved up. Red: the lowest unbalanced node. Each insertion needs at most one single or double rotation."},
  "rb": {"type": "algo", "view": "graph", "width": 420, "height": 272, "nodes": [{"id": "41@0", "x": 210.0, "y": 28, "label": "41"}, {"id": "38@1", "x": 111.0, "y": 80, "label": "38"}, {"id": "31@3", "x": 61.5, "y": 132, "label": "31"}, {"id": "38@0", "x": 210.0, "y": 28, "label": "38"}, {"id": "31@1", "x": 111.0, "y": 80, "label": "31"}, {"id": "41@2", "x": 309.0, "y": 80, "label": "41"}, {"id": "12@3", "x": 61.5, "y": 132, "label": "12"}, {"id": "19@8", "x": 86.2, "y": 184, "label": "19"}, {"id": "19@3", "x": 61.5, "y": 132, "label": "19"}, {"id": "12@7", "x": 36.8, "y": 184, "label": "12"}, {"id": "19@1", "x": 111.0, "y": 80, "label": "19"}, {"id": "31@4", "x": 160.5, "y": 132, "label": "31"}, {"id": "8@7", "x": 36.8, "y": 184, "label": "8"}], "edges": [{"from": "12@3", "to": "19@8"}, {"from": "12@3", "to": "8@7"}, {"from": "19@1", "to": "12@3"}, {"from": "19@1", "to": "31@4"}, {"from": "19@3", "to": "12@7"}, {"from": "31@1", "to": "12@3"}, {"from": "31@1", "to": "19@3"}, {"from": "38@0", "to": "19@1"}, {"from": "38@0", "to": "31@1"}, {"from": "38@0", "to": "41@2"}, {"from": "38@1", "to": "31@3"}, {"from": "41@0", "to": "38@1"}], "interval": 1600, "frames": [{"note": "Insert $41, 38, 31, 12, 19, 8$ into an empty red–black tree. Red circles are red nodes; plain circles are black.", "hidden": ["41@0", "38@1", "31@3", "38@0", "31@1", "41@2", "12@3", "19@8", "19@3", "12@7", "19@1", "31@4", "8@7"]}, {"note": "Insert $41$: new nodes are red, but this is the root.", "hidden": ["38@1", "31@3", "38@0", "31@1", "41@2", "12@3", "19@8", "19@3", "12@7", "19@1", "31@4", "8@7"], "nodeColors": [{"id": "41@0", "color": "red"}], "nodeNotes": [{"id": "41@0", "text": "new"}]}, {"note": "Rule: the root is black. Recolor it; this adds one to every path's black count, keeping them equal.", "hidden": ["38@1", "31@3", "38@0", "31@1", "41@2", "12@3", "19@8", "19@3", "12@7", "19@1", "31@4", "8@7"]}, {"note": "Insert $38$ as a red leaf. Its parent $41$ is black, so nothing is violated.", "hidden": ["31@3", "38@0", "31@1", "41@2", "12@3", "19@8", "19@3", "12@7", "19@1", "31@4", "8@7"], "nodeColors": [{"id": "38@1", "color": "red"}], "nodeNotes": [{"id": "38@1", "text": "new"}]}, {"note": "Insert $31$ as a red leaf under $38$, which is also red: a **red–red violation** to fix.", "hidden": ["38@0", "31@1", "41@2", "12@3", "19@8", "19@3", "12@7", "19@1", "31@4", "8@7"], "nodeColors": [{"id": "38@1", "color": "red"}, {"id": "31@3", "color": "red"}], "nodeNotes": [{"id": "31@3", "text": "new"}]}, {"note": "Black uncle, straight line: rotate right at the grandparent $41$ and swap colors. $38$ is now a black subtree root with two red children. Done.", "hidden": ["41@0", "38@1", "31@3", "12@3", "19@8", "19@3", "12@7", "19@1", "31@4", "8@7"], "nodeColors": [{"id": "31@1", "color": "red"}, {"id": "41@2", "color": "red"}], "nodeNotes": [{"id": "38@0", "text": "new top"}]}, {"note": "Insert $12$ as a red leaf under $31$, which is also red: a **red–red violation** to fix.", "hidden": ["41@0", "38@1", "31@3", "19@8", "19@3", "12@7", "19@1", "31@4", "8@7"], "nodeColors": [{"id": "31@1", "color": "red"}, {"id": "12@3", "color": "red"}, {"id": "41@2", "color": "red"}], "nodeNotes": [{"id": "12@3", "text": "new"}]}, {"note": "The uncle $41$ was red: recolor. Parent and uncle become black, grandparent $38$ becomes red. Black heights are unchanged; the problem (if any) moves up to $38$.", "hidden": ["41@0", "38@1", "31@3", "19@8", "19@3", "12@7", "19@1", "31@4", "8@7"], "nodeColors": [{"id": "38@0", "color": "red"}, {"id": "12@3", "color": "red"}], "nodeNotes": [{"id": "31@1", "text": "parent"}, {"id": "41@2", "text": "uncle"}, {"id": "38@0", "text": "grandparent"}]}, {"note": "Rule: the root is black. Recolor it; this adds one to every path's black count, keeping them equal.", "hidden": ["41@0", "38@1", "31@3", "19@8", "19@3", "12@7", "19@1", "31@4", "8@7"], "nodeColors": [{"id": "12@3", "color": "red"}]}, {"note": "Insert $19$ as a red leaf under $12$, which is also red: a **red–red violation** to fix.", "hidden": ["41@0", "38@1", "31@3", "19@3", "12@7", "19@1", "31@4", "8@7"], "nodeColors": [{"id": "12@3", "color": "red"}, {"id": "19@8", "color": "red"}], "nodeNotes": [{"id": "19@8", "text": "new"}]}, {"note": "Black uncle, and $z$ is an \"inner\" grandchild (a triangle): rotate left at $12$ to turn it into a straight line.", "hidden": ["41@0", "38@1", "31@3", "12@3", "19@8", "19@1", "31@4", "8@7"], "nodeColors": [{"id": "19@3", "color": "red"}, {"id": "12@7", "color": "red"}], "nodeNotes": [{"id": "12@7", "text": "z"}]}, {"note": "Black uncle, straight line: rotate right at the grandparent $31$ and swap colors. $19$ is now a black subtree root with two red children. Done.", "hidden": ["41@0", "38@1", "31@3", "31@1", "19@8", "19@3", "12@7", "8@7"], "nodeColors": [{"id": "12@3", "color": "red"}, {"id": "31@4", "color": "red"}], "nodeNotes": [{"id": "19@1", "text": "new top"}]}, {"note": "Insert $8$ as a red leaf under $12$, which is also red: a **red–red violation** to fix.", "hidden": ["41@0", "38@1", "31@3", "31@1", "19@8", "19@3", "12@7"], "nodeColors": [{"id": "12@3", "color": "red"}, {"id": "8@7", "color": "red"}, {"id": "31@4", "color": "red"}], "nodeNotes": [{"id": "8@7", "text": "new"}]}, {"note": "The uncle $31$ was red: recolor. Parent and uncle become black, grandparent $19$ becomes red. Black heights are unchanged; the problem (if any) moves up to $19$.", "hidden": ["41@0", "38@1", "31@3", "31@1", "19@8", "19@3", "12@7"], "nodeColors": [{"id": "19@1", "color": "red"}, {"id": "8@7", "color": "red"}], "nodeNotes": [{"id": "12@3", "text": "parent"}, {"id": "31@4", "text": "uncle"}, {"id": "19@1", "text": "grandparent"}]}, {"note": "Done: no red node has a red child, and every path from the root to a null link passes $2$ black nodes (counting the root). Height $3$ for $6$ keys.", "hidden": ["41@0", "38@1", "31@3", "31@1", "19@8", "19@3", "12@7"], "nodeColors": [{"id": "19@1", "color": "red"}, {"id": "8@7", "color": "red"}]}], "caption": "Red–black insertion (the CLRS version). A red uncle means recolor and move up; a black uncle means one or two rotations, after which the tree is valid."},
};
// ---- end generated ----

export const lesson: Lesson = {
  id: 'dsa-balanced-trees',
  title: 'Balanced Search Trees',
  summary: 'How search trees guarantee $O(\\log n)$: rotations, AVL trees with balance factors and the four rebalancing cases, red–black trees and why `std::map` uses them, and a brief look at B-trees for disks and skip lists for concurrency.',
  minutes: 23,
  objectives: [
    'Perform left and right rotations and explain why they preserve the BST order',
    'State the AVL invariant, derive the $1.44 \\log_2 n$ height bound from the Fibonacci-like recurrence, and rebalance an insertion in each of the four cases',
    'Implement AVL insertion with `std::unique_ptr` links, updating heights in the right order',
    'State the red–black invariants, explain the $2 \\log_2(n + 1)$ height bound and the 2-3-4 tree view, and relate them to `std::map` and `std::set`',
    'Choose between AVL trees, red–black trees, B-trees, skip lists and sorted arrays for a given workload',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why balance matters, and the rotation',
      blocks: [
        {
          type: 'p',
          text: 'A plain BST costs $O(h)$ per operation, and $h$ can be $n - 1$. A **self-balancing** search tree adds an invariant that forces $h = O(\\log n)$ and restores it after every insertion and deletion with small, **local** repairs, so each update stays $O(\\log n)$. All the classic designs use the same repair tool: the [[dsa-tree-rotation|rotation]].',
        },
        {
          type: 'figure',
          svg: FIG.rotation,
          alt: 'Left: node y with left child x and right subtree C; x has subtrees A and B. Right: node x with left subtree A and right child y; y has subtrees B and C. Arrows: rotate right at y goes left to right; rotate left at x goes back. Subtree B is highlighted. Both trees have inorder A x B y C.',
          caption: 'A right rotation at $y$ lifts its left child $x$. Only one subtree changes parent: $B$, which moves from $x$\'s right to $y$\'s left. The inorder sequence $A\\,x\\,B\\,y\\,C$ is unchanged, so the BST invariant survives.',
          maxWidth: 520,
        },
        {
          type: 'derivation',
          title: 'Why a rotation keeps the tree a BST',
          steps: [
            { tex: 'A < x < B < y < C', why: 'Before: $A$ and $B$ are in $x$\'s left and right subtrees; $x$ and its subtrees are in $y$\'s left subtree; $C$ is right of $y$.' },
            { tex: '\\text{after: } x \\text{ has } A \\text{ on the left and } y \\text{ on the right}', why: '$A < x$ ✓, and $y$ with everything below it ($B$, $C$) is $> x$ ✓.' },
            { tex: 'y \\text{ has } B \\text{ on the left and } C \\text{ on the right}', why: '$x < B < y$, so $B$ is a valid left subtree of $y$, and it is still in $x$\'s right subtree, as it must be. $C > y$ ✓.' },
          ],
          result: 'A rotation changes $3$ links and the heights of $x$ and $y$: $O(1)$ work. The subtree $A$ rises one level, $C$ sinks one level, $B$ stays at the same depth.',
        },
        {
          type: 'code',
          title: 'rotateRight with owning links (from avl.cpp)',
          code: `void rotateRight(Link& y) {        // Link = std::unique_ptr<Node>
    Link x = std::move(y->left);
    y->left = std::move(x->right);  // B becomes y's left subtree
    update(*y);                     // y is now below x: update it first
    x->right = std::move(y);
    update(*x);
    y = std::move(x);               // x takes y's place in the parent's link
}`,
          annotations: [
            { lines: 1, text: 'Taking the parent\'s link by reference means the rotation can re-hang the subtree without knowing the parent.' },
            { lines: '2-3', text: 'Detach $x$, then move $B$ across. At every moment each node has exactly one owner.' },
            { lines: '4-6', text: 'Heights are recomputed bottom-up: $y$ (now the child) first, then $x$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why local repairs suffice',
          text: 'An insertion changes subtree heights only along the path from the new leaf to the root, and by at most $1$ each. So imbalance can appear only on that path, and only by a small amount. A rotation shifts height from one side to the other at one node. The art of each balanced-tree design is an invariant weak enough to be cheap to maintain, yet strong enough to force logarithmic height.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'You rotate **right** at $y$ in the tree $y(x(A, B), C)$. Which subtree gets a new parent, besides $x$ and $y$ themselves?',
      options: [
        { text: '$A$', why: '$A$ stays $x$\'s left subtree; it just rises one level along with $x$.' },
        { text: '$B$', correct: true, why: '$B$ was $x$\'s right subtree and becomes $y$\'s left subtree. It is the only subtree that changes sides.' },
        { text: '$C$', why: '$C$ stays $y$\'s right subtree; it sinks one level along with $y$.' },
        { text: 'None of them', why: 'One subtree must move: $x$\'s right link has to point to $y$ after the rotation, so whatever was there ($B$) needs a new home, which is $y$\'s freed left link.' },
      ],
      explanation: 'In $x(A, y(B, C))$, compare with $y(x(A, B), C)$: $A$ is still under $x$ and $C$ still under $y$, but $B$ moved from $x$ to $y$. That is why the code has exactly one "move $B$" line, `y->left = std::move(x->right)`, and why its order matters: it must happen before $x$\'s right link is overwritten with $y$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'AVL trees: the invariant and the height bound',
      blocks: [
        {
          type: 'p',
          text: 'The oldest self-balancing tree (Adelson-Velsky and Landis, 1962) uses the most direct invariant. Define the **[[dsa-balance-factor|balance factor]]** of a node as $\\text{bf} = h(\\text{left}) - h(\\text{right})$, with $h(\\text{empty}) = -1$.',
        },
        {
          type: 'definition',
          term: 'AVL tree',
          text: 'An [[dsa-avl-tree|AVL tree]] is a BST in which **every** node has balance factor $-1$, $0$ or $+1$: the heights of its two subtrees differ by at most one. Each node stores its height (or just its balance factor) so the check is $O(1)$.',
        },
        {
          type: 'p',
          text: 'Is that enough for logarithmic height? Ask the reverse question: what is the **fewest** nodes $N(h)$ an AVL tree of height $h$ can have? The sparsest such tree has a root, one subtree of height $h - 1$ and, to save nodes, the other of height $h - 2$, each of them as sparse as possible.',
        },
        {
          type: 'figure',
          svg: FIG.fib,
          alt: 'A minimal AVL tree of height 3 with 7 nodes: root 5 with children 3 and 7; 3 has children 2 and 4; 2 has left child 1; 7 has left child 6. Balance factors: 5, 3, 2 and 7 have +1; leaves 1, 4, 6 have 0.',
          caption: 'A sparsest AVL tree of height $3$: $N(3) = 7$ nodes. Its left subtree is a sparsest tree of height $2$ ($4$ nodes) and its right subtree one of height $1$ ($2$ nodes). These are called Fibonacci trees.',
          maxWidth: 340,
        },
        {
          type: 'derivation',
          title: 'From the recurrence to $h < 1.44 \\log_2 n$',
          steps: [
            { tex: 'N(0) = 1, \\quad N(1) = 2, \\quad N(h) = N(h - 1) + N(h - 2) + 1', why: 'A single node has height $0$; height $1$ needs a root and one child. Otherwise: the root plus a sparsest subtree of height $h - 1$ and one of height $h - 2$.' },
            { tex: 'N(h) + 1 = \\big(N(h-1) + 1\\big) + \\big(N(h-2) + 1\\big)', why: 'Add $1$ to both sides: $M(h) = N(h) + 1$ satisfies the [[dm-fibonacci-numbers|Fibonacci]] recurrence exactly.' },
            { tex: 'N(h) + 1 = F_{h+3}: \\quad 2, 3, 5, 8, 13, \\ldots', why: 'Check the start: $N(0) + 1 = 2 = F_3$ and $N(1) + 1 = 3 = F_4$ (with $F_1 = F_2 = 1$). So $N(2) = 4$, $N(3) = 7$, $N(4) = 12$.' },
            { tex: 'F_k \\approx \\frac{\\varphi^k}{\\sqrt{5}}, \\quad \\varphi = \\frac{1 + \\sqrt 5}{2} \\approx 1.618', why: 'Binet\'s formula: Fibonacci numbers grow exponentially with ratio $\\varphi$.' },
            { tex: 'n \\ge N(h) \\approx \\frac{\\varphi^{h+3}}{\\sqrt5} \\implies h \\lesssim \\log_\\varphi n = \\frac{\\log_2 n}{\\log_2 \\varphi} \\approx 1.44 \\log_2 n', why: 'Any AVL tree with $n$ nodes and height $h$ has at least $N(h)$ nodes. Taking logarithms and $\\log_2 \\varphi \\approx 0.694$ gives the bound (precisely $h < 1.4405 \\log_2(n + 2) - 0.328$).' },
          ],
          result: 'An AVL tree is never more than about $44\\%$ taller than a perfectly balanced tree. A million keys: height at most $28$, versus $19$ for perfect balance.',
        },
        {
          type: 'graph',
          x: [1, 1000],
          y: [0, 22],
          xStep: 100,
          yStep: 2,
          functions: [
            { expr: '2log_2(x + 1)', label: 'red–black worst case: $2 \\log_2(n+1)$', color: 'red', domain: [1, 1000] },
            { expr: '1.4405log_2(x + 2) - 0.328', label: 'AVL worst case: $1.44 \\log_2(n+2) - 0.33$', color: 'orange', domain: [1, 1000] },
            { expr: 'log_2(x + 1) - 1', label: 'perfect balance: $\\log_2(n + 1) - 1$', color: 'blue', domain: [1, 1000] },
          ],
          points: [{ x: 'n', y: '1.4405log_2(n + 2) - 0.328', color: 'orange' }],
          sliders: [{ name: 'n', min: 1, max: 1000, step: 1, value: 500, label: 'number of keys $n$' }],
          readouts: [
            { label: 'AVL height $<$', expr: '1.4405log_2(n + 2) - 0.328', digits: 1 },
            { label: 'red–black height $\\le$', expr: '2log_2(n + 1)', digits: 1 },
          ],
          caption: 'Worst-case heights. All three are logarithmic; the constant factor is the price each design pays for cheaper updates. (A plain BST\'s worst case, $n - 1$, would leave this window at once.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'What is the **minimum** number of nodes in an AVL tree of height $4$?',
      answer: '12',
      label: '$N(4) =$',
      hint: 'Use $N(0) = 1$, $N(1) = 2$ and $N(h) = N(h-1) + N(h-2) + 1$.',
      explanation: '$N(2) = N(1) + N(0) + 1 = 2 + 1 + 1 = 4$. $N(3) = 4 + 2 + 1 = 7$. $N(4) = 7 + 4 + 1 = 12$. Check with Fibonacci: $N(4) + 1 = 13 = F_7$ ✓. So an AVL tree with $11$ or fewer nodes has height at most $3$, and a height-$4$ AVL tree needs at least $12$ nodes, while a plain BST reaches height $4$ with just $5$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Insertion and the four rebalancing cases',
      blocks: [
        {
          type: 'p',
          text: 'Insert as in a plain BST, then walk back up the search path recomputing heights. If every balance factor stays in $\\{-1, 0, +1\\}$, you are done. Otherwise, let $z$ be the **lowest** node whose balance factor became $\\pm 2$. Which repair to use depends on where the new key went relative to $z$:',
        },
        {
          type: 'table',
          headers: ['Case', 'New key went into…', 'Repair'],
          rows: [
            ['**LL**', 'the left subtree of $z$\'s left child', 'rotate right at $z$'],
            ['**RR**', 'the right subtree of $z$\'s right child', 'rotate left at $z$'],
            ['**LR**', 'the right subtree of $z$\'s left child', 'rotate left at the child, then right at $z$'],
            ['**RL**', 'the left subtree of $z$\'s right child', 'rotate right at the child, then left at $z$'],
          ],
        },
        {
          type: 'p',
          text: 'In the straight-line cases (LL, RR) the heavy grandchild is on the outside, and one rotation lifts it. In the zigzag cases (LR, RL) a single rotation would just move the problem to the other side; the first rotation turns the zigzag into a straight line, and the second finishes the job.',
        },
        ALGO.avl,
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one repair fixes the whole tree',
          text: 'Before the insertion, $z$\'s subtree had some height $H$. The insertion raised it to $H + 1$, which is what made $z$ unbalanced. After the (single or double) rotation, the subtree is balanced **and its height is back to $H$**. So every ancestor of $z$ sees exactly the heights it saw before the insertion, and their balance factors are unchanged. That is why AVL insertion does at most one single or double rotation: $O(1)$ restructuring plus $O(\\log n)$ for the walk. (Deletion is different: the repaired subtree can end up one shorter, so rotations may cascade up to the root, still $O(\\log n)$ in total.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'You insert $30$, then $10$, then $20$ into an empty AVL tree. What happens on the third insertion?',
      options: [
        { text: 'Case LL: one right rotation at $30$, leaving $10$ at the root', why: 'LL would need the new key in the **left** subtree of $30$\'s left child $10$. But $20 > 10$, so it went to $10$\'s right: a zigzag.' },
        { text: 'Case LR: rotate left at $10$, then right at $30$, leaving $20$ at the root', correct: true, why: '$30$ gets balance factor $+2$; the key went into the right subtree of its left child. The double rotation lifts $20$, the middle key, to the top: $20(10, 30)$.' },
        { text: 'Case RL: rotate right at $10$, then left at $30$', why: 'RL is for a right-heavy node whose right child is left-heavy. Here $30$ is left-heavy.' },
        { text: 'Nothing: the tree $30(10(-, 20), -)$ is still an AVL tree', why: '$30$ has a left subtree of height $1$ and an empty right subtree (height $-1$): balance factor $+2$. That violates the invariant.' },
      ],
      explanation: 'After inserting $20$ as the right child of $10$, the path is $30 \\to 10 \\to 20$, a zigzag. Balance factors: $10$ has $-1$, $30$ has $+2$. A single right rotation at $30$ would give $10(-, 30(20, -))$, which is just as unbalanced (balance factor $-2$ at $10$). The left rotation at $10$ first straightens the path to $30 \\to 20 \\to 10$ (case LL), and the right rotation at $30$ then gives the perfectly balanced $20(10, 30)$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Insert the keys $1, 2, 3, 4, 5, 6, 7$ in this order into an empty AVL tree. Which key ends up at the root?',
      answer: '4',
      label: 'root $=$',
      hint: 'Every insertion goes to the far right, so every repair is case RR (a left rotation). Track the tree after inserting $3$, $5$, $6$ and $7$.',
      explanation: 'Insert $1, 2, 3$: $1$ gets balance factor $-2$, RR, rotate left: $2(1, 3)$. Insert $4$: fine. Insert $5$: $3$ becomes $-2$, rotate left at $3$: $2(1, 4(3, 5))$. Insert $6$: now the root $2$ is $-2$ (left height $0$, right height $2$), RR, rotate left at $2$: $4(2(1, 3), 5(-, 6))$. Insert $7$: $5$ is $-2$, rotate left at $5$: $4(2(1, 3), 6(5, 7))$. The root is $4$ and the tree is perfect, height $2$. Sorted input, the worst case for a plain BST, is handled with four rotations.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Implementing an AVL tree',
      blocks: [
        {
          type: 'p',
          text: 'With `std::unique_ptr` links taken by reference, the recursive insertion is short: recurse into the correct side, then **rebalance on the way back up**. Each return from the recursion is one step of the upward walk in the animation. Heights are stored in the nodes, so every balance factor costs $O(1)$.',
        },
        {
          type: 'code',
          title: 'avl.cpp',
          runnable: true,
          code: CODE.avl,
          output: OUT.avl,
          annotations: [
            { lines: '9-14', text: 'Each node stores its height. An `int8_t` would do (an AVL tree of height $127$ needs about $10^{27}$ nodes, far beyond any machine), but `int` keeps the code simple.' },
            { lines: '17-19', text: '`h` treats a null link as height $-1$, so leaves and missing children need no special cases.' },
            { lines: '28-36', text: 'The rotation from the first card. `update(*y)` must run before `update(*x)`, because $x$\'s height depends on $y$\'s new height.' },
            { lines: '48-58', text: 'The four cases in ten lines. A child balance factor of the "wrong" sign means a zigzag (LR or RL): straighten it with a rotation at the child first.' },
            { lines: '60-66', text: 'Rebalancing after each recursive call checks every node on the path. Below the repaired node nothing changes; above it the heights are unchanged, so the checks are cheap no-ops.' },
            { lines: '69-75', text: 'An independent checker: BST order, the AVL condition at every node, and stored heights equal to true heights.' },
            { lines: '78-81', text: 'Sorted input of $1023 = 2^{10} - 1$ keys builds a perfect tree of height $9$, where a plain BST would reach height $1022$.' },
          ],
        },
        {
          type: 'p',
          text: 'The output shows the numbers that matter in practice: after $100\\,000$ random insertions (about $95\\,000$ distinct keys), the height is $19$, below the guaranteed AVL bound of $23$ for that many keys, and there were about $0.67$ rotations per insertion.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What interviews ask about AVL trees',
          text: 'You are rarely asked to code a full AVL tree, but you are asked: draw the tree after these insertions; which rotation(s) does this insertion need; what are the height bounds of AVL and red–black trees; and why does `std::map` use a red–black tree rather than an AVL tree. Know the four cases cold and be able to justify $1.44 \\log_2 n$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'This right rotation compiles and keeps the BST order, but after some rotations the stored heights are wrong and the tree stops rebalancing correctly. Tap the first line that is wrong. (`Link` is `std::unique_ptr<Node>`; `update(n)` sets `n.height` from its children\'s stored heights.)',
      lines: [
        '`Link x = std::move(y->left);`',
        '`y->left = std::move(x->right);`',
        '`x->right = std::move(y);`',
        '`update(*x);`',
        '`update(*x->right);`',
        '`y = std::move(x);`',
      ],
      errorLines: [4],
      explanation: 'Heights must be recomputed bottom-up. After line 3, the old $y$ is $x$\'s right child, and its stored height is stale: it still includes $x$\'s old subtree. Line 4 computes $x$\'s height from that stale value, so $x$ can end up one too tall. Line 5 then fixes $y$, but too late for $x$. Swap lines 4 and 5 (or update $y$ right after line 2, as `avl.cpp` does). Lines 1–3 and 6 are the correct pointer surgery.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Red–black trees: the invariants behind std::map',
      blocks: [
        {
          type: 'p',
          text: 'A **[[dsa-red-black-tree|red–black tree]]** balances less strictly than an AVL tree, in exchange for cheaper updates. Every node is colored red or black, and null links count as black leaves.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Every node is red or black.',
            'The root is black.',
            'A red node has no red children (no two reds in a row on any path).',
            'For each node, every path from it down to a null link contains the same number of black nodes: its **black height**.',
          ],
        },
        {
          type: 'derivation',
          title: 'Why the height is at most $2 \\log_2(n + 1)$',
          steps: [
            { tex: '\\text{a subtree with black height } b \\text{ has at least } 2^b - 1 \\text{ nodes}', why: 'By induction: a node with black height $b$ has two children of black height at least $b - 1$ (a black child lowers it by one, a red child keeps it), each with at least $2^{b-1} - 1$ nodes; $2(2^{b-1} - 1) + 1 = 2^b - 1$.' },
            { tex: 'b(\\text{root}) \\ge h/2', why: 'Rule 3: on a longest root-to-null path, at least half the nodes are black, since no two reds are adjacent.' },
            { tex: 'n \\ge 2^{h/2} - 1 \\implies h \\le 2 \\log_2(n + 1)', why: 'Combine the two lines and solve for $h$.' },
          ],
          result: 'Rule 4 makes all paths equally black; rule 3 lets a path be at most twice as long as the all-black ones. So the longest path is at most twice the shortest, and the height is logarithmic.',
        },
        {
          type: 'p',
          text: 'The rules look arbitrary until you see what a red–black tree really is: a binary encoding of a **[[dsa-2-3-4-tree|2-3-4 tree]]**, a search tree whose nodes hold $1$–$3$ keys and whose leaves are all at the same depth. Glue each black node to its red children: you get one 2-3-4 node. Equal black heights are the "all leaves at the same depth" rule, and "no red–red" says a 2-3-4 node holds at most three keys.',
        },
        {
          type: 'figure',
          svg: FIG.rb234,
          alt: 'Left: a red-black tree with black root 13; red children 8 and 17; black 1, 11, 15, 25 below them; red 6 under 1; red 22 and 27 under 25. Right: the same keys as a 2-3-4 tree: root node [8, 13, 17] with children [1, 6], [11], [15], [22, 25, 27].',
          caption: 'Each black node plus its red children is one 2-3-4 node. Every root-to-null path in the red–black tree passes $2$ black nodes below the root, matching the 2-3-4 tree\'s uniform leaf depth.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: '**Insertion** adds a red leaf (which keeps black heights equal) and then repairs any red–red violation. If the new node\'s **uncle** is red, recolor (parent and uncle black, grandparent red) and continue from the grandparent: that is a 2-3-4 node split. If the uncle is black, one or two rotations and a color swap finish the job. So an insertion does at most **two** rotations, a deletion at most three, and the recolorings cost $O(1)$ amortized.',
        },
        ALGO.rb,
        {
          type: 'table',
          headers: ['Property', 'AVL tree', 'Red–black tree'],
          rows: [
            ['height bound', '$\\approx 1.44 \\log_2 n$', '$2 \\log_2(n + 1)$'],
            ['rotations per insert', '$\\le 2$', '$\\le 2$'],
            ['rotations per delete', 'up to $O(\\log n)$', '$\\le 3$'],
            ['extra data per node', 'height or balance factor', 'one color bit'],
            ['best for', 'lookup-heavy workloads', 'mixed workloads; the standard library'],
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Inside std::map and std::set',
          text: 'libstdc++ (GCC), libc++ (Clang) and Microsoft\'s STL all implement the ordered associative containers as red–black trees with parent pointers. The parent pointer is what makes `++it` an amortized $O(1)$ in-order step without a stack, and it is why `std::map` iterators survive insertions and deletions of other elements: nodes are relinked, never moved. The C++ standard does not mandate red–black trees; it mandates $O(\\log n)$ operations and those iterator guarantees, which red–black trees deliver with the fewest structural changes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'True or false: in a red–black tree, the longest path from the root to a null link is at most twice as long as the shortest such path.',
      answer: true,
      explanation: 'True. Every root-to-null path has the same number $b$ of black nodes (rule 4). The shortest possible path is all black: length about $b$. On any path, red nodes cannot be adjacent (rule 3), so at most one red follows each black: length at most about $2b$. This "factor of two" is exactly what gives $h \\le 2 \\log_2(n + 1)$. It is weaker than the AVL guarantee, where sibling subtrees differ in height by at most one.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'All four nodes of this tree are black: root $20$ with children $10$ and $30$, and $40$ as the right child of $30$. It is a valid BST. Which red–black rule does it break?',
      figure: {
        type: 'figure',
        svg: FIG.rbbad,
        alt: 'Four black nodes: root 20 with children 10 and 30; 30 has a right child 40.',
        maxWidth: 260,
      },
      options: [
        { text: 'The root must be black', why: 'The root, $20$, is black. That rule holds.' },
        { text: 'A red node may not have a red child', why: 'There are no red nodes at all, so this rule cannot be broken.' },
        { text: 'Every path to a null link must contain the same number of black nodes', correct: true, why: 'The path $20 \\to 10 \\to$ null has $2$ black nodes, but $20 \\to 30 \\to 40 \\to$ null has $3$. Equal black heights fail at the root (and at $30$: $1$ on its left, $2$ on its right).' },
        { text: 'None: it is a valid red–black tree', why: 'Black heights differ between paths, so it is not valid. Coloring $40$ red would fix it.' },
      ],
      explanation: 'Count black nodes on each path from the root down to a null link: via $10$ you pass $20, 10$ ($2$); via $30$\'s empty left link you pass $20, 30$ ($2$); via $40$ you pass $20, 30, 40$ ($3$). Rule 4 requires all of these to be equal. Recoloring $40$ red makes every count $2$ and gives a valid red–black tree; in 2-3-4 terms, $30$ and $40$ then form one 3-node.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Beyond binary: B-trees, skip lists and choosing a structure',
      blocks: [
        {
          type: 'p',
          text: 'Binary trees minimize **comparisons**. On real hardware, the cost that matters is often **memory transfers**: a disk or SSD reads whole blocks (4–16 KB), and even RAM delivers 64-byte cache lines. A red–black tree with a million keys has height about $20$–$40$, and each level is a separate node somewhere in memory: up to that many cache misses per lookup, or that many disk reads if the tree lives on disk.',
        },
        {
          type: 'heading',
          text: 'B-trees: fat nodes, short trees',
        },
        {
          type: 'p',
          text: 'A **[[dsa-b-tree|B-tree]]** stores many keys per node, sorted, so one node fills a disk page or several cache lines. A node with $k$ keys has $k + 1$ children; inside a node you binary search the keys to choose the child. All leaves are at the same depth (like the 2-3-4 tree, which is a B-tree with at most $3$ keys per node), and with branching factor $B$ the height is about $\\log_B n$. Databases and file systems use the **B+ tree** variant: internal nodes only route searches, all records sit in the leaves, and the leaves are linked for fast range scans.',
        },
        {
          type: 'figure',
          svg: FIG.bplus,
          alt: 'A B+ tree. The root holds keys 30 and 60 and has three children: leaves [5, 12, 21], [30, 41, 52] and [60, 75, 88], linked left to right by dashed arrows.',
          caption: 'A tiny B+ tree. Real ones have hundreds of keys per node, so a billion records need only three or four levels.',
          maxWidth: 520,
        },
        {
          type: 'heading',
          text: 'Skip lists: balance by coin flips',
        },
        {
          type: 'p',
          text: 'A **[[dsa-skip-list|skip list]]** is a sorted linked list with extra "express lanes". Each node is promoted to the next level up with probability $\\tfrac12$, so level $\\ell$ holds about $n / 2^\\ell$ nodes. A search runs right along the top lane until the next key would overshoot, drops down a level, and repeats: $O(\\log n)$ expected steps. There are no rotations; an insertion splices a node into a few neighboring lists. That locality makes concurrent and lock-free versions far simpler than for balanced trees, which is why Java\'s `ConcurrentSkipListMap`, Redis sorted sets (leaderboards) and LevelDB/RocksDB memtables use them.',
        },
        {
          type: 'figure',
          svg: FIG.skip,
          alt: 'A skip list with keys 3, 9, 14, 21, 30, 37, 45, 52 on level 0; 9, 21, 37, 52 on level 1; 9 and 37 on level 2. The search path for 30 is highlighted: along level 2 to 9, down, along level 1 to 21, down, along level 0 to 30.',
          caption: 'Searching for $30$: across the top lane to $9$ (the next key, $37$, would overshoot), down; across to $21$, down; one step to $30$.',
          maxWidth: 520,
        },
        {
          type: 'code',
          title: 'nodes.cpp',
          runnable: true,
          code: CODE.nodes,
          output: OUT.nodes,
          annotations: [
            { lines: '9-21', text: 'A minimal counting allocator. The container rebinds it to its internal node type, so `sizeof(T)` is the size of a whole tree node.' },
            { lines: '26-29', text: 'One allocation per element, $40$ bytes per 4-byte key on 64-bit libstdc++: three pointers and a color next to the key.' },
            { lines: '32-39', text: 'A sorted vector: one allocation, 4 bytes per key, and a binary search that walks contiguous memory.' },
          ],
        },
        {
          type: 'table',
          headers: ['Workload', 'Good choice', 'Why'],
          rows: [
            ['ordered map in memory, mixed updates', '`std::map` / `std::set` (red–black)', 'guaranteed $O(\\log n)$, stable iterators, in the standard library'],
            ['lookups dominate, updates rare', 'sorted `std::vector` (or AVL)', 'contiguous memory, no per-node overhead'],
            ['data on disk or SSD; huge in-memory maps', 'B-tree / B+ tree', 'each node is one block: height $\\approx \\log_B n$'],
            ['concurrent ordered map', 'skip list', 'local updates, no rotations'],
            ['no ordering needed', '`std::unordered_map`', 'expected $O(1)$'],
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A B+ tree index stores $10^9$ keys. Every internal node has $1000$ children, every leaf holds $1000$ keys, and every node is full. How many levels does the tree have, counting the root and the leaf level? (Each level costs one disk read per lookup.)',
      answer: '3',
      label: 'levels $=$',
      hint: 'How many leaves are needed? How many levels of $1000$-way branching reach that many leaves?',
      explanation: '$10^9$ keys at $1000$ per leaf need $10^6$ leaves. One internal level of $1000$-way branching reaches $1000$ nodes, two levels reach $1000^2 = 10^6$. So: the root ($1$ node), one internal level ($1000$ nodes), and the leaves ($10^6$ nodes): $3$ levels. A lookup reads three blocks, and in practice the root and the internal level are cached in RAM, leaving one disk read. Any binary search tree of $10^9$ keys has height at least $\\lfloor \\log_2 10^9 \\rfloor = 29$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Why do databases index tables with B+ trees rather than red–black trees?',
      options: [
        { text: 'B+ trees do fewer key comparisons per lookup', why: 'Not really: searching inside each fat node still costs about $\\log_2$ of its size in comparisons, so the total is about $\\log_2 n$ either way.' },
        { text: 'Their wide nodes match disk blocks, so a lookup reads only $\\log_B n$ blocks instead of about $\\log_2 n$ scattered nodes', correct: true, why: 'The expensive operation is a block read, and a B+ tree packs hundreds of keys into each block, cutting the height (and the reads) by a factor of about $\\log_2 B$.' },
        { text: 'Red–black trees cannot store more than $2^{32}$ keys', why: 'There is no such limit; the structure works for any number of keys.' },
        { text: 'B+ trees never need rebalancing', why: 'They do: full nodes split and underfull nodes merge or borrow from siblings. These repairs are what keep every leaf at the same depth.' },
      ],
      explanation: 'Both structures do $O(\\log n)$ comparisons. The difference is the cost model: on disk, one block read costs as much as millions of comparisons. A node of a B+ tree is one block holding hundreds of keys, so the height, and the number of reads, is $\\log_B n$ (three or four for billions of rows). The linked leaves also make range queries (`WHERE id BETWEEN a AND b`) a sequential scan. The same reasoning, with cache lines instead of disk blocks, is why in-memory B-tree maps often beat `std::map`.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Put the steps of **AVL insertion** in order.',
      lines: [
        'Search for the key and attach it as a new leaf, as in a plain BST',
        'Walk back up toward the root, recomputing heights and balance factors',
        'Stop at the lowest node whose balance factor has become $\\pm 2$',
        'Determine the case (LL, RR, LR or RL) from the path the new key took below that node',
        'Apply the single or double rotation; the subtree regains its old height, so no ancestor needs fixing',
      ],
      explanation: 'Insertion is a plain BST insertion followed by a repair pass up the search path. The first node found with balance factor $\\pm 2$ is the lowest unbalanced node; the two steps of the path below it (left-left, right-right, left-right or right-left) choose the rotation. After the rotation the subtree has the height it had before the insertion, so the walk can stop: at most one single or double rotation per insertion.',
    },
  ],
  takeaways: [
    'A rotation changes three links in $O(1)$, keeps the inorder sequence (so the BST invariant), and moves height from one side to the other; every classic balanced tree repairs itself with rotations.',
    'AVL trees keep every balance factor in $\\{-1, 0, +1\\}$; the sparsest trees satisfy $N(h) = N(h-1) + N(h-2) + 1$ (Fibonacci), so $h < 1.44 \\log_2 n$.',
    'AVL insertion: BST insert, walk up, fix the lowest node with balance factor $\\pm 2$ by case LL/RR (one rotation) or LR/RL (two); the subtree regains its old height, so one repair suffices.',
    'Red–black trees: black root, no red–red, equal black heights. Then $h \\le 2 \\log_2(n + 1)$; they encode 2-3-4 trees, need at most $2$ rotations per insert and $3$ per delete, and implement `std::map`/`std::set`.',
    'B-trees use wide nodes to minimize block reads ($\\log_B n$ levels) and run databases and file systems; skip lists get expected $O(\\log n)$ from coin flips and suit concurrency.',
    'Choose by workload: `std::map` for mixed ordered updates, sorted vectors for read-mostly data, B-trees for disk, skip lists for concurrency, hash tables when order does not matter.',
  ],
  reading: [
    { title: 'Sedgewick & Wayne, Algorithms (4th ed.)', url: 'https://algs4.cs.princeton.edu/home/', source: 'book', note: 'Section 3.3, "Balanced Search Trees", derives red–black trees from 2-3 trees (left-leaning red–black trees) with clear diagrams.' },
    { title: 'MIT 6.006 Introduction to Algorithms (Spring 2020)', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/', source: 'other', note: 'Lecture 7, "Binary Trees, Part 2: AVL", proves the height bound and walks through the rotation cases.' },
    { title: 'Red–black tree (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Red%E2%80%93black_tree', source: 'wikipedia', note: 'All insertion and deletion cases with diagrams, the 2-3-4 tree correspondence, and where red–black trees are used.' },
    { title: 'VisuAlgo', url: 'https://visualgo.net/en', source: 'other', note: 'The AVL tree visualization animates each rotation case on keys you choose.' },
  ],
};
