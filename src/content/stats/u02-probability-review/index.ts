import type { Unit } from '../../types';
import { lesson as statProbabilityRules } from './stat-probability-rules';
import { lesson as statBayesPractice } from './stat-bayes-practice';

export const unit: Unit = {
  id: "stat-u02-probability-review",
  title: "Probability Toolkit",
  description: "The probability rules and Bayes' theorem revisited for statistics, and thinking about probability with simulation.",
  icon: "🎲",
  lessons: [statProbabilityRules, statBayesPractice],
};
