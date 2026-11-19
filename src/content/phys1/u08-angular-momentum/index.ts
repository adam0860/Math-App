import type { Unit } from '../../types';
import { lesson as physRolling } from './phys-rolling';
import { lesson as physAngularMomentum } from './phys-angular-momentum';
import { lesson as physStaticEquilibrium } from './phys-static-equilibrium';

export const unit: Unit = {
  id: "phys-u08-angular-momentum",
  title: "Rolling, Angular Momentum and Equilibrium",
  description: "Rolling without slipping, angular momentum and its conservation, and static equilibrium.",
  icon: "⚖️",
  lessons: [physRolling, physAngularMomentum, physStaticEquilibrium],
};
