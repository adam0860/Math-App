import type { Unit } from '../../types';
import { lesson as trigRightTriangleRatios } from './trig-right-triangle-ratios';
import { lesson as trigSpecialTriangles } from './trig-special-triangles';
import { lesson as trigSolvingRightTriangles } from './trig-solving-right-triangles';

export const unit: Unit = {
  id: "trig-u02-right-triangles",
  title: "Right Triangle Trigonometry",
  description: "Sine, cosine and tangent as ratios of sides, the special triangles, and solving real triangles.",
  icon: "◺",
  lessons: [trigRightTriangleRatios, trigSpecialTriangles, trigSolvingRightTriangles],
};
