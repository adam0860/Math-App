import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-hashing-applications',
  title: 'Hashing in Practice',
  summary: 'Hash maps as a problem-solving tool (frequency counts, deduplication, two-sum), hashing your own types, hash flooding and seeded hashes, Bloom filters, spatial hashing for collision broad phase, and consistent hashing.',
  minutes: 21,
  objectives: [
    'Recognize the "have I seen this before?" pattern and solve frequency, deduplication and two-sum problems in expected $O(n)$',
    'Write a correct hash for a custom C++ type, consistent with its `operator==`, and spot weak hashes such as $x \\oplus y$',
    'Explain hash flooding and why a randomly seeded (universal) hash defeats it',
    'Derive and apply the Bloom filter false-positive rate $\\left(1 - e^{-kn/m}\\right)^k$ and choose $m$ and $k$',
    'Build a spatial hash for a collision broad phase, and explain why consistent hashing moves only about $1/N$ of the keys',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The hash map as a problem-solving tool',
      blocks: [
        {
          type: 'p',
          text: 'The last lesson built [[dsa-hash-table|hash tables]]. This one uses them. A huge family of problems — in interviews and in engine code — reduces to one question asked over and over: **"have I seen this before, and what did I record about it?"** A nested loop answers it in $\\Theta(n)$ per question; sorting first answers it in $O(\\log n)$; a hash table answers it in expected $O(1)$.',
        },
        {
          type: 'table',
          headers: ['Pattern', 'Hash container', 'Example'],
          rows: [
            ['Frequency counting', '`unordered_map<Key, int>`', 'kills per weapon, word counts, the most common item drop'],
            ['Deduplication / membership', '`unordered_set<Key>`', 'unique player IDs; "did this packet already arrive?"'],
            ['Complement lookup', '`unordered_map<Value, Index>`', 'two-sum: is $\\text{target} - x$ already present?'],
            ['Grouping by a canonical key', '`unordered_map<Key, vector<T>>`', 'anagrams (key: sorted letters), entities by grid cell'],
            ['Memoization', '`unordered_map<State, Result>`', 'caching an expensive pure function'],
          ],
        },
        {
          type: 'code',
          title: 'hash_patterns.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <vector>

// Two-sum: indices of two values that add up to target, in one pass.
std::pair<int, int> twoSum(const std::vector<int>& a, int target) {
    std::unordered_map<int, int> seen;   // value -> index
    for (int i = 0; i < static_cast<int>(a.size()); ++i) {
        if (auto it = seen.find(target - a[i]); it != seen.end())
            return {it->second, i};
        seen[a[i]] = i;
    }
    return {-1, -1};
}

int main() {
    // Frequency counting: how often did each weapon get a kill?
    std::vector<std::string> kills = {"rifle", "shotgun", "rifle", "knife", "rifle", "shotgun"};
    std::unordered_map<std::string, int> freq;
    for (const auto& w : kills) ++freq[w];          // operator[] inserts 0 first
    std::printf("rifle %d, shotgun %d, knife %d\\n", freq["rifle"], freq["shotgun"], freq["knife"]);

    // Deduplication that keeps first-seen order.
    std::vector<int> ids = {42, 7, 42, 13, 7, 99, 13};
    std::unordered_set<int> seen;
    std::vector<int> unique;
    for (int id : ids)
        if (seen.insert(id).second) unique.push_back(id);  // .second: was it new?
    for (std::size_t k = 0; k < unique.size(); ++k)
        std::printf(k + 1 < unique.size() ? "%d, " : "%d\\n", unique[k]);

    auto [i, j] = twoSum({8, 3, 11, 5, 14, 7, 4}, 12);
    std::printf("two-sum: (%d, %d)\\n", i, j);
}`,
          output: `rifle 3, shotgun 2, knife 1
42, 7, 13, 99
two-sum: (3, 5)`,
          annotations: [
            { lines: '9-17', text: 'Two-sum in one pass: before storing $a[i]$, ask whether its complement was stored earlier. The next card animates this.' },
            { lines: 23, text: 'Counting idiom: `operator[]` value-initializes a missing count to $0$, then `++` makes it $1$.' },
            { lines: '30-31', text: '`insert` returns a pair whose `.second` says whether the key was new. One hash lookup does "check and add" together.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Recognizing it in an interview',
          text: 'Phrases like "find a pair / duplicate / first repeated / count of each / group by" with an $O(n^2)$ brute force are the cue. State the trade: expected $O(n)$ time for $O(n)$ extra memory. Then mention the worst case ($\\Theta(n^2)$ if everything collides) and, if memory is tight or the input is sorted, the sorting or two-pointer alternative.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'You receive $n$ match IDs from the network and must report the **first** ID that arrives twice. Which approach has the best expected running time?',
      options: [
        { text: 'For each ID, scan all earlier IDs for a match', why: 'Correct but $\\Theta(n^2)$ in the worst case: the $i$th ID costs up to $i - 1$ comparisons.' },
        { text: 'Sort the IDs, then look for equal neighbours', why: '$O(n \\log n)$, and sorting destroys arrival order, so you can no longer tell which repeat happened **first** without extra bookkeeping.' },
        { text: 'Insert each ID into an `unordered_set`; the first insert that reports "already present" is the answer', correct: true, why: 'One expected-$O(1)$ operation per ID, in arrival order: expected $O(n)$ total, and it stops at the first repeat.' },
        { text: 'Use a `std::map` (balanced tree) instead of a hash set', why: 'Also correct and in arrival order, but each operation is $O(\\log n)$, giving $O(n \\log n)$. Use a tree when you also need sorted order.' },
      ],
      explanation: 'Processing the IDs in arrival order and asking "seen before?" each time finds the first repeat. With a hash set each question is expected $O(1)$, so the whole scan is expected $O(n)$. `seen.insert(id).second == false` is exactly the moment of the first duplicate.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Two-sum: look up the complement',
      blocks: [
        {
          type: 'p',
          text: 'Given an array and a target, find two indices $j < i$ with $a[j] + a[i] = \\text{target}$. Checking every pair costs $\\binom{n}{2}$ tests. The hash version turns "is there a partner?" into a single lookup: when you reach $a[i]$, its partner would have to be $\\text{target} - a[i]$, and it would have to be **behind** you.',
        },
        {
          type: 'algo',
          view: 'array',
          code: `std::unordered_map<int, int> seen;
for (int i = 0; i < n; ++i) {
    int need = target - a[i];
    if (seen.contains(need))
        return {seen[need], i};
    seen[a[i]] = i;   // remember a[i]
}`,
          interval: 1200,
          frames: [{"note": "Find two indices whose values sum to $12$. One pass, with a hash map `seen` from value to index.", "array": [8, 3, 11, 5, 14, 7, 4], "vars": [["target", "12"], ["seen", "{ }"]], "lines": []}, {"note": "$a[0] = 8$ needs $4$. Not in `seen` (it is empty), so record $8 \\to 0$ and move on.", "array": [8, 3, 11, 5, 14, 7, 4], "pointers": [{"index": 0, "label": "i"}], "marks": [{"index": 0, "color": "orange"}], "vars": [["need", "4"], ["seen", "{ }"], ["lookups", "1"]], "lines": [4, 6]}, {"note": "$a[1] = 3$ needs $9$. Not in `seen`, so record $3 \\to 1$ and move on.", "array": [8, 3, 11, 5, 14, 7, 4], "pointers": [{"index": 1, "label": "i"}], "marks": [{"index": 1, "color": "orange"}, {"index": 0, "color": "gray"}], "vars": [["need", "9"], ["seen", "{ 8→0 }"], ["lookups", "2"]], "lines": [4, 6]}, {"note": "$a[2] = 11$ needs $1$. Not in `seen`, so record $11 \\to 2$ and move on.", "array": [8, 3, 11, 5, 14, 7, 4], "pointers": [{"index": 2, "label": "i"}], "marks": [{"index": 2, "color": "orange"}, {"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}], "vars": [["need", "1"], ["seen", "{ 8→0, 3→1 }"], ["lookups", "3"]], "lines": [4, 6]}, {"note": "$a[3] = 5$ needs $7$. Not in `seen`, so record $5 \\to 3$ and move on.", "array": [8, 3, 11, 5, 14, 7, 4], "pointers": [{"index": 3, "label": "i"}], "marks": [{"index": 3, "color": "orange"}, {"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}], "vars": [["need", "7"], ["seen", "{ 8→0, 3→1, 11→2 }"], ["lookups", "4"]], "lines": [4, 6]}, {"note": "$a[4] = 14$ needs $-2$. Not in `seen`, so record $14 \\to 4$ and move on.", "array": [8, 3, 11, 5, 14, 7, 4], "pointers": [{"index": 4, "label": "i"}], "marks": [{"index": 4, "color": "orange"}, {"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}], "vars": [["need", "-2"], ["seen", "{ 8→0, 3→1, 11→2, 5→3 }"], ["lookups", "5"]], "lines": [4, 6]}, {"note": "$a[5] = 7$ needs $12 - 7 = 5$, and `seen` has $5$ at index $3$. Found the pair $(3, 5)$.", "array": [8, 3, 11, 5, 14, 7, 4], "pointers": [{"index": 5, "label": "i"}, {"index": 3, "label": "match", "color": "green"}], "marks": [{"index": 5, "color": "green"}, {"index": 3, "color": "green"}, {"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 4, "color": "gray"}], "vars": [["need", "5"], ["seen", "{ 8→0, 3→1, 11→2, 5→3, 14→4 }"], ["lookups", "6"]], "lines": [4, 5]}, {"note": "Done after 6 hash lookups. Checking every pair would have tested up to $\\binom{7}{2} = 21$ pairs.", "array": [8, 3, 11, 5, 14, 7, 4], "marks": [{"index": 5, "color": "green"}, {"index": 3, "color": "green"}], "vars": [["answer", "(3, 5)"]], "lines": [5]}],
          caption: 'Gray cells are already in `seen`. Each element costs one lookup and (if no partner yet) one insert.',
        },
        {
          type: 'derivation',
          title: 'Why one pass is enough',
          steps: [
            { tex: '\\text{before step } i: \\ \\texttt{seen} = \\{a[0], \\dots, a[i-1]\\}', why: 'The invariant. True for $i = 0$ (empty map). Step $i$ adds $a[i]$ at the end, so it stays true. (For duplicate values the map keeps the latest index, which still works.)' },
            { tex: '\\text{Suppose a solution } (j, i) \\text{ exists with } j < i', why: 'Take the solution with the **smallest** $i$.' },
            { tex: 'a[j] = \\text{target} - a[i] \\in \\texttt{seen} \\text{ at step } i', why: 'By the invariant, since $j < i$. So the lookup at step $i$ succeeds.' },
            { tex: '\\text{and no earlier step returned}', why: 'An earlier success would be a solution with a smaller second index, contradicting the choice of $i$.' },
          ],
          result: 'The algorithm returns a solution if one exists, after expected $O(n)$ work. Storing $a[i]$ **after** the lookup also prevents pairing an element with itself.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Variants you will meet',
          text: 'If the array is already **sorted**, [[dsa-two-pointers|two pointers]] from both ends solve it in $O(n)$ with $O(1)$ extra memory. To **count** pairs, store counts instead of indices: `pairs += count[need]; ++count[a[i]];`. "Subarray with sum $k$" is two-sum on [[dsa-prefix-sum|prefix sums]]: look up $P_i - k$ among earlier prefix sums.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Run the one-pass two-sum algorithm (look up $\\text{target} - a[i]$, then store $a[i]$) on $a = [4, 9, 1, 6, 7, 3]$ with target $10$. How many lookups does it perform before it returns?',
      label: 'lookups $=$',
      answer: '3',
      hint: 'Write down `seen` after each step. Which element first finds its complement already stored?',
      explanation: 'Step $0$: $a[0] = 4$ needs $6$; `seen` is empty, store $4$. Step $1$: $9$ needs $1$; not stored, store $9$. Step $2$: $1$ needs $9$, which **is** stored (index $1$), so it returns $(1, 2)$ after $3$ lookups. The pair $4 + 6$ also sums to $10$, but $6$ sits at index $3$ and is never reached: the algorithm returns the solution whose second index is smallest.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Hashing your own types',
      blocks: [
        {
          type: 'p',
          text: 'To put a struct in an unordered container you need two things: **equality** (`operator==`) and a **hash** (a `std::hash` specialization, or a hasher type passed as a template argument). They must agree: if $a = b$ then $h(a) = h(b)$, or the container will file equal keys in different buckets and lose them.',
        },
        {
          type: 'code',
          title: 'cell_hash.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <functional>
#include <unordered_set>

struct Cell {
    int x, y;
    bool operator==(const Cell&) const = default;   // unordered containers need ==
};

// A poor hash: symmetric, and tiny for small coordinates.
struct XorHash {
    std::size_t operator()(const Cell& c) const { return std::size_t(c.x ^ c.y); }
};

// Pack both coordinates into 64 bits, then mix every bit (splitmix64 finalizer).
struct CellHash {
    std::size_t operator()(const Cell& c) const {
        std::uint64_t k = (std::uint64_t(std::uint32_t(c.x)) << 32) | std::uint32_t(c.y);
        k ^= k >> 30; k *= 0xbf58476d1ce4e5b9ull;
        k ^= k >> 27; k *= 0x94d049bb133111ebull;
        k ^= k >> 31;
        return static_cast<std::size_t>(k);
    }
};

template <typename H>
void survey(const char* name) {
    std::unordered_set<std::size_t> values;
    for (int x = 0; x < 64; ++x)
        for (int y = 0; y < 64; ++y) values.insert(H{}(Cell{x, y}));
    std::printf("%-9s %4zu distinct hash values for 4096 cells\\n", name, values.size());
}

int main() {
    survey<XorHash>("x ^ y");
    survey<CellHash>("mixed");
    std::printf("x ^ y: (1,2) -> %zu, (2,1) -> %zu, (5,5) -> %zu\\n",
                XorHash{}({1, 2}), XorHash{}({2, 1}), XorHash{}({5, 5}));

    std::unordered_set<Cell, CellHash> occupied = {{3, 4}, {10, -2}};
    std::printf("(3,4) occupied: %d\\n", int(occupied.contains({3, 4})));
}`,
          output: `x ^ y       64 distinct hash values for 4096 cells
mixed     4096 distinct hash values for 4096 cells
x ^ y: (1,2) -> 3, (2,1) -> 3, (5,5) -> 0
(3,4) occupied: 1`,
          annotations: [
            { lines: 8, text: 'C++20 can generate `operator==` member-by-member. The hash must use the same members.' },
            { lines: 13, text: 'Xor looks like it mixes, but it is **symmetric** ($(1,2)$ and $(2,1)$ collide), sends every diagonal cell $(x, x)$ to $0$, and maps the whole $64 \\times 64$ block onto just $64$ values.' },
            { lines: '19-23', text: 'Pack $x$ and $y$ into one $64$-bit integer (a bijection, so no collisions yet), then run a full-avalanche mixer so the bucket index depends on every bit.' },
            { lines: 41, text: 'The hasher is the second template argument: `unordered_set<Cell, CellHash>`.' },
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Hash combining that loses information',
            tone: 'bad',
            code: `h = hx ^ hy;            // symmetric, x == y -> 0
h = hx + hy;            // symmetric too
h = (x << 16) | y;      // breaks once |y| >= 2^16`,
          },
          right: {
            title: 'Order-sensitive, mixed',
            tone: 'good',
            code: `// boost::hash_combine style
seed ^= h(v) + 0x9e3779b9 + (seed << 6) + (seed >> 2);
// or: pack into 64 bits, then mix
h = mix64(uint64_t(uint32_t(x)) << 32 | uint32_t(y));`,
          },
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Specializing std::hash',
          text: 'Instead of a hasher type you can specialize the standard one, so `unordered_set<Cell>` just works: `template <> struct std::hash<Cell> { std::size_t operator()(const Cell& c) const noexcept { … } };`. Never hash a `float` coordinate directly for a grid: $0.0$ and $-0.0$ compare equal but have different bits. Convert to an integer cell index first.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'This code tracks occupied grid cells in a hash set. It compiles, but sometimes reports a cell as occupied when it is not. Tap the line with the bug.',
      lines: [
        '`struct Cell { int x, y; };`',
        '`bool operator==(const Cell& a, const Cell& b) { return a.x == b.x; }`',
        '`struct CellHash { std::size_t operator()(const Cell& c) const {`',
        '`    return mix64(std::uint64_t(std::uint32_t(c.x)) << 32 | std::uint32_t(c.y)); } };`',
        '`std::unordered_set<Cell, CellHash> occupied;`',
      ],
      errorLines: [2],
      explanation: 'Line 2 compares only `x`, so $(3, 4)$ and $(3, 9)$ count as "equal". When two such cells land in the same bucket, a lookup for $(3, 9)$ finds $(3, 4)$ and answers "occupied". Because the hash (line 4) uses both coordinates, this only happens on bucket collisions — an intermittent bug, the worst kind. Fix: `return a.x == b.x && a.y == b.y;` (or `= default`). Equality and hash must be defined on the same fields.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Hash flooding and seeded hashes',
      blocks: [
        {
          type: 'p',
          text: 'Expected $O(1)$ assumes the keys do not conspire against the hash. If an attacker knows your hash function, they can send keys that all land in **one** bucket. Each insert then scans the whole chain, and $n$ inserts cost $\\Theta(n^2)$. This is [[dsa-hash-flooding|hash flooding]]. In 2011, researchers showed that a single HTTP request full of colliding form-field names could keep the servers of many popular web platforms busy for minutes, because their hash functions were fixed and public.',
        },
        {
          type: 'derivation',
          title: 'Cost of $n$ inserts that all collide (chaining, duplicate check)',
          steps: [
            { tex: '\\text{insert } i: \\ i - 1 \\text{ comparisons}', why: 'Every key lands in the same bucket, and an insert must rule out a duplicate first.' },
            { tex: '\\sum_{i=1}^{n} (i - 1) = \\frac{n(n-1)}{2}', why: 'Gauss\'s sum of $0 + 1 + \\cdots + (n - 1)$.' },
            { tex: 'n = 5000 \\implies 12\\,497\\,500 \\text{ comparisons}', why: 'Versus about $n^2/(2m) \\approx 12\\,000$ for well-spread keys in $m = 1024$ buckets: a factor of $1000$.' },
          ],
          result: 'The attacker turns a linear-time service into a quadratic one with a few kilobytes of input.',
        },
        {
          type: 'code',
          title: 'hash_flooding.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <random>
#include <vector>

// A chained hash set with a fixed number of buckets and a pluggable hash.
struct ChainedSet {
    std::vector<std::vector<std::uint64_t>> buckets;
    long long comparisons = 0;
    std::uint64_t (*hash)(std::uint64_t, std::uint64_t);
    std::uint64_t seed;

    bool insert(std::uint64_t k) {
        auto& chain = buckets[hash(k, seed) % buckets.size()];
        for (std::uint64_t x : chain) {          // scan the chain for a duplicate
            ++comparisons;
            if (x == k) return false;
        }
        chain.push_back(k);
        return true;
    }
};

// Unseeded: the bucket is just k mod 1024 (what an identity std::hash gives you).
std::uint64_t plain(std::uint64_t k, std::uint64_t) { return k; }

// Seeded multiply-shift: a random odd multiplier, keep the top 10 bits (1024 buckets).
std::uint64_t seeded(std::uint64_t k, std::uint64_t a) { return (a * k) >> 54; }

int main() {
    std::mt19937_64 rng(7);                  // real code: seed from std::random_device
    std::uint64_t secret = rng() | 1;

    for (auto [name, h] : {std::pair{"plain k", &plain}, std::pair{"seeded", &seeded}}) {
        ChainedSet s{std::vector<std::vector<std::uint64_t>>(1024), 0, h, secret};
        for (std::uint64_t i = 1; i <= 5000; ++i) s.insert(i * 1024);   // attacker's keys
        std::size_t longest = 0;
        for (const auto& c : s.buckets) longest = c.size() > longest ? c.size() : longest;
        std::printf("%-8s comparisons %9lld, longest chain %4zu\\n", name, s.comparisons, longest);
    }
}`,
          output: `plain k  comparisons  12497500, longest chain 5000
seeded   comparisons     10073, longest chain    6`,
          annotations: [
            { lines: 25, text: 'An unseeded hash: the attacker knows the bucket is $k \\bmod 1024$, so multiples of $1024$ all collide.' },
            { lines: 28, text: 'Multiply-shift with a secret odd multiplier $a$: the bucket is the top $10$ bits of $a\\,k \\bmod 2^{64}$. Without knowing $a$, the attacker cannot aim.' },
            { lines: 36, text: 'The same hostile keys go into both tables.' },
          ],
        },
        {
          type: 'definition',
          term: 'Universal hashing',
          text: 'Pick the hash function **at random** (the seed) from a family where any two distinct keys collide with probability at most $1/m$ (or $c/m$). Then the expected-cost analysis holds for **every** input — the randomness is in the algorithm, not in the keys. See [[dsa-universal-hashing]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a random seed works when a clever fixed hash does not',
          text: 'Any fixed hash maps $U$ possible keys into $m$ buckets, so by pigeonhole some bucket receives at least $|U|/m$ keys — and an attacker who knows the function can find them offline. Randomizing the function **after** the attacker commits to the keys breaks that: for a universal family, the expected chain length is at most $1 + \\alpha$ for any fixed set of keys. Python and Rust seed their hash functions (SipHash variants) with random keys for this reason, and Perl randomizes its hash seed too; `std::hash` is not seeded, so a server that hashes untrusted keys should supply its own seeded hasher.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Competitive programming',
          text: 'Contest problems sometimes include "anti-hash" tests built against the known prime bucket counts of `std::unordered_map`. The standard fix is a custom hasher that adds a random seed (often taken from the clock at startup) before a splitmix64-style mixer.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'A server hashes untrusted keys with a universal hash family whose **seed is chosen randomly at startup and kept secret**. An attacker who knows the family (but not the seed) can still reliably choose keys that all land in one bucket.',
      answer: false,
      explanation: 'False. Universality is a promise about the random choice of the function: for **any** two distinct keys the attacker picks, the probability (over the secret seed) that they collide is at most about $1/m$. So for any key set chosen in advance, the expected chain lengths are short. The attack only works if the seed leaks (for example through timing side channels or by printing bucket iteration order), which is why the seed must stay secret and should not be a fixed constant.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Bloom filters: a set that can be wrong (one way)',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes you do not need the keys, only a fast, tiny answer to "could this key be in the set?" — before paying for an expensive lookup (a disk read, a network request, a database query). A [[dsa-bloom-filter|Bloom filter]] is an array of $m$ bits and $k$ hash functions. Insert sets $k$ bits. A query checks the same $k$ bits: any $0$ means **definitely not**; all $1$ means **probably**.',
        },
        {
          type: 'algo',
          view: 'array',
          interval: 1300,
          frames: [{"note": "A Bloom filter: $m = 16$ bits, all $0$, and $k = 3$ hash functions. No keys are stored — only bits.", "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "vars": [["bits set", "0"]]}, {"note": "Insert \"orc\": its hashes are $5, 2, 15$, so set those bits.", "array": [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], "marks": [{"index": 5, "color": "orange"}, {"index": 2, "color": "orange"}, {"index": 15, "color": "orange"}], "vars": [["bits set", "3"]]}, {"note": "Insert \"elf\": its hashes are $6, 15, 8$, so set those bits (bit $15$ already set).", "array": [0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1], "marks": [{"index": 6, "color": "orange"}, {"index": 15, "color": "orange"}, {"index": 8, "color": "orange"}], "vars": [["bits set", "5"]]}, {"note": "Insert \"troll\": its hashes are $12, 7, 2$, so set those bits (bit $2$ already set).", "array": [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1], "marks": [{"index": 12, "color": "orange"}, {"index": 7, "color": "orange"}, {"index": 2, "color": "orange"}], "vars": [["bits set", "7"]]}, {"note": "Insert \"goblin\": its hashes are $14, 15, 0$, so set those bits (bit $15$ already set).", "array": [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1], "marks": [{"index": 14, "color": "orange"}, {"index": 15, "color": "orange"}, {"index": 0, "color": "orange"}], "vars": [["bits set", "9"]]}, {"note": "Query \"dwarf\": bits $11, 10, 9$. Bit $11$ is $0$, so \"dwarf\" was **definitely never inserted**.", "array": [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1], "marks": [{"index": 11, "color": "red"}, {"index": 10, "color": "red"}, {"index": 9, "color": "red"}], "vars": [["bits set", "9"]]}, {"note": "Query \"giant\" (never inserted): bits $14, 5, 12$ are all $1$ — set by other words. The filter says \"probably present\": a **false positive**.", "array": [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1], "marks": [{"index": 14, "color": "purple"}, {"index": 5, "color": "purple"}, {"index": 12, "color": "purple"}], "vars": [["bits set", "9"]]}, {"note": "With $9$ of $16$ bits set, a random absent key passes all 3 checks with probability about $(9/16)^3 \\approx 0.18$. Real filters use far more bits per key.", "array": [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1], "marks": [{"index": 0, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "gray"}, {"index": 7, "color": "gray"}, {"index": 8, "color": "gray"}, {"index": 12, "color": "gray"}, {"index": 14, "color": "gray"}, {"index": 15, "color": "gray"}], "vars": [["bits set", "9"]]}],
          caption: 'Bits can only turn on, so a key that was inserted always passes: **no false negatives**. A key that was never inserted can pass by bad luck: a **false positive**.',
        },
        {
          type: 'derivation',
          title: 'The false-positive rate',
          steps: [
            { tex: 'P(\\text{one hash misses a given bit}) = 1 - \\frac{1}{m}', why: 'Model each hash as a uniformly random bit position.' },
            { tex: 'P(\\text{bit} = 0) = \\left(1 - \\tfrac{1}{m}\\right)^{kn} \\approx e^{-kn/m}', why: 'The probability that a given bit is still $0$ after $n$ inserts. There are $kn$ independent bit-settings in total. Use $(1 - \\frac{1}{m})^{m} \\approx e^{-1}$ for large $m$.' },
            { tex: 'p \\approx \\left(1 - e^{-kn/m}\\right)^{k}', why: 'An absent key is a false positive when all $k$ of its bits are $1$. Treating those $k$ events as independent (accurate for large $m$) multiplies the probabilities.' },
            { tex: 'k^{*} = \\frac{m}{n}\\ln 2 \\implies p = \\left(\\tfrac{1}{2}\\right)^{k^*} \\approx 0.6185^{\\,m/n}', why: 'Minimizing over $k$ (set the derivative of $\\ln p$ to $0$) gives $e^{-kn/m} = \\frac{1}{2}$: at the optimum, exactly half the bits are set.' },
            { tex: '\\frac{m}{n} = \\frac{\\ln(1/p)}{(\\ln 2)^2} \\approx 1.44\\log_2\\frac{1}{p}', why: 'Solve the previous line for $m/n$. For $p = 1\\%$: about $9.6$ bits per key, with $k = 7$ — no matter how big the keys themselves are.' },
          ],
          result: 'Memory depends only on the desired error rate, not on the key size: a 1% filter for a million 64-byte asset paths costs about $1.2$ MB instead of $64$ MB.',
        },
        {
          type: 'graph',
          x: [0, 16],
          y: [0, 0.2],
          xStep: 2,
          yStep: 0.02,
          functions: [{ expr: '(1 - e^(-x/b))^x', label: 'false-positive rate $p(k)$', color: 'blue', domain: [0.5, 16] }],
          vlines: [{ x: 'b*ln(2)', label: 'k* = (m/n) ln 2', color: 'green' }],
          sliders: [{ name: 'b', min: 2, max: 16, step: 1, value: 10, label: 'bits per key $m/n$' }],
          readouts: [
            { label: 'best $k = \\frac{m}{n}\\ln 2 \\approx$', expr: 'b*ln(2)', digits: 2 },
            { label: 'best $p \\approx$', expr: '0.5^(b*ln(2))', digits: 4 },
          ],
          caption: 'Horizontal: number of hash functions $k$. Too few hashes and each query checks too few bits; too many and the filter fills with $1$s. At $10$ bits per key the minimum is near $k = 7$, $p \\approx 0.8\\%$.',
        },
        {
          type: 'code',
          title: 'bloom_filter.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdint>
#include <cstdio>
#include <vector>

std::uint64_t mix(std::uint64_t k) {          // splitmix64 finalizer
    k += 0x9e3779b97f4a7c15ull;
    k ^= k >> 30; k *= 0xbf58476d1ce4e5b9ull;
    k ^= k >> 27; k *= 0x94d049bb133111ebull;
    return k ^ (k >> 31);
}

class BloomFilter {
    std::vector<bool> bits_;
    int k_;
    // k indices from two hashes: g_i = h1 + i*h2 (Kirsch–Mitzenmacher).
    template <typename F> void forEachBit(std::uint64_t key, F f) const {
        std::uint64_t h = mix(key), h1 = h & 0xffffffff, h2 = (h >> 32) | 1;
        for (int i = 0; i < k_; ++i) f((h1 + i * h2) % bits_.size());
    }
public:
    BloomFilter(std::size_t m, int k) : bits_(m), k_(k) {}
    void insert(std::uint64_t key) { forEachBit(key, [&](std::size_t b) { bits_[b] = true; }); }
    bool mightContain(std::uint64_t key) const {
        bool all = true;
        forEachBit(key, [&](std::size_t b) { all = all && bits_[b]; });
        return all;
    }
};

int main() {
    const std::size_t n = 1000, m = 10000;   // 10 bits per key
    std::printf(" k   measured   formula (1 - e^(-kn/m))^k\\n");
    for (int k : {1, 3, 7, 12}) {
        BloomFilter f(m, k);
        for (std::uint64_t key = 0; key < n; ++key) f.insert(key);
        int falsePos = 0;
        const int Q = 100000;
        for (std::uint64_t key = 1000000; key < 1000000 + Q; ++key)  // never inserted
            falsePos += f.mightContain(key);
        double theory = std::pow(1 - std::exp(-double(k) * n / m), k);
        std::printf("%2d   %.4f     %.4f\\n", k, double(falsePos) / Q, theory);
    }
}`,
          output: ` k   measured   formula (1 - e^(-kn/m))^k
 1   0.0960     0.0952
 3   0.0185     0.0174
 7   0.0088     0.0082
12   0.0143     0.0136`,
          annotations: [
            { lines: '17-20', text: 'Kirsch–Mitzenmacher trick: $k$ hashes from two, $g_i = h_1 + i\\,h_2$. Making $h_2$ odd keeps the steps distinct. No measurable loss in accuracy.' },
            { lines: 14, text: '`std::vector<bool>` packs $8$ bits per byte: $10\\,000$ bits is $1250$ bytes for $1000$ keys.' },
            { lines: '39-40', text: 'Query $100\\,000$ keys that were never inserted and count how many slip through.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where Bloom filters show up',
          text: 'Databases such as LevelDB and RocksDB keep a Bloom filter per file to skip disk reads for absent keys. A streaming open-world game can keep one over "which chunks have saved modifications" to avoid touching the save file for untouched chunks. A plain Bloom filter cannot delete (clearing a bit could erase another key\'s evidence); a *counting* Bloom filter stores small counters instead of bits to allow it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A Bloom filter has $m = 8000$ bits and $k = 4$ hash functions, and $n = 1000$ keys have been inserted. Using $p \\approx \\left(1 - e^{-kn/m}\\right)^k$, estimate the false-positive rate. Give a decimal.',
      label: '$p \\approx$',
      answer: '(1 - e^(-0.5))^4',
      tolerance: 0.0005,
      answerTex: '\\left(1 - e^{-0.5}\\right)^4 \\approx 0.0240',
      hint: 'First compute $kn/m$.',
      explanation: '$kn/m = 4 \\cdot 1000 / 8000 = 0.5$, so $e^{-0.5} \\approx 0.6065$ and $1 - 0.6065 = 0.3935$ is the fraction of bits set. Then $p \\approx 0.3935^4 \\approx 0.0240$: about $2.4\\%$ of absent keys pass. With $8$ bits per key the optimal $k$ would be $8 \\ln 2 \\approx 5.5$, giving about $2.1\\%$; $k = 4$ is close to the best.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Spatial hashing for the collision broad phase',
      blocks: [
        {
          type: 'p',
          text: 'A physics step must find all pairs of overlapping objects. Testing every pair is $\\binom{n}{2}$ narrow-phase tests: almost $2$ million for $2000$ objects, every frame. The **broad phase** cheaply discards pairs that cannot touch. A [[dsa-spatial-hash|spatial hash]] is a uniform grid stored in a hash table: cell $(\\lfloor x/s \\rfloor, \\lfloor y/s \\rfloor)$ maps to the list of objects in it. Only occupied cells use memory, so the world can be huge or unbounded.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 464 306\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"94\" y=\"90\" width=\"180\" height=\"180\" fill=\"currentColor\" fill-opacity=\"0.12\" class=\"f-orange\"/>\n<rect x=\"154\" y=\"150\" width=\"60\" height=\"60\" fill=\"currentColor\" fill-opacity=\"0.2\" class=\"f-orange\"/>\n<line x1=\"34\" y1=\"30\" x2=\"34\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"94\" y1=\"30\" x2=\"94\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"154\" y1=\"30\" x2=\"154\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"214\" y1=\"30\" x2=\"214\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"274\" y1=\"30\" x2=\"274\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"334\" y1=\"30\" x2=\"334\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"394\" y1=\"30\" x2=\"394\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"454\" y1=\"30\" x2=\"454\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"34\" y1=\"30\" x2=\"454\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"34\" y1=\"90\" x2=\"454\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"34\" y1=\"150\" x2=\"454\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"34\" y1=\"210\" x2=\"454\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<line x1=\"34\" y1=\"270\" x2=\"454\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\"/>\n<text x=\"64.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">0</text>\n<text x=\"124.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">1</text>\n<text x=\"184.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2</text>\n<text x=\"244.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">3</text>\n<text x=\"304.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">4</text>\n<text x=\"364.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">5</text>\n<text x=\"424.0\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">6</text>\n<text x=\"22\" y=\"64.0\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">0</text>\n<text x=\"22\" y=\"124.0\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">1</text>\n<text x=\"22\" y=\"184.0\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">2</text>\n<text x=\"22\" y=\"244.0\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">3</text>\n<circle cx=\"184\" cy=\"170\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-orange f-orange\"/>\n<circle cx=\"184\" cy=\"170\" r=\"2.5\" fill=\"currentColor\" class=\"f-orange\"/>\n<text x=\"184\" y=\"164\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" class=\"t-orange\">B</text>\n<circle cx=\"149\" cy=\"142\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-blue f-blue\"/>\n<circle cx=\"149\" cy=\"142\" r=\"2.5\" fill=\"currentColor\" class=\"f-blue\"/>\n<text x=\"149\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" class=\"t-blue\">A</text>\n<circle cx=\"199\" cy=\"235\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-blue f-blue\"/>\n<circle cx=\"199\" cy=\"235\" r=\"2.5\" fill=\"currentColor\" class=\"f-blue\"/>\n<text x=\"199\" y=\"229\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" class=\"t-blue\">C</text>\n<circle cx=\"249\" cy=\"115\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-blue f-blue\"/>\n<circle cx=\"249\" cy=\"115\" r=\"2.5\" fill=\"currentColor\" class=\"f-blue\"/>\n<circle cx=\"74\" cy=\"60\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-gray f-gray\"/>\n<circle cx=\"74\" cy=\"60\" r=\"2.5\" fill=\"currentColor\" class=\"f-gray\"/>\n<circle cx=\"344\" cy=\"180\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-gray f-gray\"/>\n<circle cx=\"344\" cy=\"180\" r=\"2.5\" fill=\"currentColor\" class=\"f-gray\"/>\n<circle cx=\"364\" cy=\"70\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-gray f-gray\"/>\n<circle cx=\"364\" cy=\"70\" r=\"2.5\" fill=\"currentColor\" class=\"f-gray\"/>\n<circle cx=\"429\" cy=\"230\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-gray f-gray\"/>\n<circle cx=\"429\" cy=\"230\" r=\"2.5\" fill=\"currentColor\" class=\"f-gray\"/>\n<circle cx=\"294\" cy=\"245\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-gray f-gray\"/>\n<circle cx=\"294\" cy=\"245\" r=\"2.5\" fill=\"currentColor\" class=\"f-gray\"/>\n<circle cx=\"129\" cy=\"240\" r=\"24\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.8\" class=\"s-blue f-blue\"/>\n<circle cx=\"129\" cy=\"240\" r=\"2.5\" fill=\"currentColor\" class=\"f-blue\"/>\n<text x=\"34\" y=\"296\" font-size=\"13\">Each ball is filed under the cell holding its centre (dot).</text>\n</svg>",
          alt: 'A 7 by 4 grid of square cells with ten circles. Ball B is orange in cell (2, 2); the 3 by 3 block of cells around it is shaded. Four blue balls, including A and C, lie in that block; the other balls are gray and outside it.',
          caption: 'Ball $B$ lives in cell $(2, 2)$. Only the blue balls, filed in the shaded $3 \\times 3$ block, need a real overlap test; $A$ overlaps $B$, $C$ does not. The gray balls are never examined.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Why the $3 \\times 3$ block is enough',
          steps: [
            { tex: '\\text{radii} \\le r, \\quad \\text{cell size } s \\ge 2r', why: 'Choose the cell at least as large as the biggest object\'s diameter.' },
            { tex: '\\text{overlap} \\implies |x_1 - x_2| < 2r \\le s', why: 'Two discs overlap only if their centres are closer than the sum of the radii, and each coordinate difference is at most the distance.' },
            { tex: '|x_1 - x_2| < s \\implies \\left|\\left\\lfloor \\tfrac{x_1}{s} \\right\\rfloor - \\left\\lfloor \\tfrac{x_2}{s} \\right\\rfloor\\right| \\le 1', why: 'Two numbers less than one cell apart fall in the same cell or in adjacent cells.' },
            { tex: '\\text{same for } y \\implies 3 \\times 3 \\text{ block}', why: 'So no overlapping pair is ever missed by checking the own cell plus its $8$ neighbours.' },
            { tex: 'E[\\text{tests}] \\approx \\binom{n}{2}\\cdot\\frac{9s^2}{A}', why: 'For objects spread uniformly over area $A$, a given pair lands in neighbouring cells with probability about $9s^2/A$. With $n = 2000$, $s = 10$, $A = 1000^2$: about $1800$ tests.' },
          ],
          result: 'Correct (no missed pairs) by the geometry, fast (near-linear) when objects are spread out and similar in size.',
        },
        {
          type: 'code',
          title: 'spatial_hash.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdint>
#include <cstdio>
#include <random>
#include <unordered_map>
#include <vector>

struct Ball { float x, y; };
constexpr float R = 5.0f;          // every ball has radius 5
constexpr float CELL = 2 * R;      // cell size = largest diameter

std::int64_t cellKey(int cx, int cy) {             // pack two 32-bit ints
    return (std::int64_t(cx) << 32) ^ std::uint32_t(cy);
}

bool overlap(const Ball& a, const Ball& b) {
    float dx = a.x - b.x, dy = a.y - b.y;
    return dx * dx + dy * dy < (2 * R) * (2 * R);
}

int main() {
    std::mt19937 rng(42);
    std::vector<Ball> balls(2000);
    for (auto& b : balls) b = {float(rng() % 100000) / 100, float(rng() % 100000) / 100};  // 1000 x 1000

    // Broad phase, version 1: test every pair.
    long long tests = 0, hits = 0;
    for (std::size_t i = 0; i < balls.size(); ++i)
        for (std::size_t j = i + 1; j < balls.size(); ++j) { ++tests; hits += overlap(balls[i], balls[j]); }
    std::printf("all pairs:    %8lld tests, %lld overlaps\\n", tests, hits);

    // Version 2: spatial hash. Each ball goes in the cell holding its centre.
    std::unordered_map<std::int64_t, std::vector<int>> grid;
    auto cellOf = [](float v) { return int(std::floor(v / CELL)); };
    for (int i = 0; i < int(balls.size()); ++i)
        grid[cellKey(cellOf(balls[i].x), cellOf(balls[i].y))].push_back(i);

    tests = hits = 0;
    for (int i = 0; i < int(balls.size()); ++i) {
        int cx = cellOf(balls[i].x), cy = cellOf(balls[i].y);
        for (int dx = -1; dx <= 1; ++dx)            // own cell + 8 neighbours
            for (int dy = -1; dy <= 1; ++dy) {
                auto it = grid.find(cellKey(cx + dx, cy + dy));
                if (it == grid.end()) continue;
                for (int j : it->second)
                    if (j > i) { ++tests; hits += overlap(balls[i], balls[j]); }  // each pair once
            }
    }
    std::printf("spatial hash: %8lld tests, %lld overlaps\\n", tests, hits);
}`,
          output: `all pairs:     1999000 tests, 590 overlaps
spatial hash:     1732 tests, 590 overlaps`,
          annotations: [
            { lines: '12-14', text: 'The hash key: both cell coordinates packed into one $64$-bit integer. The cast through `uint32_t` keeps a negative `cy` from smearing its sign bits over `cx`.' },
            { lines: 34, text: '`floor`, not a plain cast: `int(-0.5)` is $0$, but the cell of $x = -0.5$ is $-1$.' },
            { lines: '41-46', text: 'Look up the $3 \\times 3$ block. Testing only `j > i` reports each pair once.' },
            { lines: [30, 49], text: 'Same $590$ overlaps, found with about $1/1000$ of the tests.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'When the grid struggles',
          text: 'One cell size cannot fit everything: a few huge objects force big cells, and then crowds of small objects share each cell. Everything piling into one spot (a pile-up, a crowd at a door) degrades toward $\\Theta(n^2)$ too. Quadtrees, BVHs and sweep-and-prune handle those cases — they come in the spatial data structures lesson. In practice engines rebuild the hash every frame (clear and re-insert is $O(n)$) rather than moving objects between cells.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'In a 3D spatial hash whose cell size is at least the largest object diameter, how many cells must be looked up to find every possible collision partner of one object (its own cell included)?',
      label: 'cells $=$',
      answer: '27',
      hint: 'In 2D it is the $3 \\times 3$ block. Each coordinate can differ by $-1$, $0$ or $+1$.',
      explanation: 'The argument from the 2D derivation works coordinate by coordinate: partners can only be in cells whose $x$, $y$ and $z$ indices each differ by at most $1$. That is $3 \\cdot 3 \\cdot 3 = 27$ cells. (A common optimization checks only half of the neighbours — $13$ plus the own cell — and relies on symmetry, since the pair will be found from the other side.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Consistent hashing (briefly)',
      blocks: [
        {
          type: 'p',
          text: 'Online games shard players, lobbies or chat channels across $N$ servers. The obvious rule $\\text{server} = h(k) \\bmod N$ breaks badly when $N$ changes: almost every key moves, and every moved key means migrated state or a cold cache.',
        },
        {
          type: 'derivation',
          title: 'How many keys stay put when $N$ becomes $N + 1$?',
          steps: [
            { tex: 'h \\bmod N = h \\bmod (N + 1) = r', why: 'A key keeps its server exactly when both remainders agree. Since $N$ and $N + 1$ are coprime, the pair of remainders repeats with period $N(N+1)$.' },
            { tex: 'h = q(N + 1) + r, \\quad 0 \\le r < N', why: 'Write $h$ in one period with remainder $r$ mod $N + 1$; the remainder mod $N$ must also be $r$, so $r < N$.' },
            { tex: 'h \\bmod N = (q + r) \\bmod N = r \\iff q \\equiv 0 \\pmod N', why: '$q(N + 1) = qN + q \\equiv q$. Within one period $q$ ranges over $0, \\dots, N - 1$, so only $q = 0$ works.' },
            { tex: '\\frac{N \\text{ good values}}{N(N+1) \\text{ in a period}} = \\frac{1}{N+1}', why: 'For well-spread hashes, the fraction that stays is $\\frac{1}{N+1}$; a fraction $\\frac{N}{N+1}$ moves. Going from $4$ to $5$ servers moves $80\\%$ of all keys.' },
          ],
          result: 'Modular sharding moves nearly everything. The ideal is to move only the $\\frac{1}{N+1}$ share that the new server should own.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 440 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"210\" cy=\"160\" r=\"110\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"s-gray\"/>\n<path d=\"M247.6,56.6 A110,110 0 0 1 318.3,140.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"6\" stroke-opacity=\"0.45\" class=\"s-orange\"/>\n<path d=\"M198.5,291.5 A132,132 0 0 1 164.9,284.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-gray\"/>\n<path d=\"M158.3,281.6 L168.4,280.0 L165.0,289.4 Z\" fill=\"currentColor\" class=\"f-gray\"/>\n<text x=\"178.4\" y=\"308.7\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">clockwise</text>\n<circle cx=\"294.3\" cy=\"89.3\" r=\"5\" fill=\"currentColor\" class=\"f-orange\"/>\n<text x=\"278.9\" y=\"106.1\" text-anchor=\"middle\" font-size=\"11\" class=\"t-orange\">k1</text>\n<circle cx=\"313.4\" cy=\"122.4\" r=\"5\" fill=\"currentColor\" class=\"f-orange\"/>\n<text x=\"294.6\" y=\"133.2\" text-anchor=\"middle\" font-size=\"11\" class=\"t-orange\">k2</text>\n<circle cx=\"313.4\" cy=\"197.6\" r=\"5\" fill=\"currentColor\" class=\"f-gray\"/>\n<text x=\"294.6\" y=\"194.8\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">k3</text>\n<circle cx=\"210.0\" cy=\"270.0\" r=\"5\" fill=\"currentColor\" class=\"f-gray\"/>\n<text x=\"210.0\" y=\"254.0\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">k4</text>\n<circle cx=\"139.3\" cy=\"244.3\" r=\"5\" fill=\"currentColor\" class=\"f-gray\"/>\n<text x=\"152.1\" y=\"232.9\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">k5</text>\n<circle cx=\"114.7\" cy=\"105.0\" r=\"5\" fill=\"currentColor\" class=\"f-gray\"/>\n<text x=\"132.1\" y=\"119.0\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">k6</text>\n<circle cx=\"172.4\" cy=\"56.6\" r=\"5\" fill=\"currentColor\" class=\"f-gray\"/>\n<text x=\"179.2\" y=\"79.4\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">k7</text>\n<line x1=\"245.2\" y1=\"63.2\" x2=\"251.7\" y2=\"45.4\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-blue\"/>\n<rect x=\"241.5\" y=\"21.2\" width=\"30\" height=\"22\" rx=\"5\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"2\" class=\"s-blue f-blue\"/>\n<text x=\"256.5\" y=\"36.7\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" class=\"t-blue\">S1</text>\n<line x1=\"276.2\" y1=\"238.9\" x2=\"288.4\" y2=\"253.5\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-purple\"/>\n<rect x=\"282.4\" y=\"253.2\" width=\"30\" height=\"22\" rx=\"5\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"2\" class=\"s-purple f-purple\"/>\n<text x=\"297.4\" y=\"268.7\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" class=\"t-purple\">S2</text>\n<line x1=\"113.2\" y1=\"195.2\" x2=\"95.4\" y2=\"201.7\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-teal\"/>\n<rect x=\"67.2\" y=\"195.5\" width=\"30\" height=\"22\" rx=\"5\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"2\" class=\"s-teal f-teal\"/>\n<text x=\"82.2\" y=\"211.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" class=\"t-teal\">S3</text>\n<line x1=\"311.4\" y1=\"142.1\" x2=\"330.1\" y2=\"138.8\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-orange\"/>\n<rect x=\"328.9\" y=\"125.4\" width=\"30\" height=\"22\" rx=\"5\" fill=\"currentColor\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\" class=\"s-orange f-orange\"/>\n<text x=\"343.9\" y=\"140.9\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" class=\"t-orange\">S4</text>\n<text x=\"210\" y=\"156\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">hash ring</text>\n<text x=\"210\" y=\"172\" text-anchor=\"middle\" font-size=\"12\" class=\"t-gray\">0 … 2³² − 1</text>\n</svg>",
          alt: 'A circle labelled hash ring with servers S1, S2, S3 at three points and a new dashed server S4. Seven keys k1 to k7 sit on the ring; k1 and k2, between S1 and S4, are highlighted in orange.',
          caption: 'Each key belongs to the first server clockwise. Adding $S4$ moves only the keys on the highlighted arc ($k_1, k_2$, previously $S2$\'s); every other key keeps its server.',
          maxWidth: 420,
        },
        {
          type: 'p',
          text: '[[dsa-consistent-hashing|Consistent hashing]] hashes servers **and** keys onto the same ring of values $0 \\dots 2^{32} - 1$ and assigns each key to the next server clockwise. Adding or removing a server only affects the arc next to it: about $1/N$ of the keys. With only a few points per server the arcs are uneven, so each server is placed at many **virtual nodes** (say $100$–$200$ points), which evens out the load. A sorted array of ring points plus a binary search finds a key\'s server in $O(\\log(\\text{points}))$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Players are sharded with $\\text{server} = h(\\text{id}) \\bmod N$, and the hash values are well spread. The cluster grows from $N = 9$ to $N = 10$ servers. What fraction of players must move to a different server? Give a decimal.',
      label: 'fraction moved $=$',
      answer: '9/10',
      answerTex: '\\frac{9}{10} = 0.9',
      hint: 'A fraction $\\frac{1}{N+1}$ of keys keeps its server.',
      explanation: 'A key stays only if $h \\bmod 9 = h \\bmod 10$, which happens for a fraction $\\frac{1}{10}$ of hash values (one value of $q$ out of $9$ per period of $90$). So $\\frac{9}{10} = 0.9$ of all players move — $90\\%$ of the state migrates to add $10\\%$ more capacity. With consistent hashing only about $\\frac{1}{10}$ would move: the share the new server takes over.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps of one frame of a spatial-hash collision broad phase in order (each object is filed under the cell of its centre, and cells are at least as large as the largest object).',
      lines: [
        'Clear the hash map of cells from the previous frame',
        'Insert every object\'s index into the cell containing its centre',
        'For each object, look up its own cell and the $8$ neighbouring cells, collecting partners with a larger index',
        'Run the exact narrow-phase overlap test on each candidate pair',
      ],
      explanation: 'Objects moved since the last frame, so the old cells are stale: clear first. All objects must be inserted **before** any queries — otherwise a pair whose second object has not been filed yet would be missed. Querying the $3 \\times 3$ block (with the "larger index" rule so each pair is reported once) produces candidates, and only then does the expensive exact test run on that short list.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the Bloom filter facts.',
      template: 'A query that finds a $0$ bit means the key is ___ . With $m$ bits and $n$ keys, the false-positive rate is minimized by $k =$ ___ hash functions, and at that point about ___ of the bits are set.',
      blanks: [{ answers: ['definitely absent'] }, { answers: ['$\\frac{m}{n}\\ln 2$'] }, { answers: ['half'] }],
      wordBank: ['definitely absent', 'probably absent', 'probably present', '$\\frac{m}{n}\\ln 2$', '$\\frac{n}{m}\\ln 2$', '$\\log_2 m$', 'half', 'all', 'a quarter'],
      explanation: 'Every inserted key sets all of its bits and bits never clear, so a $0$ among a key\'s bits proves it was never inserted: no false negatives. Minimizing $\\left(1 - e^{-kn/m}\\right)^k$ gives $k = \\frac{m}{n}\\ln 2$, where $e^{-kn/m} = \\frac{1}{2}$ — exactly half the bits are $1$, so each bit carries the most information.',
    },
  ],
  takeaways: [
    '"Have I seen this before?" is a hash lookup: frequency counts, deduplication, grouping and complement lookups (two-sum) drop from $\\Theta(n^2)$ to expected $O(n)$, at the cost of $O(n)$ memory.',
    'A custom key needs `operator==` and a hash defined on the same fields. Pack and mix the fields; avoid symmetric combinations like $x \\oplus y$.',
    'A fixed, known hash can be flooded with colliding keys ($\\Theta(n^2)$ total work). A randomly seeded universal hash makes the expected bounds hold for every input.',
    'A Bloom filter answers "definitely not" or "probably" using $m$ bits and $k$ hashes: false-positive rate $\\approx \\left(1 - e^{-kn/m}\\right)^k$, best $k = \\frac{m}{n}\\ln 2$, about $9.6$ bits per key for $1\\%$.',
    'A spatial hash maps integer cell coordinates to object lists; with cell size $\\ge$ the largest diameter, checking the $3 \\times 3$ (or $3 \\times 3 \\times 3$) block finds every overlapping pair.',
    'Sharding by $h \\bmod N$ moves a fraction $\\frac{N}{N+1}$ of keys when a server is added; consistent hashing moves only about $\\frac{1}{N+1}$.',
  ],
  reading: [
    {
      title: 'Robert Nystrom — Game Programming Patterns: Spatial Partition',
      url: 'https://gameprogrammingpatterns.com/spatial-partition.html',
      source: 'book',
      note: 'A friendly walk through grid-based broad phases for games, including the edge cases of objects near cell boundaries.',
    },
    {
      title: 'Wikipedia — Bloom filter',
      url: 'https://en.wikipedia.org/wiki/Bloom_filter',
      source: 'wikipedia',
      note: 'The false-positive derivation, the optimal number of hash functions, and variants such as counting Bloom filters.',
    },
    {
      title: 'Wikipedia — Consistent hashing',
      url: 'https://en.wikipedia.org/wiki/Consistent_hashing',
      source: 'wikipedia',
      note: 'The ring construction, virtual nodes, and its use in distributed caches and databases.',
    },
    {
      title: 'Wikipedia — Universal hashing',
      url: 'https://en.wikipedia.org/wiki/Universal_hashing',
      source: 'wikipedia',
      note: 'Universal families such as multiply-shift, with the proofs behind "expected $O(1)$ for every input".',
    },
  ],
};
