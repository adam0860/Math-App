import type { Lesson } from '../../types';

// <figures> skeletal structures drawn from SMILES with the molecule kit; mechanisms checked by rendering
const FIG = {
  alkyl: "<svg viewBox=\"0 0 520 200\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,45) scale(1.15)\"><text x=\"69.21\" y=\"32.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"53.87\" y1=\"42.25\" x2=\"69.11\" y2=\"33.45\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.07\" y1=\"39.13\" x2=\"67.31\" y2=\"30.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.87\" y1=\"40.17\" x2=\"33.09\" y2=\"28.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.09\" y1=\"28.17\" x2=\"12.3\" y2=\"40.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"12.3\" y1=\"40.17\" x2=\"12.3\" y2=\"64.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"12.3\" y1=\"64.17\" x2=\"33.09\" y2=\"76.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.09\" y1=\"76.17\" x2=\"53.87\" y2=\"64.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.87\" y1=\"40.17\" x2=\"53.87\" y2=\"64.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(150,45) scale(1.45)\"><text x=\"74.01\" y=\"28.94\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"85.9\" y=\"23.28\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><line x1=\"58.67\" y1=\"36.28\" x2=\"37.88\" y2=\"24.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"54.65\" y1=\"38.11\" x2=\"38.3\" y2=\"28.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.01\" y1=\"28\" x2=\"58.67\" y2=\"36.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"37.88\" y1=\"24.28\" x2=\"17.1\" y2=\"36.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.1\" y1=\"36.28\" x2=\"17.1\" y2=\"60.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.1\" y1=\"60.28\" x2=\"37.88\" y2=\"72.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"37.88\" y1=\"72.28\" x2=\"58.67\" y2=\"60.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"58.67\" y1=\"36.28\" x2=\"58.67\" y2=\"60.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(215,0) scale(1.4)\"><text x=\"40.59\" y=\"16.52\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><line x1=\"39.59\" y1=\"13.56\" x2=\"21.75\" y2=\"23.86\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(400,45) scale(1.2)\"><text x=\"73.65\" y=\"82.83\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"56.51\" y1=\"67.21\" x2=\"71.75\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"58.31\" y1=\"64.09\" x2=\"73.55\" y2=\"72.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.09\" y1=\"30.17\" x2=\"58.31\" y2=\"42.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"58.31\" y1=\"42.17\" x2=\"37.52\" y2=\"30.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"37.52\" y1=\"30.17\" x2=\"16.74\" y2=\"42.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"16.74\" y1=\"42.17\" x2=\"16.74\" y2=\"66.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"16.74\" y1=\"66.17\" x2=\"37.52\" y2=\"78.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"37.52\" y1=\"78.17\" x2=\"58.31\" y2=\"66.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"58.31\" y1=\"42.17\" x2=\"58.31\" y2=\"66.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"100\" y1=\"115\" x2=\"150\" y2=\"115\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M150,115 L142.9,118.6 M150,115 L142.9,111.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"125\" y=\"107\" text-anchor=\"middle\" font-size=\"12\">LDA</text><text x=\"125\" y=\"133\" text-anchor=\"middle\" font-size=\"12\">−78 °C</text><line x1=\"330\" y1=\"115\" x2=\"395\" y2=\"115\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M395,115 L387.9,118.6 M395,115 L387.9,111.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"362.5\" y=\"107\" text-anchor=\"middle\" font-size=\"12\">+ I⁻</text><text x=\"362.5\" y=\"133\" text-anchor=\"middle\" font-size=\"12\">SN2</text><path d=\"M262,100 Q250.2,103.2 251,91\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M251,91 L254.1,98.4 L246.9,97.9 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M217,86 Q218.3,57.0 241,39\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M241,39 L237.7,46.3 L233.2,40.6 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M260,24 Q267.7,7.5 285,13\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M285,13 L277.1,14.3 L279.3,7.4 Z\" fill=\"currentColor\" class=\"f-red\"/><circle cx=\"268.4\" cy=\"63.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"262.0\" cy=\"63.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"282.0\" cy=\"89.7\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"284.1\" cy=\"83.7\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"262.0\" cy=\"97.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"268.4\" cy=\"97.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"300\" y=\"75\" text-anchor=\"middle\" font-size=\"13\">Li⁺</text><text x=\"225\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">lithium enolate</text><text x=\"457\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2-methylcyclohexanone</text></svg>",
  enolate_res: "<svg viewBox=\"0 0 520 175\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(20,10) scale(1.9)\"><text x=\"44.55\" y=\"23.51\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"24.16\" y=\"59.51\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">C</text><text x=\"35.27\" y=\"53.84\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\">−</text><line x1=\"51.8\" y1=\"43.88\" x2=\"51.8\" y2=\"25.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.2\" y1=\"43.88\" x2=\"48.2\" y2=\"25.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.78\" y1=\"54.84\" x2=\"50\" y2=\"42.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50\" y1=\"42.84\" x2=\"39.27\" y2=\"49.04\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(310,10) scale(1.9)\"><text x=\"44.55\" y=\"23.51\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"56.45\" y=\"17.84\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><line x1=\"50\" y1=\"42.84\" x2=\"29.22\" y2=\"54.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.98\" y1=\"41\" x2=\"27.42\" y2=\"51.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.78\" y1=\"54.84\" x2=\"50\" y2=\"42.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50\" y1=\"42.84\" x2=\"50\" y2=\"25.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"215\" y1=\"85\" x2=\"300\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M300,85 L292.9,88.6 M300,85 L292.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M215,85 L222.1,81.4 M215,85 L222.1,88.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M82,133 Q101.7,126.3 97,106\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M97,106 L102.2,112.1 L95.1,113.8 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M121,72 Q139.7,65.9 128,50\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M128,50 L135.2,53.6 L129.3,57.9 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"62\" y=\"124\" text-anchor=\"end\" font-size=\"24\">H₂</text><circle cx=\"72.3\" cy=\"132.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"78.7\" cy=\"132.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"101.9\" cy=\"34.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"98.7\" cy=\"40.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"131.3\" cy=\"40.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"128.1\" cy=\"34.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"388.0\" cy=\"42.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"388.0\" cy=\"49.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"408.2\" cy=\"28.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"401.8\" cy=\"28.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"425.0\" cy=\"49.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"425.0\" cy=\"42.6\" r=\"1.8\" fill=\"currentColor\"/><text x=\"95\" y=\"170\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">carbanion form</text><text x=\"405\" y=\"170\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">enolate form: charge on O (major)</text></svg>",
  haloform: "<svg viewBox=\"0 0 520 400\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,10) scale(1.1)\"><text x=\"74.43\" y=\"18.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"81.68\" y1=\"39.04\" x2=\"81.68\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.08\" y1=\"39.04\" x2=\"78.08\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.09\" y1=\"50\" x2=\"38.31\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.07\" y1=\"51.84\" x2=\"38.72\" y2=\"42.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.52\" y1=\"50\" x2=\"17.52\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"21.12\" y1=\"52.56\" x2=\"21.12\" y2=\"71.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.31\" y1=\"86\" x2=\"59.09\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.72\" y1=\"81.6\" x2=\"55.07\" y2=\"72.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"100.66\" y1=\"50\" x2=\"79.88\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.88\" y1=\"38\" x2=\"59.09\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.31\" y1=\"38\" x2=\"17.52\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.52\" y1=\"74\" x2=\"38.31\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.09\" y1=\"50\" x2=\"59.09\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(330,0) scale(1.1)\"><text x=\"113.96\" y=\"40.7\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"122.74\" y=\"73.48\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"89.96\" y=\"82.27\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"77.67\" y=\"25.48\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"84.92\" y1=\"45.86\" x2=\"84.92\" y2=\"27.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"81.32\" y1=\"45.86\" x2=\"81.32\" y2=\"27.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.33\" y1=\"56.82\" x2=\"41.55\" y2=\"44.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"58.32\" y1=\"58.66\" x2=\"41.97\" y2=\"49.22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"20.77\" y1=\"56.82\" x2=\"20.77\" y2=\"80.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"24.37\" y1=\"59.38\" x2=\"24.37\" y2=\"78.26\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.55\" y1=\"92.82\" x2=\"62.33\" y2=\"80.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.97\" y1=\"88.42\" x2=\"58.32\" y2=\"78.98\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"112.96\" y1=\"41.14\" x2=\"103.9\" y2=\"56.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"103.9\" y1=\"56.82\" x2=\"121.74\" y2=\"67.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"103.9\" y1=\"56.82\" x2=\"94.85\" y2=\"72.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"103.9\" y1=\"56.82\" x2=\"83.12\" y2=\"44.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"83.12\" y1=\"44.82\" x2=\"62.33\" y2=\"56.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.55\" y1=\"44.82\" x2=\"20.77\" y2=\"56.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"20.77\" y1=\"80.82\" x2=\"41.55\" y2=\"92.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.33\" y1=\"56.82\" x2=\"62.33\" y2=\"80.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(0,135) scale(1.5)\"><text x=\"107.9\" y=\"35.61\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"116.68\" y=\"68.39\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"83.9\" y=\"77.18\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"83.61\" y=\"23.61\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"95.51\" y=\"17.94\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"59.61\" y=\"23.61\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"49.5\" y=\"23.61\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"56.27\" y1=\"51.73\" x2=\"35.49\" y2=\"39.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.26\" y1=\"53.56\" x2=\"35.91\" y2=\"44.12\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"14.7\" y1=\"51.73\" x2=\"14.7\" y2=\"75.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"18.3\" y1=\"54.29\" x2=\"18.3\" y2=\"73.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.49\" y1=\"87.73\" x2=\"56.27\" y2=\"75.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.91\" y1=\"83.33\" x2=\"52.26\" y2=\"73.89\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"106.9\" y1=\"36.04\" x2=\"97.84\" y2=\"51.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"97.84\" y1=\"51.73\" x2=\"115.68\" y2=\"62.02\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"97.84\" y1=\"51.73\" x2=\"88.79\" y2=\"67.41\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"97.84\" y1=\"51.73\" x2=\"77.06\" y2=\"39.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"77.06\" y1=\"39.73\" x2=\"85.02\" y2=\"25.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"77.06\" y1=\"39.73\" x2=\"69.1\" y2=\"25.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"77.06\" y1=\"39.73\" x2=\"56.27\" y2=\"51.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.49\" y1=\"39.73\" x2=\"14.7\" y2=\"51.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"14.7\" y1=\"75.73\" x2=\"35.49\" y2=\"87.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.27\" y1=\"51.73\" x2=\"56.27\" y2=\"75.73\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(245,145) scale(1.05)\"><text x=\"84.99\" y=\"60.55\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"95.88\" y=\"60.55\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"64.2\" y=\"24.55\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"71.45\" y1=\"44.92\" x2=\"71.45\" y2=\"26.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"67.85\" y1=\"44.92\" x2=\"67.85\" y2=\"26.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.87\" y1=\"55.88\" x2=\"28.08\" y2=\"43.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.85\" y1=\"57.72\" x2=\"28.5\" y2=\"48.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"7.3\" y1=\"55.88\" x2=\"7.3\" y2=\"79.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"10.9\" y1=\"58.44\" x2=\"10.9\" y2=\"77.32\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.08\" y1=\"91.88\" x2=\"48.87\" y2=\"79.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.5\" y1=\"87.48\" x2=\"44.85\" y2=\"78.04\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"83.99\" y1=\"52.16\" x2=\"69.65\" y2=\"43.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"69.65\" y1=\"43.88\" x2=\"48.87\" y2=\"55.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.08\" y1=\"43.88\" x2=\"7.3\" y2=\"55.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"7.3\" y1=\"79.88\" x2=\"28.08\" y2=\"91.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.87\" y1=\"55.88\" x2=\"48.87\" y2=\"79.88\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(375,155) scale(1.05)\"><text x=\"28.28\" y=\"53.52\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">C</text><text x=\"39.39\" y=\"47.86\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\">−</text><text x=\"52.17\" y=\"65.52\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"31.39\" y=\"29.52\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"10.6\" y=\"65.52\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><line x1=\"39.39\" y1=\"52.35\" x2=\"51.17\" y2=\"59.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.33\" y1=\"41.86\" x2=\"33.33\" y2=\"31.86\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"27.28\" y1=\"52.35\" x2=\"15.49\" y2=\"59.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(150,295)\"><text x=\"96.12\" y=\"52.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"108.02\" y=\"46.5\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"75.34\" y=\"16.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"82.58\" y1=\"36.54\" x2=\"82.58\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.98\" y1=\"36.54\" x2=\"78.98\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60\" y1=\"47.5\" x2=\"39.22\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.98\" y1=\"49.34\" x2=\"39.63\" y2=\"39.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"18.43\" y1=\"47.5\" x2=\"18.43\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.03\" y1=\"50.06\" x2=\"22.03\" y2=\"68.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.22\" y1=\"83.5\" x2=\"60\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.63\" y1=\"79.1\" x2=\"55.98\" y2=\"69.66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"95.12\" y1=\"43.78\" x2=\"80.78\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80.78\" y1=\"35.5\" x2=\"60\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.22\" y1=\"35.5\" x2=\"18.43\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"18.43\" y1=\"71.5\" x2=\"39.22\" y2=\"83.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60\" y1=\"47.5\" x2=\"60\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(300,300)\"><text x=\"58.84\" y=\"62.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"38.05\" y=\"26.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><text x=\"17.27\" y=\"62.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">I</text><line x1=\"57.84\" y1=\"56.3\" x2=\"40\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40\" y1=\"46\" x2=\"40\" y2=\"29\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40\" y1=\"46\" x2=\"22.16\" y2=\"56.3\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"135\" y1=\"65\" x2=\"325\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M325,65 L317.9,68.6 M325,65 L317.9,61.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"230\" y=\"57\" text-anchor=\"middle\" font-size=\"12\">3 I₂, 3 NaOH</text><text x=\"230\" y=\"83\" text-anchor=\"middle\" font-size=\"12\">three α-iodinations (each faster)</text><line x1=\"200\" y1=\"210\" x2=\"245\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M245,210 L237.9,213.6 M245,210 L237.9,206.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"222.5\" y=\"202\" text-anchor=\"middle\" font-size=\"12\">eliminate</text><line x1=\"70\" y1=\"340\" x2=\"145\" y2=\"340\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M145,340 L137.9,343.6 M145,340 L137.9,336.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"107.5\" y=\"332\" text-anchor=\"middle\" font-size=\"12\">proton transfer</text><path d=\"M152,168 Q134.0,163.9 127,181\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M127,181 L126.3,173.0 L133.0,175.8 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M127,208 Q130.1,221.9 144,219\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M144,219 L137.8,224.0 L136.3,216.9 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M409,225 Q376.1,239.3 354,211\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M354,211 L361.2,214.4 L355.5,218.9 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M349,199 Q338.3,203.7 339,192\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M339,192 L342.2,199.3 L334.9,198.9 Z\" fill=\"currentColor\" class=\"f-red\"/><circle cx=\"150.6\" cy=\"166.6\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"150.6\" cy=\"160.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"136.8\" cy=\"146.4\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"130.4\" cy=\"146.4\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"121.5\" cy=\"151.0\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"117.8\" cy=\"156.3\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"406.8\" cy=\"221.3\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"413.2\" cy=\"221.3\" r=\"1.8\" fill=\"currentColor\"/><text x=\"80\" y=\"132\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">after OH⁻ adds to the C=O:</text><text x=\"285\" y=\"340\" text-anchor=\"middle\" font-size=\"16\">+</text><text x=\"440\" y=\"335\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-orange\" font-weight=\"600\">iodoform, CHI₃</text><text x=\"440\" y=\"351\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">yellow precipitate</text><text x=\"372\" y=\"202\" text-anchor=\"middle\" font-size=\"16\">+</text></svg>",
  kt: "<svg viewBox=\"0 0 520 260\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(185,70) scale(1.3)\"><text x=\"79.58\" y=\"74.82\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"62.44\" y1=\"59.19\" x2=\"77.68\" y2=\"67.99\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.24\" y1=\"56.08\" x2=\"79.48\" y2=\"64.87\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.02\" y1=\"22.15\" x2=\"64.24\" y2=\"34.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.24\" y1=\"34.15\" x2=\"43.45\" y2=\"22.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.45\" y1=\"22.15\" x2=\"22.67\" y2=\"34.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.67\" y1=\"34.15\" x2=\"22.67\" y2=\"58.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.67\" y1=\"58.15\" x2=\"43.45\" y2=\"70.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.45\" y1=\"70.15\" x2=\"64.24\" y2=\"58.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.24\" y1=\"34.15\" x2=\"64.24\" y2=\"58.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(0,70) scale(1.3)\"><text x=\"79.58\" y=\"74.82\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"91.47\" y=\"69.15\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><line x1=\"43.45\" y1=\"70.15\" x2=\"64.24\" y2=\"58.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.87\" y1=\"65.76\" x2=\"60.22\" y2=\"56.32\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.02\" y1=\"22.15\" x2=\"64.24\" y2=\"34.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.24\" y1=\"34.15\" x2=\"43.45\" y2=\"22.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.45\" y1=\"22.15\" x2=\"22.67\" y2=\"34.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.67\" y1=\"34.15\" x2=\"22.67\" y2=\"58.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.67\" y1=\"58.15\" x2=\"43.45\" y2=\"70.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.24\" y1=\"34.15\" x2=\"64.24\" y2=\"58.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.24\" y1=\"58.15\" x2=\"78.58\" y2=\"66.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(380,70) scale(1.3)\"><text x=\"38.01\" y=\"14.82\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"49.9\" y=\"9.15\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><line x1=\"64.24\" y1=\"46.15\" x2=\"43.45\" y2=\"34.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.22\" y1=\"47.99\" x2=\"43.87\" y2=\"38.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.02\" y1=\"34.15\" x2=\"64.24\" y2=\"46.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.45\" y1=\"34.15\" x2=\"43.45\" y2=\"17.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.45\" y1=\"34.15\" x2=\"22.67\" y2=\"46.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.67\" y1=\"46.15\" x2=\"22.67\" y2=\"70.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.67\" y1=\"70.15\" x2=\"43.45\" y2=\"82.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.45\" y1=\"82.15\" x2=\"64.24\" y2=\"70.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.24\" y1=\"46.15\" x2=\"64.24\" y2=\"70.15\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"185\" y1=\"135\" x2=\"140\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M140,135 L147.1,131.4 M140,135 L147.1,138.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"162.5\" y=\"127\" text-anchor=\"middle\" font-size=\"12\">LDA, THF</text><text x=\"162.5\" y=\"153\" text-anchor=\"middle\" font-size=\"12\">−78 °C</text><line x1=\"330\" y1=\"135\" x2=\"380\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M380,135 L372.9,138.6 M380,135 L372.9,131.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"355\" y=\"127\" text-anchor=\"middle\" font-size=\"12\">NaOEt, EtOH</text><text x=\"355\" y=\"153\" text-anchor=\"middle\" font-size=\"12\">25 °C</text><text x=\"255\" y=\"210\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">2-methylcyclohexanone</text><text x=\"70\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\" font-weight=\"700\">kinetic enolate</text><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">less substituted C=C</text><text x=\"70\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">formed faster</text><text x=\"450\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" class=\"t-red\" font-weight=\"700\">thermodynamic enolate</text><text x=\"450\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">more substituted C=C</text><text x=\"450\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">more stable</text><text x=\"74\" y=\"220\" text-anchor=\"middle\" font-size=\"11.5\">H removed from the CH₂ side:</text><text x=\"74\" y=\"236\" text-anchor=\"middle\" font-size=\"11.5\">more H, less hindered</text><text x=\"446\" y=\"220\" text-anchor=\"middle\" font-size=\"11.5\">H removed from the CH side;</text><text x=\"446\" y=\"236\" text-anchor=\"middle\" font-size=\"11.5\">reversible, so it equilibrates</text></svg>",
  taut: "<svg viewBox=\"0 0 520 170\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,10) scale(1.5)\"><text x=\"34.55\" y=\"23.33\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"41.8\" y1=\"43.71\" x2=\"41.8\" y2=\"25.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.2\" y1=\"43.71\" x2=\"38.2\" y2=\"25.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.78\" y1=\"54.67\" x2=\"40\" y2=\"42.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40\" y1=\"42.67\" x2=\"19.22\" y2=\"54.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(210,10) scale(1.5)\"><text x=\"34.55\" y=\"23.33\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"45.45\" y=\"23.33\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"60.78\" y1=\"54.67\" x2=\"40\" y2=\"42.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.58\" y1=\"51.55\" x2=\"44.02\" y2=\"40.83\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40\" y1=\"42.67\" x2=\"40\" y2=\"25.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40\" y1=\"42.67\" x2=\"19.22\" y2=\"54.67\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(360,5) scale(1.25)\"><text x=\"77.34\" y=\"34.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"88.23\" y=\"34.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"14.98\" y=\"70.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"82.78\" y1=\"54\" x2=\"62\" y2=\"66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.77\" y1=\"52.16\" x2=\"62.42\" y2=\"61.6\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.22\" y1=\"51.92\" x2=\"25.98\" y2=\"60.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.02\" y1=\"55.04\" x2=\"27.78\" y2=\"63.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"103.57\" y1=\"66\" x2=\"82.78\" y2=\"54\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"82.78\" y1=\"54\" x2=\"82.78\" y2=\"37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62\" y1=\"66\" x2=\"41.22\" y2=\"54\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.22\" y1=\"54\" x2=\"41.22\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><path d=\"M140,69 L205,69 l-8,-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M205,75 L140,75 l8,6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"172.5\" y=\"60\" text-anchor=\"middle\" font-size=\"12\">K ≈ 5 × 10⁻⁹</text><text x=\"70\" y=\"140\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">keto (acetone)</text><text x=\"270\" y=\"140\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">enol</text><text x=\"437\" y=\"140\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">2,4-pentanedione</text><text x=\"437\" y=\"158\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">about 80% enol (neat)</text><text x=\"70\" y=\"158\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">more than 99.999999%</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-enolates',
  title: 'Enols, Enolates and Alpha Substitution',
  summary: 'The carbon next to a carbonyl is acidic, and that turns carbonyl compounds into nucleophiles. Keto–enol tautomerism and its mechanism, why α-hydrogens have pKa 9–25, forming enolates with LDA versus alkoxides (kinetic versus thermodynamic control), α-halogenation and the haloform reaction, and alkylating enolates within the limits of SN2.',
  minutes: 20,
  objectives: [
    'Identify α-carbons and α-hydrogens, and draw keto–enol tautomerism under acid and base catalysis',
    'Explain why the keto form usually dominates and when the enol wins, and relate $K$ to $\\Delta G^\\circ$',
    'Rank the acidity of α-hydrogens (pKa about 9–25) using enolate resonance, and calculate deprotonation equilibria from pKa values',
    'Choose LDA or an alkoxide to form an enolate, and predict the kinetic versus thermodynamic enolate of an unsymmetrical ketone',
    'Predict the products of acid- and base-promoted α-halogenation, including the haloform reaction of methyl ketones',
    'Plan enolate alkylations, recognizing which alkyl halides work (methyl, primary, allylic, benzylic) and which fail',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The α-carbon and keto–enol tautomerism',
      blocks: [
        {
          type: 'p',
          text: 'So far the carbonyl carbon has been an **electrophile**. This lesson turns the molecule around. The carbon next to the C=O is the [[ochem-alpha-carbon|α-carbon]] (the next one is β, then γ), and its hydrogens are α-hydrogens. Remove one and the electrons can spread onto the carbonyl oxygen, so the α-carbon becomes a **nucleophile**. Nearly every carbon–carbon bond made in biochemistry is made this way.',
        },
        {
          type: 'definition',
          term: 'Keto–enol tautomerism',
          text: 'A carbonyl compound with an α-hydrogen is in equilibrium with its **enol** (ene + ol: an OH on a C=C). The two forms differ only in where one hydrogen and one π bond sit, so they are constitutional isomers that interconvert quickly with acid or base catalysis: **tautomers**. See [[ochem-keto-enol-tautomerism]].',
        },
        {
          type: 'figure',
          svg: FIG.taut,
          alt: 'Left: acetone (keto form) in equilibrium with propen-2-ol (enol form), K about 5 times 10 to the minus 9. Right: the enol form of 2,4-pentanedione, a C=C conjugated with a C=O and carrying an OH, labeled about 80% enol in the neat liquid.',
          caption: 'For simple ketones the enol is a vanishing minority. Two carbonyls change that: in 2,4-pentanedione the enol\'s C=C is conjugated with the second C=O, and its OH forms an intramolecular hydrogen bond to that oxygen in a six-membered ring.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Base-catalyzed (via the enolate)', text: 'A base removes an α-H; the C–H electrons become a C=C and push the π electrons onto O, giving the enolate ion. Protonating the enolate on **oxygen** gives the enol (on carbon gives back the ketone).' },
            { title: 'Acid-catalyzed (via the protonated carbonyl)', text: 'Acid protonates the carbonyl oxygen, making the α-H much more acidic. Water then removes the α-H, and the C–H electrons form the C=C as the C=O π electrons move onto the now-neutral oxygen. The enol results.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Why the keto form wins: a bond-enthalpy estimate',
          steps: [
            { tex: '\\text{keto: } \\ce{C=O} + \\ce{C-C} + \\ce{C-H} = 745 + 347 + 414 = 1506\\ \\text{kJ/mol}', why: 'List only the bonds that differ between the tautomers. The keto form has a C=O, the α C–C single bond and the α C–H.' },
            { tex: '\\text{enol: } \\ce{C=C} + \\ce{C-O} + \\ce{O-H} = 611 + 358 + 464 = 1433\\ \\text{kJ/mol}', why: 'The enol trades them for a C=C, a C–O single bond and an O–H. Average bond enthalpies from General Chemistry.' },
            { tex: '\\Delta H \\approx 1506 - 1433 \\approx 70\\ \\text{kJ/mol in favor of keto}', why: 'More bond energy is stored in the keto form\'s bonds, so breaking them costs more: the keto form is lower in enthalpy. The C=O π bond is much stronger than a C=C π bond.' },
          ],
          result: 'A rough estimate (average bond enthalpies are crude), but the sign and size are right: the measured free-energy difference for acetone is about 47 kJ/mol. The enol wins only when something extra stabilizes it, such as conjugation and hydrogen bonding (2,4-pentanedione) or aromaticity (phenol is the enol of 2,4-cyclohexadienone, and the aromatic enol wins by a huge margin).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the enol matters even at one part per billion',
          text: 'Tautomerization is fast, so the enol is constantly replenished. Any reaction that consumes the enol pulls the whole equilibrium through it, like a small drain from a large tank. In 1904 Arthur Lapworth found that acetone reacts with bromine in acid at a rate that does not depend on $[\\ce{Br2}]$ at all: rate $= k[\\text{ketone}][\\ce{H+}]$. Enol formation is the [[gchem-rate-determining-step|rate-determining step]]; the enol then reacts with bromine as fast as it forms.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'The keto ⇌ enol equilibrium constant of acetone is about $K = 5 \\times 10^{-9}$ at 298 K. What is $\\Delta G^\\circ$ for keto → enol, in kJ/mol? ($R = 8.314$ J/(mol·K).)',
      hint: '$\\Delta G^\\circ = -RT\\ln K$. Convert J to kJ at the end.',
      label: '$\\Delta G^\\circ =$',
      unit: 'kJ/mol',
      answer: '-8.314*298*ln(5*10^-9)/1000',
      answerTex: '+47.4\\ \\text{kJ/mol}',
      tolerance: 0.1,
      explanation: '$\\ln(5 \\times 10^{-9}) = -19.11$, so $\\Delta G^\\circ = -(8.314)(298)(-19.11) = +47{,}350$ J/mol $\\approx +47.4$ kJ/mol. Positive: the enol is uphill. Every 5.7 kJ/mol at room temperature is one factor of 10 in $K$, so 47 kJ/mol is about eight powers of ten.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'How acidic is an α-hydrogen?',
      blocks: [
        {
          type: 'p',
          text: 'An ordinary C–H bond has a pKa around 50. Put a carbonyl next to it and the pKa drops to about 20, a factor of $10^{30}$. The reason is the conjugate base: the [[ochem-enolate|enolate ion]] spreads its negative charge between the α-carbon and the electronegative oxygen.',
        },
        {
          type: 'figure',
          svg: FIG.enolate_res,
          alt: 'Two resonance structures of the acetone enolate. Left: a carbanion, H2C with a negative charge and a lone pair, next to a C=O; curved arrows push the carbon lone pair into the C–C bond and the C=O π electrons onto oxygen. Right: the enolate form, H2C=C with O− carrying three lone pairs.',
          caption: 'The enolate is one ion with two resonance forms. Most of the charge is on oxygen (the more electronegative atom), yet it usually reacts with electrophiles at **carbon**, which gives the stronger new bond (a C–C or C–X bond instead of an O–C bond) and a C=O product.',
        },
        {
          type: 'table',
          headers: ['Compound', 'Acidic H', 'pKa'],
          rows: [
            ['ethane, $\\ce{CH3CH3}$', 'C–H (no carbonyl)', '≈ 50'],
            ['ethyl acetate, $\\ce{CH3COOEt}$', 'α to an ester', '≈ 25'],
            ['acetonitrile, $\\ce{CH3CN}$', 'α to a nitrile', '≈ 25'],
            ['acetone, $\\ce{CH3COCH3}$', 'α to a ketone', '19.2'],
            ['acetaldehyde, $\\ce{CH3CHO}$', 'α to an aldehyde', '16.7'],
            ['diethyl malonate, $\\ce{CH2(COOEt)2}$', 'between two esters', '13.3'],
            ['ethyl acetoacetate, $\\ce{CH3COCH2COOEt}$', 'between ketone and ester', '10.7'],
            ['2,4-pentanedione, $\\ce{CH3COCH2COCH3}$', 'between two ketones', '9.0'],
          ],
          caption: 'Ester enolates are less stabilized than ketone enolates, because the ester\'s OR oxygen already donates into the C=O and competes with the new negative charge. A CH₂ between two carbonyls spreads the charge over three atoms and is as acidic as phenol.',
        },
        {
          type: 'derivation',
          title: 'Will ethoxide deprotonate acetone?',
          steps: [
            { tex: '\\ce{CH3COCH3 + CH3CH2O- <=> CH3COCH2- + CH3CH2OH}', why: 'Write the proton transfer. Acid on the left: acetone (pKa 19.2). Acid on the right: ethanol (pKa 16).' },
            { tex: 'K = 10^{\\,\\text{p}K_a(\\text{right}) - \\text{p}K_a(\\text{left})} = 10^{16 - 19.2} = 10^{-3.2}', why: 'From the acid–base unit: equilibrium favors the side with the weaker acid (higher pKa).' },
            { tex: 'K \\approx 6 \\times 10^{-4}', why: 'Well under 1: only a small fraction of acetone is an enolate at any moment.' },
          ],
          result: 'Alkoxides and hydroxide make only a little enolate from a simple ketone, in equilibrium with lots of ketone. That is enough for reactions that consume the enolate (halogenation, aldol), but not for reactions where the leftover ketone or base would interfere. For those you need a much stronger base.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Ethyl acetoacetate is $\\ce{CH3-CO-CH2-CO-OCH2CH3}$. Which hydrogens are the most acidic?',
      options: [
        { text: 'The $\\ce{CH3}$ attached to the ketone C=O', why: 'These are α to one carbonyl (the ketone), so they are acidic, pKa about 20, but they have only one carbonyl to spread the charge onto.' },
        { text: 'The $\\ce{CH2}$ between the two carbonyls', correct: true, why: 'Their enolate delocalizes the charge onto both oxygens (three resonance forms). pKa 10.7, about a billion times more acidic than the other α-hydrogens.' },
        { text: 'The $\\ce{OCH2}$ of the ethyl group', why: 'This carbon is attached to oxygen but is not α to a carbonyl; removing its proton gives a carbanion with no resonance stabilization (pKa well over 40).' },
        { text: 'The terminal $\\ce{CH3}$ of the ethyl group', why: 'An ordinary alkane-type C–H, pKa about 50.' },
      ],
      explanation: 'Look for hydrogens on a carbon flanked by **two** carbonyls. The resulting enolate is stabilized by both, so it forms cleanly even with ethoxide. That is the basis of the acetoacetic ester synthesis at the end of this lesson.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Diethyl malonate (pKa 13.0) is treated with sodium ethoxide (ethanol pKa 16.0). What is the equilibrium constant for the deprotonation?',
      hint: '$K = 10^{\\,\\text{p}K_a(\\text{product acid}) - \\text{p}K_a(\\text{reactant acid})}$.',
      label: '$K =$',
      answer: '10^(16-13)',
      answerTex: '10^{3} = 1000',
      tolerance: 1,
      explanation: '$\\ce{CH2(CO2Et)2 + EtO- <=> CH(CO2Et)2- + EtOH}$. The reactant acid is diethyl malonate (13.0), the product acid ethanol (16.0): $K = 10^{16.0 - 13.0} = 10^{3}$. Unlike acetone ($K \\approx 10^{-3.2}$), the malonate is essentially fully converted to its enolate, so ethoxide is all you need.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Making enolates: LDA versus alkoxides',
      blocks: [
        {
          type: 'p',
          text: 'To convert a ketone **completely** into its enolate, use a base whose conjugate acid is far weaker than the ketone. The standard is [[ochem-lda|LDA]], lithium diisopropylamide, $\\ce{[(CH3)2CH]2N^-Li+}$. Its conjugate acid, diisopropylamine, has pKa 36, so $K \\approx 10^{36 - 19} = 10^{17}$ for acetone: complete and irreversible. The two isopropyl groups make LDA so bulky that it is a poor nucleophile, so it removes a proton without adding to the C=O.',
        },
        {
          type: 'p',
          text: 'An unsymmetrical ketone has two different sets of α-hydrogens, and the choice of base decides which enolate you get.',
        },
        {
          type: 'figure',
          svg: FIG.kt,
          alt: '2-Methylcyclohexanone in the center. Left arrow, LDA, THF, −78 °C: the kinetic enolate, with the C=C toward the CH2 side (less substituted), formed faster. Right arrow, NaOEt, EtOH, 25 °C: the thermodynamic enolate, with the C=C toward the methyl-bearing carbon (more substituted), more stable.',
          caption: 'LDA at −78 °C removes the most accessible proton (the CH₂ side has two H and less crowding) and the reaction is irreversible, so the faster-formed enolate is trapped. A weaker base at room temperature deprotonates reversibly, the enolates interconvert, and the more substituted (more stable) C=C wins, as for alkenes.',
        },
        {
          type: 'definition',
          term: 'Kinetic versus thermodynamic control',
          text: 'Under **[[ochem-kinetic-control|kinetic control]]** (irreversible conditions) the product ratio reflects the difference in activation energies: the [[ochem-kinetic-enolate|kinetic enolate]] forms faster. Under **thermodynamic control** (reversible, equilibrating conditions) it reflects the difference in product stabilities: the [[ochem-thermodynamic-enolate|thermodynamic enolate]] is more stable.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [-28, 62],
          xStep: 1,
          yStep: 10,
          functions: [
            { expr: '-10(1 + tanh(1.5(x - 5)))/2 + 45exp(-(x - 5)^2/0.8)', label: 'path to kinetic enolate', color: 'blue' },
            { expr: '(-10 - b)(1 + tanh(1.5(x - 5)))/2 + (45 + a + b/2)exp(-(x - 5)^2/0.8)', label: 'path to thermodynamic enolate', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 15, step: 0.5, value: 7.5, label: 'extra barrier for the thermodynamic path, $\\Delta\\Delta G^\\ddagger$ (kJ/mol)' },
            { name: 'b', min: 0, max: 15, step: 0.5, value: 3, label: 'extra stability of the thermodynamic enolate, $\\Delta\\Delta G^\\circ$ (kJ/mol)' },
          ],
          readouts: [
            { label: 'kinetic : thermodynamic, LDA at −78 °C $= e^{\\Delta\\Delta G^\\ddagger/RT} \\approx$', expr: 'exp(a*1000/(8.314*195))', digits: 1 },
            { label: 'thermodynamic : kinetic at equilibrium, 25 °C $= e^{\\Delta\\Delta G^\\circ/RT} \\approx$', expr: 'exp(b*1000/(8.314*298))', digits: 1 },
          ],
          caption: 'Model free-energy profiles (kJ/mol) from ketone (left) to each enolate (right). Under kinetic control only the barrier difference matters; under equilibrium only the end-point difference matters. A modest 7.5 kJ/mol barrier difference at 195 K gives about 100 : 1.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'The two-word summary',
          text: 'LDA, cold → kinetic, less substituted side. Alkoxide or hydroxide, warmer → thermodynamic, more substituted side. Exams love 2-methylcyclohexanone for exactly this reason. And when you need the enolate to react with something that the base would also attack (an alkyl halide, an ester), you want LDA: it converts all the ketone first, so no free base and no unreacted ketone remain.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: '2-Methylcyclohexanone is treated with LDA in THF at −78 °C, then with iodomethane. What is the main product?',
      options: [
        { text: '2,2-Dimethylcyclohexanone', why: 'That product comes from the more substituted (thermodynamic) enolate, which LDA in the cold does not form.' },
        { text: '2,6-Dimethylcyclohexanone', correct: true, why: 'LDA removes a proton from the less hindered CH₂ (C6), giving the kinetic enolate; its α-carbon attacks $\\ce{CH3I}$ by SN2.' },
        { text: '1-Methoxy-6-methylcyclohexene (O-methylation)', why: 'Enolates can react on oxygen, but with soft alkyl halides like $\\ce{CH3I}$ C-alkylation dominates, giving a strong C–C bond and a C=O.' },
        { text: '1,2-Dimethylcyclohexanol', why: 'That would require methyl adding to the C=O, which a methyl Grignard would do. Here the ketone has been converted completely into its enolate first, and $\\ce{CH3I}$ is an electrophile, not a nucleophile.' },
      ],
      explanation: 'Kinetic conditions: bulky base, low temperature, irreversible. The less substituted α-carbon (C6) is deprotonated, and the enolate carbon is alkylated, giving 2,6-dimethylcyclohexanone. With NaOEt in ethanol you would get mostly the 2,2-isomer (and a messier reaction).',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'α-Halogenation and the haloform reaction',
      blocks: [
        {
          type: 'p',
          text: 'Enols and enolates react with $\\ce{Cl2}$, $\\ce{Br2}$ and $\\ce{I2}$: the electron-rich C=C attacks the halogen just as an alkene does, then the oxygen gives back its C=O. The outcome depends on acid or base.',
        },
        {
          type: 'compare',
          left: {
            title: 'In acid (via the enol)',
            tone: 'neutral',
            tex: ['\\ce{CH3COCH3 ->[\\ce{Br2}, \\ce{H3O+}] CH3COCH2Br}'],
            text: 'Stops cleanly after **one** halogen. The electronegative Br makes the carbonyl oxygen less basic, so the product is protonated (and enolized) more slowly than the starting ketone.',
          },
          right: {
            title: 'In base (via the enolate)',
            tone: 'neutral',
            tex: ['\\ce{CH3COCH3 ->[\\ce{Br2}, \\ce{NaOH}] CH3COCBr3 -> ...}'],
            text: 'Does **not** stop. Each halogen withdraws electrons and makes the remaining α-H on that carbon more acidic, so the second and third halogenations are faster than the first.',
          },
        },
        {
          type: 'p',
          text: 'With a **methyl ketone** in base, all three hydrogens of the methyl group are replaced, and then something unusual happens: hydroxide adds to the C=O, and the $\\ce{CX3-}$ group leaves. Three halogens stabilize the carbanion enough to make it a leaving group. This is the [[ochem-haloform-reaction|haloform reaction]].',
        },
        {
          type: 'figure',
          svg: FIG.haloform,
          alt: 'Haloform reaction of acetophenone. Top: acetophenone with 3 I2 and 3 NaOH gives the triiodomethyl ketone after three α-iodinations, each faster than the last. Middle: after hydroxide adds to the C=O, the tetrahedral intermediate (OH, O−, phenyl, CI3) expels −CI3 (curved arrows), giving benzoic acid plus the triiodomethyl anion, which takes the acid proton (curved arrow). Bottom: benzoate plus iodoform, CHI3, a yellow precipitate.',
          caption: 'Addition–elimination from the previous lesson, with an unusual leaving group. The final proton transfer from the carboxylic acid to $\\ce{CI3-}$ makes the reaction irreversible, like saponification.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'The iodoform test',
          text: 'Before NMR, chemists identified methyl ketones by warming a sample with iodine and NaOH: a pale yellow precipitate of iodoform, $\\ce{CHI3}$ (with a distinctive antiseptic smell), meant a $\\ce{CH3CO-}$ group. Secondary alcohols of the form $\\ce{CH3CH(OH)R}$ also test positive, because the reagent first oxidizes them to methyl ketones. The reaction is still used to turn methyl ketones into carboxylic acids with one carbon fewer.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'Treating acetone with one equivalent of $\\ce{Br2}$ and aqueous NaOH gives mainly bromoacetone, $\\ce{CH3COCH2Br}$.',
      answer: false,
      explanation: 'In base, the first bromine makes the remaining hydrogens on that carbon **more** acidic, so the product reacts faster than acetone does. You get a mixture rich in $\\ce{CH3COCBr3}$ (which goes on to bromoform and acetate) plus unreacted acetone. To stop at monobromination, brominate in acid (via the enol), where the first halogen slows further reaction.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Order the steps of the haloform reaction of acetophenone with $\\ce{I2}$ and NaOH.',
      lines: [
        'Hydroxide removes an α-hydrogen from the methyl group, forming an enolate.',
        'The enolate attacks $\\ce{I2}$; this repeats until the methyl group is $\\ce{CI3}$.',
        'Hydroxide adds to the C=O, giving a tetrahedral intermediate.',
        'The C=O re-forms and expels $\\ce{CI3-}$ as the leaving group.',
        'The carboxylic acid transfers its proton to $\\ce{CI3-}$, giving benzoate and iodoform.',
      ],
      explanation: 'Two phases: α-substitution three times (enolate + $\\ce{I2}$), then nucleophilic acyl substitution with $\\ce{CI3-}$ as the leaving group. The last proton transfer is strongly downhill (benzoic acid pKa 4.2 versus iodoform about 14), which drives the reaction to completion.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Complete the haloform reaction.',
      template: 'Acetophenone, $\\ce{C6H5COCH3}$, warmed with excess $\\ce{I2}$ and NaOH gives sodium ___ and ___. Of these ketones, ___ also gives a positive iodoform test.',
      blanks: [{ answers: ['benzoate'] }, { answers: ['iodoform, $\\ce{CHI3}$'] }, { answers: ['2-butanone'] }],
      wordBank: ['benzoate', 'acetate', 'iodoform, $\\ce{CHI3}$', 'iodomethane, $\\ce{CH3I}$', '2-butanone', '3-pentanone', 'cyclohexanone'],
      explanation: 'The acyl carbon keeps the phenyl and becomes a carboxylate (benzoate); the methyl carbon leaves as $\\ce{CI3-}$ and is protonated to iodoform. A positive test needs a $\\ce{CH3CO-}$ group: 2-butanone ($\\ce{CH3COCH2CH3}$) has one and gives propanoate + $\\ce{CHI3}$. 3-Pentanone ($\\ce{CH3CH2COCH2CH3}$) and cyclohexanone have α-carbons, but none of them is a methyl group, so no $\\ce{CI3}$ leaving group can form.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Alkylating enolates (and the limits of SN2)',
      blocks: [
        {
          type: 'p',
          text: 'An enolate is a carbon nucleophile, and an alkyl halide is an $\\ce{S_N2}$ electrophile. Put them together and you make a C–C bond at the α-carbon. With LDA the ketone is converted completely to the enolate first, then the alkyl halide is added.',
        },
        {
          type: 'figure',
          svg: FIG.alkyl,
          alt: 'Cyclohexanone with LDA at −78 °C gives the lithium enolate. Curved arrows: an oxygen lone pair re-forms the C=O, the C=C π electrons attack the carbon of iodomethane, and the C–I bond electrons leave on iodine. The product is 2-methylcyclohexanone plus iodide.',
          caption: 'Three arrows: the oxygen lone pair pushes, the C=C π bond attacks the methyl carbon from the back side, and iodide leaves. The enolate carbon is the nucleophile; the C=O comes back.',
        },
        {
          type: 'p',
          text: 'Because the alkylation step **is** an [[ochem-sn2|SN2 reaction]], all the substrate rules from the substitution unit apply, and enolates are also strong bases, so they eliminate whenever $\\ce{S_N2}$ is slow.',
        },
        {
          type: 'table',
          headers: ['Alkyl halide', 'Result with an enolate'],
          rows: [
            ['methyl, primary ($\\ce{CH3I}$, $\\ce{CH3CH2Br}$)', 'good alkylation'],
            ['allylic, benzylic ($\\ce{CH2=CHCH2Br}$, $\\ce{C6H5CH2Br}$)', 'excellent (the SN2 transition state is stabilized by the π system)'],
            ['secondary ($\\ce{(CH3)2CHBr}$)', 'poor: slow SN2, E2 competes'],
            ['tertiary ($\\ce{(CH3)3CBr}$)', 'fails: E2 only, giving an alkene'],
            ['aryl, vinyl ($\\ce{C6H5Br}$)', 'fails: no SN2 at $sp^2$ carbon'],
          ],
        },
        {
          type: 'deepdive',
          title: 'Malonic ester and acetoacetic ester syntheses',
          blocks: [
            {
              type: 'p',
              text: 'A doubly activated $\\ce{CH2}$ (pKa 11–13) can be alkylated using just sodium ethoxide. Afterwards, hydrolyzing the ester and heating removes one carboxyl group as $\\ce{CO2}$: a β-keto acid or a malonic acid **decarboxylates** through a six-membered cyclic transition state. The net result is an alkylated acetic acid or an alkylated acetone.',
            },
            {
              type: 'derivation',
              title: 'Malonic ester synthesis of pentanoic acid',
              steps: [
                { tex: '\\ce{CH2(CO2Et)2 ->[\\ce{NaOEt}] Na+ -CH(CO2Et)2}', why: 'Ethoxide deprotonates the CH₂ completely ($K \\approx 10^3$).' },
                { tex: '\\ce{-CH(CO2Et)2 + CH3CH2CH2Br -> CH3CH2CH2CH(CO2Et)2 + Br-}', why: 'SN2 on a primary bromide.' },
                { tex: '\\ce{->[\\ce{H3O+}, \\text{heat}] CH3CH2CH2CH(COOH)2}', why: 'Both esters hydrolyze to carboxylic acids.' },
                { tex: '\\ce{->[\\text{heat}] CH3CH2CH2CH2COOH + CO2}', why: 'A 1,3-dicarboxylic acid loses $\\ce{CO2}$ on heating, leaving one COOH.' },
              ],
              result: 'Pentanoic acid: the two carbons of malonic ester\'s $\\ce{CH2-COOH}$ end plus the three from the propyl bromide. Acetoacetic ester does the same job but ends as a methyl ketone, $\\ce{CH3COCH2R}$.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student plans to make 4,4-dimethyl-2-pentanone, $\\ce{CH3COCH2C(CH3)3}$, by alkylating acetone. Tap the first flawed line.',
      lines: [
        'Disconnect the bond between the α-carbon and the tert-butyl group: acetone enolate + a tert-butyl electrophile.',
        'Form the enolate completely with LDA in THF at −78 °C.',
        'Add 2-bromo-2-methylpropane, $\\ce{(CH3)3CBr}$; the enolate carbon displaces bromide by SN2.',
        'Workup gives $\\ce{CH3COCH2C(CH3)3}$.',
      ],
      errorLines: [3],
      explanation: 'A tertiary halide cannot undergo SN2: the back side of the C–Br bond is blocked by three methyl groups. The strongly basic enolate removes a β-hydrogen instead (E2), giving 2-methylpropene and acetone back. Enolate alkylation works only with methyl, primary, allylic and benzylic halides.',
    },
  ],
  takeaways: [
    'The α-carbon is next to the C=O. Carbonyls with α-H are in equilibrium with enols (tautomers), catalyzed by acid (via protonated C=O) or base (via the enolate).',
    'The keto form usually dominates ($K \\approx 5 \\times 10^{-9}$ for acetone, $\\Delta G^\\circ \\approx +47$ kJ/mol) because C=O is stronger than C=C; conjugation, H-bonding (2,4-pentanedione) or aromaticity (phenol) can favor the enol.',
    'α-H pKa: about 25 (esters, nitriles), 19–20 (ketones), 17 (aldehydes), 9–13 (between two carbonyls), because the enolate puts the charge on oxygen.',
    'LDA (pKa 36, bulky, −78 °C) makes enolates completely and irreversibly: the kinetic, less substituted enolate. Alkoxides make a little enolate reversibly: the thermodynamic, more substituted enolate.',
    'Acid-catalyzed halogenation stops at one halogen; base-promoted halogenation continues, and methyl ketones undergo the haloform reaction to carboxylate + $\\ce{CHX3}$.',
    'Enolate alkylation is SN2: methyl, primary, allylic and benzylic halides work; secondary is poor; tertiary, aryl and vinyl fail.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapter 22, Carbonyl Alpha-Substitution Reactions: tautomerism, α-halogenation, enolate acidity and alkylation, including malonic and acetoacetic ester syntheses.',
    },
    {
      title: 'Wikipedia — Keto–enol tautomerism',
      url: 'https://en.wikipedia.org/wiki/Keto%E2%80%93enol_tautomerism',
      source: 'wikipedia',
      note: 'Mechanisms, equilibrium data for many compounds, and the biological importance of enols.',
    },
    {
      title: 'Wikipedia — Haloform reaction',
      url: 'https://en.wikipedia.org/wiki/Haloform_reaction',
      source: 'wikipedia',
      note: 'Mechanism, the iodoform test and the history of chloroform production by this route.',
    },
    {
      title: 'Master Organic Chemistry',
      url: 'https://www.masterorganicchemistry.com/',
      source: 'other',
      note: 'Search "kinetic versus thermodynamic enolates" for a clear walk through LDA and the 2-methylcyclohexanone example.',
    },
  ],
};
