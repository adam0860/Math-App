import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'marginal-cost',
    term: 'Marginal Cost',
    aliases: ['marginal revenue', 'marginal profit'],
    course: 'calc1',
    category: 'Derivatives',
    short: 'The derivative $C\'(x)$ of a cost function: the rate at which total cost changes per additional unit produced, approximately the cost of producing one more unit.',
    long: 'If $C(x)$ is the total cost in dollars of producing $x$ items, then $C\'(x)$ is measured in dollars per item, and $C(x + 1) - C(x) \\approx C\'(x)$. Marginal revenue $R\'(x)$ and marginal profit $P\'(x)$ are defined the same way.',
    tex: "C(x + 1) - C(x) \\approx C'(x)",
    see: ['derivative', 'instantaneous-rate-of-change'],
  },
  {
    id: 'finite-difference',
    term: 'Finite Difference',
    aliases: ['forward difference', 'central difference', 'symmetric difference quotient'],
    course: 'calc1',
    category: 'Derivatives',
    short: 'An approximation of a derivative by a difference quotient with a small but nonzero step, such as $\\frac{f(x + h) - f(x)}{h}$ (forward) or $\\frac{f(x + h) - f(x - h)}{2h}$ (central).',
    long: 'Programs that only know a function through samples (positions each frame, sensor readings, simulation states) estimate derivatives with finite differences. The forward difference has error roughly proportional to $h$; the central difference has error roughly proportional to $h^2$, so it is usually much more accurate for the same step. Making $h$ too small causes floating-point cancellation, so in practice $h$ is chosen with care.',
    tex: "f'(x) \\approx \\frac{f(x + h) - f(x - h)}{2h}",
    example: 'double velocity = (pos[n + 1] - pos[n - 1]) / (2 * dt);',
    exampleLang: 'cpp',
    see: ['difference-quotient', 'derivative', 'velocity'],
  },
  {
    id: 'jerk',
    term: 'Jerk',
    course: 'calc1',
    category: 'Derivatives',
    short: 'The rate of change of acceleration: the third derivative of position, $j(t) = a\'(t) = s\'\'\'(t)$.',
    long: 'Jerk is measured in m/s³. Sudden changes in acceleration are felt as jolts, so elevators, vehicles, camera rigs and animation curves are often designed to keep jerk small.',
    tex: "j(t) = \\frac{da}{dt} = \\frac{d^3 s}{dt^3}",
    see: ['acceleration', 'velocity', 'higher-order-derivative'],
  },
];
