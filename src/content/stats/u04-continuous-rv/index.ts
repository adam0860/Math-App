import type { Unit } from '../../types';
import { lesson as statContinuousRv } from './stat-continuous-rv';
import { lesson as statUniformExponential } from './stat-uniform-exponential';
import { lesson as statNormal } from './stat-normal';

export const unit: Unit = {
  id: "stat-u04-continuous-rv",
  title: "Continuous Random Variables",
  description: "Density functions and expectation with calculus, the uniform and exponential distributions, and the normal distribution.",
  icon: "📈",
  lessons: [statContinuousRv, statUniformExponential, statNormal],
};
