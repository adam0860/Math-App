import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-least-squares',
  title: 'Least-Squares Problems',
  summary: 'When Ax = b has no solution, find the x that comes closest: project b onto Col A, solve the normal equations, and fit lines and curves to noisy data.',
  minutes: 19,
  objectives: [
    'Explain what a least-squares solution of an inconsistent system $A\\mathbf{x} = \\mathbf{b}$ is, geometrically and algebraically',
    'Derive the normal equations $A^{T}A\\hat{\\mathbf{x}} = A^{T}\\mathbf{b}$ from "the residual is orthogonal to $\\operatorname{Col} A$"',
    'Fit a line $y = \\beta_0 + \\beta_1 x$, a parabola, or any model linear in its parameters to data',
    'Solve least-squares problems with $R\\hat{\\mathbf{x}} = Q^{T}\\mathbf{b}$ and explain why QR is more stable than the normal equations',
    'Recognise least squares in game and engine work: smoothing sensors, fitting trajectories, calibrating input curves',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'When $A\\mathbf{x} = \\mathbf{b}$ has no solution',
      blocks: [
        {
          type: 'p',
          text: 'Real data does not line up perfectly. Measure four points that "should" lie on a line and you get four equations in two unknowns (slope and intercept) that no single line satisfies. The system is an [[inconsistent-system]]. Throwing up our hands is not an option, so we change the question: instead of an $\\mathbf{x}$ with $A\\mathbf{x} = \\mathbf{b}$, find the $\\mathbf{x}$ that makes $A\\mathbf{x}$ **as close as possible** to $\\mathbf{b}$.',
        },
        {
          type: 'definition',
          term: 'Least-squares solution',
          text: 'If $A$ is $m \\times n$ and $\\mathbf{b}$ is in $\\mathbb{R}^m$, a [[least-squares-solution]] of $A\\mathbf{x} = \\mathbf{b}$ is a vector $\\hat{\\mathbf{x}}$ in $\\mathbb{R}^n$ such that\n\n$$\\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\| \\le \\|\\mathbf{b} - A\\mathbf{x}\\| \\quad \\text{for all } \\mathbf{x} \\in \\mathbb{R}^n.$$\n\nThe vector $\\mathbf{b} - A\\hat{\\mathbf{x}}$ is the [[la-residual-vector|residual]] and its length is the **least-squares error**.',
        },
        {
          type: 'p',
          text: 'The name: $\\|\\mathbf{b} - A\\mathbf{x}\\|^2$ is a **sum of squares** of the $m$ individual errors, and we make it least. Now the geometry. As $\\mathbf{x}$ ranges over $\\mathbb{R}^n$, $A\\mathbf{x}$ ranges over the [[column-space]] $\\operatorname{Col} A$. So we want the point of the subspace $\\operatorname{Col} A$ closest to $\\mathbf{b}$, and the Best Approximation Theorem from two lessons ago names it: $\\hat{\\mathbf{b}} = \\operatorname{proj}_{\\operatorname{Col} A}\\mathbf{b}$.',
        },
        {
          type: 'graph',
          x: [-1.5, 4.5],
          y: [-1, 3.5],
          equal: true,
          functions: [{ expr: 'x/2', label: '$\\operatorname{Col} A = \\operatorname{Span}\\{(2, 1)\\}$', color: 'gray' }],
          segments: [
            { from: [0, 0], to: [1, 3], arrow: true, label: 'b', color: 'blue' },
            { from: [0, 0], to: ['2*s', 's'], arrow: true, label: 'Ax', color: 'green' },
            { from: ['2*s', 's'], to: [1, 3], dashed: true, color: 'red', label: 'b − Ax' },
          ],
          sliders: [{ name: 's', min: -0.5, max: 2.5, step: 0.05, value: 2, label: '$x$ (the single unknown)' }],
          readouts: [{ label: 'error $\\|\\mathbf{b} - A\\mathbf{x}\\| =$', expr: 'sqrt((1 - 2*s)^2 + (3 - s)^2)', digits: 3 }],
          caption: '$A = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$, $\\mathbf{b} = \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$: two equations $2x = 1$, $x = 3$, no solution. Slide $x$ to make the red error as short as possible. The minimum, $\\sqrt{5} \\approx 2.236$ at $x = 1$, is exactly where the red segment is **perpendicular** to the line.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why least squares always has an answer',
          text: '$\\operatorname{proj}_{\\operatorname{Col} A}\\mathbf{b}$ lies in $\\operatorname{Col} A$, so $A\\hat{\\mathbf{x}} = \\hat{\\mathbf{b}}$ is **consistent**: at least one $\\hat{\\mathbf{x}}$ exists for every $A$ and $\\mathbf{b}$. If $A\\mathbf{x} = \\mathbf{b}$ happened to be consistent all along, then $\\hat{\\mathbf{b}} = \\mathbf{b}$, the error is $0$, and least-squares solutions are just ordinary solutions.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'If $\\hat{\\mathbf{x}}$ is a least-squares solution of an inconsistent system $A\\mathbf{x} = \\mathbf{b}$, then $A\\hat{\\mathbf{x}} = \\mathbf{b}$.',
      answer: false,
      explanation: 'An inconsistent system has no exact solution, so $A\\hat{\\mathbf{x}} \\ne \\mathbf{b}$ for every vector, including $\\hat{\\mathbf{x}}$. What is true is $A\\hat{\\mathbf{x}} = \\hat{\\mathbf{b}}$, the projection of $\\mathbf{b}$ onto $\\operatorname{Col} A$, and $\\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\|$ is as small as possible but positive. In the graph above the smallest error is $\\sqrt{5}$, not $0$.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'The normal equations',
      blocks: [
        {
          type: 'p',
          text: 'Computing $\\hat{\\mathbf{b}}$ first would need an orthogonal basis of $\\operatorname{Col} A$. There is a shortcut that goes straight to $\\hat{\\mathbf{x}}$. It uses only the defining property of a projection: the leftover $\\mathbf{b} - A\\hat{\\mathbf{x}}$ is **orthogonal to $\\operatorname{Col} A$**.',
        },
        {
          type: 'derivation',
          title: 'From perpendicular residual to the normal equations',
          steps: [
            { tex: '\\mathbf{b} - A\\hat{\\mathbf{x}} \\perp \\operatorname{Col} A', why: 'By the Orthogonal Decomposition Theorem, $\\mathbf{b} - \\hat{\\mathbf{b}}$ lies in $(\\operatorname{Col} A)^{\\perp}$, and $\\hat{\\mathbf{b}} = A\\hat{\\mathbf{x}}$.' },
            { tex: '\\mathbf{a}_j \\cdot (\\mathbf{b} - A\\hat{\\mathbf{x}}) = 0 \\quad \\text{for } j = 1, \\dots, n', why: 'Orthogonal to a subspace means orthogonal to each vector of a spanning set: here the columns $\\mathbf{a}_j$ of $A$.' },
            { tex: 'A^{T}(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0}', why: 'Entry $j$ of $A^{T}\\mathbf{w}$ is (row $j$ of $A^{T}$) $\\cdot\\, \\mathbf{w}$ = $\\mathbf{a}_j \\cdot \\mathbf{w}$. So the $n$ dot products stack into one matrix equation. (Equivalently: $\\mathbf{b} - A\\hat{\\mathbf{x}}$ is in $\\operatorname{Nul} A^{T} = (\\operatorname{Col} A)^{\\perp}$.)' },
            { tex: 'A^{T}A\\hat{\\mathbf{x}} = A^{T}\\mathbf{b}', why: 'Distribute and move $A^{T}A\\hat{\\mathbf{x}}$ to the other side.' },
          ],
          result: 'These are the [[normal-equations]]. Every least-squares solution satisfies them, and every solution of them is a least-squares solution.',
        },
        {
          type: 'theorem',
          name: 'Least-squares solutions',
          text: 'The least-squares solutions of $A\\mathbf{x} = \\mathbf{b}$ are exactly the solutions of $A^{T}A\\mathbf{x} = A^{T}\\mathbf{b}$, a consistent $n \\times n$ system. The solution is **unique** if and only if the columns of $A$ are linearly independent, which happens if and only if $A^{T}A$ is invertible. Then\n\n$$\\hat{\\mathbf{x}} = (A^{T}A)^{-1}A^{T}\\mathbf{b}.$$',
        },
        {
          type: 'derivation',
          title: 'Least-squares solution of $A\\mathbf{x} = \\mathbf{b}$ with $A = \\begin{bmatrix} 4 & 0 \\\\ 0 & 2 \\\\ 1 & 1 \\end{bmatrix}$, $\\mathbf{b} = \\begin{bmatrix} 2 \\\\ 0 \\\\ 11 \\end{bmatrix}$',
          steps: [
            { tex: 'A^{T}A = \\begin{bmatrix} 4 & 0 & 1 \\\\ 0 & 2 & 1 \\end{bmatrix}\\begin{bmatrix} 4 & 0 \\\\ 0 & 2 \\\\ 1 & 1 \\end{bmatrix} = \\begin{bmatrix} 17 & 1 \\\\ 1 & 5 \\end{bmatrix}', why: 'Entry $(i, j)$ is $\\mathbf{a}_i \\cdot \\mathbf{a}_j$: $16 + 0 + 1 = 17$, $0 + 0 + 1 = 1$, $0 + 4 + 1 = 5$.' },
            { tex: 'A^{T}\\mathbf{b} = \\begin{bmatrix} 8 + 0 + 11 \\\\ 0 + 0 + 11 \\end{bmatrix} = \\begin{bmatrix} 19 \\\\ 11 \\end{bmatrix}', why: 'Entry $j$ is $\\mathbf{a}_j \\cdot \\mathbf{b}$.' },
            { tex: '\\hat{\\mathbf{x}} = \\frac{1}{84}\\begin{bmatrix} 5 & -1 \\\\ -1 & 17 \\end{bmatrix}\\begin{bmatrix} 19 \\\\ 11 \\end{bmatrix} = \\frac{1}{84}\\begin{bmatrix} 84 \\\\ 168 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}', why: '$\\det(A^{T}A) = 85 - 1 = 84$; use the $2 \\times 2$ inverse formula (swap the diagonal, negate the off-diagonal, divide by the determinant).' },
            { tex: '\\mathbf{b} - A\\hat{\\mathbf{x}} = \\begin{bmatrix} 2 \\\\ 0 \\\\ 11 \\end{bmatrix} - \\begin{bmatrix} 4 \\\\ 4 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} -2 \\\\ -4 \\\\ 8 \\end{bmatrix}', why: 'The residual. Check orthogonality to the columns: $(4, 0, 1) \\cdot (-2, -4, 8) = -8 + 8 = 0$ and $(0, 2, 1) \\cdot (-2, -4, 8) = -8 + 8 = 0$.' },
            { tex: '\\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\| = \\sqrt{4 + 16 + 64} = \\sqrt{84} \\approx 9.17', why: 'The least-squares error: no choice of $\\mathbf{x}$ gets closer to $\\mathbf{b}$.' },
          ],
          result: '$\\hat{\\mathbf{x}} = (1, 2)$ with least-squares error $\\sqrt{84} = 2\\sqrt{21}$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'You cannot cancel $A^{T}$',
          text: 'It is tempting to "cancel" $A^{T}$ from both sides of $A^{T}A\\hat{\\mathbf{x}} = A^{T}\\mathbf{b}$ and get $A\\hat{\\mathbf{x}} = \\mathbf{b}$. That is only legal if $A^{T}$ is invertible, and a tall $A^{T}$ ($n \\times m$ with $n < m$) never is: it has a nontrivial null space, and $\\mathbf{b} - A\\hat{\\mathbf{x}}$ lives there.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Find the least-squares solution of $A\\mathbf{x} = \\mathbf{b}$ for $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{bmatrix}$, $\\mathbf{b} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$. (Fractions such as 2/3 are fine.)',
      template: '$\\hat{\\mathbf{x}} = ($ ___ $,$ ___ $)$',
      blanks: [{ answers: ['1/3'] }, { answers: ['1/3'] }],
      hint: '$A^{T}A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$ and $A^{T}\\mathbf{b} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$.',
      explanation: 'The normal equations are $2x_1 + x_2 = 1$ and $x_1 + 2x_2 = 1$. Subtracting gives $x_1 = x_2$, then $3x_1 = 1$, so $\\hat{\\mathbf{x}} = \\left(\\frac13, \\frac13\\right)$. (The original equations $x_1 = 1$, $x_2 = 1$, $x_1 + x_2 = 0$ clearly cannot all hold; least squares compromises.)',
    },
    {
      kind: 'numeric',
      prompt: 'For the same system ($A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{bmatrix}$, $\\mathbf{b} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$, $\\hat{\\mathbf{x}} = (\\frac13, \\frac13)$), find the least-squares error $\\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\|$.',
      hint: 'First compute $A\\hat{\\mathbf{x}}$, then the residual, then its length.',
      label: '$\\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\| =$',
      answer: '2/sqrt(3)',
      answerTex: '\\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}',
      explanation: '$A\\hat{\\mathbf{x}} = \\left(\\frac13, \\frac13, \\frac23\\right)$, so the residual is $\\left(\\frac23, \\frac23, -\\frac23\\right)$ with length $\\frac23\\sqrt{3} = \\frac{2}{\\sqrt{3}} \\approx 1.155$. Check it is perpendicular to both columns: $(1, 0, 1) \\cdot (\\frac23, \\frac23, -\\frac23) = 0$ and $(0, 1, 1) \\cdot (\\frac23, \\frac23, -\\frac23) = 0$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Fitting a line to data',
      blocks: [
        {
          type: 'p',
          text: 'Given data points $(x_1, y_1), \\dots, (x_m, y_m)$, we want the line $y = \\beta_0 + \\beta_1 x$ that fits best. Each point gives one equation $\\beta_0 + \\beta_1 x_i = y_i$ in the unknowns $\\beta_0, \\beta_1$. Stack them:',
        },
        {
          type: 'math',
          tex: 'X\\boldsymbol{\\beta} = \\mathbf{y}: \\qquad \\begin{bmatrix} 1 & x_1 \\\\ 1 & x_2 \\\\ \\vdots & \\vdots \\\\ 1 & x_m \\end{bmatrix}\\begin{bmatrix} \\beta_0 \\\\ \\beta_1 \\end{bmatrix} = \\begin{bmatrix} y_1 \\\\ y_2 \\\\ \\vdots \\\\ y_m \\end{bmatrix}',
          caption: '$X$ is the [[la-design-matrix]], $\\boldsymbol{\\beta}$ the parameter vector, $\\mathbf{y}$ the observation vector.',
        },
        {
          type: 'p',
          text: 'The residual entry $y_i - (\\beta_0 + \\beta_1 x_i)$ is the **vertical** distance from point $i$ to the line, so least squares minimizes the sum of squared vertical distances. The best line is the least-squares solution of $X\\boldsymbol{\\beta} = \\mathbf{y}$, called the **least-squares line** or regression line. Try to beat it by hand:',
        },
        {
          type: 'graph',
          x: [-0.5, 3.8],
          y: [-0.5, 5],
          functions: [
            { expr: 'c + m*x', label: 'your line $y = c + mx$', color: 'orange' },
            { expr: '0.5 + x', label: 'least-squares line $y = 0.5 + x$', color: 'green', dashed: true },
          ],
          points: [
            { x: 0, y: 1, label: '(0, 1)', color: 'blue' },
            { x: 1, y: 1, label: '(1, 1)', color: 'blue' },
            { x: 2, y: 2, label: '(2, 2)', color: 'blue' },
            { x: 3, y: 4, label: '(3, 4)', color: 'blue' },
          ],
          segments: [
            { from: [0, 1], to: [0, 'c'], color: 'red' },
            { from: [1, 1], to: [1, 'c + m'], color: 'red' },
            { from: [2, 2], to: [2, 'c + 2*m'], color: 'red' },
            { from: [3, 4], to: [3, 'c + 3*m'], color: 'red' },
          ],
          sliders: [
            { name: 'c', min: -1, max: 3, step: 0.05, value: 2, label: 'intercept $c$' },
            { name: 'm', min: -0.5, max: 2, step: 0.05, value: 0.5, label: 'slope $m$' },
          ],
          readouts: [
            { label: 'your sum of squared errors', expr: '(1 - c)^2 + (1 - c - m)^2 + (2 - c - 2*m)^2 + (4 - c - 3*m)^2', digits: 3 },
            { label: 'best possible', expr: '1', digits: 3 },
          ],
          caption: 'The red segments are your residuals. No setting of the sliders gets the total below $1$; you reach it only at $c = 0.5$, $m = 1$.',
        },
        {
          type: 'derivation',
          title: 'Least-squares line for $(0, 1), (1, 1), (2, 2), (3, 4)$',
          steps: [
            { tex: 'X = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\\\ 1 & 3 \\end{bmatrix}, \\quad \\mathbf{y} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 2 \\\\ 4 \\end{bmatrix}', why: 'A column of ones (for $\\beta_0$) and a column of $x$-values (for $\\beta_1$).' },
            { tex: 'X^{T}X = \\begin{bmatrix} m & \\sum x_i \\\\ \\sum x_i & \\sum x_i^2 \\end{bmatrix} = \\begin{bmatrix} 4 & 6 \\\\ 6 & 14 \\end{bmatrix}', why: '$\\sum x_i = 0 + 1 + 2 + 3 = 6$ and $\\sum x_i^2 = 0 + 1 + 4 + 9 = 14$.' },
            { tex: 'X^{T}\\mathbf{y} = \\begin{bmatrix} \\sum y_i \\\\ \\sum x_i y_i \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 17 \\end{bmatrix}', why: '$\\sum y_i = 1 + 1 + 2 + 4 = 8$ and $\\sum x_i y_i = 0 + 1 + 4 + 12 = 17$.' },
            { tex: '\\boldsymbol{\\beta} = \\frac{1}{20}\\begin{bmatrix} 14 & -6 \\\\ -6 & 4 \\end{bmatrix}\\begin{bmatrix} 8 \\\\ 17 \\end{bmatrix} = \\frac{1}{20}\\begin{bmatrix} 10 \\\\ 20 \\end{bmatrix} = \\begin{bmatrix} 1/2 \\\\ 1 \\end{bmatrix}', why: '$\\det(X^{T}X) = 56 - 36 = 20$. Then $112 - 102 = 10$ and $-48 + 68 = 20$.' },
            { tex: '\\mathbf{y} - X\\boldsymbol{\\beta} = \\begin{bmatrix} 1/2 \\\\ -1/2 \\\\ -1/2 \\\\ 1/2 \\end{bmatrix}, \\qquad \\|\\mathbf{y} - X\\boldsymbol{\\beta}\\|^2 = 1', why: 'Residuals at each point; their squares add to $4 \\cdot \\frac14 = 1$, matching the graph. They sum to $0$ (orthogonal to the column of ones), as they always do when the model has an intercept.' },
          ],
          result: 'The least-squares line is $y = 0.5 + x$.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find the least-squares line $y = \\beta_0 + \\beta_1 x$ for the points $(0, 0)$, $(1, 1)$, $(2, 3)$.',
      label: '$y =$',
      answer: '-1/6 + 3x/2',
      answerTex: '-\\tfrac{1}{6} + \\tfrac{3}{2}x',
      hint: '$X^{T}X = \\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}$ and $X^{T}\\mathbf{y} = \\begin{bmatrix} 4 \\\\ 7 \\end{bmatrix}$.',
      explanation: '$\\sum x_i = 3$, $\\sum x_i^2 = 5$, $\\sum y_i = 4$, $\\sum x_i y_i = 0 + 1 + 6 = 7$. With $\\det = 15 - 9 = 6$: $\\beta_0 = \\frac{5 \\cdot 4 - 3 \\cdot 7}{6} = -\\frac16$ and $\\beta_1 = \\frac{-3 \\cdot 4 + 3 \\cdot 7}{6} = \\frac{9}{6} = \\frac32$. So $y = -\\frac16 + \\frac32 x$. Check: residuals $\\frac16, -\\frac13, \\frac16$ sum to $0$.',
    },
    {
      kind: 'error',
      prompt: 'A student fits a line to $(0, 1), (1, 3), (2, 4)$. Tap the first wrong line.',
      lines: [
        'Normal equations: $X^{T}X\\boldsymbol{\\beta} = X^{T}\\mathbf{y}$',
        '$X^{T}X = \\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}$, $\\; X^{T}\\mathbf{y} = \\begin{bmatrix} 8 \\\\ 11 \\end{bmatrix}$',
        '$\\det(X^{T}X) = 15 - 9 = 6$',
        '$\\boldsymbol{\\beta} = \\frac16\\begin{bmatrix} 3 & -3 \\\\ -3 & 5 \\end{bmatrix}\\begin{bmatrix} 8 \\\\ 11 \\end{bmatrix} = \\frac16\\begin{bmatrix} -9 \\\\ 31 \\end{bmatrix}$',
        '$y = -\\frac32 + \\frac{31}{6}x$',
      ],
      errorLines: [4],
      explanation: 'Line 4 negates the off-diagonal entries but forgets to **swap** the diagonal entries. The inverse of $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ is $\\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$, so here $\\frac16\\begin{bmatrix} 5 & -3 \\\\ -3 & 3 \\end{bmatrix}$. Then $\\boldsymbol{\\beta} = \\frac16(40 - 33, -24 + 33) = \\left(\\frac76, \\frac32\\right)$ and the line is $y = \\frac76 + \\frac32 x$. A slope of $\\frac{31}{6} \\approx 5.2$ should have looked suspicious for data that rises $3$ units over $2$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Parabolas and other models',
      blocks: [
        {
          type: 'p',
          text: 'Nothing above required the model to be a line. What matters is that it is **linear in the unknown parameters**. A parabola $y = \\beta_0 + \\beta_1 x + \\beta_2 x^2$ curves in $x$, but each data point still gives an equation that is linear in $\\beta_0, \\beta_1, \\beta_2$. The design matrix just gets a column of $x_i^2$.',
        },
        {
          type: 'derivation',
          title: 'Fit $y = \\beta_0 + \\beta_1 x + \\beta_2 x^2$ to $(-2, 0), (-1, 3), (0, 5), (1, 5), (2, 2)$',
          steps: [
            { tex: 'X = \\begin{bmatrix} 1 & -2 & 4 \\\\ 1 & -1 & 1 \\\\ 1 & 0 & 0 \\\\ 1 & 1 & 1 \\\\ 1 & 2 & 4 \\end{bmatrix}, \\quad \\mathbf{y} = \\begin{bmatrix} 0 \\\\ 3 \\\\ 5 \\\\ 5 \\\\ 2 \\end{bmatrix}', why: 'Row $i$ is $[\\,1 \\;\\; x_i \\;\\; x_i^2\\,]$.' },
            { tex: 'X^{T}X = \\begin{bmatrix} 5 & 0 & 10 \\\\ 0 & 10 & 0 \\\\ 10 & 0 & 34 \\end{bmatrix}, \\quad X^{T}\\mathbf{y} = \\begin{bmatrix} 15 \\\\ 6 \\\\ 16 \\end{bmatrix}', why: 'Entries are sums: $\\sum x_i = \\sum x_i^3 = 0$ (the $x$-values are symmetric about $0$), $\\sum x_i^2 = 10$, $\\sum x_i^4 = 34$; $\\sum y_i = 15$, $\\sum x_iy_i = 6$, $\\sum x_i^2y_i = 16$.' },
            { tex: '10\\beta_1 = 6 \\implies \\beta_1 = \\tfrac{3}{5}', why: 'The middle equation involves only $\\beta_1$, thanks to the zeros.' },
            { tex: '5\\beta_0 + 10\\beta_2 = 15, \\quad 10\\beta_0 + 34\\beta_2 = 16', why: 'The first and third equations.' },
            { tex: '14\\beta_2 = 16 - 30 = -14 \\implies \\beta_2 = -1, \\quad \\beta_0 = 3 - 2\\beta_2 = 5', why: 'Double the first equation and subtract it from the second; then back-substitute.' },
          ],
          result: 'The least-squares parabola is $y = 5 + 0.6x - x^2$.',
        },
        {
          type: 'graph',
          x: [-2.8, 2.8],
          y: [-1.5, 6.5],
          functions: [{ expr: '5 + 0.6x - x^2', label: '$y = 5 + 0.6x - x^2$', color: 'green' }],
          points: [
            { x: -2, y: 0, color: 'blue' },
            { x: -1, y: 3, color: 'blue' },
            { x: 0, y: 5, color: 'blue' },
            { x: 1, y: 5, color: 'blue' },
            { x: 2, y: 2, color: 'blue' },
          ],
          caption: 'The parabola does not pass through every point, but no other parabola has a smaller sum of squared vertical errors.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Centre your data',
          text: 'Choosing $x$-values symmetric about $0$ made the odd power sums vanish and $X^{T}X$ almost diagonal. With real data you can get the same effect by fitting in terms of $x - \\bar{x}$ (subtract the mean). Numerically this also improves conditioning: the columns $1, x, x^2$ become much less parallel.',
        },
        {
          type: 'p',
          text: 'The same template fits $y = \\beta_0 + \\beta_1 \\cos t + \\beta_2 \\sin t$ (a periodic signal), $z = \\beta_0 + \\beta_1 x + \\beta_2 y$ (a plane through 3D points), or a cubic easing curve. Models like $y = Ae^{kx}$ are not linear in $k$, but taking logarithms, $\\ln y = \\ln A + kx$, turns them into a line fit.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'You fit $y = \\beta_0 + \\beta_1 x + \\beta_2 x^2$ to data. What row of the design matrix $X$ does the data point $(3, 7)$ produce?',
      options: [
        { text: '$[\\,1 \\;\\; 3 \\;\\; 9\\,]$', correct: true, why: 'Row $i$ is $[\\,1 \\;\\; x_i \\;\\; x_i^2\\,]$, the coefficients of $\\beta_0, \\beta_1, \\beta_2$ in $\\beta_0 + 3\\beta_1 + 9\\beta_2 = 7$.' },
        { text: '$[\\,1 \\;\\; 3 \\;\\; 7\\,]$', why: 'The $y$-value $7$ never goes into $X$; it is the entry of the observation vector $\\mathbf{y}$ on the right-hand side.' },
        { text: '$[\\,3 \\;\\; 9 \\;\\; 27\\,]$', why: 'This shifts every power up by one ($x, x^2, x^3$) and drops the column of ones that belongs to the constant $\\beta_0$.' },
        { text: '$[\\,1 \\;\\; 3 \\;\\; 6\\,]$', why: 'The last entry is $x^2 = 9$, not $2x = 6$.' },
      ],
      explanation: 'Each data point turns the model into one linear equation in the parameters: $\\beta_0 \\cdot 1 + \\beta_1 \\cdot 3 + \\beta_2 \\cdot 9 = 7$. The coefficients form the row of $X$, and $7$ goes in $\\mathbf{y}$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Least squares with QR',
      blocks: [
        {
          type: 'p',
          text: 'The normal equations are perfect for hand computation, but numerical libraries avoid them. The reason is conditioning. A matrix is [[la-ill-conditioned]] when tiny changes in the input cause large changes in the solution; the **condition number** measures that amplification. Forming $A^{T}A$ **squares** the condition number. If $A$ has condition number $10^{8}$, which is nearly-parallel columns, common in polynomial fits, then $A^{T}A$ has $10^{16}$, and double precision carries only about $16$ significant digits: the answer can be pure noise.',
        },
        {
          type: 'theorem',
          name: 'Least squares via QR',
          tex: 'A = QR \\implies \\hat{\\mathbf{x}} = R^{-1}Q^{T}\\mathbf{b}, \\text{ i.e. solve } R\\hat{\\mathbf{x}} = Q^{T}\\mathbf{b}',
          text: 'For $A$ with linearly independent columns, $Q$ with orthonormal columns and $R$ upper triangular and invertible.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this is the same answer',
          text: 'Substitute $A = QR$ into the normal equations: $A^{T}A = R^{T}Q^{T}QR = R^{T}R$ and $A^{T}\\mathbf{b} = R^{T}Q^{T}\\mathbf{b}$. So $R^{T}R\\hat{\\mathbf{x}} = R^{T}Q^{T}\\mathbf{b}$. $R^{T}$ is invertible (triangular with nonzero diagonal), so it **can** be cancelled, leaving $R\\hat{\\mathbf{x}} = Q^{T}\\mathbf{b}$. We never form $A^{T}A$, so the condition number is never squared.',
        },
        {
          type: 'derivation',
          title: 'Fit a line to $(0, 1), (1, 2), (2, 4)$ with QR',
          steps: [
            { tex: 'X = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{bmatrix}: \\quad \\mathbf{q}_1 = \\tfrac{1}{\\sqrt{3}}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\; r_{11} = \\sqrt{3}', why: 'Gram–Schmidt step 1: normalize the column of ones, whose length is $\\sqrt{3}$.' },
            { tex: 'r_{12} = \\mathbf{q}_1 \\cdot \\mathbf{x}_2 = \\tfrac{3}{\\sqrt{3}} = \\sqrt{3}, \\quad \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}', why: 'Subtract the projection $r_{12}\\mathbf{q}_1 = (1, 1, 1)$ from the second column (this is just centering the $x$-values).' },
            { tex: 'r_{22} = \\|\\mathbf{v}_2\\| = \\sqrt{2}, \\quad \\mathbf{q}_2 = \\tfrac{1}{\\sqrt{2}}\\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\quad R = \\begin{bmatrix} \\sqrt{3} & \\sqrt{3} \\\\ 0 & \\sqrt{2} \\end{bmatrix}', why: 'Normalize and assemble $R$.' },
            { tex: 'Q^{T}\\mathbf{y} = \\begin{bmatrix} (1 + 2 + 4)/\\sqrt{3} \\\\ (-1 + 0 + 4)/\\sqrt{2} \\end{bmatrix} = \\begin{bmatrix} 7/\\sqrt{3} \\\\ 3/\\sqrt{2} \\end{bmatrix}', why: 'Dot each $\\mathbf{q}_j$ with $\\mathbf{y} = (1, 2, 4)$.' },
            { tex: '\\sqrt{2}\\,\\beta_1 = \\tfrac{3}{\\sqrt{2}} \\implies \\beta_1 = \\tfrac{3}{2}', why: 'Back-substitution, bottom row first.' },
            { tex: '\\sqrt{3}\\,\\beta_0 + \\sqrt{3}\\,\\beta_1 = \\tfrac{7}{\\sqrt{3}} \\implies \\beta_0 = \\tfrac{7}{3} - \\tfrac{3}{2} = \\tfrac{5}{6}', why: 'Divide the top row by $\\sqrt{3}$: $\\beta_0 + \\beta_1 = \\frac73$.' },
          ],
          result: '$y = \\frac56 + \\frac32 x$, the same line the normal equations give ($X^{T}X = \\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}$, $X^{T}\\mathbf{y} = \\begin{bmatrix} 7 \\\\ 10 \\end{bmatrix}$).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'In practice',
          text: 'NumPy\'s `lstsq` and Eigen\'s `colPivHouseholderQr().solve(b)` or `bdcSvd(...).solve(b)` use orthogonal factorizations (QR or the SVD from the next lesson), never $(A^{T}A)^{-1}$. For a two-parameter line fit with well-spread $x$-values, the normal equations are fine and are what most game code uses.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Why do numerical libraries solve least-squares problems with QR instead of forming the normal equations $A^{T}A\\hat{\\mathbf{x}} = A^{T}\\mathbf{b}$?',
      options: [
        { text: 'Forming $A^{T}A$ squares the condition number, so rounding errors can be amplified far more', correct: true, why: 'QR works with $A$ itself through an orthogonal $Q$, which does not amplify errors at all.' },
        { text: 'QR gives a different, more accurate least-squares solution in exact arithmetic', why: 'In exact arithmetic the two methods give the identical $\\hat{\\mathbf{x}}$; we derived $R\\hat{\\mathbf{x}} = Q^{T}\\mathbf{b}$ *from* the normal equations. The difference is only in floating-point behaviour.' },
        { text: 'The normal equations only work when $A$ is square', why: 'The normal equations are designed for tall, non-square $A$. $A^{T}A$ is always square ($n \\times n$).' },
        { text: 'QR works even when the columns of $A$ are dependent', why: 'The basic QR factorization needs independent columns (otherwise Gram–Schmidt produces a zero vector). Rank-deficient problems need pivoting or the SVD.' },
      ],
      explanation: 'Both methods solve the same mathematical problem. The difference is numerical: $\\kappa(A^{T}A) = \\kappa(A)^2$, while multiplying by an orthogonal matrix leaves condition numbers unchanged. That is why QR (and the SVD) are the default in serious numerical code.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Least squares in games and engines',
      blocks: [
        {
          type: 'p',
          text: 'Once you recognise the pattern (more equations than unknowns, all linear in the unknowns, noisy data), least squares shows up all over game and engine code.',
        },
        {
          type: 'list',
          items: [
            '**Smoothing sensor data.** Gyroscope, accelerometer and motion-controller readings jitter. Fitting a line (or low-degree polynomial) to the last $N$ samples and reading the fit at the current time gives a smoothed value, and its slope is a far less noisy velocity estimate than subtracting two raw samples. (This sliding-window fit is the Savitzky–Golay filter.)',
            '**Fitting a trajectory.** Track a thrown object\'s height at several times and fit $h(t) = \\beta_0 + \\beta_1 t + \\beta_2 t^2$. Comparing with $h = h_0 + v_0 t - \\frac12 g t^2$ gives the launch speed $\\beta_1$ and the gravity estimate $g = -2\\beta_2$: useful for AI that predicts where a ball will land, or for checking a replay\'s physics.',
            '**Calibrating input curves.** Measure raw analog-stick or trigger values against known physical positions and fit a curve mapping raw readings to the intended $[-1, 1]$ range; the same idea calibrates force-feedback, touch screens and VR tracking.',
            '**Geometry.** Best-fit planes through point clouds (the $z = \\beta_0 + \\beta_1 x + \\beta_2 y$ model), best-fit circles, and estimating a camera\'s matrix from matched points are all least-squares problems.',
          ],
        },
        {
          type: 'code',
          title: 'fit_line.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

struct Point { double x, y; };

int main() {
    std::vector<Point> data = {{0, 1}, {1, 1}, {2, 2}, {3, 4}};

    // Entries of X^T X and X^T y for the model y = b0 + b1 x
    double n = 0, sx = 0, sxx = 0, sy = 0, sxy = 0;
    for (const Point& p : data) {
        n += 1;
        sx += p.x;
        sxx += p.x * p.x;
        sy += p.y;
        sxy += p.x * p.y;
    }

    // Solve the 2x2 normal equations [n sx; sx sxx][b0; b1] = [sy; sxy]
    double det = n * sxx - sx * sx;
    double b0 = (sxx * sy - sx * sxy) / det;
    double b1 = (n * sxy - sx * sy) / det;

    double sse = 0;
    for (const Point& p : data) {
        double r = p.y - (b0 + b1 * p.x);   // residual
        sse += r * r;
    }
    std::printf("y = %.4f + %.4f x\\n", b0, b1);
    std::printf("sum of squared residuals = %.4f\\n", sse);
}`,
          output: `y = 0.5000 + 1.0000 x
sum of squared residuals = 1.0000`,
          annotations: [
            { lines: '10-17', text: 'One pass over the data accumulates the five sums that make up $X^{T}X = \\begin{bmatrix} n & \\sum x \\\\ \\sum x & \\sum x^2 \\end{bmatrix}$ and $X^{T}\\mathbf{y}$. No matrix is ever stored, so this works for millions of points.' },
            { lines: '20-22', text: 'The $2 \\times 2$ inverse formula, exactly as in the worked example. `det` is $0$ only if all $x$-values are equal (dependent columns).' },
            { lines: '24-28', text: 'The least-squares error squared: the number the interactive graph showed as "best possible".' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Outliers',
          text: 'Squaring makes big errors count enormously: one wild sensor glitch $10$ units off contributes $100$ to the sum and drags the whole fit toward it. Robust fitting methods (for example RANSAC, which repeatedly fits small random subsets and keeps the fit most points agree with) exist precisely because plain least squares trusts every point.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'A replay system fits the height of a thrown grenade (in metres, time $t$ in seconds) and gets $h(t) \\approx 1.6 + 7.2\\,t - 4.75\\,t^2$. Matching this with $h = h_0 + v_0 t - \\frac12 g t^2$, what gravity $g$ (in m/s²) does the fit estimate?',
      hint: 'Match the $t^2$ coefficients: $-\\frac12 g = \\beta_2$.',
      label: '$g \\approx$',
      unit: 'm/s²',
      answer: '9.5',
      explanation: 'The $t^2$ coefficients must agree: $-\\frac12 g = -4.75$, so $g = 9.5$ m/s². That is a bit below Earth\'s $9.81$: maybe the game uses lighter gravity, or the samples were noisy. Either way, least squares turned a handful of noisy positions into physical parameters ($v_0 \\approx 7.2$ m/s upward, $h_0 \\approx 1.6$ m).',
    },
  ],
  takeaways: [
    'A least-squares solution $\\hat{\\mathbf{x}}$ minimizes $\\|\\mathbf{b} - A\\mathbf{x}\\|$; geometrically $A\\hat{\\mathbf{x}} = \\operatorname{proj}_{\\operatorname{Col} A}\\mathbf{b}$, so one always exists.',
    'The residual is orthogonal to every column of $A$, which is exactly the normal equations $A^{T}A\\hat{\\mathbf{x}} = A^{T}\\mathbf{b}$.',
    'The solution is unique iff the columns of $A$ are independent (iff $A^{T}A$ is invertible); then $\\hat{\\mathbf{x}} = (A^{T}A)^{-1}A^{T}\\mathbf{b}$.',
    'To fit a model linear in its parameters, build the design matrix (one row per data point) and solve $X\\boldsymbol{\\beta} = \\mathbf{y}$ in the least-squares sense; lines, parabolas, planes and sinusoids all work.',
    'Numerically, solve $R\\hat{\\mathbf{x}} = Q^{T}\\mathbf{b}$ instead: forming $A^{T}A$ squares the condition number.',
    'Least squares smooths sensors, recovers trajectories and calibrates inputs, but squared errors make it sensitive to outliers.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra (Margalit & Rabinoff) — The Method of Least Squares',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Section 6.5 has interactive demos of best-fit lines, parabolas and circles, with the same normal-equation approach.',
    },
    {
      title: 'Wikipedia — Linear least squares',
      url: 'https://en.wikipedia.org/wiki/Linear_least_squares',
      source: 'wikipedia',
      note: 'Covers the normal equations, the QR and SVD methods, and the numerical reasons to prefer orthogonal factorizations.',
    },
    {
      title: 'MIT OCW 18.06 (Strang) — Projection matrices and least squares',
      url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      source: 'other',
      note: 'Lecture 16 fits a line to three points and shows the two pictures: the projection in $\\mathbb{R}^m$ and the line through the data.',
    },
  ],
};
