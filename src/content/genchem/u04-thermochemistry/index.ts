import type { Unit } from '../../types';
import { lesson as gchemEnergyHeatWork } from './gchem-energy-heat-work';
import { lesson as gchemCalorimetry } from './gchem-calorimetry';
import { lesson as gchemEnthalpyHess } from './gchem-enthalpy-hess';
import { lesson as gchemFormationEnthalpy } from './gchem-formation-enthalpy';

export const unit: Unit = {
  id: "gchem-u04-thermochemistry",
  title: "Thermochemistry",
  description: "Energy, heat and work, calorimetry, enthalpy and Hess's law, and standard enthalpies of formation.",
  icon: "🔥",
  lessons: [gchemEnergyHeatWork, gchemCalorimetry, gchemEnthalpyHess, gchemFormationEnthalpy],
};
