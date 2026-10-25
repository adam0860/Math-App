import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-systems-elimination',
  title: 'Elimination and Applications',
  summary: 'Add equations together so a variable cancels — the method computers scale up to millions of unknowns.',
  minutes: 18,
  objectives: [
    'Explain why adding two equations, or multiplying one by a nonzero constant, keeps the solution set the same',
    'Solve a $2 \\times 2$ system by elimination, scaling one or both equations first when needed',
    'Recognise no-solution and infinitely-many cases when both variables cancel',
    'Translate ticket, mixture and rate problems into systems and solve them',
    'Derive the general solution of $ax + by = c$, $dx + ey = f$ and the role of $ae - bd$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Adding equations',
      blocks: [
        {
          type: 'p',
          text: 'Substitution works, but it can drag you into fractions. The [[elimination-method]] takes a different route: instead of rearranging one equation, you **add the equations together** so that one variable cancels out.',
        },
        {
          type: 'p',
          text: 'Look at $x + y = 10$ and $x - y = 4$. The $y$-coefficients are $+1$ and $-1$ — opposites. Add the left sides and add the right sides, and $y$ disappears:',
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$',
          steps: [
            { tex: '(x + y) + (x - y) = 10 + 4', why: 'Add the two equations: left side plus left side equals right side plus right side.' },
            { tex: '2x = 14', why: 'The $+y$ and $-y$ cancel. That is the "elimination".' },
            { tex: 'x = 7', why: 'Divide both sides by $2$.' },
            { tex: '7 + y = 10 \\implies y = 3', why: 'Back-substitute into either original equation; the first is simplest.' },
            { tex: '7 - 3 = 4 \\;\\checkmark', why: 'Check in the equation not used for back-substitution.' },
          ],
          result: 'The solution is $(7, 3)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you are allowed to add equations',
          text: 'At the solution, $x + y$ and $10$ are the same number, and $x - y$ and $4$ are the same number. Adding equal amounts to equal amounts gives equal results: if $A = B$ and $C = D$, then $A + C = B + D$. So every solution of the system also solves the new equation $2x = 14$. Nothing is guessed — the cancellation just exposes what the solution must be.',
        },
        {
          type: 'graph',
          x: [0, 12],
          y: [-2, 10],
          functions: [
            { expr: '10 - x', label: '$x + y = 10$', color: 'blue' },
            { expr: 'x - 4', label: '$x - y = 4$', color: 'red' },
            { expr: '(10 + 4k - (1 + k)x)/(1 - k)', label: 'equation 1 $+\\, k\\cdot$ equation 2', color: 'purple', dashed: true },
          ],
          vlines: [{ x: 7, label: 'x = 7 (k = 1)', color: 'gray' }],
          points: [{ x: 7, y: 3, label: '(7, 3)' }],
          sliders: [{ name: 'k', min: -3, max: 0.8, step: 0.1, value: 0, label: '$k$' }],
          readouts: [
            { label: 'coefficient of $x$: $1 + k =$', expr: '1 + k', digits: 2 },
            { label: 'coefficient of $y$: $1 - k =$', expr: '1 - k', digits: 2 },
          ],
          caption: 'The purple line is (equation 1) $+\\,k\\,\\cdot$ (equation 2). Whatever $k$ you choose, it still passes through $(7, 3)$. At $k = -1$ the $x$ cancels and it becomes the horizontal line $y = 3$; at $k = 1$ (plain adding) the $y$ cancels, giving the vertical line $x = 7$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Solve by elimination. What is $x$?',
      tex: '\\begin{cases} 3x + 2y = 16 \\\\ 5x - 2y = 8 \\end{cases}',
      hint: 'The $y$-coefficients are already opposites. Add the equations.',
      label: '$x =$',
      answer: '3',
      explanation: 'Adding gives $8x = 24$, so $x = 3$. Back-substituting into the first equation: $9 + 2y = 16$, so $y = \\frac{7}{2}$. Check the second: $15 - 2 \\cdot \\frac{7}{2} = 15 - 7 = 8$ ✓. Notice $y$ is a fraction — elimination got us there without ever dividing mid-solution.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Scaling first: making opposites',
      blocks: [
        {
          type: 'p',
          text: 'Usually no coefficients are opposites yet. Then you **multiply** one or both equations by constants to create opposites. Multiplying an equation by a nonzero number does not change its solutions: $2x + 3y = 12$ and $4x + 6y = 24$ describe exactly the same line.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{cases} 2x + 3y = 12 \\\\ 5x - 2y = 11 \\end{cases}$',
          steps: [
            { tex: '\\text{Target } y\\text{: coefficients } 3 \\text{ and } -2,\\ \\operatorname{lcm} = 6', why: 'Pick a variable to eliminate. The $y$-terms already have opposite signs, so we only need equal sizes: the least common multiple of $3$ and $2$ is $6$.' },
            { tex: '2 \\times (2x + 3y = 12): \\quad 4x + 6y = 24', why: 'Multiply **every** term of the first equation, including the right side, by $2$.' },
            { tex: '3 \\times (5x - 2y = 11): \\quad 15x - 6y = 33', why: 'Multiply every term of the second equation by $3$. Now the $y$-coefficients are $+6$ and $-6$.' },
            { tex: '19x = 57', why: 'Add the scaled equations; $6y - 6y = 0$.' },
            { tex: 'x = 3', why: 'Divide by $19$.' },
            { tex: '2(3) + 3y = 12 \\implies 3y = 6 \\implies y = 2', why: 'Back-substitute into the original first equation.' },
            { tex: '5(3) - 2(2) = 11 \\;\\checkmark', why: 'Check in the original second equation — not the scaled one, in case the scaling had an error.' },
          ],
          result: 'The solution is $(3, 2)$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong: scaling only the left side',
            tone: 'bad',
            tex: ['2(2x + 3y) = 12', '4x + 6y = 12'],
            text: 'This is a *different* line. The system you solve is no longer the one you were given.',
          },
          right: {
            title: 'Right: scale the whole equation',
            tone: 'good',
            tex: ['2(2x + 3y) = 2(12)', '4x + 6y = 24'],
            text: 'Both sides are multiplied, so the equation stays balanced and the line is unchanged.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Which variable to eliminate?',
          text: 'Choose the variable whose coefficients need the smallest multipliers. If one coefficient already divides the other (say $2x$ and $6x$), scaling just one equation is enough. If signs are the same, scale so they are equal and then **subtract** — or scale one by a negative number and add.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'error',
      prompt: 'A student solves $\\begin{cases} 3x + 4y = 10 \\\\ 2x - y = 3 \\end{cases}$ by elimination. Tap the first line that is wrong.',
      lines: [
        'To eliminate $y$, multiply the second equation by $4$.',
        'Second equation becomes $8x - 4y = 3$',
        'Add it to the first: $11x = 13$',
        '$x = \\frac{13}{11}$',
      ],
      errorLines: [2],
      explanation: 'Line 2 multiplies the left side by $4$ but forgets the right side: $4(2x - y) = 4(3)$ gives $8x - 4y = 12$. Adding to $3x + 4y = 10$ then gives $11x = 22$, so $x = 2$, and $2(2) - y = 3$ gives $y = 1$. Check: $3(2) + 4(1) = 10$ ✓. The plan in line 1 was a good one.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'Finish solving that system correctly. What is $y$?',
      tex: '\\begin{cases} 3x + 4y = 10 \\\\ 2x - y = 3 \\end{cases}',
      hint: 'Multiply the second equation by $4$ (both sides!), add to eliminate $y$, find $x$, then back-substitute.',
      label: '$y =$',
      answer: '1',
      explanation: '$4 \\times$ the second equation is $8x - 4y = 12$. Adding: $11x = 22$, so $x = 2$. From $2x - y = 3$: $4 - y = 3$, so $y = 1$. The solution is $(2, 1)$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'When everything cancels',
      blocks: [
        {
          type: 'p',
          text: 'Just as with substitution, elimination sometimes wipes out **both** variables. The leftover numerical statement tells you which case you are in: false means no solution, true means infinitely many.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{cases} 2x - 4y = 6 \\\\ -x + 2y = 5 \\end{cases}$',
          steps: [
            { tex: '2 \\times (-x + 2y = 5): \\quad -2x + 4y = 10', why: 'Scale the second equation by $2$ so its $x$-coefficient is the opposite of $2x$.' },
            { tex: '(2x - 4y) + (-2x + 4y) = 6 + 10', why: 'Add the equations.' },
            { tex: '0 = 16', why: 'Both $x$ **and** $y$ cancel, leaving a false statement.' },
          ],
          result: 'No solution: the system is inconsistent. In slope-intercept form the lines are $y = \\frac{1}{2}x - \\frac{3}{2}$ and $y = \\frac{1}{2}x + \\frac{5}{2}$ — parallel.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why both variables vanish together',
          text: 'Both variables cancel exactly when one equation\'s left side is a multiple of the other\'s — here $2x - 4y = -2(-x + 2y)$. Proportional coefficients mean equal slopes. Then only the right sides decide: if they are in the same proportion (giving $0 = 0$), the equations are the same line; if not, the lines are parallel.',
        },
        {
          type: 'heading',
          text: 'Substitution or elimination?',
        },
        {
          type: 'table',
          headers: ['Situation', 'Good choice', 'Why'],
          rows: [
            ['A variable is already isolated: $y = 3x - 1$', 'substitution', 'step 1 is already done'],
            ['A coefficient is $\\pm 1$', 'either', 'isolating it creates no fractions'],
            ['Standard form, no coefficient $\\pm 1$: $4x + 3y = 2$', 'elimination', 'avoids fractions until the very end'],
            ['Three or more equations', 'elimination', 'it scales systematically (next lesson)'],
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'mcq',
      prompt: 'You apply elimination to this system. What happens?',
      tex: '\\begin{cases} 6x - 9y = 12 \\\\ 4x - 6y = 8 \\end{cases}',
      hint: 'Multiply the first equation by $2$ and the second by $-3$, then add.',
      options: [
        { text: 'You get $0 = 0$, so there are infinitely many solutions', correct: true, why: '$12x - 18y = 24$ plus $-12x + 18y = -24$ gives $0 = 0$. Both equations are multiples of $2x - 3y = 4$.' },
        { text: 'You get $0 = 0$, so there is no solution', why: '$0 = 0$ is a *true* statement — it is satisfied, not violated. No solution comes from a false statement like $0 = 16$.' },
        { text: 'You get $0 = 4$, so there is no solution', why: 'Check the right sides: $2(12) + (-3)(8) = 24 - 24 = 0$, not $4$.' },
        { text: 'You get $x = 2$, so there is exactly one solution', why: 'The coefficients are proportional ($6 : 4 = 9 : 6$), so the variables cancel together; you cannot isolate a single value of $x$.' },
      ],
      explanation: 'Dividing the first equation by $3$ and the second by $2$ gives $2x - 3y = 4$ both times: the system is dependent. Every point on the line $y = \\frac{2}{3}x - \\frac{4}{3}$ is a solution, for example $(2, 0)$ and $(5, 2)$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Applications: translating words into a system',
      blocks: [
        {
          type: 'p',
          text: 'Word problems with two unknowns almost always give you **two independent facts** — usually a *count* fact (how many items in total) and a *value* fact (what they are worth together). Each fact becomes one equation.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Name the unknowns', text: 'Write what $x$ and $y$ stand for, with units: "$x$ = number of student tickets".' },
            { title: 'One fact, one equation', text: 'Translate each sentence that relates the unknowns into an equation.' },
            { title: 'Solve', text: 'Use whichever method is cleaner — usually elimination for standard-form equations.' },
            { title: 'Interpret and check', text: 'Answer the question asked, and check the numbers against the *words* (not just your equations, which might be mis-translated).' },
          ],
        },
        {
          type: 'derivation',
          title: 'A game jam sold $200$ tickets: students pay \\$8, everyone else \\$15. Revenue was \\$2160. How many of each?',
          steps: [
            { tex: 'x = \\text{student tickets}, \\quad y = \\text{general tickets}', why: 'Name the two unknowns.' },
            { tex: 'x + y = 200', why: 'Count fact: $200$ tickets in total.' },
            { tex: '8x + 15y = 2160', why: 'Value fact: each student ticket brings in \\$8 and each general ticket \\$15.' },
            { tex: '-8x - 8y = -1600', why: 'Multiply the count equation by $-8$ so the $x$-terms will cancel.' },
            { tex: '7y = 560 \\implies y = 80', why: 'Add to the value equation: $15y - 8y = 7y$ and $2160 - 1600 = 560$.' },
            { tex: 'x = 200 - 80 = 120', why: 'Back-substitute into the count equation.' },
            { tex: '8(120) + 15(80) = 960 + 1200 = 2160 \\;\\checkmark', why: 'Check against the revenue in the problem statement.' },
          ],
          result: '$120$ student tickets and $80$ general tickets were sold.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Don\'t mix counts and values',
          text: 'A frequent setup error is writing $x + y = 2160$ (adding ticket *counts* to get a *dollar* amount). Check units: every term in an equation must have the same units. $x + y$ is tickets; $8x + 15y$ is dollars.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'You bought $7$ games during a sale. Indie games cost \\$15 each and AAA games cost \\$60 each, and you spent \\$240 in total. How many **AAA** games did you buy?',
      hint: 'Let $x$ = indie games and $y$ = AAA games: $x + y = 7$ and $15x + 60y = 240$. Multiply the first by $-15$ and add.',
      answer: '3',
      unit: 'AAA games',
      explanation: 'Multiplying $x + y = 7$ by $-15$ gives $-15x - 15y = -105$. Adding to $15x + 60y = 240$: $45y = 135$, so $y = 3$ AAA games and $x = 4$ indie games. Check: $4(15) + 3(60) = 60 + 180 = 240$ ✓ and $4 + 3 = 7$ ✓.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Mixtures and rates',
      blocks: [
        {
          type: 'p',
          text: 'Two more patterns cover most textbook applications. In a **mixture** problem, the value fact is about *amounts of an ingredient*: $10\\%$ of $x$ litres is $0.10x$ litres of the pure substance. In a **rate** problem with wind or current, the speeds add when moving with it and subtract when moving against it.',
        },
        {
          type: 'derivation',
          title: 'Mix a $10\\%$ and a $40\\%$ acid solution to get $30$ L of $20\\%$ solution',
          steps: [
            { tex: 'x + y = 30', why: 'Let $x$ = litres of $10\\%$ solution, $y$ = litres of $40\\%$. Total volume is $30$ L.' },
            { tex: '0.10x + 0.40y = 0.20(30) = 6', why: 'Litres of pure acid: what goes in from each solution must equal what is in the final mix.' },
            { tex: 'x + 4y = 60', why: 'Multiply the acid equation by $10$ to clear decimals (a nonzero scale, so the solutions are unchanged).' },
            { tex: '3y = 30 \\implies y = 10', why: 'Subtract the volume equation $x + y = 30$ from it: $x$ cancels.' },
            { tex: 'x = 30 - 10 = 20', why: 'Back-substitute.' },
          ],
          result: 'Use $20$ L of the $10\\%$ solution and $10$ L of the $40\\%$ solution. Check: $2 + 4 = 6$ L of acid in $30$ L, which is $20\\%$ ✓.',
        },
        {
          type: 'table',
          headers: ['Pattern', 'Equation 1', 'Equation 2'],
          rows: [
            ['Plane with wind: $600$ mi in $2$ h with it, $3$ h against', '$p + w = \\frac{600}{2} = 300$', '$p - w = \\frac{600}{3} = 200$'],
            ['Solution', 'add: $2p = 500$, so $p = 250$ mph', '$w = 300 - 250 = 50$ mph'],
          ],
          caption: 'With the wind, the ground speed is $p + w$; against it, $p - w$. Rate problems often produce opposite coefficients for free.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Conveyor belts and moving walkways',
          text: 'Platformers use exactly this model: a character walking at speed $v$ on a conveyor moving at $c$ has ground speed $v + c$ one way and $v - c$ the other. If a level designer measures the two crossing times, a $2 \\times 2$ system recovers both $v$ and $c$ — handy when tuning feel from playtest data.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'A boat travels $36$ km downstream in $2$ hours and returns the same $36$ km upstream in $3$ hours. What is the speed of the **current**?',
      hint: 'Downstream speed is $b + c = \\frac{36}{2}$; upstream speed is $b - c = \\frac{36}{3}$.',
      label: '$c =$',
      unit: 'km/h',
      answer: '3',
      explanation: 'Downstream: $b + c = 18$. Upstream: $b - c = 12$. Subtracting the equations eliminates $b$: $2c = 6$, so $c = 3$ km/h (and the boat\'s own speed is $b = 15$ km/h). Check: $(15 + 3) \\cdot 2 = 36$ ✓ and $(15 - 3) \\cdot 3 = 36$ ✓.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'fill',
      prompt: 'A shop mixes peanuts at \\$4/lb with cashews at \\$10/lb to make $12$ lb of a mix worth \\$6/lb. Let $x$ = lb of peanuts and $y$ = lb of cashews. Complete the system.',
      template: '$x + y =$ ___ and $4x + 10y =$ ___',
      blanks: [{ answers: ['$12$'] }, { answers: ['$72$'] }],
      wordBank: ['$12$', '$72$', '$6$', '$14$', '$16$', '$144$'],
      explanation: 'The pounds add up to $12$. The dollar values must add up to the value of the mix: $12$ lb at \\$6/lb is $12 \\times 6 = \\$72$ (not \\$6, which is a *price per pound*, and not $4 + 10 = 14$). Solving: $4x + 4y = 48$ subtracted from $4x + 10y = 72$ gives $6y = 24$, so $y = 4$ lb of cashews and $x = 8$ lb of peanuts.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'The big picture: why elimination scales',
      blocks: [
        {
          type: 'p',
          text: 'Elimination uses only two moves: **multiply an equation by a nonzero constant** and **add a multiple of one equation to another**. Each move turns the system into an *equivalent* system — one with exactly the same solutions — and each can be undone (divide by the constant; subtract the multiple back). That reversibility is why no solutions are gained or lost.',
        },
        {
          type: 'p',
          text: 'Because the moves are so mechanical, we can run them on a *general* system and get a formula for every $2 \\times 2$ system at once.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$ for $x$',
          steps: [
            { tex: 'aex + bey = ce', why: 'Multiply the first equation by $e$.' },
            { tex: 'bdx + bey = bf', why: 'Multiply the second equation by $b$. Now both $y$-coefficients are $be$.' },
            { tex: '(ae - bd)\\,x = ce - bf', why: 'Subtract the second new equation from the first: the $bey$ terms cancel, and factor out $x$.' },
            { tex: 'x = \\frac{ce - bf}{ae - bd} \\quad (\\text{if } ae - bd \\ne 0)', why: 'Divide — allowed only when $ae - bd \\neq 0$.' },
            { tex: 'y = \\frac{af - cd}{ae - bd}', why: 'Eliminating $x$ the same way (multiply by $d$ and $a$, subtract) gives $y$.' },
          ],
          result: 'The number $ae - bd$ decides everything: nonzero means exactly one solution; zero means the coefficients are proportional (parallel or identical lines).',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Meet the determinant',
          text: 'The quantity $ae - bd$ is called the **determinant** of the coefficient array $\\begin{bmatrix} a & b \\\\ d & e \\end{bmatrix}$. It is zero exactly when $\\frac{a}{d} = \\frac{b}{e}$ (when those are defined) — equal slopes. In linear algebra you will see that the determinant measures how a matrix stretches area, and "determinant $= 0$" means the system cannot have a unique solution.',
        },
        {
          type: 'code',
          title: 'solve2x2.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <cmath>

int main() {
    // 2x + 3y = 12,  5x - 2y = 11
    double a = 2, b = 3, c = 12;
    double d = 5, e = -2, f = 11;

    double det = a * e - b * d;
    if (std::fabs(det) < 1e-12) {
        std::printf("no unique solution\\n");
        return 0;
    }
    double x = (c * e - b * f) / det;
    double y = (a * f - c * d) / det;
    std::printf("det = %g, x = %g, y = %g\\n", det, x, y);
}`,
          output: 'det = -19, x = 3, y = 2',
          annotations: [
            { lines: '6-7', text: 'The coefficients of the system from the "Scaling first" card.' },
            { lines: 9, text: 'The determinant $ae - bd = 2(-2) - 3(5) = -19$.' },
            { lines: '10-13', text: 'Never compare a floating-point value to exactly $0$; use a small tolerance.' },
            { lines: '14-15', text: 'The formulas derived above.' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'For large systems, computers do **not** use determinant formulas (they get expensive fast). They run elimination step by step — the algorithm you will meet next lesson as Gaussian elimination.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'If elimination reduces a system to $0 = 0$, the system has no solution.',
      answer: false,
      explanation: '$0 = 0$ is always **true**, so it puts no restriction on $x$ or $y$: the two equations were really the same line, and there are infinitely many solutions. "No solution" comes from a **false** statement such as $0 = 16$, which no choice of $x$ and $y$ can fix.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'expr',
      prompt: 'Solve the system for $x$ in terms of the constant $c$.',
      tex: '\\begin{cases} x + y = c \\\\ x - y = 2 \\end{cases}',
      hint: 'Add the two equations: the $y$-terms cancel.',
      label: '$x =$',
      variables: ['c'],
      answer: '(c + 2)/2',
      answerTex: '\\frac{c + 2}{2}',
      explanation: 'Adding gives $2x = c + 2$, so $x = \\frac{c + 2}{2}$, and then $y = c - x = \\frac{c - 2}{2}$. Check with $c = 10$: $x = 6$, $y = 4$, and indeed $6 + 4 = 10$, $6 - 4 = 2$. Solving with a letter on the right side is how you build a reusable formula — the same idea as the general $2 \\times 2$ solution.',
    },
  ],
  takeaways: [
    'Elimination: scale the equations so one variable has opposite coefficients, add to cancel it, solve, back-substitute, check.',
    'Multiply **both sides** when scaling; a nonzero scale and adding equations never change the solution set.',
    'If both variables cancel: a false statement ($0 = 16$) means no solution; a true one ($0 = 0$) means infinitely many.',
    'Word problems give one equation per fact — typically a count equation and a value (or rate) equation; check units.',
    'For $ax + by = c$, $dx + ey = f$ there is exactly one solution when the determinant $ae - bd \\ne 0$.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 7.1 Systems of Linear Equations: Two Variables',
      url: 'https://openstax.org/books/college-algebra-2e/pages/7-1-systems-of-linear-equations-two-variables',
      source: 'openstax',
      note: 'The elimination examples and the cost/revenue and mixture applications are worth working through.',
    },
    {
      title: "Paul's Online Notes — Linear Systems with Two Variables",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/SystemsTwoVrble.aspx',
      source: 'paul',
      note: 'Side-by-side substitution and elimination solutions of the same systems.',
    },
    {
      title: 'Khan Academy — Algebra 2',
      url: 'https://www.khanacademy.org/math/algebra2',
      source: 'khan',
      note: 'Extra practice sets and short videos on systems of equations and their word problems.',
    },
  ],
};
