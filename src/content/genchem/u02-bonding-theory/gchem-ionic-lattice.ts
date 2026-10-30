import type { Lesson } from '../../types';

// <figures> (generated from hand-written SVG; electron counts checked)
const FIG = {
  bh_mgo: '<svg viewBox="0 0 520 450" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="340" x2="165" y2="340" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="172" y="340" text-anchor="start" dominant-baseline="central" style="font-size:16.2px">Mg(s) + ½O₂(g)</text><line x1="58" y1="305" x2="165" y2="305" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="172" y="305" text-anchor="start" dominant-baseline="central" style="font-size:16.2px">Mg(g) + ½O₂(g)</text><line x1="96" y1="270" x2="165" y2="270" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="172" y="270" text-anchor="start" dominant-baseline="central" style="font-size:16.2px">Mg(g) + O(g)</text><line x1="134" y1="205" x2="300" y2="205" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="308" y="205" text-anchor="start" dominant-baseline="central" style="font-size:16.2px">Mg⁺(g) + O(g)</text><line x1="172" y1="112" x2="330" y2="112" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="240" y="98" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px">Mg²⁺(g) + O(g)</text><line x1="300" y1="142" x2="420" y2="142" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="372" y="157" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px">Mg²⁺(g) + O⁻(g)</text><line x1="372" y1="50" x2="500" y2="50" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="436" y="36" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px">Mg²⁺(g) + O²⁻(g)</text><line x1="20" y1="400" x2="500" y2="400" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="260" y="418" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px">MgO(s)</text><line x1="70" y1="340" x2="70" y2="313" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><polygon points="70,305 66,313 74,313" class="f-blue"/><text x="64" y="322.5" text-anchor="end" dominant-baseline="central" style="font-size:15.1px" class="t-blue">+147</text><line x1="108" y1="305" x2="108" y2="278" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><polygon points="108,270 104,278 112,278" class="f-blue"/><text x="102" y="287.5" text-anchor="end" dominant-baseline="central" style="font-size:15.1px" class="t-blue">+249</text><line x1="146" y1="270" x2="146" y2="213" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><polygon points="146,205 142,213 150,213" class="f-blue"/><text x="140" y="229.5" text-anchor="end" dominant-baseline="central" style="font-size:15.1px" class="t-blue">+738</text><text x="140" y="246.5" text-anchor="end" dominant-baseline="central" style="font-size:13.4px" class="t-gray">IE₁</text><line x1="184" y1="205" x2="184" y2="120" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><polygon points="184,112 180,120 188,120" class="f-blue"/><text x="178" y="150.5" text-anchor="end" dominant-baseline="central" style="font-size:15.1px" class="t-blue">+1451</text><text x="178" y="167.5" text-anchor="end" dominant-baseline="central" style="font-size:13.4px" class="t-gray">IE₂</text><line x1="312" y1="112" x2="312" y2="134" class="s-green" stroke-width="2.2" stroke-linecap="round"/><polygon points="312,142 316,134 308,134" class="f-green"/><text x="320" y="127" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-green">−141</text><line x1="395" y1="142" x2="395" y2="58" class="s-orange" stroke-width="2.2" stroke-linecap="round"/><polygon points="395,50 391,58 399,58" class="f-orange"/><text x="387" y="88" text-anchor="end" dominant-baseline="central" style="font-size:15.1px" class="t-orange">+744</text><text x="387" y="105" text-anchor="end" dominant-baseline="central" style="font-size:13.4px" class="t-gray">O⁻ + e⁻</text><line x1="475" y1="50" x2="475" y2="392" class="s-red" stroke-width="2.2" stroke-linecap="round"/><polygon points="475,400 479,392 471,392" class="f-red"/><text x="467" y="217" text-anchor="end" dominant-baseline="central" style="font-size:15.1px" class="t-red">lattice</text><text x="467" y="234" text-anchor="end" dominant-baseline="central" style="font-size:13.4px" class="t-gray">−3790</text><line x1="32" y1="340" x2="32" y2="392" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><polygon points="32,400 36,392 28,392" class="f-purple"/><text x="39" y="362" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-purple">ΔH°f</text><text x="39" y="379" text-anchor="start" dominant-baseline="central" style="font-size:13.4px" class="t-gray">−602</text><text x="260" y="440" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">kJ/mol · vertical spacing not to scale</text></svg>',
  bh_nacl: '<svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="242.1" x2="175" y2="242.1" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="182" y="242.1" text-anchor="start" dominant-baseline="central" style="font-size:16.2px">Na(s) + ½Cl₂(g)</text><line x1="60" y1="213.2" x2="175" y2="213.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="182" y="213.2" text-anchor="start" dominant-baseline="central" style="font-size:16.2px">Na(g) + ½Cl₂(g)</text><line x1="100" y1="180.6" x2="175" y2="180.6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="182" y="180.6" text-anchor="start" dominant-baseline="central" style="font-size:16.2px">Na(g) + Cl(g)</text><line x1="140" y1="48" x2="500" y2="48" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="320" y="36" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px">Na⁺(g) + e⁻ + Cl(g)</text><line x1="345" y1="141.3" x2="500" y2="141.3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="340" y="141.3" text-anchor="end" dominant-baseline="central" style="font-size:16.2px">Na⁺(g) + Cl⁻(g)</text><line x1="20" y1="352" x2="500" y2="352" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><text x="260" y="366" text-anchor="middle" dominant-baseline="central" style="font-size:16.2px">NaCl(s)</text><line x1="75" y1="242.1" x2="75" y2="221.2" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><polygon points="75,213.2 71,221.2 79,221.2" class="f-blue"/><text x="70" y="227.7" text-anchor="end" dominant-baseline="central" style="font-size:15.1px" class="t-blue">+108</text><line x1="115" y1="213.2" x2="115" y2="188.6" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><polygon points="115,180.6 111,188.6 119,188.6" class="f-blue"/><text x="110" y="196.9" text-anchor="end" dominant-baseline="central" style="font-size:15.1px" class="t-blue">+122</text><line x1="155" y1="180.6" x2="155" y2="56" class="s-blue" stroke-width="2.2" stroke-linecap="round"/><polygon points="155,48 151,56 159,56" class="f-blue"/><text x="162" y="106.3" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-blue">ionize Na</text><text x="162" y="123.3" text-anchor="start" dominant-baseline="central" style="font-size:13.4px" class="t-gray">+496</text><line x1="380" y1="48" x2="380" y2="133.3" class="s-green" stroke-width="2.2" stroke-linecap="round"/><polygon points="380,141.3 384,133.3 376,133.3" class="f-green"/><text x="388" y="86.7" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-green">Cl gains e⁻</text><text x="388" y="103.7" text-anchor="start" dominant-baseline="central" style="font-size:13.4px" class="t-gray">−349</text><line x1="460" y1="141.3" x2="460" y2="344" class="s-red" stroke-width="2.2" stroke-linecap="round"/><polygon points="460,352 464,344 456,344" class="f-red"/><text x="452" y="238.7" text-anchor="end" dominant-baseline="central" style="font-size:15.1px" class="t-red">lattice</text><text x="452" y="255.7" text-anchor="end" dominant-baseline="central" style="font-size:13.4px" class="t-gray">−788</text><line x1="35" y1="242.1" x2="35" y2="344" class="s-purple" stroke-width="2.2" stroke-linecap="round"/><polygon points="35,352 39,344 31,344" class="f-purple"/><text x="42" y="289.1" text-anchor="start" dominant-baseline="central" style="font-size:15.1px" class="t-purple">ΔH°f</text><text x="42" y="306.1" text-anchor="start" dominant-baseline="central" style="font-size:13.4px" class="t-gray">−411</text><text x="260" y="386" text-anchor="middle" dominant-baseline="central" style="font-size:14.6px" class="t-gray">energies in kJ/mol · up = energy in · down = energy out</text></svg>',
};
// </figures>

export const lesson: Lesson = {
  id: 'gchem-ionic-lattice',
  title: 'Ionic Bonding and Lattice Energy',
  summary: 'Put numbers on the ionic bond: Coulomb energy, lattice energy and its charge and size trends, the Born–Haber cycle for NaCl and MgO, and why sodium stops at Na⁺.',
  minutes: 20,
  objectives: [
    'Derive the Coulomb potential energy $E = kq_1q_2/r$ of two ions from the force law and compute it for an ion pair',
    'Define lattice energy and predict how it changes with ion charge and ion size',
    'Build a Born–Haber cycle and solve it for an unknown lattice energy (NaCl, MgO, KCl, CaO)',
    'Explain why $\\ce{MgO}$ melts about $2000\\ ^\\circ\\text{C}$ higher than $\\ce{NaCl}$, and why the correlation is not a proportion',
    'Use energy bookkeeping to explain why sodium chloride is $\\ce{Na+Cl-}$ and not $\\ce{Na^2+Cl^2-}$, while magnesium oxide is $\\ce{Mg^2+O^2-}$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From Coulomb\'s force to Coulomb\'s energy',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations you met the [[ionic-bond|ionic bond]] as the attraction between cations and anions, packed into a [[chem-crystal-lattice|crystal lattice]], with strength set by [[chem-coulombs-law|Coulomb\'s law]]: bigger charges and smaller distances pull harder. You also saw that $\\ce{MgO}$ melts far higher than $\\ce{NaCl}$. This lesson turns those qualitative statements into numbers you can calculate and test.',
        },
        {
          type: 'p',
          text: 'Chemists care about **energy** more than force, because energy is what gets released or absorbed when bonds form and break. The link between them is the calculus you already know: potential energy is the [[work|work]] needed to bring the charges in from infinitely far apart, an integral of the force.',
        },
        {
          type: 'derivation',
          title: 'Potential energy of two point charges',
          steps: [
            { tex: 'F(r) = k\\,\\frac{q_1 q_2}{r^2}', why: 'Coulomb\'s force law. With this sign convention $F > 0$ is repulsive (like charges) and $F < 0$ is attractive (opposite charges). $k = 8.99 \\times 10^{9}\\ \\text{N m}^2\\,\\text{C}^{-2}$.' },
            { tex: 'E(r) = \\int_r^{\\infty} F(s)\\,ds', why: 'Potential energy at separation $r$, measured from $E(\\infty) = 0$: the work the force does as the charges fly apart from $r$ to infinity. This is an [[improper-integral|improper integral]].' },
            { tex: '= kq_1q_2 \\int_r^{\\infty} s^{-2}\\,ds = kq_1q_2\\Big[-\\frac{1}{s}\\Big]_r^{\\infty}', why: 'Pull out the constants and use the power rule for antiderivatives.' },
            { tex: '= kq_1q_2\\left(0 + \\frac{1}{r}\\right) = \\frac{kq_1q_2}{r}', why: 'The limit of $-1/s$ as $s \\to \\infty$ is $0$, so the integral converges.' },
          ],
          result: '$E = kq_1q_2/r$. Opposite charges give a **negative** energy (lower than the separated ions), and it falls off as $1/r$, more gently than the $1/r^2$ force.',
        },
        {
          type: 'derivation',
          title: 'One $\\ce{Na+}$–$\\ce{Cl-}$ pair at $236\\ \\text{pm}$ (gas-phase NaCl)',
          steps: [
            { tex: 'E = \\frac{(8.99\\times10^{9})(+1.602\\times10^{-19})(-1.602\\times10^{-19})}{236\\times10^{-12}}\\ \\text{J}', why: 'Each ion carries one elementary charge, $e = 1.602 \\times 10^{-19}$ C. $1\\ \\text{pm} = 10^{-12}$ m.' },
            { tex: '= -9.78 \\times 10^{-19}\\ \\text{J per ion pair}', why: 'Units: $\\text{N m}^2\\text{C}^{-2} \\cdot \\text{C}^2 / \\text{m} = \\text{N m} = \\text{J}$.' },
            { tex: '\\times\\, 6.022\\times10^{23}\\ \\text{mol}^{-1} \\times \\frac{1\\ \\text{kJ}}{1000\\ \\text{J}} = -589\\ \\text{kJ/mol}', why: 'Chemists count per mole of pairs. Multiply by Avogadro\'s number and convert to kJ.' },
          ],
          result: 'A single ion pair is about $589\\ \\text{kJ/mol}$ more stable than the separated ions. Keep this number: a whole crystal does even better.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why charge matters more than you might guess',
          text: 'The energy depends on the **product** $q_1q_2$. Doubling both charges ($\\ce{Mg^2+}$ with $\\ce{O^2-}$ instead of $\\ce{Na+}$ with $\\ce{Cl-}$) multiplies the energy by $2 \\times 2 = 4$. Shrinking the distance helps too, but only as $1/r$: making the ions 10% closer buys only about 11% more energy. Charge is the big lever; size is the fine adjustment.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Compute the Coulomb energy of a single $\\ce{Mg^2+}$–$\\ce{O^2-}$ pair at $r = 212\\ \\text{pm}$, in kJ per mole of pairs. Use $k = 8.99\\times10^{9}\\ \\text{N m}^2\\,\\text{C}^{-2}$, $e = 1.602\\times10^{-19}$ C and $N_A = 6.022\\times10^{23}\\ \\text{mol}^{-1}$. Give three significant figures (include the sign).',
      hint: '$q_1 = +2e$ and $q_2 = -2e$, so $q_1q_2 = -4e^2$. Compute $E$ in joules, then multiply by $N_A$ and divide by 1000.',
      label: '$E =$',
      unit: 'kJ/mol',
      answer: '-4*8.99*10^9*(1.602*10^-19)^2/(212*10^-12)*6.022*10^23/1000',
      answerTex: '-2.62 \\times 10^{3}\\ \\text{kJ/mol}',
      tolerance: 6,
      explanation: '$E = \\frac{(8.99\\times10^{9})(-4)(1.602\\times10^{-19})^2}{212\\times10^{-12}} = -4.353\\times10^{-18}$ J per pair; times $6.022\\times10^{23}$ and divided by 1000 gives $-2621 \\approx -2.62\\times10^{3}$ kJ/mol. Compare with $-589$ kJ/mol for $\\ce{Na+Cl-}$ at 236 pm: the factor of 4 from the charges does most of the work, and the shorter distance adds the rest.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Lattice energy: charge and size trends',
      blocks: [
        {
          type: 'definition',
          term: 'Lattice energy',
          text: 'The [[gchem-lattice-energy|lattice energy]] $U$ of an ionic solid is the energy needed to separate one mole of the solid into its gaseous ions, far apart: $\\ce{MX(s) -> M+(g) + X-(g)}$, $\\Delta H = +U$. It is always positive by this definition; forming the lattice from gaseous ions releases the same amount.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two sign conventions',
          text: 'Some books define lattice energy for the reverse process (gas ions → solid) and quote it as negative, e.g. $-788$ kJ/mol for NaCl. The physics is identical. Always check the direction of the process a number refers to, then write the sign that matches your direction.',
        },
        {
          type: 'p',
          text: 'Because each ion attracts **all** its oppositely charged neighbors (and repels its like-charged next-nearest neighbors), the whole lattice is more stable than a collection of isolated pairs. But it still follows Coulomb\'s scaling: $U$ is roughly proportional to $|z_+ z_-|/r_0$, where $z_\\pm$ are the ion charges and $r_0 = r_+ + r_-$ is the distance between neighboring ion centers.',
        },
        {
          type: 'math',
          tex: 'U \\approx C\\,\\frac{|z_+ z_-|}{r_0}, \\qquad C \\approx 2.15 \\times 10^{5}\\ \\text{kJ pm mol}^{-1}\\ \\text{(rock-salt structure)}',
          caption: 'A one-constant model. $C$ bundles Coulomb\'s constant, Avogadro\'s number, the lattice geometry and the short-range repulsion of the ions (see the deep dive).',
        },
        {
          type: 'table',
          headers: ['Compound', 'Charges', '$r_0 = r_+ + r_-$ (pm)', '$U$ (kJ/mol)'],
          rows: [
            ['$\\ce{LiF}$', '$1+,\\ 1-$', '$76 + 133 = 209$', '1023'],
            ['$\\ce{NaF}$', '$1+,\\ 1-$', '$102 + 133 = 235$', '910'],
            ['$\\ce{NaCl}$', '$1+,\\ 1-$', '$102 + 181 = 283$', '788'],
            ['$\\ce{NaI}$', '$1+,\\ 1-$', '$102 + 220 = 322$', '682'],
            ['$\\ce{KBr}$', '$1+,\\ 1-$', '$138 + 196 = 334$', '671'],
            ['$\\ce{KI}$', '$1+,\\ 1-$', '$138 + 220 = 358$', '632'],
            ['$\\ce{MgO}$', '$2+,\\ 2-$', '$72 + 140 = 212$', '3791'],
            ['$\\ce{CaO}$', '$2+,\\ 2-$', '$100 + 140 = 240$', '3401'],
            ['$\\ce{SrO}$', '$2+,\\ 2-$', '$118 + 140 = 258$', '3223'],
          ],
          caption: 'Lattice energies from Born–Haber cycles (OpenStax *Chemistry 2e* Table 7.3 and standard compilations; sources differ by 1–2%). Ionic radii are Shannon radii for six-coordinate ions. Down a group the ions grow and $U$ falls; going from 1+/1− to 2+/2− roughly quadruples it.',
        },
        {
          type: 'graph',
          x: [180, 380],
          y: [0, 4.5],
          xStep: 20,
          yStep: 0.5,
          height: 340,
          functions: [
            { expr: '215/x', label: 'model, $|z_+z_-| = 1$', color: 'gray', dashed: true },
            { expr: '215*q/x', label: 'model, $|z_+z_-| = q$', color: 'blue' },
          ],
          points: [
            { x: 209, y: 1.023, label: 'LiF', color: 'green' },
            { x: 235, y: 0.91, label: 'NaF', color: 'green' },
            { x: 283, y: 0.788, label: 'NaCl', color: 'green' },
            { x: 322, y: 0.682, label: 'NaI', color: 'green' },
            { x: 358, y: 0.632, label: 'KI', color: 'green' },
            { x: 212, y: 3.791, label: 'MgO', color: 'red' },
            { x: 240, y: 3.401, label: 'CaO', color: 'red' },
            { x: 258, y: 3.223, label: 'SrO', color: 'red' },
            { x: 'r', y: '215*q/r', color: 'blue' },
          ],
          sliders: [
            { name: 'q', min: 1, max: 9, step: 1, value: 1, label: 'charge product $|z_+ z_-|$' },
            { name: 'r', min: 180, max: 380, step: 1, value: 283, label: 'ion separation $r_0$ (pm)' },
          ],
          readouts: [{ label: 'model $U$ (kJ/mol) $\\approx$', expr: '215000*q/r', digits: 0 }],
          caption: 'Vertical axis in thousands of kJ/mol. Green: real 1+/1− salts. Red: real 2+/2− oxides. Set $q = 1$: the curve threads the green points. Set $q = 4$: it jumps up to the red ones (a little high: the one-constant model overestimates the oxides by 3–7%). $q = 9$ would be a 3+/3− salt such as $\\ce{AlN}$.',
        },
        {
          type: 'deepdive',
          title: 'Where the constant comes from: the Madelung sum (an alternating series)',
          blocks: [
            {
              type: 'p',
              text: 'Take the simplest "crystal": an infinite line of alternating $+$ and $-$ ions, spacing $r_0$. One ion has 2 opposite neighbors at $r_0$, 2 like ions at $2r_0$, 2 opposite at $3r_0$, and so on. Its total Coulomb energy is a series you met in Calculus II:',
            },
            {
              type: 'math',
              tex: 'E = -\\frac{ke^2}{r_0}\\cdot 2\\left(1 - \\tfrac{1}{2} + \\tfrac{1}{3} - \\tfrac{1}{4} + \\cdots\\right) = -\\frac{ke^2}{r_0}\\cdot 2\\ln 2 \\approx -1.386\\,\\frac{ke^2}{r_0}',
              caption: 'The [[alternating-series|alternating]] harmonic series converges to $\\ln 2$, so the chain is 1.386 times as stable per ion as a single pair.',
            },
            {
              type: 'p',
              text: 'The multiplier is the **Madelung constant** $M$ of the structure. For the three-dimensional rock-salt (NaCl) lattice $M = 1.7476$. The 3D sum is only [[conditional-convergence|conditionally convergent]], so the order in which you add the shells changes the answer; physicists use a careful method (Ewald summation) to get it right. Molecular-dynamics codes that simulate ionic liquids and proteins use the same trick (particle-mesh Ewald) every time step.',
            },
            {
              type: 'p',
              text: 'Ions are not point charges: when their electron clouds touch they repel steeply. Born and Landé modeled that repulsion as $B/r^n$ with $n \\approx 6$–$12$, which multiplies the Coulomb result by $(1 - 1/n)$. With $M = 1.7476$, $r_0 = 283$ pm and $n = 8$: $U = \\frac{N_A M k e^2}{r_0}(1 - \\tfrac{1}{8}) \\approx 751$ kJ/mol for NaCl, within 5% of the experimental 788. The constant $C$ in the model above is just $N_AMke^2(1 - 1/n)$ tuned to the data.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Use the model $U \\approx C\\,|z_+z_-|/r_0$ to predict the ratio $U(\\ce{MgO})/U(\\ce{NaCl})$, with $r_0 = 212$ pm for $\\ce{MgO}$ and $283$ pm for $\\ce{NaCl}$. Give two decimal places.',
      hint: 'The constant $C$ cancels in the ratio. You need the charge-product ratio times the inverse distance ratio.',
      label: 'ratio $=$',
      answer: '4*283/212',
      answerTex: '5.34',
      tolerance: 0.01,
      explanation: '$\\frac{U(\\ce{MgO})}{U(\\ce{NaCl})} = \\frac{|2 \\cdot (-2)|/212}{|1 \\cdot (-1)|/283} = 4 \\times \\frac{283}{212} = 5.34$. The measured ratio is $3791/788 = 4.81$: the simple model captures the size of the effect (charge gives $\\times 4$, the smaller ions another $\\times 1.33$) but overshoots, because the short-range repulsion of the small, tightly packed $\\ce{Mg^2+}$ and $\\ce{O^2-}$ ions is relatively stronger.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'Rank by lattice energy, highest first: $\\ce{KBr}$, $\\ce{MgO}$, $\\ce{LiF}$, $\\ce{NaCl}$.',
      options: [
        { text: '$\\ce{MgO} > \\ce{LiF} > \\ce{NaCl} > \\ce{KBr}$', correct: true, why: 'The 2+/2− compound wins by a factor of about 4. Among the 1+/1− salts, the smallest ions (Li⁺, F⁻) give the largest $1/r_0$, and the largest ions (K⁺, Br⁻) the smallest.' },
        { text: '$\\ce{LiF} > \\ce{MgO} > \\ce{NaCl} > \\ce{KBr}$', why: 'LiF does have the smallest ions, but size is the fine adjustment. Charge product 4 versus 1 dominates: $U(\\ce{MgO}) = 3791$ versus $U(\\ce{LiF}) = 1023$ kJ/mol.' },
        { text: '$\\ce{KBr} > \\ce{NaCl} > \\ce{LiF} > \\ce{MgO}$', why: 'This ranks by formula mass. Heavier ions are larger, which **weakens** the attraction, so this order is exactly backwards.' },
        { text: '$\\ce{MgO} > \\ce{KBr} > \\ce{NaCl} > \\ce{LiF}$', why: 'Charge is handled correctly, but the size trend is reversed: larger ions sit farther apart and attract less.' },
      ],
      explanation: 'First sort by charge product $|z_+z_-|$ (the big lever), then by $r_0$ within each charge class (smaller is stronger). Table values: $\\ce{MgO}$ 3791, $\\ce{LiF}$ 1023, $\\ce{NaCl}$ 788, $\\ce{KBr}$ 671 kJ/mol.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The Born–Haber cycle for NaCl',
      blocks: [
        {
          type: 'p',
          text: 'Nobody can pull a mole of salt apart into gaseous ions and measure the heat, so how was the 788 in the table obtained? By going around the problem. Energy is a [[gchem-state-function|state function]]: the energy change between two states does not depend on the path. So you can build $\\ce{NaCl(s)}$ from its elements by any route you like and the totals must agree.',
        },
        {
          type: 'p',
          text: 'Two terms first. $\\Delta H$ (the [[gchem-enthalpy|enthalpy]] change) is the heat a process absorbs at constant pressure: positive means energy goes **in** (endothermic), negative means energy comes **out** (exothermic). The [[gchem-standard-enthalpy-of-formation|standard enthalpy of formation]] $\\Delta H^\\circ_f$ is $\\Delta H$ for making one mole of a compound from its elements in their standard states. The Thermochemistry unit develops both fully; here you only need to add them up. The [[gchem-born-haber-cycle|Born–Haber cycle]] compares two paths from the elements to the solid:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Atomize the metal', text: 'Sublime solid sodium to gaseous atoms: $\\ce{Na(s) -> Na(g)}$, $+108$ kJ/mol.' },
            { title: 'Atomize the nonmetal', text: 'Break half a mole of Cl–Cl bonds: $\\ce{1/2Cl2(g) -> Cl(g)}$, $\\tfrac12(243) \\approx +122$ kJ/mol.' },
            { title: 'Ionize the metal', text: 'First [[ionization-energy|ionization energy]]: $\\ce{Na(g) -> Na+(g) + e-}$, $+496$ kJ/mol.' },
            { title: 'Add the electron to the nonmetal', text: '[[gchem-electron-affinity|Electron affinity]] (the energy change when a gaseous atom gains an electron): $\\ce{Cl(g) + e- -> Cl-(g)}$, $-349$ kJ/mol.' },
            { title: 'Assemble the lattice', text: '$\\ce{Na+(g) + Cl-(g) -> NaCl(s)}$, $-U$: the unknown.' },
          ],
        },
        {
          type: 'figure',
          svg: FIG.bh_nacl,
          alt: 'Energy level diagram. From Na(s) + ½Cl2(g) at zero, blue arrows go up +108 to Na(g) + ½Cl2(g), +122 to Na(g) + Cl(g), and +496 (ionize Na) to Na+(g) + e− + Cl(g). A green arrow goes down −349 (Cl gains e−) to Na+(g) + Cl−(g). A long red arrow goes down −788 (lattice) to NaCl(s). A purple arrow on the left goes directly from the elements down −411 (ΔH°f) to NaCl(s).',
          caption: 'Up arrows cost energy, down arrows release it. The direct route (purple, $\\Delta H^\\circ_f$) and the five-step route (blue, green, red) start and end at the same levels, so their totals are equal. Drawn to scale: notice that the ions are 377 kJ/mol **above** the elements; only the lattice step makes salt stable.',
        },
        {
          type: 'derivation',
          title: 'Solve the cycle for the lattice energy of NaCl',
          steps: [
            { tex: '\\Delta H^\\circ_f = \\Delta H_{\\text{sub}} + \\tfrac12 D(\\ce{Cl2}) + IE_1 + EA + (-U)', why: 'Path independence: the direct route equals the sum of the five steps. The lattice step is $-U$ because $U$ is defined for pulling the solid apart.' },
            { tex: '-411 = 108 + 122 + 496 + (-349) - U', why: 'Substitute the values in kJ/mol ($\\Delta H^\\circ_f(\\ce{NaCl}) = -411$; values from OpenStax).' },
            { tex: '-411 = 377 - U', why: 'The first four steps sum to $+377$: making gaseous ions from the elements is uphill.' },
            { tex: 'U = 377 + 411 = 788\\ \\text{kJ/mol}', why: 'Solve for $U$. It is positive, as the definition requires.' },
          ],
          result: 'The lattice energy of NaCl is 788 kJ/mol. Compare 589 kJ/mol for one isolated ion pair: surrounding each ion with six neighbors (and more beyond) is worth about a third more.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Signs that never fail',
          text: 'Write each step as a chemical equation in the direction the cycle travels, attach the $\\Delta H$ for **that** direction, and add. Breaking things apart (sublimation, bond breaking, ionization) is always positive; the first electron affinity of a halogen is negative; forming a lattice is negative.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Order the steps of the Born–Haber route from the elements to solid potassium bromide, $\\ce{K(s) + 1/2Br2(l) -> KBr(s)}$, in the sequence used in this lesson (metal first, then nonmetal, then ions, then lattice).',
      lines: [
        '$\\ce{K(s) -> K(g)}$ (sublimation)',
        '$\\ce{1/2Br2(l) -> Br(g)}$ (vaporize and break the bond)',
        '$\\ce{K(g) -> K+(g) + e-}$ (ionization energy)',
        '$\\ce{Br(g) + e- -> Br-(g)}$ (electron affinity)',
        '$\\ce{K+(g) + Br-(g) -> KBr(s)}$ (minus the lattice energy)',
      ],
      distractors: ['$\\ce{K(s) -> K+(s) + e-}$ (ionize the solid metal)'],
      explanation: 'Atoms must be gaseous and isolated before you ionize them, because ionization energy and electron affinity are defined for gas-phase atoms. Bromine is a liquid at 25 °C, so its atomization step includes vaporization as well as breaking half a mole of Br–Br bonds. The distractor skips sublimation: ionization energies are not defined for atoms in a solid.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Find the lattice energy of $\\ce{KCl}$ from these data (kJ/mol): $\\Delta H^\\circ_f(\\ce{KCl}) = -437$; sublimation of K $= +89$; $IE_1(\\ce{K}) = +419$; $\\tfrac12 D(\\ce{Cl2}) = +122$; $EA(\\ce{Cl}) = -349$. Give the answer to the nearest kJ/mol, as a positive number.',
      hint: '$-437 = 89 + 122 + 419 + (-349) - U$.',
      label: '$U =$',
      unit: 'kJ/mol',
      answer: '89 + 122 + 419 - 349 + 437',
      answerTex: '718\\ \\text{kJ/mol}',
      tolerance: 0.5,
      explanation: 'The four steps that make gaseous ions sum to $89 + 122 + 419 - 349 = +281$ kJ/mol. Then $-437 = 281 - U$, so $U = 718$ kJ/mol. That fits the trend: $\\ce{K+}$ (138 pm) is larger than $\\ce{Na+}$ (102 pm), so KCl ($r_0 = 319$ pm) has a smaller lattice energy than NaCl (788).',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'MgO: paying for two electrons',
      blocks: [
        {
          type: 'p',
          text: 'Magnesium oxide shows the cycle under stress. Removing **two** electrons from Mg is expensive, and so is forcing a second electron onto $\\ce{O-}$, which already carries a negative charge and repels it. The second electron affinity of oxygen is therefore **positive** (energy must be put in). It cannot be measured directly: the value used, about $+744$ kJ/mol, is itself inferred from cycles like this one, and quoted values vary.',
        },
        {
          type: 'figure',
          svg: FIG.bh_mgo,
          alt: 'Energy level diagram, schematic spacing. From Mg(s) + ½O2(g), blue up arrows: +147 to Mg(g), +249 to Mg(g) + O(g), +738 (IE1) to Mg+(g) + O(g), +1451 (IE2) to Mg2+(g) + O(g). A green arrow down −141 to Mg2+(g) + O−(g), then an orange arrow up +744 to Mg2+(g) + O2−(g) at the top. A red arrow drops all the way down, lattice −3790, to MgO(s). A purple arrow from the elements down −602 (ΔH°f) to MgO(s).',
          caption: 'Making $\\ce{Mg^2+(g) + O^2-(g)}$ costs a net $3188$ kJ/mol, more than eight times as uphill as making $\\ce{Na+(g) + Cl-(g)}$. The lattice step repays it all and more.',
        },
        {
          type: 'derivation',
          title: 'Lattice energy of MgO',
          steps: [
            { tex: '147 + 249 = 396', why: 'Atomize: sublime Mg, then break half a mole of O=O bonds ($\\tfrac12 \\times 498$).' },
            { tex: '396 + 738 + 1451 = 2585', why: 'Remove two electrons: $IE_1 + IE_2$ of magnesium.' },
            { tex: '2585 + (-141) + 744 = 3188', why: 'Add two electrons to O: the first releases 141, the second costs 744.' },
            { tex: '\\Delta H^\\circ_f = 3188 - U \\implies -602 = 3188 - U', why: 'The direct route, $\\Delta H^\\circ_f(\\ce{MgO}) = -602$ kJ/mol, equals the stepwise route.' },
            { tex: 'U = 3188 + 602 = 3790\\ \\text{kJ/mol}', why: 'Within rounding of the table value 3791.' },
          ],
          result: 'Every step except the lattice is either costly or a small payback. Charge product 4 and small ions make the lattice energy large enough to win anyway.',
        },
        {
          type: 'heading',
          text: 'Why MgO melts so much higher than NaCl',
        },
        {
          type: 'p',
          text: 'Melting does not separate the ions completely, but it does break up the ordered lattice, and the forces resisting that are the same Coulomb attractions. With 4.8 times the lattice energy, $\\ce{MgO}$ melts at $2852\\ ^\\circ\\text{C}$ versus $801\\ ^\\circ\\text{C}$ for NaCl. It is also much harder and almost insoluble in water, which cannot supply enough energy to tear the ions out.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Correlation, not proportion',
          text: 'In kelvin the melting points are 3125 K and 1074 K, a ratio of 2.9, not 4.8. A liquid salt still has each ion surrounded mostly by opposite charges, so melting costs only a fraction of the lattice energy, and that fraction varies from compound to compound (LiF melts at 845 °C, lower than NaF at 993 °C, despite its larger $U$). Use lattice energy to predict the **direction** of melting-point and hardness trends, not their size.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'In the field',
          text: 'MgO lines furnaces and insulates "mineral-insulated" fire-rated cable because it stays solid and electrically insulating far beyond the temperatures that destroy plastics. And the MRE flameless ration heater runs on magnesium reacting with water, $\\ce{Mg + 2H2O -> Mg(OH)2 + H2}$: a large part of its heat output reflects $\\ce{Mg^2+}$ ending up in a strong lattice with small negative ions, just as in MgO.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student solves the Born–Haber cycle for calcium oxide with these data (kJ/mol): $\\Delta H^\\circ_f(\\ce{CaO}) = -635$; sublimation of Ca $= +178$; $IE_1 = +590$, $IE_2 = +1145$; O=O bond energy $= 498$; $EA_1(\\ce{O}) = -141$; $EA_2(\\ce{O}) = +744$. Tap the first line that is wrong.',
      lines: [
        'Atomize calcium: $+178$',
        'Ionize calcium twice: $590 + 1145 = +1735$',
        'Atomize oxygen: break the O=O bond, $+498$',
        'Add two electrons to O: $-141 + 744 = +603$',
        'Gaseous ions: $178 + 1735 + 498 + 603 = 3014$',
        '$-635 = 3014 - U \\implies U = 3649$ kJ/mol',
      ],
      errorLines: [3],
      explanation: 'CaO contains one O atom, so the cycle needs only $\\ce{1/2O2 -> O}$: half the bond energy, $\\tfrac12(498) = 249$ kJ/mol. Corrected: gaseous ions cost $178 + 1735 + 249 + 603 = 2765$, and $-635 = 2765 - U$ gives $U = 3400$ kJ/mol, in line with the tabulated 3401. As expected, it is a little below MgO (3791) because $\\ce{Ca^2+}$ is larger than $\\ce{Mg^2+}$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Why Na⁺Cl⁻ and not Na²⁺Cl²⁻',
      blocks: [
        {
          type: 'p',
          text: 'If a 2+/2− lattice is four times as stable, why doesn\'t sodium give away two electrons? The Born–Haber cycle answers with numbers. Sodium\'s second electron comes from the $n = 2$ core, close to the nucleus and poorly shielded: $IE_2(\\ce{Na}) = 4562$ kJ/mol, more than nine times $IE_1$.',
        },
        {
          type: 'derivation',
          title: 'A generous estimate for hypothetical Na²⁺Cl²⁻',
          steps: [
            { tex: '108 + 122 + 496 + 4562 = 5288', why: 'Atomize both elements, then remove two electrons from Na. All of these are known.' },
            { tex: '5288 + (-349) + EA_2(\\ce{Cl}) \\ge 4939', why: 'The first electron affinity of Cl releases 349. The second would push an electron into the next shell of an anion that already has a full octet; it is certainly **positive**, so dropping it can only make our estimate too low.' },
            { tex: 'U(\\ce{Na^2+Cl^2-}) \\approx 4 \\times 788 = 3152', why: 'Be generous: give the hypothetical solid four times the lattice energy of NaCl, as for a 2+/2− salt of the same size.' },
            { tex: '\\Delta H^\\circ_f \\ge 4939 - 3152 = +1787\\ \\text{kJ/mol}', why: 'Even with every assumption tilted in its favor, forming this compound would absorb nearly 1800 kJ/mol.' },
          ],
          result: 'Compare $-411$ kJ/mol for real $\\ce{Na+Cl-}$. The extra lattice energy cannot pay for breaking into a noble-gas core.',
        },
        {
          type: 'p',
          text: 'Magnesium is the opposite case. Its second electron is still a valence electron ($3s^2$), so $IE_2 = 1451$ is costly but affordable, and quadrupling the lattice energy repays it with room to spare. Run the cycle for a hypothetical $\\ce{Mg+O-}$ (a 1+/1− lattice of roughly NaF\'s size, $U \\approx 900$): $147 + 249 + 738 - 141 - 900 \\approx +90$ kJ/mol, uphill, versus $-602$ for real $\\ce{Mg^2+O^2-}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the octet "rule" works for ions',
          text: 'Ionic compounds settle on the charges that make $\\Delta H^\\circ_f$ most negative. Removing valence electrons is cheap enough to be repaid by the lattice; removing core electrons never is. Adding electrons to an anion that already has a noble-gas configuration would start a new shell, which is never repaid either. The noble-gas configurations you learned to predict are where both of those cliffs sit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'Transferring an electron from a gaseous sodium atom to a gaseous chlorine atom, $\\ce{Na(g) + Cl(g) -> Na+(g) + Cl-(g)}$, is exothermic, because chlorine releases energy when it gains the electron.',
      answer: false,
      explanation: 'It costs $IE_1(\\ce{Na}) + EA(\\ce{Cl}) = 496 - 349 = +147$ kJ/mol: endothermic. Isolated gaseous ions are **less** stable than isolated atoms. Ionic compounds form only because the ions then attract each other: the lattice step releases 788 kJ/mol for NaCl. Electron transfer is the price; Coulomb attraction is the payoff.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Putting lattice energy to work',
      blocks: [
        {
          type: 'p',
          text: 'Lattice energy is one side of many tug-of-wars you will meet later in this course. Whenever an ionic solid dissolves, melts or reacts, the ions must be pulled out of the lattice, and something else has to pay.',
        },
        {
          type: 'list',
          items: [
            '**Dissolving.** Water molecules surround the separated ions and release [[gchem-hydration-enthalpy|hydration energy]]. Whether a salt dissolves, and whether the solution gets warmer or colder, depends on hydration versus lattice energy. In an instant cold pack, ammonium nitrate dissolves even though the lattice costs slightly more than hydration repays, so the pack cools (the Solutions unit explains why it dissolves anyway).',
            '**Hardness and refractories.** High-$U$ oxides ($\\ce{MgO}$, $\\ce{Al2O3}$) are hard and melt above 2000 °C: furnace bricks, crucibles, armor ceramics and abrasives.',
            '**Choosing charges.** Cycles like the ones in this lesson predict which ions a metal forms, and why compounds like $\\ce{NaCl2}$ or $\\ce{MgCl}$ do not exist.',
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Bigger lattice energy',
            tone: 'neutral',
            text: 'Higher ion charges, smaller ions. Higher melting point, harder, usually less soluble. Examples: $\\ce{MgO}$, $\\ce{Al2O3}$, $\\ce{CaO}$, $\\ce{LiF}$.',
          },
          right: {
            title: 'Smaller lattice energy',
            tone: 'neutral',
            text: 'Charges of $1\\pm$, large ions. Lower melting point, softer, often very soluble. Examples: $\\ce{KI}$, $\\ce{CsI}$, $\\ce{NaI}$.',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'How this is tested',
          text: 'Expect three kinds of question: rank lattice energies (charge first, then size), solve a Born–Haber cycle for one unknown (often $U$, sometimes an electron affinity or $\\Delta H^\\circ_f$), and explain a property (melting point, hardness) from lattice energy. In cycles, the classic mistakes are using the full bond energy instead of half for a diatomic element, and dropping the sign of the electron affinity.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the summary of lattice-energy trends.',
      template: 'Lattice energy grows when the ion charges ___ and when the ions are ___. Of the two factors, ___ usually has the larger effect.',
      blanks: [{ answers: ['increase'] }, { answers: ['smaller'] }, { answers: ['charge'] }],
      wordBank: ['increase', 'decrease', 'smaller', 'larger', 'charge', 'size'],
      explanation: '$U \\propto |z_+z_-|/r_0$. Going from $1\\pm$ to $2\\pm$ multiplies $U$ by about 4, while realistic changes in ion size change it by tens of percent (LiF to KI is a factor of 1.6). That is why every 2+/2− oxide in the table beats every 1+/1− halide.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'Run a Born–Haber cycle backwards. For lithium fluoride, $U = 1046$ kJ/mol, sublimation of Li $= +159$, $IE_1(\\ce{Li}) = +520$, $\\tfrac12 D(\\ce{F2}) = +79$, $EA(\\ce{F}) = -328$ (all kJ/mol). Predict $\\Delta H^\\circ_f(\\ce{LiF})$, to the nearest kJ/mol.',
      hint: '$\\Delta H^\\circ_f = (\\text{sum of the four steps that make gaseous ions}) - U$.',
      label: '$\\Delta H^\\circ_f =$',
      unit: 'kJ/mol',
      answer: '159 + 520 + 79 - 328 - 1046',
      answerTex: '-616\\ \\text{kJ/mol}',
      tolerance: 0.5,
      explanation: 'Gaseous ions cost $159 + 520 + 79 - 328 = +430$ kJ/mol. The lattice releases 1046, so $\\Delta H^\\circ_f = 430 - 1046 = -616$ kJ/mol, matching the measured value. Fluorine\'s tiny bond energy (half of 158 is 79) and lithium\'s tiny ion both help make LiF one of the most stable 1:1 salts.',
    },
  ],
  takeaways: [
    'Coulomb potential energy is $E = kq_1q_2/r$ (the integral of the force from $r$ to $\\infty$); one $\\ce{Na+Cl-}$ pair at 236 pm is $-589$ kJ/mol.',
    'Lattice energy $U$ is the energy to separate one mole of ionic solid into gaseous ions; $U \\approx C\\,|z_+z_-|/r_0$, so charge is the big lever and size the fine adjustment.',
    'A Born–Haber cycle finds $U$ indirectly: $\\Delta H^\\circ_f = \\Delta H_{\\text{atomize}} + \\sum IE + \\sum EA - U$ (use half the bond energy of a diatomic element per atom).',
    'For NaCl, making gaseous ions costs $+377$ kJ/mol; the 788 kJ/mol lattice energy is what makes the salt stable ($\\Delta H^\\circ_f = -411$).',
    '$\\ce{MgO}$ ($U = 3791$) melts at 2852 °C versus 801 °C for NaCl: lattice energy predicts the direction of melting-point trends, not their size.',
    'Sodium stops at $\\ce{Na+}$ because its second electron is a core electron ($IE_2 = 4562$); magnesium goes to $\\ce{Mg^2+}$ because its second electron is a valence electron the lattice can pay for.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 7: Chemical Bonding and Molecular Geometry',
      url: 'https://openstax.org/books/chemistry-2e/pages/7-introduction',
      source: 'openstax',
      note: 'Section 7.5 (Strengths of Ionic and Covalent Bonds) covers lattice energy and the Born–Haber cycle, with the table of lattice energies used here.',
    },
    {
      title: 'Wikipedia — Born–Haber cycle',
      url: 'https://en.wikipedia.org/wiki/Born%E2%80%93Haber_cycle',
      source: 'wikipedia',
      note: 'The cycle for NaCl with each step labeled, plus historical background on Born and Haber.',
    },
    {
      title: 'Wikipedia — Madelung constant',
      url: 'https://en.wikipedia.org/wiki/Madelung_constant',
      source: 'wikipedia',
      note: 'The one-dimensional $2\\ln 2$ calculation, the conditionally convergent 3D sums, and Madelung constants for common structures.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "Lattice Energy" and "Born–Haber cycle" for more worked cycles, including ones solved for an unknown electron affinity.',
    },
  ],
};
