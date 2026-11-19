import type { Unit } from '../../types';
import { lesson as physMomentumImpulse } from './phys-momentum-impulse';
import { lesson as physCollisions } from './phys-collisions';
import { lesson as physCenterOfMass } from './phys-center-of-mass';

export const unit: Unit = {
  id: "phys-u06-momentum",
  title: "Momentum and Collisions",
  description: "Momentum and impulse, conservation of momentum in collisions, and the center of mass of systems and extended objects.",
  icon: "💥",
  lessons: [physMomentumImpulse, physCollisions, physCenterOfMass],
};
