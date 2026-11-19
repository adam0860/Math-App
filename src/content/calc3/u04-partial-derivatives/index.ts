import type { Unit } from '../../types';
import { lesson as calc3FunctionsSeveralVariables } from './calc3-functions-several-variables';
import { lesson as calc3LimitsContinuity } from './calc3-limits-continuity';
import { lesson as calc3PartialDerivatives } from './calc3-partial-derivatives';

export const unit: Unit = {
  id: "calc3-u04-partial-derivatives",
  title: "Functions of Several Variables",
  description: "Graphs and level curves, limits and continuity in two variables, and partial derivatives.",
  icon: "🗺️",
  lessons: [calc3FunctionsSeveralVariables, calc3LimitsContinuity, calc3PartialDerivatives],
};
