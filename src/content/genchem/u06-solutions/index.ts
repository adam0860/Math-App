import type { Unit } from '../../types';
import { lesson as gchemSolutionProcess } from './gchem-solution-process';
import { lesson as gchemConcentrationUnits } from './gchem-concentration-units';
import { lesson as gchemColligative } from './gchem-colligative';

export const unit: Unit = {
  id: "gchem-u06-solutions",
  title: "Properties of Solutions",
  description: "The solution process and what controls solubility, concentration units, and colligative properties.",
  icon: "🧂",
  lessons: [gchemSolutionProcess, gchemConcentrationUnits, gchemColligative],
};
