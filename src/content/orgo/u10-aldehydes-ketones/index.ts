import type { Unit } from '../../types';
import { lesson as ochemCarbonylAddition } from './ochem-carbonyl-addition';
import { lesson as ochemOrganometallics } from './ochem-organometallics';
import { lesson as ochemAcetalsImines } from './ochem-acetals-imines';

export const unit: Unit = {
  id: "ochem-u10-aldehydes-ketones",
  title: "Aldehydes and Ketones",
  description: "Nucleophilic addition to the carbonyl group, hydride and organometallic reagents, and acetals, imines and the Wittig reaction.",
  icon: "💎",
  lessons: [ochemCarbonylAddition, ochemOrganometallics, ochemAcetalsImines],
};
