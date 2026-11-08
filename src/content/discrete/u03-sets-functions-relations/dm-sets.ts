import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  sets_bits: "<svg viewBox=\"0 0 520 224\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"420.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">bit 0</text><text x=\"380.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">bit 1</text><text x=\"340.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">bit 2</text><text x=\"300.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">bit 3</text><text x=\"260.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">bit 4</text><text x=\"220.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">bit 5</text><text x=\"180.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">bit 6</text><text x=\"140.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">bit 7</text><text x=\"108\" y=\"49.0\" text-anchor=\"end\" font-size=\"14\" font-family=\"monospace\">A</text><rect x=\"402\" y=\"30\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"420.0\" y=\"49.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"362\" y=\"30\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"380.0\" y=\"49.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"322\" y=\"30\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"340.0\" y=\"49.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"282\" y=\"30\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"300.0\" y=\"49.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"242\" y=\"30\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"260.0\" y=\"49.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"202\" y=\"30\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"220.0\" y=\"49.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"162\" y=\"30\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"180.0\" y=\"49.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"122\" y=\"30\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"140.0\" y=\"49.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><text x=\"450\" y=\"49.0\" font-size=\"13\">{1, 2, 5, 7}</text><text x=\"108\" y=\"87.0\" text-anchor=\"end\" font-size=\"14\" font-family=\"monospace\">B</text><rect x=\"402\" y=\"68\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"420.0\" y=\"87.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"362\" y=\"68\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"380.0\" y=\"87.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"322\" y=\"68\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"340.0\" y=\"87.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"282\" y=\"68\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"300.0\" y=\"87.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"242\" y=\"68\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"260.0\" y=\"87.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"202\" y=\"68\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"220.0\" y=\"87.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"162\" y=\"68\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"180.0\" y=\"87.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"122\" y=\"68\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"140.0\" y=\"87.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><text x=\"450\" y=\"87.0\" font-size=\"13\">{2, 3, 5}</text><text x=\"108\" y=\"125.0\" text-anchor=\"end\" font-size=\"14\" font-family=\"monospace\">A | B</text><rect x=\"402\" y=\"106\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"420.0\" y=\"125.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"362\" y=\"106\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"380.0\" y=\"125.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"322\" y=\"106\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"340.0\" y=\"125.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"282\" y=\"106\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"300.0\" y=\"125.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"242\" y=\"106\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"260.0\" y=\"125.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"202\" y=\"106\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"220.0\" y=\"125.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"162\" y=\"106\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"180.0\" y=\"125.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"122\" y=\"106\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"140.0\" y=\"125.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><text x=\"450\" y=\"125.0\" font-size=\"13\">{1, 2, 3, 5, 7}</text><text x=\"108\" y=\"163.0\" text-anchor=\"end\" font-size=\"14\" font-family=\"monospace\">A & B</text><rect x=\"402\" y=\"144\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"420.0\" y=\"163.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"362\" y=\"144\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"380.0\" y=\"163.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"322\" y=\"144\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"340.0\" y=\"163.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"282\" y=\"144\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"300.0\" y=\"163.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"242\" y=\"144\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"260.0\" y=\"163.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"202\" y=\"144\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"220.0\" y=\"163.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"162\" y=\"144\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"180.0\" y=\"163.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"122\" y=\"144\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"140.0\" y=\"163.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><text x=\"450\" y=\"163.0\" font-size=\"13\">{2, 5}</text><text x=\"108\" y=\"201.0\" text-anchor=\"end\" font-size=\"14\" font-family=\"monospace\">A & ~B</text><rect x=\"402\" y=\"182\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"420.0\" y=\"201.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"362\" y=\"182\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"380.0\" y=\"201.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><rect x=\"322\" y=\"182\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"340.0\" y=\"201.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"282\" y=\"182\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"300.0\" y=\"201.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"242\" y=\"182\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"260.0\" y=\"201.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"202\" y=\"182\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"220.0\" y=\"201.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"162\" y=\"182\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.06\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"180.0\" y=\"201.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">0</text><rect x=\"122\" y=\"182\" width=\"36\" height=\"28\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"140.0\" y=\"201.0\" text-anchor=\"middle\" font-size=\"14\" font-family=\"monospace\">1</text><text x=\"450\" y=\"201.0\" font-size=\"13\">{1, 7}</text></svg>",
  sets_cartesian: "<svg viewBox=\"0 0 520 220\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"150\" y=\"190\" text-anchor=\"middle\" font-size=\"15\">1</text><text x=\"240\" y=\"190\" text-anchor=\"middle\" font-size=\"15\">2</text><text x=\"330\" y=\"190\" text-anchor=\"middle\" font-size=\"15\">3</text><text x=\"100\" y=\"135\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">x</text><line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"170\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\" stroke-dasharray=\"3 4\"/><circle cx=\"150\" cy=\"130\" r=\"5\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"160\" y=\"121\" font-size=\"13\" class=\"t-blue\">(1, x)</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"170\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\" stroke-dasharray=\"3 4\"/><circle cx=\"240\" cy=\"130\" r=\"5\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"250\" y=\"121\" font-size=\"13\" class=\"t-blue\">(2, x)</text><line x1=\"330\" y1=\"40\" x2=\"330\" y2=\"170\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\" stroke-dasharray=\"3 4\"/><circle cx=\"330\" cy=\"130\" r=\"5\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"340\" y=\"121\" font-size=\"13\" class=\"t-blue\">(3, x)</text><text x=\"100\" y=\"65\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">y</text><circle cx=\"150\" cy=\"60\" r=\"5\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"160\" y=\"51\" font-size=\"13\" class=\"t-blue\">(1, y)</text><circle cx=\"240\" cy=\"60\" r=\"5\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"250\" y=\"51\" font-size=\"13\" class=\"t-blue\">(2, y)</text><circle cx=\"330\" cy=\"60\" r=\"5\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"340\" y=\"51\" font-size=\"13\" class=\"t-blue\">(3, y)</text><text x=\"240\" y=\"214\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">A = {1, 2, 3}  (first coordinate)</text><text x=\"100\" y=\"32\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">B = {x, y}</text><text x=\"440\" y=\"100\" text-anchor=\"middle\" font-size=\"14\">|A × B| = 3 · 2 = 6</text></svg>",
  sets_demorgan: "<svg viewBox=\"0 0 520 140\" xmlns=\"http://www.w3.org/2000/svg\"><defs><clipPath id=\"dmsdm0c0\"><circle cx=\"65.2\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsdm0m0\"><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"65.2\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask><clipPath id=\"dmsdm0c1\"><circle cx=\"104.8\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsdm0m1\"><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"104.8\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask></defs><g mask=\"url(#dmsdm0m1)\"><g mask=\"url(#dmsdm0m0)\"><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><g clip-path=\"url(#dmsdm0c1)\"><g mask=\"url(#dmsdm0m0)\"><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"16\" y=\"24\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"65.2\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"49.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"104.8\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"121.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><text x=\"85.0\" y=\"128\" text-anchor=\"middle\" font-size=\"14\">Ā</text><defs><clipPath id=\"dmsdm1c0\"><circle cx=\"240.2\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsdm1m0\"><rect x=\"185\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"240.2\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask><clipPath id=\"dmsdm1c1\"><circle cx=\"279.8\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsdm1m1\"><rect x=\"185\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"279.8\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask></defs><g mask=\"url(#dmsdm1m1)\"><g mask=\"url(#dmsdm1m0)\"><rect x=\"185\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.45\"/></g></g><g clip-path=\"url(#dmsdm1c0)\"><g mask=\"url(#dmsdm1m1)\"><rect x=\"185\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.45\"/></g></g><rect x=\"185\" y=\"8\" width=\"150\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"191\" y=\"24\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"240.2\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"224.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"279.8\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"296.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><text x=\"260.0\" y=\"128\" text-anchor=\"middle\" font-size=\"14\">B̄</text><defs><clipPath id=\"dmsdm2c0\"><circle cx=\"415.2\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsdm2m0\"><rect x=\"360\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"415.2\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask><clipPath id=\"dmsdm2c1\"><circle cx=\"454.8\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsdm2m1\"><rect x=\"360\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"454.8\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask></defs><g mask=\"url(#dmsdm2m1)\"><g mask=\"url(#dmsdm2m0)\"><rect x=\"360\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.45\"/></g></g><rect x=\"360\" y=\"8\" width=\"150\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"366\" y=\"24\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"415.2\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"399.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"454.8\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"471.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><text x=\"435.0\" y=\"128\" text-anchor=\"middle\" font-size=\"14\">Ā ∩ B̄</text></svg>",
  sets_distrib: "<svg viewBox=\"0 0 520 236\" xmlns=\"http://www.w3.org/2000/svg\"><defs><clipPath id=\"dmsdlc0\"><circle cx=\"226.5\" cy=\"93.6\" r=\"54.0\"/></clipPath><mask id=\"dmsdlm0\"><rect x=\"150\" y=\"6\" width=\"220\" height=\"200\" fill=\"white\"/><circle cx=\"226.5\" cy=\"93.6\" r=\"54.0\" fill=\"black\"/></mask><clipPath id=\"dmsdlc1\"><circle cx=\"293.5\" cy=\"93.6\" r=\"54.0\"/></clipPath><mask id=\"dmsdlm1\"><rect x=\"150\" y=\"6\" width=\"220\" height=\"200\" fill=\"white\"/><circle cx=\"293.5\" cy=\"93.6\" r=\"54.0\" fill=\"black\"/></mask><clipPath id=\"dmsdlc2\"><circle cx=\"260.0\" cy=\"132.1\" r=\"54.0\"/></clipPath><mask id=\"dmsdlm2\"><rect x=\"150\" y=\"6\" width=\"220\" height=\"200\" fill=\"white\"/><circle cx=\"260.0\" cy=\"132.1\" r=\"54.0\" fill=\"black\"/></mask></defs><g clip-path=\"url(#dmsdlc1)\"><g clip-path=\"url(#dmsdlc0)\"><g mask=\"url(#dmsdlm2)\"><rect x=\"150\" y=\"6\" width=\"220\" height=\"200\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\"/></g></g></g><g clip-path=\"url(#dmsdlc2)\"><g clip-path=\"url(#dmsdlc0)\"><g mask=\"url(#dmsdlm1)\"><rect x=\"150\" y=\"6\" width=\"220\" height=\"200\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\"/></g></g></g><g clip-path=\"url(#dmsdlc2)\"><g clip-path=\"url(#dmsdlc1)\"><g clip-path=\"url(#dmsdlc0)\"><rect x=\"150\" y=\"6\" width=\"220\" height=\"200\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.45\"/></g></g></g><rect x=\"150\" y=\"6\" width=\"220\" height=\"200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"156\" y=\"22\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"226.5\" cy=\"93.6\" r=\"54.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"186.0\" y=\"50.4\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"293.5\" cy=\"93.6\" r=\"54.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"334.0\" y=\"50.4\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><circle cx=\"260.0\" cy=\"132.1\" r=\"54.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"316.7\" y=\"178.0\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">C</text><text x=\"260\" y=\"226\" text-anchor=\"middle\" font-size=\"14\">A ∩ (B ∪ C)  =  (A ∩ B) ∪ (A ∩ C)</text></svg>",
  sets_ops: "<svg viewBox=\"0 0 520 290\" xmlns=\"http://www.w3.org/2000/svg\"><defs><clipPath id=\"dmsop0c0\"><circle cx=\"65.2\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop0m0\"><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"65.2\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask><clipPath id=\"dmsop0c1\"><circle cx=\"104.8\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop0m1\"><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"104.8\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask></defs><g clip-path=\"url(#dmsop0c1)\"><g clip-path=\"url(#dmsop0c0)\"><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><g clip-path=\"url(#dmsop0c0)\"><g mask=\"url(#dmsop0m1)\"><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><g clip-path=\"url(#dmsop0c1)\"><g mask=\"url(#dmsop0m0)\"><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><rect x=\"10\" y=\"8\" width=\"150\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"16\" y=\"24\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"65.2\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"49.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"104.8\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"121.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><text x=\"85.0\" y=\"128\" text-anchor=\"middle\" font-size=\"14\">A ∪ B</text><defs><clipPath id=\"dmsop1c0\"><circle cx=\"235.2\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop1m0\"><rect x=\"180\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"235.2\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask><clipPath id=\"dmsop1c1\"><circle cx=\"274.8\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop1m1\"><rect x=\"180\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"274.8\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask></defs><g clip-path=\"url(#dmsop1c1)\"><g clip-path=\"url(#dmsop1c0)\"><rect x=\"180\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><rect x=\"180\" y=\"8\" width=\"150\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"186\" y=\"24\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"235.2\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"219.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"274.8\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"291.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><text x=\"255.0\" y=\"128\" text-anchor=\"middle\" font-size=\"14\">A ∩ B</text><defs><clipPath id=\"dmsop2c0\"><circle cx=\"405.2\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop2m0\"><rect x=\"350\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"405.2\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask><clipPath id=\"dmsop2c1\"><circle cx=\"444.8\" cy=\"62.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop2m1\"><rect x=\"350\" y=\"8\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"444.8\" cy=\"62.0\" r=\"36.0\" fill=\"black\"/></mask></defs><g clip-path=\"url(#dmsop2c0)\"><g mask=\"url(#dmsop2m1)\"><rect x=\"350\" y=\"8\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><rect x=\"350\" y=\"8\" width=\"150\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"356\" y=\"24\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"405.2\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"389.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"444.8\" cy=\"62.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"461.0\" y=\"23.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><text x=\"425.0\" y=\"128\" text-anchor=\"middle\" font-size=\"14\">A − B</text><defs><clipPath id=\"dmsop3c0\"><circle cx=\"65.2\" cy=\"202.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop3m0\"><rect x=\"10\" y=\"148\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"65.2\" cy=\"202.0\" r=\"36.0\" fill=\"black\"/></mask><clipPath id=\"dmsop3c1\"><circle cx=\"104.8\" cy=\"202.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop3m1\"><rect x=\"10\" y=\"148\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"104.8\" cy=\"202.0\" r=\"36.0\" fill=\"black\"/></mask></defs><g clip-path=\"url(#dmsop3c1)\"><g mask=\"url(#dmsop3m0)\"><rect x=\"10\" y=\"148\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><rect x=\"10\" y=\"148\" width=\"150\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"16\" y=\"164\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"65.2\" cy=\"202.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"49.0\" y=\"163.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"104.8\" cy=\"202.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"121.0\" y=\"163.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><text x=\"85.0\" y=\"268\" text-anchor=\"middle\" font-size=\"14\">B − A</text><defs><clipPath id=\"dmsop4c0\"><circle cx=\"235.2\" cy=\"202.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop4m0\"><rect x=\"180\" y=\"148\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"235.2\" cy=\"202.0\" r=\"36.0\" fill=\"black\"/></mask><clipPath id=\"dmsop4c1\"><circle cx=\"274.8\" cy=\"202.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop4m1\"><rect x=\"180\" y=\"148\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"274.8\" cy=\"202.0\" r=\"36.0\" fill=\"black\"/></mask></defs><g clip-path=\"url(#dmsop4c0)\"><g mask=\"url(#dmsop4m1)\"><rect x=\"180\" y=\"148\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><g clip-path=\"url(#dmsop4c1)\"><g mask=\"url(#dmsop4m0)\"><rect x=\"180\" y=\"148\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><rect x=\"180\" y=\"148\" width=\"150\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"186\" y=\"164\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"235.2\" cy=\"202.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"219.0\" y=\"163.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"274.8\" cy=\"202.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"291.0\" y=\"163.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><text x=\"255.0\" y=\"268\" text-anchor=\"middle\" font-size=\"14\">A ⊕ B</text><defs><clipPath id=\"dmsop5c0\"><circle cx=\"405.2\" cy=\"202.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop5m0\"><rect x=\"350\" y=\"148\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"405.2\" cy=\"202.0\" r=\"36.0\" fill=\"black\"/></mask><clipPath id=\"dmsop5c1\"><circle cx=\"444.8\" cy=\"202.0\" r=\"36.0\"/></clipPath><mask id=\"dmsop5m1\"><rect x=\"350\" y=\"148\" width=\"150\" height=\"100\" fill=\"white\"/><circle cx=\"444.8\" cy=\"202.0\" r=\"36.0\" fill=\"black\"/></mask></defs><g mask=\"url(#dmsop5m1)\"><g mask=\"url(#dmsop5m0)\"><rect x=\"350\" y=\"148\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><g clip-path=\"url(#dmsop5c1)\"><g mask=\"url(#dmsop5m0)\"><rect x=\"350\" y=\"148\" width=\"150\" height=\"100\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.45\"/></g></g><rect x=\"350\" y=\"148\" width=\"150\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"356\" y=\"164\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"405.2\" cy=\"202.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"389.0\" y=\"163.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"444.8\" cy=\"202.0\" r=\"36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"461.0\" y=\"163.8\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><text x=\"425.0\" y=\"268\" text-anchor=\"middle\" font-size=\"14\">Ā (complement)</text></svg>",
  sets_powerset: "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"230.0\" y1=\"236.0\" x2=\"140.0\" y2=\"194.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"260.0\" y1=\"236.0\" x2=\"260.0\" y2=\"194.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"290.0\" y1=\"236.0\" x2=\"380.0\" y2=\"194.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"110.0\" y1=\"166.0\" x2=\"110.0\" y2=\"114.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"136.3\" y1=\"166.0\" x2=\"233.8\" y2=\"114.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"233.8\" y1=\"166.0\" x2=\"136.3\" y2=\"114.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"286.3\" y1=\"166.0\" x2=\"383.8\" y2=\"114.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"383.8\" y1=\"166.0\" x2=\"286.3\" y2=\"114.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"410.0\" y1=\"166.0\" x2=\"410.0\" y2=\"114.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"140.0\" y1=\"86.0\" x2=\"230.0\" y2=\"44.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"260.0\" y1=\"86.0\" x2=\"260.0\" y2=\"44.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"380.0\" y1=\"86.0\" x2=\"290.0\" y2=\"44.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><rect x=\"220\" y=\"236\" width=\"80\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"260\" y=\"255\" text-anchor=\"middle\" font-size=\"14\">∅</text><rect x=\"70\" y=\"166\" width=\"80\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"110\" y=\"185\" text-anchor=\"middle\" font-size=\"14\">{a}</text><rect x=\"220\" y=\"166\" width=\"80\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"260\" y=\"185\" text-anchor=\"middle\" font-size=\"14\">{b}</text><rect x=\"370\" y=\"166\" width=\"80\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"410\" y=\"185\" text-anchor=\"middle\" font-size=\"14\">{c}</text><rect x=\"70\" y=\"86\" width=\"80\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"110\" y=\"105\" text-anchor=\"middle\" font-size=\"14\">{a,b}</text><rect x=\"220\" y=\"86\" width=\"80\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"260\" y=\"105\" text-anchor=\"middle\" font-size=\"14\">{a,c}</text><rect x=\"370\" y=\"86\" width=\"80\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"410\" y=\"105\" text-anchor=\"middle\" font-size=\"14\">{b,c}</text><rect x=\"220\" y=\"16\" width=\"80\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"260\" y=\"35\" text-anchor=\"middle\" font-size=\"14\">{a,b,c}</text><text x=\"304\" y=\"255\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">000</text><text x=\"154\" y=\"185\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">100</text><text x=\"304\" y=\"185\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">010</text><text x=\"454\" y=\"185\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">001</text><text x=\"154\" y=\"105\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">110</text><text x=\"304\" y=\"105\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">101</text><text x=\"454\" y=\"105\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">011</text><text x=\"304\" y=\"35\" text-anchor=\"start\" font-size=\"12\" class=\"t-blue\">111</text></svg>",
  sets_q3: "<svg viewBox=\"0 0 260 230\" xmlns=\"http://www.w3.org/2000/svg\"><defs><clipPath id=\"dmsq3c0\"><circle cx=\"96.5\" cy=\"95.6\" r=\"54.0\"/></clipPath><mask id=\"dmsq3m0\"><rect x=\"20\" y=\"8\" width=\"220\" height=\"200\" fill=\"white\"/><circle cx=\"96.5\" cy=\"95.6\" r=\"54.0\" fill=\"black\"/></mask><clipPath id=\"dmsq3c1\"><circle cx=\"163.5\" cy=\"95.6\" r=\"54.0\"/></clipPath><mask id=\"dmsq3m1\"><rect x=\"20\" y=\"8\" width=\"220\" height=\"200\" fill=\"white\"/><circle cx=\"163.5\" cy=\"95.6\" r=\"54.0\" fill=\"black\"/></mask><clipPath id=\"dmsq3c2\"><circle cx=\"130.0\" cy=\"134.1\" r=\"54.0\"/></clipPath><mask id=\"dmsq3m2\"><rect x=\"20\" y=\"8\" width=\"220\" height=\"200\" fill=\"white\"/><circle cx=\"130.0\" cy=\"134.1\" r=\"54.0\" fill=\"black\"/></mask></defs><g clip-path=\"url(#dmsq3c0)\"><g mask=\"url(#dmsq3m2)\"><g mask=\"url(#dmsq3m1)\"><rect x=\"20\" y=\"8\" width=\"220\" height=\"200\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.45\"/></g></g></g><g clip-path=\"url(#dmsq3c1)\"><g mask=\"url(#dmsq3m2)\"><g mask=\"url(#dmsq3m0)\"><rect x=\"20\" y=\"8\" width=\"220\" height=\"200\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.45\"/></g></g></g><g clip-path=\"url(#dmsq3c1)\"><g clip-path=\"url(#dmsq3c0)\"><g mask=\"url(#dmsq3m2)\"><rect x=\"20\" y=\"8\" width=\"220\" height=\"200\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.45\"/></g></g></g><rect x=\"20\" y=\"8\" width=\"220\" height=\"200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"26\" y=\"24\" font-size=\"13\" class=\"t-gray\">U</text><circle cx=\"96.5\" cy=\"95.6\" r=\"54.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"56.0\" y=\"52.4\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">A</text><circle cx=\"163.5\" cy=\"95.6\" r=\"54.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"204.0\" y=\"52.4\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">B</text><circle cx=\"130.0\" cy=\"134.1\" r=\"54.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"186.7\" y=\"180.0\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\">C</text></svg>",
};
// </figures>

export const lesson: Lesson = {
  id: 'dm-sets',
  title: 'Sets and Set Operations',
  summary: 'The language every other topic is written in: membership, subsets, power sets, products, set algebra with proofs, and sets as bit masks.',
  minutes: 19,
  objectives: [
    'Describe sets in roster and set-builder notation and tell $\\in$ apart from $\\subseteq$',
    'Count power sets ($|\\mathcal{P}(A)| = 2^n$) and Cartesian products ($|A \\times B| = |A|\\,|B|$) and explain why the formulas hold',
    'Compute unions, intersections, differences, complements and symmetric differences, and read them off Venn diagrams',
    'Prove a set identity two ways: with a membership table and with an element argument',
    'Represent subsets of a small universe as bit masks and translate set operations into bitwise operators in C++',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'What a set is',
      blocks: [
        {
          type: 'p',
          text: 'A [[dm-set]] is a collection of distinct objects, called its **elements** or **members**. That is the whole definition, and its simplicity is the point: numbers, strings, game entities, other sets — anything can be an element. We write $x \\in A$ for "$x$ is an element of $A$" and $x \\notin A$ for "it is not".',
        },
        {
          type: 'p',
          text: 'There are two standard ways to describe a set. **Roster notation** lists the elements between braces: $\\{2, 3, 5, 7\\}$. **Set-builder notation** describes them by a property: $\\{x \\in \\mathbb{Z} : x > 0 \\text{ and } x \\text{ is odd}\\}$, read "the set of integers $x$ such that $x$ is positive and odd". The part before the colon says where $x$ comes from; the part after is a predicate that must be true.',
        },
        {
          type: 'definition',
          term: 'The standard number sets',
          text: '$\\mathbb{N} = \\{0, 1, 2, 3, \\dots\\}$ ([[natural-number|natural numbers]] — **this course includes $0$**, as most computer scientists do), $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$ ([[integer|integers]]), $\\mathbb{Q}$ ([[rational-number|rationals]], fractions $\\frac{p}{q}$ with $q \\ne 0$) and $\\mathbb{R}$ ([[real-number|reals]]). The [[dm-empty-set]] $\\emptyset = \\{\\}$ has no elements at all.',
        },
        {
          type: 'list',
          items: [
            '**Order does not matter:** $\\{1, 2, 3\\} = \\{3, 1, 2\\}$.',
            '**Repetition does not matter:** $\\{1, 1, 2\\} = \\{1, 2\\}$. An element is either in or out; there is no "in twice".',
            '**Elements can be sets:** $\\{1, \\{1\\}, \\emptyset\\}$ has three elements: the number $1$, the set $\\{1\\}$ and the empty set.',
            'The **cardinality** $|A|$ of a finite set is its number of elements: $|\\{a, b, c\\}| = 3$, $|\\emptyset| = 0$, $|\\{\\emptyset\\}| = 1$.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why mathematicians (and programmers) start here',
          text: 'Almost every object in this course is secretly a set: a function is a set of input–output pairs, a relation is a set of pairs, a graph is a set of vertices plus a set of edges, an event in probability is a set of outcomes. Learning the vocabulary precisely now means later definitions become one-liners. Programmers meet the same idea as `std::set`, `std::unordered_set` and SQL tables: unordered, no duplicates, fast membership tests.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Set-builder needs a source',
          text: 'Writing $\\{x : x \\notin x\\}$ — "the set of all sets that do not contain themselves" — leads to **Russell\'s paradox**: is that set a member of itself? Either answer contradicts the definition. The fix used in practice is to always build from a known set, $\\{x \\in U : P(x)\\}$, which is exactly what we will do.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'How many elements does $S = \\{x \\in \\mathbb{Z} : x^2 < 10\\}$ have?',
      hint: 'List the integers whose square is less than $10$ — do not forget the negatives and zero.',
      label: '$|S| =$',
      answer: '7',
      explanation: 'Squares below $10$ are $0, 1, 4, 9$, coming from $x = 0, \\pm 1, \\pm 2, \\pm 3$. ($4^2 = 16$ is too big.) So $S = \\{-3, -2, -1, 0, 1, 2, 3\\}$ and $|S| = 7$. The source set matters: with $x \\in \\mathbb{N}$ the answer would be $4$, and with $x \\in \\mathbb{R}$ it would be the infinite interval $(-\\sqrt{10}, \\sqrt{10})$.',
    },
    {
      kind: 'concept',
      title: 'Subsets, equality and the element-vs-subset trap',
      blocks: [
        {
          type: 'definition',
          term: 'Subset',
          text: '$A$ is a [[dm-subset]] of $B$, written $A \\subseteq B$, when every element of $A$ is also an element of $B$: $\\forall x\\,(x \\in A \\to x \\in B)$. If in addition $A \\ne B$, then $A$ is a **proper subset**, $A \\subsetneq B$ (some books write $A \\subset B$).',
        },
        {
          type: 'p',
          text: 'Two sets are **equal** exactly when they have the same elements. Because of the definition of $\\subseteq$, that is the same as saying each is a subset of the other. This gives the most important proof template for sets, called **double inclusion**:',
        },
        {
          type: 'theorem',
          name: 'Set equality by double inclusion',
          tex: 'A = B \\iff (A \\subseteq B \\text{ and } B \\subseteq A)',
        },
        {
          type: 'derivation',
          title: 'Prove: $\\emptyset \\subseteq A$ for every set $A$',
          steps: [
            { tex: '\\emptyset \\subseteq A \\iff \\forall x\\,(x \\in \\emptyset \\to x \\in A)', why: 'Unpack the definition of subset.' },
            { tex: 'x \\in \\emptyset \\text{ is false for every } x', why: 'The empty set has no elements, so the hypothesis of the implication never holds.' },
            { tex: '\\text{False} \\to \\text{anything} \\;\\equiv\\; \\text{True}', why: 'An implication with a false hypothesis is true — the truth table of $\\to$ from the Logic unit. This is called a **vacuously true** statement.' },
            { tex: '\\therefore\\; \\emptyset \\subseteq A', why: 'The universal statement holds for every $x$, so the definition is satisfied.' },
          ],
          result: 'The empty set is a subset of every set — including itself. Also $A \\subseteq A$ for every $A$, since $x \\in A \\to x \\in A$ is always true.',
        },
        {
          type: 'compare',
          left: {
            title: 'Membership $\\in$',
            tone: 'neutral',
            text: 'Is this *object* one of the elements?\n\n$1 \\in \\{1, 2\\}$ ✓\n\n$\\{1\\} \\in \\{\\{1\\}, 2\\}$ ✓\n\n$\\emptyset \\in \\{1, 2\\}$ ✗ (the elements are $1$ and $2$)',
          },
          right: {
            title: 'Inclusion $\\subseteq$',
            tone: 'neutral',
            text: 'Is *every element* of the left set inside the right set?\n\n$\\{1\\} \\subseteq \\{1, 2\\}$ ✓\n\n$\\{1\\} \\subseteq \\{\\{1\\}, 2\\}$ ✗ (the number $1$ is not an element)\n\n$\\emptyset \\subseteq \\{1, 2\\}$ ✓ (vacuously)',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams love sets like $\\{\\emptyset, \\{\\emptyset\\}\\}$. Ask yourself literally: "what are the elements, one by one?" Here they are $\\emptyset$ and $\\{\\emptyset\\}$. So $\\emptyset \\in$ it, $\\emptyset \\subseteq$ it, $\\{\\emptyset\\} \\in$ it **and** $\\{\\emptyset\\} \\subseteq$ it (its one element, $\\emptyset$, is in the big set).',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: $\\{1\\} \\subseteq \\{\\{1\\}, 2\\}$.',
      answer: false,
      explanation: 'The elements of $\\{\\{1\\}, 2\\}$ are the *set* $\\{1\\}$ and the number $2$. For $\\{1\\} \\subseteq \\{\\{1\\}, 2\\}$ we would need the number $1$ to be an element, and it is not. What *is* true is $\\{1\\} \\in \\{\\{1\\}, 2\\}$, and also $\\{\\{1\\}\\} \\subseteq \\{\\{1\\}, 2\\}$.',
    },
    {
      kind: 'concept',
      title: 'Power sets: why $2^n$',
      blocks: [
        {
          type: 'p',
          text: 'The [[dm-power-set]] of $A$, written $\\mathcal{P}(A)$, is the set of **all** subsets of $A$. Its elements are sets. For $A = \\{a, b, c\\}$:',
        },
        {
          type: 'math',
          tex: '\\mathcal{P}(\\{a,b,c\\}) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{c\\}, \\{a,b\\}, \\{a,c\\}, \\{b,c\\}, \\{a,b,c\\}\\}',
          caption: 'Eight subsets, including $\\emptyset$ and $A$ itself.',
        },
        {
          type: 'theorem',
          name: 'Size of a power set',
          tex: '|A| = n \\implies |\\mathcal{P}(A)| = 2^n',
        },
        {
          type: 'derivation',
          title: 'Why the count is $2^n$',
          steps: [
            { tex: 'A = \\{a_1, a_2, \\dots, a_n\\}', why: 'Name the elements in some fixed order.' },
            { tex: 'S \\subseteq A \\;\\longleftrightarrow\\; (b_1, b_2, \\dots, b_n),\\; b_i = \\begin{cases} 1 & a_i \\in S \\\\ 0 & a_i \\notin S \\end{cases}', why: 'Describe a subset by answering $n$ yes/no questions: is $a_1$ in? is $a_2$ in? … Each subset gives exactly one bit string, and each bit string gives exactly one subset.' },
            { tex: '\\underbrace{2 \\cdot 2 \\cdots 2}_{n \\text{ choices}} = 2^n', why: 'Each bit is chosen independently from two options, so the number of bit strings is $2^n$ (the product rule, which the Counting unit develops fully).' },
            { tex: '|\\mathcal{P}(A)| = 2^n', why: 'Matching subsets one-to-one with bit strings means there are equally many of each.' },
          ],
          result: 'A $3$-element set has $2^3 = 8$ subsets; a $10$-element set has $1024$.',
        },
        {
          type: 'figure',
          svg: FIG.sets_powerset,
          alt: 'The eight subsets of {a, b, c} arranged in four levels by size, with edges between subsets that differ by one element, each labelled by its bit string.',
          caption: 'All subsets of $\\{a, b, c\\}$, each with its bit string ($a$ is the first bit). Moving up an edge adds one element — flips one bit from $0$ to $1$.',
        },
        {
          type: 'code',
          title: 'subsets.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    const char* items[] = {"sword", "shield", "potion"};
    const int n = 3;
    // Each mask from 0 to 2^n - 1 is one subset: bit i says "take item i".
    for (unsigned mask = 0; mask < (1u << n); ++mask) {
        std::printf("%u%u%u  {", (mask >> 2) & 1, (mask >> 1) & 1, mask & 1);
        bool first = true;
        for (int i = 0; i < n; ++i)
            if (mask & (1u << i)) {
                std::printf(first ? "%s" : ", %s", items[i]);
                first = false;
            }
        std::printf("}\\n");
    }
}`,
          output: `000  {}
001  {sword}
010  {shield}
011  {sword, shield}
100  {potion}
101  {sword, potion}
110  {shield, potion}
111  {sword, shield, potion}`,
          annotations: [
            { lines: 7, text: '`1u << n` is $2^n$. Counting from $0$ to $2^n - 1$ visits every bit string of length $n$ exactly once — the proof above, as a loop.' },
            { lines: 11, text: 'Bit $i$ of the mask is $1$ exactly when item $i$ belongs to this subset.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Brute force over subsets',
          text: 'This loop is the standard way to try every loadout, every team, every combination of power-ups. It is also a warning: $2^{20}$ is about a million (fine), $2^{40}$ is about a trillion (not fine). Power sets grow exponentially.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'How many subsets of $\\{1, 2, 3, 4, 5, 6\\}$ contain $1$ but do **not** contain $2$?',
      hint: 'In the bit-string picture, two of the six bits are already decided.',
      answer: '16',
      explanation: 'Bit $1$ is forced to $1$ and bit $2$ is forced to $0$. The remaining four elements $3, 4, 5, 6$ are each free (in or out), giving $2^4 = 16$ subsets. Equivalently: every such subset is $\\{1\\} \\cup T$ where $T$ is any subset of $\\{3, 4, 5, 6\\}$.',
    },
    {
      kind: 'concept',
      title: 'Cartesian products: ordered pairs',
      blocks: [
        {
          type: 'p',
          text: 'Sets ignore order, but coordinates, moves and table rows need it. An **ordered pair** $(a, b)$ has a first and a second entry, and $(a, b) = (c, d)$ exactly when $a = c$ and $b = d$. So $(1, 2) \\ne (2, 1)$, while $\\{1, 2\\} = \\{2, 1\\}$.',
        },
        {
          type: 'definition',
          term: 'Cartesian product',
          text: 'The [[dm-cartesian-product]] of $A$ and $B$ is $A \\times B = \\{(a, b) : a \\in A \\text{ and } b \\in B\\}$, the set of all ordered pairs with first entry from $A$ and second from $B$. More generally $A_1 \\times \\cdots \\times A_k$ is the set of $k$-tuples, and $A^k$ means $A \\times A \\times \\cdots \\times A$.',
        },
        {
          type: 'figure',
          svg: FIG.sets_cartesian,
          alt: 'A grid of six dots labelled (1, x) through (3, y), with A = {1, 2, 3} along the horizontal axis and B = {x, y} along the vertical axis.',
          caption: 'Lay $A$ along one axis and $B$ along the other: $A \\times B$ is the grid of points. Three columns of two gives $3 \\cdot 2 = 6$ pairs.',
        },
        {
          type: 'theorem',
          name: 'Size of a product',
          tex: '|A \\times B| = |A| \\cdot |B|',
          text: 'Each of the $|A|$ choices of first entry pairs with each of the $|B|$ choices of second entry.',
        },
        {
          type: 'list',
          items: [
            '$\\mathbb{R} \\times \\mathbb{R} = \\mathbb{R}^2$ is the coordinate plane you graphed in algebra.',
            'A standard deck is $\\text{Ranks} \\times \\text{Suits}$: $13 \\cdot 4 = 52$ cards.',
            'A chessboard square is an element of $\\{a, \\dots, h\\} \\times \\{1, \\dots, 8\\}$: $64$ squares.',
            '$A \\times \\emptyset = \\emptyset$ — there is no second entry to choose, so no pairs exist.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'In general $A \\times B \\ne B \\times A$: $(1, x) \\in A \\times B$ but $(1, x) \\notin B \\times A$, whose pairs start with $x$ or $y$. The two products have the same *size*, but different elements (unless $A = B$ or one of them is empty).',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Let $A = \\{1, 2, 3\\}$ and $B = \\{p, q, r, s\\}$. How many elements does $A \\times \\mathcal{P}(B)$ have?',
      hint: 'First find $|\\mathcal{P}(B)|$, then use $|X \\times Y| = |X|\\,|Y|$.',
      answer: '48',
      explanation: '$|B| = 4$, so $|\\mathcal{P}(B)| = 2^4 = 16$. Each element of the product pairs one of the $3$ numbers with one of the $16$ subsets, so $|A \\times \\mathcal{P}(B)| = 3 \\cdot 16 = 48$. A typical element looks like $(2, \\{p, s\\})$.',
    },
    {
      kind: 'concept',
      title: 'Set operations and Venn diagrams',
      blocks: [
        {
          type: 'p',
          text: 'Fix a **universal set** $U$ containing everything under discussion (all integers, all players on a server…). Then each set operation is just a logical connective applied to membership:',
        },
        {
          type: 'table',
          headers: ['Operation', 'Notation', 'Definition', 'Logic'],
          rows: [
            ['Union', '$A \\cup B$', '$\\{x : x \\in A \\text{ or } x \\in B\\}$', '$\\lor$'],
            ['Intersection', '$A \\cap B$', '$\\{x : x \\in A \\text{ and } x \\in B\\}$', '$\\land$'],
            ['Difference', '$A - B$ or $A \\setminus B$', '$\\{x : x \\in A \\text{ and } x \\notin B\\}$', '$p \\land \\neg q$'],
            ['Complement', '$\\overline{A}$', '$\\{x \\in U : x \\notin A\\}$', '$\\neg$'],
            ['Symmetric difference', '$A \\oplus B$', '$\\{x : x \\text{ in exactly one of } A, B\\}$', '$\\oplus$ (XOR)'],
          ],
        },
        {
          type: 'p',
          text: 'A [[dm-venn-diagram]] draws $U$ as a rectangle and each set as a circle; a region is shaded when its points belong to the set being described. Two circles create four regions, three circles create eight — one for each combination of in/out, which is the $2^n$ count again.',
        },
        {
          type: 'figure',
          svg: FIG.sets_ops,
          alt: 'Six Venn diagrams of two overlapping circles A and B inside a rectangle U, shading the union, intersection, A minus B, B minus A, symmetric difference, and the complement of A.',
          caption: 'The six basic operations. The [[dm-set-complement|complement]] $\\overline{A}$ includes everything outside $A$ — even points outside both circles.',
        },
        {
          type: 'derivation',
          title: 'Example with $U = \\{1, \\dots, 10\\}$, $A = \\{1, 2, 3, 4, 5\\}$, $B = \\{4, 5, 6, 7\\}$',
          steps: [
            { tex: 'A \\cup B = \\{1, 2, 3, 4, 5, 6, 7\\}', why: 'Everything in at least one set; $4$ and $5$ are listed once.' },
            { tex: 'A \\cap B = \\{4, 5\\}', why: 'Only the elements in both.' },
            { tex: 'A - B = \\{1, 2, 3\\}, \\quad B - A = \\{6, 7\\}', why: 'Remove the shared elements from one side. Difference is not symmetric.' },
            { tex: 'A \\oplus B = \\{1, 2, 3, 6, 7\\} = (A - B) \\cup (B - A)', why: 'In exactly one set: the union minus the intersection.' },
            { tex: '\\overline{A} = \\{6, 7, 8, 9, 10\\}', why: 'Everything in $U$ that is not in $A$. The complement depends on $U$.' },
            { tex: '|A \\cup B| = 5 + 4 - 2 = 7', why: 'Adding $|A| + |B|$ counts the overlap twice, so subtract $|A \\cap B|$ once. This two-set version of [[dm-inclusion-exclusion|inclusion–exclusion]] is generalised in the Counting unit.' },
          ],
          result: 'Sets $A$ and $B$ are **disjoint** when $A \\cap B = \\emptyset$; only then is $|A \\cup B| = |A| + |B|$.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which expression describes the shaded region?',
      figure: {
        type: 'figure',
        svg: FIG.sets_q3,
        alt: 'Three overlapping circles A, B, C. The parts of A and B that lie outside C are shaded, including the part where A and B overlap outside C.',
        maxWidth: 300,
      },
      options: [
        { text: '$(A \\cup B) - C$', correct: true, why: 'Everything in $A$ or $B$, with every point of $C$ removed: exactly the three shaded regions.' },
        { text: '$(A \\cap B) - C$', why: 'That is only the small lens where $A$ and $B$ overlap outside $C$; the outer parts of $A$ and $B$ are shaded too.' },
        { text: '$A \\cup (B - C)$', why: 'This keeps all of $A$, including the parts of $A$ inside $C$, which are unshaded.' },
        { text: '$(A \\oplus B) - C$', why: 'Symmetric difference removes $A \\cap B$, but the lens $A \\cap B$ outside $C$ is shaded.' },
      ],
      explanation: 'Read the picture region by region: shaded = in $A$ or in $B$, and not in $C$. "Or" is $\\cup$, "not in $C$" is $- C$, so the region is $(A \\cup B) - C$. Equivalently $(A - C) \\cup (B - C)$ — difference distributes over union.',
    },
    {
      kind: 'concept',
      title: 'Set identities and membership tables',
      blocks: [
        {
          type: 'p',
          text: 'Because each operation *is* a logical connective, every [[dm-logical-equivalence|logical equivalence]] from the Logic unit turns into a set identity. Replace $\\lor$ with $\\cup$, $\\land$ with $\\cap$, $\\neg$ with complement, $\\mathbf{T}$ with $U$ and $\\mathbf{F}$ with $\\emptyset$:',
        },
        {
          type: 'table',
          headers: ['Name', 'Identity'],
          rows: [
            ['Commutative', '$A \\cup B = B \\cup A$, $\\quad A \\cap B = B \\cap A$'],
            ['Associative', '$(A \\cup B) \\cup C = A \\cup (B \\cup C)$, same for $\\cap$'],
            ['Distributive', '$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$, $\\quad A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$'],
            ['De Morgan', '$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$, $\\quad \\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$'],
            ['Identity / domination', '$A \\cup \\emptyset = A$, $A \\cap U = A$, $A \\cup U = U$, $A \\cap \\emptyset = \\emptyset$'],
            ['Complement', '$A \\cup \\overline{A} = U$, $\\quad A \\cap \\overline{A} = \\emptyset$, $\\quad \\overline{\\overline{A}} = A$'],
            ['Absorption', '$A \\cup (A \\cap B) = A$, $\\quad A \\cap (A \\cup B) = A$'],
            ['Difference', '$A - B = A \\cap \\overline{B}$'],
          ],
        },
        {
          type: 'p',
          text: '**Proof method 1: the membership table.** Any element $x$ is either in or out of each set. With two sets there are only $4$ cases, so check them all — exactly like a truth table, with $1$ meaning "$x$ is in the set". Two expressions are equal when their columns agree in every row.',
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$A \\cup B$', '$\\overline{A \\cup B}$', '$\\overline{A}$', '$\\overline{B}$', '$\\overline{A} \\cap \\overline{B}$'],
          rows: [
            ['1', '1', '1', '**0**', '0', '0', '**0**'],
            ['1', '0', '1', '**0**', '0', '1', '**0**'],
            ['0', '1', '1', '**0**', '1', '0', '**0**'],
            ['0', '0', '0', '**1**', '1', '1', '**1**'],
          ],
          caption: '[[dm-de-morgans-laws|De Morgan\'s law]] $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$: the two bold columns agree in all four rows, so every element is in both sides or in neither.',
        },
        {
          type: 'figure',
          svg: FIG.sets_demorgan,
          alt: 'Three Venn diagrams: the complement of A shaded blue, the complement of B shaded red, and their intersection shaded purple, which is only the region outside both circles.',
          caption: 'The same law as a picture: overlap the shading of $\\overline{A}$ and $\\overline{B}$ and only the outside of both circles survives — the complement of $A \\cup B$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a membership table is a complete proof',
          text: 'Whether $x$ belongs to $\\overline{A \\cup B}$ depends **only** on whether $x \\in A$ and whether $x \\in B$. The table lists every possible combination, so it covers every element of every universe at once. A Venn diagram, by contrast, is a picture of one case — great for intuition, but most instructors do not accept it as a proof.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Proof method 2: the element argument',
      blocks: [
        {
          type: 'p',
          text: 'Membership tables get big ($2^k$ rows for $k$ sets) and do not work for statements like "$A \\subseteq B$ implies $A \\cup C \\subseteq B \\cup C$". The general-purpose method is the **element argument**: prove each inclusion by taking an arbitrary element of one side and showing it belongs to the other. This is double inclusion in action.',
        },
        {
          type: 'derivation',
          title: 'Prove $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$',
          steps: [
            { tex: '(\\subseteq)\\; \\text{Let } x \\in A \\cap (B \\cup C).', why: 'To show the left side is a subset of the right, start with an *arbitrary* element of the left. Arbitrary means the argument works for every element.' },
            { tex: '\\implies x \\in A \\;\\text{ and }\\; (x \\in B \\text{ or } x \\in C)', why: 'Definitions of $\\cap$ and $\\cup$.' },
            { tex: '\\text{Case } x \\in B:\\; x \\in A \\cap B \\subseteq (A \\cap B) \\cup (A \\cap C)', why: 'Proof by cases on the "or". If $x \\in B$, then $x$ is in both $A$ and $B$, and anything in $A \\cap B$ is in the union.' },
            { tex: '\\text{Case } x \\in C:\\; x \\in A \\cap C \\subseteq (A \\cap B) \\cup (A \\cap C)', why: 'The symmetric case. Either way $x$ lands in the right side.' },
            { tex: '(\\supseteq)\\; \\text{Let } x \\in (A \\cap B) \\cup (A \\cap C).', why: 'Now the reverse inclusion: an arbitrary element of the right side.' },
            { tex: '\\implies x \\in A \\cap B \\text{ or } x \\in A \\cap C \\implies x \\in A \\text{ and } (x \\in B \\text{ or } x \\in C)', why: 'In both cases $x \\in A$; and $x$ is in $B$ or in $C$.' },
            { tex: '\\implies x \\in A \\cap (B \\cup C)', why: 'That is exactly the definition of the left side.' },
          ],
          result: 'Both inclusions hold, so the sets are equal.',
        },
        {
          type: 'figure',
          svg: FIG.sets_distrib,
          alt: 'Three overlapping circles A, B, C with the parts of A that overlap B or C shaded green.',
          caption: 'Both sides shade the same three regions: the parts of $A$ that also lie in $B$ or in $C$.',
          maxWidth: 420,
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The template',
          text: 'To prove $X \\subseteq Y$: "Let $x \\in X$. … Therefore $x \\in Y$. Since $x$ was arbitrary, $X \\subseteq Y$." To prove $X = Y$: do that twice. To *disprove* an identity, give one concrete [[dm-counterexample]] — small sets like $A = \\{1\\}, B = \\{1\\}$ are usually enough.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of this proof that $A - (B \\cup C) \\subseteq A - B$ in order.',
      lines: [
        'Let $x \\in A - (B \\cup C)$ be arbitrary.',
        'Then $x \\in A$ and $x \\notin B \\cup C$.',
        'Since $x \\notin B \\cup C$, we have $x \\notin B$ and $x \\notin C$ (De Morgan).',
        'So $x \\in A$ and $x \\notin B$, which means $x \\in A - B$.',
        'Since $x$ was arbitrary, $A - (B \\cup C) \\subseteq A - B$.',
      ],
      distractors: ['Let $x \\in A - B$ be arbitrary.'],
      explanation: 'An inclusion $X \\subseteq Y$ is proved by starting from an arbitrary element of $X$ (the **left** side) and ending with membership in $Y$. Each line unpacks one definition: difference, then De Morgan\'s law for "not in a union", then difference again. The distractor starts from the wrong side — it would be the first line of a proof of the reverse inclusion, which is false in general.',
    },
    {
      kind: 'error',
      prompt: 'A student "proves" that $(A \\cup B) - B = A$ for all sets $A, B$. Tap the first line that is wrong.',
      lines: [
        'Let $x \\in (A \\cup B) - B$. Then $x \\in A \\cup B$ and $x \\notin B$.',
        'Since $x \\in A \\cup B$ but $x \\notin B$, we get $x \\in A$. So $(A \\cup B) - B \\subseteq A$.',
        'Conversely, let $x \\in A$. Then $x \\in A \\cup B$.',
        'Since $x \\in A$, we also know $x \\notin B$.',
        'So $x \\in (A \\cup B) - B$, and therefore $(A \\cup B) - B = A$.',
      ],
      errorLines: [4],
      explanation: 'Line 4 assumes that an element of $A$ cannot also be in $B$ — true only when $A$ and $B$ are disjoint. Counterexample: $A = B = \\{1\\}$ gives $(A \\cup B) - B = \\emptyset \\ne A$. The first inclusion (lines 1–2) is fine; the correct identity is $(A \\cup B) - B = A - B$.',
    },
    {
      kind: 'concept',
      title: 'Sets as bit masks',
      blocks: [
        {
          type: 'p',
          text: 'When the universe is small and numbered — $U = \\{0, 1, \\dots, 63\\}$ — a subset can be stored as a [[dm-bit-vector|bit vector]] — a single 64-bit integer: bit $i$ is $1$ exactly when $i$ is in the set. This is the bit-string picture from the power-set card, and it turns every set operation into **one CPU instruction**.',
        },
        {
          type: 'table',
          headers: ['Set operation', 'Bitwise C++', 'Why it works'],
          rows: [
            ['$A \\cup B$', '`A | B`', 'bit is 1 if it is 1 in either'],
            ['$A \\cap B$', '`A & B`', 'bit is 1 only if 1 in both'],
            ['$A - B$', '`A & ~B`', 'in $A$ and not in $B$'],
            ['$\\overline{A}$ (in $U$)', '`~A`', 'flip every bit'],
            ['$A \\oplus B$', '`A ^ B`', 'XOR: 1 in exactly one'],
            ['$x \\in A$', '`(A >> x) & 1`', 'read bit $x$'],
            ['$A \\subseteq B$', '`(A & ~B) == 0`', 'nothing of $A$ outside $B$'],
            ['$|A|$', '`std::popcount(A)`', 'count the 1 bits'],
          ],
        },
        {
          type: 'figure',
          svg: FIG.sets_bits,
          alt: 'Rows of eight bit cells for A, B, A or B, A and B, and A and not B, with the corresponding element lists {1, 2, 5, 7}, {2, 3, 5}, {1, 2, 3, 5, 7}, {2, 5} and {1, 7}.',
          caption: 'With $A = \\{1, 2, 5, 7\\}$ and $B = \\{2, 3, 5\\}$, each column is one element and the operators work column by column — a membership table, eight rows at a time.',
        },
        {
          type: 'code',
          title: 'bitsets.cpp',
          runnable: true,
          code: `#include <bit>
#include <bitset>
#include <cstdint>
#include <cstdio>

using Set = std::uint64_t;            // universe {0, 1, ..., 63}

constexpr Set single(int x) { return Set{1} << x; }
bool contains(Set s, int x) { return (s >> x) & 1; }

void print(const char* name, Set s) {
    std::printf("%-7s = {", name);
    bool first = true;
    for (int x = 0; x < 64; ++x)
        if (contains(s, x)) { std::printf(first ? "%d" : ", %d", x); first = false; }
    std::printf("}  |%s| = %d\\n", name, std::popcount(s));
}

int main() {
    Set A = single(1) | single(2) | single(5) | single(7);
    Set B = single(2) | single(3) | single(5);

    print("A", A);
    print("B", B);
    print("A|B", A | B);     // union
    print("A&B", A & B);     // intersection
    print("A&~B", A & ~B);   // difference A - B
    print("A^B", A ^ B);     // symmetric difference
    std::printf("A is a subset of A|B? %s\\n", (A & ~(A | B)) == 0 ? "yes" : "no");

    std::bitset<8> bits(A);  // the same set, shown as 8 bits
    std::printf("A as bits: %s\\n", bits.to_string().c_str());
}`,
          output: `A       = {1, 2, 5, 7}  |A| = 4
B       = {2, 3, 5}  |B| = 3
A|B     = {1, 2, 3, 5, 7}  |A|B| = 5
A&B     = {2, 5}  |A&B| = 2
A&~B    = {1, 7}  |A&~B| = 2
A^B     = {1, 3, 7}  |A^B| = 3
A is a subset of A|B? yes
A as bits: 10100110`,
          annotations: [
            { lines: 8, text: 'The singleton $\\{x\\}$ is a single 1 bit at position $x$. Write `Set{1}`, not `1`: shifting a 32-bit `int` by 32 or more is undefined behaviour.' },
            { lines: 21, text: 'Build a set as a union of singletons.' },
            { lines: 29, text: '$A \\subseteq B$ test: the difference $A - B$ must be empty.' },
            { lines: 31, text: '`std::bitset<N>` is the standard library version, with readable printing and sizes beyond 64.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Bit masks in game engines',
          text: 'Physics engines store **collision layers** this way: each body has a `layer` bit and a `mask` of layers it collides with, and two bodies interact when `(a.mask & b.layer) != 0` — a set intersection test. Entity-component systems use a component mask per entity and find all entities with, say, Position and Velocity by testing `(entity & required) == required`, which is $\\text{required} \\subseteq \\text{entity}$.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Translate each set operation on 64-bit masks into C++.',
      template: '$A \\cup B$ is ___, $A \\cap B$ is ___, $A - B$ is ___ and $A \\oplus B$ is ___.',
      blanks: [{ answers: ['`A | B`'] }, { answers: ['`A & B`'] }, { answers: ['`A & ~B`'] }, { answers: ['`A ^ B`'] }],
      wordBank: ['`A | B`', '`A & B`', '`A & ~B`', '`A ^ B`', '`A || B`', '`~A & B`', '`A - B`'],
      explanation: 'OR builds the union, AND the intersection, and XOR the symmetric difference. Difference needs "in $A$ **and not** in $B$", which is `A & ~B` (`~A & B` is $B - A$). Beware `A || B`: that is the *logical* or of two whole numbers, giving just `true`/`false`. And `A - B` is integer subtraction, which only matches set difference when $B \\subseteq A$.',
    },
    {
      kind: 'numeric',
      prompt: 'In an 8-bit mask, $A$ = `0b10110110` and $B$ = `0b01100101` (bit $0$ is the rightmost). Which elements are in $A - B$? Enter them separated by commas.',
      hint: 'Compute `A & ~B` bit by bit: keep a 1 from $A$ only where $B$ has a 0. Then read off the positions of the 1s.',
      answer: ['1', '4', '7'],
      answerTex: '\\{1, 4, 7\\}',
      explanation: '$A$ has 1s at positions $1, 2, 4, 5, 7$, so $A = \\{1, 2, 4, 5, 7\\}$. $B$ has 1s at $0, 2, 5, 6$, so $B = \\{0, 2, 5, 6\\}$. Removing $B$\'s elements from $A$ leaves $\\{1, 4, 7\\}$, i.e. `A & ~B` = `0b10010010`. Counting positions from the right is the classic slip here.',
    },
  ],
  takeaways: [
    'A set is determined by its elements alone — order and repetition do not matter. This course uses $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$.',
    '$\\in$ asks whether an object is an element; $\\subseteq$ asks whether every element of one set is in another. $\\emptyset \\subseteq A$ for every $A$ (vacuously).',
    '$|\\mathcal{P}(A)| = 2^n$ because subsets correspond to $n$-bit strings; $|A \\times B| = |A|\\,|B|$ because pairs form a grid.',
    'Union, intersection, complement and symmetric difference are $\\lor$, $\\land$, $\\neg$ and $\\oplus$ applied to membership, so logical equivalences become set identities such as De Morgan\'s laws.',
    'Prove set identities with a membership table (check every in/out case) or an element argument (double inclusion: $X \\subseteq Y$ and $Y \\subseteq X$). Disprove them with one small counterexample.',
    'Subsets of $\\{0, \\dots, 63\\}$ fit in a `uint64_t`: union `|`, intersection `&`, difference `& ~`, symmetric difference `^`, size `std::popcount`.',
  ],
  reading: [
    {
      title: 'Levin, Discrete Mathematics: An Open Introduction — Sets',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Section 0.3 covers set notation, operations and Venn diagrams with many short exercises.',
    },
    {
      title: 'MIT 6.042J Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The lecture notes\' chapter on sets and the well-ordering of proofs shows how element arguments are written at MIT.',
    },
    {
      title: 'Wikipedia — Bit array',
      url: 'https://en.wikipedia.org/wiki/Bit_array',
      source: 'wikipedia',
      note: 'How bit vectors implement sets in practice, with the bitwise operators for each set operation.',
    },
  ],
};
