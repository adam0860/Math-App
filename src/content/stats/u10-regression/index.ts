import type { Unit } from '../../types';
import { lesson as statLinearRegression } from './stat-linear-regression';
import { lesson as statRegressionInference } from './stat-regression-inference';
import { lesson as statMultipleRegression } from './stat-multiple-regression';

export const unit: Unit = {
  id: "stat-u10-regression",
  title: "Regression",
  description: "Correlation and least-squares lines, inference and diagnostics for regression, and multiple and logistic regression.",
  icon: "📉",
  lessons: [statLinearRegression, statRegressionInference, statMultipleRegression],
};
