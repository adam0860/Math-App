import type { Unit } from '../../types';
import { lesson as trigUnitCircle } from './trig-unit-circle';
import { lesson as trigReferenceAngles } from './trig-reference-angles';
import { lesson as trigSixFunctions } from './trig-six-functions';

export const unit: Unit = {
  id: "trig-u03-unit-circle",
  title: "The Unit Circle",
  description: "Trig functions for any angle: the unit circle, reference angles, signs by quadrant, and all six functions.",
  icon: "⭕",
  lessons: [trigUnitCircle, trigReferenceAngles, trigSixFunctions],
};
