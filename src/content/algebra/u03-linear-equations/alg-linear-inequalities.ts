import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-linear-inequalities',
  title: 'Linear Inequalities and Interval Notation',
  summary: 'Solve inequalities like equations — with one crucial twist — and describe infinite solution sets with interval notation.',
  minutes: 17,
  objectives: [
    'Graph a solution set on a number line and write it in set-builder and interval notation',
    'Solve linear inequalities, reversing the inequality when multiplying or dividing by a negative number',
    'Solve compound inequalities joined by "and" (intersection) or "or" (union), including three-part inequalities',
    'Model and solve applied problems that ask for "at least", "at most" or a range of values',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Solution sets that go on forever',
      blocks: [
        {
          type: 'p',
          text: 'An [[inequality]] compares two expressions with $<$, $\\le$, $>$ or $\\ge$. A linear equation usually has one solution; a linear inequality usually has **infinitely many**. The solutions of $x > 2$ are $2.1$, $3$, $1000$, $\\pi$ … every real number to the right of $2$, but not $2$ itself.',
        },
        {
          type: 'p',
          text: 'You cannot list infinitely many numbers, so we describe the whole set at once. Three equivalent ways are standard: a picture on the [[number-line]], [[set-builder-notation]] such as $\\{x \\mid x > 2\\}$ (read "the set of all $x$ such that $x > 2$"), and [[interval-notation]], which records just the two endpoints.',
        },
        {
          type: 'table',
          headers: ['Inequality', 'Number line', 'Interval notation'],
          rows: [
            ['$x > 2$', 'open dot at $2$, shade right', '$(2, \\infty)$'],
            ['$x \\ge 2$', 'closed dot at $2$, shade right', '$[2, \\infty)$'],
            ['$x < -1$', 'open dot at $-1$, shade left', '$(-\\infty, -1)$'],
            ['$-1 < x \\le 4$', 'open at $-1$, closed at $4$, shade between', '$(-1, 4]$'],
            ['all real numbers', 'shade everything', '$(-\\infty, \\infty)$'],
          ],
          caption: 'A parenthesis (or open dot) means the endpoint is excluded; a square bracket (or closed dot) means it is included.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-1, 1],
          height: 140,
          segments: [{ from: ['a', 0], to: ['b', 0], color: 'blue' }],
          points: [
            { x: 'a', y: 0, open: true, label: 'excluded', color: 'blue' },
            { x: 'b', y: 0, label: 'included', color: 'blue' },
          ],
          sliders: [
            { name: 'a', min: -5, max: 0, step: 0.5, value: -1, label: 'left endpoint $a$' },
            { name: 'b', min: 0.5, max: 5, step: 0.5, value: 4, label: 'right endpoint $b$' },
          ],
          caption: 'The set $a < x \\le b$, written $(a, b]$. The open dot at $a$ is a hole: numbers just above $a$ are in, $a$ itself is out.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Infinity always gets a parenthesis',
          text: '$\\infty$ is not a number you can reach, so it can never be "included". Write $[2, \\infty)$, never $[2, \\infty]$. Also list the smaller endpoint first: $(-1, 4]$, not $(4, -1]$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which interval describes $-2 < x \\le 5$?',
      options: [
        {
          text: '$[-2, 5)$',
          why: 'The brackets are swapped. $-2$ is excluded (strict $<$), so it needs a parenthesis; $5$ is included ($\\le$), so it needs a bracket.',
        },
        {
          text: '$(-2, 5]$',
          correct: true,
          why: 'Open at $-2$ because of the strict $<$, closed at $5$ because of $\\le$.',
        },
        {
          text: '$(-2, 5)$',
          why: 'This excludes $5$, but $x = 5$ satisfies $-2 < 5 \\le 5$.',
        },
        {
          text: '$[-2, 5]$',
          why: 'This includes $-2$, but $x = -2$ fails $-2 < x$.',
        },
      ],
      explanation: 'Translate endpoint by endpoint. Strict inequalities ($<$, $>$) exclude the endpoint: parenthesis. Non-strict ($\\le$, $\\ge$) include it: square bracket. So $-2 < x \\le 5$ is $(-2, 5]$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Solving: the one rule that changes',
      blocks: [
        {
          type: 'p',
          text: 'Inequalities are solved with the same moves as equations. Adding or subtracting the same quantity on both sides never changes an inequality, and neither does multiplying or dividing by a **positive** number. But multiplying or dividing by a **negative** number reverses its direction.',
        },
        {
          type: 'theorem',
          name: 'Properties of inequality',
          text: 'If $a < b$, then:\n\n• $a + c < b + c$ for any $c$;\n\n• $ac < bc$ if $c > 0$;\n\n• $ac > bc$ if $c < 0$ — **reverse the sign**.\n\nThe same holds for $\\le$, $>$ and $\\ge$.',
        },
        {
          type: 'graph',
          x: [-12, 12],
          y: [-1, 1],
          height: 150,
          points: [
            { x: '2k', y: 0, label: '2k', color: 'blue' },
            { x: '5k', y: 0, label: '5k', color: 'red' },
          ],
          sliders: [{ name: 'k', min: -2, max: 2, step: 0.25, value: 1, label: 'multiplier $k$' }],
          readouts: [
            { label: '$2k =$', expr: '2k', digits: 2 },
            { label: '$5k =$', expr: '5k', digits: 2 },
          ],
          caption: 'Start with $2 < 5$ and multiply both by $k$. For $k > 0$ the blue point stays left of the red one. Drag $k$ below $0$: the points swap sides, so $2k > 5k$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why negatives flip the order',
          text: 'Multiplying by $-1$ reflects every number across $0$ on the number line. A reflection reverses left and right, so whatever was further left ends up further right. Example: $2 < 5$, but $-2 > -5$ — owing \\$2 is better than owing \\$5. Any negative multiplier is $-1$ times a positive one, so it flips too.',
        },
        {
          type: 'derivation',
          title: 'Solve $3 - 2x \\ge 11$',
          steps: [
            { tex: '3 - 2x \\ge 11', why: 'Goal: isolate $x$, exactly as with an equation.' },
            { tex: '-2x \\ge 8', why: 'Subtract $3$ from both sides. Subtraction never flips the inequality.' },
            { tex: 'x \\le -4', why: 'Divide both sides by $-2$. Dividing by a **negative** reverses $\\ge$ to $\\le$.' },
            { tex: '(-\\infty, -4]', why: 'Closed bracket because $-4$ itself is included ($\\le$).' },
          ],
          result: 'Check with a test value: $x = -5$ gives $3 + 10 = 13 \\ge 11$ ✓, while $x = 0$ gives $3 \\ge 11$ ✗. The solution set is everything at or left of $-4$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dodge the flip entirely',
          text: 'You can always move the variable term to the side where its coefficient is positive: $3 - 2x \\ge 11 \\implies 3 - 11 \\ge 2x \\implies -4 \\ge x$. Read right to left, that is $x \\le -4$ — the same answer with no sign reversal to forget.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'If $-3x < 12$, then $x < -4$.',
      answer: false,
      explanation: 'Dividing both sides by $-3$ reverses the inequality: $x > -4$. Test it: $x = 0$ satisfies $-3(0) = 0 < 12$, but $0 < -4$ is false — so "$x < -4$" cannot describe the solution set. The correct solution set is $(-4, \\infty)$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Solve $-4x + 7 > 19$. What is the **largest integer** in the solution set?',
      hint: 'Solve first, then think about which integers satisfy it. Watch the direction when you divide by $-4$.',
      label: 'largest integer:',
      answer: '-4',
      explanation: 'Subtract $7$: $-4x > 12$. Divide by $-4$ and flip: $x < -3$. The solution set is $(-\\infty, -3)$, which excludes $-3$ itself, so the largest integer in it is $-4$. Check: $-4(-4) + 7 = 23 > 19$ ✓, while $x = -3$ gives exactly $19$, which is not $> 19$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Multi-step inequalities and special cases',
      blocks: [
        {
          type: 'p',
          text: 'Everything from solving linear equations carries over: distribute, combine like terms, and clear fractions by multiplying by the LCD. Because the LCD is **positive**, clearing fractions never flips the inequality.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\dfrac{x}{2} - 1 < \\dfrac{2x + 1}{3}$',
          steps: [
            { tex: '6 \\cdot \\frac{x}{2} - 6 \\cdot 1 < 6 \\cdot \\frac{2x + 1}{3}', why: 'Multiply every term by the LCD $6$. Positive multiplier, so $<$ stays $<$.' },
            { tex: '3x - 6 < 2(2x + 1)', why: '$\\frac{6}{2} = 3$ and $\\frac{6}{3} = 2$; keep the numerator $2x + 1$ grouped.' },
            { tex: '3x - 6 < 4x + 2', why: 'Distribute.' },
            { tex: '-x < 8', why: 'Subtract $4x$ and add $6$ on both sides.' },
            { tex: 'x > -8', why: 'Multiply both sides by $-1$ and **reverse** the inequality.' },
          ],
          result: 'Solution set $(-8, \\infty)$. Check $x = 0$: $-1 < \\frac{1}{3}$ ✓.',
        },
        {
          type: 'graph',
          x: [-14, 4],
          y: [-9, 3],
          functions: [
            { expr: 'x/2 - 1', label: '$y = \\frac{x}{2} - 1$', color: 'blue' },
            { expr: '(2x + 1)/3', label: '$y = \\frac{2x + 1}{3}$', color: 'red' },
          ],
          points: [{ x: -8, y: -5, label: '(−8, −5)', open: true }],
          vlines: [{ x: -8, label: 'x = −8', color: 'gray' }],
          caption: 'The inequality asks where the blue line is **below** the red line. That happens exactly to the right of their crossing at $x = -8$.',
        },
        {
          type: 'p',
          text: 'As with equations, the variable can cancel, leaving a statement that is always true or never true:',
        },
        {
          type: 'list',
          items: [
            '$2(x + 1) > 2x \\implies 2 > 0$, always true: the solution set is $(-\\infty, \\infty)$.',
            '$2x + 1 < 2x - 3 \\implies 1 < -3$, never true: there is no solution, $\\varnothing$.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student solves $4x - 5 \\ge 6x + 7$. Tap the first line that is wrong.',
      lines: [
        '$4x - 5 \\ge 6x + 7$',
        '$-2x - 5 \\ge 7$',
        '$-2x \\ge 12$',
        '$x \\ge -6$',
        'Solution set: $[-6, \\infty)$',
      ],
      errorLines: [4],
      explanation: 'Line 4 divides by $-2$ without reversing the inequality. Correctly, $-2x \\ge 12$ gives $x \\le -6$, so the solution set is $(-\\infty, -6]$. A test value exposes the error: $x = 0$ is in the student\'s answer, but $4(0) - 5 = -5 \\ge 7$ is false.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Solve $5(x - 2) \\ge 2x + 4$. What is the **smallest integer** that satisfies it?',
      hint: 'Distribute, collect $x$-terms, then decide which integers are at or above the boundary.',
      label: 'smallest integer:',
      answer: '5',
      explanation: 'Distribute: $5x - 10 \\ge 2x + 4$. Subtract $2x$ and add $10$: $3x \\ge 14$, so $x \\ge \\frac{14}{3} \\approx 4.67$. The integer $4$ is too small; the smallest integer at or above $4.67$ is $5$. Check: $5(3) = 15 \\ge 14$ ✓, and $x = 4$ gives $10 \\ge 12$ ✗.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Compound inequalities: "and" versus "or"',
      blocks: [
        {
          type: 'p',
          text: 'A [[compound-inequality]] joins two inequalities with a logical connective, and the connective decides how the two solution sets combine.',
        },
        {
          type: 'table',
          headers: ['Connective', 'Meaning', 'Set operation', 'Example'],
          rows: [
            ['**and**', 'both must be true', 'intersection $\\cap$ (overlap)', '$x \\ge -2$ and $x < 3$: $[-2, 3)$'],
            ['**or**', 'at least one is true', 'union $\\cup$ (combine)', '$x < -1$ or $x \\ge 4$: $(-\\infty, -1) \\cup [4, \\infty)$'],
          ],
        },
        {
          type: 'p',
          text: 'An "and" inequality whose solution is a single interval is usually written as a **three-part inequality**: $-2 \\le x < 3$. To solve one, do the same operation to **all three parts** at once, so the variable ends up alone in the middle.',
        },
        {
          type: 'derivation',
          title: 'Solve $-1 < 5 - 2x \\le 9$',
          steps: [
            { tex: '-1 < 5 - 2x \\le 9', why: 'Goal: get $x$ alone in the middle.' },
            { tex: '-6 < -2x \\le 4', why: 'Subtract $5$ from all three parts.' },
            { tex: '3 > x \\ge -2', why: 'Divide all three parts by $-2$; **both** inequality signs reverse.' },
            { tex: '-2 \\le x < 3', why: 'Rewrite with the smaller number on the left (read it backwards). Same statement.' },
            { tex: '[-2, 3)', why: 'Included at $-2$ ($\\le$), excluded at $3$ ($<$).' },
          ],
          result: 'Check: $x = 0$ gives $-1 < 5 \\le 9$ ✓; $x = 3$ gives $5 - 6 = -1$, and $-1 < -1$ is false ✓ (excluded).',
        },
        {
          type: 'graph',
          x: [-5, 6],
          y: [-6, 12],
          functions: [{ expr: '5 - 2x', label: '$y = 5 - 2x$', color: 'blue' }],
          hlines: [
            { y: -1, label: 'y = −1', color: 'red' },
            { y: 9, label: 'y = 9', color: 'red' },
          ],
          areas: [{ expr: '9', expr2: '-1', from: -2, to: 3, color: 'green' }],
          vlines: [{ x: -2, color: 'gray' }, { x: 3, color: 'gray' }],
          caption: 'The three-part inequality asks where the line stays inside the horizontal band between $-1$ and $9$: for $x$ from $-2$ up to (but not including) $3$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"Or" cannot be squeezed into three parts',
          text: '"$x < -1$ or $x \\ge 4$" is **not** $4 \\le x < -1$ — that would say $x$ is at least $4$ and less than $-1$ at the same time, which no number can do. Keep "or" sets as two pieces joined by $\\cup$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'Which describes the solution set of "$x < -1$ or $x \\ge 4$"?',
      options: [
        {
          text: '$(-1, 4]$',
          why: 'That is the gap *between* the pieces — exactly the numbers that satisfy neither inequality.',
        },
        {
          text: '$(-\\infty, -1) \\cup [4, \\infty)$',
          correct: true,
          why: '"Or" means union: everything left of $-1$ together with everything from $4$ onward, with $4$ included.',
        },
        {
          text: '$\\varnothing$',
          why: 'That would be the answer for "$x < -1$ **and** $x \\ge 4$", since no number is in both. With "or", a number only needs to satisfy one.',
        },
        {
          text: '$(-\\infty, -1] \\cup (4, \\infty)$',
          why: 'The endpoint brackets are swapped: $-1$ is excluded (strict $<$) and $4$ is included ($\\ge$).',
        },
      ],
      explanation: 'With "or", combine the two rays: $(-\\infty, -1)$ from the first inequality and $[4, \\infty)$ from the second. The union symbol $\\cup$ joins them. Notice the choice of "and" versus "or" changed the answer from empty to infinite.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Solve the three-part inequality $-3 \\le 2x + 1 < 7$.',
      template: 'Subtract $1$ from all three parts: ___ . Divide all three parts by $2$: ___ . In interval notation: ___ .',
      blanks: [{ answers: ['$-4 \\le 2x < 6$'] }, { answers: ['$-2 \\le x < 3$'] }, { answers: ['$[-2, 3)$'] }],
      wordBank: ['$-4 \\le 2x < 6$', '$-2 \\le 2x < 8$', '$-2 \\le x < 3$', '$-2 \\ge x > 3$', '$[-2, 3)$', '$(-2, 3]$'],
      explanation: 'Subtracting $1$ from every part gives $-4 \\le 2x < 6$ (adding $1$ instead gives the distractor). Dividing by the **positive** number $2$ keeps both signs: $-2 \\le x < 3$. The left end is included ($\\le$), the right end excluded ($<$), so the interval is $[-2, 3)$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Inequalities in the wild',
      blocks: [
        {
          type: 'p',
          text: 'Inequalities model requirements: "at least" means $\\ge$, "at most" or "no more than" means $\\le$, "more than" means $>$, "fewer than" means $<$. The setup is the same as for word problems with equations — only the relation symbol changes.',
        },
        {
          type: 'derivation',
          title: 'Your test scores are $78$, $85$ and $90$. What must you score on the fourth test to average at least $85$?',
          steps: [
            { tex: '\\frac{78 + 85 + 90 + x}{4} \\ge 85', why: 'Let $x$ = fourth score. "At least" translates to $\\ge$.' },
            { tex: '253 + x \\ge 340', why: 'Multiply both sides by $4$ (positive, no flip) and add the known scores: $78 + 85 + 90 = 253$.' },
            { tex: 'x \\ge 87', why: 'Subtract $253$ from both sides.' },
          ],
          result: 'You need $87$ or higher. Check: $\\frac{253 + 87}{4} = 85$ exactly. ✓',
        },
        {
          type: 'p',
          text: 'Context can also restrict the answer to whole numbers. With \\$60 to spend on items costing \\$7.50 each plus a one-time \\$9 shipping fee, $7.5n + 9 \\le 60$ gives $n \\le 6.8$, so you can buy at most $6$ items — rounding **down** this time, since $7$ items would exceed the budget.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Half-open intervals are everywhere in code',
          text: 'The loop `for (int i = 0; i < n; ++i)` visits exactly the integers in $[0, n)$: closed on the left, open on the right. C++ iterator ranges `[begin, end)` and Python\'s `range(0, n)` use the same convention, because half-open intervals have length $n - 0 = n$ and split cleanly: $[0, 5) \\cup [5, 10) = [0, 10)$ with no overlap.',
        },
        {
          type: 'code',
          title: 'range_check.cpp',
          code: `bool inTile(double x, double lo, double hi) {
    // return lo <= x < hi;      // compiles, but is WRONG
    return lo <= x && x < hi;    // x in [lo, hi)
}`,
          annotations: [
            { lines: 2, text: 'C++ evaluates `lo <= x` first, producing `true`/`false` (1 or 0), then compares *that* with `hi`. For most tiles this is always true. g++ even warns that such comparisons "do not have their mathematical meaning".' },
            { lines: 3, text: 'A three-part inequality is an "and" of two inequalities — write it that way in code.' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'On exams, give the solution set in the form requested (interval notation is the most common) and make sure every endpoint bracket matches the inequality. A correct inequality with the wrong bracket usually loses points.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'Your quiz scores are $72$, $88$, $91$ and $79$. What is the **minimum** score on the fifth quiz that gives an average of at least $82$?',
      hint: 'Set up $\\frac{\\text{sum of five scores}}{5} \\ge 82$ and multiply by $5$.',
      label: 'minimum score:',
      answer: '80',
      explanation: 'Let $x$ be the fifth score. $\\frac{72 + 88 + 91 + 79 + x}{5} \\ge 82$. The known scores sum to $330$, so multiplying by $5$ gives $330 + x \\ge 410$, hence $x \\ge 80$. Check: $\\frac{330 + 80}{5} = 82$. ✓',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'order',
      prompt: 'Put the lines of this solution of $2(x - 4) > 5x + 1$ in order.',
      lines: ['$2(x - 4) > 5x + 1$', '$2x - 8 > 5x + 1$', '$-3x - 8 > 1$', '$-3x > 9$', '$x < -3$', '$(-\\infty, -3)$'],
      distractors: ['$x > -3$', '$(-\\infty, -3]$'],
      explanation: 'Distribute, subtract $5x$, add $8$, then divide by $-3$ — which reverses $>$ into $<$ (the distractor $x > -3$ forgot this). The boundary $-3$ is excluded because the inequality is strict, so the interval uses a parenthesis: $(-\\infty, -3)$. Test: $x = -4$ gives $-16 > -19$ ✓.',
    },
  ],
  takeaways: [
    'A linear inequality usually has infinitely many solutions, described by a number-line graph, set-builder notation or interval notation.',
    'Parentheses (open dots) exclude an endpoint, square brackets (closed dots) include it, and $\\pm\\infty$ always gets a parenthesis.',
    'Solve inequalities like equations, but **reverse the inequality** whenever you multiply or divide both sides by a negative number.',
    '"And" means intersection (often a three-part inequality, solved by operating on all three parts); "or" means union of separate pieces.',
    'Check a solution set with a test value inside it and one outside it.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.7 Linear Inequalities and Absolute Value Inequalities',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-7-linear-inequalities-and-absolute-value-inequalities',
      source: 'openstax',
      note: 'Covers interval notation, compound inequalities and the next lesson\'s absolute value inequalities in one section.',
    },
    {
      title: "Paul's Online Notes — Linear Inequalities",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/LinearIneqns.aspx',
      source: 'paul',
      note: 'Clear examples of double inequalities and the sign-flip rule, with interval notation throughout.',
    },
    {
      title: 'Wikipedia — Interval (mathematics)',
      url: 'https://en.wikipedia.org/wiki/Interval_(mathematics)',
      source: 'wikipedia',
      note: 'Notation variants (including the European ]a, b[ style) and the half-open interval conventions used in computing.',
    },
  ],
};
