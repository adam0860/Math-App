import type { Unit } from '../../types';
import { lesson as dsaBinarySearch } from './dsa-binary-search';
import { lesson as dsaArrayTechniques } from './dsa-array-techniques';

export const unit: Unit = {
  id: "dsa-u05-searching",
  title: "Searching and Array Techniques",
  description: "Binary search and its variants, then two pointers, sliding windows and prefix sums.",
  icon: "🔍",
  lessons: [dsaBinarySearch, dsaArrayTechniques],
};
