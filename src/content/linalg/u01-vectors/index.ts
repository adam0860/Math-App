import type { Unit } from '../../types';
import { lesson as laVectorsRn } from './la-vectors-rn';
import { lesson as laLinearCombinations } from './la-linear-combinations';
import { lesson as laDotProduct } from './la-dot-product';
import { lesson as laCrossProduct } from './la-cross-product';

export const unit: Unit = {
  id: "la-u01-vectors",
  title: "Vectors",
  description: "Vectors in Rⁿ, linear combinations and span, the dot product, and the cross product — the building blocks of every position, velocity and direction in a game.",
  icon: "➡️",
  lessons: [laVectorsRn, laLinearCombinations, laDotProduct, laCrossProduct],
};
