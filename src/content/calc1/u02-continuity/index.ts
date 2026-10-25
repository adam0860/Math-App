import type { Unit } from '../../types';
import { lesson as calc1Continuity } from './calc1-continuity';
import { lesson as calc1Ivt } from './calc1-ivt';

export const unit: Unit = {
  id: "calc1-u02-continuity",
  title: "Continuity",
  description: "Functions you can draw without lifting your pen, the kinds of breaks, and the Intermediate Value Theorem.",
  icon: "✏️",
  lessons: [calc1Continuity, calc1Ivt],
};
