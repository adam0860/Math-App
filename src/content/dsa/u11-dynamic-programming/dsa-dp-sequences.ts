import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-dp-sequences',
  title: 'DP on Sequences and Strings',
  summary: 'The classic sequence DPs: maximum subarray (Kadane), longest increasing subsequence in $O(n^2)$ and $O(n \\log n)$ with patience piles, longest common subsequence behind `diff`, and edit distance behind spell checkers.',
  minutes: 22,
  objectives: [
    'Solve maximum subarray in one pass with Kadane\'s algorithm and state the invariant that makes it correct',
    'Compute the longest increasing subsequence with an $O(n^2)$ DP and with the $O(n \\log n)$ tails / patience-sorting method, including reconstruction',
    'Fill and trace back the LCS table, and explain how `diff` uses it',
    'Fill the edit-distance table, read an edit script from it, and reduce its space to two rows',
    'Recognize which sequence DP an interview or engine problem calls for: "ending at $i$" states for one sequence, prefix-pair states for two',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Maximum subarray: the best run ending here',
      blocks: [
        {
          type: 'p',
          text: 'A match log gives the score swing for each minute: $-2, 1, -3, 4, -1, 2, 1, -5, 4$. Which stretch of consecutive minutes was the team\'s best? That is the **maximum subarray** problem: the contiguous block with the largest sum. Brute force tries all $\\Theta(n^2)$ (start, end) pairs. DP does it in one pass.',
        },
        {
          type: 'p',
          text: 'The key is choosing the right state. "Best subarray in $a[0..i]$" is hard to extend, because you don\'t know whether that subarray touches $i$. Instead let $\\text{end}_i$ be the best sum of a subarray that **ends exactly at** $i$. Such a subarray either is $a_i$ alone, or extends the best subarray ending at $i - 1$:',
        },
        {
          type: 'theorem',
          name: 'Kadane\'s recurrence',
          tex: '\\text{end}_0 = a_0, \\qquad \\text{end}_i = \\max(a_i,\\ \\text{end}_{i-1} + a_i), \\qquad \\text{answer} = \\max_i \\text{end}_i',
          text: 'Equivalently: if the run so far has gone negative, drop it and restart at $a_i$. This is [[dsa-kadane|Kadane\'s algorithm]]: $\\Theta(n)$ time, $O(1)$ extra space.',
        },
        {"type": "algo", "view": "array", "code": "long long cur = a[0], best = a[0];\nfor (size_t i = 1; i < a.size(); ++i) {\n    cur = std::max(a[i], cur + a[i]);\n    best = std::max(best, cur);\n}", "interval": 1300, "frames": [{"note": "Start with $cur = best = a[0] = -2$: the best sum ending at index $0$ is the element itself.", "array": [-2, 1, -3, 4, -1, 2, 1, -5, 4], "marks": [{"index": 0, "color": "orange"}], "pointers": [{"index": 0, "label": "i"}], "lines": [1], "vars": [["cur", "-2"], ["best", "-2"], ["best range", "[0, 0]"]]}, {"note": "$a[1] = 1$ beats extending ($-2 + 1 = -1$): **restart** the run here. New best $1$.", "marks": [{"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "i, start"}], "lines": [3, 4], "vars": [["cur", "1"], ["best", "1"], ["best range", "[1, 1]"]]}, {"note": "Extend: $1 + (-3) = -2 \\ge -3$, so the run continues.", "marks": [{"index": 1, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 1, "label": "start", "color": "blue"}, {"index": 2, "label": "i"}], "lines": [3, 4], "vars": [["cur", "-2"], ["best", "1"], ["best range", "[1, 1]"]]}, {"note": "$a[3] = 4$ beats extending ($-2 + 4 = 2$): **restart** the run here. New best $4$.", "marks": [{"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "i, start"}], "lines": [3, 4], "vars": [["cur", "4"], ["best", "4"], ["best range", "[3, 3]"]]}, {"note": "Extend: $4 + (-1) = 3 \\ge -1$, so the run continues.", "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 3, "label": "start", "color": "blue"}, {"index": 4, "label": "i"}], "lines": [3, 4], "vars": [["cur", "3"], ["best", "4"], ["best range", "[3, 3]"]]}, {"note": "Extend: $3 + 2 = 5 \\ge 2$, so the run continues. New best $5$.", "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 3, "label": "start", "color": "blue"}, {"index": 5, "label": "i"}], "lines": [3, 4], "vars": [["cur", "5"], ["best", "5"], ["best range", "[3, 5]"]]}, {"note": "Extend: $5 + 1 = 6 \\ge 1$, so the run continues. New best $6$.", "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "orange"}], "pointers": [{"index": 3, "label": "start", "color": "blue"}, {"index": 6, "label": "i"}], "lines": [3, 4], "vars": [["cur", "6"], ["best", "6"], ["best range", "[3, 6]"]]}, {"note": "Extend: $6 + (-5) = 1 \\ge -5$, so the run continues.", "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "orange"}], "pointers": [{"index": 3, "label": "start", "color": "blue"}, {"index": 7, "label": "i"}], "lines": [3, 4], "vars": [["cur", "1"], ["best", "6"], ["best range", "[3, 6]"]]}, {"note": "Extend: $1 + 4 = 5 \\ge 4$, so the run continues.", "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}, {"index": 8, "color": "orange"}], "pointers": [{"index": 3, "label": "start", "color": "blue"}, {"index": 8, "label": "i"}], "lines": [3, 4], "vars": [["cur", "5"], ["best", "6"], ["best range", "[3, 6]"]]}, {"note": "Done: the maximum subarray is $a[3..6] = [4, -1, 2, 1]$ with sum $6$, found in one pass.", "marks": [{"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}], "vars": [["best", "6"]]}], "caption": "Blue: the current run (the best subarray ending at $i$). Green (last frame): the maximum subarray. A run restarts exactly when its sum so far has gone negative."},
        {
          type: 'callout',
          variant: 'why',
          title: 'Why restarting is safe',
          text: 'Invariant: after step $i$, `cur` $= \\text{end}_i$ and `best` $= \\max_{k \\le i} \\text{end}_k$. Any subarray ending at $i$ is $a_i$ plus (possibly empty) a subarray ending at $i - 1$, and the best such prefix has sum $\\text{end}_{i-1}$. If that is negative, adding it can only lower the total, so the empty prefix wins. Every subarray ends *somewhere*, so the maximum over all $\\text{end}_i$ is the answer.',
        },
        {
          type: 'code',
          title: 'kadane.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <vector>

struct Best { long long sum; size_t from, to; };

// Maximum-sum contiguous subarray of a non-empty array, with its index range.
Best kadane(const std::vector<int>& a) {
    long long cur = a[0];           // best sum of a subarray ENDING at i
    size_t start = 0;               // where that subarray starts
    Best best{a[0], 0, 0};
    for (size_t i = 1; i < a.size(); ++i) {
        if (cur < 0) { cur = a[i]; start = i; }  // a negative prefix only hurts: restart
        else cur += a[i];                         // otherwise extend
        if (cur > best.sum) best = {cur, start, i};
    }
    return best;
}

// Brute force for comparison: every (from, to) pair, Theta(n^2).
long long bruteForce(const std::vector<int>& a) {
    long long best = a[0];
    for (size_t i = 0; i < a.size(); ++i) {
        long long s = 0;
        for (size_t j = i; j < a.size(); ++j) best = std::max(best, s += a[j]);
    }
    return best;
}

int main() {
    // Score swing per minute of a match: when was the team's best stretch?
    std::vector<std::vector<int>> tests = {
        {-2, 1, -3, 4, -1, 2, 1, -5, 4},
        {3, -1, -1, 4, -10, 2, 2, 2},
        {-8, -3, -6, -2, -5},                    // all negative: answer is the max element
    };
    for (const auto& a : tests) {
        Best b = kadane(a);
        std::printf("sum=%lld  range=[%zu, %zu]  brute force agrees: %s\\n",
                    b.sum, b.from, b.to, b.sum == bruteForce(a) ? "yes" : "NO");
    }
}`,
          output: `sum=6  range=[3, 6]  brute force agrees: yes
sum=6  range=[5, 7]  brute force agrees: yes
sum=-2  range=[3, 3]  brute force agrees: yes`,
          annotations: [
            { lines: '9-11', text: 'Start from $a[0]$, not from $0$: for an all-negative array the answer is the largest element, not the empty sum $0$.' },
            { lines: 13, text: 'The restart rule. `cur < 0` is the same test as $a_i > \\text{end}_{i-1} + a_i$.' },
            { lines: 15, text: 'Remember the range only when the best improves; `start` already marks where the current run began.' },
            { lines: 35, text: 'The edge case interviewers check: all negative. Initializing `best = 0` would wrongly answer $0$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Run Kadane\'s algorithm on $[4, -7, 2, 3, -1, 5, -9, 6]$. What is the maximum subarray sum?',
      answer: '9',
      hint: 'Track $\\text{end}_i$: $4, -3, \\dots$ — and restart whenever the running value is negative.',
      explanation: '$\\text{end}$ goes $4,\\ 4 - 7 = -3,\\ 2$ (restart, since $-3 < 0$)$,\\ 5,\\ 4,\\ 9,\\ 0,\\ 6$. The maximum is $9$, from $2 + 3 - 1 + 5$. The opening $4$ is not worth carrying through the $-7$: $4 - 7 + 2 + 3 - 1 + 5 = 6 < 9$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Longest increasing subsequence in $O(n^2)$',
      blocks: [
        {
          type: 'p',
          text: 'A **subsequence** keeps elements in order but may skip some; a subarray may not skip. The [[dsa-lis|longest increasing subsequence]] (LIS) of $3, 1, 4, 1, 5, 9, 2, 6$ has length $4$, for example $1, 4, 5, 9$. LIS shows up as "longest chain" problems: nesting boxes, stacking crates by size, the longest sequence of upgrades each better than the last.',
        },
        {
          type: 'p',
          text: 'Use the same trick as Kadane: let the state say where the subsequence **ends**. $L[i]$ = length of the longest increasing subsequence ending at $a[i]$. The element before $a[i]$ (if any) is some $a[j]$ with $j < i$ and $a[j] < a[i]$:',
        },
        {
          type: 'math',
          tex: 'L[i] = 1 + \\max\\big(\\{0\\} \\cup \\{\\, L[j] : j < i,\\ a[j] < a[i] \\,\\}\\big), \\qquad \\text{LIS} = \\max_i L[i]',
          caption: 'The $\\{0\\}$ covers "$a[i]$ starts a new subsequence". $n$ states, up to $n$ candidates each: $\\Theta(n^2)$.',
        },
        {"type": "algo", "view": "array", "code": "for (int i = 0; i < n; ++i) {\n    L[i] = 1;\n    for (int j = 0; j < i; ++j)\n        if (a[j] < a[i] && L[j] + 1 > L[i])\n            L[i] = L[j] + 1;\n}", "interval": 1400, "frames": [{"note": "$L[i]$ = length of the longest increasing subsequence that **ends at** $a[i]$. Fill it left to right.", "array": [3, 1, 4, 1, 5, 9, 2, 6], "lines": [1], "vars": [["L", "· · · · · · · ·"]]}, {"note": "Nothing before $a[0] = 3$ is smaller, so $L[0] = 1$.", "marks": [{"index": 0, "color": "orange"}], "pointers": [{"index": 0, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["L", "1 · · · · · · ·"]]}, {"note": "Nothing before $a[1] = 1$ is smaller, so $L[1] = 1$.", "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["L", "1 1 · · · · · ·"]]}, {"note": "$a[2] = 4$ can follow $a[0] = 3$, $a[1] = 1$; best is $L[2] = 1 + 1 = 2$.", "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["L", "1 1 2 · · · · ·"]]}, {"note": "Nothing before $a[3] = 1$ is smaller, so $L[3] = 1$.", "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "gray"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["L", "1 1 2 1 · · · ·"]]}, {"note": "$a[4] = 5$ can follow $a[0] = 3$, $a[1] = 1$, $a[2] = 4$, $a[3] = 1$; best is $L[4] = 1 + 2 = 3$.", "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["L", "1 1 2 1 3 · · ·"]]}, {"note": "$a[5] = 9$ can follow $a[0] = 3$, $a[1] = 1$, $a[2] = 4$, $a[3] = 1$, $a[4] = 5$; best is $L[5] = 1 + 3 = 4$.", "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["L", "1 1 2 1 3 4 · ·"]]}, {"note": "$a[6] = 2$ can follow $a[1] = 1$, $a[3] = 1$; best is $L[6] = 1 + 1 = 2$.", "marks": [{"index": 0, "color": "gray"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "gray"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "gray"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "orange"}], "pointers": [{"index": 6, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["L", "1 1 2 1 3 4 2 ·"]]}, {"note": "$a[7] = 6$ can follow $a[0] = 3$, $a[1] = 1$, $a[2] = 4$, $a[3] = 1$, $a[4] = 5$, $a[6] = 2$; best is $L[7] = 1 + 3 = 4$.", "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "gray"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "orange"}], "pointers": [{"index": 7, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["L", "1 1 2 1 3 4 2 4"]]}, {"note": "The answer is $\\max_i L[i] = 4$, e.g. $1, 4, 5, 9$ or $3, 4, 5, 6$. Two nested loops: $\\Theta(n^2)$.", "marks": [{"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "vars": [["L", "1 1 2 1 3 4 2 4"], ["LIS length", "4"]]}], "caption": "Orange: $a[i]$; blue: earlier elements smaller than $a[i]$ (it can extend their subsequences); gray: earlier elements it cannot follow."},
        {
          type: 'p',
          text: 'To recover the subsequence itself, store $prev[i]$, the $j$ that gave the maximum, and follow those pointers back from the $i$ with the largest $L[i]$ — the same walk-back as in coin change.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'What is the length of the longest **strictly** increasing subsequence of $5, 2, 8, 6, 3, 6, 9, 7$?',
      answer: '4',
      hint: 'Compute $L[i]$ for each position: $L = [1, 1, 2, \\dots]$.',
      explanation: '$L = [1, 1, 2, 2, 2, 3, 4, 4]$: $L[4] = 2$ ($2, 3$), $L[5] = 3$ ($2, 3, 6$), $L[6] = 4$ ($2, 3, 6, 9$), $L[7] = 4$ ($2, 3, 6, 7$). The second $6$ cannot follow the first $6$ because the subsequence must be strictly increasing. Answer: $4$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'LIS in $O(n \\log n)$: patience piles and `lower_bound`',
      blocks: [
        {
          type: 'p',
          text: 'For a million elements, $n^2 = 10^{12}$ is far too slow. The fast method keeps, for each length $k$, the **smallest possible tail** of an increasing subsequence of that length: $tails[k-1]$. A small tail is the most useful kind, because more future elements can extend it. The card game *patience* gives a picture: deal the numbers onto piles, each on the leftmost pile whose top is $\\ge$ it.',
        },
        {"type": "algo", "view": "graph", "nodes": [{"id": "n0", "x": 70, "y": 40, "label": "3"}, {"id": "n1", "x": 70, "y": 96, "label": "1"}, {"id": "n2", "x": 162, "y": 40, "label": "4"}, {"id": "n3", "x": 70, "y": 152, "label": "1"}, {"id": "n4", "x": 254, "y": 40, "label": "5"}, {"id": "n5", "x": 346, "y": 40, "label": "9"}, {"id": "n6", "x": 162, "y": 96, "label": "2"}, {"id": "n7", "x": 346, "y": 96, "label": "6"}], "edges": [{"from": "n2", "to": "n1", "directed": true}, {"from": "n4", "to": "n2", "directed": true}, {"from": "n5", "to": "n4", "directed": true}, {"from": "n6", "to": "n3", "directed": true}, {"from": "n7", "to": "n4", "directed": true}], "width": 420, "height": 200, "code": "std::vector<int> tails;  // pile tops\nfor (int x : a) {\n    auto it = std::lower_bound(\n        tails.begin(), tails.end(), x);\n    if (it == tails.end())\n        tails.push_back(x);  // new pile\n    else\n        *it = x;             // smaller tail\n}", "interval": 1500, "frames": [{"note": "Deal the numbers $3, 1, 4, 1, 5, 9, 2, 6$ one at a time. Each goes on the **leftmost** pile whose top is $\\ge$ it, or starts a new pile on the right.", "hidden": ["n0", "n1", "n2", "n3", "n4", "n5", "n6", "n7"], "lines": [1], "vars": [["tails (pile tops)", "[ ]"]]}, {"note": "$3$ starts the first pile.", "hidden": ["n1", "n2", "n3", "n4", "n5", "n6", "n7"], "nodeColors": [{"id": "n0", "color": "orange"}], "edgeColors": [], "lines": [3, 4, 5, 6], "vars": [["tails (pile tops)", "[3]"]]}, {"note": "$1$ goes on pile $1$ (leftmost top $\\ge 1$); it replaces that tail with a smaller one.", "hidden": ["n2", "n3", "n4", "n5", "n6", "n7"], "nodeColors": [{"id": "n1", "color": "orange"}], "edgeColors": [], "lines": [3, 4, 7, 8], "vars": [["tails (pile tops)", "[1]"]]}, {"note": "$4$ is bigger than every top: start pile $2$. Its arrow points to the top of the pile on its left.", "hidden": ["n3", "n4", "n5", "n6", "n7"], "nodeColors": [{"id": "n2", "color": "orange"}], "edgeColors": [{"from": "n2", "to": "n1", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["tails (pile tops)", "[1, 4]"]]}, {"note": "$1$ goes on pile $1$ (leftmost top $\\ge 1$); the tail was already $1$, so it stays $1$.", "hidden": ["n4", "n5", "n6", "n7"], "nodeColors": [{"id": "n3", "color": "orange"}], "edgeColors": [], "lines": [3, 4, 7, 8], "vars": [["tails (pile tops)", "[1, 4]"]]}, {"note": "$5$ is bigger than every top: start pile $3$. Its arrow points to the top of the pile on its left.", "hidden": ["n5", "n6", "n7"], "nodeColors": [{"id": "n4", "color": "orange"}], "edgeColors": [{"from": "n4", "to": "n2", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["tails (pile tops)", "[1, 4, 5]"]]}, {"note": "$9$ is bigger than every top: start pile $4$. Its arrow points to the top of the pile on its left.", "hidden": ["n6", "n7"], "nodeColors": [{"id": "n5", "color": "orange"}], "edgeColors": [{"from": "n5", "to": "n4", "color": "orange"}], "lines": [3, 4, 5, 6], "vars": [["tails (pile tops)", "[1, 4, 5, 9]"]]}, {"note": "$2$ goes on pile $2$ (leftmost top $\\ge 2$); it replaces that tail with a smaller one.", "hidden": ["n7"], "nodeColors": [{"id": "n6", "color": "orange"}], "edgeColors": [{"from": "n6", "to": "n3", "color": "orange"}], "lines": [3, 4, 7, 8], "vars": [["tails (pile tops)", "[1, 2, 5, 9]"]]}, {"note": "$6$ goes on pile $4$ (leftmost top $\\ge 6$); it replaces that tail with a smaller one.", "hidden": [], "nodeColors": [{"id": "n7", "color": "orange"}], "edgeColors": [{"from": "n7", "to": "n4", "color": "orange"}], "lines": [3, 4, 7, 8], "vars": [["tails (pile tops)", "[1, 2, 5, 6]"]]}, {"note": "$4$ piles, so the LIS has length $4$. Follow the arrows back from the last pile's top: $6 \\to 5 \\to 4 \\to 1$ gives the subsequence $1, 4, 5, 6$.", "hidden": [], "nodeColors": [{"id": "n7", "color": "green"}, {"id": "n4", "color": "green"}, {"id": "n2", "color": "green"}, {"id": "n1", "color": "green"}], "edgeColors": [{"from": "n7", "to": "n4", "color": "green"}, {"from": "n4", "to": "n2", "color": "green"}, {"from": "n2", "to": "n1", "color": "green"}], "vars": [["tails", "[1, 2, 5, 6]"], ["LIS", "1, 4, 5, 6"]]}], "caption": "Patience sorting. The pile tops, read left to right, are always increasing — that sorted array is `tails`, so finding the pile is a binary search. Arrows (back-pointers to the previous pile's top) let you rebuild an actual LIS."},
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the tails stay sorted, and why the pile count is the LIS',
          text: '**Sorted:** if $tails[k] \\ge tails[k+1]$, take an increasing run of length $k + 2$ ending at $tails[k+1]$; its element in position $k + 1$ ends a run of length $k + 1$ and is smaller than $tails[k+1] \\le tails[k]$ — contradicting that $tails[k]$ was the smallest. So `tails` is strictly increasing and `lower_bound` (first element $\\ge x$) finds where $x$ belongs in $O(\\log n)$.\n\n**Correct length:** when $x$ lands in position $k$, it extends a run of length $k$ ending at $tails[k-1] < x$, so a run of length $k + 1$ ending at $x$ exists; and no longer one can, because $x \\le tails[k]$. Every element is placed once with one binary search: $\\Theta(n \\log n)$.',
        },
        {
          type: 'code',
          title: 'lis.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <vector>

// O(n log n) LIS that also returns one longest strictly increasing subsequence.
std::vector<int> lis(const std::vector<int>& a) {
    std::vector<int> tailVal;              // tailVal[k]: smallest tail of an increasing run of length k+1
    std::vector<int> tailIdx;              // index in a of that tail
    std::vector<int> prev(a.size(), -1);   // back-pointer: previous element in the best run
    for (int i = 0; i < (int)a.size(); ++i) {
        auto it = std::lower_bound(tailVal.begin(), tailVal.end(), a[i]);
        int k = (int)(it - tailVal.begin());
        if (k > 0) prev[i] = tailIdx[k - 1];
        if (it == tailVal.end()) { tailVal.push_back(a[i]); tailIdx.push_back(i); }
        else { *it = a[i]; tailIdx[k] = i; }
    }
    std::vector<int> out;
    for (int i = tailIdx.empty() ? -1 : tailIdx.back(); i != -1; i = prev[i])
        out.push_back(a[i]);
    std::reverse(out.begin(), out.end());
    return out;
}

// Theta(n^2) DP: L[i] = longest increasing subsequence ending at a[i].
int lisQuadratic(const std::vector<int>& a) {
    std::vector<int> L(a.size(), 1);
    int best = 0;
    for (size_t i = 0; i < a.size(); ++i) {
        for (size_t j = 0; j < i; ++j)
            if (a[j] < a[i]) L[i] = std::max(L[i], L[j] + 1);
        best = std::max(best, L[i]);
    }
    return best;
}

// Longest NON-decreasing subsequence: equal values may repeat, so use upper_bound.
int longestNonDecreasing(const std::vector<int>& a) {
    std::vector<int> tails;
    for (int x : a) {
        auto it = std::upper_bound(tails.begin(), tails.end(), x);
        if (it == tails.end()) tails.push_back(x); else *it = x;
    }
    return (int)tails.size();
}

int main() {
    std::vector<int> a = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9};   // digits of pi
    std::vector<int> s = lis(a);
    std::printf("LIS length %zu (quadratic DP says %d):", s.size(), lisQuadratic(a));
    for (int x : s) std::printf(" %d", x);
    std::printf("\\nlongest non-decreasing: %d\\n", longestNonDecreasing(a));
}`,
          output: `LIS length 6 (quadratic DP says 6): 1 2 3 5 7 9
longest non-decreasing: 8`,
          annotations: [
            { lines: 11, text: '`std::lower_bound` is a [[dm-binary-search|binary search]] for the first tail $\\ge a[i]$: that is the pile for $a[i]$.' },
            { lines: 13, text: 'The back-pointer: $a[i]$ extends the current tail of the next-shorter length. These are the arrows in the animation.' },
            { lines: '14-15', text: 'Append (a new, longer length) or overwrite (a smaller tail for an existing length).' },
            { lines: '18-19', text: 'Follow back-pointers from the tail of the longest run; the result comes out reversed.' },
            { lines: 40, text: 'For **non-decreasing** subsequences equal values may chain, so search for the first tail $> x$: `upper_bound`.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '`tails` is not the subsequence',
          text: 'At the end of the animation, `tails` $= [1, 2, 5, 6]$, but $1, 2, 5, 6$ is **not** a subsequence of $3, 1, 4, 1, 5, 9, 2, 6$: the $2$ comes after the $5$. Only its *length* is meaningful. To output an actual LIS you need the back-pointers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'Process $4, 1, 3, 2, 5$ with the `tails` algorithm (strictly increasing, `lower_bound`). Put the states of `tails` in the order they occur, one after each element.',
      lines: ['$[4]$', '$[1]$', '$[1, 3]$', '$[1, 2]$', '$[1, 2, 5]$'],
      explanation: '$4$ starts the first pile. $1 \\le 4$ replaces it: $[1]$. $3 > 1$ is appended: $[1, 3]$. For $2$, `lower_bound` finds $3$ (the first tail $\\ge 2$) and overwrites it: $[1, 2]$ — a length-2 run can now end with the smaller value $2$. $5$ is appended: $[1, 2, 5]$, so the LIS has length $3$ (e.g. $1, 3, 5$ or $1, 2, 5$).',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Choose the right binary search for each variant of the $O(n \\log n)$ method.',
      template: 'For the longest **strictly** increasing subsequence, place $x$ at ___; for the longest **non-decreasing** subsequence, place it at ___.',
      blanks: [{ answers: ['`std::lower_bound` (first tail $\\ge x$)'] }, { answers: ['`std::upper_bound` (first tail $> x$)'] }],
      wordBank: ['`std::lower_bound` (first tail $\\ge x$)', '`std::upper_bound` (first tail $> x$)', '`std::find` (first tail $= x$)', '`std::max_element` (largest tail)'],
      hint: 'In the strict version, an $x$ equal to some tail cannot extend it, so it must replace it.',
      explanation: 'Strictly increasing: an $x$ equal to a tail cannot follow it, so $x$ replaces the first tail $\\ge x$ (`lower_bound`), and the length does not grow. Non-decreasing: $x$ may follow an equal value, so it goes after all tails $\\le x$, at the first tail $> x$ (`upper_bound`). Mixing them up is a classic off-by-one: on $1, 1, 1$ `lower_bound` answers $1$, `upper_bound` answers $3$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Longest common subsequence and `diff`',
      blocks: [
        {
          type: 'p',
          text: 'Two sequences now. The [[dsa-lcs|longest common subsequence]] (LCS) of $x$ and $y$ is the longest sequence appearing in order in both. For two strings the natural states are **pairs of prefixes**: $L[i][j]$ = LCS length of $x_1 \\dots x_i$ and $y_1 \\dots y_j$. Look at the last letters:',
        },
        {
          type: 'list',
          items: [
            'If $x_i = y_j$, some LCS uses both of them as its last letter (an exchange argument: any LCS that doesn\'t can be rewritten to), so $L[i][j] = L[i-1][j-1] + 1$.',
            'If $x_i \\ne y_j$, they can\'t both be the last letter of a common subsequence, so drop one: $L[i][j] = \\max(L[i-1][j],\\ L[i][j-1])$.',
            'An empty prefix has nothing in common with anything: $L[0][j] = L[i][0] = 0$.',
          ],
        },
        {"type": "algo", "view": "graph", "nodes": [{"id": "hc0", "x": 114, "y": 34, "label": "ε"}, {"id": "hc1", "x": 158, "y": 34, "label": "B"}, {"id": "hc2", "x": 202, "y": 34, "label": "A"}, {"id": "hc3", "x": 246, "y": 34, "label": "R"}, {"id": "hc4", "x": 290, "y": 34, "label": "E"}, {"id": "hr0", "x": 70, "y": 74, "label": "ε"}, {"id": "c0_0", "x": 114, "y": 74, "label": ""}, {"id": "c0_1", "x": 158, "y": 74, "label": ""}, {"id": "c0_2", "x": 202, "y": 74, "label": ""}, {"id": "c0_3", "x": 246, "y": 74, "label": ""}, {"id": "c0_4", "x": 290, "y": 74, "label": ""}, {"id": "hr1", "x": 70, "y": 114, "label": "B"}, {"id": "c1_0", "x": 114, "y": 114, "label": ""}, {"id": "c1_1", "x": 158, "y": 114, "label": ""}, {"id": "c1_2", "x": 202, "y": 114, "label": ""}, {"id": "c1_3", "x": 246, "y": 114, "label": ""}, {"id": "c1_4", "x": 290, "y": 114, "label": ""}, {"id": "hr2", "x": 70, "y": 154, "label": "E"}, {"id": "c2_0", "x": 114, "y": 154, "label": ""}, {"id": "c2_1", "x": 158, "y": 154, "label": ""}, {"id": "c2_2", "x": 202, "y": 154, "label": ""}, {"id": "c2_3", "x": 246, "y": 154, "label": ""}, {"id": "c2_4", "x": 290, "y": 154, "label": ""}, {"id": "hr3", "x": 70, "y": 194, "label": "A"}, {"id": "c3_0", "x": 114, "y": 194, "label": ""}, {"id": "c3_1", "x": 158, "y": 194, "label": ""}, {"id": "c3_2", "x": 202, "y": 194, "label": ""}, {"id": "c3_3", "x": 246, "y": 194, "label": ""}, {"id": "c3_4", "x": 290, "y": 194, "label": ""}, {"id": "hr4", "x": 70, "y": 234, "label": "R"}, {"id": "c4_0", "x": 114, "y": 234, "label": ""}, {"id": "c4_1", "x": 158, "y": 234, "label": ""}, {"id": "c4_2", "x": 202, "y": 234, "label": ""}, {"id": "c4_3", "x": 246, "y": 234, "label": ""}, {"id": "c4_4", "x": 290, "y": 234, "label": ""}], "edges": [], "width": 344, "height": 274, "code": "for (int i = 1; i <= n; ++i)\n  for (int j = 1; j <= m; ++j)\n    if (x[i-1] == y[j-1])\n      L[i][j] = L[i-1][j-1] + 1;\n    else\n      L[i][j] = std::max(L[i-1][j],\n                         L[i][j-1]);", "interval": 1200, "frames": [{"note": "$L[i][j]$ = LCS length of the first $i$ letters of BEAR and the first $j$ letters of BARE. Row and column $0$ (empty prefix ε) are $0$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": ""}, {"id": "c1_2", "label": ""}, {"id": "c1_3", "label": ""}, {"id": "c1_4", "label": ""}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}]}, {"note": "B = B: match, so take the diagonal $+1$: $L[1][1] = 0 + 1 = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": ""}, {"id": "c1_3", "label": ""}, {"id": "c1_4", "label": ""}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c0_0", "color": "blue"}, {"id": "c1_1", "color": "orange"}, {"id": "hr1", "color": "orange"}, {"id": "hc1", "color": "orange"}], "lines": [3, 4]}, {"note": "B ≠ A: drop a letter from one string, $L[1][2] = \\max(0, 1) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": ""}, {"id": "c1_4", "label": ""}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c0_2", "color": "blue"}, {"id": "c1_1", "color": "blue"}, {"id": "c1_2", "color": "orange"}, {"id": "hr1", "color": "orange"}, {"id": "hc2", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "B ≠ R: drop a letter from one string, $L[1][3] = \\max(0, 1) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": ""}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c0_3", "color": "blue"}, {"id": "c1_2", "color": "blue"}, {"id": "c1_3", "color": "orange"}, {"id": "hr1", "color": "orange"}, {"id": "hc3", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "B ≠ E: drop a letter from one string, $L[1][4] = \\max(0, 1) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c0_4", "color": "blue"}, {"id": "c1_3", "color": "blue"}, {"id": "c1_4", "color": "orange"}, {"id": "hr1", "color": "orange"}, {"id": "hc4", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "E ≠ B: drop a letter from one string, $L[2][1] = \\max(1, 0) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c1_1", "color": "blue"}, {"id": "c2_0", "color": "blue"}, {"id": "c2_1", "color": "orange"}, {"id": "hr2", "color": "orange"}, {"id": "hc1", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "E ≠ A: drop a letter from one string, $L[2][2] = \\max(1, 1) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": ""}, {"id": "c2_4", "label": ""}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c1_2", "color": "blue"}, {"id": "c2_1", "color": "blue"}, {"id": "c2_2", "color": "orange"}, {"id": "hr2", "color": "orange"}, {"id": "hc2", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "E ≠ R: drop a letter from one string, $L[2][3] = \\max(1, 1) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": ""}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c1_3", "color": "blue"}, {"id": "c2_2", "color": "blue"}, {"id": "c2_3", "color": "orange"}, {"id": "hr2", "color": "orange"}, {"id": "hc3", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "E = E: match, so take the diagonal $+1$: $L[2][4] = 1 + 1 = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c1_3", "color": "blue"}, {"id": "c2_4", "color": "orange"}, {"id": "hr2", "color": "orange"}, {"id": "hc4", "color": "orange"}], "lines": [3, 4]}, {"note": "A ≠ B: drop a letter from one string, $L[3][1] = \\max(1, 0) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "1"}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c2_1", "color": "blue"}, {"id": "c3_0", "color": "blue"}, {"id": "c3_1", "color": "orange"}, {"id": "hr3", "color": "orange"}, {"id": "hc1", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "A = A: match, so take the diagonal $+1$: $L[3][2] = 1 + 1 = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "1"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": ""}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c2_1", "color": "blue"}, {"id": "c3_2", "color": "orange"}, {"id": "hr3", "color": "orange"}, {"id": "hc2", "color": "orange"}], "lines": [3, 4]}, {"note": "A ≠ R: drop a letter from one string, $L[3][3] = \\max(1, 2) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "1"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c3_4", "label": ""}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c2_3", "color": "blue"}, {"id": "c3_2", "color": "blue"}, {"id": "c3_3", "color": "orange"}, {"id": "hr3", "color": "orange"}, {"id": "hc3", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "A ≠ E: drop a letter from one string, $L[3][4] = \\max(2, 2) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "1"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c3_4", "label": "2"}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c2_4", "color": "blue"}, {"id": "c3_3", "color": "blue"}, {"id": "c3_4", "color": "orange"}, {"id": "hr3", "color": "orange"}, {"id": "hc4", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "R ≠ B: drop a letter from one string, $L[4][1] = \\max(1, 0) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "1"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c3_4", "label": "2"}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": "1"}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "c3_1", "color": "blue"}, {"id": "c4_0", "color": "blue"}, {"id": "c4_1", "color": "orange"}, {"id": "hr4", "color": "orange"}, {"id": "hc1", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "R ≠ A: drop a letter from one string, $L[4][2] = \\max(2, 1) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "1"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c3_4", "label": "2"}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": "1"}, {"id": "c4_2", "label": "2"}, {"id": "c4_3", "label": ""}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "c3_2", "color": "blue"}, {"id": "c4_1", "color": "blue"}, {"id": "c4_2", "color": "orange"}, {"id": "hr4", "color": "orange"}, {"id": "hc2", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "R = R: match, so take the diagonal $+1$: $L[4][3] = 2 + 1 = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "1"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c3_4", "label": "2"}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": "1"}, {"id": "c4_2", "label": "2"}, {"id": "c4_3", "label": "3"}, {"id": "c4_4", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "c3_2", "color": "blue"}, {"id": "c4_3", "color": "orange"}, {"id": "hr4", "color": "orange"}, {"id": "hc3", "color": "orange"}], "lines": [3, 4]}, {"note": "R ≠ E: drop a letter from one string, $L[4][4] = \\max(2, 3) = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "1"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c3_4", "label": "2"}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": "1"}, {"id": "c4_2", "label": "2"}, {"id": "c4_3", "label": "3"}, {"id": "c4_4", "label": "3"}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "c3_4", "color": "blue"}, {"id": "c4_3", "color": "blue"}, {"id": "c4_4", "color": "orange"}, {"id": "hr4", "color": "orange"}, {"id": "hc4", "color": "orange"}], "lines": [3, 5, 6, 7]}, {"note": "Trace back from the corner: diagonal on a match (green), otherwise toward the larger neighbor. The LCS is BAR, length $3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "0"}, {"id": "c0_2", "label": "0"}, {"id": "c0_3", "label": "0"}, {"id": "c0_4", "label": "0"}, {"id": "c1_0", "label": "0"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "1"}, {"id": "c1_3", "label": "1"}, {"id": "c1_4", "label": "1"}, {"id": "c2_0", "label": "0"}, {"id": "c2_1", "label": "1"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "1"}, {"id": "c2_4", "label": "2"}, {"id": "c3_0", "label": "0"}, {"id": "c3_1", "label": "1"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c3_4", "label": "2"}, {"id": "c4_0", "label": "0"}, {"id": "c4_1", "label": "1"}, {"id": "c4_2", "label": "2"}, {"id": "c4_3", "label": "3"}, {"id": "c4_4", "label": "3"}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hc4", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c4_4", "color": "gray"}, {"id": "c4_3", "color": "green"}, {"id": "c3_2", "color": "green"}, {"id": "c2_1", "color": "gray"}, {"id": "c1_1", "color": "green"}], "vars": [["LCS", "BAR"]]}], "caption": "LCS of BEAR and BARE, filled row by row. Orange: the cell being computed and its two letters; blue: the cells it reads."},
        {
          type: 'p',
          text: 'The table has $(n + 1)(m + 1)$ cells, each $O(1)$: $\\Theta(nm)$ time and space. Filling row by row works because each cell reads only up, left and up-left.',
        },
        {
          type: 'code',
          title: 'lcs.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <string>
#include <vector>

// Longest common subsequence with reconstruction: full (n+1) x (m+1) table.
std::string lcs(const std::string& x, const std::string& y) {
    size_t n = x.size(), m = y.size();
    std::vector<std::vector<int>> L(n + 1, std::vector<int>(m + 1, 0));
    for (size_t i = 1; i <= n; ++i)
        for (size_t j = 1; j <= m; ++j)
            L[i][j] = (x[i - 1] == y[j - 1]) ? L[i - 1][j - 1] + 1
                                             : std::max(L[i - 1][j], L[i][j - 1]);
    std::string out;                                   // walk back from the corner
    for (size_t i = n, j = m; i > 0 && j > 0;) {
        if (x[i - 1] == y[j - 1]) { out += x[i - 1]; --i; --j; }
        else if (L[i - 1][j] >= L[i][j - 1]) --i;
        else --j;
    }
    std::reverse(out.begin(), out.end());
    return out;
}

// A tiny line diff: lines in the LCS are kept, the rest are removed (-) or added (+).
void diff(const std::vector<std::string>& a, const std::vector<std::string>& b) {
    size_t n = a.size(), m = b.size();
    std::vector<std::vector<int>> L(n + 1, std::vector<int>(m + 1, 0));
    for (size_t i = n; i-- > 0;)                       // suffix version: L[i][j] = LCS of a[i..], b[j..]
        for (size_t j = m; j-- > 0;)
            L[i][j] = a[i] == b[j] ? L[i + 1][j + 1] + 1 : std::max(L[i + 1][j], L[i][j + 1]);
    size_t i = 0, j = 0;
    while (i < n || j < m) {
        if (i < n && j < m && a[i] == b[j]) { std::printf("  %s\\n", a[i].c_str()); ++i; ++j; }
        else if (j == m || (i < n && L[i + 1][j] >= L[i][j + 1])) std::printf("- %s\\n", a[i++].c_str());
        else std::printf("+ %s\\n", b[j++].c_str());
    }
}

int main() {
    std::printf("LCS(BEAR, BARE) = %s\\n", lcs("BEAR", "BARE").c_str());
    std::printf("LCS(ABCBDAB, BDCABA) = %s\\n", lcs("ABCBDAB", "BDCABA").c_str());
    diff({"spawn player", "load map", "play intro", "start match"},
         {"load map", "spawn player", "start match", "show hud"});
}`,
          output: `LCS(BEAR, BARE) = BAR
LCS(ABCBDAB, BDCABA) = BCBA
- spawn player
  load map
- play intro
+ spawn player
  start match
+ show hud`,
          annotations: [
            { lines: '10-13', text: 'The recurrence, with strings indexed from $0$: table row $i$ corresponds to letter `x[i - 1]`. Mixing the two indexings is the most common LCS bug.' },
            { lines: '15-19', text: 'Trace back from the corner: on a match take the diagonal and record the letter; otherwise step toward the neighbor that holds the value.' },
            { lines: '28-30', text: 'The same DP on **suffixes**, filled backward, so the diff can be printed front to back.' },
            { lines: '33-35', text: 'Lines in the LCS are printed unchanged; the others are deletions (`-`) or insertions (`+`). That is the core of `diff` and of every code-review tool.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'LCS in tools you use',
          text: 'Git\'s default diff uses Myers\' algorithm, which finds a shortest edit script — equivalently an LCS of the lines — in $O((n + m)D)$ time, where $D$ is the number of differences, so near-identical files are compared almost linearly. Merge tools, asset-pipeline change detection and replay-desync debugging (where did two frame logs first diverge, and what was inserted?) all rely on the same table.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'If $x_i \\ne y_j$, then $L[i][j] = L[i-1][j-1]$ is a correct LCS transition, because neither of the two last letters can be used.',
      answer: false,
      explanation: 'Only one of the two letters must be discarded, not both. $x_i$ may still match some earlier letter of $y$, or $y_j$ some earlier letter of $x$. Example: $x = $ AB, $y = $ BA. The last letters B and A differ, and $L[1][1] = 0$ (A vs B), but $L[2][2] = 1$ because B matches B. The correct rule, $\\max(L[i-1][j], L[i][j-1])$, keeps both possibilities.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Edit distance: the spell checker\'s table',
      blocks: [
        {
          type: 'p',
          text: 'A player types `nolcip` into the console. Which command did they mean? The [[dsa-edit-distance|edit distance]] (Levenshtein distance) between two strings is the fewest single-letter **insertions**, **deletions** and **substitutions** that turn one into the other. $D[i][j]$ = edits to turn the first $i$ letters of $x$ into the first $j$ letters of $y$. The last step of an optimal script either deletes $x_i$, inserts $y_j$, or aligns $x_i$ with $y_j$ (free if they are equal, one substitution if not):',
        },
        {
          type: 'math',
          tex: 'D[i][j] = \\min\\big(\\underbrace{D[i-1][j] + 1}_{\\text{delete } x_i},\\ \\underbrace{D[i][j-1] + 1}_{\\text{insert } y_j},\\ \\underbrace{D[i-1][j-1] + [x_i \\ne y_j]}_{\\text{keep or replace}}\\big), \\quad D[i][0] = i,\\ D[0][j] = j',
          caption: '$[x_i \\ne y_j]$ is $1$ when the letters differ and $0$ when they match.',
        },
        {"type": "algo", "view": "graph", "nodes": [{"id": "hc0", "x": 114, "y": 34, "label": "ε"}, {"id": "hc1", "x": 158, "y": 34, "label": "R"}, {"id": "hc2", "x": 202, "y": 34, "label": "O"}, {"id": "hc3", "x": 246, "y": 34, "label": "S"}, {"id": "hr0", "x": 70, "y": 72, "label": "ε"}, {"id": "c0_0", "x": 114, "y": 72, "label": ""}, {"id": "c0_1", "x": 158, "y": 72, "label": ""}, {"id": "c0_2", "x": 202, "y": 72, "label": ""}, {"id": "c0_3", "x": 246, "y": 72, "label": ""}, {"id": "hr1", "x": 70, "y": 110, "label": "H"}, {"id": "c1_0", "x": 114, "y": 110, "label": ""}, {"id": "c1_1", "x": 158, "y": 110, "label": ""}, {"id": "c1_2", "x": 202, "y": 110, "label": ""}, {"id": "c1_3", "x": 246, "y": 110, "label": ""}, {"id": "hr2", "x": 70, "y": 148, "label": "O"}, {"id": "c2_0", "x": 114, "y": 148, "label": ""}, {"id": "c2_1", "x": 158, "y": 148, "label": ""}, {"id": "c2_2", "x": 202, "y": 148, "label": ""}, {"id": "c2_3", "x": 246, "y": 148, "label": ""}, {"id": "hr3", "x": 70, "y": 186, "label": "R"}, {"id": "c3_0", "x": 114, "y": 186, "label": ""}, {"id": "c3_1", "x": 158, "y": 186, "label": ""}, {"id": "c3_2", "x": 202, "y": 186, "label": ""}, {"id": "c3_3", "x": 246, "y": 186, "label": ""}, {"id": "hr4", "x": 70, "y": 224, "label": "S"}, {"id": "c4_0", "x": 114, "y": 224, "label": ""}, {"id": "c4_1", "x": 158, "y": 224, "label": ""}, {"id": "c4_2", "x": 202, "y": 224, "label": ""}, {"id": "c4_3", "x": 246, "y": 224, "label": ""}, {"id": "hr5", "x": 70, "y": 262, "label": "E"}, {"id": "c5_0", "x": 114, "y": 262, "label": ""}, {"id": "c5_1", "x": 158, "y": 262, "label": ""}, {"id": "c5_2", "x": 202, "y": 262, "label": ""}, {"id": "c5_3", "x": 246, "y": 262, "label": ""}], "edges": [], "width": 300, "height": 302, "code": "for (int i = 0; i <= n; ++i) D[i][0] = i;\nfor (int j = 0; j <= m; ++j) D[0][j] = j;\nfor (int i = 1; i <= n; ++i)\n  for (int j = 1; j <= m; ++j) {\n    int del = D[i-1][j] + 1;\n    int ins = D[i][j-1] + 1;\n    int sub = D[i-1][j-1] + (x[i-1] != y[j-1]);\n    D[i][j] = std::min({del, ins, sub});\n  }", "interval": 1300, "frames": [{"note": "$D[i][j]$ = edits to turn the first $i$ letters of HORSE into the first $j$ letters of ROS. Base cases: $D[i][0] = i$ deletions, $D[0][j] = j$ insertions.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": ""}, {"id": "c1_2", "label": ""}, {"id": "c1_3", "label": ""}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}], "lines": [1, 2]}, {"note": "H ≠ R. $D[1][1] = \\min(2, 2, 1) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": ""}, {"id": "c1_3", "label": ""}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c0_1", "color": "blue"}, {"id": "c1_0", "color": "blue"}, {"id": "c0_0", "color": "blue"}, {"id": "c1_1", "color": "orange"}, {"id": "hr1", "color": "orange"}, {"id": "hc1", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "2"], ["insert (left + 1)", "2"], ["keep/replace (diag)", "1"]]}, {"note": "H ≠ O. $D[1][2] = \\min(3, 2, 2) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": ""}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c0_2", "color": "blue"}, {"id": "c1_1", "color": "blue"}, {"id": "c0_1", "color": "blue"}, {"id": "c1_2", "color": "orange"}, {"id": "hr1", "color": "orange"}, {"id": "hc2", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "3"], ["insert (left + 1)", "2"], ["keep/replace (diag)", "2"]]}, {"note": "H ≠ S. $D[1][3] = \\min(4, 3, 3) = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": ""}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c0_3", "color": "blue"}, {"id": "c1_2", "color": "blue"}, {"id": "c0_2", "color": "blue"}, {"id": "c1_3", "color": "orange"}, {"id": "hr1", "color": "orange"}, {"id": "hc3", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "4"], ["insert (left + 1)", "3"], ["keep/replace (diag)", "3"]]}, {"note": "O ≠ R. $D[2][1] = \\min(2, 3, 2) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": ""}, {"id": "c2_3", "label": ""}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c1_1", "color": "blue"}, {"id": "c2_0", "color": "blue"}, {"id": "c1_0", "color": "blue"}, {"id": "c2_1", "color": "orange"}, {"id": "hr2", "color": "orange"}, {"id": "hc1", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "2"], ["insert (left + 1)", "3"], ["keep/replace (diag)", "2"]]}, {"note": "O = O: keep it for free. $D[2][2] = \\min(3, 3, 1) = 1$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": ""}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c1_2", "color": "blue"}, {"id": "c2_1", "color": "blue"}, {"id": "c1_1", "color": "blue"}, {"id": "c2_2", "color": "orange"}, {"id": "hr2", "color": "orange"}, {"id": "hc2", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "3"], ["insert (left + 1)", "3"], ["keep/replace (diag)", "1"]]}, {"note": "O ≠ S. $D[2][3] = \\min(4, 2, 3) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": ""}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c1_3", "color": "blue"}, {"id": "c2_2", "color": "blue"}, {"id": "c1_2", "color": "blue"}, {"id": "c2_3", "color": "orange"}, {"id": "hr2", "color": "orange"}, {"id": "hc3", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "4"], ["insert (left + 1)", "2"], ["keep/replace (diag)", "3"]]}, {"note": "R = R: keep it for free. $D[3][1] = \\min(3, 4, 2) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": ""}, {"id": "c3_3", "label": ""}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c2_1", "color": "blue"}, {"id": "c3_0", "color": "blue"}, {"id": "c2_0", "color": "blue"}, {"id": "c3_1", "color": "orange"}, {"id": "hr3", "color": "orange"}, {"id": "hc1", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "3"], ["insert (left + 1)", "4"], ["keep/replace (diag)", "2"]]}, {"note": "R ≠ O. $D[3][2] = \\min(2, 3, 3) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": ""}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c2_2", "color": "blue"}, {"id": "c3_1", "color": "blue"}, {"id": "c2_1", "color": "blue"}, {"id": "c3_2", "color": "orange"}, {"id": "hr3", "color": "orange"}, {"id": "hc2", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "2"], ["insert (left + 1)", "3"], ["keep/replace (diag)", "3"]]}, {"note": "R ≠ S. $D[3][3] = \\min(3, 3, 2) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": ""}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c2_3", "color": "blue"}, {"id": "c3_2", "color": "blue"}, {"id": "c2_2", "color": "blue"}, {"id": "c3_3", "color": "orange"}, {"id": "hr3", "color": "orange"}, {"id": "hc3", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "3"], ["insert (left + 1)", "3"], ["keep/replace (diag)", "2"]]}, {"note": "S ≠ R. $D[4][1] = \\min(3, 5, 4) = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": "3"}, {"id": "c4_2", "label": ""}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c3_1", "color": "blue"}, {"id": "c4_0", "color": "blue"}, {"id": "c3_0", "color": "blue"}, {"id": "c4_1", "color": "orange"}, {"id": "hr4", "color": "orange"}, {"id": "hc1", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "3"], ["insert (left + 1)", "5"], ["keep/replace (diag)", "4"]]}, {"note": "S ≠ O. $D[4][2] = \\min(3, 4, 3) = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": "3"}, {"id": "c4_2", "label": "3"}, {"id": "c4_3", "label": ""}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c3_2", "color": "blue"}, {"id": "c4_1", "color": "blue"}, {"id": "c3_1", "color": "blue"}, {"id": "c4_2", "color": "orange"}, {"id": "hr4", "color": "orange"}, {"id": "hc2", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "3"], ["insert (left + 1)", "4"], ["keep/replace (diag)", "3"]]}, {"note": "S = S: keep it for free. $D[4][3] = \\min(3, 4, 2) = 2$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": "3"}, {"id": "c4_2", "label": "3"}, {"id": "c4_3", "label": "2"}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": ""}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c3_3", "color": "blue"}, {"id": "c4_2", "color": "blue"}, {"id": "c3_2", "color": "blue"}, {"id": "c4_3", "color": "orange"}, {"id": "hr4", "color": "orange"}, {"id": "hc3", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "3"], ["insert (left + 1)", "4"], ["keep/replace (diag)", "2"]]}, {"note": "E ≠ R. $D[5][1] = \\min(4, 6, 5) = 4$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": "3"}, {"id": "c4_2", "label": "3"}, {"id": "c4_3", "label": "2"}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": "4"}, {"id": "c5_2", "label": ""}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c4_1", "color": "blue"}, {"id": "c5_0", "color": "blue"}, {"id": "c4_0", "color": "blue"}, {"id": "c5_1", "color": "orange"}, {"id": "hr5", "color": "orange"}, {"id": "hc1", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "4"], ["insert (left + 1)", "6"], ["keep/replace (diag)", "5"]]}, {"note": "E ≠ O. $D[5][2] = \\min(4, 5, 4) = 4$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": "3"}, {"id": "c4_2", "label": "3"}, {"id": "c4_3", "label": "2"}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": "4"}, {"id": "c5_2", "label": "4"}, {"id": "c5_3", "label": ""}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c4_2", "color": "blue"}, {"id": "c5_1", "color": "blue"}, {"id": "c4_1", "color": "blue"}, {"id": "c5_2", "color": "orange"}, {"id": "hr5", "color": "orange"}, {"id": "hc2", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "4"], ["insert (left + 1)", "5"], ["keep/replace (diag)", "4"]]}, {"note": "E ≠ S. $D[5][3] = \\min(3, 5, 4) = 3$.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": "3"}, {"id": "c4_2", "label": "3"}, {"id": "c4_3", "label": "2"}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": "4"}, {"id": "c5_2", "label": "4"}, {"id": "c5_3", "label": "3"}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "c4_3", "color": "blue"}, {"id": "c5_2", "color": "blue"}, {"id": "c4_2", "color": "blue"}, {"id": "c5_3", "color": "orange"}, {"id": "hr5", "color": "orange"}, {"id": "hc3", "color": "orange"}], "lines": [5, 6, 7, 8], "vars": [["delete (up + 1)", "3"], ["insert (left + 1)", "5"], ["keep/replace (diag)", "4"]]}, {"note": "$D[5][3] = 3$. Tracing back the choices gives a script: replace H→R, keep O, delete R, keep S, delete E.", "nodeLabels": [{"id": "c0_0", "label": "0"}, {"id": "c0_1", "label": "1"}, {"id": "c0_2", "label": "2"}, {"id": "c0_3", "label": "3"}, {"id": "c1_0", "label": "1"}, {"id": "c1_1", "label": "1"}, {"id": "c1_2", "label": "2"}, {"id": "c1_3", "label": "3"}, {"id": "c2_0", "label": "2"}, {"id": "c2_1", "label": "2"}, {"id": "c2_2", "label": "1"}, {"id": "c2_3", "label": "2"}, {"id": "c3_0", "label": "3"}, {"id": "c3_1", "label": "2"}, {"id": "c3_2", "label": "2"}, {"id": "c3_3", "label": "2"}, {"id": "c4_0", "label": "4"}, {"id": "c4_1", "label": "3"}, {"id": "c4_2", "label": "3"}, {"id": "c4_3", "label": "2"}, {"id": "c5_0", "label": "5"}, {"id": "c5_1", "label": "4"}, {"id": "c5_2", "label": "4"}, {"id": "c5_3", "label": "3"}], "nodeColors": [{"id": "hc0", "color": "gray"}, {"id": "hc1", "color": "gray"}, {"id": "hc2", "color": "gray"}, {"id": "hc3", "color": "gray"}, {"id": "hr0", "color": "gray"}, {"id": "hr1", "color": "gray"}, {"id": "hr2", "color": "gray"}, {"id": "hr3", "color": "gray"}, {"id": "hr4", "color": "gray"}, {"id": "hr5", "color": "gray"}, {"id": "c5_3", "color": "green"}, {"id": "c4_3", "color": "green"}, {"id": "c3_2", "color": "green"}, {"id": "c2_2", "color": "green"}, {"id": "c1_1", "color": "green"}, {"id": "c0_0", "color": "green"}], "vars": [["edit distance", "3"]]}], "caption": "Edit distance from HORSE to ROS. Orange: the cell being filled; blue: its three neighbors (up = delete, left = insert, diagonal = keep or replace). Green in the last frame: the path of one optimal edit script."},
        {
          type: 'derivation',
          title: 'Check one cell: $D[2][2]$ for HO → RO',
          steps: [
            { tex: 'D[1][2] + 1 = 2 + 1 = 3', why: 'Delete the O of HO, after turning H into RO ($2$ edits).' },
            { tex: 'D[2][1] + 1 = 2 + 1 = 3', why: 'Turn HO into R ($2$ edits), then insert O.' },
            { tex: 'D[1][1] + [\\text{O} \\ne \\text{O}] = 1 + 0 = 1', why: 'Turn H into R (one substitution), then keep the matching O for free.' },
            { tex: 'D[2][2] = \\min(3, 3, 1) = 1', why: 'The cheapest of the three ways the script can end.' },
          ],
          result: 'HO becomes RO with one substitution, as expected.',
        },
        {
          type: 'code',
          title: 'edit.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <string_view>
#include <vector>

// Levenshtein distance in O(nm) time and O(m) space: two rolling rows.
int editDistance(std::string_view x, std::string_view y) {
    std::vector<int> prev(y.size() + 1), cur(y.size() + 1);
    for (size_t j = 0; j <= y.size(); ++j) prev[j] = (int)j;   // row 0: insert j letters
    for (size_t i = 1; i <= x.size(); ++i) {
        cur[0] = (int)i;                                         // column 0: delete i letters
        for (size_t j = 1; j <= y.size(); ++j)
            cur[j] = std::min({prev[j] + 1,                      // delete x[i-1]
                               cur[j - 1] + 1,                   // insert y[j-1]
                               prev[j - 1] + (x[i - 1] != y[j - 1])});  // keep or replace
        std::swap(prev, cur);
    }
    return prev[y.size()];
}

int main() {
    std::printf("HORSE -> ROS: %d\\n", editDistance("HORSE", "ROS"));
    std::printf("kitten -> sitting: %d\\n", editDistance("kitten", "sitting"));

    // A game console suggesting the command you probably meant.
    const std::vector<std::string_view> commands = {"noclip", "god", "give", "spawn", "teleport", "kill", "fly"};
    for (std::string_view typed : {"nolcip", "spwan", "teleprot", "gve"}) {
        std::string_view best;
        int bestD = 1 << 30;
        for (auto c : commands)
            if (int d = editDistance(typed, c); d < bestD) { bestD = d; best = c; }
        std::printf("unknown command '%.*s' -- did you mean '%.*s'? (distance %d)\\n",
                    (int)typed.size(), typed.data(), (int)best.size(), best.data(), bestD);
    }
}`,
          output: `HORSE -> ROS: 3
kitten -> sitting: 3
unknown command 'nolcip' -- did you mean 'noclip'? (distance 2)
unknown command 'spwan' -- did you mean 'spawn'? (distance 2)
unknown command 'teleprot' -- did you mean 'teleport'? (distance 2)
unknown command 'gve' -- did you mean 'give'? (distance 1)`,
          annotations: [
            { lines: '8-9', text: 'Only two rows are kept: `prev` is row $i - 1$, `cur` is row $i$. Row $0$ is the base case $D[0][j] = j$.' },
            { lines: 11, text: 'Column $0$: turning $i$ letters into the empty string takes $i$ deletions.' },
            { lines: '13-15', text: 'The recurrence. `cur[j - 1]` is the left neighbor in the same row, already computed this pass.' },
            { lines: 16, text: '`std::swap` on vectors swaps their internal pointers in $O(1)$: no copying.' },
            { lines: '27-31', text: 'Suggest the closest command. Real consoles also cap the distance (say $\\le 2$) and prefer prefix matches.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Variants worth knowing',
          text: 'Levenshtein counts a swap of neighbors (`nolcip` → `noclip`) as $2$; the **Damerau** variant adds a transposition move costing $1$, which matches typing errors better. DNA alignment (Needleman–Wunsch) uses the same table with weighted scores. LCS is the special case with no substitutions: the insert/delete distance is $n + m - 2\\,\\mathrm{LCS}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'What is the edit distance (insertions, deletions and substitutions each cost $1$) from ROBOT to BOOT?',
      answer: '2',
      hint: 'Lengths differ by $1$, so at least one deletion is needed. Can you finish with only one more edit?',
      explanation: 'Align R O B O T with B O – O T: substitute R → B, keep O, delete B, keep O, keep T. That is $2$ edits. One edit is impossible: a single deletion from ROBOT gives OBOT, RBOT, ROOT, ROBT or ROBO, none of which is BOOT. The DP table agrees: $D[5][4] = 2$. Notice that the cheaper script is not "delete the R first" — that leaves OBOT, which still needs two substitutions.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'This edit-distance code returns $0$ for $x =$ `"abc"`, $y =$ `""` although the answer is $3$. Tap the buggy line.',
      lines: [
        '`for (int i = 0; i <= n; ++i) D[i][0] = 0;`',
        '`for (int j = 0; j <= m; ++j) D[0][j] = j;`',
        '`for (int i = 1; i <= n; ++i)`',
        '`  for (int j = 1; j <= m; ++j)`',
        '`    D[i][j] = std::min({D[i-1][j] + 1, D[i][j-1] + 1, D[i-1][j-1] + (x[i-1] != y[j-1])});`',
        '`return D[n][m];`',
      ],
      errorLines: [1],
      explanation: 'Line 1 sets the first column to $0$, claiming that turning $i$ letters into the empty string is free. It costs $i$ deletions: `D[i][0] = i`. With $m = 0$ the loops never fill anything and the function returns `D[3][0] = 0`; for longer $y$ the wrong border leaks into every cell (for example "abc" → "c" would come out $0$ instead of $2$). Base cases carry real costs in every DP: getting the borders wrong poisons every cell.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Recognizing sequence DPs',
      blocks: [
        {
          type: 'p',
          text: 'The four problems of this lesson cover most sequence questions you will meet. The skill is choosing the state.',
        },
        {
          type: 'table',
          headers: ['Problem', 'State', 'Transition reads', 'Time'],
          rows: [
            ['Maximum subarray (Kadane)', 'best sum **ending at** $i$', '$\\text{end}_{i-1}$', '$\\Theta(n)$'],
            ['LIS (quadratic)', 'longest run **ending at** $i$', 'all $j < i$ with $a_j < a_i$', '$\\Theta(n^2)$'],
            ['LIS (tails)', 'smallest tail for each length', 'one binary search', '$\\Theta(n \\log n)$'],
            ['LCS', 'prefix pair $(i, j)$', 'up, left, diagonal', '$\\Theta(nm)$'],
            ['Edit distance', 'prefix pair $(i, j)$', 'up, left, diagonal', '$\\Theta(nm)$'],
          ],
        },
        {
          type: 'list',
          items: [
            '**One sequence, contiguous** (subarray, substring): "ending at $i$" states, usually $\\Theta(n)$.',
            '**One sequence, subsequence**: "ending at $i$" plus a scan or a binary search over earlier elements.',
            '**Two sequences** (align, compare, transform, interleave): a 2D table over prefix pairs, filled row by row, with rolling rows if you only need the value.',
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Interview tells',
          text: '"Subarray" with sums means Kadane or prefix sums. "Subsequence" with "increasing", "chain" or "nesting" means LIS (sort by one key, LIS on the other for 2D nesting). "Two strings" with "minimum operations", "common", "match" or "align" means a prefix-pair table. Wildcard or regex matching (`?` and `*`) is the same table with different transitions.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Sequence DPs in games',
          text: 'Fuzzy matching of console commands and asset names (edit distance); comparing replays or network input logs to find where they diverge (LCS / diff); finding the best scoring streak or most profitable trading window in an economy sim (Kadane); and longest-chain puzzles such as stacking crates by size (LIS).',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'A build server must report which lines changed between two versions of a 10 000-line config file. Which DP is the core of this?',
      options: [
        { text: 'Kadane\'s maximum subarray', why: 'Kadane finds one contiguous block with the largest sum in a single sequence; it does not compare two sequences.' },
        { text: 'Longest increasing subsequence', why: 'LIS works within one sequence of comparable values. Lines are compared for equality between two files, not ordered.' },
        { text: 'Longest common subsequence of the two files\' lines', correct: true, why: 'Lines in the LCS are unchanged; every other line is reported as deleted or inserted. That is exactly what `diff` prints.' },
        { text: '0/1 knapsack over the lines', why: 'Knapsack picks a subset under a capacity; nothing here has weights, values or a capacity.' },
      ],
      explanation: 'Treat each line as a symbol and compute the LCS of the two line sequences. Kept lines form the LCS; the rest are minimal deletions and insertions. The plain table is $\\Theta(nm)$ — $10^8$ cells for two 10 000-line files — which is why production tools use Myers\' $O((n + m)D)$ algorithm, fast when the files differ in only $D$ places.',
    },
  ],
  takeaways: [
    'Kadane: $\\text{end}_i = \\max(a_i, \\text{end}_{i-1} + a_i)$ and the answer is $\\max_i \\text{end}_i$; restart when the run goes negative, and start from $a_0$ so all-negative arrays work.',
    'LIS: $L[i] = 1 + \\max L[j]$ over $j < i$ with $a_j < a_i$ is $\\Theta(n^2)$; keeping the smallest tail per length (a sorted array) with `lower_bound` is $\\Theta(n \\log n)$; use `upper_bound` for non-decreasing, and back-pointers to output the subsequence.',
    'LCS: match → diagonal $+ 1$, mismatch → $\\max$(up, left); $\\Theta(nm)$; tracing back gives the common subsequence, and the lines outside it are a `diff`.',
    'Edit distance: $\\min$(up $+ 1$, left $+ 1$, diagonal $+ [x_i \\ne y_j]$) with borders $D[i][0] = i$, $D[0][j] = j$; two rolling rows suffice for the value.',
    'Choose the state by the problem\'s shape: "ending at $i$" for one sequence, prefix pairs for two.',
  ],
  reading: [
    {
      title: 'Jeff Erickson — Algorithms, chapter 3 "Dynamic Programming"',
      url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      source: 'book',
      note: 'Sections on longest increasing subsequence and edit distance develop exactly these recurrences, with careful proofs.',
    },
    {
      title: 'Wikipedia — Longest increasing subsequence',
      url: 'https://en.wikipedia.org/wiki/Longest_increasing_subsequence',
      source: 'wikipedia',
      note: 'The $O(n \\log n)$ algorithm with predecessor reconstruction, and its connection to patience sorting.',
    },
    {
      title: 'Wikipedia — Levenshtein distance',
      url: 'https://en.wikipedia.org/wiki/Levenshtein_distance',
      source: 'wikipedia',
      note: 'The edit-distance recurrence, the two-row optimization and the Damerau transposition variant.',
    },
    {
      title: 'VisuAlgo',
      url: 'https://visualgo.net/en',
      source: 'other',
      note: 'Its recursion/DP visualizations let you watch subproblem DAGs collapse when memoized.',
    },
  ],
};
