import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  fn_arrows: "<svg viewBox=\"0 0 520 236\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"35\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><ellipse cx=\"135\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><text x=\"35\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">A</text><text x=\"135\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">B</text><circle cx=\"35\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"26\" y=\"44.0\" text-anchor=\"end\" font-size=\"13\">1</text><circle cx=\"35\" cy=\"107.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"26\" y=\"112.0\" text-anchor=\"end\" font-size=\"13\">2</text><circle cx=\"35\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"26\" y=\"180.0\" text-anchor=\"end\" font-size=\"13\">3</text><circle cx=\"135\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"144\" y=\"44.0\" text-anchor=\"start\" font-size=\"13\" class=\"t-blue\">a</text><circle cx=\"135\" cy=\"84.33333333333334\" r=\"3.5\" fill=\"currentColor\"/><text x=\"144\" y=\"89.33333333333334\" text-anchor=\"start\" font-size=\"13\">b</text><circle cx=\"135\" cy=\"129.66666666666669\" r=\"3.5\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"144\" y=\"134.66666666666669\" text-anchor=\"start\" font-size=\"13\" class=\"t-blue\">c</text><circle cx=\"135\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"144\" y=\"180.0\" text-anchor=\"start\" font-size=\"13\">d</text><line x1=\"41.0\" y1=\"39.0\" x2=\"128.0\" y2=\"39.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M128.0,39.0 L120.9,42.6 L120.9,35.4 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"40.0\" y1=\"103.6\" x2=\"129.2\" y2=\"42.9\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M129.2,42.9 L125.4,49.9 L121.3,43.9 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"40.5\" y1=\"172.5\" x2=\"128.6\" y2=\"132.6\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M128.6,132.6 L123.6,138.8 L120.6,132.2 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"85.0\" y=\"212\" text-anchor=\"middle\" font-size=\"13\">a function</text><text x=\"85.0\" y=\"230\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">range {a, c} ⊆ codomain</text><ellipse cx=\"208\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><ellipse cx=\"308\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><text x=\"208\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">A</text><text x=\"308\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">B</text><circle cx=\"208\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"199\" y=\"44.0\" text-anchor=\"end\" font-size=\"13\">1</text><circle cx=\"208\" cy=\"107.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"199\" y=\"112.0\" text-anchor=\"end\" font-size=\"13\">2</text><circle cx=\"208\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"199\" y=\"180.0\" text-anchor=\"end\" font-size=\"13\">3</text><circle cx=\"308\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"317\" y=\"44.0\" text-anchor=\"start\" font-size=\"13\">a</text><circle cx=\"308\" cy=\"84.33333333333334\" r=\"3.5\" fill=\"currentColor\"/><text x=\"317\" y=\"89.33333333333334\" text-anchor=\"start\" font-size=\"13\">b</text><circle cx=\"308\" cy=\"129.66666666666669\" r=\"3.5\" fill=\"currentColor\"/><text x=\"317\" y=\"134.66666666666669\" text-anchor=\"start\" font-size=\"13\">c</text><circle cx=\"308\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"317\" y=\"180.0\" text-anchor=\"start\" font-size=\"13\">d</text><line x1=\"214.0\" y1=\"39.0\" x2=\"301.0\" y2=\"39.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M301.0,39.0 L293.9,42.6 L293.9,35.4 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"213.9\" y1=\"105.7\" x2=\"301.2\" y2=\"85.9\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-red\"/><path d=\"M301.2,85.9 L295.0,91.0 L293.4,83.9 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"213.0\" y1=\"110.4\" x2=\"302.2\" y2=\"171.1\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-red\"/><path d=\"M302.2,171.1 L294.3,170.1 L298.4,164.1 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"213.5\" y1=\"172.5\" x2=\"301.6\" y2=\"132.6\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M301.6,132.6 L296.6,138.8 L293.6,132.2 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"258.0\" y=\"212\" text-anchor=\"middle\" font-size=\"13\">not a function</text><text x=\"258.0\" y=\"230\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2 has two outputs</text><ellipse cx=\"381\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><ellipse cx=\"481\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><text x=\"381\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">A</text><text x=\"481\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">B</text><circle cx=\"381\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"372\" y=\"44.0\" text-anchor=\"end\" font-size=\"13\">1</text><circle cx=\"381\" cy=\"107.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"372\" y=\"112.0\" text-anchor=\"end\" font-size=\"13\">2</text><circle cx=\"381\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"372\" y=\"180.0\" text-anchor=\"end\" font-size=\"13\">3</text><circle cx=\"481\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"490\" y=\"44.0\" text-anchor=\"start\" font-size=\"13\">a</text><circle cx=\"481\" cy=\"84.33333333333334\" r=\"3.5\" fill=\"currentColor\"/><text x=\"490\" y=\"89.33333333333334\" text-anchor=\"start\" font-size=\"13\">b</text><circle cx=\"481\" cy=\"129.66666666666669\" r=\"3.5\" fill=\"currentColor\"/><text x=\"490\" y=\"134.66666666666669\" text-anchor=\"start\" font-size=\"13\">c</text><circle cx=\"481\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"490\" y=\"180.0\" text-anchor=\"start\" font-size=\"13\">d</text><line x1=\"386.5\" y1=\"41.5\" x2=\"474.6\" y2=\"81.4\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M474.6,81.4 L466.6,81.8 L469.6,75.2 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"386.5\" y1=\"172.5\" x2=\"474.6\" y2=\"132.6\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M474.6,132.6 L469.6,138.8 L466.6,132.2 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"431.0\" y=\"212\" text-anchor=\"middle\" font-size=\"13\">not a function</text><text x=\"431.0\" y=\"230\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2 has no output</text><circle cx=\"381\" cy=\"107.0\" r=\"9\" fill=\"none\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\"/></svg>",
  fn_diagonal: "<svg viewBox=\"0 0 520 288\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"20\" y=\"18\" font-size=\"11\" class=\"t-gray\">decimal place:</text><text x=\"138\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">1</text><text x=\"172\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">2</text><text x=\"206\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">3</text><text x=\"240\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">4</text><text x=\"274\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">5</text><text x=\"308\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">6</text><text x=\"20\" y=\"39\" font-size=\"14\">f(1) = 0.</text><rect x=\"125\" y=\"20\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"138\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-red\">5</text><text x=\"172\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">1</text><text x=\"206\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">0</text><text x=\"240\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">5</text><text x=\"274\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">1</text><text x=\"308\" y=\"39\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">1</text><text x=\"342\" y=\"39\" font-size=\"15\">…</text><text x=\"20\" y=\"69\" font-size=\"14\">f(2) = 0.</text><text x=\"138\" y=\"69\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">4</text><rect x=\"159\" y=\"50\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"172\" y=\"69\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-red\">1</text><text x=\"206\" y=\"69\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">3</text><text x=\"240\" y=\"69\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">2</text><text x=\"274\" y=\"69\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">0</text><text x=\"308\" y=\"69\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">4</text><text x=\"342\" y=\"69\" font-size=\"15\">…</text><text x=\"20\" y=\"99\" font-size=\"14\">f(3) = 0.</text><text x=\"138\" y=\"99\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">8</text><text x=\"172\" y=\"99\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">2</text><rect x=\"193\" y=\"80\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"206\" y=\"99\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-red\">4</text><text x=\"240\" y=\"99\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">5</text><text x=\"274\" y=\"99\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">0</text><text x=\"308\" y=\"99\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">2</text><text x=\"342\" y=\"99\" font-size=\"15\">…</text><text x=\"20\" y=\"129\" font-size=\"14\">f(4) = 0.</text><text x=\"138\" y=\"129\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">2</text><text x=\"172\" y=\"129\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">3</text><text x=\"206\" y=\"129\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">3</text><rect x=\"227\" y=\"110\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"240\" y=\"129\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-red\">0</text><text x=\"274\" y=\"129\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">6</text><text x=\"308\" y=\"129\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">1</text><text x=\"342\" y=\"129\" font-size=\"15\">…</text><text x=\"20\" y=\"159\" font-size=\"14\">f(5) = 0.</text><text x=\"138\" y=\"159\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">4</text><text x=\"172\" y=\"159\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">1</text><text x=\"206\" y=\"159\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">0</text><text x=\"240\" y=\"159\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">7</text><rect x=\"261\" y=\"140\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"274\" y=\"159\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-red\">5</text><text x=\"308\" y=\"159\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">9</text><text x=\"342\" y=\"159\" font-size=\"15\">…</text><text x=\"20\" y=\"189\" font-size=\"14\">f(6) = 0.</text><text x=\"138\" y=\"189\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">9</text><text x=\"172\" y=\"189\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">9</text><text x=\"206\" y=\"189\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">3</text><text x=\"240\" y=\"189\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">7</text><text x=\"274\" y=\"189\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\">8</text><rect x=\"295\" y=\"170\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"308\" y=\"189\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-red\">3</text><text x=\"342\" y=\"189\" font-size=\"15\">…</text><text x=\"20\" y=\"218\" font-size=\"15\">⋮</text><text x=\"20\" y=\"248\" font-size=\"14\" class=\"t-red\">diagonal: 0.514053…</text><text x=\"20\" y=\"274\" font-size=\"14\" class=\"t-green\">new x = 0.</text><rect x=\"125\" y=\"255\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"138\" y=\"274\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-green\">4</text><rect x=\"159\" y=\"255\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"172\" y=\"274\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-green\">5</text><rect x=\"193\" y=\"255\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"206\" y=\"274\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-green\">5</text><rect x=\"227\" y=\"255\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"240\" y=\"274\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-green\">5</text><rect x=\"261\" y=\"255\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"274\" y=\"274\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-green\">4</text><rect x=\"295\" y=\"255\" width=\"26\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.22\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"308\" y=\"274\" text-anchor=\"middle\" font-size=\"15\" font-family=\"monospace\" class=\"t-green\">5</text><text x=\"342\" y=\"274\" font-size=\"15\">…</text><text x=\"372\" y=\"198\" font-size=\"12\" class=\"t-gray\">rule: 5 → 4,</text><text x=\"372\" y=\"214\" font-size=\"12\" class=\"t-gray\">anything else → 5</text></svg>",
  fn_nz: "<svg viewBox=\"0 0 520 104\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"40\" y=\"30\" text-anchor=\"middle\" font-size=\"15\">0</text><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"66\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\"/><path d=\"M40,72 L36,63 L44,63 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"40\" y=\"92\" text-anchor=\"middle\" font-size=\"15\" class=\"t-purple\">0</text><text x=\"92\" y=\"30\" text-anchor=\"middle\" font-size=\"15\">1</text><line x1=\"92\" y1=\"38\" x2=\"92\" y2=\"66\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\"/><path d=\"M92,72 L88,63 L96,63 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"92\" y=\"92\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">1</text><text x=\"144\" y=\"30\" text-anchor=\"middle\" font-size=\"15\">2</text><line x1=\"144\" y1=\"38\" x2=\"144\" y2=\"66\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\"/><path d=\"M144,72 L140,63 L148,63 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"144\" y=\"92\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">−1</text><text x=\"196\" y=\"30\" text-anchor=\"middle\" font-size=\"15\">3</text><line x1=\"196\" y1=\"38\" x2=\"196\" y2=\"66\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\"/><path d=\"M196,72 L192,63 L200,63 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"196\" y=\"92\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">2</text><text x=\"248\" y=\"30\" text-anchor=\"middle\" font-size=\"15\">4</text><line x1=\"248\" y1=\"38\" x2=\"248\" y2=\"66\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\"/><path d=\"M248,72 L244,63 L252,63 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"248\" y=\"92\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">−2</text><text x=\"300\" y=\"30\" text-anchor=\"middle\" font-size=\"15\">5</text><line x1=\"300\" y1=\"38\" x2=\"300\" y2=\"66\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\"/><path d=\"M300,72 L296,63 L304,63 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"300\" y=\"92\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">3</text><text x=\"352\" y=\"30\" text-anchor=\"middle\" font-size=\"15\">6</text><line x1=\"352\" y1=\"38\" x2=\"352\" y2=\"66\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\"/><path d=\"M352,72 L348,63 L356,63 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"352\" y=\"92\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">−3</text><text x=\"404\" y=\"30\" text-anchor=\"middle\" font-size=\"15\">7</text><line x1=\"404\" y1=\"38\" x2=\"404\" y2=\"66\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\"/><path d=\"M404,72 L400,63 L408,63 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"404\" y=\"92\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">4</text><text x=\"456\" y=\"30\" text-anchor=\"middle\" font-size=\"15\">8</text><line x1=\"456\" y1=\"38\" x2=\"456\" y2=\"66\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.5\"/><path d=\"M456,72 L452,63 L460,63 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"456\" y=\"92\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">−4</text><text x=\"498\" y=\"30\" font-size=\"15\">…</text><text x=\"498\" y=\"92\" font-size=\"15\">…</text><text x=\"8\" y=\"30\" font-size=\"14\" font-style=\"italic\" text-anchor=\"middle\">ℕ</text><text x=\"8\" y=\"92\" font-size=\"14\" font-style=\"italic\" text-anchor=\"middle\">ℤ</text></svg>",
  fn_rationals: "<svg viewBox=\"0 0 520 284\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"70,35 70,81 152,35 234,35 152,81 70,127 70,173 152,127 234,81 316,35 398,35 316,81 234,127 152,173 70,219\" fill=\"none\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1.6\" stroke-opacity=\"0.8\"/><rect x=\"50\" y=\"21\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"70\" y=\"40\" text-anchor=\"middle\" font-size=\"14\">1/1</text><rect x=\"132\" y=\"21\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"152\" y=\"40\" text-anchor=\"middle\" font-size=\"14\">1/2</text><rect x=\"214\" y=\"21\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"234\" y=\"40\" text-anchor=\"middle\" font-size=\"14\">1/3</text><rect x=\"296\" y=\"21\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"316\" y=\"40\" text-anchor=\"middle\" font-size=\"14\">1/4</text><rect x=\"378\" y=\"21\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"398\" y=\"40\" text-anchor=\"middle\" font-size=\"14\">1/5</text><rect x=\"50\" y=\"67\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"70\" y=\"86\" text-anchor=\"middle\" font-size=\"14\">2/1</text><rect x=\"132\" y=\"67\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.06\" stroke=\"none\"/><text x=\"152\" y=\"86\" text-anchor=\"middle\" font-size=\"14\" class=\"t-gray\">2/2</text><rect x=\"214\" y=\"67\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"234\" y=\"86\" text-anchor=\"middle\" font-size=\"14\">2/3</text><rect x=\"296\" y=\"67\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.06\" stroke=\"none\"/><text x=\"316\" y=\"86\" text-anchor=\"middle\" font-size=\"14\" class=\"t-gray\">2/4</text><rect x=\"378\" y=\"67\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"398\" y=\"86\" text-anchor=\"middle\" font-size=\"14\">2/5</text><rect x=\"50\" y=\"113\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"70\" y=\"132\" text-anchor=\"middle\" font-size=\"14\">3/1</text><rect x=\"132\" y=\"113\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"152\" y=\"132\" text-anchor=\"middle\" font-size=\"14\">3/2</text><rect x=\"214\" y=\"113\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.06\" stroke=\"none\"/><text x=\"234\" y=\"132\" text-anchor=\"middle\" font-size=\"14\" class=\"t-gray\">3/3</text><rect x=\"296\" y=\"113\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"316\" y=\"132\" text-anchor=\"middle\" font-size=\"14\">3/4</text><rect x=\"378\" y=\"113\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"398\" y=\"132\" text-anchor=\"middle\" font-size=\"14\">3/5</text><rect x=\"50\" y=\"159\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"70\" y=\"178\" text-anchor=\"middle\" font-size=\"14\">4/1</text><rect x=\"132\" y=\"159\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.06\" stroke=\"none\"/><text x=\"152\" y=\"178\" text-anchor=\"middle\" font-size=\"14\" class=\"t-gray\">4/2</text><rect x=\"214\" y=\"159\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"234\" y=\"178\" text-anchor=\"middle\" font-size=\"14\">4/3</text><rect x=\"296\" y=\"159\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.06\" stroke=\"none\"/><text x=\"316\" y=\"178\" text-anchor=\"middle\" font-size=\"14\" class=\"t-gray\">4/4</text><rect x=\"378\" y=\"159\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"398\" y=\"178\" text-anchor=\"middle\" font-size=\"14\">4/5</text><rect x=\"50\" y=\"205\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"70\" y=\"224\" text-anchor=\"middle\" font-size=\"14\">5/1</text><rect x=\"132\" y=\"205\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"152\" y=\"224\" text-anchor=\"middle\" font-size=\"14\">5/2</text><rect x=\"214\" y=\"205\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"234\" y=\"224\" text-anchor=\"middle\" font-size=\"14\">5/3</text><rect x=\"296\" y=\"205\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.14\" stroke=\"none\"/><text x=\"316\" y=\"224\" text-anchor=\"middle\" font-size=\"14\">5/4</text><rect x=\"378\" y=\"205\" width=\"40\" height=\"26\" rx=\"5\" fill=\"currentColor\" class=\"f-gray\" fill-opacity=\"0.06\" stroke=\"none\"/><text x=\"398\" y=\"224\" text-anchor=\"middle\" font-size=\"14\" class=\"t-gray\">5/5</text><text x=\"92\" y=\"28\" font-size=\"10\" class=\"t-orange\">0</text><text x=\"92\" y=\"74\" font-size=\"10\" class=\"t-orange\">1</text><text x=\"174\" y=\"28\" font-size=\"10\" class=\"t-orange\">2</text><text x=\"256\" y=\"28\" font-size=\"10\" class=\"t-orange\">3</text><text x=\"92\" y=\"120\" font-size=\"10\" class=\"t-orange\">4</text><text x=\"92\" y=\"166\" font-size=\"10\" class=\"t-orange\">5</text><text x=\"174\" y=\"120\" font-size=\"10\" class=\"t-orange\">6</text><text x=\"256\" y=\"74\" font-size=\"10\" class=\"t-orange\">7</text><text x=\"338\" y=\"28\" font-size=\"10\" class=\"t-orange\">8</text><text x=\"420\" y=\"28\" font-size=\"10\" class=\"t-orange\">9</text><text x=\"92\" y=\"212\" font-size=\"10\" class=\"t-orange\">10</text><text x=\"260\" y=\"274\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">p/q: row = numerator p, column = denominator q · grey = duplicate, skipped</text><text x=\"450\" y=\"132\" font-size=\"15\">…</text><text x=\"234\" y=\"254\" font-size=\"15\">⋮</text></svg>",
  fn_types: "<svg viewBox=\"0 0 520 236\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"35\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><ellipse cx=\"90\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><text x=\"35\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">A</text><text x=\"90\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">B</text><circle cx=\"35\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"26\" y=\"44.0\" text-anchor=\"end\" font-size=\"13\">1</text><circle cx=\"35\" cy=\"107.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"26\" y=\"112.0\" text-anchor=\"end\" font-size=\"13\">2</text><circle cx=\"35\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"26\" y=\"180.0\" text-anchor=\"end\" font-size=\"13\">3</text><circle cx=\"90\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"99\" y=\"44.0\" text-anchor=\"start\" font-size=\"13\">a</text><circle cx=\"90\" cy=\"84.33333333333334\" r=\"3.5\" fill=\"currentColor\"/><text x=\"99\" y=\"89.33333333333334\" text-anchor=\"start\" font-size=\"13\">b</text><circle cx=\"90\" cy=\"129.66666666666669\" r=\"3.5\" fill=\"currentColor\" class=\"f-red\"/><text x=\"99\" y=\"134.66666666666669\" text-anchor=\"start\" font-size=\"13\" class=\"t-red\">c</text><circle cx=\"90\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"99\" y=\"180.0\" text-anchor=\"start\" font-size=\"13\">d</text><line x1=\"41.0\" y1=\"39.0\" x2=\"83.0\" y2=\"39.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M83.0,39.0 L75.9,42.6 L75.9,35.4 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"40.5\" y1=\"104.7\" x2=\"83.5\" y2=\"87.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M83.5,87.0 L78.3,93.1 L75.6,86.4 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"41.0\" y1=\"175.0\" x2=\"83.0\" y2=\"175.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M83.0,175.0 L75.9,178.6 L75.9,171.4 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"62.5\" y=\"212\" text-anchor=\"middle\" font-size=\"13\">1-1, not onto</text><text x=\"62.5\" y=\"230\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">c is never hit</text><ellipse cx=\"165\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><ellipse cx=\"220\" cy=\"107.0\" rx=\"24\" ry=\"83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><text x=\"165\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">A</text><text x=\"220\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">B</text><circle cx=\"165\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"156\" y=\"44.0\" text-anchor=\"end\" font-size=\"13\">1</text><circle cx=\"165\" cy=\"84.33333333333334\" r=\"3.5\" fill=\"currentColor\"/><text x=\"156\" y=\"89.33333333333334\" text-anchor=\"end\" font-size=\"13\">2</text><circle cx=\"165\" cy=\"129.66666666666669\" r=\"3.5\" fill=\"currentColor\"/><text x=\"156\" y=\"134.66666666666669\" text-anchor=\"end\" font-size=\"13\">3</text><circle cx=\"165\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"156\" y=\"180.0\" text-anchor=\"end\" font-size=\"13\">4</text><circle cx=\"220\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"229\" y=\"44.0\" text-anchor=\"start\" font-size=\"13\">a</text><circle cx=\"220\" cy=\"107.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"229\" y=\"112.0\" text-anchor=\"start\" font-size=\"13\">b</text><circle cx=\"220\" cy=\"175.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"229\" y=\"180.0\" text-anchor=\"start\" font-size=\"13\">c</text><line x1=\"171.0\" y1=\"39.0\" x2=\"213.0\" y2=\"39.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-red\"/><path d=\"M213.0,39.0 L205.9,42.6 L205.9,35.4 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"169.6\" y1=\"80.5\" x2=\"214.6\" y2=\"43.5\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-red\"/><path d=\"M214.6,43.5 L211.4,50.8 L206.8,45.2 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"170.5\" y1=\"127.4\" x2=\"213.5\" y2=\"109.7\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M213.5,109.7 L208.3,115.7 L205.6,109.0 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"171.0\" y1=\"175.0\" x2=\"213.0\" y2=\"175.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M213.0,175.0 L205.9,178.6 L205.9,171.4 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"192.5\" y=\"212\" text-anchor=\"middle\" font-size=\"13\">onto, not 1-1</text><text x=\"192.5\" y=\"230\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">1, 2 share a</text><ellipse cx=\"295\" cy=\"90.0\" rx=\"24\" ry=\"66.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><ellipse cx=\"350\" cy=\"90.0\" rx=\"24\" ry=\"66.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><text x=\"295\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">A</text><text x=\"350\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">B</text><circle cx=\"295\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"286\" y=\"44.0\" text-anchor=\"end\" font-size=\"13\">1</text><circle cx=\"295\" cy=\"90.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"286\" y=\"95.0\" text-anchor=\"end\" font-size=\"13\">2</text><circle cx=\"295\" cy=\"141.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"286\" y=\"146.0\" text-anchor=\"end\" font-size=\"13\">3</text><circle cx=\"350\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"359\" y=\"44.0\" text-anchor=\"start\" font-size=\"13\">a</text><circle cx=\"350\" cy=\"90.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"359\" y=\"95.0\" text-anchor=\"start\" font-size=\"13\">b</text><circle cx=\"350\" cy=\"141.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"359\" y=\"146.0\" text-anchor=\"start\" font-size=\"13\">c</text><line x1=\"299.4\" y1=\"43.1\" x2=\"344.9\" y2=\"85.2\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M344.9,85.2 L337.2,83.1 L342.1,77.7 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"299.4\" y1=\"94.1\" x2=\"344.9\" y2=\"136.2\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M344.9,136.2 L337.2,134.1 L342.1,128.7 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"297.8\" y1=\"135.7\" x2=\"346.7\" y2=\"45.2\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M346.7,45.2 L346.5,53.2 L340.1,49.7 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"322.5\" y=\"178\" text-anchor=\"middle\" font-size=\"13\">bijection</text><text x=\"322.5\" y=\"196\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">perfect pairing</text><ellipse cx=\"425\" cy=\"90.0\" rx=\"24\" ry=\"66.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><ellipse cx=\"480\" cy=\"90.0\" rx=\"24\" ry=\"66.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" class=\"s-gray\"/><text x=\"425\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">A</text><text x=\"480\" y=\"18\" text-anchor=\"middle\" font-size=\"14\" font-style=\"italic\">B</text><circle cx=\"425\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"416\" y=\"44.0\" text-anchor=\"end\" font-size=\"13\">1</text><circle cx=\"425\" cy=\"90.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"416\" y=\"95.0\" text-anchor=\"end\" font-size=\"13\">2</text><circle cx=\"425\" cy=\"141.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"416\" y=\"146.0\" text-anchor=\"end\" font-size=\"13\">3</text><circle cx=\"480\" cy=\"39.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"489\" y=\"44.0\" text-anchor=\"start\" font-size=\"13\">a</text><circle cx=\"480\" cy=\"90.0\" r=\"3.5\" fill=\"currentColor\"/><text x=\"489\" y=\"95.0\" text-anchor=\"start\" font-size=\"13\">b</text><circle cx=\"480\" cy=\"141.0\" r=\"3.5\" fill=\"currentColor\" class=\"f-red\"/><text x=\"489\" y=\"146.0\" text-anchor=\"start\" font-size=\"13\" class=\"t-red\">c</text><line x1=\"431.0\" y1=\"39.0\" x2=\"473.0\" y2=\"39.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-red\"/><path d=\"M473.0,39.0 L465.9,42.6 L465.9,35.4 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"429.4\" y1=\"85.9\" x2=\"474.9\" y2=\"43.8\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-red\"/><path d=\"M474.9,43.8 L472.1,51.3 L467.2,45.9 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"429.4\" y1=\"136.9\" x2=\"474.9\" y2=\"94.8\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M474.9,94.8 L472.1,102.3 L467.2,96.9 Z\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"452.5\" y=\"178\" text-anchor=\"middle\" font-size=\"13\">neither</text><text x=\"452.5\" y=\"196\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">collision + miss</text></svg>",
};
// </figures>

const floorSegments = [-3, -2, -1, 0, 1, 2].map((n) => ({ from: [n, n] as [number, number], to: [n + 1, n] as [number, number], color: 'blue' as const }));
const floorClosed = [-3, -2, -1, 0, 1, 2].map((n) => ({ x: n, y: n, color: 'blue' as const }));
const floorOpen = [-3, -2, -1, 0, 1, 2].map((n) => ({ x: n + 1, y: n, color: 'blue' as const, open: true }));

export const lesson: Lesson = {
  id: 'dm-functions',
  title: 'Functions, Bijections and Cardinality',
  summary: 'Functions as precise mappings, one-to-one and onto, floors and ceilings, and the surprising fact that some infinities are bigger than others.',
  minutes: 20,
  objectives: [
    'Define a function $f: A \\to B$ and distinguish its domain, codomain and range',
    'Prove or disprove that a function is one-to-one, onto or a bijection',
    'Compose functions, find inverses of bijections, and compute floors and ceilings (including C++ integer division)',
    'Use bijections to compare sizes of infinite sets, and show that $\\mathbb{Z}$ and $\\mathbb{Q}$ are countable',
    'Follow Cantor\'s diagonal argument that $\\mathbb{R}$ is uncountable, and explain why hash functions must have collisions',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Functions as mappings',
      blocks: [
        {
          type: 'p',
          text: 'In algebra a [[function]] was usually a formula like $f(x) = x^2$. Discrete math uses a more general and more precise idea: a function is a **rule of assignment**, and the formula is optional. What matters is that every input gets exactly one output.',
        },
        {
          type: 'definition',
          term: 'Function',
          text: 'A function $f: A \\to B$ assigns to **each** element $a \\in A$ **exactly one** element $f(a) \\in B$. $A$ is the [[domain]], $B$ is the [[codomain]] (where outputs are allowed to live), and the [[range]] (or **image**) is the set of outputs actually produced: $f(A) = \\{f(a) : a \\in A\\} \\subseteq B$.',
        },
        {
          type: 'figure',
          svg: FIG.fn_arrows,
          alt: 'Three arrow diagrams from A = {1, 2, 3} to B = {a, b, c, d}. The first is a function with 1 and 2 going to a and 3 to c. In the second, 2 has arrows to both b and d. In the third, 2 has no arrow.',
          caption: 'An arrow diagram is a function when **every** dot on the left sends out **exactly one** arrow. Two inputs may share an output (left), but one input may not have two outputs or none. Dots on the right may receive zero, one or many arrows.',
        },
        {
          type: 'p',
          text: 'Formally, a function is a set: the subset $\\{(a, f(a)) : a \\in A\\}$ of the [[dm-cartesian-product]] $A \\times B$, in which every $a \\in A$ appears as a first coordinate exactly once. This "graph" view is what you plotted in algebra — the vertical line test checks exactly this rule.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Signatures are domain and codomain',
          text: 'A C++ declaration `int damage(const Weapon& w)` announces a function with domain "all weapons" and codomain `int`. The range is the set of values it actually returns — maybe only $\\{0, 5, 10, \\dots, 100\\}$. A *pure* function (no hidden state) is a mathematical function: same input, same output, every time. A function that reads a random-number generator is not.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the codomain is part of the function',
          text: '$f(x) = x^2$ as a function $\\mathbb{R} \\to \\mathbb{R}$ and as a function $\\mathbb{R} \\to [0, \\infty)$ have the same formula and the same range, but they are **different functions**: the first misses every negative number in its codomain, the second misses nothing. That difference decides whether the function is onto — and whether it has an inverse — so the codomain must be specified.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Let $f: \\{-2, -1, 0, 1, 2\\} \\to \\mathbb{Z}$ with $f(x) = x^2$. How many elements are in the range of $f$?',
      hint: 'Compute all five outputs, then remember that a set lists each value once.',
      answer: '3',
      explanation: 'The outputs are $f(\\pm 2) = 4$, $f(\\pm 1) = 1$, $f(0) = 0$, so the range is $\\{0, 1, 4\\}$ with $3$ elements. The codomain $\\mathbb{Z}$ is infinite; the range is just the outputs that actually occur. Notice the range is smaller than the domain because pairs of inputs share an output.',
    },
    {
      kind: 'concept',
      title: 'One-to-one, onto and bijections',
      blocks: [
        {
          type: 'p',
          text: 'Two questions about any function: do different inputs always give different outputs? and is every element of the codomain hit? These give the three most important properties in the course.',
        },
        {
          type: 'definition',
          term: 'Injective, surjective, bijective',
          text: '$f: A \\to B$ is **one-to-one** ([[dm-injection|injective]]) if $f(a_1) = f(a_2)$ implies $a_1 = a_2$ — no two inputs collide. It is **onto** ([[dm-surjection|surjective]]) if for every $b \\in B$ there is some $a \\in A$ with $f(a) = b$ — the range is the whole codomain. It is a [[dm-bijection]] if it is both.',
        },
        {
          type: 'figure',
          svg: FIG.fn_types,
          alt: 'Four arrow diagrams: one-to-one but not onto (c never hit), onto but not one-to-one (1 and 2 both go to a), a bijection pairing each input with a distinct output, and a function that is neither.',
          caption: 'Red marks the failure: a collision (two arrows into one dot) breaks one-to-one; an unhit dot breaks onto. A bijection is a perfect pairing, so the two sides have the same number of elements.',
        },
        {
          type: 'heading',
          text: 'How to prove each property',
        },
        {
          type: 'steps',
          items: [
            { title: 'One-to-one', text: 'Assume $f(a_1) = f(a_2)$ and use algebra to derive $a_1 = a_2$. (The contrapositive form, $a_1 \\ne a_2 \\Rightarrow f(a_1) \\ne f(a_2)$, is equivalent.)' },
            { title: 'Onto', text: 'Take an arbitrary $b \\in B$, solve $f(a) = b$ for $a$, and **check that the $a$ you found is in the domain**.' },
            { title: 'Not one-to-one / not onto', text: 'Give one concrete counterexample: two inputs with the same output, or one element of $B$ that nothing maps to.' },
          ],
        },
        {
          type: 'derivation',
          title: '$f: \\mathbb{Z} \\to \\mathbb{Z}$, $f(n) = 3n + 5$',
          steps: [
            { tex: 'f(a_1) = f(a_2) \\implies 3a_1 + 5 = 3a_2 + 5', why: 'Start of the one-to-one proof: assume two outputs are equal.' },
            { tex: '\\implies 3a_1 = 3a_2 \\implies a_1 = a_2', why: 'Subtract $5$, divide by $3$. So $f$ is one-to-one.' },
            { tex: 'f(n) = 6 \\iff 3n + 5 = 6 \\iff n = \\tfrac{1}{3}', why: 'Test onto: try to hit $b = 6$. The only solution is not an integer.' },
            { tex: '\\tfrac{1}{3} \\notin \\mathbb{Z} \\implies 6 \\notin \\text{range}(f)', why: 'The domain is $\\mathbb{Z}$, so nothing maps to $6$: $f$ is **not** onto. (Its range is $\\{\\dots, -1, 2, 5, 8, \\dots\\}$.)' },
            { tex: '\\text{As } \\mathbb{R} \\to \\mathbb{R}: \\; f\\!\\left(\\tfrac{b - 5}{3}\\right) = b', why: 'With domain and codomain $\\mathbb{R}$, every $b$ has the preimage $\\frac{b-5}{3}$, which *is* in the domain. Same formula, now a bijection.' },
          ],
          result: 'Whether a function is onto depends on the domain and codomain, not just the formula.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'For a function between two **finite sets of the same size**, one-to-one and onto are equivalent: $n$ inputs with no collisions must hit all $n$ outputs. This shortcut fails for infinite sets, as the next question shows.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Classify $f: \\mathbb{N} \\to \\mathbb{N}$ given by $f(n) = n + 1$. (Recall $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$.)',
      options: [
        { text: 'One-to-one but not onto', correct: true, why: '$n_1 + 1 = n_2 + 1$ forces $n_1 = n_2$, but $0$ is never an output: $n + 1 = 0$ would need $n = -1 \\notin \\mathbb{N}$.' },
        { text: 'A bijection', why: 'It would be one on $\\mathbb{Z} \\to \\mathbb{Z}$, but in $\\mathbb{N}$ the output $0$ is never reached.' },
        { text: 'Onto but not one-to-one', why: 'There are no collisions: different inputs give different outputs. And it misses $0$, so it is not onto.' },
        { text: 'Neither', why: 'It is one-to-one: subtracting $1$ from both sides of $n_1 + 1 = n_2 + 1$ gives $n_1 = n_2$.' },
      ],
      explanation: 'Shifting by one never causes a collision, so $f$ is injective. But the codomain contains $0$, and no natural number maps to it. This is a one-to-one map from an infinite set into **itself** that is not onto — impossible for finite sets, and the key to "Hilbert\'s hotel" later in this lesson.',
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: $g: \\mathbb{Z} \\to \\mathbb{Z}$ with $g(n) = 2n$ is onto.',
      answer: false,
      explanation: 'Onto would require every integer to be an output. But $2n$ is always even, so $g(n) = 3$ has no integer solution ($n = 1.5$). $g$ is one-to-one (since $2n_1 = 2n_2 \\Rightarrow n_1 = n_2$) but not onto. As a function from $\\mathbb{Z}$ to the set of **even** integers it would be a bijection.',
    },
    {
      kind: 'concept',
      title: 'Composition and inverses',
      blocks: [
        {
          type: 'p',
          text: 'Functions chain together. If $f: A \\to B$ and $g: B \\to C$, the [[composition]] $g \\circ f: A \\to C$ is defined by $(g \\circ f)(a) = g(f(a))$: apply $f$ first, then $g$. Read $\\circ$ right to left, like nested function calls `g(f(a))`.',
        },
        {
          type: 'derivation',
          title: 'Compose $f(x) = 2x + 3$ and $g(x) = x^2$ on $\\mathbb{R}$',
          steps: [
            { tex: '(g \\circ f)(x) = g(2x + 3) = (2x + 3)^2', why: 'Feed the output of $f$ into $g$.' },
            { tex: '(f \\circ g)(x) = f(x^2) = 2x^2 + 3', why: 'The other order: square first, then double and add 3.' },
            { tex: '(g \\circ f)(1) = 25 \\ne 5 = (f \\circ g)(1)', why: 'One input is enough to show the two compositions are different functions. Composition is **not** commutative.' },
          ],
          result: 'Order matters: "move then rotate" is not "rotate then move", as every game programmer learns.',
        },
        {
          type: 'definition',
          term: 'Inverse function',
          text: 'If $f: A \\to B$ is a bijection, its [[inverse-function]] $f^{-1}: B \\to A$ sends each $b$ to the unique $a$ with $f(a) = b$. Then $f^{-1} \\circ f$ is the identity on $A$ and $f \\circ f^{-1}$ is the identity on $B$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only bijections have inverses',
          text: 'To reverse $f$, every $b \\in B$ needs exactly one arrow to follow back. If $f$ is not onto, some $b$ has no arrow, so $f^{-1}(b)$ is undefined. If $f$ is not one-to-one, some $b$ has two arrows, so $f^{-1}(b)$ would need two values. "Exactly one preimage for every $b$" is precisely the definition of a bijection.',
        },
        {
          type: 'theorem',
          name: 'Composition preserves the properties',
          text: 'If $f$ and $g$ are both one-to-one, so is $g \\circ f$; if both are onto, so is $g \\circ f$; if both are bijections, so is $g \\circ f$, and $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.',
        },
        {
          type: 'p',
          text: 'Proof of the first claim: if $g(f(a_1)) = g(f(a_2))$, then $f(a_1) = f(a_2)$ because $g$ is one-to-one, and then $a_1 = a_2$ because $f$ is. The inverse reverses the order for the same reason you take off your shoes before your socks: undo the last step first.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Composition in a game engine',
          text: 'A model\'s world transform is a composition: `world = parent ∘ local`. To go from world space back to local space you apply the inverses in reverse order: `local⁻¹ ∘ parent⁻¹`. Encoding and decoding (save files, network packets, compression) are a bijection and its inverse; a round-trip test checks that `decode(encode(x)) == x`.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Let $f(x) = 3x - 1$ and $g(x) = x^2 + 2$. Find $(g \\circ f)(x)$.',
      label: '$(g \\circ f)(x) =$',
      answer: '(3x - 1)^2 + 2',
      answerTex: '(3x - 1)^2 + 2 = 9x^2 - 6x + 3',
      hint: 'Apply $f$ first: replace the $x$ in $g$ by $3x - 1$.',
      explanation: '$(g \\circ f)(x) = g(f(x)) = g(3x - 1) = (3x - 1)^2 + 2 = 9x^2 - 6x + 3$. The common mistake is composing in the wrong order: $(f \\circ g)(x) = 3(x^2 + 2) - 1 = 3x^2 + 5$, a different function.',
    },
    {
      kind: 'concept',
      title: 'Floor and ceiling',
      blocks: [
        {
          type: 'p',
          text: 'Two functions from $\\mathbb{R}$ to $\\mathbb{Z}$ appear everywhere in discrete math and in code: rounding down and rounding up. They are how we count things that come in whole units — pages, tiles, packets, levels of a binary tree.',
        },
        {
          type: 'definition',
          term: 'Floor and ceiling',
          text: 'The [[dm-floor-ceiling|floor]] $\\lfloor x \\rfloor$ is the largest integer $\\le x$; the **ceiling** $\\lceil x \\rceil$ is the smallest integer $\\ge x$. Equivalently, $\\lfloor x \\rfloor = n \\iff n \\le x < n + 1$ and $\\lceil x \\rceil = n \\iff n - 1 < x \\le n$.',
        },
        {
          type: 'graph',
          x: [-3.5, 3.5],
          y: [-3.5, 3.5],
          equal: true,
          segments: floorSegments,
          points: [
            ...floorClosed,
            ...floorOpen,
            { x: 'a', y: 'floor(a)', color: 'green', label: '⌊a⌋' },
            { x: 'a', y: 'ceil(a)', color: 'red', label: '⌈a⌉' },
          ],
          vlines: [{ x: 'a', color: 'gray' }],
          sliders: [{ name: 'a', min: -3, max: 2.95, step: 0.05, value: -1.4, label: '$a$' }],
          readouts: [
            { label: '$\\lfloor a \\rfloor =$', expr: 'floor(a)', digits: 0 },
            { label: '$\\lceil a \\rceil =$', expr: 'ceil(a)', digits: 0 },
          ],
          caption: 'The blue staircase is $y = \\lfloor x \\rfloor$: each step includes its left end (filled dot) but not its right end (open dot). Slide $a$ to a negative non-integer: the floor is the integer to the **left** on the number line, e.g. $\\lfloor -1.4 \\rfloor = -2$.',
        },
        {
          type: 'list',
          items: [
            '$\\lfloor 3.7 \\rfloor = 3$, $\\lceil 3.7 \\rceil = 4$, $\\lfloor 5 \\rfloor = \\lceil 5 \\rceil = 5$.',
            '$\\lfloor -3.5 \\rfloor = -4$ and $\\lceil -3.5 \\rceil = -3$ — "down" means toward $-\\infty$, not toward zero.',
            '$\\lfloor x + n \\rfloor = \\lfloor x \\rfloor + n$ for every integer $n$, and $\\lceil x \\rceil = -\\lfloor -x \\rfloor$.',
            'Every integer $n$ splits as $n = 2\\lfloor n/2 \\rfloor + (n \\bmod 2)$, the start of the division algorithm in the Number Theory unit.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'C++ integer division truncates toward zero',
          text: 'For positive operands, `a / b` is $\\lfloor a/b \\rfloor$. For negative ones it is not: `-7 / 2` is `-3`, while $\\lfloor -3.5 \\rfloor = -4$. This bites when mapping world coordinates to grid cells: a player at $x = -3.5$ with cell size $1$ belongs in cell $-4$, but `(int)(-3.5)` gives $-3$, so two columns of the world both map to cell $0$. Use `std::floor` for doubles or a floor-division helper for integers.',
        },
        {
          type: 'code',
          title: 'floordiv.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Mathematical floor of a / b for b > 0 (C++ '/' truncates toward zero).
int floorDiv(int a, int b) {
    int q = a / b;
    if (a % b != 0 && a < 0) --q;   // truncation rounded up; step down
    return q;
}

// Ceiling of a / b for a >= 0, b > 0: how many groups of b cover a?
int ceilDiv(int a, int b) { return (a + b - 1) / b; }

int main() {
    std::printf("7 / 2        = %d\\n", 7 / 2);
    std::printf("-7 / 2       = %d   (truncates toward zero)\\n", -7 / 2);
    std::printf("floorDiv(-7,2) = %d   (true floor of -3.5)\\n", floorDiv(-7, 2));
    std::printf("std::floor(-3.5) = %g, std::ceil(-3.5) = %g\\n", std::floor(-3.5), std::ceil(-3.5));
    std::printf("tiles to cover 1000 px with 64 px tiles: %d\\n", ceilDiv(1000, 64));
}`,
          output: `7 / 2        = 3
-7 / 2       = -3   (truncates toward zero)
floorDiv(-7,2) = -4   (true floor of -3.5)
std::floor(-3.5) = -4, std::ceil(-3.5) = -3
tiles to cover 1000 px with 64 px tiles: 16`,
          annotations: [
            { lines: '5-9', text: 'Fix truncation: when the division is inexact and the dividend is negative, truncation went up, so subtract one.' },
            { lines: 12, text: '$\\lceil a/b \\rceil = \\lfloor (a + b - 1)/b \\rfloor$ for $a \\ge 0$, $b > 0$ — the standard "round up" trick with integers only. $\\lceil 1000/64 \\rceil = \\lceil 15.625 \\rceil = 16$.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A level is $1000$ pixels wide and the tiles are $16$ pixels wide. How many tiles are needed to cover the whole width (the last tile may hang over the edge)?',
      hint: 'You need $\\lceil 1000/16 \\rceil$ tiles.',
      answer: '63',
      explanation: '$1000/16 = 62.5$. Sixty-two tiles cover only $992$ pixels, so a 63rd is needed: $\\lceil 62.5 \\rceil = 63$. In integer C++ this is `(1000 + 16 - 1) / 16 = 1015 / 16 = 63`. Using plain `1000 / 16 = 62` would leave an $8$-pixel gap — a classic off-by-one bug.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the statements about rounding $-17/5 = -3.4$.',
      template: 'In C++, `-17 / 5` evaluates to ___, while $\\lfloor -17/5 \\rfloor =$ ___ and $\\lceil -17/5 \\rceil =$ ___.',
      blanks: [{ answers: ['$-3$'] }, { answers: ['$-4$'] }, { answers: ['$-3$'] }],
      wordBank: ['$-3$', '$-4$', '$-3$', '$3$', '$4$', '$-2$'],
      explanation: '$-17/5 = -3.4$. C++ truncates toward zero, giving $-3$. The floor goes toward $-\\infty$: the largest integer $\\le -3.4$ is $-4$. The ceiling is the smallest integer $\\ge -3.4$, which is $-3$. So for negative non-integers, truncation agrees with the **ceiling**, not the floor.',
    },
    {
      kind: 'concept',
      title: 'Comparing sizes with bijections',
      blocks: [
        {
          type: 'p',
          text: 'How do you know two finite sets have the same size without counting? Pair them up. If a bijection exists, the sets are the same size. Georg Cantor\'s brilliant move was to make this the **definition** of "same size" — which then works for infinite sets too, where counting is impossible.',
        },
        {
          type: 'definition',
          term: 'Cardinality',
          text: 'Sets $A$ and $B$ have the same [[dm-cardinality]], $|A| = |B|$, if there is a bijection $A \\to B$. We write $|A| \\le |B|$ if there is a one-to-one function $A \\to B$. A set is [[dm-countable-set|countable]] if it is finite or has the same cardinality as $\\mathbb{N}$ (**countably infinite**); otherwise it is **uncountable**.',
        },
        {
          type: 'p',
          text: 'Countably infinite means the elements can be listed in a sequence $a_0, a_1, a_2, \\dots$ in which every element eventually appears — the bijection is "position in the list". With infinite sets, intuition breaks: a set can have the same size as a proper subset of itself.',
        },
        {
          type: 'derivation',
          title: 'The even naturals are as numerous as all naturals',
          steps: [
            { tex: 'f: \\mathbb{N} \\to E = \\{0, 2, 4, \\dots\\}, \\quad f(n) = 2n', why: 'Candidate pairing: $0 \\leftrightarrow 0$, $1 \\leftrightarrow 2$, $2 \\leftrightarrow 4$, …' },
            { tex: '2n_1 = 2n_2 \\implies n_1 = n_2', why: 'One-to-one.' },
            { tex: 'm \\in E \\implies m = 2k,\\; k \\in \\mathbb{N},\\; f(k) = m', why: 'Onto: every even natural is twice some natural.' },
            { tex: '|\\mathbb{N}| = |E|', why: 'A bijection exists, so by definition the cardinalities agree, even though $E \\subsetneq \\mathbb{N}$.' },
          ],
          result: 'This is Hilbert\'s hotel: a full hotel with infinitely many rooms can still take infinitely many new guests — move each guest from room $n$ to room $2n$, freeing every odd room.',
        },
        {
          type: 'p',
          text: 'The integers are countable too, even though they stretch infinitely in both directions. List them by zig-zagging out from $0$:',
        },
        {
          type: 'figure',
          svg: FIG.fn_nz,
          alt: 'The natural numbers 0 through 8 in a row with arrows down to the integers 0, 1, −1, 2, −2, 3, −3, 4, −4.',
          caption: 'Odd $n$ go to positives, even $n$ to zero and negatives: $f(n) = \\frac{n+1}{2}$ for odd $n$ and $f(n) = -\\frac{n}{2}$ for even $n$. Every integer appears exactly once, so $|\\mathbb{Z}| = |\\mathbb{N}|$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'ZigZag encoding',
          text: 'Protocol Buffers uses exactly this bijection, called **ZigZag encoding**, to store signed integers compactly: $0, -1, 1, -2, 2, \\dots$ map to $0, 1, 2, 3, 4, \\dots$, so small negative numbers become small unsigned numbers that fit in one byte. (Its order differs from ours — negatives on odd positions — but it is the same idea.)',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Using the listing of $\\mathbb{Z}$ above ($f(n) = \\frac{n+1}{2}$ for odd $n$, $f(n) = -\\frac{n}{2}$ for even $n$), which natural number $n$ is paired with the integer $-7$?',
      hint: 'Negative integers come from even $n$. Solve $-\\frac{n}{2} = -7$.',
      label: '$n =$',
      answer: '14',
      explanation: 'Negative outputs come from the even branch, so solve $-n/2 = -7$: $n = 14$. Check against the pattern $f(12) = -6$, $f(13) = 7$, $f(14) = -7$. Because the inverse is a simple formula too ($m > 0 \\mapsto 2m - 1$, $m \\le 0 \\mapsto -2m$), we know the pairing is a bijection.',
    },
    {
      kind: 'concept',
      title: 'The rationals are countable',
      blocks: [
        {
          type: 'p',
          text: 'The rationals seem far bigger than $\\mathbb{N}$: between any two of them sit infinitely many more. Yet they are countable. The trick is to list them in an order that is **not** their size order.',
        },
        {
          type: 'figure',
          svg: FIG.fn_rationals,
          alt: 'A grid of fractions p/q with numerators down the rows and denominators across the columns. An orange path snakes along the anti-diagonals, and the fractions in lowest terms are numbered 0, 1, 2, … in the order the path reaches them; duplicates like 2/2 are greyed out.',
          caption: 'Every positive rational $p/q$ sits somewhere in the grid. Walking the diagonals $p + q = 2, 3, 4, \\dots$ (each finite!) reaches every cell after finitely many steps. Skipping duplicates such as $2/4 = 1/2$ gives a list with each positive rational exactly once.',
        },
        {
          type: 'p',
          text: 'Why not walk along the first row, $1/1, 1/2, 1/3, \\dots$? Because that row never ends, and you would never reach $2/1$. The diagonal walk works because each diagonal is finite, so every fraction has a definite, finite position. Interleaving the negatives and $0$ the way we did for $\\mathbb{Z}$ then lists all of $\\mathbb{Q}$.',
        },
        {
          type: 'theorem',
          name: 'Countable sets',
          text: '$\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$, $\\mathbb{N} \\times \\mathbb{N}$, the set of all finite strings over a finite alphabet, and any countable union of countable sets are all countable. Any subset of a countable set is countable.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'The set of all C++ programs is countable: each program is a finite string, and you can list all strings of length $1$, then length $2$, and so on. Remember this — it is about to matter.',
        },
      ],
    },
    {
      kind: 'concept',
      title: "Cantor's diagonal argument: the reals are uncountable",
      blocks: [
        {
          type: 'p',
          text: 'Is every infinite set countable? Cantor proved in 1891 that the answer is no, with one of the most famous proofs in mathematics. We show that even the interval $(0, 1)$ cannot be listed. The strategy is [[dm-proof-by-contradiction]]: assume a complete list exists, then build a number the list must have missed.',
        },
        {
          type: 'figure',
          svg: FIG.fn_diagonal,
          alt: 'A table listing f(1) through f(6) as decimals. The diagonal digits 5, 1, 4, 0, 5, 3 are highlighted in red. Below, a new number 0.455545… is built by changing each diagonal digit.',
          caption: 'Change the $n$th digit of the $n$th number. The new $x = 0.455545\\ldots$ differs from $f(1)$ in digit 1, from $f(2)$ in digit 2, and so on — so it differs from **every** number in the list.',
        },
        {
          type: 'derivation',
          title: 'Proof that $(0, 1)$ is uncountable',
          steps: [
            { tex: '\\text{Assume } f: \\mathbb{N}^{+} \\to (0, 1) \\text{ is onto.}', why: 'For contradiction, suppose the reals in $(0, 1)$ can be listed $f(1), f(2), f(3), \\dots$ with nothing missing.' },
            { tex: 'f(n) = 0.d_{n1}\\,d_{n2}\\,d_{n3}\\ldots', why: 'Write each listed number as a decimal; $d_{nk}$ is the $k$th digit of the $n$th number.' },
            { tex: 'x = 0.x_1 x_2 x_3 \\ldots, \\quad x_n = \\begin{cases} 4 & d_{nn} = 5 \\\\ 5 & d_{nn} \\ne 5 \\end{cases}', why: 'Build $x$ digit by digit from the diagonal, always choosing a digit different from $d_{nn}$. Using only $4$s and $5$s avoids the $0.4999\\ldots = 0.5$ ambiguity, so different digits really mean different numbers.' },
            { tex: 'x \\ne f(n) \\text{ for every } n', why: '$x$ and $f(n)$ differ in the $n$th decimal place.' },
            { tex: 'x \\in (0, 1) \\text{ but } x \\notin \\text{range}(f)', why: '$x$ is between $0.444\\ldots$ and $0.555\\ldots$, so it is in the interval — yet it is not in the list.' },
            { tex: '\\Rightarrow\\Leftarrow', why: 'This contradicts the assumption that $f$ was onto. So no such list exists: $(0, 1)$, and therefore $\\mathbb{R}$, is uncountable.' },
          ],
          result: '$|\\mathbb{N}| < |\\mathbb{R}|$: there are different sizes of infinity.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this matters to a programmer',
          text: 'Programs are countable, but the set of functions $\\mathbb{N} \\to \\{0, 1\\}$ is uncountable (the same diagonal trick works on infinite bit strings). So **almost every** such function cannot be computed by any program at all. The Computability lesson at the end of the course makes this concrete with the [[dm-halting-problem]] — whose proof is a diagonal argument in disguise.',
        },
        {
          type: 'deepdive',
          title: "Cantor's theorem: $|A| < |\\mathcal{P}(A)|$ for every set",
          blocks: [
            {
              type: 'p',
              text: 'For any set $A$ and any function $g: A \\to \\mathcal{P}(A)$, let $D = \\{a \\in A : a \\notin g(a)\\}$. If $D = g(d)$ for some $d$, then $d \\in D \\iff d \\notin g(d) = D$, a contradiction. So $D$ is never an output and $g$ is never onto. Since $a \\mapsto \\{a\\}$ is one-to-one, $|A| < |\\mathcal{P}(A)|$ strictly — and the infinities never stop: $|\\mathbb{N}| < |\\mathcal{P}(\\mathbb{N})| < |\\mathcal{P}(\\mathcal{P}(\\mathbb{N}))| < \\cdots$.',
            },
          ],
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of the diagonal argument in order.',
      lines: [
        'Suppose, for contradiction, that the numbers in $(0, 1)$ can be listed as $f(1), f(2), f(3), \\dots$',
        'Write each $f(n)$ as a decimal $0.d_{n1}d_{n2}d_{n3}\\ldots$',
        'Define $x = 0.x_1x_2x_3\\ldots$ with $x_n = 4$ if $d_{nn} = 5$ and $x_n = 5$ otherwise.',
        'Then $x \\in (0, 1)$ but $x$ differs from each $f(n)$ in the $n$th digit, so $x$ is not in the list.',
        'This contradicts the assumption that the list contains every number in $(0, 1)$.',
      ],
      distractors: ['Sort the list $f(1) < f(2) < f(3) < \\cdots$ by size.'],
      explanation: 'Contradiction proofs begin with the assumption to be refuted, then build the object (the diagonal number) and show it breaks the assumption. Sorting is a trap: nothing in the proof needs the list to be in order, and $(0, 1)$ has no smallest element, so a sorted list could not even start.',
    },
    {
      kind: 'error',
      prompt: 'A student "proves" that $f: \\mathbb{Z} \\to \\mathbb{Z}$, $f(n) = n^2$ is one-to-one. Tap the first wrong line.',
      lines: [
        'Suppose $f(a) = f(b)$ for integers $a, b$.',
        'Then $a^2 = b^2$.',
        'Taking square roots of both sides, $a = b$.',
        'Therefore $f$ is one-to-one.',
      ],
      errorLines: [3],
      explanation: 'From $a^2 = b^2$ you can only conclude $|a| = |b|$, i.e. $a = b$ **or** $a = -b$. The counterexample $f(2) = f(-2) = 4$ shows $f$ is not one-to-one on $\\mathbb{Z}$. (On $\\mathbb{N}$, where $-b$ is not available, the same function *is* one-to-one — the domain matters again.)',
    },
    {
      kind: 'concept',
      title: 'Hash functions: functions that must collide',
      blocks: [
        {
          type: 'p',
          text: 'A [[dm-hash-function]] maps keys from a huge domain (all strings, all 64-bit IDs) into a small codomain — the bucket indices $\\{0, 1, \\dots, m - 1\\}$ of a hash table, or the 256-bit outputs of a cryptographic hash. `std::unordered_map` calls one every time you insert or look up a key.',
        },
        {
          type: 'p',
          text: 'Cardinality tells you at once what is impossible. If the domain has more elements than the codomain, no function between them is one-to-one: some two keys must share an output, a **collision**. This is the [[dm-pigeonhole-principle]], formalised in the Counting unit. A good hash function cannot avoid collisions; it can only make them rare and evenly spread.',
        },
        {
          type: 'code',
          title: 'hash.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <string>

// h(s) = (s[0]*31^(n-1) + ... + s[n-1]) mod 2^32, then reduced to a bucket.
std::uint32_t hashString(const std::string& s) {
    std::uint32_t h = 0;
    for (unsigned char c : s) h = h * 31 + c;   // unsigned overflow wraps mod 2^32
    return h;
}

int main() {
    const int buckets = 8;
    const char* names[] = {"orc", "elf", "troll", "dwarf", "goblin"};
    for (const char* name : names) {
        std::uint32_t h = hashString(name);
        std::printf("%-7s hash = %10u  bucket = %u\\n", name, h, h % buckets);
    }
}`,
          output: `orc     hash =     110304  bucket = 0
elf     hash =     100511  bucket = 7
troll   hash =  110634737  bucket = 1
dwarf   hash =   95994082  bucket = 2
goblin  hash = 3054340055  bucket = 7`,
          annotations: [
            { lines: 8, text: 'The classic polynomial string hash (Java uses the same multiplier, 31). Unsigned arithmetic wraps modulo $2^{32}$, which is well defined in C++.' },
            { lines: 17, text: 'Reducing to $8$ buckets is another function, $\\{0, \\dots, 2^{32} - 1\\} \\to \\{0, \\dots, 7\\}$ — wildly non-injective.' },
          ],
        },
        {
          type: 'p',
          text: 'Five keys, eight buckets, and already `"elf"` and `"goblin"` collide in bucket $7$. That is not bad luck: the Cryptography lesson\'s **birthday problem** shows that collisions become likely once the number of keys is around $\\sqrt{m}$, far sooner than intuition suggests. Hash tables handle collisions with chaining or probing; the Number Theory unit explains why table sizes are often chosen prime.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A hash function maps every string of $1$ to $10$ lowercase letters to a 32-bit unsigned integer. Which statement is **guaranteed**, no matter how cleverly the function is designed?',
      options: [
        { text: 'At least two different strings have the same hash', correct: true, why: 'There are more than $26^{10} \\approx 1.4 \\times 10^{14}$ such strings but only $2^{32} \\approx 4.3 \\times 10^9$ outputs, so the function cannot be one-to-one.' },
        { text: 'A well-designed hash has no collisions', why: 'Impossible here: the domain is bigger than the codomain, so collisions are forced. Good design only spreads them out.' },
        { text: 'Every 32-bit integer is the hash of some string', why: 'That would be onto, which is *possible* but not guaranteed — a badly designed hash could miss most of the outputs.' },
        { text: 'The hash function is a bijection', why: 'A bijection needs equal cardinalities; here the domain is more than $30\\,000$ times larger than the codomain.' },
      ],
      explanation: 'Compare cardinalities: $|\\text{domain}| = 26 + 26^2 + \\cdots + 26^{10} > 26^{10} \\approx 1.4 \\times 10^{14}$ and $|\\text{codomain}| = 2^{32} \\approx 4.3 \\times 10^9$. A one-to-one function $A \\to B$ requires $|A| \\le |B|$, so collisions are unavoidable. Whether the function is onto depends on its design, so it is not guaranteed.',
    },
  ],
  takeaways: [
    'A function $f: A \\to B$ gives each element of the domain exactly one output in the codomain; the range is the set of outputs actually produced.',
    'One-to-one: $f(a_1) = f(a_2) \\Rightarrow a_1 = a_2$. Onto: every $b$ has a preimage in the domain. A bijection is both — and exactly the bijections have inverses.',
    'Composition $g \\circ f$ applies $f$ first; it is not commutative, and $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.',
    '$\\lfloor x \\rfloor$ rounds toward $-\\infty$ and $\\lceil x \\rceil$ toward $+\\infty$; C++ `/` truncates toward zero, which differs for negatives. $\\lceil a/b \\rceil$ = `(a + b - 1) / b` for $a \\ge 0, b > 0$.',
    '$|A| = |B|$ means a bijection exists. $\\mathbb{N}$, $\\mathbb{Z}$ and $\\mathbb{Q}$ are countable (listable); $\\mathbb{R}$ is uncountable by Cantor\'s diagonal argument.',
    'A hash function from a larger domain to a smaller codomain cannot be one-to-one, so collisions are guaranteed.',
  ],
  reading: [
    {
      title: 'Levin, Discrete Mathematics: An Open Introduction — Functions',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Section 0.4 treats functions, injections, surjections and bijections with arrow diagrams and many worked examples.',
    },
    {
      title: "Wikipedia — Cantor's diagonal argument",
      url: 'https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument',
      source: 'wikipedia',
      note: 'The original argument on infinite binary sequences, its history and its many descendants in logic and computer science.',
    },
    {
      title: 'MIT 6.042J Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The notes on infinite sets develop countability and Cantor\'s theorem rigorously, with exercises.',
    },
  ],
};
