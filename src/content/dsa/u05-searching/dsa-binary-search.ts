import type { AlgoBlock, Lesson } from '../../types';

// ---- generated: figures, runnable examples and animation frames ----
const FIG: Record<string, string> = {
  "invariant": `<svg viewBox="0 0 520 140" xmlns="http://www.w3.org/2000/svg"><rect x="45.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-red"/><rect x="45.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-red"/><text x="62.0" y="95" text-anchor="middle" font-size="11" class="t-gray">0</text><rect x="81.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-red"/><rect x="81.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-red"/><text x="98.0" y="95" text-anchor="middle" font-size="11" class="t-gray">1</text><rect x="117.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-red"/><rect x="117.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-red"/><text x="134.0" y="95" text-anchor="middle" font-size="11" class="t-gray">2</text><rect x="153.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-red"/><rect x="153.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-red"/><text x="170.0" y="95" text-anchor="middle" font-size="11" class="t-gray">3</text><rect x="189.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-blue"/><rect x="189.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/><text x="206.0" y="95" text-anchor="middle" font-size="11" class="t-gray">4</text><rect x="225.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-blue"/><rect x="225.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/><text x="242.0" y="95" text-anchor="middle" font-size="11" class="t-gray">5</text><rect x="261.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-blue"/><rect x="261.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/><text x="278.0" y="95" text-anchor="middle" font-size="11" class="t-gray">6</text><rect x="297.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-blue"/><rect x="297.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/><text x="314.0" y="95" text-anchor="middle" font-size="11" class="t-gray">7</text><rect x="333.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-green"/><rect x="333.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-green"/><text x="350.0" y="95" text-anchor="middle" font-size="11" class="t-gray">8</text><rect x="369.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-green"/><rect x="369.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-green"/><text x="386.0" y="95" text-anchor="middle" font-size="11" class="t-gray">9</text><rect x="405.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-green"/><rect x="405.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-green"/><text x="422.0" y="95" text-anchor="middle" font-size="11" class="t-gray">10</text><rect x="441.5" y="46" width="33" height="34" rx="5" fill="currentColor" fill-opacity="0.12" class="f-green"/><rect x="441.5" y="46" width="33" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-green"/><text x="458.0" y="95" text-anchor="middle" font-size="11" class="t-gray">11</text><path d="M47.0,43 L47.0,38 L185.0,38 L185.0,43" fill="none" stroke="currentColor" stroke-width="1.5" class="s-red"/><text x="116.0" y="31" text-anchor="middle" font-size="13" class="t-red">all &lt; x  (ruled out)</text><path d="M191.0,43 L191.0,38 L329.0,38 L329.0,43" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/><text x="260.0" y="31" text-anchor="middle" font-size="13" class="t-blue">unknown</text><path d="M335.0,43 L335.0,38 L473.0,38 L473.0,43" fill="none" stroke="currentColor" stroke-width="1.5" class="s-green"/><text x="404.0" y="31" text-anchor="middle" font-size="13" class="t-green">all ≥ x  (ruled out)</text><path d="M188.0,116 L188.0,104" stroke="currentColor" stroke-width="1.8" class="s-orange"/><path d="M184.0,108 L192.0,108 L188.0,101 Z" fill="currentColor" class="f-orange"/><text x="188.0" y="130" text-anchor="middle" font-size="13" class="t-orange">lo</text><path d="M332.0,116 L332.0,104" stroke="currentColor" stroke-width="1.8" class="s-orange"/><path d="M328.0,108 L336.0,108 L332.0,101 Z" fill="currentColor" class="f-orange"/><text x="332.0" y="130" text-anchor="middle" font-size="13" class="t-orange">hi</text><path d="M476.0,116 L476.0,104" stroke="currentColor" stroke-width="1.8" class="s-gray"/><path d="M472.0,108 L480.0,108 L476.0,101 Z" fill="currentColor" class="f-gray"/><text x="476.0" y="130" text-anchor="middle" font-size="13" class="t-gray">n</text></svg>`,
};
const CODE: Record<string, string> = {
  "answer": `#include <algorithm>
#include <cstdio>
#include <numeric>
#include <vector>

// Loads must ship in order; each day the truck takes a prefix of what is left,
// up to \`cap\` tonnes. How many days does capacity \`cap\` need? (greedy, O(n))
int daysNeeded(const std::vector<int>& loads, int cap) {
    int days = 1, onTruck = 0;
    for (int w : loads) {
        if (onTruck + w > cap) { ++days; onTruck = 0; }
        onTruck += w;
    }
    return days;
}

// Smallest capacity that ships everything within \`maxDays\`.
// Predicate ok(cap) = daysNeeded(cap) <= maxDays is monotone: false...false true...true.
int minCapacity(const std::vector<int>& loads, int maxDays, int& checks) {
    int lo = *std::max_element(loads.begin(), loads.end());   // below this: impossible
    int hi = std::accumulate(loads.begin(), loads.end(), 0);  // one day: always ok
    checks = 0;
    while (lo < hi) {                       // answer is in [lo, hi]
        int mid = lo + (hi - lo) / 2;
        ++checks;
        if (daysNeeded(loads, mid) <= maxDays) hi = mid;   // mid works: answer <= mid
        else                                   lo = mid + 1; // mid fails: answer > mid
    }
    return lo;
}

int main() {
    std::vector<int> loads = {3, 2, 2, 4, 1, 4};
    int checks;
    for (int d = 1; d <= 6; ++d) {
        int cap = minCapacity(loads, d, checks);
        std::printf("days <= %d: capacity %2d (%d checks)\\n", d, cap, checks);
    }

    // A bigger convoy: 1000 loads of 1..100 tonnes, 30 days.
    std::vector<int> big(1000);
    for (int i = 0; i < 1000; ++i) big[i] = 1 + (i * 37 + 11) % 100;
    int cap = minCapacity(big, 30, checks);
    std::printf("1000 loads, 30 days: capacity %d after %d checks\\n", cap, checks);
}`,
  "bounds": `#include <algorithm>
#include <cstdio>
#include <vector>

// First index i in [0, n) with a[i] >= x, or n if there is none.
// Invariant: a[0..lo) < x  and  a[hi..n) >= x.
std::size_t lowerBound(const std::vector<int>& a, int x) {
    std::size_t lo = 0, hi = a.size();
    while (lo < hi) {
        std::size_t mid = lo + (hi - lo) / 2;
        if (a[mid] < x) lo = mid + 1;
        else            hi = mid;
    }
    return lo;
}

// First index i with a[i] > x. Only the comparison changes.
std::size_t upperBound(const std::vector<int>& a, int x) {
    std::size_t lo = 0, hi = a.size();
    while (lo < hi) {
        std::size_t mid = lo + (hi - lo) / 2;
        if (a[mid] <= x) lo = mid + 1;
        else             hi = mid;
    }
    return lo;
}

int main() {
    const std::vector<int> a = {2, 5, 5, 8, 11, 13, 13, 13, 17, 20, 24, 29};
    std::printf(" x  lower upper count found\\n");
    for (int x : {13, 5, 9, 1, 29, 30}) {
        std::size_t lb = lowerBound(a, x), ub = upperBound(a, x);
        bool found = lb < a.size() && a[lb] == x;
        std::printf("%2d  %5zu %5zu %5zu %s\\n", x, lb, ub, ub - lb, found ? "yes" : "no");
    }

    // The standard library: same answers, as iterators.
    auto lb = std::lower_bound(a.begin(), a.end(), 13);
    auto ub = std::upper_bound(a.begin(), a.end(), 13);
    auto [first, last] = std::equal_range(a.begin(), a.end(), 13);
    std::printf("std: lower=%td upper=%td equal_range=[%td, %td) binary_search(9)=%d\\n",
                lb - a.begin(), ub - a.begin(), first - a.begin(), last - a.begin(),
                std::binary_search(a.begin(), a.end(), 9));
}`,
  "keyframes": `#include <algorithm>
#include <cstdio>
#include <vector>

struct Keyframe {
    float time;    // seconds, strictly increasing along the track
    float height;  // the animated value (a door opening, say)
};

// Sample the track at time t with linear interpolation.
float sample(const std::vector<Keyframe>& track, float t) {
    // First key strictly after t. The projection &Keyframe::time lets the
    // algorithm compare times without a hand-written comparator.
    auto next = std::ranges::upper_bound(track, t, {}, &Keyframe::time);
    if (next == track.begin()) return track.front().height;  // before the first key
    if (next == track.end())   return track.back().height;   // after the last key
    auto prev = next - 1;                                     // prev->time <= t < next->time
    float u = (t - prev->time) / (next->time - prev->time);
    return prev->height + u * (next->height - prev->height);
}

int main() {
    const std::vector<Keyframe> track = {
        {0.0f, 0.0f}, {0.5f, 1.0f}, {1.0f, 1.5f}, {2.0f, 3.5f}, {3.0f, 3.5f}};
    for (float t : {-1.0f, 0.25f, 0.5f, 1.5f, 2.75f, 9.0f})
        std::printf("t = %5.2f  height = %.3f\\n", t, sample(track, t));
}`,
  "midpoint": `#include <cstdint>
#include <cstdio>
#include <numeric>   // std::midpoint (C++20)

int main() {
    // Indices into a buffer of 3 billion bytes (a big asset pack, say).
    std::uint32_t lo = 2'000'000'000u, hi = 3'000'000'000u;

    std::uint32_t bad  = (lo + hi) / 2;          // lo + hi wraps past 2^32
    std::uint32_t good = lo + (hi - lo) / 2;     // hi - lo always fits
    std::uint32_t std20 = std::midpoint(lo, hi); // rounds toward lo

    std::printf("lo + hi as 64-bit   = %llu\\n", (unsigned long long)lo + hi);
    std::printf("(lo + hi) / 2       = %u   <- wrapped: not even in [lo, hi]\\n", bad);
    std::printf("lo + (hi - lo) / 2  = %u\\n", good);
    std::printf("std::midpoint       = %u\\n", std20);
}`,
  "rotated": `#include <algorithm>
#include <cstdio>
#include <vector>

// Index of the smallest element of a rotated sorted array of distinct values.
// Invariant: the minimum lies in [lo, hi] (closed!), and hi only moves onto
// positions that are still candidates.
std::size_t findMin(const std::vector<int>& a) {
    std::size_t lo = 0, hi = a.size() - 1;
    while (lo < hi) {
        std::size_t mid = lo + (hi - lo) / 2;
        if (a[mid] > a[hi]) lo = mid + 1;   // the drop is to the right of mid
        else                hi = mid;       // a[mid..hi] is sorted: min is at or left of mid
    }
    return lo;
}

// Search a rotated array: find the rotation, then binary search the right piece.
int search(const std::vector<int>& a, int x) {
    std::size_t k = findMin(a), n = a.size();
    // The values in order are a[k], ..., a[n-1], a[0], ..., a[k-1].
    auto first = (x >= a[k] && x <= a[n - 1]) ? a.begin() + k : a.begin();
    auto last  = (x >= a[k] && x <= a[n - 1]) ? a.end()       : a.begin() + k;
    auto it = std::lower_bound(first, last, x);
    return (it != last && *it == x) ? int(it - a.begin()) : -1;
}

int main() {
    std::vector<int> a = {15, 18, 22, 27, 31, 2, 5, 8, 11};
    std::printf("min at index %zu (value %d)\\n", findMin(a), a[findMin(a)]);
    for (int x : {8, 22, 15, 11, 4})
        std::printf("search(%2d) = %2d\\n", x, search(a, x));

    // Brute-force check: every rotation of a sorted array, every target.
    std::vector<int> s = {1, 3, 4, 7, 9, 12, 15, 20};
    int bad = 0;
    for (std::size_t r = 0; r < s.size(); ++r) {
        std::vector<int> b = s;
        std::rotate(b.begin(), b.begin() + r, b.end());
        for (int x = 0; x <= 21; ++x) {
            auto it = std::find(b.begin(), b.end(), x);
            int expect = it == b.end() ? -1 : int(it - b.begin());
            if (search(b, x) != expect) ++bad;
        }
    }
    std::printf("mismatches against linear search: %d\\n", bad);
}`,
};
const OUT: Record<string, string> = {
  "answer": `days <= 1: capacity 16 (3 checks)
days <= 2: capacity  9 (4 checks)
days <= 3: capacity  6 (4 checks)
days <= 4: capacity  5 (4 checks)
days <= 5: capacity  4 (4 checks)
days <= 6: capacity  4 (4 checks)
1000 loads, 30 days: capacity 1710 after 15 checks`,
  "bounds": ` x  lower upper count found
13      5     8     3 yes
 5      1     3     2 yes
 9      4     4     0 no
 1      0     0     0 no
29     11    12     1 yes
30     12    12     0 no
std: lower=5 upper=8 equal_range=[5, 8) binary_search(9)=0`,
  "keyframes": `t = -1.00  height = 0.000
t =  0.25  height = 0.500
t =  0.50  height = 1.000
t =  1.50  height = 2.500
t =  2.75  height = 3.500
t =  9.00  height = 3.500`,
  "midpoint": `lo + hi as 64-bit   = 5000000000
(lo + hi) / 2       = 352516352   <- wrapped: not even in [lo, hi]
lo + (hi - lo) / 2  = 2500000000
std::midpoint       = 2500000000`,
  "rotated": `min at index 5 (value 2)
search( 8) =  7
search(22) =  2
search(15) =  0
search(11) =  8
search( 4) = -1
mismatches against linear search: 0`,
};
const ALGO: Record<string, AlgoBlock> = {
  "answer": {"type": "algo", "view": "array", "interval": 1400, "caption": "Binary search over the **answer**. The cells are capacities, not data; red = infeasible, green = feasible. Monotonicity is what lets one check rule out a whole side.", "frames": [{"note": "Loads $3, 2, 2, 4, 1, 4$ must ship in order within $3$ days. Candidate capacities run from $\\max = 4$ (always needed) to $\\text{sum} = 16$ (always enough).", "array": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "pointers": [{"index": 0, "label": "lo"}, {"index": 12, "label": "hi", "color": "blue"}], "vars": [["range", "[4, 16]"], ["checks", "0"]]}, {"note": "Try capacity $10$: the greedy loader needs $2$ days, which is within $3$.", "pointers": [{"index": 0, "label": "lo"}, {"index": 6, "label": "mid", "color": "purple"}, {"index": 12, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "orange"}], "dim": [], "vars": [["capacity", "10"], ["days needed", "2"], ["checks", "1"]]}, {"note": "$10$ works, so every larger capacity works too: the answer is at most $10$.", "pointers": [{"index": 0, "label": "lo"}, {"index": 6, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "green"}], "dim": [7, 8, 9, 10, 11, 12], "vars": [["range", "[4, 10]"], ["checks", "1"]]}, {"note": "Try capacity $7$: the greedy loader needs $3$ days, which is within $3$.", "pointers": [{"index": 0, "label": "lo"}, {"index": 3, "label": "mid", "color": "purple"}, {"index": 6, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "green"}, {"index": 3, "color": "orange"}], "dim": [7, 8, 9, 10, 11, 12], "vars": [["capacity", "7"], ["days needed", "3"], ["checks", "2"]]}, {"note": "$7$ works, so every larger capacity works too: the answer is at most $7$.", "pointers": [{"index": 0, "label": "lo"}, {"index": 3, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "green"}, {"index": 3, "color": "green"}], "dim": [4, 5, 6, 7, 8, 9, 10, 11, 12], "vars": [["range", "[4, 7]"], ["checks", "2"]]}, {"note": "Try capacity $5$: the greedy loader needs $4$ days, which is more than $3$.", "pointers": [{"index": 0, "label": "lo"}, {"index": 1, "label": "mid", "color": "purple"}, {"index": 3, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "green"}, {"index": 3, "color": "green"}, {"index": 1, "color": "orange"}], "dim": [4, 5, 6, 7, 8, 9, 10, 11, 12], "vars": [["capacity", "5"], ["days needed", "4"], ["checks", "3"]]}, {"note": "$5$ fails, so every smaller capacity fails too: the answer is at least $6$.", "pointers": [{"index": 2, "label": "lo"}, {"index": 3, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "green"}, {"index": 3, "color": "green"}, {"index": 1, "color": "red"}], "dim": [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12], "vars": [["range", "[6, 7]"], ["checks", "3"]]}, {"note": "Try capacity $6$: the greedy loader needs $3$ days, which is within $3$.", "pointers": [{"index": 2, "label": "lo"}, {"index": 2, "label": "mid", "color": "purple"}, {"index": 3, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "green"}, {"index": 3, "color": "green"}, {"index": 1, "color": "red"}, {"index": 2, "color": "orange"}], "dim": [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12], "vars": [["capacity", "6"], ["days needed", "3"], ["checks", "4"]]}, {"note": "$6$ works, so every larger capacity works too: the answer is at most $6$.", "pointers": [{"index": 2, "label": "lo"}, {"index": 2, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "green"}, {"index": 3, "color": "green"}, {"index": 1, "color": "red"}, {"index": 2, "color": "green"}], "dim": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "vars": [["range", "[6, 6]"], ["checks", "4"]]}, {"note": "One candidate left: the minimum capacity is $6$, found with $4$ feasibility checks instead of $13$.", "pointers": [{"index": 2, "label": "answer", "color": "green"}], "marks": [{"index": 6, "color": "green"}, {"index": 3, "color": "green"}, {"index": 1, "color": "red"}, {"index": 2, "color": "green"}], "dim": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "vars": [["answer", "6"], ["checks", "4"]]}]},
  "lower": {"type": "algo", "view": "array", "code": "std::size_t lowerBound(const std::vector<int>& a, int x) {\n    std::size_t lo = 0, hi = a.size();\n    while (lo < hi) {\n        std::size_t mid = lo + (hi - lo) / 2;\n        if (a[mid] < x) lo = mid + 1;\n        else            hi = mid;\n    }\n    return lo;\n}", "interval": 1300, "caption": "`lowerBound(a, 13)`: gray cells are ruled out. Each step keeps the invariant $a[0..lo) < 13 \\le a[hi..n)$ and shrinks $hi - lo$; when the range is empty, $lo$ is the answer.", "frames": [{"note": "Look for the first element $\\ge 13$. Candidates are the half-open range $[lo, hi) = [0, 12)$; nothing is ruled out yet.", "array": [2, 5, 5, 8, 11, 13, 13, 13, 17, 20, 24, 29], "pointers": [{"index": 0, "label": "lo"}, {"index": 12, "label": "hi", "color": "blue"}], "lines": [2], "vars": [["lo", "0"], ["hi", "12"], ["iterations", "0"]]}, {"note": "$mid = 0 + (12 - 0)/2 = 6$. Compare: $13 \\ge 13$.", "pointers": [{"index": 0, "label": "lo"}, {"index": 6, "label": "mid", "color": "purple"}, {"index": 12, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "orange"}], "dim": [], "lines": [4, 5], "vars": [["lo", "0"], ["hi", "12"], ["mid", "6"], ["a[mid]", "13"], ["iterations", "1"]]}, {"note": "Index $6$ could be the answer, and nothing after it is earlier, so keep it: $hi = 6$.", "pointers": [{"index": 0, "label": "lo"}, {"index": 6, "label": "hi", "color": "blue"}], "dim": [6, 7, 8, 9, 10, 11], "lines": [6], "vars": [["lo", "0"], ["hi", "6"], ["iterations", "1"]]}, {"note": "$mid = 0 + (6 - 0)/2 = 3$. Compare: $8 < 13$.", "pointers": [{"index": 0, "label": "lo"}, {"index": 3, "label": "mid", "color": "purple"}, {"index": 6, "label": "hi", "color": "blue"}], "marks": [{"index": 3, "color": "orange"}], "dim": [6, 7, 8, 9, 10, 11], "lines": [4, 5], "vars": [["lo", "0"], ["hi", "6"], ["mid", "3"], ["a[mid]", "8"], ["iterations", "2"]]}, {"note": "Everything up to index $3$ is $< 13$ (sorted!), so $lo = 4$.", "pointers": [{"index": 4, "label": "lo"}, {"index": 6, "label": "hi", "color": "blue"}], "dim": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11], "lines": [5], "vars": [["lo", "4"], ["hi", "6"], ["iterations", "2"]]}, {"note": "$mid = 4 + (6 - 4)/2 = 5$. Compare: $13 \\ge 13$.", "pointers": [{"index": 4, "label": "lo"}, {"index": 5, "label": "mid", "color": "purple"}, {"index": 6, "label": "hi", "color": "blue"}], "marks": [{"index": 5, "color": "orange"}], "dim": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11], "lines": [4, 5], "vars": [["lo", "4"], ["hi", "6"], ["mid", "5"], ["a[mid]", "13"], ["iterations", "3"]]}, {"note": "Index $5$ could be the answer, and nothing after it is earlier, so keep it: $hi = 5$.", "pointers": [{"index": 4, "label": "lo"}, {"index": 5, "label": "hi", "color": "blue"}], "dim": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11], "lines": [6], "vars": [["lo", "4"], ["hi", "5"], ["iterations", "3"]]}, {"note": "$mid = 4 + (5 - 4)/2 = 4$. Compare: $11 < 13$.", "pointers": [{"index": 4, "label": "lo"}, {"index": 4, "label": "mid", "color": "purple"}, {"index": 5, "label": "hi", "color": "blue"}], "marks": [{"index": 4, "color": "orange"}], "dim": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11], "lines": [4, 5], "vars": [["lo", "4"], ["hi", "5"], ["mid", "4"], ["a[mid]", "11"], ["iterations", "4"]]}, {"note": "Everything up to index $4$ is $< 13$ (sorted!), so $lo = 5$.", "pointers": [{"index": 5, "label": "lo"}, {"index": 5, "label": "hi", "color": "blue"}], "dim": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "lines": [5], "vars": [["lo", "5"], ["hi", "5"], ["iterations", "4"]]}, {"note": "$lo = hi = 5$: the range is empty, and the invariant says index $5$ is the first element $\\ge 13$.", "pointers": [{"index": 5, "label": "lo = hi", "color": "green"}], "marks": [{"index": 5, "color": "green"}], "dim": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11], "lines": [8], "vars": [["result", "5"], ["iterations", "4"]]}]},
  "rotmin": {"type": "algo", "view": "array", "code": "std::size_t findMin(const std::vector<int>& a) {\n    std::size_t lo = 0, hi = a.size() - 1;\n    while (lo < hi) {\n        std::size_t mid = lo + (hi - lo) / 2;\n        if (a[mid] > a[hi]) lo = mid + 1;\n        else                hi = mid;\n    }\n    return lo;\n}", "interval": 1300, "caption": "Finding the rotation point. Comparing $a[mid]$ with $a[hi]$ (not $a[lo]$) tells you which side of $mid$ the drop is on.", "frames": [{"note": "A sorted array rotated by an unknown amount. The minimum is somewhere in the closed range $[0, 8]$.", "array": [15, 18, 22, 27, 31, 2, 5, 8, 11], "pointers": [{"index": 0, "label": "lo"}, {"index": 8, "label": "hi", "color": "blue"}], "lines": [2], "vars": [["lo", "0"], ["hi", "8"]]}, {"note": "$mid = 4$. Compare with the right end: $a[4] = 31 > a[8] = 11$.", "pointers": [{"index": 0, "label": "lo"}, {"index": 4, "label": "mid", "color": "purple"}, {"index": 8, "label": "hi", "color": "blue"}], "marks": [{"index": 4, "color": "orange"}, {"index": 8, "color": "blue"}], "dim": [], "lines": [4, 5], "vars": [["lo", "0"], ["hi", "8"], ["mid", "4"]]}, {"note": "$a[mid]$ is bigger than something to its right, so the drop (and the minimum) is after $mid$: $lo = 5$.", "pointers": [{"index": 5, "label": "lo"}, {"index": 8, "label": "hi", "color": "blue"}], "dim": [0, 1, 2, 3, 4], "lines": [5], "vars": [["lo", "5"], ["hi", "8"]]}, {"note": "$mid = 6$. Compare with the right end: $a[6] = 5 \\le a[8] = 11$.", "pointers": [{"index": 5, "label": "lo"}, {"index": 6, "label": "mid", "color": "purple"}, {"index": 8, "label": "hi", "color": "blue"}], "marks": [{"index": 6, "color": "orange"}, {"index": 8, "color": "blue"}], "dim": [0, 1, 2, 3, 4], "lines": [4, 5], "vars": [["lo", "5"], ["hi", "8"], ["mid", "6"]]}, {"note": "$a[6..8]$ is increasing, so nothing right of $mid$ beats $a[mid]$: $hi = 6$.", "pointers": [{"index": 5, "label": "lo"}, {"index": 6, "label": "hi", "color": "blue"}], "dim": [0, 1, 2, 3, 4, 7, 8], "lines": [6], "vars": [["lo", "5"], ["hi", "6"]]}, {"note": "$mid = 5$. Compare with the right end: $a[5] = 2 \\le a[6] = 5$.", "pointers": [{"index": 5, "label": "lo"}, {"index": 5, "label": "mid", "color": "purple"}, {"index": 6, "label": "hi", "color": "blue"}], "marks": [{"index": 5, "color": "orange"}, {"index": 6, "color": "blue"}], "dim": [0, 1, 2, 3, 4, 7, 8], "lines": [4, 5], "vars": [["lo", "5"], ["hi", "6"], ["mid", "5"]]}, {"note": "$a[5..6]$ is increasing, so nothing right of $mid$ beats $a[mid]$: $hi = 5$.", "pointers": [{"index": 5, "label": "lo"}, {"index": 5, "label": "hi", "color": "blue"}], "dim": [0, 1, 2, 3, 4, 6, 7, 8], "lines": [6], "vars": [["lo", "5"], ["hi", "5"]]}, {"note": "$lo = hi = 5$: the minimum is $a[5] = 2$, so the array was rotated by $5$ places.", "pointers": [{"index": 5, "label": "min", "color": "green"}], "marks": [{"index": 5, "color": "green"}], "lines": [8], "vars": [["result", "5"]]}]},
};
// ---- end generated ----

export const lesson: Lesson = {
  id: 'dsa-binary-search',
  title: 'Binary Search',
  summary: 'Binary search done right: a precise invariant over a half-open range, lower_bound and upper_bound, the overflow-safe midpoint, the classic off-by-one bugs, binary search on the answer, rotated arrays, and the standard library versions.',
  minutes: 22,
  objectives: [
    'State the loop invariant of a half-open binary search and use it to prove the loop correct and terminating',
    'Implement `lower_bound` and `upper_bound` from scratch and use them to count, insert and test membership',
    'Spot and fix the classic bugs: overflow in the midpoint, `<=` versus `<`, and updates that cause infinite loops',
    'Recognize a monotone predicate and binary search over the answer space of an optimization problem',
    'Search a rotated sorted array and choose the right standard-library call (`std::lower_bound`, `std::equal_range`, `std::ranges::upper_bound`, member `lower_bound`)',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Binary search is an invariant, not a midpoint',
      blocks: [
        {
          type: 'p',
          text: 'You met [[dm-binary-search|binary search]] in Discrete Math: compare with the middle of a sorted array, discard the half that cannot hold the target, and finish in $\\Theta(\\log n)$ probes. The idea fits in one sentence. Yet Jon Bentley reported that most professional programmers he asked could not write it correctly, and the bugs are always the same: a loop that never ends, an index that is off by one, a midpoint that overflows.',
        },
        {
          type: 'p',
          text: 'The cure is to stop thinking about "the middle" and start thinking about a **[[dm-loop-invariant|loop invariant]]**: a statement about $lo$ and $hi$ that is true before every iteration. Write the invariant first, and every line of the loop follows from it.',
        },
        {
          type: 'definition',
          term: 'The lower-bound problem',
          text: 'Given a sorted array $a[0..n)$ and a value $x$, find the **first index** $i$ with $a[i] \\ge x$, or $n$ if there is none. This is the most useful form of binary search: it answers "is $x$ present?", "where would $x$ be inserted?" and "where do the copies of $x$ start?" all at once.',
        },
        {
          type: 'p',
          text: 'We keep two indices and a **[[dsa-half-open-range|half-open range]]** $[lo, hi)$ of candidates: $lo$ is included, $hi$ is not. Think of $lo$ and $hi$ as fences *between* cells. Everything left of the $lo$ fence is known to be $< x$; everything right of the $hi$ fence is known to be $\\ge x$; the cells between are still unknown.',
        },
        {
          type: 'figure',
          svg: FIG.invariant,
          alt: 'Twelve array cells. Cells 0 to 3 are red and labelled all less than x, ruled out. Cells 4 to 7 are blue and labelled unknown. Cells 8 to 11 are green and labelled all at least x, ruled out. Arrows mark lo at the fence before cell 4, hi at the fence before cell 8, and n after cell 11.',
          caption: 'The invariant: $a[0..lo) < x$ and $a[hi..n) \\ge x$. The answer is always at $lo$, at $hi$, or between them. When $lo = hi$ the unknown zone is empty and the answer is $lo$.',
          maxWidth: 520,
        },
        ALGO.lower,
        {
          type: 'derivation',
          title: 'Proving `lowerBound` correct (invariant: $a[0..lo) < x$ and $a[hi..n) \\ge x$)',
          steps: [
            { tex: '\\text{Init: } lo = 0,\\ hi = n', why: 'Both $a[0..0)$ and $a[n..n)$ are empty, so the invariant holds vacuously. Nothing is known yet.' },
            { tex: 'lo \\le mid < hi', why: 'With $lo < hi$, $mid = lo + \\lfloor (hi - lo)/2 \\rfloor$ is at least $lo$ and strictly less than $hi$. So $a[mid]$ is a real, unknown cell.' },
            { tex: 'a[mid] < x \\implies a[0..mid] < x \\implies lo \\leftarrow mid + 1', why: 'The array is sorted, so every cell up to $mid$ is $\\le a[mid] < x$. The left part of the invariant still holds with the new $lo$.' },
            { tex: 'a[mid] \\ge x \\implies a[mid..n) \\ge x \\implies hi \\leftarrow mid', why: 'Every cell from $mid$ on is $\\ge a[mid] \\ge x$. Note $hi = mid$, **not** $mid - 1$: $mid$ itself might be the answer, and the half-open range excludes $hi$ from the unknowns, not from the answer.' },
            { tex: 'hi - lo \\text{ strictly decreases}', why: 'Because $lo \\le mid < hi$, both updates shrink the range by at least one cell. So the loop ends, after at most $\\lfloor \\log_2 n \\rfloor + 1$ iterations since each one roughly halves it.' },
            { tex: '\\text{Exit: } lo = hi \\implies a[0..lo) < x \\le a[lo..n)', why: 'The two known zones touch. So $lo$ is exactly the first index with $a[i] \\ge x$ (or $n$ if every element is smaller).' },
          ],
          result: 'Init, maintenance, termination: the three duties of an invariant proof. Every binary search you write should come with one in your head.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why half-open ranges?',
          text: 'The same reasons the standard library uses `[begin, end)` everywhere. The size is $hi - lo$ with no $+1$. The empty range is simply $lo = hi$. Splitting $[lo, hi)$ at $mid$ gives $[lo, mid)$ and $[mid, hi)$ with no gap and no overlap. And $hi = n$ is a legal value for an unsigned index, while the closed-interval version needs $hi = n - 1$, which underflows to a huge number when $n = 0$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Run `lowerBound` on $a = [1, 4, 4, 4, 9, 12, 15, 21]$ with $x = 10$. What index does it return?',
      answer: '5',
      label: 'index $=$',
      hint: 'Trace $lo$, $hi$, $mid$: start with $[0, 8)$. Or use the definition: the first index whose value is $\\ge 10$.',
      explanation: 'Trace: $[0, 8)$, $mid = 4$, $a[4] = 9 < 10$, so $lo = 5$. Then $[5, 8)$, $mid = 6$, $a[6] = 15 \\ge 10$, so $hi = 6$. Then $[5, 6)$, $mid = 5$, $a[5] = 12 \\ge 10$, so $hi = 5$. Now $lo = hi = 5$. Check against the definition: $a[4] = 9 < 10 \\le 12 = a[5]$. Index $5$ is where $10$ would be inserted to keep the array sorted. Since $a[5] \\ne 10$, the value is not present.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'lower_bound, upper_bound and equal_range',
      blocks: [
        {
          type: 'p',
          text: 'Here is the most useful way to see binary search. Take any **monotone predicate** $P(i)$ on the indices: false, false, …, false, true, …, true. Binary search finds the **first true**, in $O(\\log n)$ evaluations of $P$. The array is just one source of such predicates.',
        },
        {
          type: 'table',
          headers: ['Function', 'Predicate $P(i)$', 'Returns', 'On $[2, 5, 5, 8, 11, 13, 13, 13, 17, \\ldots]$, $x = 13$'],
          rows: [
            ['[[dsa-lower-bound|lower_bound]]', '$a[i] \\ge x$', 'first element not less than $x$', '$5$'],
            ['`upper_bound`', '$a[i] > x$', 'first element greater than $x$', '$8$'],
            ['`equal_range`', 'both', 'the pair $[\\text{lower}, \\text{upper})$', '$[5, 8)$: three copies of $13$'],
          ],
        },
        {
          type: 'p',
          text: 'So `upperBound` is the same loop with `<=` in place of `<`. Everything else follows from the two bounds:',
        },
        {
          type: 'list',
          items: [
            '**Count of $x$:** `upper - lower`. Here $8 - 5 = 3$.',
            '**Is $x$ present?** `lower < n && a[lower] == x`. Testing only `lower < n` is a classic bug: `lower` is where $x$ *would* go, present or not.',
            '**Insert keeping sorted order:** insert at `upper` to place the new copy after existing equal elements (a stable insert), or at `lower` to place it before them.',
            '**Range query $[lo_v, hi_v)$:** the elements with $lo_v \\le a[i] < hi_v$ occupy `[lower(lo_v), lower(hi_v))`.',
          ],
        },
        {
          type: 'code',
          title: 'bounds.cpp',
          runnable: true,
          code: CODE.bounds,
          output: OUT.bounds,
          annotations: [
            { lines: '6', text: 'The invariant, written down where the next reader will see it.' },
            { lines: '8', text: '`hi = a.size()` is fine for an unsigned type: the half-open range never needs $n - 1$.' },
            { lines: 10, text: 'The overflow-safe midpoint (more on this soon).' },
            { lines: 22, text: 'The **only** change for `upperBound`: `<=` moves equal elements to the "ruled out on the left" side.' },
            { lines: 33, text: 'Membership needs both checks. For $x = 9$, `lower` is $4$, but $a[4] = 11 \\ne 9$.' },
            { lines: '38-40', text: 'The standard versions return iterators. `std::equal_range` returns both bounds in one call.' },
            { lines: 43, text: '`std::binary_search` only answers yes or no, so it is rarely what you want: you usually need the position too.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Interview pattern: "first" and "last"',
          text: '"Find the first and last position of $x$", "count occurrences in a sorted array", "find the insertion position", "find the smallest element $\\ge x$" (the *ceiling*), "the largest element $\\le x$" (the *floor*, at `upper - 1`) are all one or two bound calls. Interviewers look for the bound formulation instead of "find any copy, then scan left and right", which degrades to $O(n)$ when every element is equal.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A sorted `std::vector<int> v` may contain many copies of `x`. Which expression counts them in $O(\\log n)$?',
      codeOptions: true,
      options: [
        { text: 'std::upper_bound(v.begin(), v.end(), x) - std::lower_bound(v.begin(), v.end(), x)', correct: true, why: 'The copies of `x` occupy exactly the half-open range `[lower, upper)`, whose length is `upper - lower`. Two binary searches: $O(\\log n)$.' },
        { text: 'std::upper_bound(v.begin(), v.end(), x) - std::lower_bound(v.begin(), v.end(), x) + 1', why: 'The $+1$ is closed-interval thinking. With half-open ranges the length is `upper - lower`; if `x` is absent this would wrongly report $1$.' },
        { text: 'std::binary_search(v.begin(), v.end(), x)', why: '`std::binary_search` returns a `bool`, so it can only say whether at least one copy exists.' },
        { text: 'std::count(v.begin(), v.end(), x)', why: 'Correct value, wrong cost: `std::count` scans every element, $O(n)$, ignoring the sorted order.' },
      ],
      explanation: '`lower_bound` is the first position with `v[i] >= x` and `upper_bound` the first with `v[i] > x`. Between them sit exactly the elements equal to `x`, so the difference of the two iterators is the count, possibly $0$. `std::equal_range` returns the same pair in one call.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'fill',
      prompt: 'Complete the two loop bodies. Both use the half-open range $[lo, hi)$ and the same update lines `lo = mid + 1;` / `hi = mid;`.',
      template: '`lowerBound` (first $a[i] \\ge x$) moves right when `a[mid]` ___ `x`. `upperBound` (first $a[i] > x$) moves right when `a[mid]` ___ `x`. Both loops run while `lo` ___ `hi`.',
      blanks: [{ answers: ['`<`'] }, { answers: ['`<=`'] }, { answers: ['`<`'] }],
      wordBank: ['`<`', '`<=`', '`<`', '`>`', '`>=`', '`!=`'],
      hint: 'Moving right means "this cell and everything before it are ruled out". Which cells are ruled out for each bound?',
      explanation: 'For `lowerBound` the answer is the first cell with $a[i] \\ge x$, so a cell is ruled out (and $lo$ jumps past it) exactly when $a[mid] < x$. For `upperBound` the answer is the first cell with $a[i] > x$, so cells equal to $x$ are ruled out too: move right when $a[mid] \\le x$. The loop runs while the unknown range $[lo, hi)$ is non-empty, i.e. `lo < hi`.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Off-by-one bugs and the overflow-safe midpoint',
      blocks: [
        {
          type: 'p',
          text: 'Every binary search bug is a mismatch between the code and its invariant. There are two consistent conventions, and trouble starts when you mix them:',
        },
        {
          type: 'table',
          headers: ['Convention', 'Start', 'Loop while', 'Discard left', 'Discard right'],
          rows: [
            ['Half-open $[lo, hi)$', '$lo = 0,\\ hi = n$', '`lo < hi`', '`lo = mid + 1`', '`hi = mid`'],
            ['Closed $[lo, hi]$', '$lo = 0,\\ hi = n - 1$', '`lo <= hi`', '`lo = mid + 1`', '`hi = mid - 1`'],
          ],
          caption: 'Pick one row and use all of it. The closed version suits "find exactly $x$, return $-1$ if absent"; the half-open version suits bounds and insertion points, and is what the standard library does.',
        },
        {
          type: 'heading',
          text: 'Bug 1: an update that does not shrink the range',
        },
        {
          type: 'p',
          text: 'Termination needs $hi - lo$ to drop every iteration. With `mid = lo + (hi - lo) / 2` (rounding down), `mid` can equal `lo`, so an update `lo = mid` may change nothing.',
        },
        {
          type: 'derivation',
          title: 'The infinite loop in "find the last index with $a[i] \\le x$" written with `lo = mid`',
          steps: [
            { tex: 'a = [3, 7],\\ x = 9,\\ lo = 0,\\ hi = 1 \\ (\\text{closed})', why: 'A two-element range. The answer is index $1$, since both values are $\\le 9$.' },
            { tex: 'mid = 0 + \\lfloor (1 - 0)/2 \\rfloor = 0', why: 'Rounding down puts $mid$ on $lo$ whenever $hi = lo + 1$.' },
            { tex: 'a[0] = 3 \\le 9 \\implies lo = mid = 0', why: 'The buggy update keeps $mid$ as a candidate by writing `lo = mid`. But $lo$ was already $0$.' },
            { tex: '(lo, hi) = (0, 1) \\text{ again} \\implies \\text{loops forever}', why: 'Nothing changed, so the next iteration is identical. Fix: when the update is `lo = mid`, round the midpoint **up**: `mid = lo + (hi - lo + 1) / 2`. Better: restate it as a lower bound (first index with $a[i] > x$, minus one).' },
          ],
          result: 'Rule of thumb: `lo = mid` needs a midpoint rounded up; `hi = mid` needs one rounded down. The half-open lower bound uses `lo = mid + 1` and `hi = mid`, so it never has this problem.',
        },
        {
          type: 'heading',
          text: 'Bug 2: the midpoint overflows',
        },
        {
          type: 'p',
          text: 'The textbook line `mid = (lo + hi) / 2` computes `lo + hi` first. With 32-bit `int` indices, once the array has more than about $2^{30}$ elements the sum can exceed $2^{31} - 1$. For signed `int` that is undefined behavior; in practice you get a negative `mid` and an out-of-bounds read. With unsigned indices the sum wraps around, giving a `mid` that is not even between `lo` and `hi`.',
        },
        {
          type: 'compare',
          left: { title: 'Overflows', tone: 'bad', code: 'int mid = (lo + hi) / 2;', text: '`lo + hi` can exceed the type\'s range before the division happens.' },
          right: { title: 'Safe', tone: 'good', code: 'auto mid = lo + (hi - lo) / 2;\n// or, C++20:\nauto mid = std::midpoint(lo, hi);', text: '`hi - lo` is a valid size because $lo \\le hi$, and $lo$ plus half of it is at most $hi$. `std::midpoint` (header `<numeric>`) does this for you, rounding toward its first argument.' },
        },
        {
          type: 'code',
          title: 'midpoint.cpp',
          runnable: true,
          code: CODE.midpoint,
          output: OUT.midpoint,
          annotations: [
            { lines: 7, text: 'Unsigned 32-bit indices, so the wraparound is well-defined and we can print it. (Signed overflow is undefined behavior: the compiler may assume it never happens.)' },
            { lines: 9, text: '$2\\,000\\,000\\,000 + 3\\,000\\,000\\,000 = 5 \\times 10^9$ wraps modulo $2^{32}$ to $705\\,032\\,704$; halved, that is $352\\,516\\,352$.' },
            { lines: '10-11', text: 'Both safe versions give $2.5 \\times 10^9$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'A bug that hid for nine years',
          text: 'In 2006 Joshua Bloch announced that the binary search in Java\'s standard library, and the one in his own textbook-based code, had used `(low + high) / 2` since 1997. Nobody noticed until arrays with over a billion elements became common. The same line appears in Bentley\'s *Programming Pearls*, the book that popularized proving binary search correct. The proof assumed mathematical integers; the machine had 32 bits.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Bug 3: `hi = mid - 1` with unsigned indices',
          text: 'In the closed convention, `hi = mid - 1` with `mid == 0` makes a `std::size_t` wrap to $2^{64} - 1$, and `while (lo <= hi)` happily continues. Use signed indices for the closed form, or use the half-open form, which never subtracts.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'This `lowerBound` uses a half-open range $[lo, hi)$, but it sometimes reads past the end of the array and sometimes never returns. Tap the line with the bug.',
      lines: [
        '`std::size_t lo = 0, hi = a.size();`',
        '`while (lo <= hi) {`',
        '`    std::size_t mid = lo + (hi - lo) / 2;`',
        '`    if (a[mid] < x) lo = mid + 1;`',
        '`    else            hi = mid;`',
        '`}`',
        '`return lo;`',
      ],
      errorLines: [2],
      explanation: 'With a half-open range, $lo = hi$ means "no candidates left", so the loop must stop: the condition is `lo < hi`. With `lo <= hi` the loop runs once more on the empty range. Then `mid = lo`; if `lo == a.size()`, `a[mid]` reads past the end, and if `a[mid] >= x`, `hi = mid` leaves $lo = hi$ unchanged, so it loops forever. Lines 1, 3, 4 and 5 are exactly the half-open recipe. `while (lo <= hi)` belongs to the closed convention, which also uses `hi = n - 1` and `hi = mid - 1`.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'True or false: a loop `while (lo < hi) { mid = lo + (hi - lo) / 2; if (ok(mid)) lo = mid; else hi = mid - 1; }` always terminates.',
      answer: false,
      explanation: 'False. When $hi = lo + 1$, the rounded-down midpoint is $mid = lo$. If `ok(mid)` is true, `lo = mid` changes nothing, and the same iteration repeats forever. The fix is to round up, `mid = lo + (hi - lo + 1) / 2`, so that $mid > lo$ whenever $lo < hi$. Then both updates shrink the range.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Binary search on the answer',
      blocks: [
        {
          type: 'p',
          text: 'The predicate view frees binary search from arrays. Many optimization problems ask for the **smallest value $c$ that works**, and "works" is monotone: if $c$ works, so does every $c\' > c$. Then you can [[dsa-binary-search-answer|binary search over the answer]] itself, calling a feasibility check $O(\\log(\\text{range}))$ times.',
        },
        {
          type: 'p',
          text: 'A logistics example. Supply loads $w_1, \\dots, w_n$ must leave the depot **in order**; each day one truck takes a run of consecutive loads whose total is at most its capacity $c$. What is the smallest capacity that finishes within $D$ days? Checking one capacity is easy: load greedily and count days, $O(n)$. Finding the best capacity directly is not.',
        },
        {
          type: 'derivation',
          title: 'Why the search is valid',
          steps: [
            { tex: '\\text{ok}(c) \\iff \\text{days}(c) \\le D', why: '`days(c)` is the greedy count: keep loading until the next load would exceed $c$, then start a new day. Greedy is optimal for a fixed $c$: loading as much as possible today can only leave less for later days.' },
            { tex: 'c < c\' \\implies \\text{days}(c\') \\le \\text{days}(c)', why: 'A bigger truck can carry every daily load the smaller one carried, so the same plan still works. Hence `ok` is **monotone**: false, …, false, true, …, true.' },
            { tex: '\\text{ok}(\\max w_i - 1) = \\text{false}, \\quad \\text{ok}\\big(\\textstyle\\sum w_i\\big) = \\text{true}', why: 'Below the heaviest load nothing fits; with the total, one day suffices. So the answer lies in $[\\max w_i,\\ \\sum w_i]$.' },
            { tex: 'O\\big(n \\log \\textstyle\\sum w_i\\big)', why: 'Each check is $O(n)$, and binary search over a range of size $R$ needs $\\lceil \\log_2 R \\rceil$ checks.' },
          ],
          result: 'Find the first true of a monotone predicate over the answer space: the same lower-bound loop, with `ok(mid)` in place of `a[mid] >= x`.',
        },
        ALGO.answer,
        {
          type: 'code',
          title: 'answer.cpp',
          runnable: true,
          code: CODE.answer,
          output: OUT.answer,
          annotations: [
            { lines: '8-15', text: 'The feasibility check: one greedy pass, $O(n)$.' },
            { lines: '20-21', text: 'The answer range. These bounds matter: starting at $0$ would make `daysNeeded` loop on loads that never fit.' },
            { lines: '23-28', text: 'The lower-bound loop on a **closed** candidate range $[lo, hi]$: `hi = mid` keeps a feasible `mid` as a candidate, `lo = mid + 1` drops an infeasible one. The loop stops when one candidate is left.' },
            { lines: '41-44', text: '1000 loads totalling about $50\\,000$ tonnes: $15$ checks instead of trying every capacity.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Bisection on real numbers, in games',
          text: 'For a continuous answer, use a fixed number of iterations instead of `lo < hi`: after $k$ halvings the interval shrinks by $2^k$, and $50$–$60$ iterations exhaust `double` precision. Games do this for **time of impact**: if two objects do not overlap at time $t_0$ but do at $t_1$, bisect on $t$ to find (almost) the moment of contact, so a fast bullet does not tunnel through a thin wall. It is the bisection method for $f(x) = 0$ from calculus, with "overlaps at time $t$" as the monotone predicate.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Recognizing it in interviews',
          text: 'The tell-tale phrase is "minimize the maximum" or "maximize the minimum": split an array into $k$ parts minimizing the largest sum, eat bananas at the minimum speed to finish in $h$ hours, place $k$ towers maximizing the minimum distance, smallest divisor with a bounded sum. Ask: "if I *guess* the answer, can I check it quickly, and does a bigger guess stay valid?"',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Loads $5, 1, 4, 2, 6, 3$ (in tonnes, in this order) must ship within $D = 3$ days, each day taking a run of consecutive loads. What is the smallest truck capacity that works?',
      answer: '9',
      unit: 'tonnes',
      hint: 'The answer is in $[6, 21]$. Check capacity $8$ and capacity $9$ with the greedy loader.',
      explanation: 'Capacity $8$: day 1 takes $5 + 1 = 6$ (adding $4$ would make $10$); day 2 takes $4 + 2 = 6$; day 3 takes $6$; day 4 takes $3$. Four days, too many. Capacity $9$: day 1 takes $5 + 1 = 6$; day 2 takes $4 + 2 = 6$; day 3 takes $6 + 3 = 9$. Three days ✓. By monotonicity every capacity below $9$ fails too (each is $\\le 8$), so $9$ is the minimum. A brute force over all ways to cut the list into $3$ runs confirms it: the best split is $[5, 1] \\,|\\, [4, 2] \\,|\\, [6, 3]$ with largest run $9$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'You binary search on the answer over the integers $1, 2, \\dots, 10^9$, using the closed-range loop from `answer.cpp` (`while (lo < hi)`, `hi = mid` or `lo = mid + 1`). In the worst case, how many times is the feasibility check called?',
      answer: '30',
      label: 'checks $=$',
      hint: 'Each check leaves at most $\\lceil k/2 \\rceil$ of $k$ candidates. How many halvings take $10^9$ down to $1$?',
      explanation: 'With $k$ candidates, one check leaves either $\\lceil k/2 \\rceil$ (if `hi = mid`) or $\\lfloor k/2 \\rfloor$ (if `lo = mid + 1`). The worst case keeps $\\lceil k/2 \\rceil$ every time, which takes $\\lceil \\log_2 10^9 \\rceil$ steps to reach $1$. Since $2^{29} \\approx 5.4 \\times 10^8 < 10^9 \\le 2^{30} \\approx 1.07 \\times 10^9$, that is $30$ checks. A simulation over every possible answer agrees. Even a billion candidates cost only $30$ calls to an $O(n)$ check.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Searching a rotated sorted array',
      blocks: [
        {
          type: 'p',
          text: 'A ring buffer, a circular log, or a sorted list someone "rotated" (moved a block from the front to the back) looks like $[15, 18, 22, 27, 31, 2, 5, 8, 11]$: two sorted runs, with one **drop** between them. The array is not sorted, but it still has enough structure for $O(\\log n)$ search, provided the values are distinct.',
        },
        {
          type: 'p',
          text: 'First find the minimum (the start of the second run). The predicate "$a[i] \\le a[n-1]$" is false on the first run and true on the second, so it is monotone, and the minimum is its first true. The loop below expresses that by comparing $a[mid]$ with $a[hi]$.',
        },
        ALGO.rotmin,
        {
          type: 'list',
          items: [
            '**If $a[mid] > a[hi]$:** the values go *down* somewhere between $mid$ and $hi$, so the drop, and the minimum, are to the right: `lo = mid + 1`.',
            '**Otherwise** $a[mid..hi]$ is increasing, so $a[mid]$ beats everything to its right, and the minimum is at $mid$ or to its left: `hi = mid`.',
            'Why compare with $a[hi]$ and not $a[lo]$? If $a[mid] > a[lo]$, the drop could be right of $mid$, or there may be no drop at all (rotation by $0$). The comparison with $a[lo]$ cannot tell these apart; the one with $a[hi]$ can.',
          ],
        },
        {
          type: 'code',
          title: 'rotated.cpp',
          runnable: true,
          code: CODE.rotated,
          output: OUT.rotated,
          annotations: [
            { lines: '9-15', text: 'A closed range $[lo, hi]$ that always contains the minimum. `hi = mid` keeps $mid$ as a candidate; the loop stops when one candidate remains. `a.size() - 1` assumes a non-empty array.' },
            { lines: '20-25', text: 'Once the rotation point $k$ is known, $a[k..n)$ and $a[0..k)$ are each sorted. Decide which piece can hold $x$ by comparing it with that piece\'s ends, then run `std::lower_bound` on it.' },
            { lines: '35-45', text: 'Test every rotation of a sorted array against a linear search, including absent targets. When you write a binary search variant, a brute-force cross-check like this costs five minutes and catches most off-by-ones.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Duplicates break the guarantee',
          text: 'With repeated values, $a[mid] = a[hi]$ says nothing about the side the drop is on: in $[1, 1, 1, 0, 1]$ and $[1, 0, 1, 1, 1]$ the middle and the right end are both $1$. The best you can do is `--hi` in that case, and an array of all-equal values with one smaller element forces $\\Theta(n)$ time. No algorithm can do better: it must look at the cells to find the odd one out.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: '`findMin` runs on $a = [9, 12, 17, 21, 3, 5, 7]$. Put the values it reads as $a[mid]$ in the order it reads them. Two cards are never read as $a[mid]$.',
      lines: ['$21$', '$5$', '$3$'],
      distractors: ['$12$', '$17$'],
      hint: '$lo = 0$, $hi = 6$ to start. Compare each $a[mid]$ with $a[hi]$.',
      explanation: 'Start with $[0, 6]$: $mid = 3$, $a[3] = 21 > a[6] = 7$, so $lo = 4$. Then $[4, 6]$: $mid = 5$, $a[5] = 5 \\le 7$, so $hi = 5$. Then $[4, 5]$: $mid = 4$, $a[4] = 3 \\le a[5] = 5$, so $hi = 4$. Now $lo = hi = 4$ and the minimum is $a[4] = 3$. The probes were $21, 5, 3$: three reads for seven elements, and $12$, $17$ (in the first run) were never needed.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Binary search in the standard library and in engines',
      blocks: [
        {
          type: 'p',
          text: 'In production code you rarely write the loop. You call the standard algorithm, and your job is to give it a correctly sorted range and a matching comparison.',
        },
        {
          type: 'table',
          headers: ['Call', 'Returns', 'Notes'],
          rows: [
            ['`std::lower_bound(first, last, x)`', 'first `it` with `!(*it < x)`', 'needs the range **partitioned** by `x` (sorted is enough)'],
            ['`std::upper_bound(first, last, x)`', 'first `it` with `x < *it`', 'insert here for a stable sorted insert'],
            ['`std::equal_range(first, last, x)`', 'pair of both bounds', 'counting, deleting all copies'],
            ['`std::binary_search(first, last, x)`', '`bool`', 'no position; rarely what you need'],
            ['`std::partition_point(first, last, pred)`', 'first `it` with `!pred(*it)`', 'the general monotone-predicate search'],
            ['`std::ranges::lower_bound(r, x, comp, proj)`', 'iterator', 'C++20: search structs by a member, with no custom comparator'],
          ],
        },
        {
          type: 'p',
          text: 'A game example: an animation track is a vector of keyframes sorted by time. Each frame, for each animated property, you find the two keys around the current time and interpolate. `std::ranges::upper_bound` with the **projection** `&Keyframe::time` finds the first key after $t$; the one before it starts the segment.',
        },
        {
          type: 'code',
          title: 'keyframes.cpp',
          runnable: true,
          code: CODE.keyframes,
          output: OUT.keyframes,
          annotations: [
            { lines: 14, text: '`{}` is the default comparator `std::ranges::less`; `&Keyframe::time` projects each element to its time before comparing. So the search compares `t` with `key.time`.' },
            { lines: '15-16', text: 'Clamp outside the track: before the first key, and at or after the last key.' },
            { lines: '17-19', text: 'Upper bound (not lower bound) guarantees `prev->time <= t < next->time`. At exactly $t = 0.5$ it picks the segment *starting* at that key, so $u = 0$ and the value is that key\'s height.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Three ways to get it silently wrong',
          text: '**1. Comparator mismatch.** If the vector is sorted descending (`std::greater`), pass `std::greater` to the search as well; otherwise the predicate is not monotone and the result is garbage, with no error. **2. Not random access.** `std::lower_bound` on `std::list` or `std::map` iterators does $O(\\log n)$ comparisons but $O(n)$ iterator steps. For a `std::set` or `std::map`, call the member `s.lower_bound(x)`, which walks the tree in $O(\\log n)$. **3. Unsorted after an edit.** Push a new element to the back of a sorted vector and every later search is wrong. Insert at `upper_bound` instead, or re-sort.',
        },
        {
          type: 'deepdive',
          title: 'Binary search and the cache',
          blocks: [
            {
              type: 'p',
              text: 'On a large sorted array, each probe of binary search is a likely **cache miss**: the first probes jump millions of bytes apart. Searching $10^7$ integers costs about $24$ probes, but those probes can cost more than a hundred nanoseconds each in memory latency, while a linear scan of $64$ integers fits in four cache lines and is often faster than binary searching them.',
            },
            {
              type: 'list',
              items: [
                '**Small arrays:** below roughly $32$–$64$ elements, a linear scan wins in practice (no unpredictable branches, perfect prefetching). Measure for your data.',
                '**Branchless binary search:** replace the `if` with a conditional move (`lo = cond ? mid + 1 : lo`), so the CPU never mispredicts. It does a fixed $\\lceil \\log_2 (n+1) \\rceil$ iterations.',
                '**Eytzinger layout:** store the sorted values in BFS order of a perfectly balanced tree (children of slot $k$ at $2k$ and $2k+1$). The first few levels share cache lines and the next probes can be prefetched. Search speed can improve severalfold for large arrays.',
                '**Static data in games:** sorted vectors with binary search (sometimes called "flat maps") beat node-based trees for data that is built once and queried every frame, such as string-hash-to-asset tables loaded at level start.',
              ],
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'A `std::map<int, Entity> byId` holds $10^6$ entities. You need the first entity whose id is $\\ge 5000$. Which call is right?',
      codeOptions: true,
      options: [
        { text: 'std::lower_bound(byId.begin(), byId.end(), 5000, cmpKey)', why: 'It gives the right answer, but `std::map` iterators are bidirectional, not random access. Each "jump to the middle" walks node by node: $O(\\log n)$ comparisons but $O(n)$ steps.' },
        { text: 'byId.lower_bound(5000)', correct: true, why: 'The member function walks down the balanced tree, $O(\\log n)$ in total. Associative containers provide member `lower_bound`, `upper_bound`, `equal_range` and `find` for exactly this reason.' },
        { text: 'byId.find(5000)', why: '`find` only returns an exact match (or `end()`). If no entity has id $5000$, you get `end()`, not the next id.' },
        { text: 'std::binary_search(byId.begin(), byId.end(), 5000)', why: 'Returns only a `bool`, and has the same $O(n)$-steps problem as `std::lower_bound` on map iterators.' },
      ],
      explanation: 'The generic algorithms in `<algorithm>` assume random-access iterators for their $O(\\log n)$ guarantee on running time; on a `std::map` they still do $O(\\log n)$ *comparisons*, but advancing an iterator to the middle costs $O(n)$. Tree-based containers know their own shape, so their member `lower_bound` follows one root-to-leaf path. You will build such trees in the next unit.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'A replay system stores input events in a vector sorted by frame number, possibly several events per frame. To fetch **all events of frame $f$**, which approach is correct and $O(\\log n + k)$ for $k$ matching events?',
      options: [
        { text: 'Binary search until you hit any event with frame $f$, then iterate forward while the frame is still $f$', why: 'The "stop when equal" search lands on an *arbitrary* event of frame $f$, often in the middle of the run, so the events before it are missed.' },
        { text: '`std::equal_range` with a comparator on the frame number, then iterate over the returned range', correct: true, why: 'Two binary searches find both ends of the run of frame $f$, $O(\\log n)$, then you touch exactly the $k$ events.' },
        { text: '`std::lower_bound` for $f$ and iterate until the end of the vector', why: 'This also returns events from every later frame. You need the upper end of the run too.' },
        { text: '`std::binary_search` for $f$, then `std::find_if` from the beginning', why: '`binary_search` gives only a `bool`; `find_if` from the start is a linear scan, $O(n)$.' },
      ],
      explanation: 'The events of frame $f$ form a contiguous run $[\\text{lower}(f), \\text{upper}(f))$ in the sorted vector. `std::equal_range` returns exactly that pair in $O(\\log n)$, and iterating it costs $O(k)$. With C++20 ranges you can write `std::ranges::equal_range(events, f, {}, &Event::frame)` using a projection instead of a comparator.',
    },
  ],
  takeaways: [
    'Write the invariant first. For the lower bound on $[lo, hi)$: $a[0..lo) < x$ and $a[hi..n) \\ge x$; then `lo = mid + 1` / `hi = mid`, loop while `lo < hi`, and the answer is $lo$.',
    '`lower_bound` finds the first $a[i] \\ge x$, `upper_bound` the first $a[i] > x$; their difference counts $x$, and presence needs `lower < n && a[lower] == x`.',
    'Use `lo + (hi - lo) / 2` or `std::midpoint`; never mix half-open and closed conventions; `lo = mid` requires a midpoint rounded up.',
    'Binary search finds the first true of any monotone predicate, so "smallest capacity that works" problems cost $O(\\text{check} \\times \\log \\text{range})$.',
    'A rotated sorted array of distinct values is searched in $O(\\log n)$ by comparing $a[mid]$ with $a[hi]$; duplicates force $\\Theta(n)$ in the worst case.',
    'Prefer `std::lower_bound`/`std::equal_range`/`std::ranges::*_bound` with projections on vectors, and member `lower_bound` on `std::set`/`std::map`.',
  ],
  reading: [
    { title: 'Jeff Erickson, Algorithms', url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/', source: 'book', note: 'Free textbook; its chapters on recursion and the appendix on proofs by induction show the invariant style of reasoning used here.' },
    { title: 'Sedgewick & Wayne, Algorithms (4th ed.)', url: 'https://algs4.cs.princeton.edu/home/', source: 'book', note: 'Section 3.1 implements ordered symbol tables with binary search in a sorted array, including rank, floor and ceiling.' },
    { title: 'cppreference: std::lower_bound', url: 'https://en.cppreference.com/w/cpp/algorithm/lower_bound', source: 'other', note: 'The exact requirements (a partitioned range, not necessarily sorted) and complexity guarantees, with links to `upper_bound`, `equal_range` and the ranges versions.' },
    { title: 'Binary search algorithm (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Binary_search_algorithm', source: 'wikipedia', note: 'Variants for leftmost and rightmost elements, the history of buggy implementations, and cache-friendly layouts.' },
  ],
};
