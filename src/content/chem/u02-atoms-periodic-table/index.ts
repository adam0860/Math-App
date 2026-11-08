import type { Unit } from '../../types';
import { lesson as chemAtomicStructure } from './chem-atomic-structure';
import { lesson as chemElectronArrangement } from './chem-electron-arrangement';
import { lesson as chemPeriodicTrends } from './chem-periodic-trends';

export const unit: Unit = {
  id: "chem-u02-atoms-periodic-table",
  title: "Atoms and the Periodic Table",
  description: "Protons, neutrons and electrons, isotopes and average atomic mass, how electrons are arranged, and the patterns of the periodic table.",
  icon: "⚛️",
  lessons: [chemAtomicStructure, chemElectronArrangement, chemPeriodicTrends],
};
