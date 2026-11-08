import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'discrete-dynamical-system',
    term: 'Discrete Dynamical System',
    aliases: ['linear difference equation', 'linear recurrence (vector)'],
    course: 'linalg',
    category: 'Eigenvalues',
    short: 'A state vector updated in steps by a fixed rule; in the linear case $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$, so $\\mathbf{x}_k = A^k\\mathbf{x}_0$.',
    long:
      'Each step applies the same matrix to the current state: populations from one year to the next, probabilities from one turn to the next, positions and velocities from one physics frame to the next.\n\n' +
      'If $\\mathbf{x}_0 = c_1\\mathbf{v}_1 + \\dots + c_n\\mathbf{v}_n$ in a basis of eigenvectors, then $\\mathbf{x}_k = c_1\\lambda_1^k\\mathbf{v}_1 + \\dots + c_n\\lambda_n^k\\mathbf{v}_n$. The eigenvalues of largest absolute value dominate the long-run behaviour: if all $|\\lambda_i| < 1$ the state decays to $\\mathbf{0}$, and any $|\\lambda_i| > 1$ (with $c_i \\ne 0$) makes it grow without bound.',
    tex: '\\mathbf{x}_k = A^k\\mathbf{x}_0 = c_1\\lambda_1^k\\mathbf{v}_1 + \\dots + c_n\\lambda_n^k\\mathbf{v}_n',
    see: ['eigenvalue', 'eigenvector', 'attractor', 'repeller', 'saddle-point', 'markov-chain'],
  },
  {
    id: 'attractor',
    term: 'Attractor (of a linear system)',
    course: 'linalg',
    category: 'Eigenvalues',
    short: 'For $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$, the origin is an attractor when every eigenvalue satisfies $|\\lambda| < 1$: every trajectory shrinks toward $\\mathbf{0}$.',
    long:
      'Each eigen-component is multiplied by a number smaller than $1$ in absolute value at every step, so all of them decay geometrically. Trajectories approach the origin fastest along the eigenvector with the smallest $|\\lambda|$ and end up hugging the eigenvector whose $|\\lambda|$ is largest (the slowest to decay).',
    see: ['repeller', 'saddle-point', 'discrete-dynamical-system'],
  },
  {
    id: 'repeller',
    term: 'Repeller (of a linear system)',
    course: 'linalg',
    category: 'Eigenvalues',
    short: 'For $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$, the origin is a repeller when every eigenvalue satisfies $|\\lambda| > 1$: every nonzero trajectory moves away from $\\mathbf{0}$ without bound.',
    long: 'Running a repeller backwards in time (using $A^{-1}$, whose eigenvalues are $1/\\lambda$) turns it into an attractor. In simulation code, a repeller at the rest state is the mathematical signature of an unstable update rule.',
    see: ['attractor', 'saddle-point', 'discrete-dynamical-system'],
  },
  {
    id: 'saddle-point',
    term: 'Saddle Point (of a linear system)',
    course: 'linalg',
    category: 'Eigenvalues',
    short: 'For $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$, the origin is a saddle point when some eigenvalues have $|\\lambda| < 1$ and others $|\\lambda| > 1$: trajectories approach along one eigen-direction and escape along another.',
    long: 'Only starting points exactly on the "attracting" eigenspace converge to $\\mathbf{0}$. Any tiny component along an eigenvector with $|\\lambda| > 1$ eventually dominates, so almost every trajectory is pulled in and then flung out. The Fibonacci recurrence is a saddle: $\\varphi \\approx 1.618$ and $\\psi \\approx -0.618$.',
    see: ['attractor', 'repeller', 'discrete-dynamical-system'],
  },
  {
    id: 'probability-vector',
    term: 'Probability Vector',
    course: 'linalg',
    category: 'Eigenvalues',
    short: 'A vector with nonnegative entries that add up to $1$, describing how probability (or a population) is spread over the states of a system.',
    tex: '\\mathbf{q} = \\begin{bmatrix} 5/6 \\\\ 1/6 \\end{bmatrix}',
    see: ['stochastic-matrix', 'markov-chain', 'steady-state-vector'],
  },
  {
    id: 'regular-stochastic-matrix',
    term: 'Regular Stochastic Matrix',
    course: 'linalg',
    category: 'Eigenvalues',
    short: 'A stochastic matrix $P$ such that some power $P^k$ has all entries strictly positive (every state can reach every state in exactly $k$ steps).',
    long:
      'A regular stochastic matrix has a unique steady-state vector $\\mathbf{q}$, and the Markov chain $\\mathbf{x}_{k+1} = P\\mathbf{x}_k$ converges to $\\mathbf{q}$ from **every** starting probability vector. Its eigenvalue $1$ is simple and every other eigenvalue has $|\\lambda| < 1$, so the other eigen-components die out.\n\n' +
      'PageRank adds a small "random jump" to the web\'s link matrix precisely to make it regular.',
    see: ['stochastic-matrix', 'markov-chain', 'steady-state-vector', 'pagerank'],
  },
  {
    id: 'pagerank',
    term: 'PageRank',
    course: 'linalg',
    category: 'Eigenvalues',
    short: 'Google\'s original ranking of web pages: the steady-state vector of a Markov chain describing a "random surfer" who follows links (and occasionally jumps to a random page).',
    long:
      'With link matrix $M$ (column $j$ spreads page $j$\'s vote evenly over its outgoing links), damping factor $d$ (classically $0.85$) and $n$ pages, the Google matrix is $G = dM + \\frac{1-d}{n}J$, where $J$ is the all-ones matrix. $G$ is a regular stochastic matrix, and the rank vector is its steady state, the eigenvector for eigenvalue $1$.\n\n' +
      'It is computed by the power method: repeatedly apply $G$ to a probability vector until it stops changing.',
    tex: 'G\\mathbf{r} = \\mathbf{r}, \\quad G = dM + \\tfrac{1-d}{n}J',
    see: ['markov-chain', 'regular-stochastic-matrix', 'steady-state-vector'],
  },
];
