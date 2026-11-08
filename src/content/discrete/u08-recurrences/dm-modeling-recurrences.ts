import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-modeling-recurrences',
  title: 'Modeling with Recurrence Relations',
  summary: 'Describe a quantity by how it depends on smaller cases: interest, the Tower of Hanoi, bit strings, rabbits and tilings — then unroll the recurrence and code it without exponential blow-up.',
  minutes: 20,
  objectives: [
    'Define a recurrence relation, its initial conditions and its solutions, and check whether a formula solves a recurrence',
    'Model compound interest, the Tower of Hanoi, bit strings without consecutive zeros and tilings with recurrences, justifying each by a case split on the first or last step',
    'Solve simple recurrences by forward iteration (guess and prove) and backward substitution (unrolling)',
    'Explain why naive recursive Fibonacci takes exponential time while memoization and iteration take linear time',
  ],
  steps: [
    // ------------------------------------------------------------------ 0
    {
      kind: 'concept',
      title: 'Recurrence relations and initial conditions',
      blocks: [
        {
          type: 'p',
          text: 'Many quantities are easiest to describe by how each value depends on the previous ones: this year\'s balance is last year\'s plus interest; the moves needed for $n$ disks depend on the moves for $n - 1$. You met this idea in algebra as a [[recursive-formula]] for a [[sequence]], and in the Proofs unit as a [[dm-recursive-definition]]. Now we make it a tool for counting and for analyzing algorithms.',
        },
        {
          type: 'definition',
          term: 'Recurrence relation',
          text: 'A [[dm-recurrence-relation|recurrence relation]] for a sequence $a_0, a_1, a_2, \\dots$ is an equation that expresses $a_n$ in terms of one or more earlier terms, for every $n \\ge n_0$. The **initial conditions** give the terms before the recurrence takes over. A **solution** is a sequence whose terms satisfy the recurrence; a **closed form** is an [[explicit-formula]] for $a_n$ in terms of $n$ alone.',
        },
        {
          type: 'p',
          text: 'Example: $a_n = a_{n-1} + 3$ for $n \\ge 1$, with $a_0 = 2$. The recurrence alone says "add $3$ each step"; the initial condition says where to start. Together they pin down the [[arithmetic-sequence]] $2, 5, 8, 11, \\dots$, whose closed form is $a_n = 3n + 2$.',
        },
        {
          type: 'derivation',
          title: 'Check that $a_n = 3n + 2$ solves $a_n = a_{n-1} + 3$, $a_0 = 2$',
          steps: [
            { tex: 'a_0 = 3 \\cdot 0 + 2 = 2 \\;✓', why: 'The initial condition holds.' },
            { tex: 'a_{n-1} + 3 = \\big(3(n-1) + 2\\big) + 3', why: 'Substitute the formula, with $n - 1$ in place of $n$, into the right side of the recurrence.' },
            { tex: '= 3n - 3 + 2 + 3 = 3n + 2 = a_n \\;✓', why: 'Simplify. The right side equals the formula for $a_n$, for **every** $n \\ge 1$: the recurrence holds.' },
          ],
          result: 'Both checks pass, so $a_n = 3n + 2$ is the solution. (By induction, a sequence that satisfies a recurrence and its initial conditions is unique.)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why initial conditions are not optional',
          text: 'The recurrence $a_n = a_{n-1} + 3$ is satisfied by $2, 5, 8, \\dots$ **and** by $0, 3, 6, \\dots$ **and** by $-7, -4, -1, \\dots$: one sequence for every starting value. The recurrence is like an inductive step and the initial conditions are the base cases. A recurrence that reaches back $k$ terms (like $a_n = a_{n-1} + a_{n-2}$, which reaches back $2$) needs $k$ initial conditions, just as [[dm-strong-induction]] with two-step-back reasoning needs two base cases.',
        },
      ],
    },
    // ------------------------------------------------------------------ 1
    {
      kind: 'truefalse',
      prompt: 'The recurrence $a_n = 2a_{n-1} + 1$ (for $n \\ge 1$) has exactly one solution.',
      answer: false,
      explanation: 'Without an initial condition there is one solution for every choice of $a_0$. For example $a_0 = 0$ gives $0, 1, 3, 7, 15, \\dots$ and $a_0 = 1$ gives $1, 3, 7, 15, 31, \\dots$; in general $a_n = (a_0 + 1)2^n - 1$. Only the recurrence **plus** the initial condition $a_0$ determines a unique sequence.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A sequence satisfies $a_n = a_{n-1} + 2a_{n-2}$ for $n \\ge 2$, with $a_0 = 2$ and $a_1 = 1$. Compute $a_5$.',
      label: '$a_5 =$',
      answer: '31',
      hint: 'Build up one term at a time: $a_2 = a_1 + 2a_0$, then $a_3$, $a_4$, $a_5$.',
      explanation: '$a_2 = 1 + 2 \\cdot 2 = 5$, $a_3 = 5 + 2 \\cdot 1 = 7$, $a_4 = 7 + 2 \\cdot 5 = 17$, $a_5 = 17 + 2 \\cdot 7 = 31$. Each term needs the **two** before it, which is why this recurrence needs two initial conditions. (Next lesson you will find its closed form, $a_n = 2^n + (-1)^n$; check: $2^5 - 1 = 31$.)',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Modeling growth: compound interest',
      blocks: [
        {
          type: 'p',
          text: 'To model a situation with a recurrence, ask: **how does the state at step $n$ follow from the state at step $n - 1$?** Suppose you deposit \\$1000 at $5\\%$ interest compounded yearly. Each year the balance is multiplied by $1.05$ ([[compound-interest]]).',
        },
        {
          type: 'math',
          tex: 'P_n = 1.05\\,P_{n-1} \\quad (n \\ge 1), \\qquad P_0 = 1000',
          caption: 'Next year\'s balance is this year\'s balance plus $5\\%$ of it.',
        },
        {
          type: 'derivation',
          title: 'Solve by iteration (unroll down to the initial condition)',
          steps: [
            { tex: 'P_n = 1.05\\,P_{n-1}', why: 'The recurrence.' },
            { tex: '= 1.05\\,(1.05\\,P_{n-2}) = 1.05^2\\,P_{n-2}', why: 'Apply the recurrence to $P_{n-1}$.' },
            { tex: '= 1.05^3\\,P_{n-3} = \\cdots = 1.05^n\\,P_0', why: 'Each substitution adds one factor of $1.05$; after $n$ of them we reach $P_0$.' },
            { tex: '= 1000 \\cdot 1.05^n', why: 'Use the initial condition $P_0 = 1000$.' },
          ],
          result: 'A recurrence of the form $a_n = r\\,a_{n-1}$ always gives a [[geometric-sequence]]: $a_n = a_0 r^n$.',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0, 6000],
          xStep: 2,
          yStep: 1000,
          functions: [{ expr: '1000(1 + i/100)^x', label: '$P_n = 1000(1 + i/100)^n$', color: 'green' }],
          points: [
            { x: 0, y: 1000, label: 'P₀' },
            { x: 5, y: '1000(1 + i/100)^5', label: 'P₅' },
            { x: 10, y: '1000(1 + i/100)^10', label: 'P₁₀' },
            { x: 15, y: '1000(1 + i/100)^15', label: 'P₁₅' },
            { x: 20, y: '1000(1 + i/100)^20', label: 'P₂₀' },
          ],
          sliders: [{ name: 'i', min: 0, max: 10, step: 0.5, value: 5, label: 'interest rate $i$ (%)' }],
          readouts: [{ label: 'balance after 20 years:', expr: '1000(1 + i/100)^20', digits: 2 }],
          caption: 'The sequence only exists at whole years; the curve just connects them (dots mark every fifth year). At $5\\%$ the money doubles in about $14$ years; at $10\\%$, in about $7$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Recurrences in game design',
          text: 'Designers often specify progression recursively. "Each level needs $10\\%$ more XP than the last, plus 50" is $x_n = 1.1\\,x_{n-1} + 50$. "A spawner doubles its enemies every wave" is $e_n = 2e_{n-1}$. Writing the recurrence down — and solving it — tells you whether level 50 needs a sensible amount of XP or a billion, before a playtester finds out.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'With $P_n = 1.05\\,P_{n-1}$ and $P_0 = 1000$ (dollars), what is $P_3$? Give the exact value or round to the nearest cent.',
      label: '$P_3 =$',
      answer: '1157.625',
      tolerance: 0.01,
      unit: 'dollars',
      hint: '$P_3 = 1000 \\cdot 1.05^3$.',
      explanation: 'Iterating: $P_1 = 1050$, $P_2 = 1102.50$, $P_3 = 1157.625 \\approx \\$1157.63$. The closed form agrees: $1000 \\cdot 1.05^3 = 1000 \\cdot 1.157625$. Notice the yearly gain grows ($50$, then $52.50$, then $55.125$) because interest is earned on interest.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The Tower of Hanoi',
      blocks: [
        {
          type: 'p',
          text: 'The [[dm-tower-of-hanoi|Tower of Hanoi]] has three pegs and $n$ disks of different sizes, stacked largest-at-the-bottom on peg A. Move the whole stack to peg C, one disk at a time, never placing a larger disk on a smaller one. Let $H_n$ be the minimum number of moves.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<line x1=\"15\" y1=\"100\" x2=\"235\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"3\"/>\n<line x1=\"50\" y1=\"100\" x2=\"50\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"50\" y=\"115\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">A</text>\n<rect x=\"18.0\" y=\"87\" width=\"64\" height=\"12\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.85\" stroke-width=\"1\"/>\n<rect x=\"25.0\" y=\"74\" width=\"50\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<rect x=\"31.0\" y=\"61\" width=\"38\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<rect x=\"37.0\" y=\"48\" width=\"26\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<line x1=\"125\" y1=\"100\" x2=\"125\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"125\" y=\"115\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">B</text>\n<line x1=\"200\" y1=\"100\" x2=\"200\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"200\" y=\"115\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">C</text>\n<text x=\"125\" y=\"136\" font-size=\"12\" text-anchor=\"middle\">1. Start: n disks on A</text>\n<line x1=\"265\" y1=\"100\" x2=\"485\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"100\" x2=\"300\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"300\" y=\"115\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">A</text>\n<rect x=\"268.0\" y=\"87\" width=\"64\" height=\"12\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.85\" stroke-width=\"1\"/>\n<line x1=\"375\" y1=\"100\" x2=\"375\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"375\" y=\"115\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">B</text>\n<rect x=\"350.0\" y=\"87\" width=\"50\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<rect x=\"356.0\" y=\"74\" width=\"38\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<rect x=\"362.0\" y=\"61\" width=\"26\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<line x1=\"450\" y1=\"100\" x2=\"450\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"450\" y=\"115\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">C</text>\n<text x=\"375\" y=\"136\" font-size=\"12\" text-anchor=\"middle\">2. Move n−1 disks A → B: H(n−1) moves</text>\n<line x1=\"15\" y1=\"250\" x2=\"235\" y2=\"250\" stroke=\"currentColor\" stroke-width=\"3\"/>\n<line x1=\"50\" y1=\"250\" x2=\"50\" y2=\"178\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"50\" y=\"265\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">A</text>\n<line x1=\"125\" y1=\"250\" x2=\"125\" y2=\"178\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"125\" y=\"265\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">B</text>\n<rect x=\"100.0\" y=\"237\" width=\"50\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<rect x=\"106.0\" y=\"224\" width=\"38\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<rect x=\"112.0\" y=\"211\" width=\"26\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<line x1=\"200\" y1=\"250\" x2=\"200\" y2=\"178\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"200\" y=\"265\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">C</text>\n<rect x=\"168.0\" y=\"237\" width=\"64\" height=\"12\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.85\" stroke-width=\"1\"/>\n<text x=\"125\" y=\"286\" font-size=\"12\" text-anchor=\"middle\">3. Move the largest disk A → C: 1 move</text>\n<line x1=\"265\" y1=\"250\" x2=\"485\" y2=\"250\" stroke=\"currentColor\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"250\" x2=\"300\" y2=\"178\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"300\" y=\"265\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">A</text>\n<line x1=\"375\" y1=\"250\" x2=\"375\" y2=\"178\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"375\" y=\"265\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">B</text>\n<line x1=\"450\" y1=\"250\" x2=\"450\" y2=\"178\" stroke=\"currentColor\" stroke-width=\"3\" class=\"s-gray\"/>\n<text x=\"450\" y=\"265\" font-size=\"11\" text-anchor=\"middle\" class=\"t-gray\">C</text>\n<rect x=\"418.0\" y=\"237\" width=\"64\" height=\"12\" rx=\"3\" class=\"f-orange s-orange\" fill-opacity=\"0.85\" stroke-width=\"1\"/>\n<rect x=\"425.0\" y=\"224\" width=\"50\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<rect x=\"431.0\" y=\"211\" width=\"38\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<rect x=\"437.0\" y=\"198\" width=\"26\" height=\"12\" rx=\"3\" class=\"f-blue s-blue\" fill-opacity=\"0.6\" stroke-width=\"1\"/>\n<text x=\"375\" y=\"286\" font-size=\"12\" text-anchor=\"middle\">4. Move n−1 disks B → C: H(n−1) moves</text>\n</svg>",
          alt: 'Four panels: n disks start on peg A; the top n minus 1 disks are moved to peg B; the largest disk is moved from A to C; the n minus 1 disks are moved from B onto C.',
          caption: 'The recursive strategy. Moving the $n - 1$ smaller disks is the same puzzle with one disk fewer — it does not matter that a larger disk sits underneath, since every disk may be placed on it.',
        },
        {
          type: 'p',
          text: 'The largest disk can only move when all $n - 1$ others are stacked on the third peg, out of its way. So *any* solution must, at some point, move $n - 1$ disks off it ($H_{n-1}$ moves at least), move it (at least $1$), and later move the $n - 1$ disks back on top ($H_{n-1}$ more). The strategy in the figure does exactly that, so it is optimal:',
        },
        {
          type: 'math',
          tex: 'H_n = 2H_{n-1} + 1 \\quad (n \\ge 2), \\qquad H_1 = 1',
        },
        {
          type: 'derivation',
          title: 'Solve $H_n = 2H_{n-1} + 1$, $H_1 = 1$, by backward substitution',
          steps: [
            { tex: 'H_n = 2H_{n-1} + 1', why: 'The recurrence.' },
            { tex: '= 2(2H_{n-2} + 1) + 1 = 2^2 H_{n-2} + 2 + 1', why: 'Substitute $H_{n-1} = 2H_{n-2} + 1$ and distribute.' },
            { tex: '= 2^3 H_{n-3} + 2^2 + 2 + 1', why: 'Once more: each step doubles everything so far and adds $1$.' },
            { tex: '= 2^{n-1} H_1 + 2^{n-2} + \\cdots + 2 + 1', why: 'After $n - 1$ substitutions we reach $H_1$.' },
            { tex: '= 2^{n-1} + 2^{n-2} + \\cdots + 2 + 1 = 2^n - 1', why: 'Use $H_1 = 1$; the sum of the [[geometric-series]] $1 + 2 + \\cdots + 2^{n-1}$ is $2^n - 1$.' },
          ],
          result: '$H_n = 2^n - 1$. Check: $H_1 = 1$, $H_2 = 3$, $H_3 = 7$ — the three-disk puzzle takes $7$ moves.',
        },
        {
          type: 'code',
          title: 'hanoi.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <initializer_list>

long moves = 0;

// Move n disks from peg 'from' to peg 'to', using 'via' as the spare.
void hanoi(int n, char from, char to, char via, bool print) {
    if (n == 0) return;                      // nothing to move
    hanoi(n - 1, from, via, to, print);      // H(n-1): clear the top n-1 disks
    ++moves;                                 // 1: move the largest disk
    if (print) std::printf("disk %d: %c -> %c\\n", n, from, to);
    hanoi(n - 1, via, to, from, print);      // H(n-1): restack on top of it
}

int main() {
    hanoi(3, 'A', 'C', 'B', true);
    std::printf("3 disks: %ld moves\\n", moves);
    for (int n : {10, 20}) {
        moves = 0;
        hanoi(n, 'A', 'C', 'B', false);
        std::printf("%d disks: %ld moves\\n", n, moves);
    }
}`,
          output: `disk 1: A -> C
disk 2: A -> B
disk 1: C -> B
disk 3: A -> C
disk 1: B -> A
disk 2: B -> C
disk 1: A -> C
3 disks: 7 moves
10 disks: 1023 moves
20 disks: 1048575 moves`,
          annotations: [
            { lines: '9-12', text: 'The code **is** the recurrence: two recursive calls on $n - 1$ disks around one move, so $H_n = 2H_{n-1} + 1$.' },
            { lines: 8, text: 'Base case $n = 0$ (zero moves) also works: $H_1 = 2H_0 + 1 = 1$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'The end of the world',
          text: 'Édouard Lucas published the puzzle in 1883 with a legend: monks moving $64$ golden disks, and the world ends when they finish. At one move per second that takes $2^{64} - 1 \\approx 1.8 \\times 10^{19}$ seconds, about $585$ billion years — roughly $40$ times the current age of the universe.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'What is the minimum number of moves to solve the Tower of Hanoi with $10$ disks?',
      label: '$H_{10} =$',
      answer: '1023',
      hint: 'Use the closed form $H_n = 2^n - 1$, or keep applying $H_n = 2H_{n-1} + 1$.',
      explanation: '$H_{10} = 2^{10} - 1 = 1024 - 1 = 1023$. Each extra disk doubles the work and adds one: $H_9 = 511$ and $2 \\cdot 511 + 1 = 1023$. The program above confirms it.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Counting with recurrences: rabbits and bit strings',
      blocks: [
        {
          type: 'p',
          text: 'Recurrences are a counting technique: to count objects of size $n$, split them into cases by their **last** (or first) piece, and recognize each case as a smaller instance of the same problem.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Fibonacci\'s rabbits (1202)',
          text: 'Leonardo of Pisa asked: a newborn pair of rabbits is placed on an island. A pair breeds starting in its second month, and from then on produces one new pair every month; no rabbit dies. How many pairs are there after $n$ months? The pairs alive in month $n$ are the pairs from month $n - 1$ (nobody dies) **plus** one newborn pair for every pair at least two months old — that is, every pair that existed in month $n - 2$. So $f_n = f_{n-1} + f_{n-2}$ with $f_1 = f_2 = 1$: the [[dm-fibonacci-numbers|Fibonacci numbers]] $1, 1, 2, 3, 5, 8, 13, \\dots$',
        },
        {
          type: 'p',
          text: 'Now a CS-flavoured count. Let $a_n$ be the number of **bit strings of length $n$ with no two consecutive $0$s**. For $n = 3$ the valid strings are `010`, `011`, `101`, `110`, `111` (the other three, `000`, `001`, `100`, contain `00`), so $a_3 = 5$.',
        },
        {
          type: 'derivation',
          title: 'Find a recurrence for $a_n$ by splitting on the last bit ($n \\ge 3$)',
          steps: [
            { tex: '\\text{ends in } 1: \\quad \\underbrace{\\;\\cdots\\cdots\\;}_{\\text{valid, length } n-1} 1 \\quad \\to \\quad a_{n-1} \\text{ strings}', why: 'Appending a $1$ can never create `00`, and removing the final $1$ from a valid string leaves a valid string. So these correspond exactly to the valid strings of length $n - 1$.' },
            { tex: '\\text{ends in } 0: \\quad \\underbrace{\\;\\cdots\\cdots\\;}_{\\text{valid, length } n-2} 1\\,0 \\quad \\to \\quad a_{n-2} \\text{ strings}', why: 'The bit before the final $0$ cannot be $0$, so the string ends in `10`. Removing `10` leaves any valid string of length $n - 2$, and appending `10` to a valid string is always valid.' },
            { tex: 'a_n = a_{n-1} + a_{n-2}', why: 'The two cases do not overlap (the last bit differs) and cover everything: the sum rule.' },
            { tex: 'a_1 = 2, \\quad a_2 = 3', why: 'Initial conditions by listing: length $1$: `0`, `1`; length $2$: `01`, `10`, `11` (not `00`).' },
          ],
          result: '$a_n$: $2, 3, 5, 8, 13, 21, \\dots$ — the Fibonacci numbers again, shifted: $a_n = f_{n+2}$.',
        },
        {
          type: 'code',
          title: 'no_double_zero.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    long a1 = 2, a2 = 3;                            // a(1), a(2)
    for (int n = 1; n <= 8; ++n) {
        // Brute force: try all 2^n bit strings, stored as the low n bits of m.
        unsigned full = (1u << n) - 1;
        long brute = 0;
        for (unsigned m = 0; m <= full; ++m) {
            unsigned zeros = ~m & full;             // 1 wherever m has a 0
            if ((zeros & (zeros >> 1)) == 0) ++brute;  // no two adjacent zeros
        }
        // Recurrence: a(n) = a(n-1) + a(n-2).
        long rec;
        if (n == 1) rec = a1;
        else if (n == 2) rec = a2;
        else { rec = a1 + a2; a1 = a2; a2 = rec; }
        std::printf("n = %2d  brute force = %4ld  recurrence = %4ld\\n", n, brute, rec);
    }
}`,
          output: `n =  1  brute force =    2  recurrence =    2
n =  2  brute force =    3  recurrence =    3
n =  3  brute force =    5  recurrence =    5
n =  4  brute force =    8  recurrence =    8
n =  5  brute force =   13  recurrence =   13
n =  6  brute force =   21  recurrence =   21
n =  7  brute force =   34  recurrence =   34
n =  8  brute force =   55  recurrence =   55`,
          annotations: [
            { lines: 10, text: 'Flip the bits (inside the low $n$ bits) so that the zeros of `m` become ones.' },
            { lines: 11, text: 'Shifting by one lines each bit up with its neighbour; the AND is nonzero exactly when two adjacent positions are both zeros in `m`.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student tries to count length-$n$ bit strings with no two consecutive $0$s. Tap the first wrong line.',
      lines: [
        'Let $a_n$ be the number of such strings of length $n$.',
        'A valid string ending in $1$ is a valid string of length $n - 1$ followed by $1$, so there are $a_{n-1}$ of them.',
        'A valid string ending in $0$ is a valid string of length $n - 1$ followed by $0$, so there are $a_{n-1}$ of them.',
        'So $a_n = 2a_{n-1}$.',
        'With $a_1 = 2$, we get $a_n = 2^n$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 overcounts: appending $0$ to a valid string that already ends in $0$ creates `00`. A valid string ending in $0$ must end in `10`, so it is a valid string of length $n - 2$ followed by `10`: $a_{n-2}$ strings. The correct recurrence is $a_n = a_{n-1} + a_{n-2}$. Sanity check: the claimed answer $2^n$ counts **all** bit strings, which cannot be right since `00` is excluded ($a_2 = 3$, not $4$).',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Counting tilings',
      blocks: [
        {
          type: 'p',
          text: 'How many ways can you tile a $2 \\times n$ board with $1 \\times 2$ dominoes? Call it $t_n$. This is a toy version of real questions in procedural generation: how many ways can a corridor of length $n$ be filled from a set of modular pieces?',
        },
        {
          type: 'p',
          text: 'Split on how the **leftmost column** is covered. Either one vertical domino fills it, leaving a $2 \\times (n - 1)$ board: $t_{n-1}$ ways. Or the top-left square is covered by a horizontal domino; then the square below it can only be covered by another horizontal domino directly beneath, and together they fill the first two columns, leaving a $2 \\times (n - 2)$ board: $t_{n-2}$ ways.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 500 120\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"10\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-blue f-blue\" fill-opacity=\"0.45\" stroke-width=\"1.5\"/>\n<rect x=\"32\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"54\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"76\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"110\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-blue f-blue\" fill-opacity=\"0.45\" stroke-width=\"1.5\"/>\n<rect x=\"132\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"154\" y=\"36\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"154\" y=\"58\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"210\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-blue f-blue\" fill-opacity=\"0.45\" stroke-width=\"1.5\"/>\n<rect x=\"232\" y=\"36\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"232\" y=\"58\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"276\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"318\" y=\"36\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-orange f-orange\" fill-opacity=\"0.45\" stroke-width=\"1.5\"/>\n<rect x=\"318\" y=\"58\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-orange f-orange\" fill-opacity=\"0.45\" stroke-width=\"1.5\"/>\n<rect x=\"362\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"384\" y=\"36\" width=\"18\" height=\"40\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"418\" y=\"36\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-orange f-orange\" fill-opacity=\"0.45\" stroke-width=\"1.5\"/>\n<rect x=\"418\" y=\"58\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-orange f-orange\" fill-opacity=\"0.45\" stroke-width=\"1.5\"/>\n<rect x=\"462\" y=\"36\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<rect x=\"462\" y=\"58\" width=\"40\" height=\"18\" rx=\"3\" class=\"s-gray f-gray\" fill-opacity=\"0.12\" stroke-width=\"1.5\"/>\n<text x=\"152\" y=\"18\" font-size=\"12\" text-anchor=\"middle\" class=\"t-blue\">starts with a vertical domino: t(3) = 3</text>\n<line x1=\"8\" y1=\"24\" x2=\"296\" y2=\"24\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1\"/>\n<text x=\"405\" y=\"18\" font-size=\"12\" text-anchor=\"middle\" class=\"t-orange\">starts with two horizontals: t(2) = 2</text>\n<line x1=\"316\" y1=\"24\" x2=\"496\" y2=\"24\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1\"/>\n<text x=\"250\" y=\"108\" font-size=\"12\" text-anchor=\"middle\">t(4) = t(3) + t(2) = 5 tilings of a 2 × 4 board</text>\n</svg>",
          alt: 'The five domino tilings of a 2 by 4 board, grouped into three that start with a vertical domino and two that start with a pair of horizontal dominoes.',
          caption: 'All tilings of a $2 \\times 4$ board, sorted by their first piece (highlighted). The gray remainders are exactly the tilings of $2 \\times 3$ and $2 \\times 2$ boards.',
        },
        {
          type: 'math',
          tex: 't_n = t_{n-1} + t_{n-2} \\quad (n \\ge 3), \\qquad t_1 = 1,\\ t_2 = 2',
          caption: 'So $t_n$ runs $1, 2, 3, 5, 8, 13, \\dots$ — Fibonacci once more ($t_n = f_{n+1}$).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The modeling recipe',
          text: '**(1)** Define $a_n$ precisely in words. **(2)** Split the objects of size $n$ into non-overlapping cases by their first or last piece. **(3)** Show each case is in one-to-one correspondence with a smaller instance — this is where mistakes hide, so check both directions. **(4)** Add the cases (sum rule). **(5)** Find enough initial conditions by direct counting, and check a small case by brute force.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why so much Fibonacci?',
          text: 'Any count where each object ends with a piece of size $1$ or a piece of size $2$, with one choice for each, gives $a_n = a_{n-1} + a_{n-2}$. Change the menu and the recurrence changes with it: two colours of size-$1$ piece give $a_n = 2a_{n-1} + a_{n-2}$; pieces of size $1$, $2$ and $3$ give $a_n = a_{n-1} + a_{n-2} + a_{n-3}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'A $1 \\times n$ strip is tiled with red $1 \\times 1$ squares, blue $1 \\times 1$ squares, and $1 \\times 2$ dominoes. Let $b_n$ be the number of tilings, with $b_0 = 1$ (the empty tiling) and $b_1 = 2$. Find $b_4$.',
      label: '$b_4 =$',
      answer: '29',
      hint: 'Split on the last piece: a red square, a blue square, or a domino. That gives $b_n = 2b_{n-1} + b_{n-2}$.',
      explanation: 'The last piece is a red square ($b_{n-1}$ ways to tile the rest), a blue square ($b_{n-1}$ ways), or a domino ($b_{n-2}$ ways), so $b_n = 2b_{n-1} + b_{n-2}$. Then $b_2 = 2 \\cdot 2 + 1 = 5$, $b_3 = 2 \\cdot 5 + 2 = 12$, $b_4 = 2 \\cdot 12 + 5 = 29$. (Check $b_2$ directly: RR, RB, BR, BB, and one domino: $5$ ✓.)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Solving by iteration: guess, then prove',
      blocks: [
        {
          type: 'p',
          text: 'Iteration comes in two flavours. **Forward**: compute the first several terms from the initial conditions, spot a pattern, then prove it by [[dm-mathematical-induction|induction]]. **Backward**: substitute the recurrence into itself (as for $H_n$) until you reach the initial condition, then simplify the sum that builds up.',
        },
        {
          type: 'derivation',
          title: 'Forward: $a_n = a_{n-1} + 2n - 1$, $a_0 = 0$',
          steps: [
            { tex: 'a_1 = 0 + 1 = 1,\\ a_2 = 1 + 3 = 4,\\ a_3 = 4 + 5 = 9,\\ a_4 = 9 + 7 = 16', why: 'Compute terms directly from the recurrence.' },
            { tex: '\\text{Guess: } a_n = n^2', why: 'The values are perfect squares. A guess is not a proof — yet.' },
            { tex: 'a_0 = 0 = 0^2 \\;✓', why: 'Base case.' },
            { tex: 'a_n = a_{n-1} + 2n - 1 = (n-1)^2 + 2n - 1 = n^2 \\;✓', why: 'Inductive step: assume $a_{n-1} = (n-1)^2$ and expand: $n^2 - 2n + 1 + 2n - 1 = n^2$.' },
          ],
          result: '$a_n = n^2$: the sum of the first $n$ odd numbers is $n^2$.',
        },
        {
          type: 'derivation',
          title: 'Backward: saving \\$100 a year at $5\\%$, $S_n = 1.05\\,S_{n-1} + 100$, $S_0 = 0$',
          steps: [
            { tex: 'S_n = 100 + 1.05\\,S_{n-1}', why: 'Each year: grow the old balance by $5\\%$, then deposit \\$100.' },
            { tex: '= 100 + 1.05\\,(100 + 1.05\\,S_{n-2}) = 100 + 100(1.05) + 1.05^2\\,S_{n-2}', why: 'Substitute for $S_{n-1}$ and distribute.' },
            { tex: '= 100\\big(1 + 1.05 + 1.05^2 + \\cdots + 1.05^{n-1}\\big) + 1.05^n S_0', why: 'Continue until $S_0$: each deposit has grown for a different number of years.' },
            { tex: '= 100 \\cdot \\frac{1.05^n - 1}{1.05 - 1} = 2000\\,(1.05^n - 1)', why: 'Use $S_0 = 0$ and the geometric sum $\\sum_{j=0}^{n-1} r^j = \\frac{r^n - 1}{r - 1}$.' },
          ],
          result: 'Check: $S_1 = 2000(0.05) = 100$ ✓ and $S_2 = 2000(0.1025) = 205$ ✓ (that is $1.05 \\cdot 100 + 100$).',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Where iteration runs out of steam',
          text: 'Iteration works beautifully when $a_n$ depends on **one** earlier term. For $f_n = f_{n-1} + f_{n-2}$, each substitution splits into two terms, and the expansion becomes a tree with no obvious pattern. The next lesson gives a systematic method — the characteristic equation — that handles every recurrence of that shape.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'expr',
      prompt: 'Solve $a_n = a_{n-1} + n$ for $n \\ge 1$, with $a_0 = 1$. Give $a_n$ as a formula in $n$.',
      label: '$a_n =$',
      answer: '1 + n(n+1)/2',
      answerTex: '1 + \\frac{n(n+1)}{2}',
      variables: ['n'],
      domain: [0, 10],
      hint: 'Unroll: $a_n = a_0 + 1 + 2 + \\cdots + n$.',
      explanation: 'Backward substitution gives $a_n = a_{n-1} + n = a_{n-2} + (n-1) + n = \\cdots = a_0 + (1 + 2 + \\cdots + n) = 1 + \\frac{n(n+1)}{2}$. Check: $a_0 = 1$, $a_1 = 2$, $a_2 = 4$, $a_3 = 7$, and the formula gives $1, 2, 4, 7$ ✓. (This counts the maximum number of pieces you can cut a pizza into with $n$ straight cuts.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Recursion, memoization, iteration',
      blocks: [
        {
          type: 'p',
          text: 'A recurrence translates directly into a recursive function — and for Fibonacci that direct translation is a disaster. `fib(n)` calls `fib(n-1)` and `fib(n-2)`, which call their own pairs, and the same values get recomputed over and over.',
        },
        {
          type: 'figure',
          svg: "<svg viewBox=\"0 0 500 272\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"43.6\" y1=\"188.2\" x2=\"29.3\" y2=\"209.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"62.2\" y1=\"188.2\" x2=\"76.4\" y2=\"209.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"90.2\" y1=\"136.1\" x2=\"64.8\" y2=\"161.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"114.0\" y1=\"136.1\" x2=\"139.5\" y2=\"161.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"240.7\" y1=\"138.2\" x2=\"226.4\" y2=\"159.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"259.3\" y1=\"138.2\" x2=\"273.6\" y2=\"159.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"162.0\" y1=\"83.5\" x2=\"116.2\" y2=\"114.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"190.2\" y1=\"83.5\" x2=\"235.9\" y2=\"114.5\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"372.1\" y1=\"138.2\" x2=\"357.9\" y2=\"159.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"390.7\" y1=\"138.2\" x2=\"405.0\" y2=\"159.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"418.8\" y1=\"86.1\" x2=\"393.3\" y2=\"111.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"442.6\" y1=\"86.1\" x2=\"468.1\" y2=\"111.9\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"287.6\" y1=\"30.2\" x2=\"191.9\" y2=\"67.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><line x1=\"319.2\" y1=\"30.2\" x2=\"414.9\" y2=\"67.8\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"303.4\" cy=\"24\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"303.4\" y=\"29\" text-anchor=\"middle\" font-size=\"14\">F₅</text><circle cx=\"176.1\" cy=\"74\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"176.1\" y=\"79\" text-anchor=\"middle\" font-size=\"14\">F₄</text><circle cx=\"102.1\" cy=\"124\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-purple\"/><text x=\"102.1\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" class=\"t-purple\">F₃</text><circle cx=\"52.9\" cy=\"174\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"52.9\" y=\"179\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">F₂</text><circle cx=\"20\" cy=\"224\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"20\" y=\"229\" text-anchor=\"middle\" font-size=\"14\">F₁</text><circle cx=\"85.7\" cy=\"224\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"85.7\" y=\"229\" text-anchor=\"middle\" font-size=\"14\">F₀</text><circle cx=\"151.4\" cy=\"174\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"151.4\" y=\"179\" text-anchor=\"middle\" font-size=\"14\">F₁</text><circle cx=\"250\" cy=\"124\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"250\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">F₂</text><circle cx=\"217.1\" cy=\"174\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"217.1\" y=\"179\" text-anchor=\"middle\" font-size=\"14\">F₁</text><circle cx=\"282.9\" cy=\"174\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"282.9\" y=\"179\" text-anchor=\"middle\" font-size=\"14\">F₀</text><circle cx=\"430.7\" cy=\"74\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-purple\"/><text x=\"430.7\" y=\"79\" text-anchor=\"middle\" font-size=\"14\" class=\"t-purple\">F₃</text><circle cx=\"381.4\" cy=\"124\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" class=\"s-orange\"/><text x=\"381.4\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">F₂</text><circle cx=\"348.6\" cy=\"174\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"348.6\" y=\"179\" text-anchor=\"middle\" font-size=\"14\">F₁</text><circle cx=\"414.3\" cy=\"174\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"414.3\" y=\"179\" text-anchor=\"middle\" font-size=\"14\">F₀</text><circle cx=\"480\" cy=\"124\" r=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"480\" y=\"129\" text-anchor=\"middle\" font-size=\"14\">F₁</text><text x=\"250\" y=\"266\" text-anchor=\"middle\" font-size=\"12\">15 calls to compute F₅: F₃ is computed 2 times, F₂ 3 times, F₁ 5 times</text></svg>\n",
          alt: 'The call tree of naive recursive Fibonacci for F5: 15 calls. F3 appears twice, F2 three times, F1 five times and F0 three times.',
          caption: 'The call tree of naive `fib(5)`. The right subtree (rooted at $F_3$) repeats work already done inside the left subtree, and the waste compounds at every level.',
        },
        {
          type: 'derivation',
          title: 'How many calls does naive `fib(n)` make?',
          steps: [
            { tex: 'C_0 = C_1 = 1, \\qquad C_n = 1 + C_{n-1} + C_{n-2}', why: 'One call for $n$ itself, plus all the calls made by the two recursive calls. The running time obeys a recurrence too.' },
            { tex: 'C_n + 1 = (C_{n-1} + 1) + (C_{n-2} + 1)', why: 'Add $1$ to both sides and split it: now $C_n + 1$ satisfies the Fibonacci recurrence exactly.' },
            { tex: 'C_n + 1 = 2F_{n+1} \\implies C_n = 2F_{n+1} - 1', why: 'Both sides satisfy the same recurrence, and they agree at $n = 0$ and $n = 1$ ($2 = 2F_1$, $2 = 2F_2$), so they agree forever.' },
          ],
          result: 'Naive recursion makes $2F_{n+1} - 1$ calls: it grows like $F_n$ itself, which next lesson shows is about $1.618^n$. Exponential.',
        },
        {
          type: 'p',
          text: '**[[dm-memoization|Memoization]]** fixes this by remembering each answer the first time it is computed. Every `fib(k)` for $k \\le n$ is then evaluated once, so the work is $\\Theta(n)$. **Iteration** goes further: compute bottom-up from $F_0, F_1$, keeping only the last two values — $\\Theta(n)$ time and $\\Theta(1)$ space, no recursion at all. This "solve small subproblems once, reuse their answers" idea is the heart of **dynamic programming**.',
        },
        {
          type: 'code',
          title: 'fibonacci.cpp',
          runnable: true,
          code: `#include <cstdint>
#include <cstdio>
#include <vector>

long calls = 0;

// 1) Straight from the recurrence: exponential time.
std::uint64_t fibNaive(int n) {
    ++calls;
    if (n < 2) return n;                           // F(0) = 0, F(1) = 1
    return fibNaive(n - 1) + fibNaive(n - 2);
}

// 2) Memoized: same recursion, but each F(k) is computed once.
std::uint64_t fibMemo(int n, std::vector<std::uint64_t>& memo) {
    ++calls;
    if (n < 2) return n;
    if (memo[n] != 0) return memo[n];              // already known: O(1)
    return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
}

// 3) Iterative: keep only the last two terms. O(n) time, O(1) space.
std::uint64_t fibIter(int n) {
    std::uint64_t a = 0, b = 1;                    // a = F(i), b = F(i+1)
    for (int i = 0; i < n; ++i) {
        std::uint64_t next = a + b;
        a = b;
        b = next;
    }
    return a;
}

int main() {
    for (int n : {10, 20, 30}) {
        calls = 0;
        std::uint64_t f = fibNaive(n);
        long naiveCalls = calls;

        std::vector<std::uint64_t> memo(n + 1, 0);
        calls = 0;
        fibMemo(n, memo);

        std::printf("F(%d) = %llu   naive calls: %8ld   memo calls: %ld\\n",
                    n, (unsigned long long)f, naiveCalls, calls);
    }
    std::printf("F(90) = %llu (iterative, 90 additions)\\n", (unsigned long long)fibIter(90));
}`,
          output: `F(10) = 55   naive calls:      177   memo calls: 19
F(20) = 6765   naive calls:    21891   memo calls: 39
F(30) = 832040   naive calls:  2692537   memo calls: 59
F(90) = 2880067194370816120 (iterative, 90 additions)`,
          annotations: [
            { lines: '8-12', text: 'A literal transcription of $F_n = F_{n-1} + F_{n-2}$. Calls: $2F_{n+1} - 1$, e.g. $2 \\cdot 89 - 1 = 177$ for $n = 10$.' },
            { lines: 18, text: 'Memoization: $F_k > 0$ for $k \\ge 1$, so $0$ safely means "not computed yet". Memo calls: $2n - 1$.' },
            { lines: '24-29', text: 'Bottom-up iteration. The order `a = b; b = next;` matters: swapping the two lines would lose the old `b`.' },
            { lines: 46, text: '`uint64_t` holds Fibonacci numbers up to $F_{93} \\approx 1.2 \\times 10^{19}$; beyond that you need big integers.' },
          ],
        },
        {
          type: 'heading',
          text: 'What the timings look like',
        },
        {
          type: 'p',
          text: 'Timing naive `fib(n)` with `std::chrono` on a typical desktop (optimized build) gives roughly: $n = 30$: $0.001$ s, $n = 35$: $0.014$ s, $n = 40$: $0.17$ s, $n = 45$: $1.9$ s. Every $+5$ in $n$ multiplies the time by about $11$ — that is $1.618^5 \\approx 11.09$, the exponential growth rate showing through the noise. Extrapolating, $n = 60$ takes about $45$ minutes and $n = 100$ about $19\\,000$ years. The iterative version computes $F_{90}$ in well under a microsecond.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Memoization in games',
          text: 'Caching computed results keyed by their inputs is everywhere in game code: pathfinding costs between region pairs, procedurally generated chunks keyed by coordinates and seed, AI evaluations of board states (transposition tables in chess engines). The question to ask is always the one Fibonacci teaches: am I solving the same subproblem more than once?',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'How many calls (including the first one) does naive recursive `fibNaive(6)` make? Its base cases are $n = 0$ and $n = 1$.',
      label: 'calls $=$',
      answer: '25',
      hint: 'Use $C_0 = C_1 = 1$ and $C_n = 1 + C_{n-1} + C_{n-2}$, or the formula $C_n = 2F_{n+1} - 1$.',
      explanation: '$C_2 = 1 + 1 + 1 = 3$, $C_3 = 1 + 3 + 1 = 5$, $C_4 = 1 + 5 + 3 = 9$, $C_5 = 1 + 9 + 5 = 15$ (the tree in the figure), $C_6 = 1 + 15 + 9 = 25$. The formula agrees: $F_7 = 13$, so $2 \\cdot 13 - 1 = 25$. A memoized version makes only $2 \\cdot 6 - 1 = 11$ calls.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Arrange the lines of an iterative function body that returns $F_n$ (with $F_0 = 0$, $F_1 = 1$).',
      linesAreCode: true,
      lines: [
        'long long a = 0, b = 1;',
        'for (int i = 0; i < n; ++i) {',
        '    long long next = a + b;',
        '    a = b;',
        '    b = next;',
        '}',
        'return a;',
      ],
      explanation: 'The loop maintains the invariant `a` $= F_i$, `b` $= F_{i+1}$. Each pass computes $F_{i+2}$ into `next`, then shifts: `a` takes the old `b` and `b` takes `next`. The two assignments must come in this order — writing `b = next;` first would overwrite `b` before `a` could copy it. After $n$ passes, `a` $= F_n$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Why does memoizing the recursive Fibonacci function reduce its running time from exponential to linear?',
      options: [
        { text: 'It replaces recursion with a loop, and loops are faster than function calls.', why: 'The memoized version is still recursive. Function-call overhead is a constant factor; it cannot turn exponential into linear.' },
        { text: 'Each value $F_k$ is computed once and then looked up, so only about $n$ distinct subproblems are ever solved.', correct: true, why: 'Right. The naive tree has exponentially many nodes but only $n + 1$ **distinct** subproblems $F_0, \\dots, F_n$. Memoization solves each once; every repeat becomes an $O(1)$ lookup.' },
        { text: 'It uses 64-bit integers, which avoid overflow.', why: 'Integer width affects correctness for large $n$, not the number of operations.' },
        { text: 'It reduces the recurrence to $F_n = 2F_{n-1}$.', why: 'The recurrence is unchanged; memoization changes how often each value is computed, not the mathematics.' },
      ],
      explanation: 'Exponential time came from recomputation: $F_{n-2}$ is computed inside $F_{n-1}$ and again on its own, and that duplication repeats at every level. Since there are only $n + 1$ distinct values, storing them caps the work at $O(n)$ — the core principle of dynamic programming.',
    },
  ],
  takeaways: [
    'A recurrence relation defines $a_n$ from earlier terms; with as many initial conditions as it reaches back, it determines a unique sequence.',
    'To model with a recurrence, define $a_n$ in words, split the size-$n$ objects into cases by their first or last piece, and match each case to a smaller instance.',
    'Compound interest: $P_n = rP_{n-1}$ gives $P_0 r^n$. Tower of Hanoi: $H_n = 2H_{n-1} + 1$ gives $2^n - 1$, and the strategy is provably optimal.',
    'Bit strings with no `00`, $2 \\times n$ domino tilings and Fibonacci\'s rabbits all satisfy $a_n = a_{n-1} + a_{n-2}$ — only the initial conditions differ.',
    'Iteration solves one-term recurrences: forward (compute, guess, prove by induction) or backward (substitute until the initial condition, then sum).',
    'Naive recursive Fibonacci makes $2F_{n+1} - 1$ calls (exponential); memoization and iteration are $\\Theta(n)$, and iteration needs only $\\Theta(1)$ space.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'The sequences chapter has a gentle section on recurrence relations with many counting exercises like the tiling problems here.',
    },
    {
      title: 'Wikipedia — Tower of Hanoi',
      url: 'https://en.wikipedia.org/wiki/Tower_of_Hanoi',
      source: 'wikipedia',
      note: 'Covers the recursive and iterative solutions, the connection to Gray codes, and variants with four pegs.',
    },
    {
      title: 'Wikipedia — Memoization',
      url: 'https://en.wikipedia.org/wiki/Memoization',
      source: 'wikipedia',
      note: 'Explains memoization in general, its relation to dynamic programming, and when caching is safe (pure functions).',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The recurrences lectures open with the Tower of Hanoi and solve it with the same guess-and-verify method.',
    },
  ],
};
