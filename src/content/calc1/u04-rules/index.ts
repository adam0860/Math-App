import type { Unit } from '../../types';
import { lesson as calc1PowerRule } from './calc1-power-rule';
import { lesson as calc1ProductQuotient } from './calc1-product-quotient';
import { lesson as calc1TrigDerivatives } from './calc1-trig-derivatives';
import { lesson as calc1ChainRule } from './calc1-chain-rule';
import { lesson as calc1ImplicitDifferentiation } from './calc1-implicit-differentiation';
import { lesson as calc1ExpLogDerivatives } from './calc1-exp-log-derivatives';
import { lesson as calc1InverseTrigDerivatives } from './calc1-inverse-trig-derivatives';

export const unit: Unit = {
  id: "calc1-u04-rules",
  title: "Differentiation Rules",
  description: "Shortcuts that make derivatives fast: power, product, quotient and chain rules, implicit differentiation, and the derivatives of every elementary function.",
  icon: "⚙️",
  lessons: [calc1PowerRule, calc1ProductQuotient, calc1TrigDerivatives, calc1ChainRule, calc1ImplicitDifferentiation, calc1ExpLogDerivatives, calc1InverseTrigDerivatives],
};
