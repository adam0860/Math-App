import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-functions-intro',
  title: 'What Is a Function?',
  summary: 'Inputs, outputs and the one rule that makes a relationship a function — plus notation, domain and range.',
  minutes: 17,
  objectives: [
    'Decide whether a relation (table, set of pairs, equation or graph) is a function',
    'Evaluate functions with function notation, including inputs like $a + 1$',
    'Use the vertical line test on a graph',
    'Find the domain of a function from its formula and write it in interval notation',
    'Find the range of simple functions by reasoning about which outputs are possible',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'A rule that gives exactly one output',
      blocks: [
        {
          type: 'p',
          text: 'You have used functions for years without the name: a thermostat turns a temperature into "heat on" or "heat off", a vending machine turns a button press into a snack, and $y = 2x + 1$ turns each $x$ into a $y$. A **function** is the mathematical idea behind all of these: a rule that takes an **input** and produces an **output**.',
        },
        {
          type: 'p',
          text: 'The one thing that makes a rule a function is reliability. Press button B4 and you should *always* get the same snack. If B4 sometimes gave chips and sometimes gave a candy bar, the machine would be broken — and in math, that relationship would not be a function.',
        },
        {
          type: 'definition',
          term: 'Function',
          text: 'A [[relation]] is any set of input–output pairs. A [[function]] is a relation in which **every input is paired with exactly one output**. The set of allowed inputs is the [[domain]]; the set of outputs that actually occur is the [[range]].',
        },
        {
          type: 'table',
          headers: ['Relation', 'Pairs (input, output)', 'Function?'],
          rows: [
            ['A', '$(1, 4),\\ (2, 5),\\ (3, 6)$', 'Yes — each input appears once'],
            ['B', '$(1, 4),\\ (2, 4),\\ (3, 4)$', 'Yes — different inputs may share an output'],
            ['C', '$(1, 4),\\ (1, 5),\\ (2, 6)$', 'No — input $1$ has two outputs'],
          ],
          caption: 'To test a relation, look only for an input that repeats with *different* outputs.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why insist on exactly one output?',
          text: 'Because we want to *name* the output. If $f$ is a function, then "$f(3)$" refers to one definite number we can compute with, substitute, and compare. If input $3$ could produce two outputs, the symbol $f(3)$ would be ambiguous, and every formula containing it would be too. Note the rule is one-directional: many inputs may share an output (relation B), but one input may not split into many outputs (relation C).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'You already know this from programming',
          text: 'A function in code, like `double area(double r) { return 3.14159 * r * r; }`, is a math function as long as it is *pure*: the same argument always returns the same value, with no hidden state. A function that reads a global counter or a random number generator can return different values for the same input — useful in programs, but not a function in the mathematical sense.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which relation is **not** a function?',
      options: [
        {
          text: '$\\{(-2, 3),\\ (0, 3),\\ (2, 3)\\}$',
          why: 'Every input ($-2$, $0$, $2$) appears once. Sharing the output $3$ is allowed — this is a constant function.',
        },
        {
          text: '$\\{(4, 2),\\ (4, -2),\\ (9, 3)\\}$',
          correct: true,
          why: 'Input $4$ is paired with both $2$ and $-2$. One input with two outputs breaks the definition.',
        },
        {
          text: '$\\{(1, 1),\\ (2, 4),\\ (3, 9),\\ (4, 16)\\}$',
          why: 'Each input appears exactly once, so this is a function (it happens to be $x \\mapsto x^2$).',
        },
        {
          text: '$\\{(5, 0)\\}$',
          why: 'A single pair is trivially a function: its one input has one output.',
        },
      ],
      explanation: 'Scan the **inputs** (first coordinates) for repeats. Only the second relation repeats an input ($4$) with different outputs ($2$ and $-2$). This exact relation shows up when you try to "undo" squaring: both $2^2$ and $(-2)^2$ equal $4$. That is why $\\sqrt{4}$ is *defined* to mean only $2$ — so that the square root is a function.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Function notation: $f(x)$',
      blocks: [
        {
          type: 'p',
          text: 'Instead of writing $y = 2x^2 - 3x + 1$, we give the rule a name and write $f(x) = 2x^2 - 3x + 1$. Read it "$f$ of $x$". The letter $x$ is the [[independent-variable]] (the input you choose) and $f(x)$ is the [[dependent-variable|dependent]] value (the output it produces). This is [[function-notation]].',
        },
        {
          type: 'p',
          text: 'The parentheses mean "plug in", **not** multiply: $f(3)$ is the output when the input is $3$. The $x$ in the formula is just a placeholder for whatever goes inside the parentheses — so to evaluate, replace **every** $x$ with the input, wrapped in parentheses.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $f(-2)$ for $f(x) = 2x^2 - 3x + 1$',
          steps: [
            { tex: 'f(-2) = 2(-2)^2 - 3(-2) + 1', why: 'Replace every $x$ with $(-2)$. The parentheses are essential: they make the square apply to the negative sign too.' },
            { tex: '= 2(4) + 6 + 1', why: '$(-2)^2 = 4$, and $-3 \\cdot (-2) = +6$.' },
            { tex: '= 15', why: 'Add: $8 + 6 + 1$.' },
          ],
          result: '$f(-2) = 15$, so the point $(-2, 15)$ lies on the graph of $f$.',
        },
        {
          type: 'p',
          text: 'The input does not have to be a number. Plugging in an expression like $a + 1$ is exactly the same process — and it is the core skill behind the derivative in calculus, where you will evaluate $f(x + h)$ constantly.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $f(a + 1)$ for the same $f$',
          steps: [
            { tex: 'f(a+1) = 2(a+1)^2 - 3(a+1) + 1', why: 'Replace every $x$ with the whole expression $(a+1)$, in parentheses.' },
            { tex: '= 2(a^2 + 2a + 1) - 3a - 3 + 1', why: 'Expand $(a+1)^2 = a^2 + 2a + 1$ (don\'t drop the middle term), and distribute $-3$.' },
            { tex: '= 2a^2 + 4a + 2 - 3a - 3 + 1', why: 'Distribute the $2$.' },
            { tex: '= 2a^2 + a', why: 'Combine like terms: $4a - 3a = a$ and $2 - 3 + 1 = 0$.' },
          ],
          result: '$f(a + 1) = 2a^2 + a$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['f(a+1) = f(a) + 1', 'f(a+1) = 2a^2 - 3a + 2'],
            text: '"Add 1 to the output" is a different operation from "add 1 to the input".',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['f(a+1) = 2(a+1)^2 - 3(a+1) + 1', '= 2a^2 + a'],
            text: 'Substitute the whole input $(a+1)$ for every $x$.',
          },
        },
        {
          type: 'code',
          title: 'evaluate.cpp',
          runnable: true,
          code: `#include <cstdio>

// f(x) = 2x^2 - 3x + 1
double f(double x) { return 2 * x * x - 3 * x + 1; }

int main() {
    for (int x = -2; x <= 2; ++x) {
        std::printf("f(%d) = %g\\n", x, f(x));
    }
}`,
          output: `f(-2) = 15
f(-1) = 6
f(0) = 1
f(1) = 0
f(2) = 3`,
          annotations: [
            { lines: 4, text: 'The parameter `x` plays exactly the role of $x$ in $f(x)$: a placeholder filled in at each call.' },
            { lines: 8, text: 'Each call `f(x)` is "evaluate $f$ at this input". The output depends only on the input.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Let $g(x) = x^2 - 4x + 7$. Find $g(-3)$.',
      label: '$g(-3) =$',
      answer: '28',
      hint: 'Replace every $x$ with $(-3)$: $g(-3) = (-3)^2 - 4(-3) + 7$.',
      explanation: '$g(-3) = (-3)^2 - 4(-3) + 7 = 9 + 12 + 7 = 28$. The two classic slips are writing $-3^2 = -9$ (the parentheses make it $+9$) and $-4 \\cdot (-3) = -12$ (a negative times a negative is positive).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'expr',
      prompt: 'Let $f(x) = x^2 + 2x$. Find and simplify $f(x + 3)$.',
      label: '$f(x+3) =$',
      answer: 'x^2 + 8x + 15',
      answerTex: 'x^2 + 8x + 15',
      hint: 'Write $(x+3)^2 + 2(x+3)$, then expand.',
      explanation: 'Replace every $x$ with $(x + 3)$: $f(x+3) = (x+3)^2 + 2(x+3) = x^2 + 6x + 9 + 2x + 6 = x^2 + 8x + 15$. Quick check with a number: at $x = 0$ this says $f(3) = 15$, and indeed $3^2 + 2 \\cdot 3 = 15$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Graphs and the vertical line test',
      blocks: [
        {
          type: 'p',
          text: 'The **graph** of a function $f$ is the set of all points $(x, f(x))$: each input $x$ plotted against its output. Height above the $x$-axis *is* the output. Because a function gives each input exactly one output, there is exactly one point of the graph above (or below) each $x$ in the domain.',
        },
        {
          type: 'theorem',
          name: 'Vertical line test',
          text: 'A curve in the plane is the graph of a function of $x$ if and only if **no vertical line crosses it more than once**.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-2.5, 2.5],
          equal: true,
          functions: [
            { expr: 'sqrt(4 - x^2)', label: '$x^2 + y^2 = 4$', color: 'blue' },
            { expr: '-sqrt(4 - x^2)', color: 'blue' },
          ],
          vlines: [{ x: 'a', label: 'x = a', color: 'red' }],
          points: [
            { x: 'a', y: 'sqrt(4 - a^2)', color: 'red' },
            { x: 'a', y: '-sqrt(4 - a^2)', color: 'red' },
          ],
          sliders: [{ name: 'a', min: -1.95, max: 1.95, step: 0.05, value: 1, label: '$a$' }],
          readouts: [
            { label: 'upper $y =$', expr: 'sqrt(4 - a^2)', digits: 3 },
            { label: 'lower $y =$', expr: '-sqrt(4 - a^2)', digits: 3 },
          ],
          caption: 'Slide the vertical line: almost everywhere it hits the circle **twice**, so one input $a$ has two outputs. A circle is not the graph of a function.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why vertical lines?',
          text: 'Every point on the vertical line $x = a$ has the *same input*, $a$. So if the line meets the curve at two points $(a, y_1)$ and $(a, y_2)$, the input $a$ has two outputs — precisely what a function forbids. A horizontal line, by contrast, collects points with the same *output*, and many inputs sharing an output is fine.',
        },
        {
          type: 'p',
          text: 'Equations can hide the same issue. Solving $x^2 + y^2 = 4$ for $y$ gives $y = \\pm\\sqrt{4 - x^2}$: the $\\pm$ is the two outputs. The equation $y = x^2 - 2$, on the other hand, gives one $y$ for each $x$, so it defines $y$ as a function of $x$ — its graph, a parabola, passes the test.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: '$y = x^2$ is **not** a function, because two different inputs ($x = 2$ and $x = -2$) give the same output.',
      answer: false,
      explanation: 'The definition only forbids **one input → several outputs**. Several inputs → one output is perfectly allowed. Each $x$ has exactly one square, so $y = x^2$ is a function; its graph passes the vertical line test. (Two inputs sharing an output *will* matter later, in the lesson on inverse functions — it means the function is not one-to-one.)',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Domain: which inputs are allowed?',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes the domain is stated ("for $0 \\le t \\le 10$"). When a function is given only by a formula, the convention is the [[implied-domain]]: **all real numbers for which the formula produces a real number**. In College Algebra, two things can go wrong:',
        },
        {
          type: 'list',
          items: [
            '**Division by zero.** A denominator can never equal $0$, so exclude every $x$ that makes it $0$.',
            '**Even roots of negatives.** $\\sqrt{\\ \\ }$ (and $\\sqrt[4]{\\ \\ }$, …) needs a radicand $\\ge 0$. Odd roots like $\\sqrt[3]{\\ \\ }$ accept any real number.',
          ],
        },
        {
          type: 'p',
          text: 'Write the answer in [[interval-notation]]: square brackets include an endpoint, parentheses exclude it, and $\\infty$ always gets a parenthesis. The symbol $\\cup$ ("union") glues intervals together.',
        },
        {
          type: 'derivation',
          title: 'Find the domain of $f(x) = \\dfrac{\\sqrt{x - 3}}{x - 5}$',
          steps: [
            { tex: 'x - 3 \\ge 0', why: 'The square root needs a non-negative radicand.' },
            { tex: '\\implies x \\ge 3', why: 'Add $3$ to both sides.' },
            { tex: 'x - 5 \\ne 0 \\implies x \\ne 5', why: 'The denominator cannot be zero.' },
            { tex: '\\text{Domain} = [3, 5) \\cup (5, \\infty)', why: 'Start from $x \\ge 3$ (bracket: $3$ is allowed, since $\\sqrt{0} = 0$ is fine in a numerator) and remove the single point $5$.' },
          ],
          result: 'The domain is $[3, 5) \\cup (5, \\infty)$.',
        },
        {
          type: 'derivation',
          title: 'Find the domain of $g(x) = \\dfrac{1}{x^2 - 9}$',
          steps: [
            { tex: 'x^2 - 9 = 0', why: 'Find the inputs that make the denominator zero.' },
            { tex: '(x - 3)(x + 3) = 0 \\implies x = \\pm 3', why: 'Difference of squares, then the zero product property.' },
            { tex: '\\text{Domain} = (-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)', why: 'Every real number except $-3$ and $3$. There is no square root, so nothing else to exclude.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Square root in the denominator',
          text: 'For $\\dfrac{1}{\\sqrt{x + 2}}$ you need *both* rules at once: the radicand must be $\\ge 0$ **and** the denominator must be $\\ne 0$. Together that is $x + 2 > 0$ — a strict inequality, so the endpoint $-2$ is excluded.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Domain errors in code',
          text: 'In C++, `std::sqrt(-1.0)` returns `NaN` ("not a number") and `1.0 / 0.0` returns `inf`. Neither crashes — they silently poison every later calculation, which is why game physics bugs sometimes make objects vanish to infinity. Checking that an input is in the domain before calling (`assert(x >= 0)`, or clamping) is the programming version of this card.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'What is the domain of $h(x) = \\dfrac{1}{\\sqrt{x + 2}}$?',
      options: [
        {
          text: '$[-2, \\infty)$',
          why: 'At $x = -2$ the denominator is $\\sqrt{0} = 0$, and division by zero is undefined. The bracket must be a parenthesis.',
        },
        {
          text: '$(-2, \\infty)$',
          correct: true,
          why: 'The radicand must be non-negative *and* the denominator nonzero, so $x + 2 > 0$, i.e. $x > -2$.',
        },
        {
          text: 'All real numbers except $-2$',
          why: 'That handles the zero denominator but ignores the square root: $x = -6$ would give $\\sqrt{-4}$, which is not real.',
        },
        {
          text: '$(-\\infty, -2)$',
          why: 'This is exactly where $x + 2 < 0$ — the inputs that make the radicand negative. The inequality is flipped.',
        },
      ],
      explanation: 'Combine both restrictions: $\\sqrt{x+2}$ needs $x + 2 \\ge 0$, and it sits in a denominator, so it also needs $\\sqrt{x+2} \\ne 0$, i.e. $x \\ne -2$. Together: $x > -2$, which is $(-2, \\infty)$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Find the domain of $f(x) = \\sqrt{6 - 2x}$.',
      template: 'We need $6 - 2x \\ge 0$, which gives $x$ ___ $3$. So the domain in interval notation is ___.',
      blanks: [{ answers: ['$\\le$'] }, { answers: ['$(-\\infty, 3]$'] }],
      wordBank: ['$\\le$', '$\\ge$', '$<$', '$(-\\infty, 3]$', '$[3, \\infty)$', '$(-\\infty, 3)$'],
      hint: 'Subtract $6$, then divide by $-2$ — and remember what dividing by a negative does to an inequality.',
      explanation: '$6 - 2x \\ge 0 \\implies -2x \\ge -6 \\implies x \\le 3$. Dividing by $-2$ **flips** the inequality, which is the step most people miss. The endpoint is included because $\\sqrt{0} = 0$ is a real number, so the domain is $(-\\infty, 3]$. Sanity check: $x = 0$ gives $\\sqrt{6}$ (fine) while $x = 4$ gives $\\sqrt{-2}$ (not real).',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Range: which outputs come out?',
      blocks: [
        {
          type: 'p',
          text: 'The [[range]] is the set of outputs the function *actually produces* as $x$ runs through the domain. Range is usually harder than domain, because it asks a backwards question: a number $y$ is in the range exactly when the equation $f(x) = y$ has a solution $x$ in the domain.',
        },
        {
          type: 'p',
          text: 'For many functions, a simple fact does the work. Squares are never negative ($u^2 \\ge 0$), square roots are never negative ($\\sqrt{u} \\ge 0$), and absolute values are never negative ($|u| \\ge 0$). Build up from that fact.',
        },
        {
          type: 'derivation',
          title: 'Range of $f(x) = (x - 2)^2 - 5$',
          steps: [
            { tex: '(x - 2)^2 \\ge 0 \\quad \\text{for every } x', why: 'A square of a real number is never negative.' },
            { tex: '(x - 2)^2 - 5 \\ge -5', why: 'Subtract $5$ from both sides of the inequality.' },
            { tex: 'f(2) = 0 - 5 = -5', why: 'The lower bound is actually reached, at $x = 2$, so $-5$ belongs in the range.' },
            { tex: '\\text{Range} = [-5, \\infty)', why: 'Every $y \\ge -5$ is hit: solving $(x-2)^2 - 5 = y$ gives $x = 2 \\pm \\sqrt{y + 5}$, which is real whenever $y \\ge -5$.' },
          ],
          result: 'The range is $[-5, \\infty)$ — the parabola\'s vertex $(2, -5)$ is its lowest point.',
        },
        {
          type: 'derivation',
          title: 'Range of $g(x) = \\dfrac{1}{x - 2}$ by solving for $x$',
          steps: [
            { tex: 'y = \\frac{1}{x - 2}', why: 'Ask: for which $y$ does this equation have a solution?' },
            { tex: 'y(x - 2) = 1', why: 'Multiply both sides by $x - 2$ (which is nonzero on the domain).' },
            { tex: 'x = 2 + \\frac{1}{y}', why: 'Divide by $y$ and add $2$. This step needs $y \\ne 0$.' },
            { tex: '\\text{Range} = (-\\infty, 0) \\cup (0, \\infty)', why: 'Every $y \\ne 0$ gives a valid input $x$; $y = 0$ never happens, since $1$ divided by anything is never $0$.' },
          ],
        },
        {
          type: 'graph',
          x: [-3, 7],
          y: [-6, 5],
          functions: [
            { expr: '(x - 2)^2 - 5', label: '$f(x) = (x-2)^2 - 5$', color: 'blue' },
            { expr: '1/(x - 2)', label: '$g(x) = \\frac{1}{x-2}$', color: 'red' },
          ],
          hlines: [{ y: -5, label: 'y = -5', color: 'blue' }, { y: 0, color: 'red' }],
          vlines: [{ x: 2, label: 'x = 2', color: 'gray' }],
          points: [{ x: 2, y: -5, label: '(2, −5)', color: 'blue' }],
          caption: 'Read range on the $y$-axis: the blue parabola covers every height from $-5$ up; the red curve covers every height except $0$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Domain is left–right, range is up–down',
          text: 'On a graph, the domain is the "shadow" the curve casts on the $x$-axis and the range is its shadow on the $y$-axis. When you are unsure, sketch the graph and squint at the shadows.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'The range of $f(x) = 2(x + 1)^2 + 3$ is $[c, \\infty)$. Find $c$.',
      label: '$c =$',
      answer: '3',
      hint: 'What is the smallest value $(x+1)^2$ can take? What does that make $2(x+1)^2 + 3$?',
      explanation: 'Since $(x + 1)^2 \\ge 0$, we get $2(x+1)^2 \\ge 0$ and so $2(x+1)^2 + 3 \\ge 3$. The value $3$ is reached at $x = -1$, so the range is $[3, \\infty)$ and $c = 3$. (A common wrong answer is $-1$: that is the *input* where the minimum happens, not the minimum *output*.)',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Functions as models — and as code',
      blocks: [
        {
          type: 'p',
          text: 'Functions earn their keep by describing how one quantity depends on another. Suppose a game server costs $\\$20$ per month plus $\\$4.50$ per player-hour. The monthly cost is a function of hours $n$: $C(n) = 4.5n + 20$. Then $C(100) = 470$ means "100 player-hours cost $\\$470$".',
        },
        {
          type: 'p',
          text: 'In a model, the domain comes from *the situation*, not just the formula. The formula $4.5n + 20$ accepts $n = -7$, but negative hours are meaningless, so the practical domain is $n \\ge 0$. Likewise, a ball\'s height $h(t)$ is only modeled from launch until it lands.',
        },
        {
          type: 'table',
          headers: ['Math', 'C++ analogue'],
          rows: [
            ['function $f$', 'a pure function `f`'],
            ['input $x$, output $f(x)$', 'argument `x`, return value `f(x)`'],
            ['domain', 'parameter type **plus** preconditions (e.g. `x >= 0`)'],
            ['range', 'the values the function can actually return — often far smaller than the return type'],
            ['$f(a+1)$', 'calling `f(a + 1)`: the whole expression is evaluated, then passed in'],
          ],
          caption: 'The analogy is close enough to lean on, as long as the code function is pure.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Return type versus range',
          text: 'A function returning `int` *could* return any of about four billion values, but `int square(int x)` only ever returns non-negative perfect squares. Mathematicians call the declared target set the **codomain** (like the return type) and the set of values actually produced the **range**. In this course, "range" always means the second one.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors expect domain and range in **interval notation** with correct brackets, and for word problems they expect the *practical* domain. "All real numbers" for the domain of a ticket-price model will lose points.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student evaluates $p(-3)$ for $p(x) = -x^2 + 2x + 1$. Tap the first incorrect line.',
      lines: [
        '$p(-3) = -(-3)^2 + 2(-3) + 1$',
        '$= 9 - 6 + 1$',
        '$= 4$',
      ],
      errorLines: [2],
      explanation: 'Line 1 is a correct substitution. In line 2, $-(-3)^2$ was treated as $(+9)$, but the exponent applies *before* the leading negative: $-(-3)^2 = -(9) = -9$. The correct evaluation is $p(-3) = -9 - 6 + 1 = -14$. Exponents first, then the negation — the order of operations does not change because a letter was replaced by a number.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'A phone plan costs $C(m) = 0.10m + 15$ dollars for $m$ text messages in a month. Which statement is correct?',
      options: [
        {
          text: 'The practical domain is whole numbers $m \\ge 0$',
          correct: true,
          why: 'You cannot send a negative or fractional number of texts, so the situation restricts the inputs to $0, 1, 2, \\dots$',
        },
        {
          text: 'The domain is all real numbers, since $0.10m + 15$ is defined everywhere',
          why: 'That is the *implied* domain of the bare formula, but the model only makes sense for counts of messages.',
        },
        {
          text: '$C(15) = 0$',
          why: '$C(15) = 0.10(15) + 15 = 16.5$. You may be thinking of the $\\$15$ base fee, which is $C(0)$.',
        },
        {
          text: 'The range includes $\\$10$',
          why: 'The smallest possible bill is $C(0) = 15$, so no output is below $\\$15$.',
        },
      ],
      explanation: 'In a model, the inputs must make physical sense: here $m$ counts messages, so $m \\in \\{0, 1, 2, \\dots\\}$. The outputs then start at $C(0) = \\$15$ and go up by $\\$0.10$ per message — so the range is $\\{15, 15.1, 15.2, \\dots\\}$, not anything below $15$.',
    },
  ],
  takeaways: [
    'A function assigns **exactly one output** to each input; several inputs may share an output.',
    '$f(a)$ means "replace every $x$ with $(a)$" — in particular $f(a + 1) \\ne f(a) + 1$ in general.',
    'A graph is a function exactly when it passes the vertical line test.',
    'Implied domain: exclude inputs that make a denominator $0$ or an even-root radicand negative; write it in interval notation.',
    'Range is the set of outputs actually produced; find it from facts like $u^2 \\ge 0$ or by solving $f(x) = y$ for $x$.',
    'A pure function in code is a math function: the parameter type plus preconditions is the domain; the values it can return form the range.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 3.1 Functions and Function Notation',
      url: 'https://openstax.org/books/college-algebra-2e/pages/3-1-functions-and-function-notation',
      source: 'openstax',
      note: 'The standard textbook treatment, with many more table, graph and formula examples.',
    },
    {
      title: 'OpenStax College Algebra 2e — 3.2 Domain and Range',
      url: 'https://openstax.org/books/college-algebra-2e/pages/3-2-domain-and-range',
      source: 'openstax',
      note: 'More practice finding domains of rational and radical functions, written in interval notation.',
    },
    {
      title: "Paul's Online Notes — The Definition of a Function",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/FunctionDefn.aspx',
      source: 'paul',
      note: 'Clear worked examples of function evaluation (including expressions like $f(t+1)$) and domains.',
    },
  ],
};
