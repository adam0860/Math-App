import type { CheatSheet } from '../types';

export const linalgCheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------------
  {
    id: 'la-vectors',
    title: 'Vectors',
    course: 'linalg',
    icon: '➡️',
    description:
      'Vectors in Rⁿ: linear combinations, length, the dot product, angles, projections and the cross product, plus lines and planes.',
    sections: [
      {
        title: 'Basics',
        items: [
          {
            label: '[[linear-combination|Linear combination]]',
            tex: 'c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_p\\mathbf{v}_p',
            text: 'The set of all of them is $\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$.',
          },
          {
            label: '[[norm|Norm]] (length)',
            tex: '\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}',
          },
          {
            label: 'Distance between points',
            tex: '\\operatorname{dist}(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|',
            text: 'Compare squared distances in code to skip the square root.',
          },
          {
            label: '[[unit-vector|Unit vector]] (normalize)',
            tex: '\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|} \\quad (\\mathbf{v} \\ne \\mathbf{0}), \\qquad \\|c\\,\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|',
          },
        ],
      },
      {
        title: 'Dot product',
        items: [
          {
            label: '[[dot-product|Dot product]]',
            tex: '\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + \\cdots + u_nv_n = \\mathbf{u}^T\\mathbf{v}',
          },
          {
            label: 'Angle between vectors',
            tex: '\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\cos\\theta \\implies \\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|}',
            text: 'Sign test: $> 0$ acute, $= 0$ right angle, $< 0$ obtuse (in front of / beside / behind).',
          },
          {
            label: '[[orthogonal|Orthogonal]]',
            tex: '\\mathbf{u} \\perp \\mathbf{v} \\iff \\mathbf{u} \\cdot \\mathbf{v} = 0 \\iff \\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2',
          },
          {
            label: 'Algebra rules',
            tex: '\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}, \\quad \\mathbf{u} \\cdot (\\mathbf{v} + \\mathbf{w}) = \\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{u} \\cdot \\mathbf{w}, \\quad (c\\mathbf{u}) \\cdot \\mathbf{v} = c(\\mathbf{u} \\cdot \\mathbf{v}), \\quad \\mathbf{v} \\cdot \\mathbf{v} = \\|\\mathbf{v}\\|^2',
          },
          {
            label: 'Cauchy–Schwarz and triangle inequalities',
            tex: '|\\mathbf{u} \\cdot \\mathbf{v}| \\le \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|, \\qquad \\|\\mathbf{u} + \\mathbf{v}\\| \\le \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|',
          },
        ],
      },
      {
        title: 'Projection',
        items: [
          {
            label: '[[vector-projection|Projection]] of $\\mathbf{v}$ onto $\\mathbf{u}$',
            tex: '\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v} = \\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}}\\,\\mathbf{u}',
            text: 'For a unit vector $\\mathbf{n}$: $(\\mathbf{v} \\cdot \\mathbf{n})\\,\\mathbf{n}$.',
          },
          {
            label: 'Scalar projection (component)',
            tex: '\\operatorname{comp}_{\\mathbf{u}}\\mathbf{v} = \\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\|\\mathbf{u}\\|} = \\|\\mathbf{v}\\|\\cos\\theta',
          },
          {
            label: 'Orthogonal decomposition',
            tex: '\\mathbf{v} = \\underbrace{\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v}}_{\\parallel \\mathbf{u}} + \\underbrace{(\\mathbf{v} - \\operatorname{proj}_{\\mathbf{u}}\\mathbf{v})}_{\\perp \\mathbf{u}}',
            text: 'Wall sliding: keep $\\mathbf{v} - (\\mathbf{v} \\cdot \\mathbf{n})\\mathbf{n}$.',
          },
          {
            label: 'Reflect off a surface (unit normal $\\mathbf{n}$)',
            tex: '\\mathbf{r} = \\mathbf{v} - 2(\\mathbf{v} \\cdot \\mathbf{n})\\,\\mathbf{n}',
            text: 'Same as GLSL/HLSL `reflect(v, n)`.',
          },
        ],
      },
      {
        title: 'Cross product (ℝ³ only)',
        items: [
          {
            label: '[[cross-product|Cross product]]',
            tex: '\\mathbf{u} \\times \\mathbf{v} = \\begin{bmatrix} u_2v_3 - u_3v_2 \\\\ u_3v_1 - u_1v_3 \\\\ u_1v_2 - u_2v_1 \\end{bmatrix} = \\begin{vmatrix} \\mathbf{e}_1 & \\mathbf{e}_2 & \\mathbf{e}_3 \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix}',
          },
          {
            label: 'Length = parallelogram area',
            tex: '\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\sin\\theta, \\qquad \\text{triangle area} = \\tfrac{1}{2}\\|\\mathbf{u} \\times \\mathbf{v}\\|',
          },
          {
            label: 'Rules',
            tex: '\\mathbf{v} \\times \\mathbf{u} = -(\\mathbf{u} \\times \\mathbf{v}), \\quad \\mathbf{u} \\times \\mathbf{u} = \\mathbf{0}, \\quad \\mathbf{e}_1 \\times \\mathbf{e}_2 = \\mathbf{e}_3, \\ \\mathbf{e}_2 \\times \\mathbf{e}_3 = \\mathbf{e}_1, \\ \\mathbf{e}_3 \\times \\mathbf{e}_1 = \\mathbf{e}_2',
            text: 'Orthogonal to both factors; direction by the [[right-hand-rule]]; not associative.',
          },
          {
            label: 'Scalar triple product = signed volume',
            tex: '\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w}) = \\det\\begin{bmatrix} \\mathbf{u} & \\mathbf{v} & \\mathbf{w} \\end{bmatrix}',
          },
          {
            label: 'Triangle normal in C++',
            code: '// counterclockwise A, B, C -> normal points toward the viewer\nVec3 n = normalize(cross(B - A, C - A));',
            lang: 'cpp',
          },
        ],
      },
      {
        title: 'Lines and planes',
        items: [
          {
            label: 'Line (or ray) through $\\mathbf{p}$ with direction $\\mathbf{d}$',
            tex: '\\mathbf{x}(t) = \\mathbf{p} + t\\,\\mathbf{d}, \\qquad t \\in \\mathbb{R} \\ (\\text{ray: } t \\ge 0)',
          },
          {
            label: 'Plane through $\\mathbf{p}_0$ with normal $\\mathbf{n}$',
            tex: '\\mathbf{n} \\cdot (\\mathbf{x} - \\mathbf{p}_0) = 0 \\iff ax + by + cz = d',
            text: 'Normal from three points: $\\mathbf{n} = (B - A) \\times (C - A)$.',
          },
          {
            label: 'Signed distance from a point to a plane ($\\|\\mathbf{n}\\| = 1$)',
            tex: 's = \\mathbf{n} \\cdot (\\mathbf{x} - \\mathbf{p}_0)',
            text: 'Positive on the side $\\mathbf{n}$ points to: the core of frustum culling.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'la-systems',
    title: 'Systems & Row Reduction',
    course: 'linalg',
    icon: '🧮',
    description:
      'Three views of a linear system, the row operations, echelon forms, the existence and uniqueness tests, and the structure of solution sets.',
    sections: [
      {
        title: 'Three views of one system',
        items: [
          {
            label: 'Equations ↔ matrix equation ↔ vector equation',
            tex: '\\begin{aligned} x_1 + 2x_2 &= 5 \\\\ 3x_1 + 4x_2 &= 6 \\end{aligned} \\iff \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 6 \\end{bmatrix} \\iff x_1\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} + x_2\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 6 \\end{bmatrix}',
          },
          {
            label: '[[augmented-matrix|Augmented matrix]]',
            tex: '\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & 4 & 6 \\end{array}\\right] = [\\,A \\mid \\mathbf{b}\\,]',
            text: '$A$ is the [[coefficient-matrix]].',
          },
          {
            label: '[[matrix-vector-product|Matrix–vector product]]',
            tex: 'A\\mathbf{x} = x_1\\mathbf{a}_1 + \\cdots + x_n\\mathbf{a}_n, \\qquad (A\\mathbf{x})_i = \\text{row}_i(A) \\cdot \\mathbf{x}',
          },
        ],
      },
      {
        title: 'Row operations',
        items: [
          {
            label: '[[row-operations|Elementary row operations]]',
            tex: 'R_i \\to R_i + kR_j \\qquad R_i \\leftrightarrow R_j \\qquad R_i \\to kR_i \\ (k \\ne 0)',
            text: 'All reversible, so [[row-equivalent]] systems have the same solutions.',
          },
          {
            label: 'Notation for a step',
            tex: '\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & 4 & 6 \\end{array}\\right] \\xrightarrow{R_2 - 3R_1} \\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -2 & -9 \\end{array}\\right]',
          },
          {
            label: 'Forward phase, then backward phase',
            text: 'Forward: work left to right, create a [[pivot]] and zeros **below** it (→ echelon form). Backward: work bottom to top, scale pivots to 1 and create zeros **above** them (→ RREF).',
          },
        ],
      },
      {
        title: 'Echelon forms',
        items: [
          {
            label: '[[echelon-form|Echelon form]] (REF)',
            tex: '\\begin{bmatrix} \\blacksquare & * & * & * \\\\ 0 & \\blacksquare & * & * \\\\ 0 & 0 & 0 & \\blacksquare \\end{bmatrix}',
            text: 'Zero rows at the bottom; each leading entry right of the one above; zeros below leading entries. Not unique.',
          },
          {
            label: '[[reduced-echelon-form|Reduced echelon form]] (RREF)',
            tex: '\\begin{bmatrix} 1 & 0 & * & 0 \\\\ 0 & 1 & * & 0 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}',
            text: 'Also: every pivot is 1 and is the only nonzero entry in its column. Unique for each matrix.',
          },
          {
            label: 'Vocabulary',
            text: '[[pivot-column|Pivot columns]] ↔ [[basic-variable|basic variables]]; non-pivot columns ↔ [[free-variable|free variables]]. Number of pivots $= \\operatorname{rank} A$.',
          },
        ],
      },
      {
        title: 'Existence and uniqueness',
        items: [
          {
            label: 'Consistent?',
            tex: '\\text{consistent} \\iff \\text{no row } [\\,0 \\ \\cdots \\ 0 \\mid b\\,] \\text{ with } b \\ne 0 \\iff \\mathbf{b} \\in \\operatorname{Col} A',
            text: 'Equivalently, the augmented column is not a pivot column.',
          },
          {
            label: 'How many solutions?',
            text: 'Inconsistent → none. Consistent with no free variables → exactly one. Consistent with $\\ge 1$ free variable → infinitely many. Never exactly two.',
          },
          {
            label: 'Pivot in every row ($m \\times n$ matrix $A$)',
            tex: 'A\\mathbf{x} = \\mathbf{b} \\text{ solvable for every } \\mathbf{b} \\iff \\text{columns span } \\mathbb{R}^m \\iff \\operatorname{rank} A = m',
            text: 'Needs $n \\ge m$. This is the map $\\mathbf{x} \\mapsto A\\mathbf{x}$ being [[onto]].',
          },
          {
            label: 'Pivot in every column',
            tex: 'A\\mathbf{x} = \\mathbf{0} \\text{ only trivially} \\iff \\text{columns independent} \\iff \\operatorname{rank} A = n',
            text: 'Needs $n \\le m$. This is the map being [[one-to-one]]; solutions of $A\\mathbf{x} = \\mathbf{b}$, if any, are unique.',
          },
        ],
      },
      {
        title: 'Solution sets',
        items: [
          {
            label: '[[parametric-vector-form|Parametric vector form]]',
            tex: '\\mathbf{x} = \\mathbf{p} + s\\,\\mathbf{u} + t\\,\\mathbf{v}, \\qquad s, t \\in \\mathbb{R}',
            text: 'One vector per free variable; $\\mathbf{p}$ is a particular solution.',
          },
          {
            label: 'Structure of solutions',
            tex: '\\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{b}\\} = \\mathbf{p} + \\operatorname{Nul} A',
            text: 'Any one solution of $A\\mathbf{x} = \\mathbf{b}$ plus all solutions of $A\\mathbf{x} = \\mathbf{0}$.',
          },
          {
            label: '[[homogeneous-system|Homogeneous system]]',
            tex: 'A\\mathbf{x} = \\mathbf{0}: \\ \\text{always has } \\mathbf{x} = \\mathbf{0}; \\ \\text{nontrivial solutions} \\iff \\text{a free variable exists}',
            text: 'More unknowns than equations ($n > m$) guarantees nontrivial solutions.',
          },
          {
            label: 'Counting',
            tex: '\\#\\text{basic} = \\operatorname{rank} A, \\qquad \\#\\text{free} = n - \\operatorname{rank} A = \\dim \\operatorname{Nul} A',
          },
        ],
      },
      {
        title: 'Independence and span tests',
        items: [
          {
            label: '[[linear-independence|Linearly independent]] columns',
            text: 'Row reduce $A = [\\,\\mathbf{v}_1 \\cdots \\mathbf{v}_p\\,]$: independent iff every column has a pivot. Automatically dependent if $p > n$ or if some $\\mathbf{v}_i = \\mathbf{0}$.',
          },
          {
            label: 'Is $\\mathbf{b}$ in the [[span]]?',
            text: 'Row reduce $[\\,\\mathbf{v}_1 \\cdots \\mathbf{v}_p \\mid \\mathbf{b}\\,]$; yes iff it is consistent. The solution gives the weights.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'la-matrices-transforms',
    title: 'Matrices & Transformations',
    course: 'linalg',
    icon: '🔄',
    description:
      'Matrix algebra rules, inverses, the standard 2D and 3D transformation matrices, homogeneous coordinates for game transforms, and the Invertible Matrix Theorem.',
    sections: [
      {
        title: 'Products',
        items: [
          {
            label: '[[matrix-product|Matrix product]]',
            tex: '(AB)_{ij} = \\sum_{k=1}^{n} a_{ik}b_{kj}, \\qquad AB = [\\,A\\mathbf{b}_1 \\ \\cdots \\ A\\mathbf{b}_p\\,]',
            text: '$(m \\times n)(n \\times p) = m \\times p$.',
          },
          {
            label: 'Composition',
            tex: '(AB)\\mathbf{x} = A(B\\mathbf{x}) \\quad \\text{(apply } B \\text{ first, then } A\\text{)}',
          },
          {
            label: 'What holds and what fails',
            tex: '(AB)C = A(BC), \\quad A(B + C) = AB + AC, \\qquad \\text{but in general } AB \\ne BA',
            text: '$AB = AC$ does not imply $B = C$; $AB = 0$ does not imply $A = 0$ or $B = 0$.',
          },
          {
            label: 'Powers and the identity',
            tex: 'A^k = \\underbrace{A \\cdots A}_{k}, \\qquad A^0 = I, \\qquad AI = IA = A',
          },
        ],
      },
      {
        title: 'Transpose and inverse',
        items: [
          {
            label: '[[transpose|Transpose]] rules',
            tex: '(A^T)^T = A, \\quad (A + B)^T = A^T + B^T, \\quad (cA)^T = cA^T, \\quad (AB)^T = B^TA^T',
          },
          {
            label: '[[inverse-matrix|Inverse]] of a $2 \\times 2$ matrix',
            tex: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} \\quad (ad - bc \\ne 0)',
          },
          {
            label: 'Inverse by row reduction',
            tex: '[\\,A \\mid I\\,] \\sim [\\,I \\mid A^{-1}\\,]',
            text: 'If the left block cannot become $I$, then $A$ is [[singular-matrix|singular]].',
          },
          {
            label: 'Inverse rules',
            tex: '(A^{-1})^{-1} = A, \\quad (AB)^{-1} = B^{-1}A^{-1}, \\quad (A^T)^{-1} = (A^{-1})^T, \\quad (cA)^{-1} = \\tfrac{1}{c}A^{-1}',
          },
          {
            label: 'Solving with the inverse',
            tex: 'A\\mathbf{x} = \\mathbf{b} \\implies \\mathbf{x} = A^{-1}\\mathbf{b}',
            text: 'Fine in theory; in code prefer elimination (LU), which is faster and more accurate.',
          },
        ],
      },
      {
        title: '2D transformations (about the origin)',
        items: [
          {
            label: '[[standard-matrix|Standard matrix]]',
            tex: 'A = [\\,T(\\mathbf{e}_1) \\ \\cdots \\ T(\\mathbf{e}_n)\\,]',
            text: 'Columns = where the axes go.',
          },
          {
            label: '[[rotation-matrix|Rotation]] by $\\theta$ (counterclockwise)',
            tex: 'R(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}, \\qquad R(\\theta)^{-1} = R(-\\theta) = R(\\theta)^T',
          },
          {
            label: 'Scale',
            tex: 'S = \\begin{bmatrix} s_x & 0 \\\\ 0 & s_y \\end{bmatrix}, \\qquad \\det S = s_xs_y',
          },
          {
            label: '[[shear|Shear]] (horizontal, vertical)',
            tex: '\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}: (x, y) \\mapsto (x + ky, y), \\qquad \\begin{bmatrix} 1 & 0 \\\\ k & 1 \\end{bmatrix}: (x, y) \\mapsto (x, y + kx)',
          },
          {
            label: '[[reflection-matrix|Reflections]]',
            tex: '\\text{in } x\\text{-axis: } \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}, \\quad \\text{in } y\\text{-axis: } \\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}, \\quad \\text{in } y = x: \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}',
          },
          {
            label: 'Reflection in the line at angle $\\theta$',
            tex: '\\begin{bmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{bmatrix}, \\qquad \\text{in general } H = I - 2\\mathbf{n}\\mathbf{n}^T \\ (\\|\\mathbf{n}\\| = 1)',
          },
          {
            label: 'Projection onto the line through unit $\\mathbf{u}$',
            tex: 'P = \\mathbf{u}\\mathbf{u}^T = \\begin{bmatrix} \\cos^2\\theta & \\cos\\theta\\sin\\theta \\\\ \\cos\\theta\\sin\\theta & \\sin^2\\theta \\end{bmatrix}, \\qquad P^2 = P',
          },
        ],
      },
      {
        title: '3D rotations (right-handed)',
        items: [
          {
            label: 'About the $x$-axis',
            tex: 'R_x(\\theta) = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{bmatrix}',
          },
          {
            label: 'About the $y$-axis',
            tex: 'R_y(\\theta) = \\begin{bmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{bmatrix}',
            text: 'Note the sign flip: the $-\\sin\\theta$ sits in the bottom row.',
          },
          {
            label: 'About the $z$-axis',
            tex: 'R_z(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}',
          },
          {
            label: 'Every rotation',
            tex: 'R^TR = I, \\qquad \\det R = 1, \\qquad \\operatorname{tr} R = 1 + 2\\cos\\theta',
            text: 'Rotations do not commute in 3D: the order of Euler angles matters.',
          },
        ],
      },
      {
        title: 'Homogeneous coordinates (game transforms)',
        items: [
          {
            label: '2D translation as a $3 \\times 3$ matrix ([[homogeneous-coordinates]])',
            tex: '\\begin{bmatrix} 1 & 0 & t_x \\\\ 0 & 1 & t_y \\\\ 0 & 0 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} x + t_x \\\\ y + t_y \\\\ 1 \\end{bmatrix}',
          },
          {
            label: '3D [[affine-transformation|affine]] transform as a $4 \\times 4$ matrix',
            tex: 'M = \\begin{bmatrix} A & \\mathbf{t} \\\\ \\mathbf{0}^T & 1 \\end{bmatrix}, \\qquad M\\begin{bmatrix} \\mathbf{x} \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} A\\mathbf{x} + \\mathbf{t} \\\\ 1 \\end{bmatrix}',
            text: '$A$ = the $3 \\times 3$ rotation/scale part, $\\mathbf{t}$ = translation.',
          },
          {
            label: 'Points vs directions',
            tex: '\\text{point } (x, y, z, 1), \\qquad \\text{direction } (x, y, z, 0), \\qquad (x, y, z, w) \\sim (x/w,\\, y/w,\\, z/w)',
            text: 'Directions ignore translation; divide by $w$ after a perspective projection.',
          },
          {
            label: 'Model matrix order (column vectors)',
            tex: 'M = T\\,R\\,S \\quad \\text{(scale, then rotate, then translate)}, \\qquad \\mathbf{p}_{\\text{clip}} = P\\,V\\,M\\,\\mathbf{p}',
          },
          {
            label: 'Inverse of a rigid transform (view matrix)',
            tex: '\\begin{bmatrix} R & \\mathbf{t} \\\\ \\mathbf{0}^T & 1 \\end{bmatrix}^{-1} = \\begin{bmatrix} R^T & -R^T\\mathbf{t} \\\\ \\mathbf{0}^T & 1 \\end{bmatrix}',
          },
          {
            label: 'Transforming normals',
            tex: '\\mathbf{n}\' = (A^{-1})^T\\,\\mathbf{n} \\quad \\text{(then renormalize)}',
            text: 'Needed whenever $A$ has non-uniform scale or shear; for a pure rotation $(R^{-1})^T = R$.',
          },
        ],
      },
      {
        title: 'Invertible Matrix Theorem',
        items: [
          {
            label: 'For [[square-matrix|square]] $n \\times n$ $A$, all equivalent ([[invertible-matrix-theorem|IMT]])',
            text: '$A$ invertible ⇔ $A \\sim I_n$ ⇔ $n$ pivots ⇔ $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution ⇔ columns linearly independent ⇔ $\\mathbf{x} \\mapsto A\\mathbf{x}$ one-to-one ⇔ $A\\mathbf{x} = \\mathbf{b}$ solvable for every $\\mathbf{b}$ ⇔ columns span $\\mathbb{R}^n$ ⇔ $\\mathbf{x} \\mapsto A\\mathbf{x}$ onto ⇔ $A^T$ invertible ⇔ columns form a basis ⇔ $\\operatorname{rank} A = n$ ⇔ $\\operatorname{Nul} A = \\{\\mathbf{0}\\}$ ⇔ $\\det A \\ne 0$ ⇔ $0$ is not an eigenvalue.',
          },
          {
            label: 'Square matrices only',
            text: 'For non-square matrices, one-to-one and onto are separate questions (pivot in every column vs every row).',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'la-determinants',
    title: 'Determinants',
    course: 'linalg',
    icon: '🔲',
    description:
      'Computing determinants, how row operations change them, their algebraic properties, area/volume/orientation, and Cramer\'s rule.',
    sections: [
      {
        title: 'Computing',
        items: [
          {
            label: '$2 \\times 2$',
            tex: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc',
          },
          {
            label: '$3 \\times 3$ by [[cofactor-expansion]] along row 1',
            tex: '\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{vmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)',
          },
          {
            label: '$3 \\times 3$ diagonal rule (Sarrus, $3 \\times 3$ only)',
            tex: 'aei + bfg + cdh - ceg - bdi - afh',
          },
          {
            label: '[[cofactor|Cofactors]] and expansion along any row or column',
            tex: 'C_{ij} = (-1)^{i+j}M_{ij}, \\qquad \\det A = \\sum_{j=1}^{n} a_{ij}C_{ij} = \\sum_{i=1}^{n} a_{ij}C_{ij}',
            text: 'Sign pattern $\\begin{smallmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{smallmatrix}$. Expand along the row or column with the most zeros.',
          },
          {
            label: '[[triangular-matrix|Triangular]] (or diagonal) matrix',
            tex: '\\det A = a_{11}a_{22}\\cdots a_{nn}',
            text: 'Best general method: row reduce to echelon form, track swaps and scalings, multiply the pivots.',
          },
        ],
      },
      {
        title: 'Row operations',
        items: [
          {
            label: 'Replacement $R_i \\to R_i + kR_j$',
            tex: '\\det \\text{ unchanged}',
          },
          {
            label: 'Interchange $R_i \\leftrightarrow R_j$',
            tex: '\\det \\to -\\det',
          },
          {
            label: 'Scaling $R_i \\to kR_i$',
            tex: '\\det \\to k\\det',
          },
          {
            label: 'Via echelon form $U$',
            tex: '\\det A = (-1)^{r}\\,\\frac{u_{11}u_{22}\\cdots u_{nn}}{k_1k_2\\cdots}',
            text: '$r$ = number of row swaps, $k_i$ = scaling factors used (none if you only use replacements and swaps).',
          },
          {
            label: 'Zero determinant shortcuts',
            text: 'A zero row or column, two equal rows, or one row a multiple of another ⇒ $\\det A = 0$.',
          },
        ],
      },
      {
        title: 'Properties',
        items: [
          {
            label: 'Products and transposes',
            tex: '\\det(AB) = \\det A\\,\\det B, \\qquad \\det A^T = \\det A',
          },
          {
            label: 'Inverses and powers',
            tex: '\\det A^{-1} = \\frac{1}{\\det A}, \\qquad \\det A^k = (\\det A)^k',
          },
          {
            label: 'Scalar multiple ($n \\times n$)',
            tex: '\\det(cA) = c^n\\det A',
            text: 'Not $c\\det A$. And $\\det(A + B) \\ne \\det A + \\det B$ in general.',
          },
          {
            label: 'Invertibility and eigenvalues',
            tex: 'A \\text{ invertible} \\iff \\det A \\ne 0, \\qquad \\det A = \\lambda_1\\lambda_2\\cdots\\lambda_n',
          },
          {
            label: 'Similar matrices',
            tex: '\\det(P^{-1}AP) = \\det A',
          },
        ],
      },
      {
        title: 'Geometry',
        items: [
          {
            label: 'Parallelogram spanned by $\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^2$',
            tex: '\\text{area} = \\left|\\det\\begin{bmatrix} \\mathbf{u} & \\mathbf{v} \\end{bmatrix}\\right|, \\qquad \\text{triangle} = \\tfrac{1}{2}\\left|\\det\\begin{bmatrix} \\mathbf{u} & \\mathbf{v} \\end{bmatrix}\\right|',
          },
          {
            label: 'Parallelepiped spanned by $\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in \\mathbb{R}^3$',
            tex: '\\text{volume} = \\left|\\det\\begin{bmatrix} \\mathbf{u} & \\mathbf{v} & \\mathbf{w} \\end{bmatrix}\\right| = |\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})|, \\qquad \\text{tetrahedron} = \\tfrac{1}{6}|\\cdots|',
          },
          {
            label: 'Area/volume scale factor of $T(\\mathbf{x}) = A\\mathbf{x}$',
            tex: '\\operatorname{area}(T(S)) = |\\det A| \\cdot \\operatorname{area}(S)',
          },
          {
            label: '[[orientation|Orientation]] test for triangle $ABC$',
            tex: '\\det\\begin{bmatrix} b_x - a_x & c_x - a_x \\\\ b_y - a_y & c_y - a_y \\end{bmatrix} \\ \\begin{cases} > 0 & \\text{counterclockwise} \\\\ < 0 & \\text{clockwise} \\\\ = 0 & \\text{collinear} \\end{cases}',
            text: 'A transform with $\\det < 0$ mirrors space and flips triangle winding (culling!).',
          },
          {
            label: 'Orientation test in C++',
            code: 'float orient(Vec2 a, Vec2 b, Vec2 c) {\n    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);\n}',
            lang: 'cpp',
          },
        ],
      },
      {
        title: "Cramer's rule and the adjugate",
        items: [
          {
            label: "[[cramers-rule|Cramer's rule]]",
            tex: 'x_i = \\frac{\\det A_i(\\mathbf{b})}{\\det A}',
            text: '$A_i(\\mathbf{b})$ = $A$ with column $i$ replaced by $\\mathbf{b}$. Requires $\\det A \\ne 0$; practical only for small systems.',
          },
          {
            label: 'Example',
            tex: '\\begin{cases} 2x + y = 5 \\\\ x + 3y = 10 \\end{cases}: \\quad x = \\frac{\\begin{vmatrix} 5 & 1 \\\\ 10 & 3 \\end{vmatrix}}{\\begin{vmatrix} 2 & 1 \\\\ 1 & 3 \\end{vmatrix}} = \\frac{5}{5} = 1, \\quad y = \\frac{\\begin{vmatrix} 2 & 5 \\\\ 1 & 10 \\end{vmatrix}}{5} = \\frac{15}{5} = 3',
          },
          {
            label: 'Adjugate formula for the inverse',
            tex: 'A^{-1} = \\frac{1}{\\det A}\\operatorname{adj} A, \\qquad \\operatorname{adj} A = [\\,C_{ij}\\,]^T',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'la-vector-spaces',
    title: 'Vector Spaces',
    course: 'linalg',
    icon: '🧱',
    description:
      'Subspaces, the four fundamental subspaces of a matrix, bases and dimension, rank–nullity, coordinates and change of basis.',
    sections: [
      {
        title: 'Subspaces',
        items: [
          {
            label: '[[subspace|Subspace]] test',
            tex: '\\text{(1) } \\mathbf{0} \\in H, \\quad \\text{(2) } \\mathbf{u}, \\mathbf{v} \\in H \\Rightarrow \\mathbf{u} + \\mathbf{v} \\in H, \\quad \\text{(3) } \\mathbf{u} \\in H \\Rightarrow c\\mathbf{u} \\in H',
          },
          {
            label: 'Automatic subspaces',
            text: 'Any [[span]]; any null space; any column or row space; any [[eigenspace]]; any [[orthogonal-complement]].',
          },
          {
            label: 'Subspaces of $\\mathbb{R}^3$',
            text: '$\\{\\mathbf{0}\\}$, lines through the origin, planes through the origin, $\\mathbb{R}^3$. Anything not through the origin is **not** a subspace.',
          },
          {
            label: 'Common [[vector-space|vector spaces]]',
            tex: '\\mathbb{R}^n, \\qquad \\mathbb{P}_n \\ (\\text{polynomials of degree} \\le n), \\qquad M_{m \\times n} \\ (m \\times n \\text{ matrices})',
          },
        ],
      },
      {
        title: 'The four fundamental subspaces ($A$ is $m \\times n$)',
        items: [
          {
            label: '[[null-space|Null space]]',
            tex: '\\operatorname{Nul} A = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\} \\subseteq \\mathbb{R}^n',
            text: 'Basis: the vectors in the parametric vector form of the solution of $A\\mathbf{x} = \\mathbf{0}$ (one per free variable).',
          },
          {
            label: '[[column-space|Column space]]',
            tex: '\\operatorname{Col} A = \\operatorname{Span}\\{\\mathbf{a}_1, \\dots, \\mathbf{a}_n\\} = \\{A\\mathbf{x}\\} \\subseteq \\mathbb{R}^m',
            text: 'Basis: the pivot columns of the **original** $A$.',
          },
          {
            label: '[[row-space|Row space]]',
            tex: '\\operatorname{Row} A = \\operatorname{Col} A^T \\subseteq \\mathbb{R}^n',
            text: 'Basis: the nonzero rows of an **echelon form** of $A$.',
          },
          {
            label: 'Left null space',
            tex: '\\operatorname{Nul} A^T = \\{\\mathbf{y} \\in \\mathbb{R}^m : A^T\\mathbf{y} = \\mathbf{0}\\} \\subseteq \\mathbb{R}^m',
          },
          {
            label: 'Orthogonality relations',
            tex: '(\\operatorname{Row} A)^{\\perp} = \\operatorname{Nul} A, \\qquad (\\operatorname{Col} A)^{\\perp} = \\operatorname{Nul} A^T',
          },
          {
            label: 'Linear maps',
            tex: '\\ker T = \\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\} = \\operatorname{Nul} A, \\qquad \\operatorname{range} T = \\operatorname{Col} A',
            text: '$T$ one-to-one ⇔ $\\ker T = \\{\\mathbf{0}\\}$; $T$ onto ⇔ $\\operatorname{range} T$ = codomain.',
          },
        ],
      },
      {
        title: 'Basis and dimension',
        items: [
          {
            label: '[[basis|Basis]]',
            text: 'A linearly independent set that spans $H$. Every vector of $H$ is then a combination of the basis in exactly one way.',
          },
          {
            label: '[[dimension|Dimension]]',
            tex: '\\dim \\mathbb{R}^n = n, \\qquad \\dim \\mathbb{P}_n = n + 1, \\qquad \\dim M_{m \\times n} = mn, \\qquad \\dim\\{\\mathbf{0}\\} = 0',
          },
          {
            label: 'Basis Theorem ($\\dim V = p$)',
            text: 'Any $p$ independent vectors in $V$ form a basis; any $p$ vectors spanning $V$ form a basis. More than $p$ vectors are dependent; fewer than $p$ cannot span.',
          },
          {
            label: 'Subspace dimensions',
            tex: 'H \\subseteq V \\implies \\dim H \\le \\dim V, \\qquad \\dim W + \\dim W^{\\perp} = n \\ \\ (W \\subseteq \\mathbb{R}^n)',
          },
        ],
      },
      {
        title: 'Rank',
        items: [
          {
            label: '[[rank|Rank]]',
            tex: '\\operatorname{rank} A = \\dim \\operatorname{Col} A = \\dim \\operatorname{Row} A = \\#\\text{pivots} = \\operatorname{rank} A^T',
          },
          {
            label: '[[rank-nullity-theorem|Rank–nullity theorem]]',
            tex: '\\operatorname{rank} A + \\dim \\operatorname{Nul} A = n \\quad (\\text{number of columns})',
          },
          {
            label: 'Bounds',
            tex: '\\operatorname{rank} A \\le \\min(m, n), \\qquad \\operatorname{rank}(AB) \\le \\min(\\operatorname{rank} A, \\operatorname{rank} B)',
          },
          {
            label: 'Example',
            tex: 'A_{3 \\times 5},\\ \\operatorname{rank} A = 2 \\implies \\dim \\operatorname{Nul} A = 3, \\ \\ \\dim \\operatorname{Nul} A^T = 1',
          },
        ],
      },
      {
        title: 'Coordinates and change of basis',
        items: [
          {
            label: '[[coordinate-vector|Coordinate vector]]',
            tex: '\\mathbf{x} = c_1\\mathbf{b}_1 + \\cdots + c_n\\mathbf{b}_n \\iff [\\mathbf{x}]_{\\mathcal{B}} = \\begin{bmatrix} c_1 \\\\ \\vdots \\\\ c_n \\end{bmatrix}',
          },
          {
            label: 'To and from standard coordinates',
            tex: '\\mathbf{x} = P_{\\mathcal{B}}[\\mathbf{x}]_{\\mathcal{B}}, \\qquad [\\mathbf{x}]_{\\mathcal{B}} = P_{\\mathcal{B}}^{-1}\\mathbf{x}, \\qquad P_{\\mathcal{B}} = [\\,\\mathbf{b}_1 \\ \\cdots \\ \\mathbf{b}_n\\,]',
          },
          {
            label: '[[change-of-basis-matrix|Change-of-basis matrix]] $\\mathcal{B} \\to \\mathcal{C}$',
            tex: '[\\mathbf{x}]_{\\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}[\\mathbf{x}]_{\\mathcal{B}}, \\qquad P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = [\\,[\\mathbf{b}_1]_{\\mathcal{C}} \\ \\cdots \\ [\\mathbf{b}_n]_{\\mathcal{C}}\\,] = P_{\\mathcal{C}}^{-1}P_{\\mathcal{B}}',
          },
          {
            label: 'Computing it in $\\mathbb{R}^n$',
            tex: '[\\,P_{\\mathcal{C}} \\mid P_{\\mathcal{B}}\\,] \\sim [\\,I \\mid P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\,], \\qquad P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = (P_{\\mathcal{C} \\leftarrow \\mathcal{B}})^{-1}',
          },
          {
            label: 'Matrix of $T$ in basis $\\mathcal{B}$',
            tex: '[T]_{\\mathcal{B}} = P^{-1}AP, \\qquad P = P_{\\mathcal{B}}',
            text: 'Same map, new coordinates: $A$ and $[T]_{\\mathcal{B}}$ are [[similar-matrices|similar]]. Games: local ↔ world ↔ camera space.',
          },
          {
            label: 'Orthonormal basis shortcut',
            tex: '[\\mathbf{x}]_{\\mathcal{B}} = \\begin{bmatrix} \\mathbf{x} \\cdot \\mathbf{u}_1 \\\\ \\vdots \\\\ \\mathbf{x} \\cdot \\mathbf{u}_n \\end{bmatrix} = U^T\\mathbf{x}',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'la-eigen-orthogonality',
    title: 'Eigenvalues & Orthogonality',
    course: 'linalg',
    icon: 'λ',
    description:
      'Eigenvalues and diagonalization, Markov chains, orthogonal projections, Gram–Schmidt and QR, least squares, the spectral theorem and the SVD.',
    sections: [
      {
        title: 'Eigenvalues and eigenvectors',
        items: [
          {
            label: 'Definition',
            tex: 'A\\mathbf{x} = \\lambda\\mathbf{x}, \\quad \\mathbf{x} \\ne \\mathbf{0}',
            text: '$\\lambda = 0$ is allowed (then $A$ is singular); $\\mathbf{x} = \\mathbf{0}$ is not.',
          },
          {
            label: '[[characteristic-equation|Characteristic equation]]',
            tex: '\\det(A - \\lambda I) = 0',
          },
          {
            label: '$2 \\times 2$ shortcut',
            tex: '\\lambda^2 - (\\operatorname{tr} A)\\,\\lambda + \\det A = 0',
          },
          {
            label: 'Checks',
            tex: '\\lambda_1 + \\cdots + \\lambda_n = \\operatorname{tr} A, \\qquad \\lambda_1\\lambda_2\\cdots\\lambda_n = \\det A',
          },
          {
            label: '[[eigenspace|Eigenspace]]',
            tex: 'E_\\lambda = \\operatorname{Nul}(A - \\lambda I), \\qquad 1 \\le \\dim E_\\lambda \\le \\text{alg. mult. of } \\lambda',
          },
          {
            label: 'Triangular matrices and powers',
            text: 'Eigenvalues of a triangular matrix = its diagonal entries. $A^k$ has eigenvalues $\\lambda^k$; $A^{-1}$ has $1/\\lambda$ (same eigenvectors). Row reduction changes eigenvalues.',
          },
        ],
      },
      {
        title: 'Diagonalization',
        items: [
          {
            label: '[[diagonalizable|Diagonalization]]',
            tex: 'A = PDP^{-1}, \\qquad P = [\\,\\mathbf{v}_1 \\ \\cdots \\ \\mathbf{v}_n\\,], \\qquad D = \\operatorname{diag}(\\lambda_1, \\dots, \\lambda_n)',
            text: 'Possible iff $A$ has $n$ independent eigenvectors. Guaranteed if the $n$ eigenvalues are distinct.',
          },
          {
            label: 'Powers',
            tex: 'A^k = PD^kP^{-1}',
          },
          {
            label: 'Test',
            text: 'Diagonalizable ⇔ for every eigenvalue, [[geometric-multiplicity]] = [[algebraic-multiplicity]]. Shears like $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ fail.',
          },
          {
            label: '[[similar-matrices|Similar matrices]] share',
            tex: 'B = P^{-1}AP \\implies \\text{same } \\det(A - \\lambda I),\\ \\text{eigenvalues},\\ \\det,\\ \\operatorname{tr},\\ \\operatorname{rank}',
          },
        ],
      },
      {
        title: 'Dynamical systems and Markov chains',
        items: [
          {
            label: 'Eigenvector decomposition of $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$',
            tex: '\\mathbf{x}_0 = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n \\implies \\mathbf{x}_k = c_1\\lambda_1^k\\mathbf{v}_1 + \\cdots + c_n\\lambda_n^k\\mathbf{v}_n',
            text: 'The term with the largest $|\\lambda|$ dominates; all $|\\lambda| < 1$ means $\\mathbf{x}_k \\to \\mathbf{0}$.',
          },
          {
            label: '[[stochastic-matrix|Stochastic matrix]]',
            text: 'Nonnegative entries, each column sums to 1. Always has $\\lambda = 1$; all $|\\lambda| \\le 1$.',
          },
          {
            label: '[[markov-chain|Markov chain]] and [[steady-state-vector|steady state]]',
            tex: '\\mathbf{x}_{k+1} = P\\mathbf{x}_k, \\qquad P\\mathbf{q} = \\mathbf{q}, \\ \\ q_i \\ge 0, \\ \\ \\textstyle\\sum q_i = 1',
            text: 'Solve $(P - I)\\mathbf{x} = \\mathbf{0}$, then divide by the sum of the entries. If $P$ is regular, $\\mathbf{x}_k \\to \\mathbf{q}$ from any start.',
          },
          {
            label: 'Example',
            tex: 'P = \\begin{bmatrix} 0.9 & 0.5 \\\\ 0.1 & 0.5 \\end{bmatrix} \\implies \\mathbf{q} = \\begin{bmatrix} 5/6 \\\\ 1/6 \\end{bmatrix}',
          },
        ],
      },
      {
        title: 'Orthogonal sets and projections',
        items: [
          {
            label: 'Coordinates in an [[orthogonal-set|orthogonal basis]]',
            tex: '\\mathbf{y} = \\sum_j c_j\\mathbf{u}_j, \\qquad c_j = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}',
            text: 'Orthonormal basis: $c_j = \\mathbf{y} \\cdot \\mathbf{u}_j$.',
          },
          {
            label: '[[orthogonal-projection|Projection]] onto $W$ (orthogonal basis $\\mathbf{u}_j$)',
            tex: '\\hat{\\mathbf{y}} = \\operatorname{proj}_W\\mathbf{y} = \\sum_{j=1}^{p} \\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}\\mathbf{u}_j, \\qquad \\mathbf{y} - \\hat{\\mathbf{y}} \\in W^{\\perp}',
          },
          {
            label: 'Projection matrices',
            tex: 'P = UU^T \\ (U^TU = I), \\qquad P = A(A^TA)^{-1}A^T \\ (\\text{any basis}), \\qquad P^2 = P = P^T',
          },
          {
            label: 'Best approximation',
            tex: '\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\| < \\|\\mathbf{y} - \\mathbf{v}\\| \\quad \\text{for all } \\mathbf{v} \\in W,\\ \\mathbf{v} \\ne \\hat{\\mathbf{y}}',
          },
          {
            label: '[[orthogonal-matrix|Orthogonal matrix]]',
            tex: 'Q^TQ = I, \\quad Q^{-1} = Q^T, \\quad \\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|, \\quad (Q\\mathbf{x}) \\cdot (Q\\mathbf{y}) = \\mathbf{x} \\cdot \\mathbf{y}, \\quad \\det Q = \\pm 1',
          },
        ],
      },
      {
        title: 'Gram–Schmidt and QR',
        items: [
          {
            label: '[[gram-schmidt|Gram–Schmidt]]',
            tex: '\\mathbf{v}_1 = \\mathbf{x}_1, \\qquad \\mathbf{v}_k = \\mathbf{x}_k - \\sum_{j=1}^{k-1} \\frac{\\mathbf{x}_k \\cdot \\mathbf{v}_j}{\\mathbf{v}_j \\cdot \\mathbf{v}_j}\\mathbf{v}_j',
            text: 'Then normalize: $\\mathbf{u}_k = \\mathbf{v}_k / \\|\\mathbf{v}_k\\|$.',
          },
          {
            label: '[[qr-factorization|QR factorization]] (independent columns)',
            tex: 'A = QR, \\qquad Q^TQ = I, \\qquad R = Q^TA \\ \\text{(upper triangular, positive diagonal)}',
          },
          {
            label: 'Tangent frame for normal mapping',
            code: 'Vec3 t2 = normalize(t - dot(t, n) * n);  // Gram-Schmidt step\nVec3 b  = cross(n, t2);                  // completes the basis',
            lang: 'cpp',
          },
        ],
      },
      {
        title: 'Least squares',
        items: [
          {
            label: '[[normal-equations|Normal equations]]',
            tex: 'A^TA\\,\\hat{\\mathbf{x}} = A^T\\mathbf{b}',
            text: 'Solutions minimize $\\|\\mathbf{b} - A\\mathbf{x}\\|$; the residual is orthogonal to $\\operatorname{Col} A$.',
          },
          {
            label: 'Unique [[least-squares-solution|least-squares solution]]',
            tex: '\\hat{\\mathbf{x}} = (A^TA)^{-1}A^T\\mathbf{b} \\quad \\text{(columns of } A \\text{ independent)}',
          },
          {
            label: 'Via QR (more stable)',
            tex: 'R\\,\\hat{\\mathbf{x}} = Q^T\\mathbf{b}',
          },
          {
            label: 'Fitting a line $y = \\beta_0 + \\beta_1 x$',
            tex: 'A = \\begin{bmatrix} 1 & x_1 \\\\ \\vdots & \\vdots \\\\ 1 & x_m \\end{bmatrix}, \\quad \\mathbf{b} = \\begin{bmatrix} y_1 \\\\ \\vdots \\\\ y_m \\end{bmatrix}, \\quad A^TA = \\begin{bmatrix} m & \\sum x_i \\\\ \\sum x_i & \\sum x_i^2 \\end{bmatrix}, \\quad A^T\\mathbf{b} = \\begin{bmatrix} \\sum y_i \\\\ \\sum x_iy_i \\end{bmatrix}',
            text: 'Points $(0, 1), (1, 3), (2, 4)$ give $y = \\tfrac{7}{6} + \\tfrac{3}{2}x$.',
          },
          {
            label: 'Least-squares error',
            tex: '\\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\|',
          },
        ],
      },
      {
        title: 'Symmetric matrices and the SVD',
        items: [
          {
            label: '[[spectral-theorem|Spectral theorem]]',
            tex: 'A = A^T \\iff A = PDP^T \\text{ with } P^TP = I',
            text: 'Real eigenvalues; eigenvectors for different eigenvalues are orthogonal.',
          },
          {
            label: 'Spectral decomposition',
            tex: 'A = \\lambda_1\\mathbf{u}_1\\mathbf{u}_1^T + \\cdots + \\lambda_n\\mathbf{u}_n\\mathbf{u}_n^T',
          },
          {
            label: '[[singular-value-decomposition|SVD]]',
            tex: 'A = U\\Sigma V^T, \\qquad A\\mathbf{v}_i = \\sigma_i\\mathbf{u}_i, \\qquad A = \\sum_{i=1}^{r} \\sigma_i\\mathbf{u}_i\\mathbf{v}_i^T',
            text: 'Exists for every $m \\times n$ matrix. $U$ ($m \\times m$) and $V$ ($n \\times n$) orthogonal.',
          },
          {
            label: '[[singular-values|Singular values]]',
            tex: '\\sigma_i = \\sqrt{\\lambda_i(A^TA)}, \\qquad \\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge 0, \\qquad \\operatorname{rank} A = \\#\\{\\sigma_i > 0\\}',
          },
          {
            label: 'Best rank-$k$ approximation and conditioning',
            tex: 'A_k = \\sum_{i=1}^{k} \\sigma_i\\mathbf{u}_i\\mathbf{v}_i^T, \\qquad \\kappa(A) = \\frac{\\sigma_1}{\\sigma_n}',
            text: 'Compression, PCA, denoising. A large condition number means $A\\mathbf{x} = \\mathbf{b}$ amplifies errors.',
          },
        ],
      },
    ],
  },
];
