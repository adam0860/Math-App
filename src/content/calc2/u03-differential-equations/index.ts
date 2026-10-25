import type { Unit } from '../../types';
import { lesson as calc2DiffeqIntro } from './calc2-diffeq-intro';
import { lesson as calc2SeparableEquations } from './calc2-separable-equations';
import { lesson as calc2GrowthModels } from './calc2-growth-models';

export const unit: Unit = {
  id: "calc2-u03-differential-equations",
  title: "Differential Equations",
  description: "Equations about rates of change: slope fields, Euler's method (the heart of game physics), separable equations and growth models.",
  icon: "🌀",
  lessons: [calc2DiffeqIntro, calc2SeparableEquations, calc2GrowthModels],
};
