import type { Unit } from '../../types';
import { lesson as calc3VectorFunctions } from './calc3-vector-functions';
import { lesson as calc3ArcLengthCurvature } from './calc3-arc-length-curvature';
import { lesson as calc3MotionInSpace } from './calc3-motion-in-space';

export const unit: Unit = {
  id: "calc3-u03-vector-functions",
  title: "Vector-Valued Functions",
  description: "Space curves and their calculus, arc length and curvature with the TNB frame, and motion in space.",
  icon: "🌀",
  lessons: [calc3VectorFunctions, calc3ArcLengthCurvature, calc3MotionInSpace],
};
