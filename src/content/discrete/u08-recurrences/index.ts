import type { Unit } from '../../types';
import { lesson as dmModelingRecurrences } from './dm-modeling-recurrences';
import { lesson as dmSolvingRecurrences } from './dm-solving-recurrences';

export const unit: Unit = {
  id: "dm-u08-recurrences",
  title: "Recurrence Relations",
  description: "Modeling problems with recurrences, and solving linear recurrences with characteristic equations and generating functions.",
  icon: "🔁",
  lessons: [dmModelingRecurrences, dmSolvingRecurrences],
};
