import type { Unit } from '../../types';
import { lesson as algQuadraticFactoring } from './alg-quadratic-factoring';
import { lesson as algCompletingSquare } from './alg-completing-square';
import { lesson as algQuadraticFormula } from './alg-quadratic-formula';
import { lesson as algComplexNumbers } from './alg-complex-numbers';
import { lesson as algParabolas } from './alg-parabolas';

export const unit: Unit = {
  id: "alg-u06-quadratics",
  title: "Quadratics and Complex Numbers",
  description: "Every way to solve a quadratic, what the discriminant tells you, complex numbers, and the shape of parabolas.",
  icon: "🎯",
  lessons: [algQuadraticFactoring, algCompletingSquare, algQuadraticFormula, algComplexNumbers, algParabolas],
};
