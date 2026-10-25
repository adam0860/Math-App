import type { Unit } from '../../types';
import { lesson as calc2Sequences } from './calc2-sequences';
import { lesson as calc2SeriesIntro } from './calc2-series-intro';
import { lesson as calc2IntegralTest } from './calc2-integral-test';
import { lesson as calc2ComparisonTests } from './calc2-comparison-tests';
import { lesson as calc2AlternatingSeries } from './calc2-alternating-series';
import { lesson as calc2RatioRootTests } from './calc2-ratio-root-tests';
import { lesson as calc2SeriesStrategy } from './calc2-series-strategy';

export const unit: Unit = {
  id: "calc2-u05-series",
  title: "Sequences and Series",
  description: "Adding infinitely many numbers: sequences, series, and every major convergence test.",
  icon: "♾️",
  lessons: [calc2Sequences, calc2SeriesIntro, calc2IntegralTest, calc2ComparisonTests, calc2AlternatingSeries, calc2RatioRootTests, calc2SeriesStrategy],
};
