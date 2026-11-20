import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-elementary-sorts',
  title: 'Elementary Sorts',
  summary: 'Selection, insertion and bubble sort with the loop invariants that prove them correct; comparisons versus writes; inversions and why insertion sort flies on nearly sorted data; and what stability means and when it matters.',
  minutes: 19,
  objectives: [
    'State the loop invariant of selection, insertion and bubble sort and use it to prove correctness',
    'Count the comparisons and writes each elementary sort makes, exactly for selection sort and in terms of inversions for the others',
    'Explain why insertion sort runs in $O(n + k)$ on an array with $k$ inversions, and why any sort that swaps only neighbours needs at least $k$ swaps',
    'Define a stable sort, tell which elementary sorts are stable as written, and use stability to sort by several keys',
    'Choose an elementary sort (or none) for small, nearly sorted or write-expensive inputs',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What we count, and what we promise',
      blocks: [
        {
          type: 'p',
          text: 'Sorting is the most studied problem in computing, and the elementary $\\Theta(n^2)$ sorts are where its vocabulary comes from. They also still earn their keep: every fast library sort hands small subarrays to one of them. This unit studies [[dsa-comparison-sort|comparison sorts]] — algorithms that learn about the keys only by asking "is $a < b$?" — before beating that model in the last lesson.',
        },
        {
          type: 'list',
          items: [
            '**Comparisons**: calls to `<` (or your comparator). Expensive when keys are strings or the comparator does real work.',
            '**Writes** (moves): assignments into the array. A swap is $3$ moves; a shift is $1$. Expensive for big structs, or for memory that wears out (flash).',
            '**[[dsa-in-place|In-place]]**: only $O(1)$ extra memory beyond the array (all three sorts here).',
            '**[[dsa-stable-sort|Stable]]**: equal keys keep their original relative order.',
            '**[[dsa-adaptive-sort|Adaptive]]**: faster on inputs that are already nearly sorted.',
          ],
        },
        {
          type: 'p',
          text: 'Each algorithm is proved correct with a [[dm-loop-invariant|loop invariant]], exactly as in Discrete Math: show the invariant holds before the loop (**initialization**), that one iteration preserves it (**maintenance**), and that at exit it implies the array is sorted (**termination**). For sorting, the invariant always describes which part of the array is "done", and in what sense.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Sorted means two things',
          text: 'The output must be **in order** and must be a **permutation of the input** — no element lost or duplicated. Swaps and shifts preserve the multiset of values automatically; "in order" is what the invariant has to deliver.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Selection sort: find the minimum, put it next',
      blocks: [
        {
          type: 'p',
          text: '[[dsa-selection-sort|Selection sort]] grows a sorted prefix from the left. Pass $i$ scans the unsorted suffix $a[i..n)$ for its minimum and swaps it into position $i$.',
        },
        {
          type: 'theorem',
          name: 'Selection sort invariant',
          text: 'Before pass $i$: $a[0..i)$ holds the $i$ smallest elements of the array, in sorted order. (So every element of $a[0..i)$ is $\\le$ every element of $a[i..n)$.)',
        },
        {
          type: 'algo',
          view: 'array',
          bars: true,
          code: `for (int i = 0; i + 1 < n; ++i) {
    int min = i;
    for (int j = i + 1; j < n; ++j)
        if (a[j] < a[min]) min = j;
    if (min != i) std::swap(a[i], a[min]);
}`,
          interval: 1100,
          frames: [{"note": "Selection sort on $[5, 2, 8, 1, 9, 3]$. Each pass scans the unsorted part for its minimum.", "array": [5, 2, 8, 1, 9, 3], "lines": [], "vars": [["comparisons", "0"], ["swaps", "0"]]}, {"note": "Pass 1: scan $a[0..5]$ (5 comparisons). The minimum is $1$ at index $3$.", "array": [5, 2, 8, 1, 9, 3], "marks": [{"index": 3, "color": "purple"}], "pointers": [{"index": 0, "label": "i"}, {"index": 3, "label": "min", "color": "purple"}], "lines": [2, 3, 4], "vars": [["comparisons", "5"], ["swaps", "0"]]}, {"note": "Swap it into position $0$. Now $a[0..0]$ holds the smallest values, in order.", "array": [1, 2, 8, 5, 9, 3], "marks": [{"index": 0, "color": "red"}, {"index": 3, "color": "red"}], "lines": [5], "vars": [["comparisons", "5"], ["swaps", "1"]]}, {"note": "Pass 2: scan $a[1..5]$ (4 comparisons). The minimum is $2$ at index $1$. It is already in place, so no swap is needed.", "array": [1, 2, 8, 5, 9, 3], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "purple"}], "pointers": [{"index": 1, "label": "i"}, {"index": 1, "label": "min", "color": "purple"}], "lines": [2, 3, 4], "vars": [["comparisons", "9"], ["swaps", "1"]]}, {"note": "Pass 3: scan $a[2..5]$ (3 comparisons). The minimum is $3$ at index $5$.", "array": [1, 2, 8, 5, 9, 3], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 5, "color": "purple"}], "pointers": [{"index": 2, "label": "i"}, {"index": 5, "label": "min", "color": "purple"}], "lines": [2, 3, 4], "vars": [["comparisons", "12"], ["swaps", "1"]]}, {"note": "Swap it into position $2$. Now $a[0..2]$ holds the smallest values, in order.", "array": [1, 2, 3, 5, 9, 8], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "red"}, {"index": 5, "color": "red"}], "lines": [5], "vars": [["comparisons", "12"], ["swaps", "2"]]}, {"note": "Pass 4: scan $a[3..5]$ (2 comparisons). The minimum is $5$ at index $3$. It is already in place, so no swap is needed.", "array": [1, 2, 3, 5, 9, 8], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "purple"}], "pointers": [{"index": 3, "label": "i"}, {"index": 3, "label": "min", "color": "purple"}], "lines": [2, 3, 4], "vars": [["comparisons", "14"], ["swaps", "2"]]}, {"note": "Pass 5: scan $a[4..5]$ (1 comparison). The minimum is $8$ at index $5$.", "array": [1, 2, 3, 5, 9, 8], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 5, "color": "purple"}], "pointers": [{"index": 4, "label": "i"}, {"index": 5, "label": "min", "color": "purple"}], "lines": [2, 3, 4], "vars": [["comparisons", "15"], ["swaps", "2"]]}, {"note": "Swap it into position $4$. Now $a[0..4]$ holds the smallest values, in order.", "array": [1, 2, 3, 5, 8, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "red"}, {"index": 5, "color": "red"}], "lines": [5], "vars": [["comparisons", "15"], ["swaps", "3"]]}, {"note": "Sorted: 15 comparisons $= \\binom{6}{2}$, as always, but only 3 swaps.", "array": [1, 2, 3, 5, 8, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "vars": [["comparisons", "15"], ["swaps", "3"]]}],
          caption: 'Green: the finished prefix. Purple: the minimum of the unsorted part. Notice that pass 2 and pass 4 still scan everything even though nothing moves.',
        },
        {
          type: 'derivation',
          title: 'Selection sort makes exactly $\\binom{n}{2}$ comparisons',
          steps: [
            { tex: '\\text{pass } i: \\ n - 1 - i \\text{ comparisons}', why: 'The inner loop compares $a[j]$ with the current minimum for every $j = i+1, \\dots, n-1$, unconditionally: it cannot know $a[i..n)$ has no smaller element without looking at all of it.' },
            { tex: '\\sum_{i=0}^{n-2} (n - 1 - i) = (n-1) + \\cdots + 1', why: 'Add up the passes.' },
            { tex: '= \\frac{n(n-1)}{2}', why: 'Gauss\'s sum.' },
            { tex: '\\text{swaps} \\le n - 1', why: 'At most one swap per pass. (Skip the swap when `min == i` to avoid self-swaps.)' },
          ],
          result: 'Always $\\Theta(n^2)$ comparisons — on sorted, reversed or random input alike — but only $O(n)$ writes.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the invariant survives a pass',
          text: 'Assume $a[0..i)$ holds the $i$ smallest elements in order. Pass $i$ finds the minimum $m$ of $a[i..n)$; by the invariant, $m$ is $\\ge$ everything in the prefix, and it is the smallest of the rest — so it is the $(i+1)$th smallest overall. Swapping it into position $i$ makes $a[0..i]$ the $i + 1$ smallest, in order. At termination ($i = n - 1$) the prefix holds the $n - 1$ smallest in order, and the last element must be the largest: sorted.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Selection sort (as in the animation) runs on an array of $12$ elements that is **already sorted**. How many comparisons does it make?',
      label: 'comparisons $=$',
      answer: '66',
      hint: 'Selection sort is not adaptive: the count does not depend on the input order.',
      explanation: 'Every pass scans the whole unsorted suffix regardless of the values: $11 + 10 + \\cdots + 1 = \\frac{12 \\cdot 11}{2} = 66$ comparisons. On sorted input every minimum is already in place, so it makes $0$ swaps (with the `min != i` check) — but it cannot find that out without looking. Insertion sort would need only $11$ comparisons here.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Insertion sort: grow a sorted prefix by sliding',
      blocks: [
        {
          type: 'p',
          text: 'You met [[dm-insertion-sort|insertion sort]] in Discrete Math. Here is the implementation detail that makes it fast in practice: instead of swapping the new element leftward ($3$ moves per step), lift it out as `key`, **shift** each larger element one slot right ($1$ move each), and drop `key` into the hole.',
        },
        {
          type: 'algo',
          view: 'array',
          bars: true,
          code: `for (int i = 1; i < n; ++i) {
    int key = a[i];
    int j = i;
    while (j > 0 && a[j - 1] > key) {
        a[j] = a[j - 1];   // shift
        --j;
    }
    a[j] = key;            // drop in
}`,
          interval: 900,
          frames: [{"note": "Insertion sort on $[5, 2, 8, 1, 9, 3]$. Invariant: the prefix $a[0..i)$ is sorted. With $i = 1$ it holds trivially.", "array": [5, 2, 8, 1, 9, 3], "marks": [{"index": 0, "color": "green"}], "dim": [1, 2, 3, 4, 5], "lines": [], "vars": [["comparisons", "0"], ["shifts", "0"]]}, {"note": "key $= 2$: $5 > 2$, so shift $5$ right one slot.", "array": [2, 5, 8, 1, 9, 3], "marks": [{"index": 1, "color": "blue"}, {"index": 0, "color": "orange"}], "pointers": [{"index": 0, "label": "key"}], "dim": [2, 3, 4, 5], "lines": [4, 5, 6], "vars": [["i", "1"], ["comparisons", "1"], ["shifts", "1"]]}, {"note": "key $= 2$ reached the front (no comparison needed). $a[0..1]$ is sorted again.", "array": [2, 5, 8, 1, 9, 3], "marks": [{"index": 1, "color": "green"}, {"index": 0, "color": "orange"}], "pointers": [{"index": 0, "label": "key"}], "dim": [2, 3, 4, 5], "lines": [4, 8], "vars": [["i", "1"], ["comparisons", "1"], ["shifts", "1"]]}, {"note": "key $= 8$: $5 \\le 8$, so stop. $a[0..2]$ is sorted again.", "array": [2, 5, 8, 1, 9, 3], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "key"}], "dim": [3, 4, 5], "lines": [4, 8], "vars": [["i", "2"], ["comparisons", "2"], ["shifts", "1"]]}, {"note": "key $= 1$: $8 > 1$, so shift $8$ right one slot.", "array": [2, 5, 1, 8, 9, 3], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 3, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "key"}], "dim": [4, 5], "lines": [4, 5, 6], "vars": [["i", "3"], ["comparisons", "3"], ["shifts", "2"]]}, {"note": "key $= 1$: $5 > 1$, so shift $5$ right one slot.", "array": [2, 1, 5, 8, 9, 3], "marks": [{"index": 0, "color": "green"}, {"index": 3, "color": "green"}, {"index": 2, "color": "blue"}, {"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "key"}], "dim": [4, 5], "lines": [4, 5, 6], "vars": [["i", "3"], ["comparisons", "4"], ["shifts", "3"]]}, {"note": "key $= 1$: $2 > 1$, so shift $2$ right one slot.", "array": [1, 2, 5, 8, 9, 3], "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 1, "color": "blue"}, {"index": 0, "color": "orange"}], "pointers": [{"index": 0, "label": "key"}], "dim": [4, 5], "lines": [4, 5, 6], "vars": [["i", "3"], ["comparisons", "5"], ["shifts", "4"]]}, {"note": "key $= 1$ reached the front (no comparison needed). $a[0..3]$ is sorted again.", "array": [1, 2, 5, 8, 9, 3], "marks": [{"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 0, "color": "orange"}], "pointers": [{"index": 0, "label": "key"}], "dim": [4, 5], "lines": [4, 8], "vars": [["i", "3"], ["comparisons", "5"], ["shifts", "4"]]}, {"note": "key $= 9$: $8 \\le 9$, so stop. $a[0..4]$ is sorted again.", "array": [1, 2, 5, 8, 9, 3], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "key"}], "dim": [5], "lines": [4, 8], "vars": [["i", "4"], ["comparisons", "6"], ["shifts", "4"]]}, {"note": "key $= 3$: $9 > 3$, so shift $9$ right one slot.", "array": [1, 2, 5, 8, 3, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 5, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "key"}], "dim": [], "lines": [4, 5, 6], "vars": [["i", "5"], ["comparisons", "7"], ["shifts", "5"]]}, {"note": "key $= 3$: $8 > 3$, so shift $8$ right one slot.", "array": [1, 2, 5, 3, 8, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 5, "color": "green"}, {"index": 4, "color": "blue"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "key"}], "dim": [], "lines": [4, 5, 6], "vars": [["i", "5"], ["comparisons", "8"], ["shifts", "6"]]}, {"note": "key $= 3$: $5 > 3$, so shift $5$ right one slot.", "array": [1, 2, 3, 5, 8, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 3, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "key"}], "dim": [], "lines": [4, 5, 6], "vars": [["i", "5"], ["comparisons", "9"], ["shifts", "7"]]}, {"note": "key $= 3$: $2 \\le 3$, so stop. $a[0..5]$ is sorted again.", "array": [1, 2, 3, 5, 8, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "key"}], "dim": [], "lines": [4, 8], "vars": [["i", "5"], ["comparisons", "10"], ["shifts", "7"]]}, {"note": "Sorted: 10 comparisons and 7 shifts. The input had exactly 7 inversions.", "array": [1, 2, 3, 5, 8, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "vars": [["comparisons", "10"], ["shifts", "7"]]}],
          caption: 'Orange: the key travelling left. Blue: the larger value just shifted right. Faded: not looked at yet. Each step either shifts (the condition $a[j-1] > \\text{key}$ held) or stops.',
        },
        {
          type: 'derivation',
          title: 'Proof of correctness with the invariant "$a[0..i)$ is the original first $i$ elements, sorted"',
          steps: [
            { tex: 'i = 1: \\ a[0..1) \\text{ is one element}', why: '**Initialization.** A single element is sorted, and nothing has moved.' },
            { tex: 'a[0..j) \\le \\text{key} < a[j+1..i]', why: '**Maintenance.** The inner loop shifts every element of the sorted prefix that is $> \\text{key}$ one slot right, in order, and stops at the first one that is $\\le \\text{key}$ (or at $j = 0$). Everything left of $j$ is $\\le \\text{key}$, everything from $j+1$ to $i$ is $> \\text{key}$.' },
            { tex: 'a[j] \\leftarrow \\text{key} \\implies a[0..i] \\text{ sorted}', why: 'Placing key in the hole between those two groups keeps the prefix sorted, and it now contains the original first $i + 1$ elements.' },
            { tex: 'i = n: \\ a[0..n) \\text{ is sorted}', why: '**Termination.** The loop ends with $i = n$, and the invariant says the whole array is the original elements, sorted.' },
          ],
          result: 'Note the difference from selection sort: insertion sort\'s prefix is sorted, but it is *not* yet in its final place — a later small element can still push it right.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The `j > 0` test must come first',
          text: 'In `while (j > 0 && a[j - 1] > key)` the order matters: `&&` short-circuits, so `a[j - 1]` is never read when $j = 0$. Swap the operands and you read `a[-1]` — with an unsigned `j`, that is `a[SIZE_MAX]`, a crash or silent garbage.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'order',
      prompt: 'Insertion sort runs on $[4, 3, 1, 2]$. Put the array states in order: the input first, then the state after each iteration of the outer loop.',
      lines: ['$[4, 3, 1, 2]$', '$[3, 4, 1, 2]$', '$[1, 3, 4, 2]$', '$[1, 2, 3, 4]$'],
      distractors: ['$[3, 1, 2, 4]$', '$[1, 3, 2, 4]$'],
      hint: 'After iteration $i$, the first $i + 1$ elements of the **original** array are sorted, and the rest are untouched.',
      explanation: 'Iteration $i = 1$ inserts $3$ before $4$: $[3, 4, 1, 2]$. Iteration $2$ inserts $1$ at the front: $[1, 3, 4, 2]$. Iteration $3$ inserts $2$ between $1$ and $3$: $[1, 2, 3, 4]$. The distractor $[3, 1, 2, 4]$ is what one pass of **bubble** sort produces. $[1, 3, 2, 4]$ never appears: after each iteration the elements not yet reached are untouched, and once $2$ is reached it goes all the way to its place.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Inversions: the true cost of insertion sort',
      blocks: [
        {
          type: 'definition',
          term: 'Inversion',
          text: 'An [[dsa-inversion|inversion]] is a pair of positions $i < j$ with $a[i] > a[j]$ — a pair that is out of order. A sorted array has $0$; a reversed array of distinct values has all $\\binom{n}{2}$.',
        },
        {
          type: 'theorem',
          name: 'Insertion sort and inversions',
          text: 'Each shift fixes exactly one inversion, so insertion sort makes exactly $\\text{inv}(a)$ shifts, and between $\\text{inv}(a)$ and $\\text{inv}(a) + n - 1$ comparisons. Its running time is $\\Theta(n + \\text{inv}(a))$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one shift removes exactly one inversion',
          text: 'Moving key one slot left past a larger neighbour $y$ changes the relative order of exactly one pair, $(y, \\text{key})$, from inverted to correct. Every other pair keeps its relative order. So shifts (and adjacent swaps, in bubble sort) remove inversions **one at a time** — which gives a lower bound too: **any** algorithm that only exchanges neighbours needs at least $\\text{inv}(a)$ exchanges.',
        },
        {
          type: 'derivation',
          title: 'A random permutation has $\\frac{n(n-1)}{4}$ inversions on average',
          steps: [
            { tex: '\\text{inv}(a) = \\sum_{i<j} X_{ij}, \\quad X_{ij} = [\\,a[i] > a[j]\\,]', why: 'Count inversions as a sum of indicators, one per pair of positions.' },
            { tex: 'E[X_{ij}] = P(a[i] > a[j]) = \\tfrac{1}{2}', why: 'In a random permutation of distinct values, swapping the two values gives an equally likely permutation, so each order is equally likely.' },
            { tex: 'E[\\text{inv}] = \\binom{n}{2}\\cdot\\tfrac{1}{2} = \\frac{n(n-1)}{4}', why: 'Linearity of expectation over the $\\binom{n}{2}$ pairs.' },
          ],
          result: 'On random data insertion sort does about $n^2/4$ comparisons — half of selection sort\'s $n^2/2$ — and every neighbour-swapping sort is $\\Theta(n^2)$ on average. Beating $n^2$ requires moving elements **far** in one step, as merge sort and quicksort do.',
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [0, 5000],
          xStep: 10,
          yStep: 500,
          functions: [
            { expr: 'x(x-1)/2', label: 'selection (any input), insertion (reversed): $\\frac{n(n-1)}{2}$', color: 'red' },
            { expr: 'x(x-1)/4 + x - 1', label: 'insertion, random input: $\\approx \\frac{n(n-1)}{4} + n$', color: 'blue' },
            { expr: 'x - 1 + k', label: 'insertion with $k$ inversions: $\\le n - 1 + k$', color: 'green' },
          ],
          vlines: [{ x: 'n', label: 'n', color: 'gray' }],
          sliders: [
            { name: 'n', min: 2, max: 100, step: 1, value: 60, label: 'array size $n$' },
            { name: 'k', min: 0, max: 400, step: 10, value: 50, label: 'inversions $k$ (nearly sorted input)' },
          ],
          readouts: [
            { label: 'selection', expr: 'n(n-1)/2', digits: 0 },
            { label: 'insertion, random', expr: 'n(n-1)/4 + n - 1', digits: 0 },
            { label: 'insertion, $k$ inversions', expr: 'n - 1 + k', digits: 0 },
          ],
          caption: 'Comparisons as a function of $n$. With a fixed number $k$ of inversions (a few elements out of place), insertion sort is linear.',
        },
        {
          type: 'code',
          title: 'elementary_counts.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>
#include <utility>
#include <vector>

struct Counts { long long cmp = 0, writes = 0; };

Counts selectionSort(std::vector<int> a) {
    Counts c;
    for (std::size_t i = 0; i + 1 < a.size(); ++i) {
        std::size_t min = i;
        for (std::size_t j = i + 1; j < a.size(); ++j)
            if (++c.cmp, a[j] < a[min]) min = j;
        if (min != i) { std::swap(a[i], a[min]); c.writes += 2; }
    }
    return c;
}

Counts insertionSort(std::vector<int> a) {
    Counts c;
    for (std::size_t i = 1; i < a.size(); ++i) {
        int key = a[i];
        std::size_t j = i;
        while (j > 0 && (++c.cmp, a[j - 1] > key)) {
            a[j] = a[j - 1];                 // shift: one write
            ++c.writes;
            --j;
        }
        a[j] = key;
        ++c.writes;
    }
    return c;
}

Counts bubbleSort(std::vector<int> a) {
    Counts c;
    for (std::size_t end = a.size(); end > 1; --end) {
        bool swapped = false;
        for (std::size_t j = 0; j + 1 < end; ++j)
            if (++c.cmp, a[j] > a[j + 1]) { std::swap(a[j], a[j + 1]); c.writes += 2; swapped = true; }
        if (!swapped) break;                 // a pass with no swaps: sorted
    }
    return c;
}

long long inversions(const std::vector<int>& a) {   // O(n^2) is fine for a demo
    long long inv = 0;
    for (std::size_t i = 0; i < a.size(); ++i)
        for (std::size_t j = i + 1; j < a.size(); ++j) inv += a[i] > a[j];
    return inv;
}

int main() {
    const int n = 1000;
    std::mt19937 rng(1);
    std::vector<int> random(n), sorted(n), reversed(n), nearly(n);
    for (int i = 0; i < n; ++i) {
        random[i] = int(rng() % 100000);
        sorted[i] = nearly[i] = i;
        reversed[i] = n - i;
    }
    for (int s = 0; s < 20; ++s) {           // 20 random adjacent swaps
        std::size_t k = rng() % (n - 1);
        std::swap(nearly[k], nearly[k + 1]);
    }
    std::printf("%-9s %8s | %-17s | %-17s | %s\\n", "input", "inv", "selection cmp/wr", "insertion cmp/wr", "bubble cmp/wr");
    for (auto [name, v] : {std::pair{"random", &random}, std::pair{"sorted", &sorted},
                           std::pair{"reversed", &reversed}, std::pair{"nearly", &nearly}}) {
        Counts s = selectionSort(*v), i = insertionSort(*v), b = bubbleSort(*v);
        std::printf("%-9s %8lld | %7lld / %7lld | %7lld / %7lld | %7lld / %7lld\\n", name, inversions(*v),
                    s.cmp, s.writes, i.cmp, i.writes, b.cmp, b.writes);
    }
}`,
          output: `input          inv | selection cmp/wr  | insertion cmp/wr  | bubble cmp/wr
random      246925 |  499500 /    1982 |  247918 /  247924 |  495495 /  493850
sorted           0 |  499500 /       0 |     999 /     999 |     999 /       0
reversed    499500 |  499500 /    1000 |  499500 /  500499 |  499500 /  999000
nearly          20 |  499500 /      40 |    1019 /    1019 |    1997 /      40`,
          annotations: [
            { lines: 13, text: 'The comma operator counts each comparison right where it happens.' },
            { lines: 24, text: '`j > 0` first: short-circuiting protects `a[j - 1]`.' },
            { lines: '62-65', text: '"Nearly sorted": a sorted array with $20$ random neighbour swaps, like a list of particles re-sorted by depth after one frame of movement.' },
            { lines: '69-71', text: 'Read across the rows: selection is identical everywhere; insertion tracks the inversion count; bubble sort does more of everything.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Frame coherence in games',
          text: 'Translucent particles and sprites must be drawn back to front, so they are sorted by depth every frame. Between frames objects move only a little, so last frame\'s order is nearly sorted — few inversions — and insertion sort re-sorts it in close to linear time. Library sorts exploit the same effect: libstdc++\'s `std::sort` finishes with insertion sort on runs of up to $16$ elements, and Timsort (Python, Java) is built around detecting already-sorted runs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'How many **shifts** does insertion sort perform on $[3, 1, 4, 1, 5, 9, 2, 6]$? (A shift is one execution of `a[j] = a[j - 1]`.)',
      label: 'shifts $=$',
      answer: '8',
      hint: 'Shifts $=$ inversions. For each element, count the **strictly larger** elements to its left. Equal values are not inverted.',
      explanation: 'Count, for each element, the strictly larger elements before it: $3$: $0$; $1$: $1$ (the $3$); $4$: $0$; $1$: $2$ ($3, 4$; the first $1$ is equal, not larger); $5$: $0$; $9$: $0$; $2$: $4$ ($3, 4, 5, 9$); $6$: $1$ ($9$). Total $0 + 1 + 0 + 2 + 0 + 0 + 4 + 1 = 8$ inversions, so $8$ shifts. Because the loop condition is the strict `a[j - 1] > key`, the second $1$ stops at the first $1$ instead of passing it — that is also what makes the sort stable.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Bubble sort, and why nobody should use it',
      blocks: [
        {
          type: 'p',
          text: '[[dsa-bubble-sort|Bubble sort]] sweeps left to right, swapping each adjacent pair that is out of order. The largest unsorted value is carried along like a bubble to the end of the unsorted part.',
        },
        {
          type: 'theorem',
          name: 'Bubble sort invariant',
          text: 'After $p$ passes, the last $p$ positions hold the $p$ largest elements in sorted order. A pass with **no** swaps means no adjacent pair is inverted, so the array is sorted and the algorithm can stop early.',
        },
        {
          type: 'algo',
          view: 'array',
          bars: true,
          code: `for (int end = n; end > 1; --end) {
    bool swapped = false;
    for (int j = 0; j + 1 < end; ++j)
        if (a[j] > a[j + 1]) {
            std::swap(a[j], a[j + 1]);
            swapped = true;
        }
    if (!swapped) break;   // early exit
}`,
          interval: 1300,
          frames: [{"note": "Bubble sort on $[5, 2, 8, 1, 9, 3]$: sweep left to right, swapping adjacent pairs that are out of order.", "array": [5, 2, 8, 1, 9, 3], "lines": [], "vars": [["comparisons", "0"], ["swaps", "0"]]}, {"note": "Pass 1: 5 comparisons, 3 swaps. The largest remaining value $9$ has bubbled to index $5$.", "array": [2, 5, 1, 8, 3, 9], "marks": [{"index": 5, "color": "green"}], "lines": [2, 3, 4, 5, 6, 8], "vars": [["comparisons", "5"], ["swaps", "3"]]}, {"note": "Pass 2: 4 comparisons, 2 swaps. The largest remaining value $8$ has bubbled to index $4$.", "array": [2, 1, 5, 3, 8, 9], "marks": [{"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "lines": [2, 3, 4, 5, 6, 8], "vars": [["comparisons", "9"], ["swaps", "5"]]}, {"note": "Pass 3: 3 comparisons, 2 swaps. The largest remaining value $5$ has bubbled to index $3$.", "array": [1, 2, 3, 5, 8, 9], "marks": [{"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "lines": [2, 3, 4, 5, 6, 8], "vars": [["comparisons", "12"], ["swaps", "7"]]}, {"note": "Pass 4: 2 comparisons and **no swaps**, so the array is sorted and we stop early.", "array": [1, 2, 3, 5, 8, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "lines": [2, 3, 4, 5, 6, 8], "vars": [["comparisons", "14"], ["swaps", "7"]]}, {"note": "Total: 14 comparisons and 7 swaps. Like insertion sort, the swap count is the inversion count, but each swap writes twice.", "array": [1, 2, 3, 5, 8, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "vars": [["comparisons", "14"], ["swaps", "7"]]}],
          caption: 'One frame per pass. Each pass shrinks the unsorted part by one; the fourth pass finds nothing to swap.',
        },
        {
          type: 'p',
          text: 'Bubble sort performs exactly $\\text{inv}(a)$ swaps — the same count as insertion sort\'s shifts — but each swap is $3$ moves instead of $1$, and it usually needs **more** comparisons, because every pass re-scans the whole unsorted part. Worse, small values near the end ("turtles") move left only one position per pass: $[2, 3, 4, 5, 1]$ needs four full passes to bring the $1$ home, while insertion sort moves it in one sweep.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Its one claim to fame',
          text: 'Bubble sort is easy to describe, which is why it appears in every introductory course. Knuth\'s verdict in *The Art of Computer Programming*: it "seems to have nothing to recommend it, except a catchy name and the fact that it leads to some interesting theoretical problems". Learn its invariant, then use insertion sort.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'An array is sorted except that its smallest element is at the end: $[2, 3, 4, 5, 6, 7, 8, 1]$. Which sort makes the **fewest comparisons** on it (bubble sort with the early exit)?',
      options: [
        { text: 'Selection sort', why: 'Always $\\binom{8}{2} = 28$ comparisons, whatever the input.' },
        { text: 'Bubble sort with early exit', why: 'The $1$ is a "turtle": it moves left one position per pass, so all $7$ passes are needed: $7 + 6 + \\cdots + 1 = 28$ comparisons.' },
        { text: 'Insertion sort', correct: true, why: 'Six keys stop after $1$ comparison each, and the final $1$ takes $7$ comparisons to slide to the front: $13$ in total.' },
        { text: 'All three make the same number', why: 'Selection and bubble sort tie at $28$ here, but insertion sort needs only $13$.' },
      ],
      explanation: 'The array has $7$ inversions (the $1$ against every other element). Insertion sort costs about $n - 1 + \\text{inv} = 7 + 7 = 14$ comparisons at most; exactly $13$, because the last key reaches the front, where the `j > 0` test ends the loop without a comparison. Bubble sort also does only $7$ swaps, but its comparisons pay for $7$ full passes. Selection sort pays $28$ no matter what.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Stability: what happens to equal keys',
      blocks: [
        {
          type: 'p',
          text: 'Sorting records by one field often leaves ties: players with equal scores, units in the same squad. A [[dsa-stable-sort|stable sort]] keeps tied records in the order they had before sorting. That matters whenever the existing order means something — join time, or the result of an earlier sort.',
        },
        {
          type: 'code',
          title: 'stability.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <string>
#include <vector>

struct Player { std::string name; int score; };

void show(const char* label, const std::vector<Player>& v) {
    std::printf("%-10s", label);
    for (const auto& p : v) std::printf(" %s:%d", p.name.c_str(), p.score);
    std::printf("\\n");
}

int main() {
    const std::vector<Player> lobby = {{"Ana", 3}, {"Bo", 1}, {"Cy", 3}, {"Di", 1}};  // joined in this order
    auto byScore = [](const Player& a, const Player& b) { return a.score < b.score; };

    std::vector<Player> s = lobby;                       // selection sort
    for (std::size_t i = 0; i + 1 < s.size(); ++i) {
        std::size_t min = i;
        for (std::size_t j = i + 1; j < s.size(); ++j)
            if (byScore(s[j], s[min])) min = j;
        std::swap(s[i], s[min]);                         // long-distance swap
    }
    show("selection", s);

    std::vector<Player> t = lobby;                       // insertion sort
    for (std::size_t i = 1; i < t.size(); ++i) {
        Player key = t[i];
        std::size_t j = i;
        while (j > 0 && byScore(key, t[j - 1])) {        // strictly less: ties stop
            t[j] = t[j - 1];
            --j;
        }
        t[j] = key;
    }
    show("insertion", t);

    std::vector<Player> u = lobby;
    std::stable_sort(u.begin(), u.end(), byScore);
    show("stable", u);
}`,
          output: `selection  Bo:1 Di:1 Cy:3 Ana:3
insertion  Bo:1 Di:1 Ana:3 Cy:3
stable     Bo:1 Di:1 Ana:3 Cy:3`,
          annotations: [
            { lines: 15, text: 'Ana joined before Cy, and Bo before Di. A stable sort by score must keep both of those orders.' },
            { lines: 23, text: 'Selection sort\'s long-distance swap. Pass $0$ swaps Bo to the front, moving Ana to index $1$. Pass $1$ picks Di (score $1$) and swaps Ana from index $1$ to index $3$ — jumping over Cy, who has the same score. The tie order flips.' },
            { lines: 31, text: 'Insertion sort moves an element only past **strictly** larger ones, so it never passes an equal key.' },
            { lines: 40, text: '`std::stable_sort` guarantees stability (it is a merge sort); `std::sort` does not.' },
          ],
        },
        {
          type: 'table',
          headers: ['Sort', 'Stable?', 'Why'],
          rows: [
            ['Insertion sort (`>` in the loop)', 'yes', 'elements move only past strictly larger neighbours'],
            ['Bubble sort (`>` in the test)', 'yes', 'equal neighbours are never swapped'],
            ['Selection sort (array, swap)', 'no', 'the swap carries $a[i]$ far to the right, over equal keys'],
          ],
          caption: 'Change the strict `>` to `>=` and insertion and bubble sort become unstable, though still correct.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sorting by several keys with stable passes',
          text: 'To order units by squad, and by hit points within a squad: stable-sort by hit points first, **then** stable-sort by squad. The second sort keeps the hit-point order inside each squad. Sort by the least significant key first — the same idea powers radix sort in the last lesson. Any sort can be made stable by comparing `(key, original index)` pairs, at the cost of storing the index.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'This insertion sort is supposed to sort players by score **stably** (players with equal scores keep their join order). It sorts correctly, but it is not stable. Tap the line with the bug.',
      lines: [
        '`for (std::size_t i = 1; i < a.size(); ++i) {`',
        '`    Player key = a[i];`',
        '`    std::size_t j = i;`',
        '`    while (j > 0 && a[j - 1].score >= key.score) {`',
        '`        a[j] = a[j - 1];`',
        '`        --j;`',
        '`    }`',
        '`    a[j] = key;`',
        '`}`',
      ],
      errorLines: [4],
      explanation: 'With `>=`, the key also slides past players with an **equal** score, so a later-joining player ends up before an earlier one with the same score. The fix is the strict comparison: `a[j - 1].score > key.score`. Then the key stops at the first equal score and stays behind it. As a bonus, the strict version is faster on inputs with many ties, since it shifts less.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Choosing an elementary sort',
      blocks: [
        {
          type: 'table',
          headers: ['Sort', 'Comparisons (worst / best)', 'Writes (worst)', 'Stable', 'Adaptive', 'Use it when'],
          rows: [
            ['Selection', '$n^2/2$ / $n^2/2$', '$O(n)$ swaps', 'no', 'no', 'writes are very expensive and $n$ is small'],
            ['Insertion', '$n^2/2$ / $n - 1$', '$n^2/2$ shifts', 'yes', 'yes: $\\Theta(n + \\text{inv})$', 'small $n$ (up to a few dozen), nearly sorted data, base case of a fast sort'],
            ['Bubble', '$n^2/2$ / $n - 1$', '$n^2/2$ swaps', 'yes', 'partly (early exit)', 'teaching only'],
          ],
          caption: 'All three are in place. "Writes" counts element moves into the array.',
        },
        {
          type: 'p',
          text: 'For general sorting of more than a few dozen elements, use `std::sort` (or `std::stable_sort` when ties must keep their order) — the next lesson shows how they work. The elementary sorts matter because of their invariants, because insertion sort is the right tool for tiny or nearly sorted arrays, and because "count the inversions" is the key to understanding why the fast sorts must move elements far.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What interviewers listen for',
          text: 'Not the code — everyone has seen it. They listen for the invariant ("the prefix is sorted"), the best and worst cases with the inputs that cause them, stability (and the `>` versus `>=` detail), and the fact that insertion sort is used inside production sorts. Mentioning that neighbour-swapping sorts need $\\text{inv}(a)$ swaps, $\\Theta(n^2)$ on average, shows you understand **why** they are slow.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Any sorting algorithm that only ever swaps **adjacent** elements must perform at least $\\frac{n(n-1)}{2}$ swaps on a reversed array of $n$ distinct values.',
      answer: true,
      explanation: 'True. A reversed array of distinct values has every pair out of order: $\\binom{n}{2} = \\frac{n(n-1)}{2}$ inversions. An adjacent swap changes the relative order of exactly one pair, so it reduces the inversion count by at most one, and the sorted array has none. So at least $\\frac{n(n-1)}{2}$ adjacent swaps are needed — by bubble sort, insertion sort (as shifts), or any cleverer neighbour-swapping scheme.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the loop invariants (both hold just before iteration $i$ of the outer loop).',
      template: 'Selection sort: $a[0..i)$ holds ___ . Insertion sort: $a[0..i)$ holds ___ .',
      blanks: [{ answers: ['the $i$ smallest elements, in sorted order'] }, { answers: ['the original first $i$ elements, in sorted order'] }],
      wordBank: [
        'the $i$ smallest elements, in sorted order',
        'the original first $i$ elements, in sorted order',
        'the $i$ largest elements, in sorted order',
        'the original first $i$ elements, unchanged',
      ],
      explanation: 'Selection sort\'s prefix is **final**: it has already chosen the $i$ smallest elements, and they will never move again. Insertion sort\'s prefix is sorted but **provisional**: it contains whatever the first $i$ input elements were, and a later small element can still push them right. ("The $i$ largest, in sorted order" describes the **suffix** of bubble sort after $i$ passes.)',
    },
  ],
  takeaways: [
    'Measure sorts by comparisons and by writes; a swap is $3$ moves, a shift is $1$. Prove them correct with a loop invariant: initialization, maintenance, termination.',
    'Selection sort: the prefix holds the $i$ smallest elements in final order. Always $\\binom{n}{2}$ comparisons, at most $n - 1$ swaps; not stable, not adaptive.',
    'Insertion sort: the prefix is the first $i$ input elements, sorted. It makes exactly $\\text{inv}(a)$ shifts and runs in $\\Theta(n + \\text{inv}(a))$ — linear on nearly sorted data, about $n^2/4$ comparisons on random data.',
    'Every adjacent swap fixes exactly one inversion, so any neighbour-swapping sort needs $\\text{inv}(a)$ swaps: $\\Theta(n^2)$ on average. Fast sorts must move elements far.',
    'A stable sort keeps equal keys in their original order. Insertion and bubble sort are stable with a strict `>`; selection sort is not. Stable passes from least to most significant key sort by several keys.',
    'Use insertion sort for tiny or nearly sorted arrays (library sorts do), and `std::sort` / `std::stable_sort` for everything else.',
  ],
  reading: [
    {
      title: 'Sedgewick & Wayne — Algorithms, 4th ed., Section 2.1: Elementary Sorts',
      url: 'https://algs4.cs.princeton.edu/21elementary/',
      source: 'book',
      note: 'Selection and insertion sort with invariants, inversion counting and experiments comparing them.',
    },
    {
      title: 'VisuAlgo — Sorting',
      url: 'https://visualgo.net/en/sorting',
      source: 'other',
      note: 'Step through bubble, selection and insertion sort on your own inputs and watch the comparisons pile up.',
    },
    {
      title: 'Wikipedia — Inversion (discrete mathematics)',
      url: 'https://en.wikipedia.org/wiki/Inversion_(discrete_mathematics)',
      source: 'wikipedia',
      note: 'Inversions as a measure of disorder, with the link to adjacent transpositions and sorting.',
    },
  ],
};
