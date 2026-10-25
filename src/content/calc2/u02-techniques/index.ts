import type { Unit } from '../../types';
import { lesson as calc2IntegrationByParts } from './calc2-integration-by-parts';
import { lesson as calc2TrigIntegrals } from './calc2-trig-integrals';
import { lesson as calc2TrigSubstitution } from './calc2-trig-substitution';
import { lesson as calc2PartialFractions } from './calc2-partial-fractions';
import { lesson as calc2IntegrationStrategy } from './calc2-integration-strategy';
import { lesson as calc2NumericalIntegration } from './calc2-numerical-integration';
import { lesson as calc2ImproperIntegrals } from './calc2-improper-integrals';

export const unit: Unit = {
  id: "calc2-u02-techniques",
  title: "Techniques of Integration",
  description: "The integration toolkit: by parts, trig integrals, trig substitution, partial fractions, strategy, numerical methods and improper integrals.",
  icon: "🧰",
  lessons: [calc2IntegrationByParts, calc2TrigIntegrals, calc2TrigSubstitution, calc2PartialFractions, calc2IntegrationStrategy, calc2NumericalIntegration, calc2ImproperIntegrals],
};
