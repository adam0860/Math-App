import type { Unit } from '../../types';
import { lesson as dmTrees } from './dm-trees';
import { lesson as dmTraversalsBst } from './dm-traversals-bst';
import { lesson as dmSpanningTrees } from './dm-spanning-trees';

export const unit: Unit = {
  id: "dm-u10-trees",
  title: "Trees",
  description: "Properties of trees, traversals and binary search trees, and minimum spanning trees.",
  icon: "🌳",
  lessons: [dmTrees, dmTraversalsBst, dmSpanningTrees],
};
