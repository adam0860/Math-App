import type { Unit } from '../../types';
import { lesson as chemMatter } from './chem-matter';
import { lesson as chemMeasurement } from './chem-measurement';
import { lesson as chemDimensionalAnalysis } from './chem-dimensional-analysis';

export const unit: Unit = {
  id: "chem-u01-matter-measurement",
  title: "Matter and Measurement",
  description: "What chemistry studies, states and classes of matter, physical and chemical change, and the measuring toolkit: SI units, significant figures and dimensional analysis.",
  icon: "⚖️",
  lessons: [chemMatter, chemMeasurement, chemDimensionalAnalysis],
};
