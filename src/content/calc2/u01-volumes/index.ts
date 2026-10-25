import type { Unit } from '../../types';
import { lesson as calc2VolumesDisks } from './calc2-volumes-disks';
import { lesson as calc2VolumesShells } from './calc2-volumes-shells';
import { lesson as calc2ArcLength } from './calc2-arc-length';
import { lesson as calc2Work } from './calc2-work';

export const unit: Unit = {
  id: "calc2-u01-volumes",
  title: "Applications of Integration",
  description: "Slicing solids into disks, washers and shells, measuring curves, and computing work.",
  icon: "🧊",
  lessons: [calc2VolumesDisks, calc2VolumesShells, calc2ArcLength, calc2Work],
};
