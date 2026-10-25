import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-combining-functions',
  title: 'Combining and Composing Functions',
  summary: 'Add, multiply and divide functions — then chain them together, one feeding the next, the way programs call functions inside functions.',
  minutes: 18,
  objectives: [
    'Form $f + g$, $f - g$, $fg$ and $\\frac{f}{g}$ and find their domains',
    'Evaluate a composition $(f \\circ g)(x) = f(g(x))$ from formulas and from tables',
    'Find and simplify formulas for $f(g(x))$ and $g(f(x))$, and explain why they usually differ',
    'Determine the domain of a composite function, including restrictions hidden by simplification',
    'Decompose a function into an inner and outer function',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Arithmetic with functions',
      blocks: [
        {
          type: 'p',
          text: 'Functions output numbers, and numbers can be added, subtracted, multiplied and divided. So we can build new functions by combining outputs **at the same input**. If a game\'s revenue is $R(n)$ and its costs are $C(n)$ for $n$ players, the profit is $P(n) = R(n) - C(n)$ — a new function made from two old ones.',
        },
        {
          type: 'definition',
          term: 'Sum, difference, product, quotient',
          text: 'For functions $f$ and $g$:\n\n$$(f + g)(x) = f(x) + g(x), \\qquad (f - g)(x) = f(x) - g(x),$$\n\n$$(fg)(x) = f(x)\\,g(x), \\qquad \\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}.$$\n\nThe domain of each is the set of $x$ in **both** domains (the overlap) — and for $\\frac{f}{g}$ we also remove every $x$ with $g(x) = 0$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 7],
          functions: [
            { expr: 'x^2 - 1', label: '$f(x) = x^2 - 1$', color: 'red' },
            { expr: 'x + 1', label: '$g(x) = x + 1$', color: 'green' },
            { expr: 'x^2 + x', label: '$(f + g)(x) = x^2 + x$', color: 'blue' },
          ],
          segments: [
            { from: ['a', 0], to: ['a', 'a + 1'], color: 'green' },
            { from: ['a', 'a + 1'], to: ['a', 'a + 1 + a^2 - 1'], color: 'red', arrow: true },
          ],
          points: [{ x: 'a', y: 'a^2 + a', color: 'blue' }],
          sliders: [{ name: 'a', min: -2.5, max: 2.5, step: 0.1, value: 1.5, label: '$a$' }],
          readouts: [
            { label: '$g(a) =$', expr: 'a + 1', digits: 3 },
            { label: '$f(a) =$', expr: 'a^2 - 1', digits: 3 },
            { label: '$(f+g)(a) =$', expr: 'a^2 + a', digits: 3 },
          ],
          caption: 'At each input, the blue graph\'s height is the green height plus the red height: the red arrow (length $f(a)$, pointing down when $f(a) < 0$) is stacked on top of the green segment.',
        },
        {
          type: 'derivation',
          title: 'The quotient $\\frac{f}{g}$ for $f(x) = x^2 - 1$, $g(x) = x + 1$',
          steps: [
            { tex: '\\left(\\frac{f}{g}\\right)(x) = \\frac{x^2 - 1}{x + 1}', why: 'Divide the outputs.' },
            { tex: '\\text{exclude } x = -1', why: 'Decide the domain **before** simplifying: $g(-1) = 0$, and we cannot divide by zero.' },
            { tex: '= \\frac{(x - 1)(x + 1)}{x + 1} = x - 1, \\quad x \\ne -1', why: 'Factor the difference of squares and cancel. The restriction stays attached to the simplified formula.' },
          ],
          result: '$\\frac{f}{g}$ is the line $y = x - 1$ with a hole at $x = -1$ — not quite the same function as $x - 1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the domain is the overlap',
          text: 'To compute $f(x) + g(x)$ you need *both* numbers to exist. If $x$ is outside the domain of either function, one of the outputs is missing and the sum is meaningless. Division adds one more failure mode: $g(x) = 0$. And the restriction must be found from the *original* pieces, because simplifying can erase the evidence (as the cancelled $x + 1$ shows).',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Let $f(x) = 3x - 2$ and $g(x) = x^2 + 1$. Find $(fg)(2)$.',
      label: '$(fg)(2) =$',
      answer: '20',
      hint: '$(fg)(2) = f(2) \\cdot g(2)$.',
      explanation: 'Evaluate each function at $2$, then multiply: $f(2) = 6 - 2 = 4$ and $g(2) = 4 + 1 = 5$, so $(fg)(2) = 4 \\cdot 5 = 20$. Note that $(fg)(2)$ means the **product** of outputs — it is not $f(g(2))$, which would be $f(5) = 13$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: 'Let $f(x) = \\sqrt{x}$ and $g(x) = x - 4$. What is the domain of $\\left(\\frac{f}{g}\\right)(x)$?',
      options: [
        { text: '$[0, \\infty)$', why: 'That is the domain of $f$ alone. You still need to remove the input where the denominator $g(x) = x - 4$ is zero.' },
        { text: 'All real numbers except $4$', why: 'This handles the zero denominator but forgets that $\\sqrt{x}$ needs $x \\ge 0$.' },
        { text: '$[0, 4) \\cup (4, \\infty)$', correct: true, why: 'Overlap of the domains is $[0, \\infty)$; then remove $x = 4$, where $g(x) = 0$.' },
        { text: '$(4, \\infty)$', why: 'Inputs between $0$ and $4$ are fine: for example $\\frac{\\sqrt{1}}{1 - 4} = -\\frac{1}{3}$.' },
      ],
      explanation: '$f$ needs $x \\ge 0$; $g$ is defined everywhere; the overlap is $[0, \\infty)$. Dividing by $g$ also forbids $g(x) = 0$, i.e. $x = 4$. So the domain is $[0, 4) \\cup (4, \\infty)$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Composition: one function feeding another',
      blocks: [
        {
          type: 'p',
          text: 'The most important way to combine functions is not arithmetic at all — it is **chaining**. Feed $x$ into $g$, then feed the result into $f$. This is [[composition]]: you already do it every time you write `sqrt(abs(x))` in code or apply one discount after another at a store.',
        },
        {
          type: 'definition',
          term: 'Composite function',
          text: 'The composition of $f$ with $g$ is\n\n$$(f \\circ g)(x) = f\\big(g(x)\\big),$$\n\nread "$f$ of $g$ of $x$" or "$f$ composed with $g$". The **inner** function $g$ acts first; the **outer** function $f$ acts on its output.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Read right to left',
          text: 'In $f \\circ g$, the function written on the **right** acts **first**. That feels backwards, but it matches $f(g(x))$: you cannot apply $f$ until you know $g(x)$. The circle $\\circ$ is not multiplication — $(f \\circ g)(x)$ and $(fg)(x)$ are completely different.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $(f \\circ g)(2)$ and $(g \\circ f)(2)$ for $f(x) = x^2 + 1$, $g(x) = 2x - 3$',
          steps: [
            { tex: 'g(2) = 2(2) - 3 = 1', why: 'For $f \\circ g$, start with the inner function $g$.' },
            { tex: '(f \\circ g)(2) = f(1) = 1^2 + 1 = 2', why: 'Feed that output into $f$.' },
            { tex: 'f(2) = 2^2 + 1 = 5', why: 'For $g \\circ f$ the roles swap: now $f$ is inside, so it goes first.' },
            { tex: '(g \\circ f)(2) = g(5) = 2(5) - 3 = 7', why: 'Feed $5$ into $g$.' },
          ],
          result: '$(f \\circ g)(2) = 2$ but $(g \\circ f)(2) = 7$: the order matters.',
        },
        {
          type: 'table',
          headers: ['$x$', '$1$', '$2$', '$3$', '$4$'],
          rows: [
            ['$f(x)$', '$3$', '$1$', '$4$', '$2$'],
            ['$g(x)$', '$4$', '$3$', '$1$', '$2$'],
          ],
          caption: 'Composition works for tables too: $f(g(1)) = f(4) = 2$, while $g(f(1)) = g(3) = 1$.',
        },
        {
          type: 'code',
          title: 'compose.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <functional>

using Fn = std::function<double(double)>;

Fn compose(Fn f, Fn g) {
    return [=](double x) { return f(g(x)); };
}

int main() {
    Fn f = [](double x) { return x * x + 1; };
    Fn g = [](double x) { return 2 * x - 3; };
    std::printf("f(g(2)) = %g\\n", compose(f, g)(2));
    std::printf("g(f(2)) = %g\\n", compose(g, f)(2));
}`,
          output: `f(g(2)) = 2
g(f(2)) = 7`,
          annotations: [
            { lines: '6-8', text: '`compose(f, g)` returns a brand-new function that runs `g` first and passes its result to `f` — exactly $f \\circ g$.' },
            { lines: '13-14', text: 'Swapping the arguments swaps the order of the pipeline, and the answer changes.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Let $f(x) = x^2 - 3$ and $g(x) = 2x + 1$. Find $f(g(-2))$.',
      label: '$f(g(-2)) =$',
      answer: '6',
      hint: 'Inside first: compute $g(-2)$, then plug that number into $f$.',
      explanation: 'Inner first: $g(-2) = 2(-2) + 1 = -3$. Then $f(-3) = (-3)^2 - 3 = 9 - 3 = 6$. If you computed $g(f(-2))$ by mistake you would get $g(1) = 3$, and if you multiplied $f(-2) \\cdot g(-2) = 1 \\cdot (-3)$ you would get $-3$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'truefalse',
      prompt: 'For any two functions, $f \\circ g = g \\circ f$.',
      answer: false,
      explanation: 'Composition is **not** commutative. With $f(x) = x^2 + 1$ and $g(x) = 2x - 3$, we found $(f \\circ g)(2) = 2$ but $(g \\circ f)(2) = 7$. Think of real processes: "put on socks, then shoes" is not the same as "shoes, then socks". Some special pairs do commute — for example a function and its inverse, as the next lesson shows — but that is the exception.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Formulas for compositions',
      blocks: [
        {
          type: 'p',
          text: 'To find a formula for $f(g(x))$, take the formula for $f$ and replace **every** $x$ with the entire expression $g(x)$, in parentheses. It is the same substitution skill as evaluating $f(a + 1)$ — the input just happens to be a whole function.',
        },
        {
          type: 'derivation',
          title: '$f(g(x))$ for $f(x) = x^2 + 1$ and $g(x) = 2x - 3$',
          steps: [
            { tex: 'f\\big(g(x)\\big) = f(2x - 3)', why: 'Replace $g(x)$ with its formula.' },
            { tex: '= (2x - 3)^2 + 1', why: 'In $f(x) = x^2 + 1$, replace $x$ with $(2x - 3)$.' },
            { tex: '= 4x^2 - 12x + 9 + 1', why: 'Expand $(2x - 3)^2 = 4x^2 - 12x + 9$ — keep the middle term $2 \\cdot 2x \\cdot (-3)$.' },
            { tex: '= 4x^2 - 12x + 10', why: 'Combine constants.' },
          ],
          result: 'Check against the earlier number: at $x = 2$, $16 - 24 + 10 = 2$. ✓',
        },
        {
          type: 'derivation',
          title: '$g(f(x))$ for the same pair',
          steps: [
            { tex: 'g\\big(f(x)\\big) = g(x^2 + 1)', why: 'Now $f$ is inside.' },
            { tex: '= 2(x^2 + 1) - 3', why: 'In $g(x) = 2x - 3$, replace $x$ with $(x^2 + 1)$.' },
            { tex: '= 2x^2 - 1', why: 'Distribute and combine: $2x^2 + 2 - 3$.' },
          ],
          result: 'At $x = 2$: $8 - 1 = 7$. ✓ Two different formulas — composition depends on order.',
        },
        {
          type: 'compare',
          left: {
            title: 'Composition $f \\circ g$',
            tone: 'neutral',
            tex: ['f(g(x)) = (2x - 3)^2 + 1', '= 4x^2 - 12x + 10'],
            text: 'Output of $g$ becomes the input of $f$.',
          },
          right: {
            title: 'Product $fg$',
            tone: 'neutral',
            tex: ['f(x)\\,g(x) = (x^2 + 1)(2x - 3)', '= 2x^3 - 3x^2 + 2x - 3'],
            text: 'Both work on the same $x$; outputs are multiplied.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Always check with one number',
          text: 'After simplifying a composition formula, plug in an easy input (like $x = 0$ or $x = 2$) into both your formula and the two-step evaluation. If they disagree, there is an algebra slip — usually a dropped middle term or a missing set of parentheses.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'expr',
      prompt: 'Let $f(x) = 3x - 1$ and $g(x) = x^2 + 2x$. Find and simplify $f(g(x))$.',
      label: '$f(g(x)) =$',
      answer: '3x^2 + 6x - 1',
      answerTex: '3x^2 + 6x - 1',
      hint: 'Replace the $x$ in $3x - 1$ with $(x^2 + 2x)$.',
      explanation: '$f(g(x)) = 3(x^2 + 2x) - 1 = 3x^2 + 6x - 1$. The parentheses matter: without them you might write $3x^2 + 2x - 1$, multiplying only the first term by $3$. Check at $x = 1$: $g(1) = 3$, $f(3) = 8$, and $3 + 6 - 1 = 8$. ✓',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'expr',
      prompt: 'With the same $f(x) = 3x - 1$ and $g(x) = x^2 + 2x$, find and simplify $g(f(x))$.',
      label: '$g(f(x)) =$',
      answer: '9x^2 - 1',
      answerTex: '9x^2 - 1',
      hint: 'Replace **both** $x$\'s in $x^2 + 2x$ with $(3x - 1)$.',
      explanation: '$g(f(x)) = (3x - 1)^2 + 2(3x - 1) = 9x^2 - 6x + 1 + 6x - 2 = 9x^2 - 1$. The $x$-terms cancel — a pleasant surprise, but only if both substitutions were made. Check at $x = 1$: $f(1) = 2$, $g(2) = 8$, and $9 - 1 = 8$. ✓ Compare with $f(g(x)) = 3x^2 + 6x - 1$: a different function.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The domain of a composition',
      blocks: [
        {
          type: 'p',
          text: 'For $f(g(x))$ to make sense, two things must happen in order: $g$ must accept $x$, and then $f$ must accept whatever $g$ produced. A broken link anywhere in the chain breaks the whole computation.',
        },
        {
          type: 'theorem',
          name: 'Domain of $f \\circ g$',
          text: 'The domain of $f \\circ g$ is the set of all $x$ such that **(1)** $x$ is in the domain of $g$, and **(2)** $g(x)$ is in the domain of $f$.',
        },
        {
          type: 'derivation',
          title: 'Domain of $f(g(x))$ for $f(x) = \\dfrac{1}{x - 2}$ and $g(x) = \\sqrt{x}$',
          steps: [
            { tex: 'x \\ge 0', why: 'Condition (1): $g(x) = \\sqrt{x}$ needs a non-negative input.' },
            { tex: 'g(x) \\ne 2', why: 'Condition (2): $f$ rejects the input $2$ (zero denominator), so $g(x)$ must not be $2$.' },
            { tex: '\\sqrt{x} \\ne 2 \\iff x \\ne 4', why: 'Square both sides; for $x \\ge 0$ this is reversible.' },
            { tex: '\\text{Domain} = [0, 4) \\cup (4, \\infty)', why: 'Combine the conditions. Matches the formula $f(g(x)) = \\frac{1}{\\sqrt{x} - 2}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you cannot just read the final formula',
          text: 'Simplifying can hide condition (1). Take $f(x) = x^2$ and $g(x) = \\sqrt{x}$. Then $f(g(x)) = (\\sqrt{x})^2 = x$, which *looks* defined everywhere. But the computation starts by evaluating $\\sqrt{x}$, which fails for negative $x$. So $f \\circ g$ is "$x$, for $x \\ge 0$" — a half-line, not the full line $y = x$.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 4],
          equal: true,
          functions: [
            { expr: 'x', label: '$y = x$', color: 'gray', dashed: true },
            { expr: 'sqrt(x)^2', label: '$y = (\\sqrt{x})^2$', color: 'blue' },
          ],
          points: [{ x: 0, y: 0, label: '(0, 0)', color: 'blue' }],
          caption: 'The composite $(\\sqrt{x})^2$ agrees with $y = x$ only where $\\sqrt{x}$ exists. For $x < 0$ it is undefined.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Let $f(x) = \\sqrt{x - 1}$ and $g(x) = x^2$. What is the domain of $f(g(x))$?',
      options: [
        { text: '$[1, \\infty)$', why: 'That is the domain of $f$ itself. But $g(x) = x^2$ can be $\\ge 1$ for negative $x$ too — e.g. $g(-2) = 4$.' },
        { text: '$(-\\infty, \\infty)$', why: 'That is only condition (1), the domain of $g$. At $x = 0$, $f(g(0)) = \\sqrt{0 - 1}$ is not real.' },
        { text: '$[-1, 1]$', why: 'This is exactly where $x^2 \\le 1$ — the inequality is reversed. For $x = 0.5$, $\\sqrt{0.25 - 1}$ is not real.' },
        { text: '$(-\\infty, -1] \\cup [1, \\infty)$', correct: true, why: 'We need $g(x) = x^2$ to be in the domain of $f$: $x^2 - 1 \\ge 0$, i.e. $x \\le -1$ or $x \\ge 1$.' },
      ],
      explanation: '$f(g(x)) = \\sqrt{x^2 - 1}$. Condition (1): $g$ accepts every $x$. Condition (2): $f$ needs its input $\\ge 1$, so $x^2 \\ge 1$, which means $|x| \\ge 1$: $x \\le -1$ or $x \\ge 1$. The domain is $(-\\infty, -1] \\cup [1, \\infty)$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Decomposing: finding the inside and the outside',
      blocks: [
        {
          type: 'p',
          text: 'Often you need to run composition in reverse: given a complicated function, recognise it as an outer function applied to an inner one. Ask "what would I compute **first** if I evaluated this on a calculator?" — that is the inner function. Whatever is done to the result is the outer function.',
        },
        {
          type: 'table',
          headers: ['$h(x)$', 'inner $g(x)$', 'outer $f(x)$', 'check $f(g(x))$'],
          rows: [
            ['$(3x + 1)^5$', '$3x + 1$', '$x^5$', '$(3x + 1)^5$'],
            ['$\\sqrt{x^2 + 9}$', '$x^2 + 9$', '$\\sqrt{x}$', '$\\sqrt{x^2 + 9}$'],
            ['$\\dfrac{1}{(x - 4)^2}$', '$x - 4$', '$\\dfrac{1}{x^2}$', '$\\dfrac{1}{(x-4)^2}$'],
            ['$|2x - 7|$', '$2x - 7$', '$|x|$', '$|2x - 7|$'],
          ],
          caption: 'Decompositions are not unique: $\\frac{1}{(x-4)^2}$ could also use inner $(x - 4)^2$ and outer $\\frac{1}{x}$. Any choice that composes back correctly is valid.',
        },
        {
          type: 'derivation',
          title: 'Decompose $h(x) = \\dfrac{2}{\\sqrt{x} + 5}$ into three steps',
          steps: [
            { tex: 'u = \\sqrt{x}', why: 'The first thing computed is the square root.' },
            { tex: 'v = u + 5', why: 'Then add $5$ to it.' },
            { tex: 'h = \\frac{2}{v}', why: 'Finally divide $2$ by the result.' },
            { tex: 'h(x) = f\\big(g(k(x))\\big), \\quad k(x) = \\sqrt{x},\\ g(x) = x + 5,\\ f(x) = \\tfrac{2}{x}', why: 'A composition of three functions; you can chain as many as you like.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Why instructors care: the chain rule',
          text: 'In Calculus I, the **chain rule** differentiates $f(g(x))$ by differentiating the outer and inner functions separately. Every chain rule problem starts with exactly this decomposition step, so being fluent at spotting "inside" and "outside" now will save you real pain later.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Refactoring is decomposition',
          text: 'Splitting `return std::sqrt(x*x + 9);` into `double inner = x*x + 9; return std::sqrt(inner);` is decomposition. Programmers do it to make code readable and testable; mathematicians do it to apply rules that work on one simple layer at a time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Decompose $h(x) = \\sqrt{x^2 + 9}$ as $h(x) = f(g(x))$, taking the inner function to be everything under the square root.',
      template: 'The inner function is $g(x) =$ ___ and the outer function is $f(x) =$ ___.',
      blanks: [{ answers: ['$x^2 + 9$'] }, { answers: ['$\\sqrt{x}$'] }],
      wordBank: ['$x^2 + 9$', '$\\sqrt{x}$', '$x^2$', '$\\sqrt{x} + 3$', '$x + 3$'],
      explanation: 'Evaluating $h$ by hand, you first compute $x^2 + 9$ and then take its square root. So the inner function is $g(x) = x^2 + 9$ and the outer is $f(x) = \\sqrt{x}$. Check: $f(g(x)) = \\sqrt{x^2 + 9}$. ✓ Beware the tempting $\\sqrt{x} + 3$: $\\sqrt{x^2 + 9}$ is **not** $x + 3$, because $\\sqrt{a + b} \\ne \\sqrt{a} + \\sqrt{b}$ (try $x = 4$: $\\sqrt{25} = 5$, not $7$).',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'A student finds $f(g(x))$ for $f(x) = x^2 - x$ and $g(x) = x + 2$. Tap the first incorrect line.',
      lines: [
        '$f(g(x)) = f(x + 2)$',
        '$= (x + 2)^2 - x$',
        '$= x^2 + 4x + 4 - x$',
        '$= x^2 + 3x + 4$',
      ],
      errorLines: [2],
      explanation: 'Line 2 replaces only the first $x$. In $f(x) = x^2 - x$, **every** $x$ must become $(x + 2)$: $f(x + 2) = (x + 2)^2 - (x + 2) = x^2 + 4x + 4 - x - 2 = x^2 + 3x + 2$. Check at $x = 0$: $g(0) = 2$ and $f(2) = 4 - 2 = 2$, which matches $x^2 + 3x + 2$ but not the student\'s $x^2 + 3x + 4$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Composition in the wild',
      blocks: [
        {
          type: 'p',
          text: 'Composition appears whenever one quantity depends on a second, which in turn depends on a third. A stone dropped in a pond makes a circular ripple whose radius grows with time, and whose area depends on the radius. Area as a function of **time** is a composition.',
        },
        {
          type: 'derivation',
          title: 'Ripple area as a function of time',
          steps: [
            { tex: 'r(t) = 2t', why: 'Suppose the radius grows $2$ cm per second ($t$ in seconds, $r$ in cm).' },
            { tex: 'A(r) = \\pi r^2', why: 'Area of a circle as a function of its radius.' },
            { tex: 'A\\big(r(t)\\big) = \\pi (2t)^2 = 4\\pi t^2', why: 'Compose: substitute $r(t)$ into $A$. Units chain too: seconds → cm → cm².' },
            { tex: 'A\\big(r(5)\\big) = 4\\pi (25) = 100\\pi \\approx 314 \\text{ cm}^2', why: 'After $5$ seconds the radius is $10$ cm and the area is $100\\pi$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Easing functions in game animation',
          text: 'Smooth animation is composition. Raw progress $t$ runs from $0$ to $1$; an **easing function** like $s(t) = 3t^2 - 2t^3$ ("smoothstep") reshapes it so motion starts and ends gently; then linear interpolation $\\text{lerp}(a, b, u) = a + (b - a)u$ turns that into a position. The position on screen is $\\text{lerp}\\big(a, b, s(t)\\big)$ — an outer function applied to an inner one. Swapping easing curves changes the "feel" without touching anything else.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Pipelines',
          text: 'Unix shell pipelines (`cat log.txt | grep error | wc -l`), image filters and audio effect chains are all compositions: each stage takes the previous stage\'s output as its input. The order of stages matters, for the same reason $f \\circ g \\ne g \\circ f$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'A ripple\'s radius is $r(t) = 4t$ cm after $t$ seconds, and the area of a circle is $A(r) = \\pi r^2$. Find $A(r(3))$, the area after $3$ seconds, in cm². (An exact answer like `144pi` or a decimal both work.)',
      answer: '144pi',
      answerTex: '144\\pi',
      unit: 'cm²',
      hint: 'Inner first: $r(3) = 12$. Then compute $A(12)$.',
      explanation: 'Inner function first: $r(3) = 4 \\cdot 3 = 12$ cm. Then $A(12) = \\pi \\cdot 12^2 = 144\\pi \\approx 452.39$ cm². Equivalently, $A(r(t)) = \\pi(4t)^2 = 16\\pi t^2$, and $16\\pi \\cdot 9 = 144\\pi$.',
    },
  ],
  takeaways: [
    '$(f \\pm g)(x)$, $(fg)(x)$ and $\\left(\\frac{f}{g}\\right)(x)$ combine outputs at the same input; their domain is the overlap of the domains, minus zeros of $g$ for a quotient.',
    '$(f \\circ g)(x) = f(g(x))$: the inner function $g$ acts first, and its output is fed to $f$.',
    'Composition is not commutative: in general $f(g(x)) \\ne g(f(x))$, and $f \\circ g$ is not the product $fg$.',
    'To find a composition formula, replace **every** $x$ in the outer formula by the inner expression in parentheses; check with one number.',
    'Domain of $f \\circ g$: $x$ must be in the domain of $g$, and $g(x)$ in the domain of $f$ — decide it before simplifying.',
    'Decomposing $h = f \\circ g$ ("what is computed first?") is the setup for the chain rule in calculus.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 3.4 Composition of Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/3-4-composition-of-functions',
      source: 'openstax',
      note: 'Function arithmetic, composition from formulas, tables and graphs, and domains of composite functions.',
    },
    {
      title: "Paul's Online Notes — Combining Functions",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/CombiningFunctions.aspx',
      source: 'paul',
      note: 'Short, clear examples of sums, products, quotients and compositions, including $f \\circ g$ versus $g \\circ f$.',
    },
    {
      title: 'Wikipedia — Function composition',
      url: 'https://en.wikipedia.org/wiki/Function_composition',
      source: 'wikipedia',
      note: 'For the curious: properties of composition (associativity, iteration) and its role in programming languages.',
    },
  ],
};
