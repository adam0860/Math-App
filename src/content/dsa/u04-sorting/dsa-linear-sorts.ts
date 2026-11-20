import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-linear-sorts',
  title: 'The Lower Bound and Linear-Time Sorts',
  summary: 'Why no comparison sort can beat $\\Omega(n \\log n)$ — the decision-tree argument — and how counting sort, LSD radix sort and bucket sort beat it anyway by reading keys instead of comparing them. Ends with radix-sorting draw calls by packed 64-bit keys, the way game renderers do.',
  minutes: 21,
  objectives: [
    'Prove that every comparison sort needs at least $\\lceil \\log_2 n! \\rceil = \\Omega(n \\log n)$ comparisons in the worst case',
    'Implement a stable counting sort with prefix sums and state when its $\\Theta(n + k)$ cost is linear',
    'Explain why LSD radix sort is correct (stability is essential) and compute its cost $\\Theta(d(n + b))$',
    'Analyze bucket sort\'s expected linear time for uniformly distributed keys',
    'Pack game-object properties (layer, material, depth, including floats) into integer sort keys and radix-sort them',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The decision-tree lower bound',
      blocks: [
        {
          type: 'p',
          text: 'Merge sort, heapsort and introsort all top out at $\\Theta(n \\log n)$. That is not a failure of imagination: it is a theorem about every [[dsa-comparison-sort|comparison sort]] — every algorithm that learns about the keys only by asking "is $a_i < a_j$?".',
        },
        {
          type: 'p',
          text: 'Freeze the algorithm and run it on all orderings of $n$ distinct keys. Each run is a path of yes/no answers, so the algorithm is a **binary decision tree**: internal nodes are comparisons, and each leaf is the reordering the algorithm outputs when it gets there. Here is insertion sort on three keys $a, b, c$:',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 480 250\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"216.0\" y1=\"40.0\" x2=\"144.0\" y2=\"82.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M144.0,82.0 L149.1,74.6 L153.0,81.2 Z\" fill=\"currentColor\"/><line x1=\"264.0\" y1=\"40.0\" x2=\"336.0\" y2=\"82.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M336.0,82.0 L327.0,81.2 L330.9,74.6 Z\" fill=\"currentColor\"/><line x1=\"106.0\" y1=\"110.0\" x2=\"64.0\" y2=\"152.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M64.0,152.0 L67.0,143.5 L72.5,149.0 Z\" fill=\"currentColor\"/><line x1=\"131.0\" y1=\"110.0\" x2=\"164.0\" y2=\"152.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M164.0,152.0 L156.0,148.0 L162.0,143.2 Z\" fill=\"currentColor\"/><line x1=\"349.0\" y1=\"110.0\" x2=\"316.0\" y2=\"152.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M316.0,152.0 L318.0,143.2 L324.0,148.0 Z\" fill=\"currentColor\"/><line x1=\"369.0\" y1=\"110.0\" x2=\"396.0\" y2=\"152.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M396.0,152.0 L388.4,147.2 L394.8,143.1 Z\" fill=\"currentColor\"/><line x1=\"164.8\" y1=\"180.0\" x2=\"140.2\" y2=\"214.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M140.2,214.0 L141.8,205.2 L148.0,209.7 Z\" fill=\"currentColor\"/><line x1=\"185.2\" y1=\"180.0\" x2=\"209.8\" y2=\"214.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M209.8,214.0 L202.0,209.7 L208.2,205.2 Z\" fill=\"currentColor\"/><line x1=\"395.3\" y1=\"180.0\" x2=\"371.7\" y2=\"214.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M371.7,214.0 L373.2,205.1 L379.5,209.5 Z\" fill=\"currentColor\"/><line x1=\"412.9\" y1=\"180.0\" x2=\"432.1\" y2=\"214.0\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M432.1,214.0 L424.8,208.8 L431.4,205.0 Z\" fill=\"currentColor\"/><rect x=\"205\" y=\"12\" width=\"70\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-purple\"/><text x=\"240\" y=\"31\" text-anchor=\"middle\" font-size=\"14\" class=\"t-purple\">a ≤ b ?</text><rect x=\"85\" y=\"82\" width=\"70\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-purple\"/><text x=\"120\" y=\"101\" text-anchor=\"middle\" font-size=\"14\" class=\"t-purple\">b ≤ c ?</text><rect x=\"325\" y=\"82\" width=\"70\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-purple\"/><text x=\"360\" y=\"101\" text-anchor=\"middle\" font-size=\"14\" class=\"t-purple\">a ≤ c ?</text><rect x=\"19\" y=\"152\" width=\"62\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-green\"/><text x=\"50\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">a b c</text><rect x=\"140\" y=\"152\" width=\"70\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-purple\"/><text x=\"175\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" class=\"t-purple\">a ≤ c ?</text><rect x=\"274\" y=\"152\" width=\"62\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-green\"/><text x=\"305\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">b a c</text><rect x=\"370\" y=\"152\" width=\"70\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-purple\"/><text x=\"405\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" class=\"t-purple\">b ≤ c ?</text><rect x=\"99\" y=\"214\" width=\"62\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-green\"/><text x=\"130\" y=\"233\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">a c b</text><rect x=\"189\" y=\"214\" width=\"62\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-green\"/><text x=\"220\" y=\"233\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">c a b</text><rect x=\"331\" y=\"214\" width=\"62\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-green\"/><text x=\"362\" y=\"233\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">b c a</text><rect x=\"409\" y=\"214\" width=\"62\" height=\"28\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-green\"/><text x=\"440\" y=\"233\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">c b a</text><text x=\"174.0\" y=\"55.1\" text-anchor=\"middle\" font-size=\"13\">yes</text><text x=\"306.0\" y=\"55.1\" text-anchor=\"middle\" font-size=\"13\">no</text><text x=\"76.5\" y=\"127.0\" text-anchor=\"middle\" font-size=\"13\">yes</text><text x=\"156.9\" y=\"128.1\" text-anchor=\"middle\" font-size=\"13\">no</text><text x=\"323.1\" y=\"128.1\" text-anchor=\"middle\" font-size=\"13\">yes</text><text x=\"392.6\" y=\"129.0\" text-anchor=\"middle\" font-size=\"13\">no</text><text x=\"142.8\" y=\"194.5\" text-anchor=\"middle\" font-size=\"13\">yes</text><text x=\"207.2\" y=\"194.5\" text-anchor=\"middle\" font-size=\"13\">no</text><text x=\"373.6\" y=\"194.7\" text-anchor=\"middle\" font-size=\"13\">yes</text><text x=\"432.9\" y=\"195.6\" text-anchor=\"middle\" font-size=\"13\">no</text></svg>",
          alt: 'A binary decision tree. The root asks a ≤ b; deeper nodes ask b ≤ c or a ≤ c; six green leaves hold the sorted orders abc, acb, cab, bac, bca, cba.',
          caption: 'Six leaves, one per ordering of $a, b, c$. The longest root-to-leaf path has $3$ comparisons: that path length is the worst-case cost.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Every comparison sort needs $\\Omega(n \\log n)$ comparisons',
          steps: [
            { tex: '\\text{leaves} \\ge n!', why: 'Different input orderings need different rearrangements to be sorted. If two orderings reached the same leaf, the algorithm would apply the same rearrangement to both, and at least one would come out unsorted.' },
            { tex: '\\text{leaves} \\le 2^{h}', why: 'A binary tree of height $h$ (longest path $= h$ comparisons) has at most $2^h$ leaves: each level at most doubles the count.' },
            { tex: '2^h \\ge n! \\implies h \\ge \\log_2 n!', why: 'Combine the two bounds and take logarithms.' },
            { tex: '\\log_2 n! \\ge \\textstyle\\sum_{i \\ge n/2} \\log_2 i \\ge \\frac{n}{2}\\log_2 \\frac{n}{2}', why: '$\\log_2 n! = \\sum_{i=1}^{n} \\log_2 i$. Drop the smaller half of the terms; each of the remaining (at least $n/2$) terms is at least $\\log_2 \\frac{n}{2}$.' },
            { tex: 'h = \\Omega(n \\log n)', why: '$\\frac{n}{2}\\log_2\\frac{n}{2} = \\frac{n}{2}\\log_2 n - \\frac{n}{2}$. (Stirling\'s formula gives the sharper $\\log_2 n! = n\\log_2 n - n\\log_2 e + O(\\log n) \\approx n\\log_2 n - 1.44n$.)' },
          ],
          result: 'Merge sort, heapsort and introsort are asymptotically optimal comparison sorts. The same counting shows the **average** depth of a leaf is also $\\Omega(n \\log n)$, so randomization cannot beat it either.',
        },
        {
          type: 'table',
          headers: ['$n$', '$n!$', 'lower bound $\\lceil \\log_2 n! \\rceil$', 'merge sort, worst case'],
          rows: [
            ['$3$', '$6$', '$3$', '$3$'],
            ['$5$', '$120$', '$7$', '$8$'],
            ['$10$', '$3\\,628\\,800$', '$22$', '$25$'],
            ['$1000$', '$\\approx 4 \\times 10^{2567}$', '$8530$', '$8977$'],
          ],
          caption: 'Merge sort stays within about $5\\%$ of the information-theoretic minimum. (The merge-insertion sort of Ford and Johnson sorts $5$ elements in exactly $7$.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the bound is about information',
          text: 'Sorting must identify which of the $n!$ orderings it was given. Each comparison answers one yes/no question — at most one bit of information — so you need at least $\\log_2 n!$ bits. Algorithms that escape the bound do so by getting **more than one bit per step**: reading a key\'s digit and using it as an array index distinguishes $256$ cases at once.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'What is the smallest number of comparisons that any comparison sort needs in the **worst case** to sort $6$ distinct keys, according to the decision-tree bound $\\lceil \\log_2 n! \\rceil$?',
      label: 'comparisons $\\ge$',
      answer: '10',
      hint: '$6! = 720$. Which powers of $2$ surround it?',
      explanation: '$6! = 720$ orderings need $720$ distinct leaves. $2^9 = 512 < 720 \\le 1024 = 2^{10}$, so a tree of height $9$ has too few leaves, and the height must be at least $10$. Merge sort needs $11$ in the worst case for $n = 6$, and the best possible algorithm achieves $10$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Counting sort: use the key as an index',
      blocks: [
        {
          type: 'p',
          text: 'Suppose the keys are integers in a small range $[0, k)$: rarity tiers, team IDs, bytes, grid rows. Then you can skip comparisons entirely. [[dsa-counting-sort|Counting sort]] counts how many times each key occurs, turns the counts into starting positions with a [[dsa-prefix-sum|prefix sum]], and drops every element directly into its slot.',
        },
        {
          type: 'algo',
          view: 'array',
          code: `std::vector<int> count(k), start(k);
for (const Rec& r : in) ++count[r.key];
for (int x = 1; x < k; ++x)
    start[x] = start[x-1] + count[x-1];
for (const Rec& r : in)
    out[start[r.key]++] = r;`,
          interval: 1300,
          frames: [{"note": "Counting sort of $7$ records with keys in $\\{0, 1, 2, 3\\}$. The letters mark the original order of equal keys, so we can check stability.", "array": ["2a", "0a", "3a", "2b", "1a", "0b", "2c"], "vars": [["k", "4"]], "lines": []}, {"note": "Pass 1: one scan of the input counts each key. This is the `count` array, indexed **by key**.", "array": [2, 1, 3, 1], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}], "vars": [["input", "2a, 0a, 3a, 2b, 1a, 0b, 2c"]], "lines": [2]}, {"note": "Pass 2: exclusive prefix sums. Now `start[k]` is the first output index for key $k$: keys $0$ go at $0$–$1$, the $1$ at $2$, keys $2$ at $3$–$5$, the $3$ at $6$.", "array": [0, 2, 3, 6], "marks": [{"index": 0, "color": "purple"}, {"index": 1, "color": "purple"}, {"index": 2, "color": "purple"}, {"index": 3, "color": "purple"}], "vars": [["count", "[2, 1, 3, 1]"]], "lines": [3, 4]}, {"note": "Pass 3: input[0] $=$ 2a goes to output index `start[2]` $= 3$; bump `start[2]` to $4$.", "array": ["", "", "", "2a", "", "", ""], "marks": [{"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "start[2]"}], "vars": [["start", "[0, 2, 4, 6]"]], "lines": [5, 6]}, {"note": "Pass 3: input[1] $=$ 0a goes to output index `start[0]` $= 0$; bump `start[0]` to $1$.", "array": ["0a", "", "", "2a", "", "", ""], "marks": [{"index": 0, "color": "orange"}, {"index": 3, "color": "green"}], "pointers": [{"index": 0, "label": "start[0]"}], "vars": [["start", "[1, 2, 4, 6]"]], "lines": [5, 6]}, {"note": "Pass 3: input[2] $=$ 3a goes to output index `start[3]` $= 6$; bump `start[3]` to $7$.", "array": ["0a", "", "", "2a", "", "", "3a"], "marks": [{"index": 6, "color": "orange"}, {"index": 0, "color": "green"}, {"index": 3, "color": "green"}], "pointers": [{"index": 6, "label": "start[3]"}], "vars": [["start", "[1, 2, 4, 7]"]], "lines": [5, 6]}, {"note": "Pass 3: input[3] $=$ 2b goes to output index `start[2]` $= 4$; bump `start[2]` to $5$.", "array": ["0a", "", "", "2a", "2b", "", "3a"], "marks": [{"index": 4, "color": "orange"}, {"index": 0, "color": "green"}, {"index": 3, "color": "green"}, {"index": 6, "color": "green"}], "pointers": [{"index": 4, "label": "start[2]"}], "vars": [["start", "[1, 2, 5, 7]"]], "lines": [5, 6]}, {"note": "Pass 3: input[4] $=$ 1a goes to output index `start[1]` $= 2$; bump `start[1]` to $3$.", "array": ["0a", "", "1a", "2a", "2b", "", "3a"], "marks": [{"index": 2, "color": "orange"}, {"index": 0, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 6, "color": "green"}], "pointers": [{"index": 2, "label": "start[1]"}], "vars": [["start", "[1, 3, 5, 7]"]], "lines": [5, 6]}, {"note": "Pass 3: input[5] $=$ 0b goes to output index `start[0]` $= 1$; bump `start[0]` to $2$.", "array": ["0a", "0b", "1a", "2a", "2b", "", "3a"], "marks": [{"index": 1, "color": "orange"}, {"index": 0, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 6, "color": "green"}], "pointers": [{"index": 1, "label": "start[0]"}], "vars": [["start", "[2, 3, 5, 7]"]], "lines": [5, 6]}, {"note": "Pass 3: input[6] $=$ 2c goes to output index `start[2]` $= 5$; bump `start[2]` to $6$.", "array": ["0a", "0b", "1a", "2a", "2b", "2c", "3a"], "marks": [{"index": 5, "color": "orange"}, {"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 6, "color": "green"}], "pointers": [{"index": 5, "label": "start[2]"}], "vars": [["start", "[2, 3, 6, 7]"]], "lines": [5, 6]}, {"note": "Sorted in $O(n + k)$ with no comparisons. Equal keys kept their input order (2a, 2b, 2c): the sort is **stable** because we scanned the input left to right.", "array": ["0a", "0b", "1a", "2a", "2b", "2c", "3a"], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}], "lines": []}],
          caption: 'The picture changes array: first the input, then `count` and `start` (indexed by key), then the output being filled. The letters show that equal keys stay in input order.',
        },
        {
          type: 'theorem',
          name: 'Counting sort',
          text: 'Sorts $n$ records with integer keys in $[0, k)$ in $\\Theta(n + k)$ time and $\\Theta(n + k)$ extra space, and it is [[dsa-stable-sort|stable]]. It is linear when $k = O(n)$.',
        },
        {
          type: 'code',
          title: 'counting_sort.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string>
#include <vector>

struct Item { std::string name; int rarity; };   // 0 common ... 3 legendary

// Stable counting sort by rarity, for keys in [0, k).
std::vector<Item> countingSort(const std::vector<Item>& in, int k) {
    std::vector<int> count(k, 0), start(k, 0);
    for (const Item& it : in) ++count[it.rarity];        // 1. histogram
    for (int x = 1; x < k; ++x)                          // 2. exclusive prefix sums
        start[x] = start[x - 1] + count[x - 1];
    std::vector<Item> out(in.size());
    for (const Item& it : in) out[start[it.rarity]++] = it;  // 3. place, left to right
    return out;
}

int main() {
    std::vector<Item> loot = {{"sword", 2}, {"potion", 0}, {"crown", 3}, {"shield", 2},
                              {"bow", 1},   {"herb", 0},   {"axe", 2}};
    for (const Item& it : countingSort(loot, 4)) std::printf("%d %s\\n", it.rarity, it.name.c_str());
}`,
          output: `0 potion
0 herb
1 bow
2 sword
2 shield
2 axe
3 crown`,
          annotations: [
            { lines: 10, text: 'Pass 1: one read per element, one increment per element.' },
            { lines: '11-12', text: 'Pass 2: `start[x]` = number of keys smaller than $x$ = the first output index for key $x$. This loop costs $\\Theta(k)$: the reason a huge key range ruins counting sort.' },
            { lines: 14, text: 'Pass 3: scanning the input **left to right** and bumping `start` after each placement keeps equal keys in input order: sword, shield, axe.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'When counting sort is a bad idea',
          text: 'The $\\Theta(k)$ term is real memory and real time. Sorting $1000$ scores in $[0, 10^9)$ with counting sort would allocate a billion counters. Counting sort is for **small** key ranges; for wide keys, apply it one digit at a time — that is radix sort.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Counting sort runs on the keys $[1, 3, 0, 1, 2, 3, 1]$ with $k = 4$. After the prefix-sum pass, what is `start[3]` — the output index where the first key $3$ will be written?',
      label: '`start[3]` $=$',
      answer: '5',
      hint: 'Count how many keys are smaller than $3$.',
      explanation: 'The counts are `count = [1, 3, 1, 2]` (one $0$, three $1$s, one $2$, two $3$s). The exclusive prefix sums are `start = [0, 1, 4, 5]`: key $3$ starts after the $1 + 3 + 1 = 5$ smaller keys. The two $3$s go to indices $5$ and $6$, in input order — the first $3$ (input index $1$) to $5$, the second (input index $5$) to $6$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'LSD radix sort: one digit at a time',
      blocks: [
        {
          type: 'p',
          text: '[[dsa-radix-sort|Radix sort]] handles wide keys by splitting them into $d$ digits in base $b$ and running a stable counting sort ($k = b$) on each digit — starting with the **least significant** digit (LSD). It sounds backwards. Watch it work on the classic example:',
        },
        {
          type: 'algo',
          view: 'array',
          interval: 1500,
          frames: [{"note": "LSD radix sort, base $10$: stable-sort by the ones digit, then the tens, then the hundreds.", "array": [329, 457, 657, 839, 436, 720, 355], "vars": [["pass", "0"]]}, {"note": "Pass 1: read each key's ones digit. Stable counting sort will group them in this order, keeping ties in their current order.", "array": [329, 457, 657, 839, 436, 720, 355], "vars": [["digits", "9 7 7 9 6 0 5"], ["buckets", "0: 720; 5: 355; 6: 436; 7: 457, 657; 9: 329, 839"]]}, {"note": "After pass 1: sorted by the last digit.", "array": [720, 355, 436, 457, 657, 329, 839], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "purple"}, {"index": 2, "color": "orange"}, {"index": 3, "color": "teal"}, {"index": 4, "color": "teal"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}], "vars": [["pass", "1"]]}, {"note": "Pass 2: read each key's tens digit. Stable counting sort will group them in this order, keeping ties in their current order.", "array": [720, 355, 436, 457, 657, 329, 839], "vars": [["digits", "2 5 3 5 5 2 3"], ["buckets", "2: 720, 329; 3: 436, 839; 5: 355, 457, 657"]]}, {"note": "After pass 2: sorted by the last two digits.", "array": [720, 329, 436, 839, 355, 457, 657], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "purple"}, {"index": 3, "color": "purple"}, {"index": 4, "color": "orange"}, {"index": 5, "color": "orange"}, {"index": 6, "color": "orange"}], "vars": [["pass", "2"]]}, {"note": "Pass 3: read each key's hundreds digit. Stable counting sort will group them in this order, keeping ties in their current order.", "array": [720, 329, 436, 839, 355, 457, 657], "vars": [["digits", "7 3 4 8 3 4 6"], ["buckets", "3: 329, 355; 4: 436, 457; 6: 657; 7: 720; 8: 839"]]}, {"note": "After pass 3: sorted by all three digits: done.", "array": [329, 355, 436, 457, 657, 720, 839], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}], "vars": [["pass", "3"]]}],
          caption: 'Colors group equal digits after each pass. In pass 2, $720$ stays ahead of $329$ (both have tens digit $2$) because pass 1 put it there: stability carries the earlier passes\' work forward.',
        },
        {
          type: 'derivation',
          title: 'Correctness: after pass $t$, the keys are sorted by their last $t$ digits',
          steps: [
            { tex: 't = 1: \\text{ counting sort on digit } 0', why: '**Base.** Pass 1 sorts by the last digit, by definition.' },
            { tex: '\\text{digit differs: pass } t+1 \\text{ decides}', why: 'If the $(t+1)$th-from-last digits differ, they decide the order of the last $t + 1$ digits, and pass $t + 1$ sorts by exactly that digit.' },
            { tex: '\\text{digit ties: order from pass } t \\text{ kept}', why: 'If those digits tie, the last $t + 1$ digits are ordered by the last $t$ — and by the induction hypothesis $x, y$ are already in that order. A **stable** counting sort keeps tied elements in their current order.' },
            { tex: 't = d \\implies \\text{sorted by all } d \\text{ digits}', why: '**Conclusion.** After the last pass the keys are sorted completely.' },
          ],
          result: 'Without stability the third line fails, and each pass would destroy the previous ones.',
        },
        {
          type: 'theorem',
          name: 'Radix sort cost',
          tex: 'T = \\Theta\\big(d\\,(n + b)\\big), \\qquad d = \\left\\lceil \\frac{w}{\\log_2 b} \\right\\rceil \\text{ for } w\\text{-bit keys}',
          text: 'For $32$-bit keys with $b = 256$ (one byte per digit): $d = 4$ passes of $n + 256$ work each. Linear in $n$ for fixed-width keys.',
        },
        {
          type: 'code',
          title: 'radix_sort.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdint>
#include <cstdio>
#include <random>
#include <vector>

// Stable counting sort of a by the byte (a[i] >> shift) & 255, into out.
void countingPass(const std::vector<std::uint32_t>& a, std::vector<std::uint32_t>& out, int shift) {
    std::size_t start[257] = {};
    for (std::uint32_t x : a) ++start[((x >> shift) & 255) + 1];  // counts, shifted by one
    for (int d = 0; d < 256; ++d) start[d + 1] += start[d];      // prefix sums: first slot per digit
    for (std::uint32_t x : a) out[start[(x >> shift) & 255]++] = x;  // left to right: stable
}

// LSD radix sort: 4 stable passes over 8-bit digits, least significant first.
void radixSort(std::vector<std::uint32_t>& a) {
    std::vector<std::uint32_t> buf(a.size());
    for (int shift = 0; shift < 32; shift += 8) {
        countingPass(a, buf, shift);
        a.swap(buf);                         // ping-pong between the two buffers
    }
}

int main() {
    std::mt19937 rng(11);
    std::vector<std::uint32_t> a(1000000);
    for (auto& x : a) x = rng();
    std::vector<std::uint32_t> ref = a;

    radixSort(a);
    long long cmp = 0;
    std::sort(ref.begin(), ref.end(), [&](std::uint32_t x, std::uint32_t y) { ++cmp; return x < y; });

    std::printf("radix sort: 4 passes, %zu element moves, 0 comparisons\\n", 4 * a.size());
    std::printf("std::sort:  %lld comparisons\\n", cmp);
    std::printf("same result: %s\\n", a == ref ? "yes" : "no");
}`,
          output: `radix sort: 4 passes, 4000000 element moves, 0 comparisons
std::sort:  23853920 comparisons
same result: yes`,
          annotations: [
            { lines: 10, text: 'Counting into `start[digit + 1]` makes the next line\'s running sum an **exclusive** prefix sum: `start[d]` = number of elements with a smaller digit.' },
            { lines: 12, text: 'Left to right with post-increment: stable.' },
            { lines: '18-21', text: 'Four passes, least significant byte first, swapping buffers each time. After an even number of passes the result is back in `a`.' },
            { lines: '34-35', text: 'Four sequential sweeps against $24$ million comparisons. On large integer arrays radix sort is typically several times faster than `std::sort`; on small arrays the $256$-entry tables dominate and `std::sort` wins.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'LSD versus MSD',
          text: 'LSD radix sort needs fixed-length keys and always does all $d$ passes. **MSD** radix sort starts from the most significant digit, splits into $b$ buckets and recurses into each — natural for variable-length strings, and it can stop early once a bucket has one element. Sedgewick\'s MSD string sort and "American flag sort" (an in-place MSD variant) are the classics.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'LSD radix sort (base $10$, stable counting sort per digit) runs on $[170, 45, 75, 90, 802, 24, 2, 66]$. Put the array states in order, starting with the input.',
      lines: [
        '$[170, 45, 75, 90, 802, 24, 2, 66]$',
        '$[170, 90, 802, 2, 24, 45, 75, 66]$',
        '$[802, 2, 24, 45, 66, 170, 75, 90]$',
        '$[2, 24, 45, 66, 75, 90, 170, 802]$',
      ],
      distractors: ['$[2, 802, 24, 45, 66, 170, 75, 90]$'],
      hint: 'Treat short numbers as having leading zeros ($45 = 045$). Pass 1 groups by the ones digit, keeping ties in input order.',
      explanation: 'Pass 1 (ones digit): $170, 90$ (digit $0$), then $802, 2$ (digit $2$), $24$ ($4$), $45, 75$ ($5$), $66$ ($6$). Pass 2 (tens): $802, 2$ (tens digit $0$), $24$ ($2$), $45$ ($4$), $66$ ($6$), $170, 75$ ($7$), $90$ ($9$). Pass 3 (hundreds): everything with hundreds digit $0$ in its current order, then $170$, then $802$. The distractor puts $2$ before $802$ in pass 2 — an **unstable** pass, which ignores the order pass 1 established.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Stability is not optional',
      blocks: [
        {
          type: 'p',
          text: 'The correctness proof used stability in exactly one place, and that place is load-bearing. A single unstable pass can scramble the work of all the passes before it.',
        },
        {
          type: 'compare',
          left: {
            title: 'Unstable pass 2',
            tone: 'bad',
            tex: ['[13, 11] \\xrightarrow{\\text{pass 1 (ones)}} [11, 13]', '\\xrightarrow{\\text{pass 2 (tens), ties reversed}} [13, 11] \\ \\text{(wrong)}'],
            text: 'Keys $13$ and $11$ tie on the tens digit. A pass that reverses ties undoes the ones-digit order: $13$ ends up before $11$.',
          },
          right: {
            title: 'Stable pass 2',
            tone: 'good',
            tex: ['[13, 11] \\xrightarrow{\\text{pass 1}} [11, 13]', '\\xrightarrow{\\text{pass 2, ties kept}} [11, 13] \\ \\checkmark'],
            text: 'Ties on the tens digit keep the order from pass 1, which already sorted them by the ones digit.',
          },
        },
        {
          type: 'p',
          text: 'Counting sort is stable **because of** how it places elements: scan the input left to right and fill each key\'s region from its start, or scan right to left and fill from its end. Mixing the two — left-to-right starts with a right-to-left scan — reverses every group of ties. It still sorts by the current digit, so a single pass looks fine; the damage only shows up in the final radix result.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'This counting pass is used inside LSD radix sort. Each pass sorts correctly by its byte, but the final radix sort output is wrong. Tap the buggy line.',
      lines: [
        '`std::size_t start[257] = {};`',
        '`for (std::uint32_t x : a) ++start[((x >> shift) & 255) + 1];`',
        '`for (int d = 0; d < 256; ++d) start[d + 1] += start[d];`',
        '`for (std::size_t i = a.size(); i-- > 0;)`',
        '`    out[start[(a[i] >> shift) & 255]++] = a[i];`',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 compute exclusive prefix sums: `start[d]` is the **first** slot for digit $d$. Line 5 fills each digit\'s region from the front, which is stable only if the input is scanned **left to right**. Line 4 scans right to left, so elements with equal digits come out in reverse order: the pass is unstable, and later passes scramble the earlier ones. Fix line 4 to `for (std::size_t i = 0; i < a.size(); ++i)`. (CLRS\'s version scans right to left but uses inclusive sums — the **end** of each region — and decrements: also stable.)',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Bucket sort: when keys are spread out',
      blocks: [
        {
          type: 'p',
          text: '[[dsa-bucket-sort|Bucket sort]] targets real-valued keys spread roughly uniformly over a range, say $[0, 1)$. Make $n$ equal-width buckets, put key $x$ into bucket $\\lfloor n x \\rfloor$, sort each bucket with insertion sort, and concatenate. Each bucket expects about one key, so the insertion sorts are tiny.',
        },
        {
          type: 'derivation',
          title: 'Expected time is $\\Theta(n)$ for independent uniform keys',
          steps: [
            { tex: 'n_i = \\textstyle\\sum_{j} X_{ij}, \\quad P(X_{ij} = 1) = \\tfrac{1}{n}', why: '$X_{ij}$ is $1$ when key $j$ lands in bucket $i$. The size of bucket $i$ is a sum of $n$ independent indicators.' },
            { tex: 'E[n_i] = 1, \\qquad \\operatorname{Var}(n_i) = n \\cdot \\tfrac{1}{n}\\left(1 - \\tfrac{1}{n}\\right) = 1 - \\tfrac{1}{n}', why: '$n_i$ is binomial with parameters $n$ and $p = \\frac{1}{n}$: mean $np$, variance $np(1-p)$.' },
            { tex: 'E[n_i^2] = \\operatorname{Var}(n_i) + E[n_i]^2 = 2 - \\tfrac{1}{n}', why: 'Insertion sort on a bucket costs $O(n_i^2)$, so we need the second moment, not just the mean.' },
            { tex: 'E[T] = \\Theta(n) + \\textstyle\\sum_{i} O\\big(E[n_i^2]\\big) = \\Theta(n)', why: 'Linearity of expectation. Scattering and concatenating are $\\Theta(n)$.' },
          ],
          result: 'Linear on average for uniform data; $\\Theta(n^2)$ if the keys clump into one bucket. The guarantee depends on the input distribution, unlike radix sort\'s.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'You have seen this structure before',
          text: 'A bucket array indexed by $\\lfloor n x \\rfloor$ is a hash table whose hash function preserves order, and a spatial hash is a 2D bucket sort. All three bet on the same thing: that the data spreads out across the buckets.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Bucket sort distributes $n = 10$ independent, uniformly random keys from $[0, 1)$ into $10$ buckets. What is $E[n_i^2]$, the expected **square** of the number of keys in one bucket?',
      label: '$E[n_i^2] =$',
      answer: '19/10',
      answerTex: '2 - \\frac{1}{10} = 1.9',
      hint: '$n_i$ is binomial with $n = 10$ trials and $p = \\frac{1}{10}$. Use $E[n_i^2] = \\operatorname{Var}(n_i) + E[n_i]^2$.',
      explanation: '$E[n_i] = np = 1$ and $\\operatorname{Var}(n_i) = np(1-p) = 10 \\cdot 0.1 \\cdot 0.9 = 0.9$, so $E[n_i^2] = 0.9 + 1^2 = 1.9 = 2 - \\frac{1}{10}$. Note that $E[n_i^2] \\ne E[n_i]^2 = 1$: the occasional bucket with $3$ or $4$ keys costs quadratically, and the variance accounts for it. Still a constant, so the expected total is linear.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Sorting draw calls with radix keys',
      blocks: [
        {
          type: 'p',
          text: 'A renderer submits thousands of draw calls per frame, and their order matters. Opaque objects should be grouped by material (changing shaders and textures is expensive) and drawn roughly front to back (so the depth test rejects hidden pixels early). Translucent objects must come **after** all opaque ones and be drawn **back to front** so blending is correct. The standard trick, popularized in engine-programming blogs around 2008 and used across AAA engines: pack all of that into one integer **sort key** per draw call and sort the integers.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 420 150\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"82\" y=\"57\" text-anchor=\"end\" font-size=\"14\">opaque</text>\n<rect x=\"92\" y=\"36\" width=\"28\" height=\"32\" fill=\"currentColor\" fill-opacity=\"0.14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-gray f-gray\"/>\n<text x=\"106.0\" y=\"57\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">0</text>\n<text x=\"94\" y=\"31\" font-size=\"11\" class=\"t-gray\">63</text>\n<rect x=\"120\" y=\"36\" width=\"62\" height=\"32\" fill=\"currentColor\" fill-opacity=\"0.14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-gray f-gray\"/>\n<text x=\"151.0\" y=\"57\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">unused</text>\n<text x=\"122\" y=\"31\" font-size=\"11\" class=\"t-gray\">62</text>\n<rect x=\"182\" y=\"36\" width=\"84\" height=\"32\" fill=\"currentColor\" fill-opacity=\"0.14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-purple f-purple\"/>\n<text x=\"224.0\" y=\"57\" text-anchor=\"middle\" font-size=\"13\" class=\"t-purple\">material</text>\n<text x=\"184\" y=\"31\" font-size=\"11\" class=\"t-gray\">47</text>\n<rect x=\"266\" y=\"36\" width=\"150\" height=\"32\" fill=\"currentColor\" fill-opacity=\"0.14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-blue f-blue\"/>\n<text x=\"341.0\" y=\"57\" text-anchor=\"middle\" font-size=\"13\" class=\"t-blue\">depth (near first)</text>\n<text x=\"268\" y=\"31\" font-size=\"11\" class=\"t-gray\">31</text>\n<text x=\"414\" y=\"31\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">0</text>\n<text x=\"82\" y=\"127\" text-anchor=\"end\" font-size=\"14\">translucent</text>\n<rect x=\"92\" y=\"106\" width=\"28\" height=\"32\" fill=\"currentColor\" fill-opacity=\"0.14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-orange f-orange\"/>\n<text x=\"106.0\" y=\"127\" text-anchor=\"middle\" font-size=\"13\" class=\"t-orange\">1</text>\n<text x=\"94\" y=\"101\" font-size=\"11\" class=\"t-gray\">63</text>\n<rect x=\"120\" y=\"106\" width=\"62\" height=\"32\" fill=\"currentColor\" fill-opacity=\"0.14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-gray f-gray\"/>\n<text x=\"151.0\" y=\"127\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">unused</text>\n<text x=\"122\" y=\"101\" font-size=\"11\" class=\"t-gray\">62</text>\n<rect x=\"182\" y=\"106\" width=\"84\" height=\"32\" fill=\"currentColor\" fill-opacity=\"0.14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-gray f-gray\"/>\n<text x=\"224.0\" y=\"127\" text-anchor=\"middle\" font-size=\"13\" class=\"t-gray\">0</text>\n<text x=\"184\" y=\"101\" font-size=\"11\" class=\"t-gray\">47</text>\n<rect x=\"266\" y=\"106\" width=\"150\" height=\"32\" fill=\"currentColor\" fill-opacity=\"0.14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"s-green f-green\"/>\n<text x=\"341.0\" y=\"127\" text-anchor=\"middle\" font-size=\"13\" class=\"t-green\">~depth (far first)</text>\n<text x=\"268\" y=\"101\" font-size=\"11\" class=\"t-gray\">31</text>\n<text x=\"414\" y=\"101\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">0</text>\n</svg>",
          alt: 'Two 64-bit key layouts. Opaque: bit 63 is 0, unused bits, a material field in bits 47 to 32, and a depth key in bits 31 to 0 ordered near to far. Translucent: bit 63 is 1, unused bits, zeros, and an inverted depth key ordered far to near.',
          caption: 'The most important criterion goes in the highest bits. Unsigned comparison of the whole key then sorts by bit $63$ (opaque before translucent), then by material, then by depth. Field widths are not to scale.',
          maxWidth: 420,
        },
        {
          type: 'derivation',
          title: 'Making floats sortable as unsigned integers (IEEE 754)',
          steps: [
            { tex: '\\text{float bits} = (\\text{sign} \\mid \\text{exponent} \\mid \\text{mantissa})', why: 'For non-negative floats, larger values have larger exponent-then-mantissa bit patterns, so their bits already sort correctly as unsigned integers.' },
            { tex: 'x \\ge 0: \\ u \\mapsto u \\mid \\texttt{0x80000000}', why: 'Setting the sign bit lifts every non-negative float above every negative one.' },
            { tex: 'x < 0: \\ u \\mapsto \\lnot u', why: 'Negative floats are stored as sign plus magnitude, so a more negative value has a **larger** magnitude pattern. Flipping all bits reverses their order and clears the sign bit, putting them below the positives in the correct order.' },
            { tex: '\\text{translucent: } \\lnot\\,\\text{key}(\\text{depth})', why: 'Inverting the depth key once more turns near-to-far into far-to-near for back-to-front blending.' },
          ],
          result: 'One branch and one xor per float, and depth sorts correctly as an integer field — ready for radix sort.',
        },
        {
          type: 'code',
          title: 'draw_call_sort.cpp',
          runnable: true,
          code: `#include <bit>
#include <cstdint>
#include <cstdio>
#include <vector>

// Map a float to an unsigned int whose unsigned order matches the float order.
std::uint32_t floatKey(float f) {
    std::uint32_t u = std::bit_cast<std::uint32_t>(f);
    return (u & 0x80000000u) ? ~u                  // negative: flip every bit
                             : (u | 0x80000000u);  // positive: flip the sign bit
}

struct Draw { const char* name; bool translucent; std::uint16_t material; float depth; };

std::uint64_t sortKey(const Draw& d) {
    std::uint64_t depth = floatKey(d.depth);
    if (!d.translucent)                            // opaque: group by material, then near to far
        return (std::uint64_t(d.material) << 32) | depth;
    return (1ull << 63) | (~depth & 0xffffffffu);  // translucent: after opaque, far to near
}

// LSD radix sort of indices by 64-bit key: 8 stable passes over 8-bit digits.
std::vector<int> radixOrder(const std::vector<std::uint64_t>& key) {
    std::vector<int> idx(key.size()), buf(key.size());
    for (std::size_t i = 0; i < idx.size(); ++i) idx[i] = int(i);
    for (int shift = 0; shift < 64; shift += 8) {
        std::size_t start[257] = {};
        for (int i : idx) ++start[((key[i] >> shift) & 255) + 1];
        for (int d = 0; d < 256; ++d) start[d + 1] += start[d];
        for (int i : idx) buf[start[(key[i] >> shift) & 255]++] = i;
        idx.swap(buf);
    }
    return idx;
}

int main() {
    std::vector<float> fs = {1.5f, -0.5f, 3.25f, -2.5f, 0.0f};
    std::vector<std::uint64_t> fk;
    for (float f : fs) fk.push_back(floatKey(f));
    std::printf("floats in key order:");
    for (int i : radixOrder(fk)) std::printf(" %g", fs[i]);
    std::printf("\\n");

    std::vector<Draw> draws = {
        {"glass window", true, 3, 12.0f}, {"rock", false, 2, 30.0f}, {"tank", false, 1, 8.0f},
        {"smoke", true, 4, 25.0f},        {"tree", false, 2, 5.0f},  {"soldier", false, 1, 15.0f}};
    std::vector<std::uint64_t> keys;
    for (const Draw& d : draws) keys.push_back(sortKey(d));
    for (int i : radixOrder(keys))
        std::printf("%-12s %s material %u depth %4.1f\\n", draws[i].name,
                    draws[i].translucent ? "translucent" : "opaque     ", draws[i].material, draws[i].depth);
}`,
          output: `floats in key order: -2.5 -0.5 0 1.5 3.25
tank         opaque      material 1 depth  8.0
soldier      opaque      material 1 depth 15.0
tree         opaque      material 2 depth  5.0
rock         opaque      material 2 depth 30.0
smoke        translucent material 4 depth 25.0
glass window translucent material 3 depth 12.0`,
          annotations: [
            { lines: '7-11', text: 'The float-to-key mapping from the derivation. `std::bit_cast` (C++20) reinterprets the bits without undefined behavior.' },
            { lines: '15-20', text: 'Opaque: material in bits 47–32, depth key in bits 31–0. Translucent: bit 63 set, inverted depth.' },
            { lines: '23-34', text: 'LSD radix sort on **indices**, so the draw records themselves never move: $8$ passes of one byte each. A real engine would skip passes whose byte is identical for every key (all the unused bits here).' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why radix sort fits here',
          text: 'Thousands of fixed-width integer keys, every frame, on a tight budget: exactly radix sort\'s home turf. It is predictable (no worst case, no data-dependent branches), it parallelizes well (GPU particle sorts for transparency are often radix sorts), and since last frame\'s order is a good guess, some engines instead keep the previous order and fix it with insertion sort. Measure both.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Two translucent particles have depths $2.0$ and $9.0$ (distance from the camera). Using the key layout above (bit $63$ set, then $\\lnot\\,\\text{floatKey}(\\text{depth})$ in the low $32$ bits), which is drawn first after sorting keys in ascending order, and why?',
      options: [
        { text: 'The particle at depth $9.0$, because inverting the depth key reverses the order: far before near', correct: true, why: '$\\text{floatKey}(9.0) > \\text{floatKey}(2.0)$, so after bitwise NOT the $9.0$ key is the smaller one and sorts first: back to front, as blending requires.' },
        { text: 'The particle at depth $2.0$, because smaller depths have smaller keys', why: 'That is true for the **opaque** layout (near to far). The translucent layout inverts the depth bits precisely to reverse it.' },
        { text: 'Either one: bit $63$ is set for both, so their keys are equal', why: 'Bit $63$ only separates translucent from opaque. The low $32$ bits still differ and decide the order within the translucent group.' },
        { text: 'The particle at depth $2.0$, because $\\lnot$ flips the sign bit and makes the key negative', why: 'The keys are **unsigned**, so there is no negative; flipping bits simply maps $u$ to $2^{32} - 1 - u$, which reverses the order.' },
      ],
      explanation: 'For non-negative floats, $\\text{floatKey}$ preserves order: $\\text{floatKey}(2.0) < \\text{floatKey}(9.0)$. On $32$-bit unsigned values, $\\lnot u = 2^{32} - 1 - u$ reverses order, so the far particle\'s key is smaller and comes first. Translucent objects are drawn back to front so that each blend composites over what lies behind it.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Choosing a sort',
      blocks: [
        {
          type: 'table',
          headers: ['Algorithm', 'Time', 'Extra space', 'Stable', 'Use when'],
          rows: [
            ['Insertion sort', '$\\Theta(n + \\text{inv})$, $O(n^2)$', '$O(1)$', 'yes', 'tiny or nearly sorted arrays'],
            ['Merge sort / `std::stable_sort`', '$\\Theta(n \\log n)$', '$O(n)$', 'yes', 'stability needed; linked lists; external data'],
            ['Introsort / `std::sort`', '$O(n \\log n)$ worst', '$O(\\log n)$', 'no', 'the default for in-memory arrays'],
            ['Heapsort', '$\\Theta(n \\log n)$', '$O(1)$', 'no', 'hard memory limit and worst-case guarantee'],
            ['Counting sort', '$\\Theta(n + k)$', '$O(n + k)$', 'yes', 'small integer key range $k = O(n)$'],
            ['LSD radix sort', '$\\Theta(d(n + b))$', '$O(n + b)$', 'yes', 'many fixed-width integer (or float) keys'],
            ['Bucket sort', '$\\Theta(n)$ expected', '$O(n)$', 'yes*', 'real keys known to be spread uniformly'],
          ],
          caption: '*If each bucket is sorted stably (insertion sort is). Only the comparison sorts work with an arbitrary comparator; the last three need keys you can take apart.',
        },
        {
          type: 'p',
          text: 'The lower bound tells you when to stop looking for a faster **comparison** sort, and what the escape hatch is: exploit structure in the keys. Small integer ranges, fixed-width bit patterns and known distributions are all structure. Without it — strings with a custom collation, objects ordered by a complicated rule — $n \\log n$ comparisons is the price, and `std::sort` pays it efficiently.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'Counting sort runs in linear time $O(n)$ on any array of $n$ non-negative integers.',
      answer: false,
      explanation: 'False. Counting sort costs $\\Theta(n + k)$, where $k$ is the size of the key range, because the count and prefix-sum arrays have $k$ entries. It is linear only when $k = O(n)$. For $n = 1000$ keys up to $10^9$, the $\\Theta(k)$ term dominates by a factor of a million. Radix sort fixes this by applying counting sort to one small digit ($k = b$) at a time.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the summary of the lower bound and radix sort.',
      template: 'A comparison sort is a binary decision tree with at least ___ leaves, so its worst case needs at least ___ comparisons. LSD radix sort avoids this bound; its per-digit sort must be ___ , and it processes the ___ significant digit first.',
      blanks: [{ answers: ['$n!$'] }, { answers: ['$\\log_2 n!$'] }, { answers: ['stable'] }, { answers: ['least'] }],
      wordBank: ['$n!$', '$2^n$', '$\\log_2 n!$', '$n^2$', 'stable', 'in place', 'least', 'most'],
      explanation: 'Every ordering of $n$ distinct keys must reach its own leaf, so there are at least $n!$ leaves, and a binary tree with that many leaves has height at least $\\log_2 n! = \\Theta(n \\log n)$. LSD radix sort reads digits instead of comparing, starting from the **least** significant one; each pass must be **stable** so that ties on the current digit keep the order the earlier (less significant) passes established.',
    },
  ],
  takeaways: [
    'Any comparison sort is a binary decision tree with at least $n!$ leaves, so its worst case needs at least $\\lceil \\log_2 n! \\rceil = \\Theta(n \\log n)$ comparisons (and the average case too). Merge sort and introsort are asymptotically optimal.',
    'Counting sort: histogram, exclusive prefix sums, place left to right. $\\Theta(n + k)$ and stable — linear only when the key range $k = O(n)$.',
    'LSD radix sort runs a stable counting sort on each digit, least significant first; stability is what makes it correct. Cost $\\Theta(d(n + b))$: $4$ byte-sized passes for $32$-bit keys.',
    'Bucket sort is expected $\\Theta(n)$ for uniformly distributed keys because $E[n_i^2] = 2 - \\frac{1}{n}$; clumped data makes it quadratic.',
    'Game renderers pack layer, material and depth into one integer key (highest priority in the highest bits), map floats to sortable unsigned integers, and radix-sort the keys every frame.',
  ],
  reading: [
    {
      title: 'Jeff Erickson — Algorithms',
      url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      source: 'book',
      note: 'The free text and lecture notes cover the decision-tree lower bound and adversary arguments carefully.',
    },
    {
      title: 'Sedgewick & Wayne — Algorithms, 4th ed., Section 5.1: String Sorts',
      url: 'https://algs4.cs.princeton.edu/51radix/',
      source: 'book',
      note: 'Key-indexed counting, LSD and MSD radix sort, and three-way string quicksort, with code and analysis.',
    },
    {
      title: 'Wikipedia — Radix sort',
      url: 'https://en.wikipedia.org/wiki/Radix_sort',
      source: 'wikipedia',
      note: 'LSD and MSD variants, in-place versions, and where radix sort is used in practice.',
    },
    {
      title: 'MIT OCW 6.006 — Introduction to Algorithms (Spring 2020)',
      url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
      source: 'other',
      note: 'Lecture 5, "Linear Sorting", presents the comparison lower bound, direct-access arrays, counting sort and radix sort.',
    },
  ],
};
