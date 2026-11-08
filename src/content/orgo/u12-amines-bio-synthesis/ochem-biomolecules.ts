import type { Lesson } from '../../types';

// <figures> skeletal structures drawn from SMILES with the molecule kit; mechanisms checked by rendering
const FIG = {
  ala: "<svg viewBox=\"0 0 520 175\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,10) scale(1.15)\"><text x=\"45.03\" y=\"26.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"24.25\" y=\"62.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"14.14\" y=\"62.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><text x=\"66.21\" y=\"86.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"77.32\" y=\"81.17\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><text x=\"61.2\" y=\"90.17\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">3</text><text x=\"51.1\" y=\"86.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"52.28\" y1=\"47.21\" x2=\"52.28\" y2=\"29.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.68\" y1=\"47.21\" x2=\"48.68\" y2=\"29.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"92.05\" y1=\"46.17\" x2=\"71.26\" y2=\"58.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"71.26\" y1=\"58.17\" x2=\"50.48\" y2=\"46.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.48\" y1=\"46.17\" x2=\"36.14\" y2=\"54.45\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.89\" y1=\"61\" x2=\"71.64\" y2=\"61\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"70.51\" y1=\"63.82\" x2=\"72.01\" y2=\"63.82\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"70.14\" y1=\"66.64\" x2=\"72.39\" y2=\"66.64\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"69.76\" y1=\"69.47\" x2=\"72.76\" y2=\"69.47\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"69.39\" y1=\"72.29\" x2=\"73.14\" y2=\"72.29\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"69.01\" y1=\"75.12\" x2=\"73.51\" y2=\"75.12\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /></g><g transform=\"translate(190,10) scale(1.15)\"><text x=\"45.03\" y=\"26.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"24.25\" y=\"62.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"36.14\" y=\"57.17\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"66.21\" y=\"86.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"77.32\" y=\"81.17\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><text x=\"61.2\" y=\"90.17\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">3</text><text x=\"51.1\" y=\"86.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"52.28\" y1=\"47.21\" x2=\"52.28\" y2=\"29.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.68\" y1=\"47.21\" x2=\"48.68\" y2=\"29.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"92.05\" y1=\"46.17\" x2=\"71.26\" y2=\"58.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"71.26\" y1=\"58.17\" x2=\"50.48\" y2=\"46.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.48\" y1=\"46.17\" x2=\"40.14\" y2=\"52.14\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.89\" y1=\"61\" x2=\"71.64\" y2=\"61\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"70.51\" y1=\"63.82\" x2=\"72.01\" y2=\"63.82\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"70.14\" y1=\"66.64\" x2=\"72.39\" y2=\"66.64\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"69.76\" y1=\"69.47\" x2=\"72.76\" y2=\"69.47\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"69.39\" y1=\"72.29\" x2=\"73.14\" y2=\"72.29\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"69.01\" y1=\"75.12\" x2=\"73.51\" y2=\"75.12\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /></g><g transform=\"translate(380,10) scale(1.15)\"><text x=\"45.03\" y=\"26.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"24.25\" y=\"62.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"36.14\" y=\"57.17\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"66.21\" y=\"86.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"86.42\" y=\"90.17\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">2</text><text x=\"76.32\" y=\"86.84\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"52.28\" y1=\"47.21\" x2=\"52.28\" y2=\"29.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"48.68\" y1=\"47.21\" x2=\"48.68\" y2=\"29.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"92.05\" y1=\"46.17\" x2=\"71.26\" y2=\"58.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"71.26\" y1=\"58.17\" x2=\"50.48\" y2=\"46.17\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.48\" y1=\"46.17\" x2=\"40.14\" y2=\"52.14\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"70.89\" y1=\"61\" x2=\"71.64\" y2=\"61\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"70.51\" y1=\"63.82\" x2=\"72.01\" y2=\"63.82\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"70.14\" y1=\"66.64\" x2=\"72.39\" y2=\"66.64\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"69.76\" y1=\"69.47\" x2=\"72.76\" y2=\"69.47\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"69.39\" y1=\"72.29\" x2=\"73.14\" y2=\"72.29\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /><line x1=\"69.01\" y1=\"75.12\" x2=\"73.51\" y2=\"75.12\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1.44\" /></g><path d=\"M140,72 L188,72 l-8,-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M188,78 L140,78 l8,6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"164\" y=\"63\" text-anchor=\"middle\" font-size=\"12\">pKa₁ 2.34</text><path d=\"M332,72 L380,72 l-8,-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M380,78 L332,78 l8,6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"356\" y=\"63\" text-anchor=\"middle\" font-size=\"12\">pKa₂ 9.69</text><text x=\"70\" y=\"150\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"600\">pH < 2: cation (+1)</text><text x=\"260\" y=\"150\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"600\">pH ≈ 6: zwitterion (0)</text><text x=\"450\" y=\"150\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"600\">pH > 10: anion (−1)</text><text x=\"260\" y=\"168\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">L-alanine</text></svg>",
  dipeptide: "<svg viewBox=\"0 0 520 170\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(80,5) scale(1.4)\"><text x=\"136.77\" y=\"88.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"116.37\" y=\"52.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"116.37\" y=\"38.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><text x=\"74.41\" y=\"28.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"53.63\" y=\"64.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"65.52\" y=\"58.57\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">−</text><text x=\"157.94\" y=\"28.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"169.05\" y=\"22.57\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><text x=\"152.94\" y=\"31.57\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">3</text><text x=\"142.83\" y=\"28.24\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">H</text><line x1=\"140.41\" y1=\"58.53\" x2=\"140.41\" y2=\"76.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"144.01\" y1=\"58.53\" x2=\"144.01\" y2=\"76.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"81.66\" y1=\"48.61\" x2=\"81.66\" y2=\"30.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.06\" y1=\"48.61\" x2=\"78.06\" y2=\"30.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"183.78\" y1=\"59.57\" x2=\"163\" y2=\"47.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"163\" y1=\"47.57\" x2=\"142.21\" y2=\"59.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"142.21\" y1=\"59.57\" x2=\"127.48\" y2=\"51.07\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"115.37\" y1=\"51.07\" x2=\"100.64\" y2=\"59.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"100.64\" y1=\"59.57\" x2=\"79.86\" y2=\"47.57\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"79.86\" y1=\"47.57\" x2=\"69.52\" y2=\"53.54\" stroke=\"currentColor\" stroke-width=\"1.44\" /><polygon points=\"163,48 164,39 162,39 \" fill=\"currentColor\" class=\"f-gray s-gray\" stroke=\"currentColor\" stroke-width=\"1.44\" /><polygon points=\"162,39 164,39 165,31 161,31 \" fill=\"currentColor\" class=\"f-gray s-gray\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><rect x=\"238\" y=\"52\" width=\"56\" height=\"86\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-purple\" stroke-dasharray=\"4 3\"/><text x=\"266\" y=\"158\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-purple\" font-weight=\"600\">peptide bond (amide)</text><text x=\"395\" y=\"40\" text-anchor=\"start\" font-size=\"12.5\" class=\"t-gray\">Ala: N-terminus</text><text x=\"150\" y=\"40\" text-anchor=\"end\" font-size=\"12.5\" class=\"t-gray\">Gly: C-terminus</text></svg>",
  fatty: "<svg viewBox=\"0 0 520 230\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,0) scale(0.95)\"><text x=\"101.96\" y=\"34.04\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"81.18\" y=\"70.04\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"71.07\" y=\"70.04\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"109.21\" y1=\"54.41\" x2=\"109.21\" y2=\"36.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"105.61\" y1=\"54.41\" x2=\"105.61\" y2=\"36.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"460.75\" y1=\"65.37\" x2=\"439.96\" y2=\"53.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"439.96\" y1=\"53.37\" x2=\"419.18\" y2=\"65.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"419.18\" y1=\"65.37\" x2=\"398.39\" y2=\"53.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"398.39\" y1=\"53.37\" x2=\"377.61\" y2=\"65.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"377.61\" y1=\"65.37\" x2=\"356.82\" y2=\"53.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"356.82\" y1=\"53.37\" x2=\"336.04\" y2=\"65.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"336.04\" y1=\"65.37\" x2=\"315.25\" y2=\"53.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"315.25\" y1=\"53.37\" x2=\"294.47\" y2=\"65.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"294.47\" y1=\"65.37\" x2=\"273.68\" y2=\"53.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"273.68\" y1=\"53.37\" x2=\"252.9\" y2=\"65.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"252.9\" y1=\"65.37\" x2=\"232.11\" y2=\"53.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"232.11\" y1=\"53.37\" x2=\"211.33\" y2=\"65.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"211.33\" y1=\"65.37\" x2=\"190.55\" y2=\"53.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"190.55\" y1=\"53.37\" x2=\"169.76\" y2=\"65.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"169.76\" y1=\"65.37\" x2=\"148.98\" y2=\"53.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"148.98\" y1=\"53.37\" x2=\"128.19\" y2=\"65.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"128.19\" y1=\"65.37\" x2=\"107.41\" y2=\"53.37\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"107.41\" y1=\"53.37\" x2=\"93.07\" y2=\"61.65\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(60,95) scale(0.95)\"><text x=\"136.61\" y=\"8.22\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"124.01\" y=\"30.05\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"117.52\" y=\"30.05\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">H</text><line x1=\"253.51\" y1=\"27.05\" x2=\"240.91\" y2=\"19.77\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"251.07\" y1=\"28.16\" x2=\"241.16\" y2=\"22.44\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"141.21\" y1=\"20.4\" x2=\"141.21\" y2=\"9.22\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"139.02\" y1=\"20.4\" x2=\"139.02\" y2=\"9.22\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"303.9\" y1=\"114.33\" x2=\"291.3\" y2=\"107.06\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"291.3\" y1=\"107.06\" x2=\"291.3\" y2=\"92.51\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"291.3\" y1=\"92.51\" x2=\"278.7\" y2=\"85.24\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"278.7\" y1=\"85.24\" x2=\"278.7\" y2=\"70.69\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"278.7\" y1=\"70.69\" x2=\"266.1\" y2=\"63.42\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"266.1\" y1=\"63.42\" x2=\"266.1\" y2=\"48.87\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"266.1\" y1=\"48.87\" x2=\"253.51\" y2=\"41.59\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"253.51\" y1=\"41.59\" x2=\"253.51\" y2=\"27.05\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"240.91\" y1=\"19.77\" x2=\"228.31\" y2=\"27.05\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"228.31\" y1=\"27.05\" x2=\"215.71\" y2=\"19.77\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"215.71\" y1=\"19.77\" x2=\"203.11\" y2=\"27.05\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"203.11\" y1=\"27.05\" x2=\"190.51\" y2=\"19.77\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"190.51\" y1=\"19.77\" x2=\"177.91\" y2=\"27.05\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"177.91\" y1=\"27.05\" x2=\"165.31\" y2=\"19.77\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"165.31\" y1=\"19.77\" x2=\"152.71\" y2=\"27.05\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"152.71\" y1=\"27.05\" x2=\"140.11\" y2=\"19.77\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"140.11\" y1=\"19.77\" x2=\"132.02\" y2=\"24.45\" stroke=\"currentColor\" stroke-width=\"1\" /></g><text x=\"20\" y=\"85\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"600\">stearic acid (C18, saturated): mp 69 °C</text><text x=\"20\" y=\"222\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"600\">oleic acid (C18, one cis C=C): mp 13 °C</text></svg>",
  fischer: "<svg viewBox=\"0 0 520 230\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"65\" y=\"50\" text-anchor=\"middle\" font-size=\"14\">CHO</text><line x1=\"65\" y1=\"56\" x2=\"65\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"31\" y1=\"90\" x2=\"99\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-purple\" stroke-linecap=\"round\"/><text x=\"25\" y=\"95\" text-anchor=\"end\" font-size=\"14\">H</text><text x=\"105\" y=\"95\" text-anchor=\"start\" font-size=\"14\" class=\"t-purple\">OH</text><text x=\"65\" y=\"126\" text-anchor=\"middle\" font-size=\"14\">CH₂OH</text><text x=\"65\" y=\"165\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">D-glyceraldehyde</text><text x=\"205\" y=\"50\" text-anchor=\"middle\" font-size=\"14\">CHO</text><line x1=\"205\" y1=\"56\" x2=\"205\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"171\" y1=\"90\" x2=\"239\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-purple\" stroke-linecap=\"round\"/><text x=\"165\" y=\"95\" text-anchor=\"end\" font-size=\"14\" class=\"t-purple\">HO</text><text x=\"245\" y=\"95\" text-anchor=\"start\" font-size=\"14\">H</text><text x=\"205\" y=\"126\" text-anchor=\"middle\" font-size=\"14\">CH₂OH</text><text x=\"205\" y=\"165\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">L-glyceraldehyde</text><text x=\"335\" y=\"22\" text-anchor=\"middle\" font-size=\"14\">CHO</text><line x1=\"335\" y1=\"28\" x2=\"335\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"301\" y1=\"60\" x2=\"369\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"295\" y=\"65\" text-anchor=\"end\" font-size=\"14\">H</text><text x=\"375\" y=\"65\" text-anchor=\"start\" font-size=\"14\" class=\"t-red\">OH</text><line x1=\"335\" y1=\"60\" x2=\"335\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"301\" y1=\"92\" x2=\"369\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"295\" y=\"97\" text-anchor=\"end\" font-size=\"14\" class=\"t-red\">HO</text><text x=\"375\" y=\"97\" text-anchor=\"start\" font-size=\"14\">H</text><line x1=\"335\" y1=\"92\" x2=\"335\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"301\" y1=\"124\" x2=\"369\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"295\" y=\"129\" text-anchor=\"end\" font-size=\"14\">H</text><text x=\"375\" y=\"129\" text-anchor=\"start\" font-size=\"14\" class=\"t-red\">OH</text><line x1=\"335\" y1=\"124\" x2=\"335\" y2=\"172\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"301\" y1=\"156\" x2=\"369\" y2=\"156\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-purple\" stroke-linecap=\"round\"/><text x=\"295\" y=\"161\" text-anchor=\"end\" font-size=\"14\">H</text><text x=\"375\" y=\"161\" text-anchor=\"start\" font-size=\"14\" class=\"t-purple\">OH</text><text x=\"335\" y=\"190\" text-anchor=\"middle\" font-size=\"14\">CH₂OH</text><text x=\"335\" y=\"215\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">D-glucose</text><text x=\"465\" y=\"22\" text-anchor=\"middle\" font-size=\"14\">CH₂OH</text><line x1=\"465\" y1=\"28\" x2=\"465\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"465\" y=\"65\" text-anchor=\"middle\" font-size=\"14\">C</text><text x=\"471\" y=\"65\" text-anchor=\"start\" font-size=\"14\" class=\"t-red\">=O</text><line x1=\"465\" y1=\"70\" x2=\"465\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"431\" y1=\"92\" x2=\"499\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"425\" y=\"97\" text-anchor=\"end\" font-size=\"14\" class=\"t-red\">HO</text><text x=\"505\" y=\"97\" text-anchor=\"start\" font-size=\"14\">H</text><line x1=\"465\" y1=\"92\" x2=\"465\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"431\" y1=\"124\" x2=\"499\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"425\" y=\"129\" text-anchor=\"end\" font-size=\"14\">H</text><text x=\"505\" y=\"129\" text-anchor=\"start\" font-size=\"14\" class=\"t-red\">OH</text><line x1=\"465\" y1=\"124\" x2=\"465\" y2=\"172\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"431\" y1=\"156\" x2=\"499\" y2=\"156\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-purple\" stroke-linecap=\"round\"/><text x=\"425\" y=\"161\" text-anchor=\"end\" font-size=\"14\">H</text><text x=\"505\" y=\"161\" text-anchor=\"start\" font-size=\"14\" class=\"t-purple\">OH</text><text x=\"465\" y=\"190\" text-anchor=\"middle\" font-size=\"14\">CH₂OH</text><text x=\"465\" y=\"215\" text-anchor=\"middle\" font-size=\"12.5\" class=\"t-gray\">D-fructose</text><!--c--></svg>",
  haworth: "<svg viewBox=\"0 0 520 228\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"172\" y1=\"100\" x2=\"147.52\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"129\" y1=\"70\" x2=\"62\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"70\" x2=\"28\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"100\" x2=\"64\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"130\" x2=\"136\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"136\" y1=\"130\" x2=\"172\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"138\" y=\"75\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"172\" y1=\"100\" x2=\"172\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"172\" y1=\"100\" x2=\"172\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-purple\" stroke-linecap=\"round\"/><text x=\"172\" y=\"69\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">H</text><text x=\"172\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" class=\"t-purple\">OH</text><line x1=\"136\" y1=\"130\" x2=\"136\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"136\" y1=\"130\" x2=\"136\" y2=\"156\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"136\" y=\"107\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">H</text><text x=\"136\" y=\"171\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">OH</text><line x1=\"64\" y1=\"130\" x2=\"64\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"130\" x2=\"64\" y2=\"156\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"64\" y=\"107\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">OH</text><text x=\"64\" y=\"171\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">H</text><line x1=\"28\" y1=\"100\" x2=\"28\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"100\" x2=\"28\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"28\" y=\"69\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">H</text><text x=\"28\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">OH</text><line x1=\"62\" y1=\"70\" x2=\"62\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"62\" y=\"42\" text-anchor=\"middle\" font-size=\"13\">CH₂OH</text><text x=\"184\" y=\"105\" text-anchor=\"start\" font-size=\"11\" class=\"t-purple\">1</text><line x1=\"492\" y1=\"100\" x2=\"467.52\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"449\" y1=\"70\" x2=\"382\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"382\" y1=\"70\" x2=\"348\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"100\" x2=\"384\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"384\" y1=\"130\" x2=\"456\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"456\" y1=\"130\" x2=\"492\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"458\" y=\"75\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">O</text><line x1=\"492\" y1=\"100\" x2=\"492\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-purple\" stroke-linecap=\"round\"/><line x1=\"492\" y1=\"100\" x2=\"492\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"492\" y=\"69\" text-anchor=\"middle\" font-size=\"13\" class=\"t-purple\">OH</text><text x=\"492\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">H</text><line x1=\"456\" y1=\"130\" x2=\"456\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"456\" y1=\"130\" x2=\"456\" y2=\"156\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"456\" y=\"107\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">H</text><text x=\"456\" y=\"171\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">OH</text><line x1=\"384\" y1=\"130\" x2=\"384\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"384\" y1=\"130\" x2=\"384\" y2=\"156\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"384\" y=\"107\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">OH</text><text x=\"384\" y=\"171\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">H</text><line x1=\"348\" y1=\"100\" x2=\"348\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"100\" x2=\"348\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"348\" y=\"69\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">H</text><text x=\"348\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">OH</text><line x1=\"382\" y1=\"70\" x2=\"382\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"382\" y=\"42\" text-anchor=\"middle\" font-size=\"13\">CH₂OH</text><text x=\"504\" y=\"105\" text-anchor=\"start\" font-size=\"11\" class=\"t-purple\">1</text><path d=\"M202,97 L318,97 l-8,-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M318,103 L202,103 l8,6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"260\" y=\"85\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">via open chain</text><text x=\"260\" y=\"125\" text-anchor=\"middle\" font-size=\"11.5\" class=\"t-gray\">(about 0.002%)</text><text x=\"100\" y=\"202\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">α-D-glucopyranose</text><text x=\"100\" y=\"219\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">36% at equilibrium</text><text x=\"420\" y=\"202\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">β-D-glucopyranose</text><text x=\"420\" y=\"219\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">64% at equilibrium</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-biomolecules',
  title: 'Carbohydrates, Amino Acids and Proteins',
  summary: 'The organic chemistry of life, built entirely from reactions you already know: sugars in Fischer projections, D and L, cyclic hemiacetals and their α and β anomers, glycosidic bonds as acetals; amino acids as zwitterions with an isoelectric point; peptide bonds as amides and the four levels of protein structure; and triglycerides as esters.',
  minutes: 21,
  objectives: [
    'Read and draw Fischer projections of monosaccharides, assign D or L, and count stereoisomers',
    'Explain how sugars cyclize to hemiacetals, distinguish α and β anomers, and calculate an anomeric ratio from optical rotations',
    'Recognize glycosidic bonds as acetals and explain the difference between starch and cellulose and between reducing and nonreducing sugars',
    'Draw amino acids in their cationic, zwitterionic and anionic forms and calculate isoelectric points',
    'Describe the peptide bond and the four levels of protein structure in terms of bonding you already know',
    'Identify triglycerides as triesters and relate fatty-acid structure to melting point',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Sugars in Fischer projections',
      blocks: [
        {
          type: 'p',
          text: 'A **monosaccharide** is a polyhydroxy aldehyde (an **aldose**) or polyhydroxy ketone (a **ketose**), usually with three to six carbons. Glucose is an aldohexose (aldehyde, six carbons); fructose is a ketohexose. Sugars have several adjacent [[ochem-chirality-center|chirality centers]], and chemists draw them as [[ochem-fischer-projection|Fischer projections]], which you met in the stereochemistry unit: the carbon chain vertical with C1 at the top, horizontal bonds toward you, vertical bonds away.',
        },
        {
          type: 'figure',
          svg: FIG.fischer,
          alt: 'Fischer projections. D-glyceraldehyde: CHO at top, H on the left and OH on the right of the middle carbon, CH2OH at the bottom. L-glyceraldehyde: the same with OH on the left. D-glucose: CHO, then OH right, OH left, OH right, OH right, then CH2OH. D-fructose: CH2OH, C=O, then OH left, OH right, OH right, CH2OH. The bottom stereocenter of each is highlighted in purple.',
          caption: 'D or L is decided by **one** stereocenter: the one farthest from the carbonyl (highlighted). OH on the right means D, like D-glyceraldehyde; on the left means L. Nearly all natural sugars are D. Glucose and fructose share the same configuration at C3, C4 and C5.',
        },
        {
          type: 'p',
          text: 'D and L are not R and S, and they are not the sign of rotation. D-glucose happens to be dextrorotatory and D-fructose levorotatory; the D refers only to the relationship with D-glyceraldehyde. (Every stereocenter in a Fischer projection can still be given an R/S label; C5 of D-glucose is R.)',
        },
        {
          type: 'derivation',
          title: 'How many aldohexoses are there?',
          steps: [
            { tex: '\\ce{OHC-\\overset{*}{C}HOH-\\overset{*}{C}HOH-\\overset{*}{C}HOH-\\overset{*}{C}HOH-CH2OH}', why: 'C1 is the CHO (not a stereocenter) and C6 is $\\ce{CH2OH}$ (two H). C2–C5 each carry H, OH and two different chain fragments.' },
            { tex: 'n = 4\\ \\text{chirality centers}', why: 'No internal symmetry is possible, because the two chain ends (CHO and CH₂OH) are different, so there are no meso forms.' },
            { tex: '2^{n} = 2^{4} = 16\\ \\text{stereoisomers}', why: 'The 2ⁿ rule from the stereochemistry unit.' },
            { tex: '16 = 8\\ \\text{D-aldohexoses} + 8\\ \\text{L-enantiomers}', why: 'Flip every stereocenter and you get the enantiomer, which has the opposite configuration at C5. Glucose, mannose and galactose are three of the eight D-aldohexoses; they are diastereomers.' },
          ],
          result: 'Sixteen aldohexoses, all with formula $\\ce{C6H12O6}$, as is fructose. Emil Fischer worked out which one glucose is in 1891, using only chemical reactions and symmetry arguments.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'An aldopentose has the open-chain formula $\\ce{OHC-(CHOH)3-CH2OH}$ (ribose is one of them). How many stereoisomeric aldopentoses are there?',
      hint: 'Count the carbons carrying H, OH and two different groups, then use $2^n$.',
      label: 'number $=$',
      answer: '8',
      explanation: 'C2, C3 and C4 are chirality centers; C1 (CHO) and C5 ($\\ce{CH2OH}$) are not. $2^3 = 8$: four D-aldopentoses (ribose, arabinose, xylose, lyxose) and their four L-enantiomers. The different end groups rule out meso forms.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Rings: cyclic hemiacetals and anomers',
      blocks: [
        {
          type: 'p',
          text: 'In the aldehyde unit you saw that an alcohol adds to a C=O to form a hemiacetal, and that intramolecular versions forming five- or six-membered rings are strongly favored. Glucose has an aldehyde at C1 and an OH at C5, perfectly placed. In water, more than 99.9% of glucose exists as a six-membered cyclic hemiacetal, a **pyranose**.',
        },
        {
          type: 'p',
          text: 'Ring closure turns C1 into a new chirality center, the **anomeric carbon**, so there are two ring forms, called [[ochem-anomer|anomers]]. In the β anomer the C1 OH is on the same face as the $\\ce{CH2OH}$ (up in the standard Haworth drawing); in the α anomer it is on the opposite face.',
        },
        {
          type: 'figure',
          svg: FIG.haworth,
          alt: 'Haworth projections of alpha and beta D-glucopyranose, flat hexagons with the ring oxygen at the back right and a thick front edge. Both have CH2OH up at C5, OH down at C4, OH up at C3, OH down at C2. In alpha the C1 OH points down; in beta it points up. They interconvert through the open-chain form (about 0.002%). Alpha 36%, beta 64% at equilibrium.',
          caption: 'Groups on the right in a Fischer projection point down in a Haworth projection. In the real chair, β-D-glucopyranose has **every** substituent equatorial, which is why it is the major anomer and why glucose is the most common sugar on Earth.',
        },
        {
          type: 'p',
          text: 'Dissolve pure α-glucose (specific rotation $+112.2^\\circ$) or pure β-glucose ($+18.7^\\circ$) and the rotation drifts over a few hours to the same value, $+52.7^\\circ$. This **mutarotation** is the hemiacetal opening and reclosing (acid or base catalyzed), which lets the anomers equilibrate. The rotations let you calculate the equilibrium mixture.',
        },
        {
          type: 'derivation',
          title: 'The anomer ratio from optical rotation',
          steps: [
            { tex: '[\\alpha]_{\\text{mix}} = x_\\alpha [\\alpha]_\\alpha + (1 - x_\\alpha)[\\alpha]_\\beta', why: 'Specific rotation is a weighted average of the components (the open chain is negligible).' },
            { tex: '52.7 = 112.2\\,x_\\alpha + 18.7(1 - x_\\alpha)', why: 'Substitute the three measured values.' },
            { tex: '52.7 - 18.7 = (112.2 - 18.7)\\,x_\\alpha \\implies x_\\alpha = \\frac{34.0}{93.5}', why: 'Collect the $x_\\alpha$ terms.' },
            { tex: 'x_\\alpha = 0.364', why: 'So 36% α and 64% β, exactly the ratio found by NMR.' },
          ],
          result: 'The same lever-rule arithmetic you used for enantiomeric excess, applied to two diastereomers.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the α anomer is not even rarer',
          text: 'In α-glucose the anomeric OH is axial, which steric arguments say should cost about 4 kJ/mol. It costs less than that: an electronegative group on C1 prefers the axial position somewhat, because a lone pair of the ring oxygen can donate into the C1–O σ* orbital only when the two are antiperiplanar. This **anomeric effect** is a nice example of the orbital thinking from General Chemistry deciding a conformational preference.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Pure α-D-galactopyranose has $[\\alpha]_D = +150.7^\\circ$ and the β anomer $+52.8^\\circ$. After mutarotation the solution reads $+80.2^\\circ$. What fraction of the galactose is the α anomer? Give two decimal places.',
      hint: 'Solve $80.2 = 150.7\\,x + 52.8(1 - x)$ for $x$.',
      label: '$x_\\alpha =$',
      answer: '(80.2 - 52.8)/(150.7 - 52.8)',
      answerTex: '0.28',
      tolerance: 0.005,
      explanation: '$80.2 - 52.8 = 27.4$ and $150.7 - 52.8 = 97.9$, so $x_\\alpha = 27.4/97.9 = 0.28$. About 28% α and 72% β: as with glucose, the β anomer (equatorial OH at C1) dominates.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'α-D-Glucopyranose and β-D-glucopyranose are enantiomers.',
      answer: false,
      explanation: 'They differ in configuration at **only one** of their five stereocenters (C1), so they are diastereomers, specifically anomers. Enantiomers differ at every stereocenter: the enantiomer of α-D-glucopyranose is α-L-glucopyranose. That is why the two anomers have different rotations (+112° and +19°), not equal and opposite ones.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Glycosidic bonds are acetals',
      blocks: [
        {
          type: 'p',
          text: 'A hemiacetal plus an alcohol and acid gives an [[ochem-acetal|acetal]]: you saw this in the aldehyde unit. When the anomeric OH of a sugar is replaced by an OR group, the product is a **glycoside**, and the C1–O–R link is a [[ochem-glycosidic-bond|glycosidic bond]]. When R is another sugar, you get disaccharides and polysaccharides.',
        },
        {
          type: 'table',
          headers: ['Carbohydrate', 'Units and link', 'Notes'],
          rows: [
            ['maltose', 'glucose α(1→4) glucose', 'from starch digestion; reducing'],
            ['lactose', 'galactose β(1→4) glucose', 'milk sugar; lactase splits it'],
            ['sucrose', 'glucose α(1→2)β fructose', 'both anomeric carbons used: nonreducing'],
            ['starch (amylose), glycogen', 'glucose α(1→4), branches α(1→6)', 'coils into helices; digestible fuel store'],
            ['cellulose', 'glucose β(1→4)', 'straight chains, hydrogen-bonded sheets; wood and cotton'],
          ],
          caption: 'The notation α(1→4) means: the anomeric carbon C1 of the first unit, in the α configuration, bonded through oxygen to C4 of the next.',
        },
        {
          type: 'list',
          items: [
            '**Acetals are stable in base and hydrolyze in acid**, just as in the aldehyde unit. That is why polysaccharides survive in alkaline conditions but are broken down by acid or by enzymes (glycosidases) that act as acid catalysts.',
            '**Reducing sugars** still have a free hemiacetal, which opens to the aldehyde and reduces Tollens\' or Benedict\'s reagent (the aldehyde is oxidized to a carboxylic acid). Glucose, maltose and lactose are reducing; sucrose, with both anomeric carbons tied up in the glycosidic bond, is not.',
            '**Starch versus cellulose** is a single stereocenter: α versus β at C1. Human amylase cuts α(1→4) bonds and cannot touch β(1→4). Cows and termites rely on microbes that make cellulases.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Blood types are glycosides',
          text: 'The A, B and O blood groups differ only in the sugar at the end of a short oligosaccharide on red blood cells: type A carries an N-acetylgalactosamine, type B a galactose, type O neither. One glycosidic bond, made or not made by one enzyme, decides who can donate blood to whom.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Starch and cellulose are both polymers of D-glucose linked 1→4. What is the essential chemical difference between them?',
      options: [
        { text: 'Starch uses α glycosidic bonds; cellulose uses β glycosidic bonds.', correct: true, why: 'The configuration at the anomeric carbon decides the shape. β(1→4) links give straight, flat chains that hydrogen-bond into rigid fibers; α(1→4) links give helices. Enzymes recognize the difference too.' },
        { text: 'Starch is made of D-glucose and cellulose of L-glucose.', why: 'Both are made of D-glucose. Biology uses D-sugars almost exclusively.' },
        { text: 'Starch links are acetals; cellulose links are ethers that cannot be hydrolyzed.', why: 'Both are acetals at C1 and both can be hydrolyzed by acid. Cellulose is just much harder to reach and needs different enzymes.' },
        { text: 'Cellulose contains fructose units.', why: 'Cellulose is pure glucose. Fructose appears in sucrose and in inulin, not in cellulose.' },
      ],
      explanation: 'One stereocenter makes the difference between food and wood. The β anomer puts each glucose\'s linking oxygen equatorial so the chain runs straight, letting neighboring chains hydrogen-bond into microfibrils; the α link makes each unit turn, forming starch\'s helix, which enzymes in your saliva and gut can digest.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Amino acids and the isoelectric point',
      blocks: [
        {
          type: 'p',
          text: 'Proteins are built from twenty α-amino acids, $\\ce{H2N-CHR-COOH}$: an amine and a carboxylic acid on the same carbon, plus a side chain R. All except glycine (R = H) are chiral, and natural amino acids are L, which is S for every one except cysteine (its sulfur outranks the carboxyl in the CIP rules, making it R).',
        },
        {
          type: 'p',
          text: 'With an acid (pKa about 2) and a base (pKaH about 9–10) in one molecule, an amino acid is never really "neutral" in water: near pH 7 the proton has moved from COOH to $\\ce{NH2}$, giving a [[ochem-zwitterion|zwitterion]] with both charges. That is why amino acids are high-melting, water-soluble crystalline solids, more like salts than like organic molecules.',
        },
        {
          type: 'figure',
          svg: FIG.ala,
          alt: 'Three forms of L-alanine linked by equilibrium arrows. At pH below 2: the cation, with COOH and NH3+ (net +1). Between pKa1 2.34 and pKa2 9.69: the zwitterion, with COO− and NH3+ (net 0). Above pH 10: the anion, with COO− and NH2 (net −1).',
          caption: 'Each equilibrium is one Henderson–Hasselbalch problem. The [[ochem-isoelectric-point|isoelectric point]], pI, is the pH at which the average net charge is zero: the midpoint between the two pKa values that bracket the zwitterion.',
        },
        {
          type: 'graph',
          x: [0, 14],
          y: [-1.2, 1.2],
          xStep: 1,
          yStep: 0.5,
          functions: [{ expr: '1/(1 + 10^(x - b)) - 1/(1 + 10^(a - x))', label: 'average net charge', color: 'purple' }],
          points: [{ x: '(a + b)/2', y: 0, label: 'pI', color: 'red' }],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [
            { name: 'a', min: 1.5, max: 4.5, step: 0.01, value: 2.34, label: 'pKa of COOH' },
            { name: 'b', min: 8, max: 11, step: 0.01, value: 9.69, label: 'pKa of $\\ce{NH3+}$' },
          ],
          readouts: [{ label: 'pI $= (\\text{p}K_{a1} + \\text{p}K_{a2})/2 =$', expr: '(a + b)/2', digits: 2 }],
          caption: 'Net charge of a simple amino acid (default: alanine) versus pH: +1 in strong acid, 0 on a broad plateau, −1 in strong base. In electrophoresis, a protein at its pI does not move in an electric field.',
        },
        {
          type: 'derivation',
          title: 'pI of aspartic acid (an acidic side chain)',
          steps: [
            { tex: '\\text{p}K_a:\\ \\alpha\\text{-COOH } 1.88,\\quad \\text{side-chain COOH } 3.65,\\quad \\alpha\\text{-}\\ce{NH3+}\\ 9.60', why: 'Three ionizable groups. List the forms from low to high pH: +1, 0, −1, −2.' },
            { tex: '\\text{net 0 form exists between pH } 1.88 \\text{ and } 3.65', why: 'Losing the first proton (α-COOH) takes the cation to the neutral zwitterion; losing the second (side chain) makes it −1.' },
            { tex: '\\text{pI} = \\frac{1.88 + 3.65}{2} = 2.77', why: 'Average the two pKa values on either side of the neutral form, not the two "α" values.' },
          ],
          result: 'Acidic amino acids have low pI values (aspartate 2.77), basic ones high (lysine 9.74, from its two amine pKa values, 8.95 and 10.53). At pH 7.4 aspartate carries −1 and lysine +1, which is how proteins form salt bridges.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Glycine has pKa values 2.34 (COOH) and 9.60 ($\\ce{NH3+}$). What is its isoelectric point? Give two decimal places.',
      hint: 'For an amino acid without an ionizable side chain, pI is the average of its two pKa values.',
      label: 'pI $=$',
      answer: '(2.34 + 9.60)/2',
      answerTex: '5.97',
      tolerance: 0.005,
      explanation: 'pI $= (2.34 + 9.60)/2 = 5.97$. At this pH the small amounts of cation and anion exactly balance, and the zwitterion dominates. Below pH 5.97 glycine carries a net positive charge, above it a net negative charge.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student calculates the isoelectric point of lysine (pKa values 2.18 for COOH, 8.95 for α-$\\ce{NH3+}$, 10.53 for the side-chain $\\ce{NH3+}$). Tap the first incorrect line.',
      lines: [
        'At very low pH, lysine has COOH, α-$\\ce{NH3+}$ and side-chain $\\ce{NH3+}$: net charge +2.',
        'Losing the COOH proton (pKa 2.18) gives net +1; losing the α-$\\ce{NH3+}$ proton (8.95) gives net 0; losing the side-chain proton (10.53) gives −1.',
        'The net-zero form exists between pKa 2.18 and pKa 8.95.',
        'So pI $= (8.95 + 10.53)/2 = 9.74$.',
      ],
      errorLines: [3],
      explanation: 'Line 2 is right: the net-zero form appears after the **second** deprotonation (8.95) and disappears at the third (10.53). So it exists between 8.95 and 10.53, not between 2.18 and 8.95 (that range holds the +1 form). The final answer in line 4 happens to be correct, but line 3 contradicts it: pI = (8.95 + 10.53)/2 = 9.74. Always average the two pKa values on either side of the net-zero species.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Peptide bonds and protein structure',
      blocks: [
        {
          type: 'p',
          text: 'Join the carboxyl of one amino acid to the amine of the next with loss of water and you have an amide, here called a [[ochem-peptide-bond|peptide bond]]. Chains are written from the free $\\ce{NH3+}$ end (N-terminus) to the free $\\ce{COO-}$ end (C-terminus).',
        },
        {
          type: 'figure',
          svg: FIG.dipeptide,
          alt: 'The dipeptide Ala-Gly as a zwitterion: on the right, alanine\'s alpha carbon with a wedged NH3+ and a methyl group; its carbonyl forms an amide with glycine\'s NH, boxed in purple and labeled peptide bond; on the left, glycine\'s CH2 and carboxylate. Ala is the N-terminus and Gly the C-terminus.',
          caption: 'Ala-Gly (not the same molecule as Gly-Ala). Everything you learned about amides applies: resonance makes the peptide unit planar and rigid, almost always trans, with a C–N rotation barrier of about 80 kJ/mol; and the bond is very slow to hydrolyze without an enzyme.',
        },
        {
          type: 'table',
          headers: ['Level', 'What it is', 'Held together by'],
          rows: [
            ['primary', 'the amino acid sequence', 'covalent peptide (amide) bonds'],
            ['secondary', 'local folds: α-helix, β-sheet', 'hydrogen bonds between backbone C=O and N–H'],
            ['tertiary', 'the 3D fold of one chain', 'side-chain interactions: hydrophobic packing, H-bonds, salt bridges, disulfide (S–S) bonds'],
            ['quaternary', 'several chains assembled', 'the same noncovalent forces between chains (hemoglobin: four chains)'],
          ],
        },
        {
          type: 'p',
          text: 'Secondary structure is possible only because the peptide unit is flat: rotation happens at the two bonds on either side of each α-carbon, and the patterns of those rotations make helices and sheets. Disulfide bonds come from oxidizing two cysteine thiols, $\\ce{2RSH -> RS-SR}$, the sulfur analog of oxidations you know; perming hair breaks and reforms them.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Sequences as strings',
          text: 'Biologists store proteins as strings over a 20-letter alphabet (A for alanine, G for glycine, K for lysine…), and a protein\'s primary structure is literally a `std::string`. Predicting the 3D structure from that string was a 50-year grand challenge until deep-learning models such as AlphaFold (2020) began predicting many structures with near-experimental accuracy, earning a share of the 2024 Nobel Prize in Chemistry.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Match each feature of a protein to its level of structure.',
      template: 'The order Gly-Ala-Ser-Lys… is the ___ structure. An α-helix held by backbone C=O···H–N hydrogen bonds is ___ structure. A disulfide bond linking two distant cysteines in one chain is part of the ___ structure. Hemoglobin\'s four chains fitting together is its ___ structure.',
      blanks: [{ answers: ['primary'] }, { answers: ['secondary'] }, { answers: ['tertiary'] }, { answers: ['quaternary'] }],
      wordBank: ['primary', 'secondary', 'tertiary', 'quaternary', 'peptide'],
      explanation: 'Primary = sequence (covalent backbone). Secondary = regular local folds from backbone hydrogen bonds. Tertiary = the whole chain\'s 3D shape, set by side chains (including covalent S–S bridges within a chain). Quaternary = how separate chains associate.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Lipids: fats are esters',
      blocks: [
        {
          type: 'p',
          text: 'Fats and oils are [[ochem-triglyceride|triglycerides]]: triesters of glycerol with three long-chain carboxylic acids (fatty acids, usually 12–20 carbons, almost always an even number because they are built from acetyl units by Claisen-type condensations). Saponifying them gives soap, as you saw in the acyl substitution lesson.',
        },
        {
          type: 'figure',
          svg: FIG.fatty,
          alt: 'Two C18 fatty acids. Stearic acid, a straight saturated zigzag chain ending in COOH, melting point 69 °C. Oleic acid, the same length with one cis C=C in the middle that puts a sharp bend in the chain, melting point 13 °C.',
          caption: 'A single cis double bond kinks the chain, so the molecules cannot pack tightly and the melting point drops by 56 °C. Fats rich in saturated chains (butter, lard) are solid; oils rich in cis-unsaturated chains (olive, canola) are liquid.',
        },
        {
          type: 'list',
          items: [
            '**Hydrogenation** (the alkene unit) saturates C=C bonds and turns oils into solid margarine. Partial hydrogenation also isomerizes some cis bonds to **trans**, and trans fats, which pack like saturated chains, raise heart-disease risk; many countries now ban them in food.',
            '**Phospholipids** replace one fatty acid with a phosphate ester bearing a charged head group. Two tails and a charged head make them assemble into the bilayers of cell membranes, the barrier that neutral drug molecules must cross.',
            '**Steroids** such as cholesterol and testosterone are lipids built on four fused rings, the targets that drove Robinson\'s annulation chemistry.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The whole lesson in one table',
          text: 'Biomolecules use the reactions of this course: hemiacetal and acetal formation (sugars), acid–base equilibria and the Henderson–Hasselbalch equation (amino acids), amide formation and hydrolysis (proteins), ester formation and saponification (fats), Claisen and aldol reactions (fatty-acid synthesis, glycolysis), hydrogenation (fats), and disulfide oxidation (proteins). Enzymes add catalysis and stereocontrol, not new kinds of reaction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'A triglyceride is boiled with aqueous NaOH. Which products form?',
      options: [
        { text: 'Glycerol and three sodium carboxylates (soap)', correct: true, why: 'Saponification of each of the three ester groups: hydroxide attacks the C=O, the glycerol oxygen leaves, and the acid is deprotonated irreversibly.' },
        { text: 'Three fatty alcohols and sodium glycerate', why: 'That would require the C–O bond on the other side of the ester oxygen to break and the acyl carbon to be reduced. Ester hydrolysis keeps the acyl carbon at the acid oxidation level.' },
        { text: 'Glycerol and three free fatty acids', why: 'In base the acids cannot survive: they are immediately deprotonated to carboxylates. You get free fatty acids only after acidifying, or by acid-catalyzed hydrolysis.' },
        { text: 'No reaction: triglycerides are stable to base.', why: 'Esters are hydrolyzed by hydroxide. It is acetals, such as the glycosidic bonds of starch, that are stable to base.' },
      ],
      explanation: 'A triglyceride is three esters on one glycerol. Saponification (one hydroxide per ester, irreversible) gives glycerol plus three fatty-acid carboxylate salts: soap, the oldest organic reaction run on purpose.',
    },
  ],
  takeaways: [
    'Monosaccharides are polyhydroxy aldehydes or ketones; in Fischer projections the OH on the stereocenter farthest from C=O decides D (right) or L (left). An aldohexose has 2⁴ = 16 stereoisomers.',
    'Sugars cyclize to hemiacetals (pyranoses); the new stereocenter at C1 gives α and β anomers, which interconvert by mutarotation (glucose 36% α, 64% β).',
    'Glycosidic bonds are acetals: stable to base, hydrolyzed by acid or enzymes. α(1→4) gives starch, β(1→4) gives cellulose; a free hemiacetal makes a sugar reducing.',
    'Amino acids are zwitterions near pH 7; pI is the average of the two pKa values bracketing the net-zero form (alanine 6.02, aspartate 2.77, lysine 9.74).',
    'Peptide bonds are planar amides; protein structure has primary (sequence), secondary (backbone H-bonds), tertiary (side chains, S–S) and quaternary (chain assembly) levels.',
    'Triglycerides are triesters of glycerol; cis double bonds kink chains and lower melting points; saponification makes soap.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Chapters 25 (Biomolecules: Carbohydrates), 26 (Amino Acids, Peptides and Proteins) and 27 (Lipids) cover this lesson in depth.',
    },
    {
      title: 'Wikipedia — Mutarotation',
      url: 'https://en.wikipedia.org/wiki/Mutarotation',
      source: 'wikipedia',
      note: 'The rotation data for glucose anomers and the ring-opening mechanism.',
    },
    {
      title: 'Wikipedia — Isoelectric point',
      url: 'https://en.wikipedia.org/wiki/Isoelectric_point',
      source: 'wikipedia',
      note: 'How pI is calculated for amino acids and proteins, and how it is used in electrophoresis.',
    },
    {
      title: 'Khan Academy — Organic chemistry',
      url: 'https://www.khanacademy.org/science/organic-chemistry',
      source: 'khan',
      note: 'Videos on carbohydrate Fischer and Haworth projections, anomers and glycosidic bonds.',
    },
  ],
};
