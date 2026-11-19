import type { Unit } from '../../types';
import { lesson as statJoint } from './stat-joint';
import { lesson as statCovariance } from './stat-covariance';
import { lesson as statSums } from './stat-sums';

export const unit: Unit = {
  id: "stat-u05-joint",
  title: "Joint Distributions",
  description: "Joint, marginal and conditional distributions, covariance and correlation, and sums of random variables.",
  icon: "🔗",
  lessons: [statJoint, statCovariance, statSums],
};
