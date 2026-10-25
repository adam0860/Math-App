import type { Unit } from '../../types';
import { lesson as trigFundamentalIdentities } from './trig-fundamental-identities';
import { lesson as trigVerifyingIdentities } from './trig-verifying-identities';
import { lesson as trigSumDifference } from './trig-sum-difference';
import { lesson as trigDoubleHalfAngle } from './trig-double-half-angle';

export const unit: Unit = {
  id: "trig-u06-identities",
  title: "Trigonometric Identities",
  description: "The fundamental identities, proving identities, and the sum, difference, double- and half-angle formulas.",
  icon: "🔑",
  lessons: [trigFundamentalIdentities, trigVerifyingIdentities, trigSumDifference, trigDoubleHalfAngle],
};
