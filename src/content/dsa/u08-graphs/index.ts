import type { Unit } from '../../types';
import { lesson as dsaGraphTraversal } from './dsa-graph-traversal';
import { lesson as dsaDfsApplications } from './dsa-dfs-applications';
import { lesson as dsaUnionFind } from './dsa-union-find';

export const unit: Unit = {
  id: "dsa-u08-graphs",
  title: "Graph Algorithms",
  description: "Graph representations with BFS and DFS, topological sort and strongly connected components, and union–find.",
  icon: "🕸️",
  lessons: [dsaGraphTraversal, dsaDfsApplications, dsaUnionFind],
};
