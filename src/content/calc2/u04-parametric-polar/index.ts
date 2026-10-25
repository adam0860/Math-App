import type { Unit } from '../../types';
import { lesson as calc2ParametricCalculus } from './calc2-parametric-calculus';
import { lesson as calc2PolarCalculus } from './calc2-polar-calculus';

export const unit: Unit = {
  id: "calc2-u04-parametric-polar",
  title: "Parametric Equations and Polar Coordinates",
  description: "Curves traced over time and in polar form, and how to do calculus on them.",
  icon: "🌸",
  lessons: [calc2ParametricCalculus, calc2PolarCalculus],
};
