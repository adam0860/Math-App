import type { Course } from '../types';
import { unit as u01 } from './u01-angles';
import { unit as u02 } from './u02-right-triangles';
import { unit as u03 } from './u03-unit-circle';
import { unit as u04 } from './u04-graphs';
import { unit as u05 } from './u05-inverse-trig';
import { unit as u06 } from './u06-identities';
import { unit as u07 } from './u07-equations';
import { unit as u08 } from './u08-oblique';
import { unit as u09 } from './u09-vectors-polar';

export const trigCourse: Course = {
  id: "trig",
  title: "Trigonometry",
  short: "Trig",
  subtitle: "Angles, waves and rotation — the math of motion",
  description: "From right triangles to the unit circle, trig graphs, identities, equations, oblique triangles, vectors and polar coordinates. The geometry behind every rotation and direction in a game engine.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09],
};
