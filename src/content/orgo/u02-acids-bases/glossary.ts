import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'ochem-ario',
    term: 'ARIO (Acidity Factors)',
    aliases: ['ARIO', 'CARDIO'],
    course: 'orgo',
    category: 'Acids and bases',
    short: 'A checklist for ranking acids by the stability of their conjugate bases, in the usual order of importance: Atom, Resonance, Induction, Orbital.',
    long: '**Atom:** a negative charge is better on a more electronegative atom (across a row) or a larger atom (down a group). **Resonance:** delocalized charge is more stable. **Induction:** nearby electron-withdrawing groups stabilize the charge, with an effect that fades with distance. **Orbital:** a lone pair in an orbital with more s character is held closer to the nucleus. The order is a guide; for example, acetylene (pKa 25) is more acidic than ammonia (38).',
    see: ['gchem-pka', 'ochem-inductive-effect', 'ochem-resonance-hybrid'],
  },
  {
    id: 'ochem-inductive-effect',
    term: 'Inductive Effect',
    aliases: ['induction', 'electron-withdrawing group', 'electron-donating group'],
    course: 'orgo',
    category: 'Acids and bases',
    short: 'The polarization of σ bonds by a nearby electronegative (electron-withdrawing) or electron-donating group, which stabilizes or destabilizes charges elsewhere in the molecule.',
    long: 'Electron-withdrawing groups (halogens, $\\ce{CF3}$, $\\ce{NO2}$, $\\ce{C#N}$) stabilize nearby negative charge and make acids stronger: chloroacetic acid (pKa 2.86) versus acetic acid (4.76). The effect decreases roughly geometrically, by about 60% per intervening bond. Alkyl groups are weakly electron-donating.',
    see: ['ochem-ario', 'electronegativity', 'polar-bond'],
  },
  {
    id: 'ochem-leveling-effect',
    term: 'Leveling Effect',
    course: 'orgo',
    category: 'Acids and bases',
    short: 'In a given solvent, any acid stronger than the protonated solvent and any base stronger than the deprotonated solvent react completely with the solvent, so they all behave alike. In water, the strongest acid is $\\ce{H3O+}$ and the strongest base is $\\ce{HO-}$.',
    long: 'Because of leveling, HCl, HBr and HI are equally strong in water, and bases such as $\\ce{NaNH2}$, NaH or butyllithium must be used in solvents that are less acidic than their conjugate acids (liquid ammonia, THF, hexane).',
    see: ['gchem-pka', 'chem-strong-acid', 'chem-hydronium'],
  },
];
