import type { Course } from '../types';
import { unit as u01 } from './u01-describing-data';
import { unit as u02 } from './u02-probability-review';
import { unit as u03 } from './u03-discrete-rv';
import { unit as u04 } from './u04-continuous-rv';
import { unit as u05 } from './u05-joint';
import { unit as u06 } from './u06-limit-theorems';
import { unit as u07 } from './u07-estimation';
import { unit as u08 } from './u08-hypothesis-testing';
import { unit as u09 } from './u09-categorical-resampling';
import { unit as u10 } from './u10-regression';
import { unit as u11 } from './u11-stats-computing';

export const statsCourse: Course = {
  id: "stats",
  title: "Probability and Statistics",
  short: "Stats",
  subtitle: "From data and distributions to inference, regression and A/B tests",
  description: "Calculus-based probability and statistics for computer science: describing data, discrete and continuous random variables, the normal distribution, joint distributions, the central limit theorem, estimation and confidence intervals, hypothesis testing and A/B tests, chi-square and the bootstrap, regression, Bayesian inference, and simulation.",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11],
};
