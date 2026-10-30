import type { Lesson } from '../../types';

// <figures> (hand-written SVG, each rendered and checked in light and dark themes)
const FIG = {
  raoult: `<svg viewBox="0 0 480 285" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="110" width="200" height="120" fill="currentColor" class="f-blue" fill-opacity="0.12"/><path d="M20 40 V230 H220 V40" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="32.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="54.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="76.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="98.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="120.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="142.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="164.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="186.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="208.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="43.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="65.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="87.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="109.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="131.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="153.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="175.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="197.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="32.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="54.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="76.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="98.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="120.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="142.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="164.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="186.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="208.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="43.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="65.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="87.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="109.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="131.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="153.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="175.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="197.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="32.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="54.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="76.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="98.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="120.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="142.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="164.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="186.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="208.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><text x="120.0" y="256" text-anchor="middle" font-size="14" font-weight="600">pure solvent</text><text x="120.0" y="274" text-anchor="middle" font-size="12" class="t-gray">every surface site can evaporate</text><line x1="32.0" y1="104" x2="32.0" y2="70" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="32.0,62 27.0,72 37.0,72" fill="currentColor" class="f-blue"/><line x1="76.0" y1="104" x2="76.0" y2="70" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="76.0,62 71.0,72 81.0,72" fill="currentColor" class="f-blue"/><line x1="120.0" y1="104" x2="120.0" y2="70" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="120.0,62 115.0,72 125.0,72" fill="currentColor" class="f-blue"/><line x1="164.0" y1="104" x2="164.0" y2="70" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="164.0,62 159.0,72 169.0,72" fill="currentColor" class="f-blue"/><line x1="208.0" y1="104" x2="208.0" y2="70" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="208.0,62 203.0,72 213.0,72" fill="currentColor" class="f-blue"/><rect x="260" y="110" width="200" height="120" fill="currentColor" class="f-blue" fill-opacity="0.12"/><path d="M260 40 V230 H460 V40" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="272.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="294.0" cy="121" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="316.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="338.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="360.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="382.0" cy="121" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="404.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="426.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="448.0" cy="121" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="283.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="305.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="327.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="349.0" cy="143" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="371.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="393.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="415.0" cy="143" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="437.0" cy="143" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="272.0" cy="165" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="294.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="316.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="338.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="360.0" cy="165" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="382.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="404.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="426.0" cy="165" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="448.0" cy="165" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="283.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="305.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="327.0" cy="187" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="349.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="371.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="393.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="415.0" cy="187" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="437.0" cy="187" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="272.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="294.0" cy="209" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="316.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="338.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="360.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="382.0" cy="209" r="9" fill="currentColor" class="f-orange" stroke="currentColor" stroke-width="1"/><circle cx="404.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="426.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><circle cx="448.0" cy="209" r="9" fill="currentColor" class="f-blue" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/><text x="360.0" y="256" text-anchor="middle" font-size="14" font-weight="600">solution</text><text x="360.0" y="274" text-anchor="middle" font-size="12" class="t-gray">solute (orange) takes surface sites</text><line x1="272.0" y1="104" x2="272.0" y2="70" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="272.0,62 267.0,72 277.0,72" fill="currentColor" class="f-blue"/><line x1="316.0" y1="104" x2="316.0" y2="70" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="316.0,62 311.0,72 321.0,72" fill="currentColor" class="f-blue"/><line x1="404.0" y1="104" x2="404.0" y2="70" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="404.0,62 399.0,72 409.0,72" fill="currentColor" class="f-blue"/><line x1="448.0" y1="104" x2="448.0" y2="70" stroke="currentColor" stroke-width="2" class="s-blue"/><polygon points="448.0,62 443.0,72 453.0,72" fill="currentColor" class="f-blue"/><text x="240" y="24" text-anchor="middle" font-size="13">fewer solvent molecules escape per second → lower vapor pressure</text></svg>`,
  phase: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="260" x2="50" y2="20" stroke="currentColor" stroke-width="1.6"/><line x1="50" y1="260" x2="465" y2="260" stroke="currentColor" stroke-width="1.6"/><text x="22" y="140" text-anchor="middle" font-size="13" transform="rotate(-90 22 140)">pressure</text><text x="270" y="293" text-anchor="middle" font-size="13">temperature →</text><polyline points="150.0,205.0 157.2,203.8 164.5,202.5 171.8,201.2 179.0,199.8 186.2,198.3 193.5,196.7 200.8,195.1 208.0,193.3 215.2,191.4 222.5,189.5 229.8,187.4 237.0,185.2 244.2,182.9 251.5,180.4 258.8,177.8 266.0,175.1 273.2,172.2 280.5,169.2 287.8,165.9 295.0,162.5 302.2,158.9 309.5,155.1 316.8,151.1 324.0,146.9 331.2,142.4 338.5,137.7 345.8,132.7 353.0,127.4 360.2,121.8 367.5,115.9 374.8,109.6 382.0,103.1 389.2,96.1 396.5,88.7 403.8,81.0 411.0,72.8 418.2,64.1 425.5,54.9 432.8,45.2 440.0,35.0" fill="none" stroke="currentColor" stroke-width="2.5"/><polyline points="60.0,255.0 62.2,254.5 64.5,254.1 66.8,253.6 69.0,253.0 71.2,252.5 73.5,251.9 75.8,251.3 78.0,250.7 80.2,250.1 82.5,249.4 84.8,248.7 87.0,247.9 89.2,247.1 91.5,246.3 93.8,245.5 96.0,244.6 98.2,243.6 100.5,242.6 102.8,241.6 105.0,240.5 107.2,239.4 109.5,238.3 111.8,237.0 114.0,235.7 116.2,234.4 118.5,233.0 120.8,231.5 123.0,230.0 125.2,228.4 127.5,226.7 129.8,224.9 132.0,223.1 134.2,221.2 136.5,219.2 138.8,217.1 141.0,214.9 143.2,212.6 145.5,210.2 147.8,207.6 150.0,205.0" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="150" y1="205" x2="140" y2="25" stroke="currentColor" stroke-width="2.5"/><polyline points="127.0,226.0 135.6,224.7 144.2,223.2 152.7,221.7 161.3,220.1 169.9,218.5 178.4,216.7 187.0,214.8 195.6,212.8 204.2,210.8 212.8,208.5 221.3,206.2 229.9,203.8 238.5,201.1 247.1,198.4 255.6,195.5 264.2,192.4 272.8,189.2 281.4,185.7 289.9,182.1 298.5,178.3 307.1,174.3 315.6,170.0 324.2,165.5 332.8,160.7 341.4,155.7 350.0,150.3 358.5,144.7 367.1,138.8 375.7,132.5 384.2,125.9 392.8,118.9 401.4,111.5 410.0,103.6 418.6,95.4 427.1,86.6 435.7,77.4 444.3,67.7 452.8,57.4 461.4,46.5 470.0,35.0" fill="none" stroke="currentColor" class="s-red" stroke-width="2.5" stroke-dasharray="7 4"/><line x1="127" y1="226" x2="117" y2="25" stroke="currentColor" class="s-red" stroke-width="2.5" stroke-dasharray="7 4"/><line x1="50" y1="95" x2="470" y2="95" stroke="currentColor" class="s-gray" stroke-width="1.3" stroke-dasharray="3 3"/><text x="54" y="89" font-size="12" text-anchor="start" class="t-gray">1 atm</text><line x1="143.9" y1="95" x2="143.9" y2="260" stroke="currentColor"  stroke-width="1" stroke-dasharray="2 3"/><circle cx="143.9" cy="95" r="3.5" fill="currentColor" /><line x1="120.5" y1="95" x2="120.5" y2="260" stroke="currentColor" class="s-red" stroke-width="1" stroke-dasharray="2 3"/><circle cx="120.5" cy="95" r="3.5" fill="currentColor" class="f-red"/><line x1="390.4" y1="95" x2="390.4" y2="260" stroke="currentColor"  stroke-width="1" stroke-dasharray="2 3"/><circle cx="390.4" cy="95" r="3.5" fill="currentColor" /><line x1="418.9" y1="95" x2="418.9" y2="260" stroke="currentColor" class="s-red" stroke-width="1" stroke-dasharray="2 3"/><circle cx="418.9" cy="95" r="3.5" fill="currentColor" class="f-red"/><line x1="120.5" y1="272" x2="143.9" y2="272" stroke="currentColor" class="s-blue" stroke-width="2"/><line x1="120.5" y1="266" x2="120.5" y2="278" stroke="currentColor" class="s-blue" stroke-width="2"/><line x1="143.9" y1="266" x2="143.9" y2="278" stroke="currentColor" class="s-blue" stroke-width="2"/><text x="132.2" y="293" text-anchor="middle" font-size="13" class="t-blue">ΔTf</text><line x1="390.4" y1="272" x2="418.9" y2="272" stroke="currentColor" class="s-red" stroke-width="2"/><line x1="390.4" y1="266" x2="390.4" y2="278" stroke="currentColor" class="s-red" stroke-width="2"/><line x1="418.9" y1="266" x2="418.9" y2="278" stroke="currentColor" class="s-red" stroke-width="2"/><text x="404.6" y="293" text-anchor="middle" font-size="13" class="t-red">ΔTb</text><text x="88" y="150" text-anchor="middle" font-size="14" class="t-gray">solid</text><text x="250" y="140" text-anchor="middle" font-size="14" class="t-gray">liquid</text><text x="330" y="235" text-anchor="middle" font-size="14" class="t-gray">gas</text><line x1="200" y1="30" x2="230" y2="30" stroke="currentColor" stroke-width="2.5"/><text x="236" y="35" font-size="12" text-anchor="start">pure solvent</text><line x1="200" y1="50" x2="230" y2="50" stroke="currentColor" class="s-red" stroke-width="2.5" stroke-dasharray="7 4"/><text x="236" y="55" font-size="12" text-anchor="start">solution</text></svg>`,
  ionpair: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="34" width="230" height="160" rx="12" fill="currentColor" class="f-blue" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><rect x="260" y="34" width="230" height="160" rx="12" fill="currentColor" class="f-blue" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="125" y="22" text-anchor="middle" font-size="14" font-weight="600">dilute: ions move independently</text><text x="375" y="22" text-anchor="middle" font-size="14" font-weight="600">more concentrated: ion pairs</text><circle cx="45" cy="70" r="9" fill="currentColor" class="f-blue" fill-opacity="0.85"/><text x="45" y="74.5" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" style="fill:#fff">+</text><circle cx="120" cy="60" r="13" fill="currentColor" class="f-green" fill-opacity="0.85"/><text x="120" y="65" text-anchor="middle" font-size="16" font-weight="700" style="fill:#fff">−</text><circle cx="200" cy="80" r="9" fill="currentColor" class="f-blue" fill-opacity="0.85"/><text x="200" y="84.5" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" style="fill:#fff">+</text><circle cx="60" cy="150" r="13" fill="currentColor" class="f-green" fill-opacity="0.85"/><text x="60" y="155" text-anchor="middle" font-size="16" font-weight="700" style="fill:#fff">−</text><circle cx="140" cy="125" r="9" fill="currentColor" class="f-blue" fill-opacity="0.85"/><text x="140" y="129.5" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" style="fill:#fff">+</text><circle cx="205" cy="160" r="13" fill="currentColor" class="f-green" fill-opacity="0.85"/><text x="205" y="165" text-anchor="middle" font-size="16" font-weight="700" style="fill:#fff">−</text><ellipse cx="321" cy="75" rx="34" ry="22" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8" stroke-dasharray="4 3"/><circle cx="310" cy="75" r="9" fill="currentColor" class="f-blue" fill-opacity="0.85"/><text x="310" y="79.5" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" style="fill:#fff">+</text><circle cx="332" cy="75" r="13" fill="currentColor" class="f-green" fill-opacity="0.85"/><text x="332" y="80" text-anchor="middle" font-size="16" font-weight="700" style="fill:#fff">−</text><ellipse cx="411" cy="150" rx="34" ry="22" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.8" stroke-dasharray="4 3"/><circle cx="400" cy="150" r="9" fill="currentColor" class="f-blue" fill-opacity="0.85"/><text x="400" y="154.5" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" style="fill:#fff">+</text><circle cx="422" cy="150" r="13" fill="currentColor" class="f-green" fill-opacity="0.85"/><text x="422" y="155" text-anchor="middle" font-size="16" font-weight="700" style="fill:#fff">−</text><circle cx="440" cy="70" r="9" fill="currentColor" class="f-blue" fill-opacity="0.85"/><text x="440" y="74.5" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" style="fill:#fff">+</text><circle cx="320" cy="160" r="13" fill="currentColor" class="f-green" fill-opacity="0.85"/><text x="320" y="165" text-anchor="middle" font-size="16" font-weight="700" style="fill:#fff">−</text><text x="125" y="216" text-anchor="middle" font-size="13">3 NaCl → 6 particles: i = 2</text><text x="375" y="216" text-anchor="middle" font-size="13">3 NaCl → 4 particles: i ≈ 1.3</text><text x="375" y="236" text-anchor="middle" font-size="12" class="t-orange">each pair (dashed) counts as one particle</text></svg>`,
  osmosis: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="100" width="38" height="130" class="f-blue" fill="currentColor" fill-opacity="0.18"/><rect x="104" y="100" width="38" height="130" class="f-blue" fill="currentColor" fill-opacity="0.18"/><rect x="56" y="196" width="48" height="34" class="f-blue" fill="currentColor" fill-opacity="0.18"/><path d="M18 46 V230 H142 V46" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M56 46 V196 H104 V46" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="80.0" y1="196" x2="80.0" y2="230" stroke="currentColor" class="s-green" stroke-width="2.5" stroke-dasharray="3 3"/><line x1="18" y1="100" x2="56" y2="100" stroke="currentColor" class="s-blue" stroke-width="1.6"/><line x1="104" y1="100" x2="142" y2="100" stroke="currentColor" class="s-blue" stroke-width="1.6"/><circle cx="124.1" cy="150.9" r="4" fill="currentColor" class="f-orange"/><circle cx="98.0" cy="214.7" r="4" fill="currentColor" class="f-orange"/><circle cx="131.8" cy="138.1" r="4" fill="currentColor" class="f-orange"/><circle cx="135.9" cy="162.6" r="4" fill="currentColor" class="f-orange"/><circle cx="126.5" cy="208.7" r="4" fill="currentColor" class="f-orange"/><circle cx="129.3" cy="185.9" r="4" fill="currentColor" class="f-orange"/><circle cx="110.8" cy="208.4" r="4" fill="currentColor" class="f-orange"/><circle cx="119.1" cy="175.9" r="4" fill="currentColor" class="f-orange"/><circle cx="117.4" cy="115.4" r="4" fill="currentColor" class="f-orange"/><text x="80" y="22" text-anchor="middle" font-size="14" font-weight="600">1. Start</text><text x="80" y="252" text-anchor="middle" font-size="12" class="t-gray">water | solution</text><text x="80" y="268" text-anchor="middle" font-size="12" class="t-gray">same levels</text><rect x="186" y="136" width="38" height="94" class="f-blue" fill="currentColor" fill-opacity="0.18"/><rect x="272" y="70" width="38" height="160" class="f-blue" fill="currentColor" fill-opacity="0.18"/><rect x="224" y="196" width="48" height="34" class="f-blue" fill="currentColor" fill-opacity="0.18"/><path d="M186 46 V230 H310 V46" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M224 46 V196 H272 V46" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="248.0" y1="196" x2="248.0" y2="230" stroke="currentColor" class="s-green" stroke-width="2.5" stroke-dasharray="3 3"/><line x1="186" y1="136" x2="224" y2="136" stroke="currentColor" class="s-blue" stroke-width="1.6"/><line x1="272" y1="70" x2="310" y2="70" stroke="currentColor" class="s-blue" stroke-width="1.6"/><circle cx="292.1" cy="132.0" r="4" fill="currentColor" class="f-orange"/><circle cx="266.0" cy="214.7" r="4" fill="currentColor" class="f-orange"/><circle cx="299.8" cy="115.9" r="4" fill="currentColor" class="f-orange"/><circle cx="303.9" cy="146.7" r="4" fill="currentColor" class="f-orange"/><circle cx="294.5" cy="204.7" r="4" fill="currentColor" class="f-orange"/><circle cx="297.3" cy="176.0" r="4" fill="currentColor" class="f-orange"/><circle cx="278.8" cy="204.4" r="4" fill="currentColor" class="f-orange"/><circle cx="287.1" cy="163.4" r="4" fill="currentColor" class="f-orange"/><circle cx="285.4" cy="87.3" r="4" fill="currentColor" class="f-orange"/><line x1="228.0" y1="206" x2="262.0" y2="206" stroke="currentColor" class="s-blue" stroke-width="2.4"/><polygon points="268.0,206 259.0,201 259.0,211" fill="currentColor" class="f-blue"/><line x1="220" y1="136" x2="324" y2="136" stroke="currentColor" class="s-gray" stroke-width="1" stroke-dasharray="3 3"/><line x1="318" y1="71" x2="318" y2="135" stroke="currentColor" stroke-width="1.5"/><line x1="314" y1="70" x2="322" y2="70" stroke="currentColor" stroke-width="1.5"/><line x1="314" y1="136" x2="322" y2="136" stroke="currentColor" stroke-width="1.5"/><text x="324" y="108.0" font-size="13" text-anchor="start" font-style="italic">h</text><text x="248" y="22" text-anchor="middle" font-size="14" font-weight="600">2. Osmosis</text><text x="248" y="252" text-anchor="middle" font-size="12" class="t-gray">water flows in;</text><text x="248" y="268" text-anchor="middle" font-size="12" class="t-gray">column h ↔ Π</text><rect x="354" y="80" width="38" height="150" class="f-blue" fill="currentColor" fill-opacity="0.18"/><rect x="440" y="130" width="38" height="100" class="f-blue" fill="currentColor" fill-opacity="0.18"/><rect x="392" y="196" width="48" height="34" class="f-blue" fill="currentColor" fill-opacity="0.18"/><path d="M354 46 V230 H478 V46" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M392 46 V196 H440 V46" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="416.0" y1="196" x2="416.0" y2="230" stroke="currentColor" class="s-green" stroke-width="2.5" stroke-dasharray="3 3"/><line x1="354" y1="80" x2="392" y2="80" stroke="currentColor" class="s-blue" stroke-width="1.6"/><line x1="440" y1="130" x2="478" y2="130" stroke="currentColor" class="s-blue" stroke-width="1.6"/><circle cx="460.1" cy="169.8" r="4" fill="currentColor" class="f-orange"/><circle cx="434.0" cy="214.7" r="4" fill="currentColor" class="f-orange"/><circle cx="467.8" cy="160.3" r="4" fill="currentColor" class="f-orange"/><circle cx="471.9" cy="178.4" r="4" fill="currentColor" class="f-orange"/><circle cx="462.5" cy="212.7" r="4" fill="currentColor" class="f-orange"/><circle cx="465.3" cy="195.7" r="4" fill="currentColor" class="f-orange"/><circle cx="446.8" cy="212.4" r="4" fill="currentColor" class="f-orange"/><circle cx="455.1" cy="188.3" r="4" fill="currentColor" class="f-orange"/><circle cx="453.4" cy="143.5" r="4" fill="currentColor" class="f-orange"/><line x1="436.0" y1="206" x2="402.0" y2="206" stroke="currentColor" class="s-blue" stroke-width="2.4"/><polygon points="396.0,206 405.0,201 405.0,211" fill="currentColor" class="f-blue"/><rect x="442" y="121" width="34" height="9" fill="currentColor" class="f-gray" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/><line x1="459.0" y1="121" x2="459.0" y2="90" stroke="currentColor" stroke-width="2.4"/><polygon points="459.0,120 453.0,108 465.0,108" fill="currentColor"/><text x="459.0" y="84" text-anchor="middle" font-size="12" font-weight="600">P &gt; Π</text><text x="416" y="22" text-anchor="middle" font-size="14" font-weight="600">3. Reverse osmosis</text><text x="416" y="252" text-anchor="middle" font-size="12" class="t-gray">push harder than Π:</text><text x="416" y="268" text-anchor="middle" font-size="12" class="t-gray">pure water out</text></svg>`,
  rbc: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><circle cx="85" cy="120" r="46" fill="currentColor" class="f-red" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><line x1="149.1" y1="157.0" x2="130.0" y2="146.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="130.0,146.0 135.0,153.5 139.0,146.5" fill="currentColor" class="f-blue"/><line x1="85.0" y1="194.0" x2="85.0" y2="172.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="85.0,172.0 81.0,180.0 89.0,180.0" fill="currentColor" class="f-blue"/><line x1="20.9" y1="157.0" x2="40.0" y2="146.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="40.0,146.0 31.0,146.5 35.0,153.5" fill="currentColor" class="f-blue"/><line x1="20.9" y1="83.0" x2="40.0" y2="94.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="40.0,94.0 35.0,86.5 31.0,93.5" fill="currentColor" class="f-blue"/><line x1="85.0" y1="46.0" x2="85.0" y2="68.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="85.0,68.0 89.0,60.0 81.0,60.0" fill="currentColor" class="f-blue"/><line x1="149.1" y1="83.0" x2="130.0" y2="94.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="130.0,94.0 139.0,93.5 135.0,86.5" fill="currentColor" class="f-blue"/><circle cx="250" cy="120" r="40" fill="currentColor" class="f-red" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/><circle cx="250" cy="120" r="17" fill="currentColor" class="f-red" fill-opacity="0.25"/><line x1="250.0" y1="168.0" x2="250.0" y2="198.0" stroke="currentColor" class="s-gray" stroke-width="1.6"/><polygon points="250.0,168.0 246.2,175.0 253.8,175.0" fill="currentColor" class="f-gray"/><polygon points="250.0,198.0 253.8,191.0 246.2,191.0" fill="currentColor" class="f-gray"/><line x1="208.4" y1="96.0" x2="182.5" y2="81.0" stroke="currentColor" class="s-gray" stroke-width="1.6"/><polygon points="208.4,96.0 204.3,89.2 200.4,95.8" fill="currentColor" class="f-gray"/><polygon points="182.5,81.0 186.6,87.8 190.4,81.2" fill="currentColor" class="f-gray"/><line x1="291.6" y1="96.0" x2="317.5" y2="81.0" stroke="currentColor" class="s-gray" stroke-width="1.6"/><polygon points="291.6,96.0 299.6,95.8 295.7,89.2" fill="currentColor" class="f-gray"/><polygon points="317.5,81.0 309.6,81.2 313.4,87.8" fill="currentColor" class="f-gray"/><polygon points="448.0,120.0 447.0,121.1 444.8,122.1 443.2,123.0 442.7,123.9 442.6,124.9 442.4,125.8 442.2,126.8 441.9,127.7 441.6,128.7 441.3,129.6 441.0,130.5 440.6,131.4 440.3,132.3 440.8,133.7 442.1,135.6 442.9,137.4 442.0,138.2 439.8,138.0 437.7,137.7 436.5,138.0 435.8,138.7 435.1,139.5 434.5,140.1 433.7,140.8 433.0,141.4 432.2,142.1 431.5,142.7 430.7,143.2 429.8,143.8 429.3,144.8 429.3,146.9 429.2,149.2 428.4,150.1 426.8,149.2 425.0,147.6 423.7,146.8 422.7,146.9 421.8,147.2 420.8,147.4 419.9,147.6 418.9,147.7 417.9,147.8 417.0,147.9 416.0,148.0 415.0,148.0 414.0,148.2 412.9,149.6 411.7,151.6 410.4,152.7 409.4,151.7 408.8,149.4 408.1,147.6 407.3,146.9 406.3,146.6 405.4,146.3 404.5,146.0 403.6,145.6 402.7,145.2 401.9,144.7 401.0,144.2 400.2,143.7 399.3,143.3 397.9,143.5 395.9,144.5 393.9,145.1 393.1,144.3 393.6,142.2 394.2,140.1 394.2,138.8 393.6,138.0 392.9,137.2 392.3,136.5 391.8,135.7 391.3,134.8 390.8,134.0 390.3,133.1 389.8,132.3 389.4,131.4 388.6,130.7 386.6,130.3 384.3,130.0 383.3,129.1 384.3,127.7 386.1,126.1 387.2,124.9 387.3,123.9 387.2,122.9 387.1,122.0 387.0,121.0 387.0,120.0 387.0,119.0 387.1,118.0 387.2,117.1 387.3,116.1 387.2,115.1 386.1,113.9 384.3,112.3 383.3,110.9 384.3,110.0 386.6,109.7 388.6,109.3 389.4,108.6 389.8,107.7 390.3,106.9 390.8,106.0 391.3,105.2 391.8,104.3 392.3,103.5 392.9,102.8 393.6,102.0 394.2,101.2 394.2,99.9 393.6,97.8 393.1,95.7 393.9,94.9 395.9,95.5 397.9,96.5 399.3,96.7 400.2,96.3 401.0,95.8 401.9,95.3 402.7,94.8 403.6,94.4 404.5,94.0 405.4,93.7 406.3,93.4 407.3,93.1 408.1,92.4 408.8,90.6 409.4,88.3 410.4,87.3 411.7,88.4 412.9,90.4 414.0,91.8 415.0,92.0 416.0,92.0 417.0,92.1 417.9,92.2 418.9,92.3 419.9,92.4 420.8,92.6 421.8,92.8 422.7,93.1 423.7,93.2 425.0,92.4 426.8,90.8 428.4,89.9 429.2,90.8 429.3,93.1 429.3,95.2 429.8,96.2 430.7,96.8 431.5,97.3 432.2,97.9 433.0,98.6 433.7,99.2 434.5,99.9 435.1,100.5 435.8,101.3 436.5,102.0 437.7,102.3 439.8,102.0 442.0,101.8 442.9,102.6 442.1,104.4 440.8,106.3 440.3,107.7 440.6,108.6 441.0,109.5 441.3,110.4 441.6,111.3 441.9,112.3 442.2,113.2 442.4,114.2 442.6,115.1 442.7,116.1 443.2,117.0 444.8,117.9 447.0,118.9" fill="currentColor" class="f-red" fill-opacity="0.65" stroke="currentColor" stroke-width="1.8"/><line x1="449.6" y1="140.0" x2="470.4" y2="152.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="470.4,152.0 465.5,144.5 461.5,151.5" fill="currentColor" class="f-blue"/><line x1="415.0" y1="160.0" x2="415.0" y2="184.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="415.0,184.0 419.0,176.0 411.0,176.0" fill="currentColor" class="f-blue"/><line x1="380.4" y1="140.0" x2="359.6" y2="152.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="359.6,152.0 368.5,151.5 364.5,144.5" fill="currentColor" class="f-blue"/><line x1="380.4" y1="100.0" x2="359.6" y2="88.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="359.6,88.0 364.5,95.5 368.5,88.5" fill="currentColor" class="f-blue"/><line x1="415.0" y1="80.0" x2="415.0" y2="56.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="415.0,56.0 411.0,64.0 419.0,64.0" fill="currentColor" class="f-blue"/><line x1="449.6" y1="100.0" x2="470.4" y2="88.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="470.4,88.0 461.5,88.5 465.5,95.5" fill="currentColor" class="f-blue"/><text x="85" y="22" text-anchor="middle" font-size="14" font-weight="600">hypotonic</text><text x="85" y="40" text-anchor="middle" font-size="12" class="t-gray">(e.g. pure water)</text><text x="85" y="226" text-anchor="middle" font-size="12">water in: swells, may burst</text><text x="250" y="22" text-anchor="middle" font-size="14" font-weight="600">isotonic</text><text x="250" y="40" text-anchor="middle" font-size="12" class="t-gray">(0.9% NaCl)</text><text x="250" y="226" text-anchor="middle" font-size="12">no net flow</text><text x="415" y="22" text-anchor="middle" font-size="14" font-weight="600">hypertonic</text><text x="415" y="40" text-anchor="middle" font-size="12" class="t-gray">(e.g. 3% NaCl)</text><text x="415" y="226" text-anchor="middle" font-size="12">water out: shrivels</text></svg>`,
};
// </figures>

export const lesson: Lesson = {
  id: 'gchem-colligative',
  title: 'Colligative Properties',
  summary: 'Properties that depend only on how many solute particles there are: vapor-pressure lowering (Raoult\'s law), boiling-point elevation, freezing-point depression and osmotic pressure, with road salt, antifreeze, IV fluids and reverse-osmosis water purifiers.',
  minutes: 24,
  objectives: [
    'Use Raoult\'s law to calculate the vapor pressure of a solution, and explain positive and negative deviations',
    'Calculate boiling-point elevation and freezing-point depression with $\\Delta T = iKm$, and explain them with a phase diagram',
    'Predict ideal van \'t Hoff factors and explain why measured values are smaller (ion pairing)',
    'Calculate osmotic pressure with $\\Pi = iMRT$ and use it to explain isotonic IV fluids and reverse osmosis',
    'Determine a molar mass from freezing-point or osmotic-pressure data',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Counting particles: vapor-pressure lowering and Raoult\'s law',
      blocks: [
        {
          type: 'p',
          text: 'Dissolve sugar or salt in water and four properties of the water change in a strikingly simple way: its vapor pressure drops, its boiling point rises, its freezing point falls, and it acquires an osmotic pressure. These are the [[gchem-colligative-property|colligative properties]] (Latin *colligatus*, "bound together"). Each depends on **how many** solute particles are dissolved, not on what they are. A mole of glucose molecules and a mole of urea molecules have the same effect.',
        },
        {
          type: 'p',
          text: 'Start with vapor pressure: the pressure of solvent vapor in equilibrium with the liquid in a closed container. Its value is set by a balance between molecules escaping from the surface and molecules returning to it.',
        },
        {
          type: 'figure',
          svg: FIG.raoult,
          alt: 'Two containers of liquid. In pure solvent every surface molecule is solvent, and five arrows show molecules escaping. In the solution some surface positions are taken by orange solute particles and only four arrows show escaping solvent molecules.',
          caption: 'A nonvolatile solute takes up part of the surface, so fewer solvent molecules escape per second. The returning rate only has to match a smaller escaping rate, so the equilibrium vapor pressure is lower.',
        },
        {
          type: 'theorem',
          name: 'Raoult\'s law',
          tex: 'P_{\\text{solvent}} = \\chi_{\\text{solvent}}\\,P^\\circ_{\\text{solvent}}',
          text: '[[gchem-raoults-law|Raoult\'s law]]: the vapor pressure of the solvent above a solution equals its mole fraction times the vapor pressure of the pure solvent. For a nonvolatile solute the lowering is $\\Delta P = P^\\circ - P = \\chi_{\\text{solute}}\\,P^\\circ$.',
        },
        {
          type: 'derivation',
          title: '50.0 g of glucose ($\\ce{C6H12O6}$, 180.16 g/mol) in 500.0 g of water at 25 °C ($P^\\circ = 23.8$ torr)',
          steps: [
            { tex: 'n_{\\text{glucose}} = \\frac{50.0}{180.16} = 0.2775\\ \\text{mol}, \\quad n_{\\ce{H2O}} = \\frac{500.0}{18.02} = 27.75\\ \\text{mol}', why: 'Raoult\'s law needs mole fractions, so convert both masses to moles.' },
            { tex: '\\chi_{\\ce{H2O}} = \\frac{27.75}{27.75 + 0.2775} = 0.9901', why: 'Mole fraction of the solvent: its moles over total moles.' },
            { tex: 'P = 0.9901 \\times 23.8\\ \\text{torr} = 23.56\\ \\text{torr}', why: 'Raoult\'s law.' },
            { tex: '\\Delta P = 23.8 - 23.56 = 0.24\\ \\text{torr}', why: 'Check: $\\chi_{\\text{solute}} P^\\circ = 0.0099 \\times 23.8 = 0.24$ torr, the same.' },
          ],
          result: 'A 1% mole fraction of solute lowers the vapor pressure by 1%. Small, but it is the root of all the other colligative effects.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'The deeper reason: entropy',
          text: 'The surface-blocking picture is a helpful cartoon, but the real driver is [[gchem-entropy|entropy]]. Solvent molecules in a solution are mixed with solute, a more disordered state than pure liquid, so they have less tendency to leave it, whether by evaporating, by freezing out as pure solid, or by crossing a membrane into pure solvent. One cause, four symptoms: that is why all four effects depend only on the particle count.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'What is the vapor pressure at 25 °C of a solution of 30.0 g of urea, $\\ce{CO(NH2)2}$ (60.06 g/mol, nonvolatile), in 90.0 g of water (18.02 g/mol)? Pure water\'s vapor pressure at 25 °C is 23.8 torr. (three significant figures)',
      hint: 'Moles of each, then $\\chi_{\\ce{H2O}}$, then $P = \\chi_{\\ce{H2O}} \\times 23.8$ torr.',
      label: '$P =$',
      unit: 'torr',
      answer: '23.8*(90.0/18.02)/((90.0/18.02)+(30.0/60.06))',
      answerTex: '21.6\\ \\text{torr}',
      tolerance: 0.06,
      explanation: '$n_{\\text{urea}} = 30.0 / 60.06 = 0.4995$ mol and $n_{\\ce{H2O}} = 90.0 / 18.02 = 4.994$ mol, so $\\chi_{\\ce{H2O}} = \\frac{4.994}{5.494} = 0.9091$. Then $P = 0.9091 \\times 23.8 = 21.6$ torr. Almost one particle in eleven is urea, so the vapor pressure drops by about 9%.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Two volatile liquids: ideal solutions and deviations',
      blocks: [
        {
          type: 'p',
          text: 'If both components evaporate, Raoult\'s law applies to each one, and by Dalton\'s law the total vapor pressure is the sum of the partial pressures:',
        },
        {
          type: 'math',
          tex: 'P_{\\text{total}} = \\chi_A P_A^\\circ + \\chi_B P_B^\\circ = \\chi_A P_A^\\circ + (1 - \\chi_A) P_B^\\circ',
          caption: 'A straight line in $\\chi_A$, joining $P_B^\\circ$ at $\\chi_A = 0$ to $P_A^\\circ$ at $\\chi_A = 1$.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 120],
          xStep: 0.1,
          yStep: 20,
          functions: [
            { expr: 'a*x + b*(1 - x)', label: '$P_{\\text{total}}$', color: 'purple' },
            { expr: 'a*x', label: '$P_A = \\chi_A P_A^\\circ$', color: 'blue', dashed: true },
            { expr: 'b*(1 - x)', label: '$P_B = \\chi_B P_B^\\circ$', color: 'orange', dashed: true },
          ],
          vlines: [{ x: 'c', label: 'mixture', color: 'gray' }],
          sliders: [
            { name: 'a', min: 10, max: 110, step: 0.1, value: 95.1, label: '$P_A^\\circ$ (torr)' },
            { name: 'b', min: 10, max: 110, step: 0.1, value: 28.4, label: '$P_B^\\circ$ (torr)' },
            { name: 'c', min: 0, max: 1, step: 0.01, value: 0.5, label: '$\\chi_A$ in the liquid' },
          ],
          readouts: [
            { label: '$P_{\\text{total}}$ (torr) $=$', expr: 'a*c + b*(1 - c)', digits: 3 },
            { label: 'mole fraction of A in the vapor $=$', expr: 'a*c/(a*c + b*(1 - c))', digits: 3 },
          ],
          caption: 'Horizontal axis: mole fraction of A in the liquid; vertical: vapor pressure in torr. Defaults are benzene (A, 95.1 torr) and toluene (B, 28.4 torr) at 25 °C, a nearly ideal pair. For a 50 : 50 liquid the vapor is 77% benzene: the vapor is always richer in the more volatile component, which is the principle behind distillation and the fractionating towers that separate crude oil into fuels.',
        },
        {
          type: 'p',
          text: 'Raoult\'s law holds exactly for an [[gchem-ideal-solution|ideal solution]], one in which A–B attractions are just as strong as A–A and B–B attractions, so $\\Delta H_{\\text{soln}} = 0$. Real pairs deviate, and the direction tells you about the attractions (the three-step model of the previous lesson):',
        },
        {
          type: 'list',
          items: [
            '**Positive deviation** (vapor pressure higher than predicted): A–B attractions are *weaker* than the average of A–A and B–B, so molecules escape more easily. Dissolving is endothermic. Example: ethanol and hexane, where hexane disrupts ethanol\'s hydrogen bonds.',
            '**Negative deviation** (vapor pressure lower than predicted): A–B attractions are *stronger*, holding molecules in the liquid. Dissolving is exothermic. Example: acetone and chloroform, which form a hydrogen bond $\\ce{Cl3C-H\\bond{...}O=C(CH3)2}$ that neither liquid has on its own.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Mixing acetone and chloroform releases heat, and the vapor pressure of the mixture is **lower** than Raoult\'s law predicts. What does this tell you?',
      options: [
        { text: 'The acetone–chloroform attractions are weaker than those in the pure liquids', why: 'Weaker cross-attractions would let molecules escape more easily (higher vapor pressure) and make mixing endothermic. Both observations say the opposite.' },
        { text: 'The acetone–chloroform attractions are stronger than those in the pure liquids', correct: true, why: 'Stronger A–B attractions hold molecules in the liquid (lower vapor pressure) and release energy on mixing (exothermic). Here the cause is a new C–H···O hydrogen bond.' },
        { text: 'The mixture is an ideal solution', why: 'An ideal solution follows Raoult\'s law exactly and has $\\Delta H_{\\text{soln}} = 0$. This one deviates and releases heat.' },
        { text: 'One of the liquids must have stopped evaporating', why: 'Both still evaporate; each just has a lower partial pressure than $\\chi P^\\circ$.' },
      ],
      explanation: 'Negative deviation and exothermic mixing are two signs of the same fact: molecules are more stable next to each other than next to their own kind. Positive deviation and endothermic mixing go together the other way. The heat of mixing and the deviation from Raoult\'s law both measure how A–B attractions compare with A–A and B–B.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Boiling-point elevation and freezing-point depression',
      blocks: [
        {
          type: 'p',
          text: 'A liquid boils when its vapor pressure reaches the outside pressure. A solution has a lower vapor pressure at every temperature, so it must be heated **higher** to reach 1 atm. At the other end, a solution freezes when pure solid solvent crystallizes out (the solute is left behind in the liquid). The solvent in the solution is less inclined to leave the liquid, so the solution must be cooled **lower** before it freezes.',
        },
        {
          type: 'figure',
          svg: FIG.phase,
          alt: 'Phase diagram of pressure against temperature. The pure solvent has a solid black liquid–vapor curve and solid–liquid line; the solution has red dashed curves shifted so that its liquid–vapor curve is lower. Along the 1 atm line, the solution freezes at a lower temperature (Delta Tf) and boils at a higher temperature (Delta Tb) than the pure solvent.',
          caption: 'The solute lowers the liquid–vapor curve (Raoult\'s law), so the liquid region of the phase diagram widens in both directions. Read along the 1 atm line: the freezing point moves left by $\\Delta T_f$ and the boiling point moves right by $\\Delta T_b$.',
        },
        {
          type: 'theorem',
          name: 'Boiling-point elevation and freezing-point depression',
          tex: '\\Delta T_b = i\\,K_b\\,m \\qquad\\qquad \\Delta T_f = i\\,K_f\\,m',
          text: 'These are [[gchem-boiling-point-elevation|boiling-point elevation]] and [[gchem-freezing-point-depression|freezing-point depression]]. $m$ is the [[gchem-molality|molality]] of the solute, $K_b$ and $K_f$ are constants of the **solvent** (in °C·kg/mol), and $i$ is the van \'t Hoff factor: the number of particles each formula unit produces (1 for nonelectrolytes). Both $\\Delta T$ values are positive; the boiling point goes up by $\\Delta T_b$ and the freezing point goes down by $\\Delta T_f$.',
        },
        {
          type: 'table',
          headers: ['Solvent', 'b.p. (°C)', '$K_b$ (°C kg/mol)', 'f.p. (°C)', '$K_f$ (°C kg/mol)'],
          rows: [
            ['water', '100.0', '0.512', '0.0', '1.86'],
            ['benzene', '80.1', '2.53', '5.5', '5.12'],
            ['acetic acid', '118.1', '3.07', '16.6', '3.9'],
          ],
          caption: 'Molal boiling-point and freezing-point constants (values from OpenStax Chemistry 2e, Section 11.4).',
        },
        {
          type: 'p',
          text: 'Why molality? Both effects come from the ratio of solute particles to solvent particles, which molality tracks exactly ($m \\times$ molar mass of solvent $\\approx$ solute-to-solvent mole ratio), and it does not drift as you heat or cool the sample.',
        },
        {
          type: 'deepdive',
          title: 'Where $K_b$ comes from (a calculus derivation)',
          blocks: [
            {
              type: 'p',
              text: 'The Clausius–Clapeyron equation from the vapor-pressure lesson gives the [[derivative]] of the [[natural-logarithm|natural logarithm]] of the pure solvent\'s vapor pressure: $\\frac{d \\ln P^\\circ}{dT} = \\frac{\\Delta H_{\\text{vap}}}{RT^2}$. Near the normal boiling point $T_b$, where $P^\\circ = 1$ atm, linearize: $\\ln P^\\circ(T_b + \\Delta T) \\approx \\frac{\\Delta H_{\\text{vap}}}{R T_b^2}\\,\\Delta T$ (in atm).',
            },
            {
              type: 'p',
              text: 'The solution boils when $\\chi_{\\text{solv}} P^\\circ = 1$ atm, that is when $\\ln P^\\circ = -\\ln \\chi_{\\text{solv}} = -\\ln(1 - \\chi_{\\text{solute}}) \\approx \\chi_{\\text{solute}}$ for a dilute solution. And $\\chi_{\\text{solute}} \\approx n_{\\text{solute}}/n_{\\text{solv}} = m\\,\\mathcal{M}_{\\text{solv}}$, with the solvent\'s molar mass $\\mathcal{M}_{\\text{solv}}$ in kg/mol. Setting the two equal:',
            },
            {
              type: 'math',
              tex: '\\Delta T_b = \\underbrace{\\frac{R\\,T_b^2\\,\\mathcal{M}_{\\text{solv}}}{\\Delta H_{\\text{vap}}}}_{K_b}\\,m = \\frac{(8.314)(373.15)^2(0.018015)}{40\\,660}\\,m = 0.513\\,m',
              caption: 'For water, with $\\Delta H_{\\text{vap}} = 40.66$ kJ/mol, this predicts $K_b = 0.513$ °C kg/mol; the measured value is 0.512. The same argument with $\\Delta H_{\\text{fus}} = 6.01$ kJ/mol and $T_f = 273.15$ K gives $K_f = 1.86$.',
            },
            {
              type: 'p',
              text: 'This explains the numbers: $K_f > K_b$ for water because $\\Delta H_{\\text{fus}}$ is much smaller than $\\Delta H_{\\text{vap}}$, and heavy solvents with low heats of fusion (such as camphor) have very large $K_f$, which makes them sensitive for molar-mass measurements.',
            },
          ],
        },
        {
          type: 'derivation',
          title: 'Freezing point of 100.0 g of ethylene glycol ($\\ce{C2H6O2}$, 62.07 g/mol) in 500.0 g of water',
          steps: [
            { tex: 'm = \\frac{100.0 / 62.07\\ \\text{mol}}{0.5000\\ \\text{kg}} = \\frac{1.611\\ \\text{mol}}{0.5000\\ \\text{kg}} = 3.222\\ m', why: 'Molality: moles of solute per kilogram of solvent.' },
            { tex: '\\Delta T_f = i K_f m = (1)(1.86\\ ^\\circ\\text{C kg/mol})(3.222\\ \\text{mol/kg}) = 5.99\\ ^\\circ\\text{C}', why: 'Ethylene glycol is a nonelectrolyte, so $i = 1$. The kg/mol and mol/kg cancel, leaving °C.' },
            { tex: 'T_f = 0.00 - 5.99 = -5.99\\ ^\\circ\\text{C}', why: 'Depression means subtract from the pure solvent\'s freezing point.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'What is the normal boiling point of a solution of 45.0 g of glucose (180.16 g/mol, a nonelectrolyte) in 300.0 g of water? Use $K_b = 0.512$ °C kg/mol. (Give the answer to two decimal places.)',
      hint: 'Molality first ($n / 0.3000$ kg), then $\\Delta T_b = K_b m$, then add to 100.00 °C.',
      label: '$T_b =$',
      unit: '°C',
      answer: '100 + 0.512*(45.0/180.16)/0.3000',
      answerTex: '100.43\\ ^\\circ\\text{C}',
      tolerance: 0.01,
      explanation: '$n = 45.0 / 180.16 = 0.2498$ mol, so $m = 0.2498 / 0.3000 = 0.8326\\ m$. Then $\\Delta T_b = (1)(0.512)(0.8326) = 0.426$ °C and $T_b = 100.43$ °C. Even a fairly concentrated sugar solution boils less than half a degree higher: boiling-point elevation is a small effect in water because $K_b$ is small. (Salting pasta water raises its boiling point by less than 0.1 °C; the salt is for flavor.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The van \'t Hoff factor and ion pairing',
      blocks: [
        {
          type: 'p',
          text: 'Colligative properties count particles, and an electrolyte breaks apart into several. One mole of $\\ce{NaCl}$ gives 2 mol of ions; one mole of $\\ce{CaCl2}$ gives 3. The [[gchem-van-t-hoff-factor|van \'t Hoff factor]] $i$ is the number of moles of particles in solution per mole of solute dissolved.',
        },
        {
          type: 'table',
          headers: ['Solute', 'Particles', 'Ideal $i$'],
          rows: [
            ['glucose, urea, ethylene glycol', 'molecules ([[gchem-nonelectrolyte|nonelectrolytes]])', '1'],
            ['$\\ce{NaCl}$, $\\ce{MgSO4}$', '$\\ce{Na+ + Cl-}$; $\\ce{Mg^2+ + SO4^2-}$', '2'],
            ['$\\ce{CaCl2}$, $\\ce{K2SO4}$', '$\\ce{Ca^2+ + 2Cl-}$; $\\ce{2K+ + SO4^2-}$', '3'],
          ],
        },
        {
          type: 'p',
          text: 'Measured values come out **smaller** than these ideal numbers, and more so at higher concentration and for more highly charged ions. The reason is [[gchem-ion-pair|ion pairing]]: oppositely charged ions attract, and at any moment some cations and anions are close together and move as one unit, which counts as a single particle.',
        },
        {
          type: 'figure',
          svg: FIG.ionpair,
          alt: 'Left: a dilute solution with three positive and three negative ions all separated, labelled 3 NaCl gives 6 particles, i equals 2. Right: a more concentrated solution in which two cation–anion pairs are circled with dashed outlines, plus one free cation and one free anion, labelled 3 NaCl gives 4 particles, i approximately 1.3.',
          caption: 'Each paired cation–anion pair moves as one particle, so the effective $i$ falls below the ideal value. Doubly charged ions ($\\ce{Mg^2+}$, $\\ce{SO4^2-}$) attract four times as strongly and pair much more.',
        },
        {
          type: 'table',
          headers: ['Solute', '0.100 $m$', '0.0100 $m$', '0.00100 $m$', 'ideal'],
          rows: [
            ['$\\ce{NaCl}$', '1.87', '1.94', '1.97', '2'],
            ['$\\ce{MgSO4}$', '1.21', '1.53', '1.82', '2'],
            ['$\\ce{K2SO4}$', '2.32', '2.70', '2.84', '3'],
          ],
          caption: 'Measured van \'t Hoff factors at 25 °C (typical textbook values). Dilution lets ions drift apart, so $i$ approaches the ideal value.',
        },
        {
          type: 'derivation',
          title: 'Freezing-point depression of 0.100 $m$ $\\ce{MgSO4}$: ideal versus real',
          steps: [
            { tex: '\\Delta T_f^{\\text{ideal}} = (2)(1.86)(0.100) = 0.372\\ ^\\circ\\text{C}', why: 'Assuming complete separation into $\\ce{Mg^2+}$ and $\\ce{SO4^2-}$, $i = 2$.' },
            { tex: '\\Delta T_f^{\\text{real}} = (1.21)(1.86)(0.100) = 0.225\\ ^\\circ\\text{C}', why: 'Using the measured $i = 1.21$ at this concentration.' },
          ],
          result: 'The real effect is only 60% of the ideal prediction. On exams, use the ideal $i$ unless a measured value is given, but know that it is an upper limit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Order these aqueous solutions from **highest** freezing point to **lowest**. (Assume ideal van \'t Hoff factors.)',
      lines: [
        '0.050 $m$ glucose',
        '0.10 $m$ sucrose',
        '0.10 $m$ $\\ce{NaCl}$',
        '0.10 $m$ $\\ce{CaCl2}$',
      ],
      explanation: 'Compare the particle molality $i \\times m$: glucose $1 \\times 0.050 = 0.050$; sucrose $1 \\times 0.10 = 0.10$; $\\ce{NaCl}$ $2 \\times 0.10 = 0.20$; $\\ce{CaCl2}$ $3 \\times 0.10 = 0.30$. More particles means a larger depression, so the freezing points run $-0.093$, $-0.19$, $-0.37$ and $-0.56$ °C. With real (ion-paired) $i$ values the electrolyte depressions shrink a little, but the order stays the same.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'A 0.100 $m$ solution of $\\ce{MgSO4}$ lowers the freezing point of water exactly twice as much as a 0.100 $m$ glucose solution.',
      answer: false,
      explanation: 'Twice would be true if $\\ce{MgSO4}$ separated completely into two free ions ($i = 2$). In reality the doubly charged ions pair strongly, the measured $i$ at 0.100 $m$ is about 1.21, and the depression is only about 1.2 times that of glucose: 0.225 °C versus 0.186 °C.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Road salt and antifreeze',
      blocks: [
        {
          type: 'p',
          text: '**Road salt.** Spread on ice, salt dissolves in the thin film of liquid water always present on the surface. The brine has a lower freezing point than 0 °C, so ice in contact with it melts, which makes more brine, which dissolves more salt. Sodium chloride can lower the freezing point of water to at most about −21 °C (the composition of lowest freezing point, about 23% $\\ce{NaCl}$), and in practice it works poorly much below about −10 °C because the melting slows down.',
        },
        {
          type: 'p',
          text: 'Calcium chloride does better in severe cold for two reasons you now understand: each formula unit gives **three** ions instead of two, and dissolving it is strongly **exothermic** ($-81.3$ kJ/mol, the hot-pack salt from the first lesson), so it warms its surroundings as it works.',
        },
        {
          type: 'derivation',
          title: 'A 50 : 50 (by volume) engine coolant: 1.00 L ethylene glycol (density 1.11 g/mL) + 1.00 L water',
          steps: [
            { tex: 'n = \\frac{1110\\ \\text{g}}{62.07\\ \\text{g/mol}} = 17.88\\ \\text{mol}', why: 'Density turns 1.00 L of glycol into 1110 g; molar mass turns that into moles.' },
            { tex: 'm = \\frac{17.88\\ \\text{mol}}{1.00\\ \\text{kg water}} = 17.9\\ m', why: '1.00 L of water is 1.00 kg of solvent.' },
            { tex: '\\Delta T_f = (1)(1.86)(17.9) = 33\\ ^\\circ\\text{C} \\implies T_f \\approx -33\\ ^\\circ\\text{C}', why: 'Nonelectrolyte, $i = 1$.' },
            { tex: '\\Delta T_b = (1)(0.512)(17.9) = 9.2\\ ^\\circ\\text{C} \\implies T_b \\approx 109\\ ^\\circ\\text{C}', why: 'The same coolant also raises the boiling point: anti-freeze and anti-boil.' },
          ],
          result: 'The real mixture freezes near −37 °C and boils near 106 °C at 1 atm. The formulas are derived for **dilute** solutions, and 18 $m$ is anything but dilute, so they give the right size and direction but not precise values. A pressurized radiator cap raises the boiling point further.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Why not use pure antifreeze?',
          text: 'More glycol is not always better. Pure ethylene glycol freezes at about −13 °C, so the freezing point of the mixture falls as you add glycol only up to roughly 60–70% glycol and then rises again. It also carries heat away less well than water. That is why coolant is sold as a 50 : 50 mix for most climates.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'What mass of $\\ce{NaCl}$ (58.44 g/mol) must be dissolved per 1.000 kg of water to lower the freezing point to −10.0 °C? Assume the ideal $i = 2$ and $K_f = 1.86$ °C kg/mol. (three significant figures)',
      hint: 'Solve $\\Delta T_f = i K_f m$ for $m$, then $m \\times 1.000$ kg gives moles; convert to grams.',
      label: 'mass $\\ce{NaCl}$ $=$',
      unit: 'g',
      answer: '10.0/(2*1.86)*58.44',
      answerTex: '157\\ \\text{g}',
      tolerance: 0.6,
      explanation: '$m = \\frac{\\Delta T_f}{i K_f} = \\frac{10.0}{2 \\times 1.86} = 2.688$ mol/kg. For 1.000 kg of water that is 2.688 mol, or $2.688 \\times 58.44 = 157$ g of $\\ce{NaCl}$. Because real $i$ is a bit below 2 at this concentration, slightly more salt is needed in practice (about 165 g with $i = 1.9$).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Osmosis and osmotic pressure',
      blocks: [
        {
          type: 'p',
          text: 'A [[gchem-semipermeable-membrane|semipermeable membrane]] lets solvent molecules through but blocks solute particles. Cell membranes, cellophane and the thin polymer films in water purifiers all behave this way. Put pure water on one side and a solution on the other and water flows into the solution. This net flow of solvent toward the more concentrated side is [[gchem-osmosis|osmosis]].',
        },
        {
          type: 'figure',
          svg: FIG.osmosis,
          alt: 'Three U-tubes with a green dashed membrane at the bottom. 1, Start: pure water on the left, solution with orange solute particles on the right, equal levels. 2, Osmosis: water has flowed into the solution side, whose level is higher by a height h. 3, Reverse osmosis: a piston pushes on the solution side with pressure greater than pi, and water flows back to the pure-water side.',
          caption: 'Water crosses the membrane toward the solution until the extra weight of the raised column, height $h$, pushes back hard enough to stop it. That back-pressure is the osmotic pressure $\\Pi$. Push harder than $\\Pi$ and the flow reverses.',
        },
        {
          type: 'p',
          text: 'Why does water move "uphill"? Molecules cross the membrane in both directions, but on the solution side a fraction of the molecules hitting the membrane are solute particles that cannot pass, so fewer water molecules cross from that side each second. The net flow is into the solution: the same lowered "escaping tendency" that lowers vapor pressure.',
        },
        {
          type: 'theorem',
          name: 'Osmotic pressure (van \'t Hoff equation)',
          tex: '\\Pi = i\\,M\\,R\\,T',
          text: 'The [[gchem-osmotic-pressure|osmotic pressure]] $\\Pi$ is the pressure that must be applied to the solution to stop osmosis. $M$ is molarity, $R = 0.08206$ L atm mol⁻¹ K⁻¹, $T$ in kelvins. It has the same form as the ideal gas law, $P = (n/V)RT$: dissolved particles exert a pressure as if they were a gas filling the solution\'s volume.',
        },
        {
          type: 'derivation',
          title: 'How big is osmotic pressure? 0.10 M glucose at 25 °C',
          steps: [
            { tex: '\\Pi = (1)(0.10\\ \\text{mol/L})(0.08206\\ \\text{L atm mol}^{-1}\\text{K}^{-1})(298\\ \\text{K}) = 2.4\\ \\text{atm}', why: 'Glucose is a nonelectrolyte. The mol, L and K units cancel, leaving atm.' },
            { tex: 'h = \\frac{\\Pi}{\\rho g} = \\frac{2.45 \\times 101\\,325\\ \\text{Pa}}{(1000\\ \\text{kg/m}^3)(9.81\\ \\text{m/s}^2)} \\approx 25\\ \\text{m}', why: 'Convert to a water column: pressure $= \\rho g h$ for a column of height $h$.' },
          ],
          result: 'A modest 0.10 M solution could push water up a column about 25 m (eight stories) high. Osmotic pressure is by far the largest colligative effect, which is why it matters so much to living cells.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student calculates the osmotic pressure of normal saline (9.0 g $\\ce{NaCl}$ per liter) at body temperature, 37 °C, to compare with blood (about 7.5 atm). Tap the first line that is wrong.',
      lines: [
        'Molarity: $9.0\\ \\text{g} \\div 58.44\\ \\text{g/mol} = 0.154$ mol in 1 L, so $0.154$ M',
        '$\\ce{NaCl}$ is a single formula unit, so $i = 1$',
        '$T = 37 + 273.15 = 310.15$ K',
        '$\\Pi = iMRT = (1)(0.154)(0.08206)(310.15) = 3.92$ atm, so saline is strongly hypotonic',
      ],
      errorLines: [2],
      explanation: '$\\ce{NaCl}$ is a strong electrolyte: each formula unit becomes $\\ce{Na+}$ and $\\ce{Cl-}$, two particles, so ideally $i = 2$. Then $\\Pi = (2)(0.154)(0.08206)(310.15) = 7.84$ atm, close to blood\'s osmotic pressure. That is exactly why 0.9% saline is the standard isotonic IV fluid. (With slight ion pairing the real value is a few percent lower, even closer to blood.)',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Weighing molecules with colligative data',
      blocks: [
        {
          type: 'p',
          text: 'Because colligative properties count particles, they let you count the moles in a weighed sample, and grams divided by moles is molar mass. This was one of the first ways chemists measured the molar masses of new compounds, and osmotic pressure is still used for large biomolecules.',
        },
        {
          type: 'derivation',
          title: 'Freezing point: 1.25 g of an unknown nonelectrolyte in 25.0 g of benzene lowers its freezing point by 1.42 °C ($K_f = 5.12$)',
          steps: [
            { tex: 'm = \\frac{\\Delta T_f}{i K_f} = \\frac{1.42\\ ^\\circ\\text{C}}{(1)(5.12\\ ^\\circ\\text{C kg/mol})} = 0.2773\\ \\text{mol/kg}', why: 'Solve $\\Delta T_f = iK_f m$ for the molality.' },
            { tex: 'n = (0.2773\\ \\text{mol/kg})(0.0250\\ \\text{kg}) = 6.934 \\times 10^{-3}\\ \\text{mol}', why: 'Molality times kilograms of solvent gives moles of solute.' },
            { tex: '\\mathcal{M} = \\frac{1.25\\ \\text{g}}{6.934 \\times 10^{-3}\\ \\text{mol}} = 180\\ \\text{g/mol}', why: 'Molar mass is grams per mole.' },
          ],
          result: 'The unknown has a molar mass of about 180 g/mol (glucose has 180.16, for comparison).',
        },
        {
          type: 'derivation',
          title: 'Osmotic pressure: 2.00 g of a protein in 200.0 mL of water gives $\\Pi = 2.85$ torr at 25 °C',
          steps: [
            { tex: '\\Pi = \\frac{2.85\\ \\text{torr}}{760\\ \\text{torr/atm}} = 3.750 \\times 10^{-3}\\ \\text{atm}', why: '$R$ is in L atm, so the pressure must be in atm.' },
            { tex: 'M = \\frac{\\Pi}{RT} = \\frac{3.750 \\times 10^{-3}}{(0.08206)(298.15)} = 1.533 \\times 10^{-4}\\ \\text{mol/L}', why: 'Solve $\\Pi = MRT$ for $M$ (a protein is a nonelectrolyte here, $i = 1$).' },
            { tex: 'n = (1.533 \\times 10^{-4}\\ \\text{mol/L})(0.2000\\ \\text{L}) = 3.066 \\times 10^{-5}\\ \\text{mol}', why: 'For such a dilute solution, the solution volume is essentially the 200.0 mL of water.' },
            { tex: '\\mathcal{M} = \\frac{2.00\\ \\text{g}}{3.066 \\times 10^{-5}\\ \\text{mol}} = 6.52 \\times 10^{4}\\ \\text{g/mol}', why: 'Grams per mole. A typical protein, comparable to hemoglobin.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why osmotic pressure for big molecules?',
          text: 'The same protein solution would lower the freezing point by only $1.86 \\times 1.5 \\times 10^{-4} \\approx 0.0003$ °C, far too small to measure reliably. Its osmotic pressure, 2.85 torr, is a column of water almost 4 cm high and easy to read. Osmotic pressure is the most sensitive colligative property by orders of magnitude, so it is the method of choice when the moles are tiny.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Dissolving 3.20 g of an unknown nonelectrolyte in 50.0 g of benzene lowers the freezing point by 1.75 °C. Using $K_f = 5.12$ °C kg/mol for benzene, find the molar mass. (three significant figures)',
      hint: '$m = \\Delta T_f / K_f$; moles $= m \\times 0.0500$ kg; molar mass $=$ grams ÷ moles.',
      label: '$\\mathcal{M} =$',
      unit: 'g/mol',
      answer: '3.20/((1.75/5.12)*0.0500)',
      answerTex: '187\\ \\text{g/mol}',
      tolerance: 0.6,
      explanation: '$m = 1.75 / 5.12 = 0.3418$ mol/kg. In 0.0500 kg of benzene that is $0.3418 \\times 0.0500 = 0.01709$ mol of solute. The molar mass is $3.20\\ \\text{g} / 0.01709\\ \\text{mol} = 187$ g/mol. Remember to use the kilograms of **solvent**, and that a larger depression means more moles and therefore a *smaller* molar mass for the same mass of sample.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'IV fluids, isotonic solutions and reverse osmosis',
      blocks: [
        {
          type: 'p',
          text: 'A red blood cell is a bag of solution wrapped in a semipermeable membrane. Its contents and blood plasma have a total particle concentration of about 0.29 mol of particles per liter (290 milliosmoles per liter), so anything injected into a vein must match it.',
        },
        {
          type: 'figure',
          svg: FIG.rbc,
          alt: 'Three red blood cells. Hypotonic solution such as pure water: arrows point inward and the cell is swollen and round, may burst. Isotonic, 0.9 percent NaCl: a normal biconcave disc with balanced double-headed arrows, no net flow. Hypertonic, such as 3 percent NaCl: arrows point outward and the cell is shrunken with a spiky outline.',
          caption: 'Water always moves toward the side with more dissolved particles. Only an [[gchem-isotonic|isotonic]] solution, with the same total particle concentration as the cell, leaves the cell unchanged.',
        },
        {
          type: 'list',
          items: [
            '**Normal saline**, 0.9% $\\ce{NaCl}$ (0.154 M, about 308 mOsm/L ideally), is isotonic and is the workhorse IV fluid for replacing blood volume, including in field medicine.',
            '**D5W**, 5% glucose (0.278 M), is isotonic in the bag. But the body burns the glucose, leaving plain water, so it acts hypotonic once infused and is not used to replace lost blood volume.',
            '**Pure water** injected into a vein would make red cells swell and burst (hemolysis); a strongly **hypertonic** solution makes them shrivel (crenation).',
            'Drinking seawater dehydrates you for the same reason: at about 3.5% salt it is more concentrated than your body fluids can match, so it draws water out.',
          ],
        },
        {
          type: 'heading',
          text: 'Reverse osmosis: pushing water the "wrong" way',
        },
        {
          type: 'p',
          text: 'If you apply a pressure greater than $\\Pi$ to the solution side (panel 3 of the osmosis figure), water is forced through the membrane **out of** the solution, leaving salts, microbes and most other contaminants behind. This is [[gchem-reverse-osmosis|reverse osmosis]] (RO), the main technology for turning seawater and brackish water into drinking water.',
        },
        {
          type: 'derivation',
          title: 'Minimum pressure to desalinate seawater (model it as 0.60 M $\\ce{NaCl}$ at 25 °C)',
          steps: [
            { tex: '\\Pi = iMRT = (2)(0.60)(0.08206)(298) \\approx 29\\ \\text{atm}', why: 'Ideal $i = 2$ for $\\ce{NaCl}$; this is the pressure just to stop osmosis.' },
            { tex: 'P_{\\text{applied}} > \\Pi \\approx 29\\ \\text{atm}', why: 'To make water flow out of the seawater, the pump must exceed $\\Pi$. As fresh water is removed the remaining brine gets saltier and its $\\Pi$ rises.' },
          ],
          result: 'Real seawater has an osmotic pressure of about 27 atm, and desalination plants pump at roughly 55–80 atm to get a useful flow. Brackish groundwater, with far less salt, needs much lower pressures.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Reverse osmosis in the field',
          text: 'Military units make drinking water from rivers, lakes, brackish wells and the sea with trailer-mounted reverse-osmosis systems: the Reverse Osmosis Water Purification Unit (ROWPU) and its successor, the Tactical Water Purification System. They pre-filter the water, push it through RO membranes at high pressure, and then add a little chlorine to keep it safe in storage. Hand-pumped RO desalinators in life-raft survival kits do the same job on a small scale: one person pumping can produce a few liters of fresh water a day from seawater.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'numeric',
      prompt: 'Brackish well water contains about 5.0 g of $\\ce{NaCl}$ (58.44 g/mol) per liter. What is the minimum pressure, in atm, that a reverse-osmosis unit must apply to purify it at 25 °C? Use $i = 2$ and $R = 0.08206$ L atm mol⁻¹ K⁻¹. (two significant figures)',
      hint: 'Molarity $= 5.0 / 58.44$ mol/L; then $\\Pi = iMRT$ with $T = 298.15$ K.',
      label: '$\\Pi =$',
      unit: 'atm',
      answer: '2*(5.0/58.44)*0.08206*298.15',
      answerTex: '4.2\\ \\text{atm}',
      tolerance: 0.06,
      explanation: '$M = 5.0 / 58.44 = 0.0856$ M, so $\\Pi = (2)(0.0856)(0.08206)(298.15) = 4.2$ atm. Any applied pressure above that drives water out through the membrane. That is about seven times less than for seawater, which is why desalting brackish water costs much less energy.',
    },
    // ------------------------------------------------------------------ 18
    {
      kind: 'mcq',
      prompt: 'A patient is mistakenly given an IV of 3% $\\ce{NaCl}$ instead of 0.9%. What happens to the red blood cells, at least at first?',
      options: [
        { text: 'They swell, because salt flows into them', why: 'The membrane largely blocks the ions; it is water that moves. And swelling happens in a *hypotonic* solution, not a hypertonic one.' },
        { text: 'They shrink, because water flows out of them into the more concentrated plasma', correct: true, why: '3% $\\ce{NaCl}$ is hypertonic: the outside has more particles per liter than the cell interior, so water leaves the cells by osmosis and they shrivel (crenate).' },
        { text: 'Nothing, because sodium chloride is already present in blood', why: 'What matters is the concentration difference. 3% is more than three times isotonic.' },
        { text: 'They burst, because the outside pressure crushes them', why: 'Bursting (hemolysis) happens when water rushes *in*, in a hypotonic solution.' },
      ],
      explanation: 'Water moves toward the side with more dissolved particles. In 3% saline (about 1.0 osmol/L ideally, versus 0.29 inside the cell) that side is outside the cell, so water leaves and the cell shrinks. Hypertonic saline is used deliberately in small, controlled doses, for example to draw fluid out of a swollen brain, which is the same osmosis put to medical use.',
    },
  ],
  takeaways: [
    'Colligative properties depend only on the number of dissolved particles: vapor-pressure lowering, boiling-point elevation, freezing-point depression and osmotic pressure.',
    'Raoult\'s law: $P_{\\text{solvent}} = \\chi_{\\text{solvent}} P^\\circ$; for two volatile liquids the partial pressures add. Positive deviation means weaker A–B attractions, negative means stronger.',
    '$\\Delta T_b = iK_b m$ and $\\Delta T_f = iK_f m$ with molality $m$; for water $K_b = 0.512$ and $K_f = 1.86$ °C kg/mol.',
    'The ideal van \'t Hoff factor $i$ counts ions per formula unit; measured $i$ is smaller because of ion pairing, especially for concentrated solutions and highly charged ions.',
    'Osmotic pressure $\\Pi = iMRT$ is large: 0.1 M gives about 2.4 atm at 25 °C. Isotonic IV fluids (0.9% $\\ce{NaCl}$) match blood\'s particle concentration.',
    'Reverse osmosis applies a pressure greater than $\\Pi$ to push pure water out of salty water, from desalination plants to military field purifiers.',
    'Molar mass = grams ÷ moles, with moles counted from $\\Delta T_f$ (small molecules) or $\\Pi$ (large biomolecules).',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 11: Solutions and Colloids',
      url: 'https://openstax.org/books/chemistry-2e/pages/11-introduction',
      source: 'openstax',
      note: 'Section 11.4, Colligative Properties, covers Raoult\'s law, boiling and freezing points, osmotic pressure, molar-mass determination and ion pairing.',
    },
    {
      title: 'Wikipedia — Raoult\'s law',
      url: 'https://en.wikipedia.org/wiki/Raoult%27s_law',
      source: 'wikipedia',
      note: 'Ideal and non-ideal mixtures, positive and negative deviations, and the link to distillation and azeotropes.',
    },
    {
      title: 'Wikipedia — Reverse osmosis',
      url: 'https://en.wikipedia.org/wiki/Reverse_osmosis',
      source: 'wikipedia',
      note: 'How RO membranes work, operating pressures for seawater and brackish water, and uses from desalination plants to military and emergency purifiers.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for the "Salts & Solubility" and "Sugar and Salt Solutions" simulations to see electrolytes and nonelectrolytes as particles.',
    },
  ],
};
