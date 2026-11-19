import type { Course } from '../types';
import { unit as u01 } from './u01-measurement-vectors';
import { unit as u02 } from './u02-kinematics-1d';
import { unit as u03 } from './u03-kinematics-2d';
import { unit as u04 } from './u04-newtons-laws';
import { unit as u05 } from './u05-work-energy';
import { unit as u06 } from './u06-momentum';
import { unit as u07 } from './u07-rotation';
import { unit as u08 } from './u08-angular-momentum';
import { unit as u09 } from './u09-gravitation';
import { unit as u10 } from './u10-oscillations';
import { unit as u11 } from './u11-waves';
import { unit as u12 } from './u12-game-physics';

export const phys1Course: Course = {
  id: "phys1",
  title: "Physics I: Mechanics",
  short: "Physics I",
  subtitle: "Calculus-based mechanics: motion, forces, energy, rotation and waves",
  description: "The first semester of calculus-based university physics: kinematics with derivatives and integrals, Newton’s laws, work and energy, momentum and collisions, rotation and angular momentum, gravitation and orbits, oscillations, waves and sound, and how game engines simulate all of it.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12],
};
