import type { Unit } from '../../types';
import { lesson as gchemEquilibriumConstant } from './gchem-equilibrium-constant';
import { lesson as gchemLeChatelier } from './gchem-le-chatelier';
import { lesson as gchemIceTables } from './gchem-ice-tables';

export const unit: Unit = {
  id: "gchem-u08-equilibrium",
  title: "Chemical Equilibrium",
  description: "The equilibrium constant, the reaction quotient and Le Châtelier's principle, and solving equilibrium problems with ICE tables.",
  icon: "⚖️",
  lessons: [gchemEquilibriumConstant, gchemLeChatelier, gchemIceTables],
};
