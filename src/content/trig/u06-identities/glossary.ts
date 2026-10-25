import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'cofunction-identities',
    term: 'Cofunction Identities',
    aliases: ['cofunction identity', 'cofunction'],
    course: 'trig',
    category: 'Identities',
    short: 'Each trig function of an angle equals its "co"-function of the complementary angle, e.g. $\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos\\theta$.',
    long: 'In a right triangle the two acute angles are complementary, and the side opposite one is adjacent to the other — that is where the names cosine, cotangent and cosecant ("complement\'s sine", …) come from. The identities hold for all angles and follow from the difference formula for cosine.',
    tex: '\\sin\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\cos\\theta, \\quad \\tan\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\cot\\theta, \\quad \\sec\\left(\\tfrac{\\pi}{2} - \\theta\\right) = \\csc\\theta',
    see: ['sine', 'cosine', 'sum-and-difference-formulas'],
  },
  {
    id: 'rotation-matrix',
    term: 'Rotation Matrix',
    aliases: ['2D rotation matrix', 'rotation matrices'],
    course: 'trig',
    category: 'Identities',
    short: 'The $2 \\times 2$ matrix that rotates a point of the plane counterclockwise about the origin by an angle $\\theta$.',
    long: 'Multiplying $(x, y)$ by this matrix gives $(x\\cos\\theta - y\\sin\\theta,\\; x\\sin\\theta + y\\cos\\theta)$. The formula is a direct consequence of the sum formulas for sine and cosine, and the fact that rotating by $\\alpha$ and then by $\\beta$ equals rotating by $\\alpha + \\beta$ is the same statement as those formulas. Every 2D game engine rotates sprites and vectors this way.',
    tex: 'R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}',
    example: 'Vec2 rotate(Vec2 p, double t) {\n    double c = std::cos(t), s = std::sin(t);\n    return { p.x * c - p.y * s, p.x * s + p.y * c };\n}',
    exampleLang: 'cpp',
    see: ['sum-and-difference-formulas', 'matrix', 'vector'],
  },
  {
    id: 'power-reducing-formulas',
    term: 'Power-Reducing Formulas',
    aliases: ['power-reduction formulas', 'power reducing identities'],
    course: 'trig',
    category: 'Identities',
    short: 'Identities that rewrite $\\sin^2 x$ and $\\cos^2 x$ using the first power of $\\cos 2x$.',
    long: 'They come from solving the double-angle formulas $\\cos 2x = 1 - 2\\sin^2 x = 2\\cos^2 x - 1$ for the squares. In Calculus II they are the standard way to integrate even powers of sine and cosine.',
    tex: '\\sin^2 x = \\frac{1 - \\cos 2x}{2}, \\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2}',
    see: ['double-angle-formulas', 'half-angle-formulas'],
  },
];
