import type { Unit } from '../../types';
import { lesson as calc3StokesTheorem } from './calc3-stokes-theorem';
import { lesson as calc3DivergenceTheorem } from './calc3-divergence-theorem';
import { lesson as calc3VectorCalculusApplications } from './calc3-vector-calculus-applications';

export const unit: Unit = {
  id: "calc3-u13-stokes-divergence",
  title: "Stokes' and Divergence Theorems",
  description: "Stokes' theorem, the divergence theorem, and how vector calculus drives physics, fluids and graphics.",
  icon: "🌊",
  lessons: [calc3StokesTheorem, calc3DivergenceTheorem, calc3VectorCalculusApplications],
};
