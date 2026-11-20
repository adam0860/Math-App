import type { Unit } from '../../types';
import { lesson as dsaLinkedLists } from './dsa-linked-lists';
import { lesson as dsaStacksQueues } from './dsa-stacks-queues';
import { lesson as dsaStlContainers } from './dsa-stl-containers';

export const unit: Unit = {
  id: "dsa-u02-linear",
  title: "Linear Structures",
  description: "Linked lists, stacks, queues, deques and ring buffers, and choosing the right standard container.",
  icon: "🔗",
  lessons: [dsaLinkedLists, dsaStacksQueues, dsaStlContainers],
};
