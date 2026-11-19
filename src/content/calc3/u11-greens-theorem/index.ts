import type { Unit } from '../../types';
import { lesson as calc3GreensTheorem } from './calc3-greens-theorem';
import { lesson as calc3CurlDivergence } from './calc3-curl-divergence';

export const unit: Unit = {
  id: "calc3-u11-greens-theorem",
  title: "Green's Theorem, Curl and Divergence",
  description: "Green's theorem in the plane, and curl and divergence as measures of rotation and expansion.",
  icon: "🔄",
  lessons: [calc3GreensTheorem, calc3CurlDivergence],
};
