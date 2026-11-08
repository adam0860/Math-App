import type { Lesson } from '../../types';

// Figures (graph drawings generated with the graph kit; theme-aware SVG).
const FIG: Record<string, string> = {
  "bfsdfs": `<svg viewBox="0 0 520 225" xmlns="http://www.w3.org/2000/svg"><line x1="62.9" y1="50.5" x2="132.1" y2="41.5" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="51.8" y1="64.0" x2="56.2" y2="127.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="155.8" y1="42.3" x2="225.2" y2="55.7" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="136.1" y1="49.0" x2="64.9" y2="130.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="145.0" y1="52.0" x2="149.0" y2="102.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="226.9" y1="64.5" x2="160.1" y2="107.5" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="68.6" y1="135.9" x2="138.4" y2="117.1" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="66.0" y1="147.0" x2="104.0" y2="181.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="144.7" y1="124.8" x2="118.3" y2="178.2" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="159.9" y1="120.8" x2="221.1" y2="163.2" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="124.8" y1="187.1" x2="219.2" y2="171.9" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="236.4" y1="70.0" x2="231.6" y2="158.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="327.9" y1="50.5" x2="397.1" y2="41.5" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="316.8" y1="64.0" x2="321.2" y2="127.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="420.8" y1="42.3" x2="490.2" y2="55.7" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="401.1" y1="49.0" x2="329.9" y2="130.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="410.0" y1="52.0" x2="414.0" y2="102.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="491.9" y1="64.5" x2="425.1" y2="107.5" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="333.6" y1="135.9" x2="403.4" y2="117.1" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="331.0" y1="147.0" x2="369.0" y2="181.0" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="409.7" y1="124.8" x2="383.3" y2="178.2" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="424.9" y1="120.8" x2="486.1" y2="163.2" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="389.8" y1="187.1" x2="484.2" y2="171.9" stroke="currentColor" stroke-width="3.2" class="s-purple"/><line x1="501.4" y1="70.0" x2="496.6" y2="158.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><circle cx="51" cy="52" r="12" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="51" y="57" text-anchor="middle" font-size="12" class="t-green">A</text><circle cx="144" cy="40" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="144" y="45" text-anchor="middle" font-size="12">B</text><circle cx="237" cy="58" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="237" y="63" text-anchor="middle" font-size="12">C</text><circle cx="57" cy="139" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="57" y="144" text-anchor="middle" font-size="12">D</text><circle cx="150" cy="114" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="119" text-anchor="middle" font-size="12">E</text><circle cx="113" cy="189" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="113" y="194" text-anchor="middle" font-size="12">F</text><circle cx="231" cy="170" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="231" y="175" text-anchor="middle" font-size="12">G</text><circle cx="316" cy="52" r="12" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="316" y="57" text-anchor="middle" font-size="12" class="t-green">A</text><circle cx="409" cy="40" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="409" y="45" text-anchor="middle" font-size="12">B</text><circle cx="502" cy="58" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="502" y="63" text-anchor="middle" font-size="12">C</text><circle cx="322" cy="139" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="322" y="144" text-anchor="middle" font-size="12">D</text><circle cx="415" cy="114" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="415" y="119" text-anchor="middle" font-size="12">E</text><circle cx="378" cy="189" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="378" y="194" text-anchor="middle" font-size="12">F</text><circle cx="496" cy="170" r="12" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="496" y="175" text-anchor="middle" font-size="12">G</text><text x="135" y="220" text-anchor="middle" font-size="13">BFS tree from A</text><text x="400" y="220" text-anchor="middle" font-size="13">DFS tree from A</text></svg>`,
  "graph": `<svg viewBox="0 0 400 310" xmlns="http://www.w3.org/2000/svg"><line x1="66.9" y1="57.8" x2="183.1" y2="42.2" stroke="currentColor" stroke-width="1.6"/><line x1="51.2" y1="77.0" x2="58.8" y2="183.0" stroke="currentColor" stroke-width="1.6"/><line x1="216.7" y1="43.3" x2="333.3" y2="66.7" stroke="currentColor" stroke-width="1.6"/><line x1="188.8" y1="52.8" x2="71.2" y2="187.2" stroke="currentColor" stroke-width="1.6"/><line x1="201.4" y1="56.9" x2="208.6" y2="143.1" stroke="currentColor" stroke-width="1.6"/><line x1="335.7" y1="79.2" x2="224.3" y2="150.8" stroke="currentColor" stroke-width="1.6"/><line x1="76.4" y1="195.6" x2="193.6" y2="164.4" stroke="currentColor" stroke-width="1.6"/><line x1="72.7" y1="211.3" x2="137.3" y2="268.7" stroke="currentColor" stroke-width="1.6"/><line x1="202.4" y1="175.2" x2="157.6" y2="264.8" stroke="currentColor" stroke-width="1.6"/><line x1="224.0" y1="169.7" x2="326.0" y2="240.3" stroke="currentColor" stroke-width="1.6"/><line x1="166.8" y1="277.3" x2="323.2" y2="252.7" stroke="currentColor" stroke-width="1.6"/><line x1="349.1" y1="87.0" x2="340.9" y2="233.0" stroke="currentColor" stroke-width="1.6"/><circle cx="50" cy="60" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="65" text-anchor="middle" font-size="14">A</text><circle cx="200" cy="40" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="45" text-anchor="middle" font-size="14">B</text><circle cx="350" cy="70" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350" y="75" text-anchor="middle" font-size="14">C</text><circle cx="60" cy="200" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="205" text-anchor="middle" font-size="14">D</text><circle cx="210" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="210" y="165" text-anchor="middle" font-size="14">E</text><circle cx="150" cy="280" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="285" text-anchor="middle" font-size="14">F</text><circle cx="340" cy="250" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="340" y="255" text-anchor="middle" font-size="14">G</text><text x="123.5" y="43.6" text-anchor="middle" font-size="13">4</text><text x="66.0" y="133.7" text-anchor="middle" font-size="13">3</text><text x="277.2" y="48.7" text-anchor="middle" font-size="13">9</text><text x="121.7" y="117.3" text-anchor="middle" font-size="13">7</text><text x="215.0" y="103.7" text-anchor="middle" font-size="13">6</text><text x="285.9" y="128.8" text-anchor="middle" font-size="13">5</text><text x="132.2" y="173.9" text-anchor="middle" font-size="13">11</text><text x="97.7" y="252.7" text-anchor="middle" font-size="13">8</text><text x="188.9" y="229.0" text-anchor="middle" font-size="13">10</text><text x="281.3" y="200.5" text-anchor="middle" font-size="13">12</text><text x="246.7" y="280.4" text-anchor="middle" font-size="13">2</text><text x="356.0" y="165.1" text-anchor="middle" font-size="13">14</text></svg>`,
  "kruskal": `<svg viewBox="0 0 400 310" xmlns="http://www.w3.org/2000/svg"><line x1="66.9" y1="57.8" x2="183.1" y2="42.2" stroke="currentColor" stroke-width="3.4" class="s-green"/><line x1="51.2" y1="77.0" x2="58.8" y2="183.0" stroke="currentColor" stroke-width="3.4" class="s-green"/><line x1="216.7" y1="43.3" x2="333.3" y2="66.7" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="188.8" y1="52.8" x2="71.2" y2="187.2" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="201.4" y1="56.9" x2="208.6" y2="143.1" stroke="currentColor" stroke-width="3.4" class="s-green"/><line x1="335.7" y1="79.2" x2="224.3" y2="150.8" stroke="currentColor" stroke-width="3.4" class="s-green"/><line x1="76.4" y1="195.6" x2="193.6" y2="164.4" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="72.7" y1="211.3" x2="137.3" y2="268.7" stroke="currentColor" stroke-width="3.4" class="s-green"/><line x1="202.4" y1="175.2" x2="157.6" y2="264.8" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="224.0" y1="169.7" x2="326.0" y2="240.3" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="166.8" y1="277.3" x2="323.2" y2="252.7" stroke="currentColor" stroke-width="3.4" class="s-green"/><line x1="349.1" y1="87.0" x2="340.9" y2="233.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><circle cx="50" cy="60" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="65" text-anchor="middle" font-size="14">A</text><circle cx="200" cy="40" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="45" text-anchor="middle" font-size="14">B</text><circle cx="350" cy="70" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350" y="75" text-anchor="middle" font-size="14">C</text><circle cx="60" cy="200" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="205" text-anchor="middle" font-size="14">D</text><circle cx="210" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="210" y="165" text-anchor="middle" font-size="14">E</text><circle cx="150" cy="280" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="285" text-anchor="middle" font-size="14">F</text><circle cx="340" cy="250" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="340" y="255" text-anchor="middle" font-size="14">G</text><text x="123.5" y="43.6" text-anchor="middle" font-size="13" class="t-green">4</text><text x="66.0" y="133.7" text-anchor="middle" font-size="13" class="t-green">3</text><text x="277.2" y="48.7" text-anchor="middle" font-size="13" class="t-gray">9</text><text x="121.7" y="117.3" text-anchor="middle" font-size="13" class="t-gray">7</text><text x="215.0" y="103.7" text-anchor="middle" font-size="13" class="t-green">6</text><text x="285.9" y="128.8" text-anchor="middle" font-size="13" class="t-green">5</text><text x="132.2" y="173.9" text-anchor="middle" font-size="13" class="t-gray">11</text><text x="97.7" y="252.7" text-anchor="middle" font-size="13" class="t-green">8</text><text x="188.9" y="229.0" text-anchor="middle" font-size="13" class="t-gray">10</text><text x="281.3" y="200.5" text-anchor="middle" font-size="13" class="t-gray">12</text><text x="246.7" y="280.4" text-anchor="middle" font-size="13" class="t-green">2</text><text x="356.0" y="165.1" text-anchor="middle" font-size="13" class="t-gray">14</text></svg>`,
  "maze": `<svg viewBox="0 0 420 264" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="20" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="40" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="60" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="80" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="100" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="140" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="180" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="200" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="220" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="260" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="280" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="300" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="340" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="360" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="380" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="0" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="20" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="280" y="20" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="20" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="360" y="20" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="20" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="20" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="40" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="60" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="80" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="140" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="180" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="200" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="280" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="360" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="40" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="60" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="40" y="60" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="80" y="60" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="60" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="60" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="60" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="60" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="40" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="80" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="180" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="200" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="280" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="300" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="360" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="380" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="80" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="100" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="100" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="100" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="100" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="40" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="60" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="80" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="100" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="200" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="220" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="260" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="280" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="360" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="380" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="120" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="140" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="80" y="140" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="140" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="200" y="140" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="140" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="140" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="20" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="40" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="80" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="100" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="140" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="180" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="200" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="280" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="300" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="360" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="380" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="160" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="180" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="200" y="180" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="180" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="280" y="180" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="180" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="20" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="40" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="60" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="80" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="180" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="200" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="280" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="300" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="340" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="360" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="200" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="220" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="220" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="220" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="220" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="220" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="0" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="20" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="40" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="60" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="80" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="100" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="120" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="140" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="160" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="180" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="200" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="220" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="240" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="260" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="280" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="300" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="320" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="340" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="360" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="380" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><rect x="400" y="240" width="20" height="20" fill="currentColor" fill-opacity="0.75" shape-rendering="crispEdges"/><polyline points="10.0,30.0 30.0,30.0 50.0,30.0 70.0,30.0 90.0,30.0 110.0,30.0 110.0,50.0 110.0,70.0 110.0,90.0 110.0,110.0 130.0,110.0 150.0,110.0 170.0,110.0 190.0,110.0 210.0,110.0 230.0,110.0 230.0,90.0 230.0,70.0 230.0,50.0 230.0,30.0 250.0,30.0 270.0,30.0 270.0,50.0 270.0,70.0 290.0,70.0 310.0,70.0 330.0,70.0 350.0,70.0 350.0,90.0 350.0,110.0 350.0,130.0 350.0,150.0 350.0,170.0 350.0,190.0 370.0,190.0 390.0,190.0 390.0,210.0 390.0,230.0 410.0,230.0" fill="none" stroke="currentColor" stroke-width="4" class="s-orange" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
  "prim": `<svg viewBox="0 0 520 305" xmlns="http://www.w3.org/2000/svg"><line x1="36.9" y1="30.7" x2="73.1" y2="25.3" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="28.7" y1="41.0" x2="31.3" y2="73.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="90.8" y1="25.8" x2="127.2" y2="33.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="76.1" y1="30.8" x2="37.9" y2="75.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="82.8" y1="33.0" x2="85.2" y2="59.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="128.5" y1="40.0" x2="93.5" y2="63.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="40.7" y1="79.7" x2="77.3" y2="70.3" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="38.7" y1="88.0" x2="57.3" y2="105.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="81.9" y1="76.0" x2="68.1" y2="103.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="93.4" y1="73.1" x2="124.6" y2="94.9" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="72.9" y1="109.6" x2="123.1" y2="101.4" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="135.4" y1="44.0" x2="132.6" y2="91.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="208.9" y1="30.7" x2="245.1" y2="25.3" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="200.7" y1="41.0" x2="203.3" y2="73.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="262.8" y1="25.8" x2="299.2" y2="33.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="248.1" y1="30.8" x2="209.9" y2="75.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="254.8" y1="33.0" x2="257.2" y2="59.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="300.5" y1="40.0" x2="265.5" y2="63.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="212.7" y1="79.7" x2="249.3" y2="70.3" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="210.7" y1="88.0" x2="229.3" y2="105.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="253.9" y1="76.0" x2="240.1" y2="103.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="265.4" y1="73.1" x2="296.6" y2="94.9" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="244.9" y1="109.6" x2="295.1" y2="101.4" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="307.4" y1="44.0" x2="304.6" y2="91.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="380.9" y1="30.7" x2="417.1" y2="25.3" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="372.7" y1="41.0" x2="375.3" y2="73.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="434.8" y1="25.8" x2="471.2" y2="33.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="420.1" y1="30.8" x2="381.9" y2="75.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="426.8" y1="33.0" x2="429.2" y2="59.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="472.5" y1="40.0" x2="437.5" y2="63.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="384.7" y1="79.7" x2="421.3" y2="70.3" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="382.7" y1="88.0" x2="401.3" y2="105.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="425.9" y1="76.0" x2="412.1" y2="103.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="437.4" y1="73.1" x2="468.6" y2="94.9" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="416.9" y1="109.6" x2="467.1" y2="101.4" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="479.4" y1="44.0" x2="476.6" y2="91.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="36.9" y1="180.7" x2="73.1" y2="175.3" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="28.7" y1="191.0" x2="31.3" y2="223.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="90.8" y1="175.8" x2="127.2" y2="183.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="76.1" y1="180.8" x2="37.9" y2="225.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="82.8" y1="183.0" x2="85.2" y2="209.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="128.5" y1="190.0" x2="93.5" y2="213.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="40.7" y1="229.7" x2="77.3" y2="220.3" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="38.7" y1="238.0" x2="57.3" y2="255.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="81.9" y1="226.0" x2="68.1" y2="253.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="93.4" y1="223.1" x2="124.6" y2="244.9" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="72.9" y1="259.6" x2="123.1" y2="251.4" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="135.4" y1="194.0" x2="132.6" y2="241.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="208.9" y1="180.7" x2="245.1" y2="175.3" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="200.7" y1="191.0" x2="203.3" y2="223.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="262.8" y1="175.8" x2="299.2" y2="183.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="248.1" y1="180.8" x2="209.9" y2="225.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="254.8" y1="183.0" x2="257.2" y2="209.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="300.5" y1="190.0" x2="265.5" y2="213.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="212.7" y1="229.7" x2="249.3" y2="220.3" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="210.7" y1="238.0" x2="229.3" y2="255.0" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="253.9" y1="226.0" x2="240.1" y2="253.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="265.4" y1="223.1" x2="296.6" y2="244.9" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="244.9" y1="259.6" x2="295.1" y2="251.4" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="307.4" y1="194.0" x2="304.6" y2="241.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="380.9" y1="180.7" x2="417.1" y2="175.3" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="372.7" y1="191.0" x2="375.3" y2="223.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="434.8" y1="175.8" x2="471.2" y2="183.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="420.1" y1="180.8" x2="381.9" y2="225.2" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="426.8" y1="183.0" x2="429.2" y2="209.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="472.5" y1="190.0" x2="437.5" y2="213.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="384.7" y1="229.7" x2="421.3" y2="220.3" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="382.7" y1="238.0" x2="401.3" y2="255.0" stroke="currentColor" stroke-width="3" class="s-green"/><line x1="425.9" y1="226.0" x2="412.1" y2="253.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="437.4" y1="223.1" x2="468.6" y2="244.9" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><line x1="416.9" y1="259.6" x2="467.1" y2="251.4" stroke="currentColor" stroke-width="3.4" class="s-orange"/><line x1="479.4" y1="194.0" x2="476.6" y2="241.0" stroke="currentColor" stroke-width="1" class="s-gray" stroke-dasharray="5 4"/><circle cx="28" cy="32" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="28" y="37" text-anchor="middle" font-size="10" class="t-green">A</text><circle cx="82" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="82" y="29" text-anchor="middle" font-size="10">B</text><circle cx="136" cy="35" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="136" y="40" text-anchor="middle" font-size="10">C</text><circle cx="32" cy="82" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="32" y="87" text-anchor="middle" font-size="10" class="t-green">D</text><circle cx="86" cy="68" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="86" y="73" text-anchor="middle" font-size="10">E</text><circle cx="64" cy="111" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="64" y="116" text-anchor="middle" font-size="10">F</text><circle cx="132" cy="100" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="132" y="105" text-anchor="middle" font-size="10">G</text><circle cx="200" cy="32" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="200" y="37" text-anchor="middle" font-size="10" class="t-green">A</text><circle cx="254" cy="24" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="254" y="29" text-anchor="middle" font-size="10" class="t-green">B</text><circle cx="308" cy="35" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="308" y="40" text-anchor="middle" font-size="10">C</text><circle cx="204" cy="82" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="204" y="87" text-anchor="middle" font-size="10" class="t-green">D</text><circle cx="258" cy="68" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="258" y="73" text-anchor="middle" font-size="10">E</text><circle cx="236" cy="111" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="236" y="116" text-anchor="middle" font-size="10">F</text><circle cx="304" cy="100" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="304" y="105" text-anchor="middle" font-size="10">G</text><circle cx="372" cy="32" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="372" y="37" text-anchor="middle" font-size="10" class="t-green">A</text><circle cx="426" cy="24" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="426" y="29" text-anchor="middle" font-size="10" class="t-green">B</text><circle cx="480" cy="35" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="480" y="40" text-anchor="middle" font-size="10">C</text><circle cx="376" cy="82" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="376" y="87" text-anchor="middle" font-size="10" class="t-green">D</text><circle cx="430" cy="68" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="430" y="73" text-anchor="middle" font-size="10" class="t-green">E</text><circle cx="408" cy="111" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="408" y="116" text-anchor="middle" font-size="10">F</text><circle cx="476" cy="100" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="476" y="105" text-anchor="middle" font-size="10">G</text><circle cx="28" cy="182" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="28" y="187" text-anchor="middle" font-size="10" class="t-green">A</text><circle cx="82" cy="174" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="82" y="179" text-anchor="middle" font-size="10" class="t-green">B</text><circle cx="136" cy="185" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="136" y="190" text-anchor="middle" font-size="10" class="t-green">C</text><circle cx="32" cy="232" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="32" y="237" text-anchor="middle" font-size="10" class="t-green">D</text><circle cx="86" cy="218" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="86" y="223" text-anchor="middle" font-size="10" class="t-green">E</text><circle cx="64" cy="261" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="64" y="266" text-anchor="middle" font-size="10">F</text><circle cx="132" cy="250" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="132" y="255" text-anchor="middle" font-size="10">G</text><circle cx="200" cy="182" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="200" y="187" text-anchor="middle" font-size="10" class="t-green">A</text><circle cx="254" cy="174" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="254" y="179" text-anchor="middle" font-size="10" class="t-green">B</text><circle cx="308" cy="185" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="308" y="190" text-anchor="middle" font-size="10" class="t-green">C</text><circle cx="204" cy="232" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="204" y="237" text-anchor="middle" font-size="10" class="t-green">D</text><circle cx="258" cy="218" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="258" y="223" text-anchor="middle" font-size="10" class="t-green">E</text><circle cx="236" cy="261" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="236" y="266" text-anchor="middle" font-size="10" class="t-green">F</text><circle cx="304" cy="250" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="304" y="255" text-anchor="middle" font-size="10">G</text><circle cx="372" cy="182" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="372" y="187" text-anchor="middle" font-size="10" class="t-green">A</text><circle cx="426" cy="174" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="426" y="179" text-anchor="middle" font-size="10" class="t-green">B</text><circle cx="480" cy="185" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="480" y="190" text-anchor="middle" font-size="10" class="t-green">C</text><circle cx="376" cy="232" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="376" y="237" text-anchor="middle" font-size="10" class="t-green">D</text><circle cx="430" cy="218" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="430" y="223" text-anchor="middle" font-size="10" class="t-green">E</text><circle cx="408" cy="261" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="408" y="266" text-anchor="middle" font-size="10" class="t-green">F</text><circle cx="476" cy="250" r="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/><text x="476" y="255" text-anchor="middle" font-size="10" class="t-green">G</text><text x="82" y="138" text-anchor="middle" font-size="12">step 1: add AD (3)</text><text x="254" y="138" text-anchor="middle" font-size="12">step 2: add AB (4)</text><text x="426" y="138" text-anchor="middle" font-size="12">step 3: add BE (6)</text><text x="82" y="288" text-anchor="middle" font-size="12">step 4: add CE (5)</text><text x="254" y="288" text-anchor="middle" font-size="12">step 5: add DF (8)</text><text x="426" y="288" text-anchor="middle" font-size="12">step 6: add FG (2)</text></svg>`,
  "qgraph": `<svg viewBox="0 0 360 270" xmlns="http://www.w3.org/2000/svg"><line x1="66.9" y1="57.8" x2="183.1" y2="42.2" stroke="currentColor" stroke-width="1.6"/><line x1="55.0" y1="76.2" x2="85.0" y2="173.8" stroke="currentColor" stroke-width="1.6"/><line x1="189.9" y1="53.7" x2="100.1" y2="176.3" stroke="currentColor" stroke-width="1.6"/><line x1="213.2" y1="50.8" x2="296.8" y2="119.2" stroke="currentColor" stroke-width="1.6"/><line x1="106.4" y1="185.5" x2="293.6" y2="134.5" stroke="currentColor" stroke-width="1.6"/><line x1="106.3" y1="194.7" x2="213.7" y2="225.3" stroke="currentColor" stroke-width="1.6"/><line x1="299.4" y1="143.3" x2="240.6" y2="216.7" stroke="currentColor" stroke-width="1.6"/><circle cx="50" cy="60" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="65" text-anchor="middle" font-size="14">P</text><circle cx="200" cy="40" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="45" text-anchor="middle" font-size="14">Q</text><circle cx="90" cy="190" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90" y="195" text-anchor="middle" font-size="14">R</text><circle cx="310" cy="130" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="310" y="135" text-anchor="middle" font-size="14">S</text><circle cx="230" cy="230" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="230" y="235" text-anchor="middle" font-size="14">T</text><text x="123.5" y="43.6" text-anchor="middle" font-size="13">3</text><text x="59.5" y="132.7" text-anchor="middle" font-size="13">1</text><text x="136.1" y="113.0" text-anchor="middle" font-size="13">4</text><text x="262.0" y="81.0" text-anchor="middle" font-size="13">2</text><text x="197.4" y="154.9" text-anchor="middle" font-size="13">6</text><text x="157.3" y="224.1" text-anchor="middle" font-size="13">5</text><text x="278.6" y="191.4" text-anchor="middle" font-size="13">7</text></svg>`,
};

// Runnable C++ examples and their exact output.
const CODE: Record<string, string> = {
  "kruskal": `#include <algorithm>
#include <cstdio>
#include <numeric>
#include <vector>

// Union-find (disjoint-set union): which component is each vertex in?
struct UnionFind {
    std::vector<int> parent, size;
    explicit UnionFind(int n) : parent(n), size(n, 1) {
        std::iota(parent.begin(), parent.end(), 0);  // everyone is their own root
    }
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];  // path halving: shortcut as we climb
            x = parent[x];
        }
        return x;
    }
    bool unite(int a, int b) {  // false if a and b were already connected
        a = find(a);
        b = find(b);
        if (a == b) return false;
        if (size[a] < size[b]) std::swap(a, b);  // hang the smaller tree under the larger
        parent[b] = a;
        size[a] += size[b];
        return true;
    }
};

struct Edge { int u, v, w; };

int main() {
    const char* name = "ABCDEFG";
    std::vector<Edge> edges = {
        {0, 1, 4}, {0, 3, 3}, {1, 2, 9}, {1, 3, 7}, {1, 4, 6}, {2, 4, 5},
        {3, 4, 11}, {3, 5, 8}, {4, 5, 10}, {4, 6, 12}, {5, 6, 2}, {2, 6, 14}};

    std::sort(edges.begin(), edges.end(),
              [](const Edge& a, const Edge& b) { return a.w < b.w; });
    UnionFind uf(7);
    int total = 0, used = 0;
    for (const Edge& e : edges) {
        bool ok = uf.unite(e.u, e.v);  // joins two components, or would close a cycle
        std::printf("%c%c %2d  %s\\n", name[e.u], name[e.v], e.w, ok ? "accept" : "reject (cycle)");
        if (ok) { total += e.w; ++used; }
        if (used == 6) break;  // n - 1 edges: the tree is complete
    }
    std::printf("MST weight = %d\\n", total);
}`,
  "maze": `#include <cstdint>
#include <cstdio>
#include <numeric>
#include <string>
#include <utility>
#include <vector>

struct UnionFind {
    std::vector<int> parent;
    explicit UnionFind(int n) : parent(n) { std::iota(parent.begin(), parent.end(), 0); }
    int find(int x) { return parent[x] == x ? x : parent[x] = find(parent[x]); }
    bool unite(int a, int b) {
        a = find(a); b = find(b);
        if (a == b) return false;
        parent[a] = b;
        return true;
    }
};

// xorshift32: a tiny PRNG, so the maze is the same on every compiler.
std::uint32_t rngState = 2024;
std::uint32_t nextRandom() {
    rngState ^= rngState << 13;
    rngState ^= rngState >> 17;
    rngState ^= rngState << 5;
    return rngState;
}

int main() {
    const int W = 10, H = 6;  // cells; cell (r, c) has id r * W + c
    // Every wall between two neighbouring cells is an edge of the grid graph.
    std::vector<std::pair<int, int>> walls;
    for (int r = 0; r < H; ++r)
        for (int c = 0; c < W; ++c) {
            if (c + 1 < W) walls.push_back({r * W + c, r * W + c + 1});    // wall to the east
            if (r + 1 < H) walls.push_back({r * W + c, (r + 1) * W + c});  // wall to the south
        }
    // Random edge order = random weights. Fisher-Yates shuffle.
    for (int i = static_cast<int>(walls.size()) - 1; i > 0; --i)
        std::swap(walls[i], walls[nextRandom() % (i + 1)]);

    // Character grid: cells at odd positions, everything starts as wall '#'.
    std::vector<std::string> g(2 * H + 1, std::string(2 * W + 1, '#'));
    for (int r = 0; r < H; ++r)
        for (int c = 0; c < W; ++c) g[2 * r + 1][2 * c + 1] = ' ';

    UnionFind uf(W * H);
    int removed = 0;
    for (auto [a, b] : walls) {
        if (!uf.unite(a, b)) continue;  // already connected: keep the wall (no cycle)
        int r1 = a / W, c1 = a % W, r2 = b / W, c2 = b % W;
        g[r1 + r2 + 1][c1 + c2 + 1] = ' ';  // knock down the wall between them
        ++removed;
    }
    g[1][0] = ' ';                  // entrance
    g[2 * H - 1][2 * W] = ' ';      // exit
    for (const auto& row : g) {
        for (char ch : row) std::printf("%s", ch == '#' ? "##" : "  ");
        std::printf("\\n");
    }
    std::printf("walls removed: %d = %d cells - 1\\n", removed, W * H);
}`,
};

const OUT: Record<string, string> = {
  "kruskal": `FG  2  accept
AD  3  accept
AB  4  accept
CE  5  accept
BE  6  accept
BD  7  reject (cycle)
DF  8  accept
MST weight = 28`,
  "maze": `##########################################
            ##              ##  ##  ##  ##
##########  ##########  ##  ##  ##  ##  ##
##  ##  ##  ##  ##      ##              ##
##  ##  ##  ##  ######  ##  ######  ######
##                      ##      ##      ##
##  ##########  ##  ##########  ##  ######
##      ##      ##  ##          ##      ##
######  ##############  ##  ######  ######
##                  ##  ##  ##          ##
##########  ##  ######  ##  ##########  ##
##          ##  ##      ##      ##        
##########################################
walls removed: 59 = 60 cells - 1`,
};

export const lesson: Lesson = {
  id: 'dm-spanning-trees',
  title: 'Spanning Trees and Minimum Spanning Trees',
  summary: 'The cheapest way to keep everything connected: spanning trees from BFS and DFS, minimum spanning trees and the cut property, Kruskal\'s algorithm with union–find, Prim\'s algorithm step by step — and perfect mazes generated by randomized Kruskal.',
  minutes: 22,
  objectives: [
    'Define a spanning tree, explain why every connected graph has one, and build one with BFS or DFS',
    'State the minimum spanning tree problem and justify greedy algorithms with the cut property',
    'Run Kruskal\'s algorithm by hand and implement it in C++ with a union–find structure',
    'Run Prim\'s algorithm by hand, keeping track of the tree and the crossing edges',
    'Generate a perfect maze with randomized Kruskal and explain why it has exactly one path between any two cells',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Spanning trees',
      blocks: [
        {
          type: 'p',
          text: 'A network of $n$ computers, a power grid, the corridors of a dungeon: often we want everything connected, but with no redundant links. Last lesson showed what that structure is — a tree. Now we look for one *inside* a given graph.',
        },
        {
          type: 'definition',
          term: 'Spanning tree',
          text: 'A [[dm-spanning-tree|spanning tree]] of a graph $G$ is a subgraph that is a tree and contains **every** vertex of $G$. It has exactly $n - 1$ of $G$\'s edges.',
        },
        {
          type: 'theorem',
          name: 'Existence',
          text: 'A graph has a spanning tree **if and only if** it is connected. *Proof:* a spanning tree is connected and contains all vertices, so $G$ is connected. Conversely, while a connected graph has a cycle, delete one edge of the cycle; the graph stays connected (the rest of the cycle reroutes around the gap). The number of edges drops each time, so this stops, at a connected acyclic graph on all vertices: a spanning tree.',
        },
        {
          type: 'p',
          text: 'In practice we do not delete edges; we **grow** a tree. A [[dm-bfs|BFS]] or [[dm-dfs|DFS]] from any vertex discovers every vertex of a connected graph exactly once, each along one edge — and those discovery edges form a spanning tree.',
        },
        {
          type: 'figure',
          svg: FIG.bfsdfs,
          alt: 'Two copies of a 7-vertex graph A to G. Left, the BFS tree from A in blue: A-B, A-D, B-C, B-E, D-F, C-G. Right, the DFS tree from A in purple: A-B, B-C, C-E, E-D, D-F, F-G. Non-tree edges are gray dashed.',
          caption: 'Two spanning trees of the same graph (neighbours visited alphabetically). BFS gives a short, bushy tree; DFS gives a long, path-like one. Both have $7 - 1 = 6$ edges.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'How many spanning trees?',
          text: 'Usually a great many. Cayley\'s formula says $K_n$ has $n^{n-2}$ spanning trees: $16$ for $K_4$, and $10^8$ for $K_{10}$. That is why "find the best one" needs a clever algorithm rather than a search through all of them.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A connected graph has $10$ vertices and $17$ edges. How many edges must be removed to leave a spanning tree?',
      answer: '8',
      explanation: 'A spanning tree on $10$ vertices has exactly $10 - 1 = 9$ edges, so $17 - 9 = 8$ edges must go. This number, $m - n + 1$, is called the **cycle rank**: it counts the independent cycles of the graph, since each removed edge breaks one cycle.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Minimum spanning trees and the cut property',
      blocks: [
        {
          type: 'p',
          text: 'Now give every edge a cost — the length of cable between two buildings, the price of a road. A [[dm-mst|minimum spanning tree]] (MST) is a spanning tree whose total edge weight is as small as possible: the cheapest way to connect everything.',
        },
        {
          type: 'figure',
          svg: FIG.graph,
          alt: 'A weighted graph on A to G: AB 4, AD 3, BC 9, BD 7, BE 6, CE 5, DE 11, DF 8, EF 10, EG 12, FG 2, CG 14.',
          caption: 'Our running example: $7$ vertices, $12$ weighted edges. Any spanning tree uses $6$ of them.',
          maxWidth: 380,
        },
        {
          type: 'p',
          text: 'Both classic MST algorithms are **greedy**: they repeatedly commit to the cheapest edge that is safe. Why is greed safe here, when it fails for so many other problems (like the traveling salesperson)? Because of one structural fact.',
        },
        {
          type: 'theorem',
          name: 'Cut property',
          text: 'Split the vertices into two nonempty groups $S$ and $V \\setminus S$ (a **cut**). If $e$ is the strictly lightest edge with one end in each group, then $e$ belongs to **every** minimum spanning tree.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Proof by exchange',
          text: 'Suppose an MST $T$ does not contain $e = \\{u, v\\}$, with $u \\in S$ and $v \\notin S$. The unique path in $T$ from $u$ to $v$ starts in $S$ and ends outside it, so it uses some edge $f$ that also crosses the cut. Swap: $T\' = T - f + e$. Removing $f$ splits $T$ into two pieces, one containing $u$ and one containing $v$, and $e$ joins them again, so $T\'$ is still a spanning tree. But $w(e) < w(f)$, so $T\'$ is lighter than $T$ — contradicting that $T$ was minimum. $\\blacksquare$',
        },
        {
          type: 'p',
          text: 'Consequences: if all edge weights are distinct, the MST is **unique**; and any algorithm that only ever adds the lightest edge across *some* cut builds an MST. Kruskal and Prim are two ways of choosing those cuts.',
        },
        {
          type: 'list',
          items: [
            '**Network design:** cabling, pipelines, power lines, road networks — connect all sites at minimum cost.',
            '**Clustering:** build the MST, then delete its $k - 1$ heaviest edges to split the data into $k$ clusters.',
            '**Approximation:** an MST gives a tour at most twice the optimum for the traveling salesperson problem (with triangle-inequality distances).',
            '**Games:** connect procedurally placed dungeon rooms with the fewest, shortest corridors, then add a few extra edges back for loops; generate perfect mazes (end of this lesson).',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'True or false: the shortest-path tree that Dijkstra\'s algorithm builds from a vertex $s$ is always a minimum spanning tree.',
      answer: false,
      explanation: 'False. They optimize different things. Take a triangle with $w(s, a) = 2$, $w(s, b) = 2$, $w(a, b) = 1$. Dijkstra\'s tree from $s$ uses $sa$ and $sb$ (each vertex by its shortest route), total $4$. The MST uses $ab$ and one of the $2$-edges, total $3$. A shortest-path tree minimizes each distance **from $s$**; an MST minimizes the **total** weight.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Kruskal\'s algorithm and union–find',
      blocks: [
        {
          type: 'p',
          text: '[[dm-kruskal|Kruskal\'s algorithm]] (Joseph Kruskal, 1956) builds a forest that merges into one tree:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Sort', text: 'Sort all edges by weight, lightest first.' },
            { title: 'Scan', text: 'For each edge in order: if its endpoints are in **different** trees of the forest, add it (merging the two trees); if they are already in the same tree, skip it — it would close a cycle.' },
            { title: 'Stop', text: 'After $n - 1$ edges have been added.' },
          ],
        },
        {
          type: 'table',
          headers: ['Edge', 'Weight', 'Decision', 'Why'],
          rows: [
            ['$FG$', '$2$', 'accept', 'joins $\\{F\\}$ and $\\{G\\}$'],
            ['$AD$', '$3$', 'accept', 'joins $\\{A\\}$ and $\\{D\\}$'],
            ['$AB$', '$4$', 'accept', 'joins $\\{A, D\\}$ and $\\{B\\}$'],
            ['$CE$', '$5$', 'accept', 'joins $\\{C\\}$ and $\\{E\\}$'],
            ['$BE$', '$6$', 'accept', 'joins $\\{A, B, D\\}$ and $\\{C, E\\}$'],
            ['$BD$', '$7$', 'reject', '$B$ and $D$ are both in $\\{A, B, C, D, E\\}$: cycle $A\\,B\\,D$'],
            ['$DF$', '$8$', 'accept', 'joins $\\{A, B, C, D, E\\}$ and $\\{F, G\\}$ — $6$ edges, done'],
          ],
          caption: 'Kruskal on the example. The remaining edges ($9, 10, 11, 12, 14$) never need to be examined.',
        },
        {
          type: 'figure',
          svg: FIG.kruskal,
          alt: 'The weighted graph with the MST edges FG 2, AD 3, AB 4, CE 5, BE 6, DF 8 in green and all other edges dashed.',
          caption: 'The minimum spanning tree (green): $2 + 3 + 4 + 5 + 6 + 8 = 28$.',
          maxWidth: 380,
        },
        {
          type: 'p',
          text: 'The only tricky part is the test "are $u$ and $v$ already in the same tree?". A [[dm-union-find|union–find]] (disjoint-set) structure answers it: each tree of the forest is stored as an upside-down tree of `parent` pointers, `find(x)` climbs to the representative root, and `unite(a, b)` hangs one root under the other.',
        },
        {
          type: 'code',
          title: 'kruskal.cpp',
          runnable: true,
          code: CODE.kruskal,
          output: OUT.kruskal,
          annotations: [
            { lines: '9-11', text: 'Initially every vertex is its own component: `parent[x] = x`.' },
            { lines: '12-18', text: '`find` climbs to the root. Path halving re-points nodes to their grandparents on the way, keeping the trees flat.' },
            { lines: '19-27', text: '`unite` returns `false` when both ends already share a root — exactly the "would close a cycle" case. Union by size keeps trees shallow.' },
            { lines: '38-39', text: 'Step 1: sort edges by weight, $O(m \\log m)$ — the dominant cost.' },
            { lines: '42-47', text: 'Step 2: scan; stop once $n - 1 = 6$ edges are in.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why each accepted edge is safe',
          text: 'When Kruskal accepts $e = \\{u, v\\}$, let $S$ be the current tree containing $u$. Every lighter edge has already been examined, and none crossing from $S$ was accepted — those would have merged $S$ with something. So $e$ is the lightest edge leaving $S$, and the cut property puts it in the MST. With union by size and path compression, each union–find operation costs nearly constant amortized time, so Kruskal runs in $O(m \\log m)$ overall.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'Run Kruskal\'s algorithm on this graph. Arrange the edges it **accepts**, in the order it accepts them.',
      figure: {
        type: 'figure',
        svg: FIG.qgraph,
        alt: 'Five vertices P, Q, R, S, T. Edges: PQ 3, PR 1, QR 4, QS 2, RS 6, RT 5, ST 7.',
        maxWidth: 300,
      },
      lines: ['$PR$ (1)', '$QS$ (2)', '$PQ$ (3)', '$RT$ (5)'],
      distractors: ['$QR$ (4)', '$RS$ (6)'],
      hint: 'Sort the edges by weight. Skip any edge whose endpoints are already connected by accepted edges.',
      explanation: 'Sorted: $PR\\,1, QS\\,2, PQ\\,3, QR\\,4, RT\\,5, RS\\,6, ST\\,7$. Accept $PR$, $QS$, $PQ$ (now $\\{P, Q, R, S\\}$ is one tree). Reject $QR$: $Q$ and $R$ are already joined through $P$. Accept $RT$ — that is $5 - 1 = 4$ edges, so stop. $RS$ would also have been rejected. MST weight: $1 + 2 + 3 + 5 = 11$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'What is the total weight of the minimum spanning tree of the same graph ($PQ = 3$, $PR = 1$, $QR = 4$, $QS = 2$, $RS = 6$, $RT = 5$, $ST = 7$)?',
      answer: '11',
      label: 'MST weight $=$',
      explanation: 'Kruskal accepts $PR\\,(1)$, $QS\\,(2)$, $PQ\\,(3)$ and $RT\\,(5)$, for a total of $1 + 2 + 3 + 5 = 11$. Check: $4$ edges for $5$ vertices, no cycle, and every vertex is reached. Since all weights are distinct, this MST is the only one.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student runs Kruskal on the example graph ($AB\\,4$, $AD\\,3$, $BC\\,9$, $BD\\,7$, $BE\\,6$, $CE\\,5$, $DE\\,11$, $DF\\,8$, $EF\\,10$, $EG\\,12$, $FG\\,2$, $CG\\,14$). Find the first incorrect line.',
      lines: [
        'Accept $FG\\,(2)$, $AD\\,(3)$, $AB\\,(4)$, $CE\\,(5)$.',
        'Accept $BE\\,(6)$: it joins $\\{A, B, D\\}$ with $\\{C, E\\}$.',
        'Accept $BD\\,(7)$: it is the next lightest edge.',
        'That makes $6$ edges for $7$ vertices, so the tree is complete.',
        'MST weight $= 2 + 3 + 4 + 5 + 6 + 7 = 27$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 forgets the cycle test: $B$ and $D$ are already connected (through $A$), so $BD$ would close the cycle $A\\,B\\,D$ and must be rejected. Kruskal then accepts $DF\\,(8)$ as the sixth edge, and the MST weight is $2 + 3 + 4 + 5 + 6 + 8 = 28$. (The student\'s "$27$" is lighter than the true minimum precisely because it is not a tree — it contains a cycle and leaves $F, G$ disconnected.)',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Prim\'s algorithm: grow one tree',
      blocks: [
        {
          type: 'p',
          text: '[[dm-prim|Prim\'s algorithm]] (Jarník 1930, Prim 1957) grows a **single** tree from a start vertex. At each step it looks at all edges with exactly one end in the tree and adds the lightest one, along with its new vertex.',
        },
        {
          type: 'figure',
          svg: FIG.prim,
          alt: 'Six small copies of the example graph showing Prim from A. Step 1 adds AD (3), step 2 AB (4), step 3 BE (6), step 4 CE (5), step 5 DF (8), step 6 FG (2). Tree vertices are shaded green, the newly added edge is orange.',
          caption: 'Prim from $A$. Green: the tree so far; orange: the edge added at that step.',
        },
        {
          type: 'table',
          headers: ['Step', 'Tree vertices', 'Lightest crossing edges (candidates)', 'Add'],
          rows: [
            ['1', '$A$', '$AD\\,3$, $AB\\,4$', '$AD\\,(3)$'],
            ['2', '$A, D$', '$AB\\,4$, $BD\\,7$, $DF\\,8$, $DE\\,11$', '$AB\\,(4)$'],
            ['3', '$A, B, D$', '$BE\\,6$, $DF\\,8$, $BC\\,9$, $DE\\,11$', '$BE\\,(6)$'],
            ['4', '$A, B, D, E$', '$CE\\,5$, $DF\\,8$, $BC\\,9$, $EF\\,10$, $EG\\,12$', '$CE\\,(5)$'],
            ['5', '$A, B, C, D, E$', '$DF\\,8$, $EF\\,10$, $EG\\,12$, $CG\\,14$', '$DF\\,(8)$'],
            ['6', '$A, B, C, D, E, F$', '$FG\\,2$, $EG\\,12$, $CG\\,14$', '$FG\\,(2)$'],
          ],
          caption: 'Edges with both ends in the tree (like $BD$ after step 2) are no longer candidates. Total: $3 + 4 + 6 + 5 + 8 + 2 = 28$ — the same tree Kruskal found, as it must be with distinct weights.',
        },
        {
          type: 'derivation',
          title: 'Why step 4 picks $CE$ although it is lighter than step 3\'s edge',
          steps: [
            { tex: '\\text{step 3: } C, E \\notin \\text{tree}', why: 'Before step 3, $CE$ has **no** end in the tree, so it is not a candidate — Prim only looks at edges leaving the tree.' },
            { tex: '\\text{after step 3: } E \\in \\text{tree}', why: '$BE$ brought $E$ in, so $CE$ now crosses the cut.' },
            { tex: 'w(CE) = 5 < 8, 9, 10, 12', why: 'It is the lightest crossing edge.' },
          ],
          result: 'Prim\'s added weights need not increase step by step ($6$ then $5$, and $8$ then $2$), unlike Kruskal\'s.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Prim vs. Kruskal',
          text: 'Prim with a binary heap of candidate edges runs in $O(m \\log n)$ and looks almost exactly like Dijkstra — the only change is the priority: Dijkstra uses $d[u] + w(u, v)$ (distance from the start), Prim uses just $w(u, v)$ (cost of attaching $v$). Prim suits dense graphs and adjacency lists you are already traversing; Kruskal suits sparse graphs given as an edge list, and its union–find is reusable elsewhere — as the maze generator below shows.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Prim\'s algorithm on the example graph, starting at $A$, has added $AD$ and $AB$. Which edge does it add next?',
      figure: {
        type: 'figure',
        svg: FIG.graph,
        alt: 'A weighted graph on A to G: AB 4, AD 3, BC 9, BD 7, BE 6, CE 5, DE 11, DF 8, EF 10, EG 12, FG 2, CG 14.',
        maxWidth: 340,
      },
      options: [
        { text: '$FG\\,(2)$', why: 'It is the lightest edge overall, but neither $F$ nor $G$ is in the tree, so it does not leave the tree. (Kruskal would take it first; Prim does not.)' },
        { text: '$BD\\,(7)$', why: 'Both $B$ and $D$ are already in the tree; adding $BD$ would create the cycle $A\\,B\\,D$.' },
        { text: '$BE\\,(6)$', correct: true, why: 'The tree is $\\{A, B, D\\}$. Edges leaving it: $BE\\,6$, $DF\\,8$, $BC\\,9$, $DE\\,11$. The lightest is $BE$.' },
        { text: '$CE\\,(5)$', why: 'Neither $C$ nor $E$ is in the tree yet. $CE$ becomes a candidate only after $E$ joins.' },
      ],
      explanation: 'Prim only considers edges with **exactly one** endpoint in the current tree $\\{A, B, D\\}$: $BE\\,(6)$, $DF\\,(8)$, $BC\\,(9)$ and $DE\\,(11)$. It picks the lightest, $BE$. That is the cut property applied to the cut $\\{A, B, D\\}$ vs. the rest.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Procedural mazes with randomized Kruskal',
      blocks: [
        {
          type: 'p',
          text: 'Here is a lovely game-dev application. Treat each cell of a grid as a vertex and each wall between two neighbouring cells as an edge. A **perfect maze** — every cell reachable, exactly one route between any two cells, no loops — is precisely a **spanning tree** of this grid graph, where tree edges are walls we knock down.',
        },
        {
          type: 'p',
          text: 'To get a *random* spanning tree, run Kruskal with the edges in random order (as if every wall had a random weight): go through the walls in shuffled order and knock a wall down exactly when the two cells on either side are not yet connected.',
        },
        {
          type: 'figure',
          svg: FIG.maze,
          alt: 'A 10 by 6 cell maze with an entrance on the left of the top row and an exit on the right of the bottom row; the unique path between them is drawn in orange.',
          caption: 'A $10 \\times 6$ maze produced by the program below, with its unique entrance-to-exit path in orange.',
        },
        {
          type: 'code',
          title: 'maze.cpp',
          runnable: true,
          code: CODE.maze,
          output: OUT.maze,
          annotations: [
            { lines: '20-27', text: 'xorshift32 PRNG. `std::shuffle` with `std::mt19937` is fine in a game, but its output can differ between standard libraries; a hand-written PRNG keeps this example\'s output fixed.' },
            { lines: '32-37', text: 'The grid graph: one edge per interior wall ($9 \\cdot 6 + 10 \\cdot 5 = 104$ of them).' },
            { lines: '39-40', text: 'Fisher–Yates shuffle: a uniformly random order, i.e. random weights.' },
            { lines: '49-54', text: 'Kruskal with union–find. A wall is removed only when it joins two different regions, so no loop is ever created.' },
            { lines: '57-60', text: 'Each grid character is printed twice so the maze looks square in a terminal.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why exactly one path between any two cells',
          text: 'The removed walls form a spanning tree of the $60$ cells (exactly $59$ removals, as the output confirms: $n - 1$). A tree is connected — so every cell is reachable — and has a **unique path** between any two vertices, so there are no loops and no alternative routes. Delete a few extra walls afterwards if you want loops (players find perfect mazes frustrating in action games, but they are ideal for puzzles).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Other maze generators are spanning-tree algorithms too',
          text: 'The "recursive backtracker" is randomized DFS (long winding corridors); randomized Prim grows from one cell (many short dead ends); Wilson\'s algorithm uses loop-erased random walks and produces every spanning tree with equal probability. Same math, different textures.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Randomized Kruskal generates a perfect maze on a $20 \\times 15$ grid of cells. How many walls between cells does it knock down?',
      answer: '299',
      explanation: 'The cells are the $20 \\cdot 15 = 300$ vertices, and the knocked-down walls are the edges of a spanning tree, so there are $300 - 1 = 299$ of them — whatever the random order. (The grid has $19 \\cdot 15 + 20 \\cdot 14 = 565$ interior walls, so $266$ remain standing.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'In a maze generated by randomized Kruskal, why is there **exactly one** route between any two cells?',
      options: [
        { text: 'Because the walls were shuffled uniformly at random', why: 'The shuffle decides *which* maze you get, not its structure. Any order gives a perfect maze.' },
        { text: 'Because the open passages form a spanning tree of the grid graph, and a tree has a unique path between any two vertices', correct: true, why: 'Connected (spanning) gives at least one route; acyclic (tree) gives at most one.' },
        { text: 'Because Kruskal always picks the lightest edge', why: 'With random weights, "lightest" just means "next in the random order". Uniqueness comes from never closing a cycle.' },
        { text: 'Because the grid graph is bipartite', why: 'The grid graph is bipartite, but that is unrelated: the full grid has many routes between cells.' },
      ],
      explanation: 'Union–find refuses any wall whose removal would connect two cells that are already connected, so the passages never form a loop: they are acyclic. Kruskal keeps going until everything is one component, so they are connected. Connected + acyclic = tree, and in a tree the path between two vertices is unique.',
    },
  ],
  takeaways: [
    'A spanning tree contains every vertex and $n - 1$ edges; a graph has one iff it is connected, and BFS/DFS discovery edges give one directly.',
    'Cut property: the lightest edge crossing any cut is in every MST — the reason greedy MST algorithms are correct (and with distinct weights the MST is unique).',
    'Kruskal: sort edges, add each one that joins two different components; union–find makes the cycle test nearly $O(1)$, total $O(m \\log m)$.',
    'Prim: grow one tree, always adding the lightest edge leaving it; with a heap $O(m \\log n)$, structurally twin to Dijkstra.',
    'Randomized Kruskal on a grid graph generates perfect mazes: the open passages form a spanning tree, so every cell is reachable by exactly one route.',
  ],
  reading: [
    { title: 'Kruskal\'s algorithm (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Kruskal%27s_algorithm', source: 'wikipedia', note: 'Pseudocode, a worked example, a proof of correctness and the role of the disjoint-set structure.' },
    { title: 'Prim\'s algorithm (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Prim%27s_algorithm', source: 'wikipedia', note: 'The algorithm, its history (Jarník 1930) and its running time with different priority queues.' },
    { title: 'Maze generation algorithm (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Maze_generation_algorithm', source: 'wikipedia', note: 'Randomized DFS, Kruskal, Prim and Wilson\'s algorithm, each with an animation of the maze being built.' },
    { title: 'Levin, Discrete Mathematics: An Open Introduction', url: 'https://discrete.openmathbooks.org/dmoi3.html', source: 'book', note: 'The trees section discusses spanning trees and their properties.' },
  ],
};
