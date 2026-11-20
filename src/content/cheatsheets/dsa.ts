import type { CheatSheet } from '../types';

export const dsaCheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------------
  {
    id: 'dsa-containers',
    title: 'Containers and Their Costs',
    course: 'dsa',
    icon: '📦',
    description:
      'Big-O of the common operations on every standard container, what invalidates iterators, and which container to reach for first.',
    sections: [
      {
        title: 'Sequence containers',
        items: [
          {
            label: '`std::vector<T>`: the default',
            text: 'Index $O(1)$. `push_back` / `pop_back` amortized $O(1)$ (capacity grows geometrically: factor 2 in libstdc++, 1.5 in MSVC). Insert or erase in the middle $O(n)$ (shifts the tail). Search $O(n)$, or $O(\\log n)$ with `std::lower_bound` if sorted. Contiguous memory: the fastest container to scan.',
          },
          {
            label: '`std::deque<T>`',
            text: 'Index $O(1)$ (two indirections). `push_front` / `push_back` / `pop_front` / `pop_back` $O(1)$. Middle insert or erase $O(n)$. Blocks of contiguous memory; elements never move when you push at the ends, so references to them stay valid.',
          },
          {
            label: '`std::list<T>`, `std::forward_list<T>`',
            text: 'Insert or erase at a known iterator $O(1)$; `splice` $O(1)$. No indexing: reaching the $k$-th element is $O(k)$. One heap allocation per node and a pointer chase per step, so scans are many times slower than a vector\'s.',
          },
          {
            label: '`std::array<T, N>`, built-in arrays',
            text: 'Fixed size known at compile time, no allocation. Index $O(1)$.',
          },
          {
            label: 'Remove from a vector when order does not matter',
            code: 'v[i] = std::move(v.back());  // swap-and-pop: O(1)\nv.pop_back();',
            text: 'Instead of `v.erase(v.begin() + i)`, which is $O(n)$. Standard for entity lists in games.',
          },
        ],
      },
      {
        title: 'Associative containers and adapters',
        items: [
          {
            label: '`std::unordered_map` / `std::unordered_set`',
            text: 'Find, insert, erase: $O(1)$ **expected**, $O(n)$ worst case (all keys in one bucket, e.g. hash flooding). Separate chaining; rehashes when the load factor exceeds `max_load_factor()` (default $1.0$). No order. `reserve(n)` avoids repeated rehashing.',
          },
          {
            label: '`std::map` / `std::set` (and `multi` versions)',
            text: 'Red-black trees: find, insert, erase $O(\\log n)$ worst case. Iteration in sorted key order; `lower_bound`, `upper_bound` and range queries in $O(\\log n)$. One node allocation per element.',
          },
          {
            label: '`std::priority_queue<T>`',
            text: 'Binary heap on a vector: `push` / `pop` $O(\\log n)$, `top` $O(1)$. **Max**-heap by default; `std::greater<T>` gives a min-heap. No decrease-key, no iteration.',
          },
          {
            label: '`std::stack`, `std::queue`',
            text: 'Adapters (default container `std::deque`): push and pop $O(1)$ at the allowed end(s). For BFS use `std::queue`; a `std::vector` used as a stack is often faster than `std::stack`.',
          },
        ],
      },
      {
        title: 'Iterator invalidation',
        items: [
          {
            label: 'vector',
            text: 'A reallocation (any insert when `size() == capacity()`) invalidates **all** iterators, pointers and references. Otherwise insert or erase invalidates those at and after the position. `reserve()` up front prevents reallocation.',
          },
          {
            label: 'deque',
            text: 'Insert at either end invalidates iterators but **not** references to elements; insert in the middle invalidates everything. Erasing at an end invalidates only the erased element (plus `end()` when the last element is erased).',
          },
          {
            label: 'list, map, set',
            text: 'Node-based: only iterators to erased elements are invalidated. Inserting never invalidates anything.',
          },
          {
            label: 'unordered_map / set',
            text: 'A rehash invalidates all iterators but not pointers or references to elements. Erase invalidates only the erased element.',
          },
          {
            label: 'Erase while iterating',
            code: 'for (auto it = v.begin(); it != v.end(); )\n    if (dead(*it)) it = v.erase(it);  // use the returned iterator\n    else ++it;\n// better for vectors, O(n) total (C++20):\nstd::erase_if(v, dead);',
          },
        ],
      },
      {
        title: 'Choosing',
        items: [
          {
            label: 'Rules of thumb',
            text: 'Start with `std::vector`. Need fast lookup by key with no order: `unordered_map`. Need sorted order, range queries or a guaranteed worst case: `map`. Both ends: `deque`. "Most urgent next": `priority_queue`. Stable addresses for objects that others point to: an object pool with handles, or `list`/`deque` if you must.',
          },
          {
            label: 'Constant factors',
            text: 'Node-based containers allocate per element and chase pointers; on a modern CPU a cache miss costs on the order of 100 cycles. For a few hundred elements, a linear scan of a vector often beats a hash map or a tree.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dsa-sorting',
    title: 'Sorting Algorithms Compared',
    course: 'dsa',
    icon: '📶',
    description:
      'Time, extra space and stability of every standard sort, the comparison lower bound, linear-time sorts, and the standard-library sorting calls.',
    sections: [
      {
        title: 'Comparison sorts',
        items: [
          {
            label: 'At a glance',
            tex: '\\begin{array}{l|ccc|c|c} & \\text{best} & \\text{average} & \\text{worst} & \\text{extra space} & \\text{stable} \\\\ \\hline \\text{insertion} & n & n^2 & n^2 & 1 & \\text{yes} \\\\ \\text{selection} & n^2 & n^2 & n^2 & 1 & \\text{no} \\\\ \\text{bubble} & n & n^2 & n^2 & 1 & \\text{yes} \\\\ \\text{merge} & n \\log n & n \\log n & n \\log n & n & \\text{yes} \\\\ \\text{quick} & n \\log n & n \\log n & n^2 & \\log n & \\text{no} \\\\ \\text{heap} & n \\log n & n \\log n & n \\log n & 1 & \\text{no} \\\\ \\text{introsort} & n \\log n & n \\log n & n \\log n & \\log n & \\text{no} \\end{array}',
            text: 'All entries are $O(\\cdot)$. Bubble sort\'s $O(n)$ best case needs the "stop if no swaps" check. Quicksort\'s $O(\\log n)$ space assumes recursing on the smaller side first.',
          },
          {
            label: '[[dm-insertion-sort|Insertion sort]]',
            text: 'Runs in $O(n + I)$ where $I$ is the number of inversions, so it is fast on nearly sorted data and on tiny arrays (roughly $n \\le 16$). Introsort and Timsort use it for small pieces.',
          },
          {
            label: '[[dm-merge-sort|Merge sort]]',
            text: '$T(n) = 2T(n/2) + \\Theta(n) = \\Theta(n \\log n)$ always. Stable. Needs an $O(n)$ buffer for arrays; sorts linked lists with $O(1)$ extra space. Basis of external sorting and `std::stable_sort`.',
          },
          {
            label: '[[dm-quicksort|Quicksort]]',
            text: 'Partition around a pivot, recurse. Worst case $\\Theta(n^2)$ on bad pivots (sorted input with a first- or last-element pivot); random or median-of-three pivots make it rare. Three-way partitioning handles many duplicates in linear time per level.',
          },
          {
            label: 'Heapsort',
            text: 'Build a max-heap in $O(n)$, then $n - 1$ extractions. Guaranteed $O(n \\log n)$ in place, but poor cache locality makes it slower than quicksort in practice.',
          },
        ],
      },
      {
        title: 'The lower bound and linear-time sorts',
        items: [
          {
            label: 'Comparison lower bound',
            tex: '\\lceil \\log_2 n! \\rceil = n \\log_2 n - n \\log_2 e + O(\\log n) \\approx n \\log_2 n - 1.44\\,n',
            text: 'A decision tree that sorts must have $n!$ leaves, so some input needs at least this many comparisons. Every comparison sort is $\\Omega(n \\log n)$ in the worst case.',
          },
          {
            label: 'Counting sort',
            text: '$O(n + k)$ time and space for integer keys in $[0, k)$: count, prefix-sum the counts, place. Stable when placing from the back.',
          },
          {
            label: 'Radix sort (LSD)',
            text: '$O(d\\,(n + b))$ for $d$-digit keys in base $b$: stable counting sort on each digit, least significant first. 32-bit ints with $b = 256$: 4 passes.',
          },
          {
            label: 'Bucket sort',
            text: '$O(n)$ expected for keys spread uniformly over a known range; degrades if they cluster.',
          },
        ],
      },
      {
        title: 'Standard library',
        items: [
          {
            label: 'Sorting calls',
            code: 'std::sort(v.begin(), v.end());              // introsort, O(n log n), not stable\nstd::stable_sort(v.begin(), v.end());       // merge sort, stable\nstd::sort(v.begin(), v.end(), std::greater<>());   // descending\nstd::partial_sort(v.begin(), v.begin() + k, v.end()); // first k sorted, O(n log k)\nstd::nth_element(v.begin(), v.begin() + k, v.end());  // k-th in place, O(n) average\nstd::ranges::sort(v, {}, &Unit::hp);          // C++20: sort by a member',
          },
          {
            label: 'Comparators',
            text: 'Must be a strict weak ordering: `comp(a, a)` is false, so use `<`, never `<=`. Sort by several keys with `std::tie(a.x, a.y) < std::tie(b.x, b.y)`.',
          },
          {
            label: 'Stability',
            text: 'A stable sort keeps equal keys in input order, so you can sort by a secondary key first and then stably by the primary key. Needed for deterministic leaderboards and replays.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dsa-searching',
    title: 'Searching and Array Techniques',
    course: 'dsa',
    icon: '🔍',
    description:
      'Binary search done right, lower_bound and upper_bound, binary search on the answer, two pointers, sliding windows, prefix sums and difference arrays.',
    sections: [
      {
        title: 'Binary search',
        items: [
          {
            label: 'First index with a[i] ≥ x (half-open range)',
            code: 'int lo = 0, hi = n;                 // answer in [lo, hi]\nwhile (lo < hi) {\n    int mid = lo + (hi - lo) / 2;   // never (lo + hi) / 2: overflow\n    if (a[mid] < x) lo = mid + 1;   // answer is right of mid\n    else hi = mid;                  // mid might be the answer\n}\nreturn lo;                          // n if every element < x',
            text: 'Invariant: everything left of `lo` is $< x$, everything at or right of `hi` is $\\ge x$. Each step halves `hi - lo`: at most $\\lceil \\log_2 (n + 1) \\rceil$ iterations.',
          },
          {
            label: 'Library versions (sorted range)',
            code: 'auto it = std::lower_bound(v.begin(), v.end(), x);  // first >= x\nauto jt = std::upper_bound(v.begin(), v.end(), x);  // first > x\nauto n_x = jt - it;                                 // how many equal x\nbool found = std::binary_search(v.begin(), v.end(), x);',
          },
          {
            label: 'Binary search on the answer',
            text: 'If a yes/no predicate is monotone in a parameter $t$ (false, …, false, true, …, true), binary-search the smallest $t$ that makes it true: $O(\\log(\\text{range}) \\times \\text{cost of the check})$. "Minimum capacity", "minimum time", "largest minimum distance".',
          },
          {
            label: 'Pitfalls',
            text: 'Infinite loops from `lo = mid` with `mid` rounded down; `<=` vs `<` in the loop condition mixed with the wrong update; searching unsorted data; using `std::lower_bound` on a `std::list` ($O(n)$ steps). On floating point, iterate a fixed number of times instead of testing `lo < hi`.',
          },
        ],
      },
      {
        title: 'Linear-time array patterns',
        items: [
          {
            label: '[[dsa-two-pointers|Two pointers]]',
            text: 'On a sorted array, find a pair with sum $S$: `i` at the start, `j` at the end; if $a_i + a_j < S$ move `i` right, if greater move `j` left. $O(n)$ instead of $O(n^2)$. Also: merging, partitioning, removing duplicates in place.',
          },
          {
            label: '[[dsa-sliding-window|Sliding window]]',
            text: 'Grow the right end; shrink the left end while the window violates the constraint. Each index enters and leaves once: $O(n)$. "Longest substring with at most $k$ distinct", "shortest subarray with sum $\\ge S$" (non-negative values).',
          },
          {
            label: '[[dsa-prefix-sum|Prefix sums]]',
            tex: 'P_0 = 0, \\quad P_{i+1} = P_i + a_i, \\qquad \\sum_{i=l}^{r-1} a_i = P_r - P_l',
            text: '$O(n)$ build, $O(1)$ per range sum. Count subarrays with sum $k$: hash map of prefix-sum frequencies, $O(n)$.',
          },
          {
            label: '2D prefix sums (summed-area table)',
            tex: '\\text{sum}(r_1..r_2, c_1..c_2) = S_{r_2+1, c_2+1} - S_{r_1, c_2+1} - S_{r_2+1, c_1} + S_{r_1, c_1}',
            text: 'Inclusion–exclusion on the table $S_{r,c}$ = sum of the rectangle above-left of $(r, c)$, exclusive.',
          },
          {
            label: '[[dsa-difference-array|Difference array]]',
            text: 'To add $v$ to every $a_i$ for $i \\in [l, r)$: `d[l] += v; d[r] -= v;` then one prefix-sum pass rebuilds $a$. Many range updates, then all reads.',
          },
          {
            label: 'Monotonic deque or stack',
            text: 'Sliding-window maximum in $O(n)$: keep indices whose values are decreasing; pop from the back while smaller, from the front when out of the window. A monotonic stack gives "next greater element" for all indices in $O(n)$.',
          },
          {
            label: '[[dsa-floyd-cycle-detection|Floyd\'s cycle detection]]',
            text: 'Tortoise moves 1 step, hare 2; they meet inside the cycle iff one exists. $O(n)$ time, $O(1)$ memory: linked-list cycles, repeated states of $x \\mapsto f(x)$.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dsa-trees-heaps',
    title: 'Trees, Heaps and Range Structures',
    course: 'dsa',
    icon: '🌳',
    description:
      'Tree heights and traversals, BST and balanced-tree costs, binary heap index formulas and costs, tries, segment trees and Fenwick trees.',
    sections: [
      {
        title: 'Binary trees and BSTs',
        items: [
          {
            label: 'Heights',
            tex: '\\lfloor \\log_2 n \\rfloor \\le h \\le n - 1, \\qquad \\text{perfect tree of height } h: 2^{h+1} - 1 \\text{ nodes}',
            text: 'A complete tree has height exactly $\\lfloor \\log_2 n \\rfloor$; a degenerate (list-like) tree has height $n - 1$.',
          },
          {
            label: '[[dm-tree-traversal|Traversals]]',
            text: 'Preorder (node, left, right): copy or serialize a tree. Inorder (left, node, right): a BST in sorted order. Postorder (left, right, node): free or evaluate children first. Level order: BFS with a queue. All $O(n)$; recursion depth $O(h)$.',
          },
          {
            label: '[[dm-bst|BST]] operations',
            text: 'Search, insert, delete, min, max, successor: $O(h)$. Delete a node with two children: replace its key with its inorder successor (leftmost node of the right subtree), then delete that node, which has at most one child. Sorted insertions give $h = n - 1$.',
          },
          {
            label: 'Balanced trees',
            text: 'AVL: $|\\text{height(left)} - \\text{height(right)}| \\le 1$ everywhere, $h < 1.44 \\log_2(n + 2)$. Red-black: $h \\le 2 \\log_2(n + 1)$; at most 2 rotations per insert, 3 per delete. Both $O(\\log n)$ worst case. B-trees: height $O(\\log_B n)$ with $B$ keys per node, for disks and caches. `std::map` is a red-black tree.',
          },
          {
            label: 'Rotation',
            text: 'An $O(1)$ local restructuring that keeps the inorder sequence: a left rotation at $x$ makes its right child $y$ the subtree root and $y$\'s left subtree becomes $x$\'s right subtree.',
          },
        ],
      },
      {
        title: 'Binary heaps',
        items: [
          {
            label: '[[dsa-binary-heap|Array layout]] (0-based)',
            tex: '\\text{parent}(i) = \\left\\lfloor \\tfrac{i-1}{2} \\right\\rfloor, \\quad \\text{left}(i) = 2i + 1, \\quad \\text{right}(i) = 2i + 2',
            text: '1-based: $\\lfloor i/2 \\rfloor$, $2i$, $2i + 1$. Max-heap: every parent $\\ge$ its children.',
          },
          {
            label: 'Costs',
            text: '`top` $O(1)$; `push` (append, sift up) and `pop` (last leaf to the root, sift down, swapping with the **larger** child) $O(\\log n)$; build by bottom-up [[dsa-heapify|heapify]] $O(n)$; heapsort $O(n \\log n)$, in place, not stable.',
          },
          {
            label: 'Heapify bound',
            tex: '\\sum_{h \\ge 0} \\left\\lceil \\frac{n}{2^{h+1}} \\right\\rceil O(h) = O\\Big(n \\sum_{h \\ge 0} \\frac{h}{2^{h}}\\Big) = O(2n) = O(n)',
          },
          {
            label: 'Patterns',
            text: 'Top-$k$ largest: min-heap of size $k$, $O(n \\log k)$. Merge $k$ sorted lists: heap of heads, $O(N \\log k)$. Running median: max-heap + min-heap. Changing priorities: lazy deletion (push again, skip stale entries).',
          },
        ],
      },
      {
        title: 'Tries and range structures',
        items: [
          {
            label: '[[dsa-trie|Trie]]',
            text: 'Insert, lookup, prefix walk: $O(L)$ for a key of length $L$, independent of the number of keys. One node per distinct prefix. Autocomplete = walk to the prefix node, then DFS its subtree. A radix tree merges single-child chains.',
          },
          {
            label: '[[dsa-segment-tree|Segment tree]]',
            text: 'Any associative operation (sum, min, max, gcd). Build $O(n)$; point update and range query $O(\\log n)$ (at most two canonical nodes per level); range updates with lazy propagation. Array size $2n$ (bottom-up) or $4n$ (recursive).',
          },
          {
            label: '[[dsa-fenwick-tree|Fenwick tree]]',
            code: 'void add(int i, long long d) { for (; i <= n; i += i & -i) t[i] += d; }\nlong long prefix(int i) { long long s = 0; for (; i > 0; i -= i & -i) s += t[i]; return s; }',
            text: '1-based. $t[i]$ covers the $\\text{lowbit}(i) = i \\mathbin{\\&} (-i)$ elements ending at $i$. Range sum $= P(r) - P(l - 1)$, so it needs an invertible operation: no range min with arbitrary updates.',
          },
          {
            label: 'Which range structure?',
            text: 'Static sums: prefix sums, $O(1)$ query. Static min/max: sparse table, $O(1)$ query after $O(n \\log n)$ build. Dynamic sums or counts: Fenwick. Dynamic min/max, range updates: segment tree.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dsa-graph-algorithms',
    title: 'Graph Algorithms',
    course: 'dsa',
    icon: '🕸️',
    description:
      'Graph representations and their costs, BFS and DFS with their invariants, topological sort, cycle detection, components, bipartiteness, strongly connected components and union–find.',
    sections: [
      {
        title: 'Representations',
        items: [
          {
            label: 'Costs',
            tex: '\\begin{array}{l|c|c|c} & \\text{space} & (u,v) \\text{ edge?} & \\text{neighbors of } u \\\\ \\hline \\text{adjacency list / CSR} & n + m & \\deg u & \\deg u \\\\ \\text{adjacency matrix} & n^2 & 1 & n \\\\ \\text{edge list} & m & m & m \\end{array}',
            text: 'All $O(\\cdot)$. Sparse graphs (games, roads, networks: $m = O(n)$) want lists. [[dsa-csr|CSR]] packs all lists into one array for cache-friendly scans of static graphs.',
          },
          {
            label: 'Handshaking',
            tex: '\\sum_{v} \\deg(v) = 2m \\ \\text{(undirected)}, \\qquad \\sum_v \\deg^+(v) = m \\ \\text{(directed)}',
            text: 'Why one pass over all adjacency lists costs $O(n + m)$.',
          },
        ],
      },
      {
        title: 'Traversals',
        items: [
          {
            label: '[[dm-bfs|BFS]]',
            text: 'Queue; mark on **discovery**; record `dist` and `parent`. $O(n + m)$. Shortest paths by edge count (unweighted). The queue holds at most two consecutive distances. Multi-source BFS: start with all sources at distance $0$.',
          },
          {
            label: '[[dm-dfs|DFS]]',
            text: 'Recursion or an explicit stack of (vertex, next-neighbor index). Discovery/finish times nest (parenthesis theorem). $O(n + m)$. Deep recursion overflows the call stack on long paths.',
          },
          {
            label: '[[dsa-edge-classification|Edge types]] (directed DFS)',
            text: 'To a white vertex: tree. To a gray vertex (on the stack): **back** edge, a cycle. To a black vertex with $d(u) < d(v)$: forward; with $d(v) < d(u)$: cross. Undirected DFS has only tree and back edges.',
          },
          {
            label: 'Grids',
            text: 'Implicit graph: neighbors from offset arrays, `id = r * W + c`, `r = id / W`, `c = id % W`. Bounds check before reading a cell. Flood fill labels all regions in $O(HW)$.',
          },
        ],
      },
      {
        title: 'DFS and BFS applications',
        items: [
          {
            label: '[[dm-topological-sort|Topological sort]]',
            text: 'Exists iff the graph is a DAG. (1) Reverse DFS finish order: every edge $u \\to v$ has $f(v) < f(u)$. (2) Kahn: queue the in-degree-0 vertices, output one, decrement its successors, enqueue those reaching 0; fewer than $n$ output means a cycle. $O(n + m)$. Min-heap instead of queue: lexicographically smallest order.',
          },
          {
            label: 'Cycle detection',
            text: 'Directed: three colors, a back edge to a gray vertex (two colors give false positives on diamonds). Undirected: a visited neighbor other than the parent, or union–find finding both endpoints already connected.',
          },
          {
            label: 'Components and bipartiteness',
            text: 'Label components by one BFS/DFS per unlabeled vertex. Bipartite iff no odd cycle: 2-color by BFS distance parity; an edge with equal colors certifies an odd cycle.',
          },
          {
            label: '[[dsa-scc|Strongly connected components]]',
            text: 'Kosaraju: DFS on $G$ for finish order, then DFS on $G^T$ in decreasing finish order; each tree is an SCC (found in topological order). Tarjan: one DFS with low-links. $O(n + m)$. The condensation is a DAG.',
          },
          {
            label: 'Longest path / critical path in a DAG',
            text: 'Process vertices in topological order: $\\text{len}(v) = \\max_{u \\to v} \\text{len}(u) + w(u, v)$. $O(n + m)$. (In general graphs, longest simple path is NP-hard.)',
          },
        ],
      },
      {
        title: 'Union–find',
        items: [
          {
            label: '[[dm-union-find|Disjoint sets]]',
            code: 'int find(int x) {\n    while (parent[x] != x) x = parent[x] = parent[parent[x]];  // path halving\n    return x;\n}\nbool unite(int a, int b) {\n    a = find(a); b = find(b);\n    if (a == b) return false;\n    if (size[a] < size[b]) std::swap(a, b);\n    parent[b] = a; size[a] += size[b];   // smaller under larger\n    return true;\n}',
          },
          {
            label: 'Bounds',
            tex: '\\text{union by size alone: } h \\le \\log_2 n; \\qquad \\text{with path compression: } \\Theta\\big(m\\,\\alpha(n)\\big) \\text{ for } m \\text{ operations}',
            text: '[[dsa-inverse-ackermann|$\\alpha(n)$]] $\\le 4$ for all practical $n$. Supports merging only: no split, no edge deletion.',
          },
          {
            label: 'Uses',
            text: 'Online connectivity, undirected cycle detection, Kruskal\'s MST, perfect mazes and connected dungeons, clustering, percolation (virtual top and bottom nodes).',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dsa-shortest-paths-mst',
    title: 'Shortest Paths and Spanning Trees',
    course: 'dsa',
    icon: '🗺️',
    description:
      'Which shortest-path algorithm for which graph, relaxation, Dijkstra, Bellman–Ford, Floyd–Warshall, A* heuristics for grids, and minimum spanning trees with Kruskal and Prim.',
    sections: [
      {
        title: 'Choosing a shortest-path algorithm',
        items: [
          {
            label: 'Decision table',
            tex: '\\begin{array}{l|l|l} \\text{graph} & \\text{algorithm} & \\text{time} \\\\ \\hline \\text{unweighted} & \\text{BFS} & O(n + m) \\\\ \\text{weights } 0 \\text{ or } 1 & \\text{0-1 BFS (deque)} & O(n + m) \\\\ \\text{DAG, any weights} & \\text{relax in topological order} & O(n + m) \\\\ \\text{weights} \\ge 0 & \\text{Dijkstra (binary heap)} & O((n + m) \\log n) \\\\ \\text{negative edges} & \\text{Bellman–Ford} & O(nm) \\\\ \\text{all pairs, dense} & \\text{Floyd–Warshall} & O(n^3) \\end{array}',
          },
          {
            label: '[[dsa-relaxation|Relaxation]]',
            code: 'if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; parent[v] = u; }',
            text: 'Every shortest-path algorithm is a schedule of relaxations. Use a large sentinel for infinity and guard `dist[u] == INF` before adding, to avoid overflow.',
          },
        ],
      },
      {
        title: 'The algorithms',
        items: [
          {
            label: '[[dm-dijkstra|Dijkstra]]',
            text: 'Repeatedly settle the unsettled vertex with the smallest tentative distance (min-heap), relax its edges. Correct only for **non-negative** weights: once settled, a distance is final. With `std::priority_queue` use lazy deletion: skip entries with `d > dist[u]`. Stop early when the target is popped.',
          },
          {
            label: '[[dsa-bellman-ford|Bellman–Ford]]',
            text: 'Relax every edge $n - 1$ times; after round $k$, all shortest paths with at most $k$ edges are correct. If any edge still relaxes in round $n$, a [[dsa-negative-cycle|negative cycle]] is reachable from the source.',
          },
          {
            label: '[[dsa-floyd-warshall|Floyd–Warshall]]',
            code: 'for (int k = 0; k < n; ++k)          // k must be the OUTER loop\n    for (int i = 0; i < n; ++i)\n        for (int j = 0; j < n; ++j)\n            d[i][j] = std::min(d[i][j], d[i][k] + d[k][j]);',
            text: 'After iteration $k$, $d_{ij}$ is the shortest path using only intermediate vertices $0..k$. A negative $d_{ii}$ reveals a negative cycle.',
          },
          {
            label: '[[dm-a-star|A*]]',
            tex: 'f(v) = g(v) + h(v)',
            text: 'Dijkstra ordered by $g$ (cost so far) $+\\ h$ (estimate to the goal). [[dsa-admissible-heuristic|Admissible]] ($h \\le$ true remaining cost) guarantees an optimal path; [[dsa-consistent-heuristic|consistent]] ($h(u) \\le w(u, v) + h(v)$) also means no vertex is ever re-expanded. $h = 0$ gives Dijkstra.',
          },
          {
            label: 'Grid heuristics ($dx$, $dy$ to the goal)',
            tex: '\\text{4-way: } dx + dy, \\qquad \\text{8-way (diagonal cost } \\sqrt{2}\\text{): } \\max(dx, dy) + (\\sqrt{2} - 1)\\min(dx, dy)',
            text: 'Manhattan and octile distances are admissible for their movement rules. Euclidean distance is admissible for any-angle movement but weaker on grids.',
          },
        ],
      },
      {
        title: 'Minimum spanning trees',
        items: [
          {
            label: '[[dm-mst|MST]] facts',
            text: 'A spanning tree has $n - 1$ edges. **Cut property:** the lightest edge crossing any cut belongs to some MST (to every MST if it is the unique lightest). **Cycle property:** the heaviest edge on any cycle is in no MST (if unique). Distinct weights give a unique MST.',
          },
          {
            label: '[[dm-kruskal|Kruskal]]',
            text: 'Sort edges by weight; add each edge whose endpoints are in different union–find sets. $O(m \\log m)$, dominated by the sort. Good for sparse graphs and edge lists.',
          },
          {
            label: '[[dm-prim|Prim]]',
            text: 'Grow one tree from a start vertex, always adding the lightest edge leaving it (min-heap of crossing edges). $O(m \\log n)$ with a binary heap; $O(n^2)$ with an array, better for dense graphs.',
          },
          {
            label: 'MST is not shortest paths',
            text: 'An MST minimizes total edge weight; the path between two vertices inside it can be much longer than their shortest path. Road networks (cheapest to build) vs routes (fastest to drive) are different problems.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dsa-dp-greedy',
    title: 'Dynamic Programming and Greedy Patterns',
    course: 'dsa',
    icon: '🧩',
    description:
      'The DP recipe, the classic recurrences (coin change, knapsack, LIS, LCS, edit distance, grids, Kadane), and greedy algorithms with their exchange arguments and failure cases.',
    sections: [
      {
        title: 'Dynamic programming recipe',
        items: [
          {
            label: 'Five steps',
            text: '(1) Define the state: what does $dp[\\ldots]$ mean, in words? (2) Recurrence: the last choice made. (3) Base cases. (4) An evaluation order in which every dependency is computed first (or memoize recursion). (5) Where the answer lives. Running time $=$ number of states $\\times$ work per state.',
          },
          {
            label: 'When DP applies',
            text: '[[dsa-optimal-substructure|Optimal substructure]] (an optimal solution is built from optimal solutions of subproblems) plus [[dsa-overlapping-subproblems|overlapping subproblems]] (the same subproblem recurs). Memoization is top-down; tabulation is bottom-up and lets you keep only the rows you need.',
          },
        ],
      },
      {
        title: 'Classic recurrences',
        items: [
          {
            label: 'Coin change (fewest coins for amount $x$)',
            tex: 'dp[0] = 0, \\qquad dp[x] = 1 + \\min_{c \\le x} dp[x - c]',
            text: '$O(x \\cdot \\#\\text{coins})$. Counting combinations: `for` coin outer, `for` amount inner, `dp[x] += dp[x - c]`.',
          },
          {
            label: '0/1 knapsack (capacity $W$)',
            code: 'for (auto [w, v] : items)\n    for (int c = W; c >= w; --c)        // DOWNWARD: each item used once\n        dp[c] = std::max(dp[c], dp[c - w] + v);',
            text: '$O(nW)$: pseudo-polynomial. Iterate capacity upward instead for the unbounded knapsack (unlimited copies).',
          },
          {
            label: '[[dsa-lis|Longest increasing subsequence]]',
            text: '$O(n^2)$: $dp[i] = 1 + \\max_{j < i,\\, a_j < a_i} dp[j]$. $O(n \\log n)$: keep `tails[k]` = smallest tail of an increasing subsequence of length $k + 1$, and place each $a_i$ with `std::lower_bound` (strictly increasing).',
          },
          {
            label: '[[dsa-lcs|Longest common subsequence]]',
            tex: 'L_{i,j} = \\begin{cases} L_{i-1,j-1} + 1 & a_i = b_j \\\\ \\max(L_{i-1,j},\\, L_{i,j-1}) & a_i \\ne b_j \\end{cases}',
            text: '$O(nm)$ time; $O(\\min(n, m))$ memory if only the length is needed.',
          },
          {
            label: '[[dsa-edit-distance|Edit distance]] (Levenshtein)',
            tex: 'E_{i,j} = \\min\\big(E_{i-1,j} + 1,\\ E_{i,j-1} + 1,\\ E_{i-1,j-1} + [a_i \\ne b_j]\\big), \\quad E_{i,0} = i,\\ E_{0,j} = j',
            text: 'Delete, insert, substitute (free if the characters match). Fuzzy search for commands and names.',
          },
          {
            label: 'Grid paths and [[dsa-kadane|Kadane]]',
            tex: 'P_{r,c} = P_{r-1,c} + P_{r,c-1}, \\qquad \\text{best}_i = \\max(a_i,\\ \\text{best}_{i-1} + a_i)',
            text: 'Paths moving only right and down (blocked cells get $0$); maximum subarray sum in $O(n)$, answer $= \\max_i \\text{best}_i$.',
          },
          {
            label: 'Bitmask DP',
            text: 'States are subsets: TSP over $n$ cities in $O(2^n n^2)$ time and $O(2^n n)$ memory, practical up to $n \\approx 20$.',
          },
        ],
      },
      {
        title: 'Greedy algorithms',
        items: [
          {
            label: 'How to trust a greedy choice',
            text: '[[dsa-exchange-argument|Exchange argument]]: take any optimal solution that differs from the greedy one, swap in the greedy choice, and show it does not get worse. Repeat until they agree. If you cannot, look for a counterexample.',
          },
          {
            label: 'Classics that work',
            text: 'Interval scheduling: sort by **finish** time, take each compatible interval. Fractional knapsack: by value per weight. [[dm-huffman-coding|Huffman coding]]: repeatedly merge the two least frequent symbols (min-heap), $O(n \\log n)$. Minimum meeting rooms: sort endpoints or keep a min-heap of end times; answer = maximum overlap. MSTs (Kruskal, Prim).',
          },
          {
            label: 'Where greedy fails',
            text: 'Coins $\\{1, 3, 4\\}$, amount $6$: greedy takes $4 + 1 + 1$ (3 coins) but $3 + 3$ uses 2. 0/1 knapsack by value density also fails. Shortest paths with negative edges break Dijkstra\'s greedy settling. When greedy fails, the problem usually needs DP.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dsa-interview-cues',
    title: 'Problem Recognition Cues',
    course: 'dsa',
    icon: '🎯',
    description:
      'Map the wording and the input limits of a problem to the right technique, estimate the allowed complexity, and check the classic edge cases before you submit.',
    sections: [
      {
        title: 'Input size → target complexity',
        items: [
          {
            label: 'Budget',
            text: 'Assume roughly $10^8$ simple operations per second in C++ (less with cache misses or heavy allocation).',
          },
          {
            label: 'Typical limits',
            tex: '\\begin{array}{l|l|l} n & \\text{target} & \\text{typical technique} \\\\ \\hline \\le 10 & O(n!) & \\text{permutations, backtracking} \\\\ \\le 20\\text{–}25 & O(2^n), O(2^n n) & \\text{subsets, bitmask DP, meet in the middle} \\\\ \\le 500 & O(n^3) & \\text{Floyd–Warshall, interval DP} \\\\ \\le 5000 & O(n^2) & \\text{2D DP, all pairs} \\\\ \\le 10^6 & O(n \\log n), O(n) & \\text{sorting, heaps, two pointers, prefix sums} \\\\ \\le 10^{18} & O(\\log n), O(1) & \\text{binary search, math, fast exponentiation} \\end{array}',
          },
        ],
      },
      {
        title: 'Wording → technique',
        items: [
          { label: '"sorted array", "find position", "minimum value such that…"', text: 'Binary search, or binary search on the answer.' },
          { label: '"pair / triplet with sum", "in place", "palindrome"', text: 'Two pointers (sort first if needed).' },
          { label: '"longest / shortest substring or subarray with…"', text: 'Sliding window (non-negative values), or prefix sums with a hash map.' },
          { label: '"many range-sum queries"', text: 'Prefix sums (static), Fenwick tree (with updates); range min/max with updates: segment tree.' },
          { label: '"seen before?", "count frequencies", "two-sum"', text: 'Hash map or hash set, $O(1)$ expected per operation.' },
          { label: '"k largest / smallest / closest", "merge k sorted", "schedule by deadline"', text: 'Heap (priority queue).' },
          { label: '"next greater element", "sliding window max", "histogram"', text: 'Monotonic stack or deque.' },
          { label: '"prefix", "autocomplete", "word search", "max XOR pair"', text: 'Trie.' },
          { label: '"minimum moves / steps", unweighted', text: 'BFS on the (often implicit) state graph.' },
          { label: '"cheapest / shortest path" with weights', text: 'Dijkstra ($\\ge 0$), Bellman–Ford (negative), 0-1 BFS (weights 0/1), A* with a goal and a heuristic.' },
          { label: '"prerequisites", "order of tasks", "detect a dependency cycle"', text: 'Topological sort (Kahn) or 3-color DFS.' },
          { label: '"connected", "groups", "number of islands", edges arrive over time', text: 'BFS/DFS flood fill; union–find when edges are added incrementally.' },
          { label: '"connect everything at minimum cost"', text: 'Minimum spanning tree (Kruskal or Prim).' },
          { label: '"number of ways", "minimum cost to reach", "longest common…"', text: 'Dynamic programming: define the state, then the last choice.' },
          { label: '"all combinations / permutations / placements"', text: 'Backtracking with pruning.' },
          { label: '"pick intervals", "earliest deadline", "fewest coins" (canonical coins)', text: 'Greedy, after an exchange-argument check or a quick counterexample search.' },
        ],
      },
      {
        title: 'Edge-case checklist',
        items: [
          {
            label: 'Inputs',
            text: 'Empty input; a single element; all equal; already sorted and reverse sorted; duplicates; negative numbers and zero; the maximum size (time limit!).',
          },
          {
            label: 'Arithmetic',
            text: 'Overflow: sums of many `int`s need `long long`; `mid = lo + (hi - lo) / 2`; products like `a * b` before a modulo. `INF + w` overflows in shortest paths: guard it. In C++ integer division truncates toward zero, so `-7 / 2 == -3` and `-7 % 2 == -1` (the remainder takes the sign of the dividend).',
          },
          {
            label: 'Indices and iterators',
            text: 'Off-by-one in half-open versus closed ranges; `size() - 1` on an empty `std::vector` wraps around (unsigned); erasing from a container while iterating; references into a vector after `push_back`.',
          },
          {
            label: 'Graphs',
            text: 'Disconnected graphs (loop over all start vertices), self-loops and parallel edges, directed versus undirected input, 0-based versus 1-based vertex numbers, recursion depth on long paths.',
          },
        ],
      },
    ],
  },
];
