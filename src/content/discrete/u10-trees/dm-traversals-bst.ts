import type { Lesson } from '../../types';

// Figures (graph drawings generated with the graph kit; theme-aware SVG).
const FIG: Record<string, string> = {
  "bst": `<svg viewBox="0 0 480 255" xmlns="http://www.w3.org/2000/svg"><line x1="234.5" y1="39.2" x2="155.5" y2="85.8" stroke="currentColor" stroke-width="1.6"/><line x1="265.5" y1="39.2" x2="344.5" y2="85.8" stroke="currentColor" stroke-width="1.6"/><line x1="127.8" y1="108.2" x2="92.2" y2="146.8" stroke="currentColor" stroke-width="1.6"/><line x1="152.2" y1="108.2" x2="187.8" y2="146.8" stroke="currentColor" stroke-width="1.6"/><line x1="349.0" y1="109.3" x2="321.0" y2="145.7" stroke="currentColor" stroke-width="1.6"/><line x1="372.2" y1="108.2" x2="407.8" y2="146.8" stroke="currentColor" stroke-width="1.6"/><line x1="190.6" y1="175.3" x2="169.4" y2="209.7" stroke="currentColor" stroke-width="1.6"/><circle cx="250" cy="30" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="250" y="35" text-anchor="middle" font-size="14">50</text><circle cx="140" cy="95" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="140" y="100" text-anchor="middle" font-size="14">30</text><circle cx="360" cy="95" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="360" y="100" text-anchor="middle" font-size="14">70</text><circle cx="80" cy="160" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="80" y="165" text-anchor="middle" font-size="14">20</text><circle cx="200" cy="160" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="165" text-anchor="middle" font-size="14">40</text><circle cx="310" cy="160" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="310" y="165" text-anchor="middle" font-size="14">60</text><circle cx="420" cy="160" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="420" y="165" text-anchor="middle" font-size="14">80</text><circle cx="160" cy="225" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="230" text-anchor="middle" font-size="14">35</text></svg>`,
  "bstsearch": `<svg viewBox="0 0 480 255" xmlns="http://www.w3.org/2000/svg"><line x1="234.5" y1="39.2" x2="155.5" y2="85.8" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="265.5" y1="39.2" x2="344.5" y2="85.8" stroke="currentColor" stroke-width="1.6"/><line x1="127.8" y1="108.2" x2="92.2" y2="146.8" stroke="currentColor" stroke-width="1.6"/><line x1="152.2" y1="108.2" x2="187.8" y2="146.8" stroke="currentColor" stroke-width="3.2" class="s-blue"/><line x1="349.0" y1="109.3" x2="321.0" y2="145.7" stroke="currentColor" stroke-width="1.6"/><line x1="372.2" y1="108.2" x2="407.8" y2="146.8" stroke="currentColor" stroke-width="1.6"/><line x1="190.6" y1="175.3" x2="169.4" y2="209.7" stroke="currentColor" stroke-width="3.2" class="s-blue"/><circle cx="250" cy="30" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="250" y="35" text-anchor="middle" font-size="14" class="t-blue">50</text><circle cx="140" cy="95" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="140" y="100" text-anchor="middle" font-size="14" class="t-blue">30</text><circle cx="360" cy="95" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="360" y="100" text-anchor="middle" font-size="14">70</text><circle cx="80" cy="160" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="80" y="165" text-anchor="middle" font-size="14">20</text><circle cx="200" cy="160" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="200" y="165" text-anchor="middle" font-size="14" class="t-blue">40</text><circle cx="310" cy="160" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="310" y="165" text-anchor="middle" font-size="14">60</text><circle cx="420" cy="160" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="420" y="165" text-anchor="middle" font-size="14">80</text><circle cx="160" cy="225" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="160" y="230" text-anchor="middle" font-size="14" class="t-blue">35</text></svg>`,
  "degen": `<svg viewBox="0 0 530 260" xmlns="http://www.w3.org/2000/svg"><line x1="39.9" y1="34.9" x2="52.1" y2="47.1" stroke="currentColor" stroke-width="1.6"/><line x1="71.9" y1="66.9" x2="84.1" y2="79.1" stroke="currentColor" stroke-width="1.6"/><line x1="103.9" y1="98.9" x2="116.1" y2="111.1" stroke="currentColor" stroke-width="1.6"/><line x1="135.9" y1="130.9" x2="148.1" y2="143.1" stroke="currentColor" stroke-width="1.6"/><line x1="167.9" y1="162.9" x2="180.1" y2="175.1" stroke="currentColor" stroke-width="1.6"/><line x1="199.9" y1="194.9" x2="212.1" y2="207.1" stroke="currentColor" stroke-width="1.6"/><line x1="380.1" y1="49.9" x2="329.9" y2="100.1" stroke="currentColor" stroke-width="1.6"/><line x1="399.9" y1="49.9" x2="450.1" y2="100.1" stroke="currentColor" stroke-width="1.6"/><line x1="313.7" y1="122.5" x2="291.3" y2="167.5" stroke="currentColor" stroke-width="1.6"/><line x1="326.3" y1="122.5" x2="348.7" y2="167.5" stroke="currentColor" stroke-width="1.6"/><line x1="453.7" y1="122.5" x2="431.3" y2="167.5" stroke="currentColor" stroke-width="1.6"/><line x1="466.3" y1="122.5" x2="488.7" y2="167.5" stroke="currentColor" stroke-width="1.6"/><circle cx="30" cy="25" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="30" y="30" text-anchor="middle" font-size="14">1</text><circle cx="62" cy="57" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="62" y="62" text-anchor="middle" font-size="14">2</text><circle cx="94" cy="89" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="94" y="94" text-anchor="middle" font-size="14">3</text><circle cx="126" cy="121" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="126" y="126" text-anchor="middle" font-size="14">4</text><circle cx="158" cy="153" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="158" y="158" text-anchor="middle" font-size="14">5</text><circle cx="190" cy="185" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="190" text-anchor="middle" font-size="14">6</text><circle cx="222" cy="217" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="222" y="222" text-anchor="middle" font-size="14">7</text><circle cx="390" cy="40" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="390" y="45" text-anchor="middle" font-size="14">4</text><circle cx="320" cy="110" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="320" y="115" text-anchor="middle" font-size="14">2</text><circle cx="460" cy="110" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="460" y="115" text-anchor="middle" font-size="14">6</text><circle cx="285" cy="180" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="285" y="185" text-anchor="middle" font-size="14">1</text><circle cx="355" cy="180" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="355" y="185" text-anchor="middle" font-size="14">3</text><circle cx="425" cy="180" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="425" y="185" text-anchor="middle" font-size="14">5</text><circle cx="495" cy="180" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="495" y="185" text-anchor="middle" font-size="14">7</text><text x="130" y="255" text-anchor="middle" font-size="13">insert 1,2,…,7 in order: height 6</text><text x="390" y="235" text-anchor="middle" font-size="13">insert 4,2,6,1,3,5,7: height 2</text></svg>`,
  "expr": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><line x1="186.6" y1="40.4" x2="123.4" y2="89.6" stroke="currentColor" stroke-width="1.6"/><line x1="213.4" y1="40.4" x2="276.6" y2="89.6" stroke="currentColor" stroke-width="1.6"/><line x1="100.1" y1="113.8" x2="69.9" y2="156.2" stroke="currentColor" stroke-width="1.6"/><line x1="119.9" y1="113.8" x2="150.1" y2="156.2" stroke="currentColor" stroke-width="1.6"/><line x1="280.1" y1="113.8" x2="249.9" y2="156.2" stroke="currentColor" stroke-width="1.6"/><line x1="299.9" y1="113.8" x2="330.1" y2="156.2" stroke="currentColor" stroke-width="1.6"/><circle cx="200" cy="30" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="200" y="35" text-anchor="middle" font-size="19" class="t-orange">×</text><circle cx="110" cy="100" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="110" y="105" text-anchor="middle" font-size="19" class="t-orange">+</text><circle cx="290" cy="100" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-orange f-orange"/><text x="290" y="105" text-anchor="middle" font-size="19" class="t-orange">−</text><circle cx="60" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="60" y="175" text-anchor="middle" font-size="14" class="t-blue">3</text><circle cx="160" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="160" y="175" text-anchor="middle" font-size="14" class="t-blue">4</text><circle cx="240" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="240" y="175" text-anchor="middle" font-size="14" class="t-blue">5</text><circle cx="340" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="340" y="175" text-anchor="middle" font-size="14" class="t-blue">2</text></svg>`,
  "huff": `<svg viewBox="0 0 420 275" xmlns="http://www.w3.org/2000/svg"><line x1="186.6" y1="40.4" x2="123.4" y2="89.6" stroke="currentColor" stroke-width="1.6"/><line x1="213.4" y1="40.4" x2="276.6" y2="89.6" stroke="currentColor" stroke-width="1.6"/><line x1="278.9" y1="112.9" x2="241.1" y2="157.1" stroke="currentColor" stroke-width="1.6"/><line x1="301.1" y1="112.9" x2="338.9" y2="157.1" stroke="currentColor" stroke-width="1.6"/><line x1="221.6" y1="184.8" x2="198.4" y2="225.2" stroke="currentColor" stroke-width="1.6"/><line x1="238.4" y1="184.8" x2="261.6" y2="225.2" stroke="currentColor" stroke-width="1.6"/><circle cx="200" cy="30" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="35" text-anchor="middle" font-size="12">20</text><circle cx="110" cy="100" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="110" y="105" text-anchor="middle" font-size="14" class="t-green">A</text><text x="110" y="132" text-anchor="middle" font-size="12" class="t-gray">10 · code 0</text><circle cx="290" cy="100" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="290" y="105" text-anchor="middle" font-size="12">10</text><circle cx="230" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="230" y="175" text-anchor="middle" font-size="12">4</text><circle cx="350" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="350" y="175" text-anchor="middle" font-size="14" class="t-green">B</text><text x="350" y="202" text-anchor="middle" font-size="12" class="t-gray">6 · code 11</text><circle cx="190" cy="240" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="190" y="245" text-anchor="middle" font-size="14" class="t-green">D</text><text x="167" y="245" text-anchor="end" font-size="12" class="t-gray">1 · code 100</text><circle cx="270" cy="240" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="270" y="245" text-anchor="middle" font-size="14" class="t-green">C</text><text x="293" y="245" text-anchor="start" font-size="12" class="t-gray">3 · code 101</text><text x="148.9" y="61.6" text-anchor="middle" font-size="13">0</text><text x="251.1" y="61.6" text-anchor="middle" font-size="13">1</text><text x="252.4" y="133.0" text-anchor="middle" font-size="13">0</text><text x="327.6" y="133.0" text-anchor="middle" font-size="13">1</text><text x="201.3" y="204.5" text-anchor="middle" font-size="13">0</text><text x="258.7" y="204.5" text-anchor="middle" font-size="13">1</text></svg>`,
  "notbst": `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><line x1="137.3" y1="42.7" x2="92.7" y2="87.3" stroke="currentColor" stroke-width="1.6"/><line x1="163.5" y1="41.9" x2="216.5" y2="88.1" stroke="currentColor" stroke-width="1.6"/><line x1="91.7" y1="113.7" x2="128.3" y2="156.3" stroke="currentColor" stroke-width="1.6"/><circle cx="150" cy="30" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="35" text-anchor="middle" font-size="14">50</text><circle cx="80" cy="100" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="80" y="105" text-anchor="middle" font-size="14">30</text><circle cx="140" cy="170" r="18" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="140" y="175" text-anchor="middle" font-size="14" class="t-red">60</text><circle cx="230" cy="100" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="230" y="105" text-anchor="middle" font-size="14">70</text></svg>`,
  "qtree": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><line x1="186.6" y1="40.4" x2="123.4" y2="89.6" stroke="currentColor" stroke-width="1.6"/><line x1="213.4" y1="40.4" x2="276.6" y2="89.6" stroke="currentColor" stroke-width="1.6"/><line x1="100.1" y1="113.8" x2="69.9" y2="156.2" stroke="currentColor" stroke-width="1.6"/><line x1="119.9" y1="113.8" x2="150.1" y2="156.2" stroke="currentColor" stroke-width="1.6"/><line x1="280.1" y1="113.8" x2="249.9" y2="156.2" stroke="currentColor" stroke-width="1.6"/><line x1="299.9" y1="113.8" x2="330.1" y2="156.2" stroke="currentColor" stroke-width="1.6"/><circle cx="200" cy="30" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="35" text-anchor="middle" font-size="14">M</text><circle cx="110" cy="100" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="110" y="105" text-anchor="middle" font-size="14">G</text><circle cx="290" cy="100" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="290" y="105" text-anchor="middle" font-size="14">T</text><circle cx="60" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="60" y="175" text-anchor="middle" font-size="14">C</text><circle cx="160" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="175" text-anchor="middle" font-size="14">J</text><circle cx="240" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="240" y="175" text-anchor="middle" font-size="14">P</text><circle cx="340" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="340" y="175" text-anchor="middle" font-size="14">W</text></svg>`,
  "trav": `<svg viewBox="0 0 480 255" xmlns="http://www.w3.org/2000/svg"><line x1="225.4" y1="38.6" x2="144.6" y2="86.4" stroke="currentColor" stroke-width="1.6"/><line x1="254.6" y1="38.6" x2="335.4" y2="86.4" stroke="currentColor" stroke-width="1.6"/><line x1="118.5" y1="107.5" x2="81.5" y2="147.5" stroke="currentColor" stroke-width="1.6"/><line x1="141.5" y1="107.5" x2="178.5" y2="147.5" stroke="currentColor" stroke-width="1.6"/><line x1="181.1" y1="174.5" x2="158.9" y2="210.5" stroke="currentColor" stroke-width="1.6"/><line x1="198.9" y1="174.5" x2="221.1" y2="210.5" stroke="currentColor" stroke-width="1.6"/><line x1="361.5" y1="107.5" x2="398.5" y2="147.5" stroke="currentColor" stroke-width="1.6"/><line x1="401.1" y1="174.5" x2="378.9" y2="210.5" stroke="currentColor" stroke-width="1.6"/><circle cx="240" cy="30" r="17" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6" class="s-purple f-purple"/><text x="240" y="35" text-anchor="middle" font-size="14" class="t-purple">F</text><circle cx="130" cy="95" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="130" y="100" text-anchor="middle" font-size="14">B</text><circle cx="350" cy="95" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350" y="100" text-anchor="middle" font-size="14">G</text><circle cx="70" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="70" y="165" text-anchor="middle" font-size="14">A</text><circle cx="190" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="165" text-anchor="middle" font-size="14">D</text><circle cx="150" cy="225" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="150" y="230" text-anchor="middle" font-size="14">C</text><circle cx="230" cy="225" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="230" y="230" text-anchor="middle" font-size="14">E</text><circle cx="410" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="410" y="165" text-anchor="middle" font-size="14">I</text><circle cx="370" cy="225" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="370" y="230" text-anchor="middle" font-size="14">H</text></svg>`,
};

// Runnable C++ examples and their exact output.
const CODE: Record<string, string> = {
  "bst": `#include <cstdio>
#include <memory>
#include <queue>

struct Node {
    int key;
    std::unique_ptr<Node> left, right;
};

// Insert: walk down as in a search; the key goes where the search falls off the tree.
void insert(std::unique_ptr<Node>& t, int key) {
    if (!t) { t = std::make_unique<Node>(Node{key, nullptr, nullptr}); return; }
    if (key < t->key) insert(t->left, key);
    else              insert(t->right, key);
}

// Search: one comparison per level, so O(height).
bool contains(const Node* t, int key) {
    while (t) {
        if (key == t->key) return true;
        t = (key < t->key) ? t->left.get() : t->right.get();
    }
    return false;
}

void preorder(const Node* t) {   // root, left, right
    if (!t) return;
    std::printf(" %d", t->key);
    preorder(t->left.get());
    preorder(t->right.get());
}
void inorder(const Node* t) {    // left, root, right
    if (!t) return;
    inorder(t->left.get());
    std::printf(" %d", t->key);
    inorder(t->right.get());
}
void postorder(const Node* t) {  // left, right, root
    if (!t) return;
    postorder(t->left.get());
    postorder(t->right.get());
    std::printf(" %d", t->key);
}
void levelorder(const Node* root) {  // BFS with a queue
    std::queue<const Node*> q;
    q.push(root);
    while (!q.empty()) {
        const Node* t = q.front();
        q.pop();
        std::printf(" %d", t->key);
        if (t->left) q.push(t->left.get());
        if (t->right) q.push(t->right.get());
    }
}

int main() {
    std::unique_ptr<Node> root;
    for (int k : {50, 30, 70, 20, 40, 60, 80, 35}) insert(root, k);

    std::printf("preorder:  "); preorder(root.get());   std::printf("\\n");
    std::printf("inorder:   "); inorder(root.get());    std::printf("\\n");
    std::printf("postorder: "); postorder(root.get());  std::printf("\\n");
    std::printf("level:     "); levelorder(root.get()); std::printf("\\n");
    std::printf("contains 35? %s  contains 65? %s\\n",
                contains(root.get(), 35) ? "yes" : "no", contains(root.get(), 65) ? "yes" : "no");
}`,
  "rpn": `#include <cstdio>
#include <sstream>
#include <stack>
#include <string>

// Evaluate a postfix (reverse Polish) expression with a stack.
double evalPostfix(const std::string& expr) {
    std::stack<double> st;
    std::istringstream in(expr);
    std::string tok;
    while (in >> tok) {
        if (tok == "+" || tok == "-" || tok == "*" || tok == "/") {
            double b = st.top(); st.pop();  // right operand is on top
            double a = st.top(); st.pop();
            if (tok == "+") st.push(a + b);
            if (tok == "-") st.push(a - b);
            if (tok == "*") st.push(a * b);
            if (tok == "/") st.push(a / b);
        } else {
            st.push(std::stod(tok));  // a number: just push it
        }
    }
    return st.top();
}

int main() {
    std::printf("3 4 + 5 2 - *  = %g\\n", evalPostfix("3 4 + 5 2 - *"));
    std::printf("10 2 8 * + 3 - = %g\\n", evalPostfix("10 2 8 * + 3 -"));
}`,
};

const OUT: Record<string, string> = {
  "bst": `preorder:   50 30 20 40 35 70 60 80
inorder:    20 30 35 40 50 60 70 80
postorder:  20 35 40 30 60 80 70 50
level:      50 30 70 20 40 60 80 35
contains 35? yes  contains 65? no`,
  "rpn": `3 4 + 5 2 - *  = 21
10 2 8 * + 3 - = 23`,
};

export const lesson: Lesson = {
  id: 'dm-traversals-bst',
  title: 'Tree Traversals and Binary Search Trees',
  summary: 'Four ways to visit every node of a binary tree (preorder, inorder, postorder, level order), expression trees with prefix and postfix notation, binary search trees and why balance decides between $O(\\log n)$ and $O(n)$, and a quick look at Huffman coding.',
  minutes: 22,
  objectives: [
    'Produce the preorder, inorder, postorder and level-order traversals of a binary tree, by hand and with recursive C++',
    'Convert between expression trees and prefix, infix and postfix notation, and evaluate postfix expressions with a stack',
    'Search and insert in a binary search tree, and explain why an inorder traversal lists its keys in sorted order',
    'Compare balanced and degenerate BSTs: height $\\approx \\log_2 n$ versus $n - 1$, and $O(\\log n)$ versus $O(n)$ operations',
    'Build a Huffman code for a small alphabet and compute the number of bits it uses',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Binary trees and four traversals',
      blocks: [
        {
          type: 'p',
          text: 'A **binary tree** is a rooted tree in which every node has at most two children, and each child is labeled **left** or **right** (a node may have a right child and no left child). Equivalently, as a [[dm-recursive-definition|recursive definition]]: a binary tree is either empty, or a root with a left subtree and a right subtree, each of which is a binary tree.',
        },
        {
          type: 'p',
          text: 'A [[dm-tree-traversal|traversal]] visits every node exactly once. The recursive definition suggests three natural orders — they differ only in **when** the root is visited relative to its two subtrees — plus one breadth-first order.',
        },
        {
          type: 'figure',
          svg: FIG.trav,
          alt: 'A binary tree with root F. F has left child B and right child G. B has children A and D; D has children C and E. G has only a right child I, whose left child is H.',
          caption: 'A binary tree with $9$ nodes. Note that $G$ has only a right child.',
          maxWidth: 440,
        },
        {
          type: 'table',
          headers: ['Traversal', 'Rule', 'Result for the figure'],
          rows: [
            ['**Preorder**', 'root, then left subtree, then right subtree', '$F\\,B\\,A\\,D\\,C\\,E\\,G\\,I\\,H$'],
            ['**Inorder**', 'left subtree, then root, then right subtree', '$A\\,B\\,C\\,D\\,E\\,F\\,G\\,H\\,I$'],
            ['**Postorder**', 'left subtree, then right subtree, then root', '$A\\,C\\,E\\,D\\,B\\,H\\,I\\,G\\,F$'],
            ['**Level order**', 'level by level, left to right (BFS)', '$F\\,B\\,G\\,A\\,D\\,I\\,C\\,E\\,H$'],
          ],
        },
        {
          type: 'derivation',
          title: 'Postorder, unfolded',
          steps: [
            { tex: '\\text{post}(F) = \\text{post}(B)\\ \\text{post}(G)\\ F', why: 'Postorder: both subtrees first, the root last.' },
            { tex: '\\text{post}(B) = A\\ \\text{post}(D)\\ B = A\\,C\\,E\\,D\\,B', why: '$A$ is a leaf; $\\text{post}(D) = C\\,E\\,D$.' },
            { tex: '\\text{post}(G) = \\text{post}(I)\\ G = H\\,I\\,G', why: '$G$ has an empty left subtree (contributes nothing); $\\text{post}(I) = H\\,I$.' },
            { tex: '\\text{post}(F) = A\\,C\\,E\\,D\\,B\\ H\\,I\\,G\\ F', why: 'Concatenate.' },
          ],
          result: 'The root comes **last** in postorder and **first** in preorder.',
        },
        {
          type: 'code',
          title: 'traversals (excerpt)',
          code: `void preorder(const Node* t) {
    if (!t) return;          // empty subtree: nothing to do
    visit(t);                // root first
    preorder(t->left.get());
    preorder(t->right.get());
}
// inorder:   recurse left, visit(t), recurse right
// postorder: recurse left, recurse right, visit(t)
// level order: BFS with a std::queue (no recursion)`,
          annotations: [
            { lines: '2', text: 'The base case is the empty tree, which makes leaves and one-child nodes work automatically.' },
            { lines: '3-5', text: 'Moving the `visit` line is the only difference between the three depth-first orders.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why have different orders?',
          text: 'Each order fits a job. **Preorder** handles a parent before its children: copying a tree, printing a folder listing, serializing a scene graph. **Postorder** handles children before the parent: deleting a tree (free the children first), computing folder sizes, evaluating an expression. **Inorder** lists a binary search tree in sorted order. **Level order** is [[dm-bfs|BFS]]: nearest nodes first. Preorder, inorder and postorder are all forms of [[dm-dfs|DFS]].',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'order',
      prompt: 'Arrange the nodes of this binary tree in **postorder**.',
      figure: {
        type: 'figure',
        svg: FIG.qtree,
        alt: 'A complete binary tree: root M with children G and T; G has children C and J; T has children P and W.',
        maxWidth: 320,
      },
      lines: ['$C$', '$J$', '$G$', '$P$', '$W$', '$T$', '$M$'],
      explanation: 'Postorder = left subtree, right subtree, root. The left subtree of $M$ gives $C\\,J\\,G$ (children before parent), the right subtree gives $P\\,W\\,T$, and the root $M$ comes last: $C\\,J\\,G\\,P\\,W\\,T\\,M$. (Preorder would be $M\\,G\\,C\\,J\\,T\\,P\\,W$; level order $M\\,G\\,T\\,C\\,J\\,P\\,W$.)',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: 'What is the **inorder** traversal of the same tree?',
      figure: {
        type: 'figure',
        svg: FIG.qtree,
        alt: 'A complete binary tree: root M with children G and T; G has children C and J; T has children P and W.',
        maxWidth: 320,
      },
      options: [
        { text: '$M\\,G\\,C\\,J\\,T\\,P\\,W$', why: 'That is preorder: the root comes before its subtrees.' },
        { text: '$C\\,G\\,J\\,M\\,P\\,T\\,W$', correct: true, why: 'Left subtree ($C\\,G\\,J$), root ($M$), right subtree ($P\\,T\\,W$), applied recursively.' },
        { text: '$M\\,G\\,T\\,C\\,J\\,P\\,W$', why: 'That is level order (BFS).' },
        { text: '$C\\,J\\,G\\,P\\,W\\,T\\,M$', why: 'That is postorder: the root comes last.' },
      ],
      explanation: 'Inorder visits the left subtree, then the root, then the right subtree. For $G$\'s subtree that is $C\\,G\\,J$; for $T$\'s it is $P\\,T\\,W$; with $M$ between them: $C\\,G\\,J\\,M\\,P\\,T\\,W$. Notice it is alphabetical — this tree happens to be a binary search tree on letters, which is exactly when inorder gives sorted output.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Expression trees: prefix, infix and postfix',
      blocks: [
        {
          type: 'p',
          text: 'A compiler (or a game\'s scripting language, or a shader graph) stores an arithmetic expression as an [[dm-expression-tree|expression tree]]: operators are internal nodes, numbers and variables are leaves, and each operator\'s children are its operands. The three depth-first traversals then spell out the expression in three notations.',
        },
        {
          type: 'figure',
          svg: FIG.expr,
          alt: 'Expression tree for (3 + 4) × (5 − 2): root ×, left child + with leaves 3 and 4, right child − with leaves 5 and 2.',
          caption: 'The expression tree of $(3 + 4) \\times (5 - 2)$.',
          maxWidth: 320,
        },
        {
          type: 'table',
          headers: ['Traversal', 'Notation', 'Result'],
          rows: [
            ['preorder', '**prefix** (Polish notation)', '$\\times\\ +\\ 3\\ 4\\ -\\ 5\\ 2$'],
            ['inorder (with parentheses)', '**infix** (the usual way)', '$(3 + 4) \\times (5 - 2)$'],
            ['postorder', '**postfix** (reverse Polish notation, RPN)', '$3\\ 4\\ +\\ 5\\ 2\\ -\\ \\times$'],
          ],
          caption: 'Prefix and postfix need **no parentheses** and no precedence rules: the order of the tokens alone determines the tree. Infix needs parentheses — $3 + 4 \\times 5 - 2$ is a different tree.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $3\\ 4\\ +\\ 5\\ 2\\ -\\ \\times$ with a stack',
          steps: [
            { tex: '3,\\ 4 \\;\\to\\; [3,\\ 4]', why: 'Numbers are pushed onto the stack.' },
            { tex: '+ \\;\\to\\; [7]', why: 'An operator pops two values ($4$ on top, then $3$), applies itself as $3 + 4$, and pushes the result.' },
            { tex: '5,\\ 2 \\;\\to\\; [7,\\ 5,\\ 2]', why: 'Push.' },
            { tex: '- \\;\\to\\; [7,\\ 3]', why: 'Pop $2$ then $5$; compute $5 - 2$ — the value popped **second** is the left operand.' },
            { tex: '\\times \\;\\to\\; [21]', why: 'Pop $3$ and $7$; push $7 \\times 3$. One value remains: the answer.' },
          ],
          result: '$(3 + 4) \\times (5 - 2) = 21$, computed in a single left-to-right pass with no parentheses.',
        },
        {
          type: 'code',
          title: 'rpn.cpp',
          runnable: true,
          code: CODE.rpn,
          output: OUT.rpn,
          annotations: [
            { lines: '11', text: 'Read the expression token by token, left to right.' },
            { lines: '13-14', text: 'Pop the **right** operand first. Getting this backwards silently flips every subtraction and division.' },
            { lines: '20', text: 'Numbers go straight onto the stack.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Polish notation and HP calculators',
          text: 'Jan Łukasiewicz introduced parenthesis-free prefix notation in the 1920s for logic. Its reverse form drove Hewlett-Packard calculators (with an ENTER key instead of =), the Forth language and PostScript, and it is exactly how the JVM and many game scripting VMs execute code: a stack machine running postfix instructions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Evaluate the postfix expression $6\\ \\ 2\\ \\ 3\\ +\\ \\times\\ \\ 4\\ -$.',
      answer: '26',
      hint: 'Push numbers; each operator pops two values, combines them (second-popped on the left) and pushes the result.',
      explanation: 'Push $6, 2, 3$. $+$ pops $3, 2$ and pushes $5$: stack $[6, 5]$. $\\times$ pops $5, 6$ and pushes $30$. Push $4$: $[30, 4]$. $-$ pops $4$ then $30$ and pushes $30 - 4 = 26$. In infix: $6 \\times (2 + 3) - 4 = 26$. Computing $4 - 30 = -26$ is the classic operand-order slip.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Convert the infix expression $(a + b) \\times c - d$ to postfix. (Multiplication binds tighter than subtraction.)',
      template: 'a b ___ c ___ d ___',
      blanks: [{ answers: ['$+$'] }, { answers: ['$\\times$'] }, { answers: ['$-$'] }],
      wordBank: ['$+$', '$\\times$', '$-$', '$\\div$'],
      explanation: 'The tree has $-$ at the root (it is applied last), with left subtree $(a + b) \\times c$ and right leaf $d$. The left subtree has $\\times$ at its root over $a + b$ and $c$. Postorder: $a\\ b\\ +$, then $c\\ \\times$, then $d\\ -$, giving $a\\ b\\ +\\ c\\ \\times\\ d\\ -$. Each operator appears right after both of its operands are complete.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Binary search trees',
      blocks: [
        {
          type: 'definition',
          term: 'Binary search tree (BST)',
          text: 'A [[dm-bst|binary search tree]] is a binary tree with a key at each node such that, for every node $v$, **all** keys in $v$\'s left subtree are less than $v$\'s key and **all** keys in its right subtree are greater.',
        },
        {
          type: 'figure',
          svg: FIG.bstsearch,
          alt: 'A BST built by inserting 50, 30, 70, 20, 40, 60, 80, 35. Root 50; 30 and 70 below; 20, 40, 60, 80 below them; 35 is the left child of 40. The search path 50, 30, 40, 35 is highlighted.',
          caption: 'The BST obtained by inserting $50, 30, 70, 20, 40, 60, 80, 35$ in that order. Blue: the search path for $35$.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Search for $35$',
          steps: [
            { tex: '35 < 50 \\implies \\text{go left}', why: 'Every key greater than $50$ is in the right subtree, so $35$ can only be on the left.' },
            { tex: '35 > 30 \\implies \\text{go right}', why: 'Compare with the new subtree\'s root.' },
            { tex: '35 < 40 \\implies \\text{go left}', why: 'Same rule, one level down.' },
            { tex: '35 = 35 \\implies \\text{found}', why: 'Four comparisons: one per level on the path.' },
          ],
          result: 'Each comparison discards an entire subtree, so search costs $O(h)$, where $h$ is the height.',
        },
        {
          type: 'p',
          text: '**Insertion** is a search that fails: walk down exactly as when searching for the new key, and attach it as a new leaf where you fall off the tree. That is how $35$ ended up as the left child of $40$. Deletion is a little more involved (a node with two children is replaced by its inorder successor) and is covered in data structures courses.',
        },
        {
          type: 'code',
          title: 'bst.cpp',
          runnable: true,
          code: CODE.bst,
          output: OUT.bst,
          annotations: [
            { lines: '11-15', text: 'Recursive insert: the reference `t` lets us hang the new node directly on the empty child pointer we fell off.' },
            { lines: '18-24', text: 'Iterative search: one comparison per level.' },
            { lines: '26-43', text: 'The three depth-first traversals differ only in where the `printf` sits.' },
            { lines: '44-54', text: 'Level order is BFS with a queue.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why inorder gives sorted order',
          text: 'By [[dm-structural-induction|structural induction]] on the tree (the empty tree prints nothing, which is sorted). Inorder prints the left subtree, then the root, then the right subtree. By the induction hypothesis each subtree comes out sorted; by the BST property everything in the left subtree is smaller than the root and everything in the right subtree is larger. So the whole sequence is sorted. That is why inserting $n$ keys and then traversing inorder is a sorting algorithm ("tree sort").',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Insert $65$ into the BST from the figure. Where does it go?',
      figure: {
        type: 'figure',
        svg: FIG.bst,
        alt: 'A BST: root 50; 30 and 70 below; 20, 40, 60, 80 below them; 35 is the left child of 40.',
        maxWidth: 400,
      },
      options: [
        { text: 'Left child of $70$', why: '$70$ already has a left child, $60$. Insertion keeps walking down until it reaches an empty spot.' },
        { text: 'Right child of $60$', correct: true, why: '$65 > 50$: right. $65 < 70$: left, to $60$. $65 > 60$: right — empty, so $65$ becomes $60$\'s right child.' },
        { text: 'Left child of $80$', why: 'To reach $80$ we would need $65 > 70$, which is false.' },
        { text: 'Right child of $40$', why: '$65 > 50$, so it belongs in the right subtree of the root, not near $40$.' },
      ],
      explanation: 'Follow the search path: $50 \\to 70 \\to 60 \\to$ (empty right child). The new key becomes a leaf there. Check the BST property: $65$ is in $50$\'s right subtree ($> 50$ ✓), in $70$\'s left subtree ($< 70$ ✓), and in $60$\'s right subtree ($> 60$ ✓).',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student checks whether this tree is a binary search tree. Find the first incorrect line.',
      figure: {
        type: 'figure',
        svg: FIG.notbst,
        alt: 'Root 50 with left child 30 and right child 70; 30 has a right child 60 (in red).',
        maxWidth: 200,
      },
      lines: [
        'At the root, the left child $30 < 50$ and the right child $70 > 50$.',
        'At $30$, the right child $60 > 30$.',
        'So every node\'s left child is smaller than it and every right child is larger.',
        'Therefore the tree is a binary search tree.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 are true, but line 4 does not follow: the BST property is about **entire subtrees**, not just children. $60$ lies in the **left subtree** of $50$, so it must be less than $50$ — it is not. A search for $60$ would go right at the root and never find it. A correct checker passes down an allowed range: every key in $50$\'s left subtree must lie in $(-\\infty, 50)$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Balanced vs. degenerate: O(log n) or O(n)',
      blocks: [
        {
          type: 'p',
          text: 'Search, insert and delete all cost $O(h)$. So everything depends on the height — and the height depends on the **order of insertion**.',
        },
        {
          type: 'figure',
          svg: FIG.degen,
          alt: 'Left: keys 1 to 7 inserted in increasing order form a chain where each node is the right child of the previous one, height 6. Right: keys inserted in the order 4, 2, 6, 1, 3, 5, 7 form a perfectly balanced tree of height 2.',
          caption: 'The same $7$ keys. Sorted insertions make a **degenerate** tree — a linked list in disguise. A good order makes a **balanced** tree.',
        },
        {
          type: 'list',
          items: [
            '**Degenerate:** height $n - 1$, so search is $O(n)$ — no better than scanning an array.',
            '**Balanced:** a binary tree of height $h$ holds at most $1 + 2 + \\dots + 2^h = 2^{h+1} - 1$ nodes, so $n$ keys need height at least $\\lceil \\log_2(n + 1) \\rceil - 1$. Balanced trees achieve height $O(\\log n)$, so search is $O(\\log n)$.',
          ],
        },
        {
          type: 'graph',
          x: [0, 100],
          y: [0, 30],
          xStep: 10,
          yStep: 5,
          functions: [
            { expr: 'x - 1', label: 'degenerate: $h = n - 1$', color: 'red', domain: [1, 100] },
            { expr: 'floor(log_2(x))', label: 'balanced: $h = \\lfloor \\log_2 n \\rfloor$', color: 'blue', domain: [1, 100] },
          ],
          points: [
            { x: 'n', y: 'n - 1', color: 'red' },
            { x: 'n', y: 'floor(log_2(n))', color: 'blue' },
          ],
          sliders: [{ name: 'n', min: 1, max: 100, step: 1, value: 31, label: 'number of keys $n$' }],
          readouts: [
            { label: 'degenerate height', expr: 'n - 1', digits: 0 },
            { label: 'balanced height', expr: 'floor(log_2(n))', digits: 0 },
          ],
          caption: 'Height (worst-case comparisons $-1$) against the number of keys. The red line leaves the window at $n = 31$; at $n = 10^6$ it would be $999\\,999$, while the blue staircase would be only $19$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Self-balancing trees in practice',
          text: 'Real libraries never risk the degenerate case. AVL trees and **red–black trees** rotate nodes after each insertion to keep the height $O(\\log n)$ guaranteed; `std::map` and `std::set` in C++ are red–black trees. Databases and file systems use B-trees (many keys per node, very shallow). Game engines use the same idea for spatial data: a badly built BSP tree or octree makes ray casts and collision queries crawl.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'True or false: searching a binary search tree with $n$ keys always takes $O(\\log n)$ time.',
      answer: false,
      explanation: 'False. Search takes $O(h)$ time, and a BST built by inserting keys in sorted order is a chain of height $n - 1$, so a search can take $\\Theta(n)$ comparisons. Only **balanced** BSTs (AVL, red–black, or a lucky insertion order) guarantee $O(\\log n)$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A binary search tree holds $1000$ keys. What is the smallest height it can possibly have?',
      answer: '9',
      label: '$h_{\\min} =$',
      hint: 'A binary tree of height $h$ has at most $2^{h+1} - 1$ nodes.',
      explanation: 'We need $2^{h+1} - 1 \\ge 1000$, i.e. $2^{h+1} \\ge 1001$. Since $2^{9} = 512 < 1001 \\le 1024 = 2^{10}$, the smallest choice is $h + 1 = 10$, so $h = 9$. A perfectly balanced BST finds any of the $1000$ keys in at most $10$ comparisons. (Answering $10$ counts levels instead of edges.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Huffman coding: trees that compress',
      blocks: [
        {
          type: 'p',
          text: 'Binary trees also design **codes**. Put the symbols at the leaves; label each left edge $0$ and each right edge $1$; a symbol\'s code is the label sequence on its root-to-leaf path. Because symbols sit only at leaves, no code is a prefix of another — a **prefix code** — so a bit stream decodes unambiguously: walk down from the root and emit a symbol whenever you hit a leaf.',
        },
        {
          type: 'p',
          text: '[[dm-huffman-coding|Huffman coding]] (David Huffman, 1952, as an MIT student) finds the prefix code with the fewest total bits for given symbol frequencies, with a greedy rule: **repeatedly merge the two least frequent trees** into one whose weight is their sum.',
        },
        {
          type: 'derivation',
          title: 'Frequencies $A{:}\\,10,\\ B{:}\\,6,\\ C{:}\\,3,\\ D{:}\\,1$',
          steps: [
            { tex: '\\{D{:}1,\\ C{:}3\\} \\to 4', why: 'Merge the two smallest weights.' },
            { tex: '\\{4,\\ B{:}6\\} \\to 10', why: 'Now the smallest are $4$ and $6$.' },
            { tex: '\\{A{:}10,\\ 10\\} \\to 20', why: 'Merge the last two trees into the root.' },
            { tex: 'A = 0,\\ B = 11,\\ C = 101,\\ D = 100', why: 'Read the codes off the tree (left $= 0$, right $= 1$).' },
            { tex: '10 \\cdot 1 + 6 \\cdot 2 + 3 \\cdot 3 + 1 \\cdot 3 = 34 \\text{ bits}', why: 'Total length = $\\sum$ frequency × code length. A fixed 2-bit code would need $20 \\cdot 2 = 40$.' },
          ],
          result: 'Frequent symbols get short codes, rare ones long codes: $34$ bits instead of $40$.',
        },
        {
          type: 'figure',
          svg: FIG.huff,
          alt: 'Huffman tree: root 20 with left leaf A (frequency 10, code 0) and right internal node 10; node 10 has left internal node 4 and right leaf B (6, code 11); node 4 has leaves D (1, code 100) and C (3, code 101). Edges labeled 0 on the left, 1 on the right.',
          caption: 'The Huffman tree. The total bit count equals the sum of the internal node weights: $4 + 10 + 20 = 34$.',
          maxWidth: 400,
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where Huffman codes live',
          text: 'DEFLATE (ZIP, gzip, PNG) and JPEG both finish with Huffman coding, so most game assets you ship pass through a Huffman tree. A `std::priority_queue` of subtrees, exactly as in Dijkstra, makes the greedy merge $O(k \\log k)$ for $k$ symbols.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'A file contains six symbols with frequencies $a{:}\\,5,\\ b{:}\\,9,\\ c{:}\\,12,\\ d{:}\\,13,\\ e{:}\\,16,\\ f{:}\\,45$ (in thousands). Build a Huffman code. How many bits (in thousands) does the encoded file use?',
      answer: '224',
      hint: 'Merge the two smallest repeatedly. The total equals the sum of the weights of all merged (internal) nodes.',
      explanation: 'Merges: $5 + 9 = 14$; $12 + 13 = 25$; $14 + 16 = 30$; $25 + 30 = 55$; $45 + 55 = 100$. The total cost is the sum of the merged weights: $14 + 25 + 30 + 55 + 100 = 224$ thousand bits. (Codes: $f$ gets $1$ bit, $c, d, e$ get $3$ bits, $a, b$ get $4$ bits: $45 + 3(12 + 13 + 16) + 4(5 + 9) = 224$.) A fixed-length code would need $3$ bits per symbol, $300$ thousand bits.',
    },
  ],
  takeaways: [
    'Preorder (root first), inorder (root between), postorder (root last) are DFS orders; level order is BFS with a queue.',
    'Expression trees turn into prefix, infix and postfix notation; postfix evaluates left to right with a stack and needs no parentheses.',
    'In a BST every key in the left subtree is smaller and every key in the right subtree larger; search and insert walk one path, costing $O(h)$, and inorder lists the keys sorted.',
    'Height decides everything: $\\lfloor \\log_2 n \\rfloor$ for a balanced tree versus $n - 1$ for a degenerate one, i.e. $O(\\log n)$ versus $O(n)$ — which is why `std::map` is a self-balancing red–black tree.',
    'Huffman coding greedily merges the two least frequent subtrees to build an optimal prefix code.',
  ],
  reading: [
    { title: 'Tree traversal (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Tree_traversal', source: 'wikipedia', note: 'Pre-, in-, post- and level-order traversals with diagrams, recursive and iterative code.' },
    { title: 'Binary search tree (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Binary_search_tree', source: 'wikipedia', note: 'Search, insertion and deletion, with height analysis and links to self-balancing variants.' },
    { title: 'Huffman coding (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Huffman_coding', source: 'wikipedia', note: 'The greedy algorithm, a proof of optimality and its use in DEFLATE and JPEG.' },
    { title: 'Levin, Discrete Mathematics: An Open Introduction', url: 'https://discrete.openmathbooks.org/dmoi3.html', source: 'book', note: 'The trees section covers rooted and binary trees, the background for this lesson.' },
  ],
};
