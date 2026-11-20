import type { AlgoBlock, Lesson } from '../../types';

// ---- generated: figures, runnable examples and animation frames ----
const FIG: Record<string, string> = {
  "ambig": `<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg"><line x1="66.0" y1="44.4" x2="46.5" y2="75.6" stroke="currentColor" stroke-width="1.6"/><circle cx="75.0" cy="30" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="75.0" y="35.0" text-anchor="middle" font-size="14">X</text><circle cx="37.5" cy="90" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="37.5" y="95.0" text-anchor="middle" font-size="14">Y</text><line x1="234.0" y1="44.4" x2="253.5" y2="75.6" stroke="currentColor" stroke-width="1.6"/><circle cx="225.0" cy="30" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="225.0" y="35.0" text-anchor="middle" font-size="14">X</text><circle cx="262.5" cy="90" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="262.5" y="95.0" text-anchor="middle" font-size="14">Y</text><text x="75" y="122" text-anchor="middle" font-size="12" class="t-gray">Y is a left child</text><text x="225" y="122" text-anchor="middle" font-size="12" class="t-gray">Y is a right child</text></svg>`,
  "built": `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg"><line x1="185.2" y1="34.3" x2="114.8" y2="73.7" stroke="currentColor" stroke-width="1.6"/><line x1="88.7" y1="94.7" x2="61.3" y2="125.3" stroke="currentColor" stroke-width="1.6"/><line x1="111.3" y1="94.7" x2="138.7" y2="125.3" stroke="currentColor" stroke-width="1.6"/><line x1="143.1" y1="153.5" x2="131.9" y2="178.5" stroke="currentColor" stroke-width="1.6"/><line x1="156.9" y1="153.5" x2="168.1" y2="178.5" stroke="currentColor" stroke-width="1.6"/><line x1="214.8" y1="34.3" x2="285.2" y2="73.7" stroke="currentColor" stroke-width="1.6"/><line x1="311.3" y1="94.7" x2="338.7" y2="125.3" stroke="currentColor" stroke-width="1.6"/><line x1="343.1" y1="153.5" x2="331.9" y2="178.5" stroke="currentColor" stroke-width="1.6"/><circle cx="200.0" cy="26" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200.0" y="31.0" text-anchor="middle" font-size="14">8</text><circle cx="100.0" cy="82" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="100.0" y="87.0" text-anchor="middle" font-size="14">3</text><circle cx="50.0" cy="138" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50.0" y="143.0" text-anchor="middle" font-size="14">1</text><circle cx="150.0" cy="138" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150.0" y="143.0" text-anchor="middle" font-size="14">6</text><circle cx="125.0" cy="194" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="125.0" y="199.0" text-anchor="middle" font-size="14">4</text><circle cx="175.0" cy="194" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="175.0" y="199.0" text-anchor="middle" font-size="14">7</text><circle cx="300.0" cy="82" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="300.0" y="87.0" text-anchor="middle" font-size="14">10</text><circle cx="350.0" cy="138" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350.0" y="143.0" text-anchor="middle" font-size="14">14</text><circle cx="325.0" cy="194" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="325.0" y="199.0" text-anchor="middle" font-size="14">13</text></svg>`,
  "implicit": `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><line x1="108.2" y1="42.2" x2="71.8" y2="79.8" stroke="currentColor" stroke-width="1.6"/><line x1="52.6" y1="107.3" x2="37.4" y2="138.7" stroke="currentColor" stroke-width="1.6"/><line x1="67.4" y1="107.3" x2="82.6" y2="138.7" stroke="currentColor" stroke-width="1.6"/><line x1="131.8" y1="42.2" x2="168.2" y2="79.8" stroke="currentColor" stroke-width="1.6"/><line x1="172.6" y1="107.3" x2="157.4" y2="138.7" stroke="currentColor" stroke-width="1.6"/><circle cx="120.0" cy="30" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="120.0" y="35.0" text-anchor="middle" font-size="14">10</text><text x="120.0" y="61" text-anchor="middle" font-size="11" class="t-gray">[0]</text><circle cx="60.0" cy="92" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60.0" y="97.0" text-anchor="middle" font-size="14">20</text><text x="60.0" y="123" text-anchor="middle" font-size="11" class="t-gray">[1]</text><circle cx="30.0" cy="154" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="30.0" y="159.0" text-anchor="middle" font-size="14">40</text><text x="30.0" y="185" text-anchor="middle" font-size="11" class="t-gray">[3]</text><circle cx="90.0" cy="154" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90.0" y="159.0" text-anchor="middle" font-size="14">50</text><text x="90.0" y="185" text-anchor="middle" font-size="11" class="t-gray">[4]</text><circle cx="180.0" cy="92" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180.0" y="97.0" text-anchor="middle" font-size="14">30</text><text x="180.0" y="123" text-anchor="middle" font-size="11" class="t-gray">[2]</text><circle cx="150.0" cy="154" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150.0" y="159.0" text-anchor="middle" font-size="14">60</text><text x="150.0" y="185" text-anchor="middle" font-size="11" class="t-gray">[5]</text><rect x="269.5" y="80" width="37" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="288.0" y="102" text-anchor="middle" font-size="14">10</text><text x="288.0" y="130" text-anchor="middle" font-size="11" class="t-gray">0</text><rect x="309.5" y="80" width="37" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="328.0" y="102" text-anchor="middle" font-size="14">20</text><text x="328.0" y="130" text-anchor="middle" font-size="11" class="t-gray">1</text><rect x="349.5" y="80" width="37" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="368.0" y="102" text-anchor="middle" font-size="14">30</text><text x="368.0" y="130" text-anchor="middle" font-size="11" class="t-gray">2</text><rect x="389.5" y="80" width="37" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="408.0" y="102" text-anchor="middle" font-size="14">40</text><text x="408.0" y="130" text-anchor="middle" font-size="11" class="t-gray">3</text><rect x="429.5" y="80" width="37" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="448.0" y="102" text-anchor="middle" font-size="14">50</text><text x="448.0" y="130" text-anchor="middle" font-size="11" class="t-gray">4</text><rect x="469.5" y="80" width="37" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="488.0" y="102" text-anchor="middle" font-size="14">60</text><text x="488.0" y="130" text-anchor="middle" font-size="11" class="t-gray">5</text><path d="M334.0,76 Q371.0,62 408.0,74" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><path d="M404.0,67 L412.0,67 L408.0,75 Z" fill="currentColor" class="f-blue"/><path d="M322.0,76 Q385.0,48 448.0,74" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><path d="M444.0,67 L452.0,67 L448.0,75 Z" fill="currentColor" class="f-blue"/><text x="388" y="160" text-anchor="middle" font-size="12.5" class="t-blue">children of i: 2i + 1, 2i + 2</text><text x="388" y="180" text-anchor="middle" font-size="12.5" class="t-gray">parent of i: (i − 1) / 2</text></svg>`,
  "otree7": `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><line x1="146.1" y1="35.7" x2="93.9" y2="72.3" stroke="currentColor" stroke-width="1.6"/><line x1="70.1" y1="95.8" x2="49.9" y2="124.2" stroke="currentColor" stroke-width="1.6"/><line x1="173.9" y1="35.7" x2="226.1" y2="72.3" stroke="currentColor" stroke-width="1.6"/><line x1="230.1" y1="95.8" x2="209.9" y2="124.2" stroke="currentColor" stroke-width="1.6"/><line x1="194.3" y1="154.0" x2="185.7" y2="178.0" stroke="currentColor" stroke-width="1.6"/><line x1="249.9" y1="95.8" x2="270.1" y2="124.2" stroke="currentColor" stroke-width="1.6"/><circle cx="160.0" cy="26" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160.0" y="31.0" text-anchor="middle" font-size="14">K</text><circle cx="80.0" cy="82" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="80.0" y="87.0" text-anchor="middle" font-size="14">G</text><circle cx="40.0" cy="138" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="40.0" y="143.0" text-anchor="middle" font-size="14">C</text><circle cx="240.0" cy="82" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="240.0" y="87.0" text-anchor="middle" font-size="14">R</text><circle cx="200.0" cy="138" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200.0" y="143.0" text-anchor="middle" font-size="14">N</text><circle cx="180.0" cy="194" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180.0" y="199.0" text-anchor="middle" font-size="14">L</text><circle cx="280.0" cy="138" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="280.0" y="143.0" text-anchor="middle" font-size="14">W</text></svg>`,
  "pool": `<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg"><line x1="103.4" y1="42.5" x2="69.1" y2="79.5" stroke="currentColor" stroke-width="1.6"/><line x1="50.4" y1="107.4" x2="35.9" y2="138.6" stroke="currentColor" stroke-width="1.6"/><line x1="64.6" y1="107.4" x2="79.1" y2="138.6" stroke="currentColor" stroke-width="1.6"/><line x1="126.6" y1="42.5" x2="160.9" y2="79.5" stroke="currentColor" stroke-width="1.6"/><line x1="179.6" y1="107.4" x2="194.1" y2="138.6" stroke="currentColor" stroke-width="1.6"/><circle cx="115.0" cy="30" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="115.0" y="35.0" text-anchor="middle" font-size="14">A</text><circle cx="57.5" cy="92" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="57.5" y="97.0" text-anchor="middle" font-size="14">B</text><circle cx="28.8" cy="154" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="28.8" y="159.0" text-anchor="middle" font-size="14">D</text><circle cx="86.2" cy="154" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="86.2" y="159.0" text-anchor="middle" font-size="14">E</text><circle cx="172.5" cy="92" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="172.5" y="97.0" text-anchor="middle" font-size="14">C</text><circle cx="201.2" cy="154" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="201.2" y="159.0" text-anchor="middle" font-size="14">F</text><text x="287.0" y="26" text-anchor="middle" font-size="12" class="t-gray">index</text><text x="337.0" y="26" text-anchor="middle" font-size="12" class="t-gray">key</text><text x="392.0" y="26" text-anchor="middle" font-size="12" class="t-gray">left</text><text x="452.0" y="26" text-anchor="middle" font-size="12" class="t-gray">right</text><rect x="264" y="36" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="287.0" y="52" text-anchor="middle" font-size="13">0</text><rect x="314" y="36" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="337.0" y="52" text-anchor="middle" font-size="13">A</text><rect x="364" y="36" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="392.0" y="52" text-anchor="middle" font-size="13">1</text><rect x="424" y="36" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="452.0" y="52" text-anchor="middle" font-size="13">2</text><rect x="264" y="62" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="287.0" y="78" text-anchor="middle" font-size="13">1</text><rect x="314" y="62" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="337.0" y="78" text-anchor="middle" font-size="13">B</text><rect x="364" y="62" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="392.0" y="78" text-anchor="middle" font-size="13">3</text><rect x="424" y="62" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="452.0" y="78" text-anchor="middle" font-size="13">4</text><rect x="264" y="88" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="287.0" y="104" text-anchor="middle" font-size="13">2</text><rect x="314" y="88" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="337.0" y="104" text-anchor="middle" font-size="13">C</text><rect x="364" y="88" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="392.0" y="104" text-anchor="middle" font-size="13" class="t-gray">-1</text><rect x="424" y="88" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="452.0" y="104" text-anchor="middle" font-size="13">5</text><rect x="264" y="114" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="287.0" y="130" text-anchor="middle" font-size="13">3</text><rect x="314" y="114" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="337.0" y="130" text-anchor="middle" font-size="13">D</text><rect x="364" y="114" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="392.0" y="130" text-anchor="middle" font-size="13" class="t-gray">-1</text><rect x="424" y="114" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="452.0" y="130" text-anchor="middle" font-size="13" class="t-gray">-1</text><rect x="264" y="140" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="287.0" y="156" text-anchor="middle" font-size="13">4</text><rect x="314" y="140" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="337.0" y="156" text-anchor="middle" font-size="13">E</text><rect x="364" y="140" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="392.0" y="156" text-anchor="middle" font-size="13" class="t-gray">-1</text><rect x="424" y="140" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="452.0" y="156" text-anchor="middle" font-size="13" class="t-gray">-1</text><rect x="264" y="166" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="287.0" y="182" text-anchor="middle" font-size="13">5</text><rect x="314" y="166" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="337.0" y="182" text-anchor="middle" font-size="13">F</text><rect x="364" y="166" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="392.0" y="182" text-anchor="middle" font-size="13" class="t-gray">-1</text><rect x="424" y="166" width="56" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="0.8" class="s-gray"/><text x="452.0" y="182" text-anchor="middle" font-size="13" class="t-gray">-1</text><text x="372.0" y="210" text-anchor="middle" font-size="12" class="t-gray">std::vector&lt;Node&gt; pool; −1 = no child</text></svg>`,
  "qtree": `<svg viewBox="0 0 360 256" xmlns="http://www.w3.org/2000/svg"><line x1="165.3" y1="32.5" x2="104.7" y2="67.5" stroke="currentColor" stroke-width="1.6"/><line x1="78.9" y1="88.9" x2="56.1" y2="115.1" stroke="currentColor" stroke-width="1.6"/><line x1="38.2" y1="143.6" x2="29.3" y2="164.4" stroke="currentColor" stroke-width="1.6"/><line x1="51.8" y1="143.6" x2="60.7" y2="164.4" stroke="currentColor" stroke-width="1.6"/><line x1="71.1" y1="196.6" x2="75.2" y2="215.4" stroke="currentColor" stroke-width="1.6"/><line x1="101.1" y1="88.9" x2="123.9" y2="115.1" stroke="currentColor" stroke-width="1.6"/><line x1="194.7" y1="32.5" x2="255.3" y2="67.5" stroke="currentColor" stroke-width="1.6"/><line x1="281.1" y1="88.9" x2="303.9" y2="115.1" stroke="currentColor" stroke-width="1.6"/><circle cx="180.0" cy="24" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180.0" y="29.0" text-anchor="middle" font-size="14">P</text><circle cx="90.0" cy="76" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90.0" y="81.0" text-anchor="middle" font-size="14">Q</text><circle cx="45.0" cy="128" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="45.0" y="133.0" text-anchor="middle" font-size="14">S</text><circle cx="22.5" cy="180" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="22.5" y="185.0" text-anchor="middle" font-size="14">U</text><circle cx="67.5" cy="180" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="67.5" y="185.0" text-anchor="middle" font-size="14">V</text><circle cx="78.8" cy="232" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="78.8" y="237.0" text-anchor="middle" font-size="14">X</text><circle cx="135.0" cy="128" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="135.0" y="133.0" text-anchor="middle" font-size="14">T</text><circle cx="270.0" cy="76" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="270.0" y="81.0" text-anchor="middle" font-size="14">R</text><circle cx="315.0" cy="128" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="315.0" y="133.0" text-anchor="middle" font-size="14">W</text></svg>`,
};
const CODE: Record<string, string> = {
  "build": `#include <cstdio>
#include <memory>
#include <string>
#include <unordered_map>
#include <vector>

struct Node {
    int key;
    std::unique_ptr<Node> left, right;
};

// Rebuild a tree with distinct keys from its preorder and inorder sequences.
class Builder {
    const std::vector<int>& pre;
    std::unordered_map<int, int> where;   // key -> index in inorder: O(1) split
    std::size_t next = 0;                 // next unused preorder position
public:
    Builder(const std::vector<int>& p, const std::vector<int>& in) : pre(p) {
        for (int i = 0; i < (int)in.size(); ++i) where[in[i]] = i;
    }
    // Build the subtree whose inorder sequence is in[lo, hi).
    std::unique_ptr<Node> build(int lo, int hi) {
        if (lo >= hi) return nullptr;
        int key = pre[next++];            // preorder: the subtree's root comes first
        int m = where[key];               // inorder: left part | root | right part
        auto t = std::make_unique<Node>(Node{key, nullptr, nullptr});
        t->left = build(lo, m);           // the left subtree uses the next preorder keys
        t->right = build(m + 1, hi);
        return t;
    }
};

void postorder(const Node* t, std::string& out) {
    if (!t) return;
    postorder(t->left.get(), out);
    postorder(t->right.get(), out);
    out += std::to_string(t->key) + ' ';
}

// Serialize: preorder with '#' for every empty subtree. Enough to rebuild on its own.
void serialize(const Node* t, std::string& out) {
    if (!t) { out += "# "; return; }
    out += std::to_string(t->key) + ' ';
    serialize(t->left.get(), out);
    serialize(t->right.get(), out);
}

int main() {
    std::vector<int> pre = {8, 3, 1, 6, 4, 7, 10, 14, 13};
    std::vector<int> in  = {1, 3, 4, 6, 7, 8, 10, 13, 14};
    Builder b(pre, in);
    auto root = b.build(0, (int)in.size());

    std::string post, saved;
    postorder(root.get(), post);
    serialize(root.get(), saved);
    std::printf("postorder:  %s\\nserialized: %s\\n", post.c_str(), saved.c_str());
}`,
  "recursion": `#include <algorithm>
#include <cstdio>
#include <cstdlib>
#include <memory>
#include <string_view>

struct Node {
    char key;
    std::unique_ptr<Node> left, right;
};

// Read a tree from its preorder with '#' for empty subtrees, e.g. "AB##C##".
std::unique_ptr<Node> parse(std::string_view& s) {
    char c = s.front(); s.remove_prefix(1);
    if (c == '#') return nullptr;
    auto t = std::make_unique<Node>(Node{c, nullptr, nullptr});
    t->left = parse(s);
    t->right = parse(s);
    return t;
}

// Pattern 1: combine the children's answers (postorder).
int height(const Node* t) {                     // edges on the longest downward path
    if (!t) return -1;                          // so a single leaf has height 0
    return 1 + std::max(height(t->left.get()), height(t->right.get()));
}
int size(const Node* t) { return t ? 1 + size(t->left.get()) + size(t->right.get()) : 0; }

// Pattern 2: pass information down (preorder).
void printDepths(const Node* t, int depth) {
    if (!t) return;
    std::printf("%c:%d ", t->key, depth);
    printDepths(t->left.get(), depth + 1);
    printDepths(t->right.get(), depth + 1);
}

// Pattern 3: return one thing, update another. Returns the height and
// records the diameter (longest path between any two nodes, in edges).
int heightAndDiameter(const Node* t, int& best) {
    if (!t) return -1;
    int hl = heightAndDiameter(t->left.get(), best);
    int hr = heightAndDiameter(t->right.get(), best);
    best = std::max(best, hl + hr + 2);         // longest path that bends at t
    return 1 + std::max(hl, hr);
}

// Height if every node's subtrees differ in height by at most 1, else -2. O(n).
int balancedHeight(const Node* t) {
    if (!t) return -1;
    int hl = balancedHeight(t->left.get());
    if (hl == -2) return -2;
    int hr = balancedHeight(t->right.get());
    if (hr == -2 || std::abs(hl - hr) > 1) return -2;
    return 1 + std::max(hl, hr);
}

int main() {
    for (std::string_view text : {"PQSU##V#X##T##R#W##", "MFB#D##H##SP##VT###"}) {
        std::string_view s = text;
        auto root = parse(s);
        int diameter = 0;
        int h = heightAndDiameter(root.get(), diameter);
        std::printf("%.*s\\n  size %d, height %d (check %d), diameter %d, %s\\n  depths: ",
                    int(text.size()), text.data(), size(root.get()), h, height(root.get()), diameter,
                    balancedHeight(root.get()) == -2 ? "not balanced" : "balanced");
        printDepths(root.get(), 0);
        std::printf("\\n");
    }
}`,
  "repr": `#include <cstdint>
#include <cstdio>
#include <memory>
#include <vector>

// 1. Owning pointers: each node owns its children; freeing the root frees the tree.
struct Node {
    char key;
    std::unique_ptr<Node> left, right;
};

// 2. A pool: nodes live in one vector and refer to each other by index.
struct PoolNode {
    char key;
    std::int32_t left = -1, right = -1;   // -1 means "no child"
};

void preorder(const Node* t) {
    if (!t) return;
    std::printf("%c ", t->key);
    preorder(t->left.get());
    preorder(t->right.get());
}

void preorder(const std::vector<PoolNode>& pool, std::int32_t i) {
    if (i < 0) return;
    std::printf("%c ", pool[i].key);
    preorder(pool, pool[i].left);
    preorder(pool, pool[i].right);
}

int main() {
    // The tree  A(B(D, E), C(-, F))  built three ways.
    auto make = [](char k) { return std::make_unique<Node>(Node{k, nullptr, nullptr}); };
    auto root = make('A');
    root->left = make('B');
    root->right = make('C');
    root->left->left = make('D');
    root->left->right = make('E');
    root->right->right = make('F');

    std::vector<PoolNode> pool = {
        {'A', 1, 2}, {'B', 3, 4}, {'C', -1, 5}, {'D'}, {'E'}, {'F'}};

    // 3. Implicit layout of a COMPLETE tree: children of i at 2i+1 and 2i+2.
    std::vector<int> heap = {10, 20, 30, 40, 50, 60};
    std::size_t i = 1;
    std::printf("implicit: node %d has children %d and %d, parent %d\\n",
                heap[i], heap[2 * i + 1], heap[2 * i + 2], heap[(i - 1) / 2]);

    std::printf("pointers: "); preorder(root.get());   std::printf("\\n");
    std::printf("pool:     "); preorder(pool, 0);      std::printf("\\n");
    std::printf("sizeof(Node) = %zu bytes, sizeof(PoolNode) = %zu bytes\\n",
                sizeof(Node), sizeof(PoolNode));
}`,
  "traversal": `#include <algorithm>
#include <cstdio>
#include <memory>
#include <queue>
#include <string>
#include <vector>

struct Node {
    int key;
    std::unique_ptr<Node> left, right;
};

std::string preorderIter(const Node* root) {
    std::string out;
    std::vector<const Node*> st;
    if (root) st.push_back(root);
    while (!st.empty()) {
        const Node* t = st.back(); st.pop_back();
        out += std::to_string(t->key) + ' ';
        if (t->right) st.push_back(t->right.get());   // pushed first, popped last
        if (t->left)  st.push_back(t->left.get());
    }
    return out;
}

std::string inorderIter(const Node* root) {
    std::string out;
    std::vector<const Node*> st;
    const Node* cur = root;
    while (cur || !st.empty()) {
        while (cur) { st.push_back(cur); cur = cur->left.get(); }   // run down the left spine
        cur = st.back(); st.pop_back();
        out += std::to_string(cur->key) + ' ';
        cur = cur->right.get();
    }
    return out;
}

// Postorder = reverse of "root, right, left" (a mirrored preorder).
std::string postorderIter(const Node* root) {
    std::vector<int> keys;
    std::vector<const Node*> st;
    if (root) st.push_back(root);
    while (!st.empty()) {
        const Node* t = st.back(); st.pop_back();
        keys.push_back(t->key);
        if (t->left)  st.push_back(t->left.get());
        if (t->right) st.push_back(t->right.get());
    }
    std::reverse(keys.begin(), keys.end());
    std::string out;
    for (int k : keys) out += std::to_string(k) + ' ';
    return out;
}

std::vector<std::vector<int>> levels(const Node* root) {
    std::vector<std::vector<int>> out;
    std::queue<const Node*> q;
    if (root) q.push(root);
    while (!q.empty()) {
        out.emplace_back();
        for (std::size_t width = q.size(); width > 0; --width) {   // exactly one level
            const Node* t = q.front(); q.pop();
            out.back().push_back(t->key);
            if (t->left)  q.push(t->left.get());
            if (t->right) q.push(t->right.get());
        }
    }
    return out;
}

// Free a tree without recursion: the default unique_ptr destructor recurses
// once per level and overflows the stack on a long chain.
void destroy(std::unique_ptr<Node> root) {
    std::vector<std::unique_ptr<Node>> st;
    if (root) st.push_back(std::move(root));
    while (!st.empty()) {
        std::unique_ptr<Node> t = std::move(st.back()); st.pop_back();
        if (t->left)  st.push_back(std::move(t->left));
        if (t->right) st.push_back(std::move(t->right));
    }   // t is destroyed here, with both children already detached
}

std::unique_ptr<Node> leaf(int k) { return std::make_unique<Node>(Node{k, nullptr, nullptr}); }

int main() {
    // 1(2(4, 5(8, -)), 3(6, 7(-, 9)))
    auto root = leaf(1);
    root->left = leaf(2);  root->right = leaf(3);
    root->left->left = leaf(4);  root->left->right = leaf(5);
    root->left->right->left = leaf(8);
    root->right->left = leaf(6); root->right->right = leaf(7);
    root->right->right->right = leaf(9);

    std::printf("pre:   %s\\nin:    %s\\npost:  %s\\nlevels:", preorderIter(root.get()).c_str(),
                inorderIter(root.get()).c_str(), postorderIter(root.get()).c_str());
    for (const auto& lv : levels(root.get())) {
        std::printf(" [");
        for (std::size_t i = 0; i < lv.size(); ++i) std::printf(i ? " %d" : "%d", lv[i]);
        std::printf("]");
    }
    std::printf("\\n");
    destroy(std::move(root));

    // A degenerate chain of a million nodes: deep recursion would crash here.
    auto chain = leaf(0);
    Node* tail = chain.get();
    for (int k = 1; k < 1'000'000; ++k) { tail->right = leaf(k); tail = tail->right.get(); }
    std::size_t visited = 0;
    std::vector<const Node*> st;
    for (const Node* cur = chain.get(); cur || !st.empty();) {
        while (cur) { st.push_back(cur); cur = cur->left.get(); }
        cur = st.back(); st.pop_back(); ++visited; cur = cur->right.get();
    }
    std::printf("chain: visited %zu nodes iteratively\\n", visited);
    destroy(std::move(chain));
}`,
};
const OUT: Record<string, string> = {
  "build": `postorder:  1 4 7 6 3 13 14 10 8
serialized: 8 3 1 # # 6 4 # # 7 # # 10 # 14 13 # # #`,
  "recursion": `PQSU##V#X##T##R#W##
  size 9, height 4 (check 4), diameter 6, not balanced
  depths: P:0 Q:1 S:2 U:3 V:3 X:4 T:2 R:1 W:2
MFB#D##H##SP##VT###
  size 9, height 3 (check 3), diameter 6, balanced
  depths: M:0 F:1 B:2 D:3 H:2 S:1 P:2 V:2 T:3`,
  "repr": `implicit: node 20 has children 40 and 50, parent 10
pointers: A B D E C F
pool:     A B D E C F
sizeof(Node) = 24 bytes, sizeof(PoolNode) = 12 bytes`,
  "traversal": `pre:   1 2 4 5 8 3 6 7 9
in:    4 2 8 5 1 6 3 7 9
post:  4 8 5 2 6 9 7 3 1
levels: [1] [2 3] [4 5 6 7] [8 9]
chain: visited 1000000 nodes iteratively`,
};
const ALGO: Record<string, AlgoBlock> = {
  "iter": {"type": "algo", "view": "graph", "width": 380, "height": 230, "nodes": [{"id": "A@0", "x": 190.0, "y": 34, "label": "A"}, {"id": "B@1", "x": 95.0, "y": 100, "label": "B"}, {"id": "D@3", "x": 47.5, "y": 166, "label": "D"}, {"id": "E@4", "x": 142.5, "y": 166, "label": "E"}, {"id": "C@2", "x": 285.0, "y": 100, "label": "C"}, {"id": "F@6", "x": 332.5, "y": 166, "label": "F"}], "edges": [{"from": "A@0", "to": "B@1"}, {"from": "A@0", "to": "C@2"}, {"from": "B@1", "to": "D@3"}, {"from": "B@1", "to": "E@4"}, {"from": "C@2", "to": "F@6"}], "interval": 1200, "frames": [{"note": "Iterative inorder: an explicit stack replaces the call stack. `cur` starts at the root.", "nodeColors": [{"id": "A@0", "color": "orange"}], "nodeNotes": [{"id": "A@0", "text": "cur"}], "lines": [2], "vars": [["stack", "—"], ["visited", "—"]]}, {"note": "Go left as far as possible, pushing $A$, $B$, $D$. Nothing on the stack has been visited yet.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "blue"}, {"id": "D@3", "color": "blue"}], "lines": [4, 5, 6], "vars": [["stack", "A B D  (top at right)"], ["visited", "—"]]}, {"note": "Pop $D$: its left subtree is finished, so visit it. Then `cur` moves to its right child, which is null.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "blue"}, {"id": "D@3", "color": "orange"}], "nodeNotes": [{"id": "D@3", "text": "visit"}], "lines": [8, 9, 10], "vars": [["stack", "A B  (top at right)"], ["visited", "D"]]}, {"note": "`cur` is null: there is no left subtree to explore here.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "blue"}, {"id": "D@3", "color": "green"}], "lines": [4], "vars": [["stack", "A B  (top at right)"], ["visited", "D"]]}, {"note": "Pop $B$: its left subtree is finished, so visit it. Then `cur` moves to its right child $E$.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "D@3", "color": "green"}, {"id": "B@1", "color": "orange"}], "nodeNotes": [{"id": "B@1", "text": "visit"}], "lines": [8, 9, 10], "vars": [["stack", "A  (top at right)"], ["visited", "D B"]]}, {"note": "Go left as far as possible, pushing $E$. Nothing on the stack has been visited yet.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "E@4", "color": "blue"}, {"id": "D@3", "color": "green"}, {"id": "B@1", "color": "green"}], "lines": [4, 5, 6], "vars": [["stack", "A E  (top at right)"], ["visited", "D B"]]}, {"note": "Pop $E$: its left subtree is finished, so visit it. Then `cur` moves to its right child, which is null.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "D@3", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "E@4", "color": "orange"}], "nodeNotes": [{"id": "E@4", "text": "visit"}], "lines": [8, 9, 10], "vars": [["stack", "A  (top at right)"], ["visited", "D B E"]]}, {"note": "`cur` is null: there is no left subtree to explore here.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "D@3", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "E@4", "color": "green"}], "lines": [4], "vars": [["stack", "A  (top at right)"], ["visited", "D B E"]]}, {"note": "Pop $A$: its left subtree is finished, so visit it. Then `cur` moves to its right child $C$.", "nodeColors": [{"id": "D@3", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "E@4", "color": "green"}, {"id": "A@0", "color": "orange"}], "nodeNotes": [{"id": "A@0", "text": "visit"}], "lines": [8, 9, 10], "vars": [["stack", "—"], ["visited", "D B E A"]]}, {"note": "Go left as far as possible, pushing $C$. Nothing on the stack has been visited yet.", "nodeColors": [{"id": "C@2", "color": "blue"}, {"id": "D@3", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "E@4", "color": "green"}, {"id": "A@0", "color": "green"}], "lines": [4, 5, 6], "vars": [["stack", "C  (top at right)"], ["visited", "D B E A"]]}, {"note": "Pop $C$: its left subtree is finished, so visit it. Then `cur` moves to its right child $F$.", "nodeColors": [{"id": "D@3", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "E@4", "color": "green"}, {"id": "A@0", "color": "green"}, {"id": "C@2", "color": "orange"}], "nodeNotes": [{"id": "C@2", "text": "visit"}], "lines": [8, 9, 10], "vars": [["stack", "—"], ["visited", "D B E A C"]]}, {"note": "Go left as far as possible, pushing $F$. Nothing on the stack has been visited yet.", "nodeColors": [{"id": "F@6", "color": "blue"}, {"id": "D@3", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "E@4", "color": "green"}, {"id": "A@0", "color": "green"}, {"id": "C@2", "color": "green"}], "lines": [4, 5, 6], "vars": [["stack", "F  (top at right)"], ["visited", "D B E A C"]]}, {"note": "Pop $F$: its left subtree is finished, so visit it. Then `cur` moves to its right child, which is null.", "nodeColors": [{"id": "D@3", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "E@4", "color": "green"}, {"id": "A@0", "color": "green"}, {"id": "C@2", "color": "green"}, {"id": "F@6", "color": "orange"}], "nodeNotes": [{"id": "F@6", "text": "visit"}], "lines": [8, 9, 10], "vars": [["stack", "—"], ["visited", "D B E A C F"]]}, {"note": "The stack is empty and `cur` is null: done. Same order as the recursion, with no recursion.", "nodeColors": [{"id": "D@3", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "E@4", "color": "green"}, {"id": "A@0", "color": "green"}, {"id": "C@2", "color": "green"}, {"id": "F@6", "color": "green"}], "lines": [3], "vars": [["visited", "D B E A C F"]]}], "code": "std::vector<const Node*> stack;\nconst Node* cur = root;\nwhile (cur || !stack.empty()) {\n    while (cur) {\n        stack.push_back(cur);\n        cur = cur->left.get();\n    }\n    cur = stack.back(); stack.pop_back();\n    visit(cur);\n    cur = cur->right.get();\n}", "caption": "Blue: on the explicit stack (waiting for their left subtree to finish). Green: visited."},
  "level": {"type": "algo", "view": "graph", "width": 420, "height": 250, "nodes": [{"id": "1@0", "x": 210.0, "y": 30, "label": "1"}, {"id": "2@1", "x": 105.0, "y": 90, "label": "2"}, {"id": "4@3", "x": 52.5, "y": 150, "label": "4"}, {"id": "5@4", "x": 157.5, "y": 150, "label": "5"}, {"id": "8@9", "x": 131.2, "y": 210, "label": "8"}, {"id": "3@2", "x": 315.0, "y": 90, "label": "3"}, {"id": "6@5", "x": 262.5, "y": 150, "label": "6"}, {"id": "7@6", "x": 367.5, "y": 150, "label": "7"}, {"id": "9@14", "x": 393.8, "y": 210, "label": "9"}], "edges": [{"from": "1@0", "to": "2@1"}, {"from": "1@0", "to": "3@2"}, {"from": "2@1", "to": "4@3"}, {"from": "2@1", "to": "5@4"}, {"from": "3@2", "to": "6@5"}, {"from": "3@2", "to": "7@6"}, {"from": "5@4", "to": "8@9"}, {"from": "7@6", "to": "9@14"}], "interval": 1000, "frames": [{"note": "Level order is BFS with a queue. To process one level at a time, read the queue size at the start of each level.", "nodeColors": [{"id": "1@0", "color": "blue"}], "lines": [2], "vars": [["queue", "1"], ["levels", "—"]]}, {"note": "Level $0$ starts. The queue holds exactly this level: `width` $= 1$.", "nodeColors": [{"id": "1@0", "color": "blue"}], "lines": [4], "vars": [["queue", "1"], ["levels", "—"]]}, {"note": "Dequeue $1$, visit it, enqueue $2$, $3$.", "nodeColors": [{"id": "1@0", "color": "orange"}, {"id": "2@1", "color": "blue"}, {"id": "3@2", "color": "blue"}], "lines": [6, 7, 8, 9], "vars": [["queue", "2 3"], ["levels", "1"]]}, {"note": "Level $1$ starts. The queue holds exactly this level: `width` $= 2$.", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "blue"}, {"id": "3@2", "color": "blue"}], "lines": [4], "vars": [["queue", "2 3"], ["levels", "1"]]}, {"note": "Dequeue $2$, visit it, enqueue $4$, $5$.", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "orange"}, {"id": "3@2", "color": "blue"}, {"id": "4@3", "color": "blue"}, {"id": "5@4", "color": "blue"}], "lines": [6, 7, 8, 9], "vars": [["queue", "3 4 5"], ["levels", "1 | 2"]]}, {"note": "Dequeue $3$, visit it, enqueue $6$, $7$.", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "orange"}, {"id": "4@3", "color": "blue"}, {"id": "5@4", "color": "blue"}, {"id": "6@5", "color": "blue"}, {"id": "7@6", "color": "blue"}], "lines": [6, 7, 8, 9], "vars": [["queue", "4 5 6 7"], ["levels", "1 | 2 3"]]}, {"note": "Level $2$ starts. The queue holds exactly this level: `width` $= 4$.", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "green"}, {"id": "4@3", "color": "blue"}, {"id": "5@4", "color": "blue"}, {"id": "6@5", "color": "blue"}, {"id": "7@6", "color": "blue"}], "lines": [4], "vars": [["queue", "4 5 6 7"], ["levels", "1 | 2 3"]]}, {"note": "Dequeue $4$, visit it, enqueue nothing (leaf).", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "green"}, {"id": "4@3", "color": "orange"}, {"id": "5@4", "color": "blue"}, {"id": "6@5", "color": "blue"}, {"id": "7@6", "color": "blue"}], "lines": [6, 7, 8, 9], "vars": [["queue", "5 6 7"], ["levels", "1 | 2 3 | 4"]]}, {"note": "Dequeue $5$, visit it, enqueue $8$.", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "green"}, {"id": "4@3", "color": "green"}, {"id": "5@4", "color": "orange"}, {"id": "6@5", "color": "blue"}, {"id": "7@6", "color": "blue"}, {"id": "8@9", "color": "blue"}], "lines": [6, 7, 8, 9], "vars": [["queue", "6 7 8"], ["levels", "1 | 2 3 | 4 5"]]}, {"note": "Dequeue $6$, visit it, enqueue nothing (leaf).", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "green"}, {"id": "4@3", "color": "green"}, {"id": "5@4", "color": "green"}, {"id": "6@5", "color": "orange"}, {"id": "7@6", "color": "blue"}, {"id": "8@9", "color": "blue"}], "lines": [6, 7, 8, 9], "vars": [["queue", "7 8"], ["levels", "1 | 2 3 | 4 5 6"]]}, {"note": "Dequeue $7$, visit it, enqueue $9$.", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "green"}, {"id": "4@3", "color": "green"}, {"id": "5@4", "color": "green"}, {"id": "6@5", "color": "green"}, {"id": "7@6", "color": "orange"}, {"id": "8@9", "color": "blue"}, {"id": "9@14", "color": "blue"}], "lines": [6, 7, 8, 9], "vars": [["queue", "8 9"], ["levels", "1 | 2 3 | 4 5 6 7"]]}, {"note": "Level $3$ starts. The queue holds exactly this level: `width` $= 2$.", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "green"}, {"id": "4@3", "color": "green"}, {"id": "5@4", "color": "green"}, {"id": "6@5", "color": "green"}, {"id": "7@6", "color": "green"}, {"id": "8@9", "color": "blue"}, {"id": "9@14", "color": "blue"}], "lines": [4], "vars": [["queue", "8 9"], ["levels", "1 | 2 3 | 4 5 6 7"]]}, {"note": "Dequeue $8$, visit it, enqueue nothing (leaf).", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "green"}, {"id": "4@3", "color": "green"}, {"id": "5@4", "color": "green"}, {"id": "6@5", "color": "green"}, {"id": "7@6", "color": "green"}, {"id": "8@9", "color": "orange"}, {"id": "9@14", "color": "blue"}], "lines": [6, 7, 8, 9], "vars": [["queue", "9"], ["levels", "1 | 2 3 | 4 5 6 7 | 8"]]}, {"note": "Dequeue $9$, visit it, enqueue nothing (leaf).", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "green"}, {"id": "4@3", "color": "green"}, {"id": "5@4", "color": "green"}, {"id": "6@5", "color": "green"}, {"id": "7@6", "color": "green"}, {"id": "8@9", "color": "green"}, {"id": "9@14", "color": "orange"}], "lines": [6, 7, 8, 9], "vars": [["queue", "—"], ["levels", "1 | 2 3 | 4 5 6 7 | 8 9"]]}, {"note": "Queue empty. $4$ levels; the widest has $4$ nodes.", "nodeColors": [{"id": "1@0", "color": "green"}, {"id": "2@1", "color": "green"}, {"id": "3@2", "color": "green"}, {"id": "4@3", "color": "green"}, {"id": "5@4", "color": "green"}, {"id": "6@5", "color": "green"}, {"id": "7@6", "color": "green"}, {"id": "8@9", "color": "green"}, {"id": "9@14", "color": "green"}], "lines": [3], "vars": [["levels", "1 | 2 3 | 4 5 6 7 | 8 9"]]}], "code": "std::queue<const Node*> q;\nq.push(root);\nwhile (!q.empty()) {\n    std::size_t width = q.size();\n    for (std::size_t i = 0; i < width; ++i) {\n        const Node* t = q.front(); q.pop();\n        visit(t);\n        if (t->left)  q.push(t->left.get());\n        if (t->right) q.push(t->right.get());\n    }\n}", "caption": "Blue: in the queue. Green: visited. The `width` snapshot separates the levels."},
  "walk": {"type": "algo", "view": "graph", "width": 380, "height": 230, "nodes": [{"id": "A@0", "x": 190.0, "y": 34, "label": "A"}, {"id": "B@1", "x": 95.0, "y": 100, "label": "B"}, {"id": "D@3", "x": 47.5, "y": 166, "label": "D"}, {"id": "E@4", "x": 142.5, "y": 166, "label": "E"}, {"id": "C@2", "x": 285.0, "y": 100, "label": "C"}, {"id": "F@6", "x": 332.5, "y": 166, "label": "F"}], "edges": [{"from": "A@0", "to": "B@1"}, {"from": "A@0", "to": "C@2"}, {"from": "B@1", "to": "D@3"}, {"from": "B@1", "to": "E@4"}, {"from": "C@2", "to": "F@6"}], "interval": 1000, "frames": [{"note": "One recursive walk visits each node **three** times: on the way down, between its subtrees, and on the way back up.", "lines": [1], "vars": [["pre", "—"], ["in", "—"], ["post", "—"]]}, {"note": "Arrive at $A$ (first visit): **preorder** records it.", "nodeColors": [{"id": "A@0", "color": "orange"}], "nodeNotes": [{"id": "A@0", "text": "1st"}], "lines": [3], "vars": [["pre", "A"], ["in", "—"], ["post", "—"]]}, {"note": "Arrive at $B$ (first visit): **preorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "orange"}], "nodeNotes": [{"id": "B@1", "text": "1st"}], "lines": [3], "vars": [["pre", "A B"], ["in", "—"], ["post", "—"]]}, {"note": "Arrive at $D$ (first visit): **preorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "blue"}, {"id": "D@3", "color": "orange"}], "nodeNotes": [{"id": "D@3", "text": "1st"}], "lines": [3], "vars": [["pre", "A B D"], ["in", "—"], ["post", "—"]]}, {"note": "$D$ has no left child, so the second visit comes at once: **inorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "blue"}, {"id": "D@3", "color": "orange"}], "nodeNotes": [{"id": "D@3", "text": "2nd"}], "lines": [5], "vars": [["pre", "A B D"], ["in", "D"], ["post", "—"]]}, {"note": "$D$ has no right child: third visit, **postorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "blue"}, {"id": "D@3", "color": "orange"}], "nodeNotes": [{"id": "D@3", "text": "3rd"}], "lines": [7], "vars": [["pre", "A B D"], ["in", "D"], ["post", "D"]]}, {"note": "Back at $B$ from its left subtree (second visit): **inorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "orange"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "B@1", "text": "2nd"}], "lines": [5], "vars": [["pre", "A B D"], ["in", "D B"], ["post", "D"]]}, {"note": "Arrive at $E$ (first visit): **preorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "blue"}, {"id": "E@4", "color": "orange"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "E@4", "text": "1st"}], "lines": [3], "vars": [["pre", "A B D E"], ["in", "D B"], ["post", "D"]]}, {"note": "$E$ has no left child, so the second visit comes at once: **inorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "blue"}, {"id": "E@4", "color": "orange"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "E@4", "text": "2nd"}], "lines": [5], "vars": [["pre", "A B D E"], ["in", "D B E"], ["post", "D"]]}, {"note": "$E$ has no right child: third visit, **postorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "B@1", "color": "blue"}, {"id": "E@4", "color": "orange"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "E@4", "text": "3rd"}], "lines": [7], "vars": [["pre", "A B D E"], ["in", "D B E"], ["post", "D E"]]}, {"note": "Back at $B$ from its right subtree (third visit): **postorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "E@4", "color": "green"}, {"id": "B@1", "color": "orange"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "B@1", "text": "3rd"}], "lines": [7], "vars": [["pre", "A B D E"], ["in", "D B E"], ["post", "D E B"]]}, {"note": "Back at $A$ from its left subtree (second visit): **inorder** records it.", "nodeColors": [{"id": "A@0", "color": "orange"}, {"id": "E@4", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "A@0", "text": "2nd"}], "lines": [5], "vars": [["pre", "A B D E"], ["in", "D B E A"], ["post", "D E B"]]}, {"note": "Arrive at $C$ (first visit): **preorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "C@2", "color": "orange"}, {"id": "E@4", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "C@2", "text": "1st"}], "lines": [3], "vars": [["pre", "A B D E C"], ["in", "D B E A"], ["post", "D E B"]]}, {"note": "$C$ has no left child, so the second visit comes at once: **inorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "C@2", "color": "orange"}, {"id": "E@4", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "C@2", "text": "2nd"}], "lines": [5], "vars": [["pre", "A B D E C"], ["in", "D B E A C"], ["post", "D E B"]]}, {"note": "Arrive at $F$ (first visit): **preorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "C@2", "color": "blue"}, {"id": "F@6", "color": "orange"}, {"id": "E@4", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "F@6", "text": "1st"}], "lines": [3], "vars": [["pre", "A B D E C F"], ["in", "D B E A C"], ["post", "D E B"]]}, {"note": "$F$ has no left child, so the second visit comes at once: **inorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "C@2", "color": "blue"}, {"id": "F@6", "color": "orange"}, {"id": "E@4", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "F@6", "text": "2nd"}], "lines": [5], "vars": [["pre", "A B D E C F"], ["in", "D B E A C F"], ["post", "D E B"]]}, {"note": "$F$ has no right child: third visit, **postorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "C@2", "color": "blue"}, {"id": "F@6", "color": "orange"}, {"id": "E@4", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "F@6", "text": "3rd"}], "lines": [7], "vars": [["pre", "A B D E C F"], ["in", "D B E A C F"], ["post", "D E B F"]]}, {"note": "Back at $C$ from its right subtree (third visit): **postorder** records it.", "nodeColors": [{"id": "A@0", "color": "blue"}, {"id": "C@2", "color": "orange"}, {"id": "B@1", "color": "green"}, {"id": "F@6", "color": "green"}, {"id": "E@4", "color": "green"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "C@2", "text": "3rd"}], "lines": [7], "vars": [["pre", "A B D E C F"], ["in", "D B E A C F"], ["post", "D E B F C"]]}, {"note": "Back at $A$ from its right subtree (third visit): **postorder** records it.", "nodeColors": [{"id": "C@2", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "F@6", "color": "green"}, {"id": "E@4", "color": "green"}, {"id": "A@0", "color": "orange"}, {"id": "D@3", "color": "green"}], "nodeNotes": [{"id": "A@0", "text": "3rd"}], "lines": [7], "vars": [["pre", "A B D E C F"], ["in", "D B E A C F"], ["post", "D E B F C A"]]}, {"note": "Done. The three orders are three ways of listing the same walk. Blue nodes were the call stack; its depth never exceeded the height plus one.", "nodeColors": [{"id": "A@0", "color": "green"}, {"id": "B@1", "color": "green"}, {"id": "C@2", "color": "green"}, {"id": "D@3", "color": "green"}, {"id": "E@4", "color": "green"}, {"id": "F@6", "color": "green"}], "lines": [8], "vars": [["pre", "A B D E C F"], ["in", "D B E A C F"], ["post", "D E B F C A"]]}], "code": "void walk(const Node* t) {\n    if (!t) return;\n    pre.push_back(t->key);\n    walk(t->left.get());\n    in.push_back(t->key);\n    walk(t->right.get());\n    post.push_back(t->key);\n}", "caption": "Orange: the current node, with which visit this is. Blue: nodes whose call is still on the stack. Green: finished subtrees."},
};
// ---- end generated ----

export const lesson: Lesson = {
  id: 'dsa-binary-trees',
  title: 'Binary Trees and Traversals',
  summary: 'Binary trees in real code: owning pointers, node pools and implicit arrays; the recursive walk behind every traversal; iterative traversals with an explicit stack; level-by-level BFS; height, depth and the three recursion patterns; and rebuilding a tree from its traversals.',
  minutes: 21,
  objectives: [
    'Represent a binary tree with `std::unique_ptr` children, with an index-based node pool, or implicitly in an array, and explain the trade-offs',
    'Derive preorder, inorder and postorder from one recursive walk, and implement all three iteratively with an explicit stack',
    'Process a tree level by level with a queue, and avoid stack overflow on deep trees (including during destruction)',
    'Compute height, size, depth and diameter with the three tree-recursion patterns in $O(n)$',
    'Rebuild a tree from its preorder and inorder sequences, and explain why preorder plus postorder is not enough',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Three ways to store a binary tree',
      blocks: [
        {
          type: 'p',
          text: 'From Discrete Math you know [[dm-tree|trees]], [[dm-rooted-tree|rooted trees]] with their vocabulary (root, parent, leaf, depth, height), and binary trees as the case $m = 2$ of an [[dm-m-ary-tree|m-ary tree]]: each node has at most a left and a right child. Now the question is how the computer stores one, because the representation decides the speed, the memory use and which bugs you can have.',
        },
        {
          type: 'heading',
          text: '1. Nodes with owning pointers',
        },
        {
          type: 'p',
          text: 'The textbook form: each node is a separate heap allocation holding a key and two child pointers. In modern C++ the children are `std::unique_ptr<Node>`, which states the ownership rule in the type: **a parent owns its children**. Destroying the root destroys the whole tree, with no `delete` anywhere and no leaks.',
        },
        {
          type: 'heading',
          text: '2. A node pool with indices',
        },
        {
          type: 'p',
          text: 'Engines often store all nodes in one `std::vector` and replace pointers by 32-bit indices, with $-1$ for "no child". The nodes are contiguous (better cache behavior, one allocation instead of $n$), half the size on a 64-bit machine, trivially copyable and saveable to disk as one block, and indices stay valid when the vector reallocates, unlike pointers. Behavior trees, BVHs for ray casts and animation skeletons are usually stored this way.',
        },
        {
          type: 'figure',
          svg: FIG.pool,
          alt: 'The tree A with children B and C; B has children D and E; C has only a right child F. Next to it, a table with columns index, key, left, right: 0 A 1 2; 1 B 3 4; 2 C −1 5; 3 D −1 −1; 4 E −1 −1; 5 F −1 −1.',
          caption: 'The same tree as a pool. Following `left`/`right` indices replaces following pointers.',
          maxWidth: 520,
        },
        {
          type: 'heading',
          text: '3. Implicit layout in an array',
        },
        {
          type: 'p',
          text: 'If the tree is **complete** (every level full except possibly the last, which is filled from the left), you need no links at all: use the [[dsa-implicit-tree|implicit layout]]. Store the nodes in level order; then the children of index $i$ are at $2i + 1$ and $2i + 2$, and its parent at $\\lfloor (i - 1)/2 \\rfloor$. Binary heaps use this layout. For a tree that is not complete, the gaps waste slots: a chain of right children of height $h$ needs $2^{h+1} - 1$ slots for $h + 1$ nodes.',
        },
        {
          type: 'figure',
          svg: FIG.implicit,
          alt: 'A complete tree with root 10, children 20 and 30, and grandchildren 40, 50, 60, each labelled with its array index 0 to 5. Next to it the array 10, 20, 30, 40, 50, 60 with arrows from index 1 to indices 3 and 4.',
          caption: 'Index arithmetic replaces pointers: the children of index $1$ are at $3$ and $4$.',
          maxWidth: 520,
        },
        {
          type: 'code',
          title: 'repr.cpp',
          runnable: true,
          code: CODE.repr,
          output: OUT.repr,
          annotations: [
            { lines: '7-10', text: '`std::unique_ptr` children: the destructor of a node destroys its subtrees automatically.' },
            { lines: '13-16', text: 'A pool node: a key and two 32-bit indices. `-1` plays the role of `nullptr`.' },
            { lines: '42-43', text: 'The pool is one contiguous vector. Its node $0$ is the root; the order of the other entries does not matter as long as the indices are consistent.' },
            { lines: '46-49', text: 'The implicit layout needs only index arithmetic. `(i - 1) / 2` is integer division, so it rounds down.' },
            { lines: '53-54', text: 'On a 64-bit platform, two pointers cost 16 bytes per node; two `int32_t` indices cost 8.' },
          ],
        },
        {
          type: 'table',
          headers: ['Representation', 'Good for', 'Watch out for'],
          rows: [
            ['`unique_ptr` nodes', 'trees that change shape often (BSTs, tries); clear ownership', 'one allocation per node; pointer chasing; recursive destruction depth'],
            ['Index pool', 'engine data (BVHs, behavior trees, skeletons); serialization', 'manual reuse of freed slots; dangling indices after removal'],
            ['Implicit array', 'complete trees (heaps, segment trees)', 'wastes space for any other shape'],
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A complete binary tree is stored implicitly in an array (root at index $0$). What is the index of the **parent** of the node at index $22$?',
      answer: '10',
      label: 'parent index $=$',
      hint: 'Parent of $i$ is $\\lfloor (i - 1)/2 \\rfloor$. Check by computing that parent\'s children.',
      explanation: '$\\lfloor (22 - 1)/2 \\rfloor = \\lfloor 10.5 \\rfloor = 10$. Check: the children of $10$ are $2 \\cdot 10 + 1 = 21$ and $2 \\cdot 10 + 2 = 22$ ✓. Index $22$ is a right child (even indices other than $0$ are right children). The same formula with integer division in C++ is `(i - 1) / 2`.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'One walk, three orders',
      blocks: [
        {
          type: 'p',
          text: 'Discrete Math defined the four [[dm-tree-traversal|traversals]]. Here is the implementation view: there is really only **one** recursive walk, and it passes each node three times: on the way down, between its two subtrees, and on the way back up. Preorder, inorder and postorder just record the node at the first, second or third pass.',
        },
        ALGO.walk,
        {
          type: 'table',
          headers: ['Order', 'Records the node', 'Typical use'],
          rows: [
            ['Preorder', 'before both subtrees', 'copying or saving a tree; a parent must exist before its children (scene graph world transforms)'],
            ['Inorder', 'between the subtrees', 'sorted output of a binary search tree'],
            ['Postorder', 'after both subtrees', 'freeing nodes; anything computed from the children (sizes, heights, bounding boxes)'],
            ['Level order', 'by depth (BFS, next cards)', 'shortest root-to-node distances; drawing a tree level by level'],
          ],
        },
        {
          type: 'p',
          text: '**Cost.** Each node is entered once and does $O(1)$ work besides the recursive calls, so a traversal is $\\Theta(n)$ time. The extra memory is the call stack: one frame per node on the current root-to-node path, so $O(h)$ for height $h$. That is $O(\\log n)$ for a balanced tree and $O(n)$ for a degenerate one.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Recursion depth is a real limit',
          text: 'A typical thread stack is 1–8 MB, and each recursive call uses dozens of bytes or more. A degenerate tree with a million nodes (easily produced by inserting sorted keys into a plain BST) crashes a recursive traversal with a stack overflow. Worse, **the default destructor recurses too**: destroying the root destroys its child, which destroys its child… A chain of $10^6$ `unique_ptr` nodes segfaults when it goes out of scope. The fix for both is an explicit stack on the heap, next.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'Put the nodes of this tree in **postorder**.',
      figure: {
        type: 'figure',
        svg: FIG.otree7,
        alt: 'A binary tree: root K with children G and R. G has only a left child C. R has children N and W. N has only a left child L.',
        maxWidth: 320,
      },
      lines: ['$C$', '$G$', '$L$', '$N$', '$W$', '$R$', '$K$'],
      hint: 'Postorder records a node on the **third** pass, after both subtrees are finished.',
      explanation: 'Postorder of $K$ = postorder of $G$\'s subtree, then of $R$\'s subtree, then $K$. $G$\'s subtree gives $C\\,G$ (its only child first). $R$\'s subtree: $N$\'s subtree gives $L\\,N$, then $W$, then $R$: $L\\,N\\,W\\,R$. Altogether: $C\\,G\\,L\\,N\\,W\\,R\\,K$. The root is always last, and every node comes after all of its descendants.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Iterative traversals with an explicit stack',
      blocks: [
        {
          type: 'p',
          text: 'Recursion keeps its state on the call stack. To remove the depth limit, keep the same state in a `std::vector` used as a stack: it lives on the heap and can hold millions of entries. Each order needs a slightly different discipline.',
        },
        {
          type: 'list',
          items: [
            '**Preorder:** pop a node, visit it, push its **right** child, then its **left** child. The left child is on top, so its whole subtree is finished before the right child is popped.',
            '**Inorder:** run down the left spine pushing every node, pop one and visit it, then move to its right child and repeat. A node on the stack is one whose left subtree is still being explored.',
            '**Postorder:** the reverse of "root, right, left" (a mirrored preorder) is "left, right, root". Collect the mirrored preorder and reverse it. (A one-stack version that remembers the last visited node also exists, at the price of more bookkeeping.)',
          ],
        },
        ALGO.iter,
        {
          type: 'code',
          title: 'traversal.cpp',
          runnable: true,
          code: CODE.traversal,
          output: OUT.traversal,
          annotations: [
            { lines: '20-21', text: 'Right pushed first, popped last. Swapping these two lines produces root, right, left order.' },
            { lines: '30-35', text: 'Iterative inorder: exactly the loop in the animation.' },
            { lines: '40-54', text: 'Postorder as a reversed mirror preorder: $O(n)$ extra memory for the output, but very simple.' },
            { lines: '60-68', text: 'The `width` snapshot (next card) splits BFS into levels.' },
            { lines: '74-82', text: 'Iterative destruction: detach the children into the stack before the parent dies, so no destructor ever recurses more than one level.' },
            { lines: '105-116', text: 'A million-node chain traversed with an explicit stack. The recursive version, or simply letting `chain` go out of scope with the default destructor, overflows an 8 MB stack.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'O(1) extra memory: Morris traversal',
          text: 'Inorder can even be done with no stack at all. Morris traversal temporarily points the rightmost node of each left subtree back up to its inorder successor, follows those "threads", and removes them on the second visit. It runs in $O(n)$ time and restores the tree, but it modifies the tree while running, so it is not safe for concurrent readers. It is a nice interview topic and rarely used in production.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'This iterative **preorder** traversal of the tree $A(B(D, E), C(-, F))$ prints $A\\,C\\,F\\,B\\,E\\,D$ instead of $A\\,B\\,D\\,E\\,C\\,F$. Tap a line that is in the wrong place.',
      lines: [
        '`std::vector<const Node*> st;`',
        '`if (root) st.push_back(root);`',
        '`while (!st.empty()) {`',
        '`    const Node* t = st.back(); st.pop_back();`',
        '`    visit(t);`',
        '`    if (t->left)  st.push_back(t->left.get());`',
        '`    if (t->right) st.push_back(t->right.get());`',
        '`}`',
      ],
      errorLines: [6, 7],
      explanation: 'A stack is last in, first out. Pushing the left child first and the right child second leaves the **right** child on top, so the right subtree is explored first: root, right, left, which is $A\\,C\\,F\\,B\\,E\\,D$. Push the right child first, then the left, so that the left subtree is finished before the right child is popped. (Root, right, left reversed is exactly postorder, which is the trick `postorderIter` uses on purpose.)',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Level order, one level at a time',
      blocks: [
        {
          type: 'p',
          text: 'Level order is [[dm-bfs|breadth-first search]] on the tree: a `std::queue` instead of a stack. A tree has no cycles, so no `visited` set is needed. Many problems need to know **where one level ends**: the right-side view (the last node of each level), the widest level, zigzag order, or connecting each node to its right neighbor. The trick is to read `q.size()` when a level starts. At that moment the queue holds exactly that level, and the children you enqueue while processing it form the next level.',
        },
        ALGO.level,
        {
          type: 'derivation',
          title: 'Why the queue holds exactly one level at each level start',
          steps: [
            { tex: '\\text{Start: queue} = [\\text{root}] = \\text{level } 0', why: 'True before the first level.' },
            { tex: '\\text{process } w = |\\text{level } d| \\text{ nodes, enqueue their children}', why: 'The $w$ nodes at the front are level $d$ (by induction). Each enqueues its children, which are exactly the nodes of level $d + 1$, in left-to-right order.' },
            { tex: '\\text{after } w \\text{ pops: queue} = \\text{level } d + 1', why: 'All of level $d$ has been removed, and only level-$(d+1)$ nodes were added. So the invariant holds for the next level.' },
          ],
          result: 'Total work $\\Theta(n)$; the queue holds at most one level plus part of the next, up to about $n/2$ nodes in a complete tree.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'BFS or DFS?',
          text: 'Use level order when the answer is about **depth from the root**: the shallowest leaf (stop at the first leaf you dequeue, instead of exploring the whole tree), the nearest node with some property, per-level statistics. Use a depth-first order when the answer for a node is built from its subtrees. Memory differs too: DFS stores one path, $O(h)$; BFS stores one level, which for a bushy tree is $\\Theta(n)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'The **right-side view** of a tree lists the last node of each level, top to bottom. What is it for the tree in the level-order animation, $1(2(4, 5(8, -)), 3(6, 7(-, 9)))$?',
      options: [
        { text: '$1, 3, 7, 9$', correct: true, why: 'Levels are $[1]$, $[2, 3]$, $[4, 5, 6, 7]$, $[8, 9]$; the last of each is $1, 3, 7, 9$.' },
        { text: '$1, 2, 4, 8$', why: 'That is the left-side view: the **first** node of each level.' },
        { text: '$1, 3, 7$', why: 'This stops at depth $2$. The tree has a fourth level, $[8, 9]$, and $9$ is visible from the right.' },
        { text: '$1, 3, 6, 9$', why: '$6$ is not the last node of level $2$: $7$ is to its right.' },
      ],
      explanation: 'Run level order with the `width` snapshot and record the last node of each level: $1$ | $2, 3$ | $4, 5, 6, 7$ | $8, 9$ gives $1, 3, 7, 9$. Note that $8$ is not visible from the right even though it is the only child of $5$: $9$ is on the same level and further right. A common wrong approach is to follow right children from the root ($1, 3, 7, 9$ here by luck), which fails whenever the deepest level is reached only through a left branch.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Height, depth and the three tree-recursion patterns',
      blocks: [
        {
          type: 'p',
          text: 'The **depth** of a node is the number of edges from the root down to it; the **height** of a node is the number of edges on the longest path from it down to a leaf; the height of a tree is the height of its root. With these conventions a single node has height $0$, and it is convenient to give the empty tree height $-1$, so that $\\text{height}(t) = 1 + \\max(\\text{height}(\\text{left}), \\text{height}(\\text{right}))$ works with no special cases.',
        },
        {
          type: 'p',
          text: 'Almost every recursive function on a tree follows one of three patterns:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Combine children (bottom-up, postorder)', text: 'Ask both subtrees, then combine their answers: size, height, sum, maximum, "is this a valid BST?". Each node is visited once: $O(n)$.' },
            { title: 'Pass information down (top-down, preorder)', text: 'Give each call a parameter that describes the path from the root: depth, the sum so far along the path, the allowed key range, the accumulated world transform in a scene graph.' },
            { title: 'Return one thing, update another', text: 'Return what the parent needs (often the height), and update a global best for answers that do not pass through the parent. The **[[dsa-tree-diameter|diameter]]** (longest path between any two nodes) bends at some highest node $t$, where its length is $\\text{height}(\\text{left}) + \\text{height}(\\text{right}) + 2$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Height and diameter of $P(Q(S(U, V(-, X)), T), R(-, W))$, bottom-up',
          steps: [
            { tex: 'h(U) = h(T) = h(X) = h(W) = 0', why: 'Leaves: $1 + \\max(-1, -1) = 0$.' },
            { tex: 'h(V) = 1 + \\max(-1, 0) = 1, \\quad h(R) = 1', why: '$V$ has only the right child $X$; $R$ has only the right child $W$.' },
            { tex: 'h(S) = 1 + \\max(0, 1) = 2, \\quad h(Q) = 1 + \\max(2, 0) = 3', why: 'Combine the children\'s heights, one level up at a time.' },
            { tex: 'h(P) = 1 + \\max(3, 1) = 4', why: 'The height of the tree. The longest root-to-leaf path is $P\\,Q\\,S\\,V\\,X$.' },
            { tex: '\\text{bend at } P: \\ h(Q) + h(R) + 2 = 3 + 1 + 2 = 6', why: 'The longest path through $P$ goes down to $X$ on one side and to $W$ on the other. The bends at $Q$ ($h(S) + h(T) + 2 = 2 + 0 + 2 = 4$) and at $S$ ($0 + 1 + 2 = 3$) are shorter.' },
          ],
          result: 'Height $4$, diameter $6$ edges ($X\\,V\\,S\\,Q\\,P\\,R\\,W$), both in one $O(n)$ pass.',
        },
        {
          type: 'code',
          title: 'recursion.cpp',
          runnable: true,
          code: CODE.recursion,
          output: OUT.recursion,
          annotations: [
            { lines: '13-20', text: 'Reading a tree from preorder with `#` markers (next card explains why this format is enough).' },
            { lines: '23-26', text: 'Pattern 1, with the empty tree at height $-1$.' },
            { lines: '30-35', text: 'Pattern 2: `depth` flows down as a parameter.' },
            { lines: '39-45', text: 'Pattern 3: return the height, update the diameter by reference.' },
            { lines: '48-55', text: 'The balance check returns a height or a sentinel $-2$ meaning "unbalanced", and stops early. The naive version, which calls `height` separately at every node, recomputes subtrees again and again: $O(n \\log n)$ on balanced trees and $O(n^2)$ on degenerate ones.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Interview checklist for tree recursion',
          text: 'State the base case (usually the empty tree) and its value; say which pattern you are using; make sure each node is visited a constant number of times; mention $O(h)$ stack space. The classic trap is calling an $O(n)$ helper (like `height`) from inside a recursion over all nodes, which silently makes the solution quadratic.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'What is the **height** of this tree (number of edges on the longest root-to-leaf path)?',
      figure: {
        type: 'figure',
        svg: FIG.qtree,
        alt: 'A binary tree with root P. P has children Q and R. Q has children S and T. S has children U and V. V has a right child X. R has a right child W.',
        maxWidth: 340,
      },
      answer: '4',
      label: 'height $=$',
      hint: 'Count edges, not nodes. Which leaf is deepest?',
      explanation: 'The deepest leaf is $X$, on the path $P \\to Q \\to S \\to V \\to X$: $4$ edges, so the height is $4$. Bottom-up: $h(X) = 0$, $h(V) = 1$, $h(S) = 2$, $h(Q) = 3$, $h(P) = 1 + \\max(3, 1) = 4$. Counting nodes on that path gives $5$, which is the height under the "count levels" convention; this course counts edges, so a single node has height $0$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'For the same tree, what is the **diameter**: the number of edges on the longest path between any two nodes?',
      figure: {
        type: 'figure',
        svg: FIG.qtree,
        alt: 'A binary tree with root P. P has children Q and R. Q has children S and T. S has children U and V. V has a right child X. R has a right child W.',
        maxWidth: 340,
      },
      answer: '6',
      label: 'diameter $=$',
      hint: 'At every node $t$, the longest path that bends there has length $h(\\text{left}) + h(\\text{right}) + 2$ (with $h(\\text{empty}) = -1$).',
      explanation: 'Compute the bend length at each internal node: at $V$: $-1 + 0 + 2 = 1$; at $S$: $0 + 1 + 2 = 3$; at $Q$: $2 + 0 + 2 = 4$; at $R$: $-1 + 0 + 2 = 1$; at $P$: $3 + 1 + 2 = 6$. The maximum is $6$, the path $X\\,V\\,S\\,Q\\,P\\,R\\,W$. In general the diameter need not pass through the root (if $R$ were missing, the best path would bend at $Q$), which is why the code keeps a running best instead of only looking at the root. `recursion.cpp` prints `diameter 6` for this tree.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Rebuilding a tree from its traversals',
      blocks: [
        {
          type: 'p',
          text: 'Can you reconstruct a tree from its traversal sequences? This matters for saving trees (scene files, behavior trees, replay data) and is a favorite interview question. With **distinct keys**, preorder plus inorder determines the tree uniquely:',
        },
        {
          type: 'list',
          items: [
            'The **first** key of the preorder is the root.',
            'In the inorder sequence, everything **left** of the root is the left subtree and everything **right** of it is the right subtree. That also tells you the left subtree\'s size $k$.',
            'The next $k$ preorder keys are the left subtree\'s preorder; the rest are the right subtree\'s. Recurse on both.',
          ],
        },
        {
          type: 'derivation',
          title: 'Preorder $8, 3, 1, 6, 4, 7, 10, 14, 13$ and inorder $1, 3, 4, 6, 7, 8, 10, 13, 14$',
          steps: [
            { tex: '\\text{root} = 8; \\ \\text{inorder} = [1, 3, 4, 6, 7] \\; 8 \\; [10, 13, 14]', why: 'First preorder key; split the inorder sequence at it. The left subtree has $5$ keys.' },
            { tex: '\\text{left: pre } [3, 1, 6, 4, 7], \\text{ in } [1, 3, 4, 6, 7] \\implies \\text{root } 3, \\ [1] \\; 3 \\; [4, 6, 7]', why: 'The next $5$ preorder keys belong to the left subtree; its root is $3$.' },
            { tex: '[4, 6, 7] \\text{ with pre } [6, 4, 7] \\implies 6(4, 7)', why: 'Root $6$ splits $[4, 6, 7]$ into $[4]$ and $[7]$.' },
            { tex: '\\text{right: pre } [10, 14, 13], \\text{ in } [10, 13, 14] \\implies 10(-, 14(13, -))', why: 'Root $10$ has an empty left part; then $14$ is the root of $[13, 14]$, with $13$ to its left.' },
          ],
          result: 'The tree is $8\\big(3(1, 6(4, 7)),\\ 10(-, 14(13, -))\\big)$. Its postorder is $1, 4, 7, 6, 3, 13, 14, 10, 8$.',
        },
        {
          type: 'figure',
          svg: FIG.built,
          alt: 'The rebuilt tree: root 8 with children 3 and 10. 3 has children 1 and 6; 6 has children 4 and 7. 10 has only a right child 14, whose left child is 13.',
          caption: 'The tree rebuilt from its preorder and inorder sequences. (Its inorder is sorted: it happens to be a binary search tree, the topic of the next lesson.)',
          maxWidth: 360,
        },
        {
          type: 'code',
          title: 'build.cpp',
          runnable: true,
          code: CODE.build,
          output: OUT.build,
          annotations: [
            { lines: 15, text: 'A hash map from key to inorder position makes each split $O(1)$, so the whole build is $O(n)$. Searching the inorder array for the root instead costs $O(n)$ per node, $O(n^2)$ on a degenerate tree.' },
            { lines: '22-30', text: 'The recursion consumes the preorder sequence left to right through `next`: root first, then the entire left subtree, then the right subtree.' },
            { lines: '41-46', text: 'With explicit `#` markers for empty subtrees, preorder **alone** determines the tree, because every null child is recorded. This is a standard way to save a tree to a file.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why preorder plus postorder is not enough',
          text: 'Both sequences put the root at one end and say nothing about which side a lone child is on. The trees $X(Y, -)$ and $X(-, Y)$ both have preorder $X\\,Y$ and postorder $Y\\,X$. The inorder sequence breaks the tie: $Y\\,X$ for the first tree, $X\\,Y$ for the second. (Preorder plus postorder *does* determine a **full** binary tree, where every node has zero or two children, because then a lone child cannot occur.)',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'A tree with distinct keys has preorder $5, 2, 1, 4, 3, 8, 7, 9$ and inorder $1, 2, 3, 4, 5, 7, 8, 9$. What is its postorder?',
      options: [
        { text: '$1, 3, 4, 2, 7, 9, 8, 5$', correct: true, why: 'Root $5$; left subtree from pre $[2, 1, 4, 3]$ and in $[1, 2, 3, 4]$ is $2(1, 4(3, -))$; right subtree from pre $[8, 7, 9]$ is $8(7, 9)$. Postorder: $1, 3, 4, 2$, then $7, 9, 8$, then $5$.' },
        { text: '$9, 7, 8, 3, 4, 1, 2, 5$', why: 'That is the preorder reversed. Reversed preorder is "right, left, root" order, not postorder ("left, right, root").' },
        { text: '$1, 2, 3, 4, 5, 7, 8, 9$', why: 'That is the inorder sequence, which is sorted here because this tree is a binary search tree.' },
        { text: '$1, 4, 3, 2, 7, 9, 8, 5$', why: 'This puts $3$ after $4$, as if $3$ were $4$\'s parent. But $4$ comes before $3$ in preorder, so $4$ is the parent and $3$ its (left) child: postorder lists $3$ first.' },
      ],
      explanation: 'Step by step: the root is $5$ (first in preorder). Inorder splits into $[1, 2, 3, 4]$ (left) and $[7, 8, 9]$ (right). The left preorder is $[2, 1, 4, 3]$: root $2$, inorder $[1] \\; 2 \\; [3, 4]$; then $[4, 3]$ with inorder $[3, 4]$ gives root $4$ with left child $3$. The right preorder $[8, 7, 9]$ with inorder $[7, 8, 9]$ gives $8(7, 9)$. Postorder: left subtree $1, 3, 4, 2$; right subtree $7, 9, 8$; root $5$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'True or false: for binary trees with distinct keys, the preorder and postorder sequences together always determine the tree uniquely.',
      figure: {
        type: 'figure',
        svg: FIG.ambig,
        alt: 'Two trees side by side. In the first, X has a left child Y. In the second, X has a right child Y.',
        maxWidth: 300,
      },
      answer: false,
      explanation: 'False. The two trees in the figure both have preorder $X\\,Y$ and postorder $Y\\,X$, yet in one $Y$ is a left child and in the other a right child. Whenever a node has exactly one child, preorder and postorder cannot tell which side it is on. Preorder plus inorder (or postorder plus inorder) is unique for distinct keys, and preorder plus postorder is unique for **full** binary trees.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'A bounding volume hierarchy (BVH) for ray casting stores an axis-aligned box at every node; a node\'s box must enclose its children\'s boxes. After characters move, you **refit** the BVH: recompute every internal node\'s box from its children. Which traversal order does the refit need?',
      options: [
        { text: 'Preorder', why: 'Preorder handles a parent before its children, so it would combine children\'s boxes that have not been updated yet.' },
        { text: 'Inorder', why: 'Inorder handles a node after its left child but before its right child, so the right child\'s box would still be stale.' },
        { text: 'Postorder', correct: true, why: 'Both children are finished before their parent, so each parent combines up-to-date boxes. This is pattern 1, "combine the children".' },
        { text: 'Level order from the root', why: 'Top-down level order handles parents before children, the wrong direction. (Processing levels bottom-up would work, which is exactly what reverse level order, or a postorder, achieves.)' },
      ],
      explanation: 'Refitting is a bottom-up computation: $\\text{box}(t) = \\text{box}(\\text{left}) \\cup \\text{box}(\\text{right})$, so children must be done first, which is postorder. Engines that store the BVH in a node pool often order the nodes so that children come after their parent in the array; then a single reverse loop over the array is a valid bottom-up order, with no recursion at all. The opposite job, pushing parent transforms down a scene graph, needs a parent-first order such as preorder.',
    },
  ],
  takeaways: [
    'Store trees as `unique_ptr` nodes (clear ownership), as an index pool (compact, contiguous, serializable; common in engines) or implicitly in an array (complete trees only: children $2i + 1$, $2i + 2$, parent $\\lfloor (i - 1)/2 \\rfloor$).',
    'One recursive walk passes each node three times; preorder, inorder and postorder record the first, second or third pass. Traversals are $\\Theta(n)$ time and $O(h)$ stack.',
    'Deep trees overflow the call stack, in traversals and in recursive destructors; an explicit `std::vector` stack fixes both.',
    'Level order is BFS with a queue; snapshotting `q.size()` at each level start processes exactly one level at a time.',
    'Tree recursion patterns: combine children (height, size), pass information down (depth, ranges), return one value and update another (diameter). Avoid calling $O(n)$ helpers per node.',
    'Preorder plus inorder (distinct keys) determines a tree; preorder plus postorder does not; preorder with null markers serializes a tree completely.',
  ],
  reading: [
    { title: 'Jeff Erickson, Algorithms', url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/', source: 'book', note: 'Free textbook; the recursion chapters develop the "trust the recursive call" style used for every tree function here.' },
    { title: 'Sedgewick & Wayne, Algorithms (4th ed.)', url: 'https://algs4.cs.princeton.edu/home/', source: 'book', note: 'Section 3.2 builds binary trees node by node and analyzes traversals and recursive size and height functions.' },
    { title: 'Tree traversal (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Tree_traversal', source: 'wikipedia', note: 'Recursive, iterative and Morris traversals with pseudocode for each order.' },
    { title: 'Robert Nystrom, Game Programming Patterns: Data Locality', url: 'https://gameprogrammingpatterns.com/data-locality.html', source: 'book', note: 'Why engines prefer contiguous arrays and indices over pointer-linked nodes, with measurements.' },
  ],
};
