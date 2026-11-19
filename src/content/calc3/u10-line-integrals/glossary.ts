import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'calc3-vector-field',
    term: 'Vector Field',
    aliases: ['vector fields', 'field of vectors'],
    course: 'calc3',
    category: 'Vector Calculus',
    short: 'A function that assigns a vector to each point of a region: $\\vec{F}(x, y) = \\langle P(x, y), Q(x, y) \\rangle$ in the plane or $\\vec{F}(x, y, z) = \\langle P, Q, R \\rangle$ in space.',
    long: 'Examples are wind and fluid velocity fields, gravitational and electric force fields, and gradient fields $\\nabla f$. A field is pictured by drawing a scaled arrow with its tail at each of a grid of sample points. Games store vector fields analytically (a function of position) or sampled on a grid (a 2D or 3D texture) to steer particles and crowds.',
    tex: '\\vec{F}(x, y) = P(x, y)\\,\\mathbf{i} + Q(x, y)\\,\\mathbf{j}',
    see: ['calc3-gradient-field', 'calc3-flow-line', 'slope-field'],
  },
  {
    id: 'calc3-gradient-field',
    term: 'Gradient Field',
    aliases: ['gradient vector field'],
    course: 'calc3',
    category: 'Vector Calculus',
    short: 'The vector field $\\nabla f = \\langle f_x, f_y \\rangle$ (or $\\langle f_x, f_y, f_z \\rangle$) of a differentiable function $f$. Its arrows point uphill, perpendicular to the level curves of $f$.',
    long: 'A vector field that equals $\\nabla f$ for some $f$ is called conservative, and $f$ is its potential function. Gradient fields have special properties: their line integrals depend only on the endpoints, and their circulation around every closed curve is zero.',
    tex: '\\nabla f(x, y) = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\right\\rangle',
    see: ['calc3-vector-field', 'calc3-conservative-field', 'calc3-potential-function'],
  },
  {
    id: 'calc3-flow-line',
    term: 'Flow Line',
    aliases: ['streamline', 'integral curve', 'flow lines'],
    course: 'calc3',
    category: 'Vector Calculus',
    short: 'A curve $\\vec{r}(t)$ whose velocity always equals the vector field at its current position: $\\vec{r}\\,\'(t) = \\vec{F}(\\vec{r}(t))$. It is the path a particle carried by the field would follow.',
    long: 'Finding flow lines means solving a system of differential equations. For $\\langle -y, x \\rangle$ they are circles; for $\\langle x, -y \\rangle$ they are hyperbolas $xy = c$. If $\\vec{F}$ has continuous partial derivatives, flow lines never cross where $\\vec{F} \\ne \\vec{0}$. Particle systems compute flow lines numerically with Euler or Runge–Kutta steps.',
    tex: '\\vec{r}\\,\'(t) = \\vec{F}(\\vec{r}(t))',
    see: ['calc3-vector-field', 'slope-field'],
  },
];
