import type { Unit } from '../../types';
import { lesson as trigInverseFunctions } from './trig-inverse-functions';
import { lesson as trigAtan2 } from './trig-atan2';

export const unit: Unit = {
  id: "trig-u05-inverse-trig",
  title: "Inverse Trig Functions",
  description: "Getting angles back from ratios: arcsin, arccos, arctan, and the atan2 function every game engine uses.",
  icon: "↩️",
  lessons: [trigInverseFunctions, trigAtan2],
};
