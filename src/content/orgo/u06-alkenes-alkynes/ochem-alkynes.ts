import type { Lesson } from '../../types';

// <figures> generated from molecule-kit specs and hand-written SVG; every figure was rendered and checked.
const FIG = {
  orbitals: "<svg viewBox=\"0 0 520 190\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0,0 C11,-15 44,-13.5 44,0 C44,13.5 11,15 0,0 Z\" transform=\"translate(220 95) rotate(-90)\" class=\"f-blue s-blue\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.2\" stroke-width=\"1.3\"/><path d=\"M0,0 C11,-15 44,-13.5 44,0 C44,13.5 11,15 0,0 Z\" transform=\"translate(220 95) rotate(90)\" class=\"f-blue s-blue\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.2\" stroke-width=\"1.3\"/><path d=\"M0,0 C11,-15 44,-13.5 44,0 C44,13.5 11,15 0,0 Z\" transform=\"translate(300 95) rotate(-90)\" class=\"f-blue s-blue\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.2\" stroke-width=\"1.3\"/><path d=\"M0,0 C11,-15 44,-13.5 44,0 C44,13.5 11,15 0,0 Z\" transform=\"translate(300 95) rotate(90)\" class=\"f-blue s-blue\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.2\" stroke-width=\"1.3\"/><ellipse cx=\"220\" cy=\"95\" rx=\"16\" ry=\"7\" class=\"f-orange s-orange\" fill=\"currentColor\" fill-opacity=\"0.25\" stroke=\"currentColor\" stroke-width=\"1.2\"/><ellipse cx=\"300\" cy=\"95\" rx=\"16\" ry=\"7\" class=\"f-orange s-orange\" fill=\"currentColor\" fill-opacity=\"0.25\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"168\" y1=\"95\" x2=\"212\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"228\" y1=\"95\" x2=\"292\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"308\" y1=\"95\" x2=\"352\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"160\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"220\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"300\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"360\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"260\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">two π bonds at right angles (blue: up/down; orange: front/back)</text><text x=\"260\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">sp carbons: linear, 180°; C≡C 1.20 Å</text><text x=\"80\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" font-weight=\"600\">H–C≡C–H</text><text x=\"80\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">ethyne</text><text x=\"80\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">(acetylene)</text><text x=\"450\" y=\"83\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">1 σ + 2 π</text><text x=\"450\" y=\"103\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">≈ 835 kJ/mol</text></svg>",
  alkylation: "<svg viewBox=\"0 0 520 240\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 1  deprotonate with amide (acid–base)</text><line x1=\"32\" y1=\"74\" x2=\"48\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"74\" x2=\"90\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"78\" x2=\"90\" y2=\"78\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"70\" x2=\"90\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"106\" y1=\"74\" x2=\"126\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"24\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"56\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"98\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"134\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><line x1=\"196.9\" y1=\"108\" x2=\"207.1\" y2=\"114\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"196.9\" y1=\"100\" x2=\"207.1\" y2=\"94\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"190\" y=\"104\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-blue\">N</text><text x=\"192\" y=\"86\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"178.5\" cy=\"100.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"178.5\" cy=\"107.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"186.8\" cy=\"115.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"193.2\" cy=\"115.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"214\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"214\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M178,102 Q166,78.9 140,80\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M140,80 L147,76.1 L147.3,83.3 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M118,72 Q118.1,52.5 104,66\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M104,66 L106.6,58.4 L111.7,63.7 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"232\" y1=\"74\" x2=\"268\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M268,74 L260.9,77.6 M268,74 L260.9,70.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"298\" y1=\"74\" x2=\"314\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"74\" x2=\"356\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"78\" x2=\"356\" y2=\"78\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"70\" x2=\"356\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"290\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"322\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"364\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"372\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"376\" cy=\"77.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"376\" cy=\"70.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"470\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+ NH₃</text><text x=\"470\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">(pKₐ 38)</text><text x=\"342\" y=\"104\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">acetylide (pKₐ of HC≡CH = 25)</text><text x=\"8\" y=\"148\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 2  SN2 on a primary halide: a new C–C bond</text><line x1=\"32\" y1=\"200\" x2=\"48\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"200\" x2=\"90\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"204\" x2=\"90\" y2=\"204\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"196\" x2=\"90\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"24\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"56\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"98\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"106\" y=\"184\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"110\" cy=\"203.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"110\" cy=\"196.8\" r=\"1.8\" fill=\"currentColor\"/><line x1=\"157.3\" y1=\"192.5\" x2=\"152.7\" y2=\"179.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"157.3\" y1=\"207.5\" x2=\"152.7\" y2=\"220.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"165.4\" y1=\"194.1\" x2=\"175.2\" y2=\"183.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"167.6\" y1=\"202.4\" x2=\"193.5\" y2=\"210.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"160\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"150\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"150\" y=\"228\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"184\" y=\"174\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"204\" y=\"214\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><path d=\"M114,198 Q131.6,181.5 150,197\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M150,197 L142.2,195.2 L146.9,189.6 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M180,208 Q178.8,225.5 196,222\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M196,222 L189.7,227 L188.3,219.9 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"240\" y1=\"200\" x2=\"276\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M276,200 L268.9,203.6 M276,200 L268.9,196.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"304\" y1=\"200\" x2=\"318\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"200\" x2=\"358\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"204\" x2=\"358\" y2=\"204\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"196\" x2=\"358\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"374\" y1=\"200\" x2=\"384\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"412\" y1=\"200\" x2=\"428\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"296\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"326\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"366\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"398\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₂</text><text x=\"442\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"370\" y=\"228\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">but-1-yne  + Br⁻</text></svg>",
  reductions: "<svg viewBox=\"0 0 520 246\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"14\" y1=\"126\" x2=\"36\" y2=\"111\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"36\" y1=\"111\" x2=\"58\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"58\" y1=\"126\" x2=\"86\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"86\" y1=\"126\" x2=\"130\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"86\" y1=\"130\" x2=\"130\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"86\" y1=\"122\" x2=\"130\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"126\" x2=\"158\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"126\" x2=\"180\" y2=\"111\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"111\" x2=\"202\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"108\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">oct-4-yne</text><line x1=\"208\" y1=\"126\" x2=\"222\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"60\" x2=\"222\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"60\" x2=\"306\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M306,60 L298.9,63.6 M306,60 L298.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"264\" y=\"51\" text-anchor=\"middle\" font-size=\"11\">H₂, Lindlar cat.</text><line x1=\"222\" y1=\"132\" x2=\"306\" y2=\"132\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M306,132 L298.9,135.6 M306,132 L298.9,128.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"264\" y=\"123\" text-anchor=\"middle\" font-size=\"11\">Na, NH₃(l)</text><line x1=\"222\" y1=\"210\" x2=\"306\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M306,210 L298.9,213.6 M306,210 L298.9,206.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"264\" y=\"201\" text-anchor=\"middle\" font-size=\"11\">H₂ (excess), Pd/C</text><line x1=\"386\" y1=\"60\" x2=\"414\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"389.4\" y1=\"55\" x2=\"410.6\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"386\" y1=\"60\" x2=\"372\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"372\" y1=\"38\" x2=\"346\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"346\" y1=\"38\" x2=\"332\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"414\" y1=\"60\" x2=\"428\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"38\" x2=\"454\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"454\" y1=\"38\" x2=\"468\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"482\" y=\"50\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-blue\">(Z)</text><text x=\"482\" y=\"66\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">cis</text><line x1=\"386\" y1=\"132\" x2=\"414\" y2=\"132\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"389.4\" y1=\"137\" x2=\"410.6\" y2=\"137\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"386\" y1=\"132\" x2=\"372\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"372\" y1=\"110\" x2=\"346\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"346\" y1=\"110\" x2=\"332\" y2=\"88\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"414\" y1=\"132\" x2=\"428\" y2=\"154\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"154\" x2=\"454\" y2=\"154\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"454\" y1=\"154\" x2=\"468\" y2=\"176\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"482\" y=\"122\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-green\">(E)</text><text x=\"482\" y=\"138\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">trans</text><line x1=\"328\" y1=\"212\" x2=\"353\" y2=\"197\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"353\" y1=\"197\" x2=\"378\" y2=\"212\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"378\" y1=\"212\" x2=\"403\" y2=\"197\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"403\" y1=\"197\" x2=\"428\" y2=\"212\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"212\" x2=\"453\" y2=\"197\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"453\" y1=\"197\" x2=\"478\" y2=\"212\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"478\" y1=\"212\" x2=\"503\" y2=\"197\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"418\" y=\"234\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">octane</text></svg>",
  hydration: "<svg viewBox=\"0 0 520 242\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"128\" x2=\"36\" y2=\"113\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"36\" y1=\"113\" x2=\"62\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"128\" x2=\"88\" y2=\"113\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"88\" y1=\"113\" x2=\"108\" y2=\"113\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"113\" x2=\"148\" y2=\"113\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"117\" x2=\"148\" y2=\"117\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"109\" x2=\"148\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"86\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">hex-1-yne</text><line x1=\"154\" y1=\"113\" x2=\"166\" y2=\"113\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"50\" x2=\"166\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"50\" x2=\"244\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M244,50 L236.9,53.6 M244,50 L236.9,46.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"205\" y=\"41\" text-anchor=\"middle\" font-size=\"10\">HgSO₄</text><text x=\"205\" y=\"26\" text-anchor=\"middle\" font-size=\"10\">H₂SO₄, H₂O</text><line x1=\"166\" y1=\"190\" x2=\"244\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M244,190 L236.9,193.6 M244,190 L236.9,186.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"205\" y=\"181\" text-anchor=\"middle\" font-size=\"10\">2. H₂O₂, NaOH</text><text x=\"205\" y=\"166\" text-anchor=\"middle\" font-size=\"10\">1. (sia)₂BH</text><text x=\"276\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">Bu</text><line x1=\"288\" y1=\"50\" x2=\"302\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"304\" y1=\"50\" x2=\"332\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"307.4\" y1=\"55\" x2=\"328.6\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"345\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">CH₂</text><line x1=\"304\" y1=\"48\" x2=\"304\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"304\" y=\"22\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-red\">OH</text><text x=\"310\" y=\"72\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">enol</text><path d=\"M370,47 L400,47 l-7,-3.8\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M400,53 L370,53 l7,3.8\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"436\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">Bu</text><line x1=\"448\" y1=\"50\" x2=\"462\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"480\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">C</text><line x1=\"487\" y1=\"50\" x2=\"500\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"514\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">CH₃</text><line x1=\"482.6\" y1=\"42\" x2=\"482.6\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"477.4\" y1=\"42\" x2=\"477.4\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"480\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-red\">O</text><text x=\"474\" y=\"72\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\">hexan-2-one (ketone)</text><text x=\"276\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">Bu</text><line x1=\"288\" y1=\"190\" x2=\"302\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"312\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">CH</text><line x1=\"324\" y1=\"190\" x2=\"348\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"326.9\" y1=\"195\" x2=\"345.1\" y2=\"195\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"360\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">CH</text><line x1=\"370\" y1=\"190\" x2=\"382\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"396\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-red\">OH</text><text x=\"330\" y=\"212\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">enol</text><path d=\"M412,187 L438,187 l-7,-3.8\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M438,193 L412,193 l7,3.8\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"466\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">BuCH₂</text><line x1=\"486\" y1=\"190\" x2=\"496\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"504\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">C</text><line x1=\"506.6\" y1=\"182\" x2=\"506.6\" y2=\"166\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"501.4\" y1=\"182\" x2=\"501.4\" y2=\"166\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"504\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-red\">O</text><line x1=\"504\" y1=\"198\" x2=\"504\" y2=\"208\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"504\" y=\"216\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">H</text><text x=\"476\" y=\"234\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-green\">hexanal (aldehyde)</text><text x=\"260\" y=\"232\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">Bu = CH₃CH₂CH₂CH₂–</text></svg>",
  tautomer: "<svg viewBox=\"0 0 520 268\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Keto–enol tautomerization in acid (two proton transfers)</text><line x1=\"77\" y1=\"72.2\" x2=\"89\" y2=\"65.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"108\" x2=\"70\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"63.3\" y1=\"120.4\" x2=\"46.7\" y2=\"131.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"118.6\" x2=\"112\" y2=\"118.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"113.4\" x2=\"112\" y2=\"113.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"125.7\" y1=\"110.3\" x2=\"134.3\" y2=\"101.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"125.7\" y1=\"121.7\" x2=\"134.3\" y2=\"130.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"70\" y=\"76\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"61.6\" cy=\"67.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"58.4\" cy=\"73\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"81.6\" cy=\"73\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"78.4\" cy=\"67.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"96\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"70\" y=\"116\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"40\" y=\"136\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">R</text><text x=\"120\" y=\"116\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"140\" y=\"96\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"140\" y=\"136\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><line x1=\"143.3\" y1=\"180.3\" x2=\"134.7\" y2=\"185.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"156.7\" y1=\"180.3\" x2=\"165.3\" y2=\"185.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"168\" x2=\"150\" y2=\"156\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"150\" y=\"176\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"162\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"138.5\" cy=\"172.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"138.5\" cy=\"179.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"128\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"172\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"150\" y=\"148\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M96,120 Q112.7,145.3 143,146\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M143,146 L135.8,149.5 L136,142.2 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M154,162 C166,162 168,172 160,176\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M160,176 L164.8,169.6 L168,176.1 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M62,82 Q81,87.5 70,104\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M70,104 L71,96.1 L77,100.1 Z\" fill=\"currentColor\" class=\"f-gray\"/><line x1=\"190\" y1=\"116\" x2=\"230\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M230,116 L222.9,119.6 M230,116 L222.9,112.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"297\" y1=\"72.2\" x2=\"309\" y2=\"65.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"292.6\" y1=\"108\" x2=\"292.6\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"287.4\" y1=\"108\" x2=\"287.4\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"283.3\" y1=\"120.4\" x2=\"266.7\" y2=\"131.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"298\" y1=\"116\" x2=\"326\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"290\" y=\"76\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"302\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"281.6\" cy=\"67.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"278.4\" cy=\"73\" r=\"1.8\" fill=\"currentColor\"/><text x=\"316\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"290\" y=\"116\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"260\" y=\"136\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">R</text><text x=\"340\" y=\"116\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><line x1=\"376.7\" y1=\"41.7\" x2=\"385.3\" y2=\"36.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"377\" y1=\"49.8\" x2=\"385\" y2=\"54.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"370\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"358.5\" cy=\"42.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"358.5\" cy=\"49.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"366.8\" cy=\"57.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"373.2\" cy=\"57.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"392\" y=\"32\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"392\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M358,46 Q335.6,38.7 322,58\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M322,58 L323.1,50.1 L329.1,54.3 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M304,66 C302,76 298,78 296,72\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M296,72 L301.7,77.6 L294.8,79.9 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"400\" y1=\"116\" x2=\"430\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M430,116 L422.9,119.6 M430,116 L422.9,112.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"472.6\" y1=\"108\" x2=\"472.6\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"467.4\" y1=\"108\" x2=\"467.4\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"463.9\" y1=\"121.1\" x2=\"452.1\" y2=\"130.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"476.3\" y1=\"120.9\" x2=\"484.9\" y2=\"127.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"470\" y=\"76\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"461.6\" cy=\"67.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"458.4\" cy=\"73\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"481.6\" cy=\"73\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"478.4\" cy=\"67.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"470\" y=\"116\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"446\" y=\"136\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">R</text><text x=\"496\" y=\"136\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"470\" y=\"166\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">ketone</text><text x=\"100\" y=\"226\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">① C=C takes H⁺ on carbon (the gray arrow shows the O lone pair</text><text x=\"100\" y=\"241\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">   pushing in, giving a resonance-stabilized cation)</text><text x=\"100\" y=\"256\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">② water removes H⁺ from oxygen</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-alkynes',
  title: 'Alkynes',
  summary: 'The carbon–carbon triple bond: why terminal alkynes are acidic, how acetylide ions build carbon chains, how to reduce alkynes to cis or trans alkenes on demand, how hydration gives ketones or aldehydes through enols, and your first multistep syntheses.',
  minutes: 20,
  objectives: [
    'Describe the sp-hybridized, linear structure of alkynes and name simple alkynes',
    'Explain the acidity of terminal alkynes ($\\mathrm{p}K_a \\approx 25$) and choose a base strong enough to deprotonate them',
    'Use acetylide alkylation (SN2 with methyl and primary halides) to form new C–C bonds',
    'Reduce alkynes selectively to cis alkenes (Lindlar), trans alkenes (Na/NH₃) or alkanes',
    'Predict hydration products (Markovnikov ketone or anti-Markovnikov aldehyde) via keto–enol tautomerization, and plan short syntheses',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The triple bond',
      blocks: [
        {
          type: 'p',
          text: 'An alkyne carbon is sp [[gchem-hybrid-orbital|hybridized]]: two sp orbitals point in opposite directions (180°) and form σ bonds, while the two leftover p orbitals, at right angles to each other, form two [[gchem-pi-bond|π bonds]] with the neighbouring carbon. The four atoms H–C≡C–H lie on a straight line.',
        },
        {
          type: 'figure',
          svg: FIG.orbitals,
          alt: 'Ethyne drawn as H–C–C–H on a straight line. Each carbon carries a vertical p orbital (blue) and a second p orbital pointing toward and away from the viewer (orange), forming two perpendicular π bonds.',
          caption: 'Two π bonds wrap around the σ bond like a cylinder of electron density. A triple bond is short (1.20 Å) and strong overall, but its π bonds are still reactive.',
        },
        {
          type: 'list',
          items: [
            '**Naming**: change *-ane* to *-yne*: ethyne (acetylene), propyne, but-1-yne ($\\ce{HC#CCH2CH3}$), but-2-yne ($\\ce{CH3C#CCH3}$). Number from the end nearer the triple bond, as for alkenes.',
            '**Terminal** alkynes ($\\ce{RC#CH}$) have an H on the triple bond; **internal** alkynes ($\\ce{RC#CR\'}$) do not. This difference controls much of their chemistry.',
            '**No cis/trans**: each sp carbon has only one substituent, in line with the bond, so alkynes have no E/Z isomers. In bond-line drawings the four atoms C–C≡C–C are drawn as a straight segment.',
            'Each triple bond counts as **two** degrees of unsaturation.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Acetylene burns with oxygen at about 3100 °C, the hottest common fuel flame, which is why it is used for welding and cutting steel. Alkynes also appear in drugs: the C≡C in ethinylestradiol (a component of many oral contraceptives) and in the antifungal terbinafine.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'What is the IUPAC name of $\\ce{CH3CH2C#CCH(CH3)2}$?',
      options: [
        { text: '2-methylhex-3-yne', correct: true, why: 'Six-carbon chain containing the triple bond; numbering from the isopropyl end gives the triple bond locant 3 (from the other end it would also be 3), so the methyl decides: C2.' },
        { text: '5-methylhex-3-yne', why: 'The triple bond is at 3 from either end; the tie is broken by giving the substituent the lower locant, 2 rather than 5.' },
        { text: '2-methylhex-4-yne', why: 'The triple bond must get the lowest possible locant: 3, not 4.' },
        { text: 'isopropylethylacetylene', why: 'A common-name style sometimes seen in catalogues, not the IUPAC name.' },
      ],
      explanation: 'Chain: $\\ce{CH3CH2C#CCH(CH3)CH3}$, numbered C1 at the far methyl of the isopropyl group: C2 carries the branch, C3≡C4 is the triple bond, C5–C6 is the ethyl end. The triple bond spans C3–C4 from either end, so the methyl gets the lower locant: **2-methylhex-3-yne**.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Terminal alkynes are acids',
      blocks: [
        {
          type: 'p',
          text: 'Hydrocarbons are not usually thought of as acids, but a terminal alkyne C–H has $\\mathrm{p}K_a \\approx 25$: weak, yet about $10^{19}$ times more acidic than an alkene C–H and $10^{25}$ times more acidic than an alkane C–H. The reason is orbital, one of the acidity factors from Unit 2.',
        },
        {
          type: 'table',
          headers: ['C–H type', 'Hybridization', '% s character', '$\\mathrm{p}K_a$'],
          rows: [
            ['alkane, $\\ce{CH3CH3}$', 'sp³', '25%', '≈ 50'],
            ['alkene, $\\ce{CH2=CH2}$', 'sp²', '33%', '≈ 44'],
            ['alkyne, $\\ce{HC#CH}$', 'sp', '50%', '≈ 25'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why s character stabilizes the anion',
          text: 'An s orbital holds electrons closer to the nucleus than a p orbital. In the acetylide ion, $\\ce{HC#C-}$, the lone pair occupies an sp orbital (half s), so it is held tightly and low in energy: a more stable conjugate base means a stronger acid.',
        },
        {
          type: 'derivation',
          title: 'Which bases can deprotonate acetylene?',
          steps: [
            { tex: '\\ce{HC#CH + NH2- <=> HC#C- + NH3}', why: 'Sodium amide, $\\ce{NaNH2}$, the classic choice.' },
            { tex: '\\log K = \\mathrm{p}K_a(\\ce{NH3}) - \\mathrm{p}K_a(\\ce{HC#CH}) = 38 - 25 = 13', why: 'For an acid–base equilibrium, $K = 10^{\\mathrm{p}K_a(\\text{product acid}) - \\mathrm{p}K_a(\\text{reactant acid})}$ (Unit 2).' },
            { tex: 'K = 10^{13} \\implies \\text{complete deprotonation}', why: 'The equilibrium lies on the side of the weaker acid, ammonia.' },
          ],
          result: 'Any base whose conjugate acid has $\\mathrm{p}K_a > 25$ works: $\\ce{NaNH2}$, NaH ($\\ce{H2}$, 35), $\\ce{n-BuLi}$ (butane, 50). Hydroxide and alkoxides ($\\mathrm{p}K_a$ 16) do not.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Estimate $\\log_{10} K$ for $\\ce{HC#CH + HO- <=> HC#C- + H2O}$, using $\\mathrm{p}K_a(\\ce{HC#CH}) = 25$ and $\\mathrm{p}K_a(\\ce{H2O}) = 15.7$.',
      hint: '$\\log K = \\mathrm{p}K_a(\\text{acid on the right}) - \\mathrm{p}K_a(\\text{acid on the left})$.',
      label: '$\\log_{10} K =$',
      answer: '15.7 - 25',
      answerTex: '-9.3',
      tolerance: 0.05,
      explanation: '$\\log K = 15.7 - 25 = -9.3$, so $K \\approx 5 \\times 10^{-10}$. The equilibrium lies overwhelmingly on the left: hydroxide is far too weak a base to make acetylide. That is why the recipe calls for sodium amide ($\\log K = +13$).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Acetylide alkylation: building carbon chains',
      blocks: [
        {
          type: 'p',
          text: 'An [[ochem-acetylide-ion|acetylide ion]] is a strong carbon nucleophile. With a methyl or primary alkyl halide it does an SN2 reaction, and the result is a **new carbon–carbon bond**, the most valuable kind of bond a synthesis can make.',
        },
        {
          type: 'figure',
          svg: FIG.alkylation,
          alt: 'Step 1: amide ion removes the terminal hydrogen of acetylene; arrows from the nitrogen lone pair to H and from the C–H bond to carbon, giving the acetylide anion and ammonia. Step 2: the acetylide lone pair attacks the carbon of bromoethane from the side opposite bromine, and the C–Br bond breaks, giving but-1-yne and bromide.',
          caption: 'Deprotonate, then alkylate. Step 2 is an ordinary [[ochem-sn2|SN2]] reaction with a carbon nucleophile.',
        },
        {
          type: 'list',
          items: [
            '**Methyl and 1° halides only.** Acetylides are also strong bases ($\\mathrm{p}K_a$ 25), so with 2° and 3° halides they cause E2 elimination instead (the decision chart from Unit 5).',
            '**Do it twice.** Acetylene has two acidic hydrogens: deprotonate and alkylate once to get $\\ce{RC#CH}$, then again to get $\\ce{RC#CR\'}$.',
            '**Then transform the triple bond** (next cards) into a cis or trans alkene, an alkane, a ketone or an aldehyde.',
          ],
        },
        {
          type: 'derivation',
          title: 'Hex-3-yne from acetylene',
          steps: [
            { tex: '\\ce{HC#CH ->[\\ce{NaNH2}] HC#C- ->[\\ce{CH3CH2Br}] HC#CCH2CH3}', why: 'First deprotonation and SN2 with a primary halide: but-1-yne.' },
            { tex: '\\ce{HC#CCH2CH3 ->[\\ce{NaNH2}] ^-C#CCH2CH3 ->[\\ce{CH3CH2Br}] CH3CH2C#CCH2CH3}', why: 'Second deprotonation of the remaining terminal C–H, second alkylation.' },
          ],
          result: 'Two C–C bonds made; 2 + 2 + 2 = 6 carbons. Count carbons in every synthesis problem.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Sodium propynide, $\\ce{CH3C#C- Na+}$, is mixed with each halide below. Which gives a **good yield of a new alkyne**?',
      options: [
        { text: '2-bromopropane', why: 'A 2° halide with a strong base: E2 dominates, giving propene and propyne back.' },
        { text: '2-bromo-2-methylpropane', why: 'A 3° halide cannot do SN2; the acetylide acts as a base and gives 2-methylpropene.' },
        { text: '1-bromobutane', correct: true, why: 'A primary, unhindered halide: SN2 gives hept-2-yne, $\\ce{CH3C#CCH2CH2CH2CH3}$.' },
        { text: 'bromobenzene', why: 'Aryl halides do not undergo SN2 (the backside lies inside the ring).' },
      ],
      explanation: 'Acetylide alkylation obeys the SN2 rules from Unit 5: methyl > 1°, while 2° and 3° halides mostly eliminate, and sp² halides do not react. With 1-bromobutane the product is hept-2-yne (3 + 4 = 7 carbons).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Reductions: cis, trans or all the way',
      blocks: [
        {
          type: 'p',
          text: 'The real payoff of alkyne chemistry is control of alkene geometry. One alkyne, three reagents, three different products.',
        },
        {
          type: 'figure',
          svg: FIG.reductions,
          alt: 'Oct-4-yne is converted three ways. With H2 and Lindlar catalyst: (Z)-oct-4-ene, both chains on the same side. With sodium in liquid ammonia: (E)-oct-4-ene, chains on opposite sides. With excess H2 over Pd/C: octane.',
          caption: 'Lindlar → cis (syn addition of H₂); Na/NH₃ → trans (stepwise electron and proton additions); Pd/C → alkane (the alkene is reduced too).',
        },
        {
          type: 'table',
          headers: ['Reagent', 'Product', 'Why'],
          rows: [
            ['$\\ce{H2}$, Pd/C (or Pt)', 'alkane', 'both π bonds hydrogenated; the intermediate alkene does not survive an active catalyst'],
            ['$\\ce{H2}$, [[ochem-lindlar-catalyst|Lindlar catalyst]]', 'cis (Z) alkene', 'a poisoned Pd catalyst that reduces the more reactive alkyne but not the alkene; syn addition on the surface'],
            ['Na (or Li), $\\ce{NH3}(l)$', 'trans (E) alkene', '[[ochem-dissolving-metal-reduction|dissolving-metal reduction]]: e⁻, H⁺, e⁻, H⁺; the intermediate adopts the less crowded trans shape'],
          ],
        },
        {
          type: 'deepdive',
          title: 'The Na/NH₃ mechanism in four steps',
          blocks: [
            {
              type: 'steps',
              items: [
                { title: 'Electron transfer', text: 'Sodium dissolves in liquid ammonia (−33 °C) and releases electrons. One adds to the alkyne\'s π* orbital, making a **radical anion**.' },
                { title: 'Protonation', text: 'The carbanion end takes a proton from $\\ce{NH3}$, leaving a **vinyl radical**, which relaxes to the less hindered trans geometry.' },
                { title: 'Second electron', text: 'Another electron turns the vinyl radical into a **vinyl anion**, still trans.' },
                { title: 'Second protonation', text: 'Ammonia protonates it, giving the (E)-alkene. Alkenes do not accept electrons this easily, so the reduction stops there.' },
              ],
            },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Pheromones',
          text: 'Many insect sex pheromones are long-chain alkenes, alcohols or acetates whose activity depends completely on C=C geometry: the wrong isomer is ignored or even repels. Chemists build them by acetylide alkylation followed by Lindlar or Na/NH₃ reduction, and the products are used in traps that monitor and control crop pests without broad-spectrum insecticides.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Which reagent converts hex-3-yne into **(E)-hex-3-ene**?',
      options: [
        { text: '$\\ce{H2}$, Lindlar catalyst', why: 'Lindlar hydrogenation adds both H to the same face: (Z)-hex-3-ene.' },
        { text: 'Na, $\\ce{NH3}(l)$', correct: true, why: 'The dissolving-metal reduction passes through trans vinyl radical and anion intermediates and gives the (E) alkene.' },
        { text: '$\\ce{H2}$ (excess), Pd/C', why: 'Fully active Pd reduces the alkene too: hexane.' },
        { text: '$\\ce{H2SO4}$, $\\ce{HgSO4}$, $\\ce{H2O}$', why: 'This hydrates the triple bond to a ketone (hexan-3-one); it is not a reduction.' },
      ],
      explanation: 'Trans alkenes from alkynes: sodium (or lithium) in liquid ammonia. Cis alkenes: $\\ce{H2}$ with Lindlar\'s poisoned catalyst. Alkanes: $\\ce{H2}$ over ordinary Pd or Pt.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Hydration: ketones and aldehydes via enols',
      blocks: [
        {
          type: 'p',
          text: 'Adding water to a triple bond first gives an **enol**: an OH on a C=C carbon ("ene" + "ol"). Enols are unstable and rapidly rearrange to their carbonyl isomers by moving one proton and one π bond, a process called [[ochem-keto-enol-tautomerism|keto–enol tautomerism]]. Which carbonyl you get depends on where the OH went.',
        },
        {
          type: 'figure',
          svg: FIG.hydration,
          alt: 'Hex-1-yne with sulfuric acid, water and mercury(II) sulfate gives the Markovnikov enol, with OH on C2, which tautomerizes to hexan-2-one. With 1. disiamylborane, 2. hydrogen peroxide and sodium hydroxide it gives the anti-Markovnikov enol, with OH on C1, which tautomerizes to hexanal.',
          caption: 'Markovnikov hydration of a terminal alkyne gives a **methyl ketone**; anti-Markovnikov hydroboration–oxidation gives an **aldehyde**.',
        },
        {
          type: 'list',
          items: [
            '**$\\ce{H2SO4}$, $\\ce{H2O}$, $\\ce{HgSO4}$**: Hg²⁺ activates the triple bond (like the mercurinium ion of the previous lessons); water attacks the more substituted carbon (Markovnikov). Terminal alkynes give methyl ketones. Symmetric internal alkynes give one ketone; unsymmetric ones give mixtures.',
            '**1. $\\ce{(sia)2BH}$ or 9-BBN; 2. $\\ce{H2O2}$, $\\ce{NaOH}$**: [[ochem-hydroboration|hydroboration]] with a bulky borane (so it adds only once) puts B, then OH, on the terminal carbon. The enol tautomerizes to an aldehyde.',
          ],
        },
        {
          type: 'figure',
          svg: FIG.tautomer,
          alt: 'Acid-catalysed tautomerization. The enol C=C takes a proton from hydronium at the terminal carbon, assisted by the oxygen lone pair, giving a protonated carbonyl (oxocarbenium ion). Water removes the proton from oxygen, giving the ketone.',
          caption: 'Tautomerization is two proton transfers: on to carbon, off from oxygen. It is catalysed by acid or base; tautomers are constitutional isomers, not resonance structures.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the keto form wins',
          text: 'Converting the enol to the ketone trades a C=C and an O–H for a C=O and a C–H. The C=O π bond is much stronger than the C=C π bond, so the keto form is lower in free energy by roughly 40–50 kJ/mol for simple ketones. For acetone the equilibrium contains only a few enol molecules per billion. Enols and their conjugate bases return as the stars of Unit 11.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'What does pent-1-yne, $\\ce{HC#CCH2CH2CH3}$, give with 1. disiamylborane, $\\ce{(sia)2BH}$; 2. $\\ce{H2O2}$, $\\ce{NaOH}$?',
      options: [
        { text: 'pentan-2-one', why: 'That is the Markovnikov product, from $\\ce{H2SO4}$/$\\ce{HgSO4}$/$\\ce{H2O}$.' },
        { text: 'pentanal', correct: true, why: 'Boron (then OH) goes to the terminal carbon; the enol $\\ce{CH3CH2CH2CH=CHOH}$ tautomerizes to the aldehyde.' },
        { text: 'pent-1-en-1-ol, as a stable product', why: 'The enol is only an intermediate: it tautomerizes to the carbonyl compound almost completely.' },
        { text: 'pentan-1-ol', why: 'An alcohol with a saturated chain would require adding H₂ as well; hydration of an alkyne stops at the carbonyl level.' },
      ],
      explanation: 'Anti-Markovnikov hydration of a terminal alkyne: hydroboration puts B on C1, oxidation turns it into OH, and the resulting enol tautomerizes to **pentanal**, $\\ce{CH3CH2CH2CH2CHO}$. The bulky borane stops after one addition.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'For acetone, $K = [\\text{enol}]/[\\text{keto}] \\approx 5 \\times 10^{-9}$ at 25 °C. What is $\\Delta G^\\circ$ for keto → enol, in kJ/mol? ($R = 8.314$ J mol⁻¹ K⁻¹, $T = 298.15$ K)',
      hint: '$\\Delta G^\\circ = -RT\\ln K$; divide by 1000.',
      label: '$\\Delta G^\\circ =$',
      unit: 'kJ/mol',
      answer: '-8.314*298.15*ln(5*10^-9)/1000',
      answerTex: '+47\\ \\text{kJ/mol}',
      tolerance: 0.5,
      explanation: '$\\Delta G^\\circ = -(8.314)(298.15)\\ln(5 \\times 10^{-9}) = -(2479)(-19.11) = +4.74 \\times 10^{4}$ J/mol $\\approx +47$ kJ/mol. Check with the 5.7 kJ/mol rule: $\\log_{10}(5 \\times 10^{-9}) = -8.3$, and $8.3 \\times 5.7 = 47$. The enol is strongly uphill, which is why alkyne hydration ends at the ketone.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Your first syntheses',
      blocks: [
        {
          type: 'p',
          text: 'A synthesis problem gives a target and allowed starting materials and asks for a reagent sequence. Alkynes are ideal practice: acetylide alkylation builds the skeleton, and the triple bond then becomes the functional group you need. Work **backwards** from the target (retrosynthesis, Unit 12) and check carbon counts at every step.',
        },
        {
          type: 'derivation',
          title: 'Target: (Z)-hex-3-ene from acetylene and any two-carbon reagent',
          steps: [
            { tex: '(Z)\\text{-}\\ce{CH3CH2CH=CHCH2CH3} \\Leftarrow \\ce{CH3CH2C#CCH2CH3}', why: 'A cis alkene comes from an alkyne by Lindlar hydrogenation. Work back one step.' },
            { tex: '\\ce{CH3CH2C#CCH2CH3} \\Leftarrow \\ce{HC#CH} + 2\\,\\ce{CH3CH2Br}', why: 'Disconnect both C–C bonds to the triple bond: each is an acetylide alkylation with a primary halide.' },
            { tex: '\\text{1. } \\ce{NaNH2};\\ \\text{2. } \\ce{CH3CH2Br};\\ \\text{3. } \\ce{NaNH2};\\ \\text{4. } \\ce{CH3CH2Br};\\ \\text{5. } \\ce{H2}, \\text{Lindlar}', why: 'Now write it forwards. Five steps; 2 + 2 + 2 = 6 carbons.' },
          ],
          result: 'Swap step 5 for Na/NH₃(l) and the same route gives (E)-hex-3-ene; use $\\ce{H2SO4}$, $\\ce{H2O}$, $\\ce{HgSO4}$ instead and it gives hexan-3-one.',
        },
        {
          type: 'derivation',
          title: 'Target: hexan-2-one from acetylene and 1-bromobutane',
          steps: [
            { tex: '\\ce{CH3C(=O)CH2CH2CH2CH3} \\Leftarrow \\ce{HC#CCH2CH2CH2CH3}', why: 'A methyl ketone is the Markovnikov hydration product of a terminal alkyne.' },
            { tex: '\\ce{HC#CCH2CH2CH2CH3} \\Leftarrow \\ce{HC#C-} + \\ce{BrCH2CH2CH2CH3}', why: 'One acetylide alkylation; the halide is primary, so SN2 works.' },
            { tex: '\\text{1. } \\ce{NaNH2};\\ \\text{2. } \\ce{CH3CH2CH2CH2Br};\\ \\text{3. } \\ce{H2SO4}, \\ce{H2O}, \\ce{HgSO4}', why: 'Forwards: three steps, 2 + 4 = 6 carbons.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graders check three things in a synthesis: the carbon count is right, every reagent is compatible with the step (no NaOH to make an acetylide, no 2° halide for alkylation), and the stereochemistry or regiochemistry of the last step matches the target (Lindlar vs Na/NH₃; $\\ce{HgSO4}$ vs hydroboration).',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Order the reagents to make **(E)-oct-4-ene** from acetylene.',
      lines: [
        '$\\ce{NaNH2}$',
        '$\\ce{CH3CH2CH2Br}$',
        '$\\ce{NaNH2}$ (second deprotonation)',
        '$\\ce{CH3CH2CH2Br}$ (second alkylation)',
        'Na, $\\ce{NH3}(l)$',
      ],
      distractors: ['$\\ce{H2}$, Lindlar catalyst'],
      explanation: 'Two deprotonation–alkylation cycles with 1-bromopropane build oct-4-yne (3 + 2 + 3 = 8 carbons), and a dissolving-metal reduction gives the **trans** alkene. The Lindlar distractor would give the cis isomer.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student plans hept-3-yne, $\\ce{CH3CH2C#CCH2CH2CH3}$, from but-1-yne. Tap the first incorrect line.',
      lines: [
        'Target has 7 carbons; but-1-yne supplies 4, so 3 more must be added.',
        'Deprotonate but-1-yne with NaOH to form the acetylide.',
        'Add 1-bromopropane; the acetylide displaces bromide by SN2.',
        'Product: hept-3-yne.',
      ],
      errorLines: [2],
      explanation: 'Hydroxide is far too weak a base: $\\log K = 15.7 - 25 = -9.3$, so almost no acetylide forms. Use **$\\ce{NaNH2}$** (conjugate acid $\\ce{NH3}$, $\\mathrm{p}K_a$ 38). The rest of the plan is sound: a primary halide, SN2, and 4 + 3 = 7 carbons give hept-3-yne.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the alkyne toolkit.',
      template: 'Terminal alkyne to methyl ketone: ___. Terminal alkyne to aldehyde: ___ then $\\ce{H2O2}$, $\\ce{NaOH}$. Internal alkyne to cis alkene: ___. Internal alkyne to trans alkene: ___.',
      blanks: [{ answers: ['$\\ce{H2SO4}$, $\\ce{H2O}$, $\\ce{HgSO4}$'] }, { answers: ['$\\ce{(sia)2BH}$'] }, { answers: ['$\\ce{H2}$, Lindlar'] }, { answers: ['Na, $\\ce{NH3}(l)$'] }],
      wordBank: ['$\\ce{H2SO4}$, $\\ce{H2O}$, $\\ce{HgSO4}$', '$\\ce{(sia)2BH}$', '$\\ce{H2}$, Lindlar', 'Na, $\\ce{NH3}(l)$', '$\\ce{H2}$, Pd/C', '$\\ce{NaNH2}$'],
      explanation: 'Mercury-catalysed hydration is Markovnikov (methyl ketone); hydroboration with a bulky borane then oxidation is anti-Markovnikov (aldehyde). Lindlar\'s catalyst stops at the cis alkene; sodium in ammonia gives the trans alkene. $\\ce{H2}$/Pd/C would go all the way to the alkane, and $\\ce{NaNH2}$ makes acetylides.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Which sequence converts acetylene into **pentanal**, $\\ce{CH3CH2CH2CH2CHO}$?',
      options: [
        { text: '1. $\\ce{NaNH2}$; 2. $\\ce{CH3CH2CH2Br}$; 3. $\\ce{(sia)2BH}$; 4. $\\ce{H2O2}$, $\\ce{NaOH}$', correct: true, why: 'Alkylation gives pent-1-yne (2 + 3 carbons); anti-Markovnikov hydration of the terminal alkyne gives the aldehyde.' },
        { text: '1. $\\ce{NaNH2}$; 2. $\\ce{CH3CH2CH2Br}$; 3. $\\ce{H2SO4}$, $\\ce{H2O}$, $\\ce{HgSO4}$', why: 'Markovnikov hydration of pent-1-yne gives pentan-2-one, a ketone, not the aldehyde.' },
        { text: '1. $\\ce{NaNH2}$; 2. $\\ce{CH3CH2CH2CH2Br}$; 3. $\\ce{(sia)2BH}$; 4. $\\ce{H2O2}$, $\\ce{NaOH}$', why: 'Too many carbons: 2 + 4 = 6 gives hexanal.' },
        { text: '1. NaOH; 2. $\\ce{CH3CH2CH2Br}$; 3. $\\ce{(sia)2BH}$; 4. $\\ce{H2O2}$, $\\ce{NaOH}$', why: 'NaOH cannot deprotonate acetylene, so the alkylation never happens.' },
      ],
      explanation: 'Count carbons (pentanal has 5: 2 from acetylene + 3 from 1-bromopropane), use a base strong enough ($\\ce{NaNH2}$), and choose the hydration with the right regiochemistry: hydroboration–oxidation puts the oxygen on the terminal carbon, giving an aldehyde.',
    },
  ],
  takeaways: [
    'Alkynes: sp carbons, linear, one σ + two π bonds; terminal ($\\ce{RC#CH}$) versus internal; no E/Z isomers.',
    'Terminal alkynes are acidic ($\\mathrm{p}K_a$ 25) because the acetylide lone pair is in an sp orbital; deprotonate with $\\ce{NaNH2}$, not NaOH.',
    'Acetylides alkylate methyl and 1° halides by SN2, forming C–C bonds; 2° and 3° halides give elimination.',
    'Reductions: $\\ce{H2}$/Pd → alkane; $\\ce{H2}$/Lindlar → cis alkene; Na/$\\ce{NH3}$ → trans alkene.',
    'Hydration gives enols that tautomerize to carbonyls: $\\ce{HgSO4}$/$\\ce{H2SO4}$ → methyl ketone (Markovnikov); bulky borane then $\\ce{H2O2}$/NaOH → aldehyde.',
    'In syntheses, work backwards, count carbons, and pick the final step for the right regio- and stereochemistry.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 9 ("Alkynes: An Introduction to Organic Synthesis") matches this lesson closely, including its first synthesis problems.',
    },
    {
      title: 'Alkyne (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Alkyne',
      source: 'wikipedia',
      note: 'Structure, acidity, reactions and natural and pharmaceutical alkynes.',
    },
    {
      title: 'Lindlar catalyst (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Lindlar_catalyst',
      source: 'wikipedia',
      note: 'Composition of the poisoned catalyst and why it stops at the cis alkene.',
    },
    {
      title: 'Keto–enol tautomerism (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Keto%E2%80%93enol_tautomerism',
      source: 'wikipedia',
      note: 'Equilibrium constants and mechanisms for acid- and base-catalysed tautomerization.',
    },
  ],
};
