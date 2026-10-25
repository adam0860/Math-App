import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-quadratic-factoring',
  title: 'Solving Quadratics by Factoring and Square Roots',
  summary: 'Turn a product into "something equals zero", and undo a square without losing half the answers.',
  minutes: 17,
  objectives: [
    'Recognise a quadratic equation and rewrite it in standard form $ax^2 + bx + c = 0$',
    'Explain and apply the zero product property',
    'Solve quadratics by factoring, including ones with a GCF or a leading coefficient other than $1$',
    'Solve equations of the form $(x - p)^2 = k$ with the square root property, keeping both signs',
    'Recognise a double root and reject solutions that make no sense in a word problem',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What makes an equation quadratic?',
      blocks: [
        {
          type: 'p',
          text: 'In the linear-equations unit, every equation could be solved by "undoing" operations one at a time until $x$ stood alone. That strategy breaks the moment $x$ is squared. In $x^2 - x - 6 = 0$ the unknown appears twice, once squared and once not, and no sequence of adding, subtracting, multiplying or dividing will collect it into a single $x$.',
        },
        {
          type: 'definition',
          term: 'Quadratic equation',
          text: 'A [[quadratic-equation]] is one that can be written in **standard form**\n\n$$ax^2 + bx + c = 0, \\qquad a \\neq 0,$$\n\nwhere $a$, $b$, $c$ are constants. The highest power of the variable is exactly $2$.',
        },
        {
          type: 'p',
          text: 'Many equations are quadratic in disguise. $x(x - 3) = 5$ becomes $x^2 - 3x - 5 = 0$ once you expand and move everything to one side. On the other hand, $(x + 1)^2 = x^2 + 4$ looks quadratic but is not: expanding gives $x^2 + 2x + 1 = x^2 + 4$, the $x^2$ terms cancel, and what is left, $2x = 3$, is linear.',
        },
        {
          type: 'graph',
          x: [-4, 5],
          y: [-8, 8],
          functions: [{ expr: 'x^2 - x - 6', label: '$y = x^2 - x - 6$' }],
          points: [
            { x: -2, y: 0, label: '(−2, 0)' },
            { x: 3, y: 0, label: '(3, 0)' },
          ],
          caption: 'The solutions of $x^2 - x - 6 = 0$ are the $x$-values where the graph of $y = x^2 - x - 6$ has height $0$: its [[x-intercept|x-intercepts]]. This U-shaped curve is a [[parabola]]; a parabola can cross the axis twice, touch it once, or miss it entirely.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why insist on $a \\neq 0$?',
          text: 'If $a = 0$ the $x^2$ term vanishes and the equation is just $bx + c = 0$, a linear equation with at most one solution. The squared term is exactly what allows *two* solutions, and it is why all the new methods in this unit are needed.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where quadratics hide in games',
          text: 'Does a bullet hit a circular enemy? A point moving along a straight line, $P + tD$, is at distance $r$ from a circle\'s centre exactly when a certain **quadratic in $t$** equals zero. Two solutions: the ray enters and exits the circle. One: it grazes the edge. None: it misses. Every ray-sphere test in a renderer or physics engine is this lesson in disguise.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which of these is a quadratic equation?',
      options: [
        {
          text: '$x(x - 3) = 5$',
          correct: true,
          why: 'Expanding gives $x^2 - 3x = 5$, i.e. $x^2 - 3x - 5 = 0$: standard form with $a = 1 \\neq 0$.',
        },
        {
          text: '$(x + 1)^2 = x^2 + 4$',
          why: 'Expanding gives $x^2 + 2x + 1 = x^2 + 4$; the $x^2$ terms cancel, leaving the linear equation $2x = 3$.',
        },
        {
          text: '$x^3 - 4x = 0$',
          why: 'The highest power is $3$, so this is a cubic, not a quadratic.',
        },
        {
          text: '$5x - 2 = 3x + 8$',
          why: 'No $x^2$ term at all. This is linear, with the single solution $x = 5$.',
        },
      ],
      explanation: 'Always simplify before you classify: expand products and move everything to one side. An equation is quadratic when the result has an $x^2$ term with a nonzero coefficient and no higher powers.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The zero product property',
      blocks: [
        {
          type: 'p',
          text: 'Here is the key fact behind factoring. If you multiply two numbers and get $0$, at least one of them had to be $0$. No two nonzero numbers multiply to zero. That turns one hard equation into two easy ones.',
        },
        {
          type: 'theorem',
          name: 'Zero product property',
          tex: 'AB = 0 \\quad\\Longrightarrow\\quad A = 0 \\ \\text{ or } \\ B = 0',
          text: 'This holds for real numbers and for any expressions that stand for real numbers.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is true',
          text: 'Suppose $AB = 0$ and $A \\neq 0$. Then you may divide both sides by $A$: $B = \\frac{0}{A} = 0$. So either $A = 0$, or (if not) $B$ is forced to be $0$. The [[zero-product-property]] is special to **zero**: $AB = 6$ tells you almost nothing about $A$ or $B$ on their own ($2 \\cdot 3$, $1 \\cdot 6$, $12 \\cdot \\frac{1}{2}$, …).',
        },
        {
          type: 'derivation',
          title: 'Solve $x^2 - x - 6 = 0$',
          steps: [
            { tex: 'x^2 - x - 6 = 0', why: 'Already in standard form: everything on the left, $0$ on the right.' },
            { tex: '(x - 3)(x + 2) = 0', why: 'Factor the trinomial: find two numbers with product $-6$ and sum $-1$. They are $-3$ and $2$.' },
            { tex: 'x - 3 = 0 \\quad \\text{or} \\quad x + 2 = 0', why: 'Zero product property: a product is zero only if one of its factors is zero.' },
            { tex: 'x = 3 \\quad \\text{or} \\quad x = -2', why: 'Solve each small linear equation.' },
            { tex: '3^2 - 3 - 6 = 0 \\checkmark, \\quad (-2)^2 - (-2) - 6 = 4 + 2 - 6 = 0 \\checkmark', why: 'Check both in the **original** equation. It takes seconds and catches factoring slips.' },
          ],
          result: 'The solutions are $x = 3$ and $x = -2$, matching the $x$-intercepts on the graph above.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong: product equals 6',
            tone: 'bad',
            tex: ['(x - 2)(x - 3) = 6', 'x - 2 = 6 \\ \\text{or}\\ x - 3 = 6', 'x = 8 \\ \\text{or}\\ x = 9'],
            text: 'Check: $(8-2)(8-3) = 30$, not $6$. The property only works for zero.',
          },
          right: {
            title: 'Right: make one side zero first',
            tone: 'good',
            tex: ['x^2 - 5x + 6 = 6', 'x^2 - 5x = 0', 'x(x - 5) = 0', 'x = 0 \\ \\text{or}\\ x = 5'],
            text: 'Expand, move everything to one side, then factor.',
          },
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Solve $x^2 + 2x - 15 = 0$ by factoring. Enter both solutions, separated by a comma.',
      label: '$x =$',
      answer: ['-5', '3'],
      hint: 'Find two numbers whose product is $-15$ and whose sum is $2$.',
      explanation: 'The numbers $5$ and $-3$ multiply to $-15$ and add to $2$, so $x^2 + 2x - 15 = (x + 5)(x - 3)$. Setting each factor to zero gives $x = -5$ or $x = 3$. Check $x = 3$: $9 + 6 - 15 = 0$. Check $x = -5$: $25 - 10 - 15 = 0$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The full factoring method',
      blocks: [
        {
          type: 'p',
          text: 'Real equations rarely arrive in the tidy form $(\\ldots)(\\ldots) = 0$. Here is the reliable procedure. Every step is something you already know from the factoring unit; the new part is the order.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Standard form', text: 'Expand and move every term to one side so the other side is $0$.' },
            { title: 'Pull out the GCF', text: 'Factor out any [[greatest-common-factor]], including a common $x$. Never divide it away.' },
            { title: 'Factor the rest', text: 'Trinomial, [[difference-of-squares]], [[perfect-square-trinomial]] or grouping.' },
            { title: 'Zero product property', text: 'Set each factor containing $x$ equal to $0$ and solve.' },
            { title: 'Check', text: 'Substitute each answer into the original equation.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Solve $2x^2 = 8x$',
          steps: [
            { tex: '2x^2 - 8x = 0', why: 'Subtract $8x$ from both sides to get $0$ on the right.' },
            { tex: '2x(x - 4) = 0', why: 'The GCF of $2x^2$ and $8x$ is $2x$.' },
            { tex: '2x = 0 \\quad \\text{or} \\quad x - 4 = 0', why: 'Zero product property. (The constant $2$ is never zero, so it is $x$ that must be.)' },
            { tex: 'x = 0 \\quad \\text{or} \\quad x = 4', why: 'Solve each piece.' },
          ],
          result: 'Two solutions: $x = 0$ and $x = 4$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Never divide both sides by $x$',
          text: 'It is tempting to divide $2x^2 = 8x$ by $2x$ and get $x = 4$. But dividing by $x$ is only legal when $x \\neq 0$, so that move silently throws away the solution $x = 0$. Factor the $x$ out instead; factoring never loses solutions.',
        },
        {
          type: 'derivation',
          title: 'A leading coefficient other than 1: $6x^2 + x - 2 = 0$',
          steps: [
            { tex: '6x^2 + x - 2 = 0', why: 'Standard form, no common factor.' },
            { tex: '6x^2 + 4x - 3x - 2 = 0', why: 'AC method: $ac = 6 \\cdot (-2) = -12$. Two numbers with product $-12$ and sum $1$ are $4$ and $-3$; split the middle term.' },
            { tex: '2x(3x + 2) - 1(3x + 2) = 0', why: 'Group in pairs and factor each pair.' },
            { tex: '(2x - 1)(3x + 2) = 0', why: 'Factor out the common binomial $3x + 2$.' },
            { tex: 'x = \\tfrac{1}{2} \\quad \\text{or} \\quad x = -\\tfrac{2}{3}', why: '$2x - 1 = 0$ gives $x = \\frac{1}{2}$; $3x + 2 = 0$ gives $x = -\\frac{2}{3}$.' },
          ],
          result: 'Notice the solutions are fractions: when $a \\neq 1$, each factor $px + q$ gives $x = -\\frac{q}{p}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student solves $3x^2 = 12x$. Tap the first line that is wrong.',
      lines: [
        '$3x^2 = 12x$',
        '$\\dfrac{3x^2}{3x} = \\dfrac{12x}{3x}$',
        '$x = 4$',
        'Check: $3(4)^2 = 48 = 12(4)$ ✓',
      ],
      errorLines: [2],
      explanation: 'Dividing by $3x$ assumes $x \\neq 0$, which discards the solution $x = 0$. The check passes because $x = 4$ *is* a solution; it just is not the only one. Correctly: $3x^2 - 12x = 0$, so $3x(x - 4) = 0$, giving $x = 0$ or $x = 4$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Solve $2x^2 - 5x - 3 = 0$ by factoring. Enter both solutions, separated by a comma.',
      label: '$x =$',
      answer: ['-1/2', '3'],
      hint: '$ac = -6$. Which two numbers multiply to $-6$ and add to $-5$?',
      explanation: 'Split $-5x$ using $-6$ and $1$: $2x^2 - 6x + x - 3 = 2x(x - 3) + 1(x - 3) = (2x + 1)(x - 3)$. Then $2x + 1 = 0$ gives $x = -\\frac{1}{2}$ and $x - 3 = 0$ gives $x = 3$. Check $x = -\\frac{1}{2}$: $2 \\cdot \\frac{1}{4} + \\frac{5}{2} - 3 = \\frac{1}{2} + \\frac{5}{2} - 3 = 0$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'The square root property',
      blocks: [
        {
          type: 'p',
          text: 'When an equation has a squared expression on one side and a constant on the other, such as $x^2 = 25$ or $(x - 3)^2 = 7$, there is a faster route than factoring: take the square root of both sides. The one thing to remember is that **two** numbers square to any positive number.',
        },
        {
          type: 'theorem',
          name: 'Square root property',
          tex: 'u^2 = k \\quad\\Longrightarrow\\quad u = \\sqrt{k} \\ \\text{ or } \\ u = -\\sqrt{k} \\qquad (k > 0)',
          text: 'Written compactly as $u = \\pm\\sqrt{k}$. If $k = 0$ the only solution is $u = 0$. If $k < 0$ there is no real solution, because no real number squares to a negative.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Where the $\\pm$ comes from',
          text: 'The symbol $\\sqrt{k}$ means the **positive** [[principal-root|principal root]] only, so $\\sqrt{25} = 5$, never $-5$. But the *equation* $x^2 = 25$ asks for every number whose square is $25$, and both $5$ and $-5$ qualify. You can also see it by factoring: $x^2 - 25 = (x - 5)(x + 5) = 0$. The $\\pm$ is the zero product property in shorthand.',
        },
        {
          type: 'derivation',
          title: 'Solve $(x - 3)^2 = 7$',
          steps: [
            { tex: '(x - 3)^2 = 7', why: 'A perfect square equals a positive constant. Expanding would only make this harder.' },
            { tex: 'x - 3 = \\pm\\sqrt{7}', why: 'Square root property: $x - 3$ is a number whose square is $7$.' },
            { tex: 'x = 3 \\pm \\sqrt{7}', why: 'Add $3$ to both sides.' },
          ],
          result: 'Two irrational solutions, $3 + \\sqrt{7} \\approx 5.65$ and $3 - \\sqrt{7} \\approx 0.35$. Factoring with integers could never have found these.',
        },
        {
          type: 'derivation',
          title: 'Isolate the square first: $2x^2 - 50 = 0$',
          steps: [
            { tex: '2x^2 = 50', why: 'Add $50$ to both sides.' },
            { tex: 'x^2 = 25', why: 'Divide by $2$ so the square stands alone.' },
            { tex: 'x = \\pm 5', why: 'Square root property.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Isolate before you root',
          text: 'Take the square root only once the squared expression is **alone**. $\\sqrt{x^2 + 9}$ is *not* $x + 3$: square roots do not split over sums. For $x^2 + 9 = 25$, first subtract $9$ to get $x^2 = 16$, then $x = \\pm 4$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'truefalse',
      prompt: 'The equation $x^2 = 16$ has exactly one solution, $x = 4$, because $\\sqrt{16} = 4$.',
      answer: false,
      explanation: 'It is true that $\\sqrt{16} = 4$; the radical sign means the positive root. But the equation asks for *every* number whose square is $16$, and $(-4)^2 = 16$ too. So $x = \\pm 4$. Equivalently, $x^2 - 16 = (x - 4)(x + 4) = 0$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Solve $(x + 2)^2 = 9$. Enter both solutions, separated by a comma.',
      label: '$x =$',
      answer: ['1', '-5'],
      hint: 'Take the square root of both sides, remembering $\\pm$, then subtract $2$.',
      explanation: '$x + 2 = \\pm 3$. The $+$ case gives $x = 3 - 2 = 1$; the $-$ case gives $x = -3 - 2 = -5$. Check: $(1 + 2)^2 = 9$ and $(-5 + 2)^2 = (-3)^2 = 9$. Forgetting the $\\pm$ would lose $x = -5$.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Double roots, and choosing a method',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes both factors are the same. $x^2 - 6x + 9 = (x - 3)^2$, so $x^2 - 6x + 9 = 0$ has only the solution $x = 3$. We call it a [[quadratic-double-root|double root]]: the parabola touches the $x$-axis at one point and turns back without crossing.',
        },
        {
          type: 'graph',
          x: [-1, 7],
          y: [-5, 8],
          functions: [{ expr: 'x^2 - 6x + c', label: '$y = x^2 - 6x + c$' }],
          sliders: [{ name: 'c', min: 4, max: 13, step: 0.5, value: 9, label: '$c$' }],
          readouts: [{ label: 'height of the lowest point $= c - 9 =$', expr: 'c - 9', digits: 2 }],
          caption: 'Slide $c$. Below $9$, the lowest point dips under the axis and there are two solutions. At exactly $c = 9$ the curve just touches: one double root at $x = 3$. Above $9$ it never reaches the axis: no real solutions.',
        },
        {
          type: 'table',
          headers: ['The equation looks like…', 'Fastest method', 'Example'],
          rows: [
            ['no $x$ term ($b = 0$)', 'isolate $x^2$, square root property', '$4x^2 - 9 = 0 \\Rightarrow x = \\pm\\frac{3}{2}$'],
            ['no constant ($c = 0$)', 'factor out $x$', '$x^2 + 7x = 0 \\Rightarrow x = 0, -7$'],
            ['$(\\text{something})^2 = k$', 'square root property', '$(x + 1)^2 = 5 \\Rightarrow x = -1 \\pm \\sqrt{5}$'],
            ['trinomial with "nice" numbers', 'factor', '$x^2 - 7x + 12 = 0 \\Rightarrow x = 3, 4$'],
            ['anything else', 'completing the square or the quadratic formula (next lessons)', '$x^2 + x - 1 = 0$'],
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'On exams, always show the factored form and the "$= 0$ or $= 0$" line. Graders give partial credit for correct factoring even if an arithmetic slip follows. And if a problem says "solve by factoring", a correct answer from another method may not earn full marks.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'What are the solutions of $x^2 - 10x + 25 = 0$?',
      options: [
        { text: '$x = 5$ only', correct: true, why: '$x^2 - 10x + 25 = (x - 5)^2$, a perfect square. Both factors give $x = 5$: a double root.' },
        { text: '$x = 5$ and $x = -5$', why: 'That would be the answer to $x^2 = 25$. Here $(-5)^2 - 10(-5) + 25 = 100 \\neq 0$.' },
        { text: '$x = -5$ only', why: 'Sign slip: $(x + 5)^2 = x^2 + 10x + 25$, with a $+10x$.' },
        { text: 'No real solutions', why: 'The parabola does reach the axis; it touches it at $x = 5$.' },
      ],
      explanation: 'Recognise the [[perfect-square-trinomial]] $a^2 - 2ab + b^2 = (a - b)^2$ with $a = x$, $b = 5$. Then $(x - 5)^2 = 0$ forces $x - 5 = 0$. Geometrically, the vertex of $y = x^2 - 10x + 25$ sits exactly on the $x$-axis at $(5, 0)$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'order',
      prompt: 'Put the steps for solving $3x^2 + 6x = 24$ in order.',
      lines: [
        '$3x^2 + 6x - 24 = 0$',
        '$3(x^2 + 2x - 8) = 0$',
        '$3(x + 4)(x - 2) = 0$',
        '$x + 4 = 0$ or $x - 2 = 0$',
        '$x = -4$ or $x = 2$',
      ],
      distractors: ['$x(3x + 6) = 24$, so $x = 24$ or $3x + 6 = 24$'],
      explanation: 'Standard form first, then the GCF $3$, then factor the trinomial ($4 \\cdot (-2) = -8$, $4 + (-2) = 2$), then the zero product property. The distractor applies the zero product property to a product equal to $24$, which is not allowed.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Word problems: some roots do not fit',
      blocks: [
        {
          type: 'p',
          text: 'Quadratics appear whenever two unknown lengths multiply (areas) or time gets squared (falling objects). The algebra always produces every solution of the equation, but the *situation* may rule some out: a width cannot be negative, and a time before launch may be meaningless.',
        },
        {
          type: 'derivation',
          title: 'A rectangular arena is $4$ m longer than it is wide and has area $60$ m². Find its width.',
          steps: [
            { tex: 'w(w + 4) = 60', why: 'Let $w$ be the width; then the length is $w + 4$, and area is width times length.' },
            { tex: 'w^2 + 4w - 60 = 0', why: 'Expand and move $60$ across to get standard form.' },
            { tex: '(w + 10)(w - 6) = 0', why: '$10 \\cdot (-6) = -60$ and $10 + (-6) = 4$.' },
            { tex: 'w = -10 \\quad \\text{or} \\quad w = 6', why: 'Zero product property.' },
            { tex: 'w = 6', why: 'A width must be positive, so reject $-10$. Check: $6 \\cdot 10 = 60$ ✓.' },
          ],
          result: 'The arena is $6$ m wide and $10$ m long.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Rejecting a root is a decision about the **model**, not the algebra. Write one sentence saying why ("width must be positive"). Instructors look for it, and it keeps you honest: if *both* roots look impossible, recheck your setup.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A rectangular game map is $3$ units longer than it is wide, and its area is $40$ square units. What is its width?',
      label: 'width $=$',
      answer: '5',
      hint: 'Set up $w(w + 3) = 40$, put it in standard form and factor.',
      explanation: '$w(w + 3) = 40$ gives $w^2 + 3w - 40 = 0$, which factors as $(w + 8)(w - 5) = 0$. So $w = -8$ or $w = 5$. A width cannot be negative, so $w = 5$ (and the length is $8$; check $5 \\cdot 8 = 40$).',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the reasoning.',
      template: 'From $(x - 7)(x + 1) = 0$ we conclude $x =$ ___ or $x =$ ___, because a product can only equal ___ if one of its factors does.',
      blanks: [{ answers: ['$7$'] }, { answers: ['$-1$'] }, { answers: ['zero'] }],
      wordBank: ['$7$', '$-1$', 'zero', '$-7$', '$1$', 'one'],
      explanation: '$x - 7 = 0$ gives $x = 7$, and $x + 1 = 0$ gives $x = -1$. Watch the signs: the factor $(x + 1)$ is zero at $x = -1$, not $x = 1$. The reasoning relies on the zero product property, which works for zero and nothing else.',
    },
  ],
  takeaways: [
    'A quadratic equation can be written as $ax^2 + bx + c = 0$ with $a \\neq 0$; its solutions are the $x$-intercepts of $y = ax^2 + bx + c$.',
    'Zero product property: if $AB = 0$ then $A = 0$ or $B = 0$. Get $0$ on one side **before** factoring.',
    'Factor out common factors, including $x$; never divide both sides by an expression that could be zero.',
    'Square root property: $u^2 = k > 0$ gives $u = \\pm\\sqrt{k}$. The $\\pm$ is not optional.',
    'A perfect square like $(x - 3)^2 = 0$ gives a single double root; in word problems, reject roots the situation rules out.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.5 Quadratic Equations',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations',
      source: 'openstax',
      note: 'Covers factoring and the square root property with many practice problems and answers.',
    },
    {
      title: "Paul's Online Notes — Quadratic Equations, Part I",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/SolveQuadraticEqnsI.aspx',
      source: 'paul',
      note: 'Factoring and square-root methods with carefully worked examples, including the divide-by-$x$ trap.',
    },
    {
      title: 'Khan Academy — Algebra 2',
      url: 'https://www.khanacademy.org/math/algebra2',
      source: 'khan',
      note: 'Short videos and auto-graded practice on solving quadratics by factoring.',
    },
  ],
};
