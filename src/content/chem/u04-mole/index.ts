import type { Unit } from '../../types';
import { lesson as chemChemicalEquations } from './chem-chemical-equations';
import { lesson as chemMole } from './chem-mole';
import { lesson as chemFormulasComposition } from './chem-formulas-composition';
import { lesson as chemStoichiometry } from './chem-stoichiometry';

export const unit: Unit = {
  id: "chem-u04-mole",
  title: "Reactions, the Mole and Stoichiometry",
  description: "Writing and balancing chemical equations, the main reaction types, counting particles with the mole, and calculating how much reacts and forms.",
  icon: "🧪",
  lessons: [chemChemicalEquations, chemMole, chemFormulasComposition, chemStoichiometry],
};
