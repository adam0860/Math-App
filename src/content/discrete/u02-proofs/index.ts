import type { Unit } from '../../types';
import { lesson as dmDirectProof } from './dm-direct-proof';
import { lesson as dmContradictionCases } from './dm-contradiction-cases';
import { lesson as dmInduction } from './dm-induction';
import { lesson as dmStrongInduction } from './dm-strong-induction';

export const unit: Unit = {
  id: "dm-u02-proofs",
  title: "Proofs",
  description: "Direct proof and proof by contrapositive, contradiction and cases, mathematical induction, and strong induction.",
  icon: "✍️",
  lessons: [dmDirectProof, dmContradictionCases, dmInduction, dmStrongInduction],
};
