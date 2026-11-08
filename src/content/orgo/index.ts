import type { Course } from '../types';
import { unit as u01 } from './u01-structure';
import { unit as u02 } from './u02-acids-bases';
import { unit as u03 } from './u03-alkanes';
import { unit as u04 } from './u04-stereochemistry';
import { unit as u05 } from './u05-substitution-elimination';
import { unit as u06 } from './u06-alkenes-alkynes';
import { unit as u07 } from './u07-radicals-alcohols-ethers';
import { unit as u08 } from './u08-spectroscopy';
import { unit as u09 } from './u09-aromatic';
import { unit as u10 } from './u10-aldehydes-ketones';
import { unit as u11 } from './u11-acyl-enolates';
import { unit as u12 } from './u12-amines-bio-synthesis';

export const orgoCourse: Course = {
  id: "orgo",
  title: "Organic Chemistry",
  short: "Orgo",
  subtitle: "Structure, mechanism and synthesis — the full two-semester course",
  description: "University organic chemistry: drawing and naming molecules, acids and bases, conformations and stereochemistry, substitution and elimination, alkenes and alkynes, alcohols and ethers, spectroscopy, aromatic chemistry, carbonyl and enolate chemistry, amines and biomolecules, and multistep synthesis.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12],
};
