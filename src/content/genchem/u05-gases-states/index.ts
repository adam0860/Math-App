import type { Unit } from '../../types';
import { lesson as gchemGasMixtures } from './gchem-gas-mixtures';
import { lesson as gchemKineticTheory } from './gchem-kinetic-theory';
import { lesson as gchemRealGases } from './gchem-real-gases';
import { lesson as gchemLiquidsVaporPressure } from './gchem-liquids-vapor-pressure';
import { lesson as gchemSolidsPhaseDiagrams } from './gchem-solids-phase-diagrams';

export const unit: Unit = {
  id: "gchem-u05-gases-states",
  title: "Gases, Liquids and Solids",
  description: "Gas mixtures and partial pressures, the kinetic-molecular theory and molecular speeds, real gases, intermolecular forces and vapor pressure, and solids and phase diagrams.",
  icon: "💨",
  lessons: [gchemGasMixtures, gchemKineticTheory, gchemRealGases, gchemLiquidsVaporPressure, gchemSolidsPhaseDiagrams],
};
