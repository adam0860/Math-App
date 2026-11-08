import type { Lesson } from '../../types';

// <figures> skeletal structures drawn from SMILES with the molecule kit; mechanisms checked by rendering
const FIG = {
  acetate: "<svg viewBox=\"0 0 520 190\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(20,10) scale(2)\"><text x=\"44.55\" y=\"21.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"23.77\" y=\"57.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"35.66\" y=\"52\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><line x1=\"51.8\" y1=\"42.04\" x2=\"51.8\" y2=\"24\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.2\" y1=\"42.04\" x2=\"48.2\" y2=\"24\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.78\" y1=\"53\" x2=\"50\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50\" y1=\"41\" x2=\"39.66\" y2=\"46.97\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(300,10) scale(2)\"><text x=\"44.55\" y=\"21.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"56.45\" y=\"16\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"23.77\" y=\"57.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"50\" y1=\"38.92\" x2=\"34.76\" y2=\"47.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.8\" y1=\"42.04\" x2=\"36.56\" y2=\"50.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.78\" y1=\"53\" x2=\"50\" y2=\"41\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50\" y1=\"41\" x2=\"50\" y2=\"24\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"220\" y1=\"85\" x2=\"300\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M300,85 L292.9,88.6 M300,85 L292.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M220,85 L227.1,81.4 M220,85 L227.1,88.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M90,134 Q116.0,128.0 101,106\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M101,106 L108.0,109.9 L102.0,113.9 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M126,76 Q148.1,70.0 137,50\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M137,50 L143.6,54.5 L137.3,58.0 Z\" fill=\"currentColor\" class=\"f-red\"/><circle cx=\"83.6\" cy=\"131.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"89.2\" cy=\"128.3\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"62.9\" cy=\"121.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"66.1\" cy=\"126.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"73.2\" cy=\"100.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"67.6\" cy=\"103.7\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"107.7\" cy=\"33.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"104.5\" cy=\"38.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"135.5\" cy=\"38.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"132.3\" cy=\"33.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"384.0\" cy=\"40.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"384.0\" cy=\"47.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"403.2\" cy=\"28.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"396.8\" cy=\"28.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"417.2\" cy=\"50.3\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"418.3\" cy=\"44.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"347.6\" cy=\"128.3\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"353.2\" cy=\"131.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"346.1\" cy=\"105.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"342.9\" cy=\"110.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"260\" y=\"180\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">both C–O bonds 127 pm; the −1 charge is shared by two oxygens</text></svg>",
  amide: "<svg viewBox=\"0 0 520 200\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,10) scale(1.8)\"><text x=\"63.28\" y=\"76.33\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"42.89\" y=\"40.33\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><line x1=\"66.93\" y1=\"46.63\" x2=\"66.93\" y2=\"64.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.53\" y1=\"46.63\" x2=\"70.53\" y2=\"64.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"89.51\" y1=\"35.67\" x2=\"68.73\" y2=\"47.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"68.73\" y1=\"47.67\" x2=\"54\" y2=\"39.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"47.94\" y1=\"28.67\" x2=\"47.94\" y2=\"11.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.89\" y1=\"39.16\" x2=\"27.16\" y2=\"47.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(300,10) scale(1.8)\"><text x=\"63.28\" y=\"76.33\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"75.17\" y=\"70.67\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"42.89\" y=\"40.33\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"54\" y=\"34.67\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><line x1=\"70.53\" y1=\"46.63\" x2=\"54.9\" y2=\"37.6\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"68.73\" y1=\"49.75\" x2=\"53.1\" y2=\"40.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"89.51\" y1=\"35.67\" x2=\"68.73\" y2=\"47.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"68.73\" y1=\"47.67\" x2=\"68.73\" y2=\"64.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"47.94\" y1=\"28.67\" x2=\"47.94\" y2=\"11.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.89\" y1=\"39.16\" x2=\"27.16\" y2=\"47.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"220\" y1=\"85\" x2=\"300\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M300,85 L292.9,88.6 M300,85 L292.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M220,85 L227.1,81.4 M220,85 L227.1,88.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M111,66 Q129.3,71.4 117,86\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M117,86 L118.8,78.2 L124.4,82.9 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M139,108 Q156.3,115.6 147,132\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M147,132 L147.3,124.0 L153.7,127.6 Z\" fill=\"currentColor\" class=\"f-red\"/><circle cx=\"110.9\" cy=\"69.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"107.7\" cy=\"63.9\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"120.1\" cy=\"148.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"124.6\" cy=\"152.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"142.8\" cy=\"152.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"147.3\" cy=\"148.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"420.5\" cy=\"155.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"426.9\" cy=\"155.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"407.4\" cy=\"138.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"408.5\" cy=\"144.9\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"439.9\" cy=\"145.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"441.0\" cy=\"138.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"260\" y=\"188\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">C–N 135 pm (a normal C–N single bond is 147 pm); all six atoms of the amide unit lie in one plane</text></svg>",
  aspirin: "<svg viewBox=\"0 0 520 210\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(120,5) scale(1.5)\"><text x=\"79.62\" y=\"14.06\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"100.38\" y=\"50.02\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"100.38\" y=\"121.94\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"121.14\" y=\"85.98\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"132.04\" y=\"85.98\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"107.63\" y1=\"20.34\" x2=\"92.41\" y2=\"11.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.83\" y1=\"23.45\" x2=\"90.61\" y2=\"14.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.07\" y1=\"57.34\" x2=\"64.3\" y2=\"45.35\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"81.05\" y1=\"59.18\" x2=\"64.72\" y2=\"49.75\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.54\" y1=\"57.34\" x2=\"43.54\" y2=\"81.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"47.14\" y1=\"59.9\" x2=\"47.14\" y2=\"78.76\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.3\" y1=\"93.3\" x2=\"85.07\" y2=\"81.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.72\" y1=\"88.91\" x2=\"81.05\" y2=\"79.48\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"104.03\" y1=\"92.26\" x2=\"104.03\" y2=\"110.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"107.63\" y1=\"92.26\" x2=\"107.63\" y2=\"110.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"126.59\" y1=\"9.39\" x2=\"105.83\" y2=\"21.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.83\" y1=\"21.38\" x2=\"105.83\" y2=\"38.35\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"99.38\" y1=\"49.07\" x2=\"85.07\" y2=\"57.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.3\" y1=\"45.35\" x2=\"43.54\" y2=\"57.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.54\" y1=\"81.31\" x2=\"64.3\" y2=\"93.3\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.07\" y1=\"57.34\" x2=\"85.07\" y2=\"81.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.07\" y1=\"81.31\" x2=\"105.83\" y2=\"93.3\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.83\" y1=\"93.3\" x2=\"120.14\" y2=\"85.04\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><rect x=\"232\" y=\"4\" width=\"96\" height=\"84\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-purple\" stroke-dasharray=\"4 3\"/><text x=\"336\" y=\"50\" text-anchor=\"start\" font-size=\"14\" class=\"t-purple\" font-weight=\"600\">ester</text><rect x=\"262\" y=\"110\" width=\"84\" height=\"90\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-teal\" stroke-dasharray=\"4 3\"/><text x=\"354\" y=\"160\" text-anchor=\"start\" font-size=\"14\" class=\"t-teal\" font-weight=\"600\">carboxylic acid</text><text x=\"150\" y=\"200\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">aspirin (acetylsalicylic acid)</text></svg>",
  family: "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,5) scale(1.35)\"><text x=\"53.81\" y=\"25.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"33.03\" y=\"61.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"22.92\" y=\"61.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"61.06\" y1=\"45.93\" x2=\"61.06\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"57.46\" y1=\"45.93\" x2=\"57.46\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80.04\" y1=\"56.89\" x2=\"59.26\" y2=\"44.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.26\" y1=\"44.89\" x2=\"44.92\" y2=\"53.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(180,5) scale(1.35)\"><text x=\"53.81\" y=\"25.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"31.87\" y=\"61.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Cl</text><line x1=\"61.06\" y1=\"45.93\" x2=\"61.06\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"57.46\" y1=\"45.93\" x2=\"57.46\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80.04\" y1=\"56.89\" x2=\"59.26\" y2=\"44.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.26\" y1=\"44.89\" x2=\"46.08\" y2=\"52.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(350,5) scale(1.35)\"><text x=\"74.6\" y=\"25.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"53.81\" y=\"61.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"33.03\" y=\"25.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"81.84\" y1=\"45.93\" x2=\"81.84\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.24\" y1=\"45.93\" x2=\"78.24\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.27\" y1=\"45.93\" x2=\"40.27\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"36.67\" y1=\"45.93\" x2=\"36.67\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"100.83\" y1=\"56.89\" x2=\"80.04\" y2=\"44.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80.04\" y1=\"44.89\" x2=\"65.71\" y2=\"53.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.81\" y1=\"53.17\" x2=\"38.47\" y2=\"44.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.47\" y1=\"44.89\" x2=\"17.69\" y2=\"56.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(10,155) scale(1.35)\"><text x=\"74.6\" y=\"25.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"53.81\" y=\"61.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"81.84\" y1=\"45.93\" x2=\"81.84\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.24\" y1=\"45.93\" x2=\"78.24\" y2=\"27.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"100.83\" y1=\"56.89\" x2=\"80.04\" y2=\"44.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80.04\" y1=\"44.89\" x2=\"65.71\" y2=\"53.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.81\" y1=\"53.17\" x2=\"38.47\" y2=\"44.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.47\" y1=\"44.89\" x2=\"17.69\" y2=\"56.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(180,155) scale(1.35)\"><text x=\"64.21\" y=\"68.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"43.81\" y=\"32.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"43.81\" y=\"18.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"67.85\" y1=\"38.85\" x2=\"67.85\" y2=\"56.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"71.45\" y1=\"38.85\" x2=\"71.45\" y2=\"56.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"90.44\" y1=\"27.89\" x2=\"69.65\" y2=\"39.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"69.65\" y1=\"39.89\" x2=\"54.92\" y2=\"31.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.81\" y1=\"31.38\" x2=\"28.08\" y2=\"39.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(350,155) scale(1.35)\"><text x=\"78.21\" y=\"43.56\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><line x1=\"35.26\" y1=\"38.89\" x2=\"59.26\" y2=\"38.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.26\" y1=\"38.89\" x2=\"77.21\" y2=\"38.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.26\" y1=\"42.49\" x2=\"77.21\" y2=\"42.49\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.26\" y1=\"35.29\" x2=\"77.21\" y2=\"35.29\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"90\" y=\"127\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">carboxylic acid</text><text x=\"90\" y=\"144\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">acetic acid</text><text x=\"260\" y=\"127\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">acid chloride</text><text x=\"260\" y=\"144\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">acetyl chloride</text><text x=\"430\" y=\"127\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">acid anhydride</text><text x=\"430\" y=\"144\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">acetic anhydride</text><text x=\"90\" y=\"277\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">ester</text><text x=\"90\" y=\"294\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">ethyl acetate</text><text x=\"260\" y=\"277\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">amide</text><text x=\"260\" y=\"294\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">N-methylacetamide</text><text x=\"430\" y=\"277\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">nitrile</text><text x=\"430\" y=\"294\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">acetonitrile</text></svg>",
  grignard: "<svg viewBox=\"0 0 520 150\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,10) scale(1.15)\"><text x=\"97.61\" y=\"44.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Br</text><text x=\"74.11\" y=\"32.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">Mg</text><line x1=\"63.04\" y1=\"40.17\" x2=\"42.26\" y2=\"28.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.03\" y1=\"42.01\" x2=\"42.68\" y2=\"32.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"21.47\" y1=\"40.17\" x2=\"21.47\" y2=\"64.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.07\" y1=\"42.73\" x2=\"25.07\" y2=\"61.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.26\" y1=\"76.17\" x2=\"63.04\" y2=\"64.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.68\" y1=\"71.78\" x2=\"59.03\" y2=\"62.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"96.61\" y1=\"35.56\" x2=\"94.55\" y2=\"34.36\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.11\" y1=\"34.36\" x2=\"63.04\" y2=\"40.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.26\" y1=\"28.17\" x2=\"21.47\" y2=\"40.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"21.47\" y1=\"64.17\" x2=\"42.26\" y2=\"76.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.04\" y1=\"40.17\" x2=\"63.04\" y2=\"64.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(262,10) scale(1.1)\"><text x=\"95.21\" y=\"59.21\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"74.43\" y=\"23.21\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"86.32\" y=\"17.55\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><line x1=\"78.08\" y1=\"43.58\" x2=\"93.31\" y2=\"52.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.88\" y1=\"40.47\" x2=\"95.11\" y2=\"49.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.09\" y1=\"54.55\" x2=\"38.31\" y2=\"42.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.07\" y1=\"56.38\" x2=\"38.72\" y2=\"46.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.52\" y1=\"54.55\" x2=\"17.52\" y2=\"78.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"21.12\" y1=\"57.11\" x2=\"21.12\" y2=\"75.98\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.31\" y1=\"90.55\" x2=\"59.09\" y2=\"78.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.72\" y1=\"86.15\" x2=\"55.07\" y2=\"76.71\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.88\" y1=\"42.55\" x2=\"79.88\" y2=\"25.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.88\" y1=\"42.55\" x2=\"59.09\" y2=\"54.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.31\" y1=\"42.55\" x2=\"17.52\" y2=\"54.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.52\" y1=\"78.55\" x2=\"38.31\" y2=\"90.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.09\" y1=\"54.55\" x2=\"59.09\" y2=\"78.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(425,10)\"><text x=\"80.4\" y=\"68.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"59.62\" y=\"32.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"70.51\" y=\"32.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"63.26\" y1=\"52.54\" x2=\"78.5\" y2=\"61.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.06\" y1=\"49.42\" x2=\"80.3\" y2=\"58.22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.28\" y1=\"63.5\" x2=\"23.49\" y2=\"51.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.26\" y1=\"65.34\" x2=\"23.91\" y2=\"55.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"2.71\" y1=\"63.5\" x2=\"2.71\" y2=\"87.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"6.31\" y1=\"66.06\" x2=\"6.31\" y2=\"84.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.49\" y1=\"99.5\" x2=\"44.28\" y2=\"87.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.91\" y1=\"95.1\" x2=\"40.26\" y2=\"85.66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.06\" y1=\"51.5\" x2=\"65.06\" y2=\"34.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.06\" y1=\"51.5\" x2=\"44.28\" y2=\"63.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.49\" y1=\"51.5\" x2=\"2.71\" y2=\"63.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"2.71\" y1=\"87.5\" x2=\"23.49\" y2=\"99.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.28\" y1=\"63.5\" x2=\"44.28\" y2=\"87.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"228\" y1=\"72\" x2=\"262\" y2=\"72\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M262,72 L254.9,75.6 M262,72 L254.9,68.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"245\" y=\"90\" text-anchor=\"middle\" font-size=\"12\">ether</text><line x1=\"390\" y1=\"72\" x2=\"425\" y2=\"72\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M425,72 L417.9,75.6 M425,72 L417.9,68.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"407.5\" y=\"64\" text-anchor=\"middle\" font-size=\"12\">H₃O⁺</text><path d=\"M82,53 Q138.1,9.1 187,61\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M187,61 L179.5,58.3 L184.8,53.3 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M202,66 Q202.6,52.3 214,60\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M214,60 L206.1,59.0 L210.1,53.0 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"166\" y=\"75\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><text x=\"214\" y=\"75\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"173\" y1=\"66.5\" x2=\"184\" y2=\"66.5\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"173\" y1=\"72.5\" x2=\"184\" y2=\"72.5\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"196\" y1=\"66.5\" x2=\"207\" y2=\"66.5\" stroke=\"currentColor\" stroke-width=\"1.4\"/><line x1=\"196\" y1=\"72.5\" x2=\"207\" y2=\"72.5\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"190\" y=\"75\" text-anchor=\"middle\" font-size=\"15\">C</text><text x=\"384\" y=\"34\" text-anchor=\"middle\" font-size=\"12\">⁺MgBr</text><text x=\"190\" y=\"140\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">one new C–C bond, one extra carbon</text></svg>",
  ladder: "<svg viewBox=\"0 0 520 356\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(60,38) scale(1.05)\"><text x=\"46.93\" y=\"14.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"24.99\" y=\"50.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Cl</text><line x1=\"54.18\" y1=\"34.66\" x2=\"54.18\" y2=\"16.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.58\" y1=\"34.66\" x2=\"50.58\" y2=\"16.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.17\" y1=\"45.62\" x2=\"52.38\" y2=\"33.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.38\" y1=\"33.62\" x2=\"39.2\" y2=\"41.23\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(60,100) scale(1.05)\"><text x=\"67.72\" y=\"14.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"46.93\" y=\"50.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"5.37\" y=\"50.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"74.97\" y1=\"34.66\" x2=\"74.97\" y2=\"16.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"71.37\" y1=\"34.66\" x2=\"71.37\" y2=\"16.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.6\" y1=\"31.54\" x2=\"16.36\" y2=\"40.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.4\" y1=\"34.66\" x2=\"18.16\" y2=\"43.46\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"93.95\" y1=\"45.62\" x2=\"73.17\" y2=\"33.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.17\" y1=\"33.62\" x2=\"58.83\" y2=\"41.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.93\" y1=\"41.9\" x2=\"31.6\" y2=\"33.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.6\" y1=\"33.62\" x2=\"31.6\" y2=\"9.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(60,162) scale(1.05)\"><text x=\"57.33\" y=\"50.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"36.54\" y=\"14.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"60.97\" y1=\"20.58\" x2=\"60.97\" y2=\"38.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.57\" y1=\"20.58\" x2=\"64.57\" y2=\"38.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"83.56\" y1=\"9.62\" x2=\"62.77\" y2=\"21.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.77\" y1=\"21.62\" x2=\"48.43\" y2=\"13.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.54\" y1=\"13.34\" x2=\"21.2\" y2=\"21.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(60,224) scale(1.05)\"><text x=\"46.93\" y=\"14.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"26.15\" y=\"50.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"16.04\" y=\"50.29\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"54.18\" y1=\"34.66\" x2=\"54.18\" y2=\"16.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.58\" y1=\"34.66\" x2=\"50.58\" y2=\"16.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.17\" y1=\"45.62\" x2=\"52.38\" y2=\"33.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.38\" y1=\"33.62\" x2=\"38.04\" y2=\"41.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(60,286) scale(1.05)\"><text x=\"57.23\" y=\"13.81\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"37.41\" y=\"48.82\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"32.4\" y=\"52.15\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"22.29\" y=\"48.82\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"64.42\" y1=\"33.49\" x2=\"64.42\" y2=\"16.14\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"60.92\" y1=\"33.49\" x2=\"60.92\" y2=\"16.14\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"82.89\" y1=\"44.15\" x2=\"62.67\" y2=\"32.48\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"62.67\" y1=\"32.48\" x2=\"48.51\" y2=\"40.66\" stroke=\"currentColor\" stroke-width=\"1.4\" /></g><text x=\"150\" y=\"22\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\" font-weight=\"600\">derivative</text><text x=\"300\" y=\"22\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\" font-weight=\"600\">leaving group</text><text x=\"385\" y=\"22\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\" font-weight=\"600\">pKa of H–LG</text><text x=\"470\" y=\"22\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\" font-weight=\"600\">C=O IR (cm⁻¹)</text><text x=\"215\" y=\"73\" text-anchor=\"middle\" font-size=\"13.5\" font-weight=\"600\">acid chloride</text><text x=\"300\" y=\"73\" text-anchor=\"middle\" font-size=\"14\">Cl⁻</text><text x=\"385\" y=\"73\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">−7</text><text x=\"470\" y=\"73\" text-anchor=\"middle\" font-size=\"13.5\">≈1800</text><text x=\"215\" y=\"135\" text-anchor=\"middle\" font-size=\"13.5\" font-weight=\"600\">anhydride</text><text x=\"300\" y=\"135\" text-anchor=\"middle\" font-size=\"14\">RCOO⁻</text><text x=\"385\" y=\"135\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">4.8</text><text x=\"470\" y=\"135\" text-anchor=\"middle\" font-size=\"13.5\">1820, 1760</text><line x1=\"55\" y1=\"100\" x2=\"510\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"0.8\" class=\"s-gray\" stroke-dasharray=\"3 4\"/><text x=\"215\" y=\"197\" text-anchor=\"middle\" font-size=\"13.5\" font-weight=\"600\">ester</text><text x=\"300\" y=\"197\" text-anchor=\"middle\" font-size=\"14\">RO⁻</text><text x=\"385\" y=\"197\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">16</text><text x=\"470\" y=\"197\" text-anchor=\"middle\" font-size=\"13.5\">≈1740</text><line x1=\"55\" y1=\"162\" x2=\"510\" y2=\"162\" stroke=\"currentColor\" stroke-width=\"0.8\" class=\"s-gray\" stroke-dasharray=\"3 4\"/><text x=\"215\" y=\"259\" text-anchor=\"middle\" font-size=\"13.5\" font-weight=\"600\">carboxylic acid</text><text x=\"300\" y=\"259\" text-anchor=\"middle\" font-size=\"14\">HO⁻</text><text x=\"385\" y=\"259\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">15.7</text><text x=\"470\" y=\"259\" text-anchor=\"middle\" font-size=\"13.5\">≈1710</text><line x1=\"55\" y1=\"224\" x2=\"510\" y2=\"224\" stroke=\"currentColor\" stroke-width=\"0.8\" class=\"s-gray\" stroke-dasharray=\"3 4\"/><text x=\"215\" y=\"321\" text-anchor=\"middle\" font-size=\"13.5\" font-weight=\"600\">amide</text><text x=\"300\" y=\"321\" text-anchor=\"middle\" font-size=\"14\">H₂N⁻</text><text x=\"385\" y=\"321\" text-anchor=\"middle\" font-size=\"14\" class=\"t-red\">38</text><text x=\"470\" y=\"321\" text-anchor=\"middle\" font-size=\"13.5\">≈1660</text><line x1=\"55\" y1=\"286\" x2=\"510\" y2=\"286\" stroke=\"currentColor\" stroke-width=\"0.8\" class=\"s-gray\" stroke-dasharray=\"3 4\"/><line x1=\"28\" y1=\"342\" x2=\"28\" y2=\"42\" stroke=\"currentColor\" stroke-width=\"2.2\" class=\"s-purple\"/><path d=\"M22,51 L28,42 L34,51\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" class=\"s-purple\"/><text x=\"16\" y=\"193\" text-anchor=\"middle\" font-size=\"13\" class=\"t-purple\" transform=\"rotate(-90 16 193)\">more reactive</text></svg>",
  names: "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(5,10) scale(1.3)\"><text x=\"37.23\" y=\"16.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"16.45\" y=\"52.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"6.34\" y=\"52.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"44.48\" y1=\"37.35\" x2=\"44.48\" y2=\"19.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.88\" y1=\"37.35\" x2=\"40.88\" y2=\"19.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.03\" y1=\"48.31\" x2=\"84.25\" y2=\"36.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"84.25\" y1=\"36.31\" x2=\"63.46\" y2=\"48.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.46\" y1=\"48.31\" x2=\"63.46\" y2=\"72.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.46\" y1=\"48.31\" x2=\"42.68\" y2=\"36.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.68\" y1=\"36.31\" x2=\"28.34\" y2=\"44.59\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"87.5\" y=\"134\" text-anchor=\"middle\" font-size=\"13\">2-methylbutanoic acid</text><g transform=\"translate(178,10) scale(1.3)\"><text x=\"91.31\" y=\"50.47\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"102.2\" y=\"50.47\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"70.52\" y=\"14.47\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"77.77\" y1=\"34.85\" x2=\"77.77\" y2=\"16.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"74.17\" y1=\"34.85\" x2=\"74.17\" y2=\"16.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"90.31\" y1=\"42.09\" x2=\"75.97\" y2=\"33.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"75.97\" y1=\"33.81\" x2=\"55.18\" y2=\"45.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.18\" y1=\"45.81\" x2=\"34.4\" y2=\"33.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.4\" y1=\"33.81\" x2=\"13.62\" y2=\"45.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"13.62\" y1=\"45.81\" x2=\"13.62\" y2=\"69.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"13.62\" y1=\"69.81\" x2=\"34.4\" y2=\"81.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.4\" y1=\"81.81\" x2=\"55.18\" y2=\"69.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.18\" y1=\"45.81\" x2=\"55.18\" y2=\"69.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"260.5\" y=\"134\" text-anchor=\"middle\" font-size=\"13\">cyclohexanecarboxylic acid</text><g transform=\"translate(350,10) scale(1.3)\"><text x=\"94.62\" y=\"50.47\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Cl</text><text x=\"75\" y=\"14.47\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"82.24\" y1=\"34.85\" x2=\"82.24\" y2=\"16.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.64\" y1=\"34.85\" x2=\"78.64\" y2=\"16.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.66\" y1=\"45.81\" x2=\"38.87\" y2=\"33.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.64\" y1=\"47.64\" x2=\"39.29\" y2=\"38.21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"18.09\" y1=\"45.81\" x2=\"18.09\" y2=\"69.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"21.69\" y1=\"48.37\" x2=\"21.69\" y2=\"67.25\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.87\" y1=\"81.81\" x2=\"59.66\" y2=\"69.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.29\" y1=\"77.41\" x2=\"55.64\" y2=\"67.97\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"93.62\" y1=\"41.42\" x2=\"80.44\" y2=\"33.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80.44\" y1=\"33.81\" x2=\"59.66\" y2=\"45.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.87\" y1=\"33.81\" x2=\"18.09\" y2=\"45.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"18.09\" y1=\"69.81\" x2=\"38.87\" y2=\"81.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.66\" y1=\"45.81\" x2=\"59.66\" y2=\"69.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"432.5\" y=\"134\" text-anchor=\"middle\" font-size=\"13\">benzoyl chloride</text><g transform=\"translate(5,160) scale(1.3)\"><text x=\"58.02\" y=\"64.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"37.23\" y=\"28.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"61.66\" y1=\"35.27\" x2=\"61.66\" y2=\"53.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.26\" y1=\"35.27\" x2=\"65.26\" y2=\"53.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.03\" y1=\"36.31\" x2=\"84.25\" y2=\"24.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"84.25\" y1=\"24.31\" x2=\"63.46\" y2=\"36.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.46\" y1=\"36.31\" x2=\"49.12\" y2=\"28.03\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"36.23\" y1=\"28.03\" x2=\"21.89\" y2=\"36.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"87.5\" y=\"284\" text-anchor=\"middle\" font-size=\"13\">methyl propanoate</text><g transform=\"translate(178,160) scale(1.3)\"><text x=\"58.02\" y=\"64.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"37.62\" y=\"28.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"37.62\" y=\"14.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"61.66\" y1=\"35.27\" x2=\"61.66\" y2=\"53.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.26\" y1=\"35.27\" x2=\"65.26\" y2=\"53.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.03\" y1=\"36.31\" x2=\"84.25\" y2=\"24.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"84.25\" y1=\"24.31\" x2=\"63.46\" y2=\"36.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.46\" y1=\"36.31\" x2=\"48.73\" y2=\"27.8\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"36.62\" y1=\"27.8\" x2=\"21.89\" y2=\"36.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"260.5\" y=\"284\" text-anchor=\"middle\" font-size=\"13\">N-methylpropanamide</text><g transform=\"translate(350,160) scale(1.3)\"><text x=\"37.62\" y=\"76.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><line x1=\"84.25\" y1=\"24.31\" x2=\"63.46\" y2=\"12.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.46\" y1=\"12.31\" x2=\"42.68\" y2=\"24.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.68\" y1=\"24.31\" x2=\"42.68\" y2=\"48.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.68\" y1=\"48.31\" x2=\"42.68\" y2=\"65.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.08\" y1=\"48.31\" x2=\"39.08\" y2=\"65.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"46.28\" y1=\"48.31\" x2=\"46.28\" y2=\"65.31\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"432.5\" y=\"284\" text-anchor=\"middle\" font-size=\"13\">butanenitrile</text></svg>",
  prep: "<svg viewBox=\"0 0 520 248\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,10) scale(1.05)\"><text x=\"11.18\" y=\"36.57\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"2.52\" y=\"36.57\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"102.75\" y1=\"22.53\" x2=\"85.37\" y2=\"32.57\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"85.37\" y1=\"32.57\" x2=\"67.99\" y2=\"22.53\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"67.99\" y1=\"22.53\" x2=\"50.61\" y2=\"32.57\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"50.61\" y1=\"32.57\" x2=\"33.23\" y2=\"22.53\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"33.23\" y1=\"22.53\" x2=\"21.52\" y2=\"29.29\" stroke=\"currentColor\" stroke-width=\"1.2\" /></g><g transform=\"translate(400,10) scale(1.05)\"><text x=\"28.56\" y=\"19.42\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"11.18\" y=\"49.53\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"2.52\" y=\"49.53\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"34.74\" y1=\"36.36\" x2=\"34.74\" y2=\"21.42\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"31.73\" y1=\"36.36\" x2=\"31.73\" y2=\"21.42\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"102.75\" y1=\"35.49\" x2=\"85.37\" y2=\"45.53\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"85.37\" y1=\"45.53\" x2=\"67.99\" y2=\"35.49\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"67.99\" y1=\"35.49\" x2=\"50.61\" y2=\"45.53\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"50.61\" y1=\"45.53\" x2=\"33.23\" y2=\"35.49\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"33.23\" y1=\"35.49\" x2=\"21.52\" y2=\"42.26\" stroke=\"currentColor\" stroke-width=\"1.2\" /></g><g transform=\"translate(10,88) scale(1.05)\"><text x=\"3.81\" y=\"41.14\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Br</text><line x1=\"93.95\" y1=\"36.48\" x2=\"73.17\" y2=\"24.48\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.17\" y1=\"24.48\" x2=\"52.38\" y2=\"36.48\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.38\" y1=\"36.48\" x2=\"31.6\" y2=\"24.48\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.6\" y1=\"24.48\" x2=\"18.81\" y2=\"31.86\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(400,88) scale(1.05)\"><text x=\"28.56\" y=\"19.42\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"11.18\" y=\"49.53\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"2.52\" y=\"49.53\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"34.74\" y1=\"36.36\" x2=\"34.74\" y2=\"21.42\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"31.73\" y1=\"36.36\" x2=\"31.73\" y2=\"21.42\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"102.75\" y1=\"35.49\" x2=\"85.37\" y2=\"45.53\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"85.37\" y1=\"45.53\" x2=\"67.99\" y2=\"35.49\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"67.99\" y1=\"35.49\" x2=\"50.61\" y2=\"45.53\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"50.61\" y1=\"45.53\" x2=\"33.23\" y2=\"35.49\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"33.23\" y1=\"35.49\" x2=\"21.52\" y2=\"42.26\" stroke=\"currentColor\" stroke-width=\"1.2\" /></g><g transform=\"translate(10,166) scale(1.05)\"><text x=\"3.81\" y=\"41.14\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Br</text><line x1=\"93.95\" y1=\"36.48\" x2=\"73.17\" y2=\"24.48\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.17\" y1=\"24.48\" x2=\"52.38\" y2=\"36.48\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.38\" y1=\"36.48\" x2=\"31.6\" y2=\"24.48\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.6\" y1=\"24.48\" x2=\"18.81\" y2=\"31.86\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(200,166) scale(1.05)\"><text x=\"28.91\" y=\"56.97\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-blue\">N</text><line x1=\"86.18\" y1=\"2.04\" x2=\"68.53\" y2=\"12.22\" stroke=\"currentColor\" stroke-width=\"1.22\" /><line x1=\"68.53\" y1=\"12.22\" x2=\"50.89\" y2=\"2.04\" stroke=\"currentColor\" stroke-width=\"1.22\" /><line x1=\"50.89\" y1=\"2.04\" x2=\"33.25\" y2=\"12.22\" stroke=\"currentColor\" stroke-width=\"1.22\" /><line x1=\"33.25\" y1=\"12.22\" x2=\"33.25\" y2=\"32.6\" stroke=\"currentColor\" stroke-width=\"1.22\" /><line x1=\"33.25\" y1=\"32.6\" x2=\"33.25\" y2=\"46.97\" stroke=\"currentColor\" stroke-width=\"1.22\" /><line x1=\"30.19\" y1=\"32.6\" x2=\"30.19\" y2=\"46.97\" stroke=\"currentColor\" stroke-width=\"1.22\" /><line x1=\"36.3\" y1=\"32.6\" x2=\"36.3\" y2=\"46.97\" stroke=\"currentColor\" stroke-width=\"1.22\" /></g><g transform=\"translate(400,166) scale(1.05)\"><text x=\"28.56\" y=\"19.42\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"11.18\" y=\"49.53\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"2.52\" y=\"49.53\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"34.74\" y1=\"36.36\" x2=\"34.74\" y2=\"21.42\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"31.73\" y1=\"36.36\" x2=\"31.73\" y2=\"21.42\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"102.75\" y1=\"35.49\" x2=\"85.37\" y2=\"45.53\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"85.37\" y1=\"45.53\" x2=\"67.99\" y2=\"35.49\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"67.99\" y1=\"35.49\" x2=\"50.61\" y2=\"45.53\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"50.61\" y1=\"45.53\" x2=\"33.23\" y2=\"35.49\" stroke=\"currentColor\" stroke-width=\"1.2\" /><line x1=\"33.23\" y1=\"35.49\" x2=\"21.52\" y2=\"42.26\" stroke=\"currentColor\" stroke-width=\"1.2\" /></g><line x1=\"130\" y1=\"42\" x2=\"390\" y2=\"42\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M390,42 L382.9,45.6 M390,42 L382.9,38.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"260\" y=\"34\" text-anchor=\"middle\" font-size=\"12\">H₂CrO₄ (or KMnO₄)</text><text x=\"260\" y=\"60\" text-anchor=\"middle\" font-size=\"12\">oxidation: same carbon count</text><line x1=\"130\" y1=\"120\" x2=\"390\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M390,120 L382.9,123.6 M390,120 L382.9,116.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"260\" y=\"112\" text-anchor=\"middle\" font-size=\"12\">1. Mg, ether · 2. CO₂ · 3. H₃O⁺</text><text x=\"260\" y=\"138\" text-anchor=\"middle\" font-size=\"12\">Grignard carboxylation: +1 C</text><line x1=\"125\" y1=\"198\" x2=\"198\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M198,198 L190.9,201.6 M198,198 L190.9,194.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"161.5\" y=\"190\" text-anchor=\"middle\" font-size=\"12\">NaCN</text><text x=\"161.5\" y=\"216\" text-anchor=\"middle\" font-size=\"12\">SN2</text><line x1=\"325\" y1=\"198\" x2=\"398\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M398,198 L390.9,201.6 M398,198 L390.9,194.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"361.5\" y=\"190\" text-anchor=\"middle\" font-size=\"12\">H₃O⁺, heat</text><text x=\"361.5\" y=\"216\" text-anchor=\"middle\" font-size=\"12\">hydrolysis</text><text x=\"16\" y=\"22\" text-anchor=\"start\" font-size=\"13\" class=\"t-purple\" font-weight=\"700\">A</text><text x=\"16\" y=\"100\" text-anchor=\"start\" font-size=\"13\" class=\"t-purple\" font-weight=\"700\">B</text><text x=\"16\" y=\"178\" text-anchor=\"start\" font-size=\"13\" class=\"t-purple\" font-weight=\"700\">C</text><line x1=\"10\" y1=\"82\" x2=\"510\" y2=\"82\" stroke=\"currentColor\" stroke-width=\"0.8\" class=\"s-gray\" stroke-dasharray=\"3 4\"/><line x1=\"10\" y1=\"160\" x2=\"510\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"0.8\" class=\"s-gray\" stroke-dasharray=\"3 4\"/></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-carboxylic-acids',
  title: 'Carboxylic Acids and Their Derivatives',
  summary: 'The carboxyl family: naming acids, acid chlorides, anhydrides, esters, amides and nitriles; why carboxylic acids are acidic and how substituents tune their pKa; the reactivity ladder of the derivatives; and three ways to make a carboxylic acid.',
  minutes: 19,
  objectives: [
    'Recognize a carboxylic acid and its five derivatives, and explain why they form one family (same oxidation level, all hydrolyze to the acid)',
    'Name carboxylic acids, acid chlorides, anhydrides, esters, amides and nitriles by IUPAC rules and with common names',
    'Explain the acidity of carboxylic acids with resonance, and predict how electron-withdrawing substituents and their distance change the pKa',
    'Rank the derivatives by reactivity using leaving-group ability and resonance donation into the C=O, and connect the ranking to IR stretching frequencies',
    'Choose between oxidation, Grignard carboxylation and nitrile hydrolysis to make a given carboxylic acid',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The carboxyl family',
      blocks: [
        {
          type: 'p',
          text: 'In the aldehyde and ketone unit the carbonyl carbon carried only carbon and hydrogen. Now put a **heteroatom** on it. A carbonyl bonded to $\\ce{-OH}$ is a **carboxylic acid**, $\\ce{RCOOH}$ (also written $\\ce{RCO2H}$). Replace the $\\ce{-OH}$ with another electronegative group and you get the [[ochem-acid-derivative|carboxylic acid derivatives]].',
        },
        {
          type: 'figure',
          svg: FIG.family,
          alt: 'Six skeletal structures in two rows. Top: acetic acid (methyl, C=O, OH), acetyl chloride (methyl, C=O, Cl), acetic anhydride (two acetyl groups joined through one oxygen). Bottom: ethyl acetate (acetyl joined to O-ethyl), N-methylacetamide (acetyl joined to NH-methyl), acetonitrile (methyl joined to C triple bond N).',
          caption: 'Every member has a carbon with **three bonds to heteroatoms** (counting C=O as two). The nitrile has no C=O, but its $\\ce{C#N}$ carbon is at the same oxidation level, and water converts it to the acid.',
        },
        {
          type: 'p',
          text: 'The part that stays the same in each structure, $\\ce{RC(=O)-}$, is the [[ochem-acyl-group|acyl group]]. Chemistry in this unit is mostly about swapping the group attached to it. That works because all six compounds sit at the same oxidation level: hydrolysis (reaction with water) turns every one of them into the carboxylic acid, and none of those conversions is an oxidation or a reduction.',
        },
        {
          type: 'figure',
          svg: FIG.aspirin,
          alt: 'Skeletal structure of aspirin: a benzene ring with an acetyl ester group (O–C(=O)–CH3) at one position, boxed in purple and labeled ester, and a carboxylic acid group (C(=O)OH) at the adjacent position, boxed in teal and labeled carboxylic acid.',
          caption: 'Aspirin carries two family members on one ring. Its ester is the reactive end: aspirin transfers that acetyl group to an enzyme (cyclooxygenase), which is how it works, and the same ester slowly hydrolyzes in a humid medicine cabinet (old aspirin smells of vinegar, acetic acid).',
        },
        {
          type: 'heading',
          text: 'Physical properties and spectra',
        },
        {
          type: 'p',
          text: 'A carboxylic acid is both a strong hydrogen-bond donor (O–H) and acceptor (C=O), so in the pure liquid and in nonpolar solvents two molecules pair up into a cyclic **dimer** held by two hydrogen bonds. That is why acetic acid boils at $118\\ ^\\circ\\text{C}$ while 1-propanol, with the same molar mass (60 g/mol), boils at $97\\ ^\\circ\\text{C}$. Esters have no O–H and boil lower than acids of similar mass; primary and secondary amides, with N–H donors and a very polar C=O, are often solids.',
        },
        {
          type: 'table',
          headers: ['Spectrum', 'Carboxylic acid signature', 'Why'],
          rows: [
            ['IR', 'very broad O–H, $2500$–$3300\\ \\text{cm}^{-1}$; C=O near $1710\\ \\text{cm}^{-1}$', 'hydrogen-bonded dimers spread the O–H stretch over a huge range'],
            ['¹H NMR', 'COOH proton at $10$–$12$ ppm, broad singlet', 'strongly deshielded and exchanging; it disappears after a $\\ce{D2O}$ shake'],
            ['¹³C NMR', 'carbonyl carbon at $170$–$185$ ppm', 'slightly upfield of ketones (around 200 ppm): the OH donates electron density'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the nitrile belongs here',
          text: 'Count bonds to heteroatoms, which is a quick way to read oxidation level. A ketone carbon has two (the C=O). A carboxylic acid carbon has three (C=O plus C–O), and so do the chloride, anhydride, ester, amide and the nitrile ($\\ce{C#N}$ is three bonds to N). Moving within a level is substitution or hydrolysis; moving between levels needs a redox reagent. That one count tells you that $\\ce{CH3CN + H2O}$ can give acetic acid without any oxidant.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which of these compounds is **not** a carboxylic acid derivative?',
      options: [
        { text: 'Acetonitrile, $\\ce{CH3C#N}$', why: 'Its carbon has three bonds to nitrogen: same oxidation level as acetic acid, and acid hydrolysis turns it into acetic acid. It is a derivative.' },
        { text: 'Acetic anhydride, $\\ce{(CH3CO)2O}$', why: 'Two acyl groups sharing one oxygen. Water splits it into two molecules of acetic acid: a derivative.' },
        { text: 'Acetone, $\\ce{CH3COCH3}$', correct: true, why: 'Its carbonyl carbon has only two bonds to heteroatoms (the C=O) and two to carbon. It is a ketone, one oxidation level below the acids, and water cannot turn it into a carboxylic acid.' },
        { text: 'Methyl acetate, $\\ce{CH3CO2CH3}$', why: 'An ester: the acyl carbon carries C=O plus an –OCH₃. Hydrolysis gives acetic acid and methanol.' },
      ],
      explanation: 'The test is the carbon, not the look of the formula: three bonds to heteroatoms (counting a double bond twice and a triple bond three times) puts a compound in the carboxyl family. Acetone has a C=O but no third heteroatom bond, so it is a ketone.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Naming acids and derivatives',
      blocks: [
        {
          type: 'p',
          text: 'Carboxylic acids outrank every other group you have named so far, so the carboxyl carbon is always **C1** of the main chain and the name ends in **-oic acid**: hexane → hexanoic acid. When the COOH is attached to a ring, the ring is the parent and the suffix is **-carboxylic acid** (the COOH carbon is not counted in the ring): cyclohexanecarboxylic acid. Benzoic acid is the accepted name for $\\ce{C6H5COOH}$.',
        },
        {
          type: 'table',
          headers: ['Class', 'Ending', 'Example', 'Common name'],
          rows: [
            ['carboxylic acid', '-oic acid', 'ethanoic acid, $\\ce{CH3COOH}$', 'acetic acid'],
            ['acid chloride', '-oyl chloride', 'ethanoyl chloride, $\\ce{CH3COCl}$', 'acetyl chloride'],
            ['anhydride', '-oic anhydride', 'ethanoic anhydride, $\\ce{(CH3CO)2O}$', 'acetic anhydride'],
            ['ester', 'alkyl -oate', 'ethyl ethanoate, $\\ce{CH3COOCH2CH3}$', 'ethyl acetate'],
            ['amide', '-amide', 'ethanamide, $\\ce{CH3CONH2}$', 'acetamide'],
            ['nitrile', '-nitrile', 'ethanenitrile, $\\ce{CH3CN}$', 'acetonitrile'],
          ],
          caption: 'Common names you will meet constantly: formic ($\\ce{HCOOH}$, 1 C), acetic (2), propionic (3), butyric (4), benzoic. Acetyl and benzoyl are the matching acyl groups.',
        },
        {
          type: 'p',
          text: 'Two names need care. An **ester** is named like a salt: first the alkyl group on the single-bonded oxygen, then the acid part with **-oate**. Read it from the oxygen outward. An **amide** with groups on nitrogen gets an **N-** locant for each one: $\\ce{CH3CH2CONHCH3}$ is N-methylpropanamide. In a nitrile, the $\\ce{C#N}$ carbon is counted as C1: $\\ce{CH3CH2CH2CN}$ has four carbons and is butanenitrile.',
        },
        {
          type: 'figure',
          svg: FIG.names,
          alt: 'Six named structures. 2-methylbutanoic acid: four-carbon chain with COOH at C1 and a methyl at C2. Cyclohexanecarboxylic acid: cyclohexane with a COOH. Benzoyl chloride: benzene with C(=O)Cl. Methyl propanoate: CH3CH2C(=O)OCH3. N-methylpropanamide: CH3CH2C(=O)NHCH3. Butanenitrile: CH3CH2CH2C≡N.',
          caption: 'In every acyclic name the acyl carbon is C1. In methyl propanoate, the three carbons of "propanoate" include the C=O carbon; the methyl is on oxygen.',
        },
        {
          type: 'derivation',
          title: 'Name $\\ce{CH3CH2CH(CH3)COOCH2CH3}$',
          steps: [
            { tex: '\\ce{-C(=O)O-}\\ \\text{with C on both sides} \\implies \\text{ester}', why: 'A carbonyl with an O–C on the other side. Esters are named "alkyl alkanoate".' },
            { tex: '\\text{O-side group: } \\ce{-CH2CH3} = \\text{ethyl}', why: 'The group on the single-bonded oxygen came from the alcohol. It is named first, as a separate word.' },
            { tex: '\\text{acyl chain: } \\underset{4}{\\ce{CH3}}\\underset{3}{\\ce{CH2}}\\underset{2}{\\ce{CH}}(\\ce{CH3})\\underset{1}{\\ce{C}}(=\\ce{O}) \\implies \\text{butanoate}', why: 'Count from the carbonyl carbon (C1) along the longest chain: four carbons, so butanoate.' },
            { tex: '\\text{methyl at C2} \\implies \\text{2-methylbutanoate}', why: 'Substituents on the acyl chain are numbered from C1, the carbonyl carbon.' },
            { tex: '\\boxed{\\text{ethyl 2-methylbutanoate}}', why: 'Alkyl group, space, then the substituted -oate. It smells of apples; many fruit flavors are small esters like this.' },
          ],
          result: 'Ethyl 2-methylbutanoate. If several groups are present, the priority order for the suffix is acid > anhydride > ester > acid halide > amide > nitrile > aldehyde > ketone > alcohol > amine.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Name each compound.',
      template: '$\\ce{CH3CH2CH2COCl}$ is ___. $\\ce{CH3COOCH2CH2CH3}$ is ___. $\\ce{CH3CH2CONH2}$ is ___. $\\ce{CH3CH2CH2CH2CN}$ is ___.',
      blanks: [{ answers: ['butanoyl chloride'] }, { answers: ['propyl ethanoate'] }, { answers: ['propanamide'] }, { answers: ['pentanenitrile'] }],
      wordBank: ['butanoyl chloride', 'propanoyl chloride', 'propyl ethanoate', 'ethyl propanoate', 'propanamide', 'pentanenitrile', 'butanenitrile'],
      hint: 'Count the carbonyl (or nitrile) carbon as C1. For the ester, the group on the single-bonded O is named first.',
      explanation: '$\\ce{CH3CH2CH2COCl}$: four carbons including the C=O, acid chloride → butanoyl chloride. $\\ce{CH3COOCH2CH2CH3}$: acyl part $\\ce{CH3CO-}$ (2 C, ethanoate), propyl on oxygen → propyl ethanoate (propyl acetate). Its isomer ethyl propanoate is $\\ce{CH3CH2COOCH2CH3}$: same formula, different connectivity. $\\ce{CH3CH2CONH2}$: three carbons → propanamide. $\\ce{CH3CH2CH2CH2CN}$: four carbons in the chain plus the nitrile carbon = 5 → pentanenitrile.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'A student names $\\ce{CH3CH2CH2COOCH3}$, the ester behind the smell of apples. Tap the first line that is wrong.',
      lines: [
        'The carbonyl has an O–C on the other side, so this is an ester, named "alkyl alkanoate".',
        'The group on the single-bonded oxygen is $\\ce{-CH3}$, so the alkyl part is methyl.',
        'The acyl part is $\\ce{CH3CH2CH2-}$: three carbons, so the acid part is propanoate.',
        'The name is methyl propanoate.',
      ],
      errorLines: [3],
      explanation: 'The acyl part is $\\ce{CH3CH2CH2C(=O)-}$ and it **includes the carbonyl carbon**: four carbons, so butanoate. The compound is **methyl butanoate**. Methyl propanoate, $\\ce{CH3CH2COOCH3}$, has one carbon fewer. Forgetting to count the carbonyl carbon is the most common naming slip in this unit, and it also bites with nitriles.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Why carboxylic acids are acidic',
      blocks: [
        {
          type: 'p',
          text: 'Acetic acid has a [[gchem-pka|pKa]] of 4.76, while ethanol\'s is about 16: the O–H of an acid is roughly $10^{11}$ times more acidic, although both protons sit on oxygen. The difference is entirely in the conjugate base. When ethanol loses a proton, the negative charge is stuck on one oxygen. When acetic acid loses one, the carboxylate ion spreads the charge over **two** equivalent oxygens by resonance.',
        },
        {
          type: 'figure',
          svg: FIG.acetate,
          alt: 'Two resonance structures of acetate joined by a double-headed arrow. Left: the lower oxygen carries a negative charge and three lone pairs; a curved arrow from one of its lone pairs points to the C–O bond, and a second curved arrow from the C=O double bond points to the upper oxygen. Right: the upper oxygen now carries the negative charge and the lower one is double bonded.',
          caption: 'Pushing the arrows from the left structure gives the right one; the real ion is the average. X-ray and microwave data agree: both C–O bonds in a carboxylate are 127 pm, between a C=O (120 pm) and a C–O (134 pm).',
        },
        {
          type: 'p',
          text: 'Anything that stabilizes the carboxylate further makes the acid stronger. Electronegative substituents pull electron density through the σ bonds (the **inductive effect** from the acid–base unit) and spread the negative charge. The effect adds up with each substituent and fades quickly with distance, roughly by a factor of 2–3 per bond.',
        },
        {
          type: 'table',
          headers: ['Acid', 'pKa', 'Acid', 'pKa'],
          rows: [
            ['$\\ce{CH3COOH}$', '4.76', '$\\ce{CH3CH2CH2COOH}$', '4.82'],
            ['$\\ce{ClCH2COOH}$', '2.86', '$\\ce{CH3CH2CHClCOOH}$ (2-chloro)', '2.86'],
            ['$\\ce{Cl2CHCOOH}$', '1.29', '$\\ce{CH3CHClCH2COOH}$ (3-chloro)', '4.05'],
            ['$\\ce{Cl3CCOOH}$', '0.65', '$\\ce{ClCH2CH2CH2COOH}$ (4-chloro)', '4.52'],
            ['$\\ce{HCOOH}$', '3.75', '$\\ce{C6H5COOH}$ (benzoic)', '4.20'],
          ],
          caption: 'Left: each extra chlorine lowers the pKa. Right: moving one chlorine away from the carboxyl, the effect shrinks from 2 pK units to 0.3. Formic acid has no electron-donating alkyl group and is ten times stronger than acetic acid.',
        },
        {
          type: 'derivation',
          title: 'How much stronger is chloroacetic acid than acetic acid?',
          steps: [
            { tex: 'K_a = 10^{-\\text{p}K_a}', why: 'Definition of pKa, from General Chemistry.' },
            { tex: '\\frac{K_a(\\ce{ClCH2COOH})}{K_a(\\ce{CH3COOH})} = \\frac{10^{-2.86}}{10^{-4.76}}', why: 'Write each acid constant from its pKa.' },
            { tex: '= 10^{4.76 - 2.86} = 10^{1.90}', why: 'Dividing powers of ten subtracts exponents. A pKa difference is a log of a ratio.' },
            { tex: '\\approx 79', why: '$10^{1.90} = 79.4$. One chlorine makes the acid about 80 times stronger.' },
          ],
          result: 'Each pKa unit is a factor of 10 in $K_a$; a difference of 1.90 units is a factor of about 79.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Benzoic acids and Hammett',
          text: 'On a benzene ring, electron-withdrawing groups at the para position lower the pKa (4-nitrobenzoic acid, 3.44) and donors raise it (4-methoxybenzoic acid, 4.47). In 1937 Louis Hammett used exactly these pKa shifts as a yardstick, the $\\sigma$ constants, to measure how strongly every substituent pulls or pushes electrons. It was one of the first quantitative structure–reactivity relationships, the ancestor of the models used in drug design today.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Which of these acids is the strongest (lowest pKa)?',
      options: [
        { text: 'Butanoic acid, $\\ce{CH3CH2CH2COOH}$', why: 'No electron-withdrawing substituent at all; its pKa is 4.82, the weakest of the four.' },
        { text: '4-Chlorobutanoic acid, $\\ce{ClCH2CH2CH2COOH}$', why: 'The chlorine is three bonds from the carboxyl carbon; its inductive pull has mostly faded (pKa 4.52).' },
        { text: '3-Chlorobutanoic acid, $\\ce{CH3CHClCH2COOH}$', why: 'Closer than the 4-chloro isomer, so stronger (pKa 4.05), but still one carbon farther than the best choice.' },
        { text: '2-Chlorobutanoic acid, $\\ce{CH3CH2CHClCOOH}$', correct: true, why: 'The chlorine is on the carbon next to the carboxyl group, where its σ-withdrawal stabilizes the carboxylate most (pKa 2.86).' },
      ],
      explanation: 'All four acids have the same carboxyl group and the same carboxylate resonance; only the inductive stabilization differs. It is strongest when the electronegative atom is closest: 2-chloro (2.86) < 3-chloro (4.05) < 4-chloro (4.52) < no chlorine (4.82).',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Using the pKa values 2.86 (2-chlorobutanoic acid) and 4.82 (butanoic acid), how many times larger is the $K_a$ of 2-chlorobutanoic acid? Round to the nearest whole number.',
      hint: 'The ratio of the two $K_a$ values is $10^{\\Delta \\text{p}K_a}$.',
      label: '$K_a$ ratio $\\approx$',
      answer: '10^(4.82 - 2.86)',
      answerTex: '10^{1.96} \\approx 91',
      tolerance: 1,
      explanation: '$\\dfrac{K_a(\\text{2-chloro})}{K_a(\\text{parent})} = 10^{4.82 - 2.86} = 10^{1.96} \\approx 91$. A single chlorine on the α carbon makes the acid almost a hundred times stronger, all through σ-bond induction.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Charge state depends on pH',
      blocks: [
        {
          type: 'p',
          text: 'In a living cell or a bottle of shampoo, the question is not "is it an acid?" but "what fraction is ionized at this pH?". The [[gchem-henderson-hasselbalch|Henderson–Hasselbalch equation]] answers it. Rearranged for the fraction in the carboxylate form:',
        },
        {
          type: 'math',
          tex: '\\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{RCOO-}]}{[\\ce{RCOOH}]} \\quad\\implies\\quad f_{\\ce{RCOO-}} = \\frac{1}{1 + 10^{\\,\\text{p}K_a - \\text{pH}}}',
          caption: 'At pH = pKa the acid is exactly half ionized. Each pH unit above the pKa multiplies the ratio $[\\ce{RCOO-}]/[\\ce{RCOOH}]$ by 10.',
        },
        {
          type: 'graph',
          x: [0, 14],
          y: [-0.05, 1.1],
          xStep: 1,
          yStep: 0.25,
          functions: [
            { expr: '1/(1 + 10^(k - x))', label: 'fraction ionized, $\\ce{RCOO-}$', color: 'blue' },
            { expr: '1/(1 + 10^(x - k))', label: 'fraction neutral, $\\ce{RCOOH}$', color: 'red', dashed: true },
          ],
          vlines: [{ x: 2, label: 'stomach', color: 'orange' }, { x: 7.4, label: 'blood', color: 'teal' }],
          points: [{ x: 'k', y: 0.5, label: 'pH = pKa', color: 'purple' }],
          sliders: [{ name: 'k', min: 0, max: 8, step: 0.05, value: 4.2, label: 'pKa of the acid' }],
          readouts: [
            { label: 'fraction ionized at pH 2.0 $=$', expr: '1/(1 + 10^(k - 2))', digits: 4 },
            { label: 'fraction ionized at pH 7.4 $=$', expr: '1/(1 + 10^(k - 7.4))', digits: 4 },
          ],
          caption: 'Fraction of a carboxylic acid in each form versus pH. The default is benzoic acid (pKa 4.20). Slide the pKa: a typical carboxylic acid (pKa 3–5) is almost entirely neutral in the stomach and almost entirely ionized in blood.',
        },
        {
          type: 'p',
          text: 'This matters for drugs. Neutral molecules cross the fatty membranes of cells far more easily than ions, so an acidic drug such as aspirin (pKa 3.5) or ibuprofen (about 4.5) is absorbed partly in the acidic stomach, then travels in the blood mostly as its carboxylate, which is also what makes it water-soluble enough to circulate. It is also why soap works: at the pH of soapy water, fatty acids are carboxylate ions with a charged head and a long greasy tail (the next lesson shows how soap is made).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Extraction by pH',
          text: 'Chemists use this every day. Shake a mixture of a carboxylic acid and a neutral compound between ether and aqueous $\\ce{NaHCO3}$ (pH about 8): the acid becomes its sodium carboxylate and moves into the water, the neutral compound stays in the ether. Acidify the water layer with HCl and the free acid comes back out. Phenols (pKa about 10) stay behind with bicarbonate, which lets you separate them from carboxylic acids too.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Benzoic acid has pKa 4.20. What **percentage** of it is in the ionized (benzoate) form in stomach acid at pH 2.00? Give two decimal places.',
      hint: '$f = \\dfrac{1}{1 + 10^{\\,\\text{p}K_a - \\text{pH}}}$; multiply by 100 for a percentage.',
      label: 'ionized $=$',
      unit: '%',
      answer: '100/(1 + 10^(4.20 - 2.00))',
      answerTex: '0.63\\%',
      tolerance: 0.005,
      explanation: '$\\text{p}K_a - \\text{pH} = 2.20$, and $10^{2.20} = 158.5$. So $f = \\dfrac{1}{1 + 158.5} = 0.00627$, or $0.63\\%$. More than 99% is the neutral acid, the form that crosses membranes. At pH 7.4 the same formula gives 99.94% ionized: the pKa did not change, the environment did.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The reactivity ladder',
      blocks: [
        {
          type: 'p',
          text: 'The derivatives differ enormously in reactivity. Acetyl chloride fumes in moist air and reacts violently with water; acetic anhydride reacts with water over minutes to hours; ethyl acetate survives in water for a long time unless acid or base is added; and the amide bonds of your proteins last for years at pH 7. This order, the [[ochem-reactivity-ladder|reactivity ladder]], controls everything in the next lesson. Two effects explain it, and they point the same way.',
        },
        {
          type: 'figure',
          svg: FIG.ladder,
          alt: 'A ladder of five acetyl derivatives from most to least reactive, with a purple arrow labeled more reactive pointing up. Acid chloride: leaving group chloride, pKa of HCl −7, C=O IR about 1800. Anhydride: leaving group carboxylate, pKa 4.8, IR 1820 and 1760. Ester: leaving group alkoxide, pKa 16, IR about 1740. Carboxylic acid: leaving group hydroxide, pKa 15.7, IR about 1710. Amide: leaving group amide ion H2N−, pKa 38, IR about 1660.',
          caption: 'Read across a row: a weak conjugate base (low pKa of H–LG) leaves easily. Read the last column: the more the substituent donates into the C=O, the lower its stretching frequency. Both trends rank the same compounds in the same order.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Leaving-group ability.** The group that departs takes the bonding pair with it, so the weaker a base it is, the better it leaves. $\\ce{Cl-}$ (from HCl, pKa −7) is superb; a carboxylate (pKa 4.8) is good; an alkoxide or hydroxide (pKa 16) is poor; $\\ce{NH2-}$ (pKa 38) is terrible.',
            '**Resonance donation into the carbonyl.** A lone pair on the atom next to C=O can delocalize into it, which makes the carbonyl carbon less positive and the whole group more stable. Nitrogen is the best donor (less electronegative than O, so it shares its pair readily); oxygen donates less; chlorine\'s 3p lone pairs overlap poorly with carbon\'s 2p orbital and barely donate at all.',
          ],
        },
        {
          type: 'figure',
          svg: FIG.amide,
          alt: 'Resonance of N,N-dimethylacetamide. Left: neutral amide with a lone pair on nitrogen; a curved arrow goes from the nitrogen lone pair to the C–N bond and another from the C=O double bond to oxygen. Right: the resonance form with C=N+ double bond and O− single bond.',
          caption: 'The amide\'s second resonance form is a major contributor. The C–N bond has partial double-bond character, so the amide is flat and rotation about C–N costs about 80 kJ/mol. This is why protein backbones are made of rigid, planar units.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the IR frequencies line up',
          text: 'A C=O stretching frequency measures bond stiffness. Donation of a lone pair into the carbonyl, as in the amide\'s second resonance form, gives the C–O bond partial single-bond character, so it gets weaker and its stretch drops (amides about 1660 cm⁻¹). Chlorine withdraws inductively and hardly donates, so the C=O of an acid chloride stays short and stiff (about 1800 cm⁻¹). The same electronic effect that weakens the C=O also lowers the carbonyl carbon\'s positive charge, so it lowers reactivity toward nucleophiles. The spectrum is a reactivity meter.',
        },
        {
          type: 'p',
          text: 'Carboxylate ions sit below amides: a negatively charged group repels incoming nucleophiles and has no leaving group worth the name ($\\ce{O^2-}$). The practical rule for the next lesson: **you can always go down the ladder** (turn a more reactive derivative into a less reactive one) by adding the right nucleophile. Going up needs a special reagent.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Order these compounds from **most** reactive toward a nucleophile such as water (top) to **least** reactive (bottom).',
      lines: ['acetyl chloride, $\\ce{CH3COCl}$', 'acetic anhydride, $\\ce{(CH3CO)2O}$', 'methyl acetate, $\\ce{CH3CO2CH3}$', 'acetamide, $\\ce{CH3CONH2}$', 'sodium acetate, $\\ce{CH3CO2Na}$'],
      explanation: 'Acid chloride (best leaving group, $\\ce{Cl-}$, and no resonance donation) > anhydride (carboxylate leaving group) > ester (alkoxide leaving group, some O donation) > amide (terrible leaving group, strong N donation) > carboxylate (negative charge repels nucleophiles). Note how the C=O stretch falls along the same list: 1800 → 1820/1760 → 1740 → 1660 cm⁻¹.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Methyl acetate reacts with water much more slowly than acetyl chloride because methoxide, $\\ce{CH3O-}$, is a better leaving group than chloride.',
      answer: false,
      explanation: 'The conclusion is right but the reason is backwards. Chloride is the far **better** leaving group: HCl has pKa −7, methanol about 15.5, so $\\ce{Cl-}$ is about $10^{22}$ times weaker as a base than $\\ce{CH3O-}$. Methyl acetate is less reactive because its leaving group is **poor**, and because the ester oxygen donates a lone pair into the C=O, making the carbonyl carbon less electrophilic.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Three ways to make a carboxylic acid',
      blocks: [
        {
          type: 'p',
          text: 'You already know one route from the alcohols unit: **oxidation**. A primary alcohol or an aldehyde with chromic acid ($\\ce{H2CrO4}$, Jones reagent) or $\\ce{KMnO4}$ goes all the way to the carboxylic acid, with the same number of carbons. Hot $\\ce{KMnO4}$ also oxidizes an alkyl side chain on benzene down to $\\ce{-COOH}$, as long as the benzylic carbon carries at least one H: toluene gives benzoic acid. The other two routes **add a carbon**, which makes them useful for building skeletons.',
        },
        {
          type: 'figure',
          svg: FIG.prep,
          alt: 'Three routes to pentanoic acid. A: 1-pentanol with H2CrO4 or KMnO4 gives pentanoic acid (oxidation, same carbon count). B: 1-bromobutane with 1. Mg, ether 2. CO2 3. H3O+ gives pentanoic acid (Grignard carboxylation, one more carbon). C: 1-bromobutane with NaCN by SN2 gives pentanenitrile, which with H3O+ and heat is hydrolyzed to pentanoic acid.',
          caption: 'Routes B and C both turn a four-carbon alkyl halide into a five-carbon acid; the new carbon comes from $\\ce{CO2}$ or from cyanide.',
        },
        {
          type: 'p',
          text: '**Grignard carboxylation.** A Grignard reagent is a carbon nucleophile, and $\\ce{CO2}$ is a carbonyl compound with a very electrophilic carbon. The C–Mg bond attacks it exactly as it attacks an aldehyde, giving a magnesium carboxylate; acid workup protonates it.',
        },
        {
          type: 'figure',
          svg: FIG.grignard,
          alt: 'Mechanism: a curved arrow from the C–Mg bond of phenylmagnesium bromide to the carbon of O=C=O, and a second curved arrow from one C=O double bond to its oxygen. The product is a benzoate anion with a +MgBr counterion, which H3O+ converts to benzoic acid.',
          caption: 'The C–Mg bond electrons form the new C–C bond; the π electrons of one C=O move onto oxygen. Pouring the Grignard solution onto crushed dry ice is the classic lab procedure.',
        },
        {
          type: 'p',
          text: '**Nitrile hydrolysis.** Cyanide is a good nucleophile and a weak base, so it does clean $\\ce{S_N2}$ on primary and unhindered secondary halides. Heating the nitrile in aqueous acid (or base, followed by acid) adds water twice, through an amide, to give the acid and $\\ce{NH4+}$. The next lesson shows the mechanism.',
        },
        {
          type: 'derivation',
          title: 'Choosing a route: make 5-hydroxypentanoic acid from 4-bromo-1-butanol',
          steps: [
            { tex: '\\ce{HOCH2CH2CH2CH2Br} \\to \\ce{HOCH2CH2CH2CH2COOH}', why: 'The target has one more carbon, attached where the bromine was. Oxidation cannot add a carbon, so it is Grignard or nitrile.' },
            { tex: '\\text{Grignard: } \\ce{R-MgBr + HO-R -> R-H + BrMg-OR}', why: 'A Grignard reagent is a strong base (the conjugate acid, an alkane, has pKa about 50). The molecule\'s own O–H (pKa 16) would protonate it immediately. Grignard route fails.' },
            { tex: '\\ce{HO(CH2)4Br ->[\\ce{NaCN}][\\text{DMSO}] HO(CH2)4CN}', why: 'A primary bromide is an ideal $\\ce{S_N2}$ substrate, and cyanide does not care about the O–H.' },
            { tex: '\\ce{HO(CH2)4CN ->[\\ce{H3O+}][\\text{heat}] HO(CH2)4COOH + NH4+}', why: 'Hydrolysis converts the nitrile carbon into the carboxyl carbon.' },
          ],
          result: 'Use the nitrile route when the molecule has acidic O–H or N–H groups. Use the Grignard route when the halide cannot do $\\ce{S_N2}$: tertiary, aryl and vinyl halides form Grignard reagents happily but do not react with cyanide.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Which sequence converts 2-bromo-2-methylpropane, $\\ce{(CH3)3CBr}$, into 2,2-dimethylpropanoic acid, $\\ce{(CH3)3CCOOH}$?',
      options: [
        { text: '1. $\\ce{NaCN}$; 2. $\\ce{H3O+}$, heat', why: 'A tertiary halide cannot do $\\ce{S_N2}$: the back side is blocked. Cyanide acts as a base instead, and E2 gives 2-methylpropene.' },
        { text: '1. $\\ce{Mg}$, ether; 2. $\\ce{CO2}$; 3. $\\ce{H3O+}$', correct: true, why: 'Tertiary halides form Grignard reagents without trouble. The tert-butyl carbanion equivalent attacks $\\ce{CO2}$, and acid workup gives the acid with one extra carbon.' },
        { text: '$\\ce{H2CrO4}$', why: 'There is no alcohol or aldehyde to oxidize, and oxidation could never add the extra carbon the product needs.' },
        { text: '1. $\\ce{NaOH}$; 2. $\\ce{KMnO4}$', why: 'Hydroxide gives mostly elimination (or tert-butyl alcohol by SN1), and a tertiary alcohol has no H on its carbinol carbon, so it resists oxidation. And again, no new carbon.' },
      ],
      explanation: 'Count carbons first: the product has one more, so the choice is Grignard + $\\ce{CO2}$ or cyanide + hydrolysis. Then check the substrate: tertiary rules out $\\ce{S_N2}$, and there is no acidic hydrogen to destroy a Grignard reagent. Grignard carboxylation is the answer.',
    },
  ],
  takeaways: [
    'Carboxylic acids, acid chlorides, anhydrides, esters, amides and nitriles share one oxidation level (three bonds from carbon to heteroatoms); all hydrolyze to the acid.',
    'Names: the carbonyl or nitrile carbon is C1; acids -oic acid, chlorides -oyl chloride, esters "alkyl -oate" (O-side group first), amides -amide with N- locants, nitriles -nitrile.',
    'Carboxylic acids (pKa about 4–5) are about $10^{11}$ times more acidic than alcohols because the carboxylate spreads its charge over two oxygens. Nearby electronegative groups lower the pKa; the effect adds up and fades with distance.',
    'The fraction ionized is $1/(1 + 10^{\\text{p}K_a - \\text{pH}})$: carboxylic acids are neutral in the stomach and anionic in blood.',
    'Reactivity ladder: acid chloride > anhydride > ester ≈ acid > amide > carboxylate, explained by leaving-group ability and lone-pair donation into C=O; the C=O IR frequency falls in the same order.',
    'Make acids by oxidizing primary alcohols, aldehydes or alkylbenzenes, or add one carbon with Grignard + CO₂ (no acidic H allowed) or SN2 cyanide + hydrolysis (1° or 2° halides only).',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 20 covers carboxylic acids and nitriles (naming, acidity, substituent effects, preparation); chapter 21 opens with naming the derivatives.',
    },
    {
      title: 'Wikipedia — Carboxylic acid',
      url: 'https://en.wikipedia.org/wiki/Carboxylic_acid',
      source: 'wikipedia',
      note: 'Physical properties, dimers, spectroscopy and a long table of common names and sources.',
    },
    {
      title: 'Master Organic Chemistry',
      url: 'https://www.masterorganicchemistry.com/',
      source: 'other',
      note: 'Search for the reactivity of carboxylic acid derivatives: clear explanations of the ladder through leaving groups and resonance.',
    },
    {
      title: 'Wikipedia — Hammett equation',
      url: 'https://en.wikipedia.org/wiki/Hammett_equation',
      source: 'wikipedia',
      note: 'How benzoic acid pKa values became a scale for substituent effects.',
    },
  ],
};
