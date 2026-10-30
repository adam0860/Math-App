import type { Lesson } from '../../types';

// <figures> (hand-written SVG, rendered and checked in light and dark themes)
const FIG = {
  roadmap: `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="30" width="124" height="52" rx="9" fill="none" stroke="currentColor" stroke-width="2" class="s-blue"/><text x="68.0" y="53.0" text-anchor="middle" font-size="13.5" font-weight="600">Volume</text><text x="68.0" y="71.0" text-anchor="middle" font-size="12" class="t-gray">of solution (L)</text><rect x="188" y="30" width="124" height="52" rx="9" fill="none" stroke="currentColor" stroke-width="2" class="s-orange"/><text x="250.0" y="53.0" text-anchor="middle" font-size="13.5" font-weight="600">Mass</text><text x="250.0" y="71.0" text-anchor="middle" font-size="12" class="t-gray">of solution (g)</text><rect x="370" y="30" width="124" height="52" rx="9" fill="none" stroke="currentColor" stroke-width="2" class="s-purple"/><text x="432.0" y="53.0" text-anchor="middle" font-size="13.5" font-weight="600">Mass</text><text x="432.0" y="71.0" text-anchor="middle" font-size="12" class="t-gray">of solvent (kg)</text><rect x="6" y="150" width="124" height="52" rx="9" fill="none" stroke="currentColor" stroke-width="2" class="s-teal"/><text x="68.0" y="173.0" text-anchor="middle" font-size="13.5" font-weight="600">Moles</text><text x="68.0" y="191.0" text-anchor="middle" font-size="12" class="t-gray">of solute</text><rect x="188" y="150" width="124" height="52" rx="9" fill="none" stroke="currentColor" stroke-width="2" class="s-orange"/><text x="250.0" y="173.0" text-anchor="middle" font-size="13.5" font-weight="600">Mass</text><text x="250.0" y="191.0" text-anchor="middle" font-size="12" class="t-gray">of solute (g)</text><line x1="132" y1="56" x2="180.0" y2="56.0" stroke="currentColor" stroke-width="2" /><polygon points="186,56 177.0,51.0 177.0,61.0" fill="currentColor" /><text x="159" y="47" text-anchor="middle" font-size="12">× density</text><line x1="314" y1="56" x2="362.0" y2="56.0" stroke="currentColor" stroke-width="2" /><polygon points="368,56 359.0,51.0 359.0,61.0" fill="currentColor" /><text x="341" y="47" text-anchor="middle" font-size="12">− solute</text><line x1="132" y1="176" x2="180.0" y2="176.0" stroke="currentColor" stroke-width="2" /><polygon points="186,176 177.0,171.0 177.0,181.0" fill="currentColor" /><text x="159" y="167" text-anchor="middle" font-size="12">× molar</text><text x="159" y="196" text-anchor="middle" font-size="12">mass</text><path d="M312 176 H341 V70" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><polygon points="341,62 336,72 346,72" fill="currentColor"/><text x="350" y="125" text-anchor="start" font-size="12" class="t-gray">subtract the</text><text x="350" y="141" text-anchor="start" font-size="12" class="t-gray">solute mass</text><text x="10" y="236" font-size="13" text-anchor="start"><tspan class="t-teal" font-weight="600">molarity</tspan> = moles solute ÷ <tspan class="t-blue" font-weight="600">L solution</tspan></text><text x="10" y="258" font-size="13" text-anchor="start"><tspan class="t-teal" font-weight="600">molality</tspan> = moles solute ÷ <tspan class="t-purple" font-weight="600">kg solvent</tspan></text><text x="10" y="280" font-size="13" text-anchor="start"><tspan class="t-orange" font-weight="600">mass %</tspan> = g solute ÷ <tspan class="t-orange" font-weight="600">g solution</tspan> × 100</text><text x="490" y="258" font-size="12" text-anchor="end" class="t-gray">density is the only bridge</text><text x="490" y="276" font-size="12" text-anchor="end" class="t-gray">between volume and mass</text></svg>`,
};
// </figures>

export const lesson: Lesson = {
  id: 'gchem-concentration-units',
  title: 'Concentration Units',
  summary: 'Molarity, molality, mole fraction, mass percent, ppm and ppb: what each one measures, why molality ignores temperature, and how to convert between them with density.',
  minutes: 20,
  objectives: [
    'Define and calculate molarity, molality, mole fraction, mass percent, ppm and ppb',
    'Explain why molarity changes with temperature while molality and mole fraction do not',
    'Convert between concentration units using a convenient basis and the solution\'s density',
    'Use ppm and ppb for trace contaminants and compare them with drinking-water limits',
    'Choose the most suitable concentration unit for a given job',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'One solution, many ways to say "how strong"',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations you used [[molarity]], moles of solute per liter of solution, to make solutions and to do [[dilution|dilutions]]. Molarity is perfect at the lab bench: you measure volumes with pipets and burets, and moles per liter turns a volume straight into an amount of reactant.',
        },
        {
          type: 'p',
          text: 'But a concentration is just a ratio "how much solute per how much of something", and different jobs need different denominators. Here is the whole family. Each one is a fraction; what changes is what you count (moles or mass) and what you divide by (solution or solvent, volume or mass).',
        },
        {
          type: 'table',
          headers: ['Unit', 'Definition', 'Changes with $T$?'],
          rows: [
            ['Molarity $M$', '$\\dfrac{\\text{mol solute}}{\\text{L solution}}$', 'yes'],
            ['Molality $m$', '$\\dfrac{\\text{mol solute}}{\\text{kg solvent}}$', 'no'],
            ['Mole fraction $\\chi_A$', '$\\dfrac{\\text{mol } A}{\\text{total mol (all components)}}$', 'no'],
            ['Mass percent', '$\\dfrac{\\text{g solute}}{\\text{g solution}} \\times 100\\%$', 'no'],
            ['ppm / ppb', '$\\dfrac{\\text{g solute}}{\\text{g solution}} \\times 10^6$ or $\\times 10^9$', 'no'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why molarity drifts with temperature',
          text: 'Liquids expand when heated. The moles of solute stay the same, but the liters of solution grow, so moles per liter falls. Water\'s density drops from 0.9982 g/mL at 20 °C to 0.9922 g/mL at 40 °C, about 0.6%, so a dilute solution made at exactly $1.000$ M at 20 °C is only about $0.994$ M at 40 °C. Masses and mole counts do not change with temperature at all, so every unit built only from them (the last four rows) is temperature-proof.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'A sugar solution is warmed from 20 °C to 60 °C in a sealed flask (no evaporation). Which of its concentrations **changes**?',
      options: [
        { text: 'Its molality', why: 'Molality divides moles of solute by kilograms of solvent. Neither number changes when the solution is heated.' },
        { text: 'Its mole fraction of sugar', why: 'A ratio of mole counts. No molecules are added or removed, so it is unchanged.' },
        { text: 'Its molarity', correct: true, why: 'The solution expands on heating, so the same moles of sugar are spread through more liters. Molarity decreases slightly.' },
        { text: 'Its mass percent of sugar', why: 'A ratio of masses. Heating does not change mass, so mass percent is unchanged.' },
      ],
      explanation: 'Only units with a **volume** in them depend on temperature, because volume is the one quantity that changes when a liquid is heated. Molarity has liters of solution in the denominator, so it falls as the solution expands. Molality, mole fraction and mass percent are built from masses and moles only.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Molality: moles per kilogram of solvent',
      blocks: [
        {
          type: 'definition',
          term: 'Molality',
          text: 'The [[gchem-molality|molality]] $m$ of a solute is the moles of solute per **kilogram of solvent** (not of solution): $m = \\dfrac{n_{\\text{solute}}}{\\text{kg solvent}}$, unit mol/kg, written $m$ ("molal").',
        },
        {
          type: 'p',
          text: 'To make a molal solution you weigh both components on a balance: no volumetric flask, no temperature control. That is why physical chemists prefer molality for measurements that span a range of temperatures, such as the freezing-point and boiling-point experiments in the next lesson.',
        },
        {
          type: 'derivation',
          title: '25.0 g of ethylene glycol ($\\ce{C2H6O2}$, antifreeze) in 200.0 g of water',
          steps: [
            { tex: 'M(\\ce{C2H6O2}) = 2(12.011) + 6(1.008) + 2(15.999) = 62.07\\ \\text{g/mol}', why: 'Molar mass from atomic masses.' },
            { tex: 'n = \\frac{25.0\\ \\cancel{\\text{g}}}{62.07\\ \\cancel{\\text{g}}/\\text{mol}} = 0.4028\\ \\text{mol}', why: 'Grams of solute to moles.' },
            { tex: '200.0\\ \\text{g water} = 0.2000\\ \\text{kg water}', why: 'Molality needs the **solvent** mass in kilograms. Do not add the 25.0 g of glycol: it is solute.' },
            { tex: 'm = \\frac{0.4028\\ \\text{mol}}{0.2000\\ \\text{kg}} = 2.01\\ \\text{mol/kg} = 2.01\\ m', why: 'Divide moles of solute by kilograms of solvent; three significant figures from 25.0 g.' },
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong denominator',
            tone: 'bad',
            tex: ['m = \\dfrac{0.4028\\ \\text{mol}}{0.2250\\ \\text{kg solution}} = 1.79\\ m'],
            text: 'Divides by solute + solvent.',
          },
          right: {
            title: 'Right denominator',
            tone: 'good',
            tex: ['m = \\dfrac{0.4028\\ \\text{mol}}{0.2000\\ \\text{kg solvent}} = 2.01\\ m'],
            text: 'Divides by the solvent alone.',
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two letters, two meanings',
          text: 'Capital $M$ is molarity (mol per **liter of solution**); lowercase $m$ is molality (mol per **kilogram of solvent**). They are close for dilute water solutions, because 1 L of dilute solution contains almost exactly 1 kg of water, but they separate quickly as the solution gets more concentrated or the solvent is not water.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A solution is made by dissolving 12.5 g of urea, $\\ce{CO(NH2)2}$ ($M = 60.06$ g/mol), in 150.0 g of water. What is its molality? (three significant figures)',
      hint: 'Moles of urea ÷ kilograms of **water** (0.1500 kg).',
      label: '$m =$',
      unit: 'mol/kg',
      answer: '12.5/60.06/0.1500',
      answerTex: '1.39\\ m',
      tolerance: 0.006,
      explanation: '$n = 12.5 / 60.06 = 0.2081$ mol of urea. The solvent mass is $150.0$ g $= 0.1500$ kg, so $m = 0.2081 / 0.1500 = 1.39$ mol/kg. If you divided by the solution mass, $0.1625$ kg, you would get $1.28$, the classic mistake.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Mole fraction and mass percent',
      blocks: [
        {
          type: 'definition',
          term: 'Mole fraction',
          text: 'The [[gchem-mole-fraction|mole fraction]] of component $A$ is $\\chi_A = \\dfrac{n_A}{n_A + n_B + \\cdots}$. It has no units, and the mole fractions of all components add to exactly 1.',
        },
        {
          type: 'p',
          text: 'Mole fraction counts particles, which is what matters whenever a property depends on what fraction of the molecules at a surface or in a gas are of one kind. You will use it for partial pressures of gas mixtures and, in the next lesson, for the vapor pressure of solutions (Raoult\'s law).',
        },
        {
          type: 'definition',
          term: 'Mass percent',
          text: 'The [[gchem-mass-percent|mass percent]] (weight percent, % w/w) is $\\dfrac{\\text{mass of solute}}{\\text{mass of solution}} \\times 100\\%$. It is the unit on most commercial labels: household bleach is about 6% sodium hypochlorite, seawater about 3.5% dissolved salts, concentrated hydrochloric acid about 37% $\\ce{HCl}$.',
        },
        {
          type: 'derivation',
          title: 'A 40.0% (by mass) ethanol–water mixture: what is the mole fraction of ethanol?',
          steps: [
            { tex: '\\text{Basis: } 100.0\\ \\text{g solution} \\implies 40.0\\ \\text{g}\\ \\ce{C2H5OH} + 60.0\\ \\text{g}\\ \\ce{H2O}', why: 'Mass percent is a ratio, so pick the amount that makes the numbers easy. With 100 g of solution, percentages become grams.' },
            { tex: 'n_{\\ce{C2H5OH}} = \\frac{40.0\\ \\text{g}}{46.07\\ \\text{g/mol}} = 0.8682\\ \\text{mol}', why: 'Molar mass of ethanol: $2(12.011) + 6(1.008) + 15.999 = 46.07$ g/mol.' },
            { tex: 'n_{\\ce{H2O}} = \\frac{60.0\\ \\text{g}}{18.02\\ \\text{g/mol}} = 3.330\\ \\text{mol}', why: 'The solvent counts in the total too: mole fraction includes every component.' },
            { tex: '\\chi_{\\ce{C2H5OH}} = \\frac{0.8682}{0.8682 + 3.330} = 0.207', why: 'Moles of ethanol over total moles.' },
          ],
          result: 'Forty percent of the **mass** is ethanol, but only about 21% of the **molecules** are, because each ethanol molecule is 2.6 times heavier than a water molecule. Mass percent and mole fraction answer different questions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A mixture contains 32.0 g of methanol, $\\ce{CH3OH}$ (32.04 g/mol), and 54.0 g of water (18.02 g/mol). What is the mole fraction of methanol? (three significant figures)',
      hint: 'Convert both masses to moles; $\\chi = n_{\\text{methanol}} / (n_{\\text{methanol}} + n_{\\text{water}})$.',
      label: '$\\chi_{\\ce{CH3OH}} =$',
      answer: '(32.0/32.04)/((32.0/32.04)+(54.0/18.02))',
      answerTex: '0.250',
      tolerance: 0.0006,
      explanation: '$n_{\\ce{CH3OH}} = 32.0 / 32.04 = 0.9988$ mol and $n_{\\ce{H2O}} = 54.0 / 18.02 = 2.997$ mol. Then $\\chi = \\frac{0.9988}{0.9988 + 2.997} = 0.250$: one molecule in four is methanol. By mass the mixture is $32.0 / 86.0 = 37.2\\%$ methanol, a different number for a different question.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Trace amounts: ppm and ppb',
      blocks: [
        {
          type: 'p',
          text: 'For tiny concentrations, percent is clumsy (0.000001%?). Instead we scale the same mass ratio by a million or a billion. These are [[gchem-ppm-ppb|parts per million and parts per billion]]:',
        },
        {
          type: 'math',
          tex: '\\text{ppm} = \\frac{\\text{mass solute}}{\\text{mass solution}} \\times 10^6 \\qquad \\text{ppb} = \\frac{\\text{mass solute}}{\\text{mass solution}} \\times 10^9',
        },
        {
          type: 'p',
          text: 'For dilute solutions **in water** there is a handy shortcut. One liter of such a solution has a mass of almost exactly 1 kg $= 10^6$ mg $= 10^9$ µg. So 1 mg of solute per liter is 1 mg per $10^6$ mg, that is 1 ppm, and 1 µg per liter is 1 ppb.',
        },
        {
          type: 'theorem',
          name: 'Dilute aqueous shortcut',
          text: '1 ppm ≈ 1 mg/L and 1 ppb ≈ 1 µg/L, valid because dilute aqueous solutions have a density of about 1.00 g/mL.',
        },
        {
          type: 'table',
          headers: ['Contaminant', 'U.S. EPA drinking-water limit (MCL)', 'In ppm or ppb'],
          rows: [
            ['Arsenic', '0.010 mg/L', '10 ppb'],
            ['Mercury (inorganic)', '0.002 mg/L', '2 ppb'],
            ['Fluoride', '4.0 mg/L', '4.0 ppm'],
            ['Nitrate (as N)', '10 mg/L', '10 ppm'],
          ],
          caption: 'Maximum contaminant levels for public water systems. Toxic metals are limited in ppb; less toxic ions in ppm.',
        },
        {
          type: 'derivation',
          title: 'The arsenic limit as a molarity',
          steps: [
            { tex: '10\\ \\text{ppb} \\approx 10\\ \\mu\\text{g/L} = 10 \\times 10^{-6}\\ \\text{g/L}', why: 'The dilute aqueous shortcut, then micrograms to grams.' },
            { tex: '\\frac{1.0 \\times 10^{-5}\\ \\cancel{\\text{g}}/\\text{L}}{74.92\\ \\cancel{\\text{g}}/\\text{mol}} = 1.3 \\times 10^{-7}\\ \\text{M}', why: 'Divide by the molar mass of arsenic to get moles per liter.' },
          ],
          result: 'A molarity of $1.3 \\times 10^{-7}$ M is correct but hard to read or remember. "10 ppb" says the same thing in a form a water-treatment operator can compare at a glance.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'ppm in gases means something else',
          text: 'For gases, ppm is usually by **volume** (equivalently by moles), not by mass. "Atmospheric $\\ce{CO2}$ is about 420 ppm" means 420 of every million gas molecules are $\\ce{CO2}$, a mole fraction of $4.2 \\times 10^{-4}$. Carbon monoxide alarms and military gas detectors report ppm the same way.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A 250.0 mL sample of well water is found to contain 4.0 µg of arsenic. What is the arsenic concentration in ppb? (two significant figures; treat the water\'s density as 1.00 g/mL)',
      hint: 'ppb ≈ µg per liter. How many liters is 250.0 mL?',
      label: 'arsenic $=$',
      unit: 'ppb',
      answer: '4.0/0.2500',
      answerTex: '16\\ \\text{ppb}',
      tolerance: 0.5,
      explanation: '$4.0\\ \\mu\\text{g} / 0.2500\\ \\text{L} = 16\\ \\mu\\text{g/L} = 16$ ppb. From the definition: the sample has mass $250.0$ g $= 2.500 \\times 10^8$ µg, and $\\frac{4.0}{2.500 \\times 10^8} \\times 10^9 = 16$ ppb. That is above the 10 ppb limit, so this well would need treatment (reverse osmosis, from the next lesson, is one option).',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'A contaminant present at 1 ppm (by mass) in gasoline (density 0.74 g/mL) amounts to 1 mg per liter of gasoline.',
      answer: false,
      explanation: 'The shortcut 1 ppm ≈ 1 mg/L works only because a liter of dilute aqueous solution weighs about 1 kg. A liter of gasoline weighs only 0.74 kg $= 7.4 \\times 10^5$ mg, so 1 ppm means $10^{-6} \\times 7.4 \\times 10^5 = 0.74$ mg per liter. Whenever the density is not 1.00 g/mL, go back to the mass-ratio definition.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Converting between units: pick a basis, use the density',
      blocks: [
        {
          type: 'p',
          text: 'Every conversion has the same shape. Each unit is a ratio, so you may imagine any convenient amount of the solution (a **basis**), work out all its pieces, and form the new ratio. The only link between a volume and a mass is the solution\'s [[density]].',
        },
        {
          type: 'figure',
          svg: FIG.roadmap,
          alt: 'Flow diagram. Volume of solution times density gives mass of solution; subtracting the mass of solute gives mass of solvent. Moles of solute times molar mass gives mass of solute, which feeds into the subtraction. Below: molarity is moles of solute over liters of solution, molality is moles of solute over kilograms of solvent, mass percent is grams of solute over grams of solution times 100.',
          caption: 'Every conversion is a walk around this map. Density crosses from volume to mass; molar mass crosses from moles to grams; subtracting the solute gives the solvent.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Choose a basis', text: 'Starting from molarity, take 1 L of solution. From molality, take 1 kg of solvent. From mass percent, take 100 g of solution.' },
            { title: 'Fill in all four pieces', text: 'Moles and grams of solute; grams of solution; grams (and moles) of solvent. Use molar masses and the density.' },
            { title: 'Form the ratio you want', text: 'Divide the right numerator by the right denominator, watching solution versus solvent.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Concentrated hydrochloric acid: 37.0% $\\ce{HCl}$ by mass, density 1.19 g/mL. Find $M$, $m$ and $\\chi_{\\ce{HCl}}$.',
          steps: [
            { tex: '\\text{Basis: } 1.000\\ \\text{L} = 1000\\ \\text{mL solution}', why: 'Molarity is wanted, so 1 L of solution makes the final division trivial.' },
            { tex: '1000\\ \\cancel{\\text{mL}} \\times 1.19\\ \\text{g}/\\cancel{\\text{mL}} = 1190\\ \\text{g solution}', why: 'Density converts the volume of solution into its mass.' },
            { tex: '0.370 \\times 1190\\ \\text{g} = 440.3\\ \\text{g HCl} \\implies \\frac{440.3}{36.46} = 12.08\\ \\text{mol HCl}', why: 'Mass percent gives the solute mass; its molar mass (36.46 g/mol) gives moles.' },
            { tex: 'M = \\frac{12.08\\ \\text{mol}}{1.000\\ \\text{L}} = 12.1\\ \\text{M}', why: 'Moles of solute per liter of solution.' },
            { tex: '1190 - 440.3 = 749.7\\ \\text{g water} \\implies m = \\frac{12.08\\ \\text{mol}}{0.7497\\ \\text{kg}} = 16.1\\ m', why: 'Subtract the solute to get the solvent, then divide by kilograms of solvent.' },
            { tex: 'n_{\\ce{H2O}} = \\frac{749.7}{18.02} = 41.60\\ \\text{mol} \\implies \\chi_{\\ce{HCl}} = \\frac{12.08}{12.08 + 41.60} = 0.225', why: 'Moles of water, then moles of HCl over total moles.' },
          ],
          result: 'The same bottle is 37.0% by mass, 12.1 M, 16.1 m and $\\chi = 0.225$. The molality is much larger than the molarity because only 750 g of each liter is water.',
        },
        {
          type: 'derivation',
          title: 'From molarity to molality: 0.500 M sucrose ($\\ce{C12H22O11}$, 342.30 g/mol), density 1.06 g/mL',
          steps: [
            { tex: '\\text{Basis: } 1.000\\ \\text{L solution} = 1060\\ \\text{g}', why: 'Start from molarity, so take 1 L; the density gives its mass.' },
            { tex: '0.500\\ \\text{mol} \\times 342.30\\ \\text{g/mol} = 171.2\\ \\text{g sucrose}', why: 'The liter contains 0.500 mol of solute; convert to grams so it can be subtracted.' },
            { tex: '1060 - 171.2 = 888.8\\ \\text{g water} = 0.8888\\ \\text{kg}', why: 'Solution minus solute is solvent.' },
            { tex: 'm = \\frac{0.500\\ \\text{mol}}{0.8888\\ \\text{kg}} = 0.563\\ m', why: 'Moles of solute per kilogram of solvent.' },
          ],
          result: 'A heavy solute takes up a lot of the liter, so molality ($0.563\\ m$) exceeds molarity ($0.500$ M) by 13%.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'The electrolyte in a lead–acid vehicle battery is about 35.0% sulfuric acid by mass, with density 1.26 g/mL. What is its molarity? ($\\ce{H2SO4}$: 98.08 g/mol; three significant figures)',
      hint: 'Basis 1 L: mass of solution $= 1260$ g; 35.0% of that is $\\ce{H2SO4}$; convert to moles.',
      label: '$M =$',
      unit: 'mol/L',
      answer: '1260*0.350/98.08',
      answerTex: '4.50\\ \\text{M}',
      tolerance: 0.006,
      explanation: 'One liter of the acid has mass $1000\\ \\text{mL} \\times 1.26\\ \\text{g/mL} = 1260$ g, of which $0.350 \\times 1260 = 441$ g is $\\ce{H2SO4}$. That is $441 / 98.08 = 4.50$ mol, so the solution is $4.50$ M. (Its molality is higher, $5.49\\ m$, since each liter holds only 819 g of water.) As a battery discharges, sulfuric acid is consumed and the density falls, which is why a hydrometer reading of density tells you a lead–acid battery\'s state of charge.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student converts 2.00 M $\\ce{NaCl}$ (density 1.08 g/mL; $\\ce{NaCl}$ 58.44 g/mol) to molality. Tap the first line that is wrong.',
      lines: [
        'Basis: 1.000 L of solution, mass $= 1000 \\times 1.08 = 1080$ g',
        'It contains $2.00$ mol $\\ce{NaCl}$ $= 2.00 \\times 58.44 = 116.9$ g',
        'Mass of solvent $= 1080$ g $= 1.080$ kg',
        '$m = 2.00 / 1.080 = 1.85$ mol/kg',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses the mass of the whole **solution** as the mass of solvent. Molality needs kilograms of solvent: $1080 - 116.9 = 963.1$ g $= 0.9631$ kg of water. The correct molality is $2.00 / 0.9631 = 2.08\\ m$, larger than the molarity, not smaller. (Line 2 computed the solute mass precisely so it could be subtracted, and then the subtraction was forgotten.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'When do molarity and molality agree, and which should you use?',
      blocks: [
        {
          type: 'p',
          text: 'Molarity and molality share a numerator (moles of solute) and differ only in the denominator: liters of solution versus kilograms of solvent. The graph shows molality as a function of molarity for a solution of fixed density, from the 1 L basis: $m = \\dfrac{M}{\\rho - M \\cdot \\mathcal{M}/1000}$, with $\\rho$ in g/mL (kg per L) and solute molar mass $\\mathcal{M}$ in g/mol.',
        },
        {
          type: 'graph',
          x: [0, 4],
          y: [0, 6],
          xStep: 0.5,
          yStep: 1,
          functions: [
            { expr: 'x/(d - x*w/1000)', label: 'molality $m$', color: 'blue', domain: [0, '0.97*1000d/w'] },
            { expr: 'x', label: '$m = M$', color: 'gray', dashed: true },
          ],
          points: [{ x: 'c', y: 'c/(d - c*w/1000)', label: 'your solution', color: 'red' }],
          sliders: [
            { name: 'w', min: 20, max: 400, step: 1, value: 58, label: 'solute molar mass (g/mol)' },
            { name: 'd', min: 1, max: 1.5, step: 0.01, value: 1.04, label: 'density (g/mL)' },
            { name: 'c', min: 0.05, max: 3, step: 0.05, value: 1, label: 'molarity $M$' },
          ],
          readouts: [
            { label: 'molality $m =$', expr: 'c/(d - c*w/1000)', digits: 3 },
            { label: 'kg of solvent per L $=$', expr: 'd - c*w/1000', digits: 3 },
          ],
          caption: 'Horizontal axis: molarity (mol/L); vertical: molality (mol/kg). Near zero the curve hugs the line $m = M$: a dilute aqueous solution has about 1 kg of water per liter. Raise the molar mass and the curve bends upward, because the solute itself fills more of each liter. (Density is held fixed here for simplicity; in reality it rises as solute is added.)',
        },
        {
          type: 'table',
          headers: ['Job', 'Best unit', 'Why'],
          rows: [
            ['Titrations, solution stoichiometry', 'molarity', 'volume × molarity = moles, measured with glassware'],
            ['Freezing/boiling points, data over a temperature range', 'molality', 'independent of $T$, made by weighing'],
            ['Vapor pressure, gas mixtures', 'mole fraction', 'properties depend on the fraction of molecules'],
            ['Commercial products, labels', 'mass percent', 'easy to make and check by weighing'],
            ['Trace contaminants', 'ppm, ppb', 'readable numbers for tiny amounts'],
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Conversion problems are a favorite exam item because they test whether you really know each definition. The two classic errors are dividing by kg of **solution** for molality, and forgetting that density is needed whenever a volume must become a mass. Write "solution" or "solvent" next to every mass and volume you compute.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'You will measure the freezing point of a coolant sample as it is chilled from 20 °C down to −30 °C, and you need a concentration value that stays fixed throughout. Which unit should you report?',
      options: [
        { text: 'Molarity', why: 'The solution contracts as it cools, so molarity changes during the run. It is the wrong choice for data spanning a temperature range.' },
        { text: 'Molality', correct: true, why: 'Moles of solute per kilogram of solvent depends only on masses, which do not change on cooling. This is the standard unit for freezing-point work.' },
        { text: 'ppb', why: 'ppb is temperature-independent, but it is meant for trace contaminants. A coolant is tens of percent solute, which would be hundreds of millions of ppb.' },
        { text: 'Moles of solute per liter of solvent', why: 'Not a standard unit, and the volume of solvent still changes with temperature.' },
      ],
      explanation: 'Any unit with a volume in it drifts as the liquid expands or contracts. Molality uses masses only, and it is also the unit that appears in the freezing-point and boiling-point formulas of the next lesson, $\\Delta T = iKm$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Concentrated aqueous ammonia is 28.0% $\\ce{NH3}$ by mass with density 0.899 g/mL ($\\ce{NH3}$: 17.03 g/mol). Put the steps for finding its molarity in order.',
      lines: [
        'Take 1.000 L (1000 mL) of solution as the basis',
        'Mass of solution $= 1000\\ \\text{mL} \\times 0.899\\ \\text{g/mL} = 899$ g',
        'Mass of $\\ce{NH3}$ $= 0.280 \\times 899\\ \\text{g} = 252$ g',
        'Moles of $\\ce{NH3}$ $= 252\\ \\text{g} \\div 17.03\\ \\text{g/mol} = 14.8$ mol',
        'Molarity $= 14.8\\ \\text{mol} \\div 1.000\\ \\text{L} = 14.8$ M',
      ],
      distractors: ['Mass of water $= 899 - 252 = 647$ g, so divide moles by 0.647 kg'],
      explanation: 'With molarity as the target, 1 L of solution is the natural basis. Density turns it into mass, mass percent gives the solute mass, molar mass gives moles, and dividing by the 1.000 L basis gives $14.8$ M. The distractor computes the solvent mass, which you would need for **molality** ($14.8 / 0.647 = 22.8\\ m$), not molarity.',
    },
  ],
  takeaways: [
    'Molarity = mol solute / L **solution**; molality = mol solute / kg **solvent**; mole fraction = mol component / total mol; mass percent = g solute / g solution × 100%.',
    'Only molarity (a volume-based unit) changes with temperature; molality, mole fraction, mass percent, ppm and ppb are built from masses and moles and do not.',
    'ppm and ppb are mass ratios × $10^6$ and × $10^9$; in dilute water, 1 ppm ≈ 1 mg/L and 1 ppb ≈ 1 µg/L, but not in liquids whose density differs from 1 g/mL.',
    'To convert, choose a basis (1 L solution, 1 kg solvent or 100 g solution), fill in the moles and masses of solute and solvent using molar mass and density, then form the ratio you want.',
    'For dilute aqueous solutions $M \\approx m$; concentrated or heavy-solute solutions have $m > M$.',
    'Use molarity at the bench, molality for temperature-dependent physical measurements, mole fraction for vapor pressures, mass percent for products and ppm/ppb for trace contaminants.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 11: Solutions and Colloids',
      url: 'https://openstax.org/books/chemistry-2e/pages/11-introduction',
      source: 'openstax',
      note: 'Section 11.4 introduces molality and mole fraction in the context of colligative properties; Chapter 3 covers molarity, mass percentage, ppm and ppb.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "concentration units" for extra worked conversions between molarity, molality, mole fraction and mass percent.',
    },
    {
      title: 'Wikipedia — Molality',
      url: 'https://en.wikipedia.org/wiki/Molality',
      source: 'wikipedia',
      note: 'Definition, the comparison with molarity, and why molality is preferred in thermodynamic measurements.',
    },
    {
      title: 'Wikipedia — Parts-per notation',
      url: 'https://en.wikipedia.org/wiki/Parts-per_notation',
      source: 'wikipedia',
      note: 'ppm, ppb and ppt, the mass versus volume ambiguity, and how regulators and scientists use them.',
    },
  ],
};
