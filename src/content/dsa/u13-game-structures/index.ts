import type { Unit } from '../../types';
import { lesson as dsaSpatialStructures } from './dsa-spatial-structures';
import { lesson as dsaEngineStructures } from './dsa-engine-structures';

export const unit: Unit = {
  id: "dsa-u13-game-structures",
  title: "Data Structures for Games",
  description: "Spatial partitioning (grids, quadtrees, BVHs, k-d trees) and engine data structures: ECS, pools, free lists and generational handles.",
  icon: "🎮",
  lessons: [dsaSpatialStructures, dsaEngineStructures],
};
