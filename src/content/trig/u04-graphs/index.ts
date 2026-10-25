import type { Unit } from '../../types';
import { lesson as trigSineCosineGraphs } from './trig-sine-cosine-graphs';
import { lesson as trigSinusoidTransformations } from './trig-sinusoid-transformations';
import { lesson as trigOtherGraphs } from './trig-other-graphs';
import { lesson as trigModelingPeriodic } from './trig-modeling-periodic';

export const unit: Unit = {
  id: "trig-u04-graphs",
  title: "Graphs of Trig Functions",
  description: "Waves on a graph: sine and cosine curves, amplitude, period and phase, the other four graphs, and modeling.",
  icon: "🌊",
  lessons: [trigSineCosineGraphs, trigSinusoidTransformations, trigOtherGraphs, trigModelingPeriodic],
};
