import type { Unit } from '../../types';
import { lesson as statBayesian } from './stat-bayesian';
import { lesson as statSimulation } from './stat-simulation';
import { lesson as statGamesMl } from './stat-games-ml';

export const unit: Unit = {
  id: "stat-u11-stats-computing",
  title: "Statistics for Computing",
  description: "Bayesian inference, simulation and random-variate generation, and statistics in games and machine learning.",
  icon: "🖥️",
  lessons: [statBayesian, statSimulation, statGamesMl],
};
