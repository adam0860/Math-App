import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-ivt',
  title: 'The Intermediate Value Theorem',
  summary: 'A continuous function cannot skip values — a simple idea that proves equations have solutions and powers the bisection algorithm.',
  minutes: 17,
  objectives: [
    'State the Intermediate Value Theorem with its exact hypotheses',
    'Explain why each hypothesis is needed, using counterexamples',
    'Use the IVT to prove that an equation has a solution in a given interval',
    'Carry out the bisection method by hand and bound its error',
    'Implement bisection as a loop in C++',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Continuous functions cannot skip values',
      blocks: [
        {
          type: 'p',
          text: 'At 6 a.m. the temperature is $10^\\circ$C; at noon it is $20^\\circ$C. Was it ever exactly $15^\\circ$C in between? Of course — temperature does not teleport. To get from $10$ to $20$ it has to pass through every value in between, including $15$.',
        },
        {
          type: 'p',
          text: 'That intuition holds for any function whose graph has no breaks. If a [[continuity|continuous]] curve starts below a horizontal line and ends above it, it must cross the line somewhere. This is the [[intermediate-value-theorem]] (IVT).',
        },
        {
          type: 'theorem',
          name: 'Intermediate Value Theorem',
          text: 'Suppose $f$ is continuous on the **closed** interval $[a, b]$ and $N$ is any number strictly between $f(a)$ and $f(b)$, where $f(a) \\ne f(b)$. Then there is at least one number $c$ in $(a, b)$ with $f(c) = N$.',
        },
        {
          type: 'graph',
          x: [-3.5, 3.5],
          y: [-3.5, 5.5],
          functions: [{ expr: 'x^3/4 - x + 1', domain: [-3, 3], label: '$f(x) = \\frac{x^3}{4} - x + 1$' }],
          points: [
            { x: -3, y: -2.75, label: '(−3, −2.75)' },
            { x: 3, y: 4.75, label: '(3, 4.75)' },
          ],
          hlines: [{ y: 'N', label: 'y = N', color: 'red' }],
          vlines: [{ x: -3, label: 'a' }, { x: 3, label: 'b' }],
          sliders: [{ name: 'N', min: -2.7, max: 4.7, step: 0.05, value: 3, label: '$N$' }],
          caption: 'Slide $N$ anywhere between $f(-3) = -2.75$ and $f(3) = 4.75$: the red line always meets the curve on $(-3, 3)$. For $N$ between about $0.23$ and $1.77$ it meets it **three** times — the IVT promises at least one $c$, not exactly one.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why is this true?',
          text: 'The IVT feels obvious, but it depends on two things: the function has no gaps (continuity), and the **number line** has no gaps either. On the rational numbers alone it fails: $f(x) = x^2 - 2$ goes from $-1$ at $x = 1$ to $2$ at $x = 2$, yet no *rational* $c$ has $c^2 = 2$. The real numbers are "complete" — every hole is filled — and that completeness is what a rigorous proof uses.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Bernard Bolzano gave the first rigorous proof in 1817, at a time when mathematicians were realising that "obvious" facts about curves needed proofs from precise definitions of continuity and the real numbers.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'If $f$ is continuous on $[a, b]$ and $f(a) < N < f(b)$, the IVT guarantees there is **exactly one** $c$ in $(a, b)$ with $f(c) = N$.',
      answer: false,
      explanation: 'The IVT is an *existence* theorem: it guarantees **at least one** such $c$. In the graph above, $N = 1$ is hit three times on $(-3, 3)$. Proving uniqueness takes extra information — for example, that $f$ is always increasing, which you will learn to check with derivatives.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Every hypothesis matters',
      blocks: [
        {
          type: 'p',
          text: 'A theorem is a promise with conditions attached. Drop a condition and the promise can break. The IVT has two: continuity on the **whole closed interval**, and $N$ lying between the endpoint values.',
        },
        {
          type: 'p',
          text: 'Take $f(x) = \\frac{1}{x}$ on $[-1, 1]$. Then $f(-1) = -1$ and $f(1) = 1$, and $N = 0$ lies between them. But $\\frac{1}{x}$ is never $0$. No contradiction: $f$ is not continuous on $[-1, 1]$ (it is undefined at $0$), so the IVT simply does not apply.',
        },
        {
          type: 'graph',
          x: [-1.5, 1.5],
          y: [-4, 4],
          height: 240,
          functions: [
            { expr: '1/x', domain: [-1, -0.25], label: '$y = \\frac{1}{x}$ on $[-1, 1]$' },
            { expr: '1/x', domain: [0.25, 1], color: 'blue' },
          ],
          points: [
            { x: -1, y: -1, label: '(−1, −1)' },
            { x: 1, y: 1, label: '(1, 1)' },
          ],
          hlines: [{ y: 0, label: 'N = 0', color: 'red' }],
          vlines: [{ x: 0 }],
          caption: 'The graph jumps from $-\\infty$ to $\\infty$ across $x = 0$ without ever touching the red line. One break is all it takes.',
        },
        {
          type: 'compare',
          left: {
            title: 'IVT does not apply',
            tone: 'bad',
            text: '$f(x) = \\frac{1}{x}$ on $[-1, 1]$ changes sign but has no root, because it is not continuous at $0$. Same for $\\tan x$ on $\\left[\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right]$: it goes from $1$ to $-1$ by blowing up at $\\frac{\\pi}{2}$.',
          },
          right: {
            title: 'IVT is silent, not wrong',
            tone: 'neutral',
            text: '$f(x) = x^2$ on $[-1, 1]$ has $f(-1) = f(1) = 1$, so there is no sign change — yet $f(0) = 0$. The IVT gives a *sufficient* condition for a root, not a necessary one. "No sign change" never proves "no root".',
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Check continuity on the whole interval',
          text: 'Students often verify the endpoint values carefully and forget that continuity must hold at **every** point of $[a, b]$. Before quoting the IVT, scan the interval for zeros of denominators, square roots of negatives, and asymptotes of $\\tan$ and $\\sec$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'Let $g(x) = \\tan x$ on $\\left[\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right]$. Then $g\\left(\\frac{\\pi}{4}\\right) = 1$ and $g\\left(\\frac{3\\pi}{4}\\right) = -1$. Does the IVT guarantee a $c$ in the interval with $\\tan c = 0$?',
      options: [
        {
          text: 'Yes, because the endpoint values have opposite signs',
          why: 'A sign change is only half the hypothesis. The function must also be continuous on the whole interval.',
        },
        {
          text: 'Yes, at $c = \\frac{\\pi}{2}$',
          why: '$\\tan\\frac{\\pi}{2}$ is undefined — that is exactly where the vertical asymptote sits.',
        },
        {
          text: 'No, because $\\tan x$ is not continuous at $\\frac{\\pi}{2}$, which lies in the interval',
          correct: true,
          why: 'Right. The hypothesis fails, so the theorem promises nothing — and in fact $\\tan x \\ne 0$ anywhere on this interval.',
        },
        {
          text: 'No, because the IVT only applies to polynomials',
          why: 'The IVT applies to *any* function continuous on $[a, b]$, including trig functions on intervals that avoid their asymptotes.',
        },
      ],
      explanation: '$\\tan x = \\frac{\\sin x}{\\cos x}$ is undefined where $\\cos x = 0$, and $x = \\frac{\\pi}{2}$ lies inside $\\left[\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right]$. The graph rises to $+\\infty$, then reappears from $-\\infty$. The zeros of $\\tan$ are at multiples of $\\pi$, none of which are in this interval.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Proving that an equation has a solution',
      blocks: [
        {
          type: 'p',
          text: 'The most useful special case takes $N = 0$. If a continuous function is negative at one end and positive at the other, it must hit zero in between.',
        },
        {
          type: 'theorem',
          name: 'Root location (Bolzano\'s theorem)',
          text: 'If $f$ is continuous on $[a, b]$ and $f(a)$ and $f(b)$ have opposite signs, then $f$ has at least one [[zero-of-a-function|zero]] in $(a, b)$.',
        },
        {
          type: 'p',
          text: 'This proves equations have solutions *even when you cannot solve them*. There is no tidy formula for the solution of $x^3 + x - 1 = 0$ that you would want to use, but the IVT shows one exists in seconds.',
        },
        {
          type: 'derivation',
          title: 'Show that $x^3 + x - 1 = 0$ has a solution in $(0, 1)$',
          steps: [
            { tex: 'f(x) = x^3 + x - 1', why: 'Name the left side. The equation becomes $f(x) = 0$.' },
            { tex: 'f \\text{ is a polynomial} \\implies f \\text{ is continuous on } [0, 1]', why: 'This is the hypothesis. State it explicitly — graders look for it.' },
            { tex: 'f(0) = -1 < 0, \\qquad f(1) = 1 + 1 - 1 = 1 > 0', why: 'Evaluate at the endpoints. The values have opposite signs, so $N = 0$ lies strictly between them.' },
            { tex: '\\exists\\, c \\in (0, 1) \\text{ with } f(c) = 0', why: 'Conclusion of the IVT with $N = 0$.' },
          ],
          result: 'So $c^3 + c - 1 = 0$ for some $c$ in $(0, 1)$: the equation has a solution there. (It is about $0.682$.)',
        },
        {
          type: 'p',
          text: 'Equations with the variable on both sides work the same way once you move everything to one side. To show $\\cos x = x$ has a solution, study $g(x) = \\cos x - x$:',
        },
        {
          type: 'derivation',
          title: 'Show that $\\cos x = x$ has a solution in $\\left(0, \\frac{\\pi}{2}\\right)$',
          steps: [
            { tex: 'g(x) = \\cos x - x', why: 'Solutions of $\\cos x = x$ are exactly the zeros of $g$.' },
            { tex: 'g \\text{ is continuous on } \\left[0, \\tfrac{\\pi}{2}\\right]', why: 'A difference of two continuous functions ($\\cos x$ and $x$) is continuous everywhere.' },
            { tex: 'g(0) = 1 > 0, \\qquad g\\left(\\tfrac{\\pi}{2}\\right) = 0 - \\tfrac{\\pi}{2} < 0', why: 'Opposite signs. Here the function goes from positive to negative — the IVT works in either direction.' },
            { tex: '\\exists\\, c \\in \\left(0, \\tfrac{\\pi}{2}\\right) \\text{ with } \\cos c = c', why: 'Apply the IVT with $N = 0$, then undo the rearrangement: $g(c) = 0$ means $\\cos c = c$.' },
          ],
          result: 'The curves $y = \\cos x$ and $y = x$ cross in $\\left(0, \\frac{\\pi}{2}\\right)$, at $x \\approx 0.739$.',
        },
        {
          type: 'graph',
          x: [-0.5, 2],
          y: [-0.5, 1.6],
          equal: true,
          functions: [
            { expr: 'cos(x)', label: '$y = \\cos x$' },
            { expr: 'x', label: '$y = x$', color: 'red' },
          ],
          points: [{ x: 0.739085, y: 0.739085, label: '≈ (0.739, 0.739)' }],
          caption: 'The IVT proves the crossing exists; a numerical method like bisection (next) finds it.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A full-credit IVT argument has three parts: (1) name the function and **state why it is continuous on the closed interval**; (2) compute both endpoint values and say that $N$ (usually $0$) lies between them; (3) conclude with the IVT, naming it. Skipping (1) is the most common way to lose points.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Let $f(x) = x^3 - 2x - 5$. Find the integer $n$ such that $f(n)$ and $f(n + 1)$ have opposite signs, so the IVT places a root in $(n, n + 1)$.',
      label: '$n =$',
      answer: '2',
      hint: 'Make a small table: $f(0), f(1), f(2), f(3)$.',
      explanation: '$f(0) = -5$, $f(1) = -6$, $f(2) = 8 - 4 - 5 = -1$, $f(3) = 27 - 6 - 5 = 16$. The sign changes between $2$ and $3$, and $f$ is a polynomial (continuous), so a root lies in $(2, 3)$. In fact it is about $2.0946$. This exact equation is famous: Newton used it to demonstrate his root-finding method, which you will meet later in this course.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Put the steps of an IVT proof that $x^4 = x + 1$ has a solution in $(1, 2)$ in the correct order.',
      lines: [
        'Rewrite the equation as $f(x) = x^4 - x - 1 = 0$',
        'Evaluate: $f(1) = -1 < 0$ and $f(2) = 13 > 0$',
        'Since $f$ is a polynomial, it is continuous on $[1, 2]$, and $0$ lies between $f(1)$ and $f(2)$, so the IVT gives $c \\in (1, 2)$ with $f(c) = 0$',
        'Therefore $c^4 = c + 1$: the equation has a solution in $(1, 2)$',
      ],
      distractors: ['Since $f(1) \\ne f(2)$, the root is the midpoint $c = 1.5$'],
      explanation: 'First turn the equation into "function $= 0$", then check the endpoint signs, then invoke the IVT (with its continuity hypothesis), and finally translate $f(c) = 0$ back into the original equation. The distractor confuses existence with location: the IVT says a root is *somewhere* in $(1, 2)$, not at the midpoint. ($f(1.5) = 2.5625$, not $0$.)',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The bisection method: the IVT as an algorithm',
      blocks: [
        {
          type: 'p',
          text: 'The IVT says a root is trapped in $[a, b]$. Check the midpoint $m$: the sign of $f(m)$ tells you which **half** still has a sign change, so the root is trapped in an interval half as wide. Repeat, and the trap closes in on the root. This is the [[bisection-method]] — binary search for roots.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Start', text: 'Find $[a, b]$ with $f$ continuous and $f(a)$, $f(b)$ of opposite signs.' },
            { title: 'Split', text: 'Compute the midpoint $m = \\frac{a + b}{2}$ and the value $f(m)$. If $f(m) = 0$, you are done.' },
            { title: 'Keep the sign change', text: 'If $f(a)$ and $f(m)$ have opposite signs, the root is in $[a, m]$: set $b = m$. Otherwise it is in $[m, b]$: set $a = m$.' },
            { title: 'Repeat', text: 'Go back to Split until the interval is narrower than your tolerance. Report the final midpoint.' },
          ],
        },
        {
          type: 'table',
          headers: ['step', '$[a, b]$', 'midpoint $m$', '$f(m) = m^2 - 2$', 'keep'],
          rows: [
            ['1', '$[1, 2]$', '$1.5$', '$0.25 > 0$', '$[1, 1.5]$'],
            ['2', '$[1, 1.5]$', '$1.25$', '$-0.4375 < 0$', '$[1.25, 1.5]$'],
            ['3', '$[1.25, 1.5]$', '$1.375$', '$-0.109375 < 0$', '$[1.375, 1.5]$'],
            ['4', '$[1.375, 1.5]$', '$1.4375$', '$0.06640625 > 0$', '$[1.375, 1.4375]$'],
            ['5', '$[1.375, 1.4375]$', '$1.40625$', '$-0.02246\\ldots < 0$', '$[1.40625, 1.4375]$'],
          ],
          caption: 'Approximating $\\sqrt{2} \\approx 1.41421$ as the root of $f(x) = x^2 - 2$ on $[1, 2]$. Each row halves the interval.',
        },
        {
          type: 'graph',
          x: [0.9, 2.1],
          y: [-1.2, 2.2],
          height: 240,
          functions: [{ expr: 'x^2 - 2', label: '$y = x^2 - 2$' }],
          vlines: [
            { x: 1.5, label: '1.5', color: 'gray' },
            { x: 1.25, label: '1.25', color: 'gray' },
            { x: 1.375, label: '1.375', color: 'gray' },
            { x: 1.4375, label: '1.4375', color: 'gray' },
          ],
          points: [{ x: 1.41421356, y: 0, label: '√2' }],
          caption: 'The first four midpoints close in on $\\sqrt{2}$ from alternating sides.',
        },
        {
          type: 'p',
          text: 'Because each step halves the width, after $n$ steps the root lies in an interval of width $\\frac{b - a}{2^n}$. You can compute in advance how many steps you need.',
        },
        {
          type: 'derivation',
          title: 'How many steps to pin $\\sqrt{2}$ to within $10^{-6}$, starting from $[1, 2]$?',
          steps: [
            { tex: '\\frac{2 - 1}{2^n} < 10^{-6}', why: 'We want the interval width after $n$ halvings to be below the tolerance.' },
            { tex: '2^n > 10^{6}', why: 'Multiply both sides by $2^n \\cdot 10^6$ (both positive, so the inequality keeps its direction).' },
            { tex: '2^{19} = 524\\,288, \\qquad 2^{20} = 1\\,048\\,576', why: 'Compare powers of $2$ with one million. (Equivalently $n > \\log_2 10^6 \\approx 19.93$.)' },
            { tex: 'n = 20', why: '$n = 19$ is not enough; $n = 20$ is the first value that works.' },
          ],
          result: 'Twenty steps guarantee six-decimal accuracy, for *any* continuous function with a sign change on an interval of width $1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bisection can never fail',
          text: 'The loop maintains an **invariant**: at every step, $f$ has opposite signs at the two ends of the current interval. Since $f$ is continuous there, the IVT guarantees a root inside — so a root is *always* trapped, while the trap shrinks by half each time. That is the same reasoning you would use to prove a binary search correct. The price of this guarantee is speed: bisection gains only one binary digit of accuracy per step. Newton\'s method (later in this course) is far faster but can fail.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Apply bisection to $f(x) = x^2 - 3$ on $[1, 2]$. What is the **third** midpoint you compute?',
      label: '$m_3 =$',
      answer: '1.625',
      hint: 'First midpoint $1.5$: is $f(1.5)$ positive or negative? Keep the half with the sign change, and repeat.',
      explanation: '$f(1) = -2 < 0$, $f(2) = 1 > 0$. Step 1: $m_1 = 1.5$, $f(1.5) = 2.25 - 3 = -0.75 < 0$, so keep $[1.5, 2]$. Step 2: $m_2 = 1.75$, $f(1.75) = 3.0625 - 3 = 0.0625 > 0$, so keep $[1.5, 1.75]$. Step 3: $m_3 = \\frac{1.5 + 1.75}{2} = 1.625$. (The root is $\\sqrt{3} \\approx 1.732$.)',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Starting from an interval of width $1$, what is the smallest number of bisection steps that guarantees the root lies in an interval of width less than $0.001$?',
      label: '$n =$',
      answer: '10',
      hint: 'You need $\\frac{1}{2^n} < 0.001$, i.e. $2^n > 1000$.',
      explanation: 'After $n$ steps the width is $\\frac{1}{2^n}$. We need $2^n > 1000$. Since $2^9 = 512$ is too small and $2^{10} = 1024$ works, $n = 10$. A handy rule of thumb: every $10$ bisection steps buy about $3$ decimal digits, because $2^{10} \\approx 10^3$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Bisection in code',
      blocks: [
        {
          type: 'p',
          text: 'Bisection translates almost line for line into a loop. The program below finds $\\sqrt{2}$ as the root of $x^2 - 2$, printing the first few intervals so you can compare with the table.',
        },
        {
          type: 'code',
          title: 'bisection.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

double f(double x) { return x * x - 2.0; }

int main() {
    double a = 1.0, b = 2.0;            // f(a) < 0 < f(b)
    int steps = 0;
    while (b - a > 1e-6) {
        double m = a + (b - a) / 2.0;   // midpoint
        if (f(a) * f(m) <= 0.0) b = m;  // sign change in [a, m]
        else a = m;                     // sign change in [m, b]
        ++steps;
        if (steps <= 5) std::printf("step %d: [%.6f, %.6f]\\n", steps, a, b);
    }
    std::printf("after %d steps: x = %.6f\\n", steps, a + (b - a) / 2.0);
    std::printf("std::sqrt(2)  = %.6f\\n", std::sqrt(2.0));
}`,
          output: `step 1: [1.000000, 1.500000]
step 2: [1.250000, 1.500000]
step 3: [1.375000, 1.500000]
step 4: [1.375000, 1.437500]
step 5: [1.406250, 1.437500]
after 20 steps: x = 1.414214
std::sqrt(2)  = 1.414214`,
          annotations: [
            { lines: 7, text: 'The starting bracket. Bisection *requires* a sign change here — check it before looping in real code.' },
            { lines: 9, text: 'Stop on interval width, never on `f(m) == 0`: with floating-point numbers an exact zero may never occur.' },
            { lines: 10, text: '`a + (b - a) / 2` equals $\\frac{a+b}{2}$ but cannot overflow; the same trick is used in integer binary search.' },
            { lines: '11-12', text: 'The IVT step: keep whichever half still has a sign change. `<= 0` also handles an exact hit at $m$.' },
            { lines: 16, text: 'Exactly $20$ steps, as the error bound predicted.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Bisection in games and tools',
          text: '**Continuous collision detection:** a fast bullet can pass completely through a thin wall between two frames. Engines find the *time of impact* by bisecting on $t$ within the frame: if the objects overlap at the midpoint time, the impact happened in the first half; otherwise in the second. **Version control:** `git bisect` finds the commit that introduced a bug the same way — "works" and "broken" play the roles of the two signs. **Shaders:** ray-marched terrain refines the hit point by bisection between the last sample above ground and the first below.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'What bisection cannot do',
          text: 'It needs a starting sign change, so it misses roots where the graph only *touches* zero, like $x^2$ at $0$. And if the bracket contains several roots it finds one of them, with no say over which. When $f$ is discontinuous the "root" it converges to may be a jump, not a zero — the hypothesis matters in code just as it does in proofs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student runs bisection on $f(x) = x^2 - 5$ starting from $[2, 3]$. Tap the first line that is wrong.',
      lines: [
        '$f(2) = -1 < 0$ and $f(3) = 4 > 0$, so a root lies in $[2, 3]$.',
        'Midpoint $m = 2.5$: $f(2.5) = 1.25 > 0$.',
        'The sign change is between $2.5$ and $3$, so keep $[2.5, 3]$.',
        'Midpoint $m = 2.75$: $f(2.75) = 2.5625 > 0$.',
      ],
      errorLines: [3],
      explanation: 'Since $f(2.5) > 0$ and $f(3) > 0$, there is **no** sign change on $[2.5, 3]$. The sign change is between $f(2) < 0$ and $f(2.5) > 0$, so the correct interval is $[2, 2.5]$. The next midpoint should be $2.25$, with $f(2.25) = 0.0625 > 0$, giving $[2, 2.25]$. (The root is $\\sqrt{5} \\approx 2.236$.) Line 4 computes correctly, but in the wrong interval.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Summarise the bisection method.',
      template: 'At each step bisection keeps the half-interval on which $f$ changes ___ , so after $n$ steps on $[a, b]$ the root is trapped in an interval of width ___ .',
      blanks: [{ answers: ['sign'] }, { answers: ['$\\frac{b - a}{2^n}$'] }],
      wordBank: ['sign', 'value', 'direction', '$\\frac{b - a}{2^n}$', '$\\frac{b - a}{n}$', '$\\frac{b - a}{2n}$'],
      explanation: 'A sign change on a closed interval plus continuity is exactly the IVT\'s hypothesis, so keeping the half with the sign change keeps a root trapped. Each step multiplies the width by $\\frac{1}{2}$, so $n$ steps multiply it by $\\frac{1}{2^n}$ — an exponential shrink, not the linear $\\frac{b - a}{n}$ you would get by chopping off a fixed piece each time.',
    },
  ],
  takeaways: [
    'IVT: if $f$ is continuous on $[a, b]$ and $N$ is strictly between $f(a)$ and $f(b)$, then $f(c) = N$ for at least one $c$ in $(a, b)$.',
    'Both hypotheses matter: $\\frac{1}{x}$ on $[-1, 1]$ changes sign without a root. And the IVT only gives existence — not uniqueness, not location.',
    'To prove $f(x) = 0$ has a solution, show $f$ is continuous on $[a, b]$ and that $f(a)$, $f(b)$ have opposite signs.',
    'Bisection repeatedly halves a bracketing interval, keeping the half with the sign change; after $n$ steps the width is $\\frac{b - a}{2^n}$.',
    'In code, stop bisection on interval width (not on $f(m) = 0$) and use `a + (b - a) / 2` for the midpoint.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 2.4 Continuity',
      url: 'https://openstax.org/books/calculus-volume-1/pages/2-4-continuity',
      source: 'openstax',
      note: 'The IVT appears at the end of this section, with examples of proving that roots exist.',
    },
    {
      title: "Paul's Online Notes — Continuity",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/Continuity.aspx',
      source: 'paul',
      note: 'Covers the IVT with several "show this equation has a solution" problems in exam style.',
    },
    {
      title: 'Wikipedia — Bisection method',
      url: 'https://en.wikipedia.org/wiki/Bisection_method',
      source: 'wikipedia',
      note: 'Pseudocode, convergence analysis and comparisons with faster root-finding methods.',
    },
  ],
};
