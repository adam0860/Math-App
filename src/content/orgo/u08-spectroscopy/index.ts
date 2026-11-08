import type { Unit } from '../../types';
import { lesson as ochemMassSpec } from './ochem-mass-spec';
import { lesson as ochemIr } from './ochem-ir';
import { lesson as ochemHNmr } from './ochem-h-nmr';
import { lesson as ochemCNmrStructure } from './ochem-c-nmr-structure';

export const unit: Unit = {
  id: "ochem-u08-spectroscopy",
  title: "Spectroscopy and Structure Determination",
  description: "Mass spectrometry, infrared spectroscopy, proton and carbon-13 NMR, and solving structures from combined spectra.",
  icon: "📡",
  lessons: [ochemMassSpec, ochemIr, ochemHNmr, ochemCNmrStructure],
};
