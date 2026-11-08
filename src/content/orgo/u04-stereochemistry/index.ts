import type { Unit } from '../../types';
import { lesson as ochemChirality } from './ochem-chirality';
import { lesson as ochemRS } from './ochem-r-s';
import { lesson as ochemDiastereomers } from './ochem-diastereomers';

export const unit: Unit = {
  id: "ochem-u04-stereochemistry",
  title: "Stereochemistry",
  description: "Chirality and enantiomers, R/S configuration, and diastereomers, meso compounds, Fischer projections and optical activity.",
  icon: "🪞",
  lessons: [ochemChirality, ochemRS, ochemDiastereomers],
};
