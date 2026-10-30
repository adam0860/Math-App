import type { Unit } from '../../types';
import { lesson as laLinearIndependence } from './la-linear-independence';
import { lesson as laLinearTransformations } from './la-linear-transformations';
import { lesson as laStandardMatrix } from './la-standard-matrix';
import { lesson as laGeometricTransforms } from './la-geometric-transforms';

export const unit: Unit = {
  id: "la-u03-transformations",
  title: "Independence and Linear Transformations",
  description: "Linear independence, functions that preserve vector arithmetic, the standard matrix of a transformation, and the rotations, scales, shears and reflections of 2D and 3D graphics.",
  icon: "🔄",
  lessons: [laLinearIndependence, laLinearTransformations, laStandardMatrix, laGeometricTransforms],
};
