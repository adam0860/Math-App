import type { Unit } from '../../types';
import { lesson as ochemNomenclature } from './ochem-nomenclature';
import { lesson as ochemConformations } from './ochem-conformations';
import { lesson as ochemCyclohexane } from './ochem-cyclohexane';

export const unit: Unit = {
  id: "ochem-u03-alkanes",
  title: "Alkanes and Conformations",
  description: "Naming alkanes and cycloalkanes, rotation about single bonds and Newman projections, and the chair conformations of cyclohexane.",
  icon: "🔗",
  lessons: [ochemNomenclature, ochemConformations, ochemCyclohexane],
};
