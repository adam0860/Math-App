import type { Unit } from '../../types';
import { lesson as physPositionVelocity } from './phys-position-velocity';
import { lesson as physConstantAcceleration } from './phys-constant-acceleration';
import { lesson as physFreeFall } from './phys-free-fall';

export const unit: Unit = {
  id: "phys-u02-kinematics-1d",
  title: "Motion in One Dimension",
  description: "Position, velocity and acceleration as derivatives and integrals, constant-acceleration motion, and free fall.",
  icon: "🏃",
  lessons: [physPositionVelocity, physConstantAcceleration, physFreeFall],
};
