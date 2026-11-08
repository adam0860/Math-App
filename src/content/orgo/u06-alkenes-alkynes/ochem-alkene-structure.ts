import type { Lesson } from '../../types';

// <figures> generated from molecule-kit specs and hand-written SVG; every figure was rendered and checked.
const FIG = {
  pi_bond: "<svg viewBox=\"0 0 520 196\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0,0 C12,-17 48,-15.3 48,0 C48,15.3 12,17 0,0 Z\" transform=\"translate(210 100) rotate(-90)\" class=\"f-blue s-blue\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.22\" stroke-width=\"1.3\"/><path d=\"M0,0 C12,-17 48,-15.3 48,0 C48,15.3 12,17 0,0 Z\" transform=\"translate(210 100) rotate(90)\" class=\"f-orange s-orange\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.22\" stroke-width=\"1.3\"/><path d=\"M0,0 C12,-17 48,-15.3 48,0 C48,15.3 12,17 0,0 Z\" transform=\"translate(290 100) rotate(-90)\" class=\"f-blue s-blue\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.22\" stroke-width=\"1.3\"/><path d=\"M0,0 C12,-17 48,-15.3 48,0 C48,15.3 12,17 0,0 Z\" transform=\"translate(290 100) rotate(90)\" class=\"f-orange s-orange\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.22\" stroke-width=\"1.3\"/><path d=\"M218,66 Q250,48 282,66\" fill=\"none\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><path d=\"M218,134 Q250,152 282,134\" fill=\"none\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><line x1=\"218\" y1=\"100\" x2=\"282\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"203\" y1=\"96.2\" x2=\"173\" y2=\"79.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"203\" y1=\"103.8\" x2=\"173\" y2=\"120.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"297\" y1=\"96.2\" x2=\"327\" y2=\"79.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"297\" y1=\"103.8\" x2=\"327\" y2=\"120.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"210\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"290\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"166\" y=\"76\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"166\" y=\"124\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"334\" y=\"76\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"334\" y=\"124\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"250\" y=\"114\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">σ (sp²–sp²)</text><text x=\"250\" y=\"26\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">π bond: side-by-side overlap of p orbitals</text><text x=\"250\" y=\"184\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">all six atoms in one plane, bond angles ≈ 120°</text><text x=\"70\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">C=C 1.34 Å</text><text x=\"70\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">(C–C 1.54 Å)</text><text x=\"440\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">twisting 90° breaks</text><text x=\"440\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">the π bond: no rotation</text></svg>",
  naming: "<svg viewBox=\"0 0 520 265\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"71.3\" y1=\"62.3\" x2=\"97.3\" y2=\"47.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"68.7\" y1=\"57.7\" x2=\"94.7\" y2=\"42.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"96\" y1=\"45\" x2=\"122\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"122\" y1=\"60\" x2=\"148\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"45\" x2=\"174\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"45\" x2=\"148\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"70\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">1</text><text x=\"96\" y=\"33\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">2</text><text x=\"122\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">3</text><text x=\"136\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">4</text><text x=\"174\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">5</text><text x=\"122\" y=\"101\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">4-methylpent-1-ene</text><line x1=\"330\" y1=\"60\" x2=\"356\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"354.7\" y1=\"47.3\" x2=\"380.7\" y2=\"62.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"357.3\" y1=\"42.7\" x2=\"383.3\" y2=\"57.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"382\" y1=\"60\" x2=\"408\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"356\" y1=\"45\" x2=\"356\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"382\" y1=\"60\" x2=\"382\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"328\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">1</text><text x=\"344\" y=\"37\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">2</text><text x=\"394\" y=\"71\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">3</text><text x=\"410\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">4</text><text x=\"370\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">2,3-dimethylbut-2-ene</text><line x1=\"120\" y1=\"148\" x2=\"140.8\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"140.8\" y1=\"160\" x2=\"140.8\" y2=\"184\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"140.8\" y1=\"184\" x2=\"120\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"196\" x2=\"99.2\" y2=\"184\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"99.2\" y1=\"184\" x2=\"99.2\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"99.2\" y1=\"160\" x2=\"120\" y2=\"148\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"104.2\" y1=\"162.9\" x2=\"120\" y2=\"153.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"140.8\" y1=\"160\" x2=\"162.8\" y2=\"148\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"89.2\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">1</text><text x=\"120\" y=\"137\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">2</text><text x=\"149.8\" y=\"171\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">3</text><text x=\"126\" y=\"216\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">3-methylcyclohexene</text><line x1=\"331.3\" y1=\"177.3\" x2=\"357.3\" y2=\"162.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"328.7\" y1=\"172.7\" x2=\"354.7\" y2=\"157.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"356\" y1=\"160\" x2=\"382\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"383.3\" y1=\"177.3\" x2=\"409.3\" y2=\"162.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"380.7\" y1=\"172.7\" x2=\"406.7\" y2=\"157.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"356\" y1=\"160\" x2=\"356\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"328\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">1</text><text x=\"344\" y=\"152\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">2</text><text x=\"382\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">3</text><text x=\"410\" y=\"174\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\" font-weight=\"600\">4</text><text x=\"370\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">2-methylbuta-1,3-diene</text><text x=\"370\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">(isoprene)</text></svg>",
  ez: "<svg viewBox=\"0 0 520 154\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"66\" y1=\"72.6\" x2=\"94\" y2=\"72.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"66\" y1=\"67.4\" x2=\"94\" y2=\"67.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"52.3\" y1=\"64.3\" x2=\"41.9\" y2=\"53.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"52.3\" y1=\"75.7\" x2=\"37.7\" y2=\"90.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"107.7\" y1=\"64.3\" x2=\"118.1\" y2=\"53.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"107.7\" y1=\"75.7\" x2=\"122.3\" y2=\"90.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"58\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"102\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"32\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">CH₃</text><text x=\"32\" y=\"96\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"128\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">CH₃</text><text x=\"128\" y=\"96\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"80\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"600\">(Z)-but-2-ene</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">cis</text><line x1=\"241\" y1=\"72.6\" x2=\"269\" y2=\"72.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"241\" y1=\"67.4\" x2=\"269\" y2=\"67.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"227.3\" y1=\"64.3\" x2=\"216.9\" y2=\"53.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"227.3\" y1=\"75.7\" x2=\"212.7\" y2=\"90.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"282.7\" y1=\"64.3\" x2=\"297.3\" y2=\"49.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"282.7\" y1=\"75.7\" x2=\"293.1\" y2=\"86.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"233\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"277\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"207\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">CH₃</text><text x=\"207\" y=\"96\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"303\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"303\" y=\"96\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">CH₃</text><text x=\"255\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"600\">(E)-but-2-ene</text><text x=\"255\" y=\"144\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">trans</text><line x1=\"416\" y1=\"72.6\" x2=\"444\" y2=\"72.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"416\" y1=\"67.4\" x2=\"444\" y2=\"67.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"402.3\" y1=\"64.3\" x2=\"391.9\" y2=\"53.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"402.3\" y1=\"75.7\" x2=\"387.7\" y2=\"90.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"457.7\" y1=\"64.3\" x2=\"468.1\" y2=\"53.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"457.7\" y1=\"75.7\" x2=\"468.1\" y2=\"86.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"408\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"452\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"382\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">CH₃</text><text x=\"382\" y=\"96\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"478\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">Cl</text><text x=\"478\" y=\"96\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"430\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" font-weight=\"600\">(Z)-2-chlorobut-2-ene</text><text x=\"430\" y=\"144\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">chain carbons trans, yet Z</text><text x=\"260\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">red = higher CIP priority on each carbon; same side = Z (zusammen), opposite = E (entgegen)</text></svg>",
  hydrog: "<svg viewBox=\"0 0 520 288\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"230\" x2=\"500\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"270\" y=\"246\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">butane</text><line x1=\"45\" y1=\"62.5\" x2=\"135\" y2=\"62.5\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"90\" y=\"49.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-orange\">but-1-ene</text><line x1=\"90\" y1=\"66.5\" x2=\"90\" y2=\"226\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M90,226 L86.4,218.9 M90,226 L93.6,218.9\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"98\" y=\"166.3\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\">−127 kJ/mol</text><line x1=\"195\" y1=\"115\" x2=\"285\" y2=\"115\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"240\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">cis-but-2-ene</text><line x1=\"240\" y1=\"119\" x2=\"240\" y2=\"226\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M240,226 L236.4,218.9 M240,226 L243.6,218.9\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"248\" y=\"192.5\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\">−120 kJ/mol</text><line x1=\"345\" y1=\"145\" x2=\"435\" y2=\"145\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"390\" y=\"132\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-green\">trans-but-2-ene</text><line x1=\"390\" y1=\"149\" x2=\"390\" y2=\"226\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M390,226 L386.4,218.9 M390,226 L393.6,218.9\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"398\" y=\"207.5\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\">−116 kJ/mol</text><text x=\"14\" y=\"26\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"14\" font-style=\"italic\">H</text><line x1=\"10\" y1=\"230\" x2=\"10\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M10,30 L13.6,37.1 M10,30 L6.4,37.1\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M4,208 l12,-4 M4,214 l12,-4\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"270\" y=\"264\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">Each alkene + H₂ gives the same butane, so a smaller release of heat</text><text x=\"270\" y=\"279\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">means the alkene started lower: it is more stable.</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-alkene-structure',
  title: 'Alkene Structure, Naming and Stability',
  summary: 'The carbon–carbon double bond up close: why it is flat and cannot rotate, how to name alkenes and assign E/Z with the CIP rules, and how heats of hydrogenation measure which alkenes are most stable.',
  minutes: 17,
  objectives: [
    'Describe the σ + π structure of the C=C bond and explain why it does not rotate',
    'Name alkenes, cycloalkenes and dienes by IUPAC rules, and compute degrees of unsaturation',
    'Assign E or Z with the CIP priority rules, and explain when cis/trans is ambiguous',
    'Use heats of hydrogenation to rank alkene stability and convert energy differences into equilibrium ratios',
    'Explain why more substituted and trans alkenes are more stable',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The carbon–carbon double bond',
      blocks: [
        {
          type: 'p',
          text: 'In the last unit you made alkenes by elimination. Now meet them properly. Each carbon of a C=C is sp² [[gchem-hybrid-orbital|hybridized]]: three sp² orbitals in a plane at 120° form σ bonds, and the leftover p orbital, perpendicular to that plane, overlaps side by side with its neighbour to make a [[gchem-pi-bond|π bond]].',
        },
        {
          type: 'figure',
          svg: FIG.pi_bond,
          alt: 'Ethene: two carbons joined by a σ bond, each with two hydrogens in the same plane. Each carbon carries a vertical p orbital; the upper lobes overlap with each other above the plane and the lower lobes below it, forming the π bond.',
          caption: 'A double bond = one σ bond + one π bond. The π electrons sit above and below the molecular plane, exposed and relatively loosely held: that is why alkenes act as nucleophiles (next lesson).',
        },
        {
          type: 'list',
          items: [
            '**Planar**: the two alkene carbons and the four atoms attached to them lie in one plane.',
            '**Shorter and stronger**: C=C is 1.34 Å (C–C 1.54 Å) and has a bond energy of about 610 kJ/mol, but the π part alone is only about 270 kJ/mol, weaker than the σ part.',
            '**No rotation**: twisting one end by 90° would put the p orbitals at right angles and break the π bond. At room temperature that never happens, so groups on an alkene keep their relative positions. This gives cis/trans ([[gchem-cis-trans-isomers|geometric]]) isomers.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Degrees of unsaturation',
          text: 'Each ring or π bond removes two hydrogens from the saturated formula $\\ce{C_nH_{2n+2}}$. The number of rings plus π bonds, the [[ochem-degree-of-unsaturation|degree of unsaturation]], is $\\dfrac{2C + 2 + N - H - X}{2}$ (X = halogens; ignore O). Cyclohexene, $\\ce{C6H10}$, has $\\frac{14 - 10}{2} = 2$: one ring and one π bond.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'The σ bond is an axle that would let the two ends spin; the π bond is a second, sideways bar welded between them. Spinning one end means breaking the weld first.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A hydrocarbon has the formula $\\ce{C6H8}$. How many degrees of unsaturation (rings + π bonds) does it have?',
      hint: 'Saturated $\\ce{C6}$ would be $\\ce{C6H14}$. Each degree removes 2 H.',
      label: 'degrees of unsaturation $=$',
      answer: '3',
      explanation: '$\\frac{2(6) + 2 - 8}{2} = \\frac{6}{2} = 3$. Possibilities include a hexatriene (three C=C), a cyclohexadiene (one ring + two C=C), or a hexyne plus one C=C or ring (a triple bond counts as two). The formula alone cannot tell them apart; reactions and spectroscopy (Unit 8) can.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Naming alkenes',
      blocks: [
        {
          type: 'p',
          text: 'Alkene names build on alkane names (Unit 3): change *-ane* to *-ene* and give the double bond a locant. Current IUPAC style puts the locant right before *-ene* ("pent-1-ene"); the older style ("1-pentene") is still common in catalogues and older books, and you should recognize both.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Find the parent chain', text: 'Choose the longest chain that contains the C=C. (All examples in this course are chosen so that this is also the longest chain overall.)' },
            { title: 'Number from the end nearer the double bond', text: 'The C=C gets the lowest possible locant, given by its first carbon. Only if the double bond is equidistant from both ends do substituents decide the direction.' },
            { title: 'Name and number substituents', text: 'As for alkanes, alphabetically, with locants. Add E or Z (next card) when the alkene has stereoisomers.' },
            { title: 'Rings and dienes', text: 'In a cycloalkene the double-bond carbons are C1 and C2 (no locant needed for the ene), numbered so that substituents get the lowest locants. Two double bonds give a *-diene*: buta-1,3-diene.' },
          ],
        },
        {
          type: 'figure',
          svg: FIG.naming,
          alt: 'Four skeletal structures with numbered carbons: 4-methylpent-1-ene, a five-carbon chain with the double bond at C1 and a methyl at C4; 2,3-dimethylbut-2-ene, with the double bond between C2 and C3 each bearing a methyl; 3-methylcyclohexene, with the ring double bond between C1 and C2 and a methyl on C3; and 2-methylbuta-1,3-diene (isoprene).',
          caption: 'Numbering always starts at the end that gives the double bond the lower number, even when a substituent would prefer the other direction.',
        },
        {
          type: 'derivation',
          title: 'Naming $\\ce{(CH3)2CHCH=CHCH3}$',
          steps: [
            { tex: '\\ce{C^5H3-C^4H(CH3)-C^3H=C^2H-C^1H3}', why: 'The longest chain containing the C=C has five carbons. Numbering from the right gives the double bond locant 2; from the left it would be 3.' },
            { tex: '\\text{pent-2-ene} + \\text{4-methyl}', why: 'The methyl branch sits on C4.' },
            { tex: '\\text{4-methylpent-2-ene}', why: 'Each alkene carbon (C2 and C3) has an H and a carbon group, so this alkene also exists as E and Z isomers; a full name needs the descriptor, e.g. (E)-4-methylpent-2-ene.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          text: 'In SMILES, the string format chemistry software uses to store molecules as text, a double bond is `=` and geometry is written with slashes: `C/C=C/C` is (E)-but-2-ene and `C/C=C\\C` is (Z)-but-2-ene. The slashes say whether each neighbour sits "above" or "below" the double bond, so a parser can rebuild the 2D geometry from a 1D string.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'What is the IUPAC name of $\\ce{CH2=CHCH2CH(CH2CH3)CH3}$ (ignore stereochemistry at C4)?',
      options: [
        { text: '2-ethylpent-4-ene', why: 'Numbering must give the **double bond** the lowest locant, and the main chain must be the longest chain containing it.' },
        { text: '4-methylhex-1-ene', correct: true, why: 'The longest chain through the C=C has six carbons (through the ethyl branch); numbering from the CH₂= end puts the double bond at 1 and a methyl at 4.' },
        { text: '4-ethylpent-1-ene', why: 'That chain has only five carbons. Following the ethyl group gives a six-carbon chain that still contains the double bond.' },
        { text: '3-methylhex-5-ene', why: 'Right chain, wrong direction: the double bond must get the lower number.' },
      ],
      explanation: 'Write it out: $\\ce{C^1H2=C^2H-C^3H2-C^4H(CH3)-C^5H2-C^6H3}$. The ethyl "branch" is really the end of the main chain, so the parent is hex-1-ene with a methyl on C4: **4-methylhex-1-ene**. (C4 is a stereocenter, so a full name would add R or S.)',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'E and Z: when cis and trans are not enough',
      blocks: [
        {
          type: 'p',
          text: 'An alkene has stereoisomers only if **each** double-bond carbon carries two different groups. For but-2-ene, cis (methyls on the same side) and trans (opposite sides) are unambiguous. But what about an alkene with three or four different substituents, like $\\ce{CH3CH=C(Cl)CH3}$? "Same side as what?" The E/Z system answers by ranking the groups on each carbon with the Cahn–Ingold–Prelog rules you used for R/S in Unit 4.',
        },
        {
          type: 'theorem',
          name: 'E/Z rule',
          text: 'On each alkene carbon, rank its two substituents by CIP priority (higher atomic number first; at a tie, compare the next atoms; multiple bonds count as duplicated atoms). If the two higher-priority groups are on the same side, the alkene is **Z** (*zusammen*, together); on opposite sides, **E** (*entgegen*, opposite).',
        },
        {
          type: 'figure',
          svg: FIG.ez,
          alt: 'Three alkenes. (Z)-but-2-ene with both methyls up. (E)-but-2-ene with one methyl up-left and one down-right. (Z)-2-chlorobut-2-ene with a methyl up on the left carbon and chlorine up on the right carbon, so the main-chain methyls are on opposite sides.',
          caption: 'For but-2-ene, Z = cis and E = trans. But in 2-chlorobut-2-ene chlorine outranks the methyl on C3, so the isomer whose main-chain carbons are trans is **Z**.',
        },
        {
          type: 'derivation',
          title: 'Assigning (E)- or (Z)-3-methylpent-2-ene',
          steps: [
            { tex: '\\ce{CH3-CH=C(CH3)-CH2CH3} \\quad (\\text{with } \\ce{CH3} \\text{ on C2 and } \\ce{CH2CH3} \\text{ on C3 on the same side})', why: 'The isomer to classify.' },
            { tex: '\\text{C2: } \\ce{CH3} > \\ce{H}', why: 'C (atomic number 6) beats H (1).' },
            { tex: '\\text{C3: } \\ce{CH2CH3}\\ (\\text{C,H,H}) > \\ce{CH3}\\ (\\text{H,H,H})', why: 'Both attach through carbon, a tie; go one atom further and compare the sets of attached atoms.' },
            { tex: '\\text{higher-priority groups on the same side} \\implies (Z)', why: 'The two winners, $\\ce{CH3}$ on C2 and $\\ce{CH2CH3}$ on C3, are together.' },
          ],
          result: 'This is (Z)-3-methylpent-2-ene. Here Z happens to match "cis" along the main chain, but the 2-chlorobut-2-ene case shows the two systems can disagree. E/Z is the unambiguous one.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Cis–trans isomers in your eyes',
          text: 'Vision starts with a cis/trans switch. In the retina, 11-*cis*-retinal is bound to the protein opsin; absorbing a photon supplies enough energy to break the π bond briefly, the molecule snaps to all-*trans*, and that shape change triggers the nerve signal. The barrier that keeps alkenes from rotating is exactly what makes this switch reliable in the dark.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'In 1-bromo-1-chloropropene, $\\ce{BrClC=CHCH3}$, the bromine and the methyl group are on the **same side** of the double bond. Is this isomer E or Z?',
      options: [
        { text: 'Z, because Br and $\\ce{CH3}$ are the higher-priority groups and they are together', correct: true, why: 'On C1, Br (35) beats Cl (17); on C2, $\\ce{CH3}$ beats H. The two winners are on the same side: Z.' },
        { text: 'E, because Cl is more electronegative than Br and has priority', why: 'CIP priority depends on atomic number, not electronegativity. Br (Z = 35) outranks Cl (Z = 17).' },
        { text: 'Cis, which is the same as E for haloalkenes', why: 'Cis/trans is not defined here (no pair of identical groups), and cis never means E.' },
        { text: 'Neither: this alkene has no stereoisomers', why: 'Each alkene carbon carries two different groups (Br/Cl and $\\ce{CH3}$/H), so E and Z isomers exist.' },
      ],
      explanation: 'Rank each end separately. C1: Br > Cl (atomic number). C2: $\\ce{CH3}$ > H. With Br and $\\ce{CH3}$ on the same side the isomer is **(Z)-1-bromo-1-chloropropene**.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Measuring stability: heats of hydrogenation',
      blocks: [
        {
          type: 'p',
          text: 'Hydrogen adds to alkenes over a metal catalyst (next-but-one lesson), and the reaction releases heat. Because several isomeric alkenes give the **same alkane**, comparing their heats of hydrogenation compares the energies of the alkenes themselves, a clean application of [[gchem-hess-law|Hess\'s law]].',
        },
        {
          type: 'figure',
          svg: FIG.hydrog,
          alt: 'Enthalpy diagram on a broken axis. But-1-ene is highest and releases 127 kJ/mol on hydrogenation to butane; cis-but-2-ene is lower and releases 120; trans-but-2-ene is lowest and releases 116. All arrows end at the same butane level.',
          caption: 'The less heat released, the more stable the alkene was to begin with.',
        },
        {
          type: 'table',
          headers: ['Alkene', 'Substitution', '$\\Delta H^\\circ_{\\text{hydrog}}$ (kJ/mol)'],
          rows: [
            ['$\\ce{CH2=CH2}$ (ethene)', 'unsubstituted', '$-137$'],
            ['$\\ce{CH3CH=CH2}$ (propene)', 'monosubstituted', '$-126$'],
            ['$\\ce{CH3CH2CH=CH2}$ (but-1-ene)', 'monosubstituted', '$-127$'],
            ['cis-but-2-ene', 'disubstituted (cis)', '$-120$'],
            ['$\\ce{(CH3)2C=CH2}$ (2-methylpropene)', 'disubstituted (geminal)', '$-119$'],
            ['trans-but-2-ene', 'disubstituted (trans)', '$-116$'],
            ['$\\ce{(CH3)2C=CHCH3}$ (2-methylbut-2-ene)', 'trisubstituted', '$-113$'],
            ['$\\ce{(CH3)2C=C(CH3)2}$ (2,3-dimethylbut-2-ene)', 'tetrasubstituted', '$-111$'],
          ],
          caption: 'Typical values. "Substitution" counts the carbon groups attached directly to the two alkene carbons.',
        },
        {
          type: 'derivation',
          title: 'How much more stable is trans-but-2-ene than but-1-ene?',
          steps: [
            { tex: '\\ce{CH2=CHCH2CH3 + H2 -> C4H10} \\quad \\Delta H = -127\\ \\text{kJ/mol}', why: 'Hydrogenation of the monosubstituted alkene.' },
            { tex: '\\textit{trans}\\text{-}\\ce{CH3CH=CHCH3 + H2 -> C4H10} \\quad \\Delta H = -116\\ \\text{kJ/mol}', why: 'Same product, less heat.' },
            { tex: '\\Delta H(\\text{but-1-ene} \\to \\textit{trans}\\text{-but-2-ene}) = -127 - (-116) = -11\\ \\text{kJ/mol}', why: 'Hess\'s law: subtract the second equation from the first; butane and $\\ce{H2}$ cancel.' },
          ],
          result: 'Isomerizing but-1-ene into trans-but-2-ene releases 11 kJ/mol: the internal, disubstituted alkene is lower in energy.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Using the table, by how many kJ/mol is 2,3-dimethylbut-2-ene (tetrasubstituted) more stable than ethene, per double bond? (Both values are heats of hydrogenation.)',
      label: 'difference $=$',
      unit: 'kJ/mol',
      answer: '26',
      explanation: '$137 - 111 = 26$ kJ/mol. Strictly, the two alkenes give different alkanes, so this compares how much each double bond is stabilized relative to its own saturated product; still, the trend is clear: each alkyl group on the double bond lowers the heat of hydrogenation by several kJ/mol, and four of them by about 26.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Why substitution and trans geometry stabilize alkenes',
      blocks: [
        {
          type: 'theorem',
          name: 'Alkene stability order',
          tex: '\\text{tetra} > \\text{tri} > \\text{di (trans} > \\text{cis)} > \\text{mono} > \\ce{CH2=CH2}',
          text: 'More alkyl groups on the double-bond carbons, more stable; among disubstituted alkenes, trans is more stable than cis.',
        },
        {
          type: 'list',
          items: [
            '**Hyperconjugation.** C–H and C–C σ bonds on an attached alkyl group overlap with the π system ([[ochem-hyperconjugation|the same effect]] that stabilizes carbocations), spreading electron density over more atoms.',
            '**Stronger bonds.** A bond from an sp² carbon to an sp³ carbon is stronger than a bond from sp³ to sp³. Moving a carbon substituent onto the alkene carbon trades a weaker bond for a stronger one.',
            '**Sterics (cis versus trans).** In a cis alkene the two groups on the same side bump into each other; trans removes that strain. For cis- versus trans-but-2-ene the cost is about 4 kJ/mol; with bulky tert-butyl groups it exceeds 40 kJ/mol.',
          ],
        },
        {
          type: 'graph',
          x: [-10, 15],
          y: [0, 105],
          xStep: 5,
          yStep: 20,
          functions: [{ expr: '100/(1 + e^(-x*1000/(8.314T)))', label: '% of the more stable isomer at equilibrium', color: 'green' }],
          points: [{ x: 4, y: '100/(1 + e^(-4000/(8.314T)))', label: 'trans/cis-but-2-ene', color: 'blue' }],
          vlines: [{ x: 0, color: 'gray' }],
          sliders: [{ name: 'T', min: 200, max: 800, step: 10, value: 300, label: 'temperature $T$ (K)' }],
          readouts: [
            { label: '$K = e^{4000/RT}$ for $\\Delta G^\\circ = -4$ kJ/mol $=$', expr: 'e^(4000/(8.314T))', digits: 2 },
            { label: '% trans $=$', expr: '100/(1 + e^(-4000/(8.314T)))', digits: 1 },
          ],
          caption: 'Horizontal: how much more stable one isomer is ($-\\Delta G^\\circ$, kJ/mol, taking $\\Delta G^\\circ \\approx \\Delta H^\\circ$); vertical: its equilibrium percentage. At 300 K a 4 kJ/mol advantage gives about 83% trans. Heat the mixture and the percentage drifts toward 50%: thermal energy blurs small differences.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this matters for reactions',
          text: 'This order is the "more stable alkene" behind Zaitsev\'s rule in the last unit. Because the E2 and E1 transition states have partial double-bond character, the same factors that lower the alkene\'s energy lower the barrier to forming it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Which $\\ce{C6H12}$ alkene has the **smallest** heat of hydrogenation (is the most stable)?',
      options: [
        { text: 'hex-1-ene', why: 'Monosubstituted: only one carbon group on the double bond. Among the least stable.' },
        { text: '(Z)-hex-3-ene', why: 'Disubstituted but cis: the two ethyl groups crowd each other.' },
        { text: '(E)-hex-3-ene', why: 'Disubstituted and trans: better than cis, but only two alkyl groups.' },
        { text: '2,3-dimethylbut-2-ene', correct: true, why: 'Tetrasubstituted: four alkyl groups on the double-bond carbons, maximum hyperconjugation and sp²–sp³ bonding.' },
      ],
      explanation: 'Count the carbon groups on the two alkene carbons: tetra (2,3-dimethylbut-2-ene) > di-trans > di-cis > mono. The most substituted isomer is the most stable and releases the least heat (about 111 kJ/mol) when hydrogenated.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Alkenes in rings and in the real world',
      blocks: [
        {
          type: 'p',
          text: 'In small rings a double bond must be cis: a trans C=C needs room to span the ring. Cyclohexene, cyclopentene and every smaller cycloalkene exist only as the cis isomer (so no descriptor is needed). trans-Cyclooctene is the smallest stable trans-cycloalkene, and it is strained by about 40 kJ/mol relative to the cis isomer.',
        },
        {
          type: 'p',
          text: 'Related, **Bredt\'s rule**: in a small bicyclic ring system, a double bond cannot sit at a bridgehead carbon, because the p orbitals there cannot become parallel. You will occasionally see "eliminations that cannot happen" for this reason.',
        },
        {
          type: 'list',
          items: [
            '**Feedstocks**: ethene (ethylene) and propene are the two largest-volume organic chemicals made, mainly by cracking petroleum and natural gas; they become polyethylene, polypropylene, PVC, antifreeze and much more.',
            '**Fats**: unsaturated fatty acids have cis C=C bonds, whose kinks keep oils liquid. Partial hydrogenation, once used to make margarine, isomerized some of them to *trans* fats, which straighten the chains and raise the risk of heart disease; many countries now restrict them.',
            '**Natural products**: isoprene units (2-methylbuta-1,3-diene skeletons) build terpenes such as limonene, the vitamin A family and natural rubber, which is a polymer with cis double bonds.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'When a problem asks "how many stereoisomers?", check each C=C: it doubles the count if both of its carbons carry two different groups and it is not trapped as cis in a small ring.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'cis-But-2-ene and trans-but-2-ene interconvert rapidly at room temperature by rotation around the double bond, so they cannot be separated.',
      answer: false,
      explanation: 'Rotation about a C=C requires breaking the π bond, which costs roughly 260–270 kJ/mol, far beyond the thermal energy available at room temperature (about 2.5 kJ/mol per mole of collisions, $RT$). The two isomers are distinct compounds with different boiling points (4 °C and 1 °C) and can be separated. They interconvert only with a catalyst, at high temperature, or by absorbing light.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the steps for naming $\\ce{CH3CH2C(CH3)=CHCH2CH3}$ (with the two ethyl groups on opposite sides) in order.',
      lines: [
        'Find the longest chain that contains the C=C: six carbons, so the parent is hexene',
        'Number from the end nearer the double bond: it starts at C3 from either end, so let the methyl decide: methyl on C3',
        'Name the substituent: 3-methylhex-3-ene',
        'Rank groups on each alkene carbon: on C3, ethyl (C1–C2 end) > methyl; on C4, ethyl > H',
        'The two ethyls are on opposite sides: (E)-3-methylhex-3-ene',
      ],
      explanation: 'Parent chain, numbering, substituents, then stereochemistry. The double bond is in the middle (C3–C4 from either end), so the methyl breaks the tie and gets locant 3. On C3 the chain ethyl (C,H,H) outranks the methyl (H,H,H); on C4 ethyl beats H. Opposite sides gives **E**.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student names $\\ce{ClCH2CH=CHCH3}$ in which the $\\ce{CH2Cl}$ and $\\ce{CH3}$ groups are on the same side. Tap the first incorrect line.',
      lines: [
        'Parent chain: four carbons with the C=C; number from the $\\ce{CH2Cl}$ end so the double bond is C2–C3 and Cl is on C1.',
        'Name without stereochemistry: 1-chlorobut-2-ene.',
        'On C2, the $\\ce{CH2Cl}$ group outranks H; on C3, $\\ce{CH3}$ outranks H.',
        'The higher-priority groups are on opposite sides, so the isomer is (E).',
      ],
      errorLines: [4],
      explanation: 'The problem states that $\\ce{CH2Cl}$ and $\\ce{CH3}$ are on the **same side**, and those are exactly the higher-priority groups on C2 and C3. Same side means **(Z)**: the compound is (Z)-1-chlorobut-2-ene. Lines 1–3 are correct (from the other end the double bond would also be at 2, and Cl would get locant 4, so numbering from the Cl end wins the tie).',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary.',
      template: 'An alkene carbon is ___ hybridized. The double bond cannot rotate because twisting breaks the ___ bond. The higher-priority groups on the same side make the alkene ___. Among isomeric alkenes, the most substituted one has the ___ heat of hydrogenation.',
      blanks: [{ answers: ['sp²'] }, { answers: ['π'] }, { answers: ['Z'] }, { answers: ['smallest'] }],
      wordBank: ['sp²', 'sp³', 'π', 'σ', 'Z', 'E', 'smallest', 'largest'],
      explanation: 'Alkene carbons are sp², with a p orbital left over for the π bond. Twisting destroys the π overlap, so rotation is blocked. Same side = Z (zusammen). The most substituted alkene is the most stable, so it starts lowest and releases the least heat when hydrogenated to the common alkane.',
    },
  ],
  takeaways: [
    'A C=C is one σ bond plus one π bond; alkene carbons are sp², planar and 120°, and the π bond prevents rotation.',
    'Degrees of unsaturation $= (2C + 2 + N - H - X)/2$ count rings plus π bonds.',
    'Name alkenes from the longest chain containing the C=C, numbered to give the double bond the lowest locant: 4-methylpent-2-ene; cycloalkene double bonds are C1–C2.',
    'E/Z: rank each alkene carbon\'s two groups by CIP priority; higher-priority groups together = Z, opposite = E. Cis/trans can disagree with E/Z.',
    'Heats of hydrogenation compare alkene stabilities: tetra > tri > di (trans > cis) > mono > ethene, from hyperconjugation, sp²–sp³ bonding and sterics.',
    'Small energy differences translate into equilibrium ratios by $K = e^{-\\Delta G^\\circ/RT}$: 4 kJ/mol gives about 83 : 17 at room temperature.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 7 ("Alkenes: Structure and Reactivity") covers naming, the E/Z system and alkene stability with the same hydrogenation data.',
    },
    {
      title: 'E–Z notation (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/E%E2%80%93Z_notation',
      source: 'wikipedia',
      note: 'Examples of E/Z assignments, including cases where cis/trans and E/Z disagree.',
    },
    {
      title: 'Cahn–Ingold–Prelog priority rules (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Cahn%E2%80%93Ingold%E2%80%93Prelog_priority_rules',
      source: 'wikipedia',
      note: 'A full statement of the ranking rules, with the duplicated-atom convention for multiple bonds.',
    },
    {
      title: 'Khan Academy: Organic chemistry',
      url: 'https://www.khanacademy.org/science/organic-chemistry',
      source: 'khan',
      note: 'The alkene nomenclature and E/Z videos offer extra worked naming practice.',
    },
  ],
};
