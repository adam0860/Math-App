import type { Unit } from '../../types';
import { lesson as dsaDpFundamentals } from './dsa-dp-fundamentals';
import { lesson as dsaDpSequences } from './dsa-dp-sequences';
import { lesson as dsaDpKnapsack } from './dsa-dp-knapsack';

export const unit: Unit = {
  id: "dsa-u11-dynamic-programming",
  title: "Dynamic Programming",
  description: "Memoization and tabulation, DP on sequences (LIS, LCS, edit distance), and knapsack and grid problems.",
  icon: "🧩",
  lessons: [dsaDpFundamentals, dsaDpSequences, dsaDpKnapsack],
};
