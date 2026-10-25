import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-newtons-method',
  title: "Newton's Method",
  summary: 'Solve equations no formula can touch: ride the tangent line down to the axis, repeat, and watch the correct digits double every step.',
  minutes: 18,
  objectives: [
    "Derive Newton's iteration $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ from the tangent line",
    'Carry out Newton iterations by hand and organise them in a table',
    'Explain quadratic convergence: why the number of correct digits roughly doubles',
    "Implement Newton's method in code with a tolerance and an iteration cap",
    'Recognise when the method fails: horizontal tangents, cycles, divergence and the wrong root',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Equations with no formula',
      blocks: [
        {
          type: 'p',
          text: 'Algebra hands you formulas for solving linear and quadratic equations. But try $\\cos x = x$, or $x^5 - x - 1 = 0$: no combination of algebra steps isolates $x$ (and for general fifth-degree polynomials, it is proven that no such formula exists). Yet calculators produce answers to these instantly. How?',
        },
        {
          type: 'p',
          text: 'Any equation can be rewritten as $f(x) = 0$, so the job is to find a [[zero-of-a-function|zero]] of $f$. The [[intermediate-value-theorem]] can tell you a zero exists between two points where $f$ changes sign, and you could narrow it down by repeatedly halving the interval — but that gains only about one decimal digit every three or four halvings. [[newtons-method|Newton\'s method]] is dramatically faster, and its key idea comes straight from the last lesson: near a point, a curve looks like its tangent line, and lines are easy to solve.',
        },
        {
          type: 'graph',
          x: [-0.5, 3.5],
          y: [-3, 8],
          functions: [{ expr: 'x^2 - 2', label: '$y = x^2 - 2$' }],
          tangents: [{ expr: 'x^2 - 2', at: 'a', color: 'orange' }],
          segments: [{ from: ['a', 0], to: ['a', 'a^2 - 2'], color: 'gray', dashed: true }],
          points: [
            { x: 'a', y: 'a^2 - 2', label: 'current guess' },
            { x: 'a - (a^2 - 2)/(2a)', y: 0, color: 'red', label: 'next guess' },
            { x: 'sqrt(2)', y: 0, color: 'green', open: true },
          ],
          sliders: [{ name: 'a', min: 0.6, max: 3.2, step: 0.05, value: 3, label: 'current guess $x_n$' }],
          readouts: [
            { label: 'next guess $x_{n+1} =$', expr: 'a - (a^2 - 2)/(2a)', digits: 6 },
            { label: 'true root $\\sqrt{2} \\approx$', expr: 'sqrt(2)', digits: 6 },
          ],
          caption: 'Follow the orange tangent line down to the $x$-axis: where it lands (red) is much closer to the root (green circle) than where you started. Now set the slider to the red value and repeat.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Walking downhill in fog',
          text: 'Imagine you are on a hillside in thick fog and want to reach sea level. You cannot see the shoreline, but you can feel the slope under your feet. Newton\'s method assumes the ground continues at that slope, walks to where that straight ramp would hit sea level, then feels the slope again. Each new reading corrects the last.',
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Deriving the formula',
      blocks: [
        {
          type: 'p',
          text: 'Start with a guess $x_n$. Replace $f$ by its tangent line (its linearization) at $x_n$, and solve **that** equation instead. The solution is the next guess $x_{n+1}$.',
        },
        {
          type: 'derivation',
          title: 'Where does the tangent line at $x_n$ cross the axis?',
          steps: [
            { tex: "y = f(x_n) + f'(x_n)(x - x_n)", why: 'The tangent line at $(x_n, f(x_n))$ in point-slope form — the linearization $L(x)$ from the previous lesson.' },
            { tex: "0 = f(x_n) + f'(x_n)(x_{n+1} - x_n)", why: 'Call the $x$-intercept $x_{n+1}$; there $y = 0$.' },
            { tex: "f'(x_n)(x_{n+1} - x_n) = -f(x_n)", why: 'Subtract $f(x_n)$ from both sides.' },
            { tex: "x_{n+1} - x_n = -\\frac{f(x_n)}{f'(x_n)}", why: 'Divide by the slope — allowed only if $f\'(x_n) \\ne 0$. A horizontal tangent never reaches the axis.' },
            { tex: "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}", why: 'Add $x_n$ to both sides.' },
          ],
          result: 'Each Newton step subtracts the correction $\\frac{f(x_n)}{f\'(x_n)}$ from the current guess.',
        },
        {
          type: 'theorem',
          name: "Newton's method",
          tex: "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}, \\qquad n = 0, 1, 2, \\ldots",
          text: 'Start from an initial guess $x_0$ near a zero of a differentiable function $f$, and iterate until successive guesses agree to the accuracy you need.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the correction has the right size and sign',
          text: 'The ratio $\\frac{f(x_n)}{f\'(x_n)}$ is "height ÷ slope" = the horizontal distance the tangent needs to drop that height. If $f(x_n) > 0$ on a rising curve ($f\' > 0$), the correction is positive and you step **left**, toward the zero. If $f(x_n) < 0$ there, you step right. The formula automatically points you the correct way — and when $f(x_n) = 0$ the correction is $0$, so a root is a fixed point of the iteration.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'Newton described the method around 1669 and illustrated it on the cubic $x^3 - 2x - 5 = 0$. Joseph Raphson published a streamlined version in 1690, which is why it is also called the **Newton–Raphson method**. The modern derivative form came later, once calculus notation had matured.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: "Complete Newton's iteration.",
      template: '$x_{n+1} = x_n \\;-$ ___ $\\div$ ___',
      blanks: [{ answers: ['$f(x_n)$'] }, { answers: ["$f'(x_n)$"] }],
      wordBank: ['$f(x_n)$', "$f'(x_n)$", "$f''(x_n)$", '$x_n$', '$f(x_{n+1})$'],
      explanation: 'The correction is the current height divided by the current slope, $\\frac{f(x_n)}{f\'(x_n)}$: how far the tangent line must travel horizontally to fall to $y = 0$. Everything is evaluated at the *current* guess $x_n$, because $x_{n+1}$ is what we are computing.',
    },
    {
      kind: 'concept',
      title: 'Computing $\\sqrt{2}$, and why the digits double',
      blocks: [
        {
          type: 'p',
          text: '$\\sqrt{2}$ is the positive zero of $f(x) = x^2 - 2$. With $f\'(x) = 2x$, Newton\'s formula simplifies to something remarkably clean.',
        },
        {
          type: 'derivation',
          title: "Newton's method for $\\sqrt{2}$",
          steps: [
            { tex: 'x_{n+1} = x_n - \\frac{x_n^2 - 2}{2x_n}', why: 'Substitute $f(x_n) = x_n^2 - 2$ and $f\'(x_n) = 2x_n$.' },
            { tex: '= \\frac{2x_n^2 - (x_n^2 - 2)}{2x_n} = \\frac{x_n^2 + 2}{2x_n}', why: 'Combine over the common denominator $2x_n$.' },
            { tex: '= \\frac{1}{2}\\left(x_n + \\frac{2}{x_n}\\right)', why: 'Split the fraction: $\\frac{x_n^2}{2x_n} + \\frac{2}{2x_n}$.' },
            { tex: 'x_1 = \\tfrac{1}{2}\\left(1 + \\tfrac{2}{1}\\right) = 1.5', why: 'Start from $x_0 = 1$.' },
            { tex: 'x_2 = \\tfrac{1}{2}\\left(1.5 + \\tfrac{2}{1.5}\\right) = \\tfrac{17}{12} \\approx 1.416667', why: '$\\frac{2}{1.5} = \\frac{4}{3}$, and $\\frac{1}{2}\\left(\\frac{3}{2} + \\frac{4}{3}\\right) = \\frac{1}{2} \\cdot \\frac{17}{6} = \\frac{17}{12}$.' },
          ],
          result: 'The update is "average the guess $x$ with $\\frac{2}{x}$". If $x$ is too big, $\\frac{2}{x}$ is too small, and their average lands in between — closer to $\\sqrt{2}$.',
        },
        {
          type: 'table',
          headers: ['$n$', '$x_n$', 'error $|x_n - \\sqrt{2}|$', 'correct decimals'],
          rows: [
            ['$0$', '$1$', '$4.1 \\times 10^{-1}$', '$0$'],
            ['$1$', '$1.5$', '$8.6 \\times 10^{-2}$', '$0$'],
            ['$2$', '$1.416666666667$', '$2.5 \\times 10^{-3}$', '$2$'],
            ['$3$', '$1.414215686275$', '$2.1 \\times 10^{-6}$', '$5$'],
            ['$4$', '$1.414213562375$', '$1.6 \\times 10^{-12}$', '$11$'],
          ],
          caption: 'True value: $\\sqrt{2} = 1.41421356237309\\ldots$ After a slow start, the number of correct decimals roughly doubles each step: $2 \\to 5 \\to 11$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the digits double: quadratic convergence',
          text: 'The tangent-line approximation has an error proportional to the **square** of the step (last lesson). Newton\'s method inherits that ([[quadratic-convergence]]): near a simple root, the new error is roughly a constant times the old error squared, $e_{n+1} \\approx C\\,e_n^2$, where $C = \\left|\\frac{f\'\'(r)}{2f\'(r)}\\right|$. For $\\sqrt{2}$, $C = \\frac{1}{2\\sqrt{2}} \\approx 0.354$, and indeed $0.354 \\times (2.45 \\times 10^{-3})^2 \\approx 2.1 \\times 10^{-6}$. An error of $10^{-5}$ becomes about $10^{-10}$ — twice as many zeros.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'This square-root rule is far older than calculus: it is known as the **Babylonian method** or **Heron\'s method**, after Heron of Alexandria, who described it in the first century. Newton\'s method explains why it works so well, and generalises it to any differentiable function.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Apply Newton\'s method to $f(x) = x^2 - 5$ with $x_0 = 2$ to approximate $\\sqrt{5}$. Find $x_2$ (as a fraction, or to at least 4 decimal places).',
      hint: 'The update simplifies to $x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{5}{x_n}\\right)$. First find $x_1$.',
      label: '$x_2 =$',
      answer: '161/72',
      answerTex: '\\frac{161}{72} \\approx 2.236111',
      minDecimals: 4,
      explanation: '$x_1 = \\frac{1}{2}\\left(2 + \\frac{5}{2}\\right) = \\frac{9}{4} = 2.25$. Then $x_2 = \\frac{1}{2}\\left(\\frac{9}{4} + \\frac{20}{9}\\right) = \\frac{1}{2} \\cdot \\frac{81 + 80}{36} = \\frac{161}{72} \\approx 2.236111$. The true value is $\\sqrt{5} = 2.236068\\ldots$, so two steps already give three correct decimals.',
    },
    {
      kind: 'expr',
      prompt: 'To compute $\\sqrt[3]{5}$, apply Newton\'s method to $f(x) = x^3 - 5$. Write the update $x_{n+1}$ as a single simplified expression in terms of $x = x_n$.',
      hint: '$f\'(x) = 3x^2$. Compute $x - \\frac{x^3 - 5}{3x^2}$ and combine over a common denominator.',
      label: '$x_{n+1} =$',
      answer: '(2x^3 + 5)/(3x^2)',
      answerTex: '\\frac{2x^3 + 5}{3x^2}',
      domain: [0.5, 3],
      explanation: '$x - \\frac{x^3 - 5}{3x^2} = \\frac{3x^3 - x^3 + 5}{3x^2} = \\frac{2x^3 + 5}{3x^2}$, which you can also write as $\\frac{2}{3}x + \\frac{5}{3x^2}$. Like the square-root rule, it is a weighted average of $x$ and $\\frac{5}{x^2}$ — two estimates that sit on opposite sides of $\\sqrt[3]{5}$.',
    },
    {
      kind: 'concept',
      title: 'Newton in C++: how square roots get computed',
      blocks: [
        {
          type: 'p',
          text: 'In code, Newton\'s method is a short loop. Two practical details matter: a **stopping rule** (stop once a step is tiny, because the guesses have converged) and an **iteration cap** (so a bad starting guess can never hang your program).',
        },
        {
          type: 'code',
          title: 'newton_sqrt2.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// f(x) = x^2 - 2 has the positive root sqrt(2).
double f(double x)      { return x * x - 2.0; }
double fprime(double x) { return 2.0 * x; }

int main() {
    double x = 1.0;              // initial guess x0
    const double tol = 1e-10;    // stop once a step is this small
    const int maxIter = 50;      // safety net: never loop forever

    std::printf("n  x_n                error\\n");
    for (int n = 0; n < maxIter; ++n) {
        std::printf("%d  %.15f  %.2e\\n", n, x, std::fabs(x - std::sqrt(2.0)));
        double step = f(x) / fprime(x);  // assumes f'(x) != 0
        x -= step;                       // x_{n+1} = x_n - f(x_n) / f'(x_n)
        if (std::fabs(step) < tol) break;
    }
    std::printf("sqrt(2) ~ %.15f\\n", x);
}`,
          output: `n  x_n                error
0  1.000000000000000  4.14e-01
1  1.500000000000000  8.58e-02
2  1.416666666666667  2.45e-03
3  1.414215686274510  2.12e-06
4  1.414213562374690  1.59e-12
sqrt(2) ~ 1.414213562373095`,
          annotations: [
            { lines: '5-6', text: 'The function and its derivative. To solve a different equation, change only these two lines.' },
            { lines: 9, text: 'The starting guess $x_0$. For $\\sqrt{2}$ any positive start converges.' },
            { lines: '10-11', text: 'Stopping rule and safety cap — every real root-finder has both.' },
            { lines: 15, text: 'For teaching only: compare with the library `std::sqrt` to print the error.' },
            { lines: '16-17', text: 'One Newton step: compute the correction $\\frac{f(x)}{f\'(x)}$ and subtract it.' },
            { lines: 18, text: 'Once a step is below $10^{-10}$, the *next* error is around $C \\cdot (10^{-10})^2$ — far below double precision, so we stop.' },
          ],
        },
        {
          type: 'p',
          text: 'Five iterations reach the limit of `double` precision (about 16 significant digits). Notice the loop needs only multiplication, subtraction and one division per step — that is why variants of this loop live inside many software square-root and division routines, and why GPUs often refine a rough hardware estimate with one or two Newton steps.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The famous Quake III inverse square root',
          text: 'Lighting and physics need unit vectors, which means dividing by $\\sqrt{x}$ constantly. *Quake III Arena* (1999) computed $\\frac{1}{\\sqrt{x}}$ with a bit-level trick (the "magic number" `0x5f3759df`) to get a rough first guess, then ran **one Newton step** on $f(y) = \\frac{1}{y^2} - x$. Simplifying $y - \\frac{f(y)}{f\'(y)}$ gives `y = y * (1.5f - 0.5f * x * y * y);` — no division and no square root at all. One step took the error from a few percent to under $0.2\\%$, good enough for a frame of graphics.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of Newton\'s method (as an algorithm) in order.',
      lines: [
        'Choose a starting guess $x_0$ near the root (from a graph or a sign change)',
        'Evaluate $f(x_n)$ and $f\'(x_n)$ at the current guess',
        'Compute $x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$',
        'Stop if $|x_{n+1} - x_n|$ is below the tolerance (or the iteration cap is reached)',
        'Otherwise make $x_{n+1}$ the current guess and repeat from the evaluation step',
      ],
      distractors: ['Compute $x_{n+1} = x_n + \\frac{f(x_n)}{f\'(x_n)}$'],
      explanation: 'Newton\'s method is a loop: guess, evaluate, update, test, repeat. The test uses the size of the step, because a tiny step means the guesses have stopped changing. The distractor has the wrong sign — it walks *away* from the root along the tangent line.',
    },
    {
      kind: 'concept',
      title: 'Beyond square roots: solving $\\cos x = x$',
      blocks: [
        {
          type: 'p',
          text: 'The real power of Newton\'s method is that it needs nothing special about $f$ — only values and derivatives. Take $\\cos x = x$, which has no algebraic solution. Rewrite it as $f(x) = \\cos x - x = 0$, so $f\'(x) = -\\sin x - 1$.',
        },
        {
          type: 'graph',
          x: [-1, 2],
          y: [-1.5, 1.5],
          functions: [
            { expr: 'cos(x)', label: '$y = \\cos x$' },
            { expr: 'x', label: '$y = x$', color: 'purple' },
            { expr: 'cos(x) - x', label: '$f(x) = \\cos x - x$', color: 'green', dashed: true },
          ],
          points: [{ x: 0.739085, y: 0.739085, label: '(0.739, 0.739)' }],
          caption: 'The curves cross once, so $f$ has exactly one zero. The graph suggests it is a little below $1$ — so $x_0 = 1$ is a sensible starting guess.',
        },
        {
          type: 'derivation',
          title: 'First Newton step for $f(x) = \\cos x - x$, from $x_0 = 1$',
          steps: [
            { tex: 'f(1) = \\cos 1 - 1 \\approx 0.540302 - 1 = -0.459698', why: 'Evaluate $f$ at the guess (radians!).' },
            { tex: "f'(1) = -\\sin 1 - 1 \\approx -0.841471 - 1 = -1.841471", why: 'Derivative of $\\cos x$ is $-\\sin x$; derivative of $-x$ is $-1$.' },
            { tex: 'x_1 = 1 - \\frac{-0.459698}{-1.841471} \\approx 1 - 0.249636 = 0.750364', why: 'Both negative, so the correction is positive and we step left.' },
          ],
          result: 'One step moves from $1$ to $0.750364$, already within $0.012$ of the root.',
        },
        {
          type: 'table',
          headers: ['$n$', '$x_n$', '$f(x_n) = \\cos x_n - x_n$'],
          rows: [
            ['$0$', '$1$', '$-4.6 \\times 10^{-1}$'],
            ['$1$', '$0.750363868$', '$-1.9 \\times 10^{-2}$'],
            ['$2$', '$0.739112891$', '$-4.6 \\times 10^{-5}$'],
            ['$3$', '$0.739085133$', '$-2.8 \\times 10^{-10}$'],
          ],
          caption: 'The residual $f(x_n)$ shrinks quadratically as well. The solution is $x \\approx 0.739085$ (sometimes called the Dottie number).',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Organise hand computations in a table',
          text: 'Columns $n$, $x_n$, $f(x_n)$, $f\'(x_n)$, and the correction make errors easy to spot, and the shrinking $f(x_n)$ column tells you when to stop. Keep more decimals in intermediate steps than you need in the final answer — rounding early can cost you the convergence you are paying for.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Newton\'s own example: apply one step of Newton\'s method to $f(x) = x^3 - 2x - 5$ starting from $x_0 = 2$. What is $x_1$?',
      hint: 'Compute $f(2)$ and $f\'(2)$ with $f\'(x) = 3x^2 - 2$.',
      label: '$x_1 =$',
      answer: '2.1',
      answerTex: '2.1',
      explanation: '$f(2) = 8 - 4 - 5 = -1$ and $f\'(2) = 12 - 2 = 10$, so $x_1 = 2 - \\frac{-1}{10} = 2.1$. The actual root is $2.0945515\\ldots$; one more step gives about $2.094568$, already correct to four decimals.',
    },
    {
      kind: 'numeric',
      prompt: 'Apply one Newton step to $f(x) = e^x - 2$ (whose zero is $\\ln 2$), starting from $x_0 = 1$. Find $x_1$ exactly or to at least 3 decimals.',
      hint: '$f\'(x) = e^x$. Simplify $1 - \\frac{e - 2}{e}$.',
      label: '$x_1 =$',
      answer: '2/e',
      answerTex: '\\frac{2}{e} \\approx 0.7358',
      minDecimals: 3,
      explanation: '$x_1 = 1 - \\frac{e^1 - 2}{e^1} = 1 - 1 + \\frac{2}{e} = \\frac{2}{e} \\approx 0.7358$. The target is $\\ln 2 \\approx 0.6931$. The guess overshot from the right on a concave-up curve, so the tangent landed between the root and $x_0$ — every later step will approach $\\ln 2$ from the right.',
    },
    {
      kind: 'concept',
      title: 'When Newton\'s method fails',
      blocks: [
        {
          type: 'p',
          text: 'Newton\'s method is a *local* method: its fast convergence is guaranteed only when you start close enough to a root where $f\'(r) \\ne 0$. Far from a root, the tangent line can be a terrible model of the curve. Know the classic failure modes:',
        },
        {
          type: 'list',
          items: [
            '**Horizontal tangent.** If $f\'(x_n) = 0$, the tangent never meets the axis and the formula divides by zero. If $f\'(x_n)$ is merely tiny, the next guess is flung far away.',
            '**Cycling.** For $f(x) = x^3 - 2x + 2$ starting at $x_0 = 0$: $x_1 = 0 - \\frac{2}{-2} = 1$, then $x_2 = 1 - \\frac{1}{1} = 0$, and the guesses bounce between $0$ and $1$ forever.',
            '**Divergence.** For $f(x) = \\sqrt[3]{x}$ the update simplifies to $x_{n+1} = x_n - 3x_n = -2x_n$: every step doubles the distance from the root $0$, whatever the starting guess.',
            '**The wrong root.** With several zeros, a starting point near a hump can send the iteration to a distant root you did not want.',
            '**Slow convergence at a repeated root.** At a root where $f\'(r) = 0$ too (like $x^2$ at $0$), the error only halves each step instead of squaring.',
          ],
        },
        {
          type: 'graph',
          x: [-2.5, 2.5],
          y: [-2, 4],
          functions: [
            { expr: 'x^3 - 2x + 2', label: '$y = x^3 - 2x + 2$' },
            { expr: '2 - 2x', label: 'tangent at $x = 0$', color: 'orange', dashed: true },
            { expr: 'x', label: 'tangent at $x = 1$', color: 'purple', dashed: true },
          ],
          points: [
            { x: 0, y: 2, label: 'x₀ = 0' },
            { x: 1, y: 1, label: 'x₁ = 1' },
            { x: -1.769292, y: 0, color: 'green', label: 'real root ≈ −1.769' },
          ],
          caption: 'The tangent at $0$ hits the axis at $1$; the tangent at $1$ hits the axis back at $0$. The iteration is trapped in a 2-cycle, while the actual root sits far to the left.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a good starting guess matters',
          text: 'Newton\'s method trusts the tangent line, and the tangent line is only a good model near its point of tangency (its error grows like the step squared). Close to a simple root that trust is rewarded with quadratic convergence; far away, nothing is promised. Use a graph or a sign change to pick $x_0$ first.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'How production code protects itself',
          text: 'Robust root-finders (like those in numerical libraries and physics engines) cap the iterations, check for $|f\'(x)|$ near zero, and often combine Newton with bisection: keep an interval where $f$ changes sign, take the Newton step when it lands inside the interval, and fall back to halving when it does not. You get bisection\'s guarantee and Newton\'s speed.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'You apply Newton\'s method to $f(x) = x^2 - 4$ with starting guess $x_0 = 0$. What happens?',
      options: [
        {
          text: 'The method fails immediately: $f\'(0) = 0$, so $x_1$ is undefined',
          correct: true,
          why: 'The tangent line at $(0, -4)$ is horizontal, $y = -4$, and never meets the $x$-axis; the formula divides by $f\'(0) = 2 \\cdot 0 = 0$.',
        },
        {
          text: 'It converges to $x = 2$',
          why: 'It would from any positive starting guess, but from $x_0 = 0$ the very first step is undefined.',
        },
        {
          text: 'It converges to $x = -2$',
          why: 'Any negative start would converge to $-2$, but $x_0 = 0$ sits exactly at the bottom of the parabola, where the slope is zero.',
        },
        {
          text: 'It converges to $x = 0$',
          why: '$0$ is not a root, since $f(0) = -4$. Newton\'s method can only settle at points where $f = 0$.',
        },
      ],
      explanation: '$x_1 = 0 - \\frac{f(0)}{f\'(0)} = 0 - \\frac{-4}{0}$, which is undefined. Geometrically, the vertex of the parabola has a horizontal tangent. Nudging the start to $x_0 = 0.1$ avoids the division by zero but flings $x_1$ out to $20.05$ — a tiny slope means a huge step — after which the iteration slowly recovers and converges to $2$.',
    },
    {
      kind: 'truefalse',
      prompt: 'Newton\'s method always converges to the root that is closest to the starting guess.',
      answer: false,
      explanation: 'The next guess is wherever the tangent line hits the axis, which can be far from the start when the slope is small. Starting near a hump or valley can launch the iteration to a distant root, into a cycle (as with $x^3 - 2x + 2$ from $x_0 = 0$), or off to infinity (as with $\\sqrt[3]{x}$). Convergence to the nearby root is guaranteed only when you start close enough to a root with $f\' \\ne 0$.',
    },
    {
      kind: 'error',
      prompt: 'A student uses Newton\'s method on $f(x) = x^2 - 3$ with $x_0 = 2$ to approximate $\\sqrt{3}$. Tap the first wrong line.',
      lines: [
        '$f(2) = 4 - 3 = 1$',
        '$f\'(x) = 2x$, so $f\'(2) = 4$',
        '$x_1 = x_0 + \\frac{f(x_0)}{f\'(x_0)} = 2 + \\frac{1}{4}$',
        '$x_1 = 2.25$',
      ],
      errorLines: [3],
      explanation: 'Line 3 adds the correction instead of subtracting it. The formula is $x_1 = x_0 - \\frac{f(x_0)}{f\'(x_0)} = 2 - \\frac{1}{4} = 1.75$, which is close to $\\sqrt{3} \\approx 1.732$. A quick check would have caught the slip: $f(2) > 0$ on a rising curve means the root is to the **left**, but $2.25$ moved right.',
    },
  ],
  takeaways: [
    'Newton\'s method replaces $f$ by its tangent line at the current guess and solves the line: $x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$.',
    'For $\\sqrt{a}$, the update becomes $x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{a}{x_n}\\right)$ — the ancient Babylonian method.',
    'Near a simple root, convergence is quadratic: $e_{n+1} \\approx C e_n^2$, so the correct digits roughly double each step.',
    'In code, always use a tolerance on the step size and a maximum number of iterations.',
    'It can fail: horizontal tangents, cycles, divergence, the wrong root, or slow convergence at repeated roots. Choose $x_0$ from a graph or a sign change.',
  ],
  reading: [
    {
      title: "OpenStax Calculus Volume 1 — 4.9 Newton's Method",
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-9-newtons-method',
      source: 'openstax',
      note: 'Worked iterations, failure examples, and a look at other iterative processes.',
    },
    {
      title: "Paul's Online Notes — Newton's Method",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/NewtonsMethod.aspx',
      source: 'paul',
      note: 'Clear examples with iteration tables, including a case where the method fails.',
    },
    {
      title: "Wikipedia — Newton's method",
      url: 'https://en.wikipedia.org/wiki/Newton%27s_method',
      source: 'wikipedia',
      note: 'History, convergence proofs and animations of the tangent-line iteration.',
    },
    {
      title: 'Wikipedia — Fast inverse square root',
      url: 'https://en.wikipedia.org/wiki/Fast_inverse_square_root',
      source: 'wikipedia',
      note: 'The full story of the Quake III trick, including the Newton step at its heart.',
    },
  ],
};
