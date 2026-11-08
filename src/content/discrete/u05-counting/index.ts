import type { Unit } from '../../types';
import { lesson as dmCountingRules } from './dm-counting-rules';
import { lesson as dmPermutationsCombinations } from './dm-permutations-combinations';
import { lesson as dmBinomialTheorem } from './dm-binomial-theorem';
import { lesson as dmInclusionExclusion } from './dm-inclusion-exclusion';

export const unit: Unit = {
  id: "dm-u05-counting",
  title: "Counting",
  description: "The product and sum rules and the pigeonhole principle, permutations and combinations, the binomial theorem, and inclusion–exclusion and combinations with repetition.",
  icon: "🎲",
  lessons: [dmCountingRules, dmPermutationsCombinations, dmBinomialTheorem, dmInclusionExclusion],
};
