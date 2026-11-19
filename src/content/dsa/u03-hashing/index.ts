import type { Unit } from '../../types';
import { lesson as dsaHashTables } from './dsa-hash-tables';
import { lesson as dsaHashingApplications } from './dsa-hashing-applications';

export const unit: Unit = {
  id: "dsa-u03-hashing",
  title: "Hashing",
  description: "Hash functions and hash tables with chaining and open addressing, then hashing in practice: Bloom filters and spatial hashing.",
  icon: "#️⃣",
  lessons: [dsaHashTables, dsaHashingApplications],
};
