import type { Unit } from '../../types';
import { lesson as gchemWeakAcidsBases } from './gchem-weak-acids-bases';
import { lesson as gchemSaltsPolyprotic } from './gchem-salts-polyprotic';
import { lesson as gchemBuffers } from './gchem-buffers';
import { lesson as gchemTitrationCurves } from './gchem-titration-curves';
import { lesson as gchemSolubilityEquilibria } from './gchem-solubility-equilibria';

export const unit: Unit = {
  id: "gchem-u09-acid-base-equilibria",
  title: "Acid–Base and Solubility Equilibria",
  description: "Weak acids and bases, salts and polyprotic acids, buffers, titration curves and indicators, and solubility equilibria.",
  icon: "🧪",
  lessons: [gchemWeakAcidsBases, gchemSaltsPolyprotic, gchemBuffers, gchemTitrationCurves, gchemSolubilityEquilibria],
};
