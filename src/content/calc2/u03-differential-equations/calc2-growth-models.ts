import type { GraphBlock, Lesson } from '../../types';

type Segment = NonNullable<GraphBlock['segments']>[number];

/** Slope field: a short segment of slope f(x, y) at each grid point (lengths measured in screen pixels). */
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
      out.push({ from: [r(x - halfPx / n), r(y - (m * halfPx) / n)], to: [r(x + halfPx / n), r(y + (m * halfPx) / n)], color: 'gray' });
    }
  }
  return out;
}

export const lesson: Lesson = {
  id: 'calc2-growth-models',
  title: 'Exponential and Logistic Growth',
  summary: 'Why growth proportional to size gives exponentials, why nothing grows exponentially forever, and how the logistic equation captures a population levelling off at its carrying capacity.',
  minutes: 18,
  objectives: [
    'Solve $\\frac{dP}{dt} = kP$ and fit $P_0$ and $k$ from data',
    'Compute doubling times and half-lives from the growth constant',
    'Analyse the logistic equation $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{K}\\right)$ without solving it: equilibria, direction, fastest growth',
    'Solve the logistic equation with partial fractions and use the solution to answer questions',
    'Read $k$ and $K$ off a logistic equation written in expanded form',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Growth proportional to size',
      blocks: [
        {
          type: 'p',
          text: 'Bacteria divide, so twice as many bacteria produce twice as many new ones per hour. Money earns interest on the whole balance. Whenever the **rate** of growth is proportional to the **amount** present, you get the simplest model in all of applied mathematics.',
        },
        {
          type: 'definition',
          term: 'Exponential model',
          text: 'The [[exponential-model]] is $\\frac{dP}{dt} = kP$. The constant $k = \\frac{1}{P}\\frac{dP}{dt}$ is the [[relative-growth-rate]]: the growth per unit time *per individual*. $k > 0$ means growth, $k < 0$ means decay.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\dfrac{dP}{dt} = kP$, $P(0) = P_0$',
          steps: [
            { tex: '\\frac{1}{P}\\,dP = k\\,dt', why: 'The equation is [[separable-equation|separable]]: divide by $P$ (the case $P = 0$ is the equilibrium, covered at the end).' },
            { tex: '\\ln|P| = kt + C', why: 'Integrate both sides.' },
            { tex: 'P = Ae^{kt}', why: 'Exponentiate and absorb $\\pm e^C$ into one constant $A$ (with $A = 0$ giving the solution $P = 0$).' },
            { tex: 'P(0) = A = P_0', why: 'At $t = 0$ the exponential is $1$, so $A$ is the initial amount.' },
          ],
          result: '$P(t) = P_0\\,e^{kt}$: the only functions whose rate of change is proportional to themselves are exponentials.',
        },
        {
          type: 'derivation',
          title: 'A culture has $1000$ cells at $t = 0$ and $1500$ after $2$ hours. Find $P(6)$.',
          steps: [
            { tex: '1500 = 1000\\,e^{2k} \\implies e^{2k} = 1.5', why: 'Substitute the data point $P(2) = 1500$ into $P = 1000e^{kt}$ and divide by $1000$.' },
            { tex: 'k = \\frac{\\ln 1.5}{2} \\approx 0.2027 \\text{ per hour}', why: 'Take $\\ln$ of both sides: the population grows about $20\\%$ per hour, *continuously*.' },
            { tex: 'P(6) = 1000\\,e^{6k} = 1000\\,(e^{2k})^3', why: 'Rewrite $e^{6k}$ as $(e^{2k})^3$ using exponent laws — no decimals needed.' },
            { tex: '= 1000 \\cdot 1.5^3 = 3375', why: 'Six hours is three 2-hour periods, each multiplying the population by $1.5$.' },
          ],
          result: '$P(6) = 3375$ cells. Equivalently, $P(t) = 1000\\cdot 1.5^{t/2}$.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 8000],
          functions: [{ expr: '1000*e^(k*x)', label: '$P = 1000e^{kt}$' }],
          sliders: [{ name: 'k', min: -0.5, max: 0.5, step: 0.01, value: 0.2, label: '$k$' }],
          readouts: [
            { label: '$P(10) =$', expr: '1000*e^(10*k)', digits: 0 },
            { label: 'doubling time $\\frac{\\ln 2}{k} =$', expr: 'ln(2)/k', digits: 2 },
          ],
          caption: 'Horizontal axis: hours. Positive $k$ explodes upward; negative $k$ decays toward $0$ (and the "doubling time" turns negative: it is a halving time). Small changes in $k$ make enormous differences after $10$ hours.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A bacteria population doubles every $3$ hours. If there are $100$ bacteria now, how many will there be after $10$ hours? (Round to the nearest whole bacterium.)',
      hint: 'Ten hours is $\\frac{10}{3}$ doubling periods, so $P = 100 \\cdot 2^{10/3}$.',
      label: '$P(10) \\approx$',
      answer: '100*2^(10/3)',
      answerTex: '100 \\cdot 2^{10/3} \\approx 1008',
      tolerance: 0.6,
      explanation: 'With doubling time $3$, $P(t) = 100 \\cdot 2^{t/3}$ (equivalently $100e^{kt}$ with $k = \\frac{\\ln 2}{3}$). So $P(10) = 100 \\cdot 2^{10/3} \\approx 100 \\cdot 10.079 \\approx 1008$. A common slip is to multiply instead: $100 \\cdot 2 \\cdot \\frac{10}{3} \\approx 667$ treats exponential growth as linear.',
    },
    {
      kind: 'concept',
      title: 'Doubling time and half-life',
      blocks: [
        {
          type: 'p',
          text: 'Exponential growth has a remarkable property: the time it takes to double does not depend on how much you start with. Solve $P_0e^{kt} = 2P_0$: the $P_0$ cancels, leaving $e^{kt} = 2$.',
        },
        {
          type: 'theorem',
          name: 'Doubling time and half-life',
          tex: 't_{\\text{double}} = \\frac{\\ln 2}{k} \\;(k > 0), \\qquad t_{1/2} = \\frac{\\ln 2}{|k|} \\;(k < 0)',
          text: 'Equivalently, $P(t) = P_0\\cdot 2^{t/t_{\\text{double}}}$ or $P(t) = P_0 \\cdot \\left(\\tfrac{1}{2}\\right)^{t/t_{1/2}}$. See [[alg-doubling-time]] and [[half-life]].',
        },
        {
          type: 'derivation',
          title: 'Carbon dating: a bone has $30\\%$ of its original carbon-14. How old is it? ($t_{1/2} = 5730$ years)',
          steps: [
            { tex: 'k = -\\frac{\\ln 2}{5730} \\approx -0.000121', why: 'The half-life formula solved for $k$; negative because carbon-14 decays.' },
            { tex: '0.30\\,P_0 = P_0\\,e^{kt}', why: '$30\\%$ remains, and the unknown original amount $P_0$ will cancel.' },
            { tex: '\\ln 0.30 = kt', why: 'Divide by $P_0$ and take $\\ln$.' },
            { tex: 't = \\frac{\\ln 0.30}{k} = \\frac{5730\\,\\ln(1/0.3)}{\\ln 2} \\approx 9950 \\text{ years}', why: 'Divide by $k$; two negatives make a positive age. Sanity check: $30\\%$ is between $50\\%$ (one half-life) and $25\\%$ (two), so the age should be between $5730$ and $11460$ years. ✓' },
          ],
          result: 'The bone is about $9950$ years old.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $k$ is a "continuous" rate',
          text: 'With $k = 0.2$ per hour the population grows by more than $20\\%$ in an hour: $e^{0.2} \\approx 1.2214$, so about $22\\%$. The difference is compounding — the new cells immediately start reproducing too. That is the same $e$ that appears in continuously compounded interest, and the same $\\left(1 + \\frac{1}{n}\\right)^n$ limit that Euler\'s method produced in the last lesson.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Exponential curves in game design',
          text: 'XP-per-level tables, enemy health scaling and idle-game prices are usually exponential: `cost = base * pow(1.15, level)`. Designers think in doubling times — "a level costs twice as much every 5 levels" means growth factor $2^{1/5} \\approx 1.149$ per level. Left unchecked, exponential economies overflow `int32` surprisingly fast, which is one reason games cap levels.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'A colony has $400$ cells at $t = 0$ and $1200$ cells at $t = 5$ hours. Assuming exponential growth, write $P(t)$.',
      hint: 'Either find $k$ from $e^{5k} = 3$, or notice the population triples every $5$ hours.',
      label: '$P(t) =$',
      answer: '400*3^(t/5)',
      answerTex: 'P(t) = 400 \\cdot 3^{t/5} = 400\\,e^{(\\ln 3/5)\\,t}',
      variables: ['t'],
      domain: [0, 3],
      explanation: '$P(t) = 400e^{kt}$ and $400e^{5k} = 1200$ give $e^{5k} = 3$, so $k = \\frac{\\ln 3}{5} \\approx 0.2197$. Then $P(t) = 400e^{(\\ln 3/5)t} = 400\\cdot 3^{t/5}$ — both forms are the same function, and either is accepted.',
    },
    {
      kind: 'concept',
      title: 'Nothing grows exponentially forever: the logistic equation',
      blocks: [
        {
          type: 'p',
          text: 'Exponential growth predicts $1000$ cells becoming more than $10^{11}$ within a week. Real populations run out of food, space or hosts. A better model keeps $\\frac{dP}{dt} \\approx kP$ when $P$ is small, but makes the relative growth rate fall to zero as $P$ approaches a maximum sustainable size $K$, the [[carrying-capacity]].',
        },
        {
          type: 'definition',
          term: 'Logistic model',
          text: 'The [[logistic-model]] is\n\n$$\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{K}\\right), \\qquad k > 0,\\; K > 0.$$\n\nThe relative growth rate $\\frac{1}{P}\\frac{dP}{dt} = k\\left(1 - \\frac{P}{K}\\right)$ decreases linearly from $k$ (when $P \\approx 0$) to $0$ (when $P = K$).',
        },
        {
          type: 'p',
          text: 'You can learn most of the story **without solving**, just by looking at the sign of the right-hand side:',
        },
        {
          type: 'table',
          headers: ['population', 'sign of $kP(1 - P/K)$', 'behaviour'],
          rows: [
            ['$P = 0$ or $P = K$', '$0$', '[[equilibrium-solution|equilibria]]: the population stays put'],
            ['$0 < P < K$', 'positive', 'grows toward $K$'],
            ['$P > K$', 'negative', 'shrinks toward $K$ (overpopulation dies back)'],
          ],
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [-0.5, 14],
          functions: [
            { expr: '10/(1 + (10 - p)/p*e^(-0.8*x))', label: 'solution with $P(0) = P_0$' },
          ],
          segments: slopeField((_t, P) => 0.8 * P * (1 - P / 10), [0.5, 9.5, 1], [0.5, 13.5, 1], { x: [0, 10], y: [-0.5, 14] }),
          hlines: [
            { y: 10, label: 'K = 10', color: 'green' },
            { y: 5, label: 'K/2', color: 'gray' },
          ],
          points: [{ x: 0, y: 'p' }],
          sliders: [{ name: 'p', min: 0.2, max: 14, step: 0.1, value: 1, label: '$P_0$' }],
          caption: 'Slope field of $P\' = 0.8P(1 - P/10)$. The field depends only on $P$ (it is [[autonomous-equation|autonomous]]), so every horizontal row of segments is identical. Every positive starting value is carried to $K = 10$: it is a **stable** equilibrium, while $P = 0$ is unstable.',
        },
        {
          type: 'derivation',
          title: 'Where is growth fastest?',
          steps: [
            { tex: 'R(P) = kP - \\frac{k}{K}P^2', why: 'The growth rate as a function of the population: expand $kP(1 - P/K)$. It is a downward parabola in $P$.' },
            { tex: "R'(P) = k - \\frac{2k}{K}P = 0", why: 'Maximise $R$: set its derivative with respect to $P$ to zero.' },
            { tex: 'P = \\frac{K}{2}', why: 'Solve for $P$. (It is the vertex of the parabola, halfway between the roots $0$ and $K$.)' },
            { tex: 'R\\left(\\tfrac{K}{2}\\right) = k\\cdot\\frac{K}{2}\\cdot\\frac{1}{2} = \\frac{kK}{4}', why: 'The maximum growth rate.' },
          ],
          result: 'Growth is fastest when the population is half the carrying capacity; there the solution curve has an [[inflection-point]] and switches from concave up to concave down.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'In the logistic model, a population that starts **above** its carrying capacity ($P_0 > K$) keeps growing, but more and more slowly.',
      answer: false,
      explanation: 'If $P > K$ then $1 - \\frac{P}{K} < 0$, so $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{K}\\right) < 0$: the population **decreases** toward $K$. Drag $P_0$ above $10$ in the slope field to see the curves fall onto the line $P = K$. The carrying capacity attracts solutions from both sides.',
    },
    {
      kind: 'mcq',
      prompt: 'A fish population follows $\\frac{dP}{dt} = 0.3P\\left(1 - \\frac{P}{6000}\\right)$. At what population size is it growing fastest?',
      options: [
        { text: '$6000$', why: 'At the carrying capacity growth has stopped: $\\frac{dP}{dt} = 0$ there.' },
        { text: '$3000$', correct: true, why: 'Growth is fastest at $P = \\frac{K}{2} = 3000$, the vertex of the parabola $R(P) = 0.3P(1 - P/6000)$.' },
        { text: 'As small as possible, since the relative growth rate is largest there', why: 'The *relative* rate $k(1 - P/K)$ is largest near $0$, but the actual rate is $P$ times that, and $P$ is tiny there.' },
        { text: '$1800$', why: 'That is $0.3 \\times 6000$, mixing up the rate constant with a population. $k$ controls the speed, not where the maximum is.' },
      ],
      explanation: 'The growth rate $R(P) = kP(1 - P/K)$ is a downward parabola in $P$ with roots $0$ and $K$, so its maximum is at the midpoint $P = \\frac{K}{2} = 3000$. Fisheries use exactly this: harvesting is most sustainable when the stock is kept near half its carrying capacity. The maximum rate itself is $\\frac{kK}{4} = 450$ fish per unit time.',
    },
    {
      kind: 'concept',
      title: 'Solving the logistic equation',
      blocks: [
        {
          type: 'p',
          text: 'The logistic equation is separable, and the $P$-integral yields to [[partial-fractions]]. It helps to write the right side as $\\frac{k}{K}P(K - P)$.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\dfrac{dP}{dt} = kP\\left(1 - \\dfrac{P}{K}\\right)$, $P(0) = P_0$',
          steps: [
            { tex: '\\frac{K}{P(K - P)}\\,dP = k\\,dt', why: 'Rewrite $kP(1 - P/K) = \\frac{k}{K}P(K - P)$, then separate (for $P \\neq 0, K$) and multiply both sides by $K$.' },
            { tex: '\\frac{K}{P(K - P)} = \\frac{1}{P} + \\frac{1}{K - P}', why: 'Partial fractions. Check by combining: $\\frac{(K - P) + P}{P(K - P)} = \\frac{K}{P(K - P)}$. ✓' },
            { tex: '\\ln|P| - \\ln|K - P| = kt + C', why: 'Integrate. Note $\\int \\frac{dP}{K - P} = -\\ln|K - P|$: the inner derivative of $K - P$ is $-1$.' },
            { tex: '\\ln\\left|\\frac{K - P}{P}\\right| = -kt - C', why: 'Combine the logs with $\\ln a - \\ln b = \\ln\\frac{a}{b}$ and multiply by $-1$ to flip the fraction.' },
            { tex: '\\frac{K - P}{P} = Ae^{-kt}', why: 'Exponentiate; $A = \\pm e^{-C}$.' },
            { tex: '\\frac{K}{P} = 1 + Ae^{-kt} \\implies P = \\frac{K}{1 + Ae^{-kt}}', why: 'Split $\\frac{K - P}{P} = \\frac{K}{P} - 1$, add $1$ and take reciprocals.' },
            { tex: 'A = \\frac{K - P_0}{P_0}', why: 'At $t = 0$: $\\frac{K - P_0}{P_0} = Ae^0 = A$.' },
          ],
          result: 'The logistic solution: $P(t) = \\dfrac{K}{1 + Ae^{-kt}}$ with $A = \\dfrac{K - P_0}{P_0}$.',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0, 1500],
          functions: [
            { expr: 'K/(1 + (K - 50)/50*e^(-k*x))', label: 'logistic, $P_0 = 50$' },
            { expr: '50*e^(k*x)', label: 'exponential, same $k$', color: 'red', dashed: true },
          ],
          hlines: [
            { y: 'K', label: 'carrying capacity K', color: 'green' },
            { y: 'K/2', label: 'K/2', color: 'gray' },
          ],
          sliders: [
            { name: 'k', min: 0.1, max: 1.5, step: 0.05, value: 0.5, label: 'growth rate $k$' },
            { name: 'K', min: 200, max: 1400, step: 50, value: 1000, label: 'carrying capacity $K$' },
          ],
          readouts: [
            { label: 'time to reach $K/2$: $\\frac{\\ln A}{k} =$', expr: 'ln((K - 50)/50)/k', digits: 2 },
            { label: 'max growth rate $\\frac{kK}{4} =$', expr: 'k*K/4', digits: 1 },
          ],
          caption: 'Early on, the logistic curve (blue) hugs the exponential (red) — when $P \\ll K$ the factor $1 - P/K \\approx 1$. Then it bends at $K/2$ and levels off. $k$ sets how *fast*, $K$ sets how *high*.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the curve has that S-shape',
          text: 'Set $P = K/2$ in the solution: $\\frac{K}{2} = \\frac{K}{1 + Ae^{-kt}}$ forces $Ae^{-kt} = 1$, so $t^* = \\frac{\\ln A}{k}$. The curve is symmetric about that inflection point: it takes as long to climb from $10\\%$ to $50\\%$ of $K$ as from $50\\%$ to $90\\%$. Before $t^*$ the growth accelerates, after it the brakes dominate.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student solves $\\frac{dP}{dt} = 0.5P\\left(1 - \\frac{P}{1000}\\right)$, $P(0) = 100$. Tap the first wrong line.',
      lines: [
        '$P(t) = \\dfrac{K}{1 + Ae^{-kt}}$ with $K = 1000$, $k = 0.5$',
        '$A = \\dfrac{P_0}{K - P_0} = \\dfrac{100}{900} = \\dfrac{1}{9}$',
        '$P(t) = \\dfrac{1000}{1 + \\frac{1}{9}e^{-0.5t}}$',
        'Check: $P(0) = \\dfrac{1000}{1 + \\frac{1}{9}} = 900$',
      ],
      errorLines: [2],
      explanation: 'The formula for $A$ is upside down. From $\\frac{K - P}{P} = Ae^{-kt}$ at $t = 0$: $A = \\frac{K - P_0}{P_0} = \\frac{900}{100} = 9$. The correct solution is $P(t) = \\frac{1000}{1 + 9e^{-0.5t}}$, which gives $P(0) = \\frac{1000}{10} = 100$. ✓ The student\'s own check in line 4 exposes the error — always plug in $t = 0$.',
    },
    {
      kind: 'concept',
      title: 'Using the solution, and simulating it',
      blocks: [
        {
          type: 'derivation',
          title: 'For $P(t) = \\dfrac{1000}{1 + 9e^{-0.5t}}$: find $P(4)$ and when $P = 500$',
          steps: [
            { tex: 'P(4) = \\frac{1000}{1 + 9e^{-2}}', why: 'Substitute $t = 4$: $-0.5 \\cdot 4 = -2$.' },
            { tex: '\\approx \\frac{1000}{1 + 9(0.13534)} = \\frac{1000}{2.2180} \\approx 450.9', why: '$e^{-2} \\approx 0.13534$.' },
            { tex: '500 = \\frac{1000}{1 + 9e^{-0.5t}} \\implies 1 + 9e^{-0.5t} = 2', why: 'Set $P = 500$ and cross-multiply.' },
            { tex: 'e^{-0.5t} = \\frac{1}{9} \\implies -0.5t = -\\ln 9', why: 'Isolate the exponential and take $\\ln$; $\\ln\\frac{1}{9} = -\\ln 9$.' },
            { tex: 't = 2\\ln 9 \\approx 4.39', why: 'Divide by $-0.5$. This is the inflection time $\\frac{\\ln A}{k}$ with $A = 9$.' },
          ],
          result: 'After $4$ time units the population is about $451$, and it reaches half the carrying capacity at $t = 2\\ln 9 \\approx 4.39$.',
        },
        {
          type: 'p',
          text: 'Not every model has a closed form. Ecologists and games alike often just simulate. Here is the same logistic equation stepped with Euler\'s method (step $0.5$) next to the exact solution:',
        },
        {
          type: 'code',
          title: 'logistic.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    const double k = 0.5, K = 1000.0, P0 = 100.0;
    const double dt = 0.5;
    double P = P0;
    std::printf("   t     Euler     exact\\n");
    for (int i = 0; i <= 20; ++i) {
        double t = i * dt;
        if (i % 4 == 0) {
            double exact = K / (1.0 + (K - P0) / P0 * std::exp(-k * t));
            std::printf("%4.1f  %8.2f  %8.2f\\n", t, P, exact);
        }
        P += k * P * (1.0 - P / K) * dt;     // one Euler step of P' = kP(1 - P/K)
    }
}`,
          output: `   t     Euler     exact
 0.0    100.00    100.00
 2.0    218.22    231.97
 4.0    420.23    450.85
 6.0    665.29    690.57
 8.0    853.00    858.49
10.0    946.60    942.83`,
          annotations: [
            { lines: 11, text: 'Print every 4th step, i.e. every $2$ time units.' },
            { lines: 12, text: 'The exact solution $\\frac{K}{1 + Ae^{-kt}}$ with $A = \\frac{K - P_0}{P_0} = 9$.' },
            { lines: 15, text: 'Euler\'s method: rate from the differential equation, times the step.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Reading the table',
          text: 'Euler lags behind while the curve is concave up ($P < 500$), then *overtakes* the exact solution once it is concave down: by $t = 10$ it is slightly above. That is the concavity rule from the last lesson in action. Both still settle at $K = 1000$, because the equilibrium is built into the equation.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'For $P(t) = \\dfrac{1000}{1 + 9e^{-0.5t}}$, at what time does the population reach $750$?',
      hint: 'Solve $1 + 9e^{-0.5t} = \\frac{1000}{750} = \\frac{4}{3}$, so $9e^{-0.5t} = \\frac{1}{3}$.',
      label: '$t =$',
      answer: '2ln(27)',
      answerTex: 't = 2\\ln 27 \\approx 6.59',
      explanation: '$750(1 + 9e^{-0.5t}) = 1000 \\Rightarrow 9e^{-0.5t} = \\frac{1}{3} \\Rightarrow e^{-0.5t} = \\frac{1}{27} \\Rightarrow t = 2\\ln 27 \\approx 6.59$. Compare: it reached $500$ at $2\\ln 9 \\approx 4.39$, and by the S-curve symmetry it reached $250$ at $2\\ln 3 \\approx 2.20$ — equal gaps of $2\\ln 3$ on each side of the inflection.',
    },
    {
      kind: 'concept',
      title: 'Logistic equations in the wild',
      blocks: [
        {
          type: 'p',
          text: 'Models rarely arrive in the tidy form $kP(1 - P/K)$. Usually you see a quadratic in $P$, and you factor it to read off the parameters.',
        },
        {
          type: 'derivation',
          title: 'Identify $k$ and $K$ in $\\dfrac{dP}{dt} = 0.04P - 0.0002P^2$',
          steps: [
            { tex: '0.04P - 0.0002P^2 = 0.04P\\left(1 - \\frac{0.0002}{0.04}P\\right)', why: 'Factor out the coefficient of $P$, which is $k$.' },
            { tex: '= 0.04P\\left(1 - \\frac{P}{200}\\right)', why: '$\\frac{0.0002}{0.04} = 0.005 = \\frac{1}{200}$.' },
          ],
          result: '$k = 0.04$ and $K = 200$. Shortcut: $K$ is the nonzero root of the right side, $0.04 - 0.0002P = 0 \\Rightarrow P = 200$.',
        },
        {
          type: 'list',
          items: [
            '**Epidemics:** the number of people who have heard a rumour or caught a disease often follows a logistic curve; the carrying capacity is the whole population.',
            '**Technology adoption:** sales of a new console start slow, accelerate, and saturate the market.',
            '**Machine learning:** the solution with $K = 1$, $k = 1$, $A = 1$ is the sigmoid $\\sigma(x) = \\frac{1}{1 + e^{-x}}$, the classic neural-network activation. Its derivative satisfies $\\sigma\' = \\sigma(1 - \\sigma)$: it *is* the logistic equation.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Logistic growth in game systems',
          text: 'Resource regrowth in survival and strategy games (forests, fish, wildlife spawns) is often logistic: a depleted area regenerates slowly, a healthy one quickly, and nothing exceeds a cap. The update `stock += k * stock * (1 - stock / cap) * dt;` is one Euler step of the equation — and it explains why players learn to harvest down to about half the cap, where regrowth is fastest.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Typical exam questions need no solving at all: identify $K$, state the equilibria and their stability, find where $P$ grows fastest ($K/2$), or find $\\lim_{t \\to \\infty} P(t)$ ($= K$ for any $P_0 > 0$). Read the question before reaching for partial fractions.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'A population satisfies $\\dfrac{dP}{dt} = 0.02P - 0.0001P^2$.',
      template: 'In logistic form, the growth constant is $k =$ ___ and the carrying capacity is $K =$ ___. The population grows fastest when $P =$ ___.',
      blanks: [{ answers: ['$0.02$'] }, { answers: ['$200$'] }, { answers: ['$100$'] }],
      wordBank: ['$0.02$', '$0.0001$', '$200$', '$100$', '$50$', '$10000$'],
      explanation: 'Factor: $0.02P - 0.0001P^2 = 0.02P\\left(1 - \\frac{0.0001}{0.02}P\\right) = 0.02P\\left(1 - \\frac{P}{200}\\right)$. So $k = 0.02$, $K = 200$, and growth is fastest at $\\frac{K}{2} = 100$. ($10000 = \\frac{1}{0.0001}$ is a tempting wrong $K$: the carrying capacity is $\\frac{k}{0.0001}$, not $\\frac{1}{0.0001}$.)',
    },
    {
      kind: 'numeric',
      prompt: 'For the same population, $\\dfrac{dP}{dt} = 0.02P - 0.0001P^2$, what is the **maximum** possible growth rate $\\dfrac{dP}{dt}$?',
      hint: 'Evaluate the right-hand side at $P = \\frac{K}{2}$, or use $\\frac{kK}{4}$.',
      label: '$\\left(\\frac{dP}{dt}\\right)_{\\max} =$',
      answer: '1',
      explanation: 'At $P = 100$: $0.02(100) - 0.0001(100)^2 = 2 - 1 = 1$ individual per unit time. Check with the formula: $\\frac{kK}{4} = \\frac{0.02 \\cdot 200}{4} = 1$. ✓',
    },
  ],
  takeaways: [
    'The exponential model $\\frac{dP}{dt} = kP$ has solution $P = P_0e^{kt}$; $k$ is the relative growth rate.',
    'Doubling time is $\\frac{\\ln 2}{k}$ and half-life is $\\frac{\\ln 2}{|k|}$, independent of the starting amount.',
    'The logistic model $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{K}\\right)$ has equilibria $P = 0$ (unstable) and $P = K$ (stable); populations above $K$ decline toward it.',
    'Logistic growth is fastest at $P = \\frac{K}{2}$, with maximum rate $\\frac{kK}{4}$; the solution curve inflects there.',
    'Solution: $P(t) = \\frac{K}{1 + Ae^{-kt}}$ with $A = \\frac{K - P_0}{P_0}$, found by separation and partial fractions.',
    'To read $k$ and $K$ from $aP - bP^2$, factor: $k = a$, $K = \\frac{a}{b}$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 4.4 The Logistic Equation',
      url: 'https://openstax.org/books/calculus-volume-2/pages/4-4-the-logistic-equation',
      source: 'openstax',
      note: 'Derives the logistic solution and works through population examples with real data.',
    },
    {
      title: 'Khan Academy — Calculus 2',
      url: 'https://www.khanacademy.org/math/calculus-2',
      source: 'khan',
      note: 'The differential equations unit has short videos on exponential and logistic models.',
    },
    {
      title: 'Wikipedia — Logistic function',
      url: 'https://en.wikipedia.org/wiki/Logistic_function',
      source: 'wikipedia',
      note: 'History (Verhulst, 1838) and the many places the S-curve appears, from ecology to neural networks.',
    },
  ],
};
