import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  anisole: "<svg viewBox=\"0 0 520 330\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"18\" text-anchor=\"start\" font-size=\"13\" class=\"t-blue\" font-weight=\"600\">para attack</text><line x1=\"55\" y1=\"61\" x2=\"75.8\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"75.8\" y1=\"73\" x2=\"75.8\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"75.8\" y1=\"97\" x2=\"55\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"69.8\" y1=\"95.3\" x2=\"56.5\" y2=\"102.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"55\" y1=\"109\" x2=\"34.2\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"34.2\" y1=\"97\" x2=\"34.2\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"38.7\" y1=\"92.7\" x2=\"38.7\" y2=\"77.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"34.2\" y1=\"73\" x2=\"55\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"41.2\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"55\" y1=\"61\" x2=\"45.8\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"68.8\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"55\" y1=\"61\" x2=\"64.2\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"55\" y=\"140.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OCH₃</text><line x1=\"55\" y1=\"109\" x2=\"55\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"85.3\" cy=\"67.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"82.1\" y1=\"67.5\" x2=\"88.5\" y2=\"67.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"85.3\" y1=\"64.3\" x2=\"85.3\" y2=\"70.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"175\" y1=\"61\" x2=\"195.8\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"195.8\" y1=\"73\" x2=\"195.8\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"191.3\" y1=\"77.3\" x2=\"191.3\" y2=\"92.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"195.8\" y1=\"97\" x2=\"175\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"175\" y1=\"109\" x2=\"154.2\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"154.2\" y1=\"97\" x2=\"154.2\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"158.7\" y1=\"92.7\" x2=\"158.7\" y2=\"77.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"154.2\" y1=\"73\" x2=\"175\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"161.2\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"175\" y1=\"61\" x2=\"165.8\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"188.8\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"175\" y1=\"61\" x2=\"184.2\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"175\" y=\"140.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OCH₃</text><line x1=\"175\" y1=\"109\" x2=\"175\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"163\" cy=\"111\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1\"/><line x1=\"159.8\" y1=\"111\" x2=\"166.2\" y2=\"111\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\"/><line x1=\"163\" y1=\"107.8\" x2=\"163\" y2=\"114.2\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\"/><rect x=\"141\" y=\"35\" width=\"68\" height=\"108\" rx=\"8\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.08\"/><line x1=\"295\" y1=\"61\" x2=\"315.8\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"315.8\" y1=\"73\" x2=\"315.8\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"311.3\" y1=\"77.3\" x2=\"311.3\" y2=\"92.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"315.8\" y1=\"97\" x2=\"295\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"295\" y1=\"109\" x2=\"274.2\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"274.2\" y1=\"97\" x2=\"274.2\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"278.7\" y1=\"92.7\" x2=\"278.7\" y2=\"77.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"274.2\" y1=\"73\" x2=\"295\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"281.2\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"295\" y1=\"61\" x2=\"285.8\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"308.8\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"295\" y1=\"61\" x2=\"304.2\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"295\" y=\"140.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OCH₃</text><line x1=\"297.4\" y1=\"109\" x2=\"297.4\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"292.6\" y1=\"109\" x2=\"292.6\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"321\" cy=\"133\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1\"/><line x1=\"317.8\" y1=\"133\" x2=\"324.2\" y2=\"133\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\"/><line x1=\"321\" y1=\"129.8\" x2=\"321\" y2=\"136.2\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\"/><rect x=\"261\" y=\"35\" width=\"68\" height=\"108\" rx=\"8\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.08\"/><line x1=\"415\" y1=\"61\" x2=\"435.8\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"435.8\" y1=\"73\" x2=\"435.8\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"431.3\" y1=\"77.3\" x2=\"431.3\" y2=\"92.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"435.8\" y1=\"97\" x2=\"415\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"415\" y1=\"109\" x2=\"394.2\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"413.5\" y1=\"102.9\" x2=\"400.2\" y2=\"95.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"394.2\" y1=\"97\" x2=\"394.2\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"394.2\" y1=\"73\" x2=\"415\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"401.2\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"415\" y1=\"61\" x2=\"405.8\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"428.8\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"415\" y1=\"61\" x2=\"424.2\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"415\" y=\"140.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OCH₃</text><line x1=\"415\" y1=\"109\" x2=\"415\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"384.7\" cy=\"67.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"381.5\" y1=\"67.5\" x2=\"387.9\" y2=\"67.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"384.7\" y1=\"64.3\" x2=\"384.7\" y2=\"70.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"97\" y1=\"85\" x2=\"133\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M133,85 L125.9,88.6 M133,85 L125.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M97,85 L104.1,81.4 M97,85 L104.1,88.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"217\" y1=\"85\" x2=\"253\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M253,85 L245.9,88.6 M253,85 L245.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M217,85 L224.1,81.4 M217,85 L224.1,88.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"337\" y1=\"85\" x2=\"373\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M373,85 L365.9,88.6 M373,85 L365.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M337,85 L344.1,81.4 M337,85 L344.1,88.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"235\" y=\"158\" text-anchor=\"middle\" font-size=\"11\" class=\"t-green\">+ on the carbon bearing OCH₃, then an extra structure in which every atom has an octet (O⁺)</text><line x1=\"10\" y1=\"172\" x2=\"510\" y2=\"172\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.6\" stroke-dasharray=\"2 4\"/><text x=\"8\" y=\"192\" text-anchor=\"start\" font-size=\"13\" class=\"t-orange\" font-weight=\"600\">meta attack</text><line x1=\"100\" y1=\"231\" x2=\"120.8\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"120.8\" y1=\"243\" x2=\"120.8\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"120.8\" y1=\"267\" x2=\"100\" y2=\"279\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"114.8\" y1=\"265.3\" x2=\"101.5\" y2=\"272.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"100\" y1=\"279\" x2=\"79.2\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"79.2\" y1=\"267\" x2=\"79.2\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"83.7\" y1=\"262.7\" x2=\"83.7\" y2=\"247.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"79.2\" y1=\"243\" x2=\"100\" y2=\"231\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"86.2\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"100\" y1=\"231\" x2=\"90.8\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"113.8\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"100\" y1=\"231\" x2=\"109.2\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"143.3\" y=\"285.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OCH₃</text><line x1=\"120.8\" y1=\"267\" x2=\"132\" y2=\"273.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"130.3\" cy=\"237.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"127.1\" y1=\"237.5\" x2=\"133.5\" y2=\"237.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"130.3\" y1=\"234.3\" x2=\"130.3\" y2=\"240.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"240\" y1=\"231\" x2=\"260.8\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"260.8\" y1=\"243\" x2=\"260.8\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"256.3\" y1=\"247.3\" x2=\"256.3\" y2=\"262.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"260.8\" y1=\"267\" x2=\"240\" y2=\"279\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240\" y1=\"279\" x2=\"219.2\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"219.2\" y1=\"267\" x2=\"219.2\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"223.7\" y1=\"262.7\" x2=\"223.7\" y2=\"247.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"219.2\" y1=\"243\" x2=\"240\" y2=\"231\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"226.2\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"240\" y1=\"231\" x2=\"230.8\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"253.8\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"240\" y1=\"231\" x2=\"249.2\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"283.3\" y=\"285.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OCH₃</text><line x1=\"260.8\" y1=\"267\" x2=\"272\" y2=\"273.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"240\" cy=\"290\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"236.8\" y1=\"290\" x2=\"243.2\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"240\" y1=\"286.8\" x2=\"240\" y2=\"293.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"380\" y1=\"231\" x2=\"400.8\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"400.8\" y1=\"243\" x2=\"400.8\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"396.3\" y1=\"247.3\" x2=\"396.3\" y2=\"262.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"400.8\" y1=\"267\" x2=\"380\" y2=\"279\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"380\" y1=\"279\" x2=\"359.2\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"378.5\" y1=\"272.9\" x2=\"365.2\" y2=\"265.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"359.2\" y1=\"267\" x2=\"359.2\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"359.2\" y1=\"243\" x2=\"380\" y2=\"231\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"366.2\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"380\" y1=\"231\" x2=\"370.8\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"393.8\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"380\" y1=\"231\" x2=\"389.2\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"423.3\" y=\"285.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OCH₃</text><line x1=\"400.8\" y1=\"267\" x2=\"412\" y2=\"273.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"349.7\" cy=\"237.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"346.5\" y1=\"237.5\" x2=\"352.9\" y2=\"237.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"349.7\" y1=\"234.3\" x2=\"349.7\" y2=\"240.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"152\" y1=\"255\" x2=\"188\" y2=\"255\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M188,255 L180.9,258.6 M188,255 L180.9,251.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M152,255 L159.1,251.4 M152,255 L159.1,258.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"292\" y1=\"255\" x2=\"328\" y2=\"255\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M328,255 L320.9,258.6 M328,255 L320.9,251.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M292,255 L299.1,251.4 M292,255 L299.1,258.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"260\" y=\"322\" text-anchor=\"middle\" font-size=\"11\" class=\"t-orange\">the + never reaches C3, so the OCH₃ lone pair cannot help: only three structures</text></svg>",
  nitro: "<svg viewBox=\"0 0 520 330\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"18\" text-anchor=\"start\" font-size=\"13\" class=\"t-blue\" font-weight=\"600\">para attack</text><line x1=\"80\" y1=\"61\" x2=\"100.8\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"100.8\" y1=\"73\" x2=\"100.8\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"100.8\" y1=\"97\" x2=\"80\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"94.8\" y1=\"95.3\" x2=\"81.5\" y2=\"102.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"80\" y1=\"109\" x2=\"59.2\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"59.2\" y1=\"97\" x2=\"59.2\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"63.7\" y1=\"92.7\" x2=\"63.7\" y2=\"77.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"59.2\" y1=\"73\" x2=\"80\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"66.2\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"80\" y1=\"61\" x2=\"70.8\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"93.8\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"80\" y1=\"61\" x2=\"89.2\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"80\" y=\"140.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">NO₂</text><line x1=\"80\" y1=\"109\" x2=\"80\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"110.3\" cy=\"67.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"107.1\" y1=\"67.5\" x2=\"113.5\" y2=\"67.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"110.3\" y1=\"64.3\" x2=\"110.3\" y2=\"70.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"230\" y1=\"61\" x2=\"250.8\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"250.8\" y1=\"73\" x2=\"250.8\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"246.3\" y1=\"77.3\" x2=\"246.3\" y2=\"92.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"250.8\" y1=\"97\" x2=\"230\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"230\" y1=\"109\" x2=\"209.2\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"209.2\" y1=\"97\" x2=\"209.2\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"213.7\" y1=\"92.7\" x2=\"213.7\" y2=\"77.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"209.2\" y1=\"73\" x2=\"230\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"216.2\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"230\" y1=\"61\" x2=\"220.8\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"243.8\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"230\" y1=\"61\" x2=\"239.2\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"230\" y=\"140.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">NO₂</text><line x1=\"230\" y1=\"109\" x2=\"230\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"218\" cy=\"111\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1\"/><line x1=\"214.8\" y1=\"111\" x2=\"221.2\" y2=\"111\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.2\"/><line x1=\"218\" y1=\"107.8\" x2=\"218\" y2=\"114.2\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.2\"/><rect x=\"196\" y=\"35\" width=\"68\" height=\"108\" rx=\"8\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.08\"/><line x1=\"380\" y1=\"61\" x2=\"400.8\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"400.8\" y1=\"73\" x2=\"400.8\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"396.3\" y1=\"77.3\" x2=\"396.3\" y2=\"92.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"400.8\" y1=\"97\" x2=\"380\" y2=\"109\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"380\" y1=\"109\" x2=\"359.2\" y2=\"97\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"378.5\" y1=\"102.9\" x2=\"365.2\" y2=\"95.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"359.2\" y1=\"97\" x2=\"359.2\" y2=\"73\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"359.2\" y1=\"73\" x2=\"380\" y2=\"61\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"366.2\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"380\" y1=\"61\" x2=\"370.8\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"393.8\" y=\"46.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"380\" y1=\"61\" x2=\"389.2\" y2=\"47.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"380\" y=\"140.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">NO₂</text><line x1=\"380\" y1=\"109\" x2=\"380\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"349.7\" cy=\"67.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"346.5\" y1=\"67.5\" x2=\"352.9\" y2=\"67.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"349.7\" y1=\"64.3\" x2=\"349.7\" y2=\"70.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"137\" y1=\"85\" x2=\"173\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M173,85 L165.9,88.6 M173,85 L165.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M137,85 L144.1,81.4 M137,85 L144.1,88.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"287\" y1=\"85\" x2=\"323\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M323,85 L315.9,88.6 M323,85 L315.9,81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M287,85 L294.1,81.4 M287,85 L294.1,88.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"245\" y=\"158\" text-anchor=\"middle\" font-size=\"11\" class=\"t-red\">+ on the carbon bonded to N⁺ of the nitro group: two positive centers side by side</text><line x1=\"10\" y1=\"172\" x2=\"510\" y2=\"172\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.6\" stroke-dasharray=\"2 4\"/><text x=\"8\" y=\"192\" text-anchor=\"start\" font-size=\"13\" class=\"t-orange\" font-weight=\"600\">meta attack</text><line x1=\"100\" y1=\"231\" x2=\"120.8\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"120.8\" y1=\"243\" x2=\"120.8\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"120.8\" y1=\"267\" x2=\"100\" y2=\"279\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"114.8\" y1=\"265.3\" x2=\"101.5\" y2=\"272.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"100\" y1=\"279\" x2=\"79.2\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"79.2\" y1=\"267\" x2=\"79.2\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"83.7\" y1=\"262.7\" x2=\"83.7\" y2=\"247.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"79.2\" y1=\"243\" x2=\"100\" y2=\"231\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"86.2\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"100\" y1=\"231\" x2=\"90.8\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"113.8\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"100\" y1=\"231\" x2=\"109.2\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"143.3\" y=\"285.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">NO₂</text><line x1=\"120.8\" y1=\"267\" x2=\"132\" y2=\"273.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"130.3\" cy=\"237.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"127.1\" y1=\"237.5\" x2=\"133.5\" y2=\"237.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"130.3\" y1=\"234.3\" x2=\"130.3\" y2=\"240.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"240\" y1=\"231\" x2=\"260.8\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"260.8\" y1=\"243\" x2=\"260.8\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"256.3\" y1=\"247.3\" x2=\"256.3\" y2=\"262.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"260.8\" y1=\"267\" x2=\"240\" y2=\"279\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240\" y1=\"279\" x2=\"219.2\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"219.2\" y1=\"267\" x2=\"219.2\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"223.7\" y1=\"262.7\" x2=\"223.7\" y2=\"247.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"219.2\" y1=\"243\" x2=\"240\" y2=\"231\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"226.2\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"240\" y1=\"231\" x2=\"230.8\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"253.8\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"240\" y1=\"231\" x2=\"249.2\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"283.3\" y=\"285.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">NO₂</text><line x1=\"260.8\" y1=\"267\" x2=\"272\" y2=\"273.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"240\" cy=\"290\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"236.8\" y1=\"290\" x2=\"243.2\" y2=\"290\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"240\" y1=\"286.8\" x2=\"240\" y2=\"293.2\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"380\" y1=\"231\" x2=\"400.8\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"400.8\" y1=\"243\" x2=\"400.8\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"396.3\" y1=\"247.3\" x2=\"396.3\" y2=\"262.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"400.8\" y1=\"267\" x2=\"380\" y2=\"279\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"380\" y1=\"279\" x2=\"359.2\" y2=\"267\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"378.5\" y1=\"272.9\" x2=\"365.2\" y2=\"265.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"359.2\" y1=\"267\" x2=\"359.2\" y2=\"243\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"359.2\" y1=\"243\" x2=\"380\" y2=\"231\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"366.2\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\">H</text><line x1=\"380\" y1=\"231\" x2=\"370.8\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"393.8\" y=\"216.7\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">E</text><line x1=\"380\" y1=\"231\" x2=\"389.2\" y2=\"217.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"423.3\" y=\"285.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">NO₂</text><line x1=\"400.8\" y1=\"267\" x2=\"412\" y2=\"273.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"349.7\" cy=\"237.5\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"346.5\" y1=\"237.5\" x2=\"352.9\" y2=\"237.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"349.7\" y1=\"234.3\" x2=\"349.7\" y2=\"240.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line x1=\"152\" y1=\"255\" x2=\"188\" y2=\"255\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M188,255 L180.9,258.6 M188,255 L180.9,251.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M152,255 L159.1,251.4 M152,255 L159.1,258.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><line x1=\"292\" y1=\"255\" x2=\"328\" y2=\"255\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M328,255 L320.9,258.6 M328,255 L320.9,251.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M292,255 L299.1,251.4 M292,255 L299.1,258.6\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"260\" y=\"322\" text-anchor=\"middle\" font-size=\"11\" class=\"t-orange\">the + never sits next to the nitro group: the least bad option</text></svg>",
  synth: "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,20)\"><line x1=\"14.22\" y1=\"28\" x2=\"14.22\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.82\" y1=\"30.56\" x2=\"17.82\" y2=\"49.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35\" y1=\"64\" x2=\"55.78\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.42\" y1=\"59.6\" x2=\"51.77\" y2=\"50.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.78\" y1=\"28\" x2=\"35\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.77\" y1=\"29.84\" x2=\"35.42\" y2=\"20.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"14.22\" y1=\"52\" x2=\"35\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.78\" y1=\"52\" x2=\"55.78\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"14.22\" y1=\"28\" x2=\"35\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(150,10)\"><text x=\"91.12\" y=\"52.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"103.02\" y=\"46.5\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">-</text><text x=\"70.73\" y=\"40.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"81.84\" y=\"34.5\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><text x=\"70.34\" y=\"16.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><line x1=\"77.58\" y1=\"28.5\" x2=\"77.58\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"73.98\" y1=\"28.5\" x2=\"73.98\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55\" y1=\"47.5\" x2=\"34.22\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"50.98\" y1=\"49.34\" x2=\"34.63\" y2=\"39.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"13.43\" y1=\"47.5\" x2=\"13.43\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.03\" y1=\"50.06\" x2=\"17.03\" y2=\"68.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.22\" y1=\"83.5\" x2=\"55\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.63\" y1=\"79.1\" x2=\"50.98\" y2=\"69.66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"90.12\" y1=\"43.78\" x2=\"81.84\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"69.73\" y1=\"39\" x2=\"55\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"34.22\" y1=\"35.5\" x2=\"13.43\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"13.43\" y1=\"71.5\" x2=\"34.22\" y2=\"83.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55\" y1=\"47.5\" x2=\"55\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"205\" y=\"119\" text-anchor=\"middle\" font-size=\"13\">nitrobenzene</text><g transform=\"translate(360,5)\"><text x=\"101.6\" y=\"43.88\" font-weight=\"normal\" font-size=\"13\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"112.72\" y=\"38.55\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">-</text><text x=\"83.86\" y=\"33.43\" font-weight=\"normal\" font-size=\"13\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"94.25\" y=\"28.09\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><text x=\"83.5\" y=\"12.52\" font-weight=\"normal\" font-size=\"13\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"45.85\" y=\"96.15\" font-weight=\"normal\" font-size=\"13\" fill=\"currentColor\" class=\"t-green\">Br</text><line x1=\"90.12\" y1=\"23.09\" x2=\"90.12\" y2=\"14.19\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"86.99\" y1=\"23.09\" x2=\"86.99\" y2=\"14.19\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"70.45\" y1=\"39.55\" x2=\"52.35\" y2=\"29.09\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"66.95\" y1=\"41.15\" x2=\"52.71\" y2=\"32.93\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"34.24\" y1=\"39.55\" x2=\"34.24\" y2=\"60.45\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"37.38\" y1=\"41.78\" x2=\"37.38\" y2=\"58.22\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"52.35\" y1=\"70.91\" x2=\"70.45\" y2=\"60.45\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"52.71\" y1=\"67.07\" x2=\"66.95\" y2=\"58.85\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"100.6\" y1=\"36.05\" x2=\"94.25\" y2=\"32.38\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"82.86\" y1=\"32.38\" x2=\"70.45\" y2=\"39.55\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"52.35\" y1=\"29.09\" x2=\"34.24\" y2=\"39.55\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"34.24\" y1=\"60.45\" x2=\"52.35\" y2=\"70.91\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"52.35\" y1=\"70.91\" x2=\"52.35\" y2=\"85.81\" stroke=\"currentColor\" stroke-width=\"1.25\" /><line x1=\"70.45\" y1=\"39.55\" x2=\"70.45\" y2=\"60.45\" stroke=\"currentColor\" stroke-width=\"1.25\" /></g><text x=\"435\" y=\"119\" text-anchor=\"middle\" font-size=\"13\">m-bromonitrobenzene</text><g transform=\"translate(0,160)\"><line x1=\"14.22\" y1=\"28\" x2=\"14.22\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"17.82\" y1=\"30.56\" x2=\"17.82\" y2=\"49.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35\" y1=\"64\" x2=\"55.78\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"35.42\" y1=\"59.6\" x2=\"51.77\" y2=\"50.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.78\" y1=\"28\" x2=\"35\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"51.77\" y1=\"29.84\" x2=\"35.42\" y2=\"20.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"14.22\" y1=\"52\" x2=\"35\" y2=\"64\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"55.78\" y1=\"52\" x2=\"55.78\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"14.22\" y1=\"28\" x2=\"35\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><g transform=\"translate(150,150)\"><text x=\"79.18\" y=\"28.17\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Br</text><line x1=\"65.39\" y1=\"35.5\" x2=\"44.61\" y2=\"23.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"61.37\" y1=\"37.34\" x2=\"45.03\" y2=\"27.9\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.82\" y1=\"35.5\" x2=\"23.82\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"27.42\" y1=\"38.06\" x2=\"27.42\" y2=\"56.94\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.61\" y1=\"71.5\" x2=\"65.39\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"45.03\" y1=\"67.1\" x2=\"61.37\" y2=\"57.66\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"78.18\" y1=\"28.12\" x2=\"65.39\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"44.61\" y1=\"23.5\" x2=\"23.82\" y2=\"35.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"23.82\" y1=\"59.5\" x2=\"44.61\" y2=\"71.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.39\" y1=\"35.5\" x2=\"65.39\" y2=\"59.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"205\" y=\"259\" text-anchor=\"middle\" font-size=\"13\">bromobenzene</text><g transform=\"translate(360,145)\"><text x=\"121.52\" y=\"54.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"133.41\" y=\"49\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-red\">-</text><text x=\"101.12\" y=\"42.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-blue\">N</text><text x=\"112.23\" y=\"37\" font-weight=\"normal\" font-size=\"9\" fill=\"currentColor\" class=\"t-blue\">+</text><text x=\"100.73\" y=\"18.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-red\">O</text><text x=\"16.04\" y=\"90.67\" font-weight=\"normal\" font-size=\"14\" fill=\"currentColor\" class=\"t-green\">Br</text><line x1=\"107.98\" y1=\"31\" x2=\"107.98\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"104.38\" y1=\"31\" x2=\"104.38\" y2=\"21\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.39\" y1=\"50\" x2=\"64.61\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"81.37\" y1=\"51.84\" x2=\"65.03\" y2=\"42.4\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.82\" y1=\"50\" x2=\"43.82\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"47.42\" y1=\"52.56\" x2=\"47.42\" y2=\"71.44\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.61\" y1=\"86\" x2=\"85.39\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"65.03\" y1=\"81.6\" x2=\"81.37\" y2=\"72.16\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"120.52\" y1=\"46.28\" x2=\"112.23\" y2=\"41.5\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"100.12\" y1=\"41.5\" x2=\"85.39\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"64.61\" y1=\"38\" x2=\"43.82\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.82\" y1=\"74\" x2=\"31.04\" y2=\"81.38\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"43.82\" y1=\"74\" x2=\"64.61\" y2=\"86\" stroke=\"currentColor\" stroke-width=\"1.44\" /><line x1=\"85.39\" y1=\"50\" x2=\"85.39\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.44\" /></g><text x=\"435\" y=\"259\" text-anchor=\"middle\" font-size=\"13\">p-bromonitrobenzene (+ ortho)</text><line x1=\"72\" y1=\"60\" x2=\"148\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M148,60 L140.9,63.6 M148,60 L140.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"110\" y=\"52\" text-anchor=\"middle\" font-size=\"12\">HNO₃, H₂SO₄</text><line x1=\"262\" y1=\"60\" x2=\"355\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M355,60 L347.9,63.6 M355,60 L347.9,56.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"308.5\" y=\"52\" text-anchor=\"middle\" font-size=\"12\">Br₂, FeBr₃</text><text x=\"308.5\" y=\"78\" text-anchor=\"middle\" font-size=\"12\">NO₂ directs meta</text><line x1=\"72\" y1=\"200\" x2=\"148\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M148,200 L140.9,203.6 M148,200 L140.9,196.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"110\" y=\"192\" text-anchor=\"middle\" font-size=\"12\">Br₂, FeBr₃</text><line x1=\"262\" y1=\"200\" x2=\"355\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M355,200 L347.9,203.6 M355,200 L347.9,196.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"308.5\" y=\"192\" text-anchor=\"middle\" font-size=\"12\">HNO₃, H₂SO₄</text><text x=\"308.5\" y=\"218\" text-anchor=\"middle\" font-size=\"12\">Br directs o/p</text></svg>",
  snar: "<svg viewBox=\"0 0 520 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"60\" y1=\"69\" x2=\"82.5\" y2=\"82\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"61.8\" y1=\"75.2\" x2=\"76.2\" y2=\"83.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"82.5\" y1=\"82\" x2=\"82.5\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"82.5\" y1=\"108\" x2=\"60\" y2=\"121\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"76.2\" y1=\"106.4\" x2=\"61.8\" y2=\"114.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"60\" y1=\"121\" x2=\"37.5\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"37.5\" y1=\"108\" x2=\"37.5\" y2=\"82\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"42\" y1=\"103.3\" x2=\"42\" y2=\"86.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"37.5\" y1=\"82\" x2=\"60\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"60\" y=\"48.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">Cl</text><line x1=\"60\" y1=\"69\" x2=\"60\" y2=\"53.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"60\" y=\"152.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">NO₂</text><line x1=\"60\" y1=\"121\" x2=\"60\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"140\" y=\"35.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">⁻OCH₃</text><path d=\"M116,30 Q79.8,35.9 66,70\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M66,70 L65.6,62 L71.9,64.6 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"120\" y1=\"95\" x2=\"175\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M175,95 L167.9,98.6 M175,95 L167.9,91.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"147.5\" y=\"87\" text-anchor=\"middle\" font-size=\"12\">slow</text><text x=\"147.5\" y=\"113\" text-anchor=\"middle\" font-size=\"12\">addition</text><line x1=\"245\" y1=\"74\" x2=\"267.5\" y2=\"87\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"267.5\" y1=\"87\" x2=\"267.5\" y2=\"113\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"263\" y1=\"91.7\" x2=\"263\" y2=\"108.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"267.5\" y1=\"113\" x2=\"245\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"245\" y1=\"126\" x2=\"222.5\" y2=\"113\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"222.5\" y1=\"113\" x2=\"222.5\" y2=\"87\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"227\" y1=\"108.3\" x2=\"227\" y2=\"91.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"222.5\" y1=\"87\" x2=\"245\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"230.1\" y=\"58.1\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">Cl</text><line x1=\"245\" y1=\"74\" x2=\"236.1\" y2=\"61.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"254.9\" y=\"58.1\" text-anchor=\"start\" font-size=\"15\" class=\"t-red\">OCH₃</text><line x1=\"245\" y1=\"74\" x2=\"255.9\" y2=\"58.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"245\" y=\"157.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">NO₂</text><line x1=\"245\" y1=\"126\" x2=\"245\" y2=\"139\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"233\" cy=\"130\" r=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"229.8\" y1=\"130\" x2=\"236.2\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"245\" y=\"178\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">Meisenheimer complex</text><line x1=\"320\" y1=\"95\" x2=\"375\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M375,95 L367.9,98.6 M375,95 L367.9,91.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/><text x=\"347.5\" y=\"87\" text-anchor=\"middle\" font-size=\"12\">fast</text><text x=\"347.5\" y=\"113\" text-anchor=\"middle\" font-size=\"12\">− Cl⁻</text><line x1=\"440\" y1=\"69\" x2=\"462.5\" y2=\"82\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"441.8\" y1=\"75.2\" x2=\"456.2\" y2=\"83.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"462.5\" y1=\"82\" x2=\"462.5\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"462.5\" y1=\"108\" x2=\"440\" y2=\"121\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"456.2\" y1=\"106.4\" x2=\"441.8\" y2=\"114.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"440\" y1=\"121\" x2=\"417.5\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"417.5\" y1=\"108\" x2=\"417.5\" y2=\"82\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"422\" y1=\"103.3\" x2=\"422\" y2=\"86.7\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"417.5\" y1=\"82\" x2=\"440\" y2=\"69\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"440\" y=\"48.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">OCH₃</text><line x1=\"440\" y1=\"69\" x2=\"440\" y2=\"56\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"440\" y=\"152.4\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">NO₂</text><line x1=\"440\" y1=\"121\" x2=\"440\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"440\" y=\"182\" text-anchor=\"middle\" font-size=\"12\">4-nitroanisole</text></svg>",
};
// </figures>

export const lesson: Lesson = {
  id: 'ochem-directing-effects',
  title: 'Substituent Effects and Aromatic Synthesis',
  summary: 'Why some substituents speed up electrophilic aromatic substitution and others slow it down, why they send the next group ortho/para or meta, the special case of halogens, rings with several substituents, how to plan the order of steps in an aromatic synthesis, and a first look at nucleophilic aromatic substitution.',
  minutes: 22,
  objectives: [
    'Classify substituents as activating or deactivating using inductive and resonance effects, and rank rings by EAS rate',
    'Explain ortho/para and meta direction by drawing the resonance structures of the arenium ion for each position of attack',
    'Explain why halogens are deactivating yet ortho/para-directing',
    'Predict the major product of EAS on a disubstituted benzene',
    'Plan the order of reactions in the synthesis of a disubstituted benzene, and recognize when nucleophilic aromatic substitution can occur',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Activating and deactivating groups',
      blocks: [
        {
          type: 'p',
          text: 'The rate-determining step of electrophilic aromatic substitution makes a carbocation, the arenium ion. So anything already on the ring that **donates** electron density stabilizes that cation, lowers the barrier and speeds the reaction: an [[ochem-activating-group|activating group]]. Anything that **withdraws** electron density destabilizes it and slows the reaction: a deactivating group. The effect is large:',
        },
        {
          type: 'table',
          headers: ['Substituent on ring', 'Relative rate of nitration', 'Classification'],
          rows: [
            ['$\\ce{-OH}$ (phenol)', '1000', 'strongly activating'],
            ['$\\ce{-CH3}$ (toluene)', '25', 'weakly activating'],
            ['$\\ce{-H}$ (benzene)', '1', 'reference'],
            ['$\\ce{-Cl}$ (chlorobenzene)', '0.033', 'weakly deactivating'],
            ['$\\ce{-CO2CH2CH3}$ (ethyl benzoate)', '0.0037', 'moderately deactivating'],
            ['$\\ce{-NO2}$ (nitrobenzene)', '$6 \\times 10^{-8}$', 'strongly deactivating'],
          ],
          caption: 'Nitrobenzene reacts about 10¹⁰ times more slowly than phenol. These numbers come from competition experiments (two arenes competing for a limited amount of electrophile).',
        },
        {
          type: 'p',
          text: 'Two mechanisms carry electron density to or from the ring, and you already know both from acidity:',
        },
        {
          type: 'list',
          items: [
            '**Inductive effect** (through σ bonds): an electronegative atom attached to the ring pulls density away (−I): O, N, halogens, and especially positively charged groups. Alkyl groups donate weakly (+I) and by [[ochem-hyperconjugation|hyperconjugation]].',
            '**Resonance effect** (through π overlap): an atom with a lone pair next to the ring donates it into the π system (+R): $\\ce{-OH}$, $\\ce{-OR}$, $\\ce{-NH2}$, $\\ce{-NHCOR}$, halogens. A group with a π bond to an electronegative atom pulls π density out of the ring (−R): $\\ce{-NO2}$, $\\ce{-C=O}$, $\\ce{-C#N}$, $\\ce{-SO3H}$.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why resonance usually wins for O and N',
          text: 'An $\\ce{-OH}$ group is inductively withdrawing (O is electronegative), yet phenol is 1000 times more reactive than benzene. In the arenium ion the oxygen lone pair can form a full π bond to the positive carbon, giving a structure in which every atom has an octet. That is a much bigger effect than the modest σ-bond polarization. For halogens the balance tips the other way, as you will see.',
        },
        {
          type: 'graph',
          x: [0, 4.2],
          y: [-10, 130],
          xStep: 1,
          yStep: 20,
          functions: [
            { expr: '100*sin(pi*x/5)^2', label: 'attack meta', color: 'orange', domain: [0, 4] },
            { expr: '(100-s)*sin(pi*x/5)^2', label: 'attack ortho/para', color: 'blue', domain: [0, 4] },
          ],
          points: [{ x: 0, y: 0, label: 'arene + E⁺' }],
          sliders: [{ name: 's', min: -30, max: 30, step: 0.5, value: 8, label: 'extra stabilization of the o/p arenium ion, $\\Delta\\Delta G^\\ddagger$ (kJ/mol)' }],
          readouts: [
            { label: 'rate per position, para : meta $= e^{\\Delta\\Delta G^\\ddagger/RT}$ (298 K) $=$', expr: 'e^(1000s/(8.314*298))', digits: 2 },
            { label: 'predicted % meta (2 ortho, 2 meta, 1 para sites) $=$', expr: '200/(2+3e^(1000s/(8.314*298)))', digits: 1 },
          ],
          caption: 'Schematic first step (energy in kJ/mol). The substituent changes the barrier differently at different positions. With $s = 8$ kJ/mol (toluene) about 3% meta product results; with $s = 0$ you get the statistical 40% meta; drag $s$ negative to model a meta director such as $\\ce{-NO2}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Ortho/para directors: reading the arenium ion',
      blocks: [
        {
          type: 'p',
          text: 'A substituent controls not only how fast but **where** the next electrophile goes. To see why, draw the arenium ion for attack at each position and look at where the + lands. Recall from the last lesson: the + goes to the carbons ortho and para to the site of attack. So:',
        },
        {
          type: 'list',
          items: [
            'Attack **ortho or para** to a substituent puts the + on the carbon **bearing** the substituent in one resonance structure.',
            'Attack **meta** never puts the + on that carbon.',
          ],
        },
        {
          type: 'figure',
          svg: FIG.anisole,
          alt: 'Top row, para attack on anisole: four resonance structures of the arenium ion. Positive charge on C2; on C4, the carbon bearing OCH3 (highlighted green); then a structure with a C4=O double bond and positive charge on oxygen, every atom an octet (highlighted green); then on C6. Bottom row, meta attack, OCH3 on C3: only three structures, with positive charge on C2, C4 and C6, never on C3, so the OCH3 lone pair cannot help.',
          caption: 'Para attack on anisole gives a fourth, especially good resonance structure (the oxonium ion, every atom with an octet). Ortho attack does too. Meta attack does not. So the o/p arenium ions are much more stable, form faster, and the products are almost entirely ortho and para.',
        },
        {
          type: 'p',
          text: 'Alkyl groups work the same way with less power: for ortho or para attack on toluene, one resonance structure is a **tertiary** carbocation (+ on the carbon bearing $\\ce{CH3}$). Nitration of toluene gives 63% ortho, 34% para and only 3% meta.',
        },
        {
          type: 'definition',
          term: 'Ortho/para director',
          text: 'A substituent that makes electrophiles attack the positions ortho and para to it, by stabilizing the arenium ions for those positions. All activating groups are [[ochem-ortho-para-director|ortho/para directors]]: $\\ce{-NH2}$, $\\ce{-NR2}$, $\\ce{-OH}$, $\\ce{-OR}$, $\\ce{-NHCOR}$, alkyl and aryl groups.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Ortho or para?',
          text: 'There are two ortho positions and one para, so statistics favor ortho 2:1. Sterics push the other way: bulky substituents or electrophiles crowd the ortho positions. *tert*-Butylbenzene nitrates mostly para. In practice o/p mixtures are common, and the two isomers are separated (para isomers are usually more symmetric, higher-melting and easier to crystallize).',
        },
        {
          type: 'deepdive',
          title: 'Partial rate factors: putting numbers on "o/p directing"',
          blocks: [
            {
              type: 'p',
              text: 'A **partial rate factor** $f$ compares the rate at one position of a substituted ring with the rate at one position of benzene. It combines the overall rate ratio with the product distribution, corrected for the number of equivalent positions (benzene has 6).',
            },
            {
              type: 'derivation',
              title: 'Toluene nitration ($k_{\\text{tol}}/k_{\\text{benz}} = 25$; 63% o, 3% m, 34% p)',
              steps: [
                { tex: 'f_x = \\frac{k_{\\text{tol}}}{k_{\\text{benz}}} \\times \\frac{\\text{fraction at } x}{\\text{number of } x \\text{ positions}} \\times 6', why: 'Rate at one $x$ position of toluene divided by the rate at one of benzene\'s six equivalent positions.' },
                { tex: 'f_o = 25 \\times \\frac{0.63}{2} \\times 6 = 47, \\qquad f_m = 25 \\times \\frac{0.03}{2} \\times 6 = 2.3', why: 'Two ortho and two meta positions.' },
                { tex: 'f_p = 25 \\times \\frac{0.34}{1} \\times 6 = 51', why: 'One para position.' },
              ],
              result: 'Each ortho or para position of toluene is about 50 times more reactive than a position of benzene; each meta position only about 2 times.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: 'Why does a methoxy group ($\\ce{-OCH3}$) direct an incoming electrophile to the ortho and para positions?',
      options: [
        { text: 'Because oxygen is electronegative and withdraws electrons from the meta positions', why: 'Induction by O does withdraw density, but that makes $\\ce{OCH3}$ less activating overall; it does not explain the o/p preference, and it falls off with distance rather than skipping positions.' },
        { text: 'Because for ortho and para attack, the arenium ion has an extra resonance structure in which the oxygen lone pair forms a π bond to the positive carbon', correct: true, why: 'Only o/p attack places the + on the carbon bearing $\\ce{OCH3}$, where the oxygen lone pair can donate into it, giving an oxonium structure in which every atom has an octet.' },
        { text: 'Because the methoxy group is large and blocks the meta positions', why: 'The meta positions are farther from the substituent than the ortho ones; sterics would, if anything, disfavor ortho.' },
        { text: 'Because the ortho and para products are more stable than the meta product', why: 'Product ratios in EAS are set by the rates of the first step (kinetic control), that is by the stability of the arenium ions, not by the stability of the final products.' },
      ],
      explanation: 'Direction is decided in the rate-determining step. Draw the arenium ion for each position: for ortho or para attack one resonance structure has the + on C–O, and the oxygen lone pair can then form $\\ce{C=O+}$, a fourth resonance structure with all octets. Meta attack never puts the + there. The o/p arenium ions are therefore lower in energy, the barriers to reach them are lower, and those products form much faster.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Toluene undergoes nitration 25 times faster than benzene and gives 34% of the para product. What is the partial rate factor $f_p$ (the rate at the para position of toluene relative to the rate at one position of benzene)?',
      hint: '$f_p = (k_{\\text{tol}}/k_{\\text{benz}}) \\times (\\text{fraction para} / 1) \\times 6$, because benzene has six equivalent positions and toluene one para position.',
      label: '$f_p =$',
      answer: '6*25*0.34',
      answerTex: '51',
      tolerance: 0.5,
      explanation: 'Benzene\'s total rate is spread over 6 identical positions, so one benzene position reacts at $1/6$ of the benzene rate. Toluene\'s total rate is 25 (relative), and 34% of it goes to its single para position: $25 \\times 0.34 = 8.5$. Divide: $f_p = 8.5 / (1/6) = 51$. The para position of toluene is 51 times as reactive as a benzene position, the methyl group\'s stabilization of the tertiary-like arenium ion in numbers.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Meta directors: avoiding the worst position',
      blocks: [
        {
          type: 'p',
          text: 'Now run the same analysis for a withdrawing group such as $\\ce{-NO2}$, whose nitrogen carries a formal positive charge.',
        },
        {
          type: 'figure',
          svg: FIG.nitro,
          alt: 'Top row, para attack on nitrobenzene: three resonance structures of the arenium ion; the middle one, highlighted red, has the positive charge on the ring carbon bonded to the nitro group. Bottom row, meta attack, nitro on C3: three structures with positive charge on C2, C4 and C6, never on the carbon bearing the nitro group.',
          caption: 'For ortho or para attack, one resonance structure puts the + on the carbon attached to the positively charged nitro nitrogen: two positive centers side by side, a very bad structure. Meta attack avoids it.',
        },
        {
          type: 'p',
          text: 'Every arenium ion of nitrobenzene is destabilized (the group withdraws electrons everywhere), which is why the ring is so unreactive. But the meta arenium ion is the **least** destabilized, so the slow reaction that does happen goes meta: nitration of nitrobenzene gives 93% *m*-dinitrobenzene.',
        },
        {
          type: 'definition',
          term: 'Meta director',
          text: 'A substituent that makes electrophiles attack meta to it. [[ochem-meta-director|Meta directors]] are deactivating groups whose atom attached to the ring is positively charged or carries a δ+ from a π bond to an electronegative atom: $\\ce{-NO2}$, $\\ce{-NR3+}$, $\\ce{-CF3}$, $\\ce{-C#N}$, $\\ce{-SO3H}$, and every carbonyl group ($\\ce{-CHO}$, $\\ce{-COR}$, $\\ce{-CO2H}$, $\\ce{-CO2R}$, $\\ce{-CONH2}$).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A quick visual test',
          text: 'Look at the atom bonded to the ring. If it has a **lone pair** (O, N, halogen), the group is an o/p director. If it is a carbon or other atom that is **δ+ and double- or triple-bonded to something electronegative** (C=O, C≡N, N=O), or carries a + charge, it is a meta director. Alkyl groups have neither and are weak o/p directors.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'What is the major product of the reaction of nitrobenzene with $\\ce{Br2}$ and $\\ce{FeBr3}$ (heated)?',
      options: [
        { text: '1-Bromo-2-nitrobenzene (*o*-bromonitrobenzene)', why: 'Ortho attack would put the + of the arenium ion on the carbon attached to the positive nitro nitrogen, the worst possible structure.' },
        { text: '1-Bromo-3-nitrobenzene (*m*-bromonitrobenzene)', correct: true, why: '$\\ce{-NO2}$ is a strong meta director: the meta arenium ion is the only one that never puts the + next to the nitro group.' },
        { text: '1-Bromo-4-nitrobenzene (*p*-bromonitrobenzene)', why: 'This is what you get if you brominate first and then nitrate: Br is an o/p director. Here the nitro group is already on the ring and directs meta.' },
        { text: 'No reaction: nitrobenzene is too deactivated for any EAS', why: 'Nitrobenzene is too deactivated for **Friedel–Crafts** reactions, but halogenation and nitration still work with heating.' },
      ],
      explanation: 'The nitro group is strongly deactivating and meta-directing. The reaction is slow (heat is needed), and it occurs meta, giving 1-bromo-3-nitrobenzene. Compare with the synthesis card later: the order in which you introduce groups decides which isomer you get.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Halogens: the exception, and the full summary',
      blocks: [
        {
          type: 'p',
          text: 'Halogens break the pattern: they are **deactivating** (chlorobenzene nitrates 30 times more slowly than benzene) but **ortho/para directing** (nitration of chlorobenzene gives 35% ortho, 64% para, 1% meta). Both facts come from the same two effects, which here pull in opposite directions:',
        },
        {
          type: 'list',
          items: [
            '**Induction decides the rate.** F, Cl, Br and I are strongly electronegative; they withdraw σ density from the whole ring and destabilize every arenium ion. Net effect: slower than benzene.',
            '**Resonance decides the position.** The halogen has lone pairs. For ortho or para attack it can donate one into the positive carbon, giving a halonium structure ($\\ce{C=Cl+}$) with all octets. Overlap of a 3p (Cl) or 4p (Br) orbital with carbon\'s 2p is poor, so this help is weak, but it exists only for o/p attack.',
          ],
        },
        {
          type: 'table',
          headers: ['Group', 'Rate effect', 'Directs', 'Why'],
          rows: [
            ['$\\ce{-NH2}$, $\\ce{-NR2}$, $\\ce{-OH}$, $\\ce{-O-}$', 'strongly activating', 'o/p', 'strong lone-pair donation (+R)'],
            ['$\\ce{-OR}$, $\\ce{-NHCOR}$', 'moderately activating', 'o/p', 'lone-pair donation, partly shared with C=O in amides'],
            ['alkyl, aryl', 'weakly activating', 'o/p', 'induction and hyperconjugation; tertiary-like arenium ion'],
            ['$\\ce{-F}$, $\\ce{-Cl}$, $\\ce{-Br}$, $\\ce{-I}$', 'weakly deactivating', 'o/p', '−I beats +R for rate; +R decides position'],
            ['$\\ce{-CHO}$, $\\ce{-COR}$, $\\ce{-CO2R}$, $\\ce{-CO2H}$', 'moderately deactivating', 'meta', '−R and −I; δ+ carbon next to the ring'],
            ['$\\ce{-C#N}$, $\\ce{-SO3H}$, $\\ce{-CF3}$, $\\ce{-NO2}$, $\\ce{-NR3+}$', 'strongly deactivating', 'meta', 'strong −I (and −R)'],
          ],
          caption: 'Memorize the pattern, not the list: lone pair on the attached atom → o/p; δ+ or + attached atom → meta; halogens are the deactivating o/p exception.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Anilines in strong acid',
          text: '$\\ce{-NH2}$ is the strongest activator, but in the strongly acidic conditions of nitration it is protonated to $\\ce{-NH3+}$, a strong **meta** director with no lone pair. Anilines also oxidize easily. The standard fix is to acetylate first: the amide $\\ce{-NHCOCH3}$ is a milder, still o/p-directing group, and it can be hydrolyzed back to $\\ce{-NH2}$ at the end.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'fill',
      prompt: 'Classify each substituent for electrophilic aromatic substitution.',
      template: '$\\ce{-OCH3}$ is ___ and directs ___. $\\ce{-Br}$ is ___ and directs ___. $\\ce{-COCH3}$ is ___ and directs ___.',
      blanks: [
        { answers: ['activating'] },
        { answers: ['ortho/para'] },
        { answers: ['deactivating'] },
        { answers: ['ortho/para'] },
        { answers: ['deactivating'] },
        { answers: ['meta'] },
      ],
      wordBank: ['activating', 'deactivating', 'deactivating', 'ortho/para', 'ortho/para', 'meta', 'activating'],
      explanation: 'Methoxy: the O lone pair donates by resonance, so it is activating and o/p directing. Bromine: inductively withdrawing (deactivating) but its lone pairs stabilize only the o/p arenium ions, so o/p directing. Acetyl: the ring is bonded to a δ+ carbonyl carbon, so it is deactivating and meta directing.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Rings with two substituents',
      blocks: [
        {
          type: 'p',
          text: 'When a ring already carries two groups, predict the third position with three rules, applied in order:',
        },
        {
          type: 'steps',
          items: [
            { title: 'If the groups agree, follow both', text: 'In 4-nitrotoluene, $\\ce{CH3}$ directs ortho to itself (C2) and $\\ce{NO2}$ directs meta to itself (also C2). Bromination gives 2-bromo-4-nitrotoluene cleanly.' },
            { title: 'If they disagree, the stronger activator wins', text: 'Rank by the table: $\\ce{-OH}$, $\\ce{-NH2}$ > $\\ce{-OR}$, $\\ce{-NHCOR}$ > alkyl > halogen > meta directors. In 4-methylphenol (*p*-cresol), OH beats $\\ce{CH3}$, so bromine goes ortho to OH: 2-bromo-4-methylphenol.' },
            { title: 'Skip the crowded slot', text: 'A position between two groups that are meta to each other is sterically hindered and rarely substituted. In *m*-xylene (1,3-dimethylbenzene), C2 sits between both methyls; substitution goes to C4 instead.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Predicting the nitration of 3-methylanisole',
          steps: [
            { tex: '\\ce{OCH3} \\text{ at C1 directs to C2, C4, C6}', why: 'Ortho (C2, C6) and para (C4) to the methoxy group.' },
            { tex: '\\ce{CH3} \\text{ at C3 directs to C2, C4, C6}', why: 'Ortho to C3 are C2 and C4; para to C3 is C6. The two groups agree on all three positions.' },
            { tex: '\\text{C2: between both groups, hindered} \\Rightarrow \\text{minor}', why: 'C2 is flanked by $\\ce{OCH3}$ and $\\ce{CH3}$: rule 3.' },
            { tex: '\\text{C4 and C6 both activated by both groups} \\Rightarrow \\text{major, as a mixture}', why: 'C4 is para to $\\ce{OCH3}$ and ortho to $\\ce{CH3}$; C6 is ortho to $\\ce{OCH3}$ and para to $\\ce{CH3}$. Both are good; expect a mixture, typically favoring the position para to the stronger activator (C4).' },
          ],
          result: 'Main product: 3-methyl-4-nitroanisole (with some of the isomer nitrated at C6). Real predictions often end in "mostly X, some Y": state the major one and why.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: '4-Methylanisole (1-methoxy-4-methylbenzene) is nitrated with $\\ce{HNO3/H2SO4}$. Where does the nitro group mainly go?',
      options: [
        { text: 'Ortho to the $\\ce{OCH3}$ group (giving 1-methoxy-4-methyl-2-nitrobenzene)', correct: true, why: 'The two groups disagree: OCH₃ directs to its ortho positions (C2, C6), CH₃ to its ortho positions (C3, C5). Methoxy is the much stronger activator, so it wins.' },
        { text: 'Ortho to the $\\ce{CH3}$ group (giving 4-methoxy-1-methyl-2-nitrobenzene)', why: 'This is where the methyl group would send it, but methyl is only weakly activating. When directors disagree, the stronger activator ($\\ce{OCH3}$) controls.' },
        { text: 'Para to the $\\ce{OCH3}$ group', why: 'The para position of $\\ce{OCH3}$ is already occupied by the methyl group.' },
        { text: 'Meta to both groups', why: 'Each ring position is ortho to one group and meta to the other. Since both are o/p directors, the electrophile goes ortho to the stronger one.' },
      ],
      explanation: 'With the para positions occupied, each remaining ring carbon is ortho to one group and meta to the other. The methoxy oxygen\'s lone pair stabilizes the arenium ion far more than a methyl group does (anisole reacts thousands of times faster than benzene; toluene only about 25 times faster), so nitration occurs ortho to $\\ce{OCH3}$: 4-methyl-2-nitroanisole.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'How many **different** monobromination products are possible, in principle, from *m*-xylene (1,3-dimethylbenzene)? (Count constitutional isomers with Br on the ring; ignore which is major.)',
      hint: 'Number the ring with methyls at C1 and C3. Which of the four free positions are equivalent by the molecule\'s mirror symmetry?',
      label: 'number of products:',
      answer: '3',
      explanation: 'The free positions are C2, C4, C5 and C6. A mirror plane through C2 and C5 makes C4 and C6 equivalent. So there are three distinct products: Br at C2 (between the methyls), at C4 (= C6), or at C5 (meta to both). The directing rules then rank them: C4 is ortho to one methyl and para to the other (major); C2 is activated by both but sterically hindered (minor); C5 is meta to both (trace).',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Planning a synthesis: order matters',
      blocks: [
        {
          type: 'p',
          text: 'To make a disubstituted benzene you install one group, then the second, and the **first** group decides where the second goes. So the question is always: which group must be on the ring when the other is introduced?',
        },
        {
          type: 'figure',
          svg: FIG.synth,
          alt: 'Two routes from benzene. Top: nitration (HNO3, H2SO4) gives nitrobenzene; bromination (Br2, FeBr3) then goes meta because NO2 directs meta, giving m-bromonitrobenzene. Bottom: bromination first gives bromobenzene; nitration then goes ortho/para because Br directs o/p, giving p-bromonitrobenzene plus the ortho isomer.',
          caption: 'Same two reactions, opposite order, different products. Put on first the group whose directing effect gives the relationship you need.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Identify the relationship', text: 'Are the two groups ortho/para or meta to each other in the target?' },
            { title: 'Find a group that directs there', text: 'For a meta target, one group must be a meta director when the other is introduced; for o/p, an o/p director must already be present.' },
            { title: 'Check the reactions can actually run', text: 'Friedel–Crafts alkylation and acylation fail on strongly deactivated rings (nitro, carbonyl, sulfonic acid) and on anilines. Avoid rearrangement by acylating and reducing.' },
            { title: 'Use group interconversions', text: 'Change a director\'s identity after it has done its job: $\\ce{-NO2}$ (meta) → $\\ce{-NH2}$ (o/p) by reduction; $\\ce{-COR}$ (meta) → $\\ce{-CH2R}$ (o/p) by Clemmensen reduction; $\\ce{-SO3H}$ as a removable blocking group.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Planning 3-bromoaniline (*m*-bromoaniline) from benzene',
          steps: [
            { tex: '\\text{target: } \\ce{NH2} \\text{ and } \\ce{Br} \\text{ meta}', why: 'Neither $\\ce{NH2}$ nor Br directs meta, so neither can be on the ring in its final form when the other is added.' },
            { tex: '\\ce{C6H6 ->[\\text{HNO}_3,\\ \\text{H}_2\\text{SO}_4] C6H5NO2}', why: 'Install nitrogen as $\\ce{NO2}$, a meta director, as a "masked" amino group.' },
            { tex: '\\ce{C6H5NO2 ->[\\text{Br}_2,\\ \\text{FeBr}_3] $m$-BrC6H4NO2}', why: 'The nitro group sends Br meta.' },
            { tex: '\\ce{$m$-BrC6H4NO2 ->[\\text{1. Fe, HCl}][\\text{2. NaOH}] $m$-BrC6H4NH2}', why: 'Reduce $\\ce{NO2}$ to $\\ce{NH2}$ last; the Br is untouched.' },
          ],
          result: 'Nitrate, brominate, reduce. Brominating aniline instead would put Br ortho and para (in fact aniline is so activated that it gives 2,4,6-tribromoaniline at once).',
        },
        {
          type: 'callout',
          variant: 'code',
          text: 'Synthesis planning is a search problem: states are molecules, moves are reactions with preconditions ("ring not deactivated") and effects ("adds Br meta to a meta director"). Computer-aided synthesis planners do exactly this, a best-first search backward from the target, much like pathfinding in a game, with reaction rules instead of map edges.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the steps in order to make 1-(3-bromophenyl)propan-1-one, a ring carrying a propanoyl group ($\\ce{-COCH2CH3}$) and a Br meta to each other, and then convert it into 1-bromo-3-propylbenzene.',
      lines: [
        'Friedel–Crafts acylation of benzene with $\\ce{CH3CH2COCl}$ and $\\ce{AlCl3}$',
        'Bromination with $\\ce{Br2}$ and $\\ce{FeBr3}$, directed meta by the acyl group',
        'Clemmensen reduction ($\\ce{Zn(Hg)}$, HCl) of the C=O to $\\ce{CH2}$',
      ],
      distractors: ['Bromination of benzene first, then Friedel–Crafts acylation'],
      explanation: 'Br and propyl must end up meta, but a propyl group (or Br) directs o/p. The trick is to install the chain as an **acyl** group, a meta director: acylate, brominate (meta), and only then reduce C=O to $\\ce{CH2}$. The distractor fails because Br, an o/p director, would send the acyl group mainly para. Acylating first also avoids the rearrangement that alkylation with a propyl halide would cause.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student plans a synthesis of *m*-nitroacetophenone (1-(3-nitrophenyl)ethan-1-one) from benzene. Find the first line where the plan goes wrong.',
      lines: [
        'The target has an acetyl group and a nitro group meta to each other.',
        'Both $\\ce{-COCH3}$ and $\\ce{-NO2}$ are meta directors, so whichever goes on second will be directed meta.',
        'Step 1: nitrate benzene with $\\ce{HNO3/H2SO4}$ to give nitrobenzene.',
        'Step 2: Friedel–Crafts acylation of nitrobenzene with $\\ce{CH3COCl}$ and $\\ce{AlCl3}$, directed meta by the nitro group.',
      ],
      errorLines: [3],
      explanation: 'The direction logic in line 2 is right, but the order chosen in line 3 leads to an impossible step 4: Friedel–Crafts reactions fail on strongly deactivated rings, and nitrobenzene is so unreactive it is used as a Friedel–Crafts **solvent**. The correct plan reverses the order: acylate benzene first ($\\ce{CH3COCl/AlCl3}$ → acetophenone), then nitrate; the acetyl group directs the nitro group meta.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Nucleophilic aromatic substitution (briefly)',
      blocks: [
        {
          type: 'p',
          text: 'Everything so far used the ring as a nucleophile. Can a nucleophile replace a leaving group **on** a ring instead? Not by SN2 (the back side is inside the ring) and not by SN1 (aryl cations are hopeless). But if strong electron-withdrawing groups sit **ortho or para** to the leaving group, an addition–elimination path opens: [[ochem-snar|nucleophilic aromatic substitution]] (SNAr).',
        },
        {
          type: 'figure',
          svg: FIG.snar,
          alt: 'Methoxide attacks the carbon bearing Cl in 4-chloronitrobenzene (slow addition), giving a Meisenheimer complex: the attacked carbon is sp3 and carries both Cl and OCH3, and a negative charge sits on the ring carbon bearing NO2. Fast loss of chloride gives 4-nitroanisole.',
          caption: 'The anionic intermediate, a **Meisenheimer complex**, is the mirror image of the arenium ion: its negative charge is delocalized onto the carbons ortho and para to the attacked carbon, and from the para carbon onto the nitro oxygens. That is why the withdrawing group must be ortho or para to the leaving group; a meta nitro group cannot accept the charge.',
        },
        {
          type: 'list',
          items: [
            '**Rate-determining step: addition**, which breaks aromaticity. More withdrawing groups at o/p positions mean faster reaction: 1-chloro-2,4-dinitrobenzene reacts far faster than 4-chloronitrobenzene.',
            '**Leaving-group order is reversed**: F > Cl > Br > I. C–F is the strongest bond, but bond breaking is not rate-determining; fluorine\'s electronegativity makes the attacked carbon more electrophilic and stabilizes the anion.',
            'Sanger\'s reagent, 1-fluoro-2,4-dinitrobenzene, reacts with the free $\\ce{NH2}$ end of a protein by SNAr; this was how Frederick Sanger first sequenced insulin (Nobel Prize 1958).',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'No activating group? Benzyne',
          text: 'Plain chlorobenzene does not undergo SNAr. With an extremely strong base ($\\ce{NaNH2}$ in liquid ammonia) it reacts by a different route: elimination of HCl gives **benzyne**, a ring with a strained "triple bond", which then adds the nucleophile. A clue is that the new group can end up on the carbon next to where the Cl was.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'True or false: 3-chloronitrobenzene (nitro group meta to Cl) reacts with sodium methoxide by SNAr about as fast as 4-chloronitrobenzene (nitro group para to Cl).',
      answer: false,
      explanation: 'False. In the Meisenheimer complex the negative charge sits on the carbons ortho and para to the attacked carbon. A para (or ortho) nitro group is attached to one of those carbons and can take the charge onto its oxygens by resonance. A meta nitro group is attached to a carbon that never carries the charge, so it can stabilize the intermediate only weakly by induction. 4-Chloronitrobenzene reacts readily; 3-chloronitrobenzene is enormously slower.',
    },
  ],
  takeaways: [
    'Substituents that donate electrons (by resonance from a lone pair, or alkyl groups) stabilize the arenium ion and activate the ring; withdrawing groups deactivate it.',
    'Ortho/para attack puts the + on the carbon bearing the substituent: lone-pair donors and alkyl groups stabilize that structure, so they direct ortho/para. Groups whose attached atom is δ+ or + destabilize it, so they direct meta.',
    'Halogens are the exception: inductive withdrawal makes them deactivating, but lone-pair resonance makes them ortho/para directing.',
    'With two substituents: if they agree, follow them; if not, the stronger activator wins; avoid the position between two meta-related groups.',
    'In synthesis the first group directs the second, so plan the order; use $\\ce{NO2 -> NH2}$ and $\\ce{COR -> CH2R}$ to switch a group from meta to o/p after it has done its job, and never run Friedel–Crafts on a deactivated ring.',
    'Nucleophilic aromatic substitution (addition–elimination via a Meisenheimer complex) needs strong electron-withdrawing groups ortho or para to the leaving group, and F is the best leaving group.',
  ],
  reading: [
    { title: 'OpenStax Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry', source: 'openstax', note: 'Chapter 16 sections on substituent effects, trisubstituted benzenes, nucleophilic aromatic substitution and synthesis of polysubstituted benzenes.' },
    { title: 'Master Organic Chemistry', url: 'https://www.masterorganicchemistry.com/', source: 'other', note: 'Search "ortho para meta directors" for a clear series of posts with arenium-ion drawings for each substituent type.' },
    { title: 'Nucleophilic aromatic substitution (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Nucleophilic_aromatic_substitution', source: 'wikipedia', note: 'The SNAr, benzyne and related mechanisms side by side.' },
  ],
};
