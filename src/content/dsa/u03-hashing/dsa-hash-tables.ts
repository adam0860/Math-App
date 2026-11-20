import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-hash-tables',
  title: 'Hash Tables',
  summary: 'How a hash table turns a key into an array index: hash functions, separate chaining, linear probing and double hashing, load factor and expected probes, tombstones, rehashing — and what that means for std::unordered_map.',
  minutes: 22,
  objectives: [
    'Explain what makes a hash function good for a table, and why a power-of-two modulus with a weak hash fails on patterned keys',
    'Trace insertions with separate chaining, linear probing and double hashing, and recognize primary clustering',
    'State and use the expected-probe formulas as functions of the load factor $\\alpha$',
    'Delete from an open-addressing table with tombstones and grow it by rehashing, with amortized $O(1)$ cost',
    'Implement a small open-addressing hash set in C++ and predict how std::unordered_map behaves (buckets, rehashing, iterator and reference invalidation)',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From key to slot: the hash function',
      blocks: [
        {
          type: 'p',
          text: 'An array finds element $i$ in one step because $i$ *is* the address. A [[dsa-hash-table|hash table]] gets the same trick for keys that are not small integers — names, entity IDs, grid coordinates — by computing an index from the key: slot $h(k) \\bmod m$ in an array of $m$ slots. Discrete Math introduced the [[dm-hash-function|hash function]] and showed that collisions are unavoidable (the [[dm-birthday-problem|birthday problem]]). This lesson is about what a table does with them, and what that costs.',
        },
        {
          type: 'p',
          text: 'A good table hash spreads the keys you **actually** have evenly over the $m$ slots. The analysis below uses the *uniform hashing* assumption: every key is equally likely to land in any slot, independently of the others. Real keys are rarely random — IDs are consecutive, pointers are multiples of $8$ or $16$, coordinates are small — so the hash must destroy those patterns.',
        },
        {
          type: 'derivation',
          title: 'Why $k \\bmod 64$ fails on keys that are multiples of $8$',
          steps: [
            { tex: 'k = 8j \\quad (j = 0, 1, 2, \\dots)', why: 'Aligned pointers, IDs handed out in steps, positions on an 8-unit grid: patterned keys are the normal case.' },
            { tex: '8j \\bmod 64 = 8\\,(j \\bmod 8)', why: 'Since $64 = 8 \\cdot 8$, the remainder of $8j$ on division by $64$ is $8$ times the remainder of $j$ on division by $8$.' },
            { tex: '\\in \\{0, 8, 16, \\dots, 56\\}', why: 'Only $8$ of the $64$ slots can ever be hit. Taking $k \\bmod 2^p$ keeps just the low $p$ bits of the key, and here the low $3$ bits are always $0$.' },
            { tex: '\\gcd(8, 61) = 1 \\implies \\text{all } 61 \\text{ slots hit}', why: 'With a prime modulus, multiplying by $8$ is a bijection on the residues mod $61$, so the pattern no longer lines up with the table size.' },
          ],
          result: 'Either use a prime table size, or mix every bit of the key before taking the low bits.',
        },
        {
          type: 'code',
          title: 'bucket_spread.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <vector>

// Count how many keys land in each bucket and report the worst bucket.
template <typename Hash>
void report(const char* name, std::size_t m, Hash h) {
    std::vector<int> count(m, 0);
    for (std::uint32_t k = 0; k < 1024; k += 8)   // 128 keys: 0, 8, 16, ...
        ++count[h(k)];
    int used = 0, worst = 0;
    for (int c : count) {
        if (c > 0) ++used;
        if (c > worst) worst = c;
    }
    std::printf("%-22s buckets used %3d of %zu, longest chain %3d\\n", name, used, m, worst);
}

int main() {
    // Keys that are all multiples of 8: think aligned pointers or grid IDs.
    report("k % 64", 64, [](std::uint32_t k) { return k % 64; });
    report("k % 61 (prime)", 61, [](std::uint32_t k) { return k % 61; });
    // Mix all the bits first (MurmurHash3's finalizer), then keep the low 6 bits.
    report("mix(k) % 64", 64, [](std::uint32_t k) {
        k ^= k >> 16; k *= 0x85ebca6bu;
        k ^= k >> 13; k *= 0xc2b2ae35u;
        k ^= k >> 16;
        return k % 64;
    });
}`,
          output: `k % 64                 buckets used   8 of 64, longest chain  16
k % 61 (prime)         buckets used  61 of 61, longest chain   3
mix(k) % 64            buckets used  55 of 64, longest chain   5`,
          annotations: [
            { lines: '9-10', text: '$128$ patterned keys, each dropped into the bucket the hash picks.' },
            { lines: 21, text: 'Power-of-two modulus on a weak hash: only the low $6$ bits matter, and $3$ of them are always $0$. Sixteen keys per used bucket.' },
            { lines: 22, text: 'A prime modulus breaks the pattern. (This arithmetic progression happens to spread *perfectly*; random keys would not.)' },
            { lines: '25-28', text: 'A *mixer*: xor-shifts and multiplications by odd constants make every output bit depend on every input bit. $55$ of $64$ buckets used is what truly random placement gives on average: $64(1 - e^{-2}) \\approx 55.3$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'std::hash<int> is often the identity',
          text: 'In libstdc++ (GCC) and libc++ (Clang), `std::hash<int>{}(k) == k`. They get away with it because their `std::unordered_map` uses a **prime** bucket count. A home-made table with power-of-two capacity (fast: `h & (m - 1)` instead of `%`) must mix the bits itself, or patterned keys will pile into a few buckets.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'The $16$ keys $0, 8, 16, \\dots, 120$ are inserted into a table with $m = 16$ slots using $h(k) = k \\bmod 16$. How many **different** slots receive at least one key?',
      label: 'slots used $=$',
      answer: '2',
      hint: 'Write $k = 8j$ and compute $8j \\bmod 16$ for even and odd $j$.',
      explanation: 'With $k = 8j$, we get $8j \\bmod 16 = 8\\,(j \\bmod 2)$, which is $0$ for even $j$ and $8$ for odd $j$. So all $16$ keys land in slots $0$ and $8$ — eight keys each — while the other $14$ slots stay empty. With $m = 13$ (prime) the same keys would use $13$ different slots, because $\\gcd(8, 13) = 1$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Separate chaining',
      blocks: [
        {
          type: 'p',
          text: 'The simplest collision policy: every slot (a **bucket**) holds a linked list of all keys that hash there. Insert pushes onto the front of the list; search walks it. This is [[dsa-separate-chaining|separate chaining]].',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 470 292\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"92.0\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">buckets</text>\n<text x=\"154\" y=\"16\" font-size=\"13\" class=\"t-gray\">chains (newest first)</text>\n<text x=\"58\" y=\"53.0\" text-anchor=\"end\" font-size=\"14\" class=\"t-gray\">0</text>\n<rect x=\"70\" y=\"34\" width=\"44\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<circle cx=\"92.0\" cy=\"48.0\" r=\"3.5\" fill=\"currentColor\"/>\n<line x1=\"96.0\" y1=\"48.0\" x2=\"141\" y2=\"48.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M148,48.0 L140,43.5 L140,52.5 Z\" fill=\"currentColor\" class=\"f-blue\"/>\n<rect x=\"148\" y=\"34\" width=\"70\" height=\"28\" rx=\"4\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-blue\"/>\n<line x1=\"194\" y1=\"34\" x2=\"194\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-blue\"/>\n<text x=\"171.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"14\">700</text>\n<line x1=\"199\" y1=\"57\" x2=\"213\" y2=\"39\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<text x=\"58\" y=\"89.0\" text-anchor=\"end\" font-size=\"14\" class=\"t-gray\">1</text>\n<rect x=\"70\" y=\"70\" width=\"44\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<circle cx=\"92.0\" cy=\"84.0\" r=\"3.5\" fill=\"currentColor\"/>\n<line x1=\"96.0\" y1=\"84.0\" x2=\"141\" y2=\"84.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M148,84.0 L140,79.5 L140,88.5 Z\" fill=\"currentColor\" class=\"f-blue\"/>\n<rect x=\"148\" y=\"70\" width=\"70\" height=\"28\" rx=\"4\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-blue\"/>\n<line x1=\"194\" y1=\"70\" x2=\"194\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-blue\"/>\n<text x=\"171.0\" y=\"89.0\" text-anchor=\"middle\" font-size=\"14\">92</text>\n<circle cx=\"206\" cy=\"84.0\" r=\"3\" fill=\"currentColor\"/>\n<line x1=\"209\" y1=\"84.0\" x2=\"241\" y2=\"84.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M248,84.0 L240,79.5 L240,88.5 Z\" fill=\"currentColor\" class=\"f-blue\"/>\n<rect x=\"248\" y=\"70\" width=\"70\" height=\"28\" rx=\"4\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-blue\"/>\n<line x1=\"294\" y1=\"70\" x2=\"294\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-blue\"/>\n<text x=\"271.0\" y=\"89.0\" text-anchor=\"middle\" font-size=\"14\">85</text>\n<circle cx=\"306\" cy=\"84.0\" r=\"3\" fill=\"currentColor\"/>\n<line x1=\"309\" y1=\"84.0\" x2=\"341\" y2=\"84.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M348,84.0 L340,79.5 L340,88.5 Z\" fill=\"currentColor\" class=\"f-blue\"/>\n<rect x=\"348\" y=\"70\" width=\"70\" height=\"28\" rx=\"4\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-blue\"/>\n<line x1=\"394\" y1=\"70\" x2=\"394\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-blue\"/>\n<text x=\"371.0\" y=\"89.0\" text-anchor=\"middle\" font-size=\"14\">50</text>\n<line x1=\"399\" y1=\"93\" x2=\"413\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<text x=\"58\" y=\"125.0\" text-anchor=\"end\" font-size=\"14\" class=\"t-gray\">2</text>\n<rect x=\"70\" y=\"106\" width=\"44\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<line x1=\"78\" y1=\"128\" x2=\"106\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<text x=\"58\" y=\"161.0\" text-anchor=\"end\" font-size=\"14\" class=\"t-gray\">3</text>\n<rect x=\"70\" y=\"142\" width=\"44\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<circle cx=\"92.0\" cy=\"156.0\" r=\"3.5\" fill=\"currentColor\"/>\n<line x1=\"96.0\" y1=\"156.0\" x2=\"141\" y2=\"156.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M148,156.0 L140,151.5 L140,160.5 Z\" fill=\"currentColor\" class=\"f-blue\"/>\n<rect x=\"148\" y=\"142\" width=\"70\" height=\"28\" rx=\"4\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-blue\"/>\n<line x1=\"194\" y1=\"142\" x2=\"194\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-blue\"/>\n<text x=\"171.0\" y=\"161.0\" text-anchor=\"middle\" font-size=\"14\">101</text>\n<circle cx=\"206\" cy=\"156.0\" r=\"3\" fill=\"currentColor\"/>\n<line x1=\"209\" y1=\"156.0\" x2=\"241\" y2=\"156.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M248,156.0 L240,151.5 L240,160.5 Z\" fill=\"currentColor\" class=\"f-blue\"/>\n<rect x=\"248\" y=\"142\" width=\"70\" height=\"28\" rx=\"4\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-blue\"/>\n<line x1=\"294\" y1=\"142\" x2=\"294\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-blue\"/>\n<text x=\"271.0\" y=\"161.0\" text-anchor=\"middle\" font-size=\"14\">73</text>\n<line x1=\"299\" y1=\"165\" x2=\"313\" y2=\"147\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<text x=\"58\" y=\"197.0\" text-anchor=\"end\" font-size=\"14\" class=\"t-gray\">4</text>\n<rect x=\"70\" y=\"178\" width=\"44\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<line x1=\"78\" y1=\"200\" x2=\"106\" y2=\"184\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<text x=\"58\" y=\"233.0\" text-anchor=\"end\" font-size=\"14\" class=\"t-gray\">5</text>\n<rect x=\"70\" y=\"214\" width=\"44\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<line x1=\"78\" y1=\"236\" x2=\"106\" y2=\"220\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<text x=\"58\" y=\"269.0\" text-anchor=\"end\" font-size=\"14\" class=\"t-gray\">6</text>\n<rect x=\"70\" y=\"250\" width=\"44\" height=\"28\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n<circle cx=\"92.0\" cy=\"264.0\" r=\"3.5\" fill=\"currentColor\"/>\n<line x1=\"96.0\" y1=\"264.0\" x2=\"141\" y2=\"264.0\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-blue\"/><path d=\"M148,264.0 L140,259.5 L140,268.5 Z\" fill=\"currentColor\" class=\"f-blue\"/>\n<rect x=\"148\" y=\"250\" width=\"70\" height=\"28\" rx=\"4\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-blue\"/>\n<line x1=\"194\" y1=\"250\" x2=\"194\" y2=\"278\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-blue\"/>\n<text x=\"171.0\" y=\"269.0\" text-anchor=\"middle\" font-size=\"14\">76</text>\n<line x1=\"199\" y1=\"273\" x2=\"213\" y2=\"255\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n</svg>",
          alt: 'A bucket array of 7 slots. Slot 0 points to a list holding 700; slot 1 to 92, 85, 50; slot 3 to 101, 73; slot 6 to 76; slots 2, 4, 5 are empty.',
          caption: 'Keys $50, 700, 76, 85, 92, 73, 101$ with $h(k) = k \\bmod 7$. New keys go at the head, so bucket $1$ lists $92, 85, 50$. Here $n = m = 7$, so the [[dsa-load-factor|load factor]] is $\\alpha = 1$ — yet three buckets are empty and one holds three keys.',
          maxWidth: 470,
        },
        {
          type: 'definition',
          term: 'Load factor',
          text: '$\\alpha = n / m$: stored keys per slot. With chaining it is the **average chain length** and may exceed $1$; with open addressing (next card) it is the fraction of occupied slots and must stay below $1$.',
        },
        {
          type: 'theorem',
          name: 'Expected cost of chaining (uniform hashing)',
          tex: '\\text{unsuccessful search: } \\alpha \\text{ key comparisons}, \\qquad \\text{successful search: } 1 + \\frac{\\alpha}{2} - \\frac{\\alpha}{2n} \\approx 1 + \\frac{\\alpha}{2}',
          text: 'Add $1$ for computing the hash and reading the bucket. If $m$ grows with $n$ so that $\\alpha$ stays bounded, every operation is expected $O(1)$. The **worst case** is still $\\Theta(n)$: all keys in one chain.',
        },
        {
          type: 'derivation',
          title: 'Where $1 + \\alpha/2$ comes from',
          steps: [
            { tex: '\\text{search for the } i\\text{th inserted key } x_i', why: 'Pick the target uniformly among the $n$ stored keys; $x_i$ was the $i$th key inserted.' },
            { tex: '\\text{cost} = 1 + \\#\\{\\, j > i : h(x_j) = h(x_i) \\,\\}', why: 'New keys go to the front of the list, so the keys ahead of $x_i$ are exactly those inserted **later** into its bucket. Then one comparison for $x_i$ itself.' },
            { tex: 'E = 1 + \\frac{1}{n}\\sum_{i=1}^{n} \\frac{n - i}{m}', why: 'Each later key shares the bucket with probability $1/m$ (uniform hashing), and linearity of expectation adds these up. Average over the $n$ choices of $i$.' },
            { tex: '= 1 + \\frac{1}{nm}\\cdot\\frac{n(n-1)}{2} = 1 + \\frac{n - 1}{2m}', why: '$\\sum_{i=1}^{n}(n - i) = 0 + 1 + \\cdots + (n-1) = \\frac{n(n-1)}{2}$.' },
            { tex: '= 1 + \\frac{\\alpha}{2} - \\frac{\\alpha}{2n}', why: 'Substitute $n/m = \\alpha$.' },
          ],
          result: 'A successful search looks at the target plus, on average, half of the *other* keys in its chain.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why chaining is forgiving — and why it is slow anyway',
          text: 'Chaining never "fills up": at $\\alpha = 2$ a search still costs about $2$ comparisons. But every list node is a separate heap allocation, so walking a chain means following pointers to random addresses — each one a potential [[dsa-cache-miss|cache miss]] costing a hundred-odd cycles. That constant factor, not the asymptotics, is what the next design attacks.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A chained hash table stores $n = 3000$ keys in $m = 1000$ buckets, and the hash behaves uniformly. What is the expected number of key comparisons in an **unsuccessful** search?',
      options: [
        { text: '$3$', correct: true, why: 'An absent key is compared with every key in its bucket, and the expected chain length is $\\alpha = n/m = 3$.' },
        { text: '$2.5$', why: 'That is (approximately) the **successful** search cost $1 + \\alpha/2$: on average a hit stops halfway down its chain.' },
        { text: '$1$', why: '"Hash tables are $O(1)$" means bounded by a constant, not exactly one comparison. The constant depends on $\\alpha$.' },
        { text: '$1500$', why: 'That would be scanning half of all keys, as in an unsorted array. Hashing confines the search to one bucket of expected size $\\alpha$.' },
      ],
      explanation: 'The load factor is $\\alpha = 3000/1000 = 3$. An unsuccessful search must rule out every key in the bucket it hashes to, and under uniform hashing a bucket holds $\\alpha = 3$ keys on average, so about $3$ comparisons (plus the constant work of hashing). A successful search costs about $1 + \\alpha/2 = 2.5$. Doubling $m$ would halve both.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Open addressing and linear probing',
      blocks: [
        {
          type: 'p',
          text: '[[dsa-open-addressing|Open addressing]] stores the keys **in the slot array itself** — no lists, no per-key allocation. On a collision, the key tries a *probe sequence* of other slots until it finds an empty one. A search follows the same sequence and stops at the key, or at an empty slot (the key would have been placed there).',
        },
        {
          type: 'p',
          text: 'The simplest sequence is [[dsa-linear-probing|linear probing]]: try $h(k), h(k) + 1, h(k) + 2, \\dots$ (mod $m$). Neighbouring slots share cache lines, so a probe sequence of length $4$ often costs a single memory access. Step through it:',
        },
        {
          type: 'algo',
          view: 'array',
          code: `std::size_t i = h(key) % m;   probes = 1;
while (slot[i].full) {   // collision
    ++probes;
    i = (i + 1) % m;     // next slot
}
slot[i] = key;`,
          interval: 900,
          frames: [{"note": "An empty table with $m = 11$ slots and $h(k) = k \\bmod 11$. We insert $22, 1, 13, 11, 24, 33, 18, 42, 31$.", "array": ["", "", "", "", "", "", "", "", "", "", ""], "lines": [], "vars": [["n", "0"], ["load factor", "0"]]}, {"note": "Insert $22$: $h(22) = 0$ and slot $0$ is empty, so $22$ goes straight in (1 probe).", "array": [22, "", "", "", "", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "green"}], "pointers": [{"index": 0, "label": "i"}], "lines": [6], "vars": [["key", "22"], ["probes", "1"], ["load factor", "1/11"]]}, {"note": "Insert $1$: $h(1) = 1$ and slot $1$ is empty, so $1$ goes straight in (1 probe).", "array": [22, 1, "", "", "", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "green"}], "pointers": [{"index": 1, "label": "i"}], "lines": [6], "vars": [["key", "1"], ["probes", "1"], ["load factor", "2/11"]]}, {"note": "Insert $13$: $h(13) = 2$ and slot $2$ is empty, so $13$ goes straight in (1 probe).", "array": [22, 1, 13, "", "", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "green"}], "pointers": [{"index": 2, "label": "i"}], "lines": [6], "vars": [["key", "13"], ["probes", "1"], ["load factor", "3/11"]]}, {"note": "Insert $11$: $h(11) = 11 \\bmod 11 = 0$, but slot $0$ already holds $22$. Collision: probe the next slot.", "array": [22, 1, 13, "", "", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "red"}], "pointers": [{"index": 0, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "11"], ["probes", "1"]]}, {"note": "Insert $11$: slot $1$ holds $1$ — a collision, so step to slot $2$.", "array": [22, 1, 13, "", "", "", "", "", "", "", ""], "marks": [{"index": 1, "color": "red"}], "pointers": [{"index": 1, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "11"], ["probes", "2"]]}, {"note": "Insert $11$: slot $2$ holds $13$ — a collision, so step to slot $3$.", "array": [22, 1, 13, "", "", "", "", "", "", "", ""], "marks": [{"index": 2, "color": "red"}], "pointers": [{"index": 2, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "11"], ["probes", "3"]]}, {"note": "Slot $3$ is empty: $11$ lands there after 4 probes.", "array": [22, 1, 13, 11, "", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "green"}], "pointers": [{"index": 3, "label": "i"}], "lines": [6], "vars": [["key", "11"], ["probes", "4"], ["load factor", "4/11"]]}, {"note": "Insert $24$: $h(24) = 24 \\bmod 11 = 2$, but slot $2$ already holds $13$. Collision: probe the next slot.", "array": [22, 1, 13, 11, "", "", "", "", "", "", ""], "marks": [{"index": 2, "color": "red"}], "pointers": [{"index": 2, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "24"], ["probes", "1"]]}, {"note": "Insert $24$: slot $3$ holds $11$ — a collision, so step to slot $4$.", "array": [22, 1, 13, 11, "", "", "", "", "", "", ""], "marks": [{"index": 3, "color": "red"}], "pointers": [{"index": 3, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "24"], ["probes", "2"]]}, {"note": "Slot $4$ is empty: $24$ lands there after 3 probes.", "array": [22, 1, 13, 11, 24, "", "", "", "", "", ""], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "green"}], "pointers": [{"index": 4, "label": "i"}], "lines": [6], "vars": [["key", "24"], ["probes", "3"], ["load factor", "5/11"]]}, {"note": "Insert $33$: $h(33) = 33 \\bmod 11 = 0$, but slot $0$ already holds $22$. Collision: probe the next slot.", "array": [22, 1, 13, 11, 24, "", "", "", "", "", ""], "marks": [{"index": 0, "color": "red"}], "pointers": [{"index": 0, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "33"], ["probes", "1"]]}, {"note": "Insert $33$: slot $1$ holds $1$ — a collision, so step to slot $2$.", "array": [22, 1, 13, 11, 24, "", "", "", "", "", ""], "marks": [{"index": 1, "color": "red"}], "pointers": [{"index": 1, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "33"], ["probes", "2"]]}, {"note": "Insert $33$: slot $2$ holds $13$ — a collision, so step to slot $3$.", "array": [22, 1, 13, 11, 24, "", "", "", "", "", ""], "marks": [{"index": 2, "color": "red"}], "pointers": [{"index": 2, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "33"], ["probes", "3"]]}, {"note": "Insert $33$: slot $3$ holds $11$ — a collision, so step to slot $4$.", "array": [22, 1, 13, 11, 24, "", "", "", "", "", ""], "marks": [{"index": 3, "color": "red"}], "pointers": [{"index": 3, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "33"], ["probes", "4"]]}, {"note": "Insert $33$: slot $4$ holds $24$ — a collision, so step to slot $5$.", "array": [22, 1, 13, 11, 24, "", "", "", "", "", ""], "marks": [{"index": 4, "color": "red"}], "pointers": [{"index": 4, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "33"], ["probes", "5"]]}, {"note": "Slot $5$ is empty: $33$ lands there after 6 probes.", "array": [22, 1, 13, 11, 24, 33, "", "", "", "", ""], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "green"}], "pointers": [{"index": 5, "label": "i"}], "lines": [6], "vars": [["key", "33"], ["probes", "6"], ["load factor", "6/11"]]}, {"note": "Insert $18$: $h(18) = 7$ and slot $7$ is empty, so $18$ goes straight in (1 probe).", "array": [22, 1, 13, 11, 24, 33, "", 18, "", "", ""], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 7, "color": "green"}], "pointers": [{"index": 7, "label": "i"}], "lines": [6], "vars": [["key", "18"], ["probes", "1"], ["load factor", "7/11"]]}, {"note": "Insert $42$: $h(42) = 9$ and slot $9$ is empty, so $42$ goes straight in (1 probe).", "array": [22, 1, 13, 11, 24, 33, "", 18, "", 42, ""], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 7, "color": "gray"}, {"index": 9, "color": "green"}], "pointers": [{"index": 9, "label": "i"}], "lines": [6], "vars": [["key", "42"], ["probes", "1"], ["load factor", "8/11"]]}, {"note": "Insert $31$: $h(31) = 31 \\bmod 11 = 9$, but slot $9$ already holds $42$. Collision: probe the next slot.", "array": [22, 1, 13, 11, 24, 33, "", 18, "", 42, ""], "marks": [{"index": 9, "color": "red"}], "pointers": [{"index": 9, "label": "i"}], "lines": [2, 3, 4], "vars": [["key", "31"], ["probes", "1"]]}, {"note": "Slot $10$ is empty: $31$ lands there after 2 probes.", "array": [22, 1, 13, 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 7, "color": "gray"}, {"index": 9, "color": "gray"}, {"index": 10, "color": "green"}], "pointers": [{"index": 10, "label": "i"}], "lines": [6], "vars": [["key", "31"], ["probes", "2"], ["load factor", "9/11"]]}, {"note": "Done: 9 keys, 20 probes in total. Slots $0$–$5$ form one long **cluster**; any new key hashing anywhere into it must walk to its end.", "array": [22, 1, 13, 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "orange"}, {"index": 1, "color": "orange"}, {"index": 2, "color": "orange"}, {"index": 3, "color": "orange"}, {"index": 4, "color": "orange"}, {"index": 5, "color": "orange"}], "vars": [["total probes", "20"], ["load factor", "9/11"]]}],
          caption: 'Each red cell is a collision. Watch $11$, $24$ and $33$: they hash into the run that $22, 1, 13$ started and lengthen it, so the run captures still more keys.',
        },
        {
          type: 'definition',
          term: 'Primary clustering',
          text: 'Under linear probing, occupied slots form contiguous runs. A key hashing **anywhere** into a run lands at its end, so a run of length $L$ grows with probability about $(L + 2)/m$ per insert — long runs grow fastest. This is [[dsa-primary-clustering|primary clustering]].',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Linear probing wins in practice anyway',
          text: 'Despite clustering, linear probing with a good hash and $\\alpha \\le 0.7$ is usually the fastest table on modern CPUs, because it is the most cache-friendly. Google\'s Swiss tables (`absl::flat_hash_map`) and `boost::unordered_flat_map` probe a whole **group** of slots at once (16 in Abseil\'s design) with SIMD instructions, using a metadata byte per slot to skip most key comparisons.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Continue from the end of the animation: the table ($m = 11$, $h(k) = k \\bmod 11$, linear probing) holds $[22, 1, 13, 11, 24, 33, \\_, 18, \\_, 42, 31]$, where $\\_$ marks an empty slot. Now insert $44$. How many slots are examined (probes, including the one where $44$ lands)?',
      label: 'probes $=$',
      answer: '7',
      hint: 'Start at $44 \\bmod 11$ and walk right until you hit an empty slot.',
      explanation: '$44 \\bmod 11 = 0$. Slots $0, 1, 2, 3, 4, 5$ are all occupied (that is the cluster), and slot $6$ is empty, so $44$ lands in slot $6$ after $7$ probes. Notice that none of the keys in slots $1$–$5$ hashed to $0$ except $11$ and $33$ — clustering makes keys with **different** home slots get in each other\'s way. And the cluster now runs from slot $0$ through slot $7$: filling slot $6$ merged it with $18$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Quadratic probing and double hashing',
      blocks: [
        {
          type: 'p',
          text: 'Clustering happens because colliding keys all follow the **same** path. Two classic fixes change the probe sequence, written here as the slot examined on probe $i = 0, 1, 2, \\dots$:',
        },
        {
          type: 'table',
          headers: ['Scheme', 'Probe $i$ examines', 'Clustering', 'What must hold'],
          rows: [
            ['Linear probing', '$(h(k) + i) \\bmod m$', 'primary: runs merge and grow', 'nothing; always reaches every slot'],
            ['Quadratic probing', '$(h(k) + c_1 i + c_2 i^2) \\bmod m$', 'secondary only: keys with the same $h(k)$ share a path', 'e.g. $m$ prime and $\\alpha \\le \\frac{1}{2}$, or $m = 2^p$ with triangular steps $\\frac{i(i+1)}{2}$'],
            ['[[dsa-double-hashing|Double hashing]]', '$(h_1(k) + i \\cdot h_2(k)) \\bmod m$', 'essentially none', '$h_2(k) \\ne 0$ and $\\gcd(h_2(k), m) = 1$'],
          ],
          caption: 'With $m$ prime, any step size $1 \\le h_2(k) < m$ is coprime to $m$, so the sequence visits all $m$ slots before repeating.',
        },
        {
          type: 'algo',
          view: 'array',
          interval: 1100,
          frames: [{"note": "Same keys, same $m = 11$, but now the step size depends on the key: $h_1(k) = k \\bmod 11$, $h_2(k) = 7 - (k \\bmod 7)$.", "array": ["", "", "", "", "", "", "", "", "", "", ""], "vars": [["probe i", "$(h_1 + i\\,h_2) \\bmod 11$"]]}, {"note": "Insert $22$: slot $h_1(22) = 0$ is free (1 probe).", "array": [22, "", "", "", "", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "green"}], "pointers": [{"index": 0, "label": "i"}], "vars": [["key", "22"], ["$h_1$", "0"], ["$h_2$", "6"], ["probes", "1"], ["total", "1"]]}, {"note": "Insert $1$: slot $h_1(1) = 1$ is free (1 probe).", "array": [22, 1, "", "", "", "", "", "", "", "", ""], "marks": [{"index": 1, "color": "green"}], "pointers": [{"index": 1, "label": "i"}], "vars": [["key", "1"], ["$h_1$", "1"], ["$h_2$", "6"], ["probes", "1"], ["total", "2"]]}, {"note": "Insert $13$: slot $h_1(13) = 2$ is free (1 probe).", "array": [22, 1, 13, "", "", "", "", "", "", "", ""], "marks": [{"index": 2, "color": "green"}], "pointers": [{"index": 2, "label": "i"}], "vars": [["key", "13"], ["$h_1$", "2"], ["$h_2$", "1"], ["probes", "1"], ["total", "3"]]}, {"note": "Insert $11$: $h_1 = 0$ is taken, so jump by $h_2(11) = 3$; it lands in slot $3$ after 2 probes.", "array": [22, 1, 13, 11, "", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "red"}, {"index": 3, "color": "green"}], "pointers": [{"index": 3, "label": "i"}], "vars": [["key", "11"], ["$h_1$", "0"], ["$h_2$", "3"], ["probes", "2"], ["total", "5"]]}, {"note": "Insert $24$: $h_1 = 2$ is taken, so jump by $h_2(24) = 4$; it lands in slot $6$ after 2 probes.", "array": [22, 1, 13, 11, "", "", 24, "", "", "", ""], "marks": [{"index": 2, "color": "red"}, {"index": 6, "color": "green"}], "pointers": [{"index": 6, "label": "i"}], "vars": [["key", "24"], ["$h_1$", "2"], ["$h_2$", "4"], ["probes", "2"], ["total", "7"]]}, {"note": "Insert $33$: $h_1 = 0$ is taken, so jump by $h_2(33) = 2$ each time; it lands in slot $4$ after 3 probes.", "array": [22, 1, 13, 11, 33, "", 24, "", "", "", ""], "marks": [{"index": 0, "color": "red"}, {"index": 2, "color": "red"}, {"index": 4, "color": "green"}], "pointers": [{"index": 4, "label": "i"}], "vars": [["key", "33"], ["$h_1$", "0"], ["$h_2$", "2"], ["probes", "3"], ["total", "10"]]}, {"note": "Insert $18$: slot $h_1(18) = 7$ is free (1 probe).", "array": [22, 1, 13, 11, 33, "", 24, 18, "", "", ""], "marks": [{"index": 7, "color": "green"}], "pointers": [{"index": 7, "label": "i"}], "vars": [["key", "18"], ["$h_1$", "7"], ["$h_2$", "3"], ["probes", "1"], ["total", "11"]]}, {"note": "Insert $42$: slot $h_1(42) = 9$ is free (1 probe).", "array": [22, 1, 13, 11, 33, "", 24, 18, "", 42, ""], "marks": [{"index": 9, "color": "green"}], "pointers": [{"index": 9, "label": "i"}], "vars": [["key", "42"], ["$h_1$", "9"], ["$h_2$", "7"], ["probes", "1"], ["total", "12"]]}, {"note": "Insert $31$: $h_1 = 9$ is taken, so jump by $h_2(31) = 4$ each time; it lands in slot $10$ after 4 probes.", "array": [22, 1, 13, 11, 33, "", 24, 18, "", 42, 31], "marks": [{"index": 9, "color": "red"}, {"index": 2, "color": "red"}, {"index": 6, "color": "red"}, {"index": 10, "color": "green"}], "pointers": [{"index": 10, "label": "i"}], "vars": [["key", "31"], ["$h_1$", "9"], ["$h_2$", "4"], ["probes", "4"], ["total", "16"]]}, {"note": "Done: 16 probes in total instead of 20. The colliding keys scattered to different places, so no long cluster formed.", "array": [22, 1, 13, 11, 33, "", 24, 18, "", 42, 31], "vars": [["total probes", "16"]]}],
          caption: '$11$ and $33$ both have $h_1 = 0$, but different step sizes ($3$ and $2$), so they part ways immediately instead of queueing behind each other.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the step must be coprime to $m$',
          text: 'Probe $i$ lands at $h_1 + i\\,s \\pmod m$ with step $s = h_2(k)$. Two probes $i \\ne j$ collide when $(i - j)\\,s \\equiv 0 \\pmod m$. If $\\gcd(s, m) = d > 1$, this already happens at $i - j = m/d < m$, so the sequence cycles through only $m/d$ slots and an insert can loop forever while empty slots exist elsewhere. With $\\gcd(s, m) = 1$ it first happens at $i - j = m$: all $m$ slots get visited. A step of $0$ would never move at all.',
        },
        {
          type: 'p',
          text: 'Double hashing behaves almost like the ideal *uniform hashing* model, in which every key\'s probe sequence is a random permutation of the slots. The price: the probes jump around memory, so each one is likely a separate cache miss.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'In the double-hashing table at the end of the animation, $h_1(k) = k \\bmod 11$ and $h_2(k) = 7 - (k \\bmod 7)$. Put the slots examined while **searching for $31$** in order, first probe first.',
      lines: ['slot $9$', 'slot $2$', 'slot $6$', 'slot $10$'],
      distractors: ['slot $0$', 'slot $3$'],
      hint: '$h_1(31) = 9$ and $h_2(31) = 7 - 3 = 4$. Add $4$ (mod $11$) each time.',
      explanation: 'The probe sequence is $9,\\ 9 + 4 = 13 \\equiv 2,\\ 2 + 4 = 6,\\ 6 + 4 = 10$. Slot $9$ holds $42$, slot $2$ holds $13$, slot $6$ holds $24$, and slot $10$ holds $31$: found on the fourth probe. A search retraces exactly the path the insert took, which is why it can stop with "not found" at the first empty slot.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Load factor and expected probes',
      blocks: [
        {
          type: 'p',
          text: 'For open addressing the load factor $\\alpha = n/m < 1$ is the fraction of occupied slots, and it controls everything. These are the classic results (Knuth), for large tables:',
        },
        {
          type: 'table',
          headers: ['Expected probes', 'Unsuccessful search / insert', 'Successful search'],
          rows: [
            ['Uniform hashing (double hashing is close)', '$\\dfrac{1}{1 - \\alpha}$', '$\\dfrac{1}{\\alpha}\\ln\\dfrac{1}{1 - \\alpha}$'],
            ['Linear probing', '$\\dfrac{1}{2}\\left(1 + \\dfrac{1}{(1 - \\alpha)^2}\\right)$', '$\\dfrac{1}{2}\\left(1 + \\dfrac{1}{1 - \\alpha}\\right)$'],
            ['Separate chaining (comparisons)', '$\\alpha$', '$1 + \\dfrac{\\alpha}{2}$'],
          ],
        },
        {
          type: 'derivation',
          title: 'Uniform hashing: an unsuccessful search takes $\\frac{1}{1 - \\alpha}$ probes on average',
          steps: [
            { tex: 'P(\\text{1st probe occupied}) = \\tfrac{n}{m} = \\alpha', why: 'Under uniform hashing the first slot is uniformly random, and $n$ of the $m$ slots are occupied.' },
            { tex: 'P(\\text{2nd occupied} \\mid \\text{1st occupied}) = \\tfrac{n-1}{m-1} \\le \\alpha', why: 'The second slot is uniform among the $m - 1$ others, of which $n - 1$ are occupied. Since $n < m$, $\\frac{n-1}{m-1} \\le \\frac{n}{m}$.' },
            { tex: 'P(\\text{more than } i \\text{ probes}) \\le \\alpha^{i}', why: 'More than $i$ probes means the first $i$ probes all hit occupied slots; multiply the conditional probabilities, each at most $\\alpha$.' },
            { tex: 'E[X] = \\sum_{i \\ge 0} P(X > i) \\le \\sum_{i \\ge 0} \\alpha^{i}', why: 'Let $X$ be the number of probes. For a count $X \\ge 1$, $E[X] = \\sum_{i \\ge 0} P(X > i)$ (the tail-sum formula).' },
            { tex: '= \\frac{1}{1 - \\alpha}', why: 'A geometric series with ratio $\\alpha < 1$.' },
          ],
          result: 'At $\\alpha = 0.5$: $2$ probes. At $0.9$: $10$. At $0.99$: $100$. The cost explodes as the table fills.',
        },
        {
          type: 'graph',
          x: [0, 1],
          y: [0, 12],
          xStep: 0.1,
          yStep: 2,
          height: 320,
          functions: [
            { expr: '1/(1-x)', label: 'uniform hashing, miss: $\\frac{1}{1-\\alpha}$', color: 'blue', domain: [0, 0.97] },
            { expr: '0.5(1 + 1/(1-x)^2)', label: 'linear probing, miss: $\\frac{1}{2}\\left(1 + \\frac{1}{(1-\\alpha)^2}\\right)$', color: 'red', domain: [0, 0.97] },
            { expr: '0.5(1 + 1/(1-x))', label: 'linear probing, hit', color: 'orange', dashed: true, domain: [0, 0.97] },
            { expr: '1 + x', label: 'chaining, miss ($1$ + chain length)', color: 'green', domain: [0, 1] },
          ],
          vlines: [{ x: 'a', label: 'α', color: 'gray' }],
          sliders: [{ name: 'a', min: 0.05, max: 0.95, step: 0.05, value: 0.75, label: 'load factor $\\alpha$' }],
          readouts: [
            { label: 'uniform, miss', expr: '1/(1-a)', digits: 2 },
            { label: 'linear, miss', expr: '0.5(1 + 1/(1-a)^2)', digits: 2 },
            { label: 'linear, hit', expr: '0.5(1 + 1/(1-a))', digits: 2 },
          ],
          caption: 'Horizontal: $\\alpha$. Vertical: expected slots examined. Below about $\\alpha = 0.5$ every scheme is cheap; above $0.8$ linear probing\'s misses blow up quadratically in $\\frac{1}{1 - \\alpha}$. That is why open-addressing tables resize at a maximum load of $0.5$ to $0.875$.',
        },
        {
          type: 'code',
          title: 'probe_experiment.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdint>
#include <cstdio>
#include <random>
#include <vector>

constexpr std::uint32_t EMPTY = 0;   // stored keys are odd, so never 0

struct Table {
    std::vector<std::uint32_t> t;
    bool dbl;   // false: linear probing (step 1); true: double hashing
    Table(std::size_t m, bool d) : t(m, EMPTY), dbl(d) {}

    // Walk k's probe sequence to k or to an empty slot.
    // Returns the slot index; adds the number of slots examined to probes.
    std::size_t walk(std::uint32_t k, long long& probes) const {
        const std::size_t m = t.size(), step = dbl ? 1 + k % (m - 2) : 1;
        std::size_t i = k % m;
        while (++probes, t[i] != k && t[i] != EMPTY) i = (i + step) % m;
        return i;
    }
    bool insert(std::uint32_t k) {
        long long unused = 0;
        std::size_t i = walk(k, unused);
        if (t[i] == k) return false;   // already present
        t[i] = k;
        return true;
    }
};

int main() {
    const std::size_t m = 10007;   // prime: every step size reaches every slot
    std::printf("alpha  method  hit avg  miss avg | theory hit  theory miss\\n");
    for (double a : {0.5, 0.75, 0.9}) {
        for (bool dbl : {false, true}) {
            std::mt19937 rng(2024);
            Table tab(m, dbl);
            std::vector<std::uint32_t> keys;
            while (keys.size() < a * m) {
                std::uint32_t k = rng() | 1u;                  // odd keys go in
                if (tab.insert(k)) keys.push_back(k);
            }
            long long hit = 0, miss = 0;
            for (std::uint32_t k : keys) tab.walk(k, hit);
            const int Q = 20000;
            for (int q = 0; q < Q; ++q) tab.walk(rng() & ~1u, miss);  // even keys: absent
            double tHit = dbl ? std::log(1 / (1 - a)) / a : 0.5 * (1 + 1 / (1 - a));
            double tMiss = dbl ? 1 / (1 - a) : 0.5 * (1 + 1 / ((1 - a) * (1 - a)));
            std::printf("%.2f   %-6s  %7.2f  %8.2f | %10.2f  %11.2f\\n", a, dbl ? "double" : "linear",
                        double(hit) / keys.size(), double(miss) / Q, tHit, tMiss);
        }
    }
}`,
          output: `alpha  method  hit avg  miss avg | theory hit  theory miss
0.50   linear     1.51      2.50 |       1.50         2.50
0.50   double     1.38      2.00 |       1.39         2.00
0.75   linear     2.39      7.56 |       2.50         8.50
0.75   double     1.82      4.02 |       1.85         4.00
0.90   linear     4.55     34.33 |       5.50        50.50
0.90   double     2.54     10.08 |       2.56        10.00`,
          annotations: [
            { lines: '16-20', text: 'One loop serves search and insert: walk the probe sequence until the key or an empty slot. Linear probing is just double hashing with step $1$.' },
            { lines: 32, text: 'A prime $m$ makes every step size $1 \\dots m-2$ coprime to $m$.' },
            { lines: [40, 46], text: 'Odd random keys are stored; even keys are guaranteed absent, so they measure unsuccessful searches.' },
            { lines: '47-48', text: 'The formulas from the table. At $\\alpha = 0.9$ linear probing deviates most: the formulas are averages over many random tables, and near-full linear probing has enormous variance — a few huge clusters dominate.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Under the uniform hashing model, what is the expected number of probes for an **unsuccessful** search in an open-addressing table with load factor $\\alpha = 0.8$?',
      label: 'probes $=$',
      answer: '5',
      hint: 'Use $\\frac{1}{1 - \\alpha}$.',
      explanation: '$\\frac{1}{1 - 0.8} = \\frac{1}{0.2} = 5$. Intuition: each probe finds an empty slot with probability about $1 - \\alpha = 0.2$, so you wait on average $1/0.2 = 5$ tries, like rolling a die until a particular face shows. Linear probing at the same load would need about $\\frac{1}{2}(1 + 25) = 13$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Deleting: why you need tombstones',
      blocks: [
        {
          type: 'p',
          text: 'Deletion is where open addressing gets subtle. A search stops at the first empty slot — so emptying a slot in the middle of some other key\'s probe path makes that key **unreachable**. Watch:',
        },
        {
          type: 'algo',
          view: 'array',
          interval: 1000,
          frames: [{"note": "The linear-probing table from before. $33$ hashed to slot $0$ but sits in slot $5$: its probe path runs $0, 1, 2, 3, 4, 5$.", "array": [22, 1, 13, 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "purple"}]}, {"note": "**Wrong way:** erase $13$ by simply emptying slot $2$.", "array": [22, 1, "", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 2, "color": "red"}]}, {"note": "Now search for $33$: slot $0$ holds $22$, slot $1$ holds $1$…", "array": [22, 1, "", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}], "pointers": [{"index": 1, "label": "i"}]}, {"note": "…slot $2$ is empty, so the search stops and reports \"not found\" — but $33$ is still in the table. The hole broke its probe path.", "array": [22, 1, "", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 2, "color": "red"}, {"index": 5, "color": "purple"}], "pointers": [{"index": 2, "label": "i"}]}, {"note": "**Right way:** replace $13$ with a **tombstone** (†): \"something was here, keep probing\".", "array": [22, 1, "†", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 2, "color": "gray"}]}, {"note": "Search for $33$: slot $0$ holds $22$, keep going.", "array": [22, 1, "†", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "blue"}], "pointers": [{"index": 0, "label": "i"}]}, {"note": "Slot $1$ holds $1$, keep going.", "array": [22, 1, "†", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}], "pointers": [{"index": 1, "label": "i"}]}, {"note": "Slot $2$ is a tombstone: not empty, so the search **continues**.", "array": [22, 1, "†", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "gray"}], "pointers": [{"index": 2, "label": "i"}]}, {"note": "Slot $3$ holds $11$, keep going.", "array": [22, 1, "†", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "blue"}], "pointers": [{"index": 3, "label": "i"}]}, {"note": "Slot $4$ holds $24$, keep going.", "array": [22, 1, "†", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}], "pointers": [{"index": 4, "label": "i"}]}, {"note": "Slot $5$ holds $33$: found, after 6 probes.", "array": [22, 1, "†", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "green"}], "pointers": [{"index": 5, "label": "i"}]}, {"note": "Insert $35$ ($h = 2$). First probe on to the empty slot $6$ to be sure $35$ is not already present…", "array": [22, 1, "†", 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 2, "color": "gray"}, {"index": 6, "color": "orange"}], "pointers": [{"index": 6, "label": "i"}]}, {"note": "…then store it in the **first tombstone** on its path, slot $2$. Tombstones get recycled.", "array": [22, 1, 35, 11, 24, 33, "", 18, "", 42, 31], "marks": [{"index": 2, "color": "green"}], "pointers": [{"index": 2, "label": "i"}]}],
          caption: 'A tombstone is "occupied" for searches (keep probing) but "free" for inserts (may be reused).',
        },
        {
          type: 'definition',
          term: 'Tombstone',
          text: 'A [[dsa-tombstone|tombstone]] marks a slot whose key was deleted. Searches probe past it; inserts may reuse it — but only after checking that the key is not already further along its path.',
        },
        {
          type: 'p',
          text: 'Tombstones never shorten probe paths. A table with heavy insert/delete churn fills up with them, and searches slow down even though few live keys remain. The fix is to count tombstones in the load factor that triggers a rebuild, and to drop them all when you rebuild.',
        },
        {
          type: 'deepdive',
          title: 'Backward-shift deletion: no tombstones for linear probing',
          blocks: [
            {
              type: 'p',
              text: 'Linear probing allows a cleaner delete. After emptying slot $i$, scan forward through the cluster. For each key at slot $j$ with home slot $h$: if the hole at $i$ lies on its path from $h$ to $j$ (cyclically, $i$ is in $[h, j)$), move it back into the hole and continue with the new hole at $j$. Stop at the first empty slot. Every remaining key stays reachable, and the cluster shrinks. Robin Hood hashing, used in several game-engine maps, keeps a related invariant during inserts so that probe lengths stay even.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'This `erase` is meant for an open-addressing table with linear probing, where `find` stops at the first `Empty` slot. Tap the line with the bug.',
      lines: [
        '`bool erase(int key) {`',
        '`    auto i = find(key);          // slot index, or nullopt`',
        '`    if (!i) return false;`',
        '`    slots_[*i].state = State::Empty;`',
        '`    --size_;`',
        '`    return true;`',
        '`}`',
      ],
      errorLines: [4],
      explanation: 'Line 4 empties the slot. Any key whose probe path passed through this slot — one that collided here and moved on — can no longer be found, because `find` now stops early at the hole. The deleted slot must become a tombstone: `slots_[*i].state = State::Deleted;`. `find` probes past `Deleted`, and `insert` may reuse it.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Growing: rehashing and amortized O(1)',
      blocks: [
        {
          type: 'p',
          text: 'To keep $\\alpha$ bounded as $n$ grows, the table grows: allocate about twice as many slots and **re-insert every live key**. You cannot copy slots across, because each key\'s slot is $h(k) \\bmod m$ and $m$ just changed. This is [[dsa-rehashing|rehashing]]. A single rehash costs $\\Theta(n)$, but it happens rarely.',
        },
        {
          type: 'derivation',
          title: 'Total rehash work when the capacity doubles',
          steps: [
            { tex: 'm_0,\\ 2m_0,\\ 4m_0,\\ \\dots', why: 'Each rehash doubles the capacity. Resizing happens when $n$ reaches $\\alpha_{\\max}\\, m$.' },
            { tex: '\\text{moves} = \\alpha_{\\max}\\,(m_0 + 2m_0 + \\cdots + m_{\\text{last}})', why: 'A rehash at capacity $m$ re-inserts the $\\alpha_{\\max}\\, m$ keys present.' },
            { tex: '< \\alpha_{\\max} \\cdot 2\\,m_{\\text{last}} \\le 2n', why: 'A geometric series is less than twice its largest term, and the last resize happened when $n = \\alpha_{\\max}\\,m_{\\text{last}}$, so $\\alpha_{\\max}\\,m_{\\text{last}} \\le n$.' },
            { tex: '\\frac{n \\text{ inserts} + 2n \\text{ moves}}{n} = O(1) \\text{ per insert}', why: 'Spread over all inserts, the occasional big rehash adds a constant. This is the same doubling argument that makes `std::vector::push_back` [[dm-amortized-analysis|amortized]] $O(1)$.' },
          ],
          result: 'Inserts are amortized $O(1)$ — but one unlucky insert pays $\\Theta(n)$. In a game, that spike can land in the middle of a frame; reserve capacity at load time if you know the size.',
        },
        {
          type: 'code',
          title: 'probing_set.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <optional>
#include <vector>

// A small open-addressing hash set of ints with linear probing and tombstones.
class ProbingSet {
    enum class State { Empty, Full, Deleted };
    struct Slot { int key = 0; State state = State::Empty; };

    std::vector<Slot> slots_;
    std::size_t size_ = 0;   // Full slots
    std::size_t used_ = 0;   // Full + Deleted slots (both lengthen probe paths)

    std::size_t home(int key) const { return static_cast<unsigned>(key) % slots_.size(); }

    void grow() {
        std::vector<Slot> old = std::move(slots_);
        slots_.assign(old.size() * 2 + 1, Slot{});   // keep the size odd
        size_ = used_ = 0;
        for (const Slot& s : old)
            if (s.state == State::Full) insert(s.key);  // rehash every live key
    }

public:
    long long probes = 0;   // slots examined, for measuring
    explicit ProbingSet(std::size_t m = 11) : slots_(m) {}

    // Index of key's slot, or nullopt. Stops only at an Empty slot.
    std::optional<std::size_t> find(int key) {
        for (std::size_t i = home(key);; i = (i + 1) % slots_.size()) {
            ++probes;
            const Slot& s = slots_[i];
            if (s.state == State::Empty) return std::nullopt;
            if (s.state == State::Full && s.key == key) return i;
        }
    }

    bool insert(int key) {
        if (find(key)) return false;                          // no duplicates
        if (2 * (used_ + 1) > slots_.size()) grow();          // keep load <= 1/2
        std::size_t i = home(key);
        while (slots_[i].state == State::Full) i = (i + 1) % slots_.size();
        if (slots_[i].state == State::Empty) ++used_;         // a reused tombstone
        slots_[i] = {key, State::Full};                       // was already counted
        ++size_;
        return true;
    }

    bool erase(int key) {
        auto i = find(key);
        if (!i) return false;
        slots_[*i].state = State::Deleted;                    // tombstone, not Empty
        --size_;
        return true;
    }

    std::size_t size() const { return size_; }
    std::size_t capacity() const { return slots_.size(); }
};

int main() {
    ProbingSet s;
    for (int k : {22, 1, 13, 11, 24}) s.insert(k);
    std::printf("size %zu, capacity %zu\\n", s.size(), s.capacity());
    s.insert(33);                                             // 6th key: 6/11 > 1/2
    std::printf("size %zu, capacity %zu (grew)\\n", s.size(), s.capacity());

    s.erase(13);
    for (int k : {33, 13, 24}) {
        s.probes = 0;
        bool hit = s.find(k).has_value();
        std::printf("find %d: %s after %lld probe(s)\\n", k, hit ? "found" : "missing", s.probes);
    }
}`,
          output: `size 5, capacity 11
size 6, capacity 23 (grew)
find 33: found after 1 probe(s)
find 13: missing after 2 probe(s)
find 24: found after 2 probe(s)`,
          annotations: [
            { lines: '7-8', text: 'Each slot is empty, full, or a tombstone (`Deleted`).' },
            { lines: '11-12', text: '`size_` counts live keys; `used_` also counts tombstones, because they lengthen probe paths just like live keys.' },
            { lines: '16-22', text: 'Rehash: a fresh array of $2m + 1$ slots, then re-insert only the `Full` slots. Tombstones vanish.' },
            { lines: '30-35', text: 'Search probes past tombstones and stops only at `Empty`. Keeping $\\alpha \\le \\frac{1}{2}$ (tombstones included) guarantees an empty slot exists, so this loop always ends.' },
            { lines: '42-44', text: 'Insert takes the first non-`Full` slot, which may be a tombstone. Reusing one does not increase `used_`.' },
            { lines: 52, text: 'Delete writes a tombstone — never `Empty`.' },
            { lines: '69-73', text: 'After erasing $13$ (home slot $13$ in the grown table), a search for $13$ probes the tombstone, then the empty slot $14$: two probes, "missing".' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'An open-addressing table starts with $m = 8$ slots. Before each insert, if the new key would make $\\alpha > \\frac{1}{2}$ (that is, $n + 1 > m/2$), the table doubles $m$ and re-inserts all $n$ current keys. Starting empty, you insert $100$ distinct keys. How many re-insertions (key moves) do all the rehashes perform in total?',
      label: 'moves $=$',
      answer: '124',
      hint: 'The first rehash happens when inserting the $5$th key (it moves $4$ keys, $m$ becomes $16$). When is the next one?',
      explanation: 'Rehashes happen before the $5$th, $9$th, $17$th, $33$rd and $65$th inserts, moving $4 + 8 + 16 + 32 + 64 = 124$ keys, and $m$ ends at $256$. As the doubling argument promises, $124 \\le 2n = 200$: the total rehash work is at most twice the number of inserts, so the amortized cost per insert stays constant.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Inside std::unordered_map',
      blocks: [
        {
          type: 'p',
          text: 'The standard containers `std::unordered_map` and `std::unordered_set` are hash tables with **separate chaining**. The standard\'s interface all but forces this: `bucket(key)`, `bucket_size(n)`, local iterators per bucket, and the promise that inserting never moves an existing element.',
        },
        {
          type: 'list',
          items: [
            '**Layout.** One heap-allocated node per element (key, value, often the cached hash, a next pointer) and an array of bucket pointers. libstdc++ threads all nodes into one singly linked list, so iteration is a list walk.',
            '**Growth.** `max_load_factor()` defaults to $1.0$. When an insert would exceed it, the table rehashes into more buckets (libstdc++ picks primes, roughly doubling). `reserve(n)` sets up enough buckets for $n$ elements in advance.',
            '**[[dsa-iterator-invalidation|Invalidation]].** A rehash invalidates **iterators** but not **pointers or references** to elements: nodes are relinked, never moved. Erasing invalidates only the erased element.',
            '**Order.** Iteration order is unspecified and changes after a rehash. Never let it drive gameplay logic in a lockstep multiplayer game or a replay system: two machines (or two builds) can iterate differently and desync.',
            '**`operator[]` inserts.** `m[key]` on a missing key default-constructs a value and inserts it. Use `find` or `contains` (C++20) to test membership.',
          ],
        },
        {
          type: 'code',
          title: 'unordered_map_internals.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string>
#include <unordered_map>

int main() {
    std::unordered_map<int, std::string> names;
    std::printf("max_load_factor %.1f\\n", names.max_load_factor());

    names[7] = "Medic";
    std::string* medic = &names[7];          // pointer to an element
    auto it = names.find(7);                 // iterator to the same element

    int rehashes = 0;
    std::size_t buckets = names.bucket_count();
    for (int id = 100; id < 1100; ++id) {
        names[id] = "Grunt";
        if (names.bucket_count() != buckets) { ++rehashes; buckets = names.bucket_count(); }
    }
    std::printf("1001 elements: %d rehashes, load factor %.2f\\n", rehashes, names.load_factor());
    std::printf("pointer still valid: %s\\n", medic->c_str());   // nodes never move
    (void)it;   // but \`it\` must not be used: rehashing invalidated iterators

    std::unordered_map<int, std::string> reserved;
    reserved.reserve(1001);                  // buckets for 1001 elements up front
    rehashes = 0;
    buckets = reserved.bucket_count();
    for (int id = 0; id < 1001; ++id) {
        reserved[id] = "Grunt";
        if (reserved.bucket_count() != buckets) { ++rehashes; buckets = reserved.bucket_count(); }
    }
    std::printf("with reserve: %d rehashes\\n", rehashes);
}`,
          output: `max_load_factor 1.0
1001 elements: 6 rehashes, load factor 0.90
pointer still valid: Medic
with reserve: 0 rehashes`,
          annotations: [
            { lines: 7, text: 'The default maximum load factor: on average one element per bucket.' },
            { lines: '10-11', text: 'A pointer and an iterator to the same element, taken before any rehash.' },
            { lines: '15-18', text: 'Growing from $1$ to $1001$ elements triggers several rehashes (the exact count and bucket sizes are libstdc++\'s; other libraries choose differently).' },
            { lines: 20, text: 'The pointer survives every rehash: the node itself never moved.' },
            { lines: 21, text: 'The iterator, though, is invalid after a rehash; dereferencing it would be undefined behavior.' },
            { lines: 24, text: '`reserve` allocates the buckets once, so the fill loop never rehashes.' },
          ],
        },
        {
          type: 'table',
          headers: ['Property', '`std::unordered_map`', 'Open-addressing flat map (Swiss table style)'],
          rows: [
            ['Collision policy', 'separate chaining', 'probing inside one array'],
            ['Allocation', 'one node per element', 'one array for everything'],
            ['Cache behavior', 'pointer chasing on every lookup', 'probes mostly in one or two cache lines'],
            ['References after rehash', 'stay valid', 'invalidated (elements move)'],
            ['Typical max load', '$1.0$', '$0.5$–$0.875$'],
          ],
          caption: 'Engines (and libraries such as Abseil and Boost) use flat maps for hot paths: an entity-ID-to-index map, an asset cache, a spatial hash. Use `std::unordered_map` when you need stable references or the standard interface.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'When `std::unordered_map` rehashes during an insert, pointers and references to its existing elements become invalid.',
      answer: false,
      explanation: 'False. `std::unordered_map` stores each element in its own node; a rehash only relinks the nodes into a new bucket array, so pointers and references stay valid. **Iterators** are invalidated by a rehash, though, and so is any assumption about iteration order. (Contrast `std::vector`, where reallocation moves the elements and invalidates pointers too — and flat open-addressing maps, which behave like the vector here.)',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'fill',
      prompt: 'Complete the rules for double hashing in a table of $m$ slots.',
      template: 'Probe $i$ examines slot $(h_1(k) +$ ___ $) \\bmod m$. The step $h_2(k)$ must never be ___ , and it must be coprime to $m$, which is automatic when $m$ is ___ .',
      blanks: [{ answers: ['$i \\cdot h_2(k)$'] }, { answers: ['$0$'] }, { answers: ['prime'] }],
      wordBank: ['$i \\cdot h_2(k)$', '$i^2$', '$i$', '$0$', '$1$', 'prime', 'a power of two'],
      explanation: 'Double hashing moves in steps of $h_2(k)$: slot $(h_1(k) + i \\cdot h_2(k)) \\bmod m$ ($i^2$ is quadratic probing; plain $i$ is linear probing). A step of $0$ never leaves the home slot. If $\\gcd(h_2(k), m) > 1$, the sequence cycles through only some of the slots, so the table could report "full" while slots are free. A prime $m$ makes every step $1 \\le h_2(k) < m$ coprime to $m$. (With a power-of-two $m$ you can instead force $h_2(k)$ to be odd.)',
    },
    // ------------------------------------------------------------------ 18
    {
      kind: 'mcq',
      prompt: 'An inventory system keeps a hash table of item IDs. A designer reports that after a long play session with constant pickups and drops, lookups have become slow — although the inventory holds only a few dozen items. The table uses linear probing with tombstones and resizes when **live** keys exceed half the capacity. What is the most likely cause?',
      options: [
        { text: 'Tombstones have piled up, so probe sequences are long even though few keys are live', correct: true, why: 'Every deletion leaves a tombstone, and searches probe past them. The resize rule counts only live keys, so the table never rebuilds and the tombstones never go away.' },
        { text: 'The load factor of live keys is too high', why: 'A few dozen live keys in a table sized for them gives a low live load. The problem is the slots that are neither live nor empty.' },
        { text: 'Linear probing is $O(n)$ per lookup on average', why: 'With a bounded load factor (counting everything that blocks probing), linear probing is expected $O(1)$.' },
        { text: 'The hash function has started returning different values for the same key', why: 'A deterministic hash never changes its output; if it did, lookups would fail outright, not just slow down.' },
      ],
      explanation: 'Deletions in open addressing leave tombstones that lengthen probe paths exactly like live keys do. If the resize trigger counts only live keys, churn steadily converts empty slots into tombstones until most searches crawl to the end of huge runs. The fix: count tombstones toward the load factor (as `used_` does in `probing_set.cpp`) and rebuild, which drops them all — or use backward-shift deletion.',
    },
  ],
  takeaways: [
    'A hash table maps a key to slot $h(k) \\bmod m$. The hash must spread *your* keys evenly: power-of-two moduli with weak hashes (like an identity `std::hash<int>`) fail on patterned keys, so use a prime $m$ or mix the bits first.',
    'Separate chaining keeps a list per bucket: about $\\alpha$ comparisons for a miss and $1 + \\alpha/2$ for a hit, with $\\alpha = n/m$ — but every node is a pointer chase.',
    'Open addressing probes inside one array. Linear probing is cache-friendly but clusters; double hashing $(h_1 + i\\,h_2) \\bmod m$ avoids clustering if $h_2(k)$ is nonzero and coprime to $m$.',
    'Expected probes grow like $\\frac{1}{1 - \\alpha}$ (uniform hashing) and $\\frac{1}{2}\\left(1 + \\frac{1}{(1-\\alpha)^2}\\right)$ (linear probing, misses), so open-addressing tables resize well before they are full.',
    'Deletion needs tombstones (or backward shifting); count tombstones in the resize trigger. Growing by doubling and re-inserting every key costs amortized $O(1)$ per insert.',
    '`std::unordered_map` is node-based chaining: references survive rehashing, iterators do not, iteration order is unspecified, `reserve` avoids rehash spikes, and flat open-addressing maps are usually faster.',
  ],
  reading: [
    {
      title: 'Sedgewick & Wayne — Algorithms, 4th ed., Section 3.4: Hash Tables',
      url: 'https://algs4.cs.princeton.edu/34hash/',
      source: 'book',
      note: 'Separate chaining and linear probing with clean Java code, plus the probe-count analysis and resizing.',
    },
    {
      title: 'Jeff Erickson — Algorithms (lecture notes on hashing)',
      url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      source: 'book',
      note: 'The free notes include a rigorous chapter on hashing: universal hashing, chaining and open addressing analyzed carefully.',
    },
    {
      title: 'cppreference — std::unordered_map',
      url: 'https://en.cppreference.com/w/cpp/container/unordered_map',
      source: 'other',
      note: 'Check the "Iterator invalidation" table and the bucket interface (`bucket_count`, `load_factor`, `rehash`, `reserve`).',
    },
    {
      title: 'Wikipedia — Linear probing',
      url: 'https://en.wikipedia.org/wiki/Linear_probing',
      source: 'wikipedia',
      note: 'History (Knuth\'s 1963 analysis), the expected-probe formulas, and why linear probing is fast on real hardware.',
    },
  ],
};
