import type { Lesson } from '../../types';

// <figures> generated from molecule-kit specs and hand-written SVG; every figure was rendered and checked.
const FIG = {
  sn1_mech: "<svg viewBox=\"0 0 520 345\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 1  ionization (slow, rate-determining)</text><line x1=\"70\" y1=\"52\" x2=\"70\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"60\" x2=\"44\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"60\" x2=\"106\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"70\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"70\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"70\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"30\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"118\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"121.2\" cy=\"47\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"114.8\" cy=\"47\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"114.8\" cy=\"73\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"121.2\" cy=\"73\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"131\" cy=\"63.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"131\" cy=\"56.8\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M93,57 Q93,38.9 108,49\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M108,49 L100.1,48 L104.1,42 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"165\" y1=\"60\" x2=\"215\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M215,60 L207.9,63.6 M215,60 L207.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"290\" y1=\"52\" x2=\"290\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"68\" x2=\"290\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"282\" y1=\"60\" x2=\"264\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"290\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"301\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"290\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"290\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"250\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"345\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"18\">+</text><text x=\"395\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"411\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"398.2\" cy=\"46\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"391.8\" cy=\"46\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"391.8\" cy=\"74\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"398.2\" cy=\"74\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"409\" cy=\"63.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"409\" cy=\"56.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"381\" cy=\"56.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"381\" cy=\"63.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"290\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">planar 3° carbocation</text><text x=\"8\" y=\"139\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 2  methanol attacks the carbocation (fast)</text><line x1=\"70\" y1=\"177\" x2=\"70\" y2=\"164\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"193\" x2=\"70\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"185\" x2=\"44\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"70\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"81\" y=\"174\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"70\" y=\"155\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"70\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"30\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><line x1=\"145.1\" y1=\"178.8\" x2=\"152.9\" y2=\"169.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"147.6\" y1=\"187.5\" x2=\"163.7\" y2=\"192.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"140\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"128.5\" cy=\"181.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"128.5\" cy=\"188.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"136.8\" cy=\"196.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"143.2\" cy=\"196.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"158\" y=\"163\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"176\" y=\"197\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><path d=\"M128,183 Q105.2,166 81,181\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M81,181 L85.1,174.2 L89,180.3 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"210\" y1=\"185\" x2=\"250\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M250,185 L242.9,188.6 M250,185 L242.9,181.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"330\" y1=\"185\" x2=\"348\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"356\" y1=\"177\" x2=\"356\" y2=\"161\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"364\" y1=\"185\" x2=\"382\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"300\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"356\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"346\" y=\"171\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"348.2\" cy=\"194.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"354\" cy=\"196.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"356\" y=\"153\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"396\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"8\" y=\"254\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 3  proton transfer to the solvent (fast)</text><line x1=\"74\" y1=\"300\" x2=\"92\" y2=\"300\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"292\" x2=\"100\" y2=\"276\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"300\" x2=\"140\" y2=\"300\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"44\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"100\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"90\" y=\"286\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"92.2\" cy=\"309.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"98\" cy=\"311.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"100\" y=\"266\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"148\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><line x1=\"215.1\" y1=\"293.8\" x2=\"222.9\" y2=\"284.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"217.6\" y1=\"302.5\" x2=\"233.7\" y2=\"307.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"210\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"198.5\" cy=\"296.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"198.5\" cy=\"303.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"206.8\" cy=\"311.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"213.2\" cy=\"311.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"228\" y=\"278\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"246\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><path d=\"M198,298 Q178.4,279 157,296\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M157,296 L160.3,288.7 L164.8,294.4 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M127,303 C127,328 112,328 107,310\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M107,310 L112.4,315.9 L105.4,317.8 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"272\" y1=\"300\" x2=\"304\" y2=\"300\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M304,300 L296.9,303.6 M304,300 L296.9,296.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"378\" y1=\"300\" x2=\"396\" y2=\"300\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"412\" y1=\"300\" x2=\"430\" y2=\"300\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"348\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"404\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"407.2\" cy=\"288.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"400.8\" cy=\"288.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"400.8\" cy=\"311.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"407.2\" cy=\"311.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"444\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"404\" y=\"336\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">tert-butyl methyl ether</text></svg>",
  hyperconj: "<svg viewBox=\"0 0 520 200\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0,0 C11.5,-19.3 46,-17.4 46,0 C46,17.4 11.5,19.3 0,0 Z\" transform=\"translate(150 105) rotate(-90)\" class=\"f-gray s-gray\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.08\" stroke-width=\"1.3\"/><path d=\"M0,0 C11.5,-19.3 46,-17.4 46,0 C46,17.4 11.5,19.3 0,0 Z\" transform=\"translate(150 105) rotate(90)\" class=\"f-gray s-gray\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.08\" stroke-width=\"1.3\"/><ellipse cx=\"212\" cy=\"83\" rx=\"11\" ry=\"27\" class=\"f-blue s-blue\" fill=\"currentColor\" fill-opacity=\"0.25\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"143.1\" y1=\"109.1\" x2=\"122.9\" y2=\"120.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"143.1\" y1=\"100.9\" x2=\"122.9\" y2=\"89.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"105\" x2=\"204\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"212\" y1=\"97\" x2=\"212\" y2=\"67\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"217,108.3 233,124.1 237.7,117.1\" fill=\"currentColor\"/><line x1=\"221.5\" y1=\"104.4\" x2=\"221.1\" y2=\"102.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"225\" y1=\"104.5\" x2=\"224.3\" y2=\"101\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"228.4\" y1=\"104.6\" x2=\"227.6\" y2=\"99.7\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"231.9\" y1=\"104.7\" x2=\"230.8\" y2=\"98.4\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"235.4\" y1=\"104.8\" x2=\"234.1\" y2=\"97.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"238.9\" y1=\"104.9\" x2=\"237.3\" y2=\"95.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"150\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"163\" y=\"93\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"116\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"116\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"212\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"212\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"242\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"246\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M199,65 C182,43 180,35 164,61\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M164,61 L164.6,53 L170.8,56.8 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"170\" y=\"21\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">σ(C–H) electrons spill into the empty p</text><text x=\"150\" y=\"171\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">empty p orbital on C⁺</text><text x=\"330\" y=\"40\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-green\">(CH₃)₃C⁺</text><text x=\"422\" y=\"40\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">3°</text><text x=\"470\" y=\"40\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">9 C–H</text><text x=\"330\" y=\"76\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-teal\">(CH₃)₂CH⁺</text><text x=\"422\" y=\"76\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">2°</text><text x=\"470\" y=\"76\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">6 C–H</text><text x=\"330\" y=\"112\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-orange\">CH₃CH₂⁺</text><text x=\"422\" y=\"112\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">1°</text><text x=\"470\" y=\"112\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">3 C–H</text><text x=\"330\" y=\"148\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-red\">CH₃⁺</text><text x=\"422\" y=\"148\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">methyl</text><text x=\"470\" y=\"148\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">0</text><text x=\"484\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">adjacent C–H</text><line x1=\"316\" y1=\"160\" x2=\"316\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M316,28 L319.6,35.1 M316,28 L312.4,35.1\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"316\" y=\"180\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">more stable ↑</text></svg>",
  resonance: "<svg viewBox=\"0 0 520 140\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"14\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">Allyl cation</text><line x1=\"21.2\" y1=\"77.3\" x2=\"49.2\" y2=\"62.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"18.8\" y1=\"72.7\" x2=\"46.8\" y2=\"57.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"60\" x2=\"76\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"84\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><line x1=\"130\" y1=\"75\" x2=\"158\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"156.8\" y1=\"62.3\" x2=\"184.8\" y2=\"77.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"159.2\" y1=\"57.7\" x2=\"187.2\" y2=\"72.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"122\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><line x1=\"94\" y1=\"70\" x2=\"112\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M112,70 L104.9,73.6 M112,70 L104.9,66.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M94,70 L101.1,66.4 M94,70 L101.1,73.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"100\" y=\"106\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">charge shared by both ends</text><text x=\"220\" y=\"14\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">Benzyl cation</text><line x1=\"244\" y1=\"61\" x2=\"261.3\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"261.3\" y1=\"71\" x2=\"261.3\" y2=\"91\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"257.5\" y1=\"73.2\" x2=\"257.5\" y2=\"88.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"261.3\" y1=\"91\" x2=\"244\" y2=\"101\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"244\" y1=\"101\" x2=\"226.7\" y2=\"91\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"244\" y1=\"96.6\" x2=\"230.5\" y2=\"88.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"226.7\" y1=\"91\" x2=\"226.7\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"226.7\" y1=\"71\" x2=\"244\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"230.5\" y1=\"73.2\" x2=\"244\" y2=\"65.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"244\" y1=\"61\" x2=\"244\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"252\" y=\"31\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><line x1=\"270\" y1=\"75\" x2=\"290\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M290,75 L282.9,78.6 M290,75 L282.9,71.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M270,75 L277.1,71.4 M270,75 L277.1,78.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"326\" y1=\"61\" x2=\"343.3\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"343.3\" y1=\"71\" x2=\"343.3\" y2=\"91\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"339.5\" y1=\"73.2\" x2=\"339.5\" y2=\"88.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"343.3\" y1=\"91\" x2=\"326\" y2=\"101\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"326\" y1=\"101\" x2=\"308.7\" y2=\"91\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"326\" y1=\"96.6\" x2=\"312.5\" y2=\"88.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"308.7\" y1=\"91\" x2=\"308.7\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"308.7\" y1=\"71\" x2=\"326\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"328.6\" y1=\"61\" x2=\"328.6\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"323.4\" y1=\"61\" x2=\"323.4\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"300.9\" y=\"66.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><line x1=\"352\" y1=\"75\" x2=\"372\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M372,75 L364.9,78.6 M372,75 L364.9,71.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M352,75 L359.1,71.4 M352,75 L359.1,78.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"406\" y1=\"61\" x2=\"423.3\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"423.3\" y1=\"71\" x2=\"423.3\" y2=\"91\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"419.5\" y1=\"73.2\" x2=\"419.5\" y2=\"88.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"423.3\" y1=\"91\" x2=\"406\" y2=\"101\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"406\" y1=\"101\" x2=\"388.7\" y2=\"91\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"388.7\" y1=\"91\" x2=\"388.7\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"392.5\" y1=\"88.8\" x2=\"392.5\" y2=\"73.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"388.7\" y1=\"71\" x2=\"406\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"408.6\" y1=\"61\" x2=\"408.6\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"403.4\" y1=\"61\" x2=\"403.4\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"406\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><line x1=\"432\" y1=\"75\" x2=\"452\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M452,75 L444.9,78.6 M452,75 L444.9,71.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M432,75 L439.1,71.4 M432,75 L439.1,78.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"484\" y1=\"61\" x2=\"501.3\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"501.3\" y1=\"71\" x2=\"501.3\" y2=\"91\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"501.3\" y1=\"91\" x2=\"484\" y2=\"101\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"497.5\" y1=\"88.8\" x2=\"484\" y2=\"96.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"484\" y1=\"101\" x2=\"466.7\" y2=\"91\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"466.7\" y1=\"91\" x2=\"466.7\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"470.5\" y1=\"88.8\" x2=\"470.5\" y2=\"73.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"466.7\" y1=\"71\" x2=\"484\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"486.6\" y1=\"61\" x2=\"486.6\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"481.4\" y1=\"61\" x2=\"481.4\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"509.1\" y=\"66.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><text x=\"370\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">+ on the CH₂ and on three ring carbons (ortho, para, ortho)</text></svg>",
  racemize: "<svg viewBox=\"0 0 520 230\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"107\" x2=\"70\" y2=\"79\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62.9\" y1=\"118.7\" x2=\"49.3\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"76,120.2 87.4,135.7 92.9,129.3\" fill=\"currentColor\"/><line x1=\"82\" y1=\"113.3\" x2=\"81.4\" y2=\"111.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"86\" y1=\"113\" x2=\"85.2\" y2=\"109.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"90.1\" y1=\"112.8\" x2=\"89\" y2=\"107.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"94.2\" y1=\"112.5\" x2=\"92.7\" y2=\"106.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"98.3\" y1=\"112.3\" x2=\"96.5\" y2=\"104.7\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"102.4\" y1=\"112\" x2=\"100.2\" y2=\"103.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"70\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"70\" y=\"69\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"36\" y=\"133\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₂H₅</text><text x=\"100\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₃H₇</text><text x=\"112\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"70\" y=\"177\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">one enantiomer</text><line x1=\"140\" y1=\"115\" x2=\"175\" y2=\"115\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M175,115 L167.9,118.6 M175,115 L167.9,111.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"157.5\" y=\"106\" text-anchor=\"middle\" font-size=\"12\">−Br⁻</text><path d=\"M0,0 C10,-16.8 40,-15.1 40,0 C40,15.1 10,16.8 0,0 Z\" transform=\"translate(250 115) rotate(-90)\" class=\"f-gray s-gray\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.08\" stroke-width=\"1.3\"/><path d=\"M0,0 C10,-16.8 40,-15.1 40,0 C40,15.1 10,16.8 0,0 Z\" transform=\"translate(250 115) rotate(90)\" class=\"f-gray s-gray\" fill=\"currentColor\" stroke=\"currentColor\" fill-opacity=\"0.08\" stroke-width=\"1.3\"/><line x1=\"242\" y1=\"115\" x2=\"220\" y2=\"115\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"256.5,119.7 265.4,131.5 270.4,124.7\" fill=\"currentColor\"/><line x1=\"259\" y1=\"109.8\" x2=\"257.7\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"261.3\" y1=\"108.9\" x2=\"259.2\" y2=\"106\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"263.7\" y1=\"108.1\" x2=\"260.7\" y2=\"104.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"266\" y1=\"107.3\" x2=\"262.2\" y2=\"102.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"268.3\" y1=\"106.4\" x2=\"263.7\" y2=\"100.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"270.6\" y1=\"105.6\" x2=\"265.2\" y2=\"98.2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"250\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"237\" y=\"103\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"206\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"280\" y=\"137\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₂H₅</text><text x=\"280\" y=\"93\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₃H₇</text><text x=\"248\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-red\">H₂O</text><line x1=\"248\" y1=\"59\" x2=\"248\" y2=\"71\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M248,71 L244.4,63.9 M248,71 L251.6,63.9\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"248\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-red\">H₂O</text><line x1=\"248\" y1=\"175\" x2=\"248\" y2=\"163\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M248,163 L251.6,170.1 M248,163 L244.4,170.1\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"254\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">planar: attack from either face</text><line x1=\"310\" y1=\"95\" x2=\"350\" y2=\"59\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M350,59 L347.1,66.5 M350,59 L342.3,61.1\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"310\" y1=\"135\" x2=\"350\" y2=\"171\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M350,171 L342.3,168.9 M350,171 L347.1,163.5\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"420\" y1=\"45\" x2=\"420\" y2=\"27\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"412.6\" y1=\"56.1\" x2=\"394.9\" y2=\"63.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"426.2,58 435.7,70.9 440.9,64.3\" fill=\"currentColor\"/><line x1=\"430.3\" y1=\"52.4\" x2=\"429.9\" y2=\"50.2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"432.6\" y1=\"52.7\" x2=\"432\" y2=\"49.2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"435\" y1=\"53\" x2=\"434.1\" y2=\"48.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"437.3\" y1=\"53.4\" x2=\"436.2\" y2=\"47\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"439.6\" y1=\"53.7\" x2=\"438.3\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"442\" y1=\"54\" x2=\"440.4\" y2=\"44.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"420\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"420\" y=\"17\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">OH</text><text x=\"382\" y=\"69\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"450\" y=\"77\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₂H₅</text><text x=\"456\" y=\"47\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₃H₇</text><line x1=\"420\" y1=\"185\" x2=\"420\" y2=\"203\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"412.6\" y1=\"173.9\" x2=\"394.9\" y2=\"166.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"426.2,172 440.9,165.7 435.7,159.1\" fill=\"currentColor\"/><line x1=\"429.9\" y1=\"179.8\" x2=\"430.3\" y2=\"177.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"432\" y1=\"180.8\" x2=\"432.6\" y2=\"177.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"434.1\" y1=\"181.9\" x2=\"435\" y2=\"177\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"436.2\" y1=\"183\" x2=\"437.3\" y2=\"176.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"438.3\" y1=\"184\" x2=\"439.6\" y2=\"176.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"440.4\" y1=\"185.1\" x2=\"442\" y2=\"176\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"420\" y=\"177\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"420\" y=\"213\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">OH</text><text x=\"382\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"450\" y=\"153\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₂H₅</text><text x=\"456\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₃H₇</text><text x=\"422\" y=\"119\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-purple\">mirror images</text><text x=\"422\" y=\"135\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-purple\">≈ 50 : 50</text></svg>",
  rearr: "<svg viewBox=\"0 0 520 266\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"14\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">A  1,2-hydride shift</text><line x1=\"20\" y1=\"67\" x2=\"50\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"52\" x2=\"80\" y2=\"67\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"67\" x2=\"110\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"67\" x2=\"80\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"67\" x2=\"96.7\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"102\" y=\"92\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"50\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><path d=\"M92,78 C106,58 72,40 56,54\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M56,54 L59,46.6 L63.8,52 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"70\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2° cation</text><line x1=\"130\" y1=\"67\" x2=\"158\" y2=\"67\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M158,67 L150.9,70.6 M158,67 L150.9,63.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"170\" y1=\"67\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"52\" x2=\"230\" y2=\"67\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"67\" x2=\"260\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"67\" x2=\"230\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"242\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><text x=\"220\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">3° cation</text><line x1=\"280\" y1=\"67\" x2=\"328\" y2=\"67\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M328,67 L320.9,70.6 M328,67 L320.9,63.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"304\" y=\"58\" text-anchor=\"middle\" font-size=\"12\">H₂O</text><text x=\"304\" y=\"86\" text-anchor=\"middle\" font-size=\"12\">−H⁺</text><line x1=\"340\" y1=\"67\" x2=\"370\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"52\" x2=\"400\" y2=\"67\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"67\" x2=\"430\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"67\" x2=\"384\" y2=\"96\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"67\" x2=\"411.8\" y2=\"84.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"420\" y=\"96\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">OH</text><text x=\"390\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2-methylbutan-2-ol</text><text x=\"8\" y=\"150\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">B  1,2-methyl shift</text><line x1=\"20\" y1=\"201\" x2=\"50\" y2=\"186\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"186\" x2=\"80\" y2=\"201\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"201\" x2=\"110\" y2=\"186\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"201\" x2=\"64\" y2=\"230\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"201\" x2=\"96\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"50\" y=\"174\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><path d=\"M70,216 C46,220 40,200 48,192\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M48,192 L45.5,199.6 L40.4,194.5 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"70\" y=\"256\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2° cation</text><line x1=\"130\" y1=\"201\" x2=\"158\" y2=\"201\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M158,201 L150.9,204.6 M158,201 L150.9,197.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"170\" y1=\"201\" x2=\"200\" y2=\"186\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"186\" x2=\"230\" y2=\"201\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"201\" x2=\"260\" y2=\"186\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"186\" x2=\"200\" y2=\"152\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"201\" x2=\"230\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"242\" y=\"208\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><text x=\"220\" y=\"256\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">3° cation</text><line x1=\"280\" y1=\"201\" x2=\"328\" y2=\"201\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M328,201 L320.9,204.6 M328,201 L320.9,197.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"304\" y=\"192\" text-anchor=\"middle\" font-size=\"12\">CH₃OH</text><text x=\"304\" y=\"220\" text-anchor=\"middle\" font-size=\"12\">−H⁺</text><line x1=\"340\" y1=\"201\" x2=\"370\" y2=\"186\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"186\" x2=\"400\" y2=\"201\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"201\" x2=\"430\" y2=\"186\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"186\" x2=\"370\" y2=\"152\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"201\" x2=\"384\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"201\" x2=\"415.5\" y2=\"223.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"230\" x2=\"450\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"420\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"390\" y=\"256\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2-methoxy-2,3-dimethylbutane</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-sn1',
  title: 'The SN1 Reaction and Carbocations',
  summary: 'Substitution in two steps: a slow ionization to a carbocation, then fast capture by a nucleophile. Why tertiary substrates love it, why it scrambles stereochemistry, why carbocations rearrange, and why it needs a polar protic solvent.',
  minutes: 19,
  objectives: [
    'Draw the SN1 mechanism and explain its first-order rate law, rate $= k[\\ce{RX}]$',
    'Rank carbocations by stability and explain the order with hyperconjugation, induction and resonance',
    'Predict the stereochemical outcome of SN1 at a stereocenter (racemization, with slight excess inversion) and compute enantiomeric excess',
    'Recognize when a carbocation will rearrange by a 1,2-hydride or 1,2-methyl shift, and predict the rearranged product',
    'Explain why polar protic solvents accelerate SN1 reactions, and predict solvolysis products',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Two steps through a carbocation',
      blocks: [
        {
          type: 'p',
          text: 'Tertiary halides are immune to SN2, yet tert-butyl bromide dissolved in methanol slowly becomes tert-butyl methyl ether. The substitution happens anyway, by a completely different route: the leaving group departs **first**, on its own, and only then does the nucleophile arrive. This is the [[ochem-sn1|SN1 reaction]].',
        },
        {
          type: 'figure',
          svg: FIG.sn1_mech,
          alt: 'Three-step mechanism. Step 1: the C–Br bond of tert-butyl bromide breaks, giving the planar tert-butyl cation and bromide. Step 2: a lone pair on methanol oxygen attacks the cation, giving a protonated ether with a positive oxygen. Step 3: a second methanol removes the proton on oxygen, giving tert-butyl methyl ether.',
          caption: 'Methanolysis of tert-butyl bromide. Only step 1 is slow. Because the solvent is the nucleophile, this is a [[ochem-solvolysis|solvolysis]], and a final proton transfer is needed to reach a neutral product.',
        },
        {
          type: 'definition',
          term: 'SN1',
          text: '**S**ubstitution, **N**ucleophilic, **1** = unimolecular: the rate-determining step (ionization) involves only the substrate. The nucleophile joins later, in a fast step, so it does not appear in the rate law.',
        },
        {
          type: 'theorem',
          name: 'SN1 rate law',
          tex: '\\text{rate} = k_1[\\ce{RX}]',
          text: 'First order. Changing the concentration or identity of the nucleophile does not change the rate (though it can change which product forms). Compare SN2: rate $= k_2[\\ce{RX}][\\ce{Nu-}]$.',
        },
        {
          type: 'graph',
          x: [-0.15, 1.15],
          y: [-30, 120],
          xStep: 0.25,
          yStep: 20,
          functions: [
            { expr: '0', color: 'red', domain: [-0.15, 0] },
            { expr: '(i + 12)*(1 - cos(pi*x/0.3))/2', label: 'SN1 free-energy profile', color: 'red', domain: [0, 0.3] },
            { expr: 'i + 12*(1 + cos(pi*(x - 0.3)/0.2))/2', color: 'red', domain: [0.3, 0.5] },
            { expr: 'i + 6*(1 - cos(pi*(x - 0.5)/0.15))/2', color: 'red', domain: [0.5, 0.65] },
            { expr: '-15 + (i + 21)*(1 + cos(pi*(x - 0.65)/0.35))/2', color: 'red', domain: [0.65, 1] },
            { expr: '-15', color: 'red', domain: [1, 1.15] },
          ],
          points: [{ x: 0.5, y: 'i', label: 'R⁺', color: 'blue' }, { x: 0.3, y: 'i + 12', label: 'TS₁', color: 'red' }],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [{ name: 'i', min: 45, max: 100, step: 1, value: 72, label: 'carbocation energy (kJ/mol)' }],
          readouts: [
            { label: '$\\Delta G^\\ddagger$ (kJ/mol) $=$', expr: 'i + 12', digits: 0 },
            { label: '$\\log_{10} k_1$ ($k_1$ in s⁻¹, 25 °C) $=$', expr: '12.793 - (i + 12)/5.708', digits: 2 },
          ],
          caption: 'A simplified two-step profile (the fast proton transfer is folded into the second step). The first transition state lies just above the carbocation, as the Hammond postulate predicts for an endergonic step. Lower the carbocation energy (a more stable cation) and the whole first hill sinks with it: every 5.7 kJ/mol of extra stability makes ionization 10 times faster.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'The solvolysis of tert-butyl chloride in aqueous ethanol is carried out with added sodium azide. Doubling $[\\ce{N3-}]$ (with $[\\ce{RCl}]$ unchanged) has what effect on the **rate** at which tert-butyl chloride disappears?',
      options: [
        { text: 'The rate doubles', why: 'That is the SN2 expectation, where the nucleophile is in the rate-determining step. Here it is not.' },
        { text: 'The rate is unchanged', correct: true, why: 'Rate $= k_1[\\ce{RCl}]$. Ionization is rate-determining and does not involve azide; azide only competes with the solvent for the carbocation afterwards.' },
        { text: 'The rate quadruples', why: 'Quadrupling would require the rate to depend on $[\\ce{N3-}]^2$, or doubling of both reactants in an SN2 reaction.' },
        { text: 'The rate halves', why: 'Azide does not slow ionization; it simply captures some of the carbocations.' },
      ],
      explanation: 'In SN1 the carbocation forms at a rate set only by the substrate (and the solvent). Adding more azide changes the **product mixture** (more tert-butyl azide, less alcohol and ether), but not how fast the chloride is consumed. This zero-order dependence on the nucleophile is the experimental signature of SN1.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Carbocation stability',
      blocks: [
        {
          type: 'p',
          text: 'Because ionization is the slow step and its transition state looks like the carbocation, the SN1 rate is governed by one question: **how stable is the carbocation?** Carbon with only six electrons is desperately electron-poor, so anything that donates electron density to it helps.',
        },
        {
          type: 'figure',
          svg: FIG.hyperconj,
          alt: 'Left: the ethyl cation, with an empty p orbital on the positive carbon and a C–H bond on the neighbouring carbon lined up parallel to it; an arrow shows the σ(C–H) electrons spreading into the empty p orbital. Right: a stability ladder from methyl cation (0 adjacent C–H bonds) to primary (3), secondary (6) and tertiary (9), with tertiary most stable.',
          caption: 'Each C–H (or C–C) bond on a neighbouring carbon can align with the empty p orbital and share some of its electron density. More alkyl groups means more such bonds.',
        },
        {
          type: 'definition',
          term: 'Hyperconjugation',
          text: '[[ochem-hyperconjugation|Hyperconjugation]] is the stabilizing overlap of a filled σ orbital (usually C–H or C–C) with an adjacent empty or partly empty p orbital. It delocalizes the positive charge onto the neighbouring bonds. Alkyl groups also donate weakly through σ bonds (an inductive effect), and both effects add up.',
        },
        {
          type: 'theorem',
          name: 'Carbocation stability order',
          tex: '3^\\circ > 2^\\circ > 1^\\circ > \\ce{CH3+} \\qquad \\text{allylic, benzylic} \\approx 2^\\circ\\text{–}3^\\circ',
        },
        {
          type: 'figure',
          svg: FIG.resonance,
          alt: 'Allyl cation drawn as two resonance structures with the positive charge on either end carbon. Benzyl cation drawn as four resonance structures: positive charge on the CH2 carbon, and on the two ortho carbons and the para carbon of the ring.',
          caption: 'Resonance is a far bigger effect than hyperconjugation: a π bond next to the cationic carbon spreads the charge over several atoms. A primary allylic or benzylic cation is about as stable as a secondary or tertiary alkyl cation.',
        },
        {
          type: 'table',
          headers: ['Cation', 'Type', 'Hydride affinity (kJ/mol)'],
          rows: [
            ['$\\ce{CH3+}$', 'methyl', '≈ 1310'],
            ['$\\ce{CH3CH2+}$', '1°', '≈ 1130'],
            ['$\\ce{CH2=CHCH2+}$', '1° allylic', '≈ 1070'],
            ['$\\ce{(CH3)2CH+}$', '2°', '≈ 1040'],
            ['$\\ce{C6H5CH2+}$', '1° benzylic', '≈ 1000'],
            ['$\\ce{(CH3)3C+}$', '3°', '≈ 975'],
          ],
          caption: 'Gas-phase energy released when the cation captures a hydride ion, $\\ce{R+ + H- -> R-H}$: the smaller the number, the more stable the cation. Solvation shrinks the gaps in solution, but the order holds.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Vinyl and aryl cations are terrible',
          text: 'A positive charge on an sp² carbon (a vinyl cation, $\\ce{CH2=CH+}$, or a phenyl cation) is very unstable: the empty orbital has more s character and is lower in energy, and it cannot overlap with the π system. Vinyl and aryl halides undergo neither SN1 nor SN2.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Which compound undergoes SN1 solvolysis in aqueous ethanol **fastest**?',
      options: [
        { text: '1-chlorobutane, $\\ce{CH3CH2CH2CH2Cl}$', why: 'Primary: ionization would give a very unstable 1° carbocation. Primary halides essentially do not react by SN1.' },
        { text: '2-chlorobutane, $\\ce{CH3CHClCH2CH3}$', why: 'Secondary: a 2° cation forms, but much more slowly than a 3° one.' },
        { text: '2-chloro-2-methylpropane, $\\ce{(CH3)3CCl}$', why: 'Tertiary: a good SN1 substrate, but its cation is stabilized only by hyperconjugation.' },
        { text: '2-chloro-2-phenylpropane, $\\ce{C6H5C(CH3)2Cl}$', correct: true, why: 'Its cation is both tertiary **and** benzylic: hyperconjugation from two methyls plus resonance with the ring. The most stable cation forms fastest.' },
      ],
      explanation: 'By the Hammond postulate the ionization transition state resembles the carbocation, so the SN1 rate follows carbocation stability. A tertiary benzylic cation beats a plain tertiary cation because resonance spreads the charge over the ring; the 2° and 1° cases are far slower.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Stereochemistry: racemization',
      blocks: [
        {
          type: 'p',
          text: 'A carbocation is sp² and flat, with an empty p orbital above and below the plane. If the carbon was a stereocenter, the cation has forgotten which side the leaving group was on, and the nucleophile can attack either lobe.',
        },
        {
          type: 'figure',
          svg: FIG.racemize,
          alt: 'One enantiomer of 3-bromo-3-methylhexane loses bromide to give a planar carbocation with methyl, ethyl and propyl groups in a plane and an empty p orbital. Water attacks from the top face and from the bottom face, giving two products that are mirror images, in about a 50 to 50 ratio.',
          caption: 'Attack on the top face and on the bottom face of the planar cation gives the two enantiomers of 3-methylhexan-3-ol (after loss of a proton).',
        },
        {
          type: 'definition',
          term: 'Racemization',
          text: '[[ochem-racemization|Racemization]] converts a single [[ochem-enantiomer|enantiomer]] into a mixture of both, approaching a [[ochem-racemic-mixture|racemic mixture]]. SN1 at a stereocenter gives mostly racemized product: an optically active substrate becomes a nearly optically inactive product.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Not quite 50 : 50',
          text: 'In practice SN1 usually gives a little more **inversion** than retention, often 55–80% inversion. Right after ionization the leaving-group anion is still next to the face it left from (an *ion pair*), partly shielding that face. Fully free carbocations give closer to 50 : 50.',
        },
        {
          type: 'derivation',
          title: 'Enantiomeric excess of an SN1 product',
          steps: [
            { tex: '\\text{product: } 65\\%\\ \\text{inverted},\\ 35\\%\\ \\text{retained}', why: 'Suppose the ion pair shields the front face somewhat, so 65% of the attacks come from the back.' },
            { tex: '\\%\\,ee = |\\%\\text{major} - \\%\\text{minor}| = 65 - 35 = 30\\%', why: '[[ochem-enantiomeric-excess|Enantiomeric excess]] (Unit 4) is the excess of one enantiomer over the racemic background.' },
            { tex: '\\text{70\\% of the product is racemic; 30\\% is net inverted enantiomer}', why: 'Equivalently, 35% + 35% form a racemic pair, and the remaining 30% is the excess.' },
          ],
          result: 'The product\'s optical rotation is 30% of what pure inverted product would show. Compare SN2: 100% inversion, $ee$ unchanged.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'An optically pure tertiary alkyl chloride undergoes SN1 hydrolysis to give 58% of the inverted alcohol and 42% of the alcohol with retained configuration. What is the enantiomeric excess of the product, in percent?',
      label: '$ee =$',
      unit: '%',
      answer: '16',
      explanation: '$ee = 58\\% - 42\\% = 16\\%$ (in favour of the inverted enantiomer). The other 84% of the product is a racemic 42 : 42 pair. A product this close to racemic is the hallmark of a carbocation intermediate; an SN2 reaction of an optically pure substrate would give 100% $ee$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Carbocation rearrangements',
      blocks: [
        {
          type: 'p',
          text: 'A carbocation is a high-energy intermediate, and it will take any cheap route to a more stable one. The commonest route is a [[ochem-carbocation-rearrangement|1,2-shift]]: a hydrogen or an alkyl group on the **adjacent** carbon moves over to the cationic carbon, carrying its bonding pair. The positive charge ends up where that group came from.',
        },
        {
          type: 'figure',
          svg: FIG.rearr,
          alt: 'Row A: the 3-methylbutan-2-yl cation, a secondary cation, has a hydrogen on the neighbouring tertiary carbon. A curved arrow moves that C–H bond to the cationic carbon, giving the tertiary 2-methylbutan-2-yl cation, which water traps as 2-methylbutan-2-ol. Row B: the 3,3-dimethylbutan-2-yl cation, secondary, has a quaternary neighbour; a curved arrow moves a methyl group (highlighted) to the cationic carbon, giving the tertiary 2,3-dimethylbutan-2-yl cation, which methanol traps as 2-methoxy-2,3-dimethylbutane.',
          caption: 'Both shifts turn a 2° cation into a 3° cation. The arrow starts at the migrating σ bond, never at the + charge.',
        },
        {
          type: 'derivation',
          title: 'Solvolysis of 2-bromo-3-methylbutane in water',
          steps: [
            { tex: '\\ce{->[-Br^-] CH3\\overset{+}{C}HCH(CH3)2}', why: 'Starting from $\\ce{CH3CHBrCH(CH3)2}$, ionization gives a 2° carbocation on C2.' },
            { tex: '\\ce{-> CH3CH2\\overset{+}{C}(CH3)2}', why: 'The H on C3 shifts to C2 with its electron pair: 2° becomes 3°. The shift is faster than capture by water.' },
            { tex: '\\ce{->[H2O] CH3CH2C(CH3)2OH2+}', why: 'Water attacks the more stable, rearranged cation.' },
            { tex: '\\ce{->[H2O][-H3O+] CH3CH2C(CH3)2OH}', why: 'Proton transfer to solvent gives the neutral alcohol.' },
          ],
          result: 'The major product is 2-methylbutan-2-ol, with the OH on a different carbon from where the Br was. Some unrearranged 3-methylbutan-2-ol also forms.',
        },
        {
          type: 'list',
          items: [
            '**Look for a rearrangement whenever a carbocation forms** next to a more substituted carbon: 2° next to 3° (hydride shift) or 2° next to a quaternary carbon (methyl shift).',
            'Shifts are **1,2 only**: the group moves from the immediately adjacent carbon.',
            'A shift happens only if it gives a **more stable** cation (2° → 3°, or to an allylic/benzylic position); 3° → 2° does not happen.',
            'SN2 never rearranges: there is no carbocation.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Unexpected rearranged products are a favourite exam trap, and also a powerful clue: if the product\'s skeleton differs from the starting material\'s, a carbocation was involved. The same shifts appear in E1 eliminations and in additions of HX to alkenes (Unit 6).',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: '3-Bromo-2,2-dimethylbutane, $\\ce{(CH3)3C-CHBr-CH3}$, is heated in methanol. What is the **major** substitution product?',
      options: [
        { text: '3-methoxy-2,2-dimethylbutane, $\\ce{(CH3)3C-CH(OCH3)-CH3}$', why: 'This is direct substitution at the original carbon. It ignores the rearrangement of the 2° cation, which is faster than capture by methanol.' },
        { text: '2-methoxy-2,3-dimethylbutane, $\\ce{(CH3)2C(OCH3)-CH(CH3)2}$', correct: true, why: 'A methyl shifts from the quaternary carbon to the 2° cation, giving a 3° cation that methanol traps.' },
        { text: '3-methoxy-2,2-dimethylbutane with complete inversion at C3', why: 'Complete inversion would mean SN2. A hindered 2° bromide (next to a tert-butyl group) in methanol, a weak nucleophile and protic solvent, reacts by SN1, and its cation rearranges before methanol can trap it.' },
        { text: '1-methoxy-2,2-dimethylbutane', why: 'Groups never migrate to a remote carbon; and a 1° cation, which this would require, is far too unstable to form.' },
      ],
      explanation: 'Ionization gives the 3,3-dimethylbutan-2-yl cation (2°). The neighbouring carbon carries three methyls and no H, so a **methyl** shifts, producing the 2,3-dimethylbutan-2-yl cation (3°). Methanol attacks it and a proton transfer gives 2-methoxy-2,3-dimethylbutane: the carbon skeleton has changed.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Solvent and solvolysis',
      blocks: [
        {
          type: 'p',
          text: 'Ionization creates two ions from a neutral molecule. In the gas phase this is hopelessly uphill; in solution, the solvent pays the bill. **Polar protic solvents** are best: their lone pairs stabilize the carbocation, their O–H hydrogens hydrogen-bond to the departing anion, and their high polarity stabilizes the charge separation already present in the transition state.',
        },
        {
          type: 'table',
          headers: ['Solvent', 'Relative rate'],
          rows: [
            ['ethanol', '1'],
            ['40% water / 60% ethanol', '100'],
            ['80% water / 20% ethanol', '14 000'],
            ['water', '100 000'],
          ],
          caption: 'Relative rates of solvolysis of 2-chloro-2-methylpropane, $\\ce{(CH3)3CCl}$. More water, the more polar protic solvent, accelerates ionization enormously.',
        },
        {
          type: 'derivation',
          title: 'Converting the solvent effect into energy',
          steps: [
            { tex: '\\log_{10}(100\\,000) = 5', why: 'Water speeds the reaction $10^5$-fold compared with ethanol.' },
            { tex: '\\Delta\\Delta G^\\ddagger = 5 \\times 5.7 = 28.5\\ \\text{kJ/mol}', why: 'At 25 °C each factor of 10 in rate is 5.7 kJ/mol of barrier (previous lesson).' },
          ],
          result: 'Water lowers the ionization barrier by about 29 kJ/mol relative to ethanol: a large effect from the solvent alone.',
        },
        {
          type: 'definition',
          term: 'Solvolysis',
          text: 'A substitution in which the solvent is the nucleophile. Water gives an alcohol (hydrolysis), an alcohol $\\ce{R\'OH}$ gives an ether, a carboxylic acid such as acetic acid gives an ester. Solvolysis is nearly always SN1 (with 3°, allylic or benzylic substrates), since neutral solvents are weak nucleophiles.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why weak nucleophiles are fine in SN1',
          text: 'The nucleophile never takes part in the slow step; it only has to capture a carbocation, which reacts with almost anything that has a lone pair. So SN1 runs happily with water or methanol, while SN2 needs a strong nucleophile to push the leaving group out. Conversely, a strong, basic nucleophile at a 3° carbon tends to cause elimination instead (next lesson).',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Predict the solvolysis products of 2-bromo-2-methylpropane, $\\ce{(CH3)3CBr}$.',
      template: 'In water the product is ___. In ethanol it is ___. In acetic acid it is ___.',
      blanks: [{ answers: ['$\\ce{(CH3)3COH}$'] }, { answers: ['$\\ce{(CH3)3COCH2CH3}$'] }, { answers: ['$\\ce{(CH3)3COCOCH3}$'] }],
      wordBank: ['$\\ce{(CH3)3COH}$', '$\\ce{(CH3)3COCH2CH3}$', '$\\ce{(CH3)3COCOCH3}$', '$\\ce{(CH3)3CCH2CH3}$', '$\\ce{CH3CH2OH}$'],
      explanation: 'In each case the tert-butyl cation is captured by an oxygen lone pair of the solvent, and loss of a proton gives the neutral product: tert-butyl alcohol from water, tert-butyl ethyl ether from ethanol, and tert-butyl acetate (an ester, $\\ce{CH3COOC(CH3)3}$) from acetic acid. The new bond is always C–O, never C–C, because the solvent attacks through oxygen.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'SN1 versus SN2 at a glance',
      blocks: [
        {
          type: 'table',
          headers: ['Feature', 'SN2', 'SN1'],
          rows: [
            ['Steps', 'one, concerted', 'two (plus proton transfer), via $\\ce{R+}$'],
            ['Rate law', '$k[\\ce{RX}][\\ce{Nu-}]$', '$k[\\ce{RX}]$'],
            ['Substrate', 'methyl > 1° > 2°; never 3°', '3° > 2°; allylic, benzylic; never methyl or 1°'],
            ['Nucleophile', 'strong, often anionic', 'weak is fine (often the solvent)'],
            ['Solvent', 'polar aprotic (DMSO, DMF, acetone)', 'polar protic (water, alcohols, acids)'],
            ['Stereochemistry', 'complete inversion', 'racemization (slight excess inversion)'],
            ['Rearrangements', 'never', 'possible'],
            ['Leaving group', 'better LG, faster', 'better LG, faster'],
          ],
          caption: 'The two mechanisms respond oppositely to substrate, nucleophile and solvent; only the leaving group affects both the same way.',
        },
        {
          type: 'p',
          text: 'Secondary substrates sit on the border and can go either way: strong nucleophile in DMSO gives SN2; water or an alcohol as solvent with no strong nucleophile gives SN1. **Allylic and benzylic** halides are special: they are excellent at **both**, since the π system stabilizes both the carbocation (SN1) and the SN2 transition state.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Biology does SN1 too',
          text: 'Nature builds terpenes (the molecules behind the smells of pine, lemon and mint, and the precursors of cholesterol) by ionizing allylic diphosphates. The diphosphate is an excellent leaving group, the resulting allylic cations are stabilized by resonance, and enzymes guide their rearrangements to make specific ring skeletons.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Order the steps of the SN1 hydrolysis of 2-bromo-2-methylbutane, $\\ce{CH3CH2C(CH3)2Br}$, in water.',
      lines: [
        'The C–Br bond breaks heterolytically, giving a 3° carbocation and $\\ce{Br-}$ (slow)',
        'A lone pair on a water molecule bonds to the cationic carbon from either face',
        'The resulting oxonium ion, $\\ce{R-OH2+}$, carries a positive charge on oxygen',
        'A second water removes a proton from the oxonium ion, giving the alcohol and $\\ce{H3O+}$',
      ],
      distractors: ['Hydroxide attacks the back of the C–Br carbon as bromide leaves'],
      explanation: 'Ionization comes first and is rate-determining; water then captures the planar cation (hence racemization if the carbon is a stereocenter); the oxonium ion is deprotonated by the most abundant base, water. The distractor is the SN2 mechanism, which cannot occur at a tertiary carbon, and in neutral water there is hardly any hydroxide anyway.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student explains the hydrolysis of 2-bromo-3-methylbutane, $\\ce{CH3CHBrCH(CH3)2}$, in water. Tap the first incorrect line.',
      lines: [
        'The C–Br bond ionizes, giving a secondary carbocation on C2.',
        'The adjacent carbon C3 is tertiary and carries one H.',
        'A hydride shift would turn the secondary cation into a less stable primary cation, so no rearrangement occurs.',
        'Water attacks C2 and loses a proton, so the major product is 3-methylbutan-2-ol.',
      ],
      errorLines: [3],
      explanation: 'Moving the H from C3 to C2 puts the positive charge on C3, which carries two methyls and C2: a **tertiary** cation, more stable than the secondary one. So the hydride shift does occur, and the major product is **2-methylbutan-2-ol**, $\\ce{CH3CH2C(CH3)2OH}$, with only a minor amount of unrearranged 3-methylbutan-2-ol. Line 4 fails because line 3 does.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'SN1 hydrolysis of an optically pure tertiary alkyl bromide gives a single enantiomer of the alcohol, with inverted configuration.',
      answer: false,
      explanation: 'Complete inversion is the SN2 signature. In SN1 the planar carbocation can be attacked on either face, so the product is largely **racemic**, usually with a modest excess of inversion caused by ion pairing. A tertiary substrate cannot undergo SN2 at all.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'An SN1 solvolysis is first order with $k_1 = 1.4 \\times 10^{-4}\\ \\text{s}^{-1}$ at 25 °C. What is its half-life, in minutes?',
      hint: 'For a first-order reaction $t_{1/2} = \\ln 2 / k$, independent of concentration.',
      label: '$t_{1/2} =$',
      unit: 'min',
      answer: 'ln(2)/(1.4*10^-4)/60',
      answerTex: '82.5\\ \\text{min}',
      tolerance: 0.5,
      explanation: '$t_{1/2} = \\dfrac{0.693}{1.4 \\times 10^{-4}\\ \\text{s}^{-1}} = 4.95 \\times 10^{3}$ s $= 82.5$ min. Because the rate law is first order, the half-life does not depend on the starting concentration, or on how much nucleophile is present: another way to recognize SN1 kinetics.',
    },
  ],
  takeaways: [
    'SN1: slow ionization to a planar carbocation, then fast capture by the nucleophile (and a proton transfer if the nucleophile was neutral). Rate $= k[\\ce{RX}]$.',
    'Carbocation stability: 3° > 2° > 1° > methyl (hyperconjugation and induction); allylic and benzylic cations are stabilized by resonance. Vinyl and aryl cations are very unstable.',
    'By the Hammond postulate, the more stable the carbocation, the faster it forms: SN1 needs 3°, allylic or benzylic substrates.',
    'A stereocenter is largely racemized, typically with a slight excess of inversion; $ee = |\\%\\text{major} - \\%\\text{minor}|$.',
    'Carbocations rearrange by 1,2-hydride or 1,2-alkyl shifts whenever a more stable cation results.',
    'Polar protic solvents accelerate SN1 enormously; when the solvent is the nucleophile, the reaction is a solvolysis.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 11 covers the SN1 reaction, carbocation stability and the comparison with SN2; Chapter 7 discusses carbocation structure and hyperconjugation.',
    },
    {
      title: 'SN1 reaction (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/SN1_reaction',
      source: 'wikipedia',
      note: 'Mechanism, kinetics, stereochemistry and solvent effects, with references to the original Hughes–Ingold work.',
    },
    {
      title: 'Hyperconjugation (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Hyperconjugation',
      source: 'wikipedia',
      note: 'The orbital picture behind carbocation and alkene stability.',
    },
    {
      title: 'Khan Academy: Organic chemistry',
      url: 'https://www.khanacademy.org/science/organic-chemistry',
      source: 'khan',
      note: 'The substitution and elimination videos walk through SN1 mechanisms and carbocation rearrangements step by step.',
    },
  ],
};
