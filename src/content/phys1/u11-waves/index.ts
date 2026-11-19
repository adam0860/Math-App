import type { Unit } from '../../types';
import { lesson as physTravelingWaves } from './phys-traveling-waves';
import { lesson as physStandingWavesSound } from './phys-standing-waves-sound';

export const unit: Unit = {
  id: "phys-u11-waves",
  title: "Waves and Sound",
  description: "Traveling waves and the wave equation, superposition and standing waves, and sound with intensity and the Doppler effect.",
  icon: "🌊",
  lessons: [physTravelingWaves, physStandingWavesSound],
};
