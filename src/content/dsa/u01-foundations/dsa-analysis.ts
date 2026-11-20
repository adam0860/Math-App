import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-analysis',
  title: 'Analyzing Algorithms in Practice',
  summary: 'Beyond big-O: what worst, average, expected and amortized bounds really promise, the aggregate and banker\'s methods, counting versus timing, and the memory hierarchy that decides real speed.',
  minutes: 22,
  objectives: [
    'Say precisely what a worst-case, average-case, expected and amortized bound each guarantee, and which one a library\'s "$O(1)$" means',
    'Compute an exact average-case cost with linearity of expectation and check it by brute force',
    'Prove amortized bounds with the aggregate method and the banker\'s (accounting) method, stating the credit invariant',
    'Explain why you count operations for analysis but profile for decisions, and avoid the classic benchmarking traps',
    'Describe the memory hierarchy and cache lines, predict cache misses for a traversal, and explain why constant factors decide real performance in games',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'What exactly is being bounded?',
      blocks: [
        {
          type: 'p',
          text: 'Quick recap from Discrete Math: $f(n) = O(g(n))$ means $f$ eventually stays below a constant multiple of $g$ ([[big-o-notation]]), $\\Omega$ is the matching lower bound ([[dm-big-omega]]) and $\\Theta$ means both ([[dm-big-theta]]). Constants and lower-order terms are thrown away on purpose, so a bound describes *growth*, not seconds. This course takes that toolkit into engineering, where two more questions matter: **what** is being bounded, and **what did we throw away**?',
        },
        {
          type: 'definition',
          term: 'Cost model',
          text: 'The operations you agree to count, each charged one unit: comparisons for a sort, probes for a hash table, bit flips for a counter, cache misses for a memory-bound loop. A complexity claim is only meaningful together with its cost model and its input size $n$.',
        },
        {
          type: 'p',
          text: 'Even with the cost model fixed, the cost usually depends on *which* input of size $n$ you get. There are four common ways to turn that spread of costs into one function of $n$, and they promise very different things:',
        },
        {
          type: 'table',
          headers: ['Bound', 'Taken over', 'Promise', 'Typical example'],
          rows: [
            ['Worst case', 'the hardest input of size $n$', 'every single call is at most this', 'binary search: $O(\\log n)$'],
            ['Average case', 'inputs drawn from an assumed distribution', 'typical inputs cost this; a bad input can cost more', 'insertion sort on a random order: $\\Theta(n^2)$'],
            ['Expected', 'the algorithm\'s own random choices, for a fixed input', 'on **every** input, the mean over coin flips is this', 'quicksort with a random pivot: $O(n \\log n)$'],
            ['Amortized', 'a whole sequence of operations', 'any $m$ operations total at most $m$ times this; no probability at all', '`std::vector::push_back`: $O(1)$'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why worst case is the default, and when it is not enough',
          text: 'A worst-case bound needs no assumptions about the inputs, so it composes: call a worst-case $O(\\log n)$ function $n$ times and you get $O(n \\log n)$, period. An average-case bound is only as good as its distribution, and real inputs are rarely uniform: they are often nearly sorted, adversarial (an attacker crafting hash collisions) or full of duplicates. Expected and amortized bounds sit in between: they hold for every input, but they allow an individual operation to be slow. In a game that individual slow operation is a **frame hitch**, so you will meet all four in this course.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'In an interview',
          text: 'When you state a complexity, say which kind it is: "`unordered_map` lookup is $O(1)$ on average, $O(n)$ worst case if everything collides" or "`push_back` is amortized $O(1)$, but one call can be $O(n)$". Interviewers listen for exactly that distinction.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'mcq',
      prompt: 'The C++ standard says `std::vector::push_back` takes **amortized constant** time. What does that guarantee?',
      options: [
        { text: 'Every individual `push_back` call finishes in $O(1)$ time', why: 'No: the call that finds the vector full copies all $n$ elements, which is $\\Theta(n)$. Amortized bounds explicitly allow occasional expensive calls.' },
        { text: 'Any sequence of $m$ `push_back` calls on an initially empty vector takes $O(m)$ time in total', correct: true, why: 'That is the definition of amortized $O(1)$: the total over any sequence is at most a constant times the number of operations, with no probability involved.' },
        { text: 'If the pushed values are random, a call takes $O(1)$ time on average', why: 'That describes an average-case bound over a distribution of inputs. The values pushed are irrelevant to the copying cost, and the amortized bound holds for every sequence.' },
        { text: 'The expected time over the vector\'s internal random choices is $O(1)$', why: 'A vector makes no random choices. "Expected" bounds belong to randomized algorithms such as quicksort with a random pivot.' },
      ],
      explanation: 'Amortized cost averages over a **sequence of operations**, not over inputs or coin flips. One push into a full vector costs $\\Theta(n)$, but such pushes are rare enough that $m$ pushes cost $O(m)$ in total, for every possible sequence. You will prove this with the banker\'s method in the next lesson.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'An average case done properly: insertion sort',
      blocks: [
        {
          type: 'p',
          text: 'In Discrete Math you found insertion sort\'s best case ($n - 1$ comparisons, sorted input) and worst case ($\\frac{n(n-1)}{2}$, reversed input). The average case needs one more tool, **linearity of expectation**: the expected value of a sum is the sum of the expected values, even when the terms are dependent. So you can analyze one insertion at a time.',
        },
        {
          type: 'p',
          text: 'Insert $a[i]$ into the sorted prefix $a[0..i-1]$. Let $d$ be the number of prefix elements larger than $a[i]$. If the input is a uniformly random permutation, $a[i]$ is equally likely to rank anywhere among the first $i + 1$ values, so $d$ is uniform on $\\{0, 1, \\dots, i\\}$. The inner loop makes $d + 1$ comparisons (it stops at the first element that is not larger), except when $d = i$: then $a[i]$ slides all the way to the front and the loop stops on `j > 0` after only $i$ comparisons.',
        },
        {
          type: 'derivation',
          title: 'Expected comparisons of insertion sort on a random permutation',
          steps: [
            { tex: 'E[C_i] = \\frac{1}{i+1}\\Big(\\sum_{d=0}^{i-1} (d+1) \\;+\\; i\\Big)', why: 'Each of the $i + 1$ values of $d$ has probability $\\frac{1}{i+1}$. The values $d < i$ cost $d + 1$; the value $d = i$ costs $i$.' },
            { tex: '= \\frac{1}{i+1}\\Big(\\frac{i(i+1)}{2} + i\\Big) = \\frac{i}{2} + \\frac{i}{i+1}', why: 'The sum $1 + 2 + \\cdots + i = \\frac{i(i+1)}{2}$, then divide each term by $i + 1$.' },
            { tex: 'E[C] = \\sum_{i=1}^{n-1} \\Big(\\frac{i}{2} + 1 - \\frac{1}{i+1}\\Big)', why: 'Linearity of expectation: the total is the sum over the insertions $i = 1, \\dots, n - 1$. Also $\\frac{i}{i+1} = 1 - \\frac{1}{i+1}$.' },
            { tex: '= \\frac{n(n-1)}{4} + (n - 1) - (H_n - 1)', why: '$\\sum \\frac{i}{2} = \\frac{1}{2}\\cdot\\frac{(n-1)n}{2}$; there are $n - 1$ ones; and $\\sum_{i=1}^{n-1}\\frac{1}{i+1} = \\frac{1}{2} + \\cdots + \\frac{1}{n} = H_n - 1$, where $H_n = 1 + \\frac{1}{2} + \\cdots + \\frac{1}{n}$ is the harmonic number.' },
            { tex: '= \\frac{n(n-1)}{4} + n - H_n', why: 'Simplify. Since $H_n \\approx \\ln n$, this is $\\frac{n^2}{4} + O(n)$: about **half** the worst case, and still $\\Theta(n^2)$.' },
          ],
          result: 'On a random permutation insertion sort makes $\\frac{n(n-1)}{4} + n - H_n$ comparisons on average. For $n = 4$: $3 + 4 - \\frac{25}{12} = \\frac{59}{12} \\approx 4.9167$.',
        },
        {
          type: 'p',
          text: 'A formula like that deserves a check. For small $n$ you can simply try **every** input: there are only $n!$ orders, and `std::next_permutation` walks through all of them.',
        },
        {
          type: 'code',
          title: 'insertion_cases.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <numeric>
#include <vector>

// Insertion sort that counts evaluations of the comparison a[j-1] > key.
long insertionSort(std::vector<int> a) {
    long comparisons = 0;
    for (std::size_t i = 1; i < a.size(); ++i) {
        int key = a[i];
        std::size_t j = i;
        while (j > 0 && (++comparisons, a[j - 1] > key)) {
            a[j] = a[j - 1];
            --j;
        }
        a[j] = key;
    }
    return comparisons;
}

int main() {
    for (int n = 3; n <= 7; ++n) {
        std::vector<int> p(n);
        std::iota(p.begin(), p.end(), 1);          // 1, 2, ..., n: sorted
        long best = 1L << 40, worst = 0, total = 0, count = 0;
        do {                                       // every one of the n! orders
            long c = insertionSort(p);
            best = std::min(best, c);
            worst = std::max(worst, c);
            total += c;
            ++count;
        } while (std::next_permutation(p.begin(), p.end()));
        double harmonic = 0;
        for (int k = 1; k <= n; ++k) harmonic += 1.0 / k;
        std::printf("n = %d  best = %2ld  worst = %2ld  average = %7.4f  formula = %7.4f\\n",
                    n, best, worst, double(total) / count, n * (n - 1) / 4.0 + n - harmonic);
    }
}`,
          output: `n = 3  best =  2  worst =  3  average =  2.6667  formula =  2.6667
n = 4  best =  3  worst =  6  average =  4.9167  formula =  4.9167
n = 5  best =  4  worst = 10  average =  7.7167  formula =  7.7167
n = 6  best =  5  worst = 15  average = 11.0500  formula = 11.0500
n = 7  best =  6  worst = 21  average = 14.9071  formula = 14.9071`,
          annotations: [
            { lines: 12, text: 'The comma operator bumps the counter exactly when `a[j - 1] > key` is evaluated. Short-circuit `&&` skips it once `j` reaches $0$, which is the $d = i$ case.' },
            { lines: '24-32', text: 'Start from the sorted order; `next_permutation` then visits all $n!$ orders and returns `false` after the last one.' },
            { lines: 36, text: 'The closed form $\\frac{n(n-1)}{4} + n - H_n$, computed independently: it matches the brute-force average for every $n$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where the distribution assumption breaks in games',
          text: 'Sorting sprites back to front, or particles by camera depth, happens every frame, and objects barely move between frames. So the input is **nearly sorted**, nothing like a random permutation. Insertion sort costs $(n - 1) + (\\text{number of inversions})$ comparisons at most, which is close to linear here. The "average case" of a random permutation is the wrong model for this input; the right model makes the "slow" quadratic sort the fast choice.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Run the insertion sort above (it counts each evaluation of `a[j - 1] > key`) on the array $[5, 2, 4, 6, 1, 3]$. How many comparisons does it make in total?',
      label: 'comparisons $=$',
      answer: '12',
      hint: 'For each $i = 1, \\dots, 5$, count the prefix elements larger than $a[i]$ ($d$), and add $1$ unless $a[i]$ slides all the way to the front.',
      explanation: 'Insert $2$: $d = 1$ and it reaches the front, so $1$ comparison. Insert $4$ into $[2, 5]$: $d = 1$, plus the stopping comparison with $2$: $2$. Insert $6$ into $[2, 4, 5]$: $d = 0$: $1$. Insert $1$ into $[2, 4, 5, 6]$: $d = 4$, reaches the front: $4$. Insert $3$ into $[1, 2, 4, 5, 6]$: $d = 3$, plus the stop at $2$: $4$. Total $1 + 2 + 1 + 4 + 4 = 12$. Equivalently: $9$ inversions, plus $1$ for each of the $3$ insertions that stopped on a comparison.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Amortized analysis I: the aggregate method',
      blocks: [
        {
          type: 'p',
          text: 'You met [[dm-amortized-analysis|amortized cost]] in Discrete Math with the doubling vector. Here is the idea in general. Some data structures have operations whose cost swings wildly: usually cheap, occasionally very expensive. A worst-case-per-operation bound is then far too pessimistic, because the expensive case **cannot happen often**. Amortized analysis bounds the total cost $T(m)$ of any sequence of $m$ operations, and the amortized cost per operation is $T(m)/m$.',
        },
        {
          type: 'p',
          text: 'The simplest technique is the **aggregate method**: find the total cost of the worst sequence directly, then divide. The classic example is a binary counter. `increment()` turns the trailing $1$s into $0$s (the carry) and the first $0$ into a $1$. Cost model: one unit per bit flipped. A single increment can flip every bit (think $0111 \\to 1000$), so its worst case is $\\Theta(\\log n)$ after $n$ increments. Watch how rarely that happens:',
        },
        {"type": "algo", "view": "array", "code": "int increment(std::vector<int>& bit) {\n    int flips = 0, i = 0;\n    while (bit[i] == 1) {\n        bit[i++] = 0;\n        ++flips;\n    }\n    bit[i] = 1;\n    return flips + 1;\n}", "interval": 1100, "frames": [{"note": "A 4-bit counter at $0$. Cell $i$ holds bit $i$, so the least significant bit is on the **left**.", "array": [0, 0, 0, 0], "vars": [["value", "0"], ["flips this time", "0"], ["total flips", "0"], ["credits stored", "0"]], "lines": [1]}, {"note": "Increment 1: bit 0 was $0$, so one flip and done.", "array": [1, 0, 0, 0], "marks": [{"index": 0, "color": "green"}], "pointers": [{"index": 0, "label": "i"}], "lines": [3, 7], "vars": [["value", "1"], ["flips this time", "1"], ["total flips", "1"], ["credits stored", "1"]]}, {"note": "Increment 2: the trailing $1$ resets to $0$ (red), then bit 1 becomes $1$ (green): 2 flips.", "array": [0, 1, 0, 0], "marks": [{"index": 0, "color": "red"}, {"index": 1, "color": "green"}], "pointers": [{"index": 1, "label": "i"}], "lines": [3, 4, 5, 7], "vars": [["value", "2"], ["flips this time", "2"], ["total flips", "3"], ["credits stored", "1"]]}, {"note": "Increment 3: bit 0 was $0$, so one flip and done.", "array": [1, 1, 0, 0], "marks": [{"index": 0, "color": "green"}], "pointers": [{"index": 0, "label": "i"}], "lines": [3, 7], "vars": [["value", "3"], ["flips this time", "1"], ["total flips", "4"], ["credits stored", "2"]]}, {"note": "Increment 4: 2 trailing $1$s reset to $0$ (red), then bit 2 becomes $1$ (green): 3 flips.", "array": [0, 0, 1, 0], "marks": [{"index": 0, "color": "red"}, {"index": 1, "color": "red"}, {"index": 2, "color": "green"}], "pointers": [{"index": 2, "label": "i"}], "lines": [3, 4, 5, 7], "vars": [["value", "4"], ["flips this time", "3"], ["total flips", "7"], ["credits stored", "1"]]}, {"note": "Increment 5: bit 0 was $0$, so one flip and done.", "array": [1, 0, 1, 0], "marks": [{"index": 0, "color": "green"}], "pointers": [{"index": 0, "label": "i"}], "lines": [3, 7], "vars": [["value", "5"], ["flips this time", "1"], ["total flips", "8"], ["credits stored", "2"]]}, {"note": "Increment 6: the trailing $1$ resets to $0$ (red), then bit 1 becomes $1$ (green): 2 flips.", "array": [0, 1, 1, 0], "marks": [{"index": 0, "color": "red"}, {"index": 1, "color": "green"}], "pointers": [{"index": 1, "label": "i"}], "lines": [3, 4, 5, 7], "vars": [["value", "6"], ["flips this time", "2"], ["total flips", "10"], ["credits stored", "2"]]}, {"note": "Increment 7: bit 0 was $0$, so one flip and done.", "array": [1, 1, 1, 0], "marks": [{"index": 0, "color": "green"}], "pointers": [{"index": 0, "label": "i"}], "lines": [3, 7], "vars": [["value", "7"], ["flips this time", "1"], ["total flips", "11"], ["credits stored", "3"]]}, {"note": "Increment 8: all four bits flip, the most expensive step so far. Yet the total is only $15 < 2 \\cdot 8$.", "array": [0, 0, 0, 1], "marks": [{"index": 0, "color": "red"}, {"index": 1, "color": "red"}, {"index": 2, "color": "red"}, {"index": 3, "color": "green"}], "pointers": [{"index": 3, "label": "i"}], "lines": [3, 4, 5, 7], "vars": [["value", "8"], ["flips this time", "4"], ["total flips", "15"], ["credits stored", "1"]]}], "caption": "Eight increments of a binary counter. Most increments flip one or two bits; the rare expensive ones are paid for by the cheap ones. **Credits stored** counts the $1$ bits, the banker's savings of the next card."},
        {
          type: 'derivation',
          title: 'Aggregate method: total flips over $n$ increments starting from $0$',
          steps: [
            { tex: '\\text{bit } 0 \\text{ flips on every increment: } n \\text{ times}', why: 'The lowest bit alternates $0, 1, 0, 1, \\dots$.' },
            { tex: '\\text{bit } 1 \\text{ flips every 2nd increment: } \\lfloor n/2 \\rfloor \\text{ times}', why: 'Bit $1$ changes exactly when the count passes a multiple of $2$.' },
            { tex: '\\text{bit } k \\text{ flips } \\lfloor n/2^k \\rfloor \\text{ times}', why: 'Bit $k$ changes exactly when the count passes a multiple of $2^k$.' },
            { tex: 'T(n) = \\sum_{k \\ge 0} \\left\\lfloor \\frac{n}{2^k} \\right\\rfloor < n \\sum_{k \\ge 0} \\frac{1}{2^k} = 2n', why: 'Drop the floors (each only lowers a term) and sum the geometric series $1 + \\frac{1}{2} + \\frac{1}{4} + \\cdots = 2$.' },
            { tex: '\\frac{T(n)}{n} < 2', why: 'Divide by the number of operations.' },
          ],
          result: 'Increment is amortized $O(1)$ (fewer than $2$ flips each), although one increment can cost $\\Theta(\\log n)$.',
        },
        {
          type: 'code',
          title: 'binary_counter.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <initializer_list>
#include <vector>

// A k-bit binary counter. increment() returns how many bits it flipped.
struct Counter {
    std::vector<int> bit = std::vector<int>(32, 0); // bit[0] is the least significant

    int increment() {
        int flips = 0, i = 0;
        while (bit[i] == 1) {   // trailing 1s become 0 (the carry ripples left)
            bit[i++] = 0;
            ++flips;
        }
        bit[i] = 1;             // the first 0 becomes 1
        return flips + 1;
    }
};

int main() {
    for (long n : {8L, 16L, 1000L, 1000000L}) {
        Counter c;
        long total = 0, worst = 0;
        for (long k = 0; k < n; ++k) {
            long f = c.increment();
            total += f;
            if (f > worst) worst = f;
        }
        std::printf("n = %7ld  total flips = %7ld  worst single = %2ld  per increment = %.4f\\n",
                    n, total, worst, double(total) / n);
    }
}`,
          output: `n =       8  total flips =      15  worst single =  4  per increment = 1.8750
n =      16  total flips =      31  worst single =  5  per increment = 1.9375
n =    1000  total flips =    1994  worst single = 10  per increment = 1.9940
n = 1000000  total flips = 1999993  worst single = 20  per increment = 2.0000`,
          annotations: [
            { lines: '11-14', text: 'The carry: every trailing $1$ becomes $0$. This loop is the expensive part, and it is long only when the count ends in many $1$s.' },
            { lines: 27, text: 'Track the worst single increment too: it grows like $\\log_2 n$ ($20$ flips for $n = 10^6$), while the average stays under $2$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Amortized is not average case',
          text: 'Nothing here is random. The bound $T(n) < 2n$ holds for **every** run of $n$ increments from zero. What amortization gives up is a per-operation guarantee: the $2^{20}$th increment really does flip $21$ bits. If one slow operation inside a frame matters, you need a worst-case bound or a structure that spreads the work out (incremental resizing does exactly that).',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'A binary counter starts at $0$ and is incremented $20$ times (cost $=$ bits flipped). What is the **total** number of bit flips?',
      label: 'total flips $=$',
      answer: '38',
      hint: 'Bit $k$ flips $\\lfloor 20 / 2^k \\rfloor$ times.',
      explanation: '$\\lfloor 20/1 \\rfloor + \\lfloor 20/2 \\rfloor + \\lfloor 20/4 \\rfloor + \\lfloor 20/8 \\rfloor + \\lfloor 20/16 \\rfloor = 20 + 10 + 5 + 2 + 1 = 38$, which is below the bound $2 \\cdot 20 = 40$. (A neat identity: the total is always $2n - (\\text{number of } 1\\text{s in } n)$; here $20 = 10100_2$ has two $1$s, so $40 - 2 = 38$.)',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Amortized analysis II: the banker\'s method',
      blocks: [
        {
          type: 'p',
          text: 'The aggregate method needs you to sum the whole sequence at once, which is awkward when there are several kinds of operation. The [[dsa-accounting-method|banker\'s method]] (also called the accounting method) works one operation at a time. You **charge** each operation an amortized cost $\\hat{c}$, which may be more than its actual cost $c$. The surplus is saved as **credit** stored on specific parts of the data structure, and later expensive operations spend that credit.',
        },
        {
          type: 'theorem',
          name: 'Banker\'s method',
          tex: '\\text{if credit} \\ge 0 \\text{ at all times, then } \\sum_{j=1}^{m} c_j \\;\\le\\; \\sum_{j=1}^{m} \\hat{c}_j',
          text: 'Credit after $m$ operations is $\\sum \\hat{c}_j - \\sum c_j$, starting from $0$. If it never goes negative, the charges cover the true total. The whole proof is choosing charges and stating a **credit invariant** that shows the bank never goes overdrawn.',
        },
        {
          type: 'p',
          text: 'For the binary counter, charge $\\hat{c} = 2$ per increment. Invariant: **every $1$ bit holds one credit**. An increment resets $t$ trailing $1$s and sets one bit. Each reset is paid by the credit sitting on that bit; the set costs $1$ from the charge, and the other $1$ is stored on the newly set bit. The invariant holds again, and the credit (the number of $1$s) is never negative. So $n$ increments cost at most $2n$. That is the **credits stored** readout in the animation above.',
        },
        {
          type: 'derivation',
          title: 'A stack with `multipop(k)`: any $m$ operations cost $O(m)$',
          steps: [
            { tex: 'c(\\texttt{push}) = 1, \\quad c(\\texttt{pop}) = 1, \\quad c(\\texttt{multipop}(k)) = \\min(k, s)', why: 'Actual costs, where $s$ is the current size. One `multipop` can cost $\\Theta(m)$, so the naive worst-case bound for $m$ operations is $O(m^2)$.' },
            { tex: '\\hat{c}(\\texttt{push}) = 2, \\quad \\hat{c}(\\texttt{pop}) = 0, \\quad \\hat{c}(\\texttt{multipop}) = 0', why: 'The charges: a push pays for itself and prepays its own future pop.' },
            { tex: '\\text{invariant: every element on the stack holds 1 credit}', why: 'A push spends $1$ and stores $1$ on the new element. A pop or multipop removes elements, and each one pays for its removal with the credit it carries.' },
            { tex: '\\text{credit} = s \\ge 0', why: 'The stored credit equals the stack size, which can never be negative.' },
            { tex: '\\sum c_j \\le \\sum \\hat{c}_j \\le 2m', why: 'By the theorem, and since every charge is at most $2$.' },
          ],
          result: 'Each operation is amortized $O(1)$. Intuitively, you cannot pop more elements than you have ever pushed.',
        },
        {
          type: 'deepdive',
          title: 'The potential method',
          blocks: [
            {
              type: 'p',
              text: 'The third classic technique replaces scattered credits with one number, a **potential** $\\Phi \\ge 0$ of the whole structure, with $\\Phi = 0$ at the start. Define $\\hat{c}_j = c_j + \\Phi_j - \\Phi_{j-1}$. The sum telescopes: $\\sum \\hat{c}_j = \\sum c_j + \\Phi_m - \\Phi_0 \\ge \\sum c_j$.',
            },
            {
              type: 'p',
              text: 'For the counter take $\\Phi =$ the number of $1$ bits. An increment that resets $t$ bits has actual cost $t + 1$ and changes $\\Phi$ by $1 - t$, so $\\hat{c} = (t + 1) + (1 - t) = 2$. Same answer, with no bookkeeping per bit. The potential method is the tool of choice for harder structures such as splay trees and union–find.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Complete the banker\'s argument for the binary counter.',
      template: 'Charge ___ per increment. Keep the invariant that every ___ bit holds one credit. Setting a bit spends $1$ and stores the other $1$ on that bit; each trailing bit that is reset is paid for by ___. Since the credit equals the number of $1$ bits, it is never ___, so $n$ increments flip at most $2n$ bits.',
      blanks: [{ answers: ['$2$'] }, { answers: ['$1$'] }, { answers: ['the credit stored on it'] }, { answers: ['negative'] }],
      wordBank: ['$2$', '$1$', '$0$', '$\\log n$', 'the credit stored on it', 'the next increment', 'negative', 'zero'],
      explanation: 'Charge $2$: one unit pays for the single $0 \\to 1$ flip, one is banked on the new $1$ bit. A later carry resets that bit for free, because its credit pays. The invariant "every $1$ bit holds one credit" means credit $=$ number of $1$ bits $\\ge 0$, so the actual total never exceeds the charged total $2n$. (Credit can certainly be zero, at the very start; the requirement is that it is never **negative**.)',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A stack starts empty. Actual costs: `push` costs $1$, and `multipop(k)` pops $\\min(k, s)$ elements at cost $\\min(k, s)$, where $s$ is the current size. Run: push $5$ times, `multipop(3)`, push $2$ times, `multipop(10)`. What is the **total actual cost**?',
      label: 'total cost $=$',
      answer: '14',
      hint: 'How many elements are on the stack when `multipop(10)` runs?',
      explanation: 'Pushes: $5 + 2 = 7$. The first `multipop(3)` pops $3$ (size $5 \\to 2$), costing $3$. Then two pushes bring the size to $4$, so `multipop(10)` pops only $4$, costing $4$. Total $7 + 3 + 4 = 14$. The banker\'s bound charges $2$ per push and $0$ per multipop: $2 \\cdot 7 = 14$. The bound is tight here because every pushed element was eventually popped and spent its credit.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Count operations to analyze, measure to decide',
      blocks: [
        {
          type: 'p',
          text: 'Counting operations (comparisons, flips, probes) gives numbers that are **exact and reproducible**: the same on every machine, every run, every compiler. That is why this course\'s programs print counts. Timings, by contrast, change with the CPU, its clock speed at that moment, what else is running, the compiler and its flags, and the state of the caches.',
        },
        {
          type: 'p',
          text: 'But counts are only as good as the cost model. Two algorithms with the same number of comparisons can differ by $10\\times$ in time if one of them misses the cache on every step. So the professional workflow is: **analyze** with counts and asymptotics to choose candidates and rule out disasters, then **measure** the candidates on realistic data, ideally with a profiler (perf, VTune, Superluminal, Tracy, Unreal Insights) before optimizing anything.',
        },
        {
          type: 'code',
          title: 'bench.cpp (timings vary by machine, so no fixed output)',
          code: `#include <algorithm>
#include <chrono>
#include <cstdio>
#include <vector>

template <class F>
double medianMs(F&& work, int runs = 21) {
    std::vector<double> ms;
    work();                                   // warm-up: caches, page faults, lazy setup
    for (int r = 0; r < runs; ++r) {
        auto t0 = std::chrono::steady_clock::now();
        work();
        auto t1 = std::chrono::steady_clock::now();
        ms.push_back(std::chrono::duration<double, std::milli>(t1 - t0).count());
    }
    std::nth_element(ms.begin(), ms.begin() + runs / 2, ms.end());
    return ms[runs / 2];                      // the median shrugs off outliers
}

int main() {
    std::vector<int> v(10'000'000, 1);
    long long sink = 0;
    double t = medianMs([&] { for (int x : v) sink += x; });
    std::printf("%.3f ms (sink = %lld)\\n", t, sink);  // use the result!
}`,
          annotations: [
            { lines: 9, text: 'The first run pays one-time costs (the OS mapping fresh pages, cold caches). Timing it would measure the wrong thing.' },
            { lines: 11, text: '`steady_clock` never jumps backwards; `system_clock` can, when the wall clock is adjusted.' },
            { lines: '16-17', text: 'Report the median of many runs: one interrupt or context switch can wreck a single sample.' },
            { lines: '22-24', text: 'If `sink` were never used, the optimizer could legally delete the whole loop and report about $0$ ms.' },
          ],
        },
        {
          type: 'list',
          items: [
            '**Dead-code elimination.** Work whose result is never used may be removed entirely. Always consume the result (print it, or use a "do not optimize" helper from a benchmarking library).',
            '**Unrealistic data.** Benchmarking with $1000$ elements that fit in L1 cache says nothing about $10^7$ elements that live in DRAM, and sorted test data can hide a branch-misprediction cost.',
            '**Debug builds.** Unoptimized builds can be $10$–$100\\times$ slower for template-heavy C++, and not uniformly so. Measure the configuration you ship.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'If algorithm A performs fewer comparisons than algorithm B on every input, then A always runs faster than B.',
      answer: false,
      explanation: 'Comparisons are only one part of the cost. A can lose because each of its steps costs more: a pointer dereference that misses the cache (around $80$ ns) instead of a sequential read (around $1$ ns), a memory allocation, an unpredictable branch. For example, binary search on a large sorted array does far fewer comparisons than a linear scan, yet for a few dozen elements the scan is usually faster: it is branch-predictable, vectorizable and streams through one or two cache lines. A count is a model; the hardware decides.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The memory hierarchy and cache misses',
      blocks: [
        {
          type: 'p',
          text: 'A modern CPU can do several arithmetic operations per nanosecond, but fetching a value from main memory takes around $80$ ns. To hide that gap, hardware keeps recently used data in a [[dsa-memory-hierarchy|memory hierarchy]] of small, fast caches. The figures below are typical for a current desktop CPU and vary between chips; the **ratios** are what matter.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"10\" y=\"18\" font-size=\"12\" class=\"t-gray\">faster, smaller</text>\n<text x=\"10\" y=\"292\" font-size=\"12\" class=\"t-gray\">slower, larger</text>\n<rect x=\"145\" y=\"28\" width=\"150\" height=\"36\" rx=\"6\" class=\"f-teal s-teal\" fill-opacity=\"0.16\" stroke-width=\"1.5\"/>\n<text x=\"220\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">Registers</text>\n<text x=\"220\" y=\"58\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">~1 KB</text>\n<text x=\"512\" y=\"44\" text-anchor=\"end\" font-size=\"13\" class=\"t-teal\">~0.3 ns</text>\n<text x=\"512\" y=\"58\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">1 cycle</text>\n<rect x=\"124\" y=\"71\" width=\"192\" height=\"36\" rx=\"6\" class=\"f-green s-green\" fill-opacity=\"0.16\" stroke-width=\"1.5\"/>\n<text x=\"220\" y=\"87\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">L1 cache</text>\n<text x=\"220\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">32–48 KB / core</text>\n<text x=\"512\" y=\"87\" text-anchor=\"end\" font-size=\"13\" class=\"t-green\">~1 ns</text>\n<text x=\"512\" y=\"101\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">~4 cycles</text>\n<rect x=\"103\" y=\"114\" width=\"234\" height=\"36\" rx=\"6\" class=\"f-blue s-blue\" fill-opacity=\"0.16\" stroke-width=\"1.5\"/>\n<text x=\"220\" y=\"130\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">L2 cache</text>\n<text x=\"220\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">0.5–2 MB / core</text>\n<text x=\"512\" y=\"130\" text-anchor=\"end\" font-size=\"13\" class=\"t-blue\">~4 ns</text>\n<text x=\"512\" y=\"144\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">~14 cycles</text>\n<rect x=\"82\" y=\"157\" width=\"276\" height=\"36\" rx=\"6\" class=\"f-purple s-purple\" fill-opacity=\"0.16\" stroke-width=\"1.5\"/>\n<text x=\"220\" y=\"173\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">L3 cache</text>\n<text x=\"220\" y=\"187\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">8–64 MB shared</text>\n<text x=\"512\" y=\"173\" text-anchor=\"end\" font-size=\"13\" class=\"t-purple\">~15 ns</text>\n<text x=\"512\" y=\"187\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">~50 cycles</text>\n<rect x=\"61\" y=\"200\" width=\"318\" height=\"36\" rx=\"6\" class=\"f-orange s-orange\" fill-opacity=\"0.16\" stroke-width=\"1.5\"/>\n<text x=\"220\" y=\"216\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">Main memory (DRAM)</text>\n<text x=\"220\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">16–64 GB</text>\n<text x=\"512\" y=\"216\" text-anchor=\"end\" font-size=\"13\" class=\"t-orange\">~80 ns</text>\n<text x=\"512\" y=\"230\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">~250 cycles</text>\n<rect x=\"40\" y=\"243\" width=\"360\" height=\"36\" rx=\"6\" class=\"f-red s-red\" fill-opacity=\"0.16\" stroke-width=\"1.5\"/>\n<text x=\"220\" y=\"259\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">SSD (NVMe)</text>\n<text x=\"220\" y=\"273\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">1–4 TB</text>\n<text x=\"512\" y=\"259\" text-anchor=\"end\" font-size=\"13\" class=\"t-red\">~50 µs</text>\n<text x=\"512\" y=\"273\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">~150 000 cycles</text>\n<text x=\"512\" y=\"18\" text-anchor=\"end\" font-size=\"12\" class=\"t-gray\">latency</text>\n</svg>",
          alt: 'A pyramid of memory levels: registers, L1, L2 and L3 caches, DRAM and SSD, with sizes growing and latencies growing from about 0.3 nanoseconds to about 50 microseconds.',
          caption: 'Each level down is roughly $3$–$10\\times$ larger and slower. A DRAM access costs about as much as a few hundred additions.',
          maxWidth: 520,
        },
        {
          type: 'definition',
          term: 'Cache line',
          text: 'Memory moves between levels in fixed blocks called [[dsa-cache-line|cache lines]], $64$ bytes on x86 and most ARM chips. Touching one byte loads its whole line. A [[dsa-cache-miss|cache miss]] happens when the line you need is not in the cache and must be fetched from a slower level.',
        },
        {
          type: 'p',
          text: 'Caches pay off because real programs have [[dsa-locality|locality]]. **Spatial locality**: after touching an address you will probably touch its neighbours, which arrived in the same line. **Temporal locality**: you will probably touch the same address again soon, while it is still cached. On top of this, the hardware **prefetcher** spots sequential or strided access patterns and fetches the next lines before you ask for them. Sequential scans are therefore close to free, while jumping around memory pays the full latency on every step.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 250\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"60\" y=\"24\" font-size=\"12\" class=\"t-gray\">int grid[4][16], row-major: each row is exactly one 64-byte cache line</text>\n<text x=\"50\" y=\"60\" text-anchor=\"end\" font-size=\"12\" class=\"t-gray\">line 0</text>\n<rect x=\"60\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"84\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"108\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"132\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"156\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"180\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"204\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"228\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"252\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"276\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"300\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"324\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"348\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"372\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"396\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"420\" y=\"40\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<text x=\"50\" y=\"102\" text-anchor=\"end\" font-size=\"12\" class=\"t-gray\">line 1</text>\n<rect x=\"60\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"84\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"108\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"132\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-purple s-purple\" fill-opacity=\"0.3\" stroke-width=\"1\"/>\n<rect x=\"156\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"180\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"204\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"228\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"252\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"276\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"300\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"324\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"348\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"372\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"396\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"420\" y=\"82\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<text x=\"50\" y=\"144\" text-anchor=\"end\" font-size=\"12\" class=\"t-gray\">line 2</text>\n<rect x=\"60\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"84\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"108\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"132\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"156\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"180\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"204\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"228\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"252\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"276\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"300\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"324\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"348\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"372\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"396\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"420\" y=\"124\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<text x=\"50\" y=\"186\" text-anchor=\"end\" font-size=\"12\" class=\"t-gray\">line 3</text>\n<rect x=\"60\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"84\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"108\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"132\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.18\" stroke-width=\"1\"/>\n<rect x=\"156\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"180\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"204\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"228\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"252\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"276\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"300\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"324\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"348\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"372\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"396\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<rect x=\"420\" y=\"166\" width=\"22\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.45\" stroke-width=\"1\"/>\n<path d=\"M64,97.0 L430,97.0\" class=\"s-blue\" stroke-width=\"2.5\" fill=\"none\"/>\n<path d=\"M438,97.0 L428,92.0 L428,102.0 Z\" class=\"f-blue\"/>\n<path d=\"M143.0,44 L143.0,184\" class=\"s-orange\" stroke-width=\"2.5\" fill=\"none\"/>\n<path d=\"M143.0,192 L138.0,182 L148.0,182 Z\" class=\"f-orange\"/>\n<text x=\"60\" y=\"222\" font-size=\"12\" class=\"t-blue\">Along a row: 1 miss loads the line, then 15 hits.</text>\n<text x=\"60\" y=\"240\" font-size=\"12\" class=\"t-orange\">Down a column: every step lands on a different line, so every step can miss.</text>\n</svg>",
          alt: 'A 4 by 16 grid of ints where each row is one 64-byte cache line. A blue arrow runs along row 1; an orange arrow runs down column 3 through all four lines.',
          caption: 'A C++ 2D array is stored **row-major**: row $r$, column $c$ lives at offset $r \\cdot \\text{cols} + c$. Walking along a row uses every byte of each line it loads.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: 'You can count misses deterministically with a small cache model. This one is an LRU cache (on a miss, evict the least recently used line) with $512$ lines of $64$ bytes ($32$ KB, a typical L1 data cache), fed the addresses of two traversals of a $1024 \\times 1024$ grid of `int`s.',
        },
        {
          type: 'code',
          title: 'cache_sim.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <list>
#include <unordered_map>

// A tiny fully associative LRU cache model: 64-byte lines, \`lines\` slots.
struct Cache {
    explicit Cache(std::size_t slots) : lines(slots) {}
    std::size_t lines;
    std::list<long> lru;                                        // most recent at front
    std::unordered_map<long, std::list<long>::iterator> where;  // line -> position in lru
    long accesses = 0, misses = 0;

    void access(long address) {
        ++accesses;
        long line = address / 64;
        auto it = where.find(line);
        if (it != where.end()) {                // hit: move to front
            lru.splice(lru.begin(), lru, it->second);
            return;
        }
        ++misses;                               // miss: load the line, evict the oldest
        if (lru.size() == lines) {
            where.erase(lru.back());
            lru.pop_back();
        }
        lru.push_front(line);
        where[line] = lru.begin();
    }
};

int main() {
    const long N = 1024;                 // a 1024 x 1024 grid of 4-byte ints = 4 MB
    auto addr = [&](long r, long c) { return (r * N + c) * 4; };  // row-major layout

    Cache rowWise(512), colWise(512);    // 512 lines * 64 B = a 32 KB cache
    for (long r = 0; r < N; ++r)
        for (long c = 0; c < N; ++c) rowWise.access(addr(r, c));   // walk along rows
    for (long c = 0; c < N; ++c)
        for (long r = 0; r < N; ++r) colWise.access(addr(r, c));   // walk down columns

    std::printf("row by row:       %ld accesses, %7ld misses (%.2f%%)\\n",
                rowWise.accesses, rowWise.misses, 100.0 * rowWise.misses / rowWise.accesses);
    std::printf("column by column: %ld accesses, %7ld misses (%.2f%%)\\n",
                colWise.accesses, colWise.misses, 100.0 * colWise.misses / colWise.accesses);
}`,
          output: `row by row:       1048576 accesses,   65536 misses (6.25%)
column by column: 1048576 accesses, 1048576 misses (100.00%)`,
          annotations: [
            { lines: '9-10', text: 'A linked list in recency order plus a hash map from line to list node: the classic $O(1)$ LRU cache, itself a favorite interview question.' },
            { lines: 15, text: 'Which $64$-byte line an address belongs to: integer division by the line size.' },
            { lines: 33, text: 'Row-major address of `grid[r][c]`: rows are laid out one after another, $4$ bytes per `int`.' },
            { lines: '38-39', text: 'Down a column, consecutive accesses are $4096$ bytes apart. A column touches $1024$ different lines, more than the $512$ the cache holds, so by the time you come back for the next column the lines are gone.' },
          ],
        },
        {
          type: 'p',
          text: 'Row by row, each line is loaded once and then serves $16$ consecutive `int`s: a $\\frac{1}{16} = 6.25\\%$ miss rate. Column by column, every single access misses. Both loops do exactly the same arithmetic, so their big-O, operation count and answer are identical. On real hardware the column version of a loop like this is typically several times slower, and the gap grows with the matrix size.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'An array of $10\\,000$ `int`s ($4$ bytes each) starts at an address that is a multiple of $64$, and none of it is cached. A loop reads every element once, in order. With $64$-byte cache lines and no prefetching, how many cache misses occur?',
      label: 'misses $=$',
      answer: '625',
      hint: 'How many bytes does the array occupy, and how many lines is that?',
      explanation: 'The array occupies $10\\,000 \\times 4 = 40\\,000$ bytes. Because it starts on a line boundary, it spans exactly $40\\,000 / 64 = 625$ lines, and a sequential read misses once per line: $625$ misses, then $15$ hits each. (In practice the prefetcher hides most of those $625$ misses too, which is why a linear scan runs near memory bandwidth.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'This function should sum an `N`$\\times$`N` row-major grid in the cache-friendly order. It returns the right total but runs several times slower than it should on large grids. Tap the line responsible.',
      lines: [
        '`long long sumGrid(const std::vector<int>& g, int N) {`',
        '`    long long s = 0;`',
        '`    for (int r = 0; r < N; ++r)`',
        '`        for (int c = 0; c < N; ++c)`',
        '`            s += g[c * N + r];`',
        '`    return s;`',
        '`}`',
      ],
      errorLines: [5],
      explanation: 'Row-major storage puts element $(r, c)$ at index `r * N + c`. Line 5 reads `g[c * N + r]`, element $(c, r)$: as the inner loop advances `c`, the index jumps by `N` each time, so it walks **down a column**, touching a new cache line on every access. The sum is still correct (every element is visited once), which is what makes this bug easy to miss. Fix: `s += g[r * N + c];` so the inner loop moves through consecutive addresses.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'The constants big-O hides, and why games care',
      blocks: [
        {
          type: 'p',
          text: 'At $60$ frames per second a game has $16.7$ ms per frame for **everything**: simulation, AI, physics, animation, audio and submitting rendering work. Asymptotics tell you which algorithms will blow up as $n$ grows. But game data is often small and bounded (eight status effects, forty enemies, a few hundred projectiles), and at small $n$ the constants dominate.',
        },
        {
          type: 'p',
          text: 'Compare looking up a key by scanning an array ($\\approx 1$ ns per element, prefetched and branch-predictable) against a balanced search tree ($\\log_2 n$ levels, where each level is a pointer to a node somewhere else in memory, often a cache miss). Big-O says the tree wins. Drag the cost per tree level and see where it actually starts winning:',
        },
        {
          type: 'graph',
          x: [0, 400],
          y: [0, 400],
          xStep: 50,
          yStep: 50,
          functions: [
            { expr: 'x', label: 'linear scan: $1 \\cdot n$ ns', color: 'blue', domain: [1, 400] },
            { expr: 'c*log_2(x)', label: 'tree lookup: $c \\log_2 n$ ns', color: 'red', domain: [1, 400] },
          ],
          points: [
            { x: 'm', y: 'm', color: 'blue' },
            { x: 'm', y: 'c*log_2(m)', color: 'red' },
          ],
          vlines: [{ x: 'm', label: 'n', color: 'gray' }],
          sliders: [
            { name: 'c', min: 2, max: 60, step: 1, value: 30, label: 'ns per tree level, $c$' },
            { name: 'm', min: 2, max: 400, step: 1, value: 64, label: 'number of elements, $n$' },
          ],
          readouts: [
            { label: 'scan (ns)', expr: 'm', digits: 0 },
            { label: 'tree (ns)', expr: 'c*log_2(m)', digits: 0 },
          ],
          caption: 'With $c = 30$ ns per level (a likely cache miss) the scan stays cheaper until $n \\approx 237$. Even with $c = 10$ the crossover is near $n \\approx 59$. The $O(\\log n)$ structure only wins above the crossover, and it always wins eventually.',
        },
        {
          type: 'list',
          items: [
            '**Memory access pattern.** A cache miss costs about as much as a few hundred arithmetic operations. Contiguous arrays win over pointer-based structures until $n$ is large.',
            '**Allocation.** A heap allocation typically costs tens to hundreds of nanoseconds and scatters data. Engines avoid per-frame allocations with pools and preallocated arrays.',
            '**Branches.** A mispredicted branch costs around $15$–$20$ cycles. Predictable loops beat clever data-dependent branching.',
            '**Hidden work.** Hashing a string key, copying a large struct, or a virtual call per element are constants big-O never shows.',
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Data-oriented design',
          text: 'Mike Acton\'s CppCon 2014 talk "Data-Oriented Design and C++" made this mindset famous: the purpose of a program is to transform data, so design around how that data is laid out and accessed, and remember that "where there is one, there are many". DICE\'s Frostbite team gave influential talks in the same spirit, about laying out game data so the CPU streams through it. The next lesson applies the idea to arrays of structs versus structs of arrays.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Each unit in your game has at most $8$ active status effects, identified by small integer ids. Every frame, for thousands of units, the code asks "is effect $X$ active on this unit?". Which storage is most likely fastest in practice?',
      options: [
        { text: 'A small fixed-capacity array (or `std::vector`) per unit, scanned linearly', correct: true, why: 'At most $8$ ids fit in one or two cache lines; the scan is branch-predictable and needs no hashing or pointer chasing. $O(n)$ with $n \\le 8$ is effectively constant and tiny.' },
        { text: 'A `std::map<int, Effect>` per unit, because $O(\\log n)$ beats $O(n)$', why: 'Asymptotically yes, but each tree node is a separate heap allocation, so a lookup chases up to $3$ pointers into scattered memory. At $n \\le 8$ the constants dominate.' },
        { text: 'A `std::unordered_map<int, Effect>` per unit, because hashing is $O(1)$', why: 'Average $O(1)$, but with a large constant: computing the bucket, an indirection into a separately allocated node, and a sizeable footprint per map. For $8$ elements a scan is cheaper.' },
        { text: 'A `std::list<Effect>` per unit, because removal is $O(1)$', why: 'A list has the same $O(n)$ search as the array but with a cache miss per node. Removal is rare compared with lookup here, so it optimizes the wrong operation.' },
      ],
      explanation: 'For tiny, bounded $n$, big-O stops being the deciding factor and memory behaviour takes over. A contiguous array answers the question with one or two cache-line loads and a predictable loop. The tree and hash table win only once $n$ is large enough to amortize their per-lookup overhead. Measure if in doubt, but this is the default answer any engine programmer would give.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Order these places a CPU can find data from **fastest** (lowest latency) to **slowest**.',
      lines: ['a register', 'the L1 cache', 'the L2 cache', 'the L3 cache', 'main memory (DRAM)', 'an NVMe SSD'],
      explanation: 'Registers (within a cycle) < L1 ($\\approx 1$ ns) < L2 ($\\approx 4$ ns) < L3 ($\\approx 15$ ns) < DRAM ($\\approx 80$ ns) < SSD (tens of microseconds). Each step down is larger and slower, which is why keeping hot data small and contiguous, so it stays in the upper levels, is the single most effective performance habit.',
    },
  ],
  takeaways: [
    'A complexity claim needs a cost model and a kind: worst case (every call), average case (over an assumed input distribution), expected (over the algorithm\'s coin flips, for every input) or amortized (total over any sequence).',
    'Linearity of expectation makes average cases tractable: insertion sort averages $\\frac{n(n-1)}{4} + n - H_n$ comparisons on a random permutation, but nearly sorted real data makes it almost linear.',
    'Aggregate method: sum the whole sequence (a binary counter flips $< 2n$ bits in $n$ increments). Banker\'s method: overcharge cheap operations and keep a credit invariant that never goes negative.',
    'Count operations for reproducible analysis; measure with a profiler to decide. Warm up, take medians, consume results, and test realistic sizes in optimized builds.',
    'Memory moves in $64$-byte cache lines through a hierarchy from $\\approx 1$ ns (L1) to $\\approx 80$ ns (DRAM). Sequential access is nearly free; scattered access pays a miss per step.',
    'Big-O hides constants that dominate at the small, bounded $n$ typical of game data: contiguous arrays often beat asymptotically better pointer-based structures.',
  ],
  reading: [
    {
      title: 'Jeff Erickson — Algorithms',
      url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      source: 'book',
      note: 'Free textbook; its notes on amortized analysis develop the aggregate, banker\'s and potential methods with many examples.',
    },
    {
      title: 'MIT OCW 6.006 — Introduction to Algorithms (Spring 2020)',
      url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
      source: 'other',
      note: 'Lectures and recitations on the model of computation and on dynamic arrays with amortized analysis.',
    },
    {
      title: 'Game Programming Patterns — Data Locality',
      url: 'https://gameprogrammingpatterns.com/data-locality.html',
      source: 'book',
      note: 'Robert Nystrom\'s very readable chapter on caches, pointer chasing and why contiguous data makes games fast.',
    },
    {
      title: 'Wikipedia — Amortized analysis',
      url: 'https://en.wikipedia.org/wiki/Amortized_analysis',
      source: 'wikipedia',
      note: 'Compact statements of the aggregate, accounting and potential methods with the dynamic array example.',
    },
  ],
};
