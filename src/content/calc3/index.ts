import type { Course } from '../types';
import { unit as u01 } from './u01-space-vectors';
import { unit as u02 } from './u02-surfaces';
import { unit as u03 } from './u03-vector-functions';
import { unit as u04 } from './u04-partial-derivatives';
import { unit as u05 } from './u05-gradient';
import { unit as u06 } from './u06-optimization';
import { unit as u07 } from './u07-double-integrals';
import { unit as u08 } from './u08-double-applications';
import { unit as u09 } from './u09-triple-integrals';
import { unit as u10 } from './u10-line-integrals';
import { unit as u11 } from './u11-greens-theorem';
import { unit as u12 } from './u12-surface-integrals';
import { unit as u13 } from './u13-stokes-divergence';

export const calc3Course: Course = {
  id: "calc3",
  title: "Calculus III",
  short: "Calc III",
  subtitle: "Multivariable and vector calculus: surfaces, gradients and flux",
  description: "Calculus in three dimensions: vectors, lines, planes and surfaces, vector-valued functions and curvature, partial derivatives, gradients and optimization (including gradient descent), double and triple integrals with polar, cylindrical and spherical coordinates, vector fields, line and surface integrals, and the theorems of Green, Stokes and Gauss.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12, u13],
};
