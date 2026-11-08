import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  rel_closure: "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"78.0\" y1=\"120.0\" x2=\"167.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M167.0,120.0 L158.9,123.8 L158.9,116.2 Z\" fill=\"currentColor\"/><line x1=\"203.0\" y1=\"120.0\" x2=\"297.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M297.0,120.0 L288.9,123.8 L288.9,116.2 Z\" fill=\"currentColor\"/><line x1=\"333.0\" y1=\"120.0\" x2=\"422.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M422.0,120.0 L413.9,123.8 L413.9,116.2 Z\" fill=\"currentColor\"/><path d=\"M77.2,114.6 Q187.5,80.0 297.8,114.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-orange\" stroke-dasharray=\"5 4\"/><path d=\"M297.8,114.6 L288.9,115.8 L291.2,108.5 Z\" fill=\"currentColor\" class=\"f-orange\"/><path d=\"M202.2,125.4 Q312.5,160.0 422.8,125.4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-orange\" stroke-dasharray=\"5 4\"/><path d=\"M422.8,125.4 L416.2,131.5 L413.9,124.2 Z\" fill=\"currentColor\" class=\"f-orange\"/><path d=\"M76.3,112.3 Q250.0,30.0 423.7,112.3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-orange\" stroke-dasharray=\"5 4\"/><path d=\"M423.7,112.3 L414.7,112.3 L418.0,105.3 Z\" fill=\"currentColor\" class=\"f-orange\"/><circle cx=\"60\" cy=\"120\" r=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"60\" y=\"125\" text-anchor=\"middle\" font-size=\"14\">1</text><circle cx=\"185\" cy=\"120\" r=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"185\" y=\"125\" text-anchor=\"middle\" font-size=\"14\">2</text><circle cx=\"315\" cy=\"120\" r=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"315\" y=\"125\" text-anchor=\"middle\" font-size=\"14\">3</text><circle cx=\"440\" cy=\"120\" r=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"440\" y=\"125\" text-anchor=\"middle\" font-size=\"14\">4</text></svg>",
  rel_divides: "<svg viewBox=\"0 0 460 250\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"106.3\" y1=\"152.4\" x2=\"223.7\" y2=\"97.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M223.7,97.6 L217.9,104.5 L214.7,97.6 Z\" fill=\"currentColor\"/><line x1=\"107.1\" y1=\"165.7\" x2=\"222.9\" y2=\"204.3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M222.9,204.3 L214.0,205.4 L216.4,198.1 Z\" fill=\"currentColor\"/><line x1=\"108.0\" y1=\"160.0\" x2=\"372.0\" y2=\"160.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M372.0,160.0 L363.9,163.8 L363.9,156.2 Z\" fill=\"currentColor\"/><line x1=\"256.3\" y1=\"97.6\" x2=\"373.7\" y2=\"152.4\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M373.7,152.4 L364.7,152.4 L367.9,145.5 Z\" fill=\"currentColor\"/><path d=\"M72.0,150.1 C38.0,136.1 38.0,183.9 72.0,169.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M72.0,169.9 L65.9,176.5 L63.0,169.5 Z\" fill=\"currentColor\"/><path d=\"M249.9,72.0 C263.9,38.0 216.1,38.0 230.1,72.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M230.1,72.0 L223.5,65.9 L230.5,63.0 Z\" fill=\"currentColor\"/><path d=\"M230.1,228.0 C216.1,262.0 263.9,262.0 249.9,228.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M249.9,228.0 L256.5,234.1 L249.5,237.0 Z\" fill=\"currentColor\"/><path d=\"M408.0,169.9 C442.0,183.9 442.0,136.1 408.0,150.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M408.0,150.1 L414.1,143.5 L417.0,150.5 Z\" fill=\"currentColor\"/><circle cx=\"90\" cy=\"160\" r=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"90\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">1</text><circle cx=\"240\" cy=\"90\" r=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"240\" y=\"95\" text-anchor=\"middle\" font-size=\"14\">2</text><circle cx=\"240\" cy=\"210\" r=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"240\" y=\"215\" text-anchor=\"middle\" font-size=\"14\">3</text><circle cx=\"390\" cy=\"160\" r=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"390\" y=\"165\" text-anchor=\"middle\" font-size=\"14\">4</text></svg>",
  rel_props: "<svg viewBox=\"0 0 520 212\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.8,125.0 C5.8,159.0 50.3,159.0 36.3,125.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-blue\"/><path d=\"M36.3,125.0 L42.9,131.1 L35.8,134.0 Z\" fill=\"currentColor\" class=\"f-blue\"/><path d=\"M89.8,125.0 C75.8,159.0 120.3,159.0 106.3,125.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-blue\"/><path d=\"M106.3,125.0 L112.9,131.1 L105.8,134.0 Z\" fill=\"currentColor\" class=\"f-blue\"/><path d=\"M71.3,35.0 C85.3,1.0 40.8,1.0 54.8,35.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-blue\"/><path d=\"M54.8,35.0 L48.1,28.9 L55.2,26.0 Z\" fill=\"currentColor\" class=\"f-blue\"/><line x1=\"43.0\" y1=\"110.0\" x2=\"83.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M83.0,110.0 L74.9,113.8 L74.9,106.2 Z\" fill=\"currentColor\"/><path d=\"M172.4,114.1 Q193.0,120.0 213.6,114.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-green\"/><path d=\"M213.6,114.1 L206.8,120.0 L204.7,112.7 Z\" fill=\"currentColor\" class=\"f-green\"/><path d=\"M213.6,105.9 Q193.0,100.0 172.4,105.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-green\"/><path d=\"M172.4,105.9 L179.2,100.0 L181.3,107.3 Z\" fill=\"currentColor\" class=\"f-green\"/><path d=\"M168.8,99.6 Q184.1,85.0 189.3,64.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-green\"/><path d=\"M189.3,64.5 L191.0,73.4 L183.6,71.5 Z\" fill=\"currentColor\" class=\"f-green\"/><path d=\"M182.2,60.4 Q166.9,75.0 161.7,95.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-green\"/><path d=\"M161.7,95.5 L160.0,86.6 L167.4,88.5 Z\" fill=\"currentColor\" class=\"f-green\"/><line x1=\"303.0\" y1=\"110.0\" x2=\"343.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-purple\"/><path d=\"M343.0,110.0 L334.9,113.8 L334.9,106.2 Z\" fill=\"currentColor\" class=\"f-purple\"/><line x1=\"330.6\" y1=\"63.0\" x2=\"350.4\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-purple\"/><path d=\"M350.4,97.0 L343.0,91.9 L349.6,88.1 Z\" fill=\"currentColor\" class=\"f-purple\"/><path d=\"M279.8,125.0 C265.8,159.0 310.3,159.0 296.3,125.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M296.3,125.0 L302.9,131.1 L295.8,134.0 Z\" fill=\"currentColor\"/><line x1=\"425.6\" y1=\"97.0\" x2=\"445.4\" y2=\"63.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M445.4,63.0 L444.6,71.9 L438.0,68.1 Z\" fill=\"currentColor\"/><line x1=\"460.6\" y1=\"63.0\" x2=\"480.4\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M480.4,97.0 L473.0,91.9 L479.6,88.1 Z\" fill=\"currentColor\"/><line x1=\"433.0\" y1=\"110.0\" x2=\"473.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-orange\"/><path d=\"M473.0,110.0 L464.9,113.8 L464.9,106.2 Z\" fill=\"currentColor\" class=\"f-orange\"/><circle cx=\"28\" cy=\"110\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"28\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">a</text><circle cx=\"98\" cy=\"110\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"98\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">b</text><circle cx=\"63\" cy=\"50\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"63\" y=\"55\" text-anchor=\"middle\" font-size=\"14\">c</text><circle cx=\"158\" cy=\"110\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"158\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">a</text><circle cx=\"228\" cy=\"110\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"228\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">b</text><circle cx=\"193\" cy=\"50\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"193\" y=\"55\" text-anchor=\"middle\" font-size=\"14\">c</text><circle cx=\"288\" cy=\"110\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"288\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">a</text><circle cx=\"358\" cy=\"110\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"358\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">b</text><circle cx=\"323\" cy=\"50\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"323\" y=\"55\" text-anchor=\"middle\" font-size=\"14\">c</text><circle cx=\"418\" cy=\"110\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"418\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">a</text><circle cx=\"488\" cy=\"110\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"488\" y=\"115\" text-anchor=\"middle\" font-size=\"14\">b</text><circle cx=\"453\" cy=\"50\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"453\" y=\"55\" text-anchor=\"middle\" font-size=\"14\">c</text><text x=\"63\" y=\"186\" text-anchor=\"middle\" font-size=\"13\">reflexive</text><text x=\"63\" y=\"204\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">loops everywhere</text><text x=\"193\" y=\"186\" text-anchor=\"middle\" font-size=\"13\">symmetric</text><text x=\"193\" y=\"204\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">edges come in pairs</text><text x=\"323\" y=\"186\" text-anchor=\"middle\" font-size=\"13\">antisymmetric</text><text x=\"323\" y=\"204\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">no two-way edges</text><text x=\"453\" y=\"186\" text-anchor=\"middle\" font-size=\"13\">transitive</text><text x=\"453\" y=\"204\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">2-step path ⇒ shortcut</text></svg>",
  rel_qcount: "<svg viewBox=\"0 0 360 220\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M96.9,62.0 Q180.0,72.0 263.1,62.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M263.1,62.0 L255.5,66.8 L254.6,59.2 Z\" fill=\"currentColor\"/><path d=\"M263.1,58.0 Q180.0,48.0 96.9,58.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M96.9,58.0 L104.5,53.2 L105.4,60.8 Z\" fill=\"currentColor\"/><line x1=\"80.0\" y1=\"77.0\" x2=\"80.0\" y2=\"153.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M80.0,153.0 L76.2,144.9 L83.8,144.9 Z\" fill=\"currentColor\"/><line x1=\"97.0\" y1=\"170.0\" x2=\"263.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M263.0,170.0 L254.9,173.8 L254.9,166.2 Z\" fill=\"currentColor\"/><line x1=\"280.0\" y1=\"153.0\" x2=\"280.0\" y2=\"77.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M280.0,77.0 L283.8,85.1 L276.2,85.1 Z\" fill=\"currentColor\"/><path d=\"M297.0,69.3 C331.0,83.3 331.0,36.6 297.0,50.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M297.0,50.6 L303.1,44.0 L306.0,51.1 Z\" fill=\"currentColor\"/><path d=\"M63.0,160.7 C29.0,146.7 29.0,193.3 63.0,179.3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M63.0,179.3 L56.9,186.0 L54.0,178.9 Z\" fill=\"currentColor\"/><circle cx=\"80\" cy=\"60\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"80\" y=\"65\" text-anchor=\"middle\" font-size=\"14\">a</text><circle cx=\"280\" cy=\"60\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"280\" y=\"65\" text-anchor=\"middle\" font-size=\"14\">b</text><circle cx=\"80\" cy=\"170\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"80\" y=\"175\" text-anchor=\"middle\" font-size=\"14\">c</text><circle cx=\"280\" cy=\"170\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"280\" y=\"175\" text-anchor=\"middle\" font-size=\"14\">d</text></svg>",
  rel_qprops: "<svg viewBox=\"0 0 360 170\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M79.3,83.0 C93.3,49.0 46.6,49.0 60.6,83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M60.6,83.0 L54.0,76.9 L61.1,74.0 Z\" fill=\"currentColor\"/><path d=\"M189.3,83.0 C203.3,49.0 156.7,49.0 170.7,83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M170.7,83.0 L164.0,76.9 L171.1,74.0 Z\" fill=\"currentColor\"/><path d=\"M299.4,83.0 C313.4,49.0 266.6,49.0 280.6,83.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M280.6,83.0 L274.0,76.9 L281.1,74.0 Z\" fill=\"currentColor\"/><path d=\"M86.5,104.2 Q125.0,114.0 163.5,104.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M163.5,104.2 L156.6,109.9 L154.7,102.5 Z\" fill=\"currentColor\"/><path d=\"M163.5,95.8 Q125.0,86.0 86.5,95.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M86.5,95.8 L93.4,90.1 L95.3,97.5 Z\" fill=\"currentColor\"/><path d=\"M196.5,104.2 Q235.0,114.0 273.5,104.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M273.5,104.2 L266.6,109.9 L264.7,102.5 Z\" fill=\"currentColor\"/><path d=\"M273.5,95.8 Q235.0,86.0 196.5,95.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M196.5,95.8 L203.4,90.1 L205.3,97.5 Z\" fill=\"currentColor\"/><circle cx=\"70\" cy=\"100\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"70\" y=\"105\" text-anchor=\"middle\" font-size=\"14\">1</text><circle cx=\"180\" cy=\"100\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"180\" y=\"105\" text-anchor=\"middle\" font-size=\"14\">2</text><circle cx=\"290\" cy=\"100\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"290\" y=\"105\" text-anchor=\"middle\" font-size=\"14\">3</text></svg>",
  rel_square: "<svg viewBox=\"0 0 440 255\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"85.6\" y1=\"143.2\" x2=\"204.4\" y2=\"91.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M204.4,91.8 L198.5,98.5 L195.4,91.5 Z\" fill=\"currentColor\"/><line x1=\"220.0\" y1=\"102.0\" x2=\"220.0\" y2=\"208.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M220.0,208.0 L216.2,199.9 L223.8,199.9 Z\" fill=\"currentColor\"/><line x1=\"237.0\" y1=\"85.0\" x2=\"363.0\" y2=\"85.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M363.0,85.0 L354.9,88.8 L354.9,81.2 Z\" fill=\"currentColor\"/><line x1=\"204.8\" y1=\"217.4\" x2=\"85.2\" y2=\"157.6\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M85.2,157.6 L94.2,157.8 L90.8,164.7 Z\" fill=\"currentColor\"/><path d=\"M81.8,162.3 Q131.6,214.3 203.1,223.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-orange\" stroke-dasharray=\"5 4\"/><path d=\"M203.1,223.0 L194.6,225.8 L195.5,218.2 Z\" fill=\"currentColor\" class=\"f-orange\"/><path d=\"M79.7,136.0 Q194.2,-29.3 365.5,76.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-orange\" stroke-dasharray=\"5 4\"/><path d=\"M365.5,76.1 L356.6,75.1 L360.6,68.6 Z\" fill=\"currentColor\" class=\"f-orange\"/><path d=\"M207.7,96.7 Q156.9,145.0 87.0,149.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-orange\" stroke-dasharray=\"5 4\"/><path d=\"M87.0,149.0 L94.9,144.7 L95.3,152.4 Z\" fill=\"currentColor\" class=\"f-orange\"/><path d=\"M228.4,210.2 Q260.0,155.0 228.4,99.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" class=\"s-orange\" stroke-dasharray=\"5 4\"/><path d=\"M228.4,99.8 L235.8,104.9 L229.1,108.7 Z\" fill=\"currentColor\" class=\"f-orange\"/><circle cx=\"70\" cy=\"150\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"70\" y=\"155\" text-anchor=\"middle\" font-size=\"14\">1</text><circle cx=\"220\" cy=\"85\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"220\" y=\"90\" text-anchor=\"middle\" font-size=\"14\">2</text><circle cx=\"220\" cy=\"225\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"220\" y=\"230\" text-anchor=\"middle\" font-size=\"14\">3</text><circle cx=\"380\" cy=\"85\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"380\" y=\"90\" text-anchor=\"middle\" font-size=\"14\">4</text><text x=\"290\" y=\"195\" text-anchor=\"start\" font-size=\"13\">—— R</text><text x=\"290\" y=\"217\" text-anchor=\"start\" font-size=\"13\" class=\"t-orange\">- - - R ∘ R (2-step paths)</text></svg>",
};
// </figures>

export const lesson: Lesson = {
  id: 'dm-relations',
  title: 'Relations and Their Properties',
  summary: 'Relations as sets of pairs, drawn as matrices and directed graphs; reflexive, symmetric, antisymmetric and transitive; composition, closures, and the relations inside every database.',
  minutes: 19,
  objectives: [
    'Define a relation as a subset of a Cartesian product and represent it as a list of pairs, a 0–1 matrix and a directed graph',
    'Decide whether a relation is reflexive, symmetric, antisymmetric or transitive, and prove or disprove each property',
    'Compose relations and compute $R^2$ as two-step paths',
    'Form reflexive, symmetric and transitive closures, and connect transitive closure to reachability and Warshall\'s algorithm',
    'Describe database tables as $n$-ary relations and selection, projection and join as set operations',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'A relation is a set of pairs',
      blocks: [
        {
          type: 'p',
          text: 'A function insists that each input has exactly one output. Many real connections are not like that: a student takes several courses, a course has many students; a unit can attack several enemies; $3 < 5$ and $3 < 7$ both hold. A **relation** captures any such connection, with no restrictions at all.',
        },
        {
          type: 'definition',
          term: 'Relation',
          text: 'A (binary) [[dm-relation]] from $A$ to $B$ is any subset $R \\subseteq A \\times B$. We write $a \\mathrel{R} b$ for $(a, b) \\in R$. A **relation on $A$** is a subset of $A \\times A$.',
        },
        {
          type: 'list',
          items: [
            '$<$ on $\\mathbb{Z}$ is the infinite set $\\{(a, b) : a < b\\}$, which contains $(3, 5)$ but not $(5, 3)$.',
            '"Divides" on $\\{1, 2, 3, 4\\}$: $a \\mid b$ when $b = ak$ for some integer $k$. As a set of pairs: $\\{(1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4)\\}$.',
            '"Is enrolled in", from Students to Courses — a relation between **two different** sets.',
            'Every function $f: A \\to B$ is a relation: $\\{(a, f(a)) : a \\in A\\}$. Functions are exactly the relations where each $a$ appears in exactly one pair.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why define a relation as "just a set"',
          text: 'Defining a relation as a set of pairs means we never have to ask *why* two things are related — only *whether* they are. That is exactly how a computer stores one: a list of pairs, a boolean matrix or an adjacency list. It also hands us every set operation for free: the union of two relations, their intersection, the complement $\\overline{R} = (A \\times A) - R$, the inverse $R^{-1} = \\{(b, a) : (a, b) \\in R\\}$.',
        },
        {
          type: 'p',
          text: 'Counting relations is a power-set argument. A relation on an $n$-element set is any subset of $A \\times A$, which has $n^2$ pairs, so there are $2^{n^2}$ relations: each pair is independently in or out.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'How many different relations are there on a set with $3$ elements?',
      hint: 'A relation on $A$ is any subset of $A \\times A$. How big is $A \\times A$?',
      answer: '512',
      answerTex: '2^9 = 512',
      explanation: '$|A \\times A| = 3 \\cdot 3 = 9$ ordered pairs, and a relation is any subset of them: $|\\mathcal{P}(A \\times A)| = 2^9 = 512$. That includes the empty relation and the "everything" relation $A \\times A$. For $n = 10$ elements there would be $2^{100}$ relations — far too many to search by brute force.',
    },
    {
      kind: 'concept',
      title: 'Matrices and directed graphs',
      blocks: [
        {
          type: 'p',
          text: 'A list of pairs is precise but hard to read. Two other representations make the structure visible, and both are how programs actually store relations.',
        },
        {
          type: 'p',
          text: '**The 0–1 matrix** (an [[dm-adjacency-matrix|adjacency matrix]]). List the elements $a_1, \\dots, a_n$ and form an $n \\times n$ grid with $m_{ij} = 1$ if $a_i \\mathrel{R} a_j$ and $0$ otherwise. Row $i$ answers "what does $a_i$ relate to?". For "divides" on $\\{1, 2, 3, 4\\}$:',
        },
        {
          type: 'table',
          headers: ['$\\mid$', '$1$', '$2$', '$3$', '$4$'],
          rows: [
            ['$1$', '1', '1', '1', '1'],
            ['$2$', '0', '1', '0', '1'],
            ['$3$', '0', '0', '1', '0'],
            ['$4$', '0', '0', '0', '1'],
          ],
          caption: 'Row $a$, column $b$ holds $1$ exactly when $a \\mid b$. Eight 1s for the eight pairs.',
        },
        {
          type: 'p',
          text: '**The [[dm-directed-graph|directed graph]] (digraph).** Draw a dot for each element and an arrow $a \\to b$ for each pair $(a, b) \\in R$. A pair $(a, a)$ becomes a **loop**. (Graphs get their own unit later; here they are simply pictures of relations.)',
        },
        {
          type: 'figure',
          svg: FIG.rel_divides,
          alt: 'A directed graph on vertices 1, 2, 3, 4 with a loop at every vertex and arrows 1 to 2, 1 to 3, 1 to 4 and 2 to 4.',
          caption: 'The "divides" relation on $\\{1, 2, 3, 4\\}$ as a digraph. Each loop is a pair like $(3, 3)$; each arrow is a pair like $(2, 4)$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Which representation to use',
          text: 'A `bool R[n][n]` matrix answers "is $a \\mathrel{R} b$?" in $O(1)$ but always uses $n^2$ bits; with one `uint64_t` bit mask per row it is a set per element, and row operations become bitwise ORs. An adjacency list `std::vector<std::vector<int>>` stores only the pairs that exist — far better for sparse relations like "which rooms connect to which" in a large level.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'How many ordered pairs belong to the relation drawn below?',
      figure: {
        type: 'figure',
        svg: FIG.rel_qcount,
        alt: 'A directed graph on a, b, c, d: arrows a to b and b to a, a to c, c to d, d to b, and loops at b and at c.',
        maxWidth: 360,
      },
      hint: 'Every arrow is one pair, and every loop is one pair too. Two arrows between the same vertices in opposite directions are two different pairs.',
      label: '$|R| =$',
      answer: '7',
      explanation: 'Arrows: $(a, b)$, $(b, a)$, $(a, c)$, $(c, d)$, $(d, b)$ — five pairs. Loops: $(b, b)$ and $(c, c)$ — two more. Total $7$. The matrix of this relation would contain exactly seven 1s. Forgetting loops, or counting the two-way arrow between $a$ and $b$ as one pair, are the usual slips.',
    },
    {
      kind: 'concept',
      title: 'The four key properties',
      blocks: [
        {
          type: 'p',
          text: 'Four properties of a relation $R$ on a set $A$ come up again and again, because they are exactly the ingredients of "sameness" (equivalence relations) and "ordering" (partial orders) in the next lesson.',
        },
        {
          type: 'table',
          headers: ['Property', 'Definition', 'Matrix', 'Digraph'],
          rows: [
            ['[[dm-reflexive|Reflexive]]', '$\\forall a:\\; a \\mathrel{R} a$', 'all 1s on the diagonal', 'a loop at every vertex'],
            ['[[dm-symmetric-relation|Symmetric]]', '$a \\mathrel{R} b \\to b \\mathrel{R} a$', 'equal to its transpose', 'every arrow has a reverse twin'],
            ['[[dm-antisymmetric|Antisymmetric]]', '$(a \\mathrel{R} b \\land b \\mathrel{R} a) \\to a = b$', 'never $m_{ij} = m_{ji} = 1$ with $i \\ne j$', 'no two-way arrows between distinct vertices'],
            ['[[dm-transitive|Transitive]]', '$(a \\mathrel{R} b \\land b \\mathrel{R} c) \\to a \\mathrel{R} c$', '$M^2$ has no 1 where $M$ has 0', 'every two-step path has a direct shortcut'],
          ],
        },
        {
          type: 'figure',
          svg: FIG.rel_props,
          alt: 'Four small directed graphs on a, b, c illustrating reflexive (loops at every vertex), symmetric (arrows in both directions), antisymmetric (one-way arrows only) and transitive (a to c and c to b, plus the shortcut a to b).',
          caption: 'What to look for in a digraph. The orange arrow is the shortcut that transitivity demands for the path $a \\to c \\to b$.',
        },
        {
          type: 'table',
          headers: ['Relation', 'Refl.', 'Sym.', 'Antisym.', 'Trans.'],
          rows: [
            ['$=$ on $\\mathbb{Z}$', '✓', '✓', '✓', '✓'],
            ['$\\le$ on $\\mathbb{Z}$', '✓', '✗', '✓', '✓'],
            ['$<$ on $\\mathbb{Z}$', '✗', '✗', '✓', '✓'],
            ['$\\mid$ on $\\mathbb{Z}^{+}$', '✓', '✗', '✓', '✓'],
            ['$\\ne$ on $\\mathbb{Z}$', '✗', '✓', '✗', '✗'],
            ['same parity on $\\mathbb{Z}$', '✓', '✓', '✗', '✓'],
            ['$\\subseteq$ on $\\mathcal{P}(S)$', '✓', '✗', '✓', '✓'],
            ['"is a parent of"', '✗', '✗', '✓', '✗'],
            ['$\\emptyset$ on $\\{1, 2\\}$', '✗', '✓', '✓', '✓'],
          ],
          caption: 'Read each ✗ as "there is a counterexample": $<$ is not reflexive because $3 \\not< 3$; $\\ne$ is not transitive because $1 \\ne 2$ and $2 \\ne 1$ but $1 = 1$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Antisymmetric is not "not symmetric"',
          text: 'Antisymmetry says two-way connections only happen from an element to itself. Equality is both symmetric and antisymmetric; "same parity" is symmetric but not antisymmetric; $\\le$ is antisymmetric but not symmetric; the relation $\\{(1, 2), (2, 1), (2, 3)\\}$ is neither. Similarly, "not reflexive" (some element lacks a loop) is weaker than **irreflexive** (no element has one), which describes $<$.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: a relation cannot be both symmetric and antisymmetric.',
      answer: false,
      explanation: 'Equality is both. Symmetric says every arrow has a reverse; antisymmetric says arrows between *distinct* elements never come in reverse pairs. Both hold at once exactly when there are no arrows between distinct elements — only loops. So any subset of the "diagonal" $\\{(a, a) : a \\in A\\}$, including $\\emptyset$, is both symmetric and antisymmetric.',
    },
    {
      kind: 'concept',
      title: 'Proving and disproving properties',
      blocks: [
        {
          type: 'p',
          text: 'Each property is a universally quantified statement, so the logic is always the same. To **prove** it, take arbitrary elements satisfying the hypothesis and derive the conclusion. To **disprove** it, find one specific counterexample.',
        },
        {
          type: 'derivation',
          title: 'Divisibility on $\\mathbb{Z}^{+}$ is transitive',
          steps: [
            { tex: '\\text{Let } a \\mid b \\text{ and } b \\mid c.', why: 'Arbitrary positive integers satisfying the hypothesis of transitivity.' },
            { tex: 'b = ak \\text{ and } c = b\\ell \\text{ for some integers } k, \\ell', why: 'Unpack the definition of "divides".' },
            { tex: 'c = (ak)\\ell = a(k\\ell)', why: 'Substitute the first equation into the second and regroup (associativity).' },
            { tex: 'k\\ell \\in \\mathbb{Z} \\implies a \\mid c', why: 'A product of integers is an integer, so $c$ is an integer multiple of $a$.' },
          ],
          result: 'Divisibility is transitive. It is also reflexive ($a = a \\cdot 1$) and antisymmetric on positive integers: if $a \\mid b$ and $b \\mid a$ then $a \\le b \\le a$, so $a = b$.',
        },
        {
          type: 'derivation',
          title: '$a \\mathrel{R} b \\iff a - b$ is even, on $\\mathbb{Z}$',
          steps: [
            { tex: 'a - a = 0 = 2 \\cdot 0', why: '**Reflexive:** $0$ is even, so $a \\mathrel{R} a$ for every $a$.' },
            { tex: 'a - b = 2k \\implies b - a = 2(-k)', why: '**Symmetric:** if $a - b$ is even, so is its negative.' },
            { tex: 'a - b = 2k,\\; b - c = 2\\ell \\implies a - c = 2(k + \\ell)', why: '**Transitive:** add the two equations; the $b$ terms cancel.' },
            { tex: '0 \\mathrel{R} 2 \\text{ and } 2 \\mathrel{R} 0, \\text{ but } 0 \\ne 2', why: '**Not antisymmetric:** one counterexample suffices.' },
          ],
          result: 'Reflexive, symmetric and transitive: this is an *equivalence relation*, the star of the next lesson.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exam answers lose points for "it\'s transitive because $1 \\mathrel{R} 2$, $2 \\mathrel{R} 3$ and $1 \\mathrel{R} 3$". One example never proves a "for all" statement. Either check **every** two-step path (fine for a small finite relation) or give a general argument with variables.',
        },
      ],
    },
    {
      kind: 'mcq',
      multi: true,
      prompt: 'Select **every** property that the relation drawn below has, as a relation on $\\{1, 2, 3\\}$.',
      figure: {
        type: 'figure',
        svg: FIG.rel_qprops,
        alt: 'A directed graph on 1, 2, 3 with loops at all three vertices, arrows in both directions between 1 and 2, and arrows in both directions between 2 and 3. There is no arrow between 1 and 3.',
        maxWidth: 360,
      },
      options: [
        { text: 'Reflexive', correct: true, why: 'Every vertex has a loop: $(1,1)$, $(2,2)$, $(3,3)$.' },
        { text: 'Symmetric', correct: true, why: 'Both arrows between $1$ and $2$ are present, and both between $2$ and $3$.' },
        { text: 'Antisymmetric', why: '$1 \\mathrel{R} 2$ and $2 \\mathrel{R} 1$ with $1 \\ne 2$ — a two-way arrow between distinct vertices.' },
        { text: 'Transitive', why: '$1 \\mathrel{R} 2$ and $2 \\mathrel{R} 3$, but there is no arrow $1 \\to 3$, so the shortcut is missing.' },
      ],
      explanation: 'Check each definition against the picture. Loops everywhere: reflexive. Every arrow has a twin: symmetric. Two-way arrows between distinct vertices exist: not antisymmetric. The path $1 \\to 2 \\to 3$ has no shortcut: not transitive. Think of it as "is within one step of" on a line of three tiles — closeness is not transitive.',
    },
    {
      kind: 'error',
      prompt: 'A student claims every symmetric, transitive relation is reflexive. Tap the first line of the "proof" that is wrong.',
      lines: [
        'Let $R$ be symmetric and transitive on $A$, and let $a \\in A$ be arbitrary.',
        'Choose some $b \\in A$ with $a \\mathrel{R} b$.',
        'By symmetry, $b \\mathrel{R} a$.',
        'By transitivity, $a \\mathrel{R} b$ and $b \\mathrel{R} a$ give $a \\mathrel{R} a$.',
        'Since $a$ was arbitrary, $R$ is reflexive.',
      ],
      errorLines: [2],
      explanation: 'Line 2 assumes $a$ is related to *something*, which nothing guarantees. Counterexample: on $A = \\{1, 2\\}$ take $R = \\{(1, 1)\\}$. It is symmetric and transitive, but $(2, 2) \\notin R$, so it is not reflexive. Lines 3–5 are valid **for elements that relate to something**: what the argument really proves is "if $a \\mathrel{R} b$ for some $b$, then $a \\mathrel{R} a$".',
    },
    {
      kind: 'concept',
      title: 'Composing relations',
      blocks: [
        {
          type: 'p',
          text: 'Relations compose just like functions. If $R$ goes from $A$ to $B$ and $S$ from $B$ to $C$, then $S \\circ R$ relates $a$ to $c$ when you can get there in two hops: first an $R$-step, then an $S$-step.',
        },
        {
          type: 'definition',
          term: 'Composition and powers',
          text: '$S \\circ R = \\{(a, c) : \\exists b \\; (a \\mathrel{R} b \\land b \\mathrel{S} c)\\}$. For a relation on one set, $R^2 = R \\circ R$, $R^3 = R \\circ R^2$, and so on: $a \\mathrel{R^n} c$ exactly when there is a path of length $n$ from $a$ to $c$ in the digraph.',
        },
        {
          type: 'derivation',
          title: 'Compute $R^2$ for $R = \\{(1,2), (2,3), (2,4), (3,1)\\}$',
          steps: [
            { tex: '1 \\to 2 \\to 3,\\quad 1 \\to 2 \\to 4', why: 'Start at $1$: its only step goes to $2$, and from $2$ you can go to $3$ or $4$. So $(1,3), (1,4) \\in R^2$.' },
            { tex: '2 \\to 3 \\to 1', why: 'From $2$: going to $4$ is a dead end ($4$ relates to nothing), going to $3$ continues to $1$. So $(2,1) \\in R^2$.' },
            { tex: '3 \\to 1 \\to 2', why: 'From $3$: the only path is through $1$ to $2$. So $(3,2) \\in R^2$.' },
            { tex: 'R^2 = \\{(1,3), (1,4), (2,1), (3,2)\\}', why: '$4$ has no outgoing step, so it starts no path. Collect all two-step pairs.' },
          ],
          result: 'Notice $(1, 3) \\in R^2$ but $(1, 3) \\notin R$: a two-step path with no shortcut, so $R$ is not transitive.',
        },
        {
          type: 'figure',
          svg: FIG.rel_square,
          alt: 'A directed graph with solid arrows 1 to 2, 2 to 3, 2 to 4, 3 to 1, and dashed orange arrows for the composition: 1 to 3, 1 to 4, 2 to 1 and 3 to 2.',
          caption: 'Solid arrows are $R$; dashed orange arrows are $R^2$, one for each two-step path.',
        },
        {
          type: 'theorem',
          name: 'Transitivity via composition',
          text: '$R$ is transitive if and only if $R^2 \\subseteq R$. In matrix terms: compute the Boolean product $M \\odot M$ (ordinary matrix multiplication with "or" for $+$ and "and" for $\\times$); $R$ is transitive exactly when it has no 1 where $M$ has a 0.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the Boolean product counts paths',
          text: 'Entry $(i, j)$ of $M \\odot M$ is $\\bigvee_k (m_{ik} \\land m_{kj})$: "is there **some** middle element $k$ with $a_i \\to a_k$ and $a_k \\to a_j$?" That is precisely the definition of $R^2$. With ordinary $+$ and $\\times$ instead, the same product counts *how many* two-step paths there are — a fact the Graphs unit uses.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Let $R = \\{(1, 2), (2, 1), (2, 3)\\}$ on $\\{1, 2, 3\\}$. How many pairs are in $R^2 = R \\circ R$?',
      hint: 'List every two-step path $a \\to b \\to c$. Paths may return to where they started.',
      label: '$|R^2| =$',
      answer: '3',
      explanation: 'Two-step paths: $1 \\to 2 \\to 1$, $1 \\to 2 \\to 3$, and $2 \\to 1 \\to 2$. ($3$ has no outgoing arrow, and $2 \\to 3$ leads nowhere further.) So $R^2 = \\{(1, 1), (1, 3), (2, 2)\\}$, with $3$ pairs. Loops like $(1, 1)$ appear because a path can go out and come back.',
    },
    {
      kind: 'concept',
      title: 'Closures and reachability',
      blocks: [
        {
          type: 'p',
          text: 'Often a relation is *almost* what you want — "is directly connected to" when you need "can eventually reach". The **closure** of $R$ with respect to a property is the smallest relation containing $R$ that has the property: add only the pairs you are forced to add.',
        },
        {
          type: 'table',
          headers: ['Closure', 'Formula', 'What you add'],
          rows: [
            ['Reflexive', '$R \\cup \\{(a, a) : a \\in A\\}$', 'a loop at every vertex'],
            ['Symmetric', '$R \\cup R^{-1}$', 'the reverse of every arrow'],
            ['[[dm-transitive-closure|Transitive]]', '$R^{+} = R \\cup R^2 \\cup R^3 \\cup \\cdots$', 'a shortcut for every path'],
          ],
        },
        {
          type: 'p',
          text: 'The transitive closure has a beautiful meaning: $a \\mathrel{R^{+}} b$ exactly when there is a path of length $\\ge 1$ from $a$ to $b$. **Transitive closure is reachability.** On an $n$-element set no shortest path needs more than $n$ steps, so $R^{+} = R \\cup R^2 \\cup \\cdots \\cup R^n$ — a finite computation.',
        },
        {
          type: 'figure',
          svg: FIG.rel_closure,
          alt: 'A chain 1 to 2 to 3 to 4 drawn with solid arrows, plus dashed orange arrows 1 to 3, 2 to 4 and 1 to 4 added by the transitive closure.',
          caption: 'The chain $R = \\{(1,2), (2,3), (3,4)\\}$ and its transitive closure: the dashed shortcuts $(1,3)$, $(2,4)$ (from $R^2$) and $(1,4)$ (from $R^3$) are added.',
        },
        {
          type: 'p',
          text: '**Warshall\'s algorithm** computes $R^{+}$ in $O(n^3)$ steps with one beautifully short idea: process the elements one at a time as allowed "stepping stones". After processing $k$, $m_{ij} = 1$ whenever $j$ is reachable from $i$ using only stepping stones processed so far. Processing $k$ means: if $i$ reaches $k$ and $k$ reaches $j$, then $i$ reaches $j$.',
        },
        {
          type: 'code',
          title: 'warshall.cpp',
          runnable: true,
          code: `#include <cstdio>

constexpr int N = 6;
const char* tech[N] = {"Mining", "Bronze", "Iron", "Steel", "Alchemy", "Cannon"};

int main() {
    // R[i][j] = true  means  "tech i is a direct prerequisite of tech j".
    bool R[N][N] = {};
    R[0][1] = R[1][2] = R[2][3] = true;    // Mining -> Bronze -> Iron -> Steel
    R[3][5] = R[4][5] = true;              // Steel, Alchemy -> Cannon

    // Warshall: after round k, R[i][j] is true if j is reachable from i
    // using only intermediate techs 0..k.
    for (int k = 0; k < N; ++k)
        for (int i = 0; i < N; ++i)
            for (int j = 0; j < N; ++j)
                if (R[i][k] && R[k][j]) R[i][j] = true;

    for (int j = 0; j < N; ++j) {
        std::printf("%-7s needs:", tech[j]);
        for (int i = 0; i < N; ++i)
            if (R[i][j]) std::printf(" %s", tech[i]);
        std::printf("\\n");
    }
}`,
          output: `Mining  needs:
Bronze  needs: Mining
Iron    needs: Mining Bronze
Steel   needs: Mining Bronze Iron
Alchemy needs:
Cannon  needs: Mining Bronze Iron Steel Alchemy`,
          annotations: [
            { lines: '8-10', text: 'The relation "is a direct prerequisite of" — a tech tree is a relation on the set of techs.' },
            { lines: 14, text: 'The stepping-stone loop $k$ **must** be the outermost loop. With it innermost, some long chains would be missed.' },
            { lines: 17, text: 'If $i$ reaches $k$ and $k$ reaches $j$, record that $i$ reaches $j$: one transitivity step.' },
            { lines: '19-24', text: 'Column $j$ of $R^{+}$ lists **all** prerequisites of tech $j$, direct or indirect.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Reachability in games',
          text: 'The same closure answers "can the player get from room A to room B?", "which techs does unlocking Cannon require?" and "which objects does deleting this one affect?". For large, sparse graphs, running a breadth-first search from each vertex (Graphs unit) beats Warshall; for small dense ones, the triple loop — especially with one bit mask per row, `if (row[i] >> k & 1) row[i] |= row[k];` — is hard to beat.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Let $R = \\{(1, 2), (2, 3), (3, 4)\\}$ on $\\{1, 2, 3, 4\\}$. How many pairs are in its transitive closure $R^{+}$?',
      hint: '$R^{+}$ contains $(a, b)$ exactly when there is a path from $a$ to $b$ following the arrows.',
      label: '$|R^{+}| =$',
      answer: '6',
      explanation: 'From $1$ you can reach $2, 3, 4$; from $2$, $3$ and $4$; from $3$, only $4$; from $4$, nothing. That is $3 + 2 + 1 = 6$ pairs: $(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)$. No loops are added, because no path returns to its start — the closure is not reflexive.',
    },
    {
      kind: 'concept',
      title: 'Relational databases are relations',
      blocks: [
        {
          type: 'p',
          text: 'Relations need not be binary. An **$n$-ary relation** is a subset of $A_1 \\times A_2 \\times \\cdots \\times A_n$: a set of $n$-tuples. That is exactly what a database table is — which is why they are called **relational** databases. Each column is a domain $A_i$, each row is a tuple, and because a relation is a set, a well-designed table has no duplicate rows and no meaningful row order.',
        },
        {
          type: 'table',
          headers: ['player_id', 'name', 'guild_id', 'level'],
          rows: [
            ['$101$', 'Ava', '$7$', '$58$'],
            ['$102$', 'Kenji', '$3$', '$41$'],
            ['$103$', 'Mira', '$7$', '$63$'],
          ],
          caption: '`Players` $\\subseteq \\mathbb{N} \\times \\text{Strings} \\times \\mathbb{N} \\times \\mathbb{N}$: a 4-ary relation with three tuples.',
        },
        {
          type: 'list',
          items: [
            'A **primary key** (here `player_id`) is a column whose value determines the whole row: the relation from keys to rows is a *function*.',
            '**Selection** $\\sigma$ keeps the tuples satisfying a condition — a subset, like set-builder notation: `WHERE level > 50`.',
            '**Projection** $\\pi$ keeps some columns and drops the rest: `SELECT name`. Different rows may project to the same tuple.',
            '**Join** combines two tables on a shared column, much like composing relations through a middle element: `Players` joined with `Guilds` on `guild_id` relates each player to their guild\'s data.',
          ],
        },
        {
          type: 'code',
          lang: 'text',
          title: 'query.sql',
          code: `SELECT p.name, g.guild_name          -- projection
FROM Players p
JOIN Guilds g ON p.guild_id = g.guild_id   -- join (compose through guild_id)
WHERE p.level > 50;                        -- selection`,
          annotations: [
            { lines: 3, text: 'Relate player to guild through the shared middle value `guild_id` — the $\\exists b$ in the definition of composition.' },
            { lines: 4, text: 'Keep only the tuples satisfying a predicate: $\\{t \\in R : P(t)\\}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Edgar F. Codd proposed the relational model at IBM in 1970, explicitly building databases on set theory and first-order logic. SQL\'s `UNION`, `INTERSECT` and `EXCEPT` are literally $\\cup$, $\\cap$ and $-$ on sets of tuples.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Name the relational operation.',
      template: 'Keeping only the rows with `level > 50` is a ___. Keeping only the `name` column is a ___. Combining `Players` with `Guilds` through matching `guild_id` values is a ___.',
      blanks: [{ answers: ['selection'] }, { answers: ['projection'] }, { answers: ['join'] }],
      wordBank: ['selection', 'projection', 'join', 'union', 'complement'],
      explanation: 'Selection filters **rows** by a condition (a subset of the relation). Projection keeps chosen **columns** (dropping coordinates from each tuple). A join links two relations through a shared value, the database version of composing relations. Union would merge two tables with the same columns, and complement is rarely used because it would include every tuple *not* in the table.',
    },
  ],
  takeaways: [
    'A relation from $A$ to $B$ is any subset of $A \\times B$; a relation on an $n$-element set is one of $2^{n^2}$ possible subsets of $A \\times A$.',
    'Represent a relation as a list of pairs, a 0–1 matrix ($m_{ij} = 1$ iff $a_i \\mathrel{R} a_j$) or a directed graph (arrows and loops).',
    'Reflexive: loops everywhere. Symmetric: every arrow has a twin. Antisymmetric: no two-way arrows between distinct elements. Transitive: every two-step path has a shortcut.',
    'Prove a property with an arbitrary-element argument; disprove it with one counterexample. Antisymmetric is not the opposite of symmetric.',
    '$R^n$ is "paths of length $n$"; $R$ is transitive iff $R^2 \\subseteq R$. The transitive closure $R^{+}$ is reachability, computed by Warshall\'s algorithm in $O(n^3)$.',
    'A database table is an $n$-ary relation; selection, projection and join are set operations on tuples.',
  ],
  reading: [
    {
      title: 'Levin, Discrete Mathematics: An Open Introduction',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'The chapters on sets, functions and graphs give additional practice reading relations as digraphs.',
    },
    {
      title: 'Wikipedia — Transitive closure',
      url: 'https://en.wikipedia.org/wiki/Transitive_closure',
      source: 'wikipedia',
      note: 'Covers the definition, the connection to reachability and the algorithms (Warshall, repeated BFS) used to compute it.',
    },
    {
      title: 'Wikipedia — Relational model',
      url: 'https://en.wikipedia.org/wiki/Relational_model',
      source: 'wikipedia',
      note: 'Codd\'s relational model of data: tables as relations, keys, and the relational algebra behind SQL.',
    },
  ],
};
