import type { Course } from '../types';
import { unit as u01 } from './u01-logic';
import { unit as u02 } from './u02-proofs';
import { unit as u03 } from './u03-sets-functions-relations';
import { unit as u04 } from './u04-number-theory';
import { unit as u05 } from './u05-counting';
import { unit as u06 } from './u06-probability';
import { unit as u07 } from './u07-algorithms';
import { unit as u08 } from './u08-recurrences';
import { unit as u09 } from './u09-graphs';
import { unit as u10 } from './u10-trees';
import { unit as u11 } from './u11-computation';

export const discreteCourse: Course = {
  id: "discrete",
  title: "Discrete Mathematics",
  short: "Discrete",
  subtitle: "Logic, proofs, counting and graphs — the math of computer science",
  description: "The discrete mathematics behind computer science: logic and proofs, sets, functions and relations, number theory and cryptography, counting and probability, algorithms and big-O, recurrences, graphs and trees, and Boolean algebra, automata and computability.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11],
};
