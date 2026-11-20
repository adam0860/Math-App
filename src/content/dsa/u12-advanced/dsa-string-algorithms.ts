import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-string-algorithms',
  title: 'String Algorithms',
  summary: 'Finding a pattern in a text: why the naive scan can be quadratic, how KMP\'s failure function makes it linear, Rabin–Karp\'s rolling hash and its pitfalls, the Z-algorithm, and the C++ tools (`std::string_view`, `std::search`, searchers) for console commands and chat filters.',
  minutes: 21,
  objectives: [
    'Analyze naive pattern search and construct its worst-case input',
    'Compute the KMP failure function and run KMP matching, explaining why it is $O(n + m)$',
    'Implement Rabin–Karp with a rolling hash, and explain spurious hits, modulus choice and anti-hash inputs',
    'Use the Z-algorithm as an alternative linear-time matcher',
    'Use `std::string_view`, `std::string::find` and `std::search` with searchers safely and efficiently',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Naive search and its worst case',
      blocks: [
        {
          type: 'p',
          text: 'The problem: given a **text** $t$ of length $n$ and a **pattern** $p$ of length $m$, report every shift $s$ with $t[s..s+m-1] = p$. It sounds trivial, and the obvious algorithm is short: for each of the $n - m + 1$ shifts, compare characters left to right until one differs.',
        },
        {
          type: 'p',
          text: 'On ordinary text the first comparison usually fails, so it runs in about $n$ steps. But the worst case is $\\Theta(nm)$: text `aaaa…a`, pattern `aa…ab`. At every shift the scan matches $m - 1$ characters before failing on the `b`. And the work is wasted in a precise sense: after matching `aaa` at shift $s$, you *already know* the next text characters, yet the naive scan moves one step right and reads them again.',
        },
        {
          type: 'derivation',
          title: 'Count the comparisons: text `aaaaaa`, pattern `aab`',
          steps: [
            { tex: 'n - m + 1 = 6 - 3 + 1 = 4 \\text{ shifts}', why: 'The pattern can start at indices $0, 1, 2, 3$.' },
            { tex: '\\text{each shift: } a = a,\\ a = a,\\ a \\ne b \\implies 3 \\text{ comparisons}', why: 'Every alignment matches the two `a`s and fails on the final `b`.' },
            { tex: '4 \\times 3 = 12 = (n - m + 1)\\,m', why: 'The worst case is exactly this product: every shift does all $m$ comparisons.' },
          ],
          result: '$\\Theta(nm)$ in the worst case. Scale it up and it hurts: the program below spends $99$ million comparisons on a $100\\,001$-character text.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Why worst cases matter for strings',
          text: 'Worst-case inputs are not just theory. Players can type anything into chat, mods can ship any file, and network packets can be hostile. A chat filter or a log scanner with quadratic behavior is a denial-of-service bug waiting for someone to find the right string. The same goes for regular-expression engines that backtrack.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Naive search compares left to right and stops at the first mismatch. How many character comparisons does it make in total to search for `ab` in the text `aaaab`?',
      answer: '8',
      hint: 'There are $n - m + 1$ shifts. At each one, count comparisons until a mismatch or a full match.',
      explanation: '$n = 5$, $m = 2$, so shifts $0, 1, 2, 3$. Shifts $0$–$2$: `a = a`, then `a ≠ b`: $2$ comparisons each, $6$ total. Shift $3$: `a = a`, `b = b`: $2$ comparisons and a match. Total $8 = 4 \\times 2$: every shift used all $m$ comparisons, which is the worst case.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'KMP, part 1: the failure function',
      blocks: [
        {
          type: 'p',
          text: 'The Knuth–Morris–Pratt algorithm ([[dsa-kmp|KMP]]) never re-reads a text character. When a mismatch happens after $j$ matched characters, those $j$ characters are known: they equal $p[0..j-1]$. So the question "how far can the pattern slide?" depends only on the **pattern**, and can be precomputed.',
        },
        {
          type: 'definition',
          term: 'Border and failure function',
          text: 'A **border** of a string is a proper prefix that is also a suffix: `aba` is a border of `ababa`. The [[dsa-prefix-function|failure function]] (prefix function) is $\\pi[i]$ = the length of the longest border of $p[0..i]$.',
        },
        {
          type: 'p',
          text: 'Computing $\\pi$ is itself a little matching problem. Keep $k = \\pi[i-1]$, the current border. If $p[i] = p[k]$, the border extends: $\\pi[i] = k + 1$. If not, try the next shorter border, which is $\\pi[k - 1]$ (a border of a border is a border), and repeat until it extends or $k = 0$.',
        },
        {"type": "algo", "view": "array", "code": "std::vector<int> pi(m, 0);\nfor (int i = 1, k = 0; i < m; ++i) {\n  while (k > 0 && p[i] != p[k])\n    k = pi[k - 1];             // fall back\n  if (p[i] == p[k]) ++k;       // extend border\n  pi[i] = k;\n}", "interval": 1500, "frames": [{"note": "$\\pi[i]$ = length of the longest proper prefix of $p[0..i]$ that is also a suffix of it (a **border**). $\\pi[0] = 0$.", "array": ["a", "b", "a", "b", "a", "c", "a"], "marks": [{"index": 0, "color": "green"}], "pointers": [{"index": 0, "label": "i"}], "lines": [1], "vars": [["π", "0 · · · · · ·"]]}, {"note": "$p[1] = $ b matches no border extension (not even $p[0]$): $\\pi[1] = 0$.", "marks": [{"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "i"}, {"index": 0, "label": "k", "color": "blue"}], "lines": [5, 6], "vars": [["π", "0 0 · · · · ·"], ["k", "0"]]}, {"note": "$p[2] = p[0] = $ a: the border grows to length $1$, so $\\pi[2] = 1$.", "marks": [{"index": 0, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "i"}, {"index": 1, "label": "k", "color": "blue"}], "lines": [5, 6], "vars": [["π", "0 0 1 · · · ·"], ["k", "1"]]}, {"note": "$p[3] = p[1] = $ b: the border grows to length $2$, so $\\pi[3] = 2$.", "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "green"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "i"}, {"index": 2, "label": "k", "color": "blue"}], "lines": [5, 6], "vars": [["π", "0 0 1 2 · · ·"], ["k", "2"]]}, {"note": "$p[4] = p[2] = $ a: the border grows to length $3$, so $\\pi[4] = 3$.", "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "i"}, {"index": 3, "label": "k", "color": "blue"}], "lines": [5, 6], "vars": [["π", "0 0 1 2 3 · ·"], ["k", "3"]]}, {"note": "$p[5] = $ c $\\ne p[3] = $ b: the border of length $3$ cannot grow. Fall back to the next shorter border, $k = \\pi[2] = 1$.", "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "red"}, {"index": 5, "color": "red"}], "pointers": [{"index": 5, "label": "i"}, {"index": 3, "label": "k", "color": "blue"}], "lines": [3, 4], "vars": [["π", "0 0 1 2 3 · ·"], ["k", "3 → 1"]]}, {"note": "$p[5] = $ c $\\ne p[1] = $ b: the border of length $1$ cannot grow. Fall back to the next shorter border, $k = \\pi[0] = 0$.", "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "red"}, {"index": 5, "color": "red"}], "pointers": [{"index": 5, "label": "i"}, {"index": 1, "label": "k", "color": "blue"}], "lines": [3, 4], "vars": [["π", "0 0 1 2 3 · ·"], ["k", "1 → 0"]]}, {"note": "$p[5] = $ c matches no border extension (not even $p[0]$): $\\pi[5] = 0$.", "marks": [{"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "i"}, {"index": 0, "label": "k", "color": "blue"}], "lines": [5, 6], "vars": [["π", "0 0 1 2 3 0 ·"], ["k", "0"]]}, {"note": "$p[6] = p[0] = $ a: the border grows to length $1$, so $\\pi[6] = 1$.", "marks": [{"index": 0, "color": "blue"}, {"index": 6, "color": "orange"}], "pointers": [{"index": 6, "label": "i"}, {"index": 1, "label": "k", "color": "blue"}], "lines": [5, 6], "vars": [["π", "0 0 1 2 3 0 1"], ["k", "1"]]}, {"note": "$\\pi = [0, 0, 1, 2, 3, 0, 1]$. Each step increases $k$ by at most $1$ and every fall-back decreases it, so the total work is $O(m)$.", "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}], "vars": [["π", "0 0 1 2 3 0 1"]]}], "caption": "Computing the failure function of ababaca. Blue: the current border (a prefix that reappears as a suffix); green: the suffix copy; orange: the character just processed; red: a failed extension."},
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is linear',
          text: 'Each iteration of the outer loop increases $k$ by **at most one**. Each fall-back $k = \\pi[k - 1]$ **decreases** $k$ by at least one, and $k$ never goes below $0$. So the total number of fall-backs over the whole run is at most the total number of increases, which is less than $m$. That is an amortized argument (a potential function, $\\Phi = k$): $O(m)$ total, even though a single step can fall back several times.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Compute the failure function of the pattern `aabaaab`. What is $\\pi[6]$, the value for the whole pattern?',
      label: '$\\pi[6] =$',
      answer: '3',
      hint: 'Find the longest proper prefix of `aabaaab` that is also a suffix. Or compute $\\pi$ step by step: $[0, 1, 0, \\dots]$.',
      explanation: 'Step by step: $\\pi = [0, 1, 0, 1, 2, 2, 3]$. At $i = 5$ the border `aa` cannot extend (`a` vs `b`), so fall back to $\\pi[1] = 1$ and extend to `aa` again: $\\pi[5] = 2$. At $i = 6$ the `b` extends `aa` to `aab`: $\\pi[6] = 3$. Check directly: `aab` is both a prefix and a suffix of `aabaaab`, and the longer candidates `aaba`, `aabaa`, `aabaaa` are not suffixes.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'KMP, part 2: matching without looking back',
      blocks: [
        {
          type: 'p',
          text: 'Matching uses the same loop as computing $\\pi$, now with the text. Invariant: before reading $t[i]$, the last $j$ text characters equal $p[0..j-1]$, and $j$ is the largest such value. On a mismatch, the pattern slides so that its longest border lines up with the end of what was matched: $j = \\pi[j - 1]$. The text index $i$ never decreases.',
        },
        {"type": "algo", "view": "array", "code": "for (int i = 0, j = 0; i < n; ++i) {\n  while (j > 0 && t[i] != p[j])\n    j = pi[j - 1];          // shift the pattern\n  if (t[i] == p[j]) ++j;\n  if (j == m) {             // full match\n    report(i - m + 1);\n    j = pi[j - 1];\n  }\n}", "interval": 1400, "frames": [{"note": "Search for $p = $ ababaca in $t = $ abababaca. $j$ = how many pattern characters currently match, ending just before $t[i]$.", "array": ["a", "b", "a", "b", "a", "b", "a", "c", "a"], "pointers": [{"index": 0, "label": "i"}], "lines": [1], "vars": [["j", "0"], ["pattern", "ababaca"]]}, {"note": "$t[0] = p[0] = $ a: match, $j = 1$.", "marks": [{"index": 0, "color": "orange"}], "pointers": [{"index": 0, "label": "i, start"}], "lines": [4], "vars": [["j", "1"], ["comparisons", "1"], ["pattern now at", "0"]]}, {"note": "$t[1] = p[1] = $ b: match, $j = 2$.", "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "i"}, {"index": 0, "label": "start", "color": "blue"}], "lines": [4], "vars": [["j", "2"], ["comparisons", "2"], ["pattern now at", "0"]]}, {"note": "$t[2] = p[2] = $ a: match, $j = 3$.", "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "i"}, {"index": 0, "label": "start", "color": "blue"}], "lines": [4], "vars": [["j", "3"], ["comparisons", "3"], ["pattern now at", "0"]]}, {"note": "$t[3] = p[3] = $ b: match, $j = 4$.", "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "i"}, {"index": 0, "label": "start", "color": "blue"}], "lines": [4], "vars": [["j", "4"], ["comparisons", "4"], ["pattern now at", "0"]]}, {"note": "$t[4] = p[4] = $ a: match, $j = 5$.", "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "i"}, {"index": 0, "label": "start", "color": "blue"}], "lines": [4], "vars": [["j", "5"], ["comparisons", "5"], ["pattern now at", "0"]]}, {"note": "$t[5] = $ b $\\ne p[5] = $ c. Don't move $i$ back: the last $5$ text characters are $p[0..4]$, whose longest border has length $\\pi[4] = 3$. Set $j = 3$.", "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "red"}], "pointers": [{"index": 5, "label": "i"}, {"index": 0, "label": "old", "color": "gray"}, {"index": 2, "label": "new", "color": "blue"}], "lines": [2, 3], "vars": [["j", "3"], ["comparisons", "6"], ["pattern now at", "2"]]}, {"note": "$t[5] = p[3] = $ b: match, $j = 4$.", "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "i"}, {"index": 2, "label": "start", "color": "blue"}], "lines": [4], "vars": [["j", "4"], ["comparisons", "7"], ["pattern now at", "2"]]}, {"note": "$t[6] = p[4] = $ a: match, $j = 5$.", "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "orange"}], "pointers": [{"index": 6, "label": "i"}, {"index": 2, "label": "start", "color": "blue"}], "lines": [4], "vars": [["j", "5"], ["comparisons", "8"], ["pattern now at", "2"]]}, {"note": "$t[7] = p[5] = $ c: match, $j = 6$.", "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "orange"}], "pointers": [{"index": 7, "label": "i"}, {"index": 2, "label": "start", "color": "blue"}], "lines": [4], "vars": [["j", "6"], ["comparisons", "9"], ["pattern now at", "2"]]}, {"note": "$t[8] = p[6]$: $j = 7$, a **full match** at index $2$.", "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}, {"index": 8, "color": "orange"}], "pointers": [{"index": 8, "label": "i"}, {"index": 2, "label": "start", "color": "blue"}], "lines": [4, 5, 6], "vars": [["j", "7"], ["comparisons", "10"], ["pattern now at", "2"]]}, {"note": "Found the match at index $2$ with 10 character comparisons. The text pointer $i$ only ever moved forward.", "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}, {"index": 8, "color": "green"}], "vars": [["matches", "2"], ["comparisons", "10"]]}], "caption": "KMP scanning the text abababaca for ababaca ($\\pi = [0, 0, 1, 2, 3, 0, 1]$). Green: text characters currently matched by a pattern prefix; red: a mismatch. On a mismatch only $j$ changes."},
        {
          type: 'code',
          title: 'kmp.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <functional>
#include <string>
#include <string_view>
#include <vector>

long long comparisons = 0;
bool eq(char a, char b) { ++comparisons; return a == b; }

// Naive search: try every shift, compare left to right. O(nm) worst case.
std::vector<size_t> naiveSearch(std::string_view t, std::string_view p) {
    std::vector<size_t> hits;
    for (size_t s = 0; s + p.size() <= t.size(); ++s) {
        size_t j = 0;
        while (j < p.size() && eq(t[s + j], p[j])) ++j;
        if (j == p.size()) hits.push_back(s);
    }
    return hits;
}

// Failure function: pi[i] = length of the longest proper border of p[0..i].
std::vector<int> failure(std::string_view p) {
    std::vector<int> pi(p.size(), 0);
    for (size_t i = 1, k = 0; i < p.size(); ++i) {
        while (k > 0 && !eq(p[i], p[k])) k = pi[k - 1];
        if (eq(p[i], p[k])) ++k;
        pi[i] = (int)k;
    }
    return pi;
}

// Knuth-Morris-Pratt: the text index never moves backward. O(n + m).
std::vector<size_t> kmpSearch(std::string_view t, std::string_view p) {
    std::vector<int> pi = failure(p);
    std::vector<size_t> hits;
    for (size_t i = 0, j = 0; i < t.size(); ++i) {
        while (j > 0 && !eq(t[i], p[j])) j = pi[j - 1];
        if (eq(t[i], p[j])) ++j;
        if (j == p.size()) { hits.push_back(i + 1 - j); j = pi[j - 1]; }
    }
    return hits;
}

int main() {
    std::string text(100000, 'a');
    std::string pat = std::string(999, 'a') + "b";       // worst case for the naive search
    text += "b";

    comparisons = 0; auto h1 = naiveSearch(text, pat);
    std::printf("naive: %zu match(es), %lld comparisons\\n", h1.size(), comparisons);
    comparisons = 0; auto h2 = kmpSearch(text, pat);
    std::printf("KMP:   %zu match(es), %lld comparisons\\n", h2.size(), comparisons);

    // The standard library: std::string::find and std::search (with a Boyer-Moore searcher).
    std::printf("find:  match at %zu\\n", text.find(pat));
    auto it = std::search(text.begin(), text.end(),
                          std::boyer_moore_searcher(pat.begin(), pat.end()));
    std::printf("std::search + Boyer-Moore: match at %td\\n", it - text.begin());

    std::vector<int> pi = failure("ababaca");
    std::printf("pi(ababaca) =");
    for (int x : pi) std::printf(" %d", x);
    std::printf("\\n");
}`,
          output: `naive: 1 match(es), 99002000 comparisons
KMP:   1 match(es), 301996 comparisons
find:  match at 99001
std::search + Boyer-Moore: match at 99001
pi(ababaca) = 0 0 1 2 3 0 1`,
          annotations: [
            { lines: 9, text: 'Every character comparison goes through `eq`, so the program can count them.' },
            { lines: '25-29', text: 'The failure function: fall back along borders, then try to extend.' },
            { lines: '37-40', text: 'Matching. After a full match, `j = pi[j - 1]` keeps going, so overlapping matches (e.g. `aa` in `aaa`) are found.' },
            { lines: '46-48', text: 'The naive worst case: $n = 100\\,001$, $m = 1000$. Naive needs $\\approx nm$ comparisons; KMP about $3$ per character (including computing $\\pi$).' },
            { lines: '57-58', text: 'C++17 searchers: `std::search` with `std::boyer_moore_searcher` (or `boyer_moore_horspool_searcher`) skips ahead using the pattern\'s characters and is often sublinear on real text.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'What the standard library actually does',
          text: '`std::string::find` is the everyday tool. Library implementations typically scan for the first character with `memchr` (vectorized) and then compare, which is very fast on normal text but not guaranteed linear. For patterns searched many times or long patterns in long texts, construct a searcher once and reuse it. Boyer–Moore compares the pattern **right to left** and jumps by up to $m$ positions on a mismatch, so it often reads only a fraction of the text.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'This failure-function code produces wrong values (and can loop forever). Tap the line with the bug.',
      lines: [
        '`std::vector<int> pi(m, 0);`',
        '`for (int i = 1, k = 0; i < m; ++i) {`',
        '`    while (k > 0 && p[i] != p[k]) k = pi[k];`',
        '`    if (p[i] == p[k]) ++k;`',
        '`    pi[i] = k;`',
        '`}`',
      ],
      errorLines: [3],
      explanation: 'The fall-back must go to the longest border of the **matched part** $p[0..k-1]$, which is `pi[k - 1]`, not `pi[k]`. Using `pi[k]` looks at a prefix one character too long, and since $\\pi[k]$ can equal $k$ it can loop forever: for `aab`, at $i = 2$ it sets $k = \\pi[1] = 1$ again and again. Off-by-one errors between "length $k$" and "index $k - 1$" are the classic KMP bug; the fix is `k = pi[k - 1]`.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'KMP has a `while` loop inside a `for` loop over the text, yet it runs in $O(n + m)$. Which argument is correct?',
      options: [
        { text: 'The `while` loop runs at most once per text character.', why: 'False: a single mismatch can fall back several times (e.g. $j = 5 \\to 3 \\to 1 \\to 0$).' },
        { text: 'Each fall-back decreases $j$, $j$ increases by at most $1$ per text character and never goes below $0$, so the total number of fall-backs is at most $n$.', correct: true, why: 'An amortized (potential) argument: total decreases cannot exceed total increases, and there are at most $n$ increases.' },
        { text: 'The failure function makes the pattern shorter after each mismatch.', why: 'The pattern never changes; only $j$, the length of the current partial match, changes.' },
        { text: 'Because $\\pi[j] < j$, the loop runs $O(\\log m)$ times per character.', why: '$\\pi[j - 1] < j$ only guarantees a decrease of at least $1$, not a halving. The bound is amortized, not per character.' },
      ],
      explanation: 'Think of $j$ as money in a bank. Reading a text character deposits at most $1$ (when $j$ increases). Every fall-back withdraws at least $1$. The balance never goes negative, so total withdrawals $\\le$ total deposits $\\le n$. Adding the $n$ iterations of the `for` loop and $O(m)$ to build $\\pi$ gives $O(n + m)$ — the same accounting you used for dynamic-array doubling.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Rabin–Karp: comparing hashes instead of strings',
      blocks: [
        {
          type: 'p',
          text: '[[dsa-rabin-karp|Rabin–Karp]] turns each length-$m$ window of the text into a number and compares numbers. Read a string as digits in base $d$ and reduce modulo a prime $q$:',
        },
        {
          type: 'math',
          tex: 'h(c_0 c_1 \\dots c_{m-1}) = \\big(c_0 d^{m-1} + c_1 d^{m-2} + \\dots + c_{m-1}\\big) \\bmod q',
        },
        {
          type: 'p',
          text: 'The trick is the [[dsa-rolling-hash|rolling hash]]: sliding the window one step does not require rehashing all $m$ characters. Subtract the leaving character\'s contribution, shift by one place, add the new character:',
        },
        {
          type: 'theorem',
          name: 'Rolling update',
          tex: 'h_{s+1} = \\Big( d\\,\\big(h_s - t_s \\cdot d^{\\,m-1}\\big) + t_{s+m} \\Big) \\bmod q',
          text: 'With $d^{m-1} \\bmod q$ precomputed, each slide costs $O(1)$. In C++, add $q$ before taking `%` so the intermediate value is never negative.',
        },
        {"type": "algo", "view": "array", "code": "// h = d^(m-1) mod q, precomputed\nint ph = hash(p, m), th = hash(t, m);\nfor (int s = 0; ; ++s) {\n  if (th == ph && t.compare(s, m, p) == 0)\n    report(s);           // verified match\n  if (s + m == n) break;\n  th = (d * (th - t[s] * h) + t[s + m]) % q;\n  if (th < 0) th += q;\n}", "interval": 1000, "frames": [{"note": "Pattern 31415 has hash $31415 \\bmod 13 = 7$. Slide a window of $5$ digits along the text, updating its hash in $O(1)$.", "array": [2, 3, 5, 9, 0, 2, 3, 1, 4, 1, 5, 2, 6, 7, 3, 9, 9, 2, 1], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}], "lines": [1, 2], "vars": [["pattern hash", "7"]]}, {"note": "Window 23590: hash $8 \\ne 7$, skip without comparing characters.", "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}], "pointers": [{"index": 0, "label": "s"}], "lines": [4], "vars": [["window hash", "8"], ["pattern hash", "7"], ["verified matches", "0"], ["spurious hits", "0"]]}, {"note": "Roll: drop 2, add 2. Window 35902: hash $9 \\ne 7$, skip without comparing characters.", "marks": [{"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}], "pointers": [{"index": 1, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "9"], ["pattern hash", "7"], ["verified matches", "0"], ["spurious hits", "0"]]}, {"note": "Roll: drop 3, add 3. Window 59023: hash $3 \\ne 7$, skip without comparing characters.", "marks": [{"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}], "pointers": [{"index": 2, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "3"], ["pattern hash", "7"], ["verified matches", "0"], ["spurious hits", "0"]]}, {"note": "Roll: drop 5, add 1. Window 90231: hash $11 \\ne 7$, skip without comparing characters.", "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}], "pointers": [{"index": 3, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "11"], ["pattern hash", "7"], ["verified matches", "0"], ["spurious hits", "0"]]}, {"note": "Roll: drop 9, add 4. Window 02314: hash $0 \\ne 7$, skip without comparing characters.", "marks": [{"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}, {"index": 8, "color": "blue"}], "pointers": [{"index": 4, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "0"], ["pattern hash", "7"], ["verified matches", "0"], ["spurious hits", "0"]]}, {"note": "Roll: drop 0, add 1. Window 23141: hash $1 \\ne 7$, skip without comparing characters.", "marks": [{"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}, {"index": 8, "color": "blue"}, {"index": 9, "color": "blue"}], "pointers": [{"index": 5, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "1"], ["pattern hash", "7"], ["verified matches", "0"], ["spurious hits", "0"]]}, {"note": "Roll: drop 2, add 5. Window 31415: hash $7 = 7$ and the characters match. **Match** at shift $6$.", "marks": [{"index": 6, "color": "green"}, {"index": 7, "color": "green"}, {"index": 8, "color": "green"}, {"index": 9, "color": "green"}, {"index": 10, "color": "green"}], "pointers": [{"index": 6, "label": "s"}], "lines": [4, 5, 7, 8], "vars": [["window hash", "7"], ["pattern hash", "7"], ["verified matches", "1"], ["spurious hits", "0"]]}, {"note": "Roll: drop 3, add 2. Window 14152: hash $8 \\ne 7$, skip without comparing characters.", "marks": [{"index": 7, "color": "blue"}, {"index": 8, "color": "blue"}, {"index": 9, "color": "blue"}, {"index": 10, "color": "blue"}, {"index": 11, "color": "blue"}], "pointers": [{"index": 7, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "8"], ["pattern hash", "7"], ["verified matches", "1"], ["spurious hits", "0"]]}, {"note": "Roll: drop 1, add 6. Window 41526: hash $4 \\ne 7$, skip without comparing characters.", "marks": [{"index": 8, "color": "blue"}, {"index": 9, "color": "blue"}, {"index": 10, "color": "blue"}, {"index": 11, "color": "blue"}, {"index": 12, "color": "blue"}], "pointers": [{"index": 8, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "4"], ["pattern hash", "7"], ["verified matches", "1"], ["spurious hits", "0"]]}, {"note": "Roll: drop 4, add 7. Window 15267: hash $5 \\ne 7$, skip without comparing characters.", "marks": [{"index": 9, "color": "blue"}, {"index": 10, "color": "blue"}, {"index": 11, "color": "blue"}, {"index": 12, "color": "blue"}, {"index": 13, "color": "blue"}], "pointers": [{"index": 9, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "5"], ["pattern hash", "7"], ["verified matches", "1"], ["spurious hits", "0"]]}, {"note": "Roll: drop 1, add 3. Window 52673: hash $10 \\ne 7$, skip without comparing characters.", "marks": [{"index": 10, "color": "blue"}, {"index": 11, "color": "blue"}, {"index": 12, "color": "blue"}, {"index": 13, "color": "blue"}, {"index": 14, "color": "blue"}], "pointers": [{"index": 10, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "10"], ["pattern hash", "7"], ["verified matches", "1"], ["spurious hits", "0"]]}, {"note": "Roll: drop 5, add 9. Window 26739: hash $11 \\ne 7$, skip without comparing characters.", "marks": [{"index": 11, "color": "blue"}, {"index": 12, "color": "blue"}, {"index": 13, "color": "blue"}, {"index": 14, "color": "blue"}, {"index": 15, "color": "blue"}], "pointers": [{"index": 11, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "11"], ["pattern hash", "7"], ["verified matches", "1"], ["spurious hits", "0"]]}, {"note": "Roll: drop 2, add 9. Window 67399: hash $7 = 7$, but the characters differ: a **spurious hit**, caught by the check.", "marks": [{"index": 12, "color": "red"}, {"index": 13, "color": "red"}, {"index": 14, "color": "red"}, {"index": 15, "color": "red"}, {"index": 16, "color": "red"}], "pointers": [{"index": 12, "label": "s"}], "lines": [4, 5, 7, 8], "vars": [["window hash", "7"], ["pattern hash", "7"], ["verified matches", "1"], ["spurious hits", "1"]]}, {"note": "Roll: drop 6, add 2. Window 73992: hash $9 \\ne 7$, skip without comparing characters.", "marks": [{"index": 13, "color": "blue"}, {"index": 14, "color": "blue"}, {"index": 15, "color": "blue"}, {"index": 16, "color": "blue"}, {"index": 17, "color": "blue"}], "pointers": [{"index": 13, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "9"], ["pattern hash", "7"], ["verified matches", "1"], ["spurious hits", "1"]]}, {"note": "Roll: drop 7, add 1. Window 39921: hash $11 \\ne 7$, skip without comparing characters.", "marks": [{"index": 14, "color": "blue"}, {"index": 15, "color": "blue"}, {"index": 16, "color": "blue"}, {"index": 17, "color": "blue"}, {"index": 18, "color": "blue"}], "pointers": [{"index": 14, "label": "s"}], "lines": [4, 7, 8], "vars": [["window hash", "11"], ["pattern hash", "7"], ["verified matches", "1"], ["spurious hits", "1"]]}], "caption": "Rabin–Karp on digits with $d = 10$, $q = 13$ (the textbook example). Blue: the current window; green: a verified match; red: a spurious hit — equal hashes, different strings."},
        {
          type: 'derivation',
          title: 'Roll from $31415$ to $14152$ with $d = 10$, $q = 13$',
          steps: [
            { tex: 'h(31415) = 31415 \\bmod 13 = 7, \\qquad d^{m-1} = 10^4 \\equiv 3 \\pmod{13}', why: '$13 \\cdot 2416 = 31408$ and $13 \\cdot 769 = 9997$.' },
            { tex: 'h - t_s \\cdot d^{m-1} = 7 - 3 \\cdot 3 = -2', why: 'Remove the leading digit $3$, worth $3 \\cdot 10^4 \\equiv 3 \\cdot 3$.' },
            { tex: '10 \\cdot (-2) + 2 = -18 \\equiv -18 + 26 = 8 \\pmod{13}', why: 'Shift by one place and append the new digit $2$; add a multiple of $13$ to land in $[0, 13)$.' },
            { tex: '14152 = 13 \\cdot 1088 + 8 \\;\\checkmark', why: 'Direct check: the rolled hash equals the hash computed from scratch.' },
          ],
          result: 'One subtraction, one multiplication and one addition per slide, whatever the window length.',
        },
        {
          type: 'code',
          title: 'rabin_karp.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <string>
#include <string_view>
#include <vector>

// Polynomial hash modulo the prime 2^61 - 1; the 128-bit product avoids overflow.
constexpr std::uint64_t MOD = (1ULL << 61) - 1;
std::uint64_t mulmod(std::uint64_t a, std::uint64_t b) {
    unsigned __int128 x = (unsigned __int128)a * b;
    std::uint64_t r = (std::uint64_t)(x & MOD) + (std::uint64_t)(x >> 61);
    return r >= MOD ? r - MOD : r;
}

// All occurrences of p in t. Hash equality is only a filter: every hit is verified.
std::vector<size_t> rabinKarp(std::string_view t, std::string_view p, std::uint64_t base,
                              int& spurious) {
    std::vector<size_t> hits;
    size_t n = t.size(), m = p.size();
    if (m == 0 || m > n) return hits;
    std::uint64_t hp = 0, ht = 0, top = 1;              // top = base^(m-1)
    for (size_t i = 0; i < m; ++i) {
        hp = (mulmod(hp, base) + (unsigned char)p[i]) % MOD;
        ht = (mulmod(ht, base) + (unsigned char)t[i]) % MOD;
        if (i + 1 < m) top = mulmod(top, base);
    }
    for (size_t s = 0;; ++s) {
        if (hp == ht) {
            if (t.substr(s, m) == p) hits.push_back(s); else ++spurious;
        }
        if (s + m == n) break;
        // Roll: remove t[s] * base^(m-1), shift by one place, append t[s+m].
        std::uint64_t out = mulmod((unsigned char)t[s], top);
        ht = (ht + MOD - out) % MOD;
        ht = (mulmod(ht, base) + (unsigned char)t[s + m]) % MOD;
    }
    return hits;
}

// The classic trap: hashing "mod 2^64" by letting unsigned arithmetic overflow.
std::uint64_t overflowHash(std::string_view s, std::uint64_t base) {
    std::uint64_t h = 0;
    for (char c : s) h = h * base + (unsigned char)c;
    return h;
}

int main() {
    int spurious = 0;
    auto hits = rabinKarp("the noob said gg, then another noob said gg", "noob", 131, spurious);
    std::printf("'noob' found at:");
    for (size_t s : hits) std::printf(" %zu", s);
    std::printf("  (spurious hits: %d)\\n", spurious);

    // Thue-Morse strings: S_{k+1} = S_k + complement(S_k). For k >= 11 the pair
    // S_k and complement(S_k) collide under overflowHash for EVERY odd base.
    std::string a = "a", b = "b";
    for (int k = 0; k < 11; ++k) { std::string na = a + b, nb = b + a; a = na; b = nb; }
    for (std::uint64_t base : {31ULL, 131ULL, 1000003ULL}) {
        bool collide = overflowHash(a, base) == overflowHash(b, base);
        std::printf("length %zu, base %llu: overflow hashes %s\\n", a.size(),
                    (unsigned long long)base, collide ? "COLLIDE" : "differ");
    }
}`,
          output: `'noob' found at: 4 31  (spurious hits: 0)
length 2048, base 31: overflow hashes COLLIDE
length 2048, base 131: overflow hashes COLLIDE
length 2048, base 1000003: overflow hashes COLLIDE`,
          annotations: [
            { lines: '8-13', text: 'The Mersenne prime $2^{61} - 1$ makes reduction cheap: fold the high bits back onto the low bits. GCC/Clang\'s `unsigned __int128` holds the full product.' },
            { lines: 29, text: 'Equal hashes are only a hint. Verifying with a real comparison makes the algorithm always correct; a good hash just makes verification rare.' },
            { lines: '33-35', text: 'The roll. `+ MOD` before `%` avoids unsigned wrap-around when the subtraction would go negative.' },
            { lines: '41-45', text: 'Letting `uint64_t` overflow is hashing mod $2^{64}$ — a power of two, not a prime.' },
            { lines: '56-57', text: 'Thue–Morse strings: a known construction that makes mod-$2^{64}$ polynomial hashes collide for every odd base.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Rabin–Karp with $d = 10$ and $q = 11$ on a digit string. The current window is $47290$, with hash $47290 \\bmod 11 = 1$, and $10^4 \\bmod 11 = 1$. The window slides to $72905$ (drop $4$, append $5$). What is the new hash?',
      answer: '8',
      hint: 'Use $h\' = \\big(10\\,(h - 4 \\cdot 1) + 5\\big) \\bmod 11$, and bring a negative result back into $[0, 11)$.',
      explanation: 'Remove the leading $4$: $h - 4 \\cdot 1 = 1 - 4 = -3$. Shift and append: $10 \\cdot (-3) + 5 = -25$. Reduce: $-25 + 3 \\cdot 11 = 8$. Direct check: $72905 = 11 \\cdot 6627 + 8$. In C++, `-25 % 11` is $-3$, not $8$ — that is why the code adds $q$ before reducing.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Hashing pitfalls, and the Z-algorithm',
      blocks: [
        {
          type: 'p',
          text: 'Rabin–Karp\'s expected time is $O(n + m)$ when hash values behave randomly; its worst case is $O(nm)$ when almost every window is a hit (all-`a` text and pattern, or an adversary forcing collisions). Most bugs come from the hash itself:',
        },
        {
          type: 'list',
          items: [
            '**Modulus mod $2^{64}$ (overflow) or a small prime.** Overflow hashing has a known algebraic weakness (the Thue–Morse collision above), and with $q \\approx 10^9$ the [[dm-birthday-problem|birthday bound]] makes some collision likely among about $\\sqrt{q} \\approx 30\\,000$ distinct substrings. Use a large prime such as $2^{61} - 1$, or two independent moduli.',
            '**A fixed, public base.** If attackers know $d$ and $q$, they can construct collisions offline — the string version of [[dsa-hash-flooding|hash flooding]]. Pick the base at random at startup (seeded from a real entropy source).',
            '**Skipping verification.** Without the character check, a collision silently reports a false match. Keep the check unless you have deliberately accepted a tiny error rate (for example, deduplicating assets by hash).',
            '**Signedness and negative `%`.** In C++, `-3 % 13 == -3`. Add $q$ before reducing, or use unsigned arithmetic carefully.',
          ],
        },
        {
          type: 'p',
          text: 'Rabin–Karp shines when you search for **many patterns of the same length** at once (hash them all into a set and look each window up), or compare substrings in $O(1)$ after an $O(n)$ prefix-hash precomputation — the basis of many plagiarism detectors and the `rsync` file-sync algorithm.',
        },
        {
          type: 'heading',
          text: 'The Z-algorithm',
        },
        {
          type: 'p',
          text: 'Another linear-time matcher, often easier to remember than KMP. The [[dsa-z-algorithm|Z-array]] stores $Z[i]$ = the length of the longest substring starting at $i$ that matches a prefix of the string. Compute it for $p + \\# + t$ (with a separator that occurs in neither): every position with $Z[i] = m$ is a match. A "box" $[l, r)$ remembers the rightmost prefix-match seen so far, so values inside it are copied rather than recomputed; $r$ only moves right, giving $O(n + m)$.',
        },
        {
          type: 'code',
          title: 'zalg.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <string>
#include <vector>

// Z[i] = length of the longest substring starting at i that matches a prefix of s.
std::vector<int> zArray(const std::string& s) {
    int n = (int)s.size();
    std::vector<int> z(n, 0);
    for (int i = 1, l = 0, r = 0; i < n; ++i) {        // [l, r) = rightmost prefix-match box
        if (i < r) z[i] = std::min(r - i, z[i - l]);     // reuse what the box already proved
        while (i + z[i] < n && s[z[i]] == s[i + z[i]]) ++z[i];
        if (i + z[i] > r) { l = i; r = i + z[i]; }
    }
    return z;
}

int main() {
    std::string p = "aab", t = "baabaaab";
    std::vector<int> z = zArray(p + '#' + t);            // '#' occurs in neither string
    std::printf("Z =");
    for (int x : z) std::printf(" %d", x);
    std::printf("\\nmatches at:");
    for (size_t i = p.size() + 1; i < z.size(); ++i)
        if (z[i] == (int)p.size()) std::printf(" %zu", i - p.size() - 1);
    std::printf("\\n");
}`,
          output: `Z = 0 1 0 0 0 3 1 0 2 3 1 0
matches at: 1 5`,
          annotations: [
            { lines: 11, text: 'Inside the box, $s[i..]$ mirrors $s[i-l..]$, so $Z[i]$ starts at least at $\\min(r - i, Z[i - l])$ without any comparisons.' },
            { lines: 12, text: 'Extend by direct comparison; every successful comparison here moves $r$ right, which is why the total is linear.' },
            { lines: 20, text: 'The separator stops any match from running across the boundary between pattern and text.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'order',
      prompt: 'Rabin–Karp is run on a text whose very first window (shift $0$) matches the pattern. Put the steps in the order they are performed, up to moving on to shift $1$.',
      lines: [
        'Hash the pattern and the first window of the text (and $d^{m-1} \\bmod q$), each in $O(m)$.',
        'Compare the current window\'s hash with the pattern\'s hash.',
        'The hashes are equal, so compare the characters to rule out a spurious hit.',
        'The characters agree: report the current shift as a match.',
        'Roll the hash to the next window: remove the leaving character, multiply by $d$, add the entering character.',
      ],
      explanation: 'Nothing can be compared until both hashes exist. The first window must be tested **before** the first roll, or a match at shift $0$ would be missed. Characters are compared only after the hashes agree (that is the whole point of hashing), and a match is reported only after the characters agree. Rolling then moves to the next window, and the compare–verify–roll cycle repeats.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Strings in C++: `std::string_view`, `std::search`, commands and filters',
      blocks: [
        {
          type: 'p',
          text: '`std::string_view` (C++17) is a pointer plus a length: a read-only window onto characters owned by someone else. Passing and slicing it costs $O(1)$ with no allocation, which is exactly what parsers want. Tokenizing a console command into views of the original line allocates nothing per token.',
        },
        {
          type: 'code',
          title: 'console.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cctype>
#include <cstdio>
#include <string>
#include <string_view>
#include <vector>

// Split a console line into tokens WITHOUT copying: each token views the original buffer.
std::vector<std::string_view> tokenize(std::string_view line) {
    std::vector<std::string_view> out;
    while (true) {
        size_t b = line.find_first_not_of(' ');
        if (b == std::string_view::npos) break;
        line.remove_prefix(b);
        size_t e = line.find(' ');
        out.push_back(line.substr(0, e));              // substr on a view is O(1)
        if (e == std::string_view::npos) break;
        line.remove_prefix(e);
    }
    return out;
}

// Case-insensitive "does the message contain this word?" with std::search and a predicate.
bool containsIgnoreCase(std::string_view text, std::string_view word) {
    auto same = [](char a, char b) {
        return std::tolower((unsigned char)a) == std::tolower((unsigned char)b);
    };
    return std::search(text.begin(), text.end(), word.begin(), word.end(), same) != text.end();
}

int main() {
    std::string line = "  give   player2  medkit 3 ";
    std::vector<std::string_view> tokens = tokenize(line);
    std::printf("%zu tokens:", tokens.size());
    for (std::string_view tok : tokens) std::printf(" [%.*s]", (int)tok.size(), tok.data());
    std::printf("\\n");

    const std::vector<std::string_view> blocked = {"noob", "camper"};
    for (std::string_view msg : {"gg, total NOOB move", "nice shot", "stop CaMpEr-ing"}) {
        bool bad = std::any_of(blocked.begin(), blocked.end(),
                               [&](std::string_view w) { return containsIgnoreCase(msg, w); });
        std::printf("%-22.*s -> %s\\n", (int)msg.size(), msg.data(), bad ? "filtered" : "ok");
    }
}`,
          output: `4 tokens: [give] [player2] [medkit] [3]
gg, total NOOB move    -> filtered
nice shot              -> ok
stop CaMpEr-ing        -> filtered`,
          annotations: [
            { lines: '12-18', text: '`find_first_not_of`, `find`, `substr` and `remove_prefix` on a view only adjust a pointer and a length.' },
            { lines: '25-28', text: '`std::search` takes a comparison predicate, so case-insensitive matching needs no lowercase copy. Cast to `unsigned char` before `std::tolower`: passing a negative `char` is undefined behavior.' },
            { lines: 33, text: 'The views point into `line`. They are valid only while `line` is alive and unmodified.' },
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Dangling view',
            tone: 'bad',
            code: 'std::string_view name() {\n    std::string s = "player" + std::to_string(id);\n    return s;   // s is destroyed here\n}',
            text: 'The returned view points into a dead string: undefined behavior that often "works" in debug builds and crashes later.',
          },
          right: {
            title: 'Own the data',
            tone: 'good',
            code: 'std::string name() {\n    return "player" + std::to_string(id);\n}',
            text: 'Return a `std::string` when you create the characters. Use views for **parameters** and for slices of data whose lifetime is clearly longer.',
          },
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Text in games',
          text: 'Console commands and cheat codes (tokenize with views, then look the command up in a hash map or a trie), chat filters, localization keys, and log scanners. A real chat filter matches **many** words at once: the Aho–Corasick automaton generalizes KMP\'s failure links to a [[dsa-trie|trie]] of patterns and scans the message once, in $O(n + \\text{matches})$. Beware the "Scunthorpe problem": naive substring filters block innocent words that contain a banned one, so production filters match on word boundaries and use allow-lists.',
        },
        {
          type: 'table',
          headers: ['Method', 'Preprocessing', 'Search time', 'Best use'],
          rows: [
            ['Naive / `std::string::find`', 'none', '$O(nm)$ worst, fast in practice', 'short patterns, ordinary text'],
            ['KMP', '$O(m)$', '$O(n)$ worst case', 'guaranteed linear, streaming text'],
            ['Z-algorithm', '$O(n + m)$ combined', '$O(n + m)$', 'simple linear matcher, many string puzzles'],
            ['Rabin–Karp', '$O(m)$', '$O(n + m)$ expected', 'many patterns of one length, substring hashing'],
            ['Boyer–Moore searcher', '$O(m + \\sigma)$', 'often sublinear', 'long patterns in long texts'],
          ],
          caption: '$\\sigma$ is the alphabet size.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'This function is safe: `std::string_view firstWord(const std::string& line) { std::string copy = line; return std::string_view(copy).substr(0, copy.find(\' \')); }`',
      answer: false,
      explanation: 'The view points into `copy`, a local `std::string` that is destroyed when the function returns, so the caller receives a dangling view. Reading it is undefined behavior. Either return a `std::string`, or make the view into the caller\'s data: `std::string_view firstWord(std::string_view line) { return line.substr(0, line.find(\' \')); }` — that is safe as long as the caller\'s string outlives the result.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the Rabin–Karp rolling update for a window moving from shift $s$ to $s + 1$.',
      template: '$h_{s+1} = \\big(d \\cdot ($ ___ $) + $ ___ $\\big) \\bmod q$, where $d^{m-1} \\bmod q$ is precomputed.',
      blanks: [{ answers: ['$h_s - t_s \\cdot d^{m-1}$'] }, { answers: ['$t_{s+m}$'] }],
      wordBank: ['$h_s - t_s \\cdot d^{m-1}$', '$h_s - t_{s+m}$', '$h_s \\cdot d^{m-1}$', '$t_{s+m}$', '$t_s$', '$t_{s+m-1}$'],
      hint: 'Remove the leaving character\'s contribution, shift everything one place, then add the character entering on the right.',
      explanation: 'The leaving character $t_s$ is the most significant digit, worth $t_s \\cdot d^{m-1}$; subtract it. Multiplying by $d$ shifts every remaining digit up one place, and the new least significant digit is $t_{s+m}$, the character just right of the old window. In code, add $q$ before `%` so a negative intermediate does not produce a negative hash.',
    },
  ],
  takeaways: [
    'Naive search is $O(nm)$ in the worst case (`aaa…a` vs `aa…ab`) because it re-reads characters it has already matched.',
    'KMP precomputes the failure function $\\pi$ (longest border of each prefix) in $O(m)$ and matches in $O(n)$; on a mismatch $j = \\pi[j - 1]$ and the text pointer never moves back — an amortized argument bounds the fall-backs.',
    'Rabin–Karp compares rolling hashes, $h_{s+1} = (d(h_s - t_s d^{m-1}) + t_{s+m}) \\bmod q$, and verifies every hit; it is $O(n + m)$ expected and excels with many patterns.',
    'Hash pitfalls: overflow (mod $2^{64}$) and small moduli collide, fixed public bases invite attacks, negative `%` bites; use a large prime, a random base and verification.',
    '`std::string_view` makes parsing allocation-free but never owns its characters; `std::search` with predicates or Boyer–Moore searchers covers most real searching needs.',
  ],
  reading: [
    {
      title: 'Sedgewick & Wayne — Algorithms, 4th ed., section 5.3 "Substring Search"',
      url: 'https://algs4.cs.princeton.edu/home/',
      source: 'book',
      note: 'KMP (as a DFA), Boyer–Moore and Rabin–Karp side by side, with Java code and traces.',
    },
    {
      title: 'Wikipedia — Knuth–Morris–Pratt algorithm',
      url: 'https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm',
      source: 'wikipedia',
      note: 'The failure-function table, worked examples and the amortized analysis.',
    },
    {
      title: 'Wikipedia — Rabin–Karp algorithm',
      url: 'https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm',
      source: 'wikipedia',
      note: 'Rolling hashes, multiple-pattern search and the expected-time analysis.',
    },
    {
      title: 'cppreference — std::search',
      url: 'https://en.cppreference.com/w/cpp/algorithm/search',
      source: 'other',
      note: 'All overloads, including predicates and the C++17 searcher objects (default, Boyer–Moore, Boyer–Moore–Horspool).',
    },
  ],
};
