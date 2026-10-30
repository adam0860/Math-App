import type { Unit } from '../../types';
import { lesson as chemSolutions } from './chem-solutions';
import { lesson as chemGasLaws } from './chem-gas-laws';
import { lesson as chemAcidsBases } from './chem-acids-bases';

export const unit: Unit = {
  id: "chem-u05-solutions-gases-acids",
  title: "Solutions, Gases, and Acids and Bases",
  description: "Concentration and dilution, the gas laws and the ideal gas law, and a first look at acids, bases and pH.",
  icon: "💧",
  lessons: [chemSolutions, chemGasLaws, chemAcidsBases],
};
