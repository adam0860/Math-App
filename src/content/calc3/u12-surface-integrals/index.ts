import type { Unit } from '../../types';
import { lesson as calc3ParametricSurfaces } from './calc3-parametric-surfaces';
import { lesson as calc3SurfaceIntegrals } from './calc3-surface-integrals';

export const unit: Unit = {
  id: "calc3-u12-surface-integrals",
  title: "Surface Integrals",
  description: "Parametric surfaces and their areas, and surface integrals of scalar functions and flux of vector fields.",
  icon: "🫧",
  lessons: [calc3ParametricSurfaces, calc3SurfaceIntegrals],
};
