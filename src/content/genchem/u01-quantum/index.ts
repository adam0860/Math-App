import type { Unit } from '../../types';
import { lesson as gchemLightPhotons } from './gchem-light-photons';
import { lesson as gchemQuantumModel } from './gchem-quantum-model';
import { lesson as gchemQuantumNumbers } from './gchem-quantum-numbers';
import { lesson as gchemConfigurationsProperties } from './gchem-configurations-properties';

export const unit: Unit = {
  id: "gchem-u01-quantum",
  title: "Electronic Structure",
  description: "Light and the photon, the quantum-mechanical atom, quantum numbers and orbital shapes, and how electron configurations explain magnetism and periodic properties.",
  icon: "⚡",
  lessons: [gchemLightPhotons, gchemQuantumModel, gchemQuantumNumbers, gchemConfigurationsProperties],
};
