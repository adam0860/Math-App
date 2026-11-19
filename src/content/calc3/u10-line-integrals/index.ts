import type { Unit } from '../../types';
import { lesson as calc3VectorFields } from './calc3-vector-fields';
import { lesson as calc3LineIntegrals } from './calc3-line-integrals';
import { lesson as calc3ConservativeFields } from './calc3-conservative-fields';

export const unit: Unit = {
  id: "calc3-u10-line-integrals",
  title: "Vector Fields and Line Integrals",
  description: "Vector fields, line integrals of scalar functions and vector fields, and conservative fields with the fundamental theorem for line integrals.",
  icon: "🌬️",
  lessons: [calc3VectorFields, calc3LineIntegrals, calc3ConservativeFields],
};
