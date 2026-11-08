import type { Lesson } from '../../types';

// <figures> generated from molecule-kit specs and hand-written SVG; every figure was rendered and checked.
const FIG = {
  hx_mech: "<svg viewBox=\"0 0 520 282\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 1  the π bond attacks H⁺ (slow): Markovnikov cation</text><line x1=\"55\" y1=\"100.6\" x2=\"80\" y2=\"100.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"55\" y1=\"95.4\" x2=\"80\" y2=\"95.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"104\" y1=\"98\" x2=\"125\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"40\" y=\"98\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₂C</text><text x=\"92\" y=\"98\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH</text><text x=\"140\" y=\"98\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><line x1=\"70\" y1=\"52\" x2=\"92\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"62\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"104\" y=\"52\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><circle cx=\"107.2\" cy=\"39\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"100.8\" cy=\"39\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"117\" cy=\"55.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"117\" cy=\"48.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"91\" cy=\"48.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"91\" cy=\"55.2\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M62,95 Q43,78.5 60,60\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M60,60 L57.9,67.7 L52.5,62.8 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M80,52 Q78.8,35.1 95,40\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M95,40 L87.1,41.4 L89.2,34.5 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"180\" y1=\"98\" x2=\"222\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M222,98 L214.9,101.6 M222,98 L214.9,94.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"277\" y1=\"98\" x2=\"300\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"324\" y1=\"98\" x2=\"345\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"262\" y=\"98\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"312\" y=\"98\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH</text><text x=\"314\" y=\"84\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"360\" y=\"98\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"312\" y=\"124\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2° carbocation</text><text x=\"400\" y=\"98\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"18\">+</text><text x=\"446\" y=\"98\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"462\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"449.2\" cy=\"84\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"442.8\" cy=\"84\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"442.8\" cy=\"112\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"449.2\" cy=\"112\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"460\" cy=\"101.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"460\" cy=\"94.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"432\" cy=\"94.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"432\" cy=\"101.2\" r=\"1.8\" fill=\"currentColor\"/><text x=\"8\" y=\"172\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 2  bromide attacks the carbocation (fast)</text><line x1=\"55\" y1=\"222\" x2=\"78\" y2=\"222\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"102\" y1=\"222\" x2=\"123\" y2=\"222\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"40\" y=\"222\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"90\" y=\"222\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH</text><text x=\"92\" y=\"208\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"138\" y=\"222\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"90\" y=\"266\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"106\" y=\"254\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">−</text><circle cx=\"86.8\" cy=\"280\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"93.2\" cy=\"280\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"104\" cy=\"269.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"104\" cy=\"262.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"76\" cy=\"262.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"76\" cy=\"269.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"93.2\" cy=\"252\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"86.8\" cy=\"252\" r=\"1.8\" fill=\"currentColor\"/><path d=\"M78,255 C66,244 70,234 84,232\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M84,232 L77.5,236.6 L76.4,229.4 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"180\" y1=\"222\" x2=\"222\" y2=\"222\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M222,222 L214.9,225.6 M222,222 L214.9,218.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"277\" y1=\"222\" x2=\"300\" y2=\"222\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"324\" y1=\"222\" x2=\"345\" y2=\"222\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"312\" y1=\"236.4\" x2=\"312\" y2=\"249\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"262\" y=\"222\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"312\" y=\"222\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH</text><text x=\"360\" y=\"222\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"312\" y=\"260\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Br</text><text x=\"440\" y=\"222\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-gray\">2-bromopropane</text></svg>",
  markov_energy: "<svg viewBox=\"0 0 520 240\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100.0,190.0L102.5,189.7L105.0,188.8L107.5,187.3L110.0,185.3L112.5,182.7L115.0,179.5L117.5,175.9L120.0,171.8L122.5,167.2L125.0,162.1L127.5,156.7L130.0,151.0L132.5,145.0L135.0,138.7L137.5,132.2L140.0,125.5L142.5,118.8L145.0,112.0L147.5,105.2L150.0,98.5L152.5,91.8L155.0,85.3L157.5,79.0L160.0,73.0L162.5,67.3L165.0,61.9L167.5,56.8L170.0,52.2L172.5,48.1L175.0,44.5L177.5,41.3L180.0,38.7L182.5,36.7L185.0,35.2L187.5,34.3L190.0,34.0L192.5,34.1L195.0,34.2L197.5,34.5L200.0,35.0L202.5,35.5L205.0,36.1L207.5,36.8L210.0,37.6L212.5,38.4L215.0,39.3L217.5,40.3L220.0,41.2L222.5,42.1L225.0,43.1L227.5,44.0L230.0,44.8L232.5,45.6L235.0,46.3L237.5,46.9L240.0,47.4L242.5,47.9L245.0,48.2L247.5,48.3L250.0,48.4L252.5,48.4L255.0,48.2L257.5,48.0L260.0,47.7L262.5,47.3L265.0,46.9L267.5,46.4L270.0,45.9L272.5,45.4L275.0,44.8L277.5,44.2L280.0,43.7L282.5,43.2L285.0,42.7L287.5,42.3L290.0,41.9L292.5,41.6L295.0,41.4L297.5,41.2L300.0,41.2L302.5,41.4L305.0,42.2L307.5,43.4L310.0,45.1L312.5,47.3L315.0,50.0L317.5,53.0L320.0,56.6L322.5,60.5L325.0,64.7L327.5,69.4L330.0,74.3L332.5,79.6L335.0,85.1L337.5,90.8L340.0,96.8L342.5,102.8L345.0,109.0L347.5,115.3L350.0,121.6L352.5,127.9L355.0,134.2L357.5,140.4L360.0,146.4L362.5,152.4L365.0,158.1L367.5,163.6L370.0,168.9L372.5,173.8L375.0,178.5L377.5,182.7L380.0,186.6L382.5,190.2L385.0,193.2L387.5,195.9L390.0,198.1L392.5,199.8L395.0,201.0L397.5,201.8L400.0,202.0\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"2.2\" fill=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M100.0,190.0L102.5,189.8L105.0,189.3L107.5,188.4L110.0,187.1L112.5,185.5L115.0,183.6L117.5,181.3L120.0,178.8L122.5,175.9L125.0,172.9L127.5,169.5L130.0,166.0L132.5,162.3L135.0,158.4L137.5,154.4L140.0,150.3L142.5,146.2L145.0,142.0L147.5,137.8L150.0,133.7L152.5,129.6L155.0,125.6L157.5,121.7L160.0,118.0L162.5,114.5L165.0,111.1L167.5,108.1L170.0,105.2L172.5,102.7L175.0,100.4L177.5,98.5L180.0,96.9L182.5,95.6L185.0,94.7L187.5,94.2L190.0,94.0L192.5,94.1L195.0,94.4L197.5,94.8L200.0,95.4L202.5,96.2L205.0,97.2L207.5,98.2L210.0,99.4L212.5,100.7L215.0,102.0L217.5,103.4L220.0,104.8L222.5,106.2L225.0,107.6L227.5,108.9L230.0,110.2L232.5,111.4L235.0,112.4L237.5,113.4L240.0,114.2L242.5,114.8L245.0,115.2L247.5,115.5L250.0,115.6L252.5,115.6L255.0,115.4L257.5,115.2L260.0,114.9L262.5,114.5L265.0,114.1L267.5,113.6L270.0,113.1L272.5,112.6L275.0,112.0L277.5,111.4L280.0,110.9L282.5,110.4L285.0,109.9L287.5,109.5L290.0,109.1L292.5,108.8L295.0,108.6L297.5,108.4L300.0,108.4L302.5,108.6L305.0,109.1L307.5,109.9L310.0,111.1L312.5,112.6L315.0,114.5L317.5,116.6L320.0,119.1L322.5,121.8L325.0,124.7L327.5,128.0L330.0,131.4L332.5,135.0L335.0,138.9L337.5,142.8L340.0,147.0L342.5,151.2L345.0,155.5L347.5,159.8L350.0,164.2L352.5,168.6L355.0,172.9L357.5,177.2L360.0,181.4L362.5,185.6L365.0,189.5L367.5,193.4L370.0,197.0L372.5,200.4L375.0,203.7L377.5,206.6L380.0,209.3L382.5,211.8L385.0,213.9L387.5,215.8L390.0,217.3L392.5,218.5L395.0,219.3L397.5,219.8L400.0,220.0\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"2.2\" fill=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"190\" x2=\"100\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"70\" y=\"206\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\">propene + HBr</text><text x=\"250\" y=\"66.4\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-red\">1° cation</text><text x=\"250\" y=\"133.6\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">2° cation</text><text x=\"190\" y=\"24\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-red\">higher TS</text><text x=\"190\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\">lower TS: faster</text><text x=\"512\" y=\"16\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-red\">red path → 1-bromopropane (not formed)</text><text x=\"512\" y=\"234\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"12\" class=\"t-blue\">blue path → 2-bromopropane</text><line x1=\"40\" y1=\"190\" x2=\"420\" y2=\"190\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"1\" stroke-dasharray=\"2 4\" stroke-linecap=\"round\"/><text x=\"18\" y=\"24\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\" font-style=\"italic\">G</text><line x1=\"14\" y1=\"225\" x2=\"14\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M14,34 L17.6,41.1 M14,34 L10.4,41.1\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/></svg>",
  rearr_hx: "<svg viewBox=\"0 0 520 285\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"21.2\" y1=\"57.3\" x2=\"49.2\" y2=\"42.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"18.8\" y1=\"52.7\" x2=\"46.8\" y2=\"37.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"40\" x2=\"76\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"76\" y1=\"55\" x2=\"104\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"76\" y1=\"55\" x2=\"76\" y2=\"87\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"62\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">3-methylbut-1-ene</text><line x1=\"120\" y1=\"55\" x2=\"160\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M160,55 L152.9,58.6 M160,55 L152.9,51.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"140\" y=\"46\" text-anchor=\"middle\" font-size=\"12\">H–Cl</text><line x1=\"175\" y1=\"55\" x2=\"203\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"203\" y1=\"40\" x2=\"231\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"231\" y1=\"55\" x2=\"259\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"231\" y1=\"55\" x2=\"231\" y2=\"87\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"231\" y1=\"55\" x2=\"247.7\" y2=\"74\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"253\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"203\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><path d=\"M242,67 C257,46 225,26 209,42\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M209,42 L211.5,34.4 L216.6,39.5 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"217\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2° cation</text><line x1=\"275\" y1=\"55\" x2=\"305\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M305,55 L297.9,58.6 M305,55 L297.9,51.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"330\" y1=\"55\" x2=\"358\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"358\" y1=\"40\" x2=\"386\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"386\" y1=\"55\" x2=\"414\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"386\" y1=\"55\" x2=\"386\" y2=\"87\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"398\" y=\"62\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"14\">+</text><text x=\"372\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">3° cation (hydride shift)</text><text x=\"8\" y=\"145\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"12\">Cl⁻ traps both cations:</text><line x1=\"120\" y1=\"220\" x2=\"148\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"205\" x2=\"176\" y2=\"220\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"176\" y1=\"220\" x2=\"204\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"176\" y1=\"220\" x2=\"176\" y2=\"252\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"205\" x2=\"148\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"148\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Cl</text><text x=\"162\" y=\"275\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">2-chloro-3-methylbutane (minor)</text><line x1=\"320\" y1=\"220\" x2=\"348\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"205\" x2=\"376\" y2=\"220\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"376\" y1=\"220\" x2=\"404\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"376\" y1=\"220\" x2=\"360\" y2=\"249\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"376\" y1=\"220\" x2=\"390.3\" y2=\"240.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"396\" y=\"249\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-green\">Cl</text><text x=\"362\" y=\"275\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-green\">2-chloro-2-methylbutane (major)</text></svg>",
  hydration: "<svg viewBox=\"0 0 520 382\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 1  protonation of the alkene (slow)</text><line x1=\"51\" y1=\"114.6\" x2=\"80\" y2=\"114.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"51\" y1=\"109.4\" x2=\"80\" y2=\"109.4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"94.3\" y1=\"107.1\" x2=\"105.8\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"94.3\" y1=\"116.9\" x2=\"105.8\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"36\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₂C</text><text x=\"88\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"116\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"116\" y=\"134\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><line x1=\"56.5\" y1=\"47.1\" x2=\"45.5\" y2=\"42.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"71.5\" y1=\"47.1\" x2=\"82.5\" y2=\"42.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"58\" x2=\"64\" y2=\"72\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"64\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"76\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"67.2\" cy=\"38.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"60.8\" cy=\"38.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"38\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"90\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"64\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M60,109 Q73.8,94 56,84\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M56,84 L64,84.3 L60.4,90.7 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M68,66 C80,68 82,58 74,52\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M74,52 L81.9,53.4 L77.5,59.2 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"160\" y1=\"112\" x2=\"200\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M200,112 L192.9,115.6 M200,112 L192.9,108.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"262\" y1=\"104\" x2=\"262\" y2=\"91\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"262\" y1=\"120\" x2=\"262\" y2=\"133\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"254\" y1=\"112\" x2=\"236\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"262\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"274\" y=\"101\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"262\" y=\"82\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"262\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"222\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><text x=\"320\" y=\"112\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"14\">+  H₂O</text><text x=\"262\" y=\"166\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">3° cation (Markovnikov)</text><text x=\"8\" y=\"182\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 2  water attacks the cation (fast)</text><line x1=\"70\" y1=\"224\" x2=\"70\" y2=\"211\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"240\" x2=\"70\" y2=\"253\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"232\" x2=\"44\" y2=\"232\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"70\" y=\"232\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"81\" y=\"221\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"70\" y=\"202\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"70\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"30\" y=\"232\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H₃C</text><line x1=\"145.1\" y1=\"225.8\" x2=\"152.9\" y2=\"216.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"146.8\" y1=\"236.2\" x2=\"159.2\" y2=\"243.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"140\" y=\"232\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"128.5\" cy=\"228.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"128.5\" cy=\"235.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"136.8\" cy=\"243.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"143.2\" cy=\"243.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"158\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"166\" y=\"248\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M128,230 Q105.2,213 81,228\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M81,228 L85.1,221.2 L89,227.3 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"195\" y1=\"232\" x2=\"235\" y2=\"232\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M235,232 L227.9,235.6 M235,232 L227.9,228.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"322\" y1=\"232\" x2=\"340\" y2=\"232\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"224\" x2=\"348\" y2=\"208\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"356\" y1=\"232\" x2=\"374\" y2=\"232\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"292\" y=\"232\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"348\" y=\"232\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"338\" y=\"218\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"340.2\" cy=\"241.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"346\" cy=\"243.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"348\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"382\" y=\"232\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"8\" y=\"292\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Step 3  deprotonation regenerates the acid catalyst (fast)</text><line x1=\"74\" y1=\"342\" x2=\"92\" y2=\"342\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"334\" x2=\"100\" y2=\"318\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"342\" x2=\"140\" y2=\"342\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"44\" y=\"342\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"100\" y=\"342\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><text x=\"90\" y=\"328\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><circle cx=\"92.2\" cy=\"351.1\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"98\" cy=\"353.8\" r=\"1.8\" fill=\"currentColor\"/><text x=\"100\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"148\" y=\"342\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><line x1=\"215.1\" y1=\"335.8\" x2=\"222.9\" y2=\"326.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"216.8\" y1=\"346.2\" x2=\"229.2\" y2=\"353.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"210\" y=\"342\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"198.5\" cy=\"338.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"198.5\" cy=\"345.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"206.8\" cy=\"353.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"213.2\" cy=\"353.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"228\" y=\"320\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"236\" y=\"358\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M198,340 Q178.4,321 157,338\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M157,338 L160.3,330.7 L164.8,336.4 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M127,345 C127,370 112,370 107,352\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M107,352 L112.4,357.9 L105.4,359.8 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"258\" y1=\"342\" x2=\"298\" y2=\"342\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M298,342 L290.9,345.6 M298,342 L290.9,338.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><line x1=\"370\" y1=\"342\" x2=\"388\" y2=\"342\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"404\" y1=\"342\" x2=\"416\" y2=\"342\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"340\" y=\"342\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">(CH₃)₃C</text><text x=\"396\" y=\"342\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"399.2\" cy=\"330.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"392.8\" cy=\"330.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"392.8\" cy=\"353.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"399.2\" cy=\"353.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"424\" y=\"342\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"447\" y=\"342\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"18\">+</text><text x=\"484\" y=\"342\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">H₃O⁺</text></svg>",
  oxymerc: "<svg viewBox=\"0 0 520 215\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"8\" y=\"16\" text-anchor=\"start\" dominant-baseline=\"central\" font-size=\"13\" class=\"t-purple\" font-weight=\"600\">Mercurinium ion: no free carbocation, so no rearrangement</text><line x1=\"68\" y1=\"102\" x2=\"102\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"53.3\" y1=\"106.4\" x2=\"36.7\" y2=\"117.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"55.3\" y1=\"95.5\" x2=\"48.7\" y2=\"86.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"115.7\" y1=\"107.7\" x2=\"124.3\" y2=\"116.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"116.4\" y1=\"97.2\" x2=\"127.6\" y2=\"88.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"79.9\" y1=\"68.6\" x2=\"64.1\" y2=\"95.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"90.1\" y1=\"68.6\" x2=\"105.9\" y2=\"95.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"52\" x2=\"85\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"60\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"110\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"30\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">R</text><text x=\"44\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"130\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"134\" y=\"84\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"85\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">Hg</text><text x=\"99\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"13\">+</text><text x=\"85\" y=\"32\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">OAc</text><text x=\"36\" y=\"102\" text-anchor=\"end\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-blue\">δ+</text><line x1=\"37.3\" y1=\"168.3\" x2=\"28.7\" y2=\"173.7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"50.2\" y1=\"169.1\" x2=\"59.8\" y2=\"176.9\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"44\" y=\"164\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">O</text><circle cx=\"55.5\" cy=\"167.2\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"55.5\" cy=\"160.8\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"40.8\" cy=\"175.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"47.2\" cy=\"175.5\" r=\"1.8\" fill=\"currentColor\"/><text x=\"22\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"66\" y=\"182\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><path d=\"M47,152 C40,138 46,122 56,112\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M56,112 L53.5,119.6 L48.4,114.5 Z\" fill=\"currentColor\" class=\"f-red\"/><text x=\"124\" y=\"208\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">H₂O attacks the more substituted carbon</text><line x1=\"170\" y1=\"102\" x2=\"210\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M210,102 L202.9,105.6 M210,102 L202.9,98.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"190\" y=\"93\" text-anchor=\"middle\" font-size=\"12\">−H⁺</text><line x1=\"270\" y1=\"102\" x2=\"304\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"255.3\" y1=\"106.4\" x2=\"238.7\" y2=\"117.6\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"257.3\" y1=\"95.5\" x2=\"250.7\" y2=\"86.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"262\" y1=\"110\" x2=\"262\" y2=\"131\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"317.7\" y1=\"107.7\" x2=\"326.3\" y2=\"116.3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"318.4\" y1=\"97.2\" x2=\"329.6\" y2=\"88.8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"312\" y1=\"94\" x2=\"312\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"262\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"312\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"232\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">R</text><text x=\"246\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"262\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">OH</text><text x=\"332\" y=\"122\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"336\" y=\"84\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"312\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">HgOAc</text><line x1=\"360\" y1=\"102\" x2=\"400\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M400,102 L392.9,105.6 M400,102 L392.9,98.4\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><text x=\"380\" y=\"93\" text-anchor=\"middle\" font-size=\"12\">NaBH₄</text><line x1=\"448\" y1=\"102\" x2=\"472\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"434.6\" y1=\"107.9\" x2=\"423.4\" y2=\"120.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"435.3\" y1=\"95.5\" x2=\"428.7\" y2=\"86.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"110\" x2=\"440\" y2=\"131\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"440\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">C</text><text x=\"486\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">CH₃</text><text x=\"418\" y=\"126\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">R</text><text x=\"424\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\">H</text><text x=\"440\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"16\" class=\"t-red\">OH</text><text x=\"452\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-green\">Markovnikov alcohol</text><text x=\"290\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"11\" class=\"t-gray\">NaBH₄ replaces Hg by H</text></svg>",
};

export const lesson: Lesson = {
  id: 'ochem-alkene-addition',
  title: 'Electrophilic Addition: HX and Hydration',
  summary: 'The π bond as a nucleophile: how alkenes add HX and water, why the hydrogen goes to the less substituted carbon (Markovnikov), when carbocations rearrange, and how oxymercuration delivers the Markovnikov alcohol without rearrangement.',
  minutes: 19,
  objectives: [
    'Draw the two-step mechanism of HX addition to an alkene with curved arrows',
    'Explain Markovnikov regioselectivity from carbocation stability and the Hammond postulate',
    'Predict stereochemical outcomes (racemic products) and carbocation rearrangements in HX additions',
    'Draw the mechanism of acid-catalysed hydration and use thermodynamics to explain why it is reversible',
    'Choose between acid-catalysed hydration and oxymercuration–demercuration to make a Markovnikov alcohol',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The π bond as a nucleophile',
      blocks: [
        {
          type: 'p',
          text: 'The π electrons of an alkene sit above and below the molecular plane, held less tightly than σ electrons: the π bond is the alkene\'s HOMO. So alkenes are [[ochem-nucleophile|nucleophiles]], and they react with [[ochem-electrophile|electrophiles]], starting with the simplest one, a proton. The typical result is [[ochem-electrophilic-addition|electrophilic addition]]: the π bond is replaced by two new σ bonds.',
        },
        {
          type: 'math',
          tex: '\\ce{C=C + H-X -> H-C-C-X}',
          caption: 'Addition of HX (X = Cl, Br, I). One π bond (≈ 270 kJ/mol) and one H–X bond are traded for a C–H and a C–X σ bond: overall exothermic.',
        },
        {
          type: 'figure',
          svg: FIG.hx_mech,
          alt: 'Step 1: a curved arrow from the C=C π bond of propene to the H of H–Br, and an arrow from the H–Br bond to bromine. This gives the 2° isopropyl cation and bromide. Step 2: a bromide lone pair attacks the cationic carbon, giving 2-bromopropane.',
          caption: 'Electrophilic addition of HBr to propene. Step 1 (rate-determining) makes a carbocation; step 2 is the nucleophilic attack you know from SN1.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the arrow starts at the π bond',
          text: 'The π electrons are the nucleophile, so the arrow\'s tail sits on the double bond and its head on the H of HBr. The proton bonds to **one** alkene carbon (the end of the arrow tells you which); the other carbon, now missing the π electrons, becomes the cation. Draw the arrow from the π bond toward the carbon that keeps the hydrogen.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'In the first step of HBr addition to an alkene, which curved arrows are correct?',
      options: [
        { text: 'From the π bond to the H of HBr, and from the H–Br bond to Br', correct: true, why: 'The π bond (nucleophile) attacks the proton; the H–Br bonding pair leaves with bromine as bromide.' },
        { text: 'From the H of HBr to the π bond', why: 'Arrows start at electrons. The hydrogen of HBr has none to give: it is the electrophile.' },
        { text: 'From Br to the alkene carbon, then from the π bond to H', why: 'Bromide attacks only after the carbocation exists (step 2). Neutral HBr\'s bromine is not attacking the alkene first.' },
        { text: 'A single arrow from the π bond to Br', why: 'The π electrons bond to H, not Br; and two arrows are needed because the H–Br bond must also break.' },
      ],
      explanation: 'Step 1 is a proton transfer from HBr to the alkene: two arrows, the π bond to H and the H–Br bond to Br. The result is a carbocation and bromide; step 2 joins them.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Markovnikov\'s rule, explained',
      blocks: [
        {
          type: 'p',
          text: 'Propene could put the proton on either carbon. Protonating C1 gives a **secondary** cation; protonating C2 gives a **primary** one. The rate-determining step makes a carbocation, so by the [[ochem-hammond-postulate|Hammond postulate]] its transition state resembles the cation, and the more stable cation forms much faster.',
        },
        {
          type: 'figure',
          svg: FIG.markov_energy,
          alt: 'Free-energy diagram with two pathways from propene plus HBr. The red path climbs to a high transition state and a high primary cation, leading to 1-bromopropane. The blue path has a lower transition state and a lower secondary cation, leading to 2-bromopropane.',
          caption: 'The two pathways diverge at the first, rate-determining step. The lower barrier (blue) wins, essentially completely.',
        },
        {
          type: 'theorem',
          name: 'Markovnikov\'s rule (mechanistic form)',
          text: '[[ochem-markovnikov-rule|Markovnikov\'s rule]]: in electrophilic addition, the electrophile (here $\\ce{H+}$) adds to the alkene carbon that gives the **more stable carbocation**; the nucleophile ends up on the more substituted carbon. Classic wording: "the hydrogen goes to the carbon that already has more hydrogens."',
        },
        {
          type: 'definition',
          term: 'Regioselective',
          text: 'A reaction is [[ochem-regioselective|regioselective]] when it could give two constitutional isomers (different positions of the new groups) but forms one preferentially. HX addition is Markovnikov-regioselective.',
        },
        {
          type: 'derivation',
          title: 'Predicting: 2-methylpropene + HCl',
          steps: [
            { tex: '\\ce{(CH3)2C=CH2 + H+ -> (CH3)2\\overset{+}{C}-CH3}', why: 'Proton on the $\\ce{CH2}$ end gives a 3° cation.' },
            { tex: '\\text{(not } \\ce{(CH3)2CH-\\overset{+}{C}H2}\\text{, a 1° cation)}', why: 'The alternative is far less stable and its transition state far higher.' },
            { tex: '\\ce{(CH3)3C+ + Cl- -> (CH3)3C-Cl}', why: 'Chloride captures the cation.' },
          ],
          result: 'Only 2-chloro-2-methylpropane (tert-butyl chloride) forms. The rule is really "go through the best carbocation", which also covers alkenes where counting hydrogens is no help.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Vladimir Markovnikov stated his rule in 1869 from experiments alone, decades before anyone knew about electrons or carbocations. The mechanistic version above explains it, and also its exceptions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'What is the major product when 1-methylcyclohexene reacts with HBr (no peroxides)?',
      options: [
        { text: '1-bromo-1-methylcyclohexane', correct: true, why: 'H adds to C2 (which has an H), giving the 3° cation at C1; bromide attacks there.' },
        { text: '1-bromo-2-methylcyclohexane', why: 'This anti-Markovnikov product would need the 2° cation at C2, which is much less stable. (It is what HBr gives with peroxides, by a radical mechanism: Unit 7.)' },
        { text: 'bromomethylcyclohexane', why: 'Neither alkene carbon becomes the $\\ce{CH2Br}$ carbon; the methyl group is not involved.' },
        { text: 'methylcyclohexane', why: 'That would be the product of adding $\\ce{H2}$, not HBr.' },
      ],
      explanation: 'Protonating C2 of 1-methylcyclohexene creates a **tertiary** cation on C1 (bonded to the methyl and two ring carbons). Bromide adds there: 1-bromo-1-methylcyclohexane, the Markovnikov product. C1 is not a stereocenter in the product: its two ring paths (C2→C6 and C6→C2) are identical, so no stereoisomers arise.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Stereochemistry and rearrangements',
      blocks: [
        {
          type: 'p',
          text: 'Everything you learned about carbocations in the SN1 lesson applies here, because step 2 of HX addition **is** the second half of an SN1 reaction.',
        },
        {
          type: 'list',
          items: [
            '**New stereocenters come out racemic.** The cation is planar, so the halide attacks either face equally. But-1-ene + HBr gives 2-bromobutane as a [[ochem-racemic-mixture|racemic mixture]] of (R) and (S): an achiral starting material never gives an optically active product without a chiral catalyst.',
            '**Rearrangements happen.** If a 1,2-hydride or 1,2-methyl shift turns the first cation into a more stable one, part or most of the product comes from the rearranged cation.',
          ],
        },
        {
          type: 'figure',
          svg: FIG.rearr_hx,
          alt: '3-methylbut-1-ene adds H+ to give a secondary cation at C2; a hydride on the neighbouring tertiary carbon shifts to C2, giving a tertiary cation at C3. Chloride traps both: 2-chloro-3-methylbutane (minor, unrearranged) and 2-chloro-2-methylbutane (major, rearranged).',
          caption: '3-Methylbut-1-ene + HCl gives mostly the **rearranged** chloride. Whenever the Markovnikov cation is 2° and sits next to a 3° or quaternary carbon, expect a shift.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'In product-prediction questions, work through three checkpoints for any addition that makes a carbocation: (1) which cation forms (Markovnikov)? (2) can it improve by a 1,2-shift? (3) does the product contain a new stereocenter (then: racemic)?',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: '3,3-Dimethylbut-1-ene, $\\ce{CH2=CH-C(CH3)3}$, reacts with HBr. What is the **major** product?',
      options: [
        { text: '2-bromo-3,3-dimethylbutane', why: 'This is the product of the first (2°) cation without rearrangement. The neighbouring quaternary carbon offers a methyl shift to a 3° cation, which is faster than capture.' },
        { text: '2-bromo-2,3-dimethylbutane', correct: true, why: 'Markovnikov protonation gives a 2° cation at C2; a methyl shifts from C3, giving the 3° cation at C3, which bromide traps.' },
        { text: '1-bromo-3,3-dimethylbutane', why: 'Anti-Markovnikov: it would require a 1° cation. (HBr with peroxides gives this by a radical pathway.)' },
        { text: '3-bromo-2,2-dimethylbutane with retention of configuration', why: 'This is the same constitution as the first option, and carbocation additions give racemic, not stereospecific, products.' },
      ],
      explanation: 'H adds to C1 → 2° cation at C2. The adjacent C3 has three methyls and no H, so a **methyl** shifts: the cation moves to C3, now bonded to three carbons (3°). Bromide attacks there, giving $\\ce{(CH3)2CBr-CH(CH3)2}$, 2-bromo-2,3-dimethylbutane. The skeleton has changed.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Acid-catalysed hydration',
      blocks: [
        {
          type: 'p',
          text: 'Water adds to alkenes too, but water itself is too weak an acid to protonate a π bond. A strong acid catalyst ($\\ce{H2SO4}$ or $\\ce{H3PO4}$ in water, so the actual acid is $\\ce{H3O+}$) supplies the proton, water is the nucleophile, and the proton is returned at the end.',
        },
        {
          type: 'figure',
          svg: FIG.hydration,
          alt: 'Three-step mechanism. Step 1: the π bond of 2-methylpropene takes a proton from hydronium, giving the tert-butyl cation and water. Step 2: water attacks the cation, giving a protonated alcohol. Step 3: a second water removes the proton, giving tert-butyl alcohol and regenerating hydronium.',
          caption: 'Hydration of 2-methylpropene: protonate, add the nucleophile, deprotonate. Markovnikov orientation, a possible rearrangement, and a racemic product if a stereocenter forms, all exactly as for HX.',
        },
        {
          type: 'math',
          tex: '\\ce{(CH3)2C=CH2 + H2O ->[\\ce{H3O+}] (CH3)3C-OH}',
          caption: 'Net: H and OH add across the double bond; the acid is a catalyst.',
        },
        {
          type: 'p',
          text: 'Look at the steps backwards: protonate the alcohol\'s OH, lose water to form the cation, lose a proton to form the alkene. That is the **E1 dehydration** from the last unit. Hydration and dehydration are the same equilibrium run in opposite directions, and the conditions decide which way it goes.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Industrial ethanol for fuel blending and solvents is made largely by fermentation, but "synthetic ethanol" comes from exactly this reaction: ethene and steam over a phosphoric acid catalyst at about 300 °C and high pressure, with unreacted ethene recycled.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Order the steps of the acid-catalysed hydration of propene to propan-2-ol.',
      lines: [
        'The π bond takes a proton from $\\ce{H3O+}$, forming the 2° isopropyl cation (slow)',
        'A water molecule\'s lone pair bonds to the cationic carbon',
        'The intermediate oxonium ion, $\\ce{(CH3)2CH-OH2+}$, carries the positive charge on oxygen',
        'Water removes a proton from the oxonium ion, giving propan-2-ol and regenerating $\\ce{H3O+}$',
      ],
      distractors: ['Hydroxide attacks the less substituted carbon of the alkene'],
      explanation: 'Protonation first (Markovnikov, through the 2° cation), then nucleophilic attack by water, then proton transfer. The acid is consumed in step 1 and regenerated in the last step, so it is a catalyst. There is no free hydroxide in acidic water, and alkenes, being nucleophiles themselves, do not react with nucleophiles.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Oxymercuration–demercuration: Markovnikov without rearrangement',
      blocks: [
        {
          type: 'p',
          text: 'Acid-catalysed hydration has two weaknesses: rearrangements, and the reverse reaction (dehydration). [[ochem-oxymercuration|Oxymercuration–demercuration]] avoids both. The alkene is treated with mercury(II) acetate, $\\ce{Hg(OAc)2}$, in aqueous THF; then sodium borohydride, $\\ce{NaBH4}$, replaces the mercury with hydrogen.',
        },
        {
          type: 'math',
          tex: '\\ce{RCH=CH2 ->[\\text{1. Hg(OAc)2, H2O/THF}][\\text{2. NaBH4}] RCH(OH)CH3}',
        },
        {
          type: 'figure',
          svg: FIG.oxymerc,
          alt: 'The electrophile HgOAc+ bridges both carbons of the alkene, forming a three-membered mercurinium ion; the more substituted carbon carries partial positive charge. Water attacks that carbon. After loss of a proton, an organomercury alcohol results, with OH on the more substituted carbon and HgOAc on the other. Sodium borohydride replaces HgOAc with H, giving the Markovnikov alcohol.',
          caption: 'The bridged **mercurinium ion** shares the positive charge between Hg and the alkene carbons; there is never a free carbocation, so nothing can rearrange.',
        },
        {
          type: 'list',
          items: [
            '**Regiochemistry: Markovnikov.** In the bridged ion the C–Hg bond to the more substituted carbon is longer and weaker, so that carbon carries more δ+ and water attacks there.',
            '**No rearrangements**, because there is no open carbocation.',
            '**Irreversible**: the product does not revert to the alkene under these mild, non-acidic conditions.',
          ],
        },
        {
          type: 'table',
          headers: ['Method', 'Regiochemistry', 'Rearrangement?', 'Notes'],
          rows: [
            ['HX', 'Markovnikov', 'yes', 'racemic at a new stereocenter'],
            ['$\\ce{H3O+}$ / $\\ce{H2O}$', 'Markovnikov', 'yes', 'reversible (E1 dehydration)'],
            ['1. $\\ce{Hg(OAc)2}$, $\\ce{H2O}$; 2. $\\ce{NaBH4}$', 'Markovnikov', 'no', 'mercury waste is toxic'],
            ['1. $\\ce{BH3}$; 2. $\\ce{H2O2}$, $\\ce{NaOH}$', 'anti-Markovnikov', 'no', 'next lesson'],
          ],
          caption: 'Your toolkit for adding H–X and H–OH to alkenes.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Mercury is a real hazard',
          text: 'Organomercury compounds are highly toxic and persistent in the environment, so oxymercuration is a teaching and small-scale research reaction; industry avoids it. It still matters for reasoning about mechanisms, and it previews the bridged-ion idea you will meet again with bromine.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'You want to convert 3,3-dimethylbut-1-ene into **3,3-dimethylbutan-2-ol**, $\\ce{CH3CH(OH)C(CH3)3}$. Which reagents should you use?',
      options: [
        { text: '$\\ce{H2O}$, $\\ce{H2SO4}$ (catalytic)', why: 'The 2° cation would undergo a methyl shift, giving mainly 2,3-dimethylbutan-2-ol, the rearranged alcohol.' },
        { text: '1. $\\ce{Hg(OAc)2}$, $\\ce{H2O}$/THF; 2. $\\ce{NaBH4}$', correct: true, why: 'Markovnikov addition of water through a mercurinium ion, with no carbocation to rearrange: OH ends up on C2.' },
        { text: '1. $\\ce{BH3}$·THF; 2. $\\ce{H2O2}$, $\\ce{NaOH}$', why: 'Hydroboration–oxidation is anti-Markovnikov: it would give 3,3-dimethylbutan-1-ol (OH on C1).' },
        { text: 'HBr, then NaOH', why: 'HBr addition also goes through the 2° cation and rearranges; and substituting the bromide with hydroxide would compete with elimination.' },
      ],
      explanation: 'The target is the Markovnikov alcohol with the original skeleton. Acid-catalysed hydration would rearrange via a methyl shift; oxymercuration–demercuration places OH on the more substituted alkene carbon **without** a free carbocation, so the skeleton survives.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'Oxymercuration–demercuration of 3-methylbut-1-ene gives mainly the rearranged alcohol 2-methylbutan-2-ol.',
      answer: false,
      explanation: 'The mercurinium ion is bridged; the positive charge is never localized on a free carbocation, so hydride shifts do not occur. The product is the unrearranged Markovnikov alcohol, **3-methylbutan-2-ol**. Acid-catalysed hydration of the same alkene, by contrast, gives mostly 2-methylbutan-2-ol via a hydride shift.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Hydration versus dehydration: who wins?',
      blocks: [
        {
          type: 'p',
          text: 'Because acid-catalysed hydration is reversible, the direction is a question of thermodynamics, which you can answer with $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$ from General Chemistry. Adding water is exothermic (two σ bonds are stronger than a π bond plus an O–H bond), but it joins two molecules into one, so $\\Delta S^\\circ$ is negative.',
        },
        {
          type: 'graph',
          x: [250, 700],
          y: [-20, 50],
          xStep: 50,
          yStep: 10,
          functions: [{ expr: '-45.4 + 0.1265x', label: '$\\Delta G^\\circ$ of ethene hydration (kJ/mol)', color: 'blue' }],
          points: [{ x: 'T', y: '-45.4 + 0.1265T', label: 'T', color: 'red' }],
          hlines: [{ y: 0, color: 'gray' }],
          sliders: [{ name: 'T', min: 250, max: 700, step: 5, value: 300, label: 'temperature $T$ (K)' }],
          readouts: [
            { label: '$\\Delta G^\\circ$ (kJ/mol) $=$', expr: '-45.4 + 0.1265T', digits: 1 },
            { label: '$K =$', expr: 'e^(-(-45.4 + 0.1265T)*1000/(8.314T))', digits: 4 },
          ],
          caption: 'For $\\ce{C2H4(g) + H2O(g) -> C2H5OH(g)}$. Horizontal: temperature (K); vertical: $\\Delta G^\\circ$, using $\\Delta H^\\circ = -45.4$ kJ/mol and $\\Delta S^\\circ = -126.5$ J mol⁻¹ K⁻¹ (gas phase). Below the crossing, hydration is favoured; above it, dehydration. Industry runs hydration hot for speed and compensates with high pressure and recycling.',
        },
        {
          type: 'derivation',
          title: 'Where the balance tips',
          steps: [
            { tex: '\\Delta G^\\circ = 0 \\iff T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}', why: 'At the crossover the two terms cancel.' },
            { tex: 'T = \\frac{-45\\,400\\ \\text{J/mol}}{-126.5\\ \\text{J mol}^{-1}\\text{K}^{-1}} = 359\\ \\text{K}', why: 'Keep the units consistent: J with J.' },
          ],
          result: 'About 86 °C. Hence the lab rules: to **hydrate**, use dilute acid, lots of water and moderate temperature; to **dehydrate** an alcohol, use concentrated acid and heat, and distil the alkene out as it forms (Le Chatelier).',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'For the gas-phase hydration of propene to propan-2-ol, take $\\Delta H^\\circ = -51.0$ kJ/mol and $\\Delta S^\\circ = -146$ J mol⁻¹ K⁻¹. Above what temperature (in K) does $\\Delta G^\\circ$ become positive, so that dehydration is favoured?',
      hint: 'Set $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = 0$ and solve for $T$, with both quantities in J.',
      label: '$T =$',
      unit: 'K',
      answer: '51000/146',
      answerTex: '349\\ \\text{K}',
      tolerance: 1,
      explanation: '$T = \\dfrac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\dfrac{-51\\,000}{-146} = 349$ K (about 76 °C). Above this temperature the $-T\\Delta S^\\circ$ term outweighs the favourable enthalpy, and the equilibrium lies on the alkene side.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'But-1-ene reacts with HBr in the dark without peroxides. How many stereoisomers of the product are formed?',
      label: 'number of stereoisomers $=$',
      answer: '2',
      explanation: 'Markovnikov addition gives 2-bromobutane, whose C2 is a stereocenter (H, Br, $\\ce{CH3}$, $\\ce{CH2CH3}$). Bromide attacks the planar 2° cation from both faces equally, so both (R)- and (S)-2-bromobutane form, as a 50 : 50 racemic mixture: **2** stereoisomers, and no optical activity.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'error',
      prompt: 'A student predicts the product of 2-methylbut-2-ene, $\\ce{(CH3)2C=CHCH3}$, with HCl. Tap the first incorrect line.',
      lines: [
        'The π bond attacks the proton of HCl.',
        'The proton adds to C2, the carbon bearing two methyl groups, giving a cation on C3.',
        'The cation on C3 is secondary.',
        'Chloride attacks C3, giving 3-chloro-2-methylbutane.',
      ],
      errorLines: [2],
      explanation: 'The proton should go to **C3** (the $\\ce{CH}$ end), which puts the positive charge on C2, a **tertiary** carbon bearing two methyls and C3. Protonating C2 instead would give a less stable 2° cation. Chloride then attacks C2: the product is **2-chloro-2-methylbutane**, $\\ce{(CH3)2CCl-CH2CH3}$. Lines 3 and 4 follow logically from the wrong choice in line 2.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Choose the reagents.',
      template: 'Markovnikov alcohol, rearrangement possible: ___. Markovnikov alcohol, no rearrangement: ___ followed by ___. Markovnikov alkyl bromide: ___.',
      blanks: [{ answers: ['$\\ce{H3O+}$'] }, { answers: ['$\\ce{Hg(OAc)2}$, $\\ce{H2O}$'] }, { answers: ['$\\ce{NaBH4}$'] }, { answers: ['$\\ce{HBr}$'] }],
      wordBank: ['$\\ce{H3O+}$', '$\\ce{Hg(OAc)2}$, $\\ce{H2O}$', '$\\ce{NaBH4}$', '$\\ce{HBr}$', '$\\ce{BH3}$', '$\\ce{NaOH}$'],
      explanation: 'Dilute aqueous acid hydrates through a free carbocation (Markovnikov, can rearrange). Oxymercuration ($\\ce{Hg(OAc)2}$ in water) then demercuration ($\\ce{NaBH4}$) gives the same regiochemistry through a bridged ion, without rearrangement. HBr gives the Markovnikov alkyl bromide. $\\ce{BH3}$ starts the anti-Markovnikov hydroboration of the next lesson.',
    },
  ],
  takeaways: [
    'Alkenes are nucleophiles: the π bond attacks an electrophile, giving a carbocation that a nucleophile then captures (electrophilic addition).',
    'Markovnikov\'s rule: the electrophile adds so as to form the more stable carbocation, so the nucleophile ends up on the more substituted carbon.',
    'Additions through free carbocations give racemic products at new stereocenters and can rearrange by 1,2-hydride or 1,2-methyl shifts.',
    'Acid-catalysed hydration (protonate, add water, deprotonate) is the reverse of E1 dehydration; low temperature and excess water favour the alcohol.',
    'Oxymercuration–demercuration gives the Markovnikov alcohol through a bridged mercurinium ion, with no rearrangement.',
  ],
  reading: [
    {
      title: 'OpenStax Organic Chemistry',
      url: 'https://openstax.org/details/books/organic-chemistry',
      source: 'openstax',
      note: 'Sections 7.7–7.11 (electrophilic addition, Markovnikov\'s rule, carbocation rearrangements) and 8.4 (hydration and oxymercuration).',
    },
    {
      title: 'Markovnikov\'s rule (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Markovnikov%27s_rule',
      source: 'wikipedia',
      note: 'The original rule, its mechanistic explanation and the anti-Markovnikov exceptions.',
    },
    {
      title: 'Oxymercuration reaction (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/Oxymercuration_reaction',
      source: 'wikipedia',
      note: 'Mechanism with the mercurinium ion and the reductive demercuration step.',
    },
    {
      title: 'Master Organic Chemistry',
      url: 'https://www.masterorganicchemistry.com/',
      source: 'other',
      note: 'Its alkene-reactions guide summarizes every addition with regiochemistry and stereochemistry in one place.',
    },
  ],
};
