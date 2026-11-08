import type { Course } from '../types';
import { unit as u01 } from './u01-quantum';
import { unit as u02 } from './u02-bonding-theory';
import { unit as u03 } from './u03-aqueous-reactions';
import { unit as u04 } from './u04-thermochemistry';
import { unit as u05 } from './u05-gases-states';
import { unit as u06 } from './u06-solutions';
import { unit as u07 } from './u07-kinetics';
import { unit as u08 } from './u08-equilibrium';
import { unit as u09 } from './u09-acid-base-equilibria';
import { unit as u10 } from './u10-thermodynamics';
import { unit as u11 } from './u11-electrochemistry';
import { unit as u12 } from './u12-nuclear-transition';

export const genchemCourse: Course = {
  id: "genchem",
  title: "General Chemistry",
  short: "Gen Chem",
  subtitle: "The full two-semester college course — from quantum atoms to equilibrium and electrochemistry",
  description: "University general chemistry: electronic structure and bonding theory, aqueous reactions and redox, thermochemistry, gases, liquids, solids and solutions, kinetics, equilibrium, acid–base and solubility equilibria, thermodynamics, electrochemistry, and nuclear and transition-metal chemistry.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12],
};
