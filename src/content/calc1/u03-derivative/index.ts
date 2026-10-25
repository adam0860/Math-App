import type { Unit } from '../../types';
import { lesson as calc1TangentLines } from './calc1-tangent-lines';
import { lesson as calc1DerivativeFunction } from './calc1-derivative-function';
import { lesson as calc1RatesOfChange } from './calc1-rates-of-change';

export const unit: Unit = {
  id: "calc1-u03-derivative",
  title: "The Derivative",
  description: "Instantaneous rate of change: tangent lines, the limit definition, the derivative as a function, and rates in the real world.",
  icon: "📉",
  lessons: [calc1TangentLines, calc1DerivativeFunction, calc1RatesOfChange],
};
