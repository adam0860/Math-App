import type { Unit } from '../../types';
import { lesson as ochemCarboxylicAcids } from './ochem-carboxylic-acids';
import { lesson as ochemAcylSubstitution } from './ochem-acyl-substitution';
import { lesson as ochemEnolates } from './ochem-enolates';
import { lesson as ochemAldolClaisen } from './ochem-aldol-claisen';

export const unit: Unit = {
  id: "ochem-u11-acyl-enolates",
  title: "Carboxylic Acid Derivatives and Enolates",
  description: "Carboxylic acids and nucleophilic acyl substitution, esters and amides, enols and enolates, and the aldol and Claisen reactions.",
  icon: "🧬",
  lessons: [ochemCarboxylicAcids, ochemAcylSubstitution, ochemEnolates, ochemAldolClaisen],
};
