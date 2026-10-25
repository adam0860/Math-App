import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-separable-equations',
  title: 'Separable Equations',
  summary: 'Put every $y$ on one side and every $x$ on the other, integrate both, and an exact solution falls out. Then use it to cool coffee and smooth a game camera.',
  minutes: 17,
  objectives: [
    'Recognise when a first-order equation is separable, $\\frac{dy}{dx} = g(x)\\,h(y)$',
    'Solve separable equations by separating, integrating both sides and solving for $y$',
    'Use an initial condition to find a particular solution, choosing the correct sign and constant',
    'Spot equilibrium solutions that separation can lose',
    "Model temperature with Newton's law of cooling and solve for unknown rates and times",
  ],
  steps: [
    {
      kind: 'concept',
      title: 'What makes an equation separable',
      blocks: [
        {
          type: 'p',
          text: 'Slope fields and [[eulers-method|Euler\'s method]] work for any first-order equation, but they only give pictures and approximations. For one important family we can find exact formulas: equations where the right-hand side **factors** into a piece that depends only on $x$ times a piece that depends only on $y$.',
        },
        {
          type: 'definition',
          term: 'Separable equation',
          text: 'A first-order equation is [[separable-equation|separable]] if it can be written as\n\n$$\\frac{dy}{dx} = g(x)\\,h(y).$$\n\nEquivalently, when $h(y) \\neq 0$, $\\;\\frac{1}{h(y)}\\,dy = g(x)\\,dx$: all the $y$\'s on one side, all the $x$\'s on the other.',
        },
        {
          type: 'table',
          headers: ['equation', 'separable?', 'why'],
          rows: [
            ['$y\' = xy$', 'yes', '$g(x) = x$, $h(y) = y$'],
            ['$y\' = e^{x + y}$', 'yes', '$e^{x+y} = e^x \\cdot e^y$'],
            ['$y\' = xy + x$', 'yes', 'factor: $x(y + 1)$'],
            ['$y\' = 3y$', 'yes', '$g(x) = 3$; every [[autonomous-equation]] is separable'],
            ['$y\' = x + y$', 'no', 'a sum, and it cannot be factored into $g(x)h(y)$'],
            ['$y\' = \\sin(xy)$', 'no', '$x$ and $y$ are trapped together inside the sine'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Factor before you decide',
          text: 'Many separable equations are disguised. Factor out common factors ($xy + x = x(y + 1)$), use exponent laws ($e^{x - y} = e^x e^{-y}$) and log laws before deciding. A **sum** of an $x$-term and a $y$-term, like $x + y$ or $x^2 + y^2$, never separates.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which of these equations is separable?',
      options: [
        { text: '$\\dfrac{dy}{dx} = x + y$', why: 'A sum of a pure-$x$ term and a pure-$y$ term cannot be written as a product $g(x)h(y)$. (It is a *linear* equation, solved by a different method.)' },
        { text: '$\\dfrac{dy}{dx} = \\sin(xy)$', why: 'The product $xy$ is inside the sine; there is no identity that splits $\\sin(xy)$ into $g(x)h(y)$.' },
        { text: '$\\dfrac{dy}{dx} = x^2 + y^2$', why: 'Again a sum. Don\'t confuse $x^2 + y^2$ with $x^2y^2$, which would be separable.' },
        { text: '$\\dfrac{dy}{dx} = e^{2x - y}$', correct: true, why: 'Exponent laws give $e^{2x - y} = e^{2x}\\,e^{-y}$, so $g(x) = e^{2x}$ and $h(y) = e^{-y}$.' },
      ],
      explanation: 'Separable means the right side factors as (function of $x$) $\\times$ (function of $y$). $e^{2x - y} = e^{2x} \\cdot e^{-y}$ does; sums and functions of the combination $xy$ don\'t. Separated, it reads $e^{y}\\,dy = e^{2x}\\,dx$, so $e^y = \\frac{1}{2}e^{2x} + C$.',
    },
    {
      kind: 'concept',
      title: 'The method: separate, integrate, solve',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Separate', text: 'Divide by $h(y)$ and "multiply by $dx$": $\\frac{1}{h(y)}\\,dy = g(x)\\,dx$. Note which values of $y$ made $h(y) = 0$.' },
            { title: 'Integrate both sides', text: '$\\int \\frac{1}{h(y)}\\,dy = \\int g(x)\\,dx$. One [[constant-of-integration]] on the right is enough.' },
            { title: 'Solve for $y$', text: 'If possible, solve for $y$ explicitly. Otherwise leave an implicit equation in $x$ and $y$.' },
            { title: 'Check the lost solutions', text: 'Every constant $y = c$ with $h(c) = 0$ is an [[equilibrium-solution]]. See whether the formula covers it.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Solve $\\dfrac{dy}{dx} = xy$',
          steps: [
            { tex: '\\frac{1}{y}\\,dy = x\\,dx \\qquad (y \\neq 0)', why: 'Divide both sides by $y$ and move $dx$ across. This needs $y \\neq 0$; we will come back to $y = 0$.' },
            { tex: '\\int \\frac{1}{y}\\,dy = \\int x\\,dx', why: 'Integrate each side with respect to its own variable.' },
            { tex: '\\ln|y| = \\frac{x^2}{2} + C', why: 'The antiderivative of $\\frac{1}{y}$ is $\\ln|y|$ — the absolute value matters because $y$ may be negative. Constants from both sides combine into one $C$.' },
            { tex: '|y| = e^{x^2/2 + C} = e^C\\, e^{x^2/2}', why: 'Exponentiate both sides, then use $e^{a + b} = e^a e^b$. The constant becomes a **factor**, not a term.' },
            { tex: 'y = \\pm e^C\\, e^{x^2/2} = A\\,e^{x^2/2}', why: 'Remove the absolute value with $\\pm$, and rename $A = \\pm e^C$, which can be any nonzero number.' },
            { tex: 'y = 0 \\text{ also works} \\implies A \\text{ may be } 0', why: 'Check the equilibrium: $y = 0$ gives $y\' = 0 = x \\cdot 0$. It is exactly the case $A = 0$, so it fits into the same formula.' },
          ],
          result: 'The [[de-general-solution|general solution]] is $y = Ae^{x^2/2}$ for any constant $A$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "multiplying by $dx$" is legitimate',
          text: 'Treating $\\frac{dy}{dx}$ like a fraction is a shorthand for the [[chain-rule]]. Suppose $y(x)$ solves $\\frac{1}{h(y)}\\frac{dy}{dx} = g(x)$, and let $H$ be an antiderivative of $\\frac{1}{h}$. By the chain rule, $\\frac{d}{dx}H(y(x)) = \\frac{1}{h(y)}\\frac{dy}{dx} = g(x)$. So $H(y)$ and $G(x) = \\int g$ have the same derivative and differ by a constant: $H(y) = G(x) + C$. That is precisely "integrate both sides".',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Don\'t lose solutions when you divide',
          text: 'Dividing by $h(y)$ assumes $h(y) \\neq 0$. For $y\' = y^2$, separation gives $y = -\\frac{1}{x + C}$, but the solution $y = 0$ is **not** of that form for any $C$. Always list the constant solutions $h(c) = 0$ separately.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Order the steps for solving $\\dfrac{dy}{dx} = \\dfrac{\\cos x}{y}$, $y(0) = 2$ (with $y > 0$).',
      lines: [
        '$y\\,dy = \\cos x\\,dx$',
        '$\\int y\\,dy = \\int \\cos x\\,dx$',
        '$\\frac{y^2}{2} = \\sin x + C$',
        '$\\frac{4}{2} = \\sin 0 + C \\implies C = 2$',
        '$y = \\sqrt{2\\sin x + 4}$',
      ],
      distractors: ['$\\frac{y^2}{2} = \\sin x$, then add $C$ only after taking the square root'],
      explanation: 'Separate (multiply by $y\\,dx$), integrate, apply the initial condition to find $C$, then solve for $y$, choosing the positive root because $y(0) = 2 > 0$. Check: $y\' = \\frac{2\\cos x}{2\\sqrt{2\\sin x + 4}} = \\frac{\\cos x}{y}$. ✓ The constant must appear when you integrate: adding it later (after a square root) gives a different, wrong family.',
    },
    {
      kind: 'concept',
      title: 'Initial conditions, signs and implicit solutions',
      blocks: [
        {
          type: 'p',
          text: 'An initial condition does two jobs: it fixes the constant, and when solving for $y$ needs a $\\pm$ or a choice of root, it tells you **which branch** passes through the starting point.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\dfrac{dy}{dx} = \\dfrac{x^2}{y^2}$, $y(0) = 2$',
          steps: [
            { tex: 'y^2\\,dy = x^2\\,dx', why: 'Multiply both sides by $y^2\\,dx$ (valid since $y \\neq 0$ near the start, where $y = 2$).' },
            { tex: '\\frac{y^3}{3} = \\frac{x^3}{3} + C', why: 'Power rule on each side; one constant suffices.' },
            { tex: 'y^3 = x^3 + K, \\quad K = 3C', why: 'Multiply by $3$ and rename the constant. Any multiple of an arbitrary constant is still arbitrary.' },
            { tex: '2^3 = 0^3 + K \\implies K = 8', why: 'Use the initial condition $y(0) = 2$ **now**, while the equation is simple.' },
            { tex: 'y = \\sqrt[3]{x^3 + 8}', why: 'Take the cube root. Cube roots are defined for negative numbers too, so no sign choice is needed here.' },
          ],
          result: 'The particular solution is $y = \\sqrt[3]{x^3 + 8}$. It is valid on $(-2, \\infty)$: at $x = -2$ it hits $y = 0$, where the original equation $\\frac{x^2}{y^2}$ is undefined.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 4],
          functions: [{ expr: 'cbrt(x^3 + k)', label: '$y = \\sqrt[3]{x^3 + K}$' }],
          points: [{ x: 0, y: 'cbrt(k)', label: '(0, ∛K)' }],
          sliders: [{ name: 'k', min: -20, max: 20, step: 1, value: 8, label: '$K$' }],
          caption: 'The family of solutions of $y\' = \\frac{x^2}{y^2}$. $K = 8$ is the curve through $(0, 2)$. Each curve has a vertical tangent where it crosses $y = 0$ — the equation breaks down there, which is why the solution\'s interval stops.',
        },
        {
          type: 'p',
          text: 'Sometimes you can\'t (or needn\'t) solve for $y$. For $\\frac{dy}{dx} = \\frac{x}{y}$, separating gives $y\\,dy = x\\,dx$, so $\\frac{y^2}{2} = \\frac{x^2}{2} + C$, i.e. $y^2 - x^2 = K$: an **implicit** solution, a family of hyperbolas. To get $y$ you take a square root, and the initial condition decides the sign.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graders check three things: the absolute value in $\\ln|y|$, the constant handled correctly when exponentiating ($e^{\\ln|y|} = e^{x + C}$ gives $|y| = e^C e^x$, a *product*), and the sign of the root matching the initial condition. Plug your answer back in to verify both the equation and the initial value.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Solve $\\dfrac{dy}{dx} = \\dfrac{x}{y}$ with $y(0) = -3$, then find $y(4)$.',
      hint: 'Separating gives $y^2 - x^2 = K$. Find $K$, then take the square root with the sign that matches $y(0) = -3$.',
      label: '$y(4) =$',
      answer: '-5',
      explanation: '$y\\,dy = x\\,dx \\Rightarrow y^2 - x^2 = K$. At $(0, -3)$: $K = 9$, so $y^2 = x^2 + 9$. Since the solution starts at a negative value and can\'t cross $y = 0$ (the equation is undefined there), take the **negative** root: $y = -\\sqrt{x^2 + 9}$. Then $y(4) = -\\sqrt{25} = -5$. Answering $5$ is the classic sign slip.',
    },
    {
      kind: 'expr',
      prompt: 'Solve the initial value problem $\\dfrac{dy}{dx} = 3x^2 y$, $\\;y(0) = 2$. Give $y$ as a function of $x$.',
      hint: 'Separate: $\\frac{1}{y}dy = 3x^2\\,dx$. After integrating you get $\\ln|y| = x^3 + C$.',
      label: '$y =$',
      answer: '2e^(x^3)',
      answerTex: 'y = 2e^{x^3}',
      domain: [-1.5, 1.5],
      explanation: '$\\int \\frac{dy}{y} = \\int 3x^2\\,dx$ gives $\\ln|y| = x^3 + C$, so $y = Ae^{x^3}$. The initial condition $y(0) = Ae^0 = A = 2$ gives $y = 2e^{x^3}$. Check: $y\' = 2e^{x^3}\\cdot 3x^2 = 3x^2 y$. ✓',
    },
    {
      kind: 'error',
      prompt: 'A student solves $\\dfrac{dy}{dx} = y\\cos x$, $y(0) = 3$. Tap the first wrong line.',
      lines: [
        '$\\frac{1}{y}\\,dy = \\cos x\\,dx$',
        '$\\ln|y| = \\sin x + C$',
        '$y = e^{\\sin x} + e^{C}$',
        '$3 = e^0 + e^C \\implies e^C = 2$',
        '$y = e^{\\sin x} + 2$',
      ],
      errorLines: [3],
      explanation: 'Line 3 exponentiates a sum into a sum. In fact $e^{\\sin x + C} = e^{\\sin x}\\cdot e^C$, so $y = Ae^{\\sin x}$. Then $y(0) = A = 3$ and $y = 3e^{\\sin x}$. You can see the student\'s answer is wrong by checking it: $y = e^{\\sin x} + 2$ gives $y\' = \\cos x\\, e^{\\sin x}$, but $y\\cos x = \\cos x\\,e^{\\sin x} + 2\\cos x$.',
    },
    {
      kind: 'concept',
      title: "Newton's law of cooling",
      blocks: [
        {
          type: 'p',
          text: 'A hot cup of coffee cools fast at first, then more and more slowly as it approaches room temperature. Newton proposed the simplest rule consistent with that: the rate of cooling is proportional to the temperature **difference** between the object and its surroundings.',
        },
        {
          type: 'theorem',
          name: "Newton's law of cooling",
          tex: '\\frac{dT}{dt} = -k\\,(T - T_s), \\qquad k > 0',
          text: '$T(t)$ is the object\'s temperature and $T_s$ the constant surrounding temperature. When $T > T_s$ the right side is negative, so the object cools; when $T < T_s$ it warms. See [[newtons-law-of-cooling]].',
        },
        {
          type: 'derivation',
          title: 'Solve with $T(0) = T_0$',
          steps: [
            { tex: '\\frac{1}{T - T_s}\\,dT = -k\\,dt', why: 'Separate: the right side is $g(t)h(T)$ with $g = -k$ and $h = T - T_s$. Assume $T \\neq T_s$.' },
            { tex: '\\ln|T - T_s| = -kt + C', why: 'Integrate. The left side is $\\int \\frac{du}{u}$ with $u = T - T_s$.' },
            { tex: 'T - T_s = Ae^{-kt}', why: 'Exponentiate; $A = \\pm e^C$ (and $A = 0$ covers the equilibrium $T = T_s$).' },
            { tex: 'T_0 - T_s = A', why: 'At $t = 0$, $e^0 = 1$, so the constant is the initial temperature gap.' },
            { tex: 'T(t) = T_s + (T_0 - T_s)\\,e^{-kt}', why: 'Substitute $A$ and solve for $T$.' },
          ],
          result: 'The temperature gap $T - T_s$ decays exponentially, so $T(t) \\to T_s$ as $t \\to \\infty$.',
        },
        {
          type: 'graph',
          x: [0, 60],
          y: [0, 100],
          functions: [{ expr: 's + (p - s)*e^(-k*x)', label: '$T(t)$' }],
          hlines: [{ y: 's', label: 'room temperature' }],
          sliders: [
            { name: 'p', min: 0, max: 100, step: 1, value: 90, label: '$T_0$ (°C)' },
            { name: 's', min: 0, max: 40, step: 1, value: 20, label: '$T_s$ (°C)' },
            { name: 'k', min: 0.01, max: 0.3, step: 0.005, value: 0.056, label: '$k$ (per minute)' },
          ],
          readouts: [{ label: 'time for the gap to halve $= \\frac{\\ln 2}{k} =$', expr: 'ln(2)/k', digits: 2 }],
          caption: 'Horizontal axis: minutes. Set $T_0$ below $T_s$ to watch a cold drink warm up — same equation. Larger $k$ (a thin metal cup) means faster approach; the gap halves every $\\frac{\\ln 2}{k}$ minutes regardless of where you start.',
        },
        {
          type: 'derivation',
          title: 'Coffee at $90°$C in a $20°$C room is $60°$C after $10$ min. When is it $40°$C?',
          steps: [
            { tex: 'T(t) = 20 + 70e^{-kt}', why: 'Here $T_s = 20$ and $T_0 - T_s = 90 - 20 = 70$.' },
            { tex: '60 = 20 + 70e^{-10k} \\implies e^{-10k} = \\frac{40}{70} = \\frac{4}{7}', why: 'Use the measurement $T(10) = 60$ to pin down $k$. Isolate the exponential first.' },
            { tex: 'k = \\frac{\\ln(7/4)}{10} \\approx 0.0560', why: 'Take $\\ln$: $-10k = \\ln\\frac{4}{7}$, and $-\\ln\\frac{4}{7} = \\ln\\frac{7}{4}$.' },
            { tex: '40 = 20 + 70e^{-kt} \\implies e^{-kt} = \\frac{2}{7}', why: 'Now set $T = 40$ and isolate the exponential again.' },
            { tex: 't = \\frac{\\ln(7/2)}{k} = \\frac{10\\ln 3.5}{\\ln 1.75} \\approx 22.4 \\text{ min}', why: 'Take $\\ln$ and divide by $k$.' },
          ],
          result: 'The coffee reaches $40°$C after about $22.4$ minutes.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'You often don\'t need $k$ itself. From $e^{-10k} = \\frac{4}{7}$ you know that every $10$ minutes the gap is multiplied by $\\frac{4}{7}$, so after $20$ minutes the gap is $70 \\cdot (\\frac{4}{7})^2 = 22.86$ and $T \\approx 42.9°$C.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A can of soda at $5°$C is placed in a $25°$C room. After $10$ minutes it is $10°$C. Assuming Newton\'s law of cooling, what is its temperature after $30$ minutes?',
      hint: 'The gap starts at $5 - 25 = -20$. After $10$ minutes it is $10 - 25 = -15$, so every $10$ minutes the gap is multiplied by $\\frac{15}{20}$.',
      label: '$T(30) =$',
      unit: '°C',
      answer: '25 - 20*0.75^3',
      answerTex: '25 - 20(0.75)^3 = 16.5625',
      tolerance: 0.01,
      explanation: '$T(t) = 25 - 20e^{-kt}$. From $T(10) = 10$: $-15 = -20e^{-10k}$, so $e^{-10k} = 0.75$. Then $T(30) = 25 - 20\\,(e^{-10k})^3 = 25 - 20(0.421875) = 25 - 8.4375 = 16.5625°$C. Note the soda warms toward $25°$ — the law works in both directions.',
    },
    {
      kind: 'expr',
      prompt: 'A pie comes out of the oven at $100°$C into a $20°$C kitchen, and cools according to $\\dfrac{dT}{dt} = -0.1\\,(T - 20)$ ($t$ in minutes). Write $T(t)$.',
      hint: 'Use $T(t) = T_s + (T_0 - T_s)e^{-kt}$.',
      label: '$T(t) =$',
      answer: '20 + 80e^(-0.1t)',
      answerTex: 'T(t) = 20 + 80e^{-0.1t}',
      variables: ['t'],
      domain: [0, 3],
      explanation: 'Here $T_s = 20$, $T_0 = 100$ and $k = 0.1$, so $T(t) = 20 + 80e^{-0.1t}$. Check: $T(0) = 100$, and $T\'(t) = -8e^{-0.1t} = -0.1(80e^{-0.1t}) = -0.1(T - 20)$. ✓',
    },
    {
      kind: 'concept',
      title: 'Cooling curves in your game: frame-rate-independent smoothing',
      blocks: [
        {
          type: 'p',
          text: 'Games constantly ease a value toward a target: a camera following a player, a health bar draining, a volume fading. The natural model is Newton\'s law with "temperature" replaced by the value: $\\frac{dv}{dt} = -k(v - \\text{target})$. Fast when far away, gentle when close.',
        },
        {
          type: 'compare',
          left: {
            title: 'Euler step (frame-rate dependent)',
            tone: 'bad',
            code: 'value += (target - value) * k * dt;',
            text: 'One Euler step per frame. The result after one second depends on the frame rate, and if $k\\,\\Delta t > 1$ it overshoots.',
          },
          right: {
            title: 'Exact solution over one frame',
            tone: 'good',
            code: 'value = target + (value - target) * std::exp(-k * dt);',
            text: 'The separable equation\'s solution, applied over $\\Delta t$. Any frame rate gives the same curve.',
          },
        },
        {
          type: 'code',
          title: 'smoothing.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

const double k = 5.0, target = 100.0, duration = 0.5;

// Ease \`value\` from 0 toward \`target\` for half a second at a given frame rate.
double naive(int fps) {
    double dt = 1.0 / fps, value = 0.0;
    for (int i = 0; i < fps / 2; ++i)
        value += (target - value) * k * dt;                 // Euler step
    return value;
}

double exact(int fps) {
    double dt = 1.0 / fps, value = 0.0;
    for (int i = 0; i < fps / 2; ++i)
        value = target + (value - target) * std::exp(-k * dt);   // exact solution over dt
    return value;
}

int main() {
    const int rates[] = {10, 30, 120};
    for (int fps : rates)
        std::printf("%3d fps: naive = %.4f  exact = %.4f\\n", fps, naive(fps), exact(fps));
    std::printf("true value at t = 0.5: %.4f\\n", target - target * std::exp(-k * duration));
}`,
          output: ` 10 fps: naive = 96.8750  exact = 91.7915
 30 fps: naive = 93.5095  exact = 91.7915
120 fps: naive = 92.2197  exact = 91.7915
true value at t = 0.5: 91.7915`,
          annotations: [
            { lines: 10, text: 'Euler: the gap shrinks by the factor $(1 - k\\Delta t)$ each frame — a different total for every frame rate.' },
            { lines: 17, text: 'From $v(t) = \\text{target} + (v_0 - \\text{target})e^{-kt}$: over one frame the gap is multiplied by exactly $e^{-k\\Delta t}$.' },
            { lines: 25, text: 'The closed-form solution at $t = 0.5$: $100 - 100e^{-2.5}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the exact version never drifts',
          text: 'Multiplying the gap by $e^{-k\\Delta t_1}$ and then by $e^{-k\\Delta t_2}$ is the same as multiplying by $e^{-k(\\Delta t_1 + \\Delta t_2)}$. Exponent laws guarantee that *how* you slice the time into frames doesn\'t matter. Euler\'s factors $(1 - k\\Delta t)$ have no such property, which is why the 10 fps player sees a different camera than the 120 fps player.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'Separating $\\dfrac{dy}{dx} = y^2$ gives $y = -\\dfrac{1}{x + C}$, and every solution of $\\dfrac{dy}{dx} = y^2$ has this form for some constant $C$.',
      answer: false,
      explanation: 'The constant function $y = 0$ solves $y\' = y^2$ (both sides are $0$), but $-\\frac{1}{x + C}$ is never zero. It was lost when we divided by $y^2$, which assumed $y \\neq 0$. Constant solutions where $h(y) = 0$ must always be checked separately.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the description of Newton\'s law of cooling, $\\frac{dT}{dt} = -k(T - T_s)$.',
      template: 'The rate of temperature change is proportional to ___. As $t \\to \\infty$, the temperature approaches ___, and the gap $T - T_s$ decays like ___.',
      blanks: [{ answers: ['the difference $T - T_s$'] }, { answers: ['$T_s$'] }, { answers: ['$e^{-kt}$'] }],
      wordBank: ['the difference $T - T_s$', 'the temperature $T$', '$T_s$', '$0$', '$e^{-kt}$', '$\\frac{1}{t}$'],
      explanation: 'The law says the rate depends on how far $T$ is from the surroundings, not on $T$ itself. The solution $T = T_s + (T_0 - T_s)e^{-kt}$ shows the gap decays exponentially, so the object\'s temperature approaches $T_s$ (not $0$) — a cup of coffee doesn\'t freeze in a warm room.',
    },
  ],
  takeaways: [
    'A first-order equation is separable when it factors as $\\frac{dy}{dx} = g(x)h(y)$.',
    'Method: separate to $\\frac{dy}{h(y)} = g(x)\\,dx$, integrate both sides (one constant), then solve for $y$ if possible.',
    'Exponentiating turns the additive constant into a multiplicative one: $\\ln|y| = G(x) + C \\Rightarrow y = Ae^{G(x)}$.',
    'Use the initial condition to find the constant and to choose the sign or branch of any root.',
    'Dividing by $h(y)$ can lose constant (equilibrium) solutions where $h(y) = 0$ — check them separately.',
    "Newton's law of cooling $T\' = -k(T - T_s)$ has solution $T = T_s + (T_0 - T_s)e^{-kt}$; the same formula gives frame-rate-independent smoothing in games.",
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 4.3 Separable Equations',
      url: 'https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations',
      source: 'openstax',
      note: 'More worked examples, including mixing problems and Newton\'s law of cooling.',
    },
    {
      title: "Paul's Online Notes — Separable Equations",
      url: 'https://tutorial.math.lamar.edu/Classes/DE/Separable.aspx',
      source: 'paul',
      note: 'Careful treatment of implicit solutions and the interval where a solution is valid.',
    },
    {
      title: "Wikipedia — Newton's law of cooling",
      url: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling',
      source: 'wikipedia',
      note: 'The physics behind the law and when it is (and isn\'t) a good approximation.',
    },
  ],
};
