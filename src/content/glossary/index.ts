import type { GlossaryEntry } from '../types';
import { algebraGlossary } from './algebra';
import { trigGlossary } from './trig';
import { calc1Glossary } from './calc1';
import { calc2Glossary } from './calc2';
import { linalgGlossary } from './linalg';
import { glossary as algebra_u01 } from '../algebra/u01-foundations/glossary';
import { glossary as algebra_u02 } from '../algebra/u02-polynomials/glossary';
import { glossary as algebra_u03 } from '../algebra/u03-linear-equations/glossary';
import { glossary as algebra_u04 } from '../algebra/u04-lines/glossary';
import { glossary as algebra_u05 } from '../algebra/u05-systems/glossary';
import { glossary as algebra_u06 } from '../algebra/u06-quadratics/glossary';
import { glossary as algebra_u07 } from '../algebra/u07-functions/glossary';
import { glossary as algebra_u08 } from '../algebra/u08-polynomial-functions/glossary';
import { glossary as algebra_u09 } from '../algebra/u09-exp-log/glossary';
import { glossary as algebra_u10 } from '../algebra/u10-sequences/glossary';
import { glossary as trig_u01 } from '../trig/u01-angles/glossary';
import { glossary as trig_u02 } from '../trig/u02-right-triangles/glossary';
import { glossary as trig_u03 } from '../trig/u03-unit-circle/glossary';
import { glossary as trig_u04 } from '../trig/u04-graphs/glossary';
import { glossary as trig_u05 } from '../trig/u05-inverse-trig/glossary';
import { glossary as trig_u06 } from '../trig/u06-identities/glossary';
import { glossary as trig_u07 } from '../trig/u07-equations/glossary';
import { glossary as trig_u08 } from '../trig/u08-oblique/glossary';
import { glossary as trig_u09 } from '../trig/u09-vectors-polar/glossary';
import { glossary as calc1_u01 } from '../calc1/u01-limits/glossary';
import { glossary as calc1_u02 } from '../calc1/u02-continuity/glossary';
import { glossary as calc1_u03 } from '../calc1/u03-derivative/glossary';
import { glossary as calc1_u04 } from '../calc1/u04-rules/glossary';
import { glossary as calc1_u05 } from '../calc1/u05-applications/glossary';
import { glossary as calc1_u06 } from '../calc1/u06-analysis/glossary';
import { glossary as calc1_u07 } from '../calc1/u07-integrals/glossary';
import { glossary as calc1_u08 } from '../calc1/u08-integral-applications/glossary';
import { glossary as calc2_u01 } from '../calc2/u01-volumes/glossary';
import { glossary as calc2_u02 } from '../calc2/u02-techniques/glossary';
import { glossary as calc2_u03 } from '../calc2/u03-differential-equations/glossary';
import { glossary as calc2_u04 } from '../calc2/u04-parametric-polar/glossary';
import { glossary as calc2_u05 } from '../calc2/u05-series/glossary';
import { glossary as calc2_u06 } from '../calc2/u06-power-series/glossary';
import { glossary as linalg_u01 } from '../linalg/u01-vectors/glossary';
import { glossary as linalg_u02 } from '../linalg/u02-systems/glossary';
import { glossary as linalg_u03 } from '../linalg/u03-transformations/glossary';
import { glossary as linalg_u04 } from '../linalg/u04-matrix-algebra/glossary';
import { glossary as linalg_u05 } from '../linalg/u05-determinants/glossary';
import { glossary as linalg_u06 } from '../linalg/u06-vector-spaces/glossary';
import { glossary as linalg_u07 } from '../linalg/u07-eigen/glossary';
import { glossary as linalg_u08 } from '../linalg/u08-orthogonality/glossary';

export const glossary: GlossaryEntry[] = [
  ...algebraGlossary,
  ...trigGlossary,
  ...calc1Glossary,
  ...calc2Glossary,
  ...linalgGlossary,
  ...algebra_u01,
  ...algebra_u02,
  ...algebra_u03,
  ...algebra_u04,
  ...algebra_u05,
  ...algebra_u06,
  ...algebra_u07,
  ...algebra_u08,
  ...algebra_u09,
  ...algebra_u10,
  ...trig_u01,
  ...trig_u02,
  ...trig_u03,
  ...trig_u04,
  ...trig_u05,
  ...trig_u06,
  ...trig_u07,
  ...trig_u08,
  ...trig_u09,
  ...calc1_u01,
  ...calc1_u02,
  ...calc1_u03,
  ...calc1_u04,
  ...calc1_u05,
  ...calc1_u06,
  ...calc1_u07,
  ...calc1_u08,
  ...calc2_u01,
  ...calc2_u02,
  ...calc2_u03,
  ...calc2_u04,
  ...calc2_u05,
  ...calc2_u06,
  ...linalg_u01,
  ...linalg_u02,
  ...linalg_u03,
  ...linalg_u04,
  ...linalg_u05,
  ...linalg_u06,
  ...linalg_u07,
  ...linalg_u08,
];
