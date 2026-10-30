import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-nuclear-energy',
  title: 'Decay Kinetics, Binding Energy, Fission and Fusion',
  summary: 'Radioactive decay as first-order kinetics, carbon-14 and potassium–argon dating, where nuclear energy comes from (mass defect and the binding-energy curve), fission reactors, fusion in the Sun, and isotopes in medicine.',
  minutes: 22,
  objectives: [
    'Derive $N = N_0 e^{-kt}$ and $t_{1/2} = \\ln 2 / k$ for radioactive decay and use them to find amounts remaining, rate constants and elapsed times',
    'Date organic material with carbon-14 and rocks with potassium–argon, including the branching correction',
    'Calculate a mass defect, nuclear binding energy and binding energy per nucleon with $E = mc^2$',
    'Use the binding-energy-per-nucleon curve to explain why both fission of heavy nuclei and fusion of light nuclei release energy, and why iron sits at the top',
    'Explain chain reactions, the role of control rods and moderators, and why fusion needs extreme temperatures',
    'Match medical isotopes (Tc-99m, F-18 in PET, I-131) to their uses through their decay modes and half-lives',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Radioactive decay is first-order kinetics',
      blocks: [
        {
          type: 'p',
          text: 'Each radioactive nucleus is a ticking lottery. It has a fixed probability per second of decaying, it has no memory of how long it has already waited, and it ignores its neighbors. So in a sample of $N$ nuclei the number decaying per second is simply proportional to $N$. That rate is the **activity**, measured in [[gchem-becquerel|becquerels]]:',
        },
        {
          type: 'math',
          tex: '\\text{activity} = -\\frac{dN}{dt} = kN',
          caption: '$k$ is the **decay constant**: the probability per unit time that any one nucleus decays. Its units are inverse time ($\\text{s}^{-1}$, $\\text{yr}^{-1}$).',
        },
        {
          type: 'p',
          text: 'This is exactly the rate law of a first-order reaction from the kinetics unit, $\\text{rate} = k[\\text{A}]$, with nuclei in place of molecules. It is a [[separable-equation|separable]] [[differential-equation|differential equation]], and you solved its twin in Calculus II.',
        },
        {
          type: 'derivation',
          title: 'Solving $dN/dt = -kN$',
          steps: [
            { tex: '\\frac{dN}{N} = -k\\,dt', why: 'Separate the variables: everything with $N$ on the left, everything with $t$ on the right.' },
            { tex: '\\int_{N_0}^{N} \\frac{dN\'}{N\'} = -k \\int_0^t dt\'', why: 'Integrate from the start ($N_0$ nuclei at $t = 0$) to the present ($N$ at time $t$). Primes mark dummy variables.' },
            { tex: '\\ln N - \\ln N_0 = -kt \\implies \\ln\\frac{N}{N_0} = -kt', why: 'The antiderivative of $1/N$ is $\\ln N$ (with $N > 0$); subtract the limits.' },
            { tex: 'N = N_0\\, e^{-kt}', why: 'Exponentiate both sides. This is the integrated rate law for any first-order process.' },
          ],
          result: 'The number of nuclei, the mass of the isotope and the activity all fall by the same factor $e^{-kt}$, because each is proportional to $N$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why nuclear decay ignores temperature',
          text: 'Chemical rate constants climb steeply with temperature (Arrhenius), because molecules need collisions energetic enough to cross an activation barrier of tens of kJ/mol. Nuclear decay involves energies of MeV per nucleus, about a million times larger than thermal energies, and needs no collision at all. Heating, cooling, pressurizing or chemically combining a radioactive isotope leaves $k$ essentially unchanged. That reliability is what makes radioactive clocks trustworthy.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Simulating decay one nucleus at a time',
          text: 'A Monte Carlo simulation gives each nucleus a decay probability $p = 1 - e^{-k\\,\\Delta t}$ per time step: draw a uniform random number for each, and remove the nuclei whose draw is below $p$. With a million nuclei the survivor count traces $N_0 e^{-kt}$ almost perfectly; with ten, it jumps around randomly. Games use the same memoryless trick for events with a constant chance per tick, which is why a "15% per second" effect needs `1 - std::exp(-k * dt)` rather than `k * dt` to stay frame-rate independent.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Half-life',
      blocks: [
        {
          type: 'p',
          text: 'The [[half-life]] $t_{1/2}$ is the time for half of the nuclei present to decay. For first-order decay it is a constant: it does not depend on how much you start with, so every half-life halves what remains.',
        },
        {
          type: 'derivation',
          title: 'Half-life from the decay constant',
          steps: [
            { tex: '\\tfrac{1}{2}N_0 = N_0\\, e^{-k t_{1/2}}', why: 'Set $N = \\tfrac{1}{2}N_0$ in the integrated rate law.' },
            { tex: '\\ln\\tfrac{1}{2} = -k\\, t_{1/2}', why: 'Cancel $N_0$ (that is why the half-life does not depend on the amount), then take the natural log.' },
            { tex: 't_{1/2} = \\frac{\\ln 2}{k} \\approx \\frac{0.693}{k}', why: '$\\ln\\tfrac{1}{2} = -\\ln 2$; divide by $-k$.' },
          ],
          result: 'Equivalently $N = N_0 \\left(\\tfrac{1}{2}\\right)^{t/t_{1/2}}$: the exponent counts how many half-lives have passed.',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 110],
          xStep: 5,
          yStep: 10,
          functions: [{ expr: '100*e^(-ln(2)*x/h)', label: 'percent of nuclei remaining', color: 'blue' }],
          points: [
            { x: 'h', y: 50, label: '50%' },
            { x: '2h', y: 25, label: '25%' },
            { x: '3h', y: 12.5, label: '12.5%' },
          ],
          tangents: [{ expr: '100*e^(-ln(2)*x/h)', at: 'h', color: 'orange' }],
          sliders: [{ name: 'h', min: 1, max: 20, step: 0.1, value: 8, label: 'half-life $t_{1/2}$ (days)' }],
          readouts: [
            { label: 'decay constant $k = \\ln 2 / t_{1/2}$ (per day) $=$', expr: 'ln(2)/h', digits: 4 },
            { label: 'percent left after 30 days $=$', expr: '100*0.5^(30/h)', digits: 3 },
          ],
          caption: 'Horizontal axis: time in days. Set $t_{1/2} = 8.0$ days for iodine-131. Each half-life halves the remainder, and the orange tangent at the first half-life shows the instantaneous decay rate $-kN$: steep at first, gentler as fewer nuclei remain. Shorter half-life means larger $k$ and faster decay.',
        },
        {
          type: 'table',
          headers: ['Nuclide', 'Decay', 'Half-life'],
          rows: [
            ['fluorine-18', '$\\beta^+$', '110 min'],
            ['technetium-99m', '$\\gamma$', '6.01 h'],
            ['iodine-131', '$\\beta^-$', '8.02 days'],
            ['cobalt-60', '$\\beta^-$', '5.27 yr'],
            ['strontium-90', '$\\beta^-$', '28.8 yr'],
            ['carbon-14', '$\\beta^-$', '5730 yr'],
            ['potassium-40', '$\\beta^-$, EC', '$1.25 \\times 10^{9}$ yr'],
            ['uranium-238', '$\\alpha$', '$4.47 \\times 10^{9}$ yr'],
          ],
          caption: 'Half-lives used in this lesson (standard textbook values). They span from minutes to billions of years.',
        },
        {
          type: 'derivation',
          title: 'Cobalt-60 (a radiotherapy and sterilization source) after 2.00 years',
          steps: [
            { tex: 'k = \\frac{\\ln 2}{5.27\\ \\text{yr}} = 0.1315\\ \\text{yr}^{-1}', why: 'Convert the half-life into a decay constant.' },
            { tex: '\\frac{N}{N_0} = e^{-(0.1315\\ \\text{yr}^{-1})(2.00\\ \\text{yr})} = e^{-0.2631}', why: 'The years cancel in the exponent, as they must: an exponent has no units.' },
            { tex: '= 0.769', why: 'Check with the other form: $(1/2)^{2.00/5.27} = 0.5^{0.3795} = 0.769$.' },
          ],
          result: 'After 2.00 years, 76.9% of the cobalt-60 (and of the source\'s activity) remains. Hospitals and irradiation plants replace such sources on a schedule set by the half-life.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Strontium-90 ($t_{1/2} = 28.8$ yr) is a hazardous fission product because it behaves like calcium and lodges in bone. A sample contains 10.0 mg of Sr-90. How many milligrams remain after 100. years? (Three significant figures.)',
      hint: '$m = m_0 \\left(\\tfrac{1}{2}\\right)^{t/t_{1/2}}$, or find $k = \\ln 2 / 28.8$ and use $m = m_0 e^{-kt}$.',
      label: '$m =$',
      unit: 'mg',
      answer: '10.0*0.5^(100/28.8)',
      answerTex: '0.901\\ \\text{mg}',
      tolerance: 0.0015,
      explanation: 'The number of half-lives is $100. / 28.8 = 3.472$, so $m = 10.0 \\times 0.5^{3.472} = 0.901$ mg. Equivalently $k = 0.693/28.8 = 0.02407\\ \\text{yr}^{-1}$ and $10.0\\, e^{-2.407} = 0.901$ mg. Sanity check: three half-lives would leave $10.0/8 = 1.25$ mg and four would leave $0.625$ mg; 3.47 half-lives lands in between. Because mass is proportional to the number of nuclei, you never need to convert to atoms.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Carbon-14 dating',
      blocks: [
        {
          type: 'p',
          text: 'Cosmic rays make neutrons in the upper atmosphere, and those neutrons convert nitrogen into carbon-14:',
        },
        {
          type: 'math',
          tex: '\\ce{^{14}_{7}N + ^{1}_{0}n -> ^{14}_{6}C + ^{1}_{1}H}',
          caption: 'Production balances decay, so the atmosphere holds a nearly steady small fraction of carbon-14 (about 1 atom in $10^{12}$).',
        },
        {
          type: 'p',
          text: 'The C-14 becomes $\\ce{CO2}$, plants take it up in photosynthesis, and animals eat the plants. While an organism lives it keeps exchanging carbon, so its carbon has the atmospheric C-14 level: an activity of about **15.3 decays per minute per gram of carbon**. At death the intake stops and the C-14 decays with $t_{1/2} = 5730$ yr. Comparing a sample\'s activity per gram of carbon with the living value gives the time since death, through [[gchem-radiometric-dating|radiometric dating]]:',
        },
        {
          type: 'theorem',
          name: 'Age from a decay ratio',
          tex: 't = \\frac{1}{k}\\ln\\frac{N_0}{N} = \\frac{t_{1/2}}{\\ln 2}\\,\\ln\\frac{N_0}{N}',
          text: 'Here $N_0/N$ is the ratio of the original to the present amount, which equals the ratio of activities $A_0/A$.',
        },
        {
          type: 'derivation',
          title: 'Charcoal from an ancient hearth: 9.6 decays per minute per gram of carbon',
          steps: [
            { tex: '\\frac{N_0}{N} = \\frac{A_0}{A} = \\frac{15.3}{9.6} = 1.594', why: 'Activity is proportional to the number of C-14 nuclei, so the activity ratio is the nucleus ratio. The units cancel.' },
            { tex: 'k = \\frac{\\ln 2}{5730\\ \\text{yr}} = 1.210 \\times 10^{-4}\\ \\text{yr}^{-1}', why: 'Decay constant of carbon-14.' },
            { tex: 't = \\frac{\\ln 1.594}{1.210 \\times 10^{-4}\\ \\text{yr}^{-1}} = \\frac{0.466}{1.210 \\times 10^{-4}}\\ \\text{yr}', why: 'Natural log, not base-10 log: the rate law was integrated with $\\ln$.' },
            { tex: '= 3.9 \\times 10^{3}\\ \\text{yr}', why: 'The activity 9.6 has two significant figures, so the age does too.' },
          ],
          result: 'The fire burned about 3900 years ago. Check: activity fell to $9.6/15.3 = 63\\%$ of the living value, a bit less than one half-life (50%), so the age should be under 5730 years.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Limits of the method',
          text: 'After about ten half-lives (around 50 000 years) too little C-14 is left to measure, so radiocarbon cannot date dinosaurs or rocks. It also only works on things that were once alive and exchanging carbon with the atmosphere. And the atmospheric C-14 level has varied slightly over time (and was disturbed by fossil-fuel burning and 1950s–60s atmospheric weapons tests), so precise dates are corrected with calibration curves built from tree rings.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'A wooden tool from an archaeological site has a carbon-14 activity per gram of carbon that is 64.0% of that of living wood. Using $t_{1/2} = 5730$ yr, how old is it? Give the answer in years to three significant figures.',
      hint: '$N_0 / N = 1 / 0.640$. Then $t = \\dfrac{5730}{\\ln 2}\\ln\\dfrac{N_0}{N}$.',
      label: '$t =$',
      unit: 'years',
      answer: '5730/ln(2)*ln(1/0.640)',
      answerTex: '3.69 \\times 10^{3}\\ \\text{yr}',
      tolerance: 6,
      explanation: '$t = \\dfrac{5730\\ \\text{yr}}{0.6931} \\times \\ln\\dfrac{1}{0.640} = 8267\\ \\text{yr} \\times 0.4463 = 3.69 \\times 10^{3}$ yr. If you used $\\log_{10}$ you got about 1600 years, far too young. A quick check: 64% remaining is between 100% (age 0) and 50% (one half-life, 5730 yr), and closer to 50% on a log scale than it looks, so a bit under two-thirds of a half-life is right.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Dating rocks with potassium–argon',
      blocks: [
        {
          type: 'p',
          text: 'Geology needs a clock with a much longer half-life. Potassium is common in minerals, and potassium-40 ($t_{1/2} = 1.25 \\times 10^9$ yr) decays two ways: about 89.3% by beta-minus to calcium-40, and about **10.7% by electron capture to argon-40**.',
        },
        {
          type: 'p',
          text: 'Argon is a noble gas, so while rock is molten it bubbles out. Once the rock solidifies, every new argon-40 atom is trapped in the crystal. Measuring the ratio of trapped argon-40 to remaining potassium-40 therefore dates the moment the rock formed. (The calcium-40 branch is useless as a clock, because rocks already contain plenty of ordinary calcium-40.)',
        },
        {
          type: 'derivation',
          title: 'A volcanic rock with $^{40}\\text{Ar} / ^{40}\\text{K} = 0.0500$ (atom ratio)',
          steps: [
            { tex: '\\text{K-40 decayed} = \\frac{N_{\\text{Ar}}}{0.107}', why: 'Only 10.7% of decays make argon, so each argon atom stands for $1/0.107 = 9.35$ decayed potassium atoms.' },
            { tex: '\\frac{N_0}{N} = \\frac{N_{\\text{K}} + N_{\\text{Ar}}/0.107}{N_{\\text{K}}} = 1 + \\frac{0.0500}{0.107} = 1.467', why: 'Original potassium = what is left plus what decayed. Divide through by $N_\\text{K}$ to use the measured ratio.' },
            { tex: 'k = \\frac{\\ln 2}{1.25 \\times 10^{9}\\ \\text{yr}} = 5.545 \\times 10^{-10}\\ \\text{yr}^{-1}', why: 'Decay constant of K-40 (all branches together: a nucleus decays one way or the other).' },
            { tex: 't = \\frac{\\ln 1.467}{5.545 \\times 10^{-10}\\ \\text{yr}^{-1}} = \\frac{0.3834}{5.545 \\times 10^{-10}}\\ \\text{yr}', why: 'The same age formula as carbon dating.' },
            { tex: '= 6.91 \\times 10^{8}\\ \\text{yr}', why: 'Three significant figures, matching the ratio 0.0500.' },
          ],
          result: 'The rock solidified about 690 million years ago. Because Ar-40 and K-40 have almost the same mass (39.962 u and 39.964 u), a **mass** ratio can be used in place of the atom ratio.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Pick a clock whose half-life matches the age you are measuring. If almost nothing has decayed (or almost everything), the ratio is too close to 1 (or 0) to measure accurately. C-14 suits ages up to about 50 000 years; K-40 and U-238 suit millions to billions. Uranium–lead dating of meteorites gives the age of the solar system: 4.57 billion years.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A rock has an argon-40 to potassium-40 atom ratio of 0.0500. About 10.7% of K-40 decays produce Ar-40, and $t_{1/2}(\\text{K-40}) = 1.25 \\times 10^9$ yr. A student dates the rock. Tap the first wrong line.',
      lines: [
        'All argon-40 in the rock formed by decay of potassium-40 after the rock solidified',
        'Original K-40 per K-40 now: $\\dfrac{N_0}{N} = 1 + 0.0500 = 1.0500$',
        '$k = \\dfrac{\\ln 2}{1.25 \\times 10^{9}\\ \\text{yr}} = 5.545 \\times 10^{-10}\\ \\text{yr}^{-1}$',
        '$t = \\dfrac{\\ln 1.0500}{5.545 \\times 10^{-10}\\ \\text{yr}^{-1}} = 8.80 \\times 10^{7}$ yr',
      ],
      errorLines: [2],
      explanation: 'Line 2 treats every decayed K-40 atom as an argon atom. Only 10.7% of decays give argon (the rest give calcium-40), so each argon atom represents $1/0.107$ decays: $N_0/N = 1 + 0.0500/0.107 = 1.467$. Then $t = \\ln 1.467 / (5.545 \\times 10^{-10}) = 6.91 \\times 10^{8}$ yr. Ignoring the branching made the rock look almost eight times too young. Line 1 is the method\'s standard assumption (argon escapes from melt), and line 3 is correct.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Mass defect and nuclear binding energy',
      blocks: [
        {
          type: 'p',
          text: 'Weigh a helium-4 atom and compare it with the parts it is made of. The atom is **lighter** than its separated protons, neutrons and electrons. The missing mass is the [[gchem-mass-defect|mass defect]] $\\Delta m$, and by Einstein\'s $E = mc^2$ it corresponds to the [[gchem-binding-energy|nuclear binding energy]]: the energy released when the nucleus forms from its nucleons, or equivalently the energy needed to pull it completely apart.',
        },
        {
          type: 'theorem',
          name: 'Binding energy',
          tex: 'E_{\\text{b}} = \\Delta m\\, c^2, \\qquad 1\\ \\text{u} \\leftrightarrow 931.5\\ \\text{MeV}',
          text: 'With masses in atomic mass units, multiply by 931.5 MeV/u to get energy directly. ($1\\ \\text{MeV} = 1.602 \\times 10^{-13}$ J.)',
        },
        {
          type: 'p',
          text: 'Use **atomic** masses throughout and count each proton as a hydrogen-1 atom (proton + electron). The electrons then cancel automatically: helium-4 has 2 electrons, and so do two hydrogen atoms. Data: $m(\\ce{^{1}H}) = 1.007825$ u, $m(\\text{n}) = 1.008665$ u, $m(\\ce{^{4}He}) = 4.002603$ u.',
        },
        {
          type: 'derivation',
          title: 'Binding energy of helium-4',
          steps: [
            { tex: 'm_{\\text{parts}} = 2(1.007825) + 2(1.008665) = 4.032980\\ \\text{u}', why: '2 protons (as H atoms, bringing the 2 electrons) and 2 neutrons.' },
            { tex: '\\Delta m = 4.032980 - 4.002603 = 0.030377\\ \\text{u}', why: 'Mass defect: parts minus whole. It is positive; the bound nucleus is lighter.' },
            { tex: 'E_{\\text{b}} = 0.030377\\ \\cancel{\\text{u}} \\times 931.5\\ \\frac{\\text{MeV}}{\\cancel{\\text{u}}} = 28.30\\ \\text{MeV}', why: 'Convert mass to energy.' },
            { tex: '\\frac{E_{\\text{b}}}{A} = \\frac{28.30\\ \\text{MeV}}{4} = 7.07\\ \\text{MeV per nucleon}', why: 'Dividing by the number of nucleons gives a measure of how tightly each one is held, which lets you compare nuclei of different sizes.' },
          ],
          result: 'Per mole of helium-4 that is $28.30 \\times 10^{6}\\ \\text{eV} \\times 96.49\\ \\text{kJ mol}^{-1}\\text{eV}^{-1} = 2.73 \\times 10^{9}$ kJ/mol, about seven million times the energy of a C–H bond (413 kJ/mol).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Chemical reactions lose mass too, just too little to notice',
          text: '$E = mc^2$ applies to every energy change. Burning 1 g of gasoline releases about 46 kJ, so the products weigh $\\Delta m = E/c^2 = 4.6 \\times 10^{4}\\ \\text{J} / (3.00 \\times 10^{8}\\ \\text{m/s})^2 = 5 \\times 10^{-13}$ kg less: half a part per billion, far below what any balance can detect. That is why "conservation of mass" works perfectly in chemistry. Nuclear energies are about a million times larger, so the mass change becomes a measurable fraction of a percent.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Calculate the binding energy per nucleon of oxygen-16, in MeV. Use $m(\\ce{^{16}O}) = 15.994915$ u, $m(\\ce{^{1}H}) = 1.007825$ u, $m(\\text{n}) = 1.008665$ u and $1\\ \\text{u} = 931.5$ MeV. (Three significant figures.)',
      hint: 'Oxygen-16 has 8 protons (count them as 8 H atoms) and 8 neutrons. Mass defect = parts − atom; × 931.5; ÷ 16.',
      label: '$E_\\text{b}/A =$',
      unit: 'MeV per nucleon',
      answer: '(8*1.007825+8*1.008665-15.994915)*931.5/16',
      answerTex: '7.98\\ \\text{MeV per nucleon}',
      tolerance: 0.006,
      explanation: 'Parts: $8(1.007825) + 8(1.008665) = 16.131920$ u. Mass defect: $16.131920 - 15.994915 = 0.137005$ u. Binding energy: $0.137005 \\times 931.5 = 127.6$ MeV. Per nucleon: $127.6 / 16 = 7.98$ MeV. That is higher than helium-4 (7.07 MeV), so building O-16 out of lighter nuclei releases energy: this is one of the fusion steps inside heavy stars.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The binding-energy curve: why iron is at the top',
      blocks: [
        {
          type: 'p',
          text: 'Compute $E_\\text{b}/A$ for every nuclide and plot it against mass number. The points below are calculated, as you just did, from measured atomic masses; the dashed curve is the "liquid-drop" model explained below.',
        },
        {
          type: 'graph',
          x: [0, 250],
          y: [0, 10],
          xStep: 25,
          yStep: 1,
          functions: [
            {
              expr: '15.75 - 17.8*x^(-1/3) - 0.711*(x/(1.98 + 0.0155*x^(2/3)))^2*x^(-4/3) - 23.7*(x - 2x/(1.98 + 0.0155*x^(2/3)))^2/x^2',
              label: 'liquid-drop model',
              color: 'gray',
              dashed: true,
              domain: [12, 245],
            },
          ],
          points: [
            { x: 2, y: 1.112, color: 'blue', label: '²H' },
            { x: 3, y: 2.827, color: 'blue' },
            { x: 3, y: 2.573, color: 'blue' },
            { x: 4, y: 7.074, color: 'blue' },
            { x: 6, y: 5.332, color: 'blue' },
            { x: 7, y: 5.606, color: 'blue' },
            { x: 9, y: 6.463, color: 'blue' },
            { x: 10, y: 6.475, color: 'blue' },
            { x: 11, y: 6.928, color: 'blue' },
            { x: 12, y: 7.68, color: 'blue' },
            { x: 14, y: 7.476, color: 'blue' },
            { x: 16, y: 7.976, color: 'blue' },
            { x: 19, y: 7.779, color: 'blue' },
            { x: 20, y: 8.032, color: 'blue' },
            { x: 24, y: 8.261, color: 'blue' },
            { x: 28, y: 8.448, color: 'blue' },
            { x: 32, y: 8.493, color: 'blue' },
            { x: 40, y: 8.551, color: 'blue' },
            { x: 56, y: 8.79, color: 'red', label: '⁵⁶Fe' },
            { x: 62, y: 8.795, color: 'red' },
            { x: 84, y: 8.717, color: 'blue' },
            { x: 90, y: 8.71, color: 'blue' },
            { x: 120, y: 8.504, color: 'blue' },
            { x: 138, y: 8.393, color: 'blue' },
            { x: 184, y: 8.005, color: 'blue' },
            { x: 208, y: 7.867, color: 'blue' },
            { x: 235, y: 7.591, color: 'blue' },
            { x: 238, y: 7.57, color: 'blue', label: '²³⁸U' },
          ],
          segments: [
            { from: [5, 3.5], to: [45, 3.5], arrow: true, color: 'green', label: 'fusion releases energy' },
            { from: [200, 6], to: [65, 6], arrow: true, color: 'orange', label: 'fission releases energy' },
          ],
          caption: 'Horizontal axis: mass number $A$. Vertical axis: binding energy per nucleon (MeV). The curve rises steeply through the light nuclei (helium-4 is a notable spike), peaks near iron and nickel at about 8.8 MeV, and declines slowly to about 7.6 MeV for uranium. Any change that moves nucleons **up** the curve releases energy.',
          height: 340,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the curve peaks near iron',
          text: 'Two effects compete. **Surface effect:** the strong force only grips neighbors, and in a small nucleus a large fraction of nucleons sit at the surface with fewer neighbors, so $E_\\text{b}/A$ rises as nuclei grow (the $-17.8\\,A^{-1/3}$ term). **Coulomb effect:** every proton repels every other, a cost per nucleon that grows like $Z^2/A^{4/3}$, roughly in proportion to $A^{2/3}$. Small nuclei gain more from shrinking their surface; large nuclei lose more to repulsion. The best compromise is around $A \\approx 56$–$62$: iron and nickel.',
        },
        {
          type: 'p',
          text: 'This one curve explains both kinds of nuclear energy. **Fusing** light nuclei into heavier ones (moving right from the far left) climbs the steep slope and releases a lot of energy per nucleon. **Splitting** a very heavy nucleus into two middle-sized ones (moving left from uranium toward the peak) climbs the gentle slope: about 0.8 to 0.9 MeV per nucleon, but multiplied by about 235 nucleons. Iron is a dead end: neither fusing it nor splitting it releases energy.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Iron or nickel?',
          text: 'Strictly, nickel-62 has the highest binding energy per nucleon (8.795 MeV), just above iron-58 and iron-56 (8.790 MeV). Iron-56 is the famous "top of the curve" because it has the lowest mass per nucleon, and because the fusion chains in massive stars end at iron-group nuclei, making iron the most abundant heavy element in the universe.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Using the binding-energy-per-nucleon curve, which of these nuclear processes would **absorb** energy rather than release it?',
      options: [
        { text: 'Fusing two deuterium nuclei ($\\ce{^{2}H}$, 1.1 MeV per nucleon) into helium-4 (7.1 MeV per nucleon)', why: 'Moving from 1.1 to 7.1 MeV per nucleon is a big climb up the curve: strongly exothermic. This is why hydrogen isotopes are fusion fuels.' },
        { text: 'Splitting uranium-235 (7.6 MeV per nucleon) into barium and krypton (8.3 and 8.5 MeV per nucleon)', why: 'The products are more tightly bound per nucleon than uranium, so energy is released: this is fission.' },
        { text: 'Splitting iron-56 (8.8 MeV per nucleon) into two aluminum-28 nuclei (8.3 MeV per nucleon)', correct: true, why: 'Iron is at the top of the curve. Any product nuclei are less tightly bound per nucleon, so you must **supply** about $56 \\times 0.5 \\approx 28$ MeV.' },
        { text: 'Fusing helium-4 nuclei into carbon-12 (7.7 MeV per nucleon)', why: '7.1 → 7.7 MeV per nucleon is uphill on the curve, so it releases energy. Red giant stars run on this "triple-alpha" process.' },
      ],
      explanation: 'Energy is released whenever the products have a **higher** binding energy per nucleon than the reactants: nucleons end up more tightly bound, and the difference comes out as energy (the products have less mass). Starting from iron at the peak, every change goes downhill on the curve, so splitting iron (or fusing it into heavier elements) absorbs energy. That is why stars cannot get energy by fusing iron.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Fission, chain reactions and reactors',
      blocks: [
        {
          type: 'p',
          text: 'In 1938 Otto Hahn and Fritz Strassmann found barium in uranium bombarded with neutrons, and Lise Meitner and Otto Frisch explained it: the nucleus had split. In [[gchem-fission|nuclear fission]], a uranium-235 nucleus absorbs a slow neutron, becomes a wobbling uranium-236, and splits into two medium-mass fragments plus two or three neutrons. One of many possible splits:',
        },
        {
          type: 'math',
          tex: '\\ce{^{1}_{0}n + ^{235}_{92}U -> ^{141}_{56}Ba + ^{92}_{36}Kr + 3\\,^{1}_{0}n}',
          caption: 'Check: $1 + 235 = 141 + 92 + 3$ and $0 + 92 = 56 + 36 + 0$.',
        },
        {
          type: 'derivation',
          title: 'Energy released by this fission',
          steps: [
            { tex: 'm_{\\text{before}} = 235.043930 + 1.008665 = 236.052595\\ \\text{u}', why: 'Atomic mass of U-235 plus one neutron. (Atomic masses: the 92 electrons on each side cancel.)' },
            { tex: 'm_{\\text{after}} = 140.914403 + 91.926173 + 3.025995', why: 'Ba-141 and Kr-92 atomic masses plus three neutrons, $3(1.008665) = 3.025995$ u.' },
            { tex: '= 235.866571\\ \\text{u}', why: 'Add.' },
            { tex: '\\Delta m = 236.052595 - 235.866571 = 0.186024\\ \\text{u}', why: 'Mass lost.' },
            { tex: 'E = 0.186024 \\times 931.5\\ \\text{MeV} = 173.3\\ \\text{MeV}', why: 'Convert to energy, mostly as kinetic energy of the fragments, which becomes heat.' },
          ],
          result: 'About 173 MeV here, and about 200 MeV in total once the radioactive fragments decay. Counting just the 173 MeV released at the moment of fission, one gram of U-235 gives about $7 \\times 10^{7}$ kJ, roughly 1.5 million times the 46 kJ/g of gasoline. That energy density is why a naval reactor can run a submarine or aircraft carrier for decades without refueling.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg"><circle cx="16.0" cy="140.0" r="4.5" fill="currentColor" class="f-blue"/><line x1="22.0" y1="140.0" x2="48.0" y2="140.0" stroke="currentColor" class="s-blue" stroke-width="1.6"/><polygon points="52.0,140.0 44.0,143.5 44.0,136.5" fill="currentColor" class="f-blue"/><circle cx="75" cy="140" r="19" fill="currentColor" class="f-orange" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="75" y="144" text-anchor="middle" font-size="11">²³⁵U</text><circle cx="108.0" cy="96.0" r="14" fill="currentColor" class="f-green" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><text x="108.0" y="100.0" text-anchor="middle" font-size="10">Ba</text><circle cx="108.0" cy="184.0" r="12" fill="currentColor" class="f-purple" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><text x="108.0" y="188.0" text-anchor="middle" font-size="10">Kr</text><circle cx="125.4" cy="124.0" r="4.5" fill="currentColor" class="f-blue"/><line x1="130.5" y1="120.8" x2="218.0" y2="65.8" stroke="currentColor" class="s-blue" stroke-width="1.6"/><polygon points="221.4,63.7 216.5,70.9 212.7,65.0" fill="currentColor" class="f-blue"/><circle cx="240" cy="52" r="19" fill="currentColor" class="f-orange" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="240" y="56" text-anchor="middle" font-size="11">²³⁵U</text><circle cx="270.0" cy="32.0" r="10" fill="currentColor" class="f-green" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="270.0" cy="72.0" r="9" fill="currentColor" class="f-purple" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="286.7" cy="41.7" r="4.5" fill="currentColor" class="f-blue"/><line x1="294.5" y1="40.2" x2="331.2" y2="28.1" stroke="currentColor" class="s-blue" stroke-width="1.3"/><polygon points="335.0,26.8 328.5,32.6 326.3,26.0" fill="currentColor" class="f-blue"/><circle cx="288.0" cy="52.0" r="4.5" fill="currentColor" class="f-blue"/><line x1="296.0" y1="52.0" x2="331.0" y2="52.0" stroke="currentColor" class="s-blue" stroke-width="1.3"/><polygon points="335.0,52.0 327.0,55.5 327.0,48.5" fill="currentColor" class="f-blue"/><circle cx="286.7" cy="62.3" r="4.5" fill="currentColor" class="f-blue"/><line x1="294.5" y1="63.8" x2="331.2" y2="75.9" stroke="currentColor" class="s-blue" stroke-width="1.3"/><polygon points="335.0,77.2 326.3,78.0 328.5,71.4" fill="currentColor" class="f-blue"/><text x="358" y="56" text-anchor="middle" font-size="12" class="t-gray">…</text><circle cx="130.0" cy="140.0" r="4.5" fill="currentColor" class="f-blue"/><line x1="136.0" y1="140.0" x2="214.0" y2="140.0" stroke="currentColor" class="s-blue" stroke-width="1.6"/><polygon points="218.0,140.0 210.0,143.5 210.0,136.5" fill="currentColor" class="f-blue"/><circle cx="240" cy="140" r="19" fill="currentColor" class="f-orange" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="240" y="144" text-anchor="middle" font-size="11">²³⁵U</text><circle cx="270.0" cy="120.0" r="10" fill="currentColor" class="f-green" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="270.0" cy="160.0" r="9" fill="currentColor" class="f-purple" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="286.7" cy="129.7" r="4.5" fill="currentColor" class="f-blue"/><line x1="294.5" y1="128.2" x2="331.2" y2="116.1" stroke="currentColor" class="s-blue" stroke-width="1.3"/><polygon points="335.0,114.8 328.5,120.6 326.3,114.0" fill="currentColor" class="f-blue"/><circle cx="288.0" cy="140.0" r="4.5" fill="currentColor" class="f-blue"/><line x1="296.0" y1="140.0" x2="331.0" y2="140.0" stroke="currentColor" class="s-blue" stroke-width="1.3"/><polygon points="335.0,140.0 327.0,143.5 327.0,136.5" fill="currentColor" class="f-blue"/><circle cx="286.7" cy="150.3" r="4.5" fill="currentColor" class="f-blue"/><line x1="294.5" y1="151.8" x2="331.2" y2="163.9" stroke="currentColor" class="s-blue" stroke-width="1.3"/><polygon points="335.0,165.2 326.3,166.0 328.5,159.4" fill="currentColor" class="f-blue"/><text x="358" y="144" text-anchor="middle" font-size="12" class="t-gray">…</text><circle cx="125.4" cy="156.0" r="4.5" fill="currentColor" class="f-blue"/><line x1="130.5" y1="159.2" x2="218.0" y2="214.2" stroke="currentColor" class="s-blue" stroke-width="1.6"/><polygon points="221.4,216.3 212.7,215.0 216.5,209.1" fill="currentColor" class="f-blue"/><circle cx="240" cy="228" r="19" fill="currentColor" class="f-orange" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="240" y="232" text-anchor="middle" font-size="11">²³⁵U</text><circle cx="270.0" cy="208.0" r="10" fill="currentColor" class="f-green" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="270.0" cy="248.0" r="9" fill="currentColor" class="f-purple" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="286.7" cy="217.7" r="4.5" fill="currentColor" class="f-blue"/><line x1="294.5" y1="216.2" x2="331.2" y2="204.1" stroke="currentColor" class="s-blue" stroke-width="1.3"/><polygon points="335.0,202.8 328.5,208.6 326.3,202.0" fill="currentColor" class="f-blue"/><circle cx="288.0" cy="228.0" r="4.5" fill="currentColor" class="f-blue"/><line x1="296.0" y1="228.0" x2="331.0" y2="228.0" stroke="currentColor" class="s-blue" stroke-width="1.3"/><polygon points="335.0,228.0 327.0,231.5 327.0,224.5" fill="currentColor" class="f-blue"/><circle cx="286.7" cy="238.3" r="4.5" fill="currentColor" class="f-blue"/><line x1="294.5" y1="239.8" x2="331.2" y2="251.9" stroke="currentColor" class="s-blue" stroke-width="1.3"/><polygon points="335.0,253.2 326.3,254.0 328.5,247.4" fill="currentColor" class="f-blue"/><text x="358" y="232" text-anchor="middle" font-size="12" class="t-gray">…</text><text x="75" y="22" text-anchor="middle" font-size="12.5">generation 1</text><text x="240" y="16" text-anchor="middle" font-size="12.5">generation 2</text><text x="410" y="16" text-anchor="middle" font-size="12.5">generation 3</text><text x="410" y="140" text-anchor="middle" font-size="13" class="t-blue">9 neutrons</text><text x="75" y="232" text-anchor="middle" font-size="12" class="t-blue">● neutron</text><text x="75" y="250" text-anchor="middle" font-size="12">1 → 3 → 9 → …</text></svg>`,
          alt: 'A neutron strikes a uranium-235 nucleus, which splits into a barium fragment and a krypton fragment and releases three neutrons. Each of those neutrons strikes another uranium-235 nucleus, each of which splits and releases three more neutrons, for nine in the third generation.',
          caption: 'A [[gchem-chain-reaction|chain reaction]]: each fission releases neutrons that can trigger more fissions. Whether the chain dies out, holds steady or grows depends on how many neutrons per fission go on to cause another one.',
        },
        {
          type: 'p',
          text: 'Call the average number of next-generation fissions caused by one fission the **multiplication factor** $k$. Many neutrons escape from the surface or are absorbed without causing fission, so $k$ is well below the 2–3 neutrons released. A small piece of fissile material loses too many neutrons through its surface; the minimum amount that can sustain a chain is the **critical mass**.',
        },
        {
          type: 'graph',
          x: [0, 50],
          y: [0, 5],
          xStep: 5,
          yStep: 1,
          functions: [{ expr: 'k^x', label: 'fissions per generation (relative to the first)', color: 'orange' }],
          hlines: [{ y: 1, label: 'steady (k = 1)', color: 'gray' }],
          sliders: [{ name: 'k', min: 0.9, max: 1.1, step: 0.005, value: 1, label: 'multiplication factor $k$' }],
          readouts: [{ label: 'relative fission rate after 50 generations $=$', expr: 'k^50', digits: 3 }],
          caption: 'Horizontal axis: neutron generation. Subcritical ($k < 1$): the chain dies away. Critical ($k = 1$): constant power. Supercritical ($k > 1$): exponential growth. A reactor runs at exactly $k = 1$; the operators raise or lower power by nudging $k$ slightly above or below 1 for a short time.',
        },
        {
          type: 'list',
          items: [
            '**Fuel:** uranium oxide pellets sealed in metal tubes (fuel rods), bundled into the reactor core.',
            '**Moderator:** usually water. It slows the fast fission neutrons, because slow neutrons are far more likely to be captured by U-235 and cause fission.',
            '**[[gchem-control-rod|Control rods]]:** rods of neutron-absorbing material (boron, cadmium or hafnium) that slide into the core to soak up neutrons and lower $k$. Fully inserted, they shut the reaction down (a "scram").',
            '**Coolant:** carries the heat away to make steam, which spins a turbine, exactly as in a coal plant.',
            '**Safety:** a power reactor cannot explode like a nuclear weapon. The serious accidents (Chernobyl 1986, Fukushima 2011) were failures of control or cooling, followed by steam or hydrogen explosions and fires that spread radioactive fission products.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'In a nuclear reactor, the control rods work by slowing neutrons down so that they cause more fissions.',
      answer: false,
      explanation: 'That is the job of the **moderator** (usually water or graphite), which slows neutrons so U-235 captures them more readily. Control rods do the opposite kind of job: made of strong neutron absorbers such as boron, cadmium or hafnium, they **remove** neutrons from the chain, lowering the multiplication factor. Pushing them in reduces power; pulling them out raises it; dropping them all the way in shuts the reactor down.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Fusion: the power of the stars',
      blocks: [
        {
          type: 'p',
          text: 'In [[gchem-fusion|nuclear fusion]], light nuclei combine into a heavier one, climbing the steep left side of the binding-energy curve. The Sun fuses hydrogen into helium through a sequence called the proton–proton chain, whose net result is:',
        },
        {
          type: 'math',
          tex: '\\ce{4\\,^{1}_{1}H -> ^{4}_{2}He + 2\\,^{0}_{+1}e}',
          caption: 'Two neutrinos and energy are also released. Check: $4 = 4 + 0$ and $4 = 2 + 2$. The two positrons annihilate with electrons, and that energy is part of the total.',
        },
        {
          type: 'derivation',
          title: 'Energy from fusing hydrogen into one helium-4',
          steps: [
            { tex: '\\Delta m = 4(1.007825) - 4.002603 = 0.028697\\ \\text{u}', why: 'Using atomic masses (4 H atoms → one He atom) automatically includes the positron annihilation energy: the 4 electrons of the hydrogen atoms end up as the 2 electrons of helium plus 2 annihilated with the positrons.' },
            { tex: 'E = 0.028697 \\times 931.5\\ \\text{MeV} = 26.7\\ \\text{MeV}', why: '0.7% of the mass becomes energy, compared with 0.08% in fission. The Sun converts about 4 million tonnes of mass into energy every second.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why fusion needs millions of degrees',
          text: 'Two nuclei must get within about $10^{-15}$ m for the strong force to grab them, but both are positive and repel more and more strongly as they approach. Only nuclei moving extremely fast can climb this Coulomb barrier. The Sun\'s core reaches about 15 million K, and even then fusion relies on rare, fast nuclei and quantum tunneling. Fission needs no such thing, because a neutron has no charge and simply walks into the nucleus.',
        },
        {
          type: 'p',
          text: 'The most promising reaction for fusion power fuses two heavy isotopes of hydrogen, deuterium and tritium: $\\ce{^{2}_{1}H + ^{3}_{1}H -> ^{4}_{2}He + ^{1}_{0}n}$. It needs a plasma at over 100 million K, held away from the walls by magnetic fields (tokamaks such as ITER) or compressed by lasers (the National Ignition Facility, which in 2022 first released more fusion energy than its lasers delivered to the target). Fusion fuel is abundant (deuterium is in all water) and produces no long-lived fission products, but a practical power plant is still under development.',
        },
        {
          type: 'table',
          headers: ['Property', 'Fission', 'Fusion'],
          rows: [
            ['what happens', 'heavy nucleus splits in two', 'light nuclei merge'],
            ['side of the curve', 'right (beyond iron)', 'left (below iron)'],
            ['trigger', 'slow neutron (no barrier)', 'extreme temperature (Coulomb barrier)'],
            ['energy per reaction', '~200 MeV', '17.6 MeV (D–T), 26.7 MeV (4 H → He)'],
            ['energy per gram of fuel', '~$7 \\times 10^{7}$ kJ', '~$3 \\times 10^{8}$ kJ (D–T)'],
            ['waste', 'long-lived radioactive fragments', 'helium; neutrons activate the structure'],
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Calculate the energy released, in MeV, by the deuterium–tritium fusion reaction $\\ce{^{2}_{1}H + ^{3}_{1}H -> ^{4}_{2}He + ^{1}_{0}n}$. Atomic masses: $\\ce{^{2}H}$ 2.014102 u, $\\ce{^{3}H}$ 3.016049 u, $\\ce{^{4}He}$ 4.002603 u; neutron 1.008665 u; $1\\ \\text{u} = 931.5$ MeV. (Three significant figures.)',
      hint: 'Mass lost = (reactant masses) − (product masses). Then multiply by 931.5 MeV/u.',
      label: '$E =$',
      unit: 'MeV',
      answer: '(2.014102+3.016049-4.002603-1.008665)*931.5',
      answerTex: '17.6\\ \\text{MeV}',
      tolerance: 0.05,
      explanation: 'Reactants: $2.014102 + 3.016049 = 5.030151$ u. Products: $4.002603 + 1.008665 = 5.011268$ u. Mass lost: $0.018883$ u. Energy: $0.018883 \\times 931.5 = 17.6$ MeV. Most of it (about 14.1 MeV) is carried by the neutron, which is how a fusion reactor would deliver its heat, and why its walls become radioactive. Per nucleon (17.6/5 = 3.5 MeV) this beats fission\'s roughly 0.85 MeV per nucleon.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Radioisotopes in medicine',
      blocks: [
        {
          type: 'p',
          text: 'Chemically, a radioactive isotope behaves just like a stable one, so the body handles it normally while its radiation reveals where it went. A compound carrying such an isotope is a [[gchem-radioactive-tracer|radioactive tracer]]. Choosing one is an exercise in everything above: the decay mode decides whether you image or destroy tissue, and the half-life must be long enough to do the job but short enough to disappear soon after.',
        },
        {
          type: 'list',
          items: [
            '**Technetium-99m** ($t_{1/2} = 6.01$ h): a nearly pure 140 keV gamma emitter, ideal for gamma cameras, used in tens of millions of scans a year (bone, heart, kidney). It is "milked" at the hospital from a generator of molybdenum-99 ($t_{1/2} \\approx 66$ h), which decays into it: $\\ce{^{99}_{42}Mo -> ^{99m}_{43}Tc + ^{0}_{-1}e}$.',
            '**Fluorine-18** ($t_{1/2} = 110$ min) for **PET** (positron emission tomography). Attached to glucose as FDG, it concentrates in tissues that burn glucose fastest, such as tumors and active brain regions.',
            '**Iodine-131** ($t_{1/2} = 8.02$ days): a beta-minus (and gamma) emitter. The thyroid gland concentrates iodine, so swallowed I-131 delivers its beta radiation right where it is needed to destroy overactive or cancerous thyroid tissue.',
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg"><rect x="234.0" y="126.0" width="12" height="18" rx="2" transform="rotate(0.0 240.0 135.0)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="231.4" y="149.4" width="12" height="18" rx="2" transform="rotate(12.9 237.4 158.4)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="223.6" y="171.6" width="12" height="18" rx="2" transform="rotate(25.7 229.6 180.6)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="211.1" y="191.5" width="12" height="18" rx="2" transform="rotate(38.6 217.1 200.5)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="194.5" y="208.1" width="12" height="18" rx="2" transform="rotate(51.4 200.5 217.1)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="174.6" y="220.6" width="12" height="18" rx="2" transform="rotate(64.3 180.6 229.6)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="152.4" y="228.4" width="12" height="18" rx="2" transform="rotate(77.1 158.4 237.4)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="129.0" y="231.0" width="12" height="18" rx="2" transform="rotate(90.0 135.0 240.0)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="105.6" y="228.4" width="12" height="18" rx="2" transform="rotate(102.9 111.6 237.4)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="83.4" y="220.6" width="12" height="18" rx="2" transform="rotate(115.7 89.4 229.6)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="63.5" y="208.1" width="12" height="18" rx="2" transform="rotate(128.6 69.5 217.1)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="46.9" y="191.5" width="12" height="18" rx="2" transform="rotate(141.4 52.9 200.5)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="34.4" y="171.6" width="12" height="18" rx="2" transform="rotate(154.3 40.4 180.6)" fill="currentColor" class="f-red" fill-opacity="1"/><rect x="26.6" y="149.4" width="12" height="18" rx="2" transform="rotate(167.1 32.6 158.4)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="24.0" y="126.0" width="12" height="18" rx="2" transform="rotate(180.0 30.0 135.0)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="26.6" y="102.6" width="12" height="18" rx="2" transform="rotate(192.9 32.6 111.6)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="34.4" y="80.4" width="12" height="18" rx="2" transform="rotate(205.7 40.4 89.4)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="46.9" y="60.5" width="12" height="18" rx="2" transform="rotate(218.6 52.9 69.5)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="63.5" y="43.9" width="12" height="18" rx="2" transform="rotate(231.4 69.5 52.9)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="83.4" y="31.4" width="12" height="18" rx="2" transform="rotate(244.3 89.4 40.4)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="105.6" y="23.6" width="12" height="18" rx="2" transform="rotate(257.1 111.6 32.6)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="129.0" y="21.0" width="12" height="18" rx="2" transform="rotate(270.0 135.0 30.0)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="152.4" y="23.6" width="12" height="18" rx="2" transform="rotate(282.9 158.4 32.6)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="174.6" y="31.4" width="12" height="18" rx="2" transform="rotate(295.7 180.6 40.4)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="194.5" y="43.9" width="12" height="18" rx="2" transform="rotate(308.6 200.5 52.9)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="211.1" y="60.5" width="12" height="18" rx="2" transform="rotate(321.4 217.1 69.5)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><rect x="223.6" y="80.4" width="12" height="18" rx="2" transform="rotate(334.3 229.6 89.4)" fill="currentColor" class="f-red" fill-opacity="1"/><rect x="231.4" y="102.6" width="12" height="18" rx="2" transform="rotate(347.1 237.4 111.6)" fill="currentColor" class="f-gray" fill-opacity="0.45"/><ellipse cx="135" cy="135" rx="62" ry="48" fill="currentColor" class="f-gray" fill-opacity="0.15" stroke="currentColor" stroke-width="1.2"/><line x1="150.6" y1="126.0" x2="215.5" y2="88.5" stroke="currentColor" class="s-purple" stroke-width="2.2" stroke-dasharray="6 3"/><line x1="150.6" y1="126.0" x2="54.5" y2="181.5" stroke="currentColor" class="s-purple" stroke-width="2.2" stroke-dasharray="6 3"/><circle cx="150.6" cy="126.0" r="5" fill="currentColor" class="f-orange"/><text x="164.6" y="150.0" text-anchor="middle" font-size="11.5">e⁺ + e⁻</text><text x="215" y="65" text-anchor="start" font-size="11.5" class="t-purple">511 keV</text><text x="15" y="215" text-anchor="start" font-size="11.5" class="t-purple">511 keV</text><text x="280" y="40" font-size="12" class="">1. A tracer such as ¹⁸F-glucose</text><text x="280" y="58" font-size="12" class="">collects in active tissue.</text><text x="280" y="84" font-size="12" class="">2. ¹⁸F emits a positron (e⁺).</text><text x="280" y="110" font-size="12" class="">3. Within ~1 mm it meets an</text><text x="280" y="128" font-size="12" class="">electron; both annihilate.</text><text x="280" y="154" font-size="12" class="t-purple">4. Two 511 keV γ rays fly off</text><text x="280" y="172" font-size="12" class="t-purple">back to back (180°).</text><text x="280" y="198" font-size="12" class="t-red">5. Detectors that fire together</text><text x="280" y="216" font-size="12" class="t-red">mark a line through the source.</text></svg>`,
          alt: 'A ring of detectors surrounds a patient. Inside, a positron and an electron annihilate at one point, sending two 511 keV gamma rays in exactly opposite directions to two detectors on opposite sides of the ring, which are highlighted. Numbered notes explain the five steps.',
          caption: 'PET works because annihilation sends two 511 keV gamma rays back to back. Two detectors firing at the same instant define a line through the source; millions of such lines reconstruct a 3D image.',
        },
        {
          type: 'derivation',
          title: 'How much Tc-99m is left one day after a scan?',
          steps: [
            { tex: '\\frac{t}{t_{1/2}} = \\frac{24.0\\ \\text{h}}{6.01\\ \\text{h}} = 3.99', why: 'Number of half-lives elapsed (the hours cancel).' },
            { tex: '\\frac{N}{N_0} = \\left(\\tfrac{1}{2}\\right)^{3.99} = 0.0628', why: 'Fraction remaining after almost exactly four half-lives: about $1/16$.' },
          ],
          result: 'Only 6.3% remains after a day (less in practice, because the body also excretes it), and the gamma rays escape the body without much absorption. That is why a Tc-99m scan gives a modest dose, a few mSv.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Iodine tablets',
          text: 'The same thyroid chemistry explains potassium iodide (KI) tablets in emergency kits near nuclear plants. Taken before exposure to radioactive iodine released in a reactor accident, stable iodide saturates the thyroid so that it absorbs little I-131. KI protects only the thyroid, and only against radioactive iodine.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'fill',
      prompt: 'Match each medical job to the best isotope.',
      template: 'Imaging blood flow to the heart with a gamma camera: ___\n\nA PET scan of glucose uptake by a tumor: ___\n\nDestroying overactive thyroid tissue from the inside: ___',
      blanks: [{ answers: ['technetium-99m'] }, { answers: ['fluorine-18'] }, { answers: ['iodine-131'] }],
      wordBank: ['technetium-99m', 'fluorine-18', 'iodine-131', 'carbon-14', 'uranium-238'],
      hint: 'Ask two questions for each job: which decay mode does it need (gamma for imaging, positrons for PET, beta to damage tissue), and is the half-life hours or days, not millennia?',
      explanation: 'A gamma camera needs a gamma emitter with a short half-life: Tc-99m (6 h, almost pure gamma). PET needs a positron emitter: F-18 (110 min), carried on glucose. Thyroid therapy needs an emitter of short-range, damaging beta particles that the thyroid concentrates: I-131 (8 days). Carbon-14 (5730 yr) and uranium-238 ($4.5 \\times 10^{9}$ yr) have half-lives so long that their activity per gram is tiny, and they would linger for life.',
    },
  ],
  takeaways: [
    'Radioactive decay is first-order: $dN/dt = -kN$ gives $N = N_0 e^{-kt}$, and $t_{1/2} = \\ln 2 / k$ regardless of the amount; temperature and chemistry do not change $k$.',
    'Ages come from $t = \\dfrac{t_{1/2}}{\\ln 2}\\ln\\dfrac{N_0}{N}$: carbon-14 (living carbon 15.3 decays/min/g, $t_{1/2} = 5730$ yr, up to about 50 000 yr) and potassium–argon (correct for only 10.7% of K-40 decays giving Ar-40).',
    'Mass defect = mass of separate nucleons − mass of nucleus; binding energy $= \\Delta m c^2$, with 1 u = 931.5 MeV. Use atomic masses with H-1 for each proton so electrons cancel.',
    'Binding energy per nucleon peaks near iron and nickel (about 8.8 MeV): fusion of light nuclei and fission of heavy nuclei both move toward the peak and release energy; iron cannot release energy either way.',
    'A fission chain reaction is controlled by the multiplication factor $k$; reactors hold $k = 1$ with control rods (neutron absorbers), while the moderator slows neutrons. Fusion needs extreme temperatures to overcome Coulomb repulsion.',
    'Medical isotopes are chosen by decay mode and half-life: Tc-99m (gamma imaging, 6 h), F-18 (positrons for PET, 110 min), I-131 (beta therapy for the thyroid, 8 days).',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 21: Nuclear Chemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/21-introduction',
      source: 'openstax',
      note: 'Sections 21.1 and 21.3–21.6 cover binding energy, decay rates and dating, fission and fusion, and uses of radioisotopes, with worked examples.',
    },
    {
      title: 'Wikipedia — Nuclear binding energy',
      url: 'https://en.wikipedia.org/wiki/Nuclear_binding_energy',
      source: 'wikipedia',
      note: 'The binding-energy curve, the iron–nickel peak, and the liquid-drop (semi-empirical mass) model behind the dashed curve.',
    },
    {
      title: 'Wikipedia — Radiocarbon dating',
      url: 'https://en.wikipedia.org/wiki/Radiocarbon_dating',
      source: 'wikipedia',
      note: 'How C-14 is made, measured and calibrated with tree rings, including the effect of 20th-century bomb carbon.',
    },
    {
      title: 'Wikipedia — Positron emission tomography',
      url: 'https://en.wikipedia.org/wiki/Positron_emission_tomography',
      source: 'wikipedia',
      note: 'The physics of coincidence detection and the tracers, especially FDG, that make PET scans work.',
    },
  ],
};
