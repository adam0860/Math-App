import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-derivative-function',
  title: 'The Derivative as a Function',
  summary: 'Stop computing slopes one point at a time: find a formula for the slope at every $x$, read it off a graph, and differentiate again.',
  minutes: 18,
  objectives: [
    'Compute $f\'(x)$ from the limit definition for $x^2$, $\\sqrt{x}$ and $\\frac{1}{x}$',
    'Read and write the standard derivative notations, including Leibniz notation',
    'Explain why differentiability implies continuity, and identify where a function is not differentiable',
    'Sketch the graph of $f\'$ from the graph of $f$',
    'Compute and interpret second and higher derivatives',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'From a number to a function',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson you found $f\'(1) = 2$ for $f(x) = x^2$, and you were told $f\'(3) = 6$. Each was a separate limit computation. But nothing in the algebra depended on the point being $1$ or $3$. Why not do the work **once**, with a general $x$, and get a formula for the slope at every point?',
        },
        {
          type: 'definition',
          term: 'The derivative function',
          text: 'The [[derivative]] of $f$ is the function $f\'$ defined by\n\n$$f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$\n\nat every $x$ where this limit exists. Its domain is the set of those $x$ — always a subset of the domain of $f$, and sometimes a strictly smaller one.',
        },
        {
          type: 'derivation',
          title: 'Find $f\'(x)$ for $f(x) = x^2$',
          steps: [
            { tex: "f'(x) = \\lim_{h \\to 0} \\frac{(x + h)^2 - x^2}{h}", why: 'The definition, with $f(x + h) = (x + h)^2$. Treat $x$ as a fixed number while $h$ varies.' },
            { tex: '= \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}', why: 'Expand $(x + h)^2$, keeping the middle term $2xh$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{2xh + h^2}{h}', why: 'The $x^2$ terms cancel — as $f(x)$ always should.' },
            { tex: '= \\lim_{h \\to 0} (2x + h)', why: 'Factor out $h$ and cancel it with the denominator ($h \\ne 0$ inside the limit).' },
            { tex: '= 2x', why: 'Substitute $h = 0$.' },
          ],
          result: '$f\'(x) = 2x$. Now every slope is one substitution away: $f\'(1) = 2$, $f\'(3) = 6$, $f\'(-2) = -4$.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-5, 7],
          functions: [
            { expr: 'x^2', label: '$f(x) = x^2$' },
            { expr: '2x', label: '$f\'(x) = 2x$', color: 'red', dashed: true },
          ],
          tangents: [{ expr: 'x^2', at: 'a', color: 'orange' }],
          points: [
            { x: 'a', y: 'a^2', color: 'blue' },
            { x: 'a', y: '2a', color: 'red', label: '(a, f′(a))' },
          ],
          sliders: [{ name: 'a', min: -2.5, max: 2.5, step: 0.05, value: 1, label: '$a$' }],
          readouts: [{ label: 'slope of tangent $= f\'(a) =$', expr: '2a' }],
          caption: 'The **height** of the red graph at $x = a$ equals the **slope** of the orange tangent to the blue graph at $x = a$. Negative slopes on the left, zero at the bottom of the parabola, positive on the right.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why think of $f\'$ as a function?',
          text: 'Because slope *changes* from point to point, and a function is exactly the tool for describing something that changes. Once you have $f\'$ as a formula you can graph it, solve $f\'(x) = 0$ to find where the tangent is horizontal, and even take its derivative. A list of individual slopes allows none of that.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Sums and constant multiples',
          text: 'The difference quotient of $f + g$ is the sum of the two difference quotients, and a constant factor $c$ comes straight out. By the [[limit-laws]], $(f + g)\' = f\' + g\'$ and $(cf)\' = c\\,f\'$ wherever $f\'$ and $g\'$ exist. You saw this at work last lesson: the slope of $x^2 + 3x$ at $1$ was $2 + 3$. The next unit makes these rules official.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'expr',
      prompt: 'Use the limit definition to find $f\'(x)$ for $f(x) = x^2 - 3x$.',
      label: "$f'(x) =$",
      answer: '2x - 3',
      hint: 'Expand $(x + h)^2 - 3(x + h) - (x^2 - 3x)$. Everything without an $h$ should cancel.',
      explanation: 'The numerator is $(x^2 + 2xh + h^2 - 3x - 3h) - (x^2 - 3x) = 2xh + h^2 - 3h$. Dividing by $h$ gives $2x + h - 3$, and letting $h \\to 0$ gives $f\'(x) = 2x - 3$. Check: the tangent is horizontal where $2x - 3 = 0$, at $x = 1.5$ — exactly the vertex of the parabola $x^2 - 3x$, halfway between its roots $0$ and $3$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Two more from the definition: $\\sqrt{x}$ and $\\frac{1}{x}$',
      blocks: [
        {
          type: 'p',
          text: 'Polynomials cancel after expanding. Roots and fractions need a different algebra move to make the $h$ cancel. For a square root, the move is to multiply by the **conjugate**, the same trick used to rationalise denominators.',
        },
        {
          type: 'derivation',
          title: 'Find $f\'(x)$ for $f(x) = \\sqrt{x}$',
          steps: [
            { tex: "f'(x) = \\lim_{h \\to 0} \\frac{\\sqrt{x + h} - \\sqrt{x}}{h}", why: 'The definition. Substituting $h = 0$ now gives $\\frac{0}{0}$, so algebra is needed.' },
            { tex: '= \\lim_{h \\to 0} \\frac{\\sqrt{x + h} - \\sqrt{x}}{h} \\cdot \\frac{\\sqrt{x + h} + \\sqrt{x}}{\\sqrt{x + h} + \\sqrt{x}}', why: 'Multiply by $1$ in the form conjugate over conjugate. This sets up a difference of squares.' },
            { tex: '= \\lim_{h \\to 0} \\frac{(x + h) - x}{h\\left(\\sqrt{x + h} + \\sqrt{x}\\right)}', why: '$(\\sqrt{A} - \\sqrt{B})(\\sqrt{A} + \\sqrt{B}) = A - B$: the roots disappear from the numerator. Leave the denominator factored.' },
            { tex: '= \\lim_{h \\to 0} \\frac{h}{h\\left(\\sqrt{x + h} + \\sqrt{x}\\right)} = \\lim_{h \\to 0} \\frac{1}{\\sqrt{x + h} + \\sqrt{x}}', why: 'Simplify $(x + h) - x = h$ and cancel the $h$.' },
            { tex: '= \\frac{1}{\\sqrt{x} + \\sqrt{x}} = \\frac{1}{2\\sqrt{x}}', why: 'Substitute $h = 0$ (the expression is continuous in $h$ when $x > 0$). Note $\\sqrt{x} + \\sqrt{x} = 2\\sqrt{x}$.' },
          ],
          result: '$\\dfrac{d}{dx}\\sqrt{x} = \\dfrac{1}{2\\sqrt{x}}$, valid for $x > 0$.',
        },
        {
          type: 'p',
          text: 'Look at the domains. $\\sqrt{x}$ is defined on $[0, \\infty)$, but $\\frac{1}{2\\sqrt{x}}$ only on $(0, \\infty)$. At $x = 0$ the difference quotient is $\\frac{\\sqrt{h}}{h} = \\frac{1}{\\sqrt{h}} \\to \\infty$: the graph has a vertical tangent at the origin, so $f\'(0)$ does not exist. This is the "sometimes strictly smaller" from the definition.',
        },
        {
          type: 'graph',
          x: [-0.5, 6],
          y: [-0.5, 3],
          functions: [
            { expr: 'sqrt(x)', label: '$f(x) = \\sqrt{x}$' },
            { expr: '1/(2sqrt(x))', label: '$f\'(x) = \\frac{1}{2\\sqrt{x}}$', color: 'red', dashed: true },
          ],
          tangents: [{ expr: 'sqrt(x)', at: 'a', color: 'orange' }],
          sliders: [{ name: 'a', min: 0.05, max: 5.5, step: 0.05, value: 1, label: '$a$' }],
          readouts: [{ label: '$f\'(a) = \\frac{1}{2\\sqrt{a}} =$', expr: '1/(2sqrt(a))', digits: 4 }],
          caption: 'As $a \\to 0^+$ the tangent stands up vertically and $f\'(a)$ shoots to infinity. For large $a$ the curve flattens and $f\'(a) \\to 0$.',
        },
        {
          type: 'p',
          text: 'For $\\frac{1}{x}$, the move is a common denominator — the same steps you did at $a = 2$ last lesson, now with a general $x$:',
        },
        {
          type: 'derivation',
          title: 'Find $f\'(x)$ for $f(x) = \\frac{1}{x}$',
          steps: [
            { tex: "f'(x) = \\lim_{h \\to 0} \\frac{\\frac{1}{x + h} - \\frac{1}{x}}{h}", why: 'The definition.' },
            { tex: '= \\lim_{h \\to 0} \\frac{x - (x + h)}{x(x + h)} \\cdot \\frac{1}{h}', why: 'Combine the numerator over the common denominator $x(x + h)$; dividing by $h$ is multiplying by $\\frac{1}{h}$.' },
            { tex: '= \\lim_{h \\to 0} \\frac{-h}{h\\,x(x + h)} = \\lim_{h \\to 0} \\frac{-1}{x(x + h)}', why: 'Simplify $x - (x + h) = -h$ and cancel $h$.' },
            { tex: '= -\\frac{1}{x^2}', why: 'Substitute $h = 0$: $x(x + 0) = x^2$.' },
          ],
          result: '$\\dfrac{d}{dx}\\dfrac{1}{x} = -\\dfrac{1}{x^2}$ for $x \\ne 0$. At $x = 2$ this gives $-\\frac{1}{4}$, matching last lesson.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not substitute too early',
          text: 'If you plug in $h = 0$ before the $h$ cancels you get $\\frac{0}{0}$, which is not an answer. And in the $\\sqrt{x}$ derivation, do not multiply out the denominator $h(\\sqrt{x + h} + \\sqrt{x})$ — keep it factored so you can see the $h$ to cancel.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'A student differentiates $f(x) = \\sqrt{x}$ from the definition. Tap the first line that is wrong.',
      lines: [
        '$f\'(x) = \\lim_{h \\to 0} \\dfrac{\\sqrt{x+h} - \\sqrt{x}}{h}$',
        '$= \\lim_{h \\to 0} \\dfrac{(x + h) - x}{h\\left(\\sqrt{x+h} + \\sqrt{x}\\right)}$',
        '$= \\lim_{h \\to 0} \\dfrac{1}{\\sqrt{x+h} + \\sqrt{x}}$',
        '$= \\dfrac{1}{\\sqrt{x} + \\sqrt{x}}$',
        '$= \\dfrac{1}{\\sqrt{2x}}$',
      ],
      errorLines: [5],
      explanation: 'Lines 1–4 are correct (line 2 is the result of multiplying by the conjugate). The slip is in line 5: $\\sqrt{x} + \\sqrt{x}$ is **two copies** of $\\sqrt{x}$, i.e. $2\\sqrt{x}$, not $\\sqrt{2x}$ (roots do not add that way: $\\sqrt{1} + \\sqrt{1} = 2$, but $\\sqrt{2} \\approx 1.41$). The correct result is $f\'(x) = \\frac{1}{2\\sqrt{x}}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Using $\\dfrac{d}{dx}\\sqrt{x} = \\dfrac{1}{2\\sqrt{x}}$, at what value of $x$ does the tangent line to $y = \\sqrt{x}$ have slope $\\dfrac{1}{4}$?',
      label: '$x =$',
      answer: '4',
      hint: 'Solve $\\frac{1}{2\\sqrt{x}} = \\frac{1}{4}$.',
      explanation: 'Set $\\frac{1}{2\\sqrt{x}} = \\frac{1}{4}$. Cross-multiplying gives $2\\sqrt{x} = 4$, so $\\sqrt{x} = 2$ and $x = 4$. This is the payoff of having $f\'$ as a function: you can solve equations about slope, not just evaluate it.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Notation: many ways to say "derivative"',
      blocks: [
        {
          type: 'p',
          text: 'Calculus was invented twice, by Newton and Leibniz, and both notations survive — along with a few more. You need to read all of them fluently. If $y = f(x)$, each of these means the derivative function:',
        },
        {
          type: 'math',
          tex: "f'(x) = y' = \\frac{dy}{dx} = \\frac{df}{dx} = \\frac{d}{dx}f(x) = Df(x)",
        },
        {
          type: 'table',
          headers: ['Notation', 'Read as', 'Typical use'],
          rows: [
            ['$f\'(x)$', '"$f$ prime of $x$"', 'Lagrange notation; compact, names the function'],
            ['$\\dfrac{dy}{dx}$', '"dee $y$ dee $x$"', '[[leibniz-notation]]; shows *which* variables are involved'],
            ['$\\dfrac{d}{dx}\\big[x^2\\big] = 2x$', '"the derivative of $x^2$ with respect to $x$"', 'Applying the derivative to a formula directly'],
            ['$\\dot{x}$', '"$x$ dot"', 'Newton\'s notation; physics, for derivatives with respect to time'],
          ],
        },
        {
          type: 'p',
          text: 'To evaluate at a point, Lagrange notation just substitutes: $f\'(3)$. Leibniz notation uses a vertical bar: $\\dfrac{dy}{dx}\\Big|_{x = 3}$ means "compute $\\frac{dy}{dx}$, then substitute $x = 3$".',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why Leibniz notation looks like a fraction',
          text: 'Write $\\Delta x = h$ and $\\Delta y = f(x + h) - f(x)$. Then the difference quotient is $\\frac{\\Delta y}{\\Delta x}$, and the derivative is its limit: $\\frac{dy}{dx} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$. The $d$\'s are a reminder of "infinitely small $\\Delta$\'s". It is **not** literally a fraction yet, but it often behaves like one, which is why this notation makes the chain rule and related rates feel natural later on.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: '$\\frac{d}{dx}\\big[f(2)\\big]$ and $f\'(2)$ are different things. $f(2)$ is a single number, a constant, so its derivative is $0$. $f\'(2)$ means differentiate first, *then* plug in $2$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: '$\\frac{d}{dx}$ is a higher-order function',
          text: 'The derivative takes a **function** as input and returns a **function**. In C++ that is a function that accepts and returns a callable. The version below approximates $f\'(x)$ with the *symmetric* difference quotient $\\frac{f(x + h) - f(x - h)}{2h}$, which is more accurate than the one-sided version for the same $h$. Libraries for automatic differentiation (used to train neural networks and in physics solvers) build exact versions of this idea.',
        },
        {
          type: 'code',
          title: 'derivative.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <functional>

using Fn = std::function<double(double)>;

// d/dx as code: takes a function, returns a new function.
Fn derivative(Fn f) {
    const double h = 1e-5;
    return [f, h](double x) { return (f(x + h) - f(x - h)) / (2 * h); };
}

int main() {
    Fn square = [](double x) { return x * x; };
    Fn root = [](double x) { return std::sqrt(x); };

    Fn dSquare = derivative(square);   // should behave like 2x
    Fn dRoot = derivative(root);       // should behave like 1/(2 sqrt x)
    Fn ddSquare = derivative(dSquare); // second derivative: 2

    const double xs[] = {1.0, 4.0, 9.0};
    for (double x : xs) {
        std::printf("x = %.0f:  (x^2)' = %.4f   (sqrt x)' = %.4f   (x^2)'' = %.2f\\n",
                    x, dSquare(x), dRoot(x), ddSquare(x));
    }
}`,
          output: `x = 1:  (x^2)' = 2.0000   (sqrt x)' = 0.5000   (x^2)'' = 2.00
x = 4:  (x^2)' = 8.0000   (sqrt x)' = 0.2500   (x^2)'' = 2.00
x = 9:  (x^2)' = 18.0000   (sqrt x)' = 0.1667   (x^2)'' = 2.00`,
          annotations: [
            { lines: '8-11', text: '`derivative` returns a lambda that remembers `f` — a function built from a function.' },
            { lines: 19, text: 'Nothing stops us from differentiating the result again: that is a second derivative.' },
            { lines: '21-25', text: 'Compare with the exact formulas: $2x$, $\\frac{1}{2\\sqrt{x}}$ (e.g. $\\frac{1}{6} \\approx 0.1667$ at $x = 9$), and $2$.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'Let $y = f(x)$. Complete the statement about notation.',
      template: '$\\dfrac{dy}{dx}\\Big|_{x=2}$ is the same number as ___ , while $\\dfrac{d}{dx}\\big[f(2)\\big]$ equals ___ .',
      blanks: [{ answers: ["$f'(2)$"] }, { answers: ['$0$'] }],
      wordBank: ["$f'(2)$", '$0$', '$f(2)$', "$f'(x)$", '$2$'],
      explanation: 'The vertical bar means "differentiate, then evaluate at $x = 2$", which is exactly $f\'(2)$. In $\\frac{d}{dx}[f(2)]$ the function is evaluated *first*, producing a constant (a number like $4$ or $-7$), and the derivative of a constant is $0$ because its graph is a horizontal line. Order of operations matters.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Differentiability, and why it implies continuity',
      blocks: [
        {
          type: 'definition',
          term: 'Differentiable',
          text: '$f$ is [[differentiable]] at $a$ if $f\'(a)$ exists. It is differentiable on an open interval if it is differentiable at every point of that interval.',
        },
        {
          type: 'p',
          text: 'Last lesson you met the three ways differentiability fails: a **corner** ($|x|$ at $0$), a **vertical tangent** ($\\sqrt[3]{x}$ at $0$), and a **discontinuity**. A *cusp*, like $y = x^{2/3}$ at $0$, is a sharp point where the one-sided slopes go to $+\\infty$ and $-\\infty$ — a combination of the first two.',
        },
        {
          type: 'graph',
          x: [-2, 2],
          y: [-1.5, 2.5],
          equal: true,
          functions: [
            { expr: 'abs(x)', label: '$|x|$: corner' },
            { expr: 'cbrt(x^2)', label: '$x^{2/3}$: cusp', color: 'purple' },
            { expr: 'x*abs(x)', label: '$x|x|$: smooth', color: 'green' },
          ],
          points: [{ x: 0, y: 0 }],
          caption: 'All three pass through the origin. Only the green curve $x|x|$ is differentiable there: its difference quotient is $\\frac{h|h|}{h} = |h| \\to 0$, so it has a horizontal tangent.',
        },
        {
          type: 'theorem',
          name: 'Differentiable implies continuous',
          text: 'If $f$ is differentiable at $a$, then $f$ is continuous at $a$.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'f(x) - f(a) = \\frac{f(x) - f(a)}{x - a} \\cdot (x - a), \\quad x \\ne a', why: 'Multiply and divide by $x - a$. Legal because $x \\ne a$ while we take a limit as $x \\to a$.' },
            { tex: '\\lim_{x \\to a} \\big[f(x) - f(a)\\big] = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} \\cdot \\lim_{x \\to a} (x - a)', why: 'The product law for limits — allowed because both limits on the right exist.' },
            { tex: "= f'(a) \\cdot 0 = 0", why: 'The first limit is $f\'(a)$ (the $x \\to a$ form of the definition), a finite number since $f$ is differentiable. The second is $0$.' },
            { tex: '\\lim_{x \\to a} f(x) = f(a)', why: 'Add $f(a)$ to both sides. This is precisely the definition of continuity at $a$.' },
          ],
          result: 'A finite slope times a vanishing run is a vanishing rise: the graph cannot jump.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The **contrapositive** is the useful direction in practice: *if $f$ is not continuous at $a$, it is not differentiable at $a$.* The converse is false — $|x|$ is continuous but not differentiable at $0$. Expect a true/false question on exactly this.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Which of these functions is differentiable at $x = 0$?',
      options: [
        {
          text: '$f(x) = |x|$',
          why: 'Corner: the difference quotient $\\frac{|h|}{h}$ is $1$ from the right and $-1$ from the left.',
        },
        {
          text: '$f(x) = \\sqrt[3]{x}$',
          why: 'Vertical tangent: $\\frac{\\sqrt[3]{h}}{h} = h^{-2/3} \\to \\infty$.',
        },
        {
          text: '$f(x) = x|x|$',
          correct: true,
          why: '$\\frac{h|h| - 0}{h} = |h| \\to 0$ from both sides, so $f\'(0) = 0$.',
        },
        {
          text: '$f(x) = \\lfloor x \\rfloor$',
          why: 'It has a jump at $0$ (left limit $-1$, value $0$), and a function that is not continuous cannot be differentiable.',
        },
      ],
      explanation: 'Test each with the definition at $a = 0$. Only $x|x|$ (which equals $x^2$ for $x \\ge 0$ and $-x^2$ for $x < 0$) has a difference quotient with a finite two-sided limit. Its graph flattens smoothly through the origin, like $x^3$ does.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Reading the graph of $f\'$ from the graph of $f$',
      blocks: [
        {
          type: 'p',
          text: 'You do not need a formula to sketch $f\'$. At each $x$, the value $f\'(x)$ is just the slope of $f$ there, which you can estimate by eye. A few landmarks get you most of the way.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Mark horizontal tangents', text: 'Wherever the tangent to $f$ is flat (peaks, valleys, plateaus), $f\'(x) = 0$: the graph of $f\'$ crosses or touches the $x$-axis.' },
            { title: 'Mark rising and falling', text: 'Where $f$ is [[increasing-function|increasing]], $f\' > 0$ (above the axis). Where $f$ is [[decreasing-function|decreasing]], $f\' < 0$ (below the axis).' },
            { title: 'Judge steepness', text: 'Steeper parts of $f$ mean larger $|f\'|$: the graph of $f\'$ is far from the axis there. Gentle parts mean $f\'$ is near $0$.' },
            { title: 'Watch for breaks', text: 'Corners, cusps and jumps in $f$ become holes or jumps (or blow-ups) in $f\'$.' },
          ],
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-4, 6],
          functions: [
            { expr: 'x^3 - 3x', label: '$f(x) = x^3 - 3x$' },
            { expr: '3x^2 - 3', label: '$f\'(x) = 3x^2 - 3$', color: 'red', dashed: true },
          ],
          tangents: [{ expr: 'x^3 - 3x', at: 'a', color: 'orange' }],
          points: [{ x: 'a', y: '3a^2 - 3', color: 'red' }],
          sliders: [{ name: 'a', min: -2.3, max: 2.3, step: 0.05, value: -1.5, label: '$a$' }],
          readouts: [{ label: 'tangent slope $f\'(a) =$', expr: '3a^2 - 3' }],
          caption: '$f$ rises, falls on $(-1, 1)$, then rises again. So $f\'$ is positive, negative on $(-1, 1)$, then positive, with zeros at the peak $x = -1$ and valley $x = 1$. Slide $a$ and watch the red dot track the tangent\'s slope. (The formula $3x^2 - 3$ comes from the definition plus the sum rule; you will derive it with $(x+h)^3$ later in this lesson.)',
        },
        {
          type: 'table',
          headers: ['On the graph of $f$', 'On the graph of $f\'$'],
          rows: [
            ['horizontal tangent (peak, valley)', 'value $0$ (meets the $x$-axis)'],
            ['increasing', 'above the $x$-axis'],
            ['decreasing', 'below the $x$-axis'],
            ['steep', 'far from the $x$-axis'],
            ['corner or cusp', 'undefined at that point'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Height of $f\'$ is slope of $f$, not height of $f$',
          text: 'The zeros of $f$ (where its graph crosses the axis) have nothing special to do with $f\'$. In the graph above, $f$ crosses zero at $x = \\pm\\sqrt{3}$ and $0$, but $f\'$ is zero at $x = \\pm 1$, where $f$ has its flat spots. Always ask "how steep?", never "how high?".',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'The graph shows $f(x) = x^2 - 4x + 1$. Which description fits the graph of $f\'$?',
      graph: {
        type: 'graph',
        x: [-1, 5],
        y: [-4, 6],
        height: 240,
        functions: [{ expr: 'x^2 - 4x + 1', label: '$y = f(x)$' }],
      },
      options: [
        {
          text: 'A line through $(2, 0)$, negative to the left of $x = 2$ and positive to the right',
          correct: true,
          why: '$f$ falls until its vertex at $x = 2$, then rises; its slope increases steadily. Indeed $f\'(x) = 2x - 4$.',
        },
        {
          text: 'A parabola with its lowest point at $x = 2$',
          why: 'That describes $f$ itself, not its slope. The slope of a parabola changes at a constant rate, so $f\'$ is a line.',
        },
        {
          text: 'A line through $(2, 0)$, positive to the left of $x = 2$ and negative to the right',
          why: 'Signs reversed: to the left of the vertex the parabola is going **down**, so its slope is negative.',
        },
        {
          text: 'A curve that crosses the $x$-axis where $f$ does, near $x \\approx 0.27$ and $x \\approx 3.73$',
          why: 'This reads the zeros of $f$ instead of its flat spots. $f\'$ is zero where the tangent is horizontal, at the vertex.',
        },
      ],
      explanation: 'The only horizontal tangent is at the vertex, $x = 2$, so $f\'(2) = 0$. Left of the vertex the graph falls ($f\' < 0$), right of it the graph rises ($f\' > 0$), and the steepness grows evenly in both directions. By the definition (or the sum rule) $f\'(x) = 2x - 4$, a line with exactly these features.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'truefalse',
      prompt: 'If $f(x) > 0$ for every $x$, then $f\'(x) > 0$ for every $x$.',
      answer: false,
      explanation: 'Being positive is about *height*; $f\'$ measures *slope*. Take $f(x) = x^2 + 1$: it is always positive, but $f\'(x) = 2x$ is negative for $x < 0$, where the graph is falling. A function can be high up and still be going downhill.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Higher derivatives',
      blocks: [
        {
          type: 'p',
          text: 'Since $f\'$ is a function, it may have a derivative of its own. That is the **second derivative** $f\'\'$: the rate of change of the slope. Keep going for the third, fourth, … These are the [[higher-order-derivative|higher-order derivatives]].',
        },
        {
          type: 'table',
          headers: ['Order', 'Lagrange', 'Leibniz'],
          rows: [
            ['second', '$f\'\'(x)$, $y\'\'$', '$\\dfrac{d^2y}{dx^2}$'],
            ['third', '$f\'\'\'(x)$, $y\'\'\'$', '$\\dfrac{d^3y}{dx^3}$'],
            ['$n$-th', '$f^{(n)}(x)$, $y^{(n)}$', '$\\dfrac{d^ny}{dx^n}$'],
          ],
          caption: 'The parentheses in $f^{(4)}$ distinguish the fourth derivative from the fourth power $f^4$.',
        },
        {
          type: 'derivation',
          title: 'All derivatives of $f(x) = x^3$',
          steps: [
            { tex: '(x + h)^3 = x^3 + 3x^2h + 3xh^2 + h^3', why: 'Expand with the binomial theorem (or multiply $(x + h)^2(x + h)$ out by hand).' },
            { tex: "f'(x) = \\lim_{h \\to 0} \\frac{3x^2h + 3xh^2 + h^3}{h} = \\lim_{h \\to 0} (3x^2 + 3xh + h^2) = 3x^2", why: 'Subtract $x^3$, cancel $h$, substitute $h = 0$.' },
            { tex: "f''(x) = \\frac{d}{dx}\\big[3x^2\\big] = 3 \\cdot 2x = 6x", why: 'Differentiate $f\'$. A constant multiple comes out, and we already know $\\frac{d}{dx}x^2 = 2x$.' },
            { tex: "f'''(x) = \\frac{d}{dx}\\big[6x\\big] = 6", why: 'The line $6x$ has constant slope $6$.' },
            { tex: 'f^{(4)}(x) = 0, \\quad f^{(n)}(x) = 0 \\text{ for } n \\ge 4', why: 'The derivative of a constant is $0$, and the derivative of $0$ is $0$.' },
          ],
          result: 'For $x^3$: $f\' = 3x^2$, $f\'\' = 6x$, $f\'\'\' = 6$, and every later derivative is $0$. (Each derivative of a polynomial lowers the degree by one.)',
        },
        {
          type: 'p',
          text: 'What does $f\'\'$ *mean*? If $f(t)$ is position, $f\'(t)$ is velocity and $f\'\'(t)$ is [[acceleration]] — the next lesson is all about this. Geometrically, $f\'\' > 0$ means the slope is increasing, so the graph bends upward like a cup; $f\'\' < 0$ means it bends downward. You will study this bending, called [[concavity]], in detail later.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Position, velocity, acceleration, jerk',
          text: 'Game physics is a stack of derivatives. Position\'s derivative is velocity, velocity\'s is acceleration (what forces control), and acceleration\'s derivative is called [[jerk]]. Camera rigs, elevator motion and character controllers are often designed to keep jerk small, because sudden changes in acceleration feel like a jolt. That is why smooth-start "ease-in/ease-out" curves use polynomials whose higher derivatives behave nicely at the ends.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'expr',
      prompt: 'You know $\\dfrac{d}{dx}\\dfrac{1}{x} = -\\dfrac{1}{x^2}$. Use the limit definition on $g(x) = -\\dfrac{1}{x^2}$ to find the second derivative of $\\dfrac{1}{x}$.',
      label: '$\\dfrac{d^2}{dx^2}\\dfrac{1}{x} =$',
      answer: '2/x^3',
      answerTex: '\\frac{2}{x^3}',
      domain: [0.5, 3],
      hint: 'Combine $-\\frac{1}{(x+h)^2} + \\frac{1}{x^2}$ over the common denominator $x^2(x + h)^2$. The numerator becomes $(x + h)^2 - x^2 = 2xh + h^2$.',
      explanation: '$\\frac{g(x + h) - g(x)}{h} = \\frac{1}{h}\\left(\\frac{1}{x^2} - \\frac{1}{(x + h)^2}\\right) = \\frac{(x + h)^2 - x^2}{h\\,x^2(x + h)^2} = \\frac{2xh + h^2}{h\\,x^2(x + h)^2} = \\frac{2x + h}{x^2(x + h)^2}$. As $h \\to 0$ this becomes $\\frac{2x}{x^4} = \\frac{2}{x^3}$. Sanity check: for $x > 0$ it is positive, and $\\frac{1}{x}$ does bend upward there.',
    },
  ],
  takeaways: [
    '$f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$ is a function: the slope of $f$ at every $x$ where the limit exists.',
    'From the definition: $\\frac{d}{dx}x^2 = 2x$, $\\frac{d}{dx}\\sqrt{x} = \\frac{1}{2\\sqrt{x}}$ ($x > 0$), $\\frac{d}{dx}\\frac{1}{x} = -\\frac{1}{x^2}$, $\\frac{d}{dx}x^3 = 3x^2$.',
    '$f\'(x)$, $y\'$, $\\frac{dy}{dx}$ and $\\frac{d}{dx}f(x)$ all name the derivative; $\\frac{dy}{dx}\\big|_{x=a} = f\'(a)$.',
    'Differentiable implies continuous, but not conversely: corners, cusps and vertical tangents are continuous yet not differentiable.',
    'To sketch $f\'$, read slopes of $f$: flat spots give zeros, rising gives $f\' > 0$, falling gives $f\' < 0$.',
    'Higher derivatives $f\'\'$, $f\'\'\'$, $f^{(n)}$ are derivatives of derivatives; $f\'\'$ measures how fast the slope changes.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 3.2 The Derivative as a Function',
      url: 'https://openstax.org/books/calculus-volume-1/pages/3-2-the-derivative-as-a-function',
      source: 'openstax',
      note: 'The matching textbook section, including graphing derivatives and the proof that differentiability implies continuity.',
    },
    {
      title: "Paul's Online Notes — The Definition of the Derivative",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfDerivative.aspx',
      source: 'paul',
      note: 'Many more derivatives computed from the limit definition, with every algebra step shown.',
    },
    {
      title: "Paul's Online Notes — Higher Order Derivatives",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/HigherOrderDerivatives.aspx',
      source: 'paul',
      note: 'Notation and practice for second and higher derivatives (uses rules from the next unit, so skim for now).',
    },
  ],
};
