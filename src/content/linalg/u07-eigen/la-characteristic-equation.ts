import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-characteristic-equation',
  title: 'The Characteristic Equation',
  summary: 'Turn "find every eigenvalue" into "find the roots of a polynomial", and see why a rotation\'s eigenvalues have to be complex.',
  minutes: 18,
  objectives: [
    'Explain why the eigenvalues of $A$ are exactly the solutions of $\\det(A - \\lambda I) = 0$',
    'Compute the characteristic polynomial of a $2 \\times 2$ matrix and of a triangular or block-friendly $3 \\times 3$ matrix',
    'Identify the algebraic multiplicity of each eigenvalue',
    'Use $\\operatorname{tr} A$ and $\\det A$ as the sum and product of the eigenvalues of a $2 \\times 2$ matrix',
    'Prove that similar matrices have the same characteristic polynomial',
    'Find the complex eigenvalues of a rotation matrix and explain why it has no real eigenvectors',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'From "is it an eigenvalue?" to "find them all"',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson you could *test* a number $\\lambda$: it is an eigenvalue exactly when $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution. But you cannot test every real number one at a time. We need an equation whose solutions are precisely the eigenvalues.',
        },
        {
          type: 'p',
          text: 'The [[invertible-matrix-theorem]] gives it to us. A square matrix has nontrivial null space exactly when it is not invertible, and it is not invertible exactly when its [[determinant]] is zero. Apply that to the matrix $A - \\lambda I$:',
        },
        {
          type: 'theorem',
          name: 'The characteristic equation',
          tex: '\\lambda \\text{ is an eigenvalue of } A \\iff \\det(A - \\lambda I) = 0',
          text: 'For an $n \\times n$ matrix, $\\det(A - \\lambda I)$ is a polynomial of degree $n$ in $\\lambda$, called the [[characteristic-polynomial]]. Setting it equal to zero gives the [[characteristic-equation]].',
        },
        {
          type: 'derivation',
          title: 'Eigenvalues of $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$',
          steps: [
            { tex: 'A - \\lambda I = \\begin{bmatrix} 1 - \\lambda & 2 \\\\ 3 & 2 - \\lambda \\end{bmatrix}', why: 'Subtract $\\lambda$ from each diagonal entry. Now $\\lambda$ is an unknown, not a number.' },
            { tex: '\\det(A - \\lambda I) = (1 - \\lambda)(2 - \\lambda) - (2)(3)', why: '$2 \\times 2$ determinant: product of the diagonal minus product of the off-diagonal.' },
            { tex: '= 2 - 3\\lambda + \\lambda^2 - 6 = \\lambda^2 - 3\\lambda - 4', why: 'Expand $(1 - \\lambda)(2 - \\lambda) = 2 - \\lambda - 2\\lambda + \\lambda^2$ and collect terms.' },
            { tex: '\\lambda^2 - 3\\lambda - 4 = (\\lambda - 4)(\\lambda + 1) = 0', why: 'Factor: two numbers with product $-4$ and sum $-3$ are $-4$ and $1$.' },
            { tex: '\\lambda = 4 \\quad\\text{or}\\quad \\lambda = -1', why: 'Zero-product property. These are *all* the eigenvalues: a degree-2 polynomial has at most two roots.' },
          ],
          result: 'The eigenvalues are $4$ and $-1$, the two directions you found by rotating the test vector in the previous lesson.',
        },
        {
          type: 'graph',
          x: [-3, 6],
          y: [-8, 8],
          functions: [{ expr: 'x^2 - 3x - 4', label: '$p(\\lambda) = \\lambda^2 - 3\\lambda - 4$ (horizontal axis is $\\lambda$)' }],
          points: [
            { x: -1, y: 0, label: 'λ = −1' },
            { x: 4, y: 0, label: 'λ = 4' },
          ],
          caption: 'The eigenvalues are where the characteristic polynomial crosses zero. Every other $\\lambda$ makes $A - \\lambda I$ invertible, so $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ has only the trivial solution.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'The chain of equivalences',
          text: '$\\lambda$ is an eigenvalue $\\iff$ $A\\mathbf{x} = \\lambda\\mathbf{x}$ for some $\\mathbf{x} \\ne \\mathbf{0}$ $\\iff$ $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution $\\iff$ $A - \\lambda I$ is singular $\\iff$ $\\det(A - \\lambda I) = 0$. Each arrow is something you already proved; the characteristic equation just strings them together.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find the characteristic polynomial $\\det(A - \\lambda I)$ of $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$. Type $\\lambda$ as `l`, e.g. `l^2 - 2l + 1`.',
      hint: 'Compute $(4 - \\lambda)(3 - \\lambda) - (1)(2)$ and expand.',
      label: '$\\det(A - \\lambda I) =$',
      variables: ['l'],
      answer: 'l^2 - 7l + 10',
      answerTex: '\\lambda^2 - 7\\lambda + 10',
      explanation: '$(4 - \\lambda)(3 - \\lambda) - 2 = 12 - 7\\lambda + \\lambda^2 - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$. So the eigenvalues are $2$ and $5$; in the previous lesson you found the eigenspace for $\\lambda = 2$, spanned by $(1, -2)$.',
    },
    {
      kind: 'numeric',
      prompt: 'Find both eigenvalues of $A = \\begin{bmatrix} 7 & -4 \\\\ 2 & 1 \\end{bmatrix}$. Enter them separated by commas.',
      hint: 'Expand $(7 - \\lambda)(1 - \\lambda) - (-4)(2)$, then factor.',
      label: '$\\lambda =$',
      answer: ['3', '5'],
      explanation: '$\\det(A - \\lambda I) = (7 - \\lambda)(1 - \\lambda) + 8 = \\lambda^2 - 8\\lambda + 7 + 8 = \\lambda^2 - 8\\lambda + 15 = (\\lambda - 3)(\\lambda - 5)$. Watch the sign: the off-diagonal product is $(-4)(2) = -8$, and *subtracting* it adds $8$.',
    },
    {
      kind: 'concept',
      title: 'The $2 \\times 2$ shortcut: trace and determinant',
      blocks: [
        {
          type: 'p',
          text: 'Do the computation once with letters and a pattern appears. The sum of the diagonal entries of a square matrix is called its [[trace]], written $\\operatorname{tr} A$.',
        },
        {
          type: 'derivation',
          title: 'Characteristic polynomial of $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$',
          steps: [
            { tex: '\\det(A - \\lambda I) = (a - \\lambda)(d - \\lambda) - bc', why: 'Same $2 \\times 2$ determinant as before, with letters.' },
            { tex: '= \\lambda^2 - (a + d)\\lambda + (ad - bc)', why: 'Expand $(a - \\lambda)(d - \\lambda) = ad - a\\lambda - d\\lambda + \\lambda^2$ and group by powers of $\\lambda$.' },
            { tex: '= \\lambda^2 - (\\operatorname{tr} A)\\,\\lambda + \\det A', why: 'Recognise $a + d = \\operatorname{tr} A$ and $ad - bc = \\det A$.' },
          ],
          result: 'For every $2 \\times 2$ matrix, $\\det(A - \\lambda I) = \\lambda^2 - (\\operatorname{tr} A)\\lambda + \\det A$.',
        },
        {
          type: 'p',
          text: 'If the eigenvalues are $\\lambda_1$ and $\\lambda_2$, the polynomial also factors as $(\\lambda - \\lambda_1)(\\lambda - \\lambda_2) = \\lambda^2 - (\\lambda_1 + \\lambda_2)\\lambda + \\lambda_1\\lambda_2$. Matching coefficients:',
        },
        {
          type: 'theorem',
          name: 'Trace and determinant from eigenvalues ($2 \\times 2$)',
          tex: '\\lambda_1 + \\lambda_2 = \\operatorname{tr} A, \\qquad \\lambda_1 \\lambda_2 = \\det A',
          text: 'This holds even when the eigenvalues are repeated or complex. (It is true for $n \\times n$ matrices too, counting each eigenvalue as often as it repeats; we will use that fact without proof.)',
        },
        {
          type: 'p',
          text: 'Check the running example: $4 + (-1) = 3 = 1 + 2$ and $4 \\cdot (-1) = -4 = 1 \\cdot 2 - 2 \\cdot 3$. ✓ Now play with a family of matrices whose bottom-left entry $c$ is a slider.',
        },
        {
          type: 'graph',
          x: [-3, 6],
          y: [-6, 10],
          functions: [{ expr: 'x^2 - 3x + 2 - 2c', label: '$p(\\lambda)$ for $A = \\begin{bmatrix} 1 & 2 \\\\ c & 2 \\end{bmatrix}$' }],
          sliders: [{ name: 'c', min: -2, max: 4, step: 0.05, value: 3, label: '$c$' }],
          readouts: [
            { label: '$\\operatorname{tr} A =$', expr: '3' },
            { label: '$\\det A = 2 - 2c =$', expr: '2 - 2c', digits: 3 },
            { label: 'discriminant $(\\operatorname{tr} A)^2 - 4\\det A =$', expr: '1 + 8c', digits: 3 },
          ],
          caption: 'The trace fixes the axis of symmetry at $\\lambda = \\frac{3}{2}$; the determinant moves the parabola up and down. Below $c = -\\frac{1}{8}$ the discriminant turns negative, the parabola lifts off the axis, and the real eigenvalues disappear: they have become a complex-conjugate pair.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A closed-form $2 \\times 2$ eigenvalue solver',
          text: 'For $2 \\times 2$ matrices (2D physics, UV-space distortion, the Jacobian of a 2D map) engines often skip general-purpose solvers and use the quadratic formula on $\\lambda^2 - (\\operatorname{tr} A)\\lambda + \\det A$ directly. The sign of the discriminant tells you whether the transform has real stretch directions or a rotational part.',
        },
        {
          type: 'code',
          title: 'eigen2x2.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

// Eigenvalues of [[a, b], [c, d]] from lambda^2 - (tr)lambda + det = 0.
void eigen2x2(double a, double b, double c, double d) {
    double tr = a + d;
    double det = a * d - b * c;
    double disc = tr * tr - 4.0 * det;
    if (disc >= 0.0) {
        double s = std::sqrt(disc);
        std::printf("real: %g and %g\\n", (tr + s) / 2.0, (tr - s) / 2.0);
    } else {
        double re = tr / 2.0, im = std::sqrt(-disc) / 2.0;
        std::printf("complex: %g +/- %gi\\n", re, im);
    }
}

int main() {
    eigen2x2(1, 2, 3, 2);   // our running example
    eigen2x2(2, 1, 0, 2);   // shear-like, repeated root
    eigen2x2(0, -1, 1, 0);  // rotation by 90 degrees
}`,
          output: `real: 4 and -1
real: 2 and 2
complex: 0 +/- 1i`,
          annotations: [
            { lines: '6-8', text: 'The only three numbers you need: trace, determinant and the discriminant $(\\operatorname{tr} A)^2 - 4\\det A$.' },
            { lines: '9-11', text: 'Non-negative discriminant: two real roots $\\frac{\\operatorname{tr} A \\pm \\sqrt{\\text{disc}}}{2}$ (equal when it is $0$).' },
            { lines: '12-15', text: 'Negative discriminant: the roots are complex conjugates $\\frac{\\operatorname{tr} A}{2} \\pm i\\frac{\\sqrt{-\\text{disc}}}{2}$.' },
          ],
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'A $2 \\times 2$ matrix $A$ has eigenvalues $3$ and $-2$. Without knowing $A$, fill in its trace and determinant.',
      hint: 'Trace is the sum of the eigenvalues; determinant is their product.',
      template: '$\\operatorname{tr} A =$ ___ and $\\det A =$ ___',
      blanks: [{ answers: ['1'] }, { answers: ['-6'] }],
      explanation: 'The characteristic polynomial must be $(\\lambda - 3)(\\lambda + 2) = \\lambda^2 - \\lambda - 6$. Comparing with $\\lambda^2 - (\\operatorname{tr} A)\\lambda + \\det A$ gives $\\operatorname{tr} A = 3 + (-2) = 1$ and $\\det A = 3 \\cdot (-2) = -6$. Many different matrices share these values, for example $\\begin{bmatrix} 3 & 0 \\\\ 0 & -2 \\end{bmatrix}$ and $\\begin{bmatrix} 1 & 2 \\\\ 3 & 0 \\end{bmatrix}$.',
    },
    {
      kind: 'error',
      prompt: 'A student finds the eigenvalues of $A = \\begin{bmatrix} 2 & 3 \\\\ 4 & 1 \\end{bmatrix}$. Tap the first line that is wrong.',
      lines: [
        '$\\det(A - \\lambda I) = \\det\\begin{bmatrix} 2 - \\lambda & 3 \\\\ 4 & 1 - \\lambda \\end{bmatrix}$',
        '$= (2 - \\lambda)(1 - \\lambda) + 12$',
        '$= \\lambda^2 - 3\\lambda + 14$',
        'The discriminant is $9 - 56 < 0$, so $A$ has no real eigenvalues.',
      ],
      errorLines: [2],
      explanation: 'A $2 \\times 2$ determinant is $ad - bc$: the off-diagonal product is **subtracted**. Correctly, $(2 - \\lambda)(1 - \\lambda) - 12 = \\lambda^2 - 3\\lambda - 10 = (\\lambda - 5)(\\lambda + 2)$, so the eigenvalues are $5$ and $-2$. A quick trace/determinant check would have caught it: $\\det A = 2 - 12 = -10$, a negative product, which forces two real eigenvalues of opposite sign.',
    },
    {
      kind: 'concept',
      title: 'Larger matrices and algebraic multiplicity',
      blocks: [
        {
          type: 'p',
          text: 'For a $3 \\times 3$ matrix, $\\det(A - \\lambda I)$ is a cubic in $\\lambda$. Finding the roots of a general cubic by hand is painful, so textbook (and exam) examples are chosen so the determinant **factors as you compute it**: a triangular matrix, or a row or column with zeros to expand along with [[cofactor-expansion]].',
        },
        {
          type: 'derivation',
          title: 'Eigenvalues of $A = \\begin{bmatrix} 2 & 0 & 0 \\\\ 4 & 1 & 2 \\\\ 3 & 1 & 2 \\end{bmatrix}$',
          steps: [
            { tex: '\\det(A - \\lambda I) = \\begin{vmatrix} 2 - \\lambda & 0 & 0 \\\\ 4 & 1 - \\lambda & 2 \\\\ 3 & 1 & 2 - \\lambda \\end{vmatrix}', why: 'Subtract $\\lambda$ on the diagonal. Row 1 has two zeros, so expand along it.' },
            { tex: '= (2 - \\lambda)\\begin{vmatrix} 1 - \\lambda & 2 \\\\ 1 & 2 - \\lambda \\end{vmatrix}', why: 'Cofactor expansion along row 1: the two zero entries contribute nothing, and the $(1,1)$ cofactor has sign $+$.' },
            { tex: '= (2 - \\lambda)\\big[(1 - \\lambda)(2 - \\lambda) - 2\\big]', why: '$2 \\times 2$ determinant of the remaining block.' },
            { tex: '= (2 - \\lambda)(\\lambda^2 - 3\\lambda)', why: '$(1 - \\lambda)(2 - \\lambda) - 2 = 2 - 3\\lambda + \\lambda^2 - 2 = \\lambda^2 - 3\\lambda$.' },
            { tex: '= (2 - \\lambda)\\,\\lambda\\,(\\lambda - 3)', why: 'Factor $\\lambda$ out of $\\lambda^2 - 3\\lambda$. Keep the polynomial factored; never multiply it out just to factor it again.' },
          ],
          result: 'The eigenvalues are $2$, $0$ and $3$. Because $0$ is one of them, $A$ is singular (indeed $\\det A = 2\\,(1 \\cdot 2 - 2 \\cdot 1) = 0$).',
        },
        {
          type: 'p',
          text: 'Roots of a polynomial can repeat. For the triangular matrix $\\begin{bmatrix} 4 & 1 & -2 \\\\ 0 & 4 & 7 \\\\ 0 & 0 & -1 \\end{bmatrix}$ the characteristic polynomial is $(4 - \\lambda)^2(-1 - \\lambda)$, so $4$ is a *double* root.',
        },
        {
          type: 'definition',
          term: 'Algebraic multiplicity',
          text: 'The [[algebraic-multiplicity]] of an eigenvalue $\\lambda_0$ is the number of times $(\\lambda - \\lambda_0)$ appears as a factor of the characteristic polynomial. Above, $4$ has algebraic multiplicity $2$ and $-1$ has algebraic multiplicity $1$.',
        },
        {
          type: 'p',
          text: 'Because the characteristic polynomial of an $n \\times n$ matrix has degree $n$, the algebraic multiplicities add up to at most $n$, and to exactly $n$ once complex roots are included. So an $n \\times n$ matrix has at most $n$ distinct eigenvalues.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Sign conventions',
          text: 'Some books define the characteristic polynomial as $\\det(\\lambda I - A)$ instead. It differs from $\\det(A - \\lambda I)$ only by the factor $(-1)^n$, so it has the same roots and multiplicities. For $3 \\times 3$ matrices, $\\det(A - \\lambda I)$ starts with $-\\lambda^3$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'How software really finds eigenvalues',
          text: 'Numerical libraries (Eigen, LAPACK, NumPy) **never** form the characteristic polynomial: the roots of a high-degree polynomial are extremely sensitive to rounding in its coefficients. They use iterative methods such as the QR algorithm on the matrix itself. The characteristic equation is the right tool for theory and small hand calculations, not for a $1000 \\times 1000$ stiffness matrix.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find all eigenvalues of $A = \\begin{bmatrix} 3 & 0 & 0 \\\\ 5 & 1 & 4 \\\\ -2 & 2 & 3 \\end{bmatrix}$. Enter them separated by commas.',
      hint: 'Expand along row 1, then factor the $2 \\times 2$ block\'s determinant.',
      label: '$\\lambda =$',
      answer: ['3', '5', '-1'],
      explanation: 'Expanding along row 1: $\\det(A - \\lambda I) = (3 - \\lambda)\\big[(1 - \\lambda)(3 - \\lambda) - 8\\big] = (3 - \\lambda)(\\lambda^2 - 4\\lambda - 5) = (3 - \\lambda)(\\lambda - 5)(\\lambda + 1)$. Check with the trace: $3 + 5 + (-1) = 7 = 3 + 1 + 3$. ✓',
    },
    {
      kind: 'numeric',
      prompt: 'What is the algebraic multiplicity of the eigenvalue $4$ for $A = \\begin{bmatrix} 4 & 0 & 0 \\\\ 2 & -1 & 0 \\\\ 5 & 3 & 4 \\end{bmatrix}$?',
      hint: 'The matrix is lower triangular, so the characteristic polynomial is the product of $(a_{ii} - \\lambda)$.',
      label: 'multiplicity $=$',
      answer: '2',
      explanation: 'For a triangular matrix, $\\det(A - \\lambda I) = (4 - \\lambda)(-1 - \\lambda)(4 - \\lambda) = (4 - \\lambda)^2(-1 - \\lambda)$. The factor $(\\lambda - 4)$ appears twice, so $4$ has algebraic multiplicity $2$ (and $-1$ has multiplicity $1$; together $2 + 1 = 3 = n$).',
    },
    {
      kind: 'concept',
      title: 'Similar matrices share a characteristic polynomial',
      blocks: [
        {
          type: 'p',
          text: 'In the Vector Spaces unit you saw that one linear transformation looks like different matrices in different coordinate systems. If $P$ is an invertible matrix (think: a change of basis), the matrix $B = P^{-1}AP$ describes the same map as $A$, written in the coordinates given by the columns of $P$.',
        },
        {
          type: 'definition',
          term: 'Similar matrices',
          text: '$n \\times n$ matrices $A$ and $B$ are [[similar-matrices|similar]] if there is an invertible matrix $P$ with $B = P^{-1}AP$ (equivalently $A = PBP^{-1}$).',
        },
        {
          type: 'p',
          text: 'Eigenvalues describe the transformation itself ("this direction is stretched by 4"), not the coordinates we happen to use. So similar matrices ought to have the same eigenvalues. They do, and even more is true:',
        },
        {
          type: 'derivation',
          title: 'Theorem: if $B = P^{-1}AP$, then $\\det(B - \\lambda I) = \\det(A - \\lambda I)$',
          steps: [
            { tex: 'B - \\lambda I = P^{-1}AP - \\lambda P^{-1}P', why: 'Write $I = P^{-1}P$, so that both terms have $P^{-1}$ on the left and $P$ on the right.' },
            { tex: '= P^{-1}(A - \\lambda I)P', why: 'Factor: $P^{-1}AP - P^{-1}(\\lambda I)P = P^{-1}(A - \\lambda I)P$, because $\\lambda I$ commutes with everything.' },
            { tex: '\\det(B - \\lambda I) = \\det(P^{-1})\\,\\det(A - \\lambda I)\\,\\det(P)', why: 'The determinant of a product is the product of the determinants.' },
            { tex: '= \\det(A - \\lambda I)', why: '$\\det(P^{-1})\\det(P) = \\det(P^{-1}P) = \\det I = 1$, and determinants are numbers, so they can be reordered.' },
          ],
          result: 'Similar matrices have the same characteristic polynomial, hence the same eigenvalues with the same algebraic multiplicities (and the same trace and determinant).',
        },
        {
          type: 'p',
          text: 'Example: with $P = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ and $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$, you get $B = P^{-1}AP = \\begin{bmatrix} -2 & -2 \\\\ 3 & 5 \\end{bmatrix}$. Different entries, yet $\\operatorname{tr} B = 3$ and $\\det B = -10 + 6 = -4$, so $\\det(B - \\lambda I) = \\lambda^2 - 3\\lambda - 4$, exactly as for $A$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two traps',
          text: '**Similar is not row equivalent.** Row operations change eigenvalues: $\\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix} \\xrightarrow{R_2 - 3R_1} \\begin{bmatrix} 1 & 2 \\\\ 0 & -4 \\end{bmatrix}$ has eigenvalues $1$ and $-4$, not $4$ and $-1$.\n\n**The converse is false.** $\\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix}$ and $2I$ have the same characteristic polynomial $(\\lambda - 2)^2$, but they are not similar: $P^{-1}(2I)P = 2I$ for every $P$, so $2I$ is similar only to itself.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'Row reducing $A$ to an echelon form $U$ does not change the eigenvalues, so the eigenvalues of $A$ can be read off the diagonal of $U$.',
      answer: false,
      explanation: 'Row operations preserve the solution set of $A\\mathbf{x} = \\mathbf{b}$, not the eigenvalues. Example: $\\begin{bmatrix} 1 & 2 \\\\ 3 & 2 \\end{bmatrix}$ has eigenvalues $4$ and $-1$, but after $R_2 - 3R_1$ the triangular matrix $\\begin{bmatrix} 1 & 2 \\\\ 0 & -4 \\end{bmatrix}$ has eigenvalues $1$ and $-4$. Eigenvalues are preserved by *similarity* $P^{-1}AP$, which changes coordinates on both sides, not by multiplying on the left alone.',
    },
    {
      kind: 'mcq',
      prompt: 'Suppose $B = P^{-1}AP$ for an invertible $P$. Which of these must $A$ and $B$ have in common?',
      options: [
        {
          text: 'The same eigenvectors',
          why: 'Not in general. If $A\\mathbf{v} = \\lambda\\mathbf{v}$ then $B(P^{-1}\\mathbf{v}) = \\lambda(P^{-1}\\mathbf{v})$: the eigenvectors of $B$ are $P^{-1}\\mathbf{v}$, the same directions *written in new coordinates*.',
        },
        {
          text: 'The same characteristic polynomial',
          correct: true,
          why: '$\\det(B - \\lambda I) = \\det(P^{-1})\\det(A - \\lambda I)\\det(P) = \\det(A - \\lambda I)$.',
        },
        {
          text: 'The same diagonal entries',
          why: 'In the example on the card, $A$ has diagonal $1, 2$ while $B$ has $-2, 5$. Only their *sums* (the trace) agree.',
        },
        {
          text: 'The same determinant, but possibly different eigenvalues',
          why: 'They do share the determinant, but they share the eigenvalues too: the whole characteristic polynomial is the same.',
        },
      ],
      explanation: 'Similarity is a change of coordinates, so everything intrinsic to the transformation survives: characteristic polynomial, eigenvalues with multiplicities, trace, determinant, rank. What changes are coordinate-dependent things: the individual entries and the coordinate description of the eigenvectors.',
    },
    {
      kind: 'concept',
      title: 'Rotations: when the eigenvalues are complex',
      blocks: [
        {
          type: 'p',
          text: 'Now the puzzle from the previous lesson. A rotation of the plane by an angle $\\theta$ that is not $0^\\circ$ or $180^\\circ$ turns every nonzero vector, so it has no real eigenvectors. What does the characteristic equation say?',
        },
        {
          type: 'derivation',
          title: 'Eigenvalues of the [[rotation-matrix]] $R_\\theta = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$',
          steps: [
            { tex: '\\det(R_\\theta - \\lambda I) = (\\cos\\theta - \\lambda)^2 + \\sin^2\\theta', why: '$ad - bc$ with $bc = (-\\sin\\theta)(\\sin\\theta) = -\\sin^2\\theta$, so subtracting it adds $\\sin^2\\theta$.' },
            { tex: '= \\lambda^2 - 2\\cos\\theta\\,\\lambda + 1', why: 'Expand and use $\\cos^2\\theta + \\sin^2\\theta = 1$. (Trace $2\\cos\\theta$, determinant $1$.)' },
            { tex: '\\lambda = \\frac{2\\cos\\theta \\pm \\sqrt{4\\cos^2\\theta - 4}}{2} = \\cos\\theta \\pm \\sqrt{-\\sin^2\\theta}', why: 'Quadratic formula; then $\\cos^2\\theta - 1 = -\\sin^2\\theta$.' },
            { tex: '\\lambda = \\cos\\theta \\pm i\\sin\\theta', why: 'If $\\sin\\theta \\ne 0$ the discriminant is negative, so the roots are a [[complex-conjugate]] pair.' },
          ],
          result: 'A rotation by $\\theta$ has eigenvalues $\\cos\\theta \\pm i\\sin\\theta$: complex numbers of modulus $1$ and argument $\\pm\\theta$. For $\\theta = 90^\\circ$, $\\lambda^2 + 1 = 0$ and $\\lambda = \\pm i$.',
        },
        {
          type: 'graph',
          x: [-1.6, 1.6],
          y: [-1.6, 1.6],
          equal: true,
          parametric: [{ x: 'cos(t)', y: 'sin(t)', t: [0, '2pi'], color: 'gray', dashed: true }],
          segments: [
            { from: [0, 0], to: ['cos(d*pi/180)', 'sin(d*pi/180)'], arrow: true, color: 'blue', label: 'x' },
            { from: [0, 0], to: ['cos((d + a)*pi/180)', 'sin((d + a)*pi/180)'], arrow: true, color: 'red', label: 'Rx' },
          ],
          sliders: [
            { name: 'a', min: 0, max: 360, step: 1, value: 90, label: 'rotation angle $\\theta$ (degrees)' },
            { name: 'd', min: 0, max: 360, step: 1, value: 30, label: 'direction of $\\mathbf{x}$ (degrees)' },
          ],
          readouts: [{ label: '$\\det[\\,\\mathbf{x} \\;\\; R\\mathbf{x}\\,] = \\sin\\theta =$', expr: 'sin(a*pi/180)', digits: 3 }],
          caption: 'Sweep the direction of $\\mathbf{x}$: the readout never changes, because every vector is turned by the same angle. It is $0$ (the arrows line up) only when $\\theta = 0^\\circ$ ($\\lambda = 1$) or $\\theta = 180^\\circ$ ($\\lambda = -1$).',
        },
        {
          type: 'p',
          text: 'More generally, $C = \\begin{bmatrix} a & -b \\\\ b & a \\end{bmatrix}$ has characteristic polynomial $\\lambda^2 - 2a\\lambda + (a^2 + b^2)$ and eigenvalues $a \\pm bi$. Writing $r = \\sqrt{a^2 + b^2} = |\\lambda|$, $C = r R_\\varphi$ where $\\varphi$ is the argument of $a + bi$: **scale by $|\\lambda|$ and rotate by $\\arg \\lambda$**. For example $\\begin{bmatrix} 1 & -1 \\\\ 1 & 1 \\end{bmatrix}$ has $\\lambda = 1 \\pm i$, so it scales by $\\sqrt{2}$ and rotates by $45^\\circ$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why complex eigenvalues come in conjugate pairs',
          text: 'A real matrix has a characteristic polynomial with real coefficients, and the non-real roots of a real polynomial come in conjugate pairs $a \\pm bi$. The eigenvectors are complex too (vectors in $\\mathbb{C}^2$), so they cannot be drawn as arrows in the plane. What you *can* see is their effect: the modulus $|\\lambda|$ is how much each step scales and the argument is how much it turns.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Complex numbers are 2D rotations',
          text: 'Multiplying by $a + bi$ is exactly the matrix $\\begin{bmatrix} a & -b \\\\ b & a \\end{bmatrix}$, which is why some 2D engines store an orientation as a unit complex number $(\\cos\\theta, \\sin\\theta)$ instead of an angle. And when a simulation step behaves like multiplication by $\\lambda$ with $|\\lambda| > 1$, every step spirals outward: the last lesson of this unit uses that to explain why some physics integrators blow up.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'What are the eigenvalues of $R = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ (rotation by $90^\\circ$)?',
      options: [
        {
          text: '$1$ and $-1$',
          why: 'Those would mean some direction is kept or flipped. A quarter turn does neither to any nonzero vector.',
        },
        {
          text: '$0$, repeated',
          why: 'Then $R$ would be singular, but $\\det R = 0 \\cdot 0 - (-1)(1) = 1$.',
        },
        {
          text: 'It has no eigenvalues at all',
          why: 'It has no *real* eigenvalues, but the characteristic polynomial $\\lambda^2 + 1$ still has two complex roots.',
        },
        {
          text: '$i$ and $-i$',
          correct: true,
          why: '$\\det(R - \\lambda I) = \\lambda^2 + 1$, whose roots are $\\pm i$.',
        },
      ],
      explanation: '$\\det(R - \\lambda I) = (-\\lambda)(-\\lambda) - (-1)(1) = \\lambda^2 + 1 = 0$ gives $\\lambda = \\pm i = \\cos 90^\\circ \\pm i \\sin 90^\\circ$. Their sum is $0 = \\operatorname{tr} R$ and their product is $-i^2 = 1 = \\det R$, as the trace/determinant rule requires.',
    },
    {
      kind: 'numeric',
      prompt: 'The matrix $C = \\begin{bmatrix} 3 & -4 \\\\ 4 & 3 \\end{bmatrix}$ has complex eigenvalues $a \\pm bi$. By what factor does $C$ scale every vector? (That is, find $|\\lambda|$.)',
      hint: 'For $\\begin{bmatrix} a & -b \\\\ b & a \\end{bmatrix}$ the eigenvalues are $a \\pm bi$, and $|\\lambda| = \\sqrt{a^2 + b^2}$.',
      label: '$|\\lambda| =$',
      answer: '5',
      explanation: '$\\det(C - \\lambda I) = (3 - \\lambda)^2 + 16 = \\lambda^2 - 6\\lambda + 25$, whose roots are $\\lambda = 3 \\pm 4i$. Their modulus is $\\sqrt{3^2 + 4^2} = 5$. So $C = 5R_\\varphi$ with $\\varphi = \\arctan\\frac{4}{3} \\approx 53.13^\\circ$: every vector is rotated by about $53^\\circ$ and stretched by $5$. Note $|\\lambda|^2 = 25 = \\det C$.',
    },
    {
      kind: 'order',
      prompt: 'Order the steps for finding all eigenvalues and eigenvectors of a matrix by hand.',
      lines: [
        'Write $A - \\lambda I$ with $\\lambda$ as an unknown',
        'Compute $\\det(A - \\lambda I)$, keeping it factored where possible',
        'Solve $\\det(A - \\lambda I) = 0$ to get the eigenvalues and their multiplicities',
        'For each eigenvalue, row reduce $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ to find its eigenspace',
      ],
      distractors: ['Set $\\det A = \\lambda$ and solve for $\\lambda$'],
      explanation: 'The characteristic equation finds the eigenvalues; the null space of $A - \\lambda I$ then finds the eigenvectors for each one. You need the eigenvalues first, because you cannot form the specific matrix $A - \\lambda I$ to row reduce until you know $\\lambda$. The distractor confuses the determinant of $A$ with the characteristic polynomial.',
    },
  ],
  takeaways: [
    '$\\lambda$ is an eigenvalue of $A$ exactly when $\\det(A - \\lambda I) = 0$: the characteristic equation, a polynomial equation of degree $n$.',
    'For $2 \\times 2$ matrices, $\\det(A - \\lambda I) = \\lambda^2 - (\\operatorname{tr} A)\\lambda + \\det A$, so the eigenvalues sum to the trace and multiply to the determinant.',
    'For $3 \\times 3$ matrices, expand along a row or column with zeros (or use a triangular form) so the polynomial comes out factored; the algebraic multiplicity counts how often each root repeats.',
    'Similar matrices $B = P^{-1}AP$ have the same characteristic polynomial; row-equivalent matrices generally do not.',
    'A rotation by $\\theta$ has complex eigenvalues $\\cos\\theta \\pm i\\sin\\theta$ and no real eigenvectors; for $\\begin{bmatrix} a & -b \\\\ b & a \\end{bmatrix}$, $|\\lambda|$ is the scale and $\\arg\\lambda$ the rotation angle.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — The Characteristic Polynomial',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'The chapter on eigenvalues covers the characteristic polynomial, similarity and complex eigenvalues with interactive figures.',
    },
    {
      title: 'Wikipedia — Characteristic polynomial',
      url: 'https://en.wikipedia.org/wiki/Characteristic_polynomial',
      source: 'wikipedia',
      note: 'Formal properties, including why the trace and determinant appear among its coefficients for every $n$.',
    },
    {
      title: 'MIT OCW 18.06 — Linear Algebra (Strang)',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lecture 21, "Eigenvalues and Eigenvectors", derives $\\det(A - \\lambda I) = 0$ and shows the rotation example.',
    },
    {
      title: 'Khan Academy — Linear algebra',
      url: 'https://www.khanacademy.org/math/linear-algebra',
      source: 'khan',
      note: 'The "Eigen-everything" videos work through $3 \\times 3$ characteristic polynomials step by step.',
    },
  ],
};
