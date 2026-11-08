import type { Lesson } from '../../types';

// Rotation by d degrees, translation by (h, k): expressions for the T·R vs R·T graph.
const C = 'cos(d*pi/180)';
const S = 'sin(d*pi/180)';
/** Image of the point (px, py) under T·R: rotate about the origin, then translate. */
const TR = (px: number, py: number): [string, string] => [
  `(${px})*${C} - (${py})*${S} + h`,
  `(${px})*${S} + (${py})*${C} + k`,
];
/** Image of the point (px, py) under R·T: translate, then rotate about the origin. */
const RT = (px: number, py: number): [string, string] => [
  `(${px} + h)*${C} - (${py} + k)*${S}`,
  `(${px} + h)*${S} + (${py} + k)*${C}`,
];

export const lesson: Lesson = {
  id: 'la-homogeneous-coordinates',
  title: 'Homogeneous Coordinates and Game Transforms',
  summary: 'Translation is not linear — until you add one coordinate. The 3×3 and 4×4 matrices behind every game engine: TRS, scene graphs, model–view–projection and the perspective divide.',
  minutes: 20,
  objectives: [
    'Explain why translation is not a linear transformation, and represent it with a $3 \\times 3$ (2D) or $4 \\times 4$ (3D) matrix in homogeneous coordinates',
    'Distinguish points ($w = 1$) from directions ($w = 0$) and predict how each transforms',
    'Compose translate, rotate and scale matrices in the correct order, including rotation about an arbitrary point $T R T^{-1}$',
    'Compute world positions in a parent–child hierarchy and invert a rigid transform',
    'Describe the model, view and projection matrices and the perspective divide, and convert between column-vector and row-vector conventions',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Translation is not linear — so add a coordinate',
      blocks: [
        {
          type: 'p',
          text: 'Moving a character 4 units right and 1 unit down is a [[translation]]: $T(\\mathbf{x}) = \\mathbf{x} + \\mathbf{t}$ with $\\mathbf{t} = (4, -1)$. It is the most common transform in any game, and it is **not linear**: every linear map sends $\\mathbf{0}$ to $\\mathbf{0}$, but $T(\\mathbf{0}) = \\mathbf{t} \\ne \\mathbf{0}$. So no $2 \\times 2$ matrix can translate.',
        },
        {
          type: 'p',
          text: 'Maps of the form $\\mathbf{x} \\mapsto A\\mathbf{x} + \\mathbf{t}$ (linear part, then a shift) are called [[affine-transformation|affine transformations]]. Composing them works, but is messy: $A_2(A_1\\mathbf{x} + \\mathbf{t}_1) + \\mathbf{t}_2 = (A_2A_1)\\mathbf{x} + (A_2\\mathbf{t}_1 + \\mathbf{t}_2)$. We would love to keep the one rule "compose = multiply matrices". The trick is [[homogeneous-coordinates]]: write the point $(x, y)$ as the 3-vector $(x, y, 1)$.',
        },
        {
          type: 'theorem',
          name: 'Affine maps of the plane as 3×3 matrices',
          tex: '\\begin{bmatrix} a & b & t_x \\\\ c & d & t_y \\\\ 0 & 0 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} ax + by + t_x \\\\ cx + dy + t_y \\\\ 1 \\end{bmatrix}',
          text: 'The upper-left $2 \\times 2$ block is the linear part $A$, the last column holds the translation $\\mathbf{t}$, and the bottom row $(0, 0, 1)$ keeps the last coordinate equal to $1$. In block form: $\\begin{bmatrix} A & \\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}$.',
        },
        {
          type: 'derivation',
          title: 'Translate the point $(2, 3)$ by $(4, -1)$',
          steps: [
            { tex: 'T = \\begin{bmatrix} 1 & 0 & 4 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix}', why: 'Linear part $I$ (no rotation or scale), translation $(4, -1)$ in the last column.' },
            { tex: 'T\\begin{bmatrix} 2 \\\\ 3 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 1(2) + 0(3) + 4(1) \\\\ 0(2) + 1(3) - 1(1) \\\\ 0 + 0 + 1 \\end{bmatrix}', why: 'Row–column rule. The $1$ in the third slot is what multiplies the translation column.' },
            { tex: '= \\begin{bmatrix} 6 \\\\ 2 \\\\ 1 \\end{bmatrix}', why: 'Read off the point $(6, 2)$, still with last coordinate $1$.' },
          ],
          result: 'A matrix multiplication performed a translation: $(2, 3) \\mapsto (6, 2)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this is legal: translation is a shear one dimension up',
          text: 'The $3 \\times 3$ matrix $T$ is a perfectly linear map of $\\mathbb{R}^3$ — it is a **shear** that slides each horizontal plane $z = c$ by $c\\,\\mathbf{t}$. The plane $z = 0$ does not move (so linearity is safe), while the plane $z = 1$, where we keep our 2D points, slides by exactly $\\mathbf{t}$. We have not broken linearity; we have embedded the 2D plane at height $1$ in a 3D space where translation *is* linear.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'The matrix $M = \\begin{bmatrix} 0 & -1 & 5 \\\\ 1 & 0 & 2 \\\\ 0 & 0 & 1 \\end{bmatrix}$ rotates by $90^\\circ$ and then translates by $(5, 2)$. Compute $M\\begin{bmatrix} 3 \\\\ 1 \\\\ 1 \\end{bmatrix}$.',
      template: '$M\\mathbf{p} = ($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['4'] }, { answers: ['5'] }, { answers: ['1'] }],
      hint: 'Row–column rule; the last column gets multiplied by the $1$.',
      explanation: 'Row 1: $0(3) - 1(1) + 5(1) = 4$. Row 2: $1(3) + 0(1) + 2(1) = 5$. Row 3: $0 + 0 + 1 = 1$. So $(3, 1) \\mapsto (4, 5)$. In two stages: rotating $(3, 1)$ by $90^\\circ$ gives $(-1, 3)$, and translating by $(5, 2)$ gives $(4, 5)$. ✓ The last coordinate stays $1$, as it must for a point.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Points (w = 1) and directions (w = 0)',
      blocks: [
        {
          type: 'p',
          text: 'In 3D the same idea gives 4-vectors $(x, y, z, w)$. The extra coordinate $w$ carries meaning: a **point** (a position) has $w = 1$; a **direction** (a velocity, an axis, a surface normal, a light direction) has $w = 0$.',
        },
        {
          type: 'math',
          tex: '\\begin{bmatrix} A & \\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}\\begin{bmatrix} \\mathbf{p} \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} A\\mathbf{p} + \\mathbf{t} \\\\ 1 \\end{bmatrix}, \\qquad \\begin{bmatrix} A & \\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}\\begin{bmatrix} \\mathbf{v} \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} A\\mathbf{v} \\\\ 0 \\end{bmatrix}',
          caption: 'Points are rotated, scaled **and translated**. Directions are rotated and scaled but **ignore translation**, because the $0$ switches off the last column.',
        },
        {
          type: 'p',
          text: 'That is exactly right physically: moving a car across the map changes where it *is*, not which way it is *facing*. The $w$ arithmetic also enforces the rules of geometry:',
        },
        {
          type: 'table',
          headers: ['Operation', '$w$', 'Meaning'],
          rows: [
            ['point $-$ point', '$1 - 1 = 0$', 'a direction (the vector from one point to the other)'],
            ['point $+$ direction', '$1 + 0 = 1$', 'a point (move a point along a vector)'],
            ['direction $+$ direction', '$0 + 0 = 0$', 'a direction'],
            ['point $+$ point', '$1 + 1 = 2$', 'not a point on its own — but $\\frac{1}{2}(\\mathbf{p} + \\mathbf{q})$ has $w = 1$: the midpoint'],
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'w in shader code',
          text: 'In GLSL with GLM-style matrices you write `model * vec4(position, 1.0)` for vertex positions and `model * vec4(direction, 0.0)` for directions. Forgetting the $0$ is a classic bug: a character\'s "forward" vector suddenly includes its world position, and it walks off toward the map origin. Surface normals are directions too, and they get the inverse-transpose of the $3 \\times 3$ linear part, as you saw in the inverse lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'A 3D model matrix $M = \\begin{bmatrix} R & \\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}$ rotates by $R$ and translates by $\\mathbf{t} = (10, 0, 0)$. What happens to the direction $(0, 0, 1, 0)$?',
      options: [
        { text: 'It becomes $R\\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$ with $w = 0$: rotated but not translated', correct: true, why: 'The $w = 0$ multiplies the translation column, so only the linear part $R$ acts.' },
        { text: 'It becomes $R\\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix} + (10, 0, 0)$', why: 'That is what happens to a *point*. With $w = 0$ the translation column is multiplied by $0$.' },
        { text: 'It is unchanged, because directions ignore the whole matrix', why: 'Directions ignore only the translation. They are still rotated (and scaled) by the linear part.' },
        { text: 'It becomes a point with $w = 1$', why: 'The bottom row $(0, 0, 0, 1)$ gives the new $w = 0 \\cdot x + 0 \\cdot y + 0 \\cdot z + 1 \\cdot 0 = 0$. Affine matrices never change $w$.' },
      ],
      explanation: 'Multiply out: the first three entries are $R\\mathbf{v} + \\mathbf{t}\\cdot w = R\\mathbf{v} + \\mathbf{t}\\cdot 0 = R\\mathbf{v}$, and the last is $w = 0$. A direction turns with the object but does not move with it.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Composing transforms: TRS, and why order matters',
      blocks: [
        {
          type: 'p',
          text: 'Now every transform is a matrix and composition is multiplication — read right to left, because the rightmost matrix touches the vector first. The standard recipe for placing an object, used by essentially every engine, is **scale, then rotate, then translate**:',
        },
        {
          type: 'math',
          tex: 'M = T\\,R\\,S, \\qquad M\\mathbf{p} = T\\big(R\\,(S\\mathbf{p})\\big)',
          caption: 'Scale about the object\'s own origin, rotate about that origin, then carry the result to its place in the world.',
        },
        {
          type: 'p',
          text: 'Why that order? Scaling and rotating both happen **about the origin**. Do them while the object still sits at its own origin and they act "in place". Translate first and the object is no longer at the origin, so the rotation swings it around in a big arc. In block form: $T(\\mathbf{t})R = \\begin{bmatrix} R & \\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}$ but $R\\,T(\\mathbf{t}) = \\begin{bmatrix} R & R\\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}$: in the second, even the translation got rotated.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-5, 5],
          equal: true,
          height: 340,
          segments: [
            // original shape (an arrow-like triangle at the origin)
            { from: [0, -0.5], to: [1.5, 0], color: 'gray', dashed: true },
            { from: [1.5, 0], to: [0, 0.5], color: 'gray', dashed: true },
            { from: [0, 0.5], to: [0, -0.5], color: 'gray', dashed: true },
            // T·R (blue): rotate in place, then move
            { from: TR(0, -0.5), to: TR(1.5, 0), color: 'blue', label: 'T·R' },
            { from: TR(1.5, 0), to: TR(0, 0.5), color: 'blue' },
            { from: TR(0, 0.5), to: TR(0, -0.5), color: 'blue' },
            // R·T (red): move, then rotate about the world origin
            { from: RT(0, -0.5), to: RT(1.5, 0), color: 'red', label: 'R·T' },
            { from: RT(1.5, 0), to: RT(0, 0.5), color: 'red' },
            { from: RT(0, 0.5), to: RT(0, -0.5), color: 'red' },
            { from: [0, 0], to: ['h', 'k'], color: 'gray', dashed: true, arrow: true, label: 't' },
          ],
          parametric: [{ x: 'sqrt(h^2 + k^2)cos(t)', y: 'sqrt(h^2 + k^2)sin(t)', t: [0, '2pi'], color: 'red', dashed: true }],
          sliders: [
            { name: 'd', min: -180, max: 180, step: 5, value: 60, label: 'rotation angle $\\theta$ (degrees)' },
            { name: 'h', min: -3, max: 3, step: 0.1, value: 3, label: 'translation $t_x$' },
            { name: 'k', min: -3, max: 3, step: 0.1, value: 0, label: 'translation $t_y$' },
          ],
          caption: 'Gray: the shape at the origin. Blue, $T\\cdot R$: the shape spins in place, then moves to the tip of $\\mathbf{t}$. Red, $R\\cdot T$: the shape is moved first, then the rotation swings it around the world origin along the dashed circle. Drag the angle and watch the red shape orbit while the blue one turns on the spot.',
        },
        {
          type: 'heading',
          text: 'Rotating about a point other than the origin',
        },
        {
          type: 'p',
          text: 'To spin a door about its hinge at $\\mathbf{p}$, move the hinge to the origin, rotate, and move it back: $M = T(\\mathbf{p})\\,R\\,T(-\\mathbf{p})$. Note that $T(-\\mathbf{p}) = T(\\mathbf{p})^{-1}$, so this is $T R T^{-1}$ — a pattern ("change frame, act, change back") you will see again with change of basis and diagonalization.',
        },
        {
          type: 'derivation',
          title: 'Rotate by $90^\\circ$ about the point $\\mathbf{p} = (2, 1)$',
          steps: [
            { tex: 'T(-\\mathbf{p}) = \\begin{bmatrix} 1 & 0 & -2 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix}, \\quad R = \\begin{bmatrix} 0 & -1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}', why: 'First move $\\mathbf{p}$ to the origin; $R$ is the $90^\\circ$ rotation $\\begin{bmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{bmatrix}$ padded to $3 \\times 3$.' },
            { tex: 'T(\\mathbf{p})\\,R = \\begin{bmatrix} 0 & -1 & 2 \\\\ 1 & 0 & 1 \\\\ 0 & 0 & 1 \\end{bmatrix}', why: 'Multiplying by a translation on the left just writes $\\mathbf{p} = (2, 1)$ into the last column.' },
            { tex: 'T(\\mathbf{p})\\,R\\,T(-\\mathbf{p}) = \\begin{bmatrix} 0 & -1 & 0(-2) - 1(-1) + 2 \\\\ 1 & 0 & 1(-2) + 0(-1) + 1 \\\\ 0 & 0 & 1 \\end{bmatrix}', why: 'The first two columns of $T(-\\mathbf{p})$ are $\\mathbf{e}_1, \\mathbf{e}_2$, so they copy columns; the last column needs the row–column rule.' },
            { tex: '= \\begin{bmatrix} 0 & -1 & 3 \\\\ 1 & 0 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix}', why: 'Arithmetic. In block form this is $\\begin{bmatrix} R & \\mathbf{p} - R\\mathbf{p} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}$ with $R\\mathbf{p} = (-1, 2)$.' },
            { tex: '\\begin{bmatrix} 0 & -1 & 3 \\\\ 1 & 0 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix}\\begin{bmatrix} 2 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\\\ 1 \\end{bmatrix}', why: 'Sanity check: the pivot point itself must not move.' },
          ],
          result: 'Rotation by $90^\\circ$ about $(2, 1)$ is $\\begin{bmatrix} 0 & -1 & 3 \\\\ 1 & 0 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'Using the matrix just found for a $90^\\circ$ rotation about $(2, 1)$, where does the point $(4, 1)$ go? Enter its $y$-coordinate.',
      label: '$y =$',
      answer: '3',
      hint: 'Multiply $\\begin{bmatrix} 0 & -1 & 3 \\\\ 1 & 0 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix}$ by $(4, 1, 1)$.',
      explanation: 'The product is $(0 \\cdot 4 - 1 + 3,\\ 4 + 0 - 1,\\ 1) = (2, 3, 1)$, so the point lands at $(2, 3)$ and $y = 3$. Geometrically: $(4, 1)$ is $2$ units to the right of the pivot $(2, 1)$; a quarter turn counterclockwise puts it $2$ units **above** the pivot, at $(2, 3)$. Rotating about the origin instead would give $(-1, 4)$ — the result of forgetting the $T(\\mathbf{p})\\,\\cdot\\,T(-\\mathbf{p})$ sandwich.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'order',
      prompt: 'Using column vectors, build the matrix that rotates by $R$ about the point $\\mathbf{p}$. Arrange the factors from **left to right**.',
      lines: ['$T(\\mathbf{p})$', '$R$', '$T(-\\mathbf{p})$'],
      explanation: 'The vector meets the rightmost factor first. So $T(-\\mathbf{p})$ (move the pivot to the origin) must be on the right, $R$ in the middle, and $T(\\mathbf{p})$ (move back) on the left: $M = T(\\mathbf{p})\\,R\\,T(-\\mathbf{p}) = T R T^{-1}$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: '4×4 matrices in 3D, and inverting a rigid transform',
      blocks: [
        {
          type: 'p',
          text: 'In 3D everything is the same with one more row and column. A game object\'s model matrix (object space to world space) has the shape',
        },
        {
          type: 'math',
          tex: 'M = \\begin{bmatrix} \\vert & \\vert & \\vert & \\vert \\\\ \\mathbf{x}_{\\text{axis}} & \\mathbf{y}_{\\text{axis}} & \\mathbf{z}_{\\text{axis}} & \\mathbf{o} \\\\ \\vert & \\vert & \\vert & \\vert \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} = \\begin{bmatrix} RS & \\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}',
          caption: 'Columns $1$–$3$ are where the object\'s local $x$, $y$, $z$ axes point in the world (images of $\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3$ as directions); column $4$ is where its local origin sits (the image of the point $(0, 0, 0, 1)$).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the columns mean that',
          text: 'Column $j$ of any matrix is the matrix times $\\mathbf{e}_j$. Here $M(1, 0, 0, 0)$ is the transformed local $x$-direction, and $M(0, 0, 0, 1)$ is the transformed local origin. So you can **read** an object\'s orientation and position straight out of its matrix — the "forward vector" in a game is usually just one column (or row, in the other convention) of the world matrix.',
        },
        {
          type: 'p',
          text: 'A **rigid** transform (rotation plus translation, no scale) has a cheap inverse. You will constantly need it to go from world space back into an object\'s local space — for example to ask "is the enemy in front of my turret?"',
        },
        {
          type: 'derivation',
          title: 'Invert $M = \\begin{bmatrix} R & \\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}$ with $R$ a rotation',
          steps: [
            { tex: '\\mathbf{q} = R\\mathbf{p} + \\mathbf{t}', why: 'What $M$ does to a point $\\mathbf{p}$. We want to solve for $\\mathbf{p}$.' },
            { tex: 'R\\mathbf{p} = \\mathbf{q} - \\mathbf{t}', why: 'Undo the last step first: subtract the translation.' },
            { tex: '\\mathbf{p} = R^{T}(\\mathbf{q} - \\mathbf{t}) = R^{T}\\mathbf{q} - R^{T}\\mathbf{t}', why: 'Undo the rotation with $R^{-1} = R^{T}$ (inverse lesson), then distribute.' },
            { tex: 'M^{-1} = \\begin{bmatrix} R^{T} & -R^{T}\\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}', why: 'Read the linear part and translation off the previous line. Socks and shoes: the inverse un-translates first, then un-rotates.' },
          ],
          result: 'No general $4 \\times 4$ inversion needed: transpose a $3 \\times 3$ block and do one matrix–vector product.',
        },
        {
          type: 'code',
          title: 'transform.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdio>

struct Vec4 { float x, y, z, w; };

// m[row][col]. Column-vector convention: v' = M * v.
struct Mat4 {
    std::array<std::array<float, 4>, 4> m{};

    Vec4 operator*(const Vec4& v) const {
        const float in[4] = {v.x, v.y, v.z, v.w};
        float out[4] = {};
        for (int i = 0; i < 4; ++i)
            for (int k = 0; k < 4; ++k) out[i] += m[i][k] * in[k];
        return {out[0], out[1], out[2], out[3]};
    }
};

// Inverse of a rigid transform [R t; 0 1]:  [R^T  -R^T t; 0 1].
Mat4 rigidInverse(const Mat4& a) {
    Mat4 r;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) r.m[i][j] = a.m[j][i];              // R^T
        for (int k = 0; k < 3; ++k) r.m[i][3] -= a.m[k][i] * a.m[k][3]; // -R^T t
    }
    r.m[3][3] = 1;
    return r;
}

void print(const char* label, Vec4 v) {
    std::printf("%-22s (%g, %g, %g, %g)\\n", label, v.x, v.y, v.z, v.w);
}

int main() {
    // Turret: rotated 90 degrees about z, positioned at (5, 0, 0).
    Mat4 model;
    model.m = {{{0, -1, 0, 5},
                {1,  0, 0, 0},
                {0,  0, 1, 0},
                {0,  0, 0, 1}}};

    print("local point (1,0,0,1):", model * Vec4{1, 0, 0, 1});
    print("local dir   (1,0,0,0):", model * Vec4{1, 0, 0, 0});

    Mat4 worldToLocal = rigidInverse(model);
    print("enemy in turret space:", worldToLocal * Vec4{5, 2, 0, 1});
}`,
          output: `local point (1,0,0,1): (5, 1, 0, 1)
local dir   (1,0,0,0): (0, 1, 0, 0)
enemy in turret space: (2, 0, 0, 1)`,
          annotations: [
            { lines: '10-16', text: 'An ordinary $4 \\times 4$ matrix–vector product (row–column rule).' },
            { lines: '22-25', text: 'Copy the transposed rotation block, then accumulate $-R^{T}\\mathbf{t}$ into the last column.' },
            { lines: '37-40', text: 'Column 4 is the translation $(5, 0, 0)$; the upper-left block rotates $90^\\circ$ about $z$.' },
            { lines: '42-43', text: 'Same matrix, different $w$: the point is moved to $(5, 1, 0)$, the direction is only rotated.' },
            { lines: '45-46', text: 'The world point $(5, 2, 0)$ is $2$ units along the turret\'s local $x$-axis: dead ahead.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A turret\'s model matrix rotates by $90^\\circ$ about the $z$-axis, $R = \\begin{bmatrix} 0 & -1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$, and translates by $\\mathbf{t} = (5, 0, 0)$. An enemy stands at world position $\\mathbf{q} = (5, 2, 0)$. What is the enemy\'s $x$-coordinate in the turret\'s **local** space?',
      label: '$x_{\\text{local}} =$',
      answer: '2',
      hint: 'Local position $= R^{T}(\\mathbf{q} - \\mathbf{t})$.',
      explanation: '$\\mathbf{q} - \\mathbf{t} = (0, 2, 0)$. Then $R^{T} = \\begin{bmatrix} 0 & 1 & 0 \\\\ -1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$ gives $R^{T}(0, 2, 0) = (2, 0, 0)$. So $x_{\\text{local}} = 2$: the enemy is directly ahead along the turret\'s local $x$-axis, which points along world $+y$ after the $90^\\circ$ turn. Using $R$ instead of $R^{T}$ would give $(-2, 0, 0)$ — behind the turret.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Scene graphs: world = parent × local',
      blocks: [
        {
          type: 'p',
          text: 'Real scenes are hierarchies. A tank\'s turret sits on its hull and turns relative to it; the barrel sits on the turret and tilts relative to it; a soldier\'s hand is attached to the forearm, which hangs from the upper arm. A [[la-scene-graph|scene graph]] stores, for each node, a **local** matrix relative to its parent. The node\'s **world** matrix is found by multiplying down the tree:',
        },
        {
          type: 'theorem',
          name: 'Parent–child transforms (column vectors)',
          tex: 'W_{\\text{child}} = W_{\\text{parent}}\\,L_{\\text{child}} \\quad\\implies\\quad W_{\\text{barrel}} = W_{\\text{hull}}\\,L_{\\text{turret}}\\,L_{\\text{barrel}}',
          text: 'A point given in the child\'s coordinates is first placed in the parent\'s space by $L_{\\text{child}}$, then carried into the world by $W_{\\text{parent}}$ — rightmost first, as always.',
        },
        {
          type: 'derivation',
          title: 'Where is the muzzle of a 2D tank?',
          steps: [
            { tex: 'W_{\\text{hull}} = T(4, 0), \\quad L_{\\text{turret}} = R_{90^\\circ}, \\quad L_{\\text{barrel}} = T(1, 0)', why: 'The hull sits at $(4, 0)$ in the world; the turret is turned $90^\\circ$ on the hull; the barrel is mounted $1$ unit out along the turret\'s local $x$-axis.' },
            { tex: 'R_{90^\\circ}\\,T(1, 0) = \\begin{bmatrix} 0 & -1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 0 & 1 \\end{bmatrix}', why: 'In $R\\,T(\\mathbf{t})$ the translation gets rotated: $R(1, 0) = (0, 1)$ lands in the last column.' },
            { tex: 'W_{\\text{barrel}} = T(4, 0)\\begin{bmatrix} 0 & -1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 0 & -1 & 4 \\\\ 1 & 0 & 1 \\\\ 0 & 0 & 1 \\end{bmatrix}', why: 'A translation on the left adds $(4, 0)$ to the last column.' },
            { tex: 'W_{\\text{barrel}}\\begin{bmatrix} 2 \\\\ 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 3 \\\\ 1 \\end{bmatrix}', why: 'The muzzle is $2$ units along the barrel\'s local $x$-axis. The product puts it at world $(4, 3)$: the barrel starts at $(4, 1)$ and points straight up.' },
          ],
          result: 'The muzzle is at world position $(4, 3)$. Rotate the hull and the turret, barrel and muzzle all follow automatically, because $W_{\\text{hull}}$ appears in every child\'s product.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'How engines do it',
          text: 'Engines cache each node\'s world matrix and recompute it only when a "dirty" flag says a local transform up the chain changed. Skeletal animation is the same idea on a skeleton: each bone\'s world matrix is its parent bone\'s world matrix times its local (animated) matrix, and the skinning shader then needs one more product with the inverse of the bone\'s bind pose. Unity, Unreal and Godot all expose "local" and "world" transforms for exactly this reason.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'A tank hull has world matrix $T(3, 2)$ (no rotation). Its turret has local matrix $R_{90^\\circ}$, and the barrel has local matrix $T(2, 0)$. The muzzle is at the point $(1, 0)$ in barrel coordinates. What is the muzzle\'s world $y$-coordinate?',
      label: '$y_{\\text{world}} =$',
      answer: '5',
      hint: 'Apply the matrices right to left to $(1, 0, 1)$: first $T(2, 0)$, then $R_{90^\\circ}$, then $T(3, 2)$.',
      explanation: '$W = T(3, 2)\\,R_{90^\\circ}\\,T(2, 0)$. Right to left: $T(2, 0)$ takes $(1, 0)$ to $(3, 0)$ in turret space; $R_{90^\\circ}$ takes $(3, 0)$ to $(0, 3)$ in hull space; $T(3, 2)$ takes $(0, 3)$ to $(3, 5)$ in the world. So $y_{\\text{world}} = 5$. Multiplying in the wrong order, $T(2, 0)\\,R_{90^\\circ}\\,T(3, 2)$, would send $(1, 0)$ to $(4, 2)$, then $(-2, 4)$, then $(0, 4)$ — a different place entirely.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Model, view, projection and the perspective divide',
      blocks: [
        {
          type: 'p',
          text: 'Every vertex a GPU draws goes through a chain of coordinate spaces. Each arrow is a $4 \\times 4$ matrix: the [[la-mvp-matrices|model, view and projection matrices]].',
        },
        {
          type: 'math',
          tex: '\\underbrace{\\mathbf{p}_{\\text{local}}}_{\\text{object space}} \\xrightarrow{\\;M\\;} \\text{world} \\xrightarrow{\\;V\\;} \\text{camera (eye)} \\xrightarrow{\\;P\\;} \\text{clip} \\xrightarrow{\\;\\div w\\;} \\text{NDC}, \\qquad \\mathbf{p}_{\\text{clip}} = P\\,V\\,M\\,\\mathbf{p}_{\\text{local}}',
        },
        {
          type: 'list',
          items: [
            '**Model $M$**: the object\'s world matrix (TRS, or the product down the scene graph).',
            '**View $V$**: world to camera space. The camera is itself an object with a world matrix $C$; the view matrix is its inverse, $V = C^{-1}$ — usually the cheap rigid inverse. Moving the camera right is the same as moving the whole world left.',
            '**Projection $P$**: camera space to *clip space*. For a perspective camera it is not affine: its bottom row is not $(0, 0, 0, 1)$.',
          ],
        },
        {
          type: 'p',
          text: 'In OpenGL\'s convention the camera looks down the $-z$ axis, so a point in front of the camera has $z < 0$ and its distance is $-z$. Perspective means dividing by that distance: far things look small. Division is not linear — but a matrix can **copy** $-z$ into the $w$ slot, and the GPU then divides by $w$. That final step is the [[la-perspective-divide|perspective divide]].',
        },
        {
          type: 'derivation',
          title: 'A bare-bones perspective matrix in action',
          steps: [
            { tex: 'P_0 = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & -1 & 0 \\end{bmatrix}', why: 'The simplest projection: keep $x, y, z$, and use the bottom row $(0, 0, -1, 0)$ to make the new $w$ equal to $-z$, the distance in front of the camera.' },
            { tex: 'P_0\\begin{bmatrix} 2 \\\\ 1 \\\\ -4 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\\\ -4 \\\\ 4 \\end{bmatrix}', why: 'A point $4$ units in front of the camera; its clip-space $w$ is its distance, $4$.' },
            { tex: '\\left(\\tfrac{2}{4}, \\tfrac{1}{4}, \\tfrac{-4}{4}\\right) = (0.5,\\ 0.25,\\ -1)', why: 'The perspective divide: divide the first three coordinates by $w$. A point twice as far away would land half as far from the centre of the screen.' },
          ],
          result: 'Screen position $= (x, y) / \\text{distance}$ — the pinhole-camera rule — produced by one matrix and one divide.',
        },
        {
          type: 'graph',
          x: [-0.5, 8.5],
          y: [-0.5, 2.5],
          segments: [
            { from: [1, 0], to: [1, 2.2], color: 'gray', dashed: true, label: 'screen' },
            { from: ['u', 0], to: ['u', 1], color: 'blue', label: 'object' },
            { from: [0, 0], to: ['u', 1], color: 'gray', dashed: true },
            { from: [1, 0], to: [1, '1/u'], color: 'red', label: 'image' },
          ],
          points: [{ x: 0, y: 0, label: 'eye' }],
          sliders: [{ name: 'u', min: 1.2, max: 8, step: 0.1, value: 2, label: 'distance from camera $-z$' }],
          readouts: [{ label: 'projected height $= \\frac{1}{-z} =$', expr: '1/u' }],
          caption: 'Side view (distance to the right, height up). An object of height $1$ at distance $-z$ projects onto the screen at distance $1$ with height $\\frac{1}{-z}$: double the distance, half the size. The divide by $w$ computes exactly this ratio.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'What real projection matrices add',
          text: 'A production perspective matrix (like `glm::perspective`) also scales $x$ and $y$ by the field of view and aspect ratio, and remaps depth between the near and far planes into a fixed range ($[-1, 1]$ in OpenGL, $[0, 1]$ in Direct3D and Vulkan) for the depth buffer. In OpenGL\'s convention its bottom row is still $(0, 0, -1, 0)$ — the row that puts distance into $w$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'After multiplying by $PVM$, a vertex has clip coordinates $(4, 2, 3, 2)$. What are its normalized device coordinates (NDC) after the perspective divide?',
      options: [
        { text: '$(4, 2, 3)$', why: 'That drops $w$ without dividing — treating $w$ as if it were always $1$. For perspective projections it is not.' },
        { text: '$(2, 1, 1.5)$', correct: true, why: 'Divide each of $x, y, z$ by $w = 2$: $(4/2, 2/2, 3/2)$.' },
        { text: '$(8, 4, 6)$', why: 'This multiplies by $w$ instead of dividing.' },
        { text: '$(2, 1, 1.5, 2)$', why: 'After the divide the point is a 3D position; keeping $w = 2$ alongside the divided coordinates mixes two different representations.' },
      ],
      explanation: 'The perspective divide maps $(x, y, z, w)$ to $(x/w, y/w, z/w)$. Here $w = 2$, so NDC $= (2, 1, 1.5)$. (A point with NDC $z = 1.5$ lies outside the OpenGL depth range $[-1, 1]$, so this vertex would actually be clipped — that is why the space before the divide is called *clip* space.)',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Column vectors vs row vectors: OpenGL vs DirectX',
      blocks: [
        {
          type: 'p',
          text: 'Graphics programmers argue about this one forever, and the math settles it cleanly. There are two conventions for writing the same transform:',
        },
        {
          type: 'table',
          headers: ['Aspect', 'Column-vector convention', 'Row-vector convention'],
          rows: [
            ['Used by', 'math textbooks, OpenGL/GLSL, GLM, Unity', 'classic Direct3D (D3DX, DirectXMath), Unreal'],
            ['Apply to a point', '$\\mathbf{p}\' = M\\mathbf{p}$', '$\\mathbf{p}\'^{T} = \\mathbf{p}^{T}M\'$'],
            ['Translation lives in', 'the last column', 'the bottom row'],
            ['Scale, then rotate, then translate', '$M = T\\,R\\,S$ (read right to left)', '$M\' = S\'\\,R\'\\,T\'$ (read left to right)'],
          ],
        },
        {
          type: 'p',
          text: 'They are related by the transpose. Since $(M\\mathbf{p})^{T} = \\mathbf{p}^{T}M^{T}$, the row-vector matrix is $M\' = M^{T}$, and by the reversal rule $(TRS)^{T} = S^{T}R^{T}T^{T}$ — which is exactly why the row-vector world reads "scale, rotate, translate" left to right. Same geometry, transposed bookkeeping.',
        },
        {
          type: 'compare',
          left: {
            title: 'Column vectors (GLM)',
            tone: 'neutral',
            tex: ['\\begin{bmatrix} 1 & 0 & 0 & t_x \\\\ 0 & 1 & 0 & t_y \\\\ 0 & 0 & 1 & t_z \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}', '\\mathbf{p}\' = T\\,R\\,S\\,\\mathbf{p}'],
          },
          right: {
            title: 'Row vectors (DirectXMath)',
            tone: 'neutral',
            tex: ['\\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ t_x & t_y & t_z & 1 \\end{bmatrix}', '\\mathbf{p}\'^{T} = \\mathbf{p}^{T} S^{T} R^{T} T^{T}'],
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Convention is not memory layout',
          text: 'Whether vectors are columns or rows is a *math* convention. Whether a $4 \\times 4$ array is stored row by row or column by column (row-major vs column-major) is a separate *memory* choice. The two transposes famously cancel: a row-vector-convention matrix stored row-major has the **same 16 floats in memory** as the equivalent column-vector matrix stored column-major (GLM\'s layout). When a model renders inside-out or flies off screen after crossing an API boundary, check both — and remember that `mul(M, v)` versus `mul(v, M)` in HLSL is exactly the choice between $M\\mathbf{v}$ and $\\mathbf{v}^{T}M$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'In the row-vector convention ($\\mathbf{p}\'^{T} = \\mathbf{p}^{T}M$), the matrix that first scales, then rotates, then translates is $M = S\\,R\\,T$, where $S$, $R$, $T$ are the row-vector versions of each transform.',
      answer: true,
      explanation: 'With row vectors, $\\mathbf{p}^{T}$ meets the **leftmost** matrix first: $\\mathbf{p}^{T}SRT = ((\\mathbf{p}^{T}S)R)T$, so scale acts first and translate last. This is the transpose of the column-vector formula: $(T_cR_cS_c)^{T} = S_c^{T}R_c^{T}T_c^{T}$, and each row-vector matrix is the transpose of its column-vector twin.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'error',
      prompt: 'A programmer using **column vectors** (GLM) wants to scale an object by $2$, then rotate it $90^\\circ$, then move it by $(3, 0)$. Tap the first wrong line.',
      lines: [
        'Scale by $2$: the local point $(1, 0)$ goes to $(2, 0)$.',
        'Rotate $90^\\circ$: $(2, 0)$ goes to $(0, 2)$.',
        'Translate by $(3, 0)$: $(0, 2)$ goes to $(3, 2)$.',
        'So the model matrix is $M = S\\,R\\,T$, which sends $(1, 0)$ to $(3, 2)$.',
      ],
      errorLines: [4],
      explanation: 'Lines 1–3 trace the intended motion correctly. Line 4 writes the factors in application order, but with column vectors the rightmost factor acts first, so the matrix must be $M = T\\,R\\,S$. The product $S\\,R\\,T$ translates first: $(1, 0) \\to (4, 0)$, then rotates to $(0, 4)$, then scales to $(0, 8)$ — not $(3, 2)$. ($S\\,R\\,T$ *would* be right in the row-vector convention.)',
    },
  ],
  takeaways: [
    'Translation is not linear ($T(\\mathbf{0}) \\ne \\mathbf{0}$), but appending a coordinate turns every affine map $\\mathbf{x} \\mapsto A\\mathbf{x} + \\mathbf{t}$ into the matrix $\\begin{bmatrix} A & \\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}$: $3 \\times 3$ in 2D, $4 \\times 4$ in 3D.',
    'Points have $w = 1$ and are translated; directions (velocities, axes, normals) have $w = 0$ and ignore translation.',
    'With column vectors, $M = TRS$ scales, rotates, then translates; order matters, and rotating about a point $\\mathbf{p}$ is $T(\\mathbf{p})\\,R\\,T(-\\mathbf{p})$.',
    'A rigid transform inverts cheaply: $\\begin{bmatrix} R & \\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}^{-1} = \\begin{bmatrix} R^{T} & -R^{T}\\mathbf{t} \\\\ \\mathbf{0}^{T} & 1 \\end{bmatrix}$; in a scene graph, world $=$ parent world $\\times$ local.',
    'Vertices go through $\\mathbf{p}_{\\text{clip}} = PVM\\,\\mathbf{p}$ with $V$ the inverse of the camera\'s world matrix; the projection puts distance into $w$ and the perspective divide makes far things small.',
    'Row-vector conventions (DirectX, Unreal) use the transposes, so products read left to right ($SRT$); math convention and memory layout are separate choices.',
  ],
  reading: [
    {
      title: 'Wikipedia — Homogeneous coordinates',
      url: 'https://en.wikipedia.org/wiki/Homogeneous_coordinates',
      source: 'wikipedia',
      note: 'The projective-geometry origin of the extra coordinate, including points at infinity ($w = 0$).',
    },
    {
      title: 'Wikipedia — Transformation matrix',
      url: 'https://en.wikipedia.org/wiki/Transformation_matrix',
      source: 'wikipedia',
      note: 'Its sections on affine and perspective transformations collect the standard 2D and 3D matrices in one place.',
    },
    {
      title: 'Wikipedia — Scene graph',
      url: 'https://en.wikipedia.org/wiki/Scene_graph',
      source: 'wikipedia',
      note: 'How games and 3D tools organise objects into parent–child hierarchies whose transforms multiply down the tree.',
    },
    {
      title: '3Blue1Brown — Essence of linear algebra',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'Chapter 5, "Three-dimensional linear transformations", is good visual preparation for reading $4 \\times 4$ model matrices column by column.',
    },
  ],
};
