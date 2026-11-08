import type { CheatSheet } from '../types';

export const orgoCheatSheets: CheatSheet[] = [
  // ---------------------------------------------- Drawing & functional groups
  {
    id: 'ochem-structure',
    title: 'Drawing & Functional Groups',
    course: 'orgo',
    icon: '✏️',
    description: 'Bond-line conventions, formal-charge patterns for C, N, O and halogens, degrees of unsaturation, the functional-group priority table with suffixes and prefixes, and the rules for drawing resonance structures.',
    sections: [
      {
        title: 'Bond-line (skeletal) structures',
        items: [
          { label: 'Conventions', text: 'Every vertex and line end is a carbon. Hydrogens on carbon are implied; heteroatoms (O, N, S, halogens) and the H atoms on them are always drawn.' },
          { label: 'Implied hydrogens', tex: '\\text{H on a neutral C} = 4 - (\\text{bonds drawn to it})', text: 'A carbon with a formal charge breaks this rule: a carbocation has 3 bonds and no lone pair, a carbanion 3 bonds and one lone pair.' },
          { label: 'Hybridization at a glance', text: 'Count the π bonds on an atom: none → $sp^3$ (109.5°), one → $sp^2$ (120°), two → $sp$ (180°). A lone pair next to a π bond is usually delocalized, which makes that atom $sp^2$ (the N of an amide, the O of a phenol).' },
          { label: 'Molecules as graphs', text: 'A skeletal structure is a graph: atoms are vertices, bonds are edges. SMILES strings such as `CCO` (ethanol) and `c1ccccc1` (benzene) encode the same graph as text.' },
        ],
      },
      {
        title: 'Formal charge patterns',
        items: [
          { label: 'Formula', tex: '\\text{FC} = V - N - \\tfrac12 B = V - (\\text{lone-pair electrons} + \\text{bonds})', text: '$V$ = valence electrons of the free atom, $N$ = nonbonding electrons, $B$ = bonding electrons.' },
          { label: 'Carbon ($V = 4$)', tex: '\\begin{array}{lll} \\text{neutral} & \\text{4 bonds, 0 lone pairs} & \\\\ +1 & \\text{3 bonds, 0 lone pairs} & \\text{carbocation (empty } p\\text{)} \\\\ -1 & \\text{3 bonds, 1 lone pair} & \\text{carbanion} \\end{array}' },
          { label: 'Nitrogen ($V = 5$)', tex: '\\begin{array}{lll} \\text{neutral} & \\text{3 bonds, 1 lone pair} & \\text{amine} \\\\ +1 & \\text{4 bonds, 0 lone pairs} & \\text{ammonium} \\\\ -1 & \\text{2 bonds, 2 lone pairs} & \\text{amide ion } (\\ce{R2N-}) \\end{array}' },
          { label: 'Oxygen ($V = 6$)', tex: '\\begin{array}{lll} \\text{neutral} & \\text{2 bonds, 2 lone pairs} & \\text{alcohol, ether} \\\\ +1 & \\text{3 bonds, 1 lone pair} & \\text{oxonium } (\\ce{H3O+},\\ \\ce{ROH2+}) \\\\ -1 & \\text{1 bond, 3 lone pairs} & \\text{alkoxide } (\\ce{RO-}) \\end{array}' },
          { label: 'Halogens ($V = 7$)', text: 'Neutral: 1 bond, 3 lone pairs. −1: halide ion, 4 lone pairs. +1: 2 bonds, 2 lone pairs (the bromonium ion in $\\ce{Br2}$ addition).' },
          { label: 'Reading charges', text: 'Learn the neutral pattern and you can spot a charge instantly: one bond **more** than neutral with a lone pair lost → +1 (N, O); one bond **fewer** with a lone pair gained → −1.' },
        ],
      },
      {
        title: 'Degrees of unsaturation',
        items: [
          { label: 'Formula', tex: '\\text{DoU} = \\frac{2C + 2 + N - H - X}{2}', text: '$C$, $N$, $H$, $X$ = numbers of carbon, nitrogen, hydrogen and halogen atoms. Ignore O and S. Also called the index of hydrogen deficiency (IHD).' },
          { label: 'What one degree means', text: 'Each **ring** or **π bond** counts 1. A C=O counts 1, a triple bond 2, a benzene ring 4 (one ring + three π bonds).' },
          { label: 'Examples', tex: '\\ce{C6H6}: \\tfrac{12 + 2 - 6}{2} = 4, \\qquad \\ce{C4H8O}: \\tfrac{8 + 2 - 8}{2} = 1, \\qquad \\ce{C5H5N}: \\tfrac{10 + 2 + 1 - 5}{2} = 4', text: 'Benzene; a C=O or ring in $\\ce{C4H8O}$ (butanone, butanal, THF…); pyridine.' },
          { label: 'Saturated reference', tex: '\\ce{C_nH_{2n+2}}', text: 'Each degree of unsaturation removes two H from the acyclic alkane formula.' },
        ],
      },
      {
        title: 'Functional groups by naming priority',
        items: [
          { label: 'Priority table (highest first)', tex: '\\begin{array}{llll} \\text{group} & \\text{formula} & \\text{suffix} & \\text{prefix} \\\\ \\hline \\text{carboxylic acid} & \\ce{RCOOH} & \\text{-oic acid} & \\text{carboxy-} \\\\ \\text{anhydride} & \\ce{(RCO)2O} & \\text{-oic anhydride} & \\text{—} \\\\ \\text{ester} & \\ce{RCOOR\'} & \\text{alkyl -oate} & \\text{alkoxycarbonyl-} \\\\ \\text{acid halide} & \\ce{RCOCl} & \\text{-oyl chloride} & \\text{chlorocarbonyl-} \\\\ \\text{amide} & \\ce{RCONH2} & \\text{-amide} & \\text{carbamoyl-} \\\\ \\text{nitrile} & \\ce{RC#N} & \\text{-nitrile} & \\text{cyano-} \\\\ \\text{aldehyde} & \\ce{RCHO} & \\text{-al} & \\text{oxo- (formyl-)} \\\\ \\text{ketone} & \\ce{RCOR\'} & \\text{-one} & \\text{oxo-} \\\\ \\text{alcohol} & \\ce{ROH} & \\text{-ol} & \\text{hydroxy-} \\\\ \\text{thiol} & \\ce{RSH} & \\text{-thiol} & \\text{sulfanyl- (mercapto-)} \\\\ \\text{amine} & \\ce{RNH2} & \\text{-amine} & \\text{amino-} \\end{array}', text: 'The highest-priority group present becomes the suffix; every other group is named as a prefix.' },
          { label: 'Always prefixes', tex: '\\begin{array}{ll} \\ce{-OR} & \\text{alkoxy- (ether)} \\\\ \\ce{-F},\\ \\ce{-Cl},\\ \\ce{-Br},\\ \\ce{-I} & \\text{fluoro-, chloro-, bromo-, iodo-} \\\\ \\ce{-NO2} & \\text{nitro-} \\\\ \\ce{-R} & \\text{alkyl-} \\end{array}' },
          { label: 'Multiple bonds', text: 'C=C changes the parent ending to **-ene**, C≡C to **-yne** (but-2-ene, pent-1-yne, pent-4-en-2-ol). They outrank alkyl and halo substituents for numbering but rank below every suffix group.' },
          { label: 'Polarity and boiling point', text: 'At similar molar mass: alkane < ether < aldehyde/ketone < alcohol < carboxylic acid (dispersion → dipole → H bonding → H-bonded dimers). Butane −0.5 °C, propanal 48 °C, 1-propanol 97 °C, acetic acid 118 °C.' },
        ],
      },
      {
        title: 'Resonance',
        items: [
          { label: 'Rules for arrows', text: 'Move **electrons only**, never atoms. Arrows start at a π bond or a lone pair and end at an adjacent atom or bond. Never break a single (σ) bond. Never exceed an octet on C, N, O or F. The overall charge stays the same.' },
          { label: 'Three patterns', text: '**Lone pair next to a π bond** (two arrows: carboxylate, enolate, amide). **π bond next to a cation** (one arrow: allyl, benzyl cation). **π bond between atoms of different electronegativity** (one arrow onto the more electronegative atom: C=O → C⁺–O⁻).' },
          { label: 'Ranking contributors', text: '1. Most atoms with full octets. 2. Most bonds. 3. Fewest formal charges. 4. Negative charge on the more electronegative atom, positive on the less electronegative.' },
          { label: 'The real molecule', text: 'The resonance hybrid is a weighted average; equivalent contributors (carboxylate, benzene) mean equal bond lengths and spread-out charge, which is extra stability.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------ Acids & bases
  {
    id: 'ochem-acids-bases',
    title: 'Acids & Bases',
    course: 'orgo',
    icon: '🧪',
    description: 'A pKa table of the organic acids you meet most (with conjugate bases), the ARIO factors that rank acidity, predicting the direction of an acid–base reaction with Keq = 10^ΔpKa, and choosing a base.',
    sections: [
      {
        title: 'pKa table (approximate, in water or extrapolated)',
        items: [
          { label: 'Strong acids', tex: '\\begin{array}{lcl} \\text{acid} & \\text{p}K_a & \\text{conjugate base} \\\\ \\hline \\ce{HI} & -10 & \\ce{I-} \\\\ \\ce{HBr} & -9 & \\ce{Br-} \\\\ \\ce{HCl} & -7 & \\ce{Cl-} \\\\ \\ce{TsOH} & -2.8 & \\ce{TsO-} \\\\ \\ce{H3O+} & -1.7 & \\ce{H2O} \\end{array}' },
          { label: 'Moderate acids', tex: '\\begin{array}{lcl} \\ce{HF} & 3.2 & \\ce{F-} \\\\ \\ce{RCOOH}\\ (\\ce{CH3COOH}) & 4\\text{–}5\\ (4.76) & \\ce{RCOO-} \\\\ \\ce{RNH3+} & 10\\text{–}11 & \\ce{RNH2} \\\\ \\ce{NH4+} & 9.25 & \\ce{NH3} \\\\ \\beta\\text{-diketone } (\\ce{CH3COCH2COCH3}) & 9 & \\text{enolate} \\\\ \\ce{ArOH}\\ (\\text{phenol}) & 10 & \\ce{ArO-} \\\\ \\ce{RSH} & 10\\text{–}11 & \\ce{RS-} \\end{array}' },
          { label: 'Weak acids', tex: '\\begin{array}{lcl} \\ce{H2O} & 15.7 & \\ce{HO-} \\\\ \\ce{ROH}\\ (\\ce{CH3OH} \\text{ to } \\ce{(CH3)3COH}) & 15.5\\text{–}18 & \\ce{RO-} \\\\ \\text{ketone } \\alpha\\text{-H}\\ (\\ce{CH3COCH3}) & 19\\text{–}20\\ (19.2) & \\text{enolate} \\\\ \\text{ester } \\alpha\\text{-H} & 25 & \\text{ester enolate} \\\\ \\ce{RC#CH} & 25 & \\ce{RC#C-} \\end{array}' },
          { label: 'Very weak acids', tex: '\\begin{array}{lcl} \\ce{H2} & 35 & \\ce{H-}\\ (\\ce{NaH}) \\\\ \\ce{(iPr)2NH} & 36 & \\ce{(iPr)2N-}\\ (\\text{LDA}) \\\\ \\ce{NH3} & 38 & \\ce{NH2-}\\ (\\ce{NaNH2}) \\\\ \\ce{CH2=CH2} & 44 & \\ce{CH2=CH-} \\\\ \\ce{CH3CH3}\\ (\\text{alkane}) & 50 & \\ce{CH3CH2-} \\end{array}' },
          { label: 'Reading the table', text: 'Lower p$K_a$ = stronger acid = **weaker** conjugate base. Each p$K_a$ unit is a factor of 10 in $K_a$. Values above about 16 are extrapolated (water itself would be deprotonated first). Some books list $\\ce{H2O}$ as 14.0 using a different standard state; this course uses 15.7.' },
        ],
      },
      {
        title: 'ARIO: what stabilizes the conjugate base',
        items: [
          { label: 'A: atom', text: 'Across a row, **electronegativity** wins: $\\ce{CH4} < \\ce{NH3} < \\ce{H2O} < \\ce{HF}$. Down a group, **size** wins (charge spread over a bigger atom): $\\ce{HF} < \\ce{HCl} < \\ce{HBr} < \\ce{HI}$, $\\ce{ROH} < \\ce{RSH}$.' },
          { label: 'R: resonance', text: 'A charge delocalized over several atoms is stabilized: $\\ce{CH3COOH}$ (4.76) ≫ $\\ce{CH3CH2OH}$ (16); phenol (10) > cyclohexanol (18).' },
          { label: 'I: induction', text: 'Electron-withdrawing atoms nearby stabilize the anion; the effect fades with distance: $\\ce{Cl3CCOOH}$ 0.65 < $\\ce{Cl2CHCOOH}$ 1.29 < $\\ce{ClCH2COOH}$ 2.86 < $\\ce{CH3COOH}$ 4.76. $\\ce{CF3CH2OH}$ 12.4 vs ethanol 16.' },
          { label: 'O: orbital', text: 'More s character holds the lone pair closer to the nucleus: $sp$ (50% s, alkyne 25) > $sp^2$ (33%, alkene 44) > $sp^3$ (25%, alkane 50).' },
          { label: 'Priority', text: 'Usually atom > resonance > induction > orbital, with exceptions (alkyne C–H, 25, is more acidic than amine N–H, 38, because of the orbital factor).' },
        ],
      },
      {
        title: 'Predicting acid–base equilibria',
        items: [
          { label: 'Direction', text: 'The equilibrium favors the side with the **weaker acid** (higher p$K_a$), which is also the side with the weaker base.' },
          { label: 'Equilibrium constant', tex: '\\ce{HA + B- <=> A- + HB}: \\qquad K_{eq} = \\frac{K_a(\\ce{HA})}{K_a(\\ce{HB})} = 10^{\\,\\text{p}K_a(\\ce{HB}) - \\text{p}K_a(\\ce{HA})}', text: 'p$K_a$ of the acid on the right minus p$K_a$ of the acid on the left.' },
          { label: 'Example', tex: '\\ce{CH3COOH + HO- <=> CH3COO- + H2O}: \\quad K_{eq} = 10^{15.7 - 4.76} = 10^{10.9} \\approx 9 \\times 10^{10}' },
          { label: 'Choosing a base', text: 'To deprotonate an acid essentially completely, use a base whose conjugate acid has a p$K_a$ several units **higher**. Terminal alkyne (25): $\\ce{NaNH2}$ (38) works; $\\ce{NaOH}$ (15.7) does not. Ketone (19–20): LDA (36) gives complete conversion; an alkoxide (16–18) gives a small equilibrium amount.' },
          { label: 'Leveling effect', text: 'No base stronger than the solvent’s conjugate base survives in that solvent: in water the strongest base is $\\ce{HO-}$, so $\\ce{NaNH2}$, $\\ce{NaH}$, LDA and Grignard reagents require aprotic solvents (ether, THF, liquid $\\ce{NH3}$ for amide).' },
          { label: 'Henderson–Hasselbalch', tex: '\\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]}', text: 'At pH = p$K_a$ the acid is half ionized; 2 units below it is 99% HA, 2 units above 99% $\\ce{A-}$. At pH 7.4 carboxylic acids are anions and alkyl amines are cations.' },
        ],
      },
      {
        title: 'Lewis acids and bases',
        items: [
          { label: 'Definitions', text: 'Lewis base = electron-pair donor (nucleophile). Lewis acid = electron-pair acceptor (electrophile). Brønsted reactions are the special case where the acceptor is $\\ce{H+}$.' },
          { label: 'Common Lewis acids', text: '$\\ce{BF3}$, $\\ce{BH3}$, $\\ce{AlCl3}$, $\\ce{FeBr3}$, $\\ce{ZnCl2}$, carbocations, the carbonyl carbon.' },
          { label: 'Arrows', text: 'Every acid–base arrow starts at the base’s lone pair (or π bond) and ends at the H or the empty orbital; a second arrow moves the H–A bond onto A.' },
        ],
      },
    ],
  },

  // ---------------------------------------------------- Naming & stereochemistry
  {
    id: 'ochem-naming-stereo',
    title: 'Naming & Stereochemistry',
    course: 'orgo',
    icon: '🪞',
    description: 'IUPAC naming steps and substituent names, CIP priority rules, assigning R/S and E/Z, counting stereoisomers and meso compounds, specific rotation and enantiomeric excess, conformations and cyclohexane A-values.',
    sections: [
      {
        title: 'IUPAC naming steps',
        items: [
          { label: '1. Principal group', text: 'Find the highest-priority functional group (see the Drawing & Functional Groups sheet); it supplies the suffix.' },
          { label: '2. Parent chain', text: 'Choose the longest chain that contains the principal group (for an alkane, simply the longest chain; on a tie, the one with more substituents). For rings, the ring is usually the parent when it has at least as many carbons as the longest chain.' },
          { label: '3. Number', text: 'Lowest locant to the principal group, then to C=C/C≡C, then to substituents at the **first point of difference**. If still tied, the substituent first in alphabetical order gets the lower number.' },
          { label: '4. Alphabetize', text: 'Order substituents alphabetically, ignoring *di-, tri-, tetra-, sec-, tert-*; *iso-* and *neo-* count. Use multiplying prefixes for repeats (2,2-dimethyl).' },
          { label: '5. Assemble', text: 'Stereodescriptors, then substituents with locants, then parent, then the locant of the suffix: (2*R*)-4-methylpentan-2-ol, (*E*)-hex-3-ene, 3-ethyl-2-methylhexane.' },
          { label: 'Chain roots', tex: '\\begin{array}{llllllllll} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\\\ \\text{meth} & \\text{eth} & \\text{prop} & \\text{but} & \\text{pent} & \\text{hex} & \\text{hept} & \\text{oct} & \\text{non} & \\text{dec} \\end{array}' },
        ],
      },
      {
        title: 'Substituent names',
        items: [
          { label: 'Three and four carbons', tex: '\\begin{array}{lll} \\ce{-CH(CH3)2} & \\text{isopropyl} & \\text{propan-2-yl (1-methylethyl)} \\\\ \\ce{-CH2CH(CH3)2} & \\text{isobutyl} & \\text{2-methylpropyl} \\\\ \\ce{-CH(CH3)CH2CH3} & sec\\text{-butyl} & \\text{butan-2-yl (1-methylpropyl)} \\\\ \\ce{-C(CH3)3} & tert\\text{-butyl} & \\text{1,1-dimethylethyl} \\\\ \\ce{-CH2C(CH3)3} & \\text{neopentyl} & \\text{2,2-dimethylpropyl} \\end{array}' },
          { label: 'Unsaturated and aromatic', tex: '\\begin{array}{lll} \\ce{-CH=CH2} & \\text{vinyl} & \\text{ethenyl} \\\\ \\ce{-CH2CH=CH2} & \\text{allyl} & \\text{prop-2-en-1-yl} \\\\ \\ce{-C6H5} & \\text{phenyl (Ph)} & \\\\ \\ce{-CH2C6H5} & \\text{benzyl (Bn)} & \\end{array}' },
          { label: 'Carbon classes', text: 'A carbon bonded to 1, 2, 3 or 4 other carbons is primary (1°), secondary (2°), tertiary (3°) or quaternary (4°). Alcohols, halides and cations take the class of the carbon bearing the group.' },
        ],
      },
      {
        title: 'Cahn–Ingold–Prelog priorities',
        items: [
          { label: 'Rule 1: atomic number', text: 'Rank the four atoms attached to the stereocenter by atomic number: I > Br > Cl > S > F > O > N > C > H. For isotopes, higher mass wins (D > H).' },
          { label: 'Rule 2: first point of difference', text: 'On a tie, list the three atoms attached to each tied atom in decreasing order and compare the lists element by element: $\\ce{-CH2OH}$ (O,H,H) > $\\ce{-C(CH3)3}$ (C,C,C), because O beats C at the first comparison. If still tied, move one bond further out along the highest branch.' },
          { label: 'Rule 3: multiple bonds', text: 'A double bond counts as two single bonds to duplicate atoms: $\\ce{-CH=O}$ = C(O,O,H), $\\ce{-COOH}$ = C(O,O,O), $\\ce{-C#N}$ = C(N,N,N), $\\ce{-CH=CH2}$ = C(C,C,H).' },
        ],
      },
      {
        title: 'Assigning configuration',
        items: [
          { label: 'R/S procedure', text: '1. Rank the four groups. 2. Orient the molecule so priority 4 points **away** from you. 3. Trace 1 → 2 → 3. Clockwise = ***R***, counterclockwise = ***S***.' },
          { label: 'Lowest priority toward you', text: 'If group 4 is on a wedge (or on a horizontal line of a Fischer projection), trace 1 → 2 → 3 as drawn and **reverse** the answer.' },
          { label: 'Swaps', text: 'Swapping any two groups inverts the configuration; two swaps restore it. Useful for moving group 4 to the back.' },
          { label: 'E/Z for alkenes', text: 'Rank the two groups on each alkene carbon by CIP. Higher priorities on the same side = ***Z*** (*zusammen*), opposite sides = ***E*** (*entgegen*). cis/trans only works when each carbon has one H.' },
          { label: 'Sign of rotation', text: 'R/S is a naming rule; (+)/(−) is a measurement. There is no general connection between them.' },
        ],
      },
      {
        title: 'Stereoisomers',
        items: [
          { label: 'Maximum number', tex: 'N_{\\max} = 2^n', text: '$n$ = number of stereogenic units (chirality centers plus stereogenic C=C). Meso compounds reduce the count.' },
          { label: 'Meso compounds', text: 'Have chirality centers but an internal mirror plane, so they are achiral and optically inactive. Tartaric acid: 2 centers, 3 stereoisomers ((*R*,*R*), (*S*,*S*) and meso (*R*,*S*)). cis-1,2- and cis-1,3-dimethylcyclohexane are meso.' },
          { label: 'Relationships', text: '**Enantiomers**: every center inverted; identical physical properties except the sign of rotation and behavior toward other chiral things. **Diastereomers**: some but not all centers inverted; different physical properties. Same configuration everywhere = identical.' },
          { label: 'Specific rotation', tex: '[\\alpha]_\\text{D}^{T} = \\frac{\\alpha_{\\text{obs}}}{l\\,c}', text: '$\\alpha_{\\text{obs}}$ in degrees, $l$ = path length in **dm**, $c$ in **g/mL** (589 nm sodium D line). Enantiomers have equal and opposite $[\\alpha]$; a racemic mixture shows 0°.' },
          { label: 'Enantiomeric excess', tex: '\\%\\,ee = \\frac{[\\alpha]_{\\text{obs}}}{[\\alpha]_{\\text{pure}}} \\times 100\\% = \\%\\,\\text{major} - \\%\\,\\text{minor}, \\qquad \\%\\,\\text{major} = \\frac{100 + \\%\\,ee}{2}', text: 'Example: $[\\alpha]_{\\text{obs}} = +6.0°$, pure enantiomer $+12.0°$ → 50% ee → 75 : 25.' },
        ],
      },
      {
        title: 'Conformations and cyclohexane',
        items: [
          { label: 'Acyclic costs (kJ/mol)', tex: '\\ce{H}\\leftrightarrow\\ce{H} \\text{ eclipsed } 4.0, \\quad \\ce{H}\\leftrightarrow\\ce{CH3} \\text{ eclipsed } 6.0, \\quad \\ce{CH3}\\leftrightarrow\\ce{CH3} \\text{ eclipsed } 11, \\quad \\ce{CH3}\\leftrightarrow\\ce{CH3} \\text{ gauche } 3.8' },
          { label: 'Ring strain', text: 'Cyclopropane 115 kJ/mol, cyclobutane 110, cyclopentane 27, cyclohexane ≈ 0 (the chair has ideal angles and all bonds staggered).' },
          { label: 'A-values (axial − equatorial, kJ/mol)', tex: '\\begin{array}{lc|lc} \\ce{-CN} & 0.8 & \\ce{-CH3} & 7.6 \\\\ \\ce{-F} & 1.0 & \\ce{-CH2CH3} & 8.0 \\\\ \\ce{-Cl},\\ \\ce{-Br} & 2.0 & \\ce{-CH(CH3)2} & 9.2 \\\\ \\ce{-OH} & 4.2 & \\ce{-C6H5} & 12.6 \\\\ \\ce{-COOH} & 5.8 & \\ce{-C(CH3)3} & 22.8 \\end{array}', text: 'Each axial–H 1,3-diaxial interaction of a methyl costs 3.8 kJ/mol (two of them = 7.6). A tert-butyl group effectively locks the ring with itself equatorial.' },
          { label: 'Equilibrium from an A-value', tex: 'K = \\frac{[\\text{equatorial}]}{[\\text{axial}]} = e^{A/RT}: \\quad \\ce{-CH3}: K = e^{7600/(8.314 \\times 298)} \\approx 21 \\;\\Rightarrow\\; 95\\%\\ \\text{equatorial}', text: 'Same relation as $\\Delta G^\\circ = -RT\\ln K$. For two substituents, add the A-values of the axial groups in each chair.' },
          { label: 'Disubstituted rings', tex: '\\begin{array}{lll} & \\text{cis} & \\text{trans} \\\\ 1,2 & a,e & e,e \\text{ or } a,a \\\\ 1,3 & e,e \\text{ or } a,a & a,e \\\\ 1,4 & a,e & e,e \\text{ or } a,a \\end{array}' },
        ],
      },
    ],
  },

  // ------------------------------------------------- Substitution & elimination
  {
    id: 'ochem-sn-e',
    title: 'Substitution & Elimination',
    course: 'orgo',
    icon: '🔀',
    description: 'SN1, SN2, E1 and E2 side by side (rate law, stereochemistry, substrate, nucleophile or base, solvent), a decision chart by substrate and reagent, leaving groups, nucleophile strength, carbocations and bulky bases.',
    sections: [
      {
        title: 'The four mechanisms',
        items: [
          { label: 'SN2', tex: '\\text{rate} = k[\\ce{RX}][\\ce{Nu-}]', text: 'One concerted step, backside attack. **Complete inversion** at the carbon. Substrate methyl > 1° > 2°, never 3° (or neopentyl). Strong, often anionic nucleophile. Polar **aprotic** solvent (DMSO, DMF, acetone, acetonitrile). No rearrangements.' },
          { label: 'SN1', tex: '\\text{rate} = k[\\ce{RX}]', text: 'Ionization to a carbocation (rate-determining), then capture. **Racemization** (slight excess of inversion). Substrate 3°, allylic, benzylic (2° slowly); never methyl or 1°. Weak nucleophile, often the solvent (solvolysis). Polar **protic** solvent (water, alcohols, acetic acid). Rearrangements possible.' },
          { label: 'E2', tex: '\\text{rate} = k[\\ce{RX}][\\ce{B-}]', text: 'One concerted step. H and leaving group must be **anti-periplanar** (in a cyclohexane: both axial, trans-diaxial). Stereospecific. Substrate 3° > 2° > 1°. Strong base. Zaitsev (more substituted alkene) unless the base is bulky (Hofmann).' },
          { label: 'E1', tex: '\\text{rate} = k[\\ce{RX}]', text: 'Same carbocation as SN1, then loss of a β-H. Zaitsev product; the more stable (usually trans) alkene. Weak base, protic solvent, **heat**. Rearrangements possible. Always competes with SN1.' },
          { label: 'Comparison', tex: '\\begin{array}{l|cccc} & \\text{S}_\\text{N}2 & \\text{S}_\\text{N}1 & \\text{E2} & \\text{E1} \\\\ \\hline \\text{order} & 2 & 1 & 2 & 1 \\\\ \\text{intermediate} & \\text{none} & \\ce{R+} & \\text{none} & \\ce{R+} \\\\ \\text{best substrate} & \\text{methyl, 1°} & \\text{3°} & \\text{3°} & \\text{3°} \\\\ \\text{reagent} & \\text{strong Nu} & \\text{weak Nu} & \\text{strong base} & \\text{weak base} \\\\ \\text{solvent} & \\text{aprotic} & \\text{protic} & \\text{varies} & \\text{protic} \\\\ \\text{stereo} & \\text{inversion} & \\text{racemic} & \\text{anti-periplanar} & \\text{Zaitsev, trans} \\end{array}' },
        ],
      },
      {
        title: 'Decision chart',
        items: [
          { label: 'Classify the reagent', tex: '\\begin{array}{ll} \\text{good Nu, weak base} & \\ce{I-},\\ \\ce{Br-},\\ \\ce{Cl-},\\ \\ce{HS-},\\ \\ce{RS-},\\ \\ce{N3-},\\ \\ce{CN-},\\ \\ce{RCOO-} \\\\ \\text{strong base, strong Nu} & \\ce{HO-},\\ \\ce{CH3O-},\\ \\ce{CH3CH2O-} \\\\ \\text{strong bulky base} & \\ce{KOtBu},\\ \\text{LDA},\\ \\text{DBU} \\\\ \\text{weak Nu, weak base} & \\ce{H2O},\\ \\ce{CH3OH},\\ \\ce{CH3CH2OH} \\end{array}' },
          { label: 'Substrate × reagent', tex: '\\begin{array}{l|llll} & \\text{Nu (weak base)} & \\text{strong base/Nu} & \\text{bulky base} & \\text{solvent only} \\\\ \\hline \\text{methyl} & \\text{S}_\\text{N}2 & \\text{S}_\\text{N}2 & \\text{S}_\\text{N}2 & \\text{no reaction} \\\\ 1° & \\text{S}_\\text{N}2 & \\text{S}_\\text{N}2\\ (\\text{E2 minor}) & \\text{E2} & \\text{no reaction} \\\\ 2° & \\text{S}_\\text{N}2 & \\text{E2}\\ (\\text{S}_\\text{N}2 \\text{ minor}) & \\text{E2} & \\text{S}_\\text{N}1 + \\text{E1 (slow)} \\\\ 3° & \\text{S}_\\text{N}1\\ (+\\text{E1}) & \\text{E2} & \\text{E2} & \\text{S}_\\text{N}1 + \\text{E1} \\end{array}' },
          { label: 'Temperature', text: 'Heat favors elimination over substitution (elimination makes more molecules, $\\Delta S > 0$, so $-T\\Delta S$ grows).' },
        ],
      },
      {
        title: 'Leaving groups',
        items: [
          { label: 'Rule', text: 'Good leaving groups are weak bases: the conjugate acid has a low p$K_a$.' },
          { label: 'Ranking', tex: '\\begin{array}{llcl} \\text{LG} & \\text{conj. acid} & \\text{p}K_a & \\\\ \\hline \\ce{I-} & \\ce{HI} & -10 & \\text{excellent} \\\\ \\ce{Br-} & \\ce{HBr} & -9 & \\text{excellent} \\\\ \\ce{TsO-},\\ \\ce{MsO-},\\ \\ce{TfO-} & \\text{sulfonic acids} & < -1 & \\text{excellent} \\\\ \\ce{Cl-} & \\ce{HCl} & -7 & \\text{good} \\\\ \\ce{H2O}\\ (\\text{from } \\ce{ROH2+}) & \\ce{H3O+} & -1.7 & \\text{good} \\\\ \\ce{F-} & \\ce{HF} & 3.2 & \\text{poor} \\\\ \\ce{HO-},\\ \\ce{RO-} & \\ce{H2O},\\ \\ce{ROH} & 15.7\\text{–}18 & \\text{does not leave} \\\\ \\ce{NH2-} & \\ce{NH3} & 38 & \\text{does not leave} \\end{array}' },
          { label: 'Activating an alcohol', text: 'Protonate it (HX, $\\ce{H2SO4}$) or convert it to a tosylate (TsCl, pyridine; configuration retained), or to $\\ce{R-Br}$/$\\ce{R-Cl}$ with $\\ce{PBr3}$/$\\ce{SOCl2}$ (inversion).' },
        ],
      },
      {
        title: 'Nucleophiles, solvents and cations',
        items: [
          { label: 'Nucleophile strength', text: '**Strong:** $\\ce{I-}$, $\\ce{HS-}$, $\\ce{RS-}$, $\\ce{CN-}$, $\\ce{N3-}$, $\\ce{HO-}$, $\\ce{RO-}$, $\\ce{Br-}$, acetylides. **Moderate:** $\\ce{Cl-}$, $\\ce{F-}$, $\\ce{NH3}$, amines, $\\ce{RCOO-}$. **Weak:** $\\ce{H2O}$, $\\ce{ROH}$, $\\ce{RCOOH}$.' },
          { label: 'Solvent effects', text: 'Protic solvents hydrogen-bond to anions and weaken small ones most: in water or alcohol $\\ce{I-} > \\ce{Br-} > \\ce{Cl-} > \\ce{F-}$. Polar aprotic solvents leave anions bare, speeding SN2 by 10³–10⁴ (methanol 1, DMSO 1300, DMF 2800, acetonitrile 5000).' },
          { label: 'Carbocation stability', text: '3° > 2° ≈ allylic ≈ benzylic (1°) > 1° > methyl; resonance-stabilized 2° and 3° allylic/benzylic cations are better still. Stabilized by hyperconjugation, induction and resonance.' },
          { label: 'Rearrangements', text: 'A 1,2-hydride or 1,2-methyl (alkyl) shift turns a less stable cation into a more stable one (2° → 3°, or 2° next to a ring into a less strained ring). Expect them in SN1, E1, HX addition and acid-catalyzed hydration.' },
        ],
      },
      {
        title: 'Elimination regiochemistry',
        items: [
          { label: 'Zaitsev', text: 'Small strong bases ($\\ce{HO-}$, $\\ce{CH3O-}$, $\\ce{CH3CH2O-}$) and E1 give mainly the **more substituted** (more stable) alkene.' },
          { label: 'Hofmann', text: 'Bulky bases ($\\ce{KOtBu}$, LDA) remove the most accessible H and give mainly the **less substituted** alkene. Hofmann elimination of quaternary ammonium salts does the same.' },
          { label: 'Cyclohexanes', text: 'E2 needs the leaving group **axial** with an axial β-H on the opposite face. If the only anti-periplanar H gives the less substituted alkene, that is the product (menthyl chloride).' },
        ],
      },
    ],
  },

  // --------------------------------------------- Alkenes, alkynes, alcohols, ethers
  {
    id: 'ochem-addition-reactions',
    title: 'Alkenes, Alkynes, Alcohols & Ethers',
    course: 'orgo',
    icon: '⚗️',
    description: 'Reagent → product tables with regiochemistry and stereochemistry: alkene additions, oxidative cleavage, alkyne reductions and acetylide chemistry, radical reactions, alcohol oxidation and activation, ethers and epoxide opening.',
    sections: [
      {
        title: 'Alkene additions',
        items: [
          { label: 'Hydrohalogenation', tex: '\\ce{RCH=CH2 ->[HBr] RCHBrCH3}', text: '**Markovnikov** (H to the carbon with more H). Carbocation, so rearrangements possible; racemic at a new stereocenter.' },
          { label: 'Acid-catalyzed hydration', tex: '\\ce{RCH=CH2 ->[H3O+] RCH(OH)CH3}', text: 'Markovnikov, carbocation (rearranges). Reversible: the reverse is E1 dehydration (conc. $\\ce{H2SO4}$, heat).' },
          { label: 'Oxymercuration–demercuration', tex: '\\ce{RCH=CH2 ->[\\text{1. }Hg(OAc)2, H2O][\\text{2. }NaBH4] RCH(OH)CH3}', text: 'Markovnikov, **no rearrangement** (mercurinium ion). Use ROH instead of water to make an ether.' },
          { label: 'Hydroboration–oxidation', tex: '\\ce{RCH=CH2 ->[\\text{1. }BH3 * THF][\\text{2. }H2O2, NaOH] RCH2CH2OH}', text: '**Anti-Markovnikov**, **syn** addition of H and OH, no rearrangement (four-center TS).' },
          { label: 'Halogenation', tex: '\\ce{RCH=CHR ->[Br2][CH2Cl2] RCHBr-CHBrR}', text: '**Anti** addition via a bromonium ion: cyclohexene gives trans-1,2-dibromocyclohexane.' },
          { label: 'Halohydrin formation', tex: '\\ce{RCH=CH2 ->[Br2, H2O] RCH(OH)CH2Br}', text: 'Anti; OH (from water) on the **more substituted** carbon, Br on the less substituted.' },
          { label: 'Catalytic hydrogenation', tex: '\\ce{RCH=CHR ->[H2, Pt \\text{ (or Pd/C, Ni)}] RCH2CH2R}', text: '**Syn** addition on the metal surface.' },
          { label: 'Radical HBr', tex: '\\ce{RCH=CH2 ->[HBr, ROOR][h\\nu \\text{ or heat}] RCH2CH2Br}', text: '**Anti-Markovnikov** (Br• adds to give the more stable radical). Works only for HBr.' },
        ],
      },
      {
        title: 'Oxidation of alkenes',
        items: [
          { label: 'Epoxidation', tex: '\\ce{RCH=CHR ->[mCPBA] \\text{epoxide}}', text: '**Syn**, concerted; the alkene geometry is kept (cis alkene → cis epoxide).' },
          { label: 'Syn dihydroxylation', tex: '\\ce{RCH=CHR ->[OsO4 \\text{ (cat.)}, NMO] RCH(OH)CH(OH)R}', text: '**Syn** via a cyclic osmate ester (cold dilute $\\ce{KMnO4}$, $\\ce{NaOH}$ also works). cis-But-2-ene → meso diol.' },
          { label: 'Anti dihydroxylation', tex: '\\ce{->[\\text{1. }mCPBA][\\text{2. }H3O+]}', text: 'Epoxidation then ring opening by water from the back face: **anti** diol.' },
          { label: 'Ozonolysis', tex: '\\ce{R2C=CHR\' ->[\\text{1. }O3][\\text{2. }(CH3)2S \\text{ or } Zn, H2O] R2C=O + R\'CHO}', text: 'Cleaves the C=C; each alkene carbon becomes a C=O. Hot $\\ce{KMnO4}$ cleaves too but oxidizes C–H carbons on to $\\ce{COOH}$ (and $\\ce{=CH2}$ to $\\ce{CO2}$).' },
          { label: 'Summary', tex: '\\begin{array}{llll} \\text{reaction} & \\text{regio} & \\text{stereo} & \\text{intermediate} \\\\ \\hline \\ce{HX} & \\text{Markovnikov} & \\text{racemic} & \\ce{R+}\\ (\\text{rearranges}) \\\\ \\ce{H3O+} & \\text{Markovnikov} & \\text{mixture} & \\ce{R+}\\ (\\text{rearranges}) \\\\ \\text{oxymercuration} & \\text{Markovnikov} & \\text{not controlled} & \\text{mercurinium} \\\\ \\text{hydroboration} & \\text{anti-Markovnikov} & \\text{syn} & \\text{four-center TS} \\\\ \\ce{Br2} & \\text{—} & \\text{anti} & \\text{bromonium} \\\\ \\ce{Br2, H2O} & \\text{OH on more subst. C} & \\text{anti} & \\text{bromonium} \\\\ \\ce{H2}, \\text{Pt} & \\text{—} & \\text{syn} & \\text{metal surface} \\\\ \\text{mCPBA} & \\text{—} & \\text{syn} & \\text{concerted} \\\\ \\ce{OsO4} & \\text{—} & \\text{syn} & \\text{osmate ester} \\\\ \\ce{HBr, ROOR} & \\text{anti-Markovnikov} & \\text{mixture} & \\text{radical} \\end{array}' },
        ],
      },
      {
        title: 'Alkynes',
        items: [
          { label: 'Full reduction', tex: '\\ce{RC#CR\' ->[H2, Pd/C] RCH2CH2R\'}' },
          { label: 'Lindlar reduction', tex: '\\ce{RC#CR\' ->[H2, \\text{Lindlar cat.}] \\mathit{cis}\\text{-}RCH=CHR\'}', text: 'Poisoned Pd stops at the alkene; syn addition gives the **cis (Z)** alkene.' },
          { label: 'Dissolving-metal reduction', tex: '\\ce{RC#CR\' ->[Na, NH3(l)] \\mathit{trans}\\text{-}RCH=CHR\'}', text: 'e⁻, H⁺, e⁻, H⁺; the radical anion and vinyl anion adopt the trans shape: **trans (E)** alkene.' },
          { label: 'Acetylide alkylation', tex: '\\ce{RC#CH ->[NaNH2] RC#C- ->[R\'CH2Br] RC#CCH2R\'}', text: 'Terminal alkyne p$K_a$ 25, $\\ce{NH3}$ 38. SN2, so methyl or 1° halides only (2° and 3° give E2). Acetylides also add to C=O to give propargylic alcohols.' },
          { label: 'Hydration', tex: '\\ce{RC#CH ->[H2O, H2SO4, HgSO4] RCOCH3}', text: 'Markovnikov: the enol tautomerizes to a **methyl ketone**.' },
          { label: 'Hydroboration', tex: '\\ce{RC#CH ->[\\text{1. }(sia)2BH \\text{ or 9-BBN}][\\text{2. }H2O2, NaOH] RCH2CHO}', text: 'Anti-Markovnikov: a terminal alkyne gives an **aldehyde**. The bulky borane adds only once.' },
          { label: 'Other additions', text: '1 equiv HX → vinyl halide (Markovnikov); 2 equiv HX → geminal dihalide. 1 equiv $\\ce{Br2}$ → (E)-dibromoalkene; 2 equiv → tetrabromide. 2 equiv $\\ce{NaNH2}$ on a vicinal or geminal dihalide makes an alkyne (double E2).' },
        ],
      },
      {
        title: 'Radical reactions',
        items: [
          { label: 'Radical halogenation', tex: '\\ce{R-H ->[X2, h\\nu] R-X + HX}', text: 'Chain: initiation, propagation, termination. $\\ce{Cl2}$ is fast and unselective; $\\ce{Br2}$ is slow and very selective for the weakest C–H (3° > 2° > 1°).' },
          { label: 'C–H bond strengths (kJ/mol)', text: 'methyl 439, 1° 423, 2° 413, 3° 400, allylic 369, vinyl 464. Weaker bond = more stable radical.' },
          { label: 'Allylic and benzylic bromination', tex: '\\ce{CH2=CHCH2R ->[NBS][h\\nu \\text{ or ROOR}] CH2=CHCHBrR}', text: 'NBS keeps $[\\ce{Br2}]$ tiny, so substitution at the allylic (or benzylic) C–H beats addition to C=C. The allyl radical can give a shifted-alkene product.' },
        ],
      },
      {
        title: 'Alcohols',
        items: [
          { label: 'Oxidation', tex: '\\begin{array}{lll} \\text{alcohol} & \\text{PCC},\\ \\ce{CH2Cl2} & \\text{Jones } (\\ce{CrO3, H2SO4}, \\text{acetone}) \\\\ \\hline 1°\\ \\ce{RCH2OH} & \\ce{RCHO} & \\ce{RCOOH} \\\\ 2°\\ \\ce{R2CHOH} & \\text{ketone} & \\text{ketone} \\\\ 3° & \\text{no reaction} & \\text{no reaction} \\end{array}', text: 'Swern and Dess–Martin oxidations behave like PCC (stop at the aldehyde) without chromium. $\\ce{Na2Cr2O7, H2SO4}$ behaves like Jones.' },
          { label: 'Making a leaving group', tex: '\\begin{array}{lll} \\text{reagent} & \\text{product} & \\text{carbinol carbon} \\\\ \\hline \\text{TsCl, pyridine} & \\ce{R-OTs} & \\text{retained} \\\\ \\text{then } \\ce{Nu-} & \\ce{R-Nu} & \\text{inverted} \\\\ \\ce{PBr3} & \\ce{R-Br} & \\text{inverted (1°, 2°)} \\\\ \\ce{SOCl2}, \\text{pyridine} & \\ce{R-Cl} & \\text{inverted (1°, 2°)} \\\\ \\ce{HX} \\text{ on 2°/3°} & \\ce{R-X} & \\text{scrambled (S}_\\text{N}1) \\end{array}' },
          { label: 'Dehydration', tex: '\\ce{R2CHC(OH)R2 ->[H2SO4][heat] R2C=CR2 + H2O}', text: 'E1 for 2° and 3° alcohols (rearrangements, Zaitsev). Ease: 3° > 2° > 1°.' },
          { label: 'Acidity', text: '$\\ce{CF3CH2OH}$ 12.4, $\\ce{CH3OH}$ 15.5, $\\ce{H2O}$ 15.7, $\\ce{CH3CH2OH}$ 16, $\\ce{(CH3)3COH}$ 18. Make alkoxides with Na or NaH (not NaOH).' },
        ],
      },
      {
        title: 'Ethers and epoxides',
        items: [
          { label: 'Williamson ether synthesis', tex: '\\ce{RO- + R\'CH2Br -> ROCH2R\' + Br-}', text: 'SN2: put the bulky part on the alkoxide and use a methyl or 1° halide (2° and 3° halides eliminate).' },
          { label: 'Acidic cleavage', tex: '\\ce{R-O-CH3 ->[HI \\text{ (excess)}][heat] R-I + CH3I}', text: 'SN2 at the less hindered carbon (SN1 if one side is 3°, allylic or benzylic). Aryl alkyl ethers give a phenol + alkyl halide, never an aryl halide.' },
          { label: 'Epoxide opening: basic', text: 'Strong nucleophile ($\\ce{HO-}$, $\\ce{RO-}$, $\\ce{CN-}$, $\\ce{RMgBr}$, $\\ce{LiAlH4}$) attacks the **less substituted** carbon (SN2), with inversion there: anti product.' },
          { label: 'Epoxide opening: acidic', text: 'Protonated epoxide; weak nucleophile ($\\ce{H2O}$, $\\ce{ROH}$, HX) attacks the **more substituted** carbon (when one is 3°) because it carries more δ+ character; still backside: anti product.' },
          { label: 'Crown ethers', text: '18-crown-6 binds $\\ce{K+}$, dragging salts such as $\\ce{KF}$ or $\\ce{KMnO4}$ into organic solvents with a "naked", highly reactive anion.' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------- Spectroscopy
  {
    id: 'ochem-spectroscopy',
    title: 'Spectroscopy',
    course: 'orgo',
    icon: '📈',
    description: 'IR diagnostic bands and carbonyl frequencies, ¹H NMR chemical shifts, the n + 1 rule with Pascal intensities, coupling constants, ¹³C shift ranges and DEPT, mass-spectrometry isotope patterns, the nitrogen rule and the rule of 13.',
    sections: [
      {
        title: 'Infrared (IR)',
        items: [
          { label: 'Diagnostic bands', tex: '\\begin{array}{lll} \\tilde\\nu\\ (\\text{cm}^{-1}) & \\text{bond} & \\text{appearance} \\\\ \\hline 3200\\text{–}3550 & \\ce{O-H}\\ (\\text{alcohol}) & \\text{strong, broad} \\\\ 2500\\text{–}3300 & \\ce{O-H}\\ (\\text{acid}) & \\text{very broad} \\\\ 3300\\text{–}3500 & \\ce{N-H} & \\text{medium; } \\ce{NH2} \\text{ two spikes, NH one} \\\\ \\approx 3300 & \\ce{#C-H} & \\text{strong, sharp} \\\\ 3000\\text{–}3100 & \\ce{=C-H}\\ (sp^2) & \\text{just above } 3000 \\\\ 2850\\text{–}3000 & \\ce{C-H}\\ (sp^3) & \\text{just below } 3000 \\\\ 2720,\\ 2820 & \\text{aldehyde } \\ce{C-H} & \\text{two weak bands} \\\\ 2210\\text{–}2260 & \\ce{C#N} & \\text{medium} \\\\ 2100\\text{–}2260 & \\ce{C#C} & \\text{weak (absent if symmetric)} \\\\ 1650\\text{–}1780 & \\ce{C=O} & \\text{strong} \\\\ 1620\\text{–}1680 & \\ce{C=C} & \\text{weak to medium} \\\\ 1000\\text{–}1300 & \\ce{C-O} & \\text{strong} \\end{array}' },
          { label: 'Carbonyl positions', tex: '\\begin{array}{ll} \\text{ketone} & 1715 \\\\ \\text{aldehyde} & 1730 \\\\ \\text{ester} & 1740 \\\\ \\text{carboxylic acid} & 1710 \\\\ \\text{amide} & 1650\\text{–}1690 \\\\ \\text{acid chloride} & \\approx 1800 \\\\ \\text{anhydride} & \\approx 1820 \\text{ and } 1760 \\\\ \\alpha,\\beta\\text{-unsaturated ketone} & 1685 \\\\ \\text{cyclopentanone / cyclobutanone} & 1745\\ /\\ 1780 \\end{array}', text: 'Conjugation lowers the frequency by about 30 cm⁻¹ (weaker C=O); ring strain raises it.' },
          { label: 'Wavenumber and bond strength', tex: '\\tilde\\nu = \\frac{1}{2\\pi c}\\sqrt{\\frac{k}{\\mu}}', text: 'Stiffer bond (larger $k$) or lighter atoms (smaller reduced mass $\\mu$) → higher wavenumber: C≡C > C=C > C–C; C–H > C–D.' },
          { label: 'Fingerprint region', text: 'Below about 1500 cm⁻¹: many overlapping bends, unique to each molecule; use it to match a known spectrum, not to identify groups.' },
        ],
      },
      {
        title: '¹H NMR chemical shifts',
        items: [
          { label: 'Shift table (δ, ppm)', tex: '\\begin{array}{ll} \\text{alkyl } \\ce{C-H}\\ (\\ce{CH3} < \\ce{CH2} < \\ce{CH}) & 0.9\\text{–}1.8 \\\\ \\text{allylic } \\ce{C=C-C-H} & 1.6\\text{–}2.6 \\\\ \\alpha \\text{ to C=O: } \\ce{H-C-C=O} & 2.0\\text{–}2.6 \\\\ \\text{benzylic } \\ce{Ar-C-H} & 2.2\\text{–}2.6 \\\\ \\text{terminal alkyne } \\ce{#C-H} & 2\\text{–}3 \\\\ \\ce{H-C-N} & 2.2\\text{–}2.9 \\\\ \\ce{H-C-Hal}\\ (\\ce{I} < \\ce{Br} < \\ce{Cl} < \\ce{F}) & 2.1\\text{–}4.3 \\\\ \\ce{H-C-O}\\ (\\text{alcohol, ether, ester}) & 3.3\\text{–}4.5 \\\\ \\text{vinyl } \\ce{C=C-H} & 4.5\\text{–}6.5 \\\\ \\text{aromatic } \\ce{Ar-H} & 6.5\\text{–}8.0 \\\\ \\text{aldehyde } \\ce{RCHO} & 9\\text{–}10 \\\\ \\text{carboxylic acid } \\ce{RCOOH} & 10\\text{–}12\\ (\\text{broad}) \\\\ \\ce{O-H}\\ (\\text{alcohol}),\\ \\ce{N-H} & 0.5\\text{–}5\\ (\\text{variable, broad}) \\end{array}', text: 'O–H and N–H signals move with concentration and disappear after a $\\ce{D2O}$ shake. Effects add: a $\\ce{CH2}$ between O and C=O appears above 4.' },
          { label: 'From Hz to ppm', tex: '\\delta = \\frac{\\text{offset from TMS (Hz)}}{\\text{spectrometer frequency (MHz)}}', text: 'Example: 1460 Hz at 400 MHz → δ 3.65. δ is field-independent; $J$ in Hz is too, so signals spread out on stronger magnets.' },
          { label: 'Why downfield', text: 'Electronegative neighbors pull electron density away (deshielding): $\\ce{CH3F}$ 4.26, $\\ce{CH3OH}$ 3.40, $\\ce{CH3Cl}$ 3.05, $\\ce{CH3Br}$ 2.68, $\\ce{CH3I}$ 2.16, $\\ce{CH4}$ 0.23. π-electron circulation (anisotropy) deshields vinyl, aromatic and aldehyde H.' },
        ],
      },
      {
        title: 'Reading a ¹H spectrum',
        items: [
          { label: 'Four kinds of information', text: '**Number of signals** = sets of chemically equivalent H (check symmetry). **Shift** = environment. **Integration** ∝ number of H in each set. **Splitting** = number of neighboring H.' },
          { label: 'n + 1 rule', tex: 'n \\text{ equivalent neighbors (3 bonds away)} \\;\\Rightarrow\\; n + 1 \\text{ peaks}', text: 'Equivalent protons do not split each other. O–H and N–H usually do not split (fast exchange).' },
          { label: 'Pascal intensities', tex: '\\begin{array}{lll} n = 0 & \\text{singlet (s)} & 1 \\\\ n = 1 & \\text{doublet (d)} & 1:1 \\\\ n = 2 & \\text{triplet (t)} & 1:2:1 \\\\ n = 3 & \\text{quartet (q)} & 1:3:3:1 \\\\ n = 4 & \\text{quintet} & 1:4:6:4:1 \\\\ n = 5 & \\text{sextet} & 1:5:10:10:5:1 \\\\ n = 6 & \\text{septet} & 1:6:15:20:15:6:1 \\end{array}', text: 'Each row is a row of Pascal’s triangle, $\\binom{n}{k}$: the number of ways $k$ of the $n$ neighbors can be spin-up.' },
          { label: 'Fragments to recognize', text: 'Ethyl: 3H triplet + 2H quartet. Isopropyl: 6H doublet + 1H septet. tert-Butyl: 9H singlet. Methyl ketone $\\ce{CH3CO}$: 3H singlet ≈ 2.1. Methyl ester $\\ce{OCH3}$: 3H singlet ≈ 3.7. Monosubstituted benzene: 5H near 7.2–7.4.' },
          { label: 'Typical coupling constants', tex: '\\begin{array}{ll} \\ce{H-C-C-H}\\ (sp^3, \\text{free rotation}) & 6\\text{–}8\\ \\text{Hz} \\\\ \\text{alkene, trans} & 12\\text{–}18\\ \\text{Hz} \\\\ \\text{alkene, cis} & 6\\text{–}12\\ \\text{Hz} \\\\ \\text{alkene, geminal } (\\ce{=CH2}) & 0\\text{–}3\\ \\text{Hz} \\\\ \\text{aromatic, ortho} & 6\\text{–}9\\ \\text{Hz} \\\\ \\text{aromatic, meta} & 1\\text{–}3\\ \\text{Hz} \\\\ \\ce{H-C-CHO} & 1\\text{–}3\\ \\text{Hz} \\end{array}', text: 'Coupled protons share the same $J$. Different $J$ values to two neighbor sets give a doublet of doublets etc. instead of a simple n + 1 pattern.' },
        ],
      },
      {
        title: '¹³C NMR',
        items: [
          { label: 'Shift ranges (δ, ppm)', tex: '\\begin{array}{ll} sp^3 \\text{ alkyl C} & 0\\text{–}50 \\\\ \\ce{C-N} & 30\\text{–}65 \\\\ \\ce{C-O}\\ (\\text{alcohol, ether, ester O-side}) & 50\\text{–}90 \\\\ \\text{alkyne } \\ce{C#C} & 65\\text{–}90 \\\\ \\text{alkene, aromatic C} & 100\\text{–}160 \\\\ \\text{nitrile } \\ce{C#N} & 115\\text{–}125 \\\\ \\text{acid, ester, amide } \\ce{C=O} & 160\\text{–}185 \\\\ \\text{aldehyde, ketone } \\ce{C=O} & 190\\text{–}220 \\end{array}' },
          { label: 'Signals', text: 'Broadband-decoupled spectra show one line per set of equivalent carbons; integrals are not reliable. A signal near 200 means aldehyde or ketone; 170–180 means an acid derivative.' },
          { label: 'DEPT', tex: '\\begin{array}{lcccc} & \\text{C} & \\text{CH} & \\ce{CH2} & \\ce{CH3} \\\\ \\hline \\text{DEPT-90} & \\text{absent} & + & \\text{absent} & \\text{absent} \\\\ \\text{DEPT-135} & \\text{absent} & + & - & + \\end{array}' },
        ],
      },
      {
        title: 'Mass spectrometry',
        items: [
          { label: 'Key peaks', text: '**Molecular ion** $\\ce{M+.}$: the molecular mass (with the most abundant isotopes). **Base peak**: the tallest peak, set to 100%. Fragment peaks are cations; neutral pieces are invisible.' },
          { label: 'M + 1 and carbon count', tex: 'n_{\\ce{C}} \\approx \\frac{I(\\text{M}+1)}{I(\\text{M})} \\times \\frac{100}{1.1}', text: 'Each carbon contributes about 1.1% $^{13}$C.' },
          { label: 'Halogen isotope patterns', tex: '\\begin{array}{ll} \\text{one Cl} & \\text{M : M+2} \\approx 3:1 \\\\ \\text{one Br} & \\text{M : M+2} \\approx 1:1 \\\\ \\text{two Cl} & \\text{M : M+2 : M+4} \\approx 9:6:1 \\\\ \\text{two Br} & \\text{M : M+2 : M+4} \\approx 1:2:1 \\end{array}', text: '$^{35}$Cl : $^{37}$Cl ≈ 76 : 24; $^{79}$Br : $^{81}$Br ≈ 51 : 49. Sulfur gives a small M+2 (about 4%).' },
          { label: 'Nitrogen rule', text: 'An **odd** molecular mass means an **odd** number of nitrogen atoms; an even mass means zero or an even number. Ethanol 46 (0 N), methylamine 31 (1 N), pyridine 79 (1 N), urea 60 (2 N).' },
          { label: 'Common losses', text: 'M − 15 ($\\ce{CH3}$), M − 18 ($\\ce{H2O}$, alcohols), M − 29 (ethyl or CHO), M − 43 (propyl or $\\ce{CH3CO}$). Common ions: m/z 43 ($\\ce{CH3CO+}$ or $\\ce{C3H7+}$), 77 ($\\ce{C6H5+}$), 91 ($\\ce{C7H7+}$, tropylium), 105 ($\\ce{C6H5CO+}$).' },
          { label: 'Rule of 13 (optional)', tex: '\\frac{M}{13} = n + \\frac{r}{13} \\;\\Rightarrow\\; \\ce{C_nH_{n+r}}, \\qquad \\text{DoU} = \\frac{n - r + 2}{2}', text: 'Each O added: subtract $\\ce{CH4}$ (16). Example M = 72: $72 = 5 \\times 13 + 7$ → $\\ce{C5H12}$ (DoU 0) or $\\ce{C4H8O}$ (DoU 1).' },
          { label: 'High resolution', text: 'Exact masses ($^1$H 1.00783, $^{12}$C 12.00000, $^{14}$N 14.00307, $^{16}$O 15.99491) distinguish formulas with the same nominal mass: CO 27.9949 vs $\\ce{N2}$ 28.0061 vs $\\ce{C2H4}$ 28.0313.' },
        ],
      },
    ],
  },

  // ------------------------------------------------- Aromatic & carbonyl chemistry
  {
    id: 'ochem-aromatic-carbonyl',
    title: 'Aromatic & Carbonyl Chemistry',
    course: 'orgo',
    icon: '⬡',
    description: 'Hückel’s rule, electrophilic aromatic substitution reagents and electrophiles, the directing-effects table, side-chain reactions, and nucleophilic addition to aldehydes and ketones: hydrides, Grignards, cyanohydrins, acetals, imines, enamines and the Wittig reaction.',
    sections: [
      {
        title: 'Aromaticity',
        items: [
          { label: 'Hückel’s rule', tex: '\\text{cyclic, planar, fully conjugated, } 4n + 2\\ \\pi \\text{ electrons}\\ (2, 6, 10, 14, \\ldots)', text: 'Aromatic: much more stable than expected. $4n$ π electrons with the other criteria: **antiaromatic** (destabilized). Fails any of the first three criteria: **nonaromatic**.' },
          { label: 'Counting π electrons', text: 'Each C=C: 2. Carbocation carbon (empty p): 0. Carbanion carbon (lone pair in p): 2. A heteroatom lone pair counts only if it must sit in a p orbital to complete the loop.' },
          { label: 'Examples', text: '**Aromatic:** benzene, $\\ce{C5H5-}$ (cyclopentadienyl anion), $\\ce{C7H7+}$ (tropylium), $\\ce{C3H3+}$, pyridine, pyrrole, furan, thiophene, imidazole. **Antiaromatic:** cyclobutadiene. **Nonaromatic:** cyclooctatetraene (tub-shaped), cyclopentadiene ($sp^3$ $\\ce{CH2}$).' },
          { label: 'Heterocycle basicity', text: 'Pyridine: lone pair in an $sp^2$ orbital in the ring plane, not in the π system; normal weak base (p$K_{aH}$ 5.2). Pyrrole: lone pair is part of the sextet; protonating it destroys aromaticity (p$K_{aH}$ ≈ −4).' },
        ],
      },
      {
        title: 'Electrophilic aromatic substitution (EAS)',
        items: [
          { label: 'Mechanism', text: 'π electrons attack $\\ce{E+}$ → resonance-stabilized arenium ion (σ complex; rate-determining, aromaticity lost) → a base removes the H on that carbon and aromaticity returns. Net: H replaced by E.' },
          { label: 'Reactions', tex: '\\begin{array}{lll} \\text{reaction} & \\text{reagents} & \\text{electrophile} \\\\ \\hline \\text{bromination} & \\ce{Br2, FeBr3} & \\ce{Br-Br-FeBr3}\\ (\\text{“}\\ce{Br+}\\text{”}) \\\\ \\text{chlorination} & \\ce{Cl2, FeCl3}\\ (\\text{or } \\ce{AlCl3}) & \\text{“}\\ce{Cl+}\\text{”} \\\\ \\text{iodination} & \\ce{I2} + \\text{oxidant } (\\ce{HNO3} \\text{ or } \\ce{CuCl2}) & \\text{“}\\ce{I+}\\text{”} \\\\ \\text{nitration} & \\ce{HNO3, H2SO4} & \\ce{NO2+}\\ (\\text{nitronium}) \\\\ \\text{sulfonation} & \\ce{SO3, H2SO4}\\ (\\text{fuming}) & \\ce{SO3}\\ /\\ \\ce{HSO3+}\\ (\\text{reversible}) \\\\ \\text{FC alkylation} & \\ce{RCl, AlCl3} & \\ce{R+}\\ (\\text{rearranges}) \\\\ \\text{FC acylation} & \\ce{RCOCl, AlCl3} & \\ce{RC#O+}\\ (\\text{acylium}) \\end{array}' },
          { label: 'Friedel–Crafts limits', text: 'Alkylation: carbocation rearrangements and polyalkylation. Both fail on rings more deactivated than a halobenzene and on $\\ce{-NH2}$/$\\ce{-NHR}$ rings (N binds $\\ce{AlCl3}$). Acylation does not rearrange and stops after one acyl group.' },
          { label: 'Sulfonation as a blocking group', text: 'Install $\\ce{-SO3H}$ at para, substitute ortho, then remove it with dilute $\\ce{H2SO4}$ and heat (desulfonation).' },
        ],
      },
      {
        title: 'Directing effects',
        items: [
          { label: 'Substituent table', tex: '\\begin{array}{lll} \\text{group} & \\text{effect} & \\text{directs} \\\\ \\hline \\ce{-NH2},\\ \\ce{-NR2},\\ \\ce{-OH},\\ \\ce{-O-} & \\text{strongly activating} & o, p \\\\ \\ce{-OR},\\ \\ce{-NHCOR} & \\text{moderately activating} & o, p \\\\ \\text{alkyl, aryl} & \\text{weakly activating} & o, p \\\\ \\ce{-F},\\ \\ce{-Cl},\\ \\ce{-Br},\\ \\ce{-I} & \\text{weakly deactivating} & o, p \\\\ \\ce{-CHO},\\ \\ce{-COR},\\ \\ce{-CO2R},\\ \\ce{-CO2H} & \\text{moderately deactivating} & m \\\\ \\ce{-C#N},\\ \\ce{-SO3H},\\ \\ce{-CF3},\\ \\ce{-NO2},\\ \\ce{-NR3+} & \\text{strongly deactivating} & m \\end{array}' },
          { label: 'Why', text: 'Lone-pair donors (+R) stabilize the arenium ion when E adds ortho or para (an extra resonance form with the charge on the heteroatom). Withdrawing groups put + next to + in the ortho/para arenium ions, so meta is least bad. Halogens: −I beats +R for rate, +R decides position.' },
          { label: 'Relative nitration rates', text: 'phenol 1000, toluene 25, benzene 1, chlorobenzene 0.033, ethyl benzoate 0.0037, nitrobenzene $6 \\times 10^{-8}$.' },
          { label: 'Several substituents', text: 'The strongest activator controls the position. Substitution between two groups that are meta to each other is rare (steric). Para usually beats ortho for bulky groups.' },
          { label: 'Planning order', text: 'Install a meta director first to get a meta product. Convert groups to switch their effect: $\\ce{-NO2}$ (m) → $\\ce{-NH2}$ (o/p); $\\ce{-COR}$ (m) → $\\ce{-CH2R}$ (o/p); $\\ce{-CH3}$ (o/p) → $\\ce{-COOH}$ (m).' },
        ],
      },
      {
        title: 'Changing groups on the ring',
        items: [
          { label: 'Nitro → amine', tex: '\\ce{ArNO2 ->[Fe \\text{ or } Sn, HCl \\text{; or } H2, Pd] ArNH2}' },
          { label: 'Carbonyl → CH₂', tex: '\\ce{ArCOR ->[Zn(Hg), HCl] ArCH2R}\\ \\text{(Clemmensen)}, \\qquad \\ce{->[H2NNH2, KOH][heat]}\\ \\text{(Wolff–Kishner)}', text: 'Acylation then reduction installs a straight alkyl chain without rearrangement.' },
          { label: 'Side-chain oxidation', tex: '\\ce{ArCH2R ->[KMnO4 \\text{ (hot) or } H2CrO4] ArCOOH}', text: 'Any alkyl group with at least one benzylic H becomes $\\ce{-COOH}$; tert-butyl is untouched.' },
          { label: 'Benzylic bromination', tex: '\\ce{ArCH2R ->[NBS, h\\nu] ArCHBrR}', text: 'The benzylic bromide then does SN1/SN2/E2 readily.' },
        ],
      },
      {
        title: 'Aldehydes and ketones: nucleophilic addition',
        items: [
          { label: 'Reactivity', text: 'Nucleophiles attack the δ+ carbonyl carbon (π* LUMO) at about 107° (Bürgi–Dunitz). Aldehydes > ketones (less steric hindrance, one fewer donating alkyl). Basic conditions: Nu attacks, then O⁻ is protonated. Acidic conditions: O is protonated first, then a weak Nu attacks.' },
          { label: 'Hydride reduction', tex: '\\ce{R2C=O ->[NaBH4][CH3OH] R2CHOH}, \\qquad \\ce{->[\\text{1. }LiAlH4, ether][\\text{2. }H3O+]}', text: 'Aldehyde → 1° alcohol, ketone → 2° alcohol. $\\ce{NaBH4}$ (mild, protic solvent) reduces only aldehydes, ketones and acid chlorides; $\\ce{LiAlH4}$ (dry ether/THF, separate workup) also reduces esters, acids, amides, nitriles and epoxides.' },
          { label: 'Grignard and organolithium', tex: '\\ce{R2C=O ->[\\text{1. }R\'MgBr][\\text{2. }H3O+] R2C(OH)R\'}', text: 'Formaldehyde → 1°, other aldehydes → 2°, ketones → 3° alcohol; $\\ce{CO2}$ → carboxylic acid; ethylene oxide → 1° alcohol two carbons longer. Made from $\\ce{RBr + Mg}$ in dry ether; destroyed by any O–H, N–H or C≡C–H.' },
          { label: 'Cyanohydrin', tex: '\\ce{R2C=O ->[HCN \\text{ (NaCN, cat. acid)}] R2C(OH)CN}', text: 'Adds one carbon; the nitrile hydrolyzes to an α-hydroxy acid or reduces to a β-amino alcohol.' },
          { label: 'Hydrate', tex: '\\ce{R2C=O + H2O <=> R2C(OH)2}', text: 'Acetone 0.14% hydrate, acetaldehyde 51%, formaldehyde 99.96%: electron-poor, unhindered C=O lies further toward the hydrate.' },
          { label: 'Acetal (protecting group)', tex: '\\ce{R2C=O + 2R\'OH <=>[H+] R2C(OR\')2 + H2O}', text: 'Use ethylene glycol ($\\ce{HOCH2CH2OH}$) for a cyclic acetal; remove water to drive it. Stable to base, hydrides and Grignards; removed with $\\ce{H3O+}$.' },
          { label: 'Imine and relatives', tex: '\\begin{array}{ll} \\ce{R\'NH2} \\text{ (1° amine)} & \\text{imine } \\ce{R2C=NR\'} \\\\ \\ce{R\'2NH} \\text{ (2° amine)} & \\text{enamine } \\ce{C=C-NR\'2} \\\\ \\ce{NH2OH} & \\text{oxime } \\ce{R2C=NOH} \\\\ \\ce{H2NNH2} & \\text{hydrazone } \\ce{R2C=NNH2} \\end{array}', text: 'Mild acid (pH about 4–5), loss of water. Too acidic protonates the amine; too basic fails to activate the OH leaving group. Hydrolyzed back by $\\ce{H3O+}$.' },
          { label: 'Wittig reaction', tex: '\\ce{R2C=O + Ph3P=CR\'2 -> R2C=CR\'2 + Ph3P=O}', text: 'Puts a C=C exactly where the C=O was. Ylide: $\\ce{Ph3P}$ + 1° or 2° RX (SN2), then BuLi. Driving force: the very strong P=O bond (oxaphosphetane intermediate).' },
          { label: 'Wolff–Kishner', tex: '\\ce{R2C=O ->[H2NNH2, KOH][heat] R2CH2}', text: 'Hydrazone then loss of $\\ce{N2}$ under basic conditions; Clemmensen ($\\ce{Zn(Hg), HCl}$) does the same in acid.' },
        ],
      },
    ],
  },

  // --------------------------------- Acid derivatives, enolates, amines & synthesis
  {
    id: 'ochem-acyl-enolate-amine',
    title: 'Acid Derivatives, Enolates, Amines & Synthesis',
    course: 'orgo',
    icon: '🧬',
    description: 'The acyl-derivative reactivity ladder and interconversions, hydride and Grignard reactions of esters and amides, enolate formation and α-acidity, aldol, Claisen, Michael, Robinson and haloform reactions, amine basicity and synthesis, and a C–C bond-forming toolbox for retrosynthesis.',
    sections: [
      {
        title: 'Carboxylic acid derivatives',
        items: [
          { label: 'Reactivity ladder', tex: '\\text{acid chloride} > \\text{anhydride} > \\text{ester} \\approx \\text{carboxylic acid} > \\text{amide} > \\text{carboxylate}', text: 'Follows leaving-group ability: $\\ce{Cl-}$ (p$K_a$ of HCl −7) > $\\ce{RCOO-}$ (≈ 4.8) > $\\ce{RO-}$ (≈ 16) > $\\ce{NH2-}$ (38), and how much the substituent donates into C=O by resonance (amides most).' },
          { label: 'Mechanism', text: 'Nucleophilic acyl substitution = **addition–elimination**: Nu adds to C=O → tetrahedral intermediate → C=O re-forms and expels the best leaving group. Not SN2.' },
          { label: 'Downhill rule', text: 'Any derivative converts directly into a **less** reactive one (acid chloride → anhydride, ester, amide, acid). Going uphill needs activation: acid → acid chloride with $\\ce{SOCl2}$.' },
          { label: 'Making derivatives', tex: '\\begin{array}{ll} \\ce{RCOOH ->[SOCl2] RCOCl} & \\text{acid chloride} \\\\ \\ce{RCOCl ->[R\'OH, pyridine] RCOOR\'} & \\text{ester} \\\\ \\ce{RCOCl ->[2 R\'NH2] RCONHR\'} & \\text{amide (2nd equiv. takes HCl)} \\\\ \\ce{RCOCl ->[R\'COO-] RCOOCOR\'} & \\text{anhydride} \\\\ \\ce{RCOOH + R\'OH <=>[H+] RCOOR\' + H2O} & \\text{Fischer esterification (reversible)} \\end{array}' },
          { label: 'Hydrolysis', tex: '\\ce{RCOOR\' ->[\\text{1. }NaOH, H2O][\\text{2. }H3O+] RCOOH + R\'OH}', text: 'Saponification is irreversible (carboxylate forms). Amides need strong acid or base and prolonged heat. Nitriles: $\\ce{H3O+}$, heat → $\\ce{RCOOH}$ (via the amide).' },
          { label: 'Hydrides and Grignards', tex: '\\begin{array}{lll} \\text{substrate} & \\text{reagent} & \\text{product} \\\\ \\hline \\text{ester, acid} & \\ce{LiAlH4}; \\ce{H3O+} & 1° \\text{ alcohol} \\\\ \\text{ester} & \\text{DIBAL-H}, -78\\ °\\text{C}; \\ce{H2O} & \\text{aldehyde} \\\\ \\text{amide} & \\ce{LiAlH4}; \\ce{H2O} & \\text{amine } (\\ce{C=O -> CH2}) \\\\ \\text{nitrile} & \\ce{LiAlH4}\\ /\\ \\text{DIBAL-H} & 1° \\text{ amine / aldehyde} \\\\ \\text{nitrile} & \\ce{RMgBr}; \\ce{H3O+} & \\text{ketone} \\\\ \\text{ester} & 2\\ \\ce{RMgBr}; \\ce{H3O+} & 3° \\text{ alcohol (two identical R)} \\\\ \\text{ester} & \\ce{NaBH4} & \\text{no reaction} \\end{array}' },
        ],
      },
      {
        title: 'Enolates',
        items: [
          { label: 'α-H acidity', tex: '\\begin{array}{lc} \\text{ethane (no C=O)} & \\approx 50 \\\\ \\text{ester } \\alpha\\text{-H}\\ (\\ce{CH3COOEt}) & \\approx 25 \\\\ \\text{nitrile } \\alpha\\text{-H}\\ (\\ce{CH3CN}) & \\approx 25 \\\\ \\text{ketone } \\alpha\\text{-H}\\ (\\text{acetone}) & 19.2 \\\\ \\text{aldehyde } \\alpha\\text{-H}\\ (\\ce{CH3CHO}) & 16.7 \\\\ \\text{diethyl malonate} & 13.3 \\\\ \\beta\\text{-diketone (2,4-pentanedione)} & 9 \\end{array}', text: 'The enolate negative charge is shared with O by resonance; two C=O groups share it further.' },
          { label: 'LDA vs alkoxide', tex: '\\begin{array}{lll} & \\text{LDA, THF, } -78\\ °\\text{C} & \\ce{NaOEt}, \\ce{EtOH}, 25\\ °\\text{C} \\\\ \\hline \\text{deprotonation} & \\text{complete, irreversible} & \\text{small equilibrium amount} \\\\ \\text{enolate} & \\text{kinetic (less substituted C=C)} & \\text{thermodynamic (more substituted)} \\\\ \\text{use for} & \\text{alkylation, directed aldol} & \\text{aldol, Claisen, Michael} \\end{array}', text: 'LDA conjugate acid p$K_a$ 36 vs ketone 19–20; ethanol 16 vs 19–20.' },
          { label: 'Keto–enol tautomerism', text: 'Acid or base catalyzed; the keto form dominates for simple aldehydes and ketones. Racemizes a stereocenter at the α-carbon.' },
          { label: 'Enolate alkylation', tex: '\\ce{R2CHCOR\' ->[\\text{1. LDA}][\\text{2. }R\'\'CH2Br] R2C(CH2R\'\')COR\'}', text: 'SN2 limits apply: methyl, 1°, allylic or benzylic halides only.' },
          { label: 'α-Halogenation and haloform', tex: '\\ce{RCOCH3 ->[3 X2, NaOH] RCOO- + CHX3}', text: 'In acid ($\\ce{X2}$, $\\ce{H3O+}$) halogenation stops after one X. In base each X makes the remaining α-H more acidic, so a methyl ketone is fully halogenated and cleaved (with $\\ce{I2}$: yellow iodoform, a test for methyl ketones).' },
          { label: 'Malonic and acetoacetic ester syntheses', text: 'Alkylate diethyl malonate (NaOEt; RX) then $\\ce{H3O+}$, heat → substituted **acetic acid** $\\ce{RCH2COOH}$. Same with ethyl acetoacetate → **methyl ketone** $\\ce{RCH2COCH3}$. β-Keto acids and malonic acids lose $\\ce{CO2}$ on heating (cyclic six-membered TS).' },
        ],
      },
      {
        title: 'Enolate C–C bond formation',
        items: [
          { label: 'Aldol', tex: '\\ce{2CH3CHO ->[NaOH] CH3CH(OH)CH2CHO ->[heat][-H2O] CH3CH=CHCHO}', text: 'Enolate + aldehyde/ketone → **β-hydroxy carbonyl**; heating dehydrates (E1cB) to the **α,β-unsaturated carbonyl** (condensation). Crossed aldol works when one partner has no α-H (benzaldehyde, formaldehyde) or when one enolate is preformed with LDA. Intramolecular aldols favor 5- and 6-membered rings.' },
          { label: 'Claisen condensation', tex: '\\ce{2CH3COOEt ->[\\text{1. }NaOEt][\\text{2. }H3O+] CH3COCH2COOEt + EtOH}', text: 'Ester enolate + ester → **β-keto ester**. Use the alkoxide matching the ester and a full equivalent: deprotonating the product (p$K_a$ ≈ 11) drives the equilibrium. **Dieckmann** = intramolecular: 1,6-diester → 5-membered ring, 1,7 → 6-membered.' },
          { label: 'Michael addition', text: 'A stabilized nucleophile (malonate, β-keto ester, enamine) adds to the **β-carbon** of an α,β-unsaturated carbonyl (1,4- or conjugate addition) → 1,5-dicarbonyl. Strong, hard nucleophiles ($\\ce{RMgBr}$, $\\ce{LiAlH4}$) add 1,2 to the C=O instead.' },
          { label: 'Robinson annulation', text: 'Michael addition of a ketone enolate to methyl vinyl ketone, then intramolecular aldol condensation → a new **cyclohexenone** ring (two new C–C bonds).' },
          { label: 'Enamine (Stork) chemistry', text: 'Ketone + 2° amine (pyrrolidine) → enamine, a neutral enolate equivalent; alkylate or Michael-add, then $\\ce{H3O+}$ restores the ketone.' },
          { label: 'Disconnection patterns', tex: '\\begin{array}{ll} \\text{target pattern} & \\text{forward reaction} \\\\ \\hline \\beta\\text{-hydroxy carbonyl} & \\text{aldol addition} \\\\ \\alpha,\\beta\\text{-unsaturated carbonyl} & \\text{aldol condensation} \\\\ \\beta\\text{-keto ester, 1,3-diketone} & \\text{Claisen (Dieckmann if cyclic)} \\\\ \\text{1,5-dicarbonyl} & \\text{Michael} \\\\ \\text{fused cyclohexenone} & \\text{Robinson annulation} \\\\ \\text{new } \\alpha\\text{-alkyl group} & \\text{enolate alkylation} \\end{array}' },
        ],
      },
      {
        title: 'Amines',
        items: [
          { label: 'Basicity (pKaH = pKa of the conjugate acid)', tex: '\\begin{array}{lc} \\ce{(CH3)2NH},\\ \\ce{CH3NH2},\\ \\ce{(CH3CH2)3N} & 10.7,\\ 10.6,\\ 10.8 \\\\ \\ce{(CH3)3N} & 9.8 \\\\ \\ce{NH3} & 9.25 \\\\ \\text{pyridine} & 5.2 \\\\ \\text{aniline } \\ce{C6H5NH2} & 4.6 \\\\ \\text{4-nitroaniline} & 1.0 \\\\ \\text{acetamide (protonates on O)} & \\approx -0.5 \\\\ \\text{pyrrole} & \\approx -4 \\end{array}', text: 'Higher p$K_{aH}$ = stronger base. Alkyl groups donate; delocalization of the lone pair (aryl, amide, aromatic sextet) or $sp^2$ hybridization weakens the base.' },
          { label: 'Fraction protonated', tex: 'f_{\\ce{RNH3+}} = \\frac{1}{1 + 10^{\\,\\text{pH} - \\text{p}K_{aH}}}', text: 'At pH 7.4 an alkyl amine (p$K_{aH}$ ≈ 10.6) is over 99.9% protonated; this governs drug solubility and membrane crossing.' },
          { label: 'Reductive amination', tex: '\\ce{R2C=O + R\'NH2 ->[NaBH3CN][\\text{mild acid}] R2CH-NHR\'}', text: 'Imine (or iminium) forms, then is reduced selectively; $\\ce{NaBH(OAc)3}$ also works. Makes 1°, 2° or 3° amines without overalkylation.' },
          { label: 'Gabriel synthesis', tex: '\\text{phthalimide} \\ce{->[\\text{1. }KOH][\\text{2. }RCH2Br] ->[\\text{3. }H2NNH2] RCH2NH2}', text: 'Imide N–H p$K_a$ ≈ 8.3. Gives clean **1° amines**; direct alkylation of $\\ce{NH3}$ overalkylates to mixtures and quaternary salts.' },
          { label: 'Other routes', text: 'Azide: $\\ce{NaN3}$ (SN2), then $\\ce{LiAlH4}$ or $\\ce{H2}$, Pd → 1° amine. Amide + $\\ce{LiAlH4}$ → amine. Nitrile + $\\ce{LiAlH4}$ → 1° amine (one C longer than RX). $\\ce{ArNO2}$ + Fe/HCl → $\\ce{ArNH2}$.' },
          { label: 'Hofmann elimination', tex: '\\ce{RCH2CH2NH2 ->[\\text{excess }CH3I] RCH2CH2N(CH3)3+ ->[Ag2O, H2O][heat] RCH=CH2}', text: 'E2 with a bulky leaving group: the **less substituted** alkene.' },
          { label: 'Arenediazonium salts', tex: '\\ce{ArNH2 ->[NaNO2, HCl][0\\text{–}5\\ °C] ArN2+}', text: 'Then CuCl → ArCl, CuBr → ArBr, CuCN → ArCN (Sandmeyer); KI → ArI; $\\ce{HBF4}$, heat → ArF; $\\ce{H2O}$, heat → ArOH; $\\ce{H3PO2}$ → ArH.' },
        ],
      },
      {
        title: 'C–C bond-forming toolbox (retrosynthesis)',
        items: [
          { label: 'Organometallics and cyanide', tex: '\\begin{array}{lll} \\text{reaction} & \\text{reagents} & \\text{pattern in the product} \\\\ \\hline \\text{Grignard + aldehyde/ketone} & \\ce{RMgBr}; \\ce{H3O+} & \\text{alcohol next to the new bond} \\\\ \\text{Grignard + ester} & 2\\ \\ce{RMgBr}; \\ce{H3O+} & 3° \\text{ alcohol, two identical R} \\\\ \\text{Grignard + epoxide} & \\ce{RMgBr}; \\ce{H3O+} & \\ce{RCH2CH2OH}\\ (+2\\ \\text{C}) \\\\ \\text{Grignard + } \\ce{CO2} \\text{ / nitrile} & \\ce{RMgBr}; \\ce{CO2} \\text{ / } \\ce{R\'CN} & \\text{acid / ketone} \\\\ \\text{acetylide alkylation} & \\ce{NaNH2}; 1°\\ \\ce{RX} & \\text{alkyne (→ ketone, alkene, alkane)} \\\\ \\text{cyanide } \\text{S}_\\text{N}2 & \\ce{NaCN}; 1°\\ \\ce{RX} & \\text{nitrile → acid, amine } (+1\\ \\text{C}) \\\\ \\text{cyanohydrin} & \\ce{HCN} + \\ce{C=O} & \\ce{C(OH)CN}\\ (+1\\ \\text{C}) \\end{array}' },
          { label: 'Carbonyl and π-system reactions', tex: '\\begin{array}{lll} \\text{enolate alkylation} & \\text{LDA}; 1°\\ \\ce{RX} & \\text{new alkyl } \\alpha \\text{ to C=O} \\\\ \\text{aldol (condensation)} & \\ce{NaOH}\\ (\\text{heat}) & \\beta\\text{-hydroxy (}\\alpha,\\beta\\text{-unsat.) carbonyl} \\\\ \\text{Claisen / Dieckmann} & \\ce{NaOEt}; \\ce{H3O+} & \\beta\\text{-keto ester} \\\\ \\text{Michael / Robinson} & \\text{stabilized enolate + enone} & \\text{1,5-dicarbonyl / cyclohexenone} \\\\ \\text{Wittig} & \\ce{Ph3P=CHR} + \\ce{C=O} & \\ce{C=C} \\text{ where C=O was} \\\\ \\text{Diels–Alder} & \\text{diene + dienophile, heat} & \\text{cyclohexene, stereospecific} \\\\ \\text{Friedel–Crafts} & \\ce{RCOCl} \\text{ or } \\ce{RCl}, \\ce{AlCl3} & \\text{aryl ketone / alkylbenzene} \\end{array}' },
          { label: 'Functional-group interconversions', tex: '\\begin{array}{lll} \\text{target} & \\text{from} & \\text{reagent} \\\\ \\hline \\text{aldehyde, ketone} & 1°,\\ 2° \\text{ alcohol} & \\text{PCC, } \\ce{H2CrO4}, \\text{Swern} \\\\ \\text{alcohol} & \\text{C=O, ester} & \\ce{NaBH4},\\ \\ce{LiAlH4} \\\\ \\text{alkane} & \\text{alkene, alkyne} & \\ce{H2}, \\text{Pd} \\\\ \\text{alkene} & \\text{alcohol, alkyl halide} & \\ce{H2SO4}, \\text{heat / strong base} \\\\ \\text{amine} & \\text{amide, nitrile, imine, nitro} & \\ce{LiAlH4};\\ \\ce{NaBH3CN};\\ \\ce{H2}, \\text{Pd} \\\\ \\text{carboxylic acid} & 1° \\text{ alcohol, nitrile, ester} & \\ce{H2CrO4};\\ \\ce{H3O+}, \\text{heat} \\end{array}' },
          { label: 'Strategy', text: 'Work backward from the target: find the functional group, disconnect a C–C bond next to it using a reaction from the toolbox, repeat until the pieces are simple. Watch for groups that need protection (acetal for C=O during a Grignard step), aromatic directing order, and SN2 limits on alkyl halides.' },
        ],
      },
    ],
  },
];
