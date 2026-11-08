import type { GlossaryEntry } from '../types';

export const chemGlossary: GlossaryEntry[] = [
  // ------------------------------------------------------------------
  // Matter and Measurement
  // ------------------------------------------------------------------
  {
    id: 'matter',
    term: 'Matter',
    aliases: ['material', 'stuff'],
    course: 'chem',
    category: 'Matter and Measurement',
    short: 'Anything that has mass and takes up space (has volume). Chemistry is the study of matter and the changes it undergoes.',
    long:
      'Air, water, steel and your own body are matter; light, heat, sound and electric fields are not (they are forms of energy). A simple test: if it can be weighed and it occupies volume, it is matter.\n\n' +
      'Matter is classified by composition: a [[pure-substance]] (an [[element]] or a [[compound]]) has a fixed composition, while a [[mixture]] does not. It is also classified by physical state (see [[states-of-matter]]). Everything is built from [[atom|atoms]], so the properties we see on the bench come from what the particles are doing at a scale far too small to see.\n\n' +
      'Pitfall: mass is not weight. Mass measures the amount of matter (kilograms); weight is the gravitational force on it (newtons). An astronaut has the same mass on the Moon but weighs about one sixth as much. Chemists measure mass because it does not change with location.',
    see: ['pure-substance', 'mixture', 'states-of-matter', 'atom'],
  },
  {
    id: 'element',
    term: 'Element',
    aliases: ['chemical element'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'A pure substance made of only one kind of atom, meaning every atom has the same [[atomic-number]] (number of protons). Elements cannot be broken into simpler substances by chemical means.',
    long:
      'Elements are the alphabet of chemistry: 118 are known, about 90 occur naturally, and everything else is built by combining them. Each has a one- or two-letter symbol whose first letter is capitalized ($\\ce{C}$, $\\ce{Cl}$, $\\ce{Na}$ from Latin *natrium*). They are organized in the [[periodic-table]].\n\n' +
      'What makes an atom carbon is having exactly 6 protons. Change the number of neutrons and you get a different [[isotope]] of carbon; change the number of electrons and you get an [[ion]] of carbon; change the number of protons and it is no longer carbon at all.\n\n' +
      'Pitfall: some elements exist as molecules. Oxygen gas is $\\ce{O2}$, nitrogen is $\\ce{N2}$, and the seven diatomic elements ($\\ce{H2}$, $\\ce{N2}$, $\\ce{O2}$, $\\ce{F2}$, $\\ce{Cl2}$, $\\ce{Br2}$, $\\ce{I2}$) must be written that way in equations. $\\ce{O2}$ is still an element, not a compound, because only one kind of atom is present.',
    tex: '\\ce{Fe},\\quad \\ce{Cu},\\quad \\ce{O2},\\quad \\ce{S8}',
    see: ['atom', 'compound', 'atomic-number', 'periodic-table'],
  },
  {
    id: 'compound',
    term: 'Compound',
    aliases: ['chemical compound'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'A pure substance made of two or more different elements chemically combined in a fixed ratio, such as $\\ce{H2O}$ (always 2 H : 1 O by atoms).',
    long:
      'A compound is a new substance, not a blend: its properties can be completely unlike those of its elements. Sodium is a soft metal that reacts violently with water and chlorine is a toxic yellow-green gas, yet together they form $\\ce{NaCl}$, table salt.\n\n' +
      'Because the atoms are bonded, the composition is fixed (the *law of definite proportions*): pure water from a glacier or a lab is always 11.19% hydrogen and 88.81% oxygen by mass. A compound can only be separated into its elements by a [[chemical-change]], for example running electricity through water to make $\\ce{H2}$ and $\\ce{O2}$.\n\n' +
      'Pitfall: do not confuse a compound with a [[mixture]]. Salt water is a mixture (you can vary how much salt you add and evaporate the water away); salt itself is a compound. Compounds held together by [[ionic-bond|ionic bonds]] form lattices, while those with [[covalent-bond|covalent bonds]] usually form discrete molecules.',
    tex: '\\ce{2Na + Cl2 -> 2NaCl}',
    see: ['element', 'mixture', 'pure-substance', 'chemical-change'],
  },
  {
    id: 'mixture',
    term: 'Mixture',
    aliases: ['homogeneous mixture', 'heterogeneous mixture'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'A physical combination of two or more substances whose proportions can vary and which keep their own identities, so they can be separated by physical means.',
    long:
      'Nothing new is formed when you make a mixture: the sugar in sweet tea is still sugar, and you can recover it by evaporating the water. Mixtures come in two kinds. A *homogeneous* mixture (a [[chemical-solution]]) is uniform throughout, like air, salt water or brass. A *heterogeneous* mixture has visibly different regions, like gravel, oil and water, or a salad.\n\n' +
      'Physical separation methods exploit differences in physical properties: filtration (particle size), distillation (boiling point), magnets (iron), chromatography (how strongly components stick to a surface), and decanting (density).\n\n' +
      'Pitfall: uniform does not mean pure. Clear tap water and air look like single substances but are homogeneous mixtures. Real-world example: fuels such as gasoline and JP-8 are mixtures of many hydrocarbons, which is why they boil over a range of temperatures instead of at one sharp temperature.',
    see: ['pure-substance', 'compound', 'chemical-solution', 'physical-change'],
  },
  {
    id: 'pure-substance',
    term: 'Pure Substance',
    aliases: ['substance'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'Matter with a fixed, uniform composition and definite properties: either an [[element]] or a [[compound]].',
    long:
      'Every sample of a pure substance is identical: the same melting point, boiling point, density and composition, no matter where it came from. That is what lets a chemist identify an unknown by measuring its properties.\n\n' +
      'The classification tree is: [[matter]] splits into pure substances and [[mixture|mixtures]]; pure substances split into elements (one kind of atom) and compounds (fixed combination of elements).\n\n' +
      'Pitfall: in everyday language "pure" means "uncontaminated" (pure orange juice), but orange juice is a mixture. A useful lab clue: a pure substance melts and boils at a single sharp temperature, while a mixture melts or boils over a range.',
    see: ['element', 'compound', 'mixture', 'matter'],
  },
  {
    id: 'physical-change',
    term: 'Physical Change',
    aliases: ['physical property', 'phase change'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'A change in the form or state of matter that does not change its chemical identity, such as melting, boiling, cutting or dissolving.',
    long:
      'After a physical change the particles are the same particles, just arranged or moving differently. Ice, liquid water and steam are all $\\ce{H2O}$ molecules; melting only lets them slide past each other. A *physical property* (color, density, melting point, conductivity) can be observed without turning the substance into something else.\n\n' +
      'Physical changes are often easy to reverse (freeze the water again, evaporate the solvent), though reversibility is a hint, not the definition. The definition is: no new substance forms.\n\n' +
      'Pitfall: bubbles do not always mean a reaction. Boiling water bubbles because liquid water becomes water vapor, a physical change. Compare with [[chemical-change]], where new substances with new formulas appear.',
    tex: '\\ce{H2O(s) -> H2O(l) -> H2O(g)}',
    see: ['chemical-change', 'states-of-matter', 'mixture'],
  },
  {
    id: 'chemical-change',
    term: 'Chemical Change',
    aliases: ['chemical reaction', 'chemical property', 'reaction'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'A change in which one or more substances are converted into new substances with different compositions and properties; atoms are rearranged by breaking and forming bonds.',
    long:
      'In a chemical change (a chemical reaction) the atoms themselves survive but their partners change. Burning methane rearranges C, H and O atoms into $\\ce{CO2}$ and $\\ce{H2O}$. A *chemical property* describes how a substance can react: flammability, reactivity with acid, tendency to rust.\n\n' +
      'Clues that a reaction has occurred: a gas forms (not from boiling), a solid *precipitate* appears when two solutions are mixed, a lasting color change, light, or a temperature change. These are evidence, not proof; the real test is whether a new substance exists. Reactions are written as a [[chemical-equation]].\n\n' +
      'Pitfall: atoms are never created, destroyed or changed into other elements in a chemical reaction (that is nuclear chemistry). Everyday examples: rusting iron, cooking an egg, a battery discharging, and fuel burning in an engine.',
    tex: '\\ce{CH4 + 2O2 -> CO2 + 2H2O}',
    see: ['physical-change', 'chemical-equation', 'conservation-of-mass', 'reactant'],
  },
  {
    id: 'states-of-matter',
    term: 'States of Matter',
    aliases: ['phases of matter', 'solid', 'liquid', 'gas', 'phase'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'The physical forms matter takes: **solid** (fixed shape and volume), **liquid** (fixed volume, takes the container\'s shape) and **gas** (fills its container), set by how strongly particles attract compared with how fast they move.',
    long:
      'Think of a tug-of-war between attraction and motion. In a solid the [[intermolecular-forces]] win: particles are packed tightly and only vibrate in place. In a liquid the particles are still close but have enough energy to slide past one another. In a gas motion wins: particles are far apart (a gas is mostly empty space), move fast in straight lines and collide with the walls, which creates [[pressure]].\n\n' +
      'Heating adds kinetic energy and drives the changes solid → liquid (melting) → gas (vaporization); the reverse are freezing and condensation, and solid → gas directly is sublimation (dry ice, $\\ce{CO2(s)}$). In equations the state is shown as $\\ce{(s)}$, $\\ce{(l)}$, $\\ce{(g)}$ or $\\ce{(aq)}$ for dissolved in water. A fourth state, plasma (ionized gas), exists in lightning, stars and neon signs.\n\n' +
      'Pitfall: during a phase change the temperature stays constant even though heat is flowing in, because the energy goes into overcoming attractions rather than speeding particles up. This is the flat part of a heating curve.',
    tex: '\\ce{solid <=> liquid <=> gas}',
    see: ['physical-change', 'intermolecular-forces', 'pressure', 'kelvin'],
  },
  {
    id: 'si-units',
    term: 'SI Units',
    aliases: ['metric system', 'International System of Units', 'SI prefixes', 'base units'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'The International System of Units: seven base units (meter, kilogram, second, kelvin, mole, ampere, candela) plus decimal prefixes such as kilo- ($10^3$), milli- ($10^{-3}$) and nano- ($10^{-9}$).',
    long:
      'Science uses one system so that a measurement means the same thing everywhere. The base units chemists use most are the meter (m, length), kilogram (kg, mass), second (s), kelvin (K, temperature) and mole (mol, amount of substance). Everything else is derived: volume in $\\text{m}^3$, density in $\\text{kg/m}^3$, pressure in pascals ($\\text{Pa} = \\text{N/m}^2$).\n\n' +
      'Prefixes are powers of ten, so converting is just moving the decimal point: $1\\ \\text{km} = 10^3\\ \\text{m}$, $1\\ \\text{mg} = 10^{-3}\\ \\text{g}$, $1\\ \\mu\\text{m} = 10^{-6}\\ \\text{m}$. This pairs naturally with [[scientific-notation]].\n\n' +
      'Pitfalls: the base unit of mass is the kilogram, not the gram. The liter is not an SI base unit but is accepted for everyday use: $1\\ \\text{L} = 1\\ \\text{dm}^3$ and $1\\ \\text{mL} = 1\\ \\text{cm}^3$. Capital and lowercase matter: M is mega ($10^6$) but m is milli ($10^{-3}$). Military connection: a "klick" is a kilometer, and metric grid maps work because everything is in powers of ten.',
    tex: '1\\ \\text{km} = 10^{3}\\ \\text{m},\\quad 1\\ \\text{mL} = 10^{-3}\\ \\text{L} = 1\\ \\text{cm}^3,\\quad 1\\ \\text{nm} = 10^{-9}\\ \\text{m}',
    see: ['conversion-factor', 'dimensional-analysis', 'scientific-notation', 'kelvin'],
  },
  {
    id: 'significant-figures',
    term: 'Significant Figures',
    aliases: ['sig figs', 'significant digits'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'The digits in a measured value that are known reliably, plus one estimated digit. They communicate a measurement\'s precision, and calculated results must not claim more than the data support.',
    long:
      'If a scale reads 12.47 g, the 7 is the uncertain last digit; writing 12.470000 would claim a precision the scale does not have. Counting rules: nonzero digits count; zeros between nonzero digits count (205 has 3); leading zeros never count (0.0045 has 2); trailing zeros count only if there is a decimal point (2.50 has 3, 250. has 3, 250 is ambiguous, so write $2.5 \\times 10^2$ or $2.50 \\times 10^2$).\n\n' +
      'Calculation rules: for **multiplication and division**, the answer has as many significant figures as the input with the fewest; for **addition and subtraction**, the answer has as many decimal places as the input with the fewest. For a logarithm such as [[ph]], the number of decimal places in the pH equals the number of significant figures in the concentration. Exact numbers (counted objects, defined conversions like $1\\ \\text{in} = 2.54\\ \\text{cm}$) have unlimited significant figures.\n\n' +
      'Pitfall: round only at the end; rounding every intermediate step piles up error. Programming connection: a `double` carries about 15 to 16 significant decimal digits regardless of how good the measurement was, so the precision of the data must be tracked separately from the precision of the float.',
    tex: '\\underbrace{0.00}_{\\text{not sig.}}\\,\\underbrace{450}_{\\text{3 sig. figs}}, \\qquad 2.0\\ \\text{cm} \\times 3.456\\ \\text{cm} = 6.9\\ \\text{cm}^2',
    see: ['accuracy-precision', 'scientific-notation', 'dimensional-analysis'],
  },
  {
    id: 'accuracy-precision',
    term: 'Accuracy and Precision',
    aliases: ['accuracy', 'precision', 'percent error'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      '**Accuracy** is how close a measurement is to the true value; **precision** is how close repeated measurements are to one another.',
    long:
      'Picture a shot group on a target. A tight group far from the bullseye is precise but not accurate; a scattered group centered on the bullseye is accurate on average but not precise; a tight group on the bullseye is both. Zeroing a rifle sight fixes accuracy (moves the group); good fundamentals improve precision (shrink the group).\n\n' +
      'Precision is limited by *random error* and is reported through [[significant-figures]]. Accuracy is spoiled by *systematic error*, a consistent bias such as a scale that was never tared or a thermometer that reads 2 °C high. Accuracy is often reported as percent error: $\\dfrac{|\\text{measured} - \\text{accepted}|}{\\text{accepted}} \\times 100\\%$.\n\n' +
      'Pitfall: many digits do not make a result accurate. A miscalibrated digital balance can display five decimal places of wrong answer. Averaging repeated trials reduces random error but cannot remove a systematic one.',
    tex: '\\text{percent error} = \\frac{|\\text{measured} - \\text{accepted}|}{\\text{accepted}} \\times 100\\%',
    see: ['significant-figures', 'si-units'],
  },
  {
    id: 'dimensional-analysis',
    term: 'Dimensional Analysis',
    aliases: ['factor-label method', 'unit analysis', 'unit conversion'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'Solving problems by multiplying a given quantity by [[conversion-factor|conversion factors]] arranged so that unwanted units cancel and the desired unit remains.',
    long:
      'Units behave like algebraic factors: $\\text{m}/\\text{m} = 1$ just as $x/x = 1$. Every conversion factor is a fraction equal to 1, so multiplying by it changes the units without changing the quantity. Write each factor with the unit you want to cancel in the denominator, then cancel and multiply.\n\n' +
      'This one method runs the whole course: metric conversions, [[density]] problems, grams to moles via [[molar-mass]], and the full [[stoichiometry]] chain grams → moles → moles → grams. If the units come out right, the setup is almost certainly right; if they come out as $\\text{g}^2/\\text{mol}$, the setup is wrong before you touch a calculator.\n\n' +
      'Pitfall: squared and cubed units need the factor squared or cubed. Since $1\\ \\text{in} = 2.54\\ \\text{cm}$, $1\\ \\text{in}^3 = (2.54)^3\\ \\text{cm}^3 = 16.39\\ \\text{cm}^3$, not $2.54\\ \\text{cm}^3$. Real-world example: the 1983 "Gimli Glider" airliner ran out of fuel after a pounds-versus-kilograms mix-up in a fuel calculation.',
    tex: '65\\ \\frac{\\cancel{\\text{mi}}}{\\cancel{\\text{h}}} \\times \\frac{1609.344\\ \\text{m}}{1\\ \\cancel{\\text{mi}}} \\times \\frac{1\\ \\cancel{\\text{h}}}{3600\\ \\text{s}} = 29\\ \\text{m/s}',
    see: ['conversion-factor', 'si-units', 'stoichiometry', 'molar-mass'],
  },
  {
    id: 'conversion-factor',
    term: 'Conversion Factor',
    aliases: ['unit factor'],
    course: 'chem',
    category: 'Matter and Measurement',
    short:
      'A ratio of two equivalent quantities in different units, such as $\\dfrac{1000\\ \\text{mL}}{1\\ \\text{L}}$, which equals 1 and so can multiply any quantity without changing its value.',
    long:
      'Every equality gives two conversion factors. From $1\\ \\text{in} = 2.54\\ \\text{cm}$ you get $\\frac{2.54\\ \\text{cm}}{1\\ \\text{in}}$ and $\\frac{1\\ \\text{in}}{2.54\\ \\text{cm}}$; choose the one that puts the unit you are cancelling in the denominator. Chemistry adds its own factors: [[density]] (g ↔ mL), [[molar-mass]] (g ↔ mol), [[avogadros-number]] (mol ↔ particles), the [[mole-ratio]] (mol A ↔ mol B) and [[molarity]] (L ↔ mol).\n\n' +
      'Defined factors such as $1\\ \\text{km} = 1000\\ \\text{m}$ or $1\\ \\text{in} = 2.54\\ \\text{cm}$ are exact and do not limit [[significant-figures]]. Measured factors such as a density of $0.789\\ \\text{g/mL}$ do.\n\n' +
      'Pitfall: flipping a factor upside down gives an answer off by the square of the factor, often a wildly unreasonable number. Always sanity-check: 5 kg should be thousands of grams, not 0.005 g.',
    tex: '\\frac{1000\\ \\text{mL}}{1\\ \\text{L}} = 1, \\qquad \\frac{1\\ \\text{mol}\\ \\ce{H2O}}{18.015\\ \\text{g}\\ \\ce{H2O}} = 1',
    see: ['dimensional-analysis', 'si-units', 'molar-mass', 'mole-ratio'],
  },
  {
    id: 'density',
    term: 'Density',
    aliases: ['mass density'],
    course: 'chem',
    category: 'Matter and Measurement',
    short: 'Mass per unit volume, $\\rho = m/V$, usually in $\\text{g/mL}$ or $\\text{g/cm}^3$ for solids and liquids and $\\text{g/L}$ for gases.',
    long:
      'Density tells you how tightly matter is packed. Liquid water is about $1.00\\ \\text{g/mL}$ near room temperature, aluminum $2.70\\ \\text{g/cm}^3$, lead $11.3\\ \\text{g/cm}^3$, and air only about $1.2\\ \\text{g/L}$. Anything less dense than a fluid floats in it: ice ($0.917\\ \\text{g/cm}^3$) floats on water, and oil floats on water.\n\n' +
      'Because $\\rho = m/V$, density is a [[conversion-factor]] between mass and volume: $m = \\rho V$ and $V = m/\\rho$. It is an *intensive* property: a drop and a drum of the same liquid have the same density, so density helps identify substances. It changes with temperature, because most things expand when heated.\n\n' +
      'Pitfall: heavy and dense are different. A ton of feathers is as heavy as a ton of lead but occupies vastly more volume. Real-world example: fuel is sold by volume but aircraft are loaded by mass, so fuel crews convert with the fuel\'s density (jet fuel is roughly $0.8\\ \\text{kg/L}$).',
    tex: '\\rho = \\frac{m}{V}, \\qquad V = \\frac{10.0\\ \\cancel{\\text{g}}}{2.70\\ \\cancel{\\text{g}}/\\text{cm}^3} = 3.70\\ \\text{cm}^3\\ \\text{(aluminum)}',
    see: ['conversion-factor', 'dimensional-analysis', 'si-units'],
  },

  // ------------------------------------------------------------------
  // Atoms
  // ------------------------------------------------------------------
  {
    id: 'atom',
    term: 'Atom',
    aliases: ['atoms', 'nucleus', 'nuclear atom'],
    course: 'chem',
    category: 'Atoms',
    short:
      'The smallest unit of an element that keeps its chemical identity: a tiny, dense, positive nucleus of [[proton|protons]] and [[neutron|neutrons]] surrounded by a much larger cloud of [[electron|electrons]].',
    long:
      'The nucleus holds over 99.9% of the atom\'s mass but is about 100,000 times smaller across than the atom (roughly $10^{-15}$ m versus $10^{-10}$ m). If the atom were a football stadium, the nucleus would be a marble on the 50-yard line; the rest is the electron cloud. Rutherford discovered this in 1911 when most alpha particles fired at gold foil passed straight through but a few bounced back.\n\n' +
      'A neutral atom has equal numbers of protons and electrons, so its charges cancel. The number of protons (the [[atomic-number]]) fixes which element it is; the electrons, especially the outermost [[valence-electrons]], decide how it bonds and reacts.\n\n' +
      'Pitfall: the "solar system" picture of electrons on neat circular orbits is a helpful cartoon, not reality. Electrons occupy [[orbital|orbitals]], regions where they are likely to be found. Chemistry rearranges atoms; it never splits them.',
    tex: '\\text{neutral atom: } \\#p^+ = \\#e^-, \\qquad A = Z + N',
    see: ['proton', 'neutron', 'electron', 'element'],
  },
  {
    id: 'proton',
    term: 'Proton',
    aliases: ['p+'],
    course: 'chem',
    category: 'Atoms',
    short:
      'A positively charged particle (charge $+1$) in the nucleus, with mass about $1.007\\ \\text{u}$. The number of protons is the [[atomic-number]] and determines the element.',
    long:
      'Protons are the identity card of an atom: 1 proton is hydrogen, 6 is carbon, 79 is gold, always. Each carries a charge of $+1.602 \\times 10^{-19}$ C, exactly equal and opposite to an electron\'s, and has a mass of $1.673 \\times 10^{-27}$ kg, about 1836 times the electron\'s mass.\n\n' +
      'Protons repel one another strongly, yet they are packed together in the nucleus. The *strong nuclear force*, which acts only at very short range, binds protons and neutrons together and overcomes that repulsion.\n\n' +
      'Pitfall: ordinary chemical reactions never change the number of protons. When an atom becomes an [[ion]] it gains or loses electrons, not protons. Changing proton count is nuclear chemistry (fission in a reactor, radioactive decay).',
    see: ['neutron', 'electron', 'atomic-number', 'atom'],
  },
  {
    id: 'neutron',
    term: 'Neutron',
    aliases: ['n0'],
    course: 'chem',
    category: 'Atoms',
    short:
      'An electrically neutral particle in the nucleus with mass about $1.009\\ \\text{u}$, slightly more than a proton. Different neutron counts give different [[isotope|isotopes]] of an element.',
    long:
      'Neutrons add mass and help hold the nucleus together through the strong nuclear force without adding electrical repulsion. Light, stable nuclei have roughly equal numbers of protons and neutrons; heavy ones need more neutrons than protons (lead-208 has 82 protons and 126 neutrons).\n\n' +
      'The number of neutrons is $N = A - Z$, the [[mass-number]] minus the [[atomic-number]]. Since neutrons have no charge, they barely affect chemistry: carbon-12 and carbon-14 react the same way.\n\n' +
      'Pitfall: you cannot read the neutron count from the periodic table; it lists the [[atomic-mass]], a weighted average over isotopes. Real-world connection: neutrons striking uranium-235 trigger fission in nuclear reactors, including those that power submarines and aircraft carriers.',
    tex: 'N = A - Z, \\qquad \\ce{^{14}_{6}C}: N = 14 - 6 = 8',
    see: ['proton', 'isotope', 'mass-number', 'atom'],
  },
  {
    id: 'electron',
    term: 'Electron',
    aliases: ['e-'],
    course: 'chem',
    category: 'Atoms',
    short:
      'A tiny negatively charged particle (charge $-1$, mass about $1/1836$ of a proton) found outside the nucleus. Electrons are what atoms gain, lose and share in chemical reactions.',
    long:
      'Almost all of chemistry is the behavior of electrons. Bonds are shared or transferred electrons, [[ion|ions]] form by gaining or losing them, and the [[periodic-table]] is laid out according to how they are arranged ([[electron-configuration]]). The nucleus is just along for the ride.\n\n' +
      'An electron\'s mass is $9.109 \\times 10^{-31}$ kg (about $0.000549\\ \\text{u}$), so electrons contribute almost nothing to an atom\'s mass but nearly all of its volume. They occupy [[orbital|orbitals]] in energy levels; the outermost ones, the [[valence-electrons]], do the reacting.\n\n' +
      'Pitfall: a negative ion has *extra* electrons and a positive ion has *missing* electrons; the sign tells you the electron imbalance, not the proton count. Everyday connection: electric current in a wire, and in every battery, is a flow of electrons pushed by a chemical reaction.',
    see: ['proton', 'valence-electrons', 'electron-configuration', 'ion'],
  },
  {
    id: 'atomic-number',
    term: 'Atomic Number',
    aliases: ['Z', 'proton number'],
    course: 'chem',
    category: 'Atoms',
    short:
      'The number of protons in the nucleus of an atom, written $Z$. It defines the element and is the whole number printed above each symbol on the periodic table.',
    long:
      'The [[periodic-table]] is ordered by atomic number: hydrogen $Z = 1$, helium $Z = 2$, and so on up to $Z = 118$. Every atom with $Z = 8$ is oxygen, whatever its neutron count or charge.\n\n' +
      'In a neutral atom the number of electrons equals $Z$ as well, which is why $Z$ also tells you how many electrons to place when writing an [[electron-configuration]]. In isotope notation $Z$ is the lower-left subscript.\n\n' +
      'Pitfall: do not confuse $Z$ with the [[mass-number]] $A$ (protons plus neutrons) or with the decimal [[atomic-mass]] printed on the table. On most tables the atomic number is the whole number and the atomic mass is the decimal.',
    tex: '\\ce{^{A}_{Z}X} \\quad\\Longrightarrow\\quad \\ce{^{23}_{11}Na}: Z = 11',
    see: ['proton', 'mass-number', 'element', 'isotope'],
  },
  {
    id: 'mass-number',
    term: 'Mass Number',
    aliases: ['A', 'nucleon number'],
    course: 'chem',
    category: 'Atoms',
    short: 'The total number of protons plus neutrons in a nucleus, written $A$; always a whole number. $A = Z + N$.',
    long:
      'Protons and neutrons each have a mass of about $1\\ \\text{u}$ and electrons almost none, so the mass number is a good whole-number estimate of an atom\'s mass in atomic mass units. It is written as the upper-left superscript in isotope notation, or after a hyphen in a name: carbon-14 has $A = 14$.\n\n' +
      'From $A = Z + N$ you can find any one of the three counts from the other two: carbon-14 has $Z = 6$ (it is carbon), so $N = 14 - 6 = 8$ neutrons.\n\n' +
      'Pitfall: the mass number belongs to one specific [[isotope]], while the decimal number on the periodic table (12.011 for carbon) is the [[atomic-mass]], an average over all naturally occurring isotopes. Never round the atomic mass and call it "the" mass number of every atom of that element.',
    tex: 'A = Z + N, \\qquad \\ce{^{37}_{17}Cl}: 17\\ p^+,\\ 20\\ n^0,\\ 17\\ e^-',
    see: ['atomic-number', 'neutron', 'isotope', 'atomic-mass'],
  },
  {
    id: 'isotope',
    term: 'Isotope',
    aliases: ['isotopes', 'nuclide', 'isotope notation'],
    course: 'chem',
    category: 'Atoms',
    short:
      'Atoms of the same element (same number of protons) with different numbers of neutrons, and therefore different mass numbers, such as carbon-12 and carbon-14.',
    long:
      'Isotopes are siblings: same [[atomic-number]], same electron count when neutral, so essentially the same chemistry, but different masses. They are written $\\ce{^{A}_{Z}X}$ or as name-mass (uranium-235). Most elements are natural mixtures of isotopes: chlorine is about 75.8% chlorine-35 and 24.2% chlorine-37, which is why its [[atomic-mass]] is 35.45.\n\n' +
      'Some isotopes are unstable (radioactive) and decay at a characteristic [[half-life]]. Carbon-14 (half-life about 5,730 years) is used in radiocarbon dating; uranium-235 is the fissile isotope in reactor fuel, and "enrichment" means raising its share above the natural 0.7%.\n\n' +
      'Pitfall: isotopes differ in neutrons, ions differ in electrons. $\\ce{^{37}Cl}$ is an isotope; $\\ce{Cl-}$ is an ion. An atom can be both at once: $\\ce{^{37}Cl-}$.',
    tex: '\\ce{^{12}_{6}C}\\ (6n^0), \\qquad \\ce{^{13}_{6}C}\\ (7n^0), \\qquad \\ce{^{14}_{6}C}\\ (8n^0)',
    see: ['neutron', 'mass-number', 'atomic-mass', 'atomic-number'],
  },
  {
    id: 'atomic-mass',
    term: 'Average Atomic Mass',
    aliases: ['atomic mass', 'atomic weight', 'relative atomic mass', 'amu', 'atomic mass unit', 'dalton'],
    course: 'chem',
    category: 'Atoms',
    short:
      'The weighted average mass of an element\'s naturally occurring isotopes, in atomic mass units (u): $\\sum (\\text{isotope mass}) \\times (\\text{fractional abundance})$. It is the decimal number on the periodic table.',
    long:
      'One atomic mass unit is defined as exactly $1/12$ the mass of a carbon-12 atom. Each element\'s table value averages its isotopes, weighted by how common each is, just like a weighted grade average. For chlorine: $34.969 \\times 0.7576 + 36.966 \\times 0.2424 = 35.45\\ \\text{u}$.\n\n' +
      'The same number does double duty: an atom averages 35.45 u, and one [[mole]] of chlorine atoms has a mass of 35.45 g. That is the bridge to [[molar-mass]], and it is the reason the mole was defined as it was.\n\n' +
      'Pitfall: no single chlorine atom has a mass of 35.45 u; every atom is either about 35 or about 37. The average is closer to the more abundant isotope, which gives a quick reasonableness check. Use percent abundances as decimals (75.76% → 0.7576).',
    tex: '\\bar{m} = \\sum_i m_i f_i, \\qquad \\bar{m}_{\\ce{Cl}} = (34.969)(0.7576) + (36.966)(0.2424) = 35.45\\ \\text{u}',
    see: ['isotope', 'molar-mass', 'mass-number', 'mole'],
  },
  {
    id: 'electron-configuration',
    term: 'Electron Configuration',
    aliases: ['electron arrangement', 'aufbau principle', 'noble gas notation', 'filling order'],
    course: 'chem',
    category: 'Atoms',
    short:
      'The arrangement of an atom\'s electrons in energy levels and sublevels, written like $1s^2\\,2s^2\\,2p^6\\,3s^1$ for sodium, filled from lowest energy upward.',
    long:
      'Electrons fill the lowest-energy [[orbital|orbitals]] available first (the *Aufbau principle*). Each label gives the energy level (1, 2, 3, …), the sublevel type ($s$, $p$, $d$, $f$, holding 2, 6, 10, 14 electrons) and, as a superscript, how many electrons are there. The filling order is $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, \\dots$, which you can read straight off the [[periodic-table]] by walking across rows: the $s$-block, $p$-block, $d$-block and $f$-block.\n\n' +
      'Noble-gas shorthand replaces the inner core with the previous noble gas in brackets: sodium is $[\\text{Ne}]\\,3s^1$, iron is $[\\text{Ar}]\\,4s^2\\,3d^6$. The part after the bracket shows the outer electrons that matter for bonding ([[valence-electrons]]).\n\n' +
      'Pitfalls: $4s$ fills before $3d$ because it is slightly lower in energy at that point; and the superscripts must sum to the electron count (26 for iron). A few elements break the pattern, notably chromium $[\\text{Ar}]\\,4s^1\\,3d^5$ and copper $[\\text{Ar}]\\,4s^1\\,3d^{10}$, because half-filled and filled $d$ sets are especially stable. General Chemistry explains this with quantum numbers.',
    tex: '\\ce{Na}: 1s^2\\,2s^2\\,2p^6\\,3s^1 = [\\text{Ne}]\\,3s^1, \\qquad \\ce{Fe}: [\\text{Ar}]\\,4s^2\\,3d^6',
    see: ['orbital', 'valence-electrons', 'periodic-table', 'electron'],
  },
  {
    id: 'valence-electrons',
    term: 'Valence Electrons',
    aliases: ['valence electron', 'valence shell', 'outer electrons'],
    course: 'chem',
    category: 'Atoms',
    short:
      'The electrons in an atom\'s outermost occupied energy level; these are the electrons involved in bonding. For main-group elements the count matches the group: 1 for group 1, 2 for group 2, and (group number − 10) for groups 13–18.',
    long:
      'Inner (core) electrons are held tightly and shielded from the outside world, so reactions happen at the outer edge. Elements in the same [[group]] have the same number of valence electrons, which is exactly why they behave alike: lithium, sodium and potassium each have one and each readily loses it.\n\n' +
      'Valence electrons are the dots in a [[lewis-structure]], and the drive to reach eight of them (the [[octet-rule]]) predicts the charge an atom takes as an [[ion]] and how many bonds it forms: carbon (4) usually forms 4 bonds, nitrogen (5) forms 3, oxygen (6) forms 2, and the halogens (7) form 1.\n\n' +
      'Pitfalls: helium has 2 valence electrons even though it sits in group 18 (its shell holds only 2); and for transition metals the simple group rule does not apply cleanly. Read the count from the highest energy level in the [[electron-configuration]]: for sulfur, $[\\text{Ne}]\\,3s^2\\,3p^4$ gives $2 + 4 = 6$.',
    tex: '\\ce{S}: [\\text{Ne}]\\,\\underbrace{3s^2\\,3p^4}_{6\\ \\text{valence } e^-}',
    see: ['electron-configuration', 'group', 'octet-rule', 'lewis-structure'],
  },
  {
    id: 'orbital',
    term: 'Orbital',
    aliases: ['atomic orbital', 's orbital', 'p orbital', 'sublevel', 'subshell', 'energy level'],
    course: 'chem',
    category: 'Atoms',
    short:
      'A region of space around the nucleus where an electron is likely to be found. Each orbital holds at most two electrons, with opposite spins.',
    long:
      'Electrons are not tiny planets on tracks; quantum mechanics only tells us where they are likely to be, and an orbital is that probability cloud. Orbitals come in sublevels: one $s$ orbital (spherical, 2 electrons), three $p$ orbitals (dumbbells along $x$, $y$, $z$, 6 electrons), five $d$ (10 electrons) and seven $f$ (14 electrons). Energy level $n$ contains $n$ sublevel types and holds up to $2n^2$ electrons.\n\n' +
      'In orbital-box diagrams each box is an orbital and each arrow an electron; within a sublevel electrons spread out one per box before pairing (*Hund\'s rule*), and paired electrons point in opposite directions (*Pauli exclusion principle*).\n\n' +
      'Pitfall: "orbit" and "orbital" are different ideas; the Bohr model\'s circular orbits are a historical stepping stone. Everyday connection: the colors of fireworks and neon signs come from electrons dropping between energy levels and emitting light of specific wavelengths. General Chemistry develops this with quantum numbers.',
    tex: 's: 1 \\times 2 = 2,\\quad p: 3 \\times 2 = 6,\\quad d: 5 \\times 2 = 10,\\quad f: 7 \\times 2 = 14',
    see: ['electron-configuration', 'electron', 'valence-electrons'],
  },

  // ------------------------------------------------------------------
  // Periodic Table
  // ------------------------------------------------------------------
  {
    id: 'periodic-table',
    term: 'Periodic Table',
    aliases: ['periodic table of the elements', 'Mendeleev', 'periodic law'],
    course: 'chem',
    category: 'Periodic Table',
    short:
      'The chart of all elements arranged in order of increasing [[atomic-number]], in rows ([[periodic-period|periods]]) and columns ([[group|groups]]) so that elements with similar properties line up vertically.',
    long:
      'Mendeleev built the first successful table in 1869 by ordering elements by mass and grouping them by behavior, leaving gaps for elements not yet discovered and predicting their properties (gallium and germanium were found soon after and matched). We now know the true ordering is by proton count, and the repeating pattern exists because [[electron-configuration|electron configurations]] repeat: every element in a column has the same arrangement of [[valence-electrons]].\n\n' +
      'The layout is a map of electron filling: groups 1–2 are the $s$-block, 13–18 the $p$-block, 3–12 the $d$-block (transition metals), and the two rows set below are the $f$-block. [[metal|Metals]] sit on the left and center, [[nonmetal|nonmetals]] on the upper right, and [[metalloid|metalloids]] along the staircase between them. Trends in [[atomic-radius]], [[ionization-energy]] and [[electronegativity]] run predictably across and down.\n\n' +
      'Pitfall: hydrogen sits above group 1 because it has one valence electron, but it is a nonmetal gas, not an alkali metal. Think of the table as a lookup table indexed by $Z$ whose layout encodes the physics.',
    see: ['group', 'periodic-period', 'atomic-number', 'electron-configuration'],
  },
  {
    id: 'group',
    term: 'Group (Family)',
    aliases: ['family', 'column', 'alkali metals', 'alkaline earth metals', 'halogens', 'noble gases'],
    course: 'chem',
    category: 'Periodic Table',
    short:
      'A vertical column of the periodic table, numbered 1–18. Elements in a group have the same number of [[valence-electrons]] and therefore similar chemical properties.',
    long:
      'Several groups have names. Group 1 (except H): the *alkali metals*, soft and highly reactive, each losing one electron to form $+1$ ions. Group 2: the *alkaline earth metals*, forming $+2$ ions. Group 17: the *halogens*, reactive nonmetals that gain one electron to form $-1$ ions. Group 18: the *noble gases*, with full outer shells, which almost never react.\n\n' +
      'Going down a group, atoms get bigger because each period adds an energy level. That changes reactivity in a predictable direction: alkali metals become *more* reactive going down (potassium reacts with water more violently than sodium), while halogens become *less* reactive (fluorine is the most reactive of all).\n\n' +
      'Pitfall: older tables number groups IA–VIIIA plus B groups; the modern 1–18 numbering is standard. Do not mix up groups (columns) with [[periodic-period|periods]] (rows). Everyday connection: neon and argon (group 18) are used in signs and welding shielding gas precisely because they do not react.',
    see: ['periodic-period', 'periodic-table', 'valence-electrons'],
  },
  {
    id: 'periodic-period',
    term: 'Period (Periodic Table)',
    aliases: ['period', 'row'],
    course: 'chem',
    category: 'Periodic Table',
    short:
      'A horizontal row of the periodic table. There are 7 periods, and the period number equals the highest energy level that holds electrons in the atom\'s ground state.',
    long:
      'Moving left to right across a period, each element has one more proton and one more electron than the last, and the electrons go into the same outer energy level. The added protons pull that shell in tighter, which drives the across-a-period trends: [[atomic-radius]] decreases and [[ionization-energy]] and [[electronegativity]] increase. Properties change from reactive metals on the left, through metalloids, to nonmetals and finally a noble gas.\n\n' +
      'Periods have lengths 2, 8, 8, 18, 18, 32, 32, matching how many electrons the $s$, $p$, $d$ and $f$ sublevels being filled can hold.\n\n' +
      'Pitfall: the word *period* here means a row of the table, not the [[period]] of a repeating function in trigonometry, although the name comes from the same idea: properties repeat periodically as $Z$ increases.',
    see: ['group', 'periodic-table', 'atomic-radius', 'electron-configuration'],
  },
  {
    id: 'metal',
    term: 'Metal',
    aliases: ['metals', 'transition metal', 'transition metals', 'metallic'],
    course: 'chem',
    category: 'Periodic Table',
    short:
      'An element that is typically shiny, malleable, ductile and a good conductor of heat and electricity, and that tends to lose electrons to form positive ions ([[cation|cations]]). About three quarters of the elements are metals.',
    long:
      'Metals occupy the left side and center of the [[periodic-table]]. Their atoms hold their few [[valence-electrons]] loosely (low [[ionization-energy]]), so in the solid those electrons are shared among all the atoms as a "sea" of mobile electrons. That sea explains the properties: it carries current and heat, reflects light (luster), and lets layers of atoms slide without shattering (malleability).\n\n' +
      'In compounds metals give up electrons: sodium becomes $\\ce{Na+}$, magnesium $\\ce{Mg^2+}$, aluminum $\\ce{Al^3+}$. Transition metals (groups 3–12) can often form more than one ion, such as $\\ce{Fe^2+}$ and $\\ce{Fe^3+}$, which is why their names carry Roman numerals.\n\n' +
      'Pitfall: not every metal is solid and hard; mercury is a liquid at room temperature and sodium can be cut with a knife. Everyday connection: copper wiring, aluminum airframes and steel (iron alloy) armor all exploit metallic bonding.',
    see: ['nonmetal', 'metalloid', 'cation', 'ionization-energy'],
  },
  {
    id: 'nonmetal',
    term: 'Nonmetal',
    aliases: ['nonmetals'],
    course: 'chem',
    category: 'Periodic Table',
    short:
      'An element that is generally a poor conductor, dull and brittle as a solid, and that tends to gain or share electrons. Nonmetals sit at the upper right of the periodic table, plus hydrogen.',
    long:
      'Nonmetals hold electrons tightly (high [[ionization-energy]] and [[electronegativity]]), so instead of giving electrons away they gain them to form [[anion|anions]] such as $\\ce{Cl-}$ and $\\ce{O^2-}$ when paired with metals, or share them in [[covalent-bond|covalent bonds]] with other nonmetals. The molecules of life are built almost entirely from the nonmetals C, H, O, N, P and S.\n\n' +
      'Many nonmetals are gases at room temperature ($\\ce{H2}$, $\\ce{N2}$, $\\ce{O2}$, $\\ce{F2}$, $\\ce{Cl2}$, the noble gases), bromine is a liquid, and carbon, sulfur, phosphorus and iodine are solids.\n\n' +
      'Pitfall: graphite, a form of carbon, conducts electricity (it is used in electrodes and pencil "lead"), so "nonmetals never conduct" is a rule of thumb, not a law. A compound of two nonmetals is usually molecular, while a metal plus a nonmetal is usually ionic, which matters for naming.',
    see: ['metal', 'metalloid', 'anion', 'covalent-bond'],
  },
  {
    id: 'metalloid',
    term: 'Metalloid',
    aliases: ['metalloids', 'semimetal', 'semiconductor'],
    course: 'chem',
    category: 'Periodic Table',
    short:
      'An element with properties intermediate between metals and nonmetals, found along the staircase line of the periodic table: boron, silicon, germanium, arsenic, antimony and tellurium.',
    long:
      'Metalloids may look metallic but are brittle, and they conduct electricity only moderately. Their key feature is that they are *semiconductors*: their conductivity can be tuned by adding tiny amounts of other elements (doping) and it rises with temperature, the opposite of a metal.\n\n' +
      'That tunability is the foundation of electronics. Silicon is the material of essentially every CPU and GPU, and germanium was used in the first transistors. Boron is added to glass to make heat-resistant borosilicate (lab glassware).\n\n' +
      'Pitfall: textbooks disagree on the borderline cases (polonium and astatine are sometimes listed), so learn the six common ones and the staircase location rather than memorizing a fixed list.',
    see: ['metal', 'nonmetal', 'periodic-table'],
  },
  {
    id: 'atomic-radius',
    term: 'Atomic Radius',
    aliases: ['atomic size', 'ionic radius'],
    course: 'chem',
    category: 'Periodic Table',
    short:
      'A measure of an atom\'s size, typically half the distance between the nuclei of two identical bonded atoms. It **decreases across** a period and **increases down** a group.',
    long:
      'Two effects compete. Going **down** a group, each period adds a new energy level, so electrons sit farther out and the atom grows. Going **across** a period, electrons are added to the same energy level while the nucleus gains protons; inner electrons shield the outer ones only partially, so the *effective nuclear charge* felt by the valence electrons rises and pulls the whole cloud inward. Francium/cesium (bottom left) are the largest atoms; helium (top right) is the smallest.\n\n' +
      'Ions follow the same logic: a [[cation]] is smaller than its parent atom (it lost electrons, often a whole outer shell), and an [[anion]] is larger (extra electrons repel each other and spread out). $\\ce{Na+}$ is much smaller than $\\ce{Na}$; $\\ce{Cl-}$ is larger than $\\ce{Cl}$.\n\n' +
      'Pitfall: it feels backwards that adding electrons across a period makes atoms *smaller*. The key is that protons are added too, and they win because no new shell is opened. Radius drives the other trends: smaller atoms hold their electrons more tightly (higher [[ionization-energy]] and [[electronegativity]]).',
    see: ['ionization-energy', 'electronegativity', 'periodic-period', 'group'],
  },
  {
    id: 'ionization-energy',
    term: 'Ionization Energy',
    aliases: ['first ionization energy', 'IE'],
    course: 'chem',
    category: 'Periodic Table',
    short:
      'The energy required to remove the outermost electron from a neutral gaseous atom: $\\ce{X(g) -> X+(g) + e-}$. It **increases across** a period and **decreases down** a group.',
    long:
      'Ionization energy measures how tightly an atom holds its outermost electron. Small atoms with high effective nuclear charge (upper right) hold on hardest: helium has the highest value, about 2372 kJ/mol. Large atoms whose valence electron is far from the nucleus and well shielded (lower left) let go easily: sodium needs only about 496 kJ/mol, which is why alkali metals are so reactive. The trend is the mirror image of [[atomic-radius]].\n\n' +
      'Successive ionization energies reveal shell structure. Sodium\'s second ionization energy jumps to about 4562 kJ/mol, more than nine times the first, because the second electron must come from the stable inner $2p$ shell. This explains why sodium forms $\\ce{Na+}$ and never $\\ce{Na^2+}$.\n\n' +
      'Pitfall: there are small dips in the across-a-period trend (boron is lower than beryllium; oxygen lower than nitrogen) caused by sublevel details. The overall trend is what this course uses; General Chemistry explains the exceptions.',
    tex: '\\ce{Na(g) -> Na+(g) + e-}\\quad \\Delta E \\approx 496\\ \\text{kJ/mol}',
    see: ['atomic-radius', 'electronegativity', 'cation', 'metal'],
  },
  {
    id: 'electronegativity',
    term: 'Electronegativity',
    aliases: ['EN', 'Pauling scale'],
    course: 'chem',
    category: 'Periodic Table',
    short:
      'A measure of how strongly an atom attracts the shared electrons in a chemical bond. On the Pauling scale fluorine is highest (3.98); values **increase across** a period and **decrease down** a group.',
    long:
      'In a bond the two nuclei are in a tug-of-war over the shared pair. The atom with the higher electronegativity pulls the electrons closer and takes on a partial negative charge. Values to remember: F 3.98, O 3.44, Cl 3.16, N 3.04, C 2.55, H 2.20, Na 0.93. The trend follows [[ionization-energy]] for the same reason: small atoms with a strong effective nuclear charge pull hardest.\n\n' +
      'The *difference* in electronegativity, $\\Delta EN$, classifies a bond. As a rough guide: below about 0.4, nonpolar covalent (C–H, 0.35); between about 0.4 and 1.8, [[polar-bond|polar covalent]] (O–H, 1.24); above about 1.8, mostly ionic (Na–Cl, 2.23). Bond type is a continuum, and different textbooks draw the lines at slightly different places.\n\n' +
      'Pitfall: electronegativity applies to atoms *in a bond*, so noble gases, which rarely bond, usually have no value. It is a dimensionless relative scale with no units. Everyday connection: water\'s highly polar O–H bonds make it the excellent solvent that dissolves salts and sugars.',
    tex: '\\Delta EN_{\\ce{O-H}} = 3.44 - 2.20 = 1.24 \\quad\\Rightarrow\\quad \\text{polar covalent}',
    see: ['polar-bond', 'polar-molecule', 'ionization-energy', 'ionic-bond'],
  },

  // ------------------------------------------------------------------
  // Bonding
  // ------------------------------------------------------------------
  {
    id: 'ion',
    term: 'Ion',
    aliases: ['ions', 'ionic charge'],
    course: 'chem',
    category: 'Bonding',
    short:
      'An atom or group of atoms with a net electric charge because it has gained or lost electrons. Positive ions are [[cation|cations]]; negative ions are [[anion|anions]].',
    long:
      'An atom becomes an ion when the electron count no longer equals the proton count. The charge is (protons) − (electrons): $\\ce{Na+}$ has 11 protons and 10 electrons; $\\ce{O^2-}$ has 8 protons and 10 electrons. Main-group atoms gain or lose electrons until they reach the same electron arrangement as the nearest noble gas, which predicts their charges from the [[group]]: group 1 → $+1$, group 2 → $+2$, Al → $+3$, group 15 → $-3$, group 16 → $-2$, group 17 → $-1$.\n\n' +
      'Ions of opposite charge attract to form [[ionic-bond|ionic compounds]]. When those compounds dissolve, the ions separate and the solution conducts electricity; dissolved ions are called *electrolytes*, which is what sports drinks and oral rehydration salts replace.\n\n' +
      'Pitfall: ions form by gaining or losing **electrons only**; protons never change. Gaining electrons makes the charge more negative, which feels backwards at first: adding negative particles lowers the charge. Charges are written number-then-sign: $\\ce{Ca^2+}$, not $\\ce{Ca^{+2}}$.',
    tex: '\\ce{Na -> Na+ + e-}, \\qquad \\ce{Cl + e- -> Cl-}',
    see: ['cation', 'anion', 'polyatomic-ion', 'ionic-bond'],
  },
  {
    id: 'cation',
    term: 'Cation',
    aliases: ['positive ion', 'cations'],
    course: 'chem',
    category: 'Bonding',
    short:
      'A positively charged ion, formed when an atom loses one or more electrons. Metals form cations, for example $\\ce{Na+}$, $\\ce{Mg^2+}$ and $\\ce{Al^3+}$.',
    long:
      '[[metal|Metals]] have few valence electrons held loosely (low [[ionization-energy]]), so losing them is the cheapest route to a noble-gas configuration. Losing electrons also often removes the entire outer shell, so a cation is much smaller than its parent atom.\n\n' +
      'Naming: a cation from a metal with only one common charge keeps the element\'s name (sodium ion, calcium ion). For metals that form several charges, a Roman numeral gives the charge: iron(II) is $\\ce{Fe^2+}$, iron(III) is $\\ce{Fe^3+}$. One common polyatomic cation is ammonium, $\\ce{NH4+}$.\n\n' +
      'Pitfall: memory aid: ca**t**ion has a "t" that looks like a plus sign. In a formula the cation is written first ($\\ce{NaCl}$, $\\ce{CaCO3}$).',
    tex: '\\ce{Mg -> Mg^2+ + 2e-}',
    see: ['anion', 'ion', 'metal', 'ionic-bond'],
  },
  {
    id: 'anion',
    term: 'Anion',
    aliases: ['negative ion', 'anions'],
    course: 'chem',
    category: 'Bonding',
    short:
      'A negatively charged ion, formed when an atom gains one or more electrons. Nonmetals form anions, for example $\\ce{Cl-}$, $\\ce{O^2-}$ and $\\ce{N^3-}$.',
    long:
      '[[nonmetal|Nonmetals]] are only a few electrons short of a full octet and attract electrons strongly, so gaining electrons is their route to a noble-gas configuration. The added electrons repel each other and the cloud expands, so an anion is larger than its parent atom.\n\n' +
      'Naming: a monatomic anion takes the root of the element name plus *-ide*: chloride ($\\ce{Cl-}$), oxide ($\\ce{O^2-}$), nitride ($\\ce{N^3-}$), sulfide ($\\ce{S^2-}$). Many anions are [[polyatomic-ion|polyatomic]], such as sulfate $\\ce{SO4^2-}$ and nitrate $\\ce{NO3-}$.\n\n' +
      'Pitfall: "chlorine" is the element ($\\ce{Cl2}$); "chloride" is the ion ($\\ce{Cl-}$). Table salt contains chloride ions, not toxic chlorine gas, which is a good example of how different an ion can be from its parent element.',
    tex: '\\ce{O + 2e- -> O^2-}',
    see: ['cation', 'ion', 'nonmetal', 'polyatomic-ion'],
  },
  {
    id: 'polyatomic-ion',
    term: 'Polyatomic Ion',
    aliases: ['polyatomic ions', 'compound ion', 'molecular ion'],
    course: 'chem',
    category: 'Bonding',
    short:
      'A group of covalently bonded atoms that carries an overall charge and acts as a single unit in ionic compounds, such as sulfate $\\ce{SO4^2-}$, nitrate $\\ce{NO3-}$, hydroxide $\\ce{OH-}$ and ammonium $\\ce{NH4+}$.',
    long:
      'Inside the ion the atoms share electrons covalently; the group as a whole has extra (or missing) electrons, so it bonds ionically to other ions. It stays intact through most reactions and dissolves as one unit: $\\ce{Na2SO4}$ dissolves into $\\ce{2Na+}$ and one $\\ce{SO4^2-}$, not into separate S and O atoms.\n\n' +
      'Common ones to know: ammonium $\\ce{NH4+}$, hydroxide $\\ce{OH-}$, nitrate $\\ce{NO3-}$, nitrite $\\ce{NO2-}$, acetate $\\ce{CH3COO-}$, hydrogen carbonate $\\ce{HCO3-}$, carbonate $\\ce{CO3^2-}$, sulfate $\\ce{SO4^2-}$, sulfite $\\ce{SO3^2-}$, phosphate $\\ce{PO4^3-}$, hypochlorite $\\ce{ClO-}$ (bleach). Pattern: *-ate* has one more oxygen than *-ite* with the same charge.\n\n' +
      'Pitfall: when a compound needs more than one polyatomic ion, wrap it in parentheses: calcium nitrate is $\\ce{Ca(NO3)2}$, not $\\ce{CaNO32}$. Never change the subscripts inside the ion to make charges balance.',
    tex: '\\ce{Ca^2+ + 2NO3- -> Ca(NO3)2}, \\qquad \\ce{(NH4)3PO4}',
    see: ['ion', 'anion', 'ionic-bond', 'covalent-bond'],
  },
  {
    id: 'ionic-bond',
    term: 'Ionic Bond',
    aliases: ['ionic compound', 'ionic bonding', 'formula unit', 'crystal lattice'],
    course: 'chem',
    category: 'Bonding',
    short:
      'The electrostatic attraction between oppositely charged ions, typically formed when a metal transfers electrons to a nonmetal. Ionic compounds form crystal lattices, not discrete molecules.',
    long:
      'Sodium gives up its single valence electron easily; chlorine is one electron short of an octet. After the transfer, $\\ce{Na+}$ and $\\ce{Cl-}$ attract each other strongly (Coulomb\'s law: force grows with the charges and falls with distance squared). In the solid every ion is surrounded by ions of the opposite charge in a repeating 3D lattice, so the formula $\\ce{NaCl}$ gives a ratio (a *formula unit*), not a molecule.\n\n' +
      'Ionic formulas are found by balancing charges to zero: $\\ce{Al^3+}$ and $\\ce{O^2-}$ combine 2 : 3 to give $\\ce{Al2O3}$ ($2 \\times 3 = 3 \\times 2 = 6$). Strong attractions throughout the lattice give high melting points ($\\ce{NaCl}$ melts at 801 °C), hardness and brittleness. Solids do not conduct, but molten or dissolved ionic compounds do, because the ions can move.\n\n' +
      'Pitfall: ionic versus [[covalent-bond|covalent]] is a spectrum based on [[electronegativity]] difference; "metal + nonmetal = ionic" is a useful first rule. Everyday connection: road salt, baking soda, chalk and the electrolyte paste in batteries are ionic compounds.',
    tex: '\\ce{2Al^3+ + 3O^2- -> Al2O3} \\qquad (+6) + (-6) = 0',
    see: ['ion', 'cation', 'anion', 'covalent-bond'],
  },
  {
    id: 'covalent-bond',
    term: 'Covalent Bond',
    aliases: ['covalent bonding', 'molecule', 'molecular compound', 'shared pair', 'bonding pair'],
    course: 'chem',
    category: 'Bonding',
    short:
      'A chemical bond in which two atoms share a pair of electrons, typically between nonmetals. Covalently bonded atoms form molecules such as $\\ce{H2O}$, $\\ce{CO2}$ and $\\ce{CH4}$.',
    long:
      'When neither atom can take the other\'s electrons outright (both are [[nonmetal|nonmetals]] with similar [[electronegativity]]), they share. The shared pair sits between the two nuclei and is attracted to both, which holds them together. Each atom counts the shared electrons toward its own octet, so sharing lets both reach a noble-gas configuration at once.\n\n' +
      'Atoms can share one, two or three pairs ([[double-bond|single, double and triple bonds]]). If the electronegativities differ, the sharing is unequal and the bond is a [[polar-bond]]. Molecular compounds tend to have low melting and boiling points because the forces *between* molecules ([[intermolecular-forces]]) are much weaker than the covalent bonds *within* them.\n\n' +
      'Pitfall: when water boils, the covalent O–H bonds do not break; only the attractions between water molecules are overcome. Steam is still $\\ce{H2O}$. Everyday connection: fuels, plastics, medicines, DNA and proteins are all covalent molecules.',
    tex: '\\ce{H-H}, \\qquad \\ce{H-O-H}, \\qquad \\ce{O=C=O}',
    see: ['ionic-bond', 'lewis-structure', 'double-bond', 'polar-bond'],
  },
  {
    id: 'octet-rule',
    term: 'Octet Rule',
    aliases: ['octet', 'duet rule', 'noble gas configuration'],
    course: 'chem',
    category: 'Bonding',
    short:
      'Main-group atoms tend to gain, lose or share electrons until they have eight valence electrons, the stable configuration of a noble gas. Hydrogen is satisfied with two (a duet).',
    long:
      'Why eight? A filled $s$ sublevel (2) plus a filled $p$ sublevel (6) makes a full outer energy level, the arrangement of the noble gases, which are famously unreactive. Reaching that arrangement lowers an atom\'s energy, so the rule predicts ion charges (sodium loses 1, oxygen gains 2) and bond counts in molecules (carbon makes 4 bonds, nitrogen 3, oxygen 2, halogens 1).\n\n' +
      'In a [[lewis-structure]], count both the lone-pair electrons and all the shared bonding electrons around each atom; each should total 8 (2 for hydrogen).\n\n' +
      'Pitfall: it is a rule of thumb with known exceptions. Boron in $\\ce{BF3}$ has only 6; odd-electron molecules like $\\ce{NO}$ cannot pair everything; and elements from period 3 down can exceed 8 ($\\ce{SF6}$ has 12 around sulfur). For the second-period elements C, N, O and F, never exceed eight.',
    see: ['valence-electrons', 'lewis-structure', 'ion', 'covalent-bond'],
  },
  {
    id: 'lewis-structure',
    term: 'Lewis Structure',
    aliases: ['Lewis dot structure', 'electron dot structure', 'Lewis diagram', 'Lewis dot diagram'],
    course: 'chem',
    category: 'Bonding',
    short:
      'A diagram of a molecule showing atoms by their symbols, shared electron pairs as lines (bonds) and unshared valence electrons as dots ([[lone-pair|lone pairs]]).',
    long:
      'Steps: (1) count total [[valence-electrons]] (add one per negative charge, subtract one per positive charge for ions); (2) place the least electronegative atom in the center (never hydrogen, which is always terminal) and connect atoms with single bonds; (3) complete the octets of the outer atoms with lone pairs; (4) put any leftover electrons on the central atom; (5) if the central atom still lacks an octet, turn outer lone pairs into [[double-bond|double or triple bonds]]. Check: every electron counted, every octet satisfied.\n\n' +
      'Example: $\\ce{CO2}$ has $4 + 2(6) = 16$ valence electrons. Single bonds and full octets on the oxygens use all 16 but leave carbon with only 4, so two lone pairs become bonds: O=C=O, with two lone pairs on each oxygen. Lewis structures are the input to [[vsepr]], which predicts the 3D shape.\n\n' +
      'Pitfall: a Lewis structure shows connectivity, not geometry; drawing water as H–O–H in a straight line does not mean it is linear (it is bent). Forgetting to adjust the electron count for an ion\'s charge is the most common counting error.',
    tex: '\\ce{CO2}: 4 + 2(6) = 16\\ e^- \\quad\\Rightarrow\\quad \\ce{O=C=O}',
    see: ['valence-electrons', 'octet-rule', 'lone-pair', 'vsepr'],
  },
  {
    id: 'lone-pair',
    term: 'Lone Pair',
    aliases: ['lone pairs', 'nonbonding pair', 'unshared pair'],
    course: 'chem',
    category: 'Bonding',
    short:
      'A pair of valence electrons on one atom that is not shared in a bond, drawn as two dots in a [[lewis-structure]].',
    long:
      'In water, oxygen has six valence electrons: two go into the O–H bonds and four remain as two lone pairs. Lone pairs count toward the octet and occupy space around the atom just as bonds do.\n\n' +
      'Lone pairs shape molecules. Held by only one nucleus, they spread out more than bonding pairs and push bonds closer together, which is why the H–O–H angle in water is 104.5° rather than the tetrahedral 109.5°. In [[vsepr]] a lone pair counts as an electron domain but is invisible in the [[molecular-geometry]] name, so $\\ce{NH3}$ (one lone pair) is trigonal pyramidal and $\\ce{H2O}$ (two) is bent.\n\n' +
      'Pitfall: forgetting lone pairs on the central atom leads to the wrong shape (for example, drawing water as linear). Real-world connection: the lone pair on ammonia\'s nitrogen is what lets it grab an $\\ce{H+}$, which makes ammonia a [[base-chem|base]].',
    see: ['lewis-structure', 'vsepr', 'molecular-geometry', 'polar-molecule'],
  },
  {
    id: 'double-bond',
    term: 'Double and Triple Bonds',
    aliases: ['double bond', 'triple bond', 'multiple bond', 'single bond', 'bond order'],
    course: 'chem',
    category: 'Bonding',
    short:
      'Covalent bonds in which two atoms share two pairs (double bond, =) or three pairs (triple bond, ≡) of electrons. More shared pairs make a bond shorter and stronger.',
    long:
      'Multiple bonds appear in a [[lewis-structure]] when there are not enough electrons for every atom to reach an octet with single bonds alone, so neighbors share additional pairs. Oxygen gas is $\\ce{O=O}$, carbon dioxide is $\\ce{O=C=O}$, and nitrogen gas is $\\ce{N#N}$.\n\n' +
      'Bond strength and length track the number of shared pairs. For carbon–carbon bonds, single ≈ 154 pm, double ≈ 134 pm, triple ≈ 120 pm, and the bond energy rises with each step. The $\\ce{N#N}$ triple bond is one of the strongest known (about 945 kJ/mol), which is why the nitrogen that makes up 78% of air is so unreactive and why reactions that *form* $\\ce{N2}$ release a lot of energy.\n\n' +
      'Pitfall: in [[vsepr]] a double or triple bond counts as **one** electron domain, the same as a single bond. Also, a double bond is not simply "twice as strong" as a single bond; it is stronger, but by less than a factor of two.',
    tex: '\\ce{C-C}\\ (154\\ \\text{pm}) \\;>\\; \\ce{C=C}\\ (134\\ \\text{pm}) \\;>\\; \\ce{C#C}\\ (120\\ \\text{pm})',
    see: ['covalent-bond', 'lewis-structure', 'octet-rule', 'vsepr'],
  },
  {
    id: 'vsepr',
    term: 'VSEPR Theory',
    aliases: ['VSEPR', 'valence shell electron pair repulsion', 'electron domain', 'electron domains'],
    course: 'chem',
    category: 'Bonding',
    short:
      'Valence Shell Electron Pair Repulsion theory: the electron domains (bonds and lone pairs) around a central atom repel one another and spread out as far apart as possible, which determines the shape of the molecule.',
    long:
      'Count the *electron domains* on the central atom from its [[lewis-structure]]: each single, double or triple bond is one domain, and each [[lone-pair]] is one domain. Then arrange them as far apart as possible: 2 domains → linear (180°), 3 → trigonal planar (120°), 4 → tetrahedral (109.5°), 5 → trigonal bipyramidal, 6 → octahedral.\n\n' +
      'That arrangement is the *electron geometry*. The [[molecular-geometry]] names only the atoms: methane $\\ce{CH4}$ (4 bonds) is tetrahedral, ammonia $\\ce{NH3}$ (3 bonds, 1 lone pair) is trigonal pyramidal at about 107°, and water $\\ce{H2O}$ (2 bonds, 2 lone pairs) is bent at 104.5°. Lone pairs repel more strongly than bonding pairs, squeezing the angles.\n\n' +
      'Pitfall: do not count a double bond as two domains, and do not forget the central atom\'s lone pairs. Analogy: tie balloons together at their knots and they push into exactly these shapes. Shape matters because it decides polarity, and polarity decides boiling points and what dissolves in what.',
    tex: '\\text{domains: } 2 \\to 180^\\circ,\\quad 3 \\to 120^\\circ,\\quad 4 \\to 109.5^\\circ',
    see: ['molecular-geometry', 'lone-pair', 'lewis-structure', 'polar-molecule'],
  },
  {
    id: 'molecular-geometry',
    term: 'Molecular Geometry',
    aliases: ['molecular shape', 'electron geometry', 'bond angle', 'tetrahedral', 'trigonal planar', 'trigonal pyramidal', 'bent', 'linear'],
    course: 'chem',
    category: 'Bonding',
    short:
      'The three-dimensional arrangement of the *atoms* in a molecule, such as linear, trigonal planar, tetrahedral, trigonal pyramidal or bent, predicted by [[vsepr]].',
    long:
      'Start from the electron geometry (all domains), then name the shape using atoms only:\n\n' +
      '2 domains, 0 lone pairs: linear, 180° ($\\ce{CO2}$). 3 domains, 0 lone pairs: trigonal planar, 120° ($\\ce{BF3}$); 3 domains with 1 lone pair: bent, just under 120° ($\\ce{SO2}$). 4 domains, 0 lone pairs: tetrahedral, 109.5° ($\\ce{CH4}$); 1 lone pair: trigonal pyramidal, about 107° ($\\ce{NH3}$); 2 lone pairs: bent, about 104.5° ($\\ce{H2O}$).\n\n' +
      'Pitfall: electron geometry and molecular geometry differ whenever there are lone pairs on the central atom; water\'s electron geometry is tetrahedral but its molecular geometry is bent. Real-world connection: shape is how biology recognizes molecules (enzymes and smell receptors fit shapes like a key fits a lock), and it decides whether a molecule is a [[polar-molecule]].',
    see: ['vsepr', 'lone-pair', 'polar-molecule', 'lewis-structure'],
  },
  {
    id: 'polar-bond',
    term: 'Polar Bond',
    aliases: ['polar covalent bond', 'bond polarity', 'dipole', 'partial charge', 'nonpolar covalent bond'],
    course: 'chem',
    category: 'Bonding',
    short:
      'A covalent bond in which electrons are shared unequally because the two atoms have different [[electronegativity|electronegativities]], giving one end a partial negative charge ($\\delta^-$) and the other a partial positive charge ($\\delta^+$).',
    long:
      'In an O–H bond, oxygen (3.44) pulls the shared pair closer than hydrogen (2.20) does, so oxygen becomes $\\delta^-$ and hydrogen $\\delta^+$. The bond has a *dipole*, drawn as an arrow pointing toward the more electronegative atom with a plus-sign tail at the positive end.\n\n' +
      'Polarity scales with $\\Delta EN$. As a rough guide: below about 0.4 is nonpolar covalent (C–H, H–H, Cl–Cl), about 0.4 to 1.8 is polar covalent (O–H, N–H, C–O), and above about 1.8 behaves as an [[ionic-bond]] (Na–Cl). Identical atoms always share equally.\n\n' +
      'Pitfall: a molecule can contain polar bonds and still be nonpolar overall if its shape makes the dipoles cancel, as in $\\ce{CO2}$ and $\\ce{CCl4}$. Bond polarity is about one bond; [[polar-molecule|molecular polarity]] is about the whole molecule.',
    tex: '\\overset{\\delta^+}{\\ce{H}}\\ce{-}\\overset{\\delta^-}{\\ce{Cl}}, \\qquad \\Delta EN = 3.16 - 2.20 = 0.96',
    see: ['electronegativity', 'polar-molecule', 'covalent-bond', 'ionic-bond'],
  },
  {
    id: 'polar-molecule',
    term: 'Polar Molecule',
    aliases: ['molecular polarity', 'dipole moment', 'nonpolar molecule', 'like dissolves like'],
    course: 'chem',
    category: 'Bonding',
    short:
      'A molecule with an overall uneven distribution of charge (a net dipole), which requires polar bonds *and* a shape in which the bond dipoles do not cancel.',
    long:
      'Treat each bond dipole as a vector and add them, exactly as in physics. In linear $\\ce{O=C=O}$ the two equal C=O dipoles point in opposite directions and sum to zero, so $\\ce{CO2}$ is nonpolar. In bent $\\ce{H2O}$ the two O–H dipoles both point partly toward oxygen and add up, so water is polar. Symmetric shapes with identical outer atoms ($\\ce{CH4}$, $\\ce{CCl4}$, $\\ce{BF3}$) are nonpolar; a lone pair on the central atom or mixed outer atoms usually make a molecule polar ($\\ce{NH3}$, $\\ce{CH3Cl}$).\n\n' +
      'Polarity controls physical behavior. Polar molecules attract each other through dipole–dipole forces and [[intermolecular-forces|hydrogen bonds]], raising boiling points. And "like dissolves like": polar water dissolves salt and sugar but not oil, while nonpolar solvents dissolve grease.\n\n' +
      'Pitfall: polar bonds do not guarantee a polar molecule; always check the [[molecular-geometry]]. Everyday connections: a microwave oven heats food by making polar water molecules rotate back and forth, and soap works because each soap molecule has a polar head and a nonpolar tail.',
    see: ['polar-bond', 'molecular-geometry', 'intermolecular-forces', 'vsepr'],
  },
  {
    id: 'intermolecular-forces',
    term: 'Intermolecular Forces',
    aliases: ['IMFs', 'hydrogen bonding', 'hydrogen bond', 'London dispersion forces', 'dipole-dipole forces', 'van der Waals forces'],
    course: 'chem',
    category: 'Bonding',
    short:
      'Attractive forces *between* molecules, much weaker than the covalent bonds within them: London dispersion forces, dipole–dipole forces and hydrogen bonds. They determine melting points, boiling points and solubility.',
    long:
      'From weakest to strongest (for molecules of similar size): **London dispersion forces** act between all molecules, from momentary uneven electron distributions, and grow with molecular size (why larger hydrocarbons are liquids or waxes while methane is a gas). **Dipole–dipole forces** attract the $\\delta^+$ end of one [[polar-molecule]] to the $\\delta^-$ end of another. **Hydrogen bonds** are an especially strong dipole–dipole attraction when H is bonded to N, O or F and is attracted to a lone pair on another N, O or F.\n\n' +
      'Hydrogen bonding is why water boils at 100 °C while the similar-sized $\\ce{H2S}$ boils at about −60 °C, why ice floats (its hydrogen-bonded lattice is open), and why DNA\'s two strands zip together. Boiling or melting a molecular substance overcomes intermolecular forces; it does not break covalent bonds.\n\n' +
      'Pitfall: a "hydrogen bond" is not a covalent bond to hydrogen; it is the attraction *between* molecules. Everyday connection: a gecko can walk up glass because millions of tiny hairs on its feet add up enough London dispersion force to hold its weight.',
    see: ['polar-molecule', 'states-of-matter', 'covalent-bond', 'lone-pair'],
  },

  // ------------------------------------------------------------------
  // Reactions
  // ------------------------------------------------------------------
  {
    id: 'chemical-equation',
    term: 'Chemical Equation',
    aliases: ['reaction equation', 'state symbols', 'coefficient (chemistry)'],
    course: 'chem',
    category: 'Reactions',
    short:
      'A symbolic description of a chemical reaction: [[reactant|reactants]] → [[product|products]], with formulas, state symbols and coefficients giving how many units of each take part.',
    long:
      'In $\\ce{2H2(g) + O2(g) -> 2H2O(l)}$ the arrow means "react to form", the plus signs separate substances, and the state symbols (s), (l), (g), (aq) give the physical state, with (aq) meaning dissolved in water. Conditions can be written over the arrow, such as $\\Delta$ for heat or a catalyst.\n\n' +
      'The *coefficients* (the 2s) count molecules or formula units, and equally [[mole|moles]]; the *subscripts* belong to the formulas and are fixed by the identity of each substance. A coefficient of 1 is not written. Read the example as: 2 molecules (or moles) of hydrogen react with 1 of oxygen to give 2 of water. That reading is the [[mole-ratio]] that powers [[stoichiometry]].\n\n' +
      'Pitfall: the equation must be a [[balanced-equation]] before you use it for calculations. Also, an equation says nothing about speed: a balanced equation can describe a reaction that takes years (rusting) or milliseconds.',
    tex: '\\ce{2H2(g) + O2(g) -> 2H2O(l)}',
    see: ['reactant', 'product', 'balanced-equation', 'mole-ratio'],
  },
  {
    id: 'reactant',
    term: 'Reactant',
    aliases: ['reactants', 'reagent', 'starting material'],
    course: 'chem',
    category: 'Reactions',
    short: 'A substance present at the start of a chemical reaction that is consumed as it proceeds; written on the left side of the arrow.',
    long:
      'In $\\ce{CH4 + 2O2 -> CO2 + 2H2O}$, methane and oxygen are the reactants. Their atoms are rearranged into the [[product|products]]; no atoms are lost or gained ([[conservation-of-mass]]).\n\n' +
      'Reactants are rarely mixed in exactly the ratio the equation calls for. The one that runs out first is the [[limiting-reactant]] and caps how much product can form; the others are [[excess-reactant|excess reactants]] and some is left over.\n\n' +
      'Pitfall: a catalyst written over the arrow speeds a reaction but is not consumed, so it is not a reactant. Everyday connection: in a car engine the reactants are fuel and oxygen from the air, which is why an engine starved of air runs poorly and produces carbon monoxide.',
    see: ['product', 'chemical-equation', 'limiting-reactant'],
  },
  {
    id: 'product',
    term: 'Product',
    aliases: ['products'],
    course: 'chem',
    category: 'Reactions',
    short: 'A substance formed by a chemical reaction; written on the right side of the arrow.',
    long:
      'In $\\ce{CH4 + 2O2 -> CO2 + 2H2O}$, carbon dioxide and water are the products. They contain exactly the same atoms as the [[reactant|reactants]], rearranged into new substances with new properties.\n\n' +
      'The maximum amount of product predicted from the [[limiting-reactant]] is the [[theoretical-yield]]; what you actually collect is the actual yield, and their ratio is the [[percent-yield]].\n\n' +
      'Pitfall: in chemistry "product" means a substance made by a reaction, not the result of multiplication. Everyday connection: the products of burning fuel ($\\ce{CO2}$ and water vapor) are invisible gases, which is why burning seems to make matter disappear even though total mass is conserved.',
    see: ['reactant', 'chemical-equation', 'theoretical-yield'],
  },
  {
    id: 'balanced-equation',
    term: 'Balanced Equation',
    aliases: ['balancing equations', 'balancing'],
    course: 'chem',
    category: 'Reactions',
    short:
      'A chemical equation with coefficients chosen so that each kind of atom (and the total charge) appears in equal numbers on both sides, as required by [[conservation-of-mass]].',
    long:
      'Balance by changing **coefficients only**. A useful order: balance elements that appear in only one substance on each side first, leave elements that appear as free elements (like $\\ce{O2}$ or $\\ce{Fe}$) for last, keep polyatomic ions together as units if they appear unchanged on both sides, and finish by checking every element and reducing coefficients to the smallest whole numbers. For combustion of hydrocarbons, do C, then H, then O; if O comes out odd, double everything.\n\n' +
      'Example: propane. $\\ce{C3H8 + O2 -> CO2 + H2O}$. Carbon: 3 $\\ce{CO2}$. Hydrogen: 8 H gives 4 $\\ce{H2O}$. Oxygen: $3(2) + 4(1) = 10$ O on the right, so 5 $\\ce{O2}$. Result $\\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}$; check C 3 = 3, H 8 = 8, O 10 = 10.\n\n' +
      'Pitfall: never change a subscript to balance. Turning $\\ce{H2O}$ into $\\ce{H2O2}$ "balances" the oxygens but changes water into hydrogen peroxide, a different substance. Balancing is a small system of [[linear-equation|linear equations]] in the unknown coefficients, which is how software balances equations automatically.',
    tex: '\\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}',
    see: ['chemical-equation', 'conservation-of-mass', 'mole-ratio', 'combustion'],
  },
  {
    id: 'conservation-of-mass',
    term: 'Law of Conservation of Mass',
    aliases: ['conservation of mass', 'Lavoisier'],
    course: 'chem',
    category: 'Reactions',
    short:
      'In a chemical reaction, mass is neither created nor destroyed: the total mass of the products equals the total mass of the reactants, because atoms are only rearranged.',
    long:
      'Lavoisier established this in the 1770s by weighing reactions carried out in sealed vessels. The atomic explanation is simple: every atom present at the start is present at the end, just bonded differently, so the mass must match. This is the reason we balance equations.\n\n' +
      'It lets you find a missing mass. If 12.0 g of carbon burns completely with 32.0 g of oxygen, exactly 44.0 g of $\\ce{CO2}$ forms.\n\n' +
      'Pitfall: open systems seem to break the law. A burning log leaves only light ash because most of its mass leaves as gases ($\\ce{CO2}$ and water vapor), and rusting steel gains mass because it takes oxygen from the air. Striking example: burning one gallon of gasoline (about 2.8 kg) produces about 8.9 kg of $\\ce{CO2}$, more than the fuel itself, because most of that mass is oxygen pulled from the air.',
    tex: '\\underbrace{12.0\\ \\text{g}\\ \\ce{C} + 32.0\\ \\text{g}\\ \\ce{O2}}_{44.0\\ \\text{g}} \\ce{->} \\underbrace{44.0\\ \\text{g}\\ \\ce{CO2}}_{44.0\\ \\text{g}}',
    see: ['balanced-equation', 'chemical-change', 'chemical-equation'],
  },
  {
    id: 'synthesis-reaction',
    term: 'Synthesis Reaction',
    aliases: ['combination reaction', 'composition reaction'],
    course: 'chem',
    category: 'Reactions',
    short: 'A reaction in which two or more substances combine to form a single product: $\\ce{A + B -> AB}$.',
    long:
      'Many simple compounds are made this way: a metal and a nonmetal form an ionic compound ($\\ce{2Na + Cl2 -> 2NaCl}$), a metal and oxygen form an oxide ($\\ce{4Fe + 3O2 -> 2Fe2O3}$, the overall change in rusting), and two compounds can combine ($\\ce{CaO + H2O -> Ca(OH)2}$).\n\n' +
      'The most important industrial synthesis is the Haber–Bosch process, $\\ce{N2 + 3H2 -> 2NH3}$, which makes the ammonia for fertilizers that feed a large fraction of the world\'s population.\n\n' +
      'Pitfall: the signature is *one* product. If there are two or more products, it is not a synthesis. Synthesis is the reverse pattern of a [[decomposition-reaction]].',
    tex: '\\ce{N2 + 3H2 -> 2NH3}',
    see: ['decomposition-reaction', 'single-replacement', 'double-replacement', 'combustion'],
  },
  {
    id: 'decomposition-reaction',
    term: 'Decomposition Reaction',
    aliases: ['decomposition'],
    course: 'chem',
    category: 'Reactions',
    short:
      'A reaction in which a single compound breaks down into two or more simpler substances: $\\ce{AB -> A + B}$, usually driven by heat, electricity or light.',
    long:
      'Breaking bonds costs energy, so most decompositions need an input. Heating limestone gives lime and carbon dioxide ($\\ce{CaCO3 -> CaO + CO2}$), the basis of cement making. Passing electricity through water (electrolysis) splits it into hydrogen and oxygen gas ($\\ce{2H2O -> 2H2 + O2}$). Light slowly decomposes hydrogen peroxide, which is why it is sold in brown bottles.\n\n' +
      'Some decompositions are very fast and produce a large volume of gas in an instant. A car airbag inflates in a few hundredths of a second because a solid decomposes to nitrogen gas; the rapid gas release, not heat, does the work.\n\n' +
      'Pitfall: the signature is *one* reactant. Do not confuse decomposition with [[combustion]], which always has oxygen as a second reactant.',
    tex: '\\ce{CaCO3 ->[\\Delta] CaO + CO2}',
    see: ['synthesis-reaction', 'combustion', 'chemical-change'],
  },
  {
    id: 'single-replacement',
    term: 'Single-Replacement Reaction',
    aliases: ['single displacement', 'single-displacement reaction', 'activity series'],
    course: 'chem',
    category: 'Reactions',
    short:
      'A reaction in which one element replaces another element in a compound: $\\ce{A + BC -> AC + B}$. It happens only if A is more reactive than B.',
    long:
      'Think of a more reactive element cutting in on a dance. Zinc is more reactive than hydrogen, so it displaces hydrogen from acid: $\\ce{Zn + 2HCl -> ZnCl2 + H2}$. Iron is more reactive than copper, so an iron nail in copper(II) sulfate solution becomes coated with copper: $\\ce{Fe + CuSO4 -> FeSO4 + Cu}$. The ranking is called the *activity series* (roughly: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au).\n\n' +
      'If the lone element is less reactive, nothing happens: copper metal placed in zinc sulfate solution stays unchanged. That is why gold and silver resist corrosion and why they are found as free metals in nature.\n\n' +
      'Pitfall: metals replace metals (or hydrogen), and nonmetals replace nonmetals ($\\ce{Cl2 + 2NaBr -> 2NaCl + Br2}$). Real-world connection: ships and pipelines carry zinc "sacrificial anodes" that corrode in place of the steel hull because zinc is more reactive than iron.',
    tex: '\\ce{Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g)}',
    see: ['double-replacement', 'synthesis-reaction', 'metal'],
  },
  {
    id: 'double-replacement',
    term: 'Double-Replacement Reaction',
    aliases: ['double displacement', 'metathesis', 'precipitation reaction', 'precipitate'],
    course: 'chem',
    category: 'Reactions',
    short:
      'A reaction in which two ionic compounds exchange partners: $\\ce{AB + CD -> AD + CB}$. It goes forward when it forms a precipitate (insoluble solid), a gas or water.',
    long:
      'In solution the ions are already separate, so mixing two solutions simply lets every cation meet every anion. If some pair forms an insoluble solid, it drops out as a *precipitate*: $\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)}$ gives a white cloud of silver chloride. A [[neutralization]] (acid + base → salt + water) is also a double replacement, driven by forming water.\n\n' +
      'To predict products, swap the anions, then write each new formula with charges balanced (do not just swap subscripts from the old formulas). Then check solubility to see whether anything actually happens; if every product stays dissolved, there is no reaction.\n\n' +
      'Pitfall: the cation is always written first, so $\\ce{AD}$ pairs the first cation with the second anion. Real-world connection: water treatment removes contaminants by precipitating them, and hard-water scale is calcium carbonate precipitating out of solution.',
    tex: '\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)}',
    see: ['single-replacement', 'neutralization', 'ionic-bond', 'chemical-solution'],
  },
  {
    id: 'combustion',
    term: 'Combustion',
    aliases: ['burning', 'combustion reaction', 'complete combustion', 'incomplete combustion'],
    course: 'chem',
    category: 'Reactions',
    short:
      'A rapid reaction of a substance with oxygen that releases energy as heat and light. Complete combustion of a hydrocarbon gives carbon dioxide and water: $\\ce{C_xH_y + O2 -> CO2 + H2O}$.',
    long:
      'Combustion powers most of the world: natural gas ($\\ce{CH4 + 2O2 -> CO2 + 2H2O}$), propane, gasoline, diesel and jet fuel. The energy released comes from forming the very strong bonds in $\\ce{CO2}$ and $\\ce{H2O}$. For octane, a model gasoline molecule, the balanced equation is $\\ce{2C8H18 + 25O2 -> 16CO2 + 18H2O}$.\n\n' +
      'With too little oxygen, combustion is *incomplete* and produces carbon monoxide ($\\ce{CO}$) and soot (carbon) as well. $\\ce{CO}$ is colorless, odorless and deadly because it binds to hemoglobin far more strongly than oxygen does, which is why generators, heaters and vehicle engines must never be run in enclosed spaces such as tents, garages or vehicles.\n\n' +
      'Pitfall: when balancing hydrocarbon combustion, balance C, then H, then O last; if the oxygen count is odd, double all coefficients rather than using a fraction. The fire triangle (fuel, oxygen, heat) explains firefighting: remove any one side and the fire goes out.',
    tex: '\\ce{2C8H18 + 25O2 -> 16CO2 + 18H2O}',
    see: ['balanced-equation', 'synthesis-reaction', 'decomposition-reaction', 'chemical-change'],
  },

  // ------------------------------------------------------------------
  // The Mole
  // ------------------------------------------------------------------
  {
    id: 'mole',
    term: 'Mole',
    aliases: ['mol', 'amount of substance'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The SI unit of amount of substance: one mole is exactly $6.02214076 \\times 10^{23}$ particles (atoms, molecules, ions or formula units). It is the chemist\'s "dozen".',
    long:
      'Atoms are far too small to count individually, so chemists count them in huge batches. Just as a dozen eggs is 12 eggs, a mole of water is $6.022 \\times 10^{23}$ water molecules. The number is chosen so that the mass of one mole in grams equals the mass of one particle in atomic mass units: one carbon-12 atom is 12 u, and one mole of carbon-12 is 12 g. That makes the periodic table a direct grams-per-mole table ([[molar-mass]]).\n\n' +
      'Moles are the currency of chemistry because [[balanced-equation|balanced equations]] are written in particles, and moles are particles counted in bulk. Every [[stoichiometry]] problem converts to moles, uses the [[mole-ratio]], and converts back.\n\n' +
      'Pitfall: always say a mole *of what*. One mole of $\\ce{O2}$ molecules contains two moles of O atoms. For scale: one mole of water is only about 18 g, roughly a tablespoon, yet it holds more molecules than there are grains of sand on all of Earth\'s beaches.',
    tex: '1\\ \\text{mol} = 6.02214076 \\times 10^{23}\\ \\text{particles}',
    see: ['avogadros-number', 'molar-mass', 'atomic-mass', 'stoichiometry'],
  },
  {
    id: 'avogadros-number',
    term: "Avogadro's Number",
    aliases: ['Avogadro constant', 'Avogadro\'s constant', 'N_A', '6.022e23'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The number of particles in one mole: $N_A = 6.02214076 \\times 10^{23}\\ \\text{mol}^{-1}$ (exact since 2019). It converts between moles and individual particles.',
    long:
      'Use it as a [[conversion-factor]]: particles = moles × $N_A$, and moles = particles ÷ $N_A$. For example, 0.428 mol of $\\ce{NaCl}$ contains $0.428 \\times 6.022 \\times 10^{23} = 2.58 \\times 10^{23}$ formula units. Most problems use the rounded value $6.022 \\times 10^{23}$.\n\n' +
      'Why this particular number? It is (to excellent approximation) the number of atomic mass units in one gram, which is what makes "atomic mass in u" and "molar mass in g/mol" the same number. Since 2019 the SI defines it exactly, and the mole is defined from it.\n\n' +
      'Pitfall: dividing when you should multiply gives answers like $10^{-24}$ particles, which is impossible (less than one particle). Sanity check: any visible amount of a substance should have an enormous number of particles. It is named for Amedeo Avogadro, who proposed that equal volumes of gases at the same temperature and pressure contain equal numbers of particles.',
    tex: 'N_A = \\pu{6.02214076e23 mol-1}',
    see: ['mole', 'molar-mass', 'conversion-factor', 'scientific-notation'],
  },
  {
    id: 'molar-mass',
    term: 'Molar Mass',
    aliases: ['formula mass', 'molecular weight', 'molecular mass', 'g/mol'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The mass of one mole of a substance, in grams per mole: the sum of the atomic masses of all atoms in its formula. For water, $2(1.008) + 15.999 = 18.015\\ \\text{g/mol}$.',
    long:
      'Read each element\'s [[atomic-mass]] from the periodic table, multiply by its subscript (and by any coefficient outside parentheses), and add. $\\ce{Ca(OH)2}$: $40.078 + 2(15.999 + 1.008) = 74.092\\ \\text{g/mol}$. Common values: $\\ce{NaCl}$ 58.44, $\\ce{CO2}$ 44.009, $\\ce{C6H12O6}$ 180.156 g/mol.\n\n' +
      'Molar mass is the [[conversion-factor]] between the mass you weigh on a balance and the [[mole|moles]] the balanced equation talks about: moles = grams ÷ molar mass. For example, $25.0\\ \\text{g}$ of $\\ce{NaCl}$ is $25.0 / 58.44 = 0.428\\ \\text{mol}$.\n\n' +
      'Pitfalls: forgetting that a subscript after parentheses multiplies everything inside; and using the atomic mass of O (15.999) for oxygen gas, whose molar mass is $\\ce{O2}$ = 31.998 g/mol. Check the reasonableness of your answer: grams and moles differ by the molar mass, so 25 g of something weighing about 58 g/mol should be a bit under half a mole.',
    tex: '\\frac{25.0\\ \\cancel{\\text{g}}\\ \\ce{NaCl}}{1} \\times \\frac{1\\ \\text{mol}}{58.44\\ \\cancel{\\text{g}}} = 0.428\\ \\text{mol}\\ \\ce{NaCl}',
    see: ['mole', 'atomic-mass', 'percent-composition', 'stoichiometry'],
  },
  {
    id: 'percent-composition',
    term: 'Percent Composition',
    aliases: ['percent by mass', 'mass percent', 'percentage composition'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The percentage by mass of each element in a compound: $\\%\\,\\text{element} = \\dfrac{(\\text{subscript})(\\text{atomic mass})}{\\text{molar mass}} \\times 100\\%$.',
    long:
      'It answers "what fraction of this compound\'s mass is element X?" Use one mole of the compound as a convenient sample: in water, hydrogen contributes $2(1.008) = 2.016$ g of the $18.015$ g, so water is $11.19\\%$ H and $88.81\\%$ O. Because a [[compound]] has a fixed composition, every sample gives the same percentages.\n\n' +
      'It runs in reverse too: lab analysis measures percent composition, and from it you work out the [[empirical-formula]]. It is also used for practical questions, such as how much iron can be extracted from a ton of $\\ce{Fe2O3}$ ore (69.94% Fe).\n\n' +
      'Pitfall: percent composition is by **mass**, not by atom count. Water has twice as many H atoms as O atoms but is only 11% hydrogen by mass because hydrogen atoms are so light. The percentages of all elements should sum to 100% (within rounding).',
    tex: '\\%\\,\\ce{H}\\ \\text{in}\\ \\ce{H2O} = \\frac{2(1.008)}{18.015} \\times 100\\% = 11.19\\%',
    see: ['molar-mass', 'empirical-formula', 'compound'],
  },
  {
    id: 'empirical-formula',
    term: 'Empirical Formula',
    aliases: ['simplest formula'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The formula giving the simplest whole-number ratio of atoms in a compound, such as $\\ce{CH2O}$ for glucose ($\\ce{C6H12O6}$).',
    long:
      'Recipe from [[percent-composition]]: (1) assume a 100 g sample, so percentages become grams; (2) convert each mass to moles with atomic masses; (3) divide every mole value by the smallest; (4) if the ratios are not close to whole numbers, multiply all by a small integer (a ratio of 1.5 → ×2, 1.33 → ×3, 1.25 → ×4).\n\n' +
      'Example: 40.0% C, 6.71% H, 53.3% O. Moles: $40.0/12.011 = 3.330$, $6.71/1.008 = 6.657$, $53.3/15.999 = 3.331$. Divide by 3.330: 1.000 : 1.999 : 1.000, so the empirical formula is $\\ce{CH2O}$. Glucose, formaldehyde and acetic acid all share it, so an empirical formula alone does not identify a compound; the [[molecular-formula]] does.\n\n' +
      'Pitfall: do not round ratios too aggressively. 1.5 is not "about 2"; it means multiply everything by 2. Ionic compounds are always written as empirical formulas, because a lattice has no discrete molecule.',
    tex: '\\ce{C}:\\ce{H}:\\ce{O} = \\frac{40.0}{12.011} : \\frac{6.71}{1.008} : \\frac{53.3}{15.999} = 3.330 : 6.657 : 3.331 \\approx 1:2:1 \\Rightarrow \\ce{CH2O}',
    see: ['molecular-formula', 'percent-composition', 'molar-mass'],
  },
  {
    id: 'molecular-formula',
    term: 'Molecular Formula',
    aliases: ['true formula', 'actual formula'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The formula giving the actual number of each kind of atom in one molecule, a whole-number multiple of the [[empirical-formula]]: $n = \\dfrac{\\text{molar mass}}{\\text{empirical formula mass}}$.',
    long:
      'Finding it needs one extra measurement: the compound\'s [[molar-mass]] (from a mass spectrometer, for instance). Divide that by the mass of one empirical unit to get $n$, then multiply every subscript by $n$.\n\n' +
      'Example: the empirical formula is $\\ce{CH2O}$ (30.026 g/mol) and the measured molar mass is 180.16 g/mol. Then $n = 180.16 / 30.026 = 6.00$, and the molecular formula is $\\ce{C6H12O6}$, glucose. Benzene ($\\ce{C6H6}$) and acetylene ($\\ce{C2H2}$) share the empirical formula $\\ce{CH}$ but are completely different substances.\n\n' +
      'Pitfall: $n$ must come out very close to a whole number; if it does not, recheck the empirical formula. Also, the molecular formula still does not show how atoms are connected; different compounds (isomers) can share one molecular formula, which organic chemistry deals with later.',
    tex: 'n = \\frac{180.16\\ \\text{g/mol}}{30.026\\ \\text{g/mol}} = 6 \\quad\\Rightarrow\\quad (\\ce{CH2O})_6 = \\ce{C6H12O6}',
    see: ['empirical-formula', 'molar-mass', 'percent-composition'],
  },
  {
    id: 'stoichiometry',
    term: 'Stoichiometry',
    aliases: ['mole map', 'reaction stoichiometry', 'mass-to-mass'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The quantitative relationships between amounts of reactants and products in a reaction, calculated from the coefficients of the balanced equation. The core path is grams A → moles A → moles B → grams B.',
    long:
      'A balanced equation is a recipe in moles, but balances measure grams, so every problem follows the same three-step "mole map": (1) convert the given mass to moles with its [[molar-mass]]; (2) convert to moles of the wanted substance with the [[mole-ratio]] from the coefficients; (3) convert to the wanted unit (grams with molar mass, particles with [[avogadros-number]], liters with [[molarity]] or the [[ideal-gas-law]]). It is [[dimensional-analysis]] with chemistry-specific conversion factors.\n\n' +
      'Example: how much water forms from 4.00 g of $\\ce{H2}$ with excess oxygen, $\\ce{2H2 + O2 -> 2H2O}$? $4.00\\ \\text{g} \\div 2.016\\ \\text{g/mol} = 1.984\\ \\text{mol}\\ \\ce{H2}$; times $\\frac{2\\ \\text{mol}\\ \\ce{H2O}}{2\\ \\text{mol}\\ \\ce{H2}}$ gives 1.984 mol $\\ce{H2O}$; times 18.015 g/mol gives 35.7 g.\n\n' +
      'Pitfall: the mole ratio links **moles**, never grams; you cannot go straight from grams of A to grams of B using the coefficients. Real-world connection: fuel-to-oxidizer ratios in engines and rockets, drug dosing and industrial batch recipes are all stoichiometry.',
    tex: '\\text{g A} \\xrightarrow{\\div M_A} \\text{mol A} \\xrightarrow{\\times \\frac{b}{a}} \\text{mol B} \\xrightarrow{\\times M_B} \\text{g B}',
    see: ['mole-ratio', 'molar-mass', 'limiting-reactant', 'dimensional-analysis'],
  },
  {
    id: 'mole-ratio',
    term: 'Mole Ratio',
    aliases: ['stoichiometric ratio', 'mole-to-mole ratio'],
    course: 'chem',
    category: 'The Mole',
    short:
      'A conversion factor between moles of any two substances in a reaction, taken from the coefficients of the balanced equation, such as $\\dfrac{2\\ \\text{mol}\\ \\ce{NH3}}{1\\ \\text{mol}\\ \\ce{N2}}$.',
    long:
      'From $\\ce{N2 + 3H2 -> 2NH3}$ you can write six mole ratios, including $\\frac{3\\ \\text{mol}\\ \\ce{H2}}{1\\ \\text{mol}\\ \\ce{N2}}$ and $\\frac{2\\ \\text{mol}\\ \\ce{NH3}}{3\\ \\text{mol}\\ \\ce{H2}}$. Choose the one with the unit you are cancelling on the bottom. This is the only step in [[stoichiometry]] where one substance turns into another.\n\n' +
      'The ratio works because coefficients count particles, and moles are particles counted in batches: if 1 molecule of $\\ce{N2}$ makes 2 of $\\ce{NH3}$, then 1 mol of $\\ce{N2}$ makes 2 mol of $\\ce{NH3}$.\n\n' +
      'Pitfalls: the equation must be balanced first; and mole ratios relate moles, not masses (1 g of $\\ce{N2}$ does not make 2 g of $\\ce{NH3}$). The mole ratio is also how you identify the [[limiting-reactant]].',
    tex: '\\ce{N2 + 3H2 -> 2NH3} \\quad\\Rightarrow\\quad \\frac{2\\ \\text{mol}\\ \\ce{NH3}}{3\\ \\text{mol}\\ \\ce{H2}}',
    see: ['stoichiometry', 'balanced-equation', 'conversion-factor', 'limiting-reactant'],
  },
  {
    id: 'limiting-reactant',
    term: 'Limiting Reactant',
    aliases: ['limiting reagent', 'limiting factor'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The reactant that is completely used up first in a reaction, and therefore determines the maximum amount of product that can form.',
    long:
      'Sandwich analogy: with 10 slices of bread and 3 slices of cheese (2 bread + 1 cheese per sandwich), you make only 3 sandwiches. Cheese is limiting, and 4 slices of bread are left over. Chemistry works the same way, except you must count in moles.\n\n' +
      'Method: convert each reactant to moles, divide each by its coefficient, and the smallest result is the limiting reactant. (Equivalently, compute how much product each reactant could make; the smaller amount wins.) Example: 50.0 g $\\ce{N2}$ (1.785 mol) and 10.0 g $\\ce{H2}$ (4.960 mol) in $\\ce{N2 + 3H2 -> 2NH3}$: $1.785/1 = 1.785$ versus $4.960/3 = 1.653$, so $\\ce{H2}$ is limiting, even though there is more of it in moles. Maximum $\\ce{NH3}$: $4.960 \\times \\frac{2}{3} = 3.307$ mol = 56.3 g.\n\n' +
      'Pitfall: the limiting reactant is not necessarily the one with the smaller mass or even the fewer moles; the coefficients matter. Real-world connection: engines are tuned to a fuel-to-air ratio; running "rich" makes oxygen limiting (more $\\ce{CO}$ and soot), running "lean" makes fuel limiting.',
    tex: '\\frac{n_{\\ce{N2}}}{1} = 1.785 \\;>\\; \\frac{n_{\\ce{H2}}}{3} = \\frac{4.960}{3} = 1.653 \\quad\\Rightarrow\\quad \\ce{H2}\\ \\text{limits}',
    see: ['excess-reactant', 'theoretical-yield', 'mole-ratio', 'stoichiometry'],
  },
  {
    id: 'excess-reactant',
    term: 'Excess Reactant',
    aliases: ['excess reagent', 'reactant in excess'],
    course: 'chem',
    category: 'The Mole',
    short:
      'A reactant present in more than the amount needed to react completely with the [[limiting-reactant]]; some of it is left over when the reaction stops.',
    long:
      'To find how much is left: use the moles of the limiting reactant and the [[mole-ratio]] to find how much excess reactant is consumed, then subtract from the starting amount. In the ammonia example (4.960 mol $\\ce{H2}$ limiting, 1.785 mol $\\ce{N2}$), $\\ce{N2}$ used $= 4.960/3 = 1.653$ mol, so $1.785 - 1.653 = 0.131$ mol (3.68 g) of $\\ce{N2}$ remains.\n\n' +
      'Chemists often deliberately use an excess of a cheap reactant (frequently oxygen from air, or water) to make sure an expensive one is fully converted.\n\n' +
      'Pitfall: leftover excess reactant is not the same as product; when you report how much product formed, base it only on the limiting reactant. A fuel-rich flame wastes fuel and makes carbon monoxide because oxygen is limiting and fuel is in excess.',
    see: ['limiting-reactant', 'mole-ratio', 'stoichiometry'],
  },
  {
    id: 'theoretical-yield',
    term: 'Theoretical Yield',
    aliases: ['maximum yield', 'actual yield'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The maximum amount of product that could form if the [[limiting-reactant]] reacted completely with no losses, calculated by [[stoichiometry]].',
    long:
      'It is a calculation, not a measurement: start from the limiting reactant, convert to moles, apply the [[mole-ratio]], convert to grams of product. The amount actually collected in the lab, the *actual yield*, is almost always less.\n\n' +
      'Real reactions fall short because of side reactions that make other products, reactions that do not go to completion, and product lost during transfer, filtering and purification. The comparison of actual to theoretical is the [[percent-yield]].\n\n' +
      'Pitfall: compute the theoretical yield from the limiting reactant, not from whichever reactant is given first. If you compute it from each reactant, the smaller answer is the right one.',
    tex: '\\text{theoretical yield} = n_{\\text{limiting}} \\times \\frac{\\text{coef}_{\\text{product}}}{\\text{coef}_{\\text{limiting}}} \\times M_{\\text{product}}',
    see: ['percent-yield', 'limiting-reactant', 'stoichiometry', 'product'],
  },
  {
    id: 'percent-yield',
    term: 'Percent Yield',
    aliases: ['yield', 'reaction efficiency'],
    course: 'chem',
    category: 'The Mole',
    short:
      'The actual yield as a percentage of the theoretical yield: $\\text{percent yield} = \\dfrac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$.',
    long:
      'It measures how efficient a reaction and its workup were. If the [[theoretical-yield]] of ammonia is 56.3 g and you collect 45.0 g, the percent yield is $45.0 / 56.3 \\times 100\\% = 79.9\\%$. Both yields must be in the same units (grams, or moles).\n\n' +
      'In multistep syntheses the yields multiply: five steps at 90% each give only $0.9^5 \\approx 59\\%$ overall, which is why industrial and pharmaceutical chemists fight for every percent.\n\n' +
      'Pitfall: a percent yield above 100% does not mean you made extra matter; it signals an error, usually a product that is still wet with solvent or contaminated with impurities. Swapping the fraction upside down is the other common mistake; actual goes on top.',
    tex: '\\text{percent yield} = \\frac{45.0\\ \\text{g}}{56.3\\ \\text{g}} \\times 100\\% = 79.9\\%',
    see: ['theoretical-yield', 'limiting-reactant', 'stoichiometry'],
  },

  // ------------------------------------------------------------------
  // Solutions
  // ------------------------------------------------------------------
  {
    id: 'chemical-solution',
    term: 'Solution (Chemistry)',
    aliases: ['solution', 'aqueous solution', 'homogeneous mixture', '(aq)'],
    course: 'chem',
    category: 'Solutions',
    short:
      'A homogeneous mixture of two or more substances, in which a [[solute]] is dissolved uniformly in a [[solvent]]. When water is the solvent it is an *aqueous* solution, marked (aq).',
    long:
      'In a solution the solute is dispersed down to individual molecules or ions, so it never settles out and cannot be filtered out. Salt water, sugar water, vinegar and soda are aqueous solutions; air is a gaseous solution; brass and steel are solid solutions (alloys).\n\n' +
      'Dissolving happens when solute particles are attracted to solvent particles about as strongly as to each other, which is why "like dissolves like": [[polar-molecule|polar]] water dissolves ionic and polar solutes, while nonpolar solvents dissolve oils. Concentration is usually expressed as [[molarity]].\n\n' +
      'Pitfall: in algebra a "[[solution]]" is a value that satisfies an equation; in chemistry it is a uniform mixture, which is why this term has its own entry. Also, a solution can be colored (copper sulfate is blue) and still be a solution; what matters is that it is clear and uniform, not that it is colorless.',
    tex: '\\ce{NaCl(s) ->[H2O] Na+(aq) + Cl-(aq)}',
    see: ['solute', 'solvent', 'molarity', 'mixture'],
  },
  {
    id: 'solute',
    term: 'Solute',
    aliases: ['dissolved substance'],
    course: 'chem',
    category: 'Solutions',
    short: 'The substance that is dissolved in a [[chemical-solution]], usually the component present in the smaller amount.',
    long:
      'In salt water, salt is the solute; in a carbonated drink, $\\ce{CO2}$ gas and sugar are solutes. When an ionic solute dissolves, its lattice comes apart and each ion is surrounded by water molecules (the negative oxygen ends of water face cations, the positive hydrogen ends face anions).\n\n' +
      'The amount of solute in a given volume of solution is the concentration, usually given as [[molarity]]. *Solubility* is the maximum amount that can dissolve at a given temperature; most solids dissolve better in hot water, while gases dissolve better in cold water (warm soda goes flat faster).\n\n' +
      'Pitfall: dissolving is a physical change; the solute is still there and can be recovered by evaporating the [[solvent]]. Real-world connection: divers must ascend slowly because nitrogen dissolves in blood under pressure and can form bubbles if the pressure drops too quickly (decompression sickness).',
    see: ['solvent', 'chemical-solution', 'molarity'],
  },
  {
    id: 'solvent',
    term: 'Solvent',
    aliases: ['dissolving medium', 'universal solvent'],
    course: 'chem',
    category: 'Solutions',
    short: 'The substance that does the dissolving in a [[chemical-solution]], usually the component present in the larger amount. Water is the most common solvent.',
    long:
      'Water is called the "universal solvent" because its strongly [[polar-molecule|polar]], hydrogen-bonding molecules can surround and stabilize ions and polar molecules. Other common solvents include ethanol, acetone (nail-polish remover) and hexane (a nonpolar solvent for oils).\n\n' +
      'Choosing a solvent is a matter of matching polarity to the [[solute]]: water will not remove grease, but a nonpolar solvent or soap will. When preparing a solution of a given [[molarity]], you add solvent until the total *solution* volume reaches the mark on a volumetric flask.\n\n' +
      'Pitfall: in molarity the denominator is liters of **solution**, not liters of solvent added. Real-world connection: decontamination procedures choose solvents and solutions that dissolve or chemically break down the contaminant rather than just spreading it around.',
    see: ['solute', 'chemical-solution', 'polar-molecule'],
  },
  {
    id: 'molarity',
    term: 'Molarity',
    aliases: ['molar concentration', 'M', 'concentration', 'mol/L'],
    course: 'chem',
    category: 'Solutions',
    short:
      'Concentration expressed as moles of solute per liter of solution: $M = \\dfrac{\\text{mol solute}}{\\text{L solution}}$, with unit M (read "molar").',
    long:
      'A 1.00 M $\\ce{NaCl}$ solution has 1.00 mol (58.44 g) of salt in every liter of solution. Molarity is a [[conversion-factor]] between volume of solution and moles of solute: $n = M \\times V$. Example: 5.844 g of $\\ce{NaCl}$ is 0.1000 mol; dissolved to make 250. mL (0.250 L) of solution, the concentration is $0.1000 / 0.250 = 0.400$ M. Square brackets mean "molar concentration of": $[\\ce{H+}] = 0.010$ M.\n\n' +
      'Molarity puts solutions into [[stoichiometry]]: liters of solution → moles → mole ratio → whatever you need. It is also the input to [[dilution]] and [[ph]] calculations.\n\n' +
      'Pitfalls: convert mL to L before dividing; and the volume is of the final *solution*, so you dissolve the solute and then add water up to the mark, rather than adding the solute to a full liter of water. Real-world connection: medical saline is 0.9% $\\ce{NaCl}$ by mass per volume, about 0.154 M, chosen to match the salt concentration of blood.',
    tex: 'M = \\frac{0.1000\\ \\text{mol}\\ \\ce{NaCl}}{0.250\\ \\text{L}} = 0.400\\ \\text{M}',
    see: ['dilution', 'solute', 'chemical-solution', 'stoichiometry'],
  },
  {
    id: 'dilution',
    term: 'Dilution',
    aliases: ['diluting', 'M1V1 = M2V2', 'stock solution'],
    course: 'chem',
    category: 'Solutions',
    short:
      'Lowering a solution\'s concentration by adding solvent. Moles of solute do not change, so $M_1V_1 = M_2V_2$.',
    long:
      'Adding water spreads the same solute through a bigger volume. Since moles $= M \\times V$ and the moles are unchanged, the product $MV$ stays constant. To make 250. mL of 0.500 M $\\ce{HCl}$ from a 12.0 M stock: $V_1 = \\frac{(0.500)(250.)}{12.0} = 10.4$ mL of stock, then add water up to a total volume of 250. mL.\n\n' +
      'This is an inverse proportion: doubling the volume halves the concentration. Any volume unit works as long as $V_1$ and $V_2$ use the same one.\n\n' +
      'Pitfalls: $V_2$ is the **final total** volume, not the volume of water added (here you add about 240 mL of water, not 250 mL). Safety rule for concentrated acids: always add acid to water, never water to acid, because the heat released can make a small amount of water boil and spatter acid.',
    tex: 'M_1V_1 = M_2V_2 \\quad\\Rightarrow\\quad V_1 = \\frac{(0.500\\ \\text{M})(250.\\ \\text{mL})}{12.0\\ \\text{M}} = 10.4\\ \\text{mL}',
    see: ['molarity', 'chemical-solution', 'solvent'],
  },

  // ------------------------------------------------------------------
  // Gases
  // ------------------------------------------------------------------
  {
    id: 'pressure',
    term: 'Pressure',
    aliases: ['gas pressure', 'atmospheric pressure', 'atm', 'mmHg', 'torr', 'pascal', 'kPa', 'gauge pressure'],
    course: 'chem',
    category: 'Gases',
    short:
      'Force per unit area, $P = F/A$. Gas pressure comes from countless gas particles colliding with the container walls. $1\\ \\text{atm} = 760\\ \\text{mmHg} = 760\\ \\text{torr} = 101.325\\ \\text{kPa} \\approx 14.7\\ \\text{psi}$.',
    long:
      'Each collision of a gas particle with a wall gives it a tiny push; billions of collisions per second add up to a steady force. More particles, faster particles (higher temperature) or a smaller container (more frequent hits) all raise the pressure, which is the intuition behind every gas law.\n\n' +
      'Atmospheric pressure is the weight of the air column above you: about 1 atm at sea level, lower at altitude (roughly 0.83 atm at 1,500 m and about a third of an atmosphere at the top of Everest), which is why water boils at a lower temperature in the mountains. Under water it rises by about 1 atm for every 10 m (33 ft) of seawater, so a diver at 10 m feels about 2 atm total.\n\n' +
      'Pitfall: a tire gauge reads *gauge* pressure, the amount above atmospheric; the gas laws need *absolute* pressure (gauge + atmospheric). Convert all pressures to the same unit before using a gas law.',
    tex: '1\\ \\text{atm} = 760\\ \\text{mmHg} = 760\\ \\text{torr} = 101.325\\ \\text{kPa} \\approx 14.7\\ \\text{psi}',
    see: ['boyles-law', 'ideal-gas-law', 'stp', 'kelvin'],
  },
  {
    id: 'kelvin',
    term: 'Kelvin Temperature',
    aliases: ['kelvin', 'K', 'absolute temperature', 'absolute zero', 'Celsius', 'Fahrenheit'],
    course: 'chem',
    category: 'Gases',
    short:
      'The absolute temperature scale, starting at absolute zero (0 K, the lowest possible temperature), with steps the same size as Celsius degrees: $T_\\text{K} = T_{\\text{°C}} + 273.15$.',
    long:
      'Temperature measures the average kinetic energy of particles. On the Kelvin scale zero means essentially no thermal motion, so temperatures are directly proportional to that energy: 200 K really is twice as "energetic" as 100 K, while 20 °C is not twice as hot as 10 °C. Water freezes at 273.15 K and boils at 373.15 K (at 1 atm). Fahrenheit converts with $T_{\\text{°F}} = \\frac{9}{5}T_{\\text{°C}} + 32$; body temperature 98.6 °F is 37.0 °C or 310.2 K.\n\n' +
      'Because gas volume and pressure are proportional to absolute temperature, every gas-law calculation must use kelvins. [[charles-law|Charles\'s law]] actually revealed absolute zero: extrapolating volume-versus-temperature lines for many gases to zero volume always lands near −273 °C.\n\n' +
      'Pitfalls: using Celsius in $V_1/T_1 = V_2/T_2$ can give nonsense (dividing by 0 °C, or negative volumes). Kelvin temperatures are written without a degree sign (300 K, not 300 °K), and they are never negative.',
    tex: 'T_\\text{K} = T_{\\text{°C}} + 273.15, \\qquad 25\\ \\text{°C} = 298.15\\ \\text{K}',
    see: ['charles-law', 'ideal-gas-law', 'states-of-matter', 'si-units'],
  },
  {
    id: 'boyles-law',
    term: "Boyle's Law",
    aliases: ['Boyle law', 'pressure-volume law', 'P1V1 = P2V2'],
    course: 'chem',
    category: 'Gases',
    short:
      'At constant temperature and amount of gas, pressure and volume are inversely proportional: $PV = \\text{constant}$, so $P_1V_1 = P_2V_2$.',
    long:
      'Squeeze a gas into half the volume and the particles hit the walls twice as often, so the pressure doubles. The graph of $P$ against $V$ is a hyperbola ($P = k/V$), and $P$ against $1/V$ is a straight line through the origin, the same inverse proportion you know from algebra.\n\n' +
      'Example: 2.0 L of air at 1.0 atm compressed to 4.0 atm (same temperature) occupies $V_2 = \\frac{(1.0)(2.0)}{4.0} = 0.50$ L. Syringes, bicycle pumps and breathing all work this way: your diaphragm enlarges your chest volume, the pressure inside drops below atmospheric, and air flows in.\n\n' +
      'Pitfall: Boyle\'s law needs constant temperature and constant moles of gas. Real-world connection: it is the most important law in diving. A diver who fills their lungs at 10 m (2 atm) and ascends to the surface (1 atm) while holding their breath would have that air try to double in volume, which can rupture the lungs, so divers are trained to breathe continuously and never hold their breath while ascending.',
    tex: 'P_1V_1 = P_2V_2 \\quad\\Rightarrow\\quad V_2 = \\frac{(1.0\\ \\text{atm})(2.0\\ \\text{L})}{4.0\\ \\text{atm}} = 0.50\\ \\text{L}',
    see: ['charles-law', 'ideal-gas-law', 'pressure'],
  },
  {
    id: 'charles-law',
    term: "Charles's Law",
    aliases: ["Charles' law", 'Charles law', 'volume-temperature law', 'V1/T1 = V2/T2'],
    course: 'chem',
    category: 'Gases',
    short:
      'At constant pressure and amount of gas, volume is directly proportional to Kelvin temperature: $V/T = \\text{constant}$, so $\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$.',
    long:
      'Heat a gas and its particles move faster, hitting the walls harder and more often; to keep the pressure constant, the container must expand. The graph of $V$ against $T$ (in kelvins) is a straight line through the origin, and extrapolating it to $V = 0$ is how absolute zero was first located near −273 °C.\n\n' +
      'Example: a 1.50 L balloon at 25 °C (298 K) is warmed to 100 °C (373 K) at constant pressure: $V_2 = 1.50 \\times \\frac{373.15}{298.15} = 1.88$ L. Hot-air balloons rise because heated air expands and becomes less dense than the cooler air around it; a balloon dunked in liquid nitrogen shrivels and then reinflates as it warms.\n\n' +
      'Pitfall: temperatures **must** be in [[kelvin]]. Doubling a temperature from 25 °C to 50 °C does not double the volume; in kelvins it only goes from 298 K to 323 K, an increase of about 8%.',
    tex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\quad\\Rightarrow\\quad V_2 = 1.50\\ \\text{L} \\times \\frac{373.15\\ \\text{K}}{298.15\\ \\text{K}} = 1.88\\ \\text{L}',
    see: ['boyles-law', 'kelvin', 'ideal-gas-law'],
  },
  {
    id: 'ideal-gas-law',
    term: 'Ideal Gas Law',
    aliases: ['PV = nRT', 'gas constant', 'R', 'ideal gas', 'combined gas law'],
    course: 'chem',
    category: 'Gases',
    short:
      '$PV = nRT$: the pressure, volume, amount (moles) and Kelvin temperature of a gas are related through the gas constant $R = 0.08206\\ \\text{L·atm/(mol·K)} = 8.314\\ \\text{J/(mol·K)}$.',
    long:
      'It combines all the simple gas laws: [[boyles-law|Boyle]] ($P \\propto 1/V$), [[charles-law|Charles]] ($V \\propto T$), Gay-Lussac ($P \\propto T$) and Avogadro ($V \\propto n$). When $n$ is fixed and conditions change, it gives the combined gas law $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$. Example: how many moles in a 10.0 L tank at 2.00 atm and 300. K? $n = \\frac{PV}{RT} = \\frac{(2.00)(10.0)}{(0.08206)(300.)} = 0.812$ mol.\n\n' +
      'An *ideal* gas assumes particles have no volume and do not attract each other. Real gases behave nearly ideally at ordinary temperatures and pressures; deviations grow at high pressure and low temperature, which General Chemistry handles with corrections. The law also explains why gases at the same $T$ and $P$ have the same volume per mole, regardless of identity.\n\n' +
      'Pitfall: the units of $R$ dictate everything else. With $R = 0.08206$, use atm, L, mol and K; with 8.314, use kPa and L (or Pa and $\\text{m}^3$). Programming connection: a particle simulation of bouncing balls in a box reproduces $PV = nRT$ if you measure the momentum delivered to the walls.',
    tex: 'PV = nRT, \\qquad R = \\pu{0.08206 L atm K-1 mol-1} = \\pu{8.314 J K-1 mol-1}',
    see: ['boyles-law', 'charles-law', 'stp', 'kelvin'],
  },
  {
    id: 'stp',
    term: 'STP',
    aliases: ['standard temperature and pressure', 'molar volume', '22.4 L'],
    course: 'chem',
    category: 'Gases',
    short:
      'Standard temperature and pressure: 0 °C (273.15 K) and 1 atm. At STP one mole of an ideal gas occupies about 22.4 L (the *molar volume*).',
    long:
      'STP gives a common reference so gas volumes can be compared. From the [[ideal-gas-law]], $V = \\frac{nRT}{P} = \\frac{(1)(0.08206)(273.15)}{1} = 22.41$ L for one mole of *any* ideal gas, which makes 22.4 L/mol a quick [[conversion-factor]] between liters of gas and moles at STP.\n\n' +
      'Note that IUPAC now defines standard pressure as 1 bar (100 kPa, slightly less than 1 atm), which gives a molar volume of 22.71 L/mol. Many high-school and introductory texts still use 1 atm and 22.4 L; check which convention a problem uses.\n\n' +
      'Pitfall: STP is not room conditions. At 25 °C and 1 atm a mole of gas occupies about 24.5 L, so using 22.4 L/mol for a room-temperature problem introduces a 9% error. When the conditions are not STP, use $PV = nRT$ directly.',
    tex: 'V_m = \\frac{RT}{P} = \\frac{(0.08206)(273.15\\ \\text{K})}{1\\ \\text{atm}} = 22.4\\ \\text{L/mol}',
    see: ['ideal-gas-law', 'pressure', 'kelvin', 'mole'],
  },

  // ------------------------------------------------------------------
  // Acids and Bases
  // ------------------------------------------------------------------
  {
    id: 'acid',
    term: 'Acid',
    aliases: ['acids', 'strong acid', 'weak acid', 'proton donor', 'Arrhenius acid', 'Brønsted–Lowry acid'],
    course: 'chem',
    category: 'Acids and Bases',
    short:
      'A substance that donates hydrogen ions ($\\ce{H+}$, protons). In water an acid raises the concentration of hydronium ions, $\\ce{H3O+}$, and lowers the [[ph]] below 7.',
    long:
      'Two definitions are in common use. **Arrhenius:** an acid produces $\\ce{H+}$ in water ($\\ce{HCl -> H+ + Cl-}$). **Brønsted–Lowry:** an acid is a proton donor, which also covers reactions outside water ($\\ce{HCl + H2O -> H3O+ + Cl-}$). A bare $\\ce{H+}$ never floats free in water; it attaches to a water molecule as $\\ce{H3O+}$, but $\\ce{H+}$ is common shorthand.\n\n' +
      '*Strong* acids ionize completely in water: $\\ce{HCl}$, $\\ce{HBr}$, $\\ce{HI}$, $\\ce{HNO3}$, $\\ce{H2SO4}$ and $\\ce{HClO4}$. *Weak* acids ionize only partly, such as acetic acid (vinegar) and carbonic acid (soda). Acids taste sour, turn blue litmus red and react with many metals to release hydrogen gas.\n\n' +
      'Pitfall: strong and concentrated are different ideas. Strength is how completely the acid ionizes; concentration is how much is dissolved. Dilute $\\ce{HCl}$ is still a strong acid. Everyday connections: stomach acid ($\\ce{HCl}$, pH about 1.5–3.5) and car batteries (sulfuric acid).',
    tex: '\\ce{HCl(aq) + H2O(l) -> H3O+(aq) + Cl-(aq)}',
    see: ['base-chem', 'ph', 'neutralization', 'ion'],
  },
  {
    id: 'base-chem',
    term: 'Base (Chemistry)',
    aliases: ['bases', 'alkali', 'alkaline', 'strong base', 'weak base', 'proton acceptor', 'Arrhenius base'],
    course: 'chem',
    category: 'Acids and Bases',
    short:
      'A substance that accepts hydrogen ions ($\\ce{H+}$) or produces hydroxide ions ($\\ce{OH-}$) in water, raising the [[ph]] above 7.',
    long:
      '**Arrhenius:** a base produces $\\ce{OH-}$ in water ($\\ce{NaOH -> Na+ + OH-}$). **Brønsted–Lowry:** a base is a proton acceptor, which includes ammonia, whose [[lone-pair]] grabs an $\\ce{H+}$ from water: $\\ce{NH3 + H2O <=> NH4+ + OH-}$. Water-soluble bases are also called *alkalis*.\n\n' +
      'Strong bases dissociate completely: the group 1 hydroxides ($\\ce{NaOH}$, $\\ce{KOH}$) and the heavier group 2 hydroxides ($\\ce{Ca(OH)2}$, $\\ce{Ba(OH)2}$). Weak bases, such as ammonia and baking soda ($\\ce{NaHCO3}$), react only partly. Bases taste bitter, feel slippery (they react with skin oils), and turn red litmus blue.\n\n' +
      'Pitfall: this is not the [[base]] of an exponent or logarithm. Concentrated bases are as dangerous as acids; lye (sodium hydroxide) in drain cleaner causes severe burns and eye damage. Everyday connections: antacids, soap, household ammonia and baking soda.',
    tex: '\\ce{NH3(aq) + H2O(l) <=> NH4+(aq) + OH-(aq)}',
    see: ['acid', 'ph', 'neutralization', 'lone-pair'],
  },
  {
    id: 'ph',
    term: 'pH',
    aliases: ['pH scale', 'pOH', 'Kw', 'ion product of water', 'hydronium concentration'],
    course: 'chem',
    category: 'Acids and Bases',
    short:
      'A logarithmic measure of acidity: $\\text{pH} = -\\log_{10}[\\ce{H3O+}]$. At 25 °C, pH 7 is neutral, below 7 is acidic and above 7 is basic.',
    long:
      'Hydronium concentrations range over many powers of ten, so a [[common-logarithm]] compresses them to a convenient 0–14 scale. Each pH unit is a factor of 10: pH 3 is ten times more acidic than pH 4 and a thousand times more than pH 6. Going back: $[\\ce{H3O+}] = 10^{-\\text{pH}}$. Example: 0.010 M $\\ce{HCl}$ (a strong acid) has $[\\ce{H3O+}] = 0.010$ M, so pH $= -\\log(0.010) = 2.00$.\n\n' +
      'Water itself ionizes slightly: $K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14}$ at 25 °C. Taking $-\\log$ of both sides gives $\\text{pH} + \\text{pOH} = 14.00$, where $\\text{pOH} = -\\log[\\ce{OH-}]$. So 0.0050 M $\\ce{NaOH}$ has pOH 2.30 and pH 11.70.\n\n' +
      'Pitfalls: the minus sign means *higher* $[\\ce{H3O+}]$ gives *lower* pH. In pH, only the digits after the decimal point are significant, and their number equals the significant figures in the concentration (0.010 M, 2 sig figs → pH 2.00). Everyday values: battery acid ≈ 0–1, lemon juice ≈ 2, coffee ≈ 5, pure water 7, blood 7.35–7.45, bleach ≈ 12–13.',
    tex: '\\text{pH} = -\\log[\\ce{H3O+}], \\qquad \\text{pH} + \\text{pOH} = 14.00, \\qquad K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14}',
    see: ['acid', 'base-chem', 'logarithm', 'common-logarithm'],
  },
  {
    id: 'neutralization',
    term: 'Neutralization',
    aliases: ['neutralization reaction', 'acid-base reaction', 'salt', 'titration'],
    course: 'chem',
    category: 'Acids and Bases',
    short:
      'The reaction of an acid with a base to form water and a salt (an ionic compound): $\\ce{HCl + NaOH -> NaCl + H2O}$. The essential change is $\\ce{H+ + OH- -> H2O}$.',
    long:
      'The $\\ce{H+}$ from the acid and the $\\ce{OH-}$ from the base combine into water, and the leftover ions form a salt. It is a [[double-replacement]] reaction driven by forming water, and it releases heat. When equal moles of a strong acid and a strong base (in the 1 : 1 case) react, the result is neutral, pH 7.\n\n' +
      '*Titration* uses neutralization to measure an unknown concentration: add a base of known [[molarity]] from a buret until an indicator changes color, then use moles $= MV$ and the [[mole-ratio]]. For a 1 : 1 acid and base, $M_aV_a = M_bV_b$ at the equivalence point.\n\n' +
      'Pitfall: "salt" in chemistry means any ionic product of an acid and a base, not just table salt; $\\ce{H2SO4 + 2KOH -> K2SO4 + 2H2O}$ makes potassium sulfate. Diprotic acids like $\\ce{H2SO4}$ need twice the base. Real-world connections: antacids neutralize excess stomach acid, and acid spills are treated with a weak base such as sodium bicarbonate rather than a strong one, to avoid a violent, hot reaction.',
    tex: '\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)} \\qquad \\ce{H+(aq) + OH-(aq) -> H2O(l)}',
    see: ['acid', 'base-chem', 'ph', 'double-replacement'],
  },
];
