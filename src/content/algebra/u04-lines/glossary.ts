import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'origin',
    term: 'Origin',
    course: 'algebra',
    category: 'Graphs',
    short: 'The point $(0, 0)$ where the $x$-axis and $y$-axis cross in the coordinate plane.',
    long: 'Every ordered pair $(x, y)$ describes how far to move from the origin: $x$ units horizontally, then $y$ units vertically. In most screen and graphics coordinate systems the origin is the top-left corner instead, with $y$ growing downward.',
    see: ['coordinate-plane', 'ordered-pair'],
  },
  {
    id: 'linear-interpolation',
    term: 'Linear Interpolation (lerp)',
    aliases: ['lerp'],
    course: 'algebra',
    category: 'Graphs',
    short: 'Finding the point a fraction $t$ of the way from $a$ to $b$ with $a + t(b - a)$; $t = \\frac{1}{2}$ gives the midpoint.',
    long: 'Applied to each coordinate separately, lerp moves along the straight segment from $A$ to $B$ at constant speed as $t$ goes from $0$ to $1$. Games and graphics use it constantly: animating positions, blending colours, mixing keyframes.',
    tex: 'P(t) = A + t\\,(B - A), \\quad 0 \\le t \\le 1',
    example: 'float lerp(float a, float b, float t) { return a + t * (b - a); }',
    exampleLang: 'cpp',
    see: ['midpoint-formula'],
  },
  {
    id: 'standard-form-of-a-line',
    term: 'Standard Form of a Line',
    course: 'algebra',
    category: 'Lines',
    short: 'The equation $Ax + By = C$, where $A$ and $B$ are not both zero. Every line, including vertical ones, can be written this way.',
    long: 'Standard form makes intercepts easy to find (set $x = 0$ or $y = 0$). When $B \\ne 0$, solving for $y$ gives slope-intercept form with slope $-\\frac{A}{B}$. Vertical lines ($B = 0$) are the lines that have no slope-intercept form.',
    tex: 'Ax + By = C',
    see: ['slope-intercept-form', 'x-intercept', 'y-intercept'],
  },
  {
    id: 'general-form-of-a-circle',
    term: 'General Form of a Circle',
    course: 'algebra',
    category: 'Circles',
    short: 'A circle\'s equation multiplied out: $x^2 + y^2 + Dx + Ey + F = 0$. Complete the square in $x$ and in $y$ to recover the center and radius.',
    tex: 'x^2 + y^2 + Dx + Ey + F = 0',
    see: ['circle-equation', 'completing-the-square'],
  },
];
