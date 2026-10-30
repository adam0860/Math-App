import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-solutions',
  title: 'Solutions, Molarity and Dilution',
  summary: 'Why things dissolve, how chemists measure "how much is in there", and the conservation idea behind every dilution.',
  minutes: 20,
  objectives: [
    'Identify the solute and solvent in a solution and explain "like dissolves like" using polarity',
    'Classify substances as strong electrolytes, weak electrolytes or nonelectrolytes and count the ions a compound releases',
    'Read a solubility curve and decide whether a solution is unsaturated, saturated or supersaturated',
    'Calculate molarity, and the mass of solid needed to make a solution of a given molarity',
    'Use $M_1V_1 = M_2V_2$ for dilutions and explain why it works',
    'Use molarity and a mole ratio to find the volume of one solution that reacts with another',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What a solution is',
      blocks: [
        {
          type: 'p',
          text: 'Stir a spoonful of salt into water and it vanishes. The salt has not been destroyed — taste the water and it is still there — but it is spread out so evenly, as individual ions, that no microscope can find a grain of it. You have made a [[chemical-solution]]: a **homogeneous** [[mixture]], the same composition all the way through.',
        },
        {
          type: 'definition',
          term: 'Solute and solvent',
          text: 'The [[solvent]] is the substance present in the larger amount — the medium that does the dissolving. Each [[solute]] is a substance dissolved in it. In salt water, water is the solvent and $\\ce{NaCl}$ is the solute. When water is the solvent the solution is called **aqueous**, and we tag dissolved species with $\\ce{(aq)}$: $\\ce{NaCl(aq)}$.',
        },
        {
          type: 'p',
          text: 'Solutions are not only liquids. Any state can dissolve in any other, as long as the result is uniform on the particle level:',
        },
        {
          type: 'table',
          headers: ['Solution', 'Solvent', 'Solute(s)'],
          rows: [
            ['Normal saline (IV bag)', 'water (liquid)', '$\\ce{NaCl}$ (solid)'],
            ['Soda water', 'water (liquid)', '$\\ce{CO2}$ (gas)'],
            ['Engine coolant', 'water (liquid)', 'ethylene glycol (liquid)'],
            ['Air', '$\\ce{N2}$ (gas)', '$\\ce{O2}$, $\\ce{Ar}$, $\\ce{CO2}$ (gases)'],
            ['Brass', 'copper (solid)', 'zinc (solid)'],
          ],
          caption: 'The solvent is usually the majority component and sets the state of the solution.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why chemists love solutions',
          text: 'Two substances can only react where their particles collide. A lump of solid only reacts at its surface; dissolve it and every single ion or molecule is exposed and moving. That is why most lab reactions, nearly all of the chemistry in your body, and the reactions in a battery happen in solution. It is also why chemists need a precise way to say *how much* solute is in a given volume — the main job of this lesson.',
        },
        {
          type: 'p',
          text: 'Contrast a solution with muddy water: the clay particles are far larger than molecules, they scatter light (the water looks cloudy) and they settle out if you wait. That is a heterogeneous mixture (a *suspension*), not a solution. A true solution never settles and can pass through filter paper unchanged.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which of these is **not** a solution?',
      options: [
        { text: 'The air in a sealed MRE pouch', why: 'Air is a homogeneous mixture of gases — nitrogen is the solvent, oxygen and argon are solutes. Gases always mix completely, so every gas mixture is a solution.' },
        { text: 'A brass shell casing', why: 'Brass is a solid solution of zinc in copper, uniform throughout. Metal alloys like this are solutions too.' },
        { text: 'Water from a muddy puddle', correct: true, why: 'The clay particles are large, make the water cloudy and settle out on standing. It is a heterogeneous mixture (a suspension), not a solution.' },
        { text: 'A bag of normal saline', why: 'Saline is $\\ce{NaCl}$ dissolved in water: perfectly clear and uniform, the textbook aqueous solution.' },
      ],
      explanation: 'A solution must be homogeneous down to the level of individual particles: it is clear (though it may be colored), it never settles, and every sample has the same composition. Air, brass and saline all pass that test. Muddy water fails it — the clay settles to the bottom if you leave it alone.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Why things dissolve: like dissolves like',
      blocks: [
        {
          type: 'p',
          text: 'Recall from the bonding unit that water is a bent, [[polar-molecule]]: oxygen is much more electronegative than hydrogen, so the O end carries a partial negative charge ($\\delta-$) and the H ends carry partial positive charges ($\\delta+$). Water is a tiny magnet for anything charged.',
        },
        {
          type: 'p',
          text: 'Drop a salt crystal in, and water molecules crowd around the ions at its surface. The $\\delta-$ oxygen ends point toward each $\\ce{Na+}$; the $\\delta+$ hydrogen ends point toward each $\\ce{Cl-}$. Enough of these attractions together pull an ion out of the crystal, and it drifts away wrapped in its own shell of water. This is called **hydration**.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 245" xmlns="http://www.w3.org/2000/svg"><line x1="169.8" y1="148.0" x2="183.7" y2="142.3" stroke="currentColor" stroke-width="1.5"/><line x1="169.8" y1="148.0" x2="171.9" y2="162.9" stroke="currentColor" stroke-width="1.5"/><circle cx="169.8" cy="148.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="183.7" cy="142.3" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="171.9" cy="162.9" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="130.0" y1="171.0" x2="141.9" y2="180.2" stroke="currentColor" stroke-width="1.5"/><line x1="130.0" y1="171.0" x2="118.1" y2="180.2" stroke="currentColor" stroke-width="1.5"/><circle cx="130.0" cy="171.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="141.9" cy="180.2" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="118.1" cy="180.2" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="90.2" y1="148.0" x2="88.1" y2="162.9" stroke="currentColor" stroke-width="1.5"/><line x1="90.2" y1="148.0" x2="76.3" y2="142.3" stroke="currentColor" stroke-width="1.5"/><circle cx="90.2" cy="148.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="88.1" cy="162.9" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="76.3" cy="142.3" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="90.2" y1="102.0" x2="76.3" y2="107.7" stroke="currentColor" stroke-width="1.5"/><line x1="90.2" y1="102.0" x2="88.1" y2="87.1" stroke="currentColor" stroke-width="1.5"/><circle cx="90.2" cy="102.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="76.3" cy="107.7" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="88.1" cy="87.1" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="130.0" y1="79.0" x2="118.1" y2="69.8" stroke="currentColor" stroke-width="1.5"/><line x1="130.0" y1="79.0" x2="141.9" y2="69.8" stroke="currentColor" stroke-width="1.5"/><circle cx="130.0" cy="79.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="118.1" cy="69.8" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="141.9" cy="69.8" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="169.8" y1="102.0" x2="171.9" y2="87.1" stroke="currentColor" stroke-width="1.5"/><line x1="169.8" y1="102.0" x2="183.7" y2="107.7" stroke="currentColor" stroke-width="1.5"/><circle cx="169.8" cy="102.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="171.9" cy="87.1" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="183.7" cy="107.7" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="130" cy="125" r="22" class="f-blue" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="130" y="131" text-anchor="middle" style="font-size:17px;font-weight:600">Na⁺</text><line x1="448.9" y1="159.0" x2="435.0" y2="164.7" stroke="currentColor" stroke-width="1.5"/><line x1="448.9" y1="159.0" x2="446.9" y2="144.1" stroke="currentColor" stroke-width="1.5"/><circle cx="448.9" cy="159.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="435.0" cy="164.7" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="446.9" cy="144.1" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="390.0" y1="193.0" x2="378.1" y2="183.8" stroke="currentColor" stroke-width="1.5"/><line x1="390.0" y1="193.0" x2="401.9" y2="183.8" stroke="currentColor" stroke-width="1.5"/><circle cx="390.0" cy="193.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="378.1" cy="183.8" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="401.9" cy="183.8" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="331.1" y1="159.0" x2="333.1" y2="144.1" stroke="currentColor" stroke-width="1.5"/><line x1="331.1" y1="159.0" x2="345.0" y2="164.7" stroke="currentColor" stroke-width="1.5"/><circle cx="331.1" cy="159.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="333.1" cy="144.1" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="345.0" cy="164.7" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="331.1" y1="91.0" x2="345.0" y2="85.3" stroke="currentColor" stroke-width="1.5"/><line x1="331.1" y1="91.0" x2="333.1" y2="105.9" stroke="currentColor" stroke-width="1.5"/><circle cx="331.1" cy="91.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="345.0" cy="85.3" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="333.1" cy="105.9" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="390.0" y1="57.0" x2="401.9" y2="66.2" stroke="currentColor" stroke-width="1.5"/><line x1="390.0" y1="57.0" x2="378.1" y2="66.2" stroke="currentColor" stroke-width="1.5"/><circle cx="390.0" cy="57.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="401.9" cy="66.2" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="378.1" cy="66.2" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><line x1="448.9" y1="91.0" x2="446.9" y2="105.9" stroke="currentColor" stroke-width="1.5"/><line x1="448.9" y1="91.0" x2="435.0" y2="85.3" stroke="currentColor" stroke-width="1.5"/><circle cx="448.9" cy="91.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="446.9" cy="105.9" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="435.0" cy="85.3" r="6" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="390" cy="125" r="30" class="f-green" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="390" y="131" text-anchor="middle" style="font-size:17px;font-weight:600">Cl⁻</text><text x="130" y="232" text-anchor="middle">O (δ−) end points in</text><text x="390" y="232" text-anchor="middle">H (δ+) ends point in</text><circle cx="222" cy="22" r="8" class="f-red" stroke="currentColor"/><text x="236" y="27">O</text><circle cx="270" cy="22" r="5" class="f-gray" stroke="currentColor"/><text x="281" y="27">H</text></svg>',
          alt: 'A sodium ion surrounded by six water molecules with their oxygen atoms pointing toward the ion, and a larger chloride ion surrounded by six water molecules with their hydrogen atoms pointing toward the ion.',
          caption: 'Hydrated ions. Opposite charges attract: water turns its $\\delta-$ oxygen toward the cation and its $\\delta+$ hydrogens toward the anion.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Dissolving is a trade of attractions',
          text: 'To dissolve, three things must happen: solute particles must be pulled apart from each other, solvent particles must be pushed apart to make room, and new solute–solvent attractions form. If the new attractions are about as strong as the ones broken, the solute dissolves (mixing is also favored simply because a mixed state is far more probable than an unmixed one — General Chemistry calls this entropy). If the new attractions are much weaker, it does not.',
        },
        {
          type: 'p',
          text: 'That trade gives the chemist\'s rule of thumb **"like dissolves like"**: polar and ionic solutes dissolve in polar solvents such as water; nonpolar solutes (oil, grease, fuel, wax) dissolve in nonpolar solvents (gasoline, hexane, mineral spirits). Ethanol has a polar $\\ce{O-H}$ group and mixes with water in any proportion; the long hydrocarbon chains in motor oil have nothing for water to grab.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Soap and decontamination',
          text: 'Water alone barely touches fuel, grease or other oily contamination on skin and equipment. Soap molecules have an ionic "head" that loves water and a long nonpolar "tail" that loves oil. The tails bury themselves in the oil, the heads face the water, and the oil is carried away in tiny droplets. That is why decon procedures use soapy water, not plain water, for oily contaminants.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'Oil and water don\'t mix because water molecules repel oil molecules.',
      answer: false,
      explanation: 'There is actually a weak *attraction* between water and oil molecules — nothing repels them. The problem is that water molecules attract **each other** far more strongly (through hydrogen bonds, a strong type of [[intermolecular-forces|intermolecular force]]). To dissolve oil, water would have to give up those strong water–water attractions in exchange for weak water–oil ones, a bad trade. So the water molecules stick together and squeeze the oil out into its own layer.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Electrolytes: solutions that conduct',
      blocks: [
        {
          type: 'p',
          text: 'An electric current is moving charge. In a metal wire, electrons carry it. In a solution, the only possible carriers are **ions** — so a solution conducts electricity exactly when it contains dissolved ions. A solute whose solution conducts is an [[chem-electrolyte]].',
        },
        {
          type: 'p',
          text: 'Soluble ionic compounds break apart completely into their ions when they dissolve. This is called **dissociation**. The formula tells you how many ions you get, and polyatomic ions stay in one piece:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\ce{NaCl(s) -> Na+(aq) + Cl-(aq)} && \\text{2 ions} \\\\ &\\ce{CaCl2(s) -> Ca^2+(aq) + 2Cl-(aq)} && \\text{3 ions} \\\\ &\\ce{Al(NO3)3(s) -> Al^3+(aq) + 3NO3-(aq)} && \\text{4 ions} \\end{aligned}',
          caption: 'Water, the solvent, is sometimes written over the arrow; here it is left implicit. The charges on the right always add to zero, just as in the solid.',
        },
        {
          type: 'p',
          text: 'Molecular compounds such as sugar dissolve as whole, neutral molecules: $\\ce{C12H22O11(s) -> C12H22O11(aq)}$. No ions, no current. Some molecular compounds — the acids of the last lesson in this unit — react with water to make *some* ions.',
        },
        {
          type: 'table',
          headers: ['Type', 'What is in solution', 'Examples', 'Light-bulb test'],
          rows: [
            ['Strong electrolyte', 'essentially all ions', '$\\ce{NaCl}$, $\\ce{KNO3}$, $\\ce{HCl}$, $\\ce{NaOH}$', 'bright'],
            ['Weak electrolyte', 'mostly molecules, a few ions', 'acetic acid (vinegar), ammonia', 'dim'],
            ['Nonelectrolyte', 'only molecules', 'sugar, ethanol, antifreeze', 'off'],
          ],
          caption: 'Put two electrodes and a bulb in the solution: the brightness reports how many ions are carrying current.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Pure water is a poor conductor — real water is not',
          text: 'Perfectly pure water contains almost no ions and barely conducts. But tap water, rain, seawater and sweat all contain dissolved salts, which makes them electrolyte solutions that conduct well. That is the real reason water and electrical equipment are a dangerous combination, and why your body (a salty solution) conducts.',
        },
        {
          type: 'p',
          text: 'You meet electrolytes constantly: the "electrolytes" in a sports drink are dissolved $\\ce{Na+}$ and $\\ce{K+}$ salts your nerves need; the sulfuric acid solution in a vehicle battery is the electrolyte that lets charge flow inside the battery.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Potassium sulfate is a strong electrolyte. Complete its dissociation equation (type numbers).',
      template: '$\\ce{K2SO4(s) ->}$ ___ $\\ce{K+(aq)}$ + ___ $\\ce{SO4^2-(aq)}$, so one mole of $\\ce{K2SO4}$ releases ___ moles of ions in total.',
      blanks: [{ answers: ['2'] }, { answers: ['1'] }, { answers: ['3'] }],
      hint: 'The subscript 2 on K counts potassium ions. The sulfate ion $\\ce{SO4^2-}$ is polyatomic and stays together.',
      explanation: 'The formula $\\ce{K2SO4}$ contains two $\\ce{K+}$ ions and one $\\ce{SO4^2-}$ ion: $\\ce{K2SO4(s) -> 2K+(aq) + SO4^2-(aq)}$. The charges balance ($2(+1) + (-2) = 0$). The sulfate does **not** split into S and O — the bonds inside a polyatomic ion are covalent and survive dissolving. So each formula unit gives $2 + 1 = 3$ ions, and one mole gives $3$ moles of ions.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Solubility and saturation',
      blocks: [
        {
          type: 'p',
          text: 'Keep adding salt to a glass of water and eventually the extra just sits on the bottom. The water has dissolved as much as it can. That limit is the [[chem-solubility]] of the solute: the maximum amount that dissolves in a given amount of solvent at a given temperature, often quoted in grams per $100\\ \\text{g}$ of water.',
        },
        {
          type: 'list',
          items: [
            '**Unsaturated:** less solute than the limit. More will dissolve.',
            '**Saturated:** exactly at the limit. Added solute stays undissolved — ions keep leaving the crystal, but others rejoin it just as fast. (A [[chem-saturated-solution]] is a dynamic balance, not a stopped process.)',
            '**Supersaturated:** temporarily *above* the limit, made by cooling a saturated solution very gently. It is unstable: one seed crystal and the excess crashes out. Reusable sodium acetate hand warmers work this way — clicking the metal disk starts the crystallization, which releases heat.',
          ],
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [0, 250],
          xStep: 10,
          yStep: 25,
          height: 320,
          functions: [
            { expr: '13.62 + 0.5483x + 0.01752x^2', label: '$\\ce{KNO3}$', color: 'blue', domain: [0, 100] },
            { expr: '28.44 + 0.2836x', label: '$\\ce{KCl}$', color: 'green', domain: [0, 100] },
            { expr: '35.72 + 0.00709x + 0.000335x^2', label: '$\\ce{NaCl}$', color: 'red', domain: [0, 100] },
          ],
          vlines: [{ x: 'c', color: 'gray' }],
          points: [
            { x: 'c', y: '13.62 + 0.5483c + 0.01752c^2', color: 'blue' },
            { x: 'c', y: '35.72 + 0.00709c + 0.000335c^2', color: 'red' },
          ],
          sliders: [{ name: 'c', min: 0, max: 100, step: 1, value: 20, label: 'temperature (°C)' }],
          readouts: [
            { label: '$\\ce{KNO3}$ solubility (g per 100 g water) $\\approx$', expr: '13.62 + 0.5483c + 0.01752c^2', digits: 0 },
            { label: '$\\ce{NaCl}$ solubility (g per 100 g water) $\\approx$', expr: '35.72 + 0.00709c + 0.000335c^2', digits: 1 },
          ],
          caption: 'Solubility curves (smooth fits to handbook data; horizontal axis °C, vertical axis grams per $100\\ \\text{g}$ water). A point *below* a curve is unsaturated, *on* it saturated. Notice how steeply $\\ce{KNO3}$ rises while $\\ce{NaCl}$ barely changes.',
        },
        {
          type: 'p',
          text: 'For most solids, solubility rises with temperature: the faster-moving solvent molecules knock ions out of the crystal more effectively. The steep $\\ce{KNO3}$ curve is what makes **recrystallization** work — dissolve a solid in hot water, cool it, and the excess comes back out as purer crystals.',
        },
        {
          type: 'derivation',
          title: 'Cool a saturated $\\ce{KNO3}$ solution from $60\\ ^\\circ\\text{C}$ to $20\\ ^\\circ\\text{C}$ (per 100 g water)',
          steps: [
            { tex: 's(60\\ ^\\circ\\text{C}) \\approx 110\\ \\text{g},\\quad s(20\\ ^\\circ\\text{C}) \\approx 31.6\\ \\text{g}', why: 'Read the solubilities from the curve (or a data table).' },
            { tex: '\\text{dissolved at } 60\\ ^\\circ\\text{C} = 110\\ \\text{g}', why: 'Saturated means the solution holds exactly the solubility limit.' },
            { tex: '\\text{crystallizes} = 110\\ \\text{g} - 31.6\\ \\text{g} \\approx 78\\ \\text{g}', why: 'At $20\\ ^\\circ\\text{C}$ the water can hold only $31.6\\ \\text{g}$; everything above that comes out of solution as solid (assuming no supersaturation).' },
          ],
          result: 'About $78\\ \\text{g}$ of $\\ce{KNO3}$ crystals form, and the liquid left behind is still saturated — at $20\\ ^\\circ\\text{C}$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Gases do the opposite',
          text: 'Gas solubility *falls* as temperature rises (warm soda goes flat faster; warm rivers hold less oxygen for fish) and *rises* with pressure. Soda is bottled under high $\\ce{CO2}$ pressure; open it and the gas fizzes out. Divers face the same physics: at depth, extra nitrogen dissolves in the blood, and a too-fast ascent lets it come out as bubbles — decompression sickness, "the bends". The next lesson covers gas pressure itself.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'At $50\\ ^\\circ\\text{C}$ you dissolve $60\\ \\text{g}$ of $\\ce{KNO3}$ in $100\\ \\text{g}$ of water, then cool the solution to $20\\ ^\\circ\\text{C}$. Use the graph. About how much solid $\\ce{KNO3}$ crystallizes out?',
      graph: {
        type: 'graph',
        x: [0, 100],
        y: [0, 200],
        xStep: 10,
        yStep: 20,
        functions: [{ expr: '13.62 + 0.5483x + 0.01752x^2', label: '$\\ce{KNO3}$ solubility (g per 100 g water)', color: 'blue', domain: [0, 100] }],
        points: [
          { x: 50, y: 60, label: '60 g at 50 °C', color: 'purple' },
          { x: 20, y: 31.6, label: '≈ 32 g at 20 °C', color: 'blue' },
        ],
        caption: 'Horizontal axis: temperature in °C.',
      },
      options: [
        { text: 'None — the solution was unsaturated, so nothing ever comes out', why: 'It *starts* unsaturated at $50\\ ^\\circ\\text{C}$ (the limit there is about $85\\ \\text{g}$), but at $20\\ ^\\circ\\text{C}$ the limit drops below $60\\ \\text{g}$, so some solid must come out.' },
        { text: 'About $28\\ \\text{g}$', correct: true, why: 'At $20\\ ^\\circ\\text{C}$ the water holds only about $32\\ \\text{g}$. The other $60 - 32 \\approx 28\\ \\text{g}$ has nowhere to go but out of solution.' },
        { text: 'About $53\\ \\text{g}$', why: 'That is $85 - 32$, the difference between the two *solubility limits*. But the solution never held $85\\ \\text{g}$ — only $60\\ \\text{g}$ was dissolved.' },
        { text: 'All $60\\ \\text{g}$', why: 'Cooling lowers the limit; it does not drop it to zero. The water still holds about $32\\ \\text{g}$ at $20\\ ^\\circ\\text{C}$.' },
      ],
      explanation: 'Track what is actually dissolved. At $50\\ ^\\circ\\text{C}$ the purple point ($60\\ \\text{g}$) lies below the curve, so all $60\\ \\text{g}$ dissolves. As the solution cools, the point moves left; it hits the curve at roughly $38\\ ^\\circ\\text{C}$, where the solution becomes saturated. Below that, crystals form. At $20\\ ^\\circ\\text{C}$ only about $32\\ \\text{g}$ can stay dissolved, so about $60 - 32 = 28\\ \\text{g}$ crystallizes.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Molarity: moles per liter',
      blocks: [
        {
          type: 'p',
          text: 'To use a solution in a reaction we need to know how many *particles* of solute are in a given volume. Particles are counted in moles, and liquids are easy to measure by volume, so chemistry\'s standard concentration unit combines the two.',
        },
        {
          type: 'definition',
          term: 'Molarity',
          text: 'The [[molarity]] $M$ of a solution is the number of moles of solute per liter **of solution**:\n\n$$M = \\frac{\\text{moles of solute}}{\\text{liters of solution}} = \\frac{n}{V}$$\n\nIts unit is $\\text{mol/L}$, written $\\text{M}$ and read "molar": a $0.50\\ \\text{M}$ $\\ce{NaCl}$ solution contains $0.50\\ \\text{mol}$ of $\\ce{NaCl}$ in every liter.',
        },
        {
          type: 'derivation',
          title: '$25.0\\ \\text{g}$ of $\\ce{NaCl}$ is dissolved in enough water to make $500.0\\ \\text{mL}$ of solution. Find the molarity. ($\\ce{NaCl}$: $58.44\\ \\text{g/mol}$)',
          steps: [
            { tex: 'n = 25.0\\ \\cancel{\\text{g}\\ \\ce{NaCl}} \\times \\frac{1\\ \\text{mol}\\ \\ce{NaCl}}{58.44\\ \\cancel{\\text{g}\\ \\ce{NaCl}}} = 0.4278\\ \\text{mol}\\ \\ce{NaCl}', why: 'Molarity needs **moles**, not grams. Divide by the [[molar-mass]] (written as a conversion factor with grams on the bottom so grams cancel). Keep an extra digit until the end.' },
            { tex: 'V = 500.0\\ \\cancel{\\text{mL}} \\times \\frac{1\\ \\text{L}}{1000\\ \\cancel{\\text{mL}}} = 0.5000\\ \\text{L}', why: 'Molarity needs **liters**. $1000\\ \\text{mL} = 1\\ \\text{L}$ is an exact definition, so it does not limit significant figures.' },
            { tex: 'M = \\frac{0.4278\\ \\text{mol}}{0.5000\\ \\text{L}} = 0.856\\ \\text{mol/L}', why: 'Apply the definition $M = n/V$.' },
            { tex: '= 0.856\\ \\text{M}', why: 'Round to 3 [[significant-figures]], set by the $25.0\\ \\text{g}$ measurement.' },
          ],
          result: 'The solution is $0.856\\ \\text{M}$ $\\ce{NaCl}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "liters of solution", not "liters of water"?',
          text: 'Because what you measure and pour is the *solution*. If you need $0.0100\\ \\text{mol}$ of solute and know the molarity, you measure out $V = n/M$ of the solution itself. The dissolved solute takes up some room, so $1\\ \\text{L}$ of water plus solute does not make exactly $1\\ \\text{L}$ of solution. Defining molarity per liter of solution makes every pipet and buret reading convert directly into moles.',
        },
        {
          type: 'theorem',
          name: 'Molarity as a conversion factor',
          tex: 'n = M \\times V \\qquad\\qquad V = \\frac{n}{M}',
          text: 'Because $M$ is a ratio, it converts liters of solution to moles (multiply) or moles to liters (divide), exactly like density converts volume to mass.',
        },
        {
          type: 'deepdive',
          title: 'How strong is "normal saline"?',
          blocks: [
            {
              type: 'p',
              text: 'Medical labels often use percent: normal saline is $0.9\\%$ $\\ce{NaCl}$, meaning $0.9\\ \\text{g}$ per $100\\ \\text{mL}$, or $9\\ \\text{g}$ per liter. In molarity: $\\frac{9.0\\ \\text{g}}{1\\ \\text{L}} \\times \\frac{1\\ \\text{mol}}{58.44\\ \\text{g}} = 0.154\\ \\text{M}$. Each $\\ce{NaCl}$ gives two ions, so that is about $0.31\\ \\text{mol}$ of dissolved particles per liter — close to the particle concentration of blood, which is exactly the point: the IV fluid neither swells nor shrinks your red blood cells.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A field-hydration study dissolves $10.0\\ \\text{g}$ of glucose ($\\ce{C6H12O6}$, molar mass $180.16\\ \\text{g/mol}$) in enough water to make $250.0\\ \\text{mL}$ of solution. What is the molarity? Give 3 significant figures.',
      hint: 'Convert grams to moles, mL to L, then divide moles by liters.',
      label: '$M =$',
      answer: '10.0/180.16/0.2500',
      answerTex: '0.222\\ \\text{M}',
      tolerance: 0.0006,
      unit: 'M',
      explanation: 'Moles: $10.0\\ \\text{g} \\times \\frac{1\\ \\text{mol}}{180.16\\ \\text{g}} = 0.05551\\ \\text{mol}$. Volume: $250.0\\ \\text{mL} = 0.2500\\ \\text{L}$. Molarity: $\\frac{0.05551\\ \\text{mol}}{0.2500\\ \\text{L}} = 0.222\\ \\text{M}$. A common slip is dividing by $250.0$ (milliliters) and getting $0.000222$ — molarity is always per **liter**.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Making a solution from a solid',
      blocks: [
        {
          type: 'p',
          text: 'In the lab the question usually runs backwards: you are told the volume and molarity you need, and you must work out how much solid to weigh. Molarity gets you from volume to moles, and molar mass gets you from moles to grams — a two-step [[dimensional-analysis]] chain.',
        },
        {
          type: 'derivation',
          title: 'How many grams of $\\ce{NaOH}$ make $250.0\\ \\text{mL}$ of $0.100\\ \\text{M}$ solution? ($\\ce{NaOH}$: $22.990 + 15.999 + 1.008 = 39.997\\ \\text{g/mol}$)',
          steps: [
            { tex: '250.0\\ \\cancel{\\text{mL}} \\times \\frac{1\\ \\text{L}}{1000\\ \\cancel{\\text{mL}}} = 0.2500\\ \\text{L}', why: 'Molarity is per liter, so put the volume in liters first.' },
            { tex: '0.2500\\ \\cancel{\\text{L}} \\times \\frac{0.100\\ \\text{mol}\\ \\ce{NaOH}}{1\\ \\cancel{\\text{L}}} = 0.02500\\ \\text{mol}\\ \\ce{NaOH}', why: 'The molarity $0.100\\ \\text{mol/L}$ is a conversion factor from liters of solution to moles of solute: $n = MV$.' },
            { tex: '0.02500\\ \\cancel{\\text{mol}} \\times \\frac{39.997\\ \\text{g}}{1\\ \\cancel{\\text{mol}}} = 1.00\\ \\text{g}\\ \\ce{NaOH}', why: 'Molar mass converts moles to grams. Round to 3 significant figures (from $0.100\\ \\text{M}$).' },
          ],
          result: 'Weigh out $1.00\\ \\text{g}$ of $\\ce{NaOH}$.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Weigh', text: 'Weigh the calculated mass of solid on a balance.' },
            { title: 'Dissolve', text: 'Transfer it to a **volumetric flask** (a flask with a single precise fill line) and add distilled water to about half full. Swirl until it dissolves completely.' },
            { title: 'Fill to the mark', text: 'Add water until the bottom of the curved liquid surface (the meniscus) sits exactly on the line. Now the *solution* has the required volume.' },
            { title: 'Mix', text: 'Stopper the flask and invert it several times so the concentration is uniform.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not add the solid to 250.0 mL of water',
          text: 'That gives *more* than $250.0\\ \\text{mL}$ of solution (the solute takes up space), so the molarity comes out too low. Dissolve first in less water, then fill to the mark. This is the practical meaning of "liters of solution".',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A unit-aware calculator',
          text: 'Every one of these chains is just multiplying by ratios whose units cancel. Game engines and physics libraries sometimes encode units in the type system (a `Mass` type that can only be divided by a `MolarMass` to give `Moles`) so that a missing conversion becomes a *compile* error rather than a wrong number. Writing the units on every factor by hand gives you the same safety net.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Put the steps for preparing $250.0\\ \\text{mL}$ of $0.100\\ \\text{M}$ $\\ce{CuSO4}$ from the solid in order.',
      lines: [
        'Find the moles needed: $n = MV = (0.100\\ \\text{mol/L})(0.2500\\ \\text{L}) = 0.0250\\ \\text{mol}$',
        'Multiply by the molar mass of $\\ce{CuSO4}$ to get grams, and weigh out that mass',
        'Dissolve the solid in about $125\\ \\text{mL}$ of distilled water in a $250\\text{-mL}$ volumetric flask',
        'Add water until the meniscus sits on the fill line',
        'Stopper and invert the flask several times to mix',
      ],
      distractors: ['Pour the solid into exactly $250.0\\ \\text{mL}$ of water'],
      explanation: 'Calculation first (moles from $MV$, then grams from molar mass), then the lab work: dissolve in *less* water than the final volume, fill to the mark, and mix. The distractor is the classic error — adding the solid to $250.0\\ \\text{mL}$ of water makes slightly more than $250.0\\ \\text{mL}$ of solution, so the molarity would be a little low.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'How many grams of $\\ce{KCl}$ (molar mass $74.55\\ \\text{g/mol}$) do you need to make $500.0\\ \\text{mL}$ of $0.150\\ \\text{M}$ $\\ce{KCl}$? Give 3 significant figures.',
      hint: 'Liters × molarity = moles; moles × molar mass = grams.',
      answer: '0.5000*0.150*74.55',
      answerTex: '5.59\\ \\text{g}',
      tolerance: 0.006,
      unit: 'g',
      explanation: '$0.5000\\ \\text{L} \\times \\frac{0.150\\ \\text{mol}}{1\\ \\text{L}} = 0.0750\\ \\text{mol}$ of $\\ce{KCl}$, and $0.0750\\ \\text{mol} \\times \\frac{74.55\\ \\text{g}}{1\\ \\text{mol}} = 5.59\\ \\text{g}$. Writing the units on each factor shows that L cancels L and mol cancels mol, leaving grams.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Dilution: $M_1V_1 = M_2V_2$',
      blocks: [
        {
          type: 'p',
          text: 'Labs and supply rooms keep acids and other reagents as concentrated **stock solutions** and dilute them when needed — it saves space and shipping weight. [[dilution|Dilution]] means adding solvent to lower the concentration. The key fact is what does *not* change.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 35 500 255" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="180" width="130" height="40" class="f-blue" fill-opacity="0.15" stroke="none"/><path d="M34 45 L40 51 L40 220 L170 220 L170 51 L176 45" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><line x1="40" y1="180" x2="170" y2="180" class="s-blue" stroke-width="1.5"/><circle cx="66.2" cy="206.9" r="5.5" class="f-purple"/><circle cx="133.0" cy="195.1" r="5.5" class="f-purple"/><circle cx="104.5" cy="199.0" r="5.5" class="f-purple"/><circle cx="151.5" cy="197.6" r="5.5" class="f-purple"/><circle cx="82.7" cy="190.4" r="5.5" class="f-purple"/><circle cx="53.8" cy="190.3" r="5.5" class="f-purple"/><circle cx="84.9" cy="208.8" r="5.5" class="f-purple"/><circle cx="122.1" cy="209.7" r="5.5" class="f-purple"/><rect x="330" y="60" width="130" height="160" class="f-blue" fill-opacity="0.15" stroke="none"/><path d="M324 45 L330 51 L330 220 L460 220 L460 51 L466 45" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><line x1="330" y1="60" x2="460" y2="60" class="s-blue" stroke-width="1.5"/><circle cx="367.2" cy="146.2" r="5.5" class="f-purple"/><circle cx="408.3" cy="79.2" r="5.5" class="f-purple"/><circle cx="343.4" cy="187.2" r="5.5" class="f-purple"/><circle cx="369.5" cy="102.8" r="5.5" class="f-purple"/><circle cx="447.5" cy="135.8" r="5.5" class="f-purple"/><circle cx="409.3" cy="191.5" r="5.5" class="f-purple"/><circle cx="397.5" cy="173.8" r="5.5" class="f-purple"/><circle cx="422.4" cy="152.8" r="5.5" class="f-purple"/><line x1="195" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="2"/><path d="M300 133 L312 140 L300 147 Z" fill="currentColor"/><text x="250" y="128" text-anchor="middle">add water</text><text x="250" y="162" text-anchor="middle" class="t-gray">×4 volume</text><text x="105" y="246" text-anchor="middle">V₁ = 0.10 L, M₁ = 2.0 M</text><text x="395" y="246" text-anchor="middle">V₂ = 0.40 L, M₂ = 0.50 M</text><text x="250" y="276" text-anchor="middle" class="t-purple">same 8 solute particles = same moles of solute</text></svg>',
          alt: 'A beaker with a small volume of liquid containing eight solute particles packed closely, an arrow labeled add water, and a beaker with four times the volume containing the same eight particles spread out.',
          caption: 'Adding water spreads the same solute particles through a larger volume. Four times the volume means one quarter of the concentration.',
        },
        {
          type: 'theorem',
          name: 'Dilution equation',
          tex: 'M_1 V_1 = M_2 V_2',
          text: 'Subscript 1 is the concentrated solution you start with; subscript 2 is the diluted solution after adding solvent.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it works: moles of solute are conserved',
          text: 'Adding water adds no solute. The moles of solute before and after are the same, and moles $= MV$. So $n_{\\text{before}} = n_{\\text{after}}$ is literally $M_1V_1 = M_2V_2$. Because the volumes appear on both sides, you can use mL on both sides without converting to liters — the conversion factor would cancel anyway. Concentration and volume are **inversely proportional** when the amount of solute is fixed.',
        },
        {
          type: 'derivation',
          title: 'What volume of $12.0\\ \\text{M}$ $\\ce{HCl}$ stock makes $500.0\\ \\text{mL}$ of $1.50\\ \\text{M}$ $\\ce{HCl}$?',
          steps: [
            { tex: 'M_1V_1 = M_2V_2', why: 'Moles of $\\ce{HCl}$ are the same before and after dilution.' },
            { tex: 'V_1 = \\frac{M_2V_2}{M_1}', why: 'Solve for the unknown, the volume of stock.' },
            { tex: 'V_1 = \\frac{(1.50\\ \\cancel{\\text{M}})(500.0\\ \\text{mL})}{12.0\\ \\cancel{\\text{M}}}', why: 'Substitute. Molarity units cancel; the answer comes out in mL because $V_2$ was in mL.' },
            { tex: 'V_1 = 62.5\\ \\text{mL}', why: '$750/12.0 = 62.5$, with 3 significant figures.' },
          ],
          result: 'Measure $62.5\\ \\text{mL}$ of stock and dilute it to a **total** volume of $500.0\\ \\text{mL}$ (about $437.5\\ \\text{mL}$ of water is added, but you fill to the mark rather than measuring the water).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Safety: add acid to water',
          text: 'Diluting a concentrated acid releases a lot of heat. Put most of the water in the flask first and pour the acid slowly into it, so the large mass of water absorbs the heat. Pouring water into concentrated acid can boil the first drops instantly and spatter acid. ("Do what you oughta, add the acid to the water.")',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A student needs $250\\ \\text{mL}$ of $0.40\\ \\text{M}$ $\\ce{NaCl}$ from a $2.0\\ \\text{M}$ stock. Tap the first line that is wrong.',
      lines: [
        '$M_1V_1 = M_2V_2$',
        '$(2.0\\ \\text{M})\\,V_1 = (0.40\\ \\text{M})(250\\ \\text{mL})$',
        '$V_1 = \\frac{100}{2.0} = 50.\\ \\text{mL}$ of stock',
        'Add $50.\\ \\text{mL}$ of stock to $250\\ \\text{mL}$ of water.',
      ],
      errorLines: [4],
      explanation: 'The calculation is right: $50.\\ \\text{mL}$ of stock. The mistake is line 4. $V_2 = 250\\ \\text{mL}$ is the **final total volume**, so you dilute the $50.\\ \\text{mL}$ of stock *to* $250\\ \\text{mL}$ (adding about $200\\ \\text{mL}$ of water). Adding it to $250\\ \\text{mL}$ of water makes $300\\ \\text{mL}$ of solution with $M = \\frac{(2.0)(50.)}{300} = 0.33\\ \\text{M}$ — too dilute.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: '$25.0\\ \\text{mL}$ of $6.00\\ \\text{M}$ $\\ce{NaOH}$ is diluted with water to a final volume of $150.0\\ \\text{mL}$. What is the new molarity? Give 3 significant figures.',
      label: '$M_2 =$',
      answer: '6.00*25.0/150.0',
      answerTex: '1.00\\ \\text{M}',
      tolerance: 0.005,
      unit: 'M',
      explanation: '$M_2 = \\frac{M_1V_1}{V_2} = \\frac{(6.00\\ \\text{M})(25.0\\ \\text{mL})}{150.0\\ \\text{mL}} = 1.00\\ \\text{M}$. Sanity check: the volume grew by a factor of $6$, so the concentration must shrink by a factor of $6$ — and $6.00/6 = 1.00$. A diluted solution can never be *more* concentrated than the stock.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'concept',
      title: 'Solution stoichiometry',
      blocks: [
        {
          type: 'p',
          text: 'In the stoichiometry lesson you converted grams of one substance to grams of another through the [[mole-ratio]]. With solutions, the only change is how you get into and out of moles: **molarity × volume** instead of mass ÷ molar mass.',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\text{volume of A} \\xrightarrow{\\ \\times M_A\\ } \\text{mol A} \\\\ &\\qquad \\xrightarrow{\\ \\text{mole ratio}\\ } \\text{mol B} \\xrightarrow{\\ \\div M_B\\ } \\text{volume of B} \\end{aligned}',
          caption: 'The road map for "how much of solution B reacts with this much of solution A?"',
        },
        {
          type: 'p',
          text: 'Silver nitrate and calcium chloride are both soluble, but mixing them makes insoluble silver chloride, which falls out as a white solid (a [[chem-precipitate|precipitate]]). This is a [[double-replacement]] reaction:',
        },
        {
          type: 'math',
          tex: '\\begin{aligned} &\\ce{2AgNO3(aq) + CaCl2(aq)} \\\\ &\\quad \\ce{-> 2AgCl(s) + Ca(NO3)2(aq)} \\end{aligned}',
          caption: 'Check the balance: 2 Ag, 2 N, 6 O, 1 Ca, 2 Cl on each side.',
        },
        {
          type: 'derivation',
          title: 'What volume of $0.100\\ \\text{M}$ $\\ce{AgNO3}$ reacts completely with $25.0\\ \\text{mL}$ of $0.0800\\ \\text{M}$ $\\ce{CaCl2}$?',
          steps: [
            { tex: '0.0250\\ \\cancel{\\text{L}} \\times \\frac{0.0800\\ \\text{mol}\\ \\ce{CaCl2}}{1\\ \\cancel{\\text{L}}} = 2.00 \\times 10^{-3}\\ \\text{mol}\\ \\ce{CaCl2}', why: 'Volume (in liters) times molarity gives the moles of the solution you know everything about.' },
            { tex: '2.00 \\times 10^{-3}\\ \\cancel{\\text{mol}\\ \\ce{CaCl2}} \\times \\frac{2\\ \\text{mol}\\ \\ce{AgNO3}}{1\\ \\cancel{\\text{mol}\\ \\ce{CaCl2}}} = 4.00 \\times 10^{-3}\\ \\text{mol}\\ \\ce{AgNO3}', why: 'The balanced equation says $2$ mol $\\ce{AgNO3}$ react per $1$ mol $\\ce{CaCl2}$ — each $\\ce{CaCl2}$ brings two $\\ce{Cl-}$, and each needs its own $\\ce{Ag+}$.' },
            { tex: '4.00 \\times 10^{-3}\\ \\cancel{\\text{mol}\\ \\ce{AgNO3}} \\times \\frac{1\\ \\text{L}}{0.100\\ \\cancel{\\text{mol}\\ \\ce{AgNO3}}} = 0.0400\\ \\text{L}', why: 'Divide by molarity (multiply by its reciprocal) to turn moles back into liters of solution: $V = n/M$.' },
            { tex: '= 40.0\\ \\text{mL}', why: 'Convert to milliliters, the unit you would read on a buret.' },
          ],
          result: '$40.0\\ \\text{mL}$ of the silver nitrate solution is needed.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The most common mistake on these problems is skipping the mole ratio — setting moles of A equal to moles of B as if every reaction were 1 : 1. Always write the balanced equation first. The acids and bases lesson at the end of this unit uses exactly this road map for **titrations**, where an acid solution reacts with a base solution.',
        },
      ],
    },
    // ------------------------------------------------------------------ 18
    {
      kind: 'numeric',
      prompt: 'Sodium sulfate precipitates barium as barium sulfate: $\\ce{Na2SO4(aq) + BaCl2(aq) -> BaSO4(s) + 2NaCl(aq)}$. How many mL of $0.250\\ \\text{M}$ $\\ce{Na2SO4}$ are needed to react completely with $40.0\\ \\text{mL}$ of $0.150\\ \\text{M}$ $\\ce{BaCl2}$? Give 3 significant figures.',
      hint: 'Moles of $\\ce{BaCl2}$ first. Check the mole ratio in the balanced equation before converting to the volume of $\\ce{Na2SO4}$.',
      answer: '0.150*40.0/0.250',
      answerTex: '24.0\\ \\text{mL}',
      tolerance: 0.05,
      unit: 'mL',
      explanation: 'Moles of $\\ce{BaCl2}$: $0.0400\\ \\text{L} \\times 0.150\\ \\text{mol/L} = 6.00 \\times 10^{-3}\\ \\text{mol}$. The ratio is $1 : 1$, so $6.00 \\times 10^{-3}\\ \\text{mol}$ of $\\ce{Na2SO4}$ is needed. Volume: $\\frac{6.00 \\times 10^{-3}\\ \\text{mol}}{0.250\\ \\text{mol/L}} = 0.0240\\ \\text{L} = 24.0\\ \\text{mL}$. (Barium sulfate is so insoluble that it is safe to drink as the "barium meal" contrast agent for X-rays, even though dissolved barium ions are toxic.)',
    },
  ],
  takeaways: [
    'A solution is a homogeneous mixture: a solute dissolved in a solvent. "Like dissolves like" — polar and ionic solutes dissolve in water because water\'s $\\delta-$ and $\\delta+$ ends attract them.',
    'Soluble ionic compounds dissociate into ions and are strong electrolytes; molecular solutes like sugar are nonelectrolytes. Count ions from the formula: $\\ce{CaCl2 -> Ca^2+ + 2Cl-}$.',
    'Solubility is the maximum amount that dissolves at a given temperature; most solids dissolve better when hot, gases dissolve better when cold and under pressure.',
    'Molarity is moles of solute per liter **of solution**: $M = n/V$, so $n = MV$ and $V = n/M$.',
    'Dilution conserves moles of solute, so $M_1V_1 = M_2V_2$; $V_2$ is the final total volume.',
    'Solution stoichiometry: volume × molarity → moles → mole ratio → moles → ÷ molarity → volume.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 3: Composition of Substances and Solutions',
      url: 'https://openstax.org/books/chemistry-2e/pages/3-introduction',
      source: 'openstax',
      note: 'Sections 3.3 and 3.4 cover molarity and dilution with many more worked examples.',
    },
    {
      title: 'OpenStax Chemistry 2e — Chapter 11: Solutions and Colloids',
      url: 'https://openstax.org/books/chemistry-2e/pages/11-introduction',
      source: 'openstax',
      note: 'Goes deeper into why things dissolve, electrolytes and solubility — a preview of General Chemistry.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for the "Molarity" and "Concentration" simulations to watch concentration change as you add solute or water.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'The solutions unit has short videos on molarity, dilution and solution stoichiometry.',
    },
  ],
};
