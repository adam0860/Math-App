import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-systems-substitution',
  title: 'Systems: Graphing and Substitution',
  summary: 'Two equations, two unknowns, one shared answer: find where lines meet, by picture and by algebra.',
  minutes: 17,
  objectives: [
    'Check whether an ordered pair is a solution of a system of two equations',
    'Solve a system by graphing and explain why the solution is the intersection point',
    'Classify a system as having one solution, no solution or infinitely many solutions',
    'Solve a system exactly with the substitution method, including the special cases $0 = 0$ and $0 = c$',
    'Set up and solve a break-even problem with two linear models',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Two conditions at once',
      blocks: [
        {
          type: 'p',
          text: 'Until now every equation you solved had **one** unknown. But real constraints usually come in pairs. Suppose a character in your game has an attack stat $x$ and a defence stat $y$. The designer says the two stats must add to $10$, and attack must beat defence by exactly $2$. Each sentence is one equation:',
        },
        {
          type: 'math',
          tex: '\\begin{cases} x + y = 10 \\\\ x - y = 2 \\end{cases}',
          caption: 'The brace means "both of these, at the same time".',
        },
        {
          type: 'p',
          text: 'The first equation alone has infinitely many solutions: $(5, 5)$, $(7, 3)$, $(0, 10)$, $(6.5, 3.5)$… So does the second. What we want is the pair that satisfies **both** — and there is exactly one: $(6, 4)$, because $6 + 4 = 10$ and $6 - 4 = 2$.',
        },
        {
          type: 'definition',
          term: 'System of equations',
          text: 'A [[system-of-equations]] is a collection of equations in the same variables, considered together. A **solution** of a system in $x$ and $y$ is an [[ordered-pair]] $(x, y)$ that makes **every** equation true simultaneously.',
        },
        {
          type: 'derivation',
          title: 'Is $(3, 1)$ a solution of $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$?',
          steps: [
            { tex: '2(3) + 1 = 6 + 1 = 7 \\;\\checkmark', why: 'Substitute $x = 3$ and $y = 1$ into the **first** equation. Both sides equal $7$, so the first condition holds.' },
            { tex: '3 - 1 = 2 \\;\\checkmark', why: 'Now substitute into the **second** equation. It also holds.' },
          ],
          result: 'Both equations are true, so $(3, 1)$ is a solution. If even one equation had failed, it would not be.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "every equation" is the whole point',
          text: 'Each equation describes a *set* of points — the points that obey that one rule. A system asks for the points that obey all the rules, which is the **overlap** (intersection) of those sets. Checking only one equation is like checking only one of two passwords: necessary, but not enough.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Which ordered pair is a solution of the system?',
      tex: '\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}',
      hint: 'Plug each pair into **both** equations. A solution must pass both checks.',
      options: [
        { text: '$(2, 3)$', why: '$2(2) + 3 = 7$ works, but $2 - 3 = -1 \\ne 2$. It satisfies only the first equation.' },
        { text: '$(4, 2)$', why: '$4 - 2 = 2$ works, but $2(4) + 2 = 10 \\ne 7$. It satisfies only the second equation.' },
        { text: '$(3, 1)$', correct: true, why: '$2(3) + 1 = 7$ and $3 - 1 = 2$. Both equations hold, so this is the solution.' },
        { text: '$(1, -1)$', why: '$1 - (-1) = 2$ works, but $2(1) + (-1) = 1 \\ne 7$. Only the second equation holds.' },
      ],
      explanation: 'Every wrong option passes **one** of the two checks — that is exactly the trap. Lots of pairs satisfy each equation on its own; only $(3, 1)$ satisfies both at once. Always test a candidate in every equation of the system.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Solving by graphing: where the lines cross',
      blocks: [
        {
          type: 'p',
          text: 'In the last unit you learned that the solutions of a linear equation in $x$ and $y$ form a **line**. Every point on the line satisfies the equation, and no point off the line does. So a point satisfies *two* linear equations exactly when it lies on *both* lines — that is, where the lines **intersect**.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{cases} x + y = 5 \\\\ 2x - y = 1 \\end{cases}$ by graphing',
          steps: [
            { tex: 'x + y = 5 \\implies y = -x + 5', why: 'Rewrite the first equation in [[slope-intercept-form]] by subtracting $x$: slope $-1$, $y$-intercept $5$.' },
            { tex: '2x - y = 1 \\implies y = 2x - 1', why: 'Subtract $2x$ and multiply by $-1$: slope $2$, $y$-intercept $-1$.' },
            { tex: '\\text{The lines appear to cross at } (2, 3)', why: 'Graph both lines (see below) and read off the intersection point.' },
            { tex: '2 + 3 = 5 \\;\\checkmark \\qquad 2(2) - 3 = 1 \\;\\checkmark', why: 'A graph is only an estimate, so **check** the point in both original equations. It works.' },
          ],
          result: 'The solution is $(2, 3)$.',
        },
        {
          type: 'graph',
          x: [-3, 6],
          y: [-4, 8],
          functions: [
            { expr: '-x + 5', label: '$y = -x + 5$', color: 'blue' },
            { expr: 'm*x + b', label: '$y = mx + b$', color: 'red' },
          ],
          points: [{ x: '(5 - b)/(m + 1)', y: '5 - (5 - b)/(m + 1)', color: 'purple' }],
          sliders: [
            { name: 'm', min: -3, max: 3, step: 0.1, value: 2, label: 'slope $m$' },
            { name: 'b', min: -4, max: 6, step: 0.5, value: -1, label: 'intercept $b$' },
          ],
          readouts: [
            { label: 'intersection $x =$', expr: '(5 - b)/(m + 1)', digits: 3 },
            { label: 'intersection $y =$', expr: '5 - (5 - b)/(m + 1)', digits: 3 },
          ],
          caption: 'The blue line is fixed; drag the sliders to move the red one. The purple dot is the solution of the system. Try $m = -1$: the lines become parallel and the intersection disappears.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Graphs are estimates',
          text: 'Graphing is the best way to *see* a system, but it is a poor way to get exact answers. If the lines cross at $\\left(\\frac{7}{3}, \\frac{1}{3}\\right)$, no hand-drawn graph will tell you that. That is why we need algebraic methods — starting with substitution, later in this lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'If two lines on a carefully drawn graph appear to cross at $(1, 2)$, then $(1, 2)$ is guaranteed to be the exact solution of the system.',
      answer: false,
      explanation: 'A graph can only show the intersection to the accuracy of your drawing. The true crossing might be $(1.04, 1.98)$ or $\\left(1, \\frac{13}{6}\\right)$. A graphed answer becomes a *proven* answer only after you substitute it into both equations and both come out true.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'One, none, or infinitely many',
      blocks: [
        {
          type: 'p',
          text: 'Two lines in a plane can relate in only three ways, so a system of two linear equations has only three possible outcomes. You can predict which one by putting both equations in slope-intercept form and comparing slopes and intercepts.',
        },
        {
          type: 'table',
          headers: ['Lines', 'Slopes / intercepts', 'Number of solutions', 'Name'],
          rows: [
            ['Cross at one point', 'different slopes', 'exactly one', '[[consistent-system|consistent]], independent'],
            ['[[parallel-lines|Parallel]], never meet', 'same slope, different intercepts', 'none', '[[inconsistent-system|inconsistent]]'],
            ['The same line', 'same slope, same intercept', 'infinitely many', 'consistent, [[dependent-system|dependent]]'],
          ],
          caption: 'Two distinct lines cannot meet in exactly two points — so "exactly two solutions" is never possible for a linear system.',
        },
        {
          type: 'graph',
          x: [-4, 4],
          y: [-5, 7],
          functions: [
            { expr: '2x + 1', label: '$y = 2x + 1$', color: 'blue' },
            { expr: '2x - 2', label: '$y = 2x - 2$', color: 'red' },
          ],
          caption: 'Same slope $2$, different intercepts: the lines are parallel, so the system $y = 2x + 1$, $y = 2x - 2$ has **no solution**.',
        },
        {
          type: 'p',
          text: 'The infinitely-many case often hides in disguise. The equations $y = 3x - 2$ and $6x - 2y = 4$ look different, but solving the second for $y$ gives $-2y = -6x + 4$, so $y = 3x - 2$. They are the **same line** written two ways; every point on it is a solution.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why slopes decide everything',
          text: 'If the slopes differ, one line rises faster than the other, so somewhere they must cross — and since both are straight, they cross only once. If the slopes are equal, the vertical gap between the lines is the same everywhere: it is the difference of the intercepts. A constant gap of $0$ means the lines coincide; any other constant gap means they never touch.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'How many solutions does this system have?',
      tex: '\\begin{cases} y = 3x - 2 \\\\ 9x - 3y = 6 \\end{cases}',
      hint: 'Solve the second equation for $y$ and compare it with the first.',
      options: [
        { text: 'Exactly one, because the equations look different', why: 'Different-looking equations can describe the same line. Compare slopes and intercepts, not appearances.' },
        { text: 'None, because the lines have the same slope', why: 'Same slope means parallel **or** identical. Here the intercepts also match, so the lines coincide.' },
        { text: 'Infinitely many', correct: true, why: '$9x - 3y = 6$ gives $-3y = -9x + 6$, so $y = 3x - 2$: the same line as the first equation.' },
        { text: 'Exactly one: $(0, -2)$', why: '$(0, -2)$ is *a* solution, but so is $(1, 1)$, $(2, 4)$ and every other point on the line.' },
      ],
      explanation: 'Dividing $9x - 3y = 6$ by $-3$ gives $-3x + y = -2$, i.e. $y = 3x - 2$. Both equations describe one line, so the system is dependent and every point on $y = 3x - 2$ solves it. The second equation is just three times a rearrangement of the first — it adds no new information.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'The substitution method',
      blocks: [
        {
          type: 'p',
          text: 'To get exact answers we need algebra. The idea behind the [[substitution-method]] is simple: if one equation tells you that $y$ *equals* some expression in $x$, then anywhere you see $y$ in the other equation you may write that expression instead. That leaves one equation in one unknown — a problem you already know how to solve.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Isolate', text: 'Solve one equation for one variable (pick the easiest one — a variable with coefficient $1$ or $-1$).' },
            { title: 'Substitute', text: 'Replace that variable in the **other** equation with the expression, in parentheses.' },
            { title: 'Solve', text: 'Solve the resulting one-variable [[linear-equation]].' },
            { title: 'Back-substitute', text: 'Plug the value into the isolated expression to find the other variable.' },
            { title: 'Check', text: 'Verify the pair in **both** original equations.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{cases} y = 2x - 1 \\\\ 3x + 2y = 12 \\end{cases}$',
          steps: [
            { tex: '3x + 2(2x - 1) = 12', why: 'The first equation is already solved for $y$. Replace $y$ in the second equation with $(2x - 1)$ — the parentheses matter because the $2$ multiplies the whole expression.' },
            { tex: '3x + 4x - 2 = 12', why: 'Distribute the $2$ over both terms.' },
            { tex: '7x - 2 = 12', why: 'Combine like terms.' },
            { tex: '7x = 14 \\implies x = 2', why: 'Add $2$ to both sides, then divide by $7$.' },
            { tex: 'y = 2(2) - 1 = 3', why: 'Back-substitute $x = 2$ into the isolated equation $y = 2x - 1$ — it is the quickest one to use.' },
            { tex: '3(2) + 2(3) = 6 + 6 = 12 \\;\\checkmark', why: 'Check in the equation we have not used directly. The first equation holds by construction ($3 = 2 \\cdot 2 - 1$).' },
          ],
          result: 'The solution is $(2, 3)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why substitution is allowed',
          text: 'At the solution point, $y$ and $2x - 1$ are *the same number*. Replacing a quantity by something equal to it never changes whether an equation is true. So any $(x, y)$ that solves the system must make $3x + 2(2x - 1) = 12$ true — which forces $x = 2$. Substitution does not guess; it narrows the possibilities down to the only one left.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Solve the system by substitution. What is the value of $y$?',
      tex: '\\begin{cases} y = x + 4 \\\\ 2x + y = 1 \\end{cases}',
      hint: 'Replace $y$ in the second equation with $(x + 4)$, solve for $x$, then use $y = x + 4$.',
      label: '$y =$',
      answer: '3',
      explanation: 'Substituting gives $2x + (x + 4) = 1$, so $3x + 4 = 1$, $3x = -3$ and $x = -1$. Then $y = -1 + 4 = 3$. Check: $2(-1) + 3 = 1$ ✓. The solution is $(-1, 3)$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'When nothing is isolated yet',
      blocks: [
        {
          type: 'p',
          text: 'Most systems arrive in standard form $ax + by = c$, with no variable on its own. Your first job is to choose which variable to isolate. Look for a coefficient of $1$ or $-1$: isolating that variable needs no division, so no fractions appear.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{cases} 2x + 3y = 7 \\\\ x - 4y = -13 \\end{cases}$',
          steps: [
            { tex: 'x = 4y - 13', why: 'In the second equation $x$ has coefficient $1$, so isolate it: add $4y$ to both sides.' },
            { tex: '2(4y - 13) + 3y = 7', why: 'Substitute into the **first** equation. Never substitute back into the equation you just rearranged — you would get $4y - 13 - 4y = -13$, i.e. $-13 = -13$, which tells you nothing.' },
            { tex: '8y - 26 + 3y = 7', why: 'Distribute the $2$ to **both** terms inside the parentheses.' },
            { tex: '11y = 33 \\implies y = 3', why: 'Combine $8y + 3y = 11y$, add $26$ to both sides, divide by $11$.' },
            { tex: 'x = 4(3) - 13 = -1', why: 'Back-substitute into the isolated form $x = 4y - 13$.' },
            { tex: '2(-1) + 3(3) = 7 \\;\\checkmark \\qquad -1 - 4(3) = -13 \\;\\checkmark', why: 'Check in both original equations.' },
          ],
          result: 'The solution is $(-1, 3)$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong: dropping the parentheses',
            tone: 'bad',
            tex: ['3x - 2y = 5,\\; x = 5 - y', '3 \\cdot 5 - y - 2y = 5'],
            text: 'Only the $5$ got multiplied by $3$.',
          },
          right: {
            title: 'Right: substitute in parentheses',
            tone: 'good',
            tex: ['3(5 - y) - 2y = 5', '15 - 3y - 2y = 5'],
            text: 'The $3$ multiplies every term of the substituted expression.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Choosing what to isolate',
          text: 'If no coefficient is $\\pm 1$, substitution still works, but you will meet fractions such as $x = \\frac{7 - 3y}{2}$. That is fine — and it is exactly the situation where the next lesson\'s method, elimination, tends to be cleaner.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A student solves $\\begin{cases} x + y = 5 \\\\ 3x - 2y = 5 \\end{cases}$ by substitution. Tap the first line that is wrong.',
      lines: [
        '$x = 5 - y$',
        '$3(5 - y) - 2y = 5$',
        '$15 - y - 2y = 5$',
        '$15 - 3y = 5$',
        '$y = \\frac{10}{3}, \\quad x = \\frac{5}{3}$',
      ],
      errorLines: [3],
      explanation: 'Line 3 distributes the $3$ only onto the $5$: $3(5 - y)$ is $15 - 3y$, not $15 - y$. Correctly, $15 - 3y - 2y = 5$, so $-5y = -10$ and $y = 2$; then $x = 5 - 2 = 3$. Check: $3 + 2 = 5$ ✓ and $3(3) - 2(2) = 5$ ✓. The student\'s answer fails the check: $3 \\cdot \\frac{5}{3} - 2 \\cdot \\frac{10}{3} = -\\frac{5}{3} \\ne 5$ — which is why checking catches mistakes like this.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'Now solve the same system correctly. What is $x$?',
      tex: '\\begin{cases} x + y = 5 \\\\ 3x - 2y = 5 \\end{cases}',
      hint: 'Use $x = 5 - y$, distribute carefully to get $15 - 3y - 2y = 5$, then find $y$ first.',
      label: '$x =$',
      answer: '3',
      explanation: '$3(5 - y) - 2y = 5 \\implies 15 - 5y = 5 \\implies y = 2$, and then $x = 5 - y = 3$. The solution is $(3, 2)$. Both checks pass: $3 + 2 = 5$ and $9 - 4 = 5$.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'When the variable vanishes',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes, after you substitute and simplify, the variable cancels completely and you are left with a statement containing only numbers. Don\'t panic — this is the algebra telling you which of the three cases you are in.',
        },
        {
          type: 'derivation',
          title: 'Solve $\\begin{cases} y = 2x + 3 \\\\ 4x - 2y = 6 \\end{cases}$',
          steps: [
            { tex: '4x - 2(2x + 3) = 6', why: 'Substitute $y = 2x + 3$ into the second equation.' },
            { tex: '4x - 4x - 6 = 6', why: 'Distribute the $-2$ to both terms: $-2 \\cdot 2x = -4x$ and $-2 \\cdot 3 = -6$.' },
            { tex: '-6 = 6', why: 'The $x$-terms cancel, leaving a statement with no variables. It is **false**.' },
          ],
          result: 'No $(x, y)$ can make $-6 = 6$ true, so the system has **no solution**. (The second equation is $y = 2x - 3$: same slope as the first, different intercept — parallel lines.)',
        },
        {
          type: 'table',
          headers: ['After substituting you get…', 'Meaning', 'Solution set'],
          rows: [
            ['$x = $ a number', 'lines cross once', 'one ordered pair'],
            ['a false statement, like $-6 = 6$', 'parallel lines', 'none: $\\varnothing$'],
            ['a true statement, like $3 = 3$', 'the same line', 'every point on the line'],
          ],
        },
        {
          type: 'p',
          text: 'For infinitely many solutions, "every point" is not a useful final answer on its own. Write the set using one of the equations, e.g. $\\{(x, y) \\mid y = 2x + 1\\}$, or **parametrically**: let $x = t$ for any real number $t$, so the solutions are $(t,\\, 2t + 1)$. That second form — a free parameter generating all solutions — is exactly how linear algebra describes solution sets.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Line intersection in games',
          text: 'Raycasts, laser beams, and "will these two paths cross?" checks all solve a $2 \\times 2$ system. Game code first checks whether the lines are (nearly) parallel — the floating-point version of "the variable vanished" — with a test like `if (fabs(denominator) < 1e-9) return NO_HIT;`. Skipping that check divides by almost-zero and teleports objects across the map.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'fill',
      prompt: 'Solve $\\begin{cases} y = -2x + 1 \\\\ 6x + 3y = 3 \\end{cases}$ by substitution and complete the sentence.',
      template: 'Substituting gives $6x + 3(-2x + 1) = 3$, which simplifies to ___. That statement is always true, so the system has ___.',
      blanks: [{ answers: ['$3 = 3$'] }, { answers: ['infinitely many solutions'] }],
      wordBank: ['$3 = 3$', '$0 = 3$', '$x = 0$', 'infinitely many solutions', 'no solution', 'exactly one solution'],
      explanation: '$6x + 3(-2x + 1) = 6x - 6x + 3 = 3$, so the equation becomes $3 = 3$: true no matter what $x$ is. The second equation is $3y = -6x + 3$, i.e. $y = -2x + 1$ — the same line as the first. Every point $(t, -2t + 1)$ is a solution.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Application: the break-even point',
      blocks: [
        {
          type: 'p',
          text: 'A classic use of systems is comparing two linear costs. Suppose you are choosing cloud hosting for a game server. Plan A costs \\$30 a month plus \\$2 per GB of traffic; Plan B costs \\$10 a month plus \\$6 per GB. With $x$ = GB used and $y$ = monthly cost:',
        },
        {
          type: 'math',
          tex: '\\begin{cases} y = 30 + 2x & \\text{(Plan A)} \\\\ y = 10 + 6x & \\text{(Plan B)} \\end{cases}',
        },
        {
          type: 'derivation',
          title: 'When do the plans cost the same?',
          steps: [
            { tex: '30 + 2x = 10 + 6x', why: 'Both equations are solved for $y$, so substitute one into the other: set the two expressions equal. This is substitution in its simplest form.' },
            { tex: '20 = 4x', why: 'Subtract $10$ and subtract $2x$ from both sides.' },
            { tex: 'x = 5', why: 'Divide both sides by $4$.' },
            { tex: 'y = 30 + 2(5) = 40', why: 'Back-substitute into either equation. Check with Plan B: $10 + 6(5) = 40$ ✓.' },
          ],
          result: 'At $5$ GB both plans cost \\$40. That point $(5, 40)$ is the **break-even point**.',
        },
        {
          type: 'graph',
          x: [0, 10],
          y: [0, 80],
          yStep: 10,
          functions: [
            { expr: '30 + 2x', label: 'Plan A: $y = 30 + 2x$', color: 'blue' },
            { expr: '10 + 6x', label: 'Plan B: $y = 10 + 6x$', color: 'red' },
          ],
          points: [{ x: 5, y: 40, label: '(5, 40)' }],
          vlines: [{ x: 5, label: 'x = 5' }],
          caption: 'Left of $x = 5$ the red line is lower, so Plan B is cheaper for light use; right of it, Plan A wins. The intersection is where the decision flips.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Word problems on exams are graded on the **setup** as much as the arithmetic. State what each variable means (with units), write one equation per fact, solve, and finish with a sentence that answers the actual question ("Plan B is cheaper below 5 GB"), not just "$x = 5$".',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A streaming service offers two plans. Plan A costs \\$18 per month plus \\$0.50 per hour of 4K streaming. Plan B costs \\$6 per month plus \\$1.25 per hour. For how many hours of 4K streaming do the two plans cost the same?',
      hint: 'Write $y = 18 + 0.5x$ and $y = 6 + 1.25x$, then set them equal.',
      label: '$x =$',
      unit: 'hours',
      answer: '16',
      explanation: 'Set the costs equal: $18 + 0.5x = 6 + 1.25x$. Subtract $6$ and $0.5x$: $12 = 0.75x$, so $x = \\frac{12}{0.75} = 16$. At $16$ hours both plans cost $18 + 0.5(16) = 6 + 1.25(16) = \\$26$. Below 16 hours Plan B is cheaper; above it, Plan A.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Put the steps for solving $\\begin{cases} x - 2y = 1 \\\\ 3x + y = 10 \\end{cases}$ by substitution in order.',
      lines: [
        'Isolate $x$ in the first equation: $x = 2y + 1$',
        'Substitute into the second: $3(2y + 1) + y = 10$',
        'Simplify and solve: $7y + 3 = 10$, so $y = 1$',
        'Back-substitute: $x = 2(1) + 1 = 3$',
        'Check $(3, 1)$ in both original equations',
      ],
      distractors: ['Substitute into the first equation: $(2y + 1) - 2y = 1$'],
      explanation: 'Isolate, substitute into the **other** equation, solve, back-substitute, check. The distractor substitutes back into the equation $x = 2y + 1$ came from, which collapses to $1 = 1$ and gives no information. Final check: $3 - 2(1) = 1$ ✓ and $3(3) + 1 = 10$ ✓.',
    },
  ],
  takeaways: [
    'A solution of a system is an ordered pair that satisfies **every** equation; check candidates in all of them.',
    'Graphically, the solution of two linear equations is the intersection of their lines — useful for seeing, unreliable for exact values.',
    'Different slopes give exactly one solution; same slope and different intercepts give none; identical lines give infinitely many.',
    'Substitution: isolate a variable, substitute (in parentheses!) into the other equation, solve, back-substitute, check.',
    'If the variable cancels, a false statement ($-6 = 6$) means no solution and a true statement ($3 = 3$) means infinitely many.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 7.1 Systems of Linear Equations: Two Variables',
      url: 'https://openstax.org/books/college-algebra-2e/pages/7-1-systems-of-linear-equations-two-variables',
      source: 'openstax',
      note: 'Covers graphing, substitution and the three solution types, with many practice problems and break-even applications.',
    },
    {
      title: "Paul's Online Notes — Linear Systems with Two Variables",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/SystemsTwoVrble.aspx',
      source: 'paul',
      note: 'Concise worked examples of substitution, including the no-solution and infinitely-many cases.',
    },
    {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator',
      source: 'desmos',
      note: 'Type in both equations of any system and tap the intersection to see the solution point.',
    },
  ],
};
