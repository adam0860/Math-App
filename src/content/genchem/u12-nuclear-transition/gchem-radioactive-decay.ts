import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'gchem-radioactive-decay',
  title: 'Radioactivity and Nuclear Equations',
  summary: 'Why some nuclei are unstable, the five ways they decay, how to balance nuclear equations and predict the decay mode, and how radiation is shielded, detected and measured.',
  minutes: 20,
  objectives: [
    'Explain nuclear stability as a balance between the strong nuclear force and proton–proton repulsion, and locate a nuclide relative to the band of stability',
    'Write balanced nuclear equations for alpha, beta-minus, positron emission, electron capture and gamma emission by conserving mass number and charge',
    'Predict the most likely decay mode of a nuclide from its neutron-to-proton ratio',
    'Count the alpha and beta decays in a decay series such as uranium-238 → lead-206',
    'Compare the penetrating and ionizing power of α, β and γ radiation and choose suitable shielding',
    'Use the becquerel, gray and sievert correctly, and convert an absorbed dose into an equivalent dose',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Inside the nucleus: a tug of war',
      blocks: [
        {
          type: 'p',
          text: 'Every reaction in this course so far has rearranged **electrons**. The [[chem-nucleus|nucleus]] came along for the ride, unchanged, which is why a carbon atom is still carbon at the end of a combustion. Nuclear chemistry is the exception: the nucleus itself changes, and one element turns into another.',
        },
        {
          type: 'p',
          text: 'Quick recap from Foundations. A nucleus contains $Z$ [[proton|protons]] (the [[atomic-number|atomic number]]) and $N$ [[neutron|neutrons]]; together they are called **nucleons**, and their total is the [[mass-number|mass number]] $A = Z + N$. A particular nucleus is a [[gchem-nuclide|nuclide]], written with $A$ on top and $Z$ below:',
        },
        {
          type: 'math',
          tex: '\\ce{^{A}_{Z}X} \\qquad \\ce{^{238}_{92}U}:\\ N = 238 - 92 = 146',
          caption: '[[isotope|Isotopes]] of an element share $Z$ and differ in $N$. Names like "uranium-238" give only $A$, because the symbol already fixes $Z$.',
        },
        {
          type: 'p',
          text: 'Why does a nucleus hold together at all? Its protons are packed within about $10^{-15}$ m of each other and repel ferociously by [[chem-coulombs-law|Coulomb\'s law]]. The glue is the [[gchem-strong-nuclear-force|strong nuclear force]], an attraction between **all** nucleons (proton–proton, proton–neutron, neutron–neutron) that is about a hundred times stronger than the electric repulsion at that distance, but fades to almost nothing beyond 2 or 3 nucleon diameters.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why neutrons are needed',
          text: 'The strong force is short-ranged, so each nucleon only grips its immediate neighbors. The Coulomb repulsion is long-ranged, so **every** proton pushes on **every** other proton. In a big nucleus, repulsion grows roughly like $Z^2$ while the strong-force glue grows only like $A$. Neutrons add glue without adding charge, so heavier nuclei need a growing surplus of them to stay together. When the balance is off, the nucleus is unstable and eventually changes: that is [[gchem-radioactivity|radioactivity]].',
        },
        {
          type: 'p',
          text: 'Nuclear energies are enormous on the chemical scale. Breaking a chemical bond takes a few electron-volts (eV); nuclear changes release or absorb **millions** of electron-volts (MeV) per nucleus. That factor of about a million is why a nuclear fuel pellet the size of a fingertip can match a ton of coal, and why the next lesson needs $E = mc^2$.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'An accident with a photographic plate',
          text: 'In 1896 Henri Becquerel left uranium salts on a wrapped photographic plate in a drawer and found it fogged: the uranium emitted invisible, penetrating radiation all by itself. Marie and Pierre Curie then isolated two far more active elements, polonium and radium, and Marie Curie coined the word *radioactivity*. Ernest Rutherford sorted the radiation into types by how easily each was stopped, and named them alpha, beta and gamma after the first three Greek letters.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Stable light nuclei such as $\\ce{^{12}_{6}C}$ and $\\ce{^{16}_{8}O}$ have about one neutron per proton, but stable $\\ce{^{208}_{82}Pb}$ has about 1.5. What is the best explanation?',
      options: [
        { text: 'Neutrons are heavier than protons, so big nuclei need more of them to have enough mass', why: 'Mass is not what holds a nucleus together, and the neutron is only 0.14% heavier than the proton. The issue is force, not mass.' },
        { text: 'Proton–proton repulsion acts between all pairs of protons and grows faster than the short-range strong force, so extra neutrons are needed to add attraction without adding charge', correct: true, why: 'Coulomb repulsion grows roughly like $Z^2$ because every proton repels every other; the strong force acts only between neighbors. Neutrons contribute strong-force attraction and no repulsion.' },
        { text: 'The strong force acts only between neutrons, so neutrons are the only thing holding a nucleus together', why: 'The strong force acts between all nucleons: proton–proton, proton–neutron and neutron–neutron. Protons are glued in too.' },
        { text: 'Heavy atoms have more electrons, and each electron must be balanced by a neutron', why: 'Electrons are balanced by **protons** (equal numbers in a neutral atom). Neutrons are uncharged and have nothing to do with the electron count.' },
      ],
      explanation: 'Think of two forces with different reach. The strong force is a short-range glue between neighboring nucleons; the electric repulsion is long-range and acts between every pair of protons. Adding protons increases repulsion faster than it increases glue, so heavy nuclei need a neutron surplus: $N/Z$ rises from 1.0 for light elements to about 1.5 for lead.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The band of stability',
      blocks: [
        {
          type: 'p',
          text: 'About 250 nuclides are stable, and over 3000 radioactive ones are known. Plot every stable nuclide as a point with $Z$ across and $N$ up, and they fall in a narrow curved strip, the [[gchem-band-of-stability|band of stability]] (also called the belt or valley of stability).',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 470 420" xmlns="http://www.w3.org/2000/svg"><line x1="58.0" y1="372" x2="58.0" y2="24" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="58.0" y="389" text-anchor="middle" font-size="12">0</text><line x1="134.4" y1="372" x2="134.4" y2="24" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="134.4" y="389" text-anchor="middle" font-size="12">20</text><line x1="210.8" y1="372" x2="210.8" y2="24" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="210.8" y="389" text-anchor="middle" font-size="12">40</text><line x1="287.2" y1="372" x2="287.2" y2="24" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="287.2" y="389" text-anchor="middle" font-size="12">60</text><line x1="363.6" y1="372" x2="363.6" y2="24" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="363.6" y="389" text-anchor="middle" font-size="12">80</text><line x1="440.0" y1="372" x2="440.0" y2="24" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="440.0" y="389" text-anchor="middle" font-size="12">100</text><line x1="58" y1="372.0" x2="440" y2="372.0" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="50" y="376.0" text-anchor="end" font-size="12">0</text><line x1="58" y1="302.4" x2="440" y2="302.4" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="50" y="306.4" text-anchor="end" font-size="12">30</text><line x1="58" y1="232.8" x2="440" y2="232.8" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="50" y="236.8" text-anchor="end" font-size="12">60</text><line x1="58" y1="163.2" x2="440" y2="163.2" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="50" y="167.2" text-anchor="end" font-size="12">90</text><line x1="58" y1="93.6" x2="440" y2="93.6" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="50" y="97.6" text-anchor="end" font-size="12">120</text><line x1="58" y1="24.0" x2="440" y2="24.0" stroke="currentColor" class="s-gray" stroke-width="0.6" stroke-opacity="0.45"/><text x="50" y="28.0" text-anchor="end" font-size="12">150</text><line x1="58" y1="372" x2="440" y2="372" stroke="currentColor" stroke-width="1.5"/><line x1="58" y1="372" x2="58" y2="24" stroke="currentColor" stroke-width="1.5"/><text x="249" y="414" text-anchor="middle" font-size="13">protons, Z</text><text x="16" y="198" text-anchor="middle" font-size="13" transform="rotate(-90 16 198)">neutrons, N</text><line x1="58.0" y1="372.0" x2="440.0" y2="140.0" stroke="currentColor" class="s-gray" stroke-width="1.5" stroke-dasharray="6 4"/><text x="339.4" y="223.6" text-anchor="middle" font-size="12" class="t-gray">N = Z</text><polygon points="61.8,367.2 67.1,363.7 72.4,360.1 77.7,356.4 83.1,352.7 88.4,348.8 93.7,344.9 99.0,341.0 104.3,336.9 109.6,332.8 114.9,328.7 120.2,324.5 125.5,320.2 130.8,315.9 136.1,311.6 141.5,307.1 146.8,302.7 152.1,298.1 157.4,293.6 162.7,288.9 168.0,284.3 173.3,279.5 178.6,274.8 183.9,270.0 189.2,265.1 194.5,260.2 199.9,255.2 205.2,250.2 210.5,245.1 215.8,240.0 221.1,234.9 226.4,229.7 231.7,224.4 237.0,219.1 242.3,213.8 247.6,208.4 252.9,203.0 258.3,197.5 263.6,192.0 268.9,186.5 274.2,180.8 279.5,175.2 284.8,169.5 290.1,163.8 295.4,158.0 300.7,152.2 306.0,146.3 311.4,140.4 316.7,134.4 322.0,128.4 327.3,122.4 332.6,116.3 337.9,110.1 343.2,104.0 348.5,97.7 353.8,91.5 359.1,85.2 364.4,78.8 369.8,72.4 375.1,66.0 375.1,87.9 369.8,94.1 364.4,100.2 359.1,106.3 353.8,112.3 348.5,118.3 343.2,124.2 337.9,130.1 332.6,135.9 327.3,141.7 322.0,147.5 316.7,153.2 311.4,158.9 306.0,164.5 300.7,170.1 295.4,175.6 290.1,181.1 284.8,186.5 279.5,191.9 274.2,197.3 268.9,202.6 263.6,207.9 258.3,213.1 252.9,218.3 247.6,223.4 242.3,228.5 237.0,233.6 231.7,238.6 226.4,243.7 221.1,248.9 215.8,254.0 210.5,259.0 205.2,264.1 199.9,269.1 194.5,274.0 189.2,278.9 183.9,283.7 178.6,288.5 173.3,293.2 168.0,297.9 162.7,302.6 157.4,307.2 152.1,311.7 146.8,316.2 141.5,320.6 136.1,325.0 130.8,328.2 125.5,331.5 120.2,334.7 114.9,337.9 109.6,341.1 104.3,344.3 99.0,347.6 93.7,350.8 88.4,354.0 83.1,357.2 77.7,360.5 72.4,363.7 67.1,366.9 61.8,370.1" class="f-blue s-blue" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/><polyline points="375.1,77.9 380.2,71.9 385.2,65.8 390.3,59.6 395.4,53.4 400.5,47.2 405.6,40.9 410.7,34.6 415.8,28.3 420.9,21.9" fill="none" stroke="currentColor" class="s-blue" stroke-width="2" stroke-dasharray="3 3"/><line x1="375.1" y1="372" x2="375.1" y2="24.0" stroke="currentColor" class="s-red" stroke-width="1.2" stroke-dasharray="4 3"/><text x="371.1" y="38.0" text-anchor="end" font-size="12" class="t-red">Z = 83 (Bi)</text><circle cx="134.4" cy="325.6" r="3.6" fill="currentColor" class=""/><text x="142.4" y="339.6" text-anchor="start" font-size="12">⁴⁰Ca</text><circle cx="157.3" cy="302.4" r="3.6" fill="currentColor" class=""/><text x="149.3" y="298.4" text-anchor="end" font-size="12">⁵⁶Fe</text><circle cx="249.0" cy="209.6" r="3.6" fill="currentColor" class=""/><text x="241.0" y="205.6" text-anchor="end" font-size="12">¹²⁰Sn</text><circle cx="371.2" cy="79.7" r="3.6" fill="currentColor" class=""/><text x="363.2" y="75.7" text-anchor="end" font-size="12">²⁰⁸Pb</text><circle cx="409.4" cy="33.3" r="3.6" fill="currentColor" class="f-red"/><text x="416.4" y="49.3" text-anchor="start" font-size="12">²³⁸U</text><text x="134.4" y="98.2" text-anchor="middle" font-size="12.5" class="t-purple">above the band:</text><text x="134.4" y="114.2" text-anchor="middle" font-size="12.5" class="t-purple">too many neutrons → β⁻</text><text x="275.7" y="293.1" text-anchor="middle" font-size="12.5" class="t-orange">below the band:</text><text x="275.7" y="309.1" text-anchor="middle" font-size="12.5" class="t-orange">too many protons → β⁺ or EC</text><text x="405.6" y="228.2" text-anchor="middle" font-size="12.5" class="t-red">Z &gt; 83:</text><text x="405.6" y="244.2" text-anchor="middle" font-size="12.5" class="t-red">α decay</text></svg>`,
          alt: 'Graph of neutron number N against proton number Z from 0 to 100. A shaded blue band starts along the dashed N equals Z line for light elements and curves upward above it, reaching about N equals 126 at Z equals 82. Calcium-40, iron-56, tin-120 and lead-208 lie in the band. A red dashed vertical line at Z equals 83 marks the end of stable nuclei; uranium-238 lies beyond it. Region above the band is labeled too many neutrons, beta minus; region below is labeled too many protons, beta plus or electron capture; beyond Z equals 83 is labeled alpha decay.',
          caption: 'The shaded band is where stable nuclides lie (drawn smoothly; real stable nuclides scatter within it). It hugs $N = Z$ up to calcium, then bends upward as heavier nuclei need extra neutrons. Nothing beyond bismuth ($Z = 83$) is stable.',
        },
        {
          type: 'p',
          text: 'A useful single number is the **neutron-to-proton ratio**, $N/Z$ (often called the n/p ratio). The stable value climbs steadily with $Z$:',
        },
        {
          type: 'derivation',
          title: 'n/p ratios of three stable nuclides',
          steps: [
            { tex: '\\ce{^{40}_{20}Ca}: \\quad \\frac{N}{Z} = \\frac{40 - 20}{20} = 1.00', why: '$N = A - Z$. Up to $Z = 20$ the stable ratio is close to 1.' },
            { tex: '\\ce{^{56}_{26}Fe}: \\quad \\frac{N}{Z} = \\frac{56 - 26}{26} = 1.15', why: 'Iron, in the middle of the table, already needs 15% more neutrons than protons.' },
            { tex: '\\ce{^{208}_{82}Pb}: \\quad \\frac{N}{Z} = \\frac{208 - 82}{82} = 1.54', why: 'Lead-208, the heaviest stable nuclide with an even count of both, needs about 1.5 neutrons per proton.' },
          ],
          result: 'Stable $N/Z$ rises from about 1.0 (light) through 1.15 (iron) to about 1.5 (lead). A nuclide far from the value for its $Z$ is radioactive.',
        },
        {
          type: 'list',
          items: [
            '**Above the band** ($N/Z$ too high): too many neutrons. The fix is to turn a neutron into a proton.',
            '**Below the band** ($N/Z$ too low): too many protons. The fix is to turn a proton into a neutron.',
            '**Beyond $Z = 83$**: no amount of neutrons helps; the nucleus is simply too big. The fix is to shed mass and charge in chunks.',
          ],
        },
        {
          type: 'deepdive',
          title: 'Magic numbers and the even–odd rule',
          blocks: [
            {
              type: 'p',
              text: 'Stability is not perfectly smooth. Nuclei with 2, 8, 20, 28, 50, 82 or 126 protons or neutrons are unusually stable: these **magic numbers** are filled nuclear shells, the nuclear analogue of noble-gas electron configurations. Tin ($Z = 50$) has ten stable isotopes, the most of any element, and $\\ce{^{208}_{82}Pb}$ ($Z = 82$, $N = 126$) is "doubly magic".',
            },
            {
              type: 'p',
              text: 'Pairing matters too. About 150 stable nuclides have even $Z$ and even $N$, while only four (deuterium, lithium-6, boron-10 and nitrogen-14) have odd $Z$ and odd $N$. Nucleons, like electrons, are most comfortable in pairs.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Alpha and beta decay, and balancing nuclear equations',
      blocks: [
        {
          type: 'p',
          text: 'A nuclear equation is balanced when two totals match on both sides: the **mass numbers** (top numbers) and the **atomic numbers**, which here mean charges (bottom numbers). Chemical equations conserve atoms of each element; nuclear equations do not (elements change), but they always conserve nucleons and charge.',
        },
        {
          type: 'theorem',
          name: 'Balancing rule for nuclear equations',
          text: 'Sum of $A$ on the left $=$ sum of $A$ on the right, and sum of $Z$ on the left $=$ sum of $Z$ on the right. Then the $Z$ of the unknown fixes which element it is.',
        },
        {
          type: 'definition',
          term: 'Alpha decay',
          text: 'In [[gchem-alpha-decay|alpha decay]] the nucleus ejects an **alpha particle**, a helium-4 nucleus ($\\ce{^{4}_{2}He}$, also written $\\ce{^{4}_{2}\\alpha}$): two protons and two neutrons. $A$ drops by 4 and $Z$ by 2. It is the typical decay of very heavy nuclei.',
        },
        {
          type: 'derivation',
          title: 'Americium-241 (the source in ionization smoke detectors) emits an alpha particle',
          steps: [
            { tex: '\\ce{^{241}_{95}Am -> ^{A}_{Z}X + ^{4}_{2}He}', why: 'Write what you know; the daughter nuclide is the unknown.' },
            { tex: '241 = A + 4 \\implies A = 237', why: 'Mass numbers balance: nucleons are neither created nor destroyed.' },
            { tex: '95 = Z + 2 \\implies Z = 93', why: 'Atomic numbers (charges) balance.' },
            { tex: '\\ce{^{241}_{95}Am -> ^{237}_{93}Np + ^{4}_{2}He}', why: '$Z = 93$ is neptunium. Check: $237 + 4 = 241$ and $93 + 2 = 95$.' },
          ],
        },
        {
          type: 'definition',
          term: 'Beta-minus decay',
          text: 'In [[gchem-beta-decay|beta-minus decay]] a neutron inside the nucleus turns into a proton and an electron, and the electron is shot out as a **beta particle**, $\\ce{^{0}_{-1}e}$ (also $\\ce{^{0}_{-1}\\beta}$): $\\ce{^{1}_{0}n -> ^{1}_{1}p + ^{0}_{-1}e}$. $A$ is unchanged and $Z$ rises by 1.',
        },
        {
          type: 'math',
          tex: '\\ce{^{14}_{6}C -> ^{14}_{7}N + ^{0}_{-1}e}',
          caption: 'Carbon-14 has 8 neutrons and only 6 protons, too many neutrons for so light a nucleus, so it converts one neutron to a proton. Check: $14 = 14 + 0$ and $6 = 7 + (-1)$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The beta electron was never "in" the nucleus',
          text: 'There are no electrons inside nuclei. The beta particle is **created** at the moment of decay, when a neutron becomes a proton. Its "atomic number" of $-1$ is just its charge, written so that charge balances. (A nearly massless, neutral particle called an antineutrino is also emitted; textbook equations leave it out because it has $A = 0$ and $Z = 0$.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: 'Complete both nuclear equations by tapping the right particle or nuclide.',
      template: 'Radon-222 (a gas that seeps from uranium-bearing rock): $\\ce{^{222}_{86}Rn -> ^{218}_{84}Po}$ + ___\n\nPhosphorus-32 (a medical and research tracer): $\\ce{^{32}_{15}P ->}$ ___ + $\\ce{^{0}_{-1}e}$',
      blanks: [{ answers: ['$\\ce{^{4}_{2}He}$'] }, { answers: ['$\\ce{^{32}_{16}S}$'] }],
      wordBank: ['$\\ce{^{4}_{2}He}$', '$\\ce{^{32}_{16}S}$', '$\\ce{^{0}_{-1}e}$', '$\\ce{^{32}_{14}Si}$', '$\\ce{^{28}_{13}Al}$', '$\\ce{^{1}_{0}n}$'],
      hint: 'For each blank, subtract: missing $A$ = left total − right total, and the same for $Z$.',
      explanation: 'Radon: missing $A = 222 - 218 = 4$, missing $Z = 86 - 84 = 2$, which is $\\ce{^{4}_{2}He}$, an alpha particle. Phosphorus: the product must have $A = 32 - 0 = 32$ and $Z = 15 - (-1) = 16$, which is sulfur-32. A common slip is $Z = 14$ (silicon), from subtracting instead of solving $15 = Z + (-1)$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Positron emission, electron capture and gamma rays',
      blocks: [
        {
          type: 'p',
          text: 'Beta-minus fixes a neutron surplus. Nuclei with a **proton** surplus need the reverse, turning a proton into a neutron, and they have two ways to do it.',
        },
        {
          type: 'definition',
          term: 'Positron emission (beta-plus decay)',
          text: 'In [[gchem-positron-emission|positron emission]] a proton becomes a neutron and ejects a **positron**, $\\ce{^{0}_{+1}e}$, the antimatter twin of the electron (same mass, opposite charge): $\\ce{^{1}_{1}p -> ^{1}_{0}n + ^{0}_{+1}e}$. $A$ is unchanged and $Z$ drops by 1.',
        },
        {
          type: 'math',
          tex: '\\ce{^{18}_{9}F -> ^{18}_{8}O + ^{0}_{+1}e}',
          caption: 'Fluorine-18 is the workhorse isotope of PET scans (next lesson). Check: $18 = 18 + 0$ and $9 = 8 + 1$.',
        },
        {
          type: 'definition',
          term: 'Electron capture',
          text: 'In [[gchem-electron-capture|electron capture]] (EC) the nucleus absorbs one of its own inner-shell ($1s$) electrons, which combines with a proton to make a neutron: $\\ce{^{1}_{1}p + ^{0}_{-1}e -> ^{1}_{0}n}$. The electron appears on the **left** of the equation. $A$ is unchanged and $Z$ drops by 1, exactly as in positron emission. An X-ray follows as outer electrons drop into the vacancy.',
        },
        {
          type: 'math',
          tex: '\\ce{^{40}_{19}K + ^{0}_{-1}e -> ^{40}_{18}Ar}',
          caption: 'About 11% of potassium-40 decays this way, and the argon it leaves trapped in rocks is a geological clock (next lesson).',
        },
        {
          type: 'definition',
          term: 'Gamma emission',
          text: 'A nucleus left in an excited state relaxes by emitting a [[gchem-gamma-ray|gamma ray]], $\\ce{^{0}_{0}\\gamma}$: a very high-energy photon. Neither $A$ nor $Z$ changes. Gamma rays usually accompany alpha and beta decay, and are often left out of equations. A long-lived excited state is labeled "m" (metastable).',
        },
        {
          type: 'math',
          tex: '\\ce{^{99m}_{43}Tc -> ^{99}_{43}Tc + ^{0}_{0}\\gamma}',
          caption: 'Technetium-99m, the most used medical isotope, is almost a pure gamma emitter: ideal for imaging.',
        },
        {
          type: 'table',
          headers: ['Mode', 'Particle', 'Change in $A$', 'Change in $Z$', 'Effect on $N/Z$', 'Typical nuclides'],
          rows: [
            ['alpha', '$\\ce{^{4}_{2}He}$ emitted', '$-4$', '$-2$', 'slight rise', 'heavy, $Z > 83$'],
            ['beta-minus', '$\\ce{^{0}_{-1}e}$ emitted', '$0$', '$+1$', 'falls', 'neutron-rich'],
            ['positron', '$\\ce{^{0}_{+1}e}$ emitted', '$0$', '$-1$', 'rises', 'proton-rich, light'],
            ['electron capture', '$\\ce{^{0}_{-1}e}$ absorbed', '$0$', '$-1$', 'rises', 'proton-rich, heavier'],
            ['gamma', '$\\ce{^{0}_{0}\\gamma}$ emitted', '$0$', '$0$', 'none', 'excited nuclei'],
          ],
          caption: 'Five ways a nucleus changes. Only alpha changes the mass number.',
        },
        {
          type: 'deepdive',
          title: 'Transmutation on demand',
          blocks: [
            {
              type: 'p',
              text: 'Nuclei can also be changed by hitting them with particles. In 1919 Rutherford made the first artificial [[gchem-nuclear-transmutation|nuclear transmutation]], turning nitrogen into oxygen with alpha particles:',
            },
            { type: 'math', tex: '\\ce{^{14}_{7}N + ^{4}_{2}He -> ^{17}_{8}O + ^{1}_{1}H}' },
            {
              type: 'p',
              text: 'Every element beyond uranium (neptunium, plutonium, americium and the rest) was first made this way, in reactors or particle accelerators. The same balancing rule applies, with the projectile added on the left.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'Iodine-131, used to treat thyroid disease, decays by beta-minus emission. A student works out the product. Tap the first wrong line.',
      lines: [
        'A beta-minus particle is $\\ce{^{0}_{-1}e}$, so write $\\ce{^{131}_{53}I -> ^{A}_{Z}X + ^{0}_{-1}e}$',
        'Mass numbers: $131 = A + 0$, so $A = 131$',
        'Atomic numbers: $53 = Z + (-1)$, so $Z = 52$',
        '$Z = 52$ is tellurium, so the product is $\\ce{^{131}_{52}Te}$',
      ],
      errorLines: [3],
      explanation: 'Solving $53 = Z - 1$ gives $Z = 54$, not 52: the student subtracted the 1 instead of adding it. Sanity check with physics: beta-minus turns a neutron **into a proton**, so $Z$ must go **up** by one. The product is xenon-131: $\\ce{^{131}_{53}I -> ^{131}_{54}Xe + ^{0}_{-1}e}$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Predicting the decay mode',
      blocks: [
        {
          type: 'p',
          text: 'Every decay mode moves a nuclide **toward** the band of stability. So if you know which side of the band a nuclide is on, you can predict how it decays. You do not need to memorize the band: the periodic table already tells you where it is.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The atomic-mass shortcut',
          text: 'An element\'s average [[atomic-mass|atomic mass]] is dominated by its stable isotopes, so it marks the middle of the band for that $Z$. If a radioactive isotope\'s **mass number is larger** than the atomic mass, it has extra neutrons: expect $\\beta^-$. If it is **smaller**, it is short of neutrons: expect $\\beta^+$ or electron capture. If $Z > 83$, expect $\\alpha$.',
        },
        {
          type: 'derivation',
          title: 'Three predictions',
          steps: [
            { tex: '\\ce{^{24}_{11}Na}: \\quad 24 > 22.99 \\implies \\text{neutron-rich} \\implies \\beta^-', why: 'Sodium\'s only stable isotope is Na-23. Na-24 has one neutron too many; beta-minus turns it into a proton, giving stable $\\ce{^{24}_{12}Mg}$.' },
            { tex: '\\ce{^{22}_{11}Na}: \\quad 22 < 22.99 \\implies \\text{proton-rich} \\implies \\beta^+ \\text{ or EC}', why: 'One neutron short. Positron emission gives stable $\\ce{^{22}_{10}Ne}$. (Na-22 is a common laboratory positron source.)' },
            { tex: '\\ce{^{226}_{88}Ra}: \\quad Z = 88 > 83 \\implies \\alpha', why: 'Too heavy for any neutron count; alpha decay gives $\\ce{^{222}_{86}Rn}$.' },
          ],
          result: 'Same element, opposite predictions: the side of the band decides the mode.',
        },
        {
          type: 'p',
          text: '**Positron emission or electron capture?** Both lower $Z$ by one. Making a positron costs energy (its mass, plus the extra electron that must leave the atom), so light proton-rich nuclei with plenty of energy to spare tend to emit positrons, while heavier ones, whose $1s$ electrons sit closer to the nucleus, more often capture an electron. At this level, "$\\beta^+$ or EC" is a complete answer unless a problem gives more data.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exam questions usually give a nuclide and ask for the decay mode, then the product. Write $N$ and $Z$, compare $A$ with the atomic mass (or $N/Z$ with the band), pick the mode, then balance. Remember the extreme rule first: everything above bismuth is radioactive, and most of it decays by alpha emission.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Carbon-11 ($\\ce{^{11}_{6}C}$) is used in PET imaging. The atomic mass of carbon is 12.01. What is its most likely decay mode, and what does it become?',
      options: [
        { text: 'Beta-minus decay, giving $\\ce{^{11}_{7}N}$', why: 'Beta-minus fixes a neutron **surplus**. Carbon-11 has 5 neutrons and 6 protons, a neutron **shortage**.' },
        { text: 'Alpha decay, giving $\\ce{^{7}_{4}Be}$', why: 'Alpha decay is for very heavy nuclei ($Z > 83$). A six-proton nucleus is nowhere near that.' },
        { text: 'Positron emission (or electron capture), giving $\\ce{^{11}_{5}B}$', correct: true, why: '$A = 11 < 12.01$ and $N/Z = 5/6 = 0.83 < 1$: proton-rich. Converting a proton to a neutron gives boron-11 (5 protons, 6 neutrons), which is stable.' },
        { text: 'Gamma emission only, giving $\\ce{^{11}_{6}C}$ in a lower energy state', why: 'Gamma emission does not change $N$ or $Z$, so it cannot fix a wrong neutron-to-proton ratio.' },
      ],
      explanation: 'Carbon-11 has $N = 5$, $Z = 6$: fewer neutrons than protons, below the band. Its mass number 11 is below carbon\'s atomic mass 12.01, confirming the neutron shortage. It decays by positron emission: $\\ce{^{11}_{6}C -> ^{11}_{5}B + ^{0}_{+1}e}$. The positron is what makes it useful in PET.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Decay series: the long road from uranium to lead',
      blocks: [
        {
          type: 'p',
          text: 'One decay does not always land a nuclide in the band. Uranium-238 alpha-decays to thorium-234, which is itself radioactive, and so on, through a chain of fourteen decays called a [[gchem-decay-series|decay series]], ending at stable lead-206.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 432" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="376.79999999999995" x2="526" y2="376.79999999999995" stroke="currentColor" stroke-width="1.3"/><line x1="60" y1="376.79999999999995" x2="60" y2="9.600000000000001" stroke="currentColor" stroke-width="1.3"/><text x="108" y="392.79999999999995" text-anchor="middle" font-size="11.5">82</text><text x="108" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">Pb</text><text x="146" y="392.79999999999995" text-anchor="middle" font-size="11.5">83</text><text x="146" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">Bi</text><text x="184" y="392.79999999999995" text-anchor="middle" font-size="11.5">84</text><text x="184" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">Po</text><text x="222" y="392.79999999999995" text-anchor="middle" font-size="11.5">85</text><text x="222" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">At</text><text x="260" y="392.79999999999995" text-anchor="middle" font-size="11.5">86</text><text x="260" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">Rn</text><text x="298" y="392.79999999999995" text-anchor="middle" font-size="11.5">87</text><text x="298" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">Fr</text><text x="336" y="392.79999999999995" text-anchor="middle" font-size="11.5">88</text><text x="336" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">Ra</text><text x="374" y="392.79999999999995" text-anchor="middle" font-size="11.5">89</text><text x="374" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">Ac</text><text x="412" y="392.79999999999995" text-anchor="middle" font-size="11.5">90</text><text x="412" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">Th</text><text x="450" y="392.79999999999995" text-anchor="middle" font-size="11.5">91</text><text x="450" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">Pa</text><text x="488" y="392.79999999999995" text-anchor="middle" font-size="11.5">92</text><text x="488" y="406.79999999999995" text-anchor="middle" font-size="11" class="t-gray">U</text><text x="54" y="360.4" text-anchor="end" font-size="11.5">206</text><line x1="60" y1="356.4" x2="526" y2="356.4" stroke="currentColor" class="s-gray" stroke-width="0.5" stroke-opacity="0.35"/><text x="54" y="319.59999999999997" text-anchor="end" font-size="11.5">210</text><line x1="60" y1="315.59999999999997" x2="526" y2="315.59999999999997" stroke="currentColor" class="s-gray" stroke-width="0.5" stroke-opacity="0.35"/><text x="54" y="278.79999999999995" text-anchor="end" font-size="11.5">214</text><line x1="60" y1="274.79999999999995" x2="526" y2="274.79999999999995" stroke="currentColor" class="s-gray" stroke-width="0.5" stroke-opacity="0.35"/><text x="54" y="238.0" text-anchor="end" font-size="11.5">218</text><line x1="60" y1="234.0" x2="526" y2="234.0" stroke="currentColor" class="s-gray" stroke-width="0.5" stroke-opacity="0.35"/><text x="54" y="197.2" text-anchor="end" font-size="11.5">222</text><line x1="60" y1="193.2" x2="526" y2="193.2" stroke="currentColor" class="s-gray" stroke-width="0.5" stroke-opacity="0.35"/><text x="54" y="156.39999999999998" text-anchor="end" font-size="11.5">226</text><line x1="60" y1="152.39999999999998" x2="526" y2="152.39999999999998" stroke="currentColor" class="s-gray" stroke-width="0.5" stroke-opacity="0.35"/><text x="54" y="115.6" text-anchor="end" font-size="11.5">230</text><line x1="60" y1="111.6" x2="526" y2="111.6" stroke="currentColor" class="s-gray" stroke-width="0.5" stroke-opacity="0.35"/><text x="54" y="74.8" text-anchor="end" font-size="11.5">234</text><line x1="60" y1="70.8" x2="526" y2="70.8" stroke="currentColor" class="s-gray" stroke-width="0.5" stroke-opacity="0.35"/><text x="54" y="34.0" text-anchor="end" font-size="11.5">238</text><line x1="60" y1="30.0" x2="526" y2="30.0" stroke="currentColor" class="s-gray" stroke-width="0.5" stroke-opacity="0.35"/><text x="298.0" y="422.79999999999995" text-anchor="middle" font-size="12.5">atomic number, Z</text><text x="18" y="193.2" text-anchor="middle" font-size="12.5" transform="rotate(-90 18 193.2)">mass number, A</text><line x1="480.1" y1="34.3" x2="420.8" y2="66.1" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="420.8,66.1 425.3,59.7 428.6,65.8" fill="currentColor" class="f-red"/><line x1="421.0" y1="70.8" x2="440.0" y2="70.8" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="440.0,70.8 433.0,74.3 433.0,67.3" fill="currentColor" class="f-blue"/><line x1="459.0" y1="70.8" x2="478.0" y2="70.8" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="478.0,70.8 471.0,74.3 471.0,67.3" fill="currentColor" class="f-blue"/><line x1="480.1" y1="75.1" x2="420.8" y2="106.9" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="420.8,106.9 425.3,100.5 428.6,106.6" fill="currentColor" class="f-red"/><line x1="404.1" y1="115.9" x2="344.8" y2="147.7" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="344.8,147.7 349.3,141.3 352.6,147.4" fill="currentColor" class="f-red"/><line x1="328.1" y1="156.7" x2="268.8" y2="188.5" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="268.8,188.5 273.3,182.1 276.6,188.2" fill="currentColor" class="f-red"/><line x1="252.1" y1="197.5" x2="192.8" y2="229.3" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="192.8,229.3 197.3,222.9 200.6,229.0" fill="currentColor" class="f-red"/><line x1="176.1" y1="238.3" x2="116.8" y2="270.1" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="116.8,270.1 121.3,263.7 124.6,269.8" fill="currentColor" class="f-red"/><line x1="117.0" y1="274.8" x2="136.0" y2="274.8" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="136.0,274.8 129.0,278.3 129.0,271.3" fill="currentColor" class="f-blue"/><line x1="155.0" y1="274.8" x2="174.0" y2="274.8" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="174.0,274.8 167.0,278.3 167.0,271.3" fill="currentColor" class="f-blue"/><line x1="176.1" y1="279.1" x2="116.8" y2="310.9" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="116.8,310.9 121.3,304.5 124.6,310.6" fill="currentColor" class="f-red"/><line x1="117.0" y1="315.6" x2="136.0" y2="315.6" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="136.0,315.6 129.0,319.1 129.0,312.1" fill="currentColor" class="f-blue"/><line x1="155.0" y1="315.6" x2="174.0" y2="315.6" stroke="currentColor" class="s-blue" stroke-width="2"/><polygon points="174.0,315.6 167.0,319.1 167.0,312.1" fill="currentColor" class="f-blue"/><line x1="176.1" y1="319.9" x2="116.8" y2="351.7" stroke="currentColor" class="s-red" stroke-width="2"/><polygon points="116.8,351.7 121.3,345.3 124.6,351.4" fill="currentColor" class="f-red"/><circle cx="488" cy="30.0" r="5" fill="currentColor" class="f-orange"/><text x="500" y="34.0" text-anchor="start" font-size="11.5">²³⁸U</text><circle cx="412" cy="70.8" r="5" fill="currentColor" class=""/><text x="402" y="74.8" text-anchor="end" font-size="11.5">²³⁴Th</text><circle cx="450" cy="70.8" r="5" fill="currentColor" class=""/><text x="450" y="60.8" text-anchor="middle" font-size="11.5">²³⁴Pa</text><circle cx="488" cy="70.8" r="5" fill="currentColor" class=""/><text x="500" y="74.8" text-anchor="start" font-size="11.5">²³⁴U</text><circle cx="412" cy="111.6" r="5" fill="currentColor" class=""/><text x="402" y="115.6" text-anchor="end" font-size="11.5">²³⁰Th</text><circle cx="336" cy="152.39999999999998" r="5" fill="currentColor" class=""/><text x="326" y="156.39999999999998" text-anchor="end" font-size="11.5">²²⁶Ra</text><circle cx="260" cy="193.2" r="5" fill="currentColor" class=""/><text x="250" y="197.2" text-anchor="end" font-size="11.5">²²²Rn</text><circle cx="184" cy="234.0" r="5" fill="currentColor" class=""/><text x="194" y="238.0" text-anchor="start" font-size="11.5">²¹⁸Po</text><circle cx="108" cy="274.79999999999995" r="5" fill="currentColor" class=""/><text x="98" y="278.79999999999995" text-anchor="end" font-size="11.5">²¹⁴Pb</text><circle cx="146" cy="274.79999999999995" r="5" fill="currentColor" class=""/><text x="146" y="264.79999999999995" text-anchor="middle" font-size="11.5">²¹⁴Bi</text><circle cx="184" cy="274.79999999999995" r="5" fill="currentColor" class=""/><text x="194" y="278.79999999999995" text-anchor="start" font-size="11.5">²¹⁴Po</text><circle cx="108" cy="315.59999999999997" r="5" fill="currentColor" class=""/><text x="98" y="319.59999999999997" text-anchor="end" font-size="11.5">²¹⁰Pb</text><circle cx="146" cy="315.59999999999997" r="5" fill="currentColor" class=""/><text x="146" y="305.59999999999997" text-anchor="middle" font-size="11.5">²¹⁰Bi</text><circle cx="184" cy="315.59999999999997" r="5" fill="currentColor" class=""/><text x="194" y="319.59999999999997" text-anchor="start" font-size="11.5">²¹⁰Po</text><circle cx="108" cy="356.4" r="5" fill="currentColor" class="f-green"/><text x="98" y="360.4" text-anchor="end" font-size="11.5">²⁰⁶Pb</text><line x1="330" y1="300" x2="360" y2="300" stroke="currentColor" class="s-red" stroke-width="2"/><text x="368" y="304" font-size="12" class="t-red">α: Z − 2, A − 4</text><line x1="330" y1="322" x2="360" y2="322" stroke="currentColor" class="s-blue" stroke-width="2"/><text x="368" y="326" font-size="12" class="t-blue">β⁻: Z + 1, A same</text></svg>`,
          alt: 'Plot of mass number A from 206 to 238 against atomic number Z from 82 to 92 showing the uranium-238 decay series. Red diagonal arrows for alpha decays go down and to the left; blue horizontal arrows for beta-minus decays go to the right. The chain runs U-238, Th-234, Pa-234, U-234, Th-230, Ra-226, Rn-222, Po-218, Pb-214, Bi-214, Po-214, Pb-210, Bi-210, Po-210 and ends at stable Pb-206.',
          caption: 'Each alpha (red) moves two steps left and four mass units down; each beta-minus (blue) moves one step right at the same mass. Alpha decays raise $N/Z$, and the beta decays bring it back toward the band.',
        },
        {
          type: 'p',
          text: 'You can count how many of each decay occur without tracing the chain, because only alpha decays change $A$.',
        },
        {
          type: 'derivation',
          title: 'How many α and β⁻ decays take U-238 to Pb-206?',
          steps: [
            { tex: '\\Delta A = 238 - 206 = 32', why: 'Only alpha emission changes the mass number.' },
            { tex: 'n_\\alpha = \\frac{32}{4} = 8', why: 'Each alpha removes 4 mass units.' },
            { tex: 'Z \\text{ after 8 alphas} = 92 - 8 \\times 2 = 76', why: 'Each alpha also lowers $Z$ by 2.' },
            { tex: 'n_\\beta = 82 - 76 = 6', why: 'Lead has $Z = 82$; each beta-minus raises $Z$ by 1, so six are needed to climb from 76 to 82.' },
          ],
          result: 'Overall: $\\ce{^{238}_{92}U -> ^{206}_{82}Pb + 8\\,^{4}_{2}He + 6\\,^{0}_{-1}e}$. Check: $206 + 32 + 0 = 238$ and $82 + 16 - 6 = 92$.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Radon in the basement',
          text: 'Radon-222 sits in the middle of this chain. Because it is a noble gas it escapes from uranium-bearing soil and rock and can accumulate in basements and enclosed structures. Its short-lived alpha-emitting daughters (polonium-218 and polonium-214) lodge in the lungs. Radon is the largest source of natural radiation dose for most people and the second leading cause of lung cancer after smoking, which is why radon testing is common in real-estate inspections and on military installations.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'The thorium series starts at $\\ce{^{232}_{90}Th}$ and ends at stable $\\ce{^{208}_{82}Pb}$, through alpha and beta-minus decays only. How many **beta-minus** decays occur in the whole series?',
      hint: 'First count alphas from the change in $A$. Then see where those alphas leave $Z$, and how far it is to 82.',
      label: '$n_\\beta =$',
      answer: '4',
      explanation: '$\\Delta A = 232 - 208 = 24$, so there are $24 / 4 = 6$ alpha decays. They lower $Z$ by $6 \\times 2 = 12$, from 90 to 78. Lead has $Z = 82$, so $82 - 78 = 4$ beta-minus decays bring $Z$ back up. Check: $\\ce{^{232}_{90}Th -> ^{208}_{82}Pb + 6\\,^{4}_{2}He + 4\\,^{0}_{-1}e}$ balances ($208 + 24 = 232$; $82 + 12 - 4 = 90$).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Penetrating power and shielding',
      blocks: [
        {
          type: 'p',
          text: 'All three radiations are [[gchem-ionizing-radiation|ionizing]]: they carry enough energy to knock electrons out of the atoms and molecules they hit. How far they travel depends on how quickly they lose that energy, and there is a trade-off: the radiation that ionizes most intensely along its path is also the one stopped soonest.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="40" width="46" height="150" rx="8" fill="currentColor" class="f-gray" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="37" y="212" text-anchor="middle" font-size="12.5">source</text><rect x="150" y="34" width="5" height="166" fill="currentColor" class="f-gray" fill-opacity="0.5"/><text x="152" y="24" text-anchor="middle" font-size="12.5">paper</text><rect x="262" y="34" width="14" height="166" fill="currentColor" class="f-teal" fill-opacity="0.55"/><text x="269" y="24" text-anchor="middle" font-size="12.5">aluminum, ~5 mm</text><rect x="380" y="34" width="34" height="166" fill="currentColor" class="f-gray" fill-opacity="0.9"/><text x="397" y="24" text-anchor="middle" font-size="12.5">lead, several cm</text><text x="80" y="60" text-anchor="middle" font-size="16" class="t-red">α</text><line x1="66" y1="70" x2="144" y2="70" stroke="currentColor" class="s-red" stroke-width="3"/><polyline points="135,63 146,70 135,77" fill="none" stroke="currentColor" class="s-red" stroke-width="3"/><line x1="148" y1="70" x2="143.5" y2="77.8" stroke="currentColor" class="s-red" stroke-width="1.3"/><line x1="148" y1="70" x2="140.2" y2="74.5" stroke="currentColor" class="s-red" stroke-width="1.3"/><line x1="148" y1="70" x2="139.0" y2="70.0" stroke="currentColor" class="s-red" stroke-width="1.3"/><line x1="148" y1="70" x2="140.2" y2="65.5" stroke="currentColor" class="s-red" stroke-width="1.3"/><line x1="148" y1="70" x2="143.5" y2="62.2" stroke="currentColor" class="s-red" stroke-width="1.3"/><text x="80" y="115" text-anchor="middle" font-size="16" class="t-blue">β</text><line x1="66" y1="125" x2="256" y2="125" stroke="currentColor" class="s-blue" stroke-width="3"/><polyline points="247,118 258,125 247,132" fill="none" stroke="currentColor" class="s-blue" stroke-width="3"/><line x1="260" y1="125" x2="255.5" y2="132.8" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="260" y1="125" x2="252.2" y2="129.5" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="260" y1="125" x2="251.0" y2="125.0" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="260" y1="125" x2="252.2" y2="120.5" stroke="currentColor" class="s-blue" stroke-width="1.3"/><line x1="260" y1="125" x2="255.5" y2="117.2" stroke="currentColor" class="s-blue" stroke-width="1.3"/><text x="80" y="170" text-anchor="middle" font-size="16" class="t-purple">γ</text><polyline points="66.0,180.0 68.0,181.9 70.0,183.6 72.0,184.7 74.0,185.0 76.0,184.5 78.0,183.4 80.0,181.7 82.0,179.7 84.0,177.8 86.0,176.2 88.0,175.2 90.0,175.0 92.0,175.6 94.0,176.8 96.0,178.6 98.0,180.6 100.0,182.5 102.0,184.0 104.0,184.8 106.0,184.9 108.0,184.3 110.0,182.9 112.0,181.1 114.0,179.1 116.0,177.3 118.0,175.9 120.0,175.1 122.0,175.1 124.0,175.9 126.0,177.3 128.0,179.2 130.0,181.2 132.0,183.0 134.0,184.3 136.0,185.0 138.0,184.8 140.0,183.9 142.0,182.4 144.0,180.5 146.0,178.6 148.0,176.8 150.0,175.6 152.0,175.0 154.0,175.3 156.0,176.2 158.0,177.8 160.0,179.8 162.0,181.7 164.0,183.4 166.0,184.6 168.0,185.0 170.0,184.6 172.0,183.6 174.0,181.9 176.0,180.0 178.0,178.0 180.0,176.4 182.0,175.3 184.0,175.0 186.0,175.5 188.0,176.7 190.0,178.4 192.0,180.3 194.0,182.3 196.0,183.8 198.0,184.8 200.0,185.0 202.0,184.4 204.0,183.1 206.0,181.4 208.0,179.4 210.0,177.5 212.0,176.0 214.0,175.1 216.0,175.1 218.0,175.8 220.0,177.1 222.0,178.9 224.0,180.9 226.0,182.8 228.0,184.2 230.0,184.9 232.0,184.9 234.0,184.1 236.0,182.6 238.0,180.8 240.0,178.8 242.0,177.0 244.0,175.7 246.0,175.0 248.0,175.2 250.0,176.1 252.0,177.6 254.0,179.5 256.0,181.5 258.0,183.2 260.0,184.5 262.0,185.0 264.0,184.7 266.0,183.7 268.0,182.1 270.0,180.2 272.0,178.2 274.0,176.6 276.0,175.4 278.0,175.0 280.0,175.4 282.0,176.5 284.0,178.1 286.0,180.1 288.0,182.0 290.0,183.6 292.0,184.7 294.0,185.0 296.0,184.5 298.0,183.3 300.0,181.6 302.0,179.6 304.0,177.7 306.0,176.2 308.0,175.2 310.0,175.0 312.0,175.6 314.0,176.9 316.0,178.7 318.0,180.7 320.0,182.5 322.0,184.0 324.0,184.9 326.0,184.9 328.0,184.2 330.0,182.9 332.0,181.0 334.0,179.0 336.0,177.2 338.0,175.8 340.0,175.1 342.0,175.1 344.0,175.9 346.0,177.4 348.0,179.3 350.0,181.2 352.0,183.0 354.0,184.3 356.0,185.0 358.0,184.8 360.0,183.9 362.0,182.4 364.0,180.5 366.0,178.5 368.0,176.7 370.0,175.5 372.0,175.0 374.0,175.3 376.0,176.3 378.0,177.9" fill="none" stroke="currentColor" class="s-purple" stroke-width="2.5"/><polyline points="416.0,180.0 418.0,181.9 420.0,183.6 422.0,184.7 424.0,185.0 426.0,184.5 428.0,183.4 430.0,181.7 432.0,179.7 434.0,177.8 436.0,176.2 438.0,175.2 440.0,175.0 442.0,175.6 444.0,176.8 446.0,178.6 448.0,180.6 450.0,182.5 452.0,184.0 454.0,184.8 456.0,184.9 458.0,184.3 460.0,182.9 462.0,181.1 464.0,179.1 466.0,177.3 468.0,175.9 470.0,175.1" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.5" stroke-dasharray="4 2"/><polyline points="462,173 474,180 462,187" fill="none" stroke="currentColor" class="s-purple" stroke-width="1.5"/><text x="443" y="168" text-anchor="middle" font-size="11.5" class="t-purple">weakened</text><text x="250" y="222" text-anchor="middle" font-size="12.5" class="t-gray">ionizing power: α &gt; β &gt; γ    ·    penetrating power: γ &gt; β &gt; α</text></svg>`,
          alt: 'A radioactive source on the left emits three kinds of radiation toward three barriers. The alpha arrow stops at a sheet of paper. The beta arrow passes the paper and stops at a few millimeters of aluminum. The gamma wave passes both and continues, weakened, through several centimeters of lead.',
          caption: 'Alpha is stopped by paper (or the dead outer layer of skin), beta by a few millimeters of aluminum or plastic, while gamma is only **reduced** by dense materials such as lead and concrete.',
        },
        {
          type: 'table',
          headers: ['Radiation', 'What it is', 'Charge', 'Range in air', 'Stopped by'],
          rows: [
            ['alpha', 'He-4 nucleus, heavy', '$+2$', 'a few cm', 'paper, skin'],
            ['beta', 'fast electron (or positron)', '$-1$ ($+1$)', 'a few meters', 'a few mm of aluminum or plastic'],
            ['gamma', 'high-energy photon', '$0$', 'hundreds of meters', 'reduced by cm of lead, m of concrete'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the heavy, charged alpha particle is stopped first',
          text: 'A charged particle tugs on every electron it passes. A slow, heavy, doubly charged alpha particle pulls hard and lingers, so it rips out tens of thousands of electrons per centimeter of air and spends its energy within a few centimeters. A light, singly charged beta particle interacts less often per centimeter, and an uncharged gamma photon interacts only when it happens to hit an electron or nucleus. So penetration runs $\\gamma > \\beta > \\alpha$ and ionization density runs the other way.',
        },
        {
          type: 'p',
          text: 'Gamma rays are not stopped at a definite depth; each layer of shielding absorbs the same **fraction**. The thickness that halves the intensity is the half-value layer (HVL), and the transmitted fraction is $\\left(\\tfrac{1}{2}\\right)^{x/\\text{HVL}}$: exponential decay in space. Drag the slider (for cobalt-60 gamma rays in lead the HVL is about 1.2 cm).',
        },
        {
          type: 'graph',
          x: [0, 12],
          y: [0, 110],
          xStep: 1,
          yStep: 10,
          functions: [{ expr: '100*0.5^(x/h)', label: 'gamma intensity transmitted (%)', color: 'purple' }],
          points: [
            { x: 'h', y: 50, label: '1 HVL', color: 'purple' },
            { x: '2h', y: 25, label: '2 HVL', color: 'purple' },
            { x: '3h', y: 12.5, label: '3 HVL', color: 'purple' },
          ],
          sliders: [{ name: 'h', min: 0.5, max: 4, step: 0.1, value: 1.2, label: 'half-value layer (cm)' }],
          readouts: [{ label: 'thickness for 1% transmission (cm) $=$', expr: 'h*ln(100)/ln(2)', digits: 3 }],
          caption: 'Horizontal axis: shield thickness in cm. Each extra HVL halves what gets through, so cutting gamma intensity to 1% takes $\\log_2 100 \\approx 6.6$ half-value layers. A shield can never make it exactly zero.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Time, distance, shielding',
          text: 'Radiation protection, in the lab or in a field CBRN setting, rests on three levers: **less time** near the source (dose is proportional to time), **more distance** (from a small source, intensity falls as $1/r^2$, so doubling your distance quarters the dose rate), and **shielding** matched to the radiation type. And keep alpha and beta emitters **outside** your body: no eating, drinking or smoking where contamination is possible.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Because alpha particles are stopped by a sheet of paper or the outer layer of skin, alpha emitters are harmless even if they are inhaled or swallowed.',
      answer: false,
      explanation: 'Outside the body, an alpha source is indeed a minor hazard: dead skin stops the particles. Inside the body there is no dead layer. Every alpha particle deposits all its energy in a few hundredths of a millimeter of living tissue, the densest ionization of any common radiation. That is why inhaled radon daughters cause lung cancer and why ingested polonium-210 is deadly in microgram amounts. Alpha emitters are an **internal** hazard; gamma emitters are mainly an **external** one.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Detecting radiation and measuring dose',
      blocks: [
        {
          type: 'p',
          text: 'Because radiation ionizes, detectors look for the ions or the light it leaves behind. A **Geiger–Müller counter** is a gas-filled tube at high voltage: each particle that enters ionizes some gas, triggering an avalanche of charge that registers as a click. A **scintillation counter** uses a crystal (often sodium iodide) that gives a flash of light for each gamma ray, with brightness proportional to energy, so it can identify the isotope. Radiation workers and service members in CBRN roles wear **dosimeters** that record their accumulated dose.',
        },
        {
          type: 'p',
          text: 'Three different quantities get confused constantly. Keep them separate by asking what each one measures:',
        },
        {
          type: 'table',
          headers: ['Quantity', 'SI unit', 'Definition', 'Older unit'],
          rows: [
            ['activity of a source', '[[gchem-becquerel|becquerel]] (Bq)', '1 Bq = 1 decay per second', 'curie: 1 Ci $= 3.7 \\times 10^{10}$ Bq'],
            ['absorbed dose', '[[gchem-gray|gray]] (Gy)', '1 Gy = 1 J of radiation energy absorbed per kg of matter', 'rad: 1 Gy = 100 rad'],
            ['equivalent (or effective) dose', '[[gchem-sievert|sievert]] (Sv)', 'absorbed dose $\\times$ radiation weighting factor', 'rem: 1 Sv = 100 rem'],
          ],
          caption: 'The becquerel describes the **source**; the gray and sievert describe what happens to the **body**.',
        },
        {
          type: 'p',
          text: 'The same energy does different amounts of biological damage depending on how densely it is deposited. The **radiation weighting factor** $w_R$ accounts for this: 1 for gamma rays, X-rays and beta particles, and 20 for alpha particles (neutrons fall in between, depending on energy). So $H = w_R \\times D$, with $H$ in sieverts and $D$ in grays.',
        },
        {
          type: 'derivation',
          title: 'A 70 kg person absorbs 0.014 J from gamma rays',
          steps: [
            { tex: 'D = \\frac{0.014\\ \\text{J}}{70\\ \\text{kg}} = 2.0 \\times 10^{-4}\\ \\text{J/kg} = 2.0 \\times 10^{-4}\\ \\text{Gy}', why: 'Absorbed dose is energy per kilogram of tissue; 1 J/kg is 1 Gy by definition.' },
            { tex: 'H = w_R D = 1 \\times 2.0 \\times 10^{-4}\\ \\text{Gy} = 2.0 \\times 10^{-4}\\ \\text{Sv}', why: 'Gamma rays have $w_R = 1$, so grays and sieverts are numerically equal here.' },
            { tex: '= 0.20\\ \\text{mSv}', why: '$1\\ \\text{Sv} = 1000\\ \\text{mSv}$. This is about two chest X-rays.' },
          ],
          result: 'If the same 0.014 J came from an internal alpha emitter, $w_R = 20$ would make it 4.0 mSv: twenty times the biological effect for the same energy.',
        },
        {
          type: 'table',
          headers: ['Exposure', 'Approximate effective dose'],
          rows: [
            ['cross-country airline flight', '0.04 mSv'],
            ['chest X-ray', '0.02–0.1 mSv'],
            ['natural background, US average, per year (most of it from radon)', 'about 3 mSv'],
            ['CT scan of chest or abdomen', 'about 5–10 mSv'],
            ['US annual limit for radiation workers', '50 mSv'],
            ['acute radiation sickness begins (whole body, received at once)', 'about 1000 mSv (1 Sv)'],
          ],
          caption: 'Representative values from US radiation-protection agencies; individual exposures vary widely.',
        },
        {
          type: 'p',
          text: '**Biological effects.** Ionizing radiation breaks bonds directly and, more often, ionizes water to make reactive radicals such as hydroxyl ($\\cdot\\ce{OH}$) that attack DNA. Rapidly dividing cells (bone marrow, gut lining, hair follicles, tumors) are most sensitive, which is both why radiation sickness damages those tissues and why radiation therapy works against cancer. Large doses received at once cause **deterministic** effects above a threshold (burns, radiation sickness), whose severity grows with dose. Low doses cause only **stochastic** effects: a small increase in the *probability* of cancer, roughly proportional to dose.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A 0.50 kg region of tissue absorbs $2.0 \\times 10^{-4}$ J of energy from an alpha emitter that has been inhaled. Using a radiation weighting factor of 20 for alpha particles, what is the equivalent dose in **millisieverts**? (Two significant figures.)',
      hint: 'Absorbed dose $D$ = energy ÷ mass, in Gy (J/kg). Then $H = 20 D$ in Sv, and $\\times 1000$ for mSv.',
      label: '$H =$',
      unit: 'mSv',
      answer: '2.0*10^-4/0.50*20*1000',
      answerTex: '8.0\\ \\text{mSv}',
      tolerance: 0.05,
      explanation: '$D = \\dfrac{2.0 \\times 10^{-4}\\ \\text{J}}{0.50\\ \\text{kg}} = 4.0 \\times 10^{-4}$ Gy. $H = w_R D = 20 \\times 4.0 \\times 10^{-4} = 8.0 \\times 10^{-3}$ Sv $= 8.0$ mSv. A tiny amount of energy (a ten-thousandth of a joule), but concentrated by alpha particles it equals almost three years of natural background dose to that tissue. Forgetting $w_R$ would give 0.40 mSv, twenty times too small.',
    },
  ],
  takeaways: [
    'A nucleus is held together by the short-range strong force against long-range proton repulsion; heavier nuclei need more neutrons, so the stable $N/Z$ rises from about 1.0 (light) to about 1.5 (lead), and nothing beyond bismuth ($Z = 83$) is stable.',
    'Balance a nuclear equation by matching the totals of mass numbers (top) and atomic numbers or charges (bottom); the unknown\'s $Z$ names the element.',
    'Alpha ($\\ce{^{4}_{2}He}$): $A - 4$, $Z - 2$. Beta-minus ($\\ce{^{0}_{-1}e}$ out): $Z + 1$. Positron ($\\ce{^{0}_{+1}e}$ out) and electron capture ($\\ce{^{0}_{-1}e}$ in): $Z - 1$. Gamma: no change.',
    'Predict the mode from which side of the band a nuclide sits on: mass number above the atomic mass → $\\beta^-$; below → $\\beta^+$ or EC; $Z > 83$ → $\\alpha$.',
    'In a decay series, count alphas from $\\Delta A / 4$, then betas from how far $Z$ must climb back: U-238 → Pb-206 takes 8 α and 6 β⁻.',
    'Penetration: $\\gamma > \\beta > \\alpha$; ionizing power runs the opposite way. Alpha emitters are an internal hazard, gamma an external one; protect with time, distance and shielding.',
    'Becquerel = decays per second (the source); gray = J/kg absorbed; sievert = gray × weighting factor (1 for β and γ, 20 for α).',
  ],
  reading: [
    {
      title: 'OpenStax Chemistry 2e — Chapter 21: Nuclear Chemistry',
      url: 'https://openstax.org/books/chemistry-2e/pages/21-introduction',
      source: 'openstax',
      note: 'Sections 21.1–21.3 cover nuclear structure, the band of stability, the decay modes and decay series; 21.6 covers biological effects and units.',
    },
    {
      title: 'Wikipedia — Valley of stability',
      url: 'https://en.wikipedia.org/wiki/Valley_of_stability',
      source: 'wikipedia',
      note: 'The full N–Z chart of nuclides with each decay mode color-coded, and the physics behind its shape.',
    },
    {
      title: 'Wikipedia — Decay chain',
      url: 'https://en.wikipedia.org/wiki/Decay_chain',
      source: 'wikipedia',
      note: 'All four natural decay series (uranium, actinium, thorium, neptunium) with half-lives for every step.',
    },
    {
      title: 'Wikipedia — Sievert',
      url: 'https://en.wikipedia.org/wiki/Sievert',
      source: 'wikipedia',
      note: 'How absorbed, equivalent and effective dose relate, with the weighting factors and typical dose examples.',
    },
  ],
};
