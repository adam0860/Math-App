import type { AlgoBlock, Lesson } from '../../types';

// ---- generated: figures, runnable examples and animation frames ----
const FIG: Record<string, string> = {
  "bad": `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg"><line x1="165.7" y1="35.2" x2="104.3" y2="74.8" stroke="currentColor" stroke-width="1.6"/><line x1="79.6" y1="97.4" x2="55.4" y2="128.6" stroke="currentColor" stroke-width="1.6"/><line x1="100.4" y1="97.4" x2="124.6" y2="128.6" stroke="currentColor" stroke-width="1.6"/><line x1="194.3" y1="35.2" x2="255.7" y2="74.8" stroke="currentColor" stroke-width="1.6"/><line x1="259.6" y1="97.4" x2="235.4" y2="128.6" stroke="currentColor" stroke-width="1.6"/><line x1="280.4" y1="97.4" x2="304.6" y2="128.6" stroke="currentColor" stroke-width="1.6"/><circle cx="180.0" cy="26" r="17" fill="currentColor" fill-opacity="0.15" class="f-orange"/><circle cx="180.0" cy="26" r="17" fill="none" stroke="currentColor" stroke-width="2" class="s-orange"/><text x="180.0" y="31.0" text-anchor="middle" font-size="14">30</text><circle cx="90.0" cy="84" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90.0" y="89.0" text-anchor="middle" font-size="14">15</text><circle cx="45.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="45.0" y="147.0" text-anchor="middle" font-size="14">8</text><circle cx="135.0" cy="142" r="17" fill="currentColor" fill-opacity="0.15" class="f-red"/><circle cx="135.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="2" class="s-red"/><text x="135.0" y="147.0" text-anchor="middle" font-size="14">34</text><circle cx="270.0" cy="84" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="270.0" y="89.0" text-anchor="middle" font-size="14">50</text><circle cx="225.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="225.0" y="147.0" text-anchor="middle" font-size="14">42</text><circle cx="315.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="315.0" y="147.0" text-anchor="middle" font-size="14">61</text></svg>`,
  "full": `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg"><line x1="185.3" y1="34.5" x2="114.7" y2="75.5" stroke="currentColor" stroke-width="1.6"/><line x1="88.9" y1="96.9" x2="61.1" y2="129.1" stroke="currentColor" stroke-width="1.6"/><line x1="111.1" y1="96.9" x2="138.9" y2="129.1" stroke="currentColor" stroke-width="1.6"/><line x1="156.7" y1="157.6" x2="168.3" y2="184.4" stroke="currentColor" stroke-width="1.6"/><line x1="214.7" y1="34.5" x2="285.3" y2="75.5" stroke="currentColor" stroke-width="1.6"/><line x1="288.9" y1="96.9" x2="261.1" y2="129.1" stroke="currentColor" stroke-width="1.6"/><line x1="311.1" y1="96.9" x2="338.9" y2="129.1" stroke="currentColor" stroke-width="1.6"/><line x1="343.3" y1="157.6" x2="331.7" y2="184.4" stroke="currentColor" stroke-width="1.6"/><line x1="356.7" y1="157.6" x2="368.3" y2="184.4" stroke="currentColor" stroke-width="1.6"/><circle cx="200.0" cy="26" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200.0" y="31.0" text-anchor="middle" font-size="14">41</text><circle cx="100.0" cy="84" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="100.0" y="89.0" text-anchor="middle" font-size="14">20</text><circle cx="50.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50.0" y="147.0" text-anchor="middle" font-size="14">11</text><circle cx="150.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150.0" y="147.0" text-anchor="middle" font-size="14">29</text><circle cx="175.0" cy="200" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="175.0" y="205.0" text-anchor="middle" font-size="14">32</text><circle cx="300.0" cy="84" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="300.0" y="89.0" text-anchor="middle" font-size="14">65</text><circle cx="250.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="250.0" y="147.0" text-anchor="middle" font-size="14">50</text><circle cx="350.0" cy="142" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350.0" y="147.0" text-anchor="middle" font-size="14">91</text><circle cx="325.0" cy="200" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="325.0" y="205.0" text-anchor="middle" font-size="14">72</text><circle cx="375.0" cy="200" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="375.0" y="205.0" text-anchor="middle" font-size="14">99</text></svg>`,
};
const CODE: Record<string, string> = {
  "bst": `#include <climits>
#include <cstdio>
#include <memory>

class IntSet {   // a set of ints as a plain binary search tree
    struct Node {
        int key;
        std::unique_ptr<Node> left, right;
        explicit Node(int k) : key(k) {}
    };
    std::unique_ptr<Node> root;

    static bool valid(const Node* t, long long lo, long long hi) {   // keys in (lo, hi)
        if (!t) return true;
        if (t->key <= lo || t->key >= hi) return false;
        return valid(t->left.get(), lo, t->key) && valid(t->right.get(), t->key, hi);
    }
    static void inorder(const Node* t) {
        if (!t) return;
        inorder(t->left.get());
        std::printf("%d ", t->key);
        inorder(t->right.get());
    }

public:
    // Returns false if the key was already present (a set stores each key once).
    bool insert(int key) {
        std::unique_ptr<Node>* link = &root;          // the link we might fill in
        while (*link) {
            if (key == (*link)->key) return false;
            link = key < (*link)->key ? &(*link)->left : &(*link)->right;
        }
        *link = std::make_unique<Node>(key);
        return true;
    }
    bool contains(int key) const {
        const Node* t = root.get();
        while (t && t->key != key) t = key < t->key ? t->left.get() : t->right.get();
        return t != nullptr;
    }
    int min() const {                                 // leftmost node (tree must be non-empty)
        const Node* t = root.get();
        while (t->left) t = t->left.get();
        return t->key;
    }
    // Smallest key > x, or INT_MAX if none: the last node where we went left.
    int successor(int x) const {
        int best = INT_MAX;
        for (const Node* t = root.get(); t;)
            if (x < t->key) { best = t->key; t = t->left.get(); }
            else            t = t->right.get();
        return best;
    }
    // Largest key <= x (the "floor"), or INT_MIN if none: the last node where we went right.
    int floor(int x) const {
        int best = INT_MIN;
        for (const Node* t = root.get(); t;)
            if (t->key <= x) { best = t->key; t = t->right.get(); }
            else             t = t->left.get();
        return best;
    }
    bool valid() const { return valid(root.get(), LLONG_MIN, LLONG_MAX); }
    void print() const { inorder(root.get()); std::printf("\\n"); }
};

int main() {
    IntSet s;
    for (int k : {41, 20, 65, 11, 29, 50, 91, 32, 72, 99}) s.insert(k);
    std::printf("insert 29 again: %s\\n", s.insert(29) ? "inserted" : "already there");
    std::printf("inorder: "); s.print();
    std::printf("contains(50) = %d, contains(51) = %d, min = %d\\n", s.contains(50), s.contains(51), s.min());
    std::printf("successor(32) = %d, successor(65) = %d, successor(60) = %d\\n",
                s.successor(32), s.successor(65), s.successor(60));
    std::printf("floor(60) = %d, floor(11) = %d, valid = %d\\n", s.floor(60), s.floor(11), s.valid());
}`,
  "degenerate": `#include <cmath>
#include <cstdio>
#include <memory>
#include <numeric>
#include <random>
#include <utility>
#include <vector>

struct Node {
    int key;
    std::unique_ptr<Node> left, right;
    explicit Node(int k) : key(k) {}
};

struct Stats { long long comparisons; int height; };

Stats build(const std::vector<int>& keys) {
    std::unique_ptr<Node> root;
    Stats s{0, -1};
    for (int k : keys) {
        std::unique_ptr<Node>* link = &root;
        int depth = 0;
        while (*link) {                       // iterative: no recursion depth problems
            ++s.comparisons;
            ++depth;
            link = k < (*link)->key ? &(*link)->left : &(*link)->right;
        }
        *link = std::make_unique<Node>(k);
        if (depth > s.height) s.height = depth;
    }
    // Tear down iteratively: the recursive destructor survives depth 10^4, not 10^6.
    std::vector<std::unique_ptr<Node>> st;
    if (root) st.push_back(std::move(root));
    while (!st.empty()) {
        auto t = std::move(st.back()); st.pop_back();
        if (t->left) st.push_back(std::move(t->left));
        if (t->right) st.push_back(std::move(t->right));
    }
    return s;
}

int main() {
    std::mt19937 rng(12345);
    for (int n : {1000, 10000}) {
        std::vector<int> sorted(n);
        std::iota(sorted.begin(), sorted.end(), 0);
        std::vector<int> shuffled = sorted;
        for (int i = n - 1; i > 0; --i)       // Fisher-Yates with our own index draw
            std::swap(shuffled[i], shuffled[rng() % (i + 1)]);

        Stats a = build(sorted), b = build(shuffled);
        std::printf("n = %5d  sorted: height %5d, %9lld comparisons\\n", n, a.height, a.comparisons);
        std::printf("          random: height %5d, %9lld comparisons (%.1f per insert; 2 ln n = %.1f)\\n",
                    b.height, b.comparisons, double(b.comparisons) / n, 2 * std::log(double(n)));
    }
}`,
  "erase": `#include <climits>
#include <cstdio>
#include <memory>
#include <random>
#include <set>
#include <vector>

struct Node {
    int key;
    std::unique_ptr<Node> left, right;
    explicit Node(int k) : key(k) {}
};
using Link = std::unique_ptr<Node>;

void insert(Link& t, int key) {
    if (!t) { t = std::make_unique<Node>(key); return; }
    if (key < t->key) insert(t->left, key);
    else if (key > t->key) insert(t->right, key);          // duplicates are ignored
}

void erase(Link& t, int key) {
    if (!t) return;                                       // not present
    if (key < t->key)      erase(t->left, key);
    else if (key > t->key) erase(t->right, key);
    else if (!t->left)     t = std::move(t->right);       // leaf or right child only
    else if (!t->right)    t = std::move(t->left);        // left child only
    else {                                                // two children
        Node* s = t->right.get();                         // successor: min of right subtree
        while (s->left) s = s->left.get();
        t->key = s->key;                                  // copy it up...
        erase(t->right, s->key);                          // ...and delete it below (easy case)
    }
}

void collect(const Node* t, std::vector<int>& out) {
    if (!t) return;
    collect(t->left.get(), out);
    out.push_back(t->key);
    collect(t->right.get(), out);
}

bool valid(const Node* t, long long lo, long long hi) {
    return !t || (lo < t->key && t->key < hi &&
                  valid(t->left.get(), lo, t->key) && valid(t->right.get(), t->key, hi));
}

int main() {
    Link root;
    for (int k : {41, 20, 65, 11, 29, 50, 91, 32, 72, 99}) insert(root, k);
    for (int k : {11, 20, 65}) erase(root, k);            // leaf, one child, two children
    std::vector<int> keys;
    collect(root.get(), keys);
    std::printf("after erasing 11, 20, 65:");
    for (int k : keys) std::printf(" %d", k);
    std::printf("\\nroot is %d\\n", root->key);

    // Stress test against std::set: 20000 random inserts and erases on keys 0..199.
    std::mt19937 rng(7);
    std::set<int> ref;
    Link t;
    int mismatches = 0;
    for (int step = 0; step < 20000; ++step) {
        int k = int(rng() % 200);
        if (rng() % 2) { insert(t, k); ref.insert(k); }
        else           { erase(t, k);  ref.erase(k); }
        if (step % 1000 == 0) {
            std::vector<int> got;
            collect(t.get(), got);
            if (got != std::vector<int>(ref.begin(), ref.end()) || !valid(t.get(), LLONG_MIN, LLONG_MAX))
                ++mismatches;
        }
    }
    std::printf("stress test: %d mismatches, %zu keys left\\n", mismatches, ref.size());
}`,
  "stdset": `#include <cstdio>
#include <functional>
#include <map>
#include <set>
#include <string>

int main() {
    // A mission timeline: time (seconds) -> scripted event. Kept sorted by key.
    std::map<int, std::string> timeline = {
        {30, "reinforcements"}, {5, "briefing"}, {120, "extraction"},
        {45, "airstrike"}, {90, "storm"}};

    int now = 40;
    auto next = timeline.upper_bound(now);                 // first event strictly after now
    std::printf("next after t=%d: t=%d %s\\n", now, next->first, next->second.c_str());

    std::printf("events in [30, 100):");                  // a range query: O(log n + k)
    for (auto it = timeline.lower_bound(30); it != timeline.end() && it->first < 100; ++it)
        std::printf(" %d:%s", it->first, it->second.c_str());
    std::printf("\\n");

    // Erase everything that already happened. erase(it) returns the next iterator;
    // other iterators stay valid because nodes never move in memory.
    for (auto it = timeline.begin(); it != timeline.end() && it->first <= now;)
        it = timeline.erase(it);
    std::printf("left after t=%d:", now);
    for (const auto& [t, name] : timeline) std::printf(" %d:%s", t, name.c_str());
    std::printf("\\n");

    // A leaderboard ordered by score, highest first; ties allowed (multiset).
    std::multiset<std::pair<int, std::string>, std::greater<>> board = {
        {1200, "Viper"}, {950, "Havoc"}, {1200, "Ghost"}, {700, "Nomad"}};
    board.insert({1100, "Raven"});
    int rank = 1;
    for (const auto& [score, name] : board) std::printf("#%d %-8s %d\\n", rank++, name.c_str(), score);
}`,
};
const OUT: Record<string, string> = {
  "bst": `insert 29 again: already there
inorder: 11 20 29 32 41 50 65 72 91 99
contains(50) = 1, contains(51) = 0, min = 11
successor(32) = 41, successor(65) = 72, successor(60) = 65
floor(60) = 50, floor(11) = 11, valid = 1`,
  "degenerate": `n =  1000  sorted: height   999,    499500 comparisons
          random: height    21,     11601 comparisons (11.6 per insert; 2 ln n = 13.8)
n = 10000  sorted: height  9999,  49995000 comparisons
          random: height    31,    154074 comparisons (15.4 per insert; 2 ln n = 18.4)`,
  "erase": `after erasing 11, 20, 65: 29 32 41 50 72 91 99
root is 41
stress test: 0 mismatches, 100 keys left`,
  "stdset": `next after t=40: t=45 airstrike
events in [30, 100): 30:reinforcements 45:airstrike 90:storm
left after t=40: 45:airstrike 90:storm 120:extraction
#1 Viper    1200
#2 Ghost    1200
#3 Raven    1100
#4 Havoc    950
#5 Nomad    700`,
};
const ALGO: Record<string, AlgoBlock> = {
  "erase": {"type": "algo", "view": "graph", "width": 420, "height": 250, "nodes": [{"id": "41@0", "x": 210.0, "y": 30, "label": "41"}, {"id": "20@1", "x": 105.0, "y": 92, "label": "20"}, {"id": "11@3", "x": 52.5, "y": 154, "label": "11"}, {"id": "29@4", "x": 157.5, "y": 154, "label": "29"}, {"id": "32@10", "x": 183.8, "y": 216, "label": "32"}, {"id": "65@2", "x": 315.0, "y": 92, "label": "65"}, {"id": "50@5", "x": 262.5, "y": 154, "label": "50"}, {"id": "91@6", "x": 367.5, "y": 154, "label": "91"}, {"id": "72@13", "x": 341.2, "y": 216, "label": "72"}, {"id": "99@14", "x": 393.8, "y": 216, "label": "99"}, {"id": "29@1", "x": 105.0, "y": 92, "label": "29"}, {"id": "32@4", "x": 157.5, "y": 154, "label": "32"}, {"id": "72@2", "x": 315.0, "y": 92, "label": "72"}], "edges": [{"from": "20@1", "to": "11@3"}, {"from": "20@1", "to": "29@4"}, {"from": "29@1", "to": "32@4"}, {"from": "29@4", "to": "32@10"}, {"from": "41@0", "to": "20@1"}, {"from": "41@0", "to": "29@1"}, {"from": "41@0", "to": "65@2"}, {"from": "41@0", "to": "72@2"}, {"from": "65@2", "to": "50@5"}, {"from": "65@2", "to": "91@6"}, {"from": "72@2", "to": "50@5"}, {"from": "72@2", "to": "91@6"}, {"from": "91@6", "to": "72@13"}, {"from": "91@6", "to": "99@14"}], "interval": 1500, "frames": [{"note": "Three deletions, one for each case: $11$ (a leaf), $20$ (one child), $65$ (two children).", "hidden": ["29@1", "32@4", "72@2"], "lines": [1]}, {"note": "Delete $11$: search for it. It is a **leaf**: its left link is empty, so replace it by its (empty) right link.", "hidden": ["29@1", "32@4", "72@2"], "nodeColors": [{"id": "41@0", "color": "gray"}, {"id": "20@1", "color": "gray"}, {"id": "11@3", "color": "red"}], "edgeColors": [{"from": "41@0", "to": "20@1", "color": "blue"}, {"from": "20@1", "to": "11@3", "color": "blue"}], "lines": [3, 5]}, {"note": "$11$ is gone. Nothing else moved.", "hidden": ["11@3", "29@1", "32@4", "72@2"], "lines": [5]}, {"note": "Delete $20$: now it has **one child**, $29$. Its parent's link will point straight to $29$'s subtree.", "hidden": ["11@3", "29@1", "32@4", "72@2"], "nodeColors": [{"id": "20@1", "color": "red"}, {"id": "29@4", "color": "blue"}, {"id": "32@10", "color": "blue"}], "edgeColors": [{"from": "20@1", "to": "29@4", "color": "blue"}, {"from": "29@4", "to": "32@10", "color": "blue"}], "lines": [3, 5]}, {"note": "The subtree of $29$ moved up one level as a unit. Every key in it was already $< 41$, so the invariant holds.", "hidden": ["20@1", "11@3", "29@4", "32@10", "72@2"], "nodeColors": [{"id": "29@1", "color": "green"}, {"id": "32@4", "color": "green"}], "lines": [5]}, {"note": "Delete $65$: it has **two children**. Neither child can simply take its place without breaking the tree.", "hidden": ["20@1", "11@3", "29@4", "32@10", "72@2"], "nodeColors": [{"id": "65@2", "color": "red"}], "lines": [4, 7]}, {"note": "Find the successor: one step right (to $91$), then left as far as possible: $72$. It has no left child.", "hidden": ["20@1", "11@3", "29@4", "32@10", "72@2"], "nodeColors": [{"id": "65@2", "color": "red"}, {"id": "91@6", "color": "gray"}, {"id": "72@13", "color": "purple"}], "edgeColors": [{"from": "65@2", "to": "91@6", "color": "blue"}, {"from": "91@6", "to": "72@13", "color": "blue"}], "lines": [8, 9]}, {"note": "Copy the successor's key into the node: it now holds $72$, which is larger than every key in its left subtree and smaller than every *other* key in its right subtree.", "hidden": ["20@1", "11@3", "29@4", "32@10", "72@2"], "nodeColors": [{"id": "65@2", "color": "orange"}, {"id": "72@13", "color": "purple"}], "nodeLabels": [{"id": "65@2", "label": "72"}], "lines": [10]}, {"note": "Delete the old $72$ from the right subtree. It had no left child, so this is the easy case (here a leaf).", "hidden": ["20@1", "11@3", "29@4", "32@10", "65@2", "72@13"], "nodeColors": [{"id": "72@2", "color": "green"}], "lines": [11]}, {"note": "Inorder is still sorted: $29, 32, 41, 50, 72, 91, 99$. Each deletion cost one root-to-leaf path: $O(h)$.", "hidden": ["20@1", "11@3", "29@4", "32@10", "65@2", "72@13"], "lines": [13]}], "code": "void erase(std::unique_ptr<Node>& t, int key) {\n    if (!t) return;\n    if (key < t->key)      erase(t->left, key);\n    else if (key > t->key) erase(t->right, key);\n    else if (!t->left)     t = std::move(t->right);\n    else if (!t->right)    t = std::move(t->left);\n    else {\n        Node* s = t->right.get();\n        while (s->left) s = s->left.get();\n        t->key = s->key;\n        erase(t->right, s->key);\n    }\n}", "caption": "Red: the node to delete. Purple: its in-order successor. The two-children case is reduced to an easy case by copying the successor up."},
  "insert": {"type": "algo", "view": "graph", "width": 420, "height": 250, "nodes": [{"id": "41@0", "x": 210.0, "y": 30, "label": "41"}, {"id": "20@1", "x": 105.0, "y": 92, "label": "20"}, {"id": "65@2", "x": 315.0, "y": 92, "label": "65"}, {"id": "11@3", "x": 52.5, "y": 154, "label": "11"}, {"id": "29@4", "x": 157.5, "y": 154, "label": "29"}, {"id": "50@5", "x": 262.5, "y": 154, "label": "50"}, {"id": "91@6", "x": 367.5, "y": 154, "label": "91"}, {"id": "32@10", "x": 183.8, "y": 216, "label": "32"}, {"id": "72@13", "x": 341.2, "y": 216, "label": "72"}, {"id": "99@14", "x": 393.8, "y": 216, "label": "99"}], "edges": [{"from": "20@1", "to": "11@3"}, {"from": "20@1", "to": "29@4"}, {"from": "29@4", "to": "32@10"}, {"from": "41@0", "to": "20@1"}, {"from": "41@0", "to": "65@2"}, {"from": "65@2", "to": "50@5"}, {"from": "65@2", "to": "91@6"}, {"from": "91@6", "to": "72@13"}, {"from": "91@6", "to": "99@14"}], "interval": 1300, "frames": [{"note": "Insert $41, 20, 65, 11, 29, 50, 91, 32, 72, 99$ into an empty tree. Each insertion is a search that falls off the tree.", "hidden": ["41@0", "20@1", "65@2", "11@3", "29@4", "50@5", "91@6", "32@10", "72@13", "99@14"], "lines": [1], "vars": [["comparisons", "0"]]}, {"note": "Insert $41$: the tree is empty, so $41$ becomes the root.", "hidden": ["20@1", "65@2", "11@3", "29@4", "50@5", "91@6", "32@10", "72@13", "99@14"], "nodeColors": [{"id": "41@0", "color": "green"}], "lines": [3, 4, 5, 7], "vars": [["path", "—"], ["comparisons", "0"]]}, {"note": "Insert $20$: $20 < 41$: left; the link is empty, so $20$ becomes a new leaf.", "hidden": ["65@2", "11@3", "29@4", "50@5", "91@6", "32@10", "72@13", "99@14"], "nodeColors": [{"id": "41@0", "color": "blue"}, {"id": "20@1", "color": "green"}], "edgeColors": [{"from": "41@0", "to": "20@1", "color": "blue"}], "lines": [3, 4, 5, 7], "vars": [["path", "41"], ["comparisons", "1"]]}, {"note": "Insert $65$: $65 > 41$: right; the link is empty, so $65$ becomes a new leaf.", "hidden": ["11@3", "29@4", "50@5", "91@6", "32@10", "72@13", "99@14"], "nodeColors": [{"id": "41@0", "color": "blue"}, {"id": "65@2", "color": "green"}], "edgeColors": [{"from": "41@0", "to": "65@2", "color": "blue"}], "lines": [3, 4, 5, 7], "vars": [["path", "41"], ["comparisons", "2"]]}, {"note": "Insert $11$: $11 < 41$: left; $11 < 20$: left; the link is empty, so $11$ becomes a new leaf.", "hidden": ["29@4", "50@5", "91@6", "32@10", "72@13", "99@14"], "nodeColors": [{"id": "41@0", "color": "blue"}, {"id": "20@1", "color": "blue"}, {"id": "11@3", "color": "green"}], "edgeColors": [{"from": "41@0", "to": "20@1", "color": "blue"}, {"from": "20@1", "to": "11@3", "color": "blue"}], "lines": [3, 4, 5, 7], "vars": [["path", "41 → 20"], ["comparisons", "4"]]}, {"note": "Insert $29$: $29 < 41$: left; $29 > 20$: right; the link is empty, so $29$ becomes a new leaf.", "hidden": ["50@5", "91@6", "32@10", "72@13", "99@14"], "nodeColors": [{"id": "41@0", "color": "blue"}, {"id": "20@1", "color": "blue"}, {"id": "29@4", "color": "green"}], "edgeColors": [{"from": "41@0", "to": "20@1", "color": "blue"}, {"from": "20@1", "to": "29@4", "color": "blue"}], "lines": [3, 4, 5, 7], "vars": [["path", "41 → 20"], ["comparisons", "6"]]}, {"note": "Insert $50$: $50 > 41$: right; $50 < 65$: left; the link is empty, so $50$ becomes a new leaf.", "hidden": ["91@6", "32@10", "72@13", "99@14"], "nodeColors": [{"id": "41@0", "color": "blue"}, {"id": "65@2", "color": "blue"}, {"id": "50@5", "color": "green"}], "edgeColors": [{"from": "41@0", "to": "65@2", "color": "blue"}, {"from": "65@2", "to": "50@5", "color": "blue"}], "lines": [3, 4, 5, 7], "vars": [["path", "41 → 65"], ["comparisons", "8"]]}, {"note": "Insert $91$: $91 > 41$: right; $91 > 65$: right; the link is empty, so $91$ becomes a new leaf.", "hidden": ["32@10", "72@13", "99@14"], "nodeColors": [{"id": "41@0", "color": "blue"}, {"id": "65@2", "color": "blue"}, {"id": "91@6", "color": "green"}], "edgeColors": [{"from": "41@0", "to": "65@2", "color": "blue"}, {"from": "65@2", "to": "91@6", "color": "blue"}], "lines": [3, 4, 5, 7], "vars": [["path", "41 → 65"], ["comparisons", "10"]]}, {"note": "Insert $32$: $32 < 41$: left; $32 > 20$: right; $32 > 29$: right; the link is empty, so $32$ becomes a new leaf.", "hidden": ["72@13", "99@14"], "nodeColors": [{"id": "41@0", "color": "blue"}, {"id": "20@1", "color": "blue"}, {"id": "29@4", "color": "blue"}, {"id": "32@10", "color": "green"}], "edgeColors": [{"from": "41@0", "to": "20@1", "color": "blue"}, {"from": "20@1", "to": "29@4", "color": "blue"}, {"from": "29@4", "to": "32@10", "color": "blue"}], "lines": [3, 4, 5, 7], "vars": [["path", "41 → 20 → 29"], ["comparisons", "13"]]}, {"note": "Insert $72$: $72 > 41$: right; $72 > 65$: right; $72 < 91$: left; the link is empty, so $72$ becomes a new leaf.", "hidden": ["99@14"], "nodeColors": [{"id": "41@0", "color": "blue"}, {"id": "65@2", "color": "blue"}, {"id": "91@6", "color": "blue"}, {"id": "72@13", "color": "green"}], "edgeColors": [{"from": "41@0", "to": "65@2", "color": "blue"}, {"from": "65@2", "to": "91@6", "color": "blue"}, {"from": "91@6", "to": "72@13", "color": "blue"}], "lines": [3, 4, 5, 7], "vars": [["path", "41 → 65 → 91"], ["comparisons", "16"]]}, {"note": "Insert $99$: $99 > 41$: right; $99 > 65$: right; $99 > 91$: right; the link is empty, so $99$ becomes a new leaf.", "nodeColors": [{"id": "41@0", "color": "blue"}, {"id": "65@2", "color": "blue"}, {"id": "91@6", "color": "blue"}, {"id": "99@14", "color": "green"}], "edgeColors": [{"from": "41@0", "to": "65@2", "color": "blue"}, {"from": "65@2", "to": "91@6", "color": "blue"}, {"from": "91@6", "to": "99@14", "color": "blue"}], "lines": [3, 4, 5, 7], "vars": [["path", "41 → 65 → 91"], ["comparisons", "19"]]}, {"note": "Done: height $3$, $19$ comparisons for $10$ keys. Inorder gives the keys sorted: $11, 20, 29, 32, 41, 50, 65, 72, 91, 99$.", "nodeColors": [{"id": "41@0", "color": "green"}, {"id": "20@1", "color": "green"}, {"id": "65@2", "color": "green"}, {"id": "11@3", "color": "green"}, {"id": "29@4", "color": "green"}, {"id": "50@5", "color": "green"}, {"id": "91@6", "color": "green"}, {"id": "32@10", "color": "green"}, {"id": "72@13", "color": "green"}, {"id": "99@14", "color": "green"}], "lines": [8], "vars": [["comparisons", "19"]]}], "code": "void insert(int key) {\n    std::unique_ptr<Node>* link = &root;\n    while (*link) {\n        if (key < (*link)->key) link = &(*link)->left;\n        else                    link = &(*link)->right;\n    }\n    *link = std::make_unique<Node>(key);\n}", "caption": "Blue: the search path. Green: the new leaf. Hidden nodes have not been inserted yet; every node stays where it was attached."},
  "succ": {"type": "algo", "view": "graph", "width": 420, "height": 250, "nodes": [{"id": "41@0", "x": 210.0, "y": 30, "label": "41"}, {"id": "20@1", "x": 105.0, "y": 92, "label": "20"}, {"id": "11@3", "x": 52.5, "y": 154, "label": "11"}, {"id": "29@4", "x": 157.5, "y": 154, "label": "29"}, {"id": "32@10", "x": 183.8, "y": 216, "label": "32"}, {"id": "65@2", "x": 315.0, "y": 92, "label": "65"}, {"id": "50@5", "x": 262.5, "y": 154, "label": "50"}, {"id": "91@6", "x": 367.5, "y": 154, "label": "91"}, {"id": "72@13", "x": 341.2, "y": 216, "label": "72"}, {"id": "99@14", "x": 393.8, "y": 216, "label": "99"}], "edges": [{"from": "20@1", "to": "11@3"}, {"from": "20@1", "to": "29@4"}, {"from": "29@4", "to": "32@10"}, {"from": "41@0", "to": "20@1"}, {"from": "41@0", "to": "65@2"}, {"from": "65@2", "to": "50@5"}, {"from": "65@2", "to": "91@6"}, {"from": "91@6", "to": "72@13"}, {"from": "91@6", "to": "99@14"}], "interval": 1300, "frames": [{"note": "Successor of $32$: the smallest key **greater** than $32$. Start at the root with no candidate.", "lines": [2], "vars": [["x", "32"], ["best", "—"]]}, {"note": "$32 < 41$: $41$ is a candidate, and anything better is smaller, so it is in the left subtree.", "nodeColors": [{"id": "41@0", "color": "purple"}], "nodeNotes": [{"id": "41@0", "text": "here"}], "lines": [4], "vars": [["x", "32"], ["best", "41"]]}, {"note": "$32 \\ge 20$: $20$ and its whole left subtree are too small. Go right.", "nodeColors": [{"id": "41@0", "color": "purple"}, {"id": "20@1", "color": "orange"}], "nodeNotes": [{"id": "20@1", "text": "here"}], "lines": [5], "vars": [["x", "32"], ["best", "41"]]}, {"note": "$32 \\ge 29$: $29$ and its whole left subtree are too small. Go right.", "nodeColors": [{"id": "41@0", "color": "purple"}, {"id": "20@1", "color": "gray"}, {"id": "29@4", "color": "orange"}], "nodeNotes": [{"id": "29@4", "text": "here"}], "lines": [5], "vars": [["x", "32"], ["best", "41"]]}, {"note": "$32 \\ge 32$: $32$ and its whole left subtree are too small. Go right.", "nodeColors": [{"id": "41@0", "color": "purple"}, {"id": "20@1", "color": "gray"}, {"id": "29@4", "color": "gray"}, {"id": "32@10", "color": "orange"}], "nodeNotes": [{"id": "32@10", "text": "here"}], "lines": [5], "vars": [["x", "32"], ["best", "41"]]}, {"note": "Fell off the tree: the successor of $32$ is $41$, the last node where the search went left.", "nodeColors": [{"id": "41@0", "color": "green"}, {"id": "20@1", "color": "gray"}, {"id": "29@4", "color": "gray"}, {"id": "32@10", "color": "gray"}], "lines": [7], "vars": [["x", "32"], ["best", "41"]]}, {"note": "Successor of $65$: the smallest key **greater** than $65$. Start at the root with no candidate.", "lines": [2], "vars": [["x", "65"], ["best", "—"]]}, {"note": "$65 \\ge 41$: $41$ and its whole left subtree are too small. Go right.", "nodeColors": [{"id": "41@0", "color": "orange"}], "nodeNotes": [{"id": "41@0", "text": "here"}], "lines": [5], "vars": [["x", "65"], ["best", "—"]]}, {"note": "$65 \\ge 65$: $65$ and its whole left subtree are too small. Go right.", "nodeColors": [{"id": "41@0", "color": "gray"}, {"id": "65@2", "color": "orange"}], "nodeNotes": [{"id": "65@2", "text": "here"}], "lines": [5], "vars": [["x", "65"], ["best", "—"]]}, {"note": "$65 < 91$: $91$ is a candidate, and anything better is smaller, so it is in the left subtree.", "nodeColors": [{"id": "41@0", "color": "gray"}, {"id": "65@2", "color": "gray"}, {"id": "91@6", "color": "purple"}], "nodeNotes": [{"id": "91@6", "text": "here"}], "lines": [4], "vars": [["x", "65"], ["best", "91"]]}, {"note": "$65 < 72$: $72$ is a candidate, and anything better is smaller, so it is in the left subtree.", "nodeColors": [{"id": "41@0", "color": "gray"}, {"id": "65@2", "color": "gray"}, {"id": "91@6", "color": "purple"}, {"id": "72@13", "color": "purple"}], "nodeNotes": [{"id": "72@13", "text": "here"}], "lines": [4], "vars": [["x", "65"], ["best", "72"]]}, {"note": "Fell off the tree: the successor of $65$ is $72$, the last node where the search went left.", "nodeColors": [{"id": "41@0", "color": "gray"}, {"id": "65@2", "color": "gray"}, {"id": "91@6", "color": "gray"}, {"id": "72@13", "color": "green"}], "lines": [7], "vars": [["x", "65"], ["best", "72"]]}], "code": "const Node* successor(const Node* t, int x) {\n    const Node* best = nullptr;\n    while (t) {\n        if (x < t->key) { best = t; t = t->left.get(); }\n        else            t = t->right.get();\n    }\n    return best;\n}", "caption": "The successor is the last node where the search went **left**. For $32$ that is an ancestor; for $65$, which has a right subtree, it is the minimum of that subtree. One loop covers both cases."},
};
// ---- end generated ----

export const lesson: Lesson = {
  id: 'dsa-bst',
  title: 'Binary Search Trees',
  summary: 'The BST invariant stated precisely and checked correctly; search, insert and delete (including the two-children case) with `std::unique_ptr` ownership; min, max, successor, floor and ceiling; why sorted input wrecks a plain BST; and how `std::set` and `std::map` give you the same operations, balanced.',
  minutes: 22,
  objectives: [
    'State the BST invariant in terms of whole subtrees and validate a tree with the range-passing method',
    'Implement search and insertion with `std::unique_ptr` links, including the pointer-to-link trick that removes the special case for the root',
    'Find the minimum, maximum, successor, predecessor, floor and ceiling of a key in $O(h)$ without parent pointers',
    'Delete a key in all three cases, and explain why copying the in-order successor preserves the invariant',
    'Predict the height of a BST from the insertion order, and choose between a BST, `std::set`/`std::map`, a sorted vector and a hash table',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The invariant, stated precisely',
      blocks: [
        {
          type: 'p',
          text: 'Discrete Math introduced the [[dm-bst|binary search tree]] and proved that its inorder traversal is sorted. In this lesson you implement one properly. Everything rests on one invariant, and the most common bug is stating it too weakly.',
        },
        {
          type: 'definition',
          term: 'BST invariant',
          text: 'For **every** node $v$: every key in $v$\'s **left subtree** is less than $v.\\text{key}$, and every key in its **right subtree** is greater. Equivalently: the inorder traversal is strictly increasing.',
        },
        {
          type: 'p',
          text: 'Comparing each node only with its two children is **not** enough. In the tree below every parent–child pair looks right ($15 < 30$, $34 > 15$, …), but $34$ sits in the left subtree of $30$ while being larger than $30$. A search for $34$ goes right at the root and never finds it.',
        },
        {
          type: 'figure',
          svg: FIG.bad,
          alt: 'Root 30 (orange) with children 15 and 50. 15 has children 8 and 34 (red). 50 has children 42 and 61.',
          caption: 'Every edge looks fine locally, but $34$ is in the left subtree of $30$. This is not a BST.',
          maxWidth: 360,
        },
        {
          type: 'p',
          text: 'The correct check passes an **allowed open range** $(lo, hi)$ down the tree, which is tree-recursion pattern 2 from the previous lesson. The root may hold anything; going left from a node with key $k$ narrows the range to $(lo, k)$; going right narrows it to $(k, hi)$.',
        },
        {
          type: 'code',
          title: 'validating a BST (excerpt of bst.cpp)',
          code: `static bool valid(const Node* t, long long lo, long long hi) {   // keys in (lo, hi)
    if (!t) return true;
    if (t->key <= lo || t->key >= hi) return false;
    return valid(t->left.get(), lo, t->key) && valid(t->right.get(), t->key, hi);
}
// call: valid(root.get(), LLONG_MIN, LLONG_MAX)`,
          annotations: [
            { lines: 1, text: '`long long` bounds can sit strictly outside every `int` key, so a tree containing `INT_MIN` or `INT_MAX` still validates.' },
            { lines: 4, text: 'Left subtree: same lower bound, upper bound becomes this key. Right subtree: lower bound becomes this key. $O(n)$ in total.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Duplicate keys',
          text: 'A set stores each key once, so insertion of an existing key does nothing (`std::set::insert` returns `{iterator, false}`). A multiset must put equal keys consistently on one side, say "equal goes right"; then the invariant becomes "left $<$ key $\\le$ right", and a search for all copies of $x$ continues into the right subtree after finding one. `std::multiset` and `std::multimap` keep equal keys in insertion order.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'error',
      prompt: 'This validator accepts some trees that are not BSTs. Tap the line with the bug.',
      lines: [
        '`bool valid(const Node* t, long long lo, long long hi) {`',
        '`    if (!t) return true;`',
        '`    if (t->key <= lo || t->key >= hi) return false;`',
        '`    return valid(t->left.get(), lo, t->key)`',
        '`        && valid(t->right.get(), lo, t->key);`',
        '`}`',
      ],
      errorLines: [5],
      explanation: 'The right subtree of a node with key $k$ must hold keys in $(k, hi)$: larger than $k$, and still below whatever bound applied to the node itself. Line 5 passes $(lo, k)$, the left subtree\'s range, so it rejects every valid right child and could accept keys smaller than $k$ on the right. Fix: `valid(t->right.get(), t->key, hi)`. Lines 3 and 4 are correct: the node must lie strictly inside its range, and the left subtree gets $(lo, k)$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Search and insert with owning links',
      blocks: [
        {
          type: 'p',
          text: 'Search follows one root-to-leaf path: compare, go left or right, stop on a match or a null link. The cost is $O(h)$ for height $h$, exactly like binary search over a sorted array, except that the "midpoints" are whatever keys happen to sit at the nodes.',
        },
        {
          type: 'p',
          text: '**Insertion** is a search that fails: when you fall off the tree, the null link you fell through is exactly where the new key belongs. The neat way to write it is to walk a **pointer to the link** (`std::unique_ptr<Node>*`) instead of a pointer to the node. When the loop stops, `*link` is the empty `unique_ptr` to fill, whether it is `root` itself or some node\'s `left` or `right`. No special case for the empty tree, no parent pointer.',
        },
        ALGO.insert,
        {
          type: 'code',
          title: 'bst.cpp',
          runnable: true,
          code: CODE.bst,
          output: OUT.bst,
          annotations: [
            { lines: '6-11', text: 'The node type is private to the set. `root` owns the whole tree; destroying the `IntSet` destroys every node.' },
            { lines: '28-33', text: 'The pointer-to-link loop. `&(*link)->left` is the address of the left `unique_ptr` inside the current node.' },
            { lines: 30, text: 'Set semantics: an existing key is not inserted again, and the caller is told so.' },
            { lines: '36-40', text: 'Search is iterative, so it uses $O(1)$ extra memory regardless of the height.' },
            { lines: '41-45', text: 'The minimum is the leftmost node: keep going left. The maximum is symmetric.' },
            { lines: '47-61', text: 'Successor and floor, explained on the next card.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Why `std::unique_ptr` and not raw pointers',
          text: 'Ownership is the hard part of node-based structures. With `unique_ptr` children, the type system enforces that each node has exactly one owner (its parent link), moving a subtree is a `std::move` of one link, and you cannot forget a `delete`. You still use raw, non-owning pointers (`const Node*`) for walking. The one thing to remember is the recursive destructor: for trees that can become very deep, tear them down iteratively.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Insert $35$ into the final tree of the animation (inserted in the order $41, 20, 65, 11, 29, 50, 91, 32, 72, 99$). Where does it go?',
      figure: {
        type: 'figure',
        svg: FIG.full,
        alt: 'A BST: root 41; children 20 and 65; 20 has children 11 and 29; 29 has a right child 32; 65 has children 50 and 91; 91 has children 72 and 99.',
        maxWidth: 380,
      },
      options: [
        { text: 'Right child of $32$', correct: true, why: '$35 < 41$: left. $35 > 20$: right. $35 > 29$: right. $35 > 32$: right, and that link is empty.' },
        { text: 'Left child of $41$', why: '$41$ already has a left child, $20$. Insertion never replaces an existing node; it walks down to an empty link.' },
        { text: 'Left child of $50$', why: 'To reach $50$ the search would have to go right at the root, but $35 < 41$.' },
        { text: 'Left child of $32$', why: '$35 > 32$, so it goes to the right of $32$, not the left.' },
      ],
      explanation: 'Follow the search path $41 \\to 20 \\to 29 \\to 32$ and attach $35$ where the search falls off: $32$\'s empty right link. Check the invariant along the path: $35$ is in $41$\'s left subtree ($35 < 41$ ✓), in $20$\'s right subtree ($> 20$ ✓), in $29$\'s right subtree ($> 29$ ✓) and in $32$\'s right subtree ($> 32$ ✓). The tree\'s height grows from $3$ to $4$: four comparisons.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Min, max, successor, predecessor, floor and ceiling',
      blocks: [
        {
          type: 'p',
          text: 'An ordered structure is worth having because of **ordered queries**, the ones a hash table cannot answer: the smallest key, the next key after $x$, all keys between $a$ and $b$. In a BST they all cost $O(h)$.',
        },
        {
          type: 'list',
          items: [
            '**Minimum / maximum:** the leftmost / rightmost node.',
            '**[[dsa-inorder-successor|Successor]]** of $x$ (the next larger key): if $x$\'s node has a right subtree, the minimum of that subtree. Otherwise, the lowest ancestor whose **left** subtree contains $x$: walking up, the first time you arrive from a left child.',
            '**Predecessor:** the mirror image (maximum of the left subtree, or the lowest ancestor reached from a right child).',
            '**Ceiling / floor** of $x$: the smallest key $\\ge x$ / the largest key $\\le x$. Like the successor, but $x$ itself counts, and $x$ need not be in the tree. These are `lower_bound(x)` and `upper_bound(x)` minus one, from the binary search lesson, transplanted to a tree.',
          ],
        },
        {
          type: 'p',
          text: 'Without parent pointers, you do not walk up. You search down from the root and **remember the last node where you went left**: every such node is larger than $x$, and each later one is smaller than the one before. One loop handles both cases of the successor:',
        },
        ALGO.succ,
        {
          type: 'derivation',
          title: 'Successor of $32$ with the two-case rule',
          steps: [
            { tex: '32 \\text{ has no right subtree}', why: 'So the successor is not below $32$. It must be an ancestor.' },
            { tex: '\\text{path: } 41 \\xrightarrow{\\text{left}} 20 \\xrightarrow{\\text{right}} 29 \\xrightarrow{\\text{right}} 32', why: 'Walking back up, $29$ and $20$ are reached from right children: they are smaller than $32$ (their right subtrees contain it).' },
            { tex: '41 \\text{ is reached from a left child} \\implies \\text{succ}(32) = 41', why: '$32$ lies in $41$\'s left subtree, so $41 > 32$. A key strictly between $32$ and $41$ would also have to be in $41$\'s left subtree, but $32$ is the largest key there: it is reached by going right at every step below $41$ and has no right child.' },
          ],
          result: 'The rule and the "last left turn" loop agree: $41$. For $65$, which has a right subtree, both give the minimum of that subtree, $72$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where this shows up',
          text: 'The `std::set` and `std::map` members `lower_bound`, `upper_bound` and `equal_range` are exactly these walks on a balanced tree. Games use them for timelines (the next scripted event after time $t$), for ordered leaderboards (the players just above and below a score), and for interval data such as "which audio region contains sample $s$?" (the floor of $s$ among region start times).',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'In the same tree ($41$ at the root; $20$, $65$; $11$, $29$, $50$, $91$; $32$, $72$, $99$), what is the **successor** of $50$?',
      figure: {
        type: 'figure',
        svg: FIG.full,
        alt: 'A BST: root 41; children 20 and 65; 20 has children 11 and 29; 29 has a right child 32; 65 has children 50 and 91; 91 has children 72 and 99.',
        maxWidth: 380,
      },
      answer: '65',
      label: 'successor $=$',
      hint: 'Does $50$ have a right subtree? If not, find the last node where the search for $50$ went left.',
      explanation: '$50$ is a leaf, so its successor is an ancestor. Search from the root: $50 \\ge 41$, go right (no candidate); $50 < 65$, candidate $65$, go left; $50 = 50$, go right; fall off. The last left turn was at $65$, so the successor is $65$. Check with the inorder sequence $11, 20, 29, 32, 41, 50, 65, 72, 91, 99$: the key after $50$ is $65$ ✓. (Its predecessor is $41$, the last node where the search went right.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Deletion: three cases',
      blocks: [
        {
          type: 'p',
          text: '[[dsa-bst-deletion|Deleting]] a key starts with a search. What happens next depends on how many children the node has:',
        },
        {
          type: 'steps',
          items: [
            { title: 'No children (a leaf)', text: 'Set the parent\'s link to null. With `unique_ptr` links: `t = nullptr` (the node is freed automatically).' },
            { title: 'One child', text: 'Replace the node by its only child: the whole child subtree moves up one level. Every key in it was already on the correct side of every ancestor, so the invariant holds.' },
            { title: 'Two children', text: 'Find the **in-order successor** $s$: one step right, then left as far as possible. Copy $s$\'s key into the node, then delete $s$ from the right subtree. Since $s$ has no left child, that second deletion is case 1 or case 2.' },
          ],
        },
        ALGO.erase,
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the successor is the right replacement',
          text: 'The node being deleted, $v$, separates its left subtree $L$ from its right subtree $R$: $L < v < R$. The replacement must be larger than all of $L$ and smaller than all of the rest of $R$. The successor $s = \\min R$ is exactly that: $s > v > L$, and $s < $ every other key of $R$. It also has **no left child** (a left child would be smaller and still in $R$, contradicting minimality), which is why deleting it is easy. The predecessor $\\max L$ works symmetrically.',
        },
        {
          type: 'code',
          title: 'erase.cpp',
          runnable: true,
          code: CODE.erase,
          output: OUT.erase,
          annotations: [
            { lines: 21, text: '`Link&` is a reference to the owning pointer itself, so the function can replace a subtree by assigning to `t`.' },
            { lines: 25, text: '`t = std::move(t->right)` is safe: move assignment first releases the child from `t->right`, then destroys the old node (now childless). This one line handles both the leaf case (the right child is null) and the right-child-only case.' },
            { lines: '27-31', text: 'Two children: find the successor, copy its key, delete it below. The recursive call hits case 1 or 2 at the successor.' },
            { lines: '57-72', text: 'A randomized test against `std::set`: thousands of mixed operations, comparing contents and re-validating the invariant. Write tests like this for every container you implement.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Copying keys has a cost',
          text: 'Copying the successor\'s **key** into another node changes which node holds which value. If other code kept a pointer or iterator to the successor\'s node, it now points at a destroyed node, and a pointer to $v$\'s node suddenly sees a different key. That is why `std::map` never copies: it **relinks** the successor node into $v$\'s position, so iterators to all other elements stay valid. For value types that are expensive to copy, relinking is faster too.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Delete the root $41$ from the tree in the figure ($41$; $20$, $65$; $11$, $29$, $50$, $91$; $32$, $72$, $99$) with the successor method. Put the steps in order.',
      figure: {
        type: 'figure',
        svg: FIG.full,
        alt: 'A BST: root 41; children 20 and 65; 20 has children 11 and 29; 29 has a right child 32; 65 has children 50 and 91; 91 has children 72 and 99.',
        maxWidth: 380,
      },
      lines: [
        'Search for $41$: it is the root, and it has two children',
        'Step once to the right, to $65$',
        'Go left from $65$ to $50$; $50$ has no left child, so $50$ is the successor',
        'Copy $50$ into the root node',
        'Delete the old $50$ from the right subtree: it is a leaf, so $65$\'s left link becomes null',
      ],
      explanation: 'The two-children case: the successor is the minimum of the right subtree, found by one step right and then left as far as possible ($65 \\to 50$). Copy its key into the root, then remove the original $50$, which has no left child (here no children at all). The new tree has root $50$ with the same left subtree, and $65$ keeps only its right child $91$. Inorder is still sorted: $11, 20, 29, 32, 50, 65, 72, 91, 99$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Instead of the successor, you may replace a deleted two-child node by its **in-order predecessor**. Which key would replace $41$ in the same tree?',
      options: [
        { text: '$32$', correct: true, why: 'The predecessor is the maximum of the left subtree: from $20$ go right to $29$, right again to $32$, which has no right child.' },
        { text: '$20$', why: '$20$ is the left child, not the largest key in the left subtree. Putting $20$ at the root would leave $29$ and $32$ (both larger than $20$) on its left.' },
        { text: '$29$', why: '$29$ has a right child, $32$, which is larger. Keep going right until there is no right child.' },
        { text: '$50$', why: 'That is the successor (minimum of the right subtree), the other valid choice, not the predecessor.' },
      ],
      explanation: 'The predecessor of $41$ is the largest key smaller than $41$: the rightmost node of the left subtree, $32$. It has no right child, so removing it afterwards is an easy case. Alternating between predecessor and successor (or choosing randomly) avoids slowly skewing the tree in one direction, an effect Hibbard\'s always-successor deletion is known for.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Height is everything: degenerate and random trees',
      blocks: [
        {
          type: 'p',
          text: 'Every operation so far costs $O(h)$, and $h$ depends only on the **order of insertions**. Sorted input is the worst case: each new key is the largest so far, so it goes to the right of everything, and the tree is a linked list with $h = n - 1$. This is not exotic. Entity IDs handed out by a counter, timestamps, and data loaded from a sorted file all arrive sorted.',
        },
        {
          type: 'graph',
          x: [0, 200],
          y: [0, 40],
          xStep: 20,
          yStep: 5,
          functions: [
            { expr: 'x - 1', label: 'sorted input: $h = n - 1$', color: 'red', domain: [1, 200] },
            { expr: '2ln(x)', label: 'random order: average depth $\\approx 2 \\ln n$', color: 'orange', domain: [1, 200] },
            { expr: 'log_2(x)', label: 'perfectly balanced: $h \\approx \\log_2 n$', color: 'blue', domain: [1, 200] },
          ],
          points: [
            { x: 'n', y: '2ln(n)', color: 'orange' },
            { x: 'n', y: 'log_2(n)', color: 'blue' },
          ],
          sliders: [{ name: 'n', min: 2, max: 200, step: 1, value: 100, label: 'number of keys $n$' }],
          readouts: [
            { label: 'sorted height $n - 1$', expr: 'n - 1', digits: 0 },
            { label: 'random: $2 \\ln n \\approx$', expr: '2ln(n)', digits: 1 },
            { label: '$\\log_2 n \\approx$', expr: 'log_2(n)', digits: 1 },
          ],
          caption: 'Cost per search against the number of keys. The red line leaves the window at $n = 41$. A random insertion order gives an average depth of about $2 \\ln n \\approx 1.39 \\log_2 n$: only $39\\%$ worse than perfect balance.',
        },
        {
          type: 'derivation',
          title: 'Comparisons to build a BST from sorted keys $1, 2, \\dots, n$',
          steps: [
            { tex: '\\text{insert } k: \\ k - 1 \\text{ comparisons}', why: 'The tree is a right-going chain $1 \\to 2 \\to \\dots \\to k-1$, and the new key is compared with every node on the way to the bottom.' },
            { tex: '\\sum_{k=1}^{n} (k - 1) = \\frac{n(n-1)}{2}', why: 'Sum of $0 + 1 + \\dots + (n - 1)$.' },
            { tex: 'n = 10\\,000: \\ 49\\,995\\,000 \\text{ comparisons}', why: 'About $5 \\times 10^7$, versus about $1.5 \\times 10^5$ for a random order of the same keys (see the program below).' },
          ],
          result: 'Building from sorted input is $\\Theta(n^2)$, and every later search is $\\Theta(n)$.',
        },
        {
          type: 'code',
          title: 'degenerate.cpp',
          runnable: true,
          code: CODE.degenerate,
          output: OUT.degenerate,
          annotations: [
            { lines: '21-29', text: 'Count one comparison per node passed on the way down; the depth of the new node is the same count.' },
            { lines: '31-38', text: 'Iterative teardown, as in the previous lesson.' },
            { lines: '48-49', text: 'A Fisher–Yates shuffle with our own index draw `rng() % (i + 1)`, so the output is the same with every standard library. (The slight modulo bias does not matter here.)' },
          ],
        },
        {
          type: 'p',
          text: 'A random insertion order makes the expected search cost $O(\\log n)$ (the expected height is about $4.31 \\ln n$, still logarithmic). But you rarely control the order, and an attacker or an unlucky data file can supply the worst case. The fix is a tree that **rebalances itself** after every update so that $h = O(\\log n)$ is guaranteed: the next lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'You insert the keys $1, 2, 3, \\dots, 10$ in this order into an empty plain BST. How many key comparisons are made in total?',
      answer: '45',
      label: 'comparisons $=$',
      hint: 'Inserting $k$ into the chain $1 \\to 2 \\to \\dots \\to k - 1$ compares with every node of it.',
      explanation: 'Key $k$ is compared with each of the $k - 1$ nodes already in the chain before it is attached at the bottom. Total $0 + 1 + 2 + \\dots + 9 = \\frac{10 \\cdot 9}{2} = 45$. The result is a chain of height $9$. A balanced order such as $4, 2, 7, 1, 3, 5, 9, 6, 8, 10$ needs only $19$ comparisons for the same keys.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'True or false: if a node in a BST has two children, its in-order successor has no left child.',
      answer: true,
      explanation: 'True. With two children, the successor is the minimum of the right subtree, reached by going left until there is no left child. If it had a left child, that child would be smaller, still in the right subtree, and so a smaller candidate: a contradiction. This is exactly why the two-children deletion reduces to an easy case. (A node with no right subtree has its successor among its ancestors, and that ancestor may well have a left child.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'std::set, std::map and choosing an ordered structure',
      blocks: [
        {
          type: 'p',
          text: 'In production C++ you almost never hand-roll a BST. `std::set`, `std::map`, `std::multiset` and `std::multimap` are balanced binary search trees (red–black trees in every major implementation), so every operation is guaranteed $O(\\log n)$. Their member functions are the operations of this lesson:',
        },
        {
          type: 'table',
          headers: ['Operation', 'Member', 'Cost'],
          rows: [
            ['search', '`find(k)`, `contains(k)` (C++20)', '$O(\\log n)$'],
            ['insert / erase', '`insert`, `emplace`, `erase(k)`, `erase(it)`', '$O(\\log n)$; `erase(it)` amortized $O(1)$'],
            ['ceiling / successor', '`lower_bound(k)`, `upper_bound(k)`', '$O(\\log n)$'],
            ['min / max', '`begin()`, `std::prev(end())`', '$O(1)$'],
            ['in-order walk', '`++it`, range-`for`', '$O(1)$ amortized per step'],
            ['range $[a, b)$', '`lower_bound(a)` up to `lower_bound(b)`', '$O(\\log n + k)$'],
          ],
        },
        {
          type: 'code',
          title: 'stdset.cpp',
          runnable: true,
          code: CODE.stdset,
          output: OUT.stdset,
          annotations: [
            { lines: '9-11', text: 'Inserted in any order; the map keeps them sorted by key.' },
            { lines: 14, text: '`upper_bound(now)` is the successor query: the first key strictly greater than `now`.' },
            { lines: '18-19', text: 'A range query: one $O(\\log n)$ descent, then an in-order walk over the $k$ results.' },
            { lines: '24-25', text: 'The safe erase-while-iterating idiom: `erase` returns the iterator to the next element. Writing `timeline.erase(it); ++it;` would increment a dangling iterator.' },
            { lines: '31-32', text: 'A custom order: `std::greater<>` puts the highest score first. Pairs break score ties by name.' },
          ],
        },
        {
          type: 'table',
          headers: ['Need', 'Use', 'Why'],
          rows: [
            ['lookup by key only', '`std::unordered_map`', 'expected $O(1)$, no ordering'],
            ['ordered queries + frequent inserts/erases', '`std::map` / `std::set`', '$O(\\log n)$ everything; iterators stay valid'],
            ['data built once, queried a lot', 'sorted `std::vector` + `std::lower_bound` (C++23: `std::flat_map`)', 'contiguous memory: much faster searches; inserts are $O(n)$'],
            ['only the min (or max) repeatedly', '`std::priority_queue`', 'a heap is simpler and faster than a tree'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The hidden cost of node-based containers',
          text: 'Each element of a `std::map` is a separate heap allocation carrying three pointers and a color besides your data, typically 32 bytes of overhead per element on a 64-bit system. A lookup chases about $\\log_2 n$ pointers to scattered memory: for a million entries that is about $20$ potential cache misses. That is why engines prefer sorted vectors or hash tables for hot paths, and keep `std::map` for data that is modified often and needs order, such as an editor\'s object list or a timeline.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'A server keeps live matches keyed by a 64-bit match ID. Matches are created and closed constantly. Every few seconds it must list all matches whose IDs lie in an interval $[a, b)$ (one shard\'s range). Which container fits best?',
      options: [
        { text: '`std::unordered_map<std::uint64_t, Match>`', why: 'Fast single lookups, but a hash table has no order: listing an ID range means scanning every element.' },
        { text: '`std::map<std::uint64_t, Match>`', correct: true, why: 'Insert and erase in $O(\\log n)$, and the range is `lower_bound(a)` up to `lower_bound(b)`: $O(\\log n + k)$.' },
        { text: 'A sorted `std::vector<std::pair<std::uint64_t, Match>>`', why: 'Range queries are fast, but every creation or closure shifts elements: $O(n)$ per update with constant churn.' },
        { text: 'A plain hand-written BST', why: 'IDs from a counter arrive in increasing order, the worst case: the tree degenerates to a list and every operation becomes $O(n)$.' },
      ],
      explanation: 'The requirements are frequent updates **and** ordered range queries. A balanced search tree is the structure that does both in logarithmic time. The plain BST has the right interface but sequential IDs make it degenerate, exactly the scenario from the degenerate-tree card. If ranges were rare and lookups dominated, a hash table plus an occasional full scan could win; measure before choosing.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the loop that returns the **successor** of $x$ (the smallest key greater than $x$), or `nullptr` if there is none.',
      template: '`while (t) { if (x < t->key) { best = t; t = t->` ___ `.get(); } else { t = t->` ___ `.get(); } }` In words: the answer is the last node where the search went ___ .',
      blanks: [{ answers: ['`left`'] }, { answers: ['`right`'] }, { answers: ['left'] }],
      wordBank: ['`left`', '`right`', 'left', 'right'],
      hint: 'If $x < t.\\text{key}$, $t$ is a candidate, and any better candidate is smaller than $t$.',
      explanation: 'When $x < t.\\text{key}$, $t$ is larger than $x$, so it is a candidate; a better (smaller) candidate can only be in $t$\'s **left** subtree. When $x \\ge t.\\text{key}$, $t$ and its whole left subtree are too small, so go **right**. Each left turn records a candidate smaller than the previous one, so the last left turn holds the successor. The floor query is the mirror image: record and go right when $t.\\text{key} \\le x$.',
    },
  ],
  takeaways: [
    'The BST invariant is about whole subtrees; validate it by passing an allowed range $(lo, hi)$ down the tree, not by comparing parents with children.',
    'Search, insert, min, max, successor, floor and ceiling all walk one path: $O(h)$. Insert with a pointer to the `unique_ptr` link, so the empty tree needs no special case.',
    'The successor is the minimum of the right subtree if there is one, otherwise the last ancestor where the search went left; one "last left turn" loop handles both.',
    'Delete: a leaf disappears, a one-child node is replaced by its child, and a two-child node takes its successor\'s key (the successor has no left child, so removing it is easy).',
    'Height depends on insertion order: sorted input gives a chain ($h = n - 1$, $\\Theta(n^2)$ to build), random order gives depth about $2 \\ln n$. Only self-balancing trees guarantee $O(\\log n)$.',
    '`std::set`/`std::map` are balanced BSTs with `lower_bound`, `upper_bound` and stable iterators; prefer hash tables for unordered lookup and sorted vectors for static data.',
  ],
  reading: [
    { title: 'Sedgewick & Wayne, Algorithms (4th ed.)', url: 'https://algs4.cs.princeton.edu/home/', source: 'book', note: 'Section 3.2, "Binary Search Trees", covers floor, ceiling, rank, select and Hibbard deletion with excellent figures.' },
    { title: 'MIT 6.006 Introduction to Algorithms (Spring 2020)', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/', source: 'other', note: 'Lecture 6, "Binary Trees, Part 1", builds the same operations with subtree-first and successor reasoning.' },
    { title: 'VisuAlgo', url: 'https://visualgo.net/en', source: 'other', note: 'The BST visualization lets you insert, delete and search your own keys and watch each case.' },
    { title: 'cppreference: std::map', url: 'https://en.cppreference.com/w/cpp/container/map', source: 'other', note: 'The member functions, their complexity guarantees and the iterator invalidation rules.' },
  ],
};
