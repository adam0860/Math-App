import type { Unit } from '../../types';
import { lesson as ochemAlkeneStructure } from './ochem-alkene-structure';
import { lesson as ochemAlkeneAddition } from './ochem-alkene-addition';
import { lesson as ochemAlkeneReactions } from './ochem-alkene-reactions';
import { lesson as ochemAlkynes } from './ochem-alkynes';

export const unit: Unit = {
  id: "ochem-u06-alkenes-alkynes",
  title: "Alkenes and Alkynes",
  description: "Alkene structure and stability, electrophilic additions and their regio- and stereochemistry, oxidations and reductions, and the chemistry of alkynes.",
  icon: "🧷",
  lessons: [ochemAlkeneStructure, ochemAlkeneAddition, ochemAlkeneReactions, ochemAlkynes],
};
