import type { Lesson } from '../../types';

const FIG_DISPERSION = `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="120" cy="95" rx="70" ry="42" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="104" cy="95" rx="52" ry="34" fill="currentColor" class="f-blue" fill-opacity="0.25"/><circle cx="120" cy="95" r="5" fill="currentColor"/><text x="70" y="101" text-anchor="middle" font-size="16" class="t-blue">δ−</text><text x="170" y="101" text-anchor="middle" font-size="16" class="t-red">δ+</text><text x="120" y="161" text-anchor="middle" font-size="13">instantaneous dipole</text><ellipse cx="390" cy="95" rx="70" ry="42" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="374" cy="95" rx="52" ry="34" fill="currentColor" class="f-blue" fill-opacity="0.25"/><circle cx="390" cy="95" r="5" fill="currentColor"/><text x="340" y="101" text-anchor="middle" font-size="16" class="t-blue">δ−</text><text x="440" y="101" text-anchor="middle" font-size="16" class="t-red">δ+</text><text x="390" y="161" text-anchor="middle" font-size="13">induced dipole</text><line x1="200" y1="95" x2="300" y2="95" stroke="currentColor" class="s-purple" stroke-width="2" stroke-dasharray="5 4"/><text x="250" y="85" text-anchor="middle" font-size="12" class="t-purple">attraction</text><text x="260" y="22" text-anchor="middle" font-size="13">electrons drift left in molecule 1 → its δ+ end attracts</text><text x="260" y="40" text-anchor="middle" font-size="13">the electrons of molecule 2, inducing a matching dipole</text><text x="260" y="192" text-anchor="middle" font-size="12" class="t-gray">shaded = electron cloud (shifted); dot = nuclei</text></svg>`;
const FIG_DIPOLES = `<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg"><text x="120" y="20" text-anchor="middle" font-size="14">dipole–dipole (HCl)</text><line x1="25" y1="75" x2="55" y2="75" stroke="currentColor" stroke-width="2.5"/><circle cx="25" cy="75" r="9" fill="currentColor" class="f-gray"/><circle cx="59" cy="75" r="16" fill="currentColor" class="f-green"/><text x="25" y="59" text-anchor="middle" font-size="12" class="t-red">δ+</text><text x="59" y="53" text-anchor="middle" font-size="12" class="t-blue">δ−</text><line x1="105" y1="75" x2="135" y2="75" stroke="currentColor" stroke-width="2.5"/><circle cx="105" cy="75" r="9" fill="currentColor" class="f-gray"/><circle cx="139" cy="75" r="16" fill="currentColor" class="f-green"/><text x="105" y="59" text-anchor="middle" font-size="12" class="t-red">δ+</text><text x="139" y="53" text-anchor="middle" font-size="12" class="t-blue">δ−</text><line x1="185" y1="75" x2="215" y2="75" stroke="currentColor" stroke-width="2.5"/><circle cx="185" cy="75" r="9" fill="currentColor" class="f-gray"/><circle cx="219" cy="75" r="16" fill="currentColor" class="f-green"/><text x="185" y="59" text-anchor="middle" font-size="12" class="t-red">δ+</text><text x="219" y="53" text-anchor="middle" font-size="12" class="t-blue">δ−</text><line x1="65" y1="150" x2="95" y2="150" stroke="currentColor" stroke-width="2.5"/><circle cx="65" cy="150" r="9" fill="currentColor" class="f-gray"/><circle cx="99" cy="150" r="16" fill="currentColor" class="f-green"/><text x="65" y="134" text-anchor="middle" font-size="12" class="t-red">δ+</text><text x="99" y="128" text-anchor="middle" font-size="12" class="t-blue">δ−</text><line x1="145" y1="150" x2="175" y2="150" stroke="currentColor" stroke-width="2.5"/><circle cx="145" cy="150" r="9" fill="currentColor" class="f-gray"/><circle cx="179" cy="150" r="16" fill="currentColor" class="f-green"/><text x="145" y="134" text-anchor="middle" font-size="12" class="t-red">δ+</text><text x="179" y="128" text-anchor="middle" font-size="12" class="t-blue">δ−</text><line x1="77" y1="75" x2="87" y2="75" stroke="currentColor" class="s-purple" stroke-width="2" stroke-dasharray="2 2"/><line x1="157" y1="75" x2="167" y2="75" stroke="currentColor" class="s-purple" stroke-width="2" stroke-dasharray="2 2"/><line x1="117" y1="150" x2="134" y2="150" stroke="currentColor" class="s-purple" stroke-width="2" stroke-dasharray="2 2"/><text x="120" y="198" text-anchor="middle" font-size="12">δ+ end of one near δ− end of the next</text><text x="390" y="20" text-anchor="middle" font-size="14">hydrogen bond (H₂O)</text><line x1="300" y1="110" x2="336" y2="110" stroke="currentColor" stroke-width="3"/><line x1="300" y1="110" x2="290" y2="74" stroke="currentColor" stroke-width="3"/><circle cx="300" cy="110" r="15" fill="currentColor" class="f-red"/><circle cx="338" cy="110" r="9" fill="currentColor" class="f-gray"/><circle cx="290" cy="72" r="9" fill="currentColor" class="f-gray"/><line x1="348" y1="110" x2="396" y2="110" stroke="currentColor" class="s-blue" stroke-width="2.5" stroke-dasharray="3 3"/><circle cx="410" cy="110" r="15" fill="currentColor" class="f-red"/><line x1="410" y1="110" x2="436" y2="84" stroke="currentColor" stroke-width="3"/><line x1="410" y1="110" x2="436" y2="136" stroke="currentColor" stroke-width="3"/><circle cx="438" cy="82" r="9" fill="currentColor" class="f-gray"/><circle cx="438" cy="138" r="9" fill="currentColor" class="f-gray"/><text x="318" y="138" text-anchor="middle" font-size="11">O–H</text><text x="318" y="152" text-anchor="middle" font-size="11">96 pm</text><text x="372" y="96" text-anchor="middle" font-size="11" class="t-blue">H···O</text><text x="372" y="138" text-anchor="middle" font-size="11" class="t-blue">≈ 180 pm</text><text x="300" y="168" text-anchor="middle" font-size="11">donor</text><text x="410" y="168" text-anchor="middle" font-size="11">acceptor (lone pair)</text><text x="390" y="198" text-anchor="middle" font-size="12">O–H···O nearly in a straight line</text></svg>`;
const FIG_ION_DIPOLE = `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><line x1="183.69357503463522" y1="141.0" x2="187.2" y2="166.8" stroke="currentColor" stroke-width="2"/><line x1="183.69357503463522" y1="141.0" x2="207.8" y2="131.2" stroke="currentColor" stroke-width="2"/><circle cx="183.69357503463522" cy="141.0" r="11" fill="currentColor" class="f-red"/><circle cx="187.2" cy="166.8" r="7" fill="currentColor" class="f-gray"/><circle cx="207.8" cy="131.2" r="7" fill="currentColor" class="f-gray"/><line x1="130.0" y1="172.0" x2="109.5" y2="188.0" stroke="currentColor" stroke-width="2"/><line x1="130.0" y1="172.0" x2="150.5" y2="188.0" stroke="currentColor" stroke-width="2"/><circle cx="130.0" cy="172.0" r="11" fill="currentColor" class="f-red"/><circle cx="109.5" cy="188.0" r="7" fill="currentColor" class="f-gray"/><circle cx="150.5" cy="188.0" r="7" fill="currentColor" class="f-gray"/><line x1="76.3064249653648" y1="141.0" x2="52.2" y2="131.2" stroke="currentColor" stroke-width="2"/><line x1="76.3064249653648" y1="141.0" x2="72.8" y2="166.8" stroke="currentColor" stroke-width="2"/><circle cx="76.3064249653648" cy="141.0" r="11" fill="currentColor" class="f-red"/><circle cx="52.2" cy="131.2" r="7" fill="currentColor" class="f-gray"/><circle cx="72.8" cy="166.8" r="7" fill="currentColor" class="f-gray"/><line x1="76.30642496536481" y1="79.0" x2="72.8" y2="53.2" stroke="currentColor" stroke-width="2"/><line x1="76.30642496536481" y1="79.0" x2="52.2" y2="88.8" stroke="currentColor" stroke-width="2"/><circle cx="76.30642496536481" cy="79.0" r="11" fill="currentColor" class="f-red"/><circle cx="72.8" cy="53.2" r="7" fill="currentColor" class="f-gray"/><circle cx="52.2" cy="88.8" r="7" fill="currentColor" class="f-gray"/><line x1="130.0" y1="48.0" x2="150.5" y2="32.0" stroke="currentColor" stroke-width="2"/><line x1="130.0" y1="48.0" x2="109.5" y2="32.0" stroke="currentColor" stroke-width="2"/><circle cx="130.0" cy="48.0" r="11" fill="currentColor" class="f-red"/><circle cx="150.5" cy="32.0" r="7" fill="currentColor" class="f-gray"/><circle cx="109.5" cy="32.0" r="7" fill="currentColor" class="f-gray"/><line x1="183.6935750346352" y1="78.99999999999997" x2="207.8" y2="88.8" stroke="currentColor" stroke-width="2"/><line x1="183.6935750346352" y1="78.99999999999997" x2="187.2" y2="53.2" stroke="currentColor" stroke-width="2"/><circle cx="183.6935750346352" cy="78.99999999999997" r="11" fill="currentColor" class="f-red"/><circle cx="207.8" cy="88.8" r="7" fill="currentColor" class="f-gray"/><circle cx="187.2" cy="53.2" r="7" fill="currentColor" class="f-gray"/><circle cx="130" cy="110" r="22" fill="currentColor" class="f-purple"/><text x="130" y="116" text-anchor="middle" font-size="16" fill="#fff">Na⁺</text><text x="130" y="222" text-anchor="middle" font-size="13">O (δ−) ends face the cation</text><line x1="460.0" y1="110.0" x2="434.0" y2="110.0" stroke="currentColor" stroke-width="2"/><line x1="460.0" y1="110.0" x2="466.4" y2="135.2" stroke="currentColor" stroke-width="2"/><circle cx="460.0" cy="110.0" r="11" fill="currentColor" class="f-red"/><circle cx="434.0" cy="110.0" r="7" fill="currentColor" class="f-gray"/><circle cx="466.4" cy="135.2" r="7" fill="currentColor" class="f-gray"/><line x1="425.0" y1="170.6" x2="412.0" y2="148.1" stroke="currentColor" stroke-width="2"/><line x1="425.0" y1="170.6" x2="406.4" y2="188.8" stroke="currentColor" stroke-width="2"/><circle cx="425.0" cy="170.6" r="11" fill="currentColor" class="f-red"/><circle cx="412.0" cy="148.1" r="7" fill="currentColor" class="f-gray"/><circle cx="406.4" cy="188.8" r="7" fill="currentColor" class="f-gray"/><line x1="355.0" y1="170.6" x2="368.0" y2="148.1" stroke="currentColor" stroke-width="2"/><line x1="355.0" y1="170.6" x2="330.0" y2="163.6" stroke="currentColor" stroke-width="2"/><circle cx="355.0" cy="170.6" r="11" fill="currentColor" class="f-red"/><circle cx="368.0" cy="148.1" r="7" fill="currentColor" class="f-gray"/><circle cx="330.0" cy="163.6" r="7" fill="currentColor" class="f-gray"/><line x1="320.0" y1="110.0" x2="346.0" y2="110.0" stroke="currentColor" stroke-width="2"/><line x1="320.0" y1="110.0" x2="313.6" y2="84.8" stroke="currentColor" stroke-width="2"/><circle cx="320.0" cy="110.0" r="11" fill="currentColor" class="f-red"/><circle cx="346.0" cy="110.0" r="7" fill="currentColor" class="f-gray"/><circle cx="313.6" cy="84.8" r="7" fill="currentColor" class="f-gray"/><line x1="355.0" y1="49.4" x2="368.0" y2="71.9" stroke="currentColor" stroke-width="2"/><line x1="355.0" y1="49.4" x2="373.6" y2="31.2" stroke="currentColor" stroke-width="2"/><circle cx="355.0" cy="49.4" r="11" fill="currentColor" class="f-red"/><circle cx="368.0" cy="71.9" r="7" fill="currentColor" class="f-gray"/><circle cx="373.6" cy="31.2" r="7" fill="currentColor" class="f-gray"/><line x1="425.0" y1="49.4" x2="412.0" y2="71.9" stroke="currentColor" stroke-width="2"/><line x1="425.0" y1="49.4" x2="450.0" y2="56.4" stroke="currentColor" stroke-width="2"/><circle cx="425.0" cy="49.4" r="11" fill="currentColor" class="f-red"/><circle cx="412.0" cy="71.9" r="7" fill="currentColor" class="f-gray"/><circle cx="450.0" cy="56.4" r="7" fill="currentColor" class="f-gray"/><circle cx="390" cy="110" r="30" fill="currentColor" class="f-green"/><text x="390" y="116" text-anchor="middle" font-size="16" fill="#fff">Cl⁻</text><text x="390" y="222" text-anchor="middle" font-size="13">one H (δ+) of each points at the anion</text></svg>`;
const FIG_MENISCI = `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="150" width="90" height="50" fill="currentColor" class="f-blue" fill-opacity="0.3"/><rect x="150" y="150" width="90" height="50" fill="currentColor" class="f-blue" fill-opacity="0.3"/><rect x="130" y="190" width="20" height="10" fill="currentColor" class="f-blue" fill-opacity="0.3"/><polyline points="40,120 40,200 240,200 240,120" fill="none" stroke="currentColor" stroke-width="2"/><path d="M130 90 Q140 104 150 90 L150 190 L130 190 Z" fill="currentColor" class="f-blue" fill-opacity="0.3"/><line x1="130" y1="40" x2="130" y2="190" stroke="currentColor" stroke-width="2"/><line x1="150" y1="40" x2="150" y2="190" stroke="currentColor" stroke-width="2"/><text x="140" y="222" text-anchor="middle" font-size="13">water in glass</text><rect x="280" y="150" width="90" height="50" fill="currentColor" class="f-gray" fill-opacity="0.55"/><rect x="390" y="150" width="90" height="50" fill="currentColor" class="f-gray" fill-opacity="0.55"/><rect x="370" y="190" width="20" height="10" fill="currentColor" class="f-gray" fill-opacity="0.55"/><polyline points="280,120 280,200 480,200 480,120" fill="none" stroke="currentColor" stroke-width="2"/><path d="M370 180 Q380 166 390 180 L390 190 L370 190 Z" fill="currentColor" class="f-gray" fill-opacity="0.55"/><line x1="370" y1="40" x2="370" y2="190" stroke="currentColor" stroke-width="2"/><line x1="390" y1="40" x2="390" y2="190" stroke="currentColor" stroke-width="2"/><text x="380" y="222" text-anchor="middle" font-size="13">mercury in glass</text><text x="140" y="30" text-anchor="middle" font-size="12" class="t-blue">concave, rises</text><text x="380" y="30" text-anchor="middle" font-size="12">convex, sinks</text><text x="60" y="80" text-anchor="middle" font-size="11">adhesion</text><text x="60" y="94" text-anchor="middle" font-size="11">&gt; cohesion</text><text x="460" y="80" text-anchor="middle" font-size="11">cohesion</text><text x="460" y="94" text-anchor="middle" font-size="11">&gt; adhesion</text></svg>`;
const FIG_VP_EQ = `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="40" width="220" height="160" fill="none" stroke="currentColor" stroke-width="2"/><rect x="22" y="140" width="216" height="58" fill="currentColor" class="f-blue" fill-opacity="0.25"/><line x1="20" y1="140" x2="240" y2="140" stroke="currentColor" class="s-blue" stroke-width="1.5"/><circle cx="34" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="53" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="72" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="91" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="110" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="129" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="148" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="167" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="186" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="205" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="224" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="40" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="59" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="78" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="97" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="116" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="135" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="154" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="173" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="192" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="211" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="230" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="34" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="53" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="72" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="91" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="110" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="129" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="148" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="167" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="186" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="205" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="224" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="153" cy="103" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="186" cy="116" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><line x1="80" y1="135" x2="80" y2="105" stroke="currentColor" class="s-red" stroke-width="2.5"/><path d="M80 98 L74 108 L86 108 Z" fill="currentColor" class="f-red"/><line x1="180" y1="118" x2="180" y2="133" stroke="currentColor" class="s-purple" stroke-width="1.5"/><path d="M180 138 L176 131 L184 131 Z" fill="currentColor" class="f-purple"/><text x="130" y="28" text-anchor="middle" font-size="14">just sealed</text><text x="130" y="222" text-anchor="middle" font-size="12">evaporation > condensation</text><rect x="280" y="40" width="220" height="160" fill="none" stroke="currentColor" stroke-width="2"/><rect x="282" y="140" width="216" height="58" fill="currentColor" class="f-blue" fill-opacity="0.25"/><line x1="280" y1="140" x2="500" y2="140" stroke="currentColor" class="s-blue" stroke-width="1.5"/><circle cx="294" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="313" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="332" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="351" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="370" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="389" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="408" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="427" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="446" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="465" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="484" cy="152" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="300" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="319" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="338" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="357" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="376" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="395" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="414" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="433" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="452" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="471" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="490" cy="168" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="294" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="313" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="332" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="351" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="370" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="389" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="408" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="427" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="446" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="465" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="484" cy="184" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="436" cy="115" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="301" cy="85" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="474" cy="97" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="466" cy="62" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="384" cy="71" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="398" cy="92" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="348" cy="115" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="440" cy="65" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><circle cx="412" cy="63" r="6" fill="currentColor" class="f-blue" fill-opacity="0.8"/><line x1="340" y1="135" x2="340" y2="105" stroke="currentColor" class="s-red" stroke-width="2.5"/><path d="M340 98 L334 108 L346 108 Z" fill="currentColor" class="f-red"/><line x1="440" y1="100" x2="440" y2="130" stroke="currentColor" class="s-purple" stroke-width="2.5"/><path d="M440 137 L434 127 L446 127 Z" fill="currentColor" class="f-purple"/><text x="390" y="28" text-anchor="middle" font-size="14">equilibrium</text><text x="390" y="222" text-anchor="middle" font-size="12">evaporation = condensation</text><text x="260" y="238" text-anchor="middle" font-size="11" class="t-gray">red: evaporation (same rate in both) · purple: condensation (grows)</text></svg>`;

export const lesson: Lesson = {
  id: 'gchem-liquids-vapor-pressure',
  title: 'Intermolecular Forces, Liquids and Vapor Pressure',
  summary: 'The forces between molecules in depth, how they shape surface tension, viscosity and boiling, and the Clausius–Clapeyron equation that links vapor pressure to temperature.',
  minutes: 22,
  objectives: [
    'Explain dispersion, dipole–dipole, hydrogen-bonding and ion–dipole forces and rank substances by intermolecular force strength',
    'Relate surface tension, viscosity and capillary action to intermolecular forces',
    'Describe vapor pressure as a dynamic equilibrium and explain how boiling point depends on external pressure',
    'Derive and use the Clausius–Clapeyron equation, including the two-point form and the $\\ln P$ vs $1/T$ plot',
    'Calculate the energy for each segment of a heating curve using specific heats, $\\Delta H_{\\text{fus}}$ and $\\Delta H_{\\text{vap}}$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Dispersion forces and polarizability',
      blocks: [
        {
          type: 'p',
          text: 'Foundations introduced the three [[intermolecular-forces|intermolecular forces]] (IMFs) by name. All of them are electrostatic: partial or full charges on one particle attracting opposite charges on another, by [[chem-coulombs-law|Coulomb\'s law]]. They differ in **how big** the charges are and **how fast** the attraction fades with distance.',
        },
        {
          type: 'table',
          headers: ['Interaction', 'Between', 'Energy falls as', 'Typical strength (kJ/mol)'],
          rows: [
            ['ion–ion (ionic bond)', 'ions', '$1/r$', '$400$–$4000$ (lattice)'],
            ['ion–dipole', 'ion and polar molecule', '$1/r^2$', '$40$–$600$'],
            ['hydrogen bond', 'H on N, O, F and a lone pair on N, O, F', 'short range', '$10$–$40$'],
            ['dipole–dipole', 'polar molecules', '$1/r^3$ (fixed), $1/r^6$ (tumbling)', '$5$–$25$'],
            ['London dispersion', 'all molecules', '$1/r^6$', '$0.05$–$40$'],
          ],
          caption: 'Rough ranges, for orientation. A covalent bond, for comparison, is about $150$–$1000\\ \\text{kJ/mol}$.',
        },
        {
          type: 'p',
          text: '[[gchem-dispersion-force|London dispersion forces]] act between **every** pair of molecules, polar or not. The electron cloud is never perfectly still: for an instant it bunches up on one side, making a temporary dipole. That dipole distorts the cloud of a neighbor, inducing a dipole that points the same way, and the two attract.',
        },
        {
          type: 'figure',
          svg: FIG_DISPERSION,
          alt: 'Two oval molecules side by side. In each, the shaded electron cloud is shifted to the left, making the left end delta minus and the right end delta plus. A dashed line labeled attraction joins the delta plus end of the first molecule to the delta minus end of the second. Labels: instantaneous dipole, induced dipole.',
          caption: 'The induced dipole always lines up so as to attract. The dipoles flicker on and off, but their attractions never average to zero.',
        },
        {
          type: 'p',
          text: 'How strongly a cloud can be distorted is its [[gchem-polarizability|polarizability]]. Big, electron-rich clouds held loosely far from the nucleus are the most polarizable, which is why dispersion forces grow with molar mass (the halogens, $\\ce{F2}$ gas to $\\ce{I2}$ solid, from Foundations). **Shape** matters too, because dispersion needs contact.',
        },
        {
          type: 'table',
          headers: ['Isomer of $\\ce{C5H12}$', 'Shape', 'Boiling point'],
          rows: [
            ['$n$-pentane, $\\ce{CH3CH2CH2CH2CH3}$', 'long chain, large contact area', '$36.1\\ ^\\circ\\text{C}$'],
            ['neopentane, $\\ce{C(CH3)4}$', 'compact ball, small contact area', '$9.5\\ ^\\circ\\text{C}$'],
          ],
          caption: 'Same formula, same electrons, same molar mass ($72.15\\ \\text{g/mol}$). Chains lie alongside each other like pencils in a box; balls touch at a point.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "weak" dispersion forces can win',
          text: 'Each dispersion contact is weak, but there is one for every patch of surface touching a neighbor. A large molecule has many such patches, so its total dispersion attraction can exceed the dipole–dipole attraction of a small polar molecule. Octane, nonpolar, is a liquid boiling at $126\\ ^\\circ\\text{C}$; polar but small $\\ce{HCl}$ boils at $-85\\ ^\\circ\\text{C}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which of these hydrocarbons has the **highest** boiling point?',
      options: [
        { text: 'Methane, $\\ce{CH4}$', why: 'With only 10 electrons, methane has the weakest dispersion forces here. It boils at $-162\\ ^\\circ\\text{C}$.' },
        { text: 'Neopentane, $\\ce{C(CH3)4}$', why: 'It has 42 electrons, but its compact ball shape limits contact between molecules: bp $9.5\\ ^\\circ\\text{C}$.' },
        { text: '$n$-Hexane, $\\ce{CH3(CH2)4CH3}$', correct: true, why: 'The largest molecule (50 electrons) and a long chain with lots of contact area: the strongest dispersion forces. It boils at $69\\ ^\\circ\\text{C}$.' },
        { text: 'They are all nonpolar, so their boiling points are about the same', why: 'Nonpolar molecules still differ enormously in dispersion forces, which depend on size and shape. These boiling points span more than $200\\ ^\\circ\\text{C}$.' },
      ],
      explanation: 'All three are nonpolar, so only dispersion forces act, and dispersion grows with the number of electrons (polarizability) and with contact area. $n$-Hexane wins on both counts. Boiling points: methane $-162$, neopentane $9.5$, $n$-hexane $69\\ ^\\circ\\text{C}$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Dipoles, hydrogen bonds and ions',
      blocks: [
        {
          type: 'p',
          text: '**Dipole–dipole forces.** A [[polar-molecule|polar molecule]] carries a permanent dipole, so neighbors tend to line up head-to-tail, $\\delta+$ next to $\\delta-$. In a liquid they tumble constantly, which weakens the average attraction, but it adds to the dispersion forces every molecule already has.',
        },
        {
          type: 'p',
          text: '**Hydrogen bonds.** When H is bonded to N, O or F, the bond is so polar that the hydrogen is nearly a bare proton. That tiny, concentrated $\\delta+$ sits very close to a lone pair on a neighboring N, O or F. A [[gchem-hydrogen-bond|hydrogen bond]] needs a **donor** (an N–H, O–H or F–H) and an **acceptor** (a lone pair on N, O or F).',
        },
        {
          type: 'figure',
          svg: FIG_DIPOLES,
          alt: 'Left: five HCl molecules, gray H marked delta plus and green Cl marked delta minus, arranged so each delta plus H sits near the delta minus Cl of a neighbor, with dotted attractions. Right: two water molecules; an O–H of the donor points straight at the oxygen of the acceptor. The covalent O–H is labeled 96 pm, the hydrogen bond H to O about 180 pm.',
          caption: 'The hydrogen bond is nearly twice as long as the covalent O–H bond and far weaker, but it is the strongest attraction most neutral molecules can make, and it is directional: O–H···O prefers a straight line.',
        },
        {
          type: 'graph',
          x: [1.6, 5.4],
          y: [-180, 120],
          xStep: 1,
          yStep: 30,
          segments: [
            { from: [2, -161.5], to: [3, -111.9], color: 'gray' }, { from: [3, -111.9], to: [4, -88.5], color: 'gray' }, { from: [4, -88.5], to: [5, -52], color: 'gray' },
            { from: [2, -33.3], to: [3, -87.7], color: 'green' }, { from: [3, -87.7], to: [4, -62.5], color: 'green' }, { from: [4, -62.5], to: [5, -17], color: 'green' },
            { from: [2, 100], to: [3, -60.3], color: 'blue' }, { from: [3, -60.3], to: [4, -41.3], color: 'blue' }, { from: [4, -41.3], to: [5, -2.2], color: 'blue' },
            { from: [2, 19.5], to: [3, -85.1], color: 'purple' }, { from: [3, -85.1], to: [4, -66.8], color: 'purple' }, { from: [4, -66.8], to: [5, -35.4], color: 'purple' },
          ],
          points: [
            { x: 2, y: -161.5, label: 'CH₄', color: 'gray' }, { x: 3, y: -111.9, color: 'gray' }, { x: 4, y: -88.5, color: 'gray' }, { x: 5, y: -52, color: 'gray' },
            { x: 2, y: -33.3, label: 'NH₃', color: 'green' }, { x: 3, y: -87.7, color: 'green' }, { x: 4, y: -62.5, color: 'green' }, { x: 5, y: -17, color: 'green' },
            { x: 2, y: 100, label: 'H₂O', color: 'blue' }, { x: 3, y: -60.3, color: 'blue' }, { x: 4, y: -41.3, color: 'blue' }, { x: 5, y: -2.2, color: 'blue' },
            { x: 2, y: 19.5, label: 'HF', color: 'purple' }, { x: 3, y: -85.1, color: 'purple' }, { x: 4, y: -66.8, color: 'purple' }, { x: 5, y: -35.4, color: 'purple' },
          ],
          caption: 'Boiling points (°C) of the hydrides of groups 14 (gray: $\\ce{CH4}$, $\\ce{SiH4}$, $\\ce{GeH4}$, $\\ce{SnH4}$), 15 (green), 16 (blue) and 17 (purple) against period 2–5. Going up each group the boiling point falls as molecules get smaller, except in period 2, where $\\ce{H2O}$, $\\ce{HF}$ and $\\ce{NH3}$ jump up: hydrogen bonding. Extrapolating the blue line, water "should" boil near $-80\\ ^\\circ\\text{C}$.',
        },
        {
          type: 'p',
          text: '**Ion–dipole forces.** When an ionic compound dissolves in water, each ion is surrounded by a shell of water molecules turned to present their opposite partial charge. These attractions are strong enough to pay for breaking up the crystal, which is why water dissolves so many salts (the solutions unit builds on this).',
        },
        {
          type: 'figure',
          svg: FIG_ION_DIPOLE,
          alt: 'Left: a purple sodium ion surrounded by six water molecules, each with its red oxygen pointing toward the ion. Right: a larger green chloride ion surrounded by six water molecules, each with one gray hydrogen pointing at the ion.',
          caption: 'Hydration shells: the $\\delta-$ oxygen faces a cation; a $\\delta+$ hydrogen faces an anion.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: '$\\ce{HCl}$ is more polar than $\\ce{HI}$, so $\\ce{HCl}$ has the stronger intermolecular forces and the higher boiling point.',
      answer: false,
      explanation: '$\\ce{HCl}$ is indeed more polar, but $\\ce{HI}$ has 54 electrons to $\\ce{HCl}$\'s 18, and its large iodine cloud is far more polarizable. The extra dispersion attraction outweighs the smaller dipole: $\\ce{HI}$ boils at $-35\\ ^\\circ\\text{C}$, $\\ce{HCl}$ at $-85\\ ^\\circ\\text{C}$ (the purple line on the graph). Dipole–dipole forces only decide comparisons between molecules of **similar size**.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'A strategy for ranking',
      blocks: [
        {
          type: 'p',
          text: 'Stronger IMFs mean a higher boiling point, higher melting point, higher viscosity and surface tension, a larger $\\Delta H_{\\text{vap}}$ and a **lower** vapor pressure. To rank substances, work through these questions in order.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Ions present?', text: 'Ionic compounds (and metals) are held by much stronger forces than any molecular substance: they come first.' },
            { title: 'Hydrogen bonding?', text: 'Look for H directly bonded to N, O or F. More donor groups per molecule means more hydrogen bonds.' },
            { title: 'Polar?', text: 'Use the shape (VSEPR) and bond polarities to decide whether there is a net dipole.' },
            { title: 'Compare size and shape', text: 'Within a class, or when molar masses differ a lot, dispersion decides: more electrons and more surface area win.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Rank three molecules of nearly equal mass',
          steps: [
            { tex: '\\ce{CH3CH2CH3}\\ (44.1),\\ \\ce{CH3OCH3}\\ (46.1),\\ \\ce{CH3CH2OH}\\ (46.1)', why: 'Propane, dimethyl ether and ethanol: similar molar masses, so dispersion forces are similar and the other forces decide.' },
            { tex: '\\ce{CH3CH2CH3}: \\text{nonpolar, dispersion only}', why: 'C–H bonds are nearly nonpolar and arranged symmetrically enough to give little net dipole.' },
            { tex: '\\ce{CH3OCH3}: \\text{polar (bent C–O–C), no O–H}', why: 'Dipole–dipole forces add to dispersion. The O has lone pairs, but with no H on O or N there is no donor, so no hydrogen bonds between ether molecules.' },
            { tex: '\\ce{CH3CH2OH}: \\text{O–H donor and acceptor}', why: 'Hydrogen bonding on top of dipole–dipole and dispersion.' },
            { tex: '\\text{bp: } -42\\ ^\\circ\\text{C} < -24\\ ^\\circ\\text{C} < 78\\ ^\\circ\\text{C}', why: 'The measured boiling points follow the predicted order, with a large jump for hydrogen bonding.' },
          ],
          result: 'Same mass, three very different liquids: one O–H group is worth about $100\\ ^\\circ\\text{C}$ of boiling point.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Polarity is not everything',
          text: 'Nonpolar $\\ce{CCl4}$ (bp $77\\ ^\\circ\\text{C}$) boils higher than polar $\\ce{CH2Cl2}$ (bp $40\\ ^\\circ\\text{C}$): two extra chlorine atoms add 32 electrons of dispersion. Apply "polar beats nonpolar" only when molar masses are comparable.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Ranking questions reward naming the forces present for each substance before comparing. A one-line justification such as "ethanol: H-bonding + dipole + dispersion; ether: dipole + dispersion" earns the points even when the ranking is borderline.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'Rank these compounds by boiling point, from **lowest** to **highest**.',
      lines: [
        'propane, $\\ce{CH3CH2CH3}$',
        'acetaldehyde, $\\ce{CH3CHO}$',
        'ethanol, $\\ce{CH3CH2OH}$',
        'ethylene glycol, $\\ce{HOCH2CH2OH}$',
      ],
      explanation: 'Propane ($44\\ \\text{g/mol}$, nonpolar, dispersion only): $-42\\ ^\\circ\\text{C}$. Acetaldehyde ($44$, polar C=O, no O–H): $20\\ ^\\circ\\text{C}$. Ethanol ($46$, one O–H, hydrogen bonding): $78\\ ^\\circ\\text{C}$. Ethylene glycol ($62$, **two** O–H groups, so each molecule hydrogen-bonds at both ends): $197\\ ^\\circ\\text{C}$. That high boiling point and its low freezing point in water make ethylene glycol the standard engine coolant.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Properties of liquids: surface tension, viscosity, capillary action',
      blocks: [
        {
          type: 'p',
          text: 'A molecule inside a liquid is pulled equally in all directions. A molecule at the surface has neighbors only beside and below it, so it is pulled inward. Enlarging the surface means hauling molecules up from the interior against those attractions, which costs energy. The energy per unit of new area is the [[gchem-surface-tension|surface tension]] $\\gamma$ (units $\\text{J/m}^2 = \\text{N/m}$). It lets water striders walk, and it pulls droplets into spheres, the shape with the least surface for its volume.',
        },
        {
          type: 'p',
          text: '[[gchem-viscosity|Viscosity]] $\\eta$ is resistance to flow: molecules must slide past neighbors that cling to them. It rises with IMF strength and with tangled, long molecules, and **falls** as temperature rises, because faster molecules break free of their neighbors more easily.',
        },
        {
          type: 'table',
          headers: ['Liquid', 'Main IMFs', '$\\gamma$ at $20\\ ^\\circ\\text{C}$ ($\\text{mJ/m}^2$)', '$\\eta$ at $25\\ ^\\circ\\text{C}$ ($\\text{mPa·s}$)'],
          rows: [
            ['diethyl ether', 'dipole, dispersion', '17', '0.22'],
            ['ethanol', 'H-bond (1 O–H)', '22', '1.07'],
            ['water', 'H-bond network', '73', '0.89'],
            ['glycerol', 'H-bond (3 O–H)', '63', 'about 900'],
            ['mercury', 'metallic bonding', '485', '1.53'],
          ],
          caption: 'Approximate standard values. Glycerol\'s three O–H groups make it about a thousand times as viscous as water. Mercury\'s metallic bonding gives it the largest surface tension.',
        },
        {
          type: 'p',
          text: '**Capillary action** is the rise (or fall) of a liquid in a narrow tube. It is a contest between **cohesion** (liquid attracting itself) and **adhesion** (liquid attracting the tube wall). Water hydrogen-bonds to the O–H groups on a glass surface, so adhesion wins: water climbs the wall, forming a concave meniscus, and surface tension drags the column up behind it. Mercury barely sticks to glass, so cohesion wins and the column is pushed down.',
        },
        {
          type: 'figure',
          svg: FIG_MENISCI,
          alt: 'Two dishes, each with a narrow glass tube standing in the liquid. Left: water has risen well above the dish level in the tube with a concave meniscus; label adhesion greater than cohesion. Right: mercury stands below the dish level in the tube with a convex, domed meniscus; label cohesion greater than adhesion.',
          caption: 'Same glass, opposite behavior: it all depends on which attraction is stronger.',
        },
        {
          type: 'derivation',
          title: 'How high does water climb in a tube of radius $0.50\\ \\text{mm}$?',
          steps: [
            { tex: '2\\pi r\\,\\gamma\\cos\\theta = \\rho\\,(\\pi r^2 h)\\,g', why: 'Balance forces on the raised column: surface tension pulls up along the whole rim (circumference $2\\pi r$, contact angle $\\theta$), gravity pulls down on the column\'s weight.' },
            { tex: 'h = \\frac{2\\gamma\\cos\\theta}{\\rho g r}', why: 'Solve for $h$. Narrower tubes lift higher, as $1/r$.' },
            { tex: 'h = \\frac{2(0.0728\\ \\text{N/m})(1)}{(1000\\ \\text{kg/m}^3)(9.81\\ \\text{m/s}^2)(5.0 \\times 10^{-4}\\ \\text{m})}', why: 'Clean glass and water: $\\theta \\approx 0$, so $\\cos\\theta \\approx 1$.' },
            { tex: 'h = 0.030\\ \\text{m} = 3.0\\ \\text{cm}', why: 'Units: $\\text{N/m} \\div (\\text{kg/m}^3 \\cdot \\text{m/s}^2 \\cdot \\text{m}) = \\text{m}$.' },
          ],
          result: 'A tube ten times narrower lifts water ten times higher. Paper towels, wicking fabrics, soil and the xylem of plants all move water this way.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Cold-weather viscosity',
          text: 'Engine oil thickens dramatically in the cold, which is why vehicles operating in arctic conditions use low-viscosity winter grades (the "W" number in an oil grade like 5W-30 rates cold flow). The same physics makes cold fuel harder to pump and atomize.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Two clean glass tubes stand in a dish of water. Tube A has an inner radius of $1.0\\ \\text{mm}$, tube B $0.25\\ \\text{mm}$. How do the water heights compare?',
      options: [
        { text: 'Water rises to the same height in both; height depends only on the liquid', why: 'The liquid sets $\\gamma$ and $\\rho$, but the tube radius matters too: $h = 2\\gamma\\cos\\theta/(\\rho g r)$.' },
        { text: 'Water rises 4 times higher in tube B', correct: true, why: '$h \\propto 1/r$, and B\'s radius is one-quarter of A\'s.' },
        { text: 'Water rises 16 times higher in tube B', why: 'This would be true if $h \\propto 1/r^2$. The lifting force grows with the circumference ($\\propto r$) while the weight grows with the area ($\\propto r^2$), so $h \\propto r/r^2 = 1/r$.' },
        { text: 'Water rises higher in tube A, because it holds more water', why: 'A wider tube has a larger column to lift for each unit of rim, so it lifts water less high, not more.' },
      ],
      explanation: 'The upward pull is surface tension acting along the rim, $2\\pi r\\gamma\\cos\\theta$; the weight of the column is $\\rho\\pi r^2 h g$. Equating them gives $h = \\frac{2\\gamma\\cos\\theta}{\\rho g r}$, so a quarter of the radius means four times the height. For water in clean glass, tube A lifts about $1.5\\ \\text{cm}$ and tube B about $5.9\\ \\text{cm}$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Vapor pressure: a dynamic equilibrium',
      blocks: [
        {
          type: 'p',
          text: 'The Maxwell–Boltzmann tail you met two lessons ago exists in liquids too: at any moment a few surface molecules have enough kinetic energy to break free of their neighbors and escape. In an open dish they drift away and the liquid evaporates. In a **closed** container something more interesting happens.',
        },
        {
          type: 'figure',
          svg: FIG_VP_EQ,
          alt: 'Two sealed containers with liquid at the bottom. Left, just sealed: few molecules in the vapor, a red evaporation arrow and a small purple condensation arrow. Right, at equilibrium: many vapor molecules, with red evaporation and purple condensation arrows of equal size.',
          caption: 'The evaporation rate depends only on the temperature and the surface. The condensation rate grows as vapor builds up, until the two rates match.',
        },
        {
          type: 'definition',
          term: 'Vapor pressure',
          text: 'The [[gchem-vapor-pressure|vapor pressure]] of a liquid is the pressure of its vapor in [[gchem-dynamic-equilibrium|dynamic equilibrium]] with the liquid: molecules still evaporate and condense, but at equal rates, so the amount of vapor stays constant. It depends **only on the substance and the temperature**, not on how much liquid there is or on the size of the container.',
        },
        {
          type: 'p',
          text: 'A liquid **boils** when its vapor pressure equals the external pressure: then bubbles of vapor can form inside the liquid and survive instead of being crushed. The [[gchem-normal-boiling-point|normal boiling point]] is the temperature at which the vapor pressure is exactly $1\\ \\text{atm}$ ($760\\ \\text{torr}$).',
        },
        {
          type: 'graph',
          x: [0, 120],
          y: [0, 2.2],
          xStep: 20,
          yStep: 0.2,
          functions: [
            { expr: 'exp(-26500/8.314*(1/(x + 273.15) - 1/307.75))', label: 'diethyl ether', color: 'purple' },
            { expr: 'exp(-38600/8.314*(1/(x + 273.15) - 1/351.45))', label: 'ethanol', color: 'green' },
            { expr: 'exp(-40700/8.314*(1/(x + 273.15) - 1/373.15))', label: 'water', color: 'blue' },
          ],
          hlines: [{ y: 'p', label: 'external pressure', color: 'red' }],
          sliders: [{ name: 'p', min: 0.25, max: 2.1, step: 0.01, value: 1, label: 'external pressure (atm)' }],
          readouts: [{ label: 'water boils at (°C)', expr: '1/(1/373.15 - 8.314*ln(p)/40700) - 273.15', digits: 1 }],
          caption: 'Horizontal axis: temperature (°C); vertical: vapor pressure (atm), from the Clausius–Clapeyron equation of the next card. Each curve crosses the red line at that liquid\'s boiling point. Lower the pressure to about $0.83\\ \\text{atm}$ (Denver) or $0.33\\ \\text{atm}$ (Everest) and watch water\'s boiling point drop; raise it to about $2\\ \\text{atm}$ (a pressure cooker) and it climbs.',
        },
        {
          type: 'list',
          items: [
            '**Cooking at altitude.** Water in Denver boils near $95\\ ^\\circ\\text{C}$ and on Everest near $71\\ ^\\circ\\text{C}$. The water is boiling vigorously but is cooler, so pasta and rice take longer. For water purification, the CDC advises a rolling boil for 1 minute, or **3 minutes above about $2000\\ \\text{m}$ (6500 ft)**, to make up for the lower temperature.',
            '**Pressure cookers** trap steam until the pressure reaches about $2\\ \\text{atm}$ (absolute). Water then boils near $120\\ ^\\circ\\text{C}$, and food cooks far faster; the same principle drives autoclaves that sterilize field medical equipment.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Water and its vapor are at equilibrium in a sealed $1\\ \\text{L}$ flask at $25\\ ^\\circ\\text{C}$ (vapor pressure $23.8\\ \\text{torr}$). The flask is connected to an empty $1\\ \\text{L}$ flask, and some liquid remains. Once equilibrium returns at $25\\ ^\\circ\\text{C}$, what is the pressure of water vapor?',
      options: [
        { text: '$11.9\\ \\text{torr}$, because the vapor spreads into twice the volume', why: 'That would be Boyle\'s law for a fixed amount of gas. Here liquid remains, and more of it evaporates to refill the larger space.' },
        { text: '$23.8\\ \\text{torr}$, the same as before', correct: true, why: 'Vapor pressure depends only on temperature (and the substance). Extra liquid evaporates until the pressure is back to $23.8\\ \\text{torr}$.' },
        { text: '$47.6\\ \\text{torr}$, because there is twice as much space for vapor', why: 'More space means more vapor **molecules** at equilibrium, but the same concentration and therefore the same pressure.' },
        { text: 'It depends on how much liquid is left', why: 'As long as some liquid remains, the amount does not matter: equilibrium is a balance of rates per unit of surface.' },
      ],
      explanation: 'Right after the valve opens the vapor pressure drops, so condensation slows while evaporation continues at its old rate. Net evaporation refills the vapor until the condensation rate again equals the evaporation rate, which happens at the same vapor pressure, $23.8\\ \\text{torr}$. (If all the liquid evaporated first, the vapor would behave as an ordinary gas.)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The Clausius–Clapeyron equation',
      blocks: [
        {
          type: 'p',
          text: 'Why do vapor-pressure curves rise so steeply? Because escaping the liquid costs energy, $\\Delta H_{\\text{vap}}$ per mole, and the fraction of molecules with that much energy grows exponentially with temperature. The [[gchem-clausius-clapeyron|Clausius–Clapeyron equation]] captures this. Thermodynamics starts from the **Clapeyron equation** for the slope of any phase boundary, $\\dfrac{dP}{dT} = \\dfrac{\\Delta H}{T\\,\\Delta V}$ (an exact result of thermodynamics). For vaporization, two approximations turn it into something you can integrate.',
        },
        {
          type: 'derivation',
          title: 'From the Clapeyron equation to $\\ln P$',
          steps: [
            { tex: '\\frac{dP}{dT} = \\frac{\\Delta H_{\\text{vap}}}{T\\,(V_{\\text{gas}} - V_{\\text{liq}})} \\approx \\frac{\\Delta H_{\\text{vap}}}{T\\,V_{\\text{gas}}}', why: 'A mole of vapor occupies roughly a thousand times the volume of a mole of liquid, so neglect $V_{\\text{liq}}$.' },
            { tex: '\\frac{dP}{dT} = \\frac{\\Delta H_{\\text{vap}}\\,P}{RT^2}', why: 'Treat the vapor as ideal: $V_{\\text{gas}} = RT/P$ per mole.' },
            { tex: '\\frac{dP}{P} = \\frac{\\Delta H_{\\text{vap}}}{R}\\,\\frac{dT}{T^2}', why: 'Separate the variables.' },
            { tex: '\\ln P = -\\frac{\\Delta H_{\\text{vap}}}{R}\\cdot\\frac{1}{T} + C', why: 'Integrate both sides, treating $\\Delta H_{\\text{vap}}$ as constant: $\\int dP/P = \\ln P$ and $\\int T^{-2}\\,dT = -1/T$.' },
            { tex: '\\ln\\frac{P_2}{P_1} = -\\frac{\\Delta H_{\\text{vap}}}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)', why: 'Write the equation at two temperatures and subtract: $C$ cancels. This is the two-point form.' },
          ],
          result: 'A plot of $\\ln P$ against $1/T$ is a **straight line with slope $-\\Delta H_{\\text{vap}}/R$**. Measure the slope, and you have measured the enthalpy of vaporization.',
        },
        {
          type: 'graph',
          x: [2.6, 3.5],
          y: [2.5, 7],
          xStep: 0.1,
          yStep: 0.5,
          functions: [{ expr: 'ln(760) - (h/8.314)*(x - 1000/373.15)', label: 'line through the normal boiling point', color: 'blue' }],
          points: [
            { x: '1000/293.15', y: 'ln(17.5)', label: '20 °C', color: 'red' },
            { x: '1000/313.15', y: 'ln(55.3)', label: '40 °C', color: 'red' },
            { x: '1000/333.15', y: 'ln(149.4)', label: '60 °C', color: 'red' },
            { x: '1000/353.15', y: 'ln(355.1)', label: '80 °C', color: 'red' },
            { x: '1000/373.15', y: 'ln(760)', label: '100 °C', color: 'red' },
          ],
          sliders: [{ name: 'h', min: 30, max: 55, step: 0.1, value: 35, label: '$\\Delta H_{\\text{vap}}$ (kJ/mol)' }],
          readouts: [{ label: 'slope $= -\\Delta H_{\\text{vap}}/R$ (K, in thousands)', expr: '-h/8.314', digits: 3 }],
          caption: 'Horizontal axis: $1000/T$ in $\\text{K}^{-1}$; vertical: $\\ln(P/\\text{torr})$. Red points: measured vapor pressures of water. Drag $\\Delta H_{\\text{vap}}$ until the line runs through the points; it fits best near $43\\ \\text{kJ/mol}$. Note that hot is on the **left** of this plot.',
        },
        {
          type: 'derivation',
          title: '$\\Delta H_{\\text{vap}}$ of water from two measurements: $55.3\\ \\text{torr}$ at $40\\ ^\\circ\\text{C}$, $355.1\\ \\text{torr}$ at $80\\ ^\\circ\\text{C}$',
          steps: [
            { tex: '\\ln\\frac{355.1}{55.3} = 1.860', why: 'Left side of the two-point form, with point 2 the hotter one.' },
            { tex: '\\frac{1}{353.15} - \\frac{1}{313.15} = -3.617 \\times 10^{-4}\\ \\text{K}^{-1}', why: 'Temperatures in kelvin. The difference is negative because $T_2 > T_1$.' },
            { tex: '\\Delta H_{\\text{vap}} = -\\frac{R\\ln(P_2/P_1)}{1/T_2 - 1/T_1} = -\\frac{(8.314)(1.860)}{-3.617 \\times 10^{-4}}', why: 'Solve the two-point form for $\\Delta H_{\\text{vap}}$.' },
            { tex: '\\Delta H_{\\text{vap}} = 4.27 \\times 10^{4}\\ \\text{J/mol} = 42.7\\ \\text{kJ/mol}', why: 'Positive, as it must be: vaporizing absorbs energy.' },
          ],
          result: 'This is larger than the $40.7\\ \\text{kJ/mol}$ measured at $100\\ ^\\circ\\text{C}$, because $\\Delta H_{\\text{vap}}$ itself shrinks slowly as temperature rises (at the critical point it reaches zero). Over moderate ranges the constant-$\\Delta H$ approximation is still good to a few percent.',
        },
        {
          type: 'derivation',
          title: 'Boiling point of water on Everest ($P = 253\\ \\text{torr}$), with $\\Delta H_{\\text{vap}} = 40.7\\ \\text{kJ/mol}$',
          steps: [
            { tex: '\\frac{1}{T_2} = \\frac{1}{T_1} - \\frac{R}{\\Delta H_{\\text{vap}}}\\ln\\frac{P_2}{P_1}', why: 'Rearrange the two-point form for $1/T_2$. Point 1 is the normal boiling point: $760\\ \\text{torr}$, $373.15\\ \\text{K}$.' },
            { tex: '\\frac{1}{T_2} = \\frac{1}{373.15} - \\frac{8.314}{40\\,700}\\ln\\frac{253}{760} = 0.0026799 + 0.0002247', why: '$\\ln(253/760) = -1.100$, so the second term is $+2.247 \\times 10^{-4}$. Use $\\Delta H$ in **J**/mol to match $R$.' },
            { tex: 'T_2 = \\frac{1}{0.0029046\\ \\text{K}^{-1}} = 344.3\\ \\text{K} = 71\\ ^\\circ\\text{C}', why: 'Invert and convert to Celsius.' },
          ],
          result: 'Climbers can drink boiling water there without being scalded quite as badly, and tea brews poorly. The same calculation at $2.00\\ \\text{atm}$ gives $121\\ ^\\circ\\text{C}$ for a pressure cooker.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Atmospheric pressure in Denver is about $632\\ \\text{torr}$. Use the Clausius–Clapeyron equation with $\\Delta H_{\\text{vap}} = 40.7\\ \\text{kJ/mol}$ and the normal boiling point of water ($100.0\\ ^\\circ\\text{C}$ at $760\\ \\text{torr}$) to estimate water\'s boiling point there, in °C to one decimal place. $R = 8.314\\ \\text{J/(mol·K)}$.',
      hint: '$\\frac{1}{T_2} = \\frac{1}{373.15} - \\frac{8.314}{40\\,700}\\ln\\frac{632}{760}$, then subtract 273.15.',
      label: '$T_b =$',
      unit: '°C',
      answer: '1/(1/373.15 - 8.314/40700*ln(632/760)) - 273.15',
      answerTex: '94.8\\ ^\\circ\\text{C}',
      tolerance: 0.15,
      explanation: '$\\ln(632/760) = -0.1844$, so $\\frac{1}{T_2} = 0.0026799 + (2.0428 \\times 10^{-4})(0.1844) = 0.0026799 + 0.0000377 = 0.0027176\\ \\text{K}^{-1}$. Then $T_2 = 368.0\\ \\text{K} = 94.8\\ ^\\circ\\text{C}$. A drop of about $5\\ ^\\circ\\text{C}$ for a city $1.6\\ \\text{km}$ up: noticeable in recipes, and the reason high-altitude baking directions exist.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A liquid has a vapor pressure of $100.\\ \\text{torr}$ at $30.0\\ ^\\circ\\text{C}$ and $400.\\ \\text{torr}$ at $70.0\\ ^\\circ\\text{C}$. What is its enthalpy of vaporization, in kJ/mol? $R = 8.314\\ \\text{J/(mol·K)}$; 3 significant figures.',
      hint: '$\\Delta H_{\\text{vap}} = \\dfrac{R\\ln(P_2/P_1)}{1/T_1 - 1/T_2}$ with temperatures in kelvin.',
      label: '$\\Delta H_{\\text{vap}} =$',
      unit: 'kJ/mol',
      answer: '8.314*ln(4)/(1/303.15 - 1/343.15)/1000',
      answerTex: '30.0\\ \\text{kJ/mol}',
      tolerance: 0.06,
      explanation: '$\\ln(400/100) = \\ln 4 = 1.386$. $\\frac{1}{303.15} - \\frac{1}{343.15} = 0.0032987 - 0.0029142 = 3.845 \\times 10^{-4}\\ \\text{K}^{-1}$. So $\\Delta H_{\\text{vap}} = \\frac{(8.314)(1.386)}{3.845 \\times 10^{-4}} = 2.998 \\times 10^4\\ \\text{J/mol} = 30.0\\ \\text{kJ/mol}$. Using Celsius temperatures would give $1/30 - 1/70$, a wildly wrong difference: the equation comes from $PV = nRT$, so it needs kelvin.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Heating curves by the numbers',
      blocks: [
        {
          type: 'p',
          text: 'Foundations drew the [[chem-heating-curve|heating curve]] of water: slopes where the temperature rises, flat plateaus during melting and boiling. Now attach numbers. On a slope, $q = mc\\Delta T$ with the specific heat $c$ of whichever phase is present. On a plateau, $q = n\\,\\Delta H$ for the phase change, and the temperature does not move.',
        },
        {
          type: 'table',
          headers: ['Data for water', 'Value'],
          rows: [
            ['specific heat of ice', '$2.09\\ \\text{J/(g·°C)}$'],
            ['specific heat of liquid water', '$4.184\\ \\text{J/(g·°C)}$'],
            ['specific heat of steam', '$2.01\\ \\text{J/(g·°C)}$'],
            ['$\\Delta H_{\\text{fus}}$ at $0\\ ^\\circ\\text{C}$', '$6.01\\ \\text{kJ/mol}$'],
            ['$\\Delta H_{\\text{vap}}$ at $100\\ ^\\circ\\text{C}$', '$40.7\\ \\text{kJ/mol}$'],
            ['molar mass', '$18.02\\ \\text{g/mol}$'],
          ],
        },
        {
          type: 'derivation',
          title: '$25.0\\ \\text{g}$ of ice at $-10.0\\ ^\\circ\\text{C}$ to steam at $120.0\\ ^\\circ\\text{C}$',
          steps: [
            { tex: 'q_1 = (25.0)(2.09)(10.0) = 523\\ \\text{J}', why: 'Warm the ice from $-10$ to $0\\ ^\\circ\\text{C}$: $q = mc\\Delta T$ with the specific heat of ice.' },
            { tex: 'q_2 = \\frac{25.0}{18.02}\\ \\text{mol} \\times 6010\\ \\text{J/mol} = 8338\\ \\text{J}', why: 'Melt it: moles times $\\Delta H_{\\text{fus}}$. No temperature change.' },
            { tex: 'q_3 = (25.0)(4.184)(100.0) = 10\\,460\\ \\text{J}', why: 'Warm the liquid from $0$ to $100\\ ^\\circ\\text{C}$.' },
            { tex: 'q_4 = \\frac{25.0}{18.02} \\times 40\\,700 = 56\\,465\\ \\text{J}', why: 'Boil it: moles times $\\Delta H_{\\text{vap}}$.' },
            { tex: 'q_5 = (25.0)(2.01)(20.0) = 1005\\ \\text{J}', why: 'Warm the steam from $100$ to $120\\ ^\\circ\\text{C}$ with the specific heat of steam.' },
            { tex: 'q_{\\text{total}} = 523 + 8338 + 10\\,460 + 56\\,465 + 1005 = 76\\,791\\ \\text{J} = 76.8\\ \\text{kJ}', why: 'Add the segments; keep extra digits until the end.' },
          ],
          result: 'Boiling alone takes $74\\%$ of the energy, more than five times what it takes to heat the liquid all the way from $0$ to $100\\ ^\\circ\\text{C}$.',
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [-20, 140],
          xStep: 10,
          yStep: 20,
          functions: [
            { expr: '-10 + 10*min(1, max(0, x/(0.0209m))) + 100*min(1, max(0, (x - 0.35442m)/(0.4184m))) + max(0, x - 3.03142m)/(0.00201m)', label: 'temperature (°C)', color: 'red' },
          ],
          sliders: [{ name: 'm', min: 5, max: 30, step: 1, value: 25, label: 'mass of ice (g)' }],
          readouts: [
            { label: 'melting plateau (kJ)', expr: '0.33352m', digits: 2 },
            { label: 'boiling plateau (kJ)', expr: '2.25860m', digits: 2 },
          ],
          caption: 'Horizontal axis: heat added (kJ); vertical: temperature (°C), for ice starting at $-10\\ ^\\circ\\text{C}$. Every segment\'s length scales with the mass, but the shape never changes: the boiling plateau always dwarfs the rest, because $\\Delta H_{\\text{vap}}$ per gram ($2.26\\ \\text{kJ/g}$) is about seven times $\\Delta H_{\\text{fus}}$ per gram ($0.334\\ \\text{kJ/g}$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why vaporization costs so much more than melting',
          text: 'Melting only loosens the hydrogen-bond network: molecules in liquid water still touch about as many neighbors as in ice. Vaporizing must separate each molecule from **all** its neighbors. That is also why steam burns are so severe (condensing on skin releases $2.26\\ \\text{kJ}$ per gram) and why sweating works: evaporating one liter of sweat carries away about $2.4\\ \\text{MJ}$ of body heat, the main way a body sheds heat in hot-climate operations, and the reason dehydration there is so dangerous.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'How much heat is needed to turn $10.0\\ \\text{g}$ of liquid water at $25.0\\ ^\\circ\\text{C}$ into steam at $100.0\\ ^\\circ\\text{C}$? Use $c = 4.184\\ \\text{J/(g·°C)}$, $\\Delta H_{\\text{vap}} = 40.7\\ \\text{kJ/mol}$ and $M = 18.02\\ \\text{g/mol}$. Answer in kJ, 3 significant figures.',
      hint: 'Two segments: heat the liquid to $100\\ ^\\circ\\text{C}$ ($mc\\Delta T$), then vaporize it ($n\\Delta H_{\\text{vap}}$).',
      label: '$q =$',
      unit: 'kJ',
      answer: '(10.0*4.184*75.0 + 10.0/18.02*40700)/1000',
      answerTex: '25.7\\ \\text{kJ}',
      tolerance: 0.06,
      explanation: 'Heating: $(10.0)(4.184)(75.0) = 3138\\ \\text{J}$. Vaporizing: $\\frac{10.0}{18.02} = 0.5549\\ \\text{mol}$, times $40\\,700\\ \\text{J/mol} = 22\\,586\\ \\text{J}$. Total $25\\,724\\ \\text{J} = 25.7\\ \\text{kJ}$. The phase change is seven times the warming step.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'A student calculates the heat needed to turn $36.0\\ \\text{g}$ of ice at $0\\ ^\\circ\\text{C}$ into liquid water at $25.0\\ ^\\circ\\text{C}$ ($\\Delta H_{\\text{fus}} = 6.01\\ \\text{kJ/mol}$, $c = 4.184\\ \\text{J/(g·°C)}$). Tap the first line that is wrong.',
      lines: [
        'Two steps: melt the ice at $0\\ ^\\circ\\text{C}$, then warm the water to $25.0\\ ^\\circ\\text{C}$',
        'Melting: $q_1 = 36.0 \\times 6.01 = 216\\ \\text{kJ}$',
        'Warming: $q_2 = (36.0)(4.184)(25.0) = 3766\\ \\text{J} = 3.77\\ \\text{kJ}$',
        'Total: $q = 216 + 3.77 = 220\\ \\text{kJ}$',
      ],
      errorLines: [2],
      explanation: '$\\Delta H_{\\text{fus}}$ is per **mole**, but the student multiplied it by grams. Correctly, $n = 36.0/18.02 = 1.998\\ \\text{mol}$ and $q_1 = 1.998 \\times 6.01 = 12.0\\ \\text{kJ}$, so the total is $12.0 + 3.77 = 15.8\\ \\text{kJ}$. Tracking units catches it: $\\text{g} \\times \\text{kJ/mol}$ does not give kJ.',
    },
  ],
  takeaways: [
    'All IMFs are electrostatic. Dispersion acts between all molecules and grows with polarizability (size, electron count) and contact area; dipole–dipole adds for polar molecules; hydrogen bonds need H on N, O or F plus a lone pair on N, O or F; ion–dipole forces hydrate dissolved ions.',
    'To rank: ions first, then hydrogen bonding, then polarity, then size and shape; but large molecules can out-attract small polar ones through dispersion alone.',
    'Stronger IMFs mean higher surface tension, viscosity and boiling point, and lower vapor pressure. Capillary rise $h = 2\\gamma\\cos\\theta/(\\rho g r)$ reflects adhesion vs cohesion.',
    'Vapor pressure is a dynamic equilibrium that depends only on the substance and $T$. A liquid boils when its vapor pressure equals the external pressure: lower at altitude, higher in a pressure cooker.',
    'Clausius–Clapeyron: $\\ln P = -\\Delta H_{\\text{vap}}/(RT) + C$, a straight line in $1/T$ with slope $-\\Delta H_{\\text{vap}}/R$; two-point form $\\ln(P_2/P_1) = -\\frac{\\Delta H_{\\text{vap}}}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.',
    'Heating curves: $q = mc\\Delta T$ on slopes, $q = n\\Delta H$ on plateaus. For water, vaporization dominates the energy budget.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 10: Liquids and Solids',
      url: 'https://openstax.org/books/chemistry-2e/pages/10-introduction',
      source: 'openstax',
      note: 'Sections 10.1–10.3 cover intermolecular forces, properties of liquids, vapor pressure, the Clausius–Clapeyron equation and heating curves.',
    },
    {
      title: 'Wikipedia — Clausius–Clapeyron relation',
      url: 'https://en.wikipedia.org/wiki/Clausius%E2%80%93Clapeyron_relation',
      source: 'wikipedia',
      note: 'The derivation from the Clapeyron equation and applications from meteorology to boiling at altitude.',
    },
    {
      title: 'Wikipedia — Intermolecular force',
      url: 'https://en.wikipedia.org/wiki/Intermolecular_force',
      source: 'wikipedia',
      note: 'A survey of all the interaction types, with their distance dependence and typical energies.',
    },
    {
      title: 'Wikipedia — Surface tension',
      url: 'https://en.wikipedia.org/wiki/Surface_tension',
      source: 'wikipedia',
      note: 'Capillary rise, contact angles and tabulated surface tensions of common liquids.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The free "States of Matter" simulation lets you tune the attraction between atoms and watch melting, boiling and vapor pressure respond.',
    },
  ],
};
