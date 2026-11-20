import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-backtracking',
  title: 'Backtracking and Branch and Bound',
  summary: 'Exhaustive search done smartly: the choose–explore–unchoose template, generating subsets, permutations and combinations, n-queens and Sudoku with pruning and constraint propagation, and branch and bound for optimization — the engine inside puzzle solvers and puzzle generators.',
  minutes: 21,
  objectives: [
    'Write the backtracking template (choose, explore, unchoose) and use it to generate subsets, permutations and combinations',
    'Draw the state-space tree of a search and count its nodes',
    'Prune with constraints (n-queens bitmasks) and order choices with the fewest-candidates heuristic (Sudoku)',
    'Explain constraint propagation and how puzzle generators use a solver that counts solutions',
    'Apply branch and bound to an optimization problem with an optimistic bound, and explain why the bound must never underestimate',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The backtracking template',
      blocks: [
        {
          type: 'p',
          text: 'Some problems have no clever shortcut: you must search through candidate solutions. [[dsa-backtracking|Backtracking]] organizes that search as a depth-first walk ([[dm-dfs|DFS]]) over a **state-space tree**: each node is a partial solution, each edge extends it by one choice, and the leaves are complete candidates. You never build the tree in memory; the recursion *is* the walk, and the call stack holds the current path.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Base case', text: 'If the partial solution is complete, record it (or check it) and return.' },
            { title: 'Choose', text: 'For each option still allowed at this step, apply it to the shared state (push onto the path, mark as used).' },
            { title: 'Explore', text: 'Recurse to make the next choice.' },
            { title: 'Unchoose', text: 'Undo exactly what "choose" did, so the state is back to how this call found it before trying the next option.' },
          ],
        },
        {"type": "algo", "view": "graph", "nodes": [{"id": "r", "x": 210, "y": 30, "label": "·"}, {"id": "nA", "x": 70, "y": 92, "label": "A"}, {"id": "nAB", "x": 34, "y": 152, "label": "B"}, {"id": "nABC", "x": 34, "y": 212, "label": "C"}, {"id": "nAC", "x": 106, "y": 152, "label": "C"}, {"id": "nACB", "x": 106, "y": 212, "label": "B"}, {"id": "nB", "x": 210, "y": 92, "label": "B"}, {"id": "nBA", "x": 174, "y": 152, "label": "A"}, {"id": "nBAC", "x": 174, "y": 212, "label": "C"}, {"id": "nBC", "x": 246, "y": 152, "label": "C"}, {"id": "nBCA", "x": 246, "y": 212, "label": "A"}, {"id": "nC", "x": 350, "y": 92, "label": "C"}, {"id": "nCA", "x": 314, "y": 152, "label": "A"}, {"id": "nCAB", "x": 314, "y": 212, "label": "B"}, {"id": "nCB", "x": 386, "y": 152, "label": "B"}, {"id": "nCBA", "x": 386, "y": 212, "label": "A"}], "edges": [{"from": "r", "to": "nA"}, {"from": "nA", "to": "nAB"}, {"from": "nAB", "to": "nABC"}, {"from": "nA", "to": "nAC"}, {"from": "nAC", "to": "nACB"}, {"from": "r", "to": "nB"}, {"from": "nB", "to": "nBA"}, {"from": "nBA", "to": "nBAC"}, {"from": "nB", "to": "nBC"}, {"from": "nBC", "to": "nBCA"}, {"from": "r", "to": "nC"}, {"from": "nC", "to": "nCA"}, {"from": "nCA", "to": "nCAB"}, {"from": "nC", "to": "nCB"}, {"from": "nCB", "to": "nCBA"}], "width": 420, "height": 250, "code": "void permute(std::vector<char>& path,\n             std::vector<bool>& used) {\n  if (path.size() == items.size()) {\n    output(path);            // a leaf\n    return;\n  }\n  for (size_t i = 0; i < items.size(); ++i) {\n    if (used[i]) continue;\n    used[i] = true;          // choose\n    path.push_back(items[i]);\n    permute(path, used);     // explore\n    path.pop_back();         // unchoose\n    used[i] = false;\n  }\n}", "interval": 1100, "frames": [{"note": "Start with an empty path. Every node of this **state-space tree** is a partial permutation; the leaves are complete ones.", "nodeColors": [{"id": "r", "color": "orange"}], "hidden": ["nA", "nAB", "nABC", "nAC", "nACB", "nB", "nBA", "nBAC", "nBC", "nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [], "lines": [1, 2], "vars": [["path", "[]"], ["used", "none"], ["output so far", "—"]]}, {"note": "Choose A (unused), recurse one level deeper.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "nA", "color": "orange"}], "hidden": ["nAB", "nABC", "nAC", "nACB", "nB", "nBA", "nBAC", "nBC", "nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nA", "color": "blue"}], "lines": [9, 10, 11], "vars": [["path", "[A]"], ["used", "A"], ["output so far", "—"]]}, {"note": "Choose B (unused), recurse one level deeper.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "nA", "color": "blue"}, {"id": "nAB", "color": "orange"}], "hidden": ["nABC", "nAC", "nACB", "nB", "nBA", "nBAC", "nBC", "nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nA", "color": "blue"}, {"from": "nA", "to": "nAB", "color": "blue"}], "lines": [9, 10, 11], "vars": [["path", "[A, B]"], ["used", "A, B"], ["output so far", "—"]]}, {"note": "Choose C: the path is complete, output ABC.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "nA", "color": "blue"}, {"id": "nAB", "color": "blue"}, {"id": "nABC", "color": "orange"}], "hidden": ["nAC", "nACB", "nB", "nBA", "nBAC", "nBC", "nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nA", "color": "blue"}, {"from": "nA", "to": "nAB", "color": "blue"}, {"from": "nAB", "to": "nABC", "color": "blue"}], "lines": [3, 4, 5], "vars": [["path", "[A, B, C]"], ["used", "A, B, C"], ["output so far", "ABC"]]}, {"note": "Choose C (unused), recurse one level deeper.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nA", "color": "blue"}, {"id": "nAC", "color": "orange"}], "hidden": ["nACB", "nB", "nBA", "nBAC", "nBC", "nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nA", "color": "blue"}, {"from": "nA", "to": "nAC", "color": "blue"}], "lines": [9, 10, 11], "vars": [["path", "[A, C]"], ["used", "A, C"], ["output so far", "ABC"]]}, {"note": "Choose B: the path is complete, output ACB.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nA", "color": "blue"}, {"id": "nAC", "color": "blue"}, {"id": "nACB", "color": "orange"}], "hidden": ["nB", "nBA", "nBAC", "nBC", "nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nA", "color": "blue"}, {"from": "nA", "to": "nAC", "color": "blue"}, {"from": "nAC", "to": "nACB", "color": "blue"}], "lines": [3, 4, 5], "vars": [["path", "[A, C, B]"], ["used", "A, C, B"], ["output so far", "ABC ACB"]]}, {"note": "Choose B (unused), recurse one level deeper.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nB", "color": "orange"}], "hidden": ["nBA", "nBAC", "nBC", "nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nB", "color": "blue"}], "lines": [9, 10, 11], "vars": [["path", "[B]"], ["used", "B"], ["output so far", "ABC ACB"]]}, {"note": "Choose A (unused), recurse one level deeper.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nB", "color": "blue"}, {"id": "nBA", "color": "orange"}], "hidden": ["nBAC", "nBC", "nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nB", "color": "blue"}, {"from": "nB", "to": "nBA", "color": "blue"}], "lines": [9, 10, 11], "vars": [["path", "[B, A]"], ["used", "B, A"], ["output so far", "ABC ACB"]]}, {"note": "Choose C: the path is complete, output BAC.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nB", "color": "blue"}, {"id": "nBA", "color": "blue"}, {"id": "nBAC", "color": "orange"}], "hidden": ["nBC", "nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nB", "color": "blue"}, {"from": "nB", "to": "nBA", "color": "blue"}, {"from": "nBA", "to": "nBAC", "color": "blue"}], "lines": [3, 4, 5], "vars": [["path", "[B, A, C]"], ["used", "B, A, C"], ["output so far", "ABC ACB BAC"]]}, {"note": "Choose C (unused), recurse one level deeper.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "nBAC", "color": "green"}, {"id": "nBA", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nB", "color": "blue"}, {"id": "nBC", "color": "orange"}], "hidden": ["nBCA", "nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nB", "color": "blue"}, {"from": "nB", "to": "nBC", "color": "blue"}], "lines": [9, 10, 11], "vars": [["path", "[B, C]"], ["used", "B, C"], ["output so far", "ABC ACB BAC"]]}, {"note": "Choose A: the path is complete, output BCA.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "nBAC", "color": "green"}, {"id": "nBA", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nB", "color": "blue"}, {"id": "nBC", "color": "blue"}, {"id": "nBCA", "color": "orange"}], "hidden": ["nC", "nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nB", "color": "blue"}, {"from": "nB", "to": "nBC", "color": "blue"}, {"from": "nBC", "to": "nBCA", "color": "blue"}], "lines": [3, 4, 5], "vars": [["path", "[B, C, A]"], ["used", "B, C, A"], ["output so far", "ABC ACB BAC BCA"]]}, {"note": "Choose C (unused), recurse one level deeper.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "nBAC", "color": "green"}, {"id": "nBA", "color": "gray"}, {"id": "nBCA", "color": "green"}, {"id": "nBC", "color": "gray"}, {"id": "nB", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nC", "color": "orange"}], "hidden": ["nCA", "nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nC", "color": "blue"}], "lines": [9, 10, 11], "vars": [["path", "[C]"], ["used", "C"], ["output so far", "ABC ACB BAC BCA"]]}, {"note": "Choose A (unused), recurse one level deeper.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "nBAC", "color": "green"}, {"id": "nBA", "color": "gray"}, {"id": "nBCA", "color": "green"}, {"id": "nBC", "color": "gray"}, {"id": "nB", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nC", "color": "blue"}, {"id": "nCA", "color": "orange"}], "hidden": ["nCAB", "nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nC", "color": "blue"}, {"from": "nC", "to": "nCA", "color": "blue"}], "lines": [9, 10, 11], "vars": [["path", "[C, A]"], ["used", "C, A"], ["output so far", "ABC ACB BAC BCA"]]}, {"note": "Choose B: the path is complete, output CAB.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "nBAC", "color": "green"}, {"id": "nBA", "color": "gray"}, {"id": "nBCA", "color": "green"}, {"id": "nBC", "color": "gray"}, {"id": "nB", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nC", "color": "blue"}, {"id": "nCA", "color": "blue"}, {"id": "nCAB", "color": "orange"}], "hidden": ["nCB", "nCBA"], "edgeColors": [{"from": "r", "to": "nC", "color": "blue"}, {"from": "nC", "to": "nCA", "color": "blue"}, {"from": "nCA", "to": "nCAB", "color": "blue"}], "lines": [3, 4, 5], "vars": [["path", "[C, A, B]"], ["used", "C, A, B"], ["output so far", "ABC ACB BAC BCA CAB"]]}, {"note": "Choose B (unused), recurse one level deeper.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "nBAC", "color": "green"}, {"id": "nBA", "color": "gray"}, {"id": "nBCA", "color": "green"}, {"id": "nBC", "color": "gray"}, {"id": "nB", "color": "gray"}, {"id": "nCAB", "color": "green"}, {"id": "nCA", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nC", "color": "blue"}, {"id": "nCB", "color": "orange"}], "hidden": ["nCBA"], "edgeColors": [{"from": "r", "to": "nC", "color": "blue"}, {"from": "nC", "to": "nCB", "color": "blue"}], "lines": [9, 10, 11], "vars": [["path", "[C, B]"], ["used", "C, B"], ["output so far", "ABC ACB BAC BCA CAB"]]}, {"note": "Choose A: the path is complete, output CBA.", "nodeColors": [{"id": "nABC", "color": "green"}, {"id": "nAB", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "nBAC", "color": "green"}, {"id": "nBA", "color": "gray"}, {"id": "nBCA", "color": "green"}, {"id": "nBC", "color": "gray"}, {"id": "nB", "color": "gray"}, {"id": "nCAB", "color": "green"}, {"id": "nCA", "color": "gray"}, {"id": "r", "color": "blue"}, {"id": "nC", "color": "blue"}, {"id": "nCB", "color": "blue"}, {"id": "nCBA", "color": "orange"}], "hidden": [], "edgeColors": [{"from": "r", "to": "nC", "color": "blue"}, {"from": "nC", "to": "nCB", "color": "blue"}, {"from": "nCB", "to": "nCBA", "color": "blue"}], "lines": [3, 4, 5], "vars": [["path", "[C, B, A]"], ["used", "C, B, A"], ["output so far", "ABC ACB BAC BCA CAB CBA"]]}, {"note": "All $3! = 6$ leaves reached, in lexicographic order, after visiting $1 + 3 + 6 + 6 = 16$ nodes. Each \"unchoose\" undid a choice so the next sibling could be tried.", "nodeColors": [{"id": "r", "color": "gray"}, {"id": "nA", "color": "gray"}, {"id": "nAB", "color": "gray"}, {"id": "nABC", "color": "green"}, {"id": "nAC", "color": "gray"}, {"id": "nACB", "color": "green"}, {"id": "nB", "color": "gray"}, {"id": "nBA", "color": "gray"}, {"id": "nBAC", "color": "green"}, {"id": "nBC", "color": "gray"}, {"id": "nBCA", "color": "green"}, {"id": "nC", "color": "gray"}, {"id": "nCA", "color": "gray"}, {"id": "nCAB", "color": "green"}, {"id": "nCB", "color": "gray"}, {"id": "nCBA", "color": "green"}], "hidden": [], "vars": [["output", "ABC ACB BAC BCA CAB CBA"]], "lines": [12, 13]}], "caption": "Backtracking through the permutations of A, B, C. Orange: the current node; blue: the path from the root (the current partial solution); gray: finished subtrees; green: complete permutations output."},
        {
          type: 'code',
          title: 'generate.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <string>
#include <vector>

// The backtracking template: choose, explore, unchoose.
void subsets(const std::string& s, size_t i, std::string& cur, std::vector<std::string>& out) {
    if (i == s.size()) { out.push_back(cur.empty() ? "{}" : cur); return; }
    subsets(s, i + 1, cur, out);              // skip s[i]
    cur.push_back(s[i]);                      // choose s[i]
    subsets(s, i + 1, cur, out);              // explore
    cur.pop_back();                           // unchoose
}

void permutations(const std::string& s, std::vector<bool>& used, std::string& cur,
                  std::vector<std::string>& out) {
    if (cur.size() == s.size()) { out.push_back(cur); return; }
    for (size_t i = 0; i < s.size(); ++i) {
        if (used[i]) continue;
        used[i] = true; cur.push_back(s[i]);    // choose
        permutations(s, used, cur, out);        // explore
        cur.pop_back(); used[i] = false;        // unchoose
    }
}

// k-combinations, pruned: stop when too few elements remain to reach size k.
void combinations(const std::string& s, size_t start, size_t k, std::string& cur,
                  std::vector<std::string>& out, long long& calls) {
    ++calls;
    if (cur.size() == k) { out.push_back(cur); return; }
    for (size_t i = start; i + (k - cur.size()) <= s.size(); ++i) {
        cur.push_back(s[i]);
        combinations(s, i + 1, k, cur, out, calls);
        cur.pop_back();
    }
}

void print(const char* label, const std::vector<std::string>& v) {
    std::printf("%s (%zu):", label, v.size());
    for (const auto& x : v) std::printf(" %s", x.c_str());
    std::printf("\\n");
}

int main() {
    std::string cur;
    std::vector<std::string> out;
    subsets("ABC", 0, cur, out);  print("subsets", out);

    out.clear(); std::vector<bool> used(3, false);
    permutations("ABC", used, cur, out);  print("permutations", out);

    out.clear(); long long calls = 0;
    combinations("ABCDE", 0, 3, cur, out, calls);  print("3-combinations", out);
    std::printf("combination calls: %lld\\n", calls);

    // The standard library generates permutations in place, in lexicographic order.
    std::string p = "ABC";
    std::printf("std::next_permutation:");
    do std::printf(" %s", p.c_str()); while (std::next_permutation(p.begin(), p.end()));
    std::printf("\\n");
}`,
          output: `subsets (8): {} C B BC A AC AB ABC
permutations (6): ABC ACB BAC BCA CAB CBA
3-combinations (10): ABC ABD ABE ACD ACE ADE BCD BCE BDE CDE
combination calls: 20
std::next_permutation: ABC ACB BAC BCA CAB CBA`,
          annotations: [
            { lines: '7-13', text: 'Subsets: two branches per element (skip it, take it), so $2^n$ leaves. Skipping first makes the empty set come out first.' },
            { lines: '18-23', text: 'Permutations: any unused element may come next. `used` is shared state, so it must be restored on line 22.' },
            { lines: 31, text: 'Pruning: if fewer elements remain than slots to fill, no leaf below can succeed, so the loop stops early. Only $20$ calls for $\\binom{5}{3} = 10$ outputs.' },
            { lines: '57-59', text: '`std::next_permutation` rearranges a range into the next lexicographic order and returns `false` after the last one: no recursion, $O(1)$ extra space.' },
          ],
        },
        {
          type: 'table',
          headers: ['Generate', 'Leaves', 'Total work', 'Interview examples'],
          rows: [
            ['Subsets of $n$', '$2^n$', '$\\Theta(n \\, 2^n)$ to output', 'subset sum, power set, word break'],
            ['Permutations of $n$', '$n!$', '$\\Theta(n \\cdot n!)$ to output', 'all orderings, anagrams, TSP by brute force'],
            ['$k$-combinations of $n$', '$\\binom{n}{k}$', '$\\Theta(k \\binom{n}{k})$ with pruning', 'combination sum, choose a squad of $k$'],
          ],
          caption: 'Generating everything is exponential no matter how it is coded; output size alone forces it. Backtracking earns its keep when pruning skips most of the tree.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'order',
      prompt: 'This **swap-based** generator is a different backtracking scheme. Put the permutations of `"123"` in the order it prints them.',
      code: 'void permute(std::string& a, size_t k) {\n    if (k == a.size()) { std::puts(a.c_str()); return; }\n    for (size_t i = k; i < a.size(); ++i) {\n        std::swap(a[k], a[i]);   // choose a[i] for position k\n        permute(a, k + 1);       // explore\n        std::swap(a[k], a[i]);   // unchoose\n    }\n}',
      lines: ['$123$', '$132$', '$213$', '$231$', '$321$', '$312$'],
      hint: 'Position $0$ gets $1$, then $2$ (swap with index $1$), then $3$ (swap with index $2$). Track what the swap does to the rest of the string.',
      explanation: 'With $a[0] = 1$: positions $1, 2$ give $123$ then $132$. Swapping $a[0]$ with $a[1]$ gives $213$, whose tail yields $213, 231$; swap back. Swapping $a[0]$ with $a[2]$ gives $321$ (not $312$!), whose tail yields $321$ then $312$. So the order is $123, 132, 213, 231, 321, 312$ — not lexicographic at the end. If you need sorted order, use the `used`-array version or `std::next_permutation`.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'How many nodes (including the root and the leaves) does the state-space tree for generating all permutations of $4$ distinct elements have, as in the A, B, C animation?',
      answer: '65',
      hint: 'Count by depth: depth $k$ has one node per ordered choice of $k$ distinct elements.',
      explanation: 'Depth $k$ has $4 \\cdot 3 \\cdots (4 - k + 1)$ nodes: $1 + 4 + 12 + 24 + 24 = 65$. Note that the last two levels are equal, because once three elements are placed the fourth is forced. For the A, B, C animation the same count is $1 + 3 + 6 + 6 = 16$. In general the tree has about $e \\cdot n!$ nodes, dominated by the leaves.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Pruning: n-queens',
      blocks: [
        {
          type: 'p',
          text: 'Place $n$ queens on an $n \\times n$ board so that none attacks another (no shared row, column or diagonal). Putting one queen per row already shrinks the search from $\\binom{n^2}{n}$ to $n^n$ boards. Backtracking goes much further by **pruning**: the moment a partial placement has a conflict, abandon the whole subtree below it.',
        },
        {"type": "algo", "view": "graph", "nodes": [{"id": "q0_0", "x": 60, "y": 34, "label": ""}, {"id": "q0_1", "x": 116, "y": 34, "label": ""}, {"id": "q0_2", "x": 172, "y": 34, "label": ""}, {"id": "q0_3", "x": 228, "y": 34, "label": ""}, {"id": "q1_0", "x": 60, "y": 86, "label": ""}, {"id": "q1_1", "x": 116, "y": 86, "label": ""}, {"id": "q1_2", "x": 172, "y": 86, "label": ""}, {"id": "q1_3", "x": 228, "y": 86, "label": ""}, {"id": "q2_0", "x": 60, "y": 138, "label": ""}, {"id": "q2_1", "x": 116, "y": 138, "label": ""}, {"id": "q2_2", "x": 172, "y": 138, "label": ""}, {"id": "q2_3", "x": 228, "y": 138, "label": ""}, {"id": "q3_0", "x": 60, "y": 190, "label": ""}, {"id": "q3_1", "x": 116, "y": 190, "label": ""}, {"id": "q3_2", "x": 172, "y": 190, "label": ""}, {"id": "q3_3", "x": 228, "y": 190, "label": ""}], "edges": [], "width": 300, "height": 236, "code": "bool place(int row) {\n  if (row == n) return true;     // all placed\n  for (int c = 0; c < n; ++c) {\n    if (col[c] || d1[row+c] || d2[row-c+n-1])\n      continue;                  // attacked\n    queen[row] = c;              // choose\n    col[c] = d1[row+c] = d2[row-c+n-1] = true;\n    if (place(row + 1)) return true;\n    col[c] = d1[row+c] = d2[row-c+n-1] = false;\n  }\n  return false;                  // backtrack\n}", "interval": 1500, "frames": [{"note": "Place one queen per row, top to bottom. A queen attacks its column and both diagonals.", "nodeLabels": [{"id": "q0_0", "label": ""}, {"id": "q0_1", "label": ""}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": ""}, {"id": "q1_3", "label": ""}, {"id": "q2_0", "label": ""}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_1", "color": "gray"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "gray"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[]"], ["placements tried", "0"]], "lines": [1]}, {"note": "Row 0: place a queen in column 0.", "nodeLabels": [{"id": "q0_0", "label": "Q"}, {"id": "q0_1", "label": ""}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": ""}, {"id": "q1_3", "label": ""}, {"id": "q2_0", "label": ""}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_0", "color": "orange"}, {"id": "q0_1", "color": "gray"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "gray"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[0]"], ["placements tried", "1"]], "lines": [4, 5, 6, 7]}, {"note": "Row 1: columns 0, 1 attacked (×); place a queen in column 2.", "nodeLabels": [{"id": "q0_0", "label": "Q"}, {"id": "q0_1", "label": ""}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": "×"}, {"id": "q1_1", "label": "×"}, {"id": "q1_2", "label": "Q"}, {"id": "q1_3", "label": ""}, {"id": "q2_0", "label": ""}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_0", "color": "blue"}, {"id": "q0_1", "color": "gray"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "red"}, {"id": "q1_1", "color": "red"}, {"id": "q1_2", "color": "orange"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[0, 2]"], ["placements tried", "2"]], "lines": [4, 5, 6, 7]}, {"note": "Row 2: no column left (× attacked, – failed). Dead end: backtrack to row 1.", "nodeLabels": [{"id": "q0_0", "label": "Q"}, {"id": "q0_1", "label": ""}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": "Q"}, {"id": "q1_3", "label": ""}, {"id": "q2_0", "label": "×"}, {"id": "q2_1", "label": "×"}, {"id": "q2_2", "label": "×"}, {"id": "q2_3", "label": "×"}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_0", "color": "blue"}, {"id": "q0_1", "color": "gray"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "blue"}, {"id": "q2_0", "color": "red"}, {"id": "q2_1", "color": "red"}, {"id": "q2_2", "color": "red"}, {"id": "q2_3", "color": "red"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[0, 2]"], ["placements tried", "2"]], "lines": [9, 11]}, {"note": "Row 1: columns 0, 1 attacked (×); column 2 already failed (–); place a queen in column 3.", "nodeLabels": [{"id": "q0_0", "label": "Q"}, {"id": "q0_1", "label": ""}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": "×"}, {"id": "q1_1", "label": "×"}, {"id": "q1_2", "label": "–"}, {"id": "q1_3", "label": "Q"}, {"id": "q2_0", "label": ""}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_0", "color": "blue"}, {"id": "q0_1", "color": "gray"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "red"}, {"id": "q1_1", "color": "red"}, {"id": "q1_2", "color": "purple"}, {"id": "q1_3", "color": "orange"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[0, 3]"], ["placements tried", "3"]], "lines": [4, 5, 6, 7]}, {"note": "Row 2: column 0 attacked (×); place a queen in column 1.", "nodeLabels": [{"id": "q0_0", "label": "Q"}, {"id": "q0_1", "label": ""}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": ""}, {"id": "q1_3", "label": "Q"}, {"id": "q2_0", "label": "×"}, {"id": "q2_1", "label": "Q"}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_0", "color": "blue"}, {"id": "q0_1", "color": "gray"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "gray"}, {"id": "q1_3", "color": "blue"}, {"id": "q2_0", "color": "red"}, {"id": "q2_1", "color": "orange"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[0, 3, 1]"], ["placements tried", "4"]], "lines": [4, 5, 6, 7]}, {"note": "Row 3: no column left (× attacked, – failed). Dead end: backtrack to row 2.", "nodeLabels": [{"id": "q0_0", "label": "Q"}, {"id": "q0_1", "label": ""}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": ""}, {"id": "q1_3", "label": "Q"}, {"id": "q2_0", "label": ""}, {"id": "q2_1", "label": "Q"}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": "×"}, {"id": "q3_1", "label": "×"}, {"id": "q3_2", "label": "×"}, {"id": "q3_3", "label": "×"}], "nodeColors": [{"id": "q0_0", "color": "blue"}, {"id": "q0_1", "color": "gray"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "gray"}, {"id": "q1_3", "color": "blue"}, {"id": "q2_1", "color": "blue"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "red"}, {"id": "q3_1", "color": "red"}, {"id": "q3_2", "color": "red"}, {"id": "q3_3", "color": "red"}], "vars": [["queens (col per row)", "[0, 3, 1]"], ["placements tried", "4"]], "lines": [9, 11]}, {"note": "Row 2: no column left (× attacked, – failed). Dead end: backtrack to row 1.", "nodeLabels": [{"id": "q0_0", "label": "Q"}, {"id": "q0_1", "label": ""}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": ""}, {"id": "q1_3", "label": "Q"}, {"id": "q2_0", "label": "×"}, {"id": "q2_1", "label": "–"}, {"id": "q2_2", "label": "×"}, {"id": "q2_3", "label": "×"}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_0", "color": "blue"}, {"id": "q0_1", "color": "gray"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "gray"}, {"id": "q1_3", "color": "blue"}, {"id": "q2_0", "color": "red"}, {"id": "q2_1", "color": "purple"}, {"id": "q2_2", "color": "red"}, {"id": "q2_3", "color": "red"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[0, 3]"], ["placements tried", "4"]], "lines": [9, 11]}, {"note": "Row 1: no column left (× attacked, – failed). Dead end: backtrack to row 0.", "nodeLabels": [{"id": "q0_0", "label": "Q"}, {"id": "q0_1", "label": ""}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": "×"}, {"id": "q1_1", "label": "×"}, {"id": "q1_2", "label": "–"}, {"id": "q1_3", "label": "–"}, {"id": "q2_0", "label": ""}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_0", "color": "blue"}, {"id": "q0_1", "color": "gray"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "red"}, {"id": "q1_1", "color": "red"}, {"id": "q1_2", "color": "purple"}, {"id": "q1_3", "color": "purple"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[0]"], ["placements tried", "4"]], "lines": [9, 11]}, {"note": "Row 0: column 0 already failed (–); place a queen in column 1.", "nodeLabels": [{"id": "q0_0", "label": "–"}, {"id": "q0_1", "label": "Q"}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": ""}, {"id": "q1_3", "label": ""}, {"id": "q2_0", "label": ""}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_0", "color": "purple"}, {"id": "q0_1", "color": "orange"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "gray"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[1]"], ["placements tried", "5"]], "lines": [4, 5, 6, 7]}, {"note": "Row 1: columns 0, 1, 2 attacked (×); place a queen in column 3.", "nodeLabels": [{"id": "q0_0", "label": ""}, {"id": "q0_1", "label": "Q"}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": "×"}, {"id": "q1_1", "label": "×"}, {"id": "q1_2", "label": "×"}, {"id": "q1_3", "label": "Q"}, {"id": "q2_0", "label": ""}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_1", "color": "blue"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "red"}, {"id": "q1_1", "color": "red"}, {"id": "q1_2", "color": "red"}, {"id": "q1_3", "color": "orange"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[1, 3]"], ["placements tried", "6"]], "lines": [4, 5, 6, 7]}, {"note": "Row 2: place a queen in column 0.", "nodeLabels": [{"id": "q0_0", "label": ""}, {"id": "q0_1", "label": "Q"}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": ""}, {"id": "q1_3", "label": "Q"}, {"id": "q2_0", "label": "Q"}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": ""}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_1", "color": "blue"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "gray"}, {"id": "q1_3", "color": "blue"}, {"id": "q2_0", "color": "orange"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "gray"}], "vars": [["queens (col per row)", "[1, 3, 0]"], ["placements tried", "7"]], "lines": [4, 5, 6, 7]}, {"note": "Row 3: columns 0, 1 attacked (×); place a queen in column 2.", "nodeLabels": [{"id": "q0_0", "label": ""}, {"id": "q0_1", "label": "Q"}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": ""}, {"id": "q1_3", "label": "Q"}, {"id": "q2_0", "label": "Q"}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": "×"}, {"id": "q3_1", "label": "×"}, {"id": "q3_2", "label": "Q"}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_1", "color": "blue"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "gray"}, {"id": "q1_3", "color": "blue"}, {"id": "q2_0", "color": "blue"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "red"}, {"id": "q3_1", "color": "red"}, {"id": "q3_2", "color": "orange"}], "vars": [["queens (col per row)", "[1, 3, 0, 2]"], ["placements tried", "8"]], "lines": [4, 5, 6, 7]}, {"note": "Solution: queens in columns [1, 3, 0, 2]. Only 8 placements were tried, instead of $4^4 = 256$ complete boards.", "nodeLabels": [{"id": "q0_0", "label": ""}, {"id": "q0_1", "label": "Q"}, {"id": "q0_2", "label": ""}, {"id": "q0_3", "label": ""}, {"id": "q1_0", "label": ""}, {"id": "q1_1", "label": ""}, {"id": "q1_2", "label": ""}, {"id": "q1_3", "label": "Q"}, {"id": "q2_0", "label": "Q"}, {"id": "q2_1", "label": ""}, {"id": "q2_2", "label": ""}, {"id": "q2_3", "label": ""}, {"id": "q3_0", "label": ""}, {"id": "q3_1", "label": ""}, {"id": "q3_2", "label": "Q"}, {"id": "q3_3", "label": ""}], "nodeColors": [{"id": "q0_1", "color": "green"}, {"id": "q0_3", "color": "gray"}, {"id": "q1_0", "color": "gray"}, {"id": "q1_2", "color": "gray"}, {"id": "q1_3", "color": "green"}, {"id": "q2_0", "color": "green"}, {"id": "q2_1", "color": "gray"}, {"id": "q2_3", "color": "gray"}, {"id": "q3_0", "color": "gray"}, {"id": "q3_2", "color": "green"}], "vars": [["queens (col per row)", "[1, 3, 0, 2]"], ["placements tried", "8"]], "lines": [2]}], "caption": "4-queens by backtracking. Q: queens (the newest orange). Red ×: squares attacked by a queen above; purple –: a column already tried in this row that led to a dead end. Gray squares are just the checkerboard pattern."},
        {
          type: 'p',
          text: 'Testing "is this square attacked?" must be fast, because it runs at every node. Three boolean arrays do it in $O(1)$: one per column, one per diagonal where $r + c$ is constant, and one per anti-diagonal where $r - c$ is constant. The program below packs them into bitmasks so that a single expression gives every safe column of the current row.',
        },
        {
          type: 'code',
          title: 'nqueens.cpp',
          runnable: true,
          code: `#include <cstdio>

// Count n-queens solutions. cols, d1, d2 are bitmasks of attacked columns for the CURRENT row:
// shifting the diagonal masks by one moves every diagonal attack one column per row.
long long nodes = 0;

long long solve(int n, unsigned cols, unsigned d1, unsigned d2) {
    unsigned full = (1u << n) - 1;
    if (cols == full) return 1;                          // n queens placed
    long long count = 0;
    unsigned open = full & ~(cols | d1 | d2);            // safe squares in this row
    while (open) {
        unsigned bit = open & -open;                     // lowest safe column
        open -= bit;
        ++nodes;
        count += solve(n, cols | bit, (d1 | bit) << 1, (d2 | bit) >> 1);
    }
    return count;
}

// No pruning: try all n^n ways to put one queen in each row, check only at the end.
long long bruteLeaves = 0;
bool safe(const int* q, int n) {
    for (int i = 0; i < n; ++i)
        for (int j = i + 1; j < n; ++j)
            if (q[i] == q[j] || q[i] - q[j] == i - j || q[i] - q[j] == j - i) return false;
    return true;
}
long long brute(int* q, int row, int n) {
    if (row == n) { ++bruteLeaves; return safe(q, n) ? 1 : 0; }
    long long c = 0;
    for (int col = 0; col < n; ++col) { q[row] = col; c += brute(q, row + 1, n); }
    return c;
}

int main() {
    for (int n = 4; n <= 12; ++n) {
        nodes = 0;
        long long s = solve(n, 0, 0, 0);
        std::printf("n=%2d  solutions=%6lld  queens placed=%8lld", n, s, nodes);
        if (n <= 7) {
            int q[16]; bruteLeaves = 0;
            long long b = brute(q, 0, n);
            std::printf("  | no pruning: %lld boards checked (%lld solutions)", bruteLeaves, b);
        }
        std::printf("\\n");
    }
}`,
          output: `n= 4  solutions=     2  queens placed=      16  | no pruning: 256 boards checked (2 solutions)
n= 5  solutions=    10  queens placed=      53  | no pruning: 3125 boards checked (10 solutions)
n= 6  solutions=     4  queens placed=     152  | no pruning: 46656 boards checked (4 solutions)
n= 7  solutions=    40  queens placed=     551  | no pruning: 823543 boards checked (40 solutions)
n= 8  solutions=    92  queens placed=    2056
n= 9  solutions=   352  queens placed=    8393
n=10  solutions=   724  queens placed=   35538
n=11  solutions=  2680  queens placed=  166925
n=12  solutions= 14200  queens placed=  856188`,
          annotations: [
            { lines: 11, text: 'All safe columns in one operation: not attacked by a column or either diagonal.' },
            { lines: 13, text: '`x & -x` isolates the lowest set bit (two\'s-complement trick); it is the next column to try.' },
            { lines: 16, text: 'Choose and explore in one call. Passing the masks **by value** makes "unchoose" automatic: the caller\'s copies were never modified.' },
            { lines: '29-34', text: 'The unpruned search fills all $n$ rows before checking anything: $n^n$ leaves.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why pruning early matters so much',
          text: 'A conflict found at depth $d$ removes every one of the $n^{n-d}$ completions below it. For $n = 7$ the output shows $551$ placements instead of $823\\,543$ checked boards: a factor of about $1500$. The deeper lesson: check constraints **as soon as** the variables they involve are assigned, not at the leaves. Exactly the same principle drives SAT solvers, Sudoku solvers and the A* search you saw for pathfinding.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'This permutation generator prints only `ABC` for the input `"ABC"` instead of all six permutations. Tap the buggy line.',
      lines: [
        '`if (cur.size() == s.size()) { out.push_back(cur); return; }`',
        '`for (size_t i = 0; i < s.size(); ++i) {`',
        '`    if (used[i]) continue;`',
        '`    used[i] = true; cur.push_back(s[i]);`',
        '`    permutations(s, used, cur, out);`',
        '`    cur.pop_back();`',
        '`}`',
      ],
      errorLines: [6],
      explanation: 'Line 6 undoes only half of the choice: it pops the character but never sets `used[i] = false`. After the first leaf, every element stays marked as used forever, so no other branch can choose anything and the search dies after `ABC`. "Unchoose" must restore **all** shared state that "choose" changed: `cur.pop_back(); used[i] = false;`.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Sudoku: choice order and constraint propagation',
      blocks: [
        {
          type: 'p',
          text: 'Sudoku is backtracking with $81$ variables (cells), domains $\\{1, \\dots, 9\\}$, and constraints (all different in each row, column and box). Two ideas turn a slow solver into an instant one.',
        },
        {
          type: 'definition',
          term: 'Fewest candidates first (MRV)',
          text: 'Always branch on the empty cell with the **minimum remaining values**. A cell with one candidate is forced, so branching on it costs nothing; a cell with zero candidates proves a dead end immediately, before any more work is wasted below it. This "fail first" ordering keeps the tree narrow near the root, where every pruned branch removes the most.',
        },
        {
          type: 'p',
          text: '[[dsa-constraint-propagation|Constraint propagation]] goes further: after each placement, remove that digit from every peer\'s candidates, and if some cell drops to one candidate, place it and propagate again. Simple rules like "naked singles" and "hidden singles" solve most newspaper puzzles with no guessing at all; backtracking is only needed when propagation stalls.',
        },
        {
          type: 'code',
          title: 'sudoku.cpp',
          runnable: true,
          code: `#include <bit>
#include <cstdio>
#include <string>

// Sudoku by backtracking. Bitmasks record which digits each row, column and box already uses.
struct Sudoku {
    int g[81];
    unsigned row[9] = {}, col[9] = {}, box[9] = {};
    long long nodes = 0;

    static int boxOf(int r, int c) { return r / 3 * 3 + c / 3; }
    unsigned candidates(int i) const {                   // digits 1..9 as bits 1..9
        int r = i / 9, c = i % 9;
        return ~(row[r] | col[c] | box[boxOf(r, c)]) & 0x3FE;
    }
    void set(int i, int d, bool on) {
        int r = i / 9, c = i % 9;
        unsigned b = 1u << d;
        row[r] ^= b; col[c] ^= b; box[boxOf(r, c)] ^= b;  // toggle: place or remove
        g[i] = on ? d : 0;
    }
    explicit Sudoku(const std::string& s) {
        for (int i = 0; i < 81; ++i) { g[i] = 0; if (s[i] != '.') set(i, s[i] - '0', true); }
    }
    // Pick the next empty cell: the first one, or the one with the fewest candidates (MRV).
    int pick(bool mrv) const {
        int best = -1, bestCount = 10;
        for (int i = 0; i < 81; ++i) {
            if (g[i]) continue;
            if (!mrv) return i;
            int k = std::popcount(candidates(i));
            if (k < bestCount) { best = i; bestCount = k; }
            if (k <= 1) break;                           // a forced cell (or a dead end): take it now
        }
        return best;
    }
    // Count solutions, stopping at \`limit\` (2 is enough to test uniqueness).
    int solve(bool mrv, int limit) {
        int i = pick(mrv);
        if (i < 0) return 1;                             // no empty cell: solved
        int found = 0;
        for (unsigned m = candidates(i); m && found < limit; m &= m - 1) {
            int d = std::countr_zero(m);
            ++nodes;
            set(i, d, true);                             // choose
            found += solve(mrv, limit - found);          // explore
            set(i, d, false);                            // unchoose
        }
        return found;
    }
};

int main() {
    struct { const char* name; std::string grid; } puzzles[] = {
        {"newspaper", "53..7....6..195....98....6.8...6...34..8.3..17...2...6.6....28....419..5....8..79"},
        {"AI Escargot", "1....7.9..3..2...8..96..5....53..9...1..8...26....4...3......1..4......7..7...3.."},
    };
    for (const auto& p : puzzles)
        for (bool mrv : {false, true}) {
            Sudoku s(p.grid);
            int sols = s.solve(mrv, 2);
            std::printf("%-11s %-17s solutions: %d  digits placed: %lld\\n",
                        p.name, mrv ? "fewest candidates" : "first empty cell", sols, s.nodes);
        }
}`,
          output: `newspaper   first empty cell  solutions: 1  digits placed: 4631
newspaper   fewest candidates solutions: 1  digits placed: 51
AI Escargot first empty cell  solutions: 1  digits placed: 18884
AI Escargot fewest candidates solutions: 1  digits placed: 2424`,
          annotations: [
            { lines: '12-15', text: 'Candidates of a cell = digits not used by its row, column or box: three ORs and a NOT on 9-bit masks.' },
            { lines: 19, text: 'XOR toggles the bit, so the same function both places and removes a digit: choose and unchoose stay symmetric.' },
            { lines: '31-33', text: 'MRV with `std::popcount` (C++20 `<bit>`). Stopping at a cell with $\\le 1$ candidate takes a forced move or detects a dead end at once.' },
            { lines: '42-43', text: 'Iterate over the set bits of the candidate mask; `std::countr_zero` gives the digit.' },
            { lines: 61, text: '`limit = 2`: stop as soon as a second solution appears. That is all a puzzle generator needs to know.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Generating puzzles, not just solving them',
          text: 'A typical generator first fills an empty grid with a **randomized** backtracking solver (shuffle the candidate order) to get a full solution, then removes clues one at a time, keeping each removal only if the solver still finds exactly one solution with `limit = 2`. Difficulty is then graded by which propagation rules a human would need. The same generate-and-verify loop builds levels for Sokoban-like games, nonograms and logic puzzles; wave function collapse in procedural generation is constraint propagation plus backtracking on tiles.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'Why does branching on the empty cell with the **fewest** candidates (MRV) usually shrink a Sudoku search tree so dramatically?',
      options: [
        { text: 'Because cells with few candidates are more likely to be near the top-left of the grid.', why: 'Position has nothing to do with it; MRV scans the whole grid for the most constrained cell.' },
        { text: 'Because it reduces the number of constraints that must be checked at each node.', why: 'The constraint checks per node are the same bitmask operations either way. The saving is in how many nodes exist.' },
        { text: 'Because forced cells cost no branching, and a cell with zero candidates exposes a dead end immediately, so wrong choices are abandoned high in the tree.', correct: true, why: 'The branching factor near the root is what multiplies the tree size; MRV keeps it at $1$ or $2$ whenever possible and fails fast otherwise.' },
        { text: 'Because it guarantees that no backtracking is ever needed.', why: 'On hard puzzles MRV still backtracks: the output shows $2424$ placements for the AI Escargot puzzle, which has $58$ blanks. It just backtracks far less.' },
      ],
      explanation: 'Tree size is roughly the product of branching factors along the path. Choosing the most constrained cell keeps that product small: one-candidate cells are free moves, and zero-candidate cells cut a doomed branch before anything else is tried below it. In the output, MRV places $51$ digits for a puzzle with $51$ blanks (no wrong guesses at all) versus $4631$ in first-empty-cell order.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Branch and bound: backtracking for optimization',
      blocks: [
        {
          type: 'p',
          text: 'For an optimization problem ("the most valuable loadout", "the shortest tour"), pruning infeasible branches is not enough: almost every branch is feasible. [[dsa-branch-and-bound|Branch and bound]] adds two things:',
        },
        {
          type: 'list',
          items: [
            'An **incumbent**: the best complete solution found so far.',
            'An **optimistic bound** for each node: a value that no solution in its subtree can beat (an upper bound when maximizing, a lower bound when minimizing), cheap to compute.',
          ],
        },
        {
          type: 'theorem',
          name: 'The pruning rule (maximization)',
          text: 'If $\\text{bound}(\\text{node}) \\le \\text{incumbent}$, discard the node and its whole subtree. This is safe **only** because the bound is optimistic: every solution below is $\\le$ bound $\\le$ incumbent.',
        },
        {
          type: 'p',
          text: 'For 0/1 knapsack, a great bound is the **fractional** knapsack: sort items by value per weight, take whole items greedily, then a fraction of the first one that does not fit. Allowing fractions can only help, so it never underestimates; and greedy is *optimal* for the fractional version, so it is as tight as it can be.',
        },
        {
          type: 'derivation',
          title: 'Bound at the root: capacity $9$, items $(w, v) = (3, 30), (4, 32), (5, 25)$',
          steps: [
            { tex: '\\tfrac{30}{3} = 10 \\;>\\; \\tfrac{32}{4} = 8 \\;>\\; \\tfrac{25}{5} = 5', why: 'Sort by value per unit weight; the items are already in that order.' },
            { tex: '\\text{take } (3, 30): \\text{ capacity } 6, \\text{ value } 30', why: 'The best ratio fits completely.' },
            { tex: '\\text{take } (4, 32): \\text{ capacity } 2, \\text{ value } 62', why: 'The next one fits completely too.' },
            { tex: '\\text{add } \\tfrac{2}{5} \\cdot 25 = 10: \\text{ bound } = 72', why: 'Only $2$ of the $5$ units of the last item fit; the relaxation lets us take that fraction.' },
          ],
          result: 'No 0/1 solution exceeds $72$. The true optimum is $62$ (items $1$ and $2$), so any subtree whose bound is $\\le 62$ can be cut once $62$ is the incumbent.',
        },
        {
          type: 'code',
          title: 'bnb.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <random>
#include <vector>

struct Item { int w, v; };
std::vector<Item> items;      // sorted by value/weight, best ratio first
int W, best;
long long nodes;

// Optimistic bound: fill the remaining capacity greedily, allowing a FRACTION of one item.
// No real 0/1 solution below this node can beat it.
double bound(size_t i, int cap, int value) {
    double b = value;
    for (; i < items.size() && items[i].w <= cap; ++i) { cap -= items[i].w; b += items[i].v; }
    if (i < items.size()) b += (double)items[i].v * cap / items[i].w;
    return b;
}

void search(size_t i, int cap, int value, bool prune) {
    ++nodes;
    best = std::max(best, value);                    // every node is a feasible loadout
    if (i == items.size()) return;
    if (prune && bound(i, cap, value) <= best) return;   // cannot beat the incumbent: cut
    if (items[i].w <= cap) search(i + 1, cap - items[i].w, value + items[i].v, prune);  // take
    search(i + 1, cap, value, prune);                                                    // skip
}

int main() {
    std::mt19937 rng(2024);
    for (int k = 0; k < 24; ++k) items.push_back({10 + (int)(rng() % 40), 10 + (int)(rng() % 60)});
    std::sort(items.begin(), items.end(),
              [](Item a, Item b) { return a.v * b.w > b.v * a.w; });   // ratio, no division
    W = 250;
    // Check with the DP from the knapsack lesson.
    std::vector<int> dp(W + 1, 0);
    for (Item it : items) for (int c = W; c >= it.w; --c) dp[c] = std::max(dp[c], dp[c - it.w] + it.v);
    std::printf("DP optimum: %d\\n", dp[W]);
    for (bool prune : {false, true}) {
        best = 0; nodes = 0;
        search(0, W, 0, prune);
        std::printf("%-20s best value %d after %lld nodes\\n",
                    prune ? "branch and bound:" : "plain backtracking:", best, nodes);
    }
}`,
          output: `DP optimum: 538
plain backtracking:  best value 538 after 3532160 nodes
branch and bound:    best value 538 after 87 nodes`,
          annotations: [
            { lines: '13-18', text: 'The fractional-knapsack bound. It relies on the items being sorted by ratio (line 32).' },
            { lines: 22, text: 'Every node is a feasible partial loadout, so it can update the incumbent right away.' },
            { lines: 24, text: 'The bound test. `<=` is fine when you need one optimal solution; use `<` to enumerate all of them.' },
            { lines: 25, text: 'Trying "take" first finds good incumbents early, which makes later cuts more effective.' },
            { lines: 33, text: 'Compare ratios by cross-multiplying: no floating-point division, no rounding.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'What makes branch and bound fast',
          text: 'Tight bounds (cut more), good first incumbents (start cutting sooner — often seed it with a greedy solution), and good branching order (explore the promising branch first). In the output, $87$ nodes replace $3.5$ million. Industrial solvers for scheduling, logistics and the traveling salesperson problem are branch and bound with very clever bounds from linear programming.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Branch and bound for 0/1 knapsack, capacity $10$. Items sorted by value per weight: $(w, v) = (2, 24)$, $(4, 36)$, $(5, 30)$, $(6, 24)$. What is the fractional-knapsack **bound** at the root?',
      answer: '84',
      hint: 'Take whole items in order while they fit, then a fraction of the first one that does not.',
      explanation: 'Take $(2, 24)$: capacity $8$, value $24$. Take $(4, 36)$: capacity $4$, value $60$. $(5, 30)$ does not fit; take $\\tfrac{4}{5}$ of it, worth $24$. Bound $= 60 + 24 = 84$. The true 0/1 optimum is $66$, from $(4, 36) + (5, 30)$ with weight $9$ — it skips the best-ratio item, which is exactly why greedy alone is not enough. Since $66 \\le 84$, the bound did its job: optimistic, but never below the truth.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'In branch and bound for a **maximization** problem, it is safe to use a bound that sometimes **underestimates** the best value in a subtree, as long as it is usually close.',
      answer: false,
      explanation: 'A bound that underestimates can fall below the incumbent even though the subtree contains a better solution, and then the rule "prune if bound $\\le$ incumbent" throws the optimum away. The bound must be optimistic for **every** node (an upper bound when maximizing). A loose but valid bound only costs speed; an invalid one costs correctness. If you deliberately accept that trade, you have a heuristic, not branch and bound.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Choosing a search strategy',
      blocks: [
        {
          type: 'p',
          text: 'Backtracking is the tool of last resort that you will still reach for constantly, because many puzzle and planning problems are NP-hard (next lesson but one) and have no known polynomial algorithm. The art is in shrinking the tree.',
        },
        {
          type: 'table',
          headers: ['Situation', 'Tool', 'Why'],
          rows: [
            ['Need *all* solutions or *any* solution satisfying constraints', 'Backtracking + pruning + MRV', 'Constraint checks cut infeasible subtrees early.'],
            ['Need the *best* solution', 'Branch and bound', 'Optimistic bounds cut subtrees that cannot beat the incumbent.'],
            ['Subproblems repeat (same state reached by different paths)', 'Dynamic programming / memoized search', 'Solve each state once instead of once per path.'],
            ['Huge space, "good enough" is fine', 'Heuristics, local search', 'Trade optimality for speed (next lessons).'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Backtracking or DP?',
          text: 'If the same partial state can be reached along different paths, plain backtracking re-solves it each time. Counting subsets of $\\{1, \\dots, 40\\}$ with a given sum by backtracking explores up to $2^{40}$ nodes; memoizing on (index, remaining sum) collapses it to at most $40 \\times$ sum states. When the "future" depends only on a small summary of the past, memoize.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Backtracking in games',
          text: 'Puzzle solvers and generators (Sudoku, nonograms, Sokoban level validation), wave function collapse for tile maps, finding a valid seating of units in formation slots, checking that a procedurally generated dungeon\'s locks and keys are solvable, and AI planners that search action sequences with depth limits. Budget it: give the search a node limit per frame and keep the best answer so far, so a hard case degrades gracefully instead of stalling a frame.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Interview pattern',
          text: '"Return **all** ..." (subsets, permutations, combinations, partitions, valid parentheses, word search paths, n-queens boards) almost always means backtracking. Say the template out loud, state what is shared state and how you undo it, and mention the pruning condition. Then give the complexity as (number of leaves) × (work per leaf).',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Complete the backtracking loop body for choosing the next element of a permutation.',
      template: '`if (used[i]) continue;` then ___, then ___, then ___.',
      blanks: [{ answers: ['`used[i] = true; cur.push_back(s[i]);`'] }, { answers: ['`permutations(s, used, cur, out);`'] }, { answers: ['`cur.pop_back(); used[i] = false;`'] }],
      wordBank: ['`used[i] = true; cur.push_back(s[i]);`', '`permutations(s, used, cur, out);`', '`cur.pop_back(); used[i] = false;`', '`cur.clear();`', '`return;`'],
      hint: 'Choose, explore, unchoose.',
      explanation: 'Choose (mark the element used and append it), explore (recurse to fill the next position), unchoose (pop it and mark it unused) so that the next iteration of the loop starts from exactly the state this call received. `cur.clear()` would wipe the choices made by the callers above, and an early `return` would skip the remaining siblings.',
    },
  ],
  takeaways: [
    'Backtracking is DFS over a state-space tree of partial solutions: base case, then for each option choose → explore → unchoose, restoring all shared state.',
    'Subsets have $2^n$ leaves, permutations $n!$, $k$-combinations $\\binom{n}{k}$; generating them all is exponential, and `std::next_permutation` does permutations without recursion.',
    'Prune as early as possible (n-queens checks columns and diagonals with $O(1)$ masks): a conflict at depth $d$ removes a whole subtree.',
    'Branch on the most constrained variable (MRV) and propagate constraints; a solver that stops at two solutions is the core of a puzzle generator.',
    'Branch and bound keeps an incumbent and prunes nodes whose optimistic bound cannot beat it; for knapsack the fractional relaxation is the classic bound, and an underestimating bound breaks correctness.',
  ],
  reading: [
    {
      title: 'Jeff Erickson — Algorithms, chapter 2 "Backtracking"',
      url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      source: 'book',
      note: 'n-queens, subset sum and text segmentation, with the clearest explanation of what the recursion must remember.',
    },
    {
      title: 'Wikipedia — Eight queens puzzle',
      url: 'https://en.wikipedia.org/wiki/Eight_queens_puzzle',
      source: 'wikipedia',
      note: 'Solution counts for every $n$, the backtracking algorithm and constructive solutions that need no search.',
    },
    {
      title: 'Wikipedia — Sudoku solving algorithms',
      url: 'https://en.wikipedia.org/wiki/Sudoku_solving_algorithms',
      source: 'wikipedia',
      note: 'Backtracking, constraint programming and exact cover (Knuth\'s Algorithm X) applied to the same puzzle.',
    },
    {
      title: 'Wikipedia — Branch and bound',
      url: 'https://en.wikipedia.org/wiki/Branch_and_bound',
      source: 'wikipedia',
      note: 'The general scheme, node-selection strategies, and its role inside integer-programming solvers.',
    },
  ],
};
