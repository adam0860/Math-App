import type { Unit } from '../../types';
import { lesson as laLinearSystems } from './la-linear-systems';
import { lesson as laRowReduction } from './la-row-reduction';
import { lesson as laSolutionSets } from './la-solution-sets';
import { lesson as laMatrixEquation } from './la-matrix-equation';

export const unit: Unit = {
  id: "la-u02-systems",
  title: "Linear Systems",
  description: "Systems of linear equations, row reduction to echelon form, describing every solution with free variables, and the matrix equation Ax = b.",
  icon: "🧩",
  lessons: [laLinearSystems, laRowReduction, laSolutionSets, laMatrixEquation],
};
