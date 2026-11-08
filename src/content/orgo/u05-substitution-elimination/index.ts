import type { Unit } from '../../types';
import { lesson as ochemMechanismBasics } from './ochem-mechanism-basics';
import { lesson as ochemSn2 } from './ochem-sn2';
import { lesson as ochemSn1 } from './ochem-sn1';
import { lesson as ochemElimination } from './ochem-elimination';

export const unit: Unit = {
  id: "ochem-u05-substitution-elimination",
  title: "Substitution and Elimination",
  description: "How mechanisms work, the SN2 and SN1 reactions, E2 and E1 eliminations, and predicting which one wins.",
  icon: "🎯",
  lessons: [ochemMechanismBasics, ochemSn2, ochemSn1, ochemElimination],
};
