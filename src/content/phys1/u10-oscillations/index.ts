import type { Unit } from '../../types';
import { lesson as physSimpleHarmonicMotion } from './phys-simple-harmonic-motion';
import { lesson as physPendulums } from './phys-pendulums';
import { lesson as physDampedDriven } from './phys-damped-driven';

export const unit: Unit = {
  id: "phys-u10-oscillations",
  title: "Oscillations",
  description: "Simple harmonic motion as a differential equation, springs and pendulums, energy in oscillations, and damped and driven oscillators with resonance.",
  icon: "〰️",
  lessons: [physSimpleHarmonicMotion, physPendulums, physDampedDriven],
};
