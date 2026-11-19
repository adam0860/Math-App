import type { Unit } from '../../types';
import { lesson as statDataSampling } from './stat-data-sampling';
import { lesson as statSummaries } from './stat-summaries';
import { lesson as statVisualizing } from './stat-visualizing';

export const unit: Unit = {
  id: "stat-u01-describing-data",
  title: "Describing Data",
  description: "Kinds of data and how they're collected, summarizing data with center and spread, and visualizing distributions honestly.",
  icon: "📊",
  lessons: [statDataSampling, statSummaries, statVisualizing],
};
