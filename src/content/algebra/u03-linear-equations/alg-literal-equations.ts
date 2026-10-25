import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'alg-literal-equations',
  title: 'Formulas and Word Problems',
  summary: 'Rearrange formulas to solve for any letter, then turn sentences into equations you can solve and check.',
  minutes: 17,
  objectives: [
    'Solve a formula (literal equation) for a specified variable and state when the result is valid',
    'Factor out the target variable when it appears in more than one term',
    'Translate English phrases such as "less than", "of" and "is" into algebra',
    'Solve word problems with a consistent method: define, write, solve, check, answer in context',
    'Set up rate (distance–speed–time) and percent problems without the classic traps',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Formulas are equations with more letters',
      blocks: [
        {
          type: 'p',
          text: 'A formula such as $P = 2l + 2w$ (the perimeter of a rectangle) is an equation that relates several quantities. Usually you are handed it solved for one letter, but the question you need answered is about another. An equation with several variables that you solve for one of them is called a [[literal-equation]].',
        },
        {
          type: 'p',
          text: 'Here is the good news: there is nothing new to learn. Every letter other than the one you are solving for is just a number you have not been told yet. So every move from the previous lesson — add to both sides, multiply both sides by something nonzero — works exactly as before.',
        },
        {
          type: 'derivation',
          title: 'Solve $P = 2l + 2w$ for $w$',
          steps: [
            { tex: 'P = 2l + 2w', why: 'Target: $w$. Treat $P$ and $l$ as if they were known numbers.' },
            { tex: 'P - 2l = 2w', why: 'Subtract $2l$ from both sides, leaving only the $w$-term on the right.' },
            { tex: '\\frac{P - 2l}{2} = w', why: 'Divide both sides by $2$, the coefficient of $w$. The whole left side is divided, so it goes over one fraction bar.' },
            { tex: 'w = \\frac{P - 2l}{2} = \\frac{P}{2} - l', why: 'Flip sides so the target is on the left (equality is symmetric). Splitting the fraction gives an equivalent form.' },
          ],
          result: 'A rectangle with perimeter $30$ and length $9$ has width $w = \\frac{30 - 18}{2} = 6$. Check: $2(9) + 2(6) = 30$. ✓',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why you must watch what you divide by',
          text: 'When you divide by a number like $2$, you know it is not zero. When you divide by a *letter*, you are dividing by an unknown number that might be zero. Solving $d = vt$ for $t$ gives $t = \\frac{d}{v}$, valid **only when $v \\ne 0$** — and physically that makes sense: an object with speed $0$ never covers any distance, so "how long does it take?" has no answer.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Rearranging formulas is everyday game code',
          text: 'Physics formulas come solved for the wrong variable all the time. An enemy at distance `d` moving at speed `v` reaches the player in `t = d / v` seconds; a projectile that must land in `t` seconds needs speed `v = d / t`. Rearranging on paper first — and guarding the division with `if (v != 0)` — is how you avoid both wrong answers and `inf` values in your game state.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'expr',
      prompt: 'The area of a triangle is $A = \\frac{1}{2}bh$. Solve for the height $h$. (Type `A` and `b` as variables.)',
      hint: 'Multiply both sides by $2$ first, then divide by $b$.',
      label: '$h =$',
      answer: '2A/b',
      answerTex: '\\frac{2A}{b}',
      variables: ['A', 'b'],
      domain: [0.5, 3],
      explanation: 'Multiply both sides by $2$ to clear the fraction: $2A = bh$. Divide both sides by $b$ (assuming $b \\ne 0$, which is true for any real triangle): $h = \\frac{2A}{b}$. Check with numbers: a triangle with base $4$ and height $5$ has $A = 10$, and $\\frac{2 \\cdot 10}{4} = 5$. ✓',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'truefalse',
      prompt: 'When solving a formula for one variable, dividing both sides by another variable is always a valid step.',
      answer: false,
      explanation: 'Division by a variable is valid only when that variable is not zero. For example, solving $d = vt$ for $t$ gives $t = \\frac{d}{v}$ only for $v \\ne 0$. Good answers state the restriction (or it is obvious from context, like a side length or a speed that must be positive).',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'When the target appears twice: factor it out',
      blocks: [
        {
          type: 'p',
          text: 'Sometimes the variable you want shows up in two different terms. You cannot isolate it by dividing until it appears only **once**. The fix is the [[distributive-property]] run backwards: collect all terms containing the target on one side, then factor it out.',
        },
        {
          type: 'p',
          text: 'Example: with simple interest, an amount $P$ invested at rate $r$ for $t$ years grows to $A = P + Prt$. Suppose you know the goal $A$ and want the investment $P$ that gets you there.',
        },
        {
          type: 'derivation',
          title: 'Solve $A = P + Prt$ for $P$',
          steps: [
            { tex: 'A = P + Prt', why: 'Both terms on the right contain $P$. All the $P$-terms are already on one side.' },
            { tex: 'A = P(1 + rt)', why: 'Factor $P$ out of both terms: $P \\cdot 1 + P \\cdot rt = P(1 + rt)$. Now $P$ appears exactly once.' },
            { tex: 'P = \\frac{A}{1 + rt}', why: 'Divide both sides by $1 + rt$. This is allowed because $1 + rt > 0$ for any nonnegative rate and time.' },
          ],
          result: 'To have \\$2600 after $4$ years at $r = 0.05$: $P = \\frac{2600}{1 + 0.2} \\approx \\$2166.67$.',
        },
        {
          type: 'compare',
          left: {
            title: 'Not solved',
            tone: 'bad',
            tex: ['P = A - Prt'],
            text: 'The target is still on both sides. This is a true equation, but it does not tell you what $P$ is.',
          },
          right: {
            title: 'Solved',
            tone: 'good',
            tex: ['P = \\dfrac{A}{1 + rt}'],
            text: 'The target appears once, alone, and everything else is known.',
          },
        },
        {
          type: 'p',
          text: 'The same move solves $ax + b = cx + d$ for $x$: collect $ax - cx = d - b$, factor $x(a - c) = d - b$, and divide by $a - c$ provided $a \\ne c$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'expr',
      prompt: 'Solve $kx + 5 = 2x + m$ for $x$ (assume $k \\ne 2$). Type `k` and `m` as variables.',
      hint: 'Get both $x$-terms on the left and the constants on the right, then factor out $x$.',
      label: '$x =$',
      answer: '(m - 5)/(k - 2)',
      answerTex: '\\frac{m - 5}{k - 2}',
      variables: ['k', 'm'],
      explanation: 'Subtract $2x$ and $5$ from both sides: $kx - 2x = m - 5$. Factor out $x$: $x(k - 2) = m - 5$. Divide by $k - 2$ (nonzero by assumption): $x = \\frac{m - 5}{k - 2}$. Equivalent forms like $\\frac{5 - m}{2 - k}$ are also correct. If $k = 2$, the equation becomes $5 = m$: an identity when $m = 5$ and a contradiction otherwise.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student solves $F = \\frac{9}{5}C + 32$ for $C$. Tap the first line that is wrong.',
      lines: [
        '$F = \\frac{9}{5}C + 32$',
        '$F - 32 = \\frac{9}{5}C$',
        '$5(F - 32) = 9C$',
        '$5F - 32 = 9C$',
        '$C = \\frac{5F - 32}{9}$',
      ],
      errorLines: [4],
      explanation: 'Line 4 distributes the $5$ to $F$ but not to $32$: $5(F - 32) = 5F - 160$. The correct result is $C = \\frac{5(F - 32)}{9} = \\frac{5}{9}(F - 32)$. A numeric check catches the slip instantly: water boils at $F = 212$, and the student\'s formula gives $\\frac{1060 - 32}{9} \\approx 114.2$, not the correct $100$.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Translating English into algebra',
      blocks: [
        {
          type: 'p',
          text: 'Word problems are mostly a translation exercise. A handful of phrases do most of the work, and almost all mistakes come from two of them: "less than" and "subtracted from", which **reverse** the order you read them in.',
        },
        {
          type: 'table',
          headers: ['English', 'Algebra', 'Note'],
          rows: [
            ['a number increased by $7$; $7$ more than $n$', '$n + 7$', 'order does not matter for $+$'],
            ['$5$ less than a number', '$n - 5$', '**reversed**: start with $n$, take away $5$'],
            ['$5$ subtracted from a number', '$n - 5$', '**reversed** as well'],
            ['a number decreased by $5$', '$n - 5$', 'read in order'],
            ['twice a number; the product of $2$ and $n$', '$2n$', '"times" and "product" mean multiply'],
            ['$15\\%$ of a number', '$0.15n$', '"of" means multiply'],
            ['the sum of a number and $4$, tripled', '$3(n + 4)$', 'the sum is formed first, so it needs parentheses'],
            ['is, equals, gives, results in', '$=$', 'the verb usually marks the equals sign'],
          ],
          caption: 'Read "$5$ less than $n$" as "the number that is $5$ below $n$" — that is $n - 5$, never $5 - n$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Test your translation with a number',
          text: 'Unsure whether "$5$ less than $x$" is $x - 5$ or $5 - x$? Try $x = 20$: five less than twenty is $15$, and $20 - 5 = 15$, while $5 - 20 = -15$. A one-number test settles most translation doubts.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Grouping words',
          text: '"Three times the sum of a number and $4$" is $3(n + 4)$, but "three times a number, plus $4$" is $3n + 4$. Words like *sum*, *difference* and *quantity* signal a group that must be computed first — so it goes in parentheses.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'mcq',
      prompt: 'Which equation says "Seven less than three times a number is $20$"?',
      options: [
        {
          text: '$7 - 3n = 20$',
          why: '"Less than" reverses order. This says "three times a number less than seven". Test with $n = 9$: $7 - 27 = -20$, not $20$.',
        },
        {
          text: '$3n - 7 = 20$',
          correct: true,
          why: 'Start with three times the number, $3n$, and take $7$ away: $3n - 7$. "Is" becomes $=$.',
        },
        {
          text: '$3(n - 7) = 20$',
          why: 'This would be "three times the difference of a number and seven". No grouping word appears in the sentence.',
        },
        {
          text: '$3n + 7 = 20$',
          why: '"Less than" means subtraction, not addition.',
        },
      ],
      explanation: '"Seven less than $X$" means $X - 7$, and here $X$ is "three times a number", $3n$. So the sentence is $3n - 7 = 20$, which gives $3n = 27$ and $n = 9$. Check in words: three times $9$ is $27$, and seven less than that is $20$. ✓',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'fill',
      prompt: '"When the sum of a number and $4$ is multiplied by $5$, the result is $35$." Translate and solve.',
      template: 'Equation: ___ . Solution: ___ .',
      blanks: [{ answers: ['$5(n + 4) = 35$'] }, { answers: ['$n = 3$'] }],
      wordBank: ['$5(n + 4) = 35$', '$5n + 4 = 35$', '$n = 3$', '$n = \\frac{31}{5}$', '$n = 11$'],
      explanation: 'The *sum* $n + 4$ is formed first and then multiplied by $5$, so it needs parentheses: $5(n + 4) = 35$. Divide by $5$: $n + 4 = 7$, so $n = 3$. The distractor $5n + 4 = 35$ (no parentheses) leads to $n = \\frac{31}{5}$, a sign the grouping was lost. Check: $(3 + 4) \\cdot 5 = 35$. ✓',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'A method for any word problem',
      blocks: [
        {
          type: 'p',
          text: 'The hard part of a word problem is not the algebra — it is turning a paragraph into one equation. A fixed routine removes the guesswork.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Define the variable', text: 'Write a sentence: "Let $q$ = the number of quests." Include units. Vague variables cause most setup errors.' },
            { title: 'Express the other quantities', text: 'Write everything else the problem mentions in terms of that variable.' },
            { title: 'Write one equation', text: 'Find the sentence that says two things are equal and translate it.' },
            { title: 'Solve', text: 'Use the techniques of the previous lesson.' },
            { title: 'Check and answer in context', text: 'Check against the **words** (not your equation, which might be wrong), round sensibly, and answer the question that was asked, with units.' },
          ],
        },
        {
          type: 'derivation',
          title: 'A player has $340$ XP and earns $45$ XP per quest. How many quests until reaching level-up at $1000$ XP?',
          steps: [
            { tex: '\\text{Let } q = \\text{number of quests}', why: 'Step 1: name the unknown, with what it counts.' },
            { tex: '\\text{XP after } q \\text{ quests} = 340 + 45q', why: 'Step 2: start value plus $45$ for each quest.' },
            { tex: '340 + 45q = 1000', why: 'Step 3: "reach $1000$ XP" is the equality.' },
            { tex: '45q = 660', why: 'Step 4: subtract $340$ from both sides.' },
            { tex: 'q = \\frac{660}{45} = 14.\\overline{6}', why: 'Divide both sides by $45$.' },
            { tex: 'q = 15 \\text{ quests}', why: 'Step 5: quests come in whole numbers, and $14$ quests gives only $340 + 630 = 970$ XP. So round **up**. Check: $340 + 45 \\cdot 15 = 1015 \\ge 1000$. ✓' },
          ],
          result: 'The player needs $15$ quests. The exact solution $14.\\overline{6}$ is not the answer to the question.',
        },
        {
          type: 'graph',
          x: [0, 20],
          y: [0, 1400],
          yStep: 200,
          functions: [{ expr: '340 + 45x', label: 'XP $= 340 + 45q$', color: 'blue' }],
          hlines: [{ y: 1000, label: 'level-up: 1000', color: 'red' }],
          points: [{ x: 'q', y: '340 + 45q', label: 'after q quests' }],
          sliders: [{ name: 'q', min: 0, max: 20, step: 1, value: 14, label: 'quests completed $q$' }],
          readouts: [{ label: 'XP $=$', expr: '340 + 45q', digits: 0 }],
          caption: 'Step $q$ from $14$ to $15$: the point crosses the red line. Only whole-number values of $q$ make sense here.',
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'Answer the question asked',
          text: 'Graders deduct for answering "$q = 14.67$" when the question asked "how many quests?" Read the last sentence of the problem again before writing your final answer, and include units.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: 'The length of a rectangle is $3$ cm more than twice its width. The perimeter is $54$ cm. Find the width.',
      hint: 'Let $w$ = width. Then length $= 2w + 3$, and $P = 2l + 2w$.',
      label: 'width $=$',
      unit: 'cm',
      answer: '8',
      explanation: 'Let $w$ be the width; the length is $2w + 3$. Perimeter: $2(2w + 3) + 2w = 54$, so $4w + 6 + 2w = 54$, $6w = 48$, $w = 8$. The length is $2(8) + 3 = 19$ cm. Check against the words: $19$ is $3$ more than twice $8$ ✓, and $2(19) + 2(8) = 54$ ✓.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Put the word-problem routine in order.',
      lines: [
        'Define a variable for the unknown, with units',
        'Write the other quantities in terms of that variable',
        'Translate the "is equal" sentence into one equation',
        'Solve the equation',
        'Check against the original words and answer in context',
      ],
      distractors: ['Check the solution against the equation you wrote'],
      explanation: 'Define → express → equate → solve → check. The distractor is a weak check: if the equation itself is mistranslated, your answer will satisfy it perfectly and still be wrong. Checking against the original *words* catches setup errors as well as arithmetic ones.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Rates and percents',
      blocks: [
        {
          type: 'heading',
          text: 'Motion: distance = rate × time',
        },
        {
          type: 'p',
          text: 'Uniform-motion problems all rest on $d = rt$. When two objects are involved, make a small table with a row for each, fill in what you know in terms of one variable, and look for the relationship between the distances.',
        },
        {
          type: 'table',
          headers: ['Rider', 'rate (km/h)', 'time (h)', 'distance (km)'],
          rows: [
            ['Friend (left 1 h earlier)', '$12$', '$t + 1$', '$12(t + 1)$'],
            ['You', '$18$', '$t$', '$18t$'],
          ],
          caption: 'You start cycling one hour after your friend, on the same route. When do you catch up?',
        },
        {
          type: 'derivation',
          title: 'When do you catch your friend?',
          steps: [
            { tex: '18t = 12(t + 1)', why: 'Catching up means you have both covered the **same distance** from the start.' },
            { tex: '18t = 12t + 12', why: 'Distribute.' },
            { tex: '6t = 12', why: 'Subtract $12t$ from both sides.' },
            { tex: 't = 2', why: 'Divide by $6$. Check: you ride $18 \\cdot 2 = 36$ km; your friend rides $12 \\cdot 3 = 36$ km. ✓' },
          ],
          result: 'You catch up $2$ hours after you start, $36$ km down the road. Notice you gain $18 - 12 = 6$ km/h on a $12$ km head start: $\\frac{12}{6} = 2$ h.',
        },
        {
          type: 'heading',
          text: 'Percents: always ask "percent of what?"',
        },
        {
          type: 'p',
          text: 'A $20\\%$ discount means you pay $80\\%$ **of the original price** $p$: $0.8p$. If you know the sale price, solve for $p$ — do not just add $20\\%$ of the sale price back.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why adding the percent back fails',
          text: 'The $20\\%$ was taken from the *original* price, a bigger number than the sale price. So $20\\%$ of the sale price is smaller than the amount that was removed, and adding it back undershoots. Percent changes are multiplications, and the inverse of multiplying by $0.8$ is dividing by $0.8$ — not multiplying by $1.2$, because $0.8 \\times 1.2 = 0.96 \\ne 1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'numeric',
      prompt: 'Two trains start $390$ km apart and travel toward each other on parallel tracks, one at $70$ km/h and the other at $60$ km/h. After how many hours do they meet?',
      hint: 'When they meet, the two distances add up to $390$ km.',
      label: '$t =$',
      unit: 'hours',
      answer: '3',
      explanation: 'Let $t$ be the time in hours. The trains cover $70t$ and $60t$ km, and together they close the full gap: $70t + 60t = 390$. So $130t = 390$ and $t = 3$. Check: $210 + 180 = 390$ km. ✓ The idea "their speeds add when moving toward each other" is the same closing-speed reasoning games use for collision timing.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'After a $20\\%$ discount, a game costs \\$36. What was the original price?',
      options: [
        {
          text: '\\$43.20',
          why: 'This adds $20\\%$ of the *sale* price back ($36 \\times 1.2$). But the discount was $20\\%$ of the original, a larger number. Check: $20\\%$ off \\$43.20 is \\$34.56, not \\$36.',
        },
        {
          text: '\\$28.80',
          why: 'This takes another $20\\%$ off the sale price ($36 \\times 0.8$). The original must be *more* than the sale price.',
        },
        {
          text: '\\$30',
          why: 'This divides by $1.2$, which makes the price smaller. The original price must be larger than \\$36.',
        },
        {
          text: '\\$45',
          correct: true,
          why: 'The sale price is $80\\%$ of the original: $0.8p = 36$, so $p = \\frac{36}{0.8} = 45$.',
        },
      ],
      explanation: 'Let $p$ be the original price. Paying $80\\%$ of it gives $0.8p = 36$, so $p = 45$. Check against the words: $20\\%$ of \\$45 is \\$9, and $45 - 9 = 36$. ✓',
    },
  ],
  takeaways: [
    'A literal equation is solved with the same moves as any linear equation: treat the other letters as numbers.',
    'If the target variable appears in several terms, collect them on one side and factor it out before dividing.',
    'Dividing by a variable expression requires it to be nonzero; state that restriction.',
    '"Less than" and "subtracted from" reverse word order: $5$ less than $n$ is $n - 5$.',
    'For word problems: define the variable, express everything in terms of it, write one equation, solve, and check against the original words.',
    'Percent changes multiply: a sale price after $20\\%$ off is $0.8p$, so undo it by dividing by $0.8$.',
  ],
  reading: [
    {
      title: 'OpenStax College Algebra 2e — 2.3 Models and Applications',
      url: 'https://openstax.org/books/college-algebra-2e/pages/2-3-models-and-applications',
      source: 'openstax',
      note: 'Many more word problems (rates, perimeter, cost models) worked with the same setup-first method.',
    },
    {
      title: "Paul's Online Notes — Solving Formulas",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/SolveMultiVariable.aspx',
      source: 'paul',
      note: 'Practice solving formulas for a specified variable, including cases where the target must be factored out.',
    },
    {
      title: "Paul's Online Notes — Applications of Linear Equations",
      url: 'https://tutorial.math.lamar.edu/Classes/Alg/LinearApps.aspx',
      source: 'paul',
      note: 'Distance–rate–time, mixture, and work problems with clear tables.',
    },
  ],
};
