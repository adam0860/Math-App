import type { Lesson } from '../../types';

// <figures> (generated from hand-written SVG; electron counts checked)
const FIG = {
  brittle: '<svg viewBox="0 0 500 210" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="70" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="30" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="66" cy="70" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="66" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><circle cx="102" cy="70" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="102" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="138" cy="70" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="138" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><circle cx="174" cy="70" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="174" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="30" cy="106" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="30" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><circle cx="66" cy="106" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="66" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="102" cy="106" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="102" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><circle cx="138" cy="106" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="138" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="174" cy="106" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="174" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><text x="102" y="22" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-green">opposite charges line up</text><text x="102" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">attraction holds layers</text><line x1="205" y1="88" x2="262" y2="88" class="s-orange" stroke-width="2.4" stroke-linecap="round"/><polygon points="270,88 262,84 262,92" class="f-orange"/><text x="237" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-orange">shift by</text><text x="237" y="108" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-orange">one ion</text><circle cx="326" cy="70" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="326" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="362" cy="70" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="362" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><circle cx="398" cy="70" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="398" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="434" cy="70" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="434" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><circle cx="470" cy="70" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="470" y="70" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="290" cy="106" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="290" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><circle cx="326" cy="106" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="326" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="362" cy="106" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="362" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><circle cx="398" cy="106" r="11" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="398" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">+</text><circle cx="434" cy="106" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="434" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:17.9px;font-weight:700">−</text><line x1="326" y1="84" x2="326" y2="92" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="362" y1="84" x2="362" y2="92" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="398" y1="84" x2="398" y2="92" class="s-red" stroke-width="2.2" stroke-linecap="round"/><line x1="434" y1="84" x2="434" y2="92" class="s-red" stroke-width="2.2" stroke-linecap="round"/><text x="380" y="22" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">like charges now face each other</text><text x="380" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-red">repulsion → crystal cracks</text><text x="250" y="192" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">This is why ionic solids are hard but brittle.</text></svg>',
  ion_charges: '<svg viewBox="0 0 512 220" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="52" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="26.5" y="67" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">H</text><rect x="472" y="52" width="27" height="30" class="f-gray" fill-opacity="0.16"/><rect x="472" y="52" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="485.5" y="67" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">He</text><rect x="13" y="82" width="27" height="30" class="f-blue" fill-opacity="0.16"/><rect x="13" y="82" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="26.5" y="97" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Li</text><rect x="40" y="82" width="27" height="30" class="f-blue" fill-opacity="0.16"/><rect x="40" y="82" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="53.5" y="97" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Be</text><rect x="337" y="82" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="350.5" y="97" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">B</text><rect x="364" y="82" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="377.5" y="97" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">C</text><rect x="391" y="82" width="27" height="30" class="f-red" fill-opacity="0.16"/><rect x="391" y="82" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="404.5" y="97" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">N</text><rect x="418" y="82" width="27" height="30" class="f-red" fill-opacity="0.16"/><rect x="418" y="82" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="431.5" y="97" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">O</text><rect x="445" y="82" width="27" height="30" class="f-red" fill-opacity="0.16"/><rect x="445" y="82" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="458.5" y="97" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">F</text><rect x="472" y="82" width="27" height="30" class="f-gray" fill-opacity="0.16"/><rect x="472" y="82" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="485.5" y="97" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Ne</text><rect x="13" y="112" width="27" height="30" class="f-blue" fill-opacity="0.16"/><rect x="13" y="112" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="26.5" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Na</text><rect x="40" y="112" width="27" height="30" class="f-blue" fill-opacity="0.16"/><rect x="40" y="112" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="53.5" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Mg</text><rect x="337" y="112" width="27" height="30" class="f-blue" fill-opacity="0.16"/><rect x="337" y="112" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="350.5" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Al</text><rect x="364" y="112" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="377.5" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Si</text><rect x="391" y="112" width="27" height="30" class="f-red" fill-opacity="0.16"/><rect x="391" y="112" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="404.5" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">P</text><rect x="418" y="112" width="27" height="30" class="f-red" fill-opacity="0.16"/><rect x="418" y="112" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="431.5" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">S</text><rect x="445" y="112" width="27" height="30" class="f-red" fill-opacity="0.16"/><rect x="445" y="112" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="458.5" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Cl</text><rect x="472" y="112" width="27" height="30" class="f-gray" fill-opacity="0.16"/><rect x="472" y="112" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="485.5" y="127" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Ar</text><rect x="13" y="142" width="27" height="30" class="f-blue" fill-opacity="0.16"/><rect x="13" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="26.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">K</text><rect x="40" y="142" width="27" height="30" class="f-blue" fill-opacity="0.16"/><rect x="40" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="53.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Ca</text><rect x="67" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="67" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="80.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Sc</text><rect x="94" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="94" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="107.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Ti</text><rect x="121" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="121" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="134.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px">V</text><rect x="148" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="148" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="161.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Cr</text><rect x="175" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="175" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="188.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Mn</text><rect x="202" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="202" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="215.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Fe</text><rect x="229" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="229" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="242.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Co</text><rect x="256" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="256" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="269.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Ni</text><rect x="283" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="283" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="296.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Cu</text><rect x="310" y="142" width="27" height="30" class="f-orange" fill-opacity="0.16"/><rect x="310" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="323.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Zn</text><rect x="337" y="142" width="27" height="30" class="f-blue" fill-opacity="0.16"/><rect x="337" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="350.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Ga</text><rect x="364" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="377.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Ge</text><rect x="391" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="404.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">As</text><rect x="418" y="142" width="27" height="30" class="f-red" fill-opacity="0.16"/><rect x="418" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="431.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Se</text><rect x="445" y="142" width="27" height="30" class="f-red" fill-opacity="0.16"/><rect x="445" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="458.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Br</text><rect x="472" y="142" width="27" height="30" class="f-gray" fill-opacity="0.16"/><rect x="472" y="142" width="27" height="30" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/><text x="485.5" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px">Kr</text><text x="26.5" y="38" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-blue">1+</text><text x="53.5" y="38" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-blue">2+</text><text x="350.5" y="38" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-blue">3+</text><text x="377.5" y="38" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-gray">—</text><text x="404.5" y="38" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-red">3−</text><text x="431.5" y="38" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-red">2−</text><text x="458.5" y="38" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-red">1−</text><text x="485.5" y="38" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px;font-weight:600" class="t-gray">0</text><text x="202" y="78" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-orange">transition metals: charge varies</text><text x="202" y="100" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-orange">Fe²⁺ or Fe³⁺, Cu⁺ or Cu²⁺</text><line x1="202" y1="114" x2="202" y2="132" class="s-orange" stroke-width="1.6" stroke-linecap="round"/><polygon points="202,138 205,132 199,132" class="f-orange"/><rect x="13" y="191" width="14" height="14" class="f-blue" fill-opacity="0.3"/><text x="33" y="198" text-anchor="start" dominant-baseline="central" style="font-size:14.6px">metals: lose e⁻ → cations</text><rect x="263" y="191" width="14" height="14" class="f-red" fill-opacity="0.3"/><text x="283" y="198" text-anchor="start" dominant-baseline="central" style="font-size:14.6px">nonmetals: gain e⁻ → anions</text><text x="13" y="16" text-anchor="start" dominant-baseline="central" style="font-size:14.6px" class="t-gray">Group charge:</text></svg>',
  na_cl_transfer: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><text x="50" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Na</text><circle cx="74.5" cy="62" r="2.6" class="f-red"/><text x="105" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:22px">+</text><text x="165" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Cl</text><circle cx="161" cy="41.5" r="2.6" fill="currentColor"/><circle cx="169" cy="41.5" r="2.6" fill="currentColor"/><circle cx="169" cy="82.5" r="2.6" fill="currentColor"/><circle cx="161" cy="82.5" r="2.6" fill="currentColor"/><circle cx="189.5" cy="58" r="2.6" fill="currentColor"/><circle cx="189.5" cy="66" r="2.6" fill="currentColor"/><circle cx="140.5" cy="62" r="2.6" fill="currentColor"/><path d="M 84,48 C 100,18 128,18 140,46" fill="none" class="s-red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="136" y1="38" x2="138.1" y2="42.6" class="s-red" stroke-width="2" stroke-linecap="round"/><polygon points="141,49 141.3,41.2 134.9,44.1" class="f-red"/><line x1="215" y1="62" x2="254" y2="62" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="262,62 254,58 254,66" fill="currentColor"/><text x="330" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Na⁺</text><text x="425" y="62" text-anchor="middle" dominant-baseline="central" style="font-size:24px">Cl</text><circle cx="421" cy="41.5" r="2.6" fill="currentColor"/><circle cx="429" cy="41.5" r="2.6" fill="currentColor"/><circle cx="429" cy="82.5" r="2.6" fill="currentColor"/><circle cx="421" cy="82.5" r="2.6" fill="currentColor"/><circle cx="449.5" cy="58" r="2.6" fill="currentColor"/><circle cx="449.5" cy="66" r="2.6" fill="currentColor"/><circle cx="400.5" cy="58" r="2.6" fill="currentColor"/><circle cx="400.5" cy="66" r="2.6" class="f-red"/><path d="M395,26 L388,26 L388,98 L395,98" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M455,26 L462,26 L462,98 L455,98" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="468" y="30" text-anchor="start" dominant-baseline="central" style="font-size:22px">−</text><text x="50" y="128" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px" class="t-gray">2, 8, 1</text><text x="165" y="128" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px" class="t-gray">2, 8, 7</text><text x="330" y="128" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px" class="t-blue">2, 8</text><text x="425" y="128" text-anchor="middle" dominant-baseline="central" style="font-size:16.8px" class="t-blue">2, 8, 8</text><text x="330" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">like Ne</text><text x="425" y="150" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-blue">like Ar</text><text x="108" y="182" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">atoms (neutral)</text><text x="378" y="182" text-anchor="middle" dominant-baseline="central" style="font-size:15.7px" class="t-gray">ions (each with a full outer shell)</text></svg>',
  nacl_lattice: '<svg viewBox="0 0 440 312" xmlns="http://www.w3.org/2000/svg"><line x1="120" y1="250" x2="212" y2="250" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="120" y1="250" x2="120" y2="158" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="120" y1="250" x2="158.6" y2="222.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="158.6" y1="222.4" x2="250.6" y2="222.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="158.6" y1="222.4" x2="158.6" y2="130.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="158.6" y1="222.4" x2="197.3" y2="194.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="197.3" y1="194.8" x2="289.3" y2="194.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="197.3" y1="194.8" x2="197.3" y2="102.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="120" y1="158" x2="212" y2="158" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="120" y1="158" x2="120" y2="66" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="120" y1="158" x2="158.6" y2="130.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="158.6" y1="130.4" x2="250.6" y2="130.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="158.6" y1="130.4" x2="158.6" y2="38.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="158.6" y1="130.4" x2="197.3" y2="102.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="197.3" y1="102.8" x2="289.3" y2="102.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="197.3" y1="102.8" x2="197.3" y2="10.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="120" y1="66" x2="212" y2="66" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="120" y1="66" x2="158.6" y2="38.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="158.6" y1="38.4" x2="250.6" y2="38.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="158.6" y1="38.4" x2="197.3" y2="10.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="197.3" y1="10.8" x2="289.3" y2="10.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="212" y1="250" x2="304" y2="250" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="212" y1="250" x2="212" y2="158" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="212" y1="250" x2="250.6" y2="222.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="250.6" y1="222.4" x2="342.6" y2="222.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="250.6" y1="222.4" x2="250.6" y2="130.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="250.6" y1="222.4" x2="289.3" y2="194.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="289.3" y1="194.8" x2="381.3" y2="194.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="289.3" y1="194.8" x2="289.3" y2="102.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="212" y1="158" x2="304" y2="158" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="212" y1="158" x2="212" y2="66" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="212" y1="158" x2="250.6" y2="130.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="250.6" y1="130.4" x2="342.6" y2="130.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="250.6" y1="130.4" x2="250.6" y2="38.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="250.6" y1="130.4" x2="289.3" y2="102.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="289.3" y1="102.8" x2="381.3" y2="102.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="289.3" y1="102.8" x2="289.3" y2="10.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="212" y1="66" x2="304" y2="66" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="212" y1="66" x2="250.6" y2="38.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="250.6" y1="38.4" x2="342.6" y2="38.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="250.6" y1="38.4" x2="289.3" y2="10.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="289.3" y1="10.8" x2="381.3" y2="10.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="304" y1="250" x2="304" y2="158" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="304" y1="250" x2="342.6" y2="222.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="342.6" y1="222.4" x2="342.6" y2="130.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="342.6" y1="222.4" x2="381.3" y2="194.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="381.3" y1="194.8" x2="381.3" y2="102.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="304" y1="158" x2="304" y2="66" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="304" y1="158" x2="342.6" y2="130.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="342.6" y1="130.4" x2="342.6" y2="38.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="342.6" y1="130.4" x2="381.3" y2="102.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="381.3" y1="102.8" x2="381.3" y2="10.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="304" y1="66" x2="342.6" y2="38.4" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><line x1="342.6" y1="38.4" x2="381.3" y2="10.8" class="s-gray" stroke-width="1.4" stroke-linecap="round"/><circle cx="197.3" cy="194.8" r="10.9" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="289.3" cy="194.8" r="5.8" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="381.3" cy="194.8" r="10.9" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="197.3" cy="102.8" r="5.8" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="289.3" cy="102.8" r="10.9" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="381.3" cy="102.8" r="5.8" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="197.3" cy="10.8" r="10.9" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="289.3" cy="10.8" r="5.8" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="381.3" cy="10.8" r="10.9" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="158.6" cy="222.4" r="7.4" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="250.6" cy="222.4" r="13.9" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="342.6" cy="222.4" r="7.4" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="158.6" cy="130.4" r="13.9" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="250.6" cy="130.4" r="7.4" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="342.6" cy="130.4" r="13.9" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="158.6" cy="38.4" r="7.4" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="250.6" cy="38.4" r="13.9" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="342.6" cy="38.4" r="7.4" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="120" cy="250" r="17" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="212" cy="250" r="9" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="304" cy="250" r="17" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="120" cy="158" r="9" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="212" cy="158" r="17" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="304" cy="158" r="9" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="120" cy="66" r="17" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="212" cy="66" r="9" class="f-purple" stroke="currentColor" stroke-width="1"/><circle cx="304" cy="66" r="17" class="f-green" stroke="currentColor" stroke-width="1"/><circle cx="250.6" cy="130.4" r="13" class="s-red" fill="none" stroke-width="2.2"/><line x1="250.6" y1="130.4" x2="342.6" y2="130.4" class="s-red" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="5 4"/><line x1="250.6" y1="130.4" x2="158.6" y2="130.4" class="s-red" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="5 4"/><line x1="250.6" y1="130.4" x2="250.6" y2="38.4" class="s-red" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="5 4"/><line x1="250.6" y1="130.4" x2="250.6" y2="222.4" class="s-red" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="5 4"/><line x1="250.6" y1="130.4" x2="289.3" y2="102.8" class="s-red" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="5 4"/><line x1="250.6" y1="130.4" x2="212" y2="158" class="s-red" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="5 4"/><circle cx="30" cy="22" r="9" class="f-purple" stroke="currentColor" stroke-width="1"/><text x="48" y="22" text-anchor="start" dominant-baseline="central" style="font-size:16.8px">Na⁺</text><circle cx="30" cy="58" r="15" class="f-green" stroke="currentColor" stroke-width="1"/><text x="52" y="58" text-anchor="start" dominant-baseline="central" style="font-size:16.8px">Cl⁻</text><text x="20" y="298" text-anchor="start" dominant-baseline="central" style="font-size:15.7px" class="t-red">red: one Na⁺ and its 6 nearest Cl⁻ neighbors</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'chem-ionic-compounds',
  title: 'Ions and Ionic Compounds',
  summary: 'Why metals hand electrons to nonmetals, how the resulting ions lock into a crystal, and how to write and name the compounds they form.',
  minutes: 20,
  objectives: [
    'Explain why atoms gain or lose electrons in terms of noble-gas configurations and the octet rule',
    'Predict the charge of a main-group ion from its position in the periodic table',
    'Describe an ionic bond as electrostatic attraction throughout a crystal lattice',
    'Write correct formulas for ionic compounds, including those with polyatomic ions, by balancing charges',
    'Name ionic compounds, using Roman numerals for metals with more than one possible charge',
    'Explain the high melting points, brittleness and conductivity of ionic compounds',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Why atoms gain or lose electrons',
      blocks: [
        {
          type: 'p',
          text: 'The noble gases (helium, neon, argon, …) almost never react. What they share is a completely filled outer shell: neon is 2, 8 and argon is 2, 8, 8. Every other main-group element sits a few electrons away from one of these arrangements, and much of chemistry is atoms moving electrons around until they reach one.',
        },
        {
          type: 'p',
          text: 'Sodium (2, 8, 1) has one lonely [[valence-electrons|valence electron]] outside a neon core. Chlorine (2, 8, 7) is one electron short of argon. If sodium hands its electron to chlorine, both end up with a noble-gas arrangement — and both become charged, because their electrons and protons no longer balance.',
        },
        {
          type: 'figure',
          svg: FIG.na_cl_transfer,
          alt: 'Lewis symbols: Na with one dot plus Cl with seven dots; a red curved arrow moves the sodium electron to chlorine, giving Na+ and a bracketed Cl- with eight dots. Shell counts 2,8,1 and 2,8,7 become 2,8 (like neon) and 2,8,8 (like argon).',
          caption: 'Lewis symbols show only valence electrons. The red electron moves from sodium to chlorine: sodium keeps its neon core, chlorine completes an argon octet.',
        },
        {
          type: 'definition',
          term: 'Ions',
          text: 'An [[ion|ion]] is an atom (or group of atoms) with a net electric charge. A **[[cation|cation]]** is positive — it has *lost* electrons (11 protons, 10 electrons in $\\ce{Na+}$). An **[[anion|anion]]** is negative — it has *gained* electrons (17 protons, 18 electrons in $\\ce{Cl-}$).',
        },
        {
          type: 'p',
          text: 'The tendency to reach eight outer electrons is called the [[octet-rule|octet rule]] (hydrogen, lithium and beryllium aim for helium\'s two instead). It is a rule of thumb, not a law — but for main-group ions it is remarkably reliable.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why sodium stops at one electron',
          text: 'Removing sodium\'s first electron costs $496\\ \\text{kJ/mol}$ — it is far from the nucleus and shielded by ten core electrons. Removing a *second* electron means breaking into the neon core, which costs $4562\\ \\text{kJ/mol}$, more than nine times as much. That jump in [[ionization-energy|ionization energy]] is why sodium forms $\\ce{Na+}$ and never $\\ce{Na^2+}$. The noble-gas "goal" is shorthand for this energy cliff.',
        },
        {
          type: 'deepdive',
          title: 'Honest energy bookkeeping',
          blocks: [
            {
              type: 'p',
              text: 'Moving an electron from an isolated Na atom to an isolated Cl atom actually *costs* energy: $496\\ \\text{kJ/mol}$ to remove it, minus the $349\\ \\text{kJ/mol}$ chlorine releases on gaining it, leaves $+147\\ \\text{kJ/mol}$ uphill. So why does table salt form at all?',
            },
            {
              type: 'p',
              text: 'The payoff comes next: the newly formed $\\ce{Na+}$ and $\\ce{Cl-}$ ions attract each other and pack into a crystal, releasing about $787\\ \\text{kJ/mol}$. Transfer plus attraction is strongly downhill. The octet is the bookkeeping; electrostatic attraction is the reason.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Magnesium has the arrangement 2, 8, 2. Which ion does it form, and why?',
      options: [
        { text: '$\\ce{Mg-}$, by gaining one electron', why: 'Gaining electrons moves magnesium *away* from a noble-gas arrangement (2, 8, 3). Metals with few valence electrons lose them.' },
        { text: '$\\ce{Mg+}$, by losing one electron', why: 'That leaves 2, 8, 1 — still one electron outside the neon core, not a stable arrangement. Magnesium keeps going to lose the second one too.' },
        { text: '$\\ce{Mg^2+}$, by losing its two valence electrons', correct: true, why: 'Losing both valence electrons leaves 2, 8, the neon arrangement. A third electron would have to come out of the core, which costs far more energy.' },
        { text: '$\\ce{Mg^6-}$, by gaining six electrons to complete the third shell', why: 'Piling six extra electrons onto an atom is enormously unfavorable — each one is repelled by those already added. Atoms take the short road to a noble-gas arrangement.' },
      ],
      explanation: 'Atoms take the shortest route to a noble-gas arrangement. For magnesium that means losing two electrons, giving $\\ce{Mg^2+}$ with 12 protons and 10 electrons — the same electron arrangement as neon.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Predicting ion charges from the periodic table',
      blocks: [
        {
          type: 'p',
          text: 'Because the [[group|group]] number tells you how many valence electrons a main-group atom has, the periodic table predicts the charge of most ions at a glance. [[metal|Metals]] (left side) lose electrons to fall back to the previous noble gas; [[nonmetal|nonmetals]] (right side) gain electrons to reach the next one.',
        },
        {
          type: 'figure',
          svg: FIG.ion_charges,
          alt: 'Periodic table sketch of periods 1 to 4. Above the columns: group 1 is 1+, group 2 is 2+, group 13 is 3+, group 14 rarely forms ions, group 15 is 3-, group 16 is 2-, group 17 is 1-, group 18 is 0. Transition metals Sc to Zn are shaded orange with the note that their charge varies, for example Fe2+ or Fe3+.',
          caption: 'Metals (blue) lose electrons and form cations; nonmetals (red) gain electrons and form anions. Transition metals (orange) often have more than one common charge.',
        },
        {
          type: 'table',
          headers: ['Group (valence electrons)', 'Ion', 'Name', 'Same electrons as'],
          rows: [
            ['1 (1): lose 1', '$\\ce{K+}$', 'potassium ion', 'Ar'],
            ['2 (2): lose 2', '$\\ce{Ca^2+}$', 'calcium ion', 'Ar'],
            ['13 (3): lose 3', '$\\ce{Al^3+}$', 'aluminum ion', 'Ne'],
            ['15 (5): gain 3', '$\\ce{N^3-}$', 'nitride', 'Ne'],
            ['16 (6): gain 2', '$\\ce{O^2-}$', 'oxide', 'Ne'],
            ['17 (7): gain 1', '$\\ce{Br-}$', 'bromide', 'Kr'],
          ],
          caption: 'Cations keep the element name; simple anions change the ending to **-ide** (chlorine → chloride, sulfur → sulfide, phosphorus → phosphide).',
        },
        {
          type: 'derivation',
          title: 'Predict the ion formed by selenium (Se, group 16)',
          steps: [
            { tex: '\\text{Se: group 16} \\implies 6 \\text{ valence electrons}', why: 'For main groups 13–18, valence electrons = group number minus 10.' },
            { tex: '6 + 2 = 8', why: 'Gaining 2 electrons completes the octet; losing 6 would cost vastly more energy. Nonmetals gain.' },
            { tex: '34 \\text{ protons},\\ 36 \\text{ electrons} \\implies \\text{charge } 34 - 36 = -2', why: 'Charge = protons − electrons. Se has atomic number 34.' },
            { tex: '\\ce{Se^2-}\\ \\text{(selenide)}', why: 'Write the magnitude then the sign as a superscript, and give a simple anion the -ide ending. It now has the electron arrangement of krypton (36 electrons).' },
          ],
          result: 'Selenium forms the selenide ion, $\\ce{Se^2-}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Write the charge as number-then-sign',
          text: 'Chemists write $\\ce{Ca^2+}$ ("two-plus"), not $\\text{Ca}^{+2}$, and $\\ce{Na+}$ rather than $\\text{Na}^{1+}$ (a charge of one is written with the sign alone). The **+2** style is reserved for oxidation numbers, which you will meet in General Chemistry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Use the periodic table to predict the charge on each ion.',
      template: 'Barium (group 2) forms ___, nitrogen (group 15) forms ___, iodine (group 17) forms ___ and aluminum (group 13) forms ___.',
      blanks: [
        { answers: ['$\\ce{Ba^2+}$'] },
        { answers: ['$\\ce{N^3-}$'] },
        { answers: ['$\\ce{I-}$'] },
        { answers: ['$\\ce{Al^3+}$'] },
      ],
      wordBank: ['$\\ce{Ba^2+}$', '$\\ce{N^3-}$', '$\\ce{I-}$', '$\\ce{Al^3+}$', '$\\ce{Ba^2-}$', '$\\ce{N^5+}$', '$\\ce{I+}$', '$\\ce{Al^5-}$'],
      explanation: 'Metals lose their valence electrons: Ba (2 valence) → $\\ce{Ba^2+}$, Al (3 valence) → $\\ce{Al^3+}$. Nonmetals gain enough to make eight: N has 5, needs 3 → $\\ce{N^3-}$; I has 7, needs 1 → $\\ce{I-}$. The distractors either flip the sign or count all the valence electrons as the charge for a nonmetal.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'How many electrons does one aluminum ion, $\\ce{Al^3+}$, have? (Aluminum\'s atomic number is 13.)',
      hint: 'A 3+ charge means three more protons than electrons.',
      label: 'electrons $=$',
      answer: '10',
      explanation: 'Neutral Al has 13 protons and 13 electrons. Losing 3 electrons leaves $13 - 3 = 10$ electrons, while the 13 protons stay put, so the charge is $13 - 10 = +3$. Ten electrons is the arrangement 2, 8 — the same as neon.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The ionic bond: a crystal, not a pair',
      blocks: [
        {
          type: 'p',
          text: 'Once ions exist, opposite charges attract. An [[ionic-bond|ionic bond]] is that electrostatic attraction between cations and anions. Its strength follows **Coulomb\'s law**: the force between two charges is proportional to the product of the charges and inversely proportional to the square of the distance between them.',
        },
        {
          type: 'math',
          tex: 'F = k\\,\\frac{q_1 q_2}{r^2}',
          caption: 'Bigger charges and smaller distances mean stronger attraction.',
        },
        {
          type: 'p',
          text: 'Attraction does not stop at one partner. Each $\\ce{Na+}$ attracts every $\\ce{Cl-}$ around it, so the ions pack into a repeating three-dimensional pattern called a [[chem-crystal-lattice|crystal lattice]]. In table salt, every $\\ce{Na+}$ is surrounded by six $\\ce{Cl-}$ ions, and every $\\ce{Cl-}$ by six $\\ce{Na+}$.',
        },
        {
          type: 'figure',
          svg: FIG.nacl_lattice,
          alt: 'A 3 by 3 by 3 cube of alternating small purple Na+ spheres and large green Cl- spheres joined by gray lines. The central Na+ is circled in red, with dashed red lines to its six nearest Cl- neighbors: left, right, up, down, front and back.',
          caption: 'Part of the sodium chloride lattice. Ions alternate in all three directions; the circled $\\ce{Na+}$ has six $\\ce{Cl-}$ neighbors. A grain of salt is about $10^{18}$ of these ions.',
        },
        {
          type: 'definition',
          term: 'Formula unit',
          text: 'There is no "$\\ce{NaCl}$ molecule". The formula $\\ce{NaCl}$ states the **ratio** of ions in the lattice, 1 : 1. The smallest group of ions with that ratio is called a [[chem-formula-unit|formula unit]].',
        },
        {
          type: 'graph',
          x: [0.5, 4],
          y: [0, 10],
          functions: [
            { expr: '1/x^2', label: '$q_1 q_2 = 1$ (like $\\ce{Na+}$, $\\ce{Cl-}$)', color: 'gray', dashed: true },
            { expr: 'q/x^2', label: 'attraction $\\propto \\dfrac{q_1 q_2}{r^2}$', color: 'blue' },
          ],
          sliders: [{ name: 'q', min: 1, max: 9, step: 1, value: 4, label: 'charge product $q_1 q_2$' }],
          readouts: [{ label: 'times stronger than $1 \\times 1$ at the same distance:', expr: 'q', digits: 0 }],
          caption: 'Relative attraction versus ion separation (arbitrary units). $\\ce{Mg^2+}$ with $\\ce{O^2-}$ has charge product $4$: four times the pull of $\\ce{Na+}$ with $\\ce{Cl-}$ at the same distance. That is why $\\ce{MgO}$ melts near $2850\\ ^\\circ\\text{C}$ while $\\ce{NaCl}$ melts at $801\\ ^\\circ\\text{C}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why metals bond ionically with nonmetals',
          text: 'Ionic bonding needs one partner that gives up electrons cheaply (low ionization energy: metals) and one that takes them eagerly (high [[electronegativity|electronegativity]]: nonmetals). Two nonmetals both want electrons, so neither gives one away — they share instead. That is the covalent bond of the next lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'A crystal of sodium chloride is made of separate $\\ce{NaCl}$ molecules, each sodium ion bonded to one particular chloride ion.',
      answer: false,
      explanation: 'An ionic solid is one continuous lattice: each $\\ce{Na+}$ is attracted equally to its six nearest $\\ce{Cl-}$ neighbors (and more weakly to all the others). No ion "belongs" to one partner. The formula $\\ce{NaCl}$ only records the 1 : 1 ratio — the formula unit.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Writing formulas: make the charges cancel',
      blocks: [
        {
          type: 'p',
          text: 'A crystal has no overall charge, so the total positive charge must equal the total negative charge. Writing a formula is just finding the smallest whole numbers of each ion that cancel. The cation is always written first.',
        },
        {
          type: 'theorem',
          name: 'Charge balance',
          tex: '(\\text{number of cations})\\times(\\text{cation charge}) + (\\text{number of anions})\\times(\\text{anion charge}) = 0',
        },
        {
          type: 'derivation',
          title: 'Formula of aluminum oxide',
          steps: [
            { tex: '\\ce{Al^3+} \\quad \\text{and} \\quad \\ce{O^2-}', why: 'Aluminum is in group 13 (loses 3); oxygen is in group 16 (gains 2).' },
            { tex: '\\operatorname{lcm}(3,\\,2) = 6', why: 'The total positive and negative charge must be equal, so look for the least common multiple of the two charge sizes.' },
            { tex: '2 \\times (+3) = +6, \\qquad 3 \\times (-2) = -6', why: 'Two aluminum ions supply $+6$; three oxide ions supply $-6$.' },
            { tex: '\\ce{Al2O3}', why: 'Write the counts as subscripts, cation first. Check: $+6 - 6 = 0$ ✓' },
          ],
          result: 'Aluminum oxide is $\\ce{Al2O3}$ — the protective film that keeps aluminum aircraft skins from corroding.',
        },
        {
          type: 'heading',
          text: 'The criss-cross shortcut, and why it works',
        },
        {
          type: 'p',
          text: 'Notice that the subscript of Al was the size of oxygen\'s charge, and vice versa. That always works: if the cation has charge $+a$ and the anion $-b$, then $b$ cations and $a$ anions give $b \\cdot a - a \\cdot b = 0$. Multiplication commutes, so crossing the charges over *guarantees* a neutral formula. The only extra step: reduce to the lowest ratio, because a formula unit is the *simplest* ratio of ions.',
        },
        {
          type: 'compare',
          left: {
            title: 'Criss-cross, not reduced',
            tone: 'bad',
            tex: ['\\ce{Mg^2+}\\ \\ce{O^2-} \\to \\ce{Mg2O2}'],
            text: 'Neutral, but not the simplest ratio.',
          },
          right: {
            title: 'Reduced to lowest terms',
            tone: 'good',
            tex: ['\\ce{Mg2O2} \\to \\ce{MgO}'],
            text: 'Divide both subscripts by 2. Ionic formulas are always in lowest terms.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Quick self-check',
          text: 'After writing any ionic formula, multiply out the charges: $\\ce{CaCl2}$ is $(+2) + 2(-1) = 0$ ✓. If the sum is not zero, a subscript is wrong. Subscripts of $1$ are never written.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'What is the formula of calcium nitride, made from calcium ($\\ce{Ca^2+}$) and nitride ($\\ce{N^3-}$) ions?',
      options: [
        { text: '$\\ce{CaN}$', why: 'One of each gives $+2 - 3 = -1$, not neutral. The charges are different sizes, so the counts cannot both be 1.' },
        { text: '$\\ce{Ca2N3}$', why: 'This copies each ion\'s *own* charge as its subscript: $2(+2) + 3(-3) = -5$. Criss-cross means swapping them.' },
        { text: '$\\ce{Ca3N2}$', correct: true, why: '$3(+2) + 2(-3) = 6 - 6 = 0$ ✓. The least common multiple of 2 and 3 is 6.' },
        { text: '$\\ce{CaN2}$', why: '$(+2) + 2(-3) = -4$. Not neutral.' },
      ],
      explanation: 'Criss-cross the charges: calcium\'s $2$ becomes nitrogen\'s subscript and nitrogen\'s $3$ becomes calcium\'s subscript, giving $\\ce{Ca3N2}$. The ratio $3 : 2$ is already in lowest terms. Check: $3 \\times 2 = 6$ positive charges, $2 \\times 3 = 6$ negative.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Polyatomic ions',
      blocks: [
        {
          type: 'p',
          text: 'Some ions are small molecules with a charge: a group of atoms held together by covalent bonds (shared electrons, next lesson) that has, as a whole, gained or lost electrons. These [[polyatomic-ion|polyatomic ions]] travel through reactions as single units, and you need to know the common ones by name, formula and charge.',
        },
        {
          type: 'table',
          headers: ['Name', 'Formula', 'Where you meet it'],
          rows: [
            ['ammonium', '$\\ce{NH4+}$', 'fertilizers, smelling salts'],
            ['hydroxide', '$\\ce{OH-}$', 'drain cleaner ($\\ce{NaOH}$), bases'],
            ['nitrate', '$\\ce{NO3-}$', 'fertilizers, food curing'],
            ['nitrite', '$\\ce{NO2-}$', 'cured meats'],
            ['acetate', '$\\ce{CH3COO-}$ (also $\\ce{C2H3O2-}$)', 'vinegar'],
            ['hydrogen carbonate (bicarbonate)', '$\\ce{HCO3-}$', 'baking soda, $\\ce{NaHCO3}$'],
            ['carbonate', '$\\ce{CO3^2-}$', 'limestone and chalk, $\\ce{CaCO3}$'],
            ['sulfate', '$\\ce{SO4^2-}$', 'car-battery acid, gypsum'],
            ['sulfite', '$\\ce{SO3^2-}$', 'wine preservative'],
            ['phosphate', '$\\ce{PO4^3-}$', 'bones, fertilizers'],
            ['hypochlorite', '$\\ce{ClO-}$', 'bleach and decontamination solutions'],
            ['cyanide', '$\\ce{CN-}$', 'gold mining (highly toxic)'],
          ],
          caption: 'Pattern: **-ate** and **-ite** ions contain oxygen, and the **-ite** ion has one fewer oxygen atom with the same charge (sulfate $\\ce{SO4^2-}$, sulfite $\\ce{SO3^2-}$).',
        },
        {
          type: 'p',
          text: 'Formulas work exactly as before: balance the charges. When you need **more than one** polyatomic ion, wrap it in parentheses so the subscript multiplies the whole group.',
        },
        {
          type: 'derivation',
          title: 'Formula of aluminum sulfate',
          steps: [
            { tex: '\\ce{Al^3+} \\quad \\text{and} \\quad \\ce{SO4^2-}', why: 'The sulfate ion is one unit with charge $2-$. Its internal subscript 4 is part of its identity and never changes.' },
            { tex: '2 \\times (+3) = +6, \\qquad 3 \\times (-2) = -6', why: 'Criss-cross: 2 aluminum ions and 3 sulfate ions. The lcm of 3 and 2 is 6.' },
            { tex: '\\ce{Al2(SO4)3}', why: 'Parentheses show that the 3 counts whole sulfate ions. $\\ce{Al2SO43}$ would be meaningless.' },
            { tex: '\\text{atoms: } 2\\ \\text{Al},\\ 3\\ \\text{S},\\ 3 \\times 4 = 12\\ \\text{O}', why: 'A subscript outside the parentheses multiplies every subscript inside — exactly like distributing in algebra.' },
          ],
          result: 'Aluminum sulfate is $\\ce{Al2(SO4)3}$: 2 aluminum ions and 3 sulfate ions per formula unit.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Hypochlorite and decontamination',
          text: 'Calcium hypochlorite, $\\ce{Ca(ClO)2}$, is the active ingredient in high-test bleach used for water purification and in classic military decontamination slurries. The formula follows the same rule: $\\ce{Ca^2+}$ needs two $\\ce{ClO-}$ ions, and the parentheses keep each $\\ce{ClO}$ unit together.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not "simplify" inside a polyatomic ion',
          text: 'Reduce only the ratio *between ions*. $\\ce{(NH4)2SO4}$ (ammonium sulfate) cannot become $\\ce{NH4SO2}$ — changing the 4 in $\\ce{SO4}$ changes the ion itself. Also, use parentheses only when there are two or more of the group: $\\ce{NaNO3}$, not $\\ce{Na(NO3)}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'How many oxygen atoms are there in one formula unit of calcium phosphate, $\\ce{Ca3(PO4)2}$?',
      hint: 'The subscript 2 outside the parentheses multiplies everything inside them.',
      label: 'O atoms $=$',
      answer: '8',
      explanation: 'Each phosphate ion $\\ce{PO4^3-}$ has 4 oxygen atoms, and there are 2 phosphate ions: $2 \\times 4 = 8$. (Charge check: $3(+2) + 2(-3) = 0$ ✓.) Calcium phosphate is the main mineral in bones and teeth.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student writes the formula for ammonium phosphate. Tap the first line that is wrong.',
      lines: [
        'Ions: ammonium $\\ce{NH4+}$ and phosphate $\\ce{PO4^3-}$.',
        'To cancel $3-$ we need three $1+$ ions: $3 \\times (+1) + 1 \\times (-3) = 0$.',
        'So the ratio is 3 ammonium : 1 phosphate.',
        'Formula: $\\ce{NH43PO4}$',
      ],
      errorLines: [4],
      explanation: 'Everything up to the ratio is right; the mistake is in writing it. More than one polyatomic ion needs parentheses: three ammonium ions are $\\ce{(NH4)3}$, so the formula is $\\ce{(NH4)3PO4}$. Written without parentheses, "$\\ce{NH43}$" reads as one nitrogen and 43 hydrogens.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Naming ionic compounds',
      blocks: [
        {
          type: 'p',
          text: 'Ionic names are simply **cation name + anion name**. No prefixes like "di-" or "tri-" — the charges already fix the ratio, so the name does not need to state it.',
        },
        {
          type: 'list',
          items: [
            '$\\ce{CaCl2}$ — calcium chloride (not "calcium dichloride")',
            '$\\ce{Na2SO4}$ — sodium sulfate',
            '$\\ce{NH4NO3}$ — ammonium nitrate',
            '$\\ce{Mg(OH)2}$ — magnesium hydroxide (milk of magnesia)',
          ],
        },
        {
          type: 'heading',
          text: 'Metals with more than one charge: Roman numerals',
        },
        {
          type: 'p',
          text: 'Most transition metals can form more than one cation. Iron forms $\\ce{Fe^2+}$ and $\\ce{Fe^3+}$, copper $\\ce{Cu+}$ and $\\ce{Cu^2+}$. "Iron chloride" would be ambiguous, so the name states the charge of the metal ion as a Roman numeral in parentheses: **iron(II) chloride** is $\\ce{FeCl2}$ and **iron(III) chloride** is $\\ce{FeCl3}$.',
        },
        {
          type: 'p',
          text: 'Going from formula to name, you work out the metal\'s charge from the anions, which have fixed charges.',
        },
        {
          type: 'derivation',
          title: 'Name $\\ce{Fe2O3}$ (rust)',
          steps: [
            { tex: '3 \\times (-2) = -6', why: 'Oxide is always $\\ce{O^2-}$, and there are three of them.' },
            { tex: '2 \\times (\\text{Fe charge}) = +6', why: 'The compound is neutral, so the two iron ions must supply $+6$ in total.' },
            { tex: '\\text{Fe charge} = +3 \\implies \\ce{Fe^3+}', why: 'Divide by the number of iron ions. Each one carries the same charge.' },
            { tex: '\\text{iron(III) oxide}', why: 'Metal name, Roman numeral for the charge, then the anion name. The numeral is the charge, **not** the subscript.' },
          ],
          result: 'Rust is mostly iron(III) oxide. (The subscript 2 on Fe is just what makes the charges cancel.)',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Which metals need a numeral',
          text: 'Use a Roman numeral for transition metals and for tin and lead ($\\ce{Sn^2+}$/$\\ce{Sn^4+}$, $\\ce{Pb^2+}$/$\\ce{Pb^4+}$). Do **not** use one for group 1, group 2, aluminum, zinc ($\\ce{Zn^2+}$ only) or silver ($\\ce{Ag+}$ only): it is just "zinc oxide" and "silver nitrate".',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Ferrous and ferric',
          text: 'Older names use **-ous** for the lower charge and **-ic** for the higher: ferrous ($\\ce{Fe^2+}$) and ferric ($\\ce{Fe^3+}$), cuprous ($\\ce{Cu+}$) and cupric ($\\ce{Cu^2+}$). You still see them on supplement labels ("ferrous sulfate"), but the Roman-numeral system (the Stock system) is unambiguous and standard.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Chromium forms several ions. In $\\ce{Cr2(SO4)3}$, what is the charge on each chromium ion? (Enter a number such as 2 for a 2+ ion.)',
      hint: 'Sulfate is $\\ce{SO4^2-}$. Find the total negative charge, then share it between the chromium ions.',
      label: 'charge $= +$',
      answer: '3',
      explanation: 'Three sulfate ions carry $3 \\times (-2) = -6$. Two chromium ions must supply $+6$, so each is $\\ce{Cr^3+}$. The name is **chromium(III) sulfate**.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'What is the correct name of $\\ce{CuCl2}$?',
      options: [
        { text: 'copper chloride', why: 'Ambiguous: copper forms both $\\ce{Cu+}$ and $\\ce{Cu^2+}$, so the name must state which.' },
        { text: 'copper dichloride', why: 'Prefixes like "di-" are for molecular compounds of two nonmetals, not ionic compounds.' },
        { text: 'copper(I) chloride', why: 'That would be $\\ce{CuCl}$. With two chloride ions ($-2$ total) the single copper ion must be $+2$.' },
        { text: 'copper(II) chloride', correct: true, why: 'Two $\\ce{Cl-}$ give $-2$, so the one copper ion is $\\ce{Cu^2+}$, written (II).' },
      ],
      explanation: 'Work backward from the anion: $2 \\times (-1) = -2$, so copper is $+2$. Name = metal + Roman numeral of its charge + anion: copper(II) chloride. The numeral reports the charge, which here happens to equal the chloride subscript — but that is not always true (iron(III) oxide is $\\ce{Fe2O3}$).',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Properties of ionic compounds',
      blocks: [
        {
          type: 'p',
          text: 'Every property of an ionic solid follows from one picture: a rigid lattice of ions, each held by strong attractions to all its neighbors.',
        },
        {
          type: 'table',
          headers: ['Compound', 'Ion charges', 'Melting point'],
          rows: [
            ['$\\ce{KCl}$', '$1+,\\ 1-$', '$770\\ ^\\circ\\text{C}$'],
            ['$\\ce{NaCl}$', '$1+,\\ 1-$', '$801\\ ^\\circ\\text{C}$'],
            ['$\\ce{CaF2}$', '$2+,\\ 1-$', '$1418\\ ^\\circ\\text{C}$'],
            ['$\\ce{Al2O3}$', '$3+,\\ 2-$', '$2072\\ ^\\circ\\text{C}$'],
            ['$\\ce{MgO}$', '$2+,\\ 2-$', 'about $2850\\ ^\\circ\\text{C}$'],
            ['sugar, $\\ce{C12H22O11}$ (not ionic)', 'none', 'decomposes near $186\\ ^\\circ\\text{C}$'],
          ],
          caption: 'Higher charges mean stronger attractions (Coulomb\'s law) and higher melting points. $\\ce{MgO}$ and $\\ce{Al2O3}$ line furnaces and jet-engine parts for this reason.',
        },
        {
          type: 'list',
          items: [
            '**High melting and boiling points.** Melting means pulling ions away from their neighbors, against strong electrostatic attraction in every direction.',
            '**Hard but brittle.** Ions resist being pushed together, but a sharp blow that shifts one layer by one ion lines up like charges, and the repulsion splits the crystal along a clean plane.',
            '**Conduct electricity only when molten or dissolved.** Current is moving charge. In the solid, ions are locked in place, so it is an insulator. Melt it or dissolve it and the ions are free to move.',
          ],
        },
        {
          type: 'figure',
          svg: FIG.brittle,
          alt: 'Two rows of alternating plus and minus ions with opposite charges stacked. After an orange arrow labeled shift by one ion, the top row is offset so plus sits above plus and minus above minus, marked with red repulsion lines.',
          caption: 'Shift a layer by one ion and attraction turns into repulsion. That is why salt crystals shatter instead of bending like metals.',
        },
        {
          type: 'math',
          tex: '\\ce{NaCl(s) ->[\\text{water}] Na+(aq) + Cl-(aq)}',
          caption: 'Dissolving frees the ions. $\\text{(aq)}$ means surrounded by water molecules. The mobile ions are why seawater conducts electricity and speeds up corrosion of ships and vehicles.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Electrolytes',
          text: 'A substance whose solution conducts electricity is an **electrolyte**. Your nerves signal with $\\ce{Na+}$ and $\\ce{K+}$ ions moving across cell membranes — which is why sports drinks and oral rehydration salts in a field medical kit are mostly dissolved ionic compounds.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'Which of these conducts electricity?',
      options: [
        { text: 'Solid sodium chloride', why: 'The ions are present but locked in the lattice. No moving charge, no current.' },
        { text: 'Molten (melted) sodium chloride', correct: true, why: 'In the liquid the $\\ce{Na+}$ and $\\ce{Cl-}$ ions can move, carrying current. This is how sodium metal is produced industrially.' },
        { text: 'Solid sugar', why: 'Sugar is made of neutral molecules, not ions, and in the solid nothing moves.' },
        { text: 'Sugar dissolved in pure water', why: 'Dissolved sugar molecules spread out but stay neutral — no ions are produced, so the solution does not conduct.' },
      ],
      explanation: 'Conduction needs charged particles that are free to move. Ionic compounds have the charges; melting or dissolving gives the freedom. Molecular substances like sugar have neither in any state.',
    },
    // ------------------------------------------------------------------ 18
    {
      kind: 'order',
      prompt: 'Put the steps for writing the formula of iron(III) sulfate in order.',
      lines: [
        'Read the ions from the name: $\\ce{Fe^3+}$ (from the numeral III) and $\\ce{SO4^2-}$',
        'Find the least common multiple of the charge sizes: $\\operatorname{lcm}(3, 2) = 6$',
        'Use 2 iron ions $(+6)$ and 3 sulfate ions $(-6)$',
        'Write $\\ce{Fe2(SO4)3}$, with parentheses around the polyatomic ion',
      ],
      distractors: ['Write $\\ce{Fe3SO4}$, using the Roman numeral as the subscript'],
      explanation: 'The Roman numeral gives the **charge** of iron, not a subscript. From the charges, balance the totals ($2 \\times 3 = 3 \\times 2 = 6$), then write the counts as subscripts with parentheses around the sulfate group: $\\ce{Fe2(SO4)3}$.',
    },
  ],
  takeaways: [
    'Atoms gain or lose electrons to reach a noble-gas arrangement (usually an octet): metals lose electrons to form cations, nonmetals gain them to form anions.',
    'Main-group ion charges follow the group: 1+, 2+, 3+ for groups 1, 2, 13; 3−, 2−, 1− for groups 15, 16, 17. Transition metals often have several charges.',
    'An ionic bond is electrostatic attraction ($F \\propto q_1 q_2 / r^2$) throughout a crystal lattice; the formula gives the simplest ion ratio (formula unit), not a molecule.',
    'Formulas balance total charge to zero; criss-crossing charges always works because $b \\cdot a = a \\cdot b$, then reduce to lowest terms and parenthesize multiple polyatomic ions.',
    'Names are cation + anion with no prefixes; a Roman numeral gives the charge of a variable-charge metal, found from the anions\' fixed charges.',
    'Ionic solids have high melting points, are hard but brittle, and conduct only when molten or dissolved, when the ions can move.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 2: Atoms, Molecules, and Ions',
      url: 'https://openstax.org/books/chemistry-2e/pages/2-introduction',
      source: 'openstax',
      note: 'Sections 2.6 and 2.7 cover ionic compounds, polyatomic ions and naming with many more practice formulas.',
    },
    {
      title: 'OpenStax Chemistry 2e — Chapter 7: Chemical Bonding and Molecular Geometry',
      url: 'https://openstax.org/books/chemistry-2e/pages/7-introduction',
      source: 'openstax',
      note: 'Section 7.1 treats ionic bonding and the energy of forming ions in more depth.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'Short videos on ionic bonds, naming ionic compounds and polyatomic ions.',
    },
    {
      title: 'Ptable — interactive periodic table',
      url: 'https://ptable.com/',
      source: 'other',
      note: 'Switch to the "Ions" or "Oxidation" view to see the common charges of every element.',
    },
  ],
};
