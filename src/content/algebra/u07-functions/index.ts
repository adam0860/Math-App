import type { Unit } from '../../types';
import { lesson as algFunctionsIntro } from './alg-functions-intro';
import { lesson as algFunctionGraphs } from './alg-function-graphs';
import { lesson as algTransformations } from './alg-transformations';
import { lesson as algCombiningFunctions } from './alg-combining-functions';
import { lesson as algInverseFunctions } from './alg-inverse-functions';

export const unit: Unit = {
  id: "alg-u07-functions",
  title: "Functions",
  description: "The central idea of the course: functions, their graphs, transformations, composition and inverses.",
  icon: "🧩",
  lessons: [algFunctionsIntro, algFunctionGraphs, algTransformations, algCombiningFunctions, algInverseFunctions],
};
