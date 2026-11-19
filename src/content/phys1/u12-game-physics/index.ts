import type { Unit } from '../../types';
import { lesson as physNumericalIntegration } from './phys-numerical-integration';
import { lesson as physCollisionResponse } from './phys-collision-response';

export const unit: Unit = {
  id: "phys-u12-game-physics",
  title: "Physics in Game Engines",
  description: "Numerical integration of motion (Euler, semi-implicit Euler, Verlet, RK4) and timestep stability, then collision detection and impulse-based collision response.",
  icon: "🎮",
  lessons: [physNumericalIntegration, physCollisionResponse],
};
