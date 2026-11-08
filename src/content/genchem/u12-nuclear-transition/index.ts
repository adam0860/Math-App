import type { Unit } from '../../types';
import { lesson as gchemRadioactiveDecay } from './gchem-radioactive-decay';
import { lesson as gchemNuclearEnergy } from './gchem-nuclear-energy';
import { lesson as gchemCoordination } from './gchem-coordination';

export const unit: Unit = {
  id: "gchem-u12-nuclear-transition",
  title: "Nuclear Chemistry and Transition Metals",
  description: "Radioactive decay and nuclear equations, decay kinetics and dating, binding energy, and transition metals and coordination compounds.",
  icon: "☢️",
  lessons: [gchemRadioactiveDecay, gchemNuclearEnergy, gchemCoordination],
};
