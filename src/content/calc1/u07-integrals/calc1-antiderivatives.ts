import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc1-antiderivatives',
  title: 'Antiderivatives',
  summary: 'Running differentiation in reverse: families of antiderivatives, the $+C$, and recovering position from velocity.',
  minutes: 17,
  objectives: [
    'Explain what an antiderivative is and why every antiderivative of $f$ has the form $F(x) + C$ on an interval',
    'Use indefinite-integral notation and a table of basic antiderivatives, checking every answer by differentiating',
    'Rewrite an integrand (roots, quotients, products of polynomials) so the power rule applies',
    'Solve initial value problems to pin down the constant $C$',
    'Recover velocity and position from acceleration, and connect this to physics updates in a game loop',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Undoing a derivative',
      blocks: [
        {
          type: 'p',
          text: 'So far calculus has been one-directional: given a function, find its rate of change. But many real questions run the other way. A game engine knows an object\'s **velocity** every frame and must work out where it **is**. A physicist knows the force (hence the acceleration) and wants the trajectory. Both questions ask: *which function has this derivative?*',
        },
        {
          type: 'definition',
          term: 'Antiderivative',
          text: 'A function $F$ is an [[antiderivative]] of $f$ on an interval $I$ if $F\'(x) = f(x)$ for every $x$ in $I$.',
        },
        {
          type: 'p',
          text: 'For example, $F(x) = x^3$ is an antiderivative of $f(x) = 3x^2$, because $\\frac{d}{dx}x^3 = 3x^2$. But so is $x^3 + 5$, and $x^3 - \\pi$, and $x^3 + 1000$: adding a constant changes the height of the graph, not its slope. Antiderivatives come in **families**.',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-4, 8],
          functions: [
            { expr: 'x^2 + c', label: '$y = x^2 + C$' },
            { expr: 'x^2', label: '$y = x^2$', color: 'gray', dashed: true },
          ],
          tangents: [{ expr: 'x^2 + c', at: 1, label: 'slope 2' }],
          sliders: [{ name: 'c', min: -3, max: 4, step: 0.1, value: 2, label: '$C$' }],
          readouts: [{ label: 'height at $x = 1$:', expr: '1 + c' }, { label: 'slope at $x = 1$:', expr: '2' }],
          caption: 'Every curve $y = x^2 + C$ has derivative $2x$. Slide $C$: the graph moves up and down, but the tangent at $x = 1$ keeps slope $2$. All of these are antiderivatives of $f(x) = 2x$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why vertical shifts are the *only* other antiderivatives',
          text: 'Could some wildly different function also have derivative $2x$? No. If $F\' = G\'$ on an interval, then $(G - F)\' = 0$ there. By the [[mean-value-theorem]], a function with zero derivative on an interval is constant: for any two points, $(G - F)(x_2) - (G - F)(x_1) = 0 \\cdot (x_2 - x_1) = 0$. So $G = F + C$. Once you find **one** antiderivative, you have found them all.',
        },
        {
          type: 'deepdive',
          title: 'Why "on an interval" matters',
          blocks: [
            {
              type: 'p',
              text: 'The Mean Value Theorem argument needs an unbroken interval. On a domain with a gap, the constant may differ on each piece. For instance, on $x \\neq 0$ the function',
            },
            { type: 'math', tex: 'G(x) = \\begin{cases} -\\dfrac{1}{x} + 1 & x > 0 \\\\[4pt] -\\dfrac{1}{x} - 7 & x < 0 \\end{cases}' },
            {
              type: 'p',
              text: 'has $G\'(x) = \\frac{1}{x^2}$ everywhere it is defined, yet it is not $-\\frac{1}{x}$ plus a *single* constant. Textbooks usually ignore this subtlety and write one $+C$; just know that it is really "one constant per interval".',
            },
          ],
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which function is an antiderivative of $f(x) = \\cos x$?',
      options: [
        {
          text: '$-\\sin x$',
          why: 'This is the *derivative* of $\\cos x$, not an antiderivative. Check: $\\frac{d}{dx}(-\\sin x) = -\\cos x \\neq \\cos x$.',
        },
        {
          text: '$\\dfrac{\\cos^2 x}{2}$',
          why: 'That treats $\\cos x$ as if it were the variable and applies a "power rule". Differentiating gives $-\\cos x \\sin x$ (chain rule), not $\\cos x$.',
        },
        {
          text: '$\\sin x - 4$',
          correct: true,
          why: '$\\frac{d}{dx}(\\sin x - 4) = \\cos x - 0 = \\cos x$. The constant $-4$ is harmless.',
        },
        {
          text: '$\\sin(x - 4)$',
          why: 'Its derivative is $\\cos(x - 4)$, a *shifted* cosine. Subtracting $4$ inside the function moves the graph sideways, which does change the slopes.',
        },
      ],
      explanation: 'To test a candidate antiderivative, **differentiate it** and see whether you get back $f$. Only $\\sin x - 4$ passes: $\\frac{d}{dx}\\sin x = \\cos x$, and the constant differentiates to $0$. Constants added *outside* are free; changes *inside* the function are not.',
    },
    {
      kind: 'concept',
      title: 'Indefinite integrals and the table of antiderivatives',
      blocks: [
        {
          type: 'p',
          text: 'Because antiderivatives come in families, we use a notation that names the whole family at once: the [[indefinite-integral]].',
        },
        {
          type: 'math',
          tex: '\\int f(x)\\,dx = F(x) + C \\quad\\text{means}\\quad F\'(x) = f(x)',
          caption: '$\\int$ is the integral sign, $f(x)$ is the [[integrand]], $dx$ names the variable, and $C$ is the [[constant-of-integration]].',
        },
        {
          type: 'p',
          text: 'Every derivative rule you know, read backwards, is an antiderivative rule. The most important one is the reverse power rule: to undo "bring the exponent down and subtract one", you **add one to the exponent and divide by the new exponent**.',
        },
        {
          type: 'table',
          headers: ['Function $f(x)$', 'Antiderivative $\\int f(x)\\,dx$', 'Check (derivative rule)'],
          rows: [
            ['$x^n$, $n \\neq -1$', '$\\dfrac{x^{n+1}}{n+1} + C$', '$\\frac{d}{dx}x^{n+1} = (n+1)x^n$'],
            ['$\\dfrac{1}{x}$', '$\\ln|x| + C$', '$\\frac{d}{dx}\\ln|x| = \\frac{1}{x}$'],
            ['$e^x$', '$e^x + C$', '$\\frac{d}{dx}e^x = e^x$'],
            ['$a^x$ ($a > 0, a \\neq 1$)', '$\\dfrac{a^x}{\\ln a} + C$', '$\\frac{d}{dx}a^x = a^x \\ln a$'],
            ['$\\cos x$', '$\\sin x + C$', '$\\frac{d}{dx}\\sin x = \\cos x$'],
            ['$\\sin x$', '$-\\cos x + C$', '$\\frac{d}{dx}(-\\cos x) = \\sin x$'],
            ['$\\sec^2 x$', '$\\tan x + C$', '$\\frac{d}{dx}\\tan x = \\sec^2 x$'],
            ['$\\sec x \\tan x$', '$\\sec x + C$', '$\\frac{d}{dx}\\sec x = \\sec x\\tan x$'],
            ['$\\dfrac{1}{1 + x^2}$', '$\\arctan x + C$', '$\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}$'],
            ['$\\dfrac{1}{\\sqrt{1 - x^2}}$', '$\\arcsin x + C$', '$\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}}$'],
          ],
          caption: 'Every entry is a derivative rule from Unit 4 turned around. You never have to trust a table: differentiate the right column and you get the left.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $n = -1$ is excluded, and where $\\ln|x|$ comes from',
          text: 'For $n = -1$ the power rule would give $\\frac{x^0}{0}$ — division by zero. No power of $x$ has derivative $x^{-1}$; the logarithm fills that gap. The absolute value makes it work for negative $x$ too: for $x < 0$, $\\frac{d}{dx}\\ln(-x) = \\frac{1}{-x}\\cdot(-1) = \\frac{1}{x}$ by the chain rule.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Signs on sine and cosine',
          text: 'The minus sign lives on the antiderivative of **sine**: $\\int \\sin x\\,dx = -\\cos x + C$. Remember it by checking: $\\frac{d}{dx}(-\\cos x) = -(-\\sin x) = \\sin x$.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the reverse power rule.',
      template: 'For $n \\neq -1$, $\\displaystyle\\int x^n\\,dx =$ ___ $+\\, C$, while $\\displaystyle\\int x^{-1}\\,dx =$ ___ $+\\, C$.',
      blanks: [{ answers: ['$\\dfrac{x^{n+1}}{n+1}$'] }, { answers: ['$\\ln|x|$'] }],
      wordBank: ['$\\dfrac{x^{n+1}}{n+1}$', '$nx^{n-1}$', '$\\ln|x|$', '$\\dfrac{x^0}{0}$', '$x^{n+1}$', '$-x^{-2}$'],
      explanation: 'Raise the exponent by one and divide by the new exponent: differentiating $\\frac{x^{n+1}}{n+1}$ brings down $n+1$, which cancels, leaving $x^n$. The formula breaks at $n = -1$ (it would divide by $0$), and $\\ln|x|$ is the antiderivative there. $nx^{n-1}$ is the derivative, the opposite operation.',
    },
    {
      kind: 'expr',
      prompt: 'Find $\\displaystyle\\int \\left(\\frac{3}{x} + 4\\cos x - e^x\\right)dx$ for $x > 0$.',
      label: '$\\displaystyle\\int \\cdots\\,dx =$',
      answer: '3ln(x) + 4sin(x) - e^x',
      answerTex: '3\\ln|x| + 4\\sin x - e^x + C',
      upToConstant: true,
      domain: [0.5, 3],
      hint: 'Do each term separately using the table. Constants in front just come along for the ride.',
      explanation: 'Term by term: $\\int \\frac{3}{x}\\,dx = 3\\ln|x|$, $\\int 4\\cos x\\,dx = 4\\sin x$, $\\int e^x\\,dx = e^x$. So the answer is $3\\ln|x| + 4\\sin x - e^x + C$. Check by differentiating: $\\frac{3}{x} + 4\\cos x - e^x$. ✓',
    },
    {
      kind: 'concept',
      title: 'Linearity: and rewrite before you integrate',
      blocks: [
        {
          type: 'p',
          text: 'The sum and constant-multiple rules for derivatives turn around immediately, so you can integrate term by term and pull constants out front:',
        },
        {
          type: 'theorem',
          name: 'Linearity of the indefinite integral',
          tex: '\\int \\big(a f(x) + b g(x)\\big)\\,dx = a\\int f(x)\\,dx + b\\int g(x)\\,dx',
        },
        {
          type: 'p',
          text: 'The real skill is **rewriting** the integrand so each term matches a table entry. Roots become fractional powers, $\\frac{1}{x^k}$ becomes $x^{-k}$, and quotients with a single-term denominator are split up.',
        },
        {
          type: 'derivation',
          title: 'Find $\\displaystyle\\int \\left(6x^2 - \\frac{4}{x^3} + 3\\sqrt{x}\\right)dx$',
          steps: [
            { tex: '\\int \\left(6x^2 - 4x^{-3} + 3x^{1/2}\\right)dx', why: 'Rewrite as powers: $\\frac{1}{x^3} = x^{-3}$ and $\\sqrt{x} = x^{1/2}$. Now every term fits the power rule.' },
            { tex: '= 6\\cdot\\frac{x^3}{3} - 4\\cdot\\frac{x^{-2}}{-2} + 3\\cdot\\frac{x^{3/2}}{3/2} + C', why: 'Linearity, then add one to each exponent and divide by the new exponent: $2 \\to 3$, $-3 \\to -2$, $\\frac{1}{2} \\to \\frac{3}{2}$. One $+C$ covers all three terms.' },
            { tex: '= 2x^3 + 2x^{-2} + 2x^{3/2} + C', why: 'Simplify each coefficient. Dividing by $\\frac{3}{2}$ is multiplying by $\\frac{2}{3}$, and two negatives make $-4/-2 = 2$.' },
            { tex: '= 2x^3 + \\frac{2}{x^2} + 2x\\sqrt{x} + C', why: 'Optional: return to the original style. $x^{3/2} = x \\cdot x^{1/2}$.' },
            { tex: '\\frac{d}{dx}\\left(2x^3 + 2x^{-2} + 2x^{3/2}\\right) = 6x^2 - 4x^{-3} + 3x^{1/2}\\;\\checkmark', why: 'Always check by differentiating. It takes ten seconds and catches nearly every slip.' },
          ],
          result: '$\\int \\left(6x^2 - \\frac{4}{x^3} + 3\\sqrt{x}\\right)dx = 2x^3 + \\frac{2}{x^2} + 2x^{3/2} + C$.',
        },
        {
          type: 'compare',
          left: {
            title: 'There is no product rule in reverse',
            tone: 'bad',
            tex: ['\\int x \\cdot x\\,dx \\ne \\left(\\int x\\,dx\\right)\\left(\\int x\\,dx\\right) = \\frac{x^4}{4}'],
            text: 'The integral of a product is **not** the product of the integrals.',
          },
          right: {
            title: 'Simplify first, then integrate',
            tone: 'good',
            tex: ['\\int x \\cdot x\\,dx = \\int x^2\\,dx = \\frac{x^3}{3} + C'],
            text: 'Multiply out products and split quotients like $\\frac{x^2 + 1}{x} = x + \\frac{1}{x}$ before integrating.',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors deduct for a missing $+C$ on indefinite integrals — it is the difference between "one antiderivative" and "the general antiderivative". They also love integrands like $\\frac{x^3 - 1}{\\sqrt{x}}$ that only become easy after rewriting as $x^{5/2} - x^{-1/2}$.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find $\\displaystyle\\int (x^2 + 1)^2\\,dx$.',
      label: '$\\displaystyle\\int (x^2+1)^2\\,dx =$',
      answer: 'x^5/5 + 2x^3/3 + x',
      answerTex: '\\frac{x^5}{5} + \\frac{2x^3}{3} + x + C',
      upToConstant: true,
      hint: 'There is no power rule for a squared *sum*. Expand $(x^2 + 1)^2$ first.',
      explanation: 'Expand: $(x^2 + 1)^2 = x^4 + 2x^2 + 1$. Now integrate term by term: $\\frac{x^5}{5} + \\frac{2x^3}{3} + x + C$. The tempting answer $\\frac{(x^2+1)^3}{3}$ is wrong — its derivative is $(x^2 + 1)^2 \\cdot 2x$ by the chain rule, which has an extra factor $2x$.',
    },
    {
      kind: 'truefalse',
      prompt: 'For any functions $f$ and $g$, $\\displaystyle\\int f(x)g(x)\\,dx = \\left(\\int f(x)\\,dx\\right)\\left(\\int g(x)\\,dx\\right)$.',
      answer: false,
      explanation: 'Derivatives of products need the product rule, so integrals of products cannot simply split either. Counterexample: $\\int x \\cdot 1\\,dx = \\frac{x^2}{2} + C$, but $\\left(\\int x\\,dx\\right)\\left(\\int 1\\,dx\\right) = \\frac{x^2}{2}\\cdot x = \\frac{x^3}{2}$. Integrals do split over **sums** and constant multiples — that is linearity — but not over products.',
    },
    {
      kind: 'error',
      prompt: 'A student integrates $\\displaystyle\\int \\left(3x^2 + \\frac{2}{x^2}\\right)dx$. Tap the first line that is wrong.',
      lines: [
        '$\\displaystyle\\int \\left(3x^2 + \\frac{2}{x^2}\\right)dx$',
        '$\\displaystyle= \\int 3x^2\\,dx + 2\\int \\frac{1}{x^2}\\,dx$',
        '$= x^3 + 2\\ln(x^2) + C$',
        '$= x^3 + 4\\ln|x| + C$',
      ],
      errorLines: [3],
      explanation: 'Line 3 treats $\\frac{1}{x^2}$ like $\\frac{1}{x}$. Only $x^{-1}$ integrates to a logarithm; $\\frac{1}{x^2} = x^{-2}$ follows the power rule: $\\int x^{-2}\\,dx = \\frac{x^{-1}}{-1} = -\\frac{1}{x}$. The correct answer is $x^3 - \\frac{2}{x} + C$. Differentiating the student\'s answer gives $3x^2 + \\frac{4}{x}$, which is not the integrand — the check would have caught it.',
    },
    {
      kind: 'concept',
      title: 'Initial value problems: choosing the constant',
      blocks: [
        {
          type: 'p',
          text: 'An equation like $\\frac{dy}{dx} = 3x^2 - 4x$ is a (very simple) **differential equation**: it tells you the derivative and asks for the function. Its solution is a whole family $y = x^3 - 2x^2 + C$. One extra fact — a single point the graph must pass through — picks out exactly one member. The equation plus that point is an [[initial-value-problem]].',
        },
        {
          type: 'graph',
          x: [-2, 3],
          y: [-4, 12],
          functions: [
            { expr: 'x^3 - 2x^2 + c', label: '$y = x^3 - 2x^2 + C$' },
            { expr: 'x^3 - 2x^2 + 6', label: 'the solution with $f(1) = 5$', color: 'green', dashed: true },
          ],
          points: [{ x: 1, y: 5, label: '(1, 5)', color: 'red' }],
          sliders: [{ name: 'c', min: -2, max: 10, step: 0.5, value: 1, label: '$C$' }],
          readouts: [{ label: 'height of the blue curve at $x = 1$:', expr: 'c - 1' }],
          caption: 'Slide $C$ until the blue curve passes through the red point. The readout shows the curve\'s height at $x = 1$, which is $C - 1$; it hits $5$ exactly when $C = 6$.',
        },
        {
          type: 'derivation',
          title: 'Solve $f\'(x) = 3x^2 - 4x$, $f(1) = 5$',
          steps: [
            { tex: 'f(x) = \\int (3x^2 - 4x)\\,dx = x^3 - 2x^2 + C', why: 'Find the general antiderivative with the power rule. Keep the $+C$: it is the unknown we are about to find.' },
            { tex: 'f(1) = 1^3 - 2(1)^2 + C = -1 + C', why: 'Evaluate the general solution at the given input $x = 1$.' },
            { tex: '-1 + C = 5 \\implies C = 6', why: 'Set it equal to the given output and solve for $C$.' },
            { tex: 'f(x) = x^3 - 2x^2 + 6', why: 'Substitute $C$ back. Check: $f\'(x) = 3x^2 - 4x$ ✓ and $f(1) = 1 - 2 + 6 = 5$ ✓.' },
          ],
          result: 'The unique solution is $f(x) = x^3 - 2x^2 + 6$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'One condition per constant',
          text: 'If you are given $f\'\'$, you integrate **twice** and get **two** constants ($C$ from the first integration, $D$ from the second), so you need two conditions, such as $f\'(0)$ and $f(0)$. Add the new constant at each integration — never carry an old one forward without a fresh one.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Solve the initial value problem $f\'(x) = 2x + \\cos x$, $f(0) = 4$. Then find $f(\\pi)$.',
      label: '$f(\\pi) =$',
      answer: 'pi^2 + 4',
      answerTex: '\\pi^2 + 4',
      hint: 'General antiderivative: $x^2 + \\sin x + C$. Use $f(0) = 4$ to find $C$.',
      explanation: '$f(x) = x^2 + \\sin x + C$. Then $f(0) = 0 + \\sin 0 + C = C = 4$, so $f(x) = x^2 + \\sin x + 4$. Finally $f(\\pi) = \\pi^2 + \\sin\\pi + 4 = \\pi^2 + 4 \\approx 13.87$.',
    },
    {
      kind: 'concept',
      title: 'From acceleration to position',
      blocks: [
        {
          type: 'p',
          text: 'For motion along a line, [[velocity]] is the derivative of position and [[acceleration]] is the derivative of velocity: $s\'(t) = v(t)$ and $v\'(t) = a(t)$. Turning those around, $v$ is an antiderivative of $a$, and $s$ is an antiderivative of $v$. The initial velocity $v(0)$ and initial position $s(0)$ supply the two constants.',
        },
        {
          type: 'derivation',
          title: 'A ball is thrown upward at $48$ ft/s from the top of a $64$-ft building. Gravity gives $a(t) = -32$ ft/s².',
          steps: [
            { tex: 'v(t) = \\int -32\\,dt = -32t + C', why: 'Velocity is an antiderivative of acceleration.' },
            { tex: 'v(0) = 48 \\implies C = 48, \\quad v(t) = -32t + 48', why: 'At $t = 0$ the ball leaves the hand at $48$ ft/s upward (positive = up).' },
            { tex: 's(t) = \\int (-32t + 48)\\,dt = -16t^2 + 48t + D', why: 'Position is an antiderivative of velocity. A **new** constant $D$ appears.' },
            { tex: 's(0) = 64 \\implies D = 64, \\quad s(t) = -16t^2 + 48t + 64', why: 'The ball starts at the top of the building, $64$ ft up.' },
            { tex: 'v(t) = 0 \\implies t = 1.5, \\quad s(1.5) = -36 + 72 + 64 = 100', why: 'At the peak the ball stops rising: velocity is $0$. Plug that time into $s$.' },
            { tex: 's(t) = 0 \\implies -16(t^2 - 3t - 4) = 0 \\implies t = 4', why: 'It lands when its height is $0$. Factor $t^2 - 3t - 4 = (t - 4)(t + 1)$ and reject $t = -1$.' },
          ],
          result: 'The ball peaks at $100$ ft after $1.5$ s and hits the ground at $t = 4$ s.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'This is what a physics engine does every frame',
          text: 'A game cannot integrate symbolically, so it takes tiny time steps $\\Delta t$ and updates `position += velocity * dt; velocity += accel * dt;`. That is **Euler integration**: it approximates the antiderivative by adding up small changes. Smaller steps track the exact answer more closely, as the program below shows for the ball above.',
        },
        {
          type: 'code',
          title: 'euler.cpp',
          runnable: true,
          code: `#include <cstdio>

int main() {
    const double a = -32.0;               // gravity, ft/s^2
    const int stepsList[] = {3, 30, 300};  // steps to reach t = 1.5 s
    for (int steps : stepsList) {
        double dt = 1.5 / steps;
        double v = 48.0, s = 64.0;         // initial conditions
        for (int k = 0; k < steps; ++k) {
            s += v * dt;                   // position changes by velocity * dt
            v += a * dt;                   // velocity changes by acceleration * dt
        }
        std::printf("dt = %.3f  s(1.5) = %.4f\\n", dt, s);
    }
    std::printf("exact      s(1.5) = %.4f\\n", -16 * 1.5 * 1.5 + 48 * 1.5 + 64);
}`,
          output: `dt = 0.500  s(1.5) = 112.0000
dt = 0.050  s(1.5) = 101.2000
dt = 0.005  s(1.5) = 100.1200
exact      s(1.5) = 100.0000`,
          annotations: [
            { lines: 8, text: 'The initial conditions $v(0) = 48$ and $s(0) = 64$ play the role of the constants $C$ and $D$.' },
            { lines: 10, text: 'Uses the velocity at the *start* of each step. Velocity is decreasing, so this overshoots — the error is exactly $24\\,\\Delta t$ here.' },
            { lines: 15, text: 'The exact antiderivative $s(t) = -16t^2 + 48t + 64$ for comparison.' },
          ],
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A particle moves along a line with acceleration $a(t) = 6t$. Its initial velocity is $v(0) = -3$ and its initial position is $s(0) = 2$. Find its position at $t = 2$.',
      label: '$s(2) =$',
      answer: '4',
      hint: 'Integrate twice: $v(t) = 3t^2 + C$, then $s(t) = t^3 + Ct + D$. Find each constant from the initial values.',
      explanation: '$v(t) = \\int 6t\\,dt = 3t^2 + C$, and $v(0) = -3$ gives $C = -3$, so $v(t) = 3t^2 - 3$. Then $s(t) = \\int (3t^2 - 3)\\,dt = t^3 - 3t + D$, and $s(0) = 2$ gives $D = 2$. So $s(2) = 8 - 6 + 2 = 4$.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for finding position from acceleration in order.',
      lines: [
        'Integrate $a(t)$ to get $v(t) = \\int a(t)\\,dt + C$',
        'Use $v(0)$ to solve for $C$',
        'Integrate $v(t)$ to get $s(t) = \\int v(t)\\,dt + D$',
        'Use $s(0)$ to solve for $D$',
        'Evaluate $s(t)$ at the time you care about',
      ],
      distractors: ['Differentiate $a(t)$ to get $v(t)$'],
      explanation: 'Each integration introduces one unknown constant, and each initial condition removes one. Solve for $C$ *before* integrating again, so $v(t)$ is fully known when you integrate it. Differentiating $a(t)$ would give the jerk — the rate of change of acceleration — which goes the wrong direction entirely.',
    },
  ],
  takeaways: [
    '$F$ is an antiderivative of $f$ when $F\' = f$. On an interval, all antiderivatives of $f$ are $F(x) + C$ — a consequence of the Mean Value Theorem.',
    '$\\int f(x)\\,dx = F(x) + C$ names the whole family. Every derivative rule read backwards gives an antiderivative rule; check answers by differentiating.',
    'Reverse power rule: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ for $n \\neq -1$, and $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$.',
    'Integrals split over sums and constant multiples, never over products or quotients: rewrite and simplify first.',
    'An initial condition fixes $C$. From acceleration, integrate twice using $v(0)$ and $s(0)$ to get position — exactly what Euler integration approximates in a game loop.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 1 — 4.10 Antiderivatives',
      url: 'https://openstax.org/books/calculus-volume-1/pages/4-10-antiderivatives',
      source: 'openstax',
      note: 'Covers the same ideas with more initial value problems and motion examples.',
    },
    {
      title: "Paul's Online Notes — Indefinite Integrals",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/IndefiniteIntegrals.aspx',
      source: 'paul',
      note: 'Clear explanation of notation and the most common mistakes with indefinite integrals.',
    },
    {
      title: "Paul's Online Notes — Computing Indefinite Integrals",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcI/ComputingIndefiniteIntegrals.aspx',
      source: 'paul',
      note: 'Many more worked examples of rewriting integrands so the basic rules apply.',
    },
  ],
};
