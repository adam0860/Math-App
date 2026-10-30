import type { Unit } from '../../types';
import { lesson as laOrthogonalProjections } from './la-orthogonal-projections';
import { lesson as laGramSchmidt } from './la-gram-schmidt';
import { lesson as laLeastSquares } from './la-least-squares';
import { lesson as laSvd } from './la-svd';

export const unit: Unit = {
  id: "la-u08-orthogonality",
  title: "Orthogonality and Least Squares",
  description: "Orthogonal sets and projections, Gram–Schmidt and QR, least-squares fitting, and symmetric matrices and the singular value decomposition.",
  icon: "📐",
  lessons: [laOrthogonalProjections, laGramSchmidt, laLeastSquares, laSvd],
};
