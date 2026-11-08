import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  acetal: "<svg viewBox=\"0 0 520 330\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" font-size=\"13\" class=\"t-blue\" font-weight=\"600\">Part 1: hemiacetal</text><text x=\"45\" y=\"58.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><text x=\"18\" y=\"106.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"72\" y=\"106.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"42.6\" y1=\"85\" x2=\"42.6\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"47.4\" y1=\"85\" x2=\"47.4\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"45\" y1=\"85\" x2=\"24.9\" y2=\"96.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"45\" y1=\"85\" x2=\"63\" y2=\"95.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"80\" y1=\"75\" x2=\"125\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M125,75 L117.9,78.6 M125,75 L117.9,71.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"102.5\" y=\"67\" text-anchor=\"middle\" font-size=\"12\">H⁺</text><text x=\"102.5\" y=\"93\" text-anchor=\"middle\" font-size=\"12\">①</text><text x=\"160\" y=\"58.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH</text><text x=\"133\" y=\"106.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"187\" y=\"106.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"157.6\" y1=\"85\" x2=\"157.6\" y2=\"63.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"162.4\" y1=\"85\" x2=\"162.4\" y2=\"63.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"160\" y1=\"85\" x2=\"139.9\" y2=\"96.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"160\" y1=\"85\" x2=\"178\" y2=\"95.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"176\" cy=\"47\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"172.8\" y1=\"47\" x2=\"179.2\" y2=\"47\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"176\" y1=\"43.8\" x2=\"176\" y2=\"50.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"215\" y=\"50.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-red\">:OR–H</text><path d=\"M222,40 Q182.1,46.3 163,82\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M163,82 L163.4,74 L169.4,77.2 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"275\" y1=\"75\" x2=\"320\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M320,75 L312.9,78.6 M320,75 L312.9,71.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"297.5\" y=\"67\" text-anchor=\"middle\" font-size=\"12\">ROH adds</text><text x=\"297.5\" y=\"93\" text-anchor=\"middle\" font-size=\"12\">②, ③ −H⁺</text><text x=\"370\" y=\"58.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH</text><text x=\"395\" y=\"94.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-red\">OR</text><text x=\"342\" y=\"102.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"366\" y=\"122.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"370\" y1=\"85\" x2=\"370\" y2=\"63.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"370\" y1=\"85\" x2=\"393.1\" y2=\"88.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"370\" y1=\"85\" x2=\"349.4\" y2=\"93.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"370\" y1=\"85\" x2=\"367.3\" y2=\"106.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"390\" y=\"140\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">hemiacetal</text><line x1=\"10\" y1=\"160\" x2=\"510\" y2=\"160\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.6\" stroke-dasharray=\"2 4\"/><text x=\"8\" y=\"178\" text-anchor=\"start\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Part 2: acetal</text><text x=\"50\" y=\"228.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OH₂⁺</text><text x=\"75\" y=\"264.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-red\">OR</text><text x=\"22\" y=\"272.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"46\" y=\"292.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"50\" y1=\"255\" x2=\"50\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"50\" y1=\"255\" x2=\"73.1\" y2=\"258.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"50\" y1=\"255\" x2=\"29.4\" y2=\"263.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"50\" y1=\"255\" x2=\"47.3\" y2=\"276.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M47,239 Q28.8,236.6 34,219\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M34,219 L35.2,226.9 L28.7,225 Z\" fill=\"currentColor\" class=\"f-red\"/><circle cx=\"83.2\" cy=\"246\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"76.8\" cy=\"246\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M77,243 Q81.8,260.3 65,254\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M65,254 L73,253.3 L70.6,259.7 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"50\" y=\"310\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">④ H⁺ on OH</text><line x1=\"130\" y1=\"245\" x2=\"175\" y2=\"245\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M175,245 L167.9,248.6 M175,245 L167.9,241.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"152.5\" y=\"237\" text-anchor=\"middle\" font-size=\"12\">− H₂O</text><text x=\"152.5\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">⑤</text><text x=\"250\" y=\"260.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-red\">OR</text><text x=\"205\" y=\"282.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"205\" y=\"238.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"225\" y1=\"252.6\" x2=\"248\" y2=\"252.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"225\" y1=\"257.4\" x2=\"248\" y2=\"257.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"225\" y1=\"255\" x2=\"210.4\" y2=\"271.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"225\" y1=\"255\" x2=\"212.1\" y2=\"240.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"277\" cy=\"240\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"273.8\" y1=\"240\" x2=\"280.2\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"277\" y1=\"236.8\" x2=\"277\" y2=\"243.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"240\" y=\"305\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">oxocarbenium ion</text><line x1=\"300\" y1=\"245\" x2=\"345\" y2=\"245\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M345,245 L337.9,248.6 M345,245 L337.9,241.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"322.5\" y=\"237\" text-anchor=\"middle\" font-size=\"12\">ROH</text><text x=\"322.5\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">⑥, ⑦ −H⁺</text><text x=\"395\" y=\"228.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OR</text><text x=\"420\" y=\"264.4\" text-anchor=\"start\" font-size=\"15\" class=\"t-red\">OR</text><text x=\"367\" y=\"272.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"391\" y=\"292.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"395\" y1=\"255\" x2=\"395\" y2=\"233.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"395\" y1=\"255\" x2=\"418.1\" y2=\"258.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"395\" y1=\"255\" x2=\"374.4\" y2=\"263.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"395\" y1=\"255\" x2=\"392.3\" y2=\"276.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"415\" y=\"310\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">acetal</text></svg>",
  protect: "<svg viewBox=\"0 0 520 290\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,10)\"><text x=\"116.12\" y=\"19.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"53.77\" y=\"79.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"32.98\" y=\"43.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"123.37\" y1=\"40.04\" x2=\"123.37\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"119.77\" y1=\"40.04\" x2=\"119.77\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"57.42\" y1=\"49.96\" x2=\"57.42\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.02\" y1=\"49.96\" x2=\"61.02\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"142.35\" y1=\"51\" x2=\"121.57\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"121.57\" y1=\"39\" x2=\"100.78\" y2=\"51\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"100.78\" y1=\"51\" x2=\"80\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"80\" y1=\"39\" x2=\"59.22\" y2=\"51\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"59.22\" y1=\"51\" x2=\"44.88\" y2=\"42.72\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"31.98\" y1=\"42.72\" x2=\"17.65\" y2=\"51\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"13\">keto ester</text><g transform=\"translate(300,5)\"><text x=\"118.94\" y=\"22.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"139.72\" y=\"58.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"34.66\" y=\"48.48\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"54.08\" y=\"82.11\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"126.18\" y1=\"42.61\" x2=\"126.18\" y2=\"24.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"122.58\" y1=\"42.61\" x2=\"122.58\" y2=\"24.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"82.16\" y1=\"66.64\" x2=\"62.03\" y2=\"53.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.03\" y1=\"53.57\" x2=\"82.82\" y2=\"41.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"82.82\" y1=\"41.57\" x2=\"103.6\" y2=\"53.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"103.6\" y1=\"53.57\" x2=\"124.38\" y2=\"41.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"124.38\" y1=\"41.57\" x2=\"138.72\" y2=\"49.85\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"151.62\" y1=\"49.85\" x2=\"165.95\" y2=\"41.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.03\" y1=\"53.57\" x2=\"46.55\" y2=\"46.68\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"33.8\" y1=\"50.81\" x2=\"24.05\" y2=\"61.64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"24.05\" y1=\"61.64\" x2=\"36.05\" y2=\"82.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"36.05\" y1=\"82.43\" x2=\"53.08\" y2=\"78.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"62.03\" y1=\"53.57\" x2=\"60.26\" y2=\"70.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"395\" y=\"119\" text-anchor=\"middle\" font-size=\"13\">ketone protected as an acetal</text><g transform=\"translate(300,160)\"><text x=\"145.12\" y=\"46.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"156.01\" y=\"46.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"40.05\" y=\"36.48\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"59.47\" y=\"70.11\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"87.55\" y1=\"54.64\" x2=\"67.42\" y2=\"41.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"67.42\" y1=\"41.57\" x2=\"88.21\" y2=\"29.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"88.21\" y1=\"29.57\" x2=\"108.99\" y2=\"41.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"108.99\" y1=\"41.57\" x2=\"129.78\" y2=\"29.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"129.78\" y1=\"29.57\" x2=\"144.12\" y2=\"37.85\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"67.42\" y1=\"41.57\" x2=\"51.94\" y2=\"34.68\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"39.19\" y1=\"38.81\" x2=\"29.44\" y2=\"49.64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"29.44\" y1=\"49.64\" x2=\"41.44\" y2=\"70.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"41.44\" y1=\"70.43\" x2=\"58.47\" y2=\"66.81\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"67.42\" y1=\"41.57\" x2=\"65.65\" y2=\"58.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"390\" y=\"274\" text-anchor=\"middle\" font-size=\"13\">ester reduced; acetal untouched</text><g transform=\"translate(0,165)\"><text x=\"105.73\" y=\"67.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"22.59\" y=\"43.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"12.48\" y=\"43.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"109.38\" y1=\"37.96\" x2=\"109.38\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"112.98\" y1=\"37.96\" x2=\"112.98\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"131.96\" y1=\"27\" x2=\"111.18\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"111.18\" y1=\"39\" x2=\"90.39\" y2=\"27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"90.39\" y1=\"27\" x2=\"69.61\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"69.61\" y1=\"39\" x2=\"48.82\" y2=\"27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.82\" y1=\"27\" x2=\"34.48\" y2=\"35.28\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"80\" y=\"269\" text-anchor=\"middle\" font-size=\"13\">5-hydroxypentan-2-one</text><line x1=\"165\" y1=\"55\" x2=\"295\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M295,55 L287.9,58.6 M295,55 L287.9,51.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"230\" y=\"47\" text-anchor=\"middle\" font-size=\"12\">HOCH₂CH₂OH, H⁺</text><text x=\"230\" y=\"73\" text-anchor=\"middle\" font-size=\"12\">remove H₂O</text><line x1=\"395\" y1=\"128\" x2=\"395\" y2=\"162\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M395,162 L391.4,154.9 M395,162 L398.6,154.9\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"295\" y1=\"210\" x2=\"165\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M165,210 L172.1,206.4 M165,210 L172.1,213.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"230\" y=\"202\" text-anchor=\"middle\" font-size=\"12\">H₃O⁺</text><text x=\"230\" y=\"228\" text-anchor=\"middle\" font-size=\"12\">(deprotect)</text><text x=\"385\" y=\"150\" text-anchor=\"end\" font-size=\"12\">1. LiAlH₄  2. H₂O (no acid)</text></svg>",
  imine: "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,15)\"><text x=\"68.23\" y=\"28.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"52.89\" y1=\"37.58\" x2=\"68.13\" y2=\"28.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.09\" y1=\"34.46\" x2=\"66.33\" y2=\"25.66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.89\" y1=\"35.5\" x2=\"32.11\" y2=\"23.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"32.11\" y1=\"23.5\" x2=\"11.32\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"11.32\" y1=\"35.5\" x2=\"11.32\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"11.32\" y1=\"59.5\" x2=\"32.11\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"32.11\" y1=\"71.5\" x2=\"52.89\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.89\" y1=\"35.5\" x2=\"52.89\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(175,15)\"><text x=\"70.73\" y=\"28.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"81.84\" y=\"22.5\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><text x=\"70.73\" y=\"14.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"55\" y1=\"37.58\" x2=\"70.63\" y2=\"28.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.2\" y1=\"34.46\" x2=\"68.83\" y2=\"25.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"96.57\" y1=\"35.5\" x2=\"81.84\" y2=\"27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55\" y1=\"35.5\" x2=\"34.22\" y2=\"23.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.22\" y1=\"23.5\" x2=\"13.43\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"13.43\" y1=\"35.5\" x2=\"13.43\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"13.43\" y1=\"59.5\" x2=\"34.22\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.22\" y1=\"71.5\" x2=\"55\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55\" y1=\"35.5\" x2=\"55\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"230\" y=\"124\" text-anchor=\"middle\" font-size=\"13\">iminium ion</text><g transform=\"translate(390,15)\"><text x=\"70.73\" y=\"28.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><line x1=\"55\" y1=\"37.58\" x2=\"70.63\" y2=\"28.55\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"53.2\" y1=\"34.46\" x2=\"68.83\" y2=\"25.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"96.57\" y1=\"35.5\" x2=\"81.84\" y2=\"27\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55\" y1=\"35.5\" x2=\"34.22\" y2=\"23.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.22\" y1=\"23.5\" x2=\"13.43\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"13.43\" y1=\"35.5\" x2=\"13.43\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"13.43\" y1=\"59.5\" x2=\"34.22\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.22\" y1=\"71.5\" x2=\"55\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55\" y1=\"35.5\" x2=\"55\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"445\" y=\"124\" text-anchor=\"middle\" font-size=\"13\">imine (N-methyl)</text><g transform=\"translate(0,150)\"><text x=\"68.23\" y=\"28.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"52.89\" y1=\"37.58\" x2=\"68.13\" y2=\"28.78\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.09\" y1=\"34.46\" x2=\"66.33\" y2=\"25.66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.89\" y1=\"35.5\" x2=\"32.11\" y2=\"23.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"32.11\" y1=\"23.5\" x2=\"11.32\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"11.32\" y1=\"35.5\" x2=\"11.32\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"11.32\" y1=\"59.5\" x2=\"32.11\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"32.11\" y1=\"71.5\" x2=\"52.89\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"52.89\" y1=\"35.5\" x2=\"52.89\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(170,145)\"><text x=\"72.13\" y=\"45.1\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"83.24\" y=\"39.43\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><line x1=\"56.4\" y1=\"54.51\" x2=\"72.03\" y2=\"45.48\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"54.6\" y1=\"51.39\" x2=\"70.23\" y2=\"42.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"115.17\" y1=\"32.36\" x2=\"103.17\" y2=\"11.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"103.17\" y1=\"11.57\" x2=\"79.69\" y2=\"16.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.69\" y1=\"16.56\" x2=\"77.92\" y2=\"33.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"83.24\" y1=\"43.12\" x2=\"99.11\" y2=\"50.19\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"115.17\" y1=\"32.36\" x2=\"99.11\" y2=\"50.19\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.4\" y1=\"52.43\" x2=\"35.62\" y2=\"40.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.62\" y1=\"40.43\" x2=\"14.83\" y2=\"52.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"14.83\" y1=\"52.43\" x2=\"14.83\" y2=\"76.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"14.83\" y1=\"76.43\" x2=\"35.62\" y2=\"88.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.62\" y1=\"88.43\" x2=\"56.4\" y2=\"76.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"56.4\" y1=\"52.43\" x2=\"56.4\" y2=\"76.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"235\" y=\"259\" text-anchor=\"middle\" font-size=\"13\">iminium ion (no N–H)</text><g transform=\"translate(380,145)\"><text x=\"74.63\" y=\"45.1\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><line x1=\"58.9\" y1=\"52.43\" x2=\"38.12\" y2=\"40.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"54.88\" y1=\"54.27\" x2=\"38.53\" y2=\"44.83\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"117.67\" y1=\"32.36\" x2=\"105.67\" y2=\"11.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.67\" y1=\"11.57\" x2=\"82.19\" y2=\"16.56\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"82.19\" y1=\"16.56\" x2=\"80.42\" y2=\"33.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.74\" y1=\"43.12\" x2=\"101.61\" y2=\"50.19\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"117.67\" y1=\"32.36\" x2=\"101.61\" y2=\"50.19\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.63\" y1=\"43.92\" x2=\"58.9\" y2=\"52.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.12\" y1=\"40.43\" x2=\"17.33\" y2=\"52.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.33\" y1=\"52.43\" x2=\"17.33\" y2=\"76.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.33\" y1=\"76.43\" x2=\"38.12\" y2=\"88.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"38.12\" y1=\"88.43\" x2=\"58.9\" y2=\"76.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"58.9\" y1=\"52.43\" x2=\"58.9\" y2=\"76.43\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"447.5\" y=\"259\" text-anchor=\"middle\" font-size=\"13\">enamine</text><line x1=\"88\" y1=\"62\" x2=\"170\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M170,62 L162.9,65.6 M170,62 L162.9,58.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"129\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">CH₃NH₂, H⁺</text><text x=\"129\" y=\"80\" text-anchor=\"middle\" font-size=\"12\">− H₂O</text><line x1=\"295\" y1=\"62\" x2=\"385\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M385,62 L377.9,65.6 M385,62 L377.9,58.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"340\" y=\"54\" text-anchor=\"middle\" font-size=\"12\">− H⁺ (from N)</text><line x1=\"88\" y1=\"195\" x2=\"168\" y2=\"195\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M168,195 L160.9,198.6 M168,195 L160.9,191.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"128\" y=\"187\" text-anchor=\"middle\" font-size=\"12\">pyrrolidine, H⁺</text><text x=\"128\" y=\"213\" text-anchor=\"middle\" font-size=\"12\">− H₂O</text><line x1=\"305\" y1=\"195\" x2=\"380\" y2=\"195\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M380,195 L372.9,198.6 M380,195 L372.9,191.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"342.5\" y=\"187\" text-anchor=\"middle\" font-size=\"12\">− H⁺ (from α-C)</text></svg>",
  wittig: "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">ylide</text><text x=\"65\" y=\"65.4\" text-anchor=\"end\" font-size=\"15\" class=\"t-purple\">Ph₃P</text><text x=\"95\" y=\"65.4\" text-anchor=\"start\" font-size=\"15\">CH₂</text><line x1=\"67\" y1=\"57.6\" x2=\"93\" y2=\"57.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"67\" y1=\"62.4\" x2=\"93\" y2=\"62.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"150\" y1=\"55\" x2=\"190\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M190,55 L182.9,58.6 M190,55 L182.9,51.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M150,55 L157.1,51.4 M150,55 L157.1,58.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"265\" y=\"65.4\" text-anchor=\"end\" font-size=\"15\" class=\"t-purple\">Ph₃P</text><text x=\"295\" y=\"65.4\" text-anchor=\"start\" font-size=\"15\">CH₂</text><line x1=\"267\" y1=\"60\" x2=\"293\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"248\" cy=\"44\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"244.8\" y1=\"44\" x2=\"251.2\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"248\" y1=\"40.8\" x2=\"248\" y2=\"47.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><circle cx=\"314\" cy=\"44\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"310.8\" y1=\"44\" x2=\"317.2\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"410\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">carbanion next to P⁺:</text><text x=\"410\" y=\"68\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">a nucleophilic carbon</text><line x1=\"10\" y1=\"95\" x2=\"510\" y2=\"95\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.6\" stroke-dasharray=\"2 4\"/><text x=\"50\" y=\"145.4\" text-anchor=\"end\" font-size=\"15\" class=\"t-purple\">Ph₃P</text><text x=\"75\" y=\"145.4\" text-anchor=\"start\" font-size=\"15\">CH₂</text><line x1=\"52\" y1=\"140\" x2=\"73\" y2=\"140\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"33\" cy=\"124\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"29.8\" y1=\"124\" x2=\"36.2\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"33\" y1=\"120.8\" x2=\"33\" y2=\"127.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><circle cx=\"94\" cy=\"124\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"90.8\" y1=\"124\" x2=\"97.2\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"150\" y=\"148.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><text x=\"123\" y=\"196.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"177\" y=\"196.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"147.6\" y1=\"175\" x2=\"147.6\" y2=\"151\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"152.4\" y1=\"175\" x2=\"152.4\" y2=\"151\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"150\" y1=\"175\" x2=\"129.9\" y2=\"186.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"150\" y1=\"175\" x2=\"168\" y2=\"185.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M96,130 Q132.8,136.1 143,172\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M143,172 L137.7,166 L144.3,164.1 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M153,163 Q171.7,159.7 161,144\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M161,144 L167.9,148.1 L162.3,151.9 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"195\" y1=\"165\" x2=\"240\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M240,165 L232.9,168.6 M240,165 L232.9,161.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"290\" y=\"155.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">PPh₃</text><text x=\"330\" y=\"155.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><text x=\"290\" y=\"205.4\" text-anchor=\"middle\" font-size=\"15\">CH₂</text><line x1=\"303\" y1=\"150\" x2=\"322\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"290\" y1=\"163\" x2=\"290\" y2=\"187\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"303\" y1=\"200\" x2=\"330\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"330\" y1=\"158\" x2=\"330\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"354\" y=\"217.4\" text-anchor=\"middle\" font-size=\"15\">R</text><text x=\"338\" y=\"233.4\" text-anchor=\"middle\" font-size=\"15\">R′</text><line x1=\"330\" y1=\"200\" x2=\"346.8\" y2=\"208.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"330\" y1=\"200\" x2=\"335.1\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"310\" y=\"254\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">oxaphosphetane</text><line x1=\"370\" y1=\"165\" x2=\"410\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M410,165 L402.9,168.6 M410,165 L402.9,161.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"437\" y=\"145.4\" text-anchor=\"end\" font-size=\"15\">H₂C</text><text x=\"457\" y=\"145.4\" text-anchor=\"start\" font-size=\"15\">CRR′</text><line x1=\"439\" y1=\"137.6\" x2=\"455\" y2=\"137.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"439\" y1=\"142.4\" x2=\"455\" y2=\"142.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"462\" y=\"185\" text-anchor=\"middle\" font-size=\"14\" class=\"t-purple\">+  Ph₃P=O</text><text x=\"462\" y=\"205\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">(very strong P=O bond)</text></svg>",
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-acetals-imines',
  title: 'Acetals, Imines and the Wittig Reaction',
  summary: 'When the tetrahedral intermediate loses its oxygen: alcohols turn carbonyls into acetals (and back), acetals protect carbonyl groups, primary amines give imines and secondary amines give enamines with a pH-dependent rate, and the Wittig reaction swaps C=O for C=C.',
  minutes: 22,
  objectives: [
    'Draw the acid-catalyzed mechanism of hemiacetal and acetal formation step by step, and explain why acid (not base) is needed',
    'Use Le Chatelier\'s principle to drive acetal formation or hydrolysis, and use cyclic acetals as protecting groups in synthesis',
    'Predict whether an amine gives an imine or an enamine, draw the mechanism, and explain why the rate peaks near pH 4–5',
    'Draw the Wittig mechanism, predict the alkene it gives, and plan a Wittig synthesis by disconnecting a C=C bond',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Hemiacetals and acetals',
      blocks: [
        {
          type: 'p',
          text: 'An alcohol adds to a carbonyl group just as water does, giving a [[ochem-hemiacetal|hemiacetal]]: one OH and one OR on the same carbon. Like hydrates, most hemiacetals are unstable and revert. But with an acid catalyst and a second equivalent of alcohol, something new happens: the OH is replaced by a second OR, giving an [[ochem-acetal|acetal]], $\\ce{R2C(OR\'\')2}$, and water.',
        },
        {
          type: 'math',
          tex: '\\ce{R2C=O + 2 R\'\'OH <=>[\\text{H}^+] R2C(OR\'\')2 + H2O}',
          caption: 'Every step is reversible. Aldehydes and ketones both form acetals (older texts call the ketone version a *ketal*).',
        },
        {
          type: 'figure',
          svg: FIG.acetal,
          alt: 'Acetal mechanism in two parts. Part 1, hemiacetal: (1) the carbonyl oxygen is protonated; (2) an alcohol R–OH attacks the carbonyl carbon (curved arrow from its oxygen lone pair); (3) loss of H+ gives the hemiacetal, a carbon bearing OH, OR, R and R′. Part 2, acetal: (4) the OH is protonated to OH2+; curved arrows show the OR lone pair forming a C=O+ bond while water leaves; (5) loss of water gives an oxocarbenium ion, R2C=OR+; (6) a second alcohol attacks and (7) loses H+, giving the acetal, a carbon bearing two OR groups.',
          caption: 'Seven steps, each either a proton transfer or a single bond-making or bond-breaking event. The key intermediate is the **oxocarbenium ion** in step 5: the neighboring OR lone pair pushes out water, a carbocation stabilized by resonance with oxygen.',
        },
        {
          type: 'steps',
          items: [
            { title: '① Protonate C=O', text: 'Activates the carbonyl toward the weak alcohol nucleophile.' },
            { title: '② Alcohol adds', text: 'O lone pair attacks the carbonyl carbon.' },
            { title: '③ Deprotonate', text: 'Gives the neutral hemiacetal.' },
            { title: '④ Protonate the OH', text: 'Turns $\\ce{-OH}$, a terrible leaving group, into $\\ce{-OH2+}$, a good one.' },
            { title: '⑤ Lose water', text: 'Assisted by the OR lone pair, giving the oxocarbenium ion.' },
            { title: '⑥ Second alcohol adds', text: 'Attacks the oxocarbenium carbon.' },
            { title: '⑦ Deprotonate', text: 'Gives the acetal and regenerates the acid catalyst.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why acid, never base',
          text: 'Base can catalyze hemiacetal formation (alkoxide adds to C=O), but it cannot complete the acetal: the next step requires the OH to leave, and $\\ce{HO-}$ is a hopeless leaving group. Only acid can convert OH into $\\ce{H2O}$, which leaves easily. The same logic runs backward: acetals are **stable to base** (nothing can leave) and **hydrolyzed by aqueous acid**.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Cyclic hemiacetals: sugars',
          text: 'When the OH and C=O are in the same molecule five or six atoms apart, the hemiacetal is a five- or six-membered ring and is perfectly stable. Glucose exists in water almost entirely (> 99%) as a six-membered cyclic hemiacetal, and the glycosidic bonds that link sugars into starch and cellulose are acetals. You will see this in the biomolecules lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'order',
      prompt: 'Order the steps for converting acetaldehyde into its diethyl acetal, $\\ce{CH3CH(OCH2CH3)2}$, with ethanol and an acid catalyst.',
      lines: [
        'The carbonyl oxygen is protonated',
        'Ethanol attacks the carbonyl carbon, and loss of $\\ce{H+}$ gives the hemiacetal',
        'The hemiacetal OH group is protonated',
        'Water leaves, pushed out by the ethoxy oxygen\'s lone pair, giving an oxocarbenium ion',
        'A second ethanol attacks the oxocarbenium carbon',
        'Loss of $\\ce{H+}$ gives the acetal and regenerates the catalyst',
      ],
      distractors: ['Ethoxide ion displaces hydroxide from the hemiacetal in an SN2 step'],
      explanation: 'Activate, add, deprotonate (hemiacetal); then activate the OH, lose water to the resonance-stabilized oxocarbenium ion, add, deprotonate (acetal). The distractor fails twice: ethoxide is not present in acid, and $\\ce{HO-}$ cannot be displaced as a leaving group. The OH must be protonated and leave as water.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Driving the equilibrium, and acetals as protecting groups',
      blocks: [
        {
          type: 'p',
          text: 'Acetal formation is an equilibrium, often unfavorable for ketones (three molecules become two, which costs entropy). [[gchem-le-chatelier|Le Chatelier\'s principle]] gives you control:',
        },
        {
          type: 'list',
          items: [
            '**To make the acetal:** use excess alcohol, and remove water as it forms. A Dean–Stark trap does this by boiling the reaction in toluene: water codistils, condenses and is collected in a side arm, so the equilibrium keeps shifting right.',
            '**To remove the acetal (hydrolysis):** use a large excess of water with acid. The same mechanism runs backward.',
            '**Use a diol:** ethylene glycol ($\\ce{HOCH2CH2OH}$) forms a five-membered **cyclic acetal** (a 1,3-dioxolane). One molecule supplies both OR groups, so the entropy cost is much smaller and the equilibrium much more favorable.',
          ],
        },
        {
          type: 'p',
          text: 'The acid/base asymmetry makes acetals ideal [[ochem-protecting-group|protecting groups]] for aldehydes and ketones. An acetal is inert to bases, nucleophiles, hydride reagents, Grignard reagents and oxidants, everything that would attack a C=O. Install it, do the reaction elsewhere in the molecule, then remove it with aqueous acid.',
        },
        {
          type: 'figure',
          svg: FIG.protect,
          alt: 'Methyl 4-oxopentanoate, a keto ester, reacts with ethylene glycol and acid with water removal to give the ketone protected as a cyclic acetal (a dioxolane ring), with the ester unchanged. Then 1. LiAlH4, 2. water (no acid) reduces the ester to a primary alcohol while the acetal is untouched. Finally aqueous acid (deprotect) gives 5-hydroxypentan-2-one.',
          caption: 'Goal: reduce the ester but keep the ketone. LiAlH₄ would reduce the ketone first, so the ketone is hidden as an acetal, the ester is reduced, and acid hydrolysis reveals the ketone again.',
        },
        {
          type: 'derivation',
          title: 'Why each step is chemoselective',
          steps: [
            { tex: '\\ce{RCOR\' ->[\\text{HOCH}_2\\text{CH}_2\\text{OH},\\ \\text{H}^+] } \\text{dioxolane}', why: 'Acid-catalyzed acetal formation works on ketones and aldehydes; the ester carbonyl, less electrophilic, is left alone.' },
            { tex: '\\ce{RCO2CH3 ->[\\text{1. LiAlH}_4][\\text{2. H}_2\\text{O}] RCH2OH}', why: 'The acetal has no C=O and no leaving group under basic conditions, so the hydride ignores it. The workup must avoid strong acid so the acetal survives this step.' },
            { tex: '\\text{dioxolane} \\ce{->[\\text{H}_3\\text{O}^+]} \\ce{RCOR\'} + \\ce{HOCH2CH2OH}', why: 'Excess water and acid run the acetal mechanism backward.' },
          ],
          result: 'Protect, react, deprotect: three steps to do what one reagent could not do selectively.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'You convert 9.81 g of cyclohexanone (98.14 g/mol) into its ethylene glycol acetal with a Dean–Stark trap. If the reaction goes to completion, what mass of water collects in the trap? (Water: 18.02 g/mol.)',
      hint: 'How many molecules of water are released per acetal formed?',
      label: 'mass of water $=$',
      unit: 'g',
      answer: '9.81/98.14*18.02',
      answerTex: '1.80\\ \\text{g}',
      tolerance: 0.01,
      explanation: 'Acetal formation releases one $\\ce{H2O}$ per carbonyl: the carbonyl oxygen leaves as water in step 5. $n = 9.81 / 98.14 = 0.1000$ mol, so $0.1000 \\times 18.02 = 1.80$ g (about 1.8 mL). Watching the water level in the trap is how chemists follow the reaction: when 1.8 mL has collected, it is done.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'True or false: a cyclic acetal protecting group is removed by treatment with aqueous sodium hydroxide.',
      answer: false,
      explanation: 'False. Acetals are stable to base, which is exactly why they work as protecting groups during reactions with Grignard reagents, hydrides and other bases. Hydrolysis requires **aqueous acid**: protonating one OR turns it into a leaving group, the oxocarbenium ion forms, water adds, and the sequence repeats until the carbonyl is regenerated.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Imines: primary amines and C=N bonds',
      blocks: [
        {
          type: 'p',
          text: 'Primary amines ($\\ce{RNH2}$) add to aldehydes and ketones, and the tetrahedral **carbinolamine** then loses water to form an [[ochem-imine|imine]] ($\\ce{R2C=NR\'}$), also called a Schiff base. It is the nitrogen version of a C=O.',
        },
        {
          type: 'math',
          tex: '\\ce{R2C=O + H2N-R\' <=>[\\text{H}^+] R2C(OH)-NHR\' <=> R2C=NR\' + H2O}',
          caption: 'Addition gives the carbinolamine; acid-catalyzed loss of water gives the iminium ion $\\ce{R2C=N+HR\'}$, which loses $\\ce{H+}$ from nitrogen to give the imine.',
        },
        {
          type: 'p',
          text: 'The mechanism mirrors acetal formation: nucleophile adds, OH is protonated and leaves as water with help from the neighboring lone pair (here nitrogen, giving an iminium ion), then a proton is lost. As for acetals, removing water drives imine formation, and excess aqueous acid hydrolyzes imines back to the carbonyl and amine.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 1.15],
          xStep: 1,
          yStep: 0.2,
          functions: [
            { expr: '((1+10^((a-b)/2))^2)/((1+10^(a-x))*(1+10^(x-b)))', label: 'relative rate of imine formation', color: 'blue' },
            { expr: '1/(1+10^(a-x))', label: 'fraction of amine unprotonated (free nucleophile)', color: 'green', dashed: true },
            { expr: '1/(1+10^(x-b))', label: 'fraction of carbinolamine with OH protonated', color: 'red', dashed: true },
          ],
          vlines: [{ x: '(a+b)/2', label: 'optimum', color: 'gray' }],
          sliders: [
            { name: 'a', min: 4, max: 11, step: 0.1, value: 6, label: 'pKa of the protonated amine, $\\text{p}K_{aH}$' },
            { name: 'b', min: 1, max: 5, step: 0.1, value: 3, label: 'effective pKa for OH protonation, $b$' },
          ],
          readouts: [{ label: 'optimum pH $= (\\text{p}K_{aH} + b)/2 =$', expr: '(a+b)/2', digits: 2 }],
          caption: 'Horizontal axis: pH. Too acidic and the amine is protonated ($\\ce{RNH3+}$ has no lone pair to attack); too basic and there is not enough acid to protonate the carbinolamine OH so water can leave. The rate, the product of the two, peaks in between, typically around pH 4–5.',
        },
        {
          type: 'deepdive',
          title: 'Where exactly is the maximum? (a calculus check)',
          blocks: [
            {
              type: 'derivation',
              steps: [
                { tex: '\\text{rate} \\propto \\frac{1}{g(x)}, \\quad g(x) = (1 + 10^{a-x})(1 + 10^{x-b})', why: 'The model in the graph, with $x$ = pH. Maximizing the rate means minimizing $g$.' },
                { tex: 'g(x) = 1 + 10^{a-x} + 10^{x-b} + 10^{a-b}', why: 'Expand the product.' },
                { tex: 'g\'(x) = \\ln 10\\,\\left(-10^{a-x} + 10^{x-b}\\right) = 0', why: 'Differentiate: $\\frac{d}{dx}10^{u} = 10^{u}\\ln 10 \\cdot u\'$.' },
                { tex: '10^{a-x} = 10^{x-b} \\implies x = \\frac{a+b}{2}', why: 'Equal powers of 10 need equal exponents. $g\'\' > 0$, so this is a minimum of $g$, a maximum of the rate.' },
              ],
              result: 'The optimum pH is halfway between the two pKa values.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Imines in your eyes and in your enzymes',
          text: 'Vision starts with an imine: 11-*cis*-retinal is bound to the protein opsin as a protonated Schiff base with a lysine side chain. Light isomerizes it to all-*trans*, changing the protein\'s shape and firing a nerve signal. Many enzymes (aldolases, the vitamin B₆ enzymes) also work through imines with lysine.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Related C=N compounds',
          text: 'Hydroxylamine ($\\ce{NH2OH}$) gives **oximes**, $\\ce{R2C=NOH}$; hydrazine ($\\ce{H2NNH2}$) gives **hydrazones**, $\\ce{R2C=NNH2}$, the intermediate in the Wolff–Kishner reduction you used in aromatic synthesis. Both are often crystalline, which historically made them useful for identifying unknown aldehydes and ketones.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Using the rate model in the graph, imine formation from an amine whose conjugate acid has pKa 7.2, with an effective OH-protonation pKa of 2.8, is fastest at what pH?',
      hint: 'The optimum is halfway between the two pKa values.',
      label: 'pH $=$',
      answer: '(7.2+2.8)/2',
      answerTex: '5.0',
      tolerance: 0.05,
      explanation: 'Optimum pH $= (\\text{p}K_{aH} + b)/2 = (7.2 + 2.8)/2 = 5.0$. Below it, more of the amine is tied up as $\\ce{RNH3+}$ and cannot attack; above it, too little acid is available to protonate the carbinolamine OH so it can leave as water. That is why imine-forming reactions are usually buffered near pH 4–5 (for example with an acetate buffer).',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Enamines: secondary amines',
      blocks: [
        {
          type: 'p',
          text: 'A secondary amine ($\\ce{R2NH}$) adds and dehydrates the same way, as far as the iminium ion. But that iminium ion has **no H on nitrogen** to lose. Instead, a proton is removed from the **α-carbon** (the carbon next to the former C=O), giving an [[ochem-enamine|enamine]]: an amine on a C=C ("ene" + "amine").',
        },
        {
          type: 'figure',
          svg: FIG.imine,
          alt: 'Top: cyclohexanone with methylamine and acid, losing water, gives an iminium ion with an N–H; loss of H+ from nitrogen gives the N-methyl imine. Bottom: cyclohexanone with pyrrolidine and acid, losing water, gives an iminium ion with no N–H; loss of H+ from the alpha carbon gives the enamine, 1-(cyclohex-1-en-1-yl)pyrrolidine, with a C=C next to the nitrogen.',
          caption: 'Same first steps, different final deprotonation. A primary amine leaves an N–H on the iminium ion and gives an imine; a secondary amine does not, so the C=C forms instead.',
        },
        {
          type: 'table',
          headers: ['Nitrogen nucleophile', 'Product with $\\ce{R2C=O}$ (acid catalyst, −H₂O)'],
          rows: [
            ['primary amine, $\\ce{R\'NH2}$', 'imine, $\\ce{R2C=NR\'}$'],
            ['secondary amine, $\\ce{R\'2NH}$ (e.g. pyrrolidine)', 'enamine, $\\ce{C=C-NR\'2}$'],
            ['hydroxylamine, $\\ce{NH2OH}$', 'oxime, $\\ce{R2C=NOH}$'],
            ['hydrazine, $\\ce{H2NNH2}$', 'hydrazone, $\\ce{R2C=NNH2}$'],
            ['tertiary amine, $\\ce{R\'3N}$', 'no stable product (no N–H to lose after addition)'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why enamines matter',
          text: 'The nitrogen lone pair is conjugated with the C=C, so the α-carbon of an enamine carries partial negative charge (draw the resonance form $\\ce{C^- -C=N+}$). Enamines are neutral, easily made carbon nucleophiles that react at the α-carbon with alkyl halides and other electrophiles, and hydrolysis with aqueous acid then returns the ketone. This is a gentle alternative to the enolates of the next unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Cyclohexanone is heated with dimethylamine, $\\ce{(CH3)2NH}$, and a trace of acid, with water removed. What is the organic product?',
      options: [
        { text: 'An imine, $\\ce{C6H10=N-CH3}$', why: 'An imine needs an N–H on the iminium ion to lose at the end. Dimethylamine\'s nitrogen ends up with two methyls and the ring carbon, and no H.' },
        { text: 'An enamine, 1-(dimethylamino)cyclohexene, with $\\ce{N(CH3)2}$ on a ring C=C', correct: true, why: 'Secondary amine → iminium ion with no N–H → loss of H⁺ from the α-carbon → enamine.' },
        { text: 'A stable carbinolamine, 1-(dimethylamino)cyclohexan-1-ol', why: 'The carbinolamine is an intermediate; with acid and water removal it dehydrates.' },
        { text: 'An acetal', why: 'Acetals form from alcohols, not amines.' },
      ],
      explanation: 'Classify the amine first: dimethylamine is secondary. Addition and loss of water give the iminium ion $\\ce{C6H10=N+(CH3)2}$, which has no N–H. The only proton it can lose (to become neutral) is on the α-carbon, which creates the C=C of the enamine.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Name the type of product each nitrogen nucleophile gives with cyclohexanone under mild acid catalysis, with water removed.',
      template: 'Methylamine gives an ___. Pyrrolidine gives an ___. Hydroxylamine gives an ___. Hydrazine gives a ___.',
      blanks: [{ answers: ['imine'] }, { answers: ['enamine'] }, { answers: ['oxime'] }, { answers: ['hydrazone'] }],
      wordBank: ['imine', 'enamine', 'oxime', 'hydrazone', 'amide', 'acetal'],
      explanation: 'Methylamine is a primary amine → imine ($\\ce{C=N-CH3}$). Pyrrolidine is a cyclic secondary amine → enamine. $\\ce{NH2OH}$ → oxime ($\\ce{C=N-OH}$). $\\ce{H2NNH2}$ → hydrazone ($\\ce{C=N-NH2}$). Amides come from carboxylic acid derivatives, not from aldehydes or ketones, and acetals need alcohols.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The Wittig reaction: from C=O to C=C',
      blocks: [
        {
          type: 'p',
          text: 'The [[ochem-wittig-reaction|Wittig reaction]] replaces the oxygen of an aldehyde or ketone with a carbon group, making an alkene with the double bond **exactly** where the C=O was. The reagent is a phosphorus [[ochem-ylide|ylide]]: a carbanion next to a positively charged phosphorus.',
        },
        {
          type: 'derivation',
          title: 'Making the ylide',
          steps: [
            { tex: '\\ce{Ph3P + CH3CH2Br -> Ph3P+-CH2CH3 Br-}', why: 'Triphenylphosphine is a good nucleophile and attacks the alkyl halide by SN2, giving a phosphonium salt. Like any SN2, this works best with methyl and primary halides.' },
            { tex: '\\ce{Ph3P+-CH2CH3 ->[\\text{BuLi}] Ph3P=CHCH3 <-> Ph3P+-CH^- CH3}', why: 'The C–H next to $\\ce{P+}$ is unusually acidic for a C–H (pKa ≈ 22 in DMSO) because the resulting carbanion is stabilized by the adjacent positive phosphorus. A strong base (butyllithium, NaH, $\\ce{NaNH2}$) removes it.' },
          ],
          result: 'The ylide\'s carbon is nucleophilic, like a Grignard carbon, but softer and more selective.',
        },
        {
          type: 'figure',
          svg: FIG.wittig,
          alt: 'Top: the ylide Ph3P=CH2 and its resonance form Ph3P+–CH2−, a carbanion next to P+. Bottom: the ylide carbon attacks the carbonyl carbon of R2C=O (curved arrows from the carbanion to C and from the C=O π bond to O), leading to a four-membered oxaphosphetane ring containing P, O and two carbons, which breaks apart into the alkene H2C=CRR′ plus triphenylphosphine oxide, Ph3P=O, with its very strong P=O bond.',
          caption: 'The ylide carbon adds to the carbonyl carbon; the oxygen bonds to phosphorus, forming the four-membered oxaphosphetane; the ring then splits into the alkene and $\\ce{Ph3P=O}$. The very strong P=O bond (about 575 kJ/mol) pays for the whole process.',
        },
        {
          type: 'list',
          items: [
            '**Regiospecific:** the new C=C is exactly where the C=O was. Compare E1 dehydration of an alcohol, which gives the Zaitsev (more substituted) alkene or mixtures. Wittig can make the less stable, exocyclic alkene on purpose.',
            '**Stereochemistry (in brief):** simple alkyl ylides give mainly the *Z* alkene; ylides stabilized by an ester or ketone group give mainly *E*.',
            '**Industrial use:** BASF makes vitamin A on a large scale with a Wittig reaction as a key step.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Planning a Wittig synthesis',
          text: 'Disconnect the C=C. One carbon becomes the C=O (aldehyde or ketone), the other becomes the ylide carbon, made from an alkyl halide. There are usually two choices; pick the one whose halide is methyl or primary, because the phosphonium salt is made by SN2.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'You need methylenecyclohexane (a cyclohexane ring with an exocyclic $\\ce{=CH2}$) free of its isomer 1-methylcyclohexene. Which route is best?',
      options: [
        { text: 'Cyclohexanone + $\\ce{Ph3P=CH2}$ (Wittig)', correct: true, why: 'The C=C forms exactly where the C=O was, so only the exocyclic alkene forms.' },
        { text: '1-Methylcyclohexan-1-ol + $\\ce{H2SO4}$, heat (E1 dehydration)', why: 'E1 gives the more stable, more substituted alkene (Zaitsev): mainly 1-methylcyclohexene, the isomer you want to avoid.' },
        { text: 'Cyclohexanone + $\\ce{CH3MgBr}$, then $\\ce{H3O+}$', why: 'That gives 1-methylcyclohexan-1-ol, an alcohol, not an alkene. Dehydrating it afterward runs into the Zaitsev problem.' },
        { text: 'Formaldehyde + the ylide made from bromocyclohexane', why: 'This disconnection is valid on paper, but the ylide would come from a secondary halide (slow, elimination-prone SN2 with $\\ce{PPh3}$). Using the cheap ketone and $\\ce{Ph3P=CH2}$ is far better.' },
      ],
      explanation: 'The Wittig reaction is regiospecific: cyclohexanone\'s C=O becomes the C=C, giving only methylenecyclohexane. Dehydration routes go through a tertiary carbocation that loses a ring proton preferentially, giving the more substituted, more stable endocyclic alkene. Of the two Wittig disconnections, the one using $\\ce{Ph3P=CH2}$ (from methyl bromide) and the ketone is the practical one.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student describes a Wittig synthesis of 2-methylbut-2-ene, $\\ce{(CH3)2C=CHCH3}$, from acetone. Find the first incorrect line.',
      lines: [
        'Triphenylphosphine reacts with bromoethane by SN2 to give $\\ce{Ph3P+CH2CH3 Br-}$.',
        'Butyllithium removes a proton from the carbon attached to phosphorus, giving the ylide $\\ce{Ph3P=CHCH3}$.',
        'The phosphorus atom of the ylide attacks the carbonyl carbon of acetone.',
        'The resulting four-membered oxaphosphetane contains P, O and two carbon atoms.',
        'The ring fragments into 2-methylbut-2-ene and triphenylphosphine oxide.',
      ],
      errorLines: [3],
      explanation: 'Line 3 is wrong: the nucleophile is the ylide **carbon** (the carbanion end, $\\ce{^-CHCH3}$), which bonds to the carbonyl carbon. Phosphorus, positively charged and surrounded by phenyl groups, bonds to the carbonyl **oxygen** as the oxaphosphetane closes. That pairing (C to C, P to O) is what puts the new C=C where the C=O was and makes $\\ce{Ph3P=O}$.',
    },
  ],
  takeaways: [
    'Alcohols add reversibly to C=O to give hemiacetals; with acid and a second equivalent of alcohol, the OH is protonated, water leaves (oxocarbenium ion) and an acetal forms. Every step is reversible.',
    'Drive acetal formation by removing water (Dean–Stark) or using a diol; hydrolyze acetals with excess aqueous acid. Acetals are stable to base, nucleophiles, hydrides and Grignard reagents, so they protect aldehydes and ketones.',
    'Primary amines give imines (C=N) via a carbinolamine and an iminium ion; secondary amines give enamines because their iminium ion loses an α-C–H instead of an N–H. Rates peak near pH 4–5.',
    'Hydroxylamine gives oximes and hydrazine gives hydrazones; aqueous acid hydrolyzes all these C=N compounds back to the carbonyl.',
    'The Wittig reaction ($\\ce{R2C=O + Ph3P=CR\'2 -> R2C=CR\'2 + Ph3P=O}$) puts a C=C exactly where the C=O was; the ylide comes from $\\ce{PPh3}$, a methyl or primary halide (SN2), and a strong base.',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Chapter 19 sections on amines (imines and enamines), alcohols (acetal formation and protecting groups) and the Wittig reaction.' },
    { title: 'Wittig reaction (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Wittig_reaction', source: 'wikipedia', note: 'Mechanism, the E/Z selectivity of stabilized and unstabilized ylides, and industrial applications.' },
    { title: 'Khan Academy: Organic chemistry', url: 'https://www.khanacademy.org/science/organic-chemistry', source: 'khan', note: 'The aldehydes and ketones unit has worked mechanisms for acetal and imine formation.' },
  ],
};
