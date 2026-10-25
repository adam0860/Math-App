import type { Unit } from '../../types';
import { lesson as algRealNumbers } from './alg-real-numbers';
import { lesson as algOrderOfOperations } from './alg-order-of-operations';
import { lesson as algFractions } from './alg-fractions';
import { lesson as algExponents } from './alg-exponents';
import { lesson as algRadicals } from './alg-radicals';

export const unit: Unit = {
  id: "alg-u01-foundations",
  title: "Number Foundations",
  description: "The real number system, order of operations, fractions, exponents and radicals — the toolkit every later topic leans on.",
  icon: "🔢",
  lessons: [algRealNumbers, algOrderOfOperations, algFractions, algExponents, algRadicals],
};
