import type { Unit } from '../../types';
import { lesson as calc3TripleIntegrals } from './calc3-triple-integrals';
import { lesson as calc3TripleCylindricalSpherical } from './calc3-triple-cylindrical-spherical';
import { lesson as calc3ChangeOfVariables } from './calc3-change-of-variables';

export const unit: Unit = {
  id: "calc3-u09-triple-integrals",
  title: "Triple Integrals and Change of Variables",
  description: "Triple integrals, triple integrals in cylindrical and spherical coordinates, and general changes of variables with the Jacobian.",
  icon: "📦",
  lessons: [calc3TripleIntegrals, calc3TripleCylindricalSpherical, calc3ChangeOfVariables],
};
