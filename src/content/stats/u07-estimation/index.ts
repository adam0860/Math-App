import type { Unit } from '../../types';
import { lesson as statSamplingDistributions } from './stat-sampling-distributions';
import { lesson as statPointEstimation } from './stat-point-estimation';
import { lesson as statConfidenceIntervals } from './stat-confidence-intervals';

export const unit: Unit = {
  id: "stat-u07-estimation",
  title: "Estimation",
  description: "Sampling distributions and standard error, point estimators and maximum likelihood, and confidence intervals.",
  icon: "📏",
  lessons: [statSamplingDistributions, statPointEstimation, statConfidenceIntervals],
};
