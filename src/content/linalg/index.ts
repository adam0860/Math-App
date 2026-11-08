import type { Course } from '../types';
import { unit as u01 } from './u01-vectors';
import { unit as u02 } from './u02-systems';
import { unit as u03 } from './u03-transformations';
import { unit as u04 } from './u04-matrix-algebra';
import { unit as u05 } from './u05-determinants';
import { unit as u06 } from './u06-vector-spaces';
import { unit as u07 } from './u07-eigen';
import { unit as u08 } from './u08-orthogonality';

export const linalgCourse: Course = {
  id: "linalg",
  title: "Linear Algebra",
  short: "Lin Alg",
  subtitle: "Vectors, matrices and transformations — the math inside every game engine",
  description: "Vectors and the dot and cross products, solving linear systems by row reduction, linear transformations and the matrices that drive 2D and 3D graphics, determinants, vector spaces, eigenvalues, orthogonality, least squares and the SVD.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08],
};
