import type { Lesson } from '../../types';

// <figures> generated from molecule-kit specs and hand-written SVG; every figure was rendered and checked.
const FIG = {
  nuc_elec: "<svg viewBox=\"0 0 520 290\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"260\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-blue\" font-weight=\"600\">Nucleophiles: electron-rich (HOMO = lone pair or π bond)</text><line x1=\"53\" y1=\"70\" x2=\"69\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"45\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"77\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"91\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"80.2\" cy=\"58.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"73.8\" cy=\"58.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"73.8\" cy=\"81.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"80.2\" cy=\"81.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"88.5\" cy=\"73.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"88.5\" cy=\"66.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"65\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">HO⁻</text><text x=\"65\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">lone pair</text><line x1=\"188.1\" y1=\"70.1\" x2=\"174.9\" y2=\"77.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"201.9\" y1=\"70.1\" x2=\"215.1\" y2=\"77.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"195\" y1=\"74\" x2=\"195\" y2=\"88\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"195\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-blue\">N</text><circle cx=\"198.2\" cy=\"54.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"191.8\" cy=\"54.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"168\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"222\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"195\" y=\"96\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"195\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">NH₃</text><text x=\"195\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">lone pair</text><line x1=\"318.8\" y1=\"71\" x2=\"306.2\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"331.2\" y1=\"71\" x2=\"343.8\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"325\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"318.2\" cy=\"56.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"314.1\" cy=\"61.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"335.9\" cy=\"61.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"331.8\" cy=\"56.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"300\" y=\"86\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"350\" y=\"86\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"325\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">H₂O</text><text x=\"325\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">lone pair</text><line x1=\"448\" y1=\"72.6\" x2=\"464\" y2=\"72.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"448\" y1=\"67.4\" x2=\"464\" y2=\"67.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"434.3\" y1=\"64.3\" x2=\"427.7\" y2=\"57.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"434.3\" y1=\"75.7\" x2=\"427.7\" y2=\"82.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"477.7\" y1=\"64.3\" x2=\"484.3\" y2=\"57.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"477.7\" y1=\"75.7\" x2=\"484.3\" y2=\"82.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"440\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"472\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"422\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"422\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"490\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"490\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"456\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">CH₂=CH₂</text><text x=\"456\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">π bond</text><text x=\"260\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\" font-weight=\"600\">Electrophiles: electron-poor (LUMO = empty p, σ* or π*)</text><path d=\"M0,0 C7.5,-12.6 30,-11.3 30,0 C30,11.3 7.5,12.6 0,0 Z\" transform=\"translate(65 215) rotate(-90)\" class=\"f-gray s-gray\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.08\" stroke-width=\"1.3\"/><path d=\"M0,0 C7.5,-12.6 30,-11.3 30,0 C30,11.3 7.5,12.6 0,0 Z\" transform=\"translate(65 215) rotate(90)\" class=\"f-gray s-gray\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.08\" stroke-width=\"1.3\"/><line x1=\"57\" y1=\"215\" x2=\"28\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"71.7,219.3 95.7,239.5 100.3,232.5\" fill=\"currentColor\"/><line x1=\"76.7\" y1=\"208.8\" x2=\"75.5\" y2=\"207\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"81.5\" y1=\"206.7\" x2=\"79.5\" y2=\"203.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"86.2\" y1=\"204.5\" x2=\"83.5\" y2=\"200.2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"202.3\" x2=\"87.5\" y2=\"196.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"95.7\" y1=\"200.1\" x2=\"91.5\" y2=\"193.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"100.5\" y1=\"197.9\" x2=\"95.5\" y2=\"190.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"65\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"52\" y=\"203\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"65\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">(CH₃)₃C⁺</text><text x=\"65\" y=\"278\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">empty p orbital</text><line x1=\"193\" y1=\"215\" x2=\"211\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"178\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"222\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"225.2\" cy=\"202\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"218.8\" cy=\"202\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"218.8\" cy=\"228\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"225.2\" cy=\"228\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"235\" cy=\"218.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"235\" cy=\"211.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"178\" y=\"194\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">δ+</text><text x=\"222\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">δ−</text><text x=\"195\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">CH₃Br</text><text x=\"195\" y=\"278\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">σ*(C–Br)</text><line x1=\"316\" y1=\"215\" x2=\"327.6\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"308\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"342\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Cl</text><circle cx=\"345.2\" cy=\"202\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"338.8\" cy=\"202\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"338.8\" cy=\"228\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"345.2\" cy=\"228\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"355\" cy=\"218.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"355\" cy=\"211.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"308\" y=\"194\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">δ+</text><text x=\"342\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">δ−</text><text x=\"325\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">HCl</text><text x=\"325\" y=\"278\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">σ*(H–Cl)</text><path d=\"M0,0 C6.5,-10.9 26,-9.8 26,0 C26,9.8 6.5,10.9 0,0 Z\" transform=\"translate(456 215) rotate(-90)\" class=\"f-gray s-gray\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.08\" stroke-width=\"1.3\"/><path d=\"M0,0 C6.5,-10.9 26,-9.8 26,0 C26,9.8 6.5,10.9 0,0 Z\" transform=\"translate(456 215) rotate(90)\" class=\"f-gray s-gray\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.08\" stroke-width=\"1.3\"/><line x1=\"448\" y1=\"215\" x2=\"432\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"462.9,219 483,235.6 487.2,228.3\" fill=\"currentColor\"/><line x1=\"467.2\" y1=\"209.8\" x2=\"466.1\" y2=\"207.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"471.2\" y1=\"208.2\" x2=\"469.4\" y2=\"205.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"475.3\" y1=\"206.7\" x2=\"472.7\" y2=\"202.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"479.3\" y1=\"205.1\" x2=\"476.1\" y2=\"199.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"483.4\" y1=\"203.6\" x2=\"479.4\" y2=\"196.8\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"487.4\" y1=\"202\" x2=\"482.8\" y2=\"194.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"456\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-purple\">B</text><text x=\"424\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">F</text><text x=\"492\" y=\"236\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">F</text><text x=\"492\" y=\"194\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">F</text><text x=\"456\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">BF₃</text><text x=\"456\" y=\"278\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">empty p orbital</text></svg>",
  homo_lumo: "<svg viewBox=\"0 0 520 180\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0,0 C8.5,-14.3 34,-12.9 34,0 C34,12.9 8.5,14.3 0,0 Z\" transform=\"translate(92 100) rotate(0)\" class=\"f-blue s-blue\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.45\" stroke-width=\"1.3\"/><line x1=\"54\" y1=\"100\" x2=\"78\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"46\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"86\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"70\" y=\"84\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"89.2\" cy=\"88.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"82.8\" cy=\"88.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"82.8\" cy=\"111.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"89.2\" cy=\"111.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"80\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-blue\" font-weight=\"600\">HOMO</text><text x=\"80\" y=\"166\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">filled lone-pair orbital</text><path d=\"M0,0 C12.5,-21 50,-18.9 50,0 C50,18.9 12.5,21 0,0 Z\" transform=\"translate(262 100) rotate(180)\" class=\"f-teal s-teal\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.25\" stroke-width=\"1.3\"/><path d=\"M0,0 C4.3,-7.1 17,-6.4 17,0 C17,6.4 4.3,7.1 0,0 Z\" transform=\"translate(262 100) rotate(0)\" class=\"f-orange s-orange\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.3\" stroke-width=\"1.3\"/><path d=\"M0,0 C6.5,-10.9 26,-9.8 26,0 C26,9.8 6.5,10.9 0,0 Z\" transform=\"translate(350 100) rotate(180)\" class=\"f-teal s-teal\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.15\" stroke-width=\"1.3\"/><path d=\"M0,0 C6.5,-10.9 26,-9.8 26,0 C26,9.8 6.5,10.9 0,0 Z\" transform=\"translate(350 100) rotate(0)\" class=\"f-orange s-orange\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/><line x1=\"306\" y1=\"66\" x2=\"306\" y2=\"134\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><text x=\"306\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">node</text><line x1=\"266.4\" y1=\"93.3\" x2=\"277.6\" y2=\"76.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"266.2\" y1=\"106.8\" x2=\"277.8\" y2=\"125.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"255.9\" y1=\"106.3\" x2=\"257.7\" y2=\"107.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"253.8\" y1=\"108\" x2=\"256.6\" y2=\"110.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"251.6\" y1=\"109.7\" x2=\"255.6\" y2=\"112.7\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"249.4\" y1=\"111.4\" x2=\"254.6\" y2=\"115.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"247.3\" y1=\"113.1\" x2=\"253.5\" y2=\"117.8\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"245.1\" y1=\"114.8\" x2=\"252.5\" y2=\"120.4\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"100\" x2=\"338\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"262\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"282\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"282\" y=\"132\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"244\" y=\"124\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"350\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"353.2\" cy=\"87\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"346.8\" cy=\"87\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"346.8\" cy=\"113\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"353.2\" cy=\"113\" r=\"1.8\" fill=\"currentColor\"/><text x=\"300\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-teal\" font-weight=\"600\">LUMO = σ*(C–Br)</text><text x=\"300\" y=\"166\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">largest lobe on the back of carbon</text><line x1=\"132\" y1=\"100\" x2=\"205\" y2=\"100\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><path d=\"M205,100 L197.9,103.6 M205,100 L197.9,96.4\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"168\" y=\"84\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">e⁻ flow</text><text x=\"455\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">filling σ*</text><text x=\"455\" y=\"104\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">breaks C–Br</text><text x=\"455\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">as C–O forms</text></svg>",
  patterns: "<svg viewBox=\"0 0 520 470\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">① Nucleophilic attack: lone pair → electrophilic atom (new bond)</text><line x1=\"48\" y1=\"62\" x2=\"64\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"40\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"72\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"64\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"75.2\" cy=\"50.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"68.8\" cy=\"50.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"68.8\" cy=\"73.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"75.2\" cy=\"73.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"83.5\" cy=\"65.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"83.5\" cy=\"58.8\" r=\"1.8\" fill=\"currentColor\"/><line x1=\"150\" y1=\"54\" x2=\"150\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"70\" x2=\"150\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"62\" x2=\"176\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"150\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"139\" y=\"51\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"150\" y=\"32\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"150\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"190\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><path d=\"M86,60 Q112.2,37 140,58\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M140,58 L132.1,56.6 L136.5,50.8 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"215\" y1=\"62\" x2=\"265\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M265,62 L257.9,65.6 M265,62 L257.9,58.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"306\" y1=\"62\" x2=\"318\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"298\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"326\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"329.2\" cy=\"50.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"322.8\" cy=\"50.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"322.8\" cy=\"73.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"329.2\" cy=\"73.5\" r=\"1.8\" fill=\"currentColor\"/><line x1=\"366\" y1=\"54\" x2=\"366\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"366\" y1=\"70\" x2=\"366\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"374\" y1=\"62\" x2=\"392\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"366\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"366\" y=\"32\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"366\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"406\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><line x1=\"334\" y1=\"62\" x2=\"358\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"8\" y=\"126\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">② Loss of a leaving group: bond → atom (bond breaks)</text><line x1=\"70\" y1=\"164\" x2=\"70\" y2=\"151\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"180\" x2=\"70\" y2=\"193\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"172\" x2=\"44\" y2=\"172\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"172\" x2=\"106\" y2=\"172\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"70\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"70\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"70\" y=\"202\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"30\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"118\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"121.2\" cy=\"159\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"114.8\" cy=\"159\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"114.8\" cy=\"185\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"121.2\" cy=\"185\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"131\" cy=\"175.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"131\" cy=\"168.8\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M93,169 Q93,150.9 108,161\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M108,161 L100.1,160 L104.1,154 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"165\" y1=\"172\" x2=\"215\" y2=\"172\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M215,172 L207.9,175.6 M215,172 L207.9,168.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"290\" y1=\"164\" x2=\"290\" y2=\"151\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"180\" x2=\"290\" y2=\"193\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"282\" y1=\"172\" x2=\"264\" y2=\"172\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"290\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"301\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"290\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"290\" y=\"202\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"250\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"345\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"18\">+</text><text x=\"395\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"411\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"398.2\" cy=\"158\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"391.8\" cy=\"158\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"391.8\" cy=\"186\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"398.2\" cy=\"186\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"409\" cy=\"175.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"409\" cy=\"168.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"381\" cy=\"168.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"381\" cy=\"175.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"8\" y=\"244\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">③ Proton transfer: lone pair → H, and H–O bond → O</text><line x1=\"74\" y1=\"290\" x2=\"92\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"282\" x2=\"100\" y2=\"266\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"290\" x2=\"140\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"44\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"100\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"90\" y=\"276\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"92.2\" cy=\"299.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"98\" cy=\"301.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"100\" y=\"258\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"148\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><line x1=\"215.1\" y1=\"283.8\" x2=\"222.9\" y2=\"274.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"216.8\" y1=\"294.2\" x2=\"229.2\" y2=\"301.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"210\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"198.5\" cy=\"286.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"198.5\" cy=\"293.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"206.8\" cy=\"301.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"213.2\" cy=\"301.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"228\" y=\"268\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"236\" y=\"306\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M198,288 Q178.4,269 157,286\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M157,286 L160.3,278.7 L164.8,284.4 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M127,293 C127,318 112,318 107,300\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M107,300 L112.4,305.9 L105.4,307.8 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"258\" y1=\"290\" x2=\"298\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M298,290 L290.9,293.6 M298,290 L290.9,286.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"370\" y1=\"290\" x2=\"388\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"404\" y1=\"290\" x2=\"416\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"340\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"396\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"399.2\" cy=\"278.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"392.8\" cy=\"278.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"392.8\" cy=\"301.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"399.2\" cy=\"301.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"424\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"447\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"18\">+</text><text x=\"484\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">H₃O⁺</text><text x=\"8\" y=\"354\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">④ Rearrangement: σ bond (C–H or C–C) → neighbouring C⁺</text><line x1=\"50\" y1=\"408\" x2=\"78\" y2=\"408\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"86\" y1=\"416\" x2=\"86\" y2=\"430\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"94\" y1=\"408\" x2=\"128\" y2=\"408\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"136\" y1=\"400\" x2=\"136\" y2=\"384\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"144\" y1=\"408\" x2=\"162\" y2=\"408\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"136\" y1=\"416\" x2=\"136\" y2=\"431\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"36\" y=\"408\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"86\" y=\"408\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"82\" y=\"392\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"86\" y=\"438\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"136\" y=\"408\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"136\" y=\"376\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"176\" y=\"408\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"136\" y=\"440\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><path d=\"M133,390 Q108.6,378.8 95,402\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M95,402 L95.5,394 L101.7,397.7 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"110\" y=\"462\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">2° carbocation</text><line x1=\"215\" y1=\"408\" x2=\"262\" y2=\"408\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M262,408 L254.9,411.6 M262,408 L254.9,404.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"306\" y1=\"408\" x2=\"328\" y2=\"408\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"356\" y1=\"408\" x2=\"388\" y2=\"408\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"404\" y1=\"408\" x2=\"422\" y2=\"408\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"396\" y1=\"416\" x2=\"396\" y2=\"431\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"292\" y=\"408\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"342\" y=\"408\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₂</text><text x=\"396\" y=\"408\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"407\" y=\"397\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"436\" y=\"408\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"396\" y=\"440\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"380\" y=\"462\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">3° carbocation</text></svg>",
  mech_tbu: "<svg viewBox=\"0 0 520 330\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 1  loss of the leaving group (slow)</text><line x1=\"70\" y1=\"52\" x2=\"70\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"60\" x2=\"44\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"60\" x2=\"106\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"70\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"70\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"70\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"30\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"118\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"121.2\" cy=\"47\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"114.8\" cy=\"47\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"114.8\" cy=\"73\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"121.2\" cy=\"73\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"131\" cy=\"63.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"131\" cy=\"56.8\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M93,57 Q93,38.9 108,49\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M108,49 L100.1,48 L104.1,42 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"165\" y1=\"60\" x2=\"215\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M215,60 L207.9,63.6 M215,60 L207.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"290\" y1=\"52\" x2=\"290\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"68\" x2=\"290\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"282\" y1=\"60\" x2=\"264\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"290\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"301\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"290\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"290\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"250\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"345\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"18\">+</text><text x=\"395\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"411\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"398.2\" cy=\"46\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"391.8\" cy=\"46\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"391.8\" cy=\"74\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"398.2\" cy=\"74\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"409\" cy=\"63.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"409\" cy=\"56.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"381\" cy=\"56.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"381\" cy=\"63.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"8\" y=\"129\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 2  nucleophilic attack by water (fast)</text><line x1=\"70\" y1=\"167\" x2=\"70\" y2=\"154\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"183\" x2=\"70\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"175\" x2=\"44\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"70\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"81\" y=\"164\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"70\" y=\"145\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"70\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"30\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><line x1=\"145.1\" y1=\"168.8\" x2=\"152.9\" y2=\"159.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"146.8\" y1=\"179.2\" x2=\"159.2\" y2=\"186.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"140\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"128.5\" cy=\"171.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"128.5\" cy=\"178.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"136.8\" cy=\"186.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"143.2\" cy=\"186.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"158\" y=\"153\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"166\" y=\"191\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M128,173 Q105.2,156 81,171\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M81,171 L85.1,164.2 L89,170.3 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"195\" y1=\"175\" x2=\"240\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M240,175 L232.9,178.6 M240,175 L232.9,171.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"322\" y1=\"175\" x2=\"340\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"167\" x2=\"348\" y2=\"151\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"356\" y1=\"175\" x2=\"374\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"292\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"348\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"338\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"340.2\" cy=\"184.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"346\" cy=\"186.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"348\" y=\"143\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"382\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"455\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">oxonium ion</text><text x=\"8\" y=\"244\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 3  proton transfer to a second water (fast)</text><line x1=\"74\" y1=\"290\" x2=\"92\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"282\" x2=\"100\" y2=\"266\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"290\" x2=\"140\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"44\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"100\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"90\" y=\"276\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"92.2\" cy=\"299.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"98\" cy=\"301.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"100\" y=\"258\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"148\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><line x1=\"215.1\" y1=\"283.8\" x2=\"222.9\" y2=\"274.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"216.8\" y1=\"294.2\" x2=\"229.2\" y2=\"301.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"210\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"198.5\" cy=\"286.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"198.5\" cy=\"293.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"206.8\" cy=\"301.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"213.2\" cy=\"301.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"228\" y=\"268\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"236\" y=\"306\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M198,288 Q178.4,269 157,286\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M157,286 L160.3,278.7 L164.8,284.4 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M127,293 C127,318 112,318 107,300\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M107,300 L112.4,305.9 L105.4,307.8 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"258\" y1=\"290\" x2=\"298\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M298,290 L290.9,293.6 M298,290 L290.9,286.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"370\" y1=\"290\" x2=\"388\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"404\" y1=\"290\" x2=\"416\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"340\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"396\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"399.2\" cy=\"278.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"392.8\" cy=\"278.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"392.8\" cy=\"301.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"399.2\" cy=\"301.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"424\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"447\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"18\">+</text><text x=\"484\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">H₃O⁺</text></svg>",
  two_paths: "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M270.0,170.0L273.0,169.8L276.0,169.0L279.0,167.8L282.0,166.2L285.0,164.1L288.0,161.6L291.0,158.7L294.0,155.4L297.0,151.9L300.0,148.0L303.0,143.9L306.0,139.6L309.0,135.1L312.0,130.6L315.0,126.0L318.0,121.4L321.0,116.9L324.0,112.4L327.0,108.1L330.0,104.0L333.0,100.1L336.0,96.6L339.0,93.3L342.0,90.4L345.0,87.9L348.0,85.8L351.0,84.2L354.0,83.0L357.0,82.2L360.0,82.0L363.0,82.3L366.0,83.2L369.0,84.7L372.0,86.8L375.0,89.5L378.0,92.7L381.0,96.4L384.0,100.5L387.0,105.1L390.0,110.0L393.0,115.2L396.0,120.7L399.0,126.4L402.0,132.1L405.0,138.0L408.0,143.9L411.0,149.6L414.0,155.3L417.0,160.8L420.0,166.0L423.0,170.9L426.0,175.5L429.0,179.6L432.0,183.3L435.0,186.5L438.0,189.2L441.0,191.3L444.0,192.8L447.0,193.7L450.0,194.0\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"2.2\" fill=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M270.0,170.0L267.0,169.7L264.0,168.7L261.0,167.1L258.0,164.8L255.0,162.0L252.0,158.5L249.0,154.6L246.0,150.1L243.0,145.3L240.0,140.0L237.0,134.4L234.0,128.5L231.0,122.5L228.0,116.3L225.0,110.0L222.0,103.7L219.0,97.5L216.0,91.5L213.0,85.6L210.0,80.0L207.0,74.7L204.0,69.9L201.0,65.4L198.0,61.5L195.0,58.0L192.0,55.2L189.0,52.9L186.0,51.3L183.0,50.3L180.0,50.0L177.0,50.5L174.0,52.0L171.0,54.5L168.0,58.0L165.0,62.3L162.0,67.6L159.0,73.6L156.0,80.4L153.0,87.9L150.0,96.0L147.0,104.6L144.0,113.6L141.0,122.9L138.0,132.4L135.0,142.0L132.0,151.6L129.0,161.1L126.0,170.4L123.0,179.4L120.0,188.0L117.0,196.1L114.0,203.6L111.0,210.4L108.0,216.4L105.0,221.7L102.0,226.0L99.0,229.5L96.0,232.0L93.0,233.5L90.0,234.0\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"2.2\" fill=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"170\" x2=\"290\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"270\" y=\"186\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">reactant</text><line x1=\"428\" y1=\"194\" x2=\"472\" y2=\"194\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"450\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">kinetic product</text><line x1=\"68\" y1=\"234\" x2=\"112\" y2=\"234\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"100\" y=\"250\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">thermodynamic product (more stable)</text><line x1=\"360\" y1=\"170\" x2=\"360\" y2=\"82\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><path d=\"M360,83 L362.7,88.3 M360,83 L357.3,88.3\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"360\" y=\"68\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">smaller ΔG‡ (faster)</text><line x1=\"180\" y1=\"170\" x2=\"180\" y2=\"50\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><path d=\"M180,51 L182.7,56.3 M180,51 L177.3,56.3\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"180\" y=\"36\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">larger ΔG‡ (slower)</text><line x1=\"70\" y1=\"170\" x2=\"470\" y2=\"170\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"20\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"14\" font-style=\"italic\">G</text><line x1=\"10\" y1=\"250\" x2=\"10\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M10,30 L13.6,37.1 M10,30 L6.4,37.1\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-mechanism-basics',
  title: 'Nucleophiles, Electrophiles and Energy Diagrams',
  summary: 'The language of polar mechanisms: who donates electrons and who accepts them, the four curved-arrow patterns every mechanism is built from, what makes a good leaving group, and how energy diagrams decide how fast and how far a reaction goes.',
  minutes: 19,
  objectives: [
    'Identify nucleophiles and electrophiles and describe their reaction as a HOMO → LUMO interaction',
    'Draw and name the four basic curved-arrow patterns: nucleophilic attack, loss of a leaving group, proton transfer and rearrangement',
    'Rank leaving groups using the $\\mathrm{p}K_a$ of their conjugate acids',
    'Read one-step and two-step reaction-coordinate diagrams: transition states, intermediates, the rate-determining step, $\\Delta G^\\ddagger$ and $\\Delta G^\\circ$',
    'Use the Hammond postulate and the 5.7 kJ/mol-per-factor-of-ten rule to reason about rates and product ratios',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Electron-rich meets electron-poor',
      blocks: [
        {
          type: 'p',
          text: 'Almost every reaction in the next several units is a **polar reaction**: a pair of electrons moves from an electron-rich site in one molecule to an electron-poor site in another, making a new bond. Organic chemistry has special names for the two partners.',
        },
        {
          type: 'definition',
          term: 'Nucleophile and electrophile',
          text: 'A [[ochem-nucleophile|nucleophile]] ("nucleus-loving", Nu:) donates an electron pair to form a new bond: it is a [[gchem-lewis-base|Lewis base]]. An [[ochem-electrophile|electrophile]] ("electron-loving", E⁺) accepts that pair: it is a [[gchem-lewis-acid|Lewis acid]]. Every polar step is a nucleophile attacking an electrophile.',
        },
        {
          type: 'figure',
          svg: FIG.nuc_elec,
          alt: 'Top row, nucleophiles: hydroxide ion with three lone pairs and a negative charge; ammonia with one lone pair; water with two lone pairs; ethene with a carbon–carbon double bond. Bottom row, electrophiles: tert-butyl cation with an empty p orbital; bromomethane with partial positive carbon and partial negative bromine; hydrogen chloride with partial positive hydrogen; boron trifluoride with an empty p orbital.',
          caption: 'Nucleophiles carry lone pairs or a π bond (often, but not always, a negative charge). Electrophiles have an empty orbital, or a polar bond whose antibonding orbital can accept electrons.',
        },
        {
          type: 'p',
          text: 'General Chemistry gave you the deeper reason in its [[gchem-homo-lumo|HOMO/LUMO]] preview. A reaction is an interaction between the **highest occupied** orbital of the nucleophile and the **lowest unoccupied** orbital of the electrophile. The higher the HOMO and the lower the LUMO, the closer in energy they are, and the stronger the interaction.',
        },
        {
          type: 'table',
          headers: ['Nucleophile HOMO', 'Example', 'Electrophile LUMO', 'Example'],
          rows: [
            ['nonbonding lone pair', '$\\ce{HO-}$, $\\ce{NH3}$, $\\ce{H2O}$, $\\ce{Br-}$', 'empty p orbital', '$\\ce{(CH3)3C+}$, $\\ce{BF3}$'],
            ['$\\pi$ bond', '$\\ce{CH2=CH2}$ (Unit 6)', '$\\sigma^*$ of a polar bond', '$\\ce{CH3-Br}$, $\\ce{H-Cl}$'],
            ['$\\sigma$ bond (rare)', '$\\ce{H-}$ in $\\ce{BH4-}$', '$\\pi^*$ of $\\ce{C=O}$', 'aldehydes, ketones (Unit 10)'],
          ],
          caption: 'The three kinds of HOMO and LUMO you will meet. This unit is mostly about lone pairs attacking the σ* orbital of a carbon–halogen bond.',
        },
        {
          type: 'figure',
          svg: FIG.homo_lumo,
          alt: 'Hydroxide on the left with a filled lone-pair lobe pointing right. A dashed arrow labelled electron flow points to bromomethane. The σ* orbital of the C–Br bond has a large lobe on the back of carbon, facing the hydroxide, a small lobe between C and Br, a node, and lobes on bromine.',
          caption: 'Why nucleophiles hit carbon from the **back**: the σ*(C–Br) orbital has its largest lobe on the side of carbon opposite bromine. Putting electrons into σ* weakens the C–Br bond, so the new C–O bond forms as the old C–Br bond breaks.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the carbon, not the bromine?',
          text: 'Bromine is more electronegative, so the C–Br bond is polarized $\\ce{C^{\\delta+}-Br^{\\delta-}}$. In an antibonding orbital the larger coefficient sits on the **less** electronegative atom (the bonding orbital, by contrast, is concentrated on Br). So both the charge picture and the orbital picture point the nucleophile at carbon.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Hydroxide ion meets bromoethane, $\\ce{CH3CH2Br}$. If hydroxide acts as a **nucleophile**, which atom does its lone pair attack?',
      options: [
        { text: 'The bromine atom', why: 'Bromine is the δ− end of the bond and already carries three lone pairs. An electron pair is not attracted to an electron-rich atom.' },
        { text: 'The carbon bonded to bromine', correct: true, why: 'That carbon is δ+, and the LUMO, σ*(C–Br), has its biggest lobe on the back of this carbon. Attack there makes ethanol and bromide.' },
        { text: 'The carbon of the $\\ce{CH3}$ group', why: 'The terminal carbon is not attached to the electronegative atom; its C–H and C–C bonds are nearly nonpolar and have no low-lying empty orbital.' },
        { text: 'A hydrogen atom on the $\\ce{CH3}$ group', why: 'Removing a hydrogen means hydroxide is acting as a **base**, not a nucleophile. That really does happen (elimination, later in this unit), but it is not nucleophilic attack.' },
      ],
      explanation: 'A nucleophile seeks the electrophilic carbon: the δ+ carbon bearing the leaving group, approached from the side opposite bromine where σ*(C–Br) is largest. The last option previews a theme of this unit: the same electron-rich species can act as a nucleophile (attacking carbon) or as a base (attacking hydrogen), and much of the art is predicting which.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Curved arrows: the four patterns',
      blocks: [
        {
          type: 'p',
          text: 'A curved arrow shows the movement of **one pair of electrons**. Its tail sits on the electrons (a lone pair or a bond); its head points to where they end up (an atom, to make a lone pair, or the space between two atoms, to make a bond). Remarkably, every polar mechanism you will see is assembled from just four arrow patterns.',
        },
        {
          type: 'figure',
          svg: FIG.patterns,
          alt: 'Four rows. 1: hydroxide lone pair arrow to a tert-butyl cation gives tert-butyl alcohol. 2: arrow from the C–Br bond of tert-butyl bromide to bromine gives tert-butyl cation and bromide. 3: water lone pair arrow to the H of a protonated alcohol, and an arrow from the O–H bond to oxygen, gives tert-butyl alcohol and hydronium. 4: arrow from a C–H bond to an adjacent secondary carbocation moves the hydrogen and gives a tertiary carbocation.',
          caption: 'The four basic patterns. Note that each arrow starts at electrons and that formal charges are conserved: the total charge is the same on both sides of every step.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Nucleophilic attack', text: 'A lone pair (or π bond) on the nucleophile forms a bond to the electrophilic atom. One arrow.' },
            { title: 'Loss of a leaving group', text: 'A bond breaks heterolytically: both electrons leave with the more electronegative atom, which becomes the [[ochem-leaving-group|leaving group]]. One arrow, from the bond to the atom.' },
            { title: 'Proton transfer', text: 'A base\'s lone pair grabs a proton, and the old bond to that H becomes a lone pair. Always two arrows. This is the acid–base chemistry from Unit 2.' },
            { title: 'Rearrangement', text: 'A [[ochem-carbocation|carbocation]] is attacked by a neighbouring σ bond: an H or an alkyl group moves over with its bonding pair, giving a more stable cation. One arrow (details in the SN1 lesson).' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Three arrow-pushing errors graders look for',
          text: '(1) An arrow starting at a positive charge or at an H atom: a + sign or a proton has no electrons to push. (2) An arrow pointing the wrong way, from the electrophile to the nucleophile. (3) A fifth bond on carbon: if a new bond forms to a carbon that already has four, an old bond must break in the same step.',
        },
        {
          type: 'callout',
          variant: 'code',
          text: 'If you like data structures: a molecule is a graph (atoms as vertices, bonds as weighted edges) plus a lone-pair count and a formal charge on each vertex. A curved arrow is an edit operation on that graph, decrementing one electron count and incrementing another. Mechanism-prediction programs literally enumerate legal arrow moves and score the resulting graphs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Name the arrow pattern for each step.',
      template: '$\\ce{CH3O- + (CH3)3C+ -> (CH3)3COCH3}$ is ___. $\\ce{(CH3)3C-OH2+ -> (CH3)3C+ + H2O}$ is ___. $\\ce{CH3OH + HBr -> CH3OH2+ + Br-}$ is ___.',
      blanks: [{ answers: ['nucleophilic attack'] }, { answers: ['loss of a leaving group'] }, { answers: ['proton transfer'] }],
      wordBank: ['nucleophilic attack', 'loss of a leaving group', 'proton transfer', 'rearrangement', 'radical addition'],
      explanation: 'Methoxide\'s lone pair bonds to the cation: **nucleophilic attack**. In the second step the C–O bond breaks and its electrons leave with neutral water: **loss of a leaving group** (protonating OH first is what made it a good one). In the third, methanol\'s oxygen lone pair takes the proton from HBr and the H–Br bond becomes a lone pair on bromide: **proton transfer**, two arrows. Radical steps use single-headed arrows and appear in Unit 7.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Mechanisms are sequences of patterns',
      blocks: [
        {
          type: 'p',
          text: 'A [[gchem-reaction-mechanism|mechanism]] lists the [[gchem-elementary-step|elementary steps]] in order, each drawn with curved arrows. Watch the three patterns combine in a classic reaction: tert-butyl bromide dissolved in water slowly becomes tert-butyl alcohol.',
        },
        {
          type: 'figure',
          svg: FIG.mech_tbu,
          alt: 'Three-step mechanism. Step 1: the C–Br bond of tert-butyl bromide breaks, giving the tert-butyl cation and bromide. Step 2: a water lone pair attacks the cation, giving a protonated alcohol (oxonium ion) with a positive oxygen. Step 3: a second water removes a proton from the oxonium ion, giving tert-butyl alcohol and hydronium.',
          caption: 'Hydrolysis of tert-butyl bromide: loss of leaving group, nucleophilic attack, proton transfer. Check the charges: neutral in, a cation and an anion after step 1, and $\\ce{H3O+ + Br-}$ at the end.',
        },
        {
          type: 'derivation',
          title: 'Bookkeeping the mechanism',
          steps: [
            { tex: '\\ce{(CH3)3C-Br -> (CH3)3C+ + Br-}', why: 'Loss of the leaving group. The C–Br electrons go to Br, which gains a lone pair and a negative charge; carbon is left with six electrons and a positive charge.' },
            { tex: '\\ce{(CH3)3C+ + H2O -> (CH3)3C-OH2+}', why: 'Nucleophilic attack. Water is neutral, so after donating a lone pair its oxygen has three bonds and one lone pair: formal charge $6 - 2 - 3 = +1$.' },
            { tex: '\\ce{(CH3)3C-OH2+ + H2O -> (CH3)3C-OH + H3O+}', why: 'Proton transfer. Water is the base because it is by far the most abundant one present. The oxonium oxygen gets its second lone pair back and becomes neutral.' },
            { tex: '\\ce{(CH3)3CBr + 2H2O -> (CH3)3COH + H3O+ + Br-}', why: 'Add the steps; the carbocation and the oxonium ion cancel because each is made in one step and consumed in the next. They are [[gchem-reaction-intermediate|intermediates]].' },
          ],
          result: 'Three elementary steps, two intermediates, one net reaction. You will meet this exact sequence again as the SN1 mechanism.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Use the medium to choose the reagents',
          text: 'In acidic water the acid present is $\\ce{H3O+}$ and the base is $\\ce{H2O}$; in basic solution they are $\\ce{H2O}$ and $\\ce{HO-}$. A mechanism in acid should never show free $\\ce{HO-}$, and a mechanism in base should never show $\\ce{H3O+}$. This one rule eliminates many wrong answers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student describes the arrows for the last two steps of the tert-butyl bromide hydrolysis. Tap the first incorrect line.',
      lines: [
        'Step 2: an arrow from a lone pair on water\'s oxygen to the carbocation carbon.',
        'This gives $\\ce{(CH3)3C-OH2+}$ with the positive charge on oxygen.',
        'Step 3: an arrow from the positive charge on oxygen to a second water molecule.',
        'The products are $\\ce{(CH3)3COH}$ and $\\ce{H3O+}$.',
      ],
      errorLines: [3],
      explanation: 'A positive charge is not a pair of electrons, so no arrow can start there. A proton transfer needs **two** arrows: one from a lone pair on the second water to the H on the oxonium ion, and one from that O–H bond back onto the oxygen, which neutralizes it. Lines 1, 2 and 4 are correct: water attacks the cation with a lone pair, the new oxonium ion has $+1$ on oxygen, and the final products are tert-butyl alcohol and hydronium.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Leaving groups: weak bases leave',
      blocks: [
        {
          type: 'p',
          text: 'When a bond to carbon breaks heterolytically, the leaving group departs with the bonding pair and usually a negative charge. It leaves easily only if it is comfortable holding those electrons: that is, if it is a **weak base**. And you already have a scale of base strength: the $\\mathrm{p}K_a$ of the conjugate acid ([[gchem-pka]]).',
        },
        {
          type: 'theorem',
          name: 'Leaving-group rule',
          text: 'The lower the $\\mathrm{p}K_a$ of $\\ce{H-LG}$, the weaker the base $\\ce{LG-}$ and the better it leaves. Good leaving groups have conjugate acids with $\\mathrm{p}K_a < 0$ or so; groups whose conjugate acids have $\\mathrm{p}K_a > 15$ ($\\ce{HO-}$, $\\ce{RO-}$, $\\ce{H2N-}$, $\\ce{H-}$, $\\ce{R-}$) essentially never leave from an sp³ carbon.',
        },
        {
          type: 'table',
          headers: ['Leaving group', 'Conjugate acid', '$\\mathrm{p}K_a$', 'Verdict'],
          rows: [
            ['$\\ce{I-}$', '$\\ce{HI}$', '$-10$', 'excellent'],
            ['$\\ce{Br-}$', '$\\ce{HBr}$', '$-9$', 'excellent'],
            ['$\\ce{TsO-}$ (tosylate)', '$\\ce{TsOH}$', '$-2.8$', 'excellent'],
            ['$\\ce{Cl-}$', '$\\ce{HCl}$', '$-7$', 'good'],
            ['$\\ce{H2O}$ (from $\\ce{R-OH2+}$)', '$\\ce{H3O+}$', '$-1.7$', 'good'],
            ['$\\ce{F-}$', '$\\ce{HF}$', '$3.2$', 'poor'],
            ['$\\ce{HO-}$, $\\ce{CH3O-}$', '$\\ce{H2O}$, $\\ce{CH3OH}$', '$15.7$, $15.5$', 'does not leave'],
            ['$\\ce{H2N-}$', '$\\ce{NH3}$', '$38$', 'does not leave'],
          ],
          caption: 'Approximate aqueous $\\mathrm{p}K_a$ values. The halide order $\\ce{I- > Br- > Cl- > F-}$ follows the acidity order of HX: larger, more polarizable anions spread the charge over more volume.',
        },
        {
          type: 'derivation',
          title: 'How much better is bromide than hydroxide?',
          steps: [
            { tex: '\\mathrm{p}K_a(\\ce{HBr}) \\approx -9, \\qquad \\mathrm{p}K_a(\\ce{H2O}) = 15.7', why: 'Look up the conjugate acids of the two leaving groups.' },
            { tex: '\\frac{K_a(\\ce{HBr})}{K_a(\\ce{H2O})} = 10^{15.7 - (-9)} = 10^{24.7}', why: 'Each $\\mathrm{p}K_a$ unit is a factor of 10 in $K_a$, because $\\mathrm{p}K_a = -\\log K_a$.' },
            { tex: '\\ce{HO-}\\ \\text{is about}\\ 10^{25}\\ \\text{times more basic than}\\ \\ce{Br-}', why: 'A larger $K_a$ for the acid means a more stable, less basic conjugate base.' },
          ],
          result: 'The difference is so enormous that $\\ce{R-OH}$ simply does not undergo the substitutions that $\\ce{R-Br}$ does, until you change the leaving group.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why acidity predicts leaving ability',
          text: 'Losing a leaving group and losing a proton are the same kind of event: a bond breaks and the electron pair stays with X. Whatever stabilizes $\\ce{X-}$ (electronegativity, size, resonance, as in Unit 2) lowers the energy of both processes, and by the Hammond postulate (later in this lesson) also lowers the barrier for leaving.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Turning a bad leaving group into a good one',
          text: 'Protonate it. In strong acid, $\\ce{R-OH + H+ -> R-OH2+}$, and the leaving group becomes neutral water ($\\mathrm{p}K_a$ of $\\ce{H3O+}$ is $-1.7$) instead of hydroxide ($15.7$): a gain of more than 17 powers of ten. Converting $\\ce{R-OH}$ into a tosylate, $\\ce{R-OTs}$, does the same job without acid (Unit 7).',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Order these leaving groups from **best** (top) to **worst** (bottom).',
      lines: ['$\\ce{I-}$ ($\\mathrm{p}K_a$ of HI $= -10$)', '$\\ce{Cl-}$ ($\\mathrm{p}K_a$ of HCl $= -7$)', '$\\ce{F-}$ ($\\mathrm{p}K_a$ of HF $= 3.2$)', '$\\ce{HO-}$ ($\\mathrm{p}K_a$ of $\\ce{H2O}$ $= 15.7$)', '$\\ce{H2N-}$ ($\\mathrm{p}K_a$ of $\\ce{NH3}$ $= 38$)'],
      explanation: 'Sort by the $\\mathrm{p}K_a$ of the conjugate acid, lowest first: the strongest acid has the weakest, most stable conjugate base, and weak bases are good leaving groups. Iodide and chloride are excellent and good; fluoride is poor (C–F bonds are also very strong); hydroxide and amide essentially never leave from sp³ carbon.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Energy diagrams: how fast versus how far',
      blocks: [
        {
          type: 'p',
          text: 'A reaction-coordinate diagram plots free energy against progress from reactants to products. Two numbers on it answer two different questions. The [[gchem-gibbs-energy|free-energy]] change $\\Delta G^\\circ$ (products minus reactants) decides **how far** the reaction goes. The activation free energy $\\Delta G^\\ddagger$ (the [[gchem-transition-state|transition state]] minus reactants) decides **how fast**.',
        },
        {
          type: 'theorem',
          name: 'Rate and equilibrium from free energies',
          tex: 'k = \\frac{k_B T}{h}\\,e^{-\\Delta G^\\ddagger/RT} \\qquad\\qquad K = e^{-\\Delta G^\\circ/RT}',
          text: 'The left equation (the **Eyring equation**) is the free-energy version of the Arrhenius equation from General Chemistry: $k_BT/h = 6.21 \\times 10^{12}\\ \\text{s}^{-1}$ at 25 °C plays the role of $A$, and $\\Delta G^\\ddagger$ replaces $E_a$. The right equation is the familiar $\\Delta G^\\circ = -RT\\ln K$.',
        },
        {
          type: 'graph',
          x: [-0.25, 1.25],
          y: [-60, 130],
          xStep: 0.25,
          yStep: 20,
          functions: [
            { expr: '0', color: 'blue', domain: [-0.25, 0] },
            { expr: 'a*(1 - cos(pi*x/(0.5 + d/250)))/2', label: 'free energy along the reaction coordinate', color: 'blue', domain: [0, '0.5 + d/250'] },
            { expr: 'd + (a - d)*(1 + cos(pi*(x - 0.5 - d/250)/(0.5 - d/250)))/2', color: 'blue', domain: ['0.5 + d/250', 1] },
            { expr: 'd', color: 'blue', domain: [1, 1.25] },
          ],
          points: [{ x: '0.5 + d/250', y: 'a', label: 'TS ‡', color: 'red' }],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [
            { name: 'a', min: 40, max: 120, step: 1, value: 90, label: '$\\Delta G^\\ddagger$ (kJ/mol)' },
            { name: 'd', min: -50, max: 35, step: 1, value: -20, label: '$\\Delta G^\\circ$ (kJ/mol)' },
          ],
          readouts: [
            { label: '$\\log_{10} k$ ($k$ in s⁻¹, 25 °C) $=$', expr: '12.793 - a/5.708', digits: 2 },
            { label: '$\\log_{10} K$ $=$', expr: '-d/5.708', digits: 2 },
            { label: 'reverse barrier (kJ/mol) $=$', expr: 'a - d', digits: 0 },
          ],
          caption: 'Horizontal: reaction coordinate; vertical: free energy (kJ/mol) relative to reactants. Raise $\\Delta G^\\ddagger$ and watch $\\log k$ fall by exactly 1 for every 5.7 kJ/mol. Change $\\Delta G^\\circ$ and only $K$ (and the reverse barrier) respond: the two questions are independent. (The peak also slides toward whichever side is higher in energy; that is the Hammond postulate, two cards ahead.)',
        },
        {
          type: 'derivation',
          title: 'The 5.7 kJ/mol rule (25 °C)',
          steps: [
            { tex: '\\frac{k_1}{k_2} = \\frac{e^{-\\Delta G_1^\\ddagger/RT}}{e^{-\\Delta G_2^\\ddagger/RT}} = e^{(\\Delta G_2^\\ddagger - \\Delta G_1^\\ddagger)/RT}', why: 'Divide two Eyring equations at the same temperature; the prefactor $k_BT/h$ cancels.' },
            { tex: '\\log_{10}\\frac{k_1}{k_2} = \\frac{\\Delta\\Delta G^\\ddagger}{RT\\ln 10}', why: 'Take $\\log_{10}$ of both sides: $\\log_{10} e^u = u/\\ln 10$.' },
            { tex: 'RT\\ln 10 = (8.314)(298.15)(2.303) = 5708\\ \\text{J/mol} \\approx 5.7\\ \\text{kJ/mol}', why: 'Evaluate at 25 °C.' },
          ],
          result: 'At room temperature, every 5.7 kJ/mol of barrier difference is a factor of 10 in rate, and every 5.7 kJ/mol of $\\Delta G^\\circ$ is a factor of 10 in $K$. A barrier near 90 kJ/mol gives a half-life of minutes; near 100 kJ/mol, hours.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Two competing reactions at 25 °C have $\\Delta G^\\ddagger = 80$ kJ/mol and $92$ kJ/mol. By what factor is the first faster? ($R = 8.314$ J mol⁻¹ K⁻¹, $T = 298.15$ K)',
      hint: '$\\dfrac{k_1}{k_2} = e^{\\Delta\\Delta G^\\ddagger/RT}$ with $\\Delta\\Delta G^\\ddagger$ in J/mol.',
      label: '$k_1/k_2 \\approx$',
      answer: 'exp(12000/(8.314*298.15))',
      answerTex: '127',
      tolerance: 3,
      explanation: '$\\Delta\\Delta G^\\ddagger = 12$ kJ/mol $= 12\\,000$ J/mol, so $k_1/k_2 = e^{12000/(8.314 \\times 298.15)} = e^{4.84} \\approx 127$. Check with the shortcut: $12/5.7 = 2.1$ powers of ten, $10^{2.1} \\approx 127$. Small differences in barrier height make large differences in rate, which is why organic chemists care about a few kJ/mol.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Two-step reactions: intermediates and the rate-determining step',
      blocks: [
        {
          type: 'p',
          text: 'A multistep mechanism has one peak per elementary step. Between the peaks lie valleys: the intermediates, real species with lifetimes (a carbocation, an oxonium ion) that you could in principle detect. A transition state, by contrast, sits at a peak and lasts about one bond vibration; it can never be isolated.',
        },
        {
          type: 'graph',
          x: [-0.15, 1.15],
          y: [-50, 120],
          xStep: 0.25,
          yStep: 20,
          functions: [
            { expr: '0', color: 'purple', domain: [-0.15, 0] },
            { expr: 'a*(1 - cos(4pi*x))/2', label: 'two-step reaction', color: 'purple', domain: [0, 0.25] },
            { expr: 'i + (a - i)*(1 + cos(4pi*(x - 0.25)))/2', color: 'purple', domain: [0.25, 0.5] },
            { expr: 'i + (c - i)*(1 - cos(4pi*(x - 0.5)))/2', color: 'purple', domain: [0.5, 0.75] },
            { expr: 'd + (c - d)*(1 + cos(4pi*(x - 0.75)))/2', color: 'purple', domain: [0.75, 1] },
            { expr: 'd', color: 'purple', domain: [1, 1.15] },
          ],
          points: [
            { x: 0.25, y: 'a', label: 'TS₁', color: 'red' },
            { x: 0.5, y: 'i', label: 'intermediate', color: 'blue' },
            { x: 0.75, y: 'c', label: 'TS₂', color: 'red' },
          ],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [
            { name: 'a', min: 50, max: 110, step: 1, value: 90, label: 'TS₁ energy (kJ/mol)' },
            { name: 'i', min: 0, max: 45, step: 1, value: 35, label: 'intermediate energy (kJ/mol)' },
            { name: 'c', min: 50, max: 110, step: 1, value: 60, label: 'TS₂ energy (kJ/mol)' },
            { name: 'd', min: -40, max: 20, step: 1, value: -25, label: '$\\Delta G^\\circ$ (kJ/mol)' },
          ],
          readouts: [
            { label: 'overall $\\Delta G^\\ddagger$ = highest TS (kJ/mol) $=$', expr: 'max(a, c)', digits: 0 },
            { label: 'TS₁ − TS₂ (positive: step 1 is rate-determining) $=$', expr: 'a - c', digits: 0 },
          ],
          caption: 'All energies relative to reactants. The default shape is the SN1 profile: a high first barrier to an unstable intermediate (a carbocation), then a small second barrier. Drag TS₂ above TS₁ and the second step becomes rate-determining.',
        },
        {
          type: 'definition',
          term: 'Rate-determining step',
          text: 'The [[gchem-rate-determining-step|rate-determining step]] is the step whose transition state is the **highest point** on the whole diagram. The overall rate depends on the free-energy gap between the reactants and that transition state, and the rate law contains only the species involved up to and including it.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Highest peak, not biggest single climb',
          text: 'Compare the absolute heights of the transition states, not the size of each step\'s hill measured from its own valley. A second step that starts from a high-lying intermediate can have a small local climb and still be rate-determining, because its peak is the highest point overall. (This rule assumes, as in every reaction of this unit, that the intermediates lie above the starting materials.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'In a two-step reaction, the rate-determining step is always the step whose own barrier, measured from the valley just before it, is the largest.',
      answer: false,
      explanation: 'The rate-determining step is the one whose **transition state is highest** on the whole diagram (for reactions like these, where the intermediate lies above the starting materials). Counterexample: reactants at 0, TS₁ at 60, intermediate at 50, TS₂ at 70 kJ/mol. Step 1 has the larger local climb (60 versus 20), but TS₂ is the higher peak, so step 2 is rate-determining and the overall barrier is 70 kJ/mol. Compare peak heights, not hill sizes.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'The Hammond postulate',
      blocks: [
        {
          type: 'p',
          text: 'Transition states are invisible: they exist for femtoseconds. Yet predicting which pathway is faster requires knowing what they look like. George Hammond\'s 1955 insight lets you reason about them from the stable species on either side.',
        },
        {
          type: 'theorem',
          name: 'Hammond postulate',
          text: 'A transition state resembles the species (reactant or product) **closest to it in energy**. For an exergonic step the transition state is early and reactant-like; for an endergonic step it is late and product-like.',
        },
        {
          type: 'p',
          text: 'Go back to the one-step graph two cards ago and drag $\\Delta G^\\circ$: as the products rise, the peak slides right toward them. That model is qualitative, but the trend is real and very useful.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it matters for carbocations',
          text: 'Forming a carbocation from a neutral molecule is strongly endergonic, so its transition state is late and looks very much like the carbocation itself: the C–LG bond is mostly broken and carbon already carries most of the positive charge. Anything that stabilizes the carbocation therefore stabilizes the transition state almost as much, and lowers $\\Delta G^\\ddagger$. That is why **more stable carbocations form faster**, the key to the SN1, E1 and Markovnikov reactions to come.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Climbing to a mountain pass that sits just below a high plateau: the pass looks like the plateau (late, product-like). Walking over a low ridge on the way down into a deep valley: the ridge is barely different from where you started (early, reactant-like).',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'The first step of an SN1 reaction, $\\ce{R-Br -> R+ + Br-}$, is strongly endergonic. According to the Hammond postulate, its transition state…',
      options: [
        { text: 'resembles the reactant $\\ce{R-Br}$, with the C–Br bond only slightly stretched', why: 'That describes an early transition state, expected for an exergonic step. This step is uphill.' },
        { text: 'resembles the carbocation, with the C–Br bond largely broken and much positive charge on carbon', correct: true, why: 'Endergonic steps have late, product-like transition states, so factors that stabilize $\\ce{R+}$ also stabilize the transition state.' },
        { text: 'lies exactly halfway between reactant and carbocation in structure, whatever the energies', why: 'The point of the postulate is that the position shifts with the relative energies.' },
        { text: 'is the carbocation itself', why: 'The carbocation is an intermediate in a valley; the transition state is the peak just before it. They resemble each other but are not the same species.' },
      ],
      explanation: 'An endergonic step has its transition state close in energy to its product, here the carbocation, so the two are similar in structure. Consequence: carbocation stability (3° > 2° > 1°) controls the **rate** of ionization, not just the position of an equilibrium.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Preview: kinetic versus thermodynamic control',
      blocks: [
        {
          type: 'p',
          text: 'When one reactant can give two products, which one do you get? Two different answers are possible, depending on whether the products can turn back into the reactant under the conditions.',
        },
        {
          type: 'figure',
          svg: FIG.two_paths,
          alt: 'Energy diagram with a reactant in the middle. To the right, a blue path crosses a lower barrier to a kinetic product slightly below the reactant. To the left, a red path crosses a higher barrier to a thermodynamic product much lower in energy.',
          caption: 'The faster-formed product (blue) is not the more stable one (red).',
        },
        {
          type: 'list',
          items: [
            '**[[ochem-kinetic-control|Kinetic control]]** (low temperature, short time, irreversible steps): the product ratio equals the ratio of rates, set by the difference in barriers: $\\dfrac{[\\text{P}_1]}{[\\text{P}_2]} = \\dfrac{k_1}{k_2} = e^{\\Delta\\Delta G^\\ddagger/RT}$. The product with the lower-energy transition state wins.',
            '**[[ochem-thermodynamic-control|Thermodynamic control]]** (higher temperature, long time, reversible steps): products interconvert through the reactant until equilibrium, so the ratio is set by their stabilities: $\\dfrac{[\\text{P}_2]}{[\\text{P}_1]} = e^{-(G_2^\\circ - G_1^\\circ)/RT}$. The more stable product wins.',
          ],
        },
        {
          type: 'derivation',
          title: 'A kinetic product ratio',
          steps: [
            { tex: '\\Delta\\Delta G^\\ddagger = 8.0\\ \\text{kJ/mol},\\quad T = 298.15\\ \\text{K}', why: 'Suppose the kinetic pathway\'s transition state lies 8.0 kJ/mol below the other one.' },
            { tex: '\\frac{k_1}{k_2} = e^{8000/(8.314 \\times 298.15)} = e^{3.23} = 25', why: 'Under kinetic control the products form in the ratio of their rate constants.' },
          ],
          result: 'A 25 : 1 ratio, or 96% of the kinetic product, from a modest 8 kJ/mol difference. If the reaction were reversible and run long enough, the ratio would instead reflect the products\' free energies.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'You will see this idea at work three times: Zaitsev versus Hofmann alkenes in the E2 lesson, 1,2- versus 1,4-addition to dienes (Unit 9), and kinetic versus thermodynamic enolates (Unit 11).',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'An equilibrium between two isomers at 25 °C has $\\Delta G^\\circ = -10.0$ kJ/mol in favour of isomer B. What is $K = [\\text{B}]/[\\text{A}]$? ($R = 8.314$ J mol⁻¹ K⁻¹, $T = 298.15$ K)',
      hint: '$K = e^{-\\Delta G^\\circ/RT}$ with $\\Delta G^\\circ$ in J/mol.',
      label: '$K \\approx$',
      answer: 'exp(10000/(8.314*298.15))',
      answerTex: '56.5',
      tolerance: 1,
      explanation: '$K = e^{-(-10\\,000)/(8.314 \\times 298.15)} = e^{4.034} = 56.5$. So at equilibrium there are about 56 molecules of B per molecule of A (98.3% B). Shortcut: $10.0/5.7 = 1.75$ powers of ten, and $10^{1.75} = 56$.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'Which reagent is best described as an **electrophile**?',
      options: [
        { text: '$\\ce{CH3O-}$ (methoxide)', why: 'Methoxide has three lone pairs and a negative charge: a classic nucleophile (and a strong base).' },
        { text: '$\\ce{NH3}$', why: 'Ammonia\'s lone pair makes it a nucleophile and a base.' },
        { text: '$\\ce{CH2=CH2}$', why: 'The π bond of an alkene is an electron-rich HOMO; alkenes act as nucleophiles toward acids and cations (Unit 6).' },
        { text: '$\\ce{BF3}$', correct: true, why: 'Boron has only six valence electrons and an empty p orbital (a low-lying LUMO). It accepts an electron pair: a Lewis acid, an electrophile.' },
      ],
      explanation: 'Look for the empty or easily filled orbital. $\\ce{BF3}$, with its vacant p orbital on boron, is the only electron-pair acceptor here. The other three all donate: lone pairs on O and N, or a π bond.',
    },
  ],
  takeaways: [
    'Polar reactions pair a nucleophile (electron-pair donor, HOMO = lone pair or π bond) with an electrophile (acceptor, LUMO = empty p, σ* or π*).',
    'Curved arrows move electron pairs from lone pairs or bonds to atoms or bonds; mechanisms combine four patterns: nucleophilic attack, loss of leaving group, proton transfer, rearrangement.',
    'Good leaving groups are weak bases: the lower the $\\mathrm{p}K_a$ of $\\ce{H-LG}$, the better ($\\ce{I- > Br- > Cl- \\gg F-}$; $\\ce{HO-}$ and $\\ce{H2N-}$ do not leave). Protonating an OH turns it into water, a good leaving group.',
    '$\\Delta G^\\ddagger$ controls rate, $\\Delta G^\\circ$ controls equilibrium; at 25 °C every 5.7 kJ/mol is a factor of 10.',
    'Intermediates sit in valleys, transition states at peaks; the rate-determining step has the highest transition state.',
    'Hammond postulate: the transition state resembles the nearer-in-energy species, so carbocation-forming steps have carbocation-like transition states.',
    'Kinetic control gives the product with the lower barrier; thermodynamic control gives the more stable product.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 6, "An Overview of Organic Reactions", covers polar reactions, curved arrows and reaction energy diagrams at the same level as this lesson.',
    },
    {
      title: 'Master Organic Chemistry',
      url: 'https://www.masterorganicchemistry.com/',
      source: 'other',
      note: 'Search for its arrow-pushing series: clear one-page explanations of the curved-arrow patterns used throughout this unit.',
    },
    {
      title: 'Hammond\'s postulate (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Hammond%27s_postulate',
      source: 'wikipedia',
      note: 'The original statement, early and late transition states, and applications to SN1 reactions.',
    },
    {
      title: 'Thermodynamic versus kinetic reaction control (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Thermodynamic_versus_kinetic_reaction_control',
      source: 'wikipedia',
      note: 'Worked examples of reactions whose product depends on temperature and time.',
    },
  ],
};
