import type { Unit } from '../../types';
import { lesson as calc1RelatedRates } from './calc1-related-rates';
import { lesson as calc1LinearApproximation } from './calc1-linear-approximation';
import { lesson as calc1NewtonsMethod } from './calc1-newtons-method';

export const unit: Unit = {
  id: "calc1-u05-applications",
  title: "Derivatives in Action",
  description: "Related rates, linear approximation, and Newton's method — derivatives solving real problems.",
  icon: "🛠️",
  lessons: [calc1RelatedRates, calc1LinearApproximation, calc1NewtonsMethod],
};
