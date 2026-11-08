import type { GlossaryEntry } from '../types';

export const linalgGlossary: GlossaryEntry[] = [
  // ------------------------------------------------------------------
  // Vectors
  // ------------------------------------------------------------------
  {
    id: 'euclidean-space',
    term: 'Euclidean Space (Rⁿ)',
    aliases: ['R^n', 'Rn', 'n-space', 'real coordinate space'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'The set $\\mathbb{R}^n$ of all lists of $n$ real numbers, written as column vectors, with entrywise addition and scalar multiplication (and, for geometry, the dot product).',
    long:
      'Each element of $\\mathbb{R}^n$ is a [[vector]] $\\mathbf{x}$ with $n$ real entries $x_1, \\dots, x_n$. $\\mathbb{R}^2$ is the plane and $\\mathbb{R}^3$ is ordinary space; for $n > 3$ you lose the picture but none of the algebra: addition and scaling work entry by entry, and the [[dot-product]] still gives length, distance and angle.\n\n' +
      'Two vectors are equal only when they have the same number of entries and every entry matches. The word *Euclidean* signals that distance is the usual Pythagorean one, $\\|\\mathbf{x} - \\mathbf{y}\\| = \\sqrt{\\sum (x_i - y_i)^2}$. $\\mathbb{R}^n$ is the model example of a [[vector-space]], and every $n$-dimensional real vector space looks just like it once you pick a [[basis]].\n\n' +
      'Pitfall: $\\mathbb{R}^2$ is **not** a subset of $\\mathbb{R}^3$; $(x, y)$ and $(x, y, 0)$ live in different spaces, although the plane $z = 0$ is a copy of $\\mathbb{R}^2$ inside $\\mathbb{R}^3$. In games, positions and directions live in $\\mathbb{R}^3$, colours in $\\mathbb{R}^3$ or $\\mathbb{R}^4$ (RGBA), and an ML embedding can live in $\\mathbb{R}^{768}$.',
    tex: '\\mathbb{R}^n = \\left\\{ \\begin{bmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{bmatrix} : x_1, \\dots, x_n \\in \\mathbb{R} \\right\\}',
    see: ['vector', 'vector-space', 'zero-vector', 'dimension'],
  },
  {
    id: 'zero-vector',
    term: 'Zero Vector',
    aliases: ['null vector', '0 vector', 'origin'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'The vector $\\mathbf{0}$ whose entries are all zero; it is the additive identity, $\\mathbf{v} + \\mathbf{0} = \\mathbf{v}$ for every $\\mathbf{v}$.',
    long:
      'Geometrically $\\mathbf{0}$ is the origin: an arrow of length 0 with no direction. Every [[subspace]] must contain it, every [[linear-transformation]] sends it to itself ($T(\\mathbf{0}) = \\mathbf{0}$), and every [[homogeneous-system]] $A\\mathbf{x} = \\mathbf{0}$ has it as the [[trivial-solution]].\n\n' +
      'There is a different zero vector for each $\\mathbb{R}^n$, and in an abstract [[vector-space]] it might be the zero polynomial or the zero matrix. Any set of vectors containing $\\mathbf{0}$ is linearly dependent, since $1 \\cdot \\mathbf{0} = \\mathbf{0}$ is a nontrivial combination.\n\n' +
      'Pitfall: $\\mathbf{0}$ is never an [[eigenvector]] and cannot be normalized; dividing by $\\|\\mathbf{0}\\| = 0$ is the classic `normalize()` crash (or NaN). Engine code checks the length before normalizing and falls back to a default direction.',
    tex: '\\mathbf{v} + \\mathbf{0} = \\mathbf{v}, \\qquad 0\\,\\mathbf{v} = \\mathbf{0}, \\qquad \\|\\mathbf{0}\\| = 0',
    example:
      '// Normalizing the zero vector divides by zero: guard it.\n' +
      'Vec3 safeNormalize(Vec3 v, Vec3 fallback = {0, 0, 1}) {\n' +
      '    float len2 = dot(v, v);\n' +
      '    if (len2 < 1e-12f) return fallback;\n' +
      '    return v / std::sqrt(len2);\n' +
      '}',
    exampleLang: 'cpp',
    see: ['euclidean-space', 'subspace', 'trivial-solution', 'linear-dependence'],
  },
  {
    id: 'linear-combination',
    term: 'Linear Combination',
    aliases: ['combination of vectors', 'weighted sum'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'A sum of scalar multiples $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_p\\mathbf{v}_p$ of vectors; the scalars $c_i$ are the *weights*.',
    long:
      'Scaling and adding are the only two things linear algebra does to vectors, and a linear combination does both. From $\\mathbf{e}_1$ and $\\mathbf{e}_2$ you reach every point of the plane as $x\\mathbf{e}_1 + y\\mathbf{e}_2$; from any two non-parallel vectors you can too, with different weights.\n\n' +
      'Asking "is $\\mathbf{b}$ a linear combination of $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$?" is exactly asking whether the system with [[augmented-matrix]] $[\\,\\mathbf{a}_1\\ \\cdots\\ \\mathbf{a}_n \\mid \\mathbf{b}\\,]$ is consistent, and the [[matrix-vector-product]] $A\\mathbf{x}$ is *defined* as the combination of the columns of $A$ with weights from $\\mathbf{x}$. The set of all combinations is the [[span]].\n\n' +
      'Pitfall: weights can be any real numbers, including zero and negatives. In games, a lerp $(1 - t)\\mathbf{a} + t\\mathbf{b}$, a blend of animation poses, and a barycentric point $\\alpha A + \\beta B + \\gamma C$ inside a triangle are all linear combinations (with weights summing to 1).',
    tex: '2\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}',
    see: ['span', 'matrix-vector-product', 'linear-independence', 'basis'],
  },
  {
    id: 'span',
    term: 'Span',
    aliases: ['linear span', 'spanning set', 'Span{v1, ..., vp}'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'The set $\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ of all [[linear-combination|linear combinations]] of the given vectors.',
    long:
      'The span is everything you can reach by scaling and adding the vectors. One nonzero vector spans a line through the origin; two non-parallel vectors in $\\mathbb{R}^3$ span a plane through the origin; three vectors not lying in a common plane span all of $\\mathbb{R}^3$. A span always contains $\\mathbf{0}$ (take all weights zero) and is always a [[subspace]].\n\n' +
      'Test: $\\mathbf{b} \\in \\operatorname{Span}\\{\\mathbf{a}_1, \\dots, \\mathbf{a}_n\\}$ iff $A\\mathbf{x} = \\mathbf{b}$ is consistent, where $A = [\\,\\mathbf{a}_1 \\cdots \\mathbf{a}_n\\,]$. The columns of an $m \\times n$ matrix span $\\mathbb{R}^m$ iff $A$ has a [[pivot]] in every row, so you need at least $m$ vectors to span $\\mathbb{R}^m$.\n\n' +
      'Pitfall: many vectors do not guarantee a big span; ten vectors that all lie on one line still span only that line. "Span" is also a verb: the vectors *span* $W$ when their span equals $W$.',
    tex: '\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\} = \\{ c_1\\mathbf{v}_1 + \\cdots + c_p\\mathbf{v}_p : c_1, \\dots, c_p \\in \\mathbb{R} \\}',
    see: ['linear-combination', 'subspace', 'basis', 'column-space'],
  },
  {
    id: 'norm',
    term: 'Norm (Length)',
    aliases: ['length of a vector', 'Euclidean norm', '2-norm', 'L2 norm'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'The length of a vector, $\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + \\cdots + v_n^2}$.',
    long:
      'It is the [[pythagorean-theorem]] applied once per extra dimension, extending the 2D [[magnitude]] from trigonometry to $\\mathbb{R}^n$. Distance between points is the norm of their difference: $\\operatorname{dist}(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|$.\n\n' +
      'Key facts: $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$; $\\|\\mathbf{v}\\| = 0$ only for $\\mathbf{v} = \\mathbf{0}$; the triangle inequality $\\|\\mathbf{u} + \\mathbf{v}\\| \\le \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$; and the Cauchy–Schwarz inequality $|\\mathbf{u} \\cdot \\mathbf{v}| \\le \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|$. Dividing by the norm gives a [[unit-vector]], $\\mathbf{v} / \\|\\mathbf{v}\\|$.\n\n' +
      'Pitfall: $\\|\\mathbf{u} + \\mathbf{v}\\| \\ne \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$ in general. Performance tip from game code: to compare distances (is the enemy within range $r$?) compare **squared** lengths, $\\mathbf{d} \\cdot \\mathbf{d} \\le r^2$, and skip the square root.',
    tex: '\\left\\| \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix} \\right\\| = \\sqrt{1 + 4 + 4} = 3',
    example:
      '// Range check without a square root\n' +
      'bool inRange(Vec3 a, Vec3 b, float r) {\n' +
      '    Vec3 d = b - a;\n' +
      '    return dot(d, d) <= r * r;   // ||d||^2 <= r^2\n' +
      '}',
    exampleLang: 'cpp',
    see: ['dot-product', 'unit-vector', 'magnitude', 'orthogonal'],
  },
  {
    id: 'orthogonal',
    term: 'Orthogonal',
    aliases: ['perpendicular', 'orthogonal vectors'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'Vectors $\\mathbf{u}$ and $\\mathbf{v}$ are orthogonal when $\\mathbf{u} \\cdot \\mathbf{v} = 0$: perpendicular, generalized to $\\mathbb{R}^n$.',
    long:
      'Since $\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\cos\\theta$, a zero [[dot-product]] means $\\cos\\theta = 0$, a right angle. Orthogonality is equivalent to the Pythagorean relation $\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2$, which is how the idea makes sense in any dimension.\n\n' +
      'By the definition, $\\mathbf{0}$ is orthogonal to every vector, and it is the only vector orthogonal to itself. A vector is orthogonal to a whole [[subspace]] when it is orthogonal to every vector of a spanning set; all such vectors together form the [[orthogonal-complement]].\n\n' +
      'Pitfall: with floating-point data test $|\\mathbf{u} \\cdot \\mathbf{v}| < \\varepsilon$ (relative to the lengths), never `== 0`. In 2D, $(a, b)$ is orthogonal to $(-b, a)$, which is how games build a perpendicular for strafing and wall sliding; in 3D the [[cross-product]] gives a vector orthogonal to two given ones.',
    tex: '\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} \\cdot \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix} = 2 - 2 = 0',
    see: ['dot-product', 'orthogonal-set', 'orthogonal-complement', 'cross-product'],
  },
  {
    id: 'vector-projection',
    term: 'Vector Projection',
    aliases: ['projection of v onto u', 'proj', 'scalar projection', 'component along a vector'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'The projection of $\\mathbf{v}$ onto a nonzero $\\mathbf{u}$ is the multiple of $\\mathbf{u}$ closest to $\\mathbf{v}$: $\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = \\dfrac{\\mathbf{v} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\,\\mathbf{u}$.',
    long:
      'Drop a perpendicular from the tip of $\\mathbf{v}$ to the line through $\\mathbf{u}$: the foot is the projection $\\hat{\\mathbf{v}}$, and the leftover $\\mathbf{v} - \\hat{\\mathbf{v}}$ is [[orthogonal]] to $\\mathbf{u}$. That splits $\\mathbf{v}$ into a part *along* $\\mathbf{u}$ and a part *across* it. The signed length $\\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\|\\mathbf{u}\\|}$ is the *scalar projection* (component).\n\n' +
      'Derivation: choose $c$ so that $(\\mathbf{v} - c\\mathbf{u}) \\cdot \\mathbf{u} = 0$, giving $c = \\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}$. Rescaling $\\mathbf{u}$ does not change the result: projection depends only on the line. For a unit vector it simplifies to $(\\mathbf{v} \\cdot \\mathbf{u})\\,\\mathbf{u}$. Projection onto a whole subspace is the [[orthogonal-projection]].\n\n' +
      'Pitfall: the denominator is $\\mathbf{u} \\cdot \\mathbf{u} = \\|\\mathbf{u}\\|^2$, not $\\|\\mathbf{u}\\|$. Games use projection everywhere: sliding along a wall removes the velocity component along the wall normal, $\\mathbf{v} - (\\mathbf{v} \\cdot \\mathbf{n})\\mathbf{n}$, and the separating-axis collision test projects shapes onto axes.',
    tex: '\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = \\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\,\\mathbf{u}, \\qquad \\mathbf{v} = \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix},\\ \\mathbf{u} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} \\implies \\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = \\frac{4}{2}\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix}',
    example:
      '// Slide along a wall: remove the part of v that points into it.\n' +
      '// n must be a unit normal.\n' +
      'Vec3 slide(Vec3 v, Vec3 n) {\n' +
      '    return v - dot(v, n) * n;\n' +
      '}',
    exampleLang: 'cpp',
    see: ['dot-product', 'orthogonal', 'orthogonal-projection', 'gram-schmidt'],
  },
  {
    id: 'cross-product',
    term: 'Cross Product',
    aliases: ['vector product', 'u × v'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'For $\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^3$, the vector $\\mathbf{u} \\times \\mathbf{v}$ orthogonal to both, with length $\\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\sin\\theta$ and direction given by the [[right-hand-rule]].',
    long:
      'Formula: $\\mathbf{u} \\times \\mathbf{v} = (u_2v_3 - u_3v_2,\\ u_3v_1 - u_1v_3,\\ u_1v_2 - u_2v_1)$, which is the cofactor expansion of a symbolic $3 \\times 3$ [[determinant]] with $\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3$ in the top row. Its length is the area of the parallelogram spanned by $\\mathbf{u}$ and $\\mathbf{v}$, so it is $\\mathbf{0}$ exactly when they are parallel.\n\n' +
      'Algebra: anticommutative ($\\mathbf{v} \\times \\mathbf{u} = -\\mathbf{u} \\times \\mathbf{v}$), distributive, $\\mathbf{u} \\times \\mathbf{u} = \\mathbf{0}$, and $\\mathbf{e}_1 \\times \\mathbf{e}_2 = \\mathbf{e}_3$ (cyclically). The scalar triple product $\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w}) = \\det[\\,\\mathbf{u}\\ \\mathbf{v}\\ \\mathbf{w}\\,]$ is a signed volume.\n\n' +
      'Pitfalls: it is defined only in $\\mathbb{R}^3$, it is **not** associative, and order matters. In engines it builds triangle normals $(B - A) \\times (C - A)$ (whose direction follows the winding order used for back-face culling), camera bases from a forward and an up vector, and torque $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$.',
    tex: '\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} \\times \\begin{bmatrix} 4 \\\\ 5 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} 2\\cdot 6 - 3\\cdot 5 \\\\ 3\\cdot 4 - 1\\cdot 6 \\\\ 1\\cdot 5 - 2\\cdot 4 \\end{bmatrix} = \\begin{bmatrix} -3 \\\\ 6 \\\\ -3 \\end{bmatrix}',
    example:
      'Vec3 cross(Vec3 a, Vec3 b) {\n' +
      '    return { a.y * b.z - a.z * b.y,\n' +
      '             a.z * b.x - a.x * b.z,\n' +
      '             a.x * b.y - a.y * b.x };\n' +
      '}\n' +
      '\n' +
      '// Face normal of triangle ABC (counterclockwise winding)\n' +
      'Vec3 n = normalize(cross(B - A, C - A));',
    exampleLang: 'cpp',
    see: ['right-hand-rule', 'determinant', 'orthogonal', 'orientation'],
  },
  {
    id: 'right-hand-rule',
    term: 'Right-Hand Rule',
    aliases: ['right-handed coordinate system', 'handedness'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'The convention fixing the direction of $\\mathbf{u} \\times \\mathbf{v}$: curl the fingers of your right hand from $\\mathbf{u}$ toward $\\mathbf{v}$ and your thumb points along $\\mathbf{u} \\times \\mathbf{v}$.',
    long:
      'Two directions are perpendicular to both $\\mathbf{u}$ and $\\mathbf{v}$; the right-hand rule picks one. Equivalently, point your index finger along $\\mathbf{u}$ and middle finger along $\\mathbf{v}$; your thumb gives $\\mathbf{u} \\times \\mathbf{v}$. A coordinate system is *right-handed* when $\\mathbf{e}_1 \\times \\mathbf{e}_2 = \\mathbf{e}_3$ looks like this ($x$ right, $y$ up, $z$ toward you).\n\n' +
      'The rule matches the sign of the determinant: $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ form a right-handed triple exactly when $\\det[\\,\\mathbf{u}\\ \\mathbf{v}\\ \\mathbf{w}\\,] > 0$ (see [[orientation]]). It also gives the sense of rotation: a positive angle about an axis turns counterclockwise when the axis points at you.\n\n' +
      'Pitfall: the cross product *formula* is the same in every engine, but the picture is not. OpenGL and Blender use right-handed coordinates; Unity and classic DirectX (and Unreal, with $z$ up) are left-handed, where the same formula visually obeys a *left*-hand rule. Mixing conventions when importing assets flips normals and mirrors meshes.',
    tex: '\\mathbf{e}_1 \\times \\mathbf{e}_2 = \\mathbf{e}_3, \\quad \\mathbf{e}_2 \\times \\mathbf{e}_3 = \\mathbf{e}_1, \\quad \\mathbf{e}_3 \\times \\mathbf{e}_1 = \\mathbf{e}_2',
    see: ['cross-product', 'orientation', 'determinant'],
  },
  {
    id: 'linear-independence',
    term: 'Linear Independence',
    aliases: ['linearly independent', 'independent set'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'Vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ are linearly independent when $c_1\\mathbf{v}_1 + \\cdots + c_p\\mathbf{v}_p = \\mathbf{0}$ forces $c_1 = \\cdots = c_p = 0$.',
    long:
      'Intuition: no vector in the set is redundant; none lies in the [[span]] of the others, so each one adds a new direction. Two vectors are independent iff neither is a multiple of the other; three vectors in $\\mathbb{R}^3$ are independent iff they do not lie in a common plane through the origin.\n\n' +
      'Test: put the vectors as the columns of $A$ and solve $A\\mathbf{x} = \\mathbf{0}$. They are independent iff there is only the [[trivial-solution]], iff every column of $A$ is a [[pivot-column]]. For $n$ vectors in $\\mathbb{R}^n$ this is the same as $\\det A \\ne 0$. Quick facts: more than $n$ vectors in $\\mathbb{R}^n$ are always dependent, and a set containing $\\mathbf{0}$ is always dependent.\n\n' +
      'Pitfall: pairwise non-parallel is **not** enough for three or more vectors: $(1, 0)$, $(0, 1)$, $(1, 1)$ are pairwise non-parallel but dependent. In engines, a degenerate (zero-area) triangle has dependent edge vectors, so their cross product is $\\mathbf{0}$ and normal computation breaks.',
    tex: 'c_1\\mathbf{v}_1 + \\cdots + c_p\\mathbf{v}_p = \\mathbf{0} \\implies c_1 = \\cdots = c_p = 0',
    see: ['linear-dependence', 'span', 'basis', 'trivial-solution'],
  },
  {
    id: 'linear-dependence',
    term: 'Linear Dependence',
    aliases: ['linearly dependent', 'dependence relation'],
    course: 'linalg',
    category: 'Vectors',
    short:
      'Vectors are linearly dependent when some combination $c_1\\mathbf{v}_1 + \\cdots + c_p\\mathbf{v}_p = \\mathbf{0}$ has weights not all zero; such an equation is a *linear dependence relation*.',
    long:
      'Equivalently (for $p \\ge 2$), at least one vector is a linear combination of the others, so removing it does not shrink the [[span]]. If $\\mathbf{v}_1 \\ne \\mathbf{0}$, some $\\mathbf{v}_j$ with $j > 1$ is even a combination of the vectors *before* it.\n\n' +
      'Find a dependence relation by solving $A\\mathbf{x} = \\mathbf{0}$ with the vectors as columns: any nontrivial solution supplies the weights. Dependence is automatic for $p > n$ vectors in $\\mathbb{R}^n$, or for any set containing $\\mathbf{0}$.\n\n' +
      'Pitfall: "dependent" does not mean *every* vector is a combination of the others. In $\\{(1, 0), (2, 0), (0, 1)\\}$ the third vector is not a combination of the first two, yet the set is dependent because $2(1, 0) - (2, 0) = \\mathbf{0}$.',
    tex: '2\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} - \\begin{bmatrix} 2 \\\\ 0 \\end{bmatrix} + 0\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} = \\mathbf{0}',
    see: ['linear-independence', 'span', 'homogeneous-system'],
  },

  // ------------------------------------------------------------------
  // Linear Systems
  // ------------------------------------------------------------------
  {
    id: 'coefficient-matrix',
    term: 'Coefficient Matrix',
    aliases: ['matrix of coefficients'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'The matrix $A$ formed from the coefficients of the variables in a linear system, without the right-hand side; the system is $A\\mathbf{x} = \\mathbf{b}$.',
    long:
      'For $m$ equations in $n$ unknowns, $A$ is $m \\times n$: row $i$ holds the coefficients of equation $i$, column $j$ holds every coefficient of $x_j$. Appending $\\mathbf{b}$ as an extra column gives the [[augmented-matrix]] $[\\,A \\mid \\mathbf{b}\\,]$.\n\n' +
      'Most of the theory is about the coefficient matrix alone, because it decides the *structure* of the solution set for every right-hand side: whether $A\\mathbf{x} = \\mathbf{b}$ can be solved for all $\\mathbf{b}$ (a pivot in every row) and whether solutions are unique (a pivot in every column). The [[determinant]], [[rank]] and [[inverse-matrix]] are properties of $A$, not of the augmented matrix.\n\n' +
      'Pitfall: write every equation with the variables in the same order and put a 0 for a missing variable; $x + z = 4$ in a system with $x, y, z$ gives the row $1\\ \\ 0\\ \\ 1$.',
    tex: '\\begin{aligned} x + 2y - z &= 4 \\\\ 3x - y &= 1 \\end{aligned} \\quad\\longrightarrow\\quad A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & -1 & 0 \\end{bmatrix}',
    see: ['augmented-matrix', 'matrix-vector-product', 'system-of-equations'],
  },
  {
    id: 'row-equivalent',
    term: 'Row Equivalent',
    aliases: ['row equivalence', 'A ∼ B'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'Two matrices are row equivalent, written $A \\sim B$, when a sequence of elementary [[row-operations]] turns one into the other.',
    long:
      'Row operations (add a multiple of one row to another, swap two rows, scale a row by a nonzero constant) are all reversible, so row equivalence works in both directions. The key fact: **row equivalent augmented matrices describe systems with exactly the same solution set**, which is why [[gaussian-elimination]] works.\n\n' +
      'Row operations preserve the solutions of $A\\mathbf{x} = \\mathbf{0}$, hence the linear dependence relations among the columns, the [[null-space]], the [[row-space]] and the [[rank]]. Each matrix is row equivalent to exactly one [[reduced-echelon-form|reduced echelon form]], so two matrices are row equivalent iff they have the same RREF. Each operation is multiplication on the left by an [[elementary-matrix]]: $B = E_k \\cdots E_1 A$.\n\n' +
      'Pitfall: row operations do **not** preserve the [[column-space]] (which is why a basis for $\\operatorname{Col} A$ uses the pivot columns of the original $A$), nor the eigenvalues; and swaps and scalings change the determinant.',
    tex: 'A \\sim B \\iff B = E_k \\cdots E_2 E_1 A \\text{ for some elementary matrices } E_i',
    see: ['row-operations', 'elementary-matrix', 'reduced-echelon-form'],
  },
  {
    id: 'echelon-form',
    term: 'Echelon Form',
    aliases: ['row echelon form', 'REF', 'staircase form'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'A matrix is in (row) echelon form when all zero rows are at the bottom and each row\'s leading entry is strictly to the right of the leading entry of the row above, so every entry below a leading entry is zero.',
    long:
      'The shape is a staircase. Reaching it is the forward phase of [[gaussian-elimination]]: create zeros below each [[pivot]], column by column, left to right. From echelon form you can already read existence (is there a row $[\\,0 \\cdots 0 \\mid b\\,]$ with $b \\ne 0$?), the [[pivot-column|pivot columns]] and the [[rank]], and you can solve by back-substitution.\n\n' +
      'Conditions: (1) every nonzero row is above every zero row; (2) each leading entry (first nonzero number of a row) is in a column to the right of the leading entry of the row above; (3) all entries in a column below a leading entry are zero. The [[reduced-echelon-form]] adds two more conditions.\n\n' +
      'Pitfall: echelon form is **not** unique; different row operations give different echelon forms. What *is* unique is where the pivots sit. For a square matrix an echelon form is upper [[triangular-matrix|triangular]], so the determinant is easy to read off (adjusting for swaps and scalings).',
    tex: '\\begin{bmatrix} \\blacksquare & * & * & * \\\\ 0 & \\blacksquare & * & * \\\\ 0 & 0 & 0 & \\blacksquare \\end{bmatrix} \\qquad (\\blacksquare \\ne 0,\\ * \\text{ any value})',
    see: ['reduced-echelon-form', 'pivot', 'gaussian-elimination', 'row-equivalent'],
  },
  {
    id: 'reduced-echelon-form',
    term: 'Reduced Row Echelon Form',
    aliases: ['RREF', 'reduced echelon form', 'Gauss–Jordan form'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'An [[echelon-form]] in which every leading entry is 1 and is the only nonzero entry in its column; each matrix is row equivalent to exactly one RREF.',
    long:
      'After the forward phase, the backward phase (Gauss–Jordan) scales each pivot row so the pivot is 1 and clears the entries **above** each pivot, working from the bottom pivot up. The result displays the solution directly: each basic variable equals a constant minus a combination of the free variables.\n\n' +
      'Uniqueness makes the RREF a fingerprint: two matrices are [[row-equivalent]] iff they have the same RREF, and a square $A$ is invertible iff its RREF is $I$. Computing $A^{-1}$ by row reducing $[\\,A \\mid I\\,]$ to $[\\,I \\mid A^{-1}\\,]$ is Gauss–Jordan in action.\n\n' +
      'Pitfall: the full RREF costs about 50% more arithmetic than echelon form plus back-substitution, so numerical libraries stop at a triangular form (LU decomposition). With floats, tiny pivots also amplify round-off; partial pivoting swaps in the largest available entry first.',
    tex: '\\begin{bmatrix} 1 & 0 & * & 0 \\\\ 0 & 1 & * & 0 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}',
    see: ['echelon-form', 'pivot', 'basic-variable', 'free-variable'],
  },
  {
    id: 'pivot',
    term: 'Pivot',
    aliases: ['pivot position', 'pivot entry', 'leading entry'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'A pivot position is a location in $A$ that holds a leading 1 in the [[reduced-echelon-form]] of $A$; the nonzero number placed there during elimination is a pivot.',
    long:
      'Pivots are the backbone of elimination: you use each pivot to create zeros below it (and above it, for RREF). Because the RREF is unique, the pivot **positions** depend only on $A$, even though the pivot values depend on the row operations you chose.\n\n' +
      'Counting pivots answers almost every structural question. The number of pivots is $\\operatorname{rank} A$. A pivot in every column $\\iff$ no free variables $\\iff$ $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution $\\iff$ the columns are linearly independent. A pivot in every row $\\iff$ $A\\mathbf{x} = \\mathbf{b}$ is consistent for every $\\mathbf{b}$ $\\iff$ the columns span $\\mathbb{R}^m$.\n\n' +
      'Pitfall: a pivot can never be zero; if the would-be pivot spot holds a 0, swap in a lower row with a nonzero entry there. In floating-point code also avoid tiny pivots (partial pivoting), since dividing by $10^{-12}$ amplifies round-off.',
    tex: '\\#\\text{pivots} = \\operatorname{rank} A \\le \\min(m, n)',
    see: ['pivot-column', 'echelon-form', 'rank', 'basic-variable'],
  },
  {
    id: 'pivot-column',
    term: 'Pivot Column',
    aliases: ['pivot columns'],
    course: 'linalg',
    category: 'Linear Systems',
    short: 'A column of a matrix that contains a [[pivot]] position.',
    long:
      'Pivot columns correspond to [[basic-variable|basic variables]]; the other columns correspond to [[free-variable|free variables]]. The pivot columns of the **original** matrix $A$ form a [[basis]] for $\\operatorname{Col} A$, and each non-pivot column is a combination of the pivot columns to its left (the RREF shows the weights).\n\n' +
      'For an augmented matrix $[\\,A \\mid \\mathbf{b}\\,]$, the system is consistent iff the last column is *not* a pivot column. So "is $\\mathbf{b}$ in the span of the columns?" becomes "does a pivot land in the augmented column?".\n\n' +
      'Pitfall: take the basis vectors for $\\operatorname{Col} A$ from $A$ itself, not from its echelon form. Row operations keep the dependence relations among the columns but change the columns themselves, so the echelon form usually has a different column space.',
    tex: 'A = \\begin{bmatrix} 1 & 2 & 0 & 1 & 3 \\\\ 2 & 4 & 1 & 1 & 5 \\\\ 3 & 6 & 1 & 2 & 8 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 2 & 0 & 1 & 3 \\\\ 0 & 0 & 1 & -1 & -1 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix} \\implies \\text{pivot columns } 1, 3',
    see: ['pivot', 'column-space', 'basic-variable', 'rank'],
  },
  {
    id: 'basic-variable',
    term: 'Basic Variable',
    aliases: ['leading variable', 'pivot variable'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'A variable that corresponds to a [[pivot-column]]; in a consistent system it is solved for in terms of the [[free-variable|free variables]].',
    long:
      'Once the augmented matrix is in RREF, each nonzero row contains exactly one basic variable, and the row reads "basic variable = constant minus a combination of free variables". The basic variables are therefore *determined* by whatever values you choose for the free ones.\n\n' +
      'The number of basic variables is $\\operatorname{rank} A$. If every variable is basic, a consistent system has exactly one solution.\n\n' +
      'Pitfall: which variables are basic depends on the column order, not on anything special about the variables; reorder the unknowns and a different set may become basic. It is bookkeeping, not a law of nature.',
    tex: '\\left[\\begin{array}{ccc|c} 1 & 0 & -2 & 3 \\\\ 0 & 1 & 1 & 4 \\end{array}\\right] \\implies \\begin{cases} x_1 = 3 + 2x_3 \\\\ x_2 = 4 - x_3 \\\\ x_3 \\text{ free} \\end{cases}',
    see: ['free-variable', 'pivot-column', 'parametric-vector-form'],
  },
  {
    id: 'parametric-vector-form',
    term: 'Parametric Vector Form',
    aliases: ['vector parametric form', 'general solution in vector form'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'Writing a solution set as a fixed vector plus a [[linear-combination]] with free parameters, e.g. $\\mathbf{x} = \\mathbf{p} + s\\mathbf{u} + t\\mathbf{v}$ with $s, t \\in \\mathbb{R}$.',
    long:
      'Solve for the basic variables, write $\\mathbf{x}$ as a column vector, then split it into a constant part and one vector per free variable. The vectors multiplying the parameters span the solution set of the [[homogeneous-system]] $A\\mathbf{x} = \\mathbf{0}$, and $\\mathbf{p}$ is one particular solution of $A\\mathbf{x} = \\mathbf{b}$.\n\n' +
      'Structure theorem: if $A\\mathbf{x} = \\mathbf{b}$ is consistent with particular solution $\\mathbf{p}$, its solution set is $\\{\\mathbf{p} + \\mathbf{v}_h : A\\mathbf{v}_h = \\mathbf{0}\\}$, the [[null-space]] translated by $\\mathbf{p}$: a line or plane parallel to $\\operatorname{Nul} A$, through $\\mathbf{p}$. It is the same "particular + homogeneous" structure as in linear [[differential-equation|differential equations]].\n\n' +
      'Pitfall: the particular vector is not unique (any one solution works), so two correct answers can look different. Rays in games are written exactly this way: $\\mathbf{o} + t\\mathbf{d}$ with $t \\ge 0$.',
    tex: '\\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 4 \\\\ 0 \\end{bmatrix} + x_3 \\begin{bmatrix} 2 \\\\ -1 \\\\ 1 \\end{bmatrix}',
    see: ['free-variable', 'homogeneous-system', 'null-space', 'parametric-equations'],
  },
  {
    id: 'homogeneous-system',
    term: 'Homogeneous System',
    aliases: ['homogeneous equation', 'Ax = 0'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'A linear system whose right-hand side is zero, $A\\mathbf{x} = \\mathbf{0}$; it always has the [[trivial-solution]] $\\mathbf{x} = \\mathbf{0}$.',
    long:
      'Because $\\mathbf{x} = \\mathbf{0}$ always works, the only question is whether there are **nontrivial** solutions. There are iff the system has at least one [[free-variable]], i.e. iff some column of $A$ lacks a pivot. In particular, if $A$ has more columns than rows ($n > m$), nontrivial solutions always exist.\n\n' +
      'The solution set is the [[null-space]] $\\operatorname{Nul} A$, a [[subspace]] of $\\mathbb{R}^n$: sums and multiples of solutions are solutions. Its dimension is the number of free variables. Solving $A\\mathbf{x} = \\mathbf{0}$ is also how you test [[linear-independence]] and find [[eigenvector|eigenvectors]] (solve $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$).\n\n' +
      'Pitfall: you need not carry the zero column of the augmented matrix, since row operations never change it. And "only the trivial solution" does not mean "no solution".',
    tex: 'A\\mathbf{x} = \\mathbf{0} \\text{ has a nontrivial solution} \\iff \\text{at least one free variable}',
    see: ['trivial-solution', 'null-space', 'free-variable', 'linear-independence'],
  },
  {
    id: 'trivial-solution',
    term: 'Trivial Solution',
    aliases: ['zero solution'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'The solution $\\mathbf{x} = \\mathbf{0}$ of a [[homogeneous-system]] $A\\mathbf{x} = \\mathbf{0}$; any other solution is *nontrivial*.',
    long:
      'It is trivial because it always works, whatever $A$ is, so it carries no information. All the interesting questions are about whether it is the **only** solution.\n\n' +
      '"$A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution" is one of the most useful sentences in the subject. It is equivalent to: the columns of $A$ are [[linear-independence|linearly independent]]; $\\operatorname{Nul} A = \\{\\mathbf{0}\\}$; $\\mathbf{x} \\mapsto A\\mathbf{x}$ is [[one-to-one]]; and, for square $A$, $A$ is invertible (a line of the [[invertible-matrix-theorem]]).\n\n' +
      'Pitfall: in the definition of linear independence, all weights zero is the trivial solution; showing that the trivial combination gives $\\mathbf{0}$ proves nothing. You must show that no *other* combination does.',
    tex: 'A\\mathbf{x} = \\mathbf{0} \\text{ has only } \\mathbf{x} = \\mathbf{0} \\iff \\operatorname{Nul} A = \\{\\mathbf{0}\\}',
    see: ['homogeneous-system', 'linear-independence', 'one-to-one'],
  },
  {
    id: 'matrix-vector-product',
    term: 'Matrix–Vector Product',
    aliases: ['Ax', 'matrix times vector', 'matrix-vector multiplication'],
    course: 'linalg',
    category: 'Linear Systems',
    short:
      'For an $m \\times n$ matrix $A$ with columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ and $\\mathbf{x} \\in \\mathbb{R}^n$, $A\\mathbf{x} = x_1\\mathbf{a}_1 + \\cdots + x_n\\mathbf{a}_n$, a vector in $\\mathbb{R}^m$.',
    long:
      'Two equivalent views. **Column view** (the definition): $A\\mathbf{x}$ is the [[linear-combination]] of the columns of $A$ with weights from $\\mathbf{x}$. **Row view** (the shortcut): entry $i$ of $A\\mathbf{x}$ is the [[dot-product]] of row $i$ of $A$ with $\\mathbf{x}$. The column view explains the theory; the row view is how you compute by hand.\n\n' +
      'It is defined only when the number of columns of $A$ equals the number of entries of $\\mathbf{x}$. It is linear, $A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v}$ and $A(c\\mathbf{u}) = cA\\mathbf{u}$, so $\\mathbf{x} \\mapsto A\\mathbf{x}$ is a [[linear-transformation]]. With it a whole system becomes one equation $A\\mathbf{x} = \\mathbf{b}$, and $A\\mathbf{e}_j = \\mathbf{a}_j$ picks out column $j$.\n\n' +
      'Pitfall: dimensions. A $3 \\times 2$ matrix times a vector in $\\mathbb{R}^2$ gives a vector in $\\mathbb{R}^3$. Every vertex a GPU draws goes through matrix–vector products ($4 \\times 4$ times $(x, y, z, 1)$), millions of times per frame.',
    tex: '\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 5 \\\\ 6 \\end{bmatrix} = 5\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} + 6\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 17 \\\\ 39 \\end{bmatrix}',
    example:
      '// Mat3 stored as three columns: A x = x*c0 + y*c1 + z*c2\n' +
      'struct Mat3 { Vec3 c0, c1, c2; };\n' +
      '\n' +
      'Vec3 operator*(const Mat3& A, Vec3 v) {\n' +
      '    return v.x * A.c0 + v.y * A.c1 + v.z * A.c2;\n' +
      '}',
    exampleLang: 'cpp',
    see: ['linear-combination', 'matrix-product', 'linear-transformation', 'column-space'],
  },

  // ------------------------------------------------------------------
  // Linear Transformations
  // ------------------------------------------------------------------
  {
    id: 'linear-transformation',
    term: 'Linear Transformation',
    aliases: ['linear map', 'linear operator', 'linear function (linear algebra)'],
    course: 'linalg',
    category: 'Linear Transformations',
    short:
      'A function $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ (or between vector spaces) with $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ and $T(c\\mathbf{u}) = cT(\\mathbf{u})$ for all vectors and scalars.',
    long:
      'Linear maps fix the origin and keep grid lines parallel and evenly spaced. Because $T$ respects combinations, $T(c_1\\mathbf{v}_1 + \\cdots + c_p\\mathbf{v}_p) = c_1T(\\mathbf{v}_1) + \\cdots + c_pT(\\mathbf{v}_p)$: knowing $T$ on a basis determines it everywhere. That is why every linear $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is $T(\\mathbf{x}) = A\\mathbf{x}$ for its [[standard-matrix]].\n\n' +
      'Consequences: $T(\\mathbf{0}) = \\mathbf{0}$; lines map to lines (or points); a [[composition]] of linear maps is linear, with matrix the [[matrix-product]]. Rotations about the origin, scalings, [[shear|shears]], reflections in lines through the origin, and projections are linear. $\\mathbb{R}^n$ is the [[domain]], $\\mathbb{R}^m$ the [[codomain]], and $\\{T(\\mathbf{x})\\}$ the [[range]].\n\n' +
      'Pitfall: translation $T(\\mathbf{x}) = \\mathbf{x} + \\mathbf{b}$ with $\\mathbf{b} \\ne \\mathbf{0}$ is **not** linear, since $T(\\mathbf{0}) \\ne \\mathbf{0}$; neither is $f(x) = mx + b$ despite the algebra name "linear function". Engines get translations into matrix form with [[homogeneous-coordinates]].',
    tex: 'T(c\\,\\mathbf{u} + d\\,\\mathbf{v}) = c\\,T(\\mathbf{u}) + d\\,T(\\mathbf{v})',
    see: ['standard-matrix', 'matrix-vector-product', 'kernel', 'affine-transformation'],
  },
  {
    id: 'codomain',
    term: 'Codomain',
    aliases: ['target space'],
    course: 'linalg',
    category: 'Linear Transformations',
    short:
      'For $T: \\mathbb{R}^n \\to \\mathbb{R}^m$, the codomain is $\\mathbb{R}^m$: the space where outputs are allowed to land.',
    long:
      'Domain, codomain and [[range]] are three different sets. The [[domain]] $\\mathbb{R}^n$ is where inputs live; the codomain $\\mathbb{R}^m$ is declared as part of the function; the range is the set of outputs actually produced, $\\{T(\\mathbf{x}) : \\mathbf{x} \\in \\mathbb{R}^n\\}$. For $T(\\mathbf{x}) = A\\mathbf{x}$ with $A$ of size $m \\times n$, the codomain is $\\mathbb{R}^m$ and the range is $\\operatorname{Col} A$.\n\n' +
      '$T$ is [[onto]] exactly when the range fills the whole codomain. Projecting $\\mathbb{R}^3$ onto the $xy$-plane can be set up with codomain $\\mathbb{R}^3$ (not onto: the range is a plane) or with codomain $\\mathbb{R}^2$ (onto); the rule is the same but the answer to "onto?" changes.\n\n' +
      'Pitfall: the codomain is set by the number of **rows** of $A$, not columns. It is like a C++ function declared to return `Vec3`: that is its codomain, even if it only ever returns vectors with $z = 0$.',
    tex: 'T: \\underbrace{\\mathbb{R}^n}_{\\text{domain}} \\to \\underbrace{\\mathbb{R}^m}_{\\text{codomain}}, \\qquad \\operatorname{range} T = \\operatorname{Col} A \\subseteq \\mathbb{R}^m',
    see: ['range', 'onto', 'linear-transformation', 'domain'],
  },
  {
    id: 'standard-basis',
    term: 'Standard Basis',
    aliases: ['canonical basis', 'e1, e2, ..., en', 'unit coordinate vectors'],
    course: 'linalg',
    category: 'Linear Transformations',
    short:
      'The vectors $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$ of $\\mathbb{R}^n$, where $\\mathbf{e}_j$ has a 1 in entry $j$ and 0 elsewhere; they are the columns of $I_n$.',
    long:
      'In $\\mathbb{R}^3$ these are $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ from physics: unit arrows along the $x$-, $y$- and $z$-axes. Every vector is $\\mathbf{x} = x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n$, so the entries of $\\mathbf{x}$ *are* its coordinates in this [[basis]].\n\n' +
      'The standard basis makes [[standard-matrix|standard matrices]] easy: column $j$ of the matrix of $T$ is $T(\\mathbf{e}_j)$, "where the $j$-th axis goes". It is an [[orthonormal-basis]] and the reference against which other bases are described (see [[change-of-basis-matrix]]).\n\n' +
      'Pitfall: nothing is special about it except convenience. A game object\'s local frame (its right, up and forward vectors) is just as good a basis, and the model matrix is the change of basis from that frame to world coordinates.',
    tex: '\\mathbf{e}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix},\\ \\mathbf{e}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix},\\ \\mathbf{e}_3 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}',
    see: ['basis', 'standard-matrix', 'identity-matrix', 'orthonormal-basis'],
  },
  {
    id: 'standard-matrix',
    term: 'Standard Matrix',
    aliases: ['matrix of a linear transformation', 'matrix of T'],
    course: 'linalg',
    category: 'Linear Transformations',
    short:
      'The unique matrix $A$ with $T(\\mathbf{x}) = A\\mathbf{x}$ for all $\\mathbf{x}$; its columns are the images of the standard basis, $A = [\\,T(\\mathbf{e}_1)\\ \\cdots\\ T(\\mathbf{e}_n)\\,]$.',
    long:
      'Why it works: $\\mathbf{x} = x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n$, so by linearity $T(\\mathbf{x}) = x_1T(\\mathbf{e}_1) + \\cdots + x_nT(\\mathbf{e}_n)$, which is exactly the [[matrix-vector-product]] with those columns. To build the matrix of any [[linear-transformation]], ask "where do the axes go?" and write the answers as columns.\n\n' +
      'Example: rotation by $90^\\circ$ counterclockwise sends $\\mathbf{e}_1 \\mapsto \\mathbf{e}_2$ and $\\mathbf{e}_2 \\mapsto -\\mathbf{e}_1$, so its matrix has columns $(0, 1)$ and $(-1, 0)$. Composing maps multiplies their standard matrices, with the first map applied written on the right.\n\n' +
      'Pitfall: the images go in as **columns**, not rows. Writing them as rows gives the [[transpose]], which for a rotation is the inverse rotation: a classic source of objects spinning the wrong way.',
    tex: 'A = \\begin{bmatrix} T(\\mathbf{e}_1) & \\cdots & T(\\mathbf{e}_n) \\end{bmatrix}, \\qquad R_{90^\\circ} = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}',
    see: ['linear-transformation', 'standard-basis', 'rotation-matrix', 'matrix-product'],
  },
  {
    id: 'one-to-one',
    term: 'One-to-One',
    aliases: ['injective', 'injection', '1-1'],
    course: 'linalg',
    category: 'Linear Transformations',
    short:
      'A map $T$ is one-to-one when each output comes from at most one input: $T(\\mathbf{u}) = T(\\mathbf{v})$ implies $\\mathbf{u} = \\mathbf{v}$.',
    long:
      'For a [[linear-transformation]] there is an easy test: $T$ is one-to-one iff $T(\\mathbf{x}) = \\mathbf{0}$ has only the [[trivial-solution]], i.e. its [[kernel]] is $\\{\\mathbf{0}\\}$ (if $T(\\mathbf{u}) = T(\\mathbf{v})$ then $T(\\mathbf{u} - \\mathbf{v}) = \\mathbf{0}$). For $T(\\mathbf{x}) = A\\mathbf{x}$: one-to-one iff the columns of $A$ are linearly independent iff there is a pivot in every **column**.\n\n' +
      'A one-to-one linear map collapses no direction. It requires $n \\le m$: a map from $\\mathbb{R}^3$ to $\\mathbb{R}^2$ can never be one-to-one, since it must squash some line to $\\mathbf{0}$. For square matrices, one-to-one, [[onto]] and invertible are all the same thing.\n\n' +
      'Pitfall: do not confuse it with [[onto]] (a pivot in every row). Projecting the 3D world onto the 2D screen is not one-to-one: all points along a view ray land on the same pixel, which is why a depth buffer is needed to decide which one you see.',
    tex: 'T \\text{ one-to-one} \\iff \\ker T = \\{\\mathbf{0}\\} \\iff \\text{pivot in every column of } A',
    see: ['onto', 'kernel', 'linear-independence', 'one-to-one-function'],
  },
  {
    id: 'onto',
    term: 'Onto',
    aliases: ['surjective', 'surjection', 'onto map'],
    course: 'linalg',
    category: 'Linear Transformations',
    short:
      'A map $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is onto when every $\\mathbf{b}$ in the codomain is an output: $T(\\mathbf{x}) = \\mathbf{b}$ has at least one solution for every $\\mathbf{b} \\in \\mathbb{R}^m$.',
    long:
      'Onto means the [[range]] equals the [[codomain]]. For $T(\\mathbf{x}) = A\\mathbf{x}$: onto iff the columns of $A$ [[span]] $\\mathbb{R}^m$ iff $\\operatorname{Col} A = \\mathbb{R}^m$ iff $A$ has a pivot in every **row** iff $\\operatorname{rank} A = m$.\n\n' +
      'An onto map requires $n \\ge m$: two vectors cannot span $\\mathbb{R}^3$, so no linear map $\\mathbb{R}^2 \\to \\mathbb{R}^3$ is onto. One-to-one and onto together (a *bijection*) means $A$ is square and invertible.\n\n' +
      'Pitfall: onto is about **existence** of solutions, [[one-to-one]] about **uniqueness**. A matrix whose echelon form has a zero row is not onto: some right-hand sides make the system inconsistent.',
    tex: 'T \\text{ onto} \\iff \\operatorname{Col} A = \\mathbb{R}^m \\iff \\text{pivot in every row of } A',
    see: ['one-to-one', 'codomain', 'span', 'column-space'],
  },
  {
    id: 'shear',
    term: 'Shear',
    aliases: ['shear transformation', 'shear matrix', 'skew'],
    course: 'linalg',
    category: 'Linear Transformations',
    short:
      'A linear map that slides each point parallel to a fixed line by an amount proportional to its distance from that line, e.g. $(x, y) \\mapsto (x + ky,\\ y)$ with matrix $\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}$.',
    long:
      'A horizontal shear keeps $\\mathbf{e}_1$ fixed and tips $\\mathbf{e}_2$ to $(k, 1)$: the unit square becomes a parallelogram with the same base and height, so area is unchanged ($\\det = 1$). A vertical shear is $\\begin{bmatrix} 1 & 0 \\\\ k & 1 \\end{bmatrix}$. Row-replacement [[elementary-matrix|elementary matrices]] are shears.\n\n' +
      'Shears are the standard example of a matrix that is **not** [[diagonalizable]] (for $k \\ne 0$): the only eigenvalue is $1$, with [[algebraic-multiplicity]] 2, but its eigenspace is just the $x$-axis ([[geometric-multiplicity]] 1).\n\n' +
      'Pitfall: a shear preserves area but not lengths or angles, so it is not a rotation even though its determinant is 1. Graphics uses shears for italic text, oblique projections and wind-bent grass; three shears can even compose into a rotation, a classic image-rotation trick.',
    tex: '\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} x + ky \\\\ y \\end{bmatrix}',
    see: ['standard-matrix', 'elementary-matrix', 'diagonalizable', 'determinant'],
  },
  {
    id: 'reflection-matrix',
    term: 'Reflection Matrix',
    aliases: ['mirror matrix', 'Householder reflection', 'Householder matrix'],
    course: 'linalg',
    category: 'Linear Transformations',
    short:
      'The matrix of a reflection across a line (or plane) through the origin; across the line at angle $\\theta$ to the $x$-axis it is $\\begin{bmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{bmatrix}$.',
    long:
      'Common cases: across the $x$-axis $\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$, across the $y$-axis $\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, across $y = x$ $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ (swap coordinates). In any dimension, reflecting across the hyperplane with unit normal $\\mathbf{n}$ is $H = I - 2\\mathbf{n}\\mathbf{n}^T$ (a Householder matrix): subtract the normal component twice.\n\n' +
      'Every reflection is symmetric and [[orthogonal-matrix|orthogonal]], is its own inverse ($H^2 = I$), and has $\\det = -1$: it reverses [[orientation]]. Its eigenvalues are $1$ (vectors in the mirror) and $-1$ (the normal direction).\n\n' +
      'Pitfall: a bounce reflects the *velocity* with the same formula, $\\mathbf{v} - 2(\\mathbf{v} \\cdot \\mathbf{n})\\mathbf{n}$ (it is `reflect()` in GLSL and HLSL). A mirrored model has a transform with negative determinant, which flips triangle winding; engines detect $\\det < 0$ and swap the culling mode.',
    tex: 'H = I - 2\\,\\mathbf{n}\\mathbf{n}^{T} \\ \\ (\\|\\mathbf{n}\\| = 1), \\qquad \\det H = -1, \\qquad H^2 = I',
    see: ['rotation-matrix', 'orthogonal-matrix', 'orientation', 'reflection'],
  },

  // ------------------------------------------------------------------
  // Matrix Algebra
  // ------------------------------------------------------------------
  {
    id: 'square-matrix',
    term: 'Square Matrix',
    aliases: ['n × n matrix'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short: 'A matrix with the same number of rows and columns, $n \\times n$; it maps $\\mathbb{R}^n$ to itself.',
    long:
      'Only square matrices have a [[determinant]], a [[trace]], [[eigenvalue|eigenvalues]] and (possibly) an [[inverse-matrix|inverse]], and only they can be raised to powers $A^k$. The *main diagonal* holds the entries $a_{11}, a_{22}, \\dots, a_{nn}$.\n\n' +
      'For square $A$ the [[invertible-matrix-theorem]] ties everything together: one-to-one, onto, $n$ pivots, independent columns, $\\det A \\ne 0$ and "$0$ is not an eigenvalue" are all equivalent. That shortcut fails for non-square matrices, where one-to-one and onto are different questions.\n\n' +
      'Pitfall: a non-square matrix can have a one-sided inverse but never a two-sided one. Every transform in a render pipeline (model, view, projection) is a square $4 \\times 4$ matrix, which is what lets them be multiplied into a single matrix.',
    tex: 'A = \\begin{bmatrix} a_{11} & \\cdots & a_{1n} \\\\ \\vdots & \\ddots & \\vdots \\\\ a_{n1} & \\cdots & a_{nn} \\end{bmatrix}',
    see: ['identity-matrix', 'determinant', 'inverse-matrix', 'invertible-matrix-theorem'],
  },
  {
    id: 'identity-matrix',
    term: 'Identity Matrix',
    aliases: ['I', 'I_n', 'unit matrix'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'The $n \\times n$ matrix $I_n$ with 1s on the main diagonal and 0s elsewhere; $I\\mathbf{x} = \\mathbf{x}$ and $AI = IA = A$.',
    long:
      'Its columns are the [[standard-basis]] vectors, so the transformation leaves every axis, and therefore every vector, where it is: it is the "do nothing" transform, the matrix version of multiplying by 1 (an [[identity-element]]).\n\n' +
      'It anchors the definition of the inverse ($AA^{-1} = A^{-1}A = I$), the RREF of every invertible matrix, and the characteristic equation $\\det(A - \\lambda I) = 0$ (subtract $\\lambda$ down the diagonal). Its determinant is 1, and every nonzero vector is an eigenvector with eigenvalue 1.\n\n' +
      'Pitfall: $A - \\lambda$ is meaningless (a matrix minus a number); write $A - \\lambda I$. Engines initialize transforms to the identity; a model matrix accidentally left all zeros (instead of identity) makes the mesh vanish.',
    tex: 'I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}, \\qquad AI = IA = A',
    see: ['standard-basis', 'inverse-matrix', 'diagonal-matrix', 'identity-element'],
  },
  {
    id: 'diagonal-matrix',
    term: 'Diagonal Matrix',
    aliases: ['diag(d1, ..., dn)', 'scale matrix'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'A square matrix whose only nonzero entries lie on the main diagonal, $D = \\operatorname{diag}(d_1, \\dots, d_n)$; it scales axis $i$ by $d_i$.',
    long:
      'Diagonal matrices are the easy case for everything: $D\\mathbf{x}$ multiplies entry $i$ by $d_i$; $D^k = \\operatorname{diag}(d_1^k, \\dots, d_n^k)$; $\\det D = d_1 \\cdots d_n$; the eigenvalues are the $d_i$, with the standard basis vectors as eigenvectors; and $D^{-1} = \\operatorname{diag}(1/d_1, \\dots, 1/d_n)$ when no $d_i$ is 0.\n\n' +
      'The whole point of [[diagonalizable|diagonalization]] is to find a basis in which a matrix becomes diagonal, $A = PDP^{-1}$, so that $A^k = PD^kP^{-1}$. Diagonal matrices commute with each other (but not, in general, with other matrices).\n\n' +
      'Pitfall: a *non-uniform* scale such as $\\operatorname{diag}(2, 1, 1)$ does not preserve angles, so surface normals must be transformed by the inverse transpose rather than by the scale itself; under a uniform scale $sI$ normal directions are unchanged.',
    tex: 'D = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix} \\implies D^k = \\begin{bmatrix} 2^k & 0 \\\\ 0 & 3^k \\end{bmatrix}',
    see: ['diagonalizable', 'identity-matrix', 'eigenvalue', 'triangular-matrix'],
  },
  {
    id: 'matrix-product',
    term: 'Matrix Product',
    aliases: ['matrix multiplication', 'AB', 'product of matrices'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'For $A$ ($m \\times n$) and $B$ ($n \\times p$), $AB$ is the $m \\times p$ matrix $[\\,A\\mathbf{b}_1\\ \\cdots\\ A\\mathbf{b}_p\\,]$; entrywise $(AB)_{ij} = \\sum_{k=1}^{n} a_{ik}b_{kj}$ (row $i$ of $A$ dotted with column $j$ of $B$).',
    long:
      'Matrix multiplication is defined so that it represents [[composition]]: $(AB)\\mathbf{x} = A(B\\mathbf{x})$, "first apply $B$, then $A$". Each column of $AB$ is $A$ times the matching column of $B$. Inner dimensions must agree: $(m \\times n)(n \\times p) = m \\times p$.\n\n' +
      'Rules that hold: associativity $(AB)C = A(BC)$, distributivity, $(AB)^T = B^TA^T$, $(AB)^{-1} = B^{-1}A^{-1}$, $\\det(AB) = \\det A\\,\\det B$. Rules that **fail**: $AB \\ne BA$ in general; $AB = AC$ does not imply $B = C$; $AB = 0$ does not imply $A = 0$ or $B = 0$.\n\n' +
      'Pitfall: order. With column vectors, $M = TRS$ applies the scale $S$ first, then the rotation, then the translation; reversing it orbits the object around the origin instead of spinning it in place. (Row-vector code, common with DirectX, writes $\\mathbf{v}SRT$: the same thing transposed.) The naive product costs $mnp$ multiplications, 64 for two $4 \\times 4$ matrices.',
    tex: '(AB)_{ij} = \\sum_{k=1}^{n} a_{ik}\\,b_{kj}, \\qquad \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}',
    example:
      '// C = A * B for 4x4 matrices: C[i][j] = row i of A . column j of B\n' +
      'using Mat4 = std::array<std::array<float, 4>, 4>;\n' +
      '\n' +
      'Mat4 mul(const Mat4& A, const Mat4& B) {\n' +
      '    Mat4 C{};\n' +
      '    for (int i = 0; i < 4; ++i)\n' +
      '        for (int j = 0; j < 4; ++j)\n' +
      '            for (int k = 0; k < 4; ++k)\n' +
      '                C[i][j] += A[i][k] * B[k][j];\n' +
      '    return C;\n' +
      '}',
    exampleLang: 'cpp',
    see: ['matrix-vector-product', 'composition', 'transpose', 'inverse-matrix'],
  },
  {
    id: 'transpose',
    term: 'Transpose',
    aliases: ['A^T', 'matrix transpose'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'The transpose $A^T$ of an $m \\times n$ matrix is the $n \\times m$ matrix whose rows are the columns of $A$: $(A^T)_{ij} = a_{ji}$.',
    long:
      'Flip the matrix across its main diagonal. Rules: $(A^T)^T = A$, $(A + B)^T = A^T + B^T$, $(cA)^T = cA^T$, $(AB)^T = B^TA^T$ (order reverses), $(A^{-1})^T = (A^T)^{-1}$, $\\det A^T = \\det A$, $\\operatorname{rank} A^T = \\operatorname{rank} A$.\n\n' +
      'The dot product is a matrix product with a transpose, $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u}^T\\mathbf{v}$, which makes the transpose the key to orthogonality: $(A\\mathbf{x}) \\cdot \\mathbf{y} = \\mathbf{x} \\cdot (A^T\\mathbf{y})$, [[orthogonal-matrix|orthogonal matrices]] satisfy $Q^{-1} = Q^T$, [[symmetric-matrix|symmetric matrices]] satisfy $A^T = A$, and least squares solves $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$.\n\n' +
      'Pitfalls: $(AB)^T \\ne A^TB^T$. Row-major versus column-major *storage* is a memory-layout choice, not a transpose of the math, but reading one layout as the other does transpose the matrix (a frequent shader bug). Surface normals transform by $(M^{-1})^T$, the inverse transpose of the model matrix.',
    tex: '\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}^{T} = \\begin{bmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{bmatrix}, \\qquad (AB)^T = B^TA^T',
    see: ['symmetric-matrix', 'orthogonal-matrix', 'matrix-product', 'row-space'],
  },
  {
    id: 'inverse-matrix',
    term: 'Inverse Matrix',
    aliases: ['A^{-1}', 'matrix inverse', 'inverse of a matrix'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'For a square $A$, the matrix $A^{-1}$ with $AA^{-1} = A^{-1}A = I$; it exists exactly when $\\det A \\ne 0$, and then $A\\mathbf{x} = \\mathbf{b}$ has the unique solution $\\mathbf{x} = A^{-1}\\mathbf{b}$.',
    long:
      'Geometrically, $A^{-1}$ undoes the transformation $A$, like an [[inverse-function]]. For $2 \\times 2$: $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$ (swap the diagonal, negate the off-diagonal, divide by the determinant). In general, row reduce $[\\,A \\mid I\\,]$; if the left block becomes $I$, the right block is $A^{-1}$.\n\n' +
      'Rules: $(A^{-1})^{-1} = A$, $(AB)^{-1} = B^{-1}A^{-1}$ (socks and shoes: undo the last step first), $(A^T)^{-1} = (A^{-1})^T$, $\\det A^{-1} = 1/\\det A$. For an orthogonal matrix the inverse is free, $Q^{-1} = Q^T$, so a rigid transform $\\mathbf{x} \\mapsto R\\mathbf{x} + \\mathbf{t}$ inverts to $\\mathbf{y} \\mapsto R^T(\\mathbf{y} - \\mathbf{t})$. That is exactly how a camera\'s **view matrix** is built from its world transform.\n\n' +
      'Pitfall: numerically, do not compute $A^{-1}$ just to solve $A\\mathbf{x} = \\mathbf{b}$; elimination (LU) is cheaper and more accurate. And $(A + B)^{-1} \\ne A^{-1} + B^{-1}$.',
    tex: '\\begin{bmatrix} 2 & 1 \\\\ 5 & 3 \\end{bmatrix}^{-1} = \\frac{1}{6 - 5}\\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix} = \\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix}',
    example:
      '// Inverse of a rigid transform y = R x + t (R a rotation):\n' +
      '// x = R^T (y - t), so the inverse is (R^T, -R^T t). No general inverse needed.\n' +
      'struct Rigid { Mat3 R; Vec3 t; };\n' +
      '\n' +
      'Rigid inverse(const Rigid& m) {\n' +
      '    Mat3 Rt = transpose(m.R);\n' +
      '    return { Rt, -(Rt * m.t) };\n' +
      '}',
    exampleLang: 'cpp',
    see: ['invertible-matrix', 'singular-matrix', 'determinant', 'invertible-matrix-theorem'],
  },
  {
    id: 'invertible-matrix',
    term: 'Invertible Matrix',
    aliases: ['nonsingular matrix', 'invertible', 'nonsingular'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'A square matrix that has an [[inverse-matrix|inverse]]; equivalently $\\det A \\ne 0$, or $A$ is row equivalent to $I_n$.',
    long:
      'An invertible matrix represents a transformation that loses no information: it is [[one-to-one]] and [[onto]], so every output comes from exactly one input and the map can be undone. Its columns form a [[basis]] of $\\mathbb{R}^n$.\n\n' +
      'Invertibility is the hub of the [[invertible-matrix-theorem]], which lists more than a dozen equivalent conditions. Products of invertible matrices are invertible, and every invertible matrix is a product of [[elementary-matrix|elementary matrices]].\n\n' +
      'Pitfall: in floating point, "invertible" is not a yes/no question. A matrix can be technically invertible yet nearly [[singular-matrix|singular]], so its inverse amplifies errors enormously; the condition number $\\sigma_1/\\sigma_n$ (from the [[singular-values]]) measures how close to singular it is. (A tiny determinant alone is not the test: $0.1 I_{10}$ has $\\det = 10^{-10}$ but is perfectly well conditioned.)',
    tex: 'A \\text{ invertible} \\iff \\det A \\ne 0 \\iff A \\sim I_n',
    see: ['inverse-matrix', 'singular-matrix', 'invertible-matrix-theorem', 'determinant'],
  },
  {
    id: 'singular-matrix',
    term: 'Singular Matrix',
    aliases: ['noninvertible matrix', 'degenerate matrix', 'singular'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'A square matrix with no inverse; equivalently $\\det A = 0$, or $A\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution.',
    long:
      'A singular matrix flattens space into a lower-dimensional subspace (a plane, a line, a point), so volumes become 0 and information is lost: you cannot tell which input produced a given output. Its columns are linearly dependent, it has fewer than $n$ pivots, $0$ is an [[eigenvalue]], and $A\\mathbf{x} = \\mathbf{b}$ has either no solution or infinitely many.\n\n' +
      'Examples: any matrix with a zero row or column, two equal (or proportional) rows, or any projection onto a plane. An orthographic projection to the screen and a scale of $0$ along some axis are singular transforms.\n\n' +
      'Pitfall: "singular" applies only to square matrices; a $2 \\times 3$ matrix is neither singular nor invertible. In code, check before inverting: scale an object by exactly 0 and its normal matrix $(M^{-1})^T$ fills with NaNs or infinities.',
    tex: '\\det\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} = 4 - 4 = 0',
    see: ['invertible-matrix', 'determinant', 'null-space', 'invertible-matrix-theorem'],
  },
  {
    id: 'elementary-matrix',
    term: 'Elementary Matrix',
    aliases: ['elementary matrices'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'A matrix obtained by performing one elementary [[row-operations|row operation]] on $I$; the product $EA$ performs that same row operation on $A$.',
    long:
      'There are three kinds: row replacement (add $k$ times one row to another; a [[shear]]), interchange (swap two rows; a reflection), and scaling (multiply a row by $k \\ne 0$; a stretch). Each is invertible, and its inverse is the elementary matrix of the reverse operation.\n\n' +
      'They turn elimination into algebra: if $E_k \\cdots E_1 A = I$, then $A^{-1} = E_k \\cdots E_1$, which proves the $[\\,A \\mid I\\,] \\sim [\\,I \\mid A^{-1}\\,]$ algorithm and shows that every invertible matrix is a product of elementary matrices. Recording only the replacement steps gives the LU factorization. Their determinants explain the row-operation rules for determinants: replacement $1$, swap $-1$, scaling $k$.\n\n' +
      'Pitfall: elementary matrices multiply on the **left** to act on rows. Multiplying on the right ($AE$) performs the corresponding *column* operation instead.',
    tex: 'E = \\begin{bmatrix} 1 & 0 \\\\ -3 & 1 \\end{bmatrix}: \\quad EA \\text{ performs } R_2 \\to R_2 - 3R_1',
    see: ['row-operations', 'row-equivalent', 'inverse-matrix', 'determinant'],
  },
  {
    id: 'invertible-matrix-theorem',
    term: 'Invertible Matrix Theorem',
    aliases: ['IMT', 'fundamental theorem of invertible matrices'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'For a square $n \\times n$ matrix $A$, a long list of statements are all equivalent: either all are true ($A$ is invertible) or all are false ($A$ is singular).',
    long:
      'The core list: (a) $A$ is invertible; (b) $A \\sim I_n$; (c) $A$ has $n$ [[pivot|pivots]]; (d) $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution; (e) the columns are linearly independent; (f) $\\mathbf{x} \\mapsto A\\mathbf{x}$ is [[one-to-one]]; (g) $A\\mathbf{x} = \\mathbf{b}$ has a solution for every $\\mathbf{b}$; (h) the columns span $\\mathbb{R}^n$; (i) $\\mathbf{x} \\mapsto A\\mathbf{x}$ is [[onto]]; (j) some $C$ has $CA = I$; (k) some $D$ has $AD = I$; (l) $A^T$ is invertible. Later chapters add: the columns form a basis of $\\mathbb{R}^n$; $\\operatorname{Col} A = \\mathbb{R}^n$; $\\operatorname{rank} A = n$; $\\operatorname{Nul} A = \\{\\mathbf{0}\\}$; $\\det A \\ne 0$; $0$ is not an eigenvalue; all [[singular-values]] are positive.\n\n' +
      'Why it holds: for a square matrix, "a pivot in every column" and "a pivot in every row" both say "$n$ pivots", so existence and uniqueness of solutions come together. The power is that checking any one statement settles all of them.\n\n' +
      'Pitfall: it applies **only** to square matrices. For a $3 \\times 2$ matrix, independent columns do not imply that the columns span $\\mathbb{R}^3$.',
    tex: 'A \\text{ invertible} \\iff \\det A \\ne 0 \\iff \\operatorname{rank} A = n \\iff \\operatorname{Nul} A = \\{\\mathbf{0}\\} \\iff 0 \\text{ is not an eigenvalue}',
    see: ['invertible-matrix', 'singular-matrix', 'pivot', 'rank'],
  },
  {
    id: 'homogeneous-coordinates',
    term: 'Homogeneous Coordinates',
    aliases: ['projective coordinates', 'w coordinate'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'Representing a point $(x, y, z)$ of $\\mathbb{R}^3$ by the 4-vector $(x, y, z, 1)$, and a direction by $(x, y, z, 0)$, so that translations and perspective projections become matrix multiplications.',
    long:
      'Translation is not linear in $\\mathbb{R}^3$, but one dimension up it is (a [[shear]] of $\\mathbb{R}^4$): $\\begin{bmatrix} I & \\mathbf{t} \\\\ \\mathbf{0}^T & 1 \\end{bmatrix}\\begin{bmatrix} \\mathbf{x} \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} \\mathbf{x} + \\mathbf{t} \\\\ 1 \\end{bmatrix}$. Every [[affine-transformation]] becomes a $4 \\times 4$ matrix (a $3 \\times 3$ matrix in 2D), and a chain of scales, rotations and translations collapses into one matrix by the [[matrix-product]].\n\n' +
      'The fourth entry $w$ does real work. Points have $w = 1$, so they get translated; directions (velocities, normals) have $w = 0$, so translation ignores them, exactly as it should. More generally $(x, y, z, w)$ with $w \\ne 0$ stands for the point $(x/w, y/w, z/w)$: a perspective projection matrix copies depth into $w$, and the GPU\'s *perspective divide* makes distant objects smaller.\n\n' +
      'Pitfall: getting $w$ wrong. Transforming a direction with $w = 1$ adds the translation to it, and forgetting the divide by $w$ after projection gives garbage screen positions.',
    tex: '\\begin{bmatrix} 1 & 0 & 0 & t_x \\\\ 0 & 1 & 0 & t_y \\\\ 0 & 0 & 1 & t_z \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} x + t_x \\\\ y + t_y \\\\ z + t_z \\\\ 1 \\end{bmatrix}',
    example:
      '// Same 4x4 model matrix, different w:\n' +
      'Vec4 p = M * Vec4{pos, 1.0f};   // point: scaled, rotated AND translated\n' +
      'Vec4 d = M * Vec4{dir, 0.0f};   // direction: scaled and rotated only\n' +
      '\n' +
      '// After a perspective projection, divide by w\n' +
      'Vec4 clip = P * V * M * Vec4{pos, 1.0f};\n' +
      'Vec3 ndc  = Vec3{clip.x, clip.y, clip.z} / clip.w;',
    exampleLang: 'cpp',
    see: ['affine-transformation', 'translation', 'matrix-product', 'linear-transformation'],
  },
  {
    id: 'affine-transformation',
    term: 'Affine Transformation',
    aliases: ['affine map', 'affine transform'],
    course: 'linalg',
    category: 'Matrix Algebra',
    short:
      'A map of the form $T(\\mathbf{x}) = A\\mathbf{x} + \\mathbf{b}$: a [[linear-transformation]] followed by a [[translation]].',
    long:
      'Affine maps are what game objects actually do: scale, rotate and shear (the $A$ part), then move (the $\\mathbf{b}$ part). They send lines to lines, keep parallel lines parallel, and preserve ratios along a line (midpoints stay midpoints, barycentric weights are preserved), but they do not fix the origin.\n\n' +
      'An affine map is linear only when $\\mathbf{b} = \\mathbf{0}$. In [[homogeneous-coordinates]] it becomes the single matrix $\\begin{bmatrix} A & \\mathbf{b} \\\\ \\mathbf{0}^T & 1 \\end{bmatrix}$, and composing affine maps means multiplying these matrices. When $A$ is invertible, the inverse map is $\\mathbf{y} \\mapsto A^{-1}(\\mathbf{y} - \\mathbf{b})$.\n\n' +
      'Pitfall: affine maps preserve *affine* combinations (weights summing to 1), not arbitrary linear combinations: $T(\\mathbf{u} + \\mathbf{v}) \\ne T(\\mathbf{u}) + T(\\mathbf{v})$ when $\\mathbf{b} \\ne \\mathbf{0}$. Perspective projection is **not** affine (parallel rails meet at the horizon), which is why it needs the divide by $w$.',
    tex: 'T(\\mathbf{x}) = A\\mathbf{x} + \\mathbf{b} \\quad\\longleftrightarrow\\quad \\begin{bmatrix} A & \\mathbf{b} \\\\ \\mathbf{0}^T & 1 \\end{bmatrix} \\begin{bmatrix} \\mathbf{x} \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} A\\mathbf{x} + \\mathbf{b} \\\\ 1 \\end{bmatrix}',
    see: ['homogeneous-coordinates', 'linear-transformation', 'translation'],
  },

  // ------------------------------------------------------------------
  // Determinants
  // ------------------------------------------------------------------
  {
    id: 'determinant',
    term: 'Determinant',
    aliases: ['det', 'det A', '|A|'],
    course: 'linalg',
    category: 'Determinants',
    short:
      'A number $\\det A$ assigned to a square matrix; it is the factor by which $A$ scales signed area (2D) or volume (3D), and $A$ is invertible iff $\\det A \\ne 0$.',
    long:
      'For $2 \\times 2$: $\\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc$. For larger matrices use [[cofactor-expansion]] (good by hand for small or sparse matrices) or row reduce to triangular form and multiply the diagonal (good in general, about $\\tfrac{2}{3}n^3$ operations). The sign records [[orientation]]: negative means the map includes a reflection.\n\n' +
      'Properties: $\\det(AB) = \\det A\\,\\det B$; $\\det A^T = \\det A$; $\\det A^{-1} = 1/\\det A$; $\\det(cA) = c^n\\det A$ for $n \\times n$ $A$; a row replacement leaves $\\det$ unchanged, a swap negates it, scaling a row by $k$ multiplies it by $k$; the determinant of a [[triangular-matrix]] is the product of its diagonal; and $\\det A$ equals the product of the eigenvalues.\n\n' +
      'Pitfalls: $\\det(A + B) \\ne \\det A + \\det B$, and $\\det(2A) = 2^n\\det A$, not $2\\det A$. Avoid cofactor expansion on big matrices; it takes about $n!$ operations. Engines check the sign of $\\det$ of a model matrix\'s upper-left $3 \\times 3$ block to detect mirroring (negative) and degenerate scales (zero).',
    tex: '\\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc, \\qquad \\det\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{bmatrix} = 1',
    see: ['cofactor-expansion', 'orientation', 'invertible-matrix', 'triangular-matrix'],
  },
  {
    id: 'minor',
    term: 'Minor',
    aliases: ['(i, j)-minor', 'M_ij'],
    course: 'linalg',
    category: 'Determinants',
    short:
      'The $(i, j)$-minor $M_{ij}$ of a square matrix $A$ is the determinant of the submatrix $A_{ij}$ obtained by deleting row $i$ and column $j$.',
    long:
      'Minors are the smaller determinants that cofactor expansion reduces to: an $n \\times n$ determinant becomes a weighted sum of $(n - 1) \\times (n - 1)$ minors. Attach the checkerboard sign and you get the [[cofactor]] $C_{ij} = (-1)^{i+j}M_{ij}$.\n\n' +
      'For a $3 \\times 3$ matrix each minor is a $2 \\times 2$ determinant $ad - bc$. Minors also appear in the adjugate formula for the inverse and in rank tests (the rank is the size of the largest square submatrix with nonzero determinant).\n\n' +
      'Pitfall: the minor is a number (the determinant of the submatrix), not the submatrix itself, and it carries no sign. Forgetting $(-1)^{i+j}$ when moving from minors to cofactors is the most common cofactor-expansion error.',
    tex: 'A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{bmatrix}: \\quad M_{12} = \\det\\begin{bmatrix} 0 & 4 \\\\ 5 & 0 \\end{bmatrix} = -20',
    see: ['cofactor', 'cofactor-expansion', 'determinant'],
  },
  {
    id: 'cofactor',
    term: 'Cofactor',
    aliases: ['C_ij', '(i, j)-cofactor', 'signed minor'],
    course: 'linalg',
    category: 'Determinants',
    short: 'The $(i, j)$-cofactor of $A$ is $C_{ij} = (-1)^{i+j}M_{ij}$: the [[minor]] with a checkerboard sign.',
    long:
      'The signs follow the pattern $\\begin{smallmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{smallmatrix}$, starting with $+$ in the top-left corner. Cofactors are the weights in [[cofactor-expansion]]: $\\det A = a_{i1}C_{i1} + \\cdots + a_{in}C_{in}$ for any row $i$.\n\n' +
      'Arranged in a matrix and transposed, the cofactors form the *adjugate* $\\operatorname{adj} A = [C_{ij}]^T$, and $A^{-1} = \\frac{1}{\\det A}\\operatorname{adj} A$. For $2 \\times 2$ this is the familiar "swap and negate" formula, and it is also behind [[cramers-rule]]. The cross product $\\mathbf{u} \\times \\mathbf{v}$ is a vector of cofactors.\n\n' +
      'Pitfall: the adjugate is the **transpose** of the cofactor matrix; skipping the transpose gives a wrong inverse whenever $A$ is not symmetric.',
    tex: 'C_{ij} = (-1)^{i+j}M_{ij}, \\qquad A^{-1} = \\frac{1}{\\det A}\\begin{bmatrix} C_{11} & C_{21} & \\cdots \\\\ C_{12} & C_{22} & \\cdots \\\\ \\vdots & \\vdots & \\ddots \\end{bmatrix}',
    see: ['minor', 'cofactor-expansion', 'inverse-matrix', 'cramers-rule'],
  },
  {
    id: 'cofactor-expansion',
    term: 'Cofactor Expansion',
    aliases: ['Laplace expansion', 'expansion by minors'],
    course: 'linalg',
    category: 'Determinants',
    short:
      'Computing $\\det A$ along any row or column: $\\det A = \\sum_{j} a_{ij}C_{ij}$ (along row $i$) $= \\sum_{i} a_{ij}C_{ij}$ (down column $j$).',
    long:
      'Each term is an entry times its [[cofactor]], so an $n \\times n$ determinant reduces to $n$ determinants of size $n - 1$. Every row and column gives the same answer, so expand along the one with the most zeros. For a [[triangular-matrix]], expanding down the first column again and again shows that $\\det$ is the product of the diagonal.\n\n' +
      'Worked $3 \\times 3$ example along the first row: $\\det\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{bmatrix} = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1$.\n\n' +
      'Pitfall: the cost grows like $n!$; a $10 \\times 10$ expansion takes millions of multiplications, while row reduction needs a few hundred. Use expansion for $3 \\times 3$ and for matrices with many zeros, elimination otherwise. The diagonal shortcut (Sarrus\'s rule) works only for $3 \\times 3$.',
    tex: '\\det A = a_{11}\\begin{vmatrix} a_{22} & a_{23} \\\\ a_{32} & a_{33} \\end{vmatrix} - a_{12}\\begin{vmatrix} a_{21} & a_{23} \\\\ a_{31} & a_{33} \\end{vmatrix} + a_{13}\\begin{vmatrix} a_{21} & a_{22} \\\\ a_{31} & a_{32} \\end{vmatrix}',
    see: ['cofactor', 'minor', 'determinant', 'triangular-matrix'],
  },
  {
    id: 'triangular-matrix',
    term: 'Triangular Matrix',
    aliases: ['upper triangular', 'lower triangular', 'upper triangular matrix', 'lower triangular matrix'],
    course: 'linalg',
    category: 'Determinants',
    short:
      'A square matrix whose entries below the main diagonal are all zero (*upper* triangular) or whose entries above it are all zero (*lower* triangular).',
    long:
      'Triangular matrices are where elimination ends: an echelon form of a square matrix is upper triangular. A system with a triangular coefficient matrix is solved by back- (or forward-) substitution in about $n^2$ operations, which is why solvers factor $A = LU$ (lower times upper) once and reuse it for many right-hand sides.\n\n' +
      'Two big facts: $\\det T$ is the product of the diagonal entries, and the [[eigenvalue|eigenvalues]] of $T$ are its diagonal entries (because $T - \\lambda I$ is triangular too). Products and inverses of upper triangular matrices are upper triangular. The $R$ in a [[qr-factorization]] is upper triangular.\n\n' +
      'Pitfall: the eigenvalue shortcut is for triangular matrices only. Row reducing $A$ to triangular form changes its eigenvalues, so you cannot read eigenvalues off an echelon form.',
    tex: '\\det\\begin{bmatrix} 2 & 7 & -1 \\\\ 0 & 3 & 5 \\\\ 0 & 0 & 4 \\end{bmatrix} = 2 \\cdot 3 \\cdot 4 = 24',
    see: ['determinant', 'echelon-form', 'eigenvalue', 'qr-factorization'],
  },
  {
    id: 'cramers-rule',
    term: "Cramer's Rule",
    aliases: ['Cramer rule'],
    course: 'linalg',
    category: 'Determinants',
    short:
      'For invertible $A$, the unique solution of $A\\mathbf{x} = \\mathbf{b}$ has entries $x_i = \\dfrac{\\det A_i(\\mathbf{b})}{\\det A}$, where $A_i(\\mathbf{b})$ is $A$ with column $i$ replaced by $\\mathbf{b}$.',
    long:
      'Proof sketch: $A \\cdot I_i(\\mathbf{x}) = A_i(\\mathbf{b})$, where $I_i(\\mathbf{x})$ is the identity with column $i$ replaced by $\\mathbf{x}$; taking determinants gives $\\det A \\cdot x_i = \\det A_i(\\mathbf{b})$. It is an explicit formula for each unknown, valuable in theory (for example, it shows the solution depends continuously on the entries).\n\n' +
      'Example: $2x + y = 5$, $x + 3y = 10$. Here $\\det A = 5$, so $x = \\frac{1}{5}\\begin{vmatrix} 5 & 1 \\\\ 10 & 3 \\end{vmatrix} = \\frac{5}{5} = 1$ and $y = \\frac{1}{5}\\begin{vmatrix} 2 & 5 \\\\ 1 & 10 \\end{vmatrix} = \\frac{15}{5} = 3$.\n\n' +
      'Pitfall: it requires $\\det A \\ne 0$, and it is hopeless for large systems ($n + 1$ determinants). It is handy for $2 \\times 2$ and $3 \\times 3$ systems in code, such as intersecting two 2D lines or computing barycentric coordinates of a point in a triangle, where each coordinate is a ratio of signed areas.',
    tex: 'x_i = \\frac{\\det A_i(\\mathbf{b})}{\\det A}, \\qquad i = 1, \\dots, n',
    see: ['determinant', 'inverse-matrix', 'cofactor'],
  },
  {
    id: 'orientation',
    term: 'Orientation',
    aliases: ['sign of the determinant', 'winding order', 'orientation test'],
    course: 'linalg',
    category: 'Determinants',
    short:
      'Whether a linear map (or an ordered basis) preserves or reverses handedness, recorded by the sign of the determinant: $\\det > 0$ preserves orientation, $\\det < 0$ reverses it.',
    long:
      'In 2D, an ordered pair $(\\mathbf{u}, \\mathbf{v})$ is positively oriented when turning from $\\mathbf{u}$ to $\\mathbf{v}$ is counterclockwise, i.e. $\\det[\\,\\mathbf{u}\\ \\mathbf{v}\\,] > 0$. In 3D, $(\\mathbf{u}, \\mathbf{v}, \\mathbf{w})$ is positive when it obeys the [[right-hand-rule]]. Rotations preserve orientation; a reflection reverses it, like a mirror turning a left glove into a right one.\n\n' +
      '$|\\det A|$ is the area or volume scale factor and the sign is the orientation, which together make the determinant a *signed* volume. Composition multiplies signs, so two reflections give an orientation-preserving map (a rotation).\n\n' +
      'Graphics: the 2D orientation test $\\det[\\,B - A\\ \\ C - A\\,]$ decides whether triangle $ABC$ winds counterclockwise (positive) or clockwise, the basis of back-face culling, convex hulls and point-in-triangle tests. Pitfall: a model matrix with $\\det < 0$ (a negative scale) flips every triangle\'s winding, so faces are culled from the wrong side unless the engine compensates.',
    tex: '\\det\\begin{bmatrix} b_x - a_x & c_x - a_x \\\\ b_y - a_y & c_y - a_y \\end{bmatrix} \\begin{cases} > 0 & \\text{counterclockwise} \\\\ < 0 & \\text{clockwise} \\\\ = 0 & \\text{collinear} \\end{cases}',
    example:
      '// 2D orientation test: > 0 if A, B, C turn counterclockwise\n' +
      'float orient(Vec2 a, Vec2 b, Vec2 c) {\n' +
      '    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);\n' +
      '}',
    exampleLang: 'cpp',
    see: ['determinant', 'right-hand-rule', 'reflection-matrix', 'cross-product'],
  },

  // ------------------------------------------------------------------
  // Vector Spaces
  // ------------------------------------------------------------------
  {
    id: 'vector-space',
    term: 'Vector Space',
    aliases: ['linear space', 'real vector space'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'A set $V$ with an addition and a scalar multiplication satisfying ten axioms (closure, commutativity, associativity, a zero vector, additive inverses, distributive laws, $1\\mathbf{v} = \\mathbf{v}$), so that linear combinations behave as in $\\mathbb{R}^n$.',
    long:
      'The axioms capture exactly what we used in $\\mathbb{R}^n$, so every theorem proved from them applies at once to many other settings: $\\mathbb{R}^n$; the polynomials $\\mathbb{P}_n$ of degree at most $n$; all $m \\times n$ matrices; continuous functions on $[a, b]$; solutions of a linear homogeneous [[differential-equation]]. The elements are called vectors even when they are polynomials or functions.\n\n' +
      'Most vector spaces met in practice are [[subspace|subspaces]] of a bigger known space, which saves checking all ten axioms. A space with a [[basis]] of $n$ vectors behaves exactly like $\\mathbb{R}^n$ through [[coordinate-vector|coordinates]].\n\n' +
      'Pitfall: the set must contain a zero vector and be closed. A line not through the origin, or the polynomials of degree **exactly** 2, are not vector spaces. In graphics, colours are treated as vectors (you add and scale them); in ML, word embeddings form a vector space where differences such as "king − man + woman" carry meaning.',
    tex: '\\mathbf{u} + \\mathbf{v} \\in V, \\quad c\\,\\mathbf{u} \\in V, \\quad \\mathbf{u} + \\mathbf{0} = \\mathbf{u}, \\quad c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v}, \\ \\dots',
    see: ['subspace', 'basis', 'dimension', 'euclidean-space'],
  },
  {
    id: 'subspace',
    term: 'Subspace',
    aliases: ['linear subspace', 'subspace of R^n'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'A subset $H$ of a vector space that contains $\\mathbf{0}$ and is closed under addition and scalar multiplication; it is then a vector space in its own right.',
    long:
      'Three-part test: (1) $\\mathbf{0} \\in H$; (2) $\\mathbf{u}, \\mathbf{v} \\in H \\Rightarrow \\mathbf{u} + \\mathbf{v} \\in H$; (3) $\\mathbf{u} \\in H \\Rightarrow c\\mathbf{u} \\in H$ for every scalar $c$. The subspaces of $\\mathbb{R}^3$ are exactly $\\{\\mathbf{0}\\}$, lines through the origin, planes through the origin, and $\\mathbb{R}^3$ itself.\n\n' +
      'Every [[span]] is a subspace, and the main examples are spans or solution sets in disguise: $\\operatorname{Nul} A$, $\\operatorname{Col} A$, $\\operatorname{Row} A$, [[eigenspace|eigenspaces]] and [[orthogonal-complement|orthogonal complements]]. Showing that a set is the span of some vectors, or the null space of some matrix, is often the quickest proof that it is a subspace.\n\n' +
      'Pitfall: a plane *not* through the origin, such as $x + y + z = 1$, fails test (1) and is not a subspace (it is a shifted copy of one). The first quadrant of $\\mathbb{R}^2$ fails (3), since $-1$ times a vector leaves it, and the union of two different lines through the origin fails (2).',
    tex: '\\{(x, y, z) : x + y + z = 0\\} \\text{ is a subspace of } \\mathbb{R}^3; \\quad \\{(x, y, z) : x + y + z = 1\\} \\text{ is not}',
    see: ['vector-space', 'span', 'null-space', 'column-space'],
  },
  {
    id: 'null-space',
    term: 'Null Space',
    aliases: ['Nul A', 'nullspace'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'The null space of an $m \\times n$ matrix $A$ is $\\operatorname{Nul} A = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}$, the solution set of the [[homogeneous-system]]; it is a subspace of $\\mathbb{R}^n$.',
    long:
      'It is the set of inputs that $A$ sends to zero: the directions the transformation crushes. It is defined *implicitly* (by a condition you must check), so to describe it explicitly, solve $A\\mathbf{x} = \\mathbf{0}$ and write the answer in [[parametric-vector-form]]; the vectors attached to the free variables form a [[basis]] for $\\operatorname{Nul} A$.\n\n' +
      '$\\dim \\operatorname{Nul} A$ is the [[nullity]], the number of free variables. $\\operatorname{Nul} A = \\{\\mathbf{0}\\}$ iff the columns of $A$ are independent iff $\\mathbf{x} \\mapsto A\\mathbf{x}$ is one-to-one. Every solution of $A\\mathbf{x} = \\mathbf{b}$ is one particular solution plus something in $\\operatorname{Nul} A$, and $\\operatorname{Nul} A$ is the [[orthogonal-complement]] of $\\operatorname{Row} A$.\n\n' +
      'Pitfall: $\\operatorname{Nul} A$ lives in $\\mathbb{R}^n$ (the number of **columns**), while $\\operatorname{Col} A$ lives in $\\mathbb{R}^m$. Eigenvectors for $\\lambda$ are the nonzero vectors of $\\operatorname{Nul}(A - \\lambda I)$.',
    tex: '\\operatorname{Nul} A = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}',
    see: ['column-space', 'kernel', 'nullity', 'homogeneous-system'],
  },
  {
    id: 'column-space',
    term: 'Column Space',
    aliases: ['Col A', 'image of A'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'The column space of $A$ is $\\operatorname{Col} A = \\operatorname{Span}\\{\\mathbf{a}_1, \\dots, \\mathbf{a}_n\\} = \\{A\\mathbf{x} : \\mathbf{x} \\in \\mathbb{R}^n\\}$, a subspace of $\\mathbb{R}^m$.',
    long:
      'It is the set of all outputs of $\\mathbf{x} \\mapsto A\\mathbf{x}$, the [[range]] of the transformation, and it is defined *explicitly* (you produce members by choosing $\\mathbf{x}$). $A\\mathbf{x} = \\mathbf{b}$ is consistent exactly when $\\mathbf{b} \\in \\operatorname{Col} A$.\n\n' +
      'A basis is given by the [[pivot-column|pivot columns]] of $A$, so $\\dim \\operatorname{Col} A = \\operatorname{rank} A$. $\\operatorname{Col} A = \\mathbb{R}^m$ iff there is a pivot in every row (the map is [[onto]]). Its orthogonal complement is $\\operatorname{Nul} A^T$, and the point of $\\operatorname{Col} A$ closest to a given $\\mathbf{b}$ is what least squares computes.\n\n' +
      'Pitfall: take the pivot columns from the original $A$. Row operations change the column space: an echelon form with a zero last row has every column ending in 0, while the columns of $A$ need not.',
    tex: '\\operatorname{Col} A = \\{A\\mathbf{x} : \\mathbf{x} \\in \\mathbb{R}^n\\} \\subseteq \\mathbb{R}^m, \\qquad A\\mathbf{x} = \\mathbf{b} \\text{ consistent} \\iff \\mathbf{b} \\in \\operatorname{Col} A',
    see: ['null-space', 'row-space', 'rank', 'pivot-column'],
  },
  {
    id: 'row-space',
    term: 'Row Space',
    aliases: ['Row A'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'The row space of $A$ is the span of its rows, $\\operatorname{Row} A = \\operatorname{Col} A^T$, a subspace of $\\mathbb{R}^n$.',
    long:
      'Unlike the column space, the row space is **preserved** by row operations (each new row is a combination of the old ones, and the operations are reversible). So the nonzero rows of any echelon form of $A$ form a [[basis]] for $\\operatorname{Row} A$, and $\\dim \\operatorname{Row} A = \\operatorname{rank} A$: row rank equals column rank.\n\n' +
      'Every row of $A$ is orthogonal to every solution of $A\\mathbf{x} = \\mathbf{0}$ (that is what the equation says, row by row), so $(\\operatorname{Row} A)^\\perp = \\operatorname{Nul} A$. $\\operatorname{Row} A$ and $\\operatorname{Nul} A$ split $\\mathbb{R}^n$ into perpendicular pieces; with $\\operatorname{Col} A$ and $\\operatorname{Nul} A^T$ in $\\mathbb{R}^m$ they make up Strang\'s *four fundamental subspaces*.\n\n' +
      'Pitfall: for the row space use rows of the **echelon form**; for the column space use columns of the **original** matrix. The two bases come from different matrices for opposite reasons.',
    tex: '\\operatorname{Row} A = \\operatorname{Col} A^T, \\qquad \\dim \\operatorname{Row} A = \\dim \\operatorname{Col} A = \\operatorname{rank} A, \\qquad (\\operatorname{Row} A)^{\\perp} = \\operatorname{Nul} A',
    see: ['column-space', 'null-space', 'rank', 'orthogonal-complement'],
  },
  {
    id: 'kernel',
    term: 'Kernel',
    aliases: ['ker T', 'kernel of a linear map'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'The kernel of a linear transformation $T: V \\to W$ is $\\ker T = \\{\\mathbf{v} \\in V : T(\\mathbf{v}) = \\mathbf{0}\\}$; for $T(\\mathbf{x}) = A\\mathbf{x}$ it is $\\operatorname{Nul} A$.',
    long:
      '"Kernel" is the name for the null space when you talk about the map rather than its matrix, and it applies to maps between abstract spaces too: differentiation $D: \\mathbb{P}_3 \\to \\mathbb{P}_2$ has the constant polynomials as its kernel. The kernel is always a subspace of the domain; its partner is the [[range]], a subspace of the codomain.\n\n' +
      '$T$ is [[one-to-one]] iff $\\ker T = \\{\\mathbf{0}\\}$. The [[rank-nullity-theorem]] in map form says $\\dim \\ker T + \\dim \\operatorname{range} T = \\dim V$: the input dimensions that are not crushed survive in the output.\n\n' +
      'Pitfall: the kernel is a set of **inputs** (in $V$), not outputs. An orthographic projection onto the screen plane has the viewing direction as its kernel: depth is crushed, which is why picking with the mouse recovers a whole ray, not a point.',
    tex: '\\ker T = \\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}, \\qquad \\dim \\ker T + \\dim \\operatorname{range} T = \\dim V',
    see: ['null-space', 'range', 'one-to-one', 'rank-nullity-theorem'],
  },
  {
    id: 'basis',
    term: 'Basis',
    aliases: ['bases', 'basis of a subspace'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'A basis for a subspace $H$ is a set of vectors that is [[linear-independence|linearly independent]] and [[span|spans]] $H$: no redundancy and no gaps.',
    long:
      'A basis is at once a smallest spanning set and a largest independent set. Its key property: every vector in $H$ is a combination of the basis vectors in **exactly one** way, so the weights serve as coordinates ([[coordinate-vector]]). The [[standard-basis]] $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$ is the default for $\\mathbb{R}^n$, but any $n$ independent vectors in $\\mathbb{R}^n$ also form a basis.\n\n' +
      'Standard recipes: for $\\operatorname{Col} A$, the pivot columns of $A$; for $\\operatorname{Row} A$, the nonzero rows of an echelon form; for $\\operatorname{Nul} A$, the vectors in the parametric vector form of the solution of $A\\mathbf{x} = \\mathbf{0}$. Every basis of $H$ has the same number of vectors, the [[dimension]].\n\n' +
      'Pitfall: a subspace other than $\\{\\mathbf{0}\\}$ has infinitely many bases, so "the" basis only makes sense once a method is fixed. A game camera or skeleton bone stores an [[orthonormal-basis]] (right, up, forward), the most convenient kind.',
    tex: '\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_p\\}: \\ \\text{linearly independent and } \\operatorname{Span}\\mathcal{B} = H',
    see: ['linear-independence', 'span', 'dimension', 'coordinate-vector'],
  },
  {
    id: 'dimension',
    term: 'Dimension',
    aliases: ['dim', 'dim V'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'The dimension $\\dim V$ of a vector space is the number of vectors in any [[basis]]; $\\dim \\mathbb{R}^n = n$ and $\\dim\\{\\mathbf{0}\\} = 0$.',
    long:
      'The definition makes sense because all bases of a space have the same size (if one basis has $n$ vectors, any set of more than $n$ vectors is dependent). Dimension counts degrees of freedom: a line through the origin has dimension 1, a plane 2. Examples: $\\dim \\mathbb{P}_n = n + 1$ (basis $1, t, \\dots, t^n$); the $2 \\times 2$ matrices have dimension 4.\n\n' +
      'Basis Theorem, for a $p$-dimensional space $V$: any $p$ independent vectors in $V$ automatically span it, and any $p$ vectors that span it are automatically independent. For matrices, $\\dim \\operatorname{Col} A = \\operatorname{rank} A$ and $\\dim \\operatorname{Nul} A$ is the [[nullity]].\n\n' +
      'Pitfall: dimension belongs to the space, not to the number of entries in its vectors. A plane through the origin in $\\mathbb{R}^3$ has dimension 2 even though its vectors have three entries.',
    tex: '\\dim \\mathbb{R}^n = n, \\qquad \\dim \\mathbb{P}_n = n + 1, \\qquad \\dim \\operatorname{Col} A = \\operatorname{rank} A',
    see: ['basis', 'rank', 'nullity', 'rank-nullity-theorem'],
  },
  {
    id: 'rank',
    term: 'Rank',
    aliases: ['rank A', 'column rank', 'row rank'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'The rank of a matrix is $\\operatorname{rank} A = \\dim \\operatorname{Col} A$, the number of pivot positions; it also equals $\\dim \\operatorname{Row} A$.',
    long:
      'Rank measures how many independent directions survive the transformation: the dimension of the output. A $3 \\times 3$ matrix of rank 2 squashes space onto a plane; rank 1, onto a line. Row rank equals column rank, so $\\operatorname{rank} A = \\operatorname{rank} A^T$, and $\\operatorname{rank} A \\le \\min(m, n)$.\n\n' +
      'Compute it by row reducing and counting pivots. Rank links the subspaces: $\\operatorname{rank} A + \\dim \\operatorname{Nul} A = n$ ([[rank-nullity-theorem]]). An $n \\times n$ matrix is invertible iff its rank is $n$ (*full rank*). It also equals the number of nonzero [[singular-values]]; *numerical* rank counts those above a tolerance.\n\n' +
      'Pitfall: rank is the number of nonzero rows of an **echelon form**, not of $A$ itself. In ML and graphics, low-rank approximations (keep the top $k$ singular values) compress images and models, the idea behind techniques such as LoRA fine-tuning.',
    tex: '\\operatorname{rank} A = \\dim \\operatorname{Col} A = \\dim \\operatorname{Row} A = \\#\\text{pivots}',
    see: ['nullity', 'rank-nullity-theorem', 'column-space', 'pivot'],
  },
  {
    id: 'nullity',
    term: 'Nullity',
    aliases: ['dim Nul A'],
    course: 'linalg',
    category: 'Vector Spaces',
    short: 'The nullity of $A$ is $\\dim \\operatorname{Nul} A$, the number of [[free-variable|free variables]] in $A\\mathbf{x} = \\mathbf{0}$.',
    long:
      'Nullity counts the independent directions that $A$ crushes to $\\mathbf{0}$. Nullity zero means nothing is crushed: the columns are independent and the map is [[one-to-one]].\n\n' +
      'It complements the [[rank]]: rank counts pivot columns, nullity counts non-pivot columns, so together they count all $n$ columns. For example, a $3 \\times 5$ matrix of rank 2 has nullity $5 - 2 = 3$.\n\n' +
      'Pitfall: nullity is $n - \\operatorname{rank} A$ with $n$ the number of **columns**, not rows. Zero rows in an echelon form are not free variables.',
    tex: '\\operatorname{nullity} A = \\dim \\operatorname{Nul} A = n - \\operatorname{rank} A',
    see: ['null-space', 'rank', 'rank-nullity-theorem', 'free-variable'],
  },
  {
    id: 'rank-nullity-theorem',
    term: 'Rank–Nullity Theorem',
    aliases: ['rank theorem', 'rank-nullity', 'dimension theorem'],
    course: 'linalg',
    category: 'Vector Spaces',
    short: 'For an $m \\times n$ matrix $A$, $\\operatorname{rank} A + \\dim \\operatorname{Nul} A = n$, the number of columns.',
    long:
      'Proof in one line: every column is either a pivot column (counted by the rank) or not (a free variable, counted by the nullity). In map form, for $T: V \\to W$, $\\dim \\operatorname{range} T + \\dim \\ker T = \\dim V$: the input dimensions are split between those that survive and those that are crushed.\n\n' +
      'It turns dimension questions into arithmetic. A $5 \\times 7$ matrix has rank at most 5, so its null space has dimension at least 2 and $A\\mathbf{x} = \\mathbf{0}$ must have nontrivial solutions. A $7 \\times 5$ matrix with a 2-dimensional null space has rank 3, so its column space is a 3-dimensional subspace of $\\mathbb{R}^7$.\n\n' +
      'Pitfall: the total is $n$ (columns, the dimension of the domain), not $m$. Graphics example: an orthographic projection of 3D onto a 2D screen has rank 2, so its kernel is 1-dimensional: one line of points per pixel.',
    tex: '\\operatorname{rank} A + \\dim \\operatorname{Nul} A = n',
    see: ['rank', 'nullity', 'dimension', 'kernel'],
  },
  {
    id: 'coordinate-vector',
    term: 'Coordinate Vector',
    aliases: ['coordinates relative to a basis', 'B-coordinates', '[x]_B'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'If $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ is a basis and $\\mathbf{x} = c_1\\mathbf{b}_1 + \\cdots + c_n\\mathbf{b}_n$, the coordinate vector of $\\mathbf{x}$ is $[\\mathbf{x}]_{\\mathcal{B}} = (c_1, \\dots, c_n)$, written as a column.',
    long:
      'Coordinates are the weights that build $\\mathbf{x}$ from the basis; they are unique because a basis is independent. With $P_{\\mathcal{B}} = [\\,\\mathbf{b}_1 \\cdots \\mathbf{b}_n\\,]$ we have $\\mathbf{x} = P_{\\mathcal{B}}[\\mathbf{x}]_{\\mathcal{B}}$, so $[\\mathbf{x}]_{\\mathcal{B}} = P_{\\mathcal{B}}^{-1}\\mathbf{x}$ (in practice, solve the system instead of inverting).\n\n' +
      'Example: with $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$, the vector $(3, 1)$ equals $2(1, 1) + 1(1, -1)$, so $[\\mathbf{x}]_{\\mathcal{B}} = (2, 1)$. The map $\\mathbf{x} \\mapsto [\\mathbf{x}]_{\\mathcal{B}}$ is an isomorphism: it makes any $n$-dimensional space look like $\\mathbb{R}^n$ (polynomials become lists of coefficients). With an [[orthonormal-basis]], coordinates are just dot products, $c_i = \\mathbf{x} \\cdot \\mathbf{u}_i$.\n\n' +
      'Pitfall: the order of the basis matters; reordering the basis reorders the coordinates. In games, the "local space" position of a vertex is its coordinate vector relative to the object\'s own basis.',
    tex: '\\mathbf{x} = P_{\\mathcal{B}}\\,[\\mathbf{x}]_{\\mathcal{B}}, \\qquad \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix} = 2\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + 1\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} \\implies [\\mathbf{x}]_{\\mathcal{B}} = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}',
    see: ['basis', 'change-of-basis-matrix', 'standard-basis'],
  },
  {
    id: 'change-of-basis-matrix',
    term: 'Change-of-Basis Matrix',
    aliases: ['transition matrix', 'change-of-coordinates matrix', 'P_{C←B}'],
    course: 'linalg',
    category: 'Vector Spaces',
    short:
      'The matrix $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = [\\,[\\mathbf{b}_1]_{\\mathcal{C}}\\ \\cdots\\ [\\mathbf{b}_n]_{\\mathcal{C}}\\,]$ that converts coordinates: $[\\mathbf{x}]_{\\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}[\\mathbf{x}]_{\\mathcal{B}}$.',
    long:
      'Its columns are the old basis vectors written in the new coordinates. From $\\mathcal{B}$ to the standard basis the matrix is just $P_{\\mathcal{B}} = [\\,\\mathbf{b}_1 \\cdots \\mathbf{b}_n\\,]$; between two bases of $\\mathbb{R}^n$, $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = P_{\\mathcal{C}}^{-1}P_{\\mathcal{B}}$, computed by row reducing $[\\,P_{\\mathcal{C}} \\mid P_{\\mathcal{B}}\\,] \\sim [\\,I \\mid P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\,]$. Going back uses the inverse: $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = (P_{\\mathcal{C} \\leftarrow \\mathcal{B}})^{-1}$.\n\n' +
      'Changing basis changes the matrix of a transformation by similarity: if $A$ is the standard matrix of $T$, its matrix relative to $\\mathcal{B}$ is $P^{-1}AP$ with $P = P_{\\mathcal{B}}$ (see [[similar-matrices]]). Diagonalization is choosing an eigenvector basis so that this matrix is diagonal.\n\n' +
      'Pitfall: direction. $P_{\\mathcal{B}}$ converts $\\mathcal{B}$-coordinates **to** standard coordinates, not the reverse. In engines the model matrix converts local to world and the view matrix converts world to camera; using a matrix where its inverse belongs is one of the most common transform bugs.',
    tex: '[\\mathbf{x}]_{\\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\,[\\mathbf{x}]_{\\mathcal{B}}, \\qquad P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = P_{\\mathcal{C}}^{-1}P_{\\mathcal{B}}',
    see: ['coordinate-vector', 'basis', 'similar-matrices', 'inverse-matrix'],
  },

  // ------------------------------------------------------------------
  // Eigenvalues
  // ------------------------------------------------------------------
  {
    id: 'eigenvalue',
    term: 'Eigenvalue',
    aliases: ['λ', 'characteristic value', 'eigenvalues'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'A scalar $\\lambda$ is an eigenvalue of a square matrix $A$ if $A\\mathbf{x} = \\lambda\\mathbf{x}$ has a nontrivial solution $\\mathbf{x}$ (an [[eigenvector]]).',
    long:
      'Along an eigenvector direction, $A$ acts as plain scaling by $\\lambda$: stretch ($|\\lambda| > 1$), shrink ($|\\lambda| < 1$), flip ($\\lambda < 0$) or crush ($\\lambda = 0$). Rearranging, $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ must have a nontrivial solution, so $\\lambda$ is an eigenvalue iff $\\det(A - \\lambda I) = 0$, the [[characteristic-equation]].\n\n' +
      'Facts: an $n \\times n$ matrix has $n$ eigenvalues counted with multiplicity (some possibly [[complex-number|complex]]); their sum is the [[trace]] and their product is $\\det A$; $0$ is an eigenvalue iff $A$ is singular; a [[triangular-matrix]] has its diagonal entries as eigenvalues; and $A^k$ has eigenvalues $\\lambda^k$. A 2D rotation by an angle other than $0$ or $\\pi$ has no real eigenvalues, since no direction stays on its line.\n\n' +
      'Pitfall: row reduction changes eigenvalues, so never read them off an echelon form. Eigenvalues govern long-run behaviour: in $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$ the largest $|\\lambda|$ dominates, which is how PageRank, the stability of a physics integrator ($|\\lambda| < 1$ means errors die out) and vibration modes are analysed.',
    tex: 'A\\mathbf{x} = \\lambda\\mathbf{x} \\text{ for some } \\mathbf{x} \\ne \\mathbf{0} \\iff \\det(A - \\lambda I) = 0',
    see: ['eigenvector', 'characteristic-equation', 'eigenspace', 'diagonalizable'],
  },
  {
    id: 'eigenvector',
    term: 'Eigenvector',
    aliases: ['characteristic vector', 'eigenvectors'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'A **nonzero** vector $\\mathbf{x}$ with $A\\mathbf{x} = \\lambda\\mathbf{x}$ for some scalar $\\lambda$: a direction that $A$ maps onto its own line, only scaling it.',
    long:
      'Most vectors get knocked off their line by $A$; eigenvectors stay on it. For $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$, $(1, 1) \\mapsto (3, 3)$ (eigenvalue 3) and $(1, -1) \\mapsto (1, -1)$ (eigenvalue 1). To find them, solve $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ for each eigenvalue; the nonzero solutions are the eigenvectors and, with $\\mathbf{0}$, fill the [[eigenspace]].\n\n' +
      'Any nonzero multiple of an eigenvector is an eigenvector, so answers are really directions, often normalized. Eigenvectors for distinct eigenvalues are linearly independent; for a [[symmetric-matrix]] they are even orthogonal. A basis of eigenvectors is exactly what [[diagonalizable|diagonalization]] needs.\n\n' +
      'Pitfall: $\\mathbf{0}$ is excluded by definition (it satisfies $A\\mathbf{0} = \\lambda\\mathbf{0}$ for every $\\lambda$), but $\\lambda = 0$ is allowed. Applications: the axis of a 3D rotation is its eigenvector for $\\lambda = 1$; the principal axes of an inertia tensor, or of a point cloud for a tight oriented bounding box, are eigenvectors of a symmetric matrix.',
    tex: '\\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} = 3\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}, \\qquad \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} = 1\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}',
    see: ['eigenvalue', 'eigenspace', 'diagonalizable', 'spectral-theorem'],
  },
  {
    id: 'eigenspace',
    term: 'Eigenspace',
    aliases: ['eigenspace for λ', 'E_λ'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'For an eigenvalue $\\lambda$ of $A$, the eigenspace is $\\operatorname{Nul}(A - \\lambda I)$: all eigenvectors for $\\lambda$ together with $\\mathbf{0}$.',
    long:
      'Adding $\\mathbf{0}$ to the eigenvectors makes the set a [[subspace]] (a [[null-space]], in fact). Often it is a line of eigenvectors; a reflection across a plane in $\\mathbb{R}^3$ has a 2-dimensional eigenspace for $\\lambda = 1$ (the mirror plane) and a 1-dimensional one for $\\lambda = -1$ (the normal line).\n\n' +
      'Its dimension is the [[geometric-multiplicity]] of $\\lambda$, found as the number of free variables in $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$. A matrix is diagonalizable iff its eigenspace dimensions add up to $n$.\n\n' +
      'Pitfall: if row reducing $A - \\lambda I$ gives only the trivial solution, then $\\lambda$ is not an eigenvalue; recheck the characteristic polynomial. An eigenspace always has dimension at least 1.',
    tex: 'E_\\lambda = \\operatorname{Nul}(A - \\lambda I) = \\{\\mathbf{x} : A\\mathbf{x} = \\lambda\\mathbf{x}\\}',
    see: ['eigenvector', 'geometric-multiplicity', 'null-space', 'diagonalizable'],
  },
  {
    id: 'characteristic-polynomial',
    term: 'Characteristic Polynomial',
    aliases: ['char poly', 'det(A − λI)'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'The degree-$n$ polynomial $p(\\lambda) = \\det(A - \\lambda I)$, whose roots are the eigenvalues of $A$. For $2 \\times 2$: $p(\\lambda) = \\lambda^2 - (\\operatorname{tr} A)\\lambda + \\det A$.',
    long:
      'Subtract $\\lambda$ down the diagonal and take the determinant. The leading term is $(-1)^n\\lambda^n$, the constant term is $p(0) = \\det A$, and the coefficient of $\\lambda^{n-1}$ is $(-1)^{n-1}\\operatorname{tr} A$. Over the complex numbers it factors as $(\\lambda_1 - \\lambda)\\cdots(\\lambda_n - \\lambda)$ by the [[fundamental-theorem-of-algebra]], which is why every $n \\times n$ matrix has $n$ eigenvalues counted with multiplicity.\n\n' +
      'Example: $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$ gives $(2 - \\lambda)^2 - 1 = \\lambda^2 - 4\\lambda + 3 = (\\lambda - 1)(\\lambda - 3)$. [[similar-matrices|Similar matrices]] have the same characteristic polynomial.\n\n' +
      'Pitfall: some books define it as $\\det(\\lambda I - A)$, which differs by the factor $(-1)^n$; the roots are the same. For $n \\ge 5$ there is no general root formula, and numerical software never expands the polynomial at all; it runs the QR algorithm on the matrix directly.',
    tex: 'p(\\lambda) = \\det(A - \\lambda I), \\qquad n = 2: \\ \\ p(\\lambda) = \\lambda^2 - (\\operatorname{tr} A)\\,\\lambda + \\det A',
    see: ['characteristic-equation', 'eigenvalue', 'trace', 'algebraic-multiplicity'],
  },
  {
    id: 'characteristic-equation',
    term: 'Characteristic Equation',
    aliases: ['det(A − λI) = 0'],
    course: 'linalg',
    category: 'Eigenvalues',
    short: 'The equation $\\det(A - \\lambda I) = 0$, whose solutions are exactly the eigenvalues of $A$.',
    long:
      'Why: $\\lambda$ is an eigenvalue iff $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution, iff $A - \\lambda I$ is singular, iff its determinant is 0 (by the [[invertible-matrix-theorem]]). So finding eigenvalues becomes finding roots of the [[characteristic-polynomial]].\n\n' +
      'Workflow: (1) form $A - \\lambda I$; (2) compute its determinant (expand along a row with zeros); (3) factor and solve; (4) for each root, solve $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ for the eigenvectors. Check: the roots should add to $\\operatorname{tr} A$ and multiply to $\\det A$.\n\n' +
      'Pitfall: complex roots are genuine eigenvalues, and they signal rotation. $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ has characteristic equation $\\lambda^2 + 1 = 0$, so $\\lambda = \\pm i$: a quarter turn leaves no real direction on its own line.',
    tex: '\\det\\begin{bmatrix} 2 - \\lambda & 1 \\\\ 1 & 2 - \\lambda \\end{bmatrix} = \\lambda^2 - 4\\lambda + 3 = 0 \\implies \\lambda = 1 \\text{ or } \\lambda = 3',
    see: ['characteristic-polynomial', 'eigenvalue', 'determinant'],
  },
  {
    id: 'algebraic-multiplicity',
    term: 'Algebraic Multiplicity',
    aliases: ['multiplicity of an eigenvalue'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'The algebraic multiplicity of an eigenvalue $\\lambda_0$ is its [[multiplicity]] as a root of the characteristic polynomial: the power of $(\\lambda - \\lambda_0)$ in its factorization.',
    long:
      'Counting with algebraic multiplicity, an $n \\times n$ matrix has exactly $n$ eigenvalues over the complex numbers, so the multiplicities add up to $n$. Example: $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ has $p(\\lambda) = (1 - \\lambda)^2$, so $\\lambda = 1$ has algebraic multiplicity 2.\n\n' +
      'It is an upper bound for the [[geometric-multiplicity]] (the eigenspace dimension): $1 \\le \\text{geometric} \\le \\text{algebraic}$. A matrix whose characteristic polynomial factors completely is [[diagonalizable]] iff the two multiplicities agree for every eigenvalue. An eigenvalue of algebraic multiplicity 1 is *simple* and automatically has a 1-dimensional eigenspace.\n\n' +
      'Pitfall: a repeated eigenvalue does not by itself ruin diagonalizability: $I_2$ has $\\lambda = 1$ with algebraic multiplicity 2 and is already diagonal. What matters is whether there are enough independent eigenvectors.',
    tex: 'p(\\lambda) = (\\lambda - 2)^3(\\lambda + 1) \\implies \\lambda = 2 \\text{ (alg. mult. 3)}, \\ \\ \\lambda = -1 \\text{ (alg. mult. 1)}',
    see: ['geometric-multiplicity', 'characteristic-polynomial', 'diagonalizable', 'multiplicity'],
  },
  {
    id: 'geometric-multiplicity',
    term: 'Geometric Multiplicity',
    aliases: ['dimension of an eigenspace'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'The geometric multiplicity of an eigenvalue $\\lambda$ is $\\dim \\operatorname{Nul}(A - \\lambda I)$, the number of linearly independent eigenvectors for $\\lambda$.',
    long:
      'Compute it as the number of free variables in $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$, i.e. $n - \\operatorname{rank}(A - \\lambda I)$. It is always at least 1 and at most the [[algebraic-multiplicity]].\n\n' +
      'Diagonalizability test: $A$ is diagonalizable iff the geometric multiplicities add up to $n$. The [[shear]] $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ fails: $A - I = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$ has one free variable, so the geometric multiplicity is $1 < 2$ and the matrix is not diagonalizable (it is *defective*).\n\n' +
      'Pitfall: the characteristic polynomial alone cannot tell you the geometric multiplicity; you must row reduce $A - \\lambda I$.',
    tex: '\\dim \\operatorname{Nul}(A - \\lambda I) = n - \\operatorname{rank}(A - \\lambda I), \\qquad 1 \\le \\text{geom. mult.} \\le \\text{alg. mult.}',
    see: ['algebraic-multiplicity', 'eigenspace', 'diagonalizable', 'nullity'],
  },
  {
    id: 'trace',
    term: 'Trace',
    aliases: ['tr A', 'trace of a matrix'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'The trace of a square matrix is the sum of its diagonal entries, $\\operatorname{tr} A = a_{11} + \\cdots + a_{nn}$; it equals the sum of the eigenvalues.',
    long:
      'Trace is linear ($\\operatorname{tr}(A + B) = \\operatorname{tr} A + \\operatorname{tr} B$, $\\operatorname{tr}(cA) = c\\operatorname{tr} A$), $\\operatorname{tr} A^T = \\operatorname{tr} A$, and $\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$ even for non-square $A$, $B$ whose products are square. Hence similar matrices have equal trace: $\\operatorname{tr}(P^{-1}AP) = \\operatorname{tr}(APP^{-1}) = \\operatorname{tr} A$.\n\n' +
      'With the determinant it pins down the eigenvalues of a $2 \\times 2$ matrix: they are the roots of $\\lambda^2 - (\\operatorname{tr} A)\\lambda + \\det A$. After finding eigenvalues, check that they add to the trace. For a 3D rotation by angle $\\theta$, $\\operatorname{tr} R = 1 + 2\\cos\\theta$, so the angle of any rotation matrix is $\\theta = \\arccos\\frac{\\operatorname{tr} R - 1}{2}$, used when converting a matrix to axis-angle form or a quaternion.\n\n' +
      'Pitfall: $\\operatorname{tr}(AB) \\ne \\operatorname{tr} A \\cdot \\operatorname{tr} B$ in general, and $\\operatorname{tr}(ABC) = \\operatorname{tr}(CAB)$ (cyclic shifts) but not necessarily $\\operatorname{tr}(ACB)$.',
    tex: '\\operatorname{tr} A = \\sum_{i=1}^{n} a_{ii} = \\lambda_1 + \\cdots + \\lambda_n, \\qquad \\operatorname{tr}(AB) = \\operatorname{tr}(BA)',
    see: ['eigenvalue', 'characteristic-polynomial', 'similar-matrices', 'determinant'],
  },
  {
    id: 'similar-matrices',
    term: 'Similar Matrices',
    aliases: ['similarity', 'similar', 'similarity transformation'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      '$A$ and $B$ are similar if $B = P^{-1}AP$ for some invertible $P$; they represent the same linear transformation in different bases.',
    long:
      'Read $P$ as a [[change-of-basis-matrix]]: $P^{-1}AP$ converts $\\mathcal{B}$-coordinates to standard ones ($P$), applies $A$, and converts back ($P^{-1}$). So similar matrices share everything that does not depend on the coordinate system: characteristic polynomial, eigenvalues (with algebraic multiplicities), determinant, trace and rank. Their eigenvectors differ, related by $P$.\n\n' +
      '[[diagonalizable|Diagonalizing]] means finding a diagonal matrix similar to $A$. The same sandwich appears in engine code as $MAM^{-1}$: to rotate an object about its own axis, convert to its local space, rotate there, and convert back.\n\n' +
      'Pitfalls: the converse fails. $I$ and $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ have the same eigenvalues but are not similar (the only matrix similar to $I$ is $I$ itself). And similarity is not [[row-equivalent|row equivalence]]: row operations multiply on the left only, and they change eigenvalues.',
    tex: 'B = P^{-1}AP \\implies \\det(B - \\lambda I) = \\det(A - \\lambda I)',
    see: ['change-of-basis-matrix', 'diagonalizable', 'characteristic-polynomial', 'trace'],
  },
  {
    id: 'diagonalizable',
    term: 'Diagonalizable',
    aliases: ['diagonalization', 'diagonalize', 'A = PDP^{-1}', 'eigendecomposition'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'A square matrix $A$ is diagonalizable if $A = PDP^{-1}$ with $D$ diagonal; this happens iff $A$ has $n$ linearly independent eigenvectors (the columns of $P$), with the matching eigenvalues on the diagonal of $D$.',
    long:
      'In the eigenvector basis, $A$ is just independent scaling along each axis. That makes powers trivial: $A^k = PD^kP^{-1}$, so $\\mathbf{x}_k = A^k\\mathbf{x}_0$ splits into modes $c_i\\lambda_i^k\\mathbf{v}_i$ that grow or decay independently. Example: the Fibonacci matrix $\\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}$ has eigenvalues $\\frac{1 \\pm \\sqrt{5}}{2}$, which gives Binet\'s closed formula for $F_n$.\n\n' +
      'Recipe: find the eigenvalues; find a basis of each [[eigenspace]]; if you get $n$ vectors in total, put them in $P$ and the eigenvalues (in the same order) in $D$. Sufficient condition: $n$ distinct eigenvalues. Necessary and sufficient: the [[geometric-multiplicity|geometric multiplicities]] add up to $n$. Real [[symmetric-matrix|symmetric matrices]] are always diagonalizable, even with orthogonal $P$ ([[spectral-theorem]]).\n\n' +
      'Pitfall: invertible and diagonalizable are independent properties. The [[shear]] $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ is invertible but not diagonalizable; $\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ is diagonal but singular. Also keep the eigenvector columns of $P$ in the same order as the eigenvalues in $D$.',
    tex: 'A = PDP^{-1} \\implies A^k = PD^kP^{-1}, \\qquad P = [\\,\\mathbf{v}_1 \\cdots \\mathbf{v}_n\\,], \\ \\ D = \\operatorname{diag}(\\lambda_1, \\dots, \\lambda_n)',
    see: ['eigenvector', 'similar-matrices', 'diagonal-matrix', 'geometric-multiplicity'],
  },
  {
    id: 'stochastic-matrix',
    term: 'Stochastic Matrix',
    aliases: ['Markov matrix', 'column-stochastic matrix', 'probability transition matrix'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'A square matrix with nonnegative entries whose columns each sum to 1, so each column is a probability distribution; it is the transition matrix of a [[markov-chain]].',
    long:
      'Entry $p_{ij}$ is the probability of moving **to** state $i$ **from** state $j$, so column $j$ lists where state $j$ can go next. Multiplying a probability vector (nonnegative entries summing to 1) by $P$ gives another probability vector.\n\n' +
      'Every stochastic matrix has $\\lambda = 1$ as an eigenvalue (the columns sum to 1, so $P^T\\mathbf{1} = \\mathbf{1}$, and $P$ and $P^T$ share eigenvalues), and every eigenvalue satisfies $|\\lambda| \\le 1$. $P$ is *regular* if some power $P^k$ has all entries strictly positive; then it has a unique [[steady-state-vector]], and $P^k\\mathbf{x}_0$ converges to it from any starting probability vector (Perron–Frobenius).\n\n' +
      'Pitfall: conventions differ. This course (like Lay) uses columns summing to 1 and $\\mathbf{x}_{k+1} = P\\mathbf{x}_k$; many probability and ML texts use *row*-stochastic matrices with row vectors, $\\mathbf{x}_{k+1}^T = \\mathbf{x}_k^TP$. The two are transposes of each other, so check which one a source uses.',
    tex: 'P = \\begin{bmatrix} 0.9 & 0.5 \\\\ 0.1 & 0.5 \\end{bmatrix}: \\quad p_{ij} \\ge 0, \\ \\ \\text{each column sums to } 1',
    see: ['markov-chain', 'steady-state-vector', 'eigenvalue'],
  },
  {
    id: 'markov-chain',
    term: 'Markov Chain',
    aliases: ['Markov process', 'Markov model'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'A sequence of probability vectors $\\mathbf{x}_0, \\mathbf{x}_1, \\dots$ with $\\mathbf{x}_{k+1} = P\\mathbf{x}_k$ for a fixed [[stochastic-matrix]] $P$: the next state depends only on the current one.',
    long:
      'Entry $i$ of $\\mathbf{x}_k$ is the probability of being in state $i$ after $k$ steps, and $\\mathbf{x}_k = P^k\\mathbf{x}_0$. The long-run behaviour is controlled by the eigenvalues of $P$: the $\\lambda = 1$ component survives and, for a regular chain, every other component decays like $|\\lambda|^k$, so $\\mathbf{x}_k$ converges to the [[steady-state-vector]].\n\n' +
      'Example: weather with states (sunny, rainy) and $P = \\begin{bmatrix} 0.9 & 0.5 \\\\ 0.1 & 0.5 \\end{bmatrix}$: a sunny day is followed by sun with probability $0.9$, a rainy day by sun with probability $0.5$. In the long run it is sunny $5/6$ of the time; the second eigenvalue is $0.4$, so the chain forgets its start quickly.\n\n' +
      'Applications: Google\'s PageRank is the steady state of a random web surfer; text, music and level generators use Markov chains; game AI uses probabilistic state machines. Pitfall: a chain need not converge if it is not regular; $P = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ swaps two states forever and never settles.',
    tex: '\\mathbf{x}_{k+1} = P\\mathbf{x}_k \\implies \\mathbf{x}_k = P^k\\mathbf{x}_0',
    example:
      '// Run the weather chain until it settles (the power method)\n' +
      'std::array<double, 2> p = {1.0, 0.0};   // start: certainly sunny\n' +
      'for (int k = 0; k < 100; ++k)\n' +
      '    p = { 0.9 * p[0] + 0.5 * p[1],        // p <- P p\n' +
      '          0.1 * p[0] + 0.5 * p[1] };\n' +
      '// p is now about {0.8333, 0.1667} = {5/6, 1/6}',
    exampleLang: 'cpp',
    see: ['stochastic-matrix', 'steady-state-vector', 'eigenvalue', 'diagonalizable'],
  },
  {
    id: 'steady-state-vector',
    term: 'Steady-State Vector',
    aliases: ['equilibrium vector', 'stationary distribution', 'steady state'],
    course: 'linalg',
    category: 'Eigenvalues',
    short:
      'A probability vector $\\mathbf{q}$ with $P\\mathbf{q} = \\mathbf{q}$: an [[eigenvector]] of the stochastic matrix $P$ for $\\lambda = 1$, scaled so its entries sum to 1.',
    long:
      'Once the chain reaches $\\mathbf{q}$ it stays there. To find it, solve $(P - I)\\mathbf{x} = \\mathbf{0}$, take a nonzero solution, and divide by the sum of its entries. For $P = \\begin{bmatrix} 0.9 & 0.5 \\\\ 0.1 & 0.5 \\end{bmatrix}$, $P - I = \\begin{bmatrix} -0.1 & 0.5 \\\\ 0.1 & -0.5 \\end{bmatrix}$ gives $x_1 = 5x_2$, so $\\mathbf{x} = (5, 1)$ and $\\mathbf{q} = (5/6, 1/6)$.\n\n' +
      'If $P$ is regular, $\\mathbf{q}$ is unique and $P^k\\mathbf{x}_0 \\to \\mathbf{q}$ for **every** starting probability vector $\\mathbf{x}_0$: the chain forgets where it started. That is why PageRank can begin with any guess and simply iterate (the power method).\n\n' +
      'Pitfall: remember to normalize; $(5, 1)$ is an eigenvector but not a probability vector. And $\\mathbf{q}$ is a fixed point of $P$ (it lies in the null space of $P - I$), not a fixed point of $P - I$.',
    tex: 'P\\mathbf{q} = \\mathbf{q}, \\quad q_i \\ge 0, \\quad \\sum_i q_i = 1, \\qquad \\text{e.g. } \\mathbf{q} = \\begin{bmatrix} 5/6 \\\\ 1/6 \\end{bmatrix}',
    see: ['markov-chain', 'stochastic-matrix', 'eigenvector', 'eigenspace'],
  },

  // ------------------------------------------------------------------
  // Orthogonality
  // ------------------------------------------------------------------
  {
    id: 'orthogonal-set',
    term: 'Orthogonal Set',
    aliases: ['mutually orthogonal vectors', 'orthogonal basis'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'A set of vectors $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ in which every pair is [[orthogonal]]: $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for $i \\ne j$.',
    long:
      'Key theorem: an orthogonal set of **nonzero** vectors is linearly independent. (Dot a dependence relation with $\\mathbf{u}_j$: every term but one vanishes, leaving $c_j\\,\\mathbf{u}_j \\cdot \\mathbf{u}_j = 0$, so $c_j = 0$.) So it is a basis for its span, an *orthogonal basis*.\n\n' +
      'Orthogonal bases make coordinates easy, with no system to solve: if $\\mathbf{y} = c_1\\mathbf{u}_1 + \\cdots + c_p\\mathbf{u}_p$, then $c_j = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}$, each coordinate a [[vector-projection]] weight. The [[gram-schmidt]] process turns any basis into an orthogonal one.\n\n' +
      'Pitfall: an orthogonal set may contain $\\mathbf{0}$ (it is orthogonal to everything), and then it is not independent; the theorem needs nonzero vectors. Normalizing each vector gives an orthonormal set.',
    tex: '\\mathbf{y} = \\sum_{j=1}^{p} c_j\\mathbf{u}_j, \\qquad c_j = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}',
    see: ['orthonormal-basis', 'orthogonal', 'gram-schmidt', 'linear-independence'],
  },
  {
    id: 'orthonormal-basis',
    term: 'Orthonormal Basis',
    aliases: ['orthonormal set', 'ONB', 'orthonormal vectors'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'A [[basis]] of mutually orthogonal **unit** vectors: $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for $i \\ne j$ and $\\mathbf{u}_i \\cdot \\mathbf{u}_i = 1$.',
    long:
      'It is the most convenient coordinate system there is. Coordinates are dot products, $c_i = \\mathbf{y} \\cdot \\mathbf{u}_i$; lengths and dot products computed from coordinates come out exactly as in the standard basis; and if the matrix $U$ has orthonormal columns, then $U^TU = I$ and the projection onto their span is $UU^T\\mathbf{y}$.\n\n' +
      'The standard basis is orthonormal, and so are the columns of any rotation matrix. Build one from any basis with [[gram-schmidt]] and normalization, or in 3D from one or two vectors with cross products.\n\n' +
      'Game connection: a camera or bone stores an orthonormal basis (right, up, forward). The usual "look-at" construction from a forward vector $\\mathbf{f}$ and a world up vector is $\\mathbf{r} = \\operatorname{normalize}(\\mathbf{f} \\times \\mathbf{up})$, $\\mathbf{u} = \\mathbf{r} \\times \\mathbf{f}$. Pitfall: if $\\mathbf{f}$ is parallel to world up, the cross product is $\\mathbf{0}$ and the basis collapses, the classic camera flip when looking straight up or down.',
    tex: '\\mathbf{u}_i \\cdot \\mathbf{u}_j = \\begin{cases} 1 & i = j \\\\ 0 & i \\ne j \\end{cases}, \\qquad \\mathbf{y} = \\sum_i (\\mathbf{y} \\cdot \\mathbf{u}_i)\\,\\mathbf{u}_i',
    example:
      '// Orthonormal camera basis from a view direction (right-handed, y up)\n' +
      'Vec3 f = normalize(target - eye);\n' +
      'Vec3 r = normalize(cross(f, Vec3{0, 1, 0}));  // breaks if f is vertical!\n' +
      'Vec3 u = cross(r, f);                          // already unit length',
    exampleLang: 'cpp',
    see: ['orthogonal-set', 'orthogonal-matrix', 'gram-schmidt', 'standard-basis'],
  },
  {
    id: 'orthogonal-matrix',
    term: 'Orthogonal Matrix',
    aliases: ['orthonormal matrix', 'Q^T Q = I'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'A square matrix $Q$ whose columns form an [[orthonormal-basis]]; equivalently $Q^TQ = QQ^T = I$, so $Q^{-1} = Q^T$.',
    long:
      'Orthogonal matrices are the rigid motions that fix the origin: they preserve lengths ($\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|$), dot products and angles. Their determinant is $\\pm 1$: $+1$ for rotations, $-1$ for a rotation combined with a reflection. Products and inverses of orthogonal matrices are orthogonal, and the rows are orthonormal too.\n\n' +
      'They are numerically ideal: inverting is a free transpose, and multiplying never amplifies round-off. That is why the [[qr-factorization]], the [[spectral-theorem]] and the SVD are built from them, and why engines store rotations as orthogonal $3 \\times 3$ blocks (or quaternions) and invert rigid transforms with $R^T$.\n\n' +
      'Pitfall: despite the name, the columns must be ortho**normal**, not merely orthogonal: $\\begin{bmatrix} 2 & 0 \\\\ 0 & 1 \\end{bmatrix}$ has orthogonal columns but is not an orthogonal matrix. A non-square $U$ with orthonormal columns has $U^TU = I$ but $UU^T \\ne I$ ($UU^T$ is a projection).',
    tex: 'Q^TQ = I \\iff Q^{-1} = Q^T, \\qquad \\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|, \\qquad \\det Q = \\pm 1',
    see: ['orthonormal-basis', 'rotation-matrix', 'reflection-matrix', 'qr-factorization'],
  },
  {
    id: 'orthogonal-complement',
    term: 'Orthogonal Complement',
    aliases: ['W perp', 'W^⊥', 'perp'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'The orthogonal complement of a subspace $W$ of $\\mathbb{R}^n$ is $W^\\perp = \\{\\mathbf{z} : \\mathbf{z} \\cdot \\mathbf{w} = 0 \\text{ for all } \\mathbf{w} \\in W\\}$, itself a subspace.',
    long:
      'In $\\mathbb{R}^3$ the complement of a line through the origin is the perpendicular plane, and vice versa; a plane\'s normal vector spans its complement. A vector is in $W^\\perp$ iff it is orthogonal to every vector of a spanning set of $W$, so only finitely many dot products need checking.\n\n' +
      'Facts: $\\dim W + \\dim W^\\perp = n$; $(W^\\perp)^\\perp = W$; $W \\cap W^\\perp = \\{\\mathbf{0}\\}$; and every $\\mathbf{y}$ splits uniquely as $\\hat{\\mathbf{y}} + \\mathbf{z}$ with $\\hat{\\mathbf{y}} \\in W$ and $\\mathbf{z} \\in W^\\perp$. For matrices, $(\\operatorname{Row} A)^\\perp = \\operatorname{Nul} A$ and $(\\operatorname{Col} A)^\\perp = \\operatorname{Nul} A^T$: to find $W^\\perp$, write a spanning set of $W$ as the rows of $A$ and solve $A\\mathbf{x} = \\mathbf{0}$.\n\n' +
      'Pitfall: $W^\\perp$ is not "everything outside $W$"; it is a subspace, and most vectors lie in neither $W$ nor $W^\\perp$.',
    tex: '(\\operatorname{Row} A)^{\\perp} = \\operatorname{Nul} A, \\qquad (\\operatorname{Col} A)^{\\perp} = \\operatorname{Nul} A^{T}, \\qquad \\dim W + \\dim W^{\\perp} = n',
    see: ['orthogonal', 'orthogonal-projection', 'null-space', 'row-space'],
  },
  {
    id: 'orthogonal-projection',
    term: 'Orthogonal Projection',
    aliases: ['projection onto a subspace', 'proj_W', 'projection matrix'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'The orthogonal projection of $\\mathbf{y}$ onto a subspace $W$ is the unique $\\hat{\\mathbf{y}} \\in W$ with $\\mathbf{y} - \\hat{\\mathbf{y}} \\in W^\\perp$; it is the point of $W$ closest to $\\mathbf{y}$.',
    long:
      'With an orthogonal basis $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ of $W$, project onto each basis vector and add: $\\hat{\\mathbf{y}} = \\sum_j \\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}\\mathbf{u}_j$. With orthonormal columns $U$, $\\hat{\\mathbf{y}} = UU^T\\mathbf{y}$. With any basis as the columns of $A$, $\\hat{\\mathbf{y}} = A(A^TA)^{-1}A^T\\mathbf{y}$.\n\n' +
      'Best Approximation Theorem: $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\| < \\|\\mathbf{y} - \\mathbf{v}\\|$ for every other $\\mathbf{v} \\in W$. That is the engine behind [[least-squares-solution|least squares]] and [[gram-schmidt]]. A projection matrix $P$ is symmetric and idempotent, $P^T = P$ and $P^2 = P$ (projecting twice changes nothing), and its eigenvalues are 0 and 1.\n\n' +
      'Pitfall: the sum formula needs an **orthogonal** basis; with a non-orthogonal basis, adding the separate projections gives the wrong answer. In games, dropping a point onto a plane through $\\mathbf{p}_0$ with unit normal $\\mathbf{n}$ (snapping to the ground, flattening a velocity) is $\\mathbf{p} - ((\\mathbf{p} - \\mathbf{p}_0) \\cdot \\mathbf{n})\\,\\mathbf{n}$.',
    tex: '\\hat{\\mathbf{y}} = \\operatorname{proj}_W\\mathbf{y} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\mathbf{u}_1 + \\cdots + \\frac{\\mathbf{y} \\cdot \\mathbf{u}_p}{\\mathbf{u}_p \\cdot \\mathbf{u}_p}\\mathbf{u}_p',
    see: ['vector-projection', 'orthogonal-complement', 'least-squares-solution', 'orthonormal-basis'],
  },
  {
    id: 'gram-schmidt',
    term: 'Gram–Schmidt Process',
    aliases: ['Gram-Schmidt', 'Gram–Schmidt orthogonalization', 'orthogonalization'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'An algorithm that turns a basis $\\mathbf{x}_1, \\dots, \\mathbf{x}_p$ of $W$ into an orthogonal basis $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ by subtracting from each vector its projections onto the previous ones.',
    long:
      'Step $k$: $\\mathbf{v}_k = \\mathbf{x}_k - \\sum_{j < k} \\frac{\\mathbf{x}_k \\cdot \\mathbf{v}_j}{\\mathbf{v}_j \\cdot \\mathbf{v}_j}\\mathbf{v}_j$, i.e. $\\mathbf{x}_k$ minus its [[orthogonal-projection]] onto $\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{k-1}\\}$. What remains is orthogonal to all earlier vectors, and $\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\} = \\operatorname{Span}\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_k\\}$ at every stage. Normalize (at the end or as you go) for an [[orthonormal-basis]]; recording the coefficients gives the [[qr-factorization]].\n\n' +
      'Example: $\\mathbf{x}_1 = (1, 1, 0)$, $\\mathbf{x}_2 = (1, 0, 1)$. Then $\\mathbf{v}_1 = \\mathbf{x}_1$ and $\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{1}{2}\\mathbf{x}_1 = (\\tfrac12, -\\tfrac12, 1)$; check $\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 0$. If some $\\mathbf{v}_k$ comes out $\\mathbf{0}$, the original vectors were dependent.\n\n' +
      'Pitfall: classical Gram–Schmidt loses orthogonality in floating point; *modified* Gram–Schmidt (subtract each projection from the running vector) or Householder reflections are used in practice. In graphics, one Gram–Schmidt step builds the tangent frame for normal mapping, $\\mathbf{t}\' = \\operatorname{normalize}(\\mathbf{t} - (\\mathbf{t} \\cdot \\mathbf{n})\\mathbf{n})$, and the same idea re-orthonormalizes drifting rotation matrices.',
    tex: '\\mathbf{v}_1 = \\mathbf{x}_1, \\quad \\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1, \\quad \\mathbf{v}_3 = \\mathbf{x}_3 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{v}_2}{\\mathbf{v}_2 \\cdot \\mathbf{v}_2}\\mathbf{v}_2',
    example:
      '// One Gram-Schmidt step for normal mapping: make the tangent t\n' +
      '// orthogonal to the unit normal n, then complete the frame.\n' +
      'Vec3 t2 = normalize(t - dot(t, n) * n);\n' +
      'Vec3 b  = cross(n, t2);   // [t2 b n] is an orthonormal basis',
    exampleLang: 'cpp',
    see: ['orthogonal-projection', 'orthonormal-basis', 'qr-factorization', 'vector-projection'],
  },
  {
    id: 'qr-factorization',
    term: 'QR Factorization',
    aliases: ['QR decomposition', 'A = QR'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'An $m \\times n$ matrix $A$ with linearly independent columns factors as $A = QR$, where $Q$ ($m \\times n$) has orthonormal columns spanning $\\operatorname{Col} A$ and $R$ ($n \\times n$) is upper triangular and invertible with positive diagonal.',
    long:
      'It is [[gram-schmidt]] written as matrices: $Q$ holds the orthonormalized columns, and $R = Q^TA$ records how each original column is built from them (upper triangular because $\\mathbf{a}_k$ involves only $\\mathbf{q}_1, \\dots, \\mathbf{q}_k$). Example: $\\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1/\\sqrt{2} & 1/\\sqrt{6} \\\\ 1/\\sqrt{2} & -1/\\sqrt{6} \\\\ 0 & 2/\\sqrt{6} \\end{bmatrix}\\begin{bmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & \\sqrt{6}/2 \\end{bmatrix}$.\n\n' +
      'Uses: least squares without forming $A^TA$ (solve $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$ by back-substitution, which is more stable than the [[normal-equations]]); and the QR algorithm ($A_k = Q_kR_k$, $A_{k+1} = R_kQ_k$), which is how numerical libraries actually compute eigenvalues.\n\n' +
      'Pitfall: for non-square $A$, $Q^TQ = I$ but $QQ^T \\ne I$, so $Q^T$ is only a left inverse; $QQ^T$ is the projection onto $\\operatorname{Col} A$. Production code computes QR with Householder reflections rather than Gram–Schmidt.',
    tex: 'A = QR, \\qquad Q^TQ = I, \\qquad R = Q^TA, \\qquad R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}',
    see: ['gram-schmidt', 'orthogonal-matrix', 'triangular-matrix', 'least-squares-solution'],
  },
  {
    id: 'least-squares-solution',
    term: 'Least-Squares Solution',
    aliases: ['least squares', 'best fit', 'linear regression'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'For a (possibly inconsistent) system $A\\mathbf{x} = \\mathbf{b}$, a least-squares solution is an $\\hat{\\mathbf{x}}$ minimizing $\\|\\mathbf{b} - A\\mathbf{x}\\|$; it solves the [[normal-equations]] $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$.',
    long:
      'When $\\mathbf{b}$ is not in $\\operatorname{Col} A$, settle for the closest point that is: $A\\hat{\\mathbf{x}} = \\hat{\\mathbf{b}} = \\operatorname{proj}_{\\operatorname{Col} A}\\mathbf{b}$. The residual $\\mathbf{b} - A\\hat{\\mathbf{x}}$ is orthogonal to every column, $A^T(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0}$, which is exactly the normal equations. The solution is unique iff the columns of $A$ are independent, and then $\\hat{\\mathbf{x}} = (A^TA)^{-1}A^T\\mathbf{b}$.\n\n' +
      'Line fitting: to fit $y = \\beta_0 + \\beta_1x$ to points $(x_i, y_i)$, use the design matrix with rows $[\\,1\\ \\ x_i\\,]$ and $\\mathbf{b} = (y_i)$. For $(0, 1), (1, 3), (2, 4)$: $A^TA = \\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}$ and $A^T\\mathbf{b} = (8, 11)$, so $y = \\tfrac{7}{6} + \\tfrac{3}{2}x$. Polynomial and multi-variable fits work the same way.\n\n' +
      'Pitfall: the least-squares error $\\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\|$ is not zero unless the system was consistent. Applications: linear regression in ML, sensor calibration, fitting curves to motion-capture data, and solving over-determined constraint systems in physics and IK.',
    tex: '\\hat{\\mathbf{x}} \\text{ minimizes } \\|\\mathbf{b} - A\\mathbf{x}\\| \\iff A^TA\\,\\hat{\\mathbf{x}} = A^T\\mathbf{b}',
    see: ['normal-equations', 'orthogonal-projection', 'qr-factorization', 'column-space'],
  },
  {
    id: 'normal-equations',
    term: 'Normal Equations',
    aliases: ['normal equation', 'A^T A x = A^T b'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'The square system $A^TA\\mathbf{x} = A^T\\mathbf{b}$, whose solutions are exactly the [[least-squares-solution|least-squares solutions]] of $A\\mathbf{x} = \\mathbf{b}$.',
    long:
      'Derivation: $\\hat{\\mathbf{x}}$ is a least-squares solution iff the residual $\\mathbf{b} - A\\hat{\\mathbf{x}}$ is orthogonal to $\\operatorname{Col} A$, i.e. to every column of $A$, i.e. $A^T(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0}$. Rearranging gives the normal equations ("normal" as in perpendicular). They are always consistent.\n\n' +
      '$A^TA$ is $n \\times n$ and [[symmetric-matrix|symmetric]]; it is invertible iff the columns of $A$ are linearly independent, giving the unique solution $\\hat{\\mathbf{x}} = (A^TA)^{-1}A^T\\mathbf{b}$. The same equations come out of calculus by setting the gradient of $\\|\\mathbf{b} - A\\mathbf{x}\\|^2$ to zero.\n\n' +
      'Pitfall: forming $A^TA$ squares the condition number, so with ill-conditioned data the normal equations lose about twice as many digits as solving with [[qr-factorization|QR]] or the SVD. They are fine for small, well-conditioned fits.',
    tex: 'A^TA\\,\\hat{\\mathbf{x}} = A^T\\mathbf{b}, \\qquad \\hat{\\mathbf{x}} = (A^TA)^{-1}A^T\\mathbf{b} \\ \\ \\text{(independent columns)}',
    see: ['least-squares-solution', 'transpose', 'orthogonal-projection', 'qr-factorization'],
  },
  {
    id: 'symmetric-matrix',
    term: 'Symmetric Matrix',
    aliases: ['symmetric', 'A = A^T'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'A square matrix equal to its transpose, $A^T = A$, i.e. $a_{ij} = a_{ji}$: it is its own mirror image across the main diagonal.',
    long:
      'Symmetric matrices are everywhere: $A^TA$ and $AA^T$ for any $A$, covariance matrices in statistics and ML, Hessians of second derivatives, inertia tensors in rigid-body physics, stiffness matrices in cloth and finite-element simulation, and adjacency matrices of undirected graphs.\n\n' +
      'They have the best possible eigen-structure ([[spectral-theorem]]): all eigenvalues are real, eigenvectors from different eigenspaces are orthogonal, and there is always an orthonormal basis of eigenvectors, so $A = PDP^T$ with $P$ orthogonal. A symmetric matrix is *positive definite* when all its eigenvalues are positive (equivalently $\\mathbf{x}^TA\\mathbf{x} > 0$ for all $\\mathbf{x} \\ne \\mathbf{0}$), which is what a physically valid inertia tensor must be.\n\n' +
      'Pitfall: a product of two symmetric matrices is generally **not** symmetric, and a non-symmetric matrix can still be diagonalizable (just not with an orthogonal $P$).',
    tex: 'A = A^T: \\quad \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix} = \\begin{bmatrix} \\tfrac{1}{\\sqrt{2}} & -\\tfrac{1}{\\sqrt{2}} \\\\ \\tfrac{1}{\\sqrt{2}} & \\tfrac{1}{\\sqrt{2}} \\end{bmatrix}\\begin{bmatrix} 3 & 0 \\\\ 0 & 1 \\end{bmatrix}\\begin{bmatrix} \\tfrac{1}{\\sqrt{2}} & \\tfrac{1}{\\sqrt{2}} \\\\ -\\tfrac{1}{\\sqrt{2}} & \\tfrac{1}{\\sqrt{2}} \\end{bmatrix}',
    see: ['spectral-theorem', 'transpose', 'orthogonal-matrix', 'eigenvalue'],
  },
  {
    id: 'spectral-theorem',
    term: 'Spectral Theorem',
    aliases: ['spectral theorem for symmetric matrices', 'orthogonal diagonalization', 'principal axis theorem'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'A real $n \\times n$ matrix is orthogonally diagonalizable, $A = PDP^T$ with $P$ orthogonal and $D$ diagonal, if and only if it is symmetric.',
    long:
      'For symmetric $A$: (1) all $n$ eigenvalues are real (counted with multiplicity); (2) each eigenspace has dimension equal to the algebraic multiplicity; (3) eigenspaces for different eigenvalues are mutually orthogonal; (4) so $A$ has an orthonormal basis of eigenvectors. Writing $P = [\\,\\mathbf{u}_1 \\cdots \\mathbf{u}_n\\,]$ gives the *spectral decomposition* $A = \\lambda_1\\mathbf{u}_1\\mathbf{u}_1^T + \\cdots + \\lambda_n\\mathbf{u}_n\\mathbf{u}_n^T$, a weighted sum of projections onto perpendicular axes.\n\n' +
      'Geometrically, a symmetric matrix is a pure stretch along perpendicular axes, with no shear and no rotation: it maps the unit circle to an ellipse whose axes are the eigenvectors. Applications: principal component analysis (PCA) diagonalizes a covariance matrix; physics engines diagonalize an inertia tensor to find principal axes; oriented bounding boxes are fitted to point clouds the same way.\n\n' +
      'Pitfall: inside the eigenspace of a repeated eigenvalue, the basis that row reduction gives need not be orthogonal; run [[gram-schmidt]] within that eigenspace before building $P$. Also normalize the columns, or $P^T \\ne P^{-1}$.',
    tex: 'A = A^T \\iff A = PDP^{T} = \\sum_{i=1}^{n} \\lambda_i\\,\\mathbf{u}_i\\mathbf{u}_i^{T} \\ \\text{ with } P^TP = I',
    see: ['symmetric-matrix', 'diagonalizable', 'orthogonal-matrix', 'singular-value-decomposition'],
  },
  {
    id: 'singular-value-decomposition',
    term: 'Singular Value Decomposition',
    aliases: ['SVD', 'A = UΣV^T'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'Every $m \\times n$ matrix factors as $A = U\\Sigma V^T$, with $U$ ($m \\times m$) and $V$ ($n \\times n$) orthogonal and $\\Sigma$ ($m \\times n$) diagonal with the [[singular-values]] $\\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge 0$.',
    long:
      'Geometry: every linear map is a rotation (or reflection), then a stretch along the axes, then another rotation (or reflection). $V^T$ turns the input so the right directions line up with the axes, $\\Sigma$ stretches axis $i$ by $\\sigma_i$, and $U$ turns the result into place; the unit sphere maps to an ellipsoid with semi-axes $\\sigma_i\\mathbf{u}_i$. The columns of $V$ are orthonormal eigenvectors of $A^TA$, $\\sigma_i = \\sqrt{\\lambda_i(A^TA)}$, and $A\\mathbf{v}_i = \\sigma_i\\mathbf{u}_i$.\n\n' +
      'Unlike diagonalization, the SVD exists for **every** matrix, square or not, and it reveals everything: $\\operatorname{rank} A$ is the number of nonzero $\\sigma_i$; the first $r$ columns of $U$ and of $V$ are orthonormal bases of $\\operatorname{Col} A$ and $\\operatorname{Row} A$; the pseudoinverse $A^+ = V\\Sigma^+U^T$ gives minimum-length least-squares solutions. Keeping the top $k$ terms, $A_k = \\sum_{i \\le k}\\sigma_i\\mathbf{u}_i\\mathbf{v}_i^T$, gives the best rank-$k$ approximation (Eckart–Young): image compression, PCA, recommender systems.\n\n' +
      'Pitfall: $U$ and $V$ are different matrices (not $P$ and $P^{-1}$ as in diagonalization), and singular values are not the eigenvalues of $A$ (they coincide only for symmetric positive semidefinite $A$). Physics and animation code use the SVD to extract the closest pure rotation $UV^T$ from a skewed matrix, e.g. in shape-matching soft bodies.',
    tex: 'A = U\\Sigma V^{T} = \\sigma_1\\mathbf{u}_1\\mathbf{v}_1^{T} + \\cdots + \\sigma_r\\mathbf{u}_r\\mathbf{v}_r^{T}, \\qquad r = \\operatorname{rank} A',
    see: ['singular-values', 'spectral-theorem', 'orthogonal-matrix', 'rank'],
  },
  {
    id: 'singular-values',
    term: 'Singular Values',
    aliases: ['singular value', 'σ_i'],
    course: 'linalg',
    category: 'Orthogonality',
    short:
      'The singular values of $A$ are $\\sigma_i = \\sqrt{\\lambda_i}$, where $\\lambda_1 \\ge \\cdots \\ge \\lambda_n \\ge 0$ are the eigenvalues of the symmetric matrix $A^TA$; equivalently $\\sigma_i = \\|A\\mathbf{v}_i\\|$ for orthonormal eigenvectors $\\mathbf{v}_i$ of $A^TA$.',
    long:
      'They are the stretch factors of $A$: the semi-axis lengths of the ellipse (or ellipsoid) that $A$ makes from the unit circle (or sphere). $\\sigma_1 = \\max_{\\|\\mathbf{x}\\| = 1}\\|A\\mathbf{x}\\|$ is the largest stretch, and the smallest nonzero one measures how close $A$ is to losing rank. They are always real and nonnegative, even when the eigenvalues of $A$ are complex.\n\n' +
      'Example: $A = \\begin{bmatrix} 3 & 0 \\\\ 4 & 5 \\end{bmatrix}$ gives $A^TA = \\begin{bmatrix} 25 & 20 \\\\ 20 & 25 \\end{bmatrix}$ with eigenvalues $45$ and $5$, so $\\sigma_1 = 3\\sqrt{5}$ and $\\sigma_2 = \\sqrt{5}$. Check: $\\sigma_1\\sigma_2 = 15 = |\\det A|$. The number of nonzero singular values is the [[rank]], and the *condition number* $\\sigma_1/\\sigma_n$ predicts how much solving $A\\mathbf{x} = \\mathbf{b}$ can amplify errors.\n\n' +
      'Pitfall: singular values are not the absolute values of the eigenvalues unless $A$ is symmetric (more generally, normal). A [[shear]] has both eigenvalues equal to 1, but its singular values are not 1. For a rotation every $\\sigma_i = 1$.',
    tex: '\\sigma_i = \\sqrt{\\lambda_i(A^TA)}, \\qquad \\sigma_1 = \\max_{\\|\\mathbf{x}\\| = 1}\\|A\\mathbf{x}\\|, \\qquad \\kappa(A) = \\frac{\\sigma_1}{\\sigma_n}',
    see: ['singular-value-decomposition', 'rank', 'eigenvalue', 'symmetric-matrix'],
  },
];
