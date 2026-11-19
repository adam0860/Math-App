import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'phys-dimension',
    term: 'Dimension (Physics)',
    aliases: ['physical dimension', 'dimensional consistency', 'dimensional homogeneity', 'dimension check'],
    course: 'phys1',
    category: 'Measurement',
    short:
      'The kind of physical quantity, independent of the unit used to measure it. Mechanics has three base dimensions, length $[L]$, mass $[M]$ and time $[T]$; for example $[\\text{speed}] = [L T^{-1}]$.',
    long:
      'Units are choices (meters, feet, light-years); dimensions are not. Every mechanical quantity has a dimension of the form $[L^a M^b T^c]$: acceleration is $[L T^{-2}]$, force $[M L T^{-2}]$, energy $[M L^2 T^{-2}]$.\n\n' +
      'A correct equation is **dimensionally consistent**: both sides, and every term in a sum, have the same dimension, and the arguments of $\\sin$, $\\exp$ and $\\ln$ are dimensionless. A derivative $d/dt$ divides by $[T]$; an integral $\\int \\dots dt$ multiplies by $[T]$. Checking dimensions catches many algebra mistakes, and matching exponents can even predict how a result scales (a pendulum\'s period $T \\propto \\sqrt{L/g}$). It can never supply pure-number factors such as $2\\pi$ or $\\tfrac12$.',
    tex: '[x] = [L],\\quad [v] = [L T^{-1}],\\quad [a] = [L T^{-2}],\\quad [F] = [M L T^{-2}]',
    see: ['dimensional-analysis', 'si-units', 'phys-order-of-magnitude'],
  },
  {
    id: 'phys-order-of-magnitude',
    term: 'Order of Magnitude',
    aliases: ['orders of magnitude', 'power of ten'],
    course: 'phys1',
    category: 'Measurement',
    short:
      'The power of ten closest to a quantity. A football field ($\\approx 100\\,\\text{m}$) is of order $10^{2}\\,\\text{m}$; two quantities "differ by three orders of magnitude" when one is about 1000 times the other.',
    long:
      'Writing a number in [[scientific-notation]] as $a \\times 10^{n}$ with $1 \\le a < 10$, its order of magnitude is $10^{n}$, or $10^{n+1}$ when $a$ is above about $3$ (since $\\sqrt{10} \\approx 3.16$ is the midpoint on a logarithmic scale). Orders of magnitude let you compare wildly different scales at a glance and check whether a careful calculation is even in the right ballpark.',
    see: ['phys-fermi-estimate', 'scientific-notation'],
  },
  {
    id: 'phys-fermi-estimate',
    term: 'Fermi Estimate',
    aliases: ['Fermi problem', 'back-of-the-envelope estimate', 'order-of-magnitude estimate'],
    course: 'phys1',
    category: 'Measurement',
    short:
      'A quick estimate of a quantity to the nearest [[phys-order-of-magnitude|order of magnitude]], made by breaking it into factors that can each be guessed roughly and multiplying them.',
    long:
      'Named after Enrico Fermi, who was famous for such estimates. Because independent errors in the factors partly cancel, a chain of rough guesses usually lands within a factor of a few of the truth. Physicists and engineers estimate first to know what answer to expect, then calculate carefully; a big disagreement between the two flags a units or arithmetic mistake.',
    tex: 'N_{\\text{heartbeats}} \\approx 1\\,\\tfrac{\\text{beat}}{\\text{s}} \\times 3 \\times 10^{7}\\,\\tfrac{\\text{s}}{\\text{yr}} \\times 80\\,\\text{yr} \\sim 10^{9}',
    see: ['phys-order-of-magnitude', 'scientific-notation'],
  },
];
