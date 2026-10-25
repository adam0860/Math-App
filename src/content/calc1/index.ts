import type { Course } from '../types';
import { unit as u01 } from './u01-limits';
import { unit as u02 } from './u02-continuity';
import { unit as u03 } from './u03-derivative';
import { unit as u04 } from './u04-rules';
import { unit as u05 } from './u05-applications';
import { unit as u06 } from './u06-analysis';
import { unit as u07 } from './u07-integrals';
import { unit as u08 } from './u08-integral-applications';

export const calc1Course: Course = {
  id: "calc1",
  title: "Calculus I",
  short: "Calc I",
  subtitle: "Limits, derivatives and the beginning of integrals",
  description: "The mathematics of change: limits and continuity, the derivative and every rule for computing it, using derivatives to analyze and optimize, and the definite integral through the Fundamental Theorem of Calculus.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08],
};
