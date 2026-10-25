import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-polynomial-arithmetic',
  title: 'Polynomial Arithmetic',
  summary: 'Polynomials are the integers of algebra: learn their vocabulary, then add, subtract, multiply and divide them by monomials.',
  minutes: 17,
  objectives: [
    'Recognise polynomials and state their degree, leading coefficient and standard form',
    'Add and subtract polynomials, distributing a minus sign correctly',
    'Multiply polynomials of any size by distributing every term, using FOIL or an area grid',
    'Use the special products $(a \\pm b)^2$ and $(a + b)(a - b)$ and avoid $(a + b)^2 = a^2 + b^2$',
    'Divide a polynomial by a monomial and check any result by substitution',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What makes something a polynomial',
      blocks: [
        {
          type: 'definition',
          term: 'Polynomial',
          text: 'A [[polynomial]] in $x$ is a sum of terms of the form $ax^n$, where each coefficient $a$ is a real number and each exponent $n$ is a **whole number** ($0, 1, 2, \\dots$). A polynomial with one term is a [[monomial]], with two a [[binomial]], with three a [[trinomial]].',
        },
        {
          type: 'table',
          headers: ['Expression', 'Polynomial?', 'Reason'],
          rows: [
            ['$5x^3 - 2x + 7$', 'yes', 'whole-number exponents $3, 1, 0$'],
            ['$\\frac{1}{2}x^2 - \\sqrt{3}$', 'yes', 'coefficients may be any real numbers'],
            ['$4x^{-1} + 1$', 'no', '$x^{-1} = \\frac{1}{x}$: negative exponent'],
            ['$\\sqrt{x} + 2$', 'no', '$\\sqrt{x} = x^{1/2}$: fractional exponent'],
            ['$\\frac{3}{x^2 + 1}$', 'no', 'variable in a denominator'],
          ],
          caption: 'The restriction is on the **exponents of the variable**, not on the coefficients.',
        },
        {
          type: 'p',
          text: 'The [[degree]] of a term is the sum of the exponents of its variables: $-7x^4$ has degree $4$, $4x^2y^3$ has degree $2 + 3 = 5$, and a nonzero constant has degree $0$. The degree of a polynomial is the **largest** degree of any of its terms. Written in **standard form** (descending powers), the first term\'s coefficient is the [[leading-coefficient]].',
        },
        {
          type: 'math',
          tex: '\\underbrace{-2x^3}_{\\text{leading term}} + 5x^2 - x + 8 \\qquad \\text{degree } 3,\\ \\text{leading coefficient } -2',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why mathematicians single out polynomials',
          text: 'Add, subtract or multiply two polynomials and you always get another polynomial — just as integers stay integers under $+$, $-$, $\\times$. Division can leave the family (like $1 \\div 3$ leaves the integers), which is why fractions of polynomials get their own lesson later in this unit. Polynomials are also easy to compute: only multiplication and addition, which is why calculators and game engines approximate harder functions with them.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A polynomial in every game',
          text: 'The `smoothstep` easing curve used in shaders and animation is the cubic $3t^2 - 2t^3$ for $0 \\le t \\le 1$. It starts and ends with zero slope, so motion eases in and out instead of jerking.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which of these is **not** a polynomial?',
      options: [
        { text: '$\\frac{x^2}{4} - 3x$', why: 'Dividing by the constant $4$ just gives the coefficient $\\frac{1}{4}$. Exponents $2$ and $1$ are whole numbers.' },
        { text: '$7$', why: 'A constant is a polynomial of degree $0$ (think $7x^0$).' },
        { text: '$3x^{-2} + 1$', correct: true, why: 'The exponent $-2$ is negative; $3x^{-2} = \\frac{3}{x^2}$ puts the variable in a denominator.' },
        { text: '$\\pi x^5 - \\sqrt{2}\\,x$', why: 'Irrational *coefficients* are fine; only the exponents of $x$ must be whole numbers.' },
      ],
      explanation: 'A polynomial\'s variable exponents must be whole numbers $0, 1, 2, \\dots$. Coefficients can be anything real — fractions, $\\pi$, $\\sqrt{2}$. Only $3x^{-2} + 1$ breaks the rule.',
    },
    {
      kind: 'numeric',
      prompt: 'What is the degree of the polynomial $4x^2y^3 - 7x^4 + 2$?',
      hint: 'Find the degree of each term (add the exponents within a term), then take the largest.',
      label: 'degree $=$',
      answer: '5',
      explanation: 'Term degrees: $4x^2y^3$ has $2 + 3 = 5$; $-7x^4$ has $4$; the constant $2$ has $0$. The polynomial\'s degree is the largest, $5$. A common slip is answering $4$ by looking only at the highest single exponent.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Adding and subtracting polynomials',
      blocks: [
        {
          type: 'p',
          text: 'Adding polynomials is just combining like terms from the previous lesson. Subtracting adds one twist: the minus sign in front of the second polynomial multiplies **every** term inside it, so all of their signs flip.',
        },
        {
          type: 'derivation',
          title: '$(3x^3 - 2x^2 + 5x - 1) - (x^3 + 4x^2 - 5x + 6)$',
          steps: [
            { tex: '3x^3 - 2x^2 + 5x - 1 - x^3 - 4x^2 + 5x - 6', why: 'Distribute $-1$ over the second polynomial: every sign inside flips.' },
            { tex: '= (3x^3 - x^3) + (-2x^2 - 4x^2) + (5x + 5x) + (-1 - 6)', why: 'Group like terms by degree.' },
            { tex: '= 2x^3 - 6x^2 + 10x - 7', why: 'Add the coefficients in each group.' },
          ],
          result: 'The difference is $2x^3 - 6x^2 + 10x - 7$.',
        },
        {
          type: 'table',
          headers: ['row', '$x^3$', '$x^2$', '$x$', 'const'],
          rows: [
            ['first', '$3$', '$-2$', '$5$', '$-1$'],
            ['minus second', '$-1$', '$-4$', '$+5$', '$-6$'],
            ['result', '$2$', '$-6$', '$10$', '$-7$'],
          ],
          caption: 'The vertical layout: line up coefficients by power, flip the signs of the subtracted row, add each column. This is exactly how a program stores a polynomial — as an array of coefficients — and adds two of them.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The sign flip applies to every term',
          text: 'The most common error is flipping only the first term: writing $-(x^3 + 4x^2 - 5x + 6)$ as $-x^3 + 4x^2 - 5x + 6$. The minus is a factor of $-1$ multiplying the whole group.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Subtract and simplify.',
      tex: '(5x^2 - 3x + 2) - (2x^2 + 4x - 9)',
      answer: '3x^2 - 7x + 11',
      answerTex: '3x^2 - 7x + 11',
      hint: 'First rewrite the second polynomial with every sign flipped: $-2x^2 - 4x + 9$.',
      explanation: 'Flip the signs of the second polynomial: $5x^2 - 3x + 2 - 2x^2 - 4x + 9$. Combine: $x^2$: $5 - 2 = 3$; $x$: $-3 - 4 = -7$; constants: $2 + 9 = 11$. Result: $3x^2 - 7x + 11$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Multiplying: every term times every term',
      blocks: [
        {
          type: 'p',
          text: 'To multiply monomials, multiply the coefficients and add exponents of matching variables (the product rule $x^m \\cdot x^n = x^{m+n}$ from the exponents lesson): $(3x^2)(-4x^5) = -12x^7$. To multiply longer polynomials, apply the [[distributive-property]] until **every term of the first** has multiplied **every term of the second**.',
        },
        {
          type: 'p',
          text: 'For two binomials there are exactly four products, often remembered as [[foil|FOIL]]: **F**irst, **O**uter, **I**nner, **L**ast.',
        },
        {
          type: 'derivation',
          title: 'Multiply $(2x + 3)(x - 4)$',
          steps: [
            { tex: '(2x + 3)(x - 4) = 2x(x - 4) + 3(x - 4)', why: 'Distribute the second factor over the first: each term of $2x + 3$ takes a turn multiplying $(x - 4)$.' },
            { tex: '= 2x^2 - 8x + 3x - 12', why: 'Distribute again. The four products are F $= 2x^2$, O $= -8x$, I $= 3x$, L $= -12$.' },
            { tex: '= 2x^2 - 5x - 12', why: 'The outer and inner products are like terms; combine them.' },
          ],
          result: '$(2x + 3)(x - 4) = 2x^2 - 5x - 12$.',
        },
        {
          type: 'table',
          headers: ['$\\times$', '$x$', '$-4$'],
          rows: [
            ['$2x$', '$2x^2$', '$-8x$'],
            ['$3$', '$3x$', '$-12$'],
          ],
          caption: 'The area model: a rectangle with sides $2x + 3$ and $x - 4$ splits into four smaller rectangles. Add the four cells to get the product.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why FOIL is not a separate rule',
          text: 'FOIL is just the distributive property applied twice, and it only lists the four products of a binomial times a binomial. For a binomial times a trinomial there are $2 \\times 3 = 6$ products, and FOIL has no letters for them. The grid always works: one row per term of the first factor, one column per term of the second.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Multiply and simplify.',
      tex: '(3x - 2)(2x + 5)',
      answer: '6x^2 + 11x - 10',
      answerTex: '6x^2 + 11x - 10',
      hint: 'F: $3x \\cdot 2x$. O: $3x \\cdot 5$. I: $-2 \\cdot 2x$. L: $-2 \\cdot 5$.',
      explanation: 'The four products are $6x^2$, $15x$, $-4x$ and $-10$. The middle two combine: $15x - 4x = 11x$. So $(3x - 2)(2x + 5) = 6x^2 + 11x - 10$. Quick check at $x = 1$: $(1)(7) = 7$ and $6 + 11 - 10 = 7$ ✓.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Bigger products and the degree of a product',
      blocks: [
        {
          type: 'derivation',
          title: 'Multiply $(x + 2)(x^2 - 3x + 4)$',
          steps: [
            { tex: '= x(x^2 - 3x + 4) + 2(x^2 - 3x + 4)', why: 'Each term of the binomial multiplies the whole trinomial.' },
            { tex: '= x^3 - 3x^2 + 4x + 2x^2 - 6x + 8', why: 'Distribute: $2 \\times 3 = 6$ products in total.' },
            { tex: '= x^3 + (-3 + 2)x^2 + (4 - 6)x + 8', why: 'Group like terms.' },
            { tex: '= x^3 - x^2 - 2x + 8', why: 'Combine coefficients.' },
          ],
          result: '$(x + 2)(x^2 - 3x + 4) = x^3 - x^2 - 2x + 8$.',
        },
        {
          type: 'p',
          text: 'Two bookkeeping facts help you catch mistakes. First, a polynomial with $m$ terms times one with $n$ terms produces $m \\times n$ products before combining. Second, the leading terms multiply to give the leading term of the product, so **degrees add**: degree $1$ times degree $2$ gave degree $3$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Check any product with $x = 1$',
          text: 'Substituting $x = 1$ turns every power into $1$, so a polynomial evaluates to the sum of its coefficients. Above: $(1 + 2)(1 - 3 + 4) = 3 \\cdot 2 = 6$, and $1 - 1 - 2 + 8 = 6$ ✓. It takes five seconds and catches most sign errors. (Try $x = 2$ too — $x = 1$ cannot catch an exponent mistake.)',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student multiplies $(x - 3)(x^2 + 2x - 1)$. Tap the first line that is wrong.',
      lines: [
        '$(x - 3)(x^2 + 2x - 1)$',
        '$= x \\cdot x^2 + x \\cdot 2x + x(-1) + (-3)x^2 + (-3)(2x) + (-3)(-1)$',
        '$= x^3 + 2x^2 - x - 3x^2 - 6x - 3$',
        '$= x^3 - x^2 - 7x - 3$',
      ],
      errorLines: [3],
      explanation: 'Line 2 correctly lists all six products. Line 3 evaluates $(-3)(-1)$ as $-3$, but a negative times a negative is $+3$. The correct product is $x^3 + 2x^2 - x - 3x^2 - 6x + 3 = x^3 - x^2 - 7x + 3$. The $x = 1$ check would have caught it: $(1 - 3)(1 + 2 - 1) = -4$, while $1 - 1 - 7 - 3 = -10$.',
    },
    {
      kind: 'numeric',
      prompt: 'Without expanding everything, what is the degree of $(x^3 + 1)(2x^4 - x)$?',
      hint: 'Only the leading terms matter for the degree.',
      label: 'degree $=$',
      answer: '7',
      explanation: 'The leading terms multiply: $x^3 \\cdot 2x^4 = 2x^7$, and nothing else in the product can reach (or cancel) that power. So the degree is $3 + 4 = 7$. Degrees **add** under multiplication — multiplying them ($12$) is a common slip, coming from confusing $x^3 \\cdot x^4$ with $(x^3)^4$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Special products',
      blocks: [
        {
          type: 'p',
          text: 'Three products appear so often that it pays to know them by heart. Each is just FOIL done once in general, with letters $a$ and $b$ standing for any expressions.',
        },
        {
          type: 'theorem',
          name: 'Special products',
          tex: '\\begin{aligned} (a + b)^2 &= a^2 + 2ab + b^2 \\\\ (a - b)^2 &= a^2 - 2ab + b^2 \\\\ (a + b)(a - b) &= a^2 - b^2 \\end{aligned}',
        },
        {
          type: 'derivation',
          title: 'Why $(a + b)^2$ has a middle term',
          steps: [
            { tex: '(a + b)^2 = (a + b)(a + b)', why: 'Squaring means multiplying the binomial by itself.' },
            { tex: '= a^2 + ab + ba + b^2', why: 'FOIL: four products.' },
            { tex: '= a^2 + 2ab + b^2', why: '$ab$ and $ba$ are like terms, and they **add** rather than cancel.' },
          ],
          result: 'The middle term $2ab$ is the outer plus the inner product. In $(a + b)(a - b)$ those two are $-ab$ and $+ab$, which cancel — leaving $a^2 - b^2$.',
        },
        {
          type: 'compare',
          left: { title: 'Wrong ("freshman\'s dream")', tone: 'bad', tex: ['(x + 3)^2 = x^2 + 9'] },
          right: { title: 'Right', tone: 'good', tex: ['(x + 3)^2 = x^2 + 6x + 9'] },
        },
        {
          type: 'p',
          text: 'Graphs make the difference impossible to miss. Move the slider: the curves $y = (x + a)^2$ and $y = x^2 + a^2$ only agree where the missing middle term $2ax$ is zero.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-2, 20],
          yStep: 2,
          functions: [
            { expr: '(x + a)^2', label: '$y = (x + a)^2$' },
            { expr: 'x^2 + a^2', label: '$y = x^2 + a^2$', color: 'red', dashed: true },
          ],
          sliders: [{ name: 'a', min: -3, max: 3, step: 0.5, value: 2, label: '$a$' }],
          caption: 'For any $a \\neq 0$ the curves meet only at $x = 0$. At $a = 0$ they coincide, because then $2ax = 0$ for every $x$.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'The area picture',
          text: 'A square of side $a + b$ splits into an $a \\times a$ square, a $b \\times b$ square, and **two** $a \\times b$ rectangles. Forgetting $2ab$ is forgetting the two rectangles.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'For every real number $x$, $(x - 5)^2 = x^2 - 25$.',
      answer: false,
      explanation: '$(x - 5)^2 = x^2 - 10x + 25$: the middle term $-2 \\cdot x \\cdot 5$ is missing, and the last term is $(-5)^2 = +25$, not $-25$. Test at $x = 0$: $(0 - 5)^2 = 25$ but $0 - 25 = -25$. The expression $x^2 - 25$ is $(x - 5)(x + 5)$ instead.',
    },
    {
      kind: 'expr',
      prompt: 'Expand using a special-product pattern.',
      tex: '(2x - 3)^2',
      answer: '4x^2 - 12x + 9',
      answerTex: '4x^2 - 12x + 9',
      hint: 'Use $(a - b)^2 = a^2 - 2ab + b^2$ with $a = 2x$ and $b = 3$.',
      explanation: 'With $a = 2x$, $b = 3$: $a^2 = 4x^2$, $2ab = 2(2x)(3) = 12x$, $b^2 = 9$. So $(2x - 3)^2 = 4x^2 - 12x + 9$. Note $a^2 = (2x)^2 = 4x^2$, not $2x^2$: the square applies to the coefficient too.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Dividing by a monomial',
      blocks: [
        {
          type: 'p',
          text: 'Dividing a polynomial by a single term is the reverse of distributing: split the fraction so that **each term** of the numerator is divided by the monomial, then use $\\frac{x^m}{x^n} = x^{m - n}$. (Dividing by a binomial or larger takes long division, coming in a later unit.)',
        },
        {
          type: 'derivation',
          title: 'Divide $\\dfrac{6x^3 - 9x^2 + 3x}{3x}$',
          steps: [
            { tex: '= \\frac{6x^3}{3x} - \\frac{9x^2}{3x} + \\frac{3x}{3x}', why: 'A sum over a common denominator splits: $\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$.' },
            { tex: '= 2x^2 - 3x + 1', why: 'Divide coefficients and subtract exponents. The last term is $\\frac{3x}{3x} = 1$, not $0$.' },
          ],
          result: 'For $x \\neq 0$: $\\frac{6x^3 - 9x^2 + 3x}{3x} = 2x^2 - 3x + 1$. Check by multiplying back: $3x(2x^2 - 3x + 1) = 6x^3 - 9x^2 + 3x$ ✓.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'You can split the numerator, never the denominator',
          text: '$\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$ is always true. But $\\frac{c}{a + b} \\neq \\frac{c}{a} + \\frac{c}{b}$: try $\\frac{2}{1 + 1} = 1$, while $\\frac{2}{1} + \\frac{2}{1} = 4$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Every answer on this card is only valid where the divisor is nonzero. Instructors increasingly expect you to write the restriction ($x \\neq 0$) — it becomes essential in the rational expressions lesson.',
        },
      ],
    },
    {
      kind: 'fill',
      prompt: 'Complete the special-product identities.',
      template: '$(a + b)^2 = a^2 +$ ___ $+ b^2$, and $(a + b)(a - b) =$ ___.',
      blanks: [{ answers: ['$2ab$'] }, { answers: ['$a^2 - b^2$'] }],
      wordBank: ['$2ab$', '$ab$', '$0$', '$a^2 - b^2$', '$a^2 + b^2$', '$a^2 - 2ab - b^2$'],
      explanation: 'Squaring a sum produces two equal cross products, $ab + ba = 2ab$. In $(a + b)(a - b)$ the cross products are $-ab$ and $+ab$, which cancel, leaving the **difference of squares** $a^2 - b^2$. You will run both identities backwards when factoring.',
    },
    {
      kind: 'expr',
      prompt: 'Divide (assume $x \\neq 0$).',
      tex: '\\frac{12x^4 - 8x^3 + 4x^2}{4x^2}',
      answer: '3x^2 - 2x + 1',
      answerTex: '3x^2 - 2x + 1',
      hint: 'Divide each of the three terms by $4x^2$ separately.',
      explanation: '$\\frac{12x^4}{4x^2} = 3x^2$, $\\frac{-8x^3}{4x^2} = -2x$, $\\frac{4x^2}{4x^2} = 1$. So the quotient is $3x^2 - 2x + 1$. Check: $4x^2(3x^2 - 2x + 1) = 12x^4 - 8x^3 + 4x^2$ ✓.',
    },
  ],
  takeaways: [
    'A polynomial is a sum of terms $ax^n$ with whole-number exponents; its degree is the largest term degree.',
    'Subtracting a polynomial flips the sign of every one of its terms.',
    'To multiply, every term of one factor multiplies every term of the other ($m \\times n$ products); FOIL is the $2 \\times 2$ case.',
    'Degrees add when polynomials multiply.',
    '$(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ and $(a + b)(a - b) = a^2 - b^2$ — never $(a + b)^2 = a^2 + b^2$.',
    'Divide by a monomial term by term; check any product or quotient by substituting a number.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 1.4 Polynomials',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-4-polynomials',
      source: 'openstax',
      note: 'Definitions, adding, subtracting and multiplying polynomials, and the special products, with worked examples.',
    },
    {
      title: "Paul's Online Notes — Polynomials",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/Polynomials.aspx',
      source: 'paul',
      note: 'A thorough college-level treatment including the common mistakes with special products.',
    },
    {
      title: 'Wikipedia — Smoothstep',
      url: 'https://en.wikipedia.org/wiki/Smoothstep',
      source: 'wikipedia',
      note: 'The polynomial easing curves used in graphics and games, and why their coefficients are chosen as they are.',
    },
  ],
};
