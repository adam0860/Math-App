import type { Unit } from '../../types';
import { lesson as gchemGalvanicCells } from './gchem-galvanic-cells';
import { lesson as gchemNernst } from './gchem-nernst';
import { lesson as gchemBatteriesElectrolysis } from './gchem-batteries-electrolysis';

export const unit: Unit = {
  id: "gchem-u11-electrochemistry",
  title: "Electrochemistry",
  description: "Galvanic cells and standard reduction potentials, cell potential, free energy and the Nernst equation, and batteries, corrosion and electrolysis.",
  icon: "🔋",
  lessons: [gchemGalvanicCells, gchemNernst, gchemBatteriesElectrolysis],
};
