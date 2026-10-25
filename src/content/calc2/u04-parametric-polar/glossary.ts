import type { GlossaryEntry } from '../../types';

// Glossary terms introduced by this unit that are NOT in scripts/glossary-master.ts.
export const glossary: GlossaryEntry[] = [
  {
    id: 'cycloid',
    term: 'Cycloid',
    course: 'calc2',
    category: 'Parametric and Polar',
    short: 'The curve traced by a point on the rim of a wheel of radius $r$ rolling along a line: $x = r(t - \\sin t)$, $y = r(1 - \\cos t)$.',
    long: 'One arch (for $0 \\le t \\le 2\\pi$) has area $3\\pi r^2$ — three times the wheel — and length $8r$. The cycloid is also the *brachistochrone*: the shape of the fastest slide between two points under gravity, a fact that drove the early development of calculus.',
    tex: 'x = r(t - \\sin t), \\quad y = r(1 - \\cos t)',
    see: ['parametric-equations', 'arc-length-integral'],
  },
  {
    id: 'bezier-curve',
    term: 'Bézier Curve',
    aliases: ['Bezier curve', 'quadratic Bézier', 'cubic Bézier'],
    course: 'calc2',
    category: 'Parametric and Polar',
    short: 'A parametric curve for $0 \\le t \\le 1$ built from control points. The quadratic one is $B(t) = (1-t)^2P_0 + 2(1-t)t\\,P_1 + t^2P_2$: it starts at $P_0$, ends at $P_2$ and is pulled toward $P_1$.',
    long: 'Bézier curves are everywhere in graphics: fonts, vector art, animation easing curves, camera rails and enemy flight paths. Their derivative $B\'(t)$ is the velocity along the path, used to orient a sprite. Because the speed $|B\'(t)|$ varies, moving at constant speed requires the [[arc-length-integral|arc length]] — the idea behind [[arc-length-parametrization]].',
    tex: "B'(t) = 2(1 - t)(P_1 - P_0) + 2t(P_2 - P_1)",
    example: 'Vec2 bezier(Vec2 p0, Vec2 p1, Vec2 p2, float t) {\n    float u = 1 - t;\n    return u*u*p0 + 2*u*t*p1 + t*t*p2;\n}',
    exampleLang: 'cpp',
    see: ['parametric-equations', 'arc-length-parametrization'],
  },
  {
    id: 'arc-length-parametrization',
    term: 'Arc-Length Parametrization',
    aliases: ['constant-speed parametrization', 'reparametrization by arc length'],
    course: 'calc2',
    category: 'Parametric and Polar',
    short: 'Rewriting a parametric curve so the parameter is the distance travelled along it, $s(t) = \\int_a^t |\\mathbf{r}\'(u)|\\,du$. Equal steps in $s$ then give equal distances on the curve.',
    long: 'Games need this to move an object along a spline at constant speed. In practice they tabulate $s$ at many values of $t$ (summing short chord lengths) and invert the table by interpolation.',
    tex: 's(t) = \\int_a^t \\sqrt{x\'(u)^2 + y\'(u)^2}\\,du',
    see: ['bezier-curve', 'arc-length-integral'],
  },
];
