import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  attack: "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"60\" y1=\"42\" x2=\"84.2\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"62.1\" y1=\"48.4\" x2=\"77.6\" y2=\"57.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"84.2\" y1=\"56\" x2=\"84.2\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"84.2\" y1=\"84\" x2=\"60\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"77.6\" y1=\"82.6\" x2=\"62.1\" y2=\"91.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"60\" y1=\"98\" x2=\"35.8\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"35.8\" y1=\"84\" x2=\"35.8\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"40.3\" y1=\"79\" x2=\"40.3\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"35.8\" y1=\"56\" x2=\"60\" y2=\"42\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"135\" y=\"45.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E⁺</text><path d=\"M72.1,49 Q94.6,24.8 124,40\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M124,40 L116,39.7 L119.1,33.6 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"165\" y1=\"70\" x2=\"225\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M225,70 L217.9,73.6 M225,70 L217.9,66.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"195\" y=\"62\" text-anchor=\"middle\" font-size=\"12\">slow</text><text x=\"195\" y=\"88\" text-anchor=\"middle\" font-size=\"12\">step 1</text><text x=\"195\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" class=\"t-red\">aromaticity lost</text><line x1=\"300\" y1=\"50\" x2=\"324.2\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"324.2\" y1=\"64\" x2=\"324.2\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"324.2\" y1=\"92\" x2=\"300\" y2=\"106\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"317.6\" y1=\"90.6\" x2=\"302.1\" y2=\"99.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"300\" y1=\"106\" x2=\"275.8\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"275.8\" y1=\"92\" x2=\"275.8\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"280.3\" y1=\"87\" x2=\"280.3\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"275.8\" y1=\"64\" x2=\"300\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"284.5\" y=\"33.3\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"300\" y1=\"50\" x2=\"289.1\" y2=\"34.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"315.5\" y=\"33.3\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"300\" y1=\"50\" x2=\"310.9\" y2=\"34.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"333.8\" cy=\"58.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"330.6\" y1=\"58.5\" x2=\"337\" y2=\"58.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"333.8\" y1=\"55.3\" x2=\"333.8\" y2=\"61.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"145\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">arenium ion (σ complex)</text><text x=\"420\" y=\"70\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">C1 is now sp³:</text><text x=\"420\" y=\"86\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">it carries H and E</text><line x1=\"80\" y1=\"196\" x2=\"102.5\" y2=\"209\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"102.5\" y1=\"209\" x2=\"102.5\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"102.5\" y1=\"235\" x2=\"80\" y2=\"248\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"96.2\" y1=\"233.4\" x2=\"81.8\" y2=\"241.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"80\" y1=\"248\" x2=\"57.5\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"57.5\" y1=\"235\" x2=\"57.5\" y2=\"209\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"230.3\" x2=\"62\" y2=\"213.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"57.5\" y1=\"209\" x2=\"80\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"64.5\" y=\"179.3\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"80\" y1=\"196\" x2=\"69.1\" y2=\"180.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"95.5\" y=\"179.3\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"80\" y1=\"196\" x2=\"90.9\" y2=\"180.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"112\" cy=\"203.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"108.8\" y1=\"203.5\" x2=\"115.2\" y2=\"203.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"112\" y1=\"200.3\" x2=\"112\" y2=\"206.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M91.3,241.5 Q84.8,224.8 102.5,222\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M102.5,222 L95.9,226.5 L94.8,219.7 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"130\" y1=\"222\" x2=\"185\" y2=\"222\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M185,222 L177.9,225.6 M185,222 L177.9,218.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M130,222 L137.1,218.4 M130,222 L137.1,225.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"196\" x2=\"262.5\" y2=\"209\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"262.5\" y1=\"209\" x2=\"262.5\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"258\" y1=\"213.7\" x2=\"258\" y2=\"230.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"262.5\" y1=\"235\" x2=\"240\" y2=\"248\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240\" y1=\"248\" x2=\"217.5\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"217.5\" y1=\"235\" x2=\"217.5\" y2=\"209\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"222\" y1=\"230.3\" x2=\"222\" y2=\"213.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"217.5\" y1=\"209\" x2=\"240\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"224.5\" y=\"179.3\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"240\" y1=\"196\" x2=\"229.1\" y2=\"180.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"255.5\" y=\"179.3\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"240\" y1=\"196\" x2=\"250.9\" y2=\"180.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"240\" cy=\"259\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"236.8\" y1=\"259\" x2=\"243.2\" y2=\"259\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"240\" y1=\"255.8\" x2=\"240\" y2=\"262.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M217.5,222 Q211,238.8 228.7,241.5\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M228.7,241.5 L221.1,243.8 L222.1,237 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"290\" y1=\"222\" x2=\"345\" y2=\"222\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M345,222 L337.9,225.6 M345,222 L337.9,218.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M290,222 L297.1,218.4 M290,222 L297.1,225.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"196\" x2=\"422.5\" y2=\"209\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"422.5\" y1=\"209\" x2=\"422.5\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"418\" y1=\"213.7\" x2=\"418\" y2=\"230.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"422.5\" y1=\"235\" x2=\"400\" y2=\"248\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"400\" y1=\"248\" x2=\"377.5\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"398.2\" y1=\"241.8\" x2=\"383.8\" y2=\"233.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"377.5\" y1=\"235\" x2=\"377.5\" y2=\"209\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"377.5\" y1=\"209\" x2=\"400\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"384.5\" y=\"179.3\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"400\" y1=\"196\" x2=\"389.1\" y2=\"180.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"415.5\" y=\"179.3\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"400\" y1=\"196\" x2=\"410.9\" y2=\"180.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"368\" cy=\"203.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"364.8\" y1=\"203.5\" x2=\"371.2\" y2=\"203.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"368\" y1=\"200.3\" x2=\"368\" y2=\"206.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><rect x=\"30\" y=\"165\" width=\"420\" height=\"100\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"462\" y=\"215\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">+ on C2,</text><text x=\"462\" y=\"229\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">C4, C6</text></svg>",
  deprot: "<svg viewBox=\"0 0 520 140\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"52\" x2=\"104.2\" y2=\"66\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"104.2\" y1=\"66\" x2=\"104.2\" y2=\"94\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"104.2\" y1=\"94\" x2=\"80\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"97.6\" y1=\"92.6\" x2=\"82.1\" y2=\"101.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"80\" y1=\"108\" x2=\"55.8\" y2=\"94\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"55.8\" y1=\"94\" x2=\"55.8\" y2=\"66\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"60.3\" y1=\"89\" x2=\"60.3\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"55.8\" y1=\"66\" x2=\"80\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"64.5\" y=\"35.3\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"80\" y1=\"52\" x2=\"69.1\" y2=\"36.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"95.5\" y=\"35.3\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"80\" y1=\"52\" x2=\"90.9\" y2=\"36.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"113.8\" cy=\"60.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110.6\" y1=\"60.5\" x2=\"117\" y2=\"60.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"113.8\" y1=\"57.3\" x2=\"113.8\" y2=\"63.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"22\" y=\"35.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">B:</text><path d=\"M30,26 Q43.2,11 58.5,23.9\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M58.5,23.9 L50.8,21.8 L55.2,16.6 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M72.3,40.9 Q68.9,67.2 94.5,60.4\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M94.5,60.4 L88.4,65.6 L86.7,59 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"160\" y1=\"80\" x2=\"230\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M230,80 L222.9,83.6 M230,80 L222.9,76.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"195\" y=\"72\" text-anchor=\"middle\" font-size=\"12\">fast</text><text x=\"195\" y=\"98\" text-anchor=\"middle\" font-size=\"12\">step 2</text><line x1=\"310\" y1=\"57\" x2=\"334.2\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"334.2\" y1=\"71\" x2=\"334.2\" y2=\"99\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"329.7\" y1=\"76\" x2=\"329.7\" y2=\"94\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"334.2\" y1=\"99\" x2=\"310\" y2=\"113\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"310\" y1=\"113\" x2=\"285.8\" y2=\"99\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"307.9\" y1=\"106.6\" x2=\"292.4\" y2=\"97.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"285.8\" y1=\"99\" x2=\"285.8\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"285.8\" y1=\"71\" x2=\"310\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"292.4\" y1=\"72.4\" x2=\"307.9\" y2=\"63.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"310\" y=\"40.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"310\" y1=\"57\" x2=\"310\" y2=\"43\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"370\" y=\"90\" text-anchor=\"start\" font-size=\"15\">+  B–H⁺</text><text x=\"310\" y=\"132\" text-anchor=\"middle\" font-size=\"12\" class=\"t-green\">aromatic ring restored</text></svg>",
  br2: "<svg viewBox=\"0 0 520 120\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"30\" y=\"65.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">Br</text><text x=\"75\" y=\"65.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">Br</text><line x1=\"40.5\" y1=\"60\" x2=\"64.5\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"113\" y=\"65.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-gray\">FeBr₃</text><circle cx=\"78.2\" cy=\"48\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"71.8\" cy=\"48\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M75,46 Q99.2,31 122,48\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M122,48 L114.2,46.4 L118.2,40.9 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"175\" y1=\"60\" x2=\"225\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M225,60 L217.9,63.6 M225,60 L217.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"245\" y=\"65.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">Br</text><text x=\"290\" y=\"65.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">Br</text><text x=\"328\" y=\"65.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-gray\">FeBr₃</text><line x1=\"255.5\" y1=\"60\" x2=\"279.5\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"300.5\" y1=\"60\" x2=\"326\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"290\" cy=\"44\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"286.8\" y1=\"44\" x2=\"293.2\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"290\" y1=\"40.8\" x2=\"290\" y2=\"47.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><circle cx=\"385\" cy=\"48\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"381.8\" y1=\"48\" x2=\"388.2\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">weakened, polarized Br–Br: the terminal Br acts as “Br⁺”</text></svg>",
  fc_alk: "<svg viewBox=\"0 0 520 250\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,10)\"><text x=\"17.22\" y=\"45.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Cl</text><line x1=\"86.18\" y1=\"29\" x2=\"65.39\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.39\" y1=\"41\" x2=\"44.61\" y2=\"29\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.61\" y1=\"29\" x2=\"31.43\" y2=\"36.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"55\" y=\"94\" text-anchor=\"middle\" font-size=\"13\">1-chloropropane</text><g transform=\"translate(165,10)\"><text x=\"19.16\" y=\"45.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">C</text><text x=\"30.27\" y=\"40\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\">+</text><line x1=\"65.78\" y1=\"41\" x2=\"45\" y2=\"29\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45\" y1=\"29\" x2=\"35.76\" y2=\"34.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"210\" y=\"94\" text-anchor=\"middle\" font-size=\"13\">1° (as AlCl₄⁻ complex)</text><g transform=\"translate(345,10)\"><text x=\"39.95\" y=\"33.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">C</text><text x=\"51.05\" y=\"28\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\">+</text><line x1=\"65.78\" y1=\"41\" x2=\"51.05\" y2=\"32.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.95\" y1=\"32.5\" x2=\"24.22\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"390\" y=\"94\" text-anchor=\"middle\" font-size=\"13\">2° isopropyl cation</text><g transform=\"translate(150,135)\"><line x1=\"70\" y1=\"45\" x2=\"49.22\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.98\" y1=\"46.84\" x2=\"49.63\" y2=\"37.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.43\" y1=\"45\" x2=\"28.43\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"32.03\" y1=\"47.56\" x2=\"32.03\" y2=\"66.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"49.22\" y1=\"81\" x2=\"70\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"49.63\" y1=\"76.6\" x2=\"65.98\" y2=\"67.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"111.57\" y1=\"45\" x2=\"90.78\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"90.78\" y1=\"33\" x2=\"90.78\" y2=\"9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"90.78\" y1=\"33\" x2=\"70\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"49.22\" y1=\"33\" x2=\"28.43\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.43\" y1=\"69\" x2=\"49.22\" y2=\"81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70\" y1=\"45\" x2=\"70\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"220\" y=\"239\" text-anchor=\"middle\" font-size=\"13\">isopropylbenzene (cumene), major</text><g transform=\"translate(340,135)\"><line x1=\"74.61\" y1=\"33\" x2=\"53.82\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.59\" y1=\"34.84\" x2=\"54.24\" y2=\"25.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.04\" y1=\"33\" x2=\"33.04\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"36.64\" y1=\"35.56\" x2=\"36.64\" y2=\"54.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.82\" y1=\"69\" x2=\"74.61\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"54.24\" y1=\"64.6\" x2=\"70.59\" y2=\"55.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"136.96\" y1=\"21\" x2=\"116.18\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"116.18\" y1=\"33\" x2=\"95.39\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"95.39\" y1=\"21\" x2=\"74.61\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.82\" y1=\"21\" x2=\"33.04\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.04\" y1=\"57\" x2=\"53.82\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"74.61\" y1=\"33\" x2=\"74.61\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"425\" y=\"239\" text-anchor=\"middle\" font-size=\"13\">propylbenzene, minor</text><g transform=\"translate(0,135)\"><line x1=\"19.22\" y1=\"33\" x2=\"19.22\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.82\" y1=\"35.56\" x2=\"22.82\" y2=\"54.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40\" y1=\"69\" x2=\"60.78\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.42\" y1=\"64.6\" x2=\"56.77\" y2=\"55.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.78\" y1=\"33\" x2=\"40\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.77\" y1=\"34.84\" x2=\"40.42\" y2=\"25.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"19.22\" y1=\"57\" x2=\"40\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.78\" y1=\"57\" x2=\"60.78\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"19.22\" y1=\"33\" x2=\"40\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"110\" y1=\"45\" x2=\"165\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M165,45 L157.9,48.6 M165,45 L157.9,41.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"137.5\" y=\"37\" text-anchor=\"middle\" font-size=\"12\">AlCl₃</text><line x1=\"265\" y1=\"45\" x2=\"340\" y2=\"45\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M340,45 L332.9,48.6 M340,45 L332.9,41.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"302.5\" y=\"37\" text-anchor=\"middle\" font-size=\"12\">1,2-H⁻ shift</text><text x=\"302.5\" y=\"63\" text-anchor=\"middle\" font-size=\"12\">(fast)</text><line x1=\"90\" y1=\"180\" x2=\"150\" y2=\"180\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M150,180 L142.9,183.6 M150,180 L142.9,176.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"300\" y=\"185\" text-anchor=\"middle\" font-size=\"18\">+</text></svg>",
  fc_acyl: "<svg viewBox=\"0 0 520 250\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,10)\"><text x=\"38.39\" y=\"26.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Cl</text><text x=\"18.77\" y=\"62.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"45\" y1=\"43.92\" x2=\"29.76\" y2=\"52.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"46.8\" y1=\"47.04\" x2=\"31.56\" y2=\"55.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.78\" y1=\"58\" x2=\"45\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45\" y1=\"46\" x2=\"45\" y2=\"29\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"45\" y=\"104\" text-anchor=\"middle\" font-size=\"13\">acetyl chloride</text><g transform=\"translate(160,10)\"><text x=\"34.95\" y=\"38.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">C</text><text x=\"46.05\" y=\"33\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\">+</text><text x=\"13.77\" y=\"50.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"33.05\" y1=\"35.94\" x2=\"24.76\" y2=\"40.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.85\" y1=\"39.05\" x2=\"26.56\" y2=\"43.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.78\" y1=\"46\" x2=\"46.05\" y2=\"37.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(270,10)\"><text x=\"63.55\" y=\"44.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"75.45\" y=\"39\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">+</text><line x1=\"21\" y1=\"40\" x2=\"45\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45\" y1=\"40\" x2=\"62.55\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45\" y1=\"43.6\" x2=\"62.55\" y2=\"43.6\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45\" y1=\"36.4\" x2=\"62.55\" y2=\"36.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(0,135)\"><line x1=\"19.22\" y1=\"33\" x2=\"19.22\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.82\" y1=\"35.56\" x2=\"22.82\" y2=\"54.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40\" y1=\"69\" x2=\"60.78\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.42\" y1=\"64.6\" x2=\"56.77\" y2=\"55.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.78\" y1=\"33\" x2=\"40\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.77\" y1=\"34.84\" x2=\"40.42\" y2=\"25.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"19.22\" y1=\"57\" x2=\"40\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.78\" y1=\"57\" x2=\"60.78\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"19.22\" y1=\"33\" x2=\"40\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(140,130)\"><text x=\"85.34\" y=\"16.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"92.58\" y1=\"36.54\" x2=\"92.58\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"88.98\" y1=\"36.54\" x2=\"88.98\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70\" y1=\"47.5\" x2=\"49.22\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.98\" y1=\"49.34\" x2=\"49.63\" y2=\"39.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.43\" y1=\"47.5\" x2=\"28.43\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"32.03\" y1=\"50.06\" x2=\"32.03\" y2=\"68.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"49.22\" y1=\"83.5\" x2=\"70\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"49.63\" y1=\"79.1\" x2=\"65.98\" y2=\"69.66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"111.57\" y1=\"47.5\" x2=\"90.78\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"90.78\" y1=\"35.5\" x2=\"70\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"49.22\" y1=\"35.5\" x2=\"28.43\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.43\" y1=\"71.5\" x2=\"49.22\" y2=\"83.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70\" y1=\"47.5\" x2=\"70\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"210\" y=\"239\" text-anchor=\"middle\" font-size=\"13\">acetophenone</text><g transform=\"translate(380,135)\"><line x1=\"65\" y1=\"33\" x2=\"44.22\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.98\" y1=\"34.84\" x2=\"44.63\" y2=\"25.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.43\" y1=\"33\" x2=\"23.43\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"27.03\" y1=\"35.56\" x2=\"27.03\" y2=\"54.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.22\" y1=\"69\" x2=\"65\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.63\" y1=\"64.6\" x2=\"60.98\" y2=\"55.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"106.57\" y1=\"33\" x2=\"85.78\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.78\" y1=\"21\" x2=\"65\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.22\" y1=\"21\" x2=\"23.43\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.43\" y1=\"57\" x2=\"44.22\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65\" y1=\"33\" x2=\"65\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"445\" y=\"239\" text-anchor=\"middle\" font-size=\"13\">ethylbenzene</text><line x1=\"92\" y1=\"50\" x2=\"155\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M155,50 L147.9,53.6 M155,50 L147.9,46.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"123.5\" y=\"42\" text-anchor=\"middle\" font-size=\"12\">AlCl₃</text><text x=\"123.5\" y=\"68\" text-anchor=\"middle\" font-size=\"12\">− AlCl₄⁻</text><line x1=\"240\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M270,50 L262.9,53.6 M270,50 L262.9,46.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M240,50 L247.1,46.4 M240,50 L247.1,53.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"180\" x2=\"140\" y2=\"180\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M140,180 L132.9,183.6 M140,180 L132.9,176.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"180\" x2=\"375\" y2=\"180\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M375,180 L367.9,183.6 M375,180 L367.9,176.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"332.5\" y=\"172\" text-anchor=\"middle\" font-size=\"12\">Zn(Hg), HCl</text><text x=\"332.5\" y=\"198\" text-anchor=\"middle\" font-size=\"12\">(Clemmensen)</text><text x=\"400\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">acylium ion:</text><text x=\"400\" y=\"61\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">no rearrangement</text></svg>",
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-eas',
  title: 'Electrophilic Aromatic Substitution',
  summary: 'One mechanism, many reactions: how an aromatic ring attacks a strong electrophile, forms a resonance-stabilized arenium ion and then loses H⁺ to become aromatic again, applied to halogenation, nitration, sulfonation and Friedel–Crafts alkylation and acylation.',
  minutes: 20,
  objectives: [
    'Draw the two-step mechanism of electrophilic aromatic substitution, including all three resonance structures of the arenium ion',
    'Explain why aromatic rings undergo substitution rather than addition, using an energy diagram',
    'Give the reagents and the actual electrophile for halogenation, nitration and sulfonation, and the role of the Lewis or Brønsted acid',
    'Predict Friedel–Crafts alkylation products, including carbocation rearrangements, and explain polyalkylation and the reactions\' limitations',
    'Use Friedel–Crafts acylation followed by reduction to make straight-chain alkylbenzenes',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'One mechanism for all: attack, then restore',
      blocks: [
        {
          type: 'p',
          text: 'An aromatic ring is a **nucleophile**: its six π electrons sit above and below the ring, exposed. But it is a weak one, because using two of them destroys aromaticity. So benzene only reacts with **strong [[ochem-electrophile|electrophiles]]**, usually generated with a [[gchem-lewis-acid|Lewis acid]] or a strong Brønsted acid. Every reaction in this lesson follows the same two steps; only the electrophile, written $\\ce{E+}$, changes. This is [[ochem-eas|electrophilic aromatic substitution]] (EAS).',
        },
        {
          type: 'figure',
          svg: FIG.attack,
          alt: 'Step 1, slow: a curved arrow from a π bond of benzene to an electrophile E+. Aromaticity is lost and an arenium ion (σ complex) forms: C1 is now sp3 and carries both H and E, with a positive charge on C2. Below, in a dashed box, the three resonance structures of the arenium ion, with curved arrows relating them: positive charge on C2, then C4, then C6.',
          caption: 'Step 1: two π electrons form a σ bond to $\\ce{E+}$. The carbon that bonded becomes sp³, breaking the aromatic loop. The resulting cation, the [[ochem-arenium-ion|arenium ion]] or σ complex, is allylic twice over: the + is shared by the two **ortho** carbons and the **para** carbon (C2, C4, C6), never the meta ones.',
        },
        {
          type: 'figure',
          svg: FIG.deprot,
          alt: 'Step 2, fast: a base B: removes the H on the sp3 carbon (curved arrow from the base to H); the C–H bond electrons move into the ring (curved arrow from the C–H bond to the C1–C2 bond). Product: a benzene ring carrying E, aromatic ring restored, plus B–H+.',
          caption: 'Step 2: a weak base removes the proton from the sp³ carbon, the one that carries E. The C–H electrons fall back into the ring and aromaticity returns. Net result: H replaced by E.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why substitution, not addition?',
          text: 'The arenium ion is a carbocation, just like the one in HBr addition to an alkene. With an alkene, the nucleophile adds to the cation. Here, adding $\\ce{Br-}$ to C2 would give a cyclohexadiene, a non-aromatic product that has permanently lost about 150 kJ/mol of aromatic stabilization. Losing $\\ce{H+}$ instead gives back the aromatic ring. Both paths start from the same intermediate; the substitution path leads to a far more stable product and has a tiny barrier.',
        },
        {
          type: 'graph',
          x: [0, 4.3],
          y: [-40, 150],
          xStep: 1,
          yStep: 20,
          functions: [
            { expr: 'i*(1-cos(pi*x/2))/2 + (b - i/2)*sin(pi*x/2)^2', label: 'step 1: ring attacks E⁺', color: 'blue', domain: [0, 2] },
            { expr: 'i + (-20-i)*((1-cos(pi*(x-2)/2))/2)^2 + 15*sin(pi*(x-2)/2)^2', label: 'step 2: lose H⁺ (substitution)', color: 'green', domain: [2, 4] },
            { expr: 'i + (30-i)*((1-cos(pi*(x-2)/2))/2)^2 + 30*sin(pi*(x-2)/2)^2', label: 'add Br⁻ instead (addition)', color: 'red', dashed: true, domain: [2, 4] },
          ],
          points: [
            { x: 0, y: 0, label: 'ArH + E⁺' },
            { x: 2, y: 'i', label: 'arenium ion' },
            { x: 4, y: -20, label: 'ArE', color: 'green' },
            { x: 4, y: 30, label: 'adduct', color: 'red' },
          ],
          sliders: [
            { name: 'b', min: 95, max: 140, step: 1, value: 115, label: 'barrier of step 1 (kJ/mol)' },
            { name: 'i', min: 40, max: 90, step: 1, value: 75, label: 'arenium ion energy (kJ/mol)' },
          ],
          caption: 'A schematic energy diagram (kJ/mol). Step 1 has the big barrier: it is the [[gchem-rate-determining-step|rate-determining step]], because it sacrifices aromaticity. From the arenium ion ([[gchem-reaction-intermediate|intermediate]]), losing $\\ce{H+}$ (green) is fast and downhill; adding a nucleophile (red, dashed) leads uphill to a non-aromatic adduct. Anything that stabilizes the arenium ion lowers the first barrier: that is the key to the next lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'order',
      prompt: 'Put the events of an electrophilic aromatic substitution in order.',
      lines: [
        'An acid catalyst generates the strong electrophile $\\ce{E+}$ (or a polarized $\\ce{E-X}$ complex)',
        'A π bond of the ring attacks $\\ce{E+}$; this slow step breaks the aromaticity',
        'The arenium ion forms, with its positive charge shared by the two ortho carbons and the para carbon',
        'A base removes $\\ce{H+}$ from the sp³ carbon that carries E',
        'The C–H electrons return to the ring and aromaticity is restored',
      ],
      distractors: ['A halide ion adds to the positive carbon of the arenium ion, giving the final product'],
      explanation: 'Electrophile generation, rate-determining attack by the ring, a resonance-stabilized cationic intermediate, then fast deprotonation. The distractor describes **addition**, which is what an alkene does with the same kind of cation. For an arene, losing $\\ce{H+}$ wins because it restores the aromatic ring, worth about 150 kJ/mol.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Halogenation',
      blocks: [
        {
          type: 'p',
          text: 'Bromine alone does not react with benzene: $\\ce{Br2}$ is not electrophilic enough to justify breaking aromaticity. Add a Lewis acid catalyst such as $\\ce{FeBr3}$ (or iron filings, which react with $\\ce{Br2}$ to make it) and the reaction runs at room temperature.',
        },
        {
          type: 'figure',
          svg: FIG.br2,
          alt: 'A lone pair on one Br of Br2 attacks FeBr3 (curved arrow), giving Br–Br+–FeBr3−: the bromine attached to iron is positive, the iron complex negative, and the terminal bromine (purple) acts as Br+.',
          caption: 'The Lewis acid accepts a lone pair from one bromine. The Br–Br bond becomes weak and strongly polarized, and the outer bromine is delivered to the ring as if it were $\\ce{Br+}$, with $\\ce{FeBr4-}$ as the leaving group.',
        },
        {
          type: 'math',
          tex: '\\ce{C6H6 + Br2 ->[\\text{FeBr}_3] C6H5Br + HBr}',
          caption: 'In step 2 the base is $\\ce{FeBr4-}$: it takes the proton, releasing $\\ce{HBr}$ and regenerating $\\ce{FeBr3}$, so the iron salt is a true [[gchem-catalyst|catalyst]].',
        },
        {
          type: 'table',
          headers: ['Halogen', 'Reagents', 'Notes'],
          rows: [
            ['Cl', '$\\ce{Cl2}$, $\\ce{FeCl3}$ or $\\ce{AlCl3}$', 'same mechanism as bromination'],
            ['Br', '$\\ce{Br2}$, $\\ce{FeBr3}$', 'the textbook example'],
            ['I', '$\\ce{I2}$ + an oxidant ($\\ce{HNO3}$ or $\\ce{CuCl2}$)', '$\\ce{I2}$ is too unreactive; the oxidant generates an "$\\ce{I+}$" species'],
            ['F', 'not done directly', '$\\ce{F2}$ reacts violently and unselectively; aryl fluorides are made by other routes'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Match the Lewis acid to the halogen: $\\ce{FeBr3}$ with $\\ce{Br2}$, $\\ce{FeCl3}$ with $\\ce{Cl2}$. Mixing them ($\\ce{Br2}/\\ce{FeCl3}$) scrambles halides and gives mixtures of chloro and bromo products.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Spotting it in a mass spectrum',
          text: 'Bromine is about 50% $^{79}$Br and 50% $^{81}$Br, so a monobrominated product shows two molecular-ion peaks of nearly equal height, 2 mass units apart. Chlorine (75% $^{35}$Cl, 25% $^{37}$Cl) gives a 3:1 pair. You used these patterns in the mass spectrometry lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'What is the role of $\\ce{FeBr3}$ in the bromination of benzene?',
      options: [
        { text: 'It is a Lewis acid that accepts a lone pair from $\\ce{Br2}$, polarizing the Br–Br bond so one bromine becomes strongly electrophilic', correct: true, why: 'Iron has an empty orbital; bonding to one Br makes that Br positive and turns the other into a "$\\ce{Br+}$" that the weakly nucleophilic ring can attack.' },
        { text: 'It is a base that removes $\\ce{H+}$ from benzene first, making a phenyl anion that attacks $\\ce{Br2}$', why: 'Aromatic C–H bonds have pKa ≈ 43; no such anion forms. The ring reacts as a π nucleophile and loses $\\ce{H+}$ only **after** forming the arenium ion.' },
        { text: 'It supplies $\\ce{Br-}$, which adds to benzene', why: 'A bromide ion is a nucleophile, and benzene is also a nucleophile; they do not react with each other.' },
        { text: 'It is consumed as the source of the bromine atom in the product', why: '$\\ce{FeBr3}$ is regenerated when $\\ce{FeBr4-}$ takes the proton in step 2, so it is a catalyst, not a reagent.' },
      ],
      explanation: 'Benzene is too weak a nucleophile to attack neutral $\\ce{Br2}$. $\\ce{FeBr3}$, a Lewis acid, binds to one Br and creates $\\ce{Br^{δ+}-Br^{+}-FeBr3^{-}}$, effectively a source of $\\ce{Br+}$. After the ring attacks, $\\ce{FeBr4-}$ removes the proton, giving $\\ce{HBr}$ and regenerating $\\ce{FeBr3}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'The product of benzene bromination, bromobenzene ($\\ce{C6H5Br}$), shows two molecular-ion peaks of almost equal height in its mass spectrum. At which $m/z$ values? (Use C = 12, H = 1, and the isotopes $^{79}$Br and $^{81}$Br; enter both values.)',
      hint: 'Six carbons, five hydrogens, and either bromine isotope.',
      label: '$m/z =$',
      answer: ['156', '158'],
      explanation: '$6(12) + 5(1) = 77$ for the phenyl group. Add $^{79}$Br: $77 + 79 = 156$; add $^{81}$Br: $77 + 81 = 158$. The two isotopes are nearly equally abundant (50.7% and 49.3%), so the M and M+2 peaks are almost the same height, the signature of one bromine atom. (Losing Br gives the phenyl cation at $m/z$ 77, usually a strong fragment.)',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Nitration and sulfonation',
      blocks: [
        {
          type: 'heading',
          text: 'Nitration: the nitronium ion',
        },
        {
          type: 'p',
          text: 'Nitric acid alone nitrates benzene very slowly. Mixed with concentrated sulfuric acid, the stronger acid, it generates the true electrophile, the linear [[ochem-nitronium-ion|nitronium ion]] $\\ce{NO2+}$ ($\\ce{O=N+=O}$):',
        },
        {
          type: 'derivation',
          title: 'Making the electrophile',
          steps: [
            { tex: '\\ce{HO-NO2 + H2SO4 <=> H2O+-NO2 + HSO4-}', why: 'Sulfuric acid (pKa ≈ −3) protonates the OH group of nitric acid. Protonation turns a poor leaving group ($\\ce{OH-}$) into a good one ($\\ce{H2O}$), the same trick as in alcohol dehydration.' },
            { tex: '\\ce{H2O+-NO2 -> NO2+ + H2O}', why: 'Water leaves, giving the nitronium ion. Its nitrogen carries a full positive charge and accepts electrons from the ring as one N=O π bond breaks.' },
            { tex: '\\ce{C6H6 + NO2+ -> [C6H6NO2]+ ->[\\text{−H}^+] C6H5NO2}', why: 'The ring attacks nitrogen to form the arenium ion; $\\ce{HSO4-}$ or water removes $\\ce{H+}$ from the sp³ carbon.' },
          ],
          result: 'Benzene + $\\ce{HNO3}/\\ce{H2SO4}$ → nitrobenzene.',
        },
        {
          type: 'p',
          text: 'Nitration matters mostly as a way to put **nitrogen** on a ring. The nitro group is easily reduced to an amino group, giving anilines, the starting points for dyes, sulfa drugs and paracetamol:',
        },
        {
          type: 'math',
          tex: '\\ce{C6H5NO2 ->[\\text{1. Fe or Sn, HCl}][\\text{2. NaOH}] C6H5NH2} \\qquad \\text{or} \\qquad \\ce{C6H5NO2 ->[\\text{H}_2,\\ \\text{Pd/C}] C6H5NH2}',
          caption: 'Reduction of an aromatic nitro group to an amine (aniline). Remember this pair: it is the standard way to make $\\ce{ArNH2}$.',
        },
        {
          type: 'heading',
          text: 'Sulfonation: reversible',
        },
        {
          type: 'p',
          text: 'Fuming sulfuric acid ($\\ce{H2SO4}$ containing dissolved $\\ce{SO3}$) converts benzene to benzenesulfonic acid, $\\ce{C6H5SO3H}$. The electrophile is $\\ce{SO3}$ (or its protonated form $\\ce{HSO3+}$): sulfur, bonded to three electronegative oxygens, is strongly electron-poor.',
        },
        {
          type: 'math',
          tex: '\\ce{C6H6 + SO3 <=>[\\text{H}_2\\text{SO}_4] C6H5SO3H}',
          caption: 'Unlike the other EAS reactions, sulfonation is easily **reversed**: heating the sulfonic acid in dilute aqueous acid removes the $\\ce{SO3H}$ group (Le Chatelier: lots of water drives the equilibrium left).',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Reversibility makes $\\ce{SO3H}$ a useful **blocking group**: install it to occupy a position you want to keep free, do another substitution elsewhere, then remove it with dilute acid and heat. The next lesson uses this in synthesis planning.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Everyday sulfonic acids',
          text: 'Sodium dodecylbenzenesulfonate, made by sulfonating a long-chain alkylbenzene, is a main ingredient of laundry detergents: a greasy tail and a very polar sulfonate head. And the first synthetic antibacterial drugs, the sulfa drugs, are sulfonamides of aniline.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Complete the table of electrophiles.',
      template: 'Nitration: ___ with $\\ce{H2SO4}$ generates the electrophile ___. Sulfonation: ___ in concentrated sulfuric acid. Chlorination: $\\ce{Cl2}$ with the Lewis acid ___.',
      blanks: [{ answers: ['$\\ce{HNO3}$'] }, { answers: ['$\\ce{NO2+}$'] }, { answers: ['$\\ce{SO3}$'] }, { answers: ['$\\ce{FeCl3}$'] }],
      wordBank: ['$\\ce{HNO3}$', '$\\ce{NO2+}$', '$\\ce{NO2-}$', '$\\ce{SO3}$', '$\\ce{SO2}$', '$\\ce{FeCl3}$', '$\\ce{NaCl}$'],
      explanation: 'Sulfuric acid protonates nitric acid, which loses water to give the nitronium **cation** $\\ce{NO2+}$ (the nitrite **anion** $\\ce{NO2-}$ is a nucleophile, not an electrophile). Sulfonation uses sulfur trioxide, $\\ce{SO3}$, whose sulfur is very electron-poor. Chlorination needs a Lewis acid such as $\\ce{FeCl3}$ (or $\\ce{AlCl3}$) to polarize $\\ce{Cl2}$; $\\ce{NaCl}$ has no empty orbital to accept a lone pair.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Friedel–Crafts alkylation and its problems',
      blocks: [
        {
          type: 'p',
          text: 'In 1877 Charles Friedel and James Crafts found that an alkyl halide plus $\\ce{AlCl3}$ attaches an alkyl group to an aromatic ring, making a new **C–C bond**. $\\ce{AlCl3}$ pulls off the halide to make a carbocation (or, for primary halides, a strongly polarized $\\ce{R^{δ+}\\bond{...}Cl\\bond{...}AlCl3^{δ-}}$ complex), and the ring attacks it:',
        },
        {
          type: 'math',
          tex: '\\ce{C6H6 + (CH3)3C-Cl ->[\\text{AlCl}_3] C6H5-C(CH3)3 + HCl}',
          caption: '*tert*-Butyl chloride gives a stable tertiary cation and clean *tert*-butylbenzene.',
        },
        {
          type: 'p',
          text: 'That is the good news. [[ochem-friedel-crafts|Friedel–Crafts alkylation]] has four well-known problems, and every one follows from the mechanism:',
        },
        {
          type: 'figure',
          svg: FIG.fc_alk,
          alt: 'Top: 1-chloropropane with AlCl3 gives a primary propyl cation, drawn as its AlCl4− complex, which undergoes a fast 1,2-hydride shift to the secondary isopropyl cation. Bottom: benzene reacts to give isopropylbenzene (cumene) as the major product plus propylbenzene as the minor product.',
          caption: '**Problem 1: [[ochem-carbocation-rearrangement|rearrangement]].** A 1,2-hydride shift turns the incipient primary cation into the more stable secondary one before the ring can trap it, so 1-chloropropane gives mostly isopropylbenzene. Any carbocation that can rearrange to a more stable one (as you saw in SN1 and E1) will.',
        },
        {
          type: 'list',
          items: [
            '**Problem 2: polyalkylation.** An alkyl group donates electron density to the ring, making the product **more** reactive than benzene. The monoalkylated product competes for the electrophile and gets alkylated again. The usual fix is a large excess of the arene.',
            '**Problem 3: deactivated rings fail.** Rings carrying strongly electron-withdrawing groups ($\\ce{-NO2}$, $\\ce{-C=O}$, $\\ce{-SO3H}$, $\\ce{-CN}$, $\\ce{-NR3+}$) are too poor as nucleophiles. Nitrobenzene is so unreactive that it is sometimes used as the **solvent** for Friedel–Crafts reactions.',
            '**Problem 4: amines poison the catalyst.** $\\ce{-NH2}$, $\\ce{-NHR}$ and $\\ce{-NR2}$ groups are Lewis bases: they bind $\\ce{AlCl3}$ and become positively charged, strongly withdrawing groups.',
            'Also: **aryl and vinyl halides** do not react, because aryl and vinyl cations are far too unstable to form.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Industrial version',
          text: 'Any carbocation source works, not just alkyl halides. The cumene process alkylates benzene with propene and an acid catalyst: protonating propene gives the isopropyl cation directly. Cumene is then oxidized and cleaved to phenol and acetone, millions of tons a year of both.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Benzene (in excess) is treated with 1-chlorobutane and $\\ce{AlCl3}$. What is the **major** product?',
      options: [
        { text: 'Butylbenzene, $\\ce{C6H5CH2CH2CH2CH3}$', why: 'This would require the primary butyl group to be transferred without rearrangement. It forms, but only as the minor product.' },
        { text: '(Butan-2-yl)benzene (*sec*-butylbenzene), $\\ce{C6H5CH(CH3)CH2CH3}$', correct: true, why: 'A 1,2-hydride shift converts the incipient primary butyl cation into the secondary butan-2-yl cation, which the ring traps.' },
        { text: '*tert*-Butylbenzene, $\\ce{C6H5C(CH3)3}$', why: 'A tertiary cation would need a rearrangement of the carbon skeleton, not just a hydride shift. From an unbranched chain, the best a hydride shift can do is secondary.' },
        { text: 'No reaction, because primary alkyl halides do not ionize', why: '$\\ce{AlCl3}$ activates primary halides as polarized complexes, and the shift to a secondary cation happens readily. The reaction works; it just rearranges.' },
      ],
      explanation: 'Follow the cation. $\\ce{AlCl3}$ removes $\\ce{Cl-}$ from 1-chlorobutane; as positive charge builds on C1, a hydride on C2 shifts over, putting the + on secondary C2. The ring attacks C2, so the phenyl group ends up on the second carbon of the chain: (butan-2-yl)benzene. The excess benzene limits polyalkylation.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'An alkylation of 10.0 g of benzene (78.11 g/mol) with 1-chloropropane and $\\ce{AlCl3}$ converts all of the benzene to monoalkylated products in a 70:30 ratio of isopropylbenzene (120.19 g/mol) to propylbenzene. What mass of isopropylbenzene forms?',
      hint: 'Moles of benzene, times 0.70, times the molar mass of isopropylbenzene.',
      label: 'mass $=$',
      unit: 'g',
      answer: '10.0/78.11*0.70*120.19',
      answerTex: '10.8\\ \\text{g}',
      tolerance: 0.05,
      explanation: '$n(\\ce{C6H6}) = 10.0 / 78.11 = 0.1280$ mol. 70% of that becomes isopropylbenzene: $0.0896$ mol. Mass $= 0.0896 \\times 120.19 = 10.77$ g. The other 30% (4.62 g) is propylbenzene, a constitutional isomer with nearly the same boiling point: a separation headache, and a reason to use the acylation route in the next card when you want the straight chain.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Friedel–Crafts acylation: the clean alternative',
      blocks: [
        {
          type: 'p',
          text: 'Use an acyl chloride ($\\ce{RCOCl}$) or acid anhydride instead of an alkyl halide, and $\\ce{AlCl3}$ produces an [[ochem-acylium-ion|acylium ion]], $\\ce{R-C#O+}$. The ring attacks it in the usual two steps and the product is an aryl ketone: [[ochem-friedel-crafts|Friedel–Crafts acylation]].',
        },
        {
          type: 'figure',
          svg: FIG.fc_acyl,
          alt: 'Top: acetyl chloride with AlCl3 loses AlCl4− to give the acylium ion, drawn as two resonance structures: a carbocation C+=O and a C≡O+ triple bond with positive oxygen; acylium ion, no rearrangement. Bottom: benzene gives acetophenone, which Zn(Hg), HCl (Clemmensen reduction) converts to ethylbenzene.',
          caption: 'The acylium ion is resonance-stabilized: in its major form every atom has an octet ($\\ce{C#O+}$). It has no reason to rearrange.',
        },
        {
          type: 'p',
          text: 'Acylation fixes the two worst problems of alkylation:',
        },
        {
          type: 'list',
          items: [
            '**No rearrangement**, because the acylium ion is already stabilized by the oxygen lone pair.',
            '**No polyacylation**, because the product\'s C=O group withdraws electrons from the ring: the ketone is **less** reactive than the starting arene, so the reaction stops cleanly after one acylation.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Not quite catalytic',
          text: 'The ketone product is a Lewis base and binds $\\ce{AlCl3}$ tightly, so acylation needs at least one full equivalent of $\\ce{AlCl3}$, followed by an aqueous workup to free the ketone. Deactivated rings and amines still fail, as in alkylation.',
        },
        {
          type: 'derivation',
          title: 'Making propylbenzene without rearrangement',
          steps: [
            { tex: '\\ce{C6H6 + CH3CH2COCl ->[\\text{AlCl}_3] C6H5COCH2CH3}', why: 'Acylation with propanoyl chloride attaches the three-carbon chain through C1, intact, as 1-phenylpropan-1-one (propiophenone).' },
            { tex: '\\ce{C6H5COCH2CH3 ->[\\text{Zn(Hg), HCl}] C6H5CH2CH2CH3}', why: 'Clemmensen reduction replaces C=O with $\\ce{CH2}$. Under basic conditions, Wolff–Kishner reduction ($\\ce{H2NNH2}$, KOH, heat) does the same job; for aryl ketones, $\\ce{H2}$ with Pd/C also works.' },
          ],
          result: 'Acylate, then reduce: the reliable way to put a straight alkyl chain on a ring. Direct alkylation with 1-chloropropane would have given mostly isopropylbenzene.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'When a synthesis question asks for an alkylbenzene with a primary chain of three or more carbons (propyl, butyl), the expected answer is almost always "Friedel–Crafts acylation, then Clemmensen or Wolff–Kishner reduction". Graders look for whether you noticed the rearrangement problem.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'True or false: like Friedel–Crafts alkylation, Friedel–Crafts acylation tends to give polysubstituted products unless the arene is in large excess.',
      answer: false,
      explanation: 'False. The acyl group is electron-withdrawing (its C=O pulls electron density out of the ring by resonance and induction), so the monoacylated product is **less** nucleophilic than the starting arene and reacts much more slowly. Acylation stops after one substitution. Alkylation is the opposite: the alkyl group donates electron density, so the product is more reactive and gets alkylated again.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Order the steps of the best synthesis of butylbenzene from benzene.',
      lines: [
        'Treat benzene with butanoyl chloride and a full equivalent of $\\ce{AlCl3}$',
        'Work up with water to release the ketone, 1-phenylbutan-1-one, from its $\\ce{AlCl3}$ complex',
        'Reduce the C=O to $\\ce{CH2}$ with Zn(Hg), HCl (Clemmensen)',
      ],
      distractors: ['Treat benzene with 1-chlorobutane and $\\ce{AlCl3}$'],
      explanation: 'Acylation attaches the four-carbon chain through its carbonyl carbon with no rearrangement and no overreaction; the ketone is then reduced to the $\\ce{CH2}$ group. The distractor would rearrange (1,2-hydride shift) and give mainly *sec*-butylbenzene, along with polyalkylated products.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student writes the mechanism for the nitration of benzene. Find the first incorrect line.',
      lines: [
        '$\\ce{H2SO4}$ protonates the OH group of $\\ce{HNO3}$.',
        'Water leaves, generating the nitronium ion, $\\ce{NO2+}$.',
        'A π bond of benzene attacks the nitrogen of $\\ce{NO2+}$, forming an arenium ion with + on the carbons ortho and para to the new C–N bond.',
        '$\\ce{HSO4-}$ removes a proton from a carbon ortho to the carbon bearing the $\\ce{NO2}$ group.',
        'The C–H electrons restore the aromatic ring, giving nitrobenzene.',
      ],
      errorLines: [4],
      explanation: 'Line 4 is wrong. The proton removed is the one on the **sp³ carbon itself**, the carbon that just bonded to $\\ce{NO2}$ and now carries both H and $\\ce{NO2}$. Removing it lets that C–H bond pair become a π bond to the neighboring cationic carbon, restoring the aromatic sextet. Removing an H from an ortho carbon (which is sp² and part of the positive π system) would not restore aromaticity. Correct product: nitrobenzene.',
    },
  ],
  takeaways: [
    'EAS has two steps: the ring\'s π electrons attack a strong electrophile (slow, aromaticity lost), giving an arenium ion with + on the ortho and para carbons; then a base removes H⁺ from the sp³ carbon (fast, aromaticity restored).',
    'Arenes substitute instead of adding because loss of H⁺ restores about 150 kJ/mol of aromatic stabilization.',
    'Halogenation: $\\ce{X2}$ + $\\ce{FeX3}$ (Lewis acid polarizes X–X). Nitration: $\\ce{HNO3/H2SO4}$ → $\\ce{NO2+}$; reduce $\\ce{ArNO2}$ to $\\ce{ArNH2}$ with Fe/HCl or $\\ce{H2}$/Pd. Sulfonation: $\\ce{SO3/H2SO4}$, reversible with dilute acid and heat.',
    'Friedel–Crafts alkylation ($\\ce{RX/AlCl3}$) forms C–C bonds but suffers from carbocation rearrangement and polyalkylation, and fails on strongly deactivated rings, anilines, and aryl or vinyl halides.',
    'Friedel–Crafts acylation ($\\ce{RCOCl/AlCl3}$) goes through a stable acylium ion: no rearrangement, no polyacylation. Followed by Clemmensen or Wolff–Kishner reduction, it makes straight-chain alkylbenzenes.',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Chapter 16 (Chemistry of Benzene: Electrophilic Aromatic Substitution) covers every reaction in this lesson with mechanisms.' },
    { title: 'Electrophilic aromatic substitution (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Electrophilic_aromatic_substitution', source: 'wikipedia', note: 'An overview of the reaction types, with the arenium-ion mechanism and kinetic isotope evidence that the first step is rate-determining.' },
    { title: 'Khan Academy: Organic chemistry', url: 'https://www.khanacademy.org/science/organic-chemistry', source: 'khan', note: 'The aromatic compounds unit has short videos on each EAS reaction and Friedel–Crafts limitations.' },
  ],
};
