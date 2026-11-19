import type { Unit } from '../../types';
import { lesson as physRotationalKinematics } from './phys-rotational-kinematics';
import { lesson as physMomentOfInertia } from './phys-moment-of-inertia';
import { lesson as physTorque } from './phys-torque';

export const unit: Unit = {
  id: "phys-u07-rotation",
  title: "Rotation",
  description: "Angular position, velocity and acceleration, moment of inertia and rotational kinetic energy, and torque with Newton's second law for rotation.",
  icon: "🌀",
  lessons: [physRotationalKinematics, physMomentOfInertia, physTorque],
};
