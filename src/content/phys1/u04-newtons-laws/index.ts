import type { Unit } from '../../types';
import { lesson as physNewtonsLaws } from './phys-newtons-laws';
import { lesson as physFreeBodyDiagrams } from './phys-free-body-diagrams';
import { lesson as physFrictionDrag } from './phys-friction-drag';
import { lesson as physCircularDynamics } from './phys-circular-dynamics';

export const unit: Unit = {
  id: "phys-u04-newtons-laws",
  title: "Newton's Laws",
  description: "Force, mass and Newton's three laws, free-body diagrams, friction and drag, and the dynamics of circular motion.",
  icon: "🍎",
  lessons: [physNewtonsLaws, physFreeBodyDiagrams, physFrictionDrag, physCircularDynamics],
};
