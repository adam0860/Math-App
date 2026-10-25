import type { Unit } from '../../types';
import { lesson as calc1NetChange } from './calc1-net-change';
import { lesson as calc1AreaBetweenCurves } from './calc1-area-between-curves';
import { lesson as calc1AverageValue } from './calc1-average-value';

export const unit: Unit = {
  id: "calc1-u08-integral-applications",
  title: "First Applications of Integrals",
  description: "Net change, area between curves, and the average value of a function.",
  icon: "🗺️",
  lessons: [calc1NetChange, calc1AreaBetweenCurves, calc1AverageValue],
};
