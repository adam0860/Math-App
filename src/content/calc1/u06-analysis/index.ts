import type { Unit } from '../../types';
import { lesson as calc1Extrema } from './calc1-extrema';
import { lesson as calc1MeanValueTheorem } from './calc1-mean-value-theorem';
import { lesson as calc1DerivativeTests } from './calc1-derivative-tests';
import { lesson as calc1CurveSketching } from './calc1-curve-sketching';
import { lesson as calc1Lhopital } from './calc1-lhopital';
import { lesson as calc1Optimization } from './calc1-optimization';

export const unit: Unit = {
  id: "calc1-u06-analysis",
  title: "Analyzing Functions",
  description: "What derivatives say about shape: extrema, the Mean Value Theorem, concavity, curve sketching, L'Hôpital's rule and optimization.",
  icon: "🏔️",
  lessons: [calc1Extrema, calc1MeanValueTheorem, calc1DerivativeTests, calc1CurveSketching, calc1Lhopital, calc1Optimization],
};
