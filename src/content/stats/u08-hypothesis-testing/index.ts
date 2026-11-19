import type { Unit } from '../../types';
import { lesson as statTestingLogic } from './stat-testing-logic';
import { lesson as statTTests } from './stat-t-tests';
import { lesson as statAbTesting } from './stat-ab-testing';

export const unit: Unit = {
  id: "stat-u08-hypothesis-testing",
  title: "Hypothesis Testing",
  description: "The logic of significance tests and p-values, t-tests and tests for proportions, and A/B testing done right.",
  icon: "⚖️",
  lessons: [statTestingLogic, statTTests, statAbTesting],
};
