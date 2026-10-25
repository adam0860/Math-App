import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-factoring-trinomials',
  title: 'Factoring Trinomials and Special Patterns',
  summary: 'Factor $x^2 + bx + c$ and $ax^2 + bx + c$, spot squares and cubes, and follow a strategy that factors anything this course throws at you.',
  minutes: 18,
  objectives: [
    'Factor $x^2 + bx + c$ by finding two numbers with product $c$ and sum $b$',
    'Factor $ax^2 + bx + c$ with the AC method (splitting the middle term)',
    'Recognise and factor differences of squares and perfect square trinomials',
    'Factor sums and differences of cubes',
    'Apply a complete factoring strategy, starting with the GCF',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Trinomials of the form $x^2 + bx + c$',
      blocks: [
        {
          type: 'p',
          text: 'To factor a [[trinomial]], look at what happens when you multiply two binomials that each start with $x$. The pattern tells you exactly what to search for.',
        },
        {
          type: 'math',
          tex: '(x + m)(x + n) = x^2 + nx + mx + mn = x^2 + \\underbrace{(m + n)}_{b}\\,x + \\underbrace{mn}_{c}',
        },
        {
          type: 'theorem',
          name: 'Factoring $x^2 + bx + c$',
          text: 'Find two integers $m$ and $n$ with $m \\cdot n = c$ and $m + n = b$. Then $x^2 + bx + c = (x + m)(x + n)$. If no such integers exist, the trinomial does not factor over the integers.',
        },
        {
          type: 'derivation',
          title: 'Factor $x^2 + 7x + 12$',
          steps: [
            { tex: 'mn = 12, \\quad m + n = 7', why: 'Read $c = 12$ and $b = 7$ off the trinomial.' },
            { tex: '1 \\cdot 12,\\ 2 \\cdot 6,\\ 3 \\cdot 4', why: 'List the factor pairs of $12$. Both numbers must be positive: the product is positive and so is the sum.' },
            { tex: '3 + 4 = 7 \\ \\checkmark', why: 'Their sums are $13$, $8$ and $7$; only $3$ and $4$ add to $7$.' },
            { tex: 'x^2 + 7x + 12 = (x + 3)(x + 4)', why: 'Place the two numbers in the binomials. Check: $x^2 + 4x + 3x + 12$ ✓.' },
          ],
        },
        {
          type: 'table',
          headers: ['Signs of $b$, $c$', 'Signs of $m$, $n$', 'Example'],
          rows: [
            ['$c > 0$, $b > 0$', 'both positive', '$x^2 + 7x + 12 = (x + 3)(x + 4)$'],
            ['$c > 0$, $b < 0$', 'both negative', '$x^2 - 9x + 18 = (x - 3)(x - 6)$'],
            ['$c < 0$', 'opposite signs; the larger one has the sign of $b$', '$x^2 + 2x - 15 = (x + 5)(x - 3)$'],
          ],
          caption: 'Use the signs to cut the search down before listing factor pairs.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only integers?',
          text: '"Factor" in this course means factor over the integers unless stated otherwise. Every quadratic *can* be written as a product of linear factors if irrational or complex numbers are allowed — you will see that with the quadratic formula — but when no integer pair works, we call the trinomial **prime** (over the integers).',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Factor $x^2 - x - 20$.',
      options: [
        { text: '$(x + 5)(x - 4)$', why: 'The product is $-20$, but the sum is $5 - 4 = +1$. You need a sum of $-1$, so the signs are reversed.' },
        { text: '$(x - 5)(x + 4)$', correct: true, why: '$(-5)(4) = -20$ and $-5 + 4 = -1$. ✓' },
        { text: '$(x - 10)(x + 2)$', why: 'The product is $-20$, but the sum is $-8$, not $-1$.' },
        { text: '$(x - 5)(x - 4)$', why: 'This product gives $+20$; a negative $c$ needs numbers of opposite sign.' },
      ],
      explanation: 'We need $mn = -20$ and $m + n = -1$. Since $c < 0$ the numbers have opposite signs, and since $b < 0$ the larger one is negative. Factor pairs $(1, 20), (2, 10), (4, 5)$ — only $4$ and $5$ differ by $1$, giving $-5$ and $4$. So $x^2 - x - 20 = (x - 5)(x + 4)$.',
    },
    {
      kind: 'numeric',
      prompt: 'Write $x^2 - 9x + 18 = (x - p)(x - q)$. Enter $p$ and $q$, separated by a comma.',
      hint: 'You need two numbers that multiply to $18$ and add to $9$ (here written as $p$ and $q$, since the minus signs are already in the binomials).',
      label: '$p, q =$',
      answer: ['3', '6'],
      explanation: 'Expanding $(x - p)(x - q) = x^2 - (p + q)x + pq$ shows we need $p + q = 9$ and $pq = 18$. Factor pairs of $18$: $(1, 18), (2, 9), (3, 6)$, with sums $19, 11, 9$. So $p, q = 3, 6$ and $x^2 - 9x + 18 = (x - 3)(x - 6)$.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'When $a \\neq 1$: the AC method',
      blocks: [
        {
          type: 'p',
          text: 'With a leading coefficient other than $1$, guessing binomials gets slow. The [[ac-method|AC method]] turns the trinomial into four terms and then uses grouping from the previous lesson. Always factor out any GCF first.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Multiply $a \\cdot c$', text: 'For $ax^2 + bx + c$, compute the product of the outer coefficients.' },
            { title: 'Find the pair', text: 'Find two integers whose product is $ac$ and whose sum is $b$.' },
            { title: 'Split the middle term', text: 'Rewrite $bx$ as the sum of two terms using those integers.' },
            { title: 'Group', text: 'Factor the four terms by grouping.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Factor $6x^2 + 11x - 10$',
          steps: [
            { tex: 'ac = 6 \\cdot (-10) = -60, \\quad b = 11', why: 'Step 1. We need two numbers with product $-60$ and sum $11$.' },
            { tex: '15 \\cdot (-4) = -60, \\quad 15 + (-4) = 11', why: 'Opposite signs (product negative), larger one positive (sum positive). Among the pairs of $60$, $15$ and $4$ differ by $11$.' },
            { tex: '6x^2 + 15x - 4x - 10', why: 'Step 3: split $11x$ into $15x - 4x$. The value is unchanged.' },
            { tex: '= 3x(2x + 5) - 2(2x + 5)', why: 'Group the pairs; factor $3x$ from the first and $-2$ from the second so the binomials match.' },
            { tex: '= (2x + 5)(3x - 2)', why: 'Factor out the common binomial.' },
          ],
          result: '$6x^2 + 11x - 10 = (2x + 5)(3x - 2)$ — exactly the product you computed by FOIL in the polynomial arithmetic lesson, now run backwards.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the magic number is $ac$',
          text: 'Expand a general product: $(px + q)(rx + s) = pr\\,x^2 + (ps + qr)\\,x + qs$. So $a = pr$, $c = qs$, and the middle coefficient is the sum of the outer and inner coefficients $ps$ and $qr$. Their product is $ps \\cdot qr = (pr)(qs) = ac$. The AC method searches for precisely those two hidden numbers and puts the outer and inner terms back.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'It does not matter which order you write the two middle terms: $6x^2 - 4x + 15x - 10 = 2x(3x - 2) + 5(3x - 2)$ gives the same factors.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Order the steps of the AC method for $2x^2 + 7x + 3$.',
      lines: [
        '$ac = 2 \\cdot 3 = 6$',
        'Two numbers with product $6$ and sum $7$: $6$ and $1$',
        '$2x^2 + 6x + x + 3$',
        '$2x(x + 3) + 1(x + 3)$',
        '$(x + 3)(2x + 1)$',
      ],
      distractors: ['Two numbers with product $3$ and sum $7$'],
      explanation: 'Multiply $a \\cdot c = 6$, find $6 \\cdot 1 = 6$ with $6 + 1 = 7$, split $7x = 6x + x$, group as $2x(x + 3) + 1(x + 3)$, and pull out $(x + 3)$. The distractor uses $c = 3$ alone — that shortcut only works when $a = 1$.',
    },
    {
      kind: 'expr',
      prompt: 'One factor of $3x^2 - 10x - 8$ is $(3x + 2)$. Enter the other factor.',
      tex: '3x^2 - 10x - 8 = (3x + 2)(\\;?\\;)',
      label: '$? =$',
      answer: 'x - 4',
      answerTex: 'x - 4',
      hint: 'The other factor must start with $x$ (to make $3x^2$) and end with a number $k$ so that $2k = -8$.',
      explanation: 'The first terms must multiply to $3x^2$, so the missing factor starts with $x$; the last terms must multiply to $-8$, so $2 \\cdot k = -8$ gives $k = -4$. Check the middle term: outer $3x \\cdot (-4) = -12x$, inner $2 \\cdot x = 2x$, sum $-10x$ ✓. So $3x^2 - 10x - 8 = (3x + 2)(x - 4)$. (AC method: $ac = -24$, numbers $-12$ and $2$.)',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Difference of squares',
      blocks: [
        {
          type: 'theorem',
          name: 'Difference of squares',
          tex: 'a^2 - b^2 = (a - b)(a + b)',
          text: 'Any expression that is one perfect square minus another factors this way.',
        },
        {
          type: 'p',
          text: 'You met this product in the arithmetic lesson: in $(a - b)(a + b)$ the outer and inner products $+ab$ and $-ab$ cancel. Factoring a [[difference-of-squares]] means recognising the two squares, $a^2$ and $b^2$, and writing down $a$ and $b$.',
        },
        {
          type: 'derivation',
          title: 'Factor $9x^2 - 25$ and $x^4 - 16$',
          steps: [
            { tex: '9x^2 - 25 = (3x)^2 - 5^2', why: 'Both terms are perfect squares: $a = 3x$, $b = 5$.' },
            { tex: '= (3x - 5)(3x + 5)', why: 'Apply the pattern.' },
            { tex: 'x^4 - 16 = (x^2)^2 - 4^2 = (x^2 - 4)(x^2 + 4)', why: 'Here $a = x^2$ and $b = 4$.' },
            { tex: '= (x - 2)(x + 2)(x^2 + 4)', why: '$x^2 - 4$ is *another* difference of squares — keep going until nothing factors.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A sum of squares does not factor (over the reals)',
          text: '$x^2 + 4$ has no real factorisation. If $x^2 + 4 = (x + m)(x + n)$, we would need $m + n = 0$ and $mn = 4$; but $n = -m$ forces $mn = -m^2 \\le 0$. Graphically, $x^2 + 4$ is always at least $4$, so it never equals zero — yet a real linear factor $x - r$ would make it zero at $x = r$.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-10, 12],
          yStep: 2,
          functions: [
            { expr: 'x^2 - a^2', label: '$y = x^2 - a^2$' },
            { expr: 'x^2 + a^2', label: '$y = x^2 + a^2$', color: 'red', dashed: true },
          ],
          points: [
            { x: 'a', y: 0, label: 'x = a' },
            { x: '-a', y: 0, label: 'x = −a' },
          ],
          sliders: [{ name: 'a', min: 0.5, max: 3, step: 0.5, value: 2, label: '$a$' }],
          caption: 'The difference $x^2 - a^2 = (x - a)(x + a)$ is zero at $x = \\pm a$, one zero per factor. The sum $x^2 + a^2$ never touches the axis, so it can have no real linear factors.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: '$x^2 + 16 = (x + 4)(x - 4)$.',
      answer: false,
      explanation: '$(x + 4)(x - 4) = x^2 - 16$, a **difference** of squares. The sum $x^2 + 16$ does not factor over the real numbers at all: it is always at least $16$, so it has no real zeros. Checking at $x = 0$: $x^2 + 16 = 16$, but $(4)(-4) = -16$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Perfect square trinomials',
      blocks: [
        {
          type: 'theorem',
          name: 'Perfect square trinomials',
          tex: 'a^2 + 2ab + b^2 = (a + b)^2 \\qquad a^2 - 2ab + b^2 = (a - b)^2',
        },
        {
          type: 'p',
          text: 'A [[perfect-square-trinomial]] has three telltale features: the first and last terms are perfect squares (and positive), and the middle term is **twice the product** of their square roots. Spotting it saves you the factor-pair search.',
        },
        {
          type: 'derivation',
          title: 'Factor $4x^2 - 12x + 9$',
          steps: [
            { tex: '4x^2 = (2x)^2, \\quad 9 = 3^2', why: 'First and last terms are squares: $a = 2x$, $b = 3$.' },
            { tex: '2ab = 2(2x)(3) = 12x \\ \\checkmark', why: 'The middle term must be $\\pm 2ab$. It is $-12x$, so the pattern is $(a - b)^2$.' },
            { tex: '4x^2 - 12x + 9 = (2x - 3)^2', why: 'Apply the pattern with the sign of the middle term.' },
          ],
          result: 'This undoes the expansion $(2x - 3)^2 = 4x^2 - 12x + 9$ from the previous lesson.',
        },
        {
          type: 'p',
          text: 'Perfect squares have a visual signature. Slide $c$ below: the parabola $y = x^2 + 6x + c$ crosses the $x$-axis twice, touches it once, or misses it. It touches exactly when $c = 9$ — when $x^2 + 6x + c = (x + 3)^2$, whose only zero is $x = -3$.',
        },
        {
          type: 'graph',
          x: [-8, 2],
          y: [-6, 10],
          yStep: 2,
          functions: [{ expr: 'x^2 + 6x + c', label: '$y = x^2 + 6x + c$' }],
          points: [{ x: -3, y: 'c - 9', label: 'lowest point' }],
          sliders: [{ name: 'c', min: 4, max: 14, step: 0.5, value: 6, label: '$c$' }],
          readouts: [{ label: 'lowest height $= c - 9$:', expr: 'c - 9', digits: 2 }],
          caption: 'At $c = 9$ the lowest point sits exactly on the axis. Then $c = \\left(\\frac{6}{2}\\right)^2$ — half the middle coefficient, squared. That observation becomes **completing the square** in the quadratics unit.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which of these is a perfect square trinomial?',
      options: [
        { text: '$9x^2 + 6x + 4$', why: '$9x^2 = (3x)^2$ and $4 = 2^2$, but $2(3x)(2) = 12x$, not $6x$.' },
        { text: '$x^2 + 10x - 25$', why: 'The last term is negative, so it cannot be $b^2$.' },
        { text: '$9x^2 + 12x + 4$', correct: true, why: '$(3x)^2 + 2(3x)(2) + 2^2 = (3x + 2)^2$. ✓' },
        { text: '$4x^2 + 4x + 4$', why: 'The middle term would need to be $2(2x)(2) = 8x$. (This one has GCF $4$: $4(x^2 + x + 1)$.)' },
      ],
      explanation: 'Check all three features: square first term, square (positive) last term, and middle term $= 2ab$. For $9x^2 + 12x + 4$: $a = 3x$, $b = 2$, $2ab = 12x$ ✓, so it equals $(3x + 2)^2$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Sums and differences of cubes',
      blocks: [
        {
          type: 'p',
          text: 'Unlike squares, cubes factor whether they are added or subtracted. The patterns look intimidating, but they are easy to verify by multiplying — and there is a mnemonic for the signs.',
        },
        {
          type: 'theorem',
          name: 'Sum and difference of cubes',
          tex: '\\begin{aligned} a^3 + b^3 &= (a + b)(a^2 - ab + b^2) \\\\ a^3 - b^3 &= (a - b)(a^2 + ab + b^2) \\end{aligned}',
          text: '**SOAP** for the signs: the binomial has the **S**ame sign as the original, the middle term has the **O**pposite sign, and the last term is **A**lways **P**ositive.',
        },
        {
          type: 'derivation',
          title: 'Verify $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$',
          steps: [
            { tex: '(a - b)(a^2 + ab + b^2) = a(a^2 + ab + b^2) - b(a^2 + ab + b^2)', why: 'Distribute the binomial over the trinomial.' },
            { tex: '= a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3', why: 'Six products.' },
            { tex: '= a^3 - b^3', why: 'The four middle terms cancel in pairs. That cancellation is why the trinomial has the shape it does.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Factor $8x^3 - 27$',
          steps: [
            { tex: '8x^3 - 27 = (2x)^3 - 3^3', why: 'Both are cubes: $a = 2x$, $b = 3$. Recognise the cubes $1, 8, 27, 64, 125, \\dots$' },
            { tex: '= (2x - 3)\\big((2x)^2 + (2x)(3) + 3^2\\big)', why: 'Difference of cubes: same sign ($-$) in the binomial, opposite ($+$) in the middle, last term positive.' },
            { tex: '= (2x - 3)(4x^2 + 6x + 9)', why: 'Simplify. The quadratic factor never factors further over the reals.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'The trinomial in a cube factorisation has middle term $\\mp ab$, **not** $\\mp 2ab$. So $4x^2 + 6x + 9$ is *not* a perfect square — don\'t try to factor it again.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student factors $x^3 + 64$. Tap the first line that is wrong.',
      lines: [
        '$x^3 + 64 = x^3 + 4^3$, so $a = x$ and $b = 4$.',
        'Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.',
        '$x^3 + 64 = (x + 4)(x^2 + 4x + 16)$',
        'The quadratic factor does not factor further, so this is complete.',
      ],
      errorLines: [3],
      explanation: 'Line 2 states the formula correctly, but line 3 uses $+ab$ instead of $-ab$ for the middle term. By SOAP, a sum of cubes has the *opposite* sign in the middle: $x^3 + 64 = (x + 4)(x^2 - 4x + 16)$. Check at $x = 1$: $1 + 64 = 65$, and $(5)(1 - 4 + 16) = 65$ ✓, whereas the student\'s version gives $(5)(21) = 105$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'A strategy for factoring completely',
      blocks: [
        {
          type: 'p',
          text: 'Exams rarely say which method to use. This checklist decides for you. Go through it in order, and then run it again on every factor you produce.',
        },
        {
          type: 'steps',
          items: [
            { title: 'GCF first', text: 'Always. Factor out the greatest common factor (negative if the leading coefficient is negative). It makes everything after it easier.' },
            { title: 'Two terms?', text: 'Difference of squares $a^2 - b^2$, or sum/difference of cubes $a^3 \\pm b^3$. A sum of squares is prime.' },
            { title: 'Three terms?', text: 'Perfect square trinomial? Otherwise product-and-sum (if $a = 1$) or the AC method.' },
            { title: 'Four terms?', text: 'Try grouping.' },
            { title: 'Repeat and check', text: 'Factor each factor again until none can be factored, then expand to check.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Factor completely: $2x^3 + 10x^2 - 28x$',
          steps: [
            { tex: '= 2x(x^2 + 5x - 14)', why: 'GCF first: $2x$ divides every term.' },
            { tex: 'mn = -14,\\ m + n = 5 \\;\\Rightarrow\\; 7, -2', why: 'Three terms with $a = 1$: product $-14$, sum $5$.' },
            { tex: '= 2x(x + 7)(x - 2)', why: 'Write the trinomial\'s factors next to the GCF.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Factor completely: $3x^4 - 48$',
          steps: [
            { tex: '= 3(x^4 - 16)', why: 'GCF $3$. Without this step, $3x^4 - 48$ doesn\'t look like any pattern.' },
            { tex: '= 3(x^2 - 4)(x^2 + 4)', why: 'Two terms, both squares: difference of squares.' },
            { tex: '= 3(x - 2)(x + 2)(x^2 + 4)', why: 'Repeat: $x^2 - 4$ is a difference of squares; $x^2 + 4$ is a sum of squares and stays.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: '"Factor completely" is the standard instruction, and the most common way to lose points is stopping early — leaving $2x(x^2 - 9)$ or $3(x^4 - 16)$. Before you box an answer, glance at each factor and ask: is this a difference of squares, a trinomial that factors, or does it have a GCF?',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Factor completely: $2x^3 - 18x$.',
      options: [
        { text: '$2x(x^2 - 9)$', why: 'A correct first step, but $x^2 - 9$ is a difference of squares and still factors.' },
        { text: '$2x(x - 3)(x + 3)$', correct: true, why: 'GCF $2x$, then $x^2 - 9 = (x - 3)(x + 3)$. Nothing factors further.' },
        { text: '$2x(x - 3)^2$', why: '$(x - 3)^2 = x^2 - 6x + 9$, not $x^2 - 9$.' },
        { text: '$2(x^3 - 9x)$', why: '$x$ is also common to both terms, so $2$ is not the greatest common factor.' },
      ],
      explanation: 'Step 1, GCF: $2x^3 - 18x = 2x(x^2 - 9)$. Step 2, two terms inside, both squares: $x^2 - 9 = (x - 3)(x + 3)$. So $2x^3 - 18x = 2x(x - 3)(x + 3)$. Expanding confirms: $2x(x^2 - 9) = 2x^3 - 18x$ ✓.',
    },
  ],
  takeaways: [
    '$x^2 + bx + c = (x + m)(x + n)$ when $mn = c$ and $m + n = b$; use the signs of $b$ and $c$ to narrow the search.',
    'For $ax^2 + bx + c$, find two numbers with product $ac$ and sum $b$, split the middle term, and group.',
    '$a^2 - b^2 = (a - b)(a + b)$; a sum of squares $a^2 + b^2$ is prime over the reals.',
    '$a^2 \\pm 2ab + b^2 = (a \\pm b)^2$ — check that the middle term really is $2ab$.',
    '$a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$ (SOAP).',
    'Strategy: GCF first, then count terms, then factor every factor again and check by expanding.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 1.5 Factoring Polynomials',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-5-factoring-polynomials',
      source: 'openstax',
      note: 'Trinomials, perfect squares, differences of squares and cubes, with worked examples and exercises.',
    },
    {
      title: "Paul's Online Notes — Factoring Polynomials",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Factoring.aspx',
      source: 'paul',
      note: 'Lots of fully worked trinomial examples, including the "factor completely" traps.',
    },
    {
      title: 'Khan Academy — Algebra 1',
      url: 'https://www.khanacademy.org/math/algebra',
      source: 'khan',
      note: 'The "Quadratics: Multiplying and factoring" unit gives unlimited practice on each pattern in this lesson.',
    },
  ],
};
