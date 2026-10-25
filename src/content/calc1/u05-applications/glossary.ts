import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'local-linearity',
    term: 'Local Linearity',
    aliases: ['locally linear'],
    course: 'calc1',
    category: 'Applications of Derivatives',
    short: 'The property that a differentiable function\'s graph looks more and more like its tangent line as you zoom in on a point.',
    long: 'Local linearity is the geometric meaning of differentiability. It justifies the linear approximation $f(x) \\approx f(a) + f\'(a)(x - a)$ for $x$ near $a$. Graphs with corners (like $|x|$ at $0$) are not locally linear there.',
    see: ['linearization', 'linear-approximation', 'differentiable'],
  },
  {
    id: 'quadratic-convergence',
    term: 'Quadratic Convergence',
    course: 'calc1',
    category: 'Applications of Derivatives',
    short: 'Convergence in which each new error is roughly a constant times the square of the previous error, so the number of correct digits roughly doubles each step.',
    long: 'Newton\'s method converges quadratically near a simple root $r$ (one with $f\'(r) \\ne 0$): $e_{n+1} \\approx \\left|\\frac{f\'\'(r)}{2f\'(r)}\\right| e_n^2$. By contrast, bisection halves the error each step (linear convergence).',
    tex: 'e_{n+1} \\approx C\\,e_n^2',
    see: ['newtons-method'],
  },
];
