import type { Unit } from '../../types';
import { lesson as calc2PowerSeries } from './calc2-power-series';
import { lesson as calc2FunctionsAsSeries } from './calc2-functions-as-series';
import { lesson as calc2TaylorSeries } from './calc2-taylor-series';
import { lesson as calc2TaylorApplications } from './calc2-taylor-applications';

export const unit: Unit = {
  id: "calc2-u06-power-series",
  title: "Power Series and Taylor Series",
  description: "Functions as infinite polynomials: power series, Taylor and Maclaurin series, and how computers really calculate sin x.",
  icon: "🔭",
  lessons: [calc2PowerSeries, calc2FunctionsAsSeries, calc2TaylorSeries, calc2TaylorApplications],
};
