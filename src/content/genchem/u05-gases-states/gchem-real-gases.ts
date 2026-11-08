import type { Lesson } from '../../types';

const FIG_REAL = `<svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="220" height="190" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="125" r="20" fill="currentColor" class="f-orange" fill-opacity="0.18" stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.5"/><circle cx="95.5" cy="67.0" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="159.6" cy="54.0" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="43.4" cy="126.2" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="45.7" cy="57.1" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="115.2" cy="179.3" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="155.0" cy="199.3" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="223.3" cy="49.7" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="200.3" cy="90.1" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="67.4" cy="138.5" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="165.4" cy="113.0" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="93.6" cy="139.2" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="187.7" cy="158.0" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="175.0" cy="89.8" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="39.7" cy="152.9" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="168.3" cy="140.7" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="196.6" cy="198.8" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="57.4" cy="83.1" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="86.6" cy="110.9" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="147.5" cy="85.6" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="218.8" cy="156.6" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="37.0" cy="187.1" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="64.7" cy="170.1" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="219.5" cy="116.2" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="160.0" cy="174.7" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="134.6" cy="45.1" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="196.6" cy="64.8" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="130" cy="125" r="10" fill="currentColor" class="f-orange"/><text x="130" y="18" text-anchor="middle" font-size="14">High pressure: volume matters</text><text x="130" y="242" text-anchor="middle" font-size="12">dashed circle: space no other</text><text x="130" y="258" text-anchor="middle" font-size="12">center can enter (radius 2r)</text><rect x="280" y="30" width="220" height="190" fill="none" stroke="currentColor" stroke-width="2"/><rect x="496" y="30" width="6" height="190" fill="currentColor" class="f-gray" fill-opacity="0.6"/><text x="390" y="18" text-anchor="middle" font-size="14">Low temperature: attractions</text><circle cx="400" cy="85" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="390" cy="150" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="420" cy="195" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="415" cy="55" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="340" cy="120" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="330" cy="60" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><circle cx="350" cy="190" r="10" fill="currentColor" class="f-purple" fill-opacity="0.75"/><line x1="449.2" y1="117.8" x2="427.0" y2="103.0" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M421.2 99.1 L429.2 99.7 L424.8 106.3 Z" fill="currentColor" class="f-red"/><line x1="447.8" y1="129.4" x2="421.5" y2="138.8" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M414.9 141.1 L420.2 135.0 L422.8 142.5 Z" fill="currentColor" class="f-red"/><line x1="453.6" y1="136.3" x2="438.0" y2="163.5" stroke="currentColor" class="s-red" stroke-width="2"/><path d="M434.5 169.6 L434.5 161.5 L441.5 165.5 Z" fill="currentColor" class="f-red"/><circle cx="460" cy="125" r="10" fill="currentColor" class="f-orange"/><line x1="472" y1="125" x2="486" y2="125" stroke="currentColor" class="s-blue" stroke-width="2.5"/><path d="M492 125 L484 120 L484 130 Z" fill="currentColor" class="f-blue"/><text x="390" y="242" text-anchor="middle" font-size="12" class="t-red">neighbors tug it back:</text><text x="390" y="258" text-anchor="middle" font-size="12" class="t-red">it hits the wall more softly</text></svg>`;

export const lesson: Lesson = {
  id: 'gchem-real-gases',
  title: 'Real Gases',
  summary: 'When and why gases stop being ideal: the compressibility factor, the van der Waals equation and the meaning of a and b, and how the same equation predicts the critical point.',
  minutes: 19,
  objectives: [
    'Explain which ideal-gas assumptions fail at high pressure and at low temperature, and in which direction each failure pushes the pressure',
    'Compute and interpret the compressibility factor $Z = PV/nRT$',
    'Use the van der Waals equation and explain the physical meaning of $a$ and $b$',
    'Compare ideal and van der Waals predictions for the same sample',
    'Derive the van der Waals critical constants with calculus and relate them to liquefaction',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'When gases misbehave',
      blocks: [
        {
          type: 'p',
          text: 'The last lesson derived $PV = nRT$ from two idealizations that are never exactly true: molecules have **no volume**, and they **do not attract** each other. Near room conditions both are excellent approximations, and the ideal gas law is good to well under $1\\%$. Squeeze the gas or cool it, and the cracks show.',
        },
        {
          type: 'figure',
          svg: FIG_REAL,
          alt: 'Left panel: a box crowded with purple molecules at high pressure; one orange molecule is surrounded by a dashed circle of twice its radius, the region no other molecule\'s center can enter. Right panel: an orange molecule moving toward the right wall, with red arrows pulling it back toward three neighbors behind it; text says neighbors tug it back so it hits the wall more softly.',
          caption: 'The two ideal-gas assumptions that fail, and the opposite ways they push the pressure.',
        },
        {
          type: 'list',
          items: [
            '**Finite molecular volume (matters at high pressure).** A mole of $\\ce{N2}$ at $1\\ \\text{atm}$ fills about $24\\ \\text{L}$, and the molecules themselves occupy roughly $0.04\\%$ of it. At $200\\ \\text{atm}$ the gas is squeezed into about $0.12\\ \\text{L}$ and the molecules fill around $8\\%$ of the space. The room left to move in is smaller than $V$, so molecules hit the walls more often than the ideal law predicts: **pressure higher than ideal**.',
            '**Intermolecular attractions (matter at low temperature and moderate density).** A molecule about to hit the wall has neighbors only on one side, and their [[intermolecular-forces|attractions]] tug it backward. It arrives slower and hits more softly: **pressure lower than ideal**. Slow molecules (low $T$) feel the tug most, because they spend longer near each other.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why gases are most ideal when hot and thin',
          text: 'Low pressure means molecules are far apart, so their volume is a tiny fraction of the container and they are rarely close enough to attract. High temperature means their kinetic energy dwarfs the attraction energy, so the tug barely changes their motion. The worst case is cold and dense, which is exactly the recipe for condensing a gas into a liquid.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Under which conditions does a sample of $\\ce{CO2}$ behave most like an ideal gas?',
      options: [
        { text: 'Low temperature and high pressure', why: 'This is the least ideal combination: molecules are crowded together and slow enough to feel each other\'s attractions. It is how $\\ce{CO2}$ is liquefied.' },
        { text: 'High temperature and low pressure', correct: true, why: 'Far apart (molecular volume negligible) and fast (attractions negligible compared with kinetic energy).' },
        { text: 'High temperature and high pressure', why: 'High temperature reduces the effect of attractions, but high pressure makes the molecules\' own volume significant.' },
        { text: 'Low temperature and low pressure', why: 'Low pressure helps, but at low temperature the slow molecules feel attractions more, and the gas may condense.' },
      ],
      explanation: 'The ideal gas law assumes negligible molecular volume (true when the gas is dilute, at low $P$) and negligible attractions (true when kinetic energy is large, at high $T$). Both conditions together give the most ideal behavior.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Measuring non-ideality: the compressibility factor',
      blocks: [
        {
          type: 'p',
          text: 'To measure how far a gas is from ideal, compare the actual $PV$ with what the ideal law predicts for the same $n$ and $T$.',
        },
        {
          type: 'definition',
          term: 'Compressibility factor',
          text: 'The [[gchem-compressibility-factor|compressibility factor]] is $Z = \\dfrac{PV}{nRT} = \\dfrac{PV_m}{RT}$, where $V_m = V/n$ is the molar volume. For an ideal gas $Z = 1$ exactly. $Z < 1$ means attractions dominate (the gas is easier to compress than ideal); $Z > 1$ means molecular volume (repulsion) dominates.',
        },
        {
          type: 'derivation',
          title: '$1.00\\ \\text{mol}$ of a gas in $0.200\\ \\text{L}$ at $300\\ \\text{K}$ exerts $100.\\ \\text{atm}$',
          steps: [
            { tex: 'Z = \\frac{PV}{nRT} = \\frac{(100.\\ \\text{atm})(0.200\\ \\text{L})}{(1.00\\ \\text{mol})(0.08206\\ \\text{L·atm/(mol·K)})(300\\ \\text{K})}', why: 'Substitute the measured values. All units cancel: $Z$ is dimensionless.' },
            { tex: 'Z = \\frac{20.0}{24.62} = 0.812', why: 'Evaluate.' },
          ],
          result: '$Z < 1$: the gas is about $19\\%$ "smaller" than an ideal gas would be at this $T$ and $P$. Attractions are winning. An ideal gas would need $123\\ \\text{atm}$ to fit in the same volume.',
        },
        {
          type: 'graph',
          x: [0, 800],
          y: [0.2, 2],
          xStep: 100,
          yStep: 0.2,
          parametric: [
            { x: '0.08206*k*t/(1 - 0.0266t) - 0.244t^2', y: '1/(1 - 0.0266t) - 0.244t/(0.08206*k)', t: [0, 20], label: '$\\ce{H2}$', color: 'blue' },
            { x: '0.08206*k*t/(1 - 0.0391t) - 1.39t^2', y: '1/(1 - 0.0391t) - 1.39t/(0.08206*k)', t: [0, 20], label: '$\\ce{N2}$', color: 'green' },
            { x: '0.08206*k*t/(1 - 0.0428t) - 2.25t^2', y: '1/(1 - 0.0428t) - 2.25t/(0.08206*k)', t: [0, 20], label: '$\\ce{CH4}$', color: 'orange' },
            { x: '0.08206*k*t/(1 - 0.0427t) - 3.59t^2', y: '1/(1 - 0.0427t) - 3.59t/(0.08206*k)', t: [0, 20], label: '$\\ce{CO2}$', color: 'red' },
          ],
          hlines: [{ y: 1, label: 'ideal gas, Z = 1', color: 'gray' }],
          sliders: [{ name: 'k', min: 310, max: 1000, step: 10, value: 320, label: 'temperature $T$ (K)' }],
          caption: 'Horizontal axis: pressure in atm; vertical: $Z$, as predicted by the van der Waals equation (next card). Every gas starts at $Z = 1$ as $P \\to 0$. Strongly attracting $\\ce{CO2}$ and $\\ce{CH4}$ dip well below 1 at moderate pressure, then rise above 1 when molecular volume takes over. Weakly attracting $\\ce{H2}$ only rises. Heat everything up and the dips flatten toward the ideal line.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Engineers keep the ideal-gas form and just insert $Z$: $PV = ZnRT$. Tables and charts of $Z$ for natural gas, hydrogen and air are standard tools for sizing pipelines, tanks and compressors.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A $2.50\\ \\text{L}$ cylinder holds $10.0\\ \\text{mol}$ of a gas at $25.0\\ ^\\circ\\text{C}$, and the pressure is $106\\ \\text{atm}$. What is the compressibility factor $Z$? Use $R = 0.08206\\ \\text{L·atm/(mol·K)}$; 3 significant figures.',
      hint: '$Z = PV/(nRT)$ with $T = 298.15\\ \\text{K}$.',
      label: '$Z =$',
      answer: '106*2.50/(10.0*0.08206*298.15)',
      answerTex: '1.08',
      tolerance: 0.006,
      explanation: '$Z = \\frac{(106)(2.50)}{(10.0)(0.08206)(298.15)} = \\frac{265}{244.7} = 1.08$. Since $Z > 1$, the gas is harder to compress than an ideal gas: at this density the molecules\' own volume matters more than their attractions. The ideal law would predict only $97.9\\ \\text{atm}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'When a gas has $Z > 1$ at high pressure, the attractive forces between its molecules are dominating its behavior.',
      answer: false,
      explanation: 'Attractions **lower** the pressure (and $Z$) below the ideal value, so $Z < 1$ is the signature of attractions. $Z > 1$ means the finite volume of the molecules dominates: the space actually available to move in is less than $V$, so the gas pushes back harder than an ideal gas. At very high pressure every gas ends up with $Z > 1$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The van der Waals equation',
      blocks: [
        {
          type: 'p',
          text: 'In 1873 Johannes van der Waals patched the ideal gas law, producing the [[gchem-van-der-waals-equation|van der Waals equation]], with one correction for each failed assumption. Start from $P_{\\text{ideal}} V_{\\text{free}} = nRT$ and fix the two pieces.',
        },
        {
          type: 'derivation',
          title: 'Building the equation',
          steps: [
            { tex: 'V_{\\text{free}} = V - nb', why: '**Volume correction.** Each mole of molecules makes a volume $b$ unavailable to the others, so the free volume is $V - nb$. $b$ is in L/mol.' },
            { tex: 'P_{\\text{ideal}} = \\frac{nRT}{V - nb}', why: 'Collisions with the walls behave as if the gas were ideal in the smaller free volume. This is larger than $nRT/V$.' },
            { tex: 'P = P_{\\text{ideal}} - a\\frac{n^2}{V^2}', why: '**Attraction correction.** The pressure drop is proportional to how many molecules hit the wall (∝ $n/V$) times how many neighbors pull each one back (∝ $n/V$): $(n/V)^2$. $a$ is in $\\text{L}^2\\text{·atm/mol}^2$.' },
            { tex: '\\left(P + a\\frac{n^2}{V^2}\\right)(V - nb) = nRT', why: 'Rearrange: the standard form. Solved for pressure it reads $P = \\dfrac{nRT}{V - nb} - \\dfrac{an^2}{V^2}$.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Van der Waals equation',
          tex: '\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT',
          text: 'With $a = b = 0$ it reduces to the ideal gas law. $a$ measures the strength of intermolecular attractions; $b$ measures molecular size.',
        },
        {
          type: 'table',
          headers: ['Gas', '$a$ ($\\text{L}^2\\text{·atm/mol}^2$)', '$b$ (L/mol)', 'Why'],
          rows: [
            ['$\\ce{He}$', '0.0342', '0.0237', 'tiny, barely polarizable'],
            ['$\\ce{H2}$', '0.244', '0.0266', 'only 2 electrons'],
            ['$\\ce{N2}$', '1.39', '0.0391', 'nonpolar, 14 electrons'],
            ['$\\ce{CH4}$', '2.25', '0.0428', 'nonpolar, larger cloud'],
            ['$\\ce{CO2}$', '3.59', '0.0427', 'nonpolar but polarizable'],
            ['$\\ce{NH3}$', '4.17', '0.0371', 'polar, hydrogen bonding'],
            ['$\\ce{H2O}$', '5.46', '0.0305', 'polar, strong hydrogen bonding'],
          ],
          caption: 'Standard textbook van der Waals constants (as tabulated in OpenStax and most general chemistry texts). $a$ tracks the intermolecular forces of the next lesson; $b$ tracks size.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the attraction term is squared',
          text: 'Double the density and twice as many molecules strike each square centimeter of wall per second, **and** each one has twice as many neighbors behind it pulling it back. Two factors of $n/V$ give $(n/V)^2$. That is also why the correction fades so quickly in a dilute gas: at one-tenth the density it is one-hundredth as large.',
        },
        {
          type: 'deepdive',
          title: 'Why $b$ is four times the volume of the molecules',
          blocks: [
            {
              type: 'p',
              text: 'Model molecules as hard spheres of radius $r$. Two molecules\' centers cannot come closer than $2r$, so each pair excludes a sphere of radius $2r$, of volume $\\tfrac{4}{3}\\pi(2r)^3 = 8 \\cdot \\tfrac{4}{3}\\pi r^3$. That excluded volume belongs to a *pair*, so per molecule it is half: $4 \\cdot \\tfrac{4}{3}\\pi r^3$, four times the molecule\'s own volume. Hence $b = 4N_A \\cdot \\tfrac{4}{3}\\pi r^3$. For $\\ce{N2}$, $b = 0.0391\\ \\text{L/mol}$ gives $r \\approx 157\\ \\text{pm}$, a reasonable molecular size.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Complete the interpretation of the van der Waals constants.',
      template: 'The constant $a$ corrects for ___ and makes the real pressure ___ than ideal. The constant $b$ corrects for ___ and makes the real pressure ___ than ideal.',
      blanks: [{ answers: ['intermolecular attractions'] }, { answers: ['lower'] }, { answers: ['molecular volume'] }, { answers: ['higher'] }],
      wordBank: ['intermolecular attractions', 'molecular volume', 'lower', 'higher', 'temperature', 'molar mass'],
      explanation: 'The $a$ term, $-an^2/V^2$, subtracts from the pressure because neighbors pull molecules back from the wall. The $b$ term shrinks the denominator of $nRT/(V - nb)$, raising the pressure because the molecules have less free space. Which one wins decides whether $Z$ is below or above 1.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Without a table, rank these noble gases by their van der Waals $a$ constant, from **smallest** to **largest**.',
      lines: ['$\\ce{He}$', '$\\ce{Ne}$', '$\\ce{Ar}$', '$\\ce{Kr}$', '$\\ce{Xe}$'],
      explanation: 'Noble gases are single nonpolar atoms, so their only attractions are London dispersion forces, which grow with the number of electrons and the size of the electron cloud (Foundations, and the next lesson in depth). Going down the group: He ($2$ electrons) < Ne ($10$) < Ar ($18$) < Kr ($36$) < Xe ($54$). The measured values follow suit: about $0.034$, $0.21$, $1.34$, $2.32$ and $4.19\\ \\text{L}^2\\text{·atm/mol}^2$. Boiling points rise in the same order.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Ideal vs van der Waals, head to head',
      blocks: [
        {
          type: 'derivation',
          title: '$1.00\\ \\text{mol}\\ \\ce{CO2}$ in $0.500\\ \\text{L}$ at $300\\ \\text{K}$',
          steps: [
            { tex: 'P_{\\text{ideal}} = \\frac{nRT}{V} = \\frac{(1.00)(0.08206)(300)}{0.500} = 49.2\\ \\text{atm}', why: 'The ideal prediction for comparison.' },
            { tex: '\\frac{nRT}{V - nb} = \\frac{24.62}{0.500 - (1.00)(0.0427)} = \\frac{24.62}{0.4573} = 53.8\\ \\text{atm}', why: 'Volume correction alone: less free space, so a **higher** pressure than ideal.' },
            { tex: '\\frac{an^2}{V^2} = \\frac{(3.59)(1.00)^2}{(0.500)^2} = 14.4\\ \\text{atm}', why: 'The attraction correction, with $a = 3.59\\ \\text{L}^2\\text{·atm/mol}^2$.' },
            { tex: 'P_{\\text{vdW}} = 53.8 - 14.4 = 39.5\\ \\text{atm}', why: 'Combine. Attractions win by a wide margin.' },
          ],
          result: 'The ideal gas law overestimates the pressure by $25\\%$ ($Z = 39.5/49.2 = 0.80$). Carbon dioxide at $300\\ \\text{K}$ is just below its critical temperature and strongly non-ideal.',
        },
        {
          type: 'derivation',
          title: 'The scuba tank from Foundations: $94.1\\ \\text{mol}$ of $\\ce{N2}$ in $11.1\\ \\text{L}$ at $293\\ \\text{K}$',
          steps: [
            { tex: 'P_{\\text{ideal}} = \\frac{(94.1)(0.08206)(293.15)}{11.1} = 204\\ \\text{atm}', why: 'The ideal value used in Foundations (treating the air as nitrogen).' },
            { tex: '\\frac{nRT}{V - nb} = \\frac{2264}{11.1 - (94.1)(0.0391)} = \\frac{2264}{7.42} = 305\\ \\text{atm}', why: 'At this density the excluded volume $nb = 3.68\\ \\text{L}$ is a third of the tank: a big upward correction.' },
            { tex: '\\frac{an^2}{V^2} = 1.39\\left(\\frac{94.1}{11.1}\\right)^2 = 99.9\\ \\text{atm}', why: 'A big downward correction too.' },
            { tex: 'P_{\\text{vdW}} = 305 - 100 = 205\\ \\text{atm}', why: 'The two large corrections nearly cancel.' },
          ],
          result: 'For nitrogen near room temperature the repulsive and attractive corrections almost offset each other, which is why the ideal gas law does surprisingly well even at $200\\ \\text{atm}$. Agreement like this is partly luck: change the gas or the temperature and the balance shifts.',
        },
        {
          type: 'graph',
          x: [0, 0.6],
          y: [-10, 150],
          xStep: 0.1,
          yStep: 25,
          functions: [
            { expr: '0.08206*k/(x - 0.0427) - 3.59/x^2', label: 'van der Waals, $\\ce{CO2}$', color: 'red', domain: [0.046, 0.6] },
            { expr: '0.08206*k/x', label: 'ideal gas', color: 'gray', dashed: true, domain: [0.02, 0.6] },
          ],
          points: [{ x: 0.1281, y: 72.9, label: 'critical point', color: 'purple' }],
          sliders: [{ name: 'k', min: 260, max: 400, step: 2, value: 280, label: 'temperature $T$ (K)' }],
          readouts: [{ label: 'vdW critical temperature $T_c$ (K)', expr: '8*3.59/(27*0.08206*0.0427)', digits: 4 }],
          caption: 'Horizontal axis: molar volume $V_m$ in L/mol; vertical: pressure in atm. Above $T_c \\approx 304\\ \\text{K}$ the van der Waals isotherm falls steadily, like a squashed version of the ideal hyperbola. Below $T_c$ it develops a wiggle (a "loop"): the signature of condensation into a liquid. At $T_c$ the wiggle shrinks to a single flat inflection point, the critical point.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The loop is not physical',
          text: 'On the part of a sub-critical loop where pressure *rises* as volume increases, the fluid would be unstable. A real gas compressed below $T_c$ instead condenses at constant pressure (the vapor pressure) until it is all liquid: a flat line across the loop, drawn so that the areas above and below it are equal (Maxwell\'s construction). Liquefaction is where the van der Waals equation is most qualitative and least quantitative.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Use the van der Waals equation to find the pressure of $5.00\\ \\text{mol}$ of methane in a $2.00\\ \\text{L}$ vessel at $25.0\\ ^\\circ\\text{C}$. For $\\ce{CH4}$: $a = 2.25\\ \\text{L}^2\\text{·atm/mol}^2$, $b = 0.0428\\ \\text{L/mol}$; $R = 0.08206\\ \\text{L·atm/(mol·K)}$. Give 3 significant figures.',
      hint: '$P = \\dfrac{nRT}{V - nb} - \\dfrac{an^2}{V^2}$. Compute the two terms separately.',
      label: '$P =$',
      unit: 'atm',
      answer: '5.00*0.08206*298.15/(2.00 - 5.00*0.0428) - 2.25*5.00^2/2.00^2',
      answerTex: '54.4\\ \\text{atm}',
      tolerance: 0.06,
      explanation: 'Repulsive term: $\\frac{(5.00)(0.08206)(298.15)}{2.00 - 0.214} = \\frac{122.3}{1.786} = 68.5\\ \\text{atm}$. Attractive term: $\\frac{(2.25)(25.0)}{4.00} = 14.1\\ \\text{atm}$. So $P = 68.5 - 14.1 = 54.4\\ \\text{atm}$, compared with $61.2\\ \\text{atm}$ from the ideal gas law ($Z = 0.89$).',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'A student uses the van der Waals equation for $3.00\\ \\text{mol}$ of $\\ce{CO2}$ in $2.00\\ \\text{L}$ at $350\\ \\text{K}$ ($a = 3.59$, $b = 0.0427$). Tap the first line that is wrong.',
      lines: [
        '$nRT = (3.00)(0.08206)(350) = 86.16\\ \\text{L·atm}$',
        'Free volume: $V - b = 2.00 - 0.0427 = 1.957\\ \\text{L}$',
        'Repulsive term: $86.16 / 1.957 = 44.0\\ \\text{atm}$',
        'Attractive term: $an^2/V^2 = (3.59)(9.00)/(4.00) = 8.08\\ \\text{atm}$',
        '$P = 44.0 - 8.08 = 35.9\\ \\text{atm}$',
      ],
      errorLines: [2],
      explanation: '$b$ is the excluded volume **per mole**, so three moles exclude $nb = 3.00 \\times 0.0427 = 0.128\\ \\text{L}$. The free volume is $2.00 - 0.128 = 1.872\\ \\text{L}$, the repulsive term is $86.16/1.872 = 46.0\\ \\text{atm}$, and $P = 46.0 - 8.08 = 38.0\\ \\text{atm}$. (Ideal: $43.1\\ \\text{atm}$.) Check units to catch this: $b$ has units of L/mol, so it must be multiplied by moles before it can be subtracted from liters.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The critical point, by calculus',
      blocks: [
        {
          type: 'p',
          text: 'The graph showed that the van der Waals isotherms change character at one special temperature. Above it no amount of squeezing turns the gas into a liquid; below it, compression eventually condenses it. That temperature is the **critical temperature** $T_c$, and at $T_c$ the isotherm has a horizontal [[inflection-point|inflection point]], the [[gchem-critical-point|critical point]].',
        },
        {
          type: 'derivation',
          title: 'Critical constants of a van der Waals gas',
          steps: [
            { tex: 'P = \\frac{RT}{V_m - b} - \\frac{a}{V_m^2}', why: 'The equation per mole ($V_m = V/n$).' },
            { tex: '\\frac{\\partial P}{\\partial V_m} = -\\frac{RT}{(V_m - b)^2} + \\frac{2a}{V_m^3} = 0', why: 'Horizontal tangent: the first [[derivative]] (at constant $T$) vanishes.' },
            { tex: '\\frac{\\partial^2 P}{\\partial V_m^2} = \\frac{2RT}{(V_m - b)^3} - \\frac{6a}{V_m^4} = 0', why: 'Inflection: the second derivative vanishes too.' },
            { tex: '\\frac{RT}{(V_m - b)^2} = \\frac{2a}{V_m^3}, \\qquad \\frac{RT}{(V_m - b)^3} = \\frac{3a}{V_m^4}', why: 'Rewrite both conditions.' },
            { tex: '\\frac{1}{V_m - b} = \\frac{3}{2V_m} \\implies V_c = 3b', why: 'Divide the second equation by the first: $RT$ and $a$ cancel.' },
            { tex: 'T_c = \\frac{2a(V_c - b)^2}{RV_c^3} = \\frac{2a(2b)^2}{R(27b^3)} = \\frac{8a}{27Rb}', why: 'Substitute $V_c = 3b$ into the first condition.' },
            { tex: 'P_c = \\frac{RT_c}{2b} - \\frac{a}{9b^2} = \\frac{4a}{27b^2} - \\frac{3a}{27b^2} = \\frac{a}{27b^2}', why: 'Substitute both into the equation itself.' },
          ],
          result: 'Strong attractions (large $a$) give a high critical temperature: the molecules hold together even when moving fast. Bulky molecules (large $b$) lower it.',
        },
        {
          type: 'table',
          headers: ['Gas', '$T_c$ from $8a/27Rb$', '$T_c$ measured', '$P_c$ from $a/27b^2$', '$P_c$ measured'],
          rows: [
            ['$\\ce{He}$', '$5.2\\ \\text{K}$', '$5.2\\ \\text{K}$', '$2.3\\ \\text{atm}$', '$2.2\\ \\text{atm}$'],
            ['$\\ce{N2}$', '$128\\ \\text{K}$', '$126\\ \\text{K}$', '$33.7\\ \\text{atm}$', '$33.5\\ \\text{atm}$'],
            ['$\\ce{CO2}$', '$304\\ \\text{K}$', '$304\\ \\text{K}$', '$72.9\\ \\text{atm}$', '$72.8\\ \\text{atm}$'],
            ['$\\ce{H2O}$', '$646\\ \\text{K}$', '$647\\ \\text{K}$', '$217\\ \\text{atm}$', '$218\\ \\text{atm}$'],
          ],
          caption: 'The close agreement is not a coincidence: tabulated van der Waals constants are usually *fitted* to the measured critical point. The test of the equation is that one pair $(a, b)$ then gives reasonable behavior everywhere else.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why you cannot liquefy nitrogen in a scuba tank',
          text: 'Nitrogen\'s critical temperature is $126\\ \\text{K}$ ($-147\\ ^\\circ\\text{C}$). At room temperature it stays a gas at any pressure, so a high-pressure cylinder of air or nitrogen holds compressed gas only. Carbon dioxide ($T_c = 31\\ ^\\circ\\text{C}$) and propane ($T_c = 97\\ ^\\circ\\text{C}$) are above their critical temperature only on very hot days, if ever, so their cylinders hold liquid with vapor above it. Phase diagrams, two lessons from now, map all of this.',
        },
        {
          type: 'deepdive',
          title: 'The virial expansion and the Boyle temperature',
          blocks: [
            {
              type: 'p',
              text: 'Expand the van der Waals $Z$ for a dilute gas (large $V_m$). Using the geometric series $\\frac{1}{1 - x} = 1 + x + x^2 + \\cdots$ with $x = b/V_m$:',
            },
            {
              type: 'math',
              tex: 'Z = \\frac{PV_m}{RT} = \\frac{1}{1 - b/V_m} - \\frac{a}{RTV_m} = 1 + \\left(b - \\frac{a}{RT}\\right)\\frac{1}{V_m} + \\frac{b^2}{V_m^2} + \\cdots',
            },
            {
              type: 'p',
              text: 'This is a *virial expansion*, $Z = 1 + B(T)/V_m + C(T)/V_m^2 + \\cdots$, with second virial coefficient $B = b - a/RT$. At low temperature $B < 0$ (attractions win, $Z$ dips below 1); at high temperature $B > 0$. The crossover, where the gas is ideal to first order, is the **Boyle temperature** $T_B = a/(Rb)$: about $430\\ \\text{K}$ for $\\ce{N2}$ by van der Waals (measured $327\\ \\text{K}$) and only $112\\ \\text{K}$ for $\\ce{H2}$, which is why hydrogen\'s $Z$ curve never dips at room temperature.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Oxygen has van der Waals constants $a = 1.36\\ \\text{L}^2\\text{·atm/mol}^2$ and $b = 0.0318\\ \\text{L/mol}$. What critical temperature does the van der Waals equation predict? Use $R = 0.08206\\ \\text{L·atm/(mol·K)}$; 3 significant figures.',
      hint: '$T_c = \\dfrac{8a}{27Rb}$.',
      label: '$T_c =$',
      unit: 'K',
      answer: '8*1.36/(27*0.08206*0.0318)',
      answerTex: '154\\ \\text{K}',
      tolerance: 0.6,
      explanation: '$T_c = \\frac{8(1.36)}{27(0.08206)(0.0318)} = \\frac{10.88}{0.07046} = 154\\ \\text{K}$, about $-119\\ ^\\circ\\text{C}$ (measured: $154.6\\ \\text{K}$). Above this temperature oxygen cannot be liquefied by pressure alone, which is why liquid oxygen for rockets and hospitals must be made by cooling air far below room temperature.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Real gases in real tanks',
      blocks: [
        {
          type: 'p',
          text: 'Non-ideality is not a classroom curiosity. Anything stored as a compressed gas (breathing air, natural gas for vehicles, hydrogen for fuel cells, welding and medical gases) is stored at pressures where $Z$ differs noticeably from 1, and the amount in the tank is $n = PV/(ZRT)$.',
        },
        {
          type: 'derivation',
          title: 'Methane in a $50.0\\ \\text{L}$ tank at $200.\\ \\text{atm}$ and $300\\ \\text{K}$ (van der Waals $Z = 0.827$)',
          steps: [
            { tex: 'n_{\\text{ideal}} = \\frac{PV}{RT} = \\frac{(200.)(50.0)}{(0.08206)(300)} = 406\\ \\text{mol}', why: 'What the ideal gas law would say.' },
            { tex: 'n = \\frac{PV}{ZRT} = \\frac{406\\ \\text{mol}}{0.827} = 491\\ \\text{mol}', why: 'Divide by $Z$. With $Z < 1$, attractions let more gas fit at a given pressure.' },
          ],
          result: 'The tank holds about $21\\%$ more methane than the ideal estimate: $7.9\\ \\text{kg}$ instead of $6.5\\ \\text{kg}$. A fuel gauge calibrated with $PV = nRT$ would badly underreport the range.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Hydrogen goes the other way',
          text: 'Hydrogen\'s attractions are so weak ($a = 0.244$) that its $Z$ is above 1 at every pressure at room temperature, and at the $700\\ \\text{bar}$ used in fuel-cell vehicles $Z$ is well above 1. Each extra bar of pressure buys less and less hydrogen, which is one reason hydrogen storage is hard and why compressed hydrogen holds far less energy per liter than gasoline.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'A technician estimates the moles of methane in a tank at $150\\ \\text{atm}$ and $300\\ \\text{K}$ using $PV = nRT$. At these conditions $Z = 0.79$. How does the estimate compare with the true amount?',
      options: [
        { text: 'It is about $21\\%$ too high', why: 'This reverses the direction. With $Z < 1$ the real gas is more compressible than ideal, so more gas fits, not less.' },
        { text: 'It is about $21\\%$ too low', correct: true, why: '$n_{\\text{true}} = PV/(ZRT) = n_{\\text{ideal}}/0.79$, so $n_{\\text{ideal}} = 0.79\\,n_{\\text{true}}$: $21\\%$ short.' },
        { text: 'It is about $79\\%$ too low', why: 'This confuses $Z$ with the error. The estimate is $79\\%$ **of** the true amount, which makes it $21\\%$ low.' },
        { text: 'It is exactly right, because $Z$ only affects pressure, not moles', why: '$Z$ links all four variables: $PV = ZnRT$. At fixed $P$, $V$ and $T$, a $Z$ below 1 means more moles than the ideal law predicts.' },
      ],
      explanation: 'From $PV = ZnRT$, the true amount is $n = PV/(ZRT)$. The ideal estimate $PV/RT$ equals $Z\\,n = 0.79\\,n$, which is $21\\%$ less than the truth. Attractions pull the molecules together, so the tank holds more than an ideal gas would at the same pressure.',
    },
  ],
  takeaways: [
    'Real gases deviate from ideal behavior at high pressure (molecular volume matters, raising $P$) and low temperature (attractions matter, lowering $P$). They are most ideal when hot and dilute.',
    'The compressibility factor $Z = PV/nRT$ is 1 for an ideal gas; $Z < 1$ means attractions dominate, $Z > 1$ means molecular volume dominates.',
    'Van der Waals: $\\left(P + an^2/V^2\\right)(V - nb) = nRT$. $a$ measures attractions (large for polar, hydrogen-bonding or polarizable molecules); $b$ is the excluded volume per mole (about 4 times the molecules\' own volume).',
    'For $\\ce{CO2}$ near room temperature van der Waals predicts pressures 20% or more below ideal; for $\\ce{N2}$ the two corrections nearly cancel.',
    'The van der Waals critical point is the horizontal inflection of an isotherm: $V_c = 3b$, $T_c = 8a/27Rb$, $P_c = a/27b^2$. Above $T_c$ a gas cannot be liquefied by pressure alone.',
    'In engineering, $n = PV/(ZRT)$ gives the real contents of high-pressure tanks.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 9: Gases',
      url: 'https://openstax.org/books/chemistry-2e/pages/9-introduction',
      source: 'openstax',
      note: 'Section 9.6, "Non-Ideal Gas Behavior," covers the compressibility factor and the van der Waals equation with a table of constants.',
    },
    {
      title: 'Wikipedia — Van der Waals equation',
      url: 'https://en.wikipedia.org/wiki/Van_der_Waals_equation',
      source: 'wikipedia',
      note: 'History, the critical-point derivation, reduced variables and Maxwell\'s equal-area construction.',
    },
    {
      title: 'Wikipedia — Compressibility factor',
      url: 'https://en.wikipedia.org/wiki/Compressibility_factor',
      source: 'wikipedia',
      note: 'Generalized compressibility charts and real $Z$ data for common gases.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "real gases" or "van der Waals" for additional worked examples and the virial equation of state.',
    },
  ],
};
