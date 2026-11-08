import type { Lesson } from '../../types';

// Figures (graph drawings generated with the graph kit; theme-aware SVG).
const FIG: Record<string, string> = {
  "btree": `<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg"><line x1="227.0" y1="45.0" x2="128.0" y2="90.0" stroke="currentColor" stroke-width="1.6"/><path d="M128.0,90.0 L133.8,83.1 L137.0,90.1 Z" fill="currentColor"/><line x1="260.0" y1="45.0" x2="260.0" y2="90.0" stroke="currentColor" stroke-width="1.6"/><path d="M260.0,90.0 L256.2,81.9 L263.8,81.9 Z" fill="currentColor"/><line x1="292.0" y1="45.0" x2="388.0" y2="90.0" stroke="currentColor" stroke-width="1.6"/><path d="M388.0,90.0 L379.0,90.0 L382.3,83.1 Z" fill="currentColor"/><line x1="84.7" y1="120.0" x2="50.3" y2="170.0" stroke="currentColor" stroke-width="1.6"/><path d="M50.3,170.0 L51.8,161.1 L58.1,165.5 Z" fill="currentColor"/><line x1="102.5" y1="120.0" x2="127.5" y2="170.0" stroke="currentColor" stroke-width="1.6"/><path d="M127.5,170.0 L120.4,164.4 L127.3,161.0 Z" fill="currentColor"/><line x1="117.5" y1="120.0" x2="192.5" y2="170.0" stroke="currentColor" stroke-width="1.6"/><path d="M192.5,170.0 L183.6,168.7 L187.8,162.3 Z" fill="currentColor"/><line x1="267.5" y1="120.0" x2="292.5" y2="170.0" stroke="currentColor" stroke-width="1.6"/><path d="M292.5,170.0 L285.4,164.4 L292.3,161.0 Z" fill="currentColor"/><line x1="282.5" y1="120.0" x2="357.5" y2="170.0" stroke="currentColor" stroke-width="1.6"/><path d="M357.5,170.0 L348.6,168.7 L352.8,162.3 Z" fill="currentColor"/><rect x="205" y="15" width="110" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="260" y="35" text-anchor="middle" font-size="12" class="t-purple">Selector ?</text><rect x="40" y="90" width="110" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="95" y="110" text-anchor="middle" font-size="12" class="t-blue">Sequence →</text><rect x="205" y="90" width="110" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="260" y="110" text-anchor="middle" font-size="12" class="t-blue">Sequence →</text><rect x="380" y="90" width="80" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="420" y="110" text-anchor="middle" font-size="12" class="t-green">Patrol</text><rect x="-4" y="170" width="88" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="40" y="190" text-anchor="middle" font-size="12" class="t-orange">Enemy seen?</text><rect x="95" y="170" width="80" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="135" y="190" text-anchor="middle" font-size="12" class="t-orange">In range?</text><rect x="183" y="170" width="64" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="215" y="190" text-anchor="middle" font-size="12" class="t-green">Attack</text><rect x="264" y="170" width="72" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="300" y="190" text-anchor="middle" font-size="12" class="t-orange">Low HP?</text><rect x="352" y="170" width="56" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="380" y="190" text-anchor="middle" font-size="12" class="t-green">Flee</text></svg>`,
  "examples": `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg"><line x1="49.8" y1="55.1" x2="90.2" y2="34.9" stroke="currentColor" stroke-width="2.6" class="s-green"/><line x1="109.8" y1="34.9" x2="150.2" y2="55.1" stroke="currentColor" stroke-width="2.6" class="s-green"/><line x1="49.2" y1="66.1" x2="90.8" y2="93.9" stroke="currentColor" stroke-width="2.6" class="s-green"/><line x1="108.5" y1="107.0" x2="151.5" y2="143.0" stroke="currentColor" stroke-width="2.6" class="s-green"/><line x1="91.5" y1="107.0" x2="48.5" y2="143.0" stroke="currentColor" stroke-width="2.6" class="s-green"/><line x1="149.6" y1="153.5" x2="110.4" y2="166.5" stroke="currentColor" stroke-width="2.6" class="s-green"/><line x1="230.9" y1="48.6" x2="289.1" y2="41.4" stroke="currentColor" stroke-width="2.6" class="s-red"/><line x1="302.7" y1="50.7" x2="317.3" y2="109.3" stroke="currentColor" stroke-width="2.6" class="s-red"/><line x1="309.3" y1="122.7" x2="250.7" y2="137.3" stroke="currentColor" stroke-width="2.6" class="s-red"/><line x1="237.6" y1="129.3" x2="222.4" y2="60.7" stroke="currentColor" stroke-width="2.6" class="s-red"/><line x1="247.3" y1="148.2" x2="272.7" y2="176.8" stroke="currentColor" stroke-width="1.6"/><line x1="384.9" y1="49.8" x2="405.1" y2="90.2" stroke="currentColor" stroke-width="1.6"/><line x1="435.1" y1="49.8" x2="414.9" y2="90.2" stroke="currentColor" stroke-width="1.6"/><line x1="407.0" y1="110.6" x2="393.0" y2="159.4" stroke="currentColor" stroke-width="1.6"/><line x1="470.0" y1="131.0" x2="470.0" y2="169.0" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="60" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="30" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="100" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="60" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="150" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="150" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="170" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="220" cy="50" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="300" cy="40" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="320" cy="120" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="240" cy="140" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="280" cy="185" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="380" cy="40" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="440" cy="40" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="410" cy="100" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="470" cy="120" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="390" cy="170" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="470" cy="180" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="100" y="220" text-anchor="middle" font-size="13">a tree</text><text x="270" y="220" text-anchor="middle" font-size="13">not a tree: a cycle</text><text x="430" y="220" text-anchor="middle" font-size="13">a forest (2 trees)</text></svg>`,
  "leafremove": `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><line x1="49.8" y1="55.1" x2="90.2" y2="34.9" stroke="currentColor" stroke-width="1.6"/><line x1="109.8" y1="34.9" x2="150.2" y2="55.1" stroke="currentColor" stroke-width="1.6"/><line x1="49.2" y1="66.1" x2="90.8" y2="93.9" stroke="currentColor" stroke-width="1.6"/><line x1="108.5" y1="107.0" x2="151.5" y2="143.0" stroke="currentColor" stroke-width="1.6"/><line x1="91.5" y1="107.0" x2="48.5" y2="143.0" stroke="currentColor" stroke-width="1.6"/><line x1="149.6" y1="153.5" x2="110.4" y2="166.5" stroke="currentColor" stroke-width="2.6" class="s-red" stroke-dasharray="5 4"/><circle cx="40" cy="60" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="30" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="100" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="60" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="150" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="150" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="100" cy="170" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="135" y="185" text-anchor="start" font-size="13" class="t-red">leaf v</text></svg>`,
  "rooted": `<svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg"><line x1="260.8" y1="37.3" x2="152.2" y2="92.7" stroke="currentColor" stroke-width="1.6"/><line x1="275.0" y1="46.0" x2="275.0" y2="84.0" stroke="currentColor" stroke-width="1.6"/><line x1="289.2" y1="37.3" x2="397.8" y2="92.7" stroke="currentColor" stroke-width="1.6"/><line x1="127.8" y1="112.3" x2="90.2" y2="157.7" stroke="currentColor" stroke-width="1.6"/><line x1="148.3" y1="112.2" x2="186.7" y2="157.8" stroke="currentColor" stroke-width="1.6"/><line x1="401.7" y1="112.2" x2="363.3" y2="157.8" stroke="currentColor" stroke-width="1.6"/><line x1="412.0" y1="116.0" x2="412.0" y2="154.0" stroke="currentColor" stroke-width="1.6"/><line x1="422.2" y1="112.3" x2="459.8" y2="157.7" stroke="currentColor" stroke-width="1.6"/><line x1="189.2" y1="184.0" x2="165.8" y2="226.0" stroke="currentColor" stroke-width="1.6"/><line x1="204.8" y1="184.0" x2="228.2" y2="226.0" stroke="currentColor" stroke-width="1.6"/><circle cx="275" cy="30" r="16" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-purple f-purple"/><text x="275" y="35" text-anchor="middle" font-size="14" class="t-purple">a</text><circle cx="138" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="138" y="105" text-anchor="middle" font-size="14">b</text><circle cx="275" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="275" y="105" text-anchor="middle" font-size="14" class="t-green">c</text><circle cx="412" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="412" y="105" text-anchor="middle" font-size="14">d</text><circle cx="80" cy="170" r="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="80" y="175" text-anchor="middle" font-size="14" class="t-green">e</text><circle cx="197" cy="170" r="16" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="197" y="175" text-anchor="middle" font-size="14">f</text><circle cx="353" cy="170" r="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="353" y="175" text-anchor="middle" font-size="14" class="t-green">g</text><circle cx="412" cy="170" r="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="412" y="175" text-anchor="middle" font-size="14" class="t-green">h</text><circle cx="470" cy="170" r="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="470" y="175" text-anchor="middle" font-size="14" class="t-green">i</text><circle cx="158" cy="240" r="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="158" y="245" text-anchor="middle" font-size="14" class="t-green">j</text><circle cx="236" cy="240" r="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="236" y="245" text-anchor="middle" font-size="14" class="t-green">k</text><text x="4" y="35" text-anchor="start" font-size="12" class="t-gray">level 0</text><text x="4" y="105" text-anchor="start" font-size="12" class="t-gray">level 1</text><text x="4" y="175" text-anchor="start" font-size="12" class="t-gray">level 2</text><text x="4" y="245" text-anchor="start" font-size="12" class="t-gray">level 3</text></svg>`,
  "ternary": `<svg viewBox="0 0 520 255" xmlns="http://www.w3.org/2000/svg"><line x1="249.9" y1="29.4" x2="110.1" y2="90.6" stroke="currentColor" stroke-width="1.6"/><line x1="93.6" y1="104.0" x2="56.4" y2="156.0" stroke="currentColor" stroke-width="1.6"/><line x1="100.0" y1="106.0" x2="100.0" y2="154.0" stroke="currentColor" stroke-width="1.6"/><line x1="106.4" y1="104.0" x2="143.6" y2="156.0" stroke="currentColor" stroke-width="1.6"/><line x1="260.0" y1="36.0" x2="260.0" y2="84.0" stroke="currentColor" stroke-width="1.6"/><line x1="270.1" y1="29.4" x2="409.9" y2="90.6" stroke="currentColor" stroke-width="1.6"/><line x1="413.6" y1="104.0" x2="376.4" y2="156.0" stroke="currentColor" stroke-width="1.6"/><line x1="420.0" y1="106.0" x2="420.0" y2="154.0" stroke="currentColor" stroke-width="1.6"/><line x1="426.4" y1="104.0" x2="463.6" y2="156.0" stroke="currentColor" stroke-width="1.6"/><line x1="464.8" y1="174.7" x2="440.2" y2="220.3" stroke="currentColor" stroke-width="1.6"/><line x1="470.0" y1="176.0" x2="470.0" y2="219.0" stroke="currentColor" stroke-width="1.6"/><line x1="475.2" y1="174.7" x2="499.8" y2="220.3" stroke="currentColor" stroke-width="1.6"/><circle cx="260" cy="25" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="100" cy="95" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="50" cy="165" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="100" cy="165" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="150" cy="165" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="260" cy="95" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="420" cy="95" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="370" cy="165" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="420" cy="165" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="470" cy="165" r="11" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-blue f-blue"/><circle cx="435" cy="230" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="470" cy="230" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="505" cy="230" r="11" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/></svg>`,
};

// Runnable C++ examples and their exact output.
const CODE: Record<string, string> = {
  "tree": `#include <algorithm>
#include <cstdio>
#include <memory>
#include <string>
#include <vector>

struct Node {
    std::string name;
    std::vector<std::unique_ptr<Node>> children;  // a node owns its subtrees

    Node* add(const std::string& childName) {
        children.push_back(std::make_unique<Node>(Node{childName, {}}));
        return children.back().get();
    }
};

// Height = length of the longest root-to-leaf path. A leaf has height 0.
int height(const Node& n) {
    int h = 0;
    for (const auto& c : n.children) h = std::max(h, 1 + height(*c));
    return h;
}

int countLeaves(const Node& n) {
    if (n.children.empty()) return 1;  // no children: a leaf
    int total = 0;
    for (const auto& c : n.children) total += countLeaves(*c);
    return total;
}

void print(const Node& n, int depth) {
    std::printf("%*s%s\\n", 2 * depth, "", n.name.c_str());  // indent by level
    for (const auto& c : n.children) print(*c, depth + 1);
}

int main() {
    Node root{"Content/", {}};
    Node* maps = root.add("Maps/");
    maps->add("Level1.umap");
    maps->add("Level2.umap");
    Node* chars = root.add("Characters/");
    Node* hero = chars->add("Hero/");
    hero->add("Hero.uasset");
    hero->add("Hero_Anim.uasset");
    chars->add("Enemy.uasset");
    root.add("Audio/");  // an empty folder is a leaf too

    print(root, 0);
    std::printf("height = %d, leaves = %d\\n", height(root), countLeaves(root));
}`,
};

const OUT: Record<string, string> = {
  "tree": `Content/
  Maps/
    Level1.umap
    Level2.umap
  Characters/
    Hero/
      Hero.uasset
      Hero_Anim.uasset
    Enemy.uasset
  Audio/
height = 3, leaves = 6`,
};

export const lesson: Lesson = {
  id: 'dm-trees',
  title: 'Trees and Their Properties',
  summary: 'Connected graphs with no cycles: why they always have exactly $n - 1$ edges and a unique path between any two vertices, the language of rooted trees, counting in $m$-ary trees, and the trees inside every game engine — scene graphs, behavior trees and file systems.',
  minutes: 20,
  objectives: [
    'Define trees and forests and recognize them from a drawing or a description',
    'State and use the equivalent characterizations of a tree (unique paths, $n - 1$ edges plus connected or acyclic, minimally connected)',
    'Prove that every tree with $n \\ge 2$ vertices has a leaf and that a tree with $n$ vertices has $n - 1$ edges',
    'Use rooted-tree vocabulary (root, parent, child, leaf, internal vertex, level, height, subtree) and compute heights and leaf counts recursively in C++',
    'Apply $n = mi + 1$ and $\\ell = (m - 1)i + 1$ to full $m$-ary trees and the bound $h \\ge \\lceil \\log_m \\ell \\rceil$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What is a tree?',
      blocks: [
        {
          type: 'p',
          text: 'Family trees, folder hierarchies, tournament brackets, the bones of a character skeleton: all of them branch without ever looping back. Graph theory captures that with one short definition.',
        },
        {
          type: 'definition',
          term: 'Tree and forest',
          text: 'A [[dm-tree|tree]] is a **connected** graph with **no cycles** (an acyclic graph). A **forest** is a graph with no cycles — not necessarily connected — so each of its connected components is a tree.',
        },
        {
          type: 'figure',
          svg: FIG.examples,
          alt: 'Three graphs. Left: a tree with 7 vertices and 6 green edges. Middle: a graph containing a red 4-cycle, so not a tree. Right: a forest made of two separate trees.',
          caption: 'Left: a tree ($7$ vertices, $6$ edges). Middle: the red cycle disqualifies it. Right: a forest — acyclic, but in two pieces.',
        },
        {
          type: 'p',
          text: 'Both conditions pull in opposite directions. *Connected* wants enough edges to reach everything; *acyclic* forbids extra edges that would close a loop. A tree is exactly balanced between the two — which is why so many of its properties come out so cleanly.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Trees you already use',
          text: 'The folder structure of a game project, the XML/JSON of a config file, the DOM of a web page, the parse tree a compiler builds from your C++, the bone hierarchy of a skeletal mesh, and the [[la-scene-graph|scene graph]] of every engine are all trees. So are the BFS and DFS trees you met in the graphs unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which of these graphs must be a tree?',
      options: [
        { text: 'A connected graph with $5$ vertices and $5$ edges', why: 'A tree on $5$ vertices has exactly $4$ edges (as this lesson proves), so a connected graph with $5$ edges must contain a cycle.' },
        { text: 'The cycle $C_6$', why: 'It is connected, but it is one big cycle.' },
        { text: 'A graph with $8$ vertices in which every two vertices are joined by exactly one path', correct: true, why: 'At least one path between every pair means connected; never two different paths means no cycle (a cycle gives two routes between any two of its vertices). So it is a tree.' },
        { text: 'A forest with $3$ components', why: 'A forest with more than one component is disconnected, so it is not a tree — it is three trees.' },
      ],
      explanation: '"Exactly one path between every pair of vertices" is one of the equivalent characterizations of a tree (next card): existence of a path gives connectivity, uniqueness rules out cycles. The other options fail connectivity (the forest) or acyclicity ($C_6$, and the connected graph with too many edges).',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Many ways to say "tree"',
      blocks: [
        {
          type: 'theorem',
          name: 'Characterizations of trees',
          text: 'For a graph $G$ with $n$ vertices, the following are equivalent:\n\n(1) $G$ is connected and acyclic (a tree).\n\n(2) Between every two vertices there is **exactly one** path.\n\n(3) $G$ is connected and has $n - 1$ edges.\n\n(4) $G$ is acyclic and has $n - 1$ edges.\n\n(5) $G$ is **minimally connected**: connected, but removing any edge disconnects it.\n\n(6) $G$ is **maximally acyclic**: acyclic, but adding any new edge creates a cycle.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why (1) gives unique paths, and why every edge is a bridge',
          text: 'A tree is connected, so some path joins $u$ and $v$. Suppose two **different** paths $P$ and $Q$ joined them. Follow them from $u$ until they first split, then continue along $P$ until it first meets $Q$ again. The two stretches between the split point and the meeting point form a cycle — impossible in a tree. So the path is unique.\n\nNow remove any edge $\\{x, y\\}$. The only $x$–$y$ path was that edge itself, so after removal $x$ and $y$ are disconnected: every edge of a tree is a **bridge**. That is (5).',
        },
        {
          type: 'p',
          text: 'Each characterization is a different tool. Need to show something is a tree? Often the easiest route is "connected with $n - 1$ edges" (count) or "unique paths". Need a property of trees? Use whichever form makes the proof short.',
        },
        {
          type: 'theorem',
          name: 'Leaf lemma',
          text: 'Every tree with $n \\ge 2$ vertices has at least two **leaves** (vertices of degree $1$).',
        },
        {
          type: 'derivation',
          title: 'Proof of the leaf lemma',
          steps: [
            { tex: 'P = v_0, v_1, \\dots, v_k \\text{ a longest path in } T', why: 'A finite graph has finitely many paths, so a longest one exists. $T$ is connected with $\\ge 2$ vertices, so it has an edge and $k \\ge 1$.' },
            { tex: '\\text{suppose } v_0 \\text{ has a neighbour } w \\ne v_1', why: 'We show this is impossible, so $\\deg(v_0) = 1$.' },
            { tex: 'w = v_j \\text{ for some } j \\ge 2 \\implies v_0, v_1, \\dots, v_j, v_0 \\text{ is a cycle}', why: 'If $w$ is on the path, the edge $v_0 w$ closes a cycle — but trees are acyclic.' },
            { tex: 'w \\notin P \\implies w, v_0, v_1, \\dots, v_k \\text{ is a longer path}', why: 'If $w$ is off the path, prepend it — contradicting that $P$ is longest.' },
          ],
          result: 'So $\\deg(v_0) = 1$, and by the same argument $\\deg(v_k) = 1$: the two ends of a longest path are leaves.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'True or false: if you delete any single edge from a tree, the resulting graph is disconnected.',
      answer: true,
      explanation: 'True. In a tree there is exactly one path between the endpoints $x, y$ of any edge — the edge itself. Delete it and no $x$–$y$ path remains, so the graph splits into exactly two components (two smaller trees). This "every edge is a bridge" property is why a tree is the cheapest way to keep a network connected: no edge is redundant.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'A tree with n vertices has n − 1 edges',
      blocks: [
        {
          type: 'theorem',
          name: 'Edge count of a tree',
          tex: '|E(T)| = |V(T)| - 1',
          text: 'Every tree with $n$ vertices has exactly $n - 1$ edges.',
        },
        {
          type: 'p',
          text: 'The proof is a model [[dm-mathematical-induction|induction]]: remove a leaf to get a smaller tree, use the hypothesis, put the leaf back.',
        },
        {
          type: 'figure',
          svg: FIG.leafremove,
          alt: 'A 7-vertex tree with one leaf v and its edge drawn in red dashes, about to be removed.',
          caption: 'Removing a leaf $v$ and its single edge leaves a tree with one vertex and one edge fewer.',
          maxWidth: 200,
        },
        {
          type: 'derivation',
          title: 'Proof by induction on $n$',
          steps: [
            { tex: 'n = 1:\\ 0 = 1 - 1 \\text{ edges}', why: 'Base case: a single vertex, no edges (a loop would be a cycle).' },
            { tex: '\\text{assume all trees on } n \\text{ vertices have } n - 1 \\text{ edges; let } |V(T)| = n + 1', why: 'Inductive hypothesis, with $n \\ge 1$, so $T$ has at least $2$ vertices.' },
            { tex: 'T \\text{ has a leaf } v', why: 'Leaf lemma (needs $n + 1 \\ge 2$).' },
            { tex: 'T - v \\text{ is a tree with } n \\text{ vertices}', why: 'Acyclic: deleting cannot create a cycle. Connected: a path between two other vertices never passes **through** $v$, because an inner vertex of a path has degree $\\ge 2$.' },
            { tex: '|E(T)| = |E(T - v)| + 1 = (n - 1) + 1 = n', why: 'By the hypothesis $T - v$ has $n - 1$ edges, and $v$ contributed exactly one edge.' },
          ],
          result: 'A tree with $n + 1$ vertices has $n = (n + 1) - 1$ edges, completing the induction.',
        },
        {
          type: 'theorem',
          name: 'Corollary: forests',
          text: 'A forest with $n$ vertices and $c$ connected components has $n - c$ edges. *Proof:* if the components have $n_1, \\dots, n_c$ vertices, they have $(n_1 - 1) + \\dots + (n_c - 1) = n - c$ edges.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The converse needs a second condition',
          text: 'Having $n - 1$ edges alone does **not** make a graph a tree: a triangle plus an isolated vertex has $4$ vertices and $3$ edges. You need $n - 1$ edges **and** connected, or $n - 1$ edges **and** acyclic (characterizations 3 and 4).',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'A forest has $40$ vertices and $7$ connected components. How many edges does it have?',
      answer: '33',
      label: '$|E| =$',
      explanation: 'Each component is a tree, and a tree with $n_j$ vertices has $n_j - 1$ edges. Summing over the $7$ components: $(n_1 - 1) + \\dots + (n_7 - 1) = 40 - 7 = 33$. Each component "saves" one edge compared with its vertex count.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Arrange the steps of the induction proof that a tree with $n$ vertices has $n - 1$ edges.',
      lines: [
        'Base case: a tree with $1$ vertex has $0 = 1 - 1$ edges.',
        'Assume every tree with $n$ vertices has $n - 1$ edges, and let $T$ be a tree with $n + 1$ vertices.',
        'Since $T$ has at least $2$ vertices, it has a leaf $v$.',
        'Removing $v$ and its one edge leaves a connected, acyclic graph $T - v$ with $n$ vertices.',
        'By the hypothesis $T - v$ has $n - 1$ edges, so $T$ has $(n - 1) + 1 = n$ edges.',
      ],
      explanation: 'Base case, then the hypothesis and the larger tree, then find a leaf (the leaf lemma), shrink to a tree the hypothesis covers, and add the leaf\'s edge back. Notice the direction: we start from an arbitrary tree with $n + 1$ vertices and shrink it, rather than building trees up — that guarantees the argument covers **every** tree of that size.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'Here is a "proof" that every graph with $n$ vertices and $n - 1$ edges is a tree. Find the first incorrect line.',
      lines: [
        'Let $G$ have $n$ vertices and $n - 1$ edges.',
        'Every tree on $n$ vertices has $n - 1$ edges.',
        'So $G$ has exactly as many edges as a tree on $n$ vertices.',
        'Therefore $G$ is a tree.',
      ],
      errorLines: [4],
      explanation: 'Line 4 reverses an implication: "tree ⟹ $n - 1$ edges" does not give "$n - 1$ edges ⟹ tree"; lines 1–3 are true statements. The claim is false: a triangle plus an isolated vertex has $4$ vertices and $3$ edges but is neither connected nor acyclic. The correct statement adds a hypothesis: a **connected** graph (or an **acyclic** graph) with $n$ vertices and $n - 1$ edges is a tree.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Rooted trees: parents, children, leaves, height',
      blocks: [
        {
          type: 'p',
          text: 'Pick any vertex of a tree and call it the **root**. Because paths are unique, every other vertex now has a well-defined direction "toward the root", and the tree becomes a hierarchy. Computer scientists draw rooted trees upside down: root at the top.',
        },
        {
          type: 'figure',
          svg: FIG.rooted,
          alt: 'A rooted tree. Root a at level 0 with children b, c, d. b has children e and f; d has children g, h, i; f has children j and k at level 3. Leaves e, c, g, h, i, j, k are green.',
          caption: 'A [[dm-rooted-tree|rooted tree]] with root $a$ (purple). Leaves are green. Its height is $3$.',
        },
        {
          type: 'table',
          headers: ['Term', 'Meaning', 'In the figure'],
          rows: [
            ['**parent** of $v$', 'the neighbour of $v$ on the path to the root', 'parent of $f$ is $b$'],
            ['**children** of $v$', 'the vertices whose parent is $v$', 'children of $d$: $g, h, i$'],
            ['**siblings**', 'vertices with the same parent', '$e$ and $f$'],
            ['**ancestors / descendants**', 'vertices on the path to the root / vertices below', 'ancestors of $j$: $f, b, a$'],
            ['**leaf**', 'a vertex with no children', '$c, e, g, h, i, j, k$'],
            ['**internal vertex**', 'a vertex with at least one child', '$a, b, d, f$'],
            ['**level** (depth) of $v$', 'length of the path from the root to $v$', '$f$ is at level $2$'],
            ['**height**', 'the largest level of any vertex', '$3$ (reached at $j$ and $k$)'],
            ['**subtree** at $v$', '$v$ and all its descendants', 'subtree at $b$: $b, e, f, j, k$'],
          ],
        },
        {
          type: 'p',
          text: 'Most tree definitions and algorithms are **recursive** (a [[dm-recursive-definition|recursive definition]]): a rooted tree is a root together with a list of subtrees. For instance, the height of a leaf is $0$, and the height of any other vertex is $1 + $ the largest height of its children.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Leaf in a rooted tree vs. leaf in a graph',
          text: 'In a rooted tree a leaf is a vertex with no children. A root with one child has degree $1$ but is not a leaf of the rooted tree. Also, some books measure height in vertices instead of edges (a single vertex then has height $1$). This course counts edges.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Use the rooted tree in the figure.',
      figure: {
        type: 'figure',
        svg: FIG.rooted,
        alt: 'A rooted tree. Root a at level 0 with children b, c, d. b has children e and f; d has children g, h, i; f has children j and k at level 3.',
      },
      template: 'The parent of $k$ is ___. The subtree rooted at $d$ has ___ vertices. The number of internal vertices is ___.',
      blanks: [{ answers: ['$f$'] }, { answers: ['$4$'] }, { answers: ['$4$'] }],
      wordBank: ['$f$', '$b$', '$a$', '$4$', '$4$', '$3$', '$7$'],
      explanation: '$k$ hangs from $f$, so its parent is $f$. The subtree at $d$ is $d$ with its descendants $g, h, i$: $4$ vertices. Internal vertices (those with children) are $a, b, d, f$: also $4$. As a check, $11$ vertices $= 4$ internal $+ 7$ leaves, and the tree has $10$ edges $= 11 - 1$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'm-ary trees: counting leaves',
      blocks: [
        {
          type: 'definition',
          term: 'm-ary tree',
          text: 'A rooted tree is [[dm-m-ary-tree|$m$-ary]] if every internal vertex has **at most** $m$ children, and **full** $m$-ary if every internal vertex has **exactly** $m$ children. For $m = 2$ we say binary tree.',
        },
        {
          type: 'figure',
          svg: FIG.ternary,
          alt: 'A full ternary tree: 4 internal vertices (blue), each with exactly 3 children, and 9 leaves (green).',
          caption: 'A full $3$-ary tree: $i = 4$ internal vertices (blue), $\\ell = 9$ leaves (green), $n = 13$ vertices in all.',
        },
        {
          type: 'theorem',
          name: 'Counting a full m-ary tree',
          tex: 'n = m\\,i + 1, \\qquad \\ell = (m - 1)\\,i + 1',
          text: 'A full $m$-ary tree with $i$ internal vertices has $n = mi + 1$ vertices and $\\ell = (m - 1)i + 1$ leaves.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why: every vertex except the root is somebody\'s child',
          text: 'Each of the $i$ internal vertices has exactly $m$ children, giving $mi$ children in total, and every vertex except the root is the child of exactly one parent. So $n = mi + 1$. The leaves are what is left after removing the internal vertices: $\\ell = n - i = (m - 1)i + 1$. Check with the figure: $3 \\cdot 4 + 1 = 13$ and $2 \\cdot 4 + 1 = 9$.',
        },
        {
          type: 'derivation',
          title: 'How many matches in a 64-player knockout tournament?',
          steps: [
            { tex: '\\text{players} = \\text{leaves}, \\quad \\text{matches} = \\text{internal vertices}', why: 'Draw the bracket as a full binary tree: each match has two incoming players (children) and sends its winner up.' },
            { tex: '\\ell = (2 - 1)\\,i + 1 = i + 1', why: 'The leaf formula with $m = 2$.' },
            { tex: '64 = i + 1 \\implies i = 63', why: 'Solve for the number of internal vertices.' },
          ],
          result: '$63$ matches — and you could also see it directly: every match eliminates exactly one player, and $63$ players must be eliminated.',
        },
        {
          type: 'theorem',
          name: 'Height bound',
          tex: '\\ell \\le m^h \\quad\\Longrightarrow\\quad h \\ge \\lceil \\log_m \\ell \\rceil',
          text: 'An $m$-ary tree of height $h$ has at most $m^h$ leaves (each level multiplies the number of vertices by at most $m$). So a tree with $\\ell$ leaves has height at least $\\lceil \\log_m \\ell \\rceil$ — a [[logarithm]]. This is why balanced trees of millions of items are only about $20$ levels deep, and why every comparison sort needs about $\\log_2(n!)$ comparisons.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A full $3$-ary tree has $40$ internal vertices. How many leaves does it have?',
      answer: '81',
      label: '$\\ell =$',
      hint: 'Use $\\ell = (m - 1)i + 1$.',
      explanation: 'With $m = 3$ and $i = 40$: $\\ell = (3 - 1) \\cdot 40 + 1 = 81$. As a check, $n = mi + 1 = 121$ and $n - i = 121 - 40 = 81$. ✓',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'A binary tree (each vertex has at most $2$ children) has $1000$ leaves. What is the smallest possible height?',
      answer: '10',
      label: '$h_{\\min} =$',
      hint: 'A binary tree of height $h$ has at most $2^h$ leaves.',
      explanation: 'We need $2^h \\ge 1000$. Since $2^9 = 512 < 1000 \\le 1024 = 2^{10}$, the smallest height is $h = \\lceil \\log_2 1000 \\rceil = 10$. A height-$10$ tree really can hold $1000$ leaves (take a complete tree with $1024$ leaf slots and prune $24$).',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Trees in games: scene graphs, behavior trees, decision trees',
      blocks: [
        {
          type: 'list',
          items: [
            '**Scene graphs and skeletons.** Every object has one parent transform; its world transform is the parent\'s world transform times its own local one. A cycle would make an object its own ancestor and the world transform undefined, which is why engines refuse to parent an object to its own child.',
            '**Behavior trees** (Unreal Engine, many AI frameworks). Leaves are conditions and actions; internal nodes decide which children run. A **Sequence** runs its children left to right and fails as soon as one fails ("do all of these"). A **Selector** tries children left to right until one succeeds ("do the first one that works").',
            '**Decision trees** in AI and machine learning: internal vertices test a feature ("health < 30%?"), leaves give a decision.',
            '**File systems and asset folders:** folders are internal vertices, files (and empty folders) are leaves.',
            '**Spatial trees:** quadtrees, octrees and BSP trees split space recursively for fast collision checks and rendering.',
          ],
        },
        {
          type: 'figure',
          svg: FIG.btree,
          alt: 'A behavior tree. The root Selector has three children: a Sequence of Enemy seen?, In range?, Attack; a Sequence of Low HP?, Flee; and the action Patrol.',
          caption: 'An enemy\'s behavior tree. Each frame the root Selector tries: attack if possible, otherwise flee if hurt, otherwise patrol.',
        },
        {
          type: 'code',
          title: 'asset_tree.cpp',
          runnable: true,
          code: CODE.tree,
          output: OUT.tree,
          annotations: [
            { lines: '7-15', text: 'A general rooted tree: each node owns a vector of children. `unique_ptr` makes ownership explicit — destroying the root frees the whole tree.' },
            { lines: '17-22', text: 'Height, recursively: a leaf has height $0$; otherwise $1 + $ the tallest child.' },
            { lines: '24-29', text: 'Leaf count, recursively: a leaf counts $1$; otherwise add up the children\'s counts.' },
            { lines: '31-34', text: 'Print each node indented by its level, then its subtrees — the format of the `tree` command.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Check against the theorems',
          text: 'The asset tree has $10$ nodes, so it must have $9$ parent–child links ($n - 1$). It has $4$ internal nodes (`Content/`, `Maps/`, `Characters/`, `Hero/`) and $6$ leaves; it is not a full $m$-ary tree, so the leaf formula does not apply — but $n = i + \\ell$ always does.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'In the behavior tree from the figure, the enemy currently does **not** see the player and its health **is** low. Which action runs this frame?',
      figure: {
        type: 'figure',
        svg: FIG.btree,
        alt: 'A behavior tree. The root Selector has three children: a Sequence of Enemy seen?, In range?, Attack; a Sequence of Low HP?, Flee; and the action Patrol.',
      },
      options: [
        { text: 'Attack', why: 'The first Sequence fails at its first child, "Enemy seen?", so "Attack" is never reached.' },
        { text: 'Flee', correct: true, why: 'The Selector moves on to its second child: "Low HP?" succeeds, so the Sequence continues to "Flee", which runs. The Selector stops at this success.' },
        { text: 'Patrol', why: 'The Selector only reaches Patrol if both Sequences fail. The second one succeeds.' },
        { text: 'Flee and then Patrol', why: 'A Selector stops at its first successful child; it does not run the later ones.' },
      ],
      explanation: 'Evaluate recursively from the root. Selector, child 1: the Sequence checks "Enemy seen?" — false — so the Sequence fails. Selector, child 2: the Sequence checks "Low HP?" — true — then runs "Flee"; the Sequence succeeds. A Selector returns on the first success, so Patrol is skipped. Behavior trees are just a recursive traversal of a rooted tree with these two rules.',
    },
  ],
  takeaways: [
    'A tree is a connected acyclic graph; a forest is an acyclic graph whose components are trees.',
    'For a graph with $n$ vertices, "tree" ⟺ unique paths ⟺ connected with $n - 1$ edges ⟺ acyclic with $n - 1$ edges ⟺ minimally connected.',
    'Every tree with $n \\ge 2$ vertices has at least two leaves; removing a leaf is the standard induction step, and it proves $|E| = n - 1$ (a forest with $c$ components has $n - c$ edges).',
    'Rooted trees have parents, children, leaves, levels and a height; most tree algorithms are recursive over subtrees.',
    'A full $m$-ary tree with $i$ internal vertices has $mi + 1$ vertices and $(m - 1)i + 1$ leaves, and any $m$-ary tree with $\\ell$ leaves has height $\\ge \\lceil \\log_m \\ell \\rceil$.',
  ],
  reading: [
    { title: 'Levin, Discrete Mathematics: An Open Introduction — Trees', url: 'https://discrete.openmathbooks.org/dmoi3.html', source: 'book', note: 'Section 4.2 proves the equivalent characterizations and the $n - 1$ edges theorem with exercises on rooted trees.' },
    { title: 'Tree (graph theory) (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Tree_(graph_theory)', source: 'wikipedia', note: 'Definitions, equivalent characterizations, rooted and ordered trees, and Cayley\'s formula for counting labeled trees.' },
    { title: 'Behavior tree (artificial intelligence, robotics and control) (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)', source: 'wikipedia', note: 'How Sequence, Selector (Fallback) and leaf nodes work, with game AI examples.' },
    { title: 'MIT 6.042J Mathematics for Computer Science', url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/', source: 'other', note: 'The graph theory lectures prove the basic properties of trees and spanning trees.' },
  ],
};
