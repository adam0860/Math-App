import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-polynomial-zeros',
  title: 'Finding the Zeros of Polynomials',
  summary: 'A systematic hunt for zeros: guess smartly with the Rational Root Theorem, peel off factors, and know exactly how many zeros to expect.',
  minutes: 18,
  objectives: [
    'Use the Factor Theorem to connect zeros, $x$-intercepts and linear factors',
    'List every possible rational zero of a polynomial with the Rational Root Theorem',
    'Find all zeros of a cubic or quartic by testing candidates, dividing, and finishing with the quadratic formula',
    'State the Fundamental Theorem of Algebra and count zeros with multiplicity',
    'Use conjugate pairs to find complex zeros and to build a polynomial from given zeros',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'The Factor Theorem: zeros are factors',
      blocks: [
        {
          type: 'p',
          text: 'Quadratics have a formula. For cubics and beyond you need a strategy, and it rests on one fact: every zero you find hands you a factor, and dividing out that factor leaves a smaller polynomial. Repeat until what is left is a quadratic, and you are done.',
        },
        {
          type: 'theorem',
          name: 'Factor Theorem',
          tex: 'f(c) = 0 \\iff (x - c) \\text{ is a factor of } f(x)',
          text: 'For a polynomial $f$ and a number $c$: $x - c$ divides $f(x)$ with remainder $0$ exactly when $c$ is a zero of $f$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is true',
          text: 'By the [[remainder-theorem]], $f(x) = (x - c)q(x) + f(c)$. If $f(c) = 0$, this reads $f(x) = (x - c)q(x)$, so $x - c$ is a factor. Conversely, if $f(x) = (x - c)q(x)$, then plugging in $x = c$ gives $f(c) = 0 \\cdot q(c) = 0$. Both directions fall straight out of the division algorithm.',
        },
        {
          type: 'table',
          headers: ['Algebra', 'Graph', 'Factoring'],
          rows: [
            ['$f(c) = 0$', 'the graph crosses or touches the $x$-axis at $(c, 0)$', '$(x - c)$ is a factor of $f(x)$'],
            ['$f(-2) = 0$', '$x$-intercept at $(-2, 0)$', '$(x + 2)$ is a factor'],
          ],
          caption: 'For a real number $c$, three ways of saying the same thing. Fluency means switching between them without thinking.',
        },
        {
          type: 'derivation',
          title: 'Given that $-1$ is a zero, factor $f(x) = x^3 - 7x - 6$ completely',
          steps: [
            { tex: 'f(-1) = -1 + 7 - 6 = 0', why: 'Confirm the zero. By the Factor Theorem, $x - (-1) = x + 1$ is a factor.' },
            { tex: '1,\\ 0,\\ -7,\\ -6 \\ \\xrightarrow{\\ c = -1\\ } \\ 1,\\ -1,\\ -6,\\ \\boxed{0}', why: '[[synthetic-division|Synthetic division]] by $x + 1$ (so $c = -1$), with $0$ for the missing $x^2$ term: bring down $1$; $-1$, $0 - 1 = -1$; $1$, $-7 + 1 = -6$; $6$, $-6 + 6 = 0$. The remainder $0$ confirms the factor.' },
            { tex: 'f(x) = (x + 1)(x^2 - x - 6)', why: 'The bottom row $1, -1, -6$ is the quotient $x^2 - x - 6$, one degree lower. This smaller polynomial is called the **depressed** polynomial.' },
            { tex: '= (x + 1)(x - 3)(x + 2)', why: 'Factor the quadratic: two numbers with product $-6$ and sum $-1$ are $-3$ and $2$.' },
          ],
          result: 'The zeros are $-1$, $3$ and $-2$. One known zero turned a cubic problem into a quadratic one.',
        },
        {
          type: 'graph',
          x: [-3.5, 4],
          y: [-12, 8],
          functions: [{ expr: 'x^3 - 7x - 6', label: '$f(x) = x^3 - 7x - 6$' }],
          points: [
            { x: -2, y: 0, label: '(−2, 0)' },
            { x: -1, y: 0, label: '(−1, 0)' },
            { x: 3, y: 0, label: '(3, 0)' },
          ],
          caption: 'Each $x$-intercept matches a linear factor: $(x + 2)$, $(x + 1)$, $(x - 3)$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the value of $k$ that makes $x - 2$ a factor of $f(x) = x^3 + kx^2 - 4x + 8$.',
      hint: 'By the Factor Theorem, $x - 2$ is a factor exactly when $f(2) = 0$.',
      label: '$k =$',
      answer: '-2',
      explanation: 'Set $f(2) = 0$: $8 + 4k - 8 + 8 = 0$, so $4k + 8 = 0$ and $k = -2$. Check: $x^3 - 2x^2 - 4x + 8 = x^2(x - 2) - 4(x - 2) = (x - 2)(x^2 - 4) = (x - 2)^2(x + 2)$, which indeed has $x - 2$ as a factor (twice!).',
    },
    {
      kind: 'truefalse',
      prompt: 'If $f(5) = 0$, then $x + 5$ is a factor of $f(x)$.',
      answer: false,
      explanation: 'The Factor Theorem says $f(c) = 0$ means $x - c$ is a factor. With $c = 5$ that is $x - 5$. The factor $x + 5$ would correspond to the zero $x = -5$. The sign in the factor is always the opposite of the zero.',
    },
    {
      kind: 'concept',
      title: 'The Rational Root Theorem: a shortlist of candidates',
      blocks: [
        {
          type: 'p',
          text: 'The Factor Theorem needs a zero to start from. Guessing blindly is hopeless — there are infinitely many numbers. But if the coefficients are integers, any **rational** zero must come from a short, finite list.',
        },
        {
          type: 'theorem',
          name: 'Rational Root Theorem',
          text: 'Let $f(x) = a_n x^n + \\dots + a_1 x + a_0$ have **integer** coefficients with $a_n \\neq 0$ and $a_0 \\neq 0$. If $\\frac{p}{q}$ is a rational zero written in lowest terms, then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$.',
          tex: '\\text{possible rational zeros} = \\pm\\,\\frac{\\text{factors of } a_0}{\\text{factors of } a_n}',
        },
        {
          type: 'derivation',
          title: 'Candidates for $f(x) = 2x^3 - 3x^2 - 11x + 6$',
          steps: [
            { tex: 'p \\in \\{1, 2, 3, 6\\}', why: 'Factors of the constant term $a_0 = 6$.' },
            { tex: 'q \\in \\{1, 2\\}', why: 'Factors of the leading coefficient $a_n = 2$.' },
            { tex: '\\pm\\tfrac{p}{q}: \\ \\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm\\tfrac{1}{2}, \\pm\\tfrac{3}{2}', why: 'Form every fraction $\\frac{p}{q}$, include both signs, and drop repeats ($\\frac{2}{2} = 1$ and $\\frac{6}{2} = 3$ are already listed).' },
          ],
          result: 'Twelve candidates. If $f$ has any rational zero at all, it is on this list.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the theorem is true',
          text: 'Suppose $\\frac{p}{q}$ (lowest terms) is a zero. Multiply $f\\left(\\frac{p}{q}\\right) = 0$ by $q^n$:\n\n$$a_n p^n + a_{n-1}p^{n-1}q + \\dots + a_1 p q^{n-1} + a_0 q^n = 0.$$\n\nEvery term except the last has a factor $p$, so $p$ divides $a_0 q^n$; sharing no factors with $q$, it must divide $a_0$. Likewise every term except the first has a factor $q$, so $q$ divides $a_n p^n$, hence $a_n$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Candidates are not zeros',
          text: 'The theorem only says where rational zeros *could* be. Most candidates fail, and a polynomial may have no rational zeros at all ($x^2 - 2$ has candidates $\\pm1, \\pm2$, and none work — its zeros $\\pm\\sqrt2$ are irrational). Also keep $p$ and $q$ straight: $p$ comes from the **constant**, $q$ from the **leading coefficient**.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'Which number is **not** a possible rational zero of $f(x) = 3x^3 + x^2 - 4$?',
      options: [
        {
          text: '$\\frac{4}{3}$',
          why: '$p = 4$ divides $-4$ and $q = 3$ divides $3$, so it is a candidate.',
        },
        {
          text: '$-2$',
          why: '$p = 2$ divides $-4$ and $q = 1$ divides $3$, so it is a candidate.',
        },
        {
          text: '$\\frac{3}{4}$',
          correct: true,
          why: 'Here the numerator $3$ would have to divide the constant $-4$, which it does not. This is the "$p$ and $q$ swapped" mistake.',
        },
        {
          text: '$\\frac{1}{3}$',
          why: '$p = 1$ divides $-4$ and $q = 3$ divides $3$, so it is a candidate.',
        },
      ],
      explanation: 'Candidates are $\\pm\\frac{p}{q}$ with $p \\in \\{1, 2, 4\\}$ (factors of the constant $-4$) and $q \\in \\{1, 3\\}$ (factors of the leading coefficient $3$): $\\pm1, \\pm2, \\pm4, \\pm\\frac13, \\pm\\frac23, \\pm\\frac43$. The fraction $\\frac34$ has the roles reversed. (In fact the only rational zero is $1$: $f(x) = (x - 1)(3x^2 + 4x + 4)$.)',
    },
    {
      kind: 'concept',
      title: 'The full strategy: test, divide, repeat',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'List candidates', text: 'Use the Rational Root Theorem. (If the constant term is $0$, factor out a power of $x$ first.)' },
            { title: 'Test', text: 'Evaluate $f$ at candidates — or run synthetic division — until one gives $0$.' },
            { title: 'Divide', text: 'Divide by $x - c$ to get the depressed polynomial, one degree lower.' },
            { title: 'Repeat', text: 'Keep going on the depressed polynomial (its candidate list is a subset of the old one).' },
            { title: 'Finish', text: 'Once you reach a quadratic, factor it or use the [[quadratic-formula]] — this catches irrational and complex zeros too.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Find all zeros of $f(x) = 2x^3 - 3x^2 - 11x + 6$',
          steps: [
            { tex: 'f(1) = 2 - 3 - 11 + 6 = -6 \\neq 0', why: 'Start with the easiest candidates from the list $\\pm1, \\pm2, \\pm3, \\pm6, \\pm\\frac12, \\pm\\frac32$.' },
            { tex: 'f(-1) = -2 - 3 + 11 + 6 = 12 \\neq 0', why: 'Not a zero either — but notice the sign change between $f(-1) = 12$ and $f(1) = -6$: there must be a zero between $-1$ and $1$. Keep $\\frac12$ in mind.' },
            { tex: 'f(3) = 54 - 27 - 33 + 6 = 0', why: '$f(2) = 16 - 12 - 22 + 6 = -12$ fails, but $3$ works. So $x - 3$ is a factor.' },
            { tex: '2,\\ -3,\\ -11,\\ 6 \\ \\xrightarrow{\\ c = 3\\ } \\ 2,\\ 3,\\ -2,\\ \\boxed{0}', why: 'Synthetic division by $x - 3$: bring down $2$; $6$, $-3 + 6 = 3$; $9$, $-11 + 9 = -2$; $-6$, $6 - 6 = 0$.' },
            { tex: 'f(x) = (x - 3)(2x^2 + 3x - 2)', why: 'The depressed polynomial is the quadratic $2x^2 + 3x - 2$.' },
            { tex: '= (x - 3)(2x - 1)(x + 2)', why: 'Factor by the ac-method: $ac = -4$, and $4 \\cdot (-1) = -4$ with $4 - 1 = 3$. Check: $(2x - 1)(x + 2) = 2x^2 + 3x - 2$. ✓' },
          ],
          result: 'Zeros: $3$, $\\frac12$ and $-2$ — all on the candidate list, as the theorem promised.',
        },
        {
          type: 'graph',
          x: [-3, 4],
          y: [-16, 14],
          functions: [{ expr: '2x^3 - 3x^2 - 11x + 6', label: '$f(x) = 2x^3 - 3x^2 - 11x + 6$' }],
          points: [
            { x: -2, y: 0, label: '(−2, 0)' },
            { x: 0.5, y: 0, label: '(½, 0)' },
            { x: 3, y: 0, label: '(3, 0)' },
          ],
          caption: 'A quick graph (or a few test values) shows which candidates are worth testing first. Here the curve clearly crosses near $-2$, $0.5$ and $3$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'How computers find zeros',
          text: 'Software rarely uses the Rational Root Theorem — real-world coefficients are decimals, and zeros are usually irrational. Instead it uses the sign-change idea from line 2: if $f(a)$ and $f(b)$ have opposite signs, a zero lies between them, so halve the interval and repeat (**bisection**), or use faster methods like Newton\'s method from calculus. Ray tracers do exactly this to intersect a ray with a curved surface — a torus, for example, leads to a degree-$4$ polynomial in the ray parameter $t$.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find all zeros of $f(x) = x^3 - 2x^2 - 5x + 6$.',
      hint: 'The candidates are $\\pm1, \\pm2, \\pm3, \\pm6$. Try $x = 1$ first.',
      label: '$x =$',
      answer: ['1', '3', '-2'],
      explanation: '$f(1) = 1 - 2 - 5 + 6 = 0$, so $x - 1$ is a factor. Synthetic division with $c = 1$ on $1, -2, -5, 6$ gives $1, -1, -6, 0$, so $f(x) = (x - 1)(x^2 - x - 6) = (x - 1)(x - 3)(x + 2)$. The zeros are $1$, $3$ and $-2$.',
    },
    {
      kind: 'order',
      prompt: 'Put the steps for finding all zeros of a cubic with integer coefficients in order.',
      lines: [
        'List the candidates $\\pm\\frac{p}{q}$ from the constant term and leading coefficient',
        'Test candidates until $f(c) = 0$',
        'Use synthetic division by $x - c$ to get a quadratic quotient',
        'Solve the quadratic by factoring or the quadratic formula',
        'List all three zeros, including $c$',
      ],
      distractors: ['Set the leading coefficient equal to zero'],
      explanation: 'The Rational Root Theorem gives a finite list to test; one success gives a factor by the Factor Theorem; dividing reduces the degree to $2$; and quadratics are always solvable. Forgetting to include $c$ itself in the final list is a surprisingly common slip.',
    },
    {
      kind: 'error',
      prompt: 'A student finds the zeros of $f(x) = 2x^3 + x^2 - 13x + 6$. Tap the first line that is wrong.',
      lines: [
        'Possible rational zeros: $\\pm1, \\pm2, \\pm3, \\pm6, \\pm\\frac12, \\pm\\frac32$.',
        '$f(2) = 16 + 4 - 26 + 6 = 0$, so $x - 2$ is a factor.',
        'Synthetic division by $x - 2$ gives the quotient $2x^2 + 5x - 3$.',
        '$2x^2 + 5x - 3 = (2x + 1)(x - 3)$',
        'The zeros are $2$, $-\\frac12$ and $3$.',
      ],
      errorLines: [4],
      explanation: 'Expanding line 4 gives $(2x + 1)(x - 3) = 2x^2 - 5x - 3$: the middle sign is wrong. The correct factoring is $2x^2 + 5x - 3 = (2x - 1)(x + 3)$, so the zeros are $2$, $\\frac12$ and $-3$. Lines 1–3 are right: synthetic division on $2, 1, -13, 6$ with $c = 2$ gives $2, 5, -3, 0$.',
    },
    {
      kind: 'concept',
      title: 'The Fundamental Theorem of Algebra',
      blocks: [
        {
          type: 'p',
          text: 'How many zeros should you expect? Over the real numbers the answer is messy: $x^2 + 1$ has none. But once you allow [[complex-number|complex numbers]], the answer is perfectly clean.',
        },
        {
          type: 'theorem',
          name: 'Fundamental Theorem of Algebra',
          text: 'Every polynomial of degree $n \\ge 1$ with real or complex coefficients has at least one complex zero.',
        },
        {
          type: 'p',
          text: 'Combine this with the Factor Theorem and something stronger follows. A zero $c_1$ gives $f(x) = (x - c_1)q_1(x)$ with $\\deg q_1 = n - 1$. If $n - 1 \\ge 1$, the theorem applies again to $q_1$, giving another zero $c_2$, and so on, until the quotient is the constant $a_n$. This is the [[linear-factorization-theorem]]:',
        },
        {
          type: 'math',
          tex: 'f(x) = a_n(x - c_1)(x - c_2)\\cdots(x - c_n)',
          caption: 'A degree-$n$ polynomial has exactly $n$ complex zeros, counted with multiplicity.',
        },
        {
          type: 'derivation',
          title: 'Find all zeros of $f(x) = x^3 - 3x^2 + 4x - 2$',
          steps: [
            { tex: 'f(1) = 1 - 3 + 4 - 2 = 0', why: 'Candidates are $\\pm1, \\pm2$. The first one works.' },
            { tex: '1,\\ -3,\\ 4,\\ -2 \\ \\xrightarrow{\\ c = 1\\ } \\ 1,\\ -2,\\ 2,\\ \\boxed{0}', why: 'Synthetic division by $x - 1$.' },
            { tex: 'f(x) = (x - 1)(x^2 - 2x + 2)', why: 'The depressed quadratic has discriminant $4 - 8 = -4 < 0$, so it does not factor over the reals.' },
            { tex: 'x = \\frac{2 \\pm \\sqrt{-4}}{2} = \\frac{2 \\pm 2i}{2} = 1 \\pm i', why: 'Quadratic formula with $a = 1$, $b = -2$, $c = 2$; $\\sqrt{-4} = 2i$.' },
            { tex: 'f(x) = (x - 1)\\big(x - (1 + i)\\big)\\big(x - (1 - i)\\big)', why: 'Linear factorization: degree $3$, exactly three zeros.' },
          ],
          result: 'Zeros: $1$, $1 + i$, $1 - i$. Only one is real, so the graph crosses the $x$-axis just once.',
        },
        {
          type: 'graph',
          x: [-1.5, 3],
          y: [-5, 5],
          functions: [{ expr: 'x^3 - 3x^2 + 4x - 2', label: '$f(x) = x^3 - 3x^2 + 4x - 2$' }],
          points: [{ x: 1, y: 0, label: '(1, 0)' }],
          caption: 'The graph only shows real zeros. The complex pair $1 \\pm i$ is invisible here — it is why the cubic has just one $x$-intercept instead of three.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Existence is not a formula',
          text: 'Carl Friedrich Gauss gave the first widely accepted proof of the theorem in his 1799 doctoral thesis. It guarantees zeros *exist* but does not say how to compute them. In fact, Abel and Ruffini proved that no formula using only $+, -, \\times, \\div$ and roots can solve every polynomial of degree $5$ or more — which is why numerical methods matter so much.',
        },
      ],
    },
    {
      kind: 'mcq',
      prompt: 'A polynomial $f$ of degree $4$ has **real** coefficients. Two of its zeros are $2$ and $3i$. Which statement must be true?',
      options: [
        {
          text: '$-3i$ is also a zero',
          correct: true,
          why: 'With real coefficients, non-real zeros come in conjugate pairs: $3i = 0 + 3i$ forces $0 - 3i = -3i$.',
        },
        {
          text: '$-2$ is also a zero',
          why: 'Real zeros do not come in $\\pm$ pairs. Nothing forces $-2$ to be a zero.',
        },
        {
          text: '$f$ has exactly two zeros',
          why: 'The Fundamental Theorem gives exactly $4$ zeros counted with multiplicity for degree $4$.',
        },
        {
          text: '$3$ is also a zero',
          why: 'Dropping the $i$ does not give a zero; the conjugate of $3i$ is $-3i$, not $3$.',
        },
      ],
      explanation: 'Real coefficients force conjugate pairs, so $-3i$ is a zero. That accounts for three of the four zeros ($2$, $3i$, $-3i$). The fourth must be real — if it were non-real, its conjugate would be a fifth zero — and it could be another copy of $2$ or any other real number.',
    },
    {
      kind: 'concept',
      title: 'Conjugate pairs and building polynomials from zeros',
      blocks: [
        {
          type: 'p',
          text: 'In the last example the complex zeros came as $1 + i$ and $1 - i$. That pairing — the [[conjugate-zeros-theorem]] — is guaranteed whenever the coefficients are real.',
        },
        {
          type: 'theorem',
          name: 'Complex Conjugate Zeros Theorem',
          text: 'If $f$ has **real** coefficients and $a + bi$ (with $b \\neq 0$) is a zero, then its [[complex-conjugate]] $a - bi$ is also a zero.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why conjugates come in pairs',
          text: 'Conjugation (flipping the sign of $i$) respects sums and products: $\\overline{z + w} = \\bar z + \\bar w$ and $\\overline{zw} = \\bar z\\,\\bar w$, and it leaves real numbers unchanged. So if $f(z) = a_n z^n + \\dots + a_0 = 0$ with real $a_k$, conjugate both sides: $a_n \\bar z^{\\,n} + \\dots + a_0 = \\bar 0 = 0$. That says $f(\\bar z) = 0$.',
        },
        {
          type: 'p',
          text: 'Two consequences. First, each conjugate pair multiplies to a **real quadratic**, so every real polynomial factors into real linear and real quadratic factors. Second, a real polynomial of **odd** degree must have at least one real zero: the non-real zeros pair off, and an odd count cannot be all pairs. (That matches end behavior too: the ends of an odd-degree graph go in opposite directions, so it must cross the axis.)',
        },
        {
          type: 'derivation',
          title: 'Degree $3$, leading coefficient $1$, zeros $2$ and $1 - i$',
          steps: [
            { tex: '1 + i \\text{ is also a zero}', why: 'We want real coefficients, so the conjugate of $1 - i$ must be a zero. That makes three zeros: exactly right for degree $3$.' },
            { tex: 'f(x) = (x - 2)\\big(x - (1 - i)\\big)\\big(x - (1 + i)\\big)', why: 'Linear factorization with $a_n = 1$.' },
            { tex: '\\big((x - 1) + i\\big)\\big((x - 1) - i\\big) = (x - 1)^2 - i^2', why: 'Group as $(A + i)(A - i)$ with $A = x - 1$: a difference of squares.' },
            { tex: '= x^2 - 2x + 1 + 1 = x^2 - 2x + 2', why: 'Since $i^2 = -1$, subtracting $i^2$ adds $1$. The $i$\'s are gone — a real quadratic, as promised.' },
            { tex: 'f(x) = (x - 2)(x^2 - 2x + 2) = x^3 - 4x^2 + 6x - 4', why: 'Distribute: $x^3 - 2x^2 + 2x - 2x^2 + 4x - 4$, then combine like terms.' },
          ],
          result: '$f(x) = x^3 - 4x^2 + 6x - 4$, with real coefficients and the required zeros.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Instructors check two things on "build the polynomial" questions: did you include the conjugate (otherwise the coefficients are not real), and did you multiply the conjugate pair first? Multiplying a complex factor by $(x - 2)$ first works too, but creates far more chances for sign errors.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Find the polynomial of degree $3$ with leading coefficient $1$ and **real** coefficients that has zeros $3$ and $i$. Enter it in expanded form.',
      label: '$f(x) =$',
      answer: 'x^3 - 3x^2 + x - 3',
      hint: 'The conjugate $-i$ must also be a zero. What is $(x - i)(x + i)$?',
      explanation: 'Real coefficients force the third zero $-i$. Then $(x - i)(x + i) = x^2 - i^2 = x^2 + 1$, and $f(x) = (x - 3)(x^2 + 1) = x^3 + x - 3x^2 - 3 = x^3 - 3x^2 + x - 3$. Quick check: $f(3) = 27 - 27 + 3 - 3 = 0$. ✓',
    },
    {
      kind: 'truefalse',
      prompt: 'A polynomial with real coefficients can have exactly one non-real zero.',
      answer: false,
      explanation: 'Non-real zeros of a real polynomial come in conjugate pairs $a \\pm bi$, so their number is always even ($0$, $2$, $4$, …). Exactly one is impossible. (With complex coefficients the pairing fails: $x - i$ has the single zero $i$.)',
    },
  ],
  takeaways: [
    'Factor Theorem: $f(c) = 0$ exactly when $x - c$ is a factor; each zero found lowers the degree by one after division.',
    'Rational Root Theorem: for integer coefficients, any rational zero $\\frac{p}{q}$ has $p \\mid a_0$ and $q \\mid a_n$ — a finite list of candidates, not a list of zeros.',
    'Strategy: list candidates, test, divide synthetically, repeat, then finish the quadratic with factoring or the quadratic formula.',
    'Fundamental Theorem of Algebra: a degree-$n$ polynomial has exactly $n$ complex zeros counted with multiplicity, so $f(x) = a_n(x - c_1)\\cdots(x - c_n)$.',
    'With real coefficients, non-real zeros come in conjugate pairs, which multiply to real quadratics; odd-degree real polynomials always have a real zero.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 5.5 Zeros of Polynomial Functions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/5-5-zeros-of-polynomial-functions',
      source: 'openstax',
      note: 'The Factor Theorem, Rational Zero Theorem, Fundamental Theorem of Algebra and Descartes\' rule of signs, with exercises.',
    },
    {
      title: "Paul's Online Notes — Finding Zeroes of Polynomials",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/FindingZeroesOfPolynomials.aspx',
      source: 'paul',
      note: 'More fully worked examples of the test-and-divide process.',
    },
    {
      title: 'Wikipedia — Fundamental theorem of algebra',
      url: 'https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra',
      source: 'wikipedia',
      note: 'The history of the theorem and a survey of its many proofs.',
    },
  ],
};
