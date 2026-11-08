import type { Lesson } from '../../types';

// ---------------------------------------------------------------- figures
const FIG_WAVE = `<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="72" x2="478" y2="72" stroke="currentColor" stroke-dasharray="4 4" stroke-opacity="0.5"/>
<polyline points="30.0,72.0 32.0,69.3 34.0,66.7 36.0,64.1 38.0,61.5 40.0,59.0 42.0,56.6 44.0,54.2 46.0,52.0 48.0,49.9 50.0,48.0 52.0,46.1 54.0,44.5 56.0,43.0 58.0,41.7 60.0,40.6 62.0,39.7 64.0,38.9 66.0,38.4 68.0,38.1 70.0,38.0 72.0,38.1 74.0,38.4 76.0,38.9 78.0,39.7 80.0,40.6 82.0,41.7 84.0,43.0 86.0,44.5 88.0,46.1 90.0,48.0 92.0,49.9 94.0,52.0 96.0,54.2 98.0,56.6 100.0,59.0 102.0,61.5 104.0,64.1 106.0,66.7 108.0,69.3 110.0,72.0 112.0,74.7 114.0,77.3 116.0,79.9 118.0,82.5 120.0,85.0 122.0,87.4 124.0,89.8 126.0,92.0 128.0,94.1 130.0,96.0 132.0,97.9 134.0,99.5 136.0,101.0 138.0,102.3 140.0,103.4 142.0,104.3 144.0,105.1 146.0,105.6 148.0,105.9 150.0,106.0 152.0,105.9 154.0,105.6 156.0,105.1 158.0,104.3 160.0,103.4 162.0,102.3 164.0,101.0 166.0,99.5 168.0,97.9 170.0,96.0 172.0,94.1 174.0,92.0 176.0,89.8 178.0,87.4 180.0,85.0 182.0,82.5 184.0,79.9 186.0,77.3 188.0,74.7 190.0,72.0 192.0,69.3 194.0,66.7 196.0,64.1 198.0,61.5 200.0,59.0 202.0,56.6 204.0,54.2 206.0,52.0 208.0,49.9 210.0,48.0 212.0,46.1 214.0,44.5 216.0,43.0 218.0,41.7 220.0,40.6 222.0,39.7 224.0,38.9 226.0,38.4 228.0,38.1 230.0,38.0 232.0,38.1 234.0,38.4 236.0,38.9 238.0,39.7 240.0,40.6 242.0,41.7 244.0,43.0 246.0,44.5 248.0,46.1 250.0,48.0 252.0,49.9 254.0,52.0 256.0,54.2 258.0,56.6 260.0,59.0 262.0,61.5 264.0,64.1 266.0,66.7 268.0,69.3 270.0,72.0 272.0,74.7 274.0,77.3 276.0,79.9 278.0,82.5 280.0,85.0 282.0,87.4 284.0,89.8 286.0,92.0 288.0,94.1 290.0,96.0 292.0,97.9 294.0,99.5 296.0,101.0 298.0,102.3 300.0,103.4 302.0,104.3 304.0,105.1 306.0,105.6 308.0,105.9 310.0,106.0 312.0,105.9 314.0,105.6 316.0,105.1 318.0,104.3 320.0,103.4 322.0,102.3 324.0,101.0 326.0,99.5 328.0,97.9 330.0,96.0 332.0,94.1 334.0,92.0 336.0,89.8 338.0,87.4 340.0,85.0 342.0,82.5 344.0,79.9 346.0,77.3 348.0,74.7 350.0,72.0 352.0,69.3 354.0,66.7 356.0,64.1 358.0,61.5 360.0,59.0 362.0,56.6 364.0,54.2 366.0,52.0 368.0,49.9 370.0,48.0 372.0,46.1 374.0,44.5 376.0,43.0 378.0,41.7 380.0,40.6 382.0,39.7 384.0,38.9 386.0,38.4 388.0,38.1 390.0,38.0 392.0,38.1 394.0,38.4 396.0,38.9 398.0,39.7 400.0,40.6 402.0,41.7 404.0,43.0 406.0,44.5 408.0,46.1 410.0,48.0 412.0,49.9 414.0,52.0 416.0,54.2 418.0,56.6 420.0,59.0 422.0,61.5 424.0,64.1 426.0,66.7 428.0,69.3 430.0,72.0 432.0,74.7 434.0,77.3 436.0,79.9 438.0,82.5 440.0,85.0 442.0,87.4 444.0,89.8 446.0,92.0 448.0,94.1 450.0,96.0 452.0,97.9 454.0,99.5 456.0,101.0 458.0,102.3 460.0,103.4 462.0,104.3 464.0,105.1 466.0,105.6 468.0,105.9 470.0,106.0" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.5"/>
<line x1="70" y1="38" x2="70" y2="18" stroke="currentColor" stroke-opacity="0.5"/><line x1="230" y1="38" x2="230" y2="18" stroke="currentColor" stroke-opacity="0.5"/>
<line x1="74" y1="22" x2="226" y2="22" stroke="currentColor" stroke-width="1.5"/><polygon points="78,18.4 72,22 78,25.6" fill="currentColor"/><polygon points="222,18.4 228,22 222,25.6" fill="currentColor"/>
<text x="150.0" y="15.0" text-anchor="middle" font-size="13">wavelength λ</text>
<line x1="390" y1="70" x2="390" y2="42" stroke="currentColor" stroke-width="1.5"/><polygon points="386.4,45 390,39 393.6,45" fill="currentColor"/>
<text x="398.0" y="62.0" text-anchor="start" font-size="13">amplitude</text>
<text x="478.0" y="24.0" text-anchor="end" font-size="12" class="t-gray">travels at speed c →</text>
<rect x="20.0" y="150" width="60.0" height="24" class="f-gray" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.4"/>
<rect x="80.0" y="150" width="90.0" height="24" class="f-purple" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.4"/>
<rect x="170.0" y="150" width="48.1" height="24" class="f-blue" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.4"/>
<rect x="225.4" y="150" width="94.6" height="24" class="f-red" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.4"/>
<rect x="320.0" y="150" width="90.0" height="24" class="f-orange" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.4"/>
<rect x="410.0" y="150" width="90.0" height="24" class="f-teal" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-opacity="0.4"/>
<text x="50.0" y="142.0" text-anchor="middle" font-size="12">gamma</text>
<text x="125.0" y="142.0" text-anchor="middle" font-size="12">X-ray</text>
<text x="194.0" y="142.0" text-anchor="middle" font-size="12">UV</text>
<text x="272.0" y="142.0" text-anchor="middle" font-size="12">infrared</text>
<text x="365.0" y="142.0" text-anchor="middle" font-size="12">microwave</text>
<text x="455.0" y="142.0" text-anchor="middle" font-size="12">radio</text>
<rect x="218.06" y="150" width="1.22" height="24" class="f-purple" fill="currentColor"/>
<rect x="219.28" y="150" width="1.22" height="24" class="f-blue" fill="currentColor"/>
<rect x="220.49" y="150" width="1.22" height="24" class="f-teal" fill="currentColor"/>
<rect x="221.71" y="150" width="1.22" height="24" class="f-green" fill="currentColor"/>
<rect x="222.92" y="150" width="1.22" height="24" class="f-orange" fill="currentColor"/>
<rect x="224.14" y="150" width="1.22" height="24" class="f-red" fill="currentColor"/>
<line x1="50.0" y1="174" x2="50.0" y2="180" stroke="currentColor"/>
<text x="50.0" y="193.0" text-anchor="middle" font-size="11">10⁻¹² m</text>
<line x1="140.0" y1="174" x2="140.0" y2="180" stroke="currentColor"/>
<text x="140.0" y="193.0" text-anchor="middle" font-size="11">10⁻⁹ m</text>
<line x1="230.0" y1="174" x2="230.0" y2="180" stroke="currentColor"/>
<text x="230.0" y="193.0" text-anchor="middle" font-size="11">10⁻⁶ m</text>
<line x1="320.0" y1="174" x2="320.0" y2="180" stroke="currentColor"/>
<text x="320.0" y="193.0" text-anchor="middle" font-size="11">10⁻³ m</text>
<line x1="410.0" y1="174" x2="410.0" y2="180" stroke="currentColor"/>
<text x="410.0" y="193.0" text-anchor="middle" font-size="11">1 m</text>
<line x1="500.0" y1="174" x2="500.0" y2="180" stroke="currentColor"/>
<text x="486.0" y="193.0" text-anchor="middle" font-size="11">10³ m</text>
<line x1="218.1" y1="174" x2="130" y2="232" stroke="currentColor" stroke-opacity="0.45" stroke-dasharray="3 3"/>
<line x1="225.4" y1="174" x2="390" y2="232" stroke="currentColor" stroke-opacity="0.45" stroke-dasharray="3 3"/>
<rect x="130.0" y="232" width="43.8" height="22" class="f-purple" fill="currentColor"/>
<rect x="173.3" y="232" width="43.8" height="22" class="f-blue" fill="currentColor"/>
<rect x="216.7" y="232" width="43.8" height="22" class="f-teal" fill="currentColor"/>
<rect x="260.0" y="232" width="43.8" height="22" class="f-green" fill="currentColor"/>
<rect x="303.3" y="232" width="43.8" height="22" class="f-orange" fill="currentColor"/>
<rect x="346.7" y="232" width="43.8" height="22" class="f-red" fill="currentColor"/>
<text x="130.0" y="270.0" text-anchor="middle" font-size="11">400 nm</text>
<text x="216.7" y="270.0" text-anchor="middle" font-size="11">500 nm</text>
<text x="303.3" y="270.0" text-anchor="middle" font-size="11">600 nm</text>
<text x="390.0" y="270.0" text-anchor="middle" font-size="11">700 nm</text>
<text x="118.0" y="248.0" text-anchor="end" font-size="12">visible</text>
<text x="30.0" y="312.0" text-anchor="start" font-size="12" class="t-purple">← shorter λ, higher ν, more energy per photon</text>
<text x="490.0" y="312.0" text-anchor="end" font-size="12" class="t-red">longer λ →</text>
</svg>`;

const FIG_PHOTO = `<svg viewBox="0 0 420 245" xmlns="http://www.w3.org/2000/svg">
<rect x="60" y="30" width="300" height="130" rx="40" fill="none" stroke="currentColor" stroke-width="1.8"/>
<text x="210.0" y="22.0" text-anchor="middle" font-size="12" class="t-gray">vacuum tube</text>
<rect x="90" y="55" width="12" height="80" class="f-gray" fill="currentColor" fill-opacity="0.6" stroke="currentColor"/>
<rect x="320" y="55" width="8" height="80" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/>
<text x="110.0" y="50.0" text-anchor="start" font-size="12">metal</text>
<text x="318.0" y="48.0" text-anchor="end" font-size="12">collector</text>
<polyline points="22.0,34.0 21.8,35.8 21.7,37.5 21.7,39.0 22.0,40.2 22.6,41.0 23.5,41.5 24.7,41.6 26.2,41.4 27.9,41.0 29.6,40.5 31.4,40.0 33.0,39.5 34.5,39.3 35.8,39.4 36.7,39.8 37.3,40.6 37.7,41.8 37.8,43.2 37.6,44.9 37.4,46.7 37.2,48.6 37.1,50.3 37.1,51.8 37.4,53.0 37.9,53.9 38.8,54.4 40.0,54.5 41.4,54.4 43.1,54.0 44.8,53.5 46.6,52.9 48.3,52.5 49.8,52.2 51.0,52.3 52.0,52.7 52.7,53.4 53.1,54.5 53.2,56.0 53.1,57.6 52.9,59.5 52.6,61.3 52.5,63.0 52.5,64.6 52.7,65.8 53.3,66.7 54.1,67.3 55.3,67.5 56.7,67.3 58.3,67.0 60.0,66.4 61.8,65.9 63.5,65.4 65.0,65.2 66.3,65.2 67.3,65.5 68.0,66.2 68.4,67.3 68.6,68.7 68.5,70.4 68.3,72.2 68.1,74.0 67.9,75.8 67.9,77.3 68.1,78.6 68.6,79.6 69.4,80.2 70.5,80.4 71.9,80.3 73.5,79.9 75.3,79.4 77.0,78.9 78.7,78.4 80.3,78.1 81.6,78.1" fill="none" stroke="currentColor" class="s-purple" stroke-width="2"/>
<polygon points="78,76 89,88 74,85" fill="currentColor" class="f-purple"/>
<text x="10.0" y="14.0" text-anchor="start" font-size="12" class="t-purple">light, frequency ν</text>
<circle cx="150" cy="75" r="6" fill="currentColor" class="f-blue"/>
<line x1="158" y1="75" x2="180" y2="75" stroke="currentColor" class="s-blue" stroke-width="1.5"/><polygon points="178,72.0 183,75 178,78.0" fill="currentColor" class="f-blue"/>
<circle cx="200" cy="98" r="6" fill="currentColor" class="f-blue"/>
<line x1="208" y1="98" x2="230" y2="98" stroke="currentColor" class="s-blue" stroke-width="1.5"/><polygon points="228,95.0 233,98 228,101.0" fill="currentColor" class="f-blue"/>
<circle cx="255" cy="82" r="6" fill="currentColor" class="f-blue"/>
<line x1="263" y1="82" x2="285" y2="82" stroke="currentColor" class="s-blue" stroke-width="1.5"/><polygon points="283,79.0 288,82 283,85.0" fill="currentColor" class="f-blue"/>
<circle cx="230" cy="118" r="6" fill="currentColor" class="f-blue"/>
<line x1="238" y1="118" x2="260" y2="118" stroke="currentColor" class="s-blue" stroke-width="1.5"/><polygon points="258,115.0 263,118 258,121.0" fill="currentColor" class="f-blue"/>
<text x="175.0" y="62.0" text-anchor="middle" font-size="12" class="t-blue">e⁻</text>
<polyline points="96,135 96,200 180,200" fill="none" stroke="currentColor" stroke-width="1.5"/>
<polyline points="324,135 324,200 240,200" fill="none" stroke="currentColor" stroke-width="1.5"/>
<circle cx="210" cy="200" r="16" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="210.0" y="205.0" text-anchor="middle" font-size="14">A</text>
<line x1="180" y1="200" x2="194" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="226" y1="200" x2="240" y2="200" stroke="currentColor" stroke-width="1.5"/>
<text x="210.0" y="236.0" text-anchor="middle" font-size="12" class="t-gray">ammeter: measures the current of ejected electrons</text>
</svg>`;

const FIG_LEVELS = `<svg viewBox="0 0 520 350" xmlns="http://www.w3.org/2000/svg">
<line x1="100" y1="320.0" x2="440" y2="320.0" stroke="currentColor" stroke-width="2"/>
<line x1="100" y1="110.0" x2="440" y2="110.0" stroke="currentColor" stroke-width="2"/>
<line x1="100" y1="71.1" x2="440" y2="71.1" stroke="currentColor" stroke-width="2"/>
<line x1="100" y1="57.5" x2="440" y2="57.5" stroke="currentColor" stroke-width="2"/>
<line x1="100" y1="51.2" x2="440" y2="51.2" stroke="currentColor" stroke-width="1"/>
<line x1="100" y1="47.8" x2="440" y2="47.8" stroke="currentColor" stroke-width="1"/>
<line x1="100" y1="40" x2="440" y2="40" stroke="currentColor" stroke-dasharray="5 4"/>
<text x="90.0" y="324.0" text-anchor="end" font-size="12">n = 1</text>
<text x="90.0" y="114.0" text-anchor="end" font-size="12">n = 2</text>
<text x="90.0" y="75.1" text-anchor="end" font-size="12">n = 3</text>
<text x="90.0" y="61.5" text-anchor="end" font-size="12">n = 4</text>
<text x="90.0" y="36.0" text-anchor="end" font-size="12">n = ∞</text>
<text x="448.0" y="324.0" text-anchor="start" font-size="12">−2.179</text>
<text x="448.0" y="114.0" text-anchor="start" font-size="12">−0.545</text>
<text x="448.0" y="75.1" text-anchor="start" font-size="12">−0.242</text>
<text x="448.0" y="61.5" text-anchor="start" font-size="12">−0.136</text>
<text x="448.0" y="36.0" text-anchor="start" font-size="12">0</text>
<text x="488.0" y="345.0" text-anchor="end" font-size="12" class="t-gray">E (10⁻¹⁸ J)</text>
<line x1="130" y1="110.0" x2="130" y2="314.0" stroke="currentColor" class="s-purple" stroke-width="2"/><polygon points="126.4,314.0 130,320.0 133.6,314.0" fill="currentColor" class="f-purple"/>
<line x1="148" y1="71.1" x2="148" y2="314.0" stroke="currentColor" class="s-purple" stroke-width="2"/><polygon points="144.4,314.0 148,320.0 151.6,314.0" fill="currentColor" class="f-purple"/>
<line x1="166" y1="57.5" x2="166" y2="314.0" stroke="currentColor" class="s-purple" stroke-width="2"/><polygon points="162.4,314.0 166,320.0 169.6,314.0" fill="currentColor" class="f-purple"/>
<text x="190.0" y="250.0" text-anchor="start" font-size="12" class="t-purple">Lyman</text>
<text x="190.0" y="265.0" text-anchor="start" font-size="12" class="t-purple">ultraviolet</text>
<text x="190.0" y="280.0" text-anchor="start" font-size="12" class="t-purple">(to n = 1)</text>
<line x1="250" y1="71.1" x2="250" y2="104.0" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="246.4,104.0 250,110.0 253.6,104.0" fill="currentColor" class="f-red"/>
<text x="250.0" y="126.0" text-anchor="middle" font-size="10" class="t-red">656</text>
<line x1="272" y1="57.5" x2="272" y2="104.0" stroke="currentColor" class="s-teal" stroke-width="2"/><polygon points="268.4,104.0 272,110.0 275.6,104.0" fill="currentColor" class="f-teal"/>
<text x="272.0" y="126.0" text-anchor="middle" font-size="10" class="t-teal">486</text>
<line x1="294" y1="51.2" x2="294" y2="104.0" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="290.4,104.0 294,110.0 297.6,104.0" fill="currentColor" class="f-blue"/>
<text x="294.0" y="126.0" text-anchor="middle" font-size="10" class="t-blue">434</text>
<line x1="316" y1="47.8" x2="316" y2="104.0" stroke="currentColor" class="s-purple" stroke-width="2"/><polygon points="312.4,104.0 316,110.0 319.6,104.0" fill="currentColor" class="f-purple"/>
<text x="316.0" y="126.0" text-anchor="middle" font-size="10" class="t-purple">410</text>
<text x="283.0" y="145.0" text-anchor="middle" font-size="12">Balmer: visible (nm)</text>
<text x="283.0" y="160.0" text-anchor="middle" font-size="12">(to n = 2)</text>
<line x1="385" y1="57.5" x2="385" y2="65.1" stroke="currentColor" class="s-orange" stroke-width="2"/><polygon points="381.4,65.11111111111111 385,71.11111111111111 388.6,65.11111111111111" fill="currentColor" class="f-orange"/>
<line x1="403" y1="51.2" x2="403" y2="65.1" stroke="currentColor" class="s-orange" stroke-width="2"/><polygon points="399.4,65.11111111111111 403,71.11111111111111 406.6,65.11111111111111" fill="currentColor" class="f-orange"/>
<text x="394.0" y="90.0" text-anchor="middle" font-size="12" class="t-orange">Paschen: IR</text>
<text x="394.0" y="104.0" text-anchor="middle" font-size="12" class="t-orange">(to n = 3)</text>
<line x1="500" y1="320.0" x2="500" y2="46" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="4 3"/><polygon points="496.4,48 500,42 503.6,48" fill="currentColor" class="f-gray"/>
<text x="513.0" y="190.0" text-anchor="middle" font-size="11" class="t-gray" transform="rotate(-90 513 190)">ionization (n = 1 → ∞)</text>
</svg>`;

export const lesson: Lesson = {
  id: 'gchem-light-photons',
  title: 'Light, Photons and Atomic Spectra',
  summary: 'Start General Chemistry where quantum theory started: light as a wave, Planck\'s quanta, Einstein\'s photons, and how hydrogen\'s spectrum led Bohr to quantized energy levels.',
  minutes: 22,
  objectives: [
    'Describe what General Chemistry adds to Chemistry Foundations and how the twelve units fit together',
    'Use $c = \\lambda\\nu$ and $E = h\\nu$ to convert between wavelength, frequency and photon energy, per photon and per mole',
    'Explain how blackbody radiation and the photoelectric effect forced the idea that light energy comes in quanta',
    'Apply $KE_{\\max} = h\\nu - \\Phi$ to find threshold frequencies, threshold wavelengths and electron energies',
    'Calculate hydrogen energy levels, transition energies and wavelengths with Bohr\'s formula and the Rydberg equation',
    'State what the Bohr model got right and where it fails',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Welcome to General Chemistry',
      blocks: [
        {
          type: 'p',
          text: 'Chemistry Foundations gave you the vocabulary and the bookkeeping: atoms and isotopes, electron configurations, bonds and shapes, balanced equations, the mole, the gas laws and pH. You learned **what** happens. General Chemistry asks **why** it happens and **how much**: why electrons sit in shells at all, how much heat a reaction releases, how fast it runs, how far it goes before it stops, and whether it can run on its own.',
        },
        {
          type: 'p',
          text: 'This is the full two-semester university course, at the level of OpenStax *Chemistry 2e*, Tro or Zumdahl. Expect more derivations and more numbers. You also bring tools most first-year students lack: logarithms, derivatives and integrals, and linear algebra. When calculus genuinely explains a law (a rate as a derivative, an integrated rate law, an eigenvalue equation), we will use it.',
        },
        {
          type: 'table',
          headers: ['Units', 'The big question', 'What you will be able to do'],
          rows: [
            ['1 Electronic Structure', 'Why do atoms look the way they do?', 'Derive configurations, magnetism and periodic trends from quantum mechanics'],
            ['2 Bonding Theory', 'Why do bonds form, and what shapes result?', 'Lattice energy, resonance, hybridization, molecular orbitals'],
            ['3 Aqueous Reactions', 'What happens when ions meet in water?', 'Net ionic equations, titrations, redox balancing'],
            ['4 Thermochemistry', 'How much heat?', 'Calorimetry, Hess\'s law, enthalpies of formation'],
            ['5–6 Gases, Liquids, Solids, Solutions', 'How do particles move and stick together?', 'Kinetic theory, real gases, phase diagrams, colligative properties'],
            ['7 Kinetics', 'How fast?', 'Rate laws, half-lives, the Arrhenius equation, mechanisms'],
            ['8–9 Equilibrium', 'How far?', '$K$, Le Châtelier, ICE tables, buffers, titration curves, $K_{sp}$'],
            ['10 Thermodynamics', 'Will it go at all?', 'Entropy, Gibbs free energy, the link between $\\Delta G^\\circ$ and $K$'],
            ['11–12 Applications', 'How do we use it?', 'Batteries and electrolysis, nuclear chemistry, transition-metal complexes'],
          ],
          caption: 'The arc of the course: structure first (units 1–2), then matter and energy (3–6), then the three questions every reaction raises: how fast, how far, and will it go (7–10).',
        },
        {
          type: 'heading',
          text: 'Where we start: three experiments classical physics could not explain',
        },
        {
          type: 'p',
          text: 'Around 1900 physics seemed nearly finished. Newton\'s mechanics and Maxwell\'s theory of light explained almost everything, except three stubborn experiments: the color of glowing hot objects, the electrons knocked out of metals by light, and the sharp colored lines emitted by hot gases. Each one forced the same strange conclusion: **energy comes in discrete packets**. This lesson takes them in order.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why begin with light?',
          text: 'Almost everything we know about electrons in atoms was learned from the light they absorb and emit. That is still true: chemists identify molecules by spectroscopy, and the handheld infrared and Raman identifiers that hazmat and EOD teams use to name an unknown powder in the field work by reading which light frequencies a sample absorbs or scatters. Understand light, and you can read what atoms are telling you.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Light as a wave: $c = \\lambda\\nu$',
      blocks: [
        {
          type: 'p',
          text: 'Light is **[[gchem-electromagnetic-radiation|electromagnetic radiation]]**: an electric field and a magnetic field oscillating together and traveling through space, even through a vacuum. Like any wave, it has a **[[gchem-wavelength|wavelength]]** $\\lambda$ (lambda), the distance from one crest to the next, and a **frequency** $\\nu$ (nu), the number of crests passing a fixed point per second. Frequency is measured in hertz, $1\\ \\text{Hz} = 1\\ \\text{s}^{-1}$. The **amplitude**, the height of the wave, sets its brightness (intensity), not its color.',
        },
        {
          type: 'figure',
          svg: FIG_WAVE,
          alt: 'Top: a sine wave with the crest-to-crest distance labelled wavelength lambda and the height above the midline labelled amplitude. Bottom: the electromagnetic spectrum as a bar on a logarithmic wavelength scale from 10 to the minus 12 meters to 10 to the 3 meters: gamma, X-ray, ultraviolet, a very thin visible sliver, infrared, microwave and radio. The visible sliver is enlarged below, running from violet at 400 nanometers through blue, green and orange to red at 700 nanometers.',
          caption: 'Every kind of light is the same phenomenon at a different wavelength. The visible band is a sliver: 400 to 700 nm out of a range spanning more than 15 powers of ten.',
        },
        {
          type: 'theorem',
          name: 'Wave relation for light',
          tex: 'c = \\lambda \\nu, \\qquad c = 2.998 \\times 10^{8}\\ \\text{m/s (in vacuum)}',
          text: 'All electromagnetic radiation travels at the same speed $c$ in a vacuum, so wavelength and frequency are inversely proportional: halve $\\lambda$ and $\\nu$ doubles.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\lambda\\nu$ is a speed',
          text: 'Picture a convoy with vehicles spaced $\\lambda$ meters apart, passing a checkpoint at $\\nu$ vehicles per second. In one second, $\\nu$ gaps of $\\lambda$ meters each roll past, so the convoy moves $\\lambda\\nu$ meters per second. For light that speed is always $c$, which is why fixing one of $\\lambda$ or $\\nu$ fixes the other.',
        },
        {
          type: 'derivation',
          title: 'The frequency of sodium\'s yellow light, $\\lambda = 589\\ \\text{nm}$',
          steps: [
            { tex: '\\nu = \\frac{c}{\\lambda}', why: 'Solve $c = \\lambda\\nu$ for the frequency.' },
            { tex: '\\lambda = 589\\ \\text{nm} \\times \\frac{10^{-9}\\ \\text{m}}{1\\ \\text{nm}} = 5.89 \\times 10^{-7}\\ \\text{m}', why: 'Convert to meters first, so the units match those of $c$.' },
            { tex: '\\nu = \\frac{2.998 \\times 10^{8}\\ \\cancel{\\text{m}}/\\text{s}}{5.89 \\times 10^{-7}\\ \\cancel{\\text{m}}} = 5.09 \\times 10^{14}\\ \\text{s}^{-1}', why: 'Meters cancel and leave $\\text{s}^{-1}$, which is hertz. Three significant figures, from 589.' },
          ],
          result: 'Yellow sodium light oscillates about $5.09 \\times 10^{14}$ times per second.',
        },
        {
          type: 'graph',
          x: [0, 2000],
          y: [-1.6, 1.6],
          xStep: 250,
          yStep: 0.5,
          height: 230,
          functions: [{ expr: 'sin(2pi*x/L)', label: 'electric field', color: 'blue' }],
          sliders: [{ name: 'L', min: 100, max: 1500, step: 10, value: 500, label: 'wavelength $\\lambda$ (nm)' }],
          readouts: [
            { label: 'frequency $\\nu$ ($10^{14}$ Hz) $=$', expr: '2998/L', digits: 2 },
            { label: 'photon energy ($10^{-19}$ J) $=$', expr: '1986.4/L', digits: 2 },
          ],
          caption: 'Horizontal axis: distance in nm. Shorten the wavelength and both the frequency and the photon energy (next card) rise in exact inverse proportion. Below about 400 nm you are in the ultraviolet; above about 700 nm, the infrared.',
        },
        {
          type: 'p',
          text: 'You use most of this spectrum every day. Microwave ovens, Wi-Fi and many radars run at a few gigahertz. Thermal sights and FLIR cameras image the long-wave infrared (about 8 to 14 μm) that warm bodies emit, while image-intensifier night vision works in the visible and near infrared. Ultraviolet causes sunburn and disinfects water, and X-rays pass through soft tissue and luggage.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'A microwave oven (and much Wi-Fi) operates at $2.45\\ \\text{GHz}$ ($1\\ \\text{GHz} = 10^{9}\\ \\text{Hz}$). What is the wavelength, in **centimeters**? Use $c = 2.998 \\times 10^{8}$ m/s; give three significant figures.',
      hint: '$\\lambda = c/\\nu$ gives meters. Multiply by 100 for centimeters.',
      label: '$\\lambda =$',
      unit: 'cm',
      answer: '2.998*10^8/(2.45*10^9)*100',
      answerTex: '12.2\\ \\text{cm}',
      tolerance: 0.06,
      explanation: '$\\lambda = \\frac{2.998 \\times 10^{8}\\ \\text{m/s}}{2.45 \\times 10^{9}\\ \\text{s}^{-1}} = 0.122\\ \\text{m} = 12.2\\ \\text{cm}$. That is why the metal mesh in a microwave door works: its holes are a few millimeters wide, far smaller than the 12 cm wave, so the microwaves cannot get through, while visible light (wavelength under a micrometer) passes easily and you can watch your food.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Glowing objects and Planck\'s quantum, $E = h\\nu$',
      blocks: [
        {
          type: 'p',
          text: 'Heat a steel bar and it glows dull red, then orange, then white. The spectrum of this glow depends almost only on temperature, not on what the object is made of. An idealized perfect emitter is called a **[[gchem-blackbody-radiation|blackbody]]**, and stars, stove burners and the filament of an old light bulb are all close to one.',
        },
        {
          type: 'graph',
          x: [0, 3],
          y: [0, 30],
          xStep: 0.5,
          yStep: 5,
          height: 300,
          functions: [
            { expr: '100x^(-5)/(e^(14388/(x*T)) - 1)', label: 'measured (Planck)', color: 'red', domain: [0.1, 3] },
            { expr: '100T/(14388x^4)', label: 'classical prediction', color: 'gray', dashed: true, domain: [0.25, 3] },
          ],
          areas: [{ expr: '100x^(-5)/(e^(14388/(x*T)) - 1)', from: 0.4, to: 0.7, color: 'teal' }],
          vlines: [{ x: '2898/T', label: 'peak', color: 'red' }],
          sliders: [{ name: 'T', min: 3000, max: 6000, step: 100, value: 5000, label: 'temperature $T$ (K)' }],
          readouts: [
            { label: 'peak wavelength (nm) $=$', expr: '2898000/T', digits: 0 },
            { label: 'total power relative to 5000 K $=$', expr: '(T/5000)^4', digits: 2 },
          ],
          caption: 'Horizontal axis: wavelength in micrometers ($1\\ \\mu\\text{m} = 1000$ nm); vertical: relative intensity. The shaded strip is the visible band. Raise $T$: the curve grows enormously and its peak slides toward shorter wavelengths (red-hot → white-hot). The dashed classical curve shoots upward at short wavelengths instead of turning over.',
        },
        {
          type: 'p',
          text: 'Classical physics treated the glowing material as a collection of charged oscillators that could take **any** energy. That theory fit the long-wavelength end and then failed spectacularly: it predicted intensity growing without limit at short wavelengths, so every warm object would blaze with ultraviolet and X-rays. This was nicknamed the **ultraviolet catastrophe**. Real curves turn over and fall to zero.',
        },
        {
          type: 'definition',
          term: 'Planck\'s quantum hypothesis (1900)',
          text: 'An oscillator of frequency $\\nu$ can gain or lose energy only in whole-number multiples of a smallest packet, a **[[gchem-quantum|quantum]]**, of size $E = h\\nu$. Here $h = 6.626 \\times 10^{-34}\\ \\text{J·s}$ is **[[gchem-plancks-constant|Planck\'s constant]]**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why quanta tame the ultraviolet',
          text: 'Thermal motion supplies energy in amounts of roughly $k_B T$. At low frequency a quantum $h\\nu$ is cheap, so those oscillators are busy, and the classical answer is fine. At high frequency a single quantum costs far more than $k_B T$, so those oscillators are almost never excited. It is like a vending machine that only accepts \\$20 bills: if you are carrying coins, the expensive slots stay full no matter how many there are. Quantization switches off the short-wavelength end, and Planck\'s formula matched the measured curves exactly.',
        },
        {
          type: 'derivation',
          title: 'Energy of green light, $\\lambda = 500\\ \\text{nm}$, per photon and per mole',
          steps: [
            { tex: 'E = h\\nu = \\frac{hc}{\\lambda}', why: 'Combine $E = h\\nu$ with $\\nu = c/\\lambda$, so you can go straight from wavelength to energy.' },
            { tex: 'E = \\frac{(6.626 \\times 10^{-34}\\ \\text{J·}\\cancel{\\text{s}})(2.998 \\times 10^{8}\\ \\cancel{\\text{m}}/\\cancel{\\text{s}})}{5.00 \\times 10^{-7}\\ \\cancel{\\text{m}}} = 3.97 \\times 10^{-19}\\ \\text{J}', why: 'Seconds and meters cancel, leaving joules. This is the energy of **one** quantum.' },
            { tex: '3.97 \\times 10^{-19}\\ \\tfrac{\\text{J}}{\\text{photon}} \\times 6.022 \\times 10^{23}\\ \\tfrac{\\text{photons}}{\\text{mol}} = 2.39 \\times 10^{5}\\ \\text{J/mol}', why: 'Multiply by Avogadro\'s number to get the energy of a mole of quanta, the scale chemists use.' },
            { tex: '= 239\\ \\text{kJ/mol}', why: 'Divide by 1000 to express it in kilojoules per mole.' },
          ],
          result: 'A mole of green photons carries 239 kJ, the same order as the energy of a chemical bond (roughly 150 to 500 kJ/mol). That is why visible and ultraviolet light can drive chemistry: vision, photosynthesis, sunburn and the fading of camouflage paint.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Keep $hc = 1.986 \\times 10^{-25}\\ \\text{J·m}$ handy. In electron volts it becomes the shortcut from Foundations: $E\\,(\\text{eV}) \\approx \\frac{1240}{\\lambda\\,(\\text{nm})}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Portable water purifiers use ultraviolet lamps at $\\lambda = 254\\ \\text{nm}$, which damage the DNA of microbes. What is the energy of **one mole** of these photons, in kJ/mol? Use $h = 6.626 \\times 10^{-34}$ J·s, $c = 2.998 \\times 10^{8}$ m/s and $N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}$; give three significant figures.',
      hint: '$E = hc/\\lambda$ per photon (with $\\lambda$ in meters), then multiply by $N_A$ and divide by 1000.',
      label: '$E =$',
      unit: 'kJ/mol',
      answer: '6.626*10^-34*2.998*10^8/(254*10^-9)*6.022*10^23/1000',
      answerTex: '471\\ \\text{kJ/mol}',
      tolerance: 0.6,
      explanation: 'Per photon: $E = \\frac{(6.626 \\times 10^{-34})(2.998 \\times 10^{8})}{2.54 \\times 10^{-7}} = 7.82 \\times 10^{-19}$ J. Per mole: $7.82 \\times 10^{-19} \\times 6.022 \\times 10^{23} = 4.71 \\times 10^{5}$ J $= 471$ kJ/mol, about twice the energy of green light and more than enough to rearrange bonds in DNA. Germicidal UV works because each photon carries a chemically significant packet of energy, not because the lamp is bright.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The photoelectric effect: light comes in photons',
      blocks: [
        {
          type: 'p',
          text: 'Shine light on a clean metal surface in a vacuum and electrons can fly off it. This is the **[[gchem-photoelectric-effect|photoelectric effect]]**. Collect those electrons on a second plate and an ammeter reads a current.',
        },
        {
          type: 'figure',
          svg: FIG_PHOTO,
          alt: 'A vacuum tube with a metal plate on the left and a collector plate on the right. A wavy purple light ray hits the metal plate; blue electrons fly from it toward the collector. Wires from both plates run to an ammeter below.',
          caption: 'The experiment: vary the light\'s frequency and brightness, and measure how many electrons come off and how fast they move.',
          maxWidth: 420,
        },
        {
          type: 'list',
          items: [
            '**There is a threshold frequency** $\\nu_0$. Below it, no electrons come out, however bright the light and however long you wait.',
            '**Above it, electrons appear instantly**, even in very dim light.',
            '**The electrons\' maximum kinetic energy rises in a straight line with frequency**, and does not depend on brightness at all.',
            '**Brightness changes only the number** of electrons (the current).',
          ],
        },
        {
          type: 'p',
          text: 'A classical wave spreads its energy smoothly over the surface, so brighter light should make faster electrons, and any frequency should work if you wait for an electron to soak up enough energy. Both predictions are wrong. In 1905 Einstein took Planck\'s quanta literally: light itself is a stream of particles, **[[gchem-photon|photons]]**, each carrying $E = h\\nu$, and one photon is absorbed by one electron.',
        },
        {
          type: 'theorem',
          name: 'Einstein\'s photoelectric equation',
          tex: 'KE_{\\max} = h\\nu - \\Phi, \\qquad \\nu_0 = \\frac{\\Phi}{h}',
          text: 'The **[[gchem-work-function|work function]]** $\\Phi$ is the minimum energy needed to pull an electron out of that metal. Whatever the photon brings beyond $\\Phi$ becomes the electron\'s kinetic energy. At the **threshold frequency** $\\nu_0$, the photon has exactly enough and the electron leaves with zero speed.',
        },
        {
          type: 'graph',
          x: [0, 16],
          y: [-1, 4],
          xStep: 2,
          yStep: 1,
          height: 300,
          functions: [
            { expr: 'max(0, 0.41361x - w)', label: '$KE_{\\max}$ (eV)', color: 'blue' },
            { expr: '0.41361x - w', color: 'gray', dashed: true, domain: [0, 'w/0.41361'] },
          ],
          vlines: [{ x: 'w/0.41361', label: 'ν₀', color: 'red' }],
          sliders: [{ name: 'w', min: 2.0, max: 5.5, step: 0.1, value: 2.3, label: 'work function $\\Phi$ (eV)' }],
          readouts: [
            { label: 'threshold $\\nu_0$ ($10^{14}$ Hz) $=$', expr: 'w/0.41361', digits: 2 },
            { label: 'threshold $\\lambda_0$ (nm) $=$', expr: '1240/w', digits: 0 },
          ],
          caption: 'Horizontal axis: frequency in units of $10^{14}$ Hz (visible light is about 4.3 to 7.5). Every metal gives a line with the **same slope**, $h = 4.136 \\times 10^{-15}$ eV·s; only the intercept changes. Try about 2.1 eV (cesium), 2.3 eV (potassium) and 4.3 eV (zinc): zinc needs ultraviolet light.',
        },
        {
          type: 'derivation',
          title: '300 nm ultraviolet light on potassium ($\\Phi = 3.68 \\times 10^{-19}$ J)',
          steps: [
            { tex: 'E_{\\text{photon}} = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(2.998 \\times 10^{8})}{3.00 \\times 10^{-7}} = 6.62 \\times 10^{-19}\\ \\text{J}', why: 'Energy of one photon from its wavelength (in meters).' },
            { tex: 'KE_{\\max} = 6.62 \\times 10^{-19} - 3.68 \\times 10^{-19} = 2.94 \\times 10^{-19}\\ \\text{J}', why: 'The work function is spent freeing the electron; the rest is kinetic energy.' },
            { tex: 'v = \\sqrt{\\frac{2\\,KE}{m_e}} = \\sqrt{\\frac{2(2.94 \\times 10^{-19}\\ \\text{J})}{9.109 \\times 10^{-31}\\ \\text{kg}}} = 8.04 \\times 10^{5}\\ \\text{m/s}', why: 'Solve $KE = \\frac{1}{2}mv^2$ for $v$. Since $1\\ \\text{J} = 1\\ \\text{kg·m}^2/\\text{s}^2$, the units come out in m/s.' },
            { tex: '\\lambda_0 = \\frac{hc}{\\Phi} = \\frac{1.986 \\times 10^{-25}\\ \\text{J·m}}{3.68 \\times 10^{-19}\\ \\text{J}} = 5.40 \\times 10^{-7}\\ \\text{m} = 540\\ \\text{nm}', why: 'The longest wavelength that still works: set $KE = 0$, so $hc/\\lambda_0 = \\Phi$.' },
          ],
          result: 'Electrons leave at about 800 km/s. Green light (540 nm) is potassium\'s limit: red light, however intense, ejects nothing.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Night vision runs on this equation',
          text: 'An image-intensifier tube starts with a photocathode: each photon of faint starlight or near-infrared light ejects one electron, which is then multiplied thousands of times and strikes a phosphor screen. Photocathode materials (such as gallium arsenide or multi-alkali coatings) are chosen for their low work functions, so that low-energy near-infrared photons still clear the threshold.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Light **above** the threshold frequency shines on a metal and ejects electrons. You double the intensity (brightness) but keep the frequency the same. What happens?',
      options: [
        { text: 'The maximum kinetic energy of the electrons doubles', why: 'Kinetic energy depends on the energy of **each** photon, $h\\nu - \\Phi$, and the frequency did not change. This is the classical wave prediction, which experiment refutes.' },
        { text: 'The number of electrons ejected per second doubles; their maximum kinetic energy is unchanged', correct: true, why: 'Twice the intensity at the same frequency means twice as many photons per second, each with the same energy. One photon ejects one electron.' },
        { text: 'The threshold frequency is cut in half', why: 'The threshold $\\nu_0 = \\Phi/h$ is a property of the metal. Brightness cannot change it.' },
        { text: 'Nothing changes, because intensity has no effect in the photon model', why: 'Intensity does matter: it sets the photon count, and therefore the number of electrons and the current.' },
      ],
      explanation: 'In the photon picture, intensity is the **number** of photons per second and frequency is the **energy of each**. One photon frees one electron, so doubling the photon count doubles the current, while each electron still leaves with at most $h\\nu - \\Phi$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Silver has a work function of $\\Phi = 7.21 \\times 10^{-19}$ J. What is the longest wavelength of light that can eject electrons from silver, in nm? Use $h = 6.626 \\times 10^{-34}$ J·s and $c = 2.998 \\times 10^{8}$ m/s; give three significant figures.',
      hint: 'At threshold the electron gets zero kinetic energy: $\\frac{hc}{\\lambda_0} = \\Phi$.',
      label: '$\\lambda_0 =$',
      unit: 'nm',
      answer: '6.626*10^-34*2.998*10^8/(7.21*10^-19)*10^9',
      answerTex: '276\\ \\text{nm}',
      tolerance: 0.6,
      explanation: '$\\lambda_0 = \\frac{hc}{\\Phi} = \\frac{(6.626 \\times 10^{-34})(2.998 \\times 10^{8})}{7.21 \\times 10^{-19}} = 2.76 \\times 10^{-7}\\ \\text{m} = 276\\ \\text{nm}$. That is ultraviolet: no visible light, however bright, can photoeject electrons from silver. Longer wavelength means lower photon energy, so the threshold is the **longest** wavelength that works.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Line spectra and the Bohr model of hydrogen',
      blocks: [
        {
          type: 'p',
          text: 'In Foundations you saw that glowing hydrogen emits only a few sharp colors, a [[chem-line-spectrum|line spectrum]], and that each line is a photon released when the electron drops between energy levels. Now for the full quantitative story. In 1913 Niels Bohr combined Rutherford\'s nuclear atom with Planck\'s and Einstein\'s quanta in three postulates, now called the [[gchem-bohr-model|Bohr model]]:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'The electron moves only in certain allowed orbits (**stationary states**), and while it stays in one it does not radiate.',
            'Each allowed state $n = 1, 2, 3, \\dots$ has a fixed energy, given by the formula below.',
            'Light is emitted or absorbed only when the electron jumps between states, as one photon with $h\\nu = |\\Delta E|$.',
          ],
        },
        {
          type: 'theorem',
          name: 'Bohr energy levels of hydrogen',
          tex: 'E_n = -\\frac{2.179 \\times 10^{-18}\\ \\text{J}}{n^2}, \\qquad n = 1, 2, 3, \\dots',
        },
        {
          type: 'figure',
          svg: FIG_LEVELS,
          alt: 'Hydrogen energy levels drawn to scale: n equals 1 at minus 2.179 times 10 to the minus 18 joules at the bottom, n equals 2 at minus 0.545, n equals 3 at minus 0.242, n equals 4 at minus 0.136, with levels crowding toward zero at n equals infinity. Purple arrows from n equals 2, 3 and 4 down to n equals 1 are the Lyman series in the ultraviolet. Arrows from n equals 3, 4, 5 and 6 down to n equals 2 are the Balmer series in the visible, labelled 656, 486, 434 and 410 nanometers. Orange arrows from n equals 4 and 5 to n equals 3 are the Paschen series in the infrared. A dashed arrow from n equals 1 up to infinity marks ionization.',
          caption: 'Levels drawn to scale. The gaps shrink as $n$ grows, so every series crowds toward a limit. Drops to $n = 1$ are big (ultraviolet), drops to $n = 2$ are visible, drops to $n = 3$ are infrared.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the energies are negative',
          text: 'Zero is chosen as the energy of an electron at rest infinitely far from the nucleus, that is, a free electron ($n = \\infty$). A bound electron has **less** energy than a free one, so bound energies are negative, and the ground state $n = 1$ is the most negative. Removing the electron from $n = 1$ takes $0 - E_1 = 2.179 \\times 10^{-18}$ J per atom, or $\\times N_A = 1312$ kJ/mol: exactly hydrogen\'s measured [[ionization-energy]].',
        },
        {
          type: 'derivation',
          title: 'The blue-green line: $n = 4 \\to n = 2$',
          steps: [
            { tex: '\\Delta E = E_{\\text{f}} - E_{\\text{i}} = -2.179 \\times 10^{-18}\\left(\\frac{1}{n_{\\text{f}}^2} - \\frac{1}{n_{\\text{i}}^2}\\right)', why: 'Final minus initial energy, using $E_n = -k/n^2$ for both levels and factoring out $k = 2.179 \\times 10^{-18}$ J.' },
            { tex: '= -2.179 \\times 10^{-18}\\left(\\frac{1}{4} - \\frac{1}{16}\\right) = -4.086 \\times 10^{-19}\\ \\text{J}', why: '$\\frac{1}{4} - \\frac{1}{16} = 0.1875$. The atom\'s energy **falls**, so $\\Delta E < 0$: this is emission.' },
            { tex: 'E_{\\text{photon}} = |\\Delta E| = 4.086 \\times 10^{-19}\\ \\text{J}', why: 'Energy is conserved: the photon carries away exactly what the atom lost.' },
            { tex: '\\lambda = \\frac{hc}{E_{\\text{photon}}} = \\frac{1.986 \\times 10^{-25}\\ \\text{J·m}}{4.086 \\times 10^{-19}\\ \\text{J}} = 4.862 \\times 10^{-7}\\ \\text{m} = 486.2\\ \\text{nm}', why: 'Convert energy to wavelength. Measured: 486.1 nm.' },
          ],
          result: 'Bohr\'s formula reproduces hydrogen\'s visible lines to four significant figures.',
        },
        {
          type: 'p',
          text: 'Dividing $\\Delta E$ by $hc$ gives a formula that goes straight to wavelength. Johann Rydberg had found it empirically in 1888, a quarter century before anyone could explain it:',
        },
        {
          type: 'theorem',
          name: 'Rydberg equation (hydrogen)',
          tex: '\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_{\\text{f}}^2} - \\frac{1}{n_{\\text{i}}^2}\\right), \\qquad R_H = \\frac{2.179 \\times 10^{-18}\\ \\text{J}}{hc} = 1.097 \\times 10^{7}\\ \\text{m}^{-1}',
          text: 'For emission $n_{\\text{i}} > n_{\\text{f}}$. Absorption uses the same wavelengths with the jump going upward. The lines that end on $n_{\\text{f}} = 1, 2, 3$ are the **Lyman** (ultraviolet), **Balmer** (visible) and **Paschen** (infrared) series.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'An element found in the Sun first',
          text: 'Atoms absorb the same wavelengths they emit, so cooler gas in front of a hot source carves dark lines into a continuous spectrum. Sunlight is full of them. In 1868 astronomers found a line in the solar spectrum that matched no known element; they named the element helium, after the Greek *helios*, and it was not isolated on Earth until 1895.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Calculate the wavelength, in nm, of the photon emitted when a hydrogen electron drops from $n = 3$ to $n = 1$. Use the Rydberg equation with $R_H = 1.097 \\times 10^{7}\\ \\text{m}^{-1}$; give three significant figures.',
      hint: '$\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{1^2} - \\frac{1}{3^2}\\right)$, then take the reciprocal and convert meters to nm.',
      label: '$\\lambda =$',
      unit: 'nm',
      answer: '1/(1.097*10^7*(1 - 1/9))*10^9',
      answerTex: '103\\ \\text{nm}',
      tolerance: 0.6,
      explanation: '$\\frac{1}{\\lambda} = 1.097 \\times 10^{7}\\left(1 - \\frac{1}{9}\\right) = 9.751 \\times 10^{6}\\ \\text{m}^{-1}$, so $\\lambda = 1.026 \\times 10^{-7}$ m $= 103$ nm (102.6 nm to four figures). The final level is $n = 1$, so this is a Lyman line, in the ultraviolet, invisible to the eye. Every drop to $n = 1$ is larger than any drop to $n = 2$, which is why the whole Lyman series lies at shorter wavelengths than the Balmer series.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student calculates the wavelength of the $n = 5 \\to n = 2$ line of hydrogen ($h = 6.626 \\times 10^{-34}$ J·s, $c = 2.998 \\times 10^{8}$ m/s). Tap the first line that is wrong.',
      lines: [
        '$|\\Delta E| = 2.179 \\times 10^{-18}\\left(\\frac{1}{2^2} - \\frac{1}{5^2}\\right)$ J',
        '$|\\Delta E| = 2.179 \\times 10^{-18}(0.2500 - 0.0400) = 4.576 \\times 10^{-19}$ J',
        '$\\nu = \\frac{|\\Delta E|}{h} = \\frac{4.576 \\times 10^{-19}}{6.626 \\times 10^{-34}} = 6.906 \\times 10^{14}\\ \\text{s}^{-1}$',
        '$\\lambda = \\frac{\\nu}{c} = \\frac{6.906 \\times 10^{14}}{2.998 \\times 10^{8}} = 2.304 \\times 10^{6}$ m',
        'So the $5 \\to 2$ photon is a radio wave.',
      ],
      errorLines: [4],
      explanation: 'From $c = \\lambda\\nu$, the wavelength is $\\lambda = \\frac{c}{\\nu}$, not $\\frac{\\nu}{c}$. A unit check catches it: $\\frac{\\text{s}^{-1}}{\\text{m/s}}$ gives $\\text{m}^{-1}$, not meters. Correctly, $\\lambda = \\frac{2.998 \\times 10^{8}}{6.906 \\times 10^{14}} = 4.341 \\times 10^{-7}$ m $= 434$ nm, the violet-blue Balmer line. A drop that ends at $n = 2$ is always visible or near-ultraviolet, so "radio wave" should also have rung an alarm.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Order the steps to find the wavelength of light emitted in a hydrogen transition from Bohr\'s energy formula.',
      lines: [
        'Identify the initial and final levels, $n_{\\text{i}}$ and $n_{\\text{f}}$',
        'Compute $\\Delta E = -2.179 \\times 10^{-18}\\left(\\frac{1}{n_{\\text{f}}^2} - \\frac{1}{n_{\\text{i}}^2}\\right)$ J',
        'Take the photon energy as $|\\Delta E|$ (emission, since $\\Delta E < 0$)',
        'Compute $\\lambda = \\frac{hc}{|\\Delta E|}$ in meters',
        'Convert meters to nanometers and name the region of the spectrum',
      ],
      distractors: ['Divide $|\\Delta E|$ by Avogadro\'s number to get the energy of one photon'],
      explanation: 'Levels, then the energy change, then the photon\'s energy, then its wavelength, then units and interpretation. The distractor is a trap: Bohr\'s $2.179 \\times 10^{-18}$ J is already the energy **per atom**, so $\\Delta E$ is already per photon. You would only use $N_A$ to go the other way, to kJ/mol.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'What Bohr got right, and what he got wrong',
      blocks: [
        {
          type: 'p',
          text: 'Bohr\'s model was a triumph and a dead end at the same time. It is worth knowing exactly which parts survive in the modern theory, because the next lesson replaces the rest.',
        },
        {
          type: 'compare',
          left: {
            title: 'Right (and still true)',
            tone: 'good',
            text: '• Electron energies in atoms are **quantized**.\n\n• A photon\'s energy equals the gap between two levels.\n\n• $E_n = -2.179 \\times 10^{-18}\\ \\text{J}/n^2$ is exactly right for hydrogen, and its ionization energy follows.\n\n• With nuclear charge $Z$, $E_n = -2.179 \\times 10^{-18}\\,Z^2/n^2$ works for any **one-electron** ion ($\\ce{He+}$, $\\ce{Li^2+}$).',
          },
          right: {
            title: 'Wrong (or missing)',
            tone: 'bad',
            text: '• Fails for every atom with two or more electrons, even helium.\n\n• Electrons do **not** travel in definite circular orbits (the uncertainty principle, next lesson).\n\n• Gives no reason **why** only certain orbits are allowed.\n\n• Cannot explain line intensities, the splitting of lines in a magnetic field, or chemical bonding.',
          },
        },
        {
          type: 'derivation',
          title: 'Bohr works for $\\ce{He+}$: its ionization energy',
          steps: [
            { tex: 'E_1(\\ce{He+}) = -\\frac{2.179 \\times 10^{-18}\\ \\text{J} \\times 2^2}{1^2} = -8.716 \\times 10^{-18}\\ \\text{J}', why: '$\\ce{He+}$ has one electron and $Z = 2$. Twice the charge pulls the electron in closer and binds it $Z^2 = 4$ times as tightly.' },
            { tex: 'IE = 0 - E_1 = 8.716 \\times 10^{-18}\\ \\text{J per ion}', why: 'Ionization takes the electron from $n = 1$ to $n = \\infty$, where $E = 0$.' },
            { tex: '8.716 \\times 10^{-18} \\times 6.022 \\times 10^{23} = 5.249 \\times 10^{6}\\ \\text{J/mol} = 5249\\ \\text{kJ/mol}', why: 'Scale to a mole of ions.' },
          ],
          result: 'The measured second ionization energy of helium is 5250 kJ/mol. For one electron, Bohr is essentially exact; add a second electron and the model has no way to handle the electron–electron repulsion.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a wrong model was so useful',
          text: 'Bohr\'s model got the energies right for the wrong reason, and that was enough to point the way. In 1924 Louis de Broglie suggested that electrons are waves, and that an allowed orbit is one where a whole number of wavelengths fits around the circle. That one idea explained Bohr\'s quantization and launched quantum mechanics. It is where the next lesson begins.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Expect: compute $\\Delta E$ or $\\lambda$ for a hydrogen transition, decide emission versus absorption from the sign of $\\Delta E$, name the series or spectral region, and convert between J per photon and kJ/mol. Watch units: nm to m before using $hc$, and per photon versus per mole.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'Bohr\'s formula $E_n = -2.179 \\times 10^{-18}\\ \\text{J}/n^2$, with the right value of $Z$, correctly predicts the energy levels and line spectrum of a neutral helium atom.',
      answer: false,
      explanation: 'Neutral helium has **two** electrons, and their mutual repulsion changes every level. Bohr\'s model has no way to include it, which is why the model failed for every atom beyond hydrogen. The $Z^2/n^2$ formula works only for one-electron species such as $\\ce{H}$, $\\ce{He+}$ and $\\ce{Li^2+}$. Handling many electrons takes the full quantum-mechanical model of the next lessons.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Compare the one-electron ion $\\ce{He+}$ ($Z = 2$) with hydrogen using $E_n = -2.179 \\times 10^{-18}\\,Z^2/n^2$ J.',
      template: 'The ground-state energy of $\\ce{He+}$ is ___ times hydrogen\'s. Its $n = 2 \\to 1$ photon has ___ times the energy, so its wavelength is ___ of hydrogen\'s 122 nm.',
      blanks: [{ answers: ['$4$'] }, { answers: ['$4$'] }, { answers: ['$\\frac{1}{4}$'] }],
      wordBank: ['$4$', '$4$', '$2$', '$16$', '$\\frac{1}{4}$', '$\\frac{1}{2}$'],
      explanation: 'Every level scales by $Z^2 = 4$, so every **gap** scales by 4 too: the $\\ce{He+}$ photon carries 4 times the energy. Since $\\lambda = hc/E$, four times the energy means one quarter of the wavelength: about $122 / 4 = 30.4$ nm, in the far ultraviolet. Doubling the nuclear charge quadruples the binding, not doubles it.',
    },
  ],
  takeaways: [
    'General Chemistry explains **why** and **how much**: structure (units 1–2), matter and energy (3–6), then how fast, how far and whether a reaction goes (7–10), and applications (11–12).',
    'Light is an electromagnetic wave with $c = \\lambda\\nu$ ($c = 2.998 \\times 10^{8}$ m/s); shorter wavelength means higher frequency.',
    'Planck: energy is exchanged in quanta $E = h\\nu = hc/\\lambda$ ($h = 6.626 \\times 10^{-34}$ J·s). Multiply by $N_A$ for kJ/mol; visible and UV photons carry bond-sized energies.',
    'Photoelectric effect: one photon ejects one electron, $KE_{\\max} = h\\nu - \\Phi$. Frequency sets electron energy; intensity sets electron count; below $\\nu_0 = \\Phi/h$ nothing happens.',
    'Bohr: $E_n = -2.179 \\times 10^{-18}\\ \\text{J}/n^2$ for hydrogen; photons carry $|\\Delta E|$; equivalently $1/\\lambda = R_H(1/n_f^2 - 1/n_i^2)$ with $R_H = 1.097 \\times 10^{7}$ m$^{-1}$. Lyman (to 1) is UV, Balmer (to 2) visible, Paschen (to 3) IR.',
    'Bohr got quantized levels and one-electron energies right ($Z^2/n^2$), but fails for many-electron atoms and wrongly pictures electrons in definite orbits.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 6: Electronic Structure and Periodic Properties of Elements',
      url: 'https://openstax.org/books/chemistry-2e/pages/6-introduction',
      source: 'openstax',
      note: 'Sections 6.1 and 6.2 cover electromagnetic energy, blackbody radiation, the photoelectric effect and the Bohr model, with worked examples.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for the "Photoelectric Effect", "Blackbody Spectrum" and "Models of the Hydrogen Atom" simulations to run these experiments yourself.',
    },
    {
      title: 'Wikipedia — Photoelectric effect',
      url: 'https://en.wikipedia.org/wiki/Photoelectric_effect',
      source: 'wikipedia',
      note: 'The history of the experiments, Einstein\'s 1905 explanation and modern uses such as photomultipliers.',
    },
    {
      title: 'Wikipedia — Bohr model',
      url: 'https://en.wikipedia.org/wiki/Bohr_model',
      source: 'wikipedia',
      note: 'Bohr\'s derivation of the hydrogen energies from quantized angular momentum, and a clear list of the model\'s shortcomings.',
    },
  ],
};
