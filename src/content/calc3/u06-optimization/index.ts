import type { Unit } from '../../types';
import { lesson as calc3Extrema } from './calc3-extrema';
import { lesson as calc3LagrangeMultipliers } from './calc3-lagrange-multipliers';
import { lesson as calc3GradientDescent } from './calc3-gradient-descent';

export const unit: Unit = {
  id: "calc3-u06-optimization",
  title: "Optimization",
  description: "Local and absolute extrema with the second-derivative test, Lagrange multipliers, and gradient descent for machine learning and games.",
  icon: "⛰️",
  lessons: [calc3Extrema, calc3LagrangeMultipliers, calc3GradientDescent],
};
