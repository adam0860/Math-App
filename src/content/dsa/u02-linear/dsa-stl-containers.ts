import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-stl-containers',
  title: 'Choosing a Container',
  summary: 'The standard library\'s containers side by side: what each is built from, the complexity of every common operation, the iterator invalidation rules, a decision guide for picking one, and the non-owning views `std::span` and `std::string_view`.',
  minutes: 20,
  objectives: [
    'Describe how `vector`, `array`, `deque`, `list`, `map`/`set`, `unordered_map`/`unordered_set` and `priority_queue` are built, and give the cost of their main operations',
    'Use ordered containers and sorted vectors for range queries with `lower_bound`, and hash containers for average $O(1)$ lookup',
    'Build max- and min-priority queues, including with a custom comparator, and predict their pop order',
    'State which operations invalidate iterators, pointers and references for each container',
    'Choose a container for a concrete game or interview problem, and pass ranges with `std::span` and `std::string_view` without dangling',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Sequence containers',
      blocks: [
        {
          type: 'p',
          text: 'This unit and the last have built every standard **sequence container** from scratch, so you already know what is inside each one. Here they are side by side. "Sequence" means you control the order: elements stay where you put them.',
        },
        {
          type: 'table',
          headers: ['Container', 'Built from', 'Index $[i]$', 'Push/pop back', 'Push/pop front', 'Insert/erase middle'],
          rows: [
            ['`std::array<T, N>`', 'a fixed C array, stored inline (no heap)', '$O(1)$', 'n/a (fixed size)', 'n/a', 'n/a'],
            ['`std::vector<T>`', 'one contiguous heap block, doubling', '$O(1)$', 'amortized $O(1)$', '$O(n)$', '$O(n)$ (shifts)'],
            ['`std::deque<T>`', 'map of fixed-size blocks', '$O(1)$ (two hops)', '$O(1)$', '$O(1)$', '$O(n)$'],
            ['`std::list<T>`', 'circular doubly linked nodes with a sentinel', '$O(n)$', '$O(1)$', '$O(1)$', '$O(1)$ given an iterator, plus $O(1)$ `splice`'],
            ['`std::forward_list<T>`', 'singly linked nodes', '$O(n)$', 'none', '$O(1)$', '$O(1)$ after a given iterator'],
          ],
        },
        {
          type: 'p',
          text: 'Two columns matter as much as the asymptotics. **Contiguity**: `array` and `vector` are one block, so traversal streams through the cache; `deque` is a few blocks, nearly as good; the lists are scattered nodes. **Allocation**: `array` never allocates, `vector` rarely, `deque` once per block, the lists once per element. That is why the rule of thumb in C++ (and in every engine codebase) is: **use `std::vector` unless you have a specific reason not to.**',
        },
        {
          type: 'callout',
          variant: 'note',
          title: '`std::array` versus a C array',
          text: '`std::array<float, 4>` has exactly the bytes of `float[4]`, but it can be copied, returned from functions and compared, it knows its `size()`, and it never decays into a pointer. Use it for small fixed-size data: a vertex\'s four bone weights, a $4 \\times 4$ matrix, the eight neighbours of a grid cell.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'mcq',
      prompt: 'A replay system needs a sequence that grows at **both** ends (new frames at the back, old frames trimmed from the front) and also needs fast access to "frame number $k$" by index. Which standard container fits best?',
      options: [
        { text: '`std::vector`', why: 'Index access and push_back are great, but trimming from the front is `erase(begin())`, which shifts every element: $O(n)$ each time.' },
        { text: '`std::deque`', correct: true, why: 'Push and pop at both ends in $O(1)$, plus $O(1)$ indexing through its block map.' },
        { text: '`std::list`', why: 'Both ends are $O(1)$, but there is no indexing: reaching frame $k$ walks $k$ nodes.' },
        { text: '`std::priority_queue`', why: 'A priority queue only exposes its top element; it has no indexing and no notion of front and back.' },
      ],
      explanation: '`std::deque` is the standard container with $O(1)$ operations at both ends and $O(1)$ random access. (If the replay buffer has a fixed maximum length, a ring buffer from the previous lesson is even better: no allocation at all.)',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Associative containers: ordered trees and hash tables',
      blocks: [
        {
          type: 'p',
          text: '**Associative containers** decide the position themselves, from the key. The standard library offers two families with very different guarantees:',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 242\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"120\" y=\"18\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">std::map: balanced search tree</text>\n<path d=\"M108.5,67.5 L76.5,102.5\" stroke=\"currentColor\" stroke-opacity=\"0.55\" stroke-width=\"1.5\"/>\n<path d=\"M131.5,67.5 L163.5,102.5\" stroke=\"currentColor\" stroke-opacity=\"0.55\" stroke-width=\"1.5\"/>\n<path d=\"M57.4,130.2 L42.6,159.8\" stroke=\"currentColor\" stroke-opacity=\"0.55\" stroke-width=\"1.5\"/>\n<path d=\"M72.6,130.2 L87.4,159.8\" stroke=\"currentColor\" stroke-opacity=\"0.55\" stroke-width=\"1.5\"/>\n<path d=\"M168.5,130.7 L156.5,159.3\" stroke=\"currentColor\" stroke-opacity=\"0.55\" stroke-width=\"1.5\"/>\n<path d=\"M182.6,130.2 L197.4,159.8\" stroke=\"currentColor\" stroke-opacity=\"0.55\" stroke-width=\"1.5\"/>\n<circle cx=\"120\" cy=\"55\" r=\"17\" class=\"f-orange s-orange\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"60\" text-anchor=\"middle\" font-size=\"13\">20</text>\n<circle cx=\"65\" cy=\"115\" r=\"17\" class=\"f-orange s-orange\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"65\" y=\"120\" text-anchor=\"middle\" font-size=\"13\">10</text>\n<circle cx=\"175\" cy=\"115\" r=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"175\" y=\"120\" text-anchor=\"middle\" font-size=\"13\">30</text>\n<circle cx=\"35\" cy=\"175\" r=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"35\" y=\"180\" text-anchor=\"middle\" font-size=\"13\">5</text>\n<circle cx=\"95\" cy=\"175\" r=\"17\" class=\"f-orange s-orange\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"95\" y=\"180\" text-anchor=\"middle\" font-size=\"13\">15</text>\n<circle cx=\"150\" cy=\"175\" r=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"150\" y=\"180\" text-anchor=\"middle\" font-size=\"13\">25</text>\n<circle cx=\"205\" cy=\"175\" r=\"17\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"205\" y=\"180\" text-anchor=\"middle\" font-size=\"13\">40</text>\n<text x=\"120\" y=\"216\" text-anchor=\"middle\" font-size=\"11\" class=\"t-orange\">find(15): 20 → 10 → 15, about log₂ n steps</text>\n<text x=\"120\" y=\"232\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">in-order walk gives sorted keys</text>\n<text x=\"390\" y=\"18\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">std::unordered_map: buckets</text>\n<rect x=\"290\" y=\"40\" width=\"34\" height=\"28\" rx=\"4\" class=\"f-purple s-purple\" fill-opacity=\"0.15\" stroke-width=\"1.3\"/>\n<text x=\"282\" y=\"58\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">0</text>\n<path d=\"M318.0,54.0 L342.0,54.0\" class=\"s-purple\" stroke-width=\"1.3\" fill=\"none\"/><path d=\"M350.0,54.0 L342.0,57.6 L342.0,50.4 Z\" class=\"f-purple\"/>\n<rect x=\"350\" y=\"40\" width=\"46\" height=\"28\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"373\" y=\"59\" text-anchor=\"middle\" font-size=\"12\">40</text>\n<rect x=\"290\" y=\"74\" width=\"34\" height=\"28\" rx=\"4\" class=\"f-purple s-purple\" fill-opacity=\"0.15\" stroke-width=\"1.3\"/>\n<text x=\"282\" y=\"92\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">1</text>\n<text x=\"307\" y=\"93\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">∅</text>\n<rect x=\"290\" y=\"108\" width=\"34\" height=\"28\" rx=\"4\" class=\"f-purple s-purple\" fill-opacity=\"0.15\" stroke-width=\"1.3\"/>\n<text x=\"282\" y=\"126\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">2</text>\n<path d=\"M318.0,122.0 L342.0,122.0\" class=\"s-purple\" stroke-width=\"1.3\" fill=\"none\"/><path d=\"M350.0,122.0 L342.0,125.6 L342.0,118.4 Z\" class=\"f-purple\"/>\n<rect x=\"350\" y=\"108\" width=\"46\" height=\"28\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"373\" y=\"127\" text-anchor=\"middle\" font-size=\"12\">12</text>\n<path d=\"M396.0,122.0 L412.0,122.0\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\"/><path d=\"M420.0,122.0 L412.0,125.6 L412.0,118.4 Z\" fill=\"currentColor\"/>\n<rect x=\"420\" y=\"108\" width=\"46\" height=\"28\" rx=\"4\" class=\"f-orange s-orange\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"443\" y=\"127\" text-anchor=\"middle\" font-size=\"12\">7</text>\n<rect x=\"290\" y=\"142\" width=\"34\" height=\"28\" rx=\"4\" class=\"f-purple s-purple\" fill-opacity=\"0.15\" stroke-width=\"1.3\"/>\n<text x=\"282\" y=\"160\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">3</text>\n<path d=\"M318.0,156.0 L342.0,156.0\" class=\"s-purple\" stroke-width=\"1.3\" fill=\"none\"/><path d=\"M350.0,156.0 L342.0,159.6 L342.0,152.4 Z\" class=\"f-purple\"/>\n<rect x=\"350\" y=\"142\" width=\"46\" height=\"28\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"373\" y=\"161\" text-anchor=\"middle\" font-size=\"12\">33</text>\n<rect x=\"290\" y=\"176\" width=\"34\" height=\"28\" rx=\"4\" class=\"f-purple s-purple\" fill-opacity=\"0.15\" stroke-width=\"1.3\"/>\n<text x=\"282\" y=\"194\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">4</text>\n<text x=\"307\" y=\"195\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">∅</text>\n<text x=\"390\" y=\"216\" text-anchor=\"middle\" font-size=\"11\" class=\"t-orange\">find(7): hash → bucket 2, scan its short chain</text>\n<text x=\"390\" y=\"232\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">no order; O(1) on average</text>\n</svg>",
          alt: 'Left: a binary search tree with root 20, children 10 and 30, and leaves 5, 15, 25, 40; the path 20, 10, 15 is highlighted. Right: five buckets numbered 0 to 4; bucket 0 chains to 40, bucket 2 chains to 12 then 7, bucket 3 to 33; buckets 1 and 4 are empty.',
          caption: 'Left: an ordered map is a balanced binary search tree of nodes. Right: an unordered map is an array of buckets, each holding a short chain of nodes; here the hash is simply the key mod $5$.',
          maxWidth: 520,
        },
        {
          type: 'table',
          headers: ['Property', '`std::map` / `std::set`', '`std::unordered_map` / `std::unordered_set`'],
          rows: [
            ['Built from', 'a balanced binary search tree (in practice red-black), one node per element', 'a hash table: an array of buckets, each a chain of nodes'],
            ['find / insert / erase', '$O(\\log n)$ worst case', '$O(1)$ average, $O(n)$ worst case (everything in one bucket)'],
            ['Iteration order', 'sorted by key', 'unspecified, and changes when it rehashes'],
            ['Range queries', '`lower_bound`, `upper_bound`, `equal_range` in $O(\\log n)$', 'none'],
            ['Key requirements', '`operator<` (a strict weak ordering)', 'a hash function and `operator==`'],
          ],
        },
        {
          type: 'code',
          title: 'ordered_vs_hashed.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <map>
#include <string>
#include <unordered_map>
#include <vector>

long comparisons = 0;
struct CountingLess {                       // std::less<int>, but it counts its calls
    bool operator()(int a, int b) const { ++comparisons; return a < b; }
};

int main() {
    const int n = 1'000'000;

    // Ordered map: a balanced binary search tree. Lookups compare O(log n) keys.
    std::map<int, int, CountingLess> tree;
    for (int i = 0; i < n; ++i) tree[i * 7 % n] = i;
    comparisons = 0;
    for (int k = 0; k < 1000; ++k) tree.find(k * 997);
    std::printf("std::map:            %.1f comparisons per find (log2 n = 19.9)\\n", comparisons / 1000.0);

    // Sorted vector + binary search: same O(log n), but contiguous.
    std::vector<int> sorted(n);
    for (int i = 0; i < n; ++i) sorted[i] = i;
    comparisons = 0;
    for (int k = 0; k < 1000; ++k) std::lower_bound(sorted.begin(), sorted.end(), k * 997, CountingLess{});
    std::printf("sorted vector:       %.1f comparisons per lower_bound\\n", comparisons / 1000.0);

    // Ordered containers answer range questions: every key in [100, 130).
    std::map<int, std::string> items{{90, "dagger"}, {105, "rifle"}, {120, "shield"}, {130, "cannon"}, {150, "tank"}};
    std::printf("items priced 100..129:");
    for (auto it = items.lower_bound(100); it != items.lower_bound(130); ++it) std::printf(" %s", it->second.c_str());
    std::printf("\\n");

    // Unordered map: a hash table. No order, but O(1) average lookups.
    std::unordered_map<std::string, int> kills;
    kills.reserve(100);                      // allocate buckets once, up front
    for (const char* name : {"ana", "bo", "cy", "ana", "dee", "bo", "ana"}) ++kills[name];
    std::printf("unordered_map: ana %d, bo %d, size %zu, load factor %.2f <= max %.1f\\n",
                kills["ana"], kills["bo"], kills.size(), kills.load_factor(), kills.max_load_factor());
}`,
          output: `std::map:            21.7 comparisons per find (log2 n = 19.9)
sorted vector:       19.9 comparisons per lower_bound
items priced 100..129: rifle shield
unordered_map: ana 3, bo 2, size 4, load factor 0.04 <= max 1.0`,
          annotations: [
            { lines: '9-11', text: 'A comparator that counts its own calls: an easy way to measure any standard algorithm or container.' },
            { lines: 20, text: 'A red-black tree is balanced only to within a factor of $2$, so a lookup makes a few more comparisons than $\\log_2 n$: here about $21.7$.' },
            { lines: 27, text: 'Binary search over a sorted vector: $\\lceil \\log_2 n \\rceil$ comparisons, through contiguous memory instead of a million separately allocated nodes.' },
            { lines: 33, text: '`lower_bound(k)` is the first key $\\ge k$. The half-open range `[lower_bound(100), lower_bound(130))` is every key in $[100, 130)$: a query a hash table cannot answer.' },
            { lines: 38, text: '`reserve(n)` sizes the bucket array for $n$ elements, so filling it never rehashes. The load factor is elements per bucket; the table rehashes when it would exceed `max_load_factor()` ($1.0$ by default).' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sorted vectors and flat maps',
          text: 'For data that is built once and then mostly searched (item tables, localization strings, level metadata), sort a `std::vector` and use `std::lower_bound`: same $O(\\log n)$ lookups, a fraction of the memory, and far fewer cache misses than a tree. C++23 packages this idea as `std::flat_map`. The trade-off is $O(n)$ insertion. You will build hash tables in the next unit and balanced trees in the tree unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Let `v` be the sorted vector $[3, 7, 7, 10, 15, 15, 21]$. What does `std::lower_bound(v.begin(), v.end(), 8) - v.begin()` evaluate to?',
      label: 'index $=$',
      answer: '3',
      hint: '`lower_bound` returns the first position whose element is **not less than** the value, whether or not the value is present.',
      explanation: 'The first element $\\ge 8$ is $10$, at index $3$. Since $8$ is not in the vector, index $3$ is also where $8$ would have to be inserted to keep the vector sorted. For a value that is present, `lower_bound` finds its first occurrence and `upper_bound` the position after its last: for $15$ they return $4$ and $6$, so $15$ occurs $6 - 4 = 2$ times.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'GCC\'s `std::lower_bound` halves the remaining range with one comparison per step. What is the **maximum** number of comparisons it makes on a sorted `std::vector` of $1\\,000\\,000$ elements?',
      label: 'comparisons $=$',
      answer: '20',
      hint: 'Each comparison at least halves the remaining length, and the search stops when the length reaches $0$. How many halvings take $10^6$ to $0$?',
      explanation: 'With length $L$, one comparison leaves at most $\\lfloor L/2 \\rfloor$ elements. Starting from $10^6$, the lengths can go $10^6, 500\\,000, 250\\,000, \\dots$, and the number of steps until $0$ is $\\lfloor \\log_2 10^6 \\rfloor + 1 = 19 + 1 = 20$, since $2^{19} = 524\\,288 \\le 10^6 < 2^{20}$. The program above averaged $19.9$. A red-black tree with the same keys averaged about $21.7$, and each of its steps is a pointer to a separately allocated node.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Container adapters and priority queues',
      blocks: [
        {
          type: 'p',
          text: '`std::stack`, `std::queue` and `std::priority_queue` are **container adapters**: thin wrappers that expose only an ADT\'s operations on top of a real container (`std::deque` by default for the first two, `std::vector` for the third). They add no power, but they make intent obvious and prevent misuse, since a `std::stack` has no iterators and no way to reach the middle.',
        },
        {
          type: 'p',
          text: 'A `std::priority_queue` always hands you the **highest-priority** element: `top()` in $O(1)$, `push` and `pop` in $O(\\log n)$. Inside is a binary heap stored in a vector, which gets its own lesson later. The one trap is the direction: by default it is a **max**-heap, ordered by `std::less`, so `top()` is the **largest** element. For "earliest time first" or "cheapest path first" you need a min-heap: pass `std::greater<T>`, or write a comparator that answers "should `a` come out **after** `b`?".',
        },
        {
          type: 'code',
          title: 'priority_events.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <functional>
#include <queue>
#include <string>
#include <utility>
#include <vector>

struct Event {
    double time;        // when it fires, in seconds
    std::string what;
};
// priority_queue pops the LARGEST element by its comparator. To pop the earliest
// event first, "larger priority" must mean "smaller time".
struct LaterFirst {
    bool operator()(const Event& a, const Event& b) const { return a.time > b.time; }
};

int main() {
    std::priority_queue<int> maxHeap;                                     // default: max first
    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap; // min first
    for (int x : {5, 1, 8, 3, 9, 2}) { maxHeap.push(x); minHeap.push(x); }
    std::printf("max-heap pops:");
    while (!maxHeap.empty()) { std::printf(" %d", maxHeap.top()); maxHeap.pop(); }
    std::printf("\\nmin-heap pops:");
    while (!minHeap.empty()) { std::printf(" %d", minHeap.top()); minHeap.pop(); }
    std::printf("\\n");

    // An AI/game event scheduler: always handle the earliest pending event next.
    std::priority_queue<Event, std::vector<Event>, LaterFirst> events;
    events.push({2.5, "grenade explodes"});
    events.push({0.5, "guard turns"});
    events.push({1.0, "reinforcements arrive"});
    events.push({0.75, "door opens"});
    while (!events.empty()) {
        const Event& e = events.top();       // O(1) peek
        std::printf("t = %.2f  %s\\n", e.time, e.what.c_str());
        events.pop();                        // O(log n)
    }
}`,
          output: `max-heap pops: 9 8 5 3 2 1
min-heap pops: 1 2 3 5 8 9
t = 0.50  guard turns
t = 0.75  door opens
t = 1.00  reinforcements arrive
t = 2.50  grenade explodes`,
          annotations: [
            { lines: 19, text: 'The default: `std::less<int>`, so the largest element is on top.' },
            { lines: 20, text: 'All three template arguments are needed to change the order: the element type, the underlying container, and the comparator.' },
            { lines: '14-16', text: 'The comparator returns `true` when `a` has **lower** priority than `b`. "Lower priority" here means a **later** time, so the earliest event surfaces.' },
            { lines: '34-38', text: 'The scheduler loop at the heart of discrete-event simulations, AI timers and Dijkstra\'s algorithm: take the earliest, process it, repeat.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where priority queues run games',
          text: 'Timers and scheduled events (respawns, cooldowns, delayed explosions), A* and Dijkstra open lists (always expand the most promising node), AI utility systems (act on the highest-scoring option), and job systems that run the most urgent tasks first. Military logistics software does the same with deadlines and priorities.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'These pairs are pushed into `std::priority_queue<std::pair<int, std::string>, std::vector<std::pair<int, std::string>>, std::greater<>>` in the order shown: $(5, \\text{B})$, $(2, \\text{D})$, $(5, \\text{A})$, $(9, \\text{C})$, $(2, \\text{E})$. Put them in the order they are **popped**.',
      lines: ['$(2, \\text{D})$', '$(2, \\text{E})$', '$(5, \\text{A})$', '$(5, \\text{B})$', '$(9, \\text{C})$'],
      explanation: '`std::greater` makes this a **min**-heap: the smallest pair comes out first. Pairs compare lexicographically: by the first component, and by the second when the first ties. So the two $2$s come first, $(2, \\text{D})$ before $(2, \\text{E})$; then $(5, \\text{A})$ before $(5, \\text{B})$; then $(9, \\text{C})$. The push order is irrelevant. Without `std::greater` the order would be exactly reversed.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Declare a priority queue of `int`s whose `top()` is the **smallest** element.',
      template: '`std::priority_queue<int,` ___ `,` ___ `> pq;`',
      blanks: [{ answers: ['`std::vector<int>`'] }, { answers: ['`std::greater<int>`'] }],
      wordBank: ['`std::vector<int>`', '`std::list<int>`', '`std::greater<int>`', '`std::less<int>`', '`std::deque<int>`'],
      explanation: 'The comparator is the third template argument, so the second (the underlying container) must be spelled out too: `std::vector<int>` (it needs random access, so `std::list` is not allowed). `std::less<int>`, the default, gives a max-heap; `std::greater<int>` reverses it, so the smallest element is on top.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Iterator invalidation, container by container',
      blocks: [
        {
          type: 'p',
          text: 'Holding a pointer, reference or iterator into a container across a modification is safe only if that operation does not invalidate it. You met the vector\'s rules in the arrays lesson; here is the whole family. Node-based containers are the stable ones, because their elements never move.',
        },
        {
          type: 'table',
          headers: ['Container', 'Insertion invalidates', 'Erasure invalidates'],
          rows: [
            ['`vector`', 'everything if it reallocates; otherwise everything at or after the insertion point', 'everything at or after the erased element'],
            ['`deque`', 'at either end: all **iterators**, but no references or pointers; in the middle: everything', 'at either end: only the erased elements (and `end()` when erasing the back); in the middle: everything'],
            ['`list`, `forward_list`', 'nothing', 'only the erased elements'],
            ['`map`, `set`', 'nothing', 'only the erased elements'],
            ['`unordered_map`, `unordered_set`', 'if it rehashes: all **iterators**, but no references or pointers; otherwise nothing', 'only the erased elements'],
          ],
        },
        {
          type: 'code',
          title: 'invalidation_rules.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <deque>
#include <list>
#include <map>
#include <unordered_map>
#include <vector>

// Record an element's address as a plain number, grow the container, and check
// whether the element is still at the same address.
template <class Container, class Get, class Grow>
void check(const char* label, Container& c, Get get, Grow grow) {
    auto before = reinterpret_cast<std::uintptr_t>(&get(c));
    grow(c);
    auto after = reinterpret_cast<std::uintptr_t>(&get(c));
    std::printf("%-30s %s\\n", label, before == after ? "same address" : "MOVED");
}

int main() {
    std::vector<int> v{1};
    std::deque<int> d{1};
    std::list<int> l{1};
    std::map<int, int> m{{0, 1}};
    std::unordered_map<int, int> u{{0, 1}};

    auto first = [](auto& c) -> int& { return c.front(); };
    auto pushMany = [](auto& c) { for (int i = 0; i < 1000; ++i) c.push_back(i); };
    check("vector push_back x1000:", v, first, pushMany);
    check("deque push_back x1000:", d, first, pushMany);
    check("list push_back x1000:", l, first, pushMany);

    auto keyZero = [](auto& c) -> int& { return c.at(0); };
    auto insertMany = [](auto& c) { for (int i = 1; i <= 1000; ++i) c[i] = i; };
    check("map insert x1000:", m, keyZero, insertMany);
    std::size_t bucketsBefore = u.bucket_count();
    check("unordered_map insert x1000:", u, keyZero, insertMany);
    std::printf("  (unordered_map buckets %zu -> %zu: it rehashed, invalidating every iterator)\\n",
                bucketsBefore, u.bucket_count());
}`,
          output: `vector push_back x1000:        MOVED
deque push_back x1000:         same address
list push_back x1000:          same address
map insert x1000:              same address
unordered_map insert x1000:    same address
  (unordered_map buckets 13 -> 1109: it rehashed, invalidating every iterator)`,
          annotations: [
            { lines: '13-15', text: 'Converting the address to an integer before growing the container avoids ever using a possibly dangling pointer: we only compare numbers.' },
            { lines: 28, text: 'The vector reallocated (several times) and moved its elements.' },
            { lines: '29-30', text: 'A deque adds blocks and a list adds nodes; existing elements stay put.' },
            { lines: '36-38', text: 'The hash table grew from $13$ to $1109$ buckets (GCC uses prime bucket counts), relinking its nodes into new buckets, but the nodes themselves did not move. References survive; iterators, which also track a bucket position, do not.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why node-based containers are the stable ones',
          text: 'Invalidation happens when an element **moves** (a pointer or reference to it dangles) or when the bookkeeping an iterator relies on changes. In `list`, `map`, `set` and the unordered containers, each element sits in its own heap node that is never moved after it is created; insertion only relinks nodes. A `vector` must move elements whenever it reallocates or shifts, and a `deque` iterator also tracks the block map, which an end insertion may reallocate. Stability is paid for with an allocation per element and poor locality, which is the same trade-off you saw between lists and vectors.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Erasing from a map while iterating',
          text: 'The node-based rule "erase invalidates only the erased element" still bites: `for (auto it = m.begin(); it != m.end(); ++it) if (dead(*it)) m.erase(it);` increments an iterator that was just invalidated. As with vectors, use `it = m.erase(it);` (and do not increment in that case), or C++20\'s `std::erase_if(m, pred)`, which exists for every standard container except `std::array`.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'When a `std::unordered_map` rehashes, every pointer and reference to its elements becomes invalid.',
      answer: false,
      explanation: 'Each element of a standard `unordered_map` lives in its own node. A rehash allocates a new bucket array and relinks the existing nodes into it, without moving them. So pointers and references stay valid, but **iterators** are invalidated (an iterator\'s position depends on the bucket layout). This node-based design is required by the standard, and it is one reason `std::unordered_map` is slower than open-addressing hash tables that store elements directly in an array, which you will meet in the hashing unit.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'A decision guide',
      blocks: [
        {
          type: 'p',
          text: 'Pick containers by asking what you will do **most often**, then check the constraints. In order:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Start with `std::vector`', text: 'Iterate, index, append: it is the fastest at all three. Unordered removal: swap-and-pop. Size known at compile time: `std::array`.' },
            { title: 'Lookup by key?', text: 'Small ($\\lesssim 50$ elements): a linear scan of a vector usually wins. Large and changing, no order needed: `std::unordered_map`. Built once, then searched: a sorted vector with `lower_bound` (or `std::flat_map`).' },
            { title: 'Need sorted order or ranges?', text: '"All keys between $a$ and $b$", "the next event after time $t$", iteration in key order, all while inserting and erasing: `std::map` / `std::set`.' },
            { title: 'Both ends?', text: 'FIFO or double-ended with an unbounded size: `std::deque` (or `std::queue` on top of it). With a fixed maximum size: a ring buffer.' },
            { title: 'Always the best next item?', text: '`std::priority_queue`, or a hand-rolled heap when you also need to change priorities.' },
            { title: 'Elements must never move?', text: 'Other code holds pointers to them, or you splice and unlink known elements in $O(1)$: `std::list`, or better, objects in a pool with intrusive links or handles (the game-engine unit).' },
          ],
        },
        {
          type: 'derivation',
          title: 'Worked choice: an RTS needs units by id, and units in a square region',
          steps: [
            { tex: '\\text{query 1: } \\texttt{unitById(id)} \\text{, thousands per frame}', why: 'A key lookup with no ordering: `std::unordered_map<UnitId, Unit*>`, or a vector indexed by id if ids are small dense integers ($O(1)$ with no hashing at all).' },
            { tex: '\\text{query 2: units with } x \\in [x_0, x_1] \\text{ and } y \\in [y_0, y_1]', why: 'A 2D range query. A `std::map` keyed on $x$ answers the $x$-range with `lower_bound` in $O(\\log n + k)$ but must still filter on $y$.' },
            { tex: '\\text{units move every frame} \\implies \\text{re-sorting a tree each frame is wasteful}', why: 'The constraint that decides it: frequently changing positions favour a structure that is cheap to update.' },
            { tex: '\\text{answer: a uniform grid of buckets (spatial hashing)}', why: 'Each unit lives in the cell its position falls in; a region query visits only the overlapping cells. Spatial structures get their own lessons in the hashing and game-structures units.' },
          ],
          result: 'Different queries over the same data often want **different** containers. Keep the units in one dense array and build lightweight indices (an id map, a spatial grid) on top.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Interview pattern',
          text: 'When asked "which data structure?", name the dominant operations and their required costs first ("I need $O(1)$ lookup by name and in-order iteration by score"), then pick, and say what you give up. Combining two structures is often the intended answer: a hash map plus a doubly linked list gives the $O(1)$ LRU cache; a hash map plus a heap gives a priority queue with $O(1)$ lookup.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Your game\'s developer console has $400$ commands. As the player types a prefix like `sp`, it must list every command starting with that prefix, **in alphabetical order**, updating on each keystroke. Which standard container makes this simplest and efficient?',
      options: [
        { text: '`std::unordered_set<std::string>`', why: 'Fast exact lookups, but no order: you would scan all $400$ commands and then sort the matches on every keystroke.' },
        { text: '`std::set<std::string>` (or a sorted `std::vector`), using `lower_bound(prefix)`', correct: true, why: 'All strings with a given prefix are **contiguous** in sorted order. `lower_bound(prefix)` jumps to the first one in $O(\\log n)$; iterate while the prefix still matches.' },
        { text: '`std::priority_queue<std::string>`', why: 'It only exposes the largest element; listing all matches would mean popping (and destroying) the whole queue.' },
        { text: '`std::list<std::string>`', why: 'A linear scan of scattered nodes per keystroke, and the list has no ordering of its own.' },
      ],
      explanation: 'In lexicographic order, every string that begins with `sp` sits in one contiguous run, starting at the first string $\\ge$ `"sp"`. An ordered container finds that start with `lower_bound` and walks forward until a string no longer starts with the prefix: $O(\\log n + k)$ for $k$ matches. (The trie, a tree keyed by characters, does this even more directly; it gets a lesson in the heaps and tries unit.)',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Views: std::span and std::string_view',
      blocks: [
        {
          type: 'p',
          text: 'Not every parameter should own its data. A function that only **reads** a sequence should not care whether the caller has a `vector`, an `array` or a C array, and should not copy it. C++17 and C++20 added two [[dsa-non-owning-view|non-owning views]] for exactly this: `std::string_view` (a pointer and a length into some characters) and `std::span<T>` (a pointer and a length into contiguous `T`s). Both are two words in size, cheap to pass by value, and $O(1)$ to slice.',
        },
        {
          type: 'code',
          title: 'span_view.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdio>
#include <span>
#include <string>
#include <string_view>
#include <vector>

// One function for every contiguous sequence of floats: no copies, no templates.
float average(std::span<const float> xs) {
    float sum = 0;
    for (float x : xs) sum += x;
    return xs.empty() ? 0 : sum / float(xs.size());
}

// Split a console command into words without allocating: each word is a view
// into the caller's string.
std::vector<std::string_view> words(std::string_view line) {
    std::vector<std::string_view> out;
    while (!line.empty()) {
        std::size_t start = line.find_first_not_of(' ');
        if (start == std::string_view::npos) break;
        line.remove_prefix(start);
        std::size_t end = line.find(' ');
        out.push_back(line.substr(0, end));
        line.remove_prefix(end == std::string_view::npos ? line.size() : end);
    }
    return out;
}

int main() {
    std::vector<float> frameMs{16.1f, 16.9f, 33.4f, 16.6f};
    std::array<float, 3> fixed{1, 2, 3};
    float raw[] = {10, 20};
    std::printf("averages: %.2f %.2f %.2f\\n", average(frameMs), average(fixed), average(raw));
    std::printf("last 2 frames: %.2f\\n", average(std::span(frameMs).last(2)));

    std::string command = "  spawn   tank 3 ";       // owns the characters
    for (std::string_view w : words(command))       // the views point into \`command\`
        std::printf("[%.*s] ", int(w.size()), w.data());
    std::printf("\\n");
}`,
          output: `averages: 20.75 2.00 15.00
last 2 frames: 25.00
[spawn] [tank] [3] `,
          annotations: [
            { lines: 9, text: '`std::span<const float>` accepts a `vector<float>`, an `array<float, N>` and a `float[]` alike, read-only, without copying a single element.' },
            { lines: 17, text: 'A `string_view` parameter accepts `std::string`, string literals and other views, again without copying.' },
            { lines: '22-25', text: '`remove_prefix` and `substr` on a view only adjust a pointer and a length: $O(1)$, no allocation.' },
            { lines: 35, text: '`last(2)` makes a sub-span of the final two frames: slicing is free.' },
            { lines: '37-39', text: 'The words are views into `command`. They stay valid exactly as long as `command` lives and is not modified.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A view never keeps its data alive',
          text: 'A view is a borrowed pointer. If the owner is destroyed or reallocates, the view dangles, and the compiler will not stop you. Never return a view into a local variable, never build one from a temporary that dies at the end of the statement, and never keep a `span` into a vector across a `push_back`. Rule of thumb: views are excellent **parameters** and risky **members** or return values.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'This code should print `spawn`. Instead it prints garbage, or crashes. Tap the line with the bug.',
      lines: [
        '`std::string_view firstWord(std::string_view line) {`',
        '`    return line.substr(0, line.find(\' \'));`',
        '`}`',
        '`std::string_view cmd = firstWord(std::string("spawn tank 3"));`',
        '`std::printf("%.*s\\n", int(cmd.size()), cmd.data());`',
      ],
      errorLines: [4],
      explanation: '`firstWord` itself is fine: it returns a view into whatever `line` views. The bug is line 4: `std::string("spawn tank 3")` is a **temporary** that is destroyed at the end of that statement, so `cmd` is left pointing into freed memory, and line 5 reads it: undefined behaviour. Fix: give the string a name that outlives the view, `std::string line = "spawn tank 3"; std::string_view cmd = firstWord(line);`, or pass the literal directly, `firstWord("spawn tank 3")`, since string literals live for the whole program.',
    },
  ],
  takeaways: [
    'Sequence containers: `array` (fixed, inline), `vector` (contiguous, the default), `deque` (blocks, $O(1)$ at both ends and by index), `list`/`forward_list` (nodes, $O(1)$ splicing, stable addresses, poor locality).',
    '`map`/`set` are balanced trees: $O(\\log n)$ worst case, sorted iteration and `lower_bound` range queries. `unordered_map`/`unordered_set` are bucket hash tables: $O(1)$ average, no order. Sorted vectors give tree-like lookups with far better locality.',
    '`priority_queue` is a binary heap: `top` $O(1)$, `push`/`pop` $O(\\log n)$, max-first by default; use `std::greater` or a "later-first" comparator for min-first.',
    'Invalidation: vector reallocation moves everything; deque end-insertions keep references but not iterators; list and map erasure invalidates only the erased element; an unordered rehash keeps references but invalidates iterators.',
    'Choose by the dominant operations: vector by default, hash map for keyed lookup, ordered map for ranges, deque or a ring buffer for both ends, priority queue for "best next", lists or pools for stable addresses.',
    '`std::span` and `std::string_view` pass contiguous data without copying or caring who owns it, but they never extend the owner\'s lifetime.',
  ],
  reading: [
    {
      title: 'cppreference — Containers library',
      url: 'https://en.cppreference.com/w/cpp/container',
      source: 'other',
      note: 'The overview page has the full iterator-invalidation table and links to every container\'s complexity guarantees.',
    },
    {
      title: 'Sedgewick & Wayne — Algorithms, 4th ed. (Searching)',
      url: 'https://algs4.cs.princeton.edu/home/',
      source: 'book',
      note: 'Chapter 3 builds the symbol-table implementations behind ordered and hashed maps and compares their costs.',
    },
    {
      title: 'MIT OCW 6.006 — Introduction to Algorithms (Spring 2020)',
      url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
      source: 'other',
      note: 'The early lectures frame data structures as interfaces (sequence and set) with competing implementations, exactly the view of this lesson.',
    },
    {
      title: 'Wikipedia — Associative array',
      url: 'https://en.wikipedia.org/wiki/Associative_array',
      source: 'wikipedia',
      note: 'Maps as an abstract data type, with the tree and hash-table implementations compared.',
    },
  ],
};
