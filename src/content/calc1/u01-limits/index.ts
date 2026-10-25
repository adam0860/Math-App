import type { Unit } from '../../types';
import { lesson as calc1LimitsIntro } from './calc1-limits-intro';
import { lesson as calc1OneSidedLimits } from './calc1-one-sided-limits';
import { lesson as calc1LimitLaws } from './calc1-limit-laws';
import { lesson as calc1SqueezeTheorem } from './calc1-squeeze-theorem';
import { lesson as calc1LimitsAtInfinity } from './calc1-limits-at-infinity';
import { lesson as calc1EpsilonDelta } from './calc1-epsilon-delta';

export const unit: Unit = {
  id: "calc1-u01-limits",
  title: "Limits",
  description: "The idea calculus is built on: what a function approaches, how to compute it, and what happens at infinity.",
  icon: "🎯",
  lessons: [calc1LimitsIntro, calc1OneSidedLimits, calc1LimitLaws, calc1SqueezeTheorem, calc1LimitsAtInfinity, calc1EpsilonDelta],
};
