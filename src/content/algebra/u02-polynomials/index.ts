import type { Unit } from '../../types';
import { lesson as algExpressions } from './alg-expressions';
import { lesson as algPolynomialArithmetic } from './alg-polynomial-arithmetic';
import { lesson as algFactoringBasics } from './alg-factoring-basics';
import { lesson as algFactoringTrinomials } from './alg-factoring-trinomials';
import { lesson as algRationalExpressions } from './alg-rational-expressions';

export const unit: Unit = {
  id: "alg-u02-polynomials",
  title: "Expressions and Polynomials",
  description: "Working with variables: simplifying expressions, polynomial arithmetic, factoring and rational expressions.",
  icon: "🧮",
  lessons: [algExpressions, algPolynomialArithmetic, algFactoringBasics, algFactoringTrinomials, algRationalExpressions],
};
