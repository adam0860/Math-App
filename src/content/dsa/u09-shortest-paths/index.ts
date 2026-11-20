import type { Unit } from '../../types';
import { lesson as dsaDijkstra } from './dsa-dijkstra';
import { lesson as dsaBellmanFordFloyd } from './dsa-bellman-ford-floyd';
import { lesson as dsaAstar } from './dsa-astar';

export const unit: Unit = {
  id: "dsa-u09-shortest-paths",
  title: "Shortest Paths and Pathfinding",
  description: "Dijkstra's algorithm, Bellman–Ford and Floyd–Warshall, and A* pathfinding for games.",
  icon: "🗺️",
  lessons: [dsaDijkstra, dsaBellmanFordFloyd, dsaAstar],
};
