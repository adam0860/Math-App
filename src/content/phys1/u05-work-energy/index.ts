import type { Unit } from '../../types';
import { lesson as physWork } from './phys-work';
import { lesson as physKineticEnergy } from './phys-kinetic-energy';
import { lesson as physPotentialEnergy } from './phys-potential-energy';
import { lesson as physEnergyConservation } from './phys-energy-conservation';

export const unit: Unit = {
  id: "phys-u05-work-energy",
  title: "Work and Energy",
  description: "Work as an integral, kinetic energy and the work–energy theorem, power, potential energy and conservative forces, and conservation of energy.",
  icon: "⚡",
  lessons: [physWork, physKineticEnergy, physPotentialEnergy, physEnergyConservation],
};
