import type { Unit } from '../../types';
import { lesson as ochemConjugatedDienes } from './ochem-conjugated-dienes';
import { lesson as ochemAromaticity } from './ochem-aromaticity';
import { lesson as ochemEas } from './ochem-eas';
import { lesson as ochemDirectingEffects } from './ochem-directing-effects';

export const unit: Unit = {
  id: "ochem-u09-aromatic",
  title: "Conjugation and Aromaticity",
  description: "Conjugated dienes and the Diels–Alder reaction, aromaticity and Hückel's rule, electrophilic aromatic substitution, and directing effects.",
  icon: "⬡",
  lessons: [ochemConjugatedDienes, ochemAromaticity, ochemEas, ochemDirectingEffects],
};
