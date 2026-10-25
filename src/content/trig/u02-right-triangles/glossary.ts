import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'similar-triangles',
    term: 'Similar Triangles',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['similar', 'similarity', 'AA similarity'],
    short: 'Two triangles are similar when they have the same three angles. Their corresponding sides are then all in the same ratio: one is a scaled copy of the other.',
    long: 'If two angles of one triangle match two angles of another, the third angles match too (all three add to $180^\\circ$), so the triangles are similar — the **AA criterion**. Similar triangles have proportional sides, so any ratio of two sides within one triangle equals the corresponding ratio in the other.\n\nThis is the reason trigonometry works: every right triangle with an acute angle $\\theta$ is similar to every other, so ratios like $\\frac{\\text{opp}}{\\text{hyp}}$ depend only on $\\theta$, not on the size of the triangle.',
    tex: '\\frac{a}{c} = \\frac{a\'}{c\'}, \\quad \\frac{b}{c} = \\frac{b\'}{c\'}, \\quad \\frac{a}{b} = \\frac{a\'}{b\'}',
    see: ['soh-cah-toa', 'sine', 'cosine', 'tangent-function'],
  },
  {
    id: 'complementary-angles',
    term: 'Complementary Angles',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['complement', 'complementary'],
    short: 'Two angles are complementary when they add up to $90^\\circ$ ($\\frac{\\pi}{2}$ rad). The two acute angles of a right triangle are always complementary.',
    long: 'The angles of a triangle add to $180^\\circ$; a right triangle spends $90^\\circ$ on the right angle, leaving $90^\\circ$ for the other two. So if one acute angle is $\\theta$, the other is $90^\\circ - \\theta$.\n\nThe side opposite one acute angle is adjacent to the other, which gives the cofunction rules such as $\\sin\\theta = \\cos(90^\\circ - \\theta)$ (see [[cofunction-rule]]).',
    tex: '\\alpha + \\beta = 90^\\circ',
    see: ['cofunction-rule', 'soh-cah-toa'],
  },
  {
    id: 'cofunction-rule',
    term: 'Cofunction Rule',
    course: 'trig',
    category: 'Right Triangles',
    aliases: ['cofunction', 'cofunctions', 'cofunction identities'],
    short: 'A trig function of an angle equals its *co*function of the complementary angle: $\\sin\\theta = \\cos(90^\\circ - \\theta)$, $\\tan\\theta = \\cot(90^\\circ - \\theta)$, $\\sec\\theta = \\csc(90^\\circ - \\theta)$.',
    long: 'In a right triangle the leg opposite $\\theta$ is the leg adjacent to the other acute angle $90^\\circ - \\theta$. Swapping "opposite" and "adjacent" turns sine into cosine and tangent into cotangent. The "co" in cosine literally means "sine of the complement".\n\nThe rule holds for all angles, not just acute ones, once trig functions are defined on the unit circle.',
    tex: '\\sin\\theta = \\cos\\left(\\tfrac{\\pi}{2} - \\theta\\right), \\qquad \\cos\\theta = \\sin\\left(\\tfrac{\\pi}{2} - \\theta\\right)',
    see: ['complementary-angles', 'sine', 'cosine'],
  },
];
