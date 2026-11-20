import type { AlgoBlock, Lesson } from '../../types';

// ---- generated: figures, runnable examples and animation frames ----
const FIG: Record<string, string> = {
  "prefix": `<svg viewBox="0 0 520 186" xmlns="http://www.w3.org/2000/svg"><text x="30.0" y="61.0" text-anchor="end" font-size="14" font-style="italic">a</text><rect x="41.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="62.0" y="61.0" text-anchor="middle" font-size="14">4</text><text x="62.0" y="34" text-anchor="middle" font-size="10" class="t-gray">0</text><rect x="85.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="106.0" y="61.0" text-anchor="middle" font-size="14">0</text><text x="106.0" y="34" text-anchor="middle" font-size="10" class="t-gray">1</text><rect x="129.5" y="40" width="41" height="32" rx="5" fill="currentColor" fill-opacity="0.15" class="f-blue"/><rect x="129.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/><text x="150.0" y="61.0" text-anchor="middle" font-size="14">7</text><text x="150.0" y="34" text-anchor="middle" font-size="10" class="t-gray">2</text><rect x="173.5" y="40" width="41" height="32" rx="5" fill="currentColor" fill-opacity="0.15" class="f-blue"/><rect x="173.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/><text x="194.0" y="61.0" text-anchor="middle" font-size="14">3</text><text x="194.0" y="34" text-anchor="middle" font-size="10" class="t-gray">3</text><rect x="217.5" y="40" width="41" height="32" rx="5" fill="currentColor" fill-opacity="0.15" class="f-blue"/><rect x="217.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/><text x="238.0" y="61.0" text-anchor="middle" font-size="14">3</text><text x="238.0" y="34" text-anchor="middle" font-size="10" class="t-gray">4</text><rect x="261.5" y="40" width="41" height="32" rx="5" fill="currentColor" fill-opacity="0.15" class="f-blue"/><rect x="261.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" class="s-blue"/><text x="282.0" y="61.0" text-anchor="middle" font-size="14">9</text><text x="282.0" y="34" text-anchor="middle" font-size="10" class="t-gray">5</text><rect x="305.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="326.0" y="61.0" text-anchor="middle" font-size="14">1</text><text x="326.0" y="34" text-anchor="middle" font-size="10" class="t-gray">6</text><rect x="349.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="370.0" y="61.0" text-anchor="middle" font-size="14">0</text><text x="370.0" y="34" text-anchor="middle" font-size="10" class="t-gray">7</text><rect x="393.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="414.0" y="61.0" text-anchor="middle" font-size="14">5</text><text x="414.0" y="34" text-anchor="middle" font-size="10" class="t-gray">8</text><rect x="437.5" y="40" width="41" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="458.0" y="61.0" text-anchor="middle" font-size="14">6</text><text x="458.0" y="34" text-anchor="middle" font-size="10" class="t-gray">9</text><text x="30.0" y="129" text-anchor="end" font-size="14" font-style="italic">P</text><line x1="40.0" y1="76" x2="40.0" y2="108" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="s-gray"/><text x="40.0" y="129" text-anchor="middle" font-size="14" font-weight="normal">0</text><text x="40.0" y="146" text-anchor="middle" font-size="10" class="t-gray">0</text><line x1="84.0" y1="76" x2="84.0" y2="108" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="s-gray"/><text x="84.0" y="129" text-anchor="middle" font-size="14" font-weight="normal">4</text><text x="84.0" y="146" text-anchor="middle" font-size="10" class="t-gray">1</text><line x1="128.0" y1="76" x2="128.0" y2="108" stroke="currentColor" stroke-width="1.8" stroke-dasharray="none" class="s-red"/><text x="128.0" y="129" text-anchor="middle" font-size="14" class="t-red" font-weight="bold">4</text><text x="128.0" y="146" text-anchor="middle" font-size="10" class="t-gray">2</text><line x1="172.0" y1="76" x2="172.0" y2="108" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="s-gray"/><text x="172.0" y="129" text-anchor="middle" font-size="14" font-weight="normal">11</text><text x="172.0" y="146" text-anchor="middle" font-size="10" class="t-gray">3</text><line x1="216.0" y1="76" x2="216.0" y2="108" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="s-gray"/><text x="216.0" y="129" text-anchor="middle" font-size="14" font-weight="normal">14</text><text x="216.0" y="146" text-anchor="middle" font-size="10" class="t-gray">4</text><line x1="260.0" y1="76" x2="260.0" y2="108" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="s-gray"/><text x="260.0" y="129" text-anchor="middle" font-size="14" font-weight="normal">17</text><text x="260.0" y="146" text-anchor="middle" font-size="10" class="t-gray">5</text><line x1="304.0" y1="76" x2="304.0" y2="108" stroke="currentColor" stroke-width="1.8" stroke-dasharray="none" class="s-green"/><text x="304.0" y="129" text-anchor="middle" font-size="14" class="t-green" font-weight="bold">26</text><text x="304.0" y="146" text-anchor="middle" font-size="10" class="t-gray">6</text><line x1="348.0" y1="76" x2="348.0" y2="108" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="s-gray"/><text x="348.0" y="129" text-anchor="middle" font-size="14" font-weight="normal">27</text><text x="348.0" y="146" text-anchor="middle" font-size="10" class="t-gray">7</text><line x1="392.0" y1="76" x2="392.0" y2="108" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="s-gray"/><text x="392.0" y="129" text-anchor="middle" font-size="14" font-weight="normal">27</text><text x="392.0" y="146" text-anchor="middle" font-size="10" class="t-gray">8</text><line x1="436.0" y1="76" x2="436.0" y2="108" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="s-gray"/><text x="436.0" y="129" text-anchor="middle" font-size="14" font-weight="normal">32</text><text x="436.0" y="146" text-anchor="middle" font-size="10" class="t-gray">9</text><line x1="480.0" y1="76" x2="480.0" y2="108" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="s-gray"/><text x="480.0" y="129" text-anchor="middle" font-size="14" font-weight="normal">38</text><text x="480.0" y="146" text-anchor="middle" font-size="10" class="t-gray">10</text><text x="260.0" y="170" text-anchor="middle" font-size="14">sum of a[2..6) = 7 + 3 + 3 + 9 = <tspan class="t-green">P[6]</tspan> − <tspan class="t-red">P[2]</tspan> = 26 − 4 = 22</text></svg>`,
  "sat": `<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="30" width="204" height="170" fill="currentColor" fill-opacity="0.22" class="f-gray"/><rect x="90" y="30" width="204" height="68" fill="currentColor" fill-opacity="0.16" class="f-red"/><rect x="90" y="30" width="102" height="170" fill="currentColor" fill-opacity="0.16" class="f-red"/><rect x="192" y="98" width="102" height="102" fill="currentColor" fill-opacity="0.3" class="f-blue"/><line x1="90" y1="30" x2="328" y2="30" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="90" y1="64" x2="328" y2="64" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="90" y1="98" x2="328" y2="98" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="90" y1="132" x2="328" y2="132" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="90" y1="166" x2="328" y2="166" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="90" y1="200" x2="328" y2="200" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="90" y1="234" x2="328" y2="234" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="90" y1="30" x2="90" y2="234" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="124" y1="30" x2="124" y2="234" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="158" y1="30" x2="158" y2="234" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="192" y1="30" x2="192" y2="234" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="226" y1="30" x2="226" y2="234" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="260" y1="30" x2="260" y2="234" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="294" y1="30" x2="294" y2="234" stroke="currentColor" stroke-width="0.6" class="s-gray"/><line x1="328" y1="30" x2="328" y2="234" stroke="currentColor" stroke-width="0.6" class="s-gray"/><rect x="192" y="98" width="102" height="102" fill="none" stroke="currentColor" stroke-width="2.5" class="s-blue"/><text x="243.0" y="154.0" text-anchor="middle" font-size="14" class="t-blue" font-weight="bold">query</text><circle cx="294" cy="200" r="5" fill="currentColor" class="f-green"/><text x="302" y="218" text-anchor="start" font-size="13" class="t-green">+S[r₁][c₁]</text><circle cx="294" cy="98" r="5" fill="currentColor" class="f-red"/><text x="302" y="92" text-anchor="start" font-size="13" class="t-red">−S[r₀][c₁]</text><circle cx="192" cy="200" r="5" fill="currentColor" class="f-red"/><text x="186" y="220" text-anchor="end" font-size="13" class="t-red">−S[r₁][c₀]</text><circle cx="192" cy="98" r="5" fill="currentColor" class="f-purple"/><text x="186" y="90" text-anchor="end" font-size="13" class="t-purple">+S[r₀][c₀]</text><text x="84" y="20" text-anchor="start" font-size="11" class="t-gray">(0, 0)</text></svg>`,
};
const CODE: Record<string, string> = {
  "deque": `#include <algorithm>
#include <cstdio>
#include <deque>
#include <random>
#include <vector>

// Maximum of every window a[r-k+1 .. r], for r = k-1 .. n-1.
// The deque holds indices; their values strictly decrease from front to back.
std::vector<int> windowMax(const std::vector<int>& a, int k, long long& ops) {
    std::deque<int> dq;
    std::vector<int> out;
    for (int r = 0; r < (int)a.size(); ++r) {
        if (!dq.empty() && dq.front() <= r - k) { dq.pop_front(); ++ops; }  // fell out of the window
        while (!dq.empty() && a[dq.back()] <= a[r]) { dq.pop_back(); ++ops; } // dominated by a[r]
        dq.push_back(r); ++ops;
        if (r >= k - 1) out.push_back(a[dq.front()]);
    }
    return out;
}

int main() {
    long long ops = 0;
    std::vector<int> small = {1, 3, -1, -3, 5, 3, 6, 7};
    std::printf("maxima:");
    for (int m : windowMax(small, 3, ops)) std::printf(" %d", m);
    std::printf("\\n");

    // Worst network ping over the last 64 ticks, for a million ticks.
    std::mt19937 rng(2024);
    std::vector<int> ping(1'000'000);
    for (int& p : ping) p = 20 + int(rng() % 200);
    ops = 0;
    std::vector<int> worst = windowMax(ping, 64, ops);
    std::printf("windows: %zu, deque operations: %lld (%.2f per element)\\n",
                worst.size(), ops, double(ops) / ping.size());

    // Spot-check against the O(nk) definition.
    int bad = 0;
    for (std::size_t r = 63; r < ping.size(); r += 9973)
        bad += worst[r - 63] != *std::max_element(ping.begin() + (r - 63), ping.begin() + r + 1);
    std::printf("spot-check mismatches: %d\\n", bad);
}`,
  "diff": `#include <cstdio>
#include <vector>

struct Shift { int start, end; };   // on duty for hours [start, end)

int main() {
    // Guard roster for one day (hours 0..23).
    std::vector<Shift> roster = {{0, 8}, {6, 14}, {8, 16}, {12, 20}, {16, 24}, {20, 24}, {22, 24}};

    // Difference array: one +1 where a shift starts, one -1 where it ends.
    std::vector<int> d(25, 0);                    // one extra slot for end = 24
    for (auto [s, e] : roster) { d[s] += 1; d[e] -= 1; }

    // A prefix sum turns the differences back into head counts.
    std::vector<int> onDuty(24);
    int running = 0;
    for (int h = 0; h < 24; ++h) { running += d[h]; onDuty[h] = running; }

    std::printf("hour:  ");
    for (int h = 0; h < 24; ++h) std::printf("%3d", h);
    std::printf("\\nguards:");
    for (int h = 0; h < 24; ++h) std::printf("%3d", onDuty[h]);
    std::printf("\\nhours with fewer than 2 guards:");
    for (int h = 0; h < 24; ++h) if (onDuty[h] < 2) std::printf(" %d", h);
    std::printf("\\n");
}`,
  "floyd": `#include <cstdio>
#include <vector>

// A "list" stored as indices: next[v] is the node after v (-1 = end).
// Pools of nodes addressed by index are common in engines; the algorithm is
// identical for Node* pointers.
struct CycleInfo { bool hasCycle; int start; int length; };

CycleInfo floyd(const std::vector<int>& next, int head) {
    int slow = head, fast = head;
    while (fast != -1 && next[fast] != -1) {
        slow = next[slow];
        fast = next[next[fast]];
        if (slow == fast) {                       // phase 1: they met inside the cycle
            slow = head;                          // phase 2: find where the cycle starts
            while (slow != fast) { slow = next[slow]; fast = next[fast]; }
            int len = 1;                          // phase 3: walk once around it
            for (int v = next[slow]; v != slow; v = next[v]) ++len;
            return {true, slow, len};
        }
    }
    return {false, -1, 0};                        // fast fell off the end: no cycle
}

// Middle node of an acyclic list: when fast reaches the end, slow is halfway.
int middle(const std::vector<int>& next, int head) {
    int slow = head, fast = head;
    while (fast != -1 && next[fast] != -1) { slow = next[slow]; fast = next[next[fast]]; }
    return slow;
}

int main() {
    std::vector<int> withCycle = {1, 2, 3, 4, 5, 6, 7, 3};    // 7 -> 3 closes a 5-cycle
    std::vector<int> plain     = {1, 2, 3, 4, 5, 6, 7, -1};
    for (auto* list : {&withCycle, &plain}) {
        CycleInfo c = floyd(*list, 0);
        if (c.hasCycle) std::printf("cycle starts at node %d, length %d\\n", c.start, c.length);
        else            std::printf("no cycle; middle node is %d\\n", middle(*list, 0));
    }
}`,
  "prefix": `#include <cstdio>
#include <numeric>
#include <unordered_map>
#include <vector>

int main() {
    // Damage dealt per second during a 10-second boss fight.
    std::vector<int> dmg = {4, 0, 7, 3, 3, 9, 1, 0, 5, 6};
    const std::size_t n = dmg.size();

    // P[i] = dmg[0] + ... + dmg[i-1], with P[0] = 0 (one longer than the data).
    std::vector<long long> P(n + 1, 0);
    std::partial_sum(dmg.begin(), dmg.end(), P.begin() + 1);

    auto rangeSum = [&](std::size_t l, std::size_t r) { return P[r] - P[l]; };  // [l, r)
    std::printf("damage in seconds [2, 6): %lld\\n", rangeSum(2, 6));
    std::printf("damage in seconds [0, 10): %lld\\n", rangeSum(0, 10));

    // How many runs of consecutive seconds dealt exactly 6 damage?
    // A run [l, r) qualifies iff P[r] - P[l] == 6, i.e. P[l] == P[r] - 6.
    // Count earlier prefix values in a hash map as r sweeps right: O(n).
    const long long k = 6;
    std::unordered_map<long long, int> seen{{0, 1}};   // P[0] = 0 has been seen once
    long long count = 0;
    for (std::size_t r = 1; r <= n; ++r) {
        auto it = seen.find(P[r] - k);
        if (it != seen.end()) count += it->second;
        ++seen[P[r]];
    }

    long long brute = 0;   // O(n^2) check over every [l, r)
    for (std::size_t l = 0; l < n; ++l)
        for (std::size_t r = l + 1; r <= n; ++r) brute += (rangeSum(l, r) == k);
    std::printf("runs summing to %lld: %lld (brute force: %lld)\\n", k, count, brute);
}`,
  "sat": `#include <cstdio>
#include <vector>

// Summed-area table: S[i][j] = sum of g[0..i)[0..j), one row and column larger than g.
struct SummedArea {
    int rows, cols;
    std::vector<long long> S;   // (rows + 1) x (cols + 1), row-major
    long long& at(int i, int j) { return S[i * (cols + 1) + j]; }

    explicit SummedArea(const std::vector<std::vector<int>>& g)
        : rows((int)g.size()), cols((int)g[0].size()), S((rows + 1) * (cols + 1), 0) {
        for (int i = 0; i < rows; ++i)
            for (int j = 0; j < cols; ++j)
                at(i + 1, j + 1) = g[i][j] + at(i, j + 1) + at(i + 1, j) - at(i, j);
    }
    // Sum of rows [r0, r1) and columns [c0, c1): four lookups, any size.
    long long sum(int r0, int c0, int r1, int c1) {
        return at(r1, c1) - at(r0, c1) - at(r1, c0) + at(r0, c0);
    }
};

int main() {
    // Enemy "threat" per tile of a small map.
    std::vector<std::vector<int>> g = {
        {1, 0, 2, 0, 1},
        {0, 3, 1, 0, 0},
        {2, 1, 4, 2, 0},
        {0, 0, 1, 5, 2},
    };
    SummedArea sat(g);
    for (int i = 0; i <= 4; ++i) {
        for (int j = 0; j <= 5; ++j) std::printf("%3lld", sat.at(i, j));
        std::printf("\\n");
    }
    // Threat inside the 2x3 block of rows 1-2, columns 1-3:
    std::printf("rows [1,3) x cols [1,4): %lld\\n", sat.sum(1, 1, 3, 4));

    // Brute-force check of every rectangle.
    int bad = 0, rects = 0;
    for (int r0 = 0; r0 < 4; ++r0) for (int r1 = r0 + 1; r1 <= 4; ++r1)
        for (int c0 = 0; c0 < 5; ++c0) for (int c1 = c0 + 1; c1 <= 5; ++c1) {
            long long s = 0;
            for (int i = r0; i < r1; ++i) for (int j = c0; j < c1; ++j) s += g[i][j];
            bad += (s != sat.sum(r0, c0, r1, c1));
            ++rects;
        }
    std::printf("%d rectangles checked, %d mismatches\\n", rects, bad);
}`,
  "twopointers": `#include <algorithm>
#include <cstdio>
#include <string>
#include <vector>

// All pairs i < j with a[i] + a[j] == target in a sorted array of distinct values.
// Invariant: every pair that uses an index outside [i, j] has been examined.
std::vector<std::pair<int, int>> pairsWithSum(const std::vector<int>& a, int target) {
    std::vector<std::pair<int, int>> out;
    int i = 0, j = static_cast<int>(a.size()) - 1;
    while (i < j) {
        int s = a[i] + a[j];
        if (s == target)    out.push_back({a[i++], a[j--]});
        else if (s < target) ++i;   // a[i] is too small even with the largest partner
        else                 --j;   // a[j] is too big even with the smallest partner
    }
    return out;
}

struct Entity {
    std::string name;
    int hp;
};

// Same-direction pointers: keep the live entities, in order, in place.
// [0, write) holds the survivors so far; read scans everything once.
void compactAlive(std::vector<Entity>& es) {
    std::size_t write = 0;
    for (std::size_t read = 0; read < es.size(); ++read)
        if (es[read].hp > 0) {
            if (write != read) es[write] = std::move(es[read]);
            ++write;
        }
    es.resize(write);   // drop the moved-from tail
}

int main() {
    std::vector<int> a = {1, 3, 4, 6, 8, 11, 14, 17};
    for (int t : {22, 20, 100}) {
        std::printf("target %3d:", t);
        for (auto [x, y] : pairsWithSum(a, t)) std::printf(" (%d, %d)", x, y);
        std::printf("\\n");
    }

    std::vector<Entity> es = {{"grunt", 0}, {"sniper", 40}, {"medic", 0}, {"tank", 250}, {"drone", 5}};
    std::vector<Entity> copy = es;
    compactAlive(es);
    std::erase_if(copy, [](const Entity& e) { return e.hp <= 0; });   // C++20: the same algorithm
    std::printf("alive:");
    for (const auto& e : es) std::printf(" %s", e.name.c_str());
    bool same = std::ranges::equal(es, copy, {}, &Entity::name, &Entity::name);
    std::printf("\\nstd::erase_if agrees: %s\\n", same ? "yes" : "no");
}`,
  "window": `#include <algorithm>
#include <climits>
#include <cstdio>
#include <string>
#include <vector>

// Fixed window: average of the last k frame times, updated in O(1) per frame.
std::vector<double> rollingAverage(const std::vector<int>& ms, int k) {
    std::vector<double> out;
    int sum = 0;
    for (int r = 0; r < (int)ms.size(); ++r) {
        sum += ms[r];                    // ms[r] enters the window
        if (r >= k) sum -= ms[r - k];    // ms[r - k] leaves it
        if (r >= k - 1) out.push_back(double(sum) / k);
    }
    return out;
}

// Variable window: length of the shortest run with sum >= S (all values > 0).
int shortestAtLeast(const std::vector<int>& a, int S) {
    int best = INT_MAX, sum = 0, l = 0;
    for (int r = 0; r < (int)a.size(); ++r) {
        sum += a[r];
        while (sum >= S) {               // valid: record it, then try a shorter one
            best = std::min(best, r - l + 1);
            sum -= a[l++];
        }
    }
    return best == INT_MAX ? 0 : best;
}

// Variable window: longest substring with no repeated character.
int longestDistinct(const std::string& s) {
    std::vector<int> count(256, 0);
    int best = 0, l = 0;
    for (int r = 0; r < (int)s.size(); ++r) {
        unsigned char c = s[r];
        ++count[c];
        while (count[c] > 1) --count[(unsigned char)s[l++]];  // shrink until valid again
        best = std::max(best, r - l + 1);
    }
    return best;
}

int main() {
    std::vector<int> frameMs = {16, 17, 16, 33, 16, 17, 50, 16, 16, 17};
    std::printf("4-frame averages:");
    for (double avg : rollingAverage(frameMs, 4)) std::printf(" %.2f", avg);
    std::printf("\\n");

    std::printf("shortest sum >= 7 in {2,3,1,2,4,3}: %d\\n", shortestAtLeast({2, 3, 1, 2, 4, 3}, 7));
    std::printf("shortest sum >= 15 in {1,2,3,4,5}: %d\\n", shortestAtLeast({1, 2, 3, 4, 5}, 15));
    for (std::string s : {"abcabcbb", "pwwkew", "tactical"})
        std::printf("longest distinct run in \\"%s\\": %d\\n", s.c_str(), longestDistinct(s));
}`,
};
const OUT: Record<string, string> = {
  "deque": `maxima: 3 3 5 5 6 7
windows: 999937, deque operations: 1999993 (2.00 per element)
spot-check mismatches: 0`,
  "diff": `hour:    0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
guards:  1  1  1  1  1  1  2  2  2  2  2  2  3  3  2  2  2  2  2  2  2  2  3  3
hours with fewer than 2 guards: 0 1 2 3 4 5`,
  "floyd": `cycle starts at node 3, length 5
no cycle; middle node is 4`,
  "prefix": `damage in seconds [2, 6): 22
damage in seconds [0, 10): 38
runs summing to 6: 3 (brute force: 3)`,
  "sat": `  0  0  0  0  0  0
  0  1  1  3  3  4
  0  1  4  7  7  8
  0  3  7 14 16 17
  0  3  7 15 22 25
rows [1,3) x cols [1,4): 11
150 rectangles checked, 0 mismatches`,
  "twopointers": `target  22: (8, 14)
target  20: (3, 17) (6, 14)
target 100:
alive: sniper tank drone
std::erase_if agrees: yes`,
  "window": `4-frame averages: 20.50 20.50 20.50 29.00 24.75 24.75 24.75
shortest sum >= 7 in {2,3,1,2,4,3}: 2
shortest sum >= 15 in {1,2,3,4,5}: 5
longest distinct run in "abcabcbb": 3
longest distinct run in "pwwkew": 3
longest distinct run in "tactical": 5`,
};
const ALGO: Record<string, AlgoBlock> = {
  "deque": {"type": "algo", "view": "array", "code": "std::deque<int> dq;  // indices\nfor (int r = 0; r < n; ++r) {\n    if (!dq.empty() && dq.front() <= r - k)\n        dq.pop_front();\n    while (!dq.empty() && a[dq.back()] <= a[r])\n        dq.pop_back();\n    dq.push_back(r);\n    if (r >= k - 1)\n        out.push_back(a[dq.front()]);\n}", "interval": 1300, "caption": "Sliding-window maximum with a monotonic deque. Purple: indices in the deque; green: its front, the current maximum; red: popped from the back.", "frames": [{"note": "Maximum of every window of $k = 3$ consecutive elements. The deque holds indices whose values decrease from front to back.", "array": [1, 3, -1, -3, 5, 3, 6, 7], "lines": [1], "vars": [["deque (values)", "—"], ["maxima", "—"]]}, {"note": "Read $a[0] = 1$: push it.", "marks": [{"index": 0, "color": "purple"}], "dim": [1, 2, 3, 4, 5, 6, 7], "pointers": [{"index": 0, "label": "r"}], "lines": [7], "vars": [["deque (values)", "1"], ["maxima", "—"]]}, {"note": "Read $a[1] = 3$: pop $1$ from the back: $\\le 3$, so never a maximum again; push it.", "marks": [{"index": 1, "color": "purple"}, {"index": 0, "color": "red"}], "dim": [2, 3, 4, 5, 6, 7], "pointers": [{"index": 1, "label": "r"}], "lines": [5, 6, 7], "vars": [["deque (values)", "3"], ["maxima", "—"]]}, {"note": "Read $a[2] = -1$: push it. Window max $= a[1] = 3$.", "marks": [{"index": 2, "color": "purple"}, {"index": 1, "color": "green"}, {"index": 2, "color": "orange"}], "dim": [3, 4, 5, 6, 7], "pointers": [{"index": 0, "label": "l", "color": "blue"}, {"index": 2, "label": "r"}], "lines": [7, 8, 9], "vars": [["deque (values)", "3, -1"], ["maxima", "3"]]}, {"note": "Read $a[3] = -3$: push it. Window max $= a[1] = 3$.", "marks": [{"index": 2, "color": "purple"}, {"index": 3, "color": "purple"}, {"index": 1, "color": "green"}, {"index": 3, "color": "orange"}], "dim": [0, 4, 5, 6, 7], "pointers": [{"index": 1, "label": "l", "color": "blue"}, {"index": 3, "label": "r"}], "lines": [7, 8, 9], "vars": [["deque (values)", "3, -1, -3"], ["maxima", "3, 3"]]}, {"note": "Read $a[4] = 5$: index $1$ left the window (front pop); pop $-3$, $-1$ from the back: $\\le 5$, so never a maximum again; push it. Window max $= a[4] = 5$.", "marks": [{"index": 4, "color": "green"}, {"index": 3, "color": "red"}, {"index": 2, "color": "red"}], "dim": [0, 1, 5, 6, 7], "pointers": [{"index": 2, "label": "l", "color": "blue"}, {"index": 4, "label": "r"}], "lines": [3, 4, 5, 6, 7, 8, 9], "vars": [["deque (values)", "5"], ["maxima", "3, 3, 5"]]}, {"note": "Read $a[5] = 3$: push it. Window max $= a[4] = 5$.", "marks": [{"index": 5, "color": "purple"}, {"index": 4, "color": "green"}, {"index": 5, "color": "orange"}], "dim": [0, 1, 2, 6, 7], "pointers": [{"index": 3, "label": "l", "color": "blue"}, {"index": 5, "label": "r"}], "lines": [7, 8, 9], "vars": [["deque (values)", "5, 3"], ["maxima", "3, 3, 5, 5"]]}, {"note": "Read $a[6] = 6$: pop $3$, $5$ from the back: $\\le 6$, so never a maximum again; push it. Window max $= a[6] = 6$.", "marks": [{"index": 6, "color": "green"}, {"index": 5, "color": "red"}, {"index": 4, "color": "red"}], "dim": [0, 1, 2, 3, 7], "pointers": [{"index": 4, "label": "l", "color": "blue"}, {"index": 6, "label": "r"}], "lines": [5, 6, 7, 8, 9], "vars": [["deque (values)", "6"], ["maxima", "3, 3, 5, 5, 6"]]}, {"note": "Read $a[7] = 7$: pop $6$ from the back: $\\le 7$, so never a maximum again; push it. Window max $= a[7] = 7$.", "marks": [{"index": 7, "color": "green"}, {"index": 6, "color": "red"}], "dim": [0, 1, 2, 3, 4], "pointers": [{"index": 5, "label": "l", "color": "blue"}, {"index": 7, "label": "r"}], "lines": [5, 6, 7, 8, 9], "vars": [["deque (values)", "7"], ["maxima", "3, 3, 5, 5, 6, 7"]]}, {"note": "Done: maxima $3, 3, 5, 5, 6, 7$. Each index was pushed once and popped at most once: $O(n)$ total.", "lines": [2], "vars": [["maxima", "3, 3, 5, 5, 6, 7"]]}]},
  "floyd": {"type": "algo", "view": "graph", "nodes": [{"id": "0", "x": 40, "y": 120}, {"id": "1", "x": 100, "y": 120}, {"id": "2", "x": 160, "y": 120}, {"id": "3", "x": 222, "y": 120}, {"id": "4", "x": 276, "y": 194}, {"id": "5", "x": 363, "y": 166}, {"id": "6", "x": 363, "y": 74}, {"id": "7", "x": 276, "y": 46}], "edges": [{"from": "0", "to": "1", "directed": true}, {"from": "1", "to": "2", "directed": true}, {"from": "2", "to": "3", "directed": true}, {"from": "3", "to": "4", "directed": true}, {"from": "4", "to": "5", "directed": true}, {"from": "5", "to": "6", "directed": true}, {"from": "6", "to": "7", "directed": true}, {"from": "7", "to": "3", "directed": true}], "width": 420, "height": 240, "code": "Node* slow = head; Node* fast = head;\ndo {\n    slow = slow->next;\n    fast = fast->next->next;\n} while (slow != fast);\nslow = head;\nwhile (slow != fast) {\n    slow = slow->next;\n    fast = fast->next;\n}\nreturn slow;", "interval": 1100, "caption": "Floyd's tortoise and hare on a list whose last node points back into the middle. $O(\\mu + \\lambda)$ time, $O(1)$ memory.", "frames": [{"note": "Both pointers start at the head. The list has a tail of $3$ nodes, then a cycle of $5$ (but the algorithm does not know that).", "nodeColors": [{"id": "0", "color": "green"}], "nodeNotes": [{"id": "0", "text": "slow, fast"}], "lines": [1], "vars": [["phase", "1"], ["slow steps", "0"]]}, {"note": "Slow moves $1$ step to node $1$, fast moves $2$ steps to node $2$.", "nodeColors": [{"id": "1", "color": "orange"}, {"id": "2", "color": "blue"}], "nodeNotes": [{"id": "1", "text": "slow"}, {"id": "2", "text": "fast"}], "lines": [3, 4], "vars": [["phase", "1"], ["slow steps", "1"]]}, {"note": "Slow moves $1$ step to node $2$, fast moves $2$ steps to node $4$.", "nodeColors": [{"id": "2", "color": "orange"}, {"id": "4", "color": "blue"}], "nodeNotes": [{"id": "2", "text": "slow"}, {"id": "4", "text": "fast"}], "lines": [3, 4], "vars": [["phase", "1"], ["slow steps", "2"]]}, {"note": "Slow moves $1$ step to node $3$, fast moves $2$ steps to node $6$. Inside the cycle, fast gains one node on slow per step.", "nodeColors": [{"id": "3", "color": "orange"}, {"id": "6", "color": "blue"}], "nodeNotes": [{"id": "3", "text": "slow"}, {"id": "6", "text": "fast"}], "lines": [3, 4], "vars": [["phase", "1"], ["slow steps", "3"]]}, {"note": "Slow moves $1$ step to node $4$, fast moves $2$ steps to node $3$.", "nodeColors": [{"id": "4", "color": "orange"}, {"id": "3", "color": "blue"}], "nodeNotes": [{"id": "4", "text": "slow"}, {"id": "3", "text": "fast"}], "lines": [3, 4], "vars": [["phase", "1"], ["slow steps", "4"]]}, {"note": "After $5$ steps they meet at node $5$. A meeting proves there is a cycle (in a list without one, fast would reach `nullptr`).", "nodeColors": [{"id": "5", "color": "green"}], "nodeNotes": [{"id": "5", "text": "slow, fast"}], "lines": [5], "vars": [["phase", "1"], ["slow steps", "5"]]}, {"note": "Phase 2: move slow back to the head; fast stays at the meeting point $5$. Now both move $1$ step at a time.", "nodeColors": [{"id": "0", "color": "orange"}, {"id": "5", "color": "blue"}], "nodeNotes": [{"id": "0", "text": "slow"}, {"id": "5", "text": "fast"}], "lines": [6], "vars": [["phase", "2"], ["steps", "0"]]}, {"note": "Slow to node $1$, fast to node $6$.", "nodeColors": [{"id": "1", "color": "orange"}, {"id": "6", "color": "blue"}], "nodeNotes": [{"id": "1", "text": "slow"}, {"id": "6", "text": "fast"}], "lines": [8, 9], "vars": [["phase", "2"], ["steps", "1"]]}, {"note": "Slow to node $2$, fast to node $7$.", "nodeColors": [{"id": "2", "color": "orange"}, {"id": "7", "color": "blue"}], "nodeNotes": [{"id": "2", "text": "slow"}, {"id": "7", "text": "fast"}], "lines": [8, 9], "vars": [["phase", "2"], ["steps", "2"]]}, {"note": "They meet at node $3$ after $3$ steps: that is the start of the cycle, and the tail length is $\\mu = 3$.", "nodeColors": [{"id": "3", "color": "green"}], "nodeNotes": [{"id": "3", "text": "slow, fast"}], "lines": [11], "vars": [["phase", "2"], ["steps", "3"], ["cycle start", "3"]]}]},
  "pairs": {"type": "algo", "view": "array", "code": "int i = 0, j = n - 1;\nwhile (i < j) {\n    int s = a[i] + a[j];\n    if (s == target) { report(i, j); ++i; --j; }\n    else if (s < target) ++i;\n    else                 --j;\n}", "interval": 1300, "caption": "Pair sum on a sorted array. Every step rules out one element for good, so the scan takes at most $n - 1$ steps.", "frames": [{"note": "Sorted array, target $22$. Start with the smallest and largest elements.", "array": [1, 3, 4, 6, 8, 11, 14, 17], "pointers": [{"index": 0, "label": "i"}, {"index": 7, "label": "j", "color": "blue"}], "lines": [1], "vars": [["sums tried", "0"]]}, {"note": "$1 + 17 = 18 < 22$. Even the largest partner is too small for $1$, so $1$ is in no pair: $i$ moves right.", "pointers": [{"index": 0, "label": "i"}, {"index": 7, "label": "j", "color": "blue"}], "marks": [{"index": 0, "color": "red"}, {"index": 7, "color": "blue"}], "dim": [], "lines": [3, 5], "vars": [["sum", "18"], ["sums tried", "1"]]}, {"note": "$3 + 17 = 20 < 22$. Even the largest partner is too small for $3$, so $3$ is in no pair: $i$ moves right.", "pointers": [{"index": 1, "label": "i"}, {"index": 7, "label": "j", "color": "blue"}], "marks": [{"index": 1, "color": "red"}, {"index": 7, "color": "blue"}], "dim": [0], "lines": [3, 5], "vars": [["sum", "20"], ["sums tried", "2"]]}, {"note": "$4 + 17 = 21 < 22$. Even the largest partner is too small for $4$, so $4$ is in no pair: $i$ moves right.", "pointers": [{"index": 2, "label": "i"}, {"index": 7, "label": "j", "color": "blue"}], "marks": [{"index": 2, "color": "red"}, {"index": 7, "color": "blue"}], "dim": [0, 1], "lines": [3, 5], "vars": [["sum", "21"], ["sums tried", "3"]]}, {"note": "$6 + 17 = 23 > 22$. Even the smallest partner is too big for $17$, so $17$ is in no pair: $j$ moves left.", "pointers": [{"index": 3, "label": "i"}, {"index": 7, "label": "j", "color": "blue"}], "marks": [{"index": 3, "color": "blue"}, {"index": 7, "color": "red"}], "dim": [0, 1, 2], "lines": [3, 6], "vars": [["sum", "23"], ["sums tried", "4"]]}, {"note": "$6 + 14 = 20 < 22$. Even the largest partner is too small for $6$, so $6$ is in no pair: $i$ moves right.", "pointers": [{"index": 3, "label": "i"}, {"index": 6, "label": "j", "color": "blue"}], "marks": [{"index": 3, "color": "red"}, {"index": 6, "color": "blue"}], "dim": [0, 1, 2, 7], "lines": [3, 5], "vars": [["sum", "20"], ["sums tried", "5"]]}, {"note": "$8 + 14 = 22$: a pair! Record it, then move both pointers inward.", "pointers": [{"index": 4, "label": "i"}, {"index": 6, "label": "j", "color": "blue"}], "marks": [{"index": 4, "color": "green"}, {"index": 6, "color": "green"}], "dim": [0, 1, 2, 3, 7], "lines": [3, 4], "vars": [["sum", "22"], ["sums tried", "6"], ["pairs", "(8, 14)"]]}, {"note": "$i \\ge j$: every element has been ruled out or used. $6$ sums instead of all $\\binom{8}{2} = 28$ pairs.", "pointers": [{"index": 5, "label": "i"}, {"index": 5, "label": "j", "color": "blue"}], "marks": [{"index": 4, "color": "green"}, {"index": 6, "color": "green"}], "dim": [0, 1, 2, 3, 5, 7], "lines": [2], "vars": [["sums tried", "6"], ["pairs", "(8, 14)"]]}]},
  "window": {"type": "algo", "view": "array", "code": "int best = INT_MAX, sum = 0, l = 0;\nfor (int r = 0; r < n; ++r) {\n    sum += a[r];\n    while (sum >= S) {\n        best = std::min(best, r - l + 1);\n        sum -= a[l++];\n    }\n}", "interval": 1100, "caption": "A variable-size sliding window. $r$ only moves right and $l$ only moves right, so the nested loop is $O(n)$ in total.", "frames": [{"note": "Shortest run of consecutive elements with sum $\\ge 7$ (all values positive). The window is $a[l..r]$; it starts empty.", "array": [2, 3, 1, 2, 4, 3], "pointers": [{"index": 0, "label": "l"}], "lines": [1], "vars": [["sum", "0"], ["best", "∞"]]}, {"note": "Grow: add $a[0] = 2$. Window sum $2 < 7$: keep growing.", "pointers": [{"index": 0, "label": "l, r"}], "marks": [{"index": 0, "color": "blue"}, {"index": 0, "color": "orange"}], "lines": [3], "vars": [["sum", "2"], ["best", "∞"]]}, {"note": "Grow: add $a[1] = 3$. Window sum $5 < 7$: keep growing.", "pointers": [{"index": 0, "label": "l"}, {"index": 1, "label": "r", "color": "blue"}], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 1, "color": "orange"}], "lines": [3], "vars": [["sum", "5"], ["best", "∞"]]}, {"note": "Grow: add $a[2] = 1$. Window sum $6 < 7$: keep growing.", "pointers": [{"index": 0, "label": "l"}, {"index": 2, "label": "r", "color": "blue"}], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 2, "color": "orange"}], "lines": [3], "vars": [["sum", "6"], ["best", "∞"]]}, {"note": "Grow: add $a[3] = 2$. Window sum $8 \\ge 7$: valid.", "pointers": [{"index": 0, "label": "l"}, {"index": 3, "label": "r", "color": "blue"}], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 3, "color": "orange"}], "lines": [3], "vars": [["sum", "8"], ["best", "∞"]]}, {"note": "Valid with length $4$ (new best). Shrink: drop $a[0] = 2$, sum $= 6$.", "pointers": [{"index": 1, "label": "l"}, {"index": 3, "label": "r", "color": "blue"}], "marks": [{"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 0, "color": "red"}], "lines": [5, 6], "vars": [["sum", "6"], ["best", "4"]]}, {"note": "Grow: add $a[4] = 4$. Window sum $10 \\ge 7$: valid.", "pointers": [{"index": 1, "label": "l"}, {"index": 4, "label": "r", "color": "blue"}], "marks": [{"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 4, "color": "orange"}], "lines": [3], "vars": [["sum", "10"], ["best", "4"]]}, {"note": "Valid with length $4$, no improvement. Shrink: drop $a[1] = 3$, sum $= 7$.", "pointers": [{"index": 2, "label": "l"}, {"index": 4, "label": "r", "color": "blue"}], "marks": [{"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 1, "color": "red"}], "lines": [5, 6], "vars": [["sum", "7"], ["best", "4"]]}, {"note": "Valid with length $3$ (new best). Shrink: drop $a[2] = 1$, sum $= 6$.", "pointers": [{"index": 3, "label": "l"}, {"index": 4, "label": "r", "color": "blue"}], "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 2, "color": "red"}], "lines": [5, 6], "vars": [["sum", "6"], ["best", "3"]]}, {"note": "Grow: add $a[5] = 3$. Window sum $9 \\ge 7$: valid.", "pointers": [{"index": 3, "label": "l"}, {"index": 5, "label": "r", "color": "blue"}], "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 5, "color": "orange"}], "lines": [3], "vars": [["sum", "9"], ["best", "3"]]}, {"note": "Valid with length $3$, no improvement. Shrink: drop $a[3] = 2$, sum $= 7$.", "pointers": [{"index": 4, "label": "l"}, {"index": 5, "label": "r", "color": "blue"}], "marks": [{"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 3, "color": "red"}], "lines": [5, 6], "vars": [["sum", "7"], ["best", "3"]]}, {"note": "Valid with length $2$ (new best). Shrink: drop $a[4] = 4$, sum $= 3$.", "pointers": [{"index": 5, "label": "l"}, {"index": 5, "label": "r", "color": "blue"}], "marks": [{"index": 5, "color": "blue"}, {"index": 4, "color": "red"}], "lines": [5, 6], "vars": [["sum", "3"], ["best", "2"]]}, {"note": "$r$ has passed the end. The shortest valid window has length $2$; each index entered and left the window at most once.", "marks": [{"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "lines": [8], "vars": [["best", "2"]]}]},
};
// ---- end generated ----

export const lesson: Lesson = {
  id: 'dsa-array-techniques',
  title: 'Two Pointers, Sliding Windows and Prefix Sums',
  summary: 'The linear-time array patterns behind half of all interview problems and a lot of engine code: two pointers, fast and slow pointers, fixed and variable sliding windows, prefix sums and summed-area tables, difference arrays, and the monotonic deque.',
  minutes: 22,
  objectives: [
    'Solve pair and partition problems on sorted arrays with two pointers, and justify them with an invariant about which candidates are ruled out',
    'Detect a cycle and find its start with Floyd\'s fast and slow pointers, and explain why the pointers meet',
    'Maintain fixed and variable sliding windows in amortized $O(1)$ per step, and recognize when a variable window is invalid',
    'Answer range-sum queries in $O(1)$ with prefix sums and 2D summed-area tables, and apply many range updates with a difference array',
    'Compute every sliding-window maximum in $O(n)$ total with a monotonic deque',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Two pointers on a sorted array',
      blocks: [
        {
          type: 'p',
          text: 'Many array problems have an obvious $O(n^2)$ solution: try every pair $(i, j)$. The patterns in this lesson all get to $O(n)$ the same way: they move indices **only forward**, and each move rules something out *for good*. The proof that this is safe is always an invariant, just as in binary search.',
        },
        {
          type: 'p',
          text: 'The first pattern is the **[[dsa-two-pointers|two-pointer technique]]**. Problem: in a sorted array, find the pairs that sum to a target $T$. Put $i$ at the smallest element and $j$ at the largest, and look at $s = a[i] + a[j]$.',
        },
        ALGO.pairs,
        {
          type: 'derivation',
          title: 'Why no pair is missed',
          steps: [
            { tex: '\\text{Invariant: every pair using an index outside } [i, j] \\text{ has been ruled out or reported}', why: 'True at the start, when $[i, j]$ is the whole array and no index is outside.' },
            { tex: 's = a[i] + a[j] < T \\implies a[i] + a[k] \\le s < T \\ \\ \\forall k \\in [i, j]', why: 'The array is sorted, so $a[j]$ is the largest partner still available to $a[i]$. If even it is too small, $a[i]$ is in no remaining pair, so `++i` keeps the invariant.' },
            { tex: 's > T \\implies a[k] + a[j] \\ge s > T \\ \\ \\forall k \\in [i, j]', why: 'Symmetrically, $a[i]$ is the smallest partner left for $a[j]$. If even that overshoots, $a[j]$ is in no remaining pair: `--j`.' },
            { tex: 'j - i \\text{ drops by at least } 1 \\text{ per step} \\implies \\le n - 1 \\text{ steps}', why: 'Each step moves at least one pointer inward, and the loop stops when $i \\ge j$. Total: $O(n)$ after an $O(n \\log n)$ sort if the input was not sorted.' },
          ],
          result: 'One pass, and the invariant guarantees that every pair with sum $T$ is reported (for distinct values; with duplicates, count runs of equal values instead of moving one step).',
        },
        {
          type: 'p',
          text: 'A second flavor moves both pointers in the **same direction**: a *read* pointer scans every element and a *write* pointer marks the end of the elements kept so far. This filters an array in place in one pass. It is exactly what `std::remove_if` does, and in games it is how you compact an entity array after a frame in which several enemies died, keeping the survivors in order.',
        },
        {
          type: 'code',
          title: 'twopointers.cpp',
          runnable: true,
          code: CODE.twopointers,
          output: OUT.twopointers,
          annotations: [
            { lines: '8-17', text: 'Opposite-direction pointers. `a[i++]` and `a[j--]` record the pair and then move both pointers, since (with distinct values) neither element can be in another pair.' },
            { lines: '27-35', text: 'Same-direction pointers. Invariant: `es[0, write)` holds the survivors among `es[0, read)`, in their original order. Each element is moved at most once: $O(n)$.' },
            { lines: 48, text: 'C++20 `std::erase_if` does the same compaction and the final `erase` in one call. Before C++20 this was the "erase–remove idiom": `v.erase(std::remove_if(...), v.end())`.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not erase inside the loop',
          text: 'The tempting version, `for (auto it = v.begin(); it != v.end(); ++it) if (dead(*it)) v.erase(it);`, is wrong twice. `erase` invalidates `it`, so `++it` is undefined behavior; and each `erase` shifts the whole tail, making the loop $O(n^2)$. The read/write-pointer pass is both correct and linear. (If order does not matter, swap-and-pop is even cheaper per removal.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Run `pairsWithSum` on $a = [2, 5, 7, 8, 11, 15]$ with target $T = 18$. How many sums $a[i] + a[j]$ does it compute before the loop ends?',
      answer: '4',
      label: 'sums $=$',
      hint: 'Start with $i = 0$, $j = 5$. After a match, both pointers move.',
      explanation: '$2 + 15 = 17 < 18$, so $i$ moves right. $5 + 15 = 20 > 18$, so $j$ moves left. $5 + 11 = 16 < 18$, so $i$ moves right. $7 + 11 = 18$: a pair; both pointers move, giving $i = j = 3$, and the loop stops. Four sums instead of the $\\binom{6}{2} = 15$ pairs a brute force would check, and $(7, 11)$ is the only pair.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Fast and slow pointers',
      blocks: [
        {
          type: 'p',
          text: 'Two pointers can also move at **different speeds** along a sequence $x_0, x_1 = f(x_0), x_2 = f(x_1), \\dots$, such as the nodes of a linked list. Any such sequence over a finite set eventually repeats: it has a tail of length $\\mu$ and then a cycle of length $\\lambda$ (it looks like the Greek letter $\\rho$). A corrupted linked list whose last node points back into the middle is exactly this shape, and a loop over it never ends.',
        },
        {
          type: 'p',
          text: '**[[dsa-floyd-cycle-detection|Floyd\'s cycle detection]]** (the "tortoise and hare") moves `slow` one step and `fast` two steps at a time. If there is no cycle, `fast` reaches the end. If there is one, they must meet, and a second phase finds where the cycle starts. It uses $O(1)$ extra memory, where the obvious alternative, a hash set of visited nodes, uses $O(n)$.',
        },
        ALGO.floyd,
        {
          type: 'derivation',
          title: 'Why they meet, and why phase 2 finds the start',
          steps: [
            { tex: '\\text{after } k \\ge \\mu \\text{ steps, both are in the cycle; the gap closes by } 1 \\text{ per step}', why: 'Fast moves 2, slow moves 1, so measured around the cycle, fast gains one position per step. It cannot jump over slow, so they meet within $\\lambda$ more steps.' },
            { tex: 'x_k = x_{2k} \\iff k \\ge \\mu \\text{ and } \\lambda \\mid k', why: 'Position $x_k$ for $k \\ge \\mu$ depends only on $k \\bmod \\lambda$. Slow (at step $k$) and fast (at step $2k$) coincide when $2k - k = k$ is a multiple of $\\lambda$. In the animation, $\\mu = 3$, $\\lambda = 5$: the first such $k$ is $5$.' },
            { tex: 'x_{k + \\mu} = x_{\\mu} \\quad (\\text{since } \\lambda \\mid k)', why: 'The meeting point is $k$ steps into the sequence, and $k$ is a whole number of laps. So walking $\\mu$ more steps from the meeting point lands on $x_{k+\\mu}$, which equals $x_\\mu$, the start of the cycle.' },
            { tex: '\\text{phase 2: one pointer from } x_0, \\text{ one from } x_k, \\text{ both speed } 1', why: 'After exactly $\\mu$ steps the first is at $x_\\mu$ (the end of the tail) and the second is at $x_{k + \\mu} = x_\\mu$. Before that, the first is still on the tail and the second is on the cycle, so they cannot meet earlier.' },
          ],
          result: 'Phase 1 costs at most $\\mu + \\lambda$ slow steps, phase 2 exactly $\\mu$. Walking once around from the start gives $\\lambda$.',
        },
        {
          type: 'code',
          title: 'floyd.cpp',
          runnable: true,
          code: CODE.floyd,
          output: OUT.floyd,
          annotations: [
            { lines: 11, text: 'Check both `fast` and `next[fast]` before taking two steps: either can be the end of an acyclic list.' },
            { lines: '15-16', text: 'Phase 2, exactly as in the proof.' },
            { lines: '26-30', text: 'The same speeds on an acyclic list find the middle in one pass: when fast has walked $n$ nodes, slow has walked $n/2$. For an even count you get the second of the two middle nodes.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Where this shows up',
          text: 'Interview classics: "does this linked list have a cycle?", "where does the cycle start?", "find the middle of a list in one pass", "find the duplicate in an array of $n + 1$ values from $1..n$" (treat $i \\mapsto a[i]$ as the function $f$). Outside interviews: cycle detection in pseudo-random number generators and in Pollard\'s rho factoring algorithm, and debug assertions that catch a corrupted free list in a memory allocator.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'A linked list has a tail of $\\mu = 4$ nodes followed by a cycle of $\\lambda = 6$ nodes. Slow and fast start at the head. After how many slow steps do they first meet?',
      answer: '6',
      label: 'steps $=$',
      hint: 'They meet at the first step $k$ with $k \\ge \\mu$ and $k$ a multiple of $\\lambda$.',
      explanation: 'Slow is at $x_k$ and fast at $x_{2k}$. Once both are past the tail ($k \\ge \\mu = 4$), they coincide exactly when $2k - k = k$ is a multiple of $\\lambda = 6$. The smallest $k \\ge 4$ divisible by $6$ is $k = 6$. (Check: slow is at $x_6$, which is $2$ nodes into the cycle; fast is at $x_{12}$, which is $8$ nodes into the cycle, i.e. $8 - 6 = 2$ after one lap. Same node.) Phase 2 would then take $\\mu = 4$ more steps.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Sliding windows: fixed and variable',
      blocks: [
        {
          type: 'p',
          text: 'A **[[dsa-sliding-window|sliding window]]** is a contiguous range of the array that moves right, together with an aggregate (a sum, a count of each character, a maximum) that you **update** instead of recomputing. Two kinds:',
        },
        {
          type: 'list',
          items: [
            '**Fixed size $k$:** each step one element enters and one leaves. A rolling average of the last $k$ frame times (the FPS counter in every engine) costs $O(1)$ per frame: `sum += new; sum -= oldest`. Recomputing the sum would cost $O(k)$.',
            '**Variable size:** extend the right end $r$ one step at a time, and shrink the left end $l$ while the window is valid (or until it becomes valid again). Each answer candidate is a window $a[l..r]$.',
          ],
        },
        ALGO.window,
        {
          type: 'derivation',
          title: 'Why the variable window is $O(n)$ and correct',
          steps: [
            { tex: 'r \\text{ moves } n \\text{ times}, \\quad l \\text{ moves at most } n \\text{ times in total}', why: 'The inner `while` looks nested, but $l$ never moves left and never passes $n$. Across the whole run the inner loop body executes at most $n$ times. This is an [[dm-amortized-analysis|amortized]] argument: one call can be expensive, the total is linear.' },
            { tex: 'a_i > 0 \\implies \\text{sum}(l..r) \\text{ grows with } r \\text{ and shrinks as } l \\text{ grows}', why: 'This monotonicity is what makes it correct. For each $r$, the loop finds the largest $l$ with $\\text{sum}(l..r) \\ge S$. Any window starting further left is longer, so it cannot be a better answer for this $r$, and it never needs to be revisited.' },
            { tex: '\\text{best} = \\min_r \\,(r - l_r + 1)', why: 'Every right end is tried with its best left end, so the minimum over them is the true optimum.' },
          ],
          result: 'Total $O(n)$. The precondition is a **monotone** validity test: once a window is valid, every larger window containing it is valid.',
        },
        {
          type: 'code',
          title: 'window.cpp',
          runnable: true,
          code: CODE.window,
          output: OUT.window,
          annotations: [
            { lines: '12-13', text: 'Fixed window: one element in, one out.' },
            { lines: '24-27', text: 'Variable window: while valid, record and shrink. This finds the shortest valid window ending at each `r`.' },
            { lines: '33-43', text: 'The same template with a different validity test: "no character appears twice". Shrinking stops as soon as the repeated character has left the window.' },
            { lines: '37-39', text: 'Index the counts with `unsigned char`: a plain `char` above 127 is negative on most platforms, and `count[c]` would read before the array.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A ring buffer for the window',
          text: 'When the data is a stream (frame times, network round trips, the last $k$ inputs for a fighting-game combo), you cannot index `ms[r - k]` because old values are gone. Keep the last $k$ values in a fixed-size ring buffer; the value you overwrite is exactly the one leaving the window.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'All values are positive: $a = [2, 7, 3, 1, 6, 5, 1, 4]$. What is the length of the shortest run of consecutive elements whose sum is at least $12$?',
      answer: '3',
      label: 'length $=$',
      hint: 'No two adjacent elements reach $12$ (check the largest pairs). Then look for three.',
      explanation: 'Length $2$ is impossible: the largest adjacent pairs are $2 + 7 = 9$, $7 + 3 = 10$, $6 + 5 = 11$. Length $3$ works: $1 + 6 + 5 = 12$ (and $6 + 5 + 1 = 12$). The sliding window finds it in one pass: it grows to $[2, 7, 3]$ ($12$, length $3$), shrinks, grows again, and records $[1, 6, 5]$ and $[6, 5, 1]$, never finding anything shorter. A brute force over all $36$ runs confirms $3$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'True or false: the variable sliding window (`sum += a[r]; while (sum >= S) { record; sum -= a[l++]; }`) still finds the shortest run with sum $\\ge S$ when the array may contain negative numbers.',
      answer: false,
      explanation: 'False. The method relies on sums growing when the window grows. Take $a = [5, -10, 4, 3]$ and $S = 7$. The running sums from $l = 0$ are $5, -5, -1, 2$, never $\\ge 7$, so $l$ never moves and the method reports nothing. But $[4, 3]$ has sum $7$. A negative element can make a longer window *worse*, so "shrink while valid" skips valid windows. With negatives, use prefix sums (next card) with a hash map for exact sums, or a monotonic deque over prefix sums for "at least $S$".',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Prefix sums',
      blocks: [
        {
          type: 'p',
          text: 'If the array does not change and you will ask many range-sum questions, precompute the **[[dsa-prefix-sum|prefix sums]]** once. Define $P$ with one more entry than the data: $P[0] = 0$ and $P[i + 1] = P[i] + a[i]$. Think of $P[i]$ as living on the fence before cell $i$: it is the total of everything to the left of that fence.',
        },
        {
          type: 'figure',
          svg: FIG.prefix,
          alt: 'An array a of ten damage values 4, 0, 7, 3, 3, 9, 1, 0, 5, 6, with cells 2 to 5 highlighted. Below it, the prefix sums 0, 4, 4, 11, 14, 17, 26, 27, 27, 32, 38 sit at the fences between cells. The fence values P[2] = 4 and P[6] = 26 are highlighted, and the text reads: sum of a[2..6) = 7 + 3 + 3 + 9 = P[6] − P[2] = 26 − 4 = 22.',
          caption: '$P[i]$ sits on fence $i$. The sum of the half-open range $[l, r)$ is "everything left of fence $r$" minus "everything left of fence $l$".',
          maxWidth: 520,
        },
        {
          type: 'theorem',
          name: 'Range sums from prefix sums',
          tex: '\\sum_{i=l}^{r-1} a[i] = P[r] - P[l] \\qquad (0 \\le l \\le r \\le n)',
          text: 'Build in $O(n)$, answer each query in $O(1)$. With half-open ranges there is no $\\pm 1$ anywhere; with the leading $P[0] = 0$ there is no special case for $l = 0$.',
        },
        {
          type: 'p',
          text: 'Prefix sums also turn "count the subarrays with sum exactly $k$" into a hash-map problem. A run $[l, r)$ qualifies iff $P[r] - P[l] = k$, i.e. $P[l] = P[r] - k$. Sweep $r$ from left to right, and for each $r$ count how many earlier fences had prefix value $P[r] - k$. This works with negative numbers, where sliding windows fail.',
        },
        {
          type: 'derivation',
          title: 'Counting runs that sum to $6$ in $[4, 0, 7, 3, 3, 9, 1, 0, 5, 6]$',
          steps: [
            { tex: 'P = [0, 4, 4, 11, 14, 17, 26, 27, 27, 32, 38]', why: 'Running totals with the leading $0$.' },
            { tex: 'P[5] - 6 = 11 = P[3] \\implies [3, 5) = \\{3, 3\\}', why: 'At fence $r = 5$, the value $11$ was seen once before (fence $3$). One run.' },
            { tex: 'P[9] - 6 = 26 = P[6] \\implies [6, 9) = \\{1, 0, 5\\}', why: 'At fence $9$, look up $32 - 6 = 26$: seen once, at fence $6$.' },
            { tex: 'P[10] - 6 = 32 = P[9] \\implies [9, 10) = \\{6\\}', why: 'At fence $10$, look up $32$: seen once. Every other fence finds no match.' },
          ],
          result: 'Three runs, found with one pass and one hash lookup per fence: $O(n)$ expected time instead of $O(n^2)$.',
        },
        {
          type: 'code',
          title: 'prefix.cpp',
          runnable: true,
          code: CODE.prefix,
          output: OUT.prefix,
          annotations: [
            { lines: '12-13', text: '`std::partial_sum` writes running totals starting at `P[1]`, leaving `P[0] = 0`. Use `long long`: sums of many `int`s overflow long before the values themselves do.' },
            { lines: 15, text: 'The whole query is one subtraction.' },
            { lines: '23-29', text: '`seen[v]` counts the fences $l < r$ with $P[l] = v$. Look up first, then insert $P[r]$, so a run is never counted with $l = r$.' },
            { lines: '31-34', text: 'An $O(n^2)$ brute force as a cross-check. Keep one in your tests for every clever $O(n)$ trick.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'When the array changes',
          text: 'One update to $a[i]$ changes every $P[j]$ with $j > i$, so prefix sums suit static data. If updates and queries interleave, a Fenwick tree or segment tree (later in this course) does both in $O(\\log n)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'How many runs of consecutive elements of $a = [1, 2, 1, -1, 3, 0, 2]$ have sum exactly $3$? (Runs are counted by position, so two different runs with the same values count twice.)',
      answer: '7',
      label: 'runs $=$',
      hint: 'Compute $P = [0, 1, 3, 4, 3, 6, 6, 8]$. For each $r \\ge 1$, count earlier $l$ with $P[l] = P[r] - 3$.',
      explanation: 'Prefix sums: $P = [0, 1, 3, 4, 3, 6, 6, 8]$. Now for each fence $r$ count earlier fences with value $P[r] - 3$. $r = 2$: need $0$, found at $l = 0$ → $[1, 2]$. $r = 3$: need $1$ → $l = 1$: $[2, 1]$. $r = 4$: need $0$ → $l = 0$: $[1, 2, 1, -1]$. $r = 5$: need $3$, found at $l = 2$ and $l = 4$: $[1, -1, 3]$ and $[3]$. $r = 6$: need $3$ again, twice: $[1, -1, 3, 0]$ and $[3, 0]$. $r = 7$: need $5$, none. Total $1 + 1 + 1 + 2 + 2 = 7$. The zero and the negative number are why a sliding window would miss some of these.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: '2D prefix sums: summed-area tables',
      blocks: [
        {
          type: 'p',
          text: 'The same idea works on a grid. Let $S[i][j]$ be the sum of every cell **above and to the left** of the corner point $(i, j)$, i.e. rows $[0, i)$ and columns $[0, j)$, with an extra row and column of zeros. This is a **[[dsa-summed-area-table|summed-area table]]**. Any rectangle sum then costs four lookups, whatever its size.',
        },
        {
          type: 'figure',
          svg: FIG.sat,
          alt: 'A grid with a blue query rectangle. The region above and to the left of its bottom-right corner is shaded. The strip above the query and the strip to its left are shaded red, overlapping in the top-left block. The four corners of the query are marked: plus S at the bottom-right, minus S at the top-right, minus S at the bottom-left, plus S at the top-left.',
          caption: '$S[r_1][c_1]$ covers the whole shaded area. Subtract the top strip $S[r_0][c_1]$ and the left strip $S[r_1][c_0]$; their overlap $S[r_0][c_0]$ was subtracted twice, so add it back once. Inclusion–exclusion, exactly as in counting.',
          maxWidth: 420,
        },
        {
          type: 'math',
          tex: '\\text{sum}\\big([r_0, r_1) \\times [c_0, c_1)\\big) = S[r_1][c_1] - S[r_0][c_1] - S[r_1][c_0] + S[r_0][c_0]',
          caption: 'Building uses the same identity backwards: $S[i+1][j+1] = g[i][j] + S[i][j+1] + S[i+1][j] - S[i][j]$, one pass in $O(\\text{rows} \\times \\text{cols})$.',
        },
        {
          type: 'code',
          title: 'sat.cpp',
          runnable: true,
          code: CODE.sat,
          output: OUT.sat,
          annotations: [
            { lines: '5-8', text: 'One flat `std::vector` in row-major order, not a vector of vectors: one allocation and contiguous memory, which matters when the table is a $1920 \\times 1080$ image.' },
            { lines: '12-14', text: 'The build. Each entry adds its own cell to the two overlapping rectangles and removes their double-counted overlap.' },
            { lines: '17-19', text: 'Four lookups for any rectangle.' },
            { lines: '39-46', text: 'Brute-force every one of the $\\binom{5}{2}\\binom{6}{2} = 150$ rectangles.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In graphics and games',
          text: 'Frank Crow introduced summed-area tables in 1984 for texture filtering. Because a box filter of *any* radius costs four lookups per pixel, they give constant-cost blurs, which is useful for depth-of-field and glossy reflections, where the blur radius varies per pixel. Computer vision calls them **integral images** (the Viola–Jones face detector evaluates thousands of rectangle features per window this way). In games: "how much enemy influence is inside this rectangle?" on an AI influence map, how much of a region is explored under fog of war, or how many buildings sit in a selection box on a strategy map.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Precision',
          text: 'Entries grow with the area: a $4096 \\times 4096$ table of 8-bit pixel values reaches about $4.3 \\times 10^9$, more than a 32-bit `int` holds. Use 64-bit integers, or for floating-point images subtract the mean first, because $S[r_1][c_1] - S[r_0][c_1]$ subtracts two huge, nearly equal numbers and loses precision.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Using the summed-area table printed by `sat.cpp` (rows are $i = 0..4$, columns $j = 0..5$), compute the sum of grid rows $[2, 4)$ and columns $[1, 5)$.',
      tex: 'S = \\begin{bmatrix} 0 & 0 & 0 & 0 & 0 & 0 \\\\ 0 & 1 & 1 & 3 & 3 & 4 \\\\ 0 & 1 & 4 & 7 & 7 & 8 \\\\ 0 & 3 & 7 & 14 & 16 & 17 \\\\ 0 & 3 & 7 & 15 & 22 & 25 \\end{bmatrix}',
      answer: '15',
      label: 'sum $=$',
      hint: 'Use $S[4][5] - S[2][5] - S[4][1] + S[2][1]$.',
      explanation: 'With $r_0 = 2$, $r_1 = 4$, $c_0 = 1$, $c_1 = 5$: $S[4][5] - S[2][5] - S[4][1] + S[2][1] = 25 - 8 - 3 + 1 = 15$. Check against the grid: row $2$, columns $1..4$ holds $1, 4, 2, 0$ (sum $7$), and row $3$ holds $0, 1, 5, 2$ (sum $8$); $7 + 8 = 15$ ✓. A common slip is to forget $+S[2][1]$, giving $14$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Difference arrays: range updates in O(1)',
      blocks: [
        {
          type: 'p',
          text: 'Prefix sums make range **queries** cheap. The reverse problem is range **updates**: "add $v$ to every element of $a[l..r)$", many times, and read the array only at the end. Doing each update directly costs $O(r - l)$.',
        },
        {
          type: 'p',
          text: 'Store instead the **[[dsa-difference-array|difference array]]** $d[i] = a[i] - a[i-1]$ (with $a[-1] = 0$). Adding $v$ to $a[l..r)$ changes only two differences: the step up into the range at $l$, and the step back down at $r$. A prefix-sum pass over $d$ rebuilds $a$, because summing differences telescopes: $d[0] + \\cdots + d[i] = a[i]$.',
        },
        {
          type: 'derivation',
          title: 'Two updates on an array of six zeros',
          steps: [
            { tex: '\\text{add } 3 \\text{ on } [1, 4): \\quad d = [0, 3, 0, 0, -3, 0, 0]', why: '$d[1] \\mathrel{+}= 3$ starts the bump; $d[4] \\mathrel{-}= 3$ ends it. $d$ has one extra slot so that $r = n$ is legal.' },
            { tex: '\\text{add } 2 \\text{ on } [3, 6): \\quad d = [0, 3, 0, 2, -3, 0, -2]', why: 'Updates are independent: each touches two entries, $O(1)$.' },
            { tex: 'a = \\text{prefix}(d) = [0, 3, 3, 5, 2, 2]', why: 'Running totals: $0;\\ 0 + 3;\\ 3 + 0;\\ 3 + 2;\\ 5 - 3;\\ 2 + 0$. Indices $1..2$ got $3$, index $3$ got both ($5$), and $4..5$ got $2$. ✓' },
          ],
          result: '$q$ updates and one rebuild cost $O(q + n)$ instead of $O(q \\cdot n)$.',
        },
        {
          type: 'code',
          title: 'diff.cpp',
          runnable: true,
          code: CODE.diff,
          output: OUT.diff,
          annotations: [
            { lines: 11, text: '$25$ slots for $24$ hours: a shift ending at hour $24$ writes `d[24]`, which is never read but must exist.' },
            { lines: 12, text: 'Each shift is two writes, no matter how long it is.' },
            { lines: '15-17', text: 'The prefix sum turns "how the head count changes" back into "how many are on duty".' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Same trick, other places',
          text: 'Duty rosters and watch bills, as above. How many buffs are active on each frame of a timeline. Overlap counting for intervals: the maximum of the rebuilt array is the largest number of intervals covering one point (the minimum number of rooms or vehicles needed). In 2D, four corner updates on a difference grid plus a summed-area rebuild paint many rectangles at once: area-of-effect zones on a tile map.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'This code should add `v` to every element of `a` with index in the half-open range `[l, r)`, for each update, using a difference array. Tap the line with the bug.',
      lines: [
        '`std::vector<int> d(n + 1, 0);`',
        '`for (auto [l, r, v] : updates) {`',
        '`    d[l] += v;`',
        '`    d[r + 1] -= v;`',
        '`}`',
        '`for (int i = 0, run = 0; i < n; ++i) { run += d[i]; a[i] += run; }`',
      ],
      errorLines: [4],
      explanation: 'For the half-open range $[l, r)$, the last updated index is $r - 1$, so the step back down belongs at index $r$: `d[r] -= v`. Writing `d[r + 1]` also adds $v$ to $a[r]$, one element too many, and when $r = n$ it writes `d[n + 1]`, past the end of a vector of size $n + 1$. This is the closed-range formula ($[l, r]$ uses `d[r + 1]`) mixed into half-open code, the same mistake as in binary search. Lines 1, 3 and 6 are correct.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'The monotonic deque: sliding-window maximum',
      blocks: [
        {
          type: 'p',
          text: 'Sums slide easily because subtraction undoes addition. A **maximum** does not: when the current maximum leaves the window, what is the new one? Rescanning costs $O(k)$ per step, $O(nk)$ in total. A heap gives $O(n \\log k)$. The **[[dsa-monotonic-deque|monotonic deque]]** does it in $O(n)$.',
        },
        {
          type: 'p',
          text: 'The key observation: if $i < j$ and $a[i] \\le a[j]$, then $a[i]$ can **never** again be a window maximum. Every future window that contains $i$ also contains $j$ (which is newer and leaves later), and $a[j]$ is at least as big. So $i$ can be thrown away for good. What remains, from oldest to newest, is a sequence of indices with strictly **decreasing** values, and the oldest one, at the front, is the maximum.',
        },
        ALGO.deque,
        {
          type: 'list',
          items: [
            '**Front pop:** the front index has left the window (it is $\\le r - k$).',
            '**Back pops:** indices whose values are $\\le a[r]$ are dominated by $r$ forever.',
            '**Push** $r$ at the back. The deque is still decreasing.',
            '**Report** $a[\\text{front}]$ once the first full window is in.',
          ],
        },
        {
          type: 'code',
          title: 'deque.cpp',
          runnable: true,
          code: CODE.deque,
          output: OUT.deque,
          annotations: [
            { lines: '13-14', text: 'At most one front pop per step: the window moves by one, so only one index can leave.' },
            { lines: 14, text: 'The `while` can pop many indices at once, but each index is popped at most once over the whole run.' },
            { lines: '32-35', text: 'The counter confirms the amortized bound: about $2$ deque operations per element (one push, at most one pop), not $64$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is O(n): the accounting argument',
          text: 'Charge each index two coins when it arrives: one pays for its push, one for its eventual pop (front or back). An index is pushed once and popped at most once, so no step ever spends a coin that was not paid in advance. Total cost $\\le 2n$, even though a single step can pop $k$ indices. This is the same [[dm-amortized-analysis|amortized]] reasoning as for `std::vector::push_back` doubling.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In games and tools',
          text: 'Worst ping or frame time over the last $k$ ticks for a network graph or a "hitch detector". Minimum terrain height in a window for erosion or path smoothing. The minimum version (keep values increasing) also powers the "shortest subarray with sum $\\ge S$ with negatives" problem, run over prefix sums. Without front pops, the same structure is a **monotonic stack**, which answers "next greater element" for every index in $O(n)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'Run the sliding-window maximum with $k = 3$ on $a = [5, 2, 4, 1, 3, 6]$. Right after processing $a[4] = 3$, which **values** does the deque hold, front to back?',
      options: [
        { text: '$4, 3$', correct: true, why: 'The window is $a[2..4] = [4, 1, 3]$. $5$ left at $r = 3$, $2$ was popped by $4$, and $1$ was popped by $3$. What remains is decreasing: $4, 3$.' },
        { text: '$5, 4, 3$', why: '$5$ is at index $0$, which left the window when $r = 3$ (window $[1, 3]$). It was popped from the front then.' },
        { text: '$4, 1, 3$', why: 'This skips the back pops: $1 \\le 3$, so $1$ can never again be a maximum and is popped when $3$ arrives. The deque must stay decreasing.' },
        { text: '$3$', why: 'Back pops remove only values $\\le a[r] = 3$. The value $4$ is bigger, so it stays, and it is the current maximum.' },
      ],
      explanation: 'Trace: $r = 0$: $[5]$. $r = 1$: $[5, 2]$. $r = 2$: $2 \\le 4$ is popped, giving $[5, 4]$; window max $5$. $r = 3$: index $0$ ($5$) leaves the window; push $1$: $[4, 1]$; max $4$. $r = 4$: $1 \\le 3$ is popped; push: $[4, 3]$; max $4$. Then $r = 5$ would pop both, since $6$ beats them, leaving $[6]$. Window maxima: $5, 4, 4, 6$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'An interview problem: "Given an integer array (values may be negative) and $k$, count the subarrays whose sum is exactly $k$." Which technique fits?',
      options: [
        { text: 'A variable sliding window that shrinks while the sum exceeds $k$', why: 'With negative values, sums are not monotone in the window, so shrinking can skip valid subarrays. Sliding windows need non-negative values for sum conditions.' },
        { text: 'Sort the array, then two pointers', why: 'Sorting destroys contiguity: a subarray is a run of consecutive positions in the original order.' },
        { text: 'Prefix sums with a hash map of how often each prefix value occurred', correct: true, why: 'A run $[l, r)$ sums to $k$ iff $P[l] = P[r] - k$. One pass, one lookup per index: $O(n)$ expected, negatives allowed.' },
        { text: 'A monotonic deque of maxima', why: 'The deque answers window maximum or minimum queries, not exact-sum counts.' },
      ],
      explanation: 'Pattern-match on the problem: **contiguous** plus **exact sum** plus **negatives allowed** means prefix sums and a hash map. With only positive values and "at least $k$", a sliding window would do. Pairs in a sorted array: two pointers. Max or min of each window: monotonic deque. Many range additions then reads: difference array. Rectangle sums on a grid: summed-area table.',
    },
  ],
  takeaways: [
    'Two pointers on a sorted array: if $a[i] + a[j]$ is too small, $a[i]$ is useless, so advance $i$; if too large, retreat $j$. $O(n)$, justified by an invariant. Read/write pointers filter in place (`std::erase_if`).',
    'Floyd\'s fast/slow pointers detect a cycle in $O(\\mu + \\lambda)$ time and $O(1)$ memory; restarting one pointer from the head finds the cycle start after $\\mu$ more steps.',
    'Sliding windows update an aggregate instead of recomputing it; a variable window is $O(n)$ amortized but needs a monotone validity test (e.g. non-negative values).',
    'Prefix sums: $\\text{sum}[l, r) = P[r] - P[l]$; with a hash map they count subarrays with sum $k$, negatives included. Summed-area tables do rectangles with four lookups.',
    'A difference array makes each range update two writes; one prefix-sum pass rebuilds the values.',
    'A monotonic deque keeps candidate indices with decreasing values; every window maximum costs $O(1)$ amortized because each index is pushed and popped once.',
  ],
  reading: [
    { title: 'Jeff Erickson, Algorithms', url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/', source: 'book', note: 'Free textbook; the chapters on amortized analysis explain the accounting argument behind sliding windows and the monotonic deque.' },
    { title: 'Summed-area table (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Summed-area_table', source: 'wikipedia', note: 'The 2D construction and four-corner query, with Crow\'s 1984 graphics paper and the integral image in computer vision.' },
    { title: 'Cycle detection (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Cycle_detection', source: 'wikipedia', note: 'Floyd\'s tortoise and hare with the proof, plus Brent\'s faster variant and applications to random number generators and factoring.' },
    { title: 'cppreference: std::partial_sum', url: 'https://en.cppreference.com/w/cpp/algorithm/partial_sum', source: 'other', note: 'The standard prefix-sum algorithm, with links to `std::inclusive_scan` and `std::exclusive_scan`, which may run in parallel.' },
  ],
};
