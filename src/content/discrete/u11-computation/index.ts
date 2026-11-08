import type { Unit } from '../../types';
import { lesson as dmBooleanAlgebra } from './dm-boolean-algebra';
import { lesson as dmFiniteStateMachines } from './dm-finite-state-machines';
import { lesson as dmComputability } from './dm-computability';

export const unit: Unit = {
  id: "dm-u11-computation",
  title: "Boolean Algebra and Computation",
  description: "Boolean functions and logic gates, finite-state machines and regular expressions, and grammars, Turing machines and the limits of computation.",
  icon: "💻",
  lessons: [dmBooleanAlgebra, dmFiniteStateMachines, dmComputability],
};
