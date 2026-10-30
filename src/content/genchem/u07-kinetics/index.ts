import type { Unit } from '../../types';
import { lesson as gchemRatesRateLaws } from './gchem-rates-rate-laws';
import { lesson as gchemIntegratedRateLaws } from './gchem-integrated-rate-laws';
import { lesson as gchemArrhenius } from './gchem-arrhenius';
import { lesson as gchemMechanismsCatalysis } from './gchem-mechanisms-catalysis';

export const unit: Unit = {
  id: "gchem-u07-kinetics",
  title: "Chemical Kinetics",
  description: "Reaction rates and rate laws, integrated rate laws and half-life, the Arrhenius equation, and mechanisms and catalysis.",
  icon: "⏱️",
  lessons: [gchemRatesRateLaws, gchemIntegratedRateLaws, gchemArrhenius, gchemMechanismsCatalysis],
};
