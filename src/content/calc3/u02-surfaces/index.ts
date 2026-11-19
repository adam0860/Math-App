import type { Unit } from '../../types';
import { lesson as calc3QuadricSurfaces } from './calc3-quadric-surfaces';
import { lesson as calc3CylindricalSpherical } from './calc3-cylindrical-spherical';

export const unit: Unit = {
  id: "calc3-u02-surfaces",
  title: "Surfaces and Coordinate Systems",
  description: "Cylinders and quadric surfaces, and cylindrical and spherical coordinates.",
  icon: "🥚",
  lessons: [calc3QuadricSurfaces, calc3CylindricalSpherical],
};
