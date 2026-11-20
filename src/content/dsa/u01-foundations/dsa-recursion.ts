import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dsa-recursion',
  title: 'Recursion and the Call Stack',
  summary: 'What really happens when a function calls itself: stack frames, base cases, recursion trees and their cost, stack overflow, tail calls, converting recursion to an explicit stack, and first looks at divide and conquer and memoization.',
  minutes: 21,
  objectives: [
    'Trace a recursive function through the call stack, frame by frame, and predict the order of its calls and returns',
    'Argue a recursive function correct with a base case, progress toward it and induction, and count its calls with a recursion tree',
    'Estimate stack usage, recognise code that can overflow the stack, and identify tail calls and rewrite them as loops',
    'Convert a recursive algorithm into an iterative one with an explicit stack',
    'Recognise divide and conquer ($O(\\log n)$ depth) and memoization (each subproblem solved once) as the two big ways to tame recursion',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'What a call really does: the call stack',
      blocks: [
        {
          type: 'p',
          text: 'A recursive function calls itself on a smaller input. In Discrete Math you met [[dm-recursive-definition|recursive definitions]] and recurrences; here we look at the machine that runs them. There is nothing special about a function calling itself: every call, recursive or not, works the same way, through the [[dsa-call-stack|call stack]].',
        },
        {
          type: 'definition',
          term: 'Call stack and stack frames',
          text: 'Each thread has a region of memory called its **call stack**. Every function call **pushes** a **stack frame** holding the return address (where to continue in the caller), the parameters, the local variables and some saved registers. When the function returns, its frame is **popped** and execution resumes in the caller. Last in, first out: the most recent call always finishes first.',
        },
        {
          type: 'p',
          text: 'So during recursion there are many live copies of the same function, each with its **own** `n` and its own locals, stacked on top of each other. Only the top one is running; all the others are suspended in the middle of a statement, waiting for the call above them to return a value.',
        },
        {
          type: 'code',
          title: 'trace_sum.cpp',
          runnable: true,
          code: `#include <cstdio>

// sumTo(n) = 1 + 2 + ... + n, printing every call and return, indented by depth.
long sumTo(int n, int depth = 0) {
    std::printf("%*senter sumTo(%d)\\n", 2 * depth, "", n);
    if (n == 0) {                                   // base case: no further calls
        std::printf("%*sbase case, return 0\\n", 2 * depth, "");
        return 0;
    }
    long rest = sumTo(n - 1, depth + 1);            // this frame waits here
    long result = rest + n;
    std::printf("%*sleave sumTo(%d) = %ld\\n", 2 * depth, "", n, result);
    return result;
}

int main() {
    std::printf("answer: %ld\\n", sumTo(3));
}`,
          output: `enter sumTo(3)
  enter sumTo(2)
    enter sumTo(1)
      enter sumTo(0)
      base case, return 0
    leave sumTo(1) = 1
  leave sumTo(2) = 3
leave sumTo(3) = 6
answer: 6`,
          annotations: [
            { lines: 5, text: '`%*s` prints an empty string padded to `2 * depth` characters: an indent that shows how deep the stack is.' },
            { lines: '6-9', text: 'The [[dsa-base-case|base case]]: an input small enough to answer without recursing. Every chain of calls must end in one.' },
            { lines: 10, text: 'The frame for `sumTo(3)` is suspended here, keeping its `n = 3`, while `sumTo(2)` runs on top of it.' },
            { lines: '11-12', text: 'This work happens on the way **back up**, after the inner call returns: the "leave" lines print in reverse order.' },
          ],
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"40\" y=\"246\" width=\"300\" height=\"44\" rx=\"6\" class=\"f-gray s-gray\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"52\" y=\"265\" font-size=\"14\" font-weight=\"600\">main()</text>\n<text x=\"52\" y=\"282\" font-size=\"11\" class=\"t-gray\">waiting for sumTo(3)</text>\n<text x=\"330\" y=\"265\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">return address</text>\n<rect x=\"40\" y=\"196\" width=\"300\" height=\"44\" rx=\"6\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"52\" y=\"215\" font-size=\"14\" font-weight=\"600\">sumTo(3)</text>\n<text x=\"52\" y=\"232\" font-size=\"11\" class=\"t-gray\">n = 3, waiting at rest = sumTo(2)</text>\n<text x=\"330\" y=\"215\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">return address</text>\n<rect x=\"40\" y=\"146\" width=\"300\" height=\"44\" rx=\"6\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"52\" y=\"165\" font-size=\"14\" font-weight=\"600\">sumTo(2)</text>\n<text x=\"52\" y=\"182\" font-size=\"11\" class=\"t-gray\">n = 2, waiting at rest = sumTo(1)</text>\n<text x=\"330\" y=\"165\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">return address</text>\n<rect x=\"40\" y=\"96\" width=\"300\" height=\"44\" rx=\"6\" class=\"f-blue s-blue\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"52\" y=\"115\" font-size=\"14\" font-weight=\"600\">sumTo(1)</text>\n<text x=\"52\" y=\"132\" font-size=\"11\" class=\"t-gray\">n = 1, waiting at rest = sumTo(0)</text>\n<text x=\"330\" y=\"115\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">return address</text>\n<rect x=\"40\" y=\"46\" width=\"300\" height=\"44\" rx=\"6\" class=\"f-orange s-orange\" fill-opacity=\"0.15\" stroke-width=\"1.5\"/>\n<text x=\"52\" y=\"65\" font-size=\"14\" font-weight=\"600\">sumTo(0)</text>\n<text x=\"52\" y=\"82\" font-size=\"11\" class=\"t-gray\">n = 0: base case, returning 0</text>\n<text x=\"330\" y=\"65\" text-anchor=\"end\" font-size=\"11\" class=\"t-gray\">return address</text>\n<path d=\"M410,68.0 L352,68.0\" class=\"s-orange\" stroke-width=\"2\" fill=\"none\"/>\n<path d=\"M344,68.0 L354,63.0 L354,73.0 Z\" class=\"f-orange\"/>\n<text x=\"414\" y=\"72.0\" font-size=\"13\" class=\"t-orange\">top of stack</text>\n<text x=\"360\" y=\"92.0\" font-size=\"11\" class=\"t-gray\">pushed last,</text>\n<text x=\"360\" y=\"106.0\" font-size=\"11\" class=\"t-gray\">returns first</text>\n<path d=\"M22,280 L22,40\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"1.5\" fill=\"none\"/>\n<path d=\"M22,30 L17,42 L27,42 Z\" fill=\"currentColor\" fill-opacity=\"0.5\"/>\n<text x=\"360\" y=\"272\" font-size=\"11\" class=\"t-gray\">a frame holds a return</text>\n<text x=\"360\" y=\"286\" font-size=\"11\" class=\"t-gray\">address, parameters, locals</text>\n<text x=\"10\" y=\"16\" font-size=\"12\" class=\"t-gray\">calls push frames</text>\n</svg>",
          alt: 'Five stacked frames from bottom to top: main, sumTo(3), sumTo(2), sumTo(1), sumTo(0). The top frame, sumTo(0), is highlighted as the top of the stack and is returning 0.',
          caption: 'The stack at its deepest point, while `sumTo(0)` runs. Four frames of the same function coexist, each with its own `n`. On x86-64 the stack actually grows toward **lower** addresses; "top" means most recent.',
          maxWidth: 480,
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A stack of sticky notes',
          text: 'Working through a manual, you hit "see section 7", stick a note on your page saying where you were, and go to section 7. There you hit "see section 9" and stick another note. When section 9 is done you peel off the **top** note and resume section 7 exactly where you left off. The notes are stack frames; the pile is the call stack.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'order',
      prompt: 'Using `trace` below, put the lines that `trace(2)` prints in order.\n\n`void trace(int n) { std::printf("in %d\\n", n); if (n > 0) trace(n - 1); std::printf("out %d\\n", n); }`',
      lines: ['`in 2`', '`in 1`', '`in 0`', '`out 0`', '`out 1`', '`out 2`'],
      explanation: '`trace(2)` prints `in 2` and calls `trace(1)` before it can print anything else. That prints `in 1` and calls `trace(0)`, which prints `in 0`, makes no call (base case), and prints `out 0`. Now `trace(0)` returns, so `trace(1)` resumes and prints `out 1`, and finally `trace(2)` prints `out 2`. Calls nest like brackets, `in 2 ( in 1 ( in 0 out 0 ) out 1 ) out 2`: the last call made is the first to finish.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Correctness and cost: base cases and recursion trees',
      blocks: [
        {
          type: 'p',
          text: 'A recursive function is correct when three things hold, and they are exactly the parts of a proof by [[dm-mathematical-induction|induction]]:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Base case', text: 'Every smallest input is answered directly, without a recursive call.' },
            { title: 'Progress', text: 'Every recursive call is on a strictly smaller input (by some measure that cannot decrease forever), so every chain of calls reaches a base case.' },
            { title: 'Inductive step', text: 'Assuming the recursive calls return correct answers for the smaller inputs, the function combines them into a correct answer for its own input.' },
          ],
        },
        {
          type: 'p',
          text: 'Miss the base case, or fail to make progress, and the calls never stop: the stack grows until the program crashes. For the **cost**, draw the [[dm-recursion-tree|recursion tree]]: one node per call, children for the calls it makes. Time is roughly the number of nodes times the work per node; the stack depth at any moment is the length of one root-to-node path, so the maximum stack depth is the tree\'s **height**. Here is naive [[dm-fibonacci-numbers|Fibonacci]] running:',
        },
        {"type": "algo", "view": "graph", "width": 420, "height": 280, "nodes": [{"id": "r", "x": 242, "y": 30, "label": "f(4)"}, {"id": "rL", "x": 146, "y": 98, "label": "f(3)"}, {"id": "rLL", "x": 82, "y": 166, "label": "f(2)"}, {"id": "rLLL", "x": 40, "y": 234, "label": "f(1)"}, {"id": "rLLR", "x": 125, "y": 234, "label": "f(0)"}, {"id": "rLR", "x": 210, "y": 166, "label": "f(1)"}, {"id": "rR", "x": 338, "y": 98, "label": "f(2)"}, {"id": "rRL", "x": 295, "y": 166, "label": "f(1)"}, {"id": "rRR", "x": 380, "y": 166, "label": "f(0)"}], "edges": [{"from": "r", "to": "rL"}, {"from": "r", "to": "rR"}, {"from": "rL", "to": "rLL"}, {"from": "rL", "to": "rLR"}, {"from": "rLL", "to": "rLLL"}, {"from": "rLL", "to": "rLLR"}, {"from": "rR", "to": "rRL"}, {"from": "rR", "to": "rRR"}], "code": "long fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}", "interval": 1000, "frames": [{"note": "Call $\\text{fib}(4)$: not a base case, so it calls $\\text{fib}(3)$ first and **waits**.", "nodeColors": [{"id": "r", "color": "orange"}], "nodeNotes": [], "hidden": ["rL", "rLL", "rLLL", "rLLR", "rLR", "rR", "rRL", "rRR"], "lines": [1, 3], "vars": [["call stack (top last)", "f(4)"], ["calls so far", "1"]]}, {"note": "Call $\\text{fib}(3)$: not a base case, so it calls $\\text{fib}(2)$ first and **waits**.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rL", "color": "orange"}], "nodeNotes": [], "hidden": ["rLL", "rLLL", "rLLR", "rLR", "rR", "rRL", "rRR"], "lines": [1, 3], "vars": [["call stack (top last)", "f(4) → f(3)"], ["calls so far", "2"]]}, {"note": "Call $\\text{fib}(2)$, which first calls $\\text{fib}(1)$.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rL", "color": "blue"}, {"id": "rLL", "color": "orange"}], "nodeNotes": [], "hidden": ["rLLL", "rLLR", "rLR", "rR", "rRL", "rRR"], "lines": [1, 3], "vars": [["call stack (top last)", "f(4) → f(3) → f(2)"], ["calls so far", "3"]]}, {"note": "Call $\\text{fib}(1)$: a base case, so it returns $1$ immediately.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rL", "color": "blue"}, {"id": "rLL", "color": "blue"}, {"id": "rLLL", "color": "orange"}], "nodeNotes": [], "hidden": ["rLLR", "rLR", "rR", "rRL", "rRR"], "lines": [1, 2], "vars": [["call stack (top last)", "f(4) → f(3) → f(2) → f(1)"], ["calls so far", "4"]]}, {"note": "Call $\\text{fib}(0)$: a base case, so it returns $0$ immediately.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rL", "color": "blue"}, {"id": "rLL", "color": "blue"}, {"id": "rLLR", "color": "orange"}, {"id": "rLLL", "color": "green"}], "nodeNotes": [{"id": "rLLL", "text": "= 1"}], "hidden": ["rLR", "rR", "rRL", "rRR"], "lines": [1, 2], "vars": [["call stack (top last)", "f(4) → f(3) → f(2) → f(0)"], ["calls so far", "5"]]}, {"note": "$\\text{fib}(2) = 1 + 0 = 1$: its frame is popped and the value goes to its caller.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rL", "color": "blue"}, {"id": "rLL", "color": "orange"}, {"id": "rLLL", "color": "green"}, {"id": "rLLR", "color": "green"}, {"id": "rLL", "color": "green"}], "nodeNotes": [{"id": "rLLL", "text": "= 1"}, {"id": "rLLR", "text": "= 0"}, {"id": "rLL", "text": "= 1"}], "hidden": ["rLR", "rR", "rRL", "rRR"], "lines": [3], "vars": [["call stack (top last)", "f(4) → f(3) → f(2)"], ["calls so far", "5"]]}, {"note": "Call $\\text{fib}(1)$: a base case, so it returns $1$ immediately.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rL", "color": "blue"}, {"id": "rLR", "color": "orange"}, {"id": "rLLL", "color": "green"}, {"id": "rLLR", "color": "green"}, {"id": "rLL", "color": "green"}], "nodeNotes": [{"id": "rLLL", "text": "= 1"}, {"id": "rLLR", "text": "= 0"}, {"id": "rLL", "text": "= 1"}], "hidden": ["rR", "rRL", "rRR"], "lines": [1, 2], "vars": [["call stack (top last)", "f(4) → f(3) → f(1)"], ["calls so far", "6"]]}, {"note": "$\\text{fib}(3) = 1 + 1 = 2$: its frame is popped and the value goes to its caller.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rL", "color": "orange"}, {"id": "rLLL", "color": "green"}, {"id": "rLLR", "color": "green"}, {"id": "rLL", "color": "green"}, {"id": "rLR", "color": "green"}, {"id": "rL", "color": "green"}], "nodeNotes": [{"id": "rLLL", "text": "= 1"}, {"id": "rLLR", "text": "= 0"}, {"id": "rLL", "text": "= 1"}, {"id": "rLR", "text": "= 1"}, {"id": "rL", "text": "= 2"}], "hidden": ["rR", "rRL", "rRR"], "lines": [3], "vars": [["call stack (top last)", "f(4) → f(3)"], ["calls so far", "6"]]}, {"note": "Call $\\text{fib}(2)$: not a base case, so it calls $\\text{fib}(1)$ first and **waits**.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rR", "color": "orange"}, {"id": "rLLL", "color": "green"}, {"id": "rLLR", "color": "green"}, {"id": "rLL", "color": "green"}, {"id": "rLR", "color": "green"}, {"id": "rL", "color": "green"}], "nodeNotes": [{"id": "rLLL", "text": "= 1"}, {"id": "rLLR", "text": "= 0"}, {"id": "rLL", "text": "= 1"}, {"id": "rLR", "text": "= 1"}, {"id": "rL", "text": "= 2"}], "hidden": ["rRL", "rRR"], "lines": [1, 3], "vars": [["call stack (top last)", "f(4) → f(2)"], ["calls so far", "7"]]}, {"note": "Call $\\text{fib}(1)$: a base case, so it returns $1$ immediately.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rR", "color": "blue"}, {"id": "rRL", "color": "orange"}, {"id": "rLLL", "color": "green"}, {"id": "rLLR", "color": "green"}, {"id": "rLL", "color": "green"}, {"id": "rLR", "color": "green"}, {"id": "rL", "color": "green"}], "nodeNotes": [{"id": "rLLL", "text": "= 1"}, {"id": "rLLR", "text": "= 0"}, {"id": "rLL", "text": "= 1"}, {"id": "rLR", "text": "= 1"}, {"id": "rL", "text": "= 2"}], "hidden": ["rRR"], "lines": [1, 2], "vars": [["call stack (top last)", "f(4) → f(2) → f(1)"], ["calls so far", "8"]]}, {"note": "Call $\\text{fib}(0)$: a base case, so it returns $0$ immediately.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rR", "color": "blue"}, {"id": "rRR", "color": "orange"}, {"id": "rLLL", "color": "green"}, {"id": "rLLR", "color": "green"}, {"id": "rLL", "color": "green"}, {"id": "rLR", "color": "green"}, {"id": "rL", "color": "green"}, {"id": "rRL", "color": "green"}], "nodeNotes": [{"id": "rLLL", "text": "= 1"}, {"id": "rLLR", "text": "= 0"}, {"id": "rLL", "text": "= 1"}, {"id": "rLR", "text": "= 1"}, {"id": "rL", "text": "= 2"}, {"id": "rRL", "text": "= 1"}], "hidden": [], "lines": [1, 2], "vars": [["call stack (top last)", "f(4) → f(2) → f(0)"], ["calls so far", "9"]]}, {"note": "$\\text{fib}(2) = 1 + 0 = 1$: its frame is popped and the value goes to its caller.", "nodeColors": [{"id": "r", "color": "blue"}, {"id": "rR", "color": "orange"}, {"id": "rLLL", "color": "green"}, {"id": "rLLR", "color": "green"}, {"id": "rLL", "color": "green"}, {"id": "rLR", "color": "green"}, {"id": "rL", "color": "green"}, {"id": "rRL", "color": "green"}, {"id": "rRR", "color": "green"}, {"id": "rR", "color": "green"}], "nodeNotes": [{"id": "rLLL", "text": "= 1"}, {"id": "rLLR", "text": "= 0"}, {"id": "rLL", "text": "= 1"}, {"id": "rLR", "text": "= 1"}, {"id": "rL", "text": "= 2"}, {"id": "rRL", "text": "= 1"}, {"id": "rRR", "text": "= 0"}, {"id": "rR", "text": "= 1"}], "hidden": [], "lines": [3], "vars": [["call stack (top last)", "f(4) → f(2)"], ["calls so far", "9"]]}, {"note": "$\\text{fib}(4) = 2 + 1 = 3$. Nine calls in total, and $\\text{fib}(2)$ was computed **twice**: the waste memoization removes.", "nodeColors": [{"id": "rLLL", "color": "green"}, {"id": "rLLR", "color": "green"}, {"id": "rLL", "color": "green"}, {"id": "rLR", "color": "green"}, {"id": "rL", "color": "green"}, {"id": "rRL", "color": "green"}, {"id": "rRR", "color": "green"}, {"id": "rR", "color": "green"}, {"id": "r", "color": "green"}], "nodeNotes": [{"id": "rLLL", "text": "= 1"}, {"id": "rLLR", "text": "= 0"}, {"id": "rLL", "text": "= 1"}, {"id": "rLR", "text": "= 1"}, {"id": "rL", "text": "= 2"}, {"id": "rRL", "text": "= 1"}, {"id": "rRR", "text": "= 0"}, {"id": "rR", "text": "= 1"}, {"id": "r", "text": "= 3"}], "hidden": [], "lines": [3], "vars": [["call stack (top last)", "empty"], ["calls so far", "9"]]}], "caption": "The call tree of $\\text{fib}(4)$, grown in the order the calls happen. Orange: the running call (top of the call stack). Blue: calls suspended on the stack, waiting for a result. Green: returned, with its value. The stack never holds more than one root-to-leaf path."},
        {
          type: 'derivation',
          title: 'How many calls does naive $\\text{fib}(n)$ make?',
          steps: [
            { tex: 'C(0) = C(1) = 1, \\qquad C(n) = 1 + C(n-1) + C(n-2)', why: 'A base-case call makes no further calls. Otherwise one call (itself) plus the calls made by its two children.' },
            { tex: 'C(n) + 1 = \\big(C(n-1) + 1\\big) + \\big(C(n-2) + 1\\big)', why: 'Add $1$ to both sides and split the $2$ on the right: $D(n) = C(n) + 1$ satisfies the Fibonacci recurrence exactly.' },
            { tex: 'D(0) = D(1) = 2 = 2F_1 = 2F_2', why: 'Since $F_1 = F_2 = 1$, the sequence $D$ starts like $2F_{n+1}$, and it obeys the same recurrence, so $D(n) = 2F_{n+1}$ for all $n$.' },
            { tex: 'C(n) = 2F_{n+1} - 1', why: 'Subtract the $1$ back. Check: $C(4) = 2F_5 - 1 = 2 \\cdot 5 - 1 = 9$ calls, as in the animation.' },
            { tex: 'F_{n+1} \\approx \\frac{\\varphi^{n+1}}{\\sqrt{5}}, \\quad \\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618 \\implies C(n) = \\Theta(\\varphi^n)', why: 'Binet\'s formula. The call count grows exponentially, while the stack depth is only $n$ (the leftmost path $n, n-1, \\dots, 1$).' },
          ],
          result: 'Naive Fibonacci makes $2F_{n+1} - 1$ calls: $\\Theta(1.618^n)$ time but only $\\Theta(n)$ stack space. Time follows the tree\'s size, space its height.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'numeric',
      prompt: 'How many calls (including the first one) does the naive `fib(n)` above make to compute `fib(6)`?',
      label: 'calls $=$',
      answer: '25',
      hint: 'Use $C(n) = 1 + C(n-1) + C(n-2)$ with $C(0) = C(1) = 1$, or the closed form $2F_{n+1} - 1$.',
      explanation: 'Build up: $C(2) = 1 + 1 + 1 = 3$, $C(3) = 1 + 3 + 1 = 5$, $C(4) = 1 + 5 + 3 = 9$, $C(5) = 1 + 9 + 5 = 15$, $C(6) = 1 + 15 + 9 = 25$. The closed form agrees: $2F_7 - 1 = 2 \\cdot 13 - 1 = 25$. Each extra $n$ multiplies the work by about $1.6$, which is why `fib(50)` this way takes tens of billions of calls.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'This Fibonacci function compiles, but `fib(5)` crashes with a stack overflow. Tap the line that causes it.',
      lines: [
        '`long fib(int n) {`',
        '`    if (n == 0) return 0;`',
        '`    return fib(n - 1) + fib(n - 2);`',
        '`}`',
      ],
      errorLines: [2],
      explanation: 'The base case is incomplete. The recurrence $F_n = F_{n-1} + F_{n-2}$ looks two steps back, so it needs **two** base cases. With only $n = 0$ handled, `fib(1)` calls `fib(0)` (fine) and `fib(-1)`, which calls `fib(-2)` and `fib(-3)`, and so on forever: the input never reaches $0$ again. Line 3 is correct as written; fix line 2 to `if (n <= 1) return n;`, which covers both `fib(0) = 0` and `fib(1) = 1`.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Stack overflow and tail calls',
      blocks: [
        {
          type: 'p',
          text: 'The call stack is small and fixed in size: typically **8 MB** for the main thread on Linux, **1 MB** by default on Windows, and often less for worker threads. Exceed it and you get a [[dsa-stack-overflow|stack overflow]]: the program touches memory beyond the stack and the operating system kills it (a segmentation fault on Linux, an access violation on Windows). There is no exception to catch.',
        },
        {
          type: 'derivation',
          title: 'Can a recursive flood fill handle a $1000 \\times 1000$ open map?',
          steps: [
            { tex: '\\text{depth} \\le 10^6 \\text{ frames}', why: 'A recursive fill can snake through every cell of an open region in one long chain of calls, one frame per cell.' },
            { tex: '10^6 \\times 64 \\text{ bytes} = 64 \\text{ MB}', why: 'Suppose each frame takes $64$ bytes (return address, a few parameters, saved registers). Debug builds use more.' },
            { tex: '64 \\text{ MB} \\gg 8 \\text{ MB (Linux)} \\gg 1 \\text{ MB (Windows)}', why: 'Far more than any default stack. On Windows the limit is reached after about $1\\,\\text{MB} / 64\\,\\text{B} \\approx 16\\,000$ frames.' },
          ],
          result: 'Recursion whose depth grows with the input (linked lists, flood fills, unbalanced trees, DFS on a long path) will crash on large inputs. Recursion with $O(\\log n)$ depth is always safe.',
        },
        {
          type: 'p',
          text: 'One special shape of recursion can avoid the problem. A call is a [[dsa-tail-call|tail call]] when it is the **very last thing** the function does: its result is returned directly, with no work left to do afterwards. Then the caller\'s frame is no longer needed, and a compiler can reuse it, turning the recursion into a jump. `return n + sumTo(n - 1);` is **not** a tail call (the addition happens after the call returns). `return sumAcc(n - 1, acc + n);` is: the pending addition was moved into an accumulator parameter.',
        },
        {
          type: 'code',
          title: 'tail_calls.cpp',
          runnable: true,
          code: `#include <cstdio>

// Not a tail call: the addition runs AFTER the recursive call returns,
// so every frame must stay on the stack until then.
long sumTo(long n) { return n == 0 ? 0 : n + sumTo(n - 1); }

// A tail call: the recursive call is the last thing the function does.
// The running total travels in the accumulator parameter instead.
long sumAcc(long n, long acc = 0) { return n == 0 ? acc : sumAcc(n - 1, acc + n); }

// The mechanical rewrite of a tail call: update the parameters, jump to the top.
long sumLoop(long n) {
    long acc = 0;
    while (n != 0) {
        acc += n;
        n -= 1;
    }
    return acc;
}

int gcdRec(int a, int b) { return b == 0 ? a : gcdRec(b, a % b); }   // tail recursive

int gcdLoop(int a, int b) {
    while (b != 0) {
        int t = a % b;
        a = b;
        b = t;
    }
    return a;
}

int main() {
    std::printf("sums: %ld %ld %ld\\n", sumTo(1000), sumAcc(1000), sumLoop(1000));
    std::printf("gcd(1071, 462): %d %d\\n", gcdRec(1071, 462), gcdLoop(1071, 462));
    std::printf("loop, n = 10^8: %ld\\n", sumLoop(100000000));   // no depth limit at all
}`,
          output: `sums: 500500 500500 500500
gcd(1071, 462): 21 21
loop, n = 10^8: 5000000050000000`,
          annotations: [
            { lines: 5, text: 'After `sumTo(n - 1)` returns, this frame still has to add `n`. Depth $n$ is unavoidable.' },
            { lines: 9, text: 'Nothing happens after the recursive call. GCC and Clang at `-O2` usually compile this into a loop, but the language does not promise it.' },
            { lines: '12-19', text: 'The rewrite any tail-recursive function admits: the parameters become loop variables, the base case becomes the loop exit, and the call becomes "update the variables and go around again".' },
            { lines: '23-30', text: 'Euclid\'s algorithm, `gcd(a, b) = gcd(b, a % b)`, is naturally tail recursive. The loop needs a temporary `t` so that both new values are computed from the **old** `a` and `b`.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not rely on tail-call optimization in C++',
          text: 'The C++ standard does not require tail-call elimination. It typically happens with optimization on and disappears in debug builds, so code that works in Release can overflow in Debug. Destructors of local objects also run after the call, which silently makes a call not a tail call. If depth can be large, write the loop yourself.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Which of these functions makes a **tail call**?',
      codeOptions: true,
      options: [
        { text: 'int len(Node* p) { return p ? 1 + len(p->next) : 0; }', why: 'After `len(p->next)` returns, the function still adds $1$. Pending work means not a tail call: depth equals the list length.' },
        { text: 'int len(Node* p, int acc) { return p ? len(p->next, acc + 1) : acc; }', correct: true, why: 'The recursive call\'s result is returned as is; the count travels in `acc`. Nothing is left to do after the call.' },
        { text: 'long fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }', why: 'The multiplication by `n` happens after `fact(n - 1)` returns, so the frame must survive the call.' },
        { text: 'int depth(Node* t) { return t ? 1 + std::max(depth(t->l), depth(t->r)) : 0; }', why: 'Two recursive calls, then `max` and `+ 1` after both return. Neither call is in tail position.' },
      ],
      explanation: 'A tail call is one whose result is returned **unchanged**, with no multiplication, addition or comparison left to do. The standard trick to get there is an accumulator parameter that carries the partial result down instead of combining on the way back up, as in the second option. Even then, C++ does not guarantee the optimization, so the reliable fix for deep recursion is a loop.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Complete the loop version of the tail-recursive `int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }`.',
      template: '`while (b != 0) { int t =` ___ `; a =` ___ `; b = t; } return a;`',
      blanks: [{ answers: ['`a % b`'] }, { answers: ['`b`'] }],
      wordBank: ['`a % b`', '`b % a`', '`b`', '`t`', '`a`', '`a - b`'],
      explanation: 'The tail call `gcd(b, a % b)` replaces the pair $(a, b)$ by $(b, a \\bmod b)$. Both new values must come from the **old** pair, so save `a % b` in `t` first, then set `a = b` and `b = t`. Writing `a = b; b = a % b;` without the temporary would compute `b % b = 0` and stop too early. The base case `b == 0` becomes the loop condition, and `return a` is the base case\'s answer.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Recursion to iteration with an explicit stack',
      blocks: [
        {
          type: 'p',
          text: 'Most recursion is not tail recursion, and you still might need to remove it. You can always replace the call stack with **your own stack**: a `std::vector` on the heap, which can hold millions of entries. Instead of calling the function on a subproblem, push the subproblem; instead of returning, pop the next one. A flood fill, the "paint bucket" of every editor and the region finder in tile-based games, is the classic case.',
        },
        {"type": "algo", "view": "graph", "width": 420, "height": 260, "nodes": [{"id": "c00", "x": 60, "y": 30, "label": "0,0"}, {"id": "c01", "x": 160, "y": 30, "label": "0,1"}, {"id": "c02", "x": 260, "y": 30, "label": "0,2"}, {"id": "c03", "x": 360, "y": 30, "label": "#"}, {"id": "c10", "x": 60, "y": 94, "label": "1,0"}, {"id": "c11", "x": 160, "y": 94, "label": "#"}, {"id": "c12", "x": 260, "y": 94, "label": "1,2"}, {"id": "c13", "x": 360, "y": 94, "label": "1,3"}, {"id": "c20", "x": 60, "y": 158, "label": "2,0"}, {"id": "c21", "x": 160, "y": 158, "label": "2,1"}, {"id": "c22", "x": 260, "y": 158, "label": "#"}, {"id": "c23", "x": 360, "y": 158, "label": "2,3"}, {"id": "c30", "x": 60, "y": 222, "label": "#"}, {"id": "c31", "x": 160, "y": 222, "label": "3,1"}, {"id": "c32", "x": 260, "y": 222, "label": "3,2"}, {"id": "c33", "x": 360, "y": 222, "label": "3,3"}], "edges": [{"from": "c00", "to": "c01"}, {"from": "c00", "to": "c10"}, {"from": "c01", "to": "c02"}, {"from": "c02", "to": "c12"}, {"from": "c10", "to": "c20"}, {"from": "c12", "to": "c13"}, {"from": "c13", "to": "c23"}, {"from": "c20", "to": "c21"}, {"from": "c21", "to": "c31"}, {"from": "c23", "to": "c33"}, {"from": "c31", "to": "c32"}, {"from": "c32", "to": "c33"}], "code": "stack.push_back(start);\nmark(start);\nwhile (!stack.empty()) {\n    Cell cur = stack.back();\n    stack.pop_back();\n    for (Cell nb : neighbors(cur))\n        if (open(nb) && !marked(nb)) {\n            mark(nb);\n            stack.push_back(nb);\n        }\n}", "interval": 1000, "frames": [{"note": "Fill the open region from $(0,0)$. Push the start cell and mark it, so no cell is ever pushed twice.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "blue"}], "lines": [1, 2], "vars": [["stack (top last)", "(0,0)"], ["filled", "0"]]}, {"note": "Pop $(0,0)$ and fill it; push its unmarked open neighbours $(0,1)$, $(1,0)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c01", "color": "blue"}, {"id": "c10", "color": "blue"}, {"id": "c00", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (1,0)"], ["filled", "1"]]}, {"note": "Pop $(1,0)$ and fill it; push its unmarked open neighbours $(2,0)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c20", "color": "blue"}, {"id": "c10", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (2,0)"], ["filled", "2"]]}, {"note": "Pop $(2,0)$ and fill it; push its unmarked open neighbours $(2,1)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c21", "color": "blue"}, {"id": "c20", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (2,1)"], ["filled", "3"]]}, {"note": "Pop $(2,1)$ and fill it; push its unmarked open neighbours $(3,1)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c31", "color": "blue"}, {"id": "c21", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (3,1)"], ["filled", "4"]]}, {"note": "Pop $(3,1)$ and fill it; push its unmarked open neighbours $(3,2)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c21", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c32", "color": "blue"}, {"id": "c31", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (3,2)"], ["filled", "5"]]}, {"note": "Pop $(3,2)$ and fill it; push its unmarked open neighbours $(3,3)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c21", "color": "green"}, {"id": "c31", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c33", "color": "blue"}, {"id": "c32", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (3,3)"], ["filled", "6"]]}, {"note": "Pop $(3,3)$ and fill it; push its unmarked open neighbours $(2,3)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c21", "color": "green"}, {"id": "c31", "color": "green"}, {"id": "c32", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c23", "color": "blue"}, {"id": "c33", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (2,3)"], ["filled", "7"]]}, {"note": "Pop $(2,3)$ and fill it; push its unmarked open neighbours $(1,3)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c21", "color": "green"}, {"id": "c31", "color": "green"}, {"id": "c32", "color": "green"}, {"id": "c33", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c13", "color": "blue"}, {"id": "c23", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (1,3)"], ["filled", "8"]]}, {"note": "Pop $(1,3)$ and fill it; push its unmarked open neighbours $(1,2)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c21", "color": "green"}, {"id": "c31", "color": "green"}, {"id": "c32", "color": "green"}, {"id": "c33", "color": "green"}, {"id": "c23", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c12", "color": "blue"}, {"id": "c13", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (1,2)"], ["filled", "9"]]}, {"note": "Pop $(1,2)$ and fill it; push its unmarked open neighbours $(0,2)$.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c21", "color": "green"}, {"id": "c31", "color": "green"}, {"id": "c32", "color": "green"}, {"id": "c33", "color": "green"}, {"id": "c23", "color": "green"}, {"id": "c13", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c02", "color": "blue"}, {"id": "c12", "color": "orange"}], "lines": [4, 5, 6, 7, 8, 9], "vars": [["stack (top last)", "(0,1) (0,2)"], ["filled", "10"]]}, {"note": "Pop $(0,2)$ and fill it; it has no unmarked open neighbours, so nothing is pushed.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c21", "color": "green"}, {"id": "c31", "color": "green"}, {"id": "c32", "color": "green"}, {"id": "c33", "color": "green"}, {"id": "c23", "color": "green"}, {"id": "c13", "color": "green"}, {"id": "c12", "color": "green"}, {"id": "c01", "color": "blue"}, {"id": "c02", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["stack (top last)", "(0,1)"], ["filled", "11"]]}, {"note": "Pop $(0,1)$ and fill it; it has no unmarked open neighbours, so nothing is pushed.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c21", "color": "green"}, {"id": "c31", "color": "green"}, {"id": "c32", "color": "green"}, {"id": "c33", "color": "green"}, {"id": "c23", "color": "green"}, {"id": "c13", "color": "green"}, {"id": "c12", "color": "green"}, {"id": "c02", "color": "green"}, {"id": "c01", "color": "orange"}], "lines": [4, 5, 6, 7], "vars": [["stack (top last)", "empty"], ["filled", "12"]]}, {"note": "The stack is empty: all 12 open cells are filled, in last-in-first-out order. The stack never held more than 2 cells.", "nodeColors": [{"id": "c03", "color": "gray"}, {"id": "c11", "color": "gray"}, {"id": "c22", "color": "gray"}, {"id": "c30", "color": "gray"}, {"id": "c00", "color": "green"}, {"id": "c10", "color": "green"}, {"id": "c20", "color": "green"}, {"id": "c21", "color": "green"}, {"id": "c31", "color": "green"}, {"id": "c32", "color": "green"}, {"id": "c33", "color": "green"}, {"id": "c23", "color": "green"}, {"id": "c13", "color": "green"}, {"id": "c12", "color": "green"}, {"id": "c02", "color": "green"}, {"id": "c01", "color": "green"}], "lines": [3], "vars": [["stack (top last)", "empty"], ["filled", "12"]]}], "caption": "Iterative flood fill on a $4 \\times 4$ map (gray cells are walls; lines join neighbouring open cells; neighbours are tried right, down, left, up). Orange: the cell just popped. Blue: cells waiting on the explicit stack. Green: filled."},
        {
          type: 'code',
          title: 'flood_fill.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string>
#include <utility>
#include <vector>

using Map = std::vector<std::string>;

// Recursive version: elegant, but its depth can reach the size of the region.
void fillRecursive(Map& m, int r, int c, int depth, int& maxDepth) {
    if (r < 0 || r >= int(m.size()) || c < 0 || c >= int(m[r].size())) return;
    if (m[r][c] != '.') return;                           // wall or already filled
    m[r][c] = '~';
    if (depth > maxDepth) maxDepth = depth;
    fillRecursive(m, r, c + 1, depth + 1, maxDepth);
    fillRecursive(m, r + 1, c, depth + 1, maxDepth);
    fillRecursive(m, r, c - 1, depth + 1, maxDepth);
    fillRecursive(m, r - 1, c, depth + 1, maxDepth);
}

// Same fill with an explicit stack on the heap: no call-stack growth at all.
int fillIterative(Map& m, int r0, int c0) {
    std::vector<std::pair<int, int>> stack{{r0, c0}};
    m[r0][c0] = '~';                                      // mark when pushed: no duplicates
    std::size_t maxSize = 1;
    const int dr[] = {0, 1, 0, -1}, dc[] = {1, 0, -1, 0};
    while (!stack.empty()) {
        auto [r, c] = stack.back();                       // pop the most recent cell
        stack.pop_back();
        for (int k = 0; k < 4; ++k) {
            int nr = r + dr[k], nc = c + dc[k];
            if (nr < 0 || nr >= int(m.size()) || nc < 0 || nc >= int(m[nr].size())) continue;
            if (m[nr][nc] != '.') continue;
            m[nr][nc] = '~';
            stack.push_back({nr, nc});
        }
        if (stack.size() > maxSize) maxSize = stack.size();
    }
    return int(maxSize);
}

int main() {
    const Map level = {"..#.....",
                       ".##.###.",
                       "....#...",
                       "###.#.#.",
                       "......#."};
    Map a = level, b = level;
    int maxDepth = 0;
    fillRecursive(a, 0, 0, 1, maxDepth);
    int maxStack = fillIterative(b, 0, 0);
    for (std::size_t i = 0; i < a.size(); ++i) std::printf("%s   %s\\n", a[i].c_str(), b[i].c_str());
    std::printf("same result: %s\\n", a == b ? "yes" : "no");
    std::printf("recursive: max depth %d frames;  iterative: max stack %d cells\\n", maxDepth, maxStack);

    // A big open level: 1000 x 1000 floor tiles.
    Map big(1000, std::string(1000, '.'));
    std::printf("open 1000x1000 level, iterative: max stack %d cells\\n", fillIterative(big, 0, 0));
}`,
          output: `~~#~~~~~   ~~#~~~~~
~##~###~   ~##~###~
~~~~#~~~   ~~~~#~~~
###~#~#~   ###~#~#~
~~~~~~#~   ~~~~~~#~
same result: yes
recursive: max depth 21 frames;  iterative: max stack 4 cells
open 1000x1000 level, iterative: max stack 499501 cells`,
          annotations: [
            { lines: '9-18', text: 'The recursive version: check bounds and walls, fill, recurse into four neighbours. Here it already reaches $21$ frames on a $5 \\times 8$ map. On the $1000 \\times 1000$ map it would overflow the stack.' },
            { lines: 23, text: 'Mark a cell when it is **pushed**, not when it is popped, so no cell is ever on the stack twice and the stack holds at most one entry per open cell.' },
            { lines: '27-28', text: 'Pop the most recent cell: last in, first out, like the call stack. The visiting order is not identical to the recursive version\'s (neighbours are pushed in order and marked on push), but the filled region is the same.' },
            { lines: 57, text: '$499\\,501$ pairs of `int`s is about $4$ MB, which is trivial on the heap. The same fill done recursively would need up to $10^6$ stack frames.' },
          ],
        },
        {
          type: 'steps',
          items: [
            { title: 'Push the initial problem', text: 'The arguments of the top-level call go on the stack.' },
            { title: 'Loop while the stack is non-empty', text: 'Pop one subproblem. If it is a base case, handle it and continue.' },
            { title: 'Push the subproblems', text: 'Instead of recursive calls, push the smaller subproblems. To visit them in the same order as the recursion would, push them in **reverse** order.' },
            { title: 'Results and post-work', text: 'If the recursion did work **after** its calls returned (like summing children), store a "finish this node" marker or a state field in the stack entry. Pure "visit everything" algorithms like flood fill need none.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Stack versus queue',
          text: 'Replace the `std::vector` used as a stack with a queue (first in, first out) and the same loop becomes **breadth-first**: it fills outward in rings by distance from the start. That is BFS, and a game with a flood fill is one line away from distance maps for AI. You will build both properly in the graph unit; stacks and queues themselves come in the next unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'Rewriting a recursive flood fill to use an explicit `std::vector` stack changes its time complexity from $O(\\text{cells})$ to something better.',
      answer: false,
      explanation: 'Both versions visit each open cell once and inspect its four neighbours, so both are $O(\\text{cells})$. What changes is **where the bookkeeping lives**: the explicit stack is on the heap, limited only by available memory (gigabytes), instead of on the call stack (a few megabytes). The rewrite fixes a crash, not an asymptotic cost. It often helps the constant factor too, since a pushed pair of `int`s is smaller than a full stack frame.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'A preview of divide and conquer',
      blocks: [
        {
          type: 'p',
          text: 'The safest and most powerful recursive shape is [[dm-divide-and-conquer|divide and conquer]]: split the input into parts that are a constant **fraction** of the size, solve each recursively, and combine. Because the size shrinks geometrically, the recursion depth is only $O(\\log n)$, about $20$ frames for a million elements, so stack overflow is never a concern. Two small examples:',
        },
        {
          type: 'list',
          items: [
            '`maxOf(a, lo, hi)`: the maximum of the left half and of the right half, combined with one comparison. The recurrence $T(n) = 2T(n/2) + O(1)$ gives $T(n) = O(n)$ (by the [[dm-master-theorem|master theorem]], with $a = 2 > b^d = 1$), exactly $2n - 1$ calls: no faster than a loop, but the same split shape powers merge sort.',
            '`power(x, n)`: $x^n = \\left(x^{\\lfloor n/2 \\rfloor}\\right)^2$, times $x$ if $n$ is odd. **One** recursive call per level, so $T(n) = T(n/2) + O(1) = O(\\log n)$ multiplications instead of $n - 1$.',
          ],
        },
        {
          type: 'code',
          title: 'divide_conquer.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdint>
#include <cstdio>
#include <initializer_list>
#include <vector>

long calls = 0, mults = 0;
int depth = 0, maxDepth = 0;

// Maximum of a[lo, hi): split in half, solve both halves, combine with one comparison.
int maxOf(const std::vector<int>& a, int lo, int hi) {
    ++calls;
    maxDepth = std::max(maxDepth, ++depth);
    int result;
    if (hi - lo == 1) {
        result = a[lo];                                 // base case: one element
    } else {
        int mid = lo + (hi - lo) / 2;
        result = std::max(maxOf(a, lo, mid), maxOf(a, mid, hi));
    }
    --depth;
    return result;
}

const std::uint64_t MOD = 1'000'000'007;              // work modulo a prime to avoid overflow

// x^n = (x^(n/2))^2, times x if n is odd: ONE recursive call per level.
std::uint64_t power(std::uint64_t x, std::uint64_t n) {
    if (n == 0) return 1;
    std::uint64_t half = power(x, n / 2);
    std::uint64_t r = half * half % MOD;
    ++mults;
    if (n % 2 == 1) {
        r = r * x % MOD;
        ++mults;
    }
    return r;
}

int main() {
    for (int n : {1000, 1000000}) {
        std::vector<int> a(n);
        for (int i = 0; i < n; ++i) a[i] = int(i * 7919LL % n);
        calls = 0; maxDepth = 0;
        int m = maxOf(a, 0, n);
        std::printf("maxOf, n = %7d: max = %6d, calls = %7ld, max depth = %d\\n", n, m, calls, maxDepth);
    }
    for (std::uint64_t n : {13ULL, 64ULL, 1000ULL, 1'000'000'000ULL}) {
        mults = 0;
        std::uint64_t r = power(3, n);
        std::printf("3^%-10llu mod p = %10llu, multiplications = %2ld (naive loop: %llu)\\n",
                    (unsigned long long)n, (unsigned long long)r, mults, (unsigned long long)(n - 1));
    }
}`,
          output: `maxOf, n =    1000: max =    999, calls =    1999, max depth = 11
maxOf, n = 1000000: max = 999999, calls = 1999999, max depth = 21
3^13         mod p =    1594323, multiplications =  7 (naive loop: 12)
3^64         mod p =  767713261, multiplications =  8 (naive loop: 63)
3^1000       mod p =   56888193, multiplications = 16 (naive loop: 999)
3^1000000000 mod p =  235939645, multiplications = 43 (naive loop: 999999999)`,
          annotations: [
            { lines: '15-20', text: 'Base case: a one-element range. Otherwise split at the midpoint and combine with `std::max`. `lo + (hi - lo) / 2` rather than `(lo + hi) / 2` avoids overflow for huge indices, a habit worth having.' },
            { lines: 30, text: 'The crucial line: call `power(x, n / 2)` **once** and square the result. Writing `power(x, n / 2) * power(x, n / 2)` would make two identical calls per level, $T(n) = 2T(n/2) + O(1) = O(n)$, and throw the speed-up away.' },
            { lines: '31-36', text: 'Each level does one squaring, plus one more multiplication if $n$ is odd: in total $\\lfloor \\log_2 n \\rfloor + 1$ squarings plus one multiplication per $1$ bit of $n$.' },
            { lines: 46, text: 'A million elements, yet the deepest chain of calls is $21$ frames: $\\lceil \\log_2 10^6 \\rceil + 1$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where fast power shows up',
          text: 'Modular exponentiation is the workhorse of hashing schemes (rolling hashes raise a base to a power), of cryptography (RSA and Diffie–Hellman compute $x^n \\bmod p$ with $n$ hundreds of digits long) and of matrix powers that jump a linear recurrence or a Markov chain $n$ steps ahead in $O(\\log n)$ matrix multiplications.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Using `power` from `divide_conquer.cpp` (one squaring per call with $n > 0$, plus one extra multiplication when $n$ is odd), how many multiplications does `power(3, 21)` perform?',
      label: 'multiplications $=$',
      answer: '8',
      hint: 'List the values of $n$ in the chain of calls: $21, 10, 5, \\dots$ down to $0$. Each one above $0$ costs $1$, or $2$ if it is odd.',
      explanation: 'The calls are $n = 21, 10, 5, 2, 1, 0$. The call with $n = 0$ returns $1$ without multiplying. The other five each square ($5$ multiplications), and the odd ones, $21$, $5$ and $1$, multiply by $x$ once more ($3$). Total $5 + 3 = 8$. In binary $21 = 10101_2$: $5$ bits give $5$ squarings, and three $1$ bits give $3$ extra multiplications. A naive loop would need $20$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'A preview of memoization',
      blocks: [
        {
          type: 'p',
          text: 'The Fibonacci tree was exponential because it solved the **same** subproblems over and over: $\\text{fib}(2)$ twice inside $\\text{fib}(4)$, and $\\text{fib}(2)$ is computed $F_{n-1}$ times inside $\\text{fib}(n)$. [[dm-memoization|Memoization]] stores each answer the first time it is computed and looks it up afterwards. The recursion tree collapses: every distinct subproblem is solved once.',
        },
        {
          type: 'code',
          title: 'fib_calls.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <initializer_list>
#include <vector>

long calls = 0;

long fibNaive(int n) {
    ++calls;
    if (n <= 1) return n;                           // base cases fib(0) = 0, fib(1) = 1
    return fibNaive(n - 1) + fibNaive(n - 2);
}

long fibMemo(int n, std::vector<long>& memo) {
    ++calls;
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];             // solved before: just look it up
    return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
}

int main() {
    for (int n : {5, 10, 20, 30, 35}) {
        calls = 0;
        long a = fibNaive(n);
        long naiveCalls = calls;
        calls = 0;
        std::vector<long> memo(n + 1, -1);
        long b = fibMemo(n, memo);
        std::printf("fib(%2d) = %9ld   naive calls = %10ld   memoized calls = %3ld\\n",
                    n, a == b ? a : -1, naiveCalls, calls);
    }
}`,
          output: `fib( 5) =         5   naive calls =         15   memoized calls =   9
fib(10) =        55   naive calls =        177   memoized calls =  19
fib(20) =      6765   naive calls =      21891   memoized calls =  39
fib(30) =    832040   naive calls =    2692537   memoized calls =  59
fib(35) =   9227465   naive calls =   29860703   memoized calls =  69`,
          annotations: [
            { lines: '7-11', text: 'The naive version: $2F_{n+1} - 1$ calls.' },
            { lines: 16, text: 'The memo check: an entry other than $-1$ means this $n$ was already solved.' },
            { lines: 17, text: 'Compute once, store, return. `fibMemo(n - 2)` is then always a lookup, because `fibMemo(n - 1)` already solved it.' },
            { lines: 28, text: 'The memoized version makes exactly $2n - 1$ calls: $69$ instead of almost $30$ million for $n = 35$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why exactly $2n - 1$ calls',
          text: 'Each $k$ from $n$ down to $2$ is computed for real exactly once, and that computation makes two calls: one to `fibMemo(k - 1)` (computed for real, unless $k - 1 \\le 1$) and one to `fibMemo(k - 2)` (a lookup or a base case). Counting the first call plus two calls for each of $k = 2, \\dots, n$ gives $1 + 2(n - 1) = 2n - 1$. Time is $O(n)$; space is $O(n)$ for the table plus $O(n)$ stack depth.',
        },
        {
          type: 'p',
          text: 'Memoization is the top-down half of **dynamic programming**, which gets a whole unit later in this course: identifying the subproblems, ordering them, filling a table bottom-up (no recursion, no stack depth), and the classic problems from knapsack to edit distance to AI decision making in games.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'What are the time and the extra space of the memoized `fibMemo(n)` above (counting the memo table and the call stack)?',
      options: [
        { text: 'Time $O(n)$, space $O(1)$', why: 'The time is right, but the memo vector holds $n + 1$ entries and the recursion goes $n$ frames deep, so the space is $\\Theta(n)$. A bottom-up loop keeping only the last two values would be $O(1)$ space.' },
        { text: 'Time $O(n)$, space $O(n)$', correct: true, why: '$2n - 1$ calls each doing $O(1)$ work, a table of $n + 1$ entries, and a maximum stack depth of $n$ frames.' },
        { text: 'Time $O(2^n)$, space $O(n)$', why: 'That is the naive version\'s order of growth ($\\Theta(\\varphi^n)$, which is $O(2^n)$). Memoization removes the repeated subproblems.' },
        { text: 'Time $O(n \\log n)$, space $O(\\log n)$', why: 'There is no halving here: the recursion steps from $n$ to $n - 1$, so the depth is linear, not logarithmic.' },
      ],
      explanation: 'Memoized Fibonacci solves each of the $n + 1$ subproblems once with $O(1)$ work, so time is $O(n)$. It stores $n + 1$ answers, and its first chain of calls `fibMemo(n)`, `fibMemo(n - 1)`, …, `fibMemo(1)` is $n$ frames deep, so the space is $O(n)$. The bottom-up version, `a, b = b, a + b` in a loop, keeps the $O(n)$ time and cuts space to $O(1)$: a preview of the DP unit.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Using `maxOf` from `divide_conquer.cpp` (it splits $[lo, hi)$ at `mid = lo + (hi - lo) / 2` and stops at one element), what is the maximum number of `maxOf` frames on the call stack at the same time when it is called on an array of $n = 100$ elements?',
      label: 'max depth $=$',
      answer: '8',
      hint: 'Follow the larger half each time: $100, 50, 25, 13, \\dots$ down to $1$, and count the sizes.',
      explanation: 'The deepest chain always follows a larger half: sizes $100 \\to 50 \\to 25 \\to 13 \\to 7 \\to 4 \\to 2 \\to 1$ (an odd size $s$ splits into $\\lfloor s/2 \\rfloor$ and $\\lceil s/2 \\rceil$). That is $8$ frames, equal to $\\lceil \\log_2 100 \\rceil + 1 = 7 + 1$. The program printed $11$ for $n = 1000$ and $21$ for $n = 10^6$: logarithmic depth is why divide and conquer never overflows the stack.',
    },
  ],
  takeaways: [
    'Every call pushes a stack frame (return address, parameters, locals); returning pops it. Recursive calls each get their own frame, and the most recent call always finishes first.',
    'A correct recursion has a base case, makes progress toward it, and combines correct sub-answers: the structure of an induction proof. Time follows the recursion tree\'s size; stack space follows its height.',
    'Naive Fibonacci makes $2F_{n+1} - 1 = \\Theta(\\varphi^n)$ calls with only $\\Theta(n)$ depth; memoization cuts it to $2n - 1$ calls by solving each subproblem once.',
    'Stacks are small (about $1$–$8$ MB), so recursion whose depth grows with $n$ can overflow. Tail calls can become loops, but C++ never guarantees it; rewrite them yourself.',
    'Any recursion can become a loop with an explicit heap-allocated stack; same time complexity, no stack-size limit. Swap the stack for a queue and you get breadth-first order.',
    'Divide and conquer shrinks the input by a constant factor per level, so its depth is $O(\\log n)$: fast power needs about $2\\log_2 n$ multiplications instead of $n - 1$.',
  ],
  reading: [
    {
      title: 'Jeff Erickson — Algorithms, Chapter 1: Recursion',
      url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      source: 'book',
      note: 'The "recursion fairy" view of trusting recursive calls, with Tower of Hanoi, merge sort and the recursion-tree method.',
    },
    {
      title: 'Wikipedia — Call stack',
      url: 'https://en.wikipedia.org/wiki/Call_stack',
      source: 'wikipedia',
      note: 'What goes into a stack frame and how calls and returns manipulate the stack pointer.',
    },
    {
      title: 'Wikipedia — Tail call',
      url: 'https://en.wikipedia.org/wiki/Tail_call',
      source: 'wikipedia',
      note: 'Tail calls, tail-call elimination, and which languages guarantee it (C++ does not).',
    },
    {
      title: 'Wikipedia — Flood fill',
      url: 'https://en.wikipedia.org/wiki/Flood_fill',
      source: 'wikipedia',
      note: 'Recursive, stack-based and queue-based flood fills, including the faster span-filling variant.',
    },
  ],
};
