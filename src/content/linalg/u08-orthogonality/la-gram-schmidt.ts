import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-gram-schmidt',
  title: 'Gram–Schmidt and QR Factorization',
  summary: 'Turn any basis into an orthonormal one by subtracting projections, package the result as A = QR, and keep a game\'s rotation matrices honest.',
  minutes: 19,
  objectives: [
    'Derive the Gram–Schmidt process from "subtract the projection onto what you already have"',
    'Run Gram–Schmidt by hand on three vectors and normalize the result',
    'Factor a matrix with independent columns as $A = QR$ and explain why $R$ is upper triangular',
    'Solve $A\\mathbf{x} = \\mathbf{b}$ with QR and explain why QR is preferred numerically',
    'Re-orthonormalize a drifting rotation matrix and build a look-at camera basis with cross products',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The core move: subtract the projection',
      blocks: [
        {
          type: 'p',
          text: 'Last lesson showed that orthogonal bases make everything easy: coordinates, projections, closest points. But the bases you are handed (the columns of a matrix, two edges of a triangle, a camera\'s rough "up" hint) are rarely orthogonal. The [[gram-schmidt]] process manufactures an orthogonal basis for the same subspace, one vector at a time.',
        },
        {
          type: 'p',
          text: 'Start with two independent vectors $\\mathbf{x}_1, \\mathbf{x}_2$. Keep $\\mathbf{v}_1 = \\mathbf{x}_1$. From $\\mathbf{x}_2$, remove the part that points along $\\mathbf{v}_1$. What is left is perpendicular to $\\mathbf{v}_1$, by the Orthogonal Decomposition Theorem:',
        },
        {
          type: 'math',
          tex: '\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\,\\mathbf{v}_1',
          caption: '$\\mathbf{v}_2$ is the component of $\\mathbf{x}_2$ orthogonal to $\\mathbf{v}_1$.',
        },
        {
          type: 'graph',
          x: [-3.5, 4],
          y: [-2.5, 3.5],
          equal: true,
          segments: [
            { from: [0, 0], to: [2, 1], arrow: true, label: 'x1 = v1', color: 'blue' },
            { from: [0, 0], to: ['a', 'b'], arrow: true, label: 'x2', color: 'purple' },
            { from: [0, 0], to: ['2*(2*a + b)/5', '(2*a + b)/5'], dashed: true, color: 'green', label: 'proj' },
            { from: ['2*(2*a + b)/5', '(2*a + b)/5'], to: ['a', 'b'], dashed: true, color: 'gray' },
            { from: [0, 0], to: ['a - 2*(2*a + b)/5', 'b - (2*a + b)/5'], arrow: true, label: 'v2', color: 'red' },
          ],
          sliders: [
            { name: 'a', min: -3, max: 3, step: 0.1, value: 1, label: '$\\mathbf{x}_2$ first entry $a$' },
            { name: 'b', min: -2, max: 3, step: 0.1, value: 2, label: '$\\mathbf{x}_2$ second entry $b$' },
          ],
          readouts: [
            { label: '$\\mathbf{v}_1 \\cdot \\mathbf{v}_2 =$', expr: '2*(a - 2*(2*a + b)/5) + (b - (2*a + b)/5)', digits: 4 },
            { label: '$\\|\\mathbf{v}_2\\| =$', expr: 'sqrt((a - 2*(2*a + b)/5)^2 + (b - (2*a + b)/5)^2)', digits: 3 },
          ],
          caption: '$\\mathbf{x}_1 = (2, 1)$ is fixed. Move $\\mathbf{x}_2$: the red $\\mathbf{v}_2$ is always perpendicular to $\\mathbf{x}_1$ (dot product $0$). Try $\\mathbf{x}_2 = (2, 1)$ or $(-2, -1)$: then $\\mathbf{x}_2$ is parallel to $\\mathbf{x}_1$ and $\\mathbf{v}_2$ collapses to $\\mathbf{0}$, the signal of a dependent set.',
        },
        {
          type: 'derivation',
          title: 'Orthogonalize $\\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ 6 \\\\ 0 \\end{bmatrix}$, $\\mathbf{x}_2 = \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix}$',
          steps: [
            { tex: '\\mathbf{v}_1 = \\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ 6 \\\\ 0 \\end{bmatrix}', why: 'The first vector is kept as it is.' },
            { tex: '\\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1} = \\frac{3 + 12 + 0}{9 + 36 + 0} = \\frac{15}{45} = \\frac{1}{3}', why: 'The projection weight of $\\mathbf{x}_2$ on $\\mathbf{v}_1$.' },
            { tex: '\\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix} - \\frac{1}{3}\\begin{bmatrix} 3 \\\\ 6 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 2 \\end{bmatrix}', why: 'Subtract the projection.' },
            { tex: '\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 0 + 0 + 0 = 0 \\;\\checkmark', why: 'Check orthogonality.' },
          ],
          result: '$\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is an orthogonal basis for the same plane $\\operatorname{Span}\\{\\mathbf{x}_1, \\mathbf{x}_2\\}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the span does not change',
          text: '$\\mathbf{v}_2 = \\mathbf{x}_2 - c\\,\\mathbf{x}_1$ is a combination of $\\mathbf{x}_1, \\mathbf{x}_2$, so it lies in their span. Conversely $\\mathbf{x}_2 = \\mathbf{v}_2 + c\\,\\mathbf{v}_1$, so $\\mathbf{x}_2$ lies in the span of the new vectors. Each set is built from the other, so they span the same subspace. And $\\mathbf{v}_2 \\ne \\mathbf{0}$, because $\\mathbf{v}_2 = \\mathbf{0}$ would mean $\\mathbf{x}_2 = c\\,\\mathbf{x}_1$, contradicting independence.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Apply the first Gram–Schmidt step to $\\mathbf{x}_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$, $\\mathbf{x}_2 = \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$. Find $\\mathbf{v}_2$.',
      template: '$\\mathbf{v}_2 = ($ ___ $,$ ___ $)$',
      blanks: [{ answers: ['-1'] }, { answers: ['1'] }],
      hint: 'The projection weight is $\\frac{\\mathbf{x}_2 \\cdot \\mathbf{x}_1}{\\mathbf{x}_1 \\cdot \\mathbf{x}_1} = \\frac{4}{2}$.',
      explanation: 'The weight is $\\frac{1 + 3}{1 + 1} = 2$, so $\\mathbf{v}_2 = (1, 3) - 2(1, 1) = (-1, 1)$. Check: $(-1, 1) \\cdot (1, 1) = 0$. In $\\mathbb{R}^2$ the answer had to be a multiple of $(-1, 1)$, the only direction perpendicular to $(1, 1)$; the projection picks the right multiple.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The Gram–Schmidt process',
      blocks: [
        {
          type: 'p',
          text: 'With more vectors, repeat the move: from each new $\\mathbf{x}_k$, subtract its projection onto the subspace spanned by the orthogonal vectors you already have. Because $\\mathbf{v}_1, \\dots, \\mathbf{v}_{k-1}$ are orthogonal, that projection is just a sum of one-dimensional projections.',
        },
        {
          type: 'theorem',
          name: 'The Gram–Schmidt process',
          tex: '\\mathbf{v}_k = \\mathbf{x}_k - \\frac{\\mathbf{x}_k \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1 - \\frac{\\mathbf{x}_k \\cdot \\mathbf{v}_2}{\\mathbf{v}_2 \\cdot \\mathbf{v}_2}\\mathbf{v}_2 - \\cdots - \\frac{\\mathbf{x}_k \\cdot \\mathbf{v}_{k-1}}{\\mathbf{v}_{k-1} \\cdot \\mathbf{v}_{k-1}}\\mathbf{v}_{k-1}',
          text: 'Given a basis $\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_p\\}$ of a subspace $W$ of $\\mathbb{R}^n$, set $\\mathbf{v}_1 = \\mathbf{x}_1$ and define $\\mathbf{v}_2, \\dots, \\mathbf{v}_p$ by this formula. Then $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is an orthogonal basis for $W$, and moreover $\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\} = \\operatorname{Span}\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_k\\}$ for every $k$.',
        },
        {
          type: 'derivation',
          title: 'Orthogonalize $\\mathbf{x}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$, $\\mathbf{x}_2 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}$, $\\mathbf{x}_3 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix}$',
          steps: [
            { tex: '\\mathbf{v}_1 = \\mathbf{x}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}', why: 'Keep the first vector.' },
            { tex: '\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix} - \\frac{1}{2}\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1/2 \\\\ -1/2 \\\\ 1 \\end{bmatrix}', why: '$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = 1$ and $\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 2$.' },
            { tex: '\\mathbf{v}_2\' = 2\\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}', why: 'Scale to clear fractions. A multiple of $\\mathbf{v}_2$ is still orthogonal to $\\mathbf{v}_1$ and spans the same line, and the projection onto a line does not depend on which nonzero vector you use to describe it.' },
            { tex: '\\mathbf{x}_3 \\cdot \\mathbf{v}_1 = 1, \\quad \\mathbf{x}_3 \\cdot \\mathbf{v}_2\' = 0 - 1 + 2 = 1, \\quad \\mathbf{v}_2\' \\cdot \\mathbf{v}_2\' = 6', why: 'The dot products needed for the third step.' },
            { tex: '\\mathbf{v}_3 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\end{bmatrix} - \\frac{1}{2}\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix} - \\frac{1}{6}\\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}', why: 'Subtract the projections of $\\mathbf{x}_3$ onto **both** earlier orthogonal vectors.' },
            { tex: '= \\begin{bmatrix} 0 - \\frac12 - \\frac16 \\\\ 1 - \\frac12 + \\frac16 \\\\ 1 - 0 - \\frac13 \\end{bmatrix} = \\begin{bmatrix} -2/3 \\\\ 2/3 \\\\ 2/3 \\end{bmatrix}, \\quad \\mathbf{v}_3\' = \\begin{bmatrix} -1 \\\\ 1 \\\\ 1 \\end{bmatrix}', why: 'Entry by entry, then scale by $\\frac{3}{2}$ to get integers.' },
            { tex: '\\mathbf{v}_1 \\cdot \\mathbf{v}_3\' = -1 + 1 + 0 = 0, \\quad \\mathbf{v}_2\' \\cdot \\mathbf{v}_3\' = -1 - 1 + 2 = 0 \\;\\checkmark', why: 'Check: the new vector is orthogonal to both earlier ones.' },
          ],
          result: 'An orthogonal basis of $\\mathbb{R}^3$: $\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} -1 \\\\ 1 \\\\ 1 \\end{bmatrix}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why each new vector is orthogonal to all earlier ones',
          text: 'The subtracted sum is exactly $\\operatorname{proj}_{W_{k-1}} \\mathbf{x}_k$, where $W_{k-1} = \\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{k-1}\\}$ has the orthogonal basis $\\mathbf{v}_1, \\dots, \\mathbf{v}_{k-1}$. So $\\mathbf{v}_k = \\mathbf{x}_k - \\operatorname{proj}_{W_{k-1}}\\mathbf{x}_k$ lies in $W_{k-1}^{\\perp}$ by the Orthogonal Decomposition Theorem. It is nonzero because $\\mathbf{x}_k$ is not in $W_{k-1} = \\operatorname{Span}\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_{k-1}\\}$ (independence). Induction on $k$ does the rest.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Project onto the **new** vectors $\\mathbf{v}_j$, never the original $\\mathbf{x}_j$. The projection formula needs an orthogonal set, and the $\\mathbf{x}_j$ are not orthogonal: that is the whole problem we are solving.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Gram–Schmidt with $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix}$ and $\\mathbf{x}_2 = \\begin{bmatrix} 4 \\\\ 1 \\\\ 3 \\end{bmatrix}$. What is the projection weight $\\dfrac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}$ that gets multiplied by $\\mathbf{v}_1$ and subtracted?',
      label: 'weight $=$',
      answer: '4/3',
      explanation: '$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = 4 + 2 + 6 = 12$ and $\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 1 + 4 + 4 = 9$, so the weight is $\\frac{12}{9} = \\frac{4}{3}$. Then $\\mathbf{v}_2 = (4, 1, 3) - \\frac{4}{3}(1, 2, 2) = \\left(\\frac{8}{3}, -\\frac{5}{3}, \\frac{1}{3}\\right)$, and indeed $\\mathbf{v}_2 \\cdot \\mathbf{v}_1 = \\frac{8 - 10 + 2}{3} = 0$.',
    },
    {
      kind: 'error',
      prompt: 'A student runs Gram–Schmidt on $\\mathbf{x}_1 = (1, 1, 0)$, $\\mathbf{x}_2 = (1, 0, 1)$, $\\mathbf{x}_3 = (0, 1, 1)$ (column vectors). Tap the first wrong line.',
      lines: [
        '$\\mathbf{v}_1 = \\mathbf{x}_1 = (1, 1, 0)$',
        '$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{1}{2}\\mathbf{v}_1 = \\left(\\frac12, -\\frac12, 1\\right)$',
        '$\\mathbf{v}_3 = \\mathbf{x}_3 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{x}_2}{\\mathbf{x}_2 \\cdot \\mathbf{x}_2}\\mathbf{x}_2$',
        '$\\mathbf{v}_3 = (0, 1, 1) - \\frac12(1, 1, 0) - \\frac12(1, 0, 1) = \\left(-1, \\frac12, \\frac12\\right)$',
      ],
      errorLines: [3],
      explanation: 'Line 3 projects $\\mathbf{x}_3$ onto the original $\\mathbf{x}_2$ instead of the orthogonalized $\\mathbf{v}_2$. Because $\\mathbf{x}_2$ is not orthogonal to $\\mathbf{v}_1$, the result is not orthogonal to $\\mathbf{v}_2$: $(-1, \\frac12, \\frac12) \\cdot (\\frac12, -\\frac12, 1) = -\\frac14 \\ne 0$. Correctly, $\\mathbf{v}_3 = \\mathbf{x}_3 - \\frac12\\mathbf{v}_1 - \\frac{1/2}{3/2}\\mathbf{v}_2 = \\left(-\\frac23, \\frac23, \\frac23\\right)$.',
    },
    {
      kind: 'fill',
      prompt: 'You already have the orthogonal vectors $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$ and $\\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ -1 \\\\ 0 \\end{bmatrix}$. Find $\\mathbf{v}_3$ from $\\mathbf{x}_3 = \\begin{bmatrix} 2 \\\\ 3 \\\\ 4 \\end{bmatrix}$.',
      template: '$\\mathbf{v}_3 = ($ ___ $,$ ___ $,$ ___ $)$',
      blanks: [{ answers: ['0'] }, { answers: ['0'] }, { answers: ['4'] }],
      hint: 'The weights are $\\frac{5}{2}$ and $\\frac{-1}{2}$.',
      explanation: '$\\mathbf{x}_3 \\cdot \\mathbf{v}_1 = 5$ and $\\mathbf{x}_3 \\cdot \\mathbf{v}_2 = -1$, each over $2$. So $\\mathbf{v}_3 = (2, 3, 4) - \\frac52(1, 1, 0) + \\frac12(1, -1, 0) = (2 - 2.5 + 0.5,\\ 3 - 2.5 - 0.5,\\ 4) = (0, 0, 4)$. That makes sense: $\\mathbf{v}_1, \\mathbf{v}_2$ span the $x_1x_2$-plane, so removing the projection onto that plane leaves only the $\\mathbf{e}_3$ component of $\\mathbf{x}_3$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Normalizing: an orthonormal basis',
      blocks: [
        {
          type: 'p',
          text: 'To get an [[orthonormal-basis]], divide each $\\mathbf{v}_k$ by its length. Scaling never breaks orthogonality, so you can normalize at the end (by hand, this keeps the fractions small) or as you go (in code, this is standard, and the weights become plain dot products $\\mathbf{x}_k \\cdot \\mathbf{q}_j$).',
        },
        {
          type: 'derivation',
          title: 'Normalize the basis from the last card',
          steps: [
            { tex: '\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}', why: '$\\|(1, 1, 0)\\| = \\sqrt{1 + 1 + 0} = \\sqrt{2}$.' },
            { tex: '\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}\\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}', why: '$\\|(1, -1, 2)\\| = \\sqrt{1 + 1 + 4} = \\sqrt{6}$.' },
            { tex: '\\mathbf{q}_3 = \\frac{1}{\\sqrt{3}}\\begin{bmatrix} -1 \\\\ 1 \\\\ 1 \\end{bmatrix}', why: '$\\|(-1, 1, 1)\\| = \\sqrt{3}$.' },
          ],
          result: '$\\{\\mathbf{q}_1, \\mathbf{q}_2, \\mathbf{q}_3\\}$ is an orthonormal basis of $\\mathbb{R}^3$, and $Q = [\\,\\mathbf{q}_1 \\; \\mathbf{q}_2 \\; \\mathbf{q}_3\\,]$ is an orthogonal matrix.',
        },
        {
          type: 'p',
          text: 'Here is the whole process as code, normalizing as it goes. Its printout matches the hand computation: $\\frac{1}{\\sqrt{2}} \\approx 0.7071$, $\\frac{1}{\\sqrt{6}} \\approx 0.4082$, $\\frac{1}{\\sqrt{3}} \\approx 0.5774$.',
        },
        {
          type: 'code',
          title: 'gram_schmidt.cpp',
          runnable: true,
          code: `#include <array>
#include <cmath>
#include <cstdio>

using Vec3 = std::array<double, 3>;

double dot(const Vec3& a, const Vec3& b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

// v - s*w
Vec3 sub_scaled(const Vec3& v, double s, const Vec3& w) {
    return {v[0] - s * w[0], v[1] - s * w[1], v[2] - s * w[2]};
}

Vec3 normalize(const Vec3& v) {
    double len = std::sqrt(dot(v, v));
    return {v[0] / len, v[1] / len, v[2] / len};
}

int main() {
    std::array<Vec3, 3> x = {Vec3{1, 1, 0}, Vec3{1, 0, 1}, Vec3{0, 1, 1}};
    std::array<Vec3, 3> q{};

    for (int k = 0; k < 3; ++k) {
        Vec3 v = x[k];
        for (int j = 0; j < k; ++j)
            v = sub_scaled(v, dot(v, q[j]), q[j]);   // remove the q_j component
        q[k] = normalize(v);
    }

    for (int k = 0; k < 3; ++k)
        std::printf("q%d = (%7.4f, %7.4f, %7.4f)\\n", k + 1, q[k][0], q[k][1], q[k][2]);

    double worst = 0;
    for (int i = 0; i < 3; ++i)
        for (int j = 0; j < 3; ++j)
            worst = std::fmax(worst, std::fabs(dot(q[i], q[j]) - (i == j ? 1.0 : 0.0)));
    std::printf("max |QtQ - I| < 1e-12: %s\\n", worst < 1e-12 ? "yes" : "no");
}`,
          output: `q1 = ( 0.7071,  0.7071,  0.0000)
q2 = ( 0.4082, -0.4082,  0.8165)
q3 = (-0.5774,  0.5774,  0.5774)
max |QtQ - I| < 1e-12: yes`,
          annotations: [
            { lines: 26, text: 'Start from the raw input vector $\\mathbf{x}_k$.' },
            { lines: '27-28', text: 'Subtract the projection onto each earlier unit vector $\\mathbf{q}_j$. Since $\\|\\mathbf{q}_j\\| = 1$, the weight is just a dot product.' },
            { lines: 29, text: 'Normalize as we go, so later weights need no division.' },
            { lines: '35-39', text: 'Check $Q^{T}Q = I$: every pairwise dot product is $0$ and every self dot product is $1$, up to rounding.' },
          ],
        },
        {
          type: 'deepdive',
          title: 'Classical versus modified Gram–Schmidt',
          blocks: [
            {
              type: 'p',
              text: 'The textbook formula computes every weight from the **original** $\\mathbf{x}_k$: $\\mathbf{x}_k \\cdot \\mathbf{q}_j$ (classical Gram–Schmidt). The program above instead dots the **partially updated** $\\mathbf{v}$ with $\\mathbf{q}_j$ (modified Gram–Schmidt). In exact arithmetic they are identical, since the components already removed are orthogonal to $\\mathbf{q}_j$.',
            },
            {
              type: 'p',
              text: 'In floating point they are not. When the input vectors are nearly parallel, classical Gram–Schmidt can lose orthogonality badly (computed $\\mathbf{q}$\'s with dot products far from $0$); the modified version, which keeps cleaning up the residual, loses much less. Production libraries usually go further and use Householder reflections, which produce an orthogonal $Q$ to full machine precision.',
            },
          ],
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'Running Gram–Schmidt on the same vectors in a different order always produces the same orthogonal basis.',
      answer: false,
      explanation: 'The first output is always $\\mathbf{v}_1 = \\mathbf{x}_1$, so changing which vector comes first changes the result. On $(1, 1)$ then $(1, 3)$ you get $(1, 1), (-1, 1)$; on $(1, 3)$ then $(1, 1)$ you get $(1, 3)$ and $(1, 1) - \\frac{4}{10}(1, 3) = (0.6, -0.2)$. Both are orthogonal bases of $\\mathbb{R}^2$, just different ones. What Gram–Schmidt guarantees is that the first $k$ outputs span the same subspace as the first $k$ inputs, and that property is what makes $R$ triangular in the next card.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'QR factorization',
      blocks: [
        {
          type: 'p',
          text: 'Gram–Schmidt run on the columns of a matrix $A$ is really a matrix factorization. The orthonormal vectors become the columns of $Q$; the bookkeeping of "how much of each $\\mathbf{q}_j$ went into each $\\mathbf{x}_k$" becomes a triangular matrix $R$.',
        },
        {
          type: 'theorem',
          name: 'The QR factorization',
          tex: 'A = QR',
          text: 'If $A$ is $m \\times n$ with linearly independent columns, then $A = QR$ where $Q$ is $m \\times n$ with orthonormal columns spanning $\\operatorname{Col} A$, and $R$ is an $n \\times n$ upper triangular invertible matrix with positive diagonal entries. This is the [[qr-factorization]].',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $R$ is upper triangular, and how to get it',
          text: 'Gram–Schmidt guarantees $\\mathbf{x}_k \\in \\operatorname{Span}\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_k\\}$, so $\\mathbf{x}_k = r_{1k}\\mathbf{q}_1 + \\cdots + r_{kk}\\mathbf{q}_k + 0\\,\\mathbf{q}_{k+1} + \\cdots + 0\\,\\mathbf{q}_n$. Column $k$ of $R$ holds these weights, with zeros below row $k$: upper triangular. Since the $\\mathbf{q}_j$ are orthonormal, the weights are dot products, $r_{jk} = \\mathbf{q}_j \\cdot \\mathbf{x}_k$, which in matrix form reads $R = Q^{T}A$ (multiply $A = QR$ on the left by $Q^{T}$ and use $Q^{T}Q = I$). The diagonal entry $r_{kk} = \\|\\mathbf{v}_k\\| > 0$.',
        },
        {
          type: 'derivation',
          title: 'QR of $A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{bmatrix}$ (columns $\\mathbf{x}_1, \\mathbf{x}_2, \\mathbf{x}_3$ from before)',
          steps: [
            { tex: 'Q = \\begin{bmatrix} 1/\\sqrt{2} & 1/\\sqrt{6} & -1/\\sqrt{3} \\\\ 1/\\sqrt{2} & -1/\\sqrt{6} & 1/\\sqrt{3} \\\\ 0 & 2/\\sqrt{6} & 1/\\sqrt{3} \\end{bmatrix}', why: 'The columns are $\\mathbf{q}_1, \\mathbf{q}_2, \\mathbf{q}_3$ from the normalizing card.' },
            { tex: 'r_{11} = \\mathbf{q}_1 \\cdot \\mathbf{x}_1 = \\tfrac{2}{\\sqrt{2}} = \\sqrt{2}, \\quad r_{12} = \\mathbf{q}_1 \\cdot \\mathbf{x}_2 = \\tfrac{1}{\\sqrt{2}}, \\quad r_{13} = \\mathbf{q}_1 \\cdot \\mathbf{x}_3 = \\tfrac{1}{\\sqrt{2}}', why: 'Row 1 of $R = Q^{T}A$: dot $\\mathbf{q}_1$ with each column.' },
            { tex: 'r_{22} = \\mathbf{q}_2 \\cdot \\mathbf{x}_2 = \\tfrac{1 + 0 + 2}{\\sqrt{6}} = \\tfrac{3}{\\sqrt{6}}, \\quad r_{23} = \\mathbf{q}_2 \\cdot \\mathbf{x}_3 = \\tfrac{0 - 1 + 2}{\\sqrt{6}} = \\tfrac{1}{\\sqrt{6}}', why: 'Row 2. The entry $r_{21} = \\mathbf{q}_2 \\cdot \\mathbf{x}_1$ is $0$, because $\\mathbf{q}_2 \\perp \\mathbf{q}_1$ and $\\mathbf{x}_1$ is a multiple of $\\mathbf{q}_1$.' },
            { tex: 'r_{33} = \\mathbf{q}_3 \\cdot \\mathbf{x}_3 = \\tfrac{0 + 1 + 1}{\\sqrt{3}} = \\tfrac{2}{\\sqrt{3}}', why: 'Row 3 has only its diagonal entry; $r_{31} = r_{32} = 0$ for the same reason.' },
            { tex: 'R = \\begin{bmatrix} \\sqrt{2} & 1/\\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & 3/\\sqrt{6} & 1/\\sqrt{6} \\\\ 0 & 0 & 2/\\sqrt{3} \\end{bmatrix}', why: 'Assemble. Check one entry of $QR$: row 3, column 2 is $0 \\cdot \\tfrac{1}{\\sqrt{2}} + \\tfrac{2}{\\sqrt{6}} \\cdot \\tfrac{3}{\\sqrt{6}} + 0 = 1 = a_{32}$.' },
          ],
          result: '$A = QR$ with $Q$ orthogonal and $R$ upper triangular with positive diagonal.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Sanity checks: $r_{11} = \\|\\mathbf{x}_1\\|$ always, and for square $A$, $|\\det A| = \\det R = r_{11}r_{22}\\cdots r_{nn}$ (since $\\det Q = \\pm 1$). Here $\\sqrt{2} \\cdot \\frac{3}{\\sqrt{6}} \\cdot \\frac{2}{\\sqrt{3}} = \\frac{6\\sqrt{2}}{\\sqrt{18}} = 2$, and indeed $\\det A = -2$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the QR factorization of $A = \\begin{bmatrix} 3 & 1 \\\\ 4 & 7 \\end{bmatrix}$ by Gram–Schmidt. What is the entry $r_{22}$ of $R$?',
      hint: '$\\mathbf{q}_1 = \\frac{1}{5}(3, 4)$. Compute $r_{12} = \\mathbf{q}_1 \\cdot \\mathbf{x}_2$, then $r_{22} = \\|\\mathbf{x}_2 - r_{12}\\mathbf{q}_1\\|$.',
      label: '$r_{22} =$',
      answer: '17/5',
      explanation: '$r_{11} = \\|(3, 4)\\| = 5$ and $\\mathbf{q}_1 = (\\frac35, \\frac45)$. Then $r_{12} = \\mathbf{q}_1 \\cdot (1, 7) = \\frac{3 + 28}{5} = \\frac{31}{5}$. The leftover is $\\mathbf{v}_2 = (1, 7) - \\frac{31}{5}(\\frac35, \\frac45) = (1 - \\frac{93}{25}, 7 - \\frac{124}{25}) = (-\\frac{68}{25}, \\frac{51}{25}) = \\frac{17}{25}(-4, 3)$, whose length is $\\frac{17}{25} \\cdot 5 = \\frac{17}{5}$. Check: $r_{11}r_{22} = 5 \\cdot \\frac{17}{5} = 17 = \\det A$.',
    },
    {
      kind: 'mcq',
      prompt: 'You know $Q$ (orthonormal columns) and need $R$ in $A = QR$. Which formula gives it directly?',
      options: [
        { text: '$R = A^{T}Q$', why: 'This is $(Q^{T}A)^{T} = R^{T}$, which is lower triangular, not $R$.' },
        { text: '$R = Q^{T}A$', correct: true, why: 'Multiply $A = QR$ on the left by $Q^{T}$: $Q^{T}A = Q^{T}QR = IR = R$.' },
        { text: '$R = AQ^{T}$', why: 'The sizes do not even match in general ($A$ is $m \\times n$, $Q^{T}$ is $n \\times m$), and matrix multiplication is not commutative, so $Q^{T}$ must multiply from the left.' },
        { text: '$R = Q^{-1}A$, computed by row reducing $Q$', why: 'For square $Q$ this equals $Q^{T}A$, but row reduction is wasted effort: $Q^{-1} = Q^{T}$. And for a non-square $Q$ there is no inverse at all, while $Q^{T}A$ still works.' },
      ],
      explanation: 'The key identity is $Q^{T}Q = I_n$, true for any matrix with orthonormal columns (square or not). Entry by entry, $R = Q^{T}A$ says $r_{jk} = \\mathbf{q}_j \\cdot \\mathbf{x}_k$: the weight of $\\mathbf{q}_j$ in column $k$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Why numerical code loves QR',
      blocks: [
        {
          type: 'p',
          text: 'Solving $A\\mathbf{x} = \\mathbf{b}$ with $A = QR$ splits a hard problem into two easy ones. Substitute: $QR\\mathbf{x} = \\mathbf{b}$. Multiply by $Q^{T}$: $R\\mathbf{x} = Q^{T}\\mathbf{b}$. Now $R$ is triangular, so back-substitution finishes the job.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{bmatrix} 3 & 1 \\\\ 4 & 7 \\end{bmatrix}\\mathbf{x} = \\begin{bmatrix} 4 \\\\ 11 \\end{bmatrix}$ using $Q = \\frac{1}{5}\\begin{bmatrix} 3 & -4 \\\\ 4 & 3 \\end{bmatrix}$, $R = \\begin{bmatrix} 5 & 31/5 \\\\ 0 & 17/5 \\end{bmatrix}$',
          steps: [
            { tex: 'Q^{T}\\mathbf{b} = \\frac{1}{5}\\begin{bmatrix} 3 & 4 \\\\ -4 & 3 \\end{bmatrix}\\begin{bmatrix} 4 \\\\ 11 \\end{bmatrix} = \\begin{bmatrix} 56/5 \\\\ 17/5 \\end{bmatrix}', why: 'One matrix-vector product: $\\frac{12 + 44}{5}$ and $\\frac{-16 + 33}{5}$. ($Q$ is the factor from the previous question; its second column is $\\frac{1}{17/5} \\cdot \\frac{17}{25}(-4, 3)$.)' },
            { tex: '\\tfrac{17}{5}x_2 = \\tfrac{17}{5} \\implies x_2 = 1', why: 'The last row of $R\\mathbf{x} = Q^{T}\\mathbf{b}$ involves only $x_2$.' },
            { tex: '5x_1 + \\tfrac{31}{5}(1) = \\tfrac{56}{5} \\implies x_1 = 1', why: 'Back-substitute into the first row: $5x_1 = \\frac{25}{5} = 5$.' },
          ],
          result: '$\\mathbf{x} = (1, 1)$. Check: $3 + 1 = 4$ and $4 + 7 = 11$.',
        },
        {
          type: 'list',
          items: [
            '**Stability.** Multiplying by $Q^{T}$ preserves lengths, so it cannot magnify rounding errors. Every bit of difficulty in the problem is left in $R$, none added.',
            '**Least squares.** When $A\\mathbf{x} = \\mathbf{b}$ has no solution, the same equation $R\\hat{\\mathbf{x}} = Q^{T}\\mathbf{b}$ gives the best approximate solution. That is the next lesson.',
            '**Eigenvalues.** The *QR algorithm* (factor $A_k = Q_kR_k$, then set $A_{k+1} = R_kQ_k$, repeat) converges, for most matrices, to a triangular matrix whose diagonal holds the eigenvalues. Variants of it power the eigenvalue routines in LAPACK, NumPy and Eigen.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'QR in a C++ library',
          text: 'With the Eigen library, `Eigen::HouseholderQR<Eigen::MatrixXd> qr(A); Eigen::VectorXd x = qr.solve(b);` factors and solves in two lines. "Householder" is the reflection-based way of computing the same $Q$ and $R$ (up to signs) more stably than Gram–Schmidt.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Order the steps for solving a square system $A\\mathbf{x} = \\mathbf{b}$ (with $A$ invertible) by QR.',
      lines: [
        'Run Gram–Schmidt on the columns of $A$ and normalize to get $Q$',
        'Compute $R = Q^{T}A$, which is upper triangular',
        'Compute the vector $Q^{T}\\mathbf{b}$',
        'Solve $R\\mathbf{x} = Q^{T}\\mathbf{b}$ by back-substitution, last variable first',
      ],
      distractors: ['Compute $R^{-1}$ by row reduction and multiply'],
      explanation: '$Q$ comes first, $R$ is read off from $Q^{T}A$, then $A\\mathbf{x} = \\mathbf{b}$ becomes $R\\mathbf{x} = Q^{T}\\mathbf{b}$. Inverting $R$ is unnecessary: triangular systems are solved directly by back-substitution, which is cheaper and more accurate than forming any inverse.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Game connection: keeping rotations honest',
      blocks: [
        {
          type: 'p',
          text: 'A spinning object\'s orientation is often stored as a $3 \\times 3$ rotation matrix and updated every frame: $R \\leftarrow R \\cdot \\Delta R$. Each multiplication rounds to `float`, and after thousands of frames the columns are no longer exactly unit length or exactly perpendicular. The matrix is no longer orthogonal: the object starts to shear and scale by tiny amounts, normals used for lighting are no longer unit vectors, and $R^{T}$ stops being the inverse.',
        },
        {
          type: 'p',
          text: 'The fix is to **re-orthonormalize** every so often, and that is Gram–Schmidt on the three columns. Trust one axis most (say forward), clean up the second against it, and get the third from a [[cross-product]], which is automatically perpendicular to both and has length $1$ when they are perpendicular unit vectors ($\\|\\mathbf{a} \\times \\mathbf{b}\\| = \\|\\mathbf{a}\\|\\|\\mathbf{b}\\|\\sin 90^\\circ = 1$).',
        },
        {
          type: 'code',
          title: 'orthonormalize.cpp',
          code: `// Columns of a rotation matrix: right, up, forward
// (right-handed, with cross(right, up) == forward).
void orthonormalize(Vec3& right, Vec3& up, Vec3& forward) {
    forward = normalize(forward);                      // v1: keep this direction
    up = normalize(up - dot(up, forward) * forward);   // v2: Gram-Schmidt step
    right = cross(up, forward);                        // v3: already unit length
}

// The same idea builds a camera basis from a target and a world "up" hint.
void lookAtBasis(Vec3 eye, Vec3 target, Vec3 worldUp,
                 Vec3& f, Vec3& r, Vec3& u) {
    f = normalize(target - eye);           // where the camera looks
    r = normalize(cross(f, worldUp));      // perpendicular to f and the hint
    u = cross(r, f);                       // true up: perpendicular to both
}`,
          annotations: [
            { lines: 5, text: 'Exactly $\\mathbf{v}_2 = \\mathbf{x}_2 - (\\mathbf{x}_2 \\cdot \\mathbf{q}_1)\\mathbf{q}_1$, normalized.' },
            { lines: 6, text: 'In 3D the last Gram–Schmidt vector can be replaced by a cross product, which also fixes the handedness.' },
            { lines: '12-14', text: 'This is how `glm::lookAt` and `gluLookAt` build a view basis. The resulting $\\mathbf{u}$ equals the normalized Gram–Schmidt vector $\\text{worldUp} - (\\text{worldUp} \\cdot \\mathbf{f})\\mathbf{f}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Looking straight up',
          text: 'If the camera looks exactly along `worldUp`, then $\\mathbf{f} \\times \\text{worldUp} = \\mathbf{0}$ and normalizing divides by zero, the same failure as Gram–Schmidt on dependent vectors ($\\mathbf{v}_2 = \\mathbf{0}$). Engines detect this case and switch to a different up hint.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Gram–Schmidt favours the first axis: it is kept exactly while the others absorb all the correction. If you want the rotation **closest** to a drifted matrix, with the error spread evenly, the answer comes from the singular value decomposition in the last lesson of this unit. Many engines store orientations as quaternions instead, where re-normalizing a 4-vector plays the same role.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A look-at function computes $\\mathbf{r} = \\text{normalize}(\\mathbf{f} \\times \\text{worldUp})$ and then $\\mathbf{u} = \\mathbf{r} \\times \\mathbf{f}$. Why is no `normalize` needed on $\\mathbf{u}$?',
      options: [
        { text: 'Because $\\mathbf{r}$ and $\\mathbf{f}$ are perpendicular unit vectors, so $\\|\\mathbf{r} \\times \\mathbf{f}\\| = 1 \\cdot 1 \\cdot \\sin 90^\\circ = 1$', correct: true, why: 'The cross product\'s length is $\\|\\mathbf{a}\\|\\|\\mathbf{b}\\|\\sin\\theta$, and every factor is $1$ here.' },
        { text: 'Because worldUp was already a unit vector', why: 'worldUp does not appear in $\\mathbf{r} \\times \\mathbf{f}$ at all, and $\\mathbf{f} \\times \\text{worldUp}$ has length $\\sin\\theta$, not $1$, which is why $\\mathbf{r}$ needed normalizing.' },
        { text: 'Because cross products always return unit vectors', why: 'False: $(2, 0, 0) \\times (0, 3, 0) = (0, 0, 6)$. The length is the area of the parallelogram the two vectors span.' },
        { text: 'It is needed; skipping it is a bug that makes the camera scale the scene', why: 'It would be needed if $\\mathbf{r}$ and $\\mathbf{f}$ were not perpendicular unit vectors, but by construction they are.' },
      ],
      explanation: '$\\mathbf{f}$ was normalized, $\\mathbf{r}$ was normalized, and $\\mathbf{r} \\perp \\mathbf{f}$ because a cross product is perpendicular to both of its inputs. So $\\|\\mathbf{r} \\times \\mathbf{f}\\| = \\|\\mathbf{r}\\|\\|\\mathbf{f}\\|\\sin 90^\\circ = 1$, and $\\{\\mathbf{r}, \\mathbf{u}, \\mathbf{f}\\}$ is an orthonormal basis: the camera\'s rotation matrix is orthogonal, and the view matrix can use its transpose.',
    },
  ],
  takeaways: [
    'Gram–Schmidt: $\\mathbf{v}_k = \\mathbf{x}_k - \\sum_{j<k} \\frac{\\mathbf{x}_k \\cdot \\mathbf{v}_j}{\\mathbf{v}_j \\cdot \\mathbf{v}_j}\\mathbf{v}_j$, subtracting projections onto the **new** orthogonal vectors, never the originals.',
    'The first $k$ outputs span the same subspace as the first $k$ inputs; a zero output signals that the inputs were dependent.',
    'Normalizing gives an orthonormal basis; scaling an intermediate $\\mathbf{v}_k$ to clear fractions is always allowed.',
    'A matrix with independent columns factors as $A = QR$: $Q$ has orthonormal columns, $R = Q^{T}A$ is upper triangular with positive diagonal.',
    '$A\\mathbf{x} = \\mathbf{b}$ becomes $R\\mathbf{x} = Q^{T}\\mathbf{b}$, solved by back-substitution; orthogonal factors do not amplify rounding error.',
    'Games re-orthonormalize drifting rotation matrices and build look-at bases with exactly this process, using cross products for the last axis.',
  ],
  reading: [
    {
      title: 'Wikipedia — Gram–Schmidt process',
      url: 'https://en.wikipedia.org/wiki/Gram%E2%80%93Schmidt_process',
      source: 'wikipedia',
      note: 'The process, its animation in 3D, and a careful section on numerical stability of the classical versus modified versions.',
    },
    {
      title: 'Wikipedia — QR decomposition',
      url: 'https://en.wikipedia.org/wiki/QR_decomposition',
      source: 'wikipedia',
      note: 'Compares Gram–Schmidt, Householder reflections and Givens rotations as ways to compute $Q$ and $R$.',
    },
    {
      title: 'MIT OCW 18.06 (Strang) — Orthogonal matrices and Gram–Schmidt',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lecture 17 derives $A = QR$ from Gram–Schmidt exactly as in this lesson.',
    },
  ],
};
