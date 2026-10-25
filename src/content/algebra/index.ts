import type { Course } from '../types';
import { unit as u01 } from './u01-foundations';
import { unit as u02 } from './u02-polynomials';
import { unit as u03 } from './u03-linear-equations';
import { unit as u04 } from './u04-lines';
import { unit as u05 } from './u05-systems';
import { unit as u06 } from './u06-quadratics';
import { unit as u07 } from './u07-functions';
import { unit as u08 } from './u08-polynomial-functions';
import { unit as u09 } from './u09-exp-log';
import { unit as u10 } from './u10-sequences';

export const algebraCourse: Course = {
  id: "algebra",
  title: "College Algebra",
  short: "Algebra",
  subtitle: "The language every other math course is written in",
  description: "A deep, practical path through college algebra: numbers and expressions, equations and inequalities, lines and systems, quadratics, functions, polynomials, exponentials and logarithms, and sequences — always explaining why each rule works.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10],
};
