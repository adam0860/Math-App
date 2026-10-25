import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-completing-square',
  title: 'Completing the Square',
  summary: 'Add exactly the right constant to build a perfect square, and every quadratic becomes solvable.',
  minutes: 17,
  objectives: [
    'Find the constant $\\left(\\frac{b}{2}\\right)^2$ that turns $x^2 + bx$ into a perfect square',
    'Solve any quadratic equation by completing the square, including odd $b$ and $a \\neq 1$',
    'Rewrite $x^2 + bx + c$ as $(x - h)^2 + k$ and read off its minimum value',
    'Recognise when completing the square shows there is no real solution',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The problem factoring cannot solve',
      blocks: [
        {
          type: 'p',
          text: 'Try to factor $x^2 + 6x - 2$. You need two integers with product $-2$ and sum $6$, and there are none. Yet the graph of $y = x^2 + 6x - 2$ clearly crosses the $x$-axis twice, so the equation $x^2 + 6x - 2 = 0$ has two real solutions. Factoring over the integers has simply run out of road.',
        },
        {
          type: 'p',
          text: 'The last lesson gave us one tool that works on *any* number: the square root property. $(x + 3)^2 = 11$ is easy, giving $x = -3 \\pm \\sqrt{11}$. So here is the plan: **rearrange the equation so the left side is a perfect square.** That rearrangement is called [[completing-the-square]].',
        },
        {
          type: 'heading',
          text: 'Why it is called "completing the square"',
        },
        {
          type: 'p',
          text: 'Picture $x^2 + 6x$ as an area: an $x$-by-$x$ square, plus $6x$ split into two $3$-by-$x$ strips glued to two sides. The shape is *almost* a big square of side $x + 3$, with one $3$-by-$3$ corner missing. Add that $9$, and the square is complete: $x^2 + 6x + 9 = (x + 3)^2$.',
        },
        {
          type: 'graph',
          x: [-0.5, 8],
          y: [-0.5, 8],
          equal: true,
          height: 320,
          areas: [
            { expr: 's', from: 0, to: 's', color: 'blue' },
            { expr: 's', from: 's', to: 's + 3', color: 'green' },
            { expr: 's + 3', expr2: 's', from: 0, to: 's', color: 'green' },
            { expr: 's + 3', expr2: 's', from: 's', to: 's + 3', color: 'red' },
          ],
          segments: [
            { from: [0, 0], to: ['s + 3', 0], color: 'gray' },
            { from: ['s + 3', 0], to: ['s + 3', 's + 3'], color: 'gray' },
            { from: ['s + 3', 's + 3'], to: [0, 's + 3'], color: 'gray' },
            { from: [0, 's + 3'], to: [0, 0], color: 'gray' },
            { from: ['s', 0], to: ['s', 's + 3'], color: 'gray', dashed: true },
            { from: [0, 's'], to: ['s + 3', 's'], color: 'gray', dashed: true },
          ],
          sliders: [{ name: 's', min: 1, max: 4.5, step: 0.1, value: 3, label: 'side $x$' }],
          readouts: [
            { label: 'blue + green $= x^2 + 6x =$', expr: 's^2 + 6s', digits: 2 },
            { label: 'with the red corner $= (x + 3)^2 =$', expr: '(s + 3)^2', digits: 2 },
          ],
          caption: 'Blue: $x^2$. Green: two strips of area $3x$ each. Red: the missing $3 \\times 3$ corner. Whatever $x$ is, the two readouts always differ by exactly $9$.',
        },
        {
          type: 'callout',
          variant: 'history',
          text: 'This is literally how al-Khwarizmi solved quadratics around 820 CE, in the book whose title gave us the word *algebra*. He had no negative numbers and no symbols, just squares and rectangles, so every step was a geometric cut-and-paste exactly like the picture above.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Complete the square.',
      template: '$x^2 + 10x +$ ___ $= (x +$ ___ $)^2$',
      blanks: [{ answers: ['$25$'] }, { answers: ['$5$'] }],
      wordBank: ['$25$', '$5$', '$100$', '$10$', '$20$'],
      explanation: 'Split the $10x$ into two strips of $5x$; the missing corner is $5 \\times 5 = 25$. Check by expanding: $(x + 5)^2 = x^2 + 2 \\cdot 5x + 25 = x^2 + 10x + 25$. The tempting $100$ comes from squaring $10$ without halving it first.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The rule: add $\\left(\\frac{b}{2}\\right)^2$',
      blocks: [
        {
          type: 'p',
          text: 'Expand a general perfect square and look at how its coefficients are related:',
        },
        {
          type: 'math',
          tex: '(x + h)^2 = x^2 + \\underbrace{2h}_{\\text{middle}}\\,x + \\underbrace{h^2}_{\\text{constant}}',
        },
        {
          type: 'p',
          text: 'The middle coefficient is $2h$, so $h$ is **half** the middle coefficient, and the constant is $h^2$. Reading this backwards gives the rule.',
        },
        {
          type: 'theorem',
          name: 'Completing the square',
          tex: 'x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2',
          text: 'Half the coefficient of $x$, then square it. The sign inside the square matches the sign of $b$.',
        },
        {
          type: 'derivation',
          title: 'Solve $x^2 + 6x - 2 = 0$',
          steps: [
            { tex: 'x^2 + 6x = 2', why: 'Move the constant to the right so the left side holds only the $x^2$ and $x$ terms.' },
            { tex: 'x^2 + 6x + 9 = 2 + 9', why: 'Half of $6$ is $3$, and $3^2 = 9$. Add it to **both** sides so the equation stays balanced.' },
            { tex: '(x + 3)^2 = 11', why: 'The left side is now a perfect square by construction.' },
            { tex: 'x + 3 = \\pm\\sqrt{11}', why: 'Square root property: both signs.' },
            { tex: 'x = -3 \\pm \\sqrt{11}', why: 'Subtract $3$.' },
          ],
          result: 'The solutions are $-3 + \\sqrt{11} \\approx 0.317$ and $-3 - \\sqrt{11} \\approx -6.317$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we are allowed to "add 9"',
          text: 'Adding $9$ to only one side would change the equation and its solutions. Adding it to both sides is the same balance move you used for linear equations: the new equation has exactly the same solutions as the old one. We are not changing the problem; we are rewriting it into a shape we know how to finish.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Solve $x^2 - 4x - 1 = 0$ by completing the square. Enter both solutions separated by a comma (e.g. `2+sqrt(5), 2-sqrt(5)` style, or decimals to 2 places).',
      label: '$x =$',
      answer: ['2+sqrt(5)', '2-sqrt(5)'],
      answerTex: '2 \\pm \\sqrt{5}',
      hint: 'Move the $-1$ across, then add $\\left(\\frac{-4}{2}\\right)^2 = 4$ to both sides.',
      explanation: '$x^2 - 4x = 1$. Half of $-4$ is $-2$ and $(-2)^2 = 4$, so $x^2 - 4x + 4 = 5$, i.e. $(x - 2)^2 = 5$. Then $x - 2 = \\pm\\sqrt{5}$ and $x = 2 \\pm \\sqrt{5} \\approx 4.24$ or $-0.24$. Note the sign: because $b$ is negative the square is $(x - 2)^2$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'What constant completes the square for $x^2 - 7x$?',
      options: [
        { text: '$\\dfrac{49}{4}$', correct: true, why: 'Half of $-7$ is $-\\frac{7}{2}$, and $\\left(-\\frac{7}{2}\\right)^2 = \\frac{49}{4}$.' },
        { text: '$49$', why: 'This squares $7$ without halving it first. $(x - 7)^2 = x^2 - 14x + 49$, the wrong middle term.' },
        { text: '$\\dfrac{7}{2}$', why: 'This is half of $7$, but you still need to square it.' },
        { text: '$-\\dfrac{49}{4}$', why: 'A square is never negative. The sign of $b$ only affects the sign *inside* the binomial: $\\left(x - \\frac{7}{2}\\right)^2$.' },
      ],
      explanation: 'Halve, then square: $\\left(\\frac{-7}{2}\\right)^2 = \\frac{49}{4}$. Check: $\\left(x - \\frac{7}{2}\\right)^2 = x^2 - 2 \\cdot \\frac{7}{2}x + \\frac{49}{4} = x^2 - 7x + \\frac{49}{4}$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Odd coefficients: keep the fractions',
      blocks: [
        {
          type: 'p',
          text: 'When $b$ is odd, $\\frac{b}{2}$ is a fraction. That is fine. Fractions are exact; decimals like $6.25$ are fine here too, but they become unpleasant the moment the numbers do not terminate. Keep things as fractions until the very end.',
        },
        {
          type: 'derivation',
          title: 'Solve $x^2 + 5x + 1 = 0$',
          steps: [
            { tex: 'x^2 + 5x = -1', why: 'Constant to the right.' },
            { tex: 'x^2 + 5x + \\frac{25}{4} = -1 + \\frac{25}{4}', why: 'Half of $5$ is $\\frac{5}{2}$; squared, $\\frac{25}{4}$. Add to both sides.' },
            { tex: '\\left(x + \\frac{5}{2}\\right)^2 = \\frac{21}{4}', why: 'Perfect square on the left; on the right, $-1 = -\\frac{4}{4}$, so $-\\frac{4}{4} + \\frac{25}{4} = \\frac{21}{4}$.' },
            { tex: 'x + \\frac{5}{2} = \\pm\\frac{\\sqrt{21}}{2}', why: 'Square root property, and $\\sqrt{\\frac{21}{4}} = \\frac{\\sqrt{21}}{\\sqrt{4}} = \\frac{\\sqrt{21}}{2}$.' },
            { tex: 'x = \\frac{-5 \\pm \\sqrt{21}}{2}', why: 'Subtract $\\frac{5}{2}$ and combine over the common denominator $2$.' },
          ],
          result: 'Approximately $x \\approx -0.209$ or $x \\approx -4.791$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'A quick self-check after the "add to both sides" step: the right side must be the number you can square-root. If you get $(x + \\frac{5}{2})^2 = \\frac{21}{4}$, then $\\frac{21}{4} \\ge 0$ tells you immediately that there will be two real solutions, before you finish.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'expr',
      prompt: 'In general, what constant must you add to $x^2 + kx$ to make it a perfect square? Write it in terms of $k$.',
      label: 'add',
      answer: 'k^2/4',
      answerTex: '\\dfrac{k^2}{4}',
      variables: ['k'],
      hint: 'Halve the coefficient of $x$, then square.',
      explanation: 'Half of $k$ is $\\frac{k}{2}$, and $\\left(\\frac{k}{2}\\right)^2 = \\frac{k^2}{4}$. Check: $\\left(x + \\frac{k}{2}\\right)^2 = x^2 + kx + \\frac{k^2}{4}$. With $k = 6$ this gives $9$; with $k = -7$, $\\frac{49}{4}$, matching the earlier examples.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'When the leading coefficient is not 1',
      blocks: [
        {
          type: 'p',
          text: 'The "halve and square" rule came from $(x + h)^2$, whose $x^2$ coefficient is $1$. For $2x^2 - 8x + 3 = 0$ it does not apply directly: no constant turns $2x^2 - 8x$ into $(x + \\text{something})^2$. So first **divide every term by $a$**.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Make $a = 1$', text: 'Divide **every** term of $ax^2 + bx + c = 0$ by $a$.' },
            { title: 'Isolate', text: 'Move the constant term to the right side.' },
            { title: 'Complete', text: 'Add $\\left(\\frac{\\text{coefficient of } x}{2}\\right)^2$ to both sides.' },
            { title: 'Factor', text: 'Write the left side as $\\left(x + \\frac{\\text{coefficient}}{2}\\right)^2$ and simplify the right.' },
            { title: 'Root and solve', text: 'Apply $\\pm\\sqrt{\\ }$ and isolate $x$.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Solve $2x^2 - 8x + 3 = 0$',
          steps: [
            { tex: 'x^2 - 4x + \\frac{3}{2} = 0', why: 'Divide **all three** terms by $2$. The right side stays $0$.' },
            { tex: 'x^2 - 4x = -\\frac{3}{2}', why: 'Move the constant across.' },
            { tex: 'x^2 - 4x + 4 = -\\frac{3}{2} + 4', why: 'Half of $-4$ is $-2$; $(-2)^2 = 4$.' },
            { tex: '(x - 2)^2 = \\frac{5}{2}', why: '$-\\frac{3}{2} + \\frac{8}{2} = \\frac{5}{2}$.' },
            { tex: 'x - 2 = \\pm\\sqrt{\\frac{5}{2}} = \\pm\\frac{\\sqrt{10}}{2}', why: 'Square root property; [[rationalizing-the-denominator|rationalise]]: $\\sqrt{\\frac{5}{2}} = \\frac{\\sqrt{5}}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{10}}{2}$.' },
            { tex: 'x = 2 \\pm \\frac{\\sqrt{10}}{2}', why: 'Add $2$.' },
          ],
          result: 'Approximately $x \\approx 3.58$ or $x \\approx 0.42$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Divide every term',
          text: 'The classic slip is dividing $2x^2$ and $-8x$ by $2$ but leaving the constant as $3$. Dividing an equation by $a$ is only legal when you divide **the whole of each side**, which means every single term.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student solves $2x^2 + 12x - 5 = 0$ by completing the square. Tap the first incorrect line.',
      lines: [
        '$2x^2 + 12x - 5 = 0$',
        '$x^2 + 6x - 5 = 0$',
        '$x^2 + 6x = 5$',
        '$x^2 + 6x + 9 = 14$',
        '$(x + 3)^2 = 14$',
        '$x = -3 \\pm \\sqrt{14}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 divides $2x^2$ and $12x$ by $2$ but not the $-5$. It should read $x^2 + 6x - \\frac{5}{2} = 0$. Then $x^2 + 6x = \\frac{5}{2}$, adding $9$ gives $(x + 3)^2 = \\frac{23}{2}$, and $x = -3 \\pm \\sqrt{\\frac{23}{2}} = -3 \\pm \\frac{\\sqrt{46}}{2}$. Every later step is done correctly, on the wrong equation.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Solve $2x^2 + 4x - 3 = 0$ by completing the square. Enter both solutions separated by a comma (exact, like `-1+sqrt(10)/2`, or decimals to 2 places).',
      label: '$x =$',
      answer: ['-1+sqrt(10)/2', '-1-sqrt(10)/2'],
      answerTex: '-1 \\pm \\frac{\\sqrt{10}}{2}',
      hint: 'Divide by $2$ first: $x^2 + 2x - \\frac{3}{2} = 0$.',
      explanation: 'Divide by $2$: $x^2 + 2x = \\frac{3}{2}$. Add $1$: $(x + 1)^2 = \\frac{5}{2}$. So $x + 1 = \\pm\\sqrt{\\frac{5}{2}} = \\pm\\frac{\\sqrt{10}}{2}$, and $x = -1 \\pm \\frac{\\sqrt{10}}{2} \\approx 0.58$ or $-2.58$. (Typing `-1+sqrt(5/2)` is the same number and is accepted.)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Completing the square on an expression',
      blocks: [
        {
          type: 'p',
          text: 'Completing the square is not only for solving equations. You can use it to **rewrite** a quadratic expression, and the new form reveals things the old one hides. With no equation, there is no "other side" to add to, so you add the constant and immediately subtract it again: adding $0$ never changes a value.',
        },
        {
          type: 'derivation',
          title: 'Rewrite $x^2 - 6x + 11$',
          steps: [
            { tex: 'x^2 - 6x + 11 = (x^2 - 6x + 9) - 9 + 11', why: 'Half of $-6$ is $-3$; add $9$ and subtract $9$, a net change of $0$.' },
            { tex: '= (x - 3)^2 + 2', why: 'The bracket is a perfect square; $-9 + 11 = 2$.' },
          ],
          result: '$x^2 - 6x + 11 = (x - 3)^2 + 2$ for every $x$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this form tells you the minimum',
          text: 'A square is never negative, so $(x - 3)^2 \\ge 0$, with equality only at $x = 3$. Therefore $(x - 3)^2 + 2 \\ge 2$: the smallest value the expression can take is $2$, reached at $x = 3$. On the graph, $(3, 2)$ is the lowest point of the parabola, its [[vertex]]. This is the [[vertex-form]] you will graph in the last lesson of this unit.',
        },
        {
          type: 'graph',
          x: [-8, 8],
          y: [-6, 10],
          functions: [{ expr: 'x^2 + b*x + c', label: '$y = x^2 + bx + c$' }],
          points: [{ x: '-b/2', y: 'c - b^2/4', label: 'lowest point' }],
          sliders: [
            { name: 'b', min: -6, max: 6, step: 0.5, value: -6, label: '$b$' },
            { name: 'c', min: -4, max: 11, step: 0.5, value: 11, label: '$c$' },
          ],
          readouts: [
            { label: 'lowest point at $x = -\\frac{b}{2} =$', expr: '-b/2', digits: 2 },
            { label: 'minimum value $c - \\frac{b^2}{4} =$', expr: 'c - b^2/4', digits: 3 },
          ],
          caption: 'Completing the square in general: $x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 + c - \\frac{b^2}{4}$. The lowest point is always at $x = -\\frac{b}{2}$, at height $c - \\frac{b^2}{4}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Closest approach in a game',
          text: 'Two ships move in straight lines. The *squared* distance between them at time $t$ works out to a quadratic $At^2 + Bt + C$ with $A > 0$. Completing the square gives $A\\left(t + \\frac{B}{2A}\\right)^2 + C - \\frac{B^2}{4A}$, so the closest approach happens at $t = -\\frac{B}{2A}$. AI steering and collision-avoidance code uses exactly this formula, with no square roots needed.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Rewrite $x^2 - 8x + 20$ by completing the square. What is the smallest value this expression can take?',
      label: 'minimum $=$',
      answer: '4',
      hint: 'Half of $-8$ is $-4$. Add and subtract $16$.',
      explanation: '$x^2 - 8x + 20 = (x^2 - 8x + 16) - 16 + 20 = (x - 4)^2 + 4$. Since $(x - 4)^2 \\ge 0$, the expression is always at least $4$, and equals $4$ exactly at $x = 4$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'truefalse',
      prompt: 'To complete the square in the equation $4x^2 + 8x = 5$, you add $16$ to both sides, because $\\left(\\frac{8}{2}\\right)^2 = 16$.',
      answer: false,
      explanation: 'The halve-and-square rule needs a leading coefficient of $1$. Divide by $4$ first: $x^2 + 2x = \\frac{5}{4}$, then add $\\left(\\frac{2}{2}\\right)^2 = 1$ to get $(x + 1)^2 = \\frac{9}{4}$, so $x = \\frac{1}{2}$ or $x = -\\frac{5}{2}$. Adding $16$ to the original gives $4x^2 + 8x + 16 = 4(x^2 + 2x + 4)$, which is not a perfect square, because $x^2 + 2x + 4$ is not one.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'It always works, even when there is no real answer',
      blocks: [
        {
          type: 'p',
          text: 'Factoring sometimes fails. Completing the square never does: every quadratic can be pushed into the form $(x + h)^2 = r$. What happens next depends only on the sign of $r$.',
        },
        {
          type: 'table',
          headers: ['After completing the square', 'Solutions', 'Graph of the quadratic'],
          rows: [
            ['$(x + h)^2 = r$ with $r > 0$', 'two: $x = -h \\pm \\sqrt{r}$', 'crosses the $x$-axis twice'],
            ['$(x + h)^2 = 0$', 'one double root, $x = -h$', 'touches the axis at its vertex'],
            ['$(x + h)^2 = r$ with $r < 0$', 'no real solutions', 'never reaches the axis'],
          ],
        },
        {
          type: 'derivation',
          title: 'Try to solve $x^2 + 2x + 5 = 0$',
          steps: [
            { tex: 'x^2 + 2x = -5', why: 'Constant to the right.' },
            { tex: 'x^2 + 2x + 1 = -5 + 1', why: 'Half of $2$ is $1$; $1^2 = 1$.' },
            { tex: '(x + 1)^2 = -4', why: 'Perfect square on the left.' },
          ],
          result: 'A real number squared cannot equal $-4$, so there is **no real solution**. In the Complex Numbers lesson you will meet numbers that do square to negatives, and this equation will get the two solutions $x = -1 \\pm 2i$.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Many instructors require "solve by completing the square" specifically, because it is how the quadratic formula is proved (next lesson) and how circles and parabolas are put into standard form. Show the "add to both sides" line explicitly; that is where the method is being graded.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps for solving $2x^2 - 12x + 7 = 0$ in order.',
      lines: [
        '$x^2 - 6x + \\frac{7}{2} = 0$',
        '$x^2 - 6x = -\\frac{7}{2}$',
        '$x^2 - 6x + 9 = \\frac{11}{2}$',
        '$(x - 3)^2 = \\frac{11}{2}$',
        '$x = 3 \\pm \\sqrt{\\frac{11}{2}}$',
      ],
      distractors: ['$2x^2 - 12x + 36 = 29$'],
      explanation: 'Divide by $2$, move the constant, add $\\left(\\frac{-6}{2}\\right)^2 = 9$ to both sides ($-\\frac{7}{2} + \\frac{18}{2} = \\frac{11}{2}$), factor, then take $\\pm$ square roots. The distractor adds $36$ without dividing by $2$ first, and $2x^2 - 12x + 36$ is not a perfect square. (Rationalised, the answer is $3 \\pm \\frac{\\sqrt{22}}{2}$.)',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Completing the square on $x^2 + 4x + 9 = 0$ gives $(x + 2)^2 = -5$. What does this tell you?',
      options: [
        { text: 'The equation has no real solutions', correct: true, why: 'Squares of real numbers are never negative, so nothing real satisfies $(x + 2)^2 = -5$.' },
        { text: '$x = -2 \\pm \\sqrt{5}$', why: 'That solves $(x + 2)^2 = 5$. The minus sign on the right was dropped.' },
        { text: '$x = -2$ is a double root', why: 'A double root needs the right side to be exactly $0$.' },
        { text: 'You made a mistake; completing the square always gives a positive number', why: 'The method is correct here. A negative right side is a genuine result: the parabola $y = x^2 + 4x + 9 = (x + 2)^2 + 5$ stays at least $5$ above the axis.' },
      ],
      explanation: 'Check: $(x + 2)^2 = x^2 + 4x + 4$, and $x^2 + 4x + 4 = -5$ is $x^2 + 4x + 9 = 0$. ✓ So the original equation is equivalent to "a square equals $-5$", impossible for real $x$. The graph agrees: its lowest point is $(-2, 5)$.',
    },
  ],
  takeaways: [
    'To complete the square on $x^2 + bx$, add $\\left(\\frac{b}{2}\\right)^2$: $x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2$.',
    'In an equation, add the constant to **both** sides; in an expression, add and subtract it.',
    'If $a \\neq 1$, divide every term by $a$ first. Keep fractions exact.',
    'The completed form $(x + h)^2 = r$ gives two, one or zero real solutions as $r$ is positive, zero or negative.',
    '$(x - h)^2 + k$ has minimum value $k$ at $x = h$: completing the square finds the vertex of a parabola.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.5 Quadratic Equations',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations',
      source: 'openstax',
      note: 'The "Completing the Square" subsection has worked examples and exercises with answers.',
    },
    {
      title: "Paul's Online Notes — Quadratic Equations, Part I",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/SolveQuadraticEqnsI.aspx',
      source: 'paul',
      note: 'Includes a careful treatment of completing the square with fractions and $a \\neq 1$.',
    },
    {
      title: 'Wikipedia — Completing the square',
      url: 'https://en.wikipedia.org/wiki/Completing_the_square',
      source: 'wikipedia',
      note: 'Has the geometric area picture and the history going back to Babylonian and Islamic mathematicians.',
    },
  ],
};
