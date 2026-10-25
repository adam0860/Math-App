import type { Unit } from '../../types';
import { lesson as trigBasicEquations } from './trig-basic-equations';
import { lesson as trigAdvancedEquations } from './trig-advanced-equations';

export const unit: Unit = {
  id: "trig-u07-equations",
  title: "Trigonometric Equations",
  description: "Solving equations with infinitely many solutions: general solutions, intervals, and identity-powered strategies.",
  icon: "🎲",
  lessons: [trigBasicEquations, trigAdvancedEquations],
};
