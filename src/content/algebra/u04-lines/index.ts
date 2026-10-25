import type { Unit } from '../../types';
import { lesson as algCoordinatePlane } from './alg-coordinate-plane';
import { lesson as algSlope } from './alg-slope';
import { lesson as algLineEquations } from './alg-line-equations';
import { lesson as algCircles } from './alg-circles';

export const unit: Unit = {
  id: "alg-u04-lines",
  title: "Lines and the Coordinate Plane",
  description: "Points, distance, slope and the equations of lines and circles.",
  icon: "📈",
  lessons: [algCoordinatePlane, algSlope, algLineEquations, algCircles],
};
