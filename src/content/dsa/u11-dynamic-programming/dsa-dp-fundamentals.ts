import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-dp-fundamentals',
  title: 'Dynamic Programming Fundamentals',
  summary: 'Optimal substructure and overlapping subproblems, memoization vs tabulation, and a recipe for states and transitions — worked on climbing stairs and both kinds of coin change, with solution reconstruction and space optimization.',
  minutes: 20,
  objectives: [
    'Recognize the two properties that make dynamic programming apply: optimal substructure and overlapping subproblems',
    'Write the same DP top-down (memoization) and bottom-up (tabulation), and explain the trade-offs between them',
    'Design a DP by defining the state in words, the transition, the base cases and an evaluation order, and get its running time as states × work per state',
    'Solve min-coin change and count coin combinations, and explain why the loop order decides between combinations and ordered sequences',
    'Reconstruct an optimal solution from stored choices, and shrink a table to a rolling array when only the value is needed',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'When recursion keeps solving the same problem',
      blocks: [
        {
          type: 'p',
          text: 'In Discrete Math you met [[dm-memoization|memoization]]: the naive recursion for the [[dm-fibonacci-numbers|Fibonacci numbers]] makes exponentially many calls, but there are only $n + 1$ *different* calls, so caching each answer makes it linear. [[dsa-dynamic-programming|Dynamic programming]] (DP) turns that one trick into a design method that solves a huge family of optimization and counting problems: shortest routes, optimal loadouts, spell checkers, `diff`, speech recognition, AI planning.',
        },
        {
          type: 'p',
          text: 'Here is the running example. You climb a staircase of $n$ steps, taking $1$ or $2$ steps at a time. How many different sequences of moves reach the top? Your last move was either a $1$ (from step $n - 1$) or a $2$ (from step $n - 2$), and those two groups don\'t overlap, so $\\text{ways}(n) = \\text{ways}(n - 1) + \\text{ways}(n - 2)$ with $\\text{ways}(0) = \\text{ways}(1) = 1$.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg"><line x1="138.9" y1="50.1" x2="101.1" y2="84.9" stroke="currentColor" stroke-width="1.6"/><line x1="161.5" y1="49.7" x2="203.5" y2="85.3" stroke="currentColor" stroke-width="1.6"/><line x1="81.9" y1="107.7" x2="63.1" y2="137.3" stroke="currentColor" stroke-width="1.6"/><line x1="98.1" y1="107.7" x2="116.9" y2="137.3" stroke="currentColor" stroke-width="1.6"/><line x1="207.8" y1="108.2" x2="192.2" y2="136.8" stroke="currentColor" stroke-width="1.6"/><line x1="222.2" y1="108.2" x2="237.8" y2="136.8" stroke="currentColor" stroke-width="1.6"/><line x1="48.8" y1="163.7" x2="36.2" y2="191.3" stroke="currentColor" stroke-width="1.6"/><line x1="61.2" y1="163.7" x2="73.8" y2="191.3" stroke="currentColor" stroke-width="1.6"/><line x1="400.0" y1="55.0" x2="400.0" y2="70.0" stroke="currentColor" stroke-width="1.6"/><path d="M400.0,70.0 L396.2,61.9 L403.8,61.9 Z" fill="currentColor"/><line x1="400.0" y1="100.0" x2="400.0" y2="115.0" stroke="currentColor" stroke-width="1.6"/><path d="M400.0,115.0 L396.2,106.9 L403.8,106.9 Z" fill="currentColor"/><line x1="400.0" y1="145.0" x2="400.0" y2="160.0" stroke="currentColor" stroke-width="1.6"/><path d="M400.0,160.0 L396.2,151.9 L403.8,151.9 Z" fill="currentColor"/><line x1="400.0" y1="190.0" x2="400.0" y2="205.0" stroke="currentColor" stroke-width="1.6"/><path d="M400.0,205.0 L396.2,196.9 L403.8,196.9 Z" fill="currentColor"/><path d="M409.0,52.0 Q434.0,85.0 409.0,118.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M409.0,118.0 L410.9,109.2 L417.0,113.8 Z" fill="currentColor"/><path d="M391.0,97.0 Q366.0,130.0 391.0,163.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M391.0,163.0 L383.0,158.8 L389.1,154.2 Z" fill="currentColor"/><path d="M409.0,142.0 Q434.0,175.0 409.0,208.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M409.0,208.0 L410.9,199.2 L417.0,203.8 Z" fill="currentColor"/><circle cx="150" cy="40" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="45" text-anchor="middle" font-size="14">4</text><circle cx="90" cy="95" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90" y="100" text-anchor="middle" font-size="14">3</text><circle cx="215" cy="95" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="215" y="100" text-anchor="middle" font-size="14" class="t-orange">2</text><circle cx="55" cy="150" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="55" y="155" text-anchor="middle" font-size="14" class="t-orange">2</text><circle cx="125" cy="150" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="125" y="155" text-anchor="middle" font-size="14">1</text><circle cx="185" cy="150" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="185" y="155" text-anchor="middle" font-size="14">1</text><circle cx="245" cy="150" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="245" y="155" text-anchor="middle" font-size="14">0</text><circle cx="30" cy="205" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="30" y="210" text-anchor="middle" font-size="14">1</text><circle cx="80" cy="205" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="80" y="210" text-anchor="middle" font-size="14">0</text><circle cx="400" cy="40" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="400" y="45" text-anchor="middle" font-size="14">4</text><circle cx="400" cy="85" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="400" y="90" text-anchor="middle" font-size="14">3</text><circle cx="400" cy="130" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="400" y="135" text-anchor="middle" font-size="14" class="t-orange">2</text><circle cx="400" cy="175" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="400" y="180" text-anchor="middle" font-size="14">1</text><circle cx="400" cy="220" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="400" y="225" text-anchor="middle" font-size="14">0</text><text x="140" y="244" text-anchor="middle" font-size="13" class="t-gray">recursion tree: 9 calls</text><text x="330" y="110" text-anchor="middle" font-size="12" class="t-gray">subproblem</text><text x="330" y="126" text-anchor="middle" font-size="12" class="t-gray">DAG:</text><text x="330" y="142" text-anchor="middle" font-size="12" class="t-gray">5 states</text></svg>`,
          alt: 'Left: the recursion tree of ways(4) with 9 calls; ways(2) appears twice, highlighted. Right: the subproblem graph with only 5 nodes 4, 3, 2, 1, 0, each pointing to the one and two below it.',
          caption: 'The recursion tree for $\\text{ways}(4)$ (left) recomputes $\\text{ways}(2)$; the tree grows exponentially with $n$. The **subproblem DAG** (right) has one node per distinct state and an arrow for each "depends on". DP evaluates the DAG, not the tree.',
          maxWidth: 480,
        },
        {
          type: 'p',
          text: 'Two properties make a problem a DP problem. Learn to look for both.',
        },
        {
          type: 'definition',
          term: 'Optimal substructure',
          text: '[[dsa-optimal-substructure|Optimal substructure]]: an optimal (or complete) answer to the problem can be built from optimal (or complete) answers to smaller instances of the **same** problem. The fewest coins for $63$ cents is one coin plus the fewest coins for what remains.',
        },
        {
          type: 'definition',
          term: 'Overlapping subproblems',
          text: '[[dsa-overlapping-subproblems|Overlapping subproblems]]: the recursion asks for the same smaller instances again and again, so the number of *distinct* subproblems is much smaller than the number of calls.',
        },
        {
          type: 'p',
          text: 'Merge sort has optimal substructure (a sorted array is built from sorted halves), but its subproblems never repeat: each half is sorted once. That is plain [[dm-divide-and-conquer|divide and conquer]], and caching would gain nothing. DP pays off exactly when subproblems overlap.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why DP is fast: count states, not calls',
          text: 'Once every distinct subproblem is solved exactly once, the running time is\n\n**(number of states) × (work to combine one state\'s dependencies)**.\n\nThe recursion tree for $\\text{ways}(n)$ has about $1.6^n$ nodes, but the DAG has only $n + 1$ states, each combining $2$ earlier answers: $\\Theta(n)$ total. Every DP running-time analysis in this unit is this one multiplication.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which of these recursive computations has **overlapping subproblems**, so that memoizing it would cut the running time dramatically?',
      options: [
        { text: 'Merge sort on an array of $n$ distinct numbers', why: 'Each call sorts a different slice of the array; no slice is ever sorted twice. Optimal substructure, but no overlap — divide and conquer.' },
        { text: 'Binary search for a key in a sorted array', why: 'Binary search makes one recursive call per level on a range it never revisits. There is nothing to cache.' },
        { text: 'Counting the ways to climb $n$ stairs with steps of $1$ or $2$, by recursing on $n - 1$ and $n - 2$', correct: true, why: 'Both $\\text{ways}(n - 1)$ and $\\text{ways}(n - 2)$ ask for $\\text{ways}(n - 3)$, and so on down: only $n + 1$ distinct calls hide inside an exponential tree.' },
        { text: 'Quicksort with a random pivot', why: 'The two partitions are disjoint pieces of the array, solved once each. Randomness changes the split, not the overlap.' },
      ],
      explanation: 'Overlap means the same arguments reappear in different branches of the recursion. In the stairs recursion, $\\text{ways}(n-2)$ is requested by $\\text{ways}(n)$ directly and again by $\\text{ways}(n-1)$, and the duplication compounds at every level. The sorting and searching examples split the input into **disjoint** pieces, so every subproblem is new and memoization only adds overhead.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Top-down memoization vs bottom-up tabulation',
      blocks: [
        {
          type: 'p',
          text: 'Let the climber take $1$, $2$ or $3$ steps at a time. The last move splits the sequences into three disjoint groups, so',
        },
        {
          type: 'math',
          tex: '\\text{ways}(n) = \\text{ways}(n-1) + \\text{ways}(n-2) + \\text{ways}(n-3), \\qquad \\text{ways}(0) = 1, \\quad \\text{ways}(k) = 0 \\text{ for } k < 0.',
          caption: '$\\text{ways}(0) = 1$ counts the empty sequence: standing at the top, there is exactly one way to finish (do nothing). Negative steps are overshoots and count $0$.',
        },
        {
          type: 'derivation',
          title: 'Fill the table for $n = 1, \\dots, 5$',
          steps: [
            { tex: '\\text{ways}(1) = \\text{ways}(0) + 0 + 0 = 1', why: 'Only a single $1$-step works; $\\text{ways}(-1) = \\text{ways}(-2) = 0$.' },
            { tex: '\\text{ways}(2) = 1 + 1 + 0 = 2', why: '$\\text{ways}(1) + \\text{ways}(0)$: the sequences $1{+}1$ and $2$.' },
            { tex: '\\text{ways}(3) = 2 + 1 + 1 = 4', why: '$1{+}1{+}1$, $1{+}2$, $2{+}1$, $3$ — the first time all three terms contribute.' },
            { tex: '\\text{ways}(4) = 4 + 2 + 1 = 7', why: 'Add the three previous entries.' },
            { tex: '\\text{ways}(5) = 7 + 4 + 2 = 13', why: 'Each entry needs only entries to its left, so filling left to right never reads an empty cell.' },
          ],
          result: '$\\text{ways}(5) = 13$, matching the first line of the program below.',
        },
        {
          type: 'p',
          text: 'There are two standard ways to turn the recurrence into code. **Top-down** keeps the recursion and adds a cache (memoization). **Bottom-up**, also called [[dsa-tabulation|tabulation]], drops the recursion and fills an array in an order where every dependency is computed before it is needed.',
        },
        {
          type: 'code',
          title: 'stairs.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// How many ways to climb n stairs taking 1, 2 or 3 at a time (order matters)?
long long naiveCalls = 0, memoCalls = 0;

long long waysNaive(int n) {
    ++naiveCalls;
    if (n < 0) return 0;
    if (n == 0) return 1;                       // one way: take no more steps
    return waysNaive(n - 1) + waysNaive(n - 2) + waysNaive(n - 3);
}

// Top-down: the same recursion, plus a cache. -1 means "not computed yet".
long long waysMemo(int n, std::vector<long long>& memo) {
    ++memoCalls;
    if (n < 0) return 0;
    if (n == 0) return 1;
    if (memo[n] != -1) return memo[n];
    return memo[n] = waysMemo(n - 1, memo) + waysMemo(n - 2, memo) + waysMemo(n - 3, memo);
}

// Bottom-up: fill the table in an order where dependencies come first.
long long waysTable(int n) {
    std::vector<long long> dp(n + 1, 0);
    dp[0] = 1;
    for (int i = 1; i <= n; ++i)
        for (int step = 1; step <= 3; ++step)
            if (i - step >= 0) dp[i] += dp[i - step];
    return dp[n];
}

// Space-optimized: dp[i] only needs the last three values.
long long waysRolling(int n) {
    long long a = 0, b = 0, c = 1;              // dp[i-3], dp[i-2], dp[i-1] for i = 1
    for (int i = 1; i <= n; ++i) {
        long long next = a + b + c;
        a = b; b = c; c = next;
    }
    return c;                                    // dp[n] (n = 0 gives 1)
}

int main() {
    for (int n : {5, 10, 20, 25}) {
        naiveCalls = memoCalls = 0;
        std::vector<long long> memo(n + 1, -1);
        long long x = waysNaive(n), y = waysMemo(n, memo);
        bool agree = (x == y && y == waysTable(n) && y == waysRolling(n));
        std::printf("n=%2d  ways=%7lld  naive calls=%7lld  memo calls=%2lld  all agree: %s\\n",
                    n, y, naiveCalls, memoCalls, agree ? "yes" : "NO");
    }
}`,
          output: `n= 5  ways=     13  naive calls=     46  memo calls=16  all agree: yes
n=10  ways=    274  naive calls=    979  memo calls=31  all agree: yes
n=20  ways= 121415  naive calls= 433993  memo calls=61  all agree: yes
n=25  ways=2555757  naive calls=9135460  memo calls=76  all agree: yes`,
          annotations: [
            { lines: '7-12', text: 'The naive recursion: correct, but it re-solves the same $n$ over and over.' },
            { lines: 19, text: 'The only new line in the memoized version: return the cached answer. $-1$ is a safe "empty" marker because every real answer is $\\ge 0$.' },
            { lines: 20, text: '`return memo[n] = …` stores and returns in one expression. Each $n$ is computed once and makes $3$ calls, so there are about $3n$ calls in total: the output shows $3n + 1$.' },
            { lines: '27-29', text: 'Tabulation: increasing $i$ is a valid order because $dp[i]$ reads only smaller indices.' },
            { lines: '35-38', text: 'Only the last three values are ever read, so three variables replace the whole table: $O(1)$ space.' },
          ],
        },
        {
          type: 'table',
          headers: ['Aspect', 'Top-down (memoization)', 'Bottom-up (tabulation)'],
          rows: [
            ['How you write it', 'the natural recursion plus a cache', 'loops over the states in dependency order'],
            ['States computed', 'only those reachable from the query', 'all of them, needed or not'],
            ['Evaluation order', 'found automatically by the recursion', 'you must choose one (a topological order of the DAG)'],
            ['Overhead', 'function calls; deep recursion can overflow the stack', 'tight loops, cache-friendly, easy to vectorize'],
            ['Space optimization', 'hard (the cache must hold everything)', 'easy: keep only the rows still needed'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Stack depth is a real limit',
          text: 'A memoized recursion on $n = 10^6$ goes a million calls deep. With a typical 1–8 MB thread stack and dozens of bytes per frame, that crashes with a [[dsa-stack-overflow|stack overflow]], sooner in debug builds (bigger frames) and on platforms with smaller thread stacks. When the state space is large and linear, prefer the bottom-up loop.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A climber takes $1$, $2$ or $3$ steps at a time, and the order of moves matters. In how many ways can she climb a staircase of $7$ steps?',
      label: '$\\text{ways}(7) =$',
      answer: '44',
      hint: 'Continue the table $1, 1, 2, 4, 7, 13, \\dots$ (for $n = 0, 1, \\dots$): each entry is the sum of the three before it.',
      explanation: 'Starting from $\\text{ways}(0) = 1$: $\\text{ways}(1) = 1$, $\\text{ways}(2) = 2$, $\\text{ways}(3) = 4$, $\\text{ways}(4) = 7$, $\\text{ways}(5) = 13$, $\\text{ways}(6) = 7 + 4 + 13 = 24$, $\\text{ways}(7) = 13 + 7 + 24 = 44$. Eight table cells and three additions each, instead of a recursion tree with hundreds of calls.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Designing a DP: state, transition, base case, order',
      blocks: [
        {
          type: 'p',
          text: 'Most DP problems don\'t arrive with a recurrence attached; you have to invent the subproblems. The classic example is **coin change**: given coin values (any number of each) and a target amount $A$, use the fewest coins that sum to exactly $A$. The cashier\'s greedy rule, "take the largest coin that fits", is optimal for US coins but fails in general: with coins $\\{1, 3, 4\\}$ and $A = 6$ it takes $4 + 1 + 1$ (three coins) while $3 + 3$ needs two.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Define the state in words', text: '$dp[a]$ = the fewest coins that sum to exactly $a$, for $0 \\le a \\le A$. If you cannot say what a cell *means* in one sentence, the DP is not designed yet.' },
            { title: 'Write the transition', text: 'Look at the **last decision**. Some coin $c$ was used last, and the rest is an optimal solution for $a - c$ (optimal substructure). Try every $c$: $dp[a] = 1 + \\min_{c \\le a} dp[a - c]$.' },
            { title: 'Base cases', text: '$dp[0] = 0$. An amount nothing can reach gets $\\infty$, so it never wins a minimum.' },
            { title: 'Evaluation order', text: 'Each $dp[a]$ reads smaller amounts only, so increasing $a$ works. In general: any topological order of the subproblem DAG.' },
            { title: 'Answer and cost', text: 'The answer is $dp[A]$. There are $A + 1$ states and $k$ coins to try in each: $\\Theta(kA)$ time, $\\Theta(A)$ space.' },
          ],
        },
        {"type": "algo", "view": "array", "code": "std::vector<int> dp(A + 1, INF);\ndp[0] = 0;\nfor (int a = 1; a <= A; ++a)\n    for (int c : coins)\n        if (c <= a && dp[a - c] + 1 < dp[a])\n            dp[a] = dp[a - c] + 1;", "interval": 1400, "frames": [{"note": "Coins $\\{1, 3, 4\\}$, target $6$. Every cell starts at $\\infty$ (unreachable) except $dp[0] = 0$: zero coins make $0$.", "array": [0, "∞", "∞", "∞", "∞", "∞", "∞"], "marks": [{"index": 0, "color": "green"}], "lines": [1, 2]}, {"note": "Only coin $1$ fits: $dp[1] = dp[0] + 1 = 1$.", "array": [0, 1, "∞", "∞", "∞", "∞", "∞"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "a"}], "lines": [3, 4, 5, 6], "vars": [["coins tried", "1"], ["best last coin", "1"]]}, {"note": "Only coin $1$ fits: $dp[2] = dp[1] + 1 = 2$.", "array": [0, 1, 2, "∞", "∞", "∞", "∞"], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "a"}], "lines": [3, 4, 5, 6], "vars": [["coins tried", "1"], ["best last coin", "1"]]}, {"note": "$dp[3] = \\min(dp[2] + 1, dp[0] + 1) = \\min(3, 1) = 1$", "array": [0, 1, 2, 1, "∞", "∞", "∞"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "green"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "a"}], "lines": [3, 4, 5, 6], "vars": [["coins tried", "1, 3"], ["best last coin", "3"]]}, {"note": "$dp[4] = \\min(dp[3] + 1, dp[1] + 1, dp[0] + 1) = \\min(2, 2, 1) = 1$", "array": [0, 1, 2, 1, 1, "∞", "∞"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "green"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "a"}], "lines": [3, 4, 5, 6], "vars": [["coins tried", "1, 3, 4"], ["best last coin", "4"]]}, {"note": "$dp[5] = \\min(dp[4] + 1, dp[2] + 1, dp[1] + 1) = \\min(2, 3, 2) = 2$", "array": [0, 1, 2, 1, 1, 2, "∞"], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "green"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "a"}], "lines": [3, 4, 5, 6], "vars": [["coins tried", "1, 3, 4"], ["best last coin", "1"]]}, {"note": "$dp[6] = \\min(dp[5] + 1, dp[3] + 1, dp[2] + 1) = \\min(3, 2, 3) = 2$", "array": [0, 1, 2, 1, 1, 2, 2], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "green"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "orange"}], "pointers": [{"index": 6, "label": "a"}], "lines": [3, 4, 5, 6], "vars": [["coins tried", "1, 3, 4"], ["best last coin", "3"]]}, {"note": "Done: $dp[6] = 2$ (coins $3 + 3$). Greedy would grab $4$ first and need $4 + 1 + 1$, three coins.", "array": [0, 1, 2, 1, 1, 2, 2], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}], "pointers": [{"index": 6, "label": "answer", "color": "green"}], "vars": [["dp", "0, 1, 2, 1, 1, 2, 2"]]}], "caption": "Bottom-up min-coin change. Orange: the cell being filled; blue: the cells it reads ($a - c$ for each coin $c$ that fits); green: finished cells."},
        {
          type: 'callout',
          variant: 'warning',
          title: 'Infinity plus one',
          text: 'If you write `INF = INT_MAX`, then `dp[a - c] + 1` overflows for an unreachable amount: signed overflow is undefined behavior, and in practice it wraps to a huge negative number that wins every minimum. Use a sentinel with headroom (`1\'000\'000\'000`), or test `dp[a - c] != INF` before adding.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What interviewers listen for',
          text: 'State the meaning of $dp[\\cdot]$ out loud before writing code, then the transition from the last decision, the base cases, the order and the complexity. A candidate who says "$dp[a]$ is the fewest coins for exactly $a$" rarely gets lost; one who starts typing loops usually does.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Complete the min-coin recurrence (coins $c$ may be reused).',
      template: '$dp[a] = \\min_{\\text{coins } c \\le a}\\big($ ___ $\\big)$, with base case $dp[0] =$ ___, and every amount that cannot be made holds ___.',
      blanks: [{ answers: ['$dp[a - c] + 1$'] }, { answers: ['$0$'] }, { answers: ['$\\infty$'] }],
      wordBank: ['$dp[a - c] + 1$', '$dp[a - 1] + c$', '$dp[a - c] + c$', '$0$', '$1$', '$\\infty$', '$-1$'],
      hint: 'The last coin used was $c$; what is left is an amount you have already solved.',
      explanation: 'If the last coin is $c$, the other coins form an optimal solution for $a - c$, so the total is $dp[a - c] + 1$ coins; take the best over all coins that fit. Zero coins make amount $0$. Unreachable amounts must hold $\\infty$ so they never win a minimum — a $-1$ would win every minimum, and $0$ would claim the amount is free. ($dp[a - c] + c$ would add the coin\'s *value*, not one coin.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'A game shop only accepts tokens worth $1$, $7$ and $10$ gold (unlimited supply). What is the fewest number of tokens that pay exactly $15$ gold?',
      answer: '3',
      hint: 'Compare the greedy answer with $dp[15] = 1 + \\min(dp[14], dp[8], dp[5])$.',
      explanation: 'Greedy takes $10$ and then five $1$s: $6$ tokens. The DP finds better: $dp[5] = 5$, $dp[8] = 2$ ($7 + 1$), $dp[14] = 2$ ($7 + 7$), so $dp[15] = 1 + \\min(2, 2, 5) = 3$, for example $7 + 7 + 1$. No two tokens work: the possible pairs sum to $2, 8, 11, 14, 17, 20$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Counting instead of minimizing: the loop-order trap',
      blocks: [
        {
          type: 'p',
          text: 'Now count: in how many ways can coins $\\{1, 2, 5\\}$ make $A$? Careful — "ways" can mean two different things. Are $2 + 2 + 1$ and $1 + 2 + 2$ the same way (a **combination**, a multiset of coins) or different (an ordered **sequence**, like the stair moves)? The two answers come from the same one-line update, with the two loops swapped.',
        },
        {"type": "algo", "view": "array", "code": "std::vector<long long> ways(A + 1, 0);\nways[0] = 1;\nfor (int c : coins)\n    for (int a = c; a <= A; ++a)\n        ways[a] += ways[a - c];", "interval": 1200, "frames": [{"note": "$ways[0] = 1$ (the empty selection); everything else starts at $0$ because no coin has been allowed yet.", "array": [1, 0, 0, 0, 0, 0], "marks": [{"index": 0, "color": "green"}], "lines": [1, 2], "vars": [["coins allowed", "none"]]}, {"note": "Coin $1$: $ways[1] \\mathrel{+}= ways[0]$, so $0 + 1 = 1$.", "array": [1, 1, 0, 0, 0, 0], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "a"}, {"index": 0, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1}"], ["c", "1"]]}, {"note": "Coin $1$: $ways[2] \\mathrel{+}= ways[1]$, so $0 + 1 = 1$.", "array": [1, 1, 1, 0, 0, 0], "marks": [{"index": 1, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "a"}, {"index": 1, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1}"], ["c", "1"]]}, {"note": "Coin $1$: $ways[3] \\mathrel{+}= ways[2]$, so $0 + 1 = 1$.", "array": [1, 1, 1, 1, 0, 0], "marks": [{"index": 2, "color": "blue"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "a"}, {"index": 2, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1}"], ["c", "1"]]}, {"note": "Coin $1$: $ways[4] \\mathrel{+}= ways[3]$, so $0 + 1 = 1$.", "array": [1, 1, 1, 1, 1, 0], "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "a"}, {"index": 3, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1}"], ["c", "1"]]}, {"note": "Coin $1$: $ways[5] \\mathrel{+}= ways[4]$, so $0 + 1 = 1$.", "array": [1, 1, 1, 1, 1, 1], "marks": [{"index": 4, "color": "blue"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "a"}, {"index": 4, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1}"], ["c", "1"]]}, {"note": "Coin $2$: $ways[2] \\mathrel{+}= ways[0]$, so $1 + 1 = 2$.", "array": [1, 1, 2, 1, 1, 1], "marks": [{"index": 0, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "a"}, {"index": 0, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1, 2}"], ["c", "2"]]}, {"note": "Coin $2$: $ways[3] \\mathrel{+}= ways[1]$, so $1 + 1 = 2$.", "array": [1, 1, 2, 2, 1, 1], "marks": [{"index": 1, "color": "blue"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "a"}, {"index": 1, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1, 2}"], ["c", "2"]]}, {"note": "Coin $2$: $ways[4] \\mathrel{+}= ways[2]$, so $1 + 2 = 3$.", "array": [1, 1, 2, 2, 3, 1], "marks": [{"index": 2, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "a"}, {"index": 2, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1, 2}"], ["c", "2"]]}, {"note": "Coin $2$: $ways[5] \\mathrel{+}= ways[3]$, so $1 + 2 = 3$.", "array": [1, 1, 2, 2, 3, 3], "marks": [{"index": 3, "color": "blue"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "a"}, {"index": 3, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1, 2}"], ["c", "2"]]}, {"note": "Coin $5$: $ways[5] \\mathrel{+}= ways[0]$, so $3 + 1 = 4$.", "array": [1, 1, 2, 2, 3, 4], "marks": [{"index": 0, "color": "blue"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "a"}, {"index": 0, "label": "a−c", "color": "blue"}], "lines": [4, 5], "vars": [["coins allowed", "{1, 2, 5}"], ["c", "5"]]}, {"note": "$ways[5] = 4$: $\\{5\\}, \\{2, 2, 1\\}, \\{2, 1, 1, 1\\}, \\{1, 1, 1, 1, 1\\}$. Each multiset is counted once.", "array": [1, 1, 2, 2, 3, 4], "marks": [{"index": 5, "color": "green"}], "vars": [["coins allowed", "{1, 2, 5}"]]}], "caption": "After the pass for coin $c$, $ways[a]$ counts the multisets of coins $\\le c$ that sum to $a$. Orange: the cell updated; blue: the cell added to it."},
        {
          type: 'callout',
          variant: 'why',
          title: 'Why coins-outside counts each multiset once',
          text: 'Invariant: after the pass for coin $c$, $ways[a]$ counts the multisets of coins **up to $c$** summing to $a$. The update $ways[a] \\mathrel{+}= ways[a - c]$ splits them by whether they use $c$ at all: those that don\'t were already counted, and those that do are "one $c$ plus a multiset for $a - c$ that may also use $c$" (that is why $a$ runs upward and reads this pass\'s fresh values). Every multiset is built in one canonical order — all $1$s, then the $2$s, then the $5$s — so it is counted exactly once.\n\nWith the amount loop outside, $ways[a]$ sums over *every* possible last coin, which is exactly the stairs recurrence: it counts ordered sequences.',
        },
        {
          type: 'code',
          title: 'coin_ways.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Coins in the OUTER loop: each multiset is counted once (5 = 2+2+1 = 1+2+2 counted once).
long long combinations(const std::vector<int>& coins, int A) {
    std::vector<long long> ways(A + 1, 0);
    ways[0] = 1;                                 // the empty selection
    for (int c : coins)
        for (int a = c; a <= A; ++a)
            ways[a] += ways[a - c];
    return ways[A];
}

// Amounts in the OUTER loop: every ordering is counted (2+2+1, 2+1+2, 1+2+2 are 3 ways).
long long sequences(const std::vector<int>& coins, int A) {
    std::vector<long long> ways(A + 1, 0);
    ways[0] = 1;
    for (int a = 1; a <= A; ++a)
        for (int c : coins)
            if (c <= a) ways[a] += ways[a - c];
    return ways[A];
}

int main() {
    std::vector<int> coins = {1, 2, 5};
    for (int A : {5, 10, 20})
        std::printf("A=%3d  combinations=%5lld  ordered sequences=%lld\\n",
                    A, combinations(coins, A), sequences(coins, A));
}`,
          output: `A=  5  combinations=    4  ordered sequences=9
A= 10  combinations=   10  ordered sequences=128
A= 20  combinations=   29  ordered sequences=26547`,
          annotations: [
            { lines: 7, text: 'The empty selection is the one way to make $0$. Without this base case every count stays $0$.' },
            { lines: '8-10', text: 'Coins outside: combinations. $a$ starts at $c$ so $a - c$ is never negative.' },
            { lines: '18-20', text: 'Amounts outside: every last coin is tried for every amount, so $2{+}2{+}1$, $2{+}1{+}2$ and $1{+}2{+}2$ count separately.' },
            { lines: 27, text: 'The two counts drift apart fast: $29$ multisets but $26\\,547$ sequences for $A = 20$. Sequence counts grow exponentially, so use `long long` or a modulus.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: 'This code counts combinations for coins $\\{1, 2\\}$ and $A = 3$. Put the five updates in the order the program performs them.',
      code: 'std::vector<long long> ways(4, 0);\nways[0] = 1;\nfor (int c : {1, 2})\n    for (int a = c; a <= 3; ++a)\n        ways[a] += ways[a - c];',
      lines: [
        '$ways[1] \\mathrel{+}= ways[0]$',
        '$ways[2] \\mathrel{+}= ways[1]$',
        '$ways[3] \\mathrel{+}= ways[2]$',
        '$ways[2] \\mathrel{+}= ways[0]$',
        '$ways[3] \\mathrel{+}= ways[1]$',
      ],
      explanation: 'The coin loop is outside, so the whole pass for $c = 1$ ($a = 1, 2, 3$, each reading $a - 1$) runs before the pass for $c = 2$ ($a = 2, 3$, each reading $a - 2$). The table goes $[1, 0, 0, 0] \\to [1, 1, 1, 1] \\to [1, 1, 2, 2]$: two multisets make $3$, namely $\\{1, 1, 1\\}$ and $\\{1, 2\\}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'This function should count the multisets of coins that sum to `A`, but it returns $0$ for every input. Tap the line with the bug.',
      lines: [
        '`std::vector<long long> ways(A + 1, 0);`',
        '`ways[0] = 0;`',
        '`for (int c : coins)`',
        '`    for (int a = c; a <= A; ++a)`',
        '`        ways[a] += ways[a - c];`',
        '`return ways[A];`',
      ],
      errorLines: [2],
      explanation: 'The base case is wrong: there is exactly **one** way to make $0$ — choose no coins — so it must be `ways[0] = 1`. Every other entry is built by adding earlier entries, so if the seed is $0$ the whole table stays $0$. Counting DPs almost always seed the empty case with $1$, just as min-cost DPs seed it with $0$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Reconstructing the solution, not just its value',
      blocks: [
        {
          type: 'p',
          text: 'The table says *how few* coins are needed, but the player wants to know *which* coins. Two standard ways to recover the solution:',
        },
        {
          type: 'list',
          items: [
            '**Store the decision.** Next to $dp[a]$ keep $choice[a]$, the coin that achieved the minimum. Then walk back: $a \\to a - choice[a] \\to \\dots \\to 0$. This is exactly the parent pointer you keep in BFS or Dijkstra to recover a path, because a DP *is* a shortest path in the subproblem DAG.',
            '**Recompute the decision.** Keep only $dp$, and at each $a$ find any coin with $dp[a - c] + 1 = dp[a]$. No extra memory, a little extra time.',
          ],
        },
        {
          type: 'code',
          title: 'coin_min.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

constexpr int INF = 1'000'000'000;   // "unreachable"; INF + 1 must not overflow

// Fewest coins summing to exactly A, plus one optimal multiset of coins (empty if impossible).
std::vector<int> minCoins(const std::vector<int>& coins, int A) {
    std::vector<int> dp(A + 1, INF), choice(A + 1, 0);
    dp[0] = 0;                                   // zero coins make amount 0
    for (int a = 1; a <= A; ++a)
        for (int c : coins)
            if (c <= a && dp[a - c] + 1 < dp[a]) {
                dp[a] = dp[a - c] + 1;
                choice[a] = c;                   // remember which coin won
            }
    std::vector<int> used;
    if (dp[A] == INF) return used;
    for (int a = A; a > 0; a -= choice[a])       // walk the choices back to 0
        used.push_back(choice[a]);
    return used;
}

// Largest coin first, as a cashier would do it. Not always optimal!
std::vector<int> greedyCoins(const std::vector<int>& coins, int A) {
    std::vector<int> used;
    for (int i = (int)coins.size() - 1; i >= 0; --i)
        while (coins[i] <= A) { used.push_back(coins[i]); A -= coins[i]; }
    return used;
}

void show(const char* label, const std::vector<int>& v) {
    std::printf("%-8s %zu coins:", label, v.size());
    for (int c : v) std::printf(" %d", c);
    std::printf("\\n");
}

int main() {
    std::vector<int> coins = {1, 3, 4};          // sorted ascending
    show("DP", minCoins(coins, 6));
    show("greedy", greedyCoins(coins, 6));
    std::vector<int> us = {1, 5, 10, 25};
    show("DP", minCoins(us, 63));
    show("greedy", greedyCoins(us, 63));
    std::vector<int> evens = {2, 6};
    std::printf("amount 7 with {2, 6}: %s\\n", minCoins(evens, 7).empty() ? "impossible" : "possible");
}`,
          output: `DP       2 coins: 3 3
greedy   3 coins: 4 1 1
DP       6 coins: 1 1 1 10 25 25
greedy   6 coins: 25 25 10 1 1 1
amount 7 with {2, 6}: impossible`,
          annotations: [
            { lines: 4, text: 'An "infinity" with headroom, so `dp[a - c] + 1` can never overflow.' },
            { lines: '12-15', text: 'The strict `<` keeps the **first** coin that reaches the minimum; any coin achieving it would be correct.' },
            { lines: '18-19', text: 'Walk the stored choices back to $0$. Each step removes one coin, so the loop runs $dp[A]$ times.' },
            { lines: '26-27', text: 'Greedy, for comparison: $O(A)$ and often right, but not for $\\{1, 3, 4\\}$.' },
            { lines: '44-45', text: 'With only even coins an odd amount stays at `INF`; reporting "impossible" is part of a correct answer.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Walk back from $a = 6$ with coins $\\{1, 3, 4\\}$',
          steps: [
            { tex: 'dp = [0, 1, 2, 1, 1, 2, 2], \\quad choice = [\\,\\cdot\\,, 1, 1, 3, 4, 1, 3]', why: 'The tables after the fill (the animation above). $choice[5] = 1$ because $dp[4] + 1 = 2$ is found first; coin $4$ ($dp[1] + 1 = 2$) only ties it, and the strict `<` keeps the first.' },
            { tex: 'a = 6:\\ choice[6] = 3 \\implies a = 3', why: 'The best last coin for $6$ is $3$; what remains is $3$.' },
            { tex: 'a = 3:\\ choice[3] = 3 \\implies a = 0', why: 'For $3$ the single coin $3$ is best. We reached $0$, so stop.' },
          ],
          result: 'The coins are $3 + 3$, two of them, agreeing with $dp[6] = 2$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where this shows up in games',
          text: 'Any "fewest pieces to make exactly $X$" question has this shape: paying a price in fixed denominations, building a road of length $X$ from modular track pieces, or composing a combo whose frame count must hit an exact window. The same walk-back powers AI planners that store, for each state, the action that led to the best value — a DP table of decisions is a **policy**.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Coins $\\{2, 3, 5\\}$, unlimited supply. How many **multisets** of coins sum to exactly $12$? (Order does not matter: $5 + 5 + 2$ and $2 + 5 + 5$ are the same.)',
      answer: '5',
      hint: 'Run the coins-outside DP: pass for $2$, then $3$, then $5$. Or list them by how many $5$s they use.',
      explanation: 'With coins-outside DP: after coin $2$, $ways$ is $1$ on even amounts; after coin $3$, $ways[12] = 3$ (six $2$s; three $2$s and two $3$s; four $3$s); after coin $5$, $ways[12] \\mathrel{+}= ways[7]$, and $ways[7] = 2$ ($5 + 2$, $3 + 2 + 2$). Total $5$: $\\{2,2,2,2,2,2\\}$, $\\{3,3,2,2,2\\}$, $\\{3,3,3,3\\}$, $\\{5,3,2,2\\}$, $\\{5,5,2\\}$. Swapping the loops would count ordered sequences instead, a much larger number.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Space optimization and honest complexity',
      blocks: [
        {
          type: 'p',
          text: 'A DP table often holds far more than the computation needs at any moment. If each state depends only on the last few states — the last three stair counts, or the previous **row** of a 2D table — keep only those. This "rolling array" turns $\\Theta(n)$ space into $\\Theta(1)$ for the stairs, and a $\\Theta(nm)$ table into $\\Theta(m)$ for the string DPs of the next lesson.',
        },
        {
          type: 'table',
          headers: ['Problem', 'States', 'Work per state', 'Time', 'Space (full → rolling)'],
          rows: [
            ['Stairs, steps $1..k$', '$n + 1$', '$k$', '$\\Theta(kn)$', '$\\Theta(n) \\to \\Theta(k)$'],
            ['Min coins, $k$ coin types', '$A + 1$', '$k$', '$\\Theta(kA)$', '$\\Theta(A)$ (already 1D)'],
            ['Count coin combinations', '$k(A + 1)$ (coin, amount)', '$1$', '$\\Theta(kA)$', '$\\Theta(kA) \\to \\Theta(A)$'],
            ['Fibonacci', '$n + 1$', '$1$', '$\\Theta(n)$', '$\\Theta(n) \\to \\Theta(1)$'],
          ],
          caption: 'Time is always states × work per state. The combination count is really a 2D table (coins × amounts) already rolled into one row.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Rolling arrays forget the path',
          text: 'Once old rows are overwritten, you can no longer walk back through them to recover *which* choices were made. If you need the solution itself, keep the full table, keep a separate choice table, or use a cleverer scheme (Hirschberg\'s divide-and-conquer trick recovers an alignment in linear space).',
        },
        {
          type: 'p',
          text: 'One more subtlety. $\\Theta(kA)$ looks polynomial, but $A$ is a *number* in the input, written with only about $\\log_2 A$ bits. Doubling the number of bits squares $A$. Running time polynomial in the numeric value but exponential in its bit length is called [[dsa-pseudo-polynomial|pseudo-polynomial]]. It is fine for $A$ in the thousands or millions and hopeless for $A = 2^{60}$, and it is why a DP for coin change or knapsack does not prove $\\mathrm{P} = \\mathrm{NP}$ (more in the NP-completeness lesson).',
        },
        {
          type: 'deepdive',
          title: 'DP is shortest paths in a DAG',
          blocks: [
            {
              type: 'p',
              text: 'Make a node for each amount $0, \\dots, A$ and an edge $a - c \\to a$ of weight $1$ for every coin $c$. A way to pay $A$ is a path from $0$ to $A$, and the fewest coins is the **shortest path**. Because the graph is acyclic, you don\'t need Dijkstra: relax nodes in topological order (increasing $a$), which is exactly the bottom-up loop. Counting problems are the same picture with $(+, \\times)$ in place of $(\\min, +)$: the number of paths into a node is the sum over its in-edges.',
            },
            {
              type: 'p',
              text: 'This view tells you when DP *fails*: if the "subproblem graph" has cycles (state $X$ depends on $Y$ and $Y$ on $X$), there is no evaluation order. Then you need a genuine shortest-path algorithm (Dijkstra, Bellman–Ford) or a reformulation that breaks the cycle.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'The bottom-up min-coin DP runs in $\\Theta(kA)$ time for $k$ coin types and target $A$. Why is it called **pseudo-polynomial** rather than polynomial?',
      options: [
        { text: 'Because the inner loop over coins is not counted in the bound.', why: 'The $k$ factor is exactly the inner loop; it is counted.' },
        { text: 'Because $A$ is a numeric value, and the input encodes it in only about $\\log_2 A$ bits, so $\\Theta(kA)$ is exponential in the input length.', correct: true, why: 'Polynomial time is measured against the input size in bits. Adding one bit to $A$ can double the running time.' },
        { text: 'Because memoization makes the running time depend on which states are reached.', why: 'The bound is the same top-down or bottom-up; the issue is how $A$ compares with the size of the input.' },
        { text: 'Because DP algorithms always take exponential time in the worst case.', why: 'Many DPs are truly polynomial: LCS is $\\Theta(nm)$ in the string lengths, which *are* the input size.' },
      ],
      explanation: 'An input with $k$ coins and target $A$ takes about $k \\log_2(\\max c) + \\log_2 A$ bits. The DP touches all $A + 1$ amounts, and $A = 2^{\\log_2 A}$ is exponential in that bit count. That is harmless for everyday values, but it is why NP-hard problems such as subset sum and knapsack can still have practical DP solutions when the numbers are small.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'After you replace a 2D DP table by two rolling rows, you can still recover the optimal solution (not just its value) by walking back through the rows you kept.',
      answer: false,
      explanation: 'The walk-back needs the decisions made at **every** stage, but a rolling array keeps only the last row or two; everything earlier has been overwritten. To reconstruct, keep the full table, store a separate (often much smaller) table of choices, or use a divide-and-conquer method such as Hirschberg\'s algorithm, which recomputes what it needs in linear space at about twice the time.',
    },
  ],
  takeaways: [
    'DP applies when a problem has **optimal substructure** (answers built from answers to smaller instances) and **overlapping subproblems** (few distinct states, many repeated calls).',
    'Running time = number of states × work per state. Top-down memoization and bottom-up tabulation compute the same table; tabulation avoids deep recursion and makes space optimization easy.',
    'Design recipe: define the state in words, write the transition from the last decision, set base cases ($0$ for costs, $1$ for counts, $\\infty$ for impossible), choose a topological evaluation order, read the answer.',
    'Min-coin change is $dp[a] = 1 + \\min_c dp[a - c]$; greedy fails for coins like $\\{1, 3, 4\\}$. Counting with the coin loop outside counts multisets; with the amount loop outside it counts ordered sequences.',
    'Recover a solution by storing or recomputing each decision and walking back; rolling arrays save space but lose that path. $\\Theta(kA)$ is pseudo-polynomial, not polynomial.',
  ],
  reading: [
    {
      title: 'Jeff Erickson — Algorithms, chapter 3 "Dynamic Programming"',
      url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      source: 'book',
      note: 'The best free treatment of "recursion first, then memoize, then tabulate", with the subproblem-DAG view used here.',
    },
    {
      title: 'MIT OCW 6.006 — Introduction to Algorithms (Spring 2020)',
      url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
      source: 'other',
      note: 'Lectures 15–18 teach DP with the SRTBOT recipe (subproblems, relations, topological order, base cases, original problem, time), close to the steps above.',
    },
    {
      title: 'Wikipedia — Change-making problem',
      url: 'https://en.wikipedia.org/wiki/Change-making_problem',
      source: 'wikipedia',
      note: 'When greedy is optimal (canonical coin systems), the DP solution, and the problem\'s weak NP-hardness.',
    },
  ],
};
