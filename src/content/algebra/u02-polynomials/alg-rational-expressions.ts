import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-rational-expressions',
  title: 'Rational Expressions',
  summary: 'Fractions with polynomials in them: find where they are undefined, simplify by cancelling factors, and add, subtract, multiply and divide them.',
  minutes: 18,
  objectives: [
    'Find the excluded values of a rational expression',
    'Simplify a rational expression by factoring and cancelling common factors (never terms)',
    'Multiply and divide rational expressions, keeping track of restrictions',
    'Add and subtract rational expressions using the least common denominator',
    'Simplify complex fractions',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Fractions of polynomials',
      blocks: [
        {
          type: 'definition',
          term: 'Rational expression',
          text: 'A [[rational-expression]] is a quotient $\\dfrac{P}{Q}$ of two polynomials, with $Q$ not the zero polynomial. Examples: $\\dfrac{x + 3}{x^2 - 4}$, $\\dfrac{1}{x}$, $\\dfrac{2x^2 - 8}{x^2 + x}$.',
        },
        {
          type: 'p',
          text: 'The name parallels [[rational-number|rational numbers]] — quotients of integers — and so do all the rules. Every technique in this lesson is a fraction rule you already know from the fractions lesson, applied with polynomials in place of integers. Factoring, from the last two lessons, plays the role of prime factorisation.',
        },
        {
          type: 'p',
          text: 'There is one new responsibility. Division by zero is undefined, so a rational expression is undefined wherever its denominator is zero. Those inputs are its [[excluded-value|excluded values]]. To find them, set the denominator equal to zero; for now, factoring and asking "which $x$ makes a factor zero?" is all you need.',
        },
        {
          type: 'derivation',
          title: 'Excluded values of $\\dfrac{x + 3}{x^2 - 4}$',
          steps: [
            { tex: 'x^2 - 4 = (x - 2)(x + 2)', why: 'Factor the denominator (difference of squares).' },
            { tex: 'x - 2 = 0 \\text{ or } x + 2 = 0', why: 'A product is zero exactly when one of its factors is zero.' },
            { tex: 'x \\neq 2, \\quad x \\neq -2', why: 'These inputs make the denominator zero, so they are excluded. The numerator plays no part in this.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why division by zero has no answer',
          text: '$\\frac{6}{2} = 3$ because $3 \\cdot 2 = 6$. A value for $\\frac{6}{0}$ would need $? \\cdot 0 = 6$, which no number satisfies. And $\\frac{0}{0}$ fails the other way: *every* number satisfies $? \\cdot 0 = 0$, so no single answer exists. Either way, the expression has no value there.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Guard your denominators',
          text: 'In C++, integer division by zero is undefined behaviour (often a crash), and floating-point division gives `inf` or `NaN` that silently poisons every later calculation — a classic source of objects vanishing from a game world. Excluded values are exactly the inputs your code needs to guard against.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find all excluded values of $\\dfrac{x - 5}{x^2 + x - 12}$. Enter them separated by a comma.',
      hint: 'Factor the denominator: two numbers with product $-12$ and sum $1$.',
      label: '$x =$',
      answer: ['-4', '3'],
      explanation: '$x^2 + x - 12 = (x + 4)(x - 3)$, which is zero at $x = -4$ and $x = 3$. Those are the excluded values. $x = 5$ is *not* excluded — it makes the numerator zero, and $\\frac{0}{\\text{nonzero}} = 0$ is perfectly fine.',
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Simplifying: cancel factors, not terms',
      blocks: [
        {
          type: 'theorem',
          name: 'Fundamental principle of fractions',
          tex: '\\frac{A \\cdot C}{B \\cdot C} = \\frac{A}{B} \\qquad (B \\neq 0,\\ C \\neq 0)',
          text: 'A common **factor** of the whole numerator and the whole denominator can be divided out — exactly as $\\frac{6}{9} = \\frac{2 \\cdot 3}{3 \\cdot 3} = \\frac{2}{3}$.',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\dfrac{x^2 - 9}{x^2 + 5x + 6}$',
          steps: [
            { tex: '= \\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)}', why: 'Factor completely: difference of squares on top, product-and-sum ($2 \\cdot 3 = 6$, $2 + 3 = 5$) on the bottom.' },
            { tex: 'x \\neq -2, \\quad x \\neq -3', why: 'Record the excluded values **now**, from the factored original denominator.' },
            { tex: '= \\frac{(x - 3)\\cancel{(x + 3)}}{(x + 2)\\cancel{(x + 3)}}', why: '$(x + 3)$ is a factor of both the entire numerator and the entire denominator.' },
            { tex: '= \\frac{x - 3}{x + 2}, \\quad x \\neq -2,\\ -3', why: 'The restriction $x \\neq -3$ must be stated: the simplified form *is* defined at $-3$, but the original is not.' },
          ],
          result: 'The two expressions are equal for every $x$ except $-3$, where only the simplified one has a value. On a graph that shows up as a **hole**.',
        },
        {
          type: 'graph',
          x: [-5, 5],
          y: [-4, 8],
          functions: [{ expr: '(x^2 - a^2)/(x - a)', label: '$y = \\dfrac{x^2 - a^2}{x - a}$' }],
          points: [{ x: 'a', y: '2a', open: true, label: 'hole' }],
          sliders: [{ name: 'a', min: -2, max: 3, step: 0.5, value: 1, label: '$a$' }],
          caption: 'Since $\\frac{x^2 - a^2}{x - a} = \\frac{(x - a)(x + a)}{x - a} = x + a$ for $x \\neq a$, the graph is the line $y = x + a$ with one point removed at $(a, 2a)$. Slide $a$ to move the hole along the line.',
        },
        {
          type: 'compare',
          left: {
            title: 'Cancelling terms (wrong)',
            tone: 'bad',
            tex: ['\\frac{x + 5}{5} = x', '\\frac{x^2 + 9}{x + 3} = x + 3'],
            text: 'Test with $x = 1$: $\\frac{6}{5} \\neq 1$, and $\\frac{10}{4} \\neq 4$.',
          },
          right: {
            title: 'Cancelling factors (right)',
            tone: 'good',
            tex: ['\\frac{5(x + 1)}{5} = x + 1', '\\frac{x(x + 3)}{x + 3} = x \\ (x \\neq -3)'],
            text: 'Only something *multiplied* by everything else, top and bottom, can cancel.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Opposites cancel to $-1$',
          text: '$4 - x = -(x - 4)$, so $\\dfrac{x - 4}{4 - x} = \\dfrac{x - 4}{-(x - 4)} = -1$ for $x \\neq 4$. Watch for factors that differ only in order of subtraction.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'For every $x$, $\\dfrac{x + 6}{6} = x + 1$, because the $6$s cancel.',
      answer: false,
      explanation: 'The $6$ on top is a **term** of $x + 6$, not a factor of the whole numerator, so it cannot cancel. Splitting the fraction correctly gives $\\frac{x + 6}{6} = \\frac{x}{6} + 1$. Test at $x = 6$: $\\frac{12}{6} = 2$, but $6 + 1 = 7$.',
    },
    {
      kind: 'expr',
      prompt: 'Simplify (assume $x$ is not an excluded value).',
      tex: '\\frac{x^2 - 4x}{x^2 - 16}',
      answer: 'x/(x + 4)',
      answerTex: '\\frac{x}{x + 4}',
      hint: 'Factor the numerator (GCF) and the denominator (difference of squares).',
      explanation: '$\\frac{x^2 - 4x}{x^2 - 16} = \\frac{x(x - 4)}{(x - 4)(x + 4)} = \\frac{x}{x + 4}$, for $x \\neq 4, -4$. The factor $(x - 4)$ cancels; the $x$ in the numerator does *not* cancel with the $x$ inside $x + 4$, because that $x$ is a term.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Multiplying and dividing',
      blocks: [
        {
          type: 'theorem',
          name: 'Multiplication and division',
          tex: '\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{AC}{BD} \\qquad \\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}',
          text: 'To divide, multiply by the [[reciprocal]] of the divisor.',
        },
        {
          type: 'p',
          text: 'Don\'t multiply the polynomials out — you would just have to factor them again. Instead: **factor everything, cancel common factors across the whole product, then multiply what remains.**',
        },
        {
          type: 'derivation',
          title: 'Multiply $\\dfrac{x^2 - 1}{x^2 + 3x} \\cdot \\dfrac{x + 3}{x^2 - 2x + 1}$',
          steps: [
            { tex: '= \\frac{(x - 1)(x + 1)}{x(x + 3)} \\cdot \\frac{x + 3}{(x - 1)^2}', why: 'Factor each numerator and denominator. Excluded values: $x \\neq 0, -3, 1$.' },
            { tex: '= \\frac{\\cancel{(x - 1)}(x + 1)\\cancel{(x + 3)}}{x\\cancel{(x + 3)}\\cancel{(x - 1)}(x - 1)}', why: 'Write as one fraction and cancel one $(x + 3)$ and one $(x - 1)$ — a factor on top cancels with a matching factor anywhere on the bottom.' },
            { tex: '= \\frac{x + 1}{x(x - 1)}', why: 'Leave the answer factored; that makes the excluded values visible.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Divide $\\dfrac{x^2 - 25}{2x + 6} \\div \\dfrac{x - 5}{x + 3}$',
          steps: [
            { tex: '= \\frac{x^2 - 25}{2x + 6} \\cdot \\frac{x + 3}{x - 5}', why: 'Multiply by the reciprocal of the divisor.' },
            { tex: '= \\frac{(x - 5)(x + 5)}{2(x + 3)} \\cdot \\frac{x + 3}{x - 5}', why: 'Factor: difference of squares, and GCF $2$.' },
            { tex: '= \\frac{x + 5}{2}, \\quad x \\neq -3,\\ 5', why: 'Cancel $(x - 5)$ and $(x + 3)$. Restrictions come from both original denominators **and** from the divisor\'s numerator, which became a denominator when flipped.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'In a division problem, the divisor\'s numerator is a hidden denominator. In the example above, $x = 5$ makes $\\frac{x - 5}{x + 3} = 0$, and dividing by zero is undefined — even though $(x - 5)$ is nowhere to be seen in the final answer.',
        },
      ],
    },
    {
      kind: 'expr',
      prompt: 'Multiply and simplify (assume $x$ is not an excluded value).',
      tex: '\\frac{2x^2 - 8}{x^2 + x} \\cdot \\frac{x + 1}{x - 2}',
      answer: '2(x + 2)/x',
      answerTex: '\\frac{2(x + 2)}{x}',
      domain: [0.5, 3],
      hint: 'Factor $2x^2 - 8$ completely: GCF first, then a difference of squares.',
      explanation: '$\\frac{2(x - 2)(x + 2)}{x(x + 1)} \\cdot \\frac{x + 1}{x - 2}$. Cancel $(x - 2)$ and $(x + 1)$ to get $\\frac{2(x + 2)}{x}$, valid for $x \\neq 0, -1, 2$. Equivalent forms such as $\\frac{2x + 4}{x}$ or $2 + \\frac{4}{x}$ are also correct.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Adding and subtracting: the LCD',
      blocks: [
        {
          type: 'p',
          text: 'As with numbers, you can only add fractions that share a denominator: $\\frac{A}{C} + \\frac{B}{C} = \\frac{A + B}{C}$. Otherwise, rewrite each fraction over the [[least-common-denominator]] (LCD). With polynomials, factor each denominator; the LCD is the product of every distinct factor, each raised to the highest power it appears with.',
        },
        {
          type: 'derivation',
          title: 'Add $\\dfrac{3}{x + 2} + \\dfrac{5}{x - 1}$',
          steps: [
            { tex: '\\text{LCD} = (x + 2)(x - 1)', why: 'The denominators share no factors, so the LCD is their product.' },
            { tex: '= \\frac{3(x - 1)}{(x + 2)(x - 1)} + \\frac{5(x + 2)}{(x + 2)(x - 1)}', why: 'Multiply each fraction by $1$ in a useful form: $\\frac{x - 1}{x - 1}$ and $\\frac{x + 2}{x + 2}$.' },
            { tex: '= \\frac{3x - 3 + 5x + 10}{(x + 2)(x - 1)}', why: 'Same denominator now, so add the numerators (expanding them).' },
            { tex: '= \\frac{8x + 7}{(x + 2)(x - 1)}', why: 'Combine like terms. The numerator doesn\'t factor, so nothing cancels.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Subtract $\\dfrac{x}{x^2 - 9} - \\dfrac{1}{x + 3}$',
          steps: [
            { tex: '= \\frac{x}{(x - 3)(x + 3)} - \\frac{1}{x + 3}', why: 'Factor the denominators first — that is how you see the LCD is $(x - 3)(x + 3)$, not the product of both denominators.' },
            { tex: '= \\frac{x - (x - 3)}{(x - 3)(x + 3)}', why: 'The second fraction needs a factor $\\frac{x - 3}{x - 3}$. Keep its numerator in parentheses: the minus sign applies to all of it.' },
            { tex: '= \\frac{3}{(x - 3)(x + 3)}', why: '$x - x + 3 = 3$. Without the parentheses you would get $2x - 3$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the LCD is worth finding',
          text: 'Any common denominator works — even the plain product of all the denominators. But a bigger-than-necessary denominator leaves a common factor you must find and cancel at the end. Factoring first keeps the numbers and polynomials as small as possible.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student simplifies a difference of two fractions. Tap the first line that is wrong.',
      lines: [
        '$\\dfrac{2x}{x - 1} - \\dfrac{x + 3}{x - 1}$',
        '$= \\dfrac{2x - x + 3}{x - 1}$',
        '$= \\dfrac{x + 3}{x - 1}$',
      ],
      errorLines: [2],
      explanation: 'The minus sign must apply to the **entire** second numerator: $2x - (x + 3) = 2x - x - 3$. Line 2 subtracted only the $x$. The correct result is $\\frac{x - 3}{x - 1}$. Writing the subtracted numerator in parentheses first prevents this error every time.',
    },
    {
      kind: 'expr',
      prompt: 'Add and write the result as a single fraction.',
      tex: '\\frac{2}{x} + \\frac{3}{x + 1}',
      answer: '(5x + 2)/(x(x + 1))',
      answerTex: '\\frac{5x + 2}{x(x + 1)}',
      domain: [0.5, 3],
      hint: 'The LCD is $x(x + 1)$. Multiply the first fraction by $\\frac{x + 1}{x + 1}$ and the second by $\\frac{x}{x}$.',
      explanation: '$\\frac{2(x + 1)}{x(x + 1)} + \\frac{3x}{x(x + 1)} = \\frac{2x + 2 + 3x}{x(x + 1)} = \\frac{5x + 2}{x(x + 1)}$. A common wrong answer is $\\frac{5}{2x + 1}$, from adding numerators and denominators separately — test it at $x = 1$: the true value is $2 + \\frac{3}{2} = 3.5$, but $\\frac{5}{3} \\approx 1.67$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Complex fractions',
      blocks: [
        {
          type: 'p',
          text: 'A [[complex-fraction]] has fractions inside its numerator or denominator. The cleanest method: multiply the big numerator and big denominator by the LCD of **all** the small fractions. That clears every small denominator in one move — and it is legal because multiplying top and bottom by the same nonzero thing is multiplying by $1$.',
        },
        {
          type: 'derivation',
          title: 'Simplify $\\dfrac{1 + \\frac{1}{x}}{1 - \\frac{1}{x^2}}$',
          steps: [
            { tex: '\\text{LCD of } \\tfrac{1}{x}, \\tfrac{1}{x^2} \\text{ is } x^2', why: 'The small denominators are $x$ and $x^2$.' },
            { tex: '= \\frac{\\left(1 + \\frac{1}{x}\\right) x^2}{\\left(1 - \\frac{1}{x^2}\\right) x^2} = \\frac{x^2 + x}{x^2 - 1}', why: 'Distribute $x^2$ to every term on top and on the bottom: $1 \\cdot x^2$, $\\frac{1}{x} \\cdot x^2 = x$, and $\\frac{1}{x^2} \\cdot x^2 = 1$.' },
            { tex: '= \\frac{x(x + 1)}{(x - 1)(x + 1)}', why: 'Factor.' },
            { tex: '= \\frac{x}{x - 1}, \\quad x \\neq 0,\\ \\pm 1', why: 'Cancel $(x + 1)$. Restrictions come from the small denominators ($x \\neq 0$) and from the original big denominator, which is zero at $x = \\pm 1$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'You will see this again in calculus',
          text: 'The derivative of $\\frac{1}{x}$ starts from the difference quotient $\\dfrac{\\frac{1}{x + h} - \\frac{1}{x}}{h}$ — a complex fraction. Multiplying top and bottom by $x(x + h)$ gives $\\dfrac{x - (x + h)}{h\\,x(x + h)} = \\dfrac{-1}{x(x + h)}$, and the troublesome $h$ in the denominator is gone. The algebra in this lesson is precisely what calculus needs.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Order the steps to simplify $\\dfrac{1 + \\frac{2}{x}}{1 - \\frac{4}{x^2}}$.',
      lines: [
        'The LCD of all the small fractions is $x^2$',
        'Multiply top and bottom by $x^2$: $\\dfrac{x^2 + 2x}{x^2 - 4}$',
        'Factor: $\\dfrac{x(x + 2)}{(x - 2)(x + 2)}$',
        'Cancel $(x + 2)$: $\\dfrac{x}{x - 2}$',
      ],
      distractors: ['Cancel the $x^2$ terms: $\\dfrac{2x}{-4}$'],
      explanation: 'Clearing the small denominators with $x^2$ gives $\\frac{x^2 + 2x}{x^2 - 4}$. Factoring shows the common factor $(x + 2)$, and cancelling leaves $\\frac{x}{x - 2}$ (with $x \\neq 0, \\pm 2$). The distractor cancels **terms** $x^2$ from a sum — never allowed.',
    },
    {
      kind: 'mcq',
      prompt: 'Simplify $\\dfrac{\\frac{1}{x} - \\frac{1}{3}}{x - 3}$.',
      options: [
        { text: '$\\dfrac{1}{3x}$', why: 'Close, but the numerator becomes $\\frac{3 - x}{3x}$, and $3 - x = -(x - 3)$ contributes a factor of $-1$.' },
        { text: '$-\\dfrac{1}{3}$', why: 'This forgets the $x$ in the LCD $3x$.' },
        { text: '$\\dfrac{3 - x}{3x}$', why: 'That is just the numerator; you still need to divide by $x - 3$.' },
        { text: '$-\\dfrac{1}{3x}$', correct: true, why: '$\\frac{3 - x}{3x} \\cdot \\frac{1}{x - 3} = \\frac{-(x - 3)}{3x(x - 3)} = -\\frac{1}{3x}$.' },
      ],
      explanation: 'Multiply top and bottom by $3x$: $\\frac{3 - x}{3x(x - 3)}$. Since $3 - x = -(x - 3)$, the factors cancel to $-1$, giving $-\\frac{1}{3x}$ (for $x \\neq 0, 3$). Check at $x = 1$: $\\frac{1 - \\frac{1}{3}}{-2} = -\\frac{1}{3}$, and $-\\frac{1}{3 \\cdot 1} = -\\frac{1}{3}$ ✓.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Rational expressions at work: averaging rates',
      blocks: [
        {
          type: 'p',
          text: 'Suppose you drive to a town at speed $a$ and return along the same road at speed $b$. Your average speed is **not** $\\frac{a + b}{2}$, because you spend more *time* at the slower speed. Average speed is total distance over total time, and that is a complex fraction.',
        },
        {
          type: 'derivation',
          title: 'Average speed for a round trip of $d$ each way',
          steps: [
            { tex: '\\text{time out} = \\frac{d}{a}, \\quad \\text{time back} = \\frac{d}{b}', why: 'Time is distance divided by speed.' },
            { tex: '\\bar v = \\frac{2d}{\\frac{d}{a} + \\frac{d}{b}}', why: 'Total distance $2d$ over total time.' },
            { tex: '= \\frac{2d \\cdot ab}{\\left(\\frac{d}{a} + \\frac{d}{b}\\right) ab} = \\frac{2abd}{bd + ad}', why: 'Multiply top and bottom by the LCD $ab$ of the small fractions.' },
            { tex: '= \\frac{2ab\\,\\cancel{d}}{(a + b)\\cancel{d}} = \\frac{2ab}{a + b}', why: 'Factor $d$ out of the denominator and cancel. The distance doesn\'t matter!' },
          ],
          result: 'The average speed is $\\frac{2ab}{a + b}$, the **harmonic mean** of $a$ and $b$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Averaging frame rates',
          text: 'The same trap catches game developers. If one frame renders at $30$ fps ($33.3$ ms) and the next at $60$ fps ($16.7$ ms), the average is two frames in $50$ ms, which is $40$ fps — the harmonic mean $\\frac{2 \\cdot 30 \\cdot 60}{30 + 60}$ — not $45$. That is why profilers average **frame times**, not frame rates.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'On tests, always state excluded values next to a simplified rational expression unless told to assume them away. Later, when you solve equations that contain rational expressions, forgetting an excluded value produces false "solutions".',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'You drive to a town at $60$ km/h and return along the same road at $40$ km/h. What is your average speed for the round trip?',
      hint: 'Use $\\bar v = \\frac{2ab}{a + b}$, or pick a distance (say $120$ km each way) and compute total distance over total time.',
      answer: '48',
      unit: 'km/h',
      explanation: '$\\frac{2 \\cdot 60 \\cdot 40}{60 + 40} = \\frac{4800}{100} = 48$ km/h. With $120$ km each way: $2$ hours out, $3$ hours back, so $240$ km in $5$ hours $= 48$ km/h. The tempting answer $50$ is wrong because more time is spent at $40$ km/h than at $60$.',
    },
  ],
  takeaways: [
    'A rational expression is undefined where its denominator is zero; find these excluded values from the original expression, before cancelling.',
    'Simplify by factoring completely and cancelling common factors — never cancel terms of a sum.',
    'Multiply: factor, cancel, multiply. Divide: multiply by the reciprocal (its numerator adds a restriction).',
    'Add or subtract over the LCD, and wrap a subtracted numerator in parentheses.',
    'Clear a complex fraction by multiplying top and bottom by the LCD of all the small fractions.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 1.6 Rational Expressions',
      url: 'https://openstax.org/books/college-algebra-2e/pages/1-6-rational-expressions',
      source: 'openstax',
      note: 'Simplifying, multiplying, dividing, adding and subtracting rational expressions, and complex fractions.',
    },
    {
      title: "Paul's Online Notes — Rational Expressions",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/RationalExpressions.aspx',
      source: 'paul',
      note: 'Careful treatment of the "cancel factors, not terms" rule with many examples.',
    },
    {
      title: 'Wikipedia — Harmonic mean',
      url: 'https://en.wikipedia.org/wiki/Harmonic_mean',
      source: 'wikipedia',
      note: 'Where the round-trip average speed formula comes from, and other places this rational expression shows up.',
    },
  ],
};
