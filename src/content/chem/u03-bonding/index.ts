import type { Unit } from '../../types';
import { lesson as chemIonicCompounds } from './chem-ionic-compounds';
import { lesson as chemCovalentLewis } from './chem-covalent-lewis';
import { lesson as chemShapePolarity } from './chem-shape-polarity';

export const unit: Unit = {
  id: "chem-u03-bonding",
  title: "Bonding and Compounds",
  description: "Why atoms bond, ionic compounds and their formulas and names, covalent molecules and Lewis structures, and molecular shape and polarity.",
  icon: "🔗",
  lessons: [chemIonicCompounds, chemCovalentLewis, chemShapePolarity],
};
