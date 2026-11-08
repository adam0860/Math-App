import type { Lesson } from '../../types';

// <figures> generated from molecule-kit specs and hand-written SVG; every figure was rendered and checked.
const FIG = {
  e2_mech: "<svg viewBox=\"0 0 520 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"49\" y1=\"41\" x2=\"54\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"24\" y=\"41\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃CH₂</text><text x=\"62\" y=\"41\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"60\" y=\"17\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"65.2\" cy=\"29.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"58.8\" cy=\"29.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"58.8\" cy=\"52.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"65.2\" cy=\"52.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"73.5\" cy=\"44.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"73.5\" cy=\"37.8\" r=\"1.8\" fill=\"currentColor\"/><line x1=\"118\" y1=\"95\" x2=\"152\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"87\" x2=\"110\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"102.9\" y1=\"98.8\" x2=\"87.1\" y2=\"107.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"107.5,100.4 95.6,116 103.2,119.5\" fill=\"currentColor\"/><line x1=\"164.4\" y1=\"88.3\" x2=\"175.6\" y2=\"71.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"168\" y1=\"95.9\" x2=\"182.1\" y2=\"97.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"103\" x2=\"160\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"110\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"160\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"110\" y=\"57\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"80\" y=\"111\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"96\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"180\" y=\"65\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"196\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"160\" y=\"137\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"147\" cy=\"133.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"147\" cy=\"140.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"156.8\" cy=\"150\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"163.2\" cy=\"150\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"173\" cy=\"140.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"173\" cy=\"133.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"110\" y=\"149\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">β</text><text x=\"146\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">α</text><path d=\"M74,39 Q96.3,29.8 103,53\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M103,53 L97.5,47.2 L104.5,45.1 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M112,71 Q134.9,68 133,91\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M133,91 L130,83.6 L137.2,84.2 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M162,113 Q178.8,116.3 170,131\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M170,131 L170.5,123 L176.8,126.8 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"232\" y1=\"95\" x2=\"278\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M278,95 L270.9,98.6 M278,95 L270.9,91.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"320\" y1=\"97.6\" x2=\"348\" y2=\"97.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"92.4\" x2=\"348\" y2=\"92.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"306.6\" y1=\"89.1\" x2=\"297.4\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"306.6\" y1=\"100.9\" x2=\"297.4\" y2=\"111.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"361.4\" y1=\"89.1\" x2=\"370.6\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"362.3\" y1=\"99.9\" x2=\"374.6\" y2=\"109.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"312\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"356\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"292\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"292\" y=\"117\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"376\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"384\" y=\"117\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"334\" y=\"145\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">propene</text><text x=\"450\" y=\"77\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+ CH₃CH₂OH</text><text x=\"450\" y=\"103\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+ Br⁻</text><text x=\"160\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">H and Br anti: on opposite sides, in one plane</text></svg>",
  newman_anti: "<svg viewBox=\"0 0 520 206\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"130\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-green\" font-weight=\"600\">Anti-periplanar (180°): E2 OK</text><line x1=\"130\" y1=\"129\" x2=\"130\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"130\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">Br</text><line x1=\"150.8\" y1=\"93\" x2=\"168.1\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"179.4\" y=\"77.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">CH₃</text><line x1=\"109.2\" y1=\"93\" x2=\"91.9\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"80.6\" y=\"77.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><circle cx=\"130\" cy=\"105\" r=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"130\" y1=\"105\" x2=\"130\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"130\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">H</text><line x1=\"130\" y1=\"105\" x2=\"168.1\" y2=\"127\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"179.4\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><line x1=\"130\" y1=\"105\" x2=\"91.9\" y2=\"127\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"80.6\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><circle cx=\"130\" cy=\"105\" r=\"2.4\" fill=\"currentColor\"/><text x=\"390\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-red\" font-weight=\"600\">Syn-periplanar (0°): too slow</text><line x1=\"393.8\" y1=\"81.3\" x2=\"396.9\" y2=\"61.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"398.9\" y=\"50.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">Br</text><line x1=\"408.7\" y1=\"120.1\" x2=\"424.2\" y2=\"132.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"434.3\" y=\"139.6\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">CH₃</text><line x1=\"367.6\" y1=\"113.6\" x2=\"348.9\" y2=\"120.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"336.8\" y=\"124.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><circle cx=\"390\" cy=\"105\" r=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"390\" y1=\"105\" x2=\"383.1\" y2=\"61.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"381.1\" y=\"50.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">H</text><line x1=\"390\" y1=\"105\" x2=\"431.1\" y2=\"120.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"443.2\" y=\"124.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><line x1=\"390\" y1=\"105\" x2=\"355.8\" y2=\"132.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"345.7\" y=\"139.6\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><circle cx=\"390\" cy=\"105\" r=\"2.4\" fill=\"currentColor\"/><text x=\"260\" y=\"196\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">Viewed down the Cβ–Cα bond (front dot = Cβ, circle = Cα)</text></svg>",
  newman_ez: "<svg viewBox=\"0 0 520 206\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"125\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-green\" font-weight=\"600\">Methyls anti → (E)-but-2-ene</text><line x1=\"125\" y1=\"132\" x2=\"125\" y2=\"152\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"125\" y=\"163\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">Br</text><line x1=\"145.8\" y1=\"96\" x2=\"163.1\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"174.4\" y=\"80.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-blue\">CH₃</text><line x1=\"104.2\" y1=\"96\" x2=\"86.9\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"75.6\" y=\"80.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><circle cx=\"125\" cy=\"108\" r=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"125\" y1=\"108\" x2=\"125\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"125\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">H</text><line x1=\"125\" y1=\"108\" x2=\"163.1\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"174.4\" y=\"135.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><line x1=\"125\" y1=\"108\" x2=\"86.9\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"75.6\" y=\"135.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-blue\">CH₃</text><circle cx=\"125\" cy=\"108\" r=\"2.4\" fill=\"currentColor\"/><text x=\"125\" y=\"196\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">major (less crowded)</text><text x=\"395\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-orange\" font-weight=\"600\">Methyls gauche → (Z)-but-2-ene</text><line x1=\"395\" y1=\"132\" x2=\"395\" y2=\"152\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"395\" y=\"163\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">Br</text><line x1=\"415.8\" y1=\"96\" x2=\"433.1\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"444.4\" y=\"80.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-blue\">CH₃</text><line x1=\"374.2\" y1=\"96\" x2=\"356.9\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"345.6\" y=\"80.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><circle cx=\"395\" cy=\"108\" r=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"395\" y1=\"108\" x2=\"395\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"395\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">H</text><line x1=\"395\" y1=\"108\" x2=\"433.1\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"444.4\" y=\"135.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-blue\">CH₃</text><line x1=\"395\" y1=\"108\" x2=\"356.9\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"345.6\" y=\"135.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">H</text><circle cx=\"395\" cy=\"108\" r=\"2.4\" fill=\"currentColor\"/><text x=\"395\" y=\"196\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">minor (methyls gauche)</text></svg>",
  chairs: "<svg viewBox=\"0 0 520 248\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"186.4\" y1=\"86.2\" x2=\"148.2\" y2=\"104.7\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"148.2\" y1=\"104.7\" x2=\"86.8\" y2=\"66.1\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"86.8\" y1=\"66.1\" x2=\"63.6\" y2=\"137.8\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"63.6\" y1=\"137.8\" x2=\"101.8\" y2=\"119.3\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"101.8\" y1=\"119.3\" x2=\"163.2\" y2=\"157.9\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"163.2\" y1=\"157.9\" x2=\"186.4\" y2=\"86.2\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"186.4\" y1=\"86.2\" x2=\"186.4\" y2=\"53.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"186.4\" y=\"45.9\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">Br</text><line x1=\"148.2\" y1=\"104.7\" x2=\"148.2\" y2=\"127.3\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"148.2\" y=\"135.3\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-red\">H</text><line x1=\"163.2\" y1=\"157.9\" x2=\"163.2\" y2=\"183.1\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"163.2\" y=\"192.1\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">H</text><line x1=\"163.2\" y1=\"157.9\" x2=\"188.5\" y2=\"162.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"204.5\" y=\"162.4\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">CH₃</text><text x=\"198.4\" y=\"94.2\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">1</text><text x=\"151.2\" y=\"161.9\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2</text><text x=\"158.2\" y=\"96.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">6</text><text x=\"125\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">cis-1-bromo-2-methyl</text><text x=\"125\" y=\"222\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">axial H on C2 and C6</text><text x=\"125\" y=\"238\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-green\">→ 1-methylcyclohexene (Zaitsev)</text><line x1=\"446.4\" y1=\"86.2\" x2=\"408.2\" y2=\"104.7\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"408.2\" y1=\"104.7\" x2=\"346.8\" y2=\"66.1\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"346.8\" y1=\"66.1\" x2=\"323.6\" y2=\"137.8\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"323.6\" y1=\"137.8\" x2=\"361.8\" y2=\"119.3\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"361.8\" y1=\"119.3\" x2=\"423.2\" y2=\"157.9\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"423.2\" y1=\"157.9\" x2=\"446.4\" y2=\"86.2\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"446.4\" y1=\"86.2\" x2=\"446.4\" y2=\"53.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"446.4\" y=\"45.9\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">Br</text><line x1=\"408.2\" y1=\"104.7\" x2=\"408.2\" y2=\"127.3\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"408.2\" y=\"135.3\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-red\">H</text><line x1=\"423.2\" y1=\"157.9\" x2=\"423.2\" y2=\"182.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"423.2\" y=\"193.1\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">CH₃</text><line x1=\"423.2\" y1=\"157.9\" x2=\"443.1\" y2=\"161.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"452.1\" y=\"161.4\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">H</text><text x=\"458.4\" y=\"94.2\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">1</text><text x=\"411.2\" y=\"161.9\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2</text><text x=\"418.2\" y=\"96.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">6</text><text x=\"385\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">trans-1-bromo-2-methyl</text><text x=\"385\" y=\"222\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">axial H only on C6</text><text x=\"385\" y=\"238\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-orange\">→ 3-methylcyclohexene only</text></svg>",
  zaitsev: "<svg viewBox=\"0 0 520 205\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"93\" x2=\"60\" y2=\"78\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"78\" x2=\"90\" y2=\"93\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"93\" x2=\"120\" y2=\"78\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"78\" x2=\"60\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"78\" x2=\"60\" y2=\"107\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"60\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"24\" y=\"108\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-purple\" font-weight=\"600\">β</text><text x=\"96\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-purple\" font-weight=\"600\">β</text><text x=\"72\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-purple\" font-weight=\"600\">β</text><text x=\"75\" y=\"152\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2-bromo-2-methylbutane</text><line x1=\"150\" y1=\"72\" x2=\"260\" y2=\"42\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260,42 L254.1,47.4 M260,42 L252.2,40.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"190\" y=\"24\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">CH₃CH₂O⁻: 70%</text><text x=\"190\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">tBuO⁻: 28%</text><line x1=\"150\" y1=\"104\" x2=\"260\" y2=\"144\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260,144 L252.1,145 M260,144 L254.5,138.2\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"205\" y=\"174\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">CH₃CH₂O⁻: 30%</text><text x=\"205\" y=\"189\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">tBuO⁻: 72%</text><line x1=\"290\" y1=\"33\" x2=\"320\" y2=\"18\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"318.8\" y1=\"20.3\" x2=\"348.8\" y2=\"35.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"321.2\" y1=\"15.7\" x2=\"351.2\" y2=\"30.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"33\" x2=\"380\" y2=\"18\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"18\" x2=\"320\" y2=\"-12\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"335\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">2-methylbut-2-ene</text><text x=\"335\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-green\">trisubstituted: Zaitsev</text><line x1=\"291.2\" y1=\"137.3\" x2=\"321.2\" y2=\"122.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"288.8\" y1=\"132.7\" x2=\"318.8\" y2=\"117.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"120\" x2=\"350\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"135\" x2=\"380\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"120\" x2=\"320\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"335\" y=\"162\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">2-methylbut-1-ene</text><text x=\"335\" y=\"177\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-orange\">disubstituted: Hofmann</text></svg>",
  e1_mech: "<svg viewBox=\"0 0 520 250\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 1  ionization (slow): same as SN1</text><line x1=\"70\" y1=\"54\" x2=\"70\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"70\" x2=\"70\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"62\" x2=\"44\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"62\" x2=\"106\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"70\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"70\" y=\"32\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"70\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"30\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"118\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"121.2\" cy=\"49\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"114.8\" cy=\"49\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"114.8\" cy=\"75\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"121.2\" cy=\"75\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"131\" cy=\"65.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"131\" cy=\"58.8\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M93,59 Q93,40.9 108,51\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M108,51 L100.1,50 L104.1,44 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"165\" y1=\"62\" x2=\"215\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M215,62 L207.9,65.6 M215,62 L207.9,58.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"290\" y1=\"54\" x2=\"290\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"70\" x2=\"290\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"282\" y1=\"62\" x2=\"264\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"290\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"301\" y=\"51\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"290\" y=\"32\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"290\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"250\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"345\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"18\">+</text><text x=\"395\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"411\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"398.2\" cy=\"48\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"391.8\" cy=\"48\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"391.8\" cy=\"76\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"398.2\" cy=\"76\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"409\" cy=\"65.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"409\" cy=\"58.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"381\" cy=\"58.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"381\" cy=\"65.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"8\" y=\"138\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 2  a weak base (the solvent) removes a β-H (fast)</text><line x1=\"36\" y1=\"178\" x2=\"36\" y2=\"188\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"28.6\" y1=\"166.8\" x2=\"15.4\" y2=\"161.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"36\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"46.8\" cy=\"175.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"47.9\" cy=\"168.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"37.2\" cy=\"158.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"30.9\" cy=\"159.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"36\" y=\"198\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">Et</text><text x=\"8\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><line x1=\"150\" y1=\"208\" x2=\"150\" y2=\"223\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"200\" x2=\"176\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"142.7\" y1=\"196.7\" x2=\"117.3\" y2=\"185.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"103.4\" y1=\"177.5\" x2=\"84.6\" y2=\"164.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"105.7\" y1=\"188.7\" x2=\"100.3\" y2=\"197.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"111.1\" y1=\"174.1\" x2=\"112.9\" y2=\"159.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"150\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"161\" y=\"189\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"150\" y=\"232\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"190\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"110\" y=\"182\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"78\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"96\" y=\"204\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"114\" y=\"152\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M50,171 Q56.5,155.4 72,162\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M72,162 L64,162.6 L66.9,155.9 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M93,171 Q101.6,198.9 130,192\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M130,192 L123.9,197.2 L122.2,190.2 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"230\" y1=\"190\" x2=\"278\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M278,190 L270.9,193.6 M278,190 L270.9,186.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"328\" y1=\"192.6\" x2=\"356\" y2=\"192.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"328\" y1=\"187.4\" x2=\"356\" y2=\"187.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"314.6\" y1=\"184.1\" x2=\"305.4\" y2=\"173.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"314.6\" y1=\"195.9\" x2=\"305.4\" y2=\"206.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"370.3\" y1=\"185.1\" x2=\"382.6\" y2=\"175.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"370.3\" y1=\"194.9\" x2=\"382.6\" y2=\"204.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"320\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"364\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"300\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"300\" y=\"212\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"392\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"392\" y=\"212\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"342\" y=\"234\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">2-methylpropene</text><text x=\"470\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+ EtOH₂⁺</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-elimination',
  title: 'E2, E1 and Substitution versus Elimination',
  summary: 'Bases can pull off a β-hydrogen instead of attacking carbon, turning an alkyl halide into an alkene. Learn the E2 and E1 mechanisms, the anti-periplanar rule, Zaitsev versus Hofmann products, and a decision chart for predicting SN1, SN2, E1 or E2.',
  minutes: 20,
  objectives: [
    'Draw the E2 mechanism with three curved arrows and write its rate law',
    'Use the anti-periplanar requirement (in Newman projections and cyclohexane chairs) to predict E2 stereochemistry and regiochemistry',
    'Predict Zaitsev versus Hofmann products from the size of the base',
    'Draw the E1 mechanism and explain why heat favours elimination over substitution',
    'Classify substrate and reagent and choose among SN1, SN2, E1 and E2 to predict the major product',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'β-Elimination: from alkyl halide to alkene',
      blocks: [
        {
          type: 'p',
          text: 'Back in the first lesson you saw that hydroxide could attack a hydrogen instead of carbon. That alternative is **elimination**: a base removes a proton from the carbon **next to** the one bearing the leaving group, the leaving group departs, and a C=C double bond forms between them. The carbon bearing the leaving group is called α; its neighbours are β, so this is a **β-elimination**.',
        },
        {
          type: 'figure',
          svg: FIG.e2_mech,
          alt: 'Ethoxide removes a hydrogen from the β carbon of 2-bromopropane. Three curved arrows: from an oxygen lone pair to the β-hydrogen, from the β C–H bond to the Cβ–Cα bond, and from the Cα–Br bond to bromine. Products: propene, ethanol and bromide. The β-H points up and the Br points down, anti to each other.',
          caption: 'The [[ochem-e2|E2 mechanism]]: three arrows, one step. The base takes the proton, the C–H electrons become the new π bond, and the C–Br electrons leave with bromide.',
        },
        {
          type: 'definition',
          term: 'E2',
          text: '**E**limination, **2** = bimolecular. A single concerted step involving the base and the substrate, so rate $= k[\\ce{RX}][\\ce{B-}]$. It is the elimination counterpart of SN2, and it needs a **strong base** ($\\ce{HO-}$, $\\ce{RO-}$, $\\ce{H2N-}$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why does the alkene form?',
          text: 'In the transition state the C–H bond and the C–Br bond are both breaking, and the two carbons, rehybridizing from sp³ to sp², develop parallel p orbitals. The electrons from the C–H bond flow into the σ*(C–Br) orbital on the neighbouring carbon, which is exactly what pushes bromide out. Product: a π bond where two σ bonds used to be.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Elimination is how chemists make alkenes, the subject of the next unit, and how industry makes vinyl chloride (the monomer of PVC) from 1,2-dichloroethane: losing HCl creates a C=C bond.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: '2-Bromopentane, $\\ce{CH3CHBrCH2CH2CH3}$, is treated with sodium ethoxide. Counting E/Z isomers separately, how many **different alkenes** can E2 elimination produce?',
      hint: 'C2 has two different β carbons, C1 and C3. Then ask whether each new double bond can be E or Z.',
      label: 'number of alkenes $=$',
      answer: '3',
      explanation: 'Removing H from C1 gives pent-1-ene (a terminal alkene, no E/Z). Removing H from C3 gives pent-2-ene, $\\ce{CH3CH=CHCH2CH3}$, which exists as (E) and (Z) isomers because each alkene carbon has two different groups. Total: **3** alkenes. The major one is (E)-pent-2-ene: more substituted (Zaitsev) and less strained (E).',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The anti-periplanar requirement',
      blocks: [
        {
          type: 'p',
          text: 'E2 is fussy about geometry. The breaking C–H and C–LG bonds must lie in **one plane** (periplanar), so that the developing p orbitals are parallel. Two arrangements qualify, syn (0°) and anti (180°), and E2 overwhelmingly chooses **anti**: the β-H and the leaving group on opposite sides.',
        },
        {
          type: 'figure',
          svg: FIG.newman_anti,
          alt: 'Two Newman projections viewed down the Cβ–Cα bond. Left: the red front hydrogen points straight up and bromine on the back carbon points straight down, 180 degrees apart (anti-periplanar). Right: the front hydrogen and the back bromine both point up, eclipsed (syn-periplanar).',
          caption: 'Anti-periplanar is a staggered conformation, so it is also the lower-energy one. Syn-periplanar requires an eclipsed conformation and is rarely used.',
        },
        {
          type: 'definition',
          term: 'Anti-periplanar',
          text: 'An [[ochem-anti-periplanar|anti-periplanar]] arrangement places two bonds on adjacent carbons in the same plane, pointing in opposite directions (dihedral angle 180°). In E2 the β-C–H and the Cα–LG bonds must be anti-periplanar.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'The same reason as backside attack',
          text: 'In SN2 the nucleophile\'s electrons enter σ*(C–LG) from the back, opposite the leaving group. In E2 the electrons come from the C–H bond, and they also enter σ*(C–LG) from the back lobe: only possible if the C–H bond sits on the side opposite the leaving group. Anti-periplanar E2 and backside SN2 are the same orbital rule.',
        },
        {
          type: 'figure',
          svg: FIG.newman_ez,
          alt: 'Two Newman projections of 2-bromobutane viewed down the C3–C2 bond, each with a front hydrogen anti to the back bromine. Left: the front methyl and the back methyl are anti, which leads to (E)-but-2-ene; labelled major. Right: the front carbon is rotated so the other hydrogen is anti to bromine and the methyls are gauche, which leads to (Z)-but-2-ene; labelled minor.',
          caption: '2-Bromobutane has two hydrogens on C3, and either can be anti to Br. The conformer with the methyls anti is less crowded, so its transition state is lower, and (E)-but-2-ene is the major alkene (with (Z) and but-1-ene as minor products).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Reading the product from a Newman projection',
          text: 'Put the anti H and LG at 12 and 6 o\'clock. When they leave, the two remaining groups on each carbon stay where they are and flatten into the alkene plane: groups on the **same side** (both left or both right) end up cis, groups on opposite sides end up trans.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'In a Newman projection of 2-bromobutane down the C3–C2 bond, a hydrogen on C3 is anti to Br, and the two methyl groups are **gauche** (60° apart). What does E2 from this conformation give?',
      options: [
        { text: '(E)-but-2-ene', why: 'E requires the methyls to end up on opposite sides, which needs them anti (180°) in the reacting conformation.' },
        { text: '(Z)-but-2-ene', correct: true, why: 'Groups that are gauche, on the same side of the H–C–C–Br plane, end up cis in the alkene.' },
        { text: 'but-1-ene', why: 'But-1-ene would require removing a hydrogen from C1, not C3.' },
        { text: 'No reaction: E2 requires the methyls to be anti', why: 'The geometric requirement concerns only H and the leaving group. This conformation reacts; it is simply less favourable.' },
      ],
      explanation: 'When the anti H and Br depart, each carbon keeps its two other groups in place as the carbons flatten. Methyls on the same side of the plane (gauche) become cis: **(Z)**-but-2-ene. Because the gauche arrangement is more crowded, this pathway is slower, and (Z) is the minor isomer.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'E2 in cyclohexanes: trans-diaxial',
      blocks: [
        {
          type: 'p',
          text: 'On a cyclohexane chair, neighbouring bonds are anti-periplanar only when **both are axial**, one up and one down ("trans-diaxial"). Equatorial bonds point outward, roughly parallel to ring bonds, and are never anti to a neighbour\'s substituent. So E2 on a ring requires the leaving group to be **axial**, and it can only remove an **axial** β-hydrogen.',
        },
        {
          type: 'figure',
          svg: FIG.chairs,
          alt: 'Two chairs with an axial bromine pointing up at C1. Left, cis-1-bromo-2-methylcyclohexane: C2 has an axial hydrogen pointing down (methyl equatorial) and C6 also has an axial hydrogen pointing down; both are anti to bromine. Right, trans-1-bromo-2-methylcyclohexane: in the conformation with bromine axial, the methyl at C2 is also axial pointing down and the C2 hydrogen is equatorial, so only C6 has an axial hydrogen anti to bromine.',
          caption: 'Red bonds are anti-periplanar to the axial C–Br. In the trans isomer the only available β-H is on C6, so it gives the less substituted alkene, against the usual preference.',
        },
        {
          type: 'derivation',
          title: 'E2 of trans-1-bromo-2-methylcyclohexane with ethoxide',
          steps: [
            { tex: '\\text{Br must be axial} \\implies \\text{(trans-1,2) the methyl is axial too}', why: 'Trans-1,2 substituents are either both equatorial or both axial; the reactive conformer is the diaxial one.' },
            { tex: '\\text{C2: H is equatorial} \\implies \\text{not anti to Br}', why: 'The methyl occupies C2\'s axial position, so the only C2 hydrogen is equatorial.' },
            { tex: '\\text{C6: axial H, anti to Br} \\implies \\text{double bond C1=C6}', why: 'Only this H can be removed.' },
            { tex: '\\text{product: 3-methylcyclohexene (only)}', why: 'Renumbering from the double bond puts the methyl on C3. The more substituted 1-methylcyclohexene cannot form by E2.' },
          ],
          result: 'The cis isomer, whose reactive conformer has axial H on both C2 and C6, gives mainly 1-methylcyclohexene, as Zaitsev predicts. Same formula, same base, different product: E2 is **stereospecific**.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Ring-elimination questions are a staple of exams. Draw the chair, flip it if necessary so the leaving group is axial, and look only at the axial hydrogens on the two neighbouring carbons. If the leaving group can only become axial in a high-energy conformer (bulky groups forced axial), expect the reaction to be slow too.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: '**cis**-1-Bromo-2-methylcyclohexane reacts with sodium ethoxide in ethanol (E2). What is the major alkene?',
      options: [
        { text: '1-methylcyclohexene', correct: true, why: 'With Br axial, the methyl (cis) is equatorial, so C2 has an axial H anti to Br. Removing it gives the more substituted (Zaitsev) alkene.' },
        { text: '3-methylcyclohexene only', why: 'That is the outcome for the **trans** isomer, where the C2 hydrogen is equatorial in the reactive conformer.' },
        { text: 'methylenecyclohexane', why: 'That would need a hydrogen removed from the methyl group, which is not β to the bromine (it is γ).' },
        { text: 'No alkene: the bromine cannot become axial', why: 'It can: in the ring flip that puts Br axial, the cis methyl becomes equatorial, which is a perfectly accessible chair.' },
      ],
      explanation: 'Draw the chair with Br axial. For the cis isomer the methyl at C2 is then equatorial, leaving C2\'s hydrogen axial and anti-periplanar to Br; C6 also has one. Both eliminations are possible, and the transition state leading to the more substituted, more stable 1-methylcyclohexene is lower, so it is the major product.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Regiochemistry: Zaitsev versus Hofmann',
      blocks: [
        {
          type: 'p',
          text: 'When a substrate has several kinds of β-hydrogen, it can give constitutionally different alkenes. Two rules of thumb decide which one dominates, and the switch between them is the size of the base.',
        },
        {
          type: 'theorem',
          name: 'Zaitsev\'s rule',
          text: 'With a small base ($\\ce{HO-}$, $\\ce{CH3O-}$, $\\ce{CH3CH2O-}$), E2 gives mainly the **more substituted** (more stable) alkene, the [[ochem-zaitsev-rule|Zaitsev product]].',
        },
        {
          type: 'figure',
          svg: FIG.zaitsev,
          alt: '2-bromo-2-methylbutane with three β positions marked. With ethoxide it gives 70% 2-methylbut-2-ene (trisubstituted, Zaitsev) and 30% 2-methylbut-1-ene (disubstituted, Hofmann). With tert-butoxide the ratio reverses: 28% and 72%.',
          caption: 'Same substrate, two bases, opposite major products.',
        },
        {
          type: 'p',
          text: 'Why Zaitsev? The E2 transition state already has partial double-bond character, so whatever makes the alkene more stable (more alkyl groups on the C=C, Unit 6) lowers the transition state too. Why Hofmann with a bulky base? Potassium tert-butoxide, $\\ce{(CH3)3CO- K+}$, struggles to reach the hydrogens on an internal CH₂ crowded by neighbouring groups, but the three hydrogens of a terminal $\\ce{CH3}$ stick out where anyone can grab them. Steric access beats product stability, and the [[ochem-hofmann-product|Hofmann product]] (less substituted alkene) wins.',
        },
        {
          type: 'derivation',
          title: 'How big is the preference?',
          steps: [
            { tex: '\\frac{[\\text{Zaitsev}]}{[\\text{Hofmann}]} = \\frac{70}{30} = 2.33', why: 'With ethoxide; E2 is irreversible, so the products form under kinetic control and their ratio is the ratio of rate constants.' },
            { tex: '\\Delta\\Delta G^\\ddagger = RT\\ln(2.33) = (8.314)(298.15)(0.847) = 2.1\\ \\text{kJ/mol}', why: 'Rearrange $k_1/k_2 = e^{\\Delta\\Delta G^\\ddagger/RT}$ (first lesson), taking 25 °C.' },
          ],
          result: 'Only about 2 kJ/mol separates the two transition states, which is why changing the base\'s size is enough to flip the outcome.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Bulky bases to recognize: potassium tert-butoxide ($\\ce{KOtBu}$), LDA (lithium diisopropylamide), and the amidine bases DBU and DBN. All are strong bases and poor nucleophiles.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'With potassium tert-butoxide, 2-bromo-2-methylbutane gives 72% 2-methylbut-1-ene and 28% 2-methylbut-2-ene under kinetic control. What free-energy difference $\\Delta\\Delta G^\\ddagger$ between the two transition states does this ratio imply at 25 °C, in kJ/mol? ($R = 8.314$ J mol⁻¹ K⁻¹, $T = 298.15$ K)',
      hint: '$\\Delta\\Delta G^\\ddagger = RT\\ln(72/28)$; divide by 1000 for kJ/mol.',
      label: '$\\Delta\\Delta G^\\ddagger =$',
      unit: 'kJ/mol',
      answer: '8.314*298.15*ln(72/28)/1000',
      answerTex: '2.3\\ \\text{kJ/mol}',
      tolerance: 0.05,
      explanation: '$\\Delta\\Delta G^\\ddagger = (8.314)(298.15)\\ln\\frac{72}{28} = (2479)(0.944) = 2340$ J/mol $\\approx 2.3$ kJ/mol, now favouring the **Hofmann** pathway. The bulky base has shifted the balance by about 4.4 kJ/mol compared with ethoxide (2.1 kJ/mol the other way): a small energy, a dramatic change in the product.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The E1 mechanism',
      blocks: [
        {
          type: 'p',
          text: 'Where there is an SN1 reaction there is usually an E1 reaction too. They share the slow first step, ionization to a carbocation. In the second step, instead of attacking the cationic carbon, a weak base (often the solvent) removes a proton from a neighbouring carbon, and the C–H electrons form the π bond.',
        },
        {
          type: 'figure',
          svg: FIG.e1_mech,
          alt: 'Step 1: tert-butyl bromide ionizes to the tert-butyl cation and bromide. Step 2: an ethanol oxygen lone pair removes a hydrogen from a methyl group next to the cationic carbon; the C–H bond electrons form a C=C bond, giving 2-methylpropene and protonated ethanol.',
          caption: 'The [[ochem-e1|E1 mechanism]]. Note the arrow in step 2 ends at the bond between Cβ and C⁺: that is where the new π bond forms.',
        },
        {
          type: 'list',
          items: [
            '**Rate** $= k[\\ce{RX}]$, first order (ionization is rate-determining), exactly as for SN1.',
            '**Substrates**: 3°, allylic, benzylic (2° slowly), the same as SN1. Rearrangements can occur before the proton is lost.',
            '**Base**: weak is fine (water, an alcohol); a strong base would switch the mechanism to E2.',
            '**No anti-periplanar requirement**: the carbocation is planar and the C–H bond only needs to rotate to line up with the empty p orbital. The more stable (more substituted, usually E) alkene dominates: Zaitsev.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why heat favours elimination',
          text: 'Compare the products: substitution turns two species into two ($\\ce{R+ + ROH -> ROR + H+}$), while elimination turns one cation into two particles plus the base\'s conjugate acid, so elimination has the larger positive $\\Delta S$. In $\\Delta G = \\Delta H - T\\Delta S$ the entropy term grows with temperature, so heating shifts SN1/E1 mixtures toward E1, and SN2/E2 mixtures toward E2. "Heat" over the arrow is a hint to draw an alkene.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'You will meet E1 again as the acid-catalysed dehydration of alcohols (Unit 7): protonate the OH, lose water to form a carbocation, lose a proton to form the alkene.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'Like E2, the E1 reaction requires the β-hydrogen and the leaving group to be anti-periplanar.',
      answer: false,
      explanation: 'In E1 the leaving group is already gone when the proton is removed. The carbocation is planar, and any β C–H bond can rotate into alignment with its empty p orbital. That is why E1 gives the more stable Zaitsev alkene even in rings where E2 cannot, and why E1 shows no stereospecificity.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The decision chart: SN1, SN2, E1 or E2?',
      blocks: [
        {
          type: 'p',
          text: 'Every alkyl halide problem in this unit can be solved with two classifications. First the **substrate** (methyl, 1°, 2° or 3°). Then the **reagent**, according to what it is good at.',
        },
        {
          type: 'table',
          headers: ['Reagent type', 'Examples', 'Behaviour'],
          rows: [
            ['strong nucleophile, weak base', '$\\ce{I-}$, $\\ce{Br-}$, $\\ce{Cl-}$, $\\ce{HS-}$, $\\ce{RS-}$, $\\ce{N3-}$, $\\ce{CN-}$, $\\ce{RCOO-}$', 'substitution'],
            ['strong base, strong nucleophile', '$\\ce{HO-}$, $\\ce{CH3O-}$, $\\ce{CH3CH2O-}$', 'SN2 or E2, depending on substrate'],
            ['strong, bulky base', '$\\ce{KOtBu}$, LDA, DBU', 'E2 (Hofmann)'],
            ['weak nucleophile, weak base', '$\\ce{H2O}$, $\\ce{CH3OH}$, $\\ce{CH3CH2OH}$', 'SN1 + E1 (only if a stable cation can form)'],
          ],
        },
        {
          type: 'table',
          headers: ['Substrate', 'Nucleophile (weak base)', 'Strong base / nucleophile', 'Bulky base', 'Weak (solvent only)'],
          rows: [
            ['methyl', 'SN2', 'SN2', 'SN2', 'no reaction'],
            ['1°', 'SN2', 'SN2 (major), E2 (minor)', 'E2', 'no reaction'],
            ['2°', 'SN2', 'E2 (major), SN2 (minor)', 'E2', 'SN1 + E1 (slow)'],
            ['3°', 'SN1 (+ E1)', 'E2', 'E2', 'SN1 + E1; heat favours E1'],
          ],
          caption: 'The major pathway for each combination. Polar aprotic solvents favour the SN2 entries; heat pushes any substitution/elimination mixture toward elimination.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Classify the substrate', text: 'Count carbons on the carbon bearing the leaving group. Note allylic or benzylic positions (stable cations; good at both SN1 and SN2).' },
            { title: 'Classify the reagent', text: 'Strong base? Bulky? Good nucleophile but weak base? Or only solvent?' },
            { title: 'Read the chart', text: 'Pick the major mechanism; consider the solvent and temperature as tie-breakers.' },
            { title: 'Draw the product with its details', text: 'SN2: inversion. SN1: racemization, rearrangement check. E2: anti-periplanar H, Zaitsev or Hofmann. E1: Zaitsev, rearrangement check.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why 2° halides with alkoxides eliminate',
          text: 'SN2 slows sharply from 1° to 2° because of steric hindrance at carbon, but E2 does not: the base only needs a β-hydrogen on the outside of the molecule. Meanwhile, more substitution makes the alkene, and therefore the E2 transition state, more stable. So as the substrate gets more crowded the balance tips from substitution to elimination, completely at 3°.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Name the major mechanism for each reaction.',
      template: '$\\ce{CH3CH2CH2Br + NaCN}$ in DMSO: ___. $\\ce{(CH3)3CBr + NaOCH2CH3}$ in ethanol: ___. $\\ce{(CH3)3CBr}$ in water at 25 °C: ___. $\\ce{(CH3)3CBr}$ in ethanol, heated, no added base: ___.',
      blanks: [{ answers: ['SN2'] }, { answers: ['E2'] }, { answers: ['SN1'] }, { answers: ['E1'] }],
      wordBank: ['SN2', 'E2', 'SN1', 'E1', 'no reaction'],
      explanation: 'Primary halide with a good nucleophile that is a weak base, in a polar aprotic solvent: **SN2** (butanenitrile). Tertiary halide with a strong base: **E2** (2-methylpropene); SN2 is impossible at 3°. Tertiary halide in water, a weak nucleophile and polar protic solvent: **SN1** (tert-butyl alcohol), with some E1. The same substrate heated in ethanol without a strong base: carbocation chemistry with the entropy-favoured **E1** pathway dominating.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: '2-Bromopropane is heated with sodium ethoxide in ethanol. What is the **major** organic product?',
      options: [
        { text: 'Ethyl isopropyl ether, $\\ce{(CH3)2CHOCH2CH3}$', why: 'This SN2 product does form, but as the minor one: ethoxide is a strong base and the substrate is secondary, so E2 wins (about 80% elimination).' },
        { text: 'Propene, $\\ce{CH2=CHCH3}$', correct: true, why: 'Secondary substrate + strong, unhindered base → E2. Heat favours elimination further.' },
        { text: 'Propan-2-ol, $\\ce{(CH3)2CHOH}$', why: 'There is no water or hydroxide; the oxygen nucleophile available is ethoxide, so substitution would give an ether, not an alcohol.' },
        { text: '1-Ethoxypropane', why: 'Nucleophiles replace the leaving group on the same carbon; without a carbocation there is no way for the group to end up on C1.' },
      ],
      explanation: 'Use the chart: 2° substrate, strong base/strong nucleophile → **E2 major**, SN2 minor. Ethoxide reaches an outward-facing β-hydrogen more easily than the crowded backside of the secondary carbon, and heating favours elimination further.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Worked predictions',
      blocks: [
        {
          type: 'p',
          text: 'Here is the chart in action on two problems that combine several ideas from this unit.',
        },
        {
          type: 'derivation',
          title: 'Problem A: (S)-2-bromobutane + NaN₃ in DMF',
          steps: [
            { tex: '2^\\circ\\ \\text{substrate}, \\ce{N3-}\\ \\text{strong nucleophile, weak base}', why: 'Azide\'s conjugate acid, $\\ce{HN3}$, has $\\mathrm{p}K_a \\approx 4.7$, so azide is a weak base but an excellent nucleophile.' },
            { tex: '\\text{polar aprotic solvent} \\implies \\text{SN2}', why: 'Chart: 2° with a nucleophile that is a weak base gives SN2, and DMF accelerates it.' },
            { tex: '\\text{inversion: } (S) \\to (R)\\text{-2-azidobutane}', why: 'Backside attack inverts the stereocenter; $\\ce{N3}$ takes the top priority that Br had, so the descriptor flips.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Problem B: 1-bromo-1-methylcyclohexane in ethanol',
          steps: [
            { tex: '3^\\circ\\ \\text{substrate, solvent only (weak base, weak nucleophile)}', why: 'No strong base or nucleophile is present.' },
            { tex: '\\text{ionization} \\to 3^\\circ\\ \\text{carbocation} \\implies \\text{SN1 + E1}', why: 'Chart: 3° with solvent only.' },
            { tex: '\\text{SN1: 1-ethoxy-1-methylcyclohexane}', why: 'Ethanol captures the cation, then loses a proton.' },
            { tex: '\\text{E1: 1-methylcyclohexene (Zaitsev, major alkene)}', why: 'Loss of a ring β-H gives the trisubstituted alkene; methylenecyclohexane (disubstituted) is minor. Heating would increase the share of alkene.' },
          ],
          result: 'Add sodium ethoxide instead and the mechanism switches to E2, giving mostly 1-methylcyclohexene; use potassium tert-butoxide and methylenecyclohexane (Hofmann) becomes the major product.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two common slips',
          text: '(1) Choosing SN2 for a 3° substrate because the nucleophile is strong. Tertiary carbons never do SN2; a strong base gives E2. (2) Forgetting that hydroxide and alkoxides are bases as well as nucleophiles: with 2° and 3° halides they mostly eliminate.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Order the reasoning for predicting the product of 2-bromo-2-methylbutane with potassium tert-butoxide.',
      lines: [
        'The carbon bearing Br has three carbon neighbours: a tertiary substrate',
        'Potassium tert-butoxide is a strong, bulky base and a poor nucleophile',
        'Tertiary substrate + strong base → E2 (SN2 is impossible)',
        'The bulky base removes the most accessible β-H, from a $\\ce{CH3}$ group',
        'Major product: 2-methylbut-1-ene (Hofmann)',
      ],
      distractors: ['The base attacks the back of the C–Br carbon, giving an ether with inversion'],
      explanation: 'Classify the substrate, classify the reagent, choose the mechanism, then apply the regiochemistry rule. A bulky base reverses Zaitsev\'s preference: 72% 2-methylbut-1-ene. The distractor is SN2, which a tertiary substrate cannot undergo (and which a bulky base would avoid anyway).',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'A student predicts the product of 2-bromo-2-methylpropane, $\\ce{(CH3)3CBr}$, with sodium methoxide in methanol. Tap the first incorrect line.',
      lines: [
        'The substrate is tertiary.',
        'Methoxide is a strong nucleophile, so the reaction is SN2.',
        'Methoxide attacks the carbon from the side opposite bromine.',
        'The product is tert-butyl methyl ether, $\\ce{(CH3)3COCH3}$.',
      ],
      errorLines: [2],
      explanation: 'A tertiary carbon cannot undergo SN2: its backside is completely blocked. Methoxide is also a **strong base**, and with a 3° substrate that makes **E2** the major pathway: the product is 2-methylpropene, $\\ce{(CH3)2C=CH2}$. (Tert-butyl methyl ether is made instead from tert-butanol or 2-methylpropene and methanol under acidic, carbocation conditions, or by SN2 of tert-butoxide on a methyl halide, where the hindered partner is the nucleophile rather than the substrate.)',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: '1-Bromobutane is treated with potassium tert-butoxide in tert-butanol. What is the major product?',
      options: [
        { text: '1-tert-butoxybutane (an ether) by SN2', why: 'Primary substrates normally favour SN2, but tert-butoxide is too bulky to reach the backside of carbon efficiently.' },
        { text: 'But-1-ene by E2', correct: true, why: 'A bulky strong base with a primary substrate is the one 1° combination that gives mainly elimination. Only C2 has β-hydrogens, so but-1-ene is the only alkene possible.' },
        { text: 'But-2-ene by E1', why: 'A primary carbocation will not form, and a strong base present means E2. Moving the double bond to C2 would require a rearrangement that E2 cannot do.' },
        { text: 'Butan-1-ol by SN1', why: 'There is no water, and primary halides do not ionize.' },
      ],
      explanation: 'Chart row "1°", column "bulky base": **E2**. Tert-butoxide grabs a β-hydrogen on C2, and the double bond forms between C1 and C2. With ethoxide instead, SN2 would dominate and give ethyl butyl ether.',
    },
  ],
  takeaways: [
    'E2: one concerted step, rate $= k[\\ce{RX}][\\ce{B-}]$; requires a strong base and an anti-periplanar β-H (on rings: trans-diaxial).',
    'E2 is stereospecific: the anti-periplanar conformer that reacts determines E/Z geometry and, in rings, which alkene can form.',
    'Small bases give the more substituted Zaitsev alkene; bulky bases ($\\ce{KOtBu}$, LDA) give the less substituted Hofmann alkene.',
    'E1 shares SN1\'s carbocation: first order, 3° substrates, weak base, Zaitsev product, possible rearrangements, no geometric requirement.',
    'Heat favours elimination over substitution because elimination has the larger $\\Delta S$.',
    'Decision chart: classify the substrate (methyl, 1°, 2°, 3°) and the reagent (nucleophile, strong base, bulky base, weak), then read off SN2, E2, SN1/E1.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Sections 11.7–11.10 cover Zaitsev\'s rule, the E2 and E1 reactions, cyclohexane eliminations and a summary of substitution versus elimination.',
    },
    {
      title: 'Zaitsev\'s rule (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Zaitsev%27s_rule',
      source: 'wikipedia',
      note: 'History of the rule, its explanation from alkene stability, and the Hofmann exceptions with bulky bases.',
    },
    {
      title: 'Elimination reaction (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Elimination_reaction',
      source: 'wikipedia',
      note: 'E1, E2 and E1cB mechanisms side by side, with the stereochemical requirements of E2.',
    },
    {
      title: 'Master Organic Chemistry',
      url: 'https://www.masterorganicchemistry.com/',
      source: 'other',
      note: 'Its "SN1/SN2/E1/E2: deciding the mechanism" series is a well-known study aid for exactly the decision chart in this lesson.',
    },
  ],
};
