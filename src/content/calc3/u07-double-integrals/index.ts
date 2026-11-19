import type { Unit } from '../../types';
import { lesson as calc3DoubleIntegrals } from './calc3-double-integrals';
import { lesson as calc3GeneralRegions } from './calc3-general-regions';
import { lesson as calc3PolarIntegrals } from './calc3-polar-integrals';

export const unit: Unit = {
  id: "calc3-u07-double-integrals",
  title: "Double Integrals",
  description: "Double integrals over rectangles and general regions, reversing the order of integration, and double integrals in polar coordinates.",
  icon: "🧱",
  lessons: [calc3DoubleIntegrals, calc3GeneralRegions, calc3PolarIntegrals],
};
