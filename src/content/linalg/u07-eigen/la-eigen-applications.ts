import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-eigen-applications',
  title: 'Dynamical Systems and Markov Chains',
  summary: 'Predict where a repeated linear update ends up: attractors and saddles, Fibonacci and the golden ratio, Markov chains, PageRank, and why some physics integrators explode.',
  minutes: 20,
  objectives: [
    'Solve $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$ by writing $\\mathbf{x}_0$ in an eigenvector basis',
    'Classify the origin as an attractor, repeller or saddle point from the eigenvalues',
    'Derive the closed form of the Fibonacci numbers and explain why $F_{k+1}/F_k \\to \\varphi$',
    'Find the steady-state vector of a Markov chain as an eigenvector for $\\lambda = 1$, and explain PageRank as one',
    'Use eigenvalue magnitudes to judge whether a physics integrator or population model grows, decays or stays stable',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Repeated updates: $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$',
      blocks: [
        {
          type: 'p',
          text: 'A [[discrete-dynamical-system]] is a state vector updated in steps by a fixed rule. In the linear case the rule is a matrix: $\\mathbf{x}_1 = A\\mathbf{x}_0$, $\\mathbf{x}_2 = A\\mathbf{x}_1$, and so on, so $\\mathbf{x}_k = A^k\\mathbf{x}_0$. Game ticks, generations of a population and turns of a board game all fit this pattern.',
        },
        {
          type: 'p',
          text: 'The question is always *what happens in the long run?* Eigenvectors answer it. If $\\mathbf{x}_0 = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2$ with $A\\mathbf{v}_i = \\lambda_i\\mathbf{v}_i$, then by linearity each step just multiplies each piece by its own eigenvalue:',
        },
        {
          type: 'math',
          tex: '\\mathbf{x}_k = A^k(c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2) = c_1\\lambda_1^{\\,k}\\,\\mathbf{v}_1 + c_2\\lambda_2^{\\,k}\\,\\mathbf{v}_2',
          caption: 'The same formula works in $\\mathbb{R}^n$ whenever $A$ has an eigenvector basis: it is diagonalization written out.',
        },
        {
          type: 'derivation',
          title: 'Two map zones swap 25% of their players every tick. Start: $\\mathbf{x}_0 = \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}$ (hundreds of players in zones 1 and 2). Where do things settle?',
          steps: [
            { tex: 'A = \\begin{bmatrix} 0.75 & 0.25 \\\\ 0.25 & 0.75 \\end{bmatrix}', why: 'Zone 1 keeps $75\\%$ of its players and receives $25\\%$ of zone 2\'s; likewise for zone 2.' },
            { tex: '\\lambda_1 = 1,\\ \\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}; \\qquad \\lambda_2 = 0.5,\\ \\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}', why: 'Check: $A\\mathbf{v}_1 = (1, 1)$ and $A\\mathbf{v}_2 = (0.5, -0.5)$. (Trace $1.5 = 1 + 0.5$, determinant $0.5 = 1 \\cdot 0.5$.)' },
            { tex: '\\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix} = c_1\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + c_2\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} \\implies c_1 = 2,\\ c_2 = 1', why: 'Solve $c_1 + c_2 = 3$, $c_1 - c_2 = 1$: add the equations to get $2c_1 = 4$.' },
            { tex: '\\mathbf{x}_k = 2(1)^k\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + (0.5)^k\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}', why: 'Apply the eigenvector formula: each piece gets its own eigenvalue to the $k$th power.' },
            { tex: '\\mathbf{x}_k \\to \\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix} \\text{ as } k \\to \\infty', why: '$(0.5)^k \\to 0$, so the $\\mathbf{v}_2$ part dies out; the $\\lambda = 1$ part never changes.' },
          ],
          result: 'The zones even out at $200$ players each. The imbalance (the $\\mathbf{v}_2$ component) halves every tick, while the total, carried by $\\mathbf{v}_1$, is conserved.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the biggest eigenvalue wins',
          text: 'In $c_1\\lambda_1^k\\mathbf{v}_1 + c_2\\lambda_2^k\\mathbf{v}_2$, the ratio of the two pieces is proportional to $(\\lambda_2/\\lambda_1)^k$. If $|\\lambda_1| > |\\lambda_2|$, that ratio goes to $0$, so for large $k$ the state points along $\\mathbf{v}_1$ (as long as $c_1 \\ne 0$). The *dominant* eigenvalue sets the long-run growth rate and its eigenvector sets the long-run shape.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'For the two-zone system on the card, $\\mathbf{x}_k = 2\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + (0.5)^k\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$. What is the first entry of $\\mathbf{x}_3$ (players in zone 1, in hundreds)?',
      hint: '$(0.5)^3 = 0.125$.',
      label: 'first entry $=$',
      answer: '17/8',
      answerTex: '2.125',
      explanation: '$\\mathbf{x}_3 = (2, 2) + 0.125(1, -1) = (2.125,\\ 1.875)$. You can confirm by stepping: $\\mathbf{x}_1 = (2.5, 1.5)$, $\\mathbf{x}_2 = (2.25, 1.75)$, $\\mathbf{x}_3 = (2.125, 1.875)$. The gap between the zones halves every tick: $2, 1, 0.5, 0.25$.',
    },
    {
      kind: 'concept',
      title: 'Attractors, repellers and saddle points',
      blocks: [
        {
          type: 'p',
          text: 'For a $2 \\times 2$ matrix with eigenvalues $\\lambda_1, \\lambda_2$ and an eigenvector basis, the picture near the origin depends only on whether each $|\\lambda_i|$ is below or above $1$. Below, $\\mathbf{v}_1 = (1, 1)$ has eigenvalue $p$ and $\\mathbf{v}_2 = (-1, 1)$ has eigenvalue $q$. Each curve is a trajectory; the dots on one of them are the actual states $\\mathbf{x}_0, \\mathbf{x}_1, \\dots, \\mathbf{x}_6$.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-6, 6],
          equal: true,
          functions: [
            { expr: 'x', color: 'gray', dashed: true, label: '$\\mathbf{v}_1$ line (eigenvalue $p$)' },
            { expr: '-x', color: 'teal', dashed: true, label: '$\\mathbf{v}_2$ line (eigenvalue $q$)' },
          ],
          parametric: [
            { x: '0.3p^t - 3q^t', y: '0.3p^t + 3q^t', t: [0, 40], color: 'blue' },
            { x: '-0.3p^t - 3q^t', y: '-0.3p^t + 3q^t', t: [0, 40], color: 'blue' },
            { x: '0.3p^t + 3q^t', y: '0.3p^t - 3q^t', t: [0, 40], color: 'blue' },
            { x: '-0.3p^t + 3q^t', y: '-0.3p^t - 3q^t', t: [0, 40], color: 'blue' },
            { x: '3p^t - q^t', y: '3p^t + q^t', t: [0, 40], color: 'purple' },
            { x: '-3p^t + q^t', y: '-3p^t - q^t', t: [0, 40], color: 'purple' },
          ],
          points: [
            { x: '0.3 - 3', y: '0.3 + 3', label: 'x0', color: 'red' },
            { x: '0.3p - 3q', y: '0.3p + 3q', color: 'red' },
            { x: '0.3p^2 - 3q^2', y: '0.3p^2 + 3q^2', color: 'red' },
            { x: '0.3p^3 - 3q^3', y: '0.3p^3 + 3q^3', color: 'red' },
            { x: '0.3p^4 - 3q^4', y: '0.3p^4 + 3q^4', color: 'red' },
            { x: '0.3p^5 - 3q^5', y: '0.3p^5 + 3q^5', color: 'red' },
            { x: '0.3p^6 - 3q^6', y: '0.3p^6 + 3q^6', color: 'red' },
          ],
          sliders: [
            { name: 'p', min: 0.3, max: 1.6, step: 0.05, value: 0.8, label: 'eigenvalue $p$ along $\\mathbf{v}_1$' },
            { name: 'q', min: 0.3, max: 1.6, step: 0.05, value: 0.5, label: 'eigenvalue $q$ along $\\mathbf{v}_2$' },
          ],
          caption: 'Start with $p = 0.8$, $q = 0.5$: everything collapses into the origin, arriving along the $\\mathbf{v}_1$ line (the slower decay). Now set $p = 1.3$, $q = 0.5$: trajectories come in along $\\mathbf{v}_2$ and are flung out along $\\mathbf{v}_1$. Finally make both bigger than $1$.',
        },
        {
          type: 'table',
          headers: ['eigenvalues', 'origin is a…', 'long-run behaviour'],
          rows: [
            ['$|\\lambda_1| < 1$ and $|\\lambda_2| < 1$', '[[attractor]]', 'every trajectory tends to $\\mathbf{0}$'],
            ['$|\\lambda_1| > 1$ and $|\\lambda_2| > 1$', '[[repeller]]', 'every nonzero trajectory runs off to infinity'],
            ['one $|\\lambda| < 1$, one $|\\lambda| > 1$', '[[saddle-point]]', 'pulled in along one eigenvector, pushed out along the other'],
          ],
        },
        {
          type: 'p',
          text: 'A **negative** eigenvalue flips the sign of its component every step, so the dots hop from one side of the eigenvector line to the other while still shrinking or growing by $|\\lambda|$. **Complex** eigenvalues $\\lambda = a \\pm bi$ make the trajectory rotate: it spirals inward if $|\\lambda| < 1$, outward if $|\\lambda| > 1$, and stays on a closed loop (an ellipse) if $|\\lambda| = 1$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Saddle points fool simulations',
          text: 'At a saddle, a trajectory that starts *exactly* on the attracting eigenvector converges to $\\mathbf{0}$. But floating-point rounding almost always adds a tiny component along the repelling eigenvector, and that component grows like $|\\lambda|^k$. In code, "converges in theory" at a saddle usually means "diverges in practice".',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A $2 \\times 2$ system $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$ has eigenvalues $1.3$ (eigenvector $\\mathbf{v}_1$) and $0.6$ (eigenvector $\\mathbf{v}_2$). A typical starting point has nonzero components along both. What happens?',
      options: [
        {
          text: 'The origin is an attractor: the state tends to $\\mathbf{0}$',
          why: 'That needs **both** $|\\lambda| < 1$. Here $1.3 > 1$, so the $\\mathbf{v}_1$ component grows.',
        },
        {
          text: 'The origin is a saddle: the state eventually grows along $\\mathbf{v}_1$',
          correct: true,
          why: 'The $\\mathbf{v}_2$ part shrinks like $0.6^k$ while the $\\mathbf{v}_1$ part grows like $1.3^k$, so $\\mathbf{x}_k$ ends up pointing along $\\mathbf{v}_1$ and growing.',
        },
        {
          text: 'The origin is a repeller: the state grows along $\\mathbf{v}_2$',
          why: 'A repeller needs both $|\\lambda| > 1$; and the $\\mathbf{v}_2$ component, with $|\\lambda| = 0.6$, shrinks rather than grows.',
        },
        {
          text: 'The state settles at a nonzero fixed vector',
          why: 'A nonzero limit needs an eigenvalue exactly $1$ (as in the two-zone example). With $1.3$ and $0.6$, nothing stays put.',
        },
      ],
      explanation: '$\\mathbf{x}_k = c_1(1.3)^k\\mathbf{v}_1 + c_2(0.6)^k\\mathbf{v}_2$. One eigenvalue above $1$ and one below makes the origin a saddle: trajectories approach along the line of $\\mathbf{v}_2$ and leave along the line of $\\mathbf{v}_1$, growing by about $30\\%$ per step.',
    },
    {
      kind: 'concept',
      title: 'Fibonacci numbers and the golden ratio',
      blocks: [
        {
          type: 'p',
          text: 'The Fibonacci numbers $0, 1, 1, 2, 3, 5, 8, 13, \\dots$ follow $F_{k+1} = F_k + F_{k-1}$. That is a [[recursive-formula]] on numbers, but packing two consecutive terms into a vector makes it a linear dynamical system:',
        },
        {
          type: 'math',
          tex: '\\mathbf{x}_k = \\begin{bmatrix} F_{k+1} \\\\ F_k \\end{bmatrix}, \\qquad \\mathbf{x}_{k+1} = \\begin{bmatrix} F_{k+1} + F_k \\\\ F_{k+1} \\end{bmatrix} = \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}\\mathbf{x}_k, \\qquad \\mathbf{x}_0 = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}',
        },
        {
          type: 'derivation',
          title: 'A closed formula for $F_k$',
          steps: [
            { tex: '\\det(A - \\lambda I) = (1 - \\lambda)(-\\lambda) - 1 = \\lambda^2 - \\lambda - 1', why: 'Characteristic polynomial of $A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}$.' },
            { tex: '\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618, \\qquad \\psi = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618', why: 'Quadratic formula. $\\varphi$ is the **golden ratio**. Note $\\varphi + \\psi = 1 = \\operatorname{tr} A$ and $\\varphi\\psi = -1 = \\det A$.' },
            { tex: '\\mathbf{v}_\\varphi = \\begin{bmatrix} \\varphi \\\\ 1 \\end{bmatrix}, \\qquad \\mathbf{v}_\\psi = \\begin{bmatrix} \\psi \\\\ 1 \\end{bmatrix}', why: 'For any root $\\lambda$: $A(\\lambda, 1) = (\\lambda + 1, \\lambda)$, and $\\lambda + 1 = \\lambda^2$ by the characteristic equation, so this equals $\\lambda(\\lambda, 1)$.' },
            { tex: '\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\tfrac{1}{\\sqrt{5}}\\left(\\mathbf{v}_\\varphi - \\mathbf{v}_\\psi\\right)', why: 'The second entries cancel ($1 - 1 = 0$) and the first gives $\\frac{\\varphi - \\psi}{\\sqrt{5}} = \\frac{\\sqrt{5}}{\\sqrt{5}} = 1$.' },
            { tex: '\\mathbf{x}_k = \\tfrac{1}{\\sqrt{5}}\\left(\\varphi^k\\mathbf{v}_\\varphi - \\psi^k\\mathbf{v}_\\psi\\right)', why: 'Eigenvector formula: multiply each component by its eigenvalue $k$ times.' },
            { tex: 'F_k = \\frac{\\varphi^k - \\psi^k}{\\sqrt{5}}', why: '$F_k$ is the second entry of $\\mathbf{x}_k$, and both eigenvectors have second entry $1$.' },
          ],
          result: 'Binet\'s formula. Check $k = 2$: $\\frac{\\varphi^2 - \\psi^2}{\\sqrt{5}} = \\frac{(\\varphi - \\psi)(\\varphi + \\psi)}{\\sqrt{5}} = \\frac{\\sqrt{5} \\cdot 1}{\\sqrt{5}} = 1 = F_2$. ✓',
        },
        {
          type: 'p',
          text: 'This system is a saddle: $|\\varphi| > 1$ and $|\\psi| < 1$. Since $|\\psi^k/\\sqrt{5}| < \\frac{1}{2}$ for all $k \\ge 0$, $F_k$ is simply $\\frac{\\varphi^k}{\\sqrt{5}}$ rounded to the nearest integer, and the ratio of consecutive terms tends to the dominant eigenvalue: $F_{k+1}/F_k \\to \\varphi$. For example $\\frac{89}{55} \\approx 1.61818$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Computing $F_k$ in code',
          text: 'Binet\'s formula in `double` goes wrong around $F_{71}$, because $\\varphi^k$ has more digits than a double holds. The exact method is the matrix form: compute $\\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}^k$ with integers by repeated squaring, which needs only about $\\log_2 k$ matrix products. The same "linear recurrence = matrix power" trick evaluates any linear recurrence quickly, a favourite in competitive programming.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'The formula is named after Jacques Binet, who published it in 1843, but Abraham de Moivre and Daniel Bernoulli knew it more than a century earlier. The eigenvector derivation above is the modern way to discover it rather than verify it.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'What is the dominant (largest) eigenvalue of $\\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}$? Give an exact value or at least 3 decimal places.',
      hint: 'Solve $\\lambda^2 - \\lambda - 1 = 0$ with the quadratic formula.',
      label: '$\\lambda =$',
      answer: '(1 + sqrt(5))/2',
      answerTex: '\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618',
      minDecimals: 3,
      explanation: '$\\det(A - \\lambda I) = \\lambda^2 - \\lambda - 1$, so $\\lambda = \\frac{1 \\pm \\sqrt{1 + 4}}{2} = \\frac{1 \\pm \\sqrt{5}}{2}$. The larger root is the golden ratio $\\varphi \\approx 1.6180$. It is the limit of $F_{k+1}/F_k$ because the other eigenvalue, $\\psi \\approx -0.618$, has $|\\psi| < 1$ and its contribution dies out.',
    },
    {
      kind: 'truefalse',
      prompt: 'Since $\\psi \\approx -0.618$ is negative, Binet\'s formula $F_k = \\frac{\\varphi^k - \\psi^k}{\\sqrt{5}}$ shows that the Fibonacci numbers eventually alternate in sign.',
      answer: false,
      explanation: 'The $\\psi^k$ term does alternate in sign, but its size $|\\psi|^k$ shrinks toward $0$ while $\\varphi^k$ grows. It only nudges $\\frac{\\varphi^k}{\\sqrt{5}}$ slightly up or down to land exactly on an integer (always by less than $\\frac{1}{2}$). The dominant eigenvalue $\\varphi > 0$ decides the sign: every $F_k$ with $k \\ge 1$ is positive.',
    },
    {
      kind: 'concept',
      title: 'Markov chains and the steady-state vector',
      blocks: [
        {
          type: 'p',
          text: 'A guard NPC is either on **Patrol** or **Alert**. Each tick, a patrolling guard stays on patrol with probability $0.9$ and becomes alert with probability $0.1$; an alert guard calms down with probability $0.5$ and stays alert with probability $0.5$. If $\\mathbf{x}_k$ holds the probabilities of being in each state at tick $k$, then $\\mathbf{x}_{k+1} = P\\mathbf{x}_k$ with',
        },
        {
          type: 'math',
          tex: 'P = \\begin{bmatrix} 0.9 & 0.5 \\\\ 0.1 & 0.5 \\end{bmatrix} \\quad \\begin{matrix} \\leftarrow \\text{to Patrol} \\\\ \\leftarrow \\text{to Alert} \\end{matrix}',
          caption: 'Column $j$ lists the probabilities of moving *from* state $j$; row $i$ is the state moved *to*. Each column sums to $1$.',
        },
        {
          type: 'definition',
          term: 'Markov chain vocabulary',
          text: 'A [[probability-vector]] has nonnegative entries adding to $1$. A [[stochastic-matrix]] is a square matrix whose columns are probability vectors. A [[markov-chain]] is a sequence of probability vectors with $\\mathbf{x}_{k+1} = P\\mathbf{x}_k$. A [[steady-state-vector]] is a probability vector $\\mathbf{q}$ with $P\\mathbf{q} = \\mathbf{q}$: an eigenvector for the eigenvalue $1$, scaled so its entries add to $1$.',
        },
        {
          type: 'derivation',
          title: 'Steady state of the guard',
          steps: [
            { tex: '(P - I)\\mathbf{q} = \\mathbf{0}, \\quad P - I = \\begin{bmatrix} -0.1 & 0.5 \\\\ 0.1 & -0.5 \\end{bmatrix}', why: '$P\\mathbf{q} = \\mathbf{q}$ is the eigenvector equation for $\\lambda = 1$.' },
            { tex: '\\sim \\begin{bmatrix} -0.1 & 0.5 \\\\ 0 & 0 \\end{bmatrix} \\implies q_1 = 5q_2', why: 'Add row 1 to row 2. Then $-0.1q_1 + 0.5q_2 = 0$.' },
            { tex: '\\mathbf{q} = t\\begin{bmatrix} 5 \\\\ 1 \\end{bmatrix}', why: 'The eigenspace for $\\lambda = 1$ is a line.' },
            { tex: '\\mathbf{q} = \\frac{1}{6}\\begin{bmatrix} 5 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 5/6 \\\\ 1/6 \\end{bmatrix}', why: 'Pick the one vector on that line that is a probability vector: divide by the sum of the entries, $5 + 1 = 6$.' },
          ],
          result: 'In the long run the guard is on patrol $\\frac{5}{6} \\approx 83\\%$ of the time and alert $\\frac{1}{6} \\approx 17\\%$ of the time.',
        },
        {
          type: 'graph',
          x: [-0.5, 10],
          y: [-0.05, 1.05],
          functions: [{ expr: '5/6 + (a - 5/6)(0.4)^x', domain: [0, 10], color: 'blue', label: 'probability of Patrol' }],
          points: [
            { x: 0, y: 'a', color: 'blue' },
            { x: 1, y: '5/6 + (a - 5/6)(0.4)', color: 'blue' },
            { x: 2, y: '5/6 + (a - 5/6)(0.4)^2', color: 'blue' },
            { x: 3, y: '5/6 + (a - 5/6)(0.4)^3', color: 'blue' },
            { x: 4, y: '5/6 + (a - 5/6)(0.4)^4', color: 'blue' },
            { x: 5, y: '5/6 + (a - 5/6)(0.4)^5', color: 'blue' },
          ],
          hlines: [{ y: '5/6', label: 'steady state 5/6', color: 'green' }],
          sliders: [{ name: 'a', min: 0, max: 1, step: 0.01, value: 0, label: 'starting probability of Patrol' }],
          caption: 'Horizontal axis: tick $k$. Wherever the guard starts, the probability of Patrol converges to $\\frac{5}{6}$. The other eigenvalue of $P$ is $\\operatorname{tr} P - 1 = 0.4$, so the distance to the steady state shrinks by a factor $0.4$ every tick.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every stochastic matrix has eigenvalue $1$',
          text: 'Each column of $P$ sums to $1$, which says exactly that $P^{T}\\begin{bmatrix} 1 & \\cdots & 1 \\end{bmatrix}^{T} = \\begin{bmatrix} 1 & \\cdots & 1 \\end{bmatrix}^{T}$. So $1$ is an eigenvalue of $P^{T}$. And $P^{T}$ and $P$ have the same characteristic polynomial, because $\\det(P^{T} - \\lambda I) = \\det\\big((P - \\lambda I)^{T}\\big) = \\det(P - \\lambda I)$. Hence $1$ is an eigenvalue of $P$ too.',
        },
        {
          type: 'theorem',
          name: 'Regular Markov chains converge',
          text: 'If $P$ is a [[regular-stochastic-matrix|regular stochastic matrix]] (some power $P^k$ has all entries positive), then $P$ has a unique steady-state vector $\\mathbf{q}$, and $\\mathbf{x}_k \\to \\mathbf{q}$ for **every** starting probability vector $\\mathbf{x}_0$. (All other eigenvalues satisfy $|\\lambda| < 1$, so their components die out; we use this without proof.)',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Find the steady-state vector of the Markov chain with $P = \\begin{bmatrix} 0.7 & 0.2 \\\\ 0.3 & 0.8 \\end{bmatrix}$.',
      hint: 'Solve $(P - I)\\mathbf{q} = \\mathbf{0}$, then scale so the entries add to $1$.',
      template: '$\\mathbf{q} = ($ ___ $,$ ___ $)$ (as a column vector)',
      blanks: [{ answers: ['0.4'] }, { answers: ['0.6'] }],
      explanation: '$P - I = \\begin{bmatrix} -0.3 & 0.2 \\\\ 0.3 & -0.2 \\end{bmatrix}$ gives $0.3q_1 = 0.2q_2$, so $q_2 = 1.5q_1$ and the eigenspace is spanned by $(2, 3)$. Dividing by $2 + 3 = 5$ gives $\\mathbf{q} = (0.4, 0.6)$. Check: $P\\mathbf{q} = (0.28 + 0.12,\\ 0.12 + 0.48) = (0.4, 0.6)$. ✓',
    },
    {
      kind: 'error',
      prompt: 'A student finds the steady state of $P = \\begin{bmatrix} 0.6 & 0.3 \\\\ 0.4 & 0.7 \\end{bmatrix}$. Tap the first line that is wrong.',
      lines: [
        'The steady state satisfies $P\\mathbf{q} = \\mathbf{q}$, i.e. $(P - I)\\mathbf{q} = \\mathbf{0}$.',
        '$P - I = \\begin{bmatrix} -0.4 & 0.3 \\\\ 0.4 & -0.3 \\end{bmatrix}$',
        'So $-0.4q_1 + 0.3q_2 = 0$, which gives $q_2 = \\frac{4}{3}q_1$.',
        'Taking $q_1 = 3$: the steady-state vector is $\\mathbf{q} = (3, 4)$.',
      ],
      errorLines: [4],
      explanation: '$(3, 4)$ is an eigenvector for $\\lambda = 1$, but a steady-state vector must also be a **probability vector**: entries adding to $1$. Divide by $3 + 4 = 7$: $\\mathbf{q} = \\left(\\frac{3}{7}, \\frac{4}{7}\\right) \\approx (0.429, 0.571)$. Lines 1–3 are correct.',
    },
    {
      kind: 'concept',
      title: 'PageRank: the web as a Markov chain',
      blocks: [
        {
          type: 'p',
          text: 'Google\'s original idea: imagine a surfer who keeps clicking a random link on the current page. A page is important if the surfer spends a lot of time on it in the long run. That long-run fraction of time is the steady-state vector of a Markov chain, and it is called [[pagerank]].',
        },
        {
          type: 'p',
          text: 'Build the link matrix $M$: column $j$ splits page $j$\'s vote evenly over the pages it links to. Take a tiny web where page 1 links to pages 2 and 3, page 2 links to page 1, and page 3 links to pages 1 and 2:',
        },
        {
          type: 'derivation',
          title: 'Rank the three pages',
          steps: [
            { tex: 'M = \\begin{bmatrix} 0 & 1 & 1/2 \\\\ 1/2 & 0 & 1/2 \\\\ 1/2 & 0 & 0 \\end{bmatrix}', why: 'Column 1: page 1 sends $\\frac12$ to page 2 and $\\frac12$ to page 3. Column 2: page 2 sends everything to page 1. Column 3: $\\frac12$ each to pages 1 and 2.' },
            { tex: 'M - I \\sim \\begin{bmatrix} 1 & 0 & -2 \\\\ 0 & 1 & -3/2 \\\\ 0 & 0 & 0 \\end{bmatrix}', why: 'Row reduce $M - I$ to find the eigenspace for $\\lambda = 1$.' },
            { tex: '\\mathbf{q} = t\\begin{bmatrix} 2 \\\\ 3/2 \\\\ 1 \\end{bmatrix} = s\\begin{bmatrix} 4 \\\\ 3 \\\\ 2 \\end{bmatrix}', why: '$q_1 = 2q_3$ and $q_2 = \\frac{3}{2}q_3$ with $q_3$ free; scale by $2$ to clear the fraction.' },
            { tex: '\\mathbf{q} = \\tfrac{1}{9}\\begin{bmatrix} 4 \\\\ 3 \\\\ 2 \\end{bmatrix} \\approx \\begin{bmatrix} 0.444 \\\\ 0.333 \\\\ 0.222 \\end{bmatrix}', why: 'Normalize: the entries must add to $1$, so divide by $4 + 3 + 2 = 9$.' },
          ],
          result: 'Page 1 ranks highest: two pages link to it, and one of them (page 2) gives it its entire vote.',
        },
        {
          type: 'p',
          text: 'Real webs have pages with no outgoing links and disconnected clusters, which break regularity. The fix is the **damping factor** $d$ (classically $0.85$): with probability $1 - d$ the surfer jumps to a uniformly random page. The Google matrix $G = dM + \\frac{1 - d}{n}J$ ($J$ is the all-ones matrix) has all entries positive, so it is regular and has a unique steady state. It is computed by the **power method**: apply $G$ over and over to any probability vector.',
        },
        {
          type: 'code',
          title: 'pagerank.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdio>

int main() {
    // Column j holds page j's vote, split evenly over its outgoing links.
    // Page 1 -> 2, 3    Page 2 -> 1    Page 3 -> 1, 2
    const std::array<std::array<double, 3>, 3> M = {{
        {0.0, 1.0, 0.5},
        {0.5, 0.0, 0.5},
        {0.5, 0.0, 0.0},
    }};
    const double d = 0.85;  // damping factor
    std::array<double, 3> x = {1.0 / 3, 1.0 / 3, 1.0 / 3};

    for (int iter = 1; iter <= 50; ++iter) {  // power method: x <- Gx
        std::array<double, 3> next{};
        for (int i = 0; i < 3; ++i) {
            next[i] = (1.0 - d) / 3.0;  // random jump to any page
            for (int j = 0; j < 3; ++j) next[i] += d * M[i][j] * x[j];
        }
        x = next;
        if (iter == 1 || iter == 5 || iter == 50)
            std::printf("iter %2d: %.4f %.4f %.4f\\n", iter, x[0], x[1], x[2]);
    }
}`,
          output: `iter  1: 0.4750 0.3333 0.1917
iter  5: 0.4341 0.3333 0.2325
iter 50: 0.4327 0.3333 0.2339`,
          annotations: [
            { lines: '7-11', text: 'The link matrix $M$ from the derivation (pages are numbered from 0 in the arrays).' },
            { lines: 13, text: 'Start from the uniform probability vector; any probability vector works for a regular chain.' },
            { lines: '18-19', text: 'Computes $G\\mathbf{x} = dM\\mathbf{x} + \\frac{1-d}{n}(\\text{sum of } \\mathbf{x})$ without ever building $G$; the sum of $\\mathbf{x}$ is $1$.' },
          ],
        },
        {
          type: 'p',
          text: 'With damping, the ranks $(0.433, 0.333, 0.234)$ are pulled slightly toward uniform compared with the undamped $(0.444, 0.333, 0.222)$, but the order is the same. The power method converges because every other eigenvalue of $G$ has $|\\lambda| \\le d < 1$, so the error shrinks at least by a factor $d$ per iteration.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'A different three-page web: page 1 links to pages 2 and 3, page 2 links to page 3, and page 3 links to page 1. Find its PageRank vector **without damping** (the steady state of $M$).',
      hint: 'Columns of $M$: $(0, \\frac12, \\frac12)$, $(0, 0, 1)$, $(1, 0, 0)$. Solve $M\\mathbf{q} = \\mathbf{q}$ row by row, then normalize.',
      template: '$\\mathbf{q} = ($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['0.4'] }, { answers: ['0.2'] }, { answers: ['0.4'] }],
      explanation: '$M = \\begin{bmatrix} 0 & 0 & 1 \\\\ 1/2 & 0 & 0 \\\\ 1/2 & 1 & 0 \\end{bmatrix}$. The equations $M\\mathbf{q} = \\mathbf{q}$ read $q_1 = q_3$, $q_2 = \\frac12 q_1$, $q_3 = \\frac12 q_1 + q_2$. With $q_1 = 2$: $q_2 = 1$, $q_3 = 2$, total $5$, so $\\mathbf{q} = (0.4, 0.2, 0.4)$. Page 3 ties with page 1: it receives all of page 2\'s vote plus half of page 1\'s.',
    },
    {
      kind: 'truefalse',
      prompt: 'For a regular stochastic matrix $P$, the long-run state $\\lim_{k \\to \\infty} \\mathbf{x}_k$ of the Markov chain depends on the starting probability vector $\\mathbf{x}_0$.',
      answer: false,
      explanation: 'For a regular chain the limit is the unique steady-state vector $\\mathbf{q}$, whatever probability vector you start from. In eigenvector terms, $\\mathbf{x}_0 = \\mathbf{q} + (\\text{components for eigenvalues with } |\\lambda| < 1)$, and those other components shrink to $\\mathbf{0}$. (Every probability vector has exactly "one unit" of $\\mathbf{q}$ in it, because $P$ preserves the sum of the entries.) The guard graph shows this: every starting slider value ends at $\\frac{5}{6}$.',
    },
    {
      kind: 'concept',
      title: 'Game physics: why some integrators explode',
      blocks: [
        {
          type: 'p',
          text: 'A spring (or a pendulum near rest) obeys $x\'\' = -\\omega^2 x$. Its true motion is a perfect oscillation: in the $(x, v)$ phase plane it goes round a closed loop forever. A game steps it with a fixed $\\Delta t = h$. Plain [[eulers-method]] updates both from the old values: $x_{k+1} = x_k + h v_k$, $v_{k+1} = v_k - h\\omega^2 x_k$. That is a linear dynamical system, so its fate is decided by eigenvalues.',
        },
        {
          type: 'derivation',
          title: 'Eigenvalues of the explicit Euler step',
          steps: [
            { tex: '\\begin{bmatrix} x_{k+1} \\\\ v_{k+1} \\end{bmatrix} = \\begin{bmatrix} 1 & h \\\\ -\\omega^2 h & 1 \\end{bmatrix}\\begin{bmatrix} x_k \\\\ v_k \\end{bmatrix}', why: 'Write the two update lines as one matrix equation.' },
            { tex: '\\det(A - \\lambda I) = (1 - \\lambda)^2 + \\omega^2 h^2', why: '$ad - bc$ with $bc = -\\omega^2h^2$.' },
            { tex: '(1 - \\lambda)^2 = -\\omega^2h^2 \\implies \\lambda = 1 \\pm i\\,\\omega h', why: 'Take square roots of a negative number: $1 - \\lambda = \\pm i\\omega h$.' },
            { tex: '|\\lambda| = \\sqrt{1 + \\omega^2h^2} > 1', why: 'Modulus of $a + bi$ is $\\sqrt{a^2 + b^2}$. It exceeds $1$ for **every** $h > 0$.' },
          ],
          result: 'Complex eigenvalues with $|\\lambda| > 1$: the simulated spring spirals outward and gains energy every frame, no matter how small the time step.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-4, 4],
          equal: true,
          parametric: [
            { x: 'cos(t)', y: '-sin(t)', t: [0, '2pi'], color: 'green', dashed: true, label: 'exact motion' },
            { x: '(1 + h^2)^(t/2)cos(t*arctan(h))', y: '-(1 + h^2)^(t/2)sin(t*arctan(h))', t: [0, '20/h'], color: 'red', label: 'explicit Euler, 20 s' },
          ],
          sliders: [{ name: 'h', min: 0.01, max: 0.5, step: 0.01, value: 0.1, label: 'time step $h$ ($\\omega = 1$)' }],
          readouts: [
            { label: '$|\\lambda| = \\sqrt{1 + h^2} =$', expr: 'sqrt(1 + h^2)', digits: 5 },
            { label: 'amplitude after 20 s $= |\\lambda|^{20/h} =$', expr: '(1 + h^2)^(10/h)', digits: 3 },
          ],
          caption: 'Phase plane: horizontal $x$, vertical $v$, starting at $(1, 0)$. The exact solution circles forever; explicit Euler spirals outward. Shrinking $h$ slows the blow-up (the amplitude after 20 seconds is about $e^{10h}$) but never removes it.',
        },
        {
          type: 'p',
          text: 'Calculus II introduced the fix most engines use, [[semi-implicit-euler]]: update velocity first, then position with the **new** velocity. Its matrix is $\\begin{bmatrix} 1 - \\omega^2h^2 & h \\\\ -\\omega^2 h & 1 \\end{bmatrix}$, whose determinant is exactly $1$. When $\\omega h < 2$ its eigenvalues are complex conjugates, and complex conjugates with product $1$ both have $|\\lambda| = 1$: the orbit neither grows nor decays. Now you know *why* that one-line swap works.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The stability rule of thumb',
          text: 'Write one step of your integrator, linearized around the rest state, as $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$. If any eigenvalue has $|\\lambda| > 1$, errors grow exponentially and the simulation will eventually explode; $|\\lambda| < 1$ means artificial damping; $|\\lambda| = 1$ means energy is (roughly) preserved. This is how stiff springs, cloth and ragdoll joints are analysed, and why semi-implicit Euler still blows up when $\\omega h > 2$ (a spring too stiff for the frame rate).',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A spring with $\\omega = 1$ is simulated with explicit Euler at $h = 0.1$. What happens to the amplitude, and why?',
      options: [
        {
          text: 'It stays constant, because the exact solution conserves energy',
          why: 'The exact solution does, but the *update matrix* has eigenvalues $1 \\pm 0.1i$ with modulus $\\sqrt{1.01} > 1$, so the numerical solution does not.',
        },
        {
          text: 'It decays toward $0$, because $h$ is small',
          why: 'Small $h$ makes $|\\lambda|$ close to $1$, but it is still above $1$, not below.',
        },
        {
          text: 'It grows by a factor $\\sqrt{1.01}$ every step, because $|\\lambda| = \\sqrt{1 + h^2} > 1$',
          correct: true,
          why: 'Both eigenvalues $1 \\pm 0.1i$ have modulus $\\sqrt{1.01} \\approx 1.005$, so each step scales the oscillation up by that factor.',
        },
        {
          text: 'It grows linearly, because the eigenvalues are complex',
          why: 'Complex eigenvalues produce rotation; the modulus $|\\lambda|^k$ governs the size, which is exponential growth, not linear.',
        },
      ],
      explanation: 'For this matrix every vector is scaled by exactly $\\sqrt{1 + h^2}$ each step (it is $\\sqrt{1 + h^2}$ times a rotation). Over 20 seconds that is $200$ steps and a factor $1.01^{100} \\approx 2.7$ in amplitude, a spring that visibly gains energy. Semi-implicit Euler fixes it by making the determinant exactly $1$.',
    },
    {
      kind: 'concept',
      title: 'Procedural populations and probabilistic AI',
      blocks: [
        {
          type: 'p',
          text: 'Simulation games (ecosystems, city builders, colony sims) often grow populations by stage. Say a creature species has juveniles $j$ and adults $a$. Each adult produces $1.6$ juveniles per season, $60\\%$ of juveniles survive to become adults, and $40\\%$ of adults survive to the next season. This is a stage-structured (Leslie-type) model.',
        },
        {
          type: 'derivation',
          title: 'Long-run growth of $\\mathbf{x}_{k+1} = \\begin{bmatrix} 0 & 1.6 \\\\ 0.6 & 0.4 \\end{bmatrix}\\mathbf{x}_k$, with $\\mathbf{x}_k = \\begin{bmatrix} j_k \\\\ a_k \\end{bmatrix}$',
          steps: [
            { tex: '\\det(A - \\lambda I) = (-\\lambda)(0.4 - \\lambda) - (1.6)(0.6) = \\lambda^2 - 0.4\\lambda - 0.96', why: 'Characteristic polynomial: trace $0.4$, determinant $-0.96$.' },
            { tex: '= (\\lambda - 1.2)(\\lambda + 0.8)', why: 'Two numbers with product $-0.96$ and sum $0.4$: $1.2$ and $-0.8$.' },
            { tex: 'A - 1.2I = \\begin{bmatrix} -1.2 & 1.6 \\\\ 0.6 & -0.8 \\end{bmatrix} \\implies \\mathbf{v}_1 = \\begin{bmatrix} 4 \\\\ 3 \\end{bmatrix}', why: 'Row 2 gives $0.6j = 0.8a$, so $j : a = 4 : 3$.' },
            { tex: '\\mathbf{x}_k = c_1(1.2)^k\\mathbf{v}_1 + c_2(-0.8)^k\\mathbf{v}_2 \\approx c_1(1.2)^k\\begin{bmatrix} 4 \\\\ 3 \\end{bmatrix}', why: '$|-0.8| < 1.2$, so relative to the first term the second shrinks like $(0.8/1.2)^k$ (alternating in sign as it fades).' },
          ],
          result: 'The population eventually grows by $20\\%$ per season with juveniles and adults in the ratio $4 : 3$, whatever the starting numbers (as long as $c_1 \\ne 0$).',
        },
        {
          type: 'p',
          text: 'For a designer this is gold: the **dominant eigenvalue** says at a glance whether a tuned ecosystem booms ($\\lambda > 1$), dies out ($\\lambda < 1$) or holds steady ($\\lambda = 1$), and its eigenvector gives the age mix players will see after a few seasons. Tweak a birth rate and recompute two numbers instead of playtesting for hours.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Probabilistic state machines',
          text: 'The guard from the Markov card is a real pattern: AI behaviour trees and finite state machines with random transitions (idle / wander / investigate / attack) are Markov chains. The steady-state vector tells you the long-run fraction of time an NPC spends in each state, and $|\\lambda_2|$ (the second-largest eigenvalue modulus) tells you how quickly it "forgets" where it started. Designers can tune transition probabilities to hit target percentages exactly, rather than by trial and error. Many code bases store transitions row-wise ($\\text{row} = $ from-state) and multiply a row vector on the left; that is just the transpose of the convention here.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A different species follows $\\mathbf{x}_{k+1} = \\begin{bmatrix} 0 & 1.2 \\\\ 0.3 & 0.5 \\end{bmatrix}\\mathbf{x}_k$ (juveniles, adults). Find the dominant eigenvalue, the long-run growth factor per season.',
      hint: 'The characteristic polynomial is $\\lambda^2 - 0.5\\lambda - 0.36$.',
      label: '$\\lambda_{\\text{dom}} =$',
      answer: '9/10',
      answerTex: '0.9',
      explanation: '$\\det(A - \\lambda I) = (-\\lambda)(0.5 - \\lambda) - (1.2)(0.3) = \\lambda^2 - 0.5\\lambda - 0.36 = (\\lambda - 0.9)(\\lambda + 0.4)$. The dominant eigenvalue is $0.9 < 1$, so this population **shrinks** by $10\\%$ per season in the long run and dies out: the origin is an attractor. A designer would need to raise the birth or survival rates until $\\lambda_{\\text{dom}} \\ge 1$.',
    },
  ],
  takeaways: [
    'For $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$, write $\\mathbf{x}_0 = \\sum c_i\\mathbf{v}_i$ in an eigenvector basis; then $\\mathbf{x}_k = \\sum c_i\\lambda_i^k\\mathbf{v}_i$ and the eigenvalue of largest $|\\lambda|$ dominates.',
    'All $|\\lambda| < 1$: attractor. All $|\\lambda| > 1$: repeller. Mixed: saddle point. Complex eigenvalues add rotation (spirals).',
    'Fibonacci is the saddle system with matrix $\\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}$: $F_k = \\frac{\\varphi^k - \\psi^k}{\\sqrt{5}}$ and $F_{k+1}/F_k \\to \\varphi = \\frac{1 + \\sqrt{5}}{2}$.',
    'Every stochastic matrix has eigenvalue $1$; the steady-state vector is that eigenvector scaled to sum to $1$, and a regular chain converges to it from any start. PageRank is exactly this steady state for a damped web link matrix.',
    'Eigenvalue magnitudes decide stability in games: explicit Euler on a spring has $|\\lambda| = \\sqrt{1 + \\omega^2h^2} > 1$ and explodes, semi-implicit Euler has $|\\lambda| = 1$, and a population model\'s dominant eigenvalue is its long-run growth rate.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Stochastic Matrices and PageRank',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'The section on stochastic matrices covers the Perron–Frobenius theorem and builds the Google matrix with interactive examples.',
    },
    {
      title: 'Wikipedia — PageRank',
      url: 'https://en.wikipedia.org/wiki/PageRank',
      source: 'wikipedia',
      note: 'History, the damping factor, and how the power method is used at web scale.',
    },
    {
      title: 'Wikipedia — Markov chain',
      url: 'https://en.wikipedia.org/wiki/Markov_chain',
      source: 'wikipedia',
      note: 'Many applications beyond this lesson, from text generation to board games like Snakes and Ladders.',
    },
    {
      title: 'Wikipedia — Fibonacci sequence',
      url: 'https://en.wikipedia.org/wiki/Fibonacci_sequence',
      source: 'wikipedia',
      note: 'The "Matrix form" and "Binet\'s formula" sections match the eigenvector derivation in this lesson.',
    },
  ],
};
