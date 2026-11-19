import type { Unit } from '../../types';
import { lesson as physUnitsDimensions } from './phys-units-dimensions';
import { lesson as physVectors } from './phys-vectors';

export const unit: Unit = {
  id: "phys-u01-measurement-vectors",
  title: "Measurement and Vectors",
  description: "Units, dimensional analysis and estimation, then vectors as the language of physics: components, the dot product and the cross product.",
  icon: "📏",
  lessons: [physUnitsDimensions, physVectors],
};
