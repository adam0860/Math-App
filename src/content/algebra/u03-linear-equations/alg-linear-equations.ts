import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-linear-equations',
  title: 'Solving Linear Equations',
  summary: 'Keep the balance: undo operations step by step, clear fractions, and recognise equations with one, none or infinitely many solutions.',
  minutes: 17,
  objectives: [
    'Explain what a solution of an equation is and check a proposed solution by substitution',
    'Use the addition and multiplication properties of equality to produce equivalent equations',
    'Solve linear equations that involve parentheses, like terms, fractions and decimals',
    'Recognise identities (every real number is a solution) and contradictions (no solution)',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What "solve" really means',
      blocks: [
        {
          type: 'p',
          text: 'An [[equation]] is a claim that two expressions are equal, like $2x + 3 = 11$. With a [[variable]] in it, the claim is true for some values and false for others. A [[solution]] is a value that makes the claim **true**. To *solve* the equation means to find every solution — not just one that happens to work.',
        },
        {
          type: 'p',
          text: 'Checking a candidate is always easy: substitute it and see whether both sides agree. For $2x + 3 = 11$, try $x = 4$: the left side is $2(4) + 3 = 11$, which matches the right side. Try $x = 5$: the left side is $13 \\ne 11$, so $5$ is not a solution.',
        },
        {
          type: 'definition',
          term: 'Linear equation in one variable',
          text: 'A [[linear-equation]] in $x$ is one that can be rewritten in the form $ax + b = 0$ with constants $a$ and $b$ and $a \\ne 0$. The variable appears only to the first power — no $x^2$, no $\\sqrt{x}$, no $\\frac{1}{x}$.',
        },
        {
          type: 'p',
          text: 'Why "linear"? Each side of such an equation is a straight-line graph. Solving $2x + 3 = 11$ is the same as asking where the line $y = 2x + 3$ meets the horizontal line $y = 11$. Move the slider to change the right-hand side and watch the solution slide along the $x$-axis.',
        },
        {
          type: 'graph',
          x: [-4, 8],
          y: [-6, 16],
          functions: [
            { expr: '2x + 3', label: '$y = 2x + 3$', color: 'blue' },
            { expr: 'c', label: '$y = c$', color: 'red', dashed: true },
          ],
          points: [{ x: '(c - 3)/2', y: 'c', label: 'solution' }],
          vlines: [{ x: '(c - 3)/2', color: 'gray' }],
          sliders: [{ name: 'c', min: -5, max: 15, step: 0.5, value: 11, label: 'right side $c$' }],
          readouts: [{ label: 'solution of $2x + 3 = c$: $x =$', expr: '(c - 3)/2', digits: 2 }],
          caption: 'A non-horizontal line crosses every horizontal line exactly once — which is why a linear equation $ax + b = c$ with $a \\ne 0$ always has exactly one solution.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Substitution is your safety net',
          text: 'Every answer in this lesson can be checked in ten seconds by plugging it back into the **original** equation. Instructors give partial credit for work, but a check catches the arithmetic slip before it costs you anything.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which value is a solution of $3x - 5 = 2x - 1$?',
      hint: 'Substitute each option into both sides and compare.',
      options: [
        {
          text: '$x = -6$',
          why: 'Left: $3(-6) - 5 = -23$. Right: $2(-6) - 1 = -13$. Not equal. This comes from moving $-5$ across without changing its sign: $x = -1 - 5$.',
        },
        {
          text: '$x = \\frac{4}{5}$',
          why: 'This comes from *adding* $2x$ to the left instead of subtracting it ($5x = 4$). Left: $3 \\cdot \\frac{4}{5} - 5 = -\\frac{13}{5}$; right: $\\frac{8}{5} - 1 = \\frac{3}{5}$. Not equal.',
        },
        {
          text: '$x = 4$',
          correct: true,
          why: 'Left: $3(4) - 5 = 7$. Right: $2(4) - 1 = 7$. Both sides agree, so $4$ is a solution.',
        },
        {
          text: '$x = 2$',
          why: 'Left: $3(2) - 5 = 1$. Right: $2(2) - 1 = 3$. Not equal.',
        },
      ],
      explanation: 'A solution is any value that makes both sides equal. Substituting $x = 4$ gives $7 = 7$. Solving confirms it: subtract $2x$ from both sides to get $x - 5 = -1$, then add $5$ to get $x = 4$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Keeping the balance: properties of equality',
      blocks: [
        {
          type: 'p',
          text: 'Solving is a chain of rewrites. Each rewrite must produce an **[[equivalent-equations|equivalent equation]]** — one with exactly the same solutions — that is a little simpler than the one before. You stop when the equation reads $x = \\text{number}$, because then the solution is obvious.',
        },
        {
          type: 'theorem',
          name: 'Properties of equality',
          text: '**Addition property:** if $A = B$, then $A + c = B + c$ for any number $c$ (and so also $A - c = B - c$).\n\n**Multiplication property:** if $A = B$, then $cA = cB$ for any number $c \\ne 0$ (and so also $\\frac{A}{c} = \\frac{B}{c}$).',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A balance scale',
          text: 'Picture the two sides as pans on a balanced scale. Adding the same weight to both pans, or doubling both pans, keeps it balanced. Doing something to only one side tips it — and then the "equation" you are working with is no longer telling the truth.',
        },
        {
          type: 'p',
          text: 'Strategy: gather the variable terms on one side and the constants on the other, then divide by the [[coefficient]] of $x$. Each move uses an [[inverse-operation]] to undo what is attached to $x$.',
        },
        {
          type: 'derivation',
          title: 'Solve $4x - 3 = x + 9$',
          steps: [
            { tex: '4x - 3 = x + 9', why: 'The original equation. There are $x$-terms on both sides.' },
            { tex: '3x - 3 = 9', why: 'Subtract $x$ from both sides (addition property with $c = -x$). Now the variable lives only on the left.' },
            { tex: '3x = 12', why: 'Add $3$ to both sides to undo the $-3$.' },
            { tex: 'x = 4', why: 'Divide both sides by $3$, the coefficient of $x$. Allowed because $3 \\ne 0$.' },
            { tex: '\\text{Check: } 4(4) - 3 = 13, \\quad 4 + 9 = 13 \\;\\checkmark', why: 'Substitute into the *original* equation. Both sides are $13$.' },
          ],
          result: 'The only solution is $x = 4$; the two lines $y = 4x - 3$ and $y = x + 9$ cross at $(4, 13)$.',
        },
        {
          type: 'graph',
          x: [-2, 8],
          y: [-6, 22],
          functions: [
            { expr: '4x - 3', label: '$y = 4x - 3$', color: 'blue' },
            { expr: 'x + 9', label: '$y = x + 9$', color: 'red' },
          ],
          points: [{ x: 4, y: 13, label: '(4, 13)' }],
          vlines: [{ x: 4, label: 'x = 4', color: 'gray' }],
          caption: 'Each side of the equation is a line. The solution is the $x$-coordinate of their intersection.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the multiplier must not be zero',
          text: 'Multiplying by $0$ turns *any* equation into $0 = 0$, which is true for every $x$ — so it creates solutions that were never there. Multiplying by a nonzero $c$ is safe because you can always undo it by multiplying by $\\frac{1}{c}$: no information is lost, so the solution set cannot change. That reversibility is exactly what "equivalent" means.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Solve $7x + 4 = 2x - 21$.',
      hint: 'Subtract $2x$ from both sides, then subtract $4$.',
      label: '$x =$',
      answer: '-5',
      explanation: 'Subtract $2x$: $5x + 4 = -21$. Subtract $4$: $5x = -25$. Divide by $5$: $x = -5$. Check: $7(-5) + 4 = -31$ and $2(-5) - 21 = -31$. ✓',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'Multiplying both sides of an equation by $0$ always produces an equivalent equation.',
      answer: false,
      explanation: 'Multiplying by $0$ turns any equation into $0 = 0$, which every number satisfies. For example $x = 3$ has one solution, but $0 \\cdot x = 0 \\cdot 3$ has infinitely many. The multiplication property of equality requires $c \\ne 0$ precisely because multiplying by zero cannot be undone.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Parentheses and like terms first',
      blocks: [
        {
          type: 'p',
          text: 'Real equations arrive messy. Before you move anything across the equals sign, **simplify each side on its own**: use the [[distributive-property]] to clear parentheses, then combine [[like-terms]]. Only then start balancing.',
        },
        {
          type: 'derivation',
          title: 'Solve $3(2x - 5) - 4(x - 1) = 2(x + 3) - x$',
          steps: [
            { tex: '6x - 15 - 4x + 4 = 2x + 6 - x', why: 'Distribute on both sides. Note $-4(x - 1) = -4x + 4$: the $-4$ multiplies **both** terms, and $(-4)(-1) = +4$.' },
            { tex: '2x - 11 = x + 6', why: 'Combine like terms on each side: $6x - 4x = 2x$ and $-15 + 4 = -11$ on the left; $2x - x = x$ on the right.' },
            { tex: 'x - 11 = 6', why: 'Subtract $x$ from both sides to collect the variable on the left.' },
            { tex: 'x = 17', why: 'Add $11$ to both sides.' },
            { tex: '\\text{Check: } 3(29) - 4(16) = 23, \\quad 2(20) - 17 = 23 \\;\\checkmark', why: 'With $x = 17$: $2x - 5 = 29$, $x - 1 = 16$, $x + 3 = 20$. Both sides equal $23$.' },
          ],
          result: '$x = 17$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong',
            tone: 'bad',
            tex: ['-4(x - 1) = -4x - 4'],
            text: 'The minus sign was only applied to the first term.',
          },
          right: {
            title: 'Right',
            tone: 'good',
            tex: ['-4(x - 1) = -4x + 4'],
            text: 'A negative times a negative is positive: $(-4)(-1) = 4$.',
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Subtracting a whole group',
          text: 'A lone minus sign in front of parentheses means "multiply by $-1$": $5 - (x - 4) = 5 - x + 4$. Forgetting to flip the sign of the *second* term inside the parentheses is the single most common error in this whole unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A student solves $5 - 2(x - 4) = 3x + 3$. Tap the first line that is wrong.',
      lines: [
        '$5 - 2(x - 4) = 3x + 3$',
        '$5 - 2x - 8 = 3x + 3$',
        '$-3 - 2x = 3x + 3$',
        '$-6 = 5x$',
        '$x = -\\frac{6}{5}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 distributes $-2$ incorrectly: $(-2)(-4) = +8$, not $-8$. The correct line is $5 - 2x + 8 = 3x + 3$, so $13 - 2x = 3x + 3$, then $10 = 5x$ and $x = 2$. Check: $5 - 2(-2) = 9$ and $3(2) + 3 = 9$. ✓ Lines 3–5 are correct algebra applied to a wrong expression.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Put the lines of this solution of $2(x + 3) = 5x - 9$ in order.',
      lines: ['$2(x + 3) = 5x - 9$', '$2x + 6 = 5x - 9$', '$6 = 3x - 9$', '$15 = 3x$', '$x = 5$'],
      distractors: ['$2x + 3 = 5x - 9$'],
      explanation: 'Distribute first ($2 \\cdot 3 = 6$, so the distractor $2x + 3$ forgot to multiply the $3$). Then subtract $2x$ from both sides, add $9$, and divide by $3$. Check: $2(5 + 3) = 16$ and $5(5) - 9 = 16$. ✓ Notice the variable ended up on the right — that is perfectly fine; $15 = 3x$ and $3x = 15$ say the same thing.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Clearing fractions and decimals',
      blocks: [
        {
          type: 'p',
          text: 'Fractions make every step error-prone. The cure: multiply **both entire sides** by the [[least-common-denominator]] (LCD) of all the fractions. Every denominator divides the LCD, so every fraction becomes an integer expression in one move. This is the multiplication property with $c = \\text{LCD} \\ne 0$, so the new equation is equivalent.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\dfrac{x + 2}{3} - \\dfrac{x - 1}{4} = 2$',
          steps: [
            { tex: '12 \\cdot \\frac{x + 2}{3} - 12 \\cdot \\frac{x - 1}{4} = 12 \\cdot 2', why: 'The LCD of $3$ and $4$ is $12$. Multiply **every** term — including the $2$ on the right — by $12$.' },
            { tex: '4(x + 2) - 3(x - 1) = 24', why: '$\\frac{12}{3} = 4$ and $\\frac{12}{4} = 3$. Keep each numerator in parentheses: the fraction bar groups it.' },
            { tex: '4x + 8 - 3x + 3 = 24', why: 'Distribute. The $-3$ multiplies both $x$ and $-1$, giving $+3$.' },
            { tex: 'x + 11 = 24', why: 'Combine like terms: $4x - 3x = x$ and $8 + 3 = 11$.' },
            { tex: 'x = 13', why: 'Subtract $11$ from both sides.' },
            { tex: '\\text{Check: } \\tfrac{15}{3} - \\tfrac{12}{4} = 5 - 3 = 2 \\;\\checkmark', why: 'Substitute into the original equation.' },
          ],
          result: '$x = 13$.',
        },
        {
          type: 'p',
          text: 'Decimals work the same way: multiply by the power of $10$ that makes every coefficient an integer. For $0.15x + 0.4 = 0.05x + 1.2$, multiplying by $100$ gives $15x + 40 = 5x + 120$, so $10x = 80$ and $x = 8$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Multiply every term, not just the fractions',
          text: 'Writing $4(x + 2) - 3(x - 1) = 2$ (forgetting to multiply the right side by $12$) is the classic slip. If a term has no denominator, it still gets multiplied by the LCD.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Why integers are friendlier — for people and for computers',
          text: 'A `double` cannot store $0.1$ exactly (it is a repeating fraction in binary), so code like `0.1 + 0.2 == 0.3` is `false` in C++. Clearing decimals by hand is the human version of a common programming trick: store money as an integer number of cents, and game timers as integer ticks, so equality tests stay exact.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'numeric',
      prompt: 'Solve $\\dfrac{x - 3}{2} = \\dfrac{x + 1}{5} + 1$.',
      hint: 'Multiply every term by the LCD $10$, keeping numerators in parentheses.',
      label: '$x =$',
      answer: '9',
      explanation: 'Multiply by $10$: $5(x - 3) = 2(x + 1) + 10$. Distribute: $5x - 15 = 2x + 2 + 10 = 2x + 12$. Subtract $2x$ and add $15$: $3x = 27$, so $x = 9$. Check: $\\frac{6}{2} = 3$ and $\\frac{10}{5} + 1 = 3$. ✓',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Clear the fractions in $\\dfrac{x}{4} + \\dfrac{x}{6} = 5$.',
      template: 'Multiply both sides by the LCD, ___ . The equation becomes ___ , so ___ .',
      blanks: [{ answers: ['$12$'] }, { answers: ['$3x + 2x = 60$'] }, { answers: ['$x = 12$'] }],
      wordBank: ['$12$', '$24$', '$3x + 2x = 60$', '$3x + 2x = 5$', '$x = 12$', '$x = 1$'],
      explanation: 'The LCD of $4$ and $6$ is $12$ (the smallest number both divide; $24$ works too but makes bigger numbers). Then $12 \\cdot \\frac{x}{4} = 3x$, $12 \\cdot \\frac{x}{6} = 2x$ and $12 \\cdot 5 = 60$ — the right side must be multiplied too. So $5x = 60$ and $x = 12$. Check: $\\frac{12}{4} + \\frac{12}{6} = 3 + 2 = 5$. ✓',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Identities and contradictions',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes the variable cancels completely. What is left is a statement with no $x$ in it, and that statement is either always true or always false.',
        },
        {
          type: 'table',
          headers: ['Type', 'What solving produces', 'Solution set', 'Graph picture'],
          rows: [
            ['Conditional', '$x = \\text{number}$', 'exactly one value', 'lines cross once'],
            ['[[identity-equation|Identity]]', 'a true statement like $6 = 6$', 'all real numbers, $\\mathbb{R}$', 'the same line'],
            ['[[contradiction-equation|Contradiction]]', 'a false statement like $6 = 5$', 'no solution, $\\varnothing$', 'parallel lines'],
          ],
        },
        {
          type: 'derivation',
          title: 'Two equations that look almost the same',
          steps: [
            { tex: '2(x + 3) = 2x + 6 \\implies 2x + 6 = 2x + 6', why: 'Distribute the left side.' },
            { tex: '\\implies 6 = 6', why: 'Subtract $2x$ from both sides. The variable is gone and the statement is **true** — whatever $x$ is. This is an identity: every real number is a solution.' },
            { tex: '2(x + 3) = 2x + 5 \\implies 2x + 6 = 2x + 5', why: 'Same left side, but the right side is one less.' },
            { tex: '\\implies 6 = 5', why: 'Subtract $2x$. The statement is **false** no matter what $x$ is. This is a contradiction: there is no solution.' },
          ],
          result: 'Identity: solution set $\\mathbb{R}$. Contradiction: solution set $\\varnothing$ (the empty set).',
        },
        {
          type: 'graph',
          x: [-6, 4],
          y: [-6, 12],
          functions: [
            { expr: '2(x + 3)', label: '$y = 2(x + 3)$', color: 'blue' },
            { expr: 'a*x + b', label: '$y = ax + b$', color: 'red', dashed: true },
          ],
          sliders: [
            { name: 'a', min: -2, max: 4, step: 0.5, value: 2, label: '$a$' },
            { name: 'b', min: 0, max: 10, step: 1, value: 5, label: '$b$' },
          ],
          caption: 'Solving $2(x + 3) = ax + b$. With $a = 2$, $b = 5$ the lines are parallel (no solution). Set $b = 6$: the lines coincide (every $x$ works). Change $a$ away from $2$: the lines cross exactly once.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why only these three outcomes are possible',
          text: 'After simplifying, every such equation becomes $ax = c$. If $a \\ne 0$ you can divide: exactly one solution $x = \\frac{c}{a}$. If $a = 0$ the equation reads $0 = c$, which is either always true ($c = 0$) or never true ($c \\ne 0$). There is no way to get, say, exactly two solutions from a linear equation.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A solver has to handle all three cases',
          text: 'Writing `x = c / a` without checking `a` is a classic bug: in floating point, dividing by zero gives `inf` or `nan` rather than an error, and that value then silently spreads through a game\'s physics. Here is the full case analysis for $ax + b = cx + d$.',
        },
        {
          type: 'code',
          title: 'solve_linear.cpp',
          runnable: true,
          code: `#include <cstdio>

// Solve a*x + b = c*x + d and report which case occurs.
void solve(double a, double b, double c, double d) {
    double coef = a - c;  // collect x-terms on the left
    double rhs = d - b;   // collect constants on the right
    if (coef != 0) {
        std::printf("x = %g\\n", rhs / coef);
    } else if (rhs == 0) {
        std::printf("identity: every x works\\n");
    } else {
        std::printf("contradiction: no solution\\n");
    }
}

int main() {
    solve(4, -3, 1, 9);  // 4x - 3 = x + 9
    solve(2, 6, 2, 6);   // 2x + 6 = 2x + 6
    solve(2, 6, 2, 5);   // 2x + 6 = 2x + 5
}`,
          output: `x = 4
identity: every x works
contradiction: no solution`,
          annotations: [
            { lines: '5-6', text: 'Subtracting $cx$ and $b$ from both sides turns the equation into $(a - c)x = d - b$.' },
            { lines: '7-8', text: 'Nonzero coefficient: divide, exactly one solution.' },
            { lines: '9-13', text: 'Coefficient zero: the equation is $0 = \\text{rhs}$, an identity or a contradiction. (With measured data you would compare against a small tolerance instead of exact $0$.)' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Solve $3(x - 2) + x = 4x - 6$.',
      options: [
        {
          text: '$x = 0$',
          why: '$x = 0$ does work ($-6 = -6$), but so does every other number. Reporting only $0$ misses almost all of the solutions.',
        },
        {
          text: 'No solution',
          why: 'That would require a false statement like $-6 = 6$ at the end. Here the leftover statement is true.',
        },
        {
          text: 'All real numbers',
          correct: true,
          why: 'The left side simplifies to $4x - 6$, identical to the right side, so the equation is an identity.',
        },
        {
          text: '$x = -6$',
          why: 'This mistakes the constant left over for the value of $x$. Substituting gives $-30 = -30$, true — but again, so is every value.',
        },
      ],
      explanation: 'Distribute and combine: $3x - 6 + x = 4x - 6$, so $4x - 6 = 4x - 6$. Subtracting $4x$ leaves $-6 = -6$, which is true regardless of $x$. The equation is an identity, and its solution set is all real numbers, $\\mathbb{R}$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'If solving an equation leads to $0 = 0$, then the solution is $x = 0$.',
      answer: false,
      explanation: 'The $0 = 0$ has no $x$ in it, so it says nothing about $x$ being zero. It is a true statement for *every* $x$, which means the original equation is an identity and every real number is a solution. Contrast $5x = 0$, which really does force $x = 0$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'A strategy you can trust',
      blocks: [
        {
          type: 'p',
          text: 'Every linear equation in this course yields to the same four moves. The order matters: simplifying first keeps the numbers small, and checking last catches slips.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Clear fractions and decimals', text: 'Multiply every term on both sides by the LCD (or a power of $10$).' },
            { title: 'Simplify each side', text: 'Distribute, then combine like terms — separately on the left and on the right.' },
            { title: 'Collect and isolate', text: 'Add or subtract to get variable terms on one side and constants on the other; then divide by the coefficient of $x$ (if it is not zero).' },
            { title: 'Check', text: 'Substitute into the **original** equation. If the variable vanished, decide between identity ($\\mathbb{R}$) and contradiction ($\\varnothing$).' },
          ],
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'What graders look for',
          text: 'Write one equivalent equation per line, aligned on the $=$ sign, and never chain unequal things with $=$ (for example "$3x = 12 = 4$" is false as written). For identities and contradictions, state the solution set explicitly: "all real numbers" or "no solution". A bare "$0 = 0$" is not an answer.',
        },
        {
          type: 'deepdive',
          title: 'The general solution of $ax + b = cx + d$',
          blocks: [
            {
              type: 'p',
              text: 'You can run the strategy once with letters instead of numbers. Subtract $cx$ and $b$ from both sides to get $(a - c)x = d - b$. If $a \\ne c$, divide:',
            },
            { type: 'math', tex: 'x = \\frac{d - b}{a - c} \\qquad (a \\ne c)' },
            {
              type: 'p',
              text: 'For $4x - 3 = x + 9$: $x = \\frac{9 - (-3)}{4 - 1} = \\frac{12}{3} = 4$, matching our earlier work. Solving with letters is exactly the skill of the next lesson, on formulas.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'Solve $\\dfrac{2x}{3} - \\dfrac{1}{2} = \\dfrac{x + 5}{4}$. Give an exact fraction or a decimal.',
      hint: 'The LCD of $3$, $2$ and $4$ is $12$.',
      label: '$x =$',
      answer: '21/5',
      answerTex: '\\frac{21}{5}',
      explanation: 'Multiply every term by $12$: $8x - 6 = 3(x + 5) = 3x + 15$. Subtract $3x$ and add $6$: $5x = 21$, so $x = \\frac{21}{5} = 4.2$. Check: $\\frac{2(4.2)}{3} - 0.5 = 2.8 - 0.5 = 2.3$ and $\\frac{9.2}{4} = 2.3$. ✓ Answers need not be whole numbers.',
    },
  ],
  takeaways: [
    'A solution makes the equation a true statement; check any candidate by substituting into the original equation.',
    'Adding the same quantity to both sides, or multiplying both sides by the same **nonzero** number, produces an equivalent equation.',
    'Simplify each side first (distribute carefully with negatives, combine like terms), then collect variable terms, isolate, and divide.',
    'Clear fractions by multiplying every term by the LCD; clear decimals with a power of $10$.',
    'If the variable cancels, a true statement means an identity (all real numbers) and a false one means a contradiction (no solution).',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.2 Linear Equations in One Variable',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-2-linear-equations-in-one-variable',
      source: 'openstax',
      note: 'Free textbook section with more worked examples, including equations with fractions and rational expressions.',
    },
    {
      title: "Paul's Online Notes — Linear Equations",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/SolveLinearEqns.aspx',
      source: 'paul',
      note: 'A careful college-level walk-through with a strong emphasis on checking solutions.',
    },
    {
      title: 'Khan Academy — Algebra 1',
      url: 'https://www.khanacademy.org/math/algebra',
      source: 'khan',
      note: 'The "Solving equations & inequalities" unit has short videos and unlimited practice problems.',
    },
  ],
};
