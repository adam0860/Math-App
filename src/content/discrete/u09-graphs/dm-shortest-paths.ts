import type { Lesson } from '../../types';

// Figures (graph drawings generated with the graph kit; theme-aware SVG).
const FIG: Record<string, string> = {
  "astargrid": `<svg viewBox="0 0 496 212" xmlns="http://www.w3.org/2000/svg"><text x="119.0" y="17" text-anchor="middle" font-size="13">Dijkstra (h = 0)</text><rect x="5" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="24" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="43" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="62" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="81" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="100" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="119" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="138" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="157" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="176" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="195" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="214" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="5" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="24" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="43" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="62" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="81" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="100" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="119" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="138" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="157" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="176" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="195" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="214" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="5" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="24" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="43" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="62" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="81" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="100" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="119" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="138" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="157" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="176" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="195" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="214" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="5" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="24" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="43" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="62" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="81" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="100" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="119" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="138" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="157" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="176" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="195" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="5" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="24" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="43" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="62" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="81" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="100" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="119" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="138" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="157" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="5" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="24" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="43" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="62" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="81" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="100" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="119" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="138" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="157" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="176" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="5" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="24" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="43" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="62" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="81" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="100" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="119" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="138" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="157" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="176" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="195" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="5" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="24" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="43" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="62" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="81" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="100" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="119" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="138" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="157" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="176" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="195" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="214" y="158" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><line x1="5" y1="25" x2="233" y2="25" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="5" y1="44" x2="233" y2="44" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="5" y1="63" x2="233" y2="63" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="5" y1="82" x2="233" y2="82" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="5" y1="101" x2="233" y2="101" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="5" y1="120" x2="233" y2="120" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="5" y1="139" x2="233" y2="139" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="5" y1="158" x2="233" y2="158" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="5" y1="177" x2="233" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="5" y1="25" x2="5" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="24" y1="25" x2="24" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="43" y1="25" x2="43" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="62" y1="25" x2="62" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="81" y1="25" x2="81" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="100" y1="25" x2="100" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="119" y1="25" x2="119" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="138" y1="25" x2="138" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="157" y1="25" x2="157" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="176" y1="25" x2="176" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="195" y1="25" x2="195" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="214" y1="25" x2="214" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="233" y1="25" x2="233" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><polyline points="33.5,91.5 33.5,72.5 33.5,53.5 33.5,34.5 52.5,34.5 71.5,34.5 90.5,34.5 109.5,34.5 128.5,34.5 147.5,34.5 166.5,34.5 185.5,34.5 204.5,34.5 204.5,53.5 204.5,72.5 204.5,91.5" fill="none" stroke="currentColor" stroke-width="3" class="s-orange" stroke-linejoin="round"/><circle cx="33.5" cy="91.5" r="8" fill="currentColor" class="f-green"/><text x="33.5" y="95.5" text-anchor="middle" font-size="10" fill="#ffffff">S</text><circle cx="204.5" cy="91.5" r="8" fill="currentColor" class="f-red"/><text x="204.5" y="95.5" text-anchor="middle" font-size="10" fill="#ffffff">G</text><text x="119.0" y="195" text-anchor="middle" font-size="12" class="t-gray">79 cells expanded · path length 15</text><text x="377.0" y="17" text-anchor="middle" font-size="13">A* (Manhattan h)</text><rect x="358" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="377" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="396" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="415" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="434" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="453" y="25" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="282" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="301" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="320" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="339" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="358" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="377" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="453" y="44" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="263" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="282" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="301" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="320" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="339" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="358" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="377" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="453" y="63" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="263" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="282" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="301" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="320" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="339" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="358" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="377" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="453" y="82" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="263" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="282" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="301" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="320" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="339" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="358" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="377" y="101" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="282" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="301" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="320" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="339" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="358" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.22" class="f-blue"/><rect x="377" y="120" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="301" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="320" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="339" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="358" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><rect x="377" y="139" width="19" height="19" fill="currentColor" fill-opacity="0.55" class="f-gray"/><line x1="263" y1="25" x2="491" y2="25" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="263" y1="44" x2="491" y2="44" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="263" y1="63" x2="491" y2="63" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="263" y1="82" x2="491" y2="82" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="263" y1="101" x2="491" y2="101" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="263" y1="120" x2="491" y2="120" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="263" y1="139" x2="491" y2="139" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="263" y1="158" x2="491" y2="158" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="263" y1="177" x2="491" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="263" y1="25" x2="263" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="282" y1="25" x2="282" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="301" y1="25" x2="301" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="320" y1="25" x2="320" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="339" y1="25" x2="339" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="358" y1="25" x2="358" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="377" y1="25" x2="377" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="396" y1="25" x2="396" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="415" y1="25" x2="415" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="434" y1="25" x2="434" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="453" y1="25" x2="453" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="472" y1="25" x2="472" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><line x1="491" y1="25" x2="491" y2="177" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.8"/><polyline points="291.5,91.5 310.5,91.5 329.5,91.5 348.5,91.5 367.5,91.5 367.5,72.5 367.5,53.5 367.5,34.5 386.5,34.5 405.5,34.5 424.5,34.5 443.5,34.5 462.5,34.5 462.5,53.5 462.5,72.5 462.5,91.5" fill="none" stroke="currentColor" stroke-width="3" class="s-orange" stroke-linejoin="round"/><circle cx="291.5" cy="91.5" r="8" fill="currentColor" class="f-green"/><text x="291.5" y="95.5" text-anchor="middle" font-size="10" fill="#ffffff">S</text><circle cx="462.5" cy="91.5" r="8" fill="currentColor" class="f-red"/><text x="462.5" y="95.5" text-anchor="middle" font-size="10" fill="#ffffff">G</text><text x="377.0" y="195" text-anchor="middle" font-size="12" class="t-gray">37 cells expanded · path length 15</text></svg>`,
  "bfslayers": `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg"><line x1="54.3" y1="100.7" x2="125.7" y2="54.3" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="54.3" y1="119.3" x2="125.7" y2="165.7" stroke="currentColor" stroke-width="1.6"/><line x1="157.0" y1="45.0" x2="233.0" y2="45.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="151.0" y1="162.0" x2="239.0" y2="58.0" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="157.0" y1="175.0" x2="233.0" y2="175.0" stroke="currentColor" stroke-width="1.6"/><line x1="264.6" y1="53.6" x2="345.4" y2="101.4" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="264.6" y1="166.4" x2="345.4" y2="118.6" stroke="currentColor" stroke-width="2.6" class="s-gray" stroke-dasharray="5 4"/><line x1="377.0" y1="110.0" x2="443.0" y2="110.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><circle cx="40" cy="110" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="40" y="115" text-anchor="middle" font-size="14" class="t-green">s</text><text x="40" y="142" text-anchor="middle" font-size="12" class="t-gray">d=0</text><circle cx="140" cy="45" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="140" y="50" text-anchor="middle" font-size="14">a</text><text x="140" y="21" text-anchor="middle" font-size="12" class="t-gray">d=1</text><circle cx="140" cy="175" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="140" y="180" text-anchor="middle" font-size="14">b</text><text x="140" y="207" text-anchor="middle" font-size="12" class="t-gray">d=1</text><circle cx="250" cy="45" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="250" y="50" text-anchor="middle" font-size="14">c</text><text x="250" y="21" text-anchor="middle" font-size="12" class="t-gray">d=2</text><circle cx="250" cy="175" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="250" y="180" text-anchor="middle" font-size="14">d</text><text x="250" y="207" text-anchor="middle" font-size="12" class="t-gray">d=2</text><circle cx="360" cy="110" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="360" y="115" text-anchor="middle" font-size="14">e</text><text x="360" y="142" text-anchor="middle" font-size="12" class="t-gray">d=3</text><circle cx="460" cy="110" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="460" y="115" text-anchor="middle" font-size="14">f</text><text x="460" y="142" text-anchor="middle" font-size="12" class="t-gray">d=4</text></svg>`,
  "dij": `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><line x1="70.0" y1="115.0" x2="160.0" y2="55.0" stroke="currentColor" stroke-width="1.6"/><line x1="70.0" y1="135.0" x2="160.0" y2="195.0" stroke="currentColor" stroke-width="1.6"/><line x1="175.0" y1="63.0" x2="175.0" y2="187.0" stroke="currentColor" stroke-width="1.6"/><line x1="193.0" y1="45.0" x2="297.0" y2="45.0" stroke="currentColor" stroke-width="1.6"/><line x1="193.0" y1="205.0" x2="297.0" y2="205.0" stroke="currentColor" stroke-width="1.6"/><line x1="315.0" y1="63.0" x2="315.0" y2="187.0" stroke="currentColor" stroke-width="1.6"/><line x1="330.0" y1="55.0" x2="420.0" y2="115.0" stroke="currentColor" stroke-width="1.6"/><line x1="330.0" y1="195.0" x2="420.0" y2="135.0" stroke="currentColor" stroke-width="1.6"/><circle cx="55" cy="125" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="55" y="130" text-anchor="middle" font-size="14" class="t-green">S</text><circle cx="175" cy="45" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="175" y="50" text-anchor="middle" font-size="14">A</text><circle cx="175" cy="205" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="175" y="210" text-anchor="middle" font-size="14">B</text><circle cx="315" cy="45" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="315" y="50" text-anchor="middle" font-size="14">C</text><circle cx="315" cy="205" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="315" y="210" text-anchor="middle" font-size="14">D</text><circle cx="435" cy="125" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="435" y="130" text-anchor="middle" font-size="14">T</text><text x="120.5" y="97.8" text-anchor="middle" font-size="13">4</text><text x="120.5" y="161.2" text-anchor="middle" font-size="13">1</text><text x="185.0" y="129.5" text-anchor="middle" font-size="13">2</text><text x="245.0" y="38.5" text-anchor="middle" font-size="13">5</text><text x="245.0" y="220.5" text-anchor="middle" font-size="13">9</text><text x="325.0" y="129.5" text-anchor="middle" font-size="13">1</text><text x="380.5" y="81.2" text-anchor="middle" font-size="13">4</text><text x="380.5" y="177.8" text-anchor="middle" font-size="13">2</text></svg>`,
  "dijdone": `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><line x1="70.0" y1="115.0" x2="160.0" y2="55.0" stroke="currentColor" stroke-width="1.6"/><line x1="70.0" y1="135.0" x2="160.0" y2="195.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="175.0" y1="63.0" x2="175.0" y2="187.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="193.0" y1="45.0" x2="297.0" y2="45.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="193.0" y1="205.0" x2="297.0" y2="205.0" stroke="currentColor" stroke-width="1.6"/><line x1="315.0" y1="63.0" x2="315.0" y2="187.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="330.0" y1="55.0" x2="420.0" y2="115.0" stroke="currentColor" stroke-width="1.6"/><line x1="330.0" y1="195.0" x2="420.0" y2="135.0" stroke="currentColor" stroke-width="3.2" class="s-blue"/><circle cx="55" cy="125" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="55" y="130" text-anchor="middle" font-size="14" class="t-green">S</text><text x="31" y="130" text-anchor="end" font-size="12" class="t-gray">d=0</text><circle cx="175" cy="45" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="175" y="50" text-anchor="middle" font-size="14">A</text><text x="175" y="20" text-anchor="middle" font-size="12" class="t-gray">d=3</text><circle cx="175" cy="205" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="175" y="210" text-anchor="middle" font-size="14">B</text><text x="175" y="238" text-anchor="middle" font-size="12" class="t-gray">d=1</text><circle cx="315" cy="45" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="315" y="50" text-anchor="middle" font-size="14">C</text><text x="315" y="20" text-anchor="middle" font-size="12" class="t-gray">d=8</text><circle cx="315" cy="205" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="315" y="210" text-anchor="middle" font-size="14">D</text><text x="315" y="238" text-anchor="middle" font-size="12" class="t-gray">d=9</text><circle cx="435" cy="125" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="435" y="130" text-anchor="middle" font-size="14">T</text><text x="459" y="130" text-anchor="start" font-size="12" class="t-gray">d=11</text><text x="120.5" y="97.8" text-anchor="middle" font-size="13">4</text><text x="120.5" y="161.2" text-anchor="middle" font-size="13" class="t-blue">1</text><text x="185.0" y="129.5" text-anchor="middle" font-size="13" class="t-blue">2</text><text x="245.0" y="38.5" text-anchor="middle" font-size="13" class="t-blue">5</text><text x="245.0" y="220.5" text-anchor="middle" font-size="13">9</text><text x="325.0" y="129.5" text-anchor="middle" font-size="13" class="t-blue">1</text><text x="380.5" y="81.2" text-anchor="middle" font-size="13">4</text><text x="380.5" y="177.8" text-anchor="middle" font-size="13" class="t-blue">2</text></svg>`,
  "dijplain": `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><line x1="70.0" y1="115.0" x2="160.0" y2="55.0" stroke="currentColor" stroke-width="1.6"/><line x1="70.0" y1="135.0" x2="160.0" y2="195.0" stroke="currentColor" stroke-width="1.6"/><line x1="175.0" y1="63.0" x2="175.0" y2="187.0" stroke="currentColor" stroke-width="1.6"/><line x1="193.0" y1="45.0" x2="297.0" y2="45.0" stroke="currentColor" stroke-width="1.6"/><line x1="193.0" y1="205.0" x2="297.0" y2="205.0" stroke="currentColor" stroke-width="1.6"/><line x1="315.0" y1="63.0" x2="315.0" y2="187.0" stroke="currentColor" stroke-width="1.6"/><line x1="330.0" y1="55.0" x2="420.0" y2="115.0" stroke="currentColor" stroke-width="1.6"/><line x1="330.0" y1="195.0" x2="420.0" y2="135.0" stroke="currentColor" stroke-width="1.6"/><circle cx="55" cy="125" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="55" y="130" text-anchor="middle" font-size="14" class="t-green">S</text><circle cx="175" cy="45" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="175" y="50" text-anchor="middle" font-size="14">A</text><circle cx="175" cy="205" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="175" y="210" text-anchor="middle" font-size="14">B</text><circle cx="315" cy="45" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="315" y="50" text-anchor="middle" font-size="14">C</text><circle cx="315" cy="205" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="315" y="210" text-anchor="middle" font-size="14">D</text><circle cx="435" cy="125" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="435" y="130" text-anchor="middle" font-size="14">T</text></svg>`,
  "dijq": `<svg viewBox="0 0 400 265" xmlns="http://www.w3.org/2000/svg"><line x1="52.9" y1="151.1" x2="137.1" y2="223.9" stroke="currentColor" stroke-width="1.6"/><line x1="57.0" y1="138.7" x2="158.0" y2="131.3" stroke="currentColor" stroke-width="1.6"/><line x1="53.8" y1="130.0" x2="171.2" y2="45.0" stroke="currentColor" stroke-width="1.6"/><line x1="153.9" y1="218.5" x2="171.1" y2="146.5" stroke="currentColor" stroke-width="1.6"/><line x1="166.9" y1="233.2" x2="323.1" y2="216.8" stroke="currentColor" stroke-width="1.6"/><line x1="190.1" y1="137.8" x2="324.9" y2="207.2" stroke="currentColor" stroke-width="1.6"/><line x1="176.8" y1="113.1" x2="183.2" y2="51.9" stroke="currentColor" stroke-width="1.6"/><line x1="341.1" y1="198.0" x2="348.9" y2="72.0" stroke="currentColor" stroke-width="1.6"/><line x1="333.1" y1="53.0" x2="201.9" y2="37.0" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="140" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="40" y="145" text-anchor="middle" font-size="14" class="t-green">A</text><circle cx="150" cy="235" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="240" text-anchor="middle" font-size="14">B</text><circle cx="175" cy="130" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="175" y="135" text-anchor="middle" font-size="14">C</text><circle cx="340" cy="215" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="340" y="220" text-anchor="middle" font-size="14">D</text><circle cx="350" cy="55" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350" y="60" text-anchor="middle" font-size="14">E</text><circle cx="185" cy="35" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="185" y="40" text-anchor="middle" font-size="14">F</text><text x="101.5" y="184.4" text-anchor="middle" font-size="13">7</text><text x="106.8" y="130.5" text-anchor="middle" font-size="13">9</text><text x="118.4" y="100.1" text-anchor="middle" font-size="13">14</text><text x="152.8" y="184.7" text-anchor="middle" font-size="13">10</text><text x="244.0" y="219.6" text-anchor="middle" font-size="13">15</text><text x="252.9" y="185.9" text-anchor="middle" font-size="13">12</text><text x="171.0" y="86.1" text-anchor="middle" font-size="13">2</text><text x="335.0" y="138.9" text-anchor="middle" font-size="13">6</text><text x="266.3" y="59.4" text-anchor="middle" font-size="13">9</text></svg>`,
  "neg": `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><line x1="66.8" y1="103.5" x2="213.2" y2="46.5" stroke="currentColor" stroke-width="1.6"/><path d="M213.2,46.5 L207.0,53.0 L204.2,45.9 Z" fill="currentColor"/><line x1="66.8" y1="116.5" x2="213.2" y2="173.5" stroke="currentColor" stroke-width="1.6"/><path d="M213.2,173.5 L204.2,174.1 L207.0,167.0 Z" fill="currentColor"/><line x1="230.0" y1="162.0" x2="230.0" y2="58.0" stroke="currentColor" stroke-width="2.6" class="s-red"/><path d="M230.0,58.0 L233.8,66.1 L226.2,66.1 Z" fill="currentColor" class="f-red"/><circle cx="50" cy="110" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="50" y="115" text-anchor="middle" font-size="14" class="t-green">S</text><circle cx="230" cy="40" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="230" y="45" text-anchor="middle" font-size="14">A</text><circle cx="230" cy="180" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="230" y="185" text-anchor="middle" font-size="14">B</text><text x="136.0" y="69.2" text-anchor="middle" font-size="13">2</text><text x="136.0" y="159.8" text-anchor="middle" font-size="13">3</text><text x="242.0" y="114.5" text-anchor="middle" font-size="13" class="t-red">−2</text></svg>`,
};

// Runnable C++ examples and their exact output.
const CODE: Record<string, string> = {
  "astar": `#include <cstdio>
#include <cstdlib>
#include <functional>
#include <queue>
#include <string>
#include <tuple>
#include <vector>

int main() {
    std::vector<std::string> grid = {
        "............",
        "......#.....",
        "......#.....",
        ".S....#...G.",
        "......#.....",
        "......#.....",
        "..#####.....",
        "............"};
    const int R = grid.size(), C = grid[0].size();
    const int sr = 3, sc = 1, gr = 3, gc = 10;
    auto h = [&](int r, int c) { return std::abs(r - gr) + std::abs(c - gc); };  // Manhattan

    std::vector<std::vector<int>> g(R, std::vector<int>(C, 1 << 30));
    std::vector<std::vector<int>> parent(R, std::vector<int>(C, -1));
    std::vector<std::vector<bool>> closed(R, std::vector<bool>(C, false));
    // Open set ordered by f = g + h, ties broken by smaller h, then by position.
    using Node = std::tuple<int, int, int, int>;  // (f, h, row, col)
    std::priority_queue<Node, std::vector<Node>, std::greater<>> open;
    g[sr][sc] = 0;
    open.push({h(sr, sc), h(sr, sc), sr, sc});
    int expanded = 0;

    while (!open.empty()) {
        auto [f, hh, r, c] = open.top();
        open.pop();
        if (closed[r][c]) continue;
        closed[r][c] = true;
        ++expanded;
        if (r == gr && c == gc) break;  // goal settled: its g is optimal
        const int dr[] = {-1, 1, 0, 0}, dc[] = {0, 0, -1, 1};
        for (int k = 0; k < 4; ++k) {
            int nr = r + dr[k], nc = c + dc[k];
            if (nr < 0 || nr >= R || nc < 0 || nc >= C || grid[nr][nc] == '#') continue;
            if (g[r][c] + 1 < g[nr][nc]) {  // relax, exactly as in Dijkstra
                g[nr][nc] = g[r][c] + 1;
                parent[nr][nc] = r * C + c;
                open.push({g[nr][nc] + h(nr, nc), h(nr, nc), nr, nc});
            }
        }
    }
    for (int p = parent[gr][gc]; p != sr * C + sc; p = parent[p / C][p % C])
        grid[p / C][p % C] = '*';  // mark the path
    for (const auto& row : grid) std::printf("%s\\n", row.c_str());
    std::printf("path length %d, cells expanded %d\\n", g[gr][gc], expanded);
}`,
  "dijkstra": `#include <climits>
#include <cstdio>
#include <functional>
#include <queue>
#include <string>
#include <utility>
#include <vector>

struct Edge { int to, w; };
using Graph = std::vector<std::vector<Edge>>;

// Returns dist[]; fills parent[] so paths can be rebuilt.
std::vector<int> dijkstra(const Graph& g, int s, std::vector<int>& parent) {
    std::vector<int> dist(g.size(), INT_MAX);
    parent.assign(g.size(), -1);
    // Min-heap of (tentative distance, vertex).
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>,
                        std::greater<>> pq;
    dist[s] = 0;
    pq.push({0, s});
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d > dist[u]) continue;  // stale entry: u was already settled
        for (auto [v, w] : g[u]) {
            if (dist[u] + w < dist[v]) {  // relax edge u-v
                dist[v] = dist[u] + w;
                parent[v] = u;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}

int main() {
    const std::string name = "SABCDT";
    Graph g(6);
    auto add = [&](int u, int v, int w) {  // undirected weighted edge
        g[u].push_back({v, w});
        g[v].push_back({u, w});
    };
    add(0, 1, 4); add(0, 2, 1); add(1, 2, 2); add(1, 3, 5);  // S-A S-B A-B A-C
    add(2, 4, 9); add(3, 4, 1); add(3, 5, 4); add(4, 5, 2);  // B-D C-D C-T D-T

    std::vector<int> parent;
    std::vector<int> dist = dijkstra(g, 0, parent);
    for (int v = 0; v < 6; ++v) std::printf("d(%c) = %d\\n", name[v], dist[v]);

    std::string path;
    for (int v = 5; v != -1; v = parent[v]) path = name[v] + path;  // walk back from T
    std::printf("path: %s\\n", path.c_str());
}`,
};

const OUT: Record<string, string> = {
  "astar": `.....******.
.....*#...*.
.....*#...*.
.S****#...G.
......#.....
......#.....
..#####.....
............
path length 15, cells expanded 37`,
  "dijkstra": `d(S) = 0
d(A) = 3
d(B) = 1
d(C) = 8
d(D) = 9
d(T) = 11
path: SBACDT`,
};

export const lesson: Lesson = {
  id: 'dm-shortest-paths',
  title: 'Shortest Paths: BFS, Dijkstra and A*',
  summary: 'How a GPS, a network router and every game NPC find the shortest route: BFS for unweighted graphs, Dijkstra\'s algorithm for nonnegative weights (and why negative weights break it), and A* search with heuristics on a grid.',
  minutes: 22,
  objectives: [
    'Use BFS to compute fewest-edge distances and recover a shortest path from parent pointers',
    'Run Dijkstra\'s algorithm by hand, keeping a table of tentative distances and the order vertices are settled',
    'Explain why Dijkstra\'s greedy choice is correct for nonnegative weights and construct a counterexample with a negative weight',
    'Implement Dijkstra with `std::priority_queue` in C++ and state its $O((n + m)\\log n)$ running time',
    'Explain A* search, compute $f = g + h$ on a grid, and choose an admissible heuristic (Manhattan, Euclidean) for the movement rules',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Unweighted graphs: BFS already finds shortest paths',
      blocks: [
        {
          type: 'p',
          text: 'The **distance** $d(s, v)$ from $s$ to $v$ is the length of a shortest path from $s$ to $v$ (or $\\infty$ if there is none). In an unweighted graph, length means number of edges — the fewest hops in a network, the fewest moves on a board.',
        },
        {
          type: 'p',
          text: 'Last lesson\'s [[dm-bfs|breadth-first search]] already computes these distances: it labels the start $0$, its neighbours $1$, their new neighbours $2$, … Record for each vertex the **parent** it was discovered from, and you can rebuild a shortest path by walking parent pointers back from the target.',
        },
        {
          type: 'figure',
          svg: FIG.bfslayers,
          alt: 'Seven vertices s, a, b, c, d, e, f with BFS distances 0, 1, 1, 2, 2, 3, 4. The path s-a-c-e-f is highlighted in blue; edges b-c and d-e are dashed.',
          caption: 'BFS from $s$ with distances. Following parents back from $f$ gives $f \\leftarrow e \\leftarrow c \\leftarrow a \\leftarrow s$, a shortest path of length $4$. Dashed edges are not in the BFS tree.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why BFS distances are correct',
          text: 'Claim: BFS dequeues all vertices at distance $k$ before any at distance $k + 1$, and labels each with its true distance. By induction on $k$. For $k = 0$ only $s$ is labeled $0$. Suppose it holds up to $k$. A vertex $v$ at true distance $k + 1$ has a neighbour $u$ at distance $k$ on some shortest path; when BFS dequeues $u$ it labels $v$ with $k + 1$ unless $v$ was labeled earlier — and an earlier label would have come from a vertex dequeued before $u$, hence at distance $\\le k$, so that label is at most $k + 1$ as well. Labels can never be too small either, since every label is the length of an actual walk the search followed.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where BFS is enough',
          text: 'Tile games with uniform move costs (roguelikes, puzzle games), "how many hops between these two players in the friend graph", and the fewest-moves solution of a puzzle such as the 15-puzzle (vertices = board states) are all unweighted shortest-path problems.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Ignoring any weights, what is the fewest number of edges on a path from $S$ to $T$ in this graph?',
      figure: {
        type: 'figure',
        svg: FIG.dijplain,
        alt: 'Six vertices: S on the left, A and C on top, B and D on the bottom, T on the right. Edges S-A, S-B, A-B, A-C, B-D, C-D, C-T, D-T.',
        maxWidth: 420,
      },
      answer: '3',
      hint: 'Run BFS from $S$: label the neighbours of $S$ with $1$, then their new neighbours with $2$, …',
      explanation: 'BFS layers: $d(S) = 0$; $A, B$ get $1$; $C$ (from $A$) and $D$ (from $B$) get $2$; $T$ gets $3$. So the fewest-edge path, such as $S, A, C, T$, has $3$ edges. Hold on to this graph — the next card puts weights on it, and the fewest-edge route stops being the shortest one.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Weighted graphs: relaxation and Dijkstra\'s idea',
      blocks: [
        {
          type: 'p',
          text: 'Now give each edge a nonnegative weight $w(u, v)$ — a road length, a travel time. The length of a path is the **sum of its weights**, and BFS no longer works: in the weighted version of the graph, the 3-edge route $S, A, C, T$ costs $4 + 5 + 4 = 13$, while the 5-edge route $S, B, A, C, D, T$ costs only $1 + 2 + 5 + 1 + 2 = 11$.',
        },
        {
          type: 'figure',
          svg: FIG.dij,
          alt: 'The same six-vertex graph with weights: S-A 4, S-B 1, A-B 2, A-C 5, B-D 9, C-D 1, C-T 4, D-T 2.',
          caption: 'The weighted graph we will run Dijkstra\'s algorithm on.',
          maxWidth: 440,
        },
        {
          type: 'p',
          text: 'Every shortest-path algorithm keeps a **tentative distance** $d[v]$ — the length of the best path to $v$ found so far — and improves it with one operation:',
        },
        {
          type: 'theorem',
          name: 'Relaxing the edge $(u, v)$',
          tex: 'd[v] \\leftarrow \\min\\big(d[v],\\ d[u] + w(u, v)\\big)',
          text: 'If going to $u$ and then across the edge to $v$ beats the best route to $v$ known so far, take it (and remember $u$ as $v$\'s parent).',
        },
        {
          type: 'p',
          text: '[[dm-dijkstra|Dijkstra\'s algorithm]] (Edsger Dijkstra, 1956) decides *in which order* to relax edges. It grows a set of **settled** vertices whose distances are final:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Initialize', text: '$d[s] = 0$ and $d[v] = \\infty$ for every other $v$. Nothing is settled.' },
            { title: 'Pick greedily', text: 'Among unsettled vertices, choose $u$ with the **smallest** $d[u]$ and settle it: $d[u]$ is now final.' },
            { title: 'Relax', text: 'Relax every edge from $u$ to an unsettled neighbour $v$.' },
            { title: 'Repeat', text: 'Until every reachable vertex is settled (or, for a single target, until the target is settled).' },
          ],
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Water flooding a pipe network',
          text: 'Pour water in at $s$ and let it run through pipes whose lengths are the weights. Vertices get wet in order of their distance from $s$. Dijkstra simulates exactly this: the next vertex to get wet is the unsettled one with the smallest tentative distance. BFS is the special case where every pipe has length $1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the relaxation step for the edge $(u, v)$ with weight $w$.',
      template: 'If ___ $<$ ___ then set $d[v]$ to $d[u] + w$ and set the parent of $v$ to ___.',
      blanks: [{ answers: ['$d[u] + w$'] }, { answers: ['$d[v]$'] }, { answers: ['$u$'] }],
      wordBank: ['$d[u] + w$', '$d[v]$', '$u$', '$d[u]$', '$v$', '$d[v] + w$'],
      explanation: 'The candidate route "best path to $u$, then the edge $u \\to v$" has length $d[u] + w$. If that beats the current $d[v]$, we have found a better path to $v$, so we update $d[v]$ and record $u$ as the vertex we came from. Line 26 of the C++ code below is exactly this test: `if (dist[u] + w < dist[v])`.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Dijkstra step by step',
      blocks: [
        {
          type: 'p',
          text: 'Run the algorithm from $S$ on the weighted graph. Each row settles one vertex (bold) and shows the tentative distances **after** relaxing its edges. Settled entries never change again.',
        },
        {
          type: 'table',
          headers: ['Settle', '$d[S]$', '$d[A]$', '$d[B]$', '$d[C]$', '$d[D]$', '$d[T]$'],
          rows: [
            ['start', '$0$', '$\\infty$', '$\\infty$', '$\\infty$', '$\\infty$', '$\\infty$'],
            ['$S$ (0)', '**0**', '$4$', '$1$', '$\\infty$', '$\\infty$', '$\\infty$'],
            ['$B$ (1)', '**0**', '$3$', '**1**', '$\\infty$', '$10$', '$\\infty$'],
            ['$A$ (3)', '**0**', '**3**', '**1**', '$8$', '$10$', '$\\infty$'],
            ['$C$ (8)', '**0**', '**3**', '**1**', '**8**', '$9$', '$12$'],
            ['$D$ (9)', '**0**', '**3**', '**1**', '**8**', '**9**', '$11$'],
            ['$T$ (11)', '**0**', '**3**', '**1**', '**8**', '**9**', '**11**'],
          ],
          caption: 'Watch two relaxations improve a guess: $d[A]$ drops from $4$ to $3$ (via $B$), and $d[D]$ drops from $10$ to $9$ (via $C$).',
        },
        {
          type: 'derivation',
          title: 'The interesting rounds',
          steps: [
            { tex: '\\text{settle } B:\\ d[A] = \\min(4,\\ 1 + 2) = 3', why: '$B$ has the smallest tentative distance ($1 < 4$). Going $S \\to B \\to A$ costs $3$, beating the direct edge of weight $4$.' },
            { tex: 'd[D] = \\min(\\infty,\\ 1 + 9) = 10', why: 'First route to $D$ found: through $B$.' },
            { tex: '\\text{settle } A:\\ d[C] = 3 + 5 = 8', why: 'Now $A$ (3) is the smallest unsettled. Its unsettled neighbour $C$ gets $8$.' },
            { tex: '\\text{settle } C:\\ d[D] = \\min(10,\\ 8 + 1) = 9,\\quad d[T] = 8 + 4 = 12', why: '$C$ (8) beats $D$ (10). The long way round through $C$ is cheaper for $D$.' },
            { tex: '\\text{settle } D:\\ d[T] = \\min(12,\\ 9 + 2) = 11', why: '$D$ (9) beats $T$ (12), and improves $T$.' },
            { tex: 'T \\leftarrow D \\leftarrow C \\leftarrow A \\leftarrow B \\leftarrow S', why: 'Follow parent pointers back from $T$ to read off the path.' },
          ],
          result: '$d(S, T) = 11$ along $S, B, A, C, D, T$ — five edges, yet shorter than every 3-edge route.',
        },
        {
          type: 'figure',
          svg: FIG.dijdone,
          alt: 'The weighted graph with final distances S 0, B 1, A 3, C 8, D 9, T 11. The shortest-path tree edges S-B, B-A, A-C, C-D, D-T are blue.',
          caption: 'Final distances and the **shortest-path tree** (blue): each vertex\'s parent edge. Every root-to-vertex path in this tree is a shortest path.',
          maxWidth: 440,
        },
        {
          type: 'code',
          title: 'dijkstra.cpp',
          runnable: true,
          code: CODE.dijkstra,
          output: OUT.dijkstra,
          annotations: [
            { lines: '9-10', text: 'Weighted adjacency list: each entry stores the neighbour and the edge weight.' },
            { lines: '17-18', text: '`std::priority_queue` is a max-heap by default; `std::greater<>` turns it into a min-heap, so `top()` is the smallest tentative distance.' },
            { lines: '22-24', text: 'A vertex can sit in the heap several times with old, larger distances. Instead of deleting them we skip **stale** entries when they surface ("lazy deletion").' },
            { lines: '25-30', text: 'Relax every edge out of $u$; each improvement pushes a new heap entry.' },
            { lines: '50-51', text: 'Rebuild the path by following parents from $T$ back to $S$ (parent of $S$ is $-1$).' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'Run Dijkstra\'s algorithm from $A$ on this graph. Arrange the vertices in the order they are **settled**.',
      figure: {
        type: 'figure',
        svg: FIG.dijq,
        alt: 'Six vertices A to F. Weights: A-B 7, A-C 9, A-F 14, B-C 10, B-D 15, C-D 12, C-F 2, D-E 6, E-F 9.',
        maxWidth: 380,
      },
      lines: ['$A$ (0)', '$B$ (7)', '$C$ (9)', '$F$ (11)', '$E$ (20)', '$D$ (21)'],
      hint: 'After settling $A$: $B = 7$, $C = 9$, $F = 14$. Keep a table, and always settle the smallest tentative value.',
      explanation: 'Settle $A$: $B = 7, C = 9, F = 14$. Settle $B$ (7): $C$ stays $9$ ($7 + 10 = 17$), $D = 22$. Settle $C$ (9): $F = \\min(14, 11) = 11$, $D = \\min(22, 21) = 21$. Settle $F$ (11): $E = 11 + 9 = 20$. Settle $E$ (20): $D$ stays $21$ ($20 + 6 = 26$). Settle $D$ (21). Settling order is always nondecreasing in distance — a good sanity check on any trace.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'In the same graph, what is the shortest distance from $A$ to $E$?',
      figure: {
        type: 'figure',
        svg: FIG.dijq,
        alt: 'Six vertices A to F. Weights: A-B 7, A-C 9, A-F 14, B-C 10, B-D 15, C-D 12, C-F 2, D-E 6, E-F 9.',
        maxWidth: 380,
      },
      answer: '20',
      label: '$d(A, E) =$',
      explanation: 'The shortest route is $A \\to C \\to F \\to E$ with length $9 + 2 + 9 = 20$. The tempting direct edge $A$–$F$ ($14$) gives $14 + 9 = 23$, and going through $D$ is worse still ($21 + 6 = 27$). Notice that the best way to $F$ is not its direct edge from $A$: the detour through $C$ saves $3$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Why the greedy choice is safe — and when it is not',
      blocks: [
        {
          type: 'theorem',
          name: 'Dijkstra\'s invariant',
          text: 'If all edge weights are **nonnegative**, then whenever Dijkstra settles a vertex $u$, $d[u] = d(s, u)$, the true distance.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Proof sketch',
          text: 'Suppose $u$ is the first vertex settled with a wrong value, so $d[u] > d(s, u)$. Take a true shortest path from $s$ to $u$. It starts inside the settled set (at $s$) and ends outside it, so it has a first vertex $y$ outside the settled set, whose predecessor $x$ is settled. Since $x$ was settled correctly and its edge to $y$ was relaxed, $d[y] \\le d(s, x) + w(x, y) = d(s, y)$. Weights are nonnegative, so the rest of the path from $y$ to $u$ cannot be negative: $d(s, y) \\le d(s, u)$. Altogether $d[y] \\le d(s, u) < d[u]$ — so the algorithm should have settled $y$ before $u$. Contradiction. $\\blacksquare$',
        },
        {
          type: 'p',
          text: 'The step "the rest of the path cannot be negative" is the only place the hypothesis is used, and it really is needed:',
        },
        {
          type: 'figure',
          svg: FIG.neg,
          alt: 'A directed graph: S to A weight 2, S to B weight 3, B to A weight minus 2 (in red).',
          caption: 'Dijkstra settles $A$ with $d[A] = 2$ before looking at $B$. The true distance is $3 + (-2) = 1$, found too late.',
          maxWidth: 260,
        },
        {
          type: 'derivation',
          title: 'Dijkstra fails with a negative edge',
          steps: [
            { tex: '\\text{settle } S:\\ d[A] = 2,\\ d[B] = 3', why: 'Relax both edges out of $S$.' },
            { tex: '\\text{settle } A \\text{ with } d[A] = 2', why: '$2 < 3$, so $A$ is settled and declared final.' },
            { tex: '\\text{settle } B:\\ 3 + (-2) = 1 < 2', why: 'The edge $B \\to A$ reveals a better route, but $A$ is already settled; in the standard algorithm its distance is never revised.' },
          ],
          result: 'Dijkstra reports $2$, but $d(S, A) = 1$. With negative weights use the **Bellman–Ford** algorithm ($O(nm)$), which also detects negative cycles.',
        },
        {
          type: 'table',
          headers: ['Problem', 'Algorithm', 'Time'],
          rows: [
            ['Unweighted', 'BFS', '$O(n + m)$'],
            ['Nonnegative weights', 'Dijkstra with a binary heap', '$O((n + m)\\log n)$'],
            ['Negative weights allowed', 'Bellman–Ford', '$O(nm)$'],
            ['One target, with a good estimate of remaining distance', 'A* search', 'often far less than Dijkstra'],
          ],
          caption: 'Each heap operation costs $O(\\log n)$, and Dijkstra does at most one push per successful relaxation ($\\le m$) plus one pop per push.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'True or false: Dijkstra\'s algorithm always returns correct distances on a directed graph with some negative edge weights, as long as the graph has no negative-weight cycle.',
      answer: false,
      explanation: 'False. The three-vertex example $S \\to A$ ($2$), $S \\to B$ ($3$), $B \\to A$ ($-2$) has no cycle at all, yet Dijkstra settles $A$ at $2$ before discovering the route of length $1$. "No negative cycles" is the condition for shortest paths to *exist* (Bellman–Ford needs it); Dijkstra needs the stronger condition that **every** edge weight is nonnegative.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'Here is a student\'s Dijkstra trace from $A$ on the graph with weights $AB = 7$, $AC = 9$, $AF = 14$, $BC = 10$, $BD = 15$, $CD = 12$, $CF = 2$, $DE = 6$, $EF = 9$. Find the first incorrect line.',
      lines: [
        'Settle $A$ (0): $d[B] = 7$, $d[C] = 9$, $d[F] = 14$.',
        'Settle $B$ (7): $d[C]$ stays $9$, $d[D] = 22$.',
        'Settle $C$ (9): $d[F] = 11$, $d[D] = 21$.',
        'Settle $F$ (11): $d[E] = 20$.',
        'Settle $D$ (21): $d[E]$ stays $20$.',
        'Settle $E$ (20). Done.',
      ],
      errorLines: [5],
      explanation: 'After line 4 the unsettled vertices are $D$ (21) and $E$ (20). Dijkstra must settle the **smallest** tentative distance, which is $E$ (20), not $D$. Here the final numbers happen to come out right, but settling out of order breaks the invariant that settled distances are final — on other graphs it produces wrong answers. Correct order: $A, B, C, F, E, D$ with $d[E] = 20$, $d[D] = 21$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'A* search: Dijkstra with a sense of direction',
      blocks: [
        {
          type: 'p',
          text: 'Dijkstra floods outward in **every** direction, even away from the goal. When an NPC needs a path to one specific target, we can do better by estimating how far each vertex still is from the goal. [[dm-a-star|A* search]] (Hart, Nilsson and Raphael, 1968) settles vertices in order of',
        },
        {
          type: 'math',
          tex: 'f(v) = g(v) + h(v)',
          caption: '$g(v)$: the best known cost from the start to $v$ (Dijkstra\'s $d[v]$). $h(v)$: a **heuristic** estimate of the remaining cost from $v$ to the goal.',
        },
        {
          type: 'p',
          text: 'Everything else — relaxation, the priority queue, parent pointers — is exactly Dijkstra. With $h \\equiv 0$, A* **is** Dijkstra. A good $h$ pulls the search toward the goal.',
        },
        {
          type: 'definition',
          term: 'Admissible heuristic',
          text: 'A heuristic $h$ is **admissible** if it never overestimates: $h(v) \\le$ (true remaining cost from $v$ to the goal) for every $v$. With an admissible heuristic, A* returns a shortest path. (If $h$ is also **consistent** — $h(u) \\le w(u, v) + h(v)$ for every edge — no vertex ever needs to be reopened.)',
        },
        {
          type: 'table',
          headers: ['Movement on a grid', 'Heuristic from $(x, y)$ to goal $(x_g, y_g)$', 'Admissible?'],
          rows: [
            ['4 directions, cost 1 each', 'Manhattan: $|x - x_g| + |y - y_g|$', 'yes — exact on an empty grid'],
            ['Any direction (free movement, nav mesh)', 'Euclidean: $\\sqrt{(x - x_g)^2 + (y - y_g)^2}$', 'yes — a straight line is the shortest possible'],
            ['8 directions, diagonal cost 1', 'Chebyshev: $\\max(|x - x_g|, |y - y_g|)$', 'yes; Manhattan would **overestimate**'],
            ['any', '$h \\equiv 0$', 'yes, but no guidance: plain Dijkstra'],
          ],
          caption: 'Pick the largest heuristic that still never overestimates under your movement rules: the closer $h$ is to the truth, the fewer vertices A* expands.',
        },
        {
          type: 'derivation',
          title: 'Scoring a grid cell',
          steps: [
            { tex: '\\text{start } (1, 3),\\ \\text{goal } (10, 3),\\ \\text{cell } v = (5, 1) \\text{ reached with } g(v) = 6', why: 'Coordinates are (column, row). Suppose the search found a 6-step route to $v$.' },
            { tex: 'h(v) = |5 - 10| + |1 - 3| = 5 + 2 = 7', why: 'Manhattan distance, the right heuristic for 4-directional movement.' },
            { tex: 'f(v) = g(v) + h(v) = 6 + 7 = 13', why: 'A* compares this with the $f$ values of all other open cells and expands the smallest.' },
          ],
          result: 'Any complete route through $v$ costs at least $13$; A* uses that lower bound to decide where to search next.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why admissibility guarantees the shortest path',
          text: 'When the goal $G$ is taken off the queue, $f(G) = g(G) + 0$ is the length of the path found. Any cheaper path would pass through some open vertex $v$ with $f(v) = g(v) + h(v) \\le g(v) + (\\text{true rest}) = $ its total length $< g(G)$, so $v$ would have been expanded first. If $h$ overestimates, that inequality fails and A* can grab a suboptimal path too early.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'In a tactics game units move in **8 directions** (diagonals included), and every step, diagonal or not, costs $1$. Which heuristic is admissible and as informative as possible?',
      options: [
        { text: 'Manhattan distance $|\\Delta x| + |\\Delta y|$', why: 'Overestimates: from $(0, 0)$ to $(3, 3)$ Manhattan says $6$, but three diagonal steps cost $3$. A* could return a non-shortest path.' },
        { text: 'Chebyshev distance $\\max(|\\Delta x|, |\\Delta y|)$', correct: true, why: 'With diagonals costing $1$, the true cost on an empty grid is exactly $\\max(|\\Delta x|, |\\Delta y|)$; walls can only make it larger. So it never overestimates and is as tight as possible.' },
        { text: '$h \\equiv 0$', why: 'Admissible, but it gives no guidance — A* degenerates into Dijkstra and expands far more cells.' },
        { text: '$2 \\times$ Euclidean distance', why: 'Doubling a lower bound can exceed the true cost (e.g. a straight run of $5$ cells gets $h = 10$). Weighted heuristics like this trade optimality for speed.' },
      ],
      explanation: 'Admissible means $h \\le$ true cost everywhere. With unit-cost diagonals you can cover $\\Delta x$ and $\\Delta y$ simultaneously, so the minimum number of moves is $\\max(|\\Delta x|, |\\Delta y|)$. Euclidean distance would also be admissible here but is smaller (less informative). Manhattan is correct only for 4-directional movement.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'On a 4-directional grid (each step costs $1$) the goal is at $(12, 2)$. A* has reached the cell $(7, 6)$ with $g = 9$. Using the Manhattan heuristic, what is $f$ for this cell?',
      label: '$f =$',
      answer: '18',
      hint: '$h = |x - x_g| + |y - y_g|$, then $f = g + h$.',
      explanation: '$h = |7 - 12| + |6 - 2| = 5 + 4 = 9$, so $f = g + h = 9 + 9 = 18$. Every path to the goal through this cell costs at least $18$. A frequent slip is to use Euclidean distance ($\\sqrt{25 + 16} \\approx 6.4$) — admissible, but weaker, and not what was asked.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'A* on a game grid',
      blocks: [
        {
          type: 'p',
          text: 'Here is the same grid searched twice. Walls are gray, blue cells were **expanded** (taken off the priority queue), and the orange line is the path found. Both searches find a path of length $15$ — both are optimal — but A* expands less than half as many cells.',
        },
        {
          type: 'figure',
          svg: FIG.astargrid,
          alt: 'Two 12 by 8 grids with an L-shaped wall. Left, Dijkstra: 79 cells expanded, nearly the whole grid. Right, A* with Manhattan heuristic: 37 cells expanded, mostly between start and goal. Both paths go over the top of the wall with length 15.',
          caption: 'Left: Dijkstra ($h = 0$) floods the whole map. Right: A* with Manhattan $h$ heads straight for the goal, spreads out only where the wall blocks it, and ignores the region behind the start.',
        },
        {
          type: 'code',
          title: 'astar_grid.cpp',
          runnable: true,
          code: CODE.astar,
          output: OUT.astar,
          annotations: [
            { lines: '21', text: 'Manhattan heuristic: admissible (and consistent) for 4-directional unit-cost moves.' },
            { lines: '26-28', text: 'Priority = $f$; ties go to the smaller $h$, which favours cells closer to the goal and keeps the search narrow.' },
            { lines: '36-39', text: 'Same lazy deletion as Dijkstra. When the goal is settled its $g$ is optimal, so we can stop early.' },
            { lines: '44-47', text: 'Relaxation is identical to Dijkstra; only the priority $g + h$ differs.' },
            { lines: '51-52', text: 'Parent pointers are stored as a single index $r \\cdot C + c$; walk them back to draw the path.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In real engines',
          text: 'Unreal Engine\'s navigation system runs A* over a navigation mesh (polygons as vertices, Euclidean heuristic), not over raw tiles. Production pathfinders add tricks on top: hierarchical search (plan between regions, then within them), path smoothing so units do not zig-zag along polygon edges, and flow fields when hundreds of units share one goal. The underlying math is still this lesson: a graph, nonnegative weights and an admissible heuristic.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Trading optimality for speed',
          text: 'Multiplying the heuristic by a factor $\\varepsilon > 1$ ("weighted A*") makes the search greedier and much faster, and the path it finds costs at most $\\varepsilon$ times the optimum. Many games happily accept a slightly longer path computed in a fraction of the time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'True or false: if you run A* with the heuristic $h(v) = 0$ for every vertex, it behaves exactly like Dijkstra\'s algorithm.',
      answer: true,
      explanation: 'True. With $h \\equiv 0$ the priority $f = g + h$ is just $g$, the tentative distance, so A* settles vertices in exactly Dijkstra\'s order. That is the left grid in the figure: correct, but it explores in all directions. The heuristic is pure bonus information about where the goal is.',
    },
  ],
  takeaways: [
    'In an unweighted graph BFS computes shortest distances in $O(n + m)$; parent pointers recover the path.',
    'Relaxation $d[v] \\leftarrow \\min(d[v], d[u] + w(u, v))$ is the core step of every shortest-path algorithm.',
    'Dijkstra settles the unsettled vertex with the smallest tentative distance; with nonnegative weights settled distances are final. A single negative edge can break it (use Bellman–Ford).',
    'With a binary heap (`std::priority_queue` with `std::greater<>` and lazy deletion), Dijkstra runs in $O((n + m)\\log n)$.',
    'A* orders the search by $f = g + h$. An admissible heuristic (Manhattan for 4-way grids, Chebyshev for 8-way unit-cost grids, Euclidean for free movement) keeps the result optimal while expanding far fewer vertices.',
  ],
  reading: [
    { title: 'Red Blob Games: Introduction to A*', url: 'https://www.redblobgames.com/pathfinding/a-star/introduction.html', source: 'other', note: 'Interactive diagrams that build BFS, Dijkstra and A* step by step on game maps — the best visual explanation there is.' },
    { title: 'Dijkstra\'s algorithm (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm', source: 'wikipedia', note: 'Pseudocode, a proof of correctness and running times with different priority queues.' },
    { title: 'A* search algorithm (Wikipedia)', url: 'https://en.wikipedia.org/wiki/A*_search_algorithm', source: 'wikipedia', note: 'Admissibility, consistency and the optimality proof, plus common variants used in games.' },
    { title: 'Levin, Discrete Mathematics: An Open Introduction', url: 'https://discrete.openmathbooks.org/dmoi3.html', source: 'book', note: 'The graph theory chapter gives the vocabulary and proofs this lesson builds on.' },
  ],
};
