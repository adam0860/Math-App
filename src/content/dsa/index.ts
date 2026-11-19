import type { Course } from '../types';
import { unit as u01 } from './u01-foundations';
import { unit as u02 } from './u02-linear';
import { unit as u03 } from './u03-hashing';
import { unit as u04 } from './u04-sorting';
import { unit as u05 } from './u05-searching';
import { unit as u06 } from './u06-trees';
import { unit as u07 } from './u07-heaps-tries';
import { unit as u08 } from './u08-graphs';
import { unit as u09 } from './u09-shortest-paths';
import { unit as u10 } from './u10-greedy';
import { unit as u11 } from './u11-dynamic-programming';
import { unit as u12 } from './u12-advanced';
import { unit as u13 } from './u13-game-structures';

export const dsaCourse: Course = {
  id: "dsa",
  title: "Data Structures and Algorithms",
  short: "DSA",
  subtitle: "The core CS course, in C++: structures, algorithms and how to analyze them",
  description: "The data structures and algorithms every programmer is expected to know, implemented in modern C++: arrays and memory, lists, stacks and queues, hashing, sorting and searching, trees and heaps, graph algorithms and pathfinding, greedy and dynamic programming, backtracking and string algorithms, NP-completeness, and the spatial and engine structures games are built on. Step through every algorithm as it runs.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12, u13],
};
