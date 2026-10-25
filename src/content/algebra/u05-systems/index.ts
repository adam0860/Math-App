import type { Unit } from '../../types';
import { lesson as algSystemsSubstitution } from './alg-systems-substitution';
import { lesson as algSystemsElimination } from './alg-systems-elimination';
import { lesson as algSystemsMatrices } from './alg-systems-matrices';

export const unit: Unit = {
  id: "alg-u05-systems",
  title: "Systems of Equations",
  description: "Finding where lines meet: graphing, substitution, elimination, and a first look at matrices.",
  icon: "🔗",
  lessons: [algSystemsSubstitution, algSystemsElimination, algSystemsMatrices],
};
