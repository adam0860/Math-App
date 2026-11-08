import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_BOHR = `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="152" r="45" fill="none" stroke="currentColor" stroke-opacity="0.55"/>
<circle cx="150" cy="152" r="80" fill="none" stroke="currentColor" stroke-opacity="0.55"/>
<circle cx="150" cy="152" r="115" fill="none" stroke="currentColor" stroke-opacity="0.55"/>
<circle cx="150" cy="152" r="22" class="f-red s-red" fill-opacity="0.2"/>
<text x="150" y="149" text-anchor="middle">11 p⁺</text><text x="150" y="166" text-anchor="middle">12 n</text>
<circle cx="195.0" cy="152.0" r="5" fill="currentColor"/>
<circle cx="105.0" cy="152.0" r="5" fill="currentColor"/>
<circle cx="223.9" cy="182.6" r="5" fill="currentColor"/>
<circle cx="180.6" cy="225.9" r="5" fill="currentColor"/>
<circle cx="119.4" cy="225.9" r="5" fill="currentColor"/>
<circle cx="76.1" cy="182.6" r="5" fill="currentColor"/>
<circle cx="76.1" cy="121.4" r="5" fill="currentColor"/>
<circle cx="119.4" cy="78.1" r="5" fill="currentColor"/>
<circle cx="180.6" cy="78.1" r="5" fill="currentColor"/>
<circle cx="223.9" cy="121.4" r="5" fill="currentColor"/>
<circle cx="231.3" cy="70.7" r="5" class="f-orange"/>
<text x="150" y="102" text-anchor="middle" class="t-gray">n = 1</text>
<text x="150" y="67" text-anchor="middle" class="t-gray">n = 2</text>
<text x="150" y="32" text-anchor="middle" class="t-gray">n = 3</text>
<text x="242" y="57" class="t-orange">valence e⁻</text>
<text x="150" y="294" text-anchor="middle" font-weight="700">Na: 2, 8, 1</text>
<line x1="318" y1="270" x2="318" y2="34" stroke="currentColor" stroke-width="1.5"/><path d="M313,42 L318,30 L323,42 z" fill="currentColor"/>
<text x="306" y="150" text-anchor="middle" transform="rotate(-90 306 150)">energy</text>
<line x1="336" y1="262" x2="462" y2="262" stroke="currentColor" stroke-width="2" />
<text x="470" y="267" class="t-gray">n = 1</text>
<circle cx="391.5" cy="254" r="5" fill="currentColor"/>
<circle cx="406.5" cy="254" r="5" fill="currentColor"/>
<line x1="336" y1="160" x2="462" y2="160" stroke="currentColor" stroke-width="2" />
<text x="470" y="165" class="t-gray">n = 2</text>
<circle cx="346.5" cy="152" r="5" fill="currentColor"/>
<circle cx="361.5" cy="152" r="5" fill="currentColor"/>
<circle cx="376.5" cy="152" r="5" fill="currentColor"/>
<circle cx="391.5" cy="152" r="5" fill="currentColor"/>
<circle cx="406.5" cy="152" r="5" fill="currentColor"/>
<circle cx="421.5" cy="152" r="5" fill="currentColor"/>
<circle cx="436.5" cy="152" r="5" fill="currentColor"/>
<circle cx="451.5" cy="152" r="5" fill="currentColor"/>
<line x1="336" y1="104" x2="462" y2="104" stroke="currentColor" stroke-width="2" />
<text x="470" y="109" class="t-gray">n = 3</text>
<circle cx="399.0" cy="96" r="5" class="f-orange"/>
<line x1="336" y1="76" x2="462" y2="76" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" stroke-opacity="0.5"/>
<text x="470" y="81" class="t-gray">n = 4</text>
<text x="399" y="292" text-anchor="middle">lowest levels fill first</text>
</svg>`;
const FIG_SPECTRA = `<svg viewBox="0 0 520 350" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="ea-rainbow" x1="0" x2="1" y1="0" y2="0">
<stop offset="0.000" stop-color="#7f00ff"/>
<stop offset="0.133" stop-color="#3a2bff"/>
<stop offset="0.267" stop-color="#0090ff"/>
<stop offset="0.333" stop-color="#00d0e0"/>
<stop offset="0.433" stop-color="#20e040"/>
<stop offset="0.583" stop-color="#f0f000"/>
<stop offset="0.667" stop-color="#ffa000"/>
<stop offset="0.767" stop-color="#ff4000"/>
<stop offset="1.000" stop-color="#d00000"/>
</linearGradient></defs>
<text x="40" y="18">White light: a continuous spectrum</text>
<rect x="40" y="26" width="440" height="34" fill="url(#ea-rainbow)"/>
<text x="40" y="86">Glowing hydrogen gas: a line spectrum</text>
<rect x="40" y="94" width="440" height="34" fill="#0b0d16" stroke="currentColor" stroke-opacity="0.4"/>
<line x1="415.9" y1="94" x2="415.9" y2="128" stroke="#ff2a2a" stroke-width="3"/>
<line x1="166.3" y1="94" x2="166.3" y2="128" stroke="#18b8ff" stroke-width="3"/>
<line x1="89.9" y1="94" x2="89.9" y2="128" stroke="#5a4bff" stroke-width="3"/>
<line x1="55.0" y1="94" x2="55.0" y2="128" stroke="#9b30ff" stroke-width="3"/>
<line x1="40.0" y1="128" x2="40.0" y2="134" stroke="currentColor"/>
<text x="40.0" y="150" text-anchor="middle" class="t-gray">400 nm</text>
<line x1="186.7" y1="128" x2="186.7" y2="134" stroke="currentColor"/>
<text x="186.7" y="150" text-anchor="middle" class="t-gray">500 nm</text>
<line x1="333.3" y1="128" x2="333.3" y2="134" stroke="currentColor"/>
<text x="333.3" y="150" text-anchor="middle" class="t-gray">600 nm</text>
<line x1="480.0" y1="128" x2="480.0" y2="134" stroke="currentColor"/>
<text x="480.0" y="150" text-anchor="middle" class="t-gray">700 nm</text>
<text x="10" y="182" font-weight="700">Each line = an electron dropping to n = 2</text>
<line x1="70" y1="198" x2="420" y2="198" stroke="currentColor" stroke-opacity="0.7"/>
<text x="428" y="203" class="t-gray">n = 6</text>
<line x1="70" y1="214" x2="420" y2="214" stroke="currentColor" stroke-opacity="0.7"/>
<text x="428" y="219" class="t-gray">n = 5</text>
<line x1="70" y1="232" x2="420" y2="232" stroke="currentColor" stroke-opacity="0.7"/>
<text x="428" y="237" class="t-gray">n = 4</text>
<line x1="70" y1="258" x2="420" y2="258" stroke="currentColor" stroke-opacity="0.7"/>
<text x="428" y="263" class="t-gray">n = 3</text>
<line x1="70" y1="316" x2="420" y2="316" stroke="currentColor" stroke-opacity="0.7"/>
<text x="428" y="321" class="t-gray">n = 2</text>
<line x1="110" y1="258" x2="110" y2="307" stroke="#ff2a2a" stroke-width="2.5"/>
<path d="M105,306 L115,306 L110,316 z" fill="#ff2a2a"/>
<text x="110" y="336" text-anchor="middle">656 nm</text>
<line x1="190" y1="232" x2="190" y2="307" stroke="#18b8ff" stroke-width="2.5"/>
<path d="M185,306 L195,306 L190,316 z" fill="#18b8ff"/>
<text x="190" y="336" text-anchor="middle">486 nm</text>
<line x1="270" y1="214" x2="270" y2="307" stroke="#5a4bff" stroke-width="2.5"/>
<path d="M265,306 L275,306 L270,316 z" fill="#5a4bff"/>
<text x="270" y="336" text-anchor="middle">434 nm</text>
<line x1="350" y1="198" x2="350" y2="307" stroke="#9b30ff" stroke-width="2.5"/>
<path d="M345,306 L355,306 L350,316 z" fill="#9b30ff"/>
<text x="350" y="336" text-anchor="middle">410 nm</text>
<text x="30" y="270" text-anchor="middle" transform="rotate(-90 30 270)" class="t-gray">energy</text>
</svg>`;
const FIG_AUFBAU = `<svg viewBox="0 0 420 370" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="ea-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="f-blue"/></marker></defs>
<line x1="81.5" y1="17.4" x2="12.5" y2="56.0" class="s-blue" stroke-width="2" stroke-opacity="0.55" marker-end="url(#ea-ar)"/>
<text x="85.5" y="15.4" class="t-blue" style="font-size:13px">1</text>
<line x1="81.5" y1="59.4" x2="12.5" y2="98.0" class="s-blue" stroke-width="2" stroke-opacity="0.55" marker-end="url(#ea-ar)"/>
<text x="85.5" y="57.4" class="t-blue" style="font-size:13px">2</text>
<line x1="156.5" y1="59.4" x2="12.5" y2="140.0" class="s-blue" stroke-width="2" stroke-opacity="0.55" marker-end="url(#ea-ar)"/>
<text x="160.5" y="57.4" class="t-blue" style="font-size:13px">3</text>
<line x1="156.5" y1="101.4" x2="12.5" y2="182.0" class="s-blue" stroke-width="2" stroke-opacity="0.55" marker-end="url(#ea-ar)"/>
<text x="160.5" y="99.4" class="t-blue" style="font-size:13px">4</text>
<line x1="231.5" y1="101.4" x2="12.5" y2="224.0" class="s-blue" stroke-width="2" stroke-opacity="0.55" marker-end="url(#ea-ar)"/>
<text x="235.5" y="99.4" class="t-blue" style="font-size:13px">5</text>
<line x1="231.5" y1="143.4" x2="12.5" y2="266.0" class="s-blue" stroke-width="2" stroke-opacity="0.55" marker-end="url(#ea-ar)"/>
<text x="235.5" y="141.4" class="t-blue" style="font-size:13px">6</text>
<line x1="306.5" y1="143.4" x2="12.5" y2="308.0" class="s-blue" stroke-width="2" stroke-opacity="0.55" marker-end="url(#ea-ar)"/>
<text x="310.5" y="141.4" class="t-blue" style="font-size:13px">7</text>
<line x1="306.5" y1="185.4" x2="87.5" y2="308.0" class="s-blue" stroke-width="2" stroke-opacity="0.55" marker-end="url(#ea-ar)"/>
<text x="310.5" y="183.4" class="t-blue" style="font-size:13px">8</text>
<text x="50" y="40" text-anchor="middle" style="font-size:18px" font-weight="700">1s</text>
<text x="50" y="82" text-anchor="middle" style="font-size:18px" font-weight="700">2s</text>
<text x="125" y="82" text-anchor="middle" style="font-size:18px" font-weight="700">2p</text>
<text x="50" y="124" text-anchor="middle" style="font-size:18px" font-weight="700">3s</text>
<text x="125" y="124" text-anchor="middle" style="font-size:18px" font-weight="700">3p</text>
<text x="200" y="124" text-anchor="middle" style="font-size:18px" font-weight="700">3d</text>
<text x="50" y="166" text-anchor="middle" style="font-size:18px" font-weight="700">4s</text>
<text x="125" y="166" text-anchor="middle" style="font-size:18px" font-weight="700">4p</text>
<text x="200" y="166" text-anchor="middle" style="font-size:18px" font-weight="700">4d</text>
<text x="275" y="166" text-anchor="middle" style="font-size:18px" font-weight="700">4f</text>
<text x="50" y="208" text-anchor="middle" style="font-size:18px" font-weight="700">5s</text>
<text x="125" y="208" text-anchor="middle" style="font-size:18px" font-weight="700">5p</text>
<text x="200" y="208" text-anchor="middle" style="font-size:18px" font-weight="700">5d</text>
<text x="275" y="208" text-anchor="middle" style="font-size:18px" font-weight="700">5f</text>
<text x="50" y="250" text-anchor="middle" style="font-size:18px" font-weight="700">6s</text>
<text x="125" y="250" text-anchor="middle" style="font-size:18px" font-weight="700">6p</text>
<text x="200" y="250" text-anchor="middle" style="font-size:18px" font-weight="700">6d</text>
<text x="50" y="292" text-anchor="middle" style="font-size:18px" font-weight="700">7s</text>
<text x="125" y="292" text-anchor="middle" style="font-size:18px" font-weight="700">7p</text>
<text x="210" y="335" text-anchor="middle">Follow arrow 1, then 2, 3, …</text>
<text x="210" y="358" text-anchor="middle" class="t-blue">1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f …</text>
</svg>`;
const FIG_BOXES = `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg">
<text x="22" y="45" text-anchor="middle" style="font-size:22px" font-weight="700">C</text>
<rect x="50" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M62,49 V26 M58,32 L62,25 L66,32" fill="none" stroke="currentColor" stroke-width="2"/><path d="M74,25 V48 M70,42 L74,49 L78,42" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="104" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M116,49 V26 M112,32 L116,25 L120,32" fill="none" stroke="currentColor" stroke-width="2"/><path d="M128,25 V48 M124,42 L128,49 L132,42" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="158" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M176,49 V26 M172,32 L176,25 L180,32" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="194" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M212,49 V26 M208,32 L212,25 L216,32" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="230" y="20" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="350" y="35">1s² 2s² 2p²</text>
<text x="350" y="55" class="t-orange">2 unpaired</text>
<text x="22" y="117" text-anchor="middle" style="font-size:22px" font-weight="700">N</text>
<rect x="50" y="92" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M62,121 V98 M58,104 L62,97 L66,104" fill="none" stroke="currentColor" stroke-width="2"/><path d="M74,97 V120 M70,114 L74,121 L78,114" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="104" y="92" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M116,121 V98 M112,104 L116,97 L120,104" fill="none" stroke="currentColor" stroke-width="2"/><path d="M128,97 V120 M124,114 L128,121 L132,114" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="158" y="92" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M176,121 V98 M172,104 L176,97 L180,104" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="194" y="92" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M212,121 V98 M208,104 L212,97 L216,104" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="230" y="92" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M248,121 V98 M244,104 L248,97 L252,104" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="350" y="107">1s² 2s² 2p³</text>
<text x="350" y="127" class="t-orange">3 unpaired</text>
<text x="22" y="189" text-anchor="middle" style="font-size:22px" font-weight="700">O</text>
<rect x="50" y="164" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M62,193 V170 M58,176 L62,169 L66,176" fill="none" stroke="currentColor" stroke-width="2"/><path d="M74,169 V192 M70,186 L74,193 L78,186" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="104" y="164" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M116,193 V170 M112,176 L116,169 L120,176" fill="none" stroke="currentColor" stroke-width="2"/><path d="M128,169 V192 M124,186 L128,193 L132,186" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="158" y="164" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M170,193 V170 M166,176 L170,169 L174,176" fill="none" stroke="currentColor" stroke-width="2"/><path d="M182,169 V192 M178,186 L182,193 L186,186" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="194" y="164" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M212,193 V170 M208,176 L212,169 L216,176" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="230" y="164" width="36" height="34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M248,193 V170 M244,176 L248,169 L252,176" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="350" y="179">1s² 2s² 2p⁴</text>
<text x="350" y="199" class="t-orange">2 unpaired</text>
<text x="68" y="242" text-anchor="middle" class="t-gray">1s</text>
<text x="122" y="242" text-anchor="middle" class="t-gray">2s</text>
<text x="212" y="242" text-anchor="middle" class="t-gray">2p</text>
</svg>`;
const FIG_LEWIS = `<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
<text x="65" y="38" text-anchor="middle" class="t-gray">group 1</text>
<text x="65" y="90" text-anchor="middle" style="font-size:28px">Na</text>
<circle cx="65" cy="54" r="2.6" fill="currentColor"/>
<text x="65" y="132" text-anchor="middle" class="t-orange">1 valence e⁻</text>
<text x="195" y="38" text-anchor="middle" class="t-gray">group 2</text>
<text x="195" y="90" text-anchor="middle" style="font-size:28px">Mg</text>
<circle cx="195" cy="54" r="2.6" fill="currentColor"/>
<circle cx="225" cy="80" r="2.6" fill="currentColor"/>
<text x="195" y="132" text-anchor="middle" class="t-orange">2 valence e⁻</text>
<text x="325" y="38" text-anchor="middle" class="t-gray">group 13</text>
<text x="325" y="90" text-anchor="middle" style="font-size:28px">Al</text>
<circle cx="325" cy="54" r="2.6" fill="currentColor"/>
<circle cx="349" cy="80" r="2.6" fill="currentColor"/>
<circle cx="325" cy="106" r="2.6" fill="currentColor"/>
<text x="325" y="132" text-anchor="middle" class="t-orange">3 valence e⁻</text>
<text x="455" y="38" text-anchor="middle" class="t-gray">group 14</text>
<text x="455" y="90" text-anchor="middle" style="font-size:28px">Si</text>
<circle cx="455" cy="54" r="2.6" fill="currentColor"/>
<circle cx="478" cy="80" r="2.6" fill="currentColor"/>
<circle cx="455" cy="106" r="2.6" fill="currentColor"/>
<circle cx="432" cy="80" r="2.6" fill="currentColor"/>
<text x="455" y="132" text-anchor="middle" class="t-orange">4 valence e⁻</text>
<text x="65" y="170" text-anchor="middle" class="t-gray">group 15</text>
<text x="65" y="222" text-anchor="middle" style="font-size:28px">P</text>
<circle cx="60.5" cy="186" r="2.6" fill="currentColor"/>
<circle cx="69.5" cy="186" r="2.6" fill="currentColor"/>
<circle cx="83" cy="212" r="2.6" fill="currentColor"/>
<circle cx="65" cy="238" r="2.6" fill="currentColor"/>
<circle cx="47" cy="212" r="2.6" fill="currentColor"/>
<text x="65" y="264" text-anchor="middle" class="t-orange">5 valence e⁻</text>
<text x="195" y="170" text-anchor="middle" class="t-gray">group 16</text>
<text x="195" y="222" text-anchor="middle" style="font-size:28px">S</text>
<circle cx="190.5" cy="186" r="2.6" fill="currentColor"/>
<circle cx="199.5" cy="186" r="2.6" fill="currentColor"/>
<circle cx="213" cy="207.5" r="2.6" fill="currentColor"/>
<circle cx="213" cy="216.5" r="2.6" fill="currentColor"/>
<circle cx="195" cy="238" r="2.6" fill="currentColor"/>
<circle cx="177" cy="212" r="2.6" fill="currentColor"/>
<text x="195" y="264" text-anchor="middle" class="t-orange">6 valence e⁻</text>
<text x="325" y="170" text-anchor="middle" class="t-gray">group 17</text>
<text x="325" y="222" text-anchor="middle" style="font-size:28px">Cl</text>
<circle cx="320.5" cy="186" r="2.6" fill="currentColor"/>
<circle cx="329.5" cy="186" r="2.6" fill="currentColor"/>
<circle cx="350" cy="207.5" r="2.6" fill="currentColor"/>
<circle cx="350" cy="216.5" r="2.6" fill="currentColor"/>
<circle cx="320.5" cy="238" r="2.6" fill="currentColor"/>
<circle cx="329.5" cy="238" r="2.6" fill="currentColor"/>
<circle cx="300" cy="212" r="2.6" fill="currentColor"/>
<text x="325" y="264" text-anchor="middle" class="t-orange">7 valence e⁻</text>
<text x="455" y="170" text-anchor="middle" class="t-gray">group 18</text>
<text x="455" y="222" text-anchor="middle" style="font-size:28px">Ar</text>
<circle cx="450.5" cy="186" r="2.6" fill="currentColor"/>
<circle cx="459.5" cy="186" r="2.6" fill="currentColor"/>
<circle cx="480" cy="207.5" r="2.6" fill="currentColor"/>
<circle cx="480" cy="216.5" r="2.6" fill="currentColor"/>
<circle cx="450.5" cy="238" r="2.6" fill="currentColor"/>
<circle cx="459.5" cy="238" r="2.6" fill="currentColor"/>
<circle cx="430" cy="207.5" r="2.6" fill="currentColor"/>
<circle cx="430" cy="216.5" r="2.6" fill="currentColor"/>
<text x="455" y="264" text-anchor="middle" class="t-orange">8 valence e⁻</text>
</svg>`;

export const lesson: Lesson = {
  id: 'chem-electron-arrangement',
  title: 'Electron Arrangement and Valence Electrons',
  summary: 'Shells, sublevels and the order electrons fill them: write electron configurations, draw orbital boxes and electron-dot symbols, and see why the outermost electrons run chemistry.',
  minutes: 20,
  objectives: [
    'Explain energy levels (shells) and use line spectra as evidence that electron energies are quantized',
    'Describe the s, p, d and f sublevels and how many electrons each holds',
    'Write full and noble-gas electron configurations for elements up to krypton using the filling order',
    'Draw orbital-box diagrams using the Pauli exclusion principle and Hund\'s rule',
    'Count valence electrons, draw electron-dot symbols for main-group elements, and explain why valence electrons decide chemistry',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Electrons live in energy levels',
      blocks: [
        {
          type: 'p',
          text: 'The last lesson ended with Bohr\'s idea: an electron cannot have just any energy. It can only sit in certain **[[chem-energy-level|energy levels]]**, also called shells, numbered $n = 1, 2, 3, \\dots$ outward from the nucleus. A level with larger $n$ is, on average, farther from the nucleus and higher in energy.',
        },
        {
          type: 'p',
          text: 'Why is "farther" the same as "higher energy"? The negative electron is attracted to the positive nucleus. Pulling it away takes work, just as lifting a weight does, so an electron far from the nucleus stores more energy than one close in. An electron in $n = 1$ is held most tightly and is hardest to remove.',
        },
        {
          type: 'figure',
          svg: FIG_BOHR,
          alt: 'Left: a Bohr model of sodium with a nucleus of 11 protons and 12 neutrons and three circular shells holding 2, 8 and 1 electrons; the single outer electron is highlighted as the valence electron. Right: an energy ladder with levels n equals 1 to 4; n equals 1 holds 2 electrons, n equals 2 holds 8, n equals 3 holds 1, and n equals 4 is empty.',
          caption: 'Sodium\'s 11 electrons fill the lowest levels first: 2 in $n = 1$, 8 in $n = 2$, and the last one in $n = 3$. Notice that the levels crowd closer together as $n$ grows.',
        },
        {
          type: 'p',
          text: 'Each shell has room for a limited number of electrons: at most $2n^2$, so $2, 8, 18, 32$ for $n = 1, 2, 3, 4$. The arrangement with every electron in the lowest available level is the atom\'s **ground state**. If the atom absorbs energy, an electron can jump to a higher, empty level: an **excited state**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why electrons fill the lowest levels first',
          text: 'Systems settle into the lowest energy available to them, the way a ball rolls to the bottom of a staircase and stays there. An electron in a low level is closer to the nucleus and more tightly held, so the atom is more stable. Electrons go higher only when the lower levels are full, because each level has a limited number of places (you will see exactly why in a few cards).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The "2, 8, 8" pattern is not the whole story',
          text: 'For the first 20 elements, simple shell counts work: potassium is $2, 8, 8, 1$. But the third shell can hold 18, so why does potassium start a fourth shell after only 8? The answer is sublevels, coming up next.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Using the $2n^2$ rule, what is the **maximum** number of electrons the $n = 3$ shell can hold?',
      hint: 'Substitute $n = 3$ into $2n^2$.',
      answer: '18',
      label: 'maximum electrons:',
      explanation: '$2n^2 = 2 \\cdot 3^2 = 18$. If you answered 8, you were thinking of the 8 elements in period 3 of the table. The third shell eventually holds 18, but its last 10 places (the $3d$ sublevel) only fill after the $4s$ sublevel has started, as you will see shortly.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The evidence: atoms emit only certain colors',
      blocks: [
        {
          type: 'p',
          text: 'Heat a substance or run electricity through a gas and it glows. White light from a hot filament spreads through a prism into a continuous rainbow. But glowing hydrogen gives only four sharp visible lines (a [[chem-line-spectrum|line spectrum]]): red, blue-green and two violets. Every element has its own pattern of lines, a fingerprint astronomers use to tell what distant stars are made of.',
        },
        {
          type: 'figure',
          svg: FIG_SPECTRA,
          alt: 'Top: a continuous rainbow from violet at 400 nanometers to red at 700 nanometers. Middle: hydrogen\'s line spectrum, a dark strip with four bright lines at 410, 434, 486 and 656 nanometers. Bottom: hydrogen energy levels n equals 2 to 6, with colored arrows from n equals 3, 4, 5 and 6 down to n equals 2 labelled 656, 486, 434 and 410 nanometers.',
          caption: 'Each line in hydrogen\'s spectrum is one specific drop between two energy levels. A bigger drop releases more energy, which means a shorter (bluer) wavelength.',
        },
        {
          type: 'p',
          text: 'Bohr\'s explanation: energy kicks an electron up to a higher level, and when it falls back it releases the difference as one particle of light, a **photon**. The photon\'s energy equals the gap between the levels, $E_{\\text{photon}} = E_{\\text{high}} - E_{\\text{low}}$, and that energy fixes its color through $E = \\frac{hc}{\\lambda}$ ($h$ is Planck\'s constant, $c$ the speed of light, $\\lambda$ the wavelength). Fixed gaps mean fixed colors.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why lines prove the energy levels are quantized',
          text: 'If an electron could have *any* energy, like a ball on a ramp, it could drop by any amount and the atom would emit every color: a continuous rainbow. Instead we see only a few sharp lines, so only a few drops are possible. That means only certain energies are allowed: the levels are **quantized**, like the steps of a staircase.',
        },
        {
          type: 'p',
          text: 'You have seen line spectra all your life. Sodium street lamps glow yellow-orange at $589\\ \\text{nm}$, neon signs glow red, and signal flares, tracers and fireworks get their colors from metal compounds: strontium gives red, barium green, copper blue-green.',
        },
        {
          type: 'deepdive',
          title: 'Predicting hydrogen\'s red line',
          blocks: [
            {
              type: 'p',
              text: 'Hydrogen is simple enough that Bohr found a formula for its levels: $E_n = -\\frac{13.6\\ \\text{eV}}{n^2}$ (an electron volt, eV, is a tiny energy unit; zero means the electron has escaped, which is why the energies are negative). For light, $\\lambda = \\frac{hc}{E}$ works out to $\\lambda\\,(\\text{nm}) = \\frac{1240}{E\\,(\\text{eV})}$.',
            },
            {
              type: 'derivation',
              title: 'The $n = 3 \\to n = 2$ drop',
              steps: [
                { tex: 'E_3 = -\\frac{13.6}{3^2} = -1.511\\ \\text{eV}, \\qquad E_2 = -\\frac{13.6}{2^2} = -3.400\\ \\text{eV}', why: 'Substitute $n = 3$ and $n = 2$ into Bohr\'s formula.' },
                { tex: '\\Delta E = E_3 - E_2 = -1.511 - (-3.400) = 1.889\\ \\text{eV}', why: 'The photon carries away the difference between the two levels.' },
                { tex: '\\lambda = \\frac{1240\\ \\text{eV nm}}{1.889\\ \\cancel{\\text{eV}}} = 656\\ \\text{nm}', why: 'Convert energy to wavelength. The eV units cancel, leaving nanometers.' },
              ],
              result: 'Exactly the red line in hydrogen\'s spectrum. The same formula gives $486$, $434$ and $410\\ \\text{nm}$ for drops from $n = 4, 5, 6$.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Why does glowing hydrogen emit a few sharp colored lines instead of a continuous rainbow?',
      options: [
        {
          text: 'Electrons speed up and slow down smoothly as they orbit the nucleus',
          why: 'Smoothly changing energies would produce every color, a continuous spectrum. That is the opposite of what is observed.',
        },
        {
          text: 'Each line comes from a different isotope of hydrogen',
          why: 'Isotopes differ in neutrons, not in their electron arrangement. Pure protium alone produces all four lines.',
        },
        {
          text: 'Electrons can only have certain energies, so they can only release certain amounts of energy',
          correct: true,
          why: 'Only specific energy gaps exist, so only specific photon energies (colors) can be emitted.',
        },
        {
          text: 'The glass of the tube absorbs all of the other colors',
          why: 'Glass is transparent to visible light. The missing colors were never emitted in the first place.',
        },
      ],
      explanation: 'A photon\'s energy equals the drop between two energy levels. Because electron energies are quantized, only a few drops are possible, so only a few colors appear. A continuous spectrum would require electrons to have any energy at all.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Inside the shells: sublevels and orbitals',
      blocks: [
        {
          type: 'p',
          text: 'Each shell is split into **[[chem-sublevel|sublevels]]** labeled $s$, $p$, $d$ and $f$. Shell $n$ contains $n$ sublevels: shell 1 has only $1s$; shell 2 has $2s$ and $2p$; shell 3 has $3s$, $3p$ and $3d$; shell 4 has $4s$, $4p$, $4d$ and $4f$. Within one shell their energies increase in the order $s < p < d < f$.',
        },
        {
          type: 'p',
          text: 'Each sublevel is made of [[orbital|orbitals]]: regions of space where an electron is likely to be found. An $s$ sublevel has 1 orbital (a sphere), a $p$ sublevel has 3 (dumbbells along the $x$, $y$ and $z$ axes), $d$ has 5 and $f$ has 7. **Every orbital holds at most 2 electrons.**',
        },
        {
          type: 'table',
          headers: ['Sublevel', 'Orbitals', 'Max electrons'],
          rows: [
            ['$s$', '$1$', '$2$'],
            ['$p$', '$3$', '$6$'],
            ['$d$', '$5$', '$10$'],
            ['$f$', '$7$', '$14$'],
          ],
        },
        {
          type: 'derivation',
          title: 'Where the $2n^2$ rule comes from',
          steps: [
            { tex: '\\text{orbitals in shell } n = 1 + 3 + 5 + \\cdots + (2n - 1)', why: 'Shell $n$ contains the first $n$ sublevels, which have 1, 3, 5, 7, … orbitals: the odd numbers.' },
            { tex: '= n^2', why: 'The sum of the first $n$ odd numbers is $n^2$ (for $n = 3$: $1 + 3 + 5 = 9$). Picture adding L-shaped borders to grow a square.' },
            { tex: '\\text{max electrons} = 2 \\times n^2 = 2n^2', why: 'Each orbital holds two electrons.' },
          ],
          result: 'Shell 3: $9$ orbitals, $18$ electrons. Shell 4: $16$ orbitals, $32$ electrons.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Coming in General Chemistry',
          text: 'Each electron gets four **quantum numbers** ($n$, $\\ell$, $m_\\ell$, $m_s$), a precise "address" for its shell, sublevel, orbital and spin. The letters $s, p, d, f$ are just names for $\\ell = 0, 1, 2, 3$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The filling order (the Aufbau principle)',
      blocks: [
        {
          type: 'p',
          text: 'The **[[chem-aufbau-principle|Aufbau principle]]** (German for "building up") says: build an atom by adding electrons one at a time, each into the lowest-energy sublevel that still has room. The twist is that sublevel energies from different shells overlap. Most importantly, $4s$ is slightly **lower** than $3d$, so $4s$ fills first.',
        },
        {
          type: 'figure',
          svg: FIG_AUFBAU,
          alt: 'The sublevels written in rows: 1s; 2s 2p; 3s 3p 3d; 4s 4p 4d 4f; 5s 5p 5d 5f; 6s 6p 6d; 7s 7p. Numbered diagonal arrows run from upper right to lower left through them, giving the filling order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f and so on.',
          caption: 'Write the sublevels in rows by shell, then read along the diagonals from upper right to lower left. Arrow 4 ends at $4s$ before arrow 5 starts at $3d$, which is why $4s$ comes before $3d$.',
          maxWidth: 420,
        },
        {
          type: 'p',
          text: 'There is a rule behind the diagonals. Give each sublevel the number $n + \\ell$, where $\\ell = 0, 1, 2, 3$ for $s, p, d, f$. Sublevels fill in order of increasing $n + \\ell$; when two tie, the one with smaller $n$ goes first. Each diagonal in the figure is one value of $n + \\ell$.',
        },
        {
          type: 'table',
          headers: ['Sublevel', '$n + \\ell$', 'Fills'],
          rows: [
            ['$3p$', '$3 + 1 = 4$', 'before $4s$ (tie at 4; smaller $n$ first)'],
            ['$4s$', '$4 + 0 = 4$', 'before $3d$'],
            ['$3d$', '$3 + 2 = 5$', 'before $4p$ (tie at 5; smaller $n$ first)'],
            ['$4p$', '$4 + 1 = 5$', 'next, then $5s$ ($n + \\ell = 5$)'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why 4s beats 3d',
          text: 'A $4s$ electron spends most of its time far out, but its orbital also has a part that dips in very close to the nucleus, where it feels the full nuclear charge. A $3d$ electron never gets that close, so the inner electrons screen it more. In potassium and calcium that inner visit makes $4s$ lower in energy, so it fills first. The two are very close in energy, which is why transition metals have a few irregular configurations.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Put these sublevels in the order electrons fill them, lowest energy first.',
      lines: ['$3s$', '$3p$', '$4s$', '$3d$', '$4p$', '$5s$'],
      explanation: 'Using $n + \\ell$: $3s = 3$, $3p = 4$, $4s = 4$, $3d = 5$, $4p = 5$, $5s = 5$. Ties go to the smaller $n$, so $3p$ comes before $4s$, and $3d$, $4p$, $5s$ fill in that order. The classic trap is putting $3d$ right after $3p$; $4s$ gets in first.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Writing electron configurations',
      blocks: [
        {
          type: 'p',
          text: 'An [[electron-configuration]] lists the occupied sublevels in filling order, with the number of electrons in each as a superscript. $2p^4$ means "4 electrons in the $2p$ sublevel". To write one, fill sublevels in the Aufbau order until you have placed $Z$ electrons.',
        },
        {
          type: 'derivation',
          title: 'Oxygen, $Z = 8$',
          steps: [
            { tex: '1s^2', why: 'The lowest sublevel, $1s$, takes its maximum of 2 electrons. Running total: 2.' },
            { tex: '1s^2\\,2s^2', why: 'Next comes $2s$, also full with 2. Running total: 4.' },
            { tex: '1s^2\\,2s^2\\,2p^4', why: 'Only $8 - 4 = 4$ electrons remain, so $2p$ (capacity 6) gets 4. Total: $2 + 2 + 4 = 8$ ✓' },
          ],
          result: 'Oxygen is $1s^2\\,2s^2\\,2p^4$.',
        },
        {
          type: 'derivation',
          title: 'Potassium, $Z = 19$',
          steps: [
            { tex: '1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6', why: 'Fill in order: $2 + 2 + 6 + 2 + 6 = 18$ electrons, all full sublevels.' },
            { tex: '1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^1', why: 'The 19th electron goes into $4s$, which is lower in energy than $3d$. Total: 19 ✓' },
          ],
          result: 'Potassium is $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^1$: shell counts $2, 8, 8, 1$, exactly the puzzle from the first card.',
        },
        {
          type: 'table',
          headers: ['Element', '$Z$', 'Configuration'],
          rows: [
            ['H', '$1$', '$1s^1$'],
            ['He', '$2$', '$1s^2$'],
            ['Li', '$3$', '$1s^2\\,2s^1$'],
            ['C', '$6$', '$1s^2\\,2s^2\\,2p^2$'],
            ['Ne', '$10$', '$1s^2\\,2s^2\\,2p^6$'],
            ['Na', '$11$', '$1s^2\\,2s^2\\,2p^6\\,3s^1$'],
            ['Ar', '$18$', '$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6$'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Always check the sum',
          text: 'The superscripts must add up to $Z$ for a neutral atom. It is a ten-second check that catches most mistakes, the chemistry version of plugging your solution back into the equation.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'fill',
      prompt: 'Complete the electron configuration of phosphorus ($Z = 15$).',
      template: '$1s^2\\,2s^2\\,2p^6$ ___ ___',
      blanks: [{ answers: ['$3s^2$'] }, { answers: ['$3p^3$'] }],
      wordBank: ['$3s^2$', '$3p^3$', '$3s^1$', '$3p^5$', '$3d^3$', '$4s^2$'],
      hint: 'The first three sublevels hold $2 + 2 + 6 = 10$ electrons. Place the remaining 5.',
      explanation: 'After $1s^2\\,2s^2\\,2p^6$ (10 electrons), 5 remain. $3s$ comes next and takes 2, leaving 3 for $3p$: $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^3$. Check: $2 + 2 + 6 + 2 + 3 = 15$ ✓. $3d^3$ is wrong because $3p$ (and $4s$) fill before $3d$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Noble-gas shorthand',
      blocks: [
        {
          type: 'p',
          text: 'Long configurations repeat the same inner part over and over. Every element after neon starts with $1s^2\\,2s^2\\,2p^6$, which is neon\'s configuration. So we abbreviate it as $[\\text{Ne}]$ and write only what comes after. The noble gas used is the one at the end of the previous row of the periodic table.',
        },
        {
          type: 'math',
          tex: '\\ce{Na}: 1s^2\\,2s^2\\,2p^6\\,3s^1 = [\\text{Ne}]\\,3s^1 \\qquad \\ce{Cl}: [\\text{Ne}]\\,3s^2\\,3p^5',
        },
        {
          type: 'p',
          text: 'The electrons hidden inside the bracket are the **[[chem-core-electrons|core electrons]]**: a complete, stable inner shell structure. The ones written after it are the outer electrons, the ones that do chemistry.',
        },
        {
          type: 'derivation',
          title: 'Iron, $Z = 26$',
          steps: [
            { tex: '[\\text{Ar}]', why: 'Argon ($Z = 18$) ends the previous row, so its 18 electrons form the core.' },
            { tex: '[\\text{Ar}]\\,4s^2', why: 'Next in the filling order is $4s$, which takes 2. Running total: 20.' },
            { tex: '[\\text{Ar}]\\,4s^2\\,3d^6', why: 'Then $3d$ (capacity 10) gets the remaining $26 - 20 = 6$.' },
          ],
          result: 'Iron is $[\\text{Ar}]\\,4s^2\\,3d^6$.',
        },
        {
          type: 'derivation',
          title: 'Bromine, $Z = 35$',
          steps: [
            { tex: '[\\text{Ar}]\\,4s^2\\,3d^{10}', why: 'Core of 18, then $4s$ (2) and a full $3d$ (10): 30 electrons so far.' },
            { tex: '[\\text{Ar}]\\,4s^2\\,3d^{10}\\,4p^5', why: 'Five more go into $4p$. Total $18 + 2 + 10 + 5 = 35$ ✓' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Two accepted orders, and two famous exceptions',
          text: 'Many books write the $d$ sublevel before $4s$, grouping by shell: $[\\text{Ar}]\\,3d^6\\,4s^2$. Both orders describe the same atom and both are accepted. Up to krypton the Aufbau order works for every element except **chromium**, $[\\text{Ar}]\\,4s^1\\,3d^5$, and **copper**, $[\\text{Ar}]\\,4s^1\\,3d^{10}$: a half-filled or completely filled $d$ sublevel is extra stable, so one $4s$ electron moves into $3d$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student writes the configuration of potassium ($Z = 19$). Tap the first line that is wrong.',
      lines: [
        'Potassium has $Z = 19$, so a neutral atom has 19 electrons.',
        '$1s^2\\,2s^2\\,2p^6$ holds 10 electrons.',
        '$3s^2\\,3p^6$ adds 8 more, for 18 in total.',
        'The third shell can hold 18, so the last electron goes into $3d$: $3d^1$.',
        'Potassium is $[\\text{Ar}]\\,3d^1$.',
      ],
      errorLines: [4],
      explanation: 'The third shell can eventually hold 18, but electrons fill by **sublevel energy**, not by shell. $4s$ ($n + \\ell = 4$) is lower than $3d$ ($n + \\ell = 5$), so the 19th electron goes into $4s$: potassium is $[\\text{Ar}]\\,4s^1$. That single $4s$ electron is why potassium behaves like sodium ($[\\text{Ne}]\\,3s^1$).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Orbital diagrams: Pauli and Hund',
      blocks: [
        {
          type: 'p',
          text: 'An orbital diagram draws each orbital as a box and each electron as an arrow. The arrow direction shows the electron\'s **spin**, a built-in magnetic property that has two possible values, "up" and "down". Two rules decide how the arrows go in: the [[chem-pauli-exclusion-principle]] and [[chem-hunds-rule]].',
        },
        {
          type: 'definition',
          term: 'Pauli exclusion principle',
          text: 'An orbital holds at most two electrons, and if it holds two they must have opposite spins ($\\uparrow\\downarrow$).',
        },
        {
          type: 'definition',
          term: 'Hund\'s rule',
          text: 'Within a sublevel, electrons occupy empty orbitals one at a time, with parallel spins, before any orbital gets a second electron.',
        },
        {
          type: 'figure',
          svg: FIG_BOXES,
          alt: 'Orbital box diagrams. Carbon: 1s and 2s each have a paired up and down arrow; of the three 2p boxes, two have one up arrow each and one is empty: 2 unpaired. Nitrogen: 1s and 2s paired; each 2p box has one up arrow: 3 unpaired. Oxygen: 1s and 2s paired; the first 2p box is paired and the other two have one up arrow each: 2 unpaired.',
          caption: 'Hund\'s rule in action: nitrogen spreads its three $2p$ electrons over all three boxes. Pairing in $2p$ only starts with oxygen\'s fourth $2p$ electron.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why electrons spread out before they pair',
          text: 'Electrons repel each other. Two electrons in separate orbitals of the same sublevel stay farther apart than two crammed into one orbital, so the spread-out arrangement has lower energy. Unpaired electrons also make a substance attracted to magnets: liquid oxygen, whose molecules carry two unpaired electrons, clings to the poles of a strong magnet.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Seats on a bus',
          text: 'Passengers boarding a bus with double seats usually take an empty pair to themselves before anyone sits next to a stranger. Electrons in a sublevel do the same.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Iron is $[\\text{Ar}]\\,4s^2\\,3d^6$. How many **unpaired** electrons does an iron atom have? (Draw the five $3d$ boxes.)',
      hint: 'The $4s$ box is full and paired. Fill the five $3d$ boxes one arrow at a time before doubling up.',
      answer: '4',
      label: 'unpaired electrons:',
      explanation: 'By Hund\'s rule, the first five $3d$ electrons go one per box ($\\uparrow\\ \\uparrow\\ \\uparrow\\ \\uparrow\\ \\uparrow$) and the sixth pairs with one of them ($\\uparrow\\downarrow\\ \\uparrow\\ \\uparrow\\ \\uparrow\\ \\uparrow$). That leaves **4** unpaired electrons, and these unpaired spins are a big part of why iron is strongly magnetic.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Valence electrons and electron-dot symbols',
      blocks: [
        {
          type: 'definition',
          term: 'Valence electrons',
          text: 'The [[valence-electrons]] are the electrons in an atom\'s outermost shell (highest $n$). For main-group elements they are the $s$ and $p$ electrons of the highest shell. All the others are core electrons.',
        },
        {
          type: 'p',
          text: 'Chlorine is $[\\text{Ne}]\\,3s^2\\,3p^5$, so it has $2 + 5 = 7$ valence electrons. Selenium is $[\\text{Ar}]\\,4s^2\\,3d^{10}\\,4p^4$; its outer shell is $n = 4$, so it has $2 + 4 = 6$. The full $3d^{10}$ belongs to shell 3 and does not count. For main-group elements there is a shortcut: groups 1 and 2 have 1 and 2 valence electrons, and groups 13 to 18 have 3 to 8 (helium, with only 2, is the exception).',
        },
        {
          type: 'p',
          text: 'An **[[chem-electron-dot-symbol|electron-dot (Lewis) symbol]]** shows just the valence electrons as dots around the element symbol, which stands for the nucleus plus the core. Put one dot on each of the four sides before pairing any, so there are never more than 2 dots per side or 8 in total.',
        },
        {
          type: 'figure',
          svg: FIG_LEWIS,
          alt: 'Electron-dot symbols for period 3. Sodium has 1 dot, magnesium 2, aluminum 3, silicon 4 (one per side), phosphorus 5 (one pair and three singles), sulfur 6 (two pairs, two singles), chlorine 7 (three pairs, one single), argon 8 (four pairs).',
          caption: 'Across period 3 the dot count matches the group: 1, 2, then 3 to 8 for groups 13 to 18. The single (unpaired) dots are where bonds will form in the next unit.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why valence electrons decide chemistry',
          text: 'When two atoms meet, their outermost electrons are what touch. Those electrons are also the farthest from the nucleus and the least tightly held, so they are the ones that get transferred or shared in reactions. Core electrons sit deep inside, held so tightly that no chemical reaction disturbs them. So elements with the same valence arrangement behave alike: lithium ($2s^1$), sodium ($3s^1$) and potassium ($4s^1$) all react violently with water, while argon, with 8 valence electrons, reacts with almost nothing.',
        },
        {
          type: 'p',
          text: 'That last observation is the seed of the [[octet-rule]] you will use in the bonding unit: atoms tend to gain, lose or share electrons until they have 8 valence electrons, like a noble gas. (Valence electrons of transition metals are more complicated, because their $d$ electrons also take part; General Chemistry covers that.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Nitrogen is $1s^2\\,2s^2\\,2p^3$. Which electron-dot symbol is correct?',
      options: [
        {
          text: '$\\ce{N}$ with 7 dots',
          why: '7 is nitrogen\'s total number of electrons. A dot symbol shows only the valence electrons; the $1s^2$ pair is core.',
        },
        {
          text: '$\\ce{N}$ with 3 dots',
          why: 'That counts only the unpaired electrons. The paired $2s^2$ electrons are also valence electrons.',
        },
        {
          text: '$\\ce{N}$ with 5 dots: one pair and three single dots',
          correct: true,
          why: 'Shell 2 holds $2 + 3 = 5$ valence electrons. One per side first, then the fifth pairs up on one side.',
        },
        {
          text: '$\\ce{N}$ with 5 dots arranged in two pairs and one single',
          why: 'Dots go one per side before any pair forms, so 5 dots means one pair and three singles.',
        },
      ],
      explanation: 'Nitrogen is in group 15, so it has 5 valence electrons ($2s^2\\,2p^3$). Placing them one per side and then pairing gives one pair and three single dots. The three single dots predict that nitrogen forms three bonds, as in ammonia, $\\ce{NH3}$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'Sodium and chlorine are in the same row (period) of the periodic table, so they have similar chemical properties.',
      answer: false,
      explanation: 'Similar chemistry comes from having the same number of valence electrons, which means being in the same **group** (column). Sodium ($3s^1$, 1 valence electron) is a reactive metal that gives up an electron; chlorine ($3s^2\\,3p^5$, 7 valence electrons) is a toxic gas that grabs one. Sodium\'s chemical relatives are lithium and potassium, chlorine\'s are fluorine and bromine.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'numeric',
      prompt: 'Selenium ($Z = 34$) is $[\\text{Ar}]\\,4s^2\\,3d^{10}\\,4p^4$. How many **valence** electrons does it have?',
      hint: 'Valence electrons are in the highest shell. Which sublevels belong to shell 4?',
      answer: '6',
      label: 'valence electrons:',
      explanation: 'The highest shell is $n = 4$, holding $4s^2$ and $4p^4$: $2 + 4 = 6$ valence electrons. The $3d^{10}$ electrons, although written last but one, belong to shell 3 and are core electrons. Selenium sits in group 16 with oxygen and sulfur, which also have 6.',
    },
  ],
  takeaways: [
    'Electrons occupy quantized energy levels; shell $n$ holds at most $2n^2$ electrons, and atoms fill the lowest levels first (the ground state).',
    'Line spectra are the evidence: each line is a photon whose energy equals the gap between two levels.',
    'Shells contain $s$, $p$, $d$, $f$ sublevels with 1, 3, 5, 7 orbitals (2, 6, 10, 14 electrons); they fill in the order $1s\\,2s\\,2p\\,3s\\,3p\\,4s\\,3d\\,4p \\dots$ (increasing $n + \\ell$).',
    'Configurations list filled sublevels ($\\ce{Fe}$: $[\\text{Ar}]\\,4s^2\\,3d^6$); superscripts must add to $Z$. Pauli: at most 2 electrons per orbital, opposite spins. Hund: spread out before pairing.',
    'Valence electrons (outermost shell) decide chemistry; for main-group elements their number follows from the group, and electron-dot symbols show them.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 6: Electronic Structure and Periodic Properties of Elements',
      url: 'https://openstax.org/books/chemistry-2e/pages/6-introduction',
      source: 'openstax',
      note: 'The free college textbook chapter on the Bohr model, line spectra, orbitals and electron configurations, which General Chemistry will build on.',
    },
    {
      title: 'Wikipedia — Electron configuration',
      url: 'https://en.wikipedia.org/wiki/Electron_configuration',
      source: 'wikipedia',
      note: 'The full filling order, the exceptions, and a table of configurations for every element.',
    },
    {
      title: 'Wikipedia — Aufbau principle',
      url: 'https://en.wikipedia.org/wiki/Aufbau_principle',
      source: 'wikipedia',
      note: 'The $n + \\ell$ (Madelung) rule behind the diagonal diagram, and where it breaks down.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'Short videos and practice on electron configurations, orbital diagrams and valence electrons.',
    },
  ],
};
