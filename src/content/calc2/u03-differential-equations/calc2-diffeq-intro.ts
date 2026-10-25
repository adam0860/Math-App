import type { GraphBlock, Lesson } from '../../types';

type Segment = NonNullable<GraphBlock['segments']>[number];

/**
 * Builds a slope field: a short segment with slope f(x, y) centred at every grid point.
 * Segment lengths are measured in screen pixels (the plot is 600 px wide), so every
 * segment looks the same length whatever its slope.
 */
function slopeField(
  f: (x: number, y: number) => number,
  xs: [number, number, number],
  ys: [number, number, number],
  win: { x: [number, number]; y: [number, number]; heightPx?: number },
  halfPx = 10,
): Segment[] {
  const kx = 600 / (win.x[1] - win.x[0]);
  const ky = (win.heightPx ?? 300) / (win.y[1] - win.y[0]);
  const r = (v: number) => Math.round(v * 1000) / 1000;
  const out: Segment[] = [];
  for (let x = xs[0]; x <= xs[1] + 1e-9; x += xs[2]) {
    for (let y = ys[0]; y <= ys[1] + 1e-9; y += ys[2]) {
      const m = f(x, y);
      const n = Math.hypot(kx, ky * m);
      const dx = halfPx / n;
      const dy = (m * halfPx) / n;
      out.push({ from: [r(x - dx), r(y - dy)], to: [r(x + dx), r(y + dy)], color: 'gray' });
    }
  }
  return out;
}

/** Euler polygon for y' = y, y(0) = 1 with step 0.25 (four steps to x = 1). */
const eulerPts: [number, number][] = [
  [0, 1],
  [0.25, 1.25],
  [0.5, 1.5625],
  [0.75, 1.953125],
  [1, 2.44140625],
];

export const lesson: Lesson = {
  id: 'calc2-diffeq-intro',
  title: "Differential Equations, Slope Fields and Euler's Method",
  summary: 'Equations whose unknown is a function: read them as pictures, then solve them numerically one small step at a time, exactly like a game engine does every frame.',
  minutes: 18,
  objectives: [
    'Check whether a given function solves a differential equation, and find a particular solution from an initial condition',
    'Read and sketch a slope field, and trace approximate solution curves through it',
    "Carry out Euler's method by hand and organise it in a table",
    "Explain why a game loop's `velocity += acceleration * dt; position += velocity * dt` is Euler's method",
    "Describe how the error of Euler's method depends on the step size",
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Equations whose unknown is a function',
      blocks: [
        {
          type: 'p',
          text: 'In algebra the unknown in an equation is a number: solve $x^2 = 9$ and you get $x = \\pm 3$. A [[differential-equation]] is an equation whose unknown is a **function**, and the equation tells you how that function\'s [[derivative]] relates to the function itself (and maybe to the input).',
        },
        {
          type: 'p',
          text: 'They are the natural language of change. "A population grows at a rate proportional to its size" is $\\frac{dP}{dt} = kP$. "Gravity changes velocity at $9.8$ m/s² downward" is $\\frac{dv}{dt} = -9.8$. Newton\'s second law, $x\'\'(t) = F/m$, is a differential equation — and every physics engine you have ever played a game with is a machine for solving it.',
        },
        {
          type: 'definition',
          term: 'Differential equation, solution, order',
          text: 'A **differential equation** relates an unknown function $y$ to one or more of its derivatives. A **solution** is a function that makes the equation true for every $x$ in some interval. The [[ode-order|order]] is the highest derivative that appears: $y\' = x - y$ is first order, $y\'\' + 9y = 0$ is second order.',
        },
        {
          type: 'p',
          text: 'Checking a proposed solution needs no new technique: differentiate it and substitute. This "plug it in" check is worth doing every time you solve one — it catches almost every algebra slip.',
        },
        {
          type: 'derivation',
          title: 'Verify that $y = x - 1 + Ce^{-x}$ solves $y\' = x - y$ for every constant $C$',
          steps: [
            { tex: "y' = 1 - Ce^{-x}", why: 'Differentiate term by term: $(x)\' = 1$, $(-1)\' = 0$ and $(Ce^{-x})\' = -Ce^{-x}$ by the chain rule.' },
            { tex: 'x - y = x - (x - 1 + Ce^{-x})', why: 'Compute the right-hand side of the equation by substituting the formula for $y$.' },
            { tex: '= 1 - Ce^{-x}', why: 'Distribute the minus sign: $x - x + 1 - Ce^{-x}$.' },
            { tex: "\\implies y' = x - y \\;\\text{ for all } x", why: 'Both sides simplified to the same expression, so the equation holds identically — whatever the value of $C$.' },
          ],
          result: 'Every function $y = x - 1 + Ce^{-x}$ is a solution: one equation, infinitely many solutions.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why there are infinitely many solutions',
          text: 'A differential equation only tells you the *rate* of change, never the starting value. Knowing your speed at every instant tells you how far you travel, but not where you started. That missing information shows up as an arbitrary constant — the same [[constant-of-integration]] you met with antiderivatives. In fact $y\' = f(x)$ is just the antiderivative problem, so this whole topic generalises integration.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which function is a solution of the second-order equation $y\'\' = 9y$?',
      options: [
        { text: '$y = \\sin(3x)$', why: '$y\'\' = -9\\sin(3x) = -9y$. That solves $y\'\' = -9y$ (the equation of oscillation), not $y\'\' = 9y$: the sign is wrong.' },
        { text: '$y = e^{9x}$', why: '$y\'\' = 81e^{9x} = 81y$. The chain rule brings out a factor of $9$ *each* time you differentiate, so you get $9^2$, not $9$.' },
        { text: '$y = e^{3x}$', correct: true, why: '$y\' = 3e^{3x}$ and $y\'\' = 9e^{3x} = 9y$. It checks.' },
        { text: '$y = x^3$', why: '$y\'\' = 6x$, while $9y = 9x^3$. These are not equal for all $x$ (only at a few isolated points), so it is not a solution.' },
      ],
      hint: 'Differentiate each candidate twice and compare $y\'\'$ with $9y$.',
      explanation: 'To test a solution, compute $y\'\'$ and check whether it equals $9y$ **for every** $x$. For $y = e^{3x}$: $y\'\' = 3 \\cdot 3 e^{3x} = 9e^{3x}$. (So does $e^{-3x}$, and in fact every $C_1e^{3x} + C_2e^{-3x}$ — a second-order equation has two arbitrary constants.)',
    },
    {
      kind: 'concept',
      title: 'Initial value problems: choosing one solution',
      blocks: [
        {
          type: 'p',
          text: 'A formula with an arbitrary constant, like $y = x - 1 + Ce^{-x}$, is called the [[de-general-solution|general solution]]. To get one specific function you need extra information, usually the value of $y$ at a starting point. An equation together with such a condition is an [[initial-value-problem]] (IVP), and its answer is a [[particular-solution]].',
        },
        {
          type: 'theorem',
          name: 'Initial value problem',
          tex: "\\frac{dy}{dx} = f(x, y), \\qquad y(x_0) = y_0",
          text: 'If $f$ and $\\partial f/\\partial y$ are continuous near $(x_0, y_0)$, there is exactly one solution through that point (on some interval around $x_0$). In particular, two solution curves of such an equation can never cross.',
        },
        {
          type: 'derivation',
          title: 'Solve $y\' = 6x^2 - 4$, $y(1) = 5$',
          steps: [
            { tex: 'y = \\int (6x^2 - 4)\\,dx = 2x^3 - 4x + C', why: 'The right side depends only on $x$, so $y$ is an antiderivative of it. Every antiderivative differs by a constant.' },
            { tex: '5 = 2(1)^3 - 4(1) + C', why: 'Impose the initial condition: at $x = 1$ the solution must equal $5$.' },
            { tex: '5 = -2 + C \\implies C = 7', why: 'Simplify and solve for $C$.' },
            { tex: 'y = 2x^3 - 4x + 7', why: 'Substitute $C = 7$ back into the general solution.' },
          ],
          result: 'The particular solution is $y = 2x^3 - 4x + 7$. Check: $y(1) = 2 - 4 + 7 = 5$ and $y\' = 6x^2 - 4$. ✓',
        },
        {
          type: 'graph',
          x: [-3, 3],
          y: [-3, 4],
          functions: [{ expr: 'x - 1 + c*e^(-x)', label: '$y = x - 1 + Ce^{-x}$' }],
          points: [{ x: 0, y: 'c - 1', label: 'y(0)' }],
          sliders: [{ name: 'c', min: -3, max: 3, step: 0.1, value: 1, label: '$C$' }],
          readouts: [{ label: '$y(0) = C - 1 =$', expr: 'c - 1', digits: 2 }],
          caption: 'Each $C$ gives a different solution of $y\' = x - y$. Specifying $y(0)$ picks exactly one curve: $y(0) = 2$ forces $C = 3$. Notice that every curve approaches the line $y = x - 1$ (the solution with $C = 0$) as $x$ grows.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The spawn state is the initial condition',
          text: 'When a game spawns a projectile it sets its position and velocity: that is the initial condition. The physics rules are the differential equation. Together they form an IVP whose unique solution is the arrow\'s flight — which is why a replay system can reproduce a match exactly by recording only the inputs and initial states.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Using the particular solution of $y\' = 6x^2 - 4$, $y(1) = 5$ from the card, find $y(2)$.',
      hint: 'Use $y = 2x^3 - 4x + 7$.',
      label: '$y(2) =$',
      answer: '15',
      explanation: '$y(2) = 2(8) - 4(2) + 7 = 16 - 8 + 7 = 15$. Equivalently, by the Fundamental Theorem: $y(2) = y(1) + \\int_1^2 (6x^2 - 4)\\,dx = 5 + [2x^3 - 4x]_1^2 = 5 + (8 - (-2)) = 15$.',
    },
    {
      kind: 'concept',
      title: 'Slope fields: seeing solutions without solving',
      blocks: [
        {
          type: 'p',
          text: 'Most differential equations cannot be solved with a formula. But a first-order equation $y\' = f(x, y)$ tells you something remarkable: at **every point** $(x, y)$ of the plane it gives the slope a solution curve through that point must have. Draw a short segment with that slope at many grid points and you get a [[slope-field]].',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-3, 3],
          functions: [{ expr: 'x - 1 + c*e^(-x)', label: 'solution through $(0, C - 1)$', color: 'blue' }],
          segments: slopeField((x, y) => x - y, [-3.5, 3.5, 0.5], [-2.5, 2.5, 0.5], { x: [-4, 4], y: [-3, 3] }),
          points: [{ x: 0, y: 'c - 1' }],
          sliders: [{ name: 'c', min: -2, max: 3, step: 0.1, value: 2, label: '$C$' }],
          caption: 'The slope field of $y\' = x - y$. Each gray segment has slope $x - y$. Drag $C$: every solution curve threads its way *tangent* to the segments, like a leaf floating on a current.',
        },
        {
          type: 'p',
          text: 'To sketch a field by hand, compute slopes at a few points, or better, find the **isoclines**: curves where the slope is constant. For $y\' = x - y$ the slope is $0$ wherever $y = x$, it is $1$ along $y = x - 1$ (which is why the solution $y = x - 1$ is a straight line: it runs along its own isocline), and it is negative above $y = x$.',
        },
        {
          type: 'table',
          headers: ['point $(x, y)$', 'slope $x - y$', 'segment looks like'],
          rows: [
            ['$(0, 0)$', '$0$', 'flat'],
            ['$(2, 0)$', '$2$', 'steep, rising'],
            ['$(0, 2)$', '$-2$', 'steep, falling'],
            ['$(1, 0)$', '$1$', 'rising, slope $1$'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Two quick reads of a slope field',
          text: 'If the segments are identical along every **horizontal** line, the slope depends only on $y$: the equation is [[autonomous-equation|autonomous]], $y\' = f(y)$. If they are identical along every **vertical** line, the slope depends only on $x$: $y\' = f(x)$, and the solutions are vertical shifts of one antiderivative.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'A slope field is a map of ocean currents. Drop a buoy anywhere (an initial condition) and the currents carry it along one definite path (the solution). Flow-field pathfinding in games — thousands of units each reading the arrow under their feet — is the same picture.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which differential equation has this slope field?',
      graph: {
        type: 'graph',
        x: [-3, 3],
        y: [-2, 2],
        segments: slopeField((_x, y) => y, [-2.5, 2.5, 0.5], [-1.75, 1.75, 0.35], { x: [-3, 3], y: [-2, 2] }),
        caption: 'Look at how the segments change (or don\'t) as you move left–right and up–down.',
      },
      options: [
        { text: '$y\' = x$', why: 'Then the slope would depend only on $x$: the segments would match along each **vertical** line and be flat on the $y$-axis. Here they are flat on the $x$-axis instead.' },
        { text: '$y\' = x + y$', why: 'The slope would change as you move horizontally, and the flat segments would lie along the line $y = -x$, not along the $x$-axis.' },
        { text: '$y\' = y$', correct: true, why: 'The segments are the same along each horizontal line (slope depends only on $y$), flat where $y = 0$, rising above the axis and falling below it, and steeper the farther from the axis. That is $y\' = y$.' },
        { text: '$y\' = -y$', why: 'Close, but the signs are reversed: with $y\' = -y$ segments *above* the axis would fall, and solutions would decay toward $0$.' },
      ],
      explanation: 'Read a field by asking where it is flat and what it depends on. Flat along $y = 0$, constant along horizontal lines, and positive for $y > 0$ means $y\' = y$. Its solutions $y = Ce^x$ grow exponentially away from the [[equilibrium-solution]] $y = 0$.',
    },
    {
      kind: 'concept',
      title: "Euler's method: follow the arrows in straight steps",
      blocks: [
        {
          type: 'p',
          text: 'The slope field suggests a way to *compute* a solution: stand at the initial point, look at the slope there, walk a short distance $h$ in that direction, look at the new slope, walk again. Each step uses the [[tangent-line]] — the [[linear-approximation]] $y(x + h) \\approx y(x) + h\\,y\'(x)$ — and the differential equation tells us $y\'$ at the point where we are standing.',
        },
        {
          type: 'theorem',
          name: "Euler's method",
          tex: 'x_{n+1} = x_n + h, \\qquad y_{n+1} = y_n + h\\, f(x_n, y_n)',
          text: 'For the IVP $y\' = f(x, y)$, $y(x_0) = y_0$ and step size $h$. Each $y_n$ approximates the true value $y(x_n)$.',
        },
        {
          type: 'derivation',
          title: 'Approximate $y(1)$ for $y\' = y$, $y(0) = 1$, with $h = 0.25$',
          steps: [
            { tex: 'f(x, y) = y, \\quad x_0 = 0, \\; y_0 = 1', why: 'Read off the rule and the starting point. The exact solution is $y = e^x$, so we are really approximating $e \\approx 2.71828$.' },
            { tex: 'y_1 = 1 + 0.25(1) = 1.25', why: 'Slope at $(0, 1)$ is $f = 1$. Step: $y_1 = y_0 + h f(x_0, y_0)$.' },
            { tex: 'y_2 = 1.25 + 0.25(1.25) = 1.5625', why: 'Now stand at $(0.25, 1.25)$. The slope there is $1.25$ — the field changed, so the direction changes.' },
            { tex: 'y_3 = 1.5625 + 0.25(1.5625) = 1.953125', why: 'At $(0.5, 1.5625)$ the slope is $1.5625$.' },
            { tex: 'y_4 = 1.953125 + 0.25(1.953125) = 2.44140625', why: 'At $(0.75, 1.953125)$ the slope is $1.953125$. Four steps of $0.25$ reach $x = 1$.' },
          ],
          result: 'Euler gives $y(1) \\approx 2.4414$, while the true value is $e \\approx 2.7183$: an error of about $0.277$.',
        },
        {
          type: 'table',
          headers: ['$n$', '$x_n$', '$y_n$', 'slope $f(x_n, y_n) = y_n$', '$h \\cdot$ slope'],
          rows: [
            ['$0$', '$0$', '$1$', '$1$', '$0.25$'],
            ['$1$', '$0.25$', '$1.25$', '$1.25$', '$0.3125$'],
            ['$2$', '$0.5$', '$1.5625$', '$1.5625$', '$0.390625$'],
            ['$3$', '$0.75$', '$1.953125$', '$1.953125$', '$0.48828125$'],
            ['$4$', '$1$', '$2.44140625$', '—', '—'],
          ],
          caption: 'Organise Euler\'s method as a table: each row\'s last column is added to $y_n$ to get the next row.',
        },
        {
          type: 'graph',
          x: [-0.1, 1.2],
          y: [0, 3.2],
          functions: [{ expr: 'e^x', label: 'exact $y = e^x$' }],
          segments: eulerPts.slice(0, -1).map(([x, y], i) => ({ from: [x, y] as [number, number], to: eulerPts[i + 1], color: 'red' as const })),
          points: eulerPts.map(([x, y]) => ({ x, y, color: 'red' as const })),
          caption: 'The red Euler polygon follows the tangent direction at the start of each step. Because $e^x$ is concave up, every tangent line lies below the curve, so Euler falls further behind with each step.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Use Euler\'s method with step $h = 0.1$ on $y\' = x + y$, $y(0) = 1$ to approximate $y(0.2)$.',
      hint: 'Two steps. First slope: $f(0, 1) = 0 + 1$. Then move to $x_1 = 0.1$ and compute the new slope $x_1 + y_1$.',
      label: '$y(0.2) \\approx$',
      answer: '1.22',
      explanation: 'Step 1: slope $f(0, 1) = 1$, so $y_1 = 1 + 0.1(1) = 1.1$ at $x_1 = 0.1$. Step 2: slope $f(0.1, 1.1) = 1.2$, so $y_2 = 1.1 + 0.1(1.2) = 1.22$ at $x_2 = 0.2$. (The exact solution $y = 2e^x - x - 1$ gives $y(0.2) \\approx 1.2428$; Euler undershoots because this solution is concave up.)',
    },
    {
      kind: 'order',
      prompt: 'Put the steps of one Euler update in order, starting from the current point $(x_n, y_n)$.',
      lines: [
        'Evaluate the slope $m = f(x_n, y_n)$ at the current point',
        'Multiply by the step size to get the rise $h \\cdot m$',
        'Set $y_{n+1} = y_n + h \\cdot m$',
        'Advance the input: $x_{n+1} = x_n + h$',
        'Repeat from the new point $(x_{n+1}, y_{n+1})$',
      ],
      distractors: ['Evaluate the slope at the *next* point $f(x_{n+1}, y_{n+1})$ before stepping'],
      explanation: 'Euler is "look, then leap": the slope comes from where you **are**, because the next point is not known yet. (Methods that also use slopes at later points exist — improved Euler and Runge–Kutta peek ahead with a trial step — but plain Euler uses only the current one.)',
    },
    {
      kind: 'concept',
      title: 'Every game loop is running Euler\'s method',
      blocks: [
        {
          type: 'p',
          text: 'A moving object obeys two first-order equations: position changes at the rate given by [[velocity]], and velocity changes at the rate given by [[acceleration]]:',
        },
        {
          type: 'math',
          tex: "\\frac{dx}{dt} = v, \\qquad \\frac{dv}{dt} = a = \\frac{F}{m}",
        },
        {
          type: 'p',
          text: 'A game cannot solve these symbolically for every object in every situation, so each frame it takes one Euler step with $h = \\Delta t$, the frame time ($\\frac{1}{60}$ s at 60 fps). The two lines you see in countless engines, `position += velocity * dt;` and `velocity += acceleration * dt;`, are exactly $y_{n+1} = y_n + h f$ applied to each equation.',
        },
        {
          type: 'p',
          text: 'Let\'s test it on a case with a known answer: a ball dropped from $100$ m with $a = -9.8$. The exact height is $y(t) = 100 - 4.9t^2$, so $y(2) = 80.4$.',
        },
        {
          type: 'code',
          title: 'falling.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double g = 9.8;        // gravity, m/s^2
    const double T = 2.0;        // simulate 2 seconds
    const double exact = 100.0 - 0.5 * g * T * T;   // y(2) = 80.4

    const double steps[] = {0.1, 0.05, 1.0 / 60.0, 0.001};
    std::printf("exact y(2) = %.6f\\n", exact);
    for (double dt : steps) {
        int n = static_cast<int>(std::lround(T / dt));
        double y = 100.0, v = 0.0;           // initial condition
        for (int i = 0; i < n; ++i) {
            y += v * dt;                     // Euler: position uses old velocity
            v += -g * dt;                    // Euler: velocity uses acceleration
        }
        std::printf("dt = %.4f  steps = %4d  y = %.6f  error = %.6f\\n",
                    dt, n, y, y - exact);
    }
}`,
          output: `exact y(2) = 80.400000
dt = 0.1000  steps =   20  y = 81.380000  error = 0.980000
dt = 0.0500  steps =   40  y = 80.890000  error = 0.490000
dt = 0.0167  steps =  120  y = 80.563333  error = 0.163333
dt = 0.0010  steps = 2000  y = 80.409800  error = 0.009800`,
          annotations: [
            { lines: 7, text: 'The exact solution of the IVP $y\'\' = -g$, $y(0) = 100$, $y\'(0) = 0$, used to measure the error.' },
            { lines: 12, text: 'Number of frames needed to cover $2$ seconds. Rounding avoids floating-point drift from adding $dt$ repeatedly.' },
            { lines: '15-16', text: 'One frame = one Euler step for each of the two equations $x\' = v$ and $v\' = a$.' },
            { lines: 18, text: 'Fixed precision (`%.6f`) keeps the output identical on every machine.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Explicit vs semi-implicit Euler',
          text: 'Swap lines 15 and 16 — update velocity first, then position with the *new* velocity — and you get [[semi-implicit-euler]], the default in most engines. Here its error is exactly the same size with the opposite sign ($-9.8\\,\\Delta t$), but for springs and orbits it keeps energy from creeping upward, so systems don\'t slowly blow up. Same cost, much better behaviour.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the error is exactly $9.8\\,\\Delta t$ here',
          text: 'With $n$ steps, the velocity used in step $i$ is $-g\\,i\\,\\Delta t$, so the height drops by $g\\,\\Delta t^2(0 + 1 + \\dots + (n-1)) = \\frac{g\\,\\Delta t^2\\, n(n-1)}{2}$. With $n\\Delta t = T$ that is $\\frac{gT^2}{2} - \\frac{gT\\Delta t}{2}$: the exact drop minus $\\frac{gT}{2}\\Delta t = 9.8\\,\\Delta t$. The error is directly **proportional to the step size**.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student applies Euler\'s method to $y\' = x^2 - y$, $y(0) = 2$, with $h = 0.5$, to estimate $y(1)$. Tap the first wrong line.',
      lines: [
        '$f(0, 2) = 0^2 - 2 = -2$',
        '$y_1 = 2 + 0.5(-2) = 1$ at $x_1 = 0.5$',
        '$f(0.5, 1) = 0.5^2 - 1 = -0.75$',
        '$y_2 = 1 + (-0.75) = 0.25$ at $x_2 = 1$',
        'So $y(1) \\approx 0.25$',
      ],
      errorLines: [4],
      explanation: 'Line 4 adds the slope itself instead of $h$ times the slope. The rise over a step of width $0.5$ is $0.5 \\times (-0.75) = -0.375$, so $y_2 = 1 - 0.375 = 0.625$ and $y(1) \\approx 0.625$. Forgetting $h$ is the classic Euler bug — in a game it makes motion depend on how many frames you take rather than on how much time passes.',
    },
    {
      kind: 'concept',
      title: 'Step size and error',
      blocks: [
        {
          type: 'p',
          text: 'Each Euler step follows a tangent line, which drifts away from the curve by roughly $\\frac{1}{2}y\'\'h^2$ (the [[linear-approximation]] error). That is the **local error** per step. Reaching a fixed point $x$ takes about $\\frac{x - x_0}{h}$ steps, so the errors add up to something proportional to $h^2 \\cdot \\frac{1}{h} = h$.',
        },
        {
          type: 'theorem',
          name: "Error of Euler's method",
          text: 'For a smooth equation on a fixed interval, the **global error** at the end is roughly proportional to $h$: halving the step size roughly halves the error. Euler is called a *first-order* method.',
        },
        {
          type: 'graph',
          x: [-0.05, 1.5],
          y: [0, 4.6],
          functions: [
            { expr: 'e^x', label: 'exact $y = e^x$', domain: [0, 1.5] },
            { expr: '(1+1/n)^floor(n*x) * (1 + x - floor(n*x)/n)', label: 'Euler, $h = 1/n$', color: 'red', domain: [0, 1.5] },
          ],
          vlines: [{ x: 1, label: 'x = 1' }],
          sliders: [{ name: 'n', min: 1, max: 40, step: 1, value: 4, label: 'steps per unit $n$' }],
          readouts: [
            { label: 'Euler $y(1) = (1 + \\frac{1}{n})^n =$', expr: '(1+1/n)^n', digits: 5 },
            { label: 'error $e - (1 + \\frac{1}{n})^n =$', expr: 'e - (1+1/n)^n', digits: 5 },
            { label: 'error $\\times\\, n \\approx$', expr: 'n*(e - (1+1/n)^n)', digits: 4 },
          ],
          caption: 'Euler on $y\' = y$, $y(0) = 1$ with $h = \\frac{1}{n}$ gives $y(1) \\approx (1 + \\frac{1}{n})^n$ — the famous limit that defines $e$! Increase $n$: the error shrinks like $\\frac{1}{n}$, so error $\\times\\, n$ levels off (near $\\frac{e}{2} \\approx 1.36$).',
        },
        {
          type: 'table',
          headers: ['$h$', 'Euler $y(1)$', 'error'],
          rows: [
            ['$1$', '$2$', '$0.7183$'],
            ['$0.5$', '$2.25$', '$0.4683$'],
            ['$0.25$', '$2.4414$', '$0.2769$'],
            ['$0.1$', '$2.5937$', '$0.1245$'],
            ['$0.01$', '$2.7048$', '$0.0135$'],
          ],
          caption: 'For $y\' = y$: making $h$ ten times smaller makes the error about ten times smaller.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Smaller steps cost more work',
          text: 'Ten times the accuracy costs ten times the steps. That is why serious simulators use higher-order methods (improved Euler, Runge–Kutta 4 with error $\\propto h^4$), and why games fix their physics step (e.g. always $\\frac{1}{120}$ s) instead of using whatever the frame time happens to be: results then don\'t change with frame rate.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams often ask "is the Euler estimate too high or too low?" Look at [[concavity]]: if the solution is concave up ($y\'\' > 0$) tangent lines lie below it, so Euler **underestimates**; concave down means it overestimates. For $y\' = f(x, y)$ you can find $y\'\'$ by differentiating the equation itself.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the statement about the accuracy of Euler\'s method.',
      template: 'On a fixed interval, the global error of Euler\'s method is roughly proportional to ___. So if a step of $h = 0.1$ gives an error of $0.08$, a step of $h = 0.05$ should give an error of about ___.',
      blanks: [{ answers: ['$h$'] }, { answers: ['$0.04$'] }],
      wordBank: ['$h$', '$h^2$', '$\\frac{1}{h}$', '$0.04$', '$0.02$', '$0.16$'],
      explanation: 'Euler is first order: global error $\\approx Ch$. Halving $h$ halves the error, from $0.08$ to about $0.04$. (The local error per step is $\\propto h^2$, but you take $\\propto \\frac{1}{h}$ steps, so the total is $\\propto h$. If the error were $\\propto h^2$ you would get $0.02$ — that is the behaviour of second-order methods like improved Euler.)',
    },
    {
      kind: 'mcq',
      prompt: 'You use Euler\'s method on $y\' = y^2$, $y(0) = 1$ (a solution that is increasing and concave up) to estimate $y(0.5)$. How does the estimate compare with the true value?',
      options: [
        { text: 'Too low (an underestimate)', correct: true, why: 'Concave up means each tangent line lies below the curve, so every step lands under the true solution, and the next step starts from too low a value with too small a slope.' },
        { text: 'Too high (an overestimate)', why: 'That happens for concave-down solutions, where tangent lines lie above the curve.' },
        { text: 'Exactly right, because the step uses the exact slope', why: 'The slope is exact only at the start of each step. Over the step the true slope keeps increasing, and Euler ignores that.' },
        { text: 'It cannot be determined without computing', why: 'Concavity settles it: differentiating $y\' = y^2$ gives $y\'\' = 2yy\' = 2y^3 > 0$ for $y > 0$.' },
      ],
      explanation: 'Differentiate the equation: $y\'\' = 2y\\,y\' = 2y^3$, which is positive while $y > 0$. A concave-up solution bends above its tangent lines, so Euler underestimates. (Here the exact solution is $y = \\frac{1}{1 - x}$, so $y(0.5) = 2$; Euler with $h = 0.25$ gives $1.25$, then $1.25 + 0.25(1.5625) \\approx 1.64$ — well below $2$.)',
    },
    {
      kind: 'truefalse',
      prompt: 'Two different solution curves of $y\' = x - y$ can cross each other at some point.',
      answer: false,
      explanation: 'Here $f(x, y) = x - y$ and $\\partial f/\\partial y = -1$ are continuous everywhere, so through each point passes exactly **one** solution. If two curves met at a point, both would solve the same IVP from that point, contradicting uniqueness. In the slope field you see this as curves that crowd together (all approach $y = x - 1$) but never touch.',
    },
  ],
  takeaways: [
    'A differential equation relates an unknown function to its derivatives; check a solution by differentiating and substituting.',
    'The general solution contains an arbitrary constant; an initial condition $y(x_0) = y_0$ picks out one particular solution.',
    'A slope field draws the slope $f(x, y)$ at many points; solution curves are tangent to it everywhere and (under mild conditions) never cross.',
    "Euler's method: $y_{n+1} = y_n + h f(x_n, y_n)$ — follow the tangent for a step of length $h$, then re-aim.",
    'A game loop updating `velocity += a * dt` and `position += velocity * dt` is Euler\'s method with $h = \\Delta t$.',
    "Euler's global error is roughly proportional to $h$; concave-up solutions are underestimated, concave-down ones overestimated.",
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 4.2 Direction Fields and Numerical Methods',
      url: 'https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods',
      source: 'openstax',
      note: 'More slope fields to read and further Euler tables worked by hand.',
    },
    {
      title: "Paul's Online Notes — Euler's Method",
      url: 'https://tutorial.math.lamar.edu/Classes/DE/EulersMethod.aspx',
      source: 'paul',
      note: 'Derives the method from the tangent line and discusses its error and stability.',
    },
    {
      title: 'Glenn Fiedler — Integration Basics (Gaffer On Games)',
      url: 'https://gafferongames.com/post/integration_basics/',
      source: 'article',
      note: 'A game programmer\'s explanation of explicit, semi-implicit and RK4 integration in real engines.',
    },
    {
      title: 'Wikipedia — Euler method',
      url: 'https://en.wikipedia.org/wiki/Euler_method',
      source: 'wikipedia',
      note: 'Includes the formal error analysis and a picture of the method drifting from the true solution.',
    },
  ],
};
