import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-stacks-queues',
  title: 'Stacks, Queues and Ring Buffers',
  summary: 'The stack and queue abstract data types and their array- and list-based implementations: bracket matching, undo and redo, a queue from two stacks, power-of-two ring buffers for input and network history in games, deques, and a first look at monotonic stacks.',
  minutes: 21,
  objectives: [
    'Distinguish an abstract data type from its implementation, and implement stacks and queues on arrays and on linked lists',
    'Solve bracket matching and undo/redo with stacks, tracing the stack contents step by step',
    'Build a queue from two stacks and prove its operations are amortized $O(1)$',
    'Implement a power-of-two ring buffer with free-running head and tail counters, and use one for input history in a game',
    'Explain how `std::deque` is built, and recognise the monotonic-stack pattern for "next greater element" problems',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Two abstract data types: stack and queue',
      blocks: [
        {
          type: 'p',
          text: 'An [[dsa-abstract-data-type|abstract data type]] (ADT) is a contract: a set of operations and the rules they obey, with no promise about how they are implemented. A **data structure** is one concrete way to fulfil the contract. Separating the two is what lets you swap a slow implementation for a fast one without touching the code that uses it.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 230\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"110\" y=\"18\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">Stack (LIFO)</text>\n<rect x=\"70\" y=\"172\" width=\"80\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"110\" y=\"192\" text-anchor=\"middle\" font-size=\"14\">A</text>\n<rect x=\"70\" y=\"138\" width=\"80\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"110\" y=\"158\" text-anchor=\"middle\" font-size=\"14\">B</text>\n<rect x=\"70\" y=\"104\" width=\"80\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"110\" y=\"124\" text-anchor=\"middle\" font-size=\"14\">C</text>\n<rect x=\"70\" y=\"70\" width=\"80\" height=\"30\" rx=\"4\" class=\"f-orange s-orange\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"110\" y=\"90\" text-anchor=\"middle\" font-size=\"14\">D</text>\n<path d=\"M66,62 L66,204 L154,204 L154,62\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"1.5\"/>\n<path d=\"M92.0,28.0 L92.0,54.0\" class=\"s-green\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M92.0,62.0 L88.4,54.0 L95.6,54.0 Z\" class=\"f-green\"/>\n<text x=\"86\" y=\"40\" text-anchor=\"end\" font-size=\"12\" class=\"t-green\">push</text>\n<path d=\"M128.0,62.0 L128.0,36.0\" class=\"s-red\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M128.0,28.0 L131.6,36.0 L124.4,36.0 Z\" class=\"f-red\"/>\n<text x=\"134\" y=\"40\" font-size=\"12\" class=\"t-red\">pop</text>\n<text x=\"110\" y=\"222\" text-anchor=\"middle\" font-size=\"11\" class=\"t-gray\">push and pop both happen at the top</text>\n<text x=\"390\" y=\"18\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\">Queue (FIFO)</text>\n<rect x=\"300\" y=\"90\" width=\"40\" height=\"34\" rx=\"4\" class=\"f-orange s-orange\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"320\" y=\"112\" text-anchor=\"middle\" font-size=\"14\">A</text>\n<rect x=\"344\" y=\"90\" width=\"40\" height=\"34\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"364\" y=\"112\" text-anchor=\"middle\" font-size=\"14\">B</text>\n<rect x=\"388\" y=\"90\" width=\"40\" height=\"34\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"408\" y=\"112\" text-anchor=\"middle\" font-size=\"14\">C</text>\n<rect x=\"432\" y=\"90\" width=\"40\" height=\"34\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.5\"/>\n<text x=\"452\" y=\"112\" text-anchor=\"middle\" font-size=\"14\">D</text>\n<path d=\"M296.0,107.0 L274.0,107.0\" class=\"s-red\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M266.0,107.0 L274.0,103.4 L274.0,110.6 Z\" class=\"f-red\"/>\n<text x=\"262\" y=\"146\" font-size=\"12\" class=\"t-red\">dequeue</text>\n<text x=\"262\" y=\"160\" font-size=\"11\" class=\"t-gray\">(front)</text>\n<path d=\"M510.0,107.0 L490.0,107.0\" class=\"s-green\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M482.0,107.0 L490.0,103.4 L490.0,110.6 Z\" class=\"f-green\"/>\n<text x=\"452\" y=\"146\" font-size=\"12\" class=\"t-green\">enqueue</text>\n<text x=\"452\" y=\"160\" font-size=\"11\" class=\"t-gray\">(back)</text>\n<text x=\"300\" y=\"70\" font-size=\"11\" class=\"t-gray\">in at the back, out at the front</text>\n</svg>",
          alt: 'Left: a stack of boxes A to D with D on top; push and pop arrows both act at the top. Right: a row of boxes A to D; dequeue takes A from the front on the left, enqueue adds at the back on the right.',
          caption: 'A [[dsa-stack|stack]] is last in, first out (LIFO). A [[dsa-queue|queue]] is first in, first out (FIFO).',
          maxWidth: 520,
        },
        {
          type: 'table',
          headers: ['ADT', 'Operations', 'Array-based', 'List-based'],
          rows: [
            ['Stack', '`push(x)`, `pop()`, `top()`, `empty()`', 'a `std::vector` using its back: amortized $O(1)$, contiguous', 'push and pop at the head of a singly linked list: $O(1)$ worst case, one allocation per push'],
            ['Queue', '`enqueue(x)` at the back, `dequeue()` at the front, `front()`', 'a ring buffer (below): $O(1)$, contiguous, fixed or growable capacity', 'singly linked list with head **and** tail pointers: enqueue at the tail, dequeue at the head'],
          ],
        },
        {
          type: 'p',
          text: 'Both implementations meet the contract in $O(1)$ per operation. As in the last lesson, the array-based ones usually win in practice: no allocation per element and contiguous memory. The list-based ones offer a **worst-case** $O(1)$ push with no occasional reallocation spike, and never need a capacity.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A vector is not a queue',
          text: 'Using `v.erase(v.begin())` to dequeue from a `std::vector` shifts every remaining element left: $O(n)$ per dequeue, $O(n^2)$ to drain the queue. Use `std::queue` (built on `std::deque`), a ring buffer, or the two-stack trick below.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'order',
      prompt: 'Starting from an empty stack, run: push 1, push 2, pop, push 3, push 4, pop, pop, push 5, pop, pop. Put the popped values in the order they come out.',
      lines: ['$2$', '$4$', '$3$', '$5$', '$1$'],
      explanation: 'Track the stack (top on the right): push 1, 2 gives $[1, 2]$, pop returns $2$. Push 3, 4 gives $[1, 3, 4]$; the two pops return $4$ then $3$. Push 5 gives $[1, 5]$; the last two pops return $5$ and finally $1$, the first value pushed and the last to leave. A queue would have returned $1, 2, 3, 4, 5$.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Stacks at work: brackets and undo',
      blocks: [
        {
          type: 'p',
          text: 'A stack is the right tool whenever things must be **closed in reverse order of opening**. Nested brackets in source code, tags in XML, function calls (the call stack itself) and undo history all have that shape. Here is the classic interview problem: is every bracket closed by the matching kind, in the right order?',
        },
        {"type": "algo", "view": "array", "code": "for (char c : s) {\n    if (isOpener(c)) {\n        stack.push_back(c);\n    } else {\n        if (stack.empty() ||\n            stack.back() != match(c))\n            return false;\n        stack.pop_back();\n    }\n}\nreturn stack.empty();", "interval": 1000, "frames": [{"note": "Scan left to right with an empty stack. Openers are pushed; each closer must match the opener on top.", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "pointers": [{"index": 0, "label": "i"}], "lines": [1], "vars": [["stack (top last)", "empty"], ["depth", "0"]]}, {"note": "`{` opens: push it.", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "marks": [{"index": 0, "color": "orange"}], "pointers": [{"index": 0, "label": "i"}], "lines": [2, 3], "vars": [["stack (top last)", "{"], ["depth", "1"]]}, {"note": "`[` opens: push it.", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "i"}], "lines": [2, 3], "vars": [["stack (top last)", "{ ["], ["depth", "2"]]}, {"note": "`(` opens: push it.", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "i"}], "lines": [2, 3], "vars": [["stack (top last)", "{ [ ("], ["depth", "3"]]}, {"note": "`)` closes: the top is `(`, a match, so pop it. Positions 2 and 3 pair up (green).", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}], "pointers": [{"index": 3, "label": "i"}, {"index": 2, "label": "match", "color": "green"}], "lines": [5, 6, 8], "vars": [["stack (top last)", "{ ["], ["depth", "2"]]}, {"note": "`(` opens: push it.", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "i"}], "lines": [2, 3], "vars": [["stack (top last)", "{ [ ("], ["depth", "3"]]}, {"note": "`)` closes: the top is `(`, a match, so pop it. Positions 4 and 5 pair up (green).", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "marks": [{"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}], "pointers": [{"index": 5, "label": "i"}, {"index": 4, "label": "match", "color": "green"}], "lines": [5, 6, 8], "vars": [["stack (top last)", "{ ["], ["depth", "2"]]}, {"note": "`]` closes: the top is `[`, a match, so pop it. Positions 1 and 6 pair up (green).", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "marks": [{"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 0, "color": "blue"}], "pointers": [{"index": 6, "label": "i"}, {"index": 1, "label": "match", "color": "green"}], "lines": [5, 6, 8], "vars": [["stack (top last)", "{"], ["depth", "1"]]}, {"note": "`}` closes: the top is `{`, a match, so pop it. Positions 0 and 7 pair up (green).", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}], "pointers": [{"index": 7, "label": "i"}, {"index": 0, "label": "match", "color": "green"}], "lines": [5, 6, 8], "vars": [["stack (top last)", "empty"], ["depth", "0"]]}, {"note": "End of input with an empty stack: balanced. The stack was never deeper than $3$, the nesting depth.", "array": ["{", "[", "(", ")", "(", ")", "]", "}"], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "green"}, {"index": 7, "color": "green"}], "pointers": [{"index": 8, "label": "end"}], "lines": [11], "vars": [["stack (top last)", "empty"], ["depth", "0"]]}], "caption": "Checking `{[()()]}`. Blue: openers still waiting on the stack. Orange: the bracket just pushed. Green: matched pairs. Try it mentally on `([)]`: the `)` meets `[` on top and the check fails."},
        {
          type: 'code',
          title: 'brackets.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string_view>
#include <vector>

// Returns true if every bracket is closed by the matching kind, in the right order.
bool balanced(std::string_view s, int& maxDepth) {
    std::vector<char> stack;                    // a vector used as a stack: push/pop at the back
    maxDepth = 0;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push_back(c);
            if (int(stack.size()) > maxDepth) maxDepth = int(stack.size());
        } else if (c == ')' || c == ']' || c == '}') {
            char want = c == ')' ? '(' : c == ']' ? '[' : '{';
            if (stack.empty() || stack.back() != want) return false;   // wrong or missing opener
            stack.pop_back();
        }                                       // any other character is ignored
    }
    return stack.empty();                       // leftover openers were never closed
}

int main() {
    for (std::string_view s : {"{[()()]}", "if (a[i] > b) { f(x); }", "([)]", "((()", "())", "{[]}([]{})"}) {
        int depth = 0;
        bool ok = balanced(s, depth);
        std::printf("%-26.*s %-12s max depth %d\\n", int(s.size()), s.data(), ok ? "balanced" : "NOT balanced", depth);
    }
}`,
          output: `{[()()]}                   balanced     max depth 3
if (a[i] > b) { f(x); }    balanced     max depth 2
([)]                       NOT balanced max depth 2
((()                       NOT balanced max depth 3
())                        NOT balanced max depth 1
{[]}([]{})                 balanced     max depth 2`,
          annotations: [
            { lines: 7, text: 'A `std::vector<char>` used only at its back is a perfectly good stack.' },
            { lines: 15, text: 'Two ways to fail on a closer: nothing is open (`())`), or the innermost open bracket is the wrong kind (`([)]`).' },
            { lines: 19, text: 'The third way to fail: input ends with brackets still open (`((()`).' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a stack is exactly right',
          text: '**Invariant:** after reading a prefix of the input, the stack holds exactly the brackets opened in that prefix and not yet closed, innermost on top. A closer is legal only if it matches the innermost open bracket, which is precisely the top. The string is balanced exactly when no closer fails and the final stack is empty.',
        },
        {
          type: 'heading',
          text: 'Undo and redo: two stacks',
        },
        {
          type: 'p',
          text: 'Every editor, including the level editors you will build tools for, keeps its history as two stacks. Doing an action pushes it on the **undo** stack. Undo pops it, reverts it and pushes it on the **redo** stack. Redo does the reverse. A brand-new action clears the redo stack, because the "future" it described no longer exists.',
        },
        {
          type: 'code',
          title: 'undo_redo.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string>
#include <vector>

// A level editor's history: every action can be undone and redone.
struct PlaceTile { int x, y; char before, after; };

struct Editor {
    std::vector<std::string> grid{"....", "....", "...."};
    std::vector<PlaceTile> undoStack, redoStack;

    void apply(const PlaceTile& a, bool forward) { grid[a.y][a.x] = forward ? a.after : a.before; }

    void place(int x, int y, char tile) {
        PlaceTile a{x, y, grid[y][x], tile};
        apply(a, true);
        undoStack.push_back(a);
        redoStack.clear();                      // a new action makes the old future invalid
    }
    void undo() {
        if (undoStack.empty()) return;
        PlaceTile a = undoStack.back();
        undoStack.pop_back();
        apply(a, false);
        redoStack.push_back(a);
    }
    void redo() {
        if (redoStack.empty()) return;
        PlaceTile a = redoStack.back();
        redoStack.pop_back();
        apply(a, true);
        undoStack.push_back(a);
    }
    void show(const char* label) const {
        std::printf("%-16s %s|%s|%s   undo %zu, redo %zu\\n", label, grid[0].c_str(), grid[1].c_str(),
                    grid[2].c_str(), undoStack.size(), redoStack.size());
    }
};

int main() {
    Editor e;
    e.place(0, 0, '#'); e.place(1, 0, '#'); e.place(2, 1, 'D');
    e.show("3 placements:");
    e.undo(); e.undo();
    e.show("undo twice:");
    e.redo();
    e.show("redo once:");
    e.place(3, 2, 'T');
    e.show("new placement:");
    e.redo();                                   // nothing to redo any more
    e.show("redo (no-op):");
}`,
          output: `3 placements:    ##..|..D.|....   undo 3, redo 0
undo twice:      #...|....|....   undo 1, redo 2
redo once:       ##..|....|....   undo 2, redo 1
new placement:   ##..|....|...T   undo 3, redo 0
redo (no-op):    ##..|....|...T   undo 3, redo 0`,
          annotations: [
            { lines: 6, text: 'Each action stores enough to apply it **and** to revert it: the tile before and after. This is the Command pattern.' },
            { lines: 18, text: 'The rule that keeps history linear: a new action discards the redo stack.' },
            { lines: '20-26', text: 'Undo moves the most recent action from one stack to the other, reverting it on the way.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'Run the bracket checker on `{[()]([{}])}`. What is the maximum number of brackets on the stack at any moment?',
      label: 'max depth $=$',
      answer: '4',
      hint: 'Track the stack: push on every opener, pop on every closer.',
      explanation: 'Reading left to right: `{` `[` `(` gives depth $3$; `)` and `]` bring it back to $1$; then `(` `[` `{` push again on top of the outer `{`, reaching depth $4$ (`{ ( [ {`). The remaining closers empty the stack, so the string is balanced. The maximum stack depth equals the deepest nesting level, $4$, so the checker needs $O(\\text{depth})$ extra memory, at most $O(n)$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'A queue from two stacks (and why it is amortized O(1))',
      blocks: [
        {
          type: 'p',
          text: 'A favorite interview puzzle, and a neat use of the banker\'s method: implement a FIFO queue using only LIFO stacks. Keep an **in** stack and an **out** stack. Enqueue pushes onto `in`. Dequeue pops from `out`; if `out` is empty, first move everything from `in` to `out`, which reverses it, so the oldest element ends up on top.',
        },
        {
          type: 'code',
          title: 'two_stack_queue.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <queue>
#include <stack>
#include <vector>

// A FIFO queue built from two LIFO stacks.
template <class T>
class TwoStackQueue {
    std::vector<T> in_, out_;                   // push into in_, pop from out_
public:
    long moves = 0;
    void push(const T& x) { in_.push_back(x); }
    T pop() {                                   // precondition: not empty
        if (out_.empty()) {                     // refill: reverse in_ into out_
            while (!in_.empty()) {
                out_.push_back(in_.back());
                in_.pop_back();
                ++moves;
            }
        }
        T x = out_.back();
        out_.pop_back();
        return x;
    }
    bool empty() const { return in_.empty() && out_.empty(); }
};

int main() {
    TwoStackQueue<int> q;
    for (int i = 1; i <= 5; ++i) q.push(i);
    std::printf("pop:");
    for (int k = 0; k < 2; ++k) std::printf(" %d", q.pop());
    q.push(6);
    q.push(7);
    while (!q.empty()) std::printf(" %d", q.pop());
    std::printf("   (first in, first out; %ld element moves)\\n", q.moves);

    TwoStackQueue<int> big;                     // amortized check: n pushes and n pops
    const int n = 100000;
    for (int i = 0; i < n; ++i) { big.push(i); if (i % 3 == 2) big.pop(); }
    while (!big.empty()) big.pop();
    std::printf("n = %d: %ld moves, %.2f per element\\n", n, big.moves, double(big.moves) / n);

    // The standard adapters: std::stack and std::queue (both on std::deque by default).
    std::stack<int> s;
    std::queue<int> fifo;
    for (int i = 1; i <= 3; ++i) { s.push(i); fifo.push(i); }
    std::printf("std::stack top %d, std::queue front %d back %d\\n", s.top(), fifo.front(), fifo.back());
}`,
          output: `pop: 1 2 3 4 5 6 7   (first in, first out; 7 element moves)
n = 100000: 100000 moves, 1.00 per element
std::stack top 3, std::queue front 1 back 3`,
          annotations: [
            { lines: '14-20', text: 'Refill only when `out` is empty. Moving everything reverses the order, so the oldest element lands on top of `out`.' },
            { lines: 32, text: 'The first pop moves all $5$ elements; the second is a plain pop.' },
            { lines: '33-35', text: '$6$ and $7$ wait in `in` until `out` runs dry after $5$, then move in one batch.' },
            { lines: '45-48', text: 'In real code, use the standard adapters. Both sit on a `std::deque` by default.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Banker\'s method: each operation is amortized $O(1)$',
          steps: [
            { tex: '\\hat{c}(\\texttt{enqueue}) = 3, \\qquad \\hat{c}(\\texttt{dequeue}) = 1', why: 'Charges. Cost model: one unit per stack push or pop.' },
            { tex: '\\text{invariant: every element in } \\texttt{in} \\text{ holds } 2 \\text{ credits}', why: 'An enqueue spends $1$ on its push and banks $2$ on the element.' },
            { tex: '\\text{moving an element: } 1 \\text{ pop from } \\texttt{in} + 1 \\text{ push onto } \\texttt{out} = 2', why: 'Exactly the two credits the element carries. So a refill of any size is prepaid.' },
            { tex: '\\text{dequeue pays } 1 \\text{ for its own pop from } \\texttt{out}', why: 'Elements in `out` need no credit: each will be popped once, paid by the dequeue that pops it.' },
            { tex: '\\sum \\text{actual} \\le 3E + D', why: 'Credit never goes negative, so $E$ enqueues and $D$ dequeues cost at most $3E + D$ in total.' },
          ],
          result: 'Each element is moved from `in` to `out` at most once in its life, so any sequence of operations runs in $O(1)$ amortized time each, though a single dequeue can cost $\\Theta(n)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'In the two-stack queue, every `dequeue` runs in $O(1)$ time in the worst case.',
      answer: false,
      explanation: 'A dequeue that finds `out` empty must first move every element from `in`, which is $\\Theta(n)$ if $n$ elements are waiting. The $O(1)$ bound is **amortized**: each element is moved at most once, so the total over any sequence is linear. If a hard per-operation guarantee matters (say, inside a frame-time budget), use a ring buffer or a linked list instead.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Using the two-stack queue (refill `out` from `in` only when `out` is empty), run: enqueue $1, 2, 3, 4, 5, 6$; dequeue; enqueue $7, 8, 9$; dequeue. How many elements are moved from `in` to `out` in total?',
      label: 'moves $=$',
      answer: '6',
      hint: 'When the second dequeue runs, is `out` empty?',
      explanation: 'The first dequeue finds `out` empty and moves all $6$ elements (now `out` holds $6, 5, 4, 3, 2, 1$ with $1$ on top), then pops $1$. Enqueuing $7, 8, 9$ pushes them onto `in`. The second dequeue finds `out` non-empty ($2, \\dots, 6$ remain), so it moves nothing and pops $2$. Total: $6$ moves. Elements $7, 8, 9$ will move only once `out` is exhausted, which is exactly what keeps FIFO order.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Ring buffers: a queue in a fixed array',
      blocks: [
        {
          type: 'p',
          text: 'A [[dsa-ring-buffer|ring buffer]] (circular buffer) stores a queue in a fixed array and lets the queue **wrap around**: elements are written at the tail, read at the head, and when an index runs off the end it continues at slot $0$. Nothing ever moves, nothing is allocated after construction, and every operation is $O(1)$ in the worst case. Audio streams, logging, network packets, inter-thread message queues and game input history all run on ring buffers.',
        },
        {"type": "algo", "view": "array", "code": "bool push(const T& x) {\n    if (tail - head == N) return false;\n    buf[tail & (N - 1)] = x;\n    ++tail;\n    return true;\n}\nbool pop(T& out) {\n    if (tail == head) return false;\n    out = buf[head & (N - 1)];\n    ++head;\n    return true;\n}", "interval": 900, "frames": [{"note": "An empty ring of $8$ slots: `head == tail`. Live elements will sit between `head` and `tail`, wrapping past the end.", "array": ["", "", "", "", "", "", "", ""], "marks": [], "dim": [0, 1, 2, 3, 4, 5, 6, 7], "pointers": [{"index": 0, "label": "head", "color": "purple"}, {"index": 0, "label": "tail", "color": "orange"}], "lines": [8], "vars": [["head (pops)", "0"], ["tail (pushes)", "0"], ["size = tail − head", "0"]]}, {"note": "push(10) writes slot `0 & 7` $= 0$.", "array": ["10", "", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "orange"}], "dim": [1, 2, 3, 4, 5, 6, 7], "pointers": [{"index": 0, "label": "head", "color": "purple"}, {"index": 1, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "0"], ["tail (pushes)", "1"], ["size = tail − head", "1"]]}, {"note": "push(20) writes slot `1 & 7` $= 1$.", "array": ["10", "20", "", "", "", "", "", ""], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "orange"}], "dim": [2, 3, 4, 5, 6, 7], "pointers": [{"index": 0, "label": "head", "color": "purple"}, {"index": 2, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "0"], ["tail (pushes)", "2"], ["size = tail − head", "2"]]}, {"note": "push(30) writes slot `2 & 7` $= 2$.", "array": ["10", "20", "30", "", "", "", "", ""], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "orange"}], "dim": [3, 4, 5, 6, 7], "pointers": [{"index": 0, "label": "head", "color": "purple"}, {"index": 3, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "0"], ["tail (pushes)", "3"], ["size = tail − head", "3"]]}, {"note": "push(40) writes slot `3 & 7` $= 3$.", "array": ["10", "20", "30", "40", "", "", "", ""], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "orange"}], "dim": [4, 5, 6, 7], "pointers": [{"index": 0, "label": "head", "color": "purple"}, {"index": 4, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "0"], ["tail (pushes)", "4"], ["size = tail − head", "4"]]}, {"note": "push(50) writes slot `4 & 7` $= 4$.", "array": ["10", "20", "30", "40", "50", "", "", ""], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "orange"}], "dim": [5, 6, 7], "pointers": [{"index": 0, "label": "head", "color": "purple"}, {"index": 5, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "0"], ["tail (pushes)", "5"], ["size = tail − head", "5"]]}, {"note": "pop() reads 10 from slot $0$ and advances `head`. The old value stays in memory (faded) until overwritten.", "array": ["10", "20", "30", "40", "50", "", "", ""], "marks": [{"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 0, "color": "red"}], "dim": [0, 5, 6, 7], "pointers": [{"index": 1, "label": "head", "color": "purple"}, {"index": 5, "label": "tail", "color": "orange"}], "lines": [9, 10], "vars": [["head (pops)", "1"], ["tail (pushes)", "5"], ["size = tail − head", "4"]]}, {"note": "pop() reads 20 from slot $1$ and advances `head`. The old value stays in memory (faded) until overwritten.", "array": ["10", "20", "30", "40", "50", "", "", ""], "marks": [{"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 1, "color": "red"}], "dim": [0, 1, 5, 6, 7], "pointers": [{"index": 2, "label": "head", "color": "purple"}, {"index": 5, "label": "tail", "color": "orange"}], "lines": [9, 10], "vars": [["head (pops)", "2"], ["tail (pushes)", "5"], ["size = tail − head", "3"]]}, {"note": "pop() reads 30 from slot $2$ and advances `head`. The old value stays in memory (faded) until overwritten.", "array": ["10", "20", "30", "40", "50", "", "", ""], "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 2, "color": "red"}], "dim": [0, 1, 2, 5, 6, 7], "pointers": [{"index": 3, "label": "head", "color": "purple"}, {"index": 5, "label": "tail", "color": "orange"}], "lines": [9, 10], "vars": [["head (pops)", "3"], ["tail (pushes)", "5"], ["size = tail − head", "2"]]}, {"note": "push(60) writes slot `5 & 7` $= 5$.", "array": ["10", "20", "30", "40", "50", "60", "", ""], "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "orange"}], "dim": [0, 1, 2, 6, 7], "pointers": [{"index": 3, "label": "head", "color": "purple"}, {"index": 6, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "3"], ["tail (pushes)", "6"], ["size = tail − head", "3"]]}, {"note": "push(70) writes slot `6 & 7` $= 6$.", "array": ["10", "20", "30", "40", "50", "60", "70", ""], "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "orange"}], "dim": [0, 1, 2, 7], "pointers": [{"index": 3, "label": "head", "color": "purple"}, {"index": 7, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "3"], ["tail (pushes)", "7"], ["size = tail − head", "4"]]}, {"note": "push(80) writes slot `7 & 7` $= 7$.", "array": ["10", "20", "30", "40", "50", "60", "70", "80"], "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "orange"}], "dim": [0, 1, 2], "pointers": [{"index": 3, "label": "head", "color": "purple"}, {"index": 0, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "3"], ["tail (pushes)", "8"], ["size = tail − head", "5"]]}, {"note": "push(90) writes slot `8 & 7` $= 0$. The index wrapped: $8 \\,\\&\\, 7 = 0$.", "array": ["90", "20", "30", "40", "50", "60", "70", "80"], "marks": [{"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}, {"index": 0, "color": "orange"}], "dim": [1, 2], "pointers": [{"index": 3, "label": "head", "color": "purple"}, {"index": 1, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "3"], ["tail (pushes)", "9"], ["size = tail − head", "6"]]}, {"note": "push(100) writes slot `9 & 7` $= 1$.", "array": ["90", "100", "30", "40", "50", "60", "70", "80"], "marks": [{"index": 0, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}, {"index": 1, "color": "orange"}], "dim": [2], "pointers": [{"index": 3, "label": "head", "color": "purple"}, {"index": 2, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "3"], ["tail (pushes)", "10"], ["size = tail − head", "7"]]}, {"note": "push(110) writes slot `10 & 7` $= 2$.", "array": ["90", "100", "110", "40", "50", "60", "70", "80"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}, {"index": 2, "color": "orange"}], "dim": [], "pointers": [{"index": 3, "label": "head", "color": "purple"}, {"index": 3, "label": "tail", "color": "orange"}], "lines": [3, 4], "vars": [["head (pops)", "3"], ["tail (pushes)", "11"], ["size = tail − head", "8"]]}, {"note": "push(120): `tail − head` $= 8 = N$, the ring is full, so the push is **rejected**.", "array": ["90", "100", "110", "40", "50", "60", "70", "80"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 3, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}], "dim": [], "pointers": [{"index": 3, "label": "head", "color": "purple"}, {"index": 3, "label": "tail", "color": "orange"}], "lines": [2], "vars": [["head (pops)", "3"], ["tail (pushes)", "11"], ["size = tail − head", "8"]]}, {"note": "pop() reads 40 from slot $3$ and advances `head`. The old value stays in memory (faded) until overwritten.", "array": ["90", "100", "110", "40", "50", "60", "70", "80"], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 4, "color": "blue"}, {"index": 5, "color": "blue"}, {"index": 6, "color": "blue"}, {"index": 7, "color": "blue"}, {"index": 3, "color": "red"}], "dim": [3], "pointers": [{"index": 4, "label": "head", "color": "purple"}, {"index": 3, "label": "tail", "color": "orange"}], "lines": [9, 10], "vars": [["head (pops)", "4"], ["tail (pushes)", "11"], ["size = tail − head", "7"]]}], "caption": "A ring buffer with $N = 8$. `head` and `tail` are counters that only ever increase; the slot is the counter `& 7`. Blue cells are live (between head and tail); faded cells are free. No element ever moves."},
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 250\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M112.9,35.4 A97,97 0 0 1 187.1,35.4 L171.8,72.3 A57,57 0 0 0 128.2,72.3 Z\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"150.0\" y=\"52.0\" text-anchor=\"middle\" font-size=\"12\">90</text>\n<text x=\"150.0\" y=\"20.0\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">0</text>\n<path d=\"M187.1,35.4 A97,97 0 0 1 239.6,87.9 L202.7,103.2 A57,57 0 0 0 171.8,72.3 Z\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.35\" stroke-width=\"1.3\"/>\n<text x=\"204.4\" y=\"74.6\" text-anchor=\"middle\" font-size=\"12\" fill-opacity=\"0.4\">20</text>\n<text x=\"227.1\" y=\"51.9\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">1</text>\n<path d=\"M239.6,87.9 A97,97 0 0 1 239.6,162.1 L202.7,146.8 A57,57 0 0 0 202.7,103.2 Z\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.35\" stroke-width=\"1.3\"/>\n<text x=\"227.0\" y=\"129.0\" text-anchor=\"middle\" font-size=\"12\" fill-opacity=\"0.4\">30</text>\n<text x=\"259.0\" y=\"129.0\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">2</text>\n<path d=\"M239.6,162.1 A97,97 0 0 1 187.1,214.6 L171.8,177.7 A57,57 0 0 0 202.7,146.8 Z\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"204.4\" y=\"183.4\" text-anchor=\"middle\" font-size=\"12\">40</text>\n<text x=\"227.1\" y=\"206.1\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">3</text>\n<path d=\"M187.1,214.6 A97,97 0 0 1 112.9,214.6 L128.2,177.7 A57,57 0 0 0 171.8,177.7 Z\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"150.0\" y=\"206.0\" text-anchor=\"middle\" font-size=\"12\">50</text>\n<text x=\"150.0\" y=\"238.0\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">4</text>\n<path d=\"M112.9,214.6 A97,97 0 0 1 60.4,162.1 L97.3,146.8 A57,57 0 0 0 128.2,177.7 Z\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"95.6\" y=\"183.4\" text-anchor=\"middle\" font-size=\"12\">60</text>\n<text x=\"72.9\" y=\"206.1\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">5</text>\n<path d=\"M60.4,162.1 A97,97 0 0 1 60.4,87.9 L97.3,103.2 A57,57 0 0 0 97.3,146.8 Z\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"73.0\" y=\"129.0\" text-anchor=\"middle\" font-size=\"12\">70</text>\n<text x=\"41.0\" y=\"129.0\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">6</text>\n<path d=\"M60.4,87.9 A97,97 0 0 1 112.9,35.4 L128.2,72.3 A57,57 0 0 0 97.3,103.2 Z\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"95.6\" y=\"74.6\" text-anchor=\"middle\" font-size=\"12\">80</text>\n<text x=\"72.9\" y=\"51.9\" text-anchor=\"middle\" font-size=\"10\" class=\"t-gray\">7</text>\n<path d=\"M166.3,141.3 L181.8,156.8\" class=\"s-purple\" stroke-width=\"2\" fill=\"none\"/><path d=\"M187.5,162.5 L179.3,159.4 L184.4,154.3 Z\" class=\"f-purple\"/><text x=\"159.2\" y=\"138.2\" text-anchor=\"middle\" font-size=\"11\" class=\"t-purple\">head</text>\n<path d=\"M166.3,108.7 L181.8,93.2\" class=\"s-orange\" stroke-width=\"2\" fill=\"none\"/><path d=\"M187.5,87.5 L184.4,95.7 L179.3,90.6 Z\" class=\"f-orange\"/><text x=\"159.2\" y=\"119.8\" text-anchor=\"middle\" font-size=\"11\" class=\"t-orange\">tail</text>\n<text x=\"280\" y=\"70\" font-size=\"12\">The same 8 slots, bent into a circle.</text>\n<text x=\"280\" y=\"92\" font-size=\"12\" class=\"t-purple\">head = 3: next pop reads slot 3</text>\n<text x=\"280\" y=\"112\" font-size=\"12\" class=\"t-orange\">tail = 9: next push writes</text>\n<text x=\"280\" y=\"128\" font-size=\"12\" class=\"t-orange\">slot 9 &amp; 7 = 1</text>\n<text x=\"280\" y=\"150\" font-size=\"12\" class=\"t-blue\">size = 9 − 3 = 6 live elements</text>\n<text x=\"280\" y=\"176\" font-size=\"11\" class=\"t-gray\">Live elements run clockwise from</text>\n<text x=\"280\" y=\"190\" font-size=\"11\" class=\"t-gray\">head to tail, across the 7 → 0 seam.</text>\n</svg>",
          alt: 'Eight slots arranged in a circle numbered 0 to 7. Slots 3 to 7 and 0 are blue and hold 40, 50, 60, 70, 80, 90; slots 1 and 2 are faded. A purple head arrow points at slot 3 and an orange tail arrow at slot 1.',
          caption: 'The picture behind the name: the array\'s end is glued to its start.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: 'Two design choices make the classic version fast and simple. First, keep `head` and `tail` as **free-running counters** of pops and pushes that never wrap themselves; the slot is the counter reduced modulo $N$. Then `size = tail − head` with no special cases, and "full" ($N$) is distinguishable from "empty" ($0$), the classic ring-buffer ambiguity when you store wrapped indices. Second, make $N$ a **power of two**, so that reducing modulo $N$ is a single AND with the [[dm-bit-mask|bit mask]] $N - 1$.',
        },
        {
          type: 'theorem',
          name: 'Power-of-two masking',
          tex: 'N = 2^k \\implies i \\bmod N = i \\;\\&\\; (N - 1)',
          text: '$N - 1$ is $k$ one-bits, $0\\ldots0\\underbrace{1\\ldots1}_{k}$, so the AND keeps the low $k$ bits of $i$, which is exactly the remainder mod $2^k$. Example with $N = 8$: $13 = 1101_2$, and $1101_2 \\;\\&\\; 0111_2 = 0101_2 = 5 = 13 \\bmod 8$. An AND takes one cycle; integer division can take tens.',
        },
        {
          type: 'code',
          title: 'ring_buffer.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdint>
#include <cstdio>

// Fixed-capacity FIFO queue in a circular array. N must be a power of two.
template <class T, std::size_t N>
class RingBuffer {
    static_assert(N > 0 && (N & (N - 1)) == 0, "N must be a power of two");
    std::array<T, N> buf_{};
    std::uint32_t head_ = 0;    // total pops so far  (free-running counters:
    std::uint32_t tail_ = 0;    // total pushes so far  they only ever increase)

public:
    std::size_t size() const { return tail_ - head_; }    // correct even after wrap-around
    bool empty() const { return head_ == tail_; }
    bool full() const { return size() == N; }

    bool push(const T& x) {
        if (full()) return false;
        buf_[tail_ & (N - 1)] = x;              // & (N-1) == % N for a power of two
        ++tail_;
        return true;
    }
    bool pop(T& out) {
        if (empty()) return false;
        out = buf_[head_ & (N - 1)];
        ++head_;
        return true;
    }
    std::uint32_t head() const { return head_; }
    std::uint32_t tail() const { return tail_; }
};

int main() {
    RingBuffer<int, 4> q;
    int x = 0;
    for (int v : {10, 20, 30}) q.push(v);
    q.pop(x); std::printf("pop %d\\n", x);
    q.pop(x); std::printf("pop %d\\n", x);
    for (int v : {40, 50, 60}) q.push(v);      // 50 and 60 wrap around to slots 0 and 1
    std::printf("push 70 when full: %s\\n", q.push(70) ? "ok" : "rejected");
    std::printf("head %u (slot %u), tail %u (slot %u), size %zu\\n",
                q.head(), q.head() & 3u, q.tail(), q.tail() & 3u, q.size());
    std::printf("drain:");
    while (q.pop(x)) std::printf(" %d", x);
    std::printf("\\n");

    // Free-running unsigned counters survive overflow: tail - head is still right.
    std::uint32_t head = 4294967294u, tail = 3u;  // tail has wrapped past 2^32
    std::printf("size across the 2^32 wrap: %u\\n", tail - head);
}`,
          output: `pop 10
pop 20
push 70 when full: rejected
head 2 (slot 2), tail 6 (slot 2), size 4
drain: 30 40 50 60
size across the 2^32 wrap: 5`,
          annotations: [
            { lines: 8, text: 'A power of two has exactly one bit set, so `N & (N - 1)` is $0$. A compile-time check that the mask trick is valid.' },
            { lines: '10-11', text: 'Counters, not indices. Unsigned overflow is well defined in C++ (it wraps modulo $2^{32}$), so they can run forever.' },
            { lines: 14, text: 'Unsigned subtraction is modulo $2^{32}$ too, so `tail − head` stays correct even after `tail` wraps past zero (last output line).' },
            { lines: 20, text: 'The mask turns a counter into a slot. With $N = 4$, pushes $5$ and $6$ (the values $50$, $60$) land in slots $0$ and $1$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Bounded queue or history?',
          text: 'This ring **rejects** pushes when full, which suits a work queue where no item may be lost. A **history** buffer instead **overwrites** the oldest entry when full (just advance `head` too), keeping only the most recent $N$ items, which is exactly what the next card needs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'A ring buffer has capacity $N = 16$ and uses free-running counters. Right now `head = 37` and `tail = 45`. Which slot (array index) will the next `push` write to?',
      label: 'slot $=$',
      answer: '13',
      hint: 'The slot is `tail & (N - 1)`.',
      explanation: 'The next push writes at `tail & 15` $= 45 \\bmod 16 = 13$ ($45 = 2 \\cdot 16 + 13$; in binary $101101_2 \\;\\&\\; 001111_2 = 001101_2 = 13$). The buffer currently holds `tail − head` $= 45 - 37 = 8$ elements, in slots $37 \\bmod 16 = 5$ through $12$, so it is half full and the push succeeds.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'This ring buffer\'s capacity `N` is a power of two. Pushes into it corrupt memory. Tap the line with the bug.',
      lines: [
        '`bool push(const T& x) {`',
        '`    if (tail - head == N) return false;`',
        '`    buf[tail & N] = x;`',
        '`    ++tail;`',
        '`    return true;`',
        '`}`',
      ],
      errorLines: [3],
      explanation: 'The mask must be `N - 1`, not `N`. For $N = 8$, `tail & 8` is either $0$ or $8$: every push lands in slot $0$ or in slot $8$, which is **one past the end** of an 8-element array, an out-of-bounds write. The correct line is `buf[tail & (N - 1)] = x;`, which keeps the low $3$ bits and gives slots $0$–$7$. Line 2 is right: with free-running counters, `tail − head == N` means full.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Ring buffers in games: input and network history',
      blocks: [
        {
          type: 'p',
          text: 'Games constantly need "the last $N$ frames of something": the last second of controller input, the last few hundred milliseconds of the world state, recent frame times for a smoothed FPS counter. A history ring buffer of fixed size is perfect: recording is one write per frame, nothing is ever allocated, and "$k$ frames ago" is a subtraction and a mask.',
        },
        {
          type: 'p',
          text: 'Fighting games read special moves out of exactly such a buffer. A "fireball" is a quarter-circle forward plus punch: down, down-forward, forward (numpad notation $2, 3, 6$) within a short window, then the punch button. On the punch frame, the game scans the input history backwards for $6$, then $3$, then $2$.',
        },
        {
          type: 'code',
          title: 'input_buffer.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdio>
#include <string_view>

// Last 16 frames of input, newest overwriting oldest: a history ring buffer.
enum Dir : char { N = '5', D = '2', DF = '3', F = '6' };   // numpad notation: 2 = down, 3 = down-forward, 6 = forward

struct InputHistory {
    static constexpr unsigned SIZE = 16;               // power of two
    std::array<char, SIZE> dir{};
    std::array<bool, SIZE> punch{};
    unsigned frame = 0;                                // frames recorded so far

    void record(char d, bool p) {
        dir[frame & (SIZE - 1)] = d;                   // overwrite the oldest slot
        punch[frame & (SIZE - 1)] = p;
        ++frame;
    }
    // Input from \`ago\` frames back (0 = this frame).
    char dirAgo(unsigned ago) const { return dir[(frame - 1 - ago) & (SIZE - 1)]; }

    // Quarter-circle forward + punch: 2, 3, 6 in order within the last 12 frames, punch now.
    bool fireball() const {
        if (frame == 0 || !punch[(frame - 1) & (SIZE - 1)]) return false;
        const char motion[] = {D, DF, F};
        int need = 2;                                  // scan backwards for 6, then 3, then 2
        for (unsigned ago = 0; ago < 12 && ago < frame && need >= 0; ++ago)
            if (dirAgo(ago) == motion[need]) --need;
        return need < 0;
    }
};

int main() {
    // One character per frame (direction), and 'P' marks the frame the punch button is pressed.
    std::string_view dirs  = "5552223336665555222666";
    std::string_view press = "..............P......P";
    InputHistory h;
    for (std::size_t f = 0; f < dirs.size(); ++f) {
        h.record(dirs[f], press[f] == 'P');
        if (press[f] == 'P')
            std::printf("frame %2zu: punch -> %s\\n", f, h.fireball() ? "FIREBALL" : "plain punch");
    }
}`,
          output: `frame 14: punch -> FIREBALL
frame 21: punch -> plain punch`,
          annotations: [
            { lines: '9-12', text: 'Sixteen frames of history in two fixed arrays, about a quarter of a second at $60$ fps.' },
            { lines: 15, text: 'History mode: the write always succeeds and silently overwrites the entry from $16$ frames ago.' },
            { lines: 20, text: '"$k$ frames ago" is just `frame − 1 − k`, masked. Unsigned arithmetic makes this safe even when the counter wraps.' },
            { lines: '26-28', text: 'Scan backwards, looking for the motion\'s inputs in reverse order. Other inputs in between (like neutral $5$) are tolerated, as real games do.' },
            { lines: '35-36', text: 'Frame $14$ follows $2, 3, 6$: a fireball. Frame $21$ follows down then forward with no down-forward: just a punch.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rollback netcode',
          text: 'Online fighting games and many action games use **rollback** (popularized by GGPO): each client predicts the remote player\'s input and simulates ahead. When the real input arrives a few frames late and differs, the game restores the saved state from that frame, re-applies the corrected inputs, and re-simulates up to the present, all within one frame. That needs a ring buffer of the last several frames of game states and of both players\' inputs. Server-side lag compensation in shooters keeps a similar history of player positions to rewind hit checks.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Complete the facts behind a fast ring buffer.',
      template: 'With capacity $N$ a power of two, slot $=$ `counter &` ___ . With free-running counters, the number of stored elements is ___ , and the buffer is full exactly when that number equals ___ .',
      blanks: [{ answers: ['`(N - 1)`'] }, { answers: ['`tail - head`'] }, { answers: ['$N$'] }],
      wordBank: ['`(N - 1)`', '`N`', '`(N + 1)`', '`tail - head`', '`head - tail`', '`tail % N`', '$N$', '$N - 1$', '$0$'],
      explanation: 'For $N = 2^k$, ANDing with $N - 1$ (the low $k$ bits set) equals reducing modulo $N$. Because `head` counts pops and `tail` counts pushes, `tail − head` is the current size, and unsigned wrap-around keeps it correct forever. The buffer is full at size $N$ and empty at size $0$, so the two states never collide, unlike designs that store wrapped indices and must waste a slot to tell them apart.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Deques, and a preview of monotonic stacks',
      blocks: [
        {
          type: 'p',
          text: 'A [[dsa-deque|deque]] (double-ended queue, "deck") supports push and pop at **both** ends in $O(1)$. A growable ring buffer is one way to build it. The standard `std::deque` uses another: a "map" array of pointers to fixed-size blocks. That design adds $O(1)$ random access (find the block, then the slot, two indirections instead of one) and a unique guarantee: since elements never move, **references** to elements survive pushes at either end, although iterators do not.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 284\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"10\" y=\"18\" font-size=\"13\" font-weight=\"600\">std::deque: a map of pointers to fixed-size blocks</text>\n<text x=\"20\" y=\"50\" font-size=\"11\" class=\"t-gray\">map</text>\n<rect x=\"20\" y=\"60\" width=\"44\" height=\"30\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.35\" stroke-dasharray=\"4 3\" stroke-width=\"1.3\"/>\n<rect x=\"20\" y=\"94\" width=\"44\" height=\"30\" rx=\"4\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<circle cx=\"42\" cy=\"109\" r=\"3.5\" fill=\"currentColor\"/>\n<rect x=\"20\" y=\"128\" width=\"44\" height=\"30\" rx=\"4\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<circle cx=\"42\" cy=\"143\" r=\"3.5\" fill=\"currentColor\"/>\n<rect x=\"20\" y=\"162\" width=\"44\" height=\"30\" rx=\"4\" class=\"f-purple s-purple\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<circle cx=\"42\" cy=\"177\" r=\"3.5\" fill=\"currentColor\"/>\n<rect x=\"20\" y=\"196\" width=\"44\" height=\"30\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.35\" stroke-dasharray=\"4 3\" stroke-width=\"1.3\"/>\n<rect x=\"170\" y=\"64\" width=\"37\" height=\"30\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.4\" stroke-width=\"1.3\"/>\n<rect x=\"210\" y=\"64\" width=\"37\" height=\"30\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.4\" stroke-width=\"1.3\"/>\n<rect x=\"250\" y=\"64\" width=\"37\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"268.5\" y=\"84\" text-anchor=\"middle\" font-size=\"13\">A</text>\n<rect x=\"290\" y=\"64\" width=\"37\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"308.5\" y=\"84\" text-anchor=\"middle\" font-size=\"13\">B</text>\n<path d=\"M46.0,109.0 L158.2,80.9\" class=\"s-purple\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M166.0,79.0 L159.1,84.4 L157.4,77.4 Z\" class=\"f-purple\"/>\n<rect x=\"170\" y=\"118\" width=\"37\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"188.5\" y=\"138\" text-anchor=\"middle\" font-size=\"13\">C</text>\n<rect x=\"210\" y=\"118\" width=\"37\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"228.5\" y=\"138\" text-anchor=\"middle\" font-size=\"13\">D</text>\n<rect x=\"250\" y=\"118\" width=\"37\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"268.5\" y=\"138\" text-anchor=\"middle\" font-size=\"13\">E</text>\n<rect x=\"290\" y=\"118\" width=\"37\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"308.5\" y=\"138\" text-anchor=\"middle\" font-size=\"13\">F</text>\n<path d=\"M46.0,143.0 L158.0,133.7\" class=\"s-purple\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M166.0,133.0 L158.3,137.3 L157.7,130.1 Z\" class=\"f-purple\"/>\n<rect x=\"170\" y=\"172\" width=\"37\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"188.5\" y=\"192\" text-anchor=\"middle\" font-size=\"13\">G</text>\n<rect x=\"210\" y=\"172\" width=\"37\" height=\"30\" rx=\"4\" class=\"f-blue s-blue\" fill-opacity=\"0.18\" stroke-width=\"1.3\"/>\n<text x=\"228.5\" y=\"192\" text-anchor=\"middle\" font-size=\"13\">H</text>\n<rect x=\"250\" y=\"172\" width=\"37\" height=\"30\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.4\" stroke-width=\"1.3\"/>\n<rect x=\"290\" y=\"172\" width=\"37\" height=\"30\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\"0.4\" stroke-width=\"1.3\"/>\n<path d=\"M46.0,177.0 L158.0,186.3\" class=\"s-purple\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M166.0,187.0 L157.7,189.9 L158.3,182.7 Z\" class=\"f-purple\"/>\n<text x=\"342\" y=\"76\" font-size=\"12\" class=\"t-green\">push_front fills</text>\n<text x=\"342\" y=\"91\" font-size=\"12\" class=\"t-green\">the first block leftward</text>\n<text x=\"342\" y=\"184\" font-size=\"12\" class=\"t-green\">push_back fills the</text>\n<text x=\"342\" y=\"199\" font-size=\"12\" class=\"t-green\">last block rightward</text>\n<text x=\"10\" y=\"262\" font-size=\"11\" class=\"t-gray\">A full end block gets a new block; a full map is reallocated, but that copies only block pointers.</text>\n<text x=\"10\" y=\"277\" font-size=\"11\" class=\"t-gray\">Elements never move, so references to them survive pushes at either end.</text>\n</svg>",
          alt: 'A column of map slots, three of which point to blocks of four cells. The first block holds A and B at its right end, the middle block holds C to F, the last block holds G and H at its left end.',
          caption: 'Pushing at the front fills the first block from the right; pushing at the back fills the last block from the left. Growing the map copies pointers, never elements.',
          maxWidth: 520,
        },
        {
          type: 'p',
          text: 'A stack can also be kept **sorted** as you go, to answer "what is the next larger element to the right?" for every position in one pass. That is the [[dsa-monotonic-stack|monotonic stack]], the key to a whole family of interview problems: next greater element, daily temperatures, stock spans, the largest rectangle in a histogram. In a game: for each tower on a skyline, which is the next taller one to its right (what blocks its line of sight)?',
        },
        {"type": "algo", "view": "array", "bars": true, "code": "for (int i = 0; i < n; ++i) {\n    while (!st.empty() &&\n           h[st.back()] < h[i]) {\n        answer[st.back()] = i;\n        st.pop_back();\n    }\n    st.push_back(i);\n}", "interval": 1000, "frames": [{"note": "Find, for each tower, the next taller tower to its right. The stack holds towers still waiting, tallest at the bottom.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [], "pointers": [], "lines": [1], "vars": [["stack (indices, top last)", "empty"], ["answers", "· · · · · · ·"]]}, {"note": "Push tower 0. The stack's heights, bottom to top, stay decreasing: 4.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "orange"}], "pointers": [{"index": 0, "label": "i"}], "lines": [7], "vars": [["stack (indices, top last)", "0"], ["answers", "· · · · · · ·"]]}, {"note": "Push tower 1. The stack's heights, bottom to top, stay decreasing: 4, 2.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "orange"}], "pointers": [{"index": 1, "label": "i"}], "lines": [7], "vars": [["stack (indices, top last)", "0 1"], ["answers", "· · · · · · ·"]]}, {"note": "Tower 2 (height 3) is taller than tower 1 (height 2) on top: tower 1's answer is 2. Pop it.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "red"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["stack (indices, top last)", "0"], ["answers", "· 2 · · · · ·"]]}, {"note": "Push tower 2. The stack's heights, bottom to top, stay decreasing: 4, 3.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "green"}, {"index": 2, "color": "orange"}], "pointers": [{"index": 2, "label": "i"}], "lines": [7], "vars": [["stack (indices, top last)", "0 2"], ["answers", "· 2 · · · · ·"]]}, {"note": "Push tower 3. The stack's heights, bottom to top, stay decreasing: 4, 3, 1.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 1, "color": "green"}, {"index": 3, "color": "orange"}], "pointers": [{"index": 3, "label": "i"}], "lines": [7], "vars": [["stack (indices, top last)", "0 2 3"], ["answers", "· 2 · · · · ·"]]}, {"note": "Tower 4 (height 5) is taller than tower 3 (height 1) on top: tower 3's answer is 4. Pop it.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "blue"}, {"index": 2, "color": "blue"}, {"index": 1, "color": "green"}, {"index": 3, "color": "red"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["stack (indices, top last)", "0 2"], ["answers", "· 2 · 4 · · ·"]]}, {"note": "Tower 4 (height 5) is taller than tower 2 (height 3) on top: tower 2's answer is 4. Pop it.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "blue"}, {"index": 1, "color": "green"}, {"index": 3, "color": "green"}, {"index": 2, "color": "red"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["stack (indices, top last)", "0"], ["answers", "· 2 4 4 · · ·"]]}, {"note": "Tower 4 (height 5) is taller than tower 0 (height 4) on top: tower 0's answer is 4. Pop it.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 0, "color": "red"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["stack (indices, top last)", "empty"], ["answers", "4 2 4 4 · · ·"]]}, {"note": "Push tower 4. The stack's heights, bottom to top, stay decreasing: 5.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "orange"}], "pointers": [{"index": 4, "label": "i"}], "lines": [7], "vars": [["stack (indices, top last)", "4"], ["answers", "4 2 4 4 · · ·"]]}, {"note": "Push tower 5. The stack's heights, bottom to top, stay decreasing: 5, 2.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 4, "color": "blue"}, {"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 5, "color": "orange"}], "pointers": [{"index": 5, "label": "i"}], "lines": [7], "vars": [["stack (indices, top last)", "4 5"], ["answers", "4 2 4 4 · · ·"]]}, {"note": "Tower 6 (height 6) is taller than tower 5 (height 2) on top: tower 5's answer is 6. Pop it.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 4, "color": "blue"}, {"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 5, "color": "red"}, {"index": 6, "color": "orange"}], "pointers": [{"index": 6, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["stack (indices, top last)", "4"], ["answers", "4 2 4 4 · 6 ·"]]}, {"note": "Tower 6 (height 6) is taller than tower 4 (height 5) on top: tower 4's answer is 6. Pop it.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 5, "color": "green"}, {"index": 4, "color": "red"}, {"index": 6, "color": "orange"}], "pointers": [{"index": 6, "label": "i"}], "lines": [2, 3, 4, 5], "vars": [["stack (indices, top last)", "empty"], ["answers", "4 2 4 4 6 6 ·"]]}, {"note": "Push tower 6. The stack's heights, bottom to top, stay decreasing: 6.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}, {"index": 6, "color": "orange"}], "pointers": [{"index": 6, "label": "i"}], "lines": [7], "vars": [["stack (indices, top last)", "6"], ["answers", "4 2 4 4 6 6 ·"]]}, {"note": "Done. Towers left on the stack (only tower 6) have no taller tower to the right. Seven pushes and six pops: $O(n)$ in total.", "array": [4, 2, 3, 1, 5, 2, 6], "marks": [{"index": 6, "color": "blue"}, {"index": 0, "color": "green"}, {"index": 1, "color": "green"}, {"index": 2, "color": "green"}, {"index": 3, "color": "green"}, {"index": 4, "color": "green"}, {"index": 5, "color": "green"}], "pointers": [], "lines": [1], "vars": [["stack (indices, top last)", "6"], ["answers", "4 2 4 4 6 6 ·"]]}], "caption": "A monotonic stack computing \"next taller tower\" for heights $[4, 2, 3, 1, 5, 2, 6]$. Blue: waiting on the stack. Red: just answered and popped. Green: answered."},
        {
          type: 'code',
          title: 'monotonic_stack.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// For each tower, the index of the next taller tower to its right (-1 if none).
// The stack holds indices of towers still waiting for an answer; their heights
// never increase from bottom to top (a monotonic stack).
std::vector<int> nextTaller(const std::vector<int>& h, long& pushes, long& pops) {
    std::vector<int> answer(h.size(), -1), stack;
    for (int i = 0; i < int(h.size()); ++i) {
        while (!stack.empty() && h[stack.back()] < h[i]) {   // tower i answers them
            answer[stack.back()] = i;
            stack.pop_back();
            ++pops;
        }
        stack.push_back(i);
        ++pushes;
    }
    return answer;
}

int main() {
    std::vector<int> h{4, 2, 3, 1, 5, 2, 6};
    long pushes = 0, pops = 0;
    std::vector<int> a = nextTaller(h, pushes, pops);
    for (std::size_t i = 0; i < h.size(); ++i) std::printf("tower %zu (height %d): next taller at %d\\n", i, h[i], a[i]);
    std::printf("%ld pushes, %ld pops for n = %zu: each index pushed and popped at most once\\n", pushes, pops, h.size());
}`,
          output: `tower 0 (height 4): next taller at 4
tower 1 (height 2): next taller at 2
tower 2 (height 3): next taller at 4
tower 3 (height 1): next taller at 4
tower 4 (height 5): next taller at 6
tower 5 (height 2): next taller at 6
tower 6 (height 6): next taller at -1
7 pushes, 6 pops for n = 7: each index pushed and popped at most once`,
          annotations: [
            { lines: '10-14', text: 'A new tower answers every shorter tower waiting on top of the stack. Popping them keeps the stack\'s heights non-increasing from bottom to top.' },
            { lines: 15, text: 'Then the new tower waits for its own answer.' },
            { lines: 26, text: 'Each index is pushed once and popped at most once, so the nested loops do $O(n)$ work in total: an aggregate-method argument.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Recognizing the pattern',
          text: 'If a problem asks, for every element, about the **nearest** element to one side that is larger (or smaller), think monotonic stack. If it asks about the maximum or minimum of every **window** of size $k$, think monotonic **deque**: the sliding-window technique gets its own lesson in the searching unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'The monotonic-stack loop has a `while` loop nested inside a `for` loop over $n$ elements. What is its total running time, and why?',
      options: [
        { text: '$O(n^2)$, because the inner loop can run up to $n$ times for each of the $n$ outer iterations', why: 'One inner loop can run long, but only by popping elements, and an element can be popped once in its life. The worst case per iteration does not repeat.' },
        { text: '$O(n)$, because every index is pushed exactly once and popped at most once', correct: true, why: 'The inner loop\'s total work over the whole run is bounded by the number of pops, at most $n$. Add $n$ pushes: $O(n)$ overall.' },
        { text: '$O(n \\log n)$, because the stack stays sorted', why: 'Sortedness is maintained by popping, not by any $\\log n$ search. No comparison sort is happening.' },
        { text: '$O(n)$, but only for random input; sorted input makes it quadratic', why: 'The bound is worst case. Decreasing input makes the stack grow to $n$ with no pops; increasing input pops once per push. Both are linear.' },
      ],
      explanation: 'This is the aggregate method from the analysis lesson. Instead of bounding each inner loop separately, count the total number of times its body can run: every pop removes an index that was pushed earlier, and each index is pushed exactly once, so there are at most $n$ pops over the entire run. Total work is $n$ pushes $+ \\le n$ pops $= O(n)$.',
    },
  ],
  takeaways: [
    'An ADT is a contract (stack: LIFO push/pop/top; queue: FIFO enqueue/dequeue/front); arrays and linked lists can both implement either in $O(1)$ per operation.',
    'Stacks handle anything closed in reverse order of opening: bracket matching (invariant: the stack holds the open brackets, innermost on top) and undo/redo with two stacks.',
    'A queue from two stacks moves each element at most once, so its operations are amortized $O(1)$, although one dequeue can cost $\\Theta(n)$.',
    'A ring buffer stores a queue in a fixed array with wrap-around; free-running counters give `size = tail − head`, and a power-of-two capacity turns `% N` into `& (N − 1)`.',
    'Games use history ring buffers for input buffering (special-move detection), rollback netcode and lag compensation: fixed memory, no allocation, $O(1)$ per frame.',
    '`std::deque` is a map of fixed-size blocks: $O(1)$ at both ends and by index, with stable element references. A monotonic stack answers "next greater element" for all positions in $O(n)$.',
  ],
  reading: [
    {
      title: 'Sedgewick & Wayne — Algorithms, 4th ed. (Bags, Queues and Stacks)',
      url: 'https://algs4.cs.princeton.edu/home/',
      source: 'book',
      note: 'Section 1.3 implements stacks and queues with resizing arrays and linked lists, including Dijkstra\'s two-stack expression evaluator.',
    },
    {
      title: 'Game Programming Patterns — Event Queue',
      url: 'https://gameprogrammingpatterns.com/event-queue.html',
      source: 'book',
      note: 'Why games decouple senders and receivers with queues, implemented as a ring buffer with head and tail indices.',
    },
    {
      title: 'Wikipedia — Circular buffer',
      url: 'https://en.wikipedia.org/wiki/Circular_buffer',
      source: 'wikipedia',
      note: 'The full-versus-empty ambiguity and the standard ways to resolve it.',
    },
    {
      title: 'cppreference — std::deque',
      url: 'https://en.cppreference.com/w/cpp/container/deque',
      source: 'other',
      note: 'Complexity guarantees and the precise iterator and reference invalidation rules for the double-ended queue.',
    },
  ],
};
