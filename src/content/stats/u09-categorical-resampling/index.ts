import type { Unit } from '../../types';
import { lesson as statChiSquare } from './stat-chi-square';
import { lesson as statBootstrap } from './stat-bootstrap';

export const unit: Unit = {
  id: "stat-u09-categorical-resampling",
  title: "Categorical Data and Resampling",
  description: "Chi-square tests for categorical data, and nonparametric methods, permutation tests and the bootstrap.",
  icon: "🧮",
  lessons: [statChiSquare, statBootstrap],
};
