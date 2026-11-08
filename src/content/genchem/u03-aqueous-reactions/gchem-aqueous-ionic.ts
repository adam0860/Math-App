import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-aqueous-ionic',
  title: 'Electrolytes, Precipitation and Net Ionic Equations',
  summary: 'What really exists in an aqueous solution, the full solubility rules, molecular vs complete ionic vs net ionic equations, and how weighing a precipitate measures a concentration.',
  minutes: 20,
  objectives: [
    'Classify solutes as strong, weak or nonelectrolytes and explain the difference at the particle level',
    'Calculate the concentration of each individual ion, including after mixing two solutions',
    'Apply the full solubility rules, with their exceptions, to predict whether a precipitate forms',
    'Write molecular, complete ionic and net ionic equations and identify spectator ions',
    'Solve precipitation stoichiometry and gravimetric analysis problems (mass of precipitate → concentration or mass percent)',
    'Plan a simple selective precipitation that separates ions one at a time',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What is really in the beaker',
      blocks: [
        {
          type: 'p',
          text: 'In Chemistry Foundations you met [[chem-electrolyte|electrolytes]]: solutes whose solutions conduct electricity because they contain mobile ions. This unit is about reactions in water, and every one of them starts with the same question: **which particles are actually present?** Get that right and the equations almost write themselves.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 510 290" xmlns="http://www.w3.org/2000/svg"><path d="M26 104 L30 110 L30 214 Q30 220 36 220 L140 220 Q146 220 146 214 L146 110 L150 104" fill="none" stroke="currentColor" stroke-width="2"/><line x1="30" y1="124" x2="146" y2="124" stroke="currentColor" class="s-blue" stroke-width="1.2" stroke-dasharray="5 3"/><rect x="57" y="92" width="6" height="96" fill="currentColor" class="f-gray" fill-opacity="0.6"/><rect x="113" y="92" width="6" height="96" fill="currentColor" class="f-gray" fill-opacity="0.6"/><polyline points="60,92 60,40 75,40" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="101,40 116,40 116,52" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="107" y1="52" x2="125" y2="52" stroke="currentColor" stroke-width="2"/><line x1="111" y1="58" x2="121" y2="58" stroke="currentColor" stroke-width="3"/><line x1="116" y1="58" x2="116" y2="92" stroke="currentColor" stroke-width="1.6"/><circle cx="88" cy="40" r="13" fill="currentColor" class="f-orange" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5"/><line x1="72.4" y1="31.0" x2="64.6" y2="26.5" stroke="currentColor" class="s-orange" stroke-width="2"/><line x1="77.9" y1="25.1" x2="72.9" y2="17.6" stroke="currentColor" class="s-orange" stroke-width="2"/><line x1="85.5" y1="22.2" x2="84.2" y2="13.3" stroke="currentColor" class="s-orange" stroke-width="2"/><line x1="93.6" y1="22.9" x2="96.3" y2="14.3" stroke="currentColor" class="s-orange" stroke-width="2"/><line x1="100.5" y1="27.1" x2="106.8" y2="20.6" stroke="currentColor" class="s-orange" stroke-width="2"/><circle cx="44" cy="140" r="8" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="44" y="144.5" text-anchor="middle" font-size="13" class="t-blue">+</text><circle cx="88" cy="137" r="9" fill="currentColor" class="f-red" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="88" y="141.5" text-anchor="middle" font-size="14" class="t-red">−</text><circle cx="132" cy="141" r="8" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="132" y="145.5" text-anchor="middle" font-size="13" class="t-blue">+</text><circle cx="44" cy="163" r="9" fill="currentColor" class="f-red" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="44" y="167.5" text-anchor="middle" font-size="14" class="t-red">−</text><circle cx="88" cy="161" r="8" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="88" y="165.5" text-anchor="middle" font-size="13" class="t-blue">+</text><circle cx="132" cy="165" r="9" fill="currentColor" class="f-red" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="132" y="169.5" text-anchor="middle" font-size="14" class="t-red">−</text><circle cx="44" cy="186" r="8" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="44" y="190.5" text-anchor="middle" font-size="13" class="t-blue">+</text><circle cx="88" cy="184" r="9" fill="currentColor" class="f-red" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="88" y="188.5" text-anchor="middle" font-size="14" class="t-red">−</text><circle cx="132" cy="188" r="8" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="132" y="192.5" text-anchor="middle" font-size="13" class="t-blue">+</text><circle cx="44" cy="209" r="9" fill="currentColor" class="f-red" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="44" y="213.5" text-anchor="middle" font-size="14" class="t-red">−</text><circle cx="88" cy="207" r="8" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="88" y="211.5" text-anchor="middle" font-size="13" class="t-blue">+</text><circle cx="132" cy="210" r="9" fill="currentColor" class="f-red" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="132" y="214.5" text-anchor="middle" font-size="14" class="t-red">−</text><path d="M193 104 L197 110 L197 214 Q197 220 203 220 L307 220 Q313 220 313 214 L313 110 L317 104" fill="none" stroke="currentColor" stroke-width="2"/><line x1="197" y1="124" x2="313" y2="124" stroke="currentColor" class="s-blue" stroke-width="1.2" stroke-dasharray="5 3"/><rect x="224" y="92" width="6" height="96" fill="currentColor" class="f-gray" fill-opacity="0.6"/><rect x="280" y="92" width="6" height="96" fill="currentColor" class="f-gray" fill-opacity="0.6"/><polyline points="227,92 227,40 242,40" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="268,40 283,40 283,52" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="274" y1="52" x2="292" y2="52" stroke="currentColor" stroke-width="2"/><line x1="278" y1="58" x2="288" y2="58" stroke="currentColor" stroke-width="3"/><line x1="283" y1="58" x2="283" y2="92" stroke="currentColor" stroke-width="1.6"/><circle cx="255" cy="40" r="13" fill="currentColor" class="f-orange" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/><circle cx="206" cy="140" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="216" cy="140" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="250" cy="137" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="260" cy="137" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="294" cy="141" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="304" cy="141" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="206" cy="163" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="216" cy="163" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="255" cy="161" r="8" fill="currentColor" class="f-blue" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="255" y="165.5" text-anchor="middle" font-size="13" class="t-blue">+</text><circle cx="294" cy="165" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="304" cy="165" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="206" cy="186" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="216" cy="186" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="250" cy="184" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="260" cy="184" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="299" cy="188" r="9" fill="currentColor" class="f-red" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/><text x="299" y="192.5" text-anchor="middle" font-size="14" class="t-red">−</text><circle cx="206" cy="209" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="216" cy="209" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="250" cy="207" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="260" cy="207" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="294" cy="210" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="304" cy="210" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><path d="M360 104 L364 110 L364 214 Q364 220 370 220 L474 220 Q480 220 480 214 L480 110 L484 104" fill="none" stroke="currentColor" stroke-width="2"/><line x1="364" y1="124" x2="480" y2="124" stroke="currentColor" class="s-blue" stroke-width="1.2" stroke-dasharray="5 3"/><rect x="391" y="92" width="6" height="96" fill="currentColor" class="f-gray" fill-opacity="0.6"/><rect x="447" y="92" width="6" height="96" fill="currentColor" class="f-gray" fill-opacity="0.6"/><polyline points="394,92 394,40 409,40" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="435,40 450,40 450,52" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="441" y1="52" x2="459" y2="52" stroke="currentColor" stroke-width="2"/><line x1="445" y1="58" x2="455" y2="58" stroke="currentColor" stroke-width="3"/><line x1="450" y1="58" x2="450" y2="92" stroke="currentColor" stroke-width="1.6"/><circle cx="422" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="373" cy="140" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="383" cy="140" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="417" cy="137" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="427" cy="137" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="461" cy="141" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="471" cy="141" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="373" cy="163" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="383" cy="163" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="417" cy="161" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="427" cy="161" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="461" cy="165" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="471" cy="165" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="373" cy="186" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="383" cy="186" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="417" cy="184" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="427" cy="184" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="461" cy="188" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="471" cy="188" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="373" cy="209" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="383" cy="209" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="417" cy="207" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="427" cy="207" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="461" cy="210" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><circle cx="471" cy="210" r="6.5" fill="currentColor" class="f-gray" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/><text x="88" y="241" text-anchor="middle" font-size="14">NaCl(aq)</text><text x="88" y="258" text-anchor="middle" font-size="13" class="t-gray">strong electrolyte</text><text x="88" y="276" text-anchor="middle" font-size="13" class="t-gray">all ions: bright</text><text x="255" y="241" text-anchor="middle" font-size="14">HC₂H₃O₂(aq)</text><text x="255" y="258" text-anchor="middle" font-size="13" class="t-gray">weak electrolyte</text><text x="255" y="276" text-anchor="middle" font-size="13" class="t-gray">few ions: dim</text><text x="422" y="241" text-anchor="middle" font-size="14">C₁₂H₂₂O₁₁(aq)</text><text x="422" y="258" text-anchor="middle" font-size="13" class="t-gray">nonelectrolyte</text><text x="422" y="276" text-anchor="middle" font-size="13" class="t-gray">no ions: off</text></svg>`,
          alt: 'Three beakers, each with two electrodes wired through a battery to a light bulb. Left: sodium chloride solution full of positive and negative ions, bulb shining brightly. Middle: acetic acid solution, mostly neutral molecules with one positive and one negative ion, bulb dim. Right: sugar solution with only neutral molecules, bulb off.',
          caption: 'The bulb reports how many ions carry the current. Same concentration of solute in each beaker, three very different particle pictures.',
        },
        {
          type: 'list',
          items: [
            'A [[gchem-strong-electrolyte|strong electrolyte]] exists in solution essentially **entirely as ions**: soluble ionic compounds ($\\ce{NaCl}$, $\\ce{K2SO4}$), strong acids ($\\ce{HCl}$, $\\ce{HNO3}$) and strong bases ($\\ce{NaOH}$). We write a single arrow: $\\ce{K2SO4(s) -> 2K+(aq) + SO4^2-(aq)}$.',
            'A [[gchem-weak-electrolyte|weak electrolyte]] is **mostly molecules**, with a small fraction ionized at any moment: weak acids such as acetic acid and $\\ce{HF}$, and weak bases such as $\\ce{NH3}$. In 0.10 M acetic acid only about 1.3% of the molecules are ionized. We write a double arrow, $\\ce{HC2H3O2(aq) <=> H+(aq) + C2H3O2-(aq)}$, because ionization and recombination keep happening in both directions.',
            'A [[gchem-nonelectrolyte|nonelectrolyte]] dissolves as neutral molecules and makes no ions: sugars, ethanol, urea, $\\ce{O2}$.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why ions come apart in water at all',
          text: 'Pulling $\\ce{Na+}$ away from $\\ce{Cl-}$ costs a lot of energy. Water pays it back: each ion is surrounded by a shell of [[polar-molecule|polar]] water molecules, oxygen ends toward cations and hydrogen ends toward anions. These ion–dipole attractions (hydration) stabilize the separated ions, and water\'s high dielectric constant (about 80) weakens the attraction between a cation and an anion roughly eightyfold. In a nonpolar solvent such as hexane there is no such payback, and salts simply do not dissolve.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Strong electrolyte is not the same as "ionic"',
          text: '$\\ce{HCl}$ is a molecular compound, yet it is a strong electrolyte because it reacts completely with water to form ions. And an *insoluble* ionic compound such as $\\ce{BaSO4}$ is still a strong electrolyte: the tiny amount that dissolves is 100% ions. "Strong" describes **what fraction of the dissolved solute is ions**, not how much dissolves.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Equal concentrations (0.10 M) of four solutes are tested with the light-bulb apparatus. Which one gives a **dim** glow?',
      options: [
        { text: '$\\ce{HCl}$', why: 'Hydrochloric acid is a strong acid: it ionizes completely, so the bulb is bright even though $\\ce{HCl}$ is a molecular compound.' },
        { text: '$\\ce{HF}$', correct: true, why: 'Hydrofluoric acid is a **weak** acid, so only a small fraction of its molecules ionize: few ions, dim bulb. It is the classic exception among the hydrohalic acids.' },
        { text: '$\\ce{CH3OH}$ (methanol)', why: 'Methanol is a nonelectrolyte. Its O–H group does not ionize appreciably in water, so the bulb stays off.' },
        { text: '$\\ce{KNO3}$', why: 'A soluble ionic compound: it dissociates completely into $\\ce{K+}$ and $\\ce{NO3-}$, so the bulb is bright.' },
      ],
      explanation: 'Classify by what is in solution. Soluble ionic compounds and strong acids are strong electrolytes (bright); weak acids and weak bases are weak electrolytes (dim); molecular compounds that do not ionize are nonelectrolytes (off). $\\ce{HF}$ is a weak acid, so it is the only weak electrolyte in the list.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Counting ions: the concentration of each ion',
      blocks: [
        {
          type: 'p',
          text: 'When a strong electrolyte dissolves, the formula tells you how many of each ion you get, so the concentration of each ion is the [[molarity]] of the compound times its subscript. This matters whenever a reaction involves only one of the ions, which in this lesson is always.',
        },
        {
          type: 'derivation',
          title: 'Ion concentrations in 0.150 M aluminum sulfate',
          steps: [
            { tex: '\\ce{Al2(SO4)3(s) -> 2Al^3+(aq) + 3SO4^2-(aq)}', why: 'Each formula unit releases 2 aluminum ions and 3 sulfate ions. The sulfate group stays intact: polyatomic ions do not fall apart on dissolving.' },
            { tex: '[\\ce{Al^3+}] = 2 \\times 0.150\\ \\text{M} = 0.300\\ \\text{M}', why: 'Two moles of $\\ce{Al^3+}$ per mole of compound, in the same volume.' },
            { tex: '[\\ce{SO4^2-}] = 3 \\times 0.150\\ \\text{M} = 0.450\\ \\text{M}', why: 'Three moles of sulfate per mole of compound.' },
            { tex: '3(0.300) - 2(0.450) = 0', why: 'Check electrical neutrality: total positive charge concentration $3 \\times 0.300 = 0.900$ M equals total negative charge $2 \\times 0.450 = 0.900$ M. Every solution is neutral overall.' },
          ],
        },
        {
          type: 'p',
          text: 'When you mix two solutions, each ion is diluted into the combined volume, and ions shared by both solutes add up. The safe method is to **count moles of each ion, then divide by the total volume**.',
        },
        {
          type: 'derivation',
          title: 'Mix 50.0 mL of 0.200 M NaCl with 25.0 mL of 0.300 M CaCl₂ (no reaction)',
          steps: [
            { tex: 'n(\\ce{Cl-})_{\\ce{NaCl}} = 0.0500\\ \\text{L} \\times 0.200\\ \\tfrac{\\text{mol}}{\\text{L}} = 0.0100\\ \\text{mol}', why: 'One chloride per $\\ce{NaCl}$.' },
            { tex: 'n(\\ce{Cl-})_{\\ce{CaCl2}} = 0.0250\\ \\text{L} \\times 0.300\\ \\tfrac{\\text{mol}}{\\text{L}} \\times 2 = 0.0150\\ \\text{mol}', why: 'Two chlorides per $\\ce{CaCl2}$: do not forget the subscript.' },
            { tex: '[\\ce{Cl-}] = \\frac{0.0100 + 0.0150\\ \\text{mol}}{0.0500 + 0.0250\\ \\text{L}} = \\frac{0.0250\\ \\text{mol}}{0.0750\\ \\text{L}} = 0.333\\ \\text{M}', why: 'Total moles over total volume (assuming the volumes are additive, which is very nearly true for dilute solutions).' },
            { tex: '[\\ce{Na+}] = \\tfrac{0.0100}{0.0750} = 0.133\\ \\text{M}, \\quad [\\ce{Ca^2+}] = \\tfrac{0.00750}{0.0750} = 0.100\\ \\text{M}', why: 'Each cation comes from only one solute, so it is simply diluted. Charge check: $0.133 + 2(0.100) = 0.333$ M of positive charge, matching the chloride.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Do not average the two molarities, and do not add molarities directly. Molarity is an *intensive* quantity (a ratio); moles are what add. Convert to moles, combine, then divide.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Total particle count matters too: 1 mol of $\\ce{Al2(SO4)3}$ gives 5 mol of dissolved particles. The colligative properties lesson (freezing-point depression, osmotic pressure) depends on exactly this count.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: '40.0 mL of 0.150 M $\\ce{AlCl3}$ is mixed with 60.0 mL of 0.100 M $\\ce{KCl}$ (no reaction occurs). What is the chloride ion concentration in the mixture? Give three significant figures and assume the volumes add.',
      hint: 'Moles of $\\ce{Cl-}$ from each solution (remember the 3 in $\\ce{AlCl3}$), add them, divide by 0.100 L.',
      label: '$[\\ce{Cl-}] =$',
      unit: 'M',
      answer: '(0.0400*0.150*3 + 0.0600*0.100)/0.100',
      answerTex: '0.240\\ \\text{M}',
      tolerance: 0.0006,
      explanation: 'From $\\ce{AlCl3}$: $0.0400\\ \\text{L} \\times 0.150\\ \\text{M} \\times 3 = 0.0180$ mol $\\ce{Cl-}$. From $\\ce{KCl}$: $0.0600 \\times 0.100 = 0.00600$ mol. Total $0.0240$ mol in $0.100$ L gives $[\\ce{Cl-}] = 0.240$ M. A common slip is to forget the factor of 3, which gives 0.120 M.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The solubility rules, with their exceptions',
      blocks: [
        {
          type: 'p',
          text: 'Foundations gave you a short list of [[chem-solubility-rules|solubility rules]]. Here is the full working set used in General Chemistry. "Insoluble" in this table means less than about 0.01 mol dissolves per liter, low enough that mixing typical solutions produces a visible [[chem-precipitate|precipitate]].',
        },
        {
          type: 'table',
          headers: ['Ion in the compound', 'Rule', 'Exceptions'],
          rows: [
            ['$\\ce{Li+}$, $\\ce{Na+}$, $\\ce{K+}$, $\\ce{Rb+}$, $\\ce{Cs+}$, $\\ce{NH4+}$', '**soluble**', 'none'],
            ['$\\ce{NO3-}$, $\\ce{C2H3O2-}$ (acetate), $\\ce{ClO4-}$, $\\ce{ClO3-}$', '**soluble**', 'none common'],
            ['$\\ce{Cl-}$, $\\ce{Br-}$, $\\ce{I-}$', '**soluble**', 'with $\\ce{Ag+}$, $\\ce{Pb^2+}$, $\\ce{Hg2^2+}$'],
            ['$\\ce{F-}$', '**soluble**', 'with $\\ce{Mg^2+}$, $\\ce{Ca^2+}$, $\\ce{Sr^2+}$, $\\ce{Ba^2+}$, $\\ce{Pb^2+}$'],
            ['$\\ce{SO4^2-}$', '**soluble**', 'with $\\ce{Sr^2+}$, $\\ce{Ba^2+}$, $\\ce{Pb^2+}$, $\\ce{Hg2^2+}$; $\\ce{CaSO4}$ and $\\ce{Ag2SO4}$ only slightly soluble'],
            ['$\\ce{OH-}$', '*insoluble*', 'Group 1 and $\\ce{NH4+}$ are soluble; $\\ce{Ca^2+}$, $\\ce{Sr^2+}$, $\\ce{Ba^2+}$ moderately soluble'],
            ['$\\ce{S^2-}$', '*insoluble*', 'Group 1, $\\ce{NH4+}$, $\\ce{Ca^2+}$, $\\ce{Sr^2+}$, $\\ce{Ba^2+}$'],
            ['$\\ce{CO3^2-}$, $\\ce{PO4^3-}$, $\\ce{CrO4^2-}$, $\\ce{SO3^2-}$', '*insoluble*', 'Group 1 and $\\ce{NH4+}$'],
          ],
          caption: 'Read it top-down: the first two rows **always win**. $\\ce{Na2CO3}$ is soluble because of the sodium, even though carbonates are generally insoluble. Note $\\ce{Hg2^2+}$ is the mercury(I) ion, a diatomic unit Hg–Hg with a 2+ charge.',
        },
        {
          type: 'derivation',
          title: 'Is it soluble? Four quick calls',
          steps: [
            { tex: '\\ce{(NH4)3PO4}: \\text{ soluble}', why: 'Ammonium is in the "always soluble" first row, which overrides the phosphate rule.' },
            { tex: '\\ce{PbBr2}: \\text{ insoluble}', why: 'Bromides are soluble except with $\\ce{Ag+}$, $\\ce{Pb^2+}$ and $\\ce{Hg2^2+}$; lead is an exception.' },
            { tex: '\\ce{MgF2}: \\text{ insoluble}', why: 'Fluorides are soluble except with the small Group 2 ions and $\\ce{Pb^2+}$.' },
            { tex: '\\ce{Ni(OH)2}: \\text{ insoluble}', why: 'Hydroxides are insoluble unless the cation is Group 1, $\\ce{NH4+}$ or one of the heavier Group 2 ions. Nickel is none of these.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the pattern looks like this',
          text: 'Dissolving is a tug-of-war between the [[chem-crystal-lattice|lattice]] holding the ions together and the hydration that pulls them apart. Both grow with charge, but lattice attraction grows faster for **small, highly charged** ions packed tightly together. So compounds of $\\ce{CO3^2-}$, $\\ce{PO4^3-}$, $\\ce{S^2-}$ and $\\ce{OH-}$ with 2+ and 3+ cations tend to be insoluble, while large, singly charged ions such as $\\ce{NO3-}$, $\\ce{ClO4-}$, $\\ce{K+}$ and $\\ce{NH4+}$ form weakly held lattices that water takes apart easily. The rules are a summary of measurements, not laws of nature, which is why there are exceptions; the Ksp lesson later makes them quantitative.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      multi: true,
      prompt: 'Using the solubility table, select **every** compound that is insoluble in water.',
      options: [
        { text: '$\\ce{PbI2}$', correct: true, why: 'Iodides are soluble except with $\\ce{Ag+}$, $\\ce{Pb^2+}$ and $\\ce{Hg2^2+}$. Lead(II) iodide is the bright yellow precipitate of a famous demonstration.' },
        { text: '$\\ce{(NH4)2CO3}$', why: 'Ammonium compounds are always soluble; that rule overrides "carbonates are insoluble".' },
        { text: '$\\ce{BaSO4}$', correct: true, why: 'Sulfates are soluble except with $\\ce{Sr^2+}$, $\\ce{Ba^2+}$, $\\ce{Pb^2+}$ and $\\ce{Hg2^2+}$.' },
        { text: '$\\ce{Ca(NO3)2}$', why: 'Nitrates are always soluble, with no exceptions.' },
        { text: '$\\ce{Mg(OH)2}$', correct: true, why: 'Hydroxides are insoluble except with Group 1, $\\ce{NH4+}$ and the heavier Group 2 ions ($\\ce{Ca^2+}$, $\\ce{Sr^2+}$, $\\ce{Ba^2+}$). Magnesium is not on the list; a suspension of $\\ce{Mg(OH)2}$ is "milk of magnesia".' },
      ],
      explanation: 'Check the "always soluble" ions first: $\\ce{NH4+}$ and $\\ce{NO3-}$ make $\\ce{(NH4)2CO3}$ and $\\ce{Ca(NO3)2}$ soluble. Then apply the specific rules: $\\ce{PbI2}$ (iodide exception), $\\ce{BaSO4}$ (sulfate exception) and $\\ce{Mg(OH)2}$ (hydroxides insoluble, Mg not exempt) are the three insoluble compounds.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Three ways to write the same reaction',
      blocks: [
        {
          type: 'p',
          text: 'Mix solutions of lead(II) nitrate and potassium iodide and a yellow solid appears instantly. To predict this, swap partners and check each new combination against the table: $\\ce{KNO3}$ is soluble (potassium, nitrate), $\\ce{PbI2}$ is not. There are three standard ways to write what happened.',
        },
        {
          type: 'definition',
          term: 'Molecular, complete ionic and net ionic equations',
          text: 'The **molecular equation** writes every compound as a neutral formula. The [[gchem-complete-ionic-equation|complete ionic equation]] writes every strong electrolyte in solution as its separate ions. The [[chem-net-ionic-equation|net ionic equation]] cancels the [[chem-spectator-ion|spectator ions]], the ions that appear unchanged on both sides, leaving only the particles that react.',
        },
        {
          type: 'derivation',
          title: 'Example 1: lead(II) nitrate + potassium iodide',
          steps: [
            { tex: '\\ce{Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq)}', why: 'Molecular equation, balanced. The coefficient 2 is needed because $\\ce{PbI2}$ takes two iodides.' },
            { tex: '\\ce{Pb^2+ + 2NO3- + 2K+ + 2I- -> PbI2(s) + 2K+ + 2NO3-}', why: 'Complete ionic: split every (aq) strong electrolyte, carrying the coefficients and subscripts into ion counts ($\\ce{Pb(NO3)2}$ gives 2 $\\ce{NO3-}$). The solid stays as a formula: it is not dissolved ions. All ions are (aq).' },
            { tex: '\\ce{Pb^2+(aq) + 2I-(aq) -> PbI2(s)}', why: 'Cancel the spectators $\\ce{K+}$ and $\\ce{NO3-}$ (two of each on both sides). Check: atoms balance, and the charge is $+2 - 2 = 0$ on the left and 0 on the right.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Example 2: sodium phosphate + calcium chloride',
          steps: [
            { tex: '\\ce{2Na3PO4(aq) + 3CaCl2(aq) -> Ca3(PO4)2(s) + 6NaCl(aq)}', why: 'Calcium phosphate is insoluble (phosphates need Group 1 or $\\ce{NH4+}$ to dissolve). Balance $\\ce{Ca}$ and $\\ce{PO4}$ as units first.' },
            { tex: '\\ce{6Na+ + 2PO4^3- + 3Ca^2+ + 6Cl- -> Ca3(PO4)2(s) + 6Na+ + 6Cl-}', why: 'Two $\\ce{Na3PO4}$ give 6 $\\ce{Na+}$ and 2 $\\ce{PO4^3-}$; three $\\ce{CaCl2}$ give 3 $\\ce{Ca^2+}$ and 6 $\\ce{Cl-}$.' },
            { tex: '\\ce{3Ca^2+(aq) + 2PO4^3-(aq) -> Ca3(PO4)2(s)}', why: 'Spectators $\\ce{Na+}$ and $\\ce{Cl-}$ cancel. Charge: $3(+2) + 2(-3) = 0$. This is the reaction that builds bone mineral and forms some kidney stones.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Example 3: barium hydroxide + copper(II) sulfate (two precipitates)',
          steps: [
            { tex: '\\ce{Ba(OH)2(aq) + CuSO4(aq) -> BaSO4(s) + Cu(OH)2(s)}', why: 'Both new combinations are insoluble: $\\ce{BaSO4}$ (sulfate exception) and $\\ce{Cu(OH)2}$ (hydroxides insoluble).' },
            { tex: '\\ce{Ba^2+ + 2OH- + Cu^2+ + SO4^2- -> BaSO4(s) + Cu(OH)2(s)}', why: 'Complete ionic. Nothing appears unchanged on both sides, so there are **no** spectators: the complete ionic and net ionic equations are the same.' },
          ],
        },
        {
          type: 'p',
          text: 'And if no new combination is insoluble (say $\\ce{KNO3(aq) + NaCl(aq)}$), every ion is a spectator, everything cancels, and you write **NR** for no reaction: you just have a solution of four kinds of ions.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'What gets split, what stays together',
          text: 'Split only **strong electrolytes that are dissolved**: soluble ionic compounds, strong acids and strong bases marked (aq). Keep as formulas: solids, liquids, gases, weak acids and bases (e.g. $\\ce{HF}$, $\\ce{NH3}$) and nonelectrolytes. Never split a polyatomic ion ($\\ce{SO4^2-}$ stays whole) and never split $\\ce{Hg2^2+}$ into two $\\ce{Hg+}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student writes the net ionic equation for mixing sodium carbonate and calcium chloride solutions. Tap the first line that is wrong.',
      lines: [
        'Molecular: $\\ce{Na2CO3(aq) + CaCl2(aq) -> CaCO3(s) + 2NaCl(aq)}$',
        'Complete ionic: $\\ce{2Na+ + CO3^2- + Ca^2+ + 2Cl- -> Ca^2+ + CO3^2- + 2Na+ + 2Cl-}$',
        'Every ion appears on both sides, so all of them are spectators',
        'Conclusion: no reaction (NR)',
      ],
      errorLines: [2],
      explanation: 'Line 2 splits the precipitate. $\\ce{CaCO3(s)}$ is a solid, not dissolved ions, so it must stay as a formula on the product side: $\\ce{2Na+ + CO3^2- + Ca^2+ + 2Cl- -> CaCO3(s) + 2Na+ + 2Cl-}$. Only $\\ce{Na+}$ and $\\ce{Cl-}$ cancel, giving the net ionic equation $\\ce{Ca^2+(aq) + CO3^2-(aq) -> CaCO3(s)}$. This is the same reaction that leaves limescale in kettles and water heaters.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Precipitation stoichiometry and gravimetric analysis',
      blocks: [
        {
          type: 'p',
          text: 'A precipitate can be filtered, dried and weighed, and a balance is one of the most precise instruments in any lab (to 0.0001 g). [[gchem-gravimetric-analysis|Gravimetric analysis]] uses this: add an **excess** of a reagent that precipitates the ion you care about completely, weigh the solid, and work back to how much of the ion was there. The roadmap is the familiar one: grams of precipitate → moles of precipitate → moles of ion (mole ratio) → concentration or mass.',
        },
        {
          type: 'derivation',
          title: 'Chloride in a water sample',
          steps: [
            { tex: '\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}', why: 'Excess $\\ce{AgNO3}$ is added to 25.00 mL of the sample. The net ionic equation gives a 1 : 1 ratio of $\\ce{AgCl}$ to $\\ce{Cl-}$.' },
            { tex: 'M(\\ce{AgCl}) = 107.87 + 35.45 = 143.32\\ \\text{g/mol}', why: 'Molar mass of the precipitate.' },
            { tex: 'n(\\ce{AgCl}) = \\frac{0.5734\\ \\cancel{\\text{g}}}{143.32\\ \\cancel{\\text{g}}/\\text{mol}} = 4.001 \\times 10^{-3}\\ \\text{mol}', why: 'The dried, weighed precipitate was 0.5734 g.' },
            { tex: 'n(\\ce{Cl-}) = 4.001 \\times 10^{-3}\\ \\text{mol}', why: 'One chloride ion in each formula unit of $\\ce{AgCl}$.' },
            { tex: '[\\ce{Cl-}] = \\frac{4.001 \\times 10^{-3}\\ \\text{mol}}{0.02500\\ \\text{L}} = 0.1600\\ \\text{M}', why: 'Divide by the sample volume (not the total volume after adding $\\ce{AgNO3}$: we want the concentration in the original sample).' },
          ],
          result: 'The sample is 0.1600 M in chloride, to four significant figures, from one weighing.',
        },
        {
          type: 'graph',
          x: [0, 60],
          y: [0, 0.8],
          xStep: 10,
          yStep: 0.1,
          functions: [{ expr: '143.32*min(0.1x, 25c)/1000', label: 'mass of $\\ce{AgCl}$ (g)', color: 'blue' }],
          vlines: [{ x: '250c', label: 'equivalence', color: 'gray' }],
          sliders: [{ name: 'c', min: 0.05, max: 0.2, step: 0.01, value: 0.16, label: '$[\\ce{Cl-}]$ in the sample (M)' }],
          readouts: [
            { label: '$\\ce{AgNO3}$ needed (mL) $=$', expr: '250c', digits: 3 },
            { label: 'maximum $\\ce{AgCl}$ (g) $=$', expr: '143.32*25c/1000', digits: 4 },
          ],
          caption: 'Horizontal axis: mL of 0.1000 M $\\ce{AgNO3}$ added to 25.00 mL of sample. Until the chloride runs out, silver is limiting and the precipitate grows; after that, chloride is limiting and the mass is flat. Gravimetric analysis always works on the **flat part**, which is why the reagent is added in excess: the mass then depends only on the analyte.',
        },
        {
          type: 'derivation',
          title: 'Limiting reactant: 50.0 mL of 0.100 M BaCl₂ + 30.0 mL of 0.150 M Na₂SO₄',
          steps: [
            { tex: 'n(\\ce{Ba^2+}) = 0.0500 \\times 0.100 = 5.00 \\times 10^{-3}\\ \\text{mol}, \\quad n(\\ce{SO4^2-}) = 0.0300 \\times 0.150 = 4.50 \\times 10^{-3}\\ \\text{mol}', why: 'Moles of the two reacting ions.' },
            { tex: '\\ce{Ba^2+ + SO4^2- -> BaSO4(s)}: \\ \\ce{SO4^2-}\\ \\text{is limiting}', why: 'The ratio is 1 : 1 and there is less sulfate.' },
            { tex: 'm(\\ce{BaSO4}) = 4.50 \\times 10^{-3}\\ \\text{mol} \\times 233.39\\ \\tfrac{\\text{g}}{\\text{mol}} = 1.05\\ \\text{g}', why: '$M(\\ce{BaSO4}) = 137.33 + 32.06 + 4(16.00) = 233.39$ g/mol.' },
            { tex: '[\\ce{Ba^2+}]_{\\text{left}} = \\frac{(5.00 - 4.50) \\times 10^{-3}\\ \\text{mol}}{0.0800\\ \\text{L}} = 6.25 \\times 10^{-3}\\ \\text{M}', why: 'The excess barium stays in solution, diluted into the total volume of 80.0 mL. The spectators are simply diluted too: $[\\ce{Cl-}] = 0.125$ M, $[\\ce{Na+}] = 0.113$ M.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A 0.7500 g sample of a mixture of soluble chlorides is dissolved in water and treated with excess $\\ce{AgNO3}$. The dried $\\ce{AgCl}$ weighs 1.2150 g. What is the mass percent of chlorine in the sample? Use Cl 35.45 and $\\ce{AgCl}$ 143.32 g/mol; give four significant figures.',
      hint: 'Mass of Cl in the precipitate $= 1.2150\\ \\text{g} \\times \\frac{35.45}{143.32}$. Then divide by the sample mass.',
      label: 'mass % Cl $=$',
      unit: '%',
      answer: '1.2150*35.45/143.32/0.7500*100',
      answerTex: '40.07\\%',
      tolerance: 0.006,
      explanation: 'All the chlorine in the sample ends up in the $\\ce{AgCl}$, and Cl is $\\frac{35.45}{143.32} = 24.73\\%$ of $\\ce{AgCl}$ by mass. So the mass of Cl is $1.2150 \\times 0.24735 = 0.3005$ g, and the mass percent is $\\frac{0.3005}{0.7500} \\times 100\\% = 40.07\\%$. (Going through moles gives the same: $1.2150 / 143.32 = 8.478 \\times 10^{-3}$ mol, times 35.45 g/mol $= 0.3005$ g.) This "gravimetric factor" shortcut is how analysts write it.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: '40.0 mL of 0.100 M $\\ce{Pb(NO3)2}$ is mixed with 50.0 mL of 0.120 M $\\ce{KI}$. What mass of $\\ce{PbI2}$ precipitates? Use $M(\\ce{PbI2}) = 461.0$ g/mol; three significant figures.',
      hint: 'Net ionic: $\\ce{Pb^2+ + 2I- -> PbI2(s)}$. Compute how much $\\ce{PbI2}$ each ion could make; the smaller amount forms.',
      label: 'mass $\\ce{PbI2}$ $=$',
      unit: 'g',
      answer: '0.0500*0.120/2*461.0',
      answerTex: '1.38\\ \\text{g}',
      tolerance: 0.006,
      explanation: '$n(\\ce{Pb^2+}) = 0.0400 \\times 0.100 = 4.00 \\times 10^{-3}$ mol could make $4.00 \\times 10^{-3}$ mol $\\ce{PbI2}$. $n(\\ce{I-}) = 0.0500 \\times 0.120 = 6.00 \\times 10^{-3}$ mol could make only $3.00 \\times 10^{-3}$ mol, because each $\\ce{PbI2}$ needs two iodides. Iodide is limiting: $3.00 \\times 10^{-3}\\ \\text{mol} \\times 461.0\\ \\text{g/mol} = 1.38$ g. Note that there are *more* moles of iodide, yet it runs out first.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Selective precipitation: separating ions one at a time',
      blocks: [
        {
          type: 'p',
          text: 'Suppose a solution contains several metal ions and you want them apart. If you can find a reagent that precipitates **only one** of them, you can filter that one out and move on to the next. This is [[gchem-selective-precipitation|selective precipitation]], and the order of reagents is everything.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 510 215" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><rect x="6" y="40" width="104" height="44" rx="8" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><text x="58" y="67" text-anchor="middle" font-size="14">Ag⁺ Ba²⁺ Fe³⁺</text><text x="58" y="28" text-anchor="middle" font-size="12" class="t-gray">mixture</text><rect x="196" y="40" width="96" height="44" rx="8" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><text x="244" y="67" text-anchor="middle" font-size="14">Ba²⁺ Fe³⁺</text><text x="244" y="28" text-anchor="middle" font-size="12" class="t-gray">filtrate 1</text><rect x="420" y="40" width="70" height="44" rx="8" fill="none" stroke="currentColor" class="s-blue" stroke-width="1.8"/><text x="455" y="67" text-anchor="middle" font-size="14">Fe³⁺</text><text x="455" y="28" text-anchor="middle" font-size="12" class="t-gray">filtrate 2</text><line x1="112" y1="62" x2="192" y2="62" stroke="currentColor" stroke-width="1.8" marker-end="url(#ah)"/><text x="152" y="54" text-anchor="middle" font-size="13" class="t-purple">① + Cl⁻</text><line x1="294" y1="62" x2="416" y2="62" stroke="currentColor" stroke-width="1.8" marker-end="url(#ah)"/><text x="355" y="54" text-anchor="middle" font-size="13" class="t-purple">② + SO₄²⁻</text><line x1="152" y1="66" x2="152" y2="128" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#ah)"/><line x1="340" y1="66" x2="340" y2="128" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#ah)"/><line x1="455" y1="86" x2="455" y2="128" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#ah)"/><text x="447" y="112" text-anchor="end" font-size="13" class="t-purple">③ + OH⁻</text><rect x="104" y="132" width="96" height="40" rx="6" fill="currentColor" class="f-gray" fill-opacity="0.15" stroke="currentColor" stroke-width="1.4"/><text x="152" y="157" text-anchor="middle" font-size="14">AgCl(s)</text><rect x="290" y="132" width="100" height="40" rx="6" fill="currentColor" class="f-gray" fill-opacity="0.15" stroke="currentColor" stroke-width="1.4"/><text x="340" y="157" text-anchor="middle" font-size="14">BaSO₄(s)</text><rect x="402" y="132" width="106" height="40" rx="6" fill="currentColor" class="f-orange" fill-opacity="0.2" stroke="currentColor" stroke-width="1.4"/><text x="455" y="157" text-anchor="middle" font-size="14">Fe(OH)₃(s)</text><text x="255" y="200" text-anchor="middle" font-size="13" class="t-gray">dashed arrows: solid caught on the filter · solid arrows: filtrate passed on</text></svg>`,
          alt: 'Flowchart. A mixture of silver, barium and iron(III) ions. Step 1, add chloride: silver chloride is filtered off, the filtrate contains barium and iron(III). Step 2, add sulfate: barium sulfate is filtered off, the filtrate contains iron(III). Step 3, add hydroxide: iron(III) hydroxide precipitates.',
          caption: 'Each reagent is chosen so that it precipitates exactly one of the ions still in solution.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Chloride first.** Of the three, only $\\ce{Ag+}$ is a chloride exception: $\\ce{Ag+ + Cl- -> AgCl(s)}$. $\\ce{BaCl2}$ and $\\ce{FeCl3}$ stay dissolved.',
            '**Sulfate second.** Only $\\ce{Ba^2+}$ is left among the sulfate exceptions: $\\ce{Ba^2+ + SO4^2- -> BaSO4(s)}$. (Adding sulfate first would have dragged some $\\ce{Ag2SO4}$ down with the barium.)',
            '**Hydroxide last.** $\\ce{Fe^3+ + 3OH- -> Fe(OH)3(s)}$, a rust-brown gel. Adding hydroxide first would have precipitated silver (as brown $\\ce{Ag2O}$) together with the iron.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Field water treatment uses the same idea',
          text: 'Municipal and military water purification units add alum, $\\ce{Al2(SO4)3}$, to raw water. In the slightly basic water, $\\ce{Al^3+}$ precipitates as a fluffy $\\ce{Al(OH)3}$ floc that sweeps suspended clay and many microbes down with it before filtration and disinfection. "Lime softening" precipitates hardness ions as $\\ce{CaCO3}$ and $\\ce{Mg(OH)2}$ in the same way.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The yes/no rules here become quantitative in the solubility-equilibria lesson, where $K_{sp}$ values tell you exactly how much of each ion stays in solution and whether a separation is "clean" (typically, less than 0.1% of the first ion left before the second starts to precipitate). Exam questions at this stage ask you to pick the reagent order from the rules, as in the next question.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'A solution contains $\\ce{Ag+}$, $\\ce{Cu^2+}$ and $\\ce{Ba^2+}$ (all as nitrates). Which reagent, added first, precipitates **only** the silver and leaves the other two ions in solution?',
      options: [
        { text: '$\\ce{Na2SO4}$', why: 'Sulfate precipitates $\\ce{BaSO4}$, and silver sulfate is only slightly soluble, so you would get a mixture of solids.' },
        { text: '$\\ce{NaOH}$', why: 'Hydroxide precipitates $\\ce{Cu(OH)2}$ and silver (as $\\ce{Ag2O}$) together; only barium would stay in solution.' },
        { text: '$\\ce{NaCl}$', correct: true, why: 'Silver is a chloride exception; $\\ce{CuCl2}$ and $\\ce{BaCl2}$ are soluble. Net ionic: $\\ce{Ag+ + Cl- -> AgCl(s)}$.' },
        { text: '$\\ce{Na2CO3}$', why: 'Carbonates are insoluble except with Group 1 and $\\ce{NH4+}$, so all three metal carbonates would precipitate at once.' },
      ],
      explanation: 'Look for an anion that has exactly one of the three cations among its exceptions. Chloride does: only $\\ce{Ag+}$ (of these) forms an insoluble chloride. After filtering off the $\\ce{AgCl}$, sulfate would remove $\\ce{Ba^2+}$ and hydroxide would remove $\\ce{Cu^2+}$, completing the separation.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Iron(III) chloride and sodium hydroxide solutions are mixed and a rust-brown precipitate forms. Complete the net ionic equation and name the spectators.',
      template: 'Net ionic: $\\ce{Fe^3+(aq)}$ + ___ $\\ce{OH-(aq) -> Fe(OH)3(s)}$. The spectator ions are ___ and ___.',
      blanks: [{ answers: ['3'] }, { answers: ['$\\ce{Na+}$', '$\\ce{Cl-}$'] }, { answers: ['$\\ce{Cl-}$', '$\\ce{Na+}$'] }],
      wordBank: ['3', '2', '$\\ce{Na+}$', '$\\ce{Cl-}$', '$\\ce{Fe^3+}$', '$\\ce{OH-}$'],
      explanation: 'Molecular: $\\ce{FeCl3(aq) + 3NaOH(aq) -> Fe(OH)3(s) + 3NaCl(aq)}$. Complete ionic: $\\ce{Fe^3+ + 3Cl- + 3Na+ + 3OH- -> Fe(OH)3(s) + 3Na+ + 3Cl-}$. Cancelling $\\ce{Na+}$ and $\\ce{Cl-}$ leaves $\\ce{Fe^3+(aq) + 3OH-(aq) -> Fe(OH)3(s)}$. The 3 is needed for both atoms (three O and three H) and charge ($+3 - 3 = 0$).',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'Because barium sulfate is insoluble in water, it is classified as a weak electrolyte.',
      answer: false,
      explanation: 'Solubility and electrolyte strength are separate questions. Very little $\\ce{BaSO4}$ dissolves, but what does dissolve is completely dissociated into $\\ce{Ba^2+}$ and $\\ce{SO4^2-}$, so it is a strong electrolyte. A weak electrolyte is a substance whose *dissolved* particles are mostly un-ionized molecules, like acetic acid, which is actually very soluble (vinegar). When writing ionic equations this distinction does not change anything for $\\ce{BaSO4}$: as a solid precipitate it is written as a formula either way.',
    },
  ],
  takeaways: [
    'Strong electrolytes (soluble ionic compounds, strong acids, strong bases) are essentially all ions in solution; weak electrolytes (weak acids and bases) are mostly molecules; nonelectrolytes make no ions.',
    'Ion concentration = compound molarity × subscript; after mixing, add **moles** of each ion and divide by the total volume.',
    'Solubility rules: Group 1, $\\ce{NH4+}$, nitrate, acetate, perchlorate are always soluble and override everything; know the exceptions for halides, fluorides, sulfates and the insoluble hydroxides, sulfides, carbonates, phosphates.',
    'Molecular → complete ionic (split dissolved strong electrolytes only) → net ionic (cancel spectators). Check atoms and charge in the net ionic equation.',
    'Gravimetric analysis: precipitate the analyte completely with excess reagent, weigh, and convert grams of precipitate → moles → moles of analyte → concentration or mass percent.',
    'Selective precipitation removes ions one at a time by choosing reagents that precipitate exactly one remaining ion at each step.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 4: Stoichiometry of Chemical Reactions',
      url: 'https://openstax.org/books/chemistry-2e/pages/4-introduction',
      source: 'openstax',
      note: 'Section 4.2 covers precipitation reactions, solubility guidelines and net ionic equations; section 4.5 covers gravimetric analysis.',
    },
    {
      title: 'Wikipedia — Solubility chart',
      url: 'https://en.wikipedia.org/wiki/Solubility_chart',
      source: 'wikipedia',
      note: 'A grid of cations against anions showing which combinations are soluble, slightly soluble or insoluble.',
    },
    {
      title: 'Wikipedia — Gravimetric analysis',
      url: 'https://en.wikipedia.org/wiki/Gravimetric_analysis',
      source: 'wikipedia',
      note: 'The procedure step by step, with the classic chloride and sulfate determinations.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'The "Sugar and Salt Solutions" simulation shows ionic and molecular solutes dissolving and lets you test conductivity.',
    },
  ],
};
