import type { Lesson } from '../../types';

// <figures> generated from molecule-kit specs and hand-written SVG; every figure was rendered and checked.
const FIG = {
  sn2_mech: "<svg viewBox=\"0 0 520 185\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"30\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"12\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"38\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"36\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"41.2\" cy=\"88.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"34.8\" cy=\"88.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"34.8\" cy=\"111.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"41.2\" cy=\"111.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"49\" cy=\"103.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"49\" cy=\"96.8\" r=\"1.8\" fill=\"currentColor\"/><line x1=\"108.9\" y1=\"92.6\" x2=\"99.9\" y2=\"71.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"105.5,104.6 79.8,117.9 84.6,124.7\" fill=\"currentColor\"/><line x1=\"109.1\" y1=\"111.9\" x2=\"111.3\" y2=\"112.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"107.8\" y1=\"116\" x2=\"111.3\" y2=\"116.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"106.5\" y1=\"120.1\" x2=\"111.4\" y2=\"120.9\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"105.1\" y1=\"124.2\" x2=\"111.5\" y2=\"125.2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"103.8\" y1=\"128.3\" x2=\"111.5\" y2=\"129.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"102.5\" y1=\"132.4\" x2=\"111.6\" y2=\"133.8\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"100\" x2=\"138\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"112\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"96\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"70\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₂H₅</text><text x=\"106\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"150\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"153.2\" cy=\"87\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"146.8\" cy=\"87\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"146.8\" cy=\"113\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"153.2\" cy=\"113\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"163\" cy=\"103.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"163\" cy=\"96.8\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M50,98 Q75.2,75 102,96\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M102,96 L94.1,94.5 L98.6,88.7 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M129,103 Q129.6,116.7 141,109\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M141,109 L137.1,116 L133.1,110 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"85\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">(R)-2-bromobutane</text><line x1=\"178\" y1=\"100\" x2=\"202\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M202,100 L194.9,103.6 M202,100 L194.9,96.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M212,48 l-6,0 l0,104 l6,0 M352,48 l6,0 l0,104 l-6,0\" stroke=\"currentColor\" stroke-width=\"1.4\" fill=\"none\"/><text x=\"366\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">‡</text><line x1=\"241\" y1=\"100\" x2=\"274\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"282\" y1=\"92\" x2=\"282\" y2=\"72\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"277.6,106.7 266.3,116 273.3,120.7\" fill=\"currentColor\"/><line x1=\"287.5\" y1=\"110.2\" x2=\"289.3\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"288.8\" y1=\"113.5\" x2=\"291.8\" y2=\"111.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"290.2\" y1=\"116.8\" x2=\"294.4\" y2=\"114\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"291.6\" y1=\"120.1\" x2=\"296.9\" y2=\"116.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"292.9\" y1=\"123.4\" x2=\"299.4\" y2=\"119.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"294.3\" y1=\"126.7\" x2=\"301.9\" y2=\"121.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"100\" x2=\"322\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><text x=\"228\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">HO</text><text x=\"282\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"282\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"262\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₂H₅</text><text x=\"302\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"334\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"228\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">δ−</text><text x=\"334\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">δ−</text><text x=\"282\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">trigonal bipyramidal C</text><line x1=\"372\" y1=\"100\" x2=\"396\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M396,100 L388.9,103.6 M396,100 L388.9,96.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"431\" y1=\"100\" x2=\"450\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"461.1\" y1=\"92.6\" x2=\"470.1\" y2=\"71.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"464,105.3 478,123.2 483.5,116.9\" fill=\"currentColor\"/><line x1=\"458.1\" y1=\"112.2\" x2=\"460.3\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"457.8\" y1=\"116.5\" x2=\"461.4\" y2=\"116.1\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"457.6\" y1=\"120.7\" x2=\"462.5\" y2=\"120.2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"457.3\" y1=\"125\" x2=\"463.7\" y2=\"124.4\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"457\" y1=\"129.2\" x2=\"464.8\" y2=\"128.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"456.7\" y1=\"133.5\" x2=\"465.9\" y2=\"132.6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"418\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">HO</text><text x=\"458\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"474\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"492\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C₂H₅</text><text x=\"462\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"458\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">(S)-butan-2-ol + Br⁻</text></svg>",
  sn2_cn: "<svg viewBox=\"0 0 520 165\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"65\" x2=\"46\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"50\" x2=\"72\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"72\" y1=\"65\" x2=\"98\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"72,65 67.8,84.6 76.2,84.6\" fill=\"currentColor\"/><text x=\"72\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"70\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">(R)-2-bromobutane</text><line x1=\"140\" y1=\"70\" x2=\"250\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M250,70 L242.9,73.6 M250,70 L242.9,66.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"195\" y=\"61\" text-anchor=\"middle\" font-size=\"12\">NaC≡N</text><text x=\"195\" y=\"89\" text-anchor=\"middle\" font-size=\"12\">DMSO</text><line x1=\"300\" y1=\"65\" x2=\"326\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"326\" y1=\"50\" x2=\"352\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"352\" y1=\"65\" x2=\"378\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"350.9\" y1=\"70.7\" x2=\"353.1\" y2=\"70.7\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"350.2\" y1=\"76.3\" x2=\"353.8\" y2=\"76.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"349.5\" y1=\"82\" x2=\"354.5\" y2=\"82\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"348.8\" y1=\"87.7\" x2=\"355.2\" y2=\"87.7\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"348.1\" y1=\"93.3\" x2=\"355.9\" y2=\"93.3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"347.4\" y1=\"99\" x2=\"356.6\" y2=\"99\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"352\" y1=\"99\" x2=\"352\" y2=\"119\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"99\" x2=\"348\" y2=\"119\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"356\" y1=\"99\" x2=\"356\" y2=\"119\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"352\" y=\"127\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-blue\">N</text><text x=\"352\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">(S)-2-methylbutanenitrile</text><text x=\"440\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+  NaBr</text><text x=\"195\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">wedge Br → hash CN:</text><text x=\"195\" y=\"121\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">inversion</text></svg>",
  sterics: "<svg viewBox=\"0 0 520 196\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"70\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">CH₃Br</text><circle cx=\"70\" cy=\"66\" r=\"11\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-teal s-teal\" fill-opacity=\"0.25\" stroke-width=\"1.4\"/><text x=\"70\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><circle cx=\"89.1\" cy=\"99\" r=\"11\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-teal s-teal\" fill-opacity=\"0.25\" stroke-width=\"1.4\"/><text x=\"89.1\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><circle cx=\"50.9\" cy=\"99\" r=\"11\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-teal s-teal\" fill-opacity=\"0.25\" stroke-width=\"1.4\"/><text x=\"50.9\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><circle cx=\"70\" cy=\"88\" r=\"5\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-red s-red\" fill-opacity=\"0.9\" stroke-width=\"1.4\"/><text x=\"70\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-green\">wide open: fast</text><text x=\"200\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">CH₃CH₂Br (1°)</text><circle cx=\"200\" cy=\"61\" r=\"21\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-gray s-gray\" fill-opacity=\"0.35\" stroke-width=\"1.4\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">CH₃</text><circle cx=\"219.1\" cy=\"99\" r=\"11\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-teal s-teal\" fill-opacity=\"0.25\" stroke-width=\"1.4\"/><text x=\"219.1\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><circle cx=\"180.9\" cy=\"99\" r=\"11\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-teal s-teal\" fill-opacity=\"0.25\" stroke-width=\"1.4\"/><text x=\"180.9\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><circle cx=\"200\" cy=\"88\" r=\"5\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-red s-red\" fill-opacity=\"0.9\" stroke-width=\"1.4\"/><text x=\"200\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-green\">one group: fast</text><text x=\"330\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">(CH₃)₂CHBr (2°)</text><circle cx=\"330\" cy=\"61\" r=\"21\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-gray s-gray\" fill-opacity=\"0.35\" stroke-width=\"1.4\"/><text x=\"330\" y=\"61\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">CH₃</text><circle cx=\"353.4\" cy=\"101.5\" r=\"21\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-gray s-gray\" fill-opacity=\"0.35\" stroke-width=\"1.4\"/><text x=\"353.4\" y=\"101.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">CH₃</text><circle cx=\"310.9\" cy=\"99\" r=\"11\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-teal s-teal\" fill-opacity=\"0.25\" stroke-width=\"1.4\"/><text x=\"310.9\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><circle cx=\"330\" cy=\"88\" r=\"5\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-red s-red\" fill-opacity=\"0.9\" stroke-width=\"1.4\"/><text x=\"330\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-orange\">crowded: slow</text><text x=\"460\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">(CH₃)₃CBr (3°)</text><circle cx=\"460\" cy=\"61\" r=\"21\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-gray s-gray\" fill-opacity=\"0.35\" stroke-width=\"1.4\"/><text x=\"460\" y=\"61\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">CH₃</text><circle cx=\"483.4\" cy=\"101.5\" r=\"21\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-gray s-gray\" fill-opacity=\"0.35\" stroke-width=\"1.4\"/><text x=\"483.4\" y=\"101.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">CH₃</text><circle cx=\"436.6\" cy=\"101.5\" r=\"21\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-gray s-gray\" fill-opacity=\"0.35\" stroke-width=\"1.4\"/><text x=\"436.6\" y=\"101.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">CH₃</text><circle cx=\"460\" cy=\"88\" r=\"5\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-red s-red\" fill-opacity=\"0.9\" stroke-width=\"1.4\"/><text x=\"460\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">blocked: no SN2</text><text x=\"260\" y=\"186\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">View from the nucleophile's side, looking down the C–Br bond (red dot = carbon, Br behind it)</text></svg>",
  solvation: "<svg viewBox=\"0 0 520 196\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"130\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">Protic solvent (CH₃OH)</text><circle cx=\"130\" cy=\"105\" r=\"16\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-green s-green\" fill-opacity=\"0.25\" stroke-width=\"1.4\"/><text x=\"130\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"15\" class=\"t-green\">F⁻</text><line x1=\"130\" y1=\"87\" x2=\"130\" y2=\"77\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.3\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><line x1=\"130\" y1=\"65\" x2=\"130\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"130\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"134.7\" y1=\"45.3\" x2=\"144.1\" y2=\"37.8\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"145.6\" y1=\"96\" x2=\"154.2\" y2=\"91\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.3\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/><text x=\"159.4\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><line x1=\"164.6\" y1=\"85\" x2=\"172.4\" y2=\"80.5\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"178.5\" y=\"77\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"184.1\" y1=\"79.2\" x2=\"195.2\" y2=\"83.6\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"145.6\" y1=\"114\" x2=\"154.2\" y2=\"119\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.3\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/><text x=\"159.4\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><line x1=\"164.6\" y1=\"125\" x2=\"172.4\" y2=\"129.5\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"178.5\" y=\"133\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"179.4\" y1=\"138.9\" x2=\"181.1\" y2=\"150.8\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"123\" x2=\"130\" y2=\"133\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.3\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/><text x=\"130\" y=\"139\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"154\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"130\" y=\"161\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"125.3\" y1=\"164.7\" x2=\"115.9\" y2=\"172.2\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"114.4\" y1=\"114\" x2=\"105.8\" y2=\"119\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.3\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/><text x=\"100.6\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><line x1=\"95.4\" y1=\"125\" x2=\"87.6\" y2=\"129.5\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"81.5\" y=\"133\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"75.9\" y1=\"130.8\" x2=\"64.8\" y2=\"126.4\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"114.4\" y1=\"96\" x2=\"105.8\" y2=\"91\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.3\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/><text x=\"100.6\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\">H</text><line x1=\"95.4\" y1=\"85\" x2=\"87.6\" y2=\"80.5\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"81.5\" y=\"77\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"80.6\" y1=\"71.1\" x2=\"78.9\" y2=\"59.2\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"130\" y=\"186\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">H-bonds cage the anion</text><text x=\"390\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\" font-weight=\"600\">Polar aprotic solvent (DMSO)</text><circle cx=\"350\" cy=\"105\" r=\"14\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-purple s-purple\" fill-opacity=\"0.25\" stroke-width=\"1.4\"/><text x=\"350\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" class=\"t-purple\">K⁺</text><text x=\"367.6\" y=\"80.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"371.2\" y1=\"75.9\" x2=\"375.9\" y2=\"69.4\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"369.5\" y1=\"74.7\" x2=\"374.2\" y2=\"68.2\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"379.4\" y=\"64.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-orange\">S</text><text x=\"378.5\" y=\"114.3\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"384.2\" y1=\"116.1\" x2=\"391.8\" y2=\"118.6\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"384.9\" y1=\"114.2\" x2=\"392.5\" y2=\"116.7\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"397.6\" y=\"120.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-orange\">S</text><text x=\"350\" y=\"135\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"350\" y1=\"141\" x2=\"350\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"352\" y1=\"141\" x2=\"352\" y2=\"149\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"350\" y=\"155\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-orange\">S</text><text x=\"321.5\" y=\"114.3\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"315.8\" y1=\"116.1\" x2=\"308.2\" y2=\"118.6\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"316.4\" y1=\"118\" x2=\"308.8\" y2=\"120.5\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"302.4\" y=\"120.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-orange\">S</text><text x=\"332.4\" y=\"80.7\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">O</text><line x1=\"328.8\" y1=\"75.9\" x2=\"324.1\" y2=\"69.4\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"327.2\" y1=\"77.1\" x2=\"322.5\" y2=\"70.6\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"320.6\" y=\"64.5\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-orange\">S</text><circle cx=\"462\" cy=\"105\" r=\"16\" fill=\"currentColor\" stroke=\"currentColor\" class=\"f-green s-green\" fill-opacity=\"0.25\" stroke-width=\"1.4\"/><text x=\"462\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"15\" class=\"t-green\">F⁻</text><text x=\"462\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-green\">\"naked\" anion</text><text x=\"350\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">S=O oxygens point at K⁺</text><text x=\"390\" y=\"186\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-green\">cation solvated, anion free</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-sn2',
  title: 'The SN2 Reaction',
  summary: 'One step, backside attack, inversion of configuration: how the SN2 mechanism explains its second-order rate law, why it fails at tertiary carbons, and how nucleophile, leaving group and solvent set its speed.',
  minutes: 19,
  objectives: [
    'Draw the SN2 mechanism with curved arrows and describe its trigonal-bipyramidal transition state',
    'Predict the stereochemistry of an SN2 product (inversion) and assign its R/S configuration',
    'Use the second-order rate law $\\text{rate} = k[\\ce{RX}][\\ce{Nu-}]$ to predict how rates change with concentration',
    'Rank substrates (methyl > 1° > 2° ≫ 3°) and nucleophiles, and explain the difference between nucleophilicity and basicity',
    'Explain why polar aprotic solvents and good leaving groups accelerate SN2 reactions',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'One step, from the back',
      blocks: [
        {
          type: 'p',
          text: 'An alkyl halide plus a nucleophile can swap partners: the nucleophile takes the halogen\'s place on carbon. This is **nucleophilic substitution**, and it comes in two mechanistic flavours. The first, the [[ochem-sn2|SN2 reaction]], happens in a single step.',
        },
        {
          type: 'math',
          tex: '\\ce{Nu^- + R-LG -> Nu-R + LG^-}',
          caption: 'Substitution: the nucleophile (Nu) replaces the leaving group (LG) on an sp³ carbon.',
        },
        {
          type: 'definition',
          term: 'SN2',
          text: '**S**ubstitution, **N**ucleophilic, **2** = bimolecular: the single step (which is therefore the rate-determining step) involves two species, the nucleophile and the substrate. The new bond forms **while** the old bond breaks.',
        },
        {
          type: 'figure',
          svg: FIG.sn2_mech,
          alt: 'Hydroxide approaches (R)-2-bromobutane from the side opposite bromine. In the bracketed transition state, HO and Br are both partially bonded to a central carbon, each with partial negative charge, and the methyl, ethyl and hydrogen groups lie in one plane. In the product, (S)-butan-2-ol, the three groups now point to the right: the molecule has turned inside out.',
          caption: 'Two arrows, drawn in the same step: the lone pair attacks the back of carbon as the C–Br bond breaks. In the transition state carbon is momentarily five-coordinate (trigonal bipyramidal), with the three other groups flattened into a plane, and the charge is shared by the incoming and outgoing groups.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why from the back?',
          text: 'Recall the previous lesson: the LUMO of the substrate is σ*(C–LG), and its largest lobe is on the carbon, on the side **opposite** the leaving group. Approaching from the front would put the nucleophile into the node of σ* (and into the electron-rich leaving group). Backside attack gives the best HOMO–LUMO overlap, and as σ* fills, the C–LG bond breaks.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'An umbrella turning inside out in a gust of wind. The three groups on carbon are the spokes; the nucleophile pushes in from below while the leaving group lets go at the top, and the spokes flip through a flat position (the transition state) to point the other way.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which statement correctly describes the **transition state** of an SN2 reaction?',
      options: [
        { text: 'A carbocation with the nucleophile and leaving group both detached', why: 'That would be an intermediate of a two-step (SN1) process. SN2 never forms a carbocation.' },
        { text: 'A five-coordinate carbon with partial bonds to Nu and LG on opposite sides and the other three groups in a plane', correct: true, why: 'Bond making and bond breaking are simultaneous, so at the peak both are partial. The geometry is trigonal bipyramidal, with Nu and LG at the axial positions.' },
        { text: 'A carbon with Nu and LG partially bonded on the same side (frontside)', why: 'Frontside attack would aim the nucleophile at the node of σ* and at the electron-rich leaving group. It is not observed; the stereochemistry (inversion) rules it out.' },
        { text: 'A stable intermediate that can be isolated at low temperature', why: 'A transition state sits at an energy maximum and lasts about one molecular vibration; it can never be isolated. SN2 has no intermediate at all.' },
      ],
      explanation: 'The SN2 transition state is $[\\ce{Nu}\\cdots\\ce{C}\\cdots\\ce{LG}]^\\ddagger$: an sp²-like carbon with its p orbital half-bonded to both the incoming and the outgoing group, 180° apart. Because both partners are in the rate-determining (only) step, the reaction is bimolecular.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Inversion of configuration',
      blocks: [
        {
          type: 'p',
          text: 'Backside attack has a striking, testable consequence. If the carbon under attack is a [[ochem-chirality-center|chirality center]], the product has the **opposite spatial arrangement**: the three groups that stayed have flipped like the umbrella. This is called [[ochem-walden-inversion|Walden inversion]], and SN2 reactions are [[ochem-stereospecific|stereospecific]]: one enantiomer of the reactant gives one enantiomer of the product.',
        },
        {
          type: 'figure',
          svg: FIG.sn2_cn,
          alt: 'Skeletal structures: (R)-2-bromobutane with Br on a wedge reacts with sodium cyanide in DMSO to give (S)-2-methylbutanenitrile with the C≡N group on a hash at the same carbon, plus NaBr.',
          caption: 'Drawn with the carbon skeleton held still, inversion means the new group appears on the **opposite** wedge/hash from the old one: Br on a wedge becomes CN on a hash.',
        },
        {
          type: 'derivation',
          title: 'Assigning the product configuration',
          steps: [
            { tex: '\\text{Reactant priorities: } \\ce{Br} > \\ce{CH2CH3} > \\ce{CH3} > \\ce{H}', why: 'CIP rules: Br has the highest atomic number; ethyl beats methyl at the first point of difference (C,H,H versus H,H,H).' },
            { tex: '\\text{Product priorities: } \\ce{C#N} > \\ce{CH2CH3} > \\ce{CH3} > \\ce{H}', why: 'The nitrile carbon carries (N,N,N) after duplicating the triple bond, beating ethyl\'s (C,H,H). So CN takes the top rank that Br had.' },
            { tex: '\\text{same priority pattern, mirror-image arrangement} \\implies (R) \\to (S)', why: 'The new group occupies the top priority, the other three keep their ranks, and the spatial arrangement is inverted, so the descriptor flips.' },
          ],
          result: '(R)-2-bromobutane gives (S)-2-methylbutanenitrile. Note that the reaction adds a carbon: cyanide is a classic way to lengthen a chain by one.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Inversion is geometric; the letter is a naming convention',
          text: 'Inversion always happens in SN2, but the R/S **label** flips only if the nucleophile takes the same priority rank as the leaving group, which is usually (but not always) the case. Draw the product with the skeleton held still and the new group on the opposite wedge/hash, then assign R/S from scratch.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Paul Walden discovered in 1896 that a sequence of substitutions could convert one enantiomer of malic acid into the other. Forty years later Hughes and Ingold showed that every SN2 step inverts, by following radioactive iodide exchanging with optically active 2-iodooctane: each exchange destroyed the optical activity of two molecules, exactly as inversion predicts.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: '(S)-2-Iodooctane reacts with sodium azide, $\\ce{NaN3}$, in DMF by an SN2 mechanism. What is the product?',
      options: [
        { text: '(S)-2-azidooctane', why: 'This would mean retention of configuration. Azide is first in priority, as iodine was, so retention would keep the S label; but SN2 inverts.' },
        { text: '(R)-2-azidooctane', correct: true, why: 'Backside attack inverts the stereocenter. $\\ce{N3}$ ranks first (N beats C), just as I did, so the descriptor flips from S to R.' },
        { text: 'A 50 : 50 mixture of (R)- and (S)-2-azidooctane', why: 'A racemic product comes from a flat carbocation attacked from either face: an SN1 pathway. A strong nucleophile on a 2° iodide in a polar aprotic solvent reacts by SN2.' },
        { text: '1-azidooctane', why: 'The nucleophile replaces the leaving group on the same carbon; SN2 does not move the functional group.' },
      ],
      explanation: 'Secondary iodide, excellent leaving group, strong nucleophile, polar aprotic solvent: classic SN2. Inversion places $\\ce{N3}$ on the face opposite where I was; since $\\ce{-N3}$ takes the top priority that $\\ce{-I}$ had and the other groups keep their order, S becomes **R**.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The rate law: second order',
      blocks: [
        {
          type: 'p',
          text: 'Because the single step involves one nucleophile and one substrate, the [[gchem-rate-law|rate law]] contains both concentrations to the first power. This is how SN2 was first recognized, and it is the cleanest experimental test separating it from SN1.',
        },
        {
          type: 'theorem',
          name: 'SN2 rate law',
          tex: '\\text{rate} = k_2\\,[\\ce{RX}]\\,[\\ce{Nu-}]',
          text: 'First order in each reactant, second order overall; $k_2$ has units of M⁻¹ s⁻¹. Doubling **either** concentration doubles the rate.',
        },
        {
          type: 'graph',
          x: [-0.04, 1],
          y: [-0.3, 5.2],
          xStep: 0.1,
          yStep: 1,
          functions: [
            { expr: '10s*x', label: 'SN2: rate $= k_2[\\ce{RX}][\\ce{Nu-}]$', color: 'blue' },
            { expr: 's', label: 'SN1: rate $= k_1[\\ce{RX}]$ (next lesson)', color: 'red', dashed: true },
          ],
          points: [{ x: 'n', y: '10s*n', label: 'SN2', color: 'blue' }, { x: 'n', y: 's', label: 'SN1', color: 'red' }],
          sliders: [
            { name: 's', min: 0.05, max: 0.5, step: 0.01, value: 0.2, label: '$[\\ce{RX}]$ (M)' },
            { name: 'n', min: 0, max: 1, step: 0.01, value: 0.5, label: '$[\\ce{Nu-}]$ (M)' },
          ],
          readouts: [
            { label: 'SN2 rate ($10^{-5}$ M/s) $=$', expr: '10s*n', digits: 2 },
            { label: 'SN1 rate ($10^{-5}$ M/s) $=$', expr: 's', digits: 2 },
          ],
          caption: 'Horizontal: $[\\ce{Nu-}]$ (M); vertical: initial rate in units of $10^{-5}$ M/s, for $k_2 = 1.0 \\times 10^{-4}$ M⁻¹ s⁻¹ and $k_1 = 1.0 \\times 10^{-5}$ s⁻¹. The SN2 rate is a straight line through the origin whose slope is proportional to $[\\ce{RX}]$; the SN1 rate does not depend on the nucleophile at all.',
        },
        {
          type: 'derivation',
          title: 'Doubling both concentrations',
          steps: [
            { tex: '\\text{rate}_1 = k_2[\\ce{RX}]_0[\\ce{Nu-}]_0', why: 'The initial rate under the original conditions.' },
            { tex: '\\text{rate}_2 = k_2(2[\\ce{RX}]_0)(2[\\ce{Nu-}]_0) = 4\\,k_2[\\ce{RX}]_0[\\ce{Nu-}]_0', why: 'Substitute the new concentrations; each first-order factor contributes a factor of 2.' },
            { tex: '\\frac{\\text{rate}_2}{\\text{rate}_1} = 4', why: '$k_2$ is unchanged at constant temperature, so it cancels.' },
          ],
          result: 'A fourfold increase. For an SN1 reaction the same change would only double the rate (only $[\\ce{RX}]$ appears).',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'For the SN2 reaction of 1-bromobutane with azide in DMF, $k_2 = 2.0 \\times 10^{-3}$ M⁻¹ s⁻¹. What is the initial rate when $[\\ce{RBr}] = 0.10$ M and $[\\ce{N3-}] = 0.25$ M? Give the answer in units of $10^{-5}$ M/s.',
      hint: 'rate $= k_2[\\ce{RBr}][\\ce{N3-}]$; then divide by $10^{-5}$.',
      label: 'rate $=$',
      unit: '× 10⁻⁵ M/s',
      answer: '2.0*10^-3*0.10*0.25/10^-5',
      answerTex: '5.0 \\times 10^{-5}\\ \\text{M/s}',
      tolerance: 0.05,
      explanation: 'rate $= (2.0 \\times 10^{-3}\\ \\text{M}^{-1}\\text{s}^{-1})(0.10\\ \\text{M})(0.25\\ \\text{M}) = 5.0 \\times 10^{-5}$ M/s. The units work out because a second-order rate constant (M⁻¹ s⁻¹) times two concentrations gives M/s.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'In an SN2 reaction, the substrate concentration is tripled and the nucleophile concentration is halved. By what factor does the initial rate change?',
      label: 'new rate / old rate $=$',
      answer: '3/2',
      answerTex: '1.5',
      explanation: 'rate $\\propto [\\ce{RX}][\\ce{Nu-}]$, so the factor is $3 \\times \\tfrac{1}{2} = 1.5$. In an SN1 reaction the same change would triple the rate, since the nucleophile does not appear in the rate law.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The substrate: steric hindrance decides',
      blocks: [
        {
          type: 'p',
          text: 'The nucleophile must reach the back of the carbon, right where the other three substituents are folded. Every alkyl group there is in the way. This [[ochem-steric-hindrance|steric hindrance]] raises the energy of the crowded five-coordinate transition state, and it dominates SN2 reactivity.',
        },
        {
          type: 'figure',
          svg: FIG.sterics,
          alt: 'Four views down the C–Br bond from the back. Methyl bromide shows three small hydrogens around an exposed carbon. Ethyl bromide has one methyl and two hydrogens. Isopropyl bromide has two methyls and one hydrogen, leaving little room. Tert-butyl bromide has three methyls that completely cover the carbon.',
          caption: 'What the nucleophile "sees". Each methyl in place of a hydrogen narrows the approach; three of them close it.',
        },
        {
          type: 'table',
          headers: ['Substrate', 'Class', 'Relative SN2 rate'],
          rows: [
            ['$\\ce{CH3-Br}$', 'methyl', '≈ 30'],
            ['$\\ce{CH3CH2-Br}$', '1°', '1'],
            ['$\\ce{(CH3)2CH-Br}$', '2°', '≈ 0.02'],
            ['$\\ce{(CH3)3C-CH2-Br}$ (neopentyl)', '1°, but β-branched', '≈ 0.00001'],
            ['$\\ce{(CH3)3C-Br}$', '3°', '≈ 0 (no SN2)'],
          ],
          caption: 'Approximate relative rates for a typical SN2 nucleophile (exact values depend on the nucleophile and solvent). From methyl to 2° the rate falls by more than a factor of 1000.',
        },
        {
          type: 'list',
          items: [
            '**Methyl and 1°**: excellent SN2 substrates.',
            '**2°**: SN2 works with good nucleophiles in polar aprotic solvents, but slowly, and competes with elimination (last lesson of this unit).',
            '**3°**: no SN2, ever. The backside is completely blocked.',
            '**Neopentyl**: primary on paper, but the bulky tert-butyl group next door blocks the backside almost as well.',
            '**Vinyl and aryl halides** (halogen on an sp² carbon): no SN2. The backside lies inside the π system or the ring, and the C–X bond is stronger.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The substrate class is the first thing to identify in any substitution problem. "Tertiary halide" immediately rules out SN2; "methyl or primary" all but rules out SN1. Classify by the carbon bearing the leaving group: count the carbons attached to it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Which alkyl bromide reacts **fastest** with sodium iodide in acetone (an SN2 reaction)?',
      options: [
        { text: '2-bromo-2-methylpropane, $\\ce{(CH3)3CBr}$', why: 'Tertiary: the backside is completely blocked, so it does not undergo SN2 at all.' },
        { text: '2-bromopropane, $\\ce{(CH3)2CHBr}$', why: 'Secondary: it reacts, but two methyls crowd the backside, roughly 50 times slower than a typical primary halide.' },
        { text: '1-bromo-2,2-dimethylpropane, $\\ce{(CH3)3CCH2Br}$', why: 'Neopentyl bromide is primary, but its β tert-butyl group blocks the backside: about $10^5$ times slower than ethyl bromide.' },
        { text: '1-bromobutane, $\\ce{CH3CH2CH2CH2Br}$', correct: true, why: 'Unbranched primary: the least hindered substrate in the list.' },
      ],
      explanation: 'SN2 rates follow the crowding at the back of the reacting carbon: methyl > 1° > 2° ≫ 3°, with branching at the β carbon (neopentyl) also strongly retarding. This reaction (NaI in acetone) is the classic Finkelstein test: the NaBr formed is insoluble in acetone, so a cloudy precipitate appears quickly with primary bromides and slowly or never with hindered ones.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The nucleophile: strength versus basicity',
      blocks: [
        {
          type: 'p',
          text: '**Basicity** is a thermodynamic property: how strongly a species holds a proton at equilibrium ($\\mathrm{p}K_a$ of its conjugate acid). **[[ochem-nucleophilicity|Nucleophilicity]]** is a kinetic property: how fast it attacks an electrophilic carbon. They often run parallel, but not always, and the exceptions are where exam questions live.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**A negative charge helps.** A species is always a better nucleophile than its conjugate acid: $\\ce{HO-} > \\ce{H2O}$, $\\ce{CH3O-} > \\ce{CH3OH}$, $\\ce{H2N-} > \\ce{NH3}$.',
            '**Across a row, nucleophilicity follows basicity**: $\\ce{H2N-} > \\ce{HO-} > \\ce{F-}$ and $\\ce{NH3} > \\ce{H2O}$. Less electronegative atoms hold their lone pairs less tightly (higher HOMO).',
            '**Down a group (in protic solvents), nucleophilicity opposes basicity**: $\\ce{I-} > \\ce{Br-} > \\ce{Cl-} > \\ce{F-}$ and $\\ce{HS-} > \\ce{HO-}$. Large atoms are more **polarizable** (their electron clouds deform toward the electrophile early) and are less tightly solvated.',
            '**Bulk hurts**: tert-butoxide, $\\ce{(CH3)3CO-}$, is a stronger base than methoxide but a much poorer nucleophile, because it cannot reach a crowded carbon. A proton on the surface of a molecule is easy to reach, so bulky bases still remove protons (E2, last lesson).',
          ],
        },
        {
          type: 'table',
          headers: ['Strong nucleophiles', 'Moderate', 'Weak'],
          rows: [
            ['$\\ce{I-}$, $\\ce{HS-}$, $\\ce{RS-}$, $\\ce{CN-}$, $\\ce{N3-}$, $\\ce{HO-}$, $\\ce{RO-}$, $\\ce{Br-}$, acetylides', '$\\ce{Cl-}$, $\\ce{F-}$, $\\ce{NH3}$, amines, $\\ce{RCOO-}$', '$\\ce{H2O}$, $\\ce{ROH}$, $\\ce{RCOOH}$'],
          ],
          caption: 'A working classification. Strong nucleophiles favour SN2; weak ones are typical of SN1 (solvolysis). $\\ce{F-}$ is moderate in protic solvents but becomes strong in polar aprotic ones.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why iodide beats fluoride in methanol',
          text: 'Fluoride is small with its charge concentrated, so methanol molecules hydrogen-bond to it very strongly; to react, $\\ce{F-}$ must first shed part of that solvent shell, which costs energy. Iodide\'s charge is spread over a large volume, its solvation is weak, and its big, soft electron cloud starts bonding to carbon from farther away. Remove the hydrogen-bonding solvent and the order reverts toward basicity.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'Because $\\ce{F-}$ is a stronger base than $\\ce{I-}$, fluoride is also the better nucleophile in methanol.',
      answer: false,
      explanation: 'In protic solvents nucleophilicity **down a group** runs opposite to basicity: $\\ce{I- > Br- > Cl- > F-}$. Fluoride is strongly hydrogen-bonded by methanol and weakly polarizable, so it attacks carbon slowly; iodide is weakly solvated and highly polarizable. Basicity measures an equilibrium with a proton; nucleophilicity measures a rate at carbon.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The solvent: polar aprotic is best',
      blocks: [
        {
          type: 'p',
          text: 'SN2 nucleophiles are usually salts such as $\\ce{NaCN}$ or $\\ce{KI}$, so the solvent must be polar enough to dissolve them. The question is whether it can also hydrogen-bond.',
        },
        {
          type: 'definition',
          term: 'Protic versus polar aprotic solvents',
          text: 'A [[ochem-polar-protic-solvent|polar protic solvent]] has O–H or N–H bonds and hydrogen-bonds to anions (water, methanol, ethanol, acetic acid). A [[ochem-polar-aprotic-solvent|polar aprotic solvent]] is polar but has no O–H or N–H: DMSO ($\\ce{(CH3)2S=O}$), DMF ($\\ce{HCON(CH3)2}$), acetone ($\\ce{(CH3)2C=O}$) and acetonitrile ($\\ce{CH3C#N}$).',
        },
        {
          type: 'figure',
          svg: FIG.solvation,
          alt: 'Left: a fluoride ion surrounded by six methanol molecules, each pointing an O–H hydrogen at the anion through a dashed hydrogen bond. Right: a potassium ion surrounded by the oxygen ends of five DMSO molecules, while a fluoride ion sits alone, unsolvated.',
          caption: 'Polar aprotic solvents solvate cations well (through the lone pairs of their O or N) but anions poorly, because they have no δ+ hydrogen to offer. The anion is left "naked", higher in energy and more reactive.',
        },
        {
          type: 'table',
          headers: ['Solvent', 'Type', 'Relative rate'],
          rows: [
            ['methanol', 'protic', '1'],
            ['water', 'protic', '7'],
            ['DMSO', 'polar aprotic', '1300'],
            ['DMF', 'polar aprotic', '2800'],
            ['acetonitrile', 'polar aprotic', '5000'],
          ],
          caption: 'Relative rates of $\\ce{CH3CH2CH2CH2Br + N3- -> CH3CH2CH2CH2N3 + Br-}$ in different solvents. Switching from methanol to acetonitrile speeds the same reaction 5000-fold.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'An energy-diagram view',
          text: 'Hydrogen bonding stabilizes the free anion more than the transition state, where the charge is spread over Nu and LG. Lowering the starting point deepens the climb: $\\Delta G^\\ddagger$ grows. In a polar aprotic solvent the anion starts higher and the barrier shrinks. A factor of 5000 is $\\log_{10} 5000 \\times 5.7 \\approx 21$ kJ/mol of barrier.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Complete the recipe for a fast SN2 reaction.',
      template: 'Use a ___ or primary substrate with a good leaving group such as ___, a strong nucleophile, and a polar aprotic solvent such as ___.',
      blanks: [{ answers: ['methyl'] }, { answers: ['iodide'] }, { answers: ['DMSO'] }],
      wordBank: ['methyl', 'tertiary', 'iodide', 'fluoride', 'DMSO', 'methanol', 'water'],
      explanation: 'Methyl and primary carbons have the least crowded backside. Iodide is the best halide leaving group (HI, $\\mathrm{p}K_a \\approx -10$) while fluoride is poor. DMSO dissolves the salt but leaves the anion unsolvated; methanol and water hydrogen-bond to the nucleophile and slow the reaction.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Putting it together: SN2 as a synthetic tool',
      blocks: [
        {
          type: 'p',
          text: 'The leaving-group order from the first lesson applies directly to SN2: $\\ce{R-I} > \\ce{R-OTs} \\approx \\ce{R-Br} > \\ce{R-Cl} \\gg \\ce{R-F}$, and alcohols, ethers and amines do not react until their leaving group is activated. With that, SN2 becomes a way to install almost any functional group on a primary carbon.',
        },
        {
          type: 'table',
          headers: ['Nucleophile', 'Product from $\\ce{R-X}$', 'Name'],
          rows: [
            ['$\\ce{HO-}$', '$\\ce{R-OH}$', 'alcohol'],
            ['$\\ce{R\'O-}$', '$\\ce{R-OR\'}$', 'ether (Williamson synthesis, Unit 7)'],
            ['$\\ce{CN-}$', '$\\ce{R-C#N}$', 'nitrile (one more carbon)'],
            ['$\\ce{N3-}$', '$\\ce{R-N3}$', 'alkyl azide (reduced to an amine, Unit 12)'],
            ['$\\ce{HS-}$', '$\\ce{R-SH}$', 'thiol'],
            ['$\\ce{I-}$', '$\\ce{R-I}$', 'alkyl iodide (Finkelstein)'],
            ['$\\ce{R\'C#C-}$', '$\\ce{R-C#CR\'}$', 'alkyne (Unit 6: building carbon chains)'],
          ],
        },
        {
          type: 'derivation',
          title: 'Predicting an SN2 product',
          steps: [
            { tex: '\\ce{(R)-CH3CHBrCH2CH3 + NaCN ->[\\text{DMSO}] ?}', why: 'The problem: (R)-2-bromobutane with sodium cyanide in DMSO.' },
            { tex: '\\text{2° halide, strong nucleophile, polar aprotic solvent} \\implies \\text{SN2}', why: 'Classify the substrate, the nucleophile and the solvent. No carbocation pathway is favoured here.' },
            { tex: '\\ce{CN-}\\ \\text{replaces}\\ \\ce{Br-}\\ \\text{from the back} \\implies \\text{inversion}', why: 'One step, backside attack.' },
            { tex: '\\ce{(S)-CH3CH(CN)CH2CH3}', why: 'CN outranks ethyl just as Br did, so the inverted product is (S)-2-methylbutanenitrile.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'SN2 in your body',
          text: 'Cells methylate DNA, hormones and neurotransmitters by SN2. The methyl donor is S-adenosylmethionine (SAM), whose $\\ce{CH3}$ is attached to a positively charged sulfur, a superb leaving group; an enzyme holds a nitrogen or oxygen nucleophile in line behind the methyl carbon. Adrenaline is made this way from noradrenaline.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps of predicting an SN2 product in order.',
      lines: [
        'Classify the carbon bearing the leaving group (methyl, 1°, 2° or 3°)',
        'Check the nucleophile (strong?) and the solvent (polar aprotic?) to confirm SN2',
        'Replace the leaving group with the nucleophile on the same carbon',
        'If that carbon is a stereocenter, put the new group on the opposite wedge/hash',
        'Assign R/S to the product from scratch with the CIP rules',
      ],
      distractors: ['Form the carbocation and let the nucleophile attack either face'],
      explanation: 'Decide the mechanism first (substrate class, nucleophile, solvent), then do the bookkeeping: substitution at the same carbon, with inversion if it is a stereocenter, and a fresh R/S assignment because the letter can change for naming reasons. The distractor describes SN1, which goes through a planar carbocation.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'A student predicts the product of (R)-2-bromobutane with sodium hydroxide in DMSO. Tap the first incorrect line.',
      lines: [
        'The substrate is a secondary alkyl bromide; $\\ce{HO-}$ is a strong nucleophile and DMSO is polar aprotic, so the mechanism is SN2.',
        'The nucleophile attacks the carbon bearing Br from the side opposite the bromine.',
        'Because the hydroxyl group simply takes the place of the bromine, the product keeps the same spatial arrangement.',
        'The product is (R)-butan-2-ol.',
      ],
      errorLines: [3],
      explanation: 'Line 3 contradicts line 2: attack from the back flips the other three groups like an umbrella, so the arrangement is **inverted**, not retained. With OH taking Br\'s top priority and the other groups unchanged, the product is **(S)**-butan-2-ol. (In reality a 2° halide with hydroxide also gives some elimination product; the next lessons cover that competition.)',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'Which combination gives the **fastest** SN2 reaction?',
      options: [
        { text: '$\\ce{CH3CH2I}$ with $\\ce{NaCN}$ in DMSO', correct: true, why: 'Primary substrate, best halide leaving group, strong nucleophile, polar aprotic solvent: every factor favours SN2.' },
        { text: '$\\ce{CH3CH2Cl}$ with $\\ce{NaCN}$ in DMSO', why: 'Same except the leaving group: chloride leaves far more slowly than iodide.' },
        { text: '$\\ce{CH3CH2I}$ with $\\ce{NaCN}$ in methanol', why: 'Methanol hydrogen-bonds to cyanide and slows the attack considerably.' },
        { text: '$\\ce{(CH3)3CI}$ with $\\ce{NaCN}$ in DMSO', why: 'A tertiary substrate cannot undergo SN2; with a basic nucleophile it mainly eliminates.' },
      ],
      explanation: 'Each distractor changes one variable for the worse: a poorer leaving group, a protic solvent that cages the nucleophile, or a tertiary substrate whose backside is blocked. Check substrate, leaving group, nucleophile and solvent every time.',
    },
  ],
  takeaways: [
    'SN2: one concerted step; the nucleophile attacks the back of the C–LG carbon (into σ*) as the leaving group departs, through a trigonal-bipyramidal transition state.',
    'Stereochemistry: inversion of configuration (Walden inversion); draw the new group on the opposite wedge/hash and reassign R/S.',
    'Rate law: rate $= k_2[\\ce{RX}][\\ce{Nu-}]$, second order overall.',
    'Substrate: methyl > 1° > 2° ≫ 3° (no SN2); β-branching (neopentyl) and sp² carbons also block it.',
    'Nucleophiles: anions beat neutral conjugate acids; nucleophilicity follows basicity across a row but opposes it down a group in protic solvents; bulky bases are poor nucleophiles.',
    'Polar aprotic solvents (DMSO, DMF, acetone, acetonitrile) leave anions unsolvated and can speed SN2 by thousands of times.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 11 ("Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations") treats the SN2 reaction with the same substrate, nucleophile and solvent tables.',
    },
    {
      title: 'SN2 reaction (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/SN2_reaction',
      source: 'wikipedia',
      note: 'Mechanism, transition-state geometry and the factors that control the rate, with useful 3D images.',
    },
    {
      title: 'Walden inversion (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Walden_inversion',
      source: 'wikipedia',
      note: 'The history of the discovery of inversion and the Hughes–Ingold radio-iodide experiment.',
    },
    {
      title: 'Master Organic Chemistry',
      url: 'https://www.masterorganicchemistry.com/',
      source: 'other',
      note: 'Its SN2 series has excellent short posts on steric hindrance, nucleophilicity and solvent effects.',
    },
  ],
};
