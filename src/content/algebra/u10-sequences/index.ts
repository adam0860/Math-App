import type { Unit } from '../../types';
import { lesson as algSequences } from './alg-sequences';
import { lesson as algArithmeticGeometric } from './alg-arithmetic-geometric';
import { lesson as algBinomialTheorem } from './alg-binomial-theorem';

export const unit: Unit = {
  id: "alg-u10-sequences",
  title: "Sequences, Series and Counting",
  description: "Patterns that go on forever, summation notation, and the binomial theorem — a bridge to discrete math.",
  icon: "🔁",
  lessons: [algSequences, algArithmeticGeometric, algBinomialTheorem],
};
