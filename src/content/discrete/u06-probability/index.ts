import type { Unit } from '../../types';
import { lesson as dmProbability } from './dm-probability';
import { lesson as dmConditionalBayes } from './dm-conditional-bayes';
import { lesson as dmExpectedValue } from './dm-expected-value';

export const unit: Unit = {
  id: "dm-u06-probability",
  title: "Discrete Probability",
  description: "Probability on finite sample spaces, conditional probability and Bayes' theorem, and random variables and expected value.",
  icon: "🃏",
  lessons: [dmProbability, dmConditionalBayes, dmExpectedValue],
};
