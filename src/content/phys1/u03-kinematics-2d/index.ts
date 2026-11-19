import type { Unit } from '../../types';
import { lesson as physMotion2d } from './phys-motion-2d';
import { lesson as physProjectileMotion } from './phys-projectile-motion';
import { lesson as physCircularRelative } from './phys-circular-relative';

export const unit: Unit = {
  id: "phys-u03-kinematics-2d",
  title: "Motion in Two Dimensions",
  description: "Position and velocity vectors, projectile motion, uniform circular motion and relative velocity.",
  icon: "🎯",
  lessons: [physMotion2d, physProjectileMotion, physCircularRelative],
};
