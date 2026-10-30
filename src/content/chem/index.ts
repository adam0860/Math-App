import type { Course } from '../types';
import { unit as u01 } from './u01-matter-measurement';
import { unit as u02 } from './u02-atoms-periodic-table';
import { unit as u03 } from './u03-bonding';
import { unit as u04 } from './u04-mole';
import { unit as u05 } from './u05-solutions-gases-acids';

export const chemCourse: Course = {
  id: "chem",
  title: "Chemistry Foundations",
  short: "Chem",
  subtitle: "High school chemistry — atoms, bonds, reactions and the mole",
  description: "A compact on-ramp to college chemistry: matter and measurement, atoms and the periodic table, ionic and covalent bonding, chemical equations and reactions, the mole and stoichiometry, and a first look at solutions, gases, and acids and bases.",
  units: [u01, u02, u03, u04, u05],
};
