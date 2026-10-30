import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-free-energy-equilibrium',
  title: 'Free Energy and Equilibrium',
  summary: 'How ΔG depends on the mixture (ΔG = ΔG° + RT ln Q), why equilibrium is the minimum of G, ΔG° = −RT ln K, and how K changes with temperature through the van \'t Hoff equation, all applied to the Haber process.',
  minutes: 22,
  objectives: [
    'Distinguish $\\Delta G^\\circ$ (standard states) from $\\Delta G$ (the actual mixture) and calculate $\\Delta G = \\Delta G^\\circ + RT\\ln Q$',
    'Explain equilibrium as the minimum of $G$ along the reaction and derive $\\Delta G^\\circ = -RT\\ln K$',
    'Convert between $\\Delta G^\\circ$ and $K$, and estimate $K$ from $\\Delta G^\\circ$ by the "5.7 kJ per factor of 10" rule',
    'Use the van \'t Hoff equation to predict how $K$ changes with temperature and to find $K$ at a new temperature',
    'Explain the Haber process conditions as a compromise between thermodynamics and kinetics',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'ΔG° versus ΔG: the mixture matters',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson $\\Delta G^\\circ$ told you whether a reaction is spontaneous **under standard conditions**: every gas at exactly 1 bar, every solute at exactly 1 M. That is one particular mixture, and real reaction mixtures are almost never it. As a reaction runs, reactants are used up and products build up, and the free-energy change for the next bit of reaction changes with them.',
        },
        {
          type: 'list',
          items: [
            '$\\Delta G^\\circ$: a **fixed number** for a reaction at a given temperature, read from tables. It describes the standard-state mixture.',
            '$\\Delta G$: the free-energy change for the mixture **as it actually is** right now. Its sign tells you which way that mixture will go.',
          ],
        },
        {
          type: 'theorem',
          name: 'Free energy and the reaction quotient',
          tex: '\\Delta G = \\Delta G^\\circ + RT \\ln Q',
          text: '$Q$ is the reaction quotient from the equilibrium unit, with gas pressures in bar and concentrations in mol/L (each divided by its standard value, so $Q$ has no units). $R = 8.314$ J/(mol·K), $T$ in kelvin.',
        },
        {
          type: 'p',
          text: 'Where does the logarithm come from? From how the free energy of a gas depends on its pressure. At constant temperature, $dG = V\\,dP$ (squeezing a gas stores free energy in it), and the ideal gas law supplies $V$.',
        },
        {
          type: 'derivation',
          title: 'Free energy of an ideal gas at pressure P',
          steps: [
            { tex: 'dG = V\\,dP = \\frac{nRT}{P}\\,dP', why: 'At constant $T$, the change in $G = H - TS$ for a pure gas reduces to $V\\,dP$ (a standard result of thermodynamics). Substitute $V = nRT/P$ from the ideal gas law.' },
            { tex: 'G(P) - G^\\circ = \\int_{P^\\circ}^{P} \\frac{nRT}{P\'}\\,dP\' = nRT\\ln\\frac{P}{P^\\circ}', why: 'Integrate from the standard pressure $P^\\circ = 1$ bar (where $G = G^\\circ$) to $P$. The antiderivative of $1/P$ is $\\ln P$.' },
            { tex: 'G = G^\\circ + nRT \\ln P \\quad (P \\text{ in bar})', why: 'With $P$ measured in bar, $P/P^\\circ$ is just the number $P$.' },
            { tex: '\\Delta G = \\Delta G^\\circ + RT\\ln\\frac{P_C^{\\,c} P_D^{\\,d}}{P_A^{\\,a} P_B^{\\,b}} = \\Delta G^\\circ + RT \\ln Q', why: 'For $a\\ce{A} + b\\ce{B} -> c\\ce{C} + d\\ce{D}$, add $c$ and $d$ times the product terms and subtract $a$ and $b$ times the reactant terms. Coefficients become exponents ($n\\ln P = \\ln P^n$) and sums of logs become the log of a quotient.' },
          ],
          result: 'The same form holds for solutes (with molarities) and pure solids and liquids contribute 1 to $Q$, exactly as in the equilibrium unit.',
        },
        {
          type: 'derivation',
          title: 'Is limestone stable in ordinary air?',
          steps: [
            { tex: '\\ce{CaCO3(s) -> CaO(s) + CO2(g)}, \\quad \\Delta G^\\circ_{298} = +131.1\\ \\text{kJ}', why: 'From the Gibbs free energy lesson. That is for $\\ce{CO2}$ at 1 bar.' },
            { tex: 'Q = P_{\\ce{CO2}} = 4.2 \\times 10^{-4}', why: 'Air is about 420 ppm $\\ce{CO2}$, a partial pressure of $4.2 \\times 10^{-4}$ bar. The solids do not appear in $Q$.' },
            { tex: 'RT\\ln Q = (8.314 \\times 10^{-3})(298.15)\\ln(4.2\\times 10^{-4}) = -19.3\\ \\text{kJ}', why: 'Use $R$ in kJ/(mol·K) so the units match $\\Delta G^\\circ$. $RT = 2.479$ kJ/mol at 298 K is worth remembering.' },
            { tex: '\\Delta G = 131.1 - 19.3 = +111.8\\ \\text{kJ}', why: 'Removing most of the product makes $\\Delta G$ less positive, but nowhere near negative.' },
          ],
          result: 'Still strongly positive: limestone does not decompose in air at room temperature, even though the air holds very little $\\ce{CO2}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'For $\\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$ at 298.15 K, $\\Delta G^\\circ = -32.7$ kJ. A mixture contains $P_{\\ce{N2}} = 0.50$ bar, $P_{\\ce{H2}} = 0.50$ bar and $P_{\\ce{NH3}} = 5.0$ bar. Calculate $\\Delta G$ for this mixture, in kJ (one decimal place). $R = 8.314$ J/(mol·K).',
      hint: '$Q = \\dfrac{P_{\\ce{NH3}}^2}{P_{\\ce{N2}} P_{\\ce{H2}}^3}$. Then $\\Delta G = \\Delta G^\\circ + RT\\ln Q$ with $RT$ in kJ.',
      label: '$\\Delta G =$',
      unit: 'kJ',
      answer: '-32.7 + 8.314*298.15/1000*ln(400)',
      answerTex: '-17.8\\ \\text{kJ}',
      tolerance: 0.1,
      explanation: '$Q = \\frac{(5.0)^2}{(0.50)(0.50)^3} = \\frac{25}{0.0625} = 400$. $RT\\ln Q = (2.479\\ \\text{kJ})(\\ln 400 = 5.991) = +14.85$ kJ. $\\Delta G = -32.7 + 14.85 = -17.8$ kJ. The product-rich mixture is less eager to react than the standard one, but $\\Delta G < 0$ still, so more ammonia forms: this mixture has not yet reached equilibrium ($Q < K$).',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Equilibrium is the bottom of the free-energy valley',
      blocks: [
        {
          type: 'p',
          text: 'Picture the total free energy $G$ of a reaction mixture as the reaction proceeds, from pure reactants to pure products. Measure progress by the **extent of reaction** $\\xi$ (Greek "xi"): the fraction converted, from 0 to 1. Take the simplest case, $\\ce{A(g) <=> B(g)}$ at a total pressure of 1 bar, so $Q = \\xi/(1-\\xi)$.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [-8, 8],
          xStep: 0.1,
          yStep: 2,
          functions: [
            { expr: 'd*x + 8.314*T/1000*((1-x)*ln(1-x) + x*ln(x))', label: '$G(\\xi)$ (kJ, relative to pure A)', color: 'blue', domain: [0.0005, 0.9995] },
          ],
          tangents: [{ expr: 'd*x + 8.314*T/1000*((1-x)*ln(1-x) + x*ln(x))', at: 'q', color: 'orange', label: 'slope = ΔG' }],
          points: [
            { x: 'exp(-1000d/(8.314T))/(1 + exp(-1000d/(8.314T)))', y: '8.314*T/1000*ln(1/(1 + exp(-1000d/(8.314T))))', label: 'equilibrium', color: 'green' },
            { x: 0, y: 0, label: 'pure A', color: 'gray' },
            { x: 1, y: 'd', label: 'pure B', color: 'gray' },
          ],
          sliders: [
            { name: 'd', min: -6, max: 6, step: 0.1, value: 2, label: '$\\Delta G^\\circ$ (kJ/mol)' },
            { name: 'T', min: 200, max: 1000, step: 10, value: 300, label: '$T$ (K)' },
            { name: 'q', min: 0.02, max: 0.98, step: 0.01, value: 0.7, label: 'current mixture $\\xi$' },
          ],
          readouts: [
            { label: '$\\Delta G = \\Delta G^\\circ + RT\\ln Q$ at $\\xi$ (kJ) $=$', expr: 'd + 8.314*T/1000*ln(q/(1-q))', digits: 3 },
            { label: '$K = e^{-\\Delta G^\\circ/RT} =$', expr: 'exp(-1000d/(8.314T))', digits: 3 },
            { label: '$\\xi_{\\text{eq}} = K/(1+K) =$', expr: 'exp(-1000d/(8.314T))/(1 + exp(-1000d/(8.314T)))', digits: 3 },
          ],
          caption: 'Horizontal axis: extent of reaction $\\xi$. The orange tangent at the current mixture has slope $\\Delta G$: negative to the left of the minimum (the reaction runs forward), positive to the right (it runs backward). At the green point the slope is zero: equilibrium. Slide $\\Delta G^\\circ$ through zero and watch the minimum move from the reactant side to the product side; raise $T$ and the valley deepens (mixing entropy counts more).',
        },
        {
          type: 'p',
          text: 'Three facts are visible in the graph. **(1)** $\\Delta G^\\circ$ is the height difference between the two ends, pure B minus pure A. **(2)** $\\Delta G$ is the **slope** of the curve at the current composition, $\\Delta G = \\partial G/\\partial \\xi$: the free-energy change per mole of further reaction. At $\\xi = 0.5$, where $Q = 1$, the slope equals $\\Delta G^\\circ$. **(3)** A reaction always rolls downhill toward the minimum, from either side, and stops there.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why is there a minimum in the middle?',
          text: 'If $G$ were just a straight line from $G^\\circ_A$ to $G^\\circ_B$, a reaction would run all the way to whichever end is lower. The curve sags below that line because **mixing** A and B has entropy: the $RT[(1-\\xi)\\ln(1-\\xi) + \\xi\\ln\\xi]$ term is negative for every mixture. That sag guarantees a minimum strictly between 0 and 1, which is why every reaction reaches an equilibrium with *some* reactants and *some* products, even when $K$ is enormous or tiny.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A reaction has $\\Delta G^\\circ = +10.0$ kJ at 298 K. A mixture is prepared with $Q = 1.0 \\times 10^{-4}$. What happens?',
      options: [
        { text: 'Nothing: $\\Delta G^\\circ > 0$, so the reaction cannot go forward', why: '$\\Delta G^\\circ$ describes the standard mixture ($Q = 1$), not this one. The sign that decides direction is that of $\\Delta G$.' },
        { text: 'The reaction runs forward, because $\\Delta G \\approx -12.8$ kJ', correct: true, why: '$\\Delta G = 10.0 + (2.479)\\ln(10^{-4}) = 10.0 - 22.8 = -12.8$ kJ. With so little product present, forming more is downhill.' },
        { text: 'The reaction runs in reverse, because $\\Delta G \\approx +32.8$ kJ', why: 'That adds $RT\\ln Q$ with the wrong sign: $\\ln(10^{-4})$ is negative ($-9.21$), which lowers $\\Delta G$.' },
        { text: 'The mixture is at equilibrium', why: 'Equilibrium needs $\\Delta G = 0$, i.e. $Q = K$. Here $K = e^{-10\\,000/2479} = 0.018$, far from $Q = 10^{-4}$.' },
      ],
      explanation: 'Use $\\Delta G = \\Delta G^\\circ + RT\\ln Q$: $RT = 2.479$ kJ, $\\ln(1.0\\times10^{-4}) = -9.21$, so $RT\\ln Q = -22.8$ kJ and $\\Delta G = -12.8$ kJ $< 0$. The reaction proceeds forward until $Q$ rises to $K = 0.018$. A positive $\\Delta G^\\circ$ means $K < 1$, not "no reaction".',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'ΔG° = −RT ln K',
      blocks: [
        {
          type: 'p',
          text: 'At the bottom of the valley the reaction has no further tendency to go either way, so $\\Delta G = 0$, and the reaction quotient has its equilibrium value, $Q = K$. Put both facts into $\\Delta G = \\Delta G^\\circ + RT\\ln Q$:',
        },
        {
          type: 'derivation',
          title: 'From the minimum to the equilibrium constant',
          steps: [
            { tex: '0 = \\Delta G^\\circ + RT\\ln K', why: 'At equilibrium, $\\Delta G = 0$ and $Q = K$.' },
            { tex: '\\Delta G^\\circ = -RT\\ln K', why: 'Rearrange. This links a number from thermochemical tables to the equilibrium constant.' },
            { tex: 'K = e^{-\\Delta G^\\circ/RT}', why: 'Solve for $K$ by exponentiating both sides.' },
            { tex: '\\Delta G = -RT\\ln K + RT\\ln Q = RT\\ln\\frac{Q}{K}', why: 'Substitute back into the general equation: a compact form that ties free energy to the $Q$ vs $K$ test from the equilibrium unit.' },
          ],
          result: '$Q < K \\Rightarrow \\Delta G < 0$ (forward); $Q = K \\Rightarrow \\Delta G = 0$ (equilibrium); $Q > K \\Rightarrow \\Delta G > 0$ (reverse). Le Châtelier\'s predictions are free energy in disguise.',
        },
        {
          type: 'p',
          text: 'Because $K$ depends **exponentially** on $\\Delta G^\\circ$, modest free energies give enormous or tiny equilibrium constants. At 298 K, $RT\\ln 10 = 5.71$ kJ/mol, so every 5.71 kJ/mol of $\\Delta G^\\circ$ changes $K$ by a factor of 10 ($\\log_{10} K = -\\Delta G^\\circ / 5.71$ with $\\Delta G^\\circ$ in kJ/mol).',
        },
        {
          type: 'table',
          headers: ['$\\Delta G^\\circ$ (kJ/mol)', '$K$ at 298 K', 'At equilibrium…'],
          rows: [
            ['−100', '$3.3 \\times 10^{17}$', 'essentially complete'],
            ['−50', '$5.8 \\times 10^{8}$', 'products overwhelmingly'],
            ['−10', '57', 'products favoured'],
            ['0', '1', 'comparable amounts'],
            ['+10', '0.018', 'reactants favoured'],
            ['+50', '$1.7 \\times 10^{-9}$', 'reactants overwhelmingly'],
            ['+100', '$3.0 \\times 10^{-18}$', 'essentially no reaction'],
          ],
          caption: '$K = e^{-\\Delta G^\\circ/RT}$ with $RT = 2.479$ kJ/mol. A swing of only 200 kJ/mol spans 35 powers of ten.',
        },
        {
          type: 'derivation',
          title: 'K for ammonia synthesis at 25 °C',
          steps: [
            { tex: '\\Delta G^\\circ = -32.7\\ \\text{kJ} = -32\\,700\\ \\text{J}', why: 'From $\\Delta H^\\circ - T\\Delta S^\\circ$ in the previous lesson (the $\\Delta G^\\circ_f$ table gives $-33.0$ kJ; the difference is table rounding). Convert to J because $R$ is in J.' },
            { tex: '\\ln K = -\\frac{\\Delta G^\\circ}{RT} = \\frac{32\\,700}{(8.314)(298.15)} = 13.19', why: 'The J and the mol·K cancel, leaving a pure number, as a logarithm requires.' },
            { tex: 'K = e^{13.19} = 5.4 \\times 10^{5}', why: 'Exponentiate. This is $K_p$, with pressures in bar.' },
          ],
          result: 'At room temperature the equilibrium lies far toward ammonia. (Keeping more digits, $\\Delta G^\\circ = -32.74$ kJ, gives the same $5.4 \\times 10^5$.)',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg"><circle cx="240" cy="45" r="30" fill="none" stroke="currentColor" class="s-blue" stroke-width="2.4"/><text x="240" y="51" text-anchor="middle" font-size="17" class="t-blue">ΔG°</text><circle cx="90" cy="195" r="30" fill="none" stroke="currentColor" class="s-green" stroke-width="2.4"/><text x="90" y="201" text-anchor="middle" font-size="17" class="t-green">K</text><circle cx="390" cy="195" r="30" fill="none" stroke="currentColor" class="s-gray" stroke-width="2" stroke-dasharray="5 4"/><text x="390" y="201" text-anchor="middle" font-size="17" class="t-gray">E°</text><line x1="218" y1="67" x2="112" y2="173" stroke="currentColor" stroke-width="2.4"/><line x1="262" y1="67" x2="368" y2="173" stroke="currentColor" class="s-gray" stroke-width="2" stroke-dasharray="6 4"/><line x1="120" y1="195" x2="360" y2="195" stroke="currentColor" class="s-gray" stroke-width="2" stroke-dasharray="6 4"/><text x="150" y="108" text-anchor="end" font-size="14">ΔG° = −RT ln K</text><text x="150" y="128" text-anchor="end" font-size="12" class="t-gray">this lesson</text><text x="330" y="108" font-size="14" class="t-gray">ΔG° = −nFE°</text><text x="330" y="128" font-size="12" class="t-gray">electrochemistry</text><text x="240" y="186" text-anchor="middle" font-size="14" class="t-gray">E° = (RT/nF) ln K</text><text x="240" y="225" text-anchor="middle" font-size="12" class="t-gray">three ways to say how far a reaction goes</text></svg>`,
          alt: 'Triangle with nodes delta G standard at the top, K at bottom left and E standard at bottom right. The left edge is labelled delta G standard equals minus RT ln K, this lesson. The dashed right edge is labelled delta G standard equals minus n F E standard, electrochemistry. The dashed bottom edge is labelled E standard equals RT over nF times ln K.',
          caption: '$\\Delta G^\\circ$, $K$ and (for redox reactions) the standard cell potential $E^\\circ$ are three measures of the same thing. The electrochemistry unit fills in the dashed edges.',
          maxWidth: 440,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Joules against kilojoules, again',
          text: '$R = 8.314$ **J**/(mol·K) while $\\Delta G^\\circ$ comes in **kJ**. Dividing kJ by J gives an exponent 1000 times too small and a $K$ suspiciously close to 1. Either convert $\\Delta G^\\circ$ to J or use $R = 8.314 \\times 10^{-3}$ kJ/(mol·K).',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Which K is it?',
          text: 'The $K$ in $\\Delta G^\\circ = -RT\\ln K$ is the thermodynamic constant, with gases in bar and solutes in mol/L. For gas reactions it is $K_p$ (pressures in bar), for solution reactions $K_c$, and $K_a$, $K_b$, $K_{sp}$ are all special cases. If an exam gives $K_c$ for a gas reaction, convert to $K_p$ first.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Acetic acid has $K_a = 1.8 \\times 10^{-5}$ at 298.15 K. Calculate $\\Delta G^\\circ$ for its ionization, $\\ce{CH3COOH(aq) + H2O(l) <=> H3O+(aq) + CH3COO^-(aq)}$, in kJ/mol (one decimal place). $R = 8.314$ J/(mol·K).',
      hint: '$\\Delta G^\\circ = -RT\\ln K_a$. Expect a positive answer, since $K_a < 1$.',
      label: '$\\Delta G^\\circ =$',
      unit: 'kJ/mol',
      answer: '-8.314*298.15*ln(1.8*10^-5)/1000',
      answerTex: '+27.1\\ \\text{kJ/mol}',
      tolerance: 0.06,
      explanation: '$\\ln(1.8\\times10^{-5}) = -10.925$. $\\Delta G^\\circ = -(8.314)(298.15)(-10.925) = +27\\,080$ J/mol $= +27.1$ kJ/mol. Check with the rule of thumb: $K_a \\approx 10^{-4.74}$, and $4.74 \\times 5.71 = 27.1$ kJ/mol. A positive $\\Delta G^\\circ$ means "weak acid": at standard concentrations (1 M of everything) ionization would run backward, and at equilibrium only a small fraction is ionized.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Connect free energy to the $Q$ vs $K$ test using $\\Delta G = RT\\ln(Q/K)$.',
      template: 'If $Q < K$, then $\\Delta G$ is ___ and the reaction proceeds in the ___ direction. If $\\Delta G^\\circ < 0$, then $K$ is ___ 1.',
      blanks: [{ answers: ['negative'] }, { answers: ['forward'] }, { answers: ['greater than'] }],
      wordBank: ['negative', 'positive', 'forward', 'reverse', 'greater than', 'less than'],
      explanation: '$Q < K$ makes $Q/K < 1$, so $\\ln(Q/K) < 0$ and $\\Delta G < 0$: the forward reaction is downhill, exactly the conclusion of the equilibrium unit. And $\\Delta G^\\circ = -RT\\ln K < 0$ requires $\\ln K > 0$, i.e. $K > 1$: a negative standard free energy means products are favoured at equilibrium.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'How K changes with temperature: the van \'t Hoff equation',
      blocks: [
        {
          type: 'p',
          text: 'You now have two expressions for $\\Delta G^\\circ$: one from tables, $\\Delta H^\\circ - T\\Delta S^\\circ$, and one from equilibrium, $-RT\\ln K$. Setting them equal shows exactly how $K$ depends on temperature.',
        },
        {
          type: 'derivation',
          title: 'Deriving the van \'t Hoff equation',
          steps: [
            { tex: '-RT\\ln K = \\Delta H^\\circ - T\\Delta S^\\circ', why: 'Both sides equal $\\Delta G^\\circ$ at temperature $T$.' },
            { tex: '\\ln K = -\\frac{\\Delta H^\\circ}{R}\\cdot\\frac{1}{T} + \\frac{\\Delta S^\\circ}{R}', why: 'Divide both sides by $-RT$.' },
            { tex: '\\ln K_2 - \\ln K_1 = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)', why: 'Write the line at two temperatures and subtract. The $\\Delta S^\\circ/R$ intercept cancels (assuming $\\Delta H^\\circ$ and $\\Delta S^\\circ$ are constant).' },
            { tex: '\\frac{d\\ln K}{dT} = \\frac{\\Delta H^\\circ}{RT^2}', why: 'Differentiating the second line with respect to $T$: the [[derivative]] of $1/T$ is $-1/T^2$. The sign of $\\Delta H^\\circ$ alone decides whether $K$ rises or falls with temperature.' },
          ],
          result: 'A plot of $\\ln K$ against $1/T$ is a straight line with slope $-\\Delta H^\\circ/R$ and intercept $\\Delta S^\\circ/R$.',
        },
        {
          type: 'theorem',
          name: 'Van \'t Hoff equation (two-point form)',
          tex: '\\ln\\frac{K_2}{K_1} = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)',
          text: 'The [[gchem-van-t-hoff-equation|van \'t Hoff equation]]. It has exactly the same shape as the Arrhenius equation for rate constants and the Clausius–Clapeyron equation for vapour pressure. That is no coincidence: vapour pressure *is* the equilibrium constant for $\\ce{X(l) <=> X(g)}$.',
        },
        {
          type: 'graph',
          x: [0.5, 4],
          y: [-40, 40],
          xStep: 0.5,
          yStep: 10,
          functions: [
            { expr: '-h*x/8.314 + s/8.314', label: '$\\ln K$', color: 'blue' },
          ],
          points: [
            { x: '1000/298.15', y: '-h*1000/(8.314*298.15) + s/8.314', label: '298 K', color: 'green' },
            { x: '1000/700', y: '-h*1000/(8.314*700) + s/8.314', label: '700 K', color: 'red' },
          ],
          sliders: [
            { name: 'h', min: -200, max: 200, step: 0.1, value: -91.8, label: '$\\Delta H^\\circ$ (kJ)' },
            { name: 's', min: -300, max: 300, step: 0.1, value: -198.1, label: '$\\Delta S^\\circ$ (J/K)' },
          ],
          readouts: [
            { label: '$K$ at 298 K $=$', expr: 'exp(-h*1000/(8.314*298.15) + s/8.314)', digits: 3 },
            { label: '$K$ at 700 K $=$', expr: 'exp(-h*1000/(8.314*700) + s/8.314)', digits: 3 },
          ],
          caption: 'Horizontal axis: $1000/T$ (in K⁻¹ × 1000), so **hot is on the left** and cold on the right. Defaults are the Haber process. Exothermic ($\\Delta H^\\circ < 0$): the line rises to the right, so $K$ is larger at low temperature. Make $\\Delta H^\\circ$ positive and the slope reverses. Changing $\\Delta S^\\circ$ only shifts the line up or down.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this agrees with Le Châtelier',
          text: 'For an exothermic reaction, heat is effectively a product. Raising $T$ "adds heat", and the equilibrium shifts back toward reactants: $K$ decreases. The van \'t Hoff equation says the same thing quantitatively: $\\Delta H^\\circ < 0$ makes $d\\ln K/dT < 0$. Le Châtelier tells you the direction; van \'t Hoff tells you by how much.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'Raising the temperature increases the equilibrium constant of every reaction, because molecules move faster at higher temperature.',
      answer: false,
      explanation: 'Faster molecules raise **rates** (the Arrhenius equation), for forward and reverse reactions alike. The equilibrium constant follows $d\\ln K/dT = \\Delta H^\\circ/(RT^2)$: it increases with $T$ only for **endothermic** reactions. For exothermic reactions such as ammonia synthesis, $K$ falls as $T$ rises. Higher temperature gets you to equilibrium faster, but possibly to a worse equilibrium.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'For $\\ce{N2O4(g) <=> 2NO2(g)}$, $K_p = 0.15$ at 298 K and $\\Delta H^\\circ = +57.2$ kJ. Assuming $\\Delta H^\\circ$ is constant, estimate $K_p$ at 350 K (two significant figures). $R = 8.314$ J/(mol·K).',
      hint: '$\\ln\\dfrac{K_2}{0.15} = -\\dfrac{57\\,200}{8.314}\\left(\\dfrac{1}{350} - \\dfrac{1}{298.15}\\right)$. The bracket is negative, so $K$ grows.',
      label: '$K_p(350\\ \\text{K}) =$',
      answer: '0.15*exp(-57200/8.314*(1/350 - 1/298.15))',
      answerTex: '4.6',
      tolerance: 0.06,
      explanation: '$\\frac{1}{350} - \\frac{1}{298.15} = 0.0028571 - 0.0033540 = -4.969 \\times 10^{-4}$ K⁻¹. Multiply by $-\\frac{57\\,200}{8.314} = -6880$ K: $\\ln\\frac{K_2}{K_1} = +3.42$, so $K_2 = 0.15 \\times e^{3.42} = 0.15 \\times 30.5 = 4.6$. An endothermic reaction: warming by just 52 K raises $K$ thirtyfold, which is why a sealed tube of this gas turns visibly browner (more $\\ce{NO2}$) in warm water.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Back to the Haber process: thermodynamics versus kinetics',
      blocks: [
        {
          type: 'p',
          text: 'Ammonia synthesis feeds roughly half the people on Earth through fertilizer, and it is also the starting point for nitric acid and, historically, for wartime nitrate production. Everything in this unit comes together in choosing its operating conditions.',
        },
        {
          type: 'derivation',
          title: 'K for $\\ce{N2 + 3H2 <=> 2NH3}$ at 700 K, two ways',
          steps: [
            { tex: '\\Delta G^\\circ_{700} \\approx \\Delta H^\\circ - T\\Delta S^\\circ = -91.8 - (700)(-0.1981) = +46.9\\ \\text{kJ}', why: 'Route 1: use the 298 K values of $\\Delta H^\\circ$ and $\\Delta S^\\circ$ at 700 K. The entropy penalty, $-T\\Delta S^\\circ$, has grown from 59 kJ to 139 kJ and now dominates.' },
            { tex: 'K_{700} = e^{-46\\,900/(8.314 \\times 700)} = e^{-8.06} = 3.2 \\times 10^{-4}', why: 'Convert to J and exponentiate.' },
            { tex: '\\ln\\frac{K_{700}}{K_{298}} = -\\frac{-91\\,800}{8.314}\\left(\\frac{1}{700} - \\frac{1}{298.15}\\right) = -21.26', why: 'Route 2: van \'t Hoff from $K_{298} = 5.4 \\times 10^5$. The bracket is negative and $-\\Delta H^\\circ/R$ is positive, so $K$ drops.' },
            { tex: 'K_{700} = (5.4\\times10^{5})\\,e^{-21.26} = 3.2 \\times 10^{-4}', why: 'The same answer, as it must be: both routes assume constant $\\Delta H^\\circ$ and $\\Delta S^\\circ$.' },
          ],
          result: 'Heating from 298 K to 700 K shrinks $K$ by a factor of about $10^9$. (Real values differ somewhat because $\\Delta H^\\circ$ and $\\Delta S^\\circ$ drift over 400 K, but the trend is right.)',
        },
        {
          type: 'table',
          headers: ['$T$ (K)', '$\\Delta G^\\circ$ (kJ)', '$K_p$'],
          rows: [
            ['298', '−32.7', '$5.4 \\times 10^{5}$'],
            ['400', '−12.6', '44'],
            ['463', '0', '1 (crossover, $T = \\Delta H^\\circ/\\Delta S^\\circ$)'],
            ['600', '+27.1', '$4.4 \\times 10^{-3}$'],
            ['700', '+46.9', '$3.2 \\times 10^{-4}$'],
            ['800', '+66.7', '$4.4 \\times 10^{-5}$'],
          ],
          caption: 'Estimated from $\\Delta H^\\circ = -91.8$ kJ and $\\Delta S^\\circ = -198.1$ J/K, treated as constant.',
        },
        {
          type: 'p',
          text: 'So why do ammonia plants run at about 670–770 K, where $K$ is small? Because at room temperature the reaction is immeasurably slow: the $\\ce{N#N}$ triple bond gives a huge activation energy. The industrial answer is a compromise that attacks each problem separately:',
        },
        {
          type: 'list',
          items: [
            '**Temperature** around 700 K and an **iron catalyst**: fast enough to be useful. (A catalyst speeds both directions and never changes $K$.)',
            '**High pressure**, 150–300 bar: $\\Delta n_{\\text{gas}} = -2$, so $Q = P_{\\ce{NH3}}^2/(P_{\\ce{N2}}P_{\\ce{H2}}^3)$ drops sharply when everything is compressed, making $Q < K$ and pushing the mixture toward ammonia.',
            '**Remove the product**: ammonia is condensed out as a liquid and the unreacted gases recycled, so $Q$ never catches up with $K$ and $\\Delta G$ stays negative.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Solving for the equilibrium mixture numerically',
          text: 'With $K$ in hand, finding the equilibrium composition means solving $Q(\\xi) = K$ for the extent $\\xi$, a polynomial with no friendly closed form for the Haber stoichiometry. That is a natural job for Newton\'s method on $f(\\xi) = \\ln Q(\\xi) - \\ln K$, which is exactly $\\Delta G/RT$: you are numerically walking down the free-energy valley to the point where its slope is zero.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'At 298.15 K, $\\ce{N2O4(g) <=> 2NO2(g)}$ has $\\Delta G^\\circ = +4.8$ kJ. A student calculates $K_p$. Tap the first line that is wrong.',
      lines: [
        '$\\Delta G^\\circ = -RT\\ln K$, so $\\ln K = -\\dfrac{\\Delta G^\\circ}{RT}$',
        '$\\ln K = -\\dfrac{4.8}{(8.314)(298.15)}$',
        '$\\ln K = -0.00194$',
        '$K = e^{-0.00194} = 0.998$, so reactants and products are about equally favoured',
      ],
      errorLines: [2],
      explanation: 'Line 2 puts $\\Delta G^\\circ$ in **kJ** over $R$ in **J**/(mol·K). The arithmetic in lines 3 and 4 then follows faithfully from that mistake. Correctly: $\\ln K = -\\frac{4800}{(8.314)(298.15)} = -1.936$, so $K = e^{-1.936} = 0.14$, in good agreement with the measured 0.15. A $K$ suspiciously close to 1 is the classic symptom of this unit error.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Order the steps to estimate $K$ for a reaction at 1000 K, starting from tables of $\\Delta H^\\circ_f$ and $S^\\circ$ at 298 K.',
      lines: [
        'Calculate $\\Delta H^\\circ_{\\text{rxn}}$ and $\\Delta S^\\circ_{\\text{rxn}}$ from the tables (products minus reactants)',
        'Compute $\\Delta G^\\circ_{1000} \\approx \\Delta H^\\circ - (1000\\ \\text{K})\\Delta S^\\circ$, in consistent units',
        'Convert $\\Delta G^\\circ$ to J/mol and compute $\\ln K = -\\Delta G^\\circ/(RT)$ with $T = 1000$ K',
        'Exponentiate: $K = e^{\\ln K}$',
      ],
      distractors: ['Use $\\Delta G^\\circ_f$ values from the table to get $\\Delta G^\\circ$ at 1000 K'],
      explanation: 'Free energies of formation are tabulated at 298 K only, so at 1000 K you must rebuild $\\Delta G^\\circ$ from $\\Delta H^\\circ$ and $\\Delta S^\\circ$ (assumed roughly constant), then use $\\Delta G^\\circ = -RT\\ln K$ at the **same** temperature, 1000 K. The van \'t Hoff equation from a known $K_{298}$ would give the same answer.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'At 700 K the Haber equilibrium constant is only about $3 \\times 10^{-4}$, compared with $5 \\times 10^5$ at 298 K. Why do ammonia plants still run near 700 K?',
      options: [
        { text: 'Because the reaction is endothermic, so heating increases the yield', why: 'It is exothermic ($\\Delta H^\\circ = -91.8$ kJ). That is precisely why $K$ falls as $T$ rises.' },
        { text: 'Because at room temperature the reaction is far too slow, even with a catalyst', correct: true, why: 'Thermodynamics favours ammonia at low $T$, but kinetics forbids working there. 700 K plus an iron catalyst gives a useful rate; high pressure and removal of ammonia then make up for the small $K$.' },
        { text: 'Because the iron catalyst increases $K$ at high temperature', why: 'A catalyst lowers the activation energy for both directions equally; it changes how fast equilibrium is reached, never $K$ itself.' },
        { text: 'Because $\\Delta G^\\circ$ becomes more negative as $T$ rises', why: 'With $\\Delta S^\\circ < 0$, the $-T\\Delta S^\\circ$ term is positive and grows with $T$: $\\Delta G^\\circ$ goes from $-32.7$ kJ at 298 K to $+46.9$ kJ at 700 K.' },
      ],
      explanation: 'Thermodynamics says **where** a reaction ends up; kinetics says **how fast** it gets there. For ammonia the two pull in opposite directions, so engineers choose a moderate temperature for speed, a catalyst to speed it further, high pressure to drive $Q$ below $K$ (fewer moles of gas on the product side) and continuous removal of ammonia so the mixture never sits at equilibrium.',
    },
  ],
  takeaways: [
    '$\\Delta G^\\circ$ is for the standard mixture (1 bar, 1 M); $\\Delta G = \\Delta G^\\circ + RT\\ln Q$ is for the actual mixture, and its sign decides the direction.',
    'Along the reaction, $G$ has a minimum between pure reactants and pure products; the slope there is $\\Delta G = 0$ and the composition is the equilibrium one.',
    '$\\Delta G^\\circ = -RT\\ln K$ and $\\Delta G = RT\\ln(Q/K)$. Every 5.71 kJ/mol of $\\Delta G^\\circ$ changes $K$ tenfold at 298 K; negative $\\Delta G^\\circ$ means $K > 1$.',
    'Use $R = 8.314$ J/(mol·K) with $\\Delta G^\\circ$ in J; a $K$ suspiciously near 1 usually means a kJ/J mix-up.',
    'Van \'t Hoff: $\\ln K = -\\Delta H^\\circ/(RT) + \\Delta S^\\circ/R$; $\\ln K$ vs $1/T$ is a line of slope $-\\Delta H^\\circ/R$. Exothermic reactions have smaller $K$ at higher $T$.',
    'The Haber process runs where $K$ is small (about 700 K) because kinetics demands it; high pressure, a catalyst and product removal compensate.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 16: Thermodynamics',
      url: 'https://openstax.org/books/chemistry-2e/pages/16-introduction',
      source: 'openstax',
      note: 'Section 16.4 relates free energy to the reaction quotient and the equilibrium constant, with a graph of G versus reaction progress.',
    },
    {
      title: 'OpenStax Chemistry 2e — Chapter 13: Fundamental Equilibrium Concepts',
      url: 'https://openstax.org/books/chemistry-2e/pages/13-introduction',
      source: 'openstax',
      note: 'A refresher on Q, K and Le Châtelier\'s principle, including the Haber process conditions.',
    },
    {
      title: 'Wikipedia — Van \'t Hoff equation',
      url: 'https://en.wikipedia.org/wiki/Van_%27t_Hoff_equation',
      source: 'wikipedia',
      note: 'Derivation, the van \'t Hoff plot and its use to measure reaction enthalpies from equilibrium data.',
    },
    {
      title: 'Wikipedia — Haber process',
      url: 'https://en.wikipedia.org/wiki/Haber_process',
      source: 'wikipedia',
      note: 'The history and engineering of industrial ammonia synthesis, including the temperature and pressure compromise.',
    },
  ],
};
