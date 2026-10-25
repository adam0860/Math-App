import type { Course } from '../types';
import { unit as u01 } from './u01-volumes';
import { unit as u02 } from './u02-techniques';
import { unit as u03 } from './u03-differential-equations';
import { unit as u04 } from './u04-parametric-polar';
import { unit as u05 } from './u05-series';
import { unit as u06 } from './u06-power-series';

export const calc2Course: Course = {
  id: "calc2",
  title: "Calculus II",
  short: "Calc II",
  subtitle: "Integration techniques, differential equations and infinite series",
  description: "Volumes and work, the full toolkit of integration techniques, numerical methods, differential equations, parametric and polar calculus, and sequences, series, and Taylor series.",
  units: [u01, u02, u03, u04, u05, u06],
};
