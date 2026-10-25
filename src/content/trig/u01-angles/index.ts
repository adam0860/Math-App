import type { Unit } from '../../types';
import { lesson as trigAnglesRadians } from './trig-angles-radians';
import { lesson as trigArcLength } from './trig-arc-length';

export const unit: Unit = {
  id: "trig-u01-angles",
  title: "Angles and Radians",
  description: "Measuring rotation in degrees and radians, arc length, sector area and angular speed.",
  icon: "📐",
  lessons: [trigAnglesRadians, trigArcLength],
};
