import type { Lesson } from '../../types';

// Algo frames come from scratch scripts that run the algorithms; every runnable program was compiled and run.
export const lesson: Lesson = {
  id: 'dsa-spatial-structures',
  title: 'Spatial Data Structures',
  summary: 'Answering "what is near here?" fast: quadtrees and octrees with range queries, k-d trees for nearest neighbors, bounding volume hierarchies for ray casts, and sweep and prune for collision pairs, with the trade-offs between static and dynamic scenes.',
  minutes: 26,
  objectives: [
    'Explain when a uniform grid or spatial hash breaks down, and how adaptive subdivision fixes it',
    'Insert into a bucket quadtree, run a range query, and prove that pruning by bounding box never misses a result',
    'Build a k-d tree by median splits and find a nearest neighbor with the far-side pruning test',
    'Build a bounding volume hierarchy and traverse it front to back for the closest ray hit, using the slab test',
    'Find overlapping pairs with sweep and prune, and use temporal coherence to keep it near linear',
    'Choose a spatial structure for static versus dynamic scenes, and for points, objects with extent and rays',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Spatial queries, and where the grid breaks',
      blocks: [
        {
          type: 'p',
          text: 'Games ask geometric questions all frame long. Which pairs of objects might be touching (the [[phys-broad-phase|broad phase]] of collision detection)? Which enemies are within $30$ m of the grenade? What does this bullet, or this line of sight, hit first? Which cover point is nearest? Brute force answers each in $O(n)$ per query and $O(n^2)$ for all pairs, which is fine for $50$ objects and hopeless for $50\\,000$.',
        },
        {
          type: 'p',
          text: 'A **spatial data structure** organizes objects by *where* they are, so a query can skip whole regions that cannot matter. You already met the simplest one: a uniform grid, stored as a dense 2D array for a bounded world or as a [[dsa-spatial-hash|spatial hash]] for an unbounded one. With cells about the size of the largest object, each object only checks the $3 \\times 3$ block around its cell. Uniform grids are hard to beat when objects are spread out and similar in size: $O(1)$ to insert, cache-friendly, trivial to rebuild every frame.',
        },
        {
          type: 'p',
          text: 'The grid has one cell size, though, and real scenes are not uniform. Soldiers bunch at a choke point. A battlefield holds bullets and buildings. An open world is mostly empty. A cell size that suits one part of the scene is wrong for another.',
        },
        {
          type: 'derivation',
          title: 'What a crowd does to a grid',
          steps: [
            { tex: 'n \\text{ objects in one cell}', why: 'Everyone squeezes through the same doorway: all their centres fall in one cell.' },
            { tex: '\\text{every pair is in the same } 3 \\times 3 \\text{ block}', why: 'The grid cannot tell them apart, so it must hand every pair to the narrow phase.' },
            { tex: '\\binom{n}{2} = \\frac{n(n-1)}{2} = \\Theta(n^2) \\text{ tests}', why: 'Exactly the brute-force count: the grid saved nothing.' },
            { tex: '\\text{shrinking cells} \\implies \\text{big objects span many cells}', why: 'And the empty parts of the world now cost memory (dense array) or the big objects are filed many times (hash).' },
          ],
          result: 'One fixed resolution cannot fit both crowded and empty regions. The structures in this lesson adapt to the data instead: they subdivide only where objects are.',
        },
        {
          type: 'table',
          headers: ['Structure', 'Divides', 'Typical use'],
          rows: [
            ['uniform grid / spatial hash', 'space, fixed cells', 'many similar-size moving objects'],
            ['quadtree (2D) / octree (3D)', 'space, recursively into quadrants', 'uneven density, range queries'],
            ['k-d tree', 'space, by median planes along alternating axes', 'nearest neighbor on static points'],
            ['bounding volume hierarchy (BVH)', 'the **objects** into groups with boxes', 'ray casts, collision of objects with extent'],
            ['sweep and prune', 'nothing: sorts intervals on an axis', 'all overlapping pairs, frame after frame'],
          ],
          caption: 'Space-partitioning structures split the world; a BVH splits the set of objects. That difference shapes everything below.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Bounding boxes everywhere',
          text: 'Most of these structures work with [[phys-aabb|axis-aligned bounding boxes]] (AABBs): an object\'s box is cheap to overlap-test and conservative, so if two boxes do not overlap, the objects cannot either. The broad phase finds candidate pairs with boxes; the narrow phase runs the exact (and expensive) shape test only on those.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A grid broad phase sends every pair of objects that share a cell to the narrow phase. During a siege, $1000$ soldiers crowd into a single cell. How many narrow-phase pair tests does that one cell produce?',
      label: 'tests $=$',
      answer: '499500',
      hint: 'Every unordered pair of the $1000$ soldiers is tested once.',
      explanation: 'The number of unordered pairs is $\\binom{1000}{2} = \\frac{1000 \\cdot 999}{2} = 499\\,500$: exactly what brute force over those soldiers would cost. The grid only helps when objects are spread across many cells; a crowd defeats it. An adaptive structure subdivides that cell further, so nearby soldiers end up in different small regions.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Quadtrees and octrees: subdivide where it is crowded',
      blocks: [
        {
          type: 'p',
          text: 'A [[dsa-quadtree|quadtree]] covers a square region with a tree. Every node owns a square; an internal node splits its square at the midpoint into four equal children (SW, SE, NW, NE). Points live in the leaves. In the common **bucket** variant, a leaf holds up to `kCapacity` points; inserting one more splits it into four and pushes its points down. Crowded regions get deep, small leaves; empty regions stay as one big leaf.',
        },
        {
          type: 'definition',
          term: 'Quadtree invariants',
          text: '(1) The four children of a node partition its square exactly: every point of the square lies in exactly one child (use half-open squares $[x_0, x_1) \\times [y_0, y_1)$ so points on a split line are not claimed twice). (2) Every stored point lies in the square of the leaf that holds it. (3) A leaf holds at most `kCapacity` points, unless it sits at the maximum depth.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 320 306" xmlns="http://www.w3.org/2000/svg">
<rect x="40.0" y="20.0" width="260.0" height="260.0" fill="none" stroke="currentColor" stroke-width="1.8"/>
<line x1="170.0" y1="280.0" x2="170.0" y2="20.0" stroke="currentColor" stroke-width="1.6" class="s-blue"/>
<line x1="40.0" y1="150.0" x2="300.0" y2="150.0" stroke="currentColor" stroke-width="1.6" class="s-blue"/>
<line x1="105.0" y1="280.0" x2="105.0" y2="150.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<line x1="40.0" y1="215.0" x2="170.0" y2="215.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<line x1="235.0" y1="150.0" x2="235.0" y2="20.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<line x1="170.0" y1="85.0" x2="300.0" y2="85.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<circle cx="79.0" cy="72.0" r="4.2" fill="currentColor"/>
<text x="86.0" y="66.0" text-anchor="start" font-size="13" font-weight="700">A</text>
<circle cx="222.0" cy="59.0" r="4.2" fill="currentColor"/>
<text x="229.0" y="53.0" text-anchor="start" font-size="13" font-weight="700">B</text>
<circle cx="196.0" cy="124.0" r="4.2" fill="currentColor"/>
<text x="203.0" y="118.0" text-anchor="start" font-size="13" font-weight="700">C</text>
<circle cx="261.0" cy="111.0" r="4.2" fill="currentColor"/>
<text x="268.0" y="105.0" text-anchor="start" font-size="13" font-weight="700">D</text>
<circle cx="118.0" cy="228.0" r="4.2" fill="currentColor"/>
<text x="125.0" y="222.0" text-anchor="start" font-size="13" font-weight="700">E</text>
<circle cx="92.0" cy="189.0" r="4.2" fill="currentColor"/>
<text x="85.0" y="183.0" text-anchor="end" font-size="13" font-weight="700">F</text>
<circle cx="144.0" cy="254.0" r="4.2" fill="currentColor"/>
<text x="151.0" y="248.0" text-anchor="start" font-size="13" font-weight="700">G</text>
<circle cx="274.0" cy="228.0" r="4.2" fill="currentColor"/>
<text x="281.0" y="222.0" text-anchor="start" font-size="13" font-weight="700">H</text>
<text x="40.0" y="296.0" text-anchor="middle" font-size="11" class="t-gray">0</text>
<text x="34.0" y="284.0" text-anchor="end" font-size="11" class="t-gray">0</text>
<text x="170.0" y="296.0" text-anchor="middle" font-size="11" class="t-gray">50</text>
<text x="34.0" y="154.0" text-anchor="end" font-size="11" class="t-gray">50</text>
<text x="300.0" y="296.0" text-anchor="middle" font-size="11" class="t-gray">100</text>
<text x="34.0" y="24.0" text-anchor="end" font-size="11" class="t-gray">100</text>
<text x="45.2" y="37.8" text-anchor="start" font-size="12" class="t-gray">NW</text>
<text x="294.8" y="37.8" text-anchor="end" font-size="12" class="t-gray">NE</text>
<text x="45.2" y="272.2" text-anchor="start" font-size="12" class="t-gray">SW</text>
<text x="294.8" y="272.2" text-anchor="end" font-size="12" class="t-gray">SE</text>
</svg>`,
          alt: 'A 100 by 100 square holding eight labelled points. Blue lines split it into four quadrants at 50. The NE quadrant and the SW quadrant are each split again by purple lines at 75 and 25. Points: A (15, 80) alone in NW; B, C and D in separate sub-quadrants of NE; F, E and G in the SW quadrant, with E and G sharing its SE sub-quadrant; H alone in SE.',
          caption: 'The quadtree after inserting $A$–$H$ with capacity $2$: the root split once (blue) and the two crowded quadrants split again (purple). The empty-ish NW and SE quadrants stay single leaves.',
          maxWidth: 340,
        },
        {
          type: 'p',
          text: 'Step through the insertions that built it. Watch the third point split the root, and watch $D$ and $G$ split the quadrants they land in.',
        },
        {"type": "algo", "view": "graph", "width": 440, "height": 232, "interval": 1500, "nodes": [{"id": "R", "x": 219.8, "y": 32, "label": "R"}, {"id": "R0", "x": 89.2, "y": 112, "label": "SW"}, {"id": "R00", "x": 24.0, "y": 192, "label": "SW"}, {"id": "R01", "x": 67.5, "y": 192, "label": "SE"}, {"id": "R02", "x": 111.0, "y": 192, "label": "NW"}, {"id": "R03", "x": 154.5, "y": 192, "label": "NE"}, {"id": "R1", "x": 198.0, "y": 112, "label": "SE"}, {"id": "R2", "x": 241.5, "y": 112, "label": "NW"}, {"id": "R3", "x": 350.2, "y": 112, "label": "NE"}, {"id": "R30", "x": 285.0, "y": 192, "label": "SW"}, {"id": "R31", "x": 328.5, "y": 192, "label": "SE"}, {"id": "R32", "x": 372.0, "y": 192, "label": "NW"}, {"id": "R33", "x": 415.5, "y": 192, "label": "NE"}], "edges": [{"from": "R", "to": "R0"}, {"from": "R", "to": "R1"}, {"from": "R", "to": "R2"}, {"from": "R", "to": "R3"}, {"from": "R0", "to": "R00"}, {"from": "R0", "to": "R01"}, {"from": "R0", "to": "R02"}, {"from": "R0", "to": "R03"}, {"from": "R3", "to": "R30"}, {"from": "R3", "to": "R31"}, {"from": "R3", "to": "R32"}, {"from": "R3", "to": "R33"}], "code": "void insert(Node* n, Point p, int depth) {\n    if (n->isLeaf()) {\n        if (n->pts.size() < kCapacity || depth == kMaxDepth) {\n            n->pts.push_back(p);\n            return;\n        }\n        n->split();  // four children\n        for (Point q : n->takePoints())  // push stored points down\n            insert(n->child(q), q, depth + 1);\n    }\n    insert(n->child(p), p, depth + 1);\n}", "frames": [{"note": "An empty quadtree over the square $[0, 100)^2$. Leaf capacity $2$, maximum depth $3$.", "hidden": ["R0", "R00", "R01", "R02", "R03", "R1", "R2", "R3", "R30", "R31", "R32", "R33"], "nodeColors": [], "nodeNotes": [{"id": "R", "text": "–"}], "edgeColors": [], "lines": [1], "vars": [["next point", "A (15, 80)"]]}, {"note": "Insert $A$: the root is a leaf with room. Store it there.", "hidden": ["R0", "R00", "R01", "R02", "R03", "R1", "R2", "R3", "R30", "R31", "R32", "R33"], "nodeColors": [{"id": "R", "color": "orange"}], "nodeNotes": [{"id": "R", "text": "A"}], "edgeColors": [], "lines": [2, 3, 4], "vars": [["inserting", "A (15, 80)"], ["depth", "0"]]}, {"note": "Insert $B$: the root is a leaf with room. Store it there.", "hidden": ["R0", "R00", "R01", "R02", "R03", "R1", "R2", "R3", "R30", "R31", "R32", "R33"], "nodeColors": [{"id": "R", "color": "orange"}], "nodeNotes": [{"id": "R", "text": "A,B"}], "edgeColors": [], "lines": [2, 3, 4], "vars": [["inserting", "B (70, 85)"], ["depth", "0"]]}, {"note": "Insert $C$: the root is full (A and B). Split it into four children and push $A$ and $B$ down.", "hidden": ["R00", "R01", "R02", "R03", "R30", "R31", "R32", "R33"], "nodeColors": [{"id": "R0", "color": "purple"}, {"id": "R1", "color": "purple"}, {"id": "R2", "color": "purple"}, {"id": "R3", "color": "purple"}, {"id": "R", "color": "orange"}], "nodeNotes": [{"id": "R0", "text": "–"}, {"id": "R1", "text": "–"}, {"id": "R2", "text": "A"}, {"id": "R3", "text": "B"}], "edgeColors": [], "lines": [6, 7, 8, 9], "vars": [["inserting", "C (60, 60)"], ["depth", "0"], ["moved", "A → NW, B → NE"]]}, {"note": "Then $C$ itself goes into child NE.", "hidden": ["R00", "R01", "R02", "R03", "R30", "R31", "R32", "R33"], "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R3", "color": "orange"}], "nodeNotes": [{"id": "R0", "text": "–"}, {"id": "R1", "text": "–"}, {"id": "R2", "text": "A"}, {"id": "R3", "text": "B,C"}], "edgeColors": [{"from": "R", "to": "R3", "color": "orange"}], "lines": [11, 2, 3, 4], "vars": [["inserting", "C (60, 60)"], ["depth", "1"]]}, {"note": "Insert $D$: descend to NE, which is full (B and C). Split it into four children and push $B$ and $C$ down.", "hidden": ["R00", "R01", "R02", "R03"], "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R30", "color": "purple"}, {"id": "R31", "color": "purple"}, {"id": "R32", "color": "purple"}, {"id": "R33", "color": "purple"}, {"id": "R3", "color": "orange"}], "nodeNotes": [{"id": "R0", "text": "–"}, {"id": "R1", "text": "–"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "–"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "edgeColors": [{"from": "R", "to": "R3", "color": "orange"}], "lines": [6, 7, 8, 9], "vars": [["inserting", "D (85, 65)"], ["depth", "1"], ["moved", "B → NW, C → SW"]]}, {"note": "Then $D$ itself goes into child SE.", "hidden": ["R00", "R01", "R02", "R03"], "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R3", "color": "blue"}, {"id": "R31", "color": "orange"}], "nodeNotes": [{"id": "R0", "text": "–"}, {"id": "R1", "text": "–"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "edgeColors": [{"from": "R", "to": "R3", "color": "blue"}, {"from": "R3", "to": "R31", "color": "orange"}], "lines": [11, 2, 3, 4], "vars": [["inserting", "D (85, 65)"], ["depth", "2"]]}, {"note": "Insert $E$: descend to SW, a leaf with room. Store it there.", "hidden": ["R00", "R01", "R02", "R03"], "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "orange"}], "nodeNotes": [{"id": "R0", "text": "E"}, {"id": "R1", "text": "–"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "edgeColors": [{"from": "R", "to": "R0", "color": "orange"}], "lines": [11, 2, 3, 4], "vars": [["inserting", "E (30, 20)"], ["depth", "1"]]}, {"note": "Insert $F$: descend to SW, a leaf with room. Store it there.", "hidden": ["R00", "R01", "R02", "R03"], "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "orange"}], "nodeNotes": [{"id": "R0", "text": "E,F"}, {"id": "R1", "text": "–"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "edgeColors": [{"from": "R", "to": "R0", "color": "orange"}], "lines": [11, 2, 3, 4], "vars": [["inserting", "F (20, 35)"], ["depth", "1"]]}, {"note": "Insert $G$: descend to SW, which is full (E and F). Split it into four children and push $E$ and $F$ down.", "hidden": [], "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R00", "color": "purple"}, {"id": "R01", "color": "purple"}, {"id": "R02", "color": "purple"}, {"id": "R03", "color": "purple"}, {"id": "R0", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "–"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "edgeColors": [{"from": "R", "to": "R0", "color": "orange"}], "lines": [6, 7, 8, 9], "vars": [["inserting", "G (40, 10)"], ["depth", "1"], ["moved", "E → SE, F → NW"]]}, {"note": "Then $G$ itself goes into child SE.", "hidden": [], "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "blue"}, {"id": "R01", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "–"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "edgeColors": [{"from": "R", "to": "R0", "color": "blue"}, {"from": "R0", "to": "R01", "color": "orange"}], "lines": [11, 2, 3, 4], "vars": [["inserting", "G (40, 10)"], ["depth", "2"]]}, {"note": "Insert $H$: descend to SE, a leaf with room. Store it there.", "hidden": [], "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R1", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "edgeColors": [{"from": "R", "to": "R1", "color": "orange"}], "lines": [11, 2, 3, 4], "vars": [["inserting", "H (90, 20)"], ["depth", "1"]]}, {"note": "All $8$ points stored in $13$ nodes. Leaves are small where points crowd (the NE and SW quadrants) and large where space is empty.", "hidden": [], "nodeColors": [], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "edgeColors": [], "lines": [], "vars": [["nodes", "13"], ["leaves", "10"], ["height", "2"]]}], "caption": "Children are drawn in index order SW, SE, NW, NE (index $= [x \\ge m_x] + 2[y \\ge m_y]$). Under each leaf: the points it stores. Orange: the node being changed; blue: the path down to it; purple: children just created."},
        {
          type: 'p',
          text: 'Choosing the child is pure arithmetic, no comparisons against other points: with the node\'s centre $(m_x, m_y)$, the child index is $[x \\ge m_x] + 2\\,[y \\ge m_y]$. Insertion walks one root-to-leaf path, so it costs $O(\\text{depth})$, plus the occasional split, which moves at most `kCapacity` points.',
        },
        {
          type: 'derivation',
          title: 'How deep can it get?',
          steps: [
            { tex: '\\text{side at depth } d = \\frac{L}{2^d}', why: 'Each split halves the side of the square; $L$ is the side of the whole world.' },
            { tex: '\\text{a split separates points only if they are } \\ge \\text{ some distance } \\delta \\text{ apart}', why: 'Two points closer than about the side of a cell can fall in the same child again and again.' },
            { tex: '\\frac{L}{2^d} \\approx \\delta \\implies d \\approx \\log_2 \\frac{L}{\\delta}', why: 'Points stop sharing a leaf once the cells are about as small as their separation.' },
            { tex: '\\delta = 0 \\implies d = \\infty', why: 'Two identical points (a stack of crates at the same spot) can never be separated by splitting.' },
          ],
          result: 'Depth depends on how close points get, not only on $n$. That is why every real quadtree has a maximum depth: a leaf at the limit simply holds more than `kCapacity` points.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Octrees, and objects with extent',
          text: 'An [[dsa-octree|octree]] is the same idea in 3D: each cube splits into $8$ children, and the child index is $[x \\ge m_x] + 2[y \\ge m_y] + 4[z \\ge m_z]$. Points are easy; objects with size are not, because an object can straddle a split line. The options: keep it in the smallest node that fully contains it (objects crossing the centre lines get stuck high in the tree), file it in every leaf it overlaps (and deduplicate results), or use a **loose quadtree**, whose node boxes are enlarged (typically $2\\times$) so that every object fits in a node chosen by its size alone.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'Put the steps of inserting a point $p$ into a bucket quadtree in order, for the case where $p$ lands in a leaf that is already full and not yet at the maximum depth. One line does not belong.',
      lines: [
        'Descend from the root, at each internal node choosing the child whose square contains $p$',
        'Arrive at a leaf that already holds `kCapacity` points and is above the maximum depth',
        'Split that leaf: create four children, one per quadrant of its square',
        'Move the leaf\'s points into the children that contain them, then insert $p$ into its child (which may split again)',
      ],
      distractors: ['Rotate the full leaf upward to rebalance the tree, as an AVL tree would'],
      explanation: 'Insertion first walks down to the one leaf whose square contains $p$; only there can the capacity be exceeded. A full leaf above the depth limit becomes internal by creating its four children, and only then can its points (and $p$) be redistributed into them. If they all land in the same child, that child splits in turn. Quadtrees never rotate: a node\'s square is fixed by geometry, so there is nothing to rebalance. Their shape follows the data, not an ordering.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Range queries: prune whole subtrees',
      blocks: [
        {
          type: 'p',
          text: 'A **range query** asks for every point inside a box $q$: the units inside a selection rectangle, the targets inside a grenade\'s blast box, the objects inside the camera\'s view region. The quadtree answers it by recursion: if a node\'s square misses $q$, skip the node and everything below it; at a leaf that overlaps $q$, test its points one by one; otherwise recurse into the four children.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 320 306" xmlns="http://www.w3.org/2000/svg">
<rect x="40.0" y="20.0" width="260.0" height="260.0" fill="none" stroke="currentColor" stroke-width="1.8"/>
<line x1="170.0" y1="280.0" x2="170.0" y2="20.0" stroke="currentColor" stroke-width="1.6" class="s-blue"/>
<line x1="40.0" y1="150.0" x2="300.0" y2="150.0" stroke="currentColor" stroke-width="1.6" class="s-blue"/>
<line x1="105.0" y1="280.0" x2="105.0" y2="150.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<line x1="40.0" y1="215.0" x2="170.0" y2="215.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<line x1="235.0" y1="150.0" x2="235.0" y2="20.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<line x1="170.0" y1="85.0" x2="300.0" y2="85.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<rect x="183.0" y="118.8" width="104.0" height="122.2" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.2" stroke-dasharray="6 4" class="s-orange f-orange"/>
<text x="283.0" y="133.8" text-anchor="end" font-size="14" font-weight="700" class="t-orange">q</text>
<circle cx="79.0" cy="72.0" r="4.2" fill="currentColor" class="f-gray"/>
<text x="86.0" y="66.0" text-anchor="start" font-size="13" font-weight="700" class="t-gray">A</text>
<circle cx="222.0" cy="59.0" r="4.2" fill="currentColor" class="f-gray"/>
<text x="229.0" y="53.0" text-anchor="start" font-size="13" font-weight="700" class="t-gray">B</text>
<circle cx="196.0" cy="124.0" r="4.2" fill="currentColor" class="f-green"/>
<text x="203.0" y="118.0" text-anchor="start" font-size="13" font-weight="700" class="t-green">C</text>
<circle cx="261.0" cy="111.0" r="4.2" fill="currentColor" class="f-red"/>
<text x="268.0" y="105.0" text-anchor="start" font-size="13" font-weight="700" class="t-red">D</text>
<circle cx="118.0" cy="228.0" r="4.2" fill="currentColor" class="f-gray"/>
<text x="125.0" y="222.0" text-anchor="start" font-size="13" font-weight="700" class="t-gray">E</text>
<circle cx="92.0" cy="189.0" r="4.2" fill="currentColor" class="f-gray"/>
<text x="85.0" y="183.0" text-anchor="end" font-size="13" font-weight="700" class="t-gray">F</text>
<circle cx="144.0" cy="254.0" r="4.2" fill="currentColor" class="f-gray"/>
<text x="151.0" y="248.0" text-anchor="start" font-size="13" font-weight="700" class="t-gray">G</text>
<circle cx="274.0" cy="228.0" r="4.2" fill="currentColor" class="f-green"/>
<text x="281.0" y="222.0" text-anchor="start" font-size="13" font-weight="700" class="t-green">H</text>
<text x="40.0" y="296.0" text-anchor="middle" font-size="11" class="t-gray">0</text>
<text x="34.0" y="284.0" text-anchor="end" font-size="11" class="t-gray">0</text>
<text x="170.0" y="296.0" text-anchor="middle" font-size="11" class="t-gray">50</text>
<text x="34.0" y="154.0" text-anchor="end" font-size="11" class="t-gray">50</text>
<text x="300.0" y="296.0" text-anchor="middle" font-size="11" class="t-gray">100</text>
<text x="34.0" y="24.0" text-anchor="end" font-size="11" class="t-gray">100</text>
<text x="45.2" y="37.8" text-anchor="start" font-size="12" class="t-gray">NW</text>
<text x="294.8" y="37.8" text-anchor="end" font-size="12" class="t-gray">NE</text>
<text x="45.2" y="272.2" text-anchor="start" font-size="12" class="t-gray">SW</text>
<text x="294.8" y="272.2" text-anchor="end" font-size="12" class="t-gray">SE</text>
</svg>`,
          alt: 'The same quadtree with an orange dashed query box from x 55 to 95 and y 15 to 62. Points H and C, inside the box, are green; D, just above the box, is red; the other points are gray.',
          caption: 'Query box $q = [55, 95) \\times [15, 62)$. Green: points found. Red: tested and rejected. Gray: never looked at.',
          maxWidth: 340,
        },
        {"type": "algo", "view": "graph", "width": 440, "height": 232, "interval": 1500, "nodes": [{"id": "R", "x": 219.8, "y": 32, "label": "R"}, {"id": "R0", "x": 89.2, "y": 112, "label": "SW"}, {"id": "R00", "x": 24.0, "y": 192, "label": "SW"}, {"id": "R01", "x": 67.5, "y": 192, "label": "SE"}, {"id": "R02", "x": 111.0, "y": 192, "label": "NW"}, {"id": "R03", "x": 154.5, "y": 192, "label": "NE"}, {"id": "R1", "x": 198.0, "y": 112, "label": "SE"}, {"id": "R2", "x": 241.5, "y": 112, "label": "NW"}, {"id": "R3", "x": 350.2, "y": 112, "label": "NE"}, {"id": "R30", "x": 285.0, "y": 192, "label": "SW"}, {"id": "R31", "x": 328.5, "y": 192, "label": "SE"}, {"id": "R32", "x": 372.0, "y": 192, "label": "NW"}, {"id": "R33", "x": 415.5, "y": 192, "label": "NE"}], "edges": [{"from": "R", "to": "R0"}, {"from": "R", "to": "R1"}, {"from": "R", "to": "R2"}, {"from": "R", "to": "R3"}, {"from": "R0", "to": "R00"}, {"from": "R0", "to": "R01"}, {"from": "R0", "to": "R02"}, {"from": "R0", "to": "R03"}, {"from": "R3", "to": "R30"}, {"from": "R3", "to": "R31"}, {"from": "R3", "to": "R32"}, {"from": "R3", "to": "R33"}], "code": "void query(const Node* n, Box q, std::vector<Point>& out) {\n    ++visited;\n    if (!n->box.intersects(q)) return;  // prune the subtree\n    if (n->isLeaf()) {\n        for (Point p : n->pts) {\n            ++tested;\n            if (q.contains(p)) out.push_back(p);\n        }\n        return;\n    }\n    for (const Node* c : n->children()) query(c, q, out);\n}", "frames": [{"note": "Query box $q = [55, 95) \\times [15, 62)$ on the finished tree. Brute force would test all $8$ points.", "nodeColors": [], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [1], "vars": [["visited", "0"], ["tested", "0"], ["found", "–"]]}, {"note": "The root $[0, 100) \\times [0, 100)$ overlaps $q$: recurse into its four children.", "nodeColors": [{"id": "R", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [2, 3, 10], "vars": [["visited", "1"], ["tested", "0"], ["found", "–"]]}, {"note": "Node SW covers $[0, 50) \\times [0, 50)$, which misses $q$: prune it and its whole subtree.", "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [2, 3], "vars": [["visited", "2"], ["tested", "0"], ["found", "–"]]}, {"note": "Leaf SE $[50, 100) \\times [0, 50)$ overlaps $q$: test its points. $H = (90, 20)$ is inside.", "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "gray"}, {"id": "R1", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["visited", "3"], ["tested", "1"], ["found", "H"]]}, {"note": "Node NW covers $[0, 50) \\times [50, 100)$, which misses $q$: prune it.", "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "gray"}, {"id": "R1", "color": "green"}, {"id": "R2", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [2, 3], "vars": [["visited", "4"], ["tested", "1"], ["found", "H"]]}, {"note": "Node NE $[50, 100) \\times [50, 100)$ overlaps $q$: recurse into its four children.", "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "gray"}, {"id": "R1", "color": "green"}, {"id": "R2", "color": "gray"}, {"id": "R3", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [2, 3, 10], "vars": [["visited", "5"], ["tested", "1"], ["found", "H"]]}, {"note": "Leaf NE → SW $[50, 75) \\times [50, 75)$ overlaps $q$: test its points. $C = (60, 60)$ is inside.", "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "gray"}, {"id": "R1", "color": "green"}, {"id": "R2", "color": "gray"}, {"id": "R3", "color": "blue"}, {"id": "R30", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["visited", "6"], ["tested", "2"], ["found", "H, C"]]}, {"note": "Leaf NE → SE $[75, 100) \\times [50, 75)$ overlaps $q$: test its points. $D = (85, 65)$ is outside.", "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "gray"}, {"id": "R1", "color": "green"}, {"id": "R2", "color": "gray"}, {"id": "R3", "color": "blue"}, {"id": "R30", "color": "green"}, {"id": "R31", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [2, 3, 4, 5, 6, 7], "vars": [["visited", "7"], ["tested", "3"], ["found", "H, C"]]}, {"note": "Node NE → NW covers $[50, 75) \\times [75, 100)$, which misses $q$: prune it.", "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "gray"}, {"id": "R1", "color": "green"}, {"id": "R2", "color": "gray"}, {"id": "R3", "color": "blue"}, {"id": "R30", "color": "green"}, {"id": "R31", "color": "red"}, {"id": "R32", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [2, 3], "vars": [["visited", "8"], ["tested", "3"], ["found", "H, C"]]}, {"note": "Node NE → NE covers $[75, 100) \\times [75, 100)$, which misses $q$: prune it.", "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "gray"}, {"id": "R1", "color": "green"}, {"id": "R2", "color": "gray"}, {"id": "R3", "color": "blue"}, {"id": "R30", "color": "green"}, {"id": "R31", "color": "red"}, {"id": "R32", "color": "gray"}, {"id": "R33", "color": "orange"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [2, 3], "vars": [["visited", "9"], ["tested", "3"], ["found", "H, C"]]}, {"note": "Done: found $H, C$ after visiting $9$ nodes and testing $3$ points. Two whole quadrants, with $4$ of the $8$ points, were never opened.", "nodeColors": [{"id": "R", "color": "blue"}, {"id": "R0", "color": "gray"}, {"id": "R1", "color": "green"}, {"id": "R2", "color": "gray"}, {"id": "R3", "color": "blue"}, {"id": "R30", "color": "green"}, {"id": "R31", "color": "red"}, {"id": "R32", "color": "gray"}, {"id": "R33", "color": "gray"}], "nodeNotes": [{"id": "R00", "text": "–"}, {"id": "R01", "text": "E,G"}, {"id": "R02", "text": "F"}, {"id": "R03", "text": "–"}, {"id": "R1", "text": "H"}, {"id": "R2", "text": "A"}, {"id": "R30", "text": "C"}, {"id": "R31", "text": "D"}, {"id": "R32", "text": "B"}, {"id": "R33", "text": "–"}], "lines": [], "vars": [["visited", "9"], ["tested", "3"], ["found", "H, C"]]}], "caption": "Blue: internal node whose box overlaps $q$. Gray: pruned without looking inside. Green: leaf with a point inside $q$; red: leaf whose points were all tested and rejected."},
        {
          type: 'derivation',
          title: 'Why pruning never loses a result',
          steps: [
            { tex: 'p \\text{ stored in the subtree of node } v \\implies p \\in \\text{square}(v)', why: 'Invariant (2) at the leaf holding $p$, plus invariant (1): a child\'s square lies inside its parent\'s, all the way up to $v$.' },
            { tex: '\\text{square}(v) \\cap q = \\varnothing', why: 'The case where the query prunes $v$.' },
            { tex: '\\implies p \\notin q \\text{ for every } p \\text{ below } v', why: 'A point in a set that is disjoint from $q$ cannot be in $q$.' },
          ],
          result: 'Skipping $v$ discards only points that cannot be answers, so the query returns exactly the points in $q$: the same set as brute force.',
        },
        {
          type: 'p',
          text: 'How much work is left? The query opens the nodes whose squares overlap $q$. Nodes deep inside $q$ (all their points are answers) and nodes far outside (pruned at once) are cheap; the cost concentrates along the **boundary** of $q$, where squares are cut by its edges. In practice that is a few dozen to a few hundred nodes plus the answers themselves. The program below compares it with brute force on $20\\,000$ points, half of them crammed into one $60 \\times 60$ town.',
        },
        {
          type: 'code',
          title: 'quadtree.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>
#include <utility>
#include <vector>

struct Point { float x, y; };
struct Box {                                    // half-open: [x0, x1) x [y0, y1)
    float x0, y0, x1, y1;
    bool contains(Point p) const { return p.x >= x0 && p.x < x1 && p.y >= y0 && p.y < y1; }
    bool intersects(const Box& b) const { return x0 < b.x1 && b.x0 < x1 && y0 < b.y1 && b.y0 < y1; }
};
struct Stats { long nodes = 0, tests = 0; };

class Quadtree {
    struct Node {
        Box box;
        int firstChild = -1;                    // -1: leaf
        std::vector<Point> pts;                 // only leaves store points
        explicit Node(Box b) : box(b) {}
    };
    static constexpr int kCapacity = 8, kMaxDepth = 12;
    std::vector<Node> nodes_;                   // children of a node are 4 consecutive entries

    int childFor(int n, Point p) const {
        const Box& b = nodes_[n].box;
        float mx = (b.x0 + b.x1) / 2, my = (b.y0 + b.y1) / 2;
        return nodes_[n].firstChild + (p.x >= mx) + 2 * (p.y >= my);
    }
    void split(int n) {
        Box b = nodes_[n].box;                  // a copy: emplace_back may reallocate nodes_
        float mx = (b.x0 + b.x1) / 2, my = (b.y0 + b.y1) / 2;
        int first = int(nodes_.size());
        nodes_.emplace_back(Box{b.x0, b.y0, mx, my});
        nodes_.emplace_back(Box{mx, b.y0, b.x1, my});
        nodes_.emplace_back(Box{b.x0, my, mx, b.y1});
        nodes_.emplace_back(Box{mx, my, b.x1, b.y1});
        nodes_[n].firstChild = first;
    }
    void insert(int n, Point p, int depth) {
        if (nodes_[n].firstChild < 0) {                       // leaf
            if (int(nodes_[n].pts.size()) < kCapacity || depth == kMaxDepth) {
                nodes_[n].pts.push_back(p);
                return;
            }
            split(n);                                         // full: push its points down
            for (Point q : std::exchange(nodes_[n].pts, {})) insert(childFor(n, q), q, depth + 1);
        }
        insert(childFor(n, p), p, depth + 1);
    }
    void query(int n, const Box& q, std::vector<Point>& out, Stats& s) const {
        ++s.nodes;
        const Node& node = nodes_[n];
        if (!node.box.intersects(q)) return;                  // prune the whole subtree
        if (node.firstChild < 0) {
            for (Point p : node.pts) { ++s.tests; if (q.contains(p)) out.push_back(p); }
            return;
        }
        for (int c = 0; c < 4; ++c) query(node.firstChild + c, q, out, s);
    }

public:
    explicit Quadtree(Box world) { nodes_.emplace_back(world); }
    void insert(Point p) { insert(0, p, 0); }
    std::vector<Point> query(const Box& q, Stats& s) const {
        std::vector<Point> out;
        query(0, q, out, s);
        return out;
    }
    std::size_t nodeCount() const { return nodes_.size(); }
};

int main() {
    std::mt19937 rng(2024);
    auto coord = [&](float lo, float span) { return lo + float(rng() % 100000) / 100000 * span; };
    std::vector<Point> pts;
    for (int i = 0; i < 10000; ++i) pts.push_back({coord(0, 1024), coord(0, 1024)});   // spread out
    for (int i = 0; i < 10000; ++i) pts.push_back({coord(700, 60), coord(200, 60)});   // one dense town

    Quadtree tree({0, 0, 1024, 1024});
    for (Point p : pts) tree.insert(p);
    std::printf("%zu points, %zu quadtree nodes\\n\\n", pts.size(), tree.nodeCount());

    const Box queries[] = {{100, 100, 164, 164}, {720, 220, 740, 240}, {300, 500, 556, 756}, {0, 0, 1024, 1024}};
    std::printf("query box            found  nodes visited  points tested  brute-force tests\\n");
    for (const Box& q : queries) {
        Stats s;
        auto found = tree.query(q, s);
        long brute = 0;
        for (Point p : pts) brute += q.contains(p);         // tests every point
        std::printf("[%4.0f,%4.0f]x[%4.0f,%4.0f] %6zu %14ld %14ld %18zu%s\\n", q.x0, q.x1, q.y0, q.y1,
                    found.size(), s.nodes, s.tests, pts.size(), long(found.size()) == brute ? "" : "  MISMATCH");
    }
}`,
          output: `20000 points, 8053 quadtree nodes

query box            found  nodes visited  points tested  brute-force tests
[ 100, 164]x[ 100, 164]     37             65             61              20000
[ 720, 740]x[ 220, 240]   1130            485           1130              20000
[ 300, 556]x[ 500, 756]    623            409            725              20000
[   0,1024]x[   0,1024]  20000           8053          20000              20000`,
          annotations: [
            { lines: '7-10', text: 'Half-open boxes: a point exactly on a split line belongs to exactly one child, so it is neither lost nor stored twice.' },
            { lines: '15-22', text: 'Nodes live in one `std::vector`, and a node\'s four children are four consecutive entries starting at `firstChild`. Indices instead of pointers: compact, cache-friendly and trivially copyable, the usual engine layout.' },
            { lines: '24-28', text: 'The child index is computed, not searched: $[x \\ge m_x] + 2[y \\ge m_y]$ gives $0$–$3$ (SW, SE, NW, NE).' },
            { lines: 30, text: 'A classic bug avoided: `emplace_back` may reallocate `nodes_`, so a `const Box&` into it would dangle. Copy the box first, and re-index `nodes_[n]` after growing.' },
            { lines: '41-46', text: 'A leaf with room (or at the depth limit) just stores the point. A full leaf splits, and `std::exchange` moves its points out so they can be re-inserted one level down.' },
            { lines: 53, text: 'The pruning test. Everything below a node whose square misses `q` is skipped in one comparison.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Read the last row',
          text: 'A query covering the whole world visits all $8053$ nodes **and** tests all $20\\,000$ points: worse than brute force. Spatial structures win when queries are small compared with the world. For "everything", iterate the flat array. (Real implementations also add a shortcut: if $q$ contains a node\'s whole square, report its subtree without testing points one by one.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Use the quadtree from the figures above (capacity $2$; the root and its SW and NE children are split) and the query function from the animation, which increments `visited` once for **every node it is called on**, including nodes that are then pruned. For the query box $q = [0, 35) \\times [0, 45)$, what is `visited` at the end?',
      label: '`visited` $=$',
      answer: '9',
      hint: 'The root\'s four children are all called. Which of them overlap $q$, and are they internal or leaves?',
      explanation: 'Root: called ($1$) and overlaps $q$, so all four children are called ($+4$). SW $[0, 50) \\times [0, 50)$ overlaps $q$ and is internal, so its four children are called ($+4$): its SW (empty), NW (holds $F$), NE (empty) and SE (holds $E$, $G$) all overlap $q$ and are leaves, so nothing deeper exists. The root\'s SE ($x \\ge 50$), NW ($y \\ge 50$) and NE are called but pruned immediately, and NE\'s children are never reached. Total $1 + 4 + 4 = 9$. Along the way $3$ points are tested ($F$, $E$, $G$), and $F$ and $E$ are reported; $G = (40, 10)$ has $x \\ge 35$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'k-d trees and nearest neighbors',
      blocks: [
        {
          type: 'p',
          text: 'A quadtree splits at the *middle of the space*. A [[dsa-kd-tree|k-d tree]] splits at the *median of the points*, one axis at a time: the root splits on $x$ at the median $x$, its children split their halves on $y$, their children on $x$ again, and so on. Each node stores one point and its splitting line. Median splits guarantee balance: a subtree of $n$ points has two subtrees of at most $n/2$, so the height is $\\lfloor \\log_2 n \\rfloor$ whatever the distribution.',
        },
        {
          type: 'p',
          text: 'Building is a recursion that uses `std::nth_element`, which places the median in its sorted position in expected linear time, with smaller elements before it and larger after. Doing that at every level costs $O(n)$ per level, $O(n \\log n)$ in total, and gives an **implicit** tree: the root of the range $[lo, hi)$ sits at $mid = (lo + hi)/2$, with no node structs or pointers at all.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 330 320" xmlns="http://www.w3.org/2000/svg">
<rect x="34.0" y="14.0" width="280.0" height="280.0" fill="none" stroke="currentColor" stroke-width="1.8"/>
<line x1="34.0" y1="98.0" x2="188.0" y2="98.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<line x1="188.0" y1="182.0" x2="314.0" y2="182.0" stroke="currentColor" stroke-width="1.6" class="s-purple"/>
<line x1="188.0" y1="294.0" x2="188.0" y2="14.0" stroke="currentColor" stroke-width="2.2" class="s-blue"/>
<circle cx="202.0" cy="70.0" r="55.2" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/>
<circle cx="202.0" cy="70.0" r="55.2" fill="currentColor" fill-opacity="0.08" class="f-orange"/>
<circle cx="67.6" cy="98.0" r="4.2" fill="currentColor"/>
<text x="75.6" y="92.0" text-anchor="start" font-size="13" font-weight="700">A</text>
<circle cx="118.0" cy="210.0" r="4.2" fill="currentColor"/>
<text x="126.0" y="204.0" text-anchor="start" font-size="13" font-weight="700">B</text>
<circle cx="151.6" cy="47.6" r="4.2" fill="currentColor" class="f-green"/>
<text x="159.6" y="41.6" text-anchor="start" font-size="13" font-weight="700" class="t-green">C</text>
<circle cx="188.0" cy="154.0" r="4.2" fill="currentColor"/>
<text x="196.0" y="148.0" text-anchor="start" font-size="13" font-weight="700">D</text>
<circle cx="230.0" cy="243.6" r="4.2" fill="currentColor"/>
<text x="238.0" y="237.6" text-anchor="start" font-size="13" font-weight="700">E</text>
<circle cx="263.6" cy="81.2" r="4.2" fill="currentColor"/>
<text x="271.6" y="75.2" text-anchor="start" font-size="13" font-weight="700">F</text>
<circle cx="291.6" cy="182.0" r="4.2" fill="currentColor"/>
<text x="283.6" y="176.0" text-anchor="end" font-size="13" font-weight="700">G</text>
<path d="M196.0,64.0 L208.0,76.0 M196.0,76.0 L208.0,64.0" stroke="currentColor" stroke-width="2.4" class="s-orange"/>
<text x="210.0" y="86.0" text-anchor="start" font-size="14" font-weight="700" class="t-orange">q</text>
<text x="34.0" y="310.0" text-anchor="middle" font-size="11" class="t-gray">0</text>
<text x="28.0" y="298.0" text-anchor="end" font-size="11" class="t-gray">0</text>
<text x="174.0" y="310.0" text-anchor="middle" font-size="11" class="t-gray">50</text>
<text x="28.0" y="158.0" text-anchor="end" font-size="11" class="t-gray">50</text>
<text x="314.0" y="310.0" text-anchor="middle" font-size="11" class="t-gray">100</text>
<text x="28.0" y="18.0" text-anchor="end" font-size="11" class="t-gray">100</text>
</svg>`,
          alt: 'A 100 by 100 square with seven points A to G. A blue vertical line at x = 55 passes through D. A purple horizontal line at y = 70 through A splits the left half; another at y = 40 through G splits the right half. A query point q at (60, 80) is marked with an orange cross, inside an orange circle that passes through C at (42, 88), crossing the line x = 55 and the line y = 70.',
          caption: 'Root $D$ splits on $x = 55$; $A$ and $G$ split their halves on $y$. The circle around $q$ has radius equal to the distance to the nearest point, $C$. It crosses the line $x = 55$, so the search had to look on the far side of the root.',
          maxWidth: 340,
        },
        {
          type: 'p',
          text: '**Nearest-neighbor search** goes down first: at each node, measure the distance to its point and continue into the child on $q$\'s side of the splitting line (the *near* side). On the way back up comes the key test. The far side can only contain a closer point if the splitting line itself is closer than the best distance found so far. If it is not, the whole far subtree is skipped.',
        },
        {"type": "algo", "view": "graph", "width": 420, "height": 214, "interval": 1700, "nodes": [{"id": "D", "x": 210, "y": 34}, {"id": "A", "x": 106, "y": 104}, {"id": "B", "x": 54.0, "y": 174}, {"id": "C", "x": 158.0, "y": 174}, {"id": "G", "x": 314, "y": 104}, {"id": "E", "x": 262.0, "y": 174}, {"id": "F", "x": 366.0, "y": 174}], "edges": [{"from": "A", "to": "B"}, {"from": "A", "to": "C"}, {"from": "G", "to": "E"}, {"from": "G", "to": "F"}, {"from": "D", "to": "A"}, {"from": "D", "to": "G"}], "code": "void nearest(Node* n, Point q, Best& best) {\n    if (!n) return;\n    if (dist2(n->p, q) < best.d2) best = {dist2(n->p, q), n->p};\n    long diff = q[n->axis] - n->p[n->axis];  // signed distance to the split line\n    Node* near = diff < 0 ? n->left : n->right;\n    Node* far  = diff < 0 ? n->right : n->left;\n    nearest(near, q, best);  // near side first\n    if (diff * diff < best.d2)  // can the far side beat best?\n        nearest(far, q, best);\n}", "frames": [{"note": "Find the point nearest to $q = (60, 80)$. Under each internal node: its splitting line (the root splits on $x$, its children on $y$).", "nodeColors": [], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}], "lines": [1], "vars": [["q", "(60, 80)"], ["best", "none (d² = ∞)"], ["nodes visited", "0"]]}, {"note": "Visit $D = (55, 50)$: $d^2 = 925$, the best so far. $q_x - 55 = 5$, so the near side is $G$.", "nodeColors": [{"id": "D", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}], "lines": [3, 4, 5, 6, 7], "vars": [["q", "(60, 80)"], ["best", "D (d² = 925)"], ["nodes visited", "1"]]}, {"note": "Visit $G = (92, 40)$: $d^2 = 2624$, not better than $925$. $q_y - 40 = 40$, so the near side is $F$.", "nodeColors": [{"id": "G", "color": "orange"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}], "lines": [3, 4, 5, 6, 7], "vars": [["q", "(60, 80)"], ["best", "D (d² = 925)"], ["nodes visited", "2"]]}, {"note": "Visit $F = (82, 76)$: $d^2 = 500$, the best so far. It is a leaf.", "nodeColors": [{"id": "D", "color": "blue"}, {"id": "G", "color": "blue"}, {"id": "F", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}, {"id": "F", "text": "d²=500"}], "lines": [2, 3], "vars": [["q", "(60, 80)"], ["best", "F (d² = 500)"], ["nodes visited", "3"]]}, {"note": "Back at $G$: the split line $y = 40$ is $40$ away and $1600 \\ge 500$. Everything on the far side is at least that far: prune $E$.", "nodeColors": [{"id": "D", "color": "blue"}, {"id": "E", "color": "gray"}, {"id": "G", "color": "orange"}, {"id": "F", "color": "green"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}, {"id": "F", "text": "d²=500"}, {"id": "E", "text": "pruned"}], "lines": [8], "vars": [["q", "(60, 80)"], ["best", "F (d² = 500)"], ["nodes visited", "3"]]}, {"note": "Back at $D$: the split line $x = 55$ is $5$ away and $25 < 500$, so a closer point could hide on the far side. Search $A$.", "nodeColors": [{"id": "G", "color": "blue"}, {"id": "E", "color": "gray"}, {"id": "D", "color": "orange"}, {"id": "F", "color": "green"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}, {"id": "F", "text": "d²=500"}, {"id": "E", "text": "pruned"}], "lines": [8, 9], "vars": [["q", "(60, 80)"], ["best", "F (d² = 500)"], ["nodes visited", "3"]]}, {"note": "Visit $A = (12, 70)$: $d^2 = 2404$, not better than $500$. $q_y - 70 = 10$, so the near side is $C$.", "nodeColors": [{"id": "D", "color": "blue"}, {"id": "G", "color": "blue"}, {"id": "E", "color": "gray"}, {"id": "A", "color": "orange"}, {"id": "F", "color": "green"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}, {"id": "F", "text": "d²=500"}, {"id": "E", "text": "pruned"}], "lines": [3, 4, 5, 6, 7], "vars": [["q", "(60, 80)"], ["best", "F (d² = 500)"], ["nodes visited", "4"]]}, {"note": "Visit $C = (42, 88)$: $d^2 = 388$, the best so far. It is a leaf.", "nodeColors": [{"id": "D", "color": "blue"}, {"id": "G", "color": "blue"}, {"id": "F", "color": "green"}, {"id": "E", "color": "gray"}, {"id": "A", "color": "blue"}, {"id": "C", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}, {"id": "F", "text": "d²=500"}, {"id": "E", "text": "pruned"}, {"id": "C", "text": "d²=388"}], "lines": [2, 3], "vars": [["q", "(60, 80)"], ["best", "C (d² = 388)"], ["nodes visited", "5"]]}, {"note": "Back at $A$: the split line $y = 70$ is $10$ away and $100 < 388$, so a closer point could hide on the far side. Search $B$.", "nodeColors": [{"id": "D", "color": "blue"}, {"id": "G", "color": "blue"}, {"id": "F", "color": "green"}, {"id": "E", "color": "gray"}, {"id": "A", "color": "orange"}, {"id": "C", "color": "green"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}, {"id": "F", "text": "d²=500"}, {"id": "E", "text": "pruned"}, {"id": "C", "text": "d²=388"}], "lines": [8, 9], "vars": [["q", "(60, 80)"], ["best", "C (d² = 388)"], ["nodes visited", "5"]]}, {"note": "Visit $B = (30, 30)$: $d^2 = 3400$, not better than $388$. It is a leaf.", "nodeColors": [{"id": "D", "color": "blue"}, {"id": "G", "color": "blue"}, {"id": "F", "color": "green"}, {"id": "E", "color": "gray"}, {"id": "A", "color": "blue"}, {"id": "B", "color": "orange"}, {"id": "C", "color": "green"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}, {"id": "F", "text": "d²=500"}, {"id": "E", "text": "pruned"}, {"id": "C", "text": "d²=388"}, {"id": "B", "text": "d²=3400"}], "lines": [2, 3], "vars": [["q", "(60, 80)"], ["best", "C (d² = 388)"], ["nodes visited", "6"]]}, {"note": "Done: the nearest point is $C = (42, 88)$ with $d^2 = 388$, after visiting $6$ of the $7$ nodes.", "nodeColors": [{"id": "D", "color": "blue"}, {"id": "G", "color": "blue"}, {"id": "F", "color": "green"}, {"id": "E", "color": "gray"}, {"id": "A", "color": "blue"}, {"id": "B", "color": "gray"}, {"id": "C", "color": "green"}], "nodeNotes": [{"id": "A", "text": "y=70"}, {"id": "G", "text": "y=40"}, {"id": "D", "text": "x=55"}, {"id": "F", "text": "d²=500"}, {"id": "E", "text": "pruned"}, {"id": "C", "text": "d²=388"}, {"id": "B", "text": "d²=3400"}], "lines": [], "vars": [["q", "(60, 80)"], ["best", "C (d² = 388)"], ["nodes visited", "6"]]}], "caption": "Orange: the node being visited. Blue: visited. Green: the best point so far. Gray: pruned (or a finished leaf that lost). The picture of the plane is above."},
        {
          type: 'callout',
          variant: 'why',
          title: 'Why split at the median, not the middle',
          text: 'A quadtree splits at the middle of its square, so a tight cluster produces a chain of nearly empty nodes and its depth depends on how close the points get. Splitting at the median puts half of the points on each side by construction, so the height is logarithmic in $n$ for any data, clustered or not. The price: the tree is shaped by the data it was built from, so inserting new points one at a time slowly destroys the balance.',
        },
        {
          type: 'derivation',
          title: 'Why the far-side test is safe',
          steps: [
            { tex: 'p \\text{ on the far side of the line } x = s', why: 'Say the node splits on $x$ at $s$ and $q_x < s$, so the far side holds points with $x \\ge s$ (the $y$ case is identical).' },
            { tex: '\\lVert p - q \\rVert \\ge |p_x - q_x| \\ge s - q_x = |q_x - s|', why: 'A distance is at least the difference in any single coordinate, and $p_x \\ge s > q_x$.' },
            { tex: '(q_x - s)^2 \\ge d^2_{\\text{best}} \\implies \\lVert p - q \\rVert^2 \\ge d^2_{\\text{best}}', why: 'So no far-side point can beat the best. Comparing **squared** distances avoids a square root and keeps the arithmetic in integers.' },
          ],
          result: 'Pruning when $\\text{diff}^2 \\ge d^2_{\\text{best}}$ never discards the true nearest neighbor; searching the near side first makes $d_{\\text{best}}$ small early, so the test prunes often.',
        },
        {
          type: 'code',
          title: 'kdtree.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdint>
#include <cstdio>
#include <random>
#include <vector>

struct Point { std::int64_t c[2]; };            // c[0] = x, c[1] = y

std::int64_t dist2(const Point& a, const Point& b) {
    std::int64_t dx = a.c[0] - b.c[0], dy = a.c[1] - b.c[1];
    return dx * dx + dy * dy;
}

// An implicit k-d tree: the subtree for pts[lo, hi) has its root at mid = (lo + hi) / 2,
// its left subtree in [lo, mid) and its right subtree in [mid + 1, hi). No node structs at all.
void build(std::vector<Point>& pts, int lo, int hi, int axis) {
    if (hi - lo <= 1) return;
    int mid = (lo + hi) / 2;
    std::nth_element(pts.begin() + lo, pts.begin() + mid, pts.begin() + hi,
                     [axis](const Point& a, const Point& b) { return a.c[axis] < b.c[axis]; });
    build(pts, lo, mid, axis ^ 1);              // alternate x, y, x, y, ...
    build(pts, mid + 1, hi, axis ^ 1);
}

struct Best { std::int64_t d2 = INT64_MAX; Point p{}; long visited = 0; };

void nearest(const std::vector<Point>& pts, int lo, int hi, int axis, const Point& q, Best& best) {
    if (lo >= hi) return;
    int mid = (lo + hi) / 2;
    const Point& node = pts[mid];
    ++best.visited;
    if (std::int64_t d = dist2(node, q); d < best.d2) { best.d2 = d; best.p = node; }

    std::int64_t diff = q.c[axis] - node.c[axis];          // signed distance to the splitting line
    bool goLeft = diff < 0;
    if (goLeft) nearest(pts, lo, mid, axis ^ 1, q, best);  // near side first
    else        nearest(pts, mid + 1, hi, axis ^ 1, q, best);
    if (diff * diff < best.d2) {                           // can the far side still hold a closer point?
        if (goLeft) nearest(pts, mid + 1, hi, axis ^ 1, q, best);
        else        nearest(pts, lo, mid, axis ^ 1, q, best);
    }
}

int main() {
    std::mt19937 rng(7);
    const int N = 100000;
    std::vector<Point> pts(N);
    for (auto& p : pts) p = {{std::int64_t(rng() % 1000000), std::int64_t(rng() % 1000000)}};
    build(pts, 0, N, 0);

    long totalVisited = 0, mismatches = 0;
    const int Q = 1000;
    for (int i = 0; i < Q; ++i) {
        Point q{{std::int64_t(rng() % 1000000), std::int64_t(rng() % 1000000)}};
        Best best;
        nearest(pts, 0, N, 0, q, best);
        totalVisited += best.visited;
        std::int64_t brute = INT64_MAX;                    // brute force: look at all N points
        for (const Point& p : pts) brute = std::min(brute, dist2(p, q));
        mismatches += (brute != best.d2);
        if (i < 3)
            std::printf("query (%6lld, %6lld): nearest (%6lld, %6lld), distance^2 %9lld, nodes visited %ld\\n",
                        (long long)q.c[0], (long long)q.c[1], (long long)best.p.c[0], (long long)best.p.c[1],
                        (long long)best.d2, best.visited);
    }
    std::printf("\\n%d queries on %d points: k-d tree visits %.1f nodes on average, brute force %d\\n",
                Q, N, double(totalVisited) / Q, N);
    std::printf("answers that differ from brute force: %ld\\n", mismatches);
}`,
          output: `query (136849, 990411): nearest (136033, 991097), distance^2   1136452, nodes visited 19
query (156845, 373806): nearest (157879, 372808), distance^2   2065160, nodes visited 37
query (396987, 663976): nearest (397668, 666334), distance^2   6023925, nodes visited 26

1000 queries on 100000 points: k-d tree visits 22.9 nodes on average, brute force 100000
answers that differ from brute force: 0`,
          annotations: [
            { lines: '16-23', text: 'Build: `nth_element` puts the median (by the current axis) at `mid`, smaller points before it, larger after. Then recurse on both halves with the other axis. $O(n \\log n)$ total.' },
            { lines: '27-32', text: 'Visit the node at `mid` and keep the best squared distance. Integer coordinates make the results exact, so the comparison with brute force is meaningful.' },
            { lines: '34-37', text: 'The signed distance to the splitting line decides which side is near. Going near first finds a good candidate quickly.' },
            { lines: '38-41', text: 'The pruning test from the derivation. It compares squared quantities on both sides; mixing `diff` with a squared distance is a classic bug.' },
            { lines: '58-60', text: 'Every answer is checked against a full scan: $0$ mismatches over $1000$ queries.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Where k-d trees struggle',
          text: 'They are built for **static** data: inserting points one by one unbalances them, and deleting is awkward, so engines rebuild them (fast, $O(n \\log n)$) rather than update them. And they suffer from the *curse of dimensionality*: in $20$ or $100$ dimensions almost every splitting plane is closer than the nearest neighbor, nothing gets pruned, and the search degrades toward a linear scan. For games, in 2D and 3D, they are excellent: nearest cover point, nearest navigation node, photon maps, AI target selection over a static set.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'This k-d tree nearest-neighbor search returns wrong answers on some queries. Which line has the bug? (`best.d2` is the best **squared** distance so far.)',
      lines: [
        '`if (!n) return;`',
        '`long d = dist2(n->p, q);`',
        '`if (d < best.d2) best = {d, n->p};`',
        '`long diff = q[n->axis] - n->p[n->axis];`',
        '`Node* nearSide = diff < 0 ? n->left : n->right;`',
        '`Node* farSide = diff < 0 ? n->right : n->left;`',
        '`nearest(nearSide, q, best);`',
        '`if (diff * diff > best.d2) nearest(farSide, q, best);`',
      ],
      errorLines: [8],
      explanation: 'Line 8 has the test backwards. The far side must be searched when the splitting line is **closer** than the best point, `diff * diff < best.d2`, because only then can a closer point hide across it. As written, the search visits the far side exactly when it is pointless and skips it exactly when it is needed. In the animation, the true nearest point $C$ sat across the root\'s line $x = 55$, only $5$ away: this version would never find it and would return $F$. Everything else is right: squared distances throughout, near side first.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'You build a k-d tree over $1\\,000\\,000$ points by median splits, exactly like `kdtree.cpp` (one point per node; the range $[lo, hi)$ has its root at $mid = \\lfloor (lo + hi)/2 \\rfloor$). What is the tree\'s height, counted in edges on the longest root-to-leaf path?',
      label: 'height $=$',
      answer: '19',
      hint: 'Each level at least halves the subtree size. How many halvings take $10^6$ down to $1$?',
      explanation: 'A range of $n$ points leaves subtrees of $\\lfloor n/2 \\rfloor$ and $n - \\lfloor n/2 \\rfloor - 1$ points, so sizes go $10^6 \\to 500\\,000 \\to 250\\,000 \\to \\dots$, and the height is $\\lfloor \\log_2 10^6 \\rfloor$. Since $2^{19} = 524\\,288 \\le 10^6 < 2^{20}$, the height is $19$. That is the guaranteed depth of the descent; a nearest-neighbor query typically visits a few dozen nodes ($22.9$ on average in the program) instead of a million.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Bounding volume hierarchies for ray casts',
      blocks: [
        {
          type: 'p',
          text: 'A [[dsa-bvh|bounding volume hierarchy]] (BVH) flips the idea around. Instead of splitting **space**, it splits the **set of objects**: the root\'s box encloses everything, its two children enclose two halves of the objects, and so on down to leaves holding one or a few objects. Every object is in exactly one leaf, never duplicated, but sibling boxes may **overlap** and need not cover all of space. Because a node\'s box must enclose its children\'s boxes, a BVH is refit bottom-up after objects move, which is a postorder traversal.',
        },
        {
          type: 'p',
          text: 'The build used below is top-down: compute the box of the objects\' centres, split along its **longest axis** at the median centre (`nth_element` again), recurse. Production builders choose splits with the *surface area heuristic* (SAH), which estimates the cost of a split from the children\'s surface areas, since a random ray hits a box with probability roughly proportional to its surface area. The median split is the simple, balanced baseline.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 460 302" xmlns="http://www.w3.org/2000/svg">
<rect x="26.0" y="44.6" width="414.5" height="229.6" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3" class="s-gray"/>
<text x="26.0" y="39.6" text-anchor="start" font-size="13" font-weight="700" class="t-gray">1</text>
<rect x="30.3" y="53.2" width="203.8" height="216.7" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/>
<text x="35.3" y="265.0" text-anchor="start" font-size="13" font-weight="700" class="t-blue">2</text>
<rect x="72.5" y="134.1" width="158.2" height="132.4" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/>
<text x="151.6" y="149.1" text-anchor="middle" font-size="13" font-weight="700" class="t-purple">3</text>
<rect x="33.8" y="56.7" width="141.0" height="76.5" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/>
<text x="104.3" y="71.7" text-anchor="middle" font-size="13" font-weight="700" class="t-purple">4</text>
<rect x="245.3" y="48.9" width="190.9" height="212.4" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/>
<text x="250.3" y="256.4" text-anchor="start" font-size="13" font-weight="700" class="t-blue">5</text>
<rect x="274.6" y="190.0" width="158.2" height="67.9" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/>
<text x="353.7" y="205.0" text-anchor="middle" font-size="13" font-weight="700" class="t-purple">6</text>
<rect x="248.8" y="52.4" width="149.6" height="89.4" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" class="s-purple"/>
<text x="323.6" y="67.4" text-anchor="middle" font-size="13" font-weight="700" class="t-purple">7</text>
<circle cx="57.0" cy="110.0" r="21.5" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6" class="s-red f-red"/>
<text x="57.0" y="115.0" text-anchor="middle" font-size="13" font-weight="700" class="t-red">A</text>
<circle cx="100.0" cy="239.0" r="25.8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6" class="s-gray f-gray"/>
<text x="100.0" y="244.0" text-anchor="middle" font-size="13" font-weight="700" class="t-gray">B</text>
<circle cx="155.9" cy="75.6" r="17.2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6" class="s-gray f-gray"/>
<text x="155.9" y="80.6" text-anchor="middle" font-size="13" font-weight="700" class="t-gray">C</text>
<circle cx="203.2" cy="161.6" r="25.8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6" class="s-green f-green"/>
<text x="203.2" y="166.6" text-anchor="middle" font-size="13" font-weight="700" class="t-green">D</text>
<circle cx="272.0" cy="75.6" r="21.5" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6" class="s-gray f-gray"/>
<text x="272.0" y="80.6" text-anchor="middle" font-size="13" font-weight="700" class="t-gray">E</text>
<circle cx="306.4" cy="221.8" r="30.1" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6" class="s-gray f-gray"/>
<text x="306.4" y="226.8" text-anchor="middle" font-size="13" font-weight="700" class="t-gray">F</text>
<circle cx="375.2" cy="118.6" r="21.5" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6" class="s-gray f-gray"/>
<text x="375.2" y="123.6" text-anchor="middle" font-size="13" font-weight="700" class="t-gray">G</text>
<circle cx="413.9" cy="239.0" r="17.2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6" class="s-gray f-gray"/>
<text x="413.9" y="244.0" text-anchor="middle" font-size="13" font-weight="700" class="t-gray">H</text>
<line x1="182.2" y1="146.6" x2="420.9" y2="277.9" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 4" class="s-orange"/>
<line x1="6.0" y1="54.1" x2="175.8" y2="143.3" stroke="currentColor" stroke-width="2.2" class="s-orange"/><path d="M182.2,146.6 L174.2,146.5 L177.6,140.1 Z" fill="currentColor" class="f-orange"/>
<circle cx="182.2" cy="146.6" r="3.5" fill="currentColor" class="f-orange"/>
<text x="1.0" y="78.1" text-anchor="start" font-size="13" font-weight="700" class="t-orange">ray</text>
</svg>`,
          alt: 'Eight circles A to H inside nested boxes: a dashed gray root box 1; blue boxes 2 (left half, A B C D) and 5 (right half, E F G H); purple boxes 4 (A, C), 3 (B, D), 7 (E, G) and 6 (F, H). An orange ray enters from the upper left heading down to the right; it passes over A and hits D, shown green. A dashed continuation of the ray crosses box 6 and circle F.',
          caption: 'The BVH over eight objects. The ray first hits $D$ (green). Its dashed continuation also crosses $F$, but $F$\'s whole half of the tree is skipped: box $5$ starts farther along the ray than the hit on $D$.',
          maxWidth: 480,
        },
        {
          type: 'p',
          text: 'To find the **closest** hit, traverse with a stack: at an internal node, test the ray against both child boxes and push the hit ones so that the **nearer** child is popped first. Keep `best`, the closest object hit so far. Any node whose box the ray enters at $t \\ge best$ is skipped with its whole subtree, because everything inside it is at least that far away.',
        },
        {"type": "algo", "view": "graph", "width": 440, "height": 252, "interval": 1600, "nodes": [{"id": "1", "x": 218.8, "y": 30}, {"id": "2", "x": 109.8, "y": 92}, {"id": "3", "x": 55.2, "y": 154}, {"id": "B", "x": 28.0, "y": 216}, {"id": "D", "x": 82.5, "y": 216}, {"id": "4", "x": 164.2, "y": 154}, {"id": "A", "x": 137.0, "y": 216}, {"id": "C", "x": 191.5, "y": 216}, {"id": "5", "x": 327.8, "y": 92}, {"id": "6", "x": 273.2, "y": 154}, {"id": "F", "x": 246.0, "y": 216}, {"id": "H", "x": 300.5, "y": 216}, {"id": "7", "x": 382.2, "y": 154}, {"id": "E", "x": 355.0, "y": 216}, {"id": "G", "x": 409.5, "y": 216}], "edges": [{"from": "1", "to": "2"}, {"from": "1", "to": "5"}, {"from": "2", "to": "3"}, {"from": "2", "to": "4"}, {"from": "3", "to": "B"}, {"from": "3", "to": "D"}, {"from": "4", "to": "A"}, {"from": "4", "to": "C"}, {"from": "5", "to": "6"}, {"from": "5", "to": "7"}, {"from": "6", "to": "F"}, {"from": "6", "to": "H"}, {"from": "7", "to": "E"}, {"from": "7", "to": "G"}], "code": "float best = INF;\nstack.push({root, tRoot});\nwhile (!stack.empty()) {\n    auto [n, tEnter] = stack.pop();\n    if (tEnter >= best) continue;  // starts past the best hit\n    if (n->isLeaf()) {\n        best = std::min(best, hitObject(n->obj, ray));\n        continue;\n    }\n    float ta = hitBox(n->a, ray, best), tb = hitBox(n->b, ray, best);\n    if (ta > tb) swapChildren();  // a = nearer child\n    if (tb != INF) stack.push({n->b, tb});  // farther first ...\n    if (ta != INF) stack.push({n->a, ta});  // ... so the nearer pops first\n}", "frames": [{"note": "The ray enters the root box at $t = 5.7$. Push the root; no hit yet, so $best = \\infty$.", "nodeColors": [{"id": "1", "color": "blue"}], "nodeNotes": [], "lines": [1, 2], "vars": [["stack (top first)", "1 (5.7)"], ["box tests", "1"], ["object tests", "0"], ["best t", "∞"]]}, {"note": "Pop node $1$ and test both child boxes: $2$ entered at $t = 5.7$, $5$ entered at $t = 62.8$. Push the farther ($5$) first so the nearer ($2$) is popped next.", "nodeColors": [{"id": "2", "color": "blue"}, {"id": "5", "color": "blue"}, {"id": "1", "color": "orange"}], "nodeNotes": [], "lines": [4, 5, 10, 11, 12, 13], "vars": [["stack (top first)", "2 (5.7), 5 (62.8)"], ["box tests", "3"], ["object tests", "0"], ["best t", "∞"]]}, {"note": "Pop node $2$ and test both child boxes: $4$ entered at $t = 5.7$, $3$ entered at $t = 39.4$. Push the farther ($3$) first so the nearer ($4$) is popped next.", "nodeColors": [{"id": "1", "color": "blue"}, {"id": "5", "color": "blue"}, {"id": "3", "color": "blue"}, {"id": "4", "color": "blue"}, {"id": "2", "color": "orange"}], "nodeNotes": [], "lines": [4, 5, 10, 11, 12, 13], "vars": [["stack (top first)", "4 (5.7), 3 (39.4), 5 (62.8)"], ["box tests", "5"], ["object tests", "0"], ["best t", "∞"]]}, {"note": "Pop node $4$ and test both child boxes: $A$ entered at $t = 16.6$, $C$ missed. Only $A$ is pushed: the other subtree is never opened.", "nodeColors": [{"id": "1", "color": "blue"}, {"id": "2", "color": "blue"}, {"id": "5", "color": "blue"}, {"id": "3", "color": "blue"}, {"id": "A", "color": "blue"}, {"id": "C", "color": "gray"}, {"id": "4", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "t=16.6"}, {"id": "C", "text": "miss"}], "lines": [4, 5, 10, 11, 12, 13], "vars": [["stack (top first)", "A (16.6), 3 (39.4), 5 (62.8)"], ["box tests", "7"], ["object tests", "0"], ["best t", "∞"]]}, {"note": "Pop leaf $A$ and test the object: the ray passes it (its box was hit, the circle is not).", "nodeColors": [{"id": "1", "color": "blue"}, {"id": "2", "color": "blue"}, {"id": "5", "color": "blue"}, {"id": "3", "color": "blue"}, {"id": "4", "color": "blue"}, {"id": "C", "color": "gray"}, {"id": "A", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "no hit"}, {"id": "C", "text": "miss"}], "lines": [4, 5, 6, 7], "vars": [["stack (top first)", "3 (39.4), 5 (62.8)"], ["box tests", "7"], ["object tests", "1"], ["best t", "∞"]]}, {"note": "Pop node $3$ and test both child boxes: $D$ entered at $t = 43.4$, $B$ missed. Only $D$ is pushed: the other subtree is never opened.", "nodeColors": [{"id": "1", "color": "blue"}, {"id": "2", "color": "blue"}, {"id": "5", "color": "blue"}, {"id": "4", "color": "blue"}, {"id": "A", "color": "red"}, {"id": "C", "color": "gray"}, {"id": "B", "color": "gray"}, {"id": "D", "color": "blue"}, {"id": "3", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "no hit"}, {"id": "C", "text": "miss"}, {"id": "B", "text": "miss"}, {"id": "D", "text": "t=43.4"}], "lines": [4, 5, 10, 11, 12, 13], "vars": [["stack (top first)", "D (43.4), 5 (62.8)"], ["box tests", "9"], ["object tests", "1"], ["best t", "∞"]]}, {"note": "Pop leaf $D$ and test the object itself: the ray hits it at $t = 44.6$, the new best.", "nodeColors": [{"id": "1", "color": "blue"}, {"id": "2", "color": "blue"}, {"id": "5", "color": "blue"}, {"id": "3", "color": "blue"}, {"id": "4", "color": "blue"}, {"id": "A", "color": "red"}, {"id": "C", "color": "gray"}, {"id": "B", "color": "gray"}, {"id": "D", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "no hit"}, {"id": "C", "text": "miss"}, {"id": "B", "text": "miss"}, {"id": "D", "text": "hit 44.6"}], "lines": [4, 5, 6, 7], "vars": [["stack (top first)", "5 (62.8)"], ["box tests", "9"], ["object tests", "2"], ["best t", "44.6"]]}, {"note": "Pop node $5$: its box starts at $t = 62.8 \\ge best = 44.6$. Nothing inside can be closer: skip it and its whole subtree.", "nodeColors": [{"id": "1", "color": "blue"}, {"id": "2", "color": "blue"}, {"id": "3", "color": "blue"}, {"id": "4", "color": "blue"}, {"id": "A", "color": "red"}, {"id": "C", "color": "gray"}, {"id": "B", "color": "gray"}, {"id": "D", "color": "green"}, {"id": "5", "color": "orange"}], "nodeNotes": [{"id": "A", "text": "no hit"}, {"id": "C", "text": "miss"}, {"id": "B", "text": "miss"}, {"id": "D", "text": "hit 44.6"}, {"id": "5", "text": "skip"}], "lines": [4, 5], "vars": [["stack (top first)", "empty"], ["box tests", "9"], ["object tests", "2"], ["best t", "44.6"]]}, {"note": "Stack empty: the closest hit is $D$ at $t = 44.6$, after $9$ box tests and $2$ object tests. With $8$ objects that is no bargain, but the work grows with the depth (about $\\log_2 n$), not with $n$.", "nodeColors": [{"id": "1", "color": "blue"}, {"id": "2", "color": "blue"}, {"id": "5", "color": "gray"}, {"id": "3", "color": "blue"}, {"id": "4", "color": "blue"}, {"id": "A", "color": "red"}, {"id": "C", "color": "gray"}, {"id": "B", "color": "gray"}, {"id": "D", "color": "green"}], "nodeNotes": [{"id": "A", "text": "no hit"}, {"id": "C", "text": "miss"}, {"id": "B", "text": "miss"}, {"id": "D", "text": "hit 44.6"}, {"id": "5", "text": "skip"}], "lines": [3], "vars": [["stack (top first)", "empty"], ["box tests", "9"], ["object tests", "2"], ["best t", "44.6"]]}], "caption": "Internal nodes $1$–$7$ hold boxes; leaves hold the objects $A$–$H$ of the scene above. Under a leaf: the ray's entry distance into its box, then the test result; the stack readout shows the entry distance of every pending node. Blue: box hit; gray: box missed or skipped; green: closest object hit; red: object tested but not hit."},
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the nearer child goes first',
          text: 'Correctness does not depend on the order: any order finds the closest hit, because every box that could contain it is eventually opened. Speed does. Opening the nearer child first tends to find a hit with a small $t$ early, and every box that starts beyond that $t$ is then skipped without being opened. Far-first order would keep finding hits that a nearer one later replaces, and would prune almost nothing.',
        },
        {
          type: 'derivation',
          title: 'The slab test: does a ray hit a box?',
          steps: [
            { tex: '\\mathbf{r}(t) = \\mathbf{o} + t\\,\\mathbf{d}, \\quad t \\ge 0', why: 'The ray: origin $\\mathbf{o}$, direction $\\mathbf{d}$.' },
            { tex: 't_{a} = \\frac{x_{\\min} - o_x}{d_x}, \\quad t_{b} = \\frac{x_{\\max} - o_x}{d_x}', why: 'The ray is inside the $x$-slab $x_{\\min} \\le x \\le x_{\\max}$ for $t$ between these two values (which one is smaller depends on the sign of $d_x$).' },
            { tex: 't_{\\text{enter}} = \\max_{\\text{axes}} \\min(t_a, t_b), \\quad t_{\\text{exit}} = \\min_{\\text{axes}} \\max(t_a, t_b)', why: 'The box is the intersection of the slabs: the ray is inside the box only once it has entered **every** slab, and leaves as soon as it exits **any** slab.' },
            { tex: '\\text{hit} \\iff \\max(t_{\\text{enter}}, 0) \\le \\min(t_{\\text{exit}}, best)', why: 'A non-empty overlap of the intervals, clipped to the part of the ray in front of the origin and before the best hit so far.' },
          ],
          result: 'Six subtractions, six multiplications (by precomputed $1/d_x, 1/d_y, 1/d_z$) and a few `min`/`max`: no branches, no square roots. That is why boxes are the bounding volume of choice.',
        },
        {
          type: 'code',
          title: 'bvh.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>
#include <random>
#include <utility>
#include <vector>

struct V3 { float x, y, z; };
V3 operator-(V3 a, V3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
float dot(V3 a, V3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
float at(V3 v, int axis) { return axis == 0 ? v.x : axis == 1 ? v.y : v.z; }

struct Sphere { V3 c; float r; };
struct AABB {
    V3 lo{1e30f, 1e30f, 1e30f}, hi{-1e30f, -1e30f, -1e30f};
    void grow(const Sphere& s) {
        lo = {std::min(lo.x, s.c.x - s.r), std::min(lo.y, s.c.y - s.r), std::min(lo.z, s.c.z - s.r)};
        hi = {std::max(hi.x, s.c.x + s.r), std::max(hi.y, s.c.y + s.r), std::max(hi.z, s.c.z + s.r)};
    }
};
struct Ray { V3 o, invDir; V3 d; };
struct Counters { long boxTests = 0, sphereTests = 0; };

// Slab test: entry distance into the box, or INFINITY if the ray misses it before tMax.
float hitBox(const AABB& b, const Ray& r, float tMax) {
    float t0 = 0, t1 = tMax;
    for (int a = 0; a < 3; ++a) {
        float ta = (at(b.lo, a) - at(r.o, a)) * at(r.invDir, a);
        float tb = (at(b.hi, a) - at(r.o, a)) * at(r.invDir, a);
        t0 = std::max(t0, std::min(ta, tb));
        t1 = std::min(t1, std::max(ta, tb));
    }
    return t0 <= t1 ? t0 : INFINITY;
}
float hitSphere(const Sphere& s, const Ray& r) {          // nearest t >= 0, or INFINITY (|d| = 1)
    V3 oc = r.o - s.c;
    float b = dot(oc, r.d), c = dot(oc, oc) - s.r * s.r, disc = b * b - c;
    if (disc < 0) return INFINITY;
    float t = -b - std::sqrt(disc);
    return t >= 0 ? t : INFINITY;
}

struct Node { AABB box; int left = -1, right = -1, first = 0, count = 0; };   // leaf: count > 0

class BVH {
public:
    explicit BVH(std::vector<Sphere> s) : prims_(std::move(s)) { build(0, int(prims_.size())); }

    float cast(const Ray& r, Counters& k) const {
        float best = INFINITY;                                   // closest hit so far
        ++k.boxTests;
        if (hitBox(nodes_[0].box, r, best) == INFINITY) return best;
        std::pair<int, float> stack[64];                         // (node, entry distance)
        int sp = 0;
        stack[sp++] = {0, 0.0f};
        while (sp > 0) {
            auto [id, tEnter] = stack[--sp];
            if (tEnter >= best) continue;                        // box starts beyond the best hit
            const Node& n = nodes_[id];
            if (n.count > 0) {                                   // leaf: test its spheres
                for (int i = n.first; i < n.first + n.count; ++i) {
                    ++k.sphereTests;
                    best = std::min(best, hitSphere(prims_[i], r));
                }
                continue;
            }
            int a = n.left, b = n.right;
            k.boxTests += 2;
            float ta = hitBox(nodes_[a].box, r, best), tb = hitBox(nodes_[b].box, r, best);
            if (ta > tb) { std::swap(a, b); std::swap(ta, tb); } // a = nearer child
            if (tb != INFINITY) stack[sp++] = {b, tb};           // push the farther one first,
            if (ta != INFINITY) stack[sp++] = {a, ta};           // so the nearer one pops first
        }
        return best;
    }
    std::size_t size() const { return nodes_.size(); }

private:
    std::vector<Sphere> prims_;
    std::vector<Node> nodes_;

    int build(int first, int count) {
        int id = int(nodes_.size());
        nodes_.push_back({});
        AABB box, centers;
        for (int i = first; i < first + count; ++i) {
            box.grow(prims_[i]);
            centers.grow({prims_[i].c, 0});
        }
        nodes_[id].box = box;
        if (count <= 2) { nodes_[id].first = first; nodes_[id].count = count; return id; }
        V3 ext = centers.hi - centers.lo;                        // split the longest axis ...
        int axis = ext.x > ext.y && ext.x > ext.z ? 0 : ext.y > ext.z ? 1 : 2;
        int mid = first + count / 2;                             // ... at the median center
        std::nth_element(prims_.begin() + first, prims_.begin() + mid, prims_.begin() + first + count,
                         [axis](const Sphere& a, const Sphere& b) { return at(a.c, axis) < at(b.c, axis); });
        int l = build(first, mid - first);
        int r = build(mid, first + count - mid);
        nodes_[id].left = l;                                     // index, not reference: push_back
        nodes_[id].right = r;                                    // above may have moved nodes_
        return id;
    }
};

int main() {
    std::mt19937 rng(11);
    auto u = [&](float lo, float hi) { return lo + float(rng() % 10000) / 10000 * (hi - lo); };
    std::vector<Sphere> spheres(50000);
    for (auto& s : spheres) s = {{u(0, 200), u(0, 200), u(0, 200)}, u(0.5f, 1.5f)};

    BVH bvh(spheres);
    std::printf("%zu spheres, %zu BVH nodes\\n", spheres.size(), bvh.size());
    for (int i = 0; i < 4; ++i) {
        V3 o{u(0, 200), u(0, 200), -10}, target{u(0, 200), u(0, 200), 210};
        V3 d = target - o;
        float len = std::sqrt(dot(d, d));
        d = {d.x / len, d.y / len, d.z / len};
        Ray r{o, {1 / d.x, 1 / d.y, 1 / d.z}, d};
        Counters k;
        float t = bvh.cast(r, k);
        float brute = INFINITY;                                  // brute force: every sphere
        for (const Sphere& s : spheres) brute = std::min(brute, hitSphere(s, r));
        std::printf("ray %d: hit at t = %7.2f  BVH: %3ld box + %2ld sphere tests  brute force: %zu sphere tests%s\\n",
                    i, t, k.boxTests, k.sphereTests, spheres.size(), t == brute ? "" : "  MISMATCH");
    }
}`,
          output: `50000 spheres, 65535 BVH nodes
ray 0: hit at t =   33.98  BVH:  45 box +  6 sphere tests  brute force: 50000 sphere tests
ray 1: hit at t =   33.94  BVH:  61 box +  3 sphere tests  brute force: 50000 sphere tests
ray 2: hit at t =   22.08  BVH:  53 box +  2 sphere tests  brute force: 50000 sphere tests
ray 3: hit at t =   13.77  BVH:  31 box +  1 sphere tests  brute force: 50000 sphere tests`,
          annotations: [
            { lines: '25-34', text: 'The slab test from the derivation, clipped to $[0, tMax]$. Passing the current best as `tMax` culls boxes that start beyond the closest hit. (Division by a zero direction component gives $\\pm\\infty$ in IEEE floats, which the test handles, except in the rare case of an origin exactly on a slab plane.)' },
            { lines: '57-58', text: 'Pop a node and skip it if its box begins at or beyond the best hit: this is how $F$\'s half of the scene was ignored in the animation.' },
            { lines: '67-72', text: 'Test both children, then push the farther first so the nearer is popped next. Visiting near boxes first finds a close hit early, which makes the pruning on line 58 bite.' },
            { lines: '92-96', text: 'Top-down build: split the longest axis of the centres\' box at the median centre.' },
            { lines: '99-100', text: 'Store children by index after the recursive calls return. Holding a `Node&` across them would dangle, because `push_back` inside the recursion can reallocate `nodes_`.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where you meet BVHs',
          text: 'Hardware ray tracing (DXR, Vulkan ray tracing) builds acceleration structures that drivers implement as BVHs, with a static bottom level per mesh and a top level over instances that is rebuilt as objects move. Physics engines use **dynamic AABB trees**, BVHs that support insert and remove: Box2D\'s `b2DynamicTree` stores slightly enlarged ("fat") boxes and reinserts an object only when it leaves its fat box, so most frames need no tree updates at all.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Complete the reasoning behind the slab test for a ray against an axis-aligned box.',
      template: 'The ray is inside the box only after it has entered **every** slab, so the entry distance is the ___ of the per-axis entry distances. It leaves the box as soon as it exits **any** slab, so the exit distance is the ___ of the per-axis exit distances. The ray hits the box exactly when entry ___ exit (after clipping both to the ray\'s valid range).',
      blanks: [{ answers: ['maximum'] }, { answers: ['minimum'] }, { answers: ['$\\le$'] }],
      wordBank: ['maximum', 'minimum', '$\\le$', '$\\ge$', 'sum'],
      explanation: 'Entering requires all three slab conditions to hold at once, so the latest entry wins: $t_{\\text{enter}} = \\max(\\dots)$. Exiting needs only one condition to fail, so the earliest exit wins: $t_{\\text{exit}} = \\min(\\dots)$. The intersection of intervals is non-empty exactly when $t_{\\text{enter}} \\le t_{\\text{exit}}$. In `bvh.cpp` these are lines 30, 31 and 33: `t0 = max(t0, min(ta, tb))`, `t1 = min(t1, max(ta, tb))`, `t0 <= t1`.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Which statement is true of a BVH but **not** of a quadtree?',
      options: [
        { text: 'Two sibling nodes\' regions may overlap, but every object is stored in exactly one leaf.', correct: true, why: 'Right. A BVH partitions the objects, so each object has one home; the boxes are computed from the objects and can overlap. A quadtree partitions space: sibling squares never overlap, and an object with extent may need several leaves (or get stuck high in the tree).' },
        { text: 'Pruning a subtree whose region misses the query is safe.', why: 'True of both. The proof is the same: everything below a node lies inside the node\'s region (box or square).' },
        { text: 'Its node regions are fixed by geometry before any object is inserted.', why: 'That describes a quadtree: its squares are the quadrants of the world, independent of the data. BVH boxes are computed from the objects they enclose.' },
        { text: 'It must be rebalanced with rotations after insertions.', why: 'Neither uses rotations in the usual form. Static BVHs are rebuilt or refit; dynamic AABB trees do use local rotations in some implementations, but that is not what distinguishes them from quadtrees.' },
      ],
      explanation: 'Space partitioning (grid, quadtree, octree, k-d tree) assigns every point of space to one cell, so regions are disjoint but objects can straddle cells. Object partitioning (BVH) assigns every object to one leaf, so objects are never duplicated but regions can overlap, which means a query may have to descend into both siblings. That trade-off is why BVHs dominate for objects with extent (triangles, characters) and ray casts.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Sweep and prune: sort, then sweep',
      blocks: [
        {
          type: 'p',
          text: 'For the all-pairs question ("which boxes overlap?") there is a neat trick that needs no tree at all. Two boxes can only overlap if their **intervals on the $x$-axis** overlap. So project every box onto $x$, sort the $2n$ endpoints, and sweep from left to right keeping an **active list** of boxes whose interval has started but not ended. When a box starts, it overlaps on $x$ with exactly the boxes currently active; only those pairs get the $y$ (and $z$) test. This is [[dsa-sweep-and-prune|sweep and prune]].',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 464 413" xmlns="http://www.w3.org/2000/svg">
<rect x="41.0" y="182.0" width="105.0" height="105.0" rx="2" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8" class="s-blue f-blue"/>
<text x="47.0" y="198.0" text-anchor="start" font-size="14" font-weight="700" class="t-blue">A</text>
<rect x="104.0" y="35.0" width="105.0" height="84.0" rx="2" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8" class="s-purple f-purple"/>
<text x="110.0" y="51.0" text-anchor="start" font-size="14" font-weight="700" class="t-purple">B</text>
<rect x="125.0" y="140.0" width="126.0" height="84.0" rx="2" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8" class="s-teal f-teal"/>
<text x="131.0" y="156.0" text-anchor="start" font-size="14" font-weight="700" class="t-teal">C</text>
<rect x="272.0" y="119.0" width="84.0" height="84.0" rx="2" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8" class="s-orange f-orange"/>
<text x="278.0" y="135.0" text-anchor="start" font-size="14" font-weight="700" class="t-orange">D</text>
<rect x="314.0" y="56.0" width="105.0" height="105.0" rx="2" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8" class="s-red f-red"/>
<text x="320.0" y="72.0" text-anchor="start" font-size="14" font-weight="700" class="t-red">E</text>
<line x1="20.0" y1="343.0" x2="440.0" y2="343.0" stroke="currentColor" stroke-width="1.2" class="s-gray"/>
<line x1="41.0" y1="359.0" x2="146.0" y2="359.0" stroke="currentColor" stroke-width="5" class="s-blue"/>
<text x="151.0" y="363.0" text-anchor="start" font-size="11" font-weight="700" class="t-blue">A</text>
<line x1="41.0" y1="287.0" x2="41.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-blue"/>
<line x1="146.0" y1="287.0" x2="146.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-blue"/>
<line x1="104.0" y1="373.0" x2="209.0" y2="373.0" stroke="currentColor" stroke-width="5" class="s-purple"/>
<text x="214.0" y="377.0" text-anchor="start" font-size="11" font-weight="700" class="t-purple">B</text>
<line x1="104.0" y1="119.0" x2="104.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-purple"/>
<line x1="209.0" y1="119.0" x2="209.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-purple"/>
<line x1="125.0" y1="387.0" x2="251.0" y2="387.0" stroke="currentColor" stroke-width="5" class="s-teal"/>
<text x="256.0" y="391.0" text-anchor="start" font-size="11" font-weight="700" class="t-teal">C</text>
<line x1="125.0" y1="224.0" x2="125.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-teal"/>
<line x1="251.0" y1="224.0" x2="251.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-teal"/>
<line x1="272.0" y1="359.0" x2="356.0" y2="359.0" stroke="currentColor" stroke-width="5" class="s-orange"/>
<text x="361.0" y="363.0" text-anchor="start" font-size="11" font-weight="700" class="t-orange">D</text>
<line x1="272.0" y1="203.0" x2="272.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-orange"/>
<line x1="356.0" y1="203.0" x2="356.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-orange"/>
<line x1="314.0" y1="373.0" x2="419.0" y2="373.0" stroke="currentColor" stroke-width="5" class="s-red"/>
<text x="424.0" y="377.0" text-anchor="start" font-size="11" font-weight="700" class="t-red">E</text>
<line x1="314.0" y1="161.0" x2="314.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-red"/>
<line x1="419.0" y1="161.0" x2="419.0" y2="327.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6" class="s-red"/>
<text x="41.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">5</text>
<text x="104.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">20</text>
<text x="125.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">25</text>
<text x="146.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">30</text>
<text x="209.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">45</text>
<text x="251.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">55</text>
<text x="272.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">60</text>
<text x="314.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">70</text>
<text x="356.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">80</text>
<text x="419.0" y="339.0" text-anchor="middle" font-size="10" class="t-gray">95</text>
<text x="440.0" y="407.0" text-anchor="end" font-size="11" class="t-gray">x-intervals</text>
</svg>`,
          alt: 'Five rectangles A to E drawn above an x-axis, each projected down to a colored bar showing its x-interval: A from 5 to 30, B from 20 to 45, C from 25 to 55, D from 60 to 80, E from 70 to 95. A overlaps C, and D overlaps E; B overlaps A and C on x only.',
          caption: 'Each box\'s $x$-interval. $B$ overlaps $A$ and $C$ on $x$, but not on $y$; only $A$–$C$ and $D$–$E$ truly overlap.',
          maxWidth: 440,
        },
        {"type": "algo", "view": "array", "interval": 1500, "code": "sort(endpoints);  // by x coordinate\nfor (const Endpoint& e : endpoints) {\n    if (e.isStart) {\n        for (Box* other : active)  // x-intervals overlap\n            if (overlapY(*e.box, *other)) report(e.box, other);\n        active.push_back(e.box);\n    } else {\n        erase(active, e.box);\n    }\n}", "frames": [{"note": "Five boxes; their $x$-intervals become $10$ endpoints, sorted by $x$. All-pairs would test $\\binom{5}{2} = 10$ pairs.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [], "lines": [1], "vars": [["active", "–"], ["x-overlaps (y-tested)", "0"], ["reported", "–"]]}, {"note": "Start of $A$ at $x = 5$. No box is active, so no tests. Add $A$ to the active list.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "orange"}], "lines": [3, 6], "vars": [["active", "A"], ["x-overlaps (y-tested)", "0"], ["reported", "–"]], "pointers": [{"index": 0, "label": "sweep"}]}, {"note": "Start of $B$ at $x = 20$. Every active box overlaps it on $x$; test $y$. $A$: $y$-intervals miss. Add $B$ to the active list.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["active", "A, B"], ["x-overlaps (y-tested)", "1"], ["reported", "–"]], "pointers": [{"index": 1, "label": "sweep"}]}, {"note": "Start of $C$ at $x = 25$. Every active box overlaps it on $x$; test $y$. $A$: $y$ overlaps too, **report** $A$–$C$; $B$: $y$-intervals miss. Add $C$ to the active list.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["active", "A, B, C"], ["x-overlaps (y-tested)", "3"], ["reported", "A–C"]], "pointers": [{"index": 2, "label": "sweep"}]}, {"note": "End of $A$ at $x = 30$: remove it. No later box can overlap $A$ on $x$.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "orange"}], "lines": [7, 8], "vars": [["active", "B, C"], ["x-overlaps (y-tested)", "3"], ["reported", "A–C"]], "pointers": [{"index": 3, "label": "sweep"}]}, {"note": "End of $B$ at $x = 45$: remove it. No later box can overlap $B$ on $x$.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "orange"}], "lines": [7, 8], "vars": [["active", "C"], ["x-overlaps (y-tested)", "3"], ["reported", "A–C"]], "pointers": [{"index": 4, "label": "sweep"}]}, {"note": "End of $C$ at $x = 55$: remove it. No later box can overlap $C$ on $x$.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "orange"}], "lines": [7, 8], "vars": [["active", "–"], ["x-overlaps (y-tested)", "3"], ["reported", "A–C"]], "pointers": [{"index": 5, "label": "sweep"}]}, {"note": "Start of $D$ at $x = 60$. No box is active, so no tests. Add $D$ to the active list.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "orange"}], "lines": [3, 6], "vars": [["active", "D"], ["x-overlaps (y-tested)", "3"], ["reported", "A–C"]], "pointers": [{"index": 6, "label": "sweep"}]}, {"note": "Start of $E$ at $x = 70$. Every active box overlaps it on $x$; test $y$. $D$: $y$ overlaps too, **report** $D$–$E$. Add $E$ to the active list.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["active", "D, E"], ["x-overlaps (y-tested)", "4"], ["reported", "A–C, D–E"]], "pointers": [{"index": 7, "label": "sweep"}]}, {"note": "End of $D$ at $x = 80$: remove it. No later box can overlap $D$ on $x$.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "gray"}, {"index": 7, "color": "blue"}, {"index": 8, "color": "orange"}], "lines": [7, 8], "vars": [["active", "E"], ["x-overlaps (y-tested)", "4"], ["reported", "A–C, D–E"]], "pointers": [{"index": 8, "label": "sweep"}]}, {"note": "End of $E$ at $x = 95$: remove it. No later box can overlap $E$ on $x$.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "gray"}, {"index": 7, "color": "gray"}, {"index": 8, "color": "gray"}, {"index": 9, "color": "orange"}], "lines": [7, 8], "vars": [["active", "–"], ["x-overlaps (y-tested)", "4"], ["reported", "A–C, D–E"]], "pointers": [{"index": 9, "label": "sweep"}]}, {"note": "Done: $4$ $y$-tests instead of $10$, and the real overlaps $A–C$ and $D–E$ were found. Sorting costs $O(n \\log n)$; the sweep costs $O(n + k)$ for $k$ pairs that overlap on $x$.", "array": ["[A", "[B", "[C", "A]", "B]", "C]", "[D", "[E", "D]", "E]"], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "gray"}, {"index": 7, "color": "gray"}, {"index": 8, "color": "gray"}, {"index": 9, "color": "gray"}], "lines": [], "vars": [["active", "–"], ["x-overlaps (y-tested)", "4"], ["reported", "A–C, D–E"]]}], "caption": "`[A` is the start of box $A$'s $x$-interval and `A]` its end. Orange: the endpoint being processed; blue: starts of the boxes currently active; gray: processed."},
        {
          type: 'p',
          text: 'The cost is the sort plus the sweep: $O(n \\log n + k)$, where $k$ is the number of pairs that overlap on $x$. The real power shows over **many frames**. Objects move a little per frame, so last frame\'s sorted order is almost sorted now. Re-sorting with insertion sort costs $O(n + I)$, where $I$ is the number of [[dsa-inversion|inversions]], the pairs of endpoints that swapped places. When few objects pass each other, $I$ is small and the whole broad phase is close to linear. This reuse of last frame\'s work is called **temporal coherence**.',
        },
        {
          type: 'code',
          title: 'sap.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <random>
#include <vector>

struct Box { float x0, y0, x1, y1; float vx, vy; };

bool overlapY(const Box& a, const Box& b) { return a.y0 <= b.y1 && b.y0 <= a.y1; }
bool overlap(const Box& a, const Box& b) { return a.x0 <= b.x1 && b.x0 <= a.x1 && overlapY(a, b); }

// Insertion sort by x0, counting element moves. Nearly sorted input => nearly linear.
long insertionSortByX(std::vector<Box>& v) {
    long moves = 0;
    for (std::size_t i = 1; i < v.size(); ++i) {
        Box key = v[i];
        std::size_t j = i;
        while (j > 0 && v[j - 1].x0 > key.x0) { v[j] = v[j - 1]; --j; ++moves; }
        v[j] = key;
    }
    return moves;
}

// Sort and sweep: boxes are sorted by x0. Box j can only overlap box i (j > i) while x0[j] <= x1[i].
long sweep(const std::vector<Box>& v, long& tests) {
    long pairs = 0;
    for (std::size_t i = 0; i < v.size(); ++i)
        for (std::size_t j = i + 1; j < v.size() && v[j].x0 <= v[i].x1; ++j) {
            ++tests;                                       // x-intervals overlap: check y
            pairs += overlapY(v[i], v[j]);
        }
    return pairs;
}

int main() {
    std::mt19937 rng(5);
    auto u = [&](float lo, float hi) { return lo + float(rng() % 10000) / 10000 * (hi - lo); };
    std::vector<Box> boxes(5000);
    for (auto& b : boxes) {
        float x = u(0, 2000), y = u(0, 2000), w = u(2, 20), h = u(2, 20);
        b = {x, y, x + w, y + h, u(-1, 1), u(-1, 1)};
    }

    for (int frame = 0; frame < 4; ++frame) {
        long allPairs = 0, allTests = 0;                    // reference: every pair
        for (std::size_t i = 0; i < boxes.size(); ++i)
            for (std::size_t j = i + 1; j < boxes.size(); ++j) { ++allTests; allPairs += overlap(boxes[i], boxes[j]); }

        long moves = insertionSortByX(boxes);               // frame 0: from scratch; later: re-sort
        long tests = 0;
        long pairs = sweep(boxes, tests);
        std::printf("frame %d: all-pairs %8ld tests -> %ld overlaps | sweep %5ld y-tests -> %ld overlaps, "
                    "sort moves %7ld\\n", frame, allTests, allPairs, tests, pairs, moves);

        for (auto& b : boxes) { b.x0 += b.vx; b.x1 += b.vx; b.y0 += b.vy; b.y1 += b.vy; }   // move a little
    }
}`,
          output: `frame 0: all-pairs 12497500 tests -> 1492 overlaps | sweep 136441 y-tests -> 1492 overlaps, sort moves 6195253
frame 1: all-pairs 12497500 tests -> 1511 overlaps | sweep 136586 y-tests -> 1511 overlaps, sort moves    4251
frame 2: all-pairs 12497500 tests -> 1514 overlaps | sweep 136366 y-tests -> 1514 overlaps, sort moves    4161
frame 3: all-pairs 12497500 tests -> 1520 overlaps | sweep 136394 y-tests -> 1520 overlaps, sort moves    4200`,
          annotations: [
            { lines: '12-21', text: 'Insertion sort by `x0`, counting moves. Each move fixes one inversion, so moves $=$ inversions.' },
            { lines: '24-32', text: 'The "sort and sweep" form: boxes sorted by `x0`; box `j` can only overlap box `i` while `x0[j] <= x1[i]`. The inner loop stops at the first box that starts too late. It is equivalent to the endpoint sweep in the animation.' },
            { lines: 48, text: 'Frame $0$ insertion-sorts a random order: about $n^2/4 \\approx 6.2$ million moves. Use `std::sort` for a fresh start. Frames $1$–$3$ start from last frame\'s order and need only about $4200$ moves.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The axis matters',
          text: 'Sweep and prune is only as good as its axis. If everything is lined up along $x$, say a column of tanks driving down a road that runs along $y$, every interval overlaps every other on $x$ and $k = \\Theta(n^2)$. Engines sweep the axis with the largest spread of box centres (choose it from the variance), or keep sorted lists on all three axes. Bullet\'s `btAxisSweep3` and PhysX\'s sweep-and-prune broad phase are built on this idea.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Five boxes have these $x$-intervals: $A = [0, 4]$, $B = [1, 3]$, $C = [2, 8]$, $D = [5, 6]$, $E = [7, 9]$ (closed intervals). Sweep and prune along $x$ sends every pair whose $x$-intervals overlap to the $y$-test. How many pairs is that?',
      label: 'pairs $=$',
      answer: '5',
      hint: 'Sort the endpoints and track the active list, or check each of the $10$ pairs.',
      explanation: 'Sweeping: $A$ starts (active $\\{A\\}$); $B$ starts and pairs with $A$; $C$ starts and pairs with $A$ and $B$; $B$ ends at $3$, $A$ ends at $4$; $D$ starts at $5$ and pairs with $C$; $D$ ends at $6$; $E$ starts at $7$ and pairs with $C$ (still active until $8$). That is $A$–$B$, $A$–$C$, $B$–$C$, $C$–$D$, $C$–$E$: $5$ of the $10$ possible pairs. $D$–$E$ is not a pair, since $D$ ends at $6$ before $E$ starts at $7$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'True or false: sweep and prune costs $\\Theta(n \\log n)$ every frame, even when objects barely move, because the endpoint list must be sorted again each frame.',
      answer: false,
      explanation: 'False. The list does have to be sorted each frame, but it starts out almost sorted, and insertion sort, which is [[dsa-adaptive-sort|adaptive]], runs in $O(n + I)$ for $I$ inversions. When objects move a little, $I$ is small and the cost is close to $O(n)$. In `sap.cpp`, $5000$ boxes needed about $4200$ moves per frame after the first. The $\\Omega(n \\log n)$ lower bound for comparison sorting applies to arbitrary input, not to input that is known to be nearly sorted.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'concept',
      title: 'Choosing: static versus dynamic scenes',
      blocks: [
        {
          type: 'p',
          text: 'No spatial structure wins everywhere. The deciding questions: Is the data **static** (level geometry, navigation nodes, cover points) or **dynamic** (characters, projectiles, debris)? Are the items **points** or objects **with extent**? Are the queries **ranges**, **nearest neighbors**, **rays** or **all pairs**? Static data can afford an expensive build (an SAH BVH, a balanced k-d tree) because it is paid once; dynamic data needs cheap updates or a rebuild that fits in a frame.',
        },
        {
          type: 'table',
          headers: ['Structure', 'Build', 'When objects move', 'Best for', 'Weak spot'],
          rows: [
            ['uniform grid / spatial hash', '$O(n)$', 'rebuild every frame, $O(n)$', 'many similar, spread-out movers', 'crowds; mixed sizes'],
            ['quadtree / octree', '$O(n \\cdot \\text{depth})$', 'remove + reinsert, or rebuild', 'uneven density, range queries', 'objects straddling splits (use loose trees)'],
            ['k-d tree', '$O(n \\log n)$', 'rebuild', 'nearest neighbor on static points', 'updates; high dimensions'],
            ['BVH (static, SAH)', '$O(n \\log n)$ or more', 'refit boxes, rebuild when degraded', 'ray casts against level geometry', 'sibling overlap after refits'],
            ['dynamic AABB tree', 'incremental', 'reinsert only when leaving a fat box', 'physics broad phase, mixed sizes', 'more complex code'],
            ['sweep and prune', '$O(n \\log n)$ once', 'insertion sort, $O(n + I)$', 'all pairs with temporal coherence', 'clustering on the sweep axis; teleports'],
          ],
          caption: '$I$ is the number of inversions since the last frame. Engines commonly mix them: a static BVH for the level, a dynamic tree or sweep and prune for moving bodies.',
        },
        {
          type: 'list',
          items: [
            '**Grids first.** If objects are similar in size and spread out, a grid is simple, fast and predictable. Reach for a tree when profiling shows crowded cells or wasted empty ones.',
            '**Rebuild or update?** Rebuilding from scratch each frame is often faster than careful incremental updates, because the build is a tight, cache-friendly loop over a flat array. Update incrementally when most objects are asleep.',
            '**Indices, not pointers.** Every implementation in this lesson stores nodes in one `std::vector` and links them by index: half the memory of 64-bit pointers, contiguous, and copyable or serializable as a block.',
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Where these came from',
          text: 'Finkel and Bentley introduced point quadtrees in 1974, and Bentley the k-d tree in 1975. *Quake* (1996) partitioned its levels with BSP trees, binary space partitions along arbitrary planes, to decide visibility and collisions. Modern renderers and physics engines mostly use BVHs, because they handle objects with extent without duplicating them and map well onto both CPUs and GPUs.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'In interviews',
          text: '"Find the $k$ nearest points to a query" (heap of size $k$, or a k-d tree), "detect overlapping rectangles" (sweep line plus an active set: sweep and prune), "design a collision system for an RTS with $10\\,000$ units" (grid or spatial hash, discuss crowding, then a hierarchy). Studios expect the trade-offs, not only the structure: say what happens with clustering, with big objects and with moving objects.',
        },
      ],
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'Your shooter\'s level is $2$ million static triangles. Every frame, hundreds of bullets and AI line-of-sight checks need the **first** triangle along a ray. Which structure fits best?',
      options: [
        { text: 'A uniform grid with one cell per $1$ m$^3$', why: 'A grid wastes memory on empty air and handles mixed triangle sizes badly: big floor triangles span many cells, and a ray must step through every cell it crosses. Grids suit many similar moving objects, not detailed static geometry.' },
        { text: 'A BVH over the triangles, built once offline with the surface area heuristic', correct: true, why: 'Right. The geometry never moves, so an expensive, high-quality build is paid once. Each triangle lives in exactly one leaf, and front-to-back traversal with the closest-hit cutoff touches a few dozen boxes per ray.' },
        { text: 'Sweep and prune along the $x$-axis', why: 'Sweep and prune answers "which pairs overlap", not "what does this ray hit first". It has no way to stop at the first hit along a ray.' },
        { text: 'A k-d tree over the triangle vertices', why: 'A k-d tree on vertices answers nearest-vertex queries. A ray can hit the middle of a large triangle far from all of its vertices, so the vertex tree does not answer the question.' },
      ],
      explanation: 'Static geometry plus ray queries is the textbook BVH case, and the same structure that GPU ray tracing hardware traverses. Dynamic objects (players, vehicles) usually get their own structure, such as a dynamic AABB tree, and a ray cast queries both.',
    },
  ],
  takeaways: [
    'Uniform grids and spatial hashes are $O(1)$ per insert and great for spread-out, similar-size objects, but crowds and mixed sizes push them back to $\\Theta(n^2)$.',
    'A quadtree (octree in 3D) splits crowded squares into four (eight) children. Half-open boxes, a leaf capacity and a maximum depth keep it correct and finite.',
    'Range queries prune any subtree whose region misses the query box. This is safe because every point below a node lies inside that node\'s region.',
    'A k-d tree splits at medians on alternating axes (height $\\lfloor \\log_2 n \\rfloor$). Nearest-neighbor search goes near side first and visits the far side only if $(q_{\\text{axis}} - \\text{split})^2 < d^2_{\\text{best}}$.',
    'A BVH partitions objects, not space: each object sits in exactly one leaf, but boxes may overlap. Ray casts traverse near child first and skip boxes that start beyond the best hit; the slab test is entry $= \\max$ of the per-axis entries, exit $= \\min$ of the per-axis exits.',
    'Sweep and prune sorts interval endpoints and sweeps with an active list in $O(n \\log n + k)$. With temporal coherence, an insertion-sort update makes it nearly linear per frame.',
    'Choose by data and query: static versus dynamic, points versus extents, ranges versus rays versus pairs. Store nodes in flat arrays linked by indices.',
  ],
  reading: [
    { title: 'Robert Nystrom, Game Programming Patterns: Spatial Partition', url: 'https://gameprogrammingpatterns.com/spatial-partition.html', source: 'book', note: 'A friendly chapter on why games partition space, with a grid implementation and a tour of quadtrees, BSPs and k-d trees.' },
    { title: 'Quadtree (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Quadtree', source: 'wikipedia', note: 'Point, region and other quadtree variants, with pseudocode for insertion and range queries.' },
    { title: 'k-d tree (Wikipedia)', url: 'https://en.wikipedia.org/wiki/K-d_tree', source: 'wikipedia', note: 'Median construction, nearest-neighbor search with the far-side test, and the complexity of range search.' },
    { title: 'Bounding volume hierarchy (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Bounding_volume_hierarchy', source: 'wikipedia', note: 'Construction strategies, the surface area heuristic and uses in ray tracing and collision detection.' },
    { title: 'Sweep and prune (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Sweep_and_prune', source: 'wikipedia', note: 'The broad-phase algorithm with temporal coherence and the insertion-sort update.' },
    { title: 'cppreference: std::nth_element', url: 'https://en.cppreference.com/w/cpp/algorithm/nth_element', source: 'other', note: 'The linear-time selection used to build balanced k-d trees and BVHs by median split.' },
  ],
};
