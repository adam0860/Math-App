import type { Unit } from '../../types';
import { lesson as laEigenvalues } from './la-eigenvalues';
import { lesson as laCharacteristicEquation } from './la-characteristic-equation';
import { lesson as laDiagonalization } from './la-diagonalization';
import { lesson as laEigenApplications } from './la-eigen-applications';

export const unit: Unit = {
  id: "la-u07-eigen",
  title: "Eigenvalues and Eigenvectors",
  description: "Directions a matrix only stretches, the characteristic equation, diagonalization, and long-run behavior of dynamical systems and Markov chains.",
  icon: "🎯",
  lessons: [laEigenvalues, laCharacteristicEquation, laDiagonalization, laEigenApplications],
};
