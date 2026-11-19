import type { Unit } from '../../types';
import { lesson as calc33dCoordinates } from './calc3-3d-coordinates';
import { lesson as calc3Vectors3d } from './calc3-vectors-3d';
import { lesson as calc3LinesPlanes } from './calc3-lines-planes';

export const unit: Unit = {
  id: "calc3-u01-space-vectors",
  title: "Vectors and Geometry of Space",
  description: "Three-dimensional coordinates, vectors with the dot and cross products, and equations of lines and planes.",
  icon: "🧊",
  lessons: [calc33dCoordinates, calc3Vectors3d, calc3LinesPlanes],
};
