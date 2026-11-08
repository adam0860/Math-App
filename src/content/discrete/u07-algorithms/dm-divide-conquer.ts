import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-divide-conquer',
  title: 'Divide and Conquer and the Master Theorem',
  summary: 'Split a problem in pieces, solve them recursively, combine: write the running time as a recurrence and solve it with recursion trees and the master theorem.',
  minutes: 20,
  objectives: [
    'Describe the divide-and-conquer pattern and write its running time as a recurrence $T(n) = aT(n/b) + f(n)$',
    'Solve $T(n) = T(n/2) + 1$ and $T(n) = 2T(n/2) + n$ by unrolling and with a recursion tree',
    'Implement merge sort and explain why it is $\\Theta(n \\log n)$',
    'State and apply the three cases of the master theorem, and explain each case with a geometric series',
    'Analyze fast exponentiation, Karatsuba multiplication and quicksort, including why quicksort is fast on average',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Divide, conquer, combine',
      blocks: [
        {
          type: 'p',
          text: 'Binary search already used a powerful trick: instead of attacking a problem of size $n$ directly, solve a **smaller copy** of the same problem. [[dm-divide-and-conquer|Divide and conquer]] makes that a general recipe.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Divide', text: 'Split the input into $a$ subproblems, each of size about $n/b$.' },
            { title: 'Conquer', text: 'Solve each subproblem recursively. Tiny inputs (size $1$, say) are solved directly — the base case.' },
            { title: 'Combine', text: 'Assemble the sub-answers into the answer for the whole input. Dividing plus combining costs $f(n)$.' },
          ],
        },
        {
          type: 'p',
          text: 'The running time then satisfies a [[dm-recurrence-relation|recurrence relation]] — an equation that defines $T(n)$ in terms of $T$ at smaller inputs:',
        },
        {
          type: 'math',
          tex: 'T(n) = a\\,T\\!\\left(\\frac{n}{b}\\right) + f(n)',
          caption: '$a$ = number of subproblems, $n/b$ = size of each, $f(n)$ = cost of dividing and combining.',
        },
        {
          type: 'p',
          text: 'Recursive binary search fits with $a = 1$, $b = 2$, $f(n) = 1$: one comparison with the middle, then one half-size search. To keep the arithmetic exact we take $n$ to be a power of $2$; the result holds for all $n$ up to rounding.',
        },
        {
          type: 'derivation',
          title: 'Solve $T(n) = T(n/2) + 1$ with $T(1) = 1$ by unrolling',
          steps: [
            { tex: 'T(n) = T(n/2) + 1', why: 'The recurrence: one probe, then search half.' },
            { tex: '= \\big(T(n/4) + 1\\big) + 1 = T(n/4) + 2', why: 'Apply the recurrence again, now to $T(n/2)$.' },
            { tex: '= T(n/8) + 3', why: 'Once more. The pattern is clear: after $j$ steps, $T(n) = T(n/2^j) + j$.' },
            { tex: '= T(n/2^j) + j \\quad \\text{with } j = \\log_2 n', why: 'Unroll until the argument reaches the base case: $n/2^j = 1$ exactly when $j = \\log_2 n$.' },
            { tex: '= T(1) + \\log_2 n = \\log_2 n + 1', why: 'Use the initial condition $T(1) = 1$ (one last probe).' },
          ],
          result: '$T(n) = \\log_2 n + 1 = \\Theta(\\log n)$ — exactly the $\\lfloor \\log_2 n \\rfloor + 1$ worst case from the previous lesson.',
        },
        {
          type: 'code',
          title: 'recursive_binary_search.cpp',
          code: `// Search sorted a[lo..hi] for target. T(n) = T(n/2) + 1.
int search(const std::vector<int>& a, int target, int lo, int hi) {
    if (lo > hi) return -1;                    // empty range: not found
    int mid = lo + (hi - lo) / 2;
    if (a[mid] == target) return mid;          // the "+1": one probe
    if (a[mid] < target)
        return search(a, target, mid + 1, hi); // one subproblem of half size
    return search(a, target, lo, mid - 1);
}`,
          annotations: [
            { lines: '6-8', text: 'Only **one** recursive call runs per level, so $a = 1$. (Two calls would make $a = 2$ and a very different answer.)' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'numeric',
      prompt: 'Using $T(n) = T(n/2) + 1$ with $T(1) = 1$, compute $T(1024)$.',
      label: '$T(1024) =$',
      answer: '11',
      hint: '$1024 = 2^{10}$. How many halvings to reach $1$?',
      explanation: 'Since $1024 = 2^{10}$, unrolling ten times reaches $T(1)$: $T(1024) = T(1) + 10 = 11$. That is $\\log_2 1024 + 1 = 11$ probes to search $1024$ sorted items.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Merge sort and its recursion tree',
      blocks: [
        {
          type: 'p',
          text: '[[dm-merge-sort|Merge sort]] is the textbook divide-and-conquer sort. Split the array into two halves, sort each half recursively, then **merge** the two sorted halves by repeatedly taking the smaller of the two front elements. Merging $n$ elements takes $\\Theta(n)$ time (at most $n - 1$ comparisons), because each step outputs one element.',
        },
        {
          type: 'math',
          tex: 'T(n) = 2\\,T\\!\\left(\\frac{n}{2}\\right) + cn, \\qquad T(1) = c',
          caption: 'Two half-size sorts plus a linear-time merge: $a = 2$, $b = 2$, $f(n) = cn$.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 500 290\" xmlns=\"http://www.w3.org/2000/svg\">\n<line x1=\"165.0\" y1=\"40\" x2=\"82.5\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<line x1=\"165.0\" y1=\"40\" x2=\"247.5\" y2=\"76\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<line x1=\"82.5\" y1=\"100\" x2=\"41.2\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<line x1=\"82.5\" y1=\"100\" x2=\"123.8\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<line x1=\"247.5\" y1=\"100\" x2=\"206.2\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<line x1=\"247.5\" y1=\"100\" x2=\"288.8\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"1.2\" class=\"s-gray\"/>\n<rect x=\"137.0\" y=\"16\" width=\"56\" height=\"24\" rx=\"5\" class=\"s-blue f-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"165.0\" y=\"33\" font-size=\"13\" text-anchor=\"middle\">n</text>\n<rect x=\"54.5\" y=\"76\" width=\"56\" height=\"24\" rx=\"5\" class=\"s-blue f-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"82.5\" y=\"93\" font-size=\"13\" text-anchor=\"middle\">n/2</text>\n<rect x=\"219.5\" y=\"76\" width=\"56\" height=\"24\" rx=\"5\" class=\"s-blue f-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"247.5\" y=\"93\" font-size=\"13\" text-anchor=\"middle\">n/2</text>\n<rect x=\"13.2\" y=\"136\" width=\"56\" height=\"24\" rx=\"5\" class=\"s-blue f-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"41.2\" y=\"153\" font-size=\"13\" text-anchor=\"middle\">n/4</text>\n<rect x=\"95.8\" y=\"136\" width=\"56\" height=\"24\" rx=\"5\" class=\"s-blue f-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"123.8\" y=\"153\" font-size=\"13\" text-anchor=\"middle\">n/4</text>\n<rect x=\"178.2\" y=\"136\" width=\"56\" height=\"24\" rx=\"5\" class=\"s-blue f-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"206.2\" y=\"153\" font-size=\"13\" text-anchor=\"middle\">n/4</text>\n<rect x=\"260.8\" y=\"136\" width=\"56\" height=\"24\" rx=\"5\" class=\"s-blue f-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"288.8\" y=\"153\" font-size=\"13\" text-anchor=\"middle\">n/4</text>\n<rect x=\"5.6\" y=\"216\" width=\"30\" height=\"24\" rx=\"5\" class=\"s-green f-green\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"20.6\" y=\"233\" font-size=\"13\" text-anchor=\"middle\">1</text>\n<rect x=\"46.9\" y=\"216\" width=\"30\" height=\"24\" rx=\"5\" class=\"s-green f-green\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"61.9\" y=\"233\" font-size=\"13\" text-anchor=\"middle\">1</text>\n<rect x=\"88.1\" y=\"216\" width=\"30\" height=\"24\" rx=\"5\" class=\"s-green f-green\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"103.1\" y=\"233\" font-size=\"13\" text-anchor=\"middle\">1</text>\n<rect x=\"129.4\" y=\"216\" width=\"30\" height=\"24\" rx=\"5\" class=\"s-green f-green\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"144.4\" y=\"233\" font-size=\"13\" text-anchor=\"middle\">1</text>\n<rect x=\"170.6\" y=\"216\" width=\"30\" height=\"24\" rx=\"5\" class=\"s-green f-green\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"185.6\" y=\"233\" font-size=\"13\" text-anchor=\"middle\">1</text>\n<rect x=\"211.9\" y=\"216\" width=\"30\" height=\"24\" rx=\"5\" class=\"s-green f-green\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"226.9\" y=\"233\" font-size=\"13\" text-anchor=\"middle\">1</text>\n<rect x=\"253.1\" y=\"216\" width=\"30\" height=\"24\" rx=\"5\" class=\"s-green f-green\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"268.1\" y=\"233\" font-size=\"13\" text-anchor=\"middle\">1</text>\n<rect x=\"294.4\" y=\"216\" width=\"30\" height=\"24\" rx=\"5\" class=\"s-green f-green\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"309.4\" y=\"233\" font-size=\"13\" text-anchor=\"middle\">1</text>\n<text x=\"41.2\" y=\"192\" font-size=\"16\" text-anchor=\"middle\" class=\"t-gray\">⋮</text>\n<text x=\"123.8\" y=\"192\" font-size=\"16\" text-anchor=\"middle\" class=\"t-gray\">⋮</text>\n<text x=\"206.2\" y=\"192\" font-size=\"16\" text-anchor=\"middle\" class=\"t-gray\">⋮</text>\n<text x=\"288.8\" y=\"192\" font-size=\"16\" text-anchor=\"middle\" class=\"t-gray\">⋮</text>\n<text x=\"352\" y=\"33\" font-size=\"13\" class=\"t-orange\">cn</text>\n<text x=\"352\" y=\"93\" font-size=\"13\" class=\"t-orange\">2 · c(n/2) = cn</text>\n<text x=\"352\" y=\"153\" font-size=\"13\" class=\"t-orange\">4 · c(n/4) = cn</text>\n<text x=\"352\" y=\"233\" font-size=\"13\" class=\"t-orange\">n · c = cn</text>\n<text x=\"352\" y=\"192\" font-size=\"16\" class=\"t-gray\">⋮</text>\n<line x1=\"340\" y1=\"16\" x2=\"340\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"1\" class=\"s-gray\" stroke-dasharray=\"3 3\"/>\n<text x=\"352\" y=\"12\" font-size=\"11\" class=\"t-gray\">cost of each level</text>\n<text x=\"250\" y=\"272\" font-size=\"13\" text-anchor=\"middle\">log₂ n + 1 levels, each costing cn  ⇒  total Θ(n log n)</text>\n<text x=\"250\" y=\"288\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">(subproblem sizes in boxes; leaves are single elements)</text>\n</svg>",
          alt: 'Recursion tree for merge sort. The root has size n, two children of size n/2, four grandchildren of size n/4, and so on down to n leaves of size 1. Every level costs cn in total, and there are log2 n + 1 levels.',
          caption: 'A [[dm-recursion-tree|recursion tree]] draws every recursive call as a node. Each level splits the same $n$ elements into more, smaller pieces, so each level does $cn$ total merging work. Depth $j$ has $2^j$ nodes of size $n/2^j$, for $j = 0, 1, \\dots, \\log_2 n$.',
          maxWidth: 520,
        },
        {
          type: 'code',
          title: 'merge_sort.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <vector>

long comparisons = 0;

// Sorts a[lo, hi) using buf as scratch space.
void mergeSort(std::vector<int>& a, std::vector<int>& buf, int lo, int hi) {
    if (hi - lo <= 1) return;                 // 0 or 1 element: already sorted
    int mid = lo + (hi - lo) / 2;
    mergeSort(a, buf, lo, mid);               // T(n/2)
    mergeSort(a, buf, mid, hi);               // T(n/2)

    int i = lo, j = mid, k = lo;              // merge: Theta(n)
    while (i < mid && j < hi) {
        ++comparisons;
        buf[k++] = (a[j] < a[i]) ? a[j++] : a[i++];
    }
    while (i < mid) buf[k++] = a[i++];
    while (j < hi) buf[k++] = a[j++];
    for (int t = lo; t < hi; ++t) a[t] = buf[t];
}

int main() {
    std::vector<int> a = {38, 27, 43, 3, 9, 82, 10, 5};
    std::vector<int> buf(a.size());
    mergeSort(a, buf, 0, static_cast<int>(a.size()));
    for (std::size_t i = 0; i < a.size(); ++i) std::printf(i ? ", %d" : "%d", a[i]);
    std::printf("  (%ld comparisons)\\n", comparisons);

    for (int n : {1024, 1000000}) {
        std::vector<int> v(n), b(n);
        for (int i = 0; i < n; ++i) v[i] = static_cast<int>((i * 7919LL) % n);
        comparisons = 0;
        mergeSort(v, b, 0, n);
        std::printf("n = %7d: %8ld comparisons, n log2 n = %8.0f\\n",
                    n, comparisons, n * std::log2(n));
    }
}`,
          output: `3, 5, 9, 10, 27, 38, 43, 82  (17 comparisons)
n =    1024:     8929 comparisons, n log2 n =    10240
n = 1000000: 16839444 comparisons, n log2 n = 19931569`,
          annotations: [
            { lines: 9, text: 'Base case: a range of $0$ or $1$ elements is sorted.' },
            { lines: '11-12', text: 'The two recursive calls: $2T(n/2)$.' },
            { lines: '14-21', text: 'The merge: each loop step writes one element to `buf`, so it is $\\Theta(n)$. The buffer is why merge sort needs $\\Theta(n)$ extra space.' },
            { lines: 17, text: 'Taking from the right half only when strictly smaller keeps equal elements in their original order: merge sort is **stable**.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Merge sort in practice',
          text: '`std::stable_sort` is typically a merge sort, used when equal keys must keep their order (sort a leaderboard by score but keep earlier entries first among ties). Merging also works on data that does not fit in memory — streaming sorted chunks from disk — which is why it is the backbone of external sorting.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'fill',
      prompt: 'Complete the recursion-tree analysis of $T(n) = 2T(n/2) + cn$ (with $n$ a power of $2$).',
      template: 'At depth $j$ there are ___ subproblems, each of size ___ , so the merging at that depth costs ___ in total. The depths run from $0$ to ___ , so the total is $cn(\\log_2 n + 1) = \\Theta(n \\log n)$.',
      blanks: [{ answers: ['$2^j$'] }, { answers: ['$n/2^j$'] }, { answers: ['$cn$'] }, { answers: ['$\\log_2 n$'] }],
      wordBank: ['$2^j$', '$n/2^j$', '$cn$', '$\\log_2 n$', '$j$', '$n/j$', '$cn^2$', '$n$'],
      explanation: 'Each level doubles the number of subproblems and halves their size: depth $j$ has $2^j$ pieces of size $n/2^j$. Merging a piece of size $m$ costs $cm$, so the level costs $2^j \\cdot c\\frac{n}{2^j} = cn$. Sizes reach $1$ at depth $\\log_2 n$, giving $\\log_2 n + 1$ levels of cost $cn$ each.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Solving the merge sort recurrence exactly',
      blocks: [
        {
          type: 'p',
          text: 'To get an exact formula, count something precise: the number of element **writes** during merges. Merging $n$ elements writes exactly $n$ of them, and a single element needs no merge. So $T(n) = 2T(n/2) + n$ with $T(1) = 0$.',
        },
        {
          type: 'derivation',
          title: 'Unroll $T(n) = 2T(n/2) + n$, $T(1) = 0$, for $n = 2^k$',
          steps: [
            { tex: 'T(n) = 2T(n/2) + n', why: 'The recurrence.' },
            { tex: '= 2\\big(2T(n/4) + n/2\\big) + n = 4T(n/4) + 2n', why: 'Substitute $T(n/2) = 2T(n/4) + n/2$. The two merges at depth $1$ together write $2 \\cdot \\frac{n}{2} = n$ elements.' },
            { tex: '= 8T(n/8) + 3n', why: 'One more substitution adds one more $n$: another full level of the tree.' },
            { tex: '= 2^j\\,T(n/2^j) + jn', why: 'The pattern after $j$ substitutions (provable by induction on $j$).' },
            { tex: '= n\\,T(1) + n\\log_2 n \\quad (j = k = \\log_2 n)', why: 'Stop at the base case: $n/2^k = 1$, and $2^k = n$.' },
            { tex: '= n \\log_2 n', why: 'Use $T(1) = 0$.' },
          ],
          result: 'Merge sort writes exactly $n\\log_2 n$ elements when $n$ is a power of $2$: $\\Theta(n \\log n)$ in the best, average **and** worst case.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you should check a guessed formula',
          text: 'Unrolling finds a pattern, and patterns can lie. Two quick checks: plug in small values ($T(2) = 2T(1) + 2 = 2 = 2\\log_2 2$ ✓, $T(4) = 2 \\cdot 2 + 4 = 8 = 4 \\log_2 4$ ✓), and then prove it. By induction on $k$: if $T(2^{k-1}) = (k-1)2^{k-1}$, then $T(2^k) = 2(k-1)2^{k-1} + 2^k = (k-1)2^k + 2^k = k\\,2^k$ ✓.',
        },
        {
          type: 'table',
          headers: ['$n$', 'insertion sort, average $\\approx n^2/4$', 'merge sort $\\approx n \\log_2 n$', 'ratio'],
          rows: [
            ['$16$', '$64$', '$64$', '$1$'],
            ['$1\\,000$', '$250\\,000$', '$\\approx 10\\,000$', '$\\approx 25$'],
            ['$10^6$', '$2.5 \\times 10^{11}$', '$\\approx 2 \\times 10^7$', '$\\approx 12\\,500$'],
          ],
          caption: 'At $n = 16$ they tie (and insertion sort\'s lower overhead wins in practice). At a million items, merge sort fits in about a frame; insertion sort takes minutes.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'What if $n$ is not a power of 2?',
          text: 'Then the halves have sizes $\\lfloor n/2 \\rfloor$ and $\\lceil n/2 \\rceil$. The bound $\\Theta(n \\log n)$ still holds: $T$ is increasing, and $n$ lies between two powers of $2$ that differ by a factor of $2$, which only changes constants. This is why analyses routinely assume $n = b^k$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'order',
      prompt: 'Arrange the lines of the unrolling of $T(n) = 2T(n/2) + n$, $T(1) = 0$ (with $n = 2^k$) in the right order.',
      lines: [
        '$T(n) = 2T(n/2) + n$',
        '$= 4T(n/4) + 2n$',
        '$= 8T(n/8) + 3n$',
        '$= 2^k T(n/2^k) + kn$',
        '$= n\\,T(1) + n\\log_2 n = n \\log_2 n$',
      ],
      distractors: ['$= 4T(n/4) + n$'],
      explanation: 'Each substitution doubles the coefficient of $T$, halves its argument, and adds one more full level of cost $n$. After $k = \\log_2 n$ substitutions the argument is $1$ and $2^k = n$. The distractor forgets that the two half-size merges together contribute another $n$: $2 \\cdot \\frac{n}{2} = n$, so the total after two levels is $2n$, not $n$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'With $T(n) = 2T(n/2) + n$ and $T(1) = 0$, compute $T(16)$.',
      label: '$T(16) =$',
      answer: '64',
      hint: 'Either use $T(n) = n \\log_2 n$, or build up: $T(2)$, $T(4)$, $T(8)$, $T(16)$.',
      explanation: 'Building up: $T(2) = 2 \\cdot 0 + 2 = 2$, $T(4) = 2 \\cdot 2 + 4 = 8$, $T(8) = 2 \\cdot 8 + 8 = 24$, $T(16) = 2 \\cdot 24 + 16 = 64$. This matches the closed form $16 \\log_2 16 = 16 \\cdot 4 = 64$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The master theorem',
      blocks: [
        {
          type: 'p',
          text: 'Unrolling every recurrence by hand gets old. For the common shape where the combine cost is a power of $n$, one theorem settles the growth in a single comparison.',
        },
        {
          type: 'theorem',
          name: 'Master theorem',
          tex: 'T(n) = a\\,T(n/b) + \\Theta(n^d) \\implies T(n) = \\begin{cases} \\Theta(n^d) & \\text{if } a < b^d \\\\ \\Theta(n^d \\log n) & \\text{if } a = b^d \\\\ \\Theta(n^{\\log_b a}) & \\text{if } a > b^d \\end{cases}',
          text: 'Here $a \\ge 1$ and $b > 1$ are constants, $d \\ge 0$, and $n/b$ may be rounded up or down. The [[dm-master-theorem]] compares how fast subproblems **multiply** ($a$) with how fast the per-subproblem work **shrinks** ($b^d$).',
        },
        {
          type: 'derivation',
          title: 'Why: add up the recursion tree level by level',
          steps: [
            { tex: '\\text{depth } j: \\; a^j \\text{ subproblems of size } n/b^j', why: 'Each subproblem spawns $a$ children, each $b$ times smaller.' },
            { tex: '\\text{cost at depth } j = a^j \\cdot c\\left(\\frac{n}{b^j}\\right)^{d} = cn^d \\left(\\frac{a}{b^d}\\right)^{j}', why: 'Each subproblem of size $m$ costs $cm^d$. Pull $n^d$ out: $(n/b^j)^d = n^d / (b^d)^j$.' },
            { tex: 'T(n) \\approx cn^d \\sum_{j=0}^{\\log_b n} r^j, \\quad r = \\frac{a}{b^d}', why: 'Sum over all $\\log_b n + 1$ levels: a [[geometric-series]] with ratio $r$.' },
            { tex: 'r < 1: \\; \\text{sum} \\le \\tfrac{1}{1-r} \\implies \\Theta(n^d)', why: 'A decreasing geometric series is at most a constant times its first term: the **root** dominates.' },
            { tex: 'r = 1: \\; \\text{sum} = \\log_b n + 1 \\implies \\Theta(n^d \\log n)', why: 'Every level costs the same $cn^d$: multiply by the number of levels.' },
            { tex: 'r > 1: \\; \\Theta\\big(n^d\\, r^{\\log_b n}\\big) = \\Theta\\big(a^{\\log_b n}\\big) = \\Theta\\big(n^{\\log_b a}\\big)', why: 'An increasing geometric series is a constant times its last term: the **leaves** dominate. $n^d r^{\\log_b n} = n^d \\frac{a^{\\log_b n}}{(b^{\\log_b n})^d} = a^{\\log_b n}$, and $a^{\\log_b n} = n^{\\log_b a}$ because both have $\\log_b$ equal to $\\log_b n \\cdot \\log_b a$.' },
          ],
          result: 'Three cases, one picture: the level costs form a geometric series, and whichever end is heavier wins.',
        },
        {
          type: 'table',
          headers: ['Recurrence', '$a, b, d$', 'Compare $a$ with $b^d$', 'Result'],
          rows: [
            ['Binary search: $T(n/2) + 1$', '$1, 2, 0$', '$1 = 2^0$', '$\\Theta(\\log n)$'],
            ['Merge sort: $2T(n/2) + n$', '$2, 2, 1$', '$2 = 2^1$', '$\\Theta(n \\log n)$'],
            ['$2T(n/2) + n^2$', '$2, 2, 2$', '$2 < 4$', '$\\Theta(n^2)$'],
            ['$4T(n/2) + n$', '$4, 2, 1$', '$4 > 2$', '$\\Theta(n^{\\log_2 4}) = \\Theta(n^2)$'],
            ['Karatsuba: $3T(n/2) + n$', '$3, 2, 1$', '$3 > 2$', '$\\Theta(n^{\\log_2 3}) \\approx \\Theta(n^{1.585})$'],
            ['Strassen: $7T(n/2) + n^2$', '$7, 2, 2$', '$7 > 4$', '$\\Theta(n^{\\log_2 7}) \\approx \\Theta(n^{2.807})$'],
          ],
          caption: 'Root-heavy ($a < b^d$), balanced ($a = b^d$), leaf-heavy ($a > b^d$).',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 400],
          xStep: 5,
          yStep: 50,
          functions: [
            { expr: 'x^(log_2(a))', label: 'leaf work $n^{\\log_2 a}$', color: 'red', domain: [0.01, 40] },
            { expr: 'x', label: 'root work $n^1$', color: 'blue' },
            { expr: 'x*log_2(x)', label: '$n \\log_2 n$', color: 'gray', dashed: true, domain: [1, 40] },
          ],
          sliders: [{ name: 'a', min: 1, max: 8, step: 1, value: 2, label: '$a$' }],
          readouts: [{ label: '$\\log_2 a =$', expr: 'log_2(a)', digits: 3 }],
          caption: '$T(n) = aT(n/2) + n$, so $b = 2$ and $d = 1$. With $a = 1$ the root\'s $n$ dominates: $\\Theta(n)$. At $a = 2$ leaves and root balance and you get the extra log factor (dashed). For $a \\ge 3$ the red leaf curve $n^{\\log_2 a}$ outgrows $n$, and it sets the answer.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'When the master theorem does not apply',
          text: 'It needs subproblems that shrink by a constant **factor**. $T(n) = T(n-1) + n$ shrinks by subtraction (it unrolls to $\\frac{n(n+1)}{2}$, $\\Theta(n^2)$). It also needs $f(n) = \\Theta(n^d)$: for $T(n) = 2T(n/2) + n \\log n$ this simple version says nothing (the answer is $\\Theta(n \\log^2 n)$). And the number of subproblems $a$ must be a constant, not something like $\\sqrt{n}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Solve $T(n) = 4T(n/2) + n^2$.',
      options: [
        { text: '$\\Theta(n^2)$', why: 'This would be the root-heavy case, which needs $a < b^d$. Here $a = 4 = 2^2 = b^d$, so every level costs the same and you pick up a log factor.' },
        { text: '$\\Theta(n^2 \\log n)$', correct: true, why: 'Right: $a = 4$, $b = 2$, $d = 2$, and $b^d = 4 = a$. Balanced case: $\\Theta(n^d \\log n) = \\Theta(n^2 \\log n)$.' },
        { text: '$\\Theta(n^{\\log_2 4}) = \\Theta(n^2)$ from the leaf-heavy case', why: 'The leaf-heavy case needs $a > b^d$, which is false. (Its formula happens to give $n^2$ too, but it omits the log factor that the equal case produces.)' },
        { text: '$\\Theta(n^4)$', why: 'This multiplies $a = 4$ subproblems into the exponent. The tree has $\\log_2 n + 1$ levels each costing $n^2$, not $n^4$.' },
      ],
      explanation: 'Level $j$ has $4^j$ subproblems of size $n/2^j$, each costing $(n/2^j)^2$, so the level costs $4^j \\cdot \\frac{n^2}{4^j} = n^2$. With $\\log_2 n + 1$ equal levels the total is $n^2(\\log_2 n + 1) = \\Theta(n^2 \\log n)$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'The recurrence $T(n) = 8T(n/2) + n^2$ (the naive recursive way to multiply $n \\times n$ matrices) solves to $\\Theta(n^p)$. What is $p$?',
      label: '$p =$',
      answer: '3',
      hint: 'Compare $a = 8$ with $b^d = 2^2$. Which case is it, and what is $\\log_2 8$?',
      explanation: '$a = 8 > 4 = b^d$, so the leaves dominate and $T(n) = \\Theta(n^{\\log_2 8}) = \\Theta(n^3)$ — the same as the triple-loop algorithm. Strassen\'s insight was to make do with $7$ half-size products instead of $8$, giving $n^{\\log_2 7} \\approx n^{2.807}$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student applies the master theorem to merge sort, $T(n) = 2T(n/2) + n$. Tap the first wrong line.',
      lines: [
        'Here $a = 2$, $b = 2$ and $f(n) = n$, so $d = 1$.',
        'Then $b^d = 2^1 = 2$.',
        'Since $a > b^d$, the leaves dominate.',
        'So $T(n) = \\Theta(n^{\\log_b a}) = \\Theta(n^{\\log_2 2})$.',
        'Therefore $T(n) = \\Theta(n)$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 misreads the comparison: $a = 2$ and $b^d = 2$ are **equal**, which is the balanced case. Every level of the recursion tree costs $n$, and there are $\\log_2 n + 1$ levels, so $T(n) = \\Theta(n \\log n)$. Merge sort cannot be $\\Theta(n)$: the top-level merge alone already costs $n$, and that same cost repeats on every level.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Fast exponentiation and Karatsuba multiplication',
      blocks: [
        {
          type: 'p',
          text: 'Computing $x^n$ by multiplying $x$ by itself $n - 1$ times is $\\Theta(n)$. Divide and conquer does much better, because $x^n$ is the square of $x^{n/2}$:',
        },
        {
          type: 'math',
          tex: 'x^n = \\begin{cases} 1 & n = 0 \\\\ \\left(x^{n/2}\\right)^2 & n \\text{ even} \\\\ x \\cdot \\left(x^{(n-1)/2}\\right)^2 & n \\text{ odd} \\end{cases}',
          caption: 'One recursive call on half the exponent, plus one or two multiplications: $M(n) = M(\\lfloor n/2 \\rfloor) + O(1)$, so $\\Theta(\\log n)$ by the master theorem ($a = 1$, $b = 2$, $d = 0$).',
        },
        {
          type: 'derivation',
          title: 'Compute $3^{13}$ by repeated squaring',
          steps: [
            { tex: '13 \\to 6 \\to 3 \\to 1 \\to 0', why: 'The exponents the recursion visits: halve and round down each time. ($13 = 1101_2$; each step drops the last binary digit.)' },
            { tex: '3^1 = 3 \\cdot (3^0)^2 = 3', why: '$1$ is odd: one extra factor of $x$.' },
            { tex: '3^3 = 3 \\cdot (3^1)^2 = 3 \\cdot 9 = 27', why: '$3$ is odd: square $3^1$, then multiply by $3$.' },
            { tex: '3^6 = (3^3)^2 = 729', why: '$6$ is even: just square.' },
            { tex: '3^{13} = 3 \\cdot (3^6)^2 = 3 \\cdot 531\\,441 = 1\\,594\\,323', why: '$13$ is odd: square $3^6$ and multiply by $3$.' },
          ],
          result: 'About $2\\log_2 n$ multiplications instead of $n - 1$. For $n = 10^6$ that is a few dozen instead of a million.',
        },
        {
          type: 'code',
          title: 'fast_pow.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>

int multiplications = 0;

// Computes base^exp mod m by repeated squaring (m < 2^32, so products fit in 64 bits).
std::uint64_t powMod(std::uint64_t base, std::uint64_t exp, std::uint64_t m) {
    if (exp == 0) return 1 % m;
    std::uint64_t half = powMod(base, exp / 2, m);   // T(n/2)
    std::uint64_t result = half * half % m;          // square: 1 multiplication
    ++multiplications;
    if (exp % 2 == 1) {                              // odd: one extra factor
        result = result * (base % m) % m;
        ++multiplications;
    }
    return result;
}

int main() {
    std::uint64_t r = powMod(3, 13, 1000);
    std::printf("3^13 mod 1000 = %llu  (%d multiplications)\\n", (unsigned long long)r, multiplications);

    multiplications = 0;
    r = powMod(2, 1000000, 1000000007);
    std::printf("2^1000000 mod 1000000007 = %llu  (%d multiplications)\\n", (unsigned long long)r, multiplications);
}`,
          output: `3^13 mod 1000 = 323  (7 multiplications)
2^1000000 mod 1000000007 = 235042059  (27 multiplications)`,
          annotations: [
            { lines: 9, text: 'The single recursive call on half the exponent: $a = 1$, $b = 2$.' },
            { lines: '10-15', text: 'Reducing mod $m$ after every multiplication keeps numbers small; this is the modular exponentiation that RSA encryption relies on.' },
            { lines: 20, text: 'Store the result before printing the counter: the order in which `printf` arguments are evaluated is unspecified in C++.' },
            { lines: 24, text: '$10^6$ has $20$ binary digits, $7$ of them ones: $20$ squarings $+ 7$ extra multiplications $= 27$.' },
          ],
        },
        {
          type: 'heading',
          text: 'Karatsuba: multiplying big numbers with three products instead of four',
        },
        {
          type: 'p',
          text: 'Schoolbook multiplication of two $n$-digit numbers takes $\\Theta(n^2)$ digit products. Split each number into high and low halves, $x = a \\cdot 10^m + b$ and $y = c \\cdot 10^m + d$. Then $xy = ac \\cdot 10^{2m} + (ad + bc)\\cdot 10^m + bd$ — four half-size products, $T(n) = 4T(n/2) + \\Theta(n) = \\Theta(n^2)$, no gain. Karatsuba\'s trick (1960) gets the middle term from just **one** extra product:',
        },
        {
          type: 'math',
          tex: 'ad + bc = (a + b)(c + d) - ac - bd',
          caption: 'Three half-size products ($ac$, $bd$, $(a+b)(c+d)$) plus additions: $T(n) = 3T(n/2) + \\Theta(n) = \\Theta(n^{\\log_2 3}) \\approx \\Theta(n^{1.585})$.',
        },
        {
          type: 'derivation',
          title: 'Karatsuba on $12 \\times 34$',
          steps: [
            { tex: 'a = 1,\\ b = 2,\\ c = 3,\\ d = 4,\\ m = 1', why: 'Split $12 = 1 \\cdot 10 + 2$ and $34 = 3 \\cdot 10 + 4$.' },
            { tex: 'ac = 3, \\quad bd = 8', why: 'Two of the three products.' },
            { tex: '(a+b)(c+d) = 3 \\cdot 7 = 21 \\implies ad + bc = 21 - 3 - 8 = 10', why: 'The third product, then subtract to recover the middle term (check: $1 \\cdot 4 + 2 \\cdot 3 = 10$ ✓).' },
            { tex: 'xy = 3 \\cdot 100 + 10 \\cdot 10 + 8 = 408', why: 'Reassemble with shifts by powers of $10$, which are cheap. Indeed $12 \\times 34 = 408$.' },
          ],
          result: 'Three multiplications instead of four. Applied recursively, that one saved product per level changes the exponent from $2$ to $\\log_2 3$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Karatsuba multiplies two $8$-digit numbers by recursing on halves until it reaches $1$-digit numbers. Assume every split is exact and ignore the extra digit a sum like $a + b$ can carry. How many $1$-digit multiplications does it perform? (Schoolbook multiplication uses $8^2 = 64$.)',
      label: 'multiplications $=$',
      answer: '27',
      hint: 'Let $M(n)$ be the count for $n$ digits: $M(n) = 3M(n/2)$ and $M(1) = 1$.',
      explanation: '$M(8) = 3M(4) = 9M(2) = 27M(1) = 27$. In general $M(2^k) = 3^k = n^{\\log_2 3}$. The gap widens with size: for $1024$-digit numbers it is $3^{10} = 59\\,049$ products against $1\\,048\\,576$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Why quicksort is fast on average',
      blocks: [
        {
          type: 'p',
          text: '[[dm-quicksort|Quicksort]] divides differently: pick a **pivot** element, **partition** the array into elements smaller than the pivot and elements at least as big (a single $\\Theta(n)$ pass, done in place), then sort the two parts recursively. No merge step is needed — once both sides are sorted, the whole array is sorted.',
        },
        {
          type: 'table',
          headers: ['Pivot luck', 'Recurrence', 'Result'],
          rows: [
            ['Always the median (perfect split)', '$T(n) = 2T(n/2) + n$', '$\\Theta(n \\log n)$'],
            ['Always a 1 : 9 split', '$T(n) = T(n/10) + T(9n/10) + n$', '$\\Theta(n \\log n)$ (depth $\\log_{10/9} n$)'],
            ['Always the smallest (e.g. first element of a sorted array)', '$T(n) = T(n-1) + (n - 1)$', '$\\frac{n(n-1)}{2} = \\Theta(n^2)$'],
            ['Uniformly random pivot (expected)', '—', '$2(n+1)H_n - 4n \\approx 1.39\\, n\\log_2 n$ for large $n$'],
          ],
          caption: 'Even a lopsided but proportional split keeps the depth logarithmic. Only consistently terrible pivots are quadratic.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why random pivots are almost always good enough',
          text: 'Call a pivot **good** if it lands in the middle half of the values (between the 25th and 75th percentile). A random pivot is good with probability $\\frac{1}{2}$, and a good pivot leaves each side with at most $\\frac{3}{4}$ of the elements. Follow any one element down the recursion: it can only pass through about $\\log_{4/3} n$ good pivots before its subarray has size $1$, and on average every other pivot is good, so its expected depth is about $2\\log_{4/3} n = O(\\log n)$. Each level of recursion does at most $n$ work in total, so the expected total is $O(n \\log n)$.',
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [0, 3000],
          xStep: 10,
          yStep: 500,
          functions: [
            { expr: '2(x+1)(ln(x) + 0.5772 + 1/(2x)) - 4x', label: 'average: $2(n+1)H_n - 4n$', color: 'blue', domain: [1, 100] },
            { expr: 'x(x-1)/2', label: 'worst: $\\frac{n(n-1)}{2}$', color: 'red' },
          ],
          caption: 'Expected comparisons with random pivots (exact formula from the deep dive below, using $H_n \\approx \\ln n + 0.5772 + \\frac{1}{2n}$) versus the worst case. At $n = 100$: about $648$ against $4950$, and the gap grows without bound.',
        },
        {
          type: 'deepdive',
          title: 'The exact expectation: which pairs ever get compared?',
          blocks: [
            {
              type: 'p',
              text: 'Name the elements by rank, $z_1 < z_2 < \\cdots < z_n$. Two elements $z_i$ and $z_j$ ($i < j$) are compared **only** if one of them is the first pivot chosen from the block $z_i, z_{i+1}, \\dots, z_j$: if some element strictly between them is picked first, they are separated into different sides forever. With random pivots each of the $j - i + 1$ elements of the block is equally likely to be picked first, so',
            },
            {
              type: 'math',
              tex: 'P(z_i \\text{ and } z_j \\text{ compared}) = \\frac{2}{j - i + 1}, \\qquad E[\\text{comparisons}] = \\sum_{i<j} \\frac{2}{j-i+1} = 2(n+1)H_n - 4n',
              caption: '$H_n = 1 + \\frac{1}{2} + \\cdots + \\frac{1}{n} \\approx \\ln n$ (the harmonic numbers), so the expectation is about $2n \\ln n = (2 \\ln 2)\\, n\\log_2 n \\approx 1.39\\, n \\log_2 n$.',
            },
            {
              type: 'p',
              text: 'This "sum of indicator probabilities" technique is linearity of expectation at work: you never need the distribution of the total, only the probability of each pairwise event.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why quicksort wins in practice, and std::sort',
          text: 'Quicksort partitions **in place** with sequential, cache-friendly scans, and its inner loop is tiny, so its constant factor beats merge sort\'s. To avoid the $\\Theta(n^2)$ worst case, `std::sort` uses **introsort**: quicksort with a median-of-three pivot, switching to heapsort if the recursion gets too deep, and insertion sort for small subarrays. The result is guaranteed $O(n \\log n)$ — the guarantee the C++ standard has required since C++11.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'Quicksort that always uses the **first** element as the pivot sorts an already-sorted array of $n$ distinct elements in $\\Theta(n \\log n)$ time.',
      answer: false,
      explanation: 'On sorted input the first element is the smallest, so every partition puts $0$ elements on one side and $n - 1$ on the other. The recurrence is $T(n) = T(n-1) + (n-1)$, giving $(n-1) + (n-2) + \\cdots + 1 = \\frac{n(n-1)}{2} = \\Theta(n^2)$ comparisons — the worst case. This is exactly why practical quicksorts pick random or median-of-three pivots.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'An algorithm splits its input into $3$ parts of size $n/3$, solves each recursively, and combines the results in linear time. What is its running time?',
      options: [
        { text: '$\\Theta(n)$', why: 'This ignores the recursion depth. Every level of the tree does $\\Theta(n)$ work, and there are $\\log_3 n + 1$ levels.' },
        { text: '$\\Theta(n^{\\log_2 3})$', why: 'This is Karatsuba\'s answer, for $3$ subproblems of size $n/2$. Here the pieces have size $n/3$, so $b = 3$.' },
        { text: '$\\Theta(n^2)$', why: 'There is no quadratic work anywhere: each level costs $3^j \\cdot \\frac{n}{3^j} = n$.' },
        { text: '$\\Theta(n \\log n)$', correct: true, why: 'Right: $a = 3$, $b = 3$, $d = 1$, and $a = 3 = 3^1 = b^d$. Balanced case: $\\Theta(n \\log n)$.' },
      ],
      explanation: 'The recurrence is $T(n) = 3T(n/3) + \\Theta(n)$. Since $a = b^d$, every level of the recursion tree costs about $n$, and there are $\\Theta(\\log n)$ levels: $\\Theta(n \\log n)$. Like merge sort, the number of pieces does not matter as long as the pieces together still add up to $n$.',
    },
  ],
  takeaways: [
    'Divide and conquer: split into $a$ subproblems of size $n/b$, recurse, combine in $f(n)$; the running time is $T(n) = aT(n/b) + f(n)$.',
    'Binary search: $T(n) = T(n/2) + 1$ gives $\\log_2 n + 1$. Merge sort: $T(n) = 2T(n/2) + n$ gives exactly $n \\log_2 n$ for $n = 2^k$, i.e. $\\Theta(n \\log n)$ in every case, using $\\Theta(n)$ extra space.',
    'In a recursion tree, level $j$ costs $cn^d (a/b^d)^j$: a geometric series. Master theorem: $\\Theta(n^d)$ if $a < b^d$, $\\Theta(n^d \\log n)$ if $a = b^d$, $\\Theta(n^{\\log_b a})$ if $a > b^d$.',
    'Fast exponentiation needs $\\Theta(\\log n)$ multiplications; Karatsuba\'s three-product trick multiplies $n$-digit numbers in $\\Theta(n^{\\log_2 3}) \\approx \\Theta(n^{1.585})$.',
    'Quicksort is $\\Theta(n^2)$ in the worst case but $\\Theta(n \\log n)$ on average with random pivots (about $1.39\\, n\\log_2 n$ comparisons for large $n$); it is fast in practice because it partitions in place.',
    'Check every recurrence solution by computing small values, and prove it by induction.',
  ],
  reading: [
    {
      title: 'Wikipedia — Master theorem (analysis of algorithms)',
      url: 'https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)',
      source: 'wikipedia',
      note: 'States the general version with $f(n)$ not a pure power, plus the Akra–Bazzi generalization for uneven splits.',
    },
    {
      title: 'Wikipedia — Merge sort',
      url: 'https://en.wikipedia.org/wiki/Merge_sort',
      source: 'wikipedia',
      note: 'Covers top-down and bottom-up variants, stability, and the exact worst-case comparison count $n\\lceil \\log_2 n \\rceil - 2^{\\lceil \\log_2 n \\rceil} + 1$.',
    },
    {
      title: 'Wikipedia — Karatsuba algorithm',
      url: 'https://en.wikipedia.org/wiki/Karatsuba_algorithm',
      source: 'wikipedia',
      note: 'The story of how a student disproved Kolmogorov\'s conjecture that multiplication needs $\\Theta(n^2)$ operations.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'Its recurrences chapter solves divide-and-conquer recurrences by plug-and-chug and by the Akra–Bazzi formula.',
    },
  ],
};
