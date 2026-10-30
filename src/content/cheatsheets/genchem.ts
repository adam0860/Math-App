import type { CheatSheet } from '../types';

export const genchemCheatSheets: CheatSheet[] = [
  // ------------------------------------------------------- Constants & data
  {
    id: 'gchem-constants',
    title: 'Constants & Data',
    course: 'genchem',
    icon: '🔢',
    description: 'Fundamental constants (CODATA, exact SI values marked), R in several units, pressure and energy conversions, standard conditions and data for water.',
    sections: [
      {
        title: 'Fundamental constants',
        items: [
          { label: 'Planck constant', tex: 'h = \\pu{6.62607015e-34 J s}\\ \\text{(exact)} \\approx \\pu{6.626e-34 J s}' },
          { label: 'Speed of light', tex: 'c = \\pu{2.99792458e8 m s-1}\\ \\text{(exact)} \\approx \\pu{3.00e8 m s-1}' },
          { label: 'Avogadro constant', tex: 'N_A = \\pu{6.02214076e23 mol-1}\\ \\text{(exact)} \\approx \\pu{6.022e23 mol-1}' },
          { label: 'Boltzmann constant', tex: 'k_B = \\pu{1.380649e-23 J K-1}\\ \\text{(exact)}, \\qquad R = N_A k_B', text: 'Per molecule use $k_B$; per mole use $R$.' },
          { label: 'Elementary charge', tex: 'e = \\pu{1.602176634e-19 C}\\ \\text{(exact)}, \\qquad 1\\ \\text{eV} = \\pu{1.602e-19 J}' },
          { label: 'Faraday constant', tex: 'F = N_A e = \\pu{96485.33 C mol-1} \\approx \\pu{96485 C mol-1}', text: 'The charge on one mole of electrons.' },
          { label: 'Particle masses', tex: 'm_e = \\pu{9.109e-31 kg}, \\quad m_p = \\pu{1.67262e-27 kg} = 1.007276\\ \\text{u}, \\quad m_n = \\pu{1.67493e-27 kg} = 1.008665\\ \\text{u}' },
          { label: 'Atomic mass unit', tex: '1\\ \\text{u} = \\tfrac{1}{12}\\,m\\left(\\ce{^{12}C}\\right) = \\pu{1.66054e-27 kg} \\;\\leftrightarrow\\; 931.494\\ \\text{MeV}/c^2', text: 'Numerically, $1\\ \\text{g/mol}$ corresponds to $1\\ \\text{u}$ per particle.' },
        ],
      },
      {
        title: 'The gas constant',
        items: [
          { label: 'Energy units', tex: 'R = \\pu{8.314 J K-1 mol-1}\\ (8.314462618\\ldots)', text: 'Use with energies in joules: $\\Delta G^\\circ = -RT\\ln K$, Arrhenius, Clausius–Clapeyron, $u_{\\text{rms}}$ (with $M$ in kg/mol).' },
          { label: 'Gas-law units (atm)', tex: 'R = \\pu{0.08206 L atm K-1 mol-1}', text: 'Use with $P$ in atm and $V$ in L: $PV = nRT$, $\\Pi = iMRT$, $K_p = K_c(RT)^{\\Delta n}$.' },
          { label: 'Other pressure units', tex: 'R = \\pu{62.36 L torr K-1 mol-1} = \\pu{8.314 L kPa K-1 mol-1}' },
          { label: 'Handy products at 298.15 K', tex: 'RT = 2.479\\ \\text{kJ/mol}, \\qquad \\frac{RT}{F} = 0.02569\\ \\text{V}, \\qquad \\frac{2.303\\,RT}{F} = 0.05916\\ \\text{V}' },
        ],
      },
      {
        title: 'Conversions',
        items: [
          { label: 'Pressure', tex: '1\\ \\text{atm} = 101.325\\ \\text{kPa} = 760\\ \\text{torr} = 760\\ \\text{mmHg} = 1.01325\\ \\text{bar} \\approx 14.7\\ \\text{psi}', text: 'All exact except psi; $1\\ \\text{bar} = 100\\ \\text{kPa}$ exactly.' },
          { label: 'Temperature', tex: 'T_\\text{K} = T_{\\text{°C}} + 273.15, \\qquad 0\\ \\text{°C} = 273.15\\ \\text{K}', text: 'A temperature **change** of 1 °C equals a change of 1 K.' },
          { label: 'PV work', tex: '1\\ \\text{L·atm} = 101.325\\ \\text{J}' },
          { label: 'Energy', tex: '1\\ \\text{cal} = 4.184\\ \\text{J}\\ \\text{(exact)}, \\qquad 1\\ \\text{eV} = \\pu{1.602e-19 J}, \\qquad 1\\ \\text{MeV} = \\pu{1.602e-13 J}' },
          { label: 'Electrical', tex: '1\\ \\text{J} = 1\\ \\text{C·V}, \\qquad 1\\ \\text{A} = 1\\ \\text{C/s}, \\qquad 1\\ \\text{W} = 1\\ \\text{J/s}' },
          { label: 'Length', tex: '1\\ \\text{Å} = 10^{-10}\\ \\text{m} = 100\\ \\text{pm}, \\qquad 1\\ \\text{nm} = 10^{-9}\\ \\text{m}' },
        ],
      },
      {
        title: 'Atomic-scale constants',
        items: [
          { label: 'Rydberg (Bohr) energy', tex: 'R_\\infty hc = \\pu{2.179e-18 J} = 13.61\\ \\text{eV}', text: 'Times $N_A$: about 1312 kJ/mol, the ionization energy of hydrogen.' },
          { label: 'Rydberg constant', tex: 'R_\\infty = \\pu{1.097e7 m-1}', text: 'For use in $\\frac{1}{\\lambda} = R_\\infty\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$.' },
          { label: 'Bohr radius', tex: 'a_0 = 52.92\\ \\text{pm} = 0.5292\\ \\text{Å}' },
          { label: 'Coulomb constant', tex: 'k = \\frac{1}{4\\pi\\varepsilon_0} = \\pu{8.988e9 N m2 C-2}' },
        ],
      },
      {
        title: 'Standard conditions',
        items: [
          { label: 'Thermodynamic standard state', text: 'Gases at **1 bar** (texts often use 1 atm; the difference is 1.3%), solutes at **1 M**, pure solids and liquids. Tables are usually at 25 °C (298.15 K), but the standard state does not fix $T$.' },
          { label: 'STP (gases)', tex: '0\\ \\text{°C},\\ 1\\ \\text{atm}: \\ V_m = 22.41\\ \\text{L/mol}', text: 'IUPAC STP (0 °C, 1 bar): 22.71 L/mol. At 25 °C and 1 atm: 24.47 L/mol.' },
        ],
      },
      {
        title: 'Water data',
        items: [
          { label: 'Ion product at 25 °C', tex: 'K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14}, \\qquad \\text{p}K_w = 14.00', text: '$K_w$ rises with temperature, so neutral pH is below 7 when water is hot.' },
          { label: 'Specific heats', tex: 'c_{\\ce{H2O(l)}} = 4.184\\ \\text{J/(g·°C)}, \\qquad c_{\\ce{H2O(s)}} \\approx 2.09, \\qquad c_{\\ce{H2O(g)}} \\approx 2.01\\ \\text{J/(g·°C)}' },
          { label: 'Phase-change enthalpies', tex: '\\Delta H_{\\text{fus}} = 6.01\\ \\text{kJ/mol}\\ (0\\ \\text{°C}), \\qquad \\Delta H_{\\text{vap}} = 40.7\\ \\text{kJ/mol}\\ (100\\ \\text{°C})' },
          { label: 'Colligative constants', tex: 'K_b = 0.512\\ \\text{°C·kg/mol}, \\qquad K_f = 1.86\\ \\text{°C·kg/mol}' },
          { label: 'Vapor pressure', tex: 'P_{\\ce{H2O}} = 23.8\\ \\text{torr at } 25\\ \\text{°C}; \\quad 760\\ \\text{torr at } 100\\ \\text{°C}', text: 'Subtract it when a gas is collected over water.' },
          { label: 'Triple and critical points', tex: '\\text{triple: } 0.01\\ \\text{°C},\\ 4.58\\ \\text{torr}, \\qquad \\text{critical: } 374\\ \\text{°C},\\ 218\\ \\text{atm}' },
        ],
      },
    ],
  },

  // -------------------------------------------------- Electronic structure
  {
    id: 'gchem-electronic-structure',
    title: 'Electronic Structure',
    course: 'genchem',
    icon: '🌈',
    description: 'Light and photons, matter waves, the Bohr model and hydrogen spectrum, quantum numbers, orbital counts, filling rules, ion configurations and magnetism.',
    sections: [
      {
        title: 'Light and photons',
        items: [
          { label: 'Wave relation', tex: 'c = \\lambda\\nu', text: '$\\lambda$ in m, $\\nu$ in s⁻¹ (Hz). Visible light runs about 400 nm (violet) to 700 nm (red).' },
          { label: 'Photon energy', tex: 'E = h\\nu = \\frac{hc}{\\lambda}', text: 'Shorter wavelength → higher energy. For a mole of photons multiply by $N_A$.' },
          { label: 'Example', tex: '\\lambda = 500\\ \\text{nm}: \\ E = \\frac{(\\pu{6.626e-34 J s})(\\pu{2.998e8 m s-1})}{\\pu{5.00e-7 m}} = \\pu{3.97e-19 J} \\;\\to\\; 239\\ \\text{kJ/mol}' },
          { label: 'Photoelectric effect', tex: 'KE_{\\text{electron}} = h\\nu - \\Phi', text: '$\\Phi$ = work function. Below the threshold frequency $\\nu_0 = \\Phi/h$ no electrons are ejected, however bright the light.' },
        ],
      },
      {
        title: 'Matter waves and uncertainty',
        items: [
          { label: 'de Broglie wavelength', tex: '\\lambda = \\frac{h}{mv} = \\frac{h}{p}', text: 'Use kg and m/s. An electron at $\\pu{1.0e6 m s-1}$ has $\\lambda = 727$ pm, comparable to atomic sizes.' },
          { label: 'Heisenberg uncertainty', tex: '\\Delta x \\, \\Delta p \\ge \\frac{h}{4\\pi}', text: 'Position and momentum cannot both be sharp: orbitals are probability clouds, not orbits.' },
        ],
      },
      {
        title: 'Bohr model of hydrogen (one-electron atoms)',
        items: [
          { label: 'Energy levels', tex: 'E_n = -\\frac{\\pu{2.179e-18 J}\\; Z^2}{n^2}, \\qquad n = 1, 2, 3, \\ldots', text: 'Zero energy = electron removed. $Z = 1$ for H; also works for $\\ce{He+}$, $\\ce{Li^2+}$.' },
          { label: 'Orbit radius', tex: 'r_n = \\frac{n^2 a_0}{Z}, \\qquad a_0 = 52.92\\ \\text{pm}' },
          { label: 'Transition energy', tex: '\\Delta E = E_f - E_i = \\pu{2.179e-18 J}\\left(\\frac{1}{n_i^2} - \\frac{1}{n_f^2}\\right)', text: '$\\Delta E < 0$: emission (photon out). $\\Delta E > 0$: absorption. Photon energy $= |\\Delta E|$.' },
          { label: 'Rydberg equation', tex: '\\frac{1}{\\lambda} = R_\\infty\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad n_2 > n_1, \\quad R_\\infty = \\pu{1.097e7 m-1}' },
          { label: 'Series', text: 'Lower level $n_1 = 1$: **Lyman** (UV). $n_1 = 2$: **Balmer** (visible). $n_1 = 3$: **Paschen** (IR).' },
          { label: 'Example: Balmer red line', tex: 'n = 3 \\to 2: \\ |\\Delta E| = \\pu{2.179e-18 J}\\left(\\tfrac14 - \\tfrac19\\right) = \\pu{3.026e-19 J} \\;\\Rightarrow\\; \\lambda = \\frac{hc}{|\\Delta E|} = 656\\ \\text{nm}' },
          { label: 'Ionization energy of H', tex: 'n = 1 \\to \\infty: \\ \\pu{2.179e-18 J} \\times N_A = 1312\\ \\text{kJ/mol}' },
        ],
      },
      {
        title: 'Quantum numbers',
        items: [
          { label: 'Principal $n$', tex: 'n = 1, 2, 3, \\ldots', text: 'Shell: size and (in H) energy.' },
          { label: 'Angular momentum $\\ell$', tex: '\\ell = 0, 1, \\ldots, n - 1 \\qquad (0\\ s,\\ 1\\ p,\\ 2\\ d,\\ 3\\ f)', text: 'Subshell: shape.' },
          { label: 'Magnetic $m_\\ell$', tex: 'm_\\ell = -\\ell, \\ldots, 0, \\ldots, +\\ell \\qquad (2\\ell + 1 \\text{ values})', text: 'Orientation: one value per orbital.' },
          { label: 'Spin $m_s$', tex: 'm_s = +\\tfrac12 \\text{ or } -\\tfrac12' },
          { label: 'Counts', tex: '\\text{orbitals per subshell} = 2\\ell + 1, \\qquad \\text{orbitals per shell} = n^2, \\qquad \\text{electrons per shell} = 2n^2' },
          { label: 'Shell table', tex: '\\begin{array}{c|l|c|c} n & \\text{subshells} & \\text{orbitals} & e^- \\\\ \\hline 1 & 1s & 1 & 2 \\\\ 2 & 2s,\\,2p & 4 & 8 \\\\ 3 & 3s,\\,3p,\\,3d & 9 & 18 \\\\ 4 & 4s,\\,4p,\\,4d,\\,4f & 16 & 32 \\end{array}' },
          { label: 'Nodes', tex: '\\text{angular} = \\ell, \\qquad \\text{radial} = n - \\ell - 1, \\qquad \\text{total} = n - 1', text: 'Example: $3p$ has 1 angular node (a plane) and 1 radial node.' },
          { label: 'Not allowed', text: '$2d$ ($\\ell$ must be < $n$), $\\ell = 1$ with $m_\\ell = 2$, $m_s = 1$, $n = 0$.' },
        ],
      },
      {
        title: 'Filling rules',
        items: [
          { label: 'Aufbau order', tex: '1s\\ 2s\\ 2p\\ 3s\\ 3p\\ 4s\\ 3d\\ 4p\\ 5s\\ 4d\\ 5p\\ 6s\\ 4f\\ 5d\\ 6p\\ 7s\\ 5f\\ 6d\\ 7p', text: 'The $n + \\ell$ rule: lower $n + \\ell$ fills first; on a tie, lower $n$ first ($4s$: 4 before $3d$: 5).' },
          { label: 'Pauli exclusion principle', text: 'No two electrons in an atom share all four quantum numbers, so an orbital holds at most 2 electrons, with opposite spins.' },
          { label: "Hund's rule", text: 'In degenerate orbitals put one electron in each, spins parallel, before pairing. Example N: $2p$ ↑ ↑ ↑ (3 unpaired), O: ↑↓ ↑ ↑ (2 unpaired).' },
          { label: 'Shielding', tex: 'Z_{\\text{eff}} \\approx Z - S', text: 'Core electrons shield well; same-shell electrons poorly. In many-electron atoms $s < p < d < f$ in energy within a shell because penetration differs.' },
          { label: 'Exceptions', tex: '\\ce{Cr}: [\\ce{Ar}]\\,4s^1 3d^5, \\quad \\ce{Cu}: [\\ce{Ar}]\\,4s^1 3d^{10}', text: 'Same pattern for $\\ce{Mo}$, $\\ce{Ag}$, $\\ce{Au}$: half-filled and filled $d$ subshells are favored.' },
          { label: 'Transition-metal cations', tex: '\\ce{Fe}: [\\ce{Ar}]\\,4s^2 3d^6 \\;\\to\\; \\ce{Fe^2+}: [\\ce{Ar}]\\,3d^6, \\quad \\ce{Fe^3+}: [\\ce{Ar}]\\,3d^5', text: 'Remove $ns$ electrons **before** $(n-1)d$ electrons.' },
          { label: 'Anions and isoelectronic species', tex: '\\ce{O^2-},\\ \\ce{F-},\\ \\ce{Ne},\\ \\ce{Na+},\\ \\ce{Mg^2+}: \\ 1s^2 2s^2 2p^6', text: 'Same configuration; radius shrinks as nuclear charge grows.' },
        ],
      },
      {
        title: 'Magnetism',
        items: [
          { label: 'Paramagnetic', text: 'At least one unpaired electron; drawn into a magnetic field. Examples: $\\ce{O}$ (2 unpaired), $\\ce{Fe}$ (4), $\\ce{Fe^3+}$ (5), $\\ce{O2}$ molecule (2).' },
          { label: 'Diamagnetic', text: 'All electrons paired; weakly pushed out of a field. Examples: $\\ce{Zn}$, $\\ce{Zn^2+}$, $\\ce{Cu+}$, $\\ce{N2}$, noble gases.' },
          { label: 'Counting unpaired electrons', text: 'Write the valence configuration, draw orbital boxes, fill by Hund\'s rule, count single arrows.' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Bonding
  {
    id: 'gchem-bonding',
    title: 'Bonding & Molecular Structure',
    course: 'genchem',
    icon: '🔗',
    description: 'Formal charge, resonance and bond order, the full VSEPR table, hybridization, molecular orbital bond orders and lattice-energy trends.',
    sections: [
      {
        title: 'Lewis structures and formal charge',
        items: [
          { label: 'Formal charge', tex: '\\text{FC} = V - N - \\tfrac12 B', text: '$V$ = valence electrons of the free atom, $N$ = nonbonding (lone-pair) electrons, $B$ = bonding electrons. Formal charges sum to the overall charge.' },
          { label: 'Shortcut', tex: '\\text{FC} = V - (\\text{dots} + \\text{lines})', text: 'Count each lone-pair electron as a dot and each bond as one line.' },
          { label: 'Best structure', text: 'Formal charges as close to zero as possible; any negative formal charge on the most electronegative atom; avoid like charges on adjacent atoms.' },
          { label: 'Example: ozone', tex: '\\ce{O=O-O}: \\ \\text{FC} = 0,\\ +1,\\ -1', text: 'Central O: $6 - 2 - \\tfrac12(6) = +1$; single-bonded O: $6 - 6 - \\tfrac12(2) = -1$.' },
          { label: 'Octet exceptions', text: 'Electron-deficient ($\\ce{BF3}$, B has 6), odd-electron radicals ($\\ce{NO}$, $\\ce{NO2}$), expanded octets for period 3 and below ($\\ce{PCl5}$, $\\ce{SF6}$, $\\ce{XeF4}$).' },
        ],
      },
      {
        title: 'Resonance and bond order (Lewis)',
        items: [
          { label: 'Bond order', tex: '\\text{bond order} = \\frac{\\text{total bonds between the two atom types}}{\\text{number of bond positions}}', text: 'Single 1, double 2, triple 3; resonance averages them.' },
          { label: 'Resonance examples', tex: '\\ce{O3}: \\tfrac32, \\qquad \\ce{NO3-},\\ \\ce{CO3^2-}: \\tfrac43, \\qquad \\ce{C6H6}\\ (\\ce{C-C}): \\tfrac32' },
          { label: 'Order, length, strength', tex: '\\ce{C-C}\\ 154\\ \\text{pm},\\quad \\ce{C=C}\\ 134\\ \\text{pm},\\quad \\ce{C#C}\\ 120\\ \\text{pm}', text: 'Higher bond order → shorter and stronger bond (roughly 350, 610, 840 kJ/mol).' },
          { label: 'Bond enthalpies → ΔH', tex: '\\Delta H \\approx \\sum D(\\text{bonds broken}) - \\sum D(\\text{bonds formed})', text: 'Estimate only (tables are averages). Gas-phase reactions.' },
        ],
      },
      {
        title: 'VSEPR (A = central atom, X = bonded atom, E = lone pair)',
        items: [
          { label: 'Electron groups', text: 'Count bonded atoms + lone pairs on the central atom. A double or triple bond is **one** group. Electron geometry follows the total; molecular shape names only the atoms.' },
          { label: '2 groups', tex: '\\begin{array}{llll} \\ce{AX2} & \\text{linear} & 180^\\circ & \\ce{CO2},\\ \\ce{BeCl2},\\ \\ce{HCN} \\end{array}' },
          { label: '3 groups (trigonal planar)', tex: '\\begin{array}{llll} \\ce{AX3} & \\text{trigonal planar} & 120^\\circ & \\ce{BF3},\\ \\ce{SO3},\\ \\ce{CO3^2-} \\\\ \\ce{AX2E} & \\text{bent} & <120^\\circ & \\ce{SO2},\\ \\ce{O3},\\ \\ce{NO2-} \\end{array}' },
          { label: '4 groups (tetrahedral)', tex: '\\begin{array}{llll} \\ce{AX4} & \\text{tetrahedral} & 109.5^\\circ & \\ce{CH4},\\ \\ce{NH4+},\\ \\ce{SO4^2-} \\\\ \\ce{AX3E} & \\text{trigonal pyramidal} & \\approx 107^\\circ & \\ce{NH3},\\ \\ce{H3O+} \\\\ \\ce{AX2E2} & \\text{bent} & \\approx 104.5^\\circ & \\ce{H2O},\\ \\ce{OF2} \\end{array}' },
          { label: '5 groups (trigonal bipyramidal)', tex: '\\begin{array}{llll} \\ce{AX5} & \\text{trigonal bipyramidal} & 90^\\circ,\\ 120^\\circ,\\ 180^\\circ & \\ce{PCl5} \\\\ \\ce{AX4E} & \\text{seesaw} & <90^\\circ,\\ <120^\\circ & \\ce{SF4} \\\\ \\ce{AX3E2} & \\text{T-shaped} & <90^\\circ & \\ce{ClF3} \\\\ \\ce{AX2E3} & \\text{linear} & 180^\\circ & \\ce{XeF2},\\ \\ce{I3-} \\end{array}', text: 'Lone pairs take **equatorial** positions (more room: 120° neighbors instead of 90°).' },
          { label: '6 groups (octahedral)', tex: '\\begin{array}{llll} \\ce{AX6} & \\text{octahedral} & 90^\\circ,\\ 180^\\circ & \\ce{SF6} \\\\ \\ce{AX5E} & \\text{square pyramidal} & <90^\\circ & \\ce{BrF5} \\\\ \\ce{AX4E2} & \\text{square planar} & 90^\\circ & \\ce{XeF4},\\ \\ce{ICl4-} \\end{array}', text: 'A second lone pair goes **trans** (opposite) to the first.' },
          { label: 'Repulsion ranking', text: 'lone pair–lone pair > lone pair–bond pair > bond pair–bond pair, so lone pairs compress bond angles; multiple bonds also squeeze neighboring angles slightly.' },
          { label: 'Polarity', text: 'Polar if bond dipoles do not cancel: any lone pairs on the center (except $\\ce{AX2E3}$ and $\\ce{AX4E2}$ with identical X) or different outer atoms usually make it polar.' },
        ],
      },
      {
        title: 'Hybridization (valence bond theory)',
        items: [
          { label: 'Groups → hybrid set', tex: '\\begin{array}{c|l|l|c} \\text{groups} & \\text{hybrid} & \\text{electron geometry} & \\text{angle} \\\\ \\hline 2 & sp & \\text{linear} & 180^\\circ \\\\ 3 & sp^2 & \\text{trigonal planar} & 120^\\circ \\\\ 4 & sp^3 & \\text{tetrahedral} & 109.5^\\circ \\\\ 5 & sp^3d & \\text{trigonal bipyramidal} & 90^\\circ,\\ 120^\\circ \\\\ 6 & sp^3d^2 & \\text{octahedral} & 90^\\circ \\end{array}', text: 'Number of hybrid orbitals = number of atomic orbitals mixed = electron groups. ($sp^3d$ and $sp^3d^2$ are the textbook model; modern theory explains these molecules without $d$ orbitals.)' },
          { label: 'Sigma and pi bonds', text: 'Single bond = 1 σ. Double = 1 σ + 1 π. Triple = 1 σ + 2 π. σ bonds use hybrid (end-on) overlap; π bonds use leftover unhybridized $p$ orbitals (side-by-side) and block rotation.' },
          { label: 'Examples', tex: '\\ce{CH4}\\ sp^3, \\quad \\ce{C2H4}\\ sp^2\\ (5\\sigma,\\ 1\\pi), \\quad \\ce{C2H2}\\ sp\\ (3\\sigma,\\ 2\\pi), \\quad \\ce{CO2}\\ \\text{C: } sp' },
        ],
      },
      {
        title: 'Molecular orbital theory',
        items: [
          { label: 'MO bond order', tex: '\\text{bond order} = \\tfrac12\\left(n_{\\text{bonding}} - n_{\\text{antibonding}}\\right)', text: 'Bond order 0 → the molecule is not stable ($\\ce{He2}$, $\\ce{Ne2}$). Higher order → stronger, shorter bond.' },
          { label: 'Orbital count', text: '$n$ atomic orbitals combine into $n$ molecular orbitals: one bonding (lower energy) and one antibonding (*, higher) per pair.' },
          { label: 'Order: $\\ce{Li2}$ to $\\ce{N2}$', tex: '\\sigma_{2s} < \\sigma^*_{2s} < \\pi_{2p} < \\sigma_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}', text: '$2s$–$2p$ mixing pushes $\\sigma_{2p}$ above $\\pi_{2p}$.' },
          { label: 'Order: $\\ce{O2}$, $\\ce{F2}$, $\\ce{Ne2}$', tex: '\\sigma_{2s} < \\sigma^*_{2s} < \\sigma_{2p} < \\pi_{2p} < \\pi^*_{2p} < \\sigma^*_{2p}' },
          { label: 'Second-period diatomics', tex: '\\begin{array}{l|cccccccc} & \\ce{Li2} & \\ce{Be2} & \\ce{B2} & \\ce{C2} & \\ce{N2} & \\ce{O2} & \\ce{F2} & \\ce{Ne2} \\\\ \\hline \\text{bond order} & 1 & 0 & 1 & 2 & 3 & 2 & 1 & 0 \\\\ \\text{unpaired } e^- & 0 & 0 & 2 & 0 & 0 & 2 & 0 & 0 \\end{array}', text: '$\\ce{B2}$ and $\\ce{O2}$ are paramagnetic, which Lewis structures cannot explain for $\\ce{O2}$.' },
          { label: 'Ions', tex: '\\ce{O2+}\\ 2.5, \\quad \\ce{O2}\\ 2, \\quad \\ce{O2-}\\ 1.5, \\quad \\ce{O2^2-}\\ 1, \\qquad \\ce{N2+}\\ 2.5, \\quad \\ce{NO}\\ 2.5', text: 'Removing an antibonding electron raises bond order; removing a bonding electron lowers it.' },
        ],
      },
      {
        title: 'Ionic bonding and lattice energy',
        items: [
          { label: 'Coulomb scaling', tex: 'U \\propto \\frac{|Q_1 Q_2|}{r_1 + r_2}', text: 'Lattice energy $U$ (energy to separate a mole of solid into gaseous ions) is larger for **higher charges** (dominant) and **smaller ions**.' },
          { label: 'Trends (approx., kJ/mol)', tex: '\\ce{NaF}\\ 923 > \\ce{NaCl}\\ 787 > \\ce{NaBr}\\ 747 > \\ce{NaI}\\ 704, \\qquad \\ce{MgO} \\approx 3800', text: 'Charges $2\\times2$ versus $1\\times1$ quadruple the numerator. Values vary slightly by source.' },
          { label: 'Born–Haber cycle', tex: '\\Delta H^\\circ_f(\\ce{MX}) = \\Delta H_{\\text{sub}}(\\ce{M}) + IE_1(\\ce{M}) + \\tfrac12 D(\\ce{X2}) + EA(\\ce{X}) - U', text: 'Hess\'s law around a cycle; with EA as the enthalpy change for $\\ce{X(g) + e- -> X-(g)}$ (negative for halogens).' },
          { label: 'Consequences', text: 'Higher lattice energy → higher melting point and often lower solubility ($\\ce{MgO}$ melts near 2800 °C; $\\ce{NaCl}$ at 801 °C).' },
        ],
      },
    ],
  },

  // ----------------------------------------- Thermochemistry & thermodynamics
  {
    id: 'gchem-thermo',
    title: 'Thermochemistry & Thermodynamics',
    course: 'genchem',
    icon: '🔥',
    description: 'First law and sign conventions, PV work, calorimetry, Hess\'s law, enthalpies of formation, entropy, Gibbs energy, the four sign cases and the links between ΔG, Q, K and temperature.',
    sections: [
      {
        title: 'First law (system point of view)',
        items: [
          { label: 'Internal energy', tex: '\\Delta E = q + w', text: '$q > 0$: heat flows **into** the system. $w > 0$: work done **on** the system. Energy of the universe is conserved.' },
          { label: 'Expansion work (constant external P)', tex: 'w = -P_{\\text{ext}}\\,\\Delta V, \\qquad 1\\ \\text{L·atm} = 101.325\\ \\text{J}', text: 'Expansion ($\\Delta V > 0$) gives $w < 0$. Example: expanding 2.0 L against 1.0 atm, $w = -2.0\\ \\text{L·atm} = -203\\ \\text{J}$.' },
          { label: 'Work as an integral', tex: 'w = -\\int_{V_1}^{V_2} P\\,dV \\;\\xrightarrow{\\text{ideal gas, reversible, isothermal}}\\; w = -nRT\\ln\\frac{V_2}{V_1}' },
          { label: 'Enthalpy', tex: 'H = E + PV, \\qquad \\Delta H = q_P \\ \\text{(constant pressure)}, \\qquad \\Delta E = q_V \\ \\text{(constant volume)}' },
          { label: 'ΔH vs ΔE for gas reactions', tex: '\\Delta H = \\Delta E + \\Delta n_{\\text{gas}} RT', text: '$\\Delta n_{\\text{gas}}$ = moles of gaseous products − gaseous reactants.' },
          { label: 'Signs', text: '$\\Delta H < 0$ exothermic (heat released, surroundings warm). $\\Delta H > 0$ endothermic (cold pack: $\\ce{NH4NO3}$ dissolving).' },
        ],
      },
      {
        title: 'Calorimetry',
        items: [
          { label: 'Heat and temperature', tex: 'q = mc\\Delta T, \\qquad q = C\\Delta T, \\qquad q = nC_m\\Delta T', text: '$c$ = specific heat (J/(g·°C)), $C$ = heat capacity (J/°C), $C_m$ = molar heat capacity. Water: $c = 4.184$.' },
          { label: 'Coffee-cup (constant P)', tex: 'q_{\\text{rxn}} = -q_{\\text{soln}} = -m_{\\text{soln}}\\,c\\,\\Delta T, \\qquad \\Delta H_{\\text{rxn}} = \\frac{q_{\\text{rxn}}}{n}' },
          { label: 'Bomb (constant V)', tex: 'q_{\\text{rxn}} = -C_{\\text{cal}}\\,\\Delta T = \\Delta E_{\\text{rxn}}' },
          { label: 'Thermal equilibrium', tex: 'q_{\\text{hot}} + q_{\\text{cold}} = 0 \\;\\Rightarrow\\; m_1c_1(T_f - T_1) + m_2c_2(T_f - T_2) = 0' },
          { label: 'Phase changes', tex: 'q = n\\,\\Delta H_{\\text{fus}}, \\qquad q = n\\,\\Delta H_{\\text{vap}}', text: 'Temperature is constant during a phase change (flat parts of a heating curve).' },
        ],
      },
      {
        title: "Hess's law and enthalpies of formation",
        items: [
          { label: 'Manipulating equations', text: 'Reverse a reaction → change the sign of $\\Delta H$. Multiply coefficients by $n$ → multiply $\\Delta H$ by $n$. Add reactions → add $\\Delta H$ values.' },
          { label: 'Standard enthalpy of formation', tex: '\\Delta H^\\circ_f: \\ \\text{1 mol compound from elements in standard states}', text: '$\\Delta H^\\circ_f = 0$ for elements in their standard state ($\\ce{O2(g)}$, $\\ce{C(s, graphite)}$, $\\ce{Br2(l)}$), not for $\\ce{O3}$ or $\\ce{O(g)}$.' },
          { label: 'From formation data', tex: '\\Delta H^\\circ_{\\text{rxn}} = \\sum n\\,\\Delta H^\\circ_f(\\text{products}) - \\sum m\\,\\Delta H^\\circ_f(\\text{reactants})' },
          { label: 'Example: methane combustion', tex: '\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}: \\ (-393.5) + 2(-285.8) - (-74.6) = -890.5\\ \\text{kJ}', text: 'Data (kJ/mol): $\\ce{CO2(g)}$ −393.5, $\\ce{H2O(l)}$ −285.8, $\\ce{CH4(g)}$ −74.6 (OpenStax Appendix G).' },
        ],
      },
      {
        title: 'Entropy and the second law',
        items: [
          { label: 'Second law', tex: '\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0 \\ \\text{for a spontaneous process}' },
          { label: 'Surroundings', tex: '\\Delta S_{\\text{surr}} = -\\frac{\\Delta H_{\\text{sys}}}{T}' },
          { label: 'Definitions', tex: '\\Delta S = \\frac{q_{\\text{rev}}}{T}, \\qquad S = k_B \\ln W', text: '$W$ = number of microstates. Third law: $S = 0$ for a perfect crystal at 0 K, so $S^\\circ$ values are absolute and positive for substances.' },
          { label: 'Phase transition', tex: '\\Delta S_{\\text{trans}} = \\frac{\\Delta H_{\\text{trans}}}{T_{\\text{trans}}}' },
          { label: 'Ideal gas, isothermal', tex: '\\Delta S = nR\\ln\\frac{V_2}{V_1}' },
          { label: 'Standard reaction entropy', tex: '\\Delta S^\\circ_{\\text{rxn}} = \\sum n\\,S^\\circ(\\text{products}) - \\sum m\\,S^\\circ(\\text{reactants})', text: '$S^\\circ$ in J/(mol·K): watch the units when combining with $\\Delta H$ in kJ.' },
          { label: 'Predicting the sign', text: '$\\Delta S > 0$ for: solid → liquid → gas, more moles of gas, dissolving a solid, heating, larger or more flexible molecules.' },
        ],
      },
      {
        title: 'Gibbs free energy',
        items: [
          { label: 'Definition (constant T, P)', tex: '\\Delta G = \\Delta H - T\\Delta S = -T\\Delta S_{\\text{univ}}', text: '$\\Delta G < 0$ spontaneous, $= 0$ at equilibrium, $> 0$ nonspontaneous (reverse is spontaneous).' },
          { label: 'From formation data', tex: '\\Delta G^\\circ_{\\text{rxn}} = \\sum n\\,\\Delta G^\\circ_f(\\text{products}) - \\sum m\\,\\Delta G^\\circ_f(\\text{reactants})', text: 'Valid only at 25 °C; at other $T$ use $\\Delta H^\\circ - T\\Delta S^\\circ$.' },
          { label: 'The four sign cases', tex: '\\begin{array}{cc|l} \\Delta H & \\Delta S & \\text{spontaneous?} \\\\ \\hline - & + & \\text{at all } T \\\\ + & - & \\text{at no } T \\\\ - & - & \\text{at low } T\\ (T < \\Delta H/\\Delta S) \\\\ + & + & \\text{at high } T\\ (T > \\Delta H/\\Delta S) \\end{array}' },
          { label: 'Crossover temperature', tex: 'T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}', text: 'Where $\\Delta G^\\circ = 0$ (assumes $\\Delta H^\\circ$, $\\Delta S^\\circ$ roughly constant). At a phase change it is the transition temperature.' },
          { label: 'Example: ammonia synthesis', tex: '\\ce{N2 + 3H2 -> 2NH3}: \\ \\Delta G^\\circ = -91.8\\ \\text{kJ} - (298.15\\ \\text{K})(-0.1981\\ \\text{kJ/K}) = -32.7\\ \\text{kJ}', text: 'Spontaneous at 25 °C, but $\\Delta S < 0$ makes it nonspontaneous above about 463 K under standard conditions.' },
          { label: 'Maximum useful work', tex: '|w_{\\text{max}}| = -\\Delta G', text: 'The most non-expansion work a spontaneous process (ΔG < 0) can deliver.' },
        ],
      },
      {
        title: 'ΔG, Q, K and temperature',
        items: [
          { label: 'Nonstandard conditions', tex: '\\Delta G = \\Delta G^\\circ + RT\\ln Q', text: '$Q < K$: $\\Delta G < 0$, reaction runs forward. $Q > K$: runs backward.' },
          { label: 'Equilibrium constant', tex: '\\Delta G^\\circ = -RT\\ln K, \\qquad K = e^{-\\Delta G^\\circ/RT}', text: 'Use $R = 8.314$ J/(mol·K) and $\\Delta G^\\circ$ in **J**. $\\Delta G^\\circ < 0 \\iff K > 1$.' },
          { label: 'Rule of thumb at 25 °C', tex: 'RT\\ln 10 = 5.71\\ \\text{kJ/mol}', text: 'Each 5.7 kJ/mol more negative $\\Delta G^\\circ$ multiplies $K$ by 10. Ammonia example: $K = e^{32\\,700/(8.314 \\times 298.15)} \\approx 5 \\times 10^{5}$.' },
          { label: "van 't Hoff equation", tex: '\\ln\\frac{K_2}{K_1} = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)', text: 'Endothermic: $K$ grows with $T$. Exothermic: $K$ shrinks with $T$.' },
          { label: 'Linear form', tex: '\\ln K = -\\frac{\\Delta H^\\circ}{R}\\cdot\\frac{1}{T} + \\frac{\\Delta S^\\circ}{R}', text: 'Plot $\\ln K$ vs $1/T$: slope $-\\Delta H^\\circ/R$, intercept $\\Delta S^\\circ/R$.' },
        ],
      },
    ],
  },

  // ------------------------------------------ Gases, liquids, solids, solutions
  {
    id: 'gchem-states-solutions',
    title: 'Gases, Liquids, Solids & Solutions',
    course: 'genchem',
    icon: '🫧',
    description: 'Ideal and real gases, kinetic theory, vapor pressure, unit cells, concentration units, Henry\'s and Raoult\'s laws and colligative properties.',
    sections: [
      {
        title: 'Ideal gases',
        items: [
          { label: 'Ideal gas law', tex: 'PV = nRT, \\qquad R = \\pu{0.08206 L atm K-1 mol-1}', text: 'T in kelvins, P absolute. Combined law: $\\frac{P_1V_1}{n_1T_1} = \\frac{P_2V_2}{n_2T_2}$.' },
          { label: 'Density and molar mass', tex: 'd = \\frac{PM}{RT}, \\qquad M = \\frac{dRT}{P} = \\frac{mRT}{PV}' },
          { label: "Dalton's law", tex: 'P_{\\text{total}} = \\sum P_i, \\qquad P_i = \\chi_i P_{\\text{total}}, \\qquad \\chi_i = \\frac{n_i}{n_{\\text{total}}}', text: 'Gas collected over water: $P_{\\text{gas}} = P_{\\text{total}} - P_{\\ce{H2O}}$ (23.8 torr at 25 °C).' },
          { label: 'Molar volume', tex: 'V_m = 22.41\\ \\text{L/mol (0 °C, 1 atm)}, \\qquad 24.47\\ \\text{L/mol (25 °C, 1 atm)}' },
        ],
      },
      {
        title: 'Kinetic-molecular theory',
        items: [
          { label: 'Average kinetic energy', tex: '\\overline{KE} = \\tfrac32 k_B T \\ \\text{per molecule} = \\tfrac32 RT \\ \\text{per mole}', text: 'Depends only on $T$, not on the identity of the gas.' },
          { label: 'Root-mean-square speed', tex: 'u_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}', text: '$R = 8.314$ J/(mol·K) and $M$ in **kg/mol**. $\\ce{N2}$ at 298 K: $\\sqrt{3(8.314)(298.15)/0.028014} = 515$ m/s.' },
          { label: 'Other speeds', tex: 'u_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}} < \\bar{u} = \\sqrt{\\frac{8RT}{\\pi M}} < u_{\\text{rms}}', text: 'Most probable, mean, rms: all from the Maxwell–Boltzmann distribution, which flattens and shifts right as $T$ rises or $M$ falls.' },
          { label: "Graham's law of effusion", tex: '\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}, \\qquad \\frac{t_1}{t_2} = \\sqrt{\\frac{M_1}{M_2}}', text: '$\\ce{H2}$ effuses $\\sqrt{32.00/2.016} = 3.98$ times as fast as $\\ce{O2}$.' },
        ],
      },
      {
        title: 'Real gases',
        items: [
          { label: 'van der Waals equation', tex: '\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT', text: '$a$ corrects for attractions (real pressure is lower), $b$ for molecular volume (less free space).' },
          { label: 'Solved for P', tex: 'P = \\frac{nRT}{V - nb} - \\frac{an^2}{V^2}' },
          { label: 'Typical constants', tex: '\\ce{N2}: a = 1.39\\ \\tfrac{\\text{L}^2\\text{atm}}{\\text{mol}^2},\\ b = 0.0391\\ \\tfrac{\\text{L}}{\\text{mol}}; \\qquad \\ce{CO2}: a = 3.59,\\ b = 0.0427' },
          { label: 'When gases are ideal', text: 'High $T$ and low $P$. Deviations grow at high pressure (volume matters) and near condensation (attractions matter). Compressibility $Z = PV/nRT = 1$ for an ideal gas.' },
        ],
      },
      {
        title: 'Liquids and phase changes',
        items: [
          { label: 'Intermolecular forces', text: 'London dispersion (all molecules; grows with size and polarizability) < dipole–dipole < hydrogen bonding (H on N, O, F) < ion–dipole. Stronger forces → higher boiling point, higher $\\Delta H_{\\text{vap}}$, lower vapor pressure, higher surface tension and viscosity.' },
          { label: 'Clausius–Clapeyron', tex: '\\ln P = -\\frac{\\Delta H_{\\text{vap}}}{R}\\cdot\\frac{1}{T} + C', text: 'Plot $\\ln P$ vs $1/T$: a line with slope $-\\Delta H_{\\text{vap}}/R$.' },
          { label: 'Two-point form', tex: '\\ln\\frac{P_2}{P_1} = \\frac{\\Delta H_{\\text{vap}}}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)', text: 'Normal boiling point: vapor pressure = 1 atm. Water boils lower at altitude because the outside pressure is lower.' },
          { label: 'Phase diagram', text: 'Lines: two phases coexist. Triple point: three phases. Beyond the critical point: supercritical fluid. Water\'s solid–liquid line slopes left (ice is less dense than liquid water).' },
        ],
      },
      {
        title: 'Cubic unit cells',
        items: [
          { label: 'Counting atoms', tex: '\\text{corner } \\tfrac18, \\quad \\text{edge } \\tfrac14, \\quad \\text{face } \\tfrac12, \\quad \\text{body (interior) } 1' },
          { label: 'Cell types', tex: '\\begin{array}{l|c|c|c|c} & \\text{atoms/cell} & \\text{edge } a & \\text{CN} & \\text{packing} \\\\ \\hline \\text{simple cubic} & 1 & a = 2r & 6 & 52\\% \\\\ \\text{body-centered (BCC)} & 2 & a = 4r/\\sqrt3 & 8 & 68\\% \\\\ \\text{face-centered (FCC, ccp)} & 4 & a = 2\\sqrt2\\,r & 12 & 74\\% \\end{array}', text: 'Touching atoms lie along the edge (SC), body diagonal $\\sqrt3\\,a = 4r$ (BCC), face diagonal $\\sqrt2\\,a = 4r$ (FCC). Hexagonal close packing is also 74%, CN 12.' },
          { label: 'Density', tex: 'd = \\frac{Z\\,M}{N_A\\,a^3}', text: '$Z$ = atoms (or formula units) per cell. Copper (FCC, $a = 361.5$ pm $= 3.615 \\times 10^{-8}$ cm): $d = \\frac{4(63.55)}{(6.022\\times10^{23})(3.615\\times10^{-8})^3} = 8.94\\ \\text{g/cm}^3$.' },
          { label: 'Ionic lattices', text: '$\\ce{NaCl}$ (rock salt): FCC anions, cations in octahedral holes, 4 formula units/cell, $a = 2(r_+ + r_-)$. $\\ce{CsCl}$: simple cubic anions with one cation at the center, 1 formula unit/cell, $\\sqrt3\\,a = 2(r_+ + r_-)$.' },
        ],
      },
      {
        title: 'Concentration units',
        items: [
          { label: 'Molarity', tex: 'M = \\frac{\\text{mol solute}}{\\text{L solution}}', text: 'Changes slightly with temperature (volume expands).' },
          { label: 'Molality', tex: 'm = \\frac{\\text{mol solute}}{\\text{kg solvent}}', text: 'Temperature-independent; used for $\\Delta T_b$ and $\\Delta T_f$.' },
          { label: 'Mole fraction', tex: '\\chi_A = \\frac{n_A}{n_{\\text{total}}}, \\qquad \\sum \\chi_i = 1' },
          { label: 'Mass-based', tex: '\\text{mass }\\% = \\frac{m_{\\text{solute}}}{m_{\\text{solution}}} \\times 100, \\quad \\text{ppm} = \\frac{m_{\\text{solute}}}{m_{\\text{solution}}} \\times 10^6, \\quad \\text{ppb} = \\ldots \\times 10^9', text: 'Dilute water solutions: 1 ppm ≈ 1 mg/L.' },
          { label: 'Converting M ↔ m', text: 'Pick 1 L of solution, use the density to get its mass, subtract the solute mass to get kg of solvent.' },
        ],
      },
      {
        title: 'Gas solubility and vapor pressure',
        items: [
          { label: "Henry's law", tex: 'C_{\\text{gas}} = k_H\\,P_{\\text{gas}}', text: 'Solubility is proportional to partial pressure ($k_H \\approx \\pu{1.3e-3 M atm-1}$ for $\\ce{O2}$ in water at 25 °C). Gas solubility **falls** as $T$ rises. Divers: $\\ce{N2}$ dissolved at depth comes out on fast ascent (the bends).' },
          { label: "Raoult's law", tex: 'P_{\\text{solvent}} = \\chi_{\\text{solvent}}\\,P^\\circ_{\\text{solvent}}, \\qquad \\Delta P = \\chi_{\\text{solute}}\\,P^\\circ_{\\text{solvent}}', text: 'Nonvolatile solute lowers the vapor pressure.' },
          { label: 'Two volatile components', tex: 'P_{\\text{total}} = \\chi_A P^\\circ_A + \\chi_B P^\\circ_B', text: 'The vapor is richer in the more volatile component (the basis of distillation).' },
        ],
      },
      {
        title: 'Colligative properties',
        items: [
          { label: 'Boiling-point elevation', tex: '\\Delta T_b = i\\,K_b\\,m', text: '$T_b = T_b^\\circ + \\Delta T_b$.' },
          { label: 'Freezing-point depression', tex: '\\Delta T_f = i\\,K_f\\,m', text: '$T_f = T_f^\\circ - \\Delta T_f$ (with $\\Delta T_f$ as a positive magnitude). Ideal 1.00 m $\\ce{NaCl}$: $\\Delta T_f = 2(1.86)(1.00) = 3.72$ °C.' },
          { label: 'Osmotic pressure', tex: '\\Pi = i\\,MRT', text: '0.100 M glucose at 25 °C: $\\Pi = (0.100)(0.08206)(298.15) = 2.45$ atm. Reverse osmosis pushes water out of seawater with $P > \\Pi$.' },
          { label: "van 't Hoff factor", tex: 'i_{\\text{ideal}}: \\ \\text{glucose } 1,\\ \\ce{NaCl}\\ 2,\\ \\ce{CaCl2}\\ 3,\\ \\ce{Al2(SO4)3}\\ 5', text: 'Measured $i$ is a bit lower than ideal for ionic solutes (ion pairing), more so at higher concentration.' },
          { label: 'Constants', tex: '\\begin{array}{l|cc|cc} & T_b^\\circ\\ (\\text{°C}) & K_b & T_f^\\circ\\ (\\text{°C}) & K_f \\\\ \\hline \\ce{H2O} & 100.0 & 0.512 & 0.0 & 1.86 \\\\ \\text{benzene} & 80.1 & 2.53 & 5.5 & 5.12 \\end{array}', text: '$K$ in °C·kg/mol (OpenStax Table 11.2).' },
          { label: 'Molar mass from colligative data', text: 'Measure $\\Delta T$ or $\\Pi$ → solve for $m$ or $M$ → moles of solute → molar mass = grams ÷ moles. Osmotic pressure is best for large molecules (proteins, polymers).' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Kinetics
  {
    id: 'gchem-kinetics',
    title: 'Chemical Kinetics',
    course: 'genchem',
    icon: '⏱️',
    description: 'Reaction rates, rate laws and orders, method of initial rates, integrated rate laws for orders 0, 1 and 2, the Arrhenius equation and mechanism rules.',
    sections: [
      {
        title: 'Rates and rate laws',
        items: [
          { label: 'Rate of reaction', tex: '\\ce{aA + bB -> cC + dD}: \\quad \\text{rate} = -\\frac{1}{a}\\frac{d[\\ce{A}]}{dt} = -\\frac{1}{b}\\frac{d[\\ce{B}]}{dt} = \\frac{1}{c}\\frac{d[\\ce{C}]}{dt} = \\frac{1}{d}\\frac{d[\\ce{D}]}{dt}', text: 'Instantaneous rate = slope of the concentration–time curve (a derivative). Divide by coefficients so the rate is one number.' },
          { label: 'Rate law', tex: '\\text{rate} = k[\\ce{A}]^m[\\ce{B}]^n, \\qquad \\text{overall order} = m + n', text: 'Orders come from **experiment**, not from the balanced equation (except for elementary steps).' },
          { label: 'Units of k', tex: '\\text{order } n: \\ \\text{M}^{1-n}\\,\\text{s}^{-1} \\qquad (0: \\text{M s}^{-1},\\ 1: \\text{s}^{-1},\\ 2: \\text{M}^{-1}\\text{s}^{-1},\\ 3: \\text{M}^{-2}\\text{s}^{-1})' },
          { label: 'Method of initial rates', tex: '\\frac{\\text{rate}_2}{\\text{rate}_1} = \\left(\\frac{[\\ce{A}]_2}{[\\ce{A}]_1}\\right)^m \\;\\Rightarrow\\; m = \\frac{\\log(\\text{rate}_2/\\text{rate}_1)}{\\log([\\ce{A}]_2/[\\ce{A}]_1)}', text: 'Compare two runs where only [A] changes. Doubling [A]: rate ×1 (order 0), ×2 (order 1), ×4 (order 2).' },
          { label: 'Pseudo-first order', text: 'With B in large excess, $[\\ce{B}]$ is effectively constant: $\\text{rate} = k\'[\\ce{A}]$ with $k\' = k[\\ce{B}]^n$.' },
        ],
      },
      {
        title: 'Integrated rate laws',
        items: [
          { label: 'Summary table', tex: '\\begin{array}{c|c|c|c|c|c} \\text{order} & \\text{rate law} & \\text{integrated form} & \\text{linear plot} & \\text{slope} & t_{1/2} \\\\ \\hline 0 & k & [\\ce{A}] = [\\ce{A}]_0 - kt & [\\ce{A}] \\text{ vs } t & -k & [\\ce{A}]_0/(2k) \\\\ 1 & k[\\ce{A}] & \\ln[\\ce{A}] = \\ln[\\ce{A}]_0 - kt & \\ln[\\ce{A}] \\text{ vs } t & -k & \\ln 2/k \\\\ 2 & k[\\ce{A}]^2 & 1/[\\ce{A}] = 1/[\\ce{A}]_0 + kt & 1/[\\ce{A}] \\text{ vs } t & +k & 1/(k[\\ce{A}]_0) \\end{array}' },
          { label: 'Derivation (first order)', tex: '\\frac{d[\\ce{A}]}{dt} = -k[\\ce{A}] \\;\\Rightarrow\\; \\int_{[\\ce{A}]_0}^{[\\ce{A}]} \\frac{d[\\ce{A}]}{[\\ce{A}]} = -k\\int_0^t dt \\;\\Rightarrow\\; [\\ce{A}] = [\\ce{A}]_0\\,e^{-kt}', text: 'Separate variables and integrate; the other orders work the same way.' },
          { label: 'First-order half-life', tex: 't_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}', text: 'Constant: does not depend on concentration. After $n$ half-lives, $(\\tfrac12)^n$ remains. Zero-order half-lives get shorter; second-order ones get longer.' },
          { label: 'Fraction remaining', tex: '\\frac{[\\ce{A}]}{[\\ce{A}]_0} = e^{-kt} = \\left(\\tfrac12\\right)^{t/t_{1/2}}' },
          { label: 'Identifying the order', text: 'Make all three plots; the one that is a straight line gives the order, and its slope gives $k$.' },
        ],
      },
      {
        title: 'Temperature and activation energy',
        items: [
          { label: 'Arrhenius equation', tex: 'k = A\\,e^{-E_a/RT}', text: '$A$ = frequency factor (collision frequency × orientation factor); $e^{-E_a/RT}$ = fraction of collisions with enough energy.' },
          { label: 'Linear form', tex: '\\ln k = -\\frac{E_a}{R}\\cdot\\frac{1}{T} + \\ln A', text: 'Arrhenius plot: $\\ln k$ vs $1/T$ has slope $-E_a/R$.' },
          { label: 'Two-point form', tex: '\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)', text: 'Use $R = 8.314$ J/(mol·K) and $E_a$ in **J/mol**.' },
          { label: 'Rule of thumb', text: 'With $E_a \\approx 50$ kJ/mol, warming from 298 K to 308 K multiplies $k$ by about 1.9: roughly double per 10 °C near room temperature.' },
          { label: 'Energy diagram', tex: '\\Delta H = E_{a,\\text{forward}} - E_{a,\\text{reverse}}', text: 'A catalyst lowers $E_a$ for both directions by an alternate pathway; it does not change $\\Delta H$ or $K$.' },
        ],
      },
      {
        title: 'Mechanisms',
        items: [
          { label: 'Elementary steps', tex: '\\text{unimolecular } k[\\ce{A}], \\quad \\text{bimolecular } k[\\ce{A}][\\ce{B}] \\text{ or } k[\\ce{A}]^2, \\quad \\text{termolecular (rare) } k[\\ce{A}]^2[\\ce{B}]', text: 'For an elementary step only, the rate law follows from its coefficients (molecularity).' },
          { label: 'Valid mechanism', text: '(1) Steps add up to the overall equation. (2) The predicted rate law matches experiment. Agreement supports a mechanism; it never proves one.' },
          { label: 'Intermediates vs catalysts', text: '**Intermediate:** made in one step, used up in a later one; absent from the overall equation. **Catalyst:** used in an early step, regenerated later; also absent from the overall equation but present at the start.' },
          { label: 'Slow first step', text: 'The rate-determining (slowest) step sets the rate: rate law = that step\'s rate law.' },
          { label: 'Fast pre-equilibrium', tex: '\\ce{A + B <=>[k_1][k_{-1}] I} \\ (\\text{fast}) \\;\\Rightarrow\\; [\\ce{I}] = \\frac{k_1}{k_{-1}}[\\ce{A}][\\ce{B}]', text: 'Substitute into the slow step\'s rate law to remove the intermediate, so the final rate law contains only reactants (and catalysts).' },
          { label: 'Steady-state approximation', tex: '\\frac{d[\\ce{I}]}{dt} \\approx 0', text: 'For a reactive intermediate: set its rate of formation equal to its rate of consumption and solve for $[\\ce{I}]$.' },
        ],
      },
    ],
  },

  // -------------------------------------------- Equilibrium, acids & bases
  {
    id: 'gchem-equilibrium-acids-bases',
    title: 'Equilibrium, Acids & Bases',
    course: 'genchem',
    icon: '⚖️',
    description: 'Equilibrium expressions, Kp and Kc, manipulating K, Q vs K, Le Châtelier, ICE tables, weak acids and bases, buffers, titration key points and solubility products.',
    sections: [
      {
        title: 'Equilibrium constants',
        items: [
          { label: 'Law of mass action', tex: '\\ce{aA + bB <=> cC + dD}: \\quad K_c = \\frac{[\\ce{C}]^c[\\ce{D}]^d}{[\\ce{A}]^a[\\ce{B}]^b}, \\qquad K_p = \\frac{P_{\\ce{C}}^c P_{\\ce{D}}^d}{P_{\\ce{A}}^a P_{\\ce{B}}^b}', text: 'Equilibrium concentrations only. Leave out pure solids and liquids (including solvent water). $K$ depends only on temperature.' },
          { label: 'Kp from Kc', tex: 'K_p = K_c(RT)^{\\Delta n}, \\qquad R = 0.08206, \\qquad \\Delta n = n_{\\text{gas, products}} - n_{\\text{gas, reactants}}', text: '$\\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$: $\\Delta n = -2$, so $K_p = K_c(RT)^{-2}$.' },
          { label: 'Manipulating K', tex: '\\text{reverse: } K\' = \\frac{1}{K}, \\qquad \\times n: \\ K\' = K^n, \\qquad \\text{add reactions: } K = K_1K_2', text: 'Halving the equation gives $K^{1/2}$.' },
          { label: 'Size of K', text: '$K \\gg 1$: products favored. $K \\ll 1$: reactants favored. $K \\approx 1$: comparable amounts.' },
        ],
      },
      {
        title: 'Q, K and Le Châtelier',
        items: [
          { label: 'Reaction quotient', tex: 'Q < K \\Rightarrow \\text{forward}, \\qquad Q = K \\Rightarrow \\text{at equilibrium}, \\qquad Q > K \\Rightarrow \\text{reverse}', text: '$Q$ has the same form as $K$ but uses current concentrations.' },
          { label: 'Concentration', text: 'Add a reactant or remove a product → shifts right. Add a product → shifts left. $K$ unchanged.' },
          { label: 'Pressure / volume', text: 'Decrease volume (raise pressure) → shift toward **fewer moles of gas**. Adding an inert gas at constant volume → no shift.' },
          { label: 'Temperature', text: 'Treat heat as a reactant (endothermic) or product (exothermic). Heating an endothermic reaction → shifts right **and** $K$ increases. The only factor that changes $K$.' },
          { label: 'Catalyst', text: 'Reaches equilibrium faster; no shift, no change in $K$.' },
        ],
      },
      {
        title: 'ICE tables',
        items: [
          { label: 'Method', text: '**I**nitial concentrations → **C**hange in terms of $x$ using coefficients → **E**quilibrium = I + C → substitute into $K$ and solve.' },
          { label: 'Small-x approximation', tex: 'c_0 - x \\approx c_0 \\quad \\text{if } \\frac{x}{c_0} < 5\\%', text: 'Usually safe when $c_0/K > 400$. Always check afterward; if it fails, solve the quadratic (or iterate).' },
          { label: 'Quadratic', tex: 'x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}', text: 'Keep the root that gives positive concentrations.' },
          { label: 'Example: 0.10 M acetic acid', tex: 'K_a = \\frac{x^2}{0.10 - x} = 1.8 \\times 10^{-5} \\;\\Rightarrow\\; x \\approx \\sqrt{1.8 \\times 10^{-6}} = 1.34 \\times 10^{-3}\\ \\text{M}, \\ \\text{pH} = 2.87', text: 'Check: $1.34 \\times 10^{-3}/0.10 = 1.3\\% < 5\\%$. The exact quadratic gives $1.33 \\times 10^{-3}$ M, pH 2.88.' },
        ],
      },
      {
        title: 'Acid and base strength',
        items: [
          { label: 'Brønsted–Lowry pairs', tex: '\\ce{HA + H2O <=> H3O+ + A-}', text: 'Acid ↔ conjugate base differ by one $\\ce{H+}$. The stronger the acid, the weaker its conjugate base.' },
          { label: 'Ka and Kb', tex: 'K_a = \\frac{[\\ce{H3O+}][\\ce{A-}]}{[\\ce{HA}]}, \\qquad K_b = \\frac{[\\ce{HB+}][\\ce{OH-}]}{[\\ce{B}]}' },
          { label: 'Conjugate pair', tex: 'K_aK_b = K_w = 1.0 \\times 10^{-14}, \\qquad \\text{p}K_a + \\text{p}K_b = 14.00 \\ (25\\ \\text{°C})' },
          { label: 'p-notation', tex: '\\text{p}X = -\\log X: \\quad \\text{pH} + \\text{pOH} = 14.00, \\quad \\text{p}K_a = -\\log K_a', text: 'Smaller p$K_a$ → stronger acid.' },
          { label: 'Reference values', tex: '\\ce{CH3COOH}: K_a = 1.8 \\times 10^{-5}\\ (\\text{p}K_a = 4.74), \\qquad \\ce{NH3}: K_b = 1.8 \\times 10^{-5}\\ (\\ce{NH4+}\\ \\text{p}K_a = 9.26)' },
          { label: 'Weak acid / weak base', tex: '[\\ce{H3O+}] \\approx \\sqrt{K_a c_0}, \\qquad [\\ce{OH-}] \\approx \\sqrt{K_b c_0}', text: 'Percent ionization $= \\frac{x}{c_0}\\times100\\%$ rises as the acid is diluted.' },
          { label: 'Salts', text: 'Anion of a weak acid ($\\ce{CH3COO-}$, $\\ce{F-}$, $\\ce{CO3^2-}$) → basic. Cation of a weak base ($\\ce{NH4+}$) or small highly charged metal ion ($\\ce{Al^3+}$, $\\ce{Fe^3+}$) → acidic. Ions of strong acids/bases ($\\ce{Na+}$, $\\ce{Cl-}$, $\\ce{NO3-}$) → neutral.' },
          { label: 'Polyprotic acids', text: '$K_{a1} \\gg K_{a2} \\gg K_{a3}$; pH is set almost entirely by the first ionization.' },
        ],
      },
      {
        title: 'Buffers',
        items: [
          { label: 'Henderson–Hasselbalch', tex: '\\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]}', text: 'Mole ratio works too (same volume). Example: 0.10 M $\\ce{CH3COOH}$ + 0.20 M $\\ce{CH3COO-}$: pH $= 4.74 + \\log 2 = 5.05$.' },
          { label: 'Base form', tex: '\\text{pOH} = \\text{p}K_b + \\log\\frac{[\\ce{HB+}]}{[\\ce{B}]}' },
          { label: 'Choosing a buffer', text: 'Pick p$K_a$ within ±1 of the target pH. Capacity grows with total concentration; best at $[\\ce{A-}] = [\\ce{HA}]$.' },
          { label: 'Adding strong acid or base', text: 'First do the neutralization **in moles** ($\\ce{OH-}$ converts HA to $\\ce{A-}$; $\\ce{H3O+}$ converts $\\ce{A-}$ to HA), then apply Henderson–Hasselbalch.' },
        ],
      },
      {
        title: 'Titration key points',
        items: [
          { label: 'Strong acid + strong base', text: 'Equivalence pH = 7.00. Before: excess $\\ce{H3O+}$ / total volume. After: excess $\\ce{OH-}$ / total volume.' },
          { label: 'Weak acid + strong base', text: '**Start:** weak-acid ICE. **Buffer region:** Henderson–Hasselbalch. **Half-equivalence:** pH = p$K_a$. **Equivalence:** pH > 7 from $\\ce{A-}$ hydrolysis. **After:** excess $\\ce{OH-}$.' },
          { label: 'Weak base + strong acid', text: 'Half-equivalence: pOH = p$K_b$ (pH = p$K_a$ of $\\ce{HB+}$). Equivalence pH < 7.' },
          { label: 'Example: 25.0 mL 0.100 M acetic acid + 0.100 M NaOH', tex: '\\begin{array}{l|c|c} \\text{point} & V_{\\ce{NaOH}} & \\text{pH} \\\\ \\hline \\text{start} & 0 & 2.88 \\\\ \\text{half-equivalence} & 12.5\\ \\text{mL} & 4.74 \\\\ \\text{equivalence} & 25.0\\ \\text{mL} & 8.72 \\end{array}', text: 'At equivalence $[\\ce{A-}] = 0.0500$ M, $K_b = K_w/K_a = 5.6 \\times 10^{-10}$, $[\\ce{OH-}] = \\sqrt{K_b(0.0500)} = 5.3 \\times 10^{-6}$ M.' },
          { label: 'Indicators', text: 'Choose an indicator whose color change brackets the equivalence pH: phenolphthalein ≈ 8.2–10.0 (weak acid/strong base), methyl red ≈ 4.4–6.2 (weak base/strong acid), bromothymol blue ≈ 6.0–7.6 (strong/strong).' },
        ],
      },
      {
        title: 'Solubility equilibria',
        items: [
          { label: 'Solubility product', tex: '\\ce{M_xA_y(s) <=> xM^{y+}(aq) + yA^{x-}(aq)}, \\qquad K_{sp} = [\\ce{M^{y+}}]^x[\\ce{A^{x-}}]^y' },
          { label: 'Molar solubility s (pure water)', tex: '\\begin{array}{l|l|l|l} \\text{type} & \\text{example} & K_{sp} & s \\\\ \\hline 1:1 & \\ce{AgCl} & s^2 & \\sqrt{K_{sp}} \\\\ 1:2 \\text{ or } 2:1 & \\ce{CaF2},\\ \\ce{Ag2CrO4} & 4s^3 & \\sqrt[3]{K_{sp}/4} \\\\ 1:3 \\text{ or } 3:1 & \\ce{Fe(OH)3},\\ \\ce{Ag3PO4} & 27s^4 & \\sqrt[4]{K_{sp}/27} \\\\ 2:3 \\text{ or } 3:2 & \\ce{Bi2S3},\\ \\ce{Ca3(PO4)2} & 108s^5 & \\sqrt[5]{K_{sp}/108} \\end{array}', text: 'For $\\ce{M_xA_y}$: $K_{sp} = (xs)^x(ys)^y$. Compare solubilities of different types by $s$, not by $K_{sp}$.' },
          { label: 'Examples', tex: 'K_{sp} = 1.8 \\times 10^{-10}\\ (\\ce{AgCl}): s = 1.3 \\times 10^{-5}\\ \\text{M}; \\qquad K_{sp} = 3.9 \\times 10^{-11}\\ (\\ce{CaF2}): s = 2.1 \\times 10^{-4}\\ \\text{M}' },
          { label: 'Common-ion effect', tex: '\\ce{AgCl} \\text{ in } 0.10\\ \\text{M}\\ \\ce{NaCl}: \\ s \\approx \\frac{K_{sp}}{0.10} = 1.8 \\times 10^{-9}\\ \\text{M}', text: 'A shared ion pushes the equilibrium left and lowers solubility.' },
          { label: 'Will it precipitate?', tex: 'Q_{sp} > K_{sp} \\Rightarrow \\text{precipitate forms}, \\qquad Q_{sp} \\le K_{sp} \\Rightarrow \\text{no precipitate}', text: 'Use concentrations **after** mixing (account for dilution).' },
          { label: 'pH and complexes', text: 'Salts of basic anions ($\\ce{OH-}$, $\\ce{CO3^2-}$, $\\ce{F-}$, $\\ce{S^2-}$) dissolve more in acid. Complex-ion formation ($K_f$) also raises solubility: $\\ce{AgCl}$ dissolves in aqueous $\\ce{NH3}$ as $\\ce{[Ag(NH3)2]+}$.' },
        ],
      },
    ],
  },

  // --------------------------------------------- Electrochemistry & nuclear
  {
    id: 'gchem-electrochem-nuclear',
    title: 'Electrochemistry & Nuclear',
    course: 'genchem',
    icon: '🔋',
    description: 'Cell potentials, ΔG°, K and E°, the Nernst equation, electrolysis and Faraday\'s law, standard reduction potentials, decay types, first-order decay and binding energy.',
    sections: [
      {
        title: 'Galvanic cells',
        items: [
          { label: 'Electrodes', text: '**An Ox, Red Cat:** oxidation at the anode, reduction at the cathode. Electrons flow anode → cathode in the wire; the salt bridge carries ions to keep each side neutral. Galvanic: anode (−), cathode (+).' },
          { label: 'Cell notation', tex: '\\ce{Zn(s) | Zn^2+(aq) || Cu^2+(aq) | Cu(s)}', text: 'Anode on the left, cathode on the right, $\\|$ = salt bridge.' },
          { label: 'Standard cell potential', tex: 'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}', text: 'Both as **reduction** potentials. Never multiply $E^\\circ$ by coefficients: it is intensive.' },
          { label: 'Example: Daniell cell', tex: 'E^\\circ = 0.34 - (-0.76) = 1.10\\ \\text{V}' },
          { label: 'Spontaneity', text: '$E_{\\text{cell}} > 0$: spontaneous (galvanic). $E_{\\text{cell}} < 0$: needs an external supply (electrolytic).' },
        ],
      },
      {
        title: 'Standard reduction potentials (25 °C, V)',
        items: [
          { label: 'Strong oxidizers (top)', tex: '\\begin{array}{lr} \\ce{F2(g) + 2e- -> 2F-(aq)} & +2.87 \\\\ \\ce{MnO4-(aq) + 8H+(aq) + 5e- -> Mn^2+(aq) + 4H2O(l)} & +1.51 \\\\ \\ce{Cl2(g) + 2e- -> 2Cl-(aq)} & +1.36 \\\\ \\ce{O2(g) + 4H+(aq) + 4e- -> 2H2O(l)} & +1.23 \\\\ \\ce{Ag+(aq) + e- -> Ag(s)} & +0.80 \\\\ \\ce{Fe^3+(aq) + e- -> Fe^2+(aq)} & +0.77 \\\\ \\ce{Cu^2+(aq) + 2e- -> Cu(s)} & +0.34 \\end{array}' },
          { label: 'Reference and below', tex: '\\begin{array}{lr} \\ce{2H+(aq) + 2e- -> H2(g)} & 0.00 \\\\ \\ce{Pb^2+(aq) + 2e- -> Pb(s)} & -0.13 \\\\ \\ce{Ni^2+(aq) + 2e- -> Ni(s)} & -0.26 \\\\ \\ce{Fe^2+(aq) + 2e- -> Fe(s)} & -0.45 \\\\ \\ce{Zn^2+(aq) + 2e- -> Zn(s)} & -0.76 \\\\ \\ce{2H2O(l) + 2e- -> H2(g) + 2OH-(aq)} & -0.83 \\\\ \\ce{Al^3+(aq) + 3e- -> Al(s)} & -1.66 \\\\ \\ce{Mg^2+(aq) + 2e- -> Mg(s)} & -2.37 \\\\ \\ce{Na+(aq) + e- -> Na(s)} & -2.71 \\\\ \\ce{Li+(aq) + e- -> Li(s)} & -3.04 \\end{array}', text: 'Rounded from OpenStax Appendix L. Higher $E^\\circ$ = stronger oxidizing agent (left side); lower $E^\\circ$ = its metal is a stronger reducing agent.' },
        ],
      },
      {
        title: 'Thermodynamics of cells',
        items: [
          { label: 'Free energy', tex: '\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}, \\qquad \\Delta G = -nFE_{\\text{cell}}', text: '$n$ = moles of electrons transferred in the balanced equation; $F = 96\\,485$ C/mol; V × C = J. Daniell: $\\Delta G^\\circ = -2(96\\,485)(1.10) = -212$ kJ.' },
          { label: 'Equilibrium constant', tex: 'E^\\circ_{\\text{cell}} = \\frac{RT}{nF}\\ln K = \\frac{0.05916\\ \\text{V}}{n}\\log K \\ (25\\ \\text{°C})', text: 'Daniell: $\\log K = \\frac{2(1.10)}{0.05916} = 37.2$, so $K \\approx 1.5 \\times 10^{37}$.' },
          { label: 'The triangle', tex: '\\Delta G^\\circ = -RT\\ln K = -nFE^\\circ', text: '$E^\\circ > 0 \\iff \\Delta G^\\circ < 0 \\iff K > 1$.' },
        ],
      },
      {
        title: 'Nernst equation',
        items: [
          { label: 'General form', tex: 'E = E^\\circ - \\frac{RT}{nF}\\ln Q' },
          { label: 'At 25 °C', tex: 'E = E^\\circ - \\frac{0.05916\\ \\text{V}}{n}\\log Q', text: 'Each tenfold increase in $Q$ lowers $E$ by $0.0592/n$ V. At equilibrium $E = 0$ and $Q = K$ (a dead battery).' },
          { label: 'Concentration cell', tex: 'E^\\circ = 0, \\qquad E = \\frac{0.05916}{n}\\log\\frac{[\\text{concentrated}]}{[\\text{dilute}]}', text: 'Same electrode both sides; current flows until the concentrations equalize.' },
          { label: 'pH dependence', text: 'Half-reactions with $\\ce{H+}$ (like $\\ce{O2}$ or $\\ce{MnO4-}$) become weaker oxidizers as pH rises, because $[\\ce{H+}]$ appears in $Q$.' },
        ],
      },
      {
        title: "Electrolysis and Faraday's law",
        items: [
          { label: 'Charge and moles of electrons', tex: 'Q = It, \\qquad n_{e^-} = \\frac{It}{F}' },
          { label: 'Mass deposited', tex: 'm = \\frac{I\\,t\\,M}{nF}', text: '$n$ = electrons per ion reduced (2 for $\\ce{Cu^2+}$, 3 for $\\ce{Al^3+}$).' },
          { label: 'Example', tex: '2.00\\ \\text{A} \\times 3600\\ \\text{s} = 7200\\ \\text{C} \\;\\to\\; \\frac{7200}{96\\,485} = 0.07462\\ \\text{mol } e^- \\;\\to\\; \\frac{0.07462}{2} \\times 63.55 = 2.37\\ \\text{g}\\ \\ce{Cu}' },
          { label: 'Electrolytic cells', text: 'Anode is (+), cathode is (−), but oxidation is still at the anode. In water, check whether $\\ce{H2O}$ is oxidized/reduced more easily than the dissolved ions.' },
          { label: 'Batteries and corrosion', text: 'Lead–acid: 2.0 V per cell (6 cells = 12 V). Alkaline: 1.5 V. Lithium-ion: about 3.7 V nominal. Iron rusts by oxidation at anodic sites; zinc (galvanizing) or magnesium blocks protect it as sacrificial anodes.' },
        ],
      },
      {
        title: 'Nuclear decay',
        items: [
          { label: 'Balancing rule', text: 'Mass numbers (top) and atomic numbers (bottom) both add up on each side.' },
          { label: 'Alpha (Z − 2, A − 4)', tex: '\\ce{^{238}_{92}U -> ^{234}_{90}Th + ^{4}_{2}He}', text: 'Typical for heavy nuclei ($Z > 83$).' },
          { label: 'Beta minus (Z + 1)', tex: '\\ce{^{14}_{6}C -> ^{14}_{7}N + ^{0}_{-1}e}', text: 'A neutron becomes a proton; for nuclei with too many neutrons (above the band of stability).' },
          { label: 'Positron emission (Z − 1)', tex: '\\ce{^{18}_{9}F -> ^{18}_{8}O + ^{0}_{+1}e}', text: 'A proton becomes a neutron; for nuclei with too few neutrons. Used in PET scans.' },
          { label: 'Electron capture (Z − 1)', tex: '\\ce{^{40}_{19}K + ^{0}_{-1}e -> ^{40}_{18}Ar}', text: 'Same change as positron emission; an inner electron is absorbed.' },
          { label: 'Gamma', tex: '\\ce{^{99m}_{43}Tc -> ^{99}_{43}Tc + ^{0}_{0}\\gamma}', text: 'Energy only; often follows other decays. Penetration: α stopped by paper/skin, β by a few mm of aluminum, γ needs lead or thick concrete.' },
          { label: 'Fission and fusion', text: 'Both convert mass to energy by moving toward the binding-energy peak: heavy nuclei split (fission), light nuclei join (fusion, as in the Sun).' },
        ],
      },
      {
        title: 'Decay kinetics',
        items: [
          { label: 'First-order decay', tex: 'N = N_0\\,e^{-kt}, \\qquad \\ln\\frac{N}{N_0} = -kt, \\qquad t_{1/2} = \\frac{\\ln 2}{k}', text: 'Every radioactive decay is first order; $N$ can be atoms, mass or activity.' },
          { label: 'Activity', tex: 'A = kN, \\qquad 1\\ \\text{Bq} = 1\\ \\text{decay/s}, \\qquad 1\\ \\text{Ci} = 3.7 \\times 10^{10}\\ \\text{Bq}' },
          { label: 'Dating', tex: 't = \\frac{t_{1/2}}{\\ln 2}\\ln\\frac{N_0}{N}', text: 'Carbon-14: $t_{1/2} = 5730$ y. A sample with 25% of its original $\\ce{^{14}C}$ is 2 half-lives = 11,460 y old.' },
          { label: 'Dose', text: 'Gray (Gy) = 1 J absorbed per kg. Sievert (Sv) weights the gray by the biological effect of the radiation type.' },
        ],
      },
      {
        title: 'Mass defect and binding energy',
        items: [
          { label: 'Mass defect', tex: '\\Delta m = Z\\,m(\\ce{^{1}_{1}H}) + N\\,m_n - m_{\\text{atom}}', text: 'Using hydrogen-atom masses keeps the electrons balanced. $m(\\ce{^{1}H}) = 1.007825$ u, $m_n = 1.008665$ u.' },
          { label: 'Energy equivalence', tex: 'E = \\Delta m\\,c^2, \\qquad 1\\ \\text{u} \\leftrightarrow 931.5\\ \\text{MeV}', text: 'In SI: $\\Delta m$ in kg, $c = \\pu{3.00e8 m s-1}$, $E$ in J. One gram of mass is $9.0 \\times 10^{13}$ J.' },
          { label: 'Example: helium-4', tex: '\\Delta m = 2(1.007825) + 2(1.008665) - 4.002603 = 0.030377\\ \\text{u} \\;\\to\\; 28.30\\ \\text{MeV} = 7.07\\ \\text{MeV/nucleon}' },
          { label: 'Binding energy per nucleon', tex: '\\frac{E_B}{A}', text: 'Peaks near $\\ce{^{56}Fe}$ (≈ 8.8 MeV/nucleon): the most stable nuclei.' },
        ],
      },
    ],
  },
];
