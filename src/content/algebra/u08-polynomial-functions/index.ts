import type { Unit } from '../../types';
import { lesson as algPolynomialFunctions } from './alg-polynomial-functions';
import { lesson as algPolynomialDivision } from './alg-polynomial-division';
import { lesson as algPolynomialZeros } from './alg-polynomial-zeros';
import { lesson as algRationalFunctions } from './alg-rational-functions';

export const unit: Unit = {
  id: "alg-u08-polynomial-functions",
  title: "Polynomial and Rational Functions",
  description: "End behavior, zeros and division of polynomials, then rational functions and their asymptotes.",
  icon: "〰️",
  lessons: [algPolynomialFunctions, algPolynomialDivision, algPolynomialZeros, algRationalFunctions],
};
