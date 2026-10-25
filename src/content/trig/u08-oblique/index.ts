import type { Unit } from '../../types';
import { lesson as trigLawOfSines } from './trig-law-of-sines';
import { lesson as trigLawOfCosines } from './trig-law-of-cosines';

export const unit: Unit = {
  id: "trig-u08-oblique",
  title: "Oblique Triangles",
  description: "Triangles without a right angle: the Law of Sines (and its ambiguous case), the Law of Cosines, and area.",
  icon: "🔺",
  lessons: [trigLawOfSines, trigLawOfCosines],
};
