import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-integration-by-parts',
  title: 'Integration by Parts',
  summary: 'The product rule run backwards: trade an integral you cannot do for one you can.',
  minutes: 18,
  objectives: [
    'Derive the integration by parts formula $\\int u\\,dv = uv - \\int v\\,du$ from the product rule',
    'Choose $u$ and $dv$ wisely using the LIATE heuristic',
    'Evaluate definite integrals by parts, including the boundary term $uv\\Big|_a^b$',
    'Apply parts repeatedly, and organise the work with the tabular method',
    'Solve "looping" integrals such as $\\int e^x \\sin x\\,dx$ by treating the integral as an unknown',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The product rule, run backwards',
      blocks: [
        {
          type: 'p',
          text: '[[u-substitution]] is the chain rule run backwards: it handles integrands that look like $f(g(x))\\,g\'(x)$. But many integrands are a plain **product** of two unrelated functions, like $x e^x$, $x \\cos x$ or $x^2 \\ln x$. No substitution untangles them. For those we reverse the *other* big differentiation rule: the [[product-rule]].',
        },
        {
          type: 'derivation',
          title: 'Deriving the formula',
          steps: [
            { tex: '\\frac{d}{dx}\\big[u(x)\\,v(x)\\big] = u\'(x)\\,v(x) + u(x)\\,v\'(x)', why: 'The product rule, for any two differentiable functions $u$ and $v$.' },
            { tex: 'u(x)\\,v(x) = \\int u\'(x)\\,v(x)\\,dx + \\int u(x)\\,v\'(x)\\,dx', why: 'Integrate both sides. The left side is the integral of a derivative, so it is just $uv$ (the constants of integration can be absorbed into the remaining integrals).' },
            { tex: '\\int u(x)\\,v\'(x)\\,dx = u(x)\\,v(x) - \\int v(x)\\,u\'(x)\\,dx', why: 'Solve for one of the two integrals by subtracting the other.' },
            { tex: '\\int u\\,dv = uv - \\int v\\,du', why: 'Shorthand: write $dv = v\'(x)\\,dx$ and $du = u\'(x)\\,dx$, exactly as in $u$-substitution.' },
          ],
          result: 'This is the [[integration-by-parts]] formula. It does not finish the integral; it **exchanges** $\\int u\\,dv$ for $\\int v\\,du$.',
        },
        {
          type: 'theorem',
          name: 'Integration by parts',
          tex: '\\int u\\,dv = uv - \\int v\\,du',
          text: 'Split the integrand into a part $u$ that you will **differentiate** and a part $dv$ that you will **integrate**. The method wins when $\\int v\\,du$ is simpler than the integral you started with.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this helps at all',
          text: 'Differentiating can make a factor *simpler* ($x \\to 1$, $\\ln x \\to \\frac{1}{x}$), while integrating can leave a factor *no worse* ($e^x \\to e^x$, $\\cos x \\to \\sin x$). Integration by parts lets you differentiate one factor and integrate the other at the cost of one minus sign and a boundary term $uv$. If you choose well, the new integral has lost the factor that was causing the trouble.',
        },
        {
          type: 'deepdive',
          title: 'A picture of the formula',
          blocks: [
            {
              type: 'p',
              text: 'Plot the curve $v = \\sqrt{u}$ for $u$ from $1$ to $b$. The blue area under the curve is $\\int v\\,du$; the orange area to its *left* (between the curve and the $v$-axis) is $\\int u\\,dv$. Together they fill a big rectangle $b \\cdot v(b)$ minus the small rectangle $1 \\cdot v(1)$ — that is, $uv$ evaluated between the endpoints. So $\\int u\\,dv = uv\\Big| - \\int v\\,du$.',
            },
            {
              type: 'graph',
              x: [-0.3, 4.6],
              y: [-0.3, 2.4],
              functions: [{ expr: 'sqrt(x)', label: '$v = \\sqrt{u}$', domain: [0, 4.6] }],
              areas: [
                { expr: 'sqrt(x)', from: 1, to: 'b', color: 'blue' },
                { expr: 'sqrt(b)', expr2: '1', from: 0, to: 1, color: 'orange' },
                { expr: 'sqrt(b)', expr2: 'sqrt(x)', from: 1, to: 'b', color: 'orange' },
              ],
              sliders: [{ name: 'b', min: 1.2, max: 4.4, step: 0.05, value: 4, label: '$b$' }],
              readouts: [
                { label: 'blue $\\int v\\,du$ + orange $\\int u\\,dv$ $=$', expr: '(2/3)(b^1.5 - 1) + (b^1.5 - 1)/3', digits: 4 },
                { label: '$uv\\Big|_{1}^{b} = b\\sqrt{b} - 1 =$', expr: 'b*sqrt(b) - 1', digits: 4 },
              ],
              caption: 'The two readouts always agree: the two areas tile the difference of two rectangles. (Horizontal axis is $u$, vertical axis is $v$.)',
            },
          ],
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the integration by parts formula.',
      template: '$\\int u\\,dv =$ ___ $-\\int$ ___',
      blanks: [{ answers: ['$uv$'] }, { answers: ['$v\\,du$'] }],
      wordBank: ['$uv$', '$v\\,du$', '$u\\,dv$', '$u\'v\'$', '$du\\,dv$'],
      explanation: 'The formula is $\\int u\\,dv = uv - \\int v\\,du$. It comes straight from integrating the product rule $(uv)\' = u\'v + uv\'$. Notice the roles swap in the new integral: $u$ is replaced by its derivative ($du$) and $dv$ by its antiderivative ($v$).',
    },
    {
      kind: 'concept',
      title: 'First example: $\\int x e^x\\,dx$',
      blocks: [
        {
          type: 'p',
          text: 'The recipe is always the same: pick $u$ and $dv$ (together they must make up the **whole** integrand, including $dx$), compute $du$ by differentiating and $v$ by integrating, then plug into the formula.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int x e^x\\,dx$',
          steps: [
            { tex: 'u = x, \\qquad dv = e^x\\,dx', why: 'Differentiating $x$ gives $1$ — the troublesome factor disappears. And $e^x$ is easy to integrate.' },
            { tex: 'du = dx, \\qquad v = e^x', why: 'Differentiate $u$, integrate $dv$. No $+C$ is needed for $v$: any antiderivative works, so take the simplest.' },
            { tex: '\\int x e^x\\,dx = x e^x - \\int e^x\\,dx', why: 'Substitute into $uv - \\int v\\,du$.' },
            { tex: '= x e^x - e^x + C', why: 'The new integral is a basic one. Now the constant of integration appears, once, at the end.' },
            { tex: '= (x - 1)e^x + C', why: 'Factor for a tidy final answer.' },
          ],
          result: '$\\int x e^x\\,dx = (x - 1)e^x + C$. Check by differentiating: $\\frac{d}{dx}[(x-1)e^x] = e^x + (x-1)e^x = x e^x$. ✓',
        },
        {
          type: 'compare',
          left: {
            title: 'Bad choice: $u = e^x$, $dv = x\\,dx$',
            tone: 'bad',
            tex: ['du = e^x\\,dx, \\quad v = \\tfrac{x^2}{2}', '\\int x e^x\\,dx = \\tfrac{x^2}{2}e^x - \\int \\tfrac{x^2}{2} e^x\\,dx'],
            text: 'Correct algebra, but the new integral has $x^2$ — it is *harder* than the original.',
          },
          right: {
            title: 'Good choice: $u = x$, $dv = e^x\\,dx$',
            tone: 'good',
            tex: ['du = dx, \\quad v = e^x', '\\int x e^x\\,dx = x e^x - \\int e^x\\,dx'],
            text: 'The power of $x$ drops from $1$ to $0$, leaving a basic integral.',
          },
        },
        {
          type: 'graph',
          x: [-4, 2],
          y: [-1.5, 4],
          functions: [
            { expr: 'x e^x', label: '$f(x) = x e^x$', color: 'blue' },
            { expr: '(x - 1)e^x', label: '$F(x) = (x-1)e^x$', color: 'purple' },
          ],
          tangents: [{ expr: '(x - 1)e^x', at: 'a', color: 'orange' }],
          points: [{ x: 'a', y: 'a e^a', color: 'blue' }],
          sliders: [{ name: 'a', min: -3.5, max: 1.3, step: 0.05, value: -1.5, label: '$a$' }],
          readouts: [
            { label: 'slope of $F$ at $a$ $=$', expr: 'a e^a', digits: 4 },
            { label: '$f(a) =$', expr: 'a e^a', digits: 4 },
          ],
          caption: 'The slope of the purple antiderivative always equals the height of the blue integrand. Note $F$ bottoms out at $x = 0$, exactly where $f$ crosses zero.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Always check by differentiating',
          text: 'Integration by parts has several places to drop a sign. Differentiating your answer takes ten seconds and catches nearly every slip — the derivative should reproduce the integrand exactly.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Use integration by parts with $u = x$ and $dv = \\cos x\\,dx$ to evaluate $\\int x \\cos x\\,dx$.',
      label: '$\\int x\\cos x\\,dx =$',
      answer: 'x sin(x) + cos(x)',
      answerTex: 'x\\sin x + \\cos x',
      upToConstant: true,
      hint: '$du = dx$ and $v = \\sin x$. Then $\\int \\sin x\\,dx = -\\cos x$ — watch the double negative.',
      explanation: 'With $u = x$, $du = dx$, $dv = \\cos x\\,dx$, $v = \\sin x$: $\\int x\\cos x\\,dx = x\\sin x - \\int \\sin x\\,dx = x \\sin x - (-\\cos x) = x\\sin x + \\cos x + C$. Check: $\\frac{d}{dx}(x\\sin x + \\cos x) = \\sin x + x\\cos x - \\sin x = x\\cos x$. ✓',
    },
    {
      kind: 'concept',
      title: 'Choosing $u$: the LIATE heuristic',
      blocks: [
        {
          type: 'p',
          text: 'The whole art of integration by parts is choosing $u$. You want $u$ to get *simpler* when differentiated, and $dv$ to be something you *can* integrate. A popular rule of thumb, [[calc2-liate|LIATE]], ranks function types; choose $u$ to be whichever factor comes **first** in the list:',
        },
        {
          type: 'table',
          headers: ['Letter', 'Type', 'Examples', 'Why it makes a good $u$'],
          rows: [
            ['**L**', 'Logarithmic', '$\\ln x$, $\\log_2 x$', 'Its derivative $\\frac{1}{x}$ is algebraic; but $\\int \\ln x\\,dx$ is not obvious'],
            ['**I**', 'Inverse trig', '$\\arctan x$, $\\arcsin x$', 'Derivatives like $\\frac{1}{1+x^2}$ are algebraic'],
            ['**A**', 'Algebraic', '$x$, $x^3$, $\\sqrt{x}$', 'Powers drop by one each time you differentiate'],
            ['**T**', 'Trigonometric', '$\\sin x$, $\\cos 3x$', 'Integrates easily, cycles forever when differentiated'],
            ['**E**', 'Exponential', '$e^x$, $e^{-2x}$', 'The easiest of all to integrate — save it for $dv$'],
          ],
          caption: 'Types near the top are hard to integrate but simplify when differentiated; types near the bottom integrate effortlessly.',
        },
        {
          type: 'p',
          text: 'A surprising consequence: you can integrate $\\ln x$ *by itself* by viewing it as the product $\\ln x \\cdot 1$. The "other factor" is $dv = dx$.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\ln x\\,dx$',
          steps: [
            { tex: 'u = \\ln x, \\qquad dv = dx', why: 'L comes first in LIATE. The only other factor is the invisible $1$, so $dv = 1\\,dx$.' },
            { tex: 'du = \\frac{1}{x}\\,dx, \\qquad v = x', why: 'Differentiate $\\ln x$; integrate $1$.' },
            { tex: '\\int \\ln x\\,dx = x\\ln x - \\int x \\cdot \\frac{1}{x}\\,dx', why: 'Plug into $uv - \\int v\\,du$.' },
            { tex: '= x \\ln x - \\int 1\\,dx', why: 'The $x$ cancels — the logarithm has vanished from the integral.' },
            { tex: '= x\\ln x - x + C', why: 'Integrate $1$.' },
          ],
          result: '$\\int \\ln x\\,dx = x\\ln x - x + C$ (for $x > 0$). The same trick gives $\\int \\arctan x\\,dx = x\\arctan x - \\frac{1}{2}\\ln(1 + x^2) + C$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why LIATE works (and when to ignore it)',
          text: 'LIATE is really one question: *which factor do I not know how to integrate, or which one shrinks when differentiated?* Logs and inverse trig functions are hard to integrate but have algebraic derivatives, so they must be $u$. Exponentials and sines integrate for free, so they belong in $dv$. It is a heuristic, not a theorem — for $\\int x^3 e^{x^2}\\,dx$, the winning choice is $u = x^2$, $dv = x e^{x^2}\\,dx$, because $dv$ must be something you can actually integrate.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'On exams, write the four quantities $u$, $du$, $v$, $dv$ in a little box before applying the formula. Graders award partial credit for a correct setup, and the box makes sign errors much easier to spot.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'For $\\int x^2 \\ln x\\,dx$, which choice of $u$ and $dv$ works?',
      options: [
        {
          text: '$u = \\ln x$, $dv = x^2\\,dx$',
          correct: true,
          why: 'Then $du = \\frac{1}{x}dx$ and $v = \\frac{x^3}{3}$, so $\\int v\\,du = \\int \\frac{x^2}{3}\\,dx$ — a plain power. L comes before A in LIATE.',
        },
        {
          text: '$u = x^2$, $dv = \\ln x\\,dx$',
          why: 'To find $v$ you would need $\\int \\ln x\\,dx$ — possible, but then $\\int v\\,du = \\int (x\\ln x - x)\\,2x\\,dx$ still contains $x^2 \\ln x$. You have gone in a circle.',
        },
        {
          text: '$u = x^2 \\ln x$, $dv = dx$',
          why: 'Then $du = (2x\\ln x + x)\\,dx$ and $v = x$, giving $\\int (2x^2 \\ln x + x^2)\\,dx$ — the original integral reappears, doubled. Not progress.',
        },
        {
          text: '$u = x$, $dv = x\\ln x\\,dx$',
          why: 'Integrating $x\\ln x$ for $v$ already requires a separate integration by parts, and the logarithm survives. Far more work than necessary.',
        },
      ],
      explanation: 'Logarithms are hard to integrate but differentiate into algebra, so $u = \\ln x$. Then $\\int x^2\\ln x\\,dx = \\frac{x^3}{3}\\ln x - \\int \\frac{x^3}{3}\\cdot\\frac{1}{x}\\,dx = \\frac{x^3}{3}\\ln x - \\frac{x^3}{9} + C$.',
    },
    {
      kind: 'expr',
      prompt: 'Finish the job: evaluate $\\int x^2 \\ln x\\,dx$ for $x > 0$.',
      label: '$\\int x^2\\ln x\\,dx =$',
      answer: '(x^3/3) ln(x) - x^3/9',
      answerTex: '\\frac{x^3}{3}\\ln x - \\frac{x^3}{9}',
      upToConstant: true,
      domain: [0.5, 3],
      hint: '$u = \\ln x$, $dv = x^2\\,dx$, so $du = \\frac{1}{x}\\,dx$ and $v = \\frac{x^3}{3}$.',
      explanation: '$\\int x^2 \\ln x\\,dx = \\frac{x^3}{3}\\ln x - \\int \\frac{x^3}{3}\\cdot \\frac{1}{x}\\,dx = \\frac{x^3}{3}\\ln x - \\frac{1}{3}\\int x^2\\,dx = \\frac{x^3}{3}\\ln x - \\frac{x^3}{9} + C$. Check: the derivative is $x^2 \\ln x + \\frac{x^3}{3}\\cdot\\frac{1}{x} - \\frac{x^2}{3} = x^2\\ln x$. ✓',
    },
    {
      kind: 'concept',
      title: 'Definite integrals by parts',
      blocks: [
        {
          type: 'p',
          text: 'For a definite integral, the boundary term $uv$ gets evaluated at the limits too. Integrating the product rule from $a$ to $b$ (using the [[fundamental-theorem-of-calculus]]) gives:',
        },
        {
          type: 'theorem',
          name: 'Integration by parts, definite form',
          tex: '\\int_a^b u\\,dv = uv\\Big|_a^b - \\int_a^b v\\,du',
          text: 'The limits are $x$-values throughout. Unlike $u$-substitution, you do not change the limits.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int_0^1 x e^x\\,dx$',
          steps: [
            { tex: 'u = x,\\ du = dx; \\qquad dv = e^x\\,dx,\\ v = e^x', why: 'Same choice as before: differentiate the $x$ away.' },
            { tex: '\\int_0^1 x e^x\\,dx = x e^x\\Big|_0^1 - \\int_0^1 e^x\\,dx', why: 'Definite form of the formula.' },
            { tex: '= (1\\cdot e - 0 \\cdot 1) - \\big(e^x\\big)\\Big|_0^1', why: 'Evaluate the boundary term: $1 \\cdot e^1 - 0 \\cdot e^0$.' },
            { tex: '= e - (e - 1)', why: 'The remaining integral is $e^1 - e^0 = e - 1$.' },
            { tex: '= 1', why: 'The $e$\'s cancel.' },
          ],
          result: 'The area under $y = x e^x$ from $0$ to $1$ is exactly $1$. (Same as $(x-1)e^x\\Big|_0^1 = 0 - (-1)$, as it must be.)',
        },
        {
          type: 'graph',
          x: [-0.3, 6.6],
          y: [-5, 3],
          functions: [{ expr: 'x sin(x)', label: '$y = x\\sin x$' }],
          areas: [{ expr: 'x sin(x)', from: 0, to: 'b', color: 'teal' }],
          sliders: [{ name: 'b', min: 0.1, max: 6.4, step: 0.05, value: 3.14, label: '$b$' }],
          readouts: [{ label: '$\\int_0^b x\\sin x\\,dx = \\sin b - b\\cos b =$', expr: 'sin(b) - b cos(b)', digits: 4 }],
          caption: 'By parts, $\\int_0^b x\\sin x\\,dx = \\big[-x\\cos x + \\sin x\\big]_0^b$. Set $b$ near $\\pi$ for the next question, then push past $\\pi$ and watch the negative area subtract.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not forget the boundary term',
          text: 'The most common mistake in definite parts problems is evaluating $\\int_a^b v\\,du$ but forgetting to evaluate $uv$ at the limits — or evaluating $uv$ only at the top limit. Both terms of the formula need the $\\Big|_a^b$ treatment.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Evaluate $\\int_0^{\\pi} x \\sin x\\,dx$.',
      label: '$\\int_0^\\pi x\\sin x\\,dx =$',
      answer: 'pi',
      answerTex: '\\pi',
      hint: 'Take $u = x$, $dv = \\sin x\\,dx$, so $v = -\\cos x$. Evaluate $-x\\cos x\\Big|_0^{\\pi}$ carefully: $\\cos \\pi = -1$.',
      explanation: 'With $u = x$, $v = -\\cos x$: $\\int_0^\\pi x\\sin x\\,dx = -x\\cos x\\Big|_0^\\pi + \\int_0^\\pi \\cos x\\,dx = (-\\pi\\cos\\pi + 0) + \\sin x\\Big|_0^\\pi = \\pi + 0 = \\pi$. The boundary term does all the work here, because $\\int_0^\\pi \\cos x\\,dx = 0$.',
    },
    {
      kind: 'concept',
      title: 'Repeated parts and the tabular method',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes one application only gets you partway. In $\\int x^2 e^x\\,dx$, choosing $u = x^2$ lowers the power to $x^1$ — so apply parts again to the new integral.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int x^2 e^x\\,dx$',
          steps: [
            { tex: '\\int x^2 e^x\\,dx = x^2 e^x - \\int 2x\\,e^x\\,dx', why: 'First pass: $u = x^2$, $du = 2x\\,dx$, $dv = e^x\\,dx$, $v = e^x$.' },
            { tex: '= x^2 e^x - 2\\int x e^x\\,dx', why: 'Pull the constant $2$ out. The power of $x$ dropped from $2$ to $1$.' },
            { tex: '= x^2 e^x - 2\\big(x e^x - e^x\\big) + C', why: 'Second pass: we already found $\\int x e^x\\,dx = x e^x - e^x$.' },
            { tex: '= (x^2 - 2x + 2)\\,e^x + C', why: 'Distribute the $-2$ (it flips the sign of $-e^x$ to $+2e^x$) and factor.' },
          ],
          result: '$\\int x^2 e^x\\,dx = (x^2 - 2x + 2)e^x + C$. In general, $\\int x^n e^x\\,dx$ needs $n$ passes — one per power of $x$.',
        },
        {
          type: 'p',
          text: 'When $u$ is a polynomial and $dv$ can be integrated over and over, the bookkeeping collapses into a table — the [[calc2-tabular-integration|tabular method]]. Column **D**: differentiate $u$ until you reach $0$. Column **I**: integrate $dv$ the same number of times. Attach alternating signs $+, -, +, -, \\dots$ and multiply along the diagonals.',
        },
        {
          type: 'table',
          headers: ['Sign', 'D (differentiate $x^3$)', 'I (integrate $\\sin x$)'],
          rows: [
            ['$+$', '$x^3$', '$\\sin x$'],
            ['$-$', '$3x^2$', '$-\\cos x$'],
            ['$+$', '$6x$', '$-\\sin x$'],
            ['$-$', '$6$', '$\\cos x$'],
            ['(stop)', '$0$', '$\\sin x$'],
          ],
          caption: 'Each D entry multiplies the I entry one row **below** it, with the sign of its own row: $(+)(x^3)(-\\cos x) + (-)(3x^2)(-\\sin x) + (+)(6x)(\\cos x) + (-)(6)(\\sin x)$.',
        },
        {
          type: 'math',
          tex: '\\int x^3 \\sin x\\,dx = -x^3\\cos x + 3x^2 \\sin x + 6x\\cos x - 6\\sin x + C',
          caption: 'Four applications of integration by parts, done in one table.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the signs alternate',
          text: 'Each pass of the formula produces $uv - \\int v\\,du$. The minus sign in front of the new integral multiplies *everything* that comes out of the next pass, so the second product picks up one minus, the third picks up two (a plus), and so on. The table is just integration by parts with the parentheses expanded. It works only when the D column eventually hits $0$ — that is, when $u$ is a polynomial.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A reduction formula is a recursion',
          text: 'One pass of parts on $\\int x^n e^x\\,dx$ gives $x^n e^x - n\\int x^{n-1}e^x\\,dx$: the same problem with $n$ one smaller. A formula like this is called a [[calc2-reduction-formula|reduction formula]], and to a programmer it is simply a recursive function with base case $\\int e^x\\,dx = e^x$. Computer algebra systems are full of them.',
        },
        {
          type: 'code',
          title: 'reduction.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Integral of x^n e^x is P_n(x) e^x. Integration by parts gives
// P_n(x) = x^n - n * P_{n-1}(x), with P_0(x) = 1.
std::vector<long long> nextPoly(const std::vector<long long>& prev, int n) {
    std::vector<long long> p(n + 1, 0);       // p[k] = coefficient of x^k
    p[n] = 1;                                  // the x^n term (uv)
    for (int k = 0; k < n; ++k) p[k] = -n * prev[k];   // minus n * integral
    return p;
}

int main() {
    std::vector<long long> p = {1};            // P_0 = 1
    for (int n = 1; n <= 4; ++n) {
        p = nextPoly(p, n);
        std::printf("n = %d:", n);
        for (int k = n; k >= 0; --k) std::printf(" %+lld", p[k]);
        std::printf("\\n");
    }
}`,
          output: `n = 1: +1 -1
n = 2: +1 -2 +2
n = 3: +1 -3 +6 -6
n = 4: +1 -4 +12 -24 +24`,
          annotations: [
            { lines: '4-5', text: 'The reduction formula: one pass of integration by parts with $u = x^n$, $dv = e^x\\,dx$.' },
            { lines: 8, text: 'The boundary term $uv = x^n e^x$ contributes the leading coefficient $1$.' },
            { lines: 9, text: 'The $-n\\int x^{n-1}e^x\\,dx$ part: every coefficient of $P_{n-1}$ is multiplied by $-n$.' },
            { lines: 18, text: 'Prints coefficients from $x^n$ down to the constant. Row $n = 2$ reads $x^2 - 2x + 2$, matching the derivation.' },
          ],
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Use repeated integration by parts (or the tabular method) to evaluate $\\int x^2 \\cos x\\,dx$.',
      label: '$\\int x^2\\cos x\\,dx =$',
      answer: 'x^2 sin(x) + 2x cos(x) - 2 sin(x)',
      answerTex: 'x^2\\sin x + 2x\\cos x - 2\\sin x',
      upToConstant: true,
      hint: 'D column: $x^2, 2x, 2, 0$. I column: $\\cos x, \\sin x, -\\cos x, -\\sin x$. Signs $+, -, +$.',
      explanation: 'Diagonal products: $(+)(x^2)(\\sin x) + (-)(2x)(-\\cos x) + (+)(2)(-\\sin x) = x^2\\sin x + 2x\\cos x - 2\\sin x + C$. Check: the derivative is $2x\\sin x + x^2\\cos x + 2\\cos x - 2x\\sin x - 2\\cos x = x^2\\cos x$. ✓',
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: the tabular method can be used directly on $\\int e^x \\sin x\\,dx$, because both $e^x$ and $\\sin x$ can be differentiated and integrated repeatedly.',
      answer: false,
      explanation: 'The table only terminates when the D column reaches $0$, which requires $u$ to be a polynomial. Differentiating $\\sin x$ or $e^x$ never produces $0$ — the columns cycle forever. Integrals like $\\int e^x\\sin x\\,dx$ need a different idea: the "loop" trick on the next card.',
    },
    {
      kind: 'concept',
      title: 'The loop: when the integral comes back',
      blocks: [
        {
          type: 'p',
          text: 'Try $\\int e^x \\sin x\\,dx$. Neither factor simplifies when differentiated. Apply parts twice anyway, and something remarkable happens: the original integral reappears. Instead of giving up, call it $I$ and **solve for it** like an unknown in an equation.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $I = \\int e^x \\sin x\\,dx$',
          steps: [
            { tex: 'I = \\int e^x \\sin x\\,dx', why: 'Name the integral. We will treat $I$ as an unknown.' },
            { tex: 'I = e^x \\sin x - \\int e^x \\cos x\\,dx', why: 'First pass: $u = \\sin x$, $du = \\cos x\\,dx$, $dv = e^x\\,dx$, $v = e^x$.' },
            { tex: '\\int e^x\\cos x\\,dx = e^x\\cos x + \\int e^x \\sin x\\,dx', why: 'Second pass on the new integral, with the **same kind** of choice: $u = \\cos x$, $du = -\\sin x\\,dx$, $v = e^x$. The two minus signs make a plus.' },
            { tex: 'I = e^x\\sin x - e^x\\cos x - I', why: 'Substitute back. The last integral is $I$ itself!' },
            { tex: '2I = e^x(\\sin x - \\cos x)', why: 'Add $I$ to both sides — ordinary algebra on the unknown $I$.' },
            { tex: 'I = \\tfrac{1}{2}e^x(\\sin x - \\cos x) + C', why: 'Divide by $2$, and add the constant of integration now that no integral sign remains.' },
          ],
          result: '$\\int e^x\\sin x\\,dx = \\frac{1}{2}e^x(\\sin x - \\cos x) + C$. Differentiate to check: $\\frac{1}{2}e^x(\\sin x - \\cos x) + \\frac{1}{2}e^x(\\cos x + \\sin x) = e^x\\sin x$. ✓',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the integral comes back',
          text: 'Differentiating $\\sin x$ twice gives $-\\sin x$, and integrating $e^x$ twice gives $e^x$. So after two passes you are integrating $-e^x\\sin x$: the original integrand times $-1$. That $-1$ is what saves you. It puts $-I$ on the right side, which you can move left to get $2I$. (If the sign had come back as $+I$, you would get $0 = \\dots$ and learn nothing.)',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not switch horses midstream',
          text: 'On the second pass you must keep the trig factor as $u$ (and the exponential as $dv$). If you switch to $u = e^x$, $dv = \\cos x\\,dx$, the second pass exactly **undoes** the first, and you arrive at the useless identity $I = I$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Damped oscillations',
          text: 'Integrands like $e^{-kt}\\sin(\\omega t)$ describe springs with friction, a camera shake that dies away, or a bouncing UI element settling into place. Computing their total displacement or energy is exactly a loop integral like this one.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $I = \\int e^x \\cos x\\,dx$ and reaches a contradiction. Tap the first line that is wrong.',
      lines: [
        '$u = \\cos x,\\ dv = e^x\\,dx$, so $du = -\\sin x\\,dx,\\ v = e^x$',
        '$I = e^x\\cos x - \\int e^x \\sin x\\,dx$',
        '$\\int e^x\\sin x\\,dx = e^x \\sin x - \\int e^x\\cos x\\,dx = e^x\\sin x - I$',
        '$I = e^x\\cos x - e^x\\sin x + I$',
        '$0 = e^x(\\cos x - \\sin x)$, so the method fails',
      ],
      errorLines: [2],
      explanation: 'Line 2 drops the minus sign from $du$. Correctly, $I = e^x\\cos x - \\int e^x(-\\sin x)\\,dx = e^x\\cos x + \\int e^x\\sin x\\,dx$. Then line 3 (which is right) gives $I = e^x\\cos x + e^x\\sin x - I$, so $2I = e^x(\\sin x + \\cos x)$ and $I = \\frac{1}{2}e^x(\\sin x + \\cos x) + C$. A contradiction like "$0 = $ a non-zero function" is a red flag for a sign error, not a failed method.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for evaluating $\\int e^{x}\\sin x\\,dx$ with the loop trick in order.',
      lines: [
        'Call the integral $I$ and apply parts with $u = \\sin x$, $dv = e^x\\,dx$',
        'Apply parts to the new integral with $u = \\cos x$, $dv = e^x\\,dx$',
        'Recognise $I$ on the right-hand side',
        'Move it to the left to get $2I = e^x(\\sin x - \\cos x)$',
        'Divide by $2$ and add $+C$',
      ],
      distractors: ['Apply parts to the new integral with $u = e^x$, $dv = \\cos x\\,dx$'],
      explanation: 'The second pass must keep the trig function as $u$. The distractor switches roles, which undoes the first pass and leads to $I = I$. Once $I$ reappears with coefficient $-1$, the problem becomes algebra: $I = (\\dots) - I$ gives $2I = (\\dots)$.',
    },
  ],
  takeaways: [
    'Integration by parts, $\\int u\\,dv = uv - \\int v\\,du$, is the product rule integrated. It exchanges one integral for another.',
    'Choose $u$ to simplify when differentiated and $dv$ to be easy to integrate; LIATE (Log, Inverse trig, Algebraic, Trig, Exponential) ranks good choices for $u$.',
    'For definite integrals, evaluate the boundary term too: $\\int_a^b u\\,dv = uv\\Big|_a^b - \\int_a^b v\\,du$.',
    'Polynomial times $e^x$, $\\sin x$ or $\\cos x$ needs one pass per power; the tabular method (D and I columns with alternating signs) organises this.',
    'When the original integral reappears with a minus sign, call it $I$ and solve for it algebraically.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 3.1 Integration by Parts',
      url: 'https://openstax.org/books/calculus-volume-2/pages/3-1-integration-by-parts',
      source: 'openstax',
      note: 'Free textbook section with many more worked examples, including definite integrals by parts.',
    },
    {
      title: "Paul's Online Notes — Integration by Parts",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/IntegrationByParts.aspx',
      source: 'paul',
      note: 'Excellent discussion of how to choose u, plus the tabular method and the e^x cos x loop.',
    },
    {
      title: 'Wikipedia — Integration by parts',
      url: 'https://en.wikipedia.org/wiki/Integration_by_parts',
      source: 'wikipedia',
      note: 'Has the area-picture interpretation of the formula and the LIATE rule with its exceptions.',
    },
  ],
};
