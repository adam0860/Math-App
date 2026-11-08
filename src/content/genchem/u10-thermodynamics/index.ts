import type { Unit } from '../../types';
import { lesson as gchemEntropy } from './gchem-entropy';
import { lesson as gchemGibbsFreeEnergy } from './gchem-gibbs-free-energy';
import { lesson as gchemFreeEnergyEquilibrium } from './gchem-free-energy-equilibrium';

export const unit: Unit = {
  id: "gchem-u10-thermodynamics",
  title: "Thermodynamics",
  description: "Entropy and the second law, Gibbs free energy and spontaneity, and how free energy is tied to the equilibrium constant.",
  icon: "🌀",
  lessons: [gchemEntropy, gchemGibbsFreeEnergy, gchemFreeEnergyEquilibrium],
};
