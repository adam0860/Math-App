import type { Unit } from '../../types';
import { lesson as algExponentialFunctions } from './alg-exponential-functions';
import { lesson as algLogarithms } from './alg-logarithms';
import { lesson as algLogProperties } from './alg-log-properties';
import { lesson as algExpLogEquations } from './alg-exp-log-equations';
import { lesson as algExpModels } from './alg-exp-models';

export const unit: Unit = {
  id: "alg-u09-exp-log",
  title: "Exponential and Logarithmic Functions",
  description: "Growth that compounds, the number e, logarithms as the undo button, and solving exponential equations.",
  icon: "🚀",
  lessons: [algExponentialFunctions, algLogarithms, algLogProperties, algExpLogEquations, algExpModels],
};
