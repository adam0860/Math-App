import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-gas-laws',
  title: 'The Gas Laws',
  summary: 'Pressure, volume, temperature and moles: four proportionalities, one ideal gas law, and the physics of diving, flying and cold tires.',
  minutes: 21,
  objectives: [
    'Describe a gas with the kinetic-molecular model and explain pressure as particle collisions',
    'Convert pressures between atm, kPa, mmHg and torr, and distinguish gauge from absolute pressure',
    'Explain why gas-law temperatures must be in kelvin',
    'Apply Boyle\'s, Charles\'s, Gay-Lussac\'s, Avogadro\'s and the combined gas law',
    'Use $PV = nRT$ with the right value of $R$, and the $22.4\\ \\text{L/mol}$ molar volume at STP',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What a gas really is',
      blocks: [
        {
          type: 'p',
          text: 'Solids and liquids barely change size when you squeeze or heat them. Gases change dramatically — and all gases change in almost exactly the same way, whether helium, oxygen or carbon dioxide. That uniformity is a clue that a gas\'s behavior does not depend on *what* its particles are, only on how many there are and how fast they move.',
        },
        {
          type: 'p',
          text: 'The [[chem-kinetic-molecular-theory]] (KMT) is the model that explains it. Picture a gas this way:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Tiny particles, lots of space.** The particles themselves take up a negligible fraction of the volume (about $0.1\\%$ of air at room conditions). A gas is mostly empty space.',
            '**Constant random motion.** Particles fly in straight lines until they hit each other or a wall. In room-temperature air the average speed is around $500\\ \\text{m/s}$.',
            '**Elastic collisions, no attractions.** Particles bounce off without losing energy overall, and otherwise ignore each other.',
            '**Temperature is motion.** The average kinetic energy of the particles is proportional to the absolute ([[kelvin]]) temperature.',
          ],
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="300" height="220" fill="none" stroke="currentColor" stroke-width="3"/><line x1="160.6" y1="133.6" x2="164.4" y2="124.1" class="s-blue" stroke-width="2"/><path d="M166.2 119.4 L166.8 127.4 L160.3 124.8 Z" class="f-blue"/><circle cx="158.1" cy="140.2" r="6" class="f-purple"/><line x1="93.3" y1="125.4" x2="97.2" y2="113.5" class="s-blue" stroke-width="2"/><path d="M98.7 108.8 L99.8 116.7 L93.2 114.5 Z" class="f-blue"/><circle cx="91.2" cy="132.0" r="6" class="f-purple"/><line x1="198.9" y1="185.8" x2="186.3" y2="207.1" class="s-blue" stroke-width="2"/><path d="M183.8 211.4 L184.4 203.5 L190.4 207.0 Z" class="f-blue"/><circle cx="202.5" cy="179.8" r="6" class="f-purple"/><line x1="72.1" y1="188.0" x2="79.7" y2="197.3" class="s-blue" stroke-width="2"/><path d="M82.9 201.2 L75.6 197.8 L81.0 193.4 Z" class="f-blue"/><circle cx="67.7" cy="182.6" r="6" class="f-purple"/><line x1="211.4" y1="51.4" x2="188.1" y2="49.0" class="s-blue" stroke-width="2"/><path d="M183.1 48.4 L190.6 45.7 L189.9 52.7 Z" class="f-blue"/><circle cx="218.4" cy="52.1" r="6" class="f-purple"/><line x1="294.3" y1="203.1" x2="306.5" y2="183.9" class="s-blue" stroke-width="2"/><path d="M309.2 179.6 L308.3 187.6 L302.4 183.9 Z" class="f-blue"/><circle cx="290.5" cy="209.0" r="6" class="f-purple"/><line x1="91.0" y1="45.2" x2="108.7" y2="38.9" class="s-blue" stroke-width="2"/><path d="M113.4 37.2 L107.8 42.9 L105.5 36.4 Z" class="f-blue"/><circle cx="84.4" cy="47.6" r="6" class="f-purple"/><line x1="130.5" y1="81.8" x2="140.6" y2="78.5" class="s-blue" stroke-width="2"/><path d="M145.4 76.9 L139.6 82.5 L137.5 75.9 Z" class="f-blue"/><circle cx="123.8" cy="84.0" r="6" class="f-purple"/><line x1="237.8" y1="120.0" x2="241.3" y2="139.2" class="s-blue" stroke-width="2"/><path d="M242.2 144.1 L237.5 137.6 L244.3 136.4 Z" class="f-blue"/><circle cx="236.6" cy="113.1" r="6" class="f-purple"/><line x1="43.4" y1="87.4" x2="37.5" y2="110.3" class="s-blue" stroke-width="2"/><path d="M36.3 115.1 L34.7 107.3 L41.4 109.0 Z" class="f-blue"/><circle cx="45.1" cy="80.7" r="6" class="f-purple"/><line x1="116.5" y1="190.1" x2="104.0" y2="175.2" class="s-blue" stroke-width="2"/><path d="M100.8 171.3 L108.1 174.6 L102.8 179.1 Z" class="f-blue"/><circle cx="121.0" cy="195.4" r="6" class="f-purple"/><line x1="278.2" y1="73.9" x2="289.4" y2="57.0" class="s-blue" stroke-width="2"/><path d="M292.2 52.9 L291.1 60.8 L285.3 57.0 Z" class="f-blue"/><circle cx="274.3" cy="79.7" r="6" class="f-purple"/><line x1="164.2" y1="56.3" x2="157.9" y2="71.7" class="s-blue" stroke-width="2"/><path d="M156.0 76.3 L155.5 68.3 L162.0 71.0 Z" class="f-blue"/><circle cx="166.9" cy="49.8" r="6" class="f-purple"/><line x1="253.0" y1="90.0" x2="302.8" y2="123.2" class="s-gray" stroke-width="2" stroke-dasharray="4 3"/><path d="M307.0 126.0 L299.1 124.9 L302.9 119.1 Z" class="f-gray"/><line x1="309.0" y1="133.0" x2="259.1" y2="167.2" class="s-red" stroke-width="2"/><path d="M255.0 170.0 L259.0 163.1 L262.9 168.8 Z" class="f-red"/><circle cx="313" cy="130" r="6" class="f-purple"/><line x1="324.0" y1="130.0" x2="355.0" y2="130.0" class="s-red" stroke-width="2"/><path d="M360.0 130.0 L352.8 133.5 L352.8 126.5 Z" class="f-red"/><text x="368" y="108">each wall hit</text><text x="368" y="126">is a tiny push</text><text x="368" y="160" class="t-red">~10²³ hits per cm²</text><text x="368" y="178" class="t-red">each second</text><text x="368" y="196" class="t-red">= steady pressure</text><text x="170.0" y="264" text-anchor="middle" class="t-gray">mostly empty space; arrows = velocities</text></svg>',
          alt: 'A box containing thirteen widely spaced gas particles, each with a velocity arrow pointing in a random direction. One particle bounces off the right wall, and an arrow on the outside of the wall shows the push it gives.',
          caption: 'The kinetic-molecular picture. Pressure is not a property of any one particle — it is the combined push of an enormous number of wall collisions.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this model matters',
          text: 'Every gas law in this lesson is a consequence of these four statements. Squeeze the gas and particles hit the walls more often (Boyle). Heat it and they hit harder and more often (Charles, Gay-Lussac). Add particles and there are more hits (Avogadro). When a law seems arbitrary, run the particle picture in your head and it will make sense.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A gas in a game loop',
          text: 'A 2D particle simulation is the KMT made literal: each frame, move every particle by `velocity * dt` and flip the velocity component when it hits a wall. Add up the momentum each bounce delivers to the walls ($2mv$ per hit) and divide by time and wall length — that is the simulated pressure. Halve the box and you will measure double the pressure: Boyle\'s law falls out of the code without being programmed in.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Why can you squeeze a syringe full of air to a fraction of its volume, but barely compress a syringe full of water?',
      options: [
        { text: 'Gas particles are much smaller than liquid particles', why: 'Steam and liquid water are made of identical $\\ce{H2O}$ molecules. The particles are the same size; what differs is the space between them.' },
        { text: 'Gas particles shrink when they are squeezed', why: 'Molecules do not shrink under ordinary pressures. Compression only reduces the empty space between them.' },
        { text: 'A gas is mostly empty space between its particles', correct: true, why: 'Exactly: compressing a gas just pushes particles into the empty space. In a liquid the particles are already touching, so there is almost nowhere for them to go.' },
        { text: 'Gas particles attract each other strongly and pull together', why: 'The KMT assumes the opposite — gas particles essentially ignore each other. Strong attractions are what hold liquids together.' },
      ],
      explanation: 'In air at room conditions, the molecules occupy roughly $0.1\\%$ of the volume; the rest is empty space. Pushing the plunger simply crowds the molecules into some of that space. In liquid water the molecules are in contact, so compression would mean squeezing the molecules themselves — which takes enormous pressure.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Pressure and its units',
      blocks: [
        {
          type: 'definition',
          term: 'Pressure',
          text: '[[pressure|Pressure]] is force per unit area: $P = \\frac{F}{A}$. A gas exerts pressure because its particles constantly strike every surface they touch. The SI unit is the pascal, $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$ — a tiny pressure, so chemists usually use kilopascals.',
        },
        {
          type: 'p',
          text: 'You live at the bottom of an ocean of air. The weight of the atmosphere above each square meter pushes with about $101\\ 000\\ \\text{N}$ — the weight of a 10-ton truck per square meter. In 1643 Evangelista Torricelli measured it with a tube of mercury: the air pressing on an open dish holds up a column of mercury about $760\\ \\text{mm}$ tall, with nothing but vacuum above it.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="20 10 330 290" xmlns="http://www.w3.org/2000/svg"><path d="M60 250 L60 290 L300 290 L300 250" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="61" y="262" width="238" height="27" class="f-gray" fill-opacity="0.55"/><rect x="166" y="80" width="18" height="194" class="f-gray" fill-opacity="0.9"/><path d="M163 275 L163 30 Q175 18 187 30 L187 275" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="230" y="58">vacuum (no air)</text><line x1="226" y1="54" x2="190" y2="50" stroke="currentColor" stroke-width="1"/><text x="230" y="140">mercury (Hg)</text><line x1="226" y1="136" x2="190" y2="140" stroke="currentColor" stroke-width="1"/><line x1="130" y1="80" x2="130" y2="262" class="s-blue" stroke-width="2"/><path d="M130 80 L125 92 L135 92 Z M130 262 L125 250 L135 250 Z" class="f-blue"/><line x1="122" y1="80" x2="163" y2="80" class="s-blue" stroke-dasharray="3 3"/><text x="118" y="168" text-anchor="end" class="t-blue">760 mm</text><text x="118" y="186" text-anchor="end" class="t-blue">at sea level</text><line x1="80" y1="205" x2="80" y2="252" class="s-red" stroke-width="2"/><path d="M80 260 L75 249 L85 249 Z" class="f-red"/><line x1="105" y1="205" x2="105" y2="252" class="s-red" stroke-width="2"/><path d="M105 260 L100 249 L110 249 Z" class="f-red"/><line x1="230" y1="205" x2="230" y2="252" class="s-red" stroke-width="2"/><path d="M230 260 L225 249 L235 249 Z" class="f-red"/><line x1="262" y1="205" x2="262" y2="252" class="s-red" stroke-width="2"/><path d="M262 260 L257 249 L267 249 Z" class="f-red"/><text x="250" y="196" text-anchor="middle" class="t-red">air pushes down</text></svg>',
          alt: 'A mercury barometer: a sealed glass tube standing upside down in a dish of mercury. The mercury column in the tube is 760 millimeters tall with vacuum above it, and arrows show the air pushing down on the mercury in the dish.',
          caption: 'A mercury barometer. Air pushing on the open dish balances the weight of the mercury column, so the column height *is* a pressure reading — hence the unit mmHg.',
          maxWidth: 360,
        },
        {
          type: 'table',
          headers: ['Unit', 'Equal to 1 atm', 'Where you see it'],
          rows: [
            ['atmosphere (atm)', '$1\\ \\text{atm}$ (exact)', 'chemistry problems'],
            ['kilopascal (kPa)', '$101.325\\ \\text{kPa}$ (exact)', 'SI, weather maps (as hPa)'],
            ['millimeters of mercury (mmHg)', '$760\\ \\text{mmHg}$ (exact)', 'blood pressure, barometers'],
            ['torr', '$760\\ \\text{torr}$ (exact)', 'vacuum work; $1\\ \\text{torr} = 1\\ \\text{mmHg}$'],
            ['pounds per square inch (psi)', '$14.7\\ \\text{psi}$', 'tires, scuba tanks, US gauges'],
          ],
          caption: 'Because these are definitions, they never limit significant figures.',
        },
        {
          type: 'derivation',
          title: 'Convert $2.50\\ \\text{atm}$ to kPa and to mmHg',
          steps: [
            { tex: '2.50\\ \\cancel{\\text{atm}} \\times \\frac{101.325\\ \\text{kPa}}{1\\ \\cancel{\\text{atm}}} = 253\\ \\text{kPa}', why: 'Build the [[conversion-factor]] from $1\\ \\text{atm} = 101.325\\ \\text{kPa}$ with atm on the bottom so it cancels. Round to 3 significant figures.' },
            { tex: '2.50\\ \\cancel{\\text{atm}} \\times \\frac{760\\ \\text{mmHg}}{1\\ \\cancel{\\text{atm}}} = 1.90 \\times 10^{3}\\ \\text{mmHg}', why: 'Same pattern with $1\\ \\text{atm} = 760\\ \\text{mmHg}$. Scientific notation shows that the answer has 3 significant figures.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Gauge pressure vs absolute pressure',
          text: 'A tire gauge reads **zero** for a flat tire, even though the air inside is at $14.7\\ \\text{psi}$ (1 atm). Gauges measure pressure *above* the atmosphere. The gas laws need **absolute** pressure: $P_{\\text{abs}} = P_{\\text{gauge}} + P_{\\text{atm}}$. A tire reading $32\\ \\text{psi}$ really holds $32 + 14.7 = 46.7\\ \\text{psi}$ absolute.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Pressure under water',
          text: 'Water is heavy: every $10\\ \\text{m}$ ($33\\ \\text{ft}$) of seawater adds about $1\\ \\text{atm}$. A diver at $10\\ \\text{m}$ feels $2\\ \\text{atm}$ absolute, at $20\\ \\text{m}$ about $3\\ \\text{atm}$, at $30\\ \\text{m}$ about $4\\ \\text{atm}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Air pressure in Denver (elevation about 1600 m) is typically $632\\ \\text{mmHg}$. Express this in kilopascals, to 3 significant figures. Use $760\\ \\text{mmHg} = 101.325\\ \\text{kPa}$.',
      hint: 'Multiply by the conversion factor $\\frac{101.325\\ \\text{kPa}}{760\\ \\text{mmHg}}$.',
      answer: '632*101.325/760',
      answerTex: '84.3\\ \\text{kPa}',
      tolerance: 0.06,
      unit: 'kPa',
      explanation: '$632\\ \\cancel{\\text{mmHg}} \\times \\frac{101.325\\ \\text{kPa}}{760\\ \\cancel{\\text{mmHg}}} = 84.3\\ \\text{kPa}$, or about $0.832\\ \\text{atm}$. Air at altitude is thinner because there is less atmosphere stacked on top of you — and that is why water boils at a lower temperature in Denver and why you breathe harder there.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Boyle\'s law: squeeze it, the pressure rises',
      blocks: [
        {
          type: 'p',
          text: 'Hold the temperature and the amount of gas fixed, and change the volume. Halve the volume and the same particles now have half the room: each one reaches a wall twice as often, so the pressure doubles. Pressure and volume are **inversely proportional**.',
        },
        {
          type: 'theorem',
          name: 'Boyle\'s law (constant $T$ and $n$)',
          tex: 'PV = k \\qquad\\Longleftrightarrow\\qquad P_1V_1 = P_2V_2',
          text: '[[boyles-law|Boyle\'s law]]: the product $PV$ stays constant, so any change in one is exactly undone by the other.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 10],
          functions: [{ expr: 'k/x', label: '$P = k/V$', color: 'blue', domain: [0.2, 10] }],
          segments: [
            { from: ['v', 0], to: ['v', 'k/v'], color: 'orange', dashed: true },
            { from: [0, 'k/v'], to: ['v', 'k/v'], color: 'orange', dashed: true },
          ],
          points: [{ x: 'v', y: 'k/v', color: 'orange' }],
          sliders: [
            { name: 'k', min: 2, max: 20, step: 0.5, value: 8, label: '$k = PV$ (L·atm)' },
            { name: 'v', min: 1, max: 10, step: 0.1, value: 4, label: 'volume $V$ (L)' },
          ],
          readouts: [
            { label: 'pressure $P = k/V$ (atm) $\\approx$', expr: 'k/v', digits: 2 },
            { label: '$P \\times V =$', expr: 'v*(k/v)', digits: 2 },
          ],
          caption: 'Pressure (atm, vertical) against volume (L, horizontal): a hyperbola. Drag $V$ — the dashed orange lines and the axes outline a rectangle of area $P \\times V$, and that area never changes. A bigger $k$ (more gas, or hotter gas) moves the whole curve outward.',
        },
        {
          type: 'derivation',
          title: 'Why divers never hold their breath on the way up',
          steps: [
            { tex: 'P_1 = 4.0\\ \\text{atm},\\ V_1 = 5.0\\ \\text{L};\\quad P_2 = 1.0\\ \\text{atm}', why: 'At $30\\ \\text{m}$ the absolute pressure is about $4.0\\ \\text{atm}$ ($1$ from the air plus $3$ from the water). The diver fills her lungs with $5.0\\ \\text{L}$ of air from the regulator, then heads for the surface.' },
            { tex: 'V_2 = \\frac{P_1V_1}{P_2}', why: 'Boyle\'s law solved for the new volume. Body temperature stays constant, and a held breath traps a fixed amount of gas.' },
            { tex: 'V_2 = \\frac{(4.0\\ \\cancel{\\text{atm}})(5.0\\ \\text{L})}{1.0\\ \\cancel{\\text{atm}}} = 20.\\ \\text{L}', why: 'The pressure drops by a factor of $4$, so the volume grows by a factor of $4$.' },
          ],
          result: 'The trapped air would try to expand to $20\\ \\text{L}$ — far beyond the roughly $6\\ \\text{L}$ a pair of lungs can hold. That is how breath-holding ascents rupture lungs, and why the first rule of scuba is to breathe continuously, especially while ascending.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sanity-check the direction',
          text: 'Before calculating, decide whether the answer should be bigger or smaller. Lower pressure → bigger volume. If your arithmetic says otherwise, you multiplied by the ratio upside down.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A sealed, flexible bag holds $12.0\\ \\text{L}$ of air at the surface ($1.00\\ \\text{atm}$). A diver carries it down to $25\\ \\text{m}$, where the absolute pressure is $3.50\\ \\text{atm}$. Assuming constant temperature, what is the bag\'s volume there? Give 3 significant figures.',
      hint: '$P_1V_1 = P_2V_2$. Higher pressure means a smaller volume.',
      label: '$V_2 =$',
      answer: '12.0*1.00/3.50',
      answerTex: '3.43\\ \\text{L}',
      tolerance: 0.006,
      unit: 'L',
      explanation: '$V_2 = \\frac{P_1V_1}{P_2} = \\frac{(1.00\\ \\text{atm})(12.0\\ \\text{L})}{3.50\\ \\text{atm}} = 3.43\\ \\text{L}$. The pressure went up by a factor of $3.5$, so the volume went down by the same factor. This is why a diver\'s buoyancy vest and wetsuit (full of tiny gas bubbles) lose buoyancy as she descends.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Kelvin and Charles\'s law',
      blocks: [
        {
          type: 'p',
          text: 'Heat a gas at constant pressure and it expands: faster particles hit the walls harder, so the gas pushes outward until the extra volume brings the pressure back down. Measure volume against Celsius temperature for any gas and you get a straight line. Extend those lines to lower temperatures and something remarkable happens: **every** gas\'s line hits zero volume at the same temperature, $-273.15\\ ^\\circ\\text{C}$.',
        },
        {
          type: 'graph',
          x: [-300, 200],
          y: [0, 3],
          xStep: 50,
          yStep: 0.5,
          functions: [
            { expr: 'a(x + 273.15)/273.15', label: 'sample 1', color: 'blue', domain: [-100, 200] },
            { expr: 'a(x + 273.15)/273.15', color: 'blue', dashed: true, domain: [-273.15, -100] },
            { expr: '0.5a(x + 273.15)/273.15', label: 'sample 2 (half as much gas)', color: 'purple', domain: [-100, 200] },
            { expr: '0.5a(x + 273.15)/273.15', color: 'purple', dashed: true, domain: [-273.15, -100] },
          ],
          vlines: [{ x: -273.15, label: '−273.15 °C = 0 K', color: 'red' }],
          points: [{ x: -273.15, y: 0, color: 'red' }],
          sliders: [{ name: 'a', min: 0.5, max: 2.5, step: 0.1, value: 1.5, label: 'volume at $0\\ ^\\circ\\text{C}$ (L)' }],
          caption: 'Volume (L) against temperature (°C). Solid: measured range. Dashed: extrapolation (real gases liquefy before they get there). However you set the slider, every line aims at the same point: $-273.15\\ ^\\circ\\text{C}$.',
        },
        {
          type: 'p',
          text: 'That temperature is [[chem-absolute-zero]], where particle motion is at its minimum and a gas would have no thermal energy left to push with. Lord Kelvin proposed a scale that starts there. A kelvin is the same size as a Celsius degree; the scale is just shifted:',
        },
        {
          type: 'math',
          tex: 'T(\\text{K}) = T(^\\circ\\text{C}) + 273.15',
          caption: 'No degree sign on kelvin, and never negative. When temperatures are given to whole degrees, adding $273$ is fine.',
        },
        {
          type: 'theorem',
          name: 'Charles\'s law (constant $P$ and $n$)',
          tex: 'V = kT \\qquad\\Longleftrightarrow\\qquad \\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\quad (T\\ \\text{in kelvin})',
          text: '[[charles-law|Charles\'s law]]: volume is **directly proportional** to kelvin temperature.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why gas laws demand kelvin',
          text: 'A proportion $V = kT$ says "double $T$, double $V$". That only makes sense if $T = 0$ means *no* thermal motion. Celsius zero is just the freezing point of water — there is plenty of motion left. Warming from $10\\ ^\\circ\\text{C}$ to $20\\ ^\\circ\\text{C}$ "doubles" the Celsius number but raises the kelvin temperature from $283$ to $293\\ \\text{K}$, only $3.5\\%$, and the volume grows $3.5\\%$. In Celsius, $-10\\ ^\\circ\\text{C}$ would even predict a negative volume.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong (Celsius)',
            tone: 'bad',
            tex: ['V_2 = 2.00\\ \\text{L} \\times \\frac{-196}{25} = -15.7\\ \\text{L}'],
            text: 'A negative volume is the giveaway.',
          },
          right: {
            title: 'Right (kelvin)',
            tone: 'good',
            tex: ['V_2 = 2.00\\ \\text{L} \\times \\frac{77\\ \\text{K}}{298\\ \\text{K}} = 0.517\\ \\text{L}'],
            text: 'A balloon dunked in liquid nitrogen ($-196\\ ^\\circ\\text{C} = 77\\ \\text{K}$) shrinks to about a quarter of its size — then reinflates as it warms.',
          },
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'If you heat a gas at constant pressure from $20\\ ^\\circ\\text{C}$ to $40\\ ^\\circ\\text{C}$, its volume doubles.',
      answer: false,
      explanation: 'Volume is proportional to the **kelvin** temperature. $20\\ ^\\circ\\text{C} = 293\\ \\text{K}$ and $40\\ ^\\circ\\text{C} = 313\\ \\text{K}$, so the volume grows by a factor of $\\frac{313}{293} = 1.068$ — about $7\\%$, not $100\\%$. To double the volume of a gas starting at $293\\ \\text{K}$, you would have to heat it to $586\\ \\text{K}$ ($313\\ ^\\circ\\text{C}$).',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Gay-Lussac\'s and Avogadro\'s laws',
      blocks: [
        {
          type: 'p',
          text: 'Two more single-variable relationships complete the set. If the container is rigid (constant volume), heating the gas cannot make it expand, so the faster particles simply hit the walls harder and more often: pressure rises in proportion to kelvin temperature.',
        },
        {
          type: 'theorem',
          name: 'Gay-Lussac\'s law (constant $V$ and $n$)',
          tex: '\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\quad (T\\ \\text{in kelvin})',
        },
        {
          type: 'derivation',
          title: 'Tire pressure on a cold morning',
          steps: [
            { tex: 'P_1 = 32\\ \\text{psi} + 14.7\\ \\text{psi} = 46.7\\ \\text{psi (absolute)}', why: 'The tire was set to $32\\ \\text{psi}$ on the gauge in a $20\\ ^\\circ\\text{C}$ garage. Gas laws need **absolute** pressure, so add atmospheric pressure.' },
            { tex: 'T_1 = 20 + 273 = 293\\ \\text{K},\\quad T_2 = -15 + 273 = 258\\ \\text{K}', why: 'Convert both temperatures to kelvin. Overnight it drops to $-15\\ ^\\circ\\text{C}$.' },
            { tex: 'P_2 = P_1 \\cdot \\frac{T_2}{T_1} = 46.7\\ \\text{psi} \\times \\frac{258\\ \\cancel{\\text{K}}}{293\\ \\cancel{\\text{K}}} = 41.1\\ \\text{psi}', why: 'A tire\'s volume barely changes, so Gay-Lussac\'s law applies. Colder → lower pressure, so the ratio is less than $1$.' },
            { tex: 'P_{2,\\text{gauge}} = 41.1 - 14.7 = 26.4\\ \\text{psi}', why: 'Subtract atmospheric pressure to get back to what the gauge will show.' },
          ],
          result: 'The gauge drops from $32$ to about $26\\ \\text{psi}$ — no leak, just physics. That is why vehicle tire checks are done cold and why the low-pressure warning light comes on during the first cold snap of the year.',
        },
        {
          type: 'p',
          text: 'Finally, add more gas at constant temperature and pressure and the volume grows in proportion: twice the particles need twice the room to keep the same wall-hit rate. This is **Avogadro\'s law**, $\\frac{V_1}{n_1} = \\frac{V_2}{n_2}$. Its surprising consequence: equal volumes of *any* gases at the same $T$ and $P$ contain equal numbers of particles, whether the particles are light $\\ce{H2}$ or heavy $\\ce{CO2}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why particle identity does not matter',
          text: 'At a given temperature all gases have the same average kinetic energy, $\\tfrac12 mv^2$. Heavy particles move more slowly and light ones faster, in exactly the way that makes each particle deliver the same average push to the walls. So pressure counts particles, not their mass.',
        },
        {
          type: 'table',
          headers: ['Law', 'Held constant', 'Relationship'],
          rows: [
            ['Boyle', '$T$, $n$', '$P_1V_1 = P_2V_2$ (inverse)'],
            ['Charles', '$P$, $n$', '$V_1/T_1 = V_2/T_2$ (direct)'],
            ['Gay-Lussac', '$V$, $n$', '$P_1/T_1 = P_2/T_2$ (direct)'],
            ['Avogadro', '$T$, $P$', '$V_1/n_1 = V_2/n_2$ (direct)'],
          ],
          caption: 'Four views of one gas. Temperatures always in kelvin; pressures always absolute.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A sealed, rigid steel cylinder holds gas at $3.00\\ \\text{atm}$ and $27\\ ^\\circ\\text{C}$. It is moved outdoors to $-3\\ ^\\circ\\text{C}$. A student calculates the new pressure. Tap the first line that is wrong.',
      lines: [
        'Volume and moles are fixed, so $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$.',
        '$T_1 = 27 + 273 = 300.\\ \\text{K}$ and $T_2 = -3 + 273 = 270.\\ \\text{K}$',
        '$P_2 = P_1 \\cdot \\frac{T_1}{T_2}$',
        '$P_2 = (3.00\\ \\text{atm})\\left(\\frac{300.}{270.}\\right) = 3.33\\ \\text{atm}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 solves the proportion upside down. From $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$, multiplying both sides by $T_2$ gives $P_2 = P_1 \\cdot \\frac{T_2}{T_1}$. So $P_2 = (3.00)\\left(\\frac{270.}{300.}\\right) = 2.70\\ \\text{atm}$. The direction check catches it immediately: the gas got colder, so its pressure must go **down**, but $3.33\\ \\text{atm}$ is up.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The combined gas law',
      blocks: [
        {
          type: 'p',
          text: 'Real situations rarely hold everything constant. On an aircraft climb both the pressure and the temperature change. Since $V \\propto \\frac{1}{P}$ and $V \\propto T$ for a fixed amount of gas, $V \\propto \\frac{T}{P}$, which means $\\frac{PV}{T}$ is constant.',
        },
        {
          type: 'theorem',
          name: 'Combined gas law (constant $n$)',
          tex: '\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}',
          text: 'The [[chem-combined-gas-law]]. Anything that does not change cancels from both sides, leaving Boyle\'s, Charles\'s or Gay-Lussac\'s law — so this is the only one of the three you really need to memorize.',
        },
        {
          type: 'derivation',
          title: 'Why a sealed MRE pouch puffs up on a flight',
          steps: [
            { tex: 'P_1 = 760\\ \\text{mmHg},\\ V_1 = 50.0\\ \\text{mL},\\ T_1 = 25 + 273 = 298\\ \\text{K}', why: 'The pouch was sealed at sea level with $50.0\\ \\text{mL}$ of air trapped inside, at $25\\ ^\\circ\\text{C}$.' },
            { tex: 'P_2 = 565\\ \\text{mmHg},\\ T_2 = 20 + 273 = 293\\ \\text{K}', why: 'Transport aircraft cabins are pressurized only to the equivalent of about $8000\\ \\text{ft}$ ($\\approx 565\\ \\text{mmHg}$) to limit stress on the fuselage; the cabin is a bit cooler. The flexible pouch lets the inside pressure match the cabin.' },
            { tex: 'V_2 = V_1 \\cdot \\frac{P_1}{P_2} \\cdot \\frac{T_2}{T_1}', why: 'Solve the combined law for $V_2$. Think of each ratio as a correction: pressure ratio first, temperature ratio second.' },
            { tex: 'V_2 = 50.0\\ \\text{mL} \\times \\frac{760\\ \\cancel{\\text{mmHg}}}{565\\ \\cancel{\\text{mmHg}}} \\times \\frac{293\\ \\cancel{\\text{K}}}{298\\ \\cancel{\\text{K}}} = 66.1\\ \\text{mL}', why: 'Lower pressure makes the gas expand (ratio $> 1$); cooler air shrinks it slightly (ratio $< 1$). Units cancel, so the pressure unit only has to match on top and bottom.' },
          ],
          result: 'The trapped air expands by about a third, so the pouch puffs up. On a helicopter or an unpressurized cargo flight at higher altitude it swells even more; after landing, the same physics crumples an empty water bottle sealed at altitude.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Gas-law problems are graded on setup. Write a table of $P_1, V_1, T_1$ and $P_2, V_2, T_2$, convert every temperature to kelvin, make sure both pressures (and both volumes) use the same unit, cross out what stays constant, then solve algebraically *before* plugging in numbers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Artillery meteorological teams launch helium weather balloons to measure wind and temperature aloft. A balloon holds $1.50 \\times 10^{3}\\ \\text{L}$ at launch ($1.00\\ \\text{atm}$, $20\\ ^\\circ\\text{C}$). What is its volume, in liters, at an altitude where $P = 0.350\\ \\text{atm}$ and $T = -30\\ ^\\circ\\text{C}$? Give 3 significant figures (for example `3210`).',
      hint: '$V_2 = V_1 \\cdot \\frac{P_1}{P_2} \\cdot \\frac{T_2}{T_1}$, with $T_1 = 293\\ \\text{K}$ and $T_2 = 243\\ \\text{K}$.',
      label: '$V_2 =$',
      answer: '1500*(1.00/0.350)*(243.15/293.15)',
      answerTex: '3.55 \\times 10^{3}\\ \\text{L}',
      tolerance: 6,
      unit: 'L',
      explanation: '$V_2 = 1.50 \\times 10^{3}\\ \\text{L} \\times \\frac{1.00\\ \\text{atm}}{0.350\\ \\text{atm}} \\times \\frac{243\\ \\text{K}}{293\\ \\text{K}} = 3.55 \\times 10^{3}\\ \\text{L}$. The pressure drop alone would nearly triple the volume ($\\times 2.86$); the cold shrinks it by about $17\\%$ ($\\times 0.829$). Weather balloons keep expanding as they rise until the rubber bursts, typically $20$–$35\\ \\text{km}$ up.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'The ideal gas law: $PV = nRT$',
      blocks: [
        {
          type: 'p',
          text: 'Put all four proportionalities together. Volume is proportional to $n$ (Avogadro) and to $T$ (Charles), and inversely proportional to $P$ (Boyle):',
        },
        {
          type: 'math',
          tex: 'V \\propto \\frac{nT}{P} \\;\\Rightarrow\\; V = R\\,\\frac{nT}{P} \\;\\Rightarrow\\; PV = nRT',
          caption: 'The proportionality constant $R$ is the same for every gas — the universal gas constant.',
        },
        {
          type: 'theorem',
          name: 'Ideal gas law',
          tex: '\\begin{gathered} PV = nRT \\\\ R = 0.08206\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}} = 8.314\\ \\frac{\\text{J}}{\\text{mol}\\cdot\\text{K}} \\end{gathered}',
          text: 'The [[ideal-gas-law]] relates all four variables at once. Use $R = 0.08206$ with $P$ in atm and $V$ in L; use $R = 8.314$ with $P$ in Pa and $V$ in $\\text{m}^3$ (a $\\text{Pa}\\cdot\\text{m}^3$ *is* a joule) — or, conveniently, with $P$ in kPa and $V$ in L. $T$ is always in kelvin and $n$ in moles.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why there are two values of $R$',
          text: '$R$ is one physical constant written in two unit systems, just as one length can be $1\\ \\text{in}$ or $2.54\\ \\text{cm}$. Converting: $0.08206\\ \\text{L·atm} \\times \\frac{101.325\\ \\text{J}}{1\\ \\text{L·atm}} = 8.314\\ \\text{J}$. Pick the $R$ whose units match your data, and the units in $PV = nRT$ cancel cleanly — a built-in check.',
        },
        {
          type: 'derivation',
          title: 'How much air is in a scuba tank? (11.1 L internal volume, 204 atm, 20 °C)',
          steps: [
            { tex: 'n = \\frac{PV}{RT}', why: 'Solve $PV = nRT$ for the unknown, the number of moles.' },
            { tex: 'T = 20 + 273.15 = 293.15\\ \\text{K}', why: 'Kelvin, always. A full aluminum tank is filled to $3000\\ \\text{psi} \\approx 204\\ \\text{atm}$.' },
            { tex: 'n = \\frac{(204\\ \\cancel{\\text{atm}})(11.1\\ \\cancel{\\text{L}})}{\\left(0.08206\\ \\frac{\\cancel{\\text{L}}\\cdot\\cancel{\\text{atm}}}{\\text{mol}\\cdot\\cancel{\\text{K}}}\\right)(293.15\\ \\cancel{\\text{K}})}', why: 'Substitute. L, atm and K all cancel, leaving $\\frac{1}{1/\\text{mol}} = \\text{mol}$.' },
            { tex: 'n = 94.1\\ \\text{mol}', why: '$2264 / 24.06 = 94.1$, with 3 significant figures.' },
          ],
          result: 'About $94\\ \\text{mol}$ of air (roughly $2.7\\ \\text{kg}$). Released at $1\\ \\text{atm}$ it would fill $2.26 \\times 10^3\\ \\text{L} \\approx 80\\ \\text{ft}^3$ — which is where the common "aluminum 80" tank gets its name.',
        },
        {
          type: 'deepdive',
          title: 'When is a gas not ideal?',
          blocks: [
            {
              type: 'p',
              text: 'The KMT assumes particles take up no space and do not attract each other. Both assumptions fail when particles are crowded together: at **high pressure** (the particles\' own volume matters) and **low temperature** (slow particles feel each other\'s attractions, the first step toward condensing into a liquid). At $204\\ \\text{atm}$ the ideal gas law is already a few percent off, and the tank\'s rated capacity is about $77\\ \\text{ft}^3$ rather than $80$. General Chemistry corrects for this with the van der Waals equation. Near room conditions the ideal gas law is accurate to well under $1\\%$.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Using $PV = nRT$ with $R = 0.08206\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}}$, what units must each quantity be in?',
      template: '$P$ in ___, $V$ in ___, $n$ in ___, and $T$ in ___.',
      blanks: [{ answers: ['atm'] }, { answers: ['L'] }, { answers: ['mol'] }, { answers: ['K'] }],
      wordBank: ['atm', 'L', 'mol', 'K', 'mmHg', 'mL', 'g', '°C'],
      explanation: 'The units of $R$ tell you: $\\text{L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$. For them to cancel, pressure must be in atmospheres, volume in liters, amount in moles and temperature in kelvin. Pressures in mmHg must be divided by $760$, volumes in mL divided by $1000$, masses converted to moles with the molar mass, and Celsius temperatures increased by $273.15$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'What pressure, in atm, do $2.00\\ \\text{mol}$ of $\\ce{O2}$ exert in a $10.0\\ \\text{L}$ steel cylinder at $25\\ ^\\circ\\text{C}$? Use $R = 0.08206\\ \\text{L·atm/(mol·K)}$ and give 3 significant figures.',
      hint: '$P = \\frac{nRT}{V}$ with $T = 298\\ \\text{K}$.',
      label: '$P =$',
      answer: '2.00*0.08206*298.15/10.0',
      answerTex: '4.89\\ \\text{atm}',
      tolerance: 0.006,
      unit: 'atm',
      explanation: '$P = \\frac{nRT}{V} = \\frac{(2.00\\ \\text{mol})(0.08206\\ \\text{L·atm/(mol·K)})(298.15\\ \\text{K})}{10.0\\ \\text{L}} = 4.89\\ \\text{atm}$. Check the units: mol and K cancel, L cancels, leaving atm. Forgetting the kelvin conversion (using $25$) would give $0.410\\ \\text{atm}$ — a pressure lower than the air outside, which makes no sense for gas packed into a cylinder.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'STP and molar volume',
      blocks: [
        {
          type: 'p',
          text: 'Because gas volume depends so strongly on conditions, chemists compare gases at an agreed reference point, [[stp|standard temperature and pressure (STP)]]. **In this course, STP means $0\\ ^\\circ\\text{C}$ ($273.15\\ \\text{K}$) and exactly $1\\ \\text{atm}$** — the convention used in most US textbooks.',
        },
        {
          type: 'derivation',
          title: 'The volume of one mole of ideal gas at STP',
          steps: [
            { tex: 'V = \\frac{nRT}{P}', why: 'Solve the ideal gas law for volume.' },
            { tex: 'V = \\frac{(1\\ \\text{mol})(0.08206\\ \\text{L·atm/(mol·K)})(273.15\\ \\text{K})}{1\\ \\text{atm}}', why: 'One mole, at STP.' },
            { tex: 'V = 22.4\\ \\text{L}', why: '$0.08206 \\times 273.15 = 22.41$.' },
          ],
          result: 'At STP, **one mole of any ideal gas occupies $22.4\\ \\text{L}$** — about the volume of a large lunch cooler — whether it is hydrogen or carbon dioxide (Avogadro\'s law in action).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Check which STP you are given',
          text: 'Since 1982 IUPAC has defined standard pressure as $1\\ \\text{bar} = 100\\ \\text{kPa}$ (slightly less than $1\\ \\text{atm}$), which makes the molar volume at $0\\ ^\\circ\\text{C}$ equal to $22.7\\ \\text{L}$. Many books, exams and this course still use $1\\ \\text{atm}$ and $22.4\\ \\text{L}$. If in doubt, skip the shortcut and use $PV = nRT$ with the stated conditions.',
        },
        {
          type: 'p',
          text: 'Molar volume is a new [[conversion-factor]] for stoichiometry: $\\frac{22.4\\ \\text{L}}{1\\ \\text{mol}}$ at STP. It explains why rapid gas-producing reactions are so powerful — a small amount of solid can become a huge volume of gas. An airbag is the classic example:',
        },
        {
          type: 'math',
          tex: '\\ce{2NaN3(s) -> 2Na(s) + 3N2(g)}',
          caption: 'Sodium azide decomposes in about 30 milliseconds when triggered by a crash sensor (2 Na and 6 N on each side).',
        },
        {
          type: 'derivation',
          title: 'Volume of $\\ce{N2}$ at STP from $65.0\\ \\text{g}$ of $\\ce{NaN3}$ ($65.01\\ \\text{g/mol}$)',
          steps: [
            { tex: '65.0\\ \\cancel{\\text{g}\\ \\ce{NaN3}} \\times \\frac{1\\ \\text{mol}\\ \\ce{NaN3}}{65.01\\ \\cancel{\\text{g}\\ \\ce{NaN3}}} = 1.00\\ \\text{mol}\\ \\ce{NaN3}', why: 'Grams to moles with the molar mass ($22.990 + 3 \\times 14.007$).' },
            { tex: '1.00\\ \\cancel{\\text{mol}\\ \\ce{NaN3}} \\times \\frac{3\\ \\text{mol}\\ \\ce{N2}}{2\\ \\cancel{\\text{mol}\\ \\ce{NaN3}}} = 1.50\\ \\text{mol}\\ \\ce{N2}', why: 'The mole ratio from the balanced equation.' },
            { tex: '1.50\\ \\cancel{\\text{mol}\\ \\ce{N2}} \\times \\frac{22.4\\ \\text{L}}{1\\ \\cancel{\\text{mol}}} = 33.6\\ \\text{L}\\ \\ce{N2}', why: 'Molar volume at STP turns moles of gas into liters.' },
          ],
          result: 'About $35\\ \\text{mL}$ of solid becomes $33.6\\ \\text{L}$ of gas — roughly a thousand-fold expansion in a few hundredths of a second.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'At STP, which gas sample takes up the **largest** volume? (Molar masses: $\\ce{H2}$ $2.0$, $\\ce{He}$ $4.0$, $\\ce{O2}$ $32.0$, $\\ce{CO2}$ $44.0\\ \\text{g/mol}$.)',
      options: [
        { text: '$2.0\\ \\text{g}$ of $\\ce{H2}$', why: 'Hydrogen is the lightest gas, but $2.0\\ \\text{g}$ is only $1.0\\ \\text{mol}$, which is $22.4\\ \\text{L}$. Light particles do not take up more room.' },
        { text: '$4.0\\ \\text{g}$ of $\\ce{He}$', why: '$4.0\\ \\text{g} \\div 4.0\\ \\text{g/mol} = 1.0\\ \\text{mol}$, so $22.4\\ \\text{L}$.' },
        { text: '$16\\ \\text{g}$ of $\\ce{O2}$', why: '$16 \\div 32.0 = 0.50\\ \\text{mol}$, only $11.2\\ \\text{L}$.' },
        { text: '$88\\ \\text{g}$ of $\\ce{CO2}$', correct: true, why: '$88 \\div 44.0 = 2.0\\ \\text{mol}$, so $2.0 \\times 22.4 = 44.8\\ \\text{L}$ — the most moles, so the most volume.' },
      ],
      explanation: 'At the same temperature and pressure, gas volume depends only on the number of moles (Avogadro\'s law), not on the mass or identity of the particles. Convert each mass to moles: $1.0$, $1.0$, $0.50$ and $2.0\\ \\text{mol}$. The carbon dioxide sample has the most particles, so it fills the most space: $44.8\\ \\text{L}$.',
    },
  ],
  takeaways: [
    'A gas is mostly empty space filled with fast, randomly moving particles; pressure is the push of their collisions with the walls.',
    '$1\\ \\text{atm} = 101.325\\ \\text{kPa} = 760\\ \\text{mmHg} = 760\\ \\text{torr}$. Gas laws use absolute pressure: $P_{\\text{abs}} = P_{\\text{gauge}} + P_{\\text{atm}}$.',
    'Temperatures in gas laws must be in kelvin ($T = {}^\\circ\\text{C} + 273.15$), because proportionality only makes sense on a scale that starts at absolute zero.',
    'Boyle: $P_1V_1 = P_2V_2$. Charles: $V/T$ constant. Gay-Lussac: $P/T$ constant. Avogadro: $V/n$ constant. Combined: $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$.',
    'Ideal gas law: $PV = nRT$ with $R = 0.08206\\ \\text{L·atm/(mol·K)}$ or $8.314\\ \\text{J/(mol·K)}$ — match $R$ to your units.',
    'At STP ($0\\ ^\\circ\\text{C}$, $1\\ \\text{atm}$ in this course) one mole of any ideal gas occupies $22.4\\ \\text{L}$.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 9: Gases',
      url: 'https://openstax.org/books/chemistry-2e/pages/9-introduction',
      source: 'openstax',
      note: 'Covers pressure, the gas laws, the ideal gas law and the kinetic-molecular theory with many worked examples.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for "Gas Properties": pump particles into a box, heat it, shrink it, and watch the pressure gauge respond.',
    },
    {
      title: 'Wikipedia — Ideal gas law',
      url: 'https://en.wikipedia.org/wiki/Ideal_gas_law',
      source: 'wikipedia',
      note: 'Shows how the individual gas laws combine and lists $R$ in many unit systems.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The gases unit has worked videos on the ideal gas law and its applications.',
    },
  ],
};
