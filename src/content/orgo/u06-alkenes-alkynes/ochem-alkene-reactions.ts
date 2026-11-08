import type { Lesson } from '../../types';

// <figures> generated from molecule-kit specs and hand-written SVG; every figure was rendered and checked.
const FIG = {
  bromonium: "<svg viewBox=\"0 0 520 215\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Br₂ addition: bromonium ion, then backside attack → anti</text><line x1=\"60\" y1=\"84\" x2=\"82.5\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"82.5\" y1=\"97\" x2=\"82.5\" y2=\"123\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"77.1\" y1=\"100.1\" x2=\"77.1\" y2=\"119.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"82.5\" y1=\"123\" x2=\"60\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"136\" x2=\"37.5\" y2=\"123\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"37.5\" y1=\"123\" x2=\"37.5\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"37.5\" y1=\"97\" x2=\"60\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"121.7\" y1=\"52.9\" x2=\"140.3\" y2=\"43.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"112\" y=\"58\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"115.2\" cy=\"46.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"108.8\" cy=\"46.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"100.5\" cy=\"54.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"100.5\" cy=\"61.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"150\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"153.2\" cy=\"25\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"146.8\" cy=\"25\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"163\" cy=\"41.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"163\" cy=\"34.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"146.8\" cy=\"51\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"153.2\" cy=\"51\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M88,108 Q79.3,81.3 104,68\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M104,68 L99.4,74.6 L96,68.2 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M130,48 Q127.1,29.3 146,28\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M146,28 L139.1,32.1 L138.6,24.8 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"170\" y1=\"110\" x2=\"200\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M200,110 L192.9,113.6 M200,110 L192.9,106.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"250\" y1=\"84\" x2=\"272.5\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"272.5\" y1=\"97\" x2=\"272.5\" y2=\"123\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"272.5\" y1=\"123\" x2=\"250\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"136\" x2=\"227.5\" y2=\"123\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"227.5\" y1=\"123\" x2=\"227.5\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"227.5\" y1=\"97\" x2=\"250\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"272.5,97 290.7,108.9 293.3,103.1\" fill=\"currentColor\"/><polygon points=\"272.5,123 293.3,116.9 290.7,111.1\" fill=\"currentColor\"/><text x=\"304\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"15\" class=\"t-green\">Br</text><text x=\"320\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">+</text><text x=\"255\" y=\"162\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">bromonium ion (front face)</text><text x=\"232\" y=\"194\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"15\" class=\"t-green\">Br⁻</text><text x=\"232\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">(from the back)</text><path d=\"M244,186 Q239.1,149.1 270.5,129\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M270.5,129 L266.5,135.9 L262.6,129.8 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M285,117 Q294,131 304,122\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M304,122 L300.8,128.4 L296.8,124 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"330\" y1=\"110\" x2=\"360\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M360,110 L352.9,113.6 M360,110 L352.9,106.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"420\" y1=\"84\" x2=\"442.5\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"442.5\" y1=\"97\" x2=\"442.5\" y2=\"123\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"442.5\" y1=\"123\" x2=\"420\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"136\" x2=\"397.5\" y2=\"123\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"397.5\" y1=\"123\" x2=\"397.5\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"397.5\" y1=\"97\" x2=\"420\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"442.5,97 458.2,89.3 452.8,82.9\" fill=\"currentColor\"/><text x=\"468.6\" y=\"75.1\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">Br</text><line x1=\"444\" y1=\"125.7\" x2=\"445.4\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"445.7\" y1=\"128\" x2=\"448\" y2=\"125.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"447.4\" y1=\"130.4\" x2=\"450.6\" y2=\"126.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"449.1\" y1=\"132.7\" x2=\"453.3\" y2=\"127.8\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"450.9\" y1=\"135.1\" x2=\"455.9\" y2=\"129.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"452.6\" y1=\"137.5\" x2=\"458.5\" y2=\"130.4\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"468.6\" y=\"144.9\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">Br</text><text x=\"430\" y=\"162\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">trans-1,2-dibromocyclohexane</text><text x=\"430\" y=\"176\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">(racemic)</text></svg>",
  halohydrin: "<svg viewBox=\"0 0 520 145\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"60\" y1=\"44\" x2=\"82.5\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"82.5\" y1=\"57\" x2=\"82.5\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"77.1\" y1=\"60.1\" x2=\"77.1\" y2=\"79.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"82.5\" y1=\"83\" x2=\"60\" y2=\"96\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"96\" x2=\"37.5\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"37.5\" y1=\"83\" x2=\"37.5\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"37.5\" y1=\"57\" x2=\"60\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"82.5\" y1=\"57\" x2=\"97.2\" y2=\"48.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"112\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">CH₃</text><text x=\"16\" y=\"24\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">1-methylcyclohexene</text><line x1=\"120\" y1=\"70\" x2=\"200\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M200,70 L192.9,73.6 M200,70 L192.9,66.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"160\" y=\"61\" text-anchor=\"middle\" font-size=\"12\">Br₂, H₂O</text><line x1=\"270\" y1=\"44\" x2=\"292.5\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"292.5\" y1=\"57\" x2=\"292.5\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"292.5\" y1=\"83\" x2=\"270\" y2=\"96\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"96\" x2=\"247.5\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"247.5\" y1=\"83\" x2=\"247.5\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"247.5\" y1=\"57\" x2=\"270\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"292.5,57 305.5,45.3 298.5,40.6\" fill=\"currentColor\"/><text x=\"311.5\" y=\"28.8\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">CH₃</text><line x1=\"295.4\" y1=\"57.9\" x2=\"295.3\" y2=\"55.7\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"298.3\" y1=\"58.4\" x2=\"298\" y2=\"54.8\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"301.2\" y1=\"58.9\" x2=\"300.8\" y2=\"53.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"304\" y1=\"59.4\" x2=\"303.6\" y2=\"53\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"306.9\" y1=\"59.9\" x2=\"306.4\" y2=\"52.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"309.8\" y1=\"60.4\" x2=\"309.2\" y2=\"51.2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"326.4\" y=\"54.6\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">OH</text><polygon points=\"292.5,83 302.8,97.1 308.2,90.7\" fill=\"currentColor\"/><text x=\"318.6\" y=\"104.9\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">Br</text><text x=\"282\" y=\"134\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">trans-2-bromo-1-methylcyclohexan-1-ol (racemic)</text><text x=\"440\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-red\">OH: on the more</text><text x=\"440\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-red\">substituted C</text><text x=\"440\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-green\">Br and OH: anti</text></svg>",
  hydroboration: "<svg viewBox=\"0 0 520 320\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Concerted four-centre transition state: H and B add to the same face</text><line x1=\"68\" y1=\"120.6\" x2=\"102\" y2=\"120.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"115.4\" x2=\"102\" y2=\"115.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"53.5\" y1=\"122.6\" x2=\"38.5\" y2=\"133.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"53.8\" y1=\"113\" x2=\"46.2\" y2=\"107\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"115.7\" y1=\"123.7\" x2=\"124.3\" y2=\"132.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"116.7\" y1=\"113.6\" x2=\"127.3\" y2=\"106.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"68\" x2=\"102\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"116.7\" y1=\"63.6\" x2=\"127.3\" y2=\"56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"117.7\" y1=\"70.1\" x2=\"132.3\" y2=\"73.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"60\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"110\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"32\" y=\"138\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">R</text><text x=\"40\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"130\" y=\"138\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"134\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"60\" y=\"68\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"110\" y=\"68\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-purple\">B</text><text x=\"134\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"140\" y=\"76\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><line x1=\"160\" y1=\"98\" x2=\"196\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M196,98 L188.9,101.6 M196,98 L188.9,94.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M206,36 l-6,0 l0,124 l6,0 M346,36 l6,0 l0,124 l-6,0\" stroke=\"currentColor\" stroke-width=\"1.4\" fill=\"none\"/><text x=\"360\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">‡</text><line x1=\"250\" y1=\"118\" x2=\"284\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"235.7\" y1=\"122.9\" x2=\"222.3\" y2=\"133.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"68\" x2=\"284\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"242\" y1=\"110\" x2=\"242\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"292\" y1=\"110\" x2=\"292\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"298.7\" y1=\"63.6\" x2=\"309.3\" y2=\"56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"299.7\" y1=\"70.1\" x2=\"314.3\" y2=\"73.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"242\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"292\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"216\" y=\"138\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">R</text><text x=\"242\" y=\"68\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"292\" y=\"68\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-purple\">B</text><text x=\"316\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"322\" y=\"76\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"226\" y=\"104\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\">δ+</text><text x=\"300\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-red\">δ−</text><line x1=\"370\" y1=\"98\" x2=\"404\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M404,98 L396.9,101.6 M404,98 L396.9,94.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"438\" y1=\"118\" x2=\"470\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"425.2\" y1=\"124.4\" x2=\"416.8\" y2=\"135.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"110\" x2=\"430\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"478\" y1=\"110\" x2=\"478\" y2=\"94\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"430\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"478\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"412\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">R</text><text x=\"430\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"478\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-purple\">BH₂</text><text x=\"270\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">B (the electrophile) goes to the less hindered carbon; the more substituted carbon carries δ+</text><text x=\"8\" y=\"200\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Example: 1-methylcyclopentene</text><line x1=\"70\" y1=\"226\" x2=\"92.8\" y2=\"242.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"92.8\" y1=\"242.6\" x2=\"84.1\" y2=\"269.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"87.3\" y1=\"244.4\" x2=\"80.7\" y2=\"264.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"84.1\" y1=\"269.4\" x2=\"55.9\" y2=\"269.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"55.9\" y1=\"269.4\" x2=\"47.2\" y2=\"242.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"47.2\" y1=\"242.6\" x2=\"70\" y2=\"226\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"92.8\" y1=\"242.6\" x2=\"107.1\" y2=\"237.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"123.3\" y=\"232.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">CH₃</text><line x1=\"140\" y1=\"250\" x2=\"260\" y2=\"250\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260,250 L252.9,253.6 M260,250 L252.9,246.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"200\" y=\"241\" text-anchor=\"middle\" font-size=\"12\">1. BH₃·THF</text><text x=\"200\" y=\"269\" text-anchor=\"middle\" font-size=\"12\">2. H₂O₂, NaOH</text><line x1=\"340\" y1=\"226\" x2=\"362.8\" y2=\"242.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"362.8\" y1=\"242.6\" x2=\"354.1\" y2=\"269.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"354.1\" y1=\"269.4\" x2=\"325.9\" y2=\"269.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"325.9\" y1=\"269.4\" x2=\"317.2\" y2=\"242.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"317.2\" y1=\"242.6\" x2=\"340\" y2=\"226\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"365.5\" y1=\"242.9\" x2=\"364.9\" y2=\"240.8\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"368.1\" y1=\"242.8\" x2=\"367\" y2=\"239.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"370.7\" y1=\"242.6\" x2=\"369.2\" y2=\"237.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"373.3\" y1=\"242.5\" x2=\"371.3\" y2=\"236.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"375.9\" y1=\"242.4\" x2=\"373.5\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"378.5\" y1=\"242.3\" x2=\"375.7\" y2=\"233.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"393.3\" y=\"232.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">CH₃</text><polygon points=\"354.1,269.4 359.5,284 366.3,279.1\" fill=\"currentColor\"/><text x=\"372.9\" y=\"295.3\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">OH</text><text x=\"400\" y=\"262\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">H (wedge, not drawn) on C2</text><text x=\"340\" y=\"308\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">trans-2-methylcyclopentan-1-ol (racemic)</text></svg>",
  syn_adds: "<svg viewBox=\"0 0 520 380\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"26\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Hydrogenation (syn): H₂ on a metal surface</text><line x1=\"70\" y1=\"44\" x2=\"92.5\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"92.5\" y1=\"57\" x2=\"92.5\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"87.1\" y1=\"60.1\" x2=\"87.1\" y2=\"79.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"92.5\" y1=\"83\" x2=\"70\" y2=\"96\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"96\" x2=\"47.5\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"47.5\" y1=\"83\" x2=\"47.5\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"47.5\" y1=\"57\" x2=\"70\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"92.5\" y1=\"57\" x2=\"115\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"92.5\" y1=\"83\" x2=\"115\" y2=\"96\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"70\" x2=\"250\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M250,70 L242.9,73.6 M250,70 L242.9,66.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"12\">H₂</text><text x=\"200\" y=\"89\" text-anchor=\"middle\" font-size=\"12\">Pd/C</text><line x1=\"380\" y1=\"44\" x2=\"402.5\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"402.5\" y1=\"57\" x2=\"402.5\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"402.5\" y1=\"83\" x2=\"380\" y2=\"96\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"96\" x2=\"357.5\" y2=\"83\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"357.5\" y1=\"83\" x2=\"357.5\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"357.5\" y1=\"57\" x2=\"380\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"405.2\" y1=\"56.7\" x2=\"404.1\" y2=\"54.8\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"407.7\" y1=\"56.1\" x2=\"405.9\" y2=\"52.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"410.3\" y1=\"55.4\" x2=\"407.8\" y2=\"51.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"412.8\" y1=\"54.8\" x2=\"409.6\" y2=\"49.2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"415.3\" y1=\"54.1\" x2=\"411.4\" y2=\"47.4\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"417.8\" y1=\"53.5\" x2=\"413.2\" y2=\"45.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"430.2\" y=\"41\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">CH₃</text><line x1=\"404.1\" y1=\"85.2\" x2=\"405.2\" y2=\"83.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"405.9\" y1=\"87.1\" x2=\"407.7\" y2=\"83.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"407.8\" y1=\"88.9\" x2=\"410.3\" y2=\"84.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"409.6\" y1=\"90.8\" x2=\"412.8\" y2=\"85.2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"411.4\" y1=\"92.6\" x2=\"415.3\" y2=\"85.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"413.2\" y1=\"94.5\" x2=\"417.8\" y2=\"86.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"430.2\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">CH₃</text><text x=\"380\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">cis-1,2-dimethylcyclohexane</text><text x=\"8\" y=\"146\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Epoxidation (syn): peroxyacid delivers one O</text><line x1=\"40\" y1=\"172\" x2=\"70\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"192.6\" x2=\"110\" y2=\"192.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"187.4\" x2=\"110\" y2=\"187.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"190\" x2=\"140\" y2=\"172\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"190\" x2=\"250\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M250,190 L242.9,193.6 M250,190 L242.9,186.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"200\" y=\"181\" text-anchor=\"middle\" font-size=\"12\">mCPBA</text><text x=\"200\" y=\"209\" text-anchor=\"middle\" font-size=\"12\">CH₂Cl₂</text><line x1=\"330\" y1=\"172\" x2=\"360\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"190\" x2=\"400\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"190\" x2=\"430\" y2=\"172\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"190\" x2=\"375.6\" y2=\"213.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"190\" x2=\"384.4\" y2=\"213.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"380\" y=\"220\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"380\" y=\"240\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">cis-2,3-dimethyloxirane (meso)</text><text x=\"8\" y=\"266\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Dihydroxylation (syn): OsO₄ via a cyclic osmate ester</text><line x1=\"70\" y1=\"284\" x2=\"92.5\" y2=\"297\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"92.5\" y1=\"297\" x2=\"92.5\" y2=\"323\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"87.1\" y1=\"300.1\" x2=\"87.1\" y2=\"319.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"92.5\" y1=\"323\" x2=\"70\" y2=\"336\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"336\" x2=\"47.5\" y2=\"323\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"47.5\" y1=\"323\" x2=\"47.5\" y2=\"297\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"47.5\" y1=\"297\" x2=\"70\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"310\" x2=\"250\" y2=\"310\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M250,310 L242.9,313.6 M250,310 L242.9,306.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"200\" y=\"301\" text-anchor=\"middle\" font-size=\"12\">1. OsO₄ (cat.), NMO</text><text x=\"200\" y=\"329\" text-anchor=\"middle\" font-size=\"12\">2. NaHSO₃, H₂O</text><line x1=\"380\" y1=\"284\" x2=\"402.5\" y2=\"297\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"402.5\" y1=\"297\" x2=\"402.5\" y2=\"323\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"402.5\" y1=\"323\" x2=\"380\" y2=\"336\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"336\" x2=\"357.5\" y2=\"323\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"357.5\" y1=\"323\" x2=\"357.5\" y2=\"297\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"357.5\" y1=\"297\" x2=\"380\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"402.5,297 417.6,293.1 413.4,285.9\" fill=\"currentColor\"/><text x=\"430.2\" y=\"281\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">OH</text><polygon points=\"402.5,323 413.4,334.1 417.6,326.9\" fill=\"currentColor\"/><text x=\"430.2\" y=\"339\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">OH</text><text x=\"380\" y=\"360\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">cis-cyclohexane-1,2-diol (meso)</text></svg>",
  ozonolysis: "<svg viewBox=\"0 0 520 238\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"81\" x2=\"48\" y2=\"66\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"46.8\" y1=\"68.3\" x2=\"74.8\" y2=\"83.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"49.2\" y1=\"63.7\" x2=\"77.2\" y2=\"78.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"76\" y1=\"81\" x2=\"104\" y2=\"66\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"66\" x2=\"48\" y2=\"36\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"44\" x2=\"62\" y2=\"98\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"125\" y1=\"71\" x2=\"230\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M230,71 L222.9,74.6 M230,71 L222.9,67.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"177.5\" y=\"62\" text-anchor=\"middle\" font-size=\"12\">1. O₃</text><text x=\"177.5\" y=\"90\" text-anchor=\"middle\" font-size=\"12\">2. (CH₃)₂S</text><line x1=\"260\" y1=\"81\" x2=\"288\" y2=\"66\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"288\" y1=\"66\" x2=\"288\" y2=\"36\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"286.7\" y1=\"68.2\" x2=\"303.8\" y2=\"78.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"289.3\" y1=\"63.8\" x2=\"306.4\" y2=\"73.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"312\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"290\" y=\"106\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">acetone</text><text x=\"345\" y=\"71\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">+</text><line x1=\"388.2\" y1=\"78.2\" x2=\"405.3\" y2=\"68.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"385.6\" y1=\"73.7\" x2=\"402.7\" y2=\"63.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"404\" y1=\"66\" x2=\"404\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"404\" y1=\"66\" x2=\"432\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"380\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"404\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"408\" y=\"106\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">acetaldehyde</text><line x1=\"60\" y1=\"154\" x2=\"82.5\" y2=\"167\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"82.5\" y1=\"167\" x2=\"82.5\" y2=\"193\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"77.1\" y1=\"170.1\" x2=\"77.1\" y2=\"189.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"82.5\" y1=\"193\" x2=\"60\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"206\" x2=\"37.5\" y2=\"193\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"37.5\" y1=\"193\" x2=\"37.5\" y2=\"167\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"37.5\" y1=\"167\" x2=\"60\" y2=\"154\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"82.5\" y1=\"167\" x2=\"105\" y2=\"154\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70.5\" y1=\"175\" x2=\"94.5\" y2=\"185\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"125\" y1=\"180\" x2=\"230\" y2=\"180\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M230,180 L222.9,183.6 M230,180 L222.9,176.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"177.5\" y=\"171\" text-anchor=\"middle\" font-size=\"12\">1. O₃</text><text x=\"177.5\" y=\"199\" text-anchor=\"middle\" font-size=\"12\">2. Zn, H₂O</text><line x1=\"250\" y1=\"180\" x2=\"280\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"165\" x2=\"310\" y2=\"180\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"180\" x2=\"340\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"165\" x2=\"370\" y2=\"180\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"180\" x2=\"400\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"165\" x2=\"430\" y2=\"180\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"282.6\" y1=\"165\" x2=\"282.6\" y2=\"143\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"277.4\" y1=\"165\" x2=\"277.4\" y2=\"143\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"431.4\" y1=\"182.2\" x2=\"446.6\" y2=\"172.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"428.6\" y1=\"177.8\" x2=\"443.9\" y2=\"168.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"180\" x2=\"430\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"135\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"452\" y=\"166\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"430\" y=\"208\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"360\" y=\"228\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">6-oxoheptanal (one molecule: the ring opens)</text><text x=\"260\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">Rule: cut the C=C and put =O on each former alkene carbon</text></svg>",
  reaction_map: "<svg viewBox=\"0 0 520 360\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"198\" y=\"155\" width=\"124\" height=\"40\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" class=\"s-purple\" stroke-width=\"1.6\"/><text x=\"260\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" font-weight=\"600\">R–CH=CH₂</text><line x1=\"260\" y1=\"149\" x2=\"260\" y2=\"85\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M260,85 L263.6,92.1 M260,85 L256.4,92.1\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"260\" y=\"31\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">R–CHBr–CH₃</text><text x=\"260\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-blue\">HBr</text><text x=\"260\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">Markovnikov</text><line x1=\"302.4\" y1=\"155.1\" x2=\"332\" y2=\"106.1\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M332,106.1 L331.4,114 M332,106.1 L325.2,110.3\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"331.3\" y=\"62.8\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">R–CH(OH)–CH₃</text><text x=\"331.3\" y=\"77.8\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-blue\">H₃O⁺ or Hg(OAc)₂ / NaBH₄</text><text x=\"331.3\" y=\"90.8\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">Markovnikov</text><line x1=\"325\" y1=\"170.5\" x2=\"370.3\" y2=\"159.4\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M370.3,159.4 L364.2,164.6 M370.3,159.4 L362.5,157.5\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"389.4\" y=\"143.4\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">R–CH₂–CH₂OH</text><text x=\"389.4\" y=\"158.4\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-blue\">BH₃; H₂O₂, NaOH</text><text x=\"389.4\" y=\"171.4\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">anti-Markovnikov, syn</text><line x1=\"317.2\" y1=\"188\" x2=\"357\" y2=\"220\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M357,220 L349.2,218.4 M357,220 L353.7,212.7\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"369.2\" y=\"235\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">R–CHBr–CH₂Br</text><text x=\"369.2\" y=\"250\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-blue\">Br₂</text><text x=\"369.2\" y=\"263\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">anti</text><line x1=\"282.6\" y1=\"199.4\" x2=\"298.3\" y2=\"259.6\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M298.3,259.6 L293,253.6 M298.3,259.6 L300,251.8\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"280.1\" y=\"294.8\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">R–CH(OH)–CH₂Br</text><text x=\"280.1\" y=\"309.8\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-blue\">Br₂, H₂O</text><text x=\"280.1\" y=\"322.8\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">OH on more subst. C, anti</text><line x1=\"237.4\" y1=\"199.4\" x2=\"221.7\" y2=\"259.6\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M221.7,259.6 L220,251.8 M221.7,259.6 L227,253.6\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"239.9\" y=\"294.8\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">R–CH₂–CH₃</text><text x=\"239.9\" y=\"309.8\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-blue\">H₂, Pd</text><text x=\"239.9\" y=\"322.8\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">syn</text><line x1=\"202.8\" y1=\"188\" x2=\"163\" y2=\"220\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M163,220 L166.3,212.7 M163,220 L170.8,218.4\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"150.8\" y=\"235\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">epoxide</text><text x=\"150.8\" y=\"250\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-blue\">mCPBA</text><text x=\"150.8\" y=\"263\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">syn</text><line x1=\"195\" y1=\"170.5\" x2=\"149.7\" y2=\"159.4\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M149.7,159.4 L157.5,157.5 M149.7,159.4 L155.8,164.6\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"130.6\" y=\"143.4\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">R–CH(OH)–CH₂OH</text><text x=\"130.6\" y=\"158.4\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-blue\">OsO₄, NMO</text><text x=\"130.6\" y=\"171.4\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">syn diol</text><line x1=\"217.6\" y1=\"155.1\" x2=\"188\" y2=\"106.1\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M188,106.1 L194.8,110.3 M188,106.1 L188.6,114\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"188.7\" y=\"62.8\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">R–CHO + H₂C=O</text><text x=\"188.7\" y=\"77.8\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-blue\">O₃; (CH₃)₂S</text><text x=\"188.7\" y=\"90.8\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"10\" class=\"t-gray\">cleavage</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-alkene-reactions',
  title: 'Halogenation, Hydroboration, Oxidation and Hydrogenation',
  summary: 'The rest of the alkene toolkit: anti addition of bromine through a bromonium ion, halohydrins, anti-Markovnikov hydroboration, syn hydrogenation, epoxidation and dihydroxylation, and ozonolysis, all organized into one reaction map.',
  minutes: 20,
  objectives: [
    'Draw the bromonium-ion mechanism and predict anti-addition stereochemistry, including meso versus racemic products',
    'Predict the regiochemistry and stereochemistry of halohydrin formation and hydroboration–oxidation',
    'Recognize syn additions (hydrogenation, epoxidation, $\\ce{OsO4}$ dihydroxylation) and predict their stereochemical outcomes',
    'Predict the carbonyl products of ozonolysis, and work backwards from them to the alkene',
    'Choose the right reagent for a desired alkene transformation using the reaction map',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Bromine adds anti, through a bromonium ion',
      blocks: [
        {
          type: 'p',
          text: 'Bromine, $\\ce{Br2}$, is a nonpolar molecule, yet it adds rapidly to alkenes at room temperature: the red-brown colour vanishes, a classic test for C=C. As the π cloud approaches, the Br–Br bond polarizes; the near bromine becomes electrophilic and the far one leaves as bromide.',
        },
        {
          type: 'figure',
          svg: FIG.bromonium,
          alt: 'Cyclohexene attacks Br2: one arrow from the π bond to the near bromine, one from the Br–Br bond to the far bromine. The result is a bromonium ion, a three-membered ring with a positive bromine bridging both carbons on the front face. Bromide attacks one carbon from the back face as that C–Br bond breaks onto bromine, opening the ring and giving trans-1,2-dibromocyclohexane, with one Br on a wedge and the other on a hash.',
          caption: 'The [[ochem-bromonium-ion|bromonium ion]] blocks the face it sits on, so bromide must attack from the opposite face, like an SN2 backside attack. The two bromines end up [[ochem-anti-addition|anti]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a bridge and not a carbocation?',
          text: 'Bromine has lone pairs. As soon as one alkene carbon starts to become cationic, a lone pair on the attached bromine donates into it, closing a three-membered ring in which every atom has an octet. The evidence is stereochemical: a free carbocation would let bromide attack either face and give a mixture of cis and trans products; experiment gives only anti addition.',
        },
        {
          type: 'derivation',
          title: 'Anti addition to the butenes: meso or racemic?',
          steps: [
            { tex: '\\textit{trans}\\text{-but-2-ene} + \\ce{Br2} \\to \\textit{meso}\\text{-2,3-dibromobutane}', why: 'Anti addition to the trans alkene creates two stereocenters with opposite labels, (2R,3S), and the molecule has an internal mirror plane: a single achiral meso compound.' },
            { tex: '\\textit{cis}\\text{-but-2-ene} + \\ce{Br2} \\to (2R,3R) + (2S,3S)', why: 'Anti addition to the cis alkene gives the chiral pair. Bromide opens the bromonium ion at either carbon with equal probability, giving the two enantiomers 50 : 50.' },
          ],
          result: 'Different stereoisomers of the alkene give different stereoisomers of the product: the reaction is [[ochem-stereospecific|stereospecific]]. Remember the pattern: anti + trans → meso; anti + cis → racemic.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Cyclopentene reacts with $\\ce{Br2}$ in $\\ce{CH2Cl2}$. What is the product?',
      options: [
        { text: 'cis-1,2-dibromocyclopentane', why: 'Cis would require both bromines on the same face (syn addition). The bromonium ion forces the second bromine onto the opposite face.' },
        { text: 'trans-1,2-dibromocyclopentane, as a racemic mixture', correct: true, why: 'Anti addition puts the bromines on opposite faces. Attack at either carbon of the symmetric bromonium ion gives the two enantiomers equally.' },
        { text: 'trans-1,2-dibromocyclopentane, as a single enantiomer', why: 'Nothing in an achiral alkene and achiral bromine can favour one enantiomer; both form in equal amounts.' },
        { text: 'bromocyclopentane', why: 'That is the HBr addition product. Bromine adds two Br atoms, not H and Br.' },
      ],
      explanation: 'Anti addition through the bromonium ion gives **trans**-1,2-dibromocyclopentane. Its two stereocenters are both R or both S, a chiral compound; since bromide attacks either carbon of the bridged ion equally often, the (1R,2R) and (1S,2S) enantiomers form as a racemic mixture.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Halohydrins: water joins in',
      blocks: [
        {
          type: 'p',
          text: 'Run the bromination in water and a new nucleophile competes with bromide. Water is present in enormous excess, so it opens most of the bromonium ions, giving a [[ochem-halohydrin|halohydrin]]: Br and OH on adjacent carbons, anti.',
        },
        {
          type: 'figure',
          svg: FIG.halohydrin,
          alt: '1-methylcyclohexene with Br2 in water gives trans-2-bromo-1-methylcyclohexan-1-ol: the OH on the carbon bearing the methyl group, the Br on the adjacent carbon, on opposite faces.',
          caption: 'Water attacks the **more substituted** carbon of the bromonium ion, anti to the bromine.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the more substituted carbon?',
          text: 'In an unsymmetrical bromonium ion the bridge is lopsided: the C–Br bond to the more substituted carbon is longer, and that carbon carries more of the positive charge (it would make the better carbocation). The nucleophile goes where the charge is. The result looks Markovnikov (OH on the more substituted carbon), but there is no free carbocation and therefore no rearrangement.',
        },
        {
          type: 'derivation',
          title: 'Predicting a bromohydrin: propene + Br₂/H₂O',
          steps: [
            { tex: '\\ce{CH3CH=CH2 + Br2 -> } \\text{bromonium ion}', why: 'Same first step as bromination.' },
            { tex: '\\ce{H2O}\\ \\text{attacks C2 (2°, more } \\delta+)', why: 'Water opens the bridge at the more substituted carbon, from the side opposite Br.' },
            { tex: '\\ce{-> CH3CH(OH)CH2Br + H+}', why: 'Loss of a proton from the oxonium ion gives 1-bromopropan-2-ol.' },
          ],
          result: 'The halogen ends up on the less substituted carbon, the OH on the more substituted one.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'What is the major product of 2-methylpropene, $\\ce{(CH3)2C=CH2}$, with $\\ce{Br2}$ in water?',
      options: [
        { text: '1-bromo-2-methylpropan-2-ol, $\\ce{(CH3)2C(OH)CH2Br}$', correct: true, why: 'Water attacks the tertiary carbon of the bromonium ion, which carries most of the positive charge; Br stays on the $\\ce{CH2}$.' },
        { text: '2-bromo-2-methylpropan-1-ol, $\\ce{(CH3)2CBrCH2OH}$', why: 'Reversed regiochemistry: this would need water to attack the less positive primary carbon.' },
        { text: '1,2-dibromo-2-methylpropane', why: 'Bromide does compete a little, but water is in vast excess and is the main nucleophile.' },
        { text: '2-methylpropan-2-ol', why: 'Hydration needs aqueous acid or oxymercuration; with $\\ce{Br2}$ present, a bromine is always incorporated.' },
      ],
      explanation: 'Bromonium ion first; then water opens it at the more substituted (here tertiary) carbon. Product: $\\ce{(CH3)2C(OH)-CH2Br}$. Halohydrins are useful because treating them with base closes an epoxide ring (Unit 7).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Hydroboration–oxidation: anti-Markovnikov and syn',
      blocks: [
        {
          type: 'p',
          text: 'Every hydration so far put OH on the more substituted carbon. To put it on the **less** substituted carbon, use borane, $\\ce{BH3}$ (as its THF complex), then hydrogen peroxide in base. This is [[ochem-hydroboration|hydroboration–oxidation]], discovered by H. C. Brown (Nobel Prize, 1979).',
        },
        {
          type: 'figure',
          svg: FIG.hydroboration,
          alt: 'Top: an alkene and H–BH2 pass through a four-membered transition state in which the C=C π bond, a C–H bond, a C–B bond and the B–H bond are all partially formed or broken; boron attaches to the CH2 end and H to the substituted carbon, both on the same face. Bottom: 1-methylcyclopentene with 1. BH3·THF and 2. H2O2, NaOH gives trans-2-methylcyclopentan-1-ol, with OH on a wedge and the methyl on a hash.',
          caption: 'One concerted step: H and B add to the same face ([[ochem-syn-addition|syn]]). Then the oxidation replaces C–B by C–OH with retention, so H and OH end up syn.',
        },
        {
          type: 'list',
          items: [
            '**Regiochemistry (anti-Markovnikov).** Boron, the electrophilic end of B–H, bonds to the less substituted carbon: it is less hindered, and in the transition state the more substituted carbon better tolerates the partial positive charge.',
            '**Stereochemistry (syn).** H and B arrive together on one face; the OH takes B\'s place with retention of configuration.',
            '**No rearrangements.** There is no carbocation, only a partial charge in a concerted transition state.',
            '**Stoichiometry.** Each $\\ce{BH3}$ can add to three alkenes, forming a trialkylborane before oxidation; this does not change the product.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Think "B goes where H would not"',
          text: 'In HX addition the H goes to the less substituted carbon. In hydroboration the H goes to the **more** substituted carbon and B (later OH) to the less substituted one. Same alkene, opposite regiochemistry: you now control where the OH goes.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'What is the product of 1-methylcyclohexene with 1. $\\ce{BH3}$·THF; 2. $\\ce{H2O2}$, $\\ce{NaOH}$?',
      options: [
        { text: '1-methylcyclohexan-1-ol', why: 'That is the Markovnikov alcohol, from acid-catalysed hydration or oxymercuration.' },
        { text: 'cis-2-methylcyclohexan-1-ol', why: 'Right position, wrong stereochemistry. H and OH add syn, which puts OH on the face opposite the methyl group: trans.' },
        { text: 'trans-2-methylcyclohexan-1-ol (racemic)', correct: true, why: 'OH on the less substituted alkene carbon (C2 of the alkene, which becomes C1 of the alcohol), and H added to the same face, which pushes the methyl to the opposite face.' },
        { text: 'cyclohexylmethanol', why: 'Neither alkene carbon becomes a $\\ce{CH2OH}$; the methyl group is not involved.' },
      ],
      explanation: 'Boron goes to the less substituted alkene carbon (the CH); H goes to the methyl-bearing carbon from the same face. Since that new H and the eventual OH are syn, the methyl and OH are on opposite faces: **trans**-2-methylcyclohexan-1-ol, formed as a racemate because borane attacks either face of the alkene equally.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Syn additions: hydrogenation, epoxidation, dihydroxylation',
      blocks: [
        {
          type: 'p',
          text: 'Three more reactions deliver both new bonds from the **same face**, because both atoms come from one reagent (or one surface) in a single event.',
        },
        {
          type: 'figure',
          svg: FIG.syn_adds,
          alt: 'Three reactions. Hydrogenation: 1,2-dimethylcyclohexene with H2 and Pd/C gives cis-1,2-dimethylcyclohexane, both methyls on hashes. Epoxidation: cis-but-2-ene with mCPBA gives cis-2,3-dimethyloxirane. Dihydroxylation: cyclohexene with catalytic OsO4 and NMO, then NaHSO3 and water, gives cis-cyclohexane-1,2-diol, both OH on wedges.',
          caption: 'Each reaction is stereospecific: the alkene\'s geometry is preserved in the product.',
        },
        {
          type: 'table',
          headers: ['Reaction', 'Reagents', 'Adds', 'How syn arises'],
          rows: [
            ['Catalytic hydrogenation', '$\\ce{H2}$, Pd/C (or Pt, Ni)', 'H, H', 'H atoms sit on the metal surface; the alkene lies flat on it and receives both from below'],
            ['Epoxidation', 'peroxyacid, e.g. mCPBA', 'one O (3-membered ring)', 'the O is delivered to one face in a single concerted step'],
            ['Dihydroxylation', '$\\ce{OsO4}$ (cat.), NMO; or cold dilute $\\ce{KMnO4}$', 'OH, OH', 'a cyclic osmate (or manganate) ester bonds both O to one face'],
          ],
        },
        {
          type: 'list',
          items: [
            '**Hydrogenation** is the reaction behind the heats of hydrogenation in the first lesson. It reduces C=C but leaves C=O and aromatic rings alone under mild conditions. Margarine and shortening were long made by partially hydrogenating vegetable oils.',
            '**Epoxides** ([[ochem-epoxide]]) are strained three-membered cyclic ethers; their ring-opening reactions belong to Unit 7. A cis alkene gives a cis epoxide, a trans alkene a trans epoxide.',
            '**$\\ce{OsO4}$** is toxic and expensive, so only a catalytic amount is used; NMO (N-methylmorpholine N-oxide) reoxidizes the osmium after each cycle. The Sharpless asymmetric version (Nobel Prize, 2001) adds a chiral ligand and gives one enantiomer of the diol.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Syn versus anti diols',
          text: '$\\ce{OsO4}$ gives the **syn** (cis) diol directly. Epoxidation followed by acid-catalysed ring opening with water gives the **anti** (trans) diol, because water attacks the protonated epoxide from the back (Unit 7). Two routes, opposite stereochemistry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'trans-But-2-ene is treated with catalytic $\\ce{OsO4}$ and NMO. How many stereoisomers of butane-2,3-diol are formed?',
      hint: 'Syn addition to a trans alkene. Compare with anti addition of $\\ce{Br2}$ to a trans alkene, which gives meso.',
      label: 'number of stereoisomers $=$',
      answer: '2',
      explanation: 'Syn addition to the trans alkene gives the (2R,3R) and (2S,3S) diols: a chiral pair, formed 50 : 50 because $\\ce{OsO4}$ attacks either face equally. So **2** stereoisomers (a racemic mixture). Syn addition to **cis**-but-2-ene gives the single meso diol. The rule: syn + cis → meso; syn + trans → racemic, the reverse of the anti pattern.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Ozonolysis: cutting the double bond',
      blocks: [
        {
          type: 'p',
          text: 'Every reaction so far kept the carbon skeleton. [[ochem-ozonolysis|Ozonolysis]] cleaves it: ozone adds across the C=C, the adduct rearranges to an ozonide, and a mild reductive workup (dimethyl sulfide, or zinc and water) releases two carbonyl compounds. Both the σ and π bonds between the alkene carbons are gone.',
        },
        {
          type: 'figure',
          svg: FIG.ozonolysis,
          alt: 'Top: 2-methylbut-2-ene, cut at the double bond, gives acetone and acetaldehyde with 1. O3, 2. dimethyl sulfide. Bottom: 1-methylcyclohexene, cut at the ring double bond, gives one open-chain molecule, 6-oxoheptanal, with a ketone at one end and an aldehyde at the other.',
          caption: 'Each alkene carbon becomes a carbonyl carbon. A carbon that had an H becomes an aldehyde (CHO); a carbon with two carbon groups becomes a ketone. A ring double bond gives one molecule with two carbonyls.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Find each C=C', text: 'Mark the two alkene carbons.' },
            { title: 'Cut', text: 'Erase the double bond completely.' },
            { title: 'Add =O', text: 'Put a C=O on each former alkene carbon, keeping all its other bonds (including any H).' },
            { title: 'Name the pieces', text: 'Count carbons to check: total carbons are conserved.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Before NMR, ozonolysis was a premier tool for locating double bonds: identify the small carbonyl fragments, then reassemble the alkene. You will do the same puzzle in the next question. It still has an industrial role, for example making azelaic acid (used in skin-care products and polymers) from oleic acid.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Which alkene gives **cyclohexanone** and **formaldehyde** on ozonolysis (1. $\\ce{O3}$; 2. $\\ce{(CH3)2S}$)?',
      options: [
        { text: 'cyclohexene', why: 'A ring C=C would be cut open, giving a single six-carbon dialdehyde (hexanedial), not a ring ketone.' },
        { text: 'methylenecyclohexane', correct: true, why: 'The C=C joins a ring carbon (two carbon neighbours → ketone, cyclohexanone) to a $\\ce{CH2}$ (→ formaldehyde, $\\ce{H2C=O}$).' },
        { text: '1-methylcyclohexene', why: 'Its double bond is in the ring; cutting it opens the ring to 6-oxoheptanal.' },
        { text: 'vinylcyclohexane', why: 'Cutting $\\ce{C6H11-CH=CH2}$ gives cyclohexanecarbaldehyde (an aldehyde, since that carbon has an H) and formaldehyde.' },
      ],
      explanation: 'Work backwards: join the two carbonyl carbons with a double bond and delete the oxygens. Cyclohexanone\'s C=O carbon plus formaldehyde\'s carbon gives a ring carbon double-bonded to an exocyclic $\\ce{CH2}$: **methylenecyclohexane**.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'An alkene X gives **only acetone**, 2 mol per mole of X, on ozonolysis. What is the molar mass of X, in g/mol? (C 12.011, H 1.008)',
      hint: 'Join two acetone carbonyl carbons with a C=C. Then count C and H.',
      label: '$M =$',
      unit: 'g/mol',
      answer: '6*12.011 + 12*1.008',
      answerTex: '84.16\\ \\text{g/mol}',
      tolerance: 0.05,
      explanation: 'Two $\\ce{(CH3)2C=O}$ pieces come from $\\ce{(CH3)2C=C(CH3)2}$, 2,3-dimethylbut-2-ene, $\\ce{C6H12}$: $M = 6(12.011) + 12(1.008) = 84.16$ g/mol. A symmetric tetrasubstituted alkene gives one ketone twice.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The alkene reaction map',
      blocks: [
        {
          type: 'p',
          text: 'You now have about a dozen ways to transform a C=C. The map below organizes them around one alkene; the table summarizes the three questions to ask of every addition: what adds, where (regiochemistry), and from which faces (stereochemistry).',
        },
        {
          type: 'figure',
          svg: FIG.reaction_map,
          alt: 'A reaction map centred on R–CH=CH2 with nine arrows: HBr gives R–CHBr–CH3 (Markovnikov); H3O+ or oxymercuration gives R–CH(OH)–CH3 (Markovnikov); BH3 then H2O2/NaOH gives R–CH2–CH2OH (anti-Markovnikov, syn); Br2 gives R–CHBr–CH2Br (anti); Br2 in water gives R–CH(OH)–CH2Br; H2/Pd gives R–CH2–CH3 (syn); mCPBA gives an epoxide (syn); OsO4/NMO gives R–CH(OH)–CH2OH (syn diol); O3 then dimethyl sulfide gives R–CHO plus formaldehyde.',
          caption: 'Reagents in blue, regiochemistry and stereochemistry in grey.',
        },
        {
          type: 'table',
          headers: ['Reaction', 'Regiochemistry', 'Stereochemistry', 'Intermediate'],
          rows: [
            ['HX', 'Markovnikov', 'mixture (racemic)', 'carbocation (rearranges)'],
            ['$\\ce{H3O+}$, $\\ce{H2O}$', 'Markovnikov', 'mixture', 'carbocation (rearranges)'],
            ['oxymercuration–demercuration', 'Markovnikov', '(not controlled)', 'mercurinium ion'],
            ['hydroboration–oxidation', 'anti-Markovnikov', 'syn', 'four-centre TS'],
            ['$\\ce{Br2}$', 'n/a', 'anti', 'bromonium ion'],
            ['$\\ce{Br2}$, $\\ce{H2O}$', 'OH on more substituted C', 'anti', 'bromonium ion'],
            ['$\\ce{H2}$, Pd', 'n/a', 'syn', 'metal surface'],
            ['mCPBA', 'n/a', 'syn', 'concerted'],
            ['$\\ce{OsO4}$, NMO', 'n/a', 'syn', 'osmate ester'],
            ['$\\ce{O3}$; $\\ce{(CH3)2S}$', 'cleavage', 'n/a', 'ozonide'],
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          text: 'Programs that plan syntheses store reactions like these as graph-rewrite rules: a pattern ("C=C") plus an edit ("add H to one atom, OH to the other, mark faces syn"), together with constraints (regiochemistry). Your reaction map is the same data structure, held in your head.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Choose the reagent for each transformation of propene.',
      template: 'To propan-1-ol: ___. To propane-1,2-diol (syn): ___. To 1,2-dibromopropane: ___. To acetaldehyde and formaldehyde: ___.',
      blanks: [{ answers: ['1. $\\ce{BH3}$; 2. $\\ce{H2O2}$, $\\ce{NaOH}$'] }, { answers: ['$\\ce{OsO4}$, NMO'] }, { answers: ['$\\ce{Br2}$'] }, { answers: ['1. $\\ce{O3}$; 2. $\\ce{(CH3)2S}$'] }],
      wordBank: ['1. $\\ce{BH3}$; 2. $\\ce{H2O2}$, $\\ce{NaOH}$', '$\\ce{OsO4}$, NMO', '$\\ce{Br2}$', '1. $\\ce{O3}$; 2. $\\ce{(CH3)2S}$', '$\\ce{H3O+}$', 'mCPBA'],
      explanation: 'Propan-1-ol is the anti-Markovnikov alcohol: hydroboration–oxidation. The 1,2-diol comes from dihydroxylation with $\\ce{OsO4}$. $\\ce{Br2}$ adds both bromines. Ozonolysis cleaves $\\ce{CH3CH=CH2}$ into $\\ce{CH3CHO}$ and $\\ce{H2C=O}$. Aqueous acid would give propan-2-ol, and mCPBA an epoxide.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student predicts the product of 1-methylcyclopentene with 1. $\\ce{BH3}$·THF; 2. $\\ce{H2O2}$, $\\ce{NaOH}$. Tap the first incorrect line.',
      lines: [
        'B–H adds in one concerted step, so no carbocation forms and there is no rearrangement.',
        'Boron bonds to the more substituted carbon, the one bearing the methyl group.',
        'H and B add to the same face (syn).',
        'Oxidation replaces B by OH, giving 1-methylcyclopentan-1-ol.',
      ],
      errorLines: [2],
      explanation: 'Boron goes to the **less** substituted alkene carbon (the CH), and H goes to the methyl-bearing carbon. After oxidation with retention the product is **trans-2-methylcyclopentan-1-ol**: the anti-Markovnikov alcohol, with the OH and methyl on opposite faces. 1-Methylcyclopentan-1-ol is what oxymercuration or acid-catalysed hydration would give.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'cis-But-2-ene is treated with $\\ce{Br2}$ in $\\ce{CH2Cl2}$. What is formed?',
      options: [
        { text: 'meso-2,3-dibromobutane', why: 'Meso results from anti addition to the **trans** alkene (or syn addition to the cis alkene).' },
        { text: 'a racemic mixture of (2R,3R)- and (2S,3S)-2,3-dibromobutane', correct: true, why: 'Anti addition to a cis alkene gives the chiral diastereomer; attack at either bromonium carbon gives the two enantiomers equally.' },
        { text: 'only (2R,3R)-2,3-dibromobutane', why: 'No chiral influence is present, so both enantiomers form equally.' },
        { text: 'a mixture of all three stereoisomers', why: 'Bromination is stereospecific: each alkene isomer gives only its own product set, never the meso compound from the cis alkene.' },
      ],
      explanation: 'Use the pattern from the first card: anti + cis → racemic; anti + trans → meso. If unsure, draw it: put the bromonium on the top face of cis-but-2-ene, attack C2 from below, and assign R/S to both carbons: you get (2R,3R) or (2S,3S) depending on which carbon is attacked.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Order the steps in the formation of a bromohydrin from an alkene in water.',
      lines: [
        'The π bond attacks one Br of $\\ce{Br2}$ as the Br–Br bond breaks',
        'A bridged bromonium ion forms on one face; bromide is released',
        'Water attacks the more substituted carbon from the opposite face',
        'The oxonium ion loses a proton to water, giving the neutral bromohydrin',
      ],
      distractors: ['Bromide removes a proton from the alkene to make HBr'],
      explanation: 'Electrophilic attack makes the bromonium ion; water, the abundant nucleophile, opens it anti at the more substituted carbon; a final proton transfer neutralizes the oxygen. Alkene C–H bonds are not acidic enough for bromide to deprotonate.',
    },
  ],
  takeaways: [
    '$\\ce{Br2}$ adds anti through a bridged bromonium ion: anti + trans → meso, anti + cis → racemic. In water, OH attacks the more substituted carbon to give a halohydrin.',
    'Hydroboration–oxidation adds H and OH syn and anti-Markovnikov (OH on the less substituted carbon), with no rearrangement.',
    'Hydrogenation ($\\ce{H2}$, Pd), epoxidation (mCPBA) and dihydroxylation ($\\ce{OsO4}$, NMO) are syn additions: syn + cis → meso, syn + trans → racemic.',
    'Ozonolysis cleaves C=C into two C=O: put =O on each former alkene carbon; carbons with an H become aldehydes.',
    'For every alkene reaction ask: what adds, where (regiochemistry), and from which faces (stereochemistry)?',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 8 ("Alkenes: Reactions and Synthesis") covers halogenation, halohydrins, hydroboration, hydrogenation, epoxidation, dihydroxylation and ozonolysis.',
    },
    {
      title: 'Ozonolysis (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Ozonolysis',
      source: 'wikipedia',
      note: 'The Criegee mechanism and the different workups (reductive versus oxidative).',
    },
    {
      title: 'Halohydrin (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Halohydrin',
      source: 'wikipedia',
      note: 'Formation from alkenes and conversion to epoxides.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "reactions of alkenes" for worked stereochemistry problems on anti and syn additions.',
    },
  ],
};
