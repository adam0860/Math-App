import type { Unit } from '../../types';
import { lesson as dmPropositionalLogic } from './dm-propositional-logic';
import { lesson as dmLogicalEquivalence } from './dm-logical-equivalence';
import { lesson as dmQuantifiers } from './dm-quantifiers';
import { lesson as dmRulesOfInference } from './dm-rules-of-inference';

export const unit: Unit = {
  id: "dm-u01-logic",
  title: "Logic",
  description: "Propositions and connectives, truth tables and logical equivalence, predicates and quantifiers, and the rules of inference that every proof is built from.",
  icon: "🧠",
  lessons: [dmPropositionalLogic, dmLogicalEquivalence, dmQuantifiers, dmRulesOfInference],
};
