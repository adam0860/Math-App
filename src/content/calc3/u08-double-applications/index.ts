import type { Unit } from '../../types';
import { lesson as calc3DoubleIntegralApplications } from './calc3-double-integral-applications';
import { lesson as calc3SurfaceArea } from './calc3-surface-area';

export const unit: Unit = {
  id: "calc3-u08-double-applications",
  title: "Applications of Double Integrals",
  description: "Mass, center of mass, moments of inertia and probability with double integrals, and surface area.",
  icon: "⚖️",
  lessons: [calc3DoubleIntegralApplications, calc3SurfaceArea],
};
