import type { Unit } from '../../types';
import { lesson as dsaElementarySorts } from './dsa-elementary-sorts';
import { lesson as dsaMergeQuick } from './dsa-merge-quick';
import { lesson as dsaLinearSorts } from './dsa-linear-sorts';

export const unit: Unit = {
  id: "dsa-u04-sorting",
  title: "Sorting",
  description: "Elementary sorts and invariants, merge sort and quicksort, and the comparison lower bound with counting and radix sort.",
  icon: "📶",
  lessons: [dsaElementarySorts, dsaMergeQuick, dsaLinearSorts],
};
