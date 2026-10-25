import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'alg-doubling-time',
    term: 'Doubling Time',
    aliases: ['rule of 72'],
    course: 'algebra',
    category: 'Exponential and Logarithmic Functions',
    short: 'The time it takes an exponentially growing quantity to double. It is the same no matter how large the quantity already is.',
    long: 'For growth by a rate $r$ per period, solve $(1 + r)^t = 2$ to get $t = \\frac{\\ln 2}{\\ln(1 + r)}$. For continuous growth $A_0 e^{kt}$ it is $\\frac{\\ln 2}{k}$.\n\nThe **rule of 72** estimates the doubling time as $72$ divided by the percentage rate: at $8\\%$ a year, money doubles in about $9$ years. Doubling time is the growth counterpart of half-life.',
    tex: 't_{\\text{double}} = \\frac{\\ln 2}{\\ln(1 + r)} \\approx \\frac{72}{100r}',
    see: ['exponential-growth', 'half-life', 'compound-interest'],
  },
];
