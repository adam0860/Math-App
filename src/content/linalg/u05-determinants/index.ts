import type { Unit } from '../../types';
import { lesson as laDeterminants } from './la-determinants';
import { lesson as laDeterminantProperties } from './la-determinant-properties';
import { lesson as laDeterminantGeometry } from './la-determinant-geometry';

export const unit: Unit = {
  id: "la-u05-determinants",
  title: "Determinants",
  description: "Computing determinants by cofactor expansion and row reduction, their algebraic properties, and what they mean geometrically: signed area, volume and orientation.",
  icon: "📦",
  lessons: [laDeterminants, laDeterminantProperties, laDeterminantGeometry],
};
