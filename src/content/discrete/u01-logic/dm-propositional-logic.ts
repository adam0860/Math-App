import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-propositional-logic',
  title: 'Propositions and Logical Connectives',
  summary: 'Welcome to discrete math: the language of true and false that every algorithm, proof and `if` statement is written in.',
  minutes: 18,
  objectives: [
    'Explain what discrete mathematics studies and why computer science is built on it',
    'Decide whether a sentence is a proposition and combine propositions with $\\neg$, $\\land$, $\\lor$, $\\oplus$, $\\to$, $\\leftrightarrow$',
    'Build and read truth tables, and explain why $p \\to q$ is true whenever $p$ is false',
    'Form the converse, inverse and contrapositive of a conditional and know which one is equivalent to it',
    'Translate English sentences into logic, and logic into C++ conditions, including short-circuit evaluation',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Welcome to discrete mathematics',
      blocks: [
        {
          type: 'p',
          text: 'Calculus studies **continuous** things: quantities that flow smoothly, like position, area and temperature, where between any two values there is always another. **Discrete mathematics** studies things that come in separate, countable pieces: integers, true/false values, sets, lists, networks, steps of an algorithm. There is nothing between $3$ and $4$ in the integers, and nothing between "true" and "false".',
        },
        {
          type: 'p',
          text: 'That is exactly the world a computer lives in. Memory is a finite list of bits, a program runs one step at a time, and a game map is a grid of tiles. So every computer science degree requires a discrete math course, and it is the course that most changes how you think about code.',
        },
        {
          type: 'list',
          items: [
            '**Algorithms and data structures:** proving a sort is correct, counting how many steps it takes, knowing why binary search is $O(\\log n)$.',
            '**Cryptography:** RSA and every HTTPS connection run on modular arithmetic and prime numbers.',
            '**Databases:** a SQL `WHERE` clause is a logical formula, and tables are relations in the mathematical sense.',
            '**AI:** search trees, logic-based planning, and probability for reasoning under uncertainty.',
            '**Games:** pathfinding on graphs, finite-state machines for enemy AI, bit flags, loot-drop probabilities, shuffling and procedural generation.',
          ],
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 310" xmlns="http://www.w3.org/2000/svg"><line x1="225.0" y1="50.0" x2="295.0" y2="50.0" stroke="currentColor" stroke-width="1.6"/><path d="M295.0,50.0 L286.9,53.8 L286.9,46.2 Z" fill="currentColor"/><rect x="75" y="34" width="150" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="150" y="55" text-anchor="middle" font-size="13" class="t-blue">1  Logic</text><rect x="295" y="34" width="150" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="370" y="55" text-anchor="middle" font-size="13" class="t-blue">2  Proofs</text><rect x="7" y="122" width="118" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="66" y="143" text-anchor="middle" font-size="12" class="t-purple">3  Sets, relations</text><rect x="136" y="122" width="118" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="195" y="143" text-anchor="middle" font-size="12" class="t-purple">4  Number theory</text><rect x="265" y="122" width="118" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="324" y="143" text-anchor="middle" font-size="12" class="t-purple">5  Counting</text><rect x="394" y="122" width="118" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="453" y="143" text-anchor="middle" font-size="12" class="t-purple">6  Probability</text><rect x="7" y="210" width="118" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="66" y="231" text-anchor="middle" font-size="12" class="t-green">7  Big-O</text><rect x="136" y="210" width="118" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="195" y="231" text-anchor="middle" font-size="12" class="t-green">8  Recurrences</text><rect x="265" y="210" width="118" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="324" y="231" text-anchor="middle" font-size="12" class="t-green">9  Graphs</text><rect x="394" y="210" width="118" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="453" y="231" text-anchor="middle" font-size="12" class="t-green">10  Trees</text><rect x="135" y="268" width="250" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="260" y="289" text-anchor="middle" font-size="12" class="t-orange">11  Logic gates and machines</text><text x="7" y="18" text-anchor="start" font-size="11" class="t-gray">FOUNDATIONS: how to reason (this unit and the next)</text><text x="7" y="106" text-anchor="start" font-size="11" class="t-gray">STRUCTURES: what to reason about</text><text x="7" y="194" text-anchor="start" font-size="11" class="t-gray">ALGORITHMS: how fast, and on what</text></svg>',
          alt: 'Course roadmap: Logic and Proofs as foundations; Sets and relations, Number theory, Counting and Probability as structures; Big-O, Recurrences, Graphs and Trees as algorithms; and finally Logic gates and machines.',
          caption: 'The course in eleven units. Logic and proofs come first because every later unit uses them: each new fact about sets, numbers or graphs is *proved*, not just stated.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why start with logic?',
          text: 'Discrete math is a course about **reasoning**: how to be sure a statement is true for every input, not just the ten you tested. Logic is the grammar of that reasoning. Once you can read and write precise logical statements, proofs (Unit 2) are just careful chains of them, and every later topic becomes a chance to practice.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'A convention for this course',
          text: 'We write $\\mathbb{Z}$ for the [[integer|integers]], $\\mathbb{Q}$ for the rationals, $\\mathbb{R}$ for the reals, and $\\mathbb{N} = \\{0, 1, 2, 3, \\dots\\}$ for the natural numbers. Including $0$ is the usual choice in computer science (array indices start at $0$); some algebra books start $\\mathbb{N}$ at $1$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'concept',
      title: 'Propositions: sentences with a truth value',
      blocks: [
        {
          type: 'p',
          text: 'Logic does not care what a sentence is *about*. It cares only whether the sentence is true or false. The atoms of logic are [[dm-proposition|propositions]].',
        },
        {
          type: 'definition',
          term: 'Proposition',
          text: 'A **proposition** is a declarative sentence that is either true or false, but not both. Its **truth value** is written T or F (in code: `true`/`false`, or $1$/$0$).',
        },
        {
          type: 'table',
          headers: ['Sentence', 'Proposition?', 'Why'],
          rows: [
            ['$2 + 3 = 5$', 'Yes (true)', 'A definite claim that happens to be true.'],
            ['Paris is the capital of Spain.', 'Yes (false)', 'False propositions are still propositions.'],
            ['$x + 3 = 5$', 'No', 'Its truth depends on $x$. (Lesson 3 turns this into a *predicate*.)'],
            ['Reload your weapon.', 'No', 'A command is neither true nor false.'],
            ['Is the server up?', 'No', 'A question has no truth value.'],
            ['Every even integer greater than $2$ is a sum of two primes.', 'Yes', 'This is Goldbach\'s conjecture. Nobody knows *which* truth value it has, but it has exactly one.'],
          ],
        },
        {
          type: 'p',
          text: 'We name propositions with lowercase letters, $p, q, r, s, \\dots$, called **propositional variables**. For example, let $p$ be "the player has the key" and $q$ be "the door is open". Each one can be T or F, and we will build bigger statements out of them with **connectives**.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Propositions are `bool` values',
          text: 'A propositional variable is a `bool` in your head. Just as the compiler does not care whether `hasKey` means a key or a keycard, logic only tracks the value: T or F.',
        },
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'mcq',
      prompt: 'Which of these is a proposition?',
      options: [
        { text: '$x + 2 = 5$', why: 'Its truth value depends on $x$: true for $x = 3$, false otherwise. A sentence with a free variable is a predicate, not a proposition.' },
        { text: 'Respawn at the nearest checkpoint.', why: 'This is a command. It can be obeyed or ignored, but it is not true or false.' },
        { text: 'There are infinitely many twin primes.', correct: true, why: 'This is a definite claim about the integers. It is an unsolved problem, but the statement is either true or false, so it is a proposition.' },
        { text: 'Is $91$ prime?', why: 'A question has no truth value. The *answer* ("$91$ is prime") would be a proposition (a false one: $91 = 7 \\cdot 13$).' },
      ],
      explanation: 'A proposition must be a declarative sentence with exactly one truth value. Knowing *which* value it has is not required: open problems like the twin prime conjecture are perfectly good propositions. Commands, questions and sentences with unassigned variables are not.',
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'concept',
      title: 'Not, and, or, exclusive or',
      blocks: [
        {
          type: 'p',
          text: 'A **connective** builds a new proposition from old ones. Its meaning is completely described by a [[dm-truth-table|truth table]]: one row for each combination of truth values of the inputs.',
        },
        {
          type: 'table',
          headers: ['$p$', '$q$', '$\\neg p$', '$p \\land q$', '$p \\lor q$', '$p \\oplus q$'],
          rows: [
            ['T', 'T', 'F', 'T', 'T', 'F'],
            ['T', 'F', 'F', 'F', 'T', 'T'],
            ['F', 'T', 'T', 'F', 'T', 'T'],
            ['F', 'F', 'T', 'F', 'F', 'F'],
          ],
          caption: 'Negation ("not $p$"), conjunction ("$p$ and $q$"), disjunction ("$p$ or $q$") and [[dm-exclusive-or|exclusive or]] ("$p$ or $q$ but not both").',
        },
        {
          type: 'list',
          items: [
            '$\\neg p$ (**not** $p$) flips the truth value.',
            '$p \\land q$ (**and**) is true only when both are true.',
            '$p \\lor q$ (**or**) is true when at least one is true. This is the *inclusive* or: "T or T" counts.',
            '$p \\oplus q$ (**xor**) is true when exactly one is true: "soup or salad" on a menu usually means this.',
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a truth table with $n$ variables has $2^n$ rows',
          text: 'Each variable is T or F independently. One variable gives $2$ rows; adding a second variable splits each of those rows into two (once with the new variable T, once F), giving $4$; a third gives $8$. Every new variable doubles the count, so $n$ variables give $2^n$ rows. That doubling is why brute-force checking of logic formulas gets expensive fast: $40$ variables already means over a trillion rows.',
        },
        {
          type: 'p',
          text: 'To evaluate a compound statement, you need to know which connective applies first. The standard **precedence**, from tightest to loosest, is $\\neg$, then $\\land$, then $\\lor$ (and $\\oplus$), then $\\to$, then $\\leftrightarrow$. Parentheses override it, and good writers use them generously.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $\\neg p \\lor q \\land r$ when $p$ = T, $q$ = T, $r$ = F',
          steps: [
            { tex: '\\neg p \\lor q \\land r = (\\neg p) \\lor (q \\land r)', why: 'Insert parentheses by precedence: $\\neg$ binds tightest, then $\\land$, then $\\lor$.' },
            { tex: '= (\\neg \\text{T}) \\lor (\\text{T} \\land \\text{F})', why: 'Substitute the truth values.' },
            { tex: '= \\text{F} \\lor \\text{F}', why: '$\\neg$T is F, and an "and" with a false input is F.' },
            { tex: '= \\text{F}', why: 'An "or" is false only when both inputs are false, which they are.' },
          ],
          result: 'The statement is false. Reading it left to right as $(\\neg p \\lor q) \\land r$ would also give F here, but for other inputs (try $p$ = F, $q$ = F, $r$ = F) the two readings disagree, so precedence matters.',
        },
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'A game\'s quest system checks a condition built from $5$ boolean flags. How many rows does a full truth table for that condition have?',
      label: 'rows $=$',
      answer: '32',
      hint: 'Every flag doubles the number of rows.',
      explanation: 'Each of the $5$ flags is independently T or F, so the number of rows is $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 2^5 = 32$. A test suite that wants to cover every combination needs $32$ cases; with $20$ flags it would need $2^{20} = 1\\,048\\,576$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The conditional: if $p$ then $q$',
      blocks: [
        {
          type: 'p',
          text: 'The most important connective in mathematics is the [[dm-conditional|conditional]] $p \\to q$, read "if $p$, then $q$" or "$p$ implies $q$". Here $p$ is the **hypothesis** (or premise) and $q$ is the **conclusion**. Every theorem you will prove has this shape.',
        },
        {
          type: 'table',
          headers: ['$p$', '$q$', '$p \\to q$'],
          rows: [
            ['T', 'T', 'T'],
            ['T', 'F', '**F**'],
            ['F', 'T', 'T'],
            ['F', 'F', 'T'],
          ],
          caption: 'A conditional is false in exactly one row: the hypothesis is true and the conclusion is false.',
        },
        {
          type: 'p',
          text: 'The last two rows surprise almost everyone: when $p$ is false, $p \\to q$ is true no matter what $q$ is. We say the conditional is **vacuously true**. Think of it as a promise.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "if $p$ then $q$" is true when $p$ is false',
          text: 'Your squad leader says: "If you clear the building, you get leave this weekend." When is that promise **broken**? Only if you clear the building and do *not* get leave (row 2). If you never clear the building, the promise is not broken whether or not you get leave anyway; it simply was never tested. Logic calls an unbroken promise true.\n\nThere is also a mathematical reason. We want "for every integer $n$, if $n > 2$ then $n^2 > 4$" to be true. Plug in $n = 1$: "if $1 > 2$ then $1 > 4$" has a false hypothesis and a false conclusion. If that row counted as false, the theorem would fail at $n = 1$, which is absurd. Making false-hypothesis rows true is what lets "if" statements quantify over all inputs.',
        },
        {
          type: 'p',
          text: 'English has many ways to say $p \\to q$. All of these mean the same thing:',
        },
        {
          type: 'list',
          items: [
            'if $p$, then $q$ · $q$ if $p$ · $q$ whenever $p$',
            '$p$ implies $q$ · $p$ is **sufficient** for $q$ · $q$ is **necessary** for $p$',
            '$p$ **only if** $q$ (if $q$ fails, $p$ cannot hold)',
            '$q$ unless $\\neg p$',
          ],
        },
        {
          type: 'p',
          text: 'The [[dm-biconditional|biconditional]] $p \\leftrightarrow q$, read "$p$ if and only if $q$" (often written "iff"), is true when $p$ and $q$ have the **same** truth value. It means $p \\to q$ and $q \\to p$ both hold, so $p$ is necessary and sufficient for $q$. Its truth table is T, F, F, T: the exact negation of xor.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '"Only if" points the other way',
          text: '"You can play ranked **only if** you are level 30" means ranked $\\to$ level 30. Being level 30 is *necessary*, not sufficient: a level-30 player might still be banned. Writing it as level 30 $\\to$ ranked is the most common translation error in the course.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'truefalse',
      prompt: 'The proposition "If $2 + 2 = 5$, then the Moon is made of cheese" is true.',
      answer: true,
      explanation: 'The hypothesis $2 + 2 = 5$ is false, so the conditional is vacuously true. It does not matter that the conclusion is also false: a conditional is false only when its hypothesis is true and its conclusion false. Logic\'s "if" does not require any cause-and-effect connection between the two parts; it only constrains truth values.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Consider $(p \\lor q) \\to r$. In how many of the $8$ rows of its truth table is it **false**?',
      label: 'false rows $=$',
      answer: '3',
      hint: 'A conditional is false only when its hypothesis $p \\lor q$ is true and its conclusion $r$ is false.',
      explanation: 'The conditional fails exactly when $r$ = F and $p \\lor q$ = T. With $r$ = F there are $4$ rows for $(p, q)$, and $p \\lor q$ is true in $3$ of them (all but $p$ = F, $q$ = F). So $3$ rows are false and the other $5$ are true.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'Converse, inverse and contrapositive',
      blocks: [
        {
          type: 'p',
          text: 'From one conditional $p \\to q$ you can build three related ones by swapping and negating the parts:',
        },
        {
          type: 'table',
          headers: ['Name', 'Form', 'Example: "If an enemy is a boss, then it has a health bar."'],
          rows: [
            ['original', '$p \\to q$', 'If an enemy is a boss, then it has a health bar.'],
            ['[[dm-converse|converse]]', '$q \\to p$', 'If an enemy has a health bar, then it is a boss.'],
            ['inverse', '$\\neg p \\to \\neg q$', 'If an enemy is not a boss, then it has no health bar.'],
            ['[[dm-contrapositive|contrapositive]]', '$\\neg q \\to \\neg p$', 'If an enemy has no health bar, then it is not a boss.'],
          ],
        },
        {
          type: 'p',
          text: 'In a game where every boss has a health bar but so do some regular enemies, the original and the contrapositive are true, while the converse and the inverse are false. That is not a coincidence of this example. A truth table shows it always happens:',
        },
        {
          type: 'table',
          headers: ['$p$', '$q$', '$p \\to q$', '$\\neg q \\to \\neg p$', '$q \\to p$', '$\\neg p \\to \\neg q$'],
          rows: [
            ['T', 'T', 'T', 'T', 'T', 'T'],
            ['T', 'F', 'F', 'F', 'T', 'T'],
            ['F', 'T', 'T', 'T', 'F', 'F'],
            ['F', 'F', 'T', 'T', 'T', 'T'],
          ],
          caption: 'The original and contrapositive columns match row for row; so do the converse and inverse columns.',
        },
        {
          type: 'derivation',
          title: 'Checking row 2 of the contrapositive ($p$ = T, $q$ = F)',
          steps: [
            { tex: '\\neg q \\to \\neg p = \\neg\\text{F} \\to \\neg\\text{T}', why: 'Substitute $p$ = T and $q$ = F.' },
            { tex: '= \\text{T} \\to \\text{F}', why: 'Negate each value.' },
            { tex: '= \\text{F}', why: 'True hypothesis, false conclusion: the one false row of a conditional.' },
          ],
          result: 'Both $p \\to q$ and $\\neg q \\to \\neg p$ are false in exactly this row and true in the other three, so they are logically equivalent.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the contrapositive says the same thing',
          text: '$p \\to q$ says "it never happens that $p$ is true and $q$ is false." So if you see $q$ false, $p$ cannot be true: that is $\\neg q \\to \\neg p$. Both statements forbid the same single situation. The converse forbids a *different* situation ($q$ true, $p$ false), which is why it can fail while the original holds. Unit 2 uses this to prove theorems "by contrapositive".',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'fill',
      prompt: 'Complete the names for the conditional $p \\to q$.',
      template: 'The converse of $p \\to q$ is ___, and the statement that is logically equivalent to $p \\to q$ is its contrapositive ___.',
      blanks: [{ answers: ['$q \\to p$'] }, { answers: ['$\\neg q \\to \\neg p$'] }],
      wordBank: ['$q \\to p$', '$\\neg q \\to \\neg p$', '$\\neg p \\to \\neg q$', '$p \\to \\neg q$'],
      explanation: 'The converse swaps hypothesis and conclusion: $q \\to p$. The contrapositive swaps **and** negates both: $\\neg q \\to \\neg p$, and it has the same truth table as the original. $\\neg p \\to \\neg q$ is the inverse, which is equivalent to the converse, not to the original.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Translating English into logic',
      blocks: [
        {
          type: 'p',
          text: 'Specifications, game design documents and exam problems are written in English. Translating them into logic exposes ambiguity and makes them checkable. A reliable method:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Find the atoms', text: 'Identify the simplest true/false claims and give each a letter. Make each atom **positive** ("the alarm is on", not "the alarm is off") and use $\\neg$ for the negative.' },
            { title: 'Find the connectives', text: '"and", "but", "although" → $\\land$. "or" → $\\lor$ (use $\\oplus$ only if "but not both" is clearly meant). "if", "only if", "unless", "necessary", "sufficient" → $\\to$. "if and only if", "exactly when" → $\\leftrightarrow$.' },
            { title: 'Find the main connective', text: 'Ask what the sentence is *mostly* saying. "You may enter only if …" is a conditional whose conclusion is everything after "only if".' },
            { title: 'Check with a scenario', text: 'Pick a situation where the English is clearly false and confirm your formula is false there too.' },
          ],
        },
        {
          type: 'derivation',
          title: 'Translate: "You can open the vault only if you have the keycard and the alarm is not on."',
          steps: [
            { tex: 'v: \\text{you can open the vault}, \\; k: \\text{you have the keycard}, \\; a: \\text{the alarm is on}', why: 'Three atoms, each stated positively.' },
            { tex: '\\text{(not alarm on)} \\;\\equiv\\; \\neg a', why: 'The negative part becomes a negation of the positive atom.' },
            { tex: '\\text{keycard and not alarm} \\;\\equiv\\; k \\land \\neg a', why: '"and" is conjunction.' },
            { tex: 'v \\to (k \\land \\neg a)', why: '"$v$ only if $X$" means $v \\to X$: the condition after "only if" is *necessary* for $v$.' },
          ],
          result: 'Check: a thief who opens the vault without the keycard makes $v$ = T and $k \\land \\neg a$ = F, so the formula is F, exactly matching the broken rule.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: '"Unless" means "if not"',
          text: '"The turret fires unless you are cloaked" means: if you are **not** cloaked, the turret fires: $\\neg c \\to f$. That is equivalent to $c \\lor f$, which is often the easiest way to write "unless": $q$ unless $p$ is $p \\lor q$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Let $r$ = "you can play ranked", $l$ = "you are level 30" and $b$ = "you are banned". Translate: "You can play ranked only if you are level 30 and not banned."',
      options: [
        { text: '$(l \\land \\neg b) \\to r$', why: 'This is the converse. It says being level 30 and unbanned is *sufficient* to play ranked, but the sentence only says it is *necessary*.' },
        { text: '$r \\to (l \\land \\neg b)$', correct: true, why: '"$r$ only if $X$" means $r \\to X$: whenever you play ranked, you must be level 30 and unbanned.' },
        { text: '$r \\land l \\land \\neg b$', why: 'This asserts that you *are* playing ranked, are level 30 and are not banned. The sentence is a rule, not a report of facts.' },
        { text: '$r \\to l \\land b$', why: 'Two problems: the negation on "banned" is missing, and without parentheses the meaning relies on precedence. The sentence says *not* banned.' },
      ],
      explanation: '"Only if" introduces a **necessary** condition, which goes on the right of the arrow: $r \\to (l \\land \\neg b)$. Sanity check: a banned level-40 player who plays ranked makes $r$ = T and $l \\land \\neg b$ = F, so the formula is false, just as the rule is broken.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student evaluates $(q \\to r) \\leftrightarrow (p \\oplus q)$ for $p$ = T, $q$ = F, $r$ = F. Tap the first line that is wrong.',
      lines: [
        'Substitute: $(\\text{F} \\to \\text{F}) \\leftrightarrow (\\text{T} \\oplus \\text{F})$',
        '$\\text{F} \\to \\text{F}$ is F, because both parts are false',
        '$\\text{T} \\oplus \\text{F}$ is T, because exactly one part is true',
        '$\\text{F} \\leftrightarrow \\text{T}$ is F, so the whole statement is false',
      ],
      errorLines: [2],
      explanation: 'Line 2 is wrong: a conditional with a false hypothesis is vacuously **true**, so $\\text{F} \\to \\text{F}$ is T. Then the statement is $\\text{T} \\leftrightarrow \\text{T}$, which is T. The whole statement is **true**. Lines 3 and 4 are correct steps, but line 4 inherits the wrong value from line 2.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Logic in code: &&, ||, ! and short-circuit evaluation',
      blocks: [
        {
          type: 'p',
          text: 'C++ has the connectives built in: `!p` is $\\neg p$, `p && q` is $p \\land q$, `p || q` is $p \\lor q$, and for `bool` values `p != q` is $p \\oplus q$ and `p == q` is $p \\leftrightarrow q$. There is no `->` operator for implication; write $p \\to q$ as `!p || q` (the next lesson proves these are equivalent).',
        },
        {
          type: 'p',
          text: 'One important difference from pure logic: `&&` and `||` use **short-circuit evaluation**. They evaluate the left side first and skip the right side when the answer is already decided.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg"><line x1="90.0" y1="77.0" x2="90.0" y2="143.0" stroke="currentColor" stroke-width="2.6" class="s-red"/><path d="M90.0,143.0 L86.2,134.9 L93.8,134.9 Z" fill="currentColor" class="f-red"/><line x1="150.0" y1="60.0" x2="230.0" y2="60.0" stroke="currentColor" stroke-width="1.6"/><path d="M230.0,60.0 L221.9,63.8 L221.9,56.2 Z" fill="currentColor"/><line x1="350.0" y1="60.0" x2="385.0" y2="60.0" stroke="currentColor" stroke-width="1.6"/><path d="M385.0,60.0 L376.9,63.8 L376.9,56.2 Z" fill="currentColor"/><rect x="30" y="43" width="120" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90" y="65" text-anchor="middle" font-size="13">evaluate a</text><rect x="30" y="143" width="120" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="90" y="165" text-anchor="middle" font-size="13" class="t-red">result: false</text><rect x="230" y="43" width="120" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="290" y="65" text-anchor="middle" font-size="13">evaluate b</text><rect x="385" y="43" width="110" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="440" y="65" text-anchor="middle" font-size="13" class="t-green">result: b</text><text x="134.0" y="114.5" text-anchor="middle" font-size="13" class="t-red">a is false</text><text x="190.0" y="50.5" text-anchor="middle" font-size="13">a is true</text><text x="260" y="20" text-anchor="middle" font-size="14">How C++ evaluates  a &amp;&amp; b</text><text x="290" y="150" text-anchor="start" font-size="12" class="t-gray">b is never evaluated on the red path,</text><text x="290" y="168" text-anchor="start" font-size="12" class="t-gray">so any side effects in b do not happen.</text></svg>',
          alt: 'Flowchart: evaluate a. If a is false, the result is false and b is skipped. If a is true, evaluate b and the result is b.',
          caption: 'For `a && b`, a false `a` decides the answer. Symmetrically, for `a || b`, a true `a` decides it and `b` is skipped.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The guard pattern',
          text: 'Short-circuiting lets the left side **guard** the right side: `if (target != nullptr && target->hp > 0)` never dereferences a null pointer, and `if (i < v.size() && v[i] == key)` never reads past the end of the array. Swap the operands and both lines can crash. Logically $p \\land q \\equiv q \\land p$, but in code order matters when evaluating an operand can fail or has side effects.',
        },
        {
          type: 'code',
          title: 'logic.cpp',
          runnable: true,
          code: `#include <cstdio>

bool implies(bool p, bool q) { return !p || q; }

int calls = 0;
bool expensiveCheck() { ++calls; return true; }

int main() {
    // 1. Truth table for p -> q
    std::printf("p q | p->q\\n");
    for (int p = 1; p >= 0; --p)
        for (int q = 1; q >= 0; --q)
            std::printf("%d %d |  %d\\n", p, q, implies(p, q));

    // 2. Short-circuit: the right side runs only when needed
    bool alive = false;
    if (alive && expensiveCheck()) std::printf("never printed\\n");
    std::printf("calls after false && ...: %d\\n", calls);
    if (alive || expensiveCheck()) std::printf("calls after false || ...: %d\\n", calls);

    // 3. Logical vs bitwise
    int a = 2, b = 1;
    std::printf("a && b = %d,  a & b = %d\\n", a && b, a & b);
    std::printf("a ^ b = %d,  (a != 0) != (b != 0) = %d\\n", a ^ b, (a != 0) != (b != 0));
}`,
          output: `p q | p->q
1 1 |  1
1 0 |  0
0 1 |  1
0 0 |  1
calls after false && ...: 0
calls after false || ...: 1
a && b = 1,  a & b = 0
a ^ b = 3,  (a != 0) != (b != 0) = 0`,
          annotations: [
            { lines: 3, text: 'Implication has no operator in C++, so we write $p \\to q$ as $\\neg p \\lor q$.' },
            { lines: '10-13', text: 'Loop over all $2^2 = 4$ combinations to print the truth table (1 = T, 0 = F).' },
            { lines: 17, text: '`alive` is false, so `expensiveCheck()` is never called: `calls` stays $0$.' },
            { lines: 19, text: 'For `||` a false left side does not decide the answer, so the right side runs.' },
            { lines: '22-24', text: '`&`, `|`, `^` work bit by bit on the binary digits: $2 = 10_2$ and $1 = 01_2$ share no 1-bits, so `2 & 1` is $0$ even though both numbers are "truthy".' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Bitwise is not logical',
          text: '`&`, `|`, `^`, `~` are **bitwise** operators: they apply a connective to each pair of bits separately and never short-circuit. On `bool` operands `&` and `|` give the same truth values as `&&` and `||`, but on integers `2 & 1 == 0` while `2 && 1` is `true`. Also, `~` is not `!`: `~1` is $-2$ (nonzero, so still "true"). Unit 11 builds logic gates out of the bitwise operators on purpose.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'mcq',
      prompt: 'After this code runs, what are the values of `a`, `b` and `n`?',
      code: `int n = 0;
int flags = 6;                    // binary 110
bool a = flags & 1;               // bitwise AND
bool b = (flags > 0) || (++n > 0);`,
      options: [
        { text: '`a == true`, `b == true`, `n == 1`', why: '`6 & 1` is $0$, since the last bit of $110_2$ is $0$, so `a` is false. And `++n` never runs.' },
        { text: '`a == false`, `b == true`, `n == 0`', correct: true, why: '`6 & 1` tests the lowest bit, which is $0$; and `flags > 0` is true, so `||` short-circuits and `++n` is skipped.' },
        { text: '`a == false`, `b == true`, `n == 1`', why: 'Short-circuit evaluation skips the right side of `||` once the left side is true, so `n` is never incremented.' },
        { text: '`a == true`, `b == true`, `n == 0`', why: 'A nonzero `flags` does not make `flags & 1` nonzero. Bitwise AND with $1$ keeps only the lowest bit, which is $0$ for $6 = 110_2$.' },
      ],
      explanation: '`flags & 1` is a bitwise AND: $110_2 \\,\\&\\, 001_2 = 000_2 = 0$, so `a` is false (this is the standard "is it odd?" test, and $6$ is even). For `b`, the left operand `flags > 0` is already true, so `||` returns true without evaluating `++n`, and `n` stays $0$.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'truefalse',
      prompt: 'The converse of a true conditional is always true.',
      answer: false,
      explanation: '"If $n = 2$, then $n$ is even" is true, but its converse "if $n$ is even, then $n = 2$" is false ($n = 4$). The converse forbids a different situation than the original does. Only the **contrapositive** is guaranteed to have the same truth value as the original.',
    },
  ],
  takeaways: [
    'Discrete math studies countable structures (integers, logic values, sets, graphs, algorithms), which is why it underpins every area of computer science.',
    'A proposition is a sentence that is true or false. Connectives $\\neg, \\land, \\lor, \\oplus, \\to, \\leftrightarrow$ are defined by truth tables, and $n$ variables give $2^n$ rows.',
    '$p \\to q$ is false only when $p$ is true and $q$ is false; with a false hypothesis it is vacuously true.',
    'A conditional is equivalent to its contrapositive $\\neg q \\to \\neg p$, but not to its converse $q \\to p$ or inverse $\\neg p \\to \\neg q$.',
    '"$p$ only if $q$" means $p \\to q$; "$q$ unless $p$" means $p \\lor q$.',
    'In C++, `&&` and `||` short-circuit (use the left side as a guard); bitwise `&`, `|`, `^`, `~` act on bits and do not.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Section 0.2, Mathematical Statements)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'A free textbook whose opening sections cover atomic and molecular statements and the conditional, with many practice problems.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'MIT\'s discrete math course for CS majors; the first lectures and readings cover propositions and logic.',
    },
    {
      title: 'Wikipedia — Material conditional',
      url: 'https://en.wikipedia.org/wiki/Material_conditional',
      source: 'wikipedia',
      note: 'More on why logic\'s "if" is defined by truth values alone, and how that differs from everyday "if".',
    },
    {
      title: 'Wikipedia — Short-circuit evaluation',
      url: 'https://en.wikipedia.org/wiki/Short-circuit_evaluation',
      source: 'wikipedia',
      note: 'How different programming languages evaluate `and` and `or`, including the guard idiom.',
    },
  ],
};
