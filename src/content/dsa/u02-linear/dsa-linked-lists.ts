import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-linked-lists',
  title: 'Linked Lists',
  summary: 'Singly and doubly linked lists built from scratch, sentinels that remove special cases, in-place reversal, Floyd\'s cycle detection, and the honest truth about why linked lists are usually slower than vectors, plus the intrusive lists engines actually use.',
  minutes: 22,
  objectives: [
    'Implement a singly linked list (push_front, insert_after, remove, reverse) and state the cost of each operation',
    'Use a sentinel node in a circular doubly linked list to make insertion and deletion branch-free, and relate it to `std::list`',
    'Reverse a list in place and justify it with a loop invariant',
    'Detect a cycle with Floyd\'s tortoise and hare, find where it starts, and explain why it works',
    'Explain with cache-miss counts why linked lists usually lose to vectors, and recognise when lists (especially intrusive lists) are the right tool',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Nodes and pointers: the singly linked list',
      blocks: [
        {
          type: 'p',
          text: 'A vector keeps its elements side by side and finds element $i$ by arithmetic. A [[dsa-linked-list|linked list]] gives that up. Each element lives in its own **node**, allocated separately anywhere on the heap, and each node stores the address of the next one. The list itself is just a pointer to the first node, the **head**; the last node\'s `next` is `nullptr`.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 104\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"10\" y=\"58\" font-size=\"14\" font-weight=\"600\">head</text>\n<path d=\"M50.0,53.0 L70.0,53.0\" class=\"s-orange\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M78.0,53.0 L70.0,56.6 L70.0,49.4 Z\" class=\"f-orange\"/>\n<rect x=\"80\" y=\"35\" width=\"50\" height=\"36\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<rect x=\"130\" y=\"35\" width=\"30\" height=\"36\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"1.5\"/>\n<text x=\"105\" y=\"58\" text-anchor=\"middle\" font-size=\"15\">10</text>\n<circle cx=\"145\" cy=\"53\" r=\"3.5\" fill=\"currentColor\"/>\n<text x=\"105\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">value</text>\n<text x=\"145\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">next</text>\n<rect x=\"200\" y=\"35\" width=\"50\" height=\"36\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<rect x=\"250\" y=\"35\" width=\"30\" height=\"36\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"1.5\"/>\n<text x=\"225\" y=\"58\" text-anchor=\"middle\" font-size=\"15\">20</text>\n<circle cx=\"265\" cy=\"53\" r=\"3.5\" fill=\"currentColor\"/>\n<text x=\"225\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">value</text>\n<text x=\"265\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">next</text>\n<rect x=\"320\" y=\"35\" width=\"50\" height=\"36\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<rect x=\"370\" y=\"35\" width=\"30\" height=\"36\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"1.5\"/>\n<text x=\"345\" y=\"58\" text-anchor=\"middle\" font-size=\"15\">30</text>\n<circle cx=\"385\" cy=\"53\" r=\"3.5\" fill=\"currentColor\"/>\n<text x=\"345\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">value</text>\n<text x=\"385\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">next</text>\n<path d=\"M148.0,53.0 L190.0,53.0\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M198.0,53.0 L190.0,56.6 L190.0,49.4 Z\" fill=\"currentColor\"/>\n<path d=\"M268.0,53.0 L310.0,53.0\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M318.0,53.0 L310.0,56.6 L310.0,49.4 Z\" fill=\"currentColor\"/>\n<path d=\"M388.0,53.0 L430.0,53.0\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M438.0,53.0 L430.0,56.6 L430.0,49.4 Z\" fill=\"currentColor\"/>\n<text x=\"444\" y=\"58\" font-size=\"14\" class=\"t-gray\">null</text>\n<text x=\"10\" y=\"18\" font-size=\"12\" class=\"t-gray\">each node is a separate heap allocation holding a value and the address of the next node</text>\n</svg>",
          alt: 'A head pointer pointing at a node holding 10, which points to a node holding 20, which points to a node holding 30, which points to null.',
          caption: 'Order comes from the links, not from positions in memory. Inserting or removing a node only rewrites a pointer or two; nothing shifts.',
          maxWidth: 520,
        },
        {
          type: 'table',
          headers: ['Operation (singly linked, head pointer only)', 'Cost', 'Why'],
          rows: [
            ['`push_front`, `pop_front`', '$O(1)$', 'rewrite `head`'],
            ['`insert_after(node, v)`, `erase_after(node)`', '$O(1)$', 'rewrite one `next`, **given** the node'],
            ['find a value, reach the $k$th element', '$O(n)$, $O(k)$', 'must follow links one by one'],
            ['`push_back`, remove the last node', '$O(n)$', 'must walk to the end (a tail pointer makes `push_back` $O(1)$, but not removing the last node, which needs its predecessor)'],
          ],
        },
        {
          type: 'code',
          title: 'singly_list.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <forward_list>
#include <initializer_list>

struct Node {
    int value;
    Node* next;
};

class SList {
    Node* head_ = nullptr;

public:
    SList() = default;
    SList(const SList&) = delete;
    SList& operator=(const SList&) = delete;
    ~SList() {                                  // iterative: no recursion depth
        while (head_) {
            Node* next = head_->next;           // save the link BEFORE deleting
            delete head_;
            head_ = next;
        }
    }

    void push_front(int v) { head_ = new Node{v, head_}; }          // O(1)

    Node* find(int v) {                                              // O(n)
        for (Node* p = head_; p; p = p->next)
            if (p->value == v) return p;
        return nullptr;
    }

    static void insert_after(Node* pos, int v) {                     // O(1) given pos
        pos->next = new Node{v, pos->next};
    }

    bool remove(int v) {                        // unlink the first node holding v
        Node** link = &head_;                   // the pointer that points at *link
        while (*link && (*link)->value != v) link = &(*link)->next;
        if (!*link) return false;
        Node* dead = *link;
        *link = dead->next;                     // same code for the head and the middle
        delete dead;
        return true;
    }

    void reverse() {                            // O(n) time, O(1) extra space
        Node* prev = nullptr;
        Node* curr = head_;
        while (curr) {
            Node* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        head_ = prev;
    }

    void print(const char* label) const {
        std::printf("%-22s", label);
        for (Node* p = head_; p; p = p->next) std::printf(" %d ->", p->value);
        std::printf(" null\\n");
    }
};

int main() {
    SList list;
    for (int v : {40, 30, 10}) list.push_front(v);
    list.print("push_front 40, 30, 10:");
    SList::insert_after(list.find(10), 20);
    list.print("insert 20 after 10:");
    list.remove(10);
    list.remove(40);
    list.print("remove 10 and 40:");
    for (int v : {50, 60}) SList::insert_after(list.find(30), v);
    list.print("insert after 30:");
    list.reverse();
    list.print("reversed:");

    std::forward_list<int> fl{10, 20, 30};      // the standard singly linked list
    fl.insert_after(fl.begin(), 15);
    fl.remove(30);
    fl.reverse();
    std::printf("%-22s", "std::forward_list:");
    for (int v : fl) std::printf(" %d", v);
    std::printf("\\n");
}`,
          output: `push_front 40, 30, 10: 10 -> 30 -> 40 -> null
insert 20 after 10:    10 -> 20 -> 30 -> 40 -> null
remove 10 and 40:      20 -> 30 -> null
insert after 30:       20 -> 30 -> 60 -> 50 -> null
reversed:              50 -> 60 -> 30 -> 20 -> null
std::forward_list:     20 15 10`,
          annotations: [
            { lines: '17-23', text: 'Destruction walks the list with a loop, saving `next` **before** deleting the node that holds it.' },
            { lines: 25, text: 'The new node points at the old head, then becomes the head. Works for an empty list too.' },
            { lines: '37-45', text: 'Removal with a pointer to a pointer: `link` is the address of whichever pointer leads to the current node (`head_` or some node\'s `next`). Rewriting `*link` unlinks the node, with no special case for removing the head.' },
            { lines: '47-57', text: 'In-place reversal, the subject of a card below.' },
            { lines: '80-83', text: '`std::forward_list` is the standard singly linked list. Its interface is built around `insert_after` and `erase_after`, because only the node *before* a position can be changed in $O(1)$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'unique_ptr chains and the call stack',
          text: 'Writing `std::unique_ptr<Node> next` is tempting, since the list then frees itself. But destroying the head destroys its `next`, which destroys *its* `next`, and so on: a recursion as deep as the list. A list of a million nodes can overflow the stack in its destructor. If you use `unique_ptr` links, still write a destructor that releases the nodes in a loop.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'mcq',
      prompt: 'You have a singly linked list with only a `head` pointer (no tail pointer, no size field). Which operation is $O(1)$?',
      options: [
        { text: 'Inserting a new value at the front', correct: true, why: 'Make the new node point to the old head and update `head`: two pointer writes, whatever the length.' },
        { text: 'Appending a new value at the back', why: 'Without a tail pointer you must walk all $n$ nodes to find the last one: $O(n)$.' },
        { text: 'Reading the element at index $n/2$', why: 'There is no address arithmetic. You must follow $n/2$ links from the head: $O(n)$.' },
        { text: 'Removing the last node', why: 'You need the **second to last** node to set its `next` to `nullptr`, and finding it takes a walk of $n - 1$ links. Even a tail pointer does not help with this in a singly linked list.' },
      ],
      explanation: 'A singly linked list is cheap exactly where it has a pointer: at the head, and right after any node you already hold. Everything that needs a position (index $k$, the end, the predecessor of a node) costs a walk. That is why `std::forward_list` offers `push_front` and `insert_after` but no `push_back` or `size()`.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Doubly linked lists and sentinels',
      blocks: [
        {
          type: 'p',
          text: 'Give each node a `prev` pointer as well and you get a **doubly linked list**: you can walk both ways, and, crucially, you can remove a node in $O(1)$ given **only that node**, because it knows its own predecessor. The price is one more pointer per node and twice as many pointer updates per change.',
        },
        {
          type: 'p',
          text: 'Naive implementations are full of special cases: inserting into an empty list, removing the head, removing the tail, each with its own `nullptr` checks, and each a place for bugs. A [[dsa-sentinel-node|sentinel]] (a dummy node that holds no element) removes all of them. Make the list **circular** through the sentinel: the first node\'s `prev` and the last node\'s `next` both point at it, and an empty list is a sentinel pointing at itself. Now every real node always has a real neighbour on both sides.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"40\" y=\"70\" width=\"70\" height=\"40\" rx=\"5\" class=\"f-gray s-gray\" fill-opacity=\"0.15\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n<text x=\"75\" y=\"95\" text-anchor=\"middle\" font-size=\"15\">sentinel</text>\n<rect x=\"165\" y=\"70\" width=\"70\" height=\"40\" rx=\"5\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"200\" y=\"95\" text-anchor=\"middle\" font-size=\"15\">1</text>\n<rect x=\"290\" y=\"70\" width=\"70\" height=\"40\" rx=\"5\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"325\" y=\"95\" text-anchor=\"middle\" font-size=\"15\">2</text>\n<rect x=\"415\" y=\"70\" width=\"70\" height=\"40\" rx=\"5\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"450\" y=\"95\" text-anchor=\"middle\" font-size=\"15\">3</text>\n<path d=\"M110.0,82.0 L157.0,82.0\" class=\"s-blue\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M165.0,82.0 L157.0,85.6 L157.0,78.4 Z\" class=\"f-blue\"/>\n<path d=\"M165.0,100.0 L118.0,100.0\" class=\"s-purple\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M110.0,100.0 L118.0,96.4 L118.0,103.6 Z\" class=\"f-purple\"/>\n<path d=\"M235.0,82.0 L282.0,82.0\" class=\"s-blue\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M290.0,82.0 L282.0,85.6 L282.0,78.4 Z\" class=\"f-blue\"/>\n<path d=\"M290.0,100.0 L243.0,100.0\" class=\"s-purple\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M235.0,100.0 L243.0,96.4 L243.0,103.6 Z\" class=\"f-purple\"/>\n<path d=\"M360.0,82.0 L407.0,82.0\" class=\"s-blue\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M415.0,82.0 L407.0,85.6 L407.0,78.4 Z\" class=\"f-blue\"/>\n<path d=\"M415.0,100.0 L368.0,100.0\" class=\"s-purple\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M360.0,100.0 L368.0,96.4 L368.0,103.6 Z\" class=\"f-purple\"/>\n<path d=\"M450.0,70.0 Q262.5,-10.0 82.4,66.9\" class=\"s-blue\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M75.0,70.0 L80.9,63.5 L83.8,70.2 Z\" class=\"f-blue\"/>\n<path d=\"M75.0,110.0 Q262.5,190.0 442.6,113.1\" class=\"s-purple\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M450.0,110.0 L444.1,116.5 L441.2,109.8 Z\" class=\"f-purple\"/>\n<text x=\"250\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" class=\"t-blue\">last.next = sentinel</text>\n<text x=\"250\" y=\"186\" text-anchor=\"middle\" font-size=\"12\" class=\"t-purple\">first.prev = sentinel</text>\n<text x=\"10\" y=\"140\" font-size=\"11\" class=\"t-blue\">→ next</text>\n<text x=\"10\" y=\"156\" font-size=\"11\" class=\"t-purple\">← prev</text>\n</svg>",
          alt: 'A dashed sentinel node followed by nodes 1, 2 and 3, each linked to its neighbours by a next arrow and a prev arrow. A curved next arrow runs from node 3 back to the sentinel, and a curved prev arrow from the sentinel to node 3.',
          caption: 'Circular with a sentinel: `begin()` is `sentinel.next`, `end()` is the sentinel itself, and there is no `nullptr` anywhere.',
          maxWidth: 520,
        },
        {
          type: 'code',
          title: 'doubly_sentinel.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <iterator>
#include <list>

// Circular doubly linked list with a sentinel: an empty list is a sentinel
// whose prev and next point to itself, so no operation ever sees nullptr.
struct DNode {
    int value;
    DNode* prev;
    DNode* next;
};

class DList {
    DNode sentinel_{0, &sentinel_, &sentinel_};

public:
    DList() = default;
    DList(const DList&) = delete;
    DList& operator=(const DList&) = delete;
    ~DList() { while (!empty()) erase(sentinel_.next); }

    bool empty() const { return sentinel_.next == &sentinel_; }

    DNode* insert_before(DNode* pos, int v) {   // O(1): four pointer writes
        DNode* n = new DNode{v, pos->prev, pos};
        pos->prev->next = n;
        pos->prev = n;
        return n;
    }
    void erase(DNode* n) {                      // O(1): two pointer writes
        n->prev->next = n->next;
        n->next->prev = n->prev;
        delete n;
    }
    DNode* push_back(int v) { return insert_before(&sentinel_, v); }
    DNode* push_front(int v) { return insert_before(sentinel_.next, v); }

    void print(const char* label) const {
        std::printf("%-18s", label);
        for (DNode* p = sentinel_.next; p != &sentinel_; p = p->next) std::printf(" %d", p->value);
        std::printf("   | backwards:");
        for (DNode* p = sentinel_.prev; p != &sentinel_; p = p->prev) std::printf(" %d", p->value);
        std::printf("\\n");
    }
};

int main() {
    DList d;
    DNode* b = d.push_back(2);
    d.push_back(3);
    d.push_front(1);
    d.print("1 2 3:");
    d.insert_before(b, 99);                     // we hold a pointer to 2: no search needed
    d.print("99 before 2:");
    d.erase(b);
    d.print("erase 2:");

    // std::list is exactly this structure. splice moves nodes between lists in O(1).
    std::list<int> a{1, 2, 3}, c{7, 8, 9};
    auto it = std::next(a.begin());             // points at 2
    a.splice(it, c);                            // move ALL of c before 2: no copies, no allocations
    std::printf("after splice: a =");
    for (int v : a) std::printf(" %d", v);
    std::printf(", c has %zu elements, *it = %d\\n", c.size(), *it);
}`,
          output: `1 2 3:             1 2 3   | backwards: 3 2 1
99 before 2:       1 99 2 3   | backwards: 3 2 99 1
erase 2:           1 99 3   | backwards: 3 99 1
after splice: a = 1 7 8 9 2 3, c has 0 elements, *it = 2`,
          annotations: [
            { lines: 14, text: 'The sentinel is a member, initialized to point at itself: an empty circular list.' },
            { lines: '24-29', text: 'Insert before `pos`: the new node gets both links at construction, then the two neighbours are pointed at it. No `if` anywhere, even when the list is empty (then `pos` is the sentinel and `pos->prev` is the sentinel too).' },
            { lines: '30-34', text: 'Erase: each neighbour skips over `n`. The sentinel guarantees `n->prev` and `n->next` exist.' },
            { lines: '58-61', text: '`std::list` is this exact design. `splice` relinks a whole range of nodes from another list in $O(1)$: no copying, no allocation, and the moved elements keep their addresses, so `it` still points at $2$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the sentinel removes every special case',
          text: 'Special cases in list code come from missing neighbours: the head has no predecessor, the tail has no successor, an empty list has neither. In a circular list with a sentinel, **every** real node has a real `prev` and a real `next` (possibly the sentinel), so `n->prev->next` and `n->next->prev` are always valid writes. The one-node, first-node, last-node and empty-list cases all run the same four lines. Fewer branches means fewer bugs and, as a bonus, more predictable code for the CPU.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Sentinels everywhere',
          text: 'The trick generalizes: a sentinel value at the end of an array lets a search loop drop its bounds check, a dummy head node simplifies singly linked list surgery (a classic interview trick for merging two sorted lists), and the `end()` iterator of every standard container is a sentinel in spirit. Whenever an algorithm has an annoying edge case at a boundary, ask whether a dummy element would make the boundary disappear.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'fill',
      prompt: 'Complete `insert_before(pos, n)` for a circular doubly linked list with a sentinel, where `n` is a new, unlinked node. The order shown is safe.',
      template: '`n->prev = pos->prev;` `n->next = pos;` `pos->prev->next =` ___ `;` `pos->prev =` ___ `;`',
      blanks: [{ answers: ['`n`'] }, { answers: ['`n`'] }],
      wordBank: ['`n`', '`n`', '`pos`', '`pos->next`', '`n->prev`', '`nullptr`'],
      explanation: 'First the new node points at its two neighbours: the old predecessor `pos->prev` and `pos` itself. Then the neighbours point back at it: the old predecessor\'s `next` becomes `n`, and `pos->prev` becomes `n`. The order matters for the last two: `pos->prev->next = n` must run **before** `pos->prev = n`, or `pos->prev` would already be `n` and you would set `n->next = n`, a self-loop that drops the rest of the list. Thanks to the sentinel, none of these pointers can be `nullptr`.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Reversing a list in place',
      blocks: [
        {
          type: 'p',
          text: 'Reversing a singly linked list is the most-asked linked-list interview question, and a good exercise in pointer discipline. The idea: walk the list once and flip each `next` pointer to point backwards. The danger: once you overwrite `curr->next`, you have lost the rest of the list, unless you saved it first. Three pointers do the job: `prev`, `curr` and `next`.',
        },
        {"type": "algo", "view": "graph", "width": 420, "height": 170, "nodes": [{"id": "1", "x": 60, "y": 90}, {"id": "2", "x": 160, "y": 90}, {"id": "3", "x": 260, "y": 90}, {"id": "4", "x": 360, "y": 90}], "edges": [{"from": "1", "to": "2"}, {"from": "2", "to": "3"}, {"from": "3", "to": "4"}], "code": "Node* prev = nullptr;\nNode* curr = head;\nwhile (curr) {\n    Node* next = curr->next;\n    curr->next = prev;\n    prev = curr;\n    curr = next;\n}\nhead = prev;", "interval": 1100, "frames": [{"note": "Start: `prev` is null and `curr` is the head. Blue links point forward (right).", "lines": [1, 2], "edgeColors": [{"from": "1", "to": "2", "color": "blue"}, {"from": "2", "to": "3", "color": "blue"}, {"from": "3", "to": "4", "color": "blue"}], "nodeColors": [{"id": "1", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: 2"}, {"id": "2", "text": "next: 3"}, {"id": "3", "text": "next: 4"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "null"], ["curr", "1"], ["next", "—"]]}, {"note": "Save `next = curr->next` = 2 before the link is overwritten.", "lines": [4], "edgeColors": [{"from": "1", "to": "2", "color": "blue"}, {"from": "2", "to": "3", "color": "blue"}, {"from": "3", "to": "4", "color": "blue"}], "nodeColors": [{"id": "2", "color": "blue"}, {"id": "1", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: 2"}, {"id": "2", "text": "next: 3"}, {"id": "3", "text": "next: 4"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "null"], ["curr", "1"], ["next", "2"]]}, {"note": "`curr->next = prev`: node 1 now points back to null. The link to the right is cut, but `next` remembers it.", "lines": [5], "edgeColors": [{"from": "2", "to": "3", "color": "blue"}, {"from": "3", "to": "4", "color": "blue"}], "nodeColors": [{"id": "2", "color": "blue"}, {"id": "1", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 3"}, {"id": "3", "text": "next: 4"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "null"], ["curr", "1"], ["next", "2"]]}, {"note": "Advance: `prev = 1`, `curr = 2`. Invariant: `prev` heads the reversed part, `curr` heads the rest.", "lines": [6, 7], "edgeColors": [{"from": "2", "to": "3", "color": "blue"}, {"from": "3", "to": "4", "color": "blue"}], "nodeColors": [{"id": "1", "color": "purple"}, {"id": "2", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 3"}, {"id": "3", "text": "next: 4"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "1"], ["curr", "2"], ["next", "—"]]}, {"note": "Save `next = curr->next` = 3 before the link is overwritten.", "lines": [4], "edgeColors": [{"from": "2", "to": "3", "color": "blue"}, {"from": "3", "to": "4", "color": "blue"}], "nodeColors": [{"id": "1", "color": "purple"}, {"id": "3", "color": "blue"}, {"id": "2", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 3"}, {"id": "3", "text": "next: 4"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "1"], ["curr", "2"], ["next", "3"]]}, {"note": "`curr->next = prev`: node 2 now points back to 1 (green: reversed). The link to the right is cut, but `next` remembers it.", "lines": [5], "edgeColors": [{"from": "1", "to": "2", "color": "green"}, {"from": "3", "to": "4", "color": "blue"}], "nodeColors": [{"id": "1", "color": "purple"}, {"id": "3", "color": "blue"}, {"id": "2", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 1"}, {"id": "3", "text": "next: 4"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "1"], ["curr", "2"], ["next", "3"]]}, {"note": "Advance: `prev = 2`, `curr = 3`. Invariant: `prev` heads the reversed part, `curr` heads the rest.", "lines": [6, 7], "edgeColors": [{"from": "1", "to": "2", "color": "green"}, {"from": "3", "to": "4", "color": "blue"}], "nodeColors": [{"id": "2", "color": "purple"}, {"id": "3", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 1"}, {"id": "3", "text": "next: 4"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "2"], ["curr", "3"], ["next", "—"]]}, {"note": "Save `next = curr->next` = 4 before the link is overwritten.", "lines": [4], "edgeColors": [{"from": "1", "to": "2", "color": "green"}, {"from": "3", "to": "4", "color": "blue"}], "nodeColors": [{"id": "2", "color": "purple"}, {"id": "4", "color": "blue"}, {"id": "3", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 1"}, {"id": "3", "text": "next: 4"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "2"], ["curr", "3"], ["next", "4"]]}, {"note": "`curr->next = prev`: node 3 now points back to 2 (green: reversed). The link to the right is cut, but `next` remembers it.", "lines": [5], "edgeColors": [{"from": "1", "to": "2", "color": "green"}, {"from": "2", "to": "3", "color": "green"}], "nodeColors": [{"id": "2", "color": "purple"}, {"id": "4", "color": "blue"}, {"id": "3", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 1"}, {"id": "3", "text": "next: 2"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "2"], ["curr", "3"], ["next", "4"]]}, {"note": "Advance: `prev = 3`, `curr = 4`. Invariant: `prev` heads the reversed part, `curr` heads the rest.", "lines": [6, 7], "edgeColors": [{"from": "1", "to": "2", "color": "green"}, {"from": "2", "to": "3", "color": "green"}], "nodeColors": [{"id": "3", "color": "purple"}, {"id": "4", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 1"}, {"id": "3", "text": "next: 2"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "3"], ["curr", "4"], ["next", "—"]]}, {"note": "Save `next = curr->next` = null before the link is overwritten.", "lines": [4], "edgeColors": [{"from": "1", "to": "2", "color": "green"}, {"from": "2", "to": "3", "color": "green"}], "nodeColors": [{"id": "3", "color": "purple"}, {"id": "4", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 1"}, {"id": "3", "text": "next: 2"}, {"id": "4", "text": "next: null"}], "vars": [["prev", "3"], ["curr", "4"], ["next", "null"]]}, {"note": "`curr->next = prev`: node 4 now points back to 3 (green: reversed).", "lines": [5], "edgeColors": [{"from": "1", "to": "2", "color": "green"}, {"from": "2", "to": "3", "color": "green"}, {"from": "3", "to": "4", "color": "green"}], "nodeColors": [{"id": "3", "color": "purple"}, {"id": "4", "color": "orange"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 1"}, {"id": "3", "text": "next: 2"}, {"id": "4", "text": "next: 3"}], "vars": [["prev", "3"], ["curr", "4"], ["next", "null"]]}, {"note": "Advance: `prev = 4`, `curr = null`. Invariant: `prev` heads the reversed part, `curr` heads the rest.", "lines": [6, 7], "edgeColors": [{"from": "1", "to": "2", "color": "green"}, {"from": "2", "to": "3", "color": "green"}, {"from": "3", "to": "4", "color": "green"}], "nodeColors": [{"id": "4", "color": "purple"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 1"}, {"id": "3", "text": "next: 2"}, {"id": "4", "text": "next: 3"}], "vars": [["prev", "4"], ["curr", "null"], ["next", "—"]]}, {"note": "`curr` is null, so the loop ends and `head = prev` = 4. Every link now points left: 4 → 3 → 2 → 1 → null.", "lines": [9], "edgeColors": [{"from": "1", "to": "2", "color": "green"}, {"from": "2", "to": "3", "color": "green"}, {"from": "3", "to": "4", "color": "green"}], "nodeColors": [{"id": "4", "color": "green"}], "nodeNotes": [{"id": "1", "text": "next: null"}, {"id": "2", "text": "next: 1"}, {"id": "3", "text": "next: 2"}, {"id": "4", "text": "next: 3"}], "vars": [["prev", "4"], ["curr", "null"], ["next", "—"]]}], "caption": "Reversing $1 \\to 2 \\to 3 \\to 4$ in place. Under each node is its `next` pointer. A blue link points right, a green link points left, and a plain line is no link at all. Purple: `prev`; orange: `curr`; blue node: `next`."},
        {
          type: 'derivation',
          title: 'Why the reversal is correct: a loop invariant',
          steps: [
            { tex: '\\text{Invariant: } \\texttt{prev} \\text{ heads the reversed first part; } \\texttt{curr} \\text{ heads the untouched rest}', why: 'The [[dm-loop-invariant|loop invariant]] to maintain. Together, the two parts hold every node exactly once.' },
            { tex: '\\text{Initially } \\texttt{prev} = \\texttt{nullptr}, \\ \\texttt{curr} = \\texttt{head}', why: 'Initialization: the reversed part is empty and the rest is the whole list, so the invariant holds.' },
            { tex: '\\texttt{next = curr->next; \\ curr->next = prev;}', why: 'Maintenance, part 1: save the rest, then attach `curr` to the front of the reversed part. The reversed part now starts at `curr`.' },
            { tex: '\\texttt{prev = curr; \\ curr = next;}', why: 'Maintenance, part 2: move both markers one node right. The invariant holds again, with the reversed part one node longer.' },
            { tex: '\\texttt{curr} = \\texttt{nullptr} \\implies \\texttt{prev} \\text{ heads the whole list, reversed}', why: 'Termination: the untouched rest is empty, so the reversed part contains all nodes. Set `head = prev`. The loop runs once per node: $O(n)$ time, $O(1)$ extra space.' },
          ],
          result: 'Each iteration moves one node from the front of the rest to the front of the reversed part, so after $n$ iterations the whole list is reversed.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'The recursive version',
          text: 'There is an elegant recursive reversal: reverse the list after the head, then hook the old head onto the end. It needs $O(n)$ stack frames, so by the previous unit\'s reasoning it overflows on long lists. In interviews, give the iterative version and mention why.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'order',
      prompt: 'Put the four statements inside the reversal loop `while (curr) { … }` in the only order that works.',
      lines: ['`Node* next = curr->next;`', '`curr->next = prev;`', '`prev = curr;`', '`curr = next;`'],
      explanation: 'Each statement uses a value that a later one overwrites. `next` must be saved before `curr->next` is overwritten (or the rest of the list is lost). `curr->next = prev` needs the **old** `prev`, so it must come before `prev = curr`. And `prev = curr` needs the **old** `curr`, so it must come before `curr = next`. That chain of dependencies leaves exactly one valid order.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'This function frees every node of a singly linked list. It sometimes works and sometimes crashes. Tap the line with the bug.',
      lines: [
        '`void freeAll(Node* head) {`',
        '`    Node* curr = head;`',
        '`    while (curr != nullptr) {`',
        '`        delete curr;`',
        '`        curr = curr->next;`',
        '`    }`',
        '`}`',
      ],
      errorLines: [5],
      explanation: 'Line 5 reads `curr->next` **after** line 4 deleted `curr`: a use-after-free. The freed memory often still holds the old value, so the bug hides in testing and crashes in production (or under AddressSanitizer, immediately). Save the link first: `Node* next = curr->next; delete curr; curr = next;`. This is exactly what the destructor in `singly_list.cpp` does.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Floyd\'s cycle detection: tortoise and hare',
      blocks: [
        {
          type: 'p',
          text: 'A bug, or a malicious input, can make a list loop back on itself. Walking it then never ends. You could remember every node visited in a hash set, but that costs $O(n)$ memory. [[dsa-floyd-cycle-detection|Floyd\'s algorithm]] needs just two pointers: a **tortoise** that moves one node per step and a **hare** that moves two. If there is no cycle, the hare falls off the end. If there is one, the hare laps the tortoise inside the cycle and they land on the same node.',
        },
        {"type": "algo", "view": "graph", "width": 420, "height": 260, "nodes": [{"id": "0", "x": 40, "y": 130}, {"id": "1", "x": 110, "y": 130}, {"id": "2", "x": 180, "y": 130}, {"id": "3", "x": 235, "y": 130}, {"id": "4", "x": 294, "y": 49}, {"id": "5", "x": 389, "y": 80}, {"id": "6", "x": 389, "y": 180}, {"id": "7", "x": 294, "y": 211}], "edges": [{"from": "0", "to": "1", "directed": true}, {"from": "1", "to": "2", "directed": true}, {"from": "2", "to": "3", "directed": true}, {"from": "3", "to": "4", "directed": true}, {"from": "4", "to": "5", "directed": true}, {"from": "5", "to": "6", "directed": true}, {"from": "6", "to": "7", "directed": true}, {"from": "7", "to": "3", "directed": true}], "code": "slow = fast = head;\ndo {\n    slow = slow->next;\n    fast = fast->next->next;\n} while (slow != fast);\np = head;  q = slow;\nwhile (p != q) {\n    p = p->next;\n    q = q->next;\n}\nreturn p;  // the cycle's start", "interval": 1100, "frames": [{"note": "Phase 1: tortoise **T** and hare **H** both start at the head.", "nodeColors": [{"id": "0", "color": "purple"}], "nodeNotes": [{"id": "0", "text": "T+H"}], "lines": [1], "vars": [["phase", "1: detect"], ["steps", "0"], ["H is ahead by", "0"]]}, {"note": "Step 1: T moves 1 to node 1, H moves 2 to node 2.", "nodeColors": [{"id": "1", "color": "orange"}, {"id": "2", "color": "blue"}], "nodeNotes": [{"id": "1", "text": "T"}, {"id": "2", "text": "H"}], "lines": [3, 4], "vars": [["phase", "1: detect"], ["steps", "1"], ["H is ahead by", "1"]]}, {"note": "Step 2: T moves 1 to node 2, H moves 2 to node 4. H is in the cycle, gaining one node per step.", "nodeColors": [{"id": "2", "color": "orange"}, {"id": "4", "color": "blue"}], "nodeNotes": [{"id": "2", "text": "T"}, {"id": "4", "text": "H"}], "lines": [3, 4], "vars": [["phase", "1: detect"], ["steps", "2"], ["H is ahead by", "2"]]}, {"note": "Step 3: T moves 1 to node 3, H moves 2 to node 6.", "nodeColors": [{"id": "3", "color": "orange"}, {"id": "6", "color": "blue"}], "nodeNotes": [{"id": "3", "text": "T"}, {"id": "6", "text": "H"}], "lines": [3, 4], "vars": [["phase", "1: detect"], ["steps", "3"], ["H is ahead by", "3"]]}, {"note": "Step 4: T moves 1 to node 4, H moves 2 to node 3.", "nodeColors": [{"id": "4", "color": "orange"}, {"id": "3", "color": "blue"}], "nodeNotes": [{"id": "4", "text": "T"}, {"id": "3", "text": "H"}], "lines": [3, 4], "vars": [["phase", "1: detect"], ["steps", "4"], ["H is ahead by", "4"]]}, {"note": "Step 5: T moves to 5, H jumps two to 5. They meet at node 5: there **is** a cycle.", "nodeColors": [{"id": "5", "color": "purple"}], "nodeNotes": [{"id": "5", "text": "T+H"}], "lines": [3, 4, 5], "vars": [["phase", "1: detect"], ["steps", "5"], ["H is ahead by", "5"]]}, {"note": "Phase 2: put **P** back at the head and leave **Q** at the meeting point 5. Both now move one step at a time.", "nodeColors": [{"id": "0", "color": "orange"}, {"id": "5", "color": "blue"}], "nodeNotes": [{"id": "0", "text": "P"}, {"id": "5", "text": "Q"}], "lines": [6], "vars": [["phase", "2: find start"], ["steps", "0"]]}, {"note": "P moves to 1, Q moves to 6.", "nodeColors": [{"id": "1", "color": "orange"}, {"id": "6", "color": "blue"}], "nodeNotes": [{"id": "1", "text": "P"}, {"id": "6", "text": "Q"}], "lines": [7, 8, 9], "vars": [["phase", "2: find start"], ["steps", "1"]]}, {"note": "P moves to 2, Q moves to 7.", "nodeColors": [{"id": "2", "color": "orange"}, {"id": "7", "color": "blue"}], "nodeNotes": [{"id": "2", "text": "P"}, {"id": "7", "text": "Q"}], "lines": [7, 8, 9], "vars": [["phase", "2: find start"], ["steps", "2"]]}, {"note": "P and Q meet at node 3 after 3 steps: the cycle starts there, $\\mu = 3$ nodes from the head.", "nodeColors": [{"id": "3", "color": "purple"}], "nodeNotes": [{"id": "3", "text": "P+Q"}], "lines": [7, 11], "vars": [["phase", "2: find start"], ["steps", "3"]]}, {"note": "Walking once around from node 3 back to itself gives the cycle length $\\lambda = 5$. All with two pointers and $O(1)$ extra memory.", "nodeColors": [{"id": "3", "color": "green"}, {"id": "4", "color": "green"}, {"id": "5", "color": "green"}, {"id": "6", "color": "green"}, {"id": "7", "color": "green"}], "nodeNotes": [{"id": "3", "text": "start"}], "lines": [11], "vars": [["μ (tail length)", "3"], ["λ (cycle length)", "5"]]}], "caption": "Floyd's cycle detection on a list with a tail of $3$ nodes ($0, 1, 2$) leading into a cycle of $5$ ($3$ to $7$, then back to $3$). Notes under the nodes show where the pointers are."},
        {
          type: 'derivation',
          title: 'Why they meet, and why phase 2 finds the start',
          steps: [
            { tex: '\\text{tail length } \\mu, \\quad \\text{cycle length } \\lambda', why: 'The list is $\\mu$ nodes leading into a cycle of $\\lambda$ nodes (the "rho" shape, $\\rho$). Number nodes by their distance from the head.' },
            { tex: '\\text{after } t \\text{ steps: tortoise at } t, \\ \\text{hare at } 2t', why: 'Measured as distance travelled along the list, wrapping around the cycle.' },
            { tex: '\\text{same node} \\iff t \\ge \\mu \\text{ and } 2t - t = t \\equiv 0 \\pmod{\\lambda}', why: 'Both must be in the cycle, and positions in the cycle agree exactly when the distances differ by a multiple of $\\lambda$.' },
            { tex: 't_{\\text{meet}} = \\text{the first multiple of } \\lambda \\text{ that is } \\ge \\mu \\ (\\text{and} \\ge 1)', why: 'So they always meet, within $\\mu + \\lambda$ steps: $O(n)$ time, $O(1)$ memory.' },
            { tex: '\\text{meeting point is } t_{\\text{meet}} - \\mu \\text{ nodes past the cycle start}', why: 'The tortoise entered the cycle after $\\mu$ steps and has walked $t_{\\text{meet}} - \\mu$ more.' },
            { tex: '(t_{\\text{meet}} - \\mu) + \\mu = t_{\\text{meet}} \\equiv 0 \\pmod{\\lambda}', why: 'Phase 2: after $\\mu$ more steps, a pointer starting at the meeting point is a multiple of $\\lambda$ past the start, so it is **at** the start. A pointer from the head also reaches the start after exactly $\\mu$ steps. So they meet there, and the step count is $\\mu$.' },
          ],
          result: 'Phase 1 detects the cycle; phase 2 (one pointer back to the head, both moving one step) meets at the first node of the cycle after $\\mu$ steps; phase 3 walks once around to get $\\lambda$.',
        },
        {
          type: 'code',
          title: 'floyd.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

struct Node { int id; Node* next; };

// Build a list with a tail of \`mu\` nodes leading into a cycle of \`lambda\` nodes.
std::vector<Node> makeRho(int mu, int lambda) {
    std::vector<Node> pool(mu + lambda);
    for (int i = 0; i < mu + lambda; ++i) pool[i] = {i, i + 1 < mu + lambda ? &pool[i + 1] : &pool[mu]};
    return pool;                    // returned by move: the nodes stay where they are
}

void floyd(Node* head) {
    Node* slow = head;              // tortoise: 1 step per iteration
    Node* fast = head;              // hare: 2 steps per iteration
    int steps = 0;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        ++steps;
        if (slow == fast) break;
    }
    if (!fast || !fast->next) { std::printf("no cycle\\n"); return; }

    Node* p = head;                 // phase 2: one pointer restarts at the head;
    Node* q = slow;                 // both now move 1 step and meet at the cycle start
    int mu = 0;
    while (p != q) { p = p->next; q = q->next; ++mu; }

    int lambda = 1;                 // phase 3: walk once around the cycle
    for (Node* r = p->next; r != p; r = r->next) ++lambda;

    std::printf("met at node %d after %d steps; cycle starts at node %d (mu = %d), length %d\\n",
                slow->id, steps, p->id, mu, lambda);
}

int main() {
    auto a = makeRho(3, 5);
    floyd(&a[0]);
    auto b = makeRho(10, 3);
    floyd(&b[0]);
    auto c = makeRho(0, 6);         // the whole list is one cycle
    floyd(&c[0]);
    std::vector<Node> d(4);         // no cycle: 0 -> 1 -> 2 -> 3 -> null
    for (int i = 0; i < 4; ++i) d[i] = {i, i + 1 < 4 ? &d[i + 1] : nullptr};
    floyd(&d[0]);
}`,
          output: `met at node 5 after 5 steps; cycle starts at node 3 (mu = 3), length 5
met at node 12 after 12 steps; cycle starts at node 10 (mu = 10), length 3
met at node 0 after 6 steps; cycle starts at node 0 (mu = 0), length 6
no cycle`,
          annotations: [
            { lines: '7-11', text: 'Nodes live in one vector, and the last one points back to node `mu`. Returning the vector moves its buffer, so the internal pointers stay valid.' },
            { lines: 17, text: 'Check `fast` and `fast->next` before jumping two: on an acyclic list the hare reaches `nullptr` first.' },
            { lines: '25-28', text: 'Phase 2: restart one pointer at the head; both move one step; they meet at the cycle start after $\\mu$ steps.' },
            { lines: 33, text: 'With $\\mu = 3$, $\\lambda = 5$ they meet after $5$ steps (the first multiple of $5$ that is $\\ge 3$); with $\\mu = 10$, $\\lambda = 3$ after $12$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Beyond linked lists',
          text: 'Any function $f$ on a finite set, iterated from a start value, eventually cycles, and Floyd finds that cycle with $O(1)$ memory. That is how you measure the period of a pseudo-random generator, find a duplicate in an array of $n + 1$ values in $1..n$ (a famous interview problem: treat each value as a "next" index), and how Pollard\'s rho algorithm factors integers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A linked list has a tail of $\\mu = 6$ nodes leading into a cycle of $\\lambda = 4$ nodes. Floyd\'s tortoise (one step per iteration) and hare (two steps) both start at the head. After how many iterations do they first land on the same node?',
      label: 'iterations $=$',
      answer: '8',
      hint: 'They meet at the first step count $t \\ge 1$ with $t \\ge \\mu$ and $t$ a multiple of $\\lambda$.',
      explanation: 'After $t$ iterations the tortoise has walked $t$ nodes and the hare $2t$. They coincide once both are in the cycle ($t \\ge 6$) and the hare is a whole number of laps ahead ($t$ divisible by $4$). The first such $t$ is $8$. Check: the tortoise is at distance $8$, two nodes into the cycle; the hare at distance $16$, which is $16 - 6 = 10 \\equiv 2 \\pmod 4$ nodes into the cycle: the same node. Phase 2 would then take $\\mu = 6$ more steps to find the cycle start.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Why linked lists are usually slower than vectors',
      blocks: [
        {
          type: 'p',
          text: 'Textbooks sell linked lists on $O(1)$ insertion and deletion. In practice, on modern hardware, `std::vector` beats `std::list` for almost every workload, often by a large factor. Three reasons, all of them constants that big-O hides:',
        },
        {
          type: 'list',
          items: [
            '**Pointer chasing.** The address of node $k + 1$ is only known after node $k$ is loaded. Each step can be a cache miss of around $80$ ns, and the hardware prefetcher cannot help because the pattern is not sequential.',
            '**Memory overhead.** A `std::list<int>` node holds $4$ bytes of data and $16$ bytes of pointers, padded to $24$, plus allocator bookkeeping per allocation. That is $6\\times$ or more the memory of a `vector<int>`, so even a perfect traversal moves $6\\times$ more bytes.',
            '**Allocation.** Every insertion calls the allocator and every removal frees, at tens to hundreds of nanoseconds each. A vector allocates rarely (amortized), and not at all after a `reserve`.',
          ],
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 230\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"10\" y=\"18\" font-size=\"13\" font-weight=\"600\">std::vector&lt;int&gt;: one block, read in order</text>\n<rect x=\"20\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"34\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">0</text>\n<rect x=\"50\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"64\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">1</text>\n<rect x=\"80\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"94\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">2</text>\n<rect x=\"110\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"124\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">3</text>\n<rect x=\"140\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"154\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">4</text>\n<rect x=\"170\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"184\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">5</text>\n<rect x=\"200\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"214\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">6</text>\n<rect x=\"230\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"244\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">7</text>\n<rect x=\"260\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"274\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">8</text>\n<rect x=\"290\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"304\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">9</text>\n<rect x=\"320\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"334\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">10</text>\n<rect x=\"350\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"364\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">11</text>\n<rect x=\"380\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"394\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">12</text>\n<rect x=\"410\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"424\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">13</text>\n<rect x=\"440\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"454\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">14</text>\n<rect x=\"470\" y=\"28\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-green s-green\" fill-opacity=\"0.2\" stroke-width=\"1\"/>\n<text x=\"484\" y=\"46\" text-anchor=\"middle\" font-size=\"11\">15</text>\n<path d=\"M20.0,66.0 L490.0,66.0\" class=\"s-green\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M498.0,66.0 L490.0,69.6 L490.0,62.4 Z\" class=\"f-green\"/>\n<text x=\"10\" y=\"102\" font-size=\"13\" font-weight=\"600\">std::list&lt;int&gt; after a while: nodes scattered across the heap</text>\n<rect x=\"20\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"50\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"80\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"110\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"140\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"170\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"200\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"230\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"260\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"290\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"320\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"350\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"380\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"410\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"440\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"470\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/>\n<rect x=\"110\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.25\" stroke-width=\"1.2\"/>\n<text x=\"124\" y=\"168\" text-anchor=\"middle\" font-size=\"11\">0</text>\n<rect x=\"440\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.25\" stroke-width=\"1.2\"/>\n<text x=\"454\" y=\"168\" text-anchor=\"middle\" font-size=\"11\">1</text>\n<rect x=\"230\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.25\" stroke-width=\"1.2\"/>\n<text x=\"244\" y=\"168\" text-anchor=\"middle\" font-size=\"11\">2</text>\n<rect x=\"290\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.25\" stroke-width=\"1.2\"/>\n<text x=\"304\" y=\"168\" text-anchor=\"middle\" font-size=\"11\">3</text>\n<rect x=\"410\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.25\" stroke-width=\"1.2\"/>\n<text x=\"424\" y=\"168\" text-anchor=\"middle\" font-size=\"11\">4</text>\n<rect x=\"350\" y=\"150\" width=\"28\" height=\"26\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.25\" stroke-width=\"1.2\"/>\n<text x=\"364\" y=\"168\" text-anchor=\"middle\" font-size=\"11\">5</text>\n<path d=\"M124.0,150.0 Q289.0,82.4 446.6,147.0\" class=\"s-orange\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M454.0,150.0 L445.2,150.3 L448.0,143.6 Z\" class=\"f-orange\"/>\n<path d=\"M454.0,150.0 Q349.0,96.8 251.1,146.4\" class=\"s-orange\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M244.0,150.0 L249.5,143.2 L252.8,149.6 Z\" class=\"f-orange\"/>\n<path d=\"M244.0,150.0 Q274.0,114.8 298.8,143.9\" class=\"s-orange\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M304.0,150.0 L296.1,146.2 L301.6,141.6 Z\" class=\"f-orange\"/>\n<path d=\"M304.0,150.0 Q364.0,107.6 417.5,145.4\" class=\"s-orange\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M424.0,150.0 L415.4,148.3 L419.5,142.4 Z\" class=\"f-orange\"/>\n<path d=\"M424.0,150.0 Q394.0,114.8 369.2,143.9\" class=\"s-orange\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M364.0,150.0 L366.4,141.6 L371.9,146.2 Z\" class=\"f-orange\"/>\n<text x=\"20\" y=\"200\" font-size=\"12\" class=\"t-gray\">every next pointer can land on a different cache line: a likely miss per element,</text>\n<text x=\"20\" y=\"216\" font-size=\"12\" class=\"t-gray\">and the CPU cannot prefetch an address it has not read yet</text>\n</svg>",
          alt: 'Top: sixteen consecutive green cells read left to right. Bottom: a strip of memory with six orange nodes scattered among empty slots, with curved arrows hopping between them in list order.',
          caption: 'A long-lived list\'s nodes end up wherever the allocator found space. Traversal becomes a random walk through memory.',
          maxWidth: 520,
        },
        {
          type: 'code',
          title: 'list_vs_vector.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <list>
#include <numeric>
#include <random>
#include <vector>

// A tiny LRU cache model: \`ways\` lines of 64 bytes, most recent at the back.
struct Cache {
    std::size_t ways;
    std::vector<long> lines;
    long misses = 0;
    explicit Cache(std::size_t w) : ways(w) {}
    void access(long address) {
        long line = address / 64;
        auto it = std::find(lines.begin(), lines.end(), line);
        if (it != lines.end()) {
            lines.erase(it);                     // hit: refresh its position
        } else {
            ++misses;
            if (lines.size() == ways) lines.erase(lines.begin());   // evict least recent
        }
        lines.push_back(line);
    }
};

struct ListNode { ListNode* prev; ListNode* next; int value; };   // what std::list<int> allocates

int main() {
    const long N = 4096;
    std::printf("list node: %zu bytes for a %zu-byte int\\n", sizeof(ListNode), sizeof(int));

    Cache vec(64);                               // a 4 KB cache, far smaller than the data
    for (long i = 0; i < N; ++i) vec.access(i * 4);                 // vector<int>: 4-byte stride

    // A list whose 24-byte nodes were allocated one after another (a fresh heap):
    Cache fresh(64);
    for (long i = 0; i < N; ++i) fresh.access(i * 24);

    // The same list after a long game session: nodes scattered over the heap.
    std::vector<long> slot(N);
    std::iota(slot.begin(), slot.end(), 0);
    std::mt19937 rng(42);
    for (long i = N - 1; i > 0; --i) std::swap(slot[i], slot[rng() % (i + 1)]);   // Fisher-Yates
    Cache scattered(64);
    for (long i = 0; i < N; ++i) scattered.access(slot[i] * 24);    // follow next pointers

    std::printf("traverse %ld ints: vector %ld misses, list (fresh heap) %ld, list (scattered) %ld\\n",
                N, vec.misses, fresh.misses, scattered.misses);

    std::list<int> real(N, 1);                   // and the real containers agree on the answer
    std::vector<int> flat(N, 1);
    std::printf("sums: list %d, vector %d\\n",
                std::accumulate(real.begin(), real.end(), 0), std::accumulate(flat.begin(), flat.end(), 0));
}`,
          output: `list node: 24 bytes for a 4-byte int
traverse 4096 ints: vector 256 misses, list (fresh heap) 1536, list (scattered) 3989
sums: list 4096, vector 4096`,
          annotations: [
            { lines: 27, text: 'Two $8$-byte pointers and a $4$-byte `int`, padded to a multiple of $8$: $24$ bytes, six times the payload.' },
            { lines: 34, text: 'A vector of `int`s: $16$ per cache line, so $4096 / 16 = 256$ misses.' },
            { lines: 38, text: 'Even a list whose nodes happen to be consecutive misses $6\\times$ as often: $24$-byte nodes, under $3$ per line.' },
            { lines: '41-46', text: 'Model a fragmented heap by placing the nodes in a random order (a Fisher–Yates shuffle with a fixed seed). Now nearly every step misses: $3989$ of $4096$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Stroustrup\'s experiment',
          text: 'Bjarne Stroustrup has shown audiences an experiment: insert $n$ random integers into a sequence, keeping it sorted, then remove them at random positions. Both the vector and the list must first **find** the position by a linear walk, so both are $O(n)$ per operation. The vector, which also shifts elements, still wins by a wide margin at every size he tried, because its walk and its shifts stream through contiguous memory while the list chases pointers. The lesson: memory access patterns can matter more than which operation big-O calls $O(1)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'On a 64-bit system (8-byte pointers, 4-byte `int`, 8-byte alignment for pointers), what is `sizeof(Node)` for `struct Node { int value; Node* next; };`?',
      label: '`sizeof(Node)` $=$',
      unit: 'bytes',
      answer: '16',
      hint: 'The pointer must start at an offset that is a multiple of $8$, and the struct\'s size must be a multiple of its strictest alignment.',
      explanation: '`value` occupies bytes $0$–$3$. `next` needs an 8-byte-aligned offset, so the compiler inserts $4$ bytes of padding and places it at bytes $8$–$15$. Total $16$ bytes, a multiple of $8$, so no tail padding is needed. That is $4$ bytes of payload in a $16$-byte node, before any allocator overhead: a singly linked list of `int`s uses at least $4\\times$ the memory of a `vector<int>`.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'When lists win: stable addresses, splicing and intrusive lists',
      blocks: [
        {
          type: 'p',
          text: 'Linked lists still earn their place when you need what vectors cannot give: elements that **never move** (pointers and iterators to them stay valid no matter what else is inserted or erased), $O(1)$ removal of an element you already hold, and $O(1)$ `splice` of whole ranges between lists. The version game engines actually use is the [[dsa-intrusive-list|intrusive list]].',
        },
        {
          type: 'p',
          text: 'In an intrusive list the `prev` and `next` links live **inside the object itself** instead of in a separately allocated node. The objects stay wherever they already are (typically in a contiguous array or pool), so linking and unlinking never allocates, and an object can remove itself from a list in $O(1)$ without searching. One object can be in several lists at once, with one hook per list: the "alerted enemies" list, the "needs update" list, the "in this sector" list. The Linux kernel\'s `list_head` is the most famous example, and engines use the same pattern for lists of active objects, timers and listeners.',
        },
        {
          type: 'code',
          title: 'intrusive.cpp',
          runnable: true,
          code: `#include <cstddef>
#include <cstdio>
#include <initializer_list>
#include <vector>

// The link lives INSIDE the object: no separate node allocation, and an object
// can unlink itself in O(1) without searching for its node.
struct Hook {
    Hook* prev = this;
    Hook* next = this;
    bool linked() const { return next != this; }
    void unlink() {
        prev->next = next;
        next->prev = prev;
        prev = next = this;
    }
    void insertBefore(Hook* pos) {
        prev = pos->prev;
        next = pos;
        pos->prev->next = this;
        pos->prev = this;
    }
};

struct Enemy {
    int id = 0;
    int hp = 0;
    Hook alertHook;                              // membership in the "alerted" list
};

// From a hook back to the object that contains it (the hook is a known member).
Enemy* owner(Hook* h) {
    return reinterpret_cast<Enemy*>(reinterpret_cast<char*>(h) - offsetof(Enemy, alertHook));
}

void print(Hook& list) {
    std::printf("alerted:");
    for (Hook* h = list.next; h != &list; h = h->next) std::printf(" #%d", owner(h)->id);
    std::printf("\\n");
}

int main() {
    std::vector<Enemy> enemies(6);               // all enemies live in one contiguous array
    for (int i = 0; i < 6; ++i) enemies[i].id = i, enemies[i].hp = 100;

    Hook alerted;                                // sentinel of the intrusive list
    for (int i : {4, 1, 5, 2}) enemies[i].alertHook.insertBefore(&alerted);
    print(alerted);

    enemies[1].alertHook.unlink();               // enemy 1 calms down: O(1), no search
    enemies[5].alertHook.unlink();
    print(alerted);
    std::printf("enemy 5 linked? %s, enemy 4 linked? %s\\n",
                enemies[5].alertHook.linked() ? "yes" : "no",
                enemies[4].alertHook.linked() ? "yes" : "no");
}`,
          output: `alerted: #4 #1 #5 #2
alerted: #4 #2
enemy 5 linked? no, enemy 4 linked? yes`,
          annotations: [
            { lines: '8-23', text: 'A hook is just the two links. An unlinked hook points at itself, so `linked()` is a single comparison, and `unlink()` is safe to call on any linked hook.' },
            { lines: 28, text: 'Membership in a list costs $16$ bytes inside the object and zero allocations.' },
            { lines: '32-34', text: 'Getting from a hook back to its object: subtract the hook\'s byte offset inside `Enemy`. This is the Linux kernel\'s `container_of` trick; libraries like Boost.Intrusive wrap it safely.' },
            { lines: 50, text: 'Enemy 1 removes itself in $O(1)$, without searching the list, because it carries its own links.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Hooks must not move',
          text: 'A linked hook is pointed to by its neighbours. If the object containing it is moved or copied (for example by a `std::vector` that reallocates), the neighbours point at the old address. Here the vector is created at full size and never grows. Production hooks either forbid copying or relink themselves when moved, and the objects usually live in pools with stable addresses.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Which situation is the best fit for a doubly linked list (`std::list` or an intrusive list) rather than a `std::vector`?',
      options: [
        { text: 'Storing $10\\,000$ particles that are updated every frame and removed at random', why: 'The per-frame update is a full traversal, which a contiguous array does far better. Random removal is $O(1)$ in a vector too, with swap-and-pop.' },
        { text: 'A leaderboard read by index (`rank 1, rank 2, …`) and occasionally re-sorted', why: 'Indexing a list is $O(n)$ per access, and sorting a vector is faster too. This is vector territory.' },
        { text: 'Objects that other systems hold raw pointers to, which must join and leave several "active" lists in $O(1)$ without ever moving in memory', correct: true, why: 'Stable addresses plus $O(1)$ unlink of a known element is exactly what lists provide, and intrusive hooks make it allocation-free.' },
        { text: 'A list of $8$ `int`s searched for a value every frame', why: 'Tiny, searched linearly: a small array wins on cache behaviour with no downside.' },
      ],
      explanation: 'Choose a list for its guarantees, not its big-O: elements never move, so pointers into the list stay valid; and an element you hold can be unlinked or spliced in $O(1)$. If you mostly traverse, index or search, a vector (with swap-and-pop for unordered removal) is faster.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'Inserting an element into a `std::list` invalidates iterators and pointers to the other elements already in the list.',
      answer: false,
      explanation: 'Each `std::list` element lives in its own node, and insertion only allocates a new node and rewrites a few neighbouring links. No existing node moves, so every iterator, pointer and reference to existing elements stays valid. Erasing invalidates only iterators to the erased element. This stability, impossible for a reallocating `std::vector`, is one of the few real reasons to choose a list.',
    },
  ],
  takeaways: [
    'A linked list stores each element in a separate node with a pointer to the next; it gives $O(1)$ insertion and removal next to a node you hold, and $O(n)$ for anything that needs a position.',
    'Doubly linked nodes can unlink themselves in $O(1)$; a circular list with a sentinel has no `nullptr` and no special cases. `std::list` is exactly that, with $O(1)$ `splice`.',
    'Reverse in place with `prev`, `curr` and `next`, saving `curr->next` before overwriting it; the invariant "prev heads the reversed part, curr heads the rest" proves it correct.',
    'Floyd\'s tortoise and hare detects a cycle in $O(n)$ time and $O(1)$ memory; restarting one pointer at the head finds the cycle start after $\\mu$ steps.',
    'In practice lists lose to vectors: pointer chasing misses the cache, nodes waste memory on pointers and padding, and every insertion allocates.',
    'Use lists for stable addresses, $O(1)$ unlink of a known element, and splicing. Engines prefer intrusive lists, whose links live inside objects stored in pools.',
  ],
  reading: [
    {
      title: 'Sedgewick & Wayne — Algorithms, 4th ed. (Bags, Queues and Stacks)',
      url: 'https://algs4.cs.princeton.edu/home/',
      source: 'book',
      note: 'Section 1.3 builds linked lists from scratch and uses them to implement stacks and queues, with clear Java code that translates directly.',
    },
    {
      title: 'cppreference — std::list',
      url: 'https://en.cppreference.com/w/cpp/container/list',
      source: 'other',
      note: 'The standard doubly linked list, including `splice`, `merge` and its iterator-invalidation guarantees.',
    },
    {
      title: 'Wikipedia — Cycle detection',
      url: 'https://en.wikipedia.org/wiki/Cycle_detection',
      source: 'wikipedia',
      note: 'Floyd\'s tortoise and hare and Brent\'s faster variant, with the $\\mu$ and $\\lambda$ analysis.',
    },
    {
      title: 'VisuAlgo — Linked List',
      url: 'https://visualgo.net/en',
      source: 'other',
      note: 'Choose "Linked List" to animate insertions, removals and the stack, queue and deque variants.',
    },
  ],
};
