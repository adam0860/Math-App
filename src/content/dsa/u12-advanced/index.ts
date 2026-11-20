import type { Unit } from '../../types';
import { lesson as dsaBacktracking } from './dsa-backtracking';
import { lesson as dsaStringAlgorithms } from './dsa-string-algorithms';
import { lesson as dsaNpCompleteness } from './dsa-np-completeness';

export const unit: Unit = {
  id: "dsa-u12-advanced",
  title: "Backtracking, Strings and Hard Problems",
  description: "Backtracking and branch and bound, string searching with KMP and rolling hashes, and NP-completeness with practical ways around it.",
  icon: "♟️",
  lessons: [dsaBacktracking, dsaStringAlgorithms, dsaNpCompleteness],
};
