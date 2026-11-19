import type { Unit } from '../../types';
import { lesson as statDiscreteRv } from './stat-discrete-rv';
import { lesson as statBinomialFamily } from './stat-binomial-family';
import { lesson as statPoisson } from './stat-poisson';

export const unit: Unit = {
  id: "stat-u03-discrete-rv",
  title: "Discrete Random Variables",
  description: "Probability mass functions, expectation and variance rules, the binomial family, and the Poisson distribution.",
  icon: "🔢",
  lessons: [statDiscreteRv, statBinomialFamily, statPoisson],
};
