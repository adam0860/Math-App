import type { Unit } from '../../types';
import { lesson as calc3TangentPlanes } from './calc3-tangent-planes';
import { lesson as calc3ChainRule } from './calc3-chain-rule';
import { lesson as calc3Gradient } from './calc3-gradient';

export const unit: Unit = {
  id: "calc3-u05-gradient",
  title: "Linearization, the Chain Rule and the Gradient",
  description: "Tangent planes and linear approximation, the multivariable chain rule, and directional derivatives with the gradient.",
  icon: "🧭",
  lessons: [calc3TangentPlanes, calc3ChainRule, calc3Gradient],
};
