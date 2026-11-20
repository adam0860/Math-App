import type { Unit } from '../../types';
import { lesson as dsaHeaps } from './dsa-heaps';
import { lesson as dsaTriesRangeTrees } from './dsa-tries-range-trees';

export const unit: Unit = {
  id: "dsa-u07-heaps-tries",
  title: "Heaps, Tries and Range Trees",
  description: "Binary heaps and priority queues, then tries, segment trees and Fenwick trees.",
  icon: "⛰️",
  lessons: [dsaHeaps, dsaTriesRangeTrees],
};
