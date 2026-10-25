import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-absolute-value',
  title: 'Absolute Value Equations and Inequalities',
  summary: 'Read $|x - c|$ as a distance, and equations and inequalities with absolute values become two-case problems you can solve by sight.',
  minutes: 18,
  objectives: [
    'Interpret $|a - b|$ as the distance between $a$ and $b$ on the number line',
    'Solve $|A| = k$ by splitting into two linear equations, after isolating the absolute value',
    'Solve $|A| < k$ as a three-part inequality and $|A| > k$ as an "or" compound inequality',
    'Handle special cases (negative or zero right-hand side) and write tolerances as absolute value inequalities',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Absolute value is distance',
      blocks: [
        {
          type: 'p',
          text: 'The [[absolute-value]] $|x|$ is the distance from $x$ to $0$ on the number line. Distances are never negative, so $|5| = 5$ and $|-5| = 5$: both numbers are five units from zero, just in opposite directions.',
        },
        {
          type: 'definition',
          term: 'Absolute value',
          text: '$$|x| = \\begin{cases} x & \\text{if } x \\ge 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$\n\nMore generally, $|a - b|$ is the **distance between $a$ and $b$** on the number line.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "$-x$" in the definition is positive',
          text: 'The second line applies only when $x$ is negative, and the negative of a negative number is positive: if $x = -3$, then $-x = -(-3) = 3$. So "$|x| = -x$ for $x < 0$" does not produce a negative answer — it is exactly the instruction "drop the minus sign", written in a way that also works when $x$ is a letter.',
        },
        {
          type: 'p',
          text: 'The distance reading is the key to this whole lesson. $|x - 3|$ is "how far $x$ is from $3$". The distance between $-2$ and $5$ is $|5 - (-2)| = 7$, and you can see it by counting steps on the number line. Order does not matter: $|-2 - 5| = |-7| = 7$ too.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-1, 7],
          functions: [{ expr: 'abs(x - c)', label: '$y = |x - c|$', color: 'blue' }],
          points: [{ x: 'c', y: 0, label: 'center c' }],
          sliders: [{ name: 'c', min: -4, max: 4, step: 0.5, value: 1, label: 'center $c$' }],
          caption: 'The graph of "distance from $c$" is a V with its tip at $x = c$, where the distance is $0$. Every height $k > 0$ is reached at exactly two points, $c - k$ and $c + k$ — remember this picture.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Absolute value does not distribute over addition',
          text: '$|a \\cdot b| = |a| \\cdot |b|$ is always true, but $|a + b| = |a| + |b|$ is **not**: $|3 + (-5)| = 2$ while $|3| + |-5| = 8$. In general $|a + b| \\le |a| + |b|$, the *triangle inequality*. So never "split" $|x - 2|$ into $|x| - 2$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'What is the distance between $-7$ and $4$ on the number line?',
      hint: 'Compute $|-7 - 4|$ (or $|4 - (-7)|$).',
      answer: '11',
      explanation: 'Distance is the absolute value of the difference: $|4 - (-7)| = |11| = 11$. Counting on the number line: $7$ steps from $-7$ to $0$, then $4$ more to reach $4$. A common slip is $|-7| - |4| = 3$, which measures nothing useful.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'truefalse',
      prompt: 'For all real numbers $a$ and $b$, $|a + b| = |a| + |b|$.',
      answer: false,
      explanation: 'It fails whenever $a$ and $b$ have opposite signs: $a = 3$, $b = -5$ gives $|-2| = 2$ on the left and $3 + 5 = 8$ on the right. Equality holds only when $a$ and $b$ have the same sign (or one is $0$). The general truth is the triangle inequality $|a + b| \\le |a| + |b|$.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Solving $|A| = k$: two cases',
      blocks: [
        {
          type: 'p',
          text: 'Think distance: $|x| = 4$ asks for the numbers four units from zero. There are two, $x = 4$ and $x = -4$. The same reasoning works when the inside is any expression $A$: if $|A| = 4$, then $A$ itself is either $4$ or $-4$.',
        },
        {
          type: 'theorem',
          name: 'Absolute value equations',
          text: 'For an expression $A$ and a number $k$:\n\n• if $k > 0$: $|A| = k \\iff A = k \\text{ or } A = -k$ (two cases);\n\n• if $k = 0$: $|A| = 0 \\iff A = 0$ (one case);\n\n• if $k < 0$: no solution, since a distance cannot be negative.',
        },
        {
          type: 'derivation',
          title: 'Solve $|2x - 3| = 7$',
          steps: [
            { tex: '|2x - 3| = 7', why: 'The absolute value is already alone on one side, and $7 > 0$: expect two solutions.' },
            { tex: '2x - 3 = 7 \\quad \\text{or} \\quad 2x - 3 = -7', why: 'The inside is either $7$ or $-7$ — both have absolute value $7$.' },
            { tex: '2x = 10 \\quad \\text{or} \\quad 2x = -4', why: 'Add $3$ to both sides of each equation.' },
            { tex: 'x = 5 \\quad \\text{or} \\quad x = -2', why: 'Divide each by $2$.' },
            { tex: '\\text{Check: } |10 - 3| = 7, \\; |-4 - 3| = 7 \\;\\checkmark', why: 'Both values make the original equation true.' },
          ],
          result: 'Solution set $\\{-2, 5\\}$. Notice the two solutions sit symmetrically around $\\frac{3}{2}$, the point where the inside is zero.',
        },
        {
          type: 'graph',
          x: [-5, 7],
          y: [-3, 10],
          functions: [
            { expr: 'abs(2x - 3)', label: '$y = |2x - 3|$', color: 'blue' },
            { expr: 'k', label: '$y = k$', color: 'red', dashed: true },
          ],
          sliders: [{ name: 'k', min: -2, max: 9, step: 0.5, value: 7, label: 'right side $k$' }],
          readouts: [
            { label: 'left solution $\\frac{3 - k}{2} =$', expr: '(3 - k)/2', digits: 2 },
            { label: 'right solution $\\frac{3 + k}{2} =$', expr: '(3 + k)/2', digits: 2 },
          ],
          caption: 'For $k > 0$ the line meets the V twice; at $k = 0$ only at the tip; for $k < 0$ never (the readouts then describe no real intersection).',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Solve $|3x + 1| = 8$. Enter both solutions, separated by a comma.',
      hint: 'Set $3x + 1 = 8$ and $3x + 1 = -8$ and solve each.',
      label: '$x =$',
      answer: ['7/3', '-3'],
      answerTex: '\\frac{7}{3}, \\; -3',
      explanation: 'Case 1: $3x + 1 = 8$ gives $3x = 7$, $x = \\frac{7}{3}$. Case 2: $3x + 1 = -8$ gives $3x = -9$, $x = -3$. Check: $|7 + 1| = 8$ ✓ and $|-9 + 1| = 8$ ✓.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Solve $|x + 4| + 6 = 2$.',
      hint: 'Isolate the absolute value first. What sign does the right side have?',
      options: [
        {
          text: '$x = 0$ or $x = -8$',
          why: 'This solves $|x + 4| = 4$, dropping the sign of the right side. After subtracting $6$ you get $|x + 4| = -4$.',
        },
        {
          text: '$x = -8$ or $x = -12$',
          why: 'This splits into cases *before* isolating the absolute value ($x + 4 + 6 = \\pm 2$). Check $x = -8$: $|-4| + 6 = 10 \\ne 2$.',
        },
        {
          text: 'No solution',
          correct: true,
          why: 'Isolating gives $|x + 4| = -4$. A distance can never be negative.',
        },
        {
          text: '$x = -4$',
          why: 'At $x = -4$ the left side is $|0| + 6 = 6$, not $2$.',
        },
      ],
      explanation: 'Subtract $6$: $|x + 4| = -4$. An absolute value is always $\\ge 0$, so it can never equal $-4$, and the solution set is $\\varnothing$. Even without algebra: $|x + 4| + 6$ is always at least $6$, so it can never be $2$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Isolate first, and the case $|A| = |B|$',
      blocks: [
        {
          type: 'p',
          text: 'The two-case rule applies only to an equation of the form $|A| = k$, with the absolute value **alone** on one side. If anything else is attached — a coefficient, a constant added outside — undo it first, exactly as you would isolate $x$.',
        },
        {
          type: 'derivation',
          title: 'Solve $3|x + 1| - 4 = 11$',
          steps: [
            { tex: '3|x + 1| = 15', why: 'Add $4$ to both sides. Treat $|x + 1|$ as a single unknown block for now.' },
            { tex: '|x + 1| = 5', why: 'Divide both sides by $3$. Now the absolute value is isolated, and $5 > 0$.' },
            { tex: 'x + 1 = 5 \\quad \\text{or} \\quad x + 1 = -5', why: 'Split into the two cases.' },
            { tex: 'x = 4 \\quad \\text{or} \\quad x = -6', why: 'Subtract $1$ in each case.' },
            { tex: '\\text{Check: } 3|5| - 4 = 11, \\; 3|-5| - 4 = 11 \\;\\checkmark', why: 'Both solutions satisfy the original equation.' },
          ],
          result: 'Solution set $\\{-6, 4\\}$.',
        },
        {
          type: 'p',
          text: 'When there are absolute values on **both** sides, $|A| = |B|$ means $A$ and $B$ are the same distance from $0$. So they are either equal or opposites:',
        },
        {
          type: 'math',
          tex: '|A| = |B| \\iff A = B \\;\\text{ or }\\; A = -B',
        },
        {
          type: 'derivation',
          title: 'Solve $|x - 2| = |2x + 1|$',
          steps: [
            { tex: 'x - 2 = 2x + 1 \\quad \\text{or} \\quad x - 2 = -(2x + 1)', why: 'The insides are equal or opposite. Keep the parentheses in the second case — the minus sign applies to the whole expression.' },
            { tex: '-3 = x \\quad \\text{or} \\quad x - 2 = -2x - 1', why: 'Case 1: subtract $x$ and $1$ from both sides. Case 2: distribute the minus sign.' },
            { tex: 'x = -3 \\quad \\text{or} \\quad 3x = 1', why: 'Case 2: add $2x$ and $2$ to both sides.' },
            { tex: 'x = -3 \\quad \\text{or} \\quad x = \\tfrac{1}{3}', why: 'Divide by $3$.' },
            { tex: '\\text{Check: } |-5| = |-5|, \\; \\left|-\\tfrac{5}{3}\\right| = \\left|\\tfrac{5}{3}\\right| \\;\\checkmark', why: 'Substitute both values into the original equation.' },
          ],
          result: 'Solution set $\\left\\{-3, \\tfrac{1}{3}\\right\\}$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong: split first',
            tone: 'bad',
            tex: ['3|x + 1| - 4 = 11', '3(x + 1) - 4 = -11'],
            text: 'The $-4$ and the $3$ are outside the absolute value; negating the right side does not account for them.',
          },
          right: {
            title: 'Right: isolate, then split',
            tone: 'good',
            tex: ['|x + 1| = 5', 'x + 1 = -5'],
            text: 'Only the expression *inside* the bars can be $\\pm$ the right side.',
          },
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'error',
      prompt: 'A student solves $|x - 2| + 4 = 10$. Tap the first line that is wrong.',
      lines: [
        '$|x - 2| + 4 = 10$',
        '$x - 2 + 4 = 10$ or $x - 2 + 4 = -10$',
        '$x + 2 = 10$ or $x + 2 = -10$',
        '$x = 8$ or $x = -12$',
      ],
      errorLines: [2],
      explanation: 'Line 2 splits into cases before isolating the absolute value, so the $+4$ (which is outside the bars) gets swept into the negative case. First subtract $4$: $|x - 2| = 6$. Then $x - 2 = 6$ or $x - 2 = -6$, so $x = 8$ or $x = -4$. Checking catches the bad value: $|-12 - 2| + 4 = 18 \\ne 10$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: 'Put the lines of this solution of $2|x - 5| + 3 = 11$ in order.',
      lines: [
        '$2|x - 5| + 3 = 11$',
        '$2|x - 5| = 8$',
        '$|x - 5| = 4$',
        '$x - 5 = 4$ or $x - 5 = -4$',
        '$x = 9$ or $x = 1$',
      ],
      distractors: ['$|2x - 5| = 8$', '$x - 5 = 4$ only'],
      explanation: 'Undo the outside operations in reverse order — subtract $3$, then divide by $2$ — so the absolute value is alone. Only then split into two cases (dropping the negative case loses $x = 1$). Check: $2|4| + 3 = 11$ ✓ and $2|-4| + 3 = 11$ ✓.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Inequalities: within versus beyond',
      blocks: [
        {
          type: 'p',
          text: 'Distance makes absolute value inequalities easy to picture. $|x| < 3$ means "less than $3$ units from $0$": the numbers **between** $-3$ and $3$. $|x| > 3$ means "more than $3$ units from $0$": the numbers **beyond** $-3$ or beyond $3$, in either direction.',
        },
        {
          type: 'theorem',
          name: 'Absolute value inequalities (for $k > 0$)',
          text: '• $|A| < k \\iff -k < A < k$ — an "and" (three-part) inequality, one interval.\n\n• $|A| > k \\iff A < -k \\text{ or } A > k$ — an "or" inequality, two rays.\n\nThe same holds with $\\le$ and $\\ge$, with endpoints included.',
        },
        {
          type: 'derivation',
          title: 'Solve $|2x - 1| \\le 5$',
          steps: [
            { tex: '-5 \\le 2x - 1 \\le 5', why: '"Distance at most $5$" means the inside is trapped between $-5$ and $5$.' },
            { tex: '-4 \\le 2x \\le 6', why: 'Add $1$ to all three parts.' },
            { tex: '-2 \\le x \\le 3', why: 'Divide all three parts by $2$ (positive, so no flip).' },
          ],
          result: 'Solution set $[-2, 3]$. Check the endpoints: $|2(3) - 1| = 5 \\le 5$ ✓ and $|2(-2) - 1| = 5$ ✓.',
        },
        {
          type: 'derivation',
          title: 'Solve $|x + 3| > 2$',
          steps: [
            { tex: 'x + 3 < -2 \\quad \\text{or} \\quad x + 3 > 2', why: '"Distance more than $2$" means the inside is below $-2$ or above $2$.' },
            { tex: 'x < -5 \\quad \\text{or} \\quad x > -1', why: 'Subtract $3$ in each inequality.' },
          ],
          result: 'Solution set $(-\\infty, -5) \\cup (-1, \\infty)$: every number more than $2$ units away from $-3$.',
        },
        {
          type: 'graph',
          x: [-6, 6],
          y: [-1, 6],
          functions: [
            { expr: 'abs(x - c)', label: '$y = |x - c|$', color: 'blue' },
            { expr: 'k', label: '$y = k$', color: 'red', dashed: true },
          ],
          areas: [{ expr: 'k', expr2: 'abs(x - c)', from: 'c - k', to: 'c + k', color: 'green' }],
          vlines: [{ x: 'c - k', color: 'gray' }, { x: 'c + k', color: 'gray' }],
          sliders: [
            { name: 'c', min: -3, max: 3, step: 0.5, value: 0, label: 'center $c$' },
            { name: 'k', min: 0.5, max: 4, step: 0.5, value: 2, label: 'distance $k$' },
          ],
          readouts: [
            { label: '$|x - c| < k$ for $x$ from', expr: 'c - k', digits: 2 },
            { label: 'to', expr: 'c + k', digits: 2 },
          ],
          caption: 'The V dips below the red line exactly on the green strip $(c - k, c + k)$: that is $|x - c| < k$. Outside the strip, the V is above the line: that is $|x - c| > k$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "less than" gives "and" and "greater than" gives "or"',
          text: 'Being *close* to the center means being close on both sides at once: above $c - k$ **and** below $c + k$ — one interval. Being *far* can happen in either of two directions: far to the left **or** far to the right — two separate pieces. Writing $|A| > k$ as $-k > A > k$ is a classic error: no number is both below $-k$ and above $k$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Which is the solution set of $|x - 4| < 3$?',
      options: [
        {
          text: '$(1, 7)$',
          correct: true,
          why: 'Numbers less than $3$ units from $4$: from $4 - 3 = 1$ to $4 + 3 = 7$, endpoints excluded.',
        },
        {
          text: '$(-\\infty, 1) \\cup (7, \\infty)$',
          why: 'That is the solution of $|x - 4| > 3$ — the numbers *far* from $4$.',
        },
        {
          text: '$(-7, -1)$',
          why: 'This centers the interval at $-4$, which would be $|x + 4| < 3$. The center of $|x - c|$ is $+c$.',
        },
        {
          text: '$[1, 7]$',
          why: 'The inequality is strict, so the endpoints (exactly $3$ units away) are excluded.',
        },
      ],
      explanation: 'Rewrite as $-3 < x - 4 < 3$ and add $4$ to all three parts: $1 < x < 7$, i.e. $(1, 7)$. In words: $x$ is within $3$ units of $4$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'Solve $|2x + 1| \\ge 5$.',
      template: 'Rewrite as $2x + 1 \\le -5$ ___ $2x + 1 \\ge 5$. Solving each piece gives ___ . In interval notation: ___ .',
      blanks: [{ answers: ['or'] }, { answers: ['$x \\le -3$ or $x \\ge 2$'] }, { answers: ['$(-\\infty, -3] \\cup [2, \\infty)$'] }],
      wordBank: ['or', 'and', '$x \\le -3$ or $x \\ge 2$', '$-3 \\le x \\le 2$', '$(-\\infty, -3] \\cup [2, \\infty)$', '$[-3, 2]$'],
      explanation: '"At least $5$ away from $0$" happens in two directions, so it is an **or**: $2x + 1 \\le -5$ gives $x \\le -3$, and $2x + 1 \\ge 5$ gives $x \\ge 2$. The union is $(-\\infty, -3] \\cup [2, \\infty)$, brackets because of $\\ge$. The interval $[-3, 2]$ is the solution of the opposite inequality, $|2x + 1| \\le 5$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Special cases and tolerances',
      blocks: [
        {
          type: 'p',
          text: 'When the right-hand side is negative or zero, don\'t split into cases — reason about distance directly. Since $|A| \\ge 0$ always:',
        },
        {
          type: 'table',
          headers: ['Statement', 'Reasoning', 'Solution set'],
          rows: [
            ['$|A| < -2$', 'a distance is never below a negative number', '$\\varnothing$'],
            ['$|A| > -2$', 'every distance exceeds a negative number', 'all reals (where $A$ is defined)'],
            ['$|A| \\le 0$', 'distance can be $0$ but not less', 'solve $A = 0$'],
            ['$|A| > 0$', 'every distance except $0$', 'all reals except where $A = 0$'],
          ],
        },
        {
          type: 'p',
          text: 'Absolute value inequalities are the natural language of [[tolerance-interval|tolerances]]. "The part must be $25$ cm, give or take $0.4$ cm" is $|L - 25| \\le 0.4$: the center is the target and the right side is the allowed error.',
        },
        {
          type: 'derivation',
          title: 'Write "between $24.6$ and $25.4$ inclusive" as an absolute value inequality',
          steps: [
            { tex: 'c = \\frac{24.6 + 25.4}{2} = 25', why: 'The center is the midpoint of the interval.' },
            { tex: 'k = \\frac{25.4 - 24.6}{2} = 0.4', why: 'The allowed distance is half the width of the interval.' },
            { tex: '|L - 25| \\le 0.4', why: 'Distance from the center at most $k$. Check: unfolding gives $24.6 \\le L \\le 25.4$. ✓' },
          ],
          result: 'Any closed interval $[a, b]$ is $\\left|x - \\frac{a + b}{2}\\right| \\le \\frac{b - a}{2}$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Never compare floats with ==',
          text: 'Floating-point arithmetic rounds, so two computations that "should" be equal often differ in the last digit. Programmers test $|a - b| < \\varepsilon$ for a small tolerance $\\varepsilon$ instead — an absolute value inequality. Games use the same shape for "is the player within $r$ units of the checkpoint?": `std::fabs(x - cx) <= r`.',
        },
        {
          type: 'code',
          title: 'close_enough.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>

int main() {
    double a = 0.1 + 0.2;
    double b = 0.3;
    std::printf("a == b: %s\\n", a == b ? "true" : "false");
    std::printf("|a - b| < 1e-9: %s\\n", std::fabs(a - b) < 1e-9 ? "true" : "false");
}`,
          output: `a == b: false
|a - b| < 1e-9: true`,
          annotations: [
            { lines: 5, text: 'In binary, $0.1$ and $0.2$ are rounded, so their sum is $0.30000000000000004$.' },
            { lines: 7, text: 'Exact equality fails by about $5.5 \\times 10^{-17}$.' },
            { lines: 8, text: 'The tolerance test $|a - b| < \\varepsilon$ treats them as equal, which is what we meant.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'How many **integers** satisfy $|x - 3| \\le 4$?',
      hint: 'Unfold to a three-part inequality and list the integers in the interval.',
      answer: '9',
      explanation: '$|x - 3| \\le 4$ means $-4 \\le x - 3 \\le 4$, so $-1 \\le x \\le 7$. Both endpoints are included, so the integers are $-1, 0, 1, \\dots, 7$: that is $7 - (-1) + 1 = 9$ integers. (Forgetting to count both endpoints gives the off-by-one answer $8$ — a familiar bug to every programmer.)',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A thermostat keeps the temperature $T$ between $66$°F and $74$°F inclusive. Written as $|T - c| \\le k$, what is $k$?',
      hint: 'The center $c$ is the midpoint; $k$ is half the width.',
      label: '$k =$',
      answer: '4',
      explanation: 'The center is $c = \\frac{66 + 74}{2} = 70$ and the half-width is $k = \\frac{74 - 66}{2} = 4$. So the condition is $|T - 70| \\le 4$: "within $4$ degrees of $70$". Unfolding: $66 \\le T \\le 74$. ✓',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'The inequality $|2x - 7| \\ge -3$ has no solution.',
      answer: false,
      explanation: 'An absolute value is always $\\ge 0$, and every number that is $\\ge 0$ is also $\\ge -3$. So the inequality is true for **every** real $x$: the solution set is $(-\\infty, \\infty)$. It is $|2x - 7| \\le -3$ (or $< -3$) that has no solution.',
    },
  ],
  takeaways: [
    '$|a - b|$ is the distance between $a$ and $b$; absolute values are never negative.',
    'Isolate the absolute value first. Then $|A| = k$ (with $k > 0$) splits into $A = k$ or $A = -k$; $|A| = |B|$ splits into $A = B$ or $A = -B$.',
    '$|A| < k$ means $-k < A < k$ (within: one interval); $|A| > k$ means $A < -k$ or $A > k$ (beyond: two rays).',
    'A negative right-hand side means no solution for $|A| = k$ or $|A| < k$, and all real numbers for $|A| > k$.',
    'A tolerance "within $k$ of $c$" is $|x - c| \\le k$, and any interval $[a, b]$ can be written this way with $c$ the midpoint and $k$ the half-width.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.6 Other Types of Equations',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-6-other-types-of-equations',
      source: 'openstax',
      note: 'Includes the textbook treatment of absolute value equations, with more practice problems.',
    },
    {
      title: 'OpenStax College Algebra 2e — 2.7 Linear Inequalities and Absolute Value Inequalities',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-7-linear-inequalities-and-absolute-value-inequalities',
      source: 'openstax',
      note: 'Absolute value inequalities solved both algebraically and graphically.',
    },
    {
      title: "Paul's Online Notes — Absolute Value Equations",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/SolveAbsValueEqns.aspx',
      source: 'paul',
      note: 'Careful examples, including the $|A| = |B|$ case and why checking matters.',
    },
    {
      title: "Paul's Online Notes — Absolute Value Inequalities",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/SolveAbsValueIneq.aspx',
      source: 'paul',
      note: 'The "within" and "beyond" cases with number-line pictures.',
    },
  ],
};
