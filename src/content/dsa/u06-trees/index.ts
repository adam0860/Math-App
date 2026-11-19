import type { Unit } from '../../types';
import { lesson as dsaBinaryTrees } from './dsa-binary-trees';
import { lesson as dsaBst } from './dsa-bst';
import { lesson as dsaBalancedTrees } from './dsa-balanced-trees';

export const unit: Unit = {
  id: "dsa-u06-trees",
  title: "Trees and Search Trees",
  description: "Binary trees and traversals, binary search tree operations, and self-balancing trees.",
  icon: "🌳",
  lessons: [dsaBinaryTrees, dsaBst, dsaBalancedTrees],
};
