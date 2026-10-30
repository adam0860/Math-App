import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'la-subspaces',
  title: 'Vector Spaces and Subspaces',
  summary: 'Polynomials, matrices, functions and audio signals all add and scale like arrows. Capture the rules once, then spot the subspaces hiding inside.',
  minutes: 18,
  objectives: [
    'State the vector space axioms and explain why abstracting them pays off',
    'Recognise $\\mathbb{P}_n$, $M_{m \\times n}$, function spaces and signals as vector spaces',
    'Use the three-part subspace test to prove or disprove that a set is a subspace',
    'Explain geometrically why lines through the origin are subspaces and shifted lines are not',
    'Prove that the span of any set of vectors is a subspace, and use it to recognise subspaces quickly',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Things that behave like arrows',
      blocks: [
        {
          type: 'p',
          text: 'So far a [[vector]] has meant a column of numbers in $\\mathbb{R}^n$, pictured as an arrow. Everything you did with vectors used just two operations: **add** two vectors and **scale** a vector by a number. [[linear-combination|Linear combinations]], span, independence and linear transformations are all built from those two moves.',
        },
        {
          type: 'p',
          text: 'Here is the surprise: many objects that look nothing like arrows can be added and scaled in exactly the same way, obeying exactly the same rules.',
        },
        {
          type: 'table',
          headers: ['Objects', 'Add', 'Scale by $c$', 'The "zero"'],
          rows: [
            ['Polynomials of degree $\\le n$, called $\\mathbb{P}_n$', '$(1 + 2t) + (3 - t^2) = 4 + 2t - t^2$', 'multiply every coefficient', 'the zero polynomial'],
            ['$m \\times n$ matrices, called $M_{m \\times n}$', 'add entry by entry', 'multiply every entry', 'the zero matrix'],
            ['Continuous functions on $[a, b]$, called $C[a, b]$', '$(f + g)(x) = f(x) + g(x)$', '$(cf)(x) = c\\,f(x)$', 'the function $f(x) = 0$'],
            ['Audio signals (one sample per tick)', 'mix two tracks sample by sample', 'change the volume', 'silence'],
          ],
          caption: 'Four very different-looking families that all support "add" and "scale".',
        },
        {
          type: 'p',
          text: 'A polynomial $a_0 + a_1 t + a_2 t^2$ is secretly the list of coefficients $(a_0, a_1, a_2)$, and adding polynomials adds those lists. A one-second stereo clip at 48 kHz is a list of 96 000 numbers. A continuous function is like a vector with one "entry" $f(x)$ for every real $x$: infinitely many entries, but you still add them entry by entry.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why bother abstracting?',
          text: 'If we prove a theorem using **only** the rules of adding and scaling, the theorem instantly holds for every object that obeys those rules: arrows, polynomials, matrices, functions, signals. One proof, infinitely many applications. That is the whole economy of the idea, and it is why the rest of this unit (subspaces, bases, dimension, coordinates) applies far beyond $\\mathbb{R}^n$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Generic code already thinks this way',
          text: 'A function template that only uses `+` and scalar `*` works on any type that supports them. The same `lerp` blends positions, colours, velocities, audio buffers or blend-shape weights: every one of those types is a vector space as far as `lerp` is concerned.',
        },
        {
          type: 'code',
          title: 'lerp.hpp',
          code: `template <class V>
V lerp(const V& a, const V& b, float s) {
    return a + s * (b - a);   // only "add" and "scale" are needed
}

// lerp(Vec3, Vec3, s)       -> blend positions
// lerp(Color, Color, s)     -> blend colours
// lerp(Buffer, Buffer, s)   -> crossfade two audio clips`,
          annotations: [
            { lines: 3, text: 'Uses subtraction ($\\mathbf{b} + (-1)\\mathbf{a}$), scalar multiplication and addition: nothing else about `V` is assumed.' },
          ],
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'In $\\mathbb{P}_2$, let $p(t) = 1 + 2t - t^2$ and $q(t) = 3 - t + 4t^2$. Compute the linear combination $3p - 2q$.',
      label: '$3p - 2q =$',
      variables: ['t'],
      answer: '-3 + 8t - 11t^2',
      answerTex: '-3 + 8t - 11t^2',
      hint: 'Work coefficient by coefficient: constants, then $t$ terms, then $t^2$ terms.',
      explanation: '$3p = 3 + 6t - 3t^2$ and $2q = 6 - 2t + 8t^2$. Subtracting coefficient by coefficient: $3 - 6 = -3$, $6t - (-2t) = 8t$, $-3t^2 - 8t^2 = -11t^2$. This is exactly the vector computation $3(1, 2, -1) - 2(3, -1, 4) = (-3, 8, -11)$ on the coefficient lists, which is the point: $\\mathbb{P}_2$ behaves just like $\\mathbb{R}^3$.',
    },
    {
      kind: 'concept',
      title: 'The vector space axioms',
      blocks: [
        {
          type: 'p',
          text: 'To make "behaves like arrows" precise, we list the rules that arrows obey and take them as the definition. Scalars here are real numbers.',
        },
        {
          type: 'definition',
          term: 'Vector space',
          text: 'A [[vector-space]] is a nonempty set $V$ of objects, called vectors, with two operations, addition and multiplication by scalars, such that for all $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ in $V$ and all scalars $c, d$:\n\n1. $\\mathbf{u} + \\mathbf{v}$ is in $V$.\n2. $\\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u}$.\n3. $(\\mathbf{u} + \\mathbf{v}) + \\mathbf{w} = \\mathbf{u} + (\\mathbf{v} + \\mathbf{w})$.\n4. There is a zero vector $\\mathbf{0}$ in $V$ with $\\mathbf{u} + \\mathbf{0} = \\mathbf{u}$.\n5. Every $\\mathbf{u}$ has a negative $-\\mathbf{u}$ in $V$ with $\\mathbf{u} + (-\\mathbf{u}) = \\mathbf{0}$.\n6. $c\\mathbf{u}$ is in $V$.\n7. $c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v}$.\n8. $(c + d)\\mathbf{u} = c\\mathbf{u} + d\\mathbf{u}$.\n9. $c(d\\mathbf{u}) = (cd)\\mathbf{u}$.\n10. $1\\mathbf{u} = \\mathbf{u}$.',
        },
        {
          type: 'p',
          text: 'Axioms 1 and 6 are the **closure** axioms: adding or scaling never takes you outside $V$. The other eight are the familiar algebra rules you have used with columns of numbers without thinking. Every example in the table on the previous card satisfies all ten.',
        },
        {
          type: 'p',
          text: 'Facts you "know" about arrows must now be *proved* from the axioms, because they have to hold for polynomials and signals too. Here is a typical one.',
        },
        {
          type: 'derivation',
          title: 'Prove that $0\\mathbf{u} = \\mathbf{0}$ in every vector space',
          steps: [
            { tex: '0\\mathbf{u} = (0 + 0)\\mathbf{u}', why: 'The scalar $0$ equals $0 + 0$ (ordinary arithmetic of real numbers).' },
            { tex: '0\\mathbf{u} = 0\\mathbf{u} + 0\\mathbf{u}', why: 'Axiom 8 (distributing a sum of scalars).' },
            { tex: '0\\mathbf{u} + (-(0\\mathbf{u})) = \\big(0\\mathbf{u} + 0\\mathbf{u}\\big) + (-(0\\mathbf{u}))', why: 'Add the negative of the vector $0\\mathbf{u}$ (it exists by axiom 5) to both sides.' },
            { tex: '\\mathbf{0} = 0\\mathbf{u} + \\big(0\\mathbf{u} + (-(0\\mathbf{u}))\\big)', why: 'Left side: axiom 5. Right side: regroup with axiom 3.' },
            { tex: '\\mathbf{0} = 0\\mathbf{u} + \\mathbf{0} = 0\\mathbf{u}', why: 'Axiom 5 inside the bracket, then axiom 4.' },
          ],
          result: 'The scalar zero times any vector is the zero vector, in $\\mathbb{R}^n$, in $\\mathbb{P}_n$, in $C[a, b]$, everywhere.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'In the same way one proves that the zero vector is unique, that $-\\mathbf{u}$ is unique, that $c\\mathbf{0} = \\mathbf{0}$ and that $-\\mathbf{u} = (-1)\\mathbf{u}$. You will never need to re-prove these; just know they follow from the ten axioms.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'With the usual addition and scalar multiplication, which of these sets is **not** a vector space?',
      options: [
        {
          text: 'All polynomials of degree **exactly** $2$',
          correct: true,
          why: 'Not closed under addition: $(t^2 + 1) + (-t^2) = 1$ has degree $0$. It also has no zero vector, because the zero polynomial does not have degree exactly 2.',
        },
        {
          text: 'All polynomials of degree **at most** $2$ ($\\mathbb{P}_2$)',
          why: 'Adding or scaling polynomials of degree $\\le 2$ gives degree $\\le 2$, and the zero polynomial is included. This is a vector space.',
        },
        {
          text: 'All $2 \\times 3$ matrices',
          why: 'Entry-by-entry addition and scaling keep you among $2 \\times 3$ matrices, and all ten axioms follow from real-number arithmetic. It is a vector space.',
        },
        {
          text: 'All continuous functions on $[0, 1]$',
          why: 'Sums and scalar multiples of continuous functions are continuous (a Calculus I limit law), and $f(x) = 0$ is continuous. It is a vector space.',
        },
      ],
      explanation: 'The phrase "degree **at most** $n$" is what makes $\\mathbb{P}_n$ work. Demanding degree exactly $2$ breaks closure, because leading terms can cancel, and it throws out the zero polynomial. A set that fails even one axiom is not a vector space.',
    },
    {
      kind: 'concept',
      title: 'Subspaces and the three-part test',
      blocks: [
        {
          type: 'p',
          text: 'Most vector spaces you meet in practice live *inside* a bigger one: a plane through the origin inside $\\mathbb{R}^3$, the polynomials with $p(1) = 0$ inside $\\mathbb{P}_2$. Checking ten axioms for each would be tedious, and it turns out to be unnecessary.',
        },
        {
          type: 'definition',
          term: 'Subspace',
          text: 'A [[subspace]] of a vector space $V$ is a subset $H$ of $V$ such that\n\n1. the zero vector of $V$ is in $H$;\n2. $H$ is **closed under addition**: if $\\mathbf{u}$ and $\\mathbf{v}$ are in $H$, so is $\\mathbf{u} + \\mathbf{v}$;\n3. $H$ is **closed under scalar multiplication**: if $\\mathbf{u}$ is in $H$ and $c$ is any scalar, $c\\mathbf{u}$ is in $H$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why three checks are enough',
          text: 'Rules like $\\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u}$ are true for *all* vectors of $V$, so they are automatically true for the vectors of $H$: they are **inherited**. What is *not* inherited is staying inside $H$. Conditions 2 and 3 are exactly axioms 1 and 6 for $H$. Negatives come free from condition 3, since $-\\mathbf{u} = (-1)\\mathbf{u}$. Condition 1 guarantees $H$ is nonempty and has the zero vector. So every subspace is itself a vector space.',
        },
        {
          type: 'derivation',
          title: 'Show that $H = \\left\\{ \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} : x - 2y + z = 0 \\right\\}$ is a subspace of $\\mathbb{R}^3$',
          steps: [
            { tex: '0 - 2(0) + 0 = 0 \\implies \\mathbf{0} \\in H', why: 'Test 1: the zero vector satisfies the defining equation.' },
            { tex: '\\mathbf{u} = \\begin{bmatrix} u_1 \\\\ u_2 \\\\ u_3 \\end{bmatrix}, \\ \\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ v_3 \\end{bmatrix} \\in H: \\quad u_1 - 2u_2 + u_3 = 0, \\ \\ v_1 - 2v_2 + v_3 = 0', why: 'For test 2, take two **arbitrary** members of $H$; all we know is that each satisfies the equation.' },
            { tex: '(u_1 + v_1) - 2(u_2 + v_2) + (u_3 + v_3) = (u_1 - 2u_2 + u_3) + (v_1 - 2v_2 + v_3) = 0 + 0 = 0', why: 'Check the equation for $\\mathbf{u} + \\mathbf{v}$ by regrouping. So $\\mathbf{u} + \\mathbf{v} \\in H$.' },
            { tex: '(cu_1) - 2(cu_2) + (cu_3) = c\\,(u_1 - 2u_2 + u_3) = c \\cdot 0 = 0', why: 'Test 3: factor out $c$. So $c\\mathbf{u} \\in H$ for every scalar $c$.' },
          ],
          result: 'All three tests pass, so this plane through the origin is a subspace of $\\mathbb{R}^3$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Check with arbitrary vectors, not examples',
          text: 'Showing that $(1, 1, 1)$ and $(2, 1, 0)$ add to something in $H$ proves nothing about closure in general. Closure must be proved for **every** pair, so work with letters. To show a set is **not** a subspace, though, a single concrete counterexample is perfect.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Always start with test 1. If $\\mathbf{0}$ is missing, you are done in one line: not a subspace. Exams love sets like "$x - 2y + z = 5$" for exactly this reason.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'For which value of $k$ is the set $\\left\\{ \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} : x + 2y - z = k \\right\\}$ a subspace of $\\mathbb{R}^3$?',
      label: '$k =$',
      answer: '0',
      hint: 'Which vector must every subspace contain? Plug it in.',
      explanation: 'A subspace must contain $\\mathbf{0}$, and plugging in $(0, 0, 0)$ gives $0 = k$. So $k = 0$ is necessary. It is also sufficient: with $k = 0$ the set is a plane through the origin, and the same regrouping argument as in the worked example proves closure. For $k \\ne 0$ the plane is shifted off the origin and fails every one of the three tests.',
    },
    {
      kind: 'concept',
      title: 'Examples and non-examples in the plane',
      blocks: [
        {
          type: 'p',
          text: 'In $\\mathbb{R}^2$ the subspaces are easy to list: $\\{\\mathbf{0}\\}$, every line **through the origin**, and $\\mathbb{R}^2$ itself. Drag the sliders below. The blue and green vectors $\\mathbf{u}$, $\\mathbf{v}$ both end on the line $y = mx + c$; the red vector is their sum.',
        },
        {
          type: 'graph',
          x: [-1, 4],
          y: [-6, 8],
          functions: [{ expr: 'm*x + c', label: '$y = mx + c$', color: 'gray' }],
          segments: [
            { from: [0, 0], to: [1, 'm + c'], arrow: true, label: 'u', color: 'blue' },
            { from: [0, 0], to: [2, '2m + c'], arrow: true, label: 'v', color: 'green' },
            { from: [0, 0], to: [3, '3m + 2c'], arrow: true, label: 'u + v', color: 'red' },
            { from: [1, 'm + c'], to: [3, '3m + 2c'], dashed: true, color: 'gray' },
            { from: [2, '2m + c'], to: [3, '3m + 2c'], dashed: true, color: 'gray' },
          ],
          sliders: [
            { name: 'm', min: -1, max: 1.5, step: 0.1, value: 0.5, label: 'slope $m$' },
            { name: 'c', min: -1.5, max: 1.5, step: 0.1, value: 1, label: 'shift $c$' },
          ],
          readouts: [{ label: 'height of $\\mathbf{u} + \\mathbf{v}$ above the line:', expr: 'c', digits: 2 }],
          caption: 'The tip of $\\mathbf{u} + \\mathbf{v}$ sits exactly $c$ units above the line. Only when $c = 0$ does the sum stay on the line.',
        },
        {
          type: 'p',
          text: 'Algebraically: if $\\mathbf{u} = (u_1, mu_1 + c)$ and $\\mathbf{v} = (v_1, mv_1 + c)$, their sum is $(u_1 + v_1,\\ m(u_1 + v_1) + 2c)$, which is on the line only if $2c = c$, i.e. $c = 0$. A shifted line also misses $\\mathbf{0}$. Lines through the origin pass every test.',
        },
        {
          type: 'table',
          headers: ['Set in $\\mathbb{R}^2$', 'Contains $\\mathbf{0}$?', 'Closed under $+$?', 'Closed under scaling?'],
          rows: [
            ['Line $y = 3x$', 'yes', 'yes', 'yes: **subspace**'],
            ['Line $y = 3x + 1$', 'no', 'no', 'no'],
            ['First quadrant $x \\ge 0,\\ y \\ge 0$', 'yes', 'yes', 'no: $(-1)(1, 1) = (-1, -1)$'],
            ['Union of the two axes', 'yes', 'no: $(1, 0) + (0, 1) = (1, 1)$', 'yes'],
            ['Unit circle', 'no', 'no', 'no'],
          ],
          caption: 'The three tests are independent: a set can pass two and still fail.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          text: 'Think of a subspace as a **flat sheet that passes through the origin and goes on forever**. Flat, so sums stay on it; infinite in every direction along it, so scaling (including by negatives) stays on it; through the origin, so $\\mathbf{0}$ is on it. The first quadrant is a corner, not a sheet: it is cut off when you scale by a negative number.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'The first quadrant $Q = \\{(x, y) : x \\ge 0,\\ y \\ge 0\\}$ is not a subspace of $\\mathbb{R}^2$. Which part of the subspace test does it fail?',
      graph: {
        type: 'graph',
        x: [-4, 4],
        y: [-4, 4],
        equal: true,
        areas: [{ expr: '5', expr2: '0', from: 0, to: 5, color: 'teal' }],
        segments: [
          { from: [0, 0], to: [2, 1], arrow: true, label: 'u', color: 'blue' },
          { from: [0, 0], to: ['2s', 's'], arrow: true, label: 'su', color: 'red' },
        ],
        sliders: [{ name: 's', min: -2, max: 2, step: 0.1, value: 1, label: 'scalar $s$' }],
        caption: 'Shaded: the first quadrant. Drag $s$ below zero.',
      },
      options: [
        {
          text: 'It does not contain the zero vector',
          why: '$(0, 0)$ satisfies $x \\ge 0$ and $y \\ge 0$, so it is in $Q$.',
        },
        {
          text: 'It is not closed under addition',
          why: 'If both coordinates of $\\mathbf{u}$ and $\\mathbf{v}$ are $\\ge 0$, so are the coordinates of $\\mathbf{u} + \\mathbf{v}$. Addition is fine.',
        },
        {
          text: 'It is not closed under scalar multiplication',
          correct: true,
          why: '$\\mathbf{u} = (2, 1)$ is in $Q$ but $(-1)\\mathbf{u} = (-2, -1)$ is not. Negative scalars flip vectors out of the quadrant.',
        },
        {
          text: 'It passes all three tests; it only fails because it is not a line',
          why: 'A subspace need not be a line ($\\mathbb{R}^2$ itself is a subspace). $Q$ genuinely fails a test.',
        },
      ],
      explanation: 'Contains $\\mathbf{0}$: yes. Closed under addition: yes. Closed under scaling: no, one counterexample such as $(-1)(2, 1) = (-2, -1)$ settles it. Scalars in a vector space are **all** real numbers, including negatives, which is why a subspace must extend infinitely in both directions along every vector it contains.',
    },
    {
      kind: 'truefalse',
      prompt: 'If a subset $H$ of $\\mathbb{R}^n$ contains the zero vector and is closed under scalar multiplication, then $H$ is a subspace.',
      answer: false,
      explanation: 'Closure under addition is a separate requirement. The union of the $x$-axis and the $y$-axis contains $\\mathbf{0}$ and every scalar multiple of its vectors stays on the same axis, but $(1, 0) + (0, 1) = (1, 1)$ lies on neither axis. All three tests are needed.',
    },
    {
      kind: 'concept',
      title: 'Subspaces of polynomial and function spaces',
      blocks: [
        {
          type: 'p',
          text: 'The test works word for word in any vector space. The only thing that changes is what "zero" and "add" mean. In $\\mathbb{P}_n$ the zero vector is the zero polynomial; in $C[a, b]$ it is the function that is $0$ everywhere.',
        },
        {
          type: 'derivation',
          title: 'Show that $H = \\{ p \\in \\mathbb{P}_2 : p(1) = 0 \\}$ is a subspace of $\\mathbb{P}_2$',
          steps: [
            { tex: '\\mathbf{0}(t) = 0 \\text{ for all } t \\implies \\mathbf{0}(1) = 0', why: 'Test 1: the zero polynomial evaluates to $0$ at $t = 1$ (indeed everywhere), so it is in $H$.' },
            { tex: 'p, q \\in H: \\quad (p + q)(1) = p(1) + q(1) = 0 + 0 = 0', why: 'Test 2: polynomials are added pointwise, so evaluating the sum at $1$ adds the two values, both of which are $0$.' },
            { tex: '(cp)(1) = c\\,p(1) = c \\cdot 0 = 0', why: 'Test 3: scaling a polynomial scales its value at every point.' },
          ],
          result: '$H$ (for example $t - 1$, $t^2 - 1$, $3t^2 - 5t + 2$) is a subspace of $\\mathbb{P}_2$.',
        },
        {
          type: 'p',
          text: 'Change the condition to $p(1) = 5$ and everything breaks: the zero polynomial has $\\mathbf{0}(1) = 0 \\ne 5$. The pattern is the same as in $\\mathbb{R}^3$: a condition "something linear $= 0$" carves out a subspace, while "something linear $=$ nonzero" does not.',
        },
        {
          type: 'list',
          items: [
            'Inside $C[a, b]$, the **differentiable** functions form a subspace: sums and multiples of differentiable functions are differentiable.',
            'The solutions of the differential equation $y\'\' + y = 0$ (such as $\\sin x$, $\\cos x$, and $3\\sin x - 2\\cos x$) form a subspace: if $f\'\' + f = 0$ and $g\'\' + g = 0$ then $(f + g)\'\' + (f + g) = 0$, by linearity of the derivative.',
            'Inside $M_{2 \\times 2}$, the symmetric matrices ($A^{T} = A$) form a subspace, but the invertible matrices do not: the zero matrix is not invertible.',
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Superposition in audio and physics',
          text: 'Because solutions of $y\'\' + y = 0$ form a subspace, you can build a complicated vibration by adding simple ones: this is the **superposition principle** behind mixing sine waves in a synthesizer, and behind layering independent springs or oscillators in a physics engine. Linear equations with right-hand side $0$ always give you this for free.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student tries to prove that the parabola $W = \\{(x, y) : y = x^2\\}$ is a subspace of $\\mathbb{R}^2$. Tap the first line that is wrong.',
      lines: [
        '$(0, 0^2) = (0, 0)$, so $\\mathbf{0} \\in W$.',
        'Let $(a, a^2)$ and $(b, b^2)$ be any two points of $W$.',
        'Their sum is $(a + b,\\ a^2 + b^2) = (a + b,\\ (a + b)^2)$, so the sum is in $W$.',
        'For a scalar $c$, $c(a, a^2) = (ca,\\ ca^2)$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 uses $a^2 + b^2 = (a + b)^2$, which is false: $(a + b)^2 = a^2 + 2ab + b^2$. A concrete counterexample: $(1, 1)$ and $(1, 1)$ are in $W$ but their sum $(2, 2)$ is not, since $2^2 = 4 \\ne 2$. So $W$ is **not** closed under addition and is not a subspace (scaling fails too: $2(1, 1) = (2, 2)$). A curved set is never a subspace.',
    },
    {
      kind: 'concept',
      title: 'Every span is a subspace',
      blocks: [
        {
          type: 'p',
          text: 'The single most useful way to recognise a subspace: show it is the [[span]] of some vectors.',
        },
        {
          type: 'theorem',
          name: 'Spans are subspaces',
          text: 'If $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ are in a vector space $V$, then $\\operatorname{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is a subspace of $V$. We call it the subspace **spanned** (or generated) by $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: '\\mathbf{0} = 0\\mathbf{v}_1 + 0\\mathbf{v}_2 + \\cdots + 0\\mathbf{v}_p', why: 'Test 1: choose every weight to be $0$. (We proved $0\\mathbf{v} = \\mathbf{0}$ on an earlier card.)' },
            { tex: '\\mathbf{u} = a_1\\mathbf{v}_1 + \\cdots + a_p\\mathbf{v}_p, \\quad \\mathbf{w} = b_1\\mathbf{v}_1 + \\cdots + b_p\\mathbf{v}_p', why: 'Two arbitrary members of the span are linear combinations with some weights.' },
            { tex: '\\mathbf{u} + \\mathbf{w} = (a_1 + b_1)\\mathbf{v}_1 + \\cdots + (a_p + b_p)\\mathbf{v}_p', why: 'Test 2: regroup with the axioms (commutativity, associativity, distributivity). The result is again a linear combination of the $\\mathbf{v}_i$.' },
            { tex: 'c\\mathbf{u} = (ca_1)\\mathbf{v}_1 + \\cdots + (ca_p)\\mathbf{v}_p', why: 'Test 3: distribute $c$ (axioms 7 and 9). Again a linear combination.' },
          ],
          result: 'The span contains $\\mathbf{0}$ and is closed under both operations, so it is a subspace.',
        },
        {
          type: 'derivation',
          title: 'Show $H = \\left\\{ \\begin{bmatrix} a - 3b \\\\ b - a \\\\ a \\\\ b \\end{bmatrix} : a, b \\in \\mathbb{R} \\right\\}$ is a subspace of $\\mathbb{R}^4$',
          steps: [
            { tex: '\\begin{bmatrix} a - 3b \\\\ b - a \\\\ a \\\\ b \\end{bmatrix} = a\\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\\\ 0 \\end{bmatrix} + b\\begin{bmatrix} -3 \\\\ 1 \\\\ 0 \\\\ 1 \\end{bmatrix}', why: 'Split each entry into its $a$-part and its $b$-part.' },
            { tex: 'H = \\operatorname{Span}\\left\\{ \\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -3 \\\\ 1 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}', why: 'As $a$ and $b$ range over all reals, we get exactly all linear combinations of the two vectors.' },
          ],
          result: 'By the theorem, $H$ is a subspace. No closure checks needed.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this is the natural picture',
          text: '$\\operatorname{Span}\\{\\mathbf{v}\\}$ for $\\mathbf{v} \\ne \\mathbf{0}$ is the line through the origin in the direction of $\\mathbf{v}$; the span of two non-parallel vectors in $\\mathbb{R}^3$ is a plane through the origin. In the next lessons we will see the converse: every subspace of $\\mathbb{R}^n$ is the span of finitely many vectors. Subspaces and spans are the same objects seen from two sides.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Constrained motion',
          text: 'A bead on a straight wire through the origin, a character grinding a rail, a piston sliding along an axis: the allowed velocities form $\\operatorname{Span}\\{\\mathbf{d}\\}$ for the rail direction $\\mathbf{d}$. Because that set is a subspace, combining two allowed velocities (say, an input push plus a boost) is still an allowed velocity. Physics engines exploit this by projecting velocities onto the subspace of allowed motions.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Let $H = \\left\\{ \\begin{bmatrix} 2s - t \\\\ s \\\\ t \\end{bmatrix} : s, t \\in \\mathbb{R} \\right\\}$. For which value of $z$ is the vector $\\begin{bmatrix} 1 \\\\ 2 \\\\ z \\end{bmatrix}$ in $H$?',
      label: '$z =$',
      answer: '3',
      hint: 'Match entries: the second entry tells you $s$, and the first entry then tells you $t$.',
      explanation: 'We need $s = 2$ (second entry) and $2s - t = 1$ (first entry), so $4 - t = 1$ and $t = 3$. The third entry must equal $t$, so $z = 3$. Check: $s = 2, t = 3$ gives $(4 - 3, 2, 3) = (1, 2, 3)$. Here $H = \\operatorname{Span}\\{(2, 1, 0), (-1, 0, 1)\\}$, a plane through the origin in $\\mathbb{R}^3$, and only one point on the vertical line $(1, 2, z)$ lies on it.',
    },
    {
      kind: 'fill',
      prompt: 'Complete the subspace test.',
      template: 'A subset $H$ of a vector space $V$ is a subspace when $H$ contains ___, is closed under ___, and is closed under ___.',
      blanks: [
        { answers: ['the zero vector'] },
        { answers: ['addition', 'scalar multiplication'] },
        { answers: ['scalar multiplication', 'addition'] },
      ],
      wordBank: ['the zero vector', 'addition', 'scalar multiplication', 'the vector $(1, 1)$', 'the dot product', 'division'],
      explanation: 'Zero vector, closure under addition, closure under scalar multiplication. The remaining eight axioms are inherited from $V$, because they hold for all vectors of $V$ and therefore for the vectors of $H$. Nothing about dot products or specific vectors like $(1, 1)$ is required: a vector space need not even have a dot product.',
    },
  ],
  takeaways: [
    'A vector space is any set with addition and scalar multiplication obeying the ten axioms; $\\mathbb{R}^n$, $\\mathbb{P}_n$, $M_{m \\times n}$, $C[a, b]$ and signals are all examples.',
    'Theorems proved from the axioms alone (such as $0\\mathbf{u} = \\mathbf{0}$) hold in every vector space at once.',
    'A subset $H$ is a subspace exactly when it contains $\\mathbf{0}$ and is closed under addition and scalar multiplication; the other axioms are inherited.',
    'Lines and planes through the origin are subspaces; shifted lines, quadrants, unions of lines and curves are not. One counterexample disproves; a proof of closure needs arbitrary vectors.',
    'The span of any vectors is a subspace, so writing a set as a span is the fastest proof that it is a subspace.',
  ],
  reading: [
    {
      title: 'Interactive Linear Algebra — Subspaces',
      url: 'https://textbooks.math.gatech.edu/ila/',
      source: 'book',
      note: 'Margalit and Rabinoff\'s free textbook; its subspaces section has interactive pictures of spans and many examples and non-examples.',
    },
    {
      title: '3Blue1Brown — Abstract vector spaces',
      url: 'https://www.3blue1brown.com/topics/linear-algebra',
      source: 'video',
      note: 'The final chapter of *Essence of linear algebra* explains why functions are vectors and why mathematicians abstract the axioms.',
    },
    {
      title: 'Paul\'s Online Notes — Vector Spaces and Subspaces',
      url: 'https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx',
      source: 'paul',
      note: 'Many fully worked axiom checks, including some strange vector spaces where the operations are not the usual ones.',
    },
    {
      title: 'Wikipedia — Vector space',
      url: 'https://en.wikipedia.org/wiki/Vector_space',
      source: 'wikipedia',
      note: 'The axioms, many examples, and the history of the idea from Grassmann to Peano.',
    },
  ],
};
