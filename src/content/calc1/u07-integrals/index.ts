import type { Unit } from '../../types';
import { lesson as calc1Antiderivatives } from './calc1-antiderivatives';
import { lesson as calc1RiemannSums } from './calc1-riemann-sums';
import { lesson as calc1DefiniteIntegral } from './calc1-definite-integral';
import { lesson as calc1Ftc } from './calc1-ftc';
import { lesson as calc1USubstitution } from './calc1-u-substitution';

export const unit: Unit = {
  id: "calc1-u07-integrals",
  title: "Integrals",
  description: "Accumulation: antiderivatives, Riemann sums, the definite integral, the Fundamental Theorem of Calculus and substitution.",
  icon: "∫",
  lessons: [calc1Antiderivatives, calc1RiemannSums, calc1DefiniteIntegral, calc1Ftc, calc1USubstitution],
};
