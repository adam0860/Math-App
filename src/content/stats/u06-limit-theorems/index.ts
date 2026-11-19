import type { Unit } from '../../types';
import { lesson as statLln } from './stat-lln';
import { lesson as statClt } from './stat-clt';

export const unit: Unit = {
  id: "stat-u06-limit-theorems",
  title: "Limit Theorems",
  description: "The law of large numbers, the central limit theorem, and normal approximations.",
  icon: "🎯",
  lessons: [statLln, statClt],
};
