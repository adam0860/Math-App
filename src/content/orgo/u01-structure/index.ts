import type { Unit } from '../../types';
import { lesson as ochemBondLine } from './ochem-bond-line';
import { lesson as ochemResonanceArrows } from './ochem-resonance-arrows';
import { lesson as ochemFunctionalGroups } from './ochem-functional-groups';

export const unit: Unit = {
  id: "ochem-u01-structure",
  title: "Structure, Bonding and Drawing Molecules",
  description: "Reading and drawing bond-line structures, resonance and curved-arrow notation, and the functional groups that organize the rest of the course.",
  icon: "🧩",
  lessons: [ochemBondLine, ochemResonanceArrows, ochemFunctionalGroups],
};
