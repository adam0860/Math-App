import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  names: "<svg viewBox=\"0 0 520 330\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,0)\"><text x=\"57.47\" y=\"62.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"102.03\" y=\"58.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">H</text><text x=\"83.84\" y=\"26.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">H</text><line x1=\"88\" y1=\"41.44\" x2=\"68.46\" y2=\"52.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"89.8\" y1=\"44.56\" x2=\"70.26\" y2=\"55.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"88.9\" y1=\"43\" x2=\"101.03\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"88.9\" y1=\"43\" x2=\"88.9\" y2=\"29\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"85\" y=\"94\" text-anchor=\"middle\" font-size=\"13\">methanal (formaldehyde)</text><g transform=\"translate(175,0)\"><text x=\"58.77\" y=\"50.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"84.1\" y1=\"32.44\" x2=\"69.76\" y2=\"40.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"83.68\" y1=\"36.84\" x2=\"71.56\" y2=\"43.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.78\" y1=\"46\" x2=\"84.1\" y2=\"32.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"260\" y=\"94\" text-anchor=\"middle\" font-size=\"13\">ethanal (acetaldehyde)</text><g transform=\"translate(350,0)\"><text x=\"37.98\" y=\"50.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"63.32\" y1=\"32.44\" x2=\"48.98\" y2=\"40.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.9\" y1=\"36.84\" x2=\"50.78\" y2=\"43.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"126.57\" y1=\"46\" x2=\"105.78\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.78\" y1=\"34\" x2=\"85\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85\" y1=\"46\" x2=\"63.32\" y2=\"32.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"435\" y=\"94\" text-anchor=\"middle\" font-size=\"13\">butanal</text><g transform=\"translate(0,110)\"><text x=\"58.77\" y=\"62.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"85\" y1=\"43.92\" x2=\"69.76\" y2=\"52.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"86.8\" y1=\"47.04\" x2=\"71.56\" y2=\"55.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.78\" y1=\"58\" x2=\"85\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85\" y1=\"46\" x2=\"85\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"85\" y=\"204\" text-anchor=\"middle\" font-size=\"13\">propanone (acetone)</text><g transform=\"translate(175,110)\"><text x=\"79.55\" y=\"62.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"83.2\" y1=\"32.96\" x2=\"83.2\" y2=\"51\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"86.8\" y1=\"32.96\" x2=\"86.8\" y2=\"51\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"126.57\" y1=\"34\" x2=\"105.78\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.78\" y1=\"22\" x2=\"85\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85\" y1=\"34\" x2=\"64.22\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.22\" y1=\"22\" x2=\"43.43\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"260\" y=\"204\" text-anchor=\"middle\" font-size=\"13\">pentan-3-one</text><g transform=\"translate(350,110)\"><text x=\"110.73\" y=\"20.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"95.39\" y1=\"30.08\" x2=\"110.63\" y2=\"21.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"93.59\" y1=\"26.96\" x2=\"108.83\" y2=\"18.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"95.39\" y1=\"28\" x2=\"74.61\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"74.61\" y1=\"16\" x2=\"53.82\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.82\" y1=\"28\" x2=\"53.82\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.82\" y1=\"52\" x2=\"74.61\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"74.61\" y1=\"64\" x2=\"95.39\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"95.39\" y1=\"28\" x2=\"95.39\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"435\" y=\"204\" text-anchor=\"middle\" font-size=\"13\">cyclohexanone</text><g transform=\"translate(0,220)\"><text x=\"121.12\" y=\"32.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"107.1\" y1=\"18.84\" x2=\"119.22\" y2=\"25.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"106.68\" y1=\"14.44\" x2=\"121.02\" y2=\"22.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"106.68\" y1=\"14.44\" x2=\"85\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85\" y1=\"28\" x2=\"64.22\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.22\" y1=\"16\" x2=\"43.43\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.43\" y1=\"28\" x2=\"43.43\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.43\" y1=\"52\" x2=\"64.22\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.22\" y1=\"64\" x2=\"85\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85\" y1=\"28\" x2=\"85\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"85\" y=\"314\" text-anchor=\"middle\" font-size=\"13\">cyclohexanecarbaldehyde</text><g transform=\"translate(175,220)\"><text x=\"110.73\" y=\"62.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"27.59\" y=\"38.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"114.38\" y1=\"32.96\" x2=\"114.38\" y2=\"51\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"117.98\" y1=\"32.96\" x2=\"117.98\" y2=\"51\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.92\" y1=\"20.44\" x2=\"38.58\" y2=\"28.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.51\" y1=\"24.84\" x2=\"40.38\" y2=\"31.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"136.96\" y1=\"22\" x2=\"116.18\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"116.18\" y1=\"34\" x2=\"95.39\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"95.39\" y1=\"22\" x2=\"74.61\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"74.61\" y1=\"34\" x2=\"52.92\" y2=\"20.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"260\" y=\"314\" text-anchor=\"middle\" font-size=\"13\">4-oxopentanal</text><g transform=\"translate(350,220)\"><text x=\"99.4\" y=\"13.64\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"106.56\" y1=\"32.88\" x2=\"106.56\" y2=\"15.97\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"103.12\" y1=\"32.88\" x2=\"103.12\" y2=\"15.97\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"85\" y1=\"43.34\" x2=\"65.16\" y2=\"31.89\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"81.16\" y1=\"45.1\" x2=\"65.56\" y2=\"36.08\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"45.32\" y1=\"43.34\" x2=\"45.32\" y2=\"66.25\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"48.75\" y1=\"45.79\" x2=\"48.75\" y2=\"63.81\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"65.16\" y1=\"77.71\" x2=\"85\" y2=\"66.25\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"65.56\" y1=\"73.51\" x2=\"81.16\" y2=\"64.5\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"124.68\" y1=\"43.34\" x2=\"104.84\" y2=\"31.89\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"104.84\" y1=\"31.89\" x2=\"85\" y2=\"43.34\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"65.16\" y1=\"31.89\" x2=\"45.32\" y2=\"43.34\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"45.32\" y1=\"66.25\" x2=\"65.16\" y2=\"77.71\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"85\" y1=\"43.34\" x2=\"85\" y2=\"66.25\" stroke=\"currentColor\" stroke-width=\"1.37\" /></g><text x=\"435\" y=\"314\" text-anchor=\"middle\" font-size=\"13\">acetophenone</text></svg>",
  polar: "<svg viewBox=\"0 0 520 170\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"70\" y=\"73.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><text x=\"43\" y=\"121.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"97\" y=\"121.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"67.6\" y1=\"100\" x2=\"67.6\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"72.4\" y1=\"100\" x2=\"72.4\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"70\" y1=\"100\" x2=\"49.9\" y2=\"111.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"70\" y1=\"100\" x2=\"88\" y2=\"110.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"50\" y=\"74\" text-anchor=\"middle\" font-size=\"14\" class=\"t-red\">δ−</text><text x=\"52\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">δ+</text><line x1=\"115\" y1=\"90\" x2=\"160\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M160,90 L152.9,93.6 M160,90 L152.9,86.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M115,90 L122.1,86.4 M115,90 L122.1,93.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"210\" y=\"73.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><text x=\"183\" y=\"121.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"237\" y=\"121.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"210\" y1=\"100\" x2=\"210\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"210\" y1=\"100\" x2=\"189.9\" y2=\"111.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"210\" y1=\"100\" x2=\"228\" y2=\"110.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"210\" cy=\"114\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"206.8\" y1=\"114\" x2=\"213.2\" y2=\"114\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"210\" y1=\"110.8\" x2=\"210\" y2=\"117.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><circle cx=\"223\" cy=\"64\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"219.8\" y1=\"64\" x2=\"226.2\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"140\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">minor resonance form shows the C⁺/O⁻ character</text><text x=\"424\" y=\"110.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"390\" y1=\"102.6\" x2=\"416\" y2=\"102.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"390\" y1=\"107.4\" x2=\"416\" y2=\"107.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"364\" y=\"124.4\" text-anchor=\"middle\" font-size=\"15\">R</text><polygon points=\"390,105 369.4,112.1 372.7,118.3\" fill=\"currentColor\"/><text x=\"360\" y=\"104.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"386.8\" y1=\"103.7\" x2=\"386.6\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"383.7\" y1=\"102.4\" x2=\"383.2\" y2=\"104.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"380.5\" y1=\"101.2\" x2=\"379.8\" y2=\"104.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"377.4\" y1=\"99.9\" x2=\"376.4\" y2=\"104.9\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"374.2\" y1=\"98.6\" x2=\"373\" y2=\"104.8\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"371\" y1=\"97.3\" x2=\"369.6\" y2=\"104.8\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"367.9\" y=\"47.1\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">Nu⁻</text><line x1=\"375.4\" y1=\"57.2\" x2=\"387.1\" y2=\"95.4\" stroke=\"currentColor\" class=\"s-purple\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><path d=\"M387.1,95.4 l-5,-6 M387.1,95.4 l4,-7\" stroke=\"currentColor\" class=\"s-purple\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M410,105 A20,20 0 0 0 384.2,85.9\" fill=\"none\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\"/><text x=\"412\" y=\"87\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">≈107°</text><text x=\"400\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" class=\"t-purple\">side view: Nu⁻ attacks C from above</text><text x=\"400\" y=\"164\" text-anchor=\"middle\" font-size=\"11\" class=\"t-purple\">(or below) the plane of the C=O group</text></svg>",
  basic: "<svg viewBox=\"0 0 520 150\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"30\" y=\"105.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">Nu⁻</text><text x=\"90\" y=\"68.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><text x=\"63\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"117\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"87.6\" y1=\"95\" x2=\"87.6\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"92.4\" y1=\"95\" x2=\"92.4\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"90\" y1=\"95\" x2=\"69.9\" y2=\"106.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"90\" y1=\"95\" x2=\"108\" y2=\"105.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M40,90 Q62.6,77 84,92\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M84,92 L76.1,90.6 L80,85.1 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M93,83 Q111.7,79.7 101,64\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M101,64 L107.9,68.1 L102.3,71.9 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"140\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M190,90 L182.9,93.6 M190,90 L182.9,86.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"165\" y=\"82\" text-anchor=\"middle\" font-size=\"12\">step 1</text><text x=\"245\" y=\"68.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O⁻</text><text x=\"270\" y=\"104.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-purple\">Nu</text><text x=\"217\" y=\"112.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"241\" y=\"132.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"245\" y1=\"95\" x2=\"245\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"245\" y1=\"95\" x2=\"268.1\" y2=\"98.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"245\" y1=\"95\" x2=\"224.4\" y2=\"103.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"245\" y1=\"95\" x2=\"242.3\" y2=\"116.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"245\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">tetrahedral alkoxide</text><text x=\"300\" y=\"45.4\" text-anchor=\"middle\" font-size=\"15\">H</text><text x=\"335\" y=\"45.4\" text-anchor=\"middle\" font-size=\"15\">A</text><line x1=\"308\" y1=\"40\" x2=\"327\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M252,58 Q267.3,33.7 296,34\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M296,34 L288.7,37.3 L288.8,30.5 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M317.5,40 Q320.7,21.9 338,28\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M338,28 L330,28.8 L332.3,22.4 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"345\" y1=\"90\" x2=\"390\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M390,90 L382.9,93.6 M390,90 L382.9,86.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"367.5\" y=\"82\" text-anchor=\"middle\" font-size=\"12\">step 2</text><text x=\"440\" y=\"68.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH</text><text x=\"465\" y=\"104.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-purple\">Nu</text><text x=\"412\" y=\"112.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"436\" y=\"132.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"440\" y1=\"95\" x2=\"440\" y2=\"73.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"440\" y1=\"95\" x2=\"463.1\" y2=\"98.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"440\" y1=\"95\" x2=\"419.4\" y2=\"103.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"440\" y1=\"95\" x2=\"437.3\" y2=\"116.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"450\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">addition product</text></svg>",
  acidic: "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"50\" y=\"68.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><text x=\"23\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"77\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"47.6\" y1=\"95\" x2=\"47.6\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"52.4\" y1=\"95\" x2=\"52.4\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"50\" y1=\"95\" x2=\"29.9\" y2=\"106.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"50\" y1=\"95\" x2=\"68\" y2=\"105.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"100\" y=\"45.4\" text-anchor=\"middle\" font-size=\"15\">H</text><text x=\"132\" y=\"45.4\" text-anchor=\"middle\" font-size=\"15\">A</text><line x1=\"108\" y1=\"40\" x2=\"124\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"60\" cy=\"57.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"55.5\" cy=\"53\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M58,55 Q71.2,34 96,34\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M96,34 L88.8,37.4 L88.8,30.6 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M116,40 Q117.2,22.4 134,28\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M134,28 L126.1,28.9 L128.2,22.5 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"140\" y1=\"85\" x2=\"185\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M185,85 L177.9,88.6 M185,85 L177.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"162.5\" y=\"77\" text-anchor=\"middle\" font-size=\"12\">step 1</text><text x=\"162.5\" y=\"103\" text-anchor=\"middle\" font-size=\"12\">fast</text><text x=\"235\" y=\"68.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH</text><text x=\"208\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"262\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"232.6\" y1=\"95\" x2=\"232.6\" y2=\"73.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"237.4\" y1=\"95\" x2=\"237.4\" y2=\"73.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"235\" y1=\"95\" x2=\"214.9\" y2=\"106.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"235\" y1=\"95\" x2=\"253\" y2=\"105.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"251\" cy=\"57\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"247.8\" y1=\"57\" x2=\"254.2\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"251\" y1=\"53.8\" x2=\"251\" y2=\"60.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"275\" y1=\"85\" x2=\"315\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M315,85 L307.9,88.6 M315,85 L307.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M275,85 L282.1,81.4 M275,85 L282.1,88.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"370\" y=\"68.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH</text><text x=\"343\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"397\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"370\" y1=\"95\" x2=\"370\" y2=\"73.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"370\" y1=\"95\" x2=\"349.9\" y2=\"106.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"370\" y1=\"95\" x2=\"388\" y2=\"105.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"370\" cy=\"109\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"366.8\" y1=\"109\" x2=\"373.2\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"370\" y1=\"105.8\" x2=\"370\" y2=\"112.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"310\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">protonated carbonyl: a much stronger electrophile</text><line x1=\"10\" y1=\"165\" x2=\"510\" y2=\"165\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.6\" stroke-dasharray=\"2 4\"/><text x=\"45\" y=\"208.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH</text><text x=\"18\" y=\"256.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"72\" y=\"256.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"45\" y1=\"235\" x2=\"45\" y2=\"213.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"45\" y1=\"235\" x2=\"24.9\" y2=\"246.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"45\" y1=\"235\" x2=\"63\" y2=\"245.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"45\" cy=\"249\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"41.8\" y1=\"249\" x2=\"48.2\" y2=\"249\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"45\" y1=\"245.8\" x2=\"45\" y2=\"252.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"110\" y=\"240.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">:Nu–H</text><path d=\"M96,228 Q71.3,219.4 53,238\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M53,238 L55.6,230.5 L60.5,235.2 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"145\" y1=\"230\" x2=\"190\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M190,230 L182.9,233.6 M190,230 L182.9,226.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"167.5\" y=\"222\" text-anchor=\"middle\" font-size=\"12\">step 2</text><text x=\"240\" y=\"208.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH</text><text x=\"265\" y=\"244.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-purple\">Nu⁺–H</text><text x=\"212\" y=\"252.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"236\" y=\"272.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"240\" y1=\"235\" x2=\"240\" y2=\"213.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240\" y1=\"235\" x2=\"263.1\" y2=\"238.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240\" y1=\"235\" x2=\"219.4\" y2=\"243.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240\" y1=\"235\" x2=\"237.3\" y2=\"256.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"335\" y1=\"230\" x2=\"380\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M380,230 L372.9,233.6 M380,230 L372.9,226.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"357.5\" y=\"222\" text-anchor=\"middle\" font-size=\"12\">step 3</text><text x=\"357.5\" y=\"248\" text-anchor=\"middle\" font-size=\"12\">− H⁺</text><text x=\"430\" y=\"208.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH</text><text x=\"455\" y=\"244.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-purple\">Nu</text><text x=\"402\" y=\"252.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"426\" y=\"272.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"430\" y1=\"235\" x2=\"430\" y2=\"213.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"430\" y1=\"235\" x2=\"453.1\" y2=\"238.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"430\" y1=\"235\" x2=\"409.4\" y2=\"243.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"430\" y1=\"235\" x2=\"427.3\" y2=\"256.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
  cyano: "<svg viewBox=\"0 0 520 160\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"28\" y=\"105.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">N≡C⁻</text><text x=\"95\" y=\"68.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><text x=\"68\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">H₃C</text><text x=\"122\" y=\"116.4\" text-anchor=\"middle\" font-size=\"15\">CH₃</text><line x1=\"92.6\" y1=\"95\" x2=\"92.6\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"97.4\" y1=\"95\" x2=\"97.4\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"95\" y1=\"95\" x2=\"79.2\" y2=\"104.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"95\" y1=\"95\" x2=\"110.8\" y2=\"104.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M44,90 Q67.1,77 89,92\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M89,92 L81.1,90.7 L85,85.1 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M98,83 Q116.7,79.7 106,64\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M106,64 L112.9,68.1 L107.3,71.9 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"145\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M190,90 L182.9,93.6 M190,90 L182.9,86.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"240\" y=\"68.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O⁻</text><text x=\"265\" y=\"104.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-blue\">C≡N</text><text x=\"212\" y=\"112.4\" text-anchor=\"middle\" font-size=\"15\">H₃C</text><text x=\"236\" y=\"132.4\" text-anchor=\"middle\" font-size=\"15\">CH₃</text><line x1=\"240\" y1=\"95\" x2=\"240\" y2=\"71\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240\" y1=\"95\" x2=\"263.1\" y2=\"98.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240\" y1=\"95\" x2=\"223.9\" y2=\"101.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240\" y1=\"95\" x2=\"237.6\" y2=\"114.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"295\" y=\"45.4\" text-anchor=\"middle\" font-size=\"15\">H</text><text x=\"330\" y=\"45.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-blue\">CN</text><line x1=\"303\" y1=\"40\" x2=\"328\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M247,58 Q262.3,33.7 291,34\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M291,34 L283.7,37.3 L283.8,30.5 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M315,40 Q322.8,21.2 342,28\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M342,28 L334,28.8 L336.3,22.4 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"345\" y1=\"90\" x2=\"390\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M390,90 L382.9,93.6 M390,90 L382.9,86.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"430\" y=\"68.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH</text><text x=\"455\" y=\"104.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-blue\">C≡N</text><text x=\"402\" y=\"112.4\" text-anchor=\"middle\" font-size=\"15\">H₃C</text><text x=\"426\" y=\"132.4\" text-anchor=\"middle\" font-size=\"15\">CH₃</text><line x1=\"430\" y1=\"95\" x2=\"430\" y2=\"73.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"430\" y1=\"95\" x2=\"453.1\" y2=\"98.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"430\" y1=\"95\" x2=\"413.9\" y2=\"101.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"430\" y1=\"95\" x2=\"427.6\" y2=\"114.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"450\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">acetone cyanohydrin</text><text x=\"445\" y=\"30\" text-anchor=\"middle\" font-size=\"11\" class=\"t-blue\">+ ⁻CN (regenerated)</text></svg>",
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-carbonyl-addition',
  title: 'Nucleophilic Addition to Aldehydes and Ketones',
  summary: 'Naming aldehydes and ketones, why the C=O carbon is electrophilic, the two general mechanisms of nucleophilic addition (strong nucleophile in base, weak nucleophile with acid), hydrates and what controls their equilibrium constants, cyanohydrins, and why aldehydes are more reactive than ketones.',
  minutes: 20,
  objectives: [
    'Name aldehydes and ketones by IUPAC rules and recognize the common names',
    'Explain why the carbonyl carbon is electrophilic using bond polarity, resonance and the π* orbital',
    'Draw nucleophilic addition under basic conditions (strong nucleophile) and under acidic conditions (weak nucleophile, activated carbonyl)',
    'Use hydration equilibrium constants to compare carbonyl compounds, and relate $K$ to $\\Delta G°$ and percent hydrate',
    'Predict cyanohydrin formation and rank aldehydes and ketones by reactivity using steric and electronic arguments',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Aldehydes and ketones and their names',
      blocks: [
        {
          type: 'p',
          text: 'The carbonyl group, C=O, is the most important functional group in organic chemistry; the rest of this course is largely about it. In an **aldehyde** the carbonyl carbon carries at least one H ($\\ce{RCHO}$); in a **ketone** it carries two carbon groups ($\\ce{RCOR\'}$). Both are [[ochem-electrophile|electrophiles]] at carbon, and this lesson builds the one mechanism, nucleophilic addition, that explains most of their reactions.',
        },
        {
          type: 'figure',
          svg: FIG.names,
          alt: 'Nine carbonyl compounds with names: methanal (formaldehyde), H2C=O; ethanal (acetaldehyde); butanal; propanone (acetone); pentan-3-one; cyclohexanone; cyclohexanecarbaldehyde, a CHO group on a cyclohexane ring; 4-oxopentanal, a five-carbon chain with an aldehyde at C1 and a ketone at C4; and acetophenone, a methyl ketone on a benzene ring.',
          caption: 'IUPAC names with common names in parentheses. Formaldehyde, acetaldehyde, acetone and acetophenone are used so often that you should know them on sight.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Aldehydes: -al', text: 'Find the longest chain that **includes** the CHO carbon; that carbon is always C1, so no locant is needed: butanal, 3-methylbutanal. If the CHO is attached to a ring, use **-carbaldehyde**: cyclohexanecarbaldehyde, benzaldehyde (common, accepted).' },
            { title: 'Ketones: -one', text: 'Longest chain containing the C=O carbon, numbered to give it the lowest locant: pentan-2-one, pentan-3-one. Ring ketones: cyclohexanone (the carbonyl carbon is C1).' },
            { title: 'Priority', text: 'Aldehyde > ketone > alcohol > amine > alkene. The higher group gets the suffix; a lower carbonyl becomes the prefix **oxo-**, an alcohol **hydroxy-**: 4-oxopentanal, 4-hydroxybutan-2-one.' },
            { title: 'Common names', text: 'Ketones are often named by their two groups + *ketone*: ethyl methyl ketone (butanone, the solvent "MEK"), diethyl ketone (pentan-3-one).' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Where you meet them',
          text: 'Formaldehyde preserves biological specimens and makes resins; acetone is the solvent in nail-polish remover; cinnamaldehyde (cinnamon), vanillin (vanilla) and benzaldehyde (almond) are flavors; testosterone and progesterone are ketones; and glucose is an aldehyde in its open-chain form.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'What is the IUPAC name of $\\ce{CH3CH2CH2C(=O)CH(CH3)2}$?',
      hint: 'Find the longest chain that contains the C=O carbon, then number so the carbonyl gets the lowest locant.',
      options: [
        { text: '2-methylhexan-3-one', correct: true, why: 'The longest chain through the carbonyl has six carbons: $\\ce{CH3CH2CH2-C(=O)-CH(CH3)-CH3}$. Numbering from the isopropyl end puts C=O at C3 (from the other end it would be C4) and the methyl at C2.' },
        { text: '5-methylhexan-4-one', why: 'Same chain, numbered from the wrong end. The carbonyl, as the principal group, must get the lowest possible locant: 3, not 4.' },
        { text: '2-methylhexan-3-al', why: 'The C=O carbon carries two carbon groups and no H, so this is a ketone (-one). The suffix -al is only for a CHO group at the end of a chain.' },
        { text: '2-methylpentan-3-one', why: 'Count again: the propyl group (3 C), the C=O carbon (1 C) and two carbons of the isopropyl group lie in one chain, six carbons, not five. (Isopropyl propyl ketone is an acceptable common name.)' },
      ],
      explanation: 'Write out the chain: C1 = one methyl of the isopropyl group, C2 = the isopropyl CH (bearing the other methyl), C3 = C=O, C4–C6 = the propyl group. Six carbons, ketone at C3, methyl at C2: **2-methylhexan-3-one**. Always number to give the principal group the lowest locant first, then the substituents.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Why the carbonyl carbon is electrophilic',
      blocks: [
        {
          type: 'p',
          text: 'Three views of the C=O bond all point to the same conclusion: the carbon is electron-poor and invites nucleophiles.',
        },
        {
          type: 'figure',
          svg: FIG.polar,
          alt: 'Left: a carbonyl group R2C=O with δ− on oxygen and δ+ on carbon, and a minor resonance form with a single C–O bond, a positive charge on carbon and a negative charge on oxygen. Right: a side view with the C=O axis horizontal, the two R groups on a wedge and a hashed bond, and a nucleophile approaching the carbon from above at about 107° to the C=O bond.',
          caption: 'Left: polarity and resonance. Right: the trigonal planar carbonyl is attacked from above or below its plane, at about 107° to the C=O bond (the Bürgi–Dunitz angle), where the π* orbital is largest.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Polarity.** Oxygen (electronegativity 3.44) pulls the shared electrons from carbon (2.55). Acetone has a dipole moment of 2.9 D.',
            '**Resonance.** The minor resonance form $\\ce{R2C+-O-}$ puts a full + on carbon. It contributes because the negative charge lands on the electronegative oxygen.',
            '**Orbitals.** A nucleophile donates electrons into the carbonyl\'s LUMO, the π* orbital. Because O is more electronegative, π (bonding) is concentrated on O and π* (antibonding) on **C**, so the nucleophile is drawn to carbon. Filling π* breaks the π bond: the electrons end up on oxygen.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a C=O adds nucleophiles but a C=C adds electrophiles',
          text: 'An alkene\'s π electrons are shared evenly and sit high in energy, so the alkene acts as a **nucleophile** toward $\\ce{H+}$ and $\\ce{Br2}$. A carbonyl\'s π electrons are held tightly by oxygen (low-energy, unreactive HOMO), while its π* is low and concentrated on carbon: it is an **electrophile**. Same kind of double bond, opposite reactivity, because of one electronegative atom.',
        },
        {
          type: 'p',
          text: 'Attack changes the carbon from sp² (trigonal planar, 120°) to sp³ (tetrahedral, 109.5°): this is [[ochem-nucleophilic-addition|nucleophilic addition]], and the product is called the [[ochem-tetrahedral-intermediate|tetrahedral intermediate]] or tetrahedral adduct.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'True or false: when a nucleophile adds to butan-2-one ($\\ce{CH3COCH2CH3}$) to create a new stereocenter, a single enantiomer is formed, because the nucleophile always attacks the same face of the C=O group.',
      answer: false,
      explanation: 'False. The carbonyl group is flat, and its two faces (above and below the plane) are mirror images of each other in an achiral molecule like butan-2-one. An achiral nucleophile attacks either face with equal probability, so a new stereocenter forms as a [[ochem-racemic-mixture|racemic mixture]] (50:50 *R* and *S*). Selective attack on one face requires something chiral: a chiral reagent, catalyst or enzyme.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Two mechanisms: strong nucleophile, or acid catalysis',
      blocks: [
        {
          type: 'p',
          text: 'Every nucleophilic addition follows one of two patterns, chosen by how good the nucleophile is.',
        },
        {
          type: 'heading',
          text: 'Basic conditions: a strong, negatively charged nucleophile',
        },
        {
          type: 'figure',
          svg: FIG.basic,
          alt: 'Step 1: a nucleophile Nu− attacks the carbonyl carbon (curved arrow from Nu− to C) while the C=O π electrons move onto oxygen (curved arrow from the C=O bond to O), giving a tetrahedral alkoxide with O−, R, R′ and Nu on carbon. Step 2: the alkoxide oxygen takes a proton from H–A (curved arrows from O− to H and from the H–A bond to A), giving the neutral addition product with OH.',
          caption: 'Attack first, then protonate. Typical nucleophiles: $\\ce{HO-}$, $\\ce{RO-}$, $\\ce{-CN}$, and (next lesson) hydride $\\ce{H-}$ and carbanion-like $\\ce{R-}$.',
        },
        {
          type: 'heading',
          text: 'Acidic conditions: a weak, neutral nucleophile',
        },
        {
          type: 'figure',
          svg: FIG.acidic,
          alt: 'Step 1, fast: a lone pair on the carbonyl oxygen takes a proton from H–A, giving a protonated carbonyl, drawn as two resonance structures: C=OH+ and a carbocation C+ with OH. Step 2: a neutral nucleophile :Nu–H attacks the positive carbon, giving a tetrahedral adduct with OH and Nu+–H. Step 3: loss of H+ gives the neutral product with OH and Nu.',
          caption: 'Protonate first, then attack, then deprotonate. Protonation on oxygen makes the carbon far more electrophilic (its resonance form is a carbocation stabilized by OH), so even water or an alcohol can add.',
        },
        {
          type: 'table',
          headers: ['Feature', 'Basic conditions', 'Acidic conditions'],
          rows: [
            ['Nucleophile', 'strong, anionic ($\\ce{HO-}$, $\\ce{RO-}$, $\\ce{-CN}$, $\\ce{H-}$, $\\ce{R-}$)', 'weak, neutral ($\\ce{H2O}$, $\\ce{ROH}$, $\\ce{RNH2}$)'],
            ['Order of events', 'Nu attacks → O⁻ protonated', 'O protonated → Nu attacks → H⁺ lost'],
            ['Never in the mechanism', 'a strong acid (it would destroy the Nu)', 'a strong base, or $\\ce{HO-}$ / $\\ce{RO-}$ (they cannot exist in acid)'],
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Keep your conditions consistent',
          text: 'A classic way to lose points: a mechanism in acid that shows $\\ce{HO-}$ leaving or attacking, or a mechanism in base that shows $\\ce{H3O+}$. In acid, every species you draw should be neutral or positive; in base, neutral or negative.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Reversible or not?',
          text: 'If the nucleophile is also a reasonable **leaving group** ($\\ce{H2O}$, $\\ce{ROH}$, $\\ce{-CN}$), the addition is reversible and the outcome is an equilibrium. If it is a terrible leaving group ($\\ce{H-}$, $\\ce{R-}$), the addition is effectively irreversible. Keep this in mind for the next two lessons.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Water adds to acetone very slowly in pure water, but much faster with a trace of $\\ce{H2SO4}$. What does the acid do?',
      options: [
        { text: 'It protonates the carbonyl oxygen, making the carbonyl carbon much more electrophilic so that weak nucleophilic water can attack', correct: true, why: 'The protonated carbonyl $\\ce{R2C=OH+}$ has a resonance form with a full + on carbon. It is a far better electrophile than neutral acetone.' },
        { text: 'It protonates water, making $\\ce{H3O+}$, a better nucleophile', why: '$\\ce{H3O+}$ has no lone pair to spare in the right sense; protonating water makes it **less** nucleophilic, not more. The acid activates the electrophile, not the nucleophile.' },
        { text: 'It converts water into hydroxide, a stronger nucleophile', why: 'Acid does the opposite: it removes $\\ce{HO-}$. Hydroxide catalysis is the **basic** pathway, and it would need added base.' },
        { text: 'It shifts the equilibrium so that the hydrate is favored', why: 'A catalyst speeds up the forward and reverse reactions equally; it does not change the equilibrium constant. Acetone\'s hydrate stays at about 0.1% with or without acid.' },
      ],
      explanation: 'Acid catalysis works on the electrophile. Protonating the carbonyl oxygen gives a cation whose resonance form is a carbocation stabilized by OH, so a weak nucleophile such as water can now add. After addition, loss of $\\ce{H+}$ regenerates the acid. Like every catalyst, the acid speeds the approach to equilibrium but does not change where the equilibrium lies.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Order the steps of the acid-catalyzed addition of water to an aldehyde, $\\ce{RCHO}$, to give its hydrate, $\\ce{RCH(OH)2}$.',
      lines: [
        'The carbonyl oxygen takes a proton from $\\ce{H3O+}$',
        'A water molecule attacks the carbonyl carbon of the protonated aldehyde',
        'The tetrahedral intermediate carries an $\\ce{OH2+}$ group from the attacking water',
        'Water removes a proton from the $\\ce{OH2+}$ group, giving the neutral hydrate and regenerating $\\ce{H3O+}$',
      ],
      distractors: ['Hydroxide attacks the carbonyl carbon'],
      explanation: 'Protonate, add, deprotonate. Water is a weak nucleophile, so the carbonyl must be activated first by protonation; the newly bonded oxygen then carries a + charge until it passes its extra proton back to a water molecule. Hydroxide does not belong in an acid-catalyzed mechanism: in acidic solution its concentration is negligible.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Hydrates: equilibrium constants tell the story',
      blocks: [
        {
          type: 'p',
          text: 'Water adds reversibly to any aldehyde or ketone to give a [[ochem-gem-diol|hydrate]] (a *gem*-diol: two OH groups on the same carbon). The equilibrium constant $K_{\\text{hyd}}$ measures how much the carbonyl "wants" to become sp³, and it varies over nine powers of ten:',
        },
        {
          type: 'math',
          tex: '\\ce{R2C=O + H2O <=> R2C(OH)2} \\qquad K_{\\text{hyd}} = \\frac{[\\ce{R2C(OH)2}]}{[\\ce{R2C=O}]}',
          caption: 'Water is the solvent, so its (constant) concentration is folded into $K_{\\text{hyd}}$, the [[gchem-equilibrium-constant|equilibrium constant]] for hydration.',
        },
        {
          type: 'table',
          headers: ['Compound', '$K_{\\text{hyd}}$', '% hydrate in water'],
          rows: [
            ['acetone, $\\ce{(CH3)2CO}$', '$1.4 \\times 10^{-3}$', '0.14%'],
            ['acetaldehyde, $\\ce{CH3CHO}$', '1.06', '51%'],
            ['formaldehyde, $\\ce{H2CO}$', '$2.3 \\times 10^{3}$', '99.96%'],
            ['chloral, $\\ce{Cl3CCHO}$', '$2.8 \\times 10^{4}$', '> 99.99%'],
            ['hexafluoroacetone, $\\ce{(CF3)2CO}$', '$1.2 \\times 10^{6}$', '> 99.99%'],
          ],
          caption: 'Values at 25 °C. Formaldehyde is sold as "formalin", an aqueous solution that is almost entirely the hydrate $\\ce{CH2(OH)2}$. Chloral hydrate is a stable crystalline solid.',
        },
        {
          type: 'graph',
          x: [-4, 7],
          y: [-0.05, 1.1],
          xStep: 1,
          yStep: 0.2,
          functions: [{ expr: '10^x/(1+10^x)', label: 'fraction hydrated $= K/(1+K)$', color: 'blue' }],
          points: [
            { x: -2.85, y: 0.0014, label: 'acetone' },
            { x: 0.025, y: 0.515, label: 'acetaldehyde' },
            { x: 3.36, y: 1, label: 'HCHO' },
            { x: 6.08, y: 1, label: '(CF₃)₂CO' },
            { x: 'k', y: '10^k/(1+10^k)', color: 'red' },
          ],
          sliders: [{ name: 'k', min: -4, max: 7, step: 0.05, value: 0, label: '$\\log_{10} K_{\\text{hyd}}$' }],
          readouts: [
            { label: '$K_{\\text{hyd}} =$', expr: '10^k', digits: 4 },
            { label: '% hydrate $=$', expr: '100*10^k/(1+10^k)', digits: 2 },
            { label: '$\\Delta G° = -RT\\ln K$ (kJ/mol, 25 °C) $=$', expr: '-8.314*298.15*ln(10)*k/1000', digits: 2 },
          ],
          caption: 'Horizontal axis: $\\log_{10}K_{\\text{hyd}}$. Every factor of 10 in $K$ is 5.7 kJ/mol in $\\Delta G°$ at 25 °C. The switch from "mostly carbonyl" to "mostly hydrate" happens across just a few kJ/mol around $K = 1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'What sets $K_{\\text{hyd}}$',
          text: '**Electronics:** alkyl groups donate electron density to the carbonyl carbon and stabilize the δ+ (like a carbocation), so the carbonyl side is favored: acetone < acetaldehyde < formaldehyde. Electron-withdrawing groups ($\\ce{CCl3}$, $\\ce{CF3}$) make the carbonyl carbon more positive and less stable, so they push toward the hydrate. **Sterics:** going from sp² (120°) to sp³ (109.5°) squeezes the substituents together; two methyl groups (acetone) suffer more than two H atoms (formaldehyde).',
        },
        {
          type: 'derivation',
          title: 'Free energy of hydration of acetone',
          steps: [
            { tex: '\\Delta G° = -RT\\ln K_{\\text{hyd}}', why: 'The link between an equilibrium constant and the standard free-energy change, from General Chemistry thermodynamics.' },
            { tex: '= -(8.314\\ \\text{J mol}^{-1}\\text{K}^{-1})(298.15\\ \\text{K})\\ln(1.4 \\times 10^{-3})', why: 'Substitute $K = 1.4 \\times 10^{-3}$ at 25 °C.' },
            { tex: '= -(2479\\ \\text{J/mol})(-6.571) = +16.3\\ \\text{kJ/mol}', why: '$\\ln(1.4 \\times 10^{-3}) = -6.571$. A positive $\\Delta G°$ means the carbonyl side is favored.' },
          ],
          result: 'Hydrating acetone costs 16 kJ/mol; hydrating formaldehyde ($K = 2.3 \\times 10^3$) releases about 19 kJ/mol. The difference, about 35 kJ/mol, is the combined effect of two methyl groups.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Proof that hydration happens even when K is tiny',
          text: 'Dissolve acetone in $\\ce{H2^{18}O}$ with a trace of acid and the label quickly appears in the acetone\'s oxygen. The only way in is through the hydrate: add $\\ce{H2^{18}O}$, then lose ordinary $\\ce{H2O}$. The equilibrium lies far to the left, but the molecules pass through it constantly.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Acetaldehyde has $K_{\\text{hyd}} = 1.06$ in water at 25 °C. What percentage of the acetaldehyde in an aqueous solution is present as its hydrate at equilibrium?',
      hint: 'Fraction hydrated $= \\dfrac{[\\text{hydrate}]}{[\\text{hydrate}] + [\\text{aldehyde}]} = \\dfrac{K}{1 + K}$.',
      label: '% hydrate $=$',
      unit: '%',
      answer: '100*1.06/2.06',
      answerTex: '51.5\\%',
      tolerance: 0.1,
      explanation: 'Let [aldehyde] = 1; then [hydrate] = $K$ = 1.06. Fraction hydrated $= 1.06/(1 + 1.06) = 1.06/2.06 = 0.515$, so 51.5%. Acetaldehyde sits almost exactly at the crossover: one alkyl group is enough to bring $K$ down from formaldehyde\'s 2300 to about 1.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Formaldehyde has $K_{\\text{hyd}} = 2.3 \\times 10^{3}$ at 25 °C (298.15 K). Calculate $\\Delta G°$ for its hydration, $\\ce{H2CO + H2O <=> CH2(OH)2}$. Use $R = 8.314$ J mol⁻¹ K⁻¹.',
      hint: '$\\Delta G° = -RT\\ln K$; convert to kJ.',
      label: '$\\Delta G° =$',
      unit: 'kJ/mol',
      answer: '-8.314*298.15*ln(2.3*10^3)/1000',
      answerTex: '-19.2\\ \\text{kJ/mol}',
      tolerance: 0.1,
      explanation: '$\\Delta G° = -RT\\ln K = -(8.314)(298.15)\\ln(2300) = -(2479)(7.741) = -19\\,190$ J/mol $\\approx -19.2$ kJ/mol. Negative: the hydrate is favored. Compare acetone (+16.3 kJ/mol): replacing two H atoms with two methyl groups shifts the hydration free energy by about 35 kJ/mol.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Cyanohydrins: adding HCN',
      blocks: [
        {
          type: 'p',
          text: 'Hydrogen cyanide adds across C=O to give a [[ochem-cyanohydrin|cyanohydrin]], a carbon bearing both OH and CN. HCN itself is a weak acid (pKa 9.2) and a poor nucleophile; the reaction needs a little cyanide ion, so it is run with a catalytic amount of base, or with a cyanide salt and just enough acid to supply HCN. (HCN is extremely toxic; in practice it is generated in solution and handled in a fume hood.)',
        },
        {
          type: 'figure',
          svg: FIG.cyano,
          alt: 'Cyanide ion attacks the carbonyl carbon of acetone while the C=O π electrons move to oxygen, giving a tetrahedral alkoxide bearing CH3, CH3 and C≡N. The alkoxide oxygen takes a proton from H–CN, giving acetone cyanohydrin and regenerating cyanide ion.',
          caption: 'Basic-conditions mechanism: cyanide adds, then the alkoxide takes a proton from HCN, which regenerates $\\ce{-CN}$. The base is a true catalyst.',
        },
        {
          type: 'p',
          text: 'Cyanide is a reasonable leaving group, so the addition is reversible. The equilibrium favors the cyanohydrin for aldehydes and unhindered ketones, but not for bulky ketones (the same steric and electronic trends as hydration).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Why chemists like cyanohydrins',
          text: 'The reaction makes a new **C–C bond** and lengthens the chain by one carbon. The C≡N group can then be converted into other groups: hydrolysis in acid gives an α-hydroxy acid (mandelic acid from benzaldehyde), and reduction gives a β-amino alcohol. You will meet both conversions with carboxylic acid derivatives.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Cyanohydrins in nature',
          text: 'Many plants store cyanohydrins as sugar derivatives (amygdalin in bitter almonds and apricot kernels) as a chemical defense: when the tissue is crushed, enzymes release the cyanohydrin, which reverts to benzaldehyde, the smell of bitter almonds, and HCN.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Cyclohexanone is treated with HCN and a catalytic amount of KCN. What is the product?',
      options: [
        { text: '1-Hydroxycyclohexane-1-carbonitrile: OH and CN on the same ring carbon', correct: true, why: 'Cyanide attacks the carbonyl carbon and the resulting alkoxide is protonated by HCN, so the former C=O carbon ends up bearing both OH and C≡N.' },
        { text: 'Cyclohexanecarbonitrile, with CN replacing the oxygen', why: 'Addition does not remove the oxygen; it converts C=O into C–OH. Replacing oxygen entirely would require a later step.' },
        { text: '2-Cyanocyclohexanone, with CN on the carbon next to C=O', why: 'Cyanide is a nucleophile and attacks the electrophilic carbonyl carbon itself, not its neighbor.' },
        { text: 'A cyanate, with O–C≡N bonding', why: 'The nucleophilic atom of cyanide here is carbon, and it bonds to the carbonyl carbon (the electrophile), not to oxygen.' },
      ],
      explanation: 'Basic-conditions nucleophilic addition: $\\ce{-CN}$ adds to the carbonyl carbon, pushing the π electrons onto oxygen; the alkoxide then takes $\\ce{H+}$ from HCN, regenerating cyanide. Product: the cyanohydrin, with OH and CN on the former carbonyl carbon, one carbon more than the starting ketone.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Aldehydes versus ketones: who reacts faster?',
      blocks: [
        {
          type: 'p',
          text: 'The trends in $K_{\\text{hyd}}$ also govern **rates**, because the transition state for addition already looks partly tetrahedral. Aldehydes are more reactive than ketones for two reasons, the same two you saw for hydrates:',
        },
        {
          type: 'compare',
          left: {
            title: 'Aldehyde, RCHO',
            tone: 'good',
            text: 'One alkyl group donates electron density, so the carbonyl carbon stays fairly δ+.\n\nOne small H: little crowding when the carbon becomes tetrahedral.\n\n→ more electrophilic, faster, larger $K$.',
          },
          right: {
            title: 'Ketone, RCOR′',
            tone: 'neutral',
            text: 'Two alkyl groups donate electron density and stabilize the δ+ carbon.\n\nTwo groups crowd each other (and the nucleophile) in the tetrahedral product.\n\n→ less electrophilic, slower, smaller $K$.',
          },
        },
        {
          type: 'p',
          text: 'A third effect: **conjugation**. In benzaldehyde or acetophenone the aromatic ring is conjugated with the C=O, delocalizing the δ+ into the ring. That stabilizes the carbonyl, and addition destroys this conjugation, so aryl aldehydes and ketones are less reactive than their alkyl counterparts.',
        },
        {
          type: 'theorem',
          name: 'Reactivity order toward nucleophilic addition',
          text: 'formaldehyde > other aldehydes > ketones; within each class, electron-withdrawing groups (CF₃, CCl₃) raise reactivity, while bulky groups and conjugation with aryl rings lower it.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'This order lets you react an aldehyde selectively in a molecule that also contains a ketone, using one equivalent of a mild nucleophile at low temperature. It is also why acetone is a usable solvent but acetaldehyde is not.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Rank these carbonyl compounds from **most** reactive toward nucleophilic addition to **least** reactive.',
      lines: [
        'formaldehyde, $\\ce{H2C=O}$',
        'acetaldehyde, $\\ce{CH3CHO}$',
        'acetone, $\\ce{(CH3)2C=O}$',
        'di-*tert*-butyl ketone, $\\ce{((CH3)3C)2C=O}$',
      ],
      explanation: 'Each step down adds electron donation and steric bulk at the carbonyl carbon. Formaldehyde has no alkyl groups; acetaldehyde has one; acetone has two; di-*tert*-butyl ketone has two very bulky groups that crowd the tetrahedral product so badly that it barely reacts with most nucleophiles. The hydration constants follow the same order.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A student writes the mechanism of the acid-catalyzed hydration of acetone. Find the first incorrect line.',
      lines: [
        'The carbonyl oxygen of acetone is protonated by $\\ce{H3O+}$, giving $\\ce{(CH3)2C=OH+}$.',
        'Water attacks the carbonyl carbon, giving $\\ce{(CH3)2C(OH)(OH2+)}$.',
        'Hydroxide ion removes a proton from the $\\ce{OH2+}$ group, giving the hydrate $\\ce{(CH3)2C(OH)2}$.',
        'At equilibrium, the hydrate is the major species in solution.',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses hydroxide in an acid-catalyzed mechanism; in acidic solution $[\\ce{HO-}]$ is negligible. The proton is removed by **water**, which regenerates $\\ce{H3O+}$ (the catalyst). (Line 4 is also false, $K_{\\text{hyd}}$ for acetone is only $1.4 \\times 10^{-3}$, but line 3 is the first error.)',
    },
  ],
  takeaways: [
    'Aldehydes end in -al (CHO carbon = C1, or -carbaldehyde on a ring); ketones end in -one with the lowest locant. Aldehyde outranks ketone, which becomes the prefix oxo-.',
    'The carbonyl carbon is electrophilic: polarized C=O, a C⁺–O⁻ resonance form, and a π* LUMO concentrated on carbon. Nucleophiles attack it from above or below the plane, converting sp² to sp³ (and making racemates when a stereocenter forms).',
    'Strong anionic nucleophiles add directly, then the alkoxide is protonated (basic conditions). Weak neutral nucleophiles need acid: protonate O, add, deprotonate.',
    'Hydration is reversible; $K_{\\text{hyd}}$ ranges from $10^{-3}$ (acetone) to $10^{3}$ (formaldehyde) and beyond, controlled by electron donation or withdrawal and by steric crowding. $\\Delta G° = -RT\\ln K$.',
    'HCN with catalytic cyanide gives cyanohydrins, a reversible C–C bond formation.',
    'Reactivity: formaldehyde > aldehydes > ketones; electron-withdrawing groups increase it, bulky groups and aryl conjugation decrease it.',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Chapter 19 (Aldehydes and Ketones: Nucleophilic Addition Reactions), sections on naming, relative reactivity, hydration and cyanohydrin formation.' },
    { title: 'Master Organic Chemistry', url: 'https://www.masterorganicchemistry.com/', source: 'other', note: 'Search "nucleophilic addition to carbonyls" for the basic- versus acidic-conditions patterns with many worked mechanisms.' },
    { title: 'Cyanohydrin (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Cyanohydrin', source: 'wikipedia', note: 'Uses of cyanohydrins in synthesis and their role in plant chemical defense.' },
  ],
};
