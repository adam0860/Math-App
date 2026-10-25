import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'calc2-partial-fractions',
  title: 'Partial Fractions',
  summary: 'Un-add a rational function into simple pieces, each of which integrates to a log or an arctangent.',
  minutes: 19,
  objectives: [
    'Decide whether a rational function is proper, and use long division when it is not',
    'Decompose a proper rational function with distinct linear, repeated linear and irreducible quadratic factors',
    'Find the unknown coefficients by substituting roots and by equating coefficients',
    'Integrate each partial fraction, producing logarithms, powers and arctangents',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Adding fractions, run backwards',
      blocks: [
        {
          type: 'p',
          text: 'In algebra you learned to combine fractions over a [[least-common-denominator]]:',
        },
        {
          type: 'math',
          tex: '\\frac{1}{x - 1} - \\frac{1}{x + 1} = \\frac{(x + 1) - (x - 1)}{(x - 1)(x + 1)} = \\frac{2}{x^2 - 1}',
        },
        {
          type: 'p',
          text: 'Read right to left, this is a superpower for integration. The integral $\\int \\frac{2}{x^2 - 1}\\,dx$ looks stuck — no obvious substitution — but each piece on the left is a one-line logarithm. Splitting a [[rational-function]] back into simple fractions is called [[partial-fractions|partial fraction decomposition]].',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\frac{2}{x^2 - 1}\\,dx$',
          steps: [
            { tex: '\\int \\frac{2}{x^2 - 1}\\,dx = \\int \\left(\\frac{1}{x - 1} - \\frac{1}{x + 1}\\right)dx', why: 'Replace the integrand by its decomposition (checked above by adding the fractions).' },
            { tex: '= \\ln|x - 1| - \\ln|x + 1| + C', why: '$\\int \\frac{dx}{x - c} = \\ln|x - c|$: a substitution $u = x - c$ with $du = dx$.' },
            { tex: '= \\ln\\left|\\frac{x - 1}{x + 1}\\right| + C', why: 'Optional: combine with the log rule $\\ln A - \\ln B = \\ln\\frac{A}{B}$.' },
          ],
          result: 'The whole lesson is about doing the first step — finding the decomposition — systematically.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-6, 6],
          functions: [
            { expr: '2/(x^2 - 1)', label: '$y = \\frac{2}{x^2 - 1}$', color: 'blue' },
            { expr: '1/(x - 1)', label: '$y = \\frac{1}{x - 1}$', color: 'orange', dashed: true },
            { expr: '-1/(x + 1)', label: '$y = -\\frac{1}{x + 1}$', color: 'green', dashed: true },
          ],
          vlines: [{ x: -1 }, { x: 1 }],
          caption: 'At every $x$, the blue height is the sum of the two dashed heights. Each simple fraction "owns" one vertical asymptote of the original function.',
        },
        {
          type: 'definition',
          term: 'Proper rational function',
          text: 'A rational function $\\frac{P(x)}{Q(x)}$ is [[calc2-proper-rational-function|proper]] if $\\deg P < \\deg Q$. Partial fractions apply directly only to proper rational functions; an improper one must first be divided (card 5).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a decomposition always exists',
          text: 'Every real polynomial $Q(x)$ factors into linear factors and [[calc2-irreducible-quadratic|irreducible quadratics]] — a consequence of the [[fundamental-theorem-of-algebra]] (complex roots of real polynomials come in conjugate pairs, and each pair multiplies to a real quadratic). An algebra theorem then guarantees that any proper $\\frac{P}{Q}$ is a sum of simple fractions, one for each factor (and each power of a repeated factor). So the method never fails — the only question is finding the numerators.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Since $\\frac{1}{x^2 - 1} = \\frac{1}{2}\\left(\\frac{1}{x - 1} - \\frac{1}{x + 1}\\right)$, evaluate $\\displaystyle\\int_2^3 \\frac{dx}{x^2 - 1}$. An exact answer or a decimal is fine.',
      label: '$\\int_2^3 \\frac{dx}{x^2-1} =$',
      answer: 'ln(3/2)/2',
      answerTex: '\\tfrac{1}{2}\\ln\\tfrac{3}{2} \\approx 0.2027',
      hint: 'The antiderivative is $\\frac{1}{2}\\ln\\left|\\frac{x - 1}{x + 1}\\right|$. Evaluate at $3$ and $2$.',
      explanation: '$\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right|\\Big|_2^3 = \\frac{1}{2}\\left(\\ln\\frac{2}{4} - \\ln\\frac{1}{3}\\right) = \\frac{1}{2}\\ln\\left(\\frac{1}{2}\\cdot 3\\right) = \\frac{1}{2}\\ln\\frac{3}{2} \\approx 0.2027$.',
    },
    {
      kind: 'concept',
      title: 'Distinct linear factors',
      blocks: [
        {
          type: 'p',
          text: 'If the denominator factors into **different** linear factors, the decomposition has one constant numerator per factor:',
        },
        {
          type: 'math',
          tex: '\\frac{P(x)}{(x - r_1)(x - r_2)\\cdots(x - r_n)} = \\frac{A_1}{x - r_1} + \\frac{A_2}{x - r_2} + \\cdots + \\frac{A_n}{x - r_n}',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\frac{5x - 3}{x^2 - 2x - 3}\\,dx$',
          steps: [
            { tex: 'x^2 - 2x - 3 = (x - 3)(x + 1)', why: 'Factor the denominator first. Numerator degree $1 <$ denominator degree $2$, so it is proper.' },
            { tex: '\\frac{5x - 3}{(x - 3)(x + 1)} = \\frac{A}{x - 3} + \\frac{B}{x + 1}', why: 'One unknown constant for each distinct linear factor.' },
            { tex: '5x - 3 = A(x + 1) + B(x - 3)', why: 'Multiply both sides by $(x - 3)(x + 1)$ to clear the denominators.' },
            { tex: 'x = 3:\\quad 12 = 4A \\implies A = 3', why: 'Choose $x = 3$ to make the $B$ term vanish.' },
            { tex: 'x = -1:\\quad -8 = -4B \\implies B = 2', why: 'Choose $x = -1$ to make the $A$ term vanish.' },
            { tex: '\\int \\left(\\frac{3}{x - 3} + \\frac{2}{x + 1}\\right)dx = 3\\ln|x - 3| + 2\\ln|x + 1| + C', why: 'Integrate each simple fraction to a logarithm.' },
          ],
          result: '$\\int \\frac{5x - 3}{x^2 - 2x - 3}\\,dx = 3\\ln|x - 3| + 2\\ln|x + 1| + C$.',
        },
        {
          type: 'graph',
          x: [-4, 6],
          y: [-10, 10],
          functions: [
            { expr: '(5x - 3)/((x - 3)(x + 1))', label: 'target $\\frac{5x - 3}{(x-3)(x+1)}$', color: 'blue' },
            { expr: 'a/(x - 3) + b/(x + 1)', label: '$\\frac{A}{x - 3} + \\frac{B}{x + 1}$', color: 'orange', dashed: true },
          ],
          vlines: [{ x: -1 }, { x: 3 }],
          sliders: [
            { name: 'a', min: -4, max: 5, step: 0.5, value: 1, label: '$A$' },
            { name: 'b', min: -4, max: 5, step: 0.5, value: 1, label: '$B$' },
          ],
          readouts: [
            { label: 'mismatch at $x = 0$:', expr: '-a/3 + b - 1', digits: 3 },
            { label: 'mismatch at $x = 2$:', expr: '-a + b/3 + 7/3', digits: 3 },
          ],
          caption: 'Drag $A$ and $B$ until the dashed curve lands on the blue one and both mismatches read $0$. Only one pair works — the decomposition is unique.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we may plug in $x = 3$',
          text: 'The original fractions are undefined at $x = 3$, so substituting it looks illegal. But after clearing denominators, $5x - 3 = A(x + 1) + B(x - 3)$ is an equation between **polynomials**. It holds for every $x \\ne 3, -1$, and two polynomials that agree at infinitely many points are identical — so it holds at $x = 3$ and $x = -1$ too. Choosing the roots is simply the fastest way to kill all but one unknown.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The cover-up shortcut',
          text: 'For a distinct linear factor $(x - r)$, its coefficient is: cover up $(x - r)$ in the original fraction and evaluate what is left at $x = r$. For $A$ above: cover $(x - 3)$, leaving $\\frac{5x - 3}{x + 1}$; at $x = 3$ that is $\\frac{12}{4} = 3$. This is the same computation as plugging in the root, done in your head. (It is often called the Heaviside method.)',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Evaluate $\\displaystyle\\int \\frac{x + 5}{x^2 + x - 2}\\,dx$.',
      label: '$\\int \\frac{x+5}{x^2+x-2}\\,dx =$',
      answer: '2 ln(abs(x - 1)) - ln(abs(x + 2))',
      answerTex: '2\\ln|x - 1| - \\ln|x + 2|',
      upToConstant: true,
      domain: [1.5, 3],
      hint: '$x^2 + x - 2 = (x - 1)(x + 2)$. Write $x + 5 = A(x + 2) + B(x - 1)$ and plug in $x = 1$ and $x = -2$. Type absolute values as `abs(...)`.',
      explanation: 'With $x + 5 = A(x + 2) + B(x - 1)$: $x = 1$ gives $6 = 3A$, so $A = 2$; $x = -2$ gives $3 = -3B$, so $B = -1$. Hence $\\int\\left(\\frac{2}{x - 1} - \\frac{1}{x + 2}\\right)dx = 2\\ln|x - 1| - \\ln|x + 2| + C$.',
    },
    {
      kind: 'error',
      prompt: 'A student evaluates $\\int \\frac{3x + 11}{(x - 3)(x + 2)}\\,dx$. Tap the first line that is wrong.',
      lines: [
        '$\\frac{3x + 11}{(x - 3)(x + 2)} = \\frac{A}{x - 3} + \\frac{B}{x + 2}$',
        '$3x + 11 = A(x + 2) + B(x - 3)$',
        '$x = 3$: $20 = 5A$, so $A = 4$',
        '$x = -2$: $5 = 5B$, so $B = 1$',
        '$\\int = 4\\ln|x - 3| + \\ln|x + 2| + C$',
      ],
      errorLines: [4],
      explanation: 'At $x = -2$ the $B$ term is $B(-2 - 3) = -5B$, not $5B$. So $5 = -5B$ and $B = -1$, giving $4\\ln|x - 3| - \\ln|x + 2| + C$. A quick check catches it: at $x = 0$ the original is $\\frac{11}{-6}$, while $\\frac{4}{-3} + \\frac{1}{2} = -\\frac{5}{6}$ (wrong) and $\\frac{4}{-3} - \\frac{1}{2} = -\\frac{11}{6}$ (right).',
    },
    {
      kind: 'concept',
      title: 'Repeated linear factors',
      blocks: [
        {
          type: 'p',
          text: 'If a linear factor appears to a power, $(x - r)^k$, it contributes **one term for each power** from $1$ up to $k$:',
        },
        {
          type: 'math',
          tex: '\\frac{\\dots}{(x - r)^k} \\;\\longrightarrow\\; \\frac{A_1}{x - r} + \\frac{A_2}{(x - r)^2} + \\cdots + \\frac{A_k}{(x - r)^k}',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\frac{5x^2 + 3x - 2}{x^3 + 2x^2}\\,dx$',
          steps: [
            { tex: 'x^3 + 2x^2 = x^2(x + 2)', why: 'Factor: $x$ is a repeated factor (power $2$), and $x + 2$ is a distinct one.' },
            { tex: '\\frac{5x^2 + 3x - 2}{x^2(x + 2)} = \\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x + 2}', why: 'Two terms for $x^2$ (powers $1$ and $2$), one for $x + 2$. Three unknowns for a degree-$3$ denominator.' },
            { tex: '5x^2 + 3x - 2 = Ax(x + 2) + B(x + 2) + Cx^2', why: 'Multiply through by $x^2(x + 2)$.' },
            { tex: 'x = 0:\\ -2 = 2B \\implies B = -1; \\qquad x = -2:\\ 12 = 4C \\implies C = 3', why: 'Plug in the two roots. They find $B$ and $C$, but $x = 0$ kills both $A$ and $C$ terms, so $A$ needs another equation.' },
            { tex: 'x^2\\text{ coefficients:}\\quad 5 = A + C \\implies A = 2', why: 'Equate the $x^2$ coefficients on both sides: $Ax(x+2)$ contributes $A$, and $Cx^2$ contributes $C$.' },
            { tex: '\\int\\left(\\frac{2}{x} - \\frac{1}{x^2} + \\frac{3}{x + 2}\\right)dx = 2\\ln|x| + \\frac{1}{x} + 3\\ln|x + 2| + C', why: 'Note $\\int -x^{-2}\\,dx = x^{-1}$: the squared term gives a power, not a logarithm.' },
          ],
          result: '$\\int \\frac{5x^2 + 3x - 2}{x^3 + 2x^2}\\,dx = 2\\ln|x| + \\frac{1}{x} + 3\\ln|x + 2| + C$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why one term per power?',
          text: 'Count unknowns. A degree-$n$ denominator needs $n$ unknown constants to match a general numerator of degree $< n$ (which has $n$ coefficients). With only $\\frac{A}{x} + \\frac{C}{x + 2}$ — two unknowns — you cannot match a degree-$3$ denominator in general: adding those two fractions only ever produces denominator $x(x + 2)$, never $x^2(x + 2)$. The extra $\\frac{B}{x^2}$ supplies the missing degree of freedom.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Two ways to find coefficients',
          text: '**Plugging in roots** is fastest for distinct linear factors. **Equating coefficients** always works: expand both sides and match the coefficient of each power of $x$, giving a linear system. Most real problems mix the two — plug in what roots you have, then match one or two coefficients for the rest.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Write $\\frac{3x + 1}{(x + 1)^2} = \\frac{A}{x + 1} + \\frac{B}{(x + 1)^2}$, then evaluate $\\displaystyle\\int \\frac{3x + 1}{(x + 1)^2}\\,dx$.',
      label: '$\\int \\frac{3x+1}{(x+1)^2}\\,dx =$',
      answer: '3 ln(abs(x + 1)) + 2/(x + 1)',
      answerTex: '3\\ln|x + 1| + \\frac{2}{x + 1}',
      upToConstant: true,
      domain: [0.5, 3],
      hint: '$3x + 1 = A(x + 1) + B$. Plug in $x = -1$ for $B$, then match the $x$ coefficients for $A$. Remember $\\int (x+1)^{-2}\\,dx = -(x+1)^{-1}$.',
      explanation: 'From $3x + 1 = A(x + 1) + B$: the $x$ coefficients give $A = 3$, and $x = -1$ gives $B = -2$. So $\\int\\left(\\frac{3}{x + 1} - \\frac{2}{(x + 1)^2}\\right)dx = 3\\ln|x + 1| + \\frac{2}{x + 1} + C$ (since $\\int -2(x+1)^{-2}\\,dx = 2(x+1)^{-1}$).',
    },
    {
      kind: 'mcq',
      prompt: 'What is the correct form of the partial fraction decomposition of $\\dfrac{x^2 + 1}{(x - 2)^2(x^2 + 4)}$?',
      options: [
        {
          text: '$\\frac{A}{x - 2} + \\frac{B}{x^2 + 4}$',
          why: 'Missing the $(x - 2)^2$ term for the repeated factor, and the quadratic needs a linear numerator. Only $2$ unknowns for a degree-$4$ denominator.',
        },
        {
          text: '$\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2} + \\frac{C}{x^2 + 4}$',
          why: 'Close, but over an irreducible quadratic the numerator must be linear, $Cx + D$. Three unknowns cannot match a degree-$4$ denominator.',
        },
        {
          text: '$\\frac{A}{(x - 2)^2} + \\frac{Bx + C}{x^2 + 4}$',
          why: 'The repeated factor needs a term for *each* power: $\\frac{A}{x-2}$ is missing.',
        },
        {
          text: '$\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2} + \\frac{Cx + D}{x^2 + 4}$',
          correct: true,
          why: 'One term per power of the repeated linear factor, and a linear numerator over the irreducible quadratic: $4$ unknowns for a degree-$4$ denominator.',
        },
      ],
      explanation: 'Count: the denominator has degree $4$, so the decomposition needs $4$ unknowns. $(x - 2)^2$ contributes $\\frac{A}{x - 2} + \\frac{B}{(x - 2)^2}$; $x^2 + 4$ has no real roots, so it contributes $\\frac{Cx + D}{x^2 + 4}$. (Solving gives $A = \\frac{3}{16}$, $B = \\frac{5}{8}$, $C = -\\frac{3}{16}$, $D = 0$.)',
    },
    {
      kind: 'concept',
      title: 'Irreducible quadratic factors',
      blocks: [
        {
          type: 'p',
          text: 'A quadratic with negative [[discriminant]], like $x^2 + 4$ or $x^2 + 2x + 5$, cannot be factored over the reals. Over such a factor the numerator must be **linear**, $Bx + C$ — the general polynomial of degree one less than the factor.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\frac{2x^2 - x + 4}{x^3 + 4x}\\,dx$',
          steps: [
            { tex: '\\frac{2x^2 - x + 4}{x(x^2 + 4)} = \\frac{A}{x} + \\frac{Bx + C}{x^2 + 4}', why: 'Factor $x^3 + 4x = x(x^2 + 4)$. $x^2 + 4$ is irreducible, so it gets a linear numerator.' },
            { tex: '2x^2 - x + 4 = A(x^2 + 4) + (Bx + C)x', why: 'Clear denominators.' },
            { tex: 'x = 0:\\quad 4 = 4A \\implies A = 1', why: 'The only real root.' },
            { tex: 'x^2:\\ 2 = A + B \\implies B = 1; \\qquad x^1:\\ -1 = C', why: 'Equate coefficients: the right side expands to $(A + B)x^2 + Cx + 4A$.' },
            { tex: '\\int \\frac{x - 1}{x^2 + 4}\\,dx = \\int\\frac{x}{x^2 + 4}\\,dx - \\int \\frac{1}{x^2 + 4}\\,dx', why: 'Split the quadratic term: the $x$ part is a logarithm, the constant part an arctangent.' },
            { tex: '= \\tfrac{1}{2}\\ln(x^2 + 4) - \\tfrac{1}{2}\\arctan\\tfrac{x}{2}', why: '$u = x^2 + 4$ gives $\\frac{1}{2}\\ln(x^2 + 4)$; and $\\int\\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\frac{x}{a}$ with $a = 2$.' },
          ],
          result: '$\\int \\frac{2x^2 - x + 4}{x^3 + 4x}\\,dx = \\ln|x| + \\frac{1}{2}\\ln(x^2 + 4) - \\frac{1}{2}\\arctan\\frac{x}{2} + C$.',
        },
        {
          type: 'theorem',
          name: 'The arctangent integral',
          tex: '\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C',
          text: 'Proved by trig substitution ($x = a\\tan\\theta$) in the previous lesson\'s style, or checked by differentiating. For $x^2 + 2x + 5$, complete the square to $(x + 1)^2 + 4$ first.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'No absolute value needed on $\\ln(x^2 + 4)$ — but do not split it',
          text: '$x^2 + 4 > 0$ always, so $\\ln(x^2 + 4)$ needs no absolute value. But never "simplify" $\\frac{1}{x^2 + 4}$ into $\\frac{1}{x^2} + \\frac{1}{4}$: fractions do not split over a sum in the denominator. That is exactly the false move partial fractions is designed to replace with a correct one.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Given $\\frac{x + 1}{x(x^2 + 1)} = \\frac{1}{x} + \\frac{-x + 1}{x^2 + 1}$, evaluate $\\displaystyle\\int \\frac{x + 1}{x(x^2 + 1)}\\,dx$ for $x > 0$.',
      label: '$\\int \\frac{x+1}{x(x^2+1)}\\,dx =$',
      answer: 'ln(x) - ln(x^2 + 1)/2 + arctan(x)',
      answerTex: '\\ln|x| - \\tfrac{1}{2}\\ln(x^2 + 1) + \\arctan x',
      upToConstant: true,
      domain: [0.5, 3],
      hint: 'Split $\\frac{-x + 1}{x^2 + 1} = -\\frac{x}{x^2 + 1} + \\frac{1}{x^2 + 1}$. The first is a log (via $u = x^2 + 1$), the second an arctangent.',
      explanation: '$\\int \\frac{dx}{x} = \\ln|x|$; $\\int \\frac{-x}{x^2 + 1}\\,dx = -\\frac{1}{2}\\ln(x^2 + 1)$; $\\int \\frac{dx}{x^2 + 1} = \\arctan x$. Total: $\\ln|x| - \\frac{1}{2}\\ln(x^2 + 1) + \\arctan x + C$. (You can verify the decomposition: $(x^2 + 1) + (-x + 1)x = x + 1$. ✓)',
    },
    {
      kind: 'concept',
      title: 'Improper fractions: divide first',
      blocks: [
        {
          type: 'p',
          text: 'If the numerator\'s degree is **at least** the denominator\'s, the rational function is improper, and no choice of constants will make the decomposition work. First do polynomial long division (or [[synthetic-division]] for a linear divisor) to write',
        },
        {
          type: 'math',
          tex: '\\frac{P(x)}{Q(x)} = S(x) + \\frac{R(x)}{Q(x)}, \\qquad \\deg R < \\deg Q',
          caption: 'The quotient $S(x)$ is a polynomial (easy to integrate); the remainder fraction is proper.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\int \\frac{x^3 + x}{x - 1}\\,dx$',
          steps: [
            { tex: 'x^3 + x = (x - 1)(x^2 + x + 2) + 2', why: 'Divide: $x^3 \\div x = x^2$; subtract $x^3 - x^2$ to get $x^2 + x$; then $+x$ gives $x^2 - x$, leaving $2x$; then $+2$ gives $2x - 2$, leaving remainder $2$.' },
            { tex: '\\frac{x^3 + x}{x - 1} = x^2 + x + 2 + \\frac{2}{x - 1}', why: 'Divide the identity by $x - 1$. The remainder fraction is already a simple partial fraction.' },
            { tex: '\\int \\frac{x^3 + x}{x - 1}\\,dx = \\frac{x^3}{3} + \\frac{x^2}{2} + 2x + 2\\ln|x - 1| + C', why: 'Integrate the polynomial and the log term.' },
          ],
          result: 'Check the division by expanding: $(x - 1)(x^2 + x + 2) = x^3 + x^2 + 2x - x^2 - x - 2 = x^3 + x - 2$, plus $2$ gives $x^3 + x$. ✓',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'The first thing to write on any partial fractions problem is a degree check. "Numerator degree $3 \\ge$ denominator degree $1$: divide first" earns credit on its own, and skipping it is the single most common way to get these problems wrong.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: $\\dfrac{x^3}{x^2 - 1}$ can be written as $\\dfrac{A}{x - 1} + \\dfrac{B}{x + 1}$ for suitable constants $A$ and $B$.',
      answer: false,
      explanation: 'The fraction is improper (degree $3 \\ge 2$). Any sum $\\frac{A}{x-1} + \\frac{B}{x+1}$ tends to $0$ as $x \\to \\infty$, but $\\frac{x^3}{x^2 - 1}$ grows like $x$. Dividing first gives $\\frac{x^3}{x^2 - 1} = x + \\frac{x}{x^2 - 1}$, and only the proper part decomposes: $\\frac{x}{x^2 - 1} = \\frac{1/2}{x - 1} + \\frac{1/2}{x + 1}$.',
    },
    {
      kind: 'concept',
      title: 'The whole algorithm, and where it shows up',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Degree check', text: 'If $\\deg P \\ge \\deg Q$, long-divide to get a polynomial plus a proper fraction.' },
            { title: 'Factor the denominator', text: 'Into linear factors $(x - r)^k$ and irreducible quadratics $(x^2 + bx + c)^m$.' },
            { title: 'Write the form', text: 'Each $(x - r)^k$ gives $\\frac{A_1}{x - r} + \\dots + \\frac{A_k}{(x - r)^k}$; each irreducible quadratic gives $\\frac{Bx + C}{x^2 + bx + c}$ (one per power).' },
            { title: 'Find the constants', text: 'Clear denominators; plug in roots, then equate coefficients for whatever is left.' },
            { title: 'Integrate each piece', text: '$\\frac{A}{x - r} \\to A\\ln|x - r|$; $\\frac{A}{(x - r)^k} \\to$ a power; $\\frac{Bx + C}{x^2 + a^2} \\to$ a log plus an arctangent.' },
          ],
        },
        {
          type: 'p',
          text: 'You will meet partial fractions again immediately in the next unit. The [[logistic-model]] of growth leads to the integral $\\int \\frac{dP}{P(K - P)}$, and the decomposition $\\frac{1}{P(K - P)} = \\frac{1}{K}\\left(\\frac{1}{P} + \\frac{1}{K - P}\\right)$ is precisely what solves it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Sigmoids and digital filters',
          text: 'The logistic curve that falls out of that integral is the **sigmoid** — the S-shaped function used as a neural-network activation, for smooth difficulty ramps, and for soft-clipping audio. And in signal processing, a complicated digital filter (an echo, a low-pass on a game\'s music when the player goes underwater) has a rational transfer function; engineers use partial fractions to split it into simple first-order filters that run in parallel, which is cheaper and more numerically stable.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps for integrating a rational function $\\frac{P(x)}{Q(x)}$ in order.',
      lines: [
        'Check degrees; if $\\deg P \\ge \\deg Q$, use long division',
        'Factor the denominator completely',
        'Write the decomposition with unknown numerators',
        'Clear denominators and solve for the constants',
        'Integrate each simple fraction',
      ],
      distractors: ['Split $\\frac{1}{x^2 + 4}$ into $\\frac{1}{x^2} + \\frac{1}{4}$'],
      explanation: 'Division must come first because the decomposition only exists for proper fractions; you cannot write the form until the denominator is factored; and the constants must be known before integrating. The distractor is the classic algebra mistake — a fraction does not split over a sum in its denominator.',
    },
    {
      kind: 'numeric',
      prompt: 'Using $\\frac{1}{x(10 - x)} = \\frac{1}{10}\\left(\\frac{1}{x} + \\frac{1}{10 - x}\\right)$, evaluate $\\displaystyle\\int_1^5 \\frac{dx}{x(10 - x)}$. An exact answer or a decimal is fine.',
      label: '$\\int_1^5 \\frac{dx}{x(10-x)} =$',
      answer: 'ln(9)/10',
      answerTex: '\\tfrac{1}{10}\\ln 9 \\approx 0.2197',
      hint: '$\\int \\frac{dx}{10 - x} = -\\ln|10 - x|$ (watch the sign from $u = 10 - x$). So the antiderivative is $\\frac{1}{10}\\ln\\left|\\frac{x}{10 - x}\\right|$.',
      explanation: 'The antiderivative is $\\frac{1}{10}\\left(\\ln|x| - \\ln|10 - x|\\right) = \\frac{1}{10}\\ln\\left|\\frac{x}{10 - x}\\right|$. At $x = 5$: $\\frac{1}{10}\\ln 1 = 0$. At $x = 1$: $\\frac{1}{10}\\ln\\frac{1}{9}$. Difference: $0 - \\frac{1}{10}\\ln\\frac{1}{9} = \\frac{1}{10}\\ln 9 = \\frac{1}{5}\\ln 3 \\approx 0.2197$. This is the logistic-growth integral with carrying capacity $K = 10$.',
    },
  ],
  takeaways: [
    'Partial fractions undo the addition of fractions, turning a rational integrand into pieces that integrate to logs, powers and arctangents.',
    'It applies only to proper fractions: if $\\deg P \\ge \\deg Q$, long-divide first.',
    'Distinct linear factors get $\\frac{A}{x - r}$; a repeated factor $(x - r)^k$ gets one term per power; an irreducible quadratic gets $\\frac{Bx + C}{x^2 + bx + c}$.',
    'Find constants by clearing denominators, plugging in roots (legal because the cleared equation is a polynomial identity), and equating coefficients.',
    'Key integrals: $\\int\\frac{dx}{x - r} = \\ln|x - r|$ and $\\int\\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\frac{x}{a}$.',
  ],
  reading: [
    {
      title: 'OpenStax Calculus Volume 2 — 3.4 Partial Fractions',
      url: 'https://openstax.org/books/calculus-volume-2/pages/3-4-partial-fractions',
      source: 'openstax',
      note: 'Covers all the cases in this lesson with worked examples and exercises.',
    },
    {
      title: "Paul's Online Notes — Partial Fractions",
      url: 'https://tutorial.math.lamar.edu/Classes/CalcII/PartialFractions.aspx',
      source: 'paul',
      note: 'A long table of decomposition forms plus many fully worked integrals.',
    },
    {
      title: 'Wikipedia — Partial fraction decomposition',
      url: 'https://en.wikipedia.org/wiki/Partial_fraction_decomposition',
      source: 'wikipedia',
      note: 'The theorem behind the method, the Heaviside cover-up method, and applications beyond integration.',
    },
  ],
};
