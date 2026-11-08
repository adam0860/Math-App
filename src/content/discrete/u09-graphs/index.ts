import type { Unit } from '../../types';
import { lesson as dmGraphBasics } from './dm-graph-basics';
import { lesson as dmConnectivityPaths } from './dm-connectivity-paths';
import { lesson as dmShortestPaths } from './dm-shortest-paths';
import { lesson as dmPlanarityColoring } from './dm-planarity-coloring';

export const unit: Unit = {
  id: "dm-u09-graphs",
  title: "Graphs",
  description: "Graph terminology and representations, connectivity and Euler and Hamilton paths, shortest paths, and planarity and coloring.",
  icon: "🕸️",
  lessons: [dmGraphBasics, dmConnectivityPaths, dmShortestPaths, dmPlanarityColoring],
};
