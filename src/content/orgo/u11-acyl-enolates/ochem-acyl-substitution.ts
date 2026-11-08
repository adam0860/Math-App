import type { Lesson } from '../../types';

// <figures> skeletal structures drawn from SMILES with the molecule kit; mechanisms checked by rendering
const FIG = {
  addelim: "<svg viewBox=\"0 0 520 192\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,30) scale(1.4)\"><text x=\"29.95\" y=\"20.1\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"41.84\" y=\"14.43\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><line x1=\"28.95\" y1=\"19.15\" x2=\"14.61\" y2=\"27.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(55,20) scale(1.4)\"><text x=\"37.41\" y=\"33.1\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"15.46\" y=\"69.1\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Cl</text><line x1=\"44.66\" y1=\"53.47\" x2=\"44.66\" y2=\"35.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.06\" y1=\"53.47\" x2=\"41.06\" y2=\"35.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.64\" y1=\"64.43\" x2=\"42.86\" y2=\"52.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.86\" y1=\"52.43\" x2=\"29.68\" y2=\"60.04\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(195,5) scale(1.75)\"><text x=\"63.37\" y=\"58.88\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"75.26\" y=\"53.21\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"29.42\" y=\"67.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Cl</text><text x=\"21.8\" y=\"34.88\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"60.03\" y1=\"21.43\" x2=\"48.03\" y2=\"42.21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.03\" y1=\"42.21\" x2=\"62.37\" y2=\"50.49\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.03\" y1=\"42.21\" x2=\"40.07\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.03\" y1=\"42.21\" x2=\"33.69\" y2=\"33.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"20.8\" y1=\"33.94\" x2=\"6.46\" y2=\"42.21\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(375,20) scale(1.4)\"><text x=\"46.02\" y=\"69.1\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"25.23\" y=\"33.1\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"49.66\" y1=\"39.39\" x2=\"49.66\" y2=\"57.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.26\" y1=\"39.39\" x2=\"53.26\" y2=\"57.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"72.25\" y1=\"28.43\" x2=\"51.46\" y2=\"40.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.46\" y1=\"40.43\" x2=\"37.13\" y2=\"32.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"24.23\" y1=\"32.15\" x2=\"9.89\" y2=\"40.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"168\" y1=\"98\" x2=\"205\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M205,98 L197.9,101.6 M205,98 L197.9,94.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"345\" y1=\"98\" x2=\"375\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M375,98 L367.9,101.6 M375,98 L367.9,94.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M62,58 Q79.0,85.3 111,89\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M111,89 L103.5,91.8 L104.3,84.6 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M120,80 Q133.6,74.9 124,64\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M124,64 L131.4,66.9 L126.0,71.7 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M306,113 Q286.1,111.7 293,93\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M293,93 L293.9,100.9 L287.1,98.4 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M268,96 Q252.3,90.2 247,106\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M247,106 L245.8,98.1 L252.7,100.4 Z\" fill=\"currentColor\" class=\"f-red\"/><circle cx=\"45.3\" cy=\"37.9\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"39.7\" cy=\"41.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"60.0\" cy=\"61.4\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"63.2\" cy=\"55.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"43.9\" cy=\"64.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"50.2\" cy=\"65.9\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"104.5\" cy=\"50.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"101.3\" cy=\"55.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"128.7\" cy=\"55.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"125.5\" cy=\"50.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"328.5\" cy=\"111.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"331.7\" cy=\"105.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"310.8\" cy=\"115.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"317.2\" cy=\"116.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"301.8\" cy=\"109.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"306.3\" cy=\"113.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"275\" y=\"166\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-purple\" font-weight=\"600\">tetrahedral intermediate</text><text x=\"187\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">1</text><text x=\"360\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2</text><text x=\"500\" y=\"90\" text-anchor=\"middle\" font-size=\"14\">+ Cl⁻</text><text x=\"260\" y=\"186\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-gray\">1: addition to the C=O (π bond breaks)  ·  2: elimination (C=O re-forms, Cl⁻ leaves)</text></svg>",
  fischer: "<svg viewBox=\"0 0 520 330\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,20) scale(1.25)\"><text x=\"40.83\" y=\"30.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"20.05\" y=\"66.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"9.94\" y=\"66.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"48.08\" y1=\"51.04\" x2=\"48.08\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.48\" y1=\"51.04\" x2=\"44.48\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"67.06\" y1=\"62\" x2=\"46.28\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"46.28\" y1=\"50\" x2=\"31.94\" y2=\"58.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(128,10) scale(1.6)\"><text x=\"36.74\" y=\"30.42\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"47.63\" y=\"30.42\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"15.96\" y=\"66.42\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"27.85\" y=\"60.75\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">+</text><text x=\"5.85\" y=\"66.42\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"42.19\" y1=\"47.67\" x2=\"32.05\" y2=\"53.52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.99\" y1=\"50.79\" x2=\"33.85\" y2=\"56.64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.97\" y1=\"61.75\" x2=\"42.19\" y2=\"49.75\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.19\" y1=\"49.75\" x2=\"42.19\" y2=\"32.75\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(245,5) scale(1.4)\"><text x=\"21.67\" y=\"27.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"32.56\" y=\"27.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"20.67\" y1=\"26.22\" x2=\"6.33\" y2=\"34.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(345,10) scale(1.25)\"><text x=\"93.73\" y=\"68.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"104.62\" y=\"68.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"60.95\" y=\"77.45\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"50.84\" y=\"77.45\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"52.16\" y=\"44.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"64.05\" y=\"39\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">+</text><text x=\"52.55\" y=\"30.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"90.39\" y1=\"31.22\" x2=\"78.39\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.39\" y1=\"52\" x2=\"92.73\" y2=\"60.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.39\" y1=\"52\" x2=\"70.43\" y2=\"65.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.39\" y1=\"52\" x2=\"64.05\" y2=\"43.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.16\" y1=\"43.72\" x2=\"36.82\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(35,160) scale(1.6)\"><text x=\"81.98\" y=\"63.54\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"93.87\" y=\"57.88\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">+</text><text x=\"92.48\" y=\"80.88\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">2</text><text x=\"82.37\" y=\"77.54\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"49.2\" y=\"72.33\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"39.09\" y=\"72.33\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"40.41\" y=\"39.54\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"78.64\" y1=\"26.09\" x2=\"66.64\" y2=\"46.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"66.64\" y1=\"46.88\" x2=\"80.98\" y2=\"55.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"66.64\" y1=\"46.88\" x2=\"58.68\" y2=\"60.66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"66.64\" y1=\"46.88\" x2=\"52.3\" y2=\"38.6\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.41\" y1=\"38.6\" x2=\"25.07\" y2=\"46.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(255,175) scale(1.25)\"><text x=\"50.95\" y=\"66.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"62.84\" y=\"61\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">+</text><text x=\"40.84\" y=\"66.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"30.16\" y=\"30.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"54.59\" y1=\"36.96\" x2=\"54.59\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"58.19\" y1=\"36.96\" x2=\"58.19\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"77.18\" y1=\"26\" x2=\"56.39\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.39\" y1=\"38\" x2=\"42.05\" y2=\"29.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"29.16\" y1=\"29.72\" x2=\"14.82\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(410,175) scale(1.25)\"><text x=\"48.95\" y=\"66.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"28.16\" y=\"30.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"52.59\" y1=\"36.96\" x2=\"52.59\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.19\" y1=\"36.96\" x2=\"56.19\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"75.18\" y1=\"26\" x2=\"54.39\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"54.39\" y1=\"38\" x2=\"40.05\" y2=\"29.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"27.16\" y1=\"29.72\" x2=\"12.82\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"95\" y1=\"80\" x2=\"133\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M133,80 L125.9,83.6 M133,80 L125.9,76.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"114\" y=\"72\" text-anchor=\"middle\" font-size=\"12\">H⁺</text><text x=\"114\" y=\"98\" text-anchor=\"middle\" font-size=\"12\">1</text><line x1=\"310\" y1=\"80\" x2=\"345\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M345,80 L337.9,83.6 M345,80 L337.9,76.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"327.5\" y=\"98\" text-anchor=\"middle\" font-size=\"12\">2</text><line x1=\"2\" y1=\"235\" x2=\"36\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M36,235 L28.9,238.6 M36,235 L28.9,231.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"19\" y=\"227\" text-anchor=\"middle\" font-size=\"12\">~H⁺</text><text x=\"19\" y=\"253\" text-anchor=\"middle\" font-size=\"12\">3</text><line x1=\"212\" y1=\"235\" x2=\"252\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M252,235 L244.9,238.6 M252,235 L244.9,231.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"232\" y=\"227\" text-anchor=\"middle\" font-size=\"12\">−H₂O</text><text x=\"232\" y=\"253\" text-anchor=\"middle\" font-size=\"12\">4</text><line x1=\"368\" y1=\"235\" x2=\"408\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M408,235 L400.9,238.6 M408,235 L400.9,231.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"388\" y=\"227\" text-anchor=\"middle\" font-size=\"12\">−H⁺</text><text x=\"388\" y=\"253\" text-anchor=\"middle\" font-size=\"12\">5</text><path d=\"M281,54 Q247.5,86.3 201,85\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M201,85 L208.2,81.6 L208.0,88.8 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M185,94 Q175.8,110.5 165,95\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M165,95 L172.1,98.8 L166.1,102.9 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M139,277 Q124.4,267.9 133,253\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M133,253 L132.6,261.0 L126.3,257.3 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M158,244 Q171.5,230.0 185,244\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M185,244 L177.4,241.4 L182.7,236.3 Z\" fill=\"currentColor\" class=\"f-red\"/><circle cx=\"286.2\" cy=\"21.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"279.8\" cy=\"21.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"278.5\" cy=\"51.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"284.9\" cy=\"51.7\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"119.2\" cy=\"284.3\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"125.6\" cy=\"284.3\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"136.0\" cy=\"277.3\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"138.4\" cy=\"271.3\" r=\"1.8\" fill=\"currentColor\"/><text x=\"260\" y=\"152\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-gray\">step 2: methanol adds to the protonated C=O</text><text x=\"260\" y=\"322\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-gray\">step 4: a lone pair on OH pushes out water, a good leaving group</text></svg>",
  ladder_map: "<svg viewBox=\"0 0 520 280\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(200,0) scale(1.2)\"><text x=\"44.55\" y=\"20\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"22.61\" y=\"56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Cl</text><line x1=\"51.8\" y1=\"40.37\" x2=\"51.8\" y2=\"22.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.2\" y1=\"40.37\" x2=\"48.2\" y2=\"22.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.78\" y1=\"51.33\" x2=\"50\" y2=\"39.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50\" y1=\"39.33\" x2=\"36.82\" y2=\"46.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(0,170) scale(1.2)\"><text x=\"36.22\" y=\"20\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"15.44\" y=\"56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"5.33\" y=\"56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"43.47\" y1=\"40.37\" x2=\"43.47\" y2=\"22.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.87\" y1=\"40.37\" x2=\"39.87\" y2=\"22.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.45\" y1=\"51.33\" x2=\"41.67\" y2=\"39.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.67\" y1=\"39.33\" x2=\"27.33\" y2=\"47.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(115,170) scale(1.05)\"><text x=\"79.62\" y=\"24.76\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"58.84\" y=\"60.76\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"17.27\" y=\"60.76\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"86.87\" y1=\"45.13\" x2=\"86.87\" y2=\"27.1\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"83.27\" y1=\"45.13\" x2=\"83.27\" y2=\"27.1\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.5\" y1=\"42.02\" x2=\"28.26\" y2=\"50.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.3\" y1=\"45.13\" x2=\"30.06\" y2=\"53.93\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.85\" y1=\"56.1\" x2=\"85.07\" y2=\"44.1\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.07\" y1=\"44.1\" x2=\"70.73\" y2=\"52.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"57.84\" y1=\"52.37\" x2=\"43.5\" y2=\"44.1\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.5\" y1=\"44.1\" x2=\"43.5\" y2=\"20.1\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(265,170) scale(1.2)\"><text x=\"63.26\" y=\"20\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"42.47\" y=\"56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"70.5\" y1=\"40.37\" x2=\"70.5\" y2=\"22.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"66.9\" y1=\"40.37\" x2=\"66.9\" y2=\"22.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"89.49\" y1=\"51.33\" x2=\"68.7\" y2=\"39.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"68.7\" y1=\"39.33\" x2=\"54.36\" y2=\"47.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.47\" y1=\"47.61\" x2=\"27.13\" y2=\"39.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"27.13\" y1=\"39.33\" x2=\"6.35\" y2=\"51.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(395,170) scale(1.2)\"><text x=\"64.69\" y=\"13.78\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"44.95\" y=\"48.66\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"44.95\" y=\"62.66\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"71.88\" y1=\"33.37\" x2=\"71.88\" y2=\"16.11\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"68.4\" y1=\"33.37\" x2=\"68.4\" y2=\"16.11\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"90.28\" y1=\"43.99\" x2=\"70.14\" y2=\"32.36\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"70.14\" y1=\"32.36\" x2=\"56.05\" y2=\"40.5\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"43.95\" y1=\"40.5\" x2=\"29.86\" y2=\"32.36\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"29.86\" y1=\"32.36\" x2=\"9.72\" y2=\"43.99\" stroke=\"currentColor\" stroke-width=\"1.4\" /></g><line x1=\"215\" y1=\"82\" x2=\"70\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M70,165 L74.4,158.3 M70,165 L78.0,164.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"242\" y1=\"86\" x2=\"192\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M192,160 L193.0,152.1 M192,160 L199.0,156.1\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"86\" x2=\"320\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M320,160 L313.4,155.5 M320,160 L319.8,152.0\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"80\" x2=\"450\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M450,165 L442.0,164.6 M450,165 L445.6,158.3\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"150\" y=\"140\" text-anchor=\"start\" font-size=\"12.5\">H₂O</text><text x=\"224\" y=\"135\" text-anchor=\"start\" font-size=\"12.5\">RCOO⁻</text><text x=\"330\" y=\"140\" text-anchor=\"start\" font-size=\"12.5\">EtOH,</text><text x=\"330\" y=\"155\" text-anchor=\"start\" font-size=\"12.5\">pyridine</text><text x=\"398\" y=\"108\" text-anchor=\"start\" font-size=\"12.5\">2 EtNH₂</text><text x=\"50\" y=\"270\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">acid</text><text x=\"182\" y=\"270\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">anhydride</text><text x=\"322\" y=\"270\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">ester</text><text x=\"455\" y=\"270\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">amide</text><text x=\"328\" y=\"45\" text-anchor=\"start\" font-size=\"12.5\" class=\"t-gray\">acid chloride</text><path d=\"M38,165 C25,95 110,38 196,33\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-purple\" stroke-dasharray=\"5 3\"/><path d=\"M188,27 L197,33 L189,40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-purple\"/><text x=\"72\" y=\"108\" text-anchor=\"start\" font-size=\"12.5\" class=\"t-purple\" font-weight=\"600\">SOCl₂</text><text x=\"72\" y=\"122\" text-anchor=\"start\" font-size=\"11.5\" class=\"t-purple\">(uphill)</text></svg>",
  penicillin: "<svg viewBox=\"0 0 520 200\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(60,0) scale(1.25)\"><text x=\"215.8\" y=\"42.09\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-orange\">S</text><text x=\"151.32\" y=\"49.37\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"151.32\" y=\"35.37\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><text x=\"130.14\" y=\"85.37\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"165.92\" y=\"105.34\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"201.49\" y=\"78.34\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"227.24\" y=\"121.11\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"262.11\" y=\"98.47\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"273\" y=\"98.47\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"133.78\" y1=\"55.67\" x2=\"133.78\" y2=\"73.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"137.38\" y1=\"55.67\" x2=\"137.38\" y2=\"73.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"94.02\" y1=\"56.71\" x2=\"73.23\" y2=\"44.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"90\" y1=\"58.54\" x2=\"73.65\" y2=\"49.1\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.45\" y1=\"56.71\" x2=\"52.45\" y2=\"80.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.05\" y1=\"59.27\" x2=\"56.05\" y2=\"78.14\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.23\" y1=\"92.71\" x2=\"94.02\" y2=\"80.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.65\" y1=\"88.31\" x2=\"90\" y2=\"78.87\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"182.71\" y1=\"77.43\" x2=\"173.85\" y2=\"92.77\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"185.82\" y1=\"79.23\" x2=\"176.97\" y2=\"94.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"242.45\" y1=\"93.32\" x2=\"234.65\" y2=\"108.63\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"245.66\" y1=\"94.95\" x2=\"237.86\" y2=\"110.26\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"262.3\" y1=\"58.74\" x2=\"239.12\" y2=\"52.53\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"239.12\" y1=\"52.53\" x2=\"256.09\" y2=\"35.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"239.12\" y1=\"52.53\" x2=\"226.13\" y2=\"42.01\" stroke=\"currentColor\" stroke-width=\"1.44\" /><polygon points=\"200,50 208,47 207,45 \" fill=\"currentColor\" class=\"f-gray s-gray\" stroke=\"currentColor\" stroke-width=\"1.44\" /><polygon points=\"207,45 208,47 216,43 214,39 \" fill=\"currentColor\" class=\"f-gray s-gray\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"200.34\" y1=\"50.49\" x2=\"177.15\" y2=\"56.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><polygon points=\"177,57 170,52 169,53 \" fill=\"currentColor\" class=\"f-gray s-gray\" stroke=\"currentColor\" stroke-width=\"1.44\" /><polygon points=\"169,53 170,52 163,47 161,50 \" fill=\"currentColor\" class=\"f-gray s-gray\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"150.32\" y1=\"48.2\" x2=\"135.58\" y2=\"56.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"135.58\" y1=\"56.71\" x2=\"114.8\" y2=\"44.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"114.8\" y1=\"44.71\" x2=\"94.02\" y2=\"56.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.23\" y1=\"44.71\" x2=\"52.45\" y2=\"56.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.45\" y1=\"80.71\" x2=\"73.23\" y2=\"92.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"94.02\" y1=\"56.71\" x2=\"94.02\" y2=\"80.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"177.15\" y1=\"56.71\" x2=\"183.37\" y2=\"79.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"183.37\" y1=\"79.89\" x2=\"200.49\" y2=\"75.3\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"200.34\" y1=\"50.49\" x2=\"204.67\" y2=\"66.68\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"212.6\" y1=\"73.99\" x2=\"230.52\" y2=\"74.93\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"239.12\" y1=\"52.53\" x2=\"230.52\" y2=\"74.93\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"231.74\" y1=\"77.5\" x2=\"232.37\" y2=\"77.1\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"232.96\" y1=\"80.08\" x2=\"234.22\" y2=\"79.26\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"234.19\" y1=\"82.65\" x2=\"236.07\" y2=\"81.42\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"235.41\" y1=\"85.22\" x2=\"237.92\" y2=\"83.59\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"236.63\" y1=\"87.79\" x2=\"239.78\" y2=\"85.75\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"237.86\" y1=\"90.37\" x2=\"241.63\" y2=\"87.91\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"239.08\" y1=\"92.94\" x2=\"243.48\" y2=\"90.08\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"240.3\" y1=\"95.51\" x2=\"245.33\" y2=\"92.24\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"243.59\" y1=\"95.06\" x2=\"261.11\" y2=\"94.14\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><rect x=\"262\" y=\"50\" width=\"70\" height=\"90\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-purple\" stroke-dasharray=\"4 3\"/><text x=\"300\" y=\"175\" text-anchor=\"middle\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">β-lactam: a strained four-membered amide</text><text x=\"130\" y=\"150\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">penicillin G</text></svg>",
  reduce: "<svg viewBox=\"0 0 520 330\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,95) scale(1.1)\"><text x=\"87.09\" y=\"54.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"66.31\" y=\"18.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"73.56\" y1=\"39.04\" x2=\"73.56\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"69.96\" y1=\"39.04\" x2=\"69.96\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.97\" y1=\"50\" x2=\"30.19\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"46.95\" y1=\"51.84\" x2=\"30.6\" y2=\"42.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"9.4\" y1=\"50\" x2=\"9.4\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"13\" y1=\"52.56\" x2=\"13\" y2=\"71.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"30.19\" y1=\"86\" x2=\"50.97\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"30.6\" y1=\"81.6\" x2=\"46.95\" y2=\"72.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"113.33\" y1=\"38\" x2=\"98.99\" y2=\"46.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"86.09\" y1=\"46.28\" x2=\"71.76\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"71.76\" y1=\"38\" x2=\"50.97\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"30.19\" y1=\"38\" x2=\"9.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"9.4\" y1=\"74\" x2=\"30.19\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.97\" y1=\"50\" x2=\"50.97\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(380,0) scale(1.1)\"><text x=\"82.39\" y=\"35.85\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"93.28\" y=\"35.85\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"46.27\" y1=\"31.18\" x2=\"25.48\" y2=\"19.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.25\" y1=\"33.02\" x2=\"25.9\" y2=\"23.58\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"4.7\" y1=\"31.18\" x2=\"4.7\" y2=\"55.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"8.3\" y1=\"33.74\" x2=\"8.3\" y2=\"52.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.48\" y1=\"67.18\" x2=\"46.27\" y2=\"55.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.9\" y1=\"62.78\" x2=\"42.25\" y2=\"53.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"81.39\" y1=\"27.46\" x2=\"67.05\" y2=\"19.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"67.05\" y1=\"19.18\" x2=\"46.27\" y2=\"31.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.48\" y1=\"19.18\" x2=\"4.7\" y2=\"31.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"4.7\" y1=\"55.18\" x2=\"25.48\" y2=\"67.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"46.27\" y1=\"31.18\" x2=\"46.27\" y2=\"55.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(380,105) scale(1.1)\"><text x=\"90.67\" y=\"35.85\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"76.65\" y1=\"22.02\" x2=\"88.77\" y2=\"29.02\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"76.23\" y1=\"17.62\" x2=\"90.57\" y2=\"25.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"54.55\" y1=\"31.18\" x2=\"33.76\" y2=\"19.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.53\" y1=\"33.02\" x2=\"34.18\" y2=\"23.58\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"12.98\" y1=\"31.18\" x2=\"12.98\" y2=\"55.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"16.58\" y1=\"33.74\" x2=\"16.58\" y2=\"52.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.76\" y1=\"67.18\" x2=\"54.55\" y2=\"55.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.18\" y1=\"62.78\" x2=\"50.53\" y2=\"53.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"76.23\" y1=\"17.62\" x2=\"54.55\" y2=\"31.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.76\" y1=\"19.18\" x2=\"12.98\" y2=\"31.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"12.98\" y1=\"55.18\" x2=\"33.76\" y2=\"67.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"54.55\" y1=\"31.18\" x2=\"54.55\" y2=\"55.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(380,205) scale(1.1)\"><text x=\"86.43\" y=\"59.57\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"97.32\" y=\"59.57\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"59.09\" y1=\"46.12\" x2=\"38.31\" y2=\"34.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.07\" y1=\"47.96\" x2=\"38.72\" y2=\"38.52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.52\" y1=\"46.12\" x2=\"17.52\" y2=\"70.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"21.12\" y1=\"48.68\" x2=\"21.12\" y2=\"67.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.31\" y1=\"82.12\" x2=\"59.09\" y2=\"70.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.72\" y1=\"77.72\" x2=\"55.07\" y2=\"68.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"67.88\" y1=\"13.33\" x2=\"79.88\" y2=\"34.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.88\" y1=\"34.12\" x2=\"100.66\" y2=\"22.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.88\" y1=\"34.12\" x2=\"87.83\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.88\" y1=\"34.12\" x2=\"59.09\" y2=\"46.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.31\" y1=\"34.12\" x2=\"17.52\" y2=\"46.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.52\" y1=\"70.12\" x2=\"38.31\" y2=\"82.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.09\" y1=\"46.12\" x2=\"59.09\" y2=\"70.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"140\" y1=\"130\" x2=\"375\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M375,50 L369.4,55.7 M375,50 L367.1,48.9\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"150\" x2=\"375\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M375,150 L367.9,153.6 M375,150 L367.9,146.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"257.5\" y=\"142\" text-anchor=\"middle\" font-size=\"12\">DIBAL-H, −78 °C</text><text x=\"257.5\" y=\"168\" text-anchor=\"middle\" font-size=\"12\">then H₂O</text><line x1=\"140\" y1=\"170\" x2=\"375\" y2=\"255\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M375,255 L367.1,256.0 M375,255 L369.5,249.2\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"440\" y=\"98\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">benzyl alcohol (1°)</text><text x=\"440\" y=\"200\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">benzaldehyde</text><text x=\"445\" y=\"322\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2-phenyl-2-propanol (3°)</text><text x=\"67\" y=\"222\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">methyl benzoate</text><text x=\"255\" y=\"82\" text-anchor=\"middle\" font-size=\"12\" transform=\"rotate(-18.8 255 82)\">1. LiAlH₄ · 2. H₃O⁺</text><text x=\"262\" y=\"114\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-purple\" transform=\"rotate(-18.8 262 114)\">two hydrides</text><text x=\"252\" y=\"202\" text-anchor=\"middle\" font-size=\"12\" transform=\"rotate(19.9 252 202)\">1. 2 CH₃MgBr · 2. H₃O⁺</text><text x=\"245\" y=\"235\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-purple\" transform=\"rotate(19.9 245 235)\">ketone is an intermediate</text></svg>",
  sapon: "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,15) scale(1.4)\"><text x=\"51.37\" y=\"63.74\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"30.59\" y=\"27.74\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"55.02\" y1=\"34.03\" x2=\"55.02\" y2=\"52.07\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"58.62\" y1=\"34.03\" x2=\"58.62\" y2=\"52.07\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"77.61\" y1=\"23.07\" x2=\"56.82\" y2=\"35.07\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.82\" y1=\"35.07\" x2=\"42.48\" y2=\"26.79\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"29.59\" y1=\"26.79\" x2=\"15.25\" y2=\"35.07\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(135,15) scale(1.4)\"><text x=\"15.98\" y=\"22.52\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"27.87\" y=\"16.86\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"5.87\" y=\"22.52\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text></g><g transform=\"translate(260,5) scale(1.4)\"><text x=\"79.3\" y=\"66.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"91.19\" y=\"61\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"46.52\" y=\"75.45\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"36.41\" y=\"75.45\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"37.73\" y=\"42.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"75.96\" y1=\"29.22\" x2=\"63.96\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.96\" y1=\"50\" x2=\"78.3\" y2=\"58.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.96\" y1=\"50\" x2=\"56.01\" y2=\"63.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.96\" y1=\"50\" x2=\"49.63\" y2=\"41.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"36.73\" y1=\"41.72\" x2=\"22.39\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(150,195) scale(1.4)\"><text x=\"9.16\" y=\"32.1\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"21.05\" y=\"26.43\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><line x1=\"35.39\" y1=\"15.43\" x2=\"25.05\" y2=\"21.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(0,155) scale(1.4)\"><text x=\"58.02\" y=\"61.02\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"37.5\" y=\"25.47\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"81.25\" y=\"54.89\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\">H</text><text x=\"2.94\" y=\"69.31\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\">H</text><text x=\"9.02\" y=\"46.65\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\">H</text><text x=\"25.6\" y=\"75.39\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\">H</text><line x1=\"43.72\" y1=\"46.06\" x2=\"43.72\" y2=\"27.47\" stroke=\"currentColor\" stroke-width=\"1.24\" /><line x1=\"40.62\" y1=\"46.06\" x2=\"40.62\" y2=\"27.47\" stroke=\"currentColor\" stroke-width=\"1.24\" /><line x1=\"57.02\" y1=\"53.75\" x2=\"42.17\" y2=\"45.17\" stroke=\"currentColor\" stroke-width=\"1.24\" /><line x1=\"42.17\" y1=\"45.17\" x2=\"21.64\" y2=\"57.02\" stroke=\"currentColor\" stroke-width=\"1.24\" /><line x1=\"68.36\" y1=\"55.5\" x2=\"80.25\" y2=\"52.31\" stroke=\"currentColor\" stroke-width=\"1.24\" /><line x1=\"21.64\" y1=\"57.02\" x2=\"12.61\" y2=\"62.24\" stroke=\"currentColor\" stroke-width=\"1.24\" /><line x1=\"21.64\" y1=\"57.02\" x2=\"16.81\" y2=\"48.65\" stroke=\"currentColor\" stroke-width=\"1.24\" /><line x1=\"21.64\" y1=\"57.02\" x2=\"26.47\" y2=\"65.39\" stroke=\"currentColor\" stroke-width=\"1.24\" /></g><g transform=\"translate(300,160) scale(1.4)\"><text x=\"35.63\" y=\"27.74\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"14.84\" y=\"63.74\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"26.73\" y=\"58.07\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><line x1=\"42.87\" y1=\"48.11\" x2=\"42.87\" y2=\"30.07\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.27\" y1=\"48.11\" x2=\"39.27\" y2=\"30.07\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.86\" y1=\"59.07\" x2=\"41.07\" y2=\"47.07\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.07\" y1=\"47.07\" x2=\"30.73\" y2=\"53.04\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(435,190) scale(1.4)\"><text x=\"21.67\" y=\"23.6\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"32.56\" y=\"23.6\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"20.67\" y1=\"22.65\" x2=\"6.33\" y2=\"30.93\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"200\" y1=\"75\" x2=\"255\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M255,75 L247.9,78.6 M255,75 L247.9,71.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"227.5\" y=\"93\" text-anchor=\"middle\" font-size=\"12\">addition</text><line x1=\"420\" y1=\"75\" x2=\"450\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M450,110 L442.6,107.0 M450,110 L448.1,102.2\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"225\" y1=\"235\" x2=\"295\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M295,235 L287.9,238.6 M295,235 L287.9,231.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"260\" y=\"227\" text-anchor=\"middle\" font-size=\"12\">proton transfer</text><text x=\"260\" y=\"253\" text-anchor=\"middle\" font-size=\"12\">K ≈ 10¹¹</text><path d=\"M163,57 Q130.0,70.4 95,64\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M95,64 L102.7,61.7 L101.4,68.9 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M94,79 Q105.7,83.9 98,94\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M98,94 L99.4,86.1 L105.2,90.5 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M372,108 Q354.0,103.3 361,86\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M361,86 L361.7,94.0 L354.9,91.2 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M335,66 Q332.3,47.9 314,48\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M314,48 L321.1,44.3 L321.1,51.6 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M153,236 Q137.0,242.2 126,229\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M126,229 L133.4,232.1 L127.8,236.8 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M104,230 Q106.7,243.7 93,246\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M93,246 L99.4,241.2 L100.6,248.4 Z\" fill=\"currentColor\" class=\"f-red\"/><circle cx=\"168.2\" cy=\"25.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"161.8\" cy=\"25.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"161.8\" cy=\"55.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"168.2\" cy=\"55.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"180.6\" cy=\"47.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"182.2\" cy=\"41.3\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"97.8\" cy=\"110.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"102.4\" cy=\"106.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"76.6\" cy=\"106.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"81.2\" cy=\"110.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"395.6\" cy=\"95.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"395.6\" cy=\"88.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"379.4\" cy=\"107.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"385.6\" cy=\"105.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"365.1\" cy=\"99.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"369.2\" cy=\"103.9\" r=\"1.8\" fill=\"currentColor\"/><text x=\"418\" y=\"240\" text-anchor=\"middle\" font-size=\"16\">+</text><text x=\"450\" y=\"132\" text-anchor=\"middle\" font-size=\"12\">elimination</text><circle cx=\"155.5\" cy=\"230.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"155.5\" cy=\"236.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"167.3\" cy=\"248.4\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"173.7\" cy=\"248.4\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"169.7\" cy=\"218.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"163.5\" cy=\"219.7\" r=\"1.8\" fill=\"currentColor\"/><text x=\"260\" y=\"292\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-gray\">the last step is downhill by about 60 kJ/mol, so saponification goes to completion</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-acyl-substitution',
  title: 'Nucleophilic Acyl Substitution',
  summary: 'One mechanism runs the whole carboxyl family: addition to the C=O, then elimination of a leaving group. Use it to interconvert derivatives down the reactivity ladder, make and hydrolyze esters (Fischer esterification, saponification and soap), understand why amides and peptide bonds are so stable, and predict what LiAlH₄, DIBAL-H and Grignard reagents do to esters and amides.',
  minutes: 21,
  objectives: [
    'Draw the addition–elimination mechanism through a tetrahedral intermediate, and explain how it differs from addition to aldehydes and ketones and from SN2',
    'Predict the product when an acid chloride or anhydride meets water, an alcohol, an amine or a carboxylate, and explain why reactions only run down the reactivity ladder',
    'Write the mechanism of Fischer esterification, and use its equilibrium constant to calculate how excess alcohol drives the yield',
    'Explain why base-promoted ester hydrolysis (saponification) is irreversible, and do soap-making stoichiometry',
    'Explain the stability of amides and peptide bonds, and the reactivity of the β-lactam in penicillin',
    'Predict the products of esters and amides with LiAlH₄, DIBAL-H and Grignard reagents',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Addition, then elimination',
      blocks: [
        {
          type: 'p',
          text: 'You already know the first half of this reaction. A nucleophile attacks the carbon of a C=O and pushes the π electrons onto oxygen, exactly as in the aldehyde and ketone unit. The difference is what happens next. An aldehyde\'s new alkoxide has nothing to lose but H⁻ or R⁻, which are hopeless leaving groups, so it waits to be protonated. An acid derivative\'s carbon carries a **[[ochem-leaving-group|leaving group]]**, so the oxygen\'s lone pair comes back down, re-forms the C=O and kicks the leaving group out.',
        },
        {
          type: 'definition',
          term: 'Nucleophilic acyl substitution',
          text: 'The replacement of a leaving group L on an acyl carbon by a nucleophile, $\\ce{RCOL + Nu- -> RCONu + L-}$, in two steps: **addition** of the nucleophile to the C=O, giving a [[ochem-tetrahedral-intermediate|tetrahedral intermediate]], then **elimination** of L as the C=O re-forms. Also called addition–elimination or acyl transfer.',
        },
        {
          type: 'figure',
          svg: FIG.addelim,
          alt: 'Mechanism of methoxide with acetyl chloride. Step 1: a curved arrow from a lone pair of methoxide oxygen to the carbonyl carbon, and a curved arrow from the C=O double bond to the carbonyl oxygen. The tetrahedral intermediate carries OCH3, CH3, Cl and O−. Step 2: a curved arrow from an O− lone pair back to the C–O bond and a curved arrow from the C–Cl bond to chlorine. Products: methyl acetate and chloride ion.',
          caption: 'Four arrows, two steps. The carbon goes from trigonal ($sp^2$) to tetrahedral ($sp^3$) and back. The C=O survives in the product; only the group attached to it has changed.',
        },
        {
          type: 'p',
          text: 'Which group leaves? The tetrahedral intermediate is a fork in the road: it can expel the group that just arrived (going back to the start) or the original leaving group (going forward). It expels the **best leaving group**, the weakest base. Methoxide adding to an acid chloride gives an intermediate holding $\\ce{CH3O-}$ and $\\ce{Cl-}$; chloride (from HCl, pKa −7) leaves, methoxide (from methanol, pKa 15.5) stays. That single comparison is why reactions run **down** the reactivity ladder from the last lesson.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why not SN2?',
          text: 'Acyl chlorides have a C–Cl bond, so why doesn\'t a nucleophile just displace chloride from the back, as with an alkyl chloride? Because the C=O π* orbital is the [[gchem-homo-lumo|LUMO]]: it is low in energy, sits right on the carbonyl carbon and is open to attack from above or below the plane. Back-side attack on the C–Cl σ* would have to come in along the plane through the other substituents. Adding to the π bond is far easier, so acyl substitution never inverts anything; there is nothing tetrahedral to invert until the nucleophile arrives.',
        },
        {
          type: 'deepdive',
          title: 'Evidence that the tetrahedral intermediate exists',
          blocks: [
            {
              type: 'p',
              text: 'In 1951 Myron Bender hydrolyzed ethyl benzoate whose carbonyl oxygen was the heavy isotope ¹⁸O, and stopped the reaction halfway. The **recovered, unreacted ester** had lost some of its ¹⁸O. That can only happen if the ester went partway to a tetrahedral intermediate with two equivalent OH groups (one labeled, one not), and that intermediate sometimes fell back to ester by losing the labeled oxygen as water. A one-step displacement could never exchange the carbonyl oxygen.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Hydroxide adds to the C=O of acetyl chloride to form a tetrahedral intermediate with substituents $\\ce{CH3}$, $\\ce{OH}$, $\\ce{O-}$ and $\\ce{Cl}$. What happens next?',
      options: [
        { text: 'The C=O re-forms and expels $\\ce{Cl-}$, giving acetic acid.', correct: true, why: 'Chloride is by far the weakest base on the carbon (HCl, pKa −7), so it is the group that leaves. (In base, the acetic acid is then deprotonated to acetate.)' },
        { text: 'The C=O re-forms and expels $\\ce{HO-}$, giving back acetyl chloride.', why: 'This step does happen in principle (it is the reverse of the addition), but hydroxide is a much worse leaving group than chloride, so the forward path wins overwhelmingly.' },
        { text: 'The C=O re-forms and expels $\\ce{CH3-}$, giving $\\ce{ClCOOH}$.', why: 'A carbanion (conjugate acid methane, pKa about 50) is about the worst leaving group there is. C–C bonds do not break in acyl substitution.' },
        { text: 'The alkoxide is protonated to give a stable tetrahedral product, as with aldehydes.', why: 'That is what happens when the carbonyl carbon carries no leaving group. Here chloride is available, and collapse back to a C=O is much faster than waiting for a proton.' },
      ],
      explanation: 'A tetrahedral intermediate collapses by expelling its best leaving group, which is the weakest base attached: here $\\ce{Cl-}$ (pKa of HCl −7) beats $\\ce{HO-}$ (15.7) and $\\ce{CH3-}$ (about 50). The C=O re-forms, so the net result is substitution of Cl by OH.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Going down the ladder',
      blocks: [
        {
          type: 'p',
          text: 'Since every reaction expels the better leaving group, an acid chloride can be turned into **every** other derivative, an anhydride into an ester, acid or amide, and an ester into an amide (slowly). Each arrow below is the same addition–elimination with a different nucleophile.',
        },
        {
          type: 'figure',
          svg: FIG.ladder_map,
          alt: 'Acetyl chloride at the top with four arrows down: with water to acetic acid, with a carboxylate to acetic anhydride, with ethanol and pyridine to ethyl acetate, with two equivalents of ethylamine to N-ethylacetamide. A dashed purple arrow labeled SOCl2 (uphill) goes from acetic acid back up to acetyl chloride.',
          caption: 'The acid chloride is the hub. Every step down releases HCl, which is why a base (pyridine, or a second equivalent of the amine) is added to mop it up. To climb back up, $\\ce{SOCl2}$ converts the acid into the acid chloride.',
        },
        {
          type: 'list',
          items: [
            '**Water** gives the carboxylic acid (acid chlorides fume in moist air for this reason).',
            '**Alcohols** give esters. Pyridine neutralizes the HCl so it does not protonate anything else.',
            '**Amines** give amides. Use **two** equivalents: the second one is the base that takes the HCl, ending up as an ammonium salt. A protonated amine has no lone pair and cannot react, so with only one equivalent the yield stops at 50%.',
            '**Carboxylates** give anhydrides.',
          ],
        },
        {
          type: 'p',
          text: 'Anhydrides do the same jobs a little more gently, releasing a carboxylic acid instead of HCl. Aspirin is made this way: salicylic acid\'s phenol OH attacks acetic anhydride, and acetate leaves.',
        },
        {
          type: 'derivation',
          title: 'Predict: benzoyl chloride + 2 equivalents of dimethylamine',
          steps: [
            { tex: '\\ce{C6H5COCl + (CH3)2NH}', why: 'The nucleophile is the amine nitrogen\'s lone pair; the electrophile is the acyl carbon.' },
            { tex: '\\ce{->} \\text{tetrahedral intermediate: } \\ce{C6H5C(O^-)(Cl)N^+H(CH3)2}', why: 'Addition: N–C bond forms, π electrons go to O. Nitrogen now has four bonds and a + charge.' },
            { tex: '\\ce{->} \\ce{C6H5CON^+H(CH3)2 + Cl-}', why: 'Elimination: chloride is the best leaving group on the carbon.' },
            { tex: '\\ce{C6H5CON^+H(CH3)2 + (CH3)2NH -> C6H5CON(CH3)2 + (CH3)2NH2+}', why: 'The second equivalent of amine removes the N–H proton.' },
          ],
          result: 'N,N-dimethylbenzamide plus dimethylammonium chloride. Net: $\\ce{C6H5COCl + 2(CH3)2NH -> C6H5CON(CH3)2 + (CH3)2NH2+Cl-}$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How $\\ce{SOCl2}$ climbs the ladder',
          text: 'Thionyl chloride turns the acid\'s OH into a chlorosulfite, $\\ce{-OS(O)Cl}$, an excellent leaving group (it falls apart into $\\ce{SO2}$ gas and $\\ce{Cl-}$). Chloride then adds to the C=O and the chlorosulfite leaves. Going "uphill" is possible only because the reagent pays for it, and the escaping gases make it irreversible.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Benzoyl chloride, $\\ce{C6H5COCl}$, is treated separately with four nucleophiles. Name each organic product.',
      template: 'With water: ___. With ethanol and pyridine: ___. With excess ammonia: ___. With sodium acetate: ___.',
      blanks: [{ answers: ['benzoic acid'] }, { answers: ['ethyl benzoate'] }, { answers: ['benzamide'] }, { answers: ['acetic benzoic anhydride'] }],
      wordBank: ['benzoic acid', 'ethyl benzoate', 'benzamide', 'acetic benzoic anhydride', 'benzyl alcohol', 'benzaldehyde', 'ethyl acetate'],
      explanation: 'Each nucleophile replaces Cl through a tetrahedral intermediate. Water → benzoic acid. Ethanol → ethyl benzoate, $\\ce{C6H5CO2CH2CH3}$ (pyridine takes the HCl). Ammonia → benzamide, $\\ce{C6H5CONH2}$ (the excess ammonia takes the HCl as $\\ce{NH4Cl}$). Acetate → the mixed anhydride $\\ce{C6H5COOCOCH3}$, named with the two acids in alphabetical order. Benzyl alcohol and benzaldehyde would need a reducing agent: substitution never changes the oxidation level.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'Aspirin is the acetyl ester of salicylic acid (2-hydroxybenzoic acid). Which reagent is used industrially to acetylate the phenol OH?',
      options: [
        { text: 'Acetic acid, with no catalyst', why: 'A carboxylic acid is low on the ladder, and phenols are weak nucleophiles. Mixing them gives essentially no ester (and with heat and acid, only an unfavorable equilibrium).' },
        { text: 'Acetic anhydride (with a little acid catalyst)', correct: true, why: 'An anhydride is reactive enough to acylate a phenol, its leaving group is acetate, and the by-product is acetic acid, which is easy to remove. This is the standard route, in teaching labs and in factories.' },
        { text: 'Ethyl acetate', why: 'An ester is barely more reactive than the product ester; exchanging it would need forcing conditions and would be an equilibrium.' },
        { text: 'Acetamide', why: 'An amide is at the bottom of the ladder. Going from an amide to an ester means climbing up, which addition–elimination will not do.' },
      ],
      explanation: 'You need an acyl donor above an ester on the ladder: an acid chloride or an anhydride. Acetic anhydride is cheaper and gentler than acetyl chloride and releases acetic acid instead of corrosive HCl, so it is the industrial choice for the tens of thousands of tonnes of aspirin made each year.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Fischer esterification: an equilibrium you steer',
      blocks: [
        {
          type: 'p',
          text: 'Can a carboxylic acid itself make an ester? Directly, no: hydroxide is a poor leaving group and alcohols are weak nucleophiles. Add a strong acid catalyst (a few drops of $\\ce{H2SO4}$) and heat, and it works. This is [[ochem-fischer-esterification|Fischer esterification]], $\\ce{RCOOH + R\'OH <=> RCOOR\' + H2O}$.',
        },
        {
          type: 'figure',
          svg: FIG.fischer,
          alt: 'Fischer esterification of acetic acid with methanol in five numbered steps over two rows. 1: protonation of the carbonyl oxygen. 2: methanol\'s lone pair attacks the protonated carbonyl carbon (curved arrows shown), giving a tetrahedral oxonium ion. 3: proton transfer gives a tetrahedral intermediate with an OH2+ group. 4: a lone pair on the remaining OH pushes out water (curved arrows shown), giving a protonated ester. 5: loss of H+ gives methyl acetate.',
          caption: 'The acid catalyst does two jobs: protonating the C=O makes the carbon far more electrophilic for the weak nucleophile (step 2), and protonating an OH turns it into water, a good leaving group (step 4). The proton is returned in step 5, so it is a true [[gchem-catalyst|catalyst]].',
        },
        {
          type: 'p',
          text: 'Every step is reversible, so the reaction stops at equilibrium. For acetic acid and ethanol, $K \\approx 4$: start with one equivalent of each and you get only two-thirds conversion. To do better, use [[gchem-le-chatelier|Le Chatelier]]: use the alcohol as the solvent (a large excess), or remove water as it forms (a Dean–Stark trap, or molecular sieves).',
        },
        {
          type: 'derivation',
          title: 'Yield with 1 equivalent of each, $K = 4$',
          steps: [
            { tex: 'K = \\frac{[\\text{ester}][\\ce{H2O}]}{[\\text{acid}][\\text{alcohol}]} = \\frac{x \\cdot x}{(1 - x)(1 - x)} = 4', why: 'Start with 1 mol of each; $x$ mol react. Water is a product here, not the solvent, so it appears in $K$.' },
            { tex: '\\frac{x}{1 - x} = 2', why: 'Take the square root of both sides (both sides positive since $0 < x < 1$).' },
            { tex: 'x = 2 - 2x \\implies x = \\tfrac{2}{3}', why: 'Solve the linear equation.' },
          ],
          result: 'Only 67% of the acid becomes ester. With $n$ equivalents of alcohol the equation becomes $\\dfrac{x^2}{(1 - x)(n - x)} = K$, a quadratic; the graph solves it for you.',
        },
        {
          type: 'graph',
          x: [0, 12],
          y: [0, 1.05],
          xStep: 1,
          yStep: 0.25,
          functions: [{ expr: '(k(1 + x) - sqrt(k^2(1 + x)^2 - 4(k - 1)k x))/(2(k - 1))', label: 'fraction of acid converted to ester', color: 'blue', domain: [0.1, 12] }],
          points: [{ x: 1, y: '(2k - sqrt(4k^2 - 4(k - 1)k))/(2(k - 1))', label: '1 : 1', color: 'red' }],
          hlines: [{ y: 1, label: 'complete', color: 'gray' }],
          sliders: [{ name: 'k', min: 1.5, max: 10, step: 0.1, value: 4, label: 'equilibrium constant $K$' }],
          readouts: [
            { label: 'yield with 1 equiv alcohol $=$', expr: '(2k - sqrt(4k^2 - 4(k - 1)k))/(2(k - 1))', digits: 3 },
            { label: 'yield with 10 equiv alcohol $=$', expr: '(11k - sqrt(121k^2 - 40(k - 1)k))/(2(k - 1))', digits: 3 },
          ],
          caption: 'Equilibrium yield of ester versus equivalents of alcohol per acid, from $x^2 = K(1 - x)(n - x)$. With $K = 4$, one equivalent gives 0.67 and ten give 0.97. Excess of the cheap reagent is the standard trick.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Flavors in a flask',
          text: 'Small esters are the smells of fruit: 3-methylbutyl acetate (isoamyl acetate) is banana, ethyl butanoate pineapple, octyl acetate orange, methyl salicylate wintergreen. Fischer esterification of the matching acid and alcohol is a classic teaching-lab experiment for exactly this reason.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Put the steps of acid-catalyzed Fischer esterification of acetic acid with methanol in order.',
      lines: [
        'The carbonyl oxygen is protonated by the acid catalyst.',
        'Methanol\'s oxygen adds to the carbonyl carbon, giving a tetrahedral intermediate.',
        'A proton moves from the newly added $\\ce{CH3O+H}$ group to one of the OH groups.',
        'The C=O re-forms and water leaves.',
        'The protonated ester loses $\\ce{H+}$, regenerating the catalyst.',
      ],
      explanation: 'Protonate, add, transfer a proton, eliminate, deprotonate. The sequence makes the carbonyl more electrophilic before the weak nucleophile arrives, and converts a poor leaving group ($\\ce{HO-}$) into a good one ($\\ce{H2O}$) before it leaves. Read backwards, these are exactly the steps of acid-catalyzed ester hydrolysis.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Acetic acid is esterified with ethanol ($K = 4.0$) using **10 equivalents** of ethanol per mole of acid. What fraction of the acid is converted to ester at equilibrium? Give three decimal places.',
      hint: 'Solve $\\dfrac{x^2}{(1 - x)(10 - x)} = 4$, which rearranges to $3x^2 - 44x + 40 = 0$. Take the root between 0 and 1.',
      label: 'fraction converted $=$',
      answer: '(44 - sqrt(44^2 - 4*3*40))/6',
      answerTex: '0.974',
      tolerance: 0.0005,
      explanation: '$x^2 = 4(1 - x)(10 - x) = 4(10 - 11x + x^2)$, so $3x^2 - 44x + 40 = 0$. The quadratic formula gives $x = \\dfrac{44 \\pm \\sqrt{1936 - 480}}{6} = \\dfrac{44 \\pm 38.16}{6}$. The root $13.7$ is impossible (more ester than acid); the other is $x = 0.974$. Ten equivalents of alcohol raise the yield from 67% to 97% without changing $K$ at all.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Ester hydrolysis and soap',
      blocks: [
        {
          type: 'p',
          text: 'Run Fischer esterification backwards, in lots of water with acid, and you hydrolyze an ester: same steps, same equilibrium. In **base**, ester hydrolysis behaves differently: it goes to completion. Hydroxide adds to the C=O, methoxide leaves, and then comes the decisive step.',
        },
        {
          type: 'figure',
          svg: FIG.sapon,
          alt: 'Saponification of methyl acetate. Top row: hydroxide\'s lone pair attacks the carbonyl carbon of methyl acetate (curved arrows), giving a tetrahedral intermediate with O−, OH, OCH3 and CH3; curved arrows show the O− lone pair re-forming C=O and the C–OCH3 bond breaking. Bottom row: methoxide removes the O–H proton of acetic acid (curved arrows), giving acetate and methanol, with K about 10^11.',
          caption: 'The product acid (pKa 4.8) meets a base (methoxide, conjugate acid pKa 15.5). The proton transfer has $K = 10^{15.5 - 4.8} \\approx 10^{11}$. A carboxylate cannot be attacked by methanol, so nothing can run backwards.',
        },
        {
          type: 'definition',
          term: 'Saponification',
          text: '[[ochem-saponification|Saponification]] is base-promoted ester hydrolysis: $\\ce{RCOOR\' + NaOH -> RCOO^-Na+ + R\'OH}$. Hydroxide is consumed (one per ester), so it is a reagent, not a catalyst; acidifying afterwards gives the free carboxylic acid.',
        },
        {
          type: 'p',
          text: 'The name means "soap making". Fats and oils are **triglycerides**: triesters of glycerol with three long-chain fatty acids. Boil one with lye and you get glycerol plus three sodium carboxylates, which is soap. Each soap molecule has a charged carboxylate head that loves water and a 12–18 carbon tail that loves grease. In water the tails cluster into **micelles** with grease dissolved in their oily core, and the micelles rinse away.',
        },
        {
          type: 'derivation',
          title: 'Soap stoichiometry: NaOH for 1 mol of tristearin',
          steps: [
            { tex: '\\ce{C3H5(OCOC17H35)3 + 3NaOH -> C3H5(OH)3 + 3C17H35COONa}', why: 'Three ester groups, so three hydroxides. The products are glycerol and sodium stearate, a common bar-soap ingredient.' },
            { tex: 'M(\\text{tristearin}) = 891.5\\ \\text{g/mol}, \\quad M(\\ce{NaOH}) = 40.00\\ \\text{g/mol}', why: 'Formula $\\ce{C57H110O6}$.' },
            { tex: 'm(\\ce{NaOH}) = 3 \\times 40.00 = 120.0\\ \\text{g per } 891.5\\ \\text{g of fat}', why: 'Mole ratio 3 : 1. Soap makers call the mass of base per gram of fat the saponification value.' },
          ],
          result: 'Every 891.5 g of tristearin needs 120.0 g of NaOH. Too little base leaves greasy fat; too much leaves caustic soap.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why acid only catalyzes but base is used up',
          text: 'In acid, the final product is the neutral carboxylic acid, which can be re-protonated and attacked by the alcohol: everything stays in equilibrium, and $\\ce{H+}$ is regenerated. In base, the final product is a carboxylate, whose negative charge repels nucleophiles and whose $\\ce{O-}$ is an awful leaving group. The hydroxide has been converted into water plus a carboxylate, so you need a full equivalent, and the reaction is irreversible.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student argues about the last step of saponifying methyl acetate. Tap the first incorrect line.',
      lines: [
        'After methoxide leaves, the mixture contains acetic acid (pKa 4.8) and methoxide (conjugate acid methanol, pKa 15.5).',
        'For a proton transfer, $K = 10^{\\,\\text{p}K_a(\\text{product acid}) - \\text{p}K_a(\\text{reactant acid})}$.',
        'Here the reactant acid is acetic acid and the product acid is methanol, so $K = 10^{4.8 - 15.5} = 10^{-10.7}$.',
        'So the proton transfer barely happens, and saponification is an equilibrium just like Fischer esterification.',
      ],
      errorLines: [3],
      explanation: 'The exponent is upside down. With the formula from line 2, $K = 10^{15.5 - 4.8} = 10^{+10.7}$: the stronger acid (acetic, lower pKa) gives its proton to the stronger base (methoxide) to make the weaker acid (methanol), which is always favored. So the proton transfer is essentially complete, and it is what makes saponification irreversible.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'How many grams of NaOH are needed to saponify **100.0 g** of glyceryl tristearate (tristearin, $M = 891.5$ g/mol) completely? ($M_{\\ce{NaOH}} = 40.00$ g/mol.)',
      hint: 'Moles of fat, times 3 (one NaOH per ester group), times the molar mass of NaOH.',
      label: '$m(\\ce{NaOH}) =$',
      unit: 'g',
      answer: '100/891.5*3*40',
      answerTex: '13.5\\ \\text{g}',
      tolerance: 0.05,
      explanation: '$n(\\text{fat}) = \\dfrac{100.0}{891.5} = 0.1122$ mol. Each molecule has three ester groups, so $n(\\ce{NaOH}) = 3 \\times 0.1122 = 0.3365$ mol, and $m = 0.3365 \\times 40.00 = 13.5$ g. The products are 0.1122 mol of glycerol and 0.3365 mol of sodium stearate.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Amides and the peptide bond',
      blocks: [
        {
          type: 'p',
          text: 'Amides sit at the bottom of the ladder, and that is why life uses them. Protein backbones are amides (**peptide bonds**) linking amino acids. Without an enzyme, a peptide bond in neutral water at room temperature has a half-life measured in years to centuries. Hydrolyzing an amide in the lab takes 6 M HCl or hot concentrated NaOH for hours.',
        },
        {
          type: 'list',
          items: [
            '**Why so stable:** nitrogen is the best lone-pair donor into the C=O (the resonance you saw last lesson), and $\\ce{NH2-}$ (pKa of $\\ce{NH3}$ 38) is a dreadful leaving group. Under hydrolysis conditions the amine leaves only after it is protonated (in acid) or by a forcing pathway (in base).',
            '**Making amides:** from acid chlorides or anhydrides plus amines (fast). Mixing a carboxylic acid with an amine just gives a **salt**, $\\ce{RCOO- R\'NH3+}$: the acid–base reaction is far faster than any substitution. Heating the salt above 200 °C drives off water and gives the amide; in peptide synthesis, coupling reagents such as DCC activate the acid\'s OH under mild conditions instead.',
            '**Nitriles hydrolyze through amides:** water adds to the $\\ce{C#N}$ (acid or base catalyzed) to give an amide, which then hydrolyzes to the acid. Stopping at the amide is possible but tricky.',
          ],
        },
        {
          type: 'figure',
          svg: FIG.penicillin,
          alt: 'Skeletal structure of penicillin G: a benzyl group attached to an amide C=O, whose NH is attached to a four-membered ring containing a C=O and the ring nitrogen (the β-lactam, boxed in purple), fused to a five-membered sulfur-containing ring bearing two methyl groups and a carboxylic acid. Wedges and hashes show the stereocenters.',
          caption: 'Penicillin has three [[ochem-chirality-center|chirality centers]], and only one of its eight stereoisomers is the natural antibiotic. Its β-lactam is the exception that proves the rule. The fused rings force the nitrogen out of plane, so its lone pair cannot donate into the C=O, and the 90° ring angles add strain that is released on opening. This amide is reactive enough to acylate a serine OH in the bacterial enzyme that builds cell walls, which kills the bacterium.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Resistance is acyl substitution too',
          text: 'Resistant bacteria make β-lactamase enzymes, which hydrolyze the lactam ring (water does the second half of an acyl substitution on the enzyme) before the drug can reach its target. Drugs such as clavulanic acid are given with amoxicillin to acylate and block the β-lactamase itself.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Mixing acetic acid with methylamine at room temperature gives N-methylacetamide and water.',
      answer: false,
      explanation: 'The first thing that happens is a fast proton transfer: acetic acid (pKa 4.8) protonates methylamine (pKaH 10.6), giving methylammonium acetate, $\\ce{CH3COO- CH3NH3+}$. The carboxylate is no longer electrophilic and the ammonium ion has no lone pair, so substitution stops. To make the amide, convert the acid into an acid chloride or anhydride first, use a coupling reagent, or heat the salt strongly.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Hydrides and Grignards: substitution, then addition',
      blocks: [
        {
          type: 'p',
          text: 'Strong nucleophiles such as hydride (from $\\ce{LiAlH4}$) and carbanions (from Grignard reagents) also attack esters by addition–elimination, but the product of that first substitution is an **aldehyde or ketone**, which is **more** reactive than the ester it came from. It is attacked again immediately. So esters take up **two** equivalents.',
        },
        {
          type: 'figure',
          svg: FIG.reduce,
          alt: 'Methyl benzoate with three arrows. Up: 1. LiAlH4 2. H3O+ gives benzyl alcohol, a primary alcohol (two hydrides). Across: DIBAL-H at −78 °C then water gives benzaldehyde. Down: 1. two equivalents of CH3MgBr 2. H3O+ gives 2-phenyl-2-propanol, a tertiary alcohol, via a ketone intermediate.',
          caption: 'One ester, three outcomes, decided by the reagent. In each case methanol (from the $\\ce{-OCH3}$) is the other product.',
        },
        {
          type: 'table',
          headers: ['Substrate', 'Reagent', 'Product', 'How'],
          rows: [
            ['ester or acid', '$\\ce{LiAlH4}$, then $\\ce{H3O+}$', '1° alcohol', 'substitution (H for OR) gives an aldehyde, then addition of a second H⁻'],
            ['ester', '[[ochem-dibal|DIBAL-H]], −78 °C, then $\\ce{H2O}$', 'aldehyde', 'the tetrahedral aluminum intermediate does not collapse in the cold; workup releases the aldehyde'],
            ['amide', '$\\ce{LiAlH4}$, then $\\ce{H2O}$', 'amine', 'oxygen leaves as an aluminate, giving an iminium ion that takes a second H⁻: C=O becomes $\\ce{CH2}$'],
            ['nitrile', '$\\ce{LiAlH4}$ / DIBAL-H', '1° amine / aldehyde', 'two H⁻ / one H⁻ then hydrolysis of the imine'],
            ['ester', '2 RMgBr, then $\\ce{H3O+}$', '3° alcohol', 'two identical R groups added; the ketone intermediate cannot be stopped'],
            ['ester', '$\\ce{NaBH4}$', 'no reaction', 'too weak a hydride donor for the resonance-stabilized ester C=O'],
          ],
        },
        {
          type: 'derivation',
          title: 'Predict: ethyl acetate + excess $\\ce{C6H5MgBr}$, then $\\ce{H3O+}$',
          steps: [
            { tex: '\\ce{CH3COOCH2CH3 + C6H5MgBr -> CH3C(O^-)(C6H5)OCH2CH3}', why: 'Addition: the phenyl carbanion attacks the C=O, giving a tetrahedral alkoxide.' },
            { tex: '\\ce{-> CH3COC6H5 + CH3CH2O^-}', why: 'Elimination: ethoxide leaves, giving acetophenone, a ketone.' },
            { tex: '\\ce{CH3COC6H5 + C6H5MgBr -> CH3C(O^-)(C6H5)2}', why: 'The ketone is more electrophilic than the ester (no OR donation), so it grabs a second phenyl at once. This alkoxide has no leaving group, so it waits.' },
            { tex: '\\ce{->[\\ce{H3O+}] CH3C(OH)(C6H5)2}', why: 'Acid workup protonates the alkoxide.' },
          ],
          result: '1,1-Diphenylethanol. Spot the pattern: a 3° alcohol with **two identical groups** on the carbinol carbon is a Grignard + ester product, which will be useful in retrosynthesis.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Ethyl propanoate, $\\ce{CH3CH2COOCH2CH3}$, is treated with excess phenylmagnesium bromide, then aqueous acid. What is the main organic product (besides ethanol)?',
      options: [
        { text: '1-Phenyl-1-propanone, $\\ce{CH3CH2COC6H5}$', why: 'This ketone is formed on the way, but it is more reactive than the ester, so with excess Grignard it never survives.' },
        { text: '1,1-Diphenyl-1-propanol, $\\ce{CH3CH2C(OH)(C6H5)2}$', correct: true, why: 'Substitution (Ph for OEt) gives the ketone, and a second PhMgBr adds to it. Workup gives a 3° alcohol with two phenyls and the original ethyl group.' },
        { text: '1-Phenyl-1-propanol, $\\ce{CH3CH2CH(OH)C6H5}$', why: 'This has one phenyl and one H on the carbinol carbon, the product of PhMgBr with propanal, not with an ester.' },
        { text: 'Triphenylmethanol, $\\ce{(C6H5)3COH}$', why: 'The ethyl group on the acyl carbon is a C–C bond; it is never a leaving group. Only the OEt is replaced.' },
      ],
      explanation: 'Esters plus excess Grignard: the alkoxy group leaves once, then the resulting ketone adds a second equivalent. The acyl carbon ends up carrying its original R group, two identical new groups and an OH. Here: ethyl + phenyl + phenyl + OH.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'You need to convert methyl hexanoate into hexanal, stopping at the aldehyde. Which reagent?',
      options: [
        { text: '$\\ce{LiAlH4}$, then $\\ce{H3O+}$', why: 'The aldehyde formed after the first hydride is more reactive than the ester, so $\\ce{LiAlH4}$ carries on to 1-hexanol.' },
        { text: '$\\ce{NaBH4}$ in methanol', why: '$\\ce{NaBH4}$ does not reduce esters at a useful rate; you would recover the starting material.' },
        { text: 'DIBAL-H in toluene at −78 °C, then $\\ce{H2O}$', correct: true, why: 'DIBAL-H delivers one hydride; at −78 °C the tetrahedral aluminum intermediate is stable, so no aldehyde is present while hydride is around. Workup releases hexanal.' },
        { text: '$\\ce{H3O+}$, heat', why: 'That hydrolyzes the ester to hexanoic acid and methanol. No reduction happens without a hydride source.' },
      ],
      explanation: 'The trick is not a weaker hydride but a **protected intermediate**: DIBAL-H\'s aluminum stays bound to the tetrahedral oxygen at low temperature, so the aldehyde only appears during aqueous workup, after the reagent is destroyed. Warm it up with extra DIBAL-H and you also get the alcohol.',
    },
  ],
  takeaways: [
    'Nucleophilic acyl substitution = addition to the C=O (tetrahedral intermediate) + elimination of the best leaving group (weakest base). It is not SN2: the nucleophile adds to the π* LUMO.',
    'Reactions run down the ladder: acid chlorides and anhydrides make acids, esters and amides (add a base such as pyridine or a second equivalent of amine to take up HCl); $\\ce{SOCl2}$ climbs back up to the acid chloride.',
    'Fischer esterification is acid-catalyzed and reversible ($K \\approx 4$); excess alcohol or water removal drives it. Acid-catalyzed hydrolysis is the same mechanism backwards.',
    'Saponification uses a full equivalent of base and is irreversible because the final carboxylate is deprotonated ($K \\approx 10^{11}$). Triglycerides + NaOH → glycerol + soap.',
    'Amides (peptide bonds) are very stable: strong N donation and a terrible leaving group. Acids + amines give salts, not amides. Penicillin\'s strained β-lactam is a reactive exception.',
    'Esters take two hydrides (LiAlH₄ → 1° alcohol) or two Grignards (→ 3° alcohol with two identical groups); DIBAL-H at −78 °C stops at the aldehyde; LiAlH₄ turns amides into amines.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 21, Carboxylic Acid Derivatives: Nucleophilic Acyl Substitution Reactions, covers every reaction in this lesson with mechanisms.',
    },
    {
      title: 'Wikipedia — Fischer–Speier esterification',
      url: 'https://en.wikipedia.org/wiki/Fischer%E2%80%93Speier_esterification',
      source: 'wikipedia',
      note: 'The mechanism, ways of shifting the equilibrium, and the 1895 paper by Emil Fischer and Arthur Speier.',
    },
    {
      title: 'Wikipedia — Saponification',
      url: 'https://en.wikipedia.org/wiki/Saponification',
      source: 'wikipedia',
      note: 'Soap making, saponification values for common fats, and how micelles clean.',
    },
    {
      title: 'Master Organic Chemistry',
      url: 'https://www.masterorganicchemistry.com/',
      source: 'other',
      note: 'Search "nucleophilic acyl substitution": a step-by-step walk through the addition–elimination pattern and its many variations.',
    },
  ],
};
