import type { Unit } from '../../types';
import { lesson as trigVectors } from './trig-vectors';
import { lesson as trigPolarCoordinates } from './trig-polar-coordinates';
import { lesson as trigComplexPolar } from './trig-complex-polar';

export const unit: Unit = {
  id: "trig-u09-vectors-polar",
  title: "Vectors, Polar Coordinates and Complex Numbers",
  description: "Trig in two dimensions: vectors and components, polar coordinates, and the polar form of complex numbers.",
  icon: "🧭",
  lessons: [trigVectors, trigPolarCoordinates, trigComplexPolar],
};
