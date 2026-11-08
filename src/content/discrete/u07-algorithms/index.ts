import type { Unit } from '../../types';
import { lesson as dmBigO } from './dm-big-o';
import { lesson as dmAlgorithmAnalysis } from './dm-algorithm-analysis';
import { lesson as dmDivideConquer } from './dm-divide-conquer';

export const unit: Unit = {
  id: "dm-u07-algorithms",
  title: "Algorithms and Complexity",
  description: "Growth of functions and big-O, analyzing the running time of algorithms, and divide-and-conquer with the master theorem.",
  icon: "⚙️",
  lessons: [dmBigO, dmAlgorithmAnalysis, dmDivideConquer],
};
