import type { Unit } from '../../types';
import { lesson as physUniversalGravitation } from './phys-universal-gravitation';
import { lesson as physOrbits } from './phys-orbits';

export const unit: Unit = {
  id: "phys-u09-gravitation",
  title: "Gravitation",
  description: "Newton's law of universal gravitation, gravitational fields and potential energy, orbits, escape speed and Kepler's laws.",
  icon: "🪐",
  lessons: [physUniversalGravitation, physOrbits],
};
