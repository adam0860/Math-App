import type { Unit } from '../../types';
import { lesson as dsaAnalysis } from './dsa-analysis';
import { lesson as dsaArraysMemory } from './dsa-arrays-memory';
import { lesson as dsaRecursion } from './dsa-recursion';

export const unit: Unit = {
  id: "dsa-u01-foundations",
  title: "Foundations",
  description: "Analyzing algorithms in practice — asymptotics, amortized cost and the memory hierarchy — then arrays and dynamic arrays, and recursion.",
  icon: "📐",
  lessons: [dsaAnalysis, dsaArraysMemory, dsaRecursion],
};
