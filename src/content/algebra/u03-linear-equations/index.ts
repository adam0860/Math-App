import type { Unit } from '../../types';
import { lesson as algLinearEquations } from './alg-linear-equations';
import { lesson as algLiteralEquations } from './alg-literal-equations';
import { lesson as algLinearInequalities } from './alg-linear-inequalities';
import { lesson as algAbsoluteValue } from './alg-absolute-value';

export const unit: Unit = {
  id: "alg-u03-linear-equations",
  title: "Linear Equations and Inequalities",
  description: "Solving equations by keeping them balanced, rearranging formulas, and handling inequalities and absolute values.",
  icon: "⚖️",
  lessons: [algLinearEquations, algLiteralEquations, algLinearInequalities, algAbsoluteValue],
};
