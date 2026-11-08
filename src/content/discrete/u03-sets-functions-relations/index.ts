import type { Unit } from '../../types';
import { lesson as dmSets } from './dm-sets';
import { lesson as dmFunctions } from './dm-functions';
import { lesson as dmRelations } from './dm-relations';
import { lesson as dmEquivalenceOrders } from './dm-equivalence-orders';

export const unit: Unit = {
  id: "dm-u03-sets-functions-relations",
  title: "Sets, Functions and Relations",
  description: "Sets and set operations, functions and cardinality, relations and their properties, and equivalence relations and partial orders.",
  icon: "🔵",
  lessons: [dmSets, dmFunctions, dmRelations, dmEquivalenceOrders],
};
