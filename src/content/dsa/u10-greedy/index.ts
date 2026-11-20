import type { Unit } from '../../types';
import { lesson as dsaGreedy } from './dsa-greedy';
import { lesson as dsaMst } from './dsa-mst';

export const unit: Unit = {
  id: "dsa-u10-greedy",
  title: "Greedy Algorithms",
  description: "The greedy method with exchange arguments, Huffman coding, and minimum spanning trees with Prim and Kruskal.",
  icon: "🪙",
  lessons: [dsaGreedy, dsaMst],
};
