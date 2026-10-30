import type { CheatSheet } from '../types';

export const chemCheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------ Measurement
  {
    id: 'chem-measurement',
    title: 'Measurement & Units',
    course: 'chem',
    icon: '📏',
    description: 'SI units and prefixes, significant-figure rules, common conversions, dimensional analysis, density and temperature scales.',
    sections: [
      {
        title: 'SI base and derived units',
        items: [
          { label: 'Base units chemists use', tex: '\\text{m (length)},\\ \\text{kg (mass)},\\ \\text{s (time)},\\ \\text{K (temperature)},\\ \\text{mol (amount)}', text: 'The base unit of mass is the kilogram, not the gram.' },
          { label: 'Volume', tex: '1\\ \\text{L} = 1\\ \\text{dm}^3 = 1000\\ \\text{mL}, \\qquad 1\\ \\text{mL} = 1\\ \\text{cm}^3', text: 'The liter is not an SI base unit but is accepted everywhere in chemistry.' },
          { label: 'Energy', tex: '1\\ \\text{cal} = 4.184\\ \\text{J}\\ \\text{(exact)}, \\qquad 1\\ \\text{Cal (food)} = 1\\ \\text{kcal} = 4184\\ \\text{J}' },
        ],
      },
      {
        title: 'Metric prefixes',
        items: [
          { label: 'Large', tex: '\\text{giga (G)} = 10^{9}, \\quad \\text{mega (M)} = 10^{6}, \\quad \\text{kilo (k)} = 10^{3}' },
          { label: 'Small', tex: '\\text{deci (d)} = 10^{-1}, \\quad \\text{centi (c)} = 10^{-2}, \\quad \\text{milli (m)} = 10^{-3}' },
          { label: 'Very small', tex: '\\text{micro } (\\mu) = 10^{-6}, \\quad \\text{nano (n)} = 10^{-9}, \\quad \\text{pico (p)} = 10^{-12}' },
          { label: 'Using a prefix as a factor', tex: '1\\ \\text{km} = 10^{3}\\ \\text{m}, \\qquad 1\\ \\text{mg} = 10^{-3}\\ \\text{g}, \\qquad 450\\ \\text{nm} = 4.50 \\times 10^{-7}\\ \\text{m}', text: 'Case matters: M (mega) vs m (milli).' },
        ],
      },
      {
        title: 'Significant figures',
        items: [
          { label: 'Counting rules', text: 'Nonzero digits always count. Zeros **between** nonzeros count (205 → 3). **Leading** zeros never count (0.0045 → 2). **Trailing** zeros count only with a decimal point (2.50 → 3; 250. → 3; 250 is ambiguous).' },
          { label: 'Remove ambiguity', tex: '250 \\to 2.5 \\times 10^{2}\\ (2) \\quad\\text{or}\\quad 2.50 \\times 10^{2}\\ (3)', text: 'In scientific notation every digit shown is significant.' },
          { label: 'Multiply / divide', tex: '2.0\\ \\text{cm} \\times 3.456\\ \\text{cm} = 6.9\\ \\text{cm}^2', text: 'Answer has the **fewest significant figures** of any input.' },
          { label: 'Add / subtract', tex: '12.11\\ \\text{g} + 0.3\\ \\text{g} = 12.4\\ \\text{g}', text: 'Answer has the **fewest decimal places** of any input.' },
          { label: 'Exact numbers', text: 'Counted items and defined conversions (1 in = 2.54 cm, 1 km = 1000 m, coefficients in equations) have unlimited significant figures and never limit the answer.' },
          { label: 'Logarithms (pH)', tex: '[\\ce{H3O+}] = 0.010\\ \\text{M}\\ (2) \\;\\Rightarrow\\; \\text{pH} = 2.00\\ (2 \\text{ decimals})', text: 'Decimal places in the log = significant figures in the number.' },
          { label: 'Rounding', text: 'Keep extra digits through a calculation and round once at the end.' },
        ],
      },
      {
        title: 'Common conversions',
        items: [
          { label: 'Length', tex: '1\\ \\text{in} = 2.54\\ \\text{cm}\\ \\text{(exact)}, \\qquad 1\\ \\text{mi} = 1.609\\ \\text{km}, \\qquad 1\\ \\text{m} = 3.281\\ \\text{ft}' },
          { label: 'Mass', tex: '1\\ \\text{lb} = 453.59\\ \\text{g}, \\qquad 1\\ \\text{kg} = 2.205\\ \\text{lb}' },
          { label: 'Volume', tex: '1\\ \\text{gal} = 3.785\\ \\text{L}, \\qquad 1\\ \\text{L} = 1.057\\ \\text{qt}' },
          { label: 'Squared and cubed units', tex: '1\\ \\text{in}^3 = (2.54\\ \\text{cm})^3 = 16.39\\ \\text{cm}^3, \\qquad 1\\ \\text{m}^3 = 10^{6}\\ \\text{cm}^3 = 1000\\ \\text{L}', text: 'Raise the whole conversion factor to the power, number and unit.' },
        ],
      },
      {
        title: 'Dimensional analysis',
        items: [
          { label: 'Method', text: 'Multiply by conversion factors (fractions equal to 1) arranged so each unwanted unit is in a denominator and cancels. Check the final unit before calculating.' },
          { label: 'Example: lb → g', tex: '3.50\\ \\cancel{\\text{lb}} \\times \\frac{453.59\\ \\text{g}}{1\\ \\cancel{\\text{lb}}} = 1.59 \\times 10^{3}\\ \\text{g}' },
          { label: 'Example: chained factors', tex: '65\\ \\frac{\\cancel{\\text{mi}}}{\\cancel{\\text{h}}} \\times \\frac{1609.344\\ \\text{m}}{1\\ \\cancel{\\text{mi}}} \\times \\frac{1\\ \\cancel{\\text{h}}}{3600\\ \\text{s}} = 29\\ \\text{m/s}' },
        ],
      },
      {
        title: 'Density',
        items: [
          { label: 'Definition', tex: '\\rho = \\frac{m}{V}, \\qquad m = \\rho V, \\qquad V = \\frac{m}{\\rho}' },
          { label: 'Reference values', tex: '\\ce{H2O(l)} \\approx 1.00\\ \\text{g/mL}, \\quad \\ce{H2O(s)}\\ 0.917\\ \\text{g/cm}^3, \\quad \\ce{Al}\\ 2.70\\ \\text{g/cm}^3, \\quad \\text{air} \\approx 1.2\\ \\text{g/L}' },
          { label: 'Example', tex: 'V = \\frac{10.0\\ \\cancel{\\text{g}}}{2.70\\ \\cancel{\\text{g}}/\\text{cm}^3} = 3.70\\ \\text{cm}^3\\ \\ce{Al}' },
          { label: 'Volume by displacement', text: 'Irregular solid: volume = rise in water level in a graduated cylinder (1 mL = 1 cm³).' },
          { label: 'Floating', text: 'An object floats in a fluid that is denser than it is.' },
        ],
      },
      {
        title: 'Temperature',
        items: [
          { label: 'Celsius ↔ Kelvin', tex: 'T_\\text{K} = T_{\\text{°C}} + 273.15', text: 'No degree sign on kelvins; never negative. Always use K in gas laws.' },
          { label: 'Celsius ↔ Fahrenheit', tex: 'T_{\\text{°F}} = \\tfrac{9}{5}\\,T_{\\text{°C}} + 32, \\qquad T_{\\text{°C}} = \\tfrac{5}{9}\\,(T_{\\text{°F}} - 32)' },
          { label: 'Landmarks', tex: '\\begin{array}{lccc} & \\text{°F} & \\text{°C} & \\text{K} \\\\ \\text{water freezes} & 32 & 0 & 273.15 \\\\ \\text{body} & 98.6 & 37.0 & 310.15 \\\\ \\text{water boils (1 atm)} & 212 & 100 & 373.15 \\\\ \\text{absolute zero} & -459.67 & -273.15 & 0 \\end{array}' },
          { label: 'Equal point', tex: '-40\\ \\text{°F} = -40\\ \\text{°C}' },
        ],
      },
      {
        title: 'Accuracy and error',
        items: [
          { label: 'Accuracy vs precision', text: '**Accuracy:** close to the true value. **Precision:** repeated results close to each other (reflected in significant figures).' },
          { label: 'Percent error', tex: '\\%\\ \\text{error} = \\frac{|\\text{measured} - \\text{accepted}|}{\\text{accepted}} \\times 100\\%', text: 'Example: measured 2.65 g/cm³ for Al (2.70) gives 1.9% error.' },
        ],
      },
    ],
  },

  // ---------------------------------------------------- Atoms & periodic table
  {
    id: 'chem-atoms-periodic-table',
    title: 'Atoms & the Periodic Table',
    course: 'chem',
    icon: '⚛️',
    description: 'Subatomic particles, isotope notation, average atomic mass, electron configurations and periodic trends.',
    sections: [
      {
        title: 'Subatomic particles',
        items: [
          { label: 'Proton', tex: 'p^+:\\ \\text{charge } +1,\\ \\text{mass} \\approx 1.0073\\ \\text{u},\\ \\text{in nucleus}', text: 'Number of protons = atomic number $Z$ = identity of the element.' },
          { label: 'Neutron', tex: 'n^0:\\ \\text{charge } 0,\\ \\text{mass} \\approx 1.0087\\ \\text{u},\\ \\text{in nucleus}', text: 'Varying the neutron count gives isotopes.' },
          { label: 'Electron', tex: 'e^-:\\ \\text{charge } -1,\\ \\text{mass} \\approx 0.000549\\ \\text{u}\\ \\left(\\tfrac{1}{1836}\\,m_p\\right),\\ \\text{outside nucleus}', text: 'Electrons do the bonding and reacting.' },
          { label: 'Atomic mass unit', tex: '1\\ \\text{u} = \\tfrac{1}{12}\\,m\\left(\\ce{^{12}C}\\right) = 1.6605 \\times 10^{-27}\\ \\text{kg}' },
        ],
      },
      {
        title: 'Isotope notation and counting',
        items: [
          { label: 'Notation', tex: '\\ce{^{A}_{Z}X^{charge}}, \\qquad A = Z + N', text: '$A$ = mass number (protons + neutrons), $Z$ = atomic number, $N$ = neutrons. Also written as name-mass: carbon-14.' },
          { label: 'Counting', tex: '\\#p^+ = Z, \\qquad \\#n^0 = A - Z, \\qquad \\#e^- = Z - \\text{charge}' },
          { label: 'Example', tex: '\\ce{^{37}_{17}Cl-}:\\ 17\\ p^+,\\ 20\\ n^0,\\ 18\\ e^-' },
          { label: 'Example', tex: '\\ce{^{56}_{26}Fe^3+}:\\ 26\\ p^+,\\ 30\\ n^0,\\ 23\\ e^-' },
          { label: 'Isotope vs ion', text: 'Isotopes differ in **neutrons**; ions differ in **electrons**; protons never change in a chemical reaction.' },
        ],
      },
      {
        title: 'Average atomic mass',
        items: [
          { label: 'Weighted average', tex: '\\bar{m} = \\sum_i (\\text{isotope mass})_i \\times (\\text{fractional abundance})_i', text: 'Convert percents to decimals; the result lies closer to the most abundant isotope.' },
          { label: 'Chlorine', tex: '(34.969)(0.7576) + (36.966)(0.2424) = 35.45\\ \\text{u}' },
          { label: 'Copper', tex: '(62.930)(0.6915) + (64.928)(0.3085) = 63.55\\ \\text{u}' },
          { label: 'Same number, two meanings', text: 'Average mass of one atom in u = mass of one mole of atoms in grams (35.45 g/mol for Cl).' },
        ],
      },
      {
        title: 'Electron configuration',
        items: [
          { label: 'Sublevel capacities', tex: 's: 2,\\quad p: 6,\\quad d: 10,\\quad f: 14, \\qquad \\text{level } n \\text{ holds } 2n^2', text: 'Each orbital holds at most 2 electrons (opposite spins).' },
          { label: 'Filling order (Aufbau)', tex: '1s\\ 2s\\ 2p\\ 3s\\ 3p\\ 4s\\ 3d\\ 4p\\ 5s\\ 4d\\ 5p\\ 6s\\ 4f\\ 5d\\ 6p\\ 7s\\ 5f\\ 6d\\ 7p', text: 'Read it from the table: walk across each row through the $s$-, $f$-, $d$- and $p$-blocks.' },
          { label: 'Blocks of the table', text: 'Groups 1–2: $s$-block. Groups 13–18: $p$-block. Groups 3–12: $d$-block (fills $n-1$). Bottom two rows: $f$-block (fills $n-2$).' },
          { label: 'Examples', tex: '\\ce{O}: 1s^2\\,2s^2\\,2p^4, \\qquad \\ce{Na}: 1s^2\\,2s^2\\,2p^6\\,3s^1 = [\\ce{Ne}]\\,3s^1' },
          { label: 'Noble-gas shorthand', tex: '\\ce{Fe}: [\\ce{Ar}]\\,4s^2\\,3d^6, \\qquad \\ce{Br}: [\\ce{Ar}]\\,4s^2\\,3d^{10}\\,4p^5' },
          { label: 'Common exceptions', tex: '\\ce{Cr}: [\\ce{Ar}]\\,4s^1\\,3d^5, \\qquad \\ce{Cu}: [\\ce{Ar}]\\,4s^1\\,3d^{10}', text: 'Half-filled and filled $d$ sets are extra stable.' },
          { label: 'Check', text: 'Superscripts must add up to the number of electrons ($Z$ for a neutral atom).' },
        ],
      },
      {
        title: 'Valence electrons and the table',
        items: [
          { label: 'Main-group count', tex: '\\text{groups 1, 2: } 1, 2 \\qquad \\text{groups 13–18: group} - 10 \\ (3 \\text{ to } 8)', text: 'Helium is the exception: 2 valence electrons.' },
          { label: 'Named groups', text: '**1** alkali metals (not H) · **2** alkaline earth metals · **3–12** transition metals · **17** halogens · **18** noble gases.' },
          { label: 'Rows', text: 'Period number = highest occupied energy level $n$. Period lengths: 2, 8, 8, 18, 18, 32, 32.' },
          { label: 'Metals / nonmetals', text: 'Metals: left and center (lose electrons). Nonmetals: upper right plus H (gain or share). Metalloids along the staircase: B, Si, Ge, As, Sb, Te.' },
          { label: 'Diatomic elements', tex: '\\ce{H2},\\ \\ce{N2},\\ \\ce{O2},\\ \\ce{F2},\\ \\ce{Cl2},\\ \\ce{Br2},\\ \\ce{I2}' },
        ],
      },
      {
        title: 'Periodic trends',
        items: [
          { label: 'Atomic radius', text: '**Decreases** across a period (more protons, same shell → stronger pull). **Increases** down a group (more shells). Largest: bottom left; smallest: top right.' },
          { label: 'Ionization energy', tex: '\\ce{X(g) -> X+(g) + e-}', text: '**Increases** across, **decreases** down (smaller atoms hold electrons tighter). Big jump once the valence electrons are gone: Na 496 → 4562 kJ/mol.' },
          { label: 'Electronegativity', tex: '\\ce{F}\\ 3.98 > \\ce{O}\\ 3.44 > \\ce{Cl}\\ 3.16 > \\ce{N}\\ 3.04 > \\ce{C}\\ 2.55 > \\ce{H}\\ 2.20 > \\ce{Na}\\ 0.93', text: '**Increases** across, **decreases** down (Pauling scale; noble gases usually omitted).' },
          { label: 'Metallic character', text: 'Opposite of ionization energy: increases down and to the left.' },
          { label: 'Ion size', tex: 'r(\\ce{Na+}) < r(\\ce{Na}), \\qquad r(\\ce{Cl-}) > r(\\ce{Cl})', text: 'Cations shrink (lose electrons, often a shell); anions grow (extra electron repulsion).' },
          { label: 'Why', text: 'Across: effective nuclear charge rises while the shell stays the same. Down: each new shell puts valence electrons farther out and better shielded.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------- Bonding & naming
  {
    id: 'chem-bonding-naming',
    title: 'Bonding & Naming',
    course: 'chem',
    icon: '🔗',
    description: 'Ion charges, common polyatomic ions, naming and formula rules, Lewis structure steps, VSEPR shapes and polarity.',
    sections: [
      {
        title: 'Ion charges by group',
        items: [
          { label: 'Group 1', tex: '+1:\\ \\ce{Li+},\\ \\ce{Na+},\\ \\ce{K+}' },
          { label: 'Group 2', tex: '+2:\\ \\ce{Mg^2+},\\ \\ce{Ca^2+},\\ \\ce{Ba^2+}' },
          { label: 'Group 13', tex: '+3:\\ \\ce{Al^3+}' },
          { label: 'Group 15', tex: '-3:\\ \\ce{N^3-}\\ \\text{(nitride)},\\ \\ce{P^3-}\\ \\text{(phosphide)}' },
          { label: 'Group 16', tex: '-2:\\ \\ce{O^2-}\\ \\text{(oxide)},\\ \\ce{S^2-}\\ \\text{(sulfide)}' },
          { label: 'Group 17', tex: '-1:\\ \\ce{F-},\\ \\ce{Cl-},\\ \\ce{Br-},\\ \\ce{I-}\\ \\text{(fluoride, chloride, bromide, iodide)}' },
          { label: 'Fixed-charge transition metals', tex: '\\ce{Ag+},\\quad \\ce{Zn^2+}' },
          { label: 'Variable-charge metals', tex: '\\ce{Fe^2+}/\\ce{Fe^3+},\\quad \\ce{Cu+}/\\ce{Cu^2+},\\quad \\ce{Sn^2+}/\\ce{Sn^4+},\\quad \\ce{Pb^2+}/\\ce{Pb^4+}', text: 'Name with a Roman numeral: iron(III) = $\\ce{Fe^3+}$.' },
        ],
      },
      {
        title: 'Common polyatomic ions',
        items: [
          { label: 'Cations', tex: '\\ce{NH4+}\\ \\text{ammonium}, \\qquad \\ce{H3O+}\\ \\text{hydronium}' },
          { label: '1− anions', tex: '\\ce{OH-}\\ \\text{hydroxide},\\ \\ce{NO3-}\\ \\text{nitrate},\\ \\ce{NO2-}\\ \\text{nitrite},\\ \\ce{CN-}\\ \\text{cyanide}' },
          { label: '1− anions (cont.)', tex: '\\ce{CH3COO-}\\ (\\ce{C2H3O2-})\\ \\text{acetate},\\ \\ce{MnO4-}\\ \\text{permanganate},\\ \\ce{HCO3-}\\ \\text{hydrogen carbonate}' },
          { label: '1− anions (hydrogen)', tex: '\\ce{HSO4-}\\ \\text{hydrogen sulfate},\\ \\ce{H2PO4-}\\ \\text{dihydrogen phosphate}' },
          { label: '2− anions', tex: '\\ce{CO3^2-}\\ \\text{carbonate},\\ \\ce{SO4^2-}\\ \\text{sulfate},\\ \\ce{SO3^2-}\\ \\text{sulfite},\\ \\ce{HPO4^2-}\\ \\text{hydrogen phosphate}' },
          { label: '2− anions (cont.)', tex: '\\ce{CrO4^2-}\\ \\text{chromate},\\ \\ce{Cr2O7^2-}\\ \\text{dichromate},\\ \\ce{O2^2-}\\ \\text{peroxide}' },
          { label: '3− anion', tex: '\\ce{PO4^3-}\\ \\text{phosphate}' },
          { label: 'Chlorine oxyanions', tex: '\\ce{ClO4-}\\ \\text{perchlorate},\\ \\ce{ClO3-}\\ \\text{chlorate},\\ \\ce{ClO2-}\\ \\text{chlorite},\\ \\ce{ClO-}\\ \\text{hypochlorite}', text: 'Same pattern for Br and I (bromate $\\ce{BrO3-}$, iodate $\\ce{IO3-}$).' },
          { label: 'Name patterns', text: '**-ate** has one more O than **-ite**, same charge. **per-…-ate** one more O than -ate; **hypo-…-ite** one fewer O than -ite. Adding **hydrogen** adds $\\ce{H+}$ and raises the charge by 1 ($\\ce{CO3^2-} \\to \\ce{HCO3-}$).' },
        ],
      },
      {
        title: 'Ionic formulas and names',
        items: [
          { label: 'Charges sum to zero', tex: '\\ce{Al^3+} + \\ce{O^2-} \\to \\ce{Al2O3}\\quad (2 \\times 3 = 3 \\times 2)', text: 'Crisscross the charge numbers as subscripts, then reduce to lowest terms ($\\ce{Mg^2+}$ + $\\ce{O^2-}$ → $\\ce{MgO}$, not $\\ce{Mg2O2}$).' },
          { label: 'Parentheses for multiple polyatomic ions', tex: '\\ce{Ca3(PO4)2}\\ \\text{calcium phosphate}, \\qquad \\ce{(NH4)2SO4}\\ \\text{ammonium sulfate}' },
          { label: 'Name = cation + anion', tex: '\\ce{NaCl}\\ \\text{sodium chloride}, \\qquad \\ce{K2CO3}\\ \\text{potassium carbonate}', text: 'Monatomic anions end in **-ide**. Do not use prefixes for ionic compounds.' },
          { label: 'Roman numerals', tex: '\\ce{FeCl3}\\ \\text{iron(III) chloride}, \\qquad \\ce{CuSO4}\\ \\text{copper(II) sulfate}', text: 'Work the metal\'s charge backward from the anion charges.' },
          { label: 'Hydrates', tex: '\\ce{CuSO4*5H2O}\\ \\text{copper(II) sulfate pentahydrate}' },
        ],
      },
      {
        title: 'Molecular (covalent) names',
        items: [
          { label: 'Prefixes', tex: '1\\ \\text{mono},\\ 2\\ \\text{di},\\ 3\\ \\text{tri},\\ 4\\ \\text{tetra},\\ 5\\ \\text{penta},\\ 6\\ \\text{hexa},\\ 7\\ \\text{hepta},\\ 8\\ \\text{octa},\\ 9\\ \\text{nona},\\ 10\\ \\text{deca}' },
          { label: 'Rules', text: 'Two nonmetals: prefix + first element, prefix + second element ending in **-ide**. Drop *mono-* on the first element; drop the final *a*/*o* before "oxide".' },
          { label: 'Examples', tex: '\\ce{CO}\\ \\text{carbon monoxide},\\ \\ce{CO2}\\ \\text{carbon dioxide},\\ \\ce{N2O4}\\ \\text{dinitrogen tetroxide},\\ \\ce{SF6}\\ \\text{sulfur hexafluoride}' },
        ],
      },
      {
        title: 'Acid names',
        items: [
          { label: '-ide → hydro-…-ic acid', tex: '\\ce{HCl}\\ \\text{hydrochloric acid}, \\qquad \\ce{HBr}\\ \\text{hydrobromic acid}' },
          { label: '-ate → -ic acid', tex: '\\ce{HNO3}\\ \\text{nitric acid}, \\qquad \\ce{H2SO4}\\ \\text{sulfuric acid}, \\qquad \\ce{H3PO4}\\ \\text{phosphoric acid}' },
          { label: '-ite → -ous acid', tex: '\\ce{HNO2}\\ \\text{nitrous acid}, \\qquad \\ce{H2SO3}\\ \\text{sulfurous acid}' },
        ],
      },
      {
        title: 'Lewis structures',
        items: [
          { label: '1. Count valence electrons', tex: '\\ce{CO2}: 4 + 2(6) = 16, \\qquad \\ce{NH4+}: 5 + 4(1) - 1 = 8', text: 'Add one per negative charge, subtract one per positive charge.' },
          { label: '2. Skeleton', text: 'Least electronegative atom in the center (often the one there is only one of); H and halogens are usually terminal. Connect with single bonds (2 e⁻ each).' },
          { label: '3. Outer atoms', text: 'Complete octets on the outer atoms with lone pairs (H gets 2 total).' },
          { label: '4. Leftovers', text: 'Place remaining electrons on the central atom as lone pairs.' },
          { label: '5. Multiple bonds', text: 'If the central atom lacks an octet, move outer lone pairs in to form double or triple bonds. Recount every electron.' },
          { label: 'Typical bond counts', tex: '\\ce{H}: 1,\\quad \\ce{C}: 4,\\quad \\ce{N}: 3,\\quad \\ce{O}: 2,\\quad \\ce{F},\\ \\ce{Cl}: 1' },
          { label: 'Formal charge (check)', tex: '\\text{FC} = (\\text{valence } e^-) - (\\text{lone-pair } e^-) - \\tfrac{1}{2}(\\text{bonding } e^-)', text: 'Prefer structures with formal charges closest to zero.' },
          { label: 'Octet exceptions', tex: '\\ce{BF3}\\ (6\\ e^- \\text{ on B}), \\qquad \\ce{NO}\\ (\\text{odd } e^-), \\qquad \\ce{SF6}\\ (12\\ e^- \\text{ on S})' },
        ],
      },
      {
        title: 'VSEPR shapes',
        items: [
          { label: 'Counting domains', text: 'Electron domains on the central atom = bonded atoms + lone pairs. A double or triple bond counts as **one** domain.' },
          { label: '2 domains, 0 lone pairs', tex: '\\text{linear},\\ 180^\\circ:\\ \\ce{CO2},\\ \\ce{BeCl2}' },
          { label: '3 domains, 0 lone pairs', tex: '\\text{trigonal planar},\\ 120^\\circ:\\ \\ce{BF3},\\ \\ce{CH2O}' },
          { label: '3 domains, 1 lone pair', tex: '\\text{bent},\\ <120^\\circ\\ (\\approx 119^\\circ):\\ \\ce{SO2}' },
          { label: '4 domains, 0 lone pairs', tex: '\\text{tetrahedral},\\ 109.5^\\circ:\\ \\ce{CH4},\\ \\ce{CCl4}' },
          { label: '4 domains, 1 lone pair', tex: '\\text{trigonal pyramidal},\\ \\approx 107^\\circ:\\ \\ce{NH3}' },
          { label: '4 domains, 2 lone pairs', tex: '\\text{bent},\\ \\approx 104.5^\\circ:\\ \\ce{H2O}' },
          { label: '5 and 6 domains (preview)', tex: '\\text{trigonal bipyramidal},\\ 90^\\circ/120^\\circ:\\ \\ce{PCl5}, \\qquad \\text{octahedral},\\ 90^\\circ:\\ \\ce{SF6}' },
          { label: 'Lone pairs squeeze', text: 'Lone pairs repel more than bonding pairs, so each lone pair shrinks the bond angles a few degrees.' },
        ],
      },
      {
        title: 'Polarity and intermolecular forces',
        items: [
          { label: 'Bond type from ΔEN (rough guide)', tex: '\\Delta EN < 0.4:\\ \\text{nonpolar covalent}, \\quad 0.4\\text{–}1.8:\\ \\text{polar covalent}, \\quad > 1.8:\\ \\text{mostly ionic}', text: 'Cutoffs vary by textbook; bonding is a continuum.' },
          { label: 'Examples', tex: '\\ce{C-H}\\ 0.35, \\qquad \\ce{O-H}\\ 1.24, \\qquad \\ce{Na-Cl}\\ 2.23' },
          { label: 'Polar molecule?', text: '(1) Any polar bonds? (2) Do the bond dipoles cancel by symmetry? Symmetric shapes with identical outer atoms ($\\ce{CO2}$, $\\ce{CH4}$, $\\ce{BF3}$) are nonpolar; lone pairs on the center or mixed outer atoms ($\\ce{H2O}$, $\\ce{NH3}$, $\\ce{CH3Cl}$) usually make it polar.' },
          { label: 'Intermolecular forces', text: '**London dispersion** (all molecules, grows with size) < **dipole–dipole** (polar molecules) < **hydrogen bonding** (H on N, O or F). Stronger forces → higher boiling point.' },
          { label: 'Like dissolves like', text: 'Polar and ionic solutes dissolve in polar solvents (water); nonpolar solutes dissolve in nonpolar solvents (oil, hexane).' },
        ],
      },
    ],
  },

  // ---------------------------------------------- Reactions & stoichiometry
  {
    id: 'chem-reactions-stoichiometry',
    title: 'Reactions & Stoichiometry',
    course: 'chem',
    icon: '⚗️',
    description: 'Reaction types, balancing, the mole map, molar mass, percent composition, empirical formulas, limiting reactant and percent yield.',
    sections: [
      {
        title: 'Reading an equation',
        items: [
          { label: 'Anatomy', tex: '\\ce{2H2(g) + O2(g) -> 2H2O(l)}', text: 'Coefficients count particles **and** moles; subscripts fix identity. States: (s), (l), (g), (aq) = dissolved in water.' },
          { label: 'Arrows', tex: '\\ce{->}\\ \\text{yields}, \\qquad \\ce{<=>}\\ \\text{equilibrium}, \\qquad \\ce{->[\\Delta]}\\ \\text{heat}' },
          { label: 'Conservation of mass', text: 'Atoms are rearranged, never created or destroyed, so total mass of reactants = total mass of products.' },
        ],
      },
      {
        title: 'Reaction types',
        items: [
          { label: 'Synthesis', tex: '\\ce{A + B -> AB}: \\quad \\ce{N2 + 3H2 -> 2NH3}' },
          { label: 'Decomposition', tex: '\\ce{AB -> A + B}: \\quad \\ce{CaCO3 ->[\\Delta] CaO + CO2}' },
          { label: 'Single replacement', tex: '\\ce{A + BC -> AC + B}: \\quad \\ce{Zn + 2HCl -> ZnCl2 + H2}', text: 'Only if A is more active. Activity series (partial): K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Ag > Au.' },
          { label: 'Double replacement', tex: '\\ce{AB + CD -> AD + CB}: \\quad \\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)}', text: 'Driven by forming a precipitate, a gas or water.' },
          { label: 'Combustion', tex: '\\ce{CH4 + 2O2 -> CO2 + 2H2O}', text: 'Hydrocarbon + $\\ce{O2}$ → $\\ce{CO2}$ + $\\ce{H2O}$. Too little oxygen also gives $\\ce{CO}$ and soot.' },
          { label: 'Neutralization', tex: '\\ce{HCl + NaOH -> NaCl + H2O}', text: 'Acid + base → salt + water (a double replacement).' },
        ],
      },
      {
        title: 'Balancing',
        items: [
          { label: 'Rule', text: 'Change **coefficients only**, never subscripts.' },
          { label: 'Order', text: 'Balance elements found in one compound per side first; keep unchanged polyatomic ions together as units; do free elements ($\\ce{O2}$, $\\ce{Fe}$) last; reduce to smallest whole numbers.' },
          { label: 'Hydrocarbon combustion', tex: '\\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}', text: 'Balance C, then H, then O. Check: C 3 = 3, H 8 = 8, O 10 = 10.' },
          { label: 'Odd oxygen? Double everything', tex: '\\ce{2C8H18 + 25O2 -> 16CO2 + 18H2O}', text: 'C 16 = 16, H 36 = 36, O 50 = 32 + 18.' },
        ],
      },
      {
        title: 'The mole',
        items: [
          { label: "Avogadro's number", tex: 'N_A = \\pu{6.022e23 mol-1} \\quad (\\text{exactly } 6.02214076 \\times 10^{23})' },
          { label: 'Molar mass', tex: 'M = \\sum (\\text{subscript})(\\text{atomic mass})\\ \\ \\text{g/mol}', text: 'Atomic masses: H 1.008, C 12.011, N 14.007, O 15.999, Na 22.990, Cl 35.45, Ca 40.078.' },
          { label: 'Examples', tex: '\\ce{H2O}\\ 18.015,\\quad \\ce{CO2}\\ 44.009,\\quad \\ce{NaCl}\\ 58.44,\\quad \\ce{C6H12O6}\\ 180.156,\\quad \\ce{Ca(OH)2}\\ 74.092\\ \\text{g/mol}' },
          { label: 'Mole map', tex: '\\text{particles} \\xrightarrow{\\div N_A} \\text{mol} \\xrightarrow{\\times M} \\text{grams} \\qquad (\\text{reverse: } \\times N_A,\\ \\div M)' },
          { label: 'Grams → moles', tex: '\\frac{25.0\\ \\cancel{\\text{g}}\\ \\ce{NaCl}}{1} \\times \\frac{1\\ \\text{mol}}{58.44\\ \\cancel{\\text{g}}} = 0.428\\ \\text{mol}' },
          { label: 'Moles → particles', tex: '0.428\\ \\cancel{\\text{mol}} \\times \\frac{6.022 \\times 10^{23}}{1\\ \\cancel{\\text{mol}}} = 2.58 \\times 10^{23}\\ \\text{formula units}' },
        ],
      },
      {
        title: 'Composition and formulas',
        items: [
          { label: 'Percent composition', tex: '\\%\\,\\text{X} = \\frac{(\\text{subscript})(\\text{atomic mass of X})}{M_{\\text{compound}}} \\times 100\\%' },
          { label: 'Example: water', tex: '\\%\\,\\ce{H} = \\frac{2(1.008)}{18.015} \\times 100\\% = 11.19\\%, \\qquad \\%\\,\\ce{O} = 88.81\\%' },
          { label: 'Empirical formula steps', text: '(1) Assume 100 g, so % → g. (2) g → mol for each element. (3) Divide by the smallest. (4) Multiply to whole numbers: ×2 for .5, ×3 for .33/.67, ×4 for .25/.75.' },
          { label: 'Empirical example', tex: '\\tfrac{40.0}{12.011} : \\tfrac{6.71}{1.008} : \\tfrac{53.3}{15.999} = 3.330 : 6.657 : 3.331 = 1 : 2 : 1 \\Rightarrow \\ce{CH2O}' },
          { label: 'Molecular formula', tex: 'n = \\frac{M_{\\text{molecular}}}{M_{\\text{empirical}}} = \\frac{180.16}{30.026} = 6 \\;\\Rightarrow\\; \\ce{C6H12O6}' },
        ],
      },
      {
        title: 'Stoichiometry',
        items: [
          { label: 'The three steps', tex: '\\text{g A} \\xrightarrow{\\div M_A} \\text{mol A} \\xrightarrow{\\times \\frac{\\text{coef B}}{\\text{coef A}}} \\text{mol B} \\xrightarrow{\\times M_B} \\text{g B}', text: 'The mole ratio links **moles**, never grams.' },
          { label: 'Example', tex: '4.00\\ \\text{g}\\ \\ce{H2} \\times \\frac{1\\ \\text{mol}\\ \\ce{H2}}{2.016\\ \\text{g}\\ \\ce{H2}} \\times \\frac{2\\ \\text{mol}\\ \\ce{H2O}}{2\\ \\text{mol}\\ \\ce{H2}} \\times \\frac{18.015\\ \\text{g}\\ \\ce{H2O}}{1\\ \\text{mol}\\ \\ce{H2O}} = 35.7\\ \\text{g}\\ \\ce{H2O}', text: 'For $\\ce{2H2 + O2 -> 2H2O}$ with excess oxygen.' },
          { label: 'Other endpoints', text: 'mol ↔ L of solution with molarity ($n = MV$); mol ↔ L of gas with $PV = nRT$ (or 22.4 L/mol at STP); mol ↔ particles with $N_A$.' },
        ],
      },
      {
        title: 'Limiting reactant and yield',
        items: [
          { label: 'Find the limiting reactant', tex: '\\text{smallest } \\frac{n_{\\text{reactant}}}{\\text{coefficient}} \\;\\Rightarrow\\; \\text{limiting}', text: 'Or compute the product each reactant could make; the smaller amount wins. Not necessarily the smaller mass.' },
          { label: 'Example', tex: '\\ce{N2 + 3H2 -> 2NH3}: \\quad \\frac{50.0}{28.014} = 1.785 \\;>\\; \\frac{10.0/2.016}{3} = 1.653 \\;\\Rightarrow\\; \\ce{H2}\\ \\text{limits}' },
          { label: 'Theoretical yield', tex: '4.960\\ \\text{mol}\\ \\ce{H2} \\times \\frac{2}{3} \\times 17.031\\ \\text{g/mol} = 56.3\\ \\text{g}\\ \\ce{NH3}' },
          { label: 'Excess left over', tex: '1.785 - \\tfrac{4.960}{3} = 0.131\\ \\text{mol}\\ \\ce{N2} = 3.68\\ \\text{g}' },
          { label: 'Percent yield', tex: '\\text{percent yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100\\% = \\frac{45.0\\ \\text{g}}{56.3\\ \\text{g}} \\times 100\\% = 79.9\\%', text: 'Above 100% signals an error (wet or impure product).' },
        ],
      },
    ],
  },

  // ----------------------------------------- Solutions, gases, acids & bases
  {
    id: 'chem-solutions-gases-acids',
    title: 'Solutions, Gases, Acids & Bases',
    course: 'chem',
    icon: '🧪',
    description: 'Molarity and dilution, pressure units, the gas laws and R values, STP, pH, pOH and Kw, neutralization and titration.',
    sections: [
      {
        title: 'Solutions',
        items: [
          { label: 'Molarity', tex: 'M = \\frac{\\text{mol solute}}{\\text{L solution}}, \\qquad n = MV', text: 'Liters of **solution**, not of solvent added. Convert mL to L.' },
          { label: 'Making a solution', tex: '0.200\\ \\tfrac{\\text{mol}}{\\cancel{\\text{L}}} \\times 0.500\\ \\cancel{\\text{L}} \\times 58.44\\ \\tfrac{\\text{g}}{\\text{mol}} = 5.84\\ \\text{g}\\ \\ce{NaCl}', text: 'Dissolve, then add water up to the 500-mL mark.' },
          { label: 'Molarity example', tex: '\\frac{5.844\\ \\text{g} \\div 58.44\\ \\text{g/mol}}{0.250\\ \\text{L}} = 0.400\\ \\text{M}\\ \\ce{NaCl}' },
          { label: 'Ion concentrations', tex: '0.10\\ \\text{M}\\ \\ce{CaCl2} \\to [\\ce{Ca^2+}] = 0.10\\ \\text{M},\\ [\\ce{Cl-}] = 0.20\\ \\text{M}' },
          { label: 'Dilution', tex: 'M_1V_1 = M_2V_2', text: 'Moles of solute stay the same. $V_2$ is the final total volume.' },
          { label: 'Dilution example', tex: 'V_1 = \\frac{(0.500\\ \\text{M})(250.\\ \\text{mL})}{12.0\\ \\text{M}} = 10.4\\ \\text{mL of stock, then dilute to } 250.\\ \\text{mL}', text: 'Always add acid to water.' },
        ],
      },
      {
        title: 'Pressure',
        items: [
          { label: 'Definition', tex: 'P = \\frac{F}{A}', text: 'Gas pressure comes from particle collisions with the walls.' },
          { label: 'Units', tex: '1\\ \\text{atm} = 760\\ \\text{mmHg} = 760\\ \\text{torr} = 101.325\\ \\text{kPa} = 1.01325\\ \\text{bar} \\approx 14.7\\ \\text{psi}' },
          { label: 'Absolute vs gauge', tex: 'P_{\\text{abs}} = P_{\\text{gauge}} + P_{\\text{atm}}', text: 'Gas laws need absolute pressure.' },
          { label: 'Diving', text: 'Pressure rises about 1 atm per 10 m (33 ft) of seawater: 2 atm absolute at 10 m, 4 atm at 30 m.' },
        ],
      },
      {
        title: 'Gas laws (T always in kelvins)',
        items: [
          { label: "Boyle's law (T, n fixed)", tex: 'P_1V_1 = P_2V_2', text: 'Inverse: $2.0\\ \\text{L}$ at $1.0\\ \\text{atm} \\to 0.50\\ \\text{L}$ at $4.0\\ \\text{atm}$.' },
          { label: "Charles's law (P, n fixed)", tex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2}', text: 'Direct: $1.50\\ \\text{L}$ at $298.15\\ \\text{K} \\to 1.88\\ \\text{L}$ at $373.15\\ \\text{K}$.' },
          { label: "Gay-Lussac's law (V, n fixed)", tex: '\\frac{P_1}{T_1} = \\frac{P_2}{T_2}', text: 'Rigid tank: $2.00\\ \\text{atm}$ at $293.15\\ \\text{K} \\to 2.20\\ \\text{atm}$ at $323.15\\ \\text{K}$.' },
          { label: "Avogadro's law (P, T fixed)", tex: '\\frac{V_1}{n_1} = \\frac{V_2}{n_2}' },
          { label: 'Combined gas law (n fixed)', tex: '\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}' },
          { label: 'Ideal gas law', tex: 'PV = nRT', text: 'Example: $n = \\frac{(2.00)(10.0)}{(0.08206)(300.)} = 0.812\\ \\text{mol}$.' },
          { label: 'Gas density', tex: 'd = \\frac{PM}{RT}', text: 'Heavier gases are denser: $\\ce{CO2}$ at STP is about 1.96 g/L versus about 1.29 g/L for air.' },
          { label: "Dalton's law of partial pressures", tex: 'P_{\\text{total}} = P_1 + P_2 + \\cdots, \\qquad P_i = x_i\\,P_{\\text{total}}', text: 'Air is about 21% $\\ce{O2}$: $P_{\\ce{O2}} \\approx 0.21$ atm at the surface, about 0.84 atm at 30 m depth.' },
        ],
      },
      {
        title: 'Gas constant and STP',
        items: [
          { label: 'R values', tex: 'R = \\pu{0.08206 L atm K-1 mol-1} = \\pu{8.314 J K-1 mol-1} = \\pu{8.314 L kPa K-1 mol-1} = \\pu{62.36 L torr K-1 mol-1}', text: 'Pick the $R$ whose units match your pressure and volume.' },
          { label: 'STP', tex: 'T = 273.15\\ \\text{K}\\ (0\\ \\text{°C}),\\quad P = 1\\ \\text{atm} \\;\\Rightarrow\\; V_m = 22.4\\ \\text{L/mol}', text: 'IUPAC uses 1 bar: $V_m = 22.7$ L/mol. At 25 °C and 1 atm, $V_m \\approx 24.5$ L/mol.' },
        ],
      },
      {
        title: 'Acids and bases',
        items: [
          { label: 'Definitions', text: '**Arrhenius:** acids make $\\ce{H+}$ ($\\ce{H3O+}$) in water; bases make $\\ce{OH-}$. **Brønsted–Lowry:** acid = proton donor; base = proton acceptor.' },
          { label: 'Acid in water', tex: '\\ce{HCl + H2O -> H3O+ + Cl-}' },
          { label: 'Weak base in water', tex: '\\ce{NH3 + H2O <=> NH4+ + OH-}' },
          { label: 'Strong acids', tex: '\\ce{HCl},\\ \\ce{HBr},\\ \\ce{HI},\\ \\ce{HNO3},\\ \\ce{H2SO4},\\ \\ce{HClO4}', text: 'Ionize completely; all other acids are treated as weak.' },
          { label: 'Strong bases', tex: '\\ce{LiOH},\\ \\ce{NaOH},\\ \\ce{KOH},\\ \\ce{Ca(OH)2},\\ \\ce{Sr(OH)2},\\ \\ce{Ba(OH)2}', text: 'Group 1 hydroxides and heavy group 2 hydroxides.' },
          { label: 'Strong vs concentrated', text: 'Strength = how completely it ionizes; concentration = how much is dissolved. They are independent.' },
        ],
      },
      {
        title: 'pH, pOH and Kw (25 °C)',
        items: [
          { label: 'Definitions', tex: '\\text{pH} = -\\log[\\ce{H3O+}], \\qquad \\text{pOH} = -\\log[\\ce{OH-}]' },
          { label: 'Inverses', tex: '[\\ce{H3O+}] = 10^{-\\text{pH}}, \\qquad [\\ce{OH-}] = 10^{-\\text{pOH}}' },
          { label: 'Water', tex: 'K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14}, \\qquad \\text{pH} + \\text{pOH} = 14.00' },
          { label: 'Scale', text: 'pH < 7 acidic, = 7 neutral, > 7 basic. Each unit is a factor of 10 in $[\\ce{H3O+}]$.' },
          { label: 'Strong acid example', tex: '0.010\\ \\text{M}\\ \\ce{HCl}: \\ \\text{pH} = -\\log(0.010) = 2.00' },
          { label: 'Strong base example', tex: '0.0050\\ \\text{M}\\ \\ce{NaOH}: \\ \\text{pOH} = 2.30,\\ \\text{pH} = 11.70' },
          { label: 'Two hydroxides per formula', tex: '0.010\\ \\text{M}\\ \\ce{Ba(OH)2}: [\\ce{OH-}] = 0.020\\ \\text{M},\\ \\text{pOH} = 1.70,\\ \\text{pH} = 12.30' },
          { label: 'From pH back to concentration', tex: '\\text{pH} = 4.50 \\;\\Rightarrow\\; [\\ce{H3O+}] = 10^{-4.50} = 3.2 \\times 10^{-5}\\ \\text{M}' },
          { label: 'Everyday values', text: 'Stomach acid ≈ 1.5–3.5 · lemon juice ≈ 2 · coffee ≈ 5 · pure water 7 · blood 7.35–7.45 · baking soda ≈ 8.3 · household ammonia ≈ 11.6 · bleach ≈ 12–13.' },
        ],
      },
      {
        title: 'Neutralization and titration',
        items: [
          { label: 'Neutralization', tex: '\\ce{acid + base -> salt + H2O}, \\qquad \\ce{H+(aq) + OH-(aq) -> H2O(l)}' },
          { label: 'Diprotic acid', tex: '\\ce{H2SO4 + 2KOH -> K2SO4 + 2H2O}', text: 'Two $\\ce{H+}$ per formula need two $\\ce{OH-}$.' },
          { label: 'Titration (1 : 1)', tex: 'M_aV_a = M_bV_b', text: 'Otherwise use moles and the mole ratio from the balanced equation.' },
          { label: 'Titration example', tex: 'M_a = \\frac{(0.100\\ \\text{M})(18.5\\ \\text{mL})}{25.0\\ \\text{mL}} = 0.0740\\ \\text{M}\\ \\ce{HCl}', text: '25.0 mL of $\\ce{HCl}$ neutralized by 18.5 mL of 0.100 M $\\ce{NaOH}$.' },
        ],
      },
    ],
  },
];
