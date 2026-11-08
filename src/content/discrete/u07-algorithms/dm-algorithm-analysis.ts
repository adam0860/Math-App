import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-algorithm-analysis',
  title: 'Analyzing Algorithms',
  summary: 'Count the work in loops, compare best, worst and average cases, and see why binary search, insertion sort and std::vector behave the way they do.',
  minutes: 19,
  objectives: [
    'Count the operations performed by single, nested, dependent and halving loops, and express the count in $\\Theta$ notation',
    'Distinguish best-case, worst-case and average-case running time, and compute each for linear search',
    'Trace binary search and explain why it needs at most $\\lfloor \\log_2 n \\rfloor + 1$ probes',
    'Analyze bubble sort and insertion sort, and state their time and space complexity',
    'Explain amortized $O(1)$ insertion into a doubling array, and describe the P versus NP question in plain terms',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Counting the work in loops',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson you learned to *compare* operation counts with $O$, $\\Omega$ and $\\Theta$. Now you learn to *produce* them by reading code. Almost all of the work in a program happens inside loops, so the skill is: for each loop, how many times does its body run, as a function of $n$?',
        },
        {
          type: 'list',
          items: [
            '**One loop** `for (i = 0; i < n; ++i)` runs its body $n$ times: $\\Theta(n)$.',
            '**Nested loops with independent bounds**: the inner body runs $n$ times for each of the $n$ outer passes, so $n \\cdot n = n^2$ times: $\\Theta(n^2)$. (With bounds $n$ and $m$ it is $nm$.)',
            '**Nested loops with a dependent bound**, such as `for (j = i + 1; j < n; ++j)`: the inner count changes with $i$, so you add them up with [[sigma-notation]].',
          ],
        },
        {
          type: 'derivation',
          title: 'Count the inner-body executions of the "all pairs" loop',
          steps: [
            { tex: '\\texttt{for (i = 0; i < n; ++i) for (j = i + 1; j < n; ++j)}', why: 'This is the classic loop over every unordered pair $\\{i, j\\}$ — for example, testing every pair of colliders.' },
            { tex: '\\text{pass } i \\text{ runs the inner body } (n - 1 - i) \\text{ times}', why: '$j$ takes the values $i + 1, i + 2, \\dots, n - 1$: that is $(n - 1) - (i + 1) + 1 = n - 1 - i$ values.' },
            { tex: '\\sum_{i=0}^{n-1} (n - 1 - i) = (n-1) + (n-2) + \\cdots + 1 + 0', why: 'Add up the passes. As $i$ goes from $0$ to $n - 1$, the count goes from $n - 1$ down to $0$.' },
            { tex: '= \\frac{(n-1)n}{2}', why: 'The [[arithmetic-series]] formula $1 + 2 + \\cdots + m = \\frac{m(m+1)}{2}$ with $m = n - 1$.' },
            { tex: '= \\tfrac{1}{2}n^2 - \\tfrac{1}{2}n = \\Theta(n^2)', why: 'A degree-2 polynomial with positive leading coefficient is $\\Theta(n^2)$ (previous lesson).' },
          ],
          result: 'The pairs loop does $\\binom{n}{2} = \\frac{n(n-1)}{2}$ iterations: half of the full nested loop, but still $\\Theta(n^2)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why halving the work does not change the class',
          text: 'Skipping half the pairs saves a factor of $2$, a constant. That is a real speedup and worth having, but it does not change how the cost **scales**: double $n$ and both versions do four times the work. To change the class you need a different idea (like a spatial grid), not a tighter loop bound.',
        },
        {
          type: 'code',
          title: 'loops.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    const int n = 1000;
    long a = 0, b = 0, c = 0, d = 0;

    for (int i = 0; i < n; ++i)              // single loop
        ++a;
    for (int i = 0; i < n; ++i)              // nested, independent bounds
        for (int j = 0; j < n; ++j) ++b;
    for (int i = 0; i < n; ++i)              // nested, dependent bound
        for (int j = i + 1; j < n; ++j) ++c;
    for (int m = n; m > 1; m /= 2)           // halving loop
        ++d;

    std::printf("single:    %ld\\n", a);
    std::printf("nested:    %ld\\n", b);
    std::printf("dependent: %ld  (n(n-1)/2 = %d)\\n", c, n * (n - 1) / 2);
    std::printf("halving:   %ld\\n", d);
}`,
          output: `single:    1000
nested:    1000000
dependent: 499500  (n(n-1)/2 = 499500)
halving:   9`,
          annotations: [
            { lines: '11-12', text: 'The pairs loop: exactly $\\frac{n(n-1)}{2}$ iterations, as derived above.' },
            { lines: '13-14', text: 'The halving loop runs only $9$ times for $n = 1000$ — the next card explains why.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'numeric',
      prompt: 'How many times does `++count` run when $n = 10$?',
      code: `for (int i = 0; i < n; ++i)
    for (int j = 0; j < i; ++j)
        ++count;`,
      label: 'count $=$',
      answer: '45',
      hint: 'Pass $i$ runs the inner loop $i$ times. Add $0 + 1 + \\cdots + 9$.',
      explanation: 'For each $i$, $j$ runs over $0, \\dots, i - 1$: that is $i$ iterations. The total is $\\sum_{i=0}^{9} i = \\frac{9 \\cdot 10}{2} = 45$. In general this loop runs $\\frac{n(n-1)}{2}$ times — the same count as the pairs loop, just walking the pairs in a different order — so it is $\\Theta(n^2)$.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Halving loops are logarithmic',
      blocks: [
        {
          type: 'p',
          text: 'Some loops do not step by $1$; they **halve** (or double) a variable each pass. These are where the $\\log n$ in so many running times comes from. A [[logarithm]] answers exactly the question such a loop asks: how many times can you halve $n$ before you reach $1$?',
        },
        {
          type: 'derivation',
          title: 'How many times does `for (m = n; m > 1; m /= 2)` run?',
          steps: [
            { tex: '\\text{after } j \\text{ passes, } m \\approx \\frac{n}{2^j}', why: 'Each pass divides $m$ by $2$. (Integer division rounds down; for $n$ a power of $2$ it is exact.)' },
            { tex: '\\text{the loop stops once } \\frac{n}{2^j} \\le 1 \\iff 2^j \\ge n', why: 'The condition $m > 1$ fails. Multiply both sides by $2^j > 0$.' },
            { tex: '\\iff j \\ge \\log_2 n', why: 'Take $\\log_2$ of both sides; $\\log_2$ is increasing, so the inequality keeps its direction.' },
            { tex: '\\text{passes} = \\lfloor \\log_2 n \\rfloor = \\Theta(\\log n)', why: 'With rounding down ([[dm-floor-ceiling|floor]]) at each step, the exact count for integer $n \\ge 1$ is $\\lfloor \\log_2 n \\rfloor$; for $n = 1000$ that is $9$, since $2^9 = 512 \\le 1000 < 1024 = 2^{10}$.' },
          ],
          result: 'Halving (or doubling) loops run $\\Theta(\\log n)$ times. Doubling $n$ adds just **one** more pass.',
        },
        {
          type: 'table',
          headers: ['Loop shape', 'Iterations', 'Class'],
          rows: [
            ['`for (i = 1; i < n; i *= 2)`', '$\\lceil \\log_2 n \\rceil$ (for $n \\ge 1$)', '$\\Theta(\\log n)$'],
            ['`for (m = n; m > 1; m /= 2)`', '$\\lfloor \\log_2 n \\rfloor$', '$\\Theta(\\log n)$'],
            ['`for (i = 0; i < n; ++i)` around a halving loop', '$n \\lfloor \\log_2 n \\rfloor$', '$\\Theta(n \\log n)$'],
            ['halving loop around `for (j = 0; j < m; ++j)`', '$n + \\frac{n}{2} + \\frac{n}{4} + \\cdots < 2n$', '$\\Theta(n)$'],
          ],
          caption: 'The last row is a trap: the inner loop shrinks with $m$, so the total is a [[geometric-series]] bounded by $2n$, not $n \\log n$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Read the update, not just the bound',
          text: 'Two loops with the same condition `i < n` can be wildly different. `i += 2` gives $n/2$ passes ($\\Theta(n)$); `i *= 2` gives about $\\log_2 n$ passes ($\\Theta(\\log n)$); `i += i / 10 + 1` is also logarithmic, because $i$ grows by a constant *factor*. Ask: does the variable change by a constant **amount** or a constant **factor**?',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'How many times does the body of this loop run?',
      code: `for (int i = 1; i < 1000; i *= 2)
    doWork(i);`,
      label: 'iterations $=$',
      answer: '10',
      hint: 'List the values of $i$: $1, 2, 4, \\dots$. Which is the last one below $1000$?',
      explanation: 'The body runs for $i = 1, 2, 4, 8, 16, 32, 64, 128, 256, 512$: those are $2^0$ through $2^9$, which is $10$ values. The next value, $1024$, fails $i < 1000$. In general the count is $\\lceil \\log_2 n \\rceil$, and $\\lceil \\log_2 1000 \\rceil = \\lceil 9.97 \\rceil = 10$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Best, worst and average case: linear search',
      blocks: [
        {
          type: 'p',
          text: 'For many algorithms the count depends not only on $n$ but on *which* input of size $n$ you get. **Linear search** checks items one by one until it finds the target. If the target is first, that is $1$ comparison; if it is last or missing, it is $n$.',
        },
        {
          type: 'definition',
          term: 'Best, worst and average case',
          text: 'For inputs of size $n$: the **worst-case** complexity is the *largest* number of operations over all such inputs; the **best-case** is the *smallest*; the **average-case** is the expected number when inputs are drawn from a stated probability distribution. "The running time" with no qualifier means **worst case** ([[dm-time-complexity]]).',
        },
        {
          type: 'derivation',
          title: 'Average comparisons for linear search (target present, every position equally likely)',
          steps: [
            { tex: 'P(\\text{target at position } i) = \\frac{1}{n}, \\quad i = 1, \\dots, n', why: 'Our assumption about the inputs: a uniform distribution over the $n$ positions.' },
            { tex: '\\text{target at position } i \\implies i \\text{ comparisons}', why: 'Linear search compares positions $1, 2, \\dots, i$ and stops.' },
            { tex: 'E[\\text{comparisons}] = \\sum_{i=1}^{n} i \\cdot \\frac{1}{n}', why: 'Expected value: each possible count times its probability.' },
            { tex: '= \\frac{1}{n} \\cdot \\frac{n(n+1)}{2} = \\frac{n+1}{2}', why: 'Pull out the constant $\\frac{1}{n}$ and sum $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$.' },
          ],
          result: 'On average linear search checks about half the list: $\\frac{n+1}{2} = \\Theta(n)$. Best case $1 = \\Theta(1)$; worst case $n = \\Theta(n)$.',
        },
        {
          type: 'code',
          title: 'linear_search.cpp',
          code: `// Returns the index of target in a, or -1 if absent.
int linearSearch(const std::vector<int>& a, int target) {
    for (std::size_t i = 0; i < a.size(); ++i)
        if (a[i] == target) return static_cast<int>(i);  // best case: i == 0
    return -1;                                           // worst case: n comparisons
}`,
          annotations: [
            { lines: 3, text: 'No assumptions about the data: works on unsorted arrays, linked lists, anything you can walk through.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why worst case is the default',
          text: 'The worst case is a **guarantee**: no input of size $n$ can do worse. In a game that matters — a frame budget is a hard deadline, and the one level layout that triggers the slow case will be found by players. Averages need a probability model that may not match reality, and best cases promise almost nothing.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'The best-case running time of linear search is $\\Theta(1)$, so linear search is an $O(1)$ algorithm.',
      answer: false,
      explanation: 'A complexity claim about an algorithm, with no qualifier, refers to its **worst case**, and linear search\'s worst case is $n$ comparisons: $\\Theta(n)$. The best case (target in the first slot) is $\\Theta(1)$, but that only describes one lucky input. Saying "$O(1)$" would promise constant time for every input, which is false.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Binary search: halving the search space',
      blocks: [
        {
          type: 'p',
          text: 'If the array is **sorted**, you can do far better. [[dm-binary-search|Binary search]] compares the target with the middle element. If they are equal you are done; if the target is bigger, it can only be in the right half; if smaller, the left half. Either way, one comparison throws away half of the remaining candidates.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 262" xmlns="http://www.w3.org/2000/svg">\n<text x="58.0" y="14" font-size="10" text-anchor="middle" class="t-gray">0</text>\n<text x="86.0" y="14" font-size="10" text-anchor="middle" class="t-gray">1</text>\n<text x="114.0" y="14" font-size="10" text-anchor="middle" class="t-gray">2</text>\n<text x="142.0" y="14" font-size="10" text-anchor="middle" class="t-gray">3</text>\n<text x="170.0" y="14" font-size="10" text-anchor="middle" class="t-gray">4</text>\n<text x="198.0" y="14" font-size="10" text-anchor="middle" class="t-gray">5</text>\n<text x="226.0" y="14" font-size="10" text-anchor="middle" class="t-gray">6</text>\n<text x="254.0" y="14" font-size="10" text-anchor="middle" class="t-gray">7</text>\n<text x="282.0" y="14" font-size="10" text-anchor="middle" class="t-gray">8</text>\n<text x="310.0" y="14" font-size="10" text-anchor="middle" class="t-gray">9</text>\n<text x="338.0" y="14" font-size="10" text-anchor="middle" class="t-gray">10</text>\n<text x="366.0" y="14" font-size="10" text-anchor="middle" class="t-gray">11</text>\n<text x="394.0" y="14" font-size="10" text-anchor="middle" class="t-gray">12</text>\n<text x="422.0" y="14" font-size="10" text-anchor="middle" class="t-gray">13</text>\n<text x="450.0" y="14" font-size="10" text-anchor="middle" class="t-gray">14</text>\n<text x="478.0" y="14" font-size="10" text-anchor="middle" class="t-gray">15</text>\n<text x="2" y="40" font-size="12" class="t-gray">step 1</text>\n<rect x="44" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="58.0" y="40" font-size="12" text-anchor="middle">2</text>\n<rect x="72" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="86.0" y="40" font-size="12" text-anchor="middle">5</text>\n<rect x="100" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="114.0" y="40" font-size="12" text-anchor="middle">8</text>\n<rect x="128" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="142.0" y="40" font-size="12" text-anchor="middle">12</text>\n<rect x="156" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="170.0" y="40" font-size="12" text-anchor="middle">16</text>\n<rect x="184" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="198.0" y="40" font-size="12" text-anchor="middle">23</text>\n<rect x="212" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="226.0" y="40" font-size="12" text-anchor="middle">38</text>\n<rect x="240" y="22" width="28" height="26" class="f-blue s-blue" fill-opacity="0.25" stroke-width="2"/>\n<text x="254.0" y="40" font-size="12" text-anchor="middle" font-weight="bold">45</text>\n<rect x="268" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="282.0" y="40" font-size="12" text-anchor="middle">56</text>\n<rect x="296" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="310.0" y="40" font-size="12" text-anchor="middle">67</text>\n<rect x="324" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="338.0" y="40" font-size="12" text-anchor="middle">72</text>\n<rect x="352" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="366.0" y="40" font-size="12" text-anchor="middle">78</text>\n<rect x="380" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="394.0" y="40" font-size="12" text-anchor="middle">84</text>\n<rect x="408" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="422.0" y="40" font-size="12" text-anchor="middle">91</text>\n<rect x="436" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="450.0" y="40" font-size="12" text-anchor="middle">95</text>\n<rect x="464" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="478.0" y="40" font-size="12" text-anchor="middle">99</text>\n<text x="58.0" y="60" font-size="10" text-anchor="middle" class="t-green">lo</text>\n<text x="478.0" y="60" font-size="10" text-anchor="middle" class="t-red">hi</text>\n<text x="268" y="72" font-size="11" class="t-blue">mid = 7: 45 &lt; 72, so lo = 8</text>\n<text x="2" y="100" font-size="12" class="t-gray">step 2</text>\n<rect x="44" y="82" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="58.0" y="100" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">2</text>\n<rect x="72" y="82" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="86.0" y="100" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">5</text>\n<rect x="100" y="82" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="114.0" y="100" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">8</text>\n<rect x="128" y="82" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="142.0" y="100" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">12</text>\n<rect x="156" y="82" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="170.0" y="100" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">16</text>\n<rect x="184" y="82" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="198.0" y="100" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">23</text>\n<rect x="212" y="82" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="226.0" y="100" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">38</text>\n<rect x="240" y="82" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="254.0" y="100" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">45</text>\n<rect x="268" y="82" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="282.0" y="100" font-size="12" text-anchor="middle">56</text>\n<rect x="296" y="82" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="310.0" y="100" font-size="12" text-anchor="middle">67</text>\n<rect x="324" y="82" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="338.0" y="100" font-size="12" text-anchor="middle">72</text>\n<rect x="352" y="82" width="28" height="26" class="f-blue s-blue" fill-opacity="0.25" stroke-width="2"/>\n<text x="366.0" y="100" font-size="12" text-anchor="middle" font-weight="bold">78</text>\n<rect x="380" y="82" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="394.0" y="100" font-size="12" text-anchor="middle">84</text>\n<rect x="408" y="82" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="422.0" y="100" font-size="12" text-anchor="middle">91</text>\n<rect x="436" y="82" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="450.0" y="100" font-size="12" text-anchor="middle">95</text>\n<rect x="464" y="82" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="478.0" y="100" font-size="12" text-anchor="middle">99</text>\n<text x="282.0" y="120" font-size="10" text-anchor="middle" class="t-green">lo</text>\n<text x="478.0" y="120" font-size="10" text-anchor="middle" class="t-red">hi</text>\n<text x="44" y="132" font-size="11" class="t-blue">mid = 11: 78 &gt; 72, so hi = 10</text>\n<text x="2" y="160" font-size="12" class="t-gray">step 3</text>\n<rect x="44" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="58.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">2</text>\n<rect x="72" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="86.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">5</text>\n<rect x="100" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="114.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">8</text>\n<rect x="128" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="142.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">12</text>\n<rect x="156" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="170.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">16</text>\n<rect x="184" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="198.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">23</text>\n<rect x="212" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="226.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">38</text>\n<rect x="240" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="254.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">45</text>\n<rect x="268" y="142" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="282.0" y="160" font-size="12" text-anchor="middle">56</text>\n<rect x="296" y="142" width="28" height="26" class="f-blue s-blue" fill-opacity="0.25" stroke-width="2"/>\n<text x="310.0" y="160" font-size="12" text-anchor="middle" font-weight="bold">67</text>\n<rect x="324" y="142" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1"/>\n<text x="338.0" y="160" font-size="12" text-anchor="middle">72</text>\n<rect x="352" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="366.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">78</text>\n<rect x="380" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="394.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">84</text>\n<rect x="408" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="422.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">91</text>\n<rect x="436" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="450.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">95</text>\n<rect x="464" y="142" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="478.0" y="160" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">99</text>\n<text x="282.0" y="180" font-size="10" text-anchor="middle" class="t-green">lo</text>\n<text x="338.0" y="180" font-size="10" text-anchor="middle" class="t-red">hi</text>\n<text x="44" y="192" font-size="11" class="t-blue">mid = 9: 67 &lt; 72, so lo = 10</text>\n<text x="2" y="220" font-size="12" class="t-gray">step 4</text>\n<rect x="44" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="58.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">2</text>\n<rect x="72" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="86.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">5</text>\n<rect x="100" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="114.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">8</text>\n<rect x="128" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="142.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">12</text>\n<rect x="156" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="170.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">16</text>\n<rect x="184" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="198.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">23</text>\n<rect x="212" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="226.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">38</text>\n<rect x="240" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="254.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">45</text>\n<rect x="268" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="282.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">56</text>\n<rect x="296" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="310.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">67</text>\n<rect x="324" y="202" width="28" height="26" class="f-blue s-blue" fill-opacity="0.25" stroke-width="2"/>\n<text x="338.0" y="220" font-size="12" text-anchor="middle" font-weight="bold">72</text>\n<rect x="352" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="366.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">78</text>\n<rect x="380" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="394.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">84</text>\n<rect x="408" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="422.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">91</text>\n<rect x="436" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="450.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">95</text>\n<rect x="464" y="202" width="28" height="26" class="f-gray s-gray" fill-opacity="0.15" stroke-width="1"/>\n<text x="478.0" y="220" font-size="12" text-anchor="middle" class="t-gray" opacity="0.6">99</text>\n<text x="338.0" y="240" font-size="10" text-anchor="middle" class="t-purple">lo = hi</text>\n<text x="44" y="252" font-size="11" class="t-blue">mid = 10: 72 = 72, found!</text>\n</svg>',
          alt: 'Binary search for 72 in a sorted array of 16 numbers. Step 1 probes index 7 (45), step 2 index 11 (78), step 3 index 9 (67), step 4 index 10 (72), found. Discarded halves are grayed out.',
          caption: 'Searching for $72$ among $16$ sorted values: $16 \\to 8 \\to 3 \\to 1$ candidates in four probes. Gray cells have been ruled out; blue is the probe.',
        },
        {
          type: 'code',
          title: 'binary_search.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Returns the index of target in the sorted vector a, or -1. Counts probes.
int binarySearch(const std::vector<int>& a, int target, int& probes) {
    int lo = 0, hi = static_cast<int>(a.size()) - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;   // avoids overflow of lo + hi
        ++probes;
        if (a[mid] == target) return mid;
        if (a[mid] < target) lo = mid + 1;  // target is in the right half
        else hi = mid - 1;                  // target is in the left half
    }
    return -1;
}

int main() {
    std::vector<int> a = {2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 72, 78, 84, 91, 95, 99};
    int probes = 0;
    int idx = binarySearch(a, 72, probes);
    std::printf("72 found at index %d after %d probes\\n", idx, probes);

    // Worst case over every target (present or absent) for n = 1,000,000.
    std::vector<int> big(1000000);
    for (int i = 0; i < 1000000; ++i) big[i] = 2 * i;   // even numbers
    int worst = 0;
    for (int t = -1; t <= 2000000; ++t) {
        int p = 0;
        binarySearch(big, t, p);
        if (p > worst) worst = p;
    }
    std::printf("worst case for n = 1000000: %d probes\\n", worst);
}`,
          output: `72 found at index 10 after 4 probes
worst case for n = 1000000: 20 probes`,
          annotations: [
            { lines: 7, text: '[[dm-loop-invariant|Loop invariant]]: if the target is anywhere in the array, it is in `a[lo..hi]`. Each branch below preserves this.' },
            { lines: 8, text: '`(lo + hi) / 2` can overflow an `int` for huge arrays; `lo + (hi - lo) / 2` cannot.' },
            { lines: '27-31', text: 'Try every even target (hits) and every odd one (misses): no search ever needs more than $20$ probes.' },
          ],
        },
        {
          type: 'theorem',
          name: 'Worst case of binary search',
          tex: '\\text{probes} \\le \\lfloor \\log_2 n \\rfloor + 1',
          text: 'Each probe at least halves the number of candidates (the middle one is eliminated too). Starting from $n$, after $\\lfloor \\log_2 n \\rfloor$ probes at most $1$ candidate is left, and one more probe settles it. So binary search is $\\Theta(\\log n)$ in the worst case.',
        },
        {
          type: 'graph',
          x: [0, 64],
          y: [0, 64],
          xStep: 8,
          yStep: 8,
          functions: [
            { expr: 'x', label: 'linear search: $n$', color: 'red', domain: [1, 64] },
            { expr: 'floor(log_2(x)) + 1', label: 'binary search: $\\lfloor \\log_2 n \\rfloor + 1$', color: 'blue', domain: [1, 64] },
          ],
          caption: 'Worst-case comparisons. At $n = 64$ it is $64$ versus $7$; at $n = 10^6$ it is a million versus $20$. The price: the data must be sorted first.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In the standard library',
          text: '`std::lower_bound`, `std::upper_bound` and `std::binary_search` in `<algorithm>` implement exactly this on any sorted range. Games use the same idea to look up animation keyframes by time, find a loot-table entry from a random number against cumulative weights, or locate a value in any sorted lookup table.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'A sorted array holds $n = 5000$ entries. What is the **maximum** number of probes binary search can need?',
      label: 'probes $=$',
      answer: '13',
      hint: 'Use $\\lfloor \\log_2 n \\rfloor + 1$. Which powers of $2$ does $5000$ sit between?',
      explanation: '$2^{12} = 4096 \\le 5000 < 8192 = 2^{13}$, so $\\lfloor \\log_2 5000 \\rfloor = 12$ and the worst case is $12 + 1 = 13$ probes. Linear search on the same array could need $5000$ comparisons.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Analyzing two simple sorts',
      blocks: [
        {
          type: 'p',
          text: '**Bubble sort** sweeps through the array comparing neighbours and swapping any pair that is out of order; after pass $p$, the $p$ largest values have "bubbled" to the end. **[[dm-insertion-sort|Insertion sort]]** grows a sorted prefix: it takes the next element and slides it left past every bigger element, like sorting a hand of cards.',
        },
        {
          type: 'derivation',
          title: 'Insertion sort: best and worst case comparisons',
          steps: [
            { tex: '\\text{inserting } a[i] \\text{ makes between } 1 \\text{ and } i \\text{ comparisons}', why: 'It compares $a[i]$ with the sorted prefix $a[0..i-1]$ from right to left and stops at the first element not bigger than it, or after all $i$ of them.' },
            { tex: '\\text{sorted input: } \\sum_{i=1}^{n-1} 1 = n - 1', why: 'Each new element is already at least as big as its left neighbour, so the very first comparison stops the inner loop.' },
            { tex: '\\text{reversed input: } \\sum_{i=1}^{n-1} i = \\frac{n(n-1)}{2}', why: 'Each new element is smaller than everything before it, so it is compared with all $i$ of them and slides to the front.' },
          ],
          result: 'Best case $\\Theta(n)$, worst case $\\Theta(n^2)$.',
        },
        {
          type: 'p',
          text: 'The average case uses a beautiful idea. An **inversion** is a pair of positions $i < j$ with $a[i] > a[j]$. Each shift in insertion sort fixes exactly one inversion, so the work is (number of inversions) + (at most $n - 1$). In a random ordering, each of the $\\binom{n}{2}$ pairs is inverted with probability $\\frac{1}{2}$, so the expected number of inversions is $\\frac{n(n-1)}{4}$: average case $\\Theta(n^2)$, about half the worst case.',
        },
        {
          type: 'code',
          title: 'insertion_sort.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Sorts a in place and returns the number of key comparisons.
long insertionSort(std::vector<int>& a) {
    long comparisons = 0;
    for (std::size_t i = 1; i < a.size(); ++i) {
        int key = a[i];
        std::size_t j = i;
        while (j > 0) {
            ++comparisons;
            if (a[j - 1] <= key) break;   // found key's place: stop early
            a[j] = a[j - 1];              // shift the bigger element right
            --j;
        }
        a[j] = key;
    }
    return comparisons;
}

int main() {
    const int n = 1000;
    std::vector<int> sorted(n), reversed(n), scrambled(n);
    for (int i = 0; i < n; ++i) {
        sorted[i] = i;
        reversed[i] = n - i;
        scrambled[i] = (i * 7919) % n;
    }
    std::printf("sorted:    %ld comparisons\\n", insertionSort(sorted));
    std::printf("reversed:  %ld comparisons\\n", insertionSort(reversed));
    std::printf("scrambled: %ld comparisons\\n", insertionSort(scrambled));
    std::printf("n(n-1)/2 = %d,  n^2/4 = %d\\n", n * (n - 1) / 2, n * n / 4);
}`,
          output: `sorted:    999 comparisons
reversed:  499500 comparisons
scrambled: 251100 comparisons
n(n-1)/2 = 499500,  n^2/4 = 250000`,
          annotations: [
            { lines: 12, text: 'The early exit is what makes the best case linear. Without it, insertion sort would always do $\\frac{n(n-1)}{2}$ comparisons.' },
            { lines: 27, text: 'A fixed scrambled permutation of $0, \\dots, 999$; it has $250\\,101$ inversions, close to the random-order average $\\frac{n(n-1)}{4} = 249\\,750$.' },
          ],
        },
        {
          type: 'table',
          headers: ['Algorithm', 'Best', 'Average', 'Worst', 'Extra space'],
          rows: [
            ['Bubble sort (with "no swaps → stop" flag)', '$\\Theta(n)$', '$\\Theta(n^2)$', '$\\Theta(n^2)$', '$\\Theta(1)$'],
            ['Insertion sort', '$\\Theta(n)$', '$\\Theta(n^2)$', '$\\Theta(n^2)$', '$\\Theta(1)$'],
            ['Linear search', '$\\Theta(1)$', '$\\Theta(n)$', '$\\Theta(n)$', '$\\Theta(1)$'],
            ['Binary search (iterative)', '$\\Theta(1)$', '$\\Theta(\\log n)$', '$\\Theta(\\log n)$', '$\\Theta(1)$'],
          ],
          caption: 'Without the early-exit flag, bubble sort always makes $\\frac{n(n-1)}{2}$ comparisons, even on sorted input.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Quadratic is not always bad',
          text: 'Insertion sort is the fastest choice for tiny or nearly-sorted arrays: little overhead, cache-friendly, and linear when there are few inversions. That is why real library sorts finish small subarrays with it, and why it is ideal for re-sorting a list of sprites by depth each frame when only a few have moved.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student analyzes the **best case** of insertion sort. Tap the first wrong line.',
      lines: [
        'Insertion sort inserts $a[i]$ into the sorted prefix $a[0..i-1]$, for $i = 1, \\dots, n-1$.',
        'The inner loop compares $a[i]$ with prefix elements from right to left.',
        'On a sorted array, every prefix element is at most $a[i]$, so the inner loop compares $a[i]$ with all $i$ of them.',
        'So the best case uses $1 + 2 + \\cdots + (n-1) = \\frac{n(n-1)}{2}$ comparisons.',
        'Hence insertion sort is $\\Theta(n^2)$ even on sorted input.',
      ],
      errorLines: [3],
      explanation: 'Line 3 forgets the early exit. The inner loop stops at the **first** prefix element that is not bigger than $a[i]$. On sorted input that is the immediate left neighbour, so each insertion costs exactly $1$ comparison. The correct best case is $n - 1$ comparisons, $\\Theta(n)$ — which is exactly why insertion sort shines on nearly-sorted data.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Space complexity and amortized cost',
      blocks: [
        {
          type: 'p',
          text: 'Time is not the only resource. **Space complexity** counts the *extra* memory an algorithm needs beyond its input, as a function of $n$. Insertion sort and iterative binary search are **in place**: a few variables, $\\Theta(1)$ extra space. Merge sort (next lesson) needs a $\\Theta(n)$ buffer. Recursion is not free either: each pending call occupies a stack frame, so a recursive binary search uses $\\Theta(\\log n)$ stack space and a recursion $n$ levels deep uses $\\Theta(n)$ — enough to overflow the stack for large $n$.',
        },
        {
          type: 'heading',
          text: 'Amortized analysis: why push_back is $O(1)$',
        },
        {
          type: 'p',
          text: 'A `std::vector` stores its elements in one contiguous block. When the block is full, `push_back` must allocate a bigger block and copy every element over: that single call costs $\\Theta(n)$. So is `push_back` linear? No — if the capacity grows by a constant **factor** (say it doubles), expensive calls are rare enough that the **average cost per call over any sequence** stays constant. That average is the [[dm-amortized-analysis|amortized cost]].',
        },
        {
          type: 'derivation',
          title: 'Total copying cost of $n$ pushes into a doubling array (capacity starts at 1)',
          steps: [
            { tex: '\\text{copies happen when the size reaches } 1, 2, 4, \\dots, 2^m, \\quad 2^m < n', why: 'The array is full exactly when the size equals a power of $2$; the next push copies all of those elements into a block twice as big.' },
            { tex: '\\text{total copies} = 1 + 2 + 4 + \\cdots + 2^m', why: 'Add up the cost of every reallocation.' },
            { tex: '= 2^{m+1} - 1', why: 'Sum of a [[geometric-series]] with ratio $2$.' },
            { tex: '< 2n', why: 'Since $2^m < n$, we have $2^{m+1} < 2n$.' },
            { tex: '\\frac{\\text{total work}}{n} < \\frac{n + 2n}{n} = 3', why: 'Each push also writes its own element ($n$ writes in total). Divide the total by the number of pushes.' },
          ],
          result: 'At most $3$ element writes per push on average: amortized $\\Theta(1)$, even though a single push can cost $\\Theta(n)$.',
        },
        {
          type: 'code',
          title: 'doubling_vector.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <initializer_list>

// A toy growable array that doubles its capacity when full,
// counting how many element copies the reallocations cost.
struct IntVec {
    int* data = new int[1];
    long size = 0, capacity = 1, copies = 0;

    void push_back(int x) {
        if (size == capacity) {                  // full: allocate 2x and move over
            int* bigger = new int[2 * capacity];
            for (long i = 0; i < size; ++i) bigger[i] = data[i];
            copies += size;
            delete[] data;
            data = bigger;
            capacity *= 2;
        }
        data[size++] = x;
    }
    ~IntVec() { delete[] data; }
};

int main() {
    for (long n : {17L, 1000L, 1000000L}) {
        IntVec v;
        for (long i = 0; i < n; ++i) v.push_back(static_cast<int>(i));
        std::printf("n = %7ld  copies = %7ld  copies per push = %.3f\\n",
                    n, v.copies, static_cast<double>(v.copies) / n);
    }
}`,
          output: `n =      17  copies =      31  copies per push = 1.824
n =    1000  copies =    1023  copies per push = 1.023
n = 1000000  copies = 1048575  copies per push = 1.049`,
          annotations: [
            { lines: '11-17', text: 'The rare expensive step: allocate double, copy all `size` elements, free the old block.' },
            { lines: 28, text: 'Copies per push stays below $2$ for every $n$, matching the bound $2^{m+1} - 1 < 2n$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Growing by a constant amount is quadratic',
          text: 'If the array grew by a fixed $+100$ slots instead of $\\times 2$, the copies would total $100 + 200 + 300 + \\cdots \\approx \\frac{n^2}{200}$: $\\Theta(n^2)$ for $n$ pushes. The factor does not have to be $2$ (MSVC\'s `std::vector` uses $1.5$, libstdc++ uses $2$); any factor above $1$ gives amortized $O(1)$. If you know the final size, `reserve(n)` avoids every copy.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Using the doubling array above (capacity starts at $1$ and doubles whenever a push finds it full), how many element **copies** do the reallocations make in total while pushing $33$ elements?',
      label: 'copies $=$',
      answer: '63',
      hint: 'Reallocations happen when a push finds the size equal to $1, 2, 4, \\dots$. Which of those sizes occur before the $33$rd push finishes?',
      explanation: 'The array is full when its size is $1, 2, 4, 8, 16$ and $32$; the $2$nd, $3$rd, $5$th, $9$th, $17$th and $33$rd pushes each trigger a reallocation copying that many elements. Total: $1 + 2 + 4 + 8 + 16 + 32 = 63 = 2^6 - 1$. That is under $2 \\times 33 = 66$, as the amortized bound promises.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Tractable and intractable: P versus NP',
      blocks: [
        {
          type: 'p',
          text: 'Algorithms whose worst case is $O(n^k)$ for some constant $k$ run in **polynomial time**. Computer scientists treat these as **tractable**: they scale reasonably, and polynomial-time steps combined a polynomial number of times are still polynomial. Problems for which the best known algorithms are exponential, like trying all $2^n$ subsets, are called **intractable** for large $n$.',
        },
        {
          type: 'definition',
          term: 'P and NP',
          text: '**P** is the class of yes/no problems that can be **solved** in polynomial time. **NP** is the class of yes/no problems where a proposed "yes" answer (a certificate, such as a filled-in Sudoku) can be **checked** in polynomial time. Every problem in P is in NP. The famous open question, [[dm-p-np|P versus NP]], is whether $\\text{P} = \\text{NP}$: is every problem that is easy to *check* also easy to *solve*?',
        },
        {
          type: 'table',
          headers: ['Problem (yes/no version)', 'Checking a proposed answer', 'Best known way to find one'],
          rows: [
            ['Sudoku on an $n^2 \\times n^2$ grid', 'scan rows, columns, boxes: polynomial', 'no polynomial algorithm known'],
            ['[[dm-satisfiability|Satisfiability]]: can a logic formula be made true?', 'plug in the assignment: polynomial', 'essentially try assignments: up to $2^n$'],
            ['Subset sum: do some of these $n$ numbers add to $T$?', 'add the chosen numbers: $O(n)$', 'no polynomial algorithm known'],
            ['Travelling salesperson: is there a tour of length $\\le L$?', 'add up the tour: $O(n)$', 'no polynomial algorithm known'],
            ['Is this list sorted? / Is $x$ in this sorted array?', 'easy', 'easy — these are in P'],
          ],
          caption: 'The first four are **[[dm-np-complete|NP-complete]]**: if any one of them had a polynomial-time algorithm, every NP problem would, and P would equal NP.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'NP does not mean "not polynomial"',
          text: 'NP stands for *nondeterministic polynomial time*, not "non-polynomial". Everything in P is also in NP. The open question is whether NP contains problems that are **not** in P. Most experts believe $\\text{P} \\ne \\text{NP}$, but nobody has proved it; it is one of the Clay Institute\'s \\$1,000,000 Millennium Prize Problems.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'What game programmers do about it',
          text: 'NP-hard problems show up constantly: packing sprites into a texture atlas, scheduling jobs across cores, finding the shortest route through every objective, generating a puzzle with exactly one solution. Nobody waits for exponential search. You use **heuristics** and **approximations** that are good enough and fast — greedy packing, A* with a good heuristic, simulated annealing — or you keep $n$ small enough that brute force fits the budget.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Which statement about P and NP is correct?',
      options: [
        { text: 'NP is the class of problems that cannot be solved in polynomial time.', why: 'This is the classic misreading of the name. NP is about **checking** answers quickly; it contains all of P.' },
        { text: 'If someone found a polynomial-time algorithm for one NP-complete problem, such as subset sum, then P would equal NP.', correct: true, why: 'Right. NP-complete problems are the hardest in NP: every NP problem can be translated into any one of them in polynomial time, so a fast algorithm for one gives a fast algorithm for all.' },
        { text: 'It has been proved that P ≠ NP, which is why Sudoku has no fast algorithm.', why: 'No proof exists in either direction. That P ≠ NP is widely believed, but it is still an open problem.' },
        { text: 'Problems in P cannot be in NP, because NP problems are hard.', why: 'Every problem in P is in NP: if you can solve it in polynomial time, you can certainly check a proposed answer in polynomial time (just solve it and compare).' },
      ],
      explanation: 'P = solvable in polynomial time; NP = a "yes" answer can be verified in polynomial time; P ⊆ NP. NP-complete problems are the hardest ones in NP, so one polynomial algorithm for any of them would collapse NP into P. Whether that can happen is the open P vs NP question.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Fill in the worst-case (unless stated) running times.',
      template: 'Linear search: ___ . Binary search on a sorted array: ___ . Insertion sort, worst case: ___ . Insertion sort on already-sorted input: ___ . One `push_back` into a doubling array, amortized: ___ .',
      blanks: [
        { answers: ['$\\Theta(n)$'] },
        { answers: ['$\\Theta(\\log n)$'] },
        { answers: ['$\\Theta(n^2)$'] },
        { answers: ['$\\Theta(n)$'] },
        { answers: ['$\\Theta(1)$'] },
      ],
      wordBank: ['$\\Theta(1)$', '$\\Theta(\\log n)$', '$\\Theta(n)$', '$\\Theta(n)$', '$\\Theta(n \\log n)$', '$\\Theta(n^2)$'],
      explanation: 'Linear search may check all $n$ items: $\\Theta(n)$. Binary search halves the candidates each probe: $\\lfloor \\log_2 n \\rfloor + 1 = \\Theta(\\log n)$. Insertion sort on reversed input makes $\\frac{n(n-1)}{2} = \\Theta(n^2)$ comparisons, but on sorted input only $n - 1 = \\Theta(n)$. A doubling array\'s reallocations total fewer than $2n$ copies over $n$ pushes, so each push is $\\Theta(1)$ amortized. ($\\Theta(n\\log n)$ is merge sort — next lesson.)',
    },
  ],
  takeaways: [
    'Count loop iterations: one loop $\\Theta(n)$; independent nested loops $\\Theta(n^2)$; dependent bounds are summed, e.g. $\\sum (n-1-i) = \\frac{n(n-1)}{2}$; halving or doubling loops $\\Theta(\\log n)$.',
    'Worst case is the default guarantee; best case is one lucky input; average case needs a probability model (linear search: $1$, $n$ and $\\frac{n+1}{2}$).',
    'Binary search on sorted data needs at most $\\lfloor \\log_2 n \\rfloor + 1$ probes — $20$ for a million items.',
    'Bubble and insertion sort are $\\Theta(n^2)$ in the worst and average case; insertion sort is $\\Theta(n)$ on sorted input because of its early exit, and both use $\\Theta(1)$ extra space.',
    'Growing an array by a constant factor makes `push_back` amortized $\\Theta(1)$: the copies form a geometric series below $2n$.',
    'P: solvable in polynomial time; NP: checkable in polynomial time. Whether P = NP is open; in practice, NP-hard problems are attacked with heuristics.',
  ],
  reading: [
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The sums and asymptotics material covers exactly the summation tricks used to count nested loops.',
    },
    {
      title: 'Wikipedia — Binary search algorithm',
      url: 'https://en.wikipedia.org/wiki/Binary_search_algorithm',
      source: 'wikipedia',
      note: 'Includes the history of the infamous midpoint-overflow bug and variants for finding the leftmost or rightmost match.',
    },
    {
      title: 'Wikipedia — Amortized analysis',
      url: 'https://en.wikipedia.org/wiki/Amortized_analysis',
      source: 'wikipedia',
      note: 'Shows the aggregate, accounting and potential methods, with the dynamic array as the running example.',
    },
    {
      title: 'Wikipedia — P versus NP problem',
      url: 'https://en.wikipedia.org/wiki/P_versus_NP_problem',
      source: 'wikipedia',
      note: 'A readable overview of the question, NP-completeness and why most researchers believe P ≠ NP.',
    },
  ],
};
