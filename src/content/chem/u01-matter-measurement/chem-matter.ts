import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'chem-matter',
  title: 'Matter, Its States and Its Changes',
  summary: 'What chemistry studies and why it matters, the particle picture of solids, liquids and gases, how to classify matter, and the difference between physical and chemical change.',
  minutes: 18,
  objectives: [
    'Explain what chemistry studies and where it shows up in everyday life, engineering, medicine and the military',
    'Describe solids, liquids and gases in terms of particle spacing, motion and attraction',
    'Classify a sample as an element, a compound, a homogeneous mixture or a heterogeneous mixture',
    'Distinguish physical from chemical properties and changes, and list the evidence for a chemical change',
    'Use conservation of mass to find a missing mass, and explain the flat plateaus of a heating curve',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What chemistry is, and why it is worth your time',
      blocks: [
        {
          type: 'p',
          text: '**Chemistry** is the study of matter: what things are made of, how that structure gives them their properties, and how one substance turns into another. Physics asks how matter moves; biology asks how living matter organises itself; chemistry sits between them and asks *what stuff is and how it changes*. That is why it is often called the central science.',
        },
        {
          type: 'p',
          text: 'You already live in a chemistry lab. Cooking browns sugars and proteins into hundreds of new flavor molecules. Soap grabs grease with one end of its molecule and water with the other. The lithium-ion battery in your phone pushes electrons through a circuit because two materials hold on to them with different strengths.',
        },
        {
          type: 'list',
          items: [
            '**Engineering:** alloys stronger than their parent metals, concrete that hardens by reacting with water, silicon chips whose behavior is tuned by adding a few atoms per million of another element.',
            '**Medicine:** drug molecules shaped to fit one protein and not another, blood tests that measure ion concentrations, doses computed in mg per kg of body mass (a unit conversion you will do in this unit).',
            '**The military:** jet fuel and diesel are chemical energy released by combustion; radios and night-vision gear run on batteries; propellants and explosives are, at their core, reactions that produce a large volume of hot gas very quickly; decontamination destroys hazardous chemicals by reacting them into harmless ones; divers and aircrew live by the gas laws.',
          ],
        },
        {
          type: 'definition',
          term: 'Matter',
          text: '[[matter|Matter]] is anything that has **mass** and takes up **space** (has volume). Air, water, steel and you are matter. Light, heat, sound, electric fields and ideas are not: they have no mass and fill no volume.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one science can explain so much',
          text: 'Everything around you is built from about a hundred kinds of [[atom|atoms]]. The rules for how atoms attract, share and trade electrons are few, and they repeat everywhere. Learn those rules once and the same ideas explain why steel rusts, why ice floats, why a battery dies and why fuel burns. This course builds them from the ground up: matter and measurement, atoms and the periodic table, bonding, reactions and the mole, then solutions, gases and acids.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Your math is an advantage here',
          text: 'Most of the calculation in introductory chemistry is ratios, unit conversions, linear equations and the occasional logarithm. If you can rearrange $PV = nRT$ for $V$, you have the algebra this course needs. The new part is the physical picture behind the numbers, which is what we will keep coming back to.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which of these is **not** matter?',
      options: [
        { text: 'The air inside a car tire', why: 'Air has mass (a liter of it is about 1.2 g) and fills the tire. It is matter, just invisible.' },
        { text: 'The helium in a party balloon', why: 'Helium atoms have mass and occupy the balloon. A balloon floats because helium is *less dense* than air, not because it has no mass.' },
        { text: 'The light from a flashlight', correct: true, why: 'Light is energy carried by an electromagnetic wave. It has no rest mass and does not fill a volume the way a gas does, so it is not matter.' },
        { text: 'The steam rising from a kettle', why: 'Steam is water in the gas state: the same molecules as liquid water, just spread far apart. Still matter.' },
      ],
      explanation: 'The test is: does it have mass and take up space? Gases pass the test even though you cannot see them. Light, heat and sound fail it. They are forms of **energy**, which matter can absorb and release, but they are not matter themselves.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The particle picture: solids, liquids and gases',
      blocks: [
        {
          type: 'p',
          text: 'All matter is made of tiny particles: atoms, or groups of atoms bonded together called [[chem-molecule|molecules]]. They are far too small to see (a drop of water holds about $1.7 \\times 10^{21}$ molecules), and they are **always moving**. What decides whether a substance is a solid, a liquid or a gas is a tug of war between two things: how fast the particles move, and how strongly they attract one another.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 480 215" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="140" height="140" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="170" y="10" width="140" height="140" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="330" y="10" width="140" height="140" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="30.0" cy="30.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="30.0" cy="50.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="30.0" cy="70.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="30.0" cy="90.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="30.0" cy="110.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="30.0" cy="130.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="50.0" cy="30.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="50.0" cy="50.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="50.0" cy="70.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="50.0" cy="90.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="50.0" cy="110.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="50.0" cy="130.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="70.0" cy="30.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="70.0" cy="50.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="70.0" cy="70.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="70.0" cy="90.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="70.0" cy="110.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="70.0" cy="130.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="90.0" cy="30.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="90.0" cy="50.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="90.0" cy="70.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="90.0" cy="90.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="90.0" cy="110.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="90.0" cy="130.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="110.0" cy="30.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="110.0" cy="50.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="110.0" cy="70.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="110.0" cy="90.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="110.0" cy="110.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="110.0" cy="130.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="130.0" cy="30.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="130.0" cy="50.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="130.0" cy="70.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="130.0" cy="90.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="130.0" cy="110.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="130.0" cy="130.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="209.1" cy="69.9" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="189.3" cy="92.7" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="288.9" cy="123.2" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="271.0" cy="79.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="244.3" cy="83.2" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="206.6" cy="133.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="217.8" cy="110.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="267.1" cy="127.4" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="252.4" cy="113.4" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="298.2" cy="77.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="186.5" cy="115.3" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="229.5" cy="134.2" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="297.1" cy="98.5" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="276.8" cy="102.4" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="184.6" cy="64.6" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="229.7" cy="63.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="183.7" cy="135.4" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="254.3" cy="63.4" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="219.4" cy="88.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="249.4" cy="136.2" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="235.6" cy="101.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="283.4" cy="62.8" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><line x1="173.0" y1="52.0" x2="307.0" y2="52.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><circle cx="358.0" cy="40.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><line x1="366.8" y1="47.4" x2="376.0" y2="55.1" stroke="currentColor" stroke-width="1.4"/><polygon points="380.6,59.0 377.9,52.8 374.1,57.4" fill="currentColor"/><circle cx="430.0" cy="36.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><line x1="419.2" y1="39.9" x2="407.9" y2="44.0" stroke="currentColor" stroke-width="1.4"/><polygon points="402.3,46.1 408.9,46.9 406.9,41.2" fill="currentColor"/><circle cx="400.0" cy="82.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><line x1="405.8" y1="72.0" x2="411.8" y2="61.6" stroke="currentColor" stroke-width="1.4"/><polygon points="414.8,56.5 409.2,60.1 414.3,63.1" fill="currentColor"/><circle cx="448.0" cy="114.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><line x1="439.2" y1="106.6" x2="430.0" y2="98.9" stroke="currentColor" stroke-width="1.4"/><polygon points="425.4,95.0 428.1,101.2 431.9,96.6" fill="currentColor"/><circle cx="356.0" cy="122.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><line x1="361.8" y1="112.0" x2="367.8" y2="101.6" stroke="currentColor" stroke-width="1.4"/><polygon points="370.8,96.5 365.2,100.1 370.3,103.1" fill="currentColor"/><circle cx="400.0" cy="132.0" r="9.5" class="f-blue" stroke="currentColor" stroke-width="1"/><line x1="411.3" y1="134.0" x2="423.1" y2="136.1" stroke="currentColor" stroke-width="1.4"/><polygon points="429.1,137.1 423.7,133.1 422.6,139.0" fill="currentColor"/><text x="80" y="172" text-anchor="middle" style="font-size:16px;font-weight:600">Solid</text><text x="80" y="191" text-anchor="middle" style="font-size:12px">fixed shape, fixed volume</text><text x="80" y="207" text-anchor="middle" class="t-gray" style="font-size:12px">packed, ordered, vibrating</text><text x="240" y="172" text-anchor="middle" style="font-size:16px;font-weight:600">Liquid</text><text x="240" y="191" text-anchor="middle" style="font-size:12px">takes container shape</text><text x="240" y="207" text-anchor="middle" class="t-gray" style="font-size:12px">close, disordered, sliding</text><text x="400" y="172" text-anchor="middle" style="font-size:16px;font-weight:600">Gas</text><text x="400" y="191" text-anchor="middle" style="font-size:12px">fills the whole container</text><text x="400" y="207" text-anchor="middle" class="t-gray" style="font-size:12px">far apart, fast, random</text></svg>',
          alt: 'Three boxes of particles. Solid: particles packed in neat rows and columns. Liquid: particles touching but jumbled, filling the bottom of the box. Gas: a few particles far apart with arrows showing fast motion in random directions.',
          caption: 'The same particles in the three [[states-of-matter]]. Notice the spacing: solids and liquids are packed almost equally tight; only the gas has mostly empty space.',
        },
        {
          type: 'table',
          headers: ['Property', 'Solid', 'Liquid', 'Gas'],
          rows: [
            ['Spacing', 'touching', 'touching', 'far apart'],
            ['Arrangement', 'ordered, fixed positions', 'disordered', 'disordered'],
            ['Motion', 'vibrate in place', 'slide past each other', 'fly freely, collide'],
            ['Shape', 'its own', 'takes container\'s', 'takes container\'s'],
            ['Volume', 'fixed', 'fixed', 'fills container'],
            ['Compressible?', 'barely', 'barely', 'easily'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why gases squash and liquids don\'t',
          text: 'In a solid or liquid the particles already touch, so squeezing has nowhere to put them. In a gas the particles are far apart, and almost all of the volume is empty space. When liquid water boils at $100$ °C the same mass of steam takes up about **1,600 times** the volume. That enormous expansion is why a sealed container of water in a fire is dangerous, and it is the same reason a reaction that suddenly produces gas can burst its container.',
        },
        {
          type: 'p',
          text: '**Temperature** is a measure of how fast the particles move on average (their average kinetic energy). Heat a solid and its particles vibrate harder until they break free of their fixed positions (melting). Heat a liquid and the fastest particles escape the attractions of their neighbors entirely (evaporation and boiling).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A gas is a particle system',
          text: 'If you have ever written a particle system for sparks or smoke, you have simulated a gas: give each particle a random velocity, move it each frame, and bounce it off the walls. Add an attractive force between neighbors and lower the speeds, and the particles clump into a "liquid"; pin each one to a grid point with a spring and you have a "solid". Molecular dynamics codes used by chemists are this idea with real forces.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the particle description of the three states.',
      template: 'In a ___ the particles vibrate about fixed positions; in a ___ they stay in contact but slide past one another; in a ___ they are far apart and move freely until they collide.',
      blanks: [{ answers: ['solid'] }, { answers: ['liquid'] }, { answers: ['gas'] }],
      wordBank: ['solid', 'liquid', 'gas', 'plasma', 'mixture'],
      explanation: 'Solid: fixed positions, so a fixed shape. Liquid: still touching (fixed volume) but free to slide (takes the container\'s shape). Gas: far apart and fast, so it fills whatever container it is in and compresses easily. (Plasma, a gas so hot that electrons are stripped from atoms, exists in lightning and stars, but it is not one of the three everyday states.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Pure substances: elements and compounds',
      blocks: [
        {
          type: 'p',
          text: 'Chemists sort matter by **composition**: what it is made of and whether that is fixed. A [[pure-substance]] has a fixed composition and the same properties in every sample. Pure water from a lab in Texas and from a glacier in Alaska boils at the same temperature, because it is the same substance.',
        },
        {
          type: 'definition',
          term: 'Element',
          text: 'An [[element]] is a pure substance made of only one kind of atom. It cannot be broken down into anything simpler by a chemical reaction. Examples: iron $\\ce{Fe}$, copper $\\ce{Cu}$, helium $\\ce{He}$, and oxygen gas $\\ce{O2}$ (molecules of two oxygen atoms; still one kind of atom).',
        },
        {
          type: 'definition',
          term: 'Compound',
          text: 'A [[compound]] is a pure substance made of two or more elements **chemically bonded in a fixed ratio**. Water is always $\\ce{H2O}$: two hydrogen atoms for every oxygen atom. A compound can be broken down into its elements, but only by a chemical reaction.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 172" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="112" height="112" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="132" y="8" width="112" height="112" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="256" y="8" width="112" height="112" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="380" y="8" width="112" height="112" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="33.0" cy="33.0" r="10" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="88.0" cy="28.0" r="10" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="63.0" cy="63.0" r="10" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="30.0" cy="96.0" r="10" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="98.0" cy="78.0" r="10" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="68.0" cy="103.0" r="10" class="f-gray" stroke="currentColor" stroke-width="1"/><circle cx="154.5" cy="33.3" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="169.5" cy="38.7" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="207.1" cy="42.0" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="220.9" cy="34.0" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="184.3" cy="66.5" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="189.7" cy="81.5" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="152.0" cy="103.0" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="168.0" cy="103.0" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="213.9" cy="94.9" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="226.1" cy="105.1" r="9" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="286.0" cy="36.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="276.5" cy="43.3" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="295.5" cy="43.3" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="340.0" cy="38.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="347.3" cy="47.5" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="347.3" cy="28.5" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="312.0" cy="74.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="318.4" cy="63.9" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="300.6" cy="70.4" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="282.0" cy="102.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="293.9" cy="100.4" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="277.4" cy="90.9" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="344.0" cy="100.0" r="10" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="339.4" cy="111.1" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="355.9" cy="101.6" r="6" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="400.6" cy="32.7" r="8.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="415.4" cy="35.3" r="8.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="458.3" cy="36.8" r="8.5" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="469.7" cy="27.2" r="8.5" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="428.7" cy="60.6" r="8.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="431.3" cy="75.4" r="8.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="463.0" cy="71.4" r="8.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="477.0" cy="76.6" r="8.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="397.0" cy="106.6" r="8.5" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="411.0" cy="101.4" r="8.5" class="f-red" stroke="currentColor" stroke-width="1"/><circle cx="446.5" cy="108.0" r="8.5" class="f-blue" stroke="currentColor" stroke-width="1"/><circle cx="461.5" cy="108.0" r="8.5" class="f-blue" stroke="currentColor" stroke-width="1"/><text x="64" y="144" text-anchor="middle" style="font-size:15px;font-weight:600">Element</text><text x="64" y="164" text-anchor="middle" style="font-size:13px">Ne atoms</text><text x="188" y="144" text-anchor="middle" style="font-size:15px;font-weight:600">Element</text><text x="188" y="164" text-anchor="middle" style="font-size:13px">O₂ molecules</text><text x="312" y="144" text-anchor="middle" style="font-size:15px;font-weight:600">Compound</text><text x="312" y="164" text-anchor="middle" style="font-size:13px">H₂O molecules</text><text x="436" y="144" text-anchor="middle" style="font-size:15px;font-weight:600">Mixture</text><text x="436" y="164" text-anchor="middle" style="font-size:13px">N₂ + O₂ (air)</text></svg>',
          alt: 'Four boxes of particles. Element: identical single gray atoms. Element: identical pairs of red atoms. Compound: identical molecules each with one large red atom and two small blue atoms. Mixture: blue pairs and red pairs mixed together.',
          caption: 'In a pure substance every particle is identical (the first three boxes). A compound\'s molecules contain different kinds of atoms bonded together. A mixture contains more than one kind of particle.',
        },
        {
          type: 'p',
          text: 'Because a compound\'s atom ratio is fixed, its **mass ratio** is fixed too. Every sample of water is about 88.8% oxygen by mass, whether you have a drop or a lake. This is the *law of definite proportions*, and it was one of the first clues that matter is made of atoms.',
        },
        {
          type: 'derivation',
          title: 'Where the 88.8% comes from',
          steps: [
            { tex: '\\text{one } \\ce{H2O}: \\quad 2 \\times 1.008 + 15.999 = 18.015', why: 'Add the masses of the atoms (in atomic mass units): two hydrogens at $1.008$ each and one oxygen at $15.999$. You will meet these values from the periodic table in Unit 2.' },
            { tex: '\\text{fraction O} = \\frac{15.999}{18.015} = 0.8881', why: 'The oxygen part divided by the whole molecule. Every molecule is identical, so this fraction holds for any amount of water.' },
            { tex: '\\approx 88.8\\%', why: 'Multiply by 100 to express as a percent.' },
          ],
          result: 'Water is $88.8\\%$ oxygen by mass, in every sample. A mixture of hydrogen and oxygen gas could have any ratio you like.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A compound is not its elements',
          text: 'A compound has its **own** properties, usually nothing like its elements. Sodium is a soft metal that reacts violently with water; chlorine is a toxic green gas. Bonded together as $\\ce{NaCl}$ they make table salt, which you sprinkle on food. Hydrogen and oxygen are both gases that support an explosion; $\\ce{H2O}$ puts out fires.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'Water is made of hydrogen and oxygen, so water is a mixture of hydrogen and oxygen.',
      answer: false,
      explanation: 'Water is a **compound**: the hydrogen and oxygen atoms are chemically bonded in a fixed 2 : 1 ratio, and water\'s properties (liquid at room temperature, puts out fires) are completely different from those of hydrogen and oxygen gas. A *mixture* of the two gases would have a variable ratio, could be separated physically, and would still behave like hydrogen and oxygen (dangerously: a spark would make it explode).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Mixtures, and a flowchart for classifying matter',
      blocks: [
        {
          type: 'p',
          text: 'A [[mixture]] is two or more substances physically combined, **not** bonded. Its composition can vary (coffee can be weak or strong), each component keeps its own properties (salt water still tastes salty), and the components can be separated by physical means such as filtering, evaporating or distilling.',
        },
        {
          type: 'list',
          items: [
            'A [[chem-homogeneous-mixture]] has the same composition throughout; you cannot see separate parts, even under a microscope. Examples: air, salt water, gasoline, brass (copper and zinc). A homogeneous mixture is also called a [[chemical-solution|solution]], and solutions do not have to be liquids.',
            'A [[chem-heterogeneous-mixture]] has regions with different compositions that you can (at least in principle) see. Examples: sand in water, granite, salad dressing, smoke.',
          ],
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 372" xmlns="http://www.w3.org/2000/svg"><rect x="190" y="9" width="120" height="34" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="250" y="31.6" text-anchor="middle" style="font-size:16px;font-weight:600">Matter</text><rect x="115" y="68" width="270" height="40" rx="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><text x="250" y="84.55" text-anchor="middle" style="font-size:13px">Can it be separated by</text><text x="250" y="100.55" text-anchor="middle" style="font-size:13px">physical means?</text><line x1="250.0" y1="43.0" x2="250.0" y2="60.0" stroke="currentColor" stroke-width="1.5"/><polygon points="250.0,67.0 253.5,60.0 246.5,60.0" fill="currentColor"/><rect x="60" y="143" width="130" height="34" rx="8" fill="none" class="s-orange" stroke-width="1.5"/><text x="125" y="165.25" text-anchor="middle" style="font-size:15px;font-weight:600">Mixture</text><rect x="300" y="143" width="150" height="34" rx="8" fill="none" class="s-blue" stroke-width="1.5"/><text x="375" y="165.25" text-anchor="middle" style="font-size:15px;font-weight:600">Pure substance</text><line x1="180.0" y1="108.0" x2="145.3" y2="137.5" stroke="currentColor" stroke-width="1.5"/><polygon points="140.0,142.0 147.6,140.1 143.1,134.8" fill="currentColor"/><line x1="320.0" y1="108.0" x2="354.7" y2="137.5" stroke="currentColor" stroke-width="1.5"/><polygon points="360.0,142.0 356.9,134.8 352.4,140.1" fill="currentColor"/><text x="146" y="122" text-anchor="middle" class="t-gray" style="font-size:13px">yes</text><text x="356" y="122" text-anchor="middle" class="t-gray" style="font-size:13px">no</text><rect x="50" y="204" width="150" height="40" rx="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><text x="125" y="220.55" text-anchor="middle" style="font-size:13px">Same composition</text><text x="125" y="236.55" text-anchor="middle" style="font-size:13px">throughout?</text><rect x="295" y="204" width="160" height="40" rx="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><text x="375" y="220.55" text-anchor="middle" style="font-size:13px">Can a chemical change</text><text x="375" y="236.55" text-anchor="middle" style="font-size:13px">break it down?</text><line x1="125.0" y1="177.0" x2="125.0" y2="196.0" stroke="currentColor" stroke-width="1.5"/><polygon points="125.0,203.0 128.5,196.0 121.5,196.0" fill="currentColor"/><line x1="375.0" y1="177.0" x2="375.0" y2="196.0" stroke="currentColor" stroke-width="1.5"/><polygon points="375.0,203.0 378.5,196.0 371.5,196.0" fill="currentColor"/><line x1="103.0" y1="245.0" x2="67.8" y2="268.1" stroke="currentColor" stroke-width="1.5"/><polygon points="62.0,272.0 69.8,271.1 65.9,265.2" fill="currentColor"/><text x="73.94" y="258" text-anchor="middle" class="t-gray" style="font-size:13px">yes</text><rect x="4" y="274" width="116" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="62" y="292.55" text-anchor="middle" style="font-size:13px;font-weight:600">Homogeneous</text><text x="62" y="308.55" text-anchor="middle" style="font-size:13px;font-weight:600">mixture</text><text x="62" y="338" text-anchor="middle" class="t-gray" style="font-size:12px">air, salt water,</text><text x="62" y="354" text-anchor="middle" class="t-gray" style="font-size:12px">brass, gasoline</text><line x1="147.1" y1="245.0" x2="182.2" y2="268.1" stroke="currentColor" stroke-width="1.5"/><polygon points="188.0,272.0 184.1,265.2 180.2,271.1" fill="currentColor"/><text x="176.06" y="258" text-anchor="middle" class="t-gray" style="font-size:13px">no</text><rect x="130" y="274" width="116" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="188" y="292.55" text-anchor="middle" style="font-size:13px;font-weight:600">Heterogeneous</text><text x="188" y="308.55" text-anchor="middle" style="font-size:13px;font-weight:600">mixture</text><text x="188" y="338" text-anchor="middle" class="t-gray" style="font-size:12px">sand in water,</text><text x="188" y="354" text-anchor="middle" class="t-gray" style="font-size:12px">granite, smoke</text><line x1="352.9" y1="245.0" x2="317.8" y2="268.1" stroke="currentColor" stroke-width="1.5"/><polygon points="312.0,272.0 319.8,271.1 315.9,265.2" fill="currentColor"/><text x="323.94" y="258" text-anchor="middle" class="t-gray" style="font-size:13px">yes</text><rect x="254" y="274" width="116" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="312" y="300.55" text-anchor="middle" style="font-size:13px;font-weight:600">Compound</text><text x="312" y="338" text-anchor="middle" class="t-gray" style="font-size:12px">H₂O, NaCl,</text><text x="312" y="354" text-anchor="middle" class="t-gray" style="font-size:12px">CO₂, sugar</text><line x1="397.1" y1="245.0" x2="432.2" y2="268.1" stroke="currentColor" stroke-width="1.5"/><polygon points="438.0,272.0 434.1,265.2 430.2,271.1" fill="currentColor"/><text x="426.06" y="258" text-anchor="middle" class="t-gray" style="font-size:13px">no</text><rect x="380" y="274" width="116" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="438" y="300.55" text-anchor="middle" style="font-size:13px;font-weight:600">Element</text><text x="438" y="338" text-anchor="middle" class="t-gray" style="font-size:12px">Fe, Cu, He,</text><text x="438" y="354" text-anchor="middle" class="t-gray" style="font-size:12px">O₂, N₂</text></svg>',
          alt: 'Flowchart. Matter: can it be separated by physical means? Yes leads to Mixture; no leads to Pure substance. Mixture: same composition throughout? Yes: homogeneous mixture such as air, salt water, brass, gasoline. No: heterogeneous mixture such as sand in water, granite, smoke. Pure substance: can a chemical change break it down? Yes: compound such as H2O, NaCl, CO2, sugar. No: element such as Fe, Cu, He, O2, N2.',
          caption: 'One yes/no question at each level sorts any sample into one of four boxes. The first question is about **physical** separation; the second about **chemical** breakdown.',
        },
        {
          type: 'derivation',
          title: 'Classify seawater',
          steps: [
            { tex: '\\text{Separable by physical means?}\\ \\Rightarrow\\ \\text{yes}', why: 'Boil seawater away and the salt is left behind. Evaporation is a physical process, so seawater is a **mixture**.' },
            { tex: '\\text{Same composition throughout?}\\ \\Rightarrow\\ \\text{yes}', why: 'Filtered seawater looks identical everywhere: the dissolved salt is spread evenly as individual ions, far too small to see.' },
            { tex: '\\Rightarrow\\ \\text{homogeneous mixture (a solution)}', why: 'Mixture plus uniform composition puts it in the homogeneous box. Seawater with sand stirred into it would be heterogeneous.' },
          ],
          result: 'Seawater is a homogeneous mixture, also called a solution.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Bonded versus bagged',
          text: 'A compound is like a welded steel frame: the parts are joined, the result has new properties, and you need a torch (a chemical reaction) to take it apart. A mixture is like a toolbag: everything is in one place, you can add more of anything, and you take the pieces out by hand (physical separation).',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'fill',
      prompt: 'Classify each sample using the flowchart.',
      template: 'Copper wire: ___. Carbon dioxide ($\\ce{CO2}$): ___. Clean, dry air: ___. Oil-and-vinegar salad dressing: ___.',
      blanks: [
        { answers: ['element'] },
        { answers: ['compound'] },
        { answers: ['homogeneous mixture'] },
        { answers: ['heterogeneous mixture'] },
      ],
      wordBank: ['element', 'compound', 'homogeneous mixture', 'heterogeneous mixture', 'chemical change'],
      explanation: 'Copper is one kind of atom, so it is an element. $\\ce{CO2}$ is carbon and oxygen bonded in a fixed 1 : 2 ratio, so it is a compound. Air is mostly $\\ce{N2}$ and $\\ce{O2}$ with no bonds between them, evenly spread, so it is a homogeneous mixture. Salad dressing separates into visible layers, so it is heterogeneous.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Physical and chemical change',
      blocks: [
        {
          type: 'p',
          text: 'A [[chem-physical-property]] can be observed or measured **without** changing what the substance is: color, density, melting point, boiling point, hardness, electrical conductivity, solubility. A [[chem-chemical-property]] describes how a substance **can change into different substances**: flammability, reactivity with acids, the tendency of iron to rust.',
        },
        {
          type: 'p',
          text: 'Changes follow the same split. In a [[physical-change]] the substance keeps its identity: melting, boiling, dissolving, cutting, bending. In a [[chemical-change]] (a chemical reaction) atoms rearrange into **new substances** with new properties: burning, rusting, cooking, digesting, a battery discharging.',
        },
        {
          type: 'compare',
          left: {
            title: 'Physical: boiling water',
            tone: 'neutral',
            tex: ['\\ce{H2O(l) -> H2O(g)}'],
            text: 'Still $\\ce{H2O}$ molecules on both sides, just farther apart. Cool the steam and you get the same liquid back.',
          },
          right: {
            title: 'Chemical: splitting water',
            tone: 'neutral',
            tex: ['\\ce{2H2O(l) -> 2H2(g) + O2(g)}'],
            text: 'Passing electricity through water (electrolysis) makes two new substances, hydrogen and oxygen gas, with completely different properties.',
          },
        },
        {
          type: 'heading',
          text: 'Evidence that a chemical change has happened',
        },
        {
          type: 'list',
          items: [
            'A **gas** forms (bubbles) when no boiling is going on: baking soda in vinegar.',
            'A **color change** that is not just mixing two colors: a cut apple browning, steel rusting.',
            'A **precipitate**: two clear solutions mix and a solid appears.',
            'An **energy change**: heat, light or sound released (burning) or absorbed (a cold pack).',
            'A new **odor**: spoiled food, burnt toast.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Evidence is a clue, not a proof',
          text: 'Boiling makes bubbles; dissolving some salts makes the water noticeably colder; mixing paints changes color. None of these makes a new substance. The real test is **identity**: is there a substance afterwards that was not there before? Dissolving salt in water passes the clue test (the salt "disappears") but fails the identity test: evaporate the water and you get the same salt back. Dissolving is physical.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Both kinds at work in decontamination',
          text: 'Cleaning up a hazardous chemical uses both ideas. Rinsing it off with soap and water is a physical change: the substance is moved, not destroyed, so the rinse water is now contaminated. Reactive decontaminants such as bleach solutions cause a chemical change, turning the hazard into different, far less harmful substances.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Which of these is a **chemical** change?',
      options: [
        { text: 'Ice cubes melting in a drink', why: 'Melting only changes the state: solid $\\ce{H2O}$ becomes liquid $\\ce{H2O}$. Same molecules, so it is physical.' },
        { text: 'Sugar dissolving in coffee', why: 'The sugar molecules spread out among the water molecules but stay sugar. Evaporate the coffee and the sugar is still there. Physical.' },
        { text: 'A steel can rusting in the rain', correct: true, why: 'Iron reacts with oxygen and water to form iron oxides, a new substance: flaky, reddish-brown and not magnetic like steel. New substance, so chemical.' },
        { text: 'Water boiling to make steam', why: 'Bubbles appear, but they are bubbles of water vapor: $\\ce{H2O(l) -> H2O(g)}$. A gas forming is only evidence of a reaction when it is a *new* gas.' },
      ],
      explanation: 'Ask the identity question: is a new substance present afterwards? Only rusting produces one (iron oxide). Melting, dissolving and boiling rearrange the *same* molecules, which is why they can be reversed by simple physical means.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Conservation of mass: atoms are rearranged, never lost',
      blocks: [
        {
          type: 'p',
          text: 'In the 1770s and 1780s Antoine Lavoisier weighed reactions carried out in **sealed** vessels and found the total mass never changed. This became one of the founding principles of chemistry.',
        },
        {
          type: 'theorem',
          name: 'Law of conservation of mass',
          tex: '\\text{total mass of reactants} = \\text{total mass of products}',
          text: 'In a chemical reaction matter is neither created nor destroyed. See [[conservation-of-mass]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why mass is conserved',
          text: 'A chemical reaction only **rearranges** atoms: bonds break and new bonds form, but every atom that goes in comes out, still the same element with the same mass. Same atoms in, same atoms out, so the same total mass. (The tiny mass equivalent of the energy released is far too small to measure in chemical reactions. Nuclear reactions are a different story, outside this course.)',
        },
        {
          type: 'p',
          text: 'Magnesium ribbon burns with a brilliant white flame, reacting with oxygen from the air: $\\ce{2Mg + O2 -> 2MgO}$. The white powder left behind weighs **more** than the ribbon did. Has mass been created? No: the powder includes oxygen atoms pulled from the air.',
        },
        {
          type: 'derivation',
          title: '$2.43$ g of magnesium burns to give $4.03$ g of magnesium oxide. How much oxygen reacted?',
          steps: [
            { tex: 'm_{\\text{reactants}} = m_{\\text{products}}', why: 'Conservation of mass.' },
            { tex: 'm_{\\ce{Mg}} + m_{\\ce{O2}} = m_{\\ce{MgO}}', why: 'Magnesium and oxygen are the only reactants; magnesium oxide is the only product.' },
            { tex: '2.43\\ \\text{g} + m_{\\ce{O2}} = 4.03\\ \\text{g}', why: 'Substitute the measured masses.' },
            { tex: 'm_{\\ce{O2}} = 4.03\\ \\text{g} - 2.43\\ \\text{g} = 1.60\\ \\text{g}', why: 'Subtract $2.43$ g from both sides: a one-step linear equation.' },
          ],
          result: '$1.60$ g of oxygen from the air combined with the magnesium. The "gain" in mass is that oxygen.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Open containers fool you',
          text: 'A log burns down to a small pile of ash and seems to lose mass; steel wool rusts and seems to gain mass. Both obey the law. The log\'s carbon and hydrogen leave as carbon dioxide and water vapor; the steel takes in oxygen from the air. Weigh **everything**, gases included, and the totals match.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Burning fuel makes heavier exhaust',
          text: 'Jet fuel is mostly carbon and hydrogen. Treating it as repeating $\\ce{CH2}$ units, burning 1 kg of it produces about $3.1$ kg of $\\ce{CO2}$ and $1.3$ kg of water vapor: more than 4 kg of products. The extra $3.4$ kg is oxygen taken from the air. Unit 4 turns this bookkeeping into balanced equations and stoichiometry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Burning $12.0$ g of pure carbon (charcoal) in oxygen produces $44.0$ g of carbon dioxide: $\\ce{C + O2 -> CO2}$. How many grams of oxygen were consumed? Give 3 significant figures.',
      hint: 'Mass in equals mass out: $m_{\\ce{C}} + m_{\\ce{O2}} = m_{\\ce{CO2}}$.',
      answer: '44.0 - 12.0',
      answerTex: '32.0\\ \\text{g}',
      tolerance: 0.05,
      unit: 'g',
      label: '$m_{\\ce{O2}} =$',
      explanation: 'Conservation of mass gives $12.0\\ \\text{g} + m_{\\ce{O2}} = 44.0\\ \\text{g}$, so $m_{\\ce{O2}} = 32.0$ g. The charcoal seems to vanish when it burns, but every carbon atom leaves in a $\\ce{CO2}$ molecule, and the product is heavier than the charcoal because it also contains the oxygen.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Changes of state and the heating curve',
      blocks: [
        {
          type: 'p',
          text: 'Changes of state are physical changes, and each one has a name. Going "up" (toward gas) absorbs energy; going "down" releases it.',
        },
        {
          type: 'table',
          headers: ['Change', 'From → to', 'Energy', 'Example'],
          rows: [
            ['Melting / freezing', 'solid ⇄ liquid', 'absorbed / released', 'ice in a drink; water in an ice tray'],
            ['Vaporization / condensation', 'liquid ⇄ gas', 'absorbed / released', 'boiling water; dew on grass'],
            ['Sublimation / deposition', 'solid ⇄ gas', 'absorbed / released', 'dry ice "smoking"; frost on a windshield'],
          ],
        },
        {
          type: 'p',
          text: 'Now heat a sample of ice, starting at $-20$ °C, at a **steady rate** and record its temperature. The graph of temperature against heat added is a [[chem-heating-curve]]. It is not a straight line: it climbs, goes flat, climbs, goes flat, and climbs again.',
        },
        {
          type: 'graph',
          x: [-2, 70],
          y: [-30, 130],
          xStep: 10,
          yStep: 20,
          segments: [
            { from: [0, -20], to: ['0.0418m', 0], color: 'blue' },
            { from: ['0.0418m', 0], to: ['0.3758m', 0], color: 'red', label: 'melting' },
            { from: ['0.3758m', 0], to: ['0.7942m', 100], color: 'blue' },
            { from: ['0.7942m', 100], to: ['3.0512m', 100], color: 'red', label: 'boiling' },
            { from: ['3.0512m', 100], to: ['3.0914m', 120], color: 'blue' },
          ],
          sliders: [{ name: 'm', min: 5, max: 22, step: 1, value: 18, label: 'mass of water $m$ (g)' }],
          readouts: [
            { label: 'melting plateau (kJ) $=$', expr: '0.334m', digits: 3 },
            { label: 'boiling plateau (kJ) $=$', expr: '2.257m', digits: 3 },
          ],
          caption: 'Temperature (°C, vertical) against heat added (kJ, horizontal) for water heated from $-20$ °C to $120$ °C. Blue: one state warming up. Red: a change of state at constant temperature. Drag $m$: the plateaus get longer with more water, but they stay at $0$ °C and $100$ °C.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Ice warms', text: 'Added energy makes the molecules vibrate harder, so temperature rises.' },
            { title: 'Melting plateau at 0 °C', text: 'Energy goes into loosening the attractions that hold molecules in the crystal, not into making them move faster. Temperature stays put until all the ice is gone.' },
            { title: 'Liquid warms', text: 'All liquid now; added energy speeds the molecules up again, from $0$ °C to $100$ °C.' },
            { title: 'Boiling plateau at 100 °C', text: 'Energy goes into pulling molecules completely apart from their neighbors to form a gas. Temperature stays at $100$ °C until all the liquid is gone.' },
            { title: 'Steam warms', text: 'Only gas is left, so its temperature climbs again.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the plateaus are flat, and why boiling\'s is so long',
          text: 'Temperature tracks the *kinetic* energy of particles. During a change of state the added energy is spent fighting the attractions between particles (it is stored as *potential* energy), so the particles do not speed up and the thermometer does not move. Melting only loosens the particles (they still touch), but boiling must separate them completely, which takes far more energy: $2257$ J per gram versus $334$ J per gram, nearly seven times as much.',
        },
        {
          type: 'derivation',
          title: 'Energy to melt $18.0$ g of ice at $0$ °C (melting takes $334$ J per gram)',
          steps: [
            { tex: 'q = m \\times 334\\ \\tfrac{\\text{J}}{\\text{g}}', why: 'Every gram needs the same $334$ J, so the energy is proportional to the mass: the "$334$ J per gram" is a rate you multiply by.' },
            { tex: 'q = 18.0\\ \\text{g} \\times 334\\ \\tfrac{\\text{J}}{\\text{g}}', why: 'Substitute the mass.' },
            { tex: 'q = 6012\\ \\text{J} \\approx 6.01 \\times 10^{3}\\ \\text{J}', why: 'The grams cancel, leaving joules. Rounded to 3 significant figures (next lesson explains why).' },
          ],
          result: 'About $6.01$ kJ, which is exactly the length of the melting plateau when $m = 18$ g on the graph.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Altitude moves the boiling plateau',
          text: 'The plateau temperatures assume normal sea-level pressure. Boiling happens when molecules can escape against the air pressure above the liquid; at $3{,}000$ m (about $10{,}000$ ft) the pressure is lower and water boils at roughly $90$ °C, which is why food takes longer to cook in the mountains.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Melting ice at $0$ °C takes $334$ J per gram. How much energy, in joules, is needed to melt $25.0$ g of ice that is already at $0$ °C? Give 3 significant figures.',
      hint: 'Multiply the mass by the energy per gram; the grams cancel.',
      answer: '25.0 * 334',
      answerTex: '8.35 \\times 10^{3}\\ \\text{J}',
      tolerance: 5,
      unit: 'J',
      label: '$q =$',
      explanation: '$q = 25.0\\ \\text{g} \\times 334\\ \\frac{\\text{J}}{\\text{g}} = 8350\\ \\text{J}$, or $8.35 \\times 10^{3}$ J (8.35 kJ). On the heating curve this is the length of the melting plateau for a 25 g sample. Notice the temperature does not change at all while this energy is absorbed.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A student explains the first part of water\'s heating curve. Tap the first statement that is wrong.',
      lines: [
        'Heat flows into the sample at a steady rate the whole time.',
        'From $-20$ °C to $0$ °C the ice warms because the added energy makes its molecules vibrate faster.',
        'At $0$ °C the temperature stops rising, so the ice has stopped absorbing energy.',
        'Once all the ice has melted, the liquid warms from $0$ °C toward $100$ °C.',
      ],
      errorLines: [3],
      explanation: 'Line 3 confuses temperature with energy. Heat is still flowing in at the same rate during the plateau; it is being used to break the attractions holding the crystal together instead of speeding the molecules up. That is why the plateau has a length on the energy axis ($334$ J for every gram melted) even though the temperature is flat.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'On water\'s heating curve, why is the boiling plateau so much longer than the melting plateau?',
      options: [
        { text: 'Water boils at a higher temperature, and reaching higher temperatures always takes longer', why: 'The plateau length measures energy spent *at* a constant temperature, not energy spent getting there. The climb from $0$ °C to $100$ °C is a separate segment.' },
        { text: 'Vaporizing must pull the molecules completely apart, which takes far more energy than loosening them in melting', correct: true, why: 'In a liquid the molecules still touch and attract; in a gas they are far apart. Separating them fully takes about $2257$ J/g compared with $334$ J/g to melt.' },
        { text: 'The liquid has more mass than the ice it came from', why: 'Melting is a physical change and mass is conserved: $18$ g of ice becomes exactly $18$ g of water.' },
        { text: 'Heat escapes from the pot while the water boils', why: 'An idealized heating curve assumes all the heat goes into the sample. The long plateau is real physics, not lost heat.' },
      ],
      explanation: 'Both plateaus are energy spent overcoming attractions between molecules. Melting only frees the molecules to slide past each other; boiling has to separate them completely. That difference, about seven to one for water, is why the red boiling segment on the graph dwarfs the melting segment.',
    },
  ],
  takeaways: [
    'Chemistry studies what matter is made of and how it changes; matter is anything with mass and volume.',
    'Solids, liquids and gases are the same particles with different spacing and motion: packed and ordered, packed and sliding, or far apart and fast.',
    'Pure substances (elements and compounds) have fixed composition; mixtures vary and can be separated physically, and they are homogeneous or heterogeneous.',
    'A physical change keeps the substance\'s identity; a chemical change makes new substances. Gas, color change, precipitate, energy and odor are clues, not proof.',
    'Mass is conserved in every chemical reaction because atoms are only rearranged.',
    'On a heating curve the temperature stays flat during a change of state because the energy goes into overcoming attractions, not into faster motion.',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 1: Essential Ideas',
      url: 'https://openstax.org/books/chemistry-2e/pages/1-introduction',
      source: 'openstax',
      note: 'The free college textbook this course tracks; sections 1.2 and 1.3 cover phases, classification and properties of matter.',
    },
    {
      title: 'PhET Interactive Simulations',
      url: 'https://phet.colorado.edu/',
      source: 'other',
      note: 'Search for the "States of Matter" simulation: heat and cool particles and watch them melt, boil and condense.',
    },
    {
      title: 'Wikipedia — Conservation of mass',
      url: 'https://en.wikipedia.org/wiki/Conservation_of_mass',
      source: 'wikipedia',
      note: 'History of the law from Lavoisier\'s sealed-vessel experiments, plus how it fits with relativity.',
    },
    {
      title: 'Khan Academy — Chemistry',
      url: 'https://www.khanacademy.org/science/chemistry',
      source: 'khan',
      note: 'Short videos on states of matter, mixtures and physical versus chemical change.',
    },
  ],
};
