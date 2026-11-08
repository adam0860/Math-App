import type { Unit } from '../../types';
import { lesson as ochemAmines } from './ochem-amines';
import { lesson as ochemBiomolecules } from './ochem-biomolecules';
import { lesson as ochemRetrosynthesis } from './ochem-retrosynthesis';

export const unit: Unit = {
  id: "ochem-u12-amines-bio-synthesis",
  title: "Amines, Biomolecules and Synthesis",
  description: "Amines, the organic chemistry of carbohydrates and proteins, and planning multistep syntheses with retrosynthesis.",
  icon: "🧠",
  lessons: [ochemAmines, ochemBiomolecules, ochemRetrosynthesis],
};
