import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  cr_caesar: "<svg viewBox=\"0 0 520 126\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"17.7\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">A</text><text x=\"17.7\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">0</text><text x=\"17.7\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">D</text><line x1=\"17.7\" y1=\"38\" x2=\"17.7\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M17.7,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"37.1\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">B</text><text x=\"37.1\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">1</text><text x=\"37.1\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">E</text><line x1=\"37.1\" y1=\"38\" x2=\"37.1\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M37.1,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"56.5\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">C</text><text x=\"56.5\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">2</text><text x=\"56.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">F</text><line x1=\"56.5\" y1=\"38\" x2=\"56.5\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M56.5,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"75.9\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">D</text><text x=\"75.9\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">3</text><text x=\"75.9\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">G</text><line x1=\"75.9\" y1=\"38\" x2=\"75.9\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M75.9,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"95.3\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">E</text><text x=\"95.3\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">4</text><text x=\"95.3\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">H</text><line x1=\"95.3\" y1=\"38\" x2=\"95.3\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M95.3,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"114.7\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">F</text><text x=\"114.7\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">5</text><text x=\"114.7\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">I</text><line x1=\"114.7\" y1=\"38\" x2=\"114.7\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M114.7,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"134.1\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">G</text><text x=\"134.1\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">6</text><text x=\"134.1\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">J</text><line x1=\"134.1\" y1=\"38\" x2=\"134.1\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M134.1,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"153.5\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">H</text><text x=\"153.5\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">7</text><text x=\"153.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">K</text><line x1=\"153.5\" y1=\"38\" x2=\"153.5\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M153.5,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"172.9\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">I</text><text x=\"172.9\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">8</text><text x=\"172.9\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">L</text><line x1=\"172.9\" y1=\"38\" x2=\"172.9\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M172.9,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"192.3\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">J</text><text x=\"192.3\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">9</text><text x=\"192.3\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">M</text><line x1=\"192.3\" y1=\"38\" x2=\"192.3\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M192.3,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"211.7\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">K</text><text x=\"211.7\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">10</text><text x=\"211.7\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">N</text><line x1=\"211.7\" y1=\"38\" x2=\"211.7\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M211.7,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"231.1\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">L</text><text x=\"231.1\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">11</text><text x=\"231.1\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">O</text><line x1=\"231.1\" y1=\"38\" x2=\"231.1\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M231.1,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"250.5\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">M</text><text x=\"250.5\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">12</text><text x=\"250.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">P</text><line x1=\"250.5\" y1=\"38\" x2=\"250.5\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M250.5,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"269.9\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">N</text><text x=\"269.9\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">13</text><text x=\"269.9\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">Q</text><line x1=\"269.9\" y1=\"38\" x2=\"269.9\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M269.9,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"289.3\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">O</text><text x=\"289.3\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">14</text><text x=\"289.3\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">R</text><line x1=\"289.3\" y1=\"38\" x2=\"289.3\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M289.3,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"308.7\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">P</text><text x=\"308.7\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">15</text><text x=\"308.7\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">S</text><line x1=\"308.7\" y1=\"38\" x2=\"308.7\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M308.7,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"328.1\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">Q</text><text x=\"328.1\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">16</text><text x=\"328.1\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">T</text><line x1=\"328.1\" y1=\"38\" x2=\"328.1\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M328.1,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"347.5\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">R</text><text x=\"347.5\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">17</text><text x=\"347.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">U</text><line x1=\"347.5\" y1=\"38\" x2=\"347.5\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M347.5,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"366.9\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">S</text><text x=\"366.9\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">18</text><text x=\"366.9\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">V</text><line x1=\"366.9\" y1=\"38\" x2=\"366.9\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M366.9,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"386.3\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">T</text><text x=\"386.3\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">19</text><text x=\"386.3\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">W</text><line x1=\"386.3\" y1=\"38\" x2=\"386.3\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M386.3,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"405.7\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">U</text><text x=\"405.7\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">20</text><text x=\"405.7\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">X</text><line x1=\"405.7\" y1=\"38\" x2=\"405.7\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M405.7,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"425.1\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">V</text><text x=\"425.1\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">21</text><text x=\"425.1\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">Y</text><line x1=\"425.1\" y1=\"38\" x2=\"425.1\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M425.1,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"444.5\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">W</text><text x=\"444.5\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">22</text><text x=\"444.5\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">Z</text><line x1=\"444.5\" y1=\"38\" x2=\"444.5\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M444.5,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"463.9\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">X</text><text x=\"463.9\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">23</text><text x=\"463.9\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">A</text><line x1=\"463.9\" y1=\"38\" x2=\"463.9\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M463.9,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"483.3\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">Y</text><text x=\"483.3\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">24</text><text x=\"483.3\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">B</text><line x1=\"483.3\" y1=\"38\" x2=\"483.3\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M483.3,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"502.7\" y=\"30\" text-anchor=\"middle\" font-size=\"13\">Z</text><text x=\"502.7\" y=\"14\" text-anchor=\"middle\" font-size=\"8\" class=\"t-gray\">25</text><text x=\"502.7\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">C</text><line x1=\"502.7\" y1=\"38\" x2=\"502.7\" y2=\"76\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><path d=\"M502.7,80 l-3,-6 h6 z\" fill=\"currentColor\" class=\"f-gray\"/><text x=\"260\" y=\"116\" text-anchor=\"middle\" font-size=\"13\">plaintext letter x ↦ ciphertext letter (x + 3) mod 26 — X, Y, Z wrap around to A, B, C</text></svg>",
  cr_lcg: "<svg viewBox=\"0 0 520 290\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M284.8,35.7 Q293.0,34.4 300.1,38.7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M300.1,38.7 L291.1,37.8 L295.1,31.2 Z\" fill=\"currentColor\"/><path d=\"M327.5,50.0 Q335.5,52.0 340.4,58.7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M340.4,58.7 L332.5,54.4 L338.7,49.8 Z\" fill=\"currentColor\"/><path d=\"M361.3,79.6 Q368.0,84.5 370.0,92.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M370.0,92.5 L364.3,85.5 L371.7,83.7 Z\" fill=\"currentColor\"/><path d=\"M381.3,119.9 Q385.6,127.0 384.3,135.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M384.3,135.2 L381.8,126.5 L389.4,127.7 Z\" fill=\"currentColor\"/><path d=\"M384.3,164.8 Q385.6,173.0 381.3,180.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M381.3,180.1 L382.2,171.1 L388.8,175.1 Z\" fill=\"currentColor\"/><path d=\"M370.0,207.5 Q368.0,215.5 361.3,220.4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M361.3,220.4 L365.6,212.5 L370.2,218.7 Z\" fill=\"currentColor\"/><path d=\"M340.4,241.3 Q335.5,248.0 327.5,250.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M327.5,250.0 L334.5,244.3 L336.3,251.7 Z\" fill=\"currentColor\"/><path d=\"M300.1,261.3 Q293.0,265.6 284.8,264.3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M284.8,264.3 L293.5,261.8 L292.3,269.4 Z\" fill=\"currentColor\"/><path d=\"M255.2,264.3 Q247.0,265.6 239.9,261.3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M239.9,261.3 L248.9,262.2 L244.9,268.8 Z\" fill=\"currentColor\"/><path d=\"M212.5,250.0 Q204.5,248.0 199.6,241.3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M199.6,241.3 L207.5,245.6 L201.3,250.2 Z\" fill=\"currentColor\"/><path d=\"M178.7,220.4 Q172.0,215.5 170.0,207.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M170.0,207.5 L175.7,214.5 L168.3,216.3 Z\" fill=\"currentColor\"/><path d=\"M158.7,180.1 Q154.4,173.0 155.7,164.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M155.7,164.8 L158.2,173.5 L150.6,172.3 Z\" fill=\"currentColor\"/><path d=\"M155.7,135.2 Q154.4,127.0 158.7,119.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M158.7,119.9 L157.8,128.9 L151.2,124.9 Z\" fill=\"currentColor\"/><path d=\"M170.0,92.5 Q172.0,84.5 178.7,79.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M178.7,79.6 L174.4,87.5 L169.8,81.3 Z\" fill=\"currentColor\"/><path d=\"M199.6,58.7 Q204.5,52.0 212.5,50.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M212.5,50.0 L205.5,55.7 L203.7,48.3 Z\" fill=\"currentColor\"/><path d=\"M239.9,38.7 Q247.0,34.4 255.2,35.7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M255.2,35.7 L246.5,38.2 L247.7,30.6 Z\" fill=\"currentColor\"/><circle cx=\"270\" cy=\"38\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"270\" y=\"43\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">7</text><line x1=\"270\" y1=\"-7\" x2=\"270\" y2=\"23\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M270.0,23.0 L266.2,14.9 L273.8,14.9 Z\" fill=\"currentColor\"/><circle cx=\"312.9\" cy=\"46.5\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"312.9\" y=\"51.5\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">6</text><circle cx=\"349.2\" cy=\"70.8\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"349.2\" y=\"75.8\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">1</text><circle cx=\"373.5\" cy=\"107.1\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"373.5\" y=\"112.1\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">8</text><circle cx=\"382\" cy=\"150\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"382\" y=\"155\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">11</text><circle cx=\"373.5\" cy=\"192.9\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"373.5\" y=\"197.9\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">10</text><circle cx=\"349.2\" cy=\"229.2\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"349.2\" y=\"234.2\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">5</text><circle cx=\"312.9\" cy=\"253.5\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"312.9\" y=\"258.5\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">12</text><circle cx=\"270\" cy=\"262\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"270\" y=\"267\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">15</text><circle cx=\"227.1\" cy=\"253.5\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"227.1\" y=\"258.5\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">14</text><circle cx=\"190.8\" cy=\"229.2\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"190.8\" y=\"234.2\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">9</text><circle cx=\"166.5\" cy=\"192.9\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"166.5\" y=\"197.9\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">0</text><circle cx=\"158\" cy=\"150\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"158\" y=\"155\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">3</text><circle cx=\"166.5\" cy=\"107.1\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"166.5\" y=\"112.1\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">2</text><circle cx=\"190.8\" cy=\"70.8\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"190.8\" y=\"75.8\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">13</text><circle cx=\"227.1\" cy=\"46.5\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"227.1\" y=\"51.5\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">4</text><text x=\"4\" y=\"140\" text-anchor=\"start\" font-size=\"13\">x₀ = 7</text><text x=\"4\" y=\"162\" text-anchor=\"start\" font-size=\"12\" class=\"t-gray\">xₙ₊₁ = (5xₙ + 3) mod 16</text><text x=\"420\" y=\"140\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">blue = even</text><text x=\"420\" y=\"160\" text-anchor=\"start\" font-size=\"12\" class=\"t-orange\">orange = odd</text></svg>",
  cr_rsa: "<svg viewBox=\"0 0 520 244\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"355.0\" y1=\"60.0\" x2=\"165.0\" y2=\"60.0\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-green\"/><path d=\"M165.0,60.0 L173.1,56.2 L173.1,63.8 Z\" fill=\"currentColor\" class=\"f-green\"/><line x1=\"118.0\" y1=\"190.0\" x2=\"208.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M208.0,190.0 L199.9,193.8 L199.9,186.2 Z\" fill=\"currentColor\"/><line x1=\"312.0\" y1=\"190.0\" x2=\"402.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M402.0,190.0 L393.9,193.8 L393.9,186.2 Z\" fill=\"currentColor\"/><rect x=\"15\" y=\"33\" width=\"150\" height=\"54\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"90\" y=\"65\" text-anchor=\"middle\" font-size=\"14\">Bob</text><rect x=\"355\" y=\"33\" width=\"150\" height=\"54\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"430\" y=\"65\" text-anchor=\"middle\" font-size=\"14\">Alice</text><rect x=\"22\" y=\"174\" width=\"96\" height=\"32\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"70\" y=\"195\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">m = 65</text><rect x=\"208\" y=\"174\" width=\"104\" height=\"32\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"260\" y=\"195\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">c = 2790</text><rect x=\"402\" y=\"174\" width=\"96\" height=\"32\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><text x=\"450\" y=\"195\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">m = 65</text><text x=\"260.0\" y=\"52.5\" text-anchor=\"middle\" font-size=\"13\" class=\"t-green\">public key (n, e) = (3233, 17)</text><text x=\"164.0\" y=\"210.5\" text-anchor=\"middle\" font-size=\"13\">mᵉ mod n</text><text x=\"356.0\" y=\"210.5\" text-anchor=\"middle\" font-size=\"13\">cᵈ mod n</text><text x=\"430\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" class=\"t-red\">keeps d = 2753 secret</text><text x=\"90\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">encrypts</text><text x=\"440\" y=\"232\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">only Alice can do this step</text><text x=\"260\" y=\"232\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">sent in public</text></svg>",
};
// </figures>

const birthday = [
  [5, 0.0271], [10, 0.1169], [15, 0.2529], [20, 0.4114], [23, 0.5073],
  [30, 0.7063], [40, 0.8912], [50, 0.9704], [60, 0.9941], [70, 0.9992],
];

export const lesson: Lesson = {
  id: 'dm-cryptography',
  title: 'RSA, Hashing and Pseudorandom Numbers',
  summary: 'Number theory at work: classical ciphers, public-key cryptography and RSA end to end, signatures, the birthday problem behind hash collisions, and the random-number generators inside every game.',
  minutes: 22,
  objectives: [
    'Encrypt and decrypt with Caesar and affine ciphers, and explain why they are easy to break',
    'Generate an RSA key pair with small primes, encrypt, decrypt and sign',
    'Prove that RSA decryption works using Euler\'s theorem, and explain why security rests on factoring',
    'Compute collision probabilities with the birthday problem and relate them to hash sizes',
    'Analyse a linear congruential generator\'s period and weaknesses, and use seeded generators for deterministic replays',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Shift ciphers: arithmetic mod 26',
      blocks: [
        {
          type: 'p',
          text: 'Number the letters $A = 0, B = 1, \\dots, Z = 25$. Then a cipher is just a function on $\\mathbb{Z}_{26}$ — and decryption is its inverse function, so it had better be a bijection. The oldest example is attributed to Julius Caesar: shift every letter by $3$.',
        },
        {
          type: 'definition',
          term: 'Caesar (shift) cipher',
          text: 'With key $k \\in \\mathbb{Z}_{26}$, the [[dm-caesar-cipher|shift cipher]] encrypts $E(x) = (x + k) \\bmod 26$ and decrypts $D(y) = (y - k) \\bmod 26$.',
        },
        {
          type: 'figure',
          svg: FIG.cr_caesar,
          alt: 'The alphabet A to Z numbered 0 to 25, each letter with an arrow down to the letter three places later; X, Y and Z map to A, B and C.',
          caption: 'Caesar\'s shift $k = 3$: ATTACK becomes DWWDFN. The wrap-around at the end of the alphabet is the "mod 26".',
        },
        {
          type: 'p',
          text: 'It is hopeless as security: there are only $26$ keys, so an attacker tries them all. Worse, every substitution cipher preserves **letter frequencies** — the most common ciphertext letter is probably $E$.',
        },
        {
          type: 'heading',
          text: 'The affine cipher',
        },
        {
          type: 'p',
          text: 'Mix in a multiplication: $E(x) = (ax + b) \\bmod 26$. For decryption to be possible, $x \\mapsto ax + b$ must be a bijection on $\\mathbb{Z}_{26}$, which by the previous lesson means $a$ must be invertible: $\\gcd(a, 26) = 1$. Then $D(y) = \\bar{a}(y - b) \\bmod 26$.',
        },
        {
          type: 'derivation',
          title: 'Affine cipher with $a = 7$, $b = 3$',
          steps: [
            { tex: '\\gcd(7, 26) = 1,\\quad \\bar{7} \\equiv 15 \\pmod{26}', why: 'The key is valid; the inverse was computed in the previous lesson ($7 \\cdot 15 = 105 = 4 \\cdot 26 + 1$).' },
            { tex: 'H = 7:\\; 7 \\cdot 7 + 3 = 52 \\equiv 0 = A', why: 'Encrypt H.' },
            { tex: 'I = 8:\\; 7 \\cdot 8 + 3 = 59 \\equiv 7 = H', why: 'Encrypt I. So HI becomes AH.' },
            { tex: 'D(0) = 15(0 - 3) = -45 \\equiv 7 = H', why: 'Decrypt the first letter with $\\bar{a} = 15$: $-45 + 52 = 7$. ✓' },
          ],
          result: 'Valid keys: $\\varphi(26) = 12$ choices of $a$ times $26$ choices of $b$, only $312$ keys — still trivial to brute-force, and still a substitution cipher.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'With $a = 2$ (not coprime to $26$) the "cipher" sends both $A$ and $N$ to $b$, since $2 \\cdot 0 \\equiv 2 \\cdot 13 \\pmod{26}$. It is not one-to-one, so messages cannot be decrypted. Ciphers must be bijections.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'With the affine cipher $E(x) = (5x + 8) \\bmod 26$, the letter C ($x = 2$) encrypts to which number?',
      hint: 'Compute $5 \\cdot 2 + 8$ and reduce mod $26$.',
      answer: '18',
      explanation: '$5 \\cdot 2 + 8 = 18$, already in $\\{0, \\dots, 25\\}$, so C encrypts to $18$, the letter S. The key is valid because $\\gcd(5, 26) = 1$; to decrypt, use $\\bar{5} = 21$ ($5 \\cdot 21 = 105 \\equiv 1$): $21(18 - 8) = 210 = 8 \\cdot 26 + 2$, giving back C.',
    },
    {
      kind: 'concept',
      title: 'The public-key idea',
      blocks: [
        {
          type: 'p',
          text: 'Every cipher so far is **symmetric**: the same secret key encrypts and decrypts. That raises a chicken-and-egg problem. Before you can talk securely with a game server, you must already share a secret key with it — but how did you share that key securely?',
        },
        {
          type: 'p',
          text: '[[dm-public-key-cryptography]], invented in the 1970s, breaks the loop with **two** keys. A **public key** for encrypting is published to the world; a **private key** for decrypting is never shared. Anyone can lock the box, but only the owner can open it — like a padlock you hand out, open, to anyone who wants to send you something.',
        },
        {
          type: 'p',
          text: 'This needs a **trapdoor one-way function**: easy to compute, infeasible to invert — unless you hold a secret piece of information (the trapdoor). [[dm-rsa]]\'s function is $m \\mapsto m^e \\bmod n$; inverting it is believed to be as hard as factoring $n$, and the trapdoor is the factorization.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Diffie and Hellman published the public-key concept in 1976; Rivest, Shamir and Adleman published RSA in 1977. (Clifford Cocks at the British GCHQ had found an equivalent scheme in 1973, kept classified until 1997.) Today RSA and its elliptic-curve cousins protect every HTTPS connection — including your game launcher\'s login.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'RSA end to end',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Choose primes', text: 'Pick two large distinct primes $p, q$ (in practice about $1024$ bits each) and compute $n = pq$.' },
            { title: 'Compute $\\varphi(n)$', text: '$\\varphi(n) = (p - 1)(q - 1)$. This is easy **only** if you know $p$ and $q$.' },
            { title: 'Public exponent', text: 'Choose $e$ with $1 < e < \\varphi(n)$ and $\\gcd(e, \\varphi(n)) = 1$ (commonly $e = 65537$).' },
            { title: 'Private exponent', text: 'Compute $d \\equiv e^{-1} \\pmod{\\varphi(n)}$ with the extended Euclidean algorithm.' },
            { title: 'Publish and use', text: 'Public key $(n, e)$; private key $d$. Encrypt $c = m^e \\bmod n$; decrypt $m = c^d \\bmod n$ (for $0 \\le m < n$).' },
          ],
        },
        {
          type: 'derivation',
          title: 'A toy key: $p = 61$, $q = 53$',
          steps: [
            { tex: 'n = 61 \\cdot 53 = 3233', why: 'The public modulus.' },
            { tex: '\\varphi(n) = 60 \\cdot 52 = 3120', why: 'Euler\'s totient of a product of two distinct primes.' },
            { tex: 'e = 17,\\quad \\gcd(17, 3120) = 1', why: '$3120 = 2^4 \\cdot 3 \\cdot 5 \\cdot 13$, which has no factor $17$.' },
            { tex: 'd = 17^{-1} \\bmod 3120 = 2753', why: 'Extended Euclid. Check: $17 \\cdot 2753 = 46\\,801 = 15 \\cdot 3120 + 1$. ✓' },
            { tex: 'm = 65:\\; c = 65^{17} \\bmod 3233 = 2790', why: 'Encrypt with the public key by square-and-multiply.' },
            { tex: '2790^{2753} \\bmod 3233 = 65', why: 'Decrypting with the private key returns the message.' },
          ],
          result: 'Public key $(3233, 17)$, private key $2753$. Real keys use 2048-bit $n$ and padding schemes (OAEP); never use "textbook RSA" like this for real data.',
        },
        {
          type: 'figure',
          svg: FIG.cr_rsa,
          alt: 'Alice sends her public key (3233, 17) to Bob. Bob encrypts m = 65 to c = 2790 with m to the e mod n; c is sent in public; Alice decrypts with c to the d mod n, keeping d = 2753 secret, and recovers 65.',
          caption: 'Only the public key travels. Eavesdroppers see $n$, $e$ and $c$, but without $d$ — which needs $\\varphi(n)$, which needs $p$ and $q$ — they cannot undo the exponentiation.',
        },
        {
          type: 'code',
          title: 'rsa.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>

using u64 = std::uint64_t;

u64 modpow(u64 b, u64 e, u64 m) {
    u64 r = 1 % m;
    b %= m;
    while (e) {
        if (e & 1) r = r * b % m;
        b = b * b % m;
        e >>= 1;
    }
    return r;
}

// Inverse of a mod m via extended Euclid (assumes gcd(a, m) = 1).
long long inverse(long long a, long long m) {
    long long r0 = m, r1 = a, t0 = 0, t1 = 1;
    while (r1 != 0) {
        long long q = r0 / r1;
        long long r2 = r0 - q * r1; r0 = r1; r1 = r2;
        long long t2 = t0 - q * t1; t0 = t1; t1 = t2;
    }
    return ((t0 % m) + m) % m;
}

int main() {
    // Key generation (toy sizes!)
    const u64 p = 61, q = 53;
    const u64 n = p * q;                 // public modulus
    const u64 phi = (p - 1) * (q - 1);   // secret: needs the factors
    const u64 e = 17;                    // public exponent, gcd(e, phi) = 1
    const u64 d = inverse(e, phi);       // private exponent
    std::printf("n = %llu, phi = %llu, e = %llu, d = %llu\\n",
                (unsigned long long)n, (unsigned long long)phi,
                (unsigned long long)e, (unsigned long long)d);

    // Encrypt with the public key, decrypt with the private key.
    const u64 messages[] = {65, 1234, 3000};
    for (u64 m : messages) {
        u64 c = modpow(m, e, n);
        u64 back = modpow(c, d, n);
        std::printf("m = %4llu  ->  c = %4llu  ->  decrypted %4llu\\n",
                    (unsigned long long)m, (unsigned long long)c, (unsigned long long)back);
    }

    // Sign with the private key, verify with the public key.
    const u64 digest = 999;              // stands in for hash(message) mod n
    u64 sig = modpow(digest, d, n);
    std::printf("signature = %llu, verify: %s\\n", (unsigned long long)sig,
                modpow(sig, e, n) == digest ? "valid" : "INVALID");
}`,
          output: `n = 3233, phi = 3120, e = 17, d = 2753
m =   65  ->  c = 2790  ->  decrypted   65
m = 1234  ->  c = 2183  ->  decrypted 1234
m = 3000  ->  c = 1780  ->  decrypted 3000
signature = 2229, verify: valid`,
          annotations: [
            { lines: '6-15', text: 'Square-and-multiply from the first lesson of this unit.' },
            { lines: '18-26', text: 'Extended Euclid keeping only the coefficient of $a$: the invariant is $r_i \\equiv t_i a \\pmod{m}$.' },
            { lines: 33, text: 'The whole security story in one line: computing $d$ requires $\\varphi(n)$, which requires $p$ and $q$.' },
            { lines: '49-52', text: 'A signature runs RSA backwards: only the private key can produce `sig`, anyone can check it with the public key.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Toy RSA with $p = 5$, $q = 11$ and $e = 3$. Find the private exponent $d$ (with $0 < d < \\varphi(n)$).',
      hint: 'Compute $\\varphi(n) = (p - 1)(q - 1)$, then solve $3d \\equiv 1 \\pmod{\\varphi(n)}$.',
      label: '$d =$',
      answer: '27',
      explanation: '$n = 55$ and $\\varphi(n) = 4 \\cdot 10 = 40$. We need $3d \\equiv 1 \\pmod{40}$: $40 = 13 \\cdot 3 + 1$ gives $1 = 40 - 13 \\cdot 3$, so $d \\equiv -13 \\equiv 27$. Check: $3 \\cdot 27 = 81 = 2 \\cdot 40 + 1$. ✓',
    },
    {
      kind: 'numeric',
      prompt: 'With the public key $(n, e) = (55, 3)$ from the previous question, encrypt the message $m = 7$.',
      hint: '$c = 7^3 \\bmod 55$.',
      label: '$c =$',
      answer: '13',
      explanation: '$7^3 = 343 = 6 \\cdot 55 + 13$, so $c = 13$. Decryption checks out: $13^{27} \\bmod 55 = 7$ (by square-and-multiply, or `pow(13, 27, 55)`). Only someone who knows $d = 27$ — that is, who knows $55 = 5 \\cdot 11$ — can undo the cube.',
    },
    {
      kind: 'concept',
      title: 'Why RSA works — and why it is secure',
      blocks: [
        {
          type: 'theorem',
          name: 'RSA correctness',
          tex: '(m^e)^d \\equiv m \\pmod{n} \\quad \\text{for } 0 \\le m < n',
        },
        {
          type: 'derivation',
          title: 'Proof (for $\\gcd(m, n) = 1$)',
          steps: [
            { tex: 'ed \\equiv 1 \\pmod{\\varphi(n)} \\implies ed = 1 + k\\varphi(n)', why: 'That is how $d$ was chosen, for some integer $k \\ge 0$.' },
            { tex: '(m^e)^d = m^{ed} = m^{1 + k\\varphi(n)} = m \\cdot \\left(m^{\\varphi(n)}\\right)^k', why: 'Exponent laws.' },
            { tex: 'm^{\\varphi(n)} \\equiv 1 \\pmod{n}', why: '[[dm-fermats-little-theorem|Euler\'s theorem]], valid because $\\gcd(m, n) = 1$.' },
            { tex: '(m^e)^d \\equiv m \\cdot 1^k = m \\pmod{n}', why: 'Since $0 \\le m < n$, the remainder $c^d \\bmod n$ is exactly $m$.' },
          ],
          result: 'Decryption is the inverse function of encryption on $\\mathbb{Z}_n$: RSA encryption is a bijection.',
        },
        {
          type: 'deepdive',
          title: 'What if $m$ shares a factor with $n$?',
          blocks: [
            {
              type: 'p',
              text: 'Check the congruence mod $p$ and mod $q$ separately, then combine with the Chinese remainder theorem. Mod $p$: if $p \\mid m$, both sides are $0$. Otherwise Fermat gives $m^{p-1} \\equiv 1$, and since $(p - 1) \\mid \\varphi(n)$, $m^{ed} = m \\cdot (m^{p-1})^{k(q-1)} \\equiv m$. The same holds mod $q$. A number congruent to $m$ modulo both $p$ and $q$ is congruent to $m$ modulo $pq = n$.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is secure',
          text: 'An attacker knows $n$ and $e$. To find $d$ they need $\\varphi(n) = (p-1)(q-1)$; and knowing $\\varphi(n)$ is equivalent to knowing $p$ and $q$ (since $p + q = n - \\varphi(n) + 1$ and $pq = n$ determine them as roots of a quadratic). So breaking RSA this way means **factoring** $n$.',
        },
        {
          type: 'table',
          headers: ['size of $n$', 'trial division up to $\\sqrt{n}$', 'status'],
          rows: [
            ['$12$ bits ($3233$)', 'about $57$ divisions', 'instant'],
            ['$64$ bits', 'about $2^{32} \\approx 4 \\times 10^9$', 'seconds'],
            ['$829$ bits ($250$ digits)', 'hopeless; best algorithms took thousands of core-years', 'largest RSA challenge factored (2020)'],
            ['$2048$ bits', 'about $2^{1024}$ by trial division', 'out of reach for classical computers'],
          ],
          caption: 'Multiplying two primes takes microseconds; undoing it is believed to take longer than the age of the universe at real key sizes. Nobody has proved factoring is hard — security rests on decades of failed attempts.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Digital signatures',
          text: 'Run RSA backwards: to [[dm-digital-signature|sign]] a message, Alice computes $s = h^d \\bmod n$, where $h$ is a cryptographic hash of the message. Anyone checks $s^e \\equiv h \\pmod{n}$ with her public key. Only the holder of $d$ could have produced $s$, and changing the message changes $h$. Game consoles and app stores verify signatures before running code; patch downloads are signed so a man-in-the-middle cannot inject malware.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'A large quantum computer running **Shor\'s algorithm** would factor $n$ efficiently and break RSA. None big enough exists yet, but standards bodies are already rolling out "post-quantum" algorithms based on different hard problems.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of RSA key generation in order.',
      lines: [
        'Choose two large distinct primes $p$ and $q$.',
        'Compute $n = pq$ and $\\varphi(n) = (p - 1)(q - 1)$.',
        'Choose $e$ with $\\gcd(e, \\varphi(n)) = 1$.',
        'Compute $d = e^{-1} \\bmod \\varphi(n)$ with the extended Euclidean algorithm.',
        'Publish $(n, e)$ and keep $d$ (and $p, q$) secret.',
      ],
      distractors: ['Compute $d = e^{-1} \\bmod n$.'],
      explanation: 'Each step needs the previous one: $\\varphi(n)$ needs the primes, choosing $e$ needs $\\varphi(n)$ for the coprimality check, and $d$ is the inverse of $e$ modulo $\\varphi(n)$. The distractor uses the wrong modulus: Euler\'s theorem reduces exponents mod $\\varphi(n)$, not mod $n$.',
    },
    {
      kind: 'error',
      prompt: 'A student builds a toy RSA key with $p = 5$, $q = 11$, $e = 3$. Tap the first wrong line.',
      lines: [
        '$n = 55$ and $\\varphi(n) = 4 \\cdot 10 = 40$.',
        '$\\gcd(3, 40) = 1$, so $e = 3$ is a valid public exponent.',
        '$d$ is the inverse of $3$ modulo $55$: $3 \\cdot 37 = 111 = 2 \\cdot 55 + 1$, so $d = 37$.',
        'The private key is $d = 37$.',
      ],
      errorLines: [3],
      explanation: 'The inverse must be taken modulo $\\varphi(n) = 40$, not modulo $n = 55$, because the proof needs $ed = 1 + k\\varphi(n)$ to apply Euler\'s theorem. Correctly $d = 27$ ($3 \\cdot 27 = 81 \\equiv 1 \\pmod{40}$). With $d = 37$, decrypting $c = 13$ gives $13^{37} \\bmod 55 = 18$, not the original $7$.',
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: anyone who knows the public key $(n, e)$ can easily compute the private exponent $d$, because $d$ is just the inverse of $e$ modulo $\\varphi(n)$ and inverses are fast to compute.',
      answer: false,
      explanation: 'Inverses *are* fast — once you know the modulus. The catch is $\\varphi(n) = (p-1)(q-1)$: computing it from $n$ alone is as hard as factoring $n$. The key owner chose $p$ and $q$, so for them $d$ is one extended-Euclid call; for everyone else it is a factoring problem.',
    },
    {
      kind: 'concept',
      title: 'Hashing and the birthday problem',
      blocks: [
        {
          type: 'p',
          text: 'A cryptographic hash (SHA-256) maps any message to a fixed-size digest. As you saw in the Functions lesson, collisions must exist; the question is how soon you expect to **find** one by chance. The answer comes from a classic puzzle, the [[dm-birthday-problem|birthday problem]]: how many people must be in a room before two probably share a birthday?',
        },
        {
          type: 'derivation',
          title: 'Probability that $k$ random values in $m$ buckets are all different',
          steps: [
            { tex: 'P(\\text{no collision}) = \\frac{m}{m} \\cdot \\frac{m-1}{m} \\cdot \\frac{m-2}{m} \\cdots \\frac{m-k+1}{m}', why: 'The first value can be anything; the second must avoid $1$ used value, the third $2$, and so on. Each value is independent and uniform.' },
            { tex: '= \\prod_{i=0}^{k-1}\\left(1 - \\frac{i}{m}\\right) \\approx \\prod_{i=0}^{k-1} e^{-i/m}', why: 'For small $x$, $1 - x \\approx e^{-x}$.' },
            { tex: '= e^{-k(k-1)/(2m)}', why: 'Add the exponents: $0 + 1 + \\cdots + (k - 1) = \\frac{k(k-1)}{2}$.' },
            { tex: 'P(\\text{collision}) \\approx 1 - e^{-k^2/(2m)} = \\tfrac{1}{2} \\iff k \\approx \\sqrt{2m\\ln 2} \\approx 1.18\\sqrt{m}', why: 'Set the probability to one half and solve for $k$.' },
          ],
          result: 'With $m = 365$, $k = 23$ people already give a $50.7\\%$ chance of a shared birthday. Collisions appear after about $\\sqrt{m}$ items, not $m/2$.',
        },
        {
          type: 'graph',
          x: [0, 80],
          y: [0, 1.05],
          yStep: 0.25,
          functions: [{ expr: '1 - e^(-x(x - 1)/(2m))', label: 'approximate $P(\\text{collision})$', color: 'blue', domain: [1, 80] }],
          points: [
            ...birthday.map(([k, p]) => ({ x: k, y: p, color: 'red' as const })),
            { x: 'k', y: '1 - e^(-k(k - 1)/(2m))', color: 'blue', label: 'k' },
          ],
          hlines: [{ y: 0.5, color: 'gray' }],
          sliders: [
            { name: 'm', min: 50, max: 2000, step: 5, value: 365, label: 'buckets $m$' },
            { name: 'k', min: 2, max: 80, step: 1, value: 23, label: 'items $k$' },
          ],
          readouts: [{ label: '$P(\\text{collision}) \\approx$', expr: '1 - e^(-k(k - 1)/(2m))', digits: 3 }],
          caption: 'Red dots are the exact birthday probabilities for $m = 365$; the blue curve is the approximation, which matches them closely. Increase $m$ and the curve stretches only like $\\sqrt{m}$: four times the buckets, twice the items to reach $50\\%$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\sqrt{m}$ and not $m$',
          text: 'A collision is about **pairs**, and $k$ items form $\\binom{k}{2} = \\frac{k(k-1)}{2}$ pairs. Each pair collides with probability $\\frac{1}{m}$, so the expected number of colliding pairs is $\\frac{k(k-1)}{2m}$ — exactly the exponent above. It reaches about $\\frac{1}{2}$ once $k^2 \\approx m$. With $23$ people there are $253$ pairs, far more than intuition (which thinks about $23$ people, not $253$ pairs) expects.',
        },
        {
          type: 'list',
          items: [
            '**32-bit hashes** ($m = 2^{32}$) give a $50\\%$ collision chance after about $77\\,000$ items. A big game with hashed string IDs for assets or events will hit collisions — engines check for them at build time.',
            '**64-bit hashes**: about $5 \\times 10^9$ items for $50\\%$.',
            '**Cryptographic hashes** use $256$ bits so that the birthday bound, about $2^{128}$ attempts, is far out of reach. A hash with $b$ bits offers only about $b/2$ bits of collision resistance.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Loot and spawns',
          text: 'The same math explains why "random" spawn points cluster: with $10$ players choosing among $50$ points, $P(\\text{some two share}) \\approx 1 - e^{-90/100} \\approx 0.59$ (the exact value is about $0.62$). If overlaps are bad, shuffle the spawn list instead of sampling with replacement.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Three players each pick one of $6$ spawn points uniformly at random, independently. What is the probability that at least two of them pick the same point? Give an exact fraction or a decimal to 4 places.',
      hint: 'Compute $P(\\text{all different}) = \\frac{6}{6} \\cdot \\frac{5}{6} \\cdot \\frac{4}{6}$ and subtract from $1$.',
      answer: '4/9',
      minDecimals: 4,
      explanation: '$P(\\text{all different}) = \\frac{6 \\cdot 5 \\cdot 4}{6^3} = \\frac{120}{216} = \\frac{5}{9}$, so $P(\\text{collision}) = 1 - \\frac{5}{9} = \\frac{4}{9} \\approx 0.4444$. Even with only three players and six points, a clash is nearly a coin flip — the birthday effect in miniature. (Enumerating all $216$ outcomes confirms $96$ of them have a repeat.)',
    },
    {
      kind: 'concept',
      title: 'Pseudorandom numbers: the LCG',
      blocks: [
        {
          type: 'p',
          text: 'Computers are deterministic, so "random" numbers in games are [[dm-pseudorandom-generator|pseudorandom]]: a simple formula produces a sequence that *looks* random. The classic is the **linear congruential generator** (LCG):',
        },
        {
          type: 'math',
          tex: 'x_{n+1} = (a\\,x_n + c) \\bmod m',
          caption: 'The starting value $x_0$ is the **seed**. Old C libraries\' `rand()` were LCGs with $m = 2^{31}$ or $2^{32}$.',
        },
        {
          type: 'p',
          text: 'Since each value depends only on the previous one and there are only $m$ possible values, the sequence must eventually repeat — and from then on it cycles forever. The cycle length is the **period**, at most $m$.',
        },
        {
          type: 'theorem',
          name: 'Hull–Dobell theorem (full period)',
          text: 'For $c \\ne 0$, the LCG has period $m$ for every seed if and only if (1) $\\gcd(c, m) = 1$, (2) $a - 1$ is divisible by every prime factor of $m$, and (3) $a - 1$ is divisible by $4$ if $m$ is.',
        },
        {
          type: 'figure',
          svg: FIG.cr_lcg,
          alt: 'Sixteen nodes in a circle showing the LCG cycle 7, 6, 1, 8, 11, 10, 5, 12, 15, 14, 9, 0, 3, 2, 13, 4 and back to 7. Even values are blue and odd values orange, alternating all the way around.',
          caption: '$x_{n+1} = (5x_n + 3) \\bmod 16$ satisfies Hull–Dobell ($\\gcd(3, 16) = 1$; $a - 1 = 4$ is divisible by $2$ and by $4$), so it visits all $16$ values. But look at the colours: the parity alternates perfectly.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Weaknesses of LCGs',
          text: 'With $m = 2^k$, the lowest bit has period $2$ (as in the figure), the next bit period $4$, and so on — so `rand() % 2` for a coin flip alternates heads and tails. Consecutive outputs fall on a few parallel planes in 3-D (IBM\'s infamous RANDU), which shows up as visible patterns in procedurally generated terrain. And an LCG is trivially **predictable**: one output reveals the whole future, so never use it for anything security-related.',
        },
        {
          type: 'p',
          text: '**Xorshift** generators (Marsaglia, 2003) mix the bits of a 32- or 64-bit state with shifts and XORs. They are just as fast, have no weak low bits in the same way, and xorshift32 cycles through all $2^{32} - 1$ nonzero states. Modern engines often use xorshift variants or PCG; `std::mt19937` is the standard library\'s heavier, high-quality choice.',
        },
        {
          type: 'code',
          title: 'prng.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>

// Toy LCG: x' = (5x + 3) mod 16. Full period by Hull-Dobell.
struct ToyLcg {
    unsigned x;
    unsigned next() { x = (5 * x + 3) % 16; return x; }
};

// Marsaglia's xorshift32: fast, period 2^32 - 1 (state must not be 0).
struct XorShift32 {
    std::uint32_t s;
    std::uint32_t next() {
        s ^= s << 13;
        s ^= s >> 17;
        s ^= s << 5;
        return s;
    }
};

int main() {
    ToyLcg lcg{7};
    std::printf("LCG:      ");
    for (int i = 0; i < 16; ++i) std::printf("%u ", lcg.next());
    std::printf("\\nlow bits: ");
    lcg.x = 7;
    for (int i = 0; i < 16; ++i) std::printf("%u ", lcg.next() & 1);
    std::printf("\\n");

    // Same seed -> same sequence: the basis of deterministic replays.
    XorShift32 a{2024}, b{2024};
    for (int i = 0; i < 3; ++i) {
        std::uint32_t ra = a.next(), rb = b.next();
        std::printf("roll %d: %10u %10u  d6 = %u\\n", i + 1, ra, rb, ra % 6 + 1);
    }
}`,
          output: `LCG:      6 1 8 11 10 5 12 15 14 9 0 3 2 13 4 7
low bits: 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1
roll 1:  526251350  526251350  d6 = 3
roll 2: 2669400077 2669400077  d6 = 6
roll 3: 1180324480 1180324480  d6 = 5`,
          annotations: [
            { lines: 7, text: 'The whole generator: one multiply, one add, one mod.' },
            { lines: '14-16', text: 'Each line is a bijection on 32-bit states (XOR with a shifted copy can be undone), so the generator never merges two states — the reason the period is so long.' },
            { lines: 30, text: 'Two generators with the same seed produce identical streams.' },
            { lines: 33, text: '`% 6` maps 32-bit values to a die roll. Because $2^{32}$ is not a multiple of $6$, faces $1$–$4$ are very slightly more likely; for fairness use `std::uniform_int_distribution` or rejection sampling.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Seeds, replays and lockstep multiplayer',
          text: 'Because a PRNG is a deterministic function of its seed, a game can record just the **seed and the player inputs** and replay a whole match exactly — the trick behind replay files in RTS and fighting games, "daily challenge" levels that are the same for everyone, and lockstep networking where every client simulates the same randomness without sending it. The catch: every random call must happen in the same order on every machine, so keep separate generators for gameplay and for cosmetic effects.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'An LCG uses $x_{n+1} = (5x_n + 3) \\bmod 16$ with seed $x_0 = 7$. Compute $x_3$.',
      hint: '$x_1 = (35 + 3) \\bmod 16$. Keep going.',
      label: '$x_3 =$',
      answer: '8',
      explanation: '$x_1 = 38 \\bmod 16 = 6$, $x_2 = (30 + 3) \\bmod 16 = 33 \\bmod 16 = 1$, $x_3 = (5 + 3) \\bmod 16 = 8$. This matches the cycle in the figure: $7 \\to 6 \\to 1 \\to 8 \\to 11 \\to \\cdots$',
    },
    {
      kind: 'mcq',
      prompt: 'A game uses an LCG with $m = 2^{32}$ and decides a coin flip with `rng() % 2`. What will players notice?',
      options: [
        { text: 'The results strictly alternate heads, tails, heads, tails, …', correct: true, why: 'With a power-of-two modulus (and odd $a$, $c$), the lowest bit of an LCG has period $2$, exactly as in the mod-16 example.' },
        { text: 'Nothing: a full-period LCG makes every bit look random', why: 'Full period concerns the whole value. The low bits of a power-of-two LCG have very short periods.' },
        { text: 'Heads comes up about two-thirds of the time', why: 'Over a full period every value appears exactly once, so each bit is $1$ exactly half the time — the problem is the pattern, not the frequency.' },
        { text: 'The sequence repeats after $32$ flips', why: 'The lowest bit repeats after just $2$ flips; the full state repeats after $2^{32}$.' },
      ],
      explanation: '$x_{n+1} \\equiv a x_n + c \\pmod 2$ depends only on the parity of $x_n$, so the low bit is itself a tiny LCG mod $2$, with period at most $2$. Fixes: use the **high** bits (`rng() >> 31`), or a better generator such as xorshift or `std::mt19937` with `std::uniform_int_distribution`.',
    },
  ],
  takeaways: [
    'Caesar ($x + k$) and affine ($ax + b$, needing $\\gcd(a, 26) = 1$) ciphers are bijections on $\\mathbb{Z}_{26}$ — and easily broken by brute force or letter frequencies.',
    'Public-key cryptography publishes an encryption key and keeps a decryption key private, using a trapdoor one-way function.',
    'RSA: $n = pq$, $\\varphi(n) = (p-1)(q-1)$, $\\gcd(e, \\varphi(n)) = 1$, $d = e^{-1} \\bmod \\varphi(n)$; encrypt $m^e \\bmod n$, decrypt $c^d \\bmod n$. It works by Euler\'s theorem and is secure as long as factoring $n$ is infeasible.',
    'Signatures run RSA backwards: sign a hash with $d$, verify with $e$.',
    'Birthday problem: $P(\\text{collision}) \\approx 1 - e^{-k(k-1)/(2m)}$, reaching $50\\%$ near $1.18\\sqrt{m}$ — $23$ people for birthdays, about $77\\,000$ items for 32-bit hashes.',
    'An LCG $x_{n+1} = (ax_n + c) \\bmod m$ has full period under Hull–Dobell, but power-of-two LCGs have weak low bits and are predictable. Seeded PRNGs make replays and lockstep multiplayer deterministic.',
  ],
  reading: [
    {
      title: 'Khan Academy — Computer science: Cryptography',
      url: 'https://www.khanacademy.org/computing/computer-science',
      source: 'khan',
      note: 'Short visual lessons from Caesar ciphers through modular exponentiation and RSA.',
    },
    {
      title: 'Wikipedia — RSA (cryptosystem)',
      url: 'https://en.wikipedia.org/wiki/RSA_(cryptosystem)',
      source: 'wikipedia',
      note: 'The full algorithm, the same toy example with $p = 61$ and $q = 53$, padding, and known attacks.',
    },
    {
      title: 'Wikipedia — Birthday problem',
      url: 'https://en.wikipedia.org/wiki/Birthday_problem',
      source: 'wikipedia',
      note: 'Exact tables, the approximation used here, and the birthday attack on hash functions.',
    },
    {
      title: 'Wikipedia — Linear congruential generator',
      url: 'https://en.wikipedia.org/wiki/Linear_congruential_generator',
      source: 'wikipedia',
      note: 'Hull–Dobell, parameters used by real libraries, and the RANDU lattice problem.',
    },
  ],
};
