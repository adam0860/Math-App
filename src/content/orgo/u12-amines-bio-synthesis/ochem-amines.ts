import type { Lesson } from '../../types';

// <figures> skeletal structures drawn from SMILES with the molecule kit; mechanisms checked by rendering
const FIG = {
  aniline: "<svg viewBox=\"0 0 520 195\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,10) scale(1.6)\"><text x=\"82.37\" y=\"33.79\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"102.59\" y=\"37.13\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"92.48\" y=\"33.79\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"66.64\" y1=\"41.13\" x2=\"45.86\" y2=\"29.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.62\" y1=\"42.96\" x2=\"46.28\" y2=\"33.52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.07\" y1=\"41.12\" x2=\"25.07\" y2=\"65.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.67\" y1=\"43.69\" x2=\"28.67\" y2=\"62.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.86\" y1=\"77.12\" x2=\"66.64\" y2=\"65.13\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"46.28\" y1=\"72.73\" x2=\"62.62\" y2=\"63.29\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"81.37\" y1=\"32.62\" x2=\"66.64\" y2=\"41.13\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.86\" y1=\"29.12\" x2=\"25.07\" y2=\"41.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.07\" y1=\"65.12\" x2=\"45.86\" y2=\"77.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"66.64\" y1=\"41.13\" x2=\"66.64\" y2=\"65.13\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(300,10) scale(1.6)\"><text x=\"82.37\" y=\"33.79\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"93.48\" y=\"28.13\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><text x=\"92.48\" y=\"23.13\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"82.37\" y=\"19.79\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><text x=\"61.59\" y=\"69.79\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">C</text><text x=\"72.7\" y=\"64.13\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\">−</text><line x1=\"66.64\" y1=\"43.2\" x2=\"82.27\" y2=\"34.18\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.84\" y1=\"40.09\" x2=\"80.47\" y2=\"31.06\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.86\" y1=\"29.12\" x2=\"25.07\" y2=\"41.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.44\" y1=\"33.52\" x2=\"29.09\" y2=\"42.96\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.07\" y1=\"65.12\" x2=\"45.86\" y2=\"77.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"29.09\" y1=\"63.29\" x2=\"45.44\" y2=\"72.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"66.64\" y1=\"41.13\" x2=\"45.86\" y2=\"29.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.07\" y1=\"41.12\" x2=\"25.07\" y2=\"65.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.86\" y1=\"77.12\" x2=\"60.59\" y2=\"68.62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"66.64\" y1=\"41.13\" x2=\"66.64\" y2=\"58.13\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"195\" y1=\"105\" x2=\"290\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M290,105 L282.9,108.6 M290,105 L282.9,101.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M195,105 L202.1,101.4 M195,105 L202.1,108.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M158,42 Q137.6,41.6 136,62\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M136,62 L132.9,54.6 L140.2,55.2 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M122,90 Q135.4,99.4 125,112\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M125,112 L126.7,104.2 L132.3,108.8 Z\" fill=\"currentColor\" class=\"f-red\"/><circle cx=\"158.7\" cy=\"41.7\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"152.7\" cy=\"39.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"419.1\" cy=\"128.9\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"423.2\" cy=\"124.0\" r=\"1.8\" fill=\"currentColor\"/><text x=\"130\" y=\"192\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">N lone pair overlaps the ring π system</text><text x=\"390\" y=\"192\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">charge at ortho (and para) carbons</text></svg>",
  classes: "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,5) scale(1.3)\"><text x=\"25.31\" y=\"51.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"20.3\" y=\"54.38\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"10.2\" y=\"51.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"92.72\" y1=\"34.38\" x2=\"71.93\" y2=\"46.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"71.93\" y1=\"46.38\" x2=\"51.15\" y2=\"34.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.15\" y1=\"34.38\" x2=\"36.42\" y2=\"42.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(180,5) scale(1.3)\"><text x=\"46.09\" y=\"39.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"46.09\" y=\"25.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"92.72\" y1=\"34.38\" x2=\"71.93\" y2=\"46.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"71.93\" y1=\"46.38\" x2=\"57.2\" y2=\"37.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.09\" y1=\"37.88\" x2=\"30.36\" y2=\"46.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(350,5) scale(1.3)\"><text x=\"56.48\" y=\"33.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><line x1=\"103.11\" y1=\"28.38\" x2=\"82.32\" y2=\"16.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"82.32\" y1=\"16.38\" x2=\"67.59\" y2=\"24.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.54\" y1=\"35.38\" x2=\"61.54\" y2=\"52.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.54\" y1=\"52.38\" x2=\"82.32\" y2=\"64.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.48\" y1=\"24.89\" x2=\"40.75\" y2=\"16.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.75\" y1=\"16.38\" x2=\"19.97\" y2=\"28.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(10,155) scale(1.3)\"><text x=\"56.48\" y=\"45.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"67.59\" y=\"39.38\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><line x1=\"82.32\" y1=\"52.38\" x2=\"67.59\" y2=\"43.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.54\" y1=\"33.38\" x2=\"61.54\" y2=\"16.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.54\" y1=\"47.38\" x2=\"61.54\" y2=\"64.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.48\" y1=\"43.88\" x2=\"40.75\" y2=\"52.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(180,155) scale(1.3)\"><text x=\"87.66\" y=\"21.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"107.88\" y=\"24.38\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"97.77\" y=\"21.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"71.93\" y1=\"28.38\" x2=\"51.15\" y2=\"16.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"67.91\" y1=\"30.22\" x2=\"51.56\" y2=\"20.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"30.36\" y1=\"28.38\" x2=\"30.36\" y2=\"52.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.96\" y1=\"30.95\" x2=\"33.96\" y2=\"49.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.15\" y1=\"64.38\" x2=\"71.93\" y2=\"52.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.56\" y1=\"59.99\" x2=\"67.91\" y2=\"50.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"86.66\" y1=\"19.88\" x2=\"71.93\" y2=\"28.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.15\" y1=\"16.38\" x2=\"30.36\" y2=\"28.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"30.36\" y1=\"52.38\" x2=\"51.15\" y2=\"64.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"71.93\" y1=\"28.38\" x2=\"71.93\" y2=\"52.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(350,155) scale(1.3)\"><text x=\"77.27\" y=\"57.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><line x1=\"40.75\" y1=\"28.38\" x2=\"40.75\" y2=\"52.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.35\" y1=\"30.95\" x2=\"44.35\" y2=\"49.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.54\" y1=\"64.38\" x2=\"76.27\" y2=\"55.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.96\" y1=\"59.99\" x2=\"74.47\" y2=\"52.76\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"82.32\" y1=\"28.38\" x2=\"61.54\" y2=\"16.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.31\" y1=\"30.22\" x2=\"61.96\" y2=\"20.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.75\" y1=\"52.38\" x2=\"61.54\" y2=\"64.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"82.32\" y1=\"45.38\" x2=\"82.32\" y2=\"28.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.75\" y1=\"28.38\" x2=\"61.54\" y2=\"16.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"90\" y=\"127\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">1° amine</text><text x=\"90\" y=\"144\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">propan-1-amine</text><text x=\"260\" y=\"127\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">2° amine</text><text x=\"260\" y=\"144\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">N-methylethanamine</text><text x=\"430\" y=\"127\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">3° amine</text><text x=\"430\" y=\"144\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">triethylamine</text><text x=\"90\" y=\"277\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">4° ammonium ion</text><text x=\"90\" y=\"294\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">tetramethylammonium</text><text x=\"260\" y=\"277\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">aryl amine</text><text x=\"260\" y=\"294\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">aniline</text><text x=\"430\" y=\"277\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"600\">aromatic heterocycle</text><text x=\"430\" y=\"294\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">pyridine</text></svg>",
  diazo: "<svg viewBox=\"0 0 520 280\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,90) scale(0.9)\"><text x=\"64.43\" y=\"39.72\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"84.64\" y=\"43.06\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"74.54\" y=\"39.72\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"48.7\" y1=\"47.06\" x2=\"27.91\" y2=\"35.06\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.68\" y1=\"48.89\" x2=\"28.33\" y2=\"39.45\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"7.13\" y1=\"47.06\" x2=\"7.13\" y2=\"71.06\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"10.73\" y1=\"49.62\" x2=\"10.73\" y2=\"68.49\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"27.91\" y1=\"83.06\" x2=\"48.7\" y2=\"71.06\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.33\" y1=\"78.66\" x2=\"44.68\" y2=\"69.22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.43\" y1=\"38.55\" x2=\"48.7\" y2=\"47.06\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"27.91\" y1=\"35.06\" x2=\"7.13\" y2=\"47.06\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"7.13\" y1=\"71.06\" x2=\"27.91\" y2=\"83.06\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.7\" y1=\"47.06\" x2=\"48.7\" y2=\"71.06\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(150,85) scale(1.05)\"><text x=\"15.28\" y=\"27.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"36.07\" y=\"39.05\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"47.17\" y=\"33.38\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><line x1=\"61.9\" y1=\"46.38\" x2=\"61.9\" y2=\"70.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.5\" y1=\"48.94\" x2=\"65.5\" y2=\"67.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"82.69\" y1=\"82.38\" x2=\"103.47\" y2=\"70.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"83.11\" y1=\"77.98\" x2=\"99.46\" y2=\"68.54\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"103.47\" y1=\"46.38\" x2=\"82.69\" y2=\"34.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"99.46\" y1=\"48.22\" x2=\"83.11\" y2=\"38.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"26.39\" y1=\"25.88\" x2=\"35.07\" y2=\"30.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"24.59\" y1=\"28.99\" x2=\"33.27\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.19\" y1=\"22.76\" x2=\"36.87\" y2=\"27.77\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"47.17\" y1=\"37.88\" x2=\"61.9\" y2=\"46.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.9\" y1=\"70.38\" x2=\"82.69\" y2=\"82.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"103.47\" y1=\"70.38\" x2=\"103.47\" y2=\"46.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.9\" y1=\"46.38\" x2=\"82.69\" y2=\"34.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"92\" y1=\"150\" x2=\"150\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M150,150 L142.9,153.6 M150,150 L142.9,146.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"121\" y=\"142\" text-anchor=\"middle\" font-size=\"12\">NaNO₂, HCl</text><text x=\"121\" y=\"168\" text-anchor=\"middle\" font-size=\"12\">0–5 °C</text><line x1=\"275\" y1=\"140\" x2=\"318\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><text x=\"324\" y=\"30\" text-anchor=\"start\" font-size=\"12.5\">CuCl → ArCl</text><line x1=\"275\" y1=\"140\" x2=\"318\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><text x=\"324\" y=\"70\" text-anchor=\"start\" font-size=\"12.5\">CuBr → ArBr</text><line x1=\"275\" y1=\"140\" x2=\"318\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><text x=\"324\" y=\"110\" text-anchor=\"start\" font-size=\"12.5\">CuCN → ArCN</text><line x1=\"275\" y1=\"140\" x2=\"318\" y2=\"145\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><text x=\"324\" y=\"150\" text-anchor=\"start\" font-size=\"12.5\">H₂O, warm → ArOH (phenol)</text><line x1=\"275\" y1=\"140\" x2=\"318\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><text x=\"324\" y=\"190\" text-anchor=\"start\" font-size=\"12.5\">HBF₄, heat → ArF</text><line x1=\"275\" y1=\"140\" x2=\"318\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><text x=\"324\" y=\"230\" text-anchor=\"start\" font-size=\"12.5\">H₃PO₂ → ArH (N removed)</text><line x1=\"275\" y1=\"140\" x2=\"318\" y2=\"265\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><text x=\"324\" y=\"270\" text-anchor=\"start\" font-size=\"12.5\">ArNMe₂ → Ar–N=N–Ar′ (azo dye)</text><text x=\"212\" y=\"210\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">arenediazonium ion</text><text x=\"212\" y=\"226\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-gray\">N₂ is a superb leaving group</text><text x=\"48\" y=\"210\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">aniline</text><text x=\"400\" y=\"12\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-purple\" font-weight=\"600\">Sandmeyer (Cu salts) and related reactions</text></svg>",
  gabriel: "<svg viewBox=\"0 0 520 260\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,10)\"><text x=\"93.87\" y=\"24.81\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"53.62\" y=\"26.94\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"53.62\" y=\"12.94\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><text x=\"15.23\" y=\"41.52\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"79.32\" y1=\"33.66\" x2=\"93.73\" y2=\"25.34\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"77.61\" y1=\"30.7\" x2=\"92.02\" y2=\"22.38\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"44.81\" y1=\"37.67\" x2=\"27.3\" y2=\"35.83\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"44.45\" y1=\"41.08\" x2=\"26.95\" y2=\"39.24\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"54.81\" y1=\"59.02\" x2=\"47.76\" y2=\"80.74\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"57.32\" y1=\"62.4\" x2=\"51.77\" y2=\"79.48\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"63.04\" y1=\"97.72\" x2=\"85.38\" y2=\"92.97\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"64.71\" y1=\"93.86\" x2=\"82.28\" y2=\"90.12\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"92.44\" y1=\"71.25\" x2=\"77.15\" y2=\"54.27\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"88.26\" y1=\"71.73\" x2=\"76.24\" y2=\"58.38\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"79.54\" y1=\"31.56\" x2=\"64.73\" y2=\"24.96\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"52.62\" y1=\"28.99\" x2=\"43.39\" y2=\"39.24\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"43.39\" y1=\"39.24\" x2=\"54.81\" y2=\"59.02\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"47.76\" y1=\"80.74\" x2=\"63.04\" y2=\"97.72\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"85.38\" y1=\"92.97\" x2=\"92.44\" y2=\"71.25\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"79.54\" y1=\"31.56\" x2=\"77.15\" y2=\"54.27\" stroke=\"currentColor\" stroke-width=\"1.37\" /><line x1=\"54.81\" y1=\"59.02\" x2=\"77.15\" y2=\"54.27\" stroke=\"currentColor\" stroke-width=\"1.37\" /></g><g transform=\"translate(190,10)\"><text x=\"95.87\" y=\"17.41\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"53.55\" y=\"19.65\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"64.66\" y=\"13.98\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">−</text><text x=\"13.24\" y=\"34.97\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"80.3\" y1=\"26.95\" x2=\"95.77\" y2=\"18.02\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.5\" y1=\"23.84\" x2=\"93.97\" y2=\"14.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.04\" y1=\"31.16\" x2=\"25.32\" y2=\"29.19\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.66\" y1=\"34.74\" x2=\"24.94\" y2=\"32.77\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"54.55\" y1=\"53.6\" x2=\"47.13\" y2=\"76.42\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"57.18\" y1=\"57.15\" x2=\"51.35\" y2=\"75.1\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"63.19\" y1=\"94.26\" x2=\"86.67\" y2=\"89.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.95\" y1=\"90.21\" x2=\"83.41\" y2=\"86.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"94.08\" y1=\"66.44\" x2=\"78.03\" y2=\"48.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"89.7\" y1=\"66.95\" x2=\"77.06\" y2=\"52.92\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80.53\" y1=\"24.74\" x2=\"64.66\" y2=\"17.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.55\" y1=\"21.7\" x2=\"42.55\" y2=\"32.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"42.55\" y1=\"32.81\" x2=\"54.55\" y2=\"53.6\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"47.13\" y1=\"76.42\" x2=\"63.19\" y2=\"94.26\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"86.67\" y1=\"89.27\" x2=\"94.08\" y2=\"66.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80.53\" y1=\"24.74\" x2=\"78.03\" y2=\"48.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"54.55\" y1=\"53.6\" x2=\"78.03\" y2=\"48.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(370,0) scale(0.95)\"><text x=\"104.21\" y=\"30.83\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"78.36\" y=\"63.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"63.02\" y=\"102.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"106.24\" y1=\"50.67\" x2=\"109.89\" y2=\"33.53\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"102.81\" y1=\"49.94\" x2=\"106.45\" y2=\"32.8\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"42.88\" y1=\"58.57\" x2=\"22.61\" y2=\"46.87\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"38.96\" y1=\"60.36\" x2=\"23.02\" y2=\"51.16\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"2.34\" y1=\"58.57\" x2=\"2.34\" y2=\"81.97\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"5.85\" y1=\"61.07\" x2=\"5.85\" y2=\"79.48\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"22.61\" y1=\"93.68\" x2=\"42.88\" y2=\"81.97\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"23.02\" y1=\"89.39\" x2=\"38.96\" y2=\"80.18\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"85.63\" y1=\"79.69\" x2=\"73.74\" y2=\"90.4\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"87.98\" y1=\"82.3\" x2=\"76.09\" y2=\"93.01\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"108.75\" y1=\"86.71\" x2=\"120.45\" y2=\"106.98\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"113.04\" y1=\"87.12\" x2=\"122.24\" y2=\"103.06\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"143.85\" y1=\"106.98\" x2=\"155.55\" y2=\"86.71\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"142.06\" y1=\"103.06\" x2=\"151.27\" y2=\"87.12\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"143.85\" y1=\"66.44\" x2=\"120.45\" y2=\"66.44\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"141.36\" y1=\"69.96\" x2=\"122.95\" y2=\"69.96\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"104.79\" y1=\"49.05\" x2=\"89.46\" y2=\"55.88\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"77.36\" y1=\"55.08\" x2=\"63.14\" y2=\"46.87\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"63.14\" y1=\"46.87\" x2=\"42.88\" y2=\"58.57\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"22.61\" y1=\"46.87\" x2=\"2.34\" y2=\"58.57\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"2.34\" y1=\"81.97\" x2=\"22.61\" y2=\"93.68\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"42.88\" y1=\"58.57\" x2=\"42.88\" y2=\"81.97\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"84.15\" y1=\"65.57\" x2=\"85.86\" y2=\"81.85\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"85.86\" y1=\"81.85\" x2=\"108.75\" y2=\"86.71\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"120.45\" y1=\"106.98\" x2=\"143.85\" y2=\"106.98\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"155.55\" y1=\"86.71\" x2=\"143.85\" y2=\"66.44\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"104.79\" y1=\"49.05\" x2=\"120.45\" y2=\"66.44\" stroke=\"currentColor\" stroke-width=\"1.4\" /><line x1=\"108.75\" y1=\"86.71\" x2=\"120.45\" y2=\"66.44\" stroke=\"currentColor\" stroke-width=\"1.4\" /></g><g transform=\"translate(260,160)\"><text x=\"80.93\" y=\"32.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"101.15\" y=\"36\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"91.04\" y=\"32.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"44.42\" y1=\"28\" x2=\"23.63\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.4\" y1=\"29.84\" x2=\"24.05\" y2=\"20.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"2.85\" y1=\"28\" x2=\"2.85\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"6.45\" y1=\"30.56\" x2=\"6.45\" y2=\"49.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.63\" y1=\"64\" x2=\"44.42\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"24.05\" y1=\"59.6\" x2=\"40.4\" y2=\"50.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.93\" y1=\"24.5\" x2=\"65.2\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.2\" y1=\"16\" x2=\"44.42\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.63\" y1=\"16\" x2=\"2.85\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"2.85\" y1=\"52\" x2=\"23.63\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.42\" y1=\"28\" x2=\"44.42\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"120\" y1=\"60\" x2=\"185\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M185,60 L177.9,63.6 M185,60 L177.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"152.5\" y=\"52\" text-anchor=\"middle\" font-size=\"12\">KOH</text><text x=\"152.5\" y=\"78\" text-anchor=\"middle\" font-size=\"12\">pKa 8.3</text><line x1=\"315\" y1=\"60\" x2=\"368\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M368,60 L360.9,63.6 M368,60 L360.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"341.5\" y=\"52\" text-anchor=\"middle\" font-size=\"12\">PhCH₂Br</text><text x=\"341.5\" y=\"78\" text-anchor=\"middle\" font-size=\"12\">SN2</text><line x1=\"445\" y1=\"125\" x2=\"380\" y2=\"195\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M380,195 L382.2,187.3 M380,195 L387.5,192.2\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"250\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">phthalimide anion (K⁺)</text><text x=\"60\" y=\"122\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">phthalimide</text><text x=\"425\" y=\"172\" text-anchor=\"start\" font-size=\"12\">H₂NNH₂</text><text x=\"425\" y=\"188\" text-anchor=\"start\" font-size=\"11.5\" class=\"t-gray\">or H₃O⁺, heat</text><text x=\"315\" y=\"252\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">benzylamine: one alkyl group only</text><text x=\"120\" y=\"205\" text-anchor=\"middle\" font-size=\"12\">N can be alkylated only once:</text><text x=\"120\" y=\"221\" text-anchor=\"middle\" font-size=\"12\">the product has no N–H left</text></svg>",
  hofmann: "<svg viewBox=\"0 0 520 160\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,20) scale(1.15)\"><text x=\"18.15\" y=\"61.44\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"13.14\" y=\"64.77\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"3.04\" y=\"61.44\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"84.59\" y1=\"44.96\" x2=\"64.13\" y2=\"56.77\" stroke=\"currentColor\" stroke-width=\"1.42\" /><line x1=\"64.13\" y1=\"56.77\" x2=\"43.67\" y2=\"44.96\" stroke=\"currentColor\" stroke-width=\"1.42\" /><line x1=\"43.67\" y1=\"44.96\" x2=\"43.67\" y2=\"21.33\" stroke=\"currentColor\" stroke-width=\"1.42\" /><line x1=\"43.67\" y1=\"44.96\" x2=\"29.26\" y2=\"53.27\" stroke=\"currentColor\" stroke-width=\"1.42\" /></g><g transform=\"translate(160,10) scale(1.15)\"><text x=\"30.68\" y=\"64.45\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"41.79\" y=\"58.78\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><line x1=\"98.09\" y1=\"47.78\" x2=\"77.31\" y2=\"59.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"77.31\" y1=\"59.78\" x2=\"56.52\" y2=\"47.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.52\" y1=\"47.78\" x2=\"56.52\" y2=\"23.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.52\" y1=\"47.78\" x2=\"47.28\" y2=\"53.11\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.78\" y1=\"66.78\" x2=\"47.74\" y2=\"80.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"29.68\" y1=\"63.28\" x2=\"14.95\" y2=\"71.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.7\" y1=\"52.78\" x2=\"23.74\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(380,10) scale(1.1)\"><line x1=\"35.06\" y1=\"21.27\" x2=\"14.28\" y2=\"33.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.64\" y1=\"25.67\" x2=\"16.08\" y2=\"36.39\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"76.63\" y1=\"21.27\" x2=\"55.85\" y2=\"33.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.85\" y1=\"33.27\" x2=\"35.06\" y2=\"21.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(380,85) scale(1.1)\"><line x1=\"55.85\" y1=\"33.27\" x2=\"35.06\" y2=\"21.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.43\" y1=\"28.87\" x2=\"37.28\" y2=\"18.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"76.63\" y1=\"21.27\" x2=\"55.85\" y2=\"33.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.06\" y1=\"21.27\" x2=\"14.28\" y2=\"33.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"100\" y1=\"70\" x2=\"158\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M158,70 L150.9,73.6 M158,70 L150.9,66.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"129\" y=\"62\" text-anchor=\"middle\" font-size=\"12\">excess CH₃I</text><line x1=\"295\" y1=\"60\" x2=\"375\" y2=\"42\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M375,42 L368.8,47.1 M375,42 L367.2,40.0\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"295\" y1=\"85\" x2=\"375\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M375,110 L367.1,111.3 M375,110 L369.3,104.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"215\" y=\"128\" text-anchor=\"middle\" font-size=\"13\">I⁻</text><text x=\"320\" y=\"30\" text-anchor=\"middle\" font-size=\"12\">Ag₂O, H₂O, heat</text><text x=\"430\" y=\"78\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-green\">1-butene, major (95%)</text><text x=\"430\" y=\"152\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-gray\">2-butene, minor</text><text x=\"50\" y=\"135\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2-butanamine</text></svg>",
  lidocaine: "<svg viewBox=\"0 0 520 190\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(60,0) scale(1.25)\"><text x=\"196.52\" y=\"72.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"154.55\" y=\"96.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"134.16\" y=\"60.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"134.16\" y=\"46.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"158.2\" y1=\"66.96\" x2=\"158.2\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"161.8\" y1=\"66.96\" x2=\"161.8\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"118.43\" y1=\"68\" x2=\"97.65\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"114.41\" y1=\"69.84\" x2=\"98.06\" y2=\"60.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"76.86\" y1=\"68\" x2=\"76.86\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80.46\" y1=\"70.56\" x2=\"80.46\" y2=\"89.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"97.65\" y1=\"104\" x2=\"118.43\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"98.06\" y1=\"99.6\" x2=\"114.41\" y2=\"90.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"243.14\" y1=\"68\" x2=\"222.35\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"222.35\" y1=\"56\" x2=\"207.62\" y2=\"64.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"201.57\" y1=\"75\" x2=\"201.57\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"201.57\" y1=\"92\" x2=\"222.35\" y2=\"104\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"195.52\" y1=\"64.5\" x2=\"180.78\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"180.78\" y1=\"56\" x2=\"160\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"160\" y1=\"68\" x2=\"145.27\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"133.16\" y1=\"59.5\" x2=\"118.43\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"97.65\" y1=\"56\" x2=\"97.65\" y2=\"32\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"97.65\" y1=\"56\" x2=\"76.86\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"76.86\" y1=\"92\" x2=\"97.65\" y2=\"104\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"118.43\" y1=\"68\" x2=\"118.43\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"118.43\" y1=\"92\" x2=\"139.22\" y2=\"104\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"360\" y=\"152\" text-anchor=\"start\" font-size=\"13\" class=\"t-blue\" font-weight=\"600\">amine N: pKaH 7.9, basic</text><line x1=\"322\" y1=\"92\" x2=\"372\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-blue\" stroke-dasharray=\"3 3\"/><text x=\"150\" y=\"25\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\" font-weight=\"600\">amide N: not basic</text><line x1=\"175\" y1=\"30\" x2=\"226\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\" stroke-dasharray=\"3 3\"/></svg>",
  redam: "<svg viewBox=\"0 0 520 150\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,15) scale(1.1)\"><text x=\"68.91\" y=\"30.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"53.57\" y1=\"40.08\" x2=\"68.81\" y2=\"31.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.77\" y1=\"36.96\" x2=\"67.01\" y2=\"28.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.57\" y1=\"38\" x2=\"32.79\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"32.79\" y1=\"26\" x2=\"12\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"12\" y1=\"38\" x2=\"12\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"12\" y1=\"62\" x2=\"32.79\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"32.79\" y1=\"74\" x2=\"53.57\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.57\" y1=\"38\" x2=\"53.57\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(110,45) scale(1.1)\"><text x=\"17.86\" y=\"28.85\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"12.85\" y=\"32.19\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"2.75\" y=\"28.85\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"43.12\" y1=\"12.52\" x2=\"28.97\" y2=\"20.69\" stroke=\"currentColor\" stroke-width=\"1.4\" /></g><g transform=\"translate(205,10) scale(1.1)\"><text x=\"68\" y=\"32.94\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"79.11\" y=\"27.27\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><text x=\"68\" y=\"18.94\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"52.27\" y1=\"42.35\" x2=\"67.9\" y2=\"33.33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.47\" y1=\"39.23\" x2=\"66.1\" y2=\"30.21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"93.84\" y1=\"40.27\" x2=\"79.11\" y2=\"31.77\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.27\" y1=\"40.27\" x2=\"31.49\" y2=\"28.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.49\" y1=\"28.27\" x2=\"10.7\" y2=\"40.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"10.7\" y1=\"40.27\" x2=\"10.7\" y2=\"64.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"10.7\" y1=\"64.27\" x2=\"31.49\" y2=\"76.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.49\" y1=\"76.27\" x2=\"52.27\" y2=\"64.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.27\" y1=\"40.27\" x2=\"52.27\" y2=\"64.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(410,10) scale(1.1)\"><text x=\"63.46\" y=\"32.94\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"63.46\" y=\"18.94\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"89.3\" y1=\"40.27\" x2=\"74.57\" y2=\"31.77\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.46\" y1=\"31.77\" x2=\"47.73\" y2=\"40.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"47.73\" y1=\"40.27\" x2=\"26.94\" y2=\"28.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"26.94\" y1=\"28.27\" x2=\"6.16\" y2=\"40.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"6.16\" y1=\"40.27\" x2=\"6.16\" y2=\"64.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"6.16\" y1=\"64.27\" x2=\"26.94\" y2=\"76.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"26.94\" y1=\"76.27\" x2=\"47.73\" y2=\"64.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"47.73\" y1=\"40.27\" x2=\"47.73\" y2=\"64.27\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"162\" y1=\"72\" x2=\"202\" y2=\"72\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M202,72 L194.9,75.6 M202,72 L194.9,68.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"182\" y=\"64\" text-anchor=\"middle\" font-size=\"12\">H⁺</text><text x=\"182\" y=\"90\" text-anchor=\"middle\" font-size=\"12\">−H₂O</text><line x1=\"330\" y1=\"72\" x2=\"400\" y2=\"72\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M400,72 L392.9,75.6 M400,72 L392.9,68.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"365\" y=\"64\" text-anchor=\"middle\" font-size=\"12\">NaBH₃CN</text><text x=\"365\" y=\"90\" text-anchor=\"middle\" font-size=\"12\">hydride to C=N⁺</text><text x=\"103\" y=\"75\" text-anchor=\"middle\" font-size=\"15\">+</text><text x=\"262\" y=\"142\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">iminium ion</text><text x=\"515\" y=\"142\" text-anchor=\"end\" font-size=\"12\" class=\"t-gray\">N-methylcyclohexanamine</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-amines',
  title: 'Amines',
  summary: 'Nitrogen\'s lone pair runs this lesson: naming and shape of amines, basicity measured by pKaH (and why aryl amines and amides are so much weaker bases), amines as nucleophiles, making amines cleanly by reductive amination, the Gabriel synthesis and reductions, the Hofmann elimination and diazonium salts in brief, and the pH-dependent charge state that decides how amine drugs behave in the body.',
  minutes: 21,
  objectives: [
    'Classify amines as 1°, 2°, 3° or quaternary and name them by IUPAC rules',
    'Use pKaH to compare base strength, and explain why alkyl amines are stronger bases than ammonia, aniline, pyridine and amides',
    'Explain why direct alkylation of amines gives mixtures, and choose reductive amination, the Gabriel synthesis or a reduction instead',
    'Predict the products of a Hofmann elimination and of common diazonium salt reactions',
    'Use the Henderson–Hasselbalch equation to calculate the fraction of an amine that is protonated at a given pH, and connect it to drug absorption',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Amines: structure and names',
      blocks: [
        {
          type: 'p',
          text: 'An amine is ammonia with one or more hydrogens replaced by carbon groups. Count the carbons on **nitrogen** (not on the carbon, as for alcohols): one carbon makes a primary (1°) amine, two a secondary (2°), three a tertiary (3°). A nitrogen with four carbon groups carries a permanent positive charge: a quaternary ammonium ion.',
        },
        {
          type: 'figure',
          svg: FIG.classes,
          alt: 'Six structures. Propan-1-amine (1° amine, NH2 on a three-carbon chain). N-methylethanamine (2° amine, NH between methyl and ethyl). Triethylamine (3° amine, N with three ethyl groups). Tetramethylammonium (4° ammonium ion, N+ with four methyls). Aniline (aryl amine, NH2 on benzene). Pyridine (aromatic heterocycle, N in a six-membered aromatic ring).',
          caption: 'Every one of these has a nitrogen lone pair, except the quaternary ion, whose four bonds have used it up. That lone pair makes amines bases and nucleophiles.',
        },
        {
          type: 'list',
          items: [
            '**IUPAC names** replace the alkane\'s final -e with **-amine**: $\\ce{CH3CH2CH2NH2}$ is propan-1-amine (also written 1-propanamine). Common names list the alkyl groups: propylamine, diethylamine, triethylamine.',
            '**Groups on nitrogen** get an **N-** locant, and the longest chain is the parent: $\\ce{CH3CH2CH2N(CH3)2}$ is N,N-dimethylpropan-1-amine.',
            '**Aryl amines** are named as anilines: 4-methylaniline, N-methylaniline. When a higher-priority group is present, $\\ce{-NH2}$ becomes the prefix **amino-**: 4-aminobenzoic acid.',
          ],
        },
        {
          type: 'p',
          text: 'Nitrogen in an amine is $sp^3$ and pyramidal, with C–N–C angles near 108°. An amine with three different groups on N is technically a [[ochem-chirality-center|chirality center]], but it cannot be resolved: the nitrogen turns inside out like an umbrella in a gale (**nitrogen inversion**, barrier about 25 kJ/mol), billions of times per second. Quaternary ammonium ions have no lone pair, cannot invert, and can be resolved into [[ochem-enantiomer|enantiomers]].',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Fishy, and worse',
          text: 'Small amines smell of fish: trimethylamine is the actual molecule. Decaying flesh produces putrescine, $\\ce{H2N(CH2)4NH2}$, and cadaverine, $\\ce{H2N(CH2)5NH2}$. Squeezing lemon on fish works chemically: the citric acid protonates the amines into odorless, nonvolatile ammonium salts.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Classify and name each amine.',
      template: '$\\ce{(CH3CH2)2NH}$ is a ___ amine called diethylamine. $\\ce{CH3CH2CH2CH2NH2}$ is ___. $\\ce{CH3CH2N(CH3)2}$ is ___.',
      blanks: [{ answers: ['secondary'] }, { answers: ['butan-1-amine'] }, { answers: ['N,N-dimethylethanamine'] }],
      wordBank: ['primary', 'secondary', 'tertiary', 'butan-1-amine', 'butan-2-amine', 'N,N-dimethylethanamine', 'N-ethyldimethanamine'],
      explanation: 'Diethylamine has two carbons attached to N: secondary (2°). $\\ce{CH3CH2CH2CH2NH2}$: a four-carbon chain with $\\ce{NH2}$ on C1, butan-1-amine (butylamine). $\\ce{CH3CH2N(CH3)2}$: the longest chain on N is ethyl, so the parent is ethanamine, with two methyls on nitrogen: N,N-dimethylethanamine, a tertiary amine.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Basicity and pKaH',
      blocks: [
        {
          type: 'p',
          text: 'Chemists rarely quote a base\'s $K_b$. Instead they give the pKa of its **conjugate acid**, written [[ochem-pkah|pKaH]]: for an amine, the pKa of $\\ce{RNH3+}$. One scale then covers acids and bases alike, and the rule is simple: **the higher the pKaH, the stronger the base**, because a high pKaH means the protonated form holds its proton tightly.',
        },
        {
          type: 'table',
          headers: ['Base', 'pKaH', 'Why'],
          rows: [
            ['$\\ce{(CH3)2NH}$, $\\ce{CH3NH2}$, $\\ce{(CH3CH2)3N}$', '10.7, 10.6, 10.8', 'alkyl groups donate electron density and stabilize the cation'],
            ['$\\ce{NH3}$', '9.25', 'the reference'],
            ['pyridine', '5.2', 'lone pair in an $sp^2$ orbital (more s-character, held closer to N)'],
            ['aniline, $\\ce{C6H5NH2}$', '4.6', 'lone pair delocalized into the ring'],
            ['4-nitroaniline', '1.0', 'the nitro group pulls the lone pair further away'],
            ['acetamide, $\\ce{CH3CONH2}$', '≈ −0.5', 'lone pair delocalized into C=O; protonation occurs on O'],
            ['pyrrole', '≈ −4', 'lone pair is part of the aromatic sextet'],
          ],
          caption: 'Fifteen orders of magnitude separate an alkyl amine from an amide. Trimethylamine (9.8) is a weaker base than dimethylamine in water: its cation has only one N–H to hydrogen-bond with water, so solvation partly cancels the extra alkyl donation.',
        },
        {
          type: 'figure',
          svg: FIG.aniline,
          alt: 'Resonance in aniline. Left: aniline with a lone pair on nitrogen; one curved arrow from the lone pair to the N–C bond, another from a ring double bond to the ortho carbon. Right: the resonance form with C=N+H2 and a negative charge and lone pair on the ortho carbon.',
          caption: 'In aniline the nitrogen lone pair is partly shared with the ring (forms like this put negative charge at the ortho and para carbons, which is also why $\\ce{-NH2}$ is a strong ortho/para director). Protonating N would destroy that delocalization, so aniline resists it.',
        },
        {
          type: 'derivation',
          title: 'Does acetic acid protonate methylamine?',
          steps: [
            { tex: '\\ce{CH3COOH + CH3NH2 <=> CH3COO- + CH3NH3+}', why: 'Acid on the left: acetic acid (pKa 4.76). Acid on the right: methylammonium (pKa 10.64, which is the pKaH of methylamine).' },
            { tex: 'K = 10^{\\,10.64 - 4.76} = 10^{5.88}', why: 'Equilibrium favors the weaker acid; $K = 10^{\\text{p}K_a(\\text{right}) - \\text{p}K_a(\\text{left})}$.' },
            { tex: 'K \\approx 7.6 \\times 10^{5}', why: 'Essentially complete: mixing them gives methylammonium acetate, a salt. This is why acids plus amines give salts, not amides (last unit).' },
          ],
          result: 'Using pKaH puts amine basicity on the same pKa table as every acid you know, so any acid–base equilibrium is a subtraction.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Same lone pair, different availability',
          text: 'Basicity is the availability of the nitrogen lone pair to a proton. Anything that delocalizes it (a ring, a carbonyl), holds it closer to the nucleus (more s-character), or makes it part of an aromatic sextet lowers the pKaH. Anything that pushes electron density onto N (alkyl groups) or stabilizes the cation raises it. These are the same factors from the acidity unit, run in reverse.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Which compound is the strongest base?',
      options: [
        { text: 'Aniline, $\\ce{C6H5NH2}$', why: 'Its lone pair is delocalized into the benzene ring; pKaH 4.6.' },
        { text: 'Acetamide, $\\ce{CH3CONH2}$', why: 'The nitrogen lone pair is tied up in amide resonance with the C=O. Amides are essentially neutral (pKaH about −0.5, and protonation happens on oxygen).' },
        { text: 'Cyclohexylamine, $\\ce{C6H11NH2}$', correct: true, why: 'An ordinary alkyl amine: an $sp^3$ nitrogen whose lone pair is localized, with an electron-donating alkyl group. pKaH 10.6, a million times more basic than aniline.' },
        { text: 'Pyrrole', why: 'Pyrrole\'s nitrogen lone pair is one of the six π electrons of its aromatic ring. Protonating N would destroy the aromaticity, so pyrrole is barely basic at all.' },
      ],
      explanation: 'Compare lone-pair availability. Cyclohexylamine and aniline differ only in a saturated versus an aromatic ring on N, yet their pKaH values differ by 6 units: the aromatic ring delocalizes the lone pair. Amides and pyrrole tie the lone pair up even more completely.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Amines as nucleophiles',
      blocks: [
        {
          type: 'p',
          text: 'The lone pair that grabs protons also attacks carbon. You have already used this three times: amines add to aldehydes and ketones to form **imines** (the aldehyde unit), they attack acid chlorides and anhydrides to form **amides** (last unit), and they do [[ochem-sn2|SN2]] reactions on alkyl halides. That last reaction looks like the obvious way to make amines, and it has a serious flaw.',
        },
        {
          type: 'derivation',
          title: 'Why ammonia + bromoethane gives a mess',
          steps: [
            { tex: '\\ce{NH3 + CH3CH2Br -> CH3CH2NH3+ Br-}', why: 'SN2: nitrogen\'s lone pair displaces bromide. Excess ammonia removes the proton, giving ethylamine.' },
            { tex: '\\ce{CH3CH2NH2 + CH3CH2Br -> (CH3CH2)2NH2+ Br-}', why: 'The product, ethylamine, is **more** nucleophilic than ammonia (the ethyl group donates electron density), so it competes for the remaining bromoethane.' },
            { tex: '\\ce{-> (CH3CH2)3N -> (CH3CH2)4N+ Br-}', why: 'And again: the diethylamine and triethylamine formed react in turn, ending at the quaternary salt, which has no lone pair left.' },
          ],
          result: 'Direct alkylation gives a mixture of 1°, 2°, 3° and 4° products. It is useful only for making quaternary ammonium salts (with excess alkyl halide) or when a huge excess of ammonia is acceptable.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Acylation stops cleanly',
          text: 'Acylation does not have this problem: once an amine becomes an amide, its lone pair is delocalized into the C=O and it no longer reacts. That is also a protecting strategy: turn a reactive $\\ce{-NH2}$ into an amide (acetanilide from aniline), do other chemistry, then hydrolyze the amide back.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Making amines cleanly',
      blocks: [
        {
          type: 'p',
          text: 'Three reliable routes avoid overalkylation by forming the C–N bond in a way that can only happen once, or by reducing a nitrogen compound that already has the right number of carbons.',
        },
        {
          type: 'heading',
          text: '1. Reductive amination',
        },
        {
          type: 'p',
          text: 'Combine an aldehyde or ketone with an amine (or ammonia) under mildly acidic conditions: they form an imine, which is protonated to an **iminium ion**. Sodium cyanoborohydride, $\\ce{NaBH3CN}$, is a hydride donor weak enough to ignore the ketone but strong enough to reduce the more electrophilic $\\ce{C=N+}$. The result is [[ochem-reductive-amination|reductive amination]]: the C=O becomes a C–N bond, and one new alkyl group is added to nitrogen.',
        },
        {
          type: 'figure',
          svg: FIG.redam,
          alt: 'Cyclohexanone plus methylamine with H+ and loss of water gives an iminium ion (C=N+ with H and methyl on nitrogen). NaBH3CN delivers hydride to the C=N+ carbon, giving N-methylcyclohexanamine.',
          caption: 'Each reductive amination adds exactly one carbon group to nitrogen. Run it on a primary amine and you get a secondary amine; on a secondary amine, a tertiary amine. Many drugs are made this way, and so are amino acids in your body (transamination uses an imine too).',
        },
        {
          type: 'heading',
          text: '2. Gabriel synthesis (primary amines)',
        },
        {
          type: 'figure',
          svg: FIG.gabriel,
          alt: 'Phthalimide, an N–H flanked by two C=O groups on a benzene-fused five-membered ring, with KOH (pKa 8.3) gives the phthalimide anion. It does SN2 on benzyl bromide to give N-benzylphthalimide. Hydrazine (or acid hydrolysis) releases benzylamine.',
          caption: 'The [[ochem-gabriel-synthesis|Gabriel synthesis]] uses phthalimide as a protected $\\ce{NH2-}$. Its N–H is acidic (two carbonyls, pKa 8.3), so its anion is easy to make; after one SN2, nitrogen has no N–H left, so it cannot be alkylated twice. Hydrazine then pulls the nitrogen free as the primary amine.',
        },
        {
          type: 'heading',
          text: '3. Reduction of nitrogen compounds',
        },
        {
          type: 'list',
          items: [
            '**Amides** + $\\ce{LiAlH4}$ → amines with the same carbon skeleton (the C=O becomes $\\ce{CH2}$). Acylate an amine, then reduce: a clean, one-group-at-a-time alkylation.',
            '**Nitriles** + $\\ce{LiAlH4}$ (or $\\ce{H2}$, Ni) → primary amines $\\ce{RCH2NH2}$. Since nitriles come from $\\ce{CN-}$ + an alkyl halide, this adds one carbon and a nitrogen.',
            '**Nitro groups** on rings + $\\ce{H2}$, Pd (or Fe, HCl) → anilines. Nitration followed by reduction is the standard way to put $\\ce{NH2}$ on benzene.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Which route gives N-ethylcyclohexanamine, $\\ce{C6H11NHCH2CH3}$, as a single main product?',
      options: [
        { text: 'Cyclohexanone + ethylamine, mild acid, then $\\ce{NaBH3CN}$', correct: true, why: 'Reductive amination: the ketone and amine form an iminium ion, which is reduced. Exactly one cyclohexyl group ends up on the ethylamine nitrogen.' },
        { text: 'Cyclohexylamine + excess bromoethane', why: 'The secondary amine product is more nucleophilic than cyclohexylamine and reacts again; with excess bromoethane you head toward the tertiary amine and the quaternary salt.' },
        { text: 'Cyclohexanol + ethylamine, heat', why: 'Hydroxide is a poor leaving group, so no substitution happens. Alcohols must be activated (tosylate, halide) before SN2, and then overalkylation returns.' },
        { text: 'Bromocyclohexane + ethylamine', why: 'A secondary halide with a basic amine gives a lot of E2 (cyclohexene), and any product formed can be alkylated again.' },
      ],
      explanation: 'When you need one specific alkyl group on nitrogen, think reductive amination: carbonyl compound + amine + $\\ce{NaBH3CN}$. Disconnect the target at a C–N bond and ask which carbon could have been a C=O. (Acetaldehyde + cyclohexylamine would also work, by disconnecting the other C–N bond.)',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Hofmann elimination and diazonium salts',
      blocks: [
        {
          type: 'p',
          text: '**Hofmann elimination.** An $\\ce{-NH2}$ group is a hopeless leaving group, but $\\ce{-N(CH3)3+}$ leaves well. Treat an amine with excess iodomethane (exhaustive methylation), swap iodide for hydroxide with silver oxide, and heat: an E2 elimination gives an alkene and trimethylamine. The [[ochem-hofmann-elimination|Hofmann elimination]] is unusual because it gives the **less** substituted alkene, the [[ochem-hofmann-product|Hofmann product]], not the Zaitsev product.',
        },
        {
          type: 'figure',
          svg: FIG.hofmann,
          alt: '2-Butanamine with excess CH3I gives sec-butyltrimethylammonium iodide. With Ag2O, water and heat, it gives 1-butene as the major product (95%) and trans-2-butene as the minor product.',
          caption: 'The bulky trimethylammonium group and the poor leaving-group ability make the transition state carbanion-like, so the base removes the most accessible, least hindered (and most acidic) β-hydrogen: the one on the $\\ce{CH3}$.',
        },
        {
          type: 'p',
          text: '**Diazonium salts.** Primary aryl amines react with nitrous acid (from $\\ce{NaNO2}$ + HCl, kept at 0–5 °C) to give [[ochem-diazonium-salt|arenediazonium salts]], $\\ce{ArN2+}$. Their leaving group is nitrogen gas, the most stable molecule imaginable, so the $\\ce{N2+}$ can be replaced by groups that electrophilic aromatic substitution cannot install directly.',
        },
        {
          type: 'figure',
          svg: FIG.diazo,
          alt: 'Aniline with NaNO2 and HCl at 0 to 5 °C gives the benzenediazonium ion. Lines fan out to products: CuCl gives ArCl, CuBr gives ArBr, CuCN gives ArCN, warm water gives a phenol, HBF4 and heat give ArF, H3PO2 gives ArH, and coupling with N,N-dimethylaniline gives an azo dye Ar–N=N–Ar′.',
          caption: 'The copper reactions are Sandmeyer reactions. Combined with nitration and reduction, the diazonium route lets you put almost any group anywhere on a ring, including meta to an ortho/para director, and then remove the nitrogen ($\\ce{H3PO2}$) when it has done its directing job. Diazonium salts are kept cold and in solution; they are not isolated dry.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Azo dyes',
          text: 'A diazonium ion is also a weak electrophile that attacks electron-rich rings (phenols, anilines), forming an $\\ce{Ar-N=N-Ar\'}$ link. The long conjugated system absorbs visible light, so azo compounds are intensely colored: methyl orange (the pH indicator), many food colors and textile dyes. The first sulfa drug, Prontosil (1932), was an azo dye whose antibacterial activity came from an amine released in the body.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'The Hofmann elimination of sec-butyltrimethylammonium hydroxide gives mainly 2-butene, the more substituted (Zaitsev) alkene.',
      answer: false,
      explanation: 'It gives mainly 1-butene (about 95%), the **less** substituted alkene. The large $\\ce{-N(CH3)3+}$ leaving group crowds the internal β-hydrogens, and its poor leaving ability gives the transition state carbanion character, which favors removing a proton from the primary carbon. This "Hofmann rule" contrasts with E2 reactions of alkyl halides with small bases, which follow Zaitsev.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Which reagent converts benzenediazonium chloride, $\\ce{C6H5N2+ Cl-}$, into bromobenzene?',
      options: [
        { text: '$\\ce{CuBr}$', correct: true, why: 'A Sandmeyer reaction: copper(I) bromide transfers bromide to the ring as $\\ce{N2}$ leaves.' },
        { text: '$\\ce{Br2}$, $\\ce{FeBr3}$', why: 'That is electrophilic aromatic bromination of a ring C–H. The diazonium group would not be replaced, and the positively charged ring is strongly deactivated anyway.' },
        { text: '$\\ce{H3PO2}$', why: 'Hypophosphorous acid replaces $\\ce{N2+}$ with H, giving benzene.' },
        { text: '$\\ce{HBr}$, $\\ce{H2O2}$, light', why: 'Those are conditions for radical addition to alkenes, not for substitution on an aromatic ring.' },
      ],
      explanation: 'Diazonium chemistry: $\\ce{CuCl}$, $\\ce{CuBr}$, $\\ce{CuCN}$ (Sandmeyer) give ArCl, ArBr, ArCN; warm water gives ArOH; $\\ce{HBF4}$/heat gives ArF; $\\ce{H3PO2}$ gives ArH. In every case $\\ce{N2}$ gas is the leaving group.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Charge state, pH and drugs',
      blocks: [
        {
          type: 'p',
          text: 'Most drugs contain an amine, and its pKaH controls where the drug can go. The neutral amine is greasy enough to cross cell membranes; the protonated ammonium ion dissolves in water (blood plasma, the inside of cells) but crosses membranes poorly. The [[gchem-henderson-hasselbalch|Henderson–Hasselbalch equation]] gives the split at any pH:',
        },
        {
          type: 'math',
          tex: '\\text{pH} = \\text{p}K_{aH} + \\log\\frac{[\\ce{RNH2}]}{[\\ce{RNH3+}]} \\quad\\implies\\quad f_{\\ce{RNH3+}} = \\frac{1}{1 + 10^{\\,\\text{pH} - \\text{p}K_{aH}}}',
          caption: 'Below the pKaH the amine is mostly protonated; above it, mostly neutral. Note the sign flip compared with a carboxylic acid: the acid is ionized at high pH, the amine at low pH.',
        },
        {
          type: 'graph',
          x: [0, 14],
          y: [-0.05, 1.1],
          xStep: 1,
          yStep: 0.25,
          functions: [
            { expr: '1/(1 + 10^(x - k))', label: 'fraction protonated, $\\ce{RNH3+}$', color: 'blue' },
            { expr: '1/(1 + 10^(k - x))', label: 'fraction neutral, $\\ce{RNH2}$', color: 'red', dashed: true },
          ],
          vlines: [{ x: 2, label: 'stomach', color: 'orange' }, { x: 7.4, label: 'blood', color: 'teal' }],
          points: [{ x: 'k', y: 0.5, label: 'pH = pKaH', color: 'purple' }],
          sliders: [{ name: 'k', min: 3, max: 12, step: 0.1, value: 7.9, label: 'pKaH of the amine' }],
          readouts: [
            { label: 'fraction neutral at pH 7.4 $=$', expr: '1/(1 + 10^(k - 7.4))', digits: 3 },
            { label: 'fraction neutral at pH 6.5 $=$', expr: '1/(1 + 10^(k - 6.5))', digits: 3 },
          ],
          caption: 'Fraction of an amine in each form versus pH. The default, pKaH 7.9, is lidocaine. Try 10.6 (a simple alkyl amine): at pH 7.4 only about 0.06% is neutral. Try 4.6 (aniline): it is almost entirely neutral in blood.',
        },
        {
          type: 'figure',
          svg: FIG.lidocaine,
          alt: 'Skeletal structure of lidocaine: a 2,6-dimethylphenyl ring attached to an amide NH, the amide C=O, a CH2, and a diethylamino nitrogen. The amide N is labeled not basic; the tertiary amine N is labeled pKaH 7.9, basic.',
          caption: 'Lidocaine has two nitrogens, but only one is basic: the amide nitrogen\'s lone pair is tied up with the C=O. The amine nitrogen (pKaH 7.9) is partly neutral at pH 7.4, which lets the drug slip into nerve cells, where it blocks sodium channels in its protonated form.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why local anesthetics fail in infected tissue',
          text: 'Inflamed or infected tissue is acidic (pH as low as 6.5 or below). There, even less lidocaine is neutral, so less of it crosses into the nerve, and dentists find that a numbing injection into an abscess often works poorly. The same logic explains why amine drugs are sold as hydrochloride salts: the $\\ce{RNH3+ Cl-}$ form is a stable, water-soluble solid, and the body\'s buffers decide the charge state after it dissolves.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Lidocaine has pKaH 7.9. What **percentage** of it is in the neutral (free base) form at blood pH 7.4? Give one decimal place.',
      hint: 'Fraction neutral $= \\dfrac{1}{1 + 10^{\\,\\text{p}K_{aH} - \\text{pH}}}$.',
      label: 'neutral $=$',
      unit: '%',
      answer: '100/(1 + 10^(7.9 - 7.4))',
      answerTex: '24.0\\%',
      tolerance: 0.1,
      explanation: '$10^{7.9 - 7.4} = 10^{0.5} = 3.16$, so the ratio $[\\ce{RNH3+}]/[\\ce{RNH2}] = 3.16$ and the neutral fraction is $\\dfrac{1}{1 + 3.16} = 0.240$, or $24.0\\%$. At pH 6.5 (inflamed tissue) the same formula gives only $3.8\\%$: six times less of the membrane-crossing form.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'An amine has pKaH 10.6. At what pH is it exactly **99%** protonated? Give two decimal places.',
      hint: 'At 99% protonated, $[\\ce{RNH2}]/[\\ce{RNH3+}] = 1/99$. Put that into $\\text{pH} = \\text{p}K_{aH} + \\log([\\ce{RNH2}]/[\\ce{RNH3+}])$.',
      label: 'pH $=$',
      answer: '10.6 - log(99)',
      answerTex: '8.60',
      tolerance: 0.005,
      explanation: '$\\text{pH} = 10.6 + \\log\\frac{1}{99} = 10.6 - 1.996 = 8.60$. A handy rule: 99% protonated sits about 2 units below the pKaH (and 99% neutral about 2 units above). So at pH 7.4 a typical alkyl amine is far more than 99% protonated, which is why most amine drugs circulate as cations.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student explains why aniline (pKaH 4.6) is a much weaker base than cyclohexylamine (pKaH 10.6). Tap the first incorrect line.',
      lines: [
        'Both bases accept a proton on nitrogen, using the nitrogen lone pair.',
        'In cyclohexylamine the lone pair sits in an $sp^3$ orbital and is not delocalized.',
        'In aniline the lone pair overlaps with the ring π system, so it is partly delocalized onto the ring carbons.',
        'Protonation of aniline increases this delocalization, which stabilizes the anilinium ion and makes aniline the weaker base.',
      ],
      errorLines: [4],
      explanation: 'Protonation **removes** the delocalization: once the lone pair is used for the N–H bond, it can no longer overlap with the ring. The neutral aniline is stabilized by resonance that the anilinium ion lacks, so protonation is less favorable and aniline is the weaker base (by about $10^6$). The correct comparison is always: stabilize the base, or destabilize the conjugate acid, and the base gets weaker.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Order the steps of a Gabriel synthesis of hexan-1-amine.',
      lines: [
        'Deprotonate phthalimide with KOH to form the phthalimide anion.',
        'Add 1-bromohexane; the nitrogen anion displaces bromide by SN2.',
        'The N-hexylphthalimide has no N–H, so no second alkylation can occur.',
        'Heat with hydrazine to release hexan-1-amine and phthalhydrazide.',
      ],
      explanation: 'Acid–base, then SN2, then deprotection. The phthalimide nitrogen is acidic (pKa 8.3) because two carbonyls stabilize its anion, and those same carbonyls make it a protected nitrogen that can be alkylated only once. Note the substrate rule: SN2 means primary (or methyl, allylic, benzylic) halides only.',
    },
  ],
  takeaways: [
    'Amines are 1°, 2° or 3° by the number of carbons on N; four carbons give a quaternary ammonium ion. IUPAC: alkan-x-amine with N- locants; aniline for ArNH₂.',
    'pKaH (the pKa of $\\ce{RNH3+}$) measures base strength: alkyl amines about 10–11, ammonia 9.3, pyridine 5.2, aniline 4.6, amides about −0.5. Delocalizing or tightening the lone pair weakens the base.',
    'Direct SN2 alkylation of amines overalkylates; use reductive amination (C=O + amine + NaBH₃CN), the Gabriel synthesis (primary amines), or reduction of amides, nitriles and nitro groups.',
    'Hofmann elimination (excess CH₃I, Ag₂O, heat) gives the less substituted alkene; arenediazonium salts (NaNO₂, HCl, 0 °C) are replaced by Cl, Br, CN (Cu salts), OH, F or H, or couple to azo dyes.',
    'Fraction protonated $= 1/(1 + 10^{\\text{pH} - \\text{p}K_{aH}})$: amines are cations below their pKaH and neutral above it, which controls how amine drugs cross membranes.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 24, Amines and Heterocycles: naming, basicity, synthesis (including the Gabriel and reductive amination), Hofmann elimination and arenediazonium salts.',
    },
    {
      title: 'Wikipedia — Reductive amination',
      url: 'https://en.wikipedia.org/wiki/Reductive_amination',
      source: 'wikipedia',
      note: 'The reducing agents used, why NaBH₃CN is selective for iminium ions, and the biological version.',
    },
    {
      title: 'Wikipedia — Lidocaine',
      url: 'https://en.wikipedia.org/wiki/Lidocaine',
      source: 'wikipedia',
      note: 'Mechanism of action on sodium channels and the role of pKa in onset and in acidic tissue.',
    },
    {
      title: 'LibreTexts Chemistry',
      url: 'https://chem.libretexts.org/',
      source: 'libretexts',
      note: 'Search "basicity of amines" for worked comparisons of alkyl amines, anilines, pyridine and amides.',
    },
  ],
};
