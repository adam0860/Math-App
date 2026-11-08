import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  eq_mod3: "<svg viewBox=\"0 0 520 186\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"14\" y1=\"40\" x2=\"506\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.2\"/><circle cx=\"30\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"30\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">−6</text><circle cx=\"63\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-red\"/><text x=\"63\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">−5</text><circle cx=\"96\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-green\"/><text x=\"96\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-green\">−4</text><circle cx=\"129\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"129\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">−3</text><circle cx=\"162\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-red\"/><text x=\"162\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">−2</text><circle cx=\"195\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-green\"/><text x=\"195\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-green\">−1</text><circle cx=\"228\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"228\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">0</text><circle cx=\"261\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-red\"/><text x=\"261\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">1</text><circle cx=\"294\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-green\"/><text x=\"294\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-green\">2</text><circle cx=\"327\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"327\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">3</text><circle cx=\"360\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-red\"/><text x=\"360\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">4</text><circle cx=\"393\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-green\"/><text x=\"393\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-green\">5</text><circle cx=\"426\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-blue\"/><text x=\"426\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">6</text><circle cx=\"459\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-red\"/><text x=\"459\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-red\">7</text><circle cx=\"492\" cy=\"40\" r=\"7\" fill=\"currentColor\" class=\"f-green\"/><text x=\"492\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" class=\"t-green\">8</text><text x=\"8\" y=\"45\" font-size=\"14\">…</text><text x=\"500\" y=\"45\" font-size=\"14\">…</text><rect x=\"18\" y=\"100\" width=\"152\" height=\"74\" rx=\"12\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.10\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"18\" y=\"100\" width=\"152\" height=\"74\" rx=\"12\" fill=\"none\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.6\"/><text x=\"94\" y=\"124\" text-anchor=\"middle\" font-size=\"15\" class=\"t-blue\">[0]</text><text x=\"94\" y=\"150\" text-anchor=\"middle\" font-size=\"13\">{…, −6, −3, 0, 3, 6, …}</text><text x=\"94\" y=\"167\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">remainder 0</text><rect x=\"184\" y=\"100\" width=\"152\" height=\"74\" rx=\"12\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.10\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"184\" y=\"100\" width=\"152\" height=\"74\" rx=\"12\" fill=\"none\" stroke=\"currentColor\" class=\"s-red\" stroke-width=\"1.6\"/><text x=\"260\" y=\"124\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">[1]</text><text x=\"260\" y=\"150\" text-anchor=\"middle\" font-size=\"13\">{…, −5, −2, 1, 4, 7, …}</text><text x=\"260\" y=\"167\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">remainder 1</text><rect x=\"350\" y=\"100\" width=\"152\" height=\"74\" rx=\"12\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.10\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"350\" y=\"100\" width=\"152\" height=\"74\" rx=\"12\" fill=\"none\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.6\"/><text x=\"426\" y=\"124\" text-anchor=\"middle\" font-size=\"15\" class=\"t-green\">[2]</text><text x=\"426\" y=\"150\" text-anchor=\"middle\" font-size=\"13\">{…, −4, −1, 2, 5, 8, …}</text><text x=\"426\" y=\"167\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">remainder 2</text></svg>",
  ord_hasse12: "<svg viewBox=\"0 0 520 282\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"257.2\" y1=\"250.4\" x2=\"182.8\" y2=\"194.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"274.1\" y1=\"244.5\" x2=\"285.9\" y2=\"200.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"254.9\" y1=\"254.6\" x2=\"75.1\" y2=\"190.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"283.9\" y1=\"252.0\" x2=\"386.1\" y2=\"193.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"285.1\" y1=\"254.6\" x2=\"464.9\" y2=\"190.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"172.1\" y1=\"169.1\" x2=\"177.9\" y2=\"125.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"182.8\" y1=\"175.4\" x2=\"257.2\" y2=\"119.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"158.3\" y1=\"174.1\" x2=\"101.7\" y2=\"120.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"285.9\" y1=\"169.5\" x2=\"274.1\" y2=\"125.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"300.0\" y1=\"172.5\" x2=\"340.0\" y2=\"122.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"174.1\" y1=\"95.1\" x2=\"155.9\" y2=\"49.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"190.0\" y1=\"97.5\" x2=\"230.0\" y2=\"47.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"65.9\" y1=\"170.1\" x2=\"84.1\" y2=\"124.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"264.1\" y1=\"95.1\" x2=\"245.9\" y2=\"49.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"270\" cy=\"260\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-green\"/><text x=\"270\" y=\"265\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">1</text><circle cx=\"60\" cy=\"185\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"60\" y=\"190\" text-anchor=\"middle\" font-size=\"14\">5</text><circle cx=\"170\" cy=\"185\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"170\" y=\"190\" text-anchor=\"middle\" font-size=\"14\">2</text><circle cx=\"290\" cy=\"185\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"290\" y=\"190\" text-anchor=\"middle\" font-size=\"14\">3</text><circle cx=\"400\" cy=\"185\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"400\" y=\"190\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">7</text><circle cx=\"480\" cy=\"185\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"480\" y=\"190\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">11</text><circle cx=\"90\" cy=\"110\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"90\" y=\"115\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">10</text><circle cx=\"180\" cy=\"110\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"180\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">4</text><circle cx=\"270\" cy=\"110\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"270\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">6</text><circle cx=\"350\" cy=\"110\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"350\" y=\"115\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">9</text><circle cx=\"150\" cy=\"35\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"150\" y=\"40\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">8</text><circle cx=\"240\" cy=\"35\" r=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"240\" y=\"40\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">12</text></svg>",
  ord_hasse_steps: "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"109.2\" y1=\"196.9\" x2=\"60.8\" y2=\"138.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M60.8,138.1 L68.9,142.0 L63.0,146.8 Z\" fill=\"currentColor\"/><line x1=\"130.8\" y1=\"196.9\" x2=\"179.2\" y2=\"138.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M179.2,138.1 L177.0,146.8 L171.1,142.0 Z\" fill=\"currentColor\"/><line x1=\"60.8\" y1=\"111.9\" x2=\"109.2\" y2=\"53.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M109.2,53.1 L107.0,61.8 L101.1,57.0 Z\" fill=\"currentColor\"/><line x1=\"179.2\" y1=\"111.9\" x2=\"130.8\" y2=\"53.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M130.8,53.1 L138.9,57.0 L133.0,61.8 Z\" fill=\"currentColor\"/><line x1=\"120.0\" y1=\"193.0\" x2=\"120.0\" y2=\"57.0\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-red\" stroke-dasharray=\"5 4\"/><path d=\"M120.0,57.0 L123.8,65.1 L116.2,65.1 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M110.7,227.0 C96.7,261.0 143.3,261.0 129.3,227.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-red\"/><path d=\"M129.3,227.0 L136.0,233.1 L128.9,236.0 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M33.0,115.7 C-1.0,101.7 -1.0,148.3 33.0,134.3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-red\"/><path d=\"M33.0,134.3 L26.9,141.0 L24.0,133.9 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M207.0,134.3 C241.0,148.3 241.0,101.7 207.0,115.7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-red\"/><path d=\"M207.0,115.7 L213.1,109.0 L216.0,116.1 Z\" fill=\"currentColor\" class=\"f-red\"/><path d=\"M129.3,23.0 C143.3,-11.0 96.7,-11.0 110.7,23.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-red\"/><path d=\"M110.7,23.0 L104.0,16.9 L111.1,14.0 Z\" fill=\"currentColor\" class=\"f-red\"/><line x1=\"389.2\" y1=\"196.9\" x2=\"340.8\" y2=\"138.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"410.8\" y1=\"196.9\" x2=\"459.2\" y2=\"138.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"340.8\" y1=\"111.9\" x2=\"389.2\" y2=\"53.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"459.2\" y1=\"111.9\" x2=\"410.8\" y2=\"53.1\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"120\" cy=\"210\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"120\" y=\"215\" text-anchor=\"middle\" font-size=\"14\">1</text><circle cx=\"50\" cy=\"125\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"50\" y=\"130\" text-anchor=\"middle\" font-size=\"14\">2</text><circle cx=\"190\" cy=\"125\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"190\" y=\"130\" text-anchor=\"middle\" font-size=\"14\">3</text><circle cx=\"120\" cy=\"40\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"120\" y=\"45\" text-anchor=\"middle\" font-size=\"14\">6</text><circle cx=\"400\" cy=\"210\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"400\" y=\"215\" text-anchor=\"middle\" font-size=\"14\">1</text><circle cx=\"330\" cy=\"125\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"330\" y=\"130\" text-anchor=\"middle\" font-size=\"14\">2</text><circle cx=\"470\" cy=\"125\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"470\" y=\"130\" text-anchor=\"middle\" font-size=\"14\">3</text><circle cx=\"400\" cy=\"40\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"400\" y=\"45\" text-anchor=\"middle\" font-size=\"14\">6</text><text x=\"120\" y=\"292\" text-anchor=\"middle\" font-size=\"13\">digraph of “divides”</text><text x=\"400\" y=\"292\" text-anchor=\"middle\" font-size=\"13\">Hasse diagram</text><text x=\"260\" y=\"130\" text-anchor=\"middle\" font-size=\"26\">⟹</text></svg>",
  ord_topo: "<svg viewBox=\"0 0 520 192\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"102.5\" y1=\"75.0\" x2=\"167.5\" y2=\"45.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M167.5,45.0 L161.7,51.9 L158.5,44.9 Z\" fill=\"currentColor\"/><line x1=\"102.5\" y1=\"105.0\" x2=\"167.5\" y2=\"135.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M167.5,135.0 L158.5,135.1 L161.7,128.1 Z\" fill=\"currentColor\"/><line x1=\"252.0\" y1=\"150.0\" x2=\"278.0\" y2=\"150.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M278.0,150.0 L269.9,153.8 L269.9,146.2 Z\" fill=\"currentColor\"/><line x1=\"252.0\" y1=\"30.0\" x2=\"278.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M278.0,30.0 L269.9,33.8 L269.9,26.2 Z\" fill=\"currentColor\"/><line x1=\"382.0\" y1=\"150.0\" x2=\"403.0\" y2=\"150.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M403.0,150.0 L394.9,153.8 L394.9,146.2 Z\" fill=\"currentColor\"/><line x1=\"455.0\" y1=\"135.0\" x2=\"455.0\" y2=\"45.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M455.0,45.0 L458.8,53.1 L451.2,53.1 Z\" fill=\"currentColor\"/><line x1=\"382.0\" y1=\"30.0\" x2=\"403.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M403.0,30.0 L394.9,33.8 L394.9,26.2 Z\" fill=\"currentColor\"/><rect x=\"18\" y=\"75\" width=\"104\" height=\"30\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"70\" y=\"95\" text-anchor=\"middle\" font-size=\"12\">LoadConfig</text><rect x=\"148\" y=\"15\" width=\"104\" height=\"30\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"200\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">InitAudio</text><rect x=\"148\" y=\"135\" width=\"104\" height=\"30\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"200\" y=\"155\" text-anchor=\"middle\" font-size=\"12\">InitRenderer</text><rect x=\"278\" y=\"135\" width=\"104\" height=\"30\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"330\" y=\"155\" text-anchor=\"middle\" font-size=\"12\">LoadTextures</text><rect x=\"278\" y=\"15\" width=\"104\" height=\"30\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"330\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">LoadSounds</text><rect x=\"403\" y=\"135\" width=\"104\" height=\"30\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"455\" y=\"155\" text-anchor=\"middle\" font-size=\"12\">BuildMaterials</text><rect x=\"403\" y=\"15\" width=\"104\" height=\"30\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"455\" y=\"35\" text-anchor=\"middle\" font-size=\"12\">SpawnLevel</text><text x=\"260\" y=\"188\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">an arrow u → v means “u must finish before v starts”</text></svg>",
};
// </figures>

export const lesson: Lesson = {
  id: 'dm-equivalence-orders',
  title: 'Equivalence Relations and Partial Orders',
  summary: 'Two kinds of relations that organise everything: equivalences that sort a set into classes, and partial orders that arrange it into layers — plus Hasse diagrams and topological sorting for build and task order.',
  minutes: 19,
  objectives: [
    'Recognise and prove equivalence relations, with congruence mod $n$ as the key example',
    'Compute equivalence classes and explain why they always form a partition',
    'Recognise partial orders and total orders, and identify comparable, minimal and maximal elements',
    'Draw and read Hasse diagrams such as divisibility on $\\{1, \\dots, 12\\}$',
    'Produce a topological sort of a dependency graph by hand and with Kahn\'s algorithm in C++',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Equivalence relations: "the same, in the way that matters"',
      blocks: [
        {
          type: 'p',
          text: 'Two integers can be "the same" without being equal: $3$ and $17$ are both odd; two save files can be "the same" level even if timestamps differ; two strings can hash to the same bucket. Each of these is a relation that behaves like equality in exactly three ways, which the previous lesson named.',
        },
        {
          type: 'definition',
          term: 'Equivalence relation',
          text: 'A relation $\\sim$ on a set $A$ is an [[dm-equivalence-relation]] if it is [[dm-reflexive]] ($a \\sim a$), [[dm-symmetric-relation|symmetric]] ($a \\sim b \\Rightarrow b \\sim a$) and [[dm-transitive|transitive]] ($a \\sim b$ and $b \\sim c \\Rightarrow a \\sim c$).',
        },
        {
          type: 'list',
          items: [
            'Equality on any set (the finest possible equivalence).',
            '"Has the same length as" on strings; "was born in the same month as" on people.',
            '$\\lfloor x \\rfloor = \\lfloor y \\rfloor$ on $\\mathbb{R}$: "lies in the same unit cell" — how a game decides that two positions are in the same grid tile.',
            '**Congruence mod $n$** ([[dm-congruence]]) on $\\mathbb{Z}$: $a \\equiv b \\pmod{n}$ when $n \\mid (a - b)$. With $n = 2$ it is "same parity".',
          ],
        },
        {
          type: 'theorem',
          name: 'Every function defines an equivalence',
          text: 'For any function $f: A \\to B$, the relation $a \\sim b \\iff f(a) = f(b)$ is an equivalence relation on $A$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this theorem is almost obvious — and very useful',
          text: '$f(a) = f(a)$, $f(a) = f(b) \\Rightarrow f(b) = f(a)$, and $f(a) = f(b) = f(c) \\Rightarrow f(a) = f(c)$: the three properties are inherited directly from equality of outputs. So "same length", "same floor", "same remainder" and "same hash value" are all equivalences for free. In practice, most equivalences you meet are of this form: pick the feature you care about and call things equivalent when the feature agrees.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which of these relations is **not** an equivalence relation?',
      options: [
        { text: '$a \\sim b \\iff |a - b| \\le 1$, on $\\mathbb{Z}$', correct: true, why: 'Reflexive and symmetric, but not transitive: $0 \\sim 1$ and $1 \\sim 2$, yet $|0 - 2| = 2 > 1$.' },
        { text: '$x \\sim y \\iff \\lfloor x \\rfloor = \\lfloor y \\rfloor$, on $\\mathbb{R}$', why: 'It has the form $f(x) = f(y)$ with $f = \\lfloor \\cdot \\rfloor$, so it is an equivalence. Its classes are the intervals $[n, n+1)$.' },
        { text: '$a \\sim b \\iff 5 \\mid (a - b)$, on $\\mathbb{Z}$', why: 'This is congruence mod $5$, the model equivalence relation, with five classes.' },
        { text: '$s \\sim t \\iff s$ and $t$ have the same length, on strings', why: 'Same length means $f(s) = f(t)$ with $f$ = length, so it is an equivalence.' },
      ],
      explanation: '"Is close to" is the classic trap: closeness chains. $0$ is close to $1$, $1$ is close to $2$, … and by transitivity everything would be close to everything. The other three all have the form "$f(a) = f(b)$" for some function, which guarantees an equivalence.',
    },
    {
      kind: 'concept',
      title: 'Equivalence classes and partitions',
      blocks: [
        {
          type: 'definition',
          term: 'Equivalence class',
          text: 'The [[dm-equivalence-class]] of $a$ is $[a] = \\{x \\in A : x \\sim a\\}$, everything equivalent to $a$. Any element of a class is a **representative** of it: if $b \\sim a$ then $[b] = [a]$.',
        },
        {
          type: 'derivation',
          title: 'Congruence mod $3$ is an equivalence relation',
          steps: [
            { tex: 'a - a = 0 = 3 \\cdot 0 \\implies a \\equiv a', why: '**Reflexive:** $3$ divides $0$.' },
            { tex: 'a - b = 3k \\implies b - a = 3(-k)', why: '**Symmetric:** if $3$ divides $a - b$, it divides the negative.' },
            { tex: 'a - b = 3k,\\; b - c = 3\\ell \\implies a - c = 3(k + \\ell)', why: '**Transitive:** add the equations; $b$ cancels.' },
            { tex: '[0] = \\{\\dots, -3, 0, 3, 6, \\dots\\},\\; [1] = \\{\\dots, -2, 1, 4, \\dots\\},\\; [2] = \\{\\dots, -1, 2, 5, \\dots\\}', why: 'Every integer leaves remainder $0$, $1$ or $2$ when divided by $3$, and two integers are congruent exactly when their remainders agree. So there are exactly three classes.' },
          ],
          result: 'The same proof with $3$ replaced by $n$ shows congruence mod $n$ is an equivalence with $n$ classes $[0], [1], \\dots, [n-1]$. The Number Theory unit builds an arithmetic on these classes.',
        },
        {
          type: 'figure',
          svg: FIG.eq_mod3,
          alt: 'The integers from −6 to 8 on a number line, coloured blue, red and green in a repeating pattern by remainder mod 3, with three boxes below listing the classes [0], [1] and [2].',
          caption: 'Congruence mod $3$ colours the integers in three repeating colours. Each colour is one equivalence class; every integer gets exactly one colour.',
        },
        {
          type: 'definition',
          term: 'Partition',
          text: 'A [[dm-partition]] of $A$ is a collection of non-empty subsets ("blocks") of $A$ such that every element of $A$ lies in **exactly one** block: the blocks are pairwise disjoint and their union is $A$.',
        },
        {
          type: 'theorem',
          name: 'Equivalence relations and partitions are the same thing',
          text: 'The equivalence classes of any equivalence relation on $A$ form a partition of $A$. Conversely, every partition of $A$ comes from exactly one equivalence relation: "$a \\sim b$ iff $a$ and $b$ are in the same block".',
        },
        {
          type: 'derivation',
          title: 'Key step: two classes are equal or disjoint',
          steps: [
            { tex: '\\text{Suppose } c \\in [a] \\cap [b].', why: 'Assume the classes share at least one element; we show they are then identical.' },
            { tex: 'c \\sim a \\text{ and } c \\sim b \\implies a \\sim c \\sim b', why: 'Definition of the classes, then symmetry to flip $c \\sim a$ into $a \\sim c$.' },
            { tex: '\\implies a \\sim b', why: 'Transitivity.' },
            { tex: 'x \\in [a] \\implies x \\sim a \\sim b \\implies x \\in [b]', why: 'Any element of $[a]$ is in $[b]$ by transitivity, so $[a] \\subseteq [b]$; the same argument with $a, b$ swapped gives $[b] \\subseteq [a]$.' },
          ],
          result: 'Overlapping classes coincide. Reflexivity puts each $a$ in its own class $[a]$, so the classes cover $A$ and are non-empty: a partition.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Equivalence classes in games',
          text: 'The tiles of a map split into **connected regions** — "can walk from one to the other" is an equivalence relation, and its classes are islands. Flood fill finds one class; the union–find data structure (used for Kruskal\'s algorithm in the Trees unit) maintains the whole partition as you merge regions, answering "same class?" almost instantly. Collision broad-phases partition objects by grid cell, using $\\lfloor x / \\text{cellSize} \\rfloor$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'On $A = \\{1, 2, \\dots, 20\\}$, let $a \\sim b$ iff $a \\equiv b \\pmod{6}$. How many elements are in the class $[2]$?',
      hint: 'List the numbers in $\\{1, \\dots, 20\\}$ that leave remainder $2$ when divided by $6$.',
      label: '$|[2]| =$',
      answer: '4',
      explanation: '$[2] = \\{2, 8, 14, 20\\}$: start at $2$ and add $6$ until you leave $A$. The relation restricted to $A$ has six classes, of sizes $4, 4, 3, 3, 3, 3$ for remainders $1, 2, 3, 4, 5, 0$ — they are disjoint and together cover all $20$ elements, as a partition must.',
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: $\\{\\{1, 2\\}, \\{2, 3\\}, \\{4\\}\\}$ is a partition of $\\{1, 2, 3, 4\\}$.',
      answer: false,
      explanation: 'The blocks cover every element, but $2$ lies in two blocks. A partition needs each element in **exactly one** block, which mirrors the theorem that two equivalence classes are equal or disjoint. If these were classes of an equivalence, $1 \\sim 2$ and $2 \\sim 3$ would force $1 \\sim 3$ by transitivity, merging the first two blocks into $\\{1, 2, 3\\}$.',
    },
    {
      kind: 'concept',
      title: 'Partial orders',
      blocks: [
        {
          type: 'p',
          text: 'Equivalence relations group things together; orders line things up. Replace symmetry by its opposite, antisymmetry, and you get the general notion of "comes before or equals".',
        },
        {
          type: 'definition',
          term: 'Partial order',
          text: 'A relation $\\preceq$ on $S$ is a [[dm-partial-order]] if it is reflexive, [[dm-antisymmetric]] and transitive. The pair $(S, \\preceq)$ is a **poset**. Elements $a, b$ are **comparable** if $a \\preceq b$ or $b \\preceq a$, and **incomparable** otherwise.',
        },
        {
          type: 'table',
          headers: ['Poset', 'Comparable example', 'Incomparable example'],
          rows: [
            ['$(\\mathbb{R}, \\le)$', '$2 \\le 3.5$', 'none — every pair is comparable'],
            ['$(\\mathbb{Z}^{+}, \\mid)$', '$3 \\mid 12$', '$4$ and $6$: neither divides the other'],
            ['$(\\mathcal{P}(\\{a, b, c\\}), \\subseteq)$', '$\\{a\\} \\subseteq \\{a, c\\}$', '$\\{a\\}$ and $\\{b, c\\}$'],
            ['tasks, "must be done no later than"', 'compile before link', 'texture loading vs. sound loading'],
          ],
        },
        {
          type: 'definition',
          term: 'Total order',
          text: 'A partial order in which **every** pair of elements is comparable is a [[dm-total-order]] (or linear order). $\\le$ on $\\mathbb{R}$ is total; alphabetical (lexicographic) order on strings is total; divisibility and $\\subseteq$ are not.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why antisymmetry is the right axiom',
          text: 'Antisymmetry forbids cycles of length two: if $a$ comes before $b$ and $b$ before $a$, they must be the same thing. Combined with transitivity it forbids **all** cycles $a_1 \\preceq a_2 \\preceq \\cdots \\preceq a_k \\preceq a_1$ among distinct elements — transitivity gives $a_1 \\preceq a_k$ and $a_k \\preceq a_1$, so $a_1 = a_k$. That is exactly why a dependency graph with a cycle ("A needs B, B needs A") cannot be scheduled.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Total orders in C++',
          text: '`std::sort` and `std::map` require a **strict weak ordering** from your comparator: irreflexive, transitive, and with "neither $a < b$ nor $b < a$" behaving as an equivalence. A comparator like `return a.x <= b.x;` breaks irreflexivity and causes undefined behaviour — sometimes a crash inside `std::sort`. The mathematics of this lesson is literally in the standard library\'s contract.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Hasse diagrams',
      blocks: [
        {
          type: 'p',
          text: 'The digraph of a partial order is cluttered: a loop at every vertex (reflexivity) and a shortcut for every path (transitivity). A [[dm-hasse-diagram]] throws away everything the axioms let you reconstruct.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Delete the loops', text: 'Reflexivity says they are all there anyway.' },
            { title: 'Delete the implied edges', text: 'Keep $a \\to b$ only if $b$ **covers** $a$: $a \\prec b$ with nothing strictly in between. Transitivity restores the rest.' },
            { title: 'Point everything up', text: 'Draw each element above the ones it follows, then drop the arrowheads: "up" means "greater".' },
          ],
        },
        {
          type: 'figure',
          svg: FIG.ord_hasse_steps,
          alt: 'Left: the directed graph of divisibility on {1, 2, 3, 6} with red loops at every vertex and a red dashed arrow from 1 to 6. Right: the Hasse diagram, a diamond with 1 at the bottom, 2 and 3 in the middle and 6 at the top.',
          caption: 'Divisibility on $\\{1, 2, 3, 6\\}$. The red parts (loops and the implied edge $1 \\to 6$) are removed; $a \\preceq b$ exactly when you can climb from $a$ to $b$.',
        },
        {
          type: 'figure',
          svg: FIG.ord_hasse12,
          alt: 'Hasse diagram of divisibility on 1 to 12. 1 at the bottom; primes 5, 2, 3, 7, 11 above it; 10, 4, 6, 9 on the next level; 8 and 12 at the top. Maximal elements 7, 8, 9, 10, 11, 12 are orange and the least element 1 is green.',
          caption: 'Divisibility on $\\{1, \\dots, 12\\}$: $14$ edges replace the $23$ arrows between distinct elements (plus $12$ loops) of the full digraph. Orange elements are maximal: nothing in the set lies above them.',
        },
        {
          type: 'definition',
          term: 'Extremal elements',
          text: '$m$ is **maximal** if no element is strictly above it, and **minimal** if none is strictly below. A **greatest** element is above *everything*; a **least** element is below everything. A greatest element is always maximal (and unique), but a poset can have many maximal elements and no greatest one.',
        },
        {
          type: 'p',
          text: 'In the $\\{1, \\dots, 12\\}$ diagram, $1$ is the least element (it divides everything) and the only minimal one. There is **no** greatest element: $8$ and $12$ are both at the top, but $8 \\nmid 12$. The maximal elements include $7$ and $11$, which sit low in the picture — "maximal" means nothing is above, not "drawn high".',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors ask you to (1) draw the Hasse diagram, (2) list maximal/minimal elements, (3) decide whether greatest/least elements exist, and (4) find upper bounds of a pair. Read everything off the picture by **climbing along edges**, never by height alone.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'How many maximal elements does the poset $(\\{1, 2, \\dots, 12\\}, \\mid)$ have?',
      hint: '$m$ is maximal if no **other** element of the set is a multiple of $m$.',
      answer: '6',
      explanation: 'An element $m \\le 12$ is maximal when $2m > 12$, i.e. $m \\ge 7$, because $2m$ would otherwise be a larger multiple inside the set. So the maximal elements are $7, 8, 9, 10, 11, 12$ — six of them. Since there is more than one maximal element, there is no greatest element.',
    },
    {
      kind: 'mcq',
      prompt: 'In the poset $(\\{1, \\dots, 12\\}, \\mid)$, which pair is **incomparable**?',
      options: [
        { text: '$4$ and $6$', correct: true, why: '$4 \\nmid 6$ and $6 \\nmid 4$. In the Hasse diagram there is no upward path between them.' },
        { text: '$2$ and $8$', why: '$2 \\mid 8$: climb $2 \\to 4 \\to 8$.' },
        { text: '$3$ and $12$', why: '$3 \\mid 12$: climb $3 \\to 6 \\to 12$.' },
        { text: '$1$ and $11$', why: '$1$ divides everything, so it is comparable with every element.' },
      ],
      explanation: 'Two elements are comparable exactly when one can be reached from the other by moving **up** the edges of the Hasse diagram. $4$ and $6$ share the upper bound $12$ and the lower bound $2$, but neither divides the other — so divisibility is a partial, not total, order.',
    },
    {
      kind: 'error',
      prompt: 'A student argues that divisibility is a partial order on the **nonzero** integers. Tap the first incorrect line.',
      lines: [
        'Reflexive: $a = a \\cdot 1$, so $a \\mid a$.',
        'Transitive: if $b = ak$ and $c = b\\ell$, then $c = a(k\\ell)$, so $a \\mid c$.',
        'Antisymmetric: if $a \\mid b$ and $b \\mid a$, then $b = ak$ and $a = b\\ell$, so $a = ak\\ell$ and (since $a \\ne 0$) $k\\ell = 1$.',
        'Since $k$ and $\\ell$ are integers with $k\\ell = 1$, we get $k = \\ell = 1$.',
        'So $b = a$, and divisibility is a partial order on the nonzero integers.',
      ],
      errorLines: [4],
      explanation: 'Integers with $k\\ell = 1$ can also be $k = \\ell = -1$. Then $b = -a$, and indeed $2 \\mid -2$ and $-2 \\mid 2$ with $2 \\ne -2$. So divisibility is **not** antisymmetric on the nonzero integers, and not a partial order there. Restricting to the positive integers rules out $-1$ and makes the argument correct.',
    },
    {
      kind: 'concept',
      title: 'Topological sorting: from a partial order to a schedule',
      blocks: [
        {
          type: 'p',
          text: 'A build system, a quest log and an engine\'s startup sequence all face the same problem. Tasks are partially ordered by dependencies — some must precede others, many are unrelated — but a single thread must run them **one at a time**. We need a total order that respects the partial order.',
        },
        {
          type: 'definition',
          term: 'Topological sort',
          text: 'A [[dm-topological-sort]] (or **linear extension**) of a finite poset $(S, \\preceq)$ is a listing $s_1, s_2, \\dots, s_n$ of all its elements such that $s_i \\preceq s_j$ implies $i \\le j$: nothing appears before something it depends on.',
        },
        {
          type: 'theorem',
          name: 'Every finite poset has a topological sort',
          text: 'A finite non-empty poset always has a minimal element. Remove one, list it first, and repeat on what remains (still a poset).',
        },
        {
          type: 'p',
          text: 'Why a minimal element exists: start anywhere and keep stepping to a strictly smaller element. Without cycles you can never revisit an element, and the set is finite, so the walk must stop — at a minimal element. This argument is also the algorithm.',
        },
        {
          type: 'figure',
          svg: FIG.ord_topo,
          alt: 'A dependency graph of seven engine start-up tasks: LoadConfig points to InitAudio and InitRenderer; InitAudio to LoadSounds; InitRenderer to LoadTextures, then BuildMaterials; LoadSounds and BuildMaterials both point to SpawnLevel.',
          caption: 'Engine start-up tasks. The audio branch and the graphics branch are independent (incomparable), so several orders are valid; any valid order starts with LoadConfig and ends with SpawnLevel.',
        },
        {
          type: 'code',
          title: 'topo.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <queue>
#include <string>
#include <vector>

int main() {
    std::vector<std::string> task = {"LoadConfig", "InitAudio", "InitRenderer",
                                     "LoadTextures", "LoadSounds", "BuildMaterials", "SpawnLevel"};
    // Edge u -> v means "u must finish before v starts".
    std::vector<std::pair<int, int>> deps = {
        {0, 1}, {0, 2}, {2, 3}, {1, 4}, {3, 5}, {5, 6}, {4, 6}};

    const int n = static_cast<int>(task.size());
    std::vector<std::vector<int>> next(n);
    std::vector<int> waitingOn(n, 0);              // in-degree
    for (auto [u, v] : deps) { next[u].push_back(v); ++waitingOn[v]; }

    // Kahn's algorithm: repeatedly run a task with no unfinished prerequisites
    // (a minimal element). The min-heap picks the lowest index to break ties.
    std::priority_queue<int, std::vector<int>, std::greater<int>> ready;
    for (int v = 0; v < n; ++v)
        if (waitingOn[v] == 0) ready.push(v);

    int done = 0;
    while (!ready.empty()) {
        int u = ready.top(); ready.pop();
        std::printf("%d. %s\\n", ++done, task[u].c_str());
        for (int v : next[u])
            if (--waitingOn[v] == 0) ready.push(v);
    }
    if (done < n) std::printf("cycle detected: no valid order exists\\n");
}`,
          output: `1. LoadConfig
2. InitAudio
3. InitRenderer
4. LoadTextures
5. LoadSounds
6. BuildMaterials
7. SpawnLevel`,
          annotations: [
            { lines: '10-11', text: 'We store only the **covering** pairs — the Hasse diagram edges. The full order is their transitive, reflexive closure.' },
            { lines: 15, text: '`waitingOn[v]` counts unfinished prerequisites. A task with count $0$ is a minimal element of what remains.' },
            { lines: '25-29', text: 'Run a minimal task, then "remove" it: each successor has one fewer prerequisite. Total work is $O(n + e)$ for $n$ tasks and $e$ dependencies.' },
            { lines: 31, text: 'If some tasks never become ready, they wait on each other in a cycle — the relation was not a partial order.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Where you will meet this',
          text: '`make`, CMake and Unreal\'s build tool topologically sort compilation units; a job system orders frame tasks (input → gameplay → physics → animation → rendering); a quest designer\'s prerequisite graph must be acyclic or some quest becomes unreachable. Spreadsheets recompute cells in topological order of their formula references — and report a "circular reference" when there is none.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'A level loader has these rules: **Renderer** before **Textures**; **Config** before **Renderer**; **Materials** before **Level**; **Textures** before **Materials**; **Config** before **Level**. Arrange the tasks in the only valid order.',
      lines: ['Config', 'Renderer', 'Textures', 'Materials', 'Level'],
      explanation: 'Find a minimal element first: Config has no prerequisites. After removing it, only Renderer is ready; then only Textures; then only Materials; then Level. At every stage exactly one task is minimal, so the topological sort is unique. (The rule "Config before Level" is implied by transitivity — it would not appear in the Hasse diagram.)',
    },
    {
      kind: 'numeric',
      prompt: 'Four tasks $A, B, C, D$ have the rules: $A$ before $C$, $B$ before $C$, $B$ before $D$. How many different topological sorts (valid orders of all four tasks) are there?',
      hint: 'Either list the orders systematically by which task goes first (only $A$ or $B$ can), or count all $24$ orderings and keep the valid ones.',
      answer: '5',
      explanation: 'The first task must be minimal: $A$ or $B$. **Starting with $A$:** then $B$ must come next (both $C$ and $D$ wait on $B$), followed by $C, D$ in either order: $ABCD$, $ABDC$. **Starting with $B$:** the remaining poset has $A$ before $C$ and $D$ free: $BACD$, $BADC$, $BDAC$. Total $2 + 3 = 5$. A brute-force check over all $4! = 24$ permutations agrees.',
    },
  ],
  takeaways: [
    'An equivalence relation is reflexive, symmetric and transitive; "$f(a) = f(b)$" is always one, and congruence mod $n$ is the key example.',
    'Equivalence classes are equal or disjoint and cover the set, so they form a partition; every partition comes from an equivalence relation.',
    'A partial order is reflexive, antisymmetric and transitive; a total order also makes every pair comparable. Antisymmetry plus transitivity rules out cycles.',
    'A Hasse diagram keeps only covering edges, drawn upward. Maximal ≠ greatest: a poset can have many maximal elements and no greatest one.',
    'A topological sort lists a finite poset compatibly with its order. Kahn\'s algorithm repeatedly removes a minimal element in $O(n + e)$ and detects cycles.',
  ],
  reading: [
    {
      title: 'Levin, Discrete Mathematics: An Open Introduction',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Free open textbook; its treatment of sets and functions provides further practice with partitions and classes.',
    },
    {
      title: 'Wikipedia — Topological sorting',
      url: 'https://en.wikipedia.org/wiki/Topological_sorting',
      source: 'wikipedia',
      note: 'Kahn\'s algorithm, the depth-first-search alternative, and applications to scheduling and build systems.',
    },
    {
      title: 'Wikipedia — Hasse diagram',
      url: 'https://en.wikipedia.org/wiki/Hasse_diagram',
      source: 'wikipedia',
      note: 'Many example diagrams, including divisors and power sets, and the difficulty of drawing them without crossings.',
    },
    {
      title: 'MIT 6.042J Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The notes on partial orders and scheduling discuss parallel task scheduling with chains and antichains.',
    },
  ],
};
