import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-merge-quick',
  title: 'Merge Sort and Quicksort',
  summary: 'The two great divide-and-conquer sorts, implemented: the merge invariant, top-down and bottom-up merge sort; Lomuto and Hoare partitions, random pivots and the inputs that break quicksort, three-way partitioning for duplicates, and how std::sort (introsort) and std::stable_sort are built.',
  minutes: 25,
  objectives: [
    'Merge two sorted runs with two pointers, state the merge invariant, and keep the merge stable',
    'Implement top-down and bottom-up merge sort with a single scratch buffer, and explain where each is preferred',
    'Trace Lomuto and Hoare partitions, state their invariants, and recurse on the correct subranges',
    'Identify worst-case inputs for quicksort (sorted input with an end pivot, many equal keys) and the fixes: random pivots, median-of-three, three-way partitioning',
    'Describe introsort as used by `std::sort`, the guarantees of `std::stable_sort`, and the strict-weak-ordering rule for comparators',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Merging: two pointers and an invariant',
      blocks: [
        {
          type: 'p',
          text: 'Discrete Math analyzed [[dm-merge-sort|merge sort]] — split in half, sort each half recursively, merge — and solved $T(n) = 2T(n/2) + n$ to get $\\Theta(n \\log n)$. Now we build it properly, starting with the step that does all the work: **merging** two sorted runs.',
        },
        {
          type: 'algo',
          view: 'array',
          code: `std::vector<int> out;
std::size_t i = lo, j = mid;
while (i < mid && j < hi) {
    if (a[i] <= a[j])   // tie: left first
        out.push_back(a[i++]);
    else out.push_back(a[j++]);
}
while (i < mid) out.push_back(a[i++]);
while (j < hi)  out.push_back(a[j++]);
std::ranges::copy(out, a.begin() + lo);`,
          interval: 1100,
          frames: [{"note": "Merge the sorted halves $a[0..4) = [2, 5, 8, 9]$ and $a[4..8) = [1, 3, 6, 7]$. Pointers $i$ and $j$ start at the front of each half.", "array": [2, 5, 8, 9, 1, 3, 6, 7], "pointers": [{"index": 0, "label": "i"}, {"index": 4, "label": "j", "color": "blue"}], "marks": [{"index": 0, "color": "orange"}, {"index": 4, "color": "blue"}], "vars": [["out", "[ ]"], ["comparisons", "0"]], "lines": []}, {"note": "$1 < 2$: take $1$ from the right half and advance $j$.", "array": [2, 5, 8, 9, 1, 3, 6, 7], "pointers": [{"index": 0, "label": "i"}, {"index": 5, "label": "j", "color": "blue"}], "marks": [{"index": 4, "color": "gray"}, {"index": 0, "color": "orange"}, {"index": 5, "color": "blue"}], "vars": [["out", "[1]"], ["comparisons", "1"]], "lines": [4, 6]}, {"note": "$2 \\le 3$: take $2$ from the left half and advance $i$.", "array": [2, 5, 8, 9, 1, 3, 6, 7], "pointers": [{"index": 1, "label": "i"}, {"index": 5, "label": "j", "color": "blue"}], "marks": [{"index": 0, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 1, "color": "orange"}, {"index": 5, "color": "blue"}], "vars": [["out", "[1, 2]"], ["comparisons", "2"]], "lines": [4, 5]}, {"note": "$3 < 5$: take $3$ from the right half and advance $j$.", "array": [2, 5, 8, 9, 1, 3, 6, 7], "pointers": [{"index": 1, "label": "i"}, {"index": 6, "label": "j", "color": "blue"}], "marks": [{"index": 0, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 1, "color": "orange"}, {"index": 6, "color": "blue"}], "vars": [["out", "[1, 2, 3]"], ["comparisons", "3"]], "lines": [4, 6]}, {"note": "$5 \\le 6$: take $5$ from the left half and advance $i$.", "array": [2, 5, 8, 9, 1, 3, 6, 7], "pointers": [{"index": 2, "label": "i"}, {"index": 6, "label": "j", "color": "blue"}], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 2, "color": "orange"}, {"index": 6, "color": "blue"}], "vars": [["out", "[1, 2, 3, 5]"], ["comparisons", "4"]], "lines": [4, 5]}, {"note": "$6 < 8$: take $6$ from the right half and advance $j$.", "array": [2, 5, 8, 9, 1, 3, 6, 7], "pointers": [{"index": 2, "label": "i"}, {"index": 7, "label": "j", "color": "blue"}], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "gray"}, {"index": 2, "color": "orange"}, {"index": 7, "color": "blue"}], "vars": [["out", "[1, 2, 3, 5, 6]"], ["comparisons", "5"]], "lines": [4, 6]}, {"note": "$7 < 8$: take $7$ from the right half and advance $j$.", "array": [2, 5, 8, 9, 1, 3, 6, 7], "pointers": [{"index": 2, "label": "i"}], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "gray"}, {"index": 7, "color": "gray"}, {"index": 2, "color": "orange"}], "vars": [["out", "[1, 2, 3, 5, 6, 7]"], ["comparisons", "6"]], "lines": [4, 6]}, {"note": "The right half is used up, so copy the rest of the left half ($8, 9$) with no more comparisons.", "array": [2, 5, 8, 9, 1, 3, 6, 7], "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "gray"}, {"index": 7, "color": "gray"}], "vars": [["out", "[1, 2, 3, 5, 6, 7, 8, 9]"], ["comparisons", "6"]], "lines": [8, 9]}, {"note": "Copy `out` back into $a$. 6 comparisons for $8$ elements: never more than $n - 1 = 7$.", "array": [1, 2, 3, 5, 6, 7, 8, 9], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}], "vars": [["comparisons", "6"]], "lines": [10]}],
          caption: 'Orange: the front of the left run ($i$). Blue: the front of the right run ($j$). Gray: already moved to `out`. Each comparison emits exactly one element.',
        },
        {
          type: 'theorem',
          name: 'Merge invariant',
          text: 'Before each comparison, `out` holds the $|\\texttt{out}|$ smallest elements of the two runs, in sorted order, and $a[i]$ and $a[j]$ are the smallest elements not yet taken from the left and right runs.',
        },
        {
          type: 'derivation',
          title: 'Why the invariant is maintained, and what it costs',
          steps: [
            { tex: '\\min(\\text{remaining}) = \\min(a[i], a[j])', why: 'Each run is sorted, so its smallest remaining element is at its front. The overall smallest remaining element is the smaller of the two fronts.' },
            { tex: '\\texttt{out} \\leftarrow \\texttt{out} + \\min(a[i], a[j])', why: 'Appending it keeps `out` sorted (it is $\\ge$ everything already in `out`, which were smaller elements) and keeps "`out` holds the smallest elements" true. Advancing that pointer restores the second half of the invariant.' },
            { tex: '\\text{one run empty} \\implies \\text{append the rest of the other}', why: 'Its remaining elements are sorted and all $\\ge$ everything in `out`, so no comparisons are needed.' },
            { tex: '\\text{comparisons} \\le n - 1, \\qquad \\ge \\min(n_L, n_R)', why: 'Each comparison emits one element and the last element is always emitted without one. At best one run is exhausted after $\\min(n_L, n_R)$ comparisons.' },
          ],
          result: 'Merging two sorted runs of total length $n$ costs $\\Theta(n)$ time and $\\Theta(n)$ extra space.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why `<=` makes merge sort stable',
          text: 'Every element of the left run came before every element of the right run in the input. On a tie, taking the **left** element first preserves that order. Write `a[i] < a[j]` instead and equal keys from the right run jump ahead: still sorted, no longer [[dsa-stable-sort|stable]]. `std::stable_sort` is a merge sort for exactly this reason.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'How many comparisons does the merge above make when merging the sorted runs $[3, 8, 9, 12]$ and $[1, 2, 4, 5]$?',
      label: 'comparisons $=$',
      answer: '5',
      hint: 'Simulate: compare the two fronts, emit the smaller, repeat until one run is empty.',
      explanation: '$3$ vs $1$: emit $1$. $3$ vs $2$: emit $2$. $3$ vs $4$: emit $3$. $8$ vs $4$: emit $4$. $8$ vs $5$: emit $5$. The right run is now empty, so $8, 9, 12$ are copied with no further comparisons: $5$ comparisons in total, between the minimum $\\min(4, 4) = 4$ and the maximum $n - 1 = 7$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Top-down merge sort in C++',
      blocks: [
        {
          type: 'algo',
          view: 'array',
          bars: true,
          interval: 1200,
          frames: [{"note": "Top-down merge sort on $[6, 3, 8, 1, 7, 2, 5, 4]$. Each frame shows one finished merge; the faded bars are outside the current call.", "array": [6, 3, 8, 1, 7, 2, 5, 4]}, {"note": "merge$(a[0..1), a[1..2))$ → $3, 6$ (1 comparison).", "array": [3, 6, 8, 1, 7, 2, 5, 4], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}], "dim": [2, 3, 4, 5, 6, 7], "vars": [["depth", "2"], ["comparisons", "1"]]}, {"note": "merge$(a[2..3), a[3..4))$ → $1, 8$ (1 comparison).", "array": [3, 6, 1, 8, 7, 2, 5, 4], "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}], "dim": [0, 1, 4, 5, 6, 7], "vars": [["depth", "2"], ["comparisons", "2"]]}, {"note": "merge$(a[0..2), a[2..4))$ → $1, 3, 6, 8$ (3 comparisons).", "array": [1, 3, 6, 8, 7, 2, 5, 4], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}], "dim": [4, 5, 6, 7], "vars": [["depth", "1"], ["comparisons", "5"]]}, {"note": "merge$(a[4..5), a[5..6))$ → $2, 7$ (1 comparison).", "array": [1, 3, 6, 8, 2, 7, 5, 4], "marks": [{"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "dim": [0, 1, 2, 3, 6, 7], "vars": [["depth", "2"], ["comparisons", "6"]]}, {"note": "merge$(a[6..7), a[7..8))$ → $4, 5$ (1 comparison).", "array": [1, 3, 6, 8, 2, 7, 4, 5], "marks": [{"index": 6, "color": "green"}, {"index": 7, "color": "green"}], "dim": [0, 1, 2, 3, 4, 5], "vars": [["depth", "2"], ["comparisons", "7"]]}, {"note": "merge$(a[4..6), a[6..8))$ → $2, 4, 5, 7$ (3 comparisons).", "array": [1, 3, 6, 8, 2, 4, 5, 7], "marks": [{"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}], "dim": [0, 1, 2, 3], "vars": [["depth", "1"], ["comparisons", "10"]]}, {"note": "merge$(a[0..4), a[4..8))$ → $1, 2, 3, 4, 5, 6, 7, 8$ (7 comparisons).", "array": [1, 2, 3, 4, 5, 6, 7, 8], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}], "dim": [], "vars": [["depth", "0"], ["comparisons", "17"]]}, {"note": "Sorted after 7 merges and 17 comparisons ($n\\log_2 n = 24$ is the upper bound for $n = 8$).", "array": [1, 2, 3, 4, 5, 6, 7, 8], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}], "vars": [["comparisons", "17"]]}],
          caption: 'Recursion order: the left half is sorted completely (three merges) before the right half starts. Faded bars are outside the subarray being merged.',
        },
        {
          type: 'code',
          title: 'merge_sort.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cmath>
#include <cstdio>
#include <random>
#include <vector>

long long cmp = 0;   // comparisons, for measuring

// Merge sorted a[lo, mid) and a[mid, hi) using the scratch buffer tmp.
void merge(std::vector<int>& a, std::vector<int>& tmp, std::size_t lo, std::size_t mid, std::size_t hi) {
    std::size_t i = lo, j = mid, k = lo;
    while (i < mid && j < hi)
        tmp[k++] = (++cmp, a[j] < a[i]) ? a[j++] : a[i++];   // ties take the left: stable
    while (i < mid) tmp[k++] = a[i++];
    while (j < hi) tmp[k++] = a[j++];
    std::copy(tmp.begin() + lo, tmp.begin() + hi, a.begin() + lo);
}

void sortTopDown(std::vector<int>& a, std::vector<int>& tmp, std::size_t lo, std::size_t hi) {
    if (hi - lo < 2) return;                 // 0 or 1 element: already sorted
    std::size_t mid = lo + (hi - lo) / 2;
    sortTopDown(a, tmp, lo, mid);
    sortTopDown(a, tmp, mid, hi);
    merge(a, tmp, lo, mid, hi);
}

void sortBottomUp(std::vector<int>& a) {
    std::vector<int> tmp(a.size());
    for (std::size_t w = 1; w < a.size(); w *= 2)              // run width 1, 2, 4, ...
        for (std::size_t lo = 0; lo + w < a.size(); lo += 2 * w)
            merge(a, tmp, lo, lo + w, std::min(lo + 2 * w, a.size()));
}

int main() {
    std::vector<int> small = {6, 3, 8, 1, 7, 2, 5, 4};
    std::vector<int> tmp(small.size());
    sortTopDown(small, tmp, 0, small.size());
    std::printf("n = 8: %lld comparisons\\n", cmp);

    std::mt19937 rng(3);
    for (std::size_t n : {1000, 100000}) {
        std::vector<int> a(n);
        for (int& x : a) x = int(rng() % 1000000);
        std::vector<int> b = a, ref = a;
        std::sort(ref.begin(), ref.end());

        cmp = 0;
        tmp.assign(n, 0);                    // one buffer, allocated once
        sortTopDown(a, tmp, 0, n);
        long long td = cmp;
        cmp = 0;
        sortBottomUp(b);
        std::printf("n = %zu: top-down %lld, bottom-up %lld, n log2 n = %.0f, correct: %s\\n", n, td, cmp,
                    n * std::log2(double(n)), a == ref && b == ref ? "yes" : "no");
    }
}`,
          output: `n = 8: 17 comparisons
n = 1000: top-down 8713, bottom-up 8731, n log2 n = 9966, correct: yes
n = 100000: top-down 1536699, bottom-up 1566850, n log2 n = 1660964, correct: yes`,
          annotations: [
            { lines: 13, text: 'The whole merge loop in one line: take from the right only if it is **strictly** smaller, so ties come from the left (stable). The comma operator counts the comparison.' },
            { lines: 20, text: 'Base case: subarrays of size $0$ or $1$ are sorted. Forgetting it means infinite recursion.' },
            { lines: 21, text: '`lo + (hi - lo) / 2`, not `(lo + hi) / 2`: the sum can overflow for large indices (a famous bug that sat in Java\'s binary search for nine years).' },
            { lines: '29-31', text: 'Bottom-up: merge runs of width $1$, then $2$, $4$, … The last run may be short, hence `std::min`. See the next card.' },
            { lines: 48, text: 'One scratch buffer, allocated once and reused by every merge. Allocating inside `merge` would cost $n$ allocations.' },
          ],
        },
        {
          type: 'list',
          items: [
            '**Always $\\Theta(n \\log n)$**: $\\lceil \\log_2 n \\rceil$ levels of recursion, each merging $n$ elements in total. Its comparisons stay below $n\\log_2 n$ (here $8713$ against $9966$).',
            '**$\\Theta(n)$ extra memory** for the buffer: merge sort on arrays is not [[dsa-in-place|in place]].',
            '**Sequential access**: merging streams through memory front to back, which caches and prefetchers love.',
            '**Two cheap upgrades**: hand subarrays below about $16$ elements to insertion sort, and skip the merge entirely when `a[mid - 1] <= a[mid]` (the halves are already in order), which makes the sort linear on sorted input.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'Top-down merge sort (sort the left half, then the right half, then merge) runs on an array of $8$ elements. Put its merge calls in the order they execute.',
      lines: [
        'merge $[0, 1)$ with $[1, 2)$',
        'merge $[2, 3)$ with $[3, 4)$',
        'merge $[0, 2)$ with $[2, 4)$',
        'merge $[4, 5)$ with $[5, 6)$',
        'merge $[6, 7)$ with $[7, 8)$',
        'merge $[4, 6)$ with $[6, 8)$',
        'merge $[0, 4)$ with $[4, 8)$',
      ],
      distractors: ['merge $[1, 2)$ with $[2, 3)$'],
      hint: 'A merge runs as soon as both of its halves are sorted, and the left half is always finished before the right half starts.',
      explanation: 'The recursion finishes the whole left half first: merge the singletons $[0,1), [1,2)$, then $[2,3), [3,4)$, then the two pairs into $[0, 4)$. Then the right half does the same with $[4, 8)$, and the last merge combines the halves. This depth-first order is exactly the frame order of the animation. Runs always split at the midpoint, so $[1,2) + [2,3)$ never happens.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Bottom-up merge sort',
      blocks: [
        {
          type: 'p',
          text: 'The recursion in top-down merge sort only decides **which** runs to merge. Bottom-up merge sort skips it: treat the array as $n$ runs of width $1$, merge neighbouring pairs into runs of width $2$, then $4$, $8$, …, until one run remains. That is $\\lceil \\log_2 n \\rceil$ passes, each a single sweep over the array.',
        },
        {
          type: 'algo',
          view: 'array',
          bars: true,
          interval: 1500,
          frames: [{"note": "Bottom-up merge sort: no recursion. Treat each element as a sorted run of width $1$, then merge neighbouring runs.", "array": [6, 3, 8, 1, 7, 2, 5, 4], "vars": [["width", "1"]]}, {"note": "Width $1$: merge pairs of runs of width $1$. Runs of width $2$ now: $[3, 6]$ $[1, 8]$ $[2, 7]$ $[4, 5]$.", "array": [3, 6, 1, 8, 2, 7, 4, 5], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "purple"}, {"index": 3, "color": "purple"}, {"index": 4, "color": "orange"}, {"index": 5, "color": "orange"}, {"index": 6, "color": "teal"}, {"index": 7, "color": "teal"}], "vars": [["width", "1"], ["comparisons this pass", "4"], ["total", "4"]]}, {"note": "Width $2$: merge pairs of runs of width $2$. Runs of width $4$ now: $[1, 3, 6, 8]$ $[2, 4, 5, 7]$.", "array": [1, 3, 6, 8, 2, 4, 5, 7], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "purple"}, {"index": 5, "color": "purple"}, {"index": 6, "color": "purple"}, {"index": 7, "color": "purple"}], "vars": [["width", "2"], ["comparisons this pass", "6"], ["total", "10"]]}, {"note": "Width $4$: merge pairs of runs of width $4$. Runs of width $8$ now: $[1, 2, 3, 4, 5, 6, 7, 8]$.", "array": [1, 2, 3, 4, 5, 6, 7, 8], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}], "vars": [["width", "4"], ["comparisons this pass", "7"], ["total", "17"]]}, {"note": "$\\log_2 8 = 3$ passes, each a sequential sweep over the whole array; 17 comparisons in all.", "array": [1, 2, 3, 4, 5, 6, 7, 8], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}], "vars": [["total comparisons", "17"]]}],
          caption: 'Colors group the runs after each pass. Same merges as top-down (for $n = 8$), in a different order: all width-$1$ merges first.',
        },
        {
          type: 'table',
          headers: ['Where bottom-up shines', 'Why'],
          rows: [
            ['Linked lists', 'Merging lists only relinks nodes, so no buffer is needed: $O(n \\log n)$ time, $O(1)$ extra space. `std::list::sort` is a merge sort.'],
            ['External sorting', 'Data bigger than RAM: sort chunks that fit in memory into runs on disk, then merge runs in sequential passes. Disks and SSDs reward sequential I/O.'],
            ['No recursion', 'No call-stack depth to worry about, which matters on platforms with small stacks (consoles, job-system worker threads).'],
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Natural merge sort and Timsort',
          text: 'Instead of starting from runs of width $1$, a *natural* merge sort first finds the runs that are already sorted in the input and merges those. Timsort (Python, and Java\'s sort for objects) refines this idea, so it is $O(n)$ on sorted or reversed input and fast on "mostly sorted" data such as a high-score table with a few new entries.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Quicksort\'s partition: Lomuto',
      blocks: [
        {
          type: 'p',
          text: '[[dm-quicksort|Quicksort]] does the opposite of merge sort: the hard work comes **before** the recursion. **Partition** the array around a pivot $p$ — smaller elements to the left, larger to the right — then sort the two sides recursively. No merge step and no buffer are needed. The simplest scheme is the [[dsa-lomuto-partition|Lomuto partition]], with the last element as pivot:',
        },
        {
          type: 'algo',
          view: 'array',
          code: `int p = a[hi];            // pivot
int i = lo;               // a[lo..i) < p
for (int j = lo; j < hi; ++j)
    if (a[j] < p)
        std::swap(a[i++], a[j]);
std::swap(a[i], a[hi]);   // final place
return i;`,
          interval: 1100,
          frames: [{"note": "Lomuto partition with pivot $p = a[hi] = 5$. Invariant: $a[lo..i) < p$ and $a[i..j) \\ge p$.", "array": [7, 2, 9, 4, 1, 8, 5], "marks": [{"index": 6, "color": "purple"}], "pointers": [{"index": 0, "label": "i"}, {"index": 0, "label": "j", "color": "blue"}], "vars": [["comparisons", "0"], ["swaps", "0"]], "lines": [1, 2]}, {"note": "$a[0] = 7 \\ge 5$: leave it; the big block grows.", "array": [7, 2, 9, 4, 1, 8, 5], "marks": [{"index": 0, "color": "blue"}, {"index": 6, "color": "purple"}], "pointers": [{"index": 0, "label": "i"}, {"index": 0, "label": "j", "color": "blue"}], "vars": [["comparisons", "1"], ["swaps", "0"]], "lines": [3, 4]}, {"note": "$a[1] = 2 < 5$: swap it with $a[0] = 7$, the first big element, and advance $i$.", "array": [2, 7, 9, 4, 1, 8, 5], "marks": [{"index": 0, "color": "red"}, {"index": 1, "color": "red"}, {"index": 6, "color": "purple"}], "pointers": [{"index": 1, "label": "i"}, {"index": 1, "label": "j", "color": "blue"}], "vars": [["comparisons", "2"], ["swaps", "1"]], "lines": [3, 4, 5]}, {"note": "$a[2] = 9 \\ge 5$: leave it; the big block grows.", "array": [2, 7, 9, 4, 1, 8, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "blue"}, {"index": 6, "color": "purple"}], "pointers": [{"index": 1, "label": "i"}, {"index": 2, "label": "j", "color": "blue"}], "vars": [["comparisons", "3"], ["swaps", "1"]], "lines": [3, 4]}, {"note": "$a[3] = 4 < 5$: swap it with $a[1] = 7$, the first big element, and advance $i$.", "array": [2, 4, 9, 7, 1, 8, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "red"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "red"}, {"index": 6, "color": "purple"}], "pointers": [{"index": 2, "label": "i"}, {"index": 3, "label": "j", "color": "blue"}], "vars": [["comparisons", "4"], ["swaps", "2"]], "lines": [3, 4, 5]}, {"note": "$a[4] = 1 < 5$: swap it with $a[2] = 9$, the first big element, and advance $i$.", "array": [2, 4, 1, 7, 9, 8, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "red"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "red"}, {"index": 6, "color": "purple"}], "pointers": [{"index": 3, "label": "i"}, {"index": 4, "label": "j", "color": "blue"}], "vars": [["comparisons", "5"], ["swaps", "3"]], "lines": [3, 4, 5]}, {"note": "$a[5] = 8 \\ge 5$: leave it; the big block grows.", "array": [2, 4, 1, 7, 9, 8, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "purple"}], "pointers": [{"index": 3, "label": "i"}, {"index": 5, "label": "j", "color": "blue"}], "vars": [["comparisons", "6"], ["swaps", "3"]], "lines": [3, 4]}, {"note": "Finally swap the pivot into $a[i]$. $5$ is now at index $3$, its final sorted position: everything left is smaller, everything right is at least $5$.", "array": [2, 4, 1, 5, 9, 8, 7], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "purple"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "gray"}], "pointers": [{"index": 3, "label": "i"}], "vars": [["comparisons", "6"], ["swaps", "4"]], "lines": [6, 7]}],
          caption: 'Green: the "$< p$" block, ending just before $i$. Gray: the "$\\ge p$" block. Purple: the pivot. White cells are unseen. The $j$ arrow marks the element just examined.',
        },
        {
          type: 'theorem',
          name: 'Lomuto invariant (before each iteration of the loop)',
          tex: 'a[lo..i) < p, \\qquad a[i..j) \\ge p, \\qquad a[j..hi) \\text{ unseen}, \\qquad a[hi] = p',
          text: 'At the end $j = hi$, so swapping $a[i]$ (the first $\\ge p$ element) with the pivot puts $p$ at index $i$ with everything smaller to its left and everything else to its right: $p$ is in its **final sorted position**. Recurse on $[lo, i-1]$ and $[i+1, hi]$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the swap in the loop is correct',
          text: 'When $a[j] < p$, the block $a[i..j)$ of "big" elements is in the way. Swapping $a[j]$ with $a[i]$ — the **first** big element — moves the small element to the end of the small block and the big element to the end of the big block. Both blocks shift right by one and both invariants hold again. (When the big block is empty, $i = j$ and the swap is a harmless self-swap.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Run one Lomuto partition (pivot $=$ last element) on $[3, 8, 2, 5, 1, 4]$. At which index does the pivot end up? (Indices start at $0$.)',
      label: 'index $=$',
      answer: '3',
      hint: 'The pivot\'s final index equals the number of elements smaller than it.',
      explanation: 'The pivot is $4$. Scanning: $3 < 4$ (swap into $i = 0$), $8$ stays, $2 < 4$ (swap into $i = 1$), $5$ stays, $1 < 4$ (swap into $i = 2$). Now $i = 3$, and the final swap puts $4$ there: $[3, 2, 1, 4, 8, 5]$. In general the pivot lands at index $lo + (\\text{number of elements} < p)$ — here $3$ — which is exactly its position in the sorted array.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Hoare\'s partition: two pointers from both ends',
      blocks: [
        {
          type: 'p',
          text: 'Tony Hoare\'s original 1961 scheme scans from **both** ends. $i$ moves right until it finds an element $\\ge p$; $j$ moves left until it finds an element $\\le p$. Both are on the wrong side, so swap them and continue. When the pointers cross, the array is split.',
        },
        {
          type: 'algo',
          view: 'array',
          code: `int p = a[lo + (hi - lo) / 2];  // value
int i = lo - 1, j = hi + 1;
while (true) {
    do ++i; while (a[i] < p);
    do --j; while (a[j] > p);
    if (i >= j) return j;
    std::swap(a[i], a[j]);
}`,
          interval: 1300,
          frames: [{"note": "Hoare partition, pivot $p = a[3] = 4$ (the middle). $i$ scans right for a value $\\ge p$, $j$ scans left for a value $\\le p$.", "array": [7, 2, 9, 4, 1, 8, 5], "marks": [{"index": 3, "color": "purple"}], "vars": [["comparisons", "0"], ["swaps", "0"]], "lines": [1, 2]}, {"note": "$i$ stops at $7$ (index $0$, $\\ge 4$); $j$ stops at $1$ (index $4$, $\\le 4$). Both are on the wrong side.", "array": [7, 2, 9, 4, 1, 8, 5], "marks": [{"index": 0, "color": "orange"}, {"index": 4, "color": "blue"}], "pointers": [{"index": 0, "label": "i"}, {"index": 4, "label": "j", "color": "blue"}], "vars": [["comparisons", "4"], ["swaps", "0"]], "lines": [4, 5]}, {"note": "Swap them: now $a[0] = 1$ and $a[4] = 7$.", "array": [1, 2, 9, 4, 7, 8, 5], "marks": [{"index": 0, "color": "red"}, {"index": 4, "color": "red"}], "pointers": [{"index": 0, "label": "i"}, {"index": 4, "label": "j", "color": "blue"}], "vars": [["comparisons", "4"], ["swaps", "1"]], "lines": [7]}, {"note": "$i$ stops at $9$ (index $2$, $\\ge 4$); $j$ stops at $4$ (index $3$, $\\le 4$). Both are on the wrong side.", "array": [1, 2, 9, 4, 7, 8, 5], "marks": [{"index": 2, "color": "orange"}, {"index": 3, "color": "blue"}], "pointers": [{"index": 2, "label": "i"}, {"index": 3, "label": "j", "color": "blue"}], "vars": [["comparisons", "7"], ["swaps", "1"]], "lines": [4, 5]}, {"note": "Swap them: now $a[2] = 4$ and $a[3] = 9$.", "array": [1, 2, 4, 9, 7, 8, 5], "marks": [{"index": 2, "color": "red"}, {"index": 3, "color": "red"}], "pointers": [{"index": 2, "label": "i"}, {"index": 3, "label": "j", "color": "blue"}], "vars": [["comparisons", "7"], ["swaps", "2"]], "lines": [7]}, {"note": "$i$ stops at $3$, $j$ stops at $2$: the pointers have met or crossed, so return $j = 2$. Left part $a[0..2]$ is all $\\le 4$, right part $a[3..6]$ is all $\\ge 4$.", "array": [1, 2, 4, 9, 7, 8, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "gray"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "gray"}], "pointers": [{"index": 3, "label": "i"}, {"index": 2, "label": "j", "color": "blue"}], "vars": [["comparisons", "9"], ["swaps", "2"]], "lines": [6]}],
          caption: 'Only $2$ swaps, where Lomuto needed $4$ on the same array. Here the pivot happens to end at index $j$; in general it need not.',
        },
        {
          type: 'list',
          items: [
            '**Invariant**: $a[lo..i) \\le p$ and $a(j..hi] \\ge p$. Each swap extends both blocks.',
            '**No bounds checks** in the inner loops: the first pass stops at the pivot itself at the latest, and after a swap the swapped elements act as sentinels that stop the next scan.',
            '**Fewer swaps**: on random input, about a third as many as Lomuto, since it swaps only pairs that are both misplaced.',
            '**Equal keys are split evenly**: both scans stop on keys equal to $p$, so an all-equal array splits in the middle (Lomuto puts everything on one side and goes quadratic).',
            '**The catch**: the return value $j$ is a split point, not the pivot\'s position. Recurse on $[lo, j]$ and $[j+1, hi]$.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two classic Hoare bugs',
          text: 'Recursing on $[lo, j - 1]$ (copied from Lomuto) can skip an unsorted element. And choosing the pivot as `a[hi]` with this split can loop forever: if $a[hi]$ is the unique maximum, the scans meet at $j = hi$ and the recursion on $[lo, hi]$ repeats the same call. Use the middle element (as here) or a random one.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'This quicksort uses the Hoare partition from the previous card (`hoare` returns $j$ with $a[lo..j] \\le p \\le a[j+1..hi]$). On $[2, 3, 1]$ it returns $[2, 1, 3]$. Tap the buggy line.',
      lines: [
        '`void quickHoare(std::vector<int>& a, int lo, int hi) {`',
        '`    if (lo >= hi) return;`',
        '`    int j = hoare(a, lo, hi);`',
        '`    quickHoare(a, lo, j - 1);`',
        '`    quickHoare(a, j + 1, hi);`',
        '`}`',
      ],
      errorLines: [4],
      explanation: 'Hoare\'s $j$ is a split point, not the pivot\'s final position, so $a[j]$ belongs to the left part and must be sorted with it. On $[2, 3, 1]$ the pivot is $3$: the scans swap $3$ and $1$, giving $[2, 1, 3]$, and return $j = 1$. The left part is $[2, 1]$ (indices $0..1$), but `quickHoare(a, 0, 0)` sorts only $[2]$, and the $1$ at index $1$ is never touched. Fix: `quickHoare(a, lo, j);`. (The `j - 1` version is correct only for Lomuto, whose returned index holds the pivot in its final place.)',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Pivots, worst cases and the expected bound',
      blocks: [
        {
          type: 'p',
          text: 'Discrete Math showed that with a **uniformly random** pivot, quicksort makes about $2n \\ln n \\approx 1.39\\,n\\log_2 n$ comparisons on average, because $z_i$ and $z_j$ are compared with probability $\\frac{2}{j - i + 1}$. The crucial word is *random*: the expectation is over the algorithm\'s coin flips, so it holds for **every** input. A fixed pivot rule has inputs that defeat it.',
        },
        {
          type: 'table',
          headers: ['Pivot rule / scheme', 'Input that breaks it', 'Comparisons'],
          rows: [
            ['first or last element', 'already sorted (or reversed) — very common in practice', '$\\frac{n(n-1)}{2}$'],
            ['Lomuto, any pivot', 'all keys equal: every partition is $0$ vs $n - 1$', '$\\frac{n(n-1)}{2}$'],
            ['median-of-three', 'specially built "median-of-3 killer" sequences', '$\\Theta(n^2)$'],
            ['random pivot', 'none — but the expected bound needs an unpredictable generator', 'expected $\\approx 1.39\\,n\\log_2 n$'],
          ],
        },
        {
          type: 'derivation',
          title: 'Sorted input, last-element pivot',
          steps: [
            { tex: 'p = a[hi] = \\max', why: 'In a sorted array the last element is the largest.' },
            { tex: '\\text{partition: } n - 1 \\text{ comparisons, split } (n - 1, 0)', why: 'Every element is $< p$, so the pivot stays at the end and the recursion continues on all the rest.' },
            { tex: 'C(n) = C(n-1) + (n - 1), \\quad C(1) = 0', why: 'One partition, then one recursive call on $n - 1$ elements (still sorted!).' },
            { tex: 'C(n) = (n-1) + (n-2) + \\cdots + 1 = \\frac{n(n-1)}{2}', why: 'Unroll the recurrence. The recursion depth is $n - 1$ too: on a million elements, a stack overflow before the time even matters.' },
          ],
          result: 'Quadratic time and linear stack depth on the most common "special" input of all.',
        },
        {
          type: 'graph',
          x: [0, 400],
          y: [0, 20000],
          xStep: 50,
          yStep: 2000,
          functions: [
            { expr: 'x(x-1)/2', label: 'worst case $\\frac{n(n-1)}{2}$', color: 'red' },
            { expr: '1.39 x log_2(x)', label: 'random pivot, expected $\\approx 1.39\\,n\\log_2 n$', color: 'blue', domain: [1, 400] },
            { expr: 'x log_2(x)', label: '$n \\log_2 n$', color: 'green', dashed: true, domain: [1, 400] },
          ],
          vlines: [{ x: 'n', label: 'n', color: 'gray' }],
          sliders: [{ name: 'n', min: 10, max: 1000, step: 10, value: 200, label: 'array size $n$ (the readouts work past the window)' }],
          readouts: [
            { label: '$\\frac{n(n-1)}{2} =$', expr: 'n(n-1)/2', digits: 0 },
            { label: '$1.39\\,n\\log_2 n \\approx$', expr: '1.39 n log_2(n)', digits: 0 },
            { label: 'ratio', expr: '(n(n-1)/2)/(1.39 n log_2(n))', digits: 1 },
          ],
          caption: 'The quadratic curve leaves the window near $n = 200$ while the $n \\log n$ curves have barely started. Push the slider to $1000$: the worst case is about $36$ times the expected cost, and at a million elements the ratio would be about $18\\,000$.',
        },
        {
          type: 'code',
          title: 'quicksort_variants.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>
#include <utility>
#include <vector>

long long cmp = 0, swp = 0;   // comparisons and swaps
std::mt19937 rng(5);

// Lomuto: pivot = a[hi]. Returns the pivot's final index.
int lomuto(std::vector<int>& a, int lo, int hi) {
    int p = a[hi], i = lo;
    for (int j = lo; j < hi; ++j)
        if (++cmp, a[j] < p) { std::swap(a[i++], a[j]); ++swp; }
    std::swap(a[i], a[hi]); ++swp;
    return i;
}

void quickLomuto(std::vector<int>& a, int lo, int hi) {   // sorts a[lo..hi]
    if (lo >= hi) return;
    int p = lomuto(a, lo, hi);
    quickLomuto(a, lo, p - 1);
    quickLomuto(a, p + 1, hi);
}

// Hoare with a random pivot value. Returns j: a[lo..j] <= p <= a[j+1..hi].
int hoare(std::vector<int>& a, int lo, int hi) {
    int p = a[lo + int(rng() % unsigned(hi - lo + 1))];
    int i = lo - 1, j = hi + 1;
    while (true) {
        do ++i; while (++cmp, a[i] < p);
        do --j; while (++cmp, a[j] > p);
        if (i >= j) return j;
        std::swap(a[i], a[j]); ++swp;
    }
}

void quickHoare(std::vector<int>& a, int lo, int hi) {
    if (lo >= hi) return;
    int j = hoare(a, lo, hi);
    quickHoare(a, lo, j);                    // j, not j - 1
    quickHoare(a, j + 1, hi);
}

// Three-way (Dijkstra) with a random pivot: < v | == v | > v.
void quick3(std::vector<int>& a, int lo, int hi) {
    if (lo >= hi) return;
    std::swap(a[lo], a[lo + int(rng() % unsigned(hi - lo + 1))]);
    int v = a[lo], lt = lo, i = lo + 1, gt = hi;
    while (i <= gt) {
        if (++cmp, a[i] < v) { std::swap(a[lt++], a[i++]); ++swp; }
        else if (++cmp, a[i] > v) { std::swap(a[i], a[gt--]); ++swp; }
        else ++i;
    }
    quick3(a, lo, lt - 1);                   // the block a[lt..gt] is done
    quick3(a, gt + 1, hi);
}

template <typename Sort>
void run(std::vector<int> a, Sort sort) {   // by value: each sort gets a fresh copy
    cmp = swp = 0;
    sort(a, 0, int(a.size()) - 1);
    for (std::size_t k = 1; k < a.size(); ++k)
        if (a[k - 1] > a[k]) std::printf("NOT SORTED\\n");
    std::printf("  %8lld /%8lld", cmp, swp);
}

int main() {
    const int n = 2000;
    std::vector<int> random(n), sorted(n), equal(n, 7), few(n);
    for (int i = 0; i < n; ++i) {
        random[i] = int(rng() % 1000000);
        sorted[i] = i;
        few[i] = int(rng() % 4);             // only 4 distinct values
    }
    std::printf("%-9s%20s%20s%20s\\n", "cmp/swap", "Lomuto", "Hoare+random", "3-way+random");
    for (auto [name, v] : {std::pair{"random", &random}, std::pair{"sorted", &sorted},
                           std::pair{"equal", &equal}, std::pair{"4 values", &few}}) {
        std::printf("%-9s", name);
        run(*v, quickLomuto);
        run(*v, quickHoare);
        run(*v, quick3);
        std::printf("\\n");
    }
}`,
          output: `cmp/swap               Lomuto        Hoare+random        3-way+random
random        24276 /   13399     33050 /    5168     35660 /   24610
sorted      1999000 / 2000999     35317 /       0     36399 /   23995
equal       1999000 /    1999     25726 /   10864      3998 /       0
4 values     503717 /    3986     27529 /    9479      8512 /    2514`,
          annotations: [
            { lines: '10-16', text: 'Lomuto with the last element as pivot. Note it counts self-swaps: on sorted input every element is "small" and is swapped with itself.' },
            { lines: '26-35', text: 'Hoare with a random pivot **value**. Its comparison count includes both scans; its swap count is far lower than Lomuto\'s.' },
            { lines: 40, text: 'Hoare recursion: $[lo, j]$ and $[j+1, hi]$.' },
            { lines: '45-56', text: 'Three-way partitioning (next card). The equal block $a[lt..gt]$ is excluded from both recursive calls.' },
            { lines: '69-74', text: 'Test inputs: random, sorted, all equal, and only four distinct values.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Keep the stack logarithmic',
          text: 'Even with good pivots, an unlucky run can recurse deeply. The standard fix: recurse into the **smaller** side and loop (tail call) on the larger one. Each recursive call then handles at most half the elements, so the stack depth is at most $\\log_2 n$ in every case.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Quicksort with the Lomuto partition and the **last** element as pivot sorts the already-sorted array $[1, 2, 3, \\dots, 10]$. How many element comparisons does it make in total?',
      label: 'comparisons $=$',
      answer: '45',
      hint: 'Each partition of $m$ elements makes $m - 1$ comparisons and leaves a subproblem of size $m - 1$.',
      explanation: 'The pivot is always the maximum, so the partitions are on $10, 9, \\dots, 2$ elements, costing $9 + 8 + \\cdots + 1 = \\frac{10 \\cdot 9}{2} = 45$ comparisons — exactly as many as comparing every pair. A random pivot would need about $2(n+1)H_n - 4n \\approx 24$ on average for $n = 10$, and the gap grows quadratically.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Three-way partitioning for duplicate keys',
      blocks: [
        {
          type: 'p',
          text: 'Real data is full of duplicates: sorting a million entities by type, team or material ID means huge blocks of equal keys. A two-way partition keeps re-sorting those blocks. A [[dsa-three-way-partition|three-way partition]] (Dijkstra\'s "Dutch national flag" problem) splits into **less than**, **equal to** and **greater than** the pivot in one pass, and the equal block is finished for good.',
        },
        {
          type: 'algo',
          view: 'array',
          code: `int v = a[lo];
int lt = lo, i = lo + 1, gt = hi;
while (i <= gt) {
    if (a[i] < v)
        std::swap(a[lt++], a[i++]);
    else if (a[i] > v)
        std::swap(a[i], a[gt--]);
    else ++i;
}
// then sort a[lo..lt) and a(gt..hi]`,
          interval: 1200,
          frames: [{"note": "Three-way partition around $v = 3$. Invariant: $a[lo..lt) < v$, $a[lt..i) = v$, $a[i..gt]$ unseen, $a(gt..hi] > v$.", "array": [3, 5, 3, 1, 3, 6, 2, 3], "marks": [{"index": 0, "color": "purple"}], "pointers": [{"index": 0, "label": "lt", "color": "purple"}, {"index": 1, "label": "i"}, {"index": 7, "label": "gt", "color": "blue"}], "lines": [1, 2]}, {"note": "$a[i] = 5 > 3$: swap it with $a[gt]$ and shrink $gt$. Do **not** advance $i$: the value swapped in is unseen.", "array": [3, 3, 3, 1, 3, 6, 2, 5], "marks": [{"index": 0, "color": "purple"}, {"index": 7, "color": "gray"}], "pointers": [{"index": 0, "label": "lt", "color": "purple"}, {"index": 1, "label": "i"}, {"index": 6, "label": "gt", "color": "blue"}], "lines": [6, 7]}, {"note": "$a[i] = 3 = v$: just advance $i$.", "array": [3, 3, 3, 1, 3, 6, 2, 5], "marks": [{"index": 0, "color": "purple"}, {"index": 1, "color": "purple"}, {"index": 7, "color": "gray"}], "pointers": [{"index": 0, "label": "lt", "color": "purple"}, {"index": 2, "label": "i"}, {"index": 6, "label": "gt", "color": "blue"}], "lines": [8]}, {"note": "$a[i] = 3 = v$: just advance $i$.", "array": [3, 3, 3, 1, 3, 6, 2, 5], "marks": [{"index": 0, "color": "purple"}, {"index": 1, "color": "purple"}, {"index": 2, "color": "purple"}, {"index": 7, "color": "gray"}], "pointers": [{"index": 0, "label": "lt", "color": "purple"}, {"index": 3, "label": "i"}, {"index": 6, "label": "gt", "color": "blue"}], "lines": [8]}, {"note": "$a[i] = 1 < 3$: swap it with $a[lt]$, then advance both $lt$ and $i$.", "array": [1, 3, 3, 3, 3, 6, 2, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "purple"}, {"index": 2, "color": "purple"}, {"index": 3, "color": "purple"}, {"index": 7, "color": "gray"}], "pointers": [{"index": 1, "label": "lt", "color": "purple"}, {"index": 4, "label": "i"}, {"index": 6, "label": "gt", "color": "blue"}], "lines": [4, 5]}, {"note": "$a[i] = 3 = v$: just advance $i$.", "array": [1, 3, 3, 3, 3, 6, 2, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "purple"}, {"index": 2, "color": "purple"}, {"index": 3, "color": "purple"}, {"index": 4, "color": "purple"}, {"index": 7, "color": "gray"}], "pointers": [{"index": 1, "label": "lt", "color": "purple"}, {"index": 5, "label": "i"}, {"index": 6, "label": "gt", "color": "blue"}], "lines": [8]}, {"note": "$a[i] = 6 > 3$: swap it with $a[gt]$ and shrink $gt$. Do **not** advance $i$: the value swapped in is unseen.", "array": [1, 3, 3, 3, 3, 2, 6, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "purple"}, {"index": 2, "color": "purple"}, {"index": 3, "color": "purple"}, {"index": 4, "color": "purple"}, {"index": 6, "color": "gray"}, {"index": 7, "color": "gray"}], "pointers": [{"index": 1, "label": "lt", "color": "purple"}, {"index": 5, "label": "i"}, {"index": 5, "label": "gt", "color": "blue"}], "lines": [6, 7]}, {"note": "$a[i] = 2 < 3$: swap it with $a[lt]$, then advance both $lt$ and $i$. Now $i > gt$: done.", "array": [1, 2, 3, 3, 3, 3, 6, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "purple"}, {"index": 3, "color": "purple"}, {"index": 4, "color": "purple"}, {"index": 5, "color": "purple"}, {"index": 6, "color": "gray"}, {"index": 7, "color": "gray"}], "pointers": [{"index": 2, "label": "lt", "color": "purple"}, {"index": 6, "label": "i"}, {"index": 5, "label": "gt", "color": "blue"}], "lines": [4, 5]}, {"note": "Result: $<3$ in $a[0..2)$, all four $3$s in $a[2..5]$, $>3$ after. Recurse only on the outer parts; the equal block is finished.", "array": [1, 2, 3, 3, 3, 3, 6, 5], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "purple"}, {"index": 3, "color": "purple"}, {"index": 4, "color": "purple"}, {"index": 5, "color": "purple"}, {"index": 6, "color": "gray"}, {"index": 7, "color": "gray"}], "pointers": [{"index": 2, "label": "lt", "color": "purple"}, {"index": 5, "label": "gt", "color": "blue"}]}],
          caption: 'Green: $< v$. Purple: $= v$. Gray: $> v$. White: unseen, between $i$ and $gt$.',
        },
        {
          type: 'theorem',
          name: 'Three-way invariant',
          tex: 'a[lo..lt) < v, \\qquad a[lt..i) = v, \\qquad a[i..gt] \\text{ unseen}, \\qquad a(gt..hi] > v',
          text: 'Each step shrinks the unseen region by one, so the loop runs $hi - lo$ times. When $i > gt$, the array is split into three blocks and only the outer two need sorting.',
        },
        {
          type: 'p',
          text: 'In `quicksort_variants.cpp` above, three-way quicksort sorts $2000$ equal keys with $3998$ comparisons — one pass, two comparisons per element — and only $4$ distinct values in $8512$, while Lomuto needs about $2$ million and $500\\,000$. With $k$ distinct keys the expected cost is $O(n \\log k)$ rather than $O(n \\log n)$. The cost: up to two comparisons per element instead of one, so on all-distinct data it is a little slower.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'You must sort $10^6$ entity records by **team ID**, and there are only $8$ teams. Which quicksort partition scheme handles this input best?',
      options: [
        { text: 'Lomuto partition with a random pivot', why: 'Every element equal to the pivot goes to the "$\\ge p$" side, so each block of equal keys is partitioned $0$ vs $m - 1$ again and again: quadratic within each team.' },
        { text: 'Hoare partition with a random pivot', why: 'Correct and $O(n \\log n)$: both scans stop on equal keys, so equal blocks split evenly. But it keeps re-partitioning blocks that are already all equal.' },
        { text: 'Three-way partition with a random pivot', correct: true, why: 'Each partition removes **all** copies of the pivot\'s team for good. After about $8$ rounds of partitioning, every team block is finished: roughly $O(n \\log 8)$ work.' },
        { text: 'Lomuto partition with the last element as pivot', why: 'Combines the duplicate-key problem with the sorted-input problem: quadratic.' },
      ],
      explanation: 'With few distinct keys, the winning move is to stop sorting equal keys once they are grouped. Three-way partitioning puts every key equal to the pivot into a middle block that no recursive call touches, so the recursion depth is governed by the number of distinct keys ($8$), not by $n$. (With keys this small, a counting sort — next lesson — would be even better: one pass to count, one to place.)',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'How std::sort and std::stable_sort are built',
      blocks: [
        {
          type: 'p',
          text: 'The C++ standard library does not name an algorithm, but since C++11 it requires `std::sort` to make $O(n \\log n)$ comparisons **in the worst case**. Plain quicksort cannot promise that, so libstdc++ (GCC) and Microsoft\'s library implement `std::sort` as [[dsa-introsort|introsort]], and libc++ (Clang) uses a closely related hybrid:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Quicksort', text: 'Partition (Hoare-style, unguarded inner loops) around a median-of-three pivot.' },
            { title: 'Depth limit', text: 'Track the recursion depth. If it exceeds $2\\lfloor \\log_2 n \\rfloor$, the pivots are going badly: switch that subarray to [[dsa-heapsort|heapsort]], which is $O(n \\log n)$ in the worst case.' },
            { title: 'Small ranges', text: 'Stop recursing on ranges of $16$ elements or fewer. One final insertion sort pass over the whole array fixes them all up: the array is nearly sorted, so it is linear.' },
          ],
        },
        {
          type: 'table',
          headers: ['Function', 'Algorithm (typical)', 'Guarantee', 'Stable', 'Extra memory'],
          rows: [
            ['`std::sort`', 'introsort', '$O(n \\log n)$ worst case', 'no', '$O(\\log n)$ stack'],
            ['`std::stable_sort`', 'merge sort (insertion sort on small runs)', '$O(n \\log n)$; $O(n \\log^2 n)$ if no buffer can be allocated', 'yes', '$O(n)$ buffer'],
            ['`std::partial_sort`', 'heap of the $k$ smallest', '$O(n \\log k)$', 'no', '$O(1)$'],
            ['`std::nth_element`', 'quickselect (introselect)', '$O(n)$ average', 'no', '$O(1)$'],
            ['`std::list::sort`', 'merge sort on nodes', '$O(n \\log n)$', 'yes', '$O(1)$'],
          ],
          caption: 'Need only the top $10$ scores, or the median distance? `partial_sort` and `nth_element` do less work than a full sort.',
        },
        {
          type: 'code',
          title: 'std_sorts.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <random>
#include <string>
#include <vector>

struct Unit { std::string name; int squad; int hp; };

int main() {
    // 1. std::sort on 100000 sorted ints: introsort never degrades to n^2.
    std::vector<int> a(100000);
    for (int i = 0; i < 100000; ++i) a[i] = i;
    long long cmp = 0;
    std::sort(a.begin(), a.end(), [&](int x, int y) { ++cmp; return x < y; });
    std::printf("std::sort, 100000 sorted ints: %lld comparisons\\n", cmp);

    std::mt19937 rng(9);
    for (int& x : a) x = int(rng() % 1000000);
    cmp = 0;
    std::sort(a.begin(), a.end(), [&](int x, int y) { ++cmp; return x < y; });
    std::printf("std::sort, 100000 random ints: %lld comparisons\\n", cmp);

    // 2. Multi-key ordering: by squad, and by hp (highest first) within a squad.
    std::vector<Unit> units = {{"Rook", 2, 40}, {"Ash", 1, 90}, {"Vex", 2, 75},
                               {"Kai", 1, 60}, {"Zed", 2, 40}, {"Mox", 1, 90}};
    // Option A: one comparator that compares the keys in priority order.
    std::vector<Unit> byCmp = units;
    std::sort(byCmp.begin(), byCmp.end(), [](const Unit& x, const Unit& y) {
        if (x.squad != y.squad) return x.squad < y.squad;
        return x.hp > y.hp;                          // strict: never return true for equal
    });
    // Option B: stable sort by the secondary key, then stable sort by the primary.
    std::vector<Unit> byPasses = units;
    std::stable_sort(byPasses.begin(), byPasses.end(), [](const Unit& x, const Unit& y) { return x.hp > y.hp; });
    std::stable_sort(byPasses.begin(), byPasses.end(), [](const Unit& x, const Unit& y) { return x.squad < y.squad; });
    for (const Unit& u : byPasses) std::printf("squad %d  hp %2d  %s\\n", u.squad, u.hp, u.name.c_str());

    bool same = std::equal(byCmp.begin(), byCmp.end(), byPasses.begin(), [](const Unit& x, const Unit& y) {
        return x.squad == y.squad && x.hp == y.hp;   // names of exact ties may differ: std::sort is unstable
    });
    std::printf("A and B agree on (squad, hp): %s\\n", same ? "yes" : "no");
}`,
          output: `std::sort, 100000 sorted ints: 2113369 comparisons
std::sort, 100000 random ints: 2079799 comparisons
squad 1  hp 90  Ash
squad 1  hp 90  Mox
squad 1  hp 60  Kai
squad 2  hp 75  Vex
squad 2  hp 40  Rook
squad 2  hp 40  Zed
A and B agree on (squad, hp): yes`,
          annotations: [
            { lines: '11-15', text: 'Sorted input, the case that destroys naive quicksort: introsort\'s median-of-three pivot handles it in about $21 n$ comparisons for $n = 10^5$ ($n\\log_2 n \\approx 1.66$ million). These exact counts are libstdc++\'s.' },
            { lines: '28-31', text: 'A lexicographic comparator: compare the most important key first, fall through to the next on a tie. Each branch uses a strict comparison.' },
            { lines: '34-35', text: 'The same order from two **stable** passes, least significant key first. The second pass keeps the hit-point order inside each squad.' },
            { lines: '38-40', text: 'Ash and Mox tie on both keys. `stable_sort` keeps their input order (Ash before Mox); `std::sort` may output them either way.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Comparators must be a strict weak ordering',
          text: 'The comparator you pass must behave like `<`: `comp(a, a)` is false, and it is transitive. A comparator written with `<=`, or one that compares floats that might be NaN, breaks the [[dsa-strict-weak-ordering|strict weak ordering]] rule. That is undefined behavior, and it is not academic: the unguarded inner loops of `std::sort` rely on the pivot stopping the scan, so with `<=` they can run off the end of the array and crash.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: '`std::sort` keeps elements that compare equal in their original relative order.',
      answer: false,
      explanation: 'False. `std::sort` is introsort: quicksort partitions swap elements across long distances, and heapsort scrambles ties completely, so equal elements can come out in any order. When ties must keep their order (for example, sorting a leaderboard by score while keeping earlier achievers first), use `std::stable_sort`, which is a merge sort — or add the original index as a tie-breaker in the comparator.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'Introsort switches a subarray to heapsort when the recursion depth exceeds $2\\lfloor \\log_2 n \\rfloor$. What is this depth limit for $n = 1\\,000\\,000$?',
      label: 'depth limit $=$',
      answer: '38',
      hint: '$2^{19} = 524\\,288$ and $2^{20} = 1\\,048\\,576$.',
      explanation: '$2^{19} \\le 10^6 < 2^{20}$, so $\\lfloor \\log_2 10^6 \\rfloor = 19$ and the limit is $2 \\cdot 19 = 38$. With good pivots quicksort\'s depth is about $\\log_2 n \\approx 20$, so the limit only triggers when pivots are consistently bad — at which point heapsort caps the cost at $O(n \\log n)$, and the depth limit also caps the stack.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'mcq',
      prompt: 'A programmer sorts enemies by threat level with `std::sort(v.begin(), v.end(), [](const Enemy& a, const Enemy& b) { return a.threat <= b.threat; });`. What is wrong?',
      options: [
        { text: 'Nothing; `<=` just sorts ties differently', why: 'The comparator must return `false` for equal elements. `<=` returns `true` for `comp(a, a)`, which violates the requirements: undefined behavior, not just a different tie order.' },
        { text: 'It breaks the strict weak ordering requirement, so the behavior is undefined (it can even crash)', correct: true, why: 'Right. `comp(x, x)` must be false. With `<=`, the unguarded scans in introsort may not stop at an equal pivot and can run past the end of the vector.' },
        { text: 'It sorts in descending order', why: '`a.threat <= b.threat` still puts smaller threats first. Descending order would use `>`.' },
        { text: 'It makes `std::sort` stable', why: 'No comparator makes `std::sort` stable; use `std::stable_sort` (with `<`).' },
      ],
      explanation: 'Sorting algorithms rely on the comparator behaving like `<`. Introsort\'s partition loops are "unguarded": they assume a scan will stop when it meets the pivot, because `comp(pivot, pivot)` is false. With `<=` that assumption fails, so a scan can walk out of the array. Always use a strict comparison: `a.threat < b.threat`.',
    },
    // ------------------------------------------------------------------ 18
    {
      kind: 'fill',
      prompt: 'Complete the facts about the two partition schemes.',
      template: 'Lomuto returns the pivot\'s final index $i$, so quicksort recurses on $[lo, i - 1]$ and ___ . Hoare returns a split point $j$, so it recurses on ___ and $[j + 1, hi]$. On an array of all-equal keys, ___ degrades to $\\Theta(n^2)$.',
      blanks: [{ answers: ['$[i + 1, hi]$'] }, { answers: ['$[lo, j]$'] }, { answers: ['Lomuto'] }],
      wordBank: ['$[i + 1, hi]$', '$[i, hi]$', '$[lo, j]$', '$[lo, j - 1]$', 'Lomuto', 'Hoare'],
      explanation: 'Lomuto leaves the pivot at index $i$ in its final place, so both recursive calls exclude it: $[lo, i-1]$ and $[i+1, hi]$. Hoare guarantees only $a[lo..j] \\le p \\le a[j+1..hi]$; index $j$ may hold any value of the left part, so it must be included: $[lo, j]$. On all-equal keys, Lomuto sends every element to the "$\\ge p$" side ($n - 1$ vs $0$ splits, quadratic), while Hoare\'s scans stop on every equal key and split evenly.',
    },
  ],
  takeaways: [
    'Merging two sorted runs with two pointers costs at most $n - 1$ comparisons; taking the left element on ties (`<=`) makes merge sort stable.',
    'Merge sort is $\\Theta(n \\log n)$ on every input with a $\\Theta(n)$ buffer (allocate it once). Bottom-up merge sort needs no recursion and suits linked lists and external sorting.',
    'Lomuto keeps $a[lo..i) < p \\le a[i..j)$ and leaves the pivot in its final place (recurse on $[lo, i-1]$, $[i+1, hi]$). Hoare scans from both ends, swaps less, splits equal keys evenly, and recurses on $[lo, j]$, $[j+1, hi]$.',
    'Fixed pivots have killer inputs (sorted arrays with an end pivot: $\\frac{n(n-1)}{2}$ comparisons). Random pivots give expected $\\approx 1.39\\,n\\log_2 n$ on every input; recursing on the smaller side keeps the stack $O(\\log n)$.',
    'Three-way partitioning (Dutch national flag) finishes all keys equal to the pivot in one pass: near-linear for inputs with few distinct keys.',
    '`std::sort` is introsort (quicksort, heapsort past depth $2\\lfloor\\log_2 n\\rfloor$, insertion sort for small ranges): $O(n \\log n)$ worst case, not stable. `std::stable_sort` is merge sort. Comparators must be strict (`<`, never `<=`).',
  ],
  reading: [
    {
      title: 'Sedgewick & Wayne — Algorithms, 4th ed., Section 2.2: Mergesort',
      url: 'https://algs4.cs.princeton.edu/22mergesort/',
      source: 'book',
      note: 'Top-down and bottom-up merge sort with the practical improvements (cutoff to insertion sort, skipping sorted merges).',
    },
    {
      title: 'Sedgewick & Wayne — Algorithms, 4th ed., Section 2.3: Quicksort',
      url: 'https://algs4.cs.princeton.edu/23quicksort/',
      source: 'book',
      note: 'Partitioning, the role of random shuffling, and three-way quicksort for duplicate keys.',
    },
    {
      title: 'Wikipedia — Introsort',
      url: 'https://en.wikipedia.org/wiki/Introsort',
      source: 'wikipedia',
      note: 'Musser\'s hybrid behind `std::sort`, with the depth limit and the median-of-three killer sequences that motivated it.',
    },
    {
      title: 'cppreference — std::sort',
      url: 'https://en.cppreference.com/w/cpp/algorithm/sort',
      source: 'other',
      note: 'The complexity guarantee and the comparator requirements (Compare must be a strict weak ordering).',
    },
  ],
};
