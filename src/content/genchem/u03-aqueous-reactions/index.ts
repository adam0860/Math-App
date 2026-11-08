import type { Unit } from '../../types';
import { lesson as gchemAqueousIonic } from './gchem-aqueous-ionic';
import { lesson as gchemAcidBaseTitration } from './gchem-acid-base-titration';
import { lesson as gchemRedox } from './gchem-redox';
import { lesson as gchemBalancingRedox } from './gchem-balancing-redox';

export const unit: Unit = {
  id: "gchem-u03-aqueous-reactions",
  title: "Reactions in Aqueous Solution",
  description: "Electrolytes and net ionic equations, acid–base reactions and titration calculations, and oxidation–reduction with half-reaction balancing.",
  icon: "🌊",
  lessons: [gchemAqueousIonic, gchemAcidBaseTitration, gchemRedox, gchemBalancingRedox],
};
