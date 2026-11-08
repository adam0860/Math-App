import type { Unit } from '../../types';
import { lesson as laSubspaces } from './la-subspaces';
import { lesson as laNullColumnSpace } from './la-null-column-space';
import { lesson as laBasisDimension } from './la-basis-dimension';
import { lesson as laRank } from './la-rank';
import { lesson as laChangeOfBasis } from './la-change-of-basis';

export const unit: Unit = {
  id: "la-u06-vector-spaces",
  title: "Vector Spaces",
  description: "Abstract vector spaces and subspaces, null and column spaces, bases and dimension, rank, and changing coordinates between bases.",
  icon: "🌌",
  lessons: [laSubspaces, laNullColumnSpace, laBasisDimension, laRank, laChangeOfBasis],
};
