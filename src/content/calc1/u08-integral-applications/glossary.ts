import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'total-distance-traveled',
    term: 'Total Distance Traveled',
    aliases: ['total distance', 'distance traveled'],
    course: 'calc1',
    category: 'Integrals',
    short:
      'The total length of path covered by a moving object, counting backward motion as positive: $\\int_a^b |v(t)|\\,dt$.',
    long:
      'Unlike [[displacement]], which is $\\int_a^b v(t)\\,dt$ and lets forward and backward motion cancel, total distance adds up every metre covered. Because $|v(t)|$ rarely has a simple antiderivative formula, compute it by finding where $v(t) = 0$, splitting the interval at those times, integrating $v$ on each piece and adding the absolute values of the results.\n\n' +
      'Example: $v(t) = 2t - 6$ on $[0, 5]$ gives displacement $-5$ but total distance $9 + 4 = 13$.',
    tex: '\\text{distance} = \\int_a^b |v(t)|\\,dt \\;\\ge\\; \\left|\\int_a^b v(t)\\,dt\\right| = |\\text{displacement}|',
    see: ['displacement', 'velocity', 'net-change-theorem'],
  },
  {
    id: 'mean-value-theorem-for-integrals',
    term: 'Mean Value Theorem for Integrals',
    aliases: ['MVT for integrals', 'integral mean value theorem'],
    course: 'calc1',
    category: 'Integrals',
    short:
      'If $f$ is continuous on $[a, b]$, then $f(c) = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$ for at least one $c$ in $[a, b]$: a continuous function actually attains its average value.',
    long:
      'Geometrically, some rectangle of width $b - a$ whose height is a value $f(c)$ of the function has exactly the same area as the region under the curve.\n\n' +
      'Proof idea: by the [[extreme-value-theorem]] $f$ has a minimum $m$ and maximum $M$ on $[a, b]$, so $m \\le f_{\\text{avg}} \\le M$; the [[intermediate-value-theorem]] then supplies a $c$ with $f(c) = f_{\\text{avg}}$. Continuity is essential: a step function can skip right over its average.',
    tex: '\\int_a^b f(x)\\,dx = f(c)\\,(b - a)',
    see: ['average-value', 'mean-value-theorem', 'intermediate-value-theorem', 'extreme-value-theorem'],
  },
];
