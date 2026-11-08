import type { Unit } from '../../types';
import { lesson as ochemPka } from './ochem-pka';
import { lesson as ochemAcidityFactors } from './ochem-acidity-factors';

export const unit: Unit = {
  id: "ochem-u02-acids-bases",
  title: "Acids and Bases in Organic Chemistry",
  description: "Organic acids and bases, using pKa to predict equilibria, and the structural factors that make a proton acidic.",
  icon: "⚗️",
  lessons: [ochemPka, ochemAcidityFactors],
};
