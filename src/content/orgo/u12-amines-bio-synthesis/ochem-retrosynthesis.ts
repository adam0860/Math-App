import type { Lesson } from '../../types';

// <figures> skeletal structures drawn from SMILES with the molecule kit; mechanisms checked by rendering
const FIG = {
  disc: "<svg viewBox=\"0 0 520 230\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,40) scale(1.2)\"><text x=\"55.45\" y=\"24.44\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"45.34\" y=\"24.44\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"52.11\" y1=\"52.56\" x2=\"31.32\" y2=\"40.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.09\" y1=\"54.4\" x2=\"31.74\" y2=\"44.96\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"10.54\" y1=\"52.56\" x2=\"10.54\" y2=\"76.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"14.14\" y1=\"55.12\" x2=\"14.14\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.32\" y1=\"88.56\" x2=\"52.11\" y2=\"76.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.74\" y1=\"84.16\" x2=\"48.09\" y2=\"74.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"114.46\" y1=\"40.56\" x2=\"93.68\" y2=\"52.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"93.68\" y1=\"52.56\" x2=\"72.89\" y2=\"40.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"72.89\" y1=\"40.56\" x2=\"84.89\" y2=\"19.77\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"72.89\" y1=\"40.56\" x2=\"64.93\" y2=\"26.77\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"72.89\" y1=\"40.56\" x2=\"52.11\" y2=\"52.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.32\" y1=\"40.56\" x2=\"10.54\" y2=\"52.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"10.54\" y1=\"76.56\" x2=\"31.32\" y2=\"88.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.11\" y1=\"52.56\" x2=\"52.11\" y2=\"76.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(400,10) scale(1.1)\"><text x=\"8.83\" y=\"59.03\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"35.06\" y1=\"40.29\" x2=\"19.82\" y2=\"49.08\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"36.86\" y1=\"43.4\" x2=\"21.62\" y2=\"52.2\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"76.63\" y1=\"42.36\" x2=\"55.85\" y2=\"54.36\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.85\" y1=\"54.36\" x2=\"35.06\" y2=\"42.36\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.06\" y1=\"42.36\" x2=\"35.06\" y2=\"18.36\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(390,120)\"><text x=\"99.57\" y=\"42.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Br</text><text x=\"76.06\" y=\"30.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\">Mg</text><line x1=\"65\" y1=\"38\" x2=\"44.22\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.98\" y1=\"39.84\" x2=\"44.63\" y2=\"30.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.43\" y1=\"38\" x2=\"23.43\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"27.03\" y1=\"40.56\" x2=\"27.03\" y2=\"59.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.22\" y1=\"74\" x2=\"65\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.63\" y1=\"69.6\" x2=\"60.98\" y2=\"60.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"98.57\" y1=\"33.38\" x2=\"96.51\" y2=\"32.19\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"75.06\" y1=\"32.19\" x2=\"65\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.22\" y1=\"26\" x2=\"23.43\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.43\" y1=\"62\" x2=\"44.22\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65\" y1=\"38\" x2=\"65\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><polyline points=\"81.5,107.2 82.7,104.0 81.6,102.1 78.3,101.5 74.9,101.0 73.8,99.1 75.0,95.9 76.2,92.7 75.1,90.8 71.8,90.3 68.4,89.7 67.3,87.8 68.5,84.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-red\"/><path d=\"M155,101.5 L194,101.5 M155,108.5 L194,108.5 M188,95 L200,105 L188,115\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"210\" y=\"40\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">electrophilic synthon</text><text x=\"210\" y=\"60\" text-anchor=\"start\" font-size=\"14\">⁺C(OH)(CH₃)CH₂CH₃</text><text x=\"210\" y=\"150\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">nucleophilic synthon</text><text x=\"210\" y=\"170\" text-anchor=\"start\" font-size=\"14\">C₆H₅⁻</text><text x=\"370\" y=\"55\" text-anchor=\"middle\" font-size=\"16\" class=\"t-purple\">=</text><text x=\"370\" y=\"170\" text-anchor=\"middle\" font-size=\"16\" class=\"t-purple\">=</text><text x=\"450\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2-butanone</text><text x=\"455\" y=\"225\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">PhMgBr</text><text x=\"75\" y=\"195\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">target: 2-phenyl-2-butanol</text><text x=\"410\" y=\"14\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\" font-weight=\"600\">synthetic equivalents</text></svg>",
  synA: "<svg viewBox=\"0 0 520 120\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(170,20) scale(1.1)\"><line x1=\"94.25\" y1=\"2.36\" x2=\"73.84\" y2=\"14.14\" stroke=\"currentColor\" stroke-width=\"1.41\" /><line x1=\"73.84\" y1=\"14.14\" x2=\"53.43\" y2=\"2.36\" stroke=\"currentColor\" stroke-width=\"1.41\" /><line x1=\"53.43\" y1=\"2.36\" x2=\"33.02\" y2=\"14.14\" stroke=\"currentColor\" stroke-width=\"1.41\" /><line x1=\"33.02\" y1=\"14.14\" x2=\"33.02\" y2=\"37.71\" stroke=\"currentColor\" stroke-width=\"1.41\" /><line x1=\"33.02\" y1=\"37.71\" x2=\"33.02\" y2=\"61.28\" stroke=\"currentColor\" stroke-width=\"1.41\" /><line x1=\"29.48\" y1=\"37.71\" x2=\"29.48\" y2=\"61.28\" stroke=\"currentColor\" stroke-width=\"1.41\" /><line x1=\"36.55\" y1=\"37.71\" x2=\"36.55\" y2=\"61.28\" stroke=\"currentColor\" stroke-width=\"1.41\" /></g><g transform=\"translate(410,10) scale(1.1)\"><text x=\"3.22\" y=\"57.35\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"25.89\" y1=\"41.16\" x2=\"12.77\" y2=\"48.73\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"27.45\" y1=\"43.86\" x2=\"14.33\" y2=\"51.43\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"97.92\" y1=\"42.96\" x2=\"79.91\" y2=\"53.35\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"79.91\" y1=\"53.35\" x2=\"61.91\" y2=\"42.96\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"61.91\" y1=\"42.96\" x2=\"43.9\" y2=\"53.35\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"43.9\" y1=\"53.35\" x2=\"25.89\" y2=\"42.96\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"25.89\" y1=\"42.96\" x2=\"25.89\" y2=\"22.16\" stroke=\"currentColor\" stroke-width=\"1.25\" /></g><line x1=\"80\" y1=\"55\" x2=\"165\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M165,55 L157.9,58.6 M165,55 L157.9,51.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"122.5\" y=\"47\" text-anchor=\"middle\" font-size=\"12\">1. NaNH₂</text><text x=\"122.5\" y=\"73\" text-anchor=\"middle\" font-size=\"12\">2. CH₃CH₂CH₂CH₂Br</text><line x1=\"315\" y1=\"55\" x2=\"405\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M405,55 L397.9,58.6 M405,55 L397.9,51.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"360\" y=\"47\" text-anchor=\"middle\" font-size=\"12\">H₂O, H₂SO₄</text><text x=\"360\" y=\"73\" text-anchor=\"middle\" font-size=\"12\">HgSO₄</text><text x=\"36\" y=\"60\" text-anchor=\"middle\" font-size=\"13\">H–C≡C–H</text><text x=\"240\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">1-hexyne</text><text x=\"465\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2-hexanone</text><text x=\"35\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">acetylene</text></svg>",
  synB: "<svg viewBox=\"0 0 520 250\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,70)\"><line x1=\"19.22\" y1=\"28\" x2=\"19.22\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.82\" y1=\"30.56\" x2=\"22.82\" y2=\"49.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40\" y1=\"64\" x2=\"60.78\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.42\" y1=\"59.6\" x2=\"56.77\" y2=\"50.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.78\" y1=\"28\" x2=\"40\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.77\" y1=\"29.84\" x2=\"40.42\" y2=\"20.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"19.22\" y1=\"52\" x2=\"40\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.78\" y1=\"52\" x2=\"60.78\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"19.22\" y1=\"28\" x2=\"40\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(175,5)\"><text x=\"74.18\" y=\"25.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Br</text><line x1=\"60.39\" y1=\"33\" x2=\"39.61\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.37\" y1=\"34.84\" x2=\"40.03\" y2=\"25.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"18.82\" y1=\"33\" x2=\"18.82\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"22.42\" y1=\"35.56\" x2=\"22.42\" y2=\"54.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.61\" y1=\"69\" x2=\"60.39\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"40.03\" y1=\"64.6\" x2=\"56.37\" y2=\"55.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.18\" y1=\"25.62\" x2=\"60.39\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.61\" y1=\"21\" x2=\"18.82\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"18.82\" y1=\"57\" x2=\"39.61\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"60.39\" y1=\"33\" x2=\"60.39\" y2=\"57\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(375,0)\"><text x=\"91.84\" y=\"18.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"7.15\" y=\"90.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Br</text><line x1=\"99.08\" y1=\"39.04\" x2=\"99.08\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"95.48\" y1=\"39.04\" x2=\"95.48\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"76.5\" y1=\"50\" x2=\"55.72\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"72.48\" y1=\"51.84\" x2=\"56.13\" y2=\"42.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.93\" y1=\"50\" x2=\"34.93\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.53\" y1=\"52.56\" x2=\"38.53\" y2=\"71.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.72\" y1=\"86\" x2=\"76.5\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.13\" y1=\"81.6\" x2=\"72.48\" y2=\"72.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"138.85\" y1=\"38\" x2=\"118.07\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"118.07\" y1=\"50\" x2=\"97.28\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"97.28\" y1=\"38\" x2=\"76.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.72\" y1=\"38\" x2=\"34.93\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.93\" y1=\"74\" x2=\"22.15\" y2=\"81.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.93\" y1=\"74\" x2=\"55.72\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"76.5\" y1=\"50\" x2=\"76.5\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(175,140)\"><text x=\"64.95\" y=\"17.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"72.19\" y1=\"37.54\" x2=\"72.19\" y2=\"19.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"68.59\" y1=\"37.54\" x2=\"68.59\" y2=\"19.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"49.61\" y1=\"48.5\" x2=\"28.82\" y2=\"36.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.59\" y1=\"50.34\" x2=\"29.24\" y2=\"40.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"8.04\" y1=\"48.5\" x2=\"8.04\" y2=\"72.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"11.64\" y1=\"51.06\" x2=\"11.64\" y2=\"69.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.82\" y1=\"84.5\" x2=\"49.61\" y2=\"72.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"29.24\" y1=\"80.1\" x2=\"45.59\" y2=\"70.66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"111.96\" y1=\"36.5\" x2=\"91.18\" y2=\"48.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"91.18\" y1=\"48.5\" x2=\"70.39\" y2=\"36.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.39\" y1=\"36.5\" x2=\"49.61\" y2=\"48.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.82\" y1=\"36.5\" x2=\"8.04\" y2=\"48.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"8.04\" y1=\"72.5\" x2=\"28.82\" y2=\"84.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"49.61\" y1=\"48.5\" x2=\"49.61\" y2=\"72.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(375,130)\"><text x=\"77.01\" y=\"13.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"35.63\" y=\"105.66\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Br</text><line x1=\"84.18\" y1=\"33\" x2=\"84.18\" y2=\"16.01\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"80.73\" y1=\"33\" x2=\"80.73\" y2=\"16.01\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"62.54\" y1=\"43.5\" x2=\"42.63\" y2=\"32\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"58.69\" y1=\"45.26\" x2=\"43.03\" y2=\"36.22\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"22.71\" y1=\"43.5\" x2=\"22.71\" y2=\"66.5\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"26.16\" y1=\"45.96\" x2=\"26.16\" y2=\"64.04\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"42.63\" y1=\"78\" x2=\"62.54\" y2=\"66.5\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"43.03\" y1=\"73.78\" x2=\"58.69\" y2=\"64.74\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"122.29\" y1=\"32\" x2=\"102.37\" y2=\"43.5\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"102.37\" y1=\"43.5\" x2=\"82.46\" y2=\"32\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"82.46\" y1=\"32\" x2=\"62.54\" y2=\"43.5\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"42.63\" y1=\"32\" x2=\"22.71\" y2=\"43.5\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"22.71\" y1=\"66.5\" x2=\"42.63\" y2=\"78\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"42.63\" y1=\"78\" x2=\"42.63\" y2=\"93.99\" stroke=\"currentColor\" stroke-width=\"1.38\" /><line x1=\"62.54\" y1=\"43.5\" x2=\"62.54\" y2=\"66.5\" stroke=\"currentColor\" stroke-width=\"1.38\" /></g><line x1=\"80\" y1=\"95\" x2=\"170\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M170,50 L165.2,56.4 M170,50 L162.0,49.9\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"50\" x2=\"370\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M370,50 L362.9,53.6 M370,50 L362.9,46.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"325\" y=\"42\" text-anchor=\"middle\" font-size=\"12\">CH₃CH₂COCl</text><text x=\"325\" y=\"68\" text-anchor=\"middle\" font-size=\"12\">AlCl₃</text><line x1=\"80\" y1=\"125\" x2=\"170\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M170,185 L162.1,184.1 M170,185 L166.1,178.0\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"185\" x2=\"370\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M370,185 L362.9,188.6 M370,185 L362.9,181.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"335\" y=\"177\" text-anchor=\"middle\" font-size=\"12\">Br₂</text><text x=\"335\" y=\"203\" text-anchor=\"middle\" font-size=\"12\">FeBr₃</text><text x=\"62\" y=\"50\" text-anchor=\"start\" font-size=\"12\">Br₂, FeBr₃</text><text x=\"30\" y=\"172\" text-anchor=\"start\" font-size=\"12\">CH₃CH₂COCl</text><text x=\"30\" y=\"188\" text-anchor=\"start\" font-size=\"12\">AlCl₃</text><text x=\"447\" y=\"112\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-green\">para product</text><text x=\"447\" y=\"248\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-orange\">meta product</text></svg>",
  synC: "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,15)\"><text x=\"108.95\" y=\"40.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"88.17\" y=\"76.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"5.03\" y=\"52.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"91.82\" y1=\"46.46\" x2=\"91.82\" y2=\"64.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"95.42\" y1=\"46.46\" x2=\"95.42\" y2=\"64.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.26\" y1=\"33.42\" x2=\"16.02\" y2=\"42.22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.06\" y1=\"36.54\" x2=\"17.82\" y2=\"45.34\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"155.97\" y1=\"35.5\" x2=\"135.18\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"135.18\" y1=\"47.5\" x2=\"120.85\" y2=\"39.22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"107.95\" y1=\"39.22\" x2=\"93.62\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"93.62\" y1=\"47.5\" x2=\"72.83\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"72.83\" y1=\"35.5\" x2=\"52.05\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.05\" y1=\"47.5\" x2=\"31.26\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.26\" y1=\"35.5\" x2=\"31.26\" y2=\"11.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(300,5)\"><text x=\"134.33\" y=\"63.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"113.55\" y=\"27.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"29.27\" y=\"53.48\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"48.68\" y=\"87.11\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"120.79\" y1=\"47.61\" x2=\"120.79\" y2=\"29.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"117.19\" y1=\"47.61\" x2=\"117.19\" y2=\"29.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"181.35\" y1=\"58.57\" x2=\"160.56\" y2=\"46.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"160.56\" y1=\"46.57\" x2=\"146.22\" y2=\"54.85\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"133.33\" y1=\"54.85\" x2=\"118.99\" y2=\"46.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"118.99\" y1=\"46.57\" x2=\"98.21\" y2=\"58.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"98.21\" y1=\"58.57\" x2=\"77.42\" y2=\"46.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"77.42\" y1=\"46.57\" x2=\"56.64\" y2=\"58.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.64\" y1=\"58.57\" x2=\"76.77\" y2=\"71.64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.64\" y1=\"58.57\" x2=\"41.16\" y2=\"51.68\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"28.41\" y1=\"55.81\" x2=\"18.65\" y2=\"66.64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"18.65\" y1=\"66.64\" x2=\"30.65\" y2=\"87.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"30.65\" y1=\"87.43\" x2=\"47.68\" y2=\"83.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.64\" y1=\"58.57\" x2=\"54.87\" y2=\"75.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(300,160)\"><text x=\"110.73\" y=\"26.27\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"36.38\" y=\"41.49\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"26.27\" y=\"41.49\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"117.98\" y1=\"46.65\" x2=\"117.98\" y2=\"28.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"114.38\" y1=\"46.65\" x2=\"114.38\" y2=\"28.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"136.96\" y1=\"57.61\" x2=\"116.18\" y2=\"45.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"116.18\" y1=\"45.61\" x2=\"95.39\" y2=\"57.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"95.39\" y1=\"57.61\" x2=\"74.61\" y2=\"45.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"74.61\" y1=\"45.61\" x2=\"53.82\" y2=\"57.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.82\" y1=\"57.61\" x2=\"65.82\" y2=\"78.39\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.82\" y1=\"57.61\" x2=\"33.04\" y2=\"69.61\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.82\" y1=\"57.61\" x2=\"45.86\" y2=\"43.82\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><line x1=\"165\" y1=\"60\" x2=\"295\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M295,60 L287.9,63.6 M295,60 L287.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"230\" y=\"52\" text-anchor=\"middle\" font-size=\"12\">HOCH₂CH₂OH, TsOH</text><text x=\"230\" y=\"78\" text-anchor=\"middle\" font-size=\"12\">protect the ketone</text><line x1=\"395\" y1=\"120\" x2=\"395\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M395,160 L391.4,152.9 M395,160 L398.6,152.9\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"385\" y=\"135\" text-anchor=\"end\" font-size=\"12\">1. 2 CH₃MgBr</text><text x=\"385\" y=\"151\" text-anchor=\"end\" font-size=\"12\">2. H₃O⁺ (also removes the acetal)</text><text x=\"80\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">ethyl 4-oxopentanoate</text><text x=\"400\" y=\"268\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">5-hydroxy-5-methyl-2-hexanone</text><text x=\"110\" y=\"200\" text-anchor=\"middle\" font-size=\"12\" class=\"t-red\">Without protection, CH₃MgBr</text><text x=\"110\" y=\"216\" text-anchor=\"middle\" font-size=\"12\" class=\"t-red\">would attack the ketone first</text></svg>",
  synD: "<svg viewBox=\"0 0 520 130\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,25) scale(1.1)\"><line x1=\"67.54\" y1=\"30.36\" x2=\"46.76\" y2=\"42.36\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.74\" y1=\"27.25\" x2=\"47.17\" y2=\"37.97\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.97\" y1=\"30.36\" x2=\"5.19\" y2=\"42.36\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.55\" y1=\"34.76\" x2=\"6.99\" y2=\"45.48\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"46.76\" y1=\"42.36\" x2=\"25.97\" y2=\"30.36\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(90,25) scale(1.1)\"><text x=\"2.98\" y=\"42.53\" font-weight=\"normal\" font-size=\"12\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"61.56\" y1=\"28.15\" x2=\"43.59\" y2=\"38.53\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"60\" y1=\"25.45\" x2=\"43.95\" y2=\"34.72\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"24.84\" y1=\"26.8\" x2=\"12.54\" y2=\"33.9\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"24.48\" y1=\"30.6\" x2=\"14.09\" y2=\"36.6\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"43.59\" y1=\"38.53\" x2=\"24.84\" y2=\"26.8\" stroke=\"currentColor\" stroke-width=\"1.25\" /></g><g transform=\"translate(235,10) scale(1.1)\"><text x=\"82.9\" y=\"42.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"68.88\" y1=\"28.84\" x2=\"81\" y2=\"35.84\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"68.46\" y1=\"24.44\" x2=\"82.8\" y2=\"32.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"5.21\" y1=\"62\" x2=\"25.99\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"9.23\" y1=\"60.16\" x2=\"25.57\" y2=\"69.6\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"68.46\" y1=\"24.44\" x2=\"46.78\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"46.78\" y1=\"38\" x2=\"25.99\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.99\" y1=\"26\" x2=\"5.21\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"5.21\" y1=\"38\" x2=\"5.21\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"25.99\" y1=\"74\" x2=\"46.78\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"46.78\" y1=\"38\" x2=\"46.78\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(420,10) scale(1.1)\"><text x=\"69.36\" y=\"43.89\" font-weight=\"normal\" font-size=\"13\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"79.48\" y=\"43.89\" font-weight=\"normal\" font-size=\"13\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"2.09\" y1=\"60.44\" x2=\"20.17\" y2=\"70.88\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"5.58\" y1=\"58.84\" x2=\"19.81\" y2=\"67.05\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"68.36\" y1=\"36.06\" x2=\"56.34\" y2=\"29.12\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"56.34\" y1=\"29.12\" x2=\"38.25\" y2=\"39.56\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"38.25\" y1=\"39.56\" x2=\"20.17\" y2=\"29.12\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"20.17\" y1=\"29.12\" x2=\"2.09\" y2=\"39.56\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"2.09\" y1=\"39.56\" x2=\"2.09\" y2=\"60.44\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"20.17\" y1=\"70.88\" x2=\"38.25\" y2=\"60.44\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"38.25\" y1=\"39.56\" x2=\"38.25\" y2=\"60.44\" stroke=\"currentColor\" stroke-width=\"1.25\" /></g><line x1=\"160\" y1=\"65\" x2=\"230\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M230,65 L222.9,68.6 M230,65 L222.9,61.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"195\" y=\"57\" text-anchor=\"middle\" font-size=\"12\">heat</text><text x=\"195\" y=\"83\" text-anchor=\"middle\" font-size=\"12\">Diels–Alder</text><line x1=\"345\" y1=\"65\" x2=\"415\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M415,65 L407.9,68.6 M415,65 L407.9,61.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"380\" y=\"57\" text-anchor=\"middle\" font-size=\"12\">NaBH₄</text><text x=\"380\" y=\"83\" text-anchor=\"middle\" font-size=\"12\">MeOH</text><text x=\"84\" y=\"70\" text-anchor=\"middle\" font-size=\"15\">+</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-retrosynthesis',
  title: 'Retrosynthesis and Multistep Synthesis',
  summary: 'Plan syntheses by thinking backwards: disconnections, synthons and their real reagents, functional-group interconversion and protecting groups, a toolbox of every C–C bond-forming reaction in the course, four worked multistep syntheses, a brief look at polymers, and a look back over the whole course.',
  minutes: 22,
  objectives: [
    'Use retrosynthetic analysis: choose disconnections, identify synthons and translate them into real reagents',
    'Select C–C bond-forming reactions from the course toolbox by recognizing the pattern each leaves in a product',
    'Use functional-group interconversions and protecting groups to make a synthesis possible',
    'Plan the order of steps in aromatic syntheses using directing effects, and calculate overall yields of linear sequences',
    'Distinguish addition (chain-growth) from condensation (step-growth) polymers by their mechanisms',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Thinking backwards',
      blocks: [
        {
          type: 'p',
          text: 'Every lesson so far asked "given these reagents, what forms?". Synthesis asks the reverse: "given this target, what should I start with?". Working forward from thousands of possible starting materials is hopeless. Working **backwards** from the target, one bond at a time, is how chemists actually plan. E. J. Corey formalized this as [[ochem-retrosynthesis|retrosynthetic analysis]] and received the 1990 Nobel Prize in Chemistry for it.',
        },
        {
          type: 'definition',
          term: 'Disconnection and synthons',
          text: 'A [[ochem-disconnection|disconnection]] is an imaginary cut of a bond in the target, the reverse of a reaction you know. It produces two fragments called [[ochem-synthon|synthons]], idealized ions (a nucleophilic one and an electrophilic one) that may not exist. Each synthon is then replaced by a **synthetic equivalent**, a real reagent that behaves like it. The open arrow ⇒ means "can be made from".',
        },
        {
          type: 'figure',
          svg: FIG.disc,
          alt: 'Retrosynthesis of 2-phenyl-2-butanol. A red wavy line cuts the bond between the carbinol carbon and the phenyl ring; an open arrow points to two synthons: an electrophilic +C(OH)(CH3)CH2CH3 and a nucleophilic C6H5−. Their synthetic equivalents are 2-butanone (whose carbonyl carbon is the electrophilic carbon) and phenylmagnesium bromide.',
          caption: 'A carbon bearing an OH next to the new bond is the fingerprint of a Grignard addition: the OH carbon was a C=O. The negative synthon $\\ce{C6H5-}$ is "delivered" by $\\ce{C6H5MgBr}$; the positive synthon by the ketone.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Look for patterns** that a known reaction leaves behind (an OH next to a branch point, a β-hydroxy carbonyl, a cyclohexene, an aryl ketone).',
            '**Disconnect near functional groups**, usually a C–C bond one or two atoms from the functional group, or a C–heteroatom bond.',
            '**Prefer disconnections that simplify**: break the molecule near its middle, into pieces of similar size, at branch points.',
            '**Translate synthons into reagents**, then repeat on each piece until you reach simple, buyable compounds.',
            '**Check the forward direction**: chemoselectivity (will the reagent attack something else?), regiochemistry, stereochemistry.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Search in a tree',
          text: 'Retrosynthesis is a tree search: each node is a molecule, each edge a known reaction run backwards, and you want a path to leaves that are cheap starting materials. Corey\'s group wrote one of the first programs for it (LHASA) in the late 1960s; modern tools combine reaction databases with machine-learning scores and heuristics similar to game-tree search, the same family of algorithms behind chess and Go engines.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'A synthon is the reagent you actually put in the flask.',
      answer: false,
      explanation: 'A synthon is an idealized fragment, often an ion such as $\\ce{C6H5-}$ or $\\ce{CH3CO+}$, that may be far too reactive to exist. The **synthetic equivalent** is the real reagent that behaves like it: $\\ce{C6H5MgBr}$ for $\\ce{C6H5-}$, an acid chloride with $\\ce{AlCl3}$ for $\\ce{CH3CO+}$, a ketone for a carbocation carrying an OH.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The C–C bond-forming toolbox',
      blocks: [
        {
          type: 'p',
          text: 'Making carbon skeletons is the hard part of synthesis; changing functional groups is comparatively easy. Here is every C–C bond-forming reaction from the course, organized by the **pattern it leaves**, which is what you look for in a target.',
        },
        {
          type: 'table',
          headers: ['Reaction', 'Reagents', 'Pattern in the product'],
          rows: [
            ['[[ochem-grignard-reagent|Grignard]] + aldehyde/ketone', '$\\ce{RMgBr}$; then $\\ce{H3O+}$', 'alcohol on the carbon next to the new bond'],
            ['Grignard + ester', '2 $\\ce{RMgBr}$; then $\\ce{H3O+}$', '3° alcohol with two identical R groups'],
            ['Grignard + $\\ce{CO2}$ / nitrile', '$\\ce{RMgBr}$; $\\ce{CO2}$ / $\\ce{RCN}$', 'carboxylic acid / ketone, one carbon added'],
            ['Acetylide alkylation', '$\\ce{NaNH2}$; primary $\\ce{RX}$', 'alkyne (then ketone, cis or trans alkene, alkane)'],
            ['Cyanide SN2', '$\\ce{NaCN}$; primary $\\ce{RX}$', 'nitrile → acid, amine; one carbon added'],
            ['Enolate alkylation', 'LDA; primary $\\ce{RX}$', 'new alkyl group α to a C=O'],
            ['Aldol (condensation)', 'NaOH (heat)', 'β-hydroxy carbonyl (α,β-unsaturated carbonyl)'],
            ['Claisen / Dieckmann', 'NaOEt; $\\ce{H3O+}$', 'β-keto ester'],
            ['Michael / Robinson', 'stabilized enolate + enone', '1,5-dicarbonyl / fused cyclohexenone'],
            ['[[ochem-wittig-reaction|Wittig]]', '$\\ce{Ph3P=CHR}$ + C=O', 'C=C exactly where the C=O was'],
            ['[[ochem-diels-alder|Diels–Alder]]', 'diene + dienophile, heat', 'cyclohexene, with stereospecific substituents'],
            ['[[ochem-friedel-crafts|Friedel–Crafts]] acylation / alkylation', '$\\ce{RCOCl}$ or $\\ce{RCl}$, $\\ce{AlCl3}$', 'aryl ketone / alkylbenzene'],
          ],
          caption: 'Read the third column when you look at a target; read the second when you write the forward synthesis.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What exam synthesis problems test',
          text: 'Almost every synthesis question combines one or two C–C bond-forming steps from this table with a few functional-group changes, and hides one trap: a reagent that would also attack another group (needs protection), a directing effect that sets the order of aromatic steps, or a substrate that cannot do SN2 (tertiary halides). Find the C–C bonds that are new first, then worry about the rest.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Choose the reaction from the toolbox.',
      template: 'To make a C=C at exactly the position of an existing C=O, use a ___ reaction. To build a cyclohexene ring in one step from two pieces, use a ___ reaction. To attach $\\ce{CH3CO-}$ to a benzene ring, use a Friedel–Crafts ___. To make a β-keto ester, use a ___ condensation.',
      blanks: [{ answers: ['Wittig'] }, { answers: ['Diels–Alder'] }, { answers: ['acylation'] }, { answers: ['Claisen'] }],
      wordBank: ['Wittig', 'Diels–Alder', 'acylation', 'alkylation', 'Claisen', 'aldol', 'Grignard'],
      explanation: 'Wittig converts C=O into C=C with no ambiguity about the alkene position (unlike dehydration of an alcohol). Diels–Alder joins a diene and a dienophile into a cyclohexene, forming two C–C bonds at once. Friedel–Crafts **acylation** installs an acyl group without rearrangement or overalkylation (alkylation suffers from both). The Claisen condensation of two esters gives a β-keto ester.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'Which of these routes does **not** give 3-phenyl-3-pentanol, $\\ce{(CH3CH2)2C(OH)C6H5}$?',
      options: [
        { text: '$\\ce{C6H5MgBr}$ + 3-pentanone, then $\\ce{H3O+}$', why: 'Valid: disconnect the C–phenyl bond. The ketone supplies the carbinol carbon and both ethyls.' },
        { text: '$\\ce{CH3CH2MgBr}$ + 1-phenyl-1-propanone ($\\ce{C6H5COCH2CH3}$), then $\\ce{H3O+}$', why: 'Valid: disconnect one C–ethyl bond. The ketone already has the phenyl and one ethyl.' },
        { text: '2 $\\ce{CH3CH2MgBr}$ + methyl benzoate, then $\\ce{H3O+}$', why: 'Valid: two identical ethyl groups on the carbinol carbon point to a Grignard + ester disconnection.' },
        { text: '$\\ce{CH3CH2MgBr}$ + benzaldehyde, then $\\ce{H3O+}$', correct: true, why: 'This adds only one ethyl to an aldehyde, giving 1-phenyl-1-propanol, a secondary alcohol with an H on the carbinol carbon.' },
      ],
      explanation: 'A tertiary alcohol can be disconnected at any of the three C–C bonds to the carbinol carbon, and when two groups are identical, both at once (ester + 2 RMgBr). Most targets have several good routes; the one you choose depends on cost and on what else is in the molecule. Benzaldehyde is one oxidation level too low and lacks the second ethyl.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Functional-group interconversion and protecting groups',
      blocks: [
        {
          type: 'p',
          text: 'Often the target does not contain the pattern a C–C reaction needs, but a simple change would create it. A **functional-group interconversion** ([[ochem-fgi|FGI]]) is a retrosynthetic step that changes one group into another without touching the skeleton: a ketone ⇒ secondary alcohol (oxidation forward), an alkane ⇒ alkene (hydrogenation forward), an amine ⇒ amide or nitrile (reduction forward). You can then disconnect the new group.',
        },
        {
          type: 'table',
          headers: ['Target group', 'Can be made from (FGI)', 'Forward reagent'],
          rows: [
            ['ketone, aldehyde', 'secondary, primary alcohol', 'PCC, $\\ce{H2CrO4}$, Swern'],
            ['alcohol', 'ketone/aldehyde/ester', '$\\ce{NaBH4}$, $\\ce{LiAlH4}$'],
            ['alkane', 'alkene or alkyne', '$\\ce{H2}$, Pd'],
            ['alkene', 'alcohol or alkyl halide', '$\\ce{H2SO4}$ heat / strong base (E2)'],
            ['amine', 'amide, nitrile, imine, nitro', '$\\ce{LiAlH4}$; $\\ce{NaBH3CN}$; $\\ce{H2}$, Pd'],
            ['carboxylic acid', 'primary alcohol, nitrile, ester', '$\\ce{H2CrO4}$; $\\ce{H3O+}$, heat'],
          ],
        },
        {
          type: 'p',
          text: 'Sometimes the problem is the opposite: a molecule has **two** groups that would both react. A [[ochem-protecting-group|protecting group]] temporarily converts one of them into something inert under the coming conditions, and is removed afterward. Classic pairs: a ketone or aldehyde as an [[ochem-acetal|acetal]] (stable to bases, Grignards and hydrides; removed by aqueous acid); an alcohol as a silyl ether (removed by fluoride); an amine as an amide or carbamate.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why protection works',
          text: 'Protection exploits the reactivity differences you have learned. An acetal has no C=O π bond, so a Grignard reagent (which needs a π* LUMO to attack) has nothing to add to, and it has no acidic H to destroy the Grignard. Acid hydrolysis, which the Grignard step never sees, then restores the ketone. Every protecting group is a reversible reaction chosen to be stable to one set of conditions and labile to another.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Worked syntheses 1 and 2: alkyne chemistry and aromatic order',
      blocks: [
        {
          type: 'heading',
          text: 'Synthesis 1: 2-hexanone from acetylene and 1-bromobutane',
        },
        {
          type: 'figure',
          svg: FIG.synA,
          alt: 'Acetylene with 1. NaNH2, 2. 1-bromobutane gives 1-hexyne. Hydration with water, H2SO4 and HgSO4 gives 2-hexanone.',
          caption: 'Retrosynthesis: a methyl ketone ⇐ Markovnikov hydration of a terminal alkyne (FGI) ⇐ acetylide + primary alkyl halide (C–C disconnection). The acetylide carbon is the nucleophilic synthon, the bromide carbon the electrophilic one.',
        },
        {
          type: 'derivation',
          title: 'Planning 2-hexanone',
          steps: [
            { tex: '\\ce{CH3COCH2CH2CH2CH3}', why: 'Target: a methyl ketone with an unbranched butyl group.' },
            { tex: '\\Rightarrow\\ \\ce{HC#C-CH2CH2CH2CH3}', why: 'FGI: Markovnikov hydration of a terminal alkyne puts the C=O on C2, exactly a methyl ketone. (Hydroboration–oxidation would give hexanal instead.)' },
            { tex: '\\Rightarrow\\ \\ce{HC#C^-} + \\ce{^+CH2CH2CH2CH3}', why: 'Disconnect the C–C bond next to the triple bond: an acetylide synthon and a butyl cation synthon.' },
            { tex: '\\ce{HC#CH + NaNH2},\\ \\ce{BrCH2CH2CH2CH3}', why: 'Synthetic equivalents: sodium acetylide (acetylene pKa 25, amide base pKaH 38) and 1-bromobutane, a primary halide that does clean SN2.' },
          ],
          result: 'Two steps forward: alkylation, then hydration. The same disconnection fails for branched targets that would need a tertiary halide.',
        },
        {
          type: 'heading',
          text: 'Synthesis 2: order matters on a benzene ring',
        },
        {
          type: 'figure',
          svg: FIG.synB,
          alt: 'Two routes from benzene. Top: bromination (Br2, FeBr3) gives bromobenzene, then Friedel–Crafts acylation with propanoyl chloride and AlCl3 gives the para product, 1-(4-bromophenyl)propan-1-one. Bottom: acylation first gives propiophenone, then bromination gives the meta product, 1-(3-bromophenyl)propan-1-one.',
          caption: 'Same two reactions, opposite order, different products. Bromine is an ortho/para director (para wins on steric grounds); the acyl group is a meta director. Decide the order by asking which group must direct the other.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student plans 3-bromobenzoic acid from benzene. Tap the first incorrect line.',
      lines: [
        'The two groups are meta to each other, so the first group installed must be a meta director.',
        'Step 1: Friedel–Crafts alkylation with $\\ce{CH3Cl}$, $\\ce{AlCl3}$ gives toluene; its methyl will later be oxidized to the meta-directing COOH.',
        'Step 2: $\\ce{Br2}$, $\\ce{FeBr3}$ brominates toluene meta to the methyl group.',
        'Step 3: hot $\\ce{KMnO4}$ oxidizes the methyl group to $\\ce{COOH}$, giving 3-bromobenzoic acid.',
      ],
      errorLines: [3],
      explanation: 'A methyl group is an ortho/para director, so bromination of toluene gives mainly 2- and 4-bromotoluene, and the route would end at 4-bromobenzoic acid. Correct plan: toluene → $\\ce{KMnO4}$ → benzoic acid (COOH is a meta director) → $\\ce{Br2}$, $\\ce{FeBr3}$ → 3-bromobenzoic acid. FGI changes the directing effect, so oxidize first.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Worked syntheses 3 and 4: protection and cycloaddition',
      blocks: [
        {
          type: 'heading',
          text: 'Synthesis 3: a Grignard reaction that needs a protecting group',
        },
        {
          type: 'figure',
          svg: FIG.synC,
          alt: 'Ethyl 4-oxopentanoate (a ketone and an ethyl ester) with ethylene glycol and TsOH gives the ethylene acetal of the ketone. Then 1. two equivalents of CH3MgBr, 2. H3O+ (which also removes the acetal) give 5-hydroxy-5-methyl-2-hexanone. A note says that without protection CH3MgBr would attack the ketone first.',
          caption: 'Target: the ester must become a tertiary alcohol with two methyls (2 $\\ce{CH3MgBr}$), but the ketone must survive. Ketones are more reactive than esters toward Grignards, so the ketone is masked as an acetal, then unmasked by the acidic workup that the Grignard step needs anyway.',
        },
        {
          type: 'heading',
          text: 'Synthesis 4: two C–C bonds at once',
        },
        {
          type: 'figure',
          svg: FIG.synD,
          alt: '1,3-Butadiene plus acrolein (propenal) with heat gives cyclohex-3-ene-1-carbaldehyde by a Diels–Alder reaction. NaBH4 in methanol reduces the aldehyde to (cyclohex-3-en-1-yl)methanol.',
          caption: 'Retrosynthesis: primary alcohol ⇒ aldehyde (FGI); a cyclohexene carrying an electron-withdrawing group ⇒ Diels–Alder of butadiene and an activated dienophile. $\\ce{NaBH4}$ reduces the C=O and leaves the isolated C=C untouched.',
        },
        {
          type: 'p',
          text: 'Notice the rhythm in all four: one or two skeleton-building steps chosen by recognizing a pattern, wrapped in FGIs and occasionally a protecting group. Real syntheses of drugs and natural products follow the same logic, just with more steps.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Order the steps that convert ethyl 4-oxopentanoate into 5-hydroxy-5-methyl-2-hexanone.',
      lines: [
        'Protect the ketone: ethylene glycol, TsOH (remove water).',
        'Add two equivalents of $\\ce{CH3MgBr}$ in ether; the ester becomes a magnesium alkoxide.',
        'Add aqueous acid: it protonates the alkoxide.',
        'The same acid hydrolyzes the acetal, revealing the ketone again.',
      ],
      explanation: 'Protect, react, work up, deprotect. The ester is attacked twice (substitution, then addition to the intermediate ketone), giving a tertiary alcohol with two new methyls. The acetal, having no C=O and no acidic H, is untouched until aqueous acid opens it.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Counting the cost: overall yield',
      blocks: [
        {
          type: 'p',
          text: 'In a **linear** synthesis, each step works on the product of the last, so yields multiply. Five steps at 80% each give $0.8^5 = 33\\%$ overall. This is why chemists prize short routes, high-yielding reactions, and **convergent** plans that make two halves separately and join them late, so that fewer steps lie in the longest chain.',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0, 1.05],
          xStep: 2,
          yStep: 0.25,
          functions: [{ expr: 'p^x', label: 'overall yield $= p^n$', color: 'blue', domain: [0, 20] }],
          points: [{ x: 10, y: 'p^10', label: '10 steps', color: 'red' }],
          hlines: [{ y: 0.5, label: '50%', color: 'gray' }],
          sliders: [{ name: 'p', min: 0.5, max: 0.99, step: 0.01, value: 0.9, label: 'yield per step' }],
          readouts: [
            { label: 'overall yield after 10 steps $=$', expr: 'p^10', digits: 3 },
            { label: 'steps until below 50% $\\approx$', expr: 'ln(0.5)/ln(p)', digits: 1 },
          ],
          caption: 'Overall yield of an $n$-step linear synthesis with the same yield $p$ in every step. At 90% per step, ten steps leave 35%; at 70%, ten steps leave 3%. Industrial drug routes fight for every percent.',
        },
        {
          type: 'derivation',
          title: 'A four-step sequence',
          steps: [
            { tex: 'Y = y_1 y_2 y_3 y_4', why: 'Each step converts a fraction $y_i$ of what it receives.' },
            { tex: 'Y = 0.80 \\times 0.75 \\times 0.90 \\times 0.85', why: 'Example yields.' },
            { tex: 'Y = 0.459 \\approx 46\\%', why: 'Multiply. The lowest-yielding step (75%) costs the most; improving it helps more than polishing a 90% step.' },
          ],
          result: 'Starting with 1.00 mol of material, you finish with 0.459 mol of product.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A linear synthesis has steps with yields of 92%, 65%, 88% and 95%. What is the overall yield, as a percentage? Give one decimal place.',
      hint: 'Multiply the fractional yields, then multiply by 100.',
      label: 'overall yield $=$',
      unit: '%',
      answer: '100*0.92*0.65*0.88*0.95',
      answerTex: '50.0\\%',
      tolerance: 0.05,
      explanation: '$0.92 \\times 0.65 = 0.598$; $\\times 0.88 = 0.526$; $\\times 0.95 = 0.500$. Overall: $50.0\\%$. The 65% step alone halves the material that the other three steps lose only a quarter of; that is the step to optimize.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'If every step of a linear synthesis gives 90%, what is the **smallest** number of steps for which the overall yield falls below 50%?',
      hint: 'Find the smallest whole $n$ with $0.9^n < 0.5$. Try $n = 6$ and $n = 7$, or use $n > \\ln 0.5/\\ln 0.9$.',
      label: '$n =$',
      answer: '7',
      explanation: '$\\ln 0.5 / \\ln 0.9 = 6.58$, so $n = 7$ is the first whole number past it. Check: $0.9^6 = 0.531$ (still above 50%), $0.9^7 = 0.478$ (below). Even excellent steps add up quickly; a 20-step natural-product synthesis at 90% per step gives about 12%.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Polymers: the same reactions, thousands of times',
      blocks: [
        {
          type: 'p',
          text: 'A polymer is a molecule built from many repeating units (monomers). Polymer chemistry is not a new kind of chemistry: it is reactions from this course run thousands of times on the same chain. There are two families, distinguished by mechanism.',
        },
        {
          type: 'table',
          headers: ['Feature', '[[ochem-addition-polymer|Addition (chain-growth)]]', '[[ochem-condensation-polymer|Condensation (step-growth)]]'],
          rows: [
            ['mechanism', 'an initiator (radical, cation or anion) adds to an alkene C=C; the chain end adds monomer after monomer', 'two different functional groups react (acyl substitution, usually), releasing a small molecule such as $\\ce{H2O}$ or HCl'],
            ['monomers', 'alkenes: ethylene, propene, styrene, vinyl chloride', 'bifunctional: diacid + diol, diacid (chloride) + diamine'],
            ['backbone', 'all C–C bonds', 'ester or amide links in the chain'],
            ['examples', 'polyethylene, polypropylene, polystyrene, PVC, Teflon', 'PET (polyester), nylon-6,6 (polyamide), Kevlar'],
            ['chemistry you know', 'radical chain reactions, alkene addition', 'Fischer esterification, acid chloride + amine'],
          ],
        },
        {
          type: 'p',
          text: 'Nylon-6,6 is hexanedioyl (adipoyl) chloride plus hexane-1,6-diamine: each amide bond forms exactly as in the acyl substitution lesson, and the "6,6" counts the carbons in each monomer. PET, the polyester of soda bottles, joins terephthalic acid and ethylene glycol by esterification. The amide links of nylon even hydrogen-bond between chains like the backbone of a β-sheet protein, which is why nylon fibers are strong.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why condensation polymers can be recycled chemically',
          text: 'Because their backbones are esters and amides, condensation polymers can be taken apart by the reverse reactions: hydrolysis or alcoholysis of PET regenerates its monomers, which can be purified and repolymerized. Polyethylene\'s all-carbon backbone has no such weak point, which is part of why it persists in the environment for centuries.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Nylon-6,6 is made from hexanedioic acid (or its diacid chloride) and hexane-1,6-diamine. Which description is correct?',
      options: [
        { text: 'A condensation polymer whose chain is held together by amide bonds', correct: true, why: 'Each amine attacks an acyl group by addition–elimination, releasing water (or HCl). The repeating link is an amide, as in proteins.' },
        { text: 'An addition polymer made by radical polymerization of C=C bonds', why: 'Neither monomer has a C=C. Addition polymers come from alkenes such as ethylene or styrene.' },
        { text: 'A condensation polymer whose chain is held together by ester bonds', why: 'Esters come from acids and alcohols (as in PET). An amine gives an amide.' },
        { text: 'A polymer with an all-carbon backbone', why: 'Every repeat unit contains two N–C(=O) links in the main chain; all-carbon backbones belong to addition polymers.' },
      ],
      explanation: 'Classify by the bond that forms between monomers. Two different functional groups reacting by acyl substitution and losing a small molecule means step-growth condensation; here amine + acid derivative → amide. Nylon is, chemically, a synthetic protein backbone without side chains.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Looking back over the course',
      blocks: [
        {
          type: 'p',
          text: 'You started this course drawing bond-line structures and pushing your first curved arrows. You finish it planning multistep syntheses of molecules you have never seen. That progress rests on a small number of ideas that have appeared in every unit.',
        },
        {
          type: 'table',
          headers: ['Big idea', 'Where it carried you'],
          rows: [
            ['Structure decides reactivity', 'hybridization, resonance and induction explained acidity (unit 2), carbocation stability (5–6), aromaticity (9) and the reactivity ladder (11)'],
            ['Electrons flow from nucleophile to electrophile', 'one curved-arrow language for SN2 and SN1, E2 and E1, additions to alkenes, EAS, carbonyl additions, acyl substitution, enolates'],
            ['Shape in 3D matters', 'conformations and chairs (3), R/S and diastereomers (4), anti-periplanar E2, stereospecific additions, Diels–Alder, anomers'],
            ['Energy and equilibrium decide outcomes', 'pKa tables, Hammond postulate, kinetic versus thermodynamic control (enolates, dienes), Le Chatelier in Fischer esterification'],
            ['Spectra reveal structure', 'mass spec, IR, ¹H and ¹³C NMR (unit 8) turned unknowns into structures, and C=O frequencies even ranked reactivity'],
            ['Synthesis is reactions run backwards', 'every reaction became a disconnection, every reagent a synthetic equivalent'],
          ],
        },
        {
          type: 'p',
          text: 'The most important habit you have built is not memorizing reactions but **predicting** them: find the nucleophile and the electrophile, ask which bond breaks and why, check charges and stereochemistry, then compare the alternatives by energy. That habit works on reactions that are not in any textbook, which is exactly what research chemists, medicinal chemists and materials scientists do every day.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Molecules as data',
          text: 'Along the way you have met the computational side too: molecules as graphs of atoms and bonds, SMILES strings as a compact text format (`CC(=O)Oc1ccccc1C(=O)O` is aspirin; every structure drawn in this course was rendered from strings like it), spectra as sums of peaks, retrosynthesis as tree search. Cheminformatics, molecular simulation and machine-learning drug design all start from exactly these representations, if you ever want to bring your programming to chemistry.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Where to go next',
          text: 'Natural next steps are biochemistry (enzyme mechanisms are the reactions of this course, catalyzed), advanced organic chemistry (pericyclic reactions, organometallic catalysis such as palladium cross-coupling, asymmetric synthesis), and physical organic chemistry (the quantitative side of mechanisms). Keep drawing arrows. Congratulations on finishing organic chemistry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'A final prediction. 4-Oxocyclohexanecarbaldehyde (a ketone and an aldehyde on one ring) is treated with one equivalent of $\\ce{NaBH4}$ at −78 °C. Which group is reduced, and why?',
      options: [
        { text: 'The aldehyde, because aldehydes are less hindered and more electrophilic than ketones', correct: true, why: 'An aldehyde carbon has only one carbon substituent (less steric hindrance, less electron donation), so hydride adds to it much faster. At low temperature with one equivalent, that selectivity is usable: chemoselectivity from first principles.' },
        { text: 'The ketone, because ketones are more stable', why: 'More stable means **less** reactive. The ketone\'s two alkyl groups donate electron density and block the approach of the hydride.' },
        { text: 'Both equally, because $\\ce{NaBH4}$ cannot distinguish carbonyl groups', why: '$\\ce{NaBH4}$ reacts with aldehydes considerably faster than with ketones; with limited reagent and low temperature the aldehyde wins.' },
        { text: 'Neither, because $\\ce{NaBH4}$ only reduces esters', why: 'It is the other way round: $\\ce{NaBH4}$ reduces aldehydes and ketones but not esters.' },
      ],
      explanation: 'This is the course in one question: you have not seen this molecule before, but by asking which carbonyl carbon is more electrophilic and more accessible, you can predict the outcome. The product is 4-(hydroxymethyl)cyclohexanone. If you wanted the ketone reduced instead, you would protect the aldehyde first (it forms acetals faster, too), reduce, and deprotect.',
    },
  ],
  takeaways: [
    'Retrosynthesis works backwards: disconnect a bond (⇒), identify the nucleophilic and electrophilic synthons, and replace them with real synthetic equivalents.',
    'Recognize each C–C bond-forming reaction by the pattern it leaves: alcohol next to the new bond (Grignard), β-hydroxy carbonyl or enone (aldol), β-keto ester (Claisen), C=C from C=O (Wittig), cyclohexene (Diels–Alder), aryl ketone (Friedel–Crafts).',
    'Functional-group interconversions create the pattern you need; protecting groups (acetals, silyl ethers, amides) hide groups that would react.',
    'On benzene rings, the order of steps is set by directing effects; oxidation or reduction can change a group\'s directing effect.',
    'Yields multiply in a linear synthesis ($Y = \\prod y_i$); short and convergent routes win.',
    'Addition polymers grow by repeated alkene additions (all-carbon backbone); condensation polymers grow by acyl substitution between bifunctional monomers (polyesters, polyamides).',
    'The course in one habit: find the nucleophile and electrophile, push the arrows, and compare alternatives by energy and structure.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'The synthesis sections at the end of each chapter, and chapter 31 (Synthetic Polymers), apply exactly this lesson\'s strategy.',
    },
    {
      title: 'Wikipedia — Retrosynthetic analysis',
      url: 'https://en.wikipedia.org/wiki/Retrosynthetic_analysis',
      source: 'wikipedia',
      note: 'Corey\'s terminology (synthons, synthetic equivalents, disconnections) with classic examples.',
    },
    {
      title: 'Wikipedia — Simplified molecular-input line-entry system',
      url: 'https://en.wikipedia.org/wiki/Simplified_molecular-input_line-entry_system',
      source: 'wikipedia',
      note: 'The SMILES string format used to draw every molecule in this course: rings, branches, stereochemistry and aromaticity as text.',
    },
    {
      title: 'MIT OpenCourseWare 5.12 Organic Chemistry I',
      url: 'https://ocw.mit.edu/courses/5-12-organic-chemistry-i-spring-2005/',
      source: 'other',
      note: 'Lecture notes and problem sets from a full university course, a good place to keep practicing.',
    },
  ],
};
