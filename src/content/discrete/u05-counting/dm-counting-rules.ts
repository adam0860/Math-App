import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-counting-rules',
  title: 'The Product Rule, Sum Rule and Pigeonhole Principle',
  summary: 'The two rules every count is built from, the subtraction rule that repairs double counting, tree diagrams for choices that depend on each other, and the pigeonhole principle — which proves that collisions must exist.',
  minutes: 18,
  objectives: [
    'Apply the product rule to sequences of choices (passwords, license plates, nested loops) and state exactly when it is valid',
    'Apply the sum rule to disjoint cases and the subtraction rule to overlapping ones, including counting "at least one" by complement',
    'Use a tree diagram when the number of options at a step depends on earlier choices',
    'State and prove the pigeonhole principle and its generalized form, and use them to prove that collisions (shared birthdays, hash collisions) must occur',
    'Decide which rule a counting problem needs, and check that every object is counted exactly once',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'The product rule: choices in sequence multiply',
      blocks: [
        {
          type: 'p',
          text: 'Counting is one of the most useful skills in computer science: how many passwords must an attacker try, how many times does this loop body run, how many states can this game be in? This unit teaches you to count **without listing**, and to prove your count is right. Everything rests on two simple rules. The first is the [[multiplication-principle|product rule]].',
        },
        {
          type: 'theorem',
          name: 'The product rule',
          text: 'Suppose a procedure consists of a sequence of $k$ steps, and step $i$ can be done in $n_i$ ways **no matter how the earlier steps were done**. Then the whole procedure can be done in $n_1 \\cdot n_2 \\cdots n_k$ ways. In the language of sets: $|A_1 \\times A_2 \\times \\cdots \\times A_k| = |A_1| \\cdot |A_2| \\cdots |A_k|$.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 290" xmlns="http://www.w3.org/2000/svg"><line x1="45.7" y1="161.0" x2="147.8" y2="88.7" stroke="currentColor" stroke-width="1.6"/><line x1="174.8" y1="77.7" x2="287.2" y2="60.0" stroke="currentColor" stroke-width="1.6"/><line x1="174.8" y1="82.3" x2="287.2" y2="100.0" stroke="currentColor" stroke-width="1.6"/><line x1="47.0" y1="165.0" x2="145.0" y2="165.0" stroke="currentColor" stroke-width="1.6"/><line x1="174.8" y1="162.7" x2="287.2" y2="145.0" stroke="currentColor" stroke-width="1.6"/><line x1="174.8" y1="167.3" x2="287.2" y2="185.0" stroke="currentColor" stroke-width="1.6"/><line x1="45.7" y1="169.0" x2="147.8" y2="241.3" stroke="currentColor" stroke-width="1.6"/><line x1="174.8" y1="247.7" x2="287.2" y2="230.0" stroke="currentColor" stroke-width="1.6"/><line x1="174.8" y1="252.3" x2="287.2" y2="270.0" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="165" r="7" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="80" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="160" y="85" text-anchor="middle" font-size="14" class="t-blue">A</text><circle cx="300" cy="58" r="13" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="300" y="63" text-anchor="middle" font-size="14" class="t-orange">0</text><circle cx="300" cy="102" r="13" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="300" y="107" text-anchor="middle" font-size="14" class="t-orange">1</text><circle cx="160" cy="165" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="160" y="170" text-anchor="middle" font-size="14" class="t-blue">B</text><circle cx="300" cy="143" r="13" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="300" y="148" text-anchor="middle" font-size="14" class="t-orange">0</text><circle cx="300" cy="187" r="13" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="300" y="192" text-anchor="middle" font-size="14" class="t-orange">1</text><circle cx="160" cy="250" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="160" y="255" text-anchor="middle" font-size="14" class="t-blue">C</text><circle cx="300" cy="228" r="13" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="300" y="233" text-anchor="middle" font-size="14" class="t-orange">0</text><circle cx="300" cy="272" r="13" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="300" y="277" text-anchor="middle" font-size="14" class="t-orange">1</text><text x="160" y="22" text-anchor="middle" font-size="13" class="t-blue">1st char: 3 ways</text><text x="320" y="22" text-anchor="middle" font-size="13" class="t-orange">2nd char: 2 ways</text><text x="350" y="63" text-anchor="start" font-size="14">A0</text><text x="350" y="107" text-anchor="start" font-size="14">A1</text><text x="350" y="148" text-anchor="start" font-size="14">B0</text><text x="350" y="192" text-anchor="start" font-size="14">B1</text><text x="350" y="233" text-anchor="start" font-size="14">C0</text><text x="350" y="277" text-anchor="start" font-size="14">C1</text><text x="440" y="170" text-anchor="middle" font-size="15" class="t-green">3 · 2 = 6</text><text x="440" y="190" text-anchor="middle" font-size="12" class="t-gray">leaves</text></svg>',
          alt: 'A tree diagram. A root splits into three branches labeled A, B and C; each of those splits into two branches labeled 0 and 1, giving six leaves A0, A1, B0, B1, C0, C1.',
          caption: 'Two-character codes: a letter from $\\{A, B, C\\}$, then a bit. Each of the $3$ first choices sprouts the **same number** ($2$) of second choices, so there are $3 \\cdot 2 = 6$ leaves — one per code.',
          maxWidth: 460,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why multiply?',
          text: 'Group the outcomes by their first step. There are $n_1$ groups, and each group contains the same number of outcomes — the number of ways to finish the remaining steps. Adding $n_1$ equal numbers is multiplication. Repeat the argument for the remaining steps (formally, induction on $k$). Notice what the hypothesis really needs: the **number** of options at each step must not depend on earlier choices. The options themselves may change — that is why "pick two *different* letters" still gives $26 \\cdot 25$: the second letter has a different menu each time, but always $25$ items on it.',
        },
        {
          type: 'derivation',
          title: 'How many license plates have 3 letters followed by 4 digits?',
          steps: [
            { tex: '\\underbrace{26 \\cdot 26 \\cdot 26}_{\\text{letters}} \\cdot \\underbrace{10 \\cdot 10 \\cdot 10 \\cdot 10}_{\\text{digits}}', why: 'Seven steps: fill each position in turn. Letters may repeat, so each letter slot always has $26$ options and each digit slot $10$.' },
            { tex: '= 26^3 \\cdot 10^4', why: 'Collect the equal factors as powers.' },
            { tex: '= 17{,}576 \\cdot 10{,}000 = 175{,}760{,}000', why: '$26^3 = 17{,}576$.' },
          ],
          result: 'There are $175{,}760{,}000$ such plates — enough for a large country without ever listing one.',
        },
        {
          type: 'p',
          text: 'Two patterns come up constantly. A **string of length $n$ over an alphabet of $m$ symbols** can be formed in $m^n$ ways: four lowercase letters give $26^4 = 456{,}976$ passwords. And there are $2^n$ bit strings of length $n$ — which is also the number of subsets of an $n$-element set, because a subset is exactly a choice of "in" or "out" for each element.',
        },
        {
          type: 'code',
          title: 'nested loops multiply',
          code: `long long count = 0;
for (int i = 0; i < 26; ++i)        // 26 iterations
    for (int j = 0; j < 26; ++j)    // 26 per value of i
        for (int k = 0; k < 10; ++k) // 10 per (i, j)
            ++count;                 // runs 26 * 26 * 10 = 6760 times`,
          annotations: [
            { lines: '2-4', text: 'Each loop\'s trip count does not depend on the outer indices, so the product rule applies directly.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'How many bit strings of length $8$ begin with $1$ **and** end with $00$?',
      hint: 'Three positions are forced. How many are free?',
      label: 'count $=$',
      answer: '32',
      explanation: 'The first bit has $1$ option, the last two bits have $1$ option each, and the five middle bits have $2$ options each. By the product rule: $1 \\cdot 2^5 \\cdot 1 \\cdot 1 = 32$. A brute-force loop over all $256$ strings confirms it. Forced positions contribute a factor of $1$ — they do not disappear from the count, they just do not multiply it.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The sum rule: disjoint cases add',
      blocks: [
        {
          type: 'p',
          text: 'The second rule handles **either–or** situations. If you must do one thing *or* another, and no outcome can be produced both ways, you add.',
        },
        {
          type: 'theorem',
          name: 'The sum rule',
          text: 'If a task can be done in one of $n_1$ ways **or** in one of $n_2$ ways, where none of the $n_1$ ways is the same as any of the $n_2$ ways, then there are $n_1 + n_2$ ways to do the task. In sets: if $A \\cap B = \\emptyset$, then $|A \\cup B| = |A| + |B|$ (and likewise for any number of pairwise disjoint sets).',
        },
        {
          type: 'p',
          text: 'The [[dm-sum-rule|sum rule]] is what you use when you **split a problem into cases**. The cases must not overlap, and together they must cover everything. Most real counts mix both rules: split into cases (add), and count each case as a sequence of steps (multiply).',
        },
        {
          type: 'derivation',
          title: 'An old-style variable name is a letter, or a letter followed by a digit. How many names are there?',
          steps: [
            { tex: '\\text{one character: } 26', why: 'Case 1: a single letter.' },
            { tex: '\\text{two characters: } 26 \\cdot 10 = 260', why: 'Case 2: a letter, then a digit — the product rule inside the case.' },
            { tex: '26 + 260 = 286', why: 'The cases are disjoint (a name has one length or the other), so the sum rule applies.' },
          ],
          result: 'There are $286$ possible names.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Branches add, nesting multiplies',
          text: 'In code, the two rules are visible in the shape of loops. Two loops **one after the other** run $n + m$ times in total (sum rule: each iteration belongs to exactly one loop). A loop **inside** another runs $n \\cdot m$ times (product rule). An `if`/`else` that runs one of two loops runs $n$ or $m$ times, depending on the branch. You will turn exactly this reasoning into running-time formulas in the algorithms unit.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'How many times does `tick()` run?',
      code: `for (int i = 0; i < 10; ++i)
    for (int j = 0; j < 20; ++j)
        tick();
for (int k = 0; k < 5; ++k)
    tick();`,
      lang: 'cpp',
      options: [
        { text: '$35$', why: 'That adds all three trip counts, $10 + 20 + 5$. But the $j$-loop is *nested* inside the $i$-loop, so its $20$ iterations happen for each of the $10$ values of $i$.' },
        { text: '$205$', correct: true, why: 'The nested pair runs $10 \\cdot 20 = 200$ times (product rule); the separate loop adds $5$ more (sum rule, since every call comes from exactly one of the two loop nests).' },
        { text: '$1000$', why: 'That multiplies all three, $10 \\cdot 20 \\cdot 5$. The $k$-loop runs *after* the nested pair, not inside it, so its count is added, not multiplied.' },
        { text: '$250$', why: 'That is $10 \\cdot (20 + 5)$, which would be right if the $k$-loop were inside the $i$-loop. Check the indentation: it is not.' },
      ],
      explanation: 'Nesting multiplies, sequencing adds: $10 \\cdot 20 + 5 = 205$. Reading code this way — "which loops are inside which?" — is exactly how you will analyze running times later.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Overlaps: the subtraction rule and counting the complement',
      blocks: [
        {
          type: 'p',
          text: 'The sum rule demands disjoint cases. When the cases overlap, adding counts the shared outcomes **twice**. The fix is to subtract them once.',
        },
        {
          type: 'theorem',
          name: 'The subtraction rule (inclusion–exclusion for two sets)',
          tex: '|A \\cup B| = |A| + |B| - |A \\cap B|',
          text: 'Every element of $A \\cap B$ is counted once in $|A|$ and once in $|B|$; subtracting $|A \\cap B|$ leaves it counted exactly once. Elements in only one set were counted once and are not subtracted.',
        },
        {
          type: 'derivation',
          title: 'How many bit strings of length 8 start with 1 **or** end with 00?',
          steps: [
            { tex: '|A| = 2^7 = 128', why: '$A$ = strings starting with $1$: the first bit is forced, the other $7$ are free.' },
            { tex: '|B| = 2^6 = 64', why: '$B$ = strings ending with $00$: two bits forced, $6$ free.' },
            { tex: '|A \\cap B| = 2^5 = 32', why: 'Strings that do both: three bits forced, $5$ free (the question you just answered).' },
            { tex: '|A \\cup B| = 128 + 64 - 32 = 160', why: 'Subtraction rule: the $32$ strings in both sets were counted twice.' },
          ],
          result: '$160$ strings. Plain addition would have said $192$ — wrong by exactly the overlap.',
        },
        {
          type: 'heading',
          text: '"At least one": count what you don\'t want',
        },
        {
          type: 'p',
          text: 'A password of $6$ characters, each an uppercase letter or a digit, must contain **at least one digit**. "At least one" splits into many overlapping cases (one digit, two digits, …). It is far easier to count the **complement**: all strings minus the strings with *no* digit.',
        },
        {
          type: 'math',
          tex: '36^6 - 26^6 = 2{,}176{,}782{,}336 - 308{,}915{,}776 = 1{,}867{,}866{,}560',
          caption: 'All strings over $36$ symbols, minus those using only the $26$ letters.',
        },
        {
          type: 'compare',
          left: {
            title: 'Overcounts',
            tone: 'bad',
            text: 'Choose a position for "the" digit ($6$ ways), choose that digit ($10$), fill the other $5$ positions with anything ($36^5$). The string `A1B2CD` is produced twice — once with position 2 as "the" digit, once with position 4 — so every string with two or more digits is counted several times.',
          },
          right: {
            title: 'Counts each string once',
            tone: 'good',
            text: 'Total minus "no digits": $36^6 - 26^6$. Each string either has no digit or has at least one, never both — so the subtraction is exact.',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          title: 'The test for any counting method',
          text: 'Instructors check one thing above all: **is every object counted exactly once?** Take one concrete object (like `A1B2CD`) and ask how many ways your procedure can produce it. If the answer is not always $1$, your count is wrong — or you must divide by the (constant) number of times each object appears, an idea the next lesson uses to derive $\\binom{n}{k}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'error',
      prompt: 'A student counts the bit strings of length $7$ that start with $1$ or end with $01$. Tap the first line that is wrong.',
      lines: [
        'Strings starting with $1$: one bit forced, so $2^6 = 64$.',
        'Strings ending with $01$: two bits forced, so $2^5 = 32$.',
        'By the sum rule, the total is $64 + 32 = 96$.',
        'So $96$ bit strings of length $7$ start with $1$ or end with $01$.',
      ],
      errorLines: [3],
      explanation: 'The sum rule needs **disjoint** cases, but a string like `1000001` starts with $1$ *and* ends with $01$ — it was counted in both groups. The intersection has three bits forced, so $2^4 = 16$ strings. The subtraction rule gives $64 + 32 - 16 = 80$, which a brute-force count over all $128$ strings confirms.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Tree diagrams: when choices depend on earlier choices',
      blocks: [
        {
          type: 'p',
          text: 'The product rule needs every step to offer the same **number** of options regardless of the past. Many situations break that. In a best-of-three match, the series stops as soon as someone wins two games — so whether there is a game $3$ at all depends on games $1$ and $2$.',
        },
        {
          type: 'p',
          text: 'A **tree diagram** handles this. Start at a root; for each possible first choice draw a branch; from each branch draw the choices still available; continue until each path ends. Each complete root-to-leaf path is one outcome, so **the number of outcomes is the number of leaves**.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg"><line x1="254.2" y1="44.0" x2="177.4" y2="96.5" stroke="currentColor" stroke-width="1.6"/><line x1="266.1" y1="43.4" x2="361.9" y2="97.6" stroke="currentColor" stroke-width="1.6"/><line x1="154.8" y1="116.0" x2="112.9" y2="161.1" stroke="currentColor" stroke-width="1.6"/><line x1="171.7" y1="118.4" x2="193.3" y2="161.6" stroke="currentColor" stroke-width="1.6"/><line x1="368.3" y1="118.4" x2="346.7" y2="161.6" stroke="currentColor" stroke-width="1.6"/><line x1="386.6" y1="114.5" x2="445.3" y2="162.9" stroke="currentColor" stroke-width="1.6"/><line x1="191.9" y1="187.6" x2="165.3" y2="229.0" stroke="currentColor" stroke-width="1.6"/><line x1="207.4" y1="188.0" x2="230.6" y2="228.5" stroke="currentColor" stroke-width="1.6"/><line x1="332.6" y1="188.0" x2="309.4" y2="228.5" stroke="currentColor" stroke-width="1.6"/><line x1="348.1" y1="187.6" x2="374.7" y2="229.0" stroke="currentColor" stroke-width="1.6"/><circle cx="260" cy="40" r="7" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6"/><circle cx="165" cy="105" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="165" y="110" text-anchor="middle" font-size="14" class="t-blue">A</text><circle cx="375" cy="105" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="375" y="110" text-anchor="middle" font-size="14" class="t-red">B</text><circle cx="100" cy="175" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><circle cx="100" cy="175" r="19" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="100" y="180" text-anchor="middle" font-size="14" class="t-blue">A</text><text x="100" y="205" text-anchor="middle" font-size="12" class="t-gray">AA</text><circle cx="200" cy="175" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="200" y="180" text-anchor="middle" font-size="14" class="t-red">B</text><circle cx="340" cy="175" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="340" y="180" text-anchor="middle" font-size="14" class="t-blue">A</text><circle cx="460" cy="175" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><circle cx="460" cy="175" r="19" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="460" y="180" text-anchor="middle" font-size="14" class="t-red">B</text><text x="460" y="205" text-anchor="middle" font-size="12" class="t-gray">BB</text><circle cx="155" cy="245" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><circle cx="155" cy="245" r="19" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="155" y="250" text-anchor="middle" font-size="14" class="t-blue">A</text><text x="155" y="275" text-anchor="middle" font-size="12" class="t-gray">ABA</text><circle cx="240" cy="245" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><circle cx="240" cy="245" r="19" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="240" y="250" text-anchor="middle" font-size="14" class="t-red">B</text><text x="240" y="275" text-anchor="middle" font-size="12" class="t-gray">ABB</text><circle cx="300" cy="245" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><circle cx="300" cy="245" r="19" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="300" y="250" text-anchor="middle" font-size="14" class="t-blue">A</text><text x="300" y="275" text-anchor="middle" font-size="12" class="t-gray">BAA</text><circle cx="385" cy="245" r="15" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><circle cx="385" cy="245" r="19" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="385" y="250" text-anchor="middle" font-size="14" class="t-red">B</text><text x="385" y="275" text-anchor="middle" font-size="12" class="t-gray">BAB</text><text x="4" y="110" text-anchor="start" font-size="13" class="t-gray">game 1</text><text x="4" y="180" text-anchor="start" font-size="13" class="t-gray">game 2</text><text x="4" y="250" text-anchor="start" font-size="13" class="t-gray">game 3</text></svg>',
          alt: 'A tree for a best-of-three match between players A and B. Game 1 branches to A or B. After A, game 2 branches to A (leaf AA) or B; after AB, game 3 branches to leaves ABA and ABB. Symmetrically after B: BA leads to leaves BAA and BAB, and BB is a leaf.',
          caption: 'A best-of-three series. Double circles are leaves (the series is over). The branches have unequal depth — the product rule cannot see that, but counting leaves can: $6$ ways the series can play out.',
          maxWidth: 480,
        },
        {
          type: 'derivation',
          title: 'Bit strings of length 4 with no two consecutive 1s',
          steps: [
            { tex: '\\text{after a } 0: \\text{ next bit can be } 0 \\text{ or } 1', why: 'A $0$ puts no restriction on what follows, so the tree branches twice.' },
            { tex: '\\text{after a } 1: \\text{ next bit must be } 0', why: 'Placing another $1$ would create `11`, so the tree has only one branch here. The number of options depends on the previous choice: the product rule does not apply.' },
            { tex: '0000,\\ 0001,\\ 0010,\\ 0100,\\ 0101,\\ 1000,\\ 1001,\\ 1010', why: 'Follow every root-to-leaf path of the tree and read off the bits.' },
            { tex: '\\text{leaves} = 8', why: 'One leaf per valid string.' },
          ],
          result: 'There are $8$ such strings (out of $2^4 = 16$).',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A tree diagram is a recursion',
          text: 'The tree is exactly the call tree of a recursive function that tries every legal next choice: `count(prefix)` returns $1$ at a leaf and otherwise the sum of `count(prefix + c)` over legal `c`. Backtracking solvers, game-tree search (minimax in chess AI) and procedural generators that "try every option" all walk such trees. When the tree gets huge, you look for a pattern — here the counts $2, 3, 5, 8, 13, \\dots$ are Fibonacci numbers, which the recurrences unit will explain.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Extend the tree by one more level. How many bit strings of length $5$ have no two consecutive $1$s?',
      hint: 'Split by the first bit. A string starting with $0$ continues with any valid string of length $4$; a string starting with $1$ must continue with $0$ and then any valid string of length $3$.',
      label: 'count $=$',
      answer: '13',
      explanation: 'Split by the first bit (disjoint cases, so the sum rule applies). Starting with $0$: the rest is any valid length-$4$ string — $8$ of them. Starting with $1$: the next bit must be $0$, then any valid length-$3$ string — there are $5$ ($000, 001, 010, 100, 101$). Total $8 + 5 = 13$, which brute force over all $32$ strings confirms.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The pigeonhole principle',
      blocks: [
        {
          type: 'p',
          text: 'Some counting arguments do not produce a number at all — they prove that something **must exist**. If $5$ pigeons fly into $4$ holes, some hole gets at least $2$ pigeons. Obvious? Yes. Powerful? Astonishingly.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><path d="M30 60 L30 150 L125 150 L125 60" fill="none" stroke="currentColor" stroke-width="2"/><text x="77.5" y="175" text-anchor="middle" font-size="13" class="t-gray">hole 1</text><path d="M145 60 L145 150 L240 150 L240 60" fill="none" stroke="currentColor" stroke-width="2"/><text x="192.5" y="175" text-anchor="middle" font-size="13" class="t-gray">hole 2</text><path d="M260 60 L260 150 L355 150 L355 60" fill="none" stroke="currentColor" stroke-width="2"/><text x="307.5" y="175" text-anchor="middle" font-size="13" class="t-gray">hole 3</text><path d="M375 60 L375 150 L470 150 L470 60" fill="none" stroke="currentColor" stroke-width="2"/><text x="422.5" y="175" text-anchor="middle" font-size="13" class="t-gray">hole 4</text><circle cx="77.5" cy="128" r="16" class="f-blue" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="173" cy="128" r="16" class="f-red" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="212" cy="128" r="16" class="f-red" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="307.5" cy="128" r="16" class="f-blue" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="422.5" cy="128" r="16" class="f-blue" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><rect x="139" y="52" width="107" height="104" rx="6" fill="none" class="s-red" stroke-width="2" stroke-dasharray="5 4"/><text x="250" y="30" text-anchor="middle" font-size="15">5 pigeons, 4 holes</text><text x="192.5" y="46" text-anchor="middle" font-size="13" class="t-red">must share</text></svg>',
          alt: 'Four open boxes labeled hole 1 to hole 4. Holes 1, 3 and 4 hold one circle each; hole 2 holds two circles, outlined in red with the note must share.',
          caption: 'However you place $5$ pigeons in $4$ holes, at least one hole holds two. The principle does not say *which* hole.',
          maxWidth: 440,
        },
        {
          type: 'theorem',
          name: 'The pigeonhole principle',
          text: 'If $k + 1$ or more objects are placed into $k$ boxes, then at least one box contains two or more objects. Equivalently: a [[function]] from a set with more than $k$ elements to a set with $k$ elements cannot be one-to-one.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Proof (by contradiction)',
          text: 'Suppose, for contradiction, that every box holds at most one object. Then the total number of objects is at most $1 + 1 + \\cdots + 1 = k$ (one for each box). But there are at least $k + 1$ objects — a contradiction. So some box holds at least two. $\\blacksquare$',
        },
        {
          type: 'list',
          items: [
            '**Birthdays.** Among $367$ people, two share a birthday: there are only $366$ possible birthdays (including February 29).',
            '**Hash collisions.** A hash table with $1000$ buckets holding $1001$ keys has at least one bucket with two keys. More dramatically, a hash function from all strings to $64$-bit values must send **infinitely many** pairs of strings to the same value — collisions are not a bug in a particular hash, they are forced by counting. Hash maps must handle them (chaining or probing).',
            '**Lossless compression.** No compressor can shrink *every* file: there are $2^n$ files of length $n$ but only $2^n - 1$ files shorter than $n$ bits, so two inputs would share an output, and decompression could not tell them apart.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Guaranteed versus likely: the birthday preview',
          text: 'Pigeonhole guarantees a shared birthday only at $367$ people. But a shared birthday is already **more likely than not** with just $23$ people — and in a hash table with $N$ buckets, collisions become likely after only about $\\sqrt{N}$ keys. That is the birthday problem, which you will compute in the probability unit. Pigeonhole answers "must it happen?"; probability answers "how soon will it probably happen?"',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'If $10$ keys are inserted into a hash table with $10$ buckets, the pigeonhole principle guarantees that some bucket contains two keys.',
      answer: false,
      explanation: 'Pigeonhole needs **more** objects than boxes. With $10$ keys and $10$ buckets, a perfect hash could put exactly one key in each bucket — no collision is forced. Add an eleventh key and a collision becomes certain. (In practice a random hash will very likely collide much earlier — that is the birthday effect — but "likely" is not "guaranteed".)',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The generalized pigeonhole principle, and choosing the holes',
      blocks: [
        {
          type: 'p',
          text: 'With many more objects than boxes, you can guarantee more than two in some box. If $100$ people are sorted by birth month, some month has at least $\\lceil 100 / 12 \\rceil = 9$ of them, where $\\lceil x \\rceil$ (the *ceiling*) is the smallest integer $\\ge x$.',
        },
        {
          type: 'theorem',
          name: 'Generalized pigeonhole principle',
          tex: 'N \\text{ objects in } k \\text{ boxes} \\implies \\text{some box holds at least } \\left\\lceil \\frac{N}{k} \\right\\rceil \\text{ objects}',
          text: 'Proof: if every box held at most $\\lceil N/k \\rceil - 1$ objects, the total would be at most $k\\left(\\lceil N/k \\rceil - 1\\right) < k\\left(\\frac{N}{k} + 1 - 1\\right) = N$, using $\\lceil x \\rceil < x + 1$. That contradicts having $N$ objects.',
        },
        {
          type: 'p',
          text: 'Run it backwards to answer "how many do I need to *guarantee* $r$ in one box?" The worst case puts $r - 1$ in every box; one more object forces $r$. So the answer is $k(r - 1) + 1$. To guarantee $6$ students with the same grade among the $5$ grades A–F (no E), you need $5 \\cdot 5 + 1 = 26$ students.',
        },
        {
          type: 'p',
          text: 'The art of pigeonhole proofs is **choosing the boxes**. They are rarely given to you.',
        },
        {
          type: 'derivation',
          title: 'Claim: any 5 numbers chosen from $\\{1, 2, \\dots, 8\\}$ include two that add up to 9',
          steps: [
            { tex: '\\{1, 8\\},\\ \\{2, 7\\},\\ \\{3, 6\\},\\ \\{4, 5\\}', why: 'Choose the boxes cleverly: pair up the numbers that sum to $9$. Every number from $1$ to $8$ is in exactly one pair.' },
            { tex: '5 \\text{ chosen numbers}, \\ 4 \\text{ pairs}', why: 'Put each chosen number into the box (pair) that contains it.' },
            { tex: '5 > 4 \\implies \\text{some pair receives two chosen numbers}', why: 'The pigeonhole principle.' },
            { tex: '\\text{both members of a pair are chosen} \\implies \\text{their sum is } 9', why: 'A box only holds two numbers, and they were paired precisely because they add to $9$.' },
          ],
          result: 'The claim holds — and $5$ is best possible: $\\{1, 2, 3, 4\\}$ has four numbers and no pair summing to $9$.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 190" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="50" width="100" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="70" y="152" text-anchor="middle" font-size="13" class="t-gray">sum 9</text><text x="48" y="96" text-anchor="middle" font-size="16" class="t-gray">1</text><circle cx="92" cy="90" r="17" class="f-blue" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/><text x="92" y="96" text-anchor="middle" font-size="16">8</text><rect x="140" y="50" width="100" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="152" text-anchor="middle" font-size="13" class="t-gray">sum 9</text><circle cx="168" cy="90" r="17" class="f-blue" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/><text x="168" y="96" text-anchor="middle" font-size="16">2</text><text x="212" y="96" text-anchor="middle" font-size="16" class="t-gray">7</text><rect x="260" y="50" width="100" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2.4" class="s-red"/><text x="310" y="152" text-anchor="middle" font-size="13" class="t-gray">sum 9</text><circle cx="288" cy="90" r="17" class="f-red" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/><text x="288" y="96" text-anchor="middle" font-size="16">3</text><circle cx="332" cy="90" r="17" class="f-red" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/><text x="332" y="96" text-anchor="middle" font-size="16">6</text><rect x="380" y="50" width="100" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="430" y="152" text-anchor="middle" font-size="13" class="t-gray">sum 9</text><circle cx="408" cy="90" r="17" class="f-blue" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/><text x="408" y="96" text-anchor="middle" font-size="16">4</text><text x="452" y="96" text-anchor="middle" font-size="16" class="t-gray">5</text><text x="250" y="28" text-anchor="middle" font-size="14">chosen: 2, 3, 4, 6, 8 (circled)</text><text x="250" y="180" text-anchor="middle" font-size="13" class="t-red">5 numbers, 4 boxes: some box holds both of its numbers</text></svg>',
          alt: 'Four boxes labeled sum 9 containing the pairs 1 and 8, 2 and 7, 3 and 6, 4 and 5. The chosen numbers 2, 3, 4, 6, 8 are circled; the box with 3 and 6 has both circled and is outlined in red.',
          caption: 'One example choice. Whatever $5$ numbers you circle, some box ends up with both of its numbers circled.',
          maxWidth: 460,
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Cards are drawn from a standard $52$-card deck (four suits of $13$). What is the **minimum** number of cards you must draw to guarantee at least $3$ cards of the same suit?',
      hint: 'What is the largest hand with **no** suit appearing $3$ times?',
      label: 'cards $=$',
      answer: '9',
      explanation: 'The boxes are the $4$ suits. The worst case is $2$ cards of each suit — $8$ cards with no three alike. The ninth card must land in a suit that already has $2$. Formula: $k(r - 1) + 1 = 4 \\cdot 2 + 1 = 9$; check with the generalized principle: $\\lceil 9/4 \\rceil = 3$ but $\\lceil 8/4 \\rceil = 2$.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Which rule? A checklist, and brute force as a referee',
      blocks: [
        {
          type: 'p',
          text: 'Most counting mistakes come from using the right formula on the wrong problem. Before computing, describe the objects you are counting and how your procedure builds each one. Then ask:',
        },
        {
          type: 'table',
          headers: ['Question about the problem', 'Rule'],
          rows: [
            ['Is each object built by a **sequence** of steps, with a fixed number of options at each step?', 'Product rule (multiply)'],
            ['Does the problem split into **cases that cannot overlap**?', 'Sum rule (add)'],
            ['Do the cases **overlap**?', 'Subtraction rule: $|A \\cup B| = |A| + |B| - |A \\cap B|$'],
            ['Is it "at least one", "not all", "some"?', 'Count the complement and subtract from the total'],
            ['Does the number of options **depend on earlier choices**?', 'Tree diagram, or split into cases until each case is a product'],
            ['Must you prove something **exists** (a collision, a repeat)?', 'Pigeonhole: what are the objects, what are the boxes?'],
          ],
        },
        {
          type: 'p',
          text: 'For small cases, a computer can simply **list everything** and count. That gives you a referee for your reasoning: get the formula, then check it against brute force on small inputs. Programmers verify combinatorial code this way all the time.',
        },
        {
          type: 'code',
          title: 'brute_force.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <string>

int main() {
    // 1) 8-bit strings that start with 1 or end with 00.
    int either = 0;
    for (unsigned s = 0; s < 256; ++s) {       // every 8-bit pattern
        bool startsWith1 = (s >> 7) & 1u;      // most significant bit
        bool endsWith00 = (s & 0b11u) == 0;    // two lowest bits
        if (startsWith1 || endsWith00) ++either;
    }
    std::printf("start 1 or end 00: %d  (formula 128 + 64 - 32 = %d)\\n",
                either, 128 + 64 - 32);

    // 2) Length-4 passwords over {a, b, c, 1, 2} with at least one digit.
    const std::string alphabet = "abc12";
    int total = 0, withDigit = 0;
    for (char c1 : alphabet)
        for (char c2 : alphabet)
            for (char c3 : alphabet)
                for (char c4 : alphabet) {
                    ++total;
                    std::string pw{c1, c2, c3, c4};
                    if (pw.find_first_of("12") != std::string::npos) ++withDigit;
                }
    std::printf("passwords: %d total, %d with a digit  (formula 5^4 - 3^4 = %d)\\n",
                total, withDigit, 625 - 81);
}`,
          output: `start 1 or end 00: 160  (formula 128 + 64 - 32 = 160)
passwords: 625 total, 544 with a digit  (formula 5^4 - 3^4 = 544)`,
          annotations: [
            { lines: '7-11', text: 'Each 8-bit string is an `unsigned` from $0$ to $255$; bit masks read off its first bit and last two bits.' },
            { lines: '18-25', text: 'Four nested loops visit all $5^4 = 625$ passwords — the product rule, executed.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'A combat loadout is either **one primary weapon** (choose $1$ of $4$ rifles) **plus one sidearm** (choose $1$ of $6$ pistols), **or** one of $5$ pre-built "specialist kits". How many loadouts are there?',
      options: [
        { text: '$15$', why: 'That adds everything, $4 + 6 + 5$. But a rifle-plus-pistol loadout requires *both* choices in sequence, which multiplies.' },
        { text: '$120$', why: 'That multiplies everything, $4 \\cdot 6 \\cdot 5$, as if you took a rifle, a pistol *and* a kit. The kit is an *alternative*, not an extra step.' },
        { text: '$44$', why: 'That is $4 \\cdot (6 + 5)$ — treating the kits as if they were sidearm options paired with a rifle. A kit replaces the whole loadout.' },
        { text: '$29$', correct: true, why: 'Case 1 (rifle and pistol) is a two-step sequence: $4 \\cdot 6 = 24$. Case 2 is a kit: $5$. The cases are disjoint, so add: $24 + 5 = 29$.' },
      ],
      explanation: 'Decide the structure first: two disjoint cases (sum rule), one of which is a two-step sequence (product rule). $4 \\cdot 6 + 5 = 29$. The words "plus" and "or" in the prompt are clues, but always confirm by imagining how one concrete loadout is built.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'fill',
      prompt: 'Complete the generalized pigeonhole principle.',
      template: 'If $N$ objects are placed into $k$ boxes, then some box contains at least ___ objects. To **guarantee** $r$ objects in one box you need at least ___ objects.',
      blanks: [{ answers: ['$\\lceil N/k \\rceil$'] }, { answers: ['$k(r-1)+1$'] }],
      wordBank: ['$\\lceil N/k \\rceil$', '$\\lfloor N/k \\rfloor$', '$N - k$', '$k(r-1)+1$', '$kr$', '$kr + 1$'],
      explanation: 'The average box holds $N/k$ objects, and some box must hold at least the average; since counts are integers, that means at least $\\lceil N/k \\rceil$. The floor would be too weak (with $N = 5$, $k = 4$ it gives $1$, but we know some box has $2$). For the guarantee: $k(r - 1)$ objects can be spread with only $r - 1$ per box, so you need one more, $k(r - 1) + 1$. ($kr$ is too many to be the minimum.)',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'order',
      prompt: 'Arrange the steps of the proof that among any $13$ integers, two have the same remainder when divided by $12$.',
      lines: [
        'Let the boxes be the $12$ possible remainders $0, 1, \\dots, 11$.',
        'Place each of the $13$ integers in the box of its remainder mod $12$.',
        'There are $13$ objects and only $12$ boxes, so by the pigeonhole principle some box holds two integers $a \\ne b$.',
        'Those two integers have the same remainder, so $a - b$ is divisible by $12$. $\\blacksquare$',
      ],
      explanation: 'Every pigeonhole proof has this shape: **define the boxes**, **assign each object to a box**, **apply the principle** (count objects versus boxes), then **interpret** what two objects in one box means. Here two integers in one box share a remainder $r$, so $a = 12q_1 + r$ and $b = 12q_2 + r$ give $a - b = 12(q_1 - q_2)$.',
    },
  ],
  takeaways: [
    '**Product rule:** a sequence of steps with $n_1, n_2, \\dots, n_k$ options (the *number* of options fixed at each step) gives $n_1 n_2 \\cdots n_k$ outcomes. Strings of length $n$ over $m$ symbols: $m^n$.',
    '**Sum rule:** disjoint cases add. Nested loops multiply; consecutive loops add.',
    '**Subtraction rule:** $|A \\cup B| = |A| + |B| - |A \\cap B|$. For "at least one", count the complement: total minus "none".',
    'When the number of options depends on earlier choices, draw a **tree diagram** and count the leaves.',
    '**Pigeonhole:** $N$ objects in $k$ boxes force some box to hold at least $\\lceil N/k \\rceil$; more objects than boxes forces a collision. The hard part is choosing the boxes.',
    'Always ask "is every object counted exactly once?" — and check small cases by brute force.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Chapter 1: Counting)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Free textbook; section 1.1 on additive and multiplicative principles has many more worked examples and exercises.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The counting lectures cover the sum, product and pigeonhole rules with a computer-science slant.',
    },
    {
      title: 'Wikipedia — Pigeonhole principle',
      url: 'https://en.wikipedia.org/wiki/Pigeonhole_principle',
      source: 'wikipedia',
      note: 'Many surprising applications, including hashing and lossless compression.',
    },
  ],
};
