import type { Unit } from '../../types';
import { lesson as laMatrixOperations } from './la-matrix-operations';
import { lesson as laMatrixInverse } from './la-matrix-inverse';
import { lesson as laInvertibleMatrixTheorem } from './la-invertible-matrix-theorem';
import { lesson as laHomogeneousCoordinates } from './la-homogeneous-coordinates';

export const unit: Unit = {
  id: "la-u04-matrix-algebra",
  title: "Matrix Algebra",
  description: "Matrix multiplication as composition, inverses, the Invertible Matrix Theorem, and the 4×4 homogeneous matrices every game engine uses.",
  icon: "🔲",
  lessons: [laMatrixOperations, laMatrixInverse, laInvertibleMatrixTheorem, laHomogeneousCoordinates],
};
