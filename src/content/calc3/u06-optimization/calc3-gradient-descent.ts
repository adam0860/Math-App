import type { GraphBlock, Lesson, Plot3DBlock } from '../../types';

type Seg = NonNullable<GraphBlock['segments']>[number];
type Vec = NonNullable<Plot3DBlock['vectors']>[number];

/** Polyline through precomputed points, as graph segments. */
function polyline(pts: [number, number][], color: Seg['color']): Seg[] {
  return pts.slice(1).map((p, i) => ({ from: pts[i], to: p, color }));
}

// Gradient descent on f = x^2 + 5y^2 from (-4, 1.5) with learning rate r (a slider):
// x_k = -4(1 - 2r)^k,  y_k = 1.5(1 - 10r)^k.
const GD_STEPS = 15;
const gdX = (k: number) => `-4(1 - 2r)^${k}`;
const gdY = (k: number) => `1.5(1 - 10r)^${k}`;
const gdSegments: Seg[] = Array.from({ length: GD_STEPS }, (_, k) => ({
  from: [gdX(k), gdY(k)],
  to: [gdX(k + 1), gdY(k + 1)],
  color: 'red',
}));

// The same iteration from (4, 1) on the bowl, drawn on the 3D surface.
const bowlVectors: Vec[] = Array.from({ length: 8 }, (_, k) => {
  const x = (j: number) => `4(1 - 2r)^${j}`;
  const y = (j: number) => `(1 - 10r)^${j}`;
  const z = (j: number) => `16(1 - 2r)^${2 * j} + 5(1 - 10r)^${2 * j}`;
  return { from: [x(k), y(k), z(k)], to: [x(k + 1), y(k + 1), z(k + 1)], color: 'red' };
});

// f = x^2/2 + 25y^2/2 from (-4, 0.8): 25 steps of plain GD (eta = 0.075)
// and of momentum (eta = 0.03, beta = 0.7). Computed with numpy.
const GD_PATH: [number, number][] = [
  [-4.0, 0.8], [-3.7, -0.7], [-3.423, 0.612], [-3.166, -0.536], [-2.928, 0.469], [-2.709, -0.41], [-2.506, 0.359],
  [-2.318, -0.314], [-2.144, 0.275], [-1.983, -0.241], [-1.834, 0.21], [-1.697, -0.184], [-1.569, 0.161],
  [-1.452, -0.141], [-1.343, 0.123], [-1.242, -0.108], [-1.149, 0.094], [-1.063, -0.083], [-0.983, 0.072],
  [-0.909, -0.063], [-0.841, 0.055], [-0.778, -0.048], [-0.72, 0.042], [-0.666, -0.037], [-0.616, 0.032], [-0.57, -0.028],
];
const MOMENTUM_PATH: [number, number][] = [
  [-4.0, 0.8], [-3.88, 0.2], [-3.68, -0.37], [-3.429, -0.491], [-3.151, -0.208], [-2.861, 0.147], [-2.573, 0.285],
  [-2.294, 0.168], [-2.03, -0.04], [-1.784, -0.155], [-1.558, -0.12], [-1.354, -0.005], [-1.17, 0.079],
  [-1.006, 0.079], [-0.861, 0.019], [-0.734, -0.037], [-0.623, -0.048], [-0.526, -0.02], [-0.443, 0.015],
  [-0.372, 0.028], [-0.31, 0.016], [-0.258, -0.004], [-0.214, -0.015], [-0.176, -0.012], [-0.145, 0.0], [-0.119, 0.008],
];

// GD with eta = 0.1 on f = x^4/4 - x^2/2 + y^2/2 from (0.00001, 1): every 2nd iterate for 160 steps.
const SADDLE_PATH: [number, number][] = [
  [0.0, 1.0], [0.0, 0.81], [0.0, 0.6561], [0.0, 0.5314], [0.0, 0.4305], [0.0, 0.3487], [0.0, 0.2824], [0.0, 0.2288],
  [0.0, 0.1853], [0.0001, 0.1501], [0.0001, 0.1216], [0.0001, 0.0985], [0.0001, 0.0798], [0.0001, 0.0646],
  [0.0001, 0.0523], [0.0002, 0.0424], [0.0002, 0.0343], [0.0003, 0.0278], [0.0003, 0.0225], [0.0004, 0.0182],
  [0.0005, 0.0148], [0.0005, 0.012], [0.0007, 0.0097], [0.0008, 0.0079], [0.001, 0.0064], [0.0012, 0.0052],
  [0.0014, 0.0042], [0.0017, 0.0034], [0.0021, 0.0027], [0.0025, 0.0022], [0.003, 0.0018], [0.0037, 0.0015],
  [0.0045, 0.0012], [0.0054, 0.001], [0.0065, 0.0008], [0.0079, 0.0006], [0.0096, 0.0005], [0.0116, 0.0004],
  [0.014, 0.0003], [0.0169, 0.0003], [0.0205, 0.0002], [0.0248, 0.0002], [0.03, 0.0001], [0.0363, 0.0001],
  [0.0439, 0.0001], [0.0531, 0.0001], [0.0642, 0.0001], [0.0776, 0.0], [0.0938, 0.0], [0.1133, 0.0], [0.1367, 0.0],
  [0.1648, 0.0], [0.1983, 0.0], [0.238, 0.0], [0.2848, 0.0], [0.339, 0.0], [0.4009, 0.0], [0.4698, 0.0],
  [0.5441, 0.0], [0.6209, 0.0], [0.6963, 0.0], [0.7661, 0.0], [0.8268, 0.0], [0.8762, 0.0], [0.9141, 0.0],
  [0.9419, 0.0], [0.9613, 0.0], [0.9746, 0.0], [0.9835, 0.0], [0.9893, 0.0], [0.9931, 0.0], [0.9956, 0.0],
  [0.9972, 0.0], [0.9982, 0.0], [0.9988, 0.0], [0.9993, 0.0], [0.9995, 0.0], [0.9997, 0.0], [0.9998, 0.0],
  [0.9999, 0.0], [0.9999, 0.0],
];
const SADDLE_LOSS = [
  0.5, 0.328, 0.2152, 0.1412, 0.0927, 0.0608, 0.0399, 0.0262, 0.0172, 0.0113, 0.0074, 0.0048, 0.0032, 0.0021, 0.0014,
  0.0009, 0.0006, 0.0004, 0.0003, 0.0002, 0.0001, 0.0001, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, -0.0001, -0.0001, -0.0001, -0.0002, -0.0003, -0.0004, -0.0007, -0.001, -0.0014, -0.0021, -0.003,
  -0.0044, -0.0064, -0.0093, -0.0134, -0.0193, -0.0275, -0.0389, -0.0542, -0.0739, -0.0982, -0.1261, -0.1556,
  -0.1837, -0.2074, -0.225, -0.2365, -0.2432, -0.2468, -0.2486, -0.2494, -0.2497, -0.2499, -0.25, -0.25, -0.25,
  -0.25, -0.25, -0.25, -0.25, -0.25, -0.25, -0.25, -0.25,
];

export const lesson: Lesson = {
  id: 'calc3-gradient-descent',
  title: 'Gradient Descent and Numerical Optimization',
  summary: 'When you cannot solve $\\nabla f = \\vec{0}$ by hand, walk downhill instead. Tune the learning rate, add momentum, take Newton steps with the Hessian, and see why saddle points, not bad minima, are the real obstacle in machine-learning loss landscapes.',
  minutes: 20,
  objectives: [
    'Carry out gradient-descent steps $\\vec{x}_{k+1} = \\vec{x}_k - \\eta\\nabla f(\\vec{x}_k)$ by hand',
    'Explain why too large a learning rate diverges, and find the stability limit $\\eta < \\frac{2}{\\lambda_{\\max}}$ for a quadratic',
    'Describe how momentum speeds up descent in narrow valleys',
    'Derive and apply Newton\'s method $\\vec{x}_{k+1} = \\vec{x}_k - H^{-1}\\nabla f$, and state its costs and risks',
    'Explain why saddle points dominate high-dimensional loss landscapes and how descent escapes them',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Walking downhill',
      blocks: [
        {
          type: 'p',
          text: 'In the last two lessons you found extrema by solving $\\nabla f = \\vec{0}$ exactly. That works for textbook functions. A neural network\'s loss function has millions or billions of variables (its weights), and nobody can solve that system on paper. A game AI tuning a dozen parameters by simulation may not even have a formula for $f$. You need a method that only asks "what is the gradient **here**?"',
        },
        {
          type: 'p',
          text: 'The gradient lesson gave you one. $-\\nabla f$ points in the direction of steepest descent. So take a small step that way, recompute the gradient, and repeat. This is [[calc3-gradient-descent]]:',
        },
        {
          type: 'theorem',
          name: 'Gradient descent',
          tex: '\\vec{x}_{k+1} = \\vec{x}_k - \\eta\\,\\nabla f(\\vec{x}_k)',
          text: 'The positive constant $\\eta$ (eta) is the [[calc3-learning-rate]], or step size. Stop when $|\\nabla f|$ is tiny, when $f$ stops improving, or after a fixed budget of steps.',
        },
        {
          type: 'derivation',
          title: 'Two steps on $f(x, y) = x^2 + 5y^2$ from $(4, 1)$ with $\\eta = 0.05$',
          steps: [
            { tex: '\\nabla f = \\langle 2x, 10y \\rangle, \\quad f(4, 1) = 21', why: 'The gradient formula and the starting loss.' },
            { tex: '\\vec{x}_1 = \\langle 4, 1 \\rangle - 0.05\\langle 8, 10 \\rangle = \\langle 3.6, 0.5 \\rangle, \\quad f = 14.21', why: '$\\nabla f(4, 1) = \\langle 8, 10 \\rangle$. Step against it, scaled by $\\eta$.' },
            { tex: '\\vec{x}_2 = \\langle 3.6, 0.5 \\rangle - 0.05\\langle 7.2, 5 \\rangle = \\langle 3.24, 0.25 \\rangle, \\quad f \\approx 10.81', why: 'Recompute the gradient at the new point, $\\langle 7.2, 5 \\rangle$, and step again.' },
          ],
          result: 'The loss drops $21 \\to 14.21 \\to 10.81$. Notice that $y$ halves each step while $x$ shrinks only by $10\\%$: the steep direction is solved fast, the shallow one slowly.',
        },
        {
          type: 'plot3d',
          x: [-4.8, 4.8],
          y: [-2.2, 2.2],
          z: [0, 22],
          parametricSurfaces: [{ x: '4.5u cos(v)', y: '(4.5/sqrt(5))u sin(v)', z: '20.25u^2', u: [0, 1.04], v: [0, '2pi'], color: 'blue', opacity: 0.4, label: '$z = x^2 + 5y^2$' }],
          vectors: bowlVectors,
          points: [{ x: 4, y: 1, z: 21, label: 'start', color: 'red' }, { x: 0, y: 0, z: 0, label: 'min', color: 'green' }],
          sliders: [{ name: 'r', min: 0.01, max: 0.19, step: 0.005, value: 0.05, label: 'learning rate $\\eta$' }],
          readouts: [{ label: 'loss after 8 steps $=$', expr: '16(1 - 2r)^16 + 5(1 - 10r)^16', digits: 4 }],
          view: { azimuth: 30, elevation: 30 },
          caption: 'Eight descent steps on the bowl, starting at $(4, 1)$. Each red arrow goes from $\\vec{x}_k$ to $\\vec{x}_{k+1}$, lifted onto the surface. Raise $\\eta$ and the first step overshoots the valley floor in $y$, so the path starts to zigzag.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Machine learning in one line',
          text: 'Training a neural network is gradient descent on a loss $L(\\vec{w})$: the average error of the network over the training data, as a function of all its weights $\\vec{w}$. Backpropagation (the chain rule from the chain-rule lesson) computes $\\nabla L$, and the optimizer runs `w -= eta * grad`. In practice the gradient is estimated from a small random batch of data each step: **stochastic** gradient descent.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Take one gradient-descent step on $f(x, y) = x^2 + 3y^2$ from $(2, 1)$ with learning rate $\\eta = 0.1$. What is $f$ at the new point?',
      label: '$f(\\vec{x}_1) =$',
      answer: '3.04',
      hint: '$\\nabla f = \\langle 2x, 6y \\rangle$, so $\\nabla f(2, 1) = \\langle 4, 6 \\rangle$.',
      explanation: '$\\vec{x}_1 = \\langle 2, 1 \\rangle - 0.1\\langle 4, 6 \\rangle = \\langle 1.6, 0.4 \\rangle$. Then $f(1.6, 0.4) = 2.56 + 3(0.16) = 2.56 + 0.48 = 3.04$, down from $f(2, 1) = 7$. A common slip is to add the gradient instead of subtracting it; that climbs to $f(2.4, 1.6) = 13.44$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The learning rate: too small, too big, just right',
      blocks: [
        {
          type: 'p',
          text: 'A tiny $\\eta$ takes forever. A big $\\eta$ overshoots: the gradient was only accurate near $\\vec{x}_k$, and a long step lands somewhere the slope is completely different. For a quadratic you can see exactly where the line is.',
        },
        {
          type: 'derivation',
          title: 'Stability of gradient descent on $f(x, y) = x^2 + 5y^2$',
          steps: [
            { tex: 'x_{k+1} = x_k - \\eta(2x_k) = (1 - 2\\eta)\\,x_k', why: 'The $x$-part of the update. The coordinates decouple because $f$ has no $xy$ term.' },
            { tex: 'y_{k+1} = y_k - \\eta(10y_k) = (1 - 10\\eta)\\,y_k', why: 'The $y$-part.' },
            { tex: 'x_k = (1 - 2\\eta)^k x_0, \\quad y_k = (1 - 10\\eta)^k y_0', why: 'Each coordinate is multiplied by a fixed factor every step: a geometric sequence.' },
            { tex: '|1 - 2\\eta| < 1 \\text{ and } |1 - 10\\eta| < 1 \\iff 0 < \\eta < 0.2', why: 'A geometric sequence goes to $0$ exactly when its ratio has absolute value less than $1$. The steep $y$-direction sets the limit.' },
          ],
          result: 'Gradient descent converges for $0 < \\eta < 0.2$. At $\\eta = 0.2$ the $y$-coordinate flips sign forever; above it, the iterates oscillate with growing amplitude and $f \\to \\infty$.',
        },
        {
          type: 'p',
          text: 'In general, near a minimum $f$ looks like a quadratic whose curvatures are the [[eigenvalue|eigenvalues]] of the [[calc3-hessian]] (here $2$ and $10$). Gradient descent is stable only if $\\eta < \\frac{2}{\\lambda_{\\max}}$. And progress along the shallowest direction runs at rate $1 - \\eta\\lambda_{\\min}$. The ratio $\\kappa = \\frac{\\lambda_{\\max}}{\\lambda_{\\min}}$, the **condition number**, measures how stretched the valley is. Large $\\kappa$ means slow descent, whatever $\\eta$ you pick.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-2.5, 2.5],
          equal: true,
          implicit: [{ expr: 'x^2 + 5y^2', levels: [1, 4, 9, 16, 25], label: 'contours of $f = x^2 + 5y^2$', color: 'purple' }],
          segments: gdSegments,
          points: [
            { x: -4, y: 1.5, label: 'start', color: 'red' },
            { x: gdX(GD_STEPS), y: gdY(GD_STEPS), color: 'orange' },
            { x: 0, y: 0, color: 'green' },
          ],
          sliders: [{ name: 'r', min: 0.01, max: 0.22, step: 0.005, value: 0.05, label: 'learning rate $\\eta$' }],
          readouts: [
            { label: '$x$-factor $|1 - 2\\eta| =$', expr: 'abs(1 - 2r)', digits: 3 },
            { label: '$y$-factor $|1 - 10\\eta| =$', expr: 'abs(1 - 10r)', digits: 3 },
            { label: '$f$ after 15 steps $=$', expr: '16(1 - 2r)^30 + 2.25*5(1 - 10r)^30', digits: 4 },
          ],
          caption: 'Fifteen steps from $(-4, 1.5)$; the orange dot is where the descent ends. At $\\eta = 0.05$ the path curves smoothly in. Around $\\eta = 0.15$ it zigzags across the valley. Past $\\eta = 0.2$ the zigzag grows and the path flies off the map. The best balance is $\\eta = \\frac{1}{6}$, where both factors equal $\\frac{2}{3}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Diverging loss is a learning-rate symptom',
          text: 'If your training loss suddenly shoots up to `inf` or `NaN`, the first suspect is a learning rate above the stability limit for some steep direction. Halve $\\eta$ and try again. In practice people also shrink $\\eta$ over time (a learning-rate **schedule**): big steps early, careful steps near the minimum.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Gradient descent is run on $f(x, y) = 2x^2 + 8y^2$. What is the largest learning rate $\\eta$ for which it converges from every starting point? (Converges for all $\\eta$ strictly below your answer.)',
      label: '$\\eta_{\\max} =$',
      answer: '1/8',
      hint: 'The update multiplies $x$ by $1 - 4\\eta$ and $y$ by $1 - 16\\eta$. Both factors need absolute value less than $1$.',
      explanation: '$\\nabla f = \\langle 4x, 16y \\rangle$, so $x_{k+1} = (1 - 4\\eta)x_k$ and $y_{k+1} = (1 - 16\\eta)y_k$. $|1 - 16\\eta| < 1$ requires $\\eta < \\frac{2}{16} = \\frac{1}{8}$, and the $x$-condition $\\eta < \\frac{1}{2}$ is weaker. Equivalently, the Hessian\'s eigenvalues are $4$ and $16$, and $\\eta < \\frac{2}{\\lambda_{\\max}} = \\frac{1}{8} = 0.125$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'You run gradient descent with a learning rate slightly **above** the stability limit for the steepest direction. What do you expect to see?',
      options: [
        { text: 'Slow but steady convergence', why: 'That is the symptom of a learning rate that is too **small**.' },
        { text: 'The iterates bounce from side to side across the valley with growing amplitude, and the loss blows up', correct: true, why: 'Along the steep direction the update factor $1 - \\eta\\lambda_{\\max}$ is below $-1$: each step flips the sign and enlarges the error.' },
        { text: 'Convergence to a different local minimum', why: 'Overshooting can do that on a bumpy function, but on a smooth bowl the defining symptom of $\\eta > \\frac{2}{\\lambda_{\\max}}$ is oscillating divergence.' },
        { text: 'Convergence in exactly one step', why: 'One-step convergence happens only on a quadratic, when $\\eta = \\frac{1}{\\lambda}$ for every direction at once. That requires all eigenvalues equal.' },
      ],
      explanation: 'Near a minimum each eigen-direction evolves as $e_{k+1} = (1 - \\eta\\lambda)e_k$. With $\\eta$ just above $\\frac{2}{\\lambda_{\\max}}$, that factor is slightly less than $-1$: the error flips sign each step and grows. You see the iterates ping-pong across the valley with ever larger swings, and the loss explodes.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Momentum: give the ball some mass',
      blocks: [
        {
          type: 'p',
          text: 'In a long narrow valley, plain gradient descent wastes its effort. The gradient points mostly across the valley (the steep direction), so the path zigzags, and the learning rate cannot be raised to speed up the shallow direction without blowing up the steep one.',
        },
        {
          type: 'p',
          text: 'The fix is physical intuition. A heavy ball rolling down the valley does not change direction instantly; it builds up speed along the valley floor, while its side-to-side wobbles cancel out. [[calc3-momentum]] gives the iterate a velocity that remembers past gradients:',
        },
        {
          type: 'math',
          tex: '\\vec{v}_{k+1} = \\beta\\,\\vec{v}_k + \\nabla f(\\vec{x}_k), \\qquad \\vec{x}_{k+1} = \\vec{x}_k - \\eta\\,\\vec{v}_{k+1}',
          caption: 'With $\\beta = 0$ this is plain gradient descent. Typical values are $\\beta = 0.9$ or so: $90\\%$ of the velocity survives each step.',
        },
        {
          type: 'graph',
          x: [-4.5, 1],
          y: [-1.4, 1.4],
          equal: true,
          implicit: [{ expr: 'x^2/2 + 25y^2/2', levels: [0.5, 2, 4.5, 8, 12.5], label: 'contours of $f = \\frac{x^2}{2} + \\frac{25y^2}{2}$', color: 'purple' }],
          segments: [...polyline(GD_PATH, 'red'), ...polyline(MOMENTUM_PATH, 'green')],
          points: [
            { x: -4, y: 0.8, label: 'start', color: 'gray' },
            { x: -0.57, y: -0.028, color: 'red' },
            { x: -0.119, y: 0.008, color: 'green' },
            { x: 0, y: 0, color: 'gray' },
          ],
          caption: 'Twenty-five steps of each method on a valley with condition number $25$. Red: gradient descent at $\\eta = 0.075$, close to its stability limit $0.08$; it zigzags and ends at $f \\approx 0.17$. Green: momentum with $\\eta = 0.03$, $\\beta = 0.7$; it swings gently and ends at $f \\approx 0.008$, more than $20$ times lower.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why momentum helps',
          text: 'Along the valley floor the gradient points the same way step after step, so the velocity adds up like a geometric series: up to $\\frac{1}{1 - \\beta}$ times a single step ($10\\times$ for $\\beta = 0.9$). Across the valley the gradient flips sign every step, so consecutive contributions cancel. Momentum amplifies consistent directions and damps oscillating ones. With well-tuned $\\eta$ and $\\beta$ on a quadratic, the number of steps scales like $\\sqrt{\\kappa}$ instead of $\\kappa$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'expr',
      prompt: 'For $f(x, y) = x^2 + xy$ and learning rate $\\eta = 0.1$, write the $x$-coordinate of the next gradient-descent iterate, $x_{k+1}$, in terms of the current $x = x_k$ and $y = y_k$.',
      label: '$x_{k+1} =$',
      answer: '0.8x - 0.1y',
      variables: ['x', 'y'],
      hint: '$f_x = 2x + y$. The update is $x_{k+1} = x - \\eta f_x$.',
      explanation: '$x_{k+1} = x - 0.1(2x + y) = x - 0.2x - 0.1y = 0.8x - 0.1y$. The $y$-update would use $f_y = x$: $y_{k+1} = y - 0.1x$. Both coordinates are updated from the **same** old point; using the new $x$ to compute the $y$-update would be a different algorithm.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Newton\'s method: use the curvature too',
      blocks: [
        {
          type: 'p',
          text: 'Gradient descent uses only first derivatives, so it cannot tell a gentle bowl from a steep one, and it needs a hand-tuned $\\eta$. Newton\'s method also uses the second derivatives. It fits a quadratic model to $f$ at the current point using the [[taylor-series|Taylor expansion]], and jumps straight to that model\'s minimum.',
        },
        {
          type: 'derivation',
          title: 'Deriving the Newton step',
          steps: [
            { tex: 'f(\\vec{x}_k + \\vec{p}) \\approx f(\\vec{x}_k) + \\nabla f \\cdot \\vec{p} + \\tfrac{1}{2}\\vec{p}^{\\,T} H \\vec{p}', why: 'Second-order Taylor model in the step $\\vec{p}$. $H$ is the Hessian at $\\vec{x}_k$.' },
            { tex: '\\nabla_{\\vec{p}}\\left(\\cdots\\right) = \\nabla f + H\\vec{p} = \\vec{0}', why: 'Minimize the model: set its gradient with respect to $\\vec{p}$ to zero. ($H$ is symmetric.)' },
            { tex: 'H\\vec{p} = -\\nabla f \\implies \\vec{p} = -H^{-1}\\nabla f', why: 'Solve the linear system. In code you solve $H\\vec{p} = -\\nabla f$ rather than forming $H^{-1}$.' },
            { tex: '\\vec{x}_{k+1} = \\vec{x}_k - H(\\vec{x}_k)^{-1}\\,\\nabla f(\\vec{x}_k)', why: 'The Newton update.' },
          ],
          result: 'In one variable this is $x_{k+1} = x_k - \\frac{f\'(x_k)}{f\'\'(x_k)}$: the [[newtons-method]] you know, applied to the equation $f\'(x) = 0$.',
        },
        {
          type: 'derivation',
          title: 'One Newton step on $f(x, y) = x^2 + xy + y^2 - 3x$ from $(0, 0)$',
          steps: [
            { tex: '\\nabla f = \\langle 2x + y - 3,\\ x + 2y \\rangle = \\langle -3, 0 \\rangle', why: 'Gradient at the start.' },
            { tex: 'H = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}, \\quad H^{-1} = \\frac{1}{3}\\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}', why: 'The Hessian is constant for a quadratic. Invert the $2 \\times 2$ matrix: swap the diagonal, negate the off-diagonal, divide by $\\det H = 3$.' },
            { tex: 'H^{-1}\\nabla f = \\frac{1}{3}\\langle -6, 3 \\rangle = \\langle -2, 1 \\rangle', why: 'Matrix times vector.' },
            { tex: '\\vec{x}_1 = \\langle 0, 0 \\rangle - \\langle -2, 1 \\rangle = \\langle 2, -1 \\rangle', why: 'This is the exact minimum found in the extrema lesson. For a quadratic the model is exact, so one step lands on the minimum.' },
          ],
          result: 'Newton reaches the minimum in one step, with no learning rate to tune.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The price of Newton',
          text: 'With $n$ parameters the Hessian has $n^2$ entries, and solving $H\\vec{p} = -\\nabla f$ costs on the order of $n^3$ operations. For a network with $10^9$ weights that is hopeless, which is why deep learning uses first-order methods. Quasi-Newton methods (BFGS, L-BFGS) build a cheap approximation of $H$ from gradient history instead. Worse, Newton solves $\\nabla f = \\vec{0}$, so it is attracted to **any** critical point. On $f = \\frac{x^4}{4} - \\frac{x^2}{2} + \\frac{y^2}{2}$ from $(0.1, 1)$, one Newton step lands at about $(-0.002, 0)$, right next to the saddle at the origin, and the next step converges onto it.',
        },
        {
          type: 'deepdive',
          title: 'Quadratic convergence',
          blocks: [
            {
              type: 'p',
              text: 'Near a minimum with positive definite Hessian, Newton\'s error satisfies $|e_{k+1}| \\le C|e_k|^2$: the number of correct digits roughly **doubles** each step. Gradient descent only shrinks the error by a constant factor per step (linear convergence). That is why the program at the end of this lesson needs $6$ Newton steps against tens of thousands of gradient steps.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student takes one Newton step on $f(x, y) = x^2 + 2y^2$ from $(2, 1)$. Tap the first line that is wrong.',
      lines: [
        '$\\nabla f = \\langle 2x, 4y \\rangle = \\langle 4, 4 \\rangle$ at $(2, 1)$',
        '$H = \\begin{bmatrix} 2 & 0 \\\\ 0 & 4 \\end{bmatrix}$',
        'Newton step: $\\vec{p} = -H\\nabla f = \\langle -8, -16 \\rangle$',
        '$\\vec{x}_1 = \\langle 2, 1 \\rangle + \\langle -8, -16 \\rangle = \\langle -6, -15 \\rangle$',
      ],
      errorLines: [3],
      explanation: 'The Newton step uses the **inverse** Hessian: $\\vec{p} = -H^{-1}\\nabla f$. Multiplying by $H$ instead of dividing by the curvature makes steep directions take bigger steps, which is exactly backwards. Correctly, $H^{-1} = \\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{4} \\end{bmatrix}$, so $\\vec{p} = -\\langle 2, 1 \\rangle$ and $\\vec{x}_1 = \\langle 0, 0 \\rangle$: the exact minimum in one step.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Saddle points in loss landscapes',
      blocks: [
        {
          type: 'p',
          text: 'Early neural-network folklore worried that training gets trapped in bad local minima. In very high dimensions the real obstacle is usually different. A critical point is a local minimum only if the Hessian\'s curvature is positive in **every** one of the $n$ eigen-directions. If each direction were a coin flip, a random critical point in a million dimensions would almost never pass that test. Most critical points of high-dimensional losses are [[calc3-saddle-point|saddle points]], and the minima that do exist tend to have similar, low loss.',
        },
        {
          type: 'plot3d',
          x: [-1.6, 1.6],
          y: [-1.2, 1.2],
          z: [-0.3, 1.1],
          surfaces: [{ expr: 'x^4/4 - x^2/2 + y^2/2', color: 'blue', opacity: 0.55, label: '$f = \\frac{x^4}{4} - \\frac{x^2}{2} + \\frac{y^2}{2}$' }],
          contours: [-0.2, -0.1, 0, 0.2, 0.4],
          points: [
            { x: 0, y: 0, z: 0, label: 'saddle', color: 'orange' },
            { x: 1, y: 0, z: -0.25, label: 'min', color: 'green' },
            { x: -1, y: 0, z: -0.25, label: 'min', color: 'green' },
          ],
          view: { azimuth: 250, elevation: 22 },
          caption: 'A toy loss landscape: two minima ($f = -\\frac{1}{4}$) separated by a saddle at the origin. The Hessian there is $\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$: downhill along $x$, uphill along $y$.',
        },
        {
          type: 'p',
          text: 'Start gradient descent at $(0.00001, 1)$, almost exactly on the ridge line $x = 0$, with $\\eta = 0.1$. The $y$-coordinate shrinks by $10\\%$ each step and the path heads straight for the saddle. Near the saddle the gradient is nearly zero, so progress stalls. Meanwhile the tiny $x$-coordinate grows by about $10\\%$ per step, because $f_{xx} = -1 < 0$ there: the saddle is unstable in the $x$-direction. Eventually $x$ is large enough to matter, and the path slides off into a minimum.',
        },
        {
          type: 'graph',
          x: [-0.3, 1.3],
          y: [-0.15, 1.15],
          implicit: [{ expr: 'x^4/4 - x^2/2 + y^2/2', levels: [-0.2, -0.1, 0, 0.1, 0.25, 0.45], label: 'contours of $f$', color: 'purple' }],
          segments: polyline(SADDLE_PATH, 'red'),
          points: [
            { x: 0, y: 1, label: 'start', color: 'red' },
            { x: 0, y: 0, label: 'saddle', color: 'orange' },
            { x: 1, y: 0, label: 'min', color: 'green' },
          ],
          caption: 'The descent path (red): straight down to the saddle, a long stall, then a turn toward the minimum at $(1, 0)$.',
        },
        {
          type: 'graph',
          x: [0, 160],
          y: [-0.3, 0.55],
          segments: polyline(SADDLE_LOSS.map((L, i): [number, number] => [2 * i, L]), 'blue'),
          hlines: [
            { y: 0, label: 'saddle value 0' },
            { y: -0.25, label: 'minimum −0.25', color: 'green' },
          ],
          caption: 'Loss against step number for the same run. It falls fast, then sits on a **plateau** at the saddle value $0$ for roughly $60$ steps (steps $30$ to $90$) while the gradient is tiny, then drops to the minimum. Long plateaus in a training curve are often saddles, not minima.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Why noise helps',
          text: 'Exactly on the ridge ($x = 0$), plain gradient descent would never leave the saddle: $f_x = 0$ there forever. The random noise of **stochastic** gradients, and momentum carrying the iterate past flat spots, push it off the ridge so the negative-curvature direction can take over. Newton\'s method, by contrast, is attracted to the saddle. That is one more reason first-order methods dominate deep learning.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'truefalse',
      prompt: 'Pure Newton\'s method $\\vec{x}_{k+1} = \\vec{x}_k - H^{-1}\\nabla f(\\vec{x}_k)$ always moves toward a local minimum of $f$.',
      answer: false,
      explanation: 'Newton\'s method is a root finder for $\\nabla f = \\vec{0}$, and it cannot tell minima, maxima and saddles apart: it jumps to the critical point of the local quadratic model, whatever kind it is. When $H$ is not positive definite, the Newton step can point uphill. On $\\frac{x^4}{4} - \\frac{x^2}{2} + \\frac{y^2}{2}$ it converges onto the saddle at the origin from $(0.1, 1)$. Practical versions check the curvature or modify $H$ to keep it positive definite.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'A tiny optimizer in C++',
      blocks: [
        {
          type: 'p',
          text: 'Time to race the three methods. The test track is **Rosenbrock\'s banana function** $f(x, y) = (1 - x)^2 + 100(y - x^2)^2$: a long, curved, narrow valley with its minimum $f = 0$ at $(1, 1)$. It is the classic benchmark because it punishes exactly the weakness of plain gradient descent: high condition number along a curved path. Each method starts at $(-1.2, 1)$ and stops when $|\\nabla f| < 10^{-6}$.',
        },
        {
          type: 'code',
          title: 'optimizers.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

struct Vec2 {
    double x, y;
};
Vec2 operator+(Vec2 a, Vec2 b) { return {a.x + b.x, a.y + b.y}; }
Vec2 operator-(Vec2 a, Vec2 b) { return {a.x - b.x, a.y - b.y}; }
Vec2 operator*(double k, Vec2 a) { return {k * a.x, k * a.y}; }
double norm(Vec2 a) { return std::hypot(a.x, a.y); }

// Rosenbrock's banana function: a long curved valley, minimum f = 0 at (1, 1).
double f(Vec2 p) { return (1 - p.x) * (1 - p.x) + 100 * (p.y - p.x * p.x) * (p.y - p.x * p.x); }
Vec2 grad(Vec2 p) {
    return {-2 * (1 - p.x) - 400 * p.x * (p.y - p.x * p.x), 200 * (p.y - p.x * p.x)};
}

void report(const char* name, int iters, Vec2 p) {
    std::printf("%-9s %6d steps  ->  (%.4f, %.4f)  f = %.8f\\n", name, iters, p.x, p.y, f(p));
}

int main() {
    const Vec2 start{-1.2, 1.0};
    const double tol = 1e-6;   // stop when |grad f| < tol
    const int maxIters = 200000;

    // 1. Plain gradient descent.
    Vec2 p = start;
    int k = 0;
    for (; k < maxIters && norm(grad(p)) > tol; ++k) p = p - 0.001 * grad(p);
    report("GD", k, p);

    // 2. Momentum (heavy ball): velocity remembers past gradients.
    p = start;
    Vec2 v{0, 0};
    for (k = 0; k < maxIters && norm(grad(p)) > tol; ++k) {
        v = 0.9 * v + grad(p);
        p = p - 0.001 * v;
    }
    report("Momentum", k, p);

    // 3. Newton: solve H * step = grad with the 2x2 Hessian.
    p = start;
    for (k = 0; k < maxIters && norm(grad(p)) > tol; ++k) {
        const double hxx = 2 - 400 * (p.y - 3 * p.x * p.x), hxy = -400 * p.x, hyy = 200;
        const double det = hxx * hyy - hxy * hxy;
        const Vec2 g = grad(p);
        const Vec2 step{(hyy * g.x - hxy * g.y) / det, (hxx * g.y - hxy * g.x) / det};
        p = p - step;
    }
    report("Newton", k, p);
}`,
          output: `GD         32076 steps  ->  (1.0000, 1.0000)  f = 0.00000000
Momentum    3020 steps  ->  (1.0000, 1.0000)  f = 0.00000000
Newton         6 steps  ->  (1.0000, 1.0000)  f = 0.00000000`,
          annotations: [
            { lines: '14-16', text: 'The gradient by hand: $f_x = -2(1 - x) - 400x(y - x^2)$ and $f_y = 200(y - x^2)$.' },
            { lines: 30, text: 'Plain descent with $\\eta = 0.001$. There is little room to raise it: near the minimum the steepest curvature is about $1000$, so the stability limit $\\frac{2}{\\lambda_{\\max}}$ is about $0.002$, and at $\\eta = 0.002$ the run no longer converges.' },
            { lines: '37-38', text: 'Same $\\eta$, plus a velocity with $\\beta = 0.9$. Along the valley floor the steps add up to about $\\frac{1}{1 - 0.9} = 10$ times larger, so momentum needs about a tenth of the steps.' },
            { lines: '45-49', text: 'The Hessian $\\begin{bmatrix} 2 - 400(y - 3x^2) & -400x \\\\ -400x & 200 \\end{bmatrix}$, and the $2 \\times 2$ solve $H\\vec{p} = \\nabla f$ by Cramer\'s rule.' },
          ],
        },
        {
          type: 'table',
          headers: ['method', 'steps', 'cost per step', 'notes'],
          rows: [
            ['gradient descent', '$32\\,076$', 'one gradient', 'simple, but slow in narrow valleys'],
            ['momentum', '$3\\,020$', 'one gradient', 'same cost per step, about $10\\times$ fewer steps'],
            ['Newton', '$6$', 'gradient + Hessian + linear solve', 'quadratic convergence; impractical for huge $n$; attracted to saddles'],
          ],
          caption: 'Same start, same stopping rule. Real optimizers such as Adam add per-parameter step sizes on top of momentum.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the body of a gradient-descent training loop in order (one iteration).',
      lines: [
        'Evaluate the loss $f(\\vec{x}_k)$ at the current parameters and its gradient $\\nabla f(\\vec{x}_k)$',
        'Check the stopping rule: quit if $|\\nabla f(\\vec{x}_k)|$ is below the tolerance',
        'Update the parameters: $\\vec{x}_{k+1} = \\vec{x}_k - \\eta\\nabla f(\\vec{x}_k)$',
        'Increase $k$ by one and repeat',
      ],
      distractors: ['Add $\\eta\\nabla f(\\vec{x}_k)$ to the parameters'],
      explanation: 'You need the gradient before you can test it or step with it; the stopping test comes before the update so you do not take a pointless step at a minimum; then you move against the gradient and loop. The distractor adds the gradient, which is gradient **ascent**: it climbs the loss.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Complete the update rules.',
      template: 'Gradient descent: $\\vec{x}_{k+1} = \\vec{x}_k -$ ___. Momentum keeps a velocity $\\vec{v}_{k+1} =$ ___ $+ \\nabla f(\\vec{x}_k)$. Newton\'s method: $\\vec{x}_{k+1} = \\vec{x}_k -$ ___ $\\nabla f(\\vec{x}_k)$.',
      blanks: [{ answers: ['$\\eta\\nabla f(\\vec{x}_k)$'] }, { answers: ['$\\beta\\vec{v}_k$'] }, { answers: ['$H^{-1}$'] }],
      wordBank: ['$\\eta\\nabla f(\\vec{x}_k)$', '$\\beta\\vec{v}_k$', '$H^{-1}$', '$H$', '$\\eta\\vec{x}_k$', '$\\vec{v}_k^2$'],
      explanation: 'Gradient descent steps a distance proportional to the gradient, scaled by the learning rate $\\eta$. Momentum carries over a fraction $\\beta$ of the previous velocity before adding the new gradient. Newton rescales the gradient by the inverse Hessian, taking big steps where curvature is small and small steps where it is large.',
    },
  ],
  takeaways: [
    'Gradient descent, $\\vec{x}_{k+1} = \\vec{x}_k - \\eta\\nabla f(\\vec{x}_k)$, needs only gradients, so it scales to millions of parameters.',
    'On a quadratic, descent is stable only for $\\eta < \\frac{2}{\\lambda_{\\max}}$; the condition number $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}}$ sets how slow it is, and too large an $\\eta$ makes the iterates oscillate and diverge.',
    'Momentum accumulates a velocity: it accelerates along consistent directions and cancels zigzags.',
    'Newton\'s method $\\vec{x}_{k+1} = \\vec{x}_k - H^{-1}\\nabla f$ uses curvature, converges quadratically and solves quadratics in one step, but costs a linear solve per step and is attracted to saddles.',
    'In high dimensions most critical points are saddles. They show up as plateaus in the loss curve, and noise and momentum help descent escape them.',
  ],
  reading: [
    {
      title: 'Wikipedia: Gradient descent',
      url: 'https://en.wikipedia.org/wiki/Gradient_descent',
      source: 'wikipedia',
      note: 'Convergence conditions, step-size choices and the momentum variant, with pictures of zigzagging paths.',
    },
    {
      title: "Wikipedia: Newton's method in optimization",
      url: 'https://en.wikipedia.org/wiki/Newton%27s_method_in_optimization',
      source: 'wikipedia',
      note: 'The Newton step from the quadratic model, its convergence, and the quasi-Newton methods that approximate the Hessian.',
    },
    {
      title: 'MIT OCW 18.02SC: Multivariable Calculus',
      url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
      source: 'other',
      note: 'Free lecture videos and problem sets; the partial-derivatives unit covers gradients, critical points and the second derivative test that this lesson builds on.',
    },
    {
      title: '3Blue1Brown: Gradient descent, how neural networks learn',
      url: 'https://www.3blue1brown.com/',
      source: 'other',
      note: 'The neural-networks series animates a loss landscape and gradient descent on it.',
    },
  ],
};
