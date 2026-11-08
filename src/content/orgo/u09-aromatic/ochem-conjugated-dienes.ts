import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  classes: "<svg viewBox=\"0 0 520 120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"23.8\" y1=\"46.9\" x2=\"48\" y2=\"32.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"26.2\" y1=\"51.1\" x2=\"50.4\" y2=\"37.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"49.2\" y1=\"35\" x2=\"73.4\" y2=\"49\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"73.4\" y1=\"49\" x2=\"97.6\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"98.8\" y1=\"32.9\" x2=\"123\" y2=\"46.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"96.4\" y1=\"37.1\" x2=\"120.6\" y2=\"51.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"73.4\" cy=\"49\" r=\"5\" class=\"f-gray\" fill-opacity=\"0.5\"/><text x=\"73\" y=\"90\" text-anchor=\"middle\" font-size=\"14\" class=\"t-gray\" font-weight=\"600\">isolated</text><text x=\"73\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">1,4-pentadiene</text><line x1=\"203.8\" y1=\"46.9\" x2=\"228\" y2=\"32.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"206.2\" y1=\"51.1\" x2=\"230.4\" y2=\"37.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"229.2\" y1=\"35\" x2=\"253.4\" y2=\"49\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"252.2\" y1=\"46.9\" x2=\"276.4\" y2=\"32.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"254.6\" y1=\"51.1\" x2=\"278.8\" y2=\"37.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"277.6\" y1=\"35\" x2=\"301.8\" y2=\"49\" stroke=\"currentColor\" stroke-width=\"1.6\"/><rect x=\"214\" y=\"30\" width=\"62\" height=\"28\" rx=\"12\" class=\"f-blue\" fill-opacity=\"0.15\"/><text x=\"253\" y=\"90\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\" font-weight=\"600\">conjugated</text><text x=\"253\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">(E)-1,3-pentadiene</text><line x1=\"385\" y1=\"46.6\" x2=\"413\" y2=\"46.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"385\" y1=\"51.4\" x2=\"413\" y2=\"51.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"413\" y1=\"46.6\" x2=\"441\" y2=\"46.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"413\" y1=\"51.4\" x2=\"441\" y2=\"51.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"441\" y1=\"49\" x2=\"465.2\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"413\" cy=\"49\" r=\"7\" class=\"f-orange\" fill-opacity=\"0.3\"/><text x=\"425\" y=\"90\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\" font-weight=\"600\">cumulated</text><text x=\"425\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" class=\"t-orange\">1,2-butadiene (an allene)</text></svg>",
  hydrog: "<svg viewBox=\"0 0 520 250\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"235\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.2\"/><polygon points=\"40,14 36,24 44,24\" class=\"f-gray\"/><text x=\"26\" y=\"130\" font-size=\"13\" text-anchor=\"middle\" class=\"t-gray\" transform=\"rotate(-90 26 130)\">energy (not to scale)</text><line x1=\"70\" y1=\"225\" x2=\"500\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"2.2\"/><text x=\"285\" y=\"243\" text-anchor=\"middle\" font-size=\"13\">butane, C₄H₁₀ (after adding 2 H₂)</text><line x1=\"70\" y1=\"50\" x2=\"250\" y2=\"50\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><text x=\"160\" y=\"40\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">diene with two isolated C=C</text><line x1=\"320\" y1=\"100\" x2=\"500\" y2=\"100\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"2.4\"/><text x=\"410\" y=\"90\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">1,3-butadiene (real)</text><line x1=\"140\" y1=\"52\" x2=\"140\" y2=\"216\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.8\"/><polygon points=\"140,223 135,214 145,214\" class=\"f-gray\"/><text x=\"149\" y=\"135.5\" text-anchor=\"start\" font-size=\"13\" class=\"t-gray\">−252 kJ/mol</text><text x=\"149\" y=\"152.5\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">(2 × 1-butene, −126 each)</text><line x1=\"410\" y1=\"102\" x2=\"410\" y2=\"216\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.8\"/><polygon points=\"410,223 405,214 415,214\" class=\"f-blue\"/><text x=\"419\" y=\"160.5\" text-anchor=\"start\" font-size=\"13\" class=\"t-blue\">−236 kJ/mol</text><text x=\"419\" y=\"177.5\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">(measured)</text><line x1=\"252\" y1=\"50\" x2=\"300\" y2=\"50\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1\" stroke-dasharray=\"2 3\"/><line x1=\"300\" y1=\"100\" x2=\"318\" y2=\"100\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1\" stroke-dasharray=\"2 3\"/><line x1=\"290\" y1=\"52\" x2=\"290\" y2=\"98\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1.8\"/><polygon points=\"290,100 286,92 294,92\" class=\"f-orange\"/><text x=\"298\" y=\"70\" text-anchor=\"start\" font-size=\"13\" class=\"t-orange\">16 kJ/mol</text><text x=\"296\" y=\"128\" text-anchor=\"middle\" font-size=\"12\"></text></svg>",
  bd_mo: "<svg viewBox=\"0 0 520 330\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"30\" x2=\"30\" y2=\"300\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.2\"/><polygon points=\"30,24 26,34 34,34\" class=\"f-gray\"/><text x=\"18\" y=\"165\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">E</text><line x1=\"40\" y1=\"165\" x2=\"500\" y2=\"165\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><text x=\"500\" y=\"159\" text-anchor=\"end\" font-size=\"12\" class=\"t-gray\">α (isolated p)</text><line x1=\"68\" y1=\"280.6\" x2=\"214\" y2=\"280.6\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"90\" cy=\"268.5\" rx=\"9.3\" ry=\"12\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"90\" cy=\"292.6\" rx=\"9.3\" ry=\"12\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"124\" cy=\"263.6\" rx=\"12\" ry=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"124\" cy=\"297.6\" rx=\"12\" ry=\"17\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"158\" cy=\"263.6\" rx=\"12\" ry=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"158\" cy=\"297.6\" rx=\"12\" ry=\"17\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"192\" cy=\"268.5\" rx=\"9.3\" ry=\"12\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"192\" cy=\"292.6\" rx=\"9.3\" ry=\"12\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><text x=\"226\" y=\"285.6\" text-anchor=\"start\" font-size=\"15\">ψ₁</text><text x=\"254\" y=\"285.6\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">α + 1.62β</text><text x=\"332\" y=\"285.6\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">0 nodes</text><line x1=\"68\" y1=\"209.1\" x2=\"214\" y2=\"209.1\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"90\" cy=\"192.2\" rx=\"12\" ry=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"90\" cy=\"226.1\" rx=\"12\" ry=\"17\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"124\" cy=\"197.1\" rx=\"9.3\" ry=\"12\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"124\" cy=\"221.2\" rx=\"9.3\" ry=\"12\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"158\" cy=\"197.1\" rx=\"9.3\" ry=\"12\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"158\" cy=\"221.2\" rx=\"9.3\" ry=\"12\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"192\" cy=\"192.2\" rx=\"12\" ry=\"17\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"192\" cy=\"226.1\" rx=\"12\" ry=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><line x1=\"141\" y1=\"189.1\" x2=\"141\" y2=\"229.1\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 3\"/><text x=\"226\" y=\"214.1\" text-anchor=\"start\" font-size=\"15\">ψ₂</text><text x=\"254\" y=\"214.1\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">α + 0.62β</text><text x=\"332\" y=\"214.1\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">1 node</text><text x=\"470\" y=\"214.1\" text-anchor=\"start\" font-size=\"13\" class=\"t-purple\">HOMO</text><line x1=\"68\" y1=\"120.9\" x2=\"214\" y2=\"120.9\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"90\" cy=\"103.9\" rx=\"12\" ry=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"90\" cy=\"137.8\" rx=\"12\" ry=\"17\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"124\" cy=\"108.8\" rx=\"9.3\" ry=\"12\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"124\" cy=\"132.9\" rx=\"9.3\" ry=\"12\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"158\" cy=\"108.8\" rx=\"9.3\" ry=\"12\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"158\" cy=\"132.9\" rx=\"9.3\" ry=\"12\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"192\" cy=\"103.9\" rx=\"12\" ry=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"192\" cy=\"137.8\" rx=\"12\" ry=\"17\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><line x1=\"107\" y1=\"100.9\" x2=\"107\" y2=\"140.9\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 3\"/><line x1=\"175\" y1=\"100.9\" x2=\"175\" y2=\"140.9\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 3\"/><text x=\"226\" y=\"125.9\" text-anchor=\"start\" font-size=\"15\">ψ₃</text><text x=\"254\" y=\"125.9\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">α − 0.62β</text><text x=\"332\" y=\"125.9\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">2 nodes</text><text x=\"470\" y=\"125.9\" text-anchor=\"start\" font-size=\"13\" class=\"t-purple\">LUMO</text><line x1=\"68\" y1=\"49.4\" x2=\"214\" y2=\"49.4\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"90\" cy=\"37.4\" rx=\"9.3\" ry=\"12\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"90\" cy=\"61.5\" rx=\"9.3\" ry=\"12\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"124\" cy=\"32.4\" rx=\"12\" ry=\"17\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"124\" cy=\"66.4\" rx=\"12\" ry=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"158\" cy=\"32.4\" rx=\"12\" ry=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"158\" cy=\"66.4\" rx=\"12\" ry=\"17\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"192\" cy=\"37.4\" rx=\"9.3\" ry=\"12\" class=\"f-red s-red\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><ellipse cx=\"192\" cy=\"61.5\" rx=\"9.3\" ry=\"12\" class=\"f-blue s-blue\" fill-opacity=\"0.3\" stroke-width=\"1.2\"/><line x1=\"107\" y1=\"29.4\" x2=\"107\" y2=\"69.4\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 3\"/><line x1=\"141\" y1=\"29.4\" x2=\"141\" y2=\"69.4\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 3\"/><line x1=\"175\" y1=\"29.4\" x2=\"175\" y2=\"69.4\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 3\"/><text x=\"226\" y=\"54.4\" text-anchor=\"start\" font-size=\"15\">ψ₄</text><text x=\"254\" y=\"54.4\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">α − 1.62β</text><text x=\"332\" y=\"54.4\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">3 nodes</text><line x1=\"50\" y1=\"289.6\" x2=\"50\" y2=\"271.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M50,271.57142857142856 l-3.5,4.5 M50,271.57142857142856 l3.5,4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/><line x1=\"58\" y1=\"271.6\" x2=\"58\" y2=\"289.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M58,289.57142857142856 l-3.5,-4.5 M58,289.57142857142856 l3.5,-4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/><line x1=\"50\" y1=\"218.1\" x2=\"50\" y2=\"200.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M50,200.14285714285714 l-3.5,4.5 M50,200.14285714285714 l3.5,4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/><line x1=\"58\" y1=\"200.1\" x2=\"58\" y2=\"218.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M58,218.14285714285714 l-3.5,-4.5 M58,218.14285714285714 l3.5,-4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/><text x=\"90\" y=\"322\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">C1</text><text x=\"124\" y=\"322\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">C2</text><text x=\"158\" y=\"322\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">C3</text><text x=\"192\" y=\"322\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">C4</text></svg>",
  hbr: "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18.8\" y1=\"61.9\" x2=\"43\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"21.2\" y1=\"66.1\" x2=\"45.4\" y2=\"52.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"44.2\" y1=\"50\" x2=\"68.4\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"67.2\" y1=\"61.9\" x2=\"91.4\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"69.6\" y1=\"66.1\" x2=\"93.8\" y2=\"52.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"20\" y=\"83\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"44.2\" y=\"41\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><text x=\"68.4\" y=\"83\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text><text x=\"92.6\" y=\"41\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><text x=\"108\" y=\"66\" text-anchor=\"middle\" font-size=\"18\">+</text><text x=\"128\" y=\"65.4\" text-anchor=\"middle\" font-size=\"15\">H</text><text x=\"168\" y=\"65.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">Br</text><line x1=\"136\" y1=\"60\" x2=\"157.5\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M32.1,57 Q76.2,20.6 124,52\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M124,52 L116.1,50.9 L119.8,45.2 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M148,60 Q150.4,38.2 170,48\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M170,48 L162,47.8 L165,41.7 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"190\" y1=\"60\" x2=\"228\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M228,60 L220.9,63.6 M228,60 L220.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"245\" y1=\"64\" x2=\"269.2\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"269.2\" y1=\"50\" x2=\"293.4\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"292.2\" y1=\"61.9\" x2=\"316.4\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"294.6\" y1=\"66.1\" x2=\"318.8\" y2=\"52.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"278.2\" cy=\"41\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"275\" y1=\"41\" x2=\"281.4\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"278.2\" y1=\"37.8\" x2=\"278.2\" y2=\"44.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"245\" y=\"83\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"263.2\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><text x=\"293.4\" y=\"83\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text><text x=\"317.6\" y=\"41\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><path d=\"M305.5,57 Q291.8,80 275.2,59\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M275.2,59 L282.4,62.6 L277,66.8 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"330\" y1=\"60\" x2=\"365\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M365,60 L357.9,63.6 M365,60 L357.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M330,60 L337.1,56.4 M330,60 L337.1,63.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"385\" y1=\"64\" x2=\"409.2\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"410.4\" y1=\"47.9\" x2=\"434.6\" y2=\"61.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"408\" y1=\"52.1\" x2=\"432.2\" y2=\"66.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"433.4\" y1=\"64\" x2=\"457.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"466.6\" cy=\"41\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"463.4\" y1=\"41\" x2=\"469.8\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"466.6\" y1=\"37.8\" x2=\"466.6\" y2=\"44.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"385\" y=\"83\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"409.2\" y=\"41\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><text x=\"433.4\" y=\"83\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text><text x=\"451.6\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><text x=\"470\" y=\"62\" text-anchor=\"start\" font-size=\"15\">+  Br⁻</text><rect x=\"236\" y=\"22\" width=\"276\" height=\"74\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"374\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">allylic cation: + shared by C2 and C4</text><line x1=\"300\" y1=\"125\" x2=\"190\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M190,175 L195,168.7 M190,175 L198,175.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"222\" y=\"140\" text-anchor=\"end\" font-size=\"12\">Br⁻ at C2</text><line x1=\"440\" y1=\"125\" x2=\"440\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M440,175 L436.4,167.9 M440,175 L443.6,167.9\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"448\" y=\"152\" text-anchor=\"start\" font-size=\"12\">Br⁻ at C4</text><line x1=\"90\" y1=\"219\" x2=\"114.2\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"114.2\" y1=\"205\" x2=\"138.4\" y2=\"219\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"137.2\" y1=\"216.9\" x2=\"161.4\" y2=\"202.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"139.6\" y1=\"221.1\" x2=\"163.8\" y2=\"207.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"114.2\" y=\"184.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">Br</text><line x1=\"114.2\" y1=\"205\" x2=\"114.2\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"90\" y=\"238\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"104.2\" y=\"201\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><text x=\"138.4\" y=\"238\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text><text x=\"162.6\" y=\"196\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><text x=\"126\" y=\"265\" text-anchor=\"middle\" font-size=\"13\">3-bromo-1-butene</text><text x=\"126\" y=\"283\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">1,2-addition product</text><line x1=\"395\" y1=\"219\" x2=\"419.2\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"420.4\" y1=\"202.9\" x2=\"444.6\" y2=\"216.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"418\" y1=\"207.1\" x2=\"442.2\" y2=\"221.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"443.4\" y1=\"219\" x2=\"467.6\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"491.8\" y=\"224.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">Br</text><line x1=\"467.6\" y1=\"205\" x2=\"482.8\" y2=\"213.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"395\" y=\"238\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"419.2\" y=\"196\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><text x=\"443.4\" y=\"238\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text><text x=\"467.6\" y=\"196\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><text x=\"440\" y=\"265\" text-anchor=\"middle\" font-size=\"13\">1-bromo-2-butene</text><text x=\"440\" y=\"283\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">1,4-addition product</text></svg>",
  da_mech: "<svg viewBox=\"0 0 520 200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"95\" y1=\"58\" x2=\"67.3\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"92.3\" y1=\"64.8\" x2=\"74.5\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"67.3\" y1=\"74\" x2=\"67.3\" y2=\"106\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"67.3\" y1=\"106\" x2=\"95\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"74.5\" y1=\"105\" x2=\"92.3\" y2=\"115.2\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"146.7\" y1=\"106\" x2=\"146.7\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"151.2\" y1=\"100.2\" x2=\"151.2\" y2=\"79.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"95\" y1=\"58\" x2=\"146.7\" y2=\"74\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 4\"/><line x1=\"95\" y1=\"122\" x2=\"146.7\" y2=\"106\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 4\"/><path d=\"M81.1,66 Q51.7,65 67.3,90\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M67.3,90 L60.6,85.7 L66.3,82.1 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M81.1,114 Q98.8,137.9 120.9,118\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M120.9,118 L117.8,125.4 L113.2,120.3 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M146.7,90 Q149.9,61.1 120.9,62\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M120.9,62 L128,58.4 L128.2,65.2 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"95\" y=\"48\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"55.3\" y=\"72\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><text x=\"55.3\" y=\"114\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text><text x=\"95\" y=\"140\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><text x=\"158.7\" y=\"116\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">5</text><text x=\"158.7\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">6</text><text x=\"95\" y=\"160\" text-anchor=\"middle\" font-size=\"13\">diene (s-cis)</text><text x=\"176\" y=\"160\" text-anchor=\"middle\" font-size=\"13\">dienophile</text><line x1=\"225\" y1=\"90\" x2=\"300\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M300,90 L292.9,93.6 M300,90 L292.9,86.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"262.5\" y=\"82\" text-anchor=\"middle\" font-size=\"12\">heat</text><text x=\"262.5\" y=\"108\" text-anchor=\"middle\" font-size=\"12\">one step</text><line x1=\"400\" y1=\"58\" x2=\"372.3\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"372.3\" y1=\"74\" x2=\"372.3\" y2=\"106\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"376.8\" y1=\"79.8\" x2=\"376.8\" y2=\"100.2\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"372.3\" y1=\"106\" x2=\"400\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"400\" y1=\"122\" x2=\"427.7\" y2=\"106\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.6\"/><line x1=\"427.7\" y1=\"106\" x2=\"427.7\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"427.7\" y1=\"74\" x2=\"400\" y2=\"58\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.6\"/><line x1=\"400.0\" y1=\"122.0\" x2=\"427.7\" y2=\"106.0\" class=\"s-blue\" stroke=\"currentColor\" stroke-width=\"3.2\"/><line x1=\"427.7\" y1=\"74.0\" x2=\"400.0\" y2=\"58.0\" class=\"s-blue\" stroke=\"currentColor\" stroke-width=\"3.2\"/><text x=\"400\" y=\"48\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"360.3\" y=\"72\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><text x=\"360.3\" y=\"114\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text><text x=\"400\" y=\"140\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><text x=\"439.7\" y=\"116\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">5</text><text x=\"439.7\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">6</text><text x=\"400\" y=\"160\" text-anchor=\"middle\" font-size=\"13\">cyclohexene</text><text x=\"400\" y=\"178\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">blue: two new σ bonds; new π at C2=C3</text></svg>",
  dienes4: "<svg viewBox=\"0 0 520 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"45\" x2=\"98.5\" y2=\"65.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"98.5\" y1=\"65.7\" x2=\"87.6\" y2=\"99.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"92.3\" y1=\"70.4\" x2=\"85.3\" y2=\"91.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"87.6\" y1=\"99.3\" x2=\"52.4\" y2=\"99.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"52.4\" y1=\"99.3\" x2=\"41.5\" y2=\"65.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"54.7\" y1=\"91.8\" x2=\"47.7\" y2=\"70.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"41.5\" y1=\"65.7\" x2=\"70\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"70\" y=\"140\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"600\">A</text><line x1=\"190\" y1=\"50\" x2=\"214.2\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"214.2\" y1=\"64\" x2=\"214.2\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"214.2\" y1=\"92\" x2=\"190\" y2=\"106\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"190\" y1=\"106\" x2=\"165.8\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"165.8\" y1=\"92\" x2=\"165.8\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"170.3\" y1=\"87\" x2=\"170.3\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"165.8\" y1=\"64\" x2=\"190\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"187.6\" y1=\"50\" x2=\"187.6\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"192.4\" y1=\"50\" x2=\"192.4\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"190\" y=\"140\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"600\">B</text><line x1=\"310\" y1=\"50\" x2=\"285.8\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"307.9\" y1=\"56.4\" x2=\"292.4\" y2=\"65.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"285.8\" y1=\"64\" x2=\"285.8\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"285.8\" y1=\"92\" x2=\"310\" y2=\"106\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"292.4\" y1=\"90.6\" x2=\"307.9\" y2=\"99.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"285.8\" y1=\"64\" x2=\"263.2\" y2=\"51\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"285.8\" y1=\"92\" x2=\"263.2\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"305\" y=\"140\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"600\">C</text><line x1=\"440\" y1=\"50\" x2=\"415.8\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"437.9\" y1=\"56.4\" x2=\"422.4\" y2=\"65.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"415.8\" y1=\"64\" x2=\"415.8\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"415.8\" y1=\"92\" x2=\"440\" y2=\"106\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"422.4\" y1=\"90.6\" x2=\"437.9\" y2=\"99.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"466\" y=\"70.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">CH₃</text><line x1=\"440\" y1=\"50\" x2=\"454.7\" y2=\"58.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"466\" y=\"96.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">CH₃</text><line x1=\"440\" y1=\"106\" x2=\"454.7\" y2=\"97.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><ellipse cx=\"466.0\" cy=\"78.0\" rx=\"22\" ry=\"26\" class=\"f-red\" fill-opacity=\"0.12\"/><text x=\"440\" y=\"140\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"600\">D</text></svg>",
  da_stereo: "<svg viewBox=\"0 0 520 250\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"60\" y1=\"32\" x2=\"35.8\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"57.9\" y1=\"38.4\" x2=\"42.4\" y2=\"47.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"35.8\" y1=\"46\" x2=\"35.8\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"35.8\" y1=\"74\" x2=\"60\" y2=\"88\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"42.4\" y1=\"72.6\" x2=\"57.9\" y2=\"81.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"108\" y=\"66\" text-anchor=\"middle\" font-size=\"18\">+</text><line x1=\"140\" y1=\"46\" x2=\"140\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"135.5\" y1=\"51\" x2=\"135.5\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"157.5\" y=\"38.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-red\">CO₂Me</text><line x1=\"140\" y1=\"46\" x2=\"156.5\" y2=\"36.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"157.5\" y=\"92.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-red\">CO₂Me</text><line x1=\"140\" y1=\"74\" x2=\"156.5\" y2=\"83.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"150\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">cis (dimethyl maleate)</text><line x1=\"225\" y1=\"60\" x2=\"290\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M290,60 L282.9,63.6 M290,60 L282.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"257.5\" y=\"52\" text-anchor=\"middle\" font-size=\"12\">heat</text><line x1=\"345\" y1=\"32\" x2=\"320.8\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"320.8\" y1=\"46\" x2=\"320.8\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"325.3\" y1=\"51\" x2=\"325.3\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"320.8\" y1=\"74\" x2=\"345\" y2=\"88\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"345\" y1=\"88\" x2=\"369.2\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"369.2\" y1=\"74\" x2=\"369.2\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"369.2\" y1=\"46\" x2=\"345\" y2=\"32\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"389.6\" y=\"39.6\" text-anchor=\"start\" font-size=\"15\" class=\"t-purple\">CO₂Me</text><polygon points=\"369.2,46 389.8,40.3 386.8,34\" fill=\"currentColor\"/><text x=\"389.6\" y=\"91.2\" text-anchor=\"start\" font-size=\"15\" class=\"t-purple\">CO₂Me</text><polygon points=\"369.2,74 386.8,86 389.8,79.7\" fill=\"currentColor\"/><text x=\"440\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">cis product (meso)</text><line x1=\"60\" y1=\"157\" x2=\"35.8\" y2=\"171\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"57.9\" y1=\"163.4\" x2=\"42.4\" y2=\"172.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"35.8\" y1=\"171\" x2=\"35.8\" y2=\"199\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"35.8\" y1=\"199\" x2=\"60\" y2=\"213\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"42.4\" y1=\"197.6\" x2=\"57.9\" y2=\"206.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"108\" y=\"191\" text-anchor=\"middle\" font-size=\"18\">+</text><line x1=\"140\" y1=\"171\" x2=\"140\" y2=\"199\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"135.5\" y1=\"176\" x2=\"135.5\" y2=\"194\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"157.5\" y=\"163.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-red\">CO₂Me</text><line x1=\"140\" y1=\"171\" x2=\"156.5\" y2=\"161.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"122.5\" y=\"217.4\" text-anchor=\"end\" font-size=\"15\" class=\"t-red\">MeO₂C</text><line x1=\"140\" y1=\"199\" x2=\"123.5\" y2=\"208.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"150\" y=\"233\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">trans (dimethyl fumarate)</text><line x1=\"225\" y1=\"185\" x2=\"290\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M290,185 L282.9,188.6 M290,185 L282.9,181.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"257.5\" y=\"177\" text-anchor=\"middle\" font-size=\"12\">heat</text><line x1=\"345\" y1=\"157\" x2=\"320.8\" y2=\"171\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"320.8\" y1=\"171\" x2=\"320.8\" y2=\"199\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"325.3\" y1=\"176\" x2=\"325.3\" y2=\"194\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"320.8\" y1=\"199\" x2=\"345\" y2=\"213\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"345\" y1=\"213\" x2=\"369.2\" y2=\"199\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"369.2\" y1=\"199\" x2=\"369.2\" y2=\"171\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"369.2\" y1=\"171\" x2=\"345\" y2=\"157\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"389.6\" y=\"164.6\" text-anchor=\"start\" font-size=\"15\" class=\"t-purple\">CO₂Me</text><polygon points=\"369.2,171 389.8,165.3 386.8,159\" fill=\"currentColor\"/><text x=\"389.6\" y=\"216.2\" text-anchor=\"start\" font-size=\"15\" class=\"t-purple\">CO₂Me</text><line x1=\"372.2\" y1=\"201.1\" x2=\"372.7\" y2=\"199.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"375.1\" y1=\"203.1\" x2=\"376.1\" y2=\"200.8\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"378\" y1=\"205.2\" x2=\"379.6\" y2=\"201.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"380.9\" y1=\"207.2\" x2=\"383\" y2=\"202.6\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"383.8\" y1=\"209.3\" x2=\"386.4\" y2=\"203.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"386.7\" y1=\"211.3\" x2=\"389.9\" y2=\"204.4\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"440\" y=\"233\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">trans product (racemic)</text></svg>",
  endo: "<svg viewBox=\"0 0 520 210\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"60\" y1=\"75\" x2=\"90\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"90\" y1=\"110\" x2=\"140\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"140\" y1=\"110\" x2=\"170\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"170\" y1=\"75\" x2=\"140\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"140\" y1=\"57\" x2=\"90\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"131\" y1=\"61.5\" x2=\"99\" y2=\"61.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"90\" y1=\"57\" x2=\"60\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"60\" y1=\"75\" x2=\"115\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"115\" y1=\"20\" x2=\"170\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"115\" y=\"172.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"90\" y1=\"110\" x2=\"78\" y2=\"145\" stroke=\"currentColor\" class=\"s-purple\" stroke-width=\"1.6\"/><line x1=\"140\" y1=\"110\" x2=\"152\" y2=\"145\" stroke=\"currentColor\" class=\"s-purple\" stroke-width=\"1.6\"/><line x1=\"78\" y1=\"145\" x2=\"108.1\" y2=\"162.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"152\" y1=\"145\" x2=\"121.9\" y2=\"162.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"55.4\" y=\"142.2\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"77.2\" y1=\"147.3\" x2=\"62.1\" y2=\"141.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"78.8\" y1=\"142.7\" x2=\"63.8\" y2=\"137.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"174.6\" y=\"142.2\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"151.2\" y1=\"142.7\" x2=\"166.2\" y2=\"137.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"152.8\" y1=\"147.3\" x2=\"167.9\" y2=\"141.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"115\" y=\"196\" text-anchor=\"middle\" font-size=\"13\" class=\"t-purple\">endo adduct (major)</text><text x=\"290\" y=\"60\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">CH₂ bridge (from C5 of cyclopentadiene)</text><line x1=\"285\" y1=\"56\" x2=\"125\" y2=\"22\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\" stroke-dasharray=\"2 3\"/><text x=\"290\" y=\"100\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">C=C from the diene</text><line x1=\"285\" y1=\"96\" x2=\"170\" y2=\"58\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\" stroke-dasharray=\"2 3\"/><text x=\"290\" y=\"150\" text-anchor=\"start\" font-size=\"12\" class=\"t-purple\">anhydride ring tucked under the</text><text x=\"290\" y=\"166\" text-anchor=\"start\" font-size=\"12\" class=\"t-purple\">C=C, away from the CH₂ bridge</text><line x1=\"285\" y1=\"150\" x2=\"175\" y2=\"140\" stroke=\"currentColor\" class=\"s-purple\" stroke-width=\"0.8\" stroke-dasharray=\"2 3\"/></svg>",
  da_example: "<svg viewBox=\"0 0 520 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"60\" x2=\"54\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"77.6\" y1=\"66.6\" x2=\"60.9\" y2=\"76.2\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"54\" y1=\"75\" x2=\"54\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"54\" y1=\"105\" x2=\"80\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"60.9\" y1=\"103.8\" x2=\"77.6\" y2=\"113.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"54\" y1=\"75\" x2=\"31.5\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"54\" y1=\"105\" x2=\"31.5\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"58\" y=\"63\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><text x=\"58\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text><text x=\"80\" y=\"139\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><line x1=\"135\" y1=\"105\" x2=\"135\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"139.5\" y1=\"99.6\" x2=\"139.5\" y2=\"80.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"180\" y=\"95.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"135\" y1=\"75\" x2=\"162\" y2=\"66\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"135\" y1=\"105\" x2=\"162\" y2=\"114\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"162\" y1=\"66\" x2=\"175.2\" y2=\"83.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"162\" y1=\"114\" x2=\"175.2\" y2=\"96.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"174\" y=\"50.6\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"159.9\" y1=\"64.8\" x2=\"167.9\" y2=\"50.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"164.1\" y1=\"67.2\" x2=\"172.1\" y2=\"53.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"174\" y=\"140.2\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"164.1\" y1=\"112.8\" x2=\"172.1\" y2=\"126.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"159.9\" y1=\"115.2\" x2=\"167.9\" y2=\"129.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"128\" y=\"71\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">6</text><text x=\"128\" y=\"118\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">5</text><text x=\"80\" y=\"172\" text-anchor=\"middle\" font-size=\"12\">2,3-dimethyl-1,3-butadiene</text><text x=\"165\" y=\"172\" text-anchor=\"start\" font-size=\"12\">+ maleic anhydride</text><line x1=\"250\" y1=\"90\" x2=\"300\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M300,90 L292.9,93.6 M300,90 L292.9,86.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"275\" y=\"82\" text-anchor=\"middle\" font-size=\"12\">heat</text><line x1=\"360\" y1=\"60\" x2=\"334\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"334\" y1=\"75\" x2=\"334\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"338.5\" y1=\"80.4\" x2=\"338.5\" y2=\"99.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"334\" y1=\"105\" x2=\"360\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"360\" y1=\"120\" x2=\"386\" y2=\"105\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.6\"/><line x1=\"386\" y1=\"105\" x2=\"386\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"386\" y1=\"75\" x2=\"360\" y2=\"60\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.6\"/><line x1=\"334\" y1=\"75\" x2=\"311.5\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"334\" y1=\"105\" x2=\"311.5\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"432\" y=\"95.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"386\" y1=\"75\" x2=\"416\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"386\" y1=\"105\" x2=\"416\" y2=\"111\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"416\" y1=\"69\" x2=\"427.1\" y2=\"83.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"416\" y1=\"111\" x2=\"427.1\" y2=\"96.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"428\" y=\"53.6\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"413.9\" y1=\"67.8\" x2=\"421.9\" y2=\"53.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"418.1\" y1=\"70.2\" x2=\"426.1\" y2=\"56.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"428\" y=\"137.2\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"418.1\" y1=\"109.8\" x2=\"426.1\" y2=\"123.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"413.9\" y1=\"112.2\" x2=\"421.9\" y2=\"126.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"382.5\" y=\"60.7\" text-anchor=\"middle\" font-size=\"15\">H</text><polygon points=\"386,75 387.3,62.6 380.5,63.8\" fill=\"currentColor\"/><text x=\"382.5\" y=\"130.1\" text-anchor=\"middle\" font-size=\"15\">H</text><polygon points=\"386,105 380.5,116.2 387.3,117.4\" fill=\"currentColor\"/><text x=\"360\" y=\"51\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text><text x=\"340\" y=\"63\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text><text x=\"340\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text><text x=\"360\" y=\"139\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text><text x=\"375\" y=\"109\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">5</text><text x=\"375\" y=\"79\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">6</text><text x=\"380\" y=\"172\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">cis ring fusion (both H wedged)</text></svg>",
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-conjugated-dienes',
  title: 'Conjugated Dienes and the Diels–Alder Reaction',
  summary: 'Why alternating double bonds are extra stable, the four π molecular orbitals of butadiene, 1,2- versus 1,4-addition under kinetic and thermodynamic control, the Diels–Alder reaction and its stereochemistry, and why longer conjugation absorbs longer wavelengths.',
  minutes: 22,
  objectives: [
    'Classify dienes as isolated, conjugated or cumulated, and use heats of hydrogenation to measure the stabilization from conjugation',
    'Build the π molecular orbitals of 1,3-butadiene from four p orbitals and identify its HOMO and LUMO',
    'Predict 1,2- and 1,4-addition products of HX to a conjugated diene from the allylic cation, and explain kinetic versus thermodynamic control',
    'Predict the product of a Diels–Alder reaction, including the s-cis requirement, stereospecificity and the endo rule',
    'Relate the length of a conjugated system to its HOMO–LUMO gap and its UV–visible absorption wavelength',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Conjugation: alternating π bonds are extra stable',
      blocks: [
        {
          type: 'p',
          text: 'A molecule with two C=C bonds is a **diene**. How the two π bonds are spaced decides how they behave. If a single bond separates them, the p orbitals on all four carbons sit side by side and can overlap continuously: the π bonds are [[ochem-conjugation|conjugated]]. Put an sp³ carbon between them and that overlap is broken; share a carbon and the two π bonds end up perpendicular.',
        },
        {
          type: 'figure',
          svg: FIG.classes,
          alt: 'Three dienes drawn as bond-line structures. Isolated: 1,4-pentadiene, with an sp3 CH2 (gray dot) between the two double bonds. Conjugated: (E)-1,3-pentadiene, with the two double bonds separated by one single bond (blue highlight). Cumulated: 1,2-butadiene, with two double bonds sharing one central carbon (orange dot).',
          caption: 'Isolated dienes react like two separate alkenes. Conjugated dienes are a new functional group with their own chemistry. Cumulated dienes (allenes) have a central sp carbon whose two π bonds are perpendicular, so they cannot share electrons.',
        },
        {
          type: 'p',
          text: 'You measured alkene stability in the alkene lesson with **heats of hydrogenation**: the less heat released when $\\ce{H2}$ adds, the more stable the starting alkene. The same tool measures conjugation. Adding $\\ce{H2}$ to 1-butene releases 126 kJ/mol. A diene with two such double bonds that did not interact should release twice that.',
        },
        {
          type: 'figure',
          svg: FIG.hydrog,
          alt: 'Energy diagram, not to scale. A dashed gray level for a diene with two isolated C=C bonds sits highest; an arrow of −252 kJ/mol (2 × 1-butene, −126 each) runs down to butane. A blue level for real 1,3-butadiene sits 16 kJ/mol lower; its arrow of −236 kJ/mol measured runs down to the same butane level.',
          caption: 'Both hydrogenations end at the same product, butane. The real diene releases less heat, so it started lower in energy: conjugation is worth about 16 kJ/mol here.',
        },
        {
          type: 'derivation',
          title: 'Stabilization energy of 1,3-butadiene',
          steps: [
            { tex: '\\Delta H_{\\text{pred}} = 2 \\times (-126) = -252\\ \\text{kJ/mol}', why: 'Model: two monosubstituted C=C bonds that ignore each other, each hydrogenated like 1-butene.' },
            { tex: '\\Delta H_{\\text{meas}} = -236\\ \\text{kJ/mol}', why: 'Measured for $\\ce{CH2=CH-CH=CH2 + 2H2 -> CH3CH2CH2CH3}$.' },
            { tex: '\\text{stabilization} = -236 - (-252) = 16\\ \\text{kJ/mol}', why: 'Both reactions end at butane, so the 16 kJ/mol less heat released means the conjugated diene started 16 kJ/mol lower in energy.' },
          ],
          result: 'Conjugation lowers the energy of 1,3-butadiene by about 16 kJ/mol. Small, but enough to change its chemistry.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Where the stabilization comes from',
          text: 'Two effects contribute. The C2–C3 single bond joins two sp² carbons, and an sp² orbital (33% s character) holds electrons closer to the nucleus than sp³, so that bond is shorter (148 pm versus 154 pm in ethane) and stronger. And the four p orbitals overlap in a row, so the π electrons are [[gchem-delocalized-electrons|delocalized]] over all four carbons. The next card makes the second effect precise.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'The isolated diene 1,4-pentadiene releases 252 kJ/mol on hydrogenation to pentane; its conjugated isomer (E)-1,3-pentadiene releases 226 kJ/mol. By how much is the conjugated isomer more stable?',
      hint: 'Both give the same product, pentane. Less heat released means a lower starting energy.',
      label: 'stabilization $=$',
      unit: 'kJ/mol',
      answer: '26',
      tolerance: 0.5,
      explanation: 'Both dienes hydrogenate to pentane, so compare the heats directly: $252 - 226 = 26$ kJ/mol. Be careful what you credit to conjugation, though. The conjugated isomer also has a **disubstituted** C=C (C3=C4), while 1,4-pentadiene has two monosubstituted ones, and more substituted alkenes are more stable by themselves. Correcting for that leaves roughly the same ~15 kJ/mol of conjugation you saw for butadiene.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The π molecular orbitals of butadiene',
      blocks: [
        {
          type: 'p',
          text: 'In General Chemistry you combined atomic orbitals into [[gchem-molecular-orbital|molecular orbitals]]: two orbitals in, two out, one [[gchem-bonding-orbital|bonding]] (in-phase, lower) and one [[gchem-antibonding-orbital|antibonding]] (out-of-phase, higher, with a node). Ethylene\'s π bond is exactly that: two p orbitals give π and π*.',
        },
        {
          type: 'p',
          text: 'Butadiene has four p orbitals in a row, so it has **four** π molecular orbitals, $\\psi_1$ to $\\psi_4$. Each higher orbital has one more node (a sign change between neighboring lobes). Its four π electrons fill the two lowest.',
        },
        {
          type: 'figure',
          svg: FIG.bd_mo,
          alt: 'Energy diagram of the four π molecular orbitals of 1,3-butadiene. Each is drawn as four p orbitals on C1 to C4, blue and red lobes showing phase, with lobe size showing the coefficient. Psi 1, lowest, at alpha + 1.62 beta, has 0 nodes; psi 2 at alpha + 0.62 beta has 1 node in the middle and is the HOMO; both hold two electrons. Above the dashed line for an isolated p orbital: psi 3 at alpha − 0.62 beta with 2 nodes, the LUMO, and psi 4 at alpha − 1.62 beta with 3 nodes.',
          caption: 'Lobe colors show phase, lobe sizes show how much each carbon contributes. $\\psi_1$ is bonding everywhere. $\\psi_2$, the [[gchem-homo-lumo|HOMO]], is bonding between C1–C2 and C3–C4 but antibonding between C2 and C3. $\\psi_3$ is the LUMO. ($\\beta$ is negative, so $\\alpha + 1.62\\beta$ is the lowest level.)',
        },
        {
          type: 'p',
          text: 'Add up the π energy: $2(\\alpha + 1.62\\beta) + 2(\\alpha + 0.62\\beta) = 4\\alpha + 4.47\\beta$. Two separate ethylene π bonds give $4\\alpha + 4\\beta$. The extra $0.47\\beta$ (a negative number, so a lowering) is the **delocalization energy**, the MO version of the 16 kJ/mol you just measured.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why C2–C3 has partial double-bond character',
          text: '$\\psi_1$ is strongly bonding between C2 and C3 (big lobes there, same phase); $\\psi_2$ is antibonding there, but its C2 and C3 lobes are small. The net is a little π bonding between C2 and C3. That is why the central bond is shorter than a normal single bond, and why rotating it costs some energy: butadiene prefers the planar **s-trans** and **s-cis** conformations (s = about the single bond), with s-trans about 12 kJ/mol lower. You will need s-cis for the Diels–Alder reaction.',
        },
        {
          type: 'deepdive',
          title: 'Hückel theory is an eigenvalue problem',
          blocks: [
            {
              type: 'p',
              text: 'In simple Hückel theory each carbon\'s p orbital has energy $\\alpha$, bonded neighbors interact with energy $\\beta$, and everything else is ignored. The Hamiltonian is $H = \\alpha I + \\beta A$, where $A$ is the **adjacency matrix** of the carbon skeleton: the molecule as a graph. The MO energies are $\\alpha + \\beta\\lambda$, where $\\lambda$ runs over the eigenvalues of $A$, and the eigenvectors are the lobe coefficients in the figure.',
            },
            {
              type: 'math',
              tex: 'A_{\\text{butadiene}} = \\begin{pmatrix} 0&1&0&0\\\\ 1&0&1&0\\\\ 0&1&0&1\\\\ 0&0&1&0 \\end{pmatrix}, \\qquad \\lambda_k = 2\\cos\\frac{k\\pi}{n+1} = \\pm 1.618,\\ \\pm 0.618',
              caption: 'For a chain of $n$ carbons, $\\lambda_k = 2\\cos\\frac{k\\pi}{n+1}$ and the coefficient on atom $j$ is proportional to $\\sin\\frac{jk\\pi}{n+1}$, the same standing waves as a vibrating string.',
            },
            {
              type: 'callout',
              variant: 'code',
              text: 'This is how cheminformatics code treats molecules: atoms are vertices, bonds are edges, and a SMILES string such as `C=CC=C` is just a compact serialization of that graph. Feed the adjacency matrix to any eigen-solver (`numpy.linalg.eigvalsh`, Eigen in C++) and you have the Hückel orbitals of any conjugated hydrocarbon.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Which statement about the π molecular orbitals of 1,3-butadiene is correct?',
      options: [
        { text: 'The HOMO is $\\psi_2$, which has one node, between C2 and C3', correct: true, why: 'Four π electrons fill $\\psi_1$ and $\\psi_2$. $\\psi_2$ has its single node at the center: same phase on C1–C2 and on C3–C4, opposite phase across C2–C3.' },
        { text: 'The HOMO is $\\psi_1$, because it holds the most stable electrons', why: '$\\psi_1$ is the lowest occupied orbital. The **highest** occupied one is $\\psi_2$, since four electrons fill two orbitals.' },
        { text: 'The LUMO is $\\psi_4$, the orbital with three nodes', why: '$\\psi_4$ is the highest-energy MO. The **lowest** unoccupied one is $\\psi_3$, with two nodes.' },
        { text: 'Butadiene has two π MOs, one bonding and one antibonding, like ethylene', why: 'The number of MOs equals the number of atomic orbitals combined. Four p orbitals make four π MOs.' },
      ],
      explanation: 'Count orbitals in = orbitals out: 4 p orbitals give $\\psi_1$–$\\psi_4$ with 0, 1, 2 and 3 nodes. Fill 4 π electrons two per orbital from the bottom: $\\psi_1^2\\psi_2^2$. So the HOMO is $\\psi_2$ (one node) and the LUMO is $\\psi_3$ (two nodes). These two orbitals decide both the Diels–Alder reaction and the UV absorption later in this lesson.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Adding HBr: 1,2- and 1,4-addition',
      blocks: [
        {
          type: 'p',
          text: 'Conjugated dienes undergo electrophilic addition like alkenes, with one twist. Protonate 1,3-butadiene at C1 (the terminal carbon, Markovnikov) and the cation at C2 sits next to the remaining C=C. It is an [[ochem-allylic-cation|allylic cation]], stabilized by resonance: the positive charge is shared by C2 and C4.',
        },
        {
          type: 'figure',
          svg: FIG.hbr,
          alt: 'Mechanism. 1,3-butadiene, carbons numbered 1 to 4, plus H–Br. A curved arrow from the C1=C2 π bond to H, and from the H–Br bond to Br. The product is an allylic cation in a dashed box, drawn as two resonance structures: positive charge on C2 with C3=C4, and positive charge on C4 with C2=C3, plus bromide. A curved arrow in the first structure moves the C3=C4 π electrons toward C2. Bromide attacking C2 gives 3-bromo-1-butene, the 1,2-addition product; attacking C4 gives 1-bromo-2-butene, the 1,4-addition product.',
          caption: 'Protonation at C1 is preferred because it gives the resonance-stabilized allylic cation; protonation at C2 would give an unstabilized primary cation. Bromide can then attack either carbon that carries positive charge.',
        },
        {
          type: 'list',
          items: [
            '**1,2-addition:** H and Br add to adjacent carbons C1 and C2, as with a simple alkene. Product: 3-bromo-1-butene.',
            '**1,4-addition** (conjugate addition): H and Br end up on the two ends, C1 and C4, and the remaining double bond **moves** to C2=C3. Product: 1-bromo-2-butene.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Predicting the products',
          text: 'Find the most stable cation after protonating one end of the diene. Draw its resonance structures. Every carbon carrying + in some structure is a site for the nucleophile. Then check whether the different sites give different compounds: in a symmetric diene they may give the same one.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: '"1,4" refers to the positions of the **diene** that receive H and Br, not to the numbering of the product\'s name. 1,4-addition to butadiene gives **1**-bromo-**2**-butene.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: '1,3-Cyclohexadiene reacts with one equivalent of HBr. How many constitutionally different products form?',
      hint: 'Protonate one end of the diene, draw the allylic cation\'s two resonance structures, and add bromide to each + carbon. Then compare the two products carefully.',
      options: [
        { text: 'One: 3-bromocyclohexene', correct: true, why: 'Protonating C1 gives an allylic cation shared by C2 and C4. Br at C2 gives 3-bromocyclohexene; Br at C4 also gives a ring with Br on the carbon next to the C=C. Because the ring is symmetric, these are the same compound.' },
        { text: 'Two: a 1,2-product and a 1,4-product', why: 'Both pathways do occur, but in this symmetric ring they lead to the same constitution: Br on an allylic carbon next to a ring C=C.' },
        { text: 'One: 4-bromocyclohexene', why: 'In both pathways the bromine ends up **adjacent** to the remaining C=C (allylic), so it is 3-bromocyclohexene, not 4-bromo.' },
        { text: 'One: 1,2-dibromocyclohexane', why: 'One equivalent of HBr adds H and Br once; there is no second Br and one C=C survives.' },
      ],
      explanation: 'Number the ring C1=C2–C3=C4–C5–C6. Protonate C1: the cation at C2 is allylic, with + shared by C2 and C4 (double bond C3=C4 or C2=C3). Bromide at C2 gives Br next to the C3=C4 double bond. Bromide at C4 gives Br next to the C2=C3 double bond. Either way the ring has one C=C with Br on an adjacent carbon: 3-bromocyclohexene. Symmetry collapses 1,2- and 1,4-addition into a single product. (It forms as a racemate, since C3 is a new stereocenter attacked from either face.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Kinetic versus thermodynamic control',
      blocks: [
        {
          type: 'p',
          text: 'The ratio of 1,2- to 1,4-product depends on temperature, and dramatically so:',
        },
        {
          type: 'table',
          headers: ['Conditions', '1,2-product', '1,4-product'],
          rows: [
            ['HBr, −80 °C', '80%', '20%'],
            ['HBr, 40 °C', '15%', '85%'],
            ['80:20 mixture warmed to 40 °C', '15%', '85%'],
          ],
          caption: 'The last row is the key experiment: at 40 °C the products interconvert (re-ionizing to the same allylic cation), so the mixture drifts to the same equilibrium ratio from either side.',
        },
        {
          type: 'p',
          text: 'Two different questions decide the two ratios. At −80 °C the additions are effectively irreversible, so the product ratio reflects which product **forms faster**: [[ochem-kinetic-control|kinetic control]], decided by the activation energies. At 40 °C the products re-ionize and equilibrate, so the ratio reflects which product is **more stable**: [[ochem-thermodynamic-control|thermodynamic control]], decided by $\\Delta G°$.',
        },
        {
          type: 'graph',
          x: [-4.5, 4.5],
          y: [-30, 22],
          xStep: 1,
          yStep: 5,
          functions: [
            { expr: '-15*(1-cos(pi*x/4))/2 + (8+15/2)*sin(pi*x/4)^2', label: 'to the 1,2-product', color: 'blue', domain: [0, 4] },
            { expr: '(-15-q)*(1-cos(pi*x/4))/2 + (8+d+(15+q)/2)*sin(pi*x/4)^2', label: 'to the 1,4-product', color: 'red', domain: [-4, 0] },
          ],
          points: [
            { x: 0, y: 0, label: 'allylic cation + Br⁻' },
            { x: 4, y: -15, label: '1,2', color: 'blue' },
            { x: -4, y: '-15-q', label: '1,4', color: 'red' },
          ],
          sliders: [
            { name: 'd', min: 0, max: 8, step: 0.1, value: 2.2, label: 'extra barrier of the 1,4 path (kJ/mol)' },
            { name: 'q', min: 0, max: 8, step: 0.1, value: 4.5, label: 'extra stability of the 1,4-product (kJ/mol)' },
            { name: 'T', min: 150, max: 400, step: 1, value: 193, label: 'temperature $T$ (K)' },
          ],
          readouts: [
            { label: 'kinetic ratio 1,2 : 1,4 $= e^{\\Delta\\Delta G^\\ddagger/RT} =$', expr: 'e^(1000d/(8.314T))', digits: 2 },
            { label: 'equilibrium ratio 1,4 : 1,2 $= e^{\\Delta\\Delta G°/RT} =$', expr: 'e^(1000q/(8.314T))', digits: 2 },
          ],
          caption: 'Energy (kJ/mol, relative to the cation) versus reaction progress, starting from the shared allylic cation in the middle. The 1,2 path (right, blue) has the lower barrier; the 1,4 path (left, red) leads to the lower product. With the defaults, the readouts reproduce the experiment: 80:20 at 193 K under kinetic control, 85:15 for 1,4 at equilibrium near 313 K.',
        },
        {
          type: 'derivation',
          title: 'Turning product ratios into energy differences',
          steps: [
            { tex: '\\frac{[1,2]}{[1,4]} = \\frac{k_{1,2}}{k_{1,4}} = e^{\\Delta\\Delta G^{\\ddagger}/RT}', why: 'Under kinetic control both products come from the same intermediate, so their ratio is the ratio of rate constants. By the [[gchem-arrhenius-equation|Arrhenius]] (Eyring) form, a barrier difference $\\Delta\\Delta G^\\ddagger$ becomes an exponential factor; the preexponential factors cancel.' },
            { tex: '\\Delta\\Delta G^{\\ddagger} = RT\\ln\\frac{80}{20} = (8.314)(193.15)\\ln 4 = 2.23\\ \\text{kJ/mol}', why: 'At −80 °C = 193.15 K. A barrier difference of only 2.2 kJ/mol gives a 4:1 preference at this temperature.' },
            { tex: '\\Delta\\Delta G° = RT\\ln\\frac{85}{15} = (8.314)(313.15)\\ln 5.67 = 4.52\\ \\text{kJ/mol}', why: 'At 40 °C the ratio is an [[gchem-equilibrium-constant|equilibrium constant]], $K = e^{-\\Delta G°/RT}$, so it measures the free-energy gap between the products.' },
          ],
          result: 'The 1,2-product has the lower barrier (by about 2 kJ/mol); the 1,4-product is lower in free energy (by about 4.5 kJ/mol).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the faster product is not the more stable one',
          text: 'The 1,4-product has a **disubstituted** internal C=C; the 1,2-product has a monosubstituted terminal one, so 1,4 is more stable. But the 1,2-product forms faster: when $\\ce{H+}$ adds to C1, the bromide ion is still right next to C2 (a *proximity effect*), and C2 is a secondary carbon that carries more of the positive charge than primary C4.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Under kinetic control at 0 °C, a diene adds HBr to give a 70:30 ratio of 1,2- to 1,4-product. What is the difference between the two activation free energies, $\\Delta\\Delta G^{\\ddagger}$? Use $R = 8.314$ J mol⁻¹ K⁻¹.',
      hint: '$\\Delta\\Delta G^\\ddagger = RT\\ln(\\text{ratio})$ with $T$ in kelvins; convert J to kJ.',
      label: '$\\Delta\\Delta G^{\\ddagger} =$',
      unit: 'kJ/mol',
      answer: '8.314*273.15*ln(70/30)/1000',
      answerTex: '1.92\\ \\text{kJ/mol}',
      tolerance: 0.02,
      explanation: 'Under kinetic control the product ratio equals $k_{1,2}/k_{1,4} = e^{\\Delta\\Delta G^\\ddagger/RT}$. So $\\Delta\\Delta G^\\ddagger = RT\\ln(70/30) = (8.314)(273.15)\\ln(2.333) = (2271)(0.847) = 1924$ J/mol $\\approx 1.92$ kJ/mol. Notice how small that is: a 2 kJ/mol difference in barrier (less than one $RT$) is enough to tilt the ratio to 70:30.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'True or false: at 40 °C, HBr gives mostly 1,4-addition to 1,3-butadiene because the 1,4-product forms faster at higher temperature.',
      answer: false,
      explanation: 'False. The 1,2-product still forms faster at 40 °C (its barrier is still lower). What changes is **reversibility**: at 40 °C both products can re-ionize back to the allylic cation, so the system reaches equilibrium, and equilibrium favors the more stable 1,4-product (disubstituted internal C=C). That is thermodynamic control: the ratio reflects $\\Delta G°$, not the barriers.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The Diels–Alder reaction',
      blocks: [
        {
          type: 'p',
          text: 'Heat a conjugated diene with an alkene and a six-membered ring snaps shut in a single step. This is the [[ochem-diels-alder|Diels–Alder reaction]], a **[4+2] cycloaddition**: four π atoms of the diene plus two π atoms of the alkene (the [[ochem-dienophile|dienophile]]) form a cyclohexene.',
        },
        {
          type: 'figure',
          svg: FIG.da_mech,
          alt: 'Diels–Alder mechanism. Left: 1,3-butadiene drawn in the s-cis conformation as four corners of a hexagon, atoms 1 to 4, with double bonds C1=C2 and C3=C4; to its right a vertical ethylene, atoms 5 and 6, with dotted lines showing where bonds C1–C6 and C4–C5 will form. Three curved arrows: from the C1=C2 π bond to the C2–C3 bond, from the C3=C4 π bond toward C5, and from the C5=C6 π bond toward C1. After the arrow labelled heat, one step: cyclohexene numbered 1 to 6 with a double bond at C2=C3 and the new C1–C6 and C4–C5 σ bonds in blue.',
          caption: 'Three curved arrows move around the ring at once: three π bonds become two new σ bonds (blue) and one new π bond, C2=C3. There is no intermediate: it is a [[ochem-pericyclic-reaction|pericyclic reaction]], with all bonds forming and breaking in one cyclic transition state.',
        },
        {
          type: 'heading',
          text: 'Requirement 1: the diene must be s-cis',
        },
        {
          type: 'p',
          text: 'Both ends of the diene (C1 and C4) must reach the dienophile at the same time, which is only possible when the diene is in its **s-cis** conformation. Open-chain dienes rotate into s-cis freely at room temperature. A diene **locked s-trans** in a ring can never react; a diene locked s-cis (like cyclopentadiene) is exceptionally reactive. Cyclopentadiene is so good that it reacts with itself on standing, so it is stored as its Diels–Alder dimer and "cracked" back by heating just before use.',
        },
        {
          type: 'figure',
          svg: FIG.dienes4,
          alt: 'Four dienes labelled A to D. A: cyclopentadiene, a five-membered ring with two double bonds. B: 3-methylenecyclohexene, a six-membered ring with one ring double bond and an exocyclic CH2 double bond on the adjacent carbon, pointing away from the ring. C: 2,3-dimethyl-1,3-butadiene drawn s-cis with methyl groups on C2 and C3 pointing outward. D: (2Z,4Z)-hexa-2,4-diene drawn s-cis with its two terminal methyl groups (red) pointing inward toward each other, highlighted where they clash.',
          caption: 'Four dienes drawn in their s-cis-like geometry where one exists. You will use this figure in the next question.',
        },
        {
          type: 'heading',
          text: 'Requirement 2: electronics, HOMO meets LUMO',
        },
        {
          type: 'p',
          text: 'Butadiene and ethylene themselves react only sluggishly, under forcing conditions. The reaction is fast when the dienophile carries an **electron-withdrawing group** conjugated with its C=C ($\\ce{C=O}$, $\\ce{CO2R}$, $\\ce{C#N}$) and the diene carries electron-donating alkyl or alkoxy groups. In MO terms, electrons flow from the diene\'s HOMO ($\\psi_2$) into the dienophile\'s LUMO ($\\pi^*$). Withdrawing groups lower the dienophile\'s LUMO, donating groups raise the diene\'s HOMO, and a smaller gap means a stronger interaction and a lower barrier.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the orbital phases allow a one-step reaction',
          text: 'Look back at $\\psi_2$: its lobes on C1 and C4 have **opposite** phases. Ethylene\'s $\\pi^*$ also has opposite phases on its two carbons. Line them up and both ends overlap in phase, so both new σ bonds can start forming at once. This symmetry argument, part of the Woodward–Hoffmann rules, explains why [4+2] cycloadditions go easily on heating while [2+2] (two alkenes making a cyclobutane) does not.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Otto Diels and Kurt Alder reported the reaction in 1928 and shared the 1950 Nobel Prize for it. It is still one of the most used ring-forming reactions: one step builds a six-membered ring, two C–C bonds and up to four stereocenters, with predictable stereochemistry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Look at dienes A–D in the previous card. Which one **cannot** undergo a Diels–Alder reaction at all?',
      options: [
        { text: 'A, cyclopentadiene', why: 'The ring locks cyclopentadiene **s-cis**, which makes it one of the most reactive dienes known; it even dimerizes by Diels–Alder at room temperature.' },
        { text: 'B, 3-methylenecyclohexene', correct: true, why: 'Its two C=C bonds point to opposite sides of the connecting single bond, and that single bond is part of the ring, so it cannot rotate. B is locked s-trans: C1 and C4 can never both reach a dienophile.' },
        { text: 'C, 2,3-dimethyl-1,3-butadiene', why: 'C rotates freely into s-cis, and its methyl groups point outward where they do not interfere. The electron-donating methyls raise the HOMO, so C is a **better** diene than butadiene.' },
        { text: 'D, (2Z,4Z)-hexa-2,4-diene', why: 'D is a poor diene: in the s-cis conformation its two inward-pointing methyl groups collide, so very little of it is s-cis at any moment. But the conformation is reachable, so it is slow rather than impossible. B can never reach s-cis.' },
      ],
      explanation: 'The s-cis requirement is geometric. Ask: can C1 and C4 of the diene point the same way? For open-chain dienes (C, D) rotation about the central single bond allows it, although steric clashes (D) make it costly. A ring can lock the answer either way: cyclopentadiene (A) is permanently s-cis, while 3-methylenecyclohexene (B) is permanently s-trans and is unreactive as a diene.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Stereochemistry and predicting products',
      blocks: [
        {
          type: 'p',
          text: 'Because all bonds form in one step on one face of each partner, nothing has time to rotate. The Diels–Alder reaction is [[ochem-stereospecific|stereospecific]]: groups that are cis on the dienophile end up cis on the new ring, and trans groups end up trans.',
        },
        {
          type: 'figure',
          svg: FIG.da_stereo,
          alt: 'Two reactions of s-cis butadiene, heated. Top: with dimethyl maleate, whose two CO2Me groups are cis, the product cyclohexene has both CO2Me groups on wedges: the cis product, meso. Bottom: with dimethyl fumarate, whose CO2Me groups are trans, the product has one CO2Me on a wedge and one on a hashed bond: the trans product, racemic.',
          caption: 'Cis in, cis out; trans in, trans out. The trans product forms as a racemate, because the diene can add to either face of the dienophile with equal probability.',
        },
        {
          type: 'heading',
          text: 'The endo rule',
        },
        {
          type: 'p',
          text: 'When both partners are cyclic or substituted, a second stereochemical question appears. With cyclopentadiene and maleic anhydride, the anhydride ring can end up pointing toward the new C=C (**endo**) or away from it, toward the $\\ce{CH2}$ bridge (**exo**). The [[ochem-endo-rule|endo rule]]: the major product is usually endo, even though exo is less crowded and more stable.',
        },
        {
          type: 'figure',
          svg: FIG.endo,
          alt: 'Perspective drawing of the bicyclic endo adduct of cyclopentadiene and maleic anhydride. A one-carbon CH2 bridge sits on top, a C=C two-carbon bridge at the back from the diene, and the two former dienophile carbons at the front bottom. The anhydride ring (purple bonds) hangs below the front carbons, on the same side as the C=C and away from the CH2 bridge.',
          caption: 'In the endo adduct the electron-withdrawing groups sit under the diene\'s π system. In the transition state, their π orbitals overlap with the diene\'s C2 and C3 (secondary orbital overlap), which lowers the endo barrier. So endo is the **kinetic** product.',
        },
        {
          type: 'derivation',
          title: 'Predicting a Diels–Alder product: 2,3-dimethyl-1,3-butadiene + maleic anhydride',
          steps: [
            { tex: '\\text{diene: } \\mathrm{C1{=}C2{-}C3{=}C4} \\qquad \\text{dienophile: } \\mathrm{C5{=}C6}', why: 'Number the four diene carbons and the two dienophile carbons. Draw the diene s-cis, opening toward the dienophile. The methyls sit on C2 and C3.' },
            { tex: '\\text{new } \\sigma \\text{ bonds: } \\mathrm{C1{-}C6},\\ \\mathrm{C4{-}C5}', why: 'The diene\'s ends bond to the dienophile\'s two carbons, closing a six-membered ring.' },
            { tex: '\\text{new } \\pi \\text{ bond: } \\mathrm{C2{=}C3}', why: 'The double bond always ends up between the diene\'s two **inner** carbons, here the two methyl-bearing carbons.' },
            { tex: '\\text{cis dienophile} \\Rightarrow \\text{cis ring fusion}', why: 'The anhydride\'s two C=O groups are necessarily cis on its C=C (they are tied in a ring), so they stay cis on C5 and C6: both ring-fusion H atoms point the same way.' },
          ],
          result: 'A cyclohexene with methyls on the C=C carbons, fused cis to the anhydride ring: the figure below.',
        },
        {
          type: 'figure',
          svg: FIG.da_example,
          alt: 'Reaction scheme. 2,3-Dimethyl-1,3-butadiene drawn s-cis, carbons 1 to 4, plus maleic anhydride, whose C=C carbons are labelled 5 and 6, heated. Product: a cyclohexene numbered 1 to 6 with methyl groups on the C2=C3 double bond, new bonds C1–C6 and C4–C5 in blue, and the five-membered anhydride ring fused at C5–C6 with both ring-fusion hydrogens on wedges, a cis ring fusion.',
          caption: 'This is a classic undergraduate lab experiment: the product crystallizes as it forms. Notice how every atom of both reactants ends up in the product (100% atom economy).',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: '1,3-Butadiene is heated with methyl (*E*)-but-2-enoate, $\\ce{CH3CH=CHCO2CH3}$, whose $\\ce{CH3}$ and $\\ce{CO2CH3}$ groups are trans. What is the product?',
      options: [
        { text: 'A cyclohexene with $\\ce{CH3}$ and $\\ce{CO2CH3}$ on adjacent sp³ carbons, **trans** to each other (racemic)', correct: true, why: 'The dienophile\'s two carbons become adjacent ring carbons C5 and C6, each keeping its substituent. The reaction is stereospecific, so trans stays trans.' },
        { text: 'The same cyclohexene, but with the two groups **cis**', why: 'Cis would require rotation about the dienophile\'s C=C during the reaction. In a concerted cycloaddition there is no intermediate in which rotation could happen.' },
        { text: 'A 1:1 mixture of cis and trans cyclohexenes', why: 'That is what a stepwise mechanism through an open intermediate could give. Diels–Alder reactions are concerted and stereospecific.' },
        { text: 'A cyclohexene with the two groups on the C=C carbons', why: 'The new C=C forms between the diene\'s inner carbons (C2=C3). The dienophile carbons become sp³ and carry the substituents.' },
      ],
      explanation: 'Number butadiene C1–C4 and the dienophile C5 (bearing $\\ce{CO2CH3}$) and C6 (bearing $\\ce{CH3}$). New σ bonds: C1–C6 and C4–C5; new π bond: C2=C3. So the substituents sit on adjacent sp³ carbons, C5 and C6, of a cyclohex-3-ene ring, and because the dienophile was trans they are trans. Attack on either face of the planar dienophile is equally likely, so both enantiomers form: a racemate.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the summary of the Diels–Alder reaction.',
      template: 'The diene must adopt the ___ conformation. The reaction is fastest with an ___ dienophile. In one step it forms ___ new σ bonds, and with a cyclic dienophile the major product is usually the ___ adduct.',
      blanks: [{ answers: ['s-cis'] }, { answers: ['electron-poor'] }, { answers: ['two'] }, { answers: ['endo'] }],
      wordBank: ['s-cis', 's-trans', 'electron-poor', 'electron-rich', 'two', 'three', 'endo', 'exo'],
      explanation: 'Only s-cis brings C1 and C4 close enough to bond to the dienophile simultaneously. An electron-withdrawing group lowers the dienophile\'s LUMO toward the diene\'s HOMO, speeding the reaction. Three π bonds are converted into **two** new σ bonds and one new π bond. And secondary orbital overlap makes the endo transition state lower in energy, so endo is the usual kinetic product.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A student predicts the product of 1,3-butadiene with acrolein, $\\ce{CH2=CH-CHO}$. Find the first incorrect line.',
      lines: [
        'Number the diene C1–C4 and the dienophile C5 (bearing CHO) and C6.',
        'Butadiene can rotate about C2–C3 into the s-cis conformation, so it can react.',
        'New σ bonds form between C1 and C6 and between C4 and C5, closing a six-membered ring.',
        'The new π bond forms between C1 and C2, where the diene\'s first double bond was.',
        'Product: a cyclohexene carrying a CHO group on an sp³ ring carbon.',
      ],
      errorLines: [4],
      explanation: 'Line 4 is wrong. C1 and C4 are now sp³ (each has just formed a σ bond to the dienophile), so neither can be in a double bond. The new π bond forms between the diene\'s **inner** carbons, C2=C3. The correct product is cyclohex-3-ene-1-carbaldehyde: CHO on C5, two carbons away from the new C2=C3 double bond.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Conjugation and color: UV–visible absorption',
      blocks: [
        {
          type: 'p',
          text: 'A molecule absorbs light when a photon\'s energy matches the gap between two orbitals. For a conjugated π system the lowest-energy absorption promotes an electron from the HOMO to the LUMO (a π → π* transition). Look at the butadiene MO diagram again: the HOMO–LUMO gap is $1.24|\\beta|$, versus $2|\\beta|$ for ethylene. Every added double bond squeezes the levels closer together.',
        },
        {
          type: 'theorem',
          name: 'Photon energy and wavelength',
          tex: 'E = \\frac{hc}{\\lambda} \\quad\\Rightarrow\\quad E_{\\text{molar}} = \\frac{hcN_A}{\\lambda} = \\frac{0.11963\\ \\text{J m mol}^{-1}}{\\lambda}',
          text: 'Smaller gap, lower photon energy, **longer** absorption wavelength $\\lambda_{\\max}$.',
        },
        {
          type: 'table',
          headers: ['Compound', 'Conjugated C=C', '$\\lambda_{\\max}$', 'Gap (kJ/mol)'],
          rows: [
            ['ethylene', '1', '171 nm', '700'],
            ['1,3-butadiene', '2', '217 nm', '551'],
            ['1,3,5-hexatriene', '3', '258 nm', '464'],
            ['1,3,5,7-octatetraene', '4', '≈ 290 nm', '≈ 413'],
            ['β-carotene', '11', '≈ 455 nm', '≈ 263'],
          ],
          caption: 'Each extra double bond shifts $\\lambda_{\\max}$ to longer wavelength. Below about 400 nm the absorption is ultraviolet and the compound looks colorless.',
        },
        {
          type: 'derivation',
          title: 'The HOMO–LUMO gap of butadiene from its spectrum',
          steps: [
            { tex: 'E = \\frac{(6.626 \\times 10^{-34})(2.998 \\times 10^{8})(6.022 \\times 10^{23})}{217 \\times 10^{-9}\\ \\text{m}}', why: 'Planck relation per photon, $E = hc/\\lambda$, times Avogadro\'s number to get energy per mole of photons. Wavelength in metres.' },
            { tex: '= \\frac{0.11963\\ \\text{J m mol}^{-1}}{2.17 \\times 10^{-7}\\ \\text{m}} = 5.51 \\times 10^{5}\\ \\text{J/mol} = 551\\ \\text{kJ/mol}', why: 'Units: J·m/mol divided by m leaves J/mol.' },
          ],
          result: 'The π → π* gap of butadiene is about 551 kJ/mol, well below ethylene\'s 700 kJ/mol.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'From carrots to dyes',
          text: 'β-Carotene has 11 conjugated C=C bonds; its gap is small enough to absorb blue light around 455 nm, so it looks orange (the complementary color). The same principle designs every organic dye and pigment: extend the conjugation (often through aromatic rings, which you meet next) until the absorption moves into the visible.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love "which absorbs at the longest wavelength?" Count the double bonds that are **conjugated with each other**: an isolated C=C separated by an sp³ carbon does not extend the system, no matter how many there are.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'numeric',
      prompt: '1,3,5-Hexatriene absorbs most strongly at $\\lambda_{\\max} = 258$ nm. What is the energy of this π → π* transition per mole of photons? Use $h = 6.626 \\times 10^{-34}$ J s, $c = 2.998 \\times 10^{8}$ m/s, $N_A = 6.022 \\times 10^{23}$ mol⁻¹.',
      hint: '$E = hcN_A/\\lambda$, with $\\lambda$ in metres; divide by 1000 for kJ.',
      label: '$E =$',
      unit: 'kJ/mol',
      answer: '6.626*2.998*6.022*10^3/258',
      answerTex: '464\\ \\text{kJ/mol}',
      tolerance: 1,
      explanation: '$E = hcN_A/\\lambda = (6.626 \\times 10^{-34})(2.998 \\times 10^{8})(6.022 \\times 10^{23}) / (258 \\times 10^{-9}) = 0.11963 / 2.58 \\times 10^{-7} = 4.64 \\times 10^{5}$ J/mol $= 464$ kJ/mol. Compare butadiene (551 kJ/mol): one more conjugated double bond narrows the HOMO–LUMO gap by almost 90 kJ/mol.',
    },
  ],
  takeaways: [
    'Conjugated dienes (C=C–C=C) are about 15 kJ/mol more stable than isolated ones, as heats of hydrogenation show, because the π electrons are delocalized over four p orbitals.',
    'Butadiene has four π MOs with 0–3 nodes; four electrons fill $\\psi_1$ and $\\psi_2$, so $\\psi_2$ is the HOMO and $\\psi_3$ the LUMO.',
    'HX adds to a conjugated diene through an allylic cation, giving 1,2- and 1,4-products. Low temperature gives the faster-forming product (kinetic control, usually 1,2); higher temperature lets them equilibrate to the more stable product (thermodynamic control, usually 1,4).',
    'The Diels–Alder reaction is a one-step [4+2] cycloaddition of an s-cis diene and a dienophile that forms two σ bonds and a new C=C between the diene\'s inner carbons. It is fastest with an electron-poor dienophile, is stereospecific (cis stays cis), and usually gives the endo product.',
    'Longer conjugation narrows the HOMO–LUMO gap and shifts UV–vis absorption to longer wavelength; with enough conjugation (β-carotene) the compound becomes colored.',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Chapter 14 (Conjugated Compounds and Ultraviolet Spectroscopy) covers this whole lesson, including the butadiene MOs and kinetic versus thermodynamic control.' },
    { title: 'Diels–Alder reaction (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Diels%E2%80%93Alder_reaction', source: 'wikipedia', note: 'Good diagrams of the endo transition state and many applications in total synthesis.' },
    { title: 'Master Organic Chemistry', url: 'https://www.masterorganicchemistry.com/', source: 'other', note: 'Search "Diels-Alder" for a series of short posts on predicting products, the s-cis requirement and the endo rule.' },
  ],
};
