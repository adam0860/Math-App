import type { Unit } from '../../types';
import { lesson as gchemIonicLattice } from './gchem-ionic-lattice';
import { lesson as gchemLewisAdvanced } from './gchem-lewis-advanced';
import { lesson as gchemVseprAdvanced } from './gchem-vsepr-advanced';
import { lesson as gchemHybridization } from './gchem-hybridization';
import { lesson as gchemMoTheory } from './gchem-mo-theory';

export const unit: Unit = {
  id: "gchem-u02-bonding-theory",
  title: "Bonding Theory",
  description: "Lattice energy, formal charge and resonance, bond enthalpies, VSEPR for expanded octets, hybridization, and molecular orbital theory.",
  icon: "🧬",
  lessons: [gchemIonicLattice, gchemLewisAdvanced, gchemVseprAdvanced, gchemHybridization, gchemMoTheory],
};
