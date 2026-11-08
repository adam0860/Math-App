import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-boolean-algebra',
  title: 'Boolean Algebra and Logic Gates',
  summary: 'The algebra of 0 and 1: Boolean identities, sum-of-products forms, logic gates, adders built from gates, Karnaugh maps, and the bit tricks that game engines use every frame.',
  minutes: 20,
  objectives: [
    'Evaluate Boolean expressions and count the Boolean functions of $n$ variables',
    'Simplify expressions with the Boolean identities, including De Morgan\'s laws and absorption',
    'Write the sum-of-products and product-of-sums forms of a function from its truth table',
    'Read and build circuits from AND, OR, NOT, NAND, NOR and XOR gates, including the half adder and full adder',
    'Minimize a function of 3 or 4 variables with a Karnaugh map',
    'Use bitwise operators in C++ for masks, flags, $x \\mathbin{\\&} (x - 1)$ and popcount',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Boolean functions: logic with 0 and 1',
      blocks: [
        {
          type: 'p',
          text: 'In the logic unit you worked with propositions that are true or false and connectives $\\neg$, $\\land$, $\\lor$. Circuit designers and programmers write exactly the same ideas with numbers: $1$ for true, $0$ for false. The result is **Boolean algebra**, named after George Boole, and it is the mathematics of every chip and every `if` statement.',
        },
        {
          type: 'p',
          text: 'Work in the set $B = \\{0, 1\\}$ with three operations. The **complement** $\\overline{x}$ flips a bit. The **Boolean sum** $x + y$ is $1$ when at least one input is $1$ (OR). The **Boolean product** $x \\cdot y$, usually written $xy$, is $1$ only when both inputs are $1$ (AND). The only surprise is $1 + 1 = 1$: this "plus" is OR, not addition.',
        },
        {
          type: 'table',
          headers: ['$x$', '$y$', '$\\overline{x}$', '$xy$ (AND)', '$x + y$ (OR)', '$x \\oplus y$ (XOR)'],
          rows: [
            ['$0$', '$0$', '$1$', '$0$', '$0$', '$0$'],
            ['$0$', '$1$', '$1$', '$0$', '$1$', '$1$'],
            ['$1$', '$0$', '$0$', '$0$', '$1$', '$1$'],
            ['$1$', '$1$', '$0$', '$1$', '$1$', '$0$'],
          ],
          caption: 'Translation to logic: $\\overline{x} \\leftrightarrow \\neg p$, $xy \\leftrightarrow p \\land q$, $x + y \\leftrightarrow p \\lor q$, $x \\oplus y \\leftrightarrow p \\oplus q$ ([[dm-exclusive-or|exclusive or]]).',
        },
        {
          type: 'definition',
          term: 'Boolean function',
          text: 'A [[dm-boolean-function]] of $n$ variables is a [[function]] $F : B^n \\to B$, where $B^n$ is the set of all $n$-tuples of bits. A **Boolean expression** (built from variables, $0$, $1$, complement, sum and product) defines one; its [[dm-truth-table|truth table]] lists the output for each of the $2^n$ inputs.',
        },
        {
          type: 'derivation',
          title: 'Evaluate $F(x, y, z) = xy + \\overline{z}$ at $(x, y, z) = (1, 0, 0)$',
          steps: [
            { tex: 'F(1, 0, 0) = 1 \\cdot 0 + \\overline{0}', why: 'Substitute the inputs.' },
            { tex: '= 0 + 1', why: 'Product: $1 \\cdot 0 = 0$ (AND needs both). Complement: $\\overline{0} = 1$. As in ordinary algebra, products bind tighter than sums.' },
            { tex: '= 1', why: 'Boolean sum: $0 + 1 = 1$ (OR needs at least one).' },
          ],
          result: '$F(1, 0, 0) = 1$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why there are $2^{2^n}$ Boolean functions of $n$ variables',
          text: 'A function is completely described by its truth table. The table has $2^n$ rows (each of the $n$ inputs is $0$ or $1$, product rule). Each row\'s output can be chosen independently as $0$ or $1$, so there are $2 \\cdot 2 \\cdots 2 = 2^{2^n}$ different output columns. For $n = 2$ that is $2^4 = 16$ functions: AND, OR, XOR, NAND, implication and eleven more. The count explodes fast, which is why we need systematic tools to build and simplify them.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'How many different Boolean functions of **three** variables $F(x, y, z)$ are there?',
      answer: '256',
      hint: 'Count the rows of the truth table first, then count the ways to fill in the output column.',
      explanation: 'With $3$ inputs the truth table has $2^3 = 8$ rows. Each row\'s output is independently $0$ or $1$, so there are $2^8 = 256$ output columns, hence $2^{2^3} = 256$ functions. A common slip is answering $2^3 = 8$: that counts the *inputs*, not the functions.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Boolean identities',
      blocks: [
        {
          type: 'p',
          text: 'Every [[dm-logical-equivalence|logical equivalence]] from the logic unit becomes a Boolean identity: replace $\\neg, \\land, \\lor, \\mathbf{T}, \\mathbf{F}$ by $\\overline{\\phantom{x}}, \\cdot, +, 1, 0$. Here is the toolkit you will use to simplify circuits.',
        },
        {
          type: 'table',
          headers: ['Law', 'Sum form', 'Product form'],
          rows: [
            ['Identity', '$x + 0 = x$', '$x \\cdot 1 = x$'],
            ['Domination', '$x + 1 = 1$', '$x \\cdot 0 = 0$'],
            ['Idempotent', '$x + x = x$', '$x \\cdot x = x$'],
            ['Complement', '$x + \\overline{x} = 1$', '$x\\,\\overline{x} = 0$'],
            ['Double complement', '$\\overline{\\overline{x}} = x$', '—'],
            ['Commutative', '$x + y = y + x$', '$xy = yx$'],
            ['Associative', '$x + (y + z) = (x + y) + z$', '$x(yz) = (xy)z$'],
            ['Distributive', '$x + yz = (x + y)(x + z)$', '$x(y + z) = xy + xz$'],
            ['[[dm-de-morgans-laws|De Morgan]]', '$\\overline{x + y} = \\overline{x}\\;\\overline{y}$', '$\\overline{xy} = \\overline{x} + \\overline{y}$'],
            ['Absorption', '$x + xy = x$', '$x(x + y) = x$'],
          ],
          caption: 'Each law comes in a pair. The **duality principle**: swapping $+ \\leftrightarrow \\cdot$ and $0 \\leftrightarrow 1$ in a valid identity gives another valid identity.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why these are true: a finite check',
          text: 'Each variable takes only two values, so any identity in $k$ variables can be proved by checking all $2^k$ rows of a truth table, exactly as you proved logical equivalences. For example $x + yz = (x + y)(x + z)$: if $x = 1$ both sides are $1$; if $x = 0$ both sides reduce to $yz$. Once a few laws are established, you can derive others **algebraically**, which scales to expressions with many variables where an 8- or 16-row table becomes tedious.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Not ordinary arithmetic',
          text: 'Two laws look wrong to an algebra-trained eye. $x + x = x$ (not $2x$), and $x + yz = (x + y)(x + z)$, a distributive law of $+$ over $\\cdot$ that fails for real numbers (try $x = y = z = 1$: $2 \\ne 4$). Both are fine here because $+$ means OR. Don\'t carry habits like "$x + x = 2x$" or "cancel a common term" into Boolean algebra: $x + y = x + z$ does **not** imply $y = z$ (take $x = 1$).',
        },
        {
          type: 'derivation',
          title: 'Prove the absorption law $x + xy = x$ from the other laws',
          steps: [
            { tex: 'x + xy = x \\cdot 1 + x y', why: 'Identity law: $x = x \\cdot 1$.' },
            { tex: '= x(1 + y)', why: 'Distributive law, read right to left (factor out $x$).' },
            { tex: '= x \\cdot 1', why: 'Domination: $1 + y = y + 1 = 1$.' },
            { tex: '= x', why: 'Identity law.' },
          ],
          result: '$x + xy = x$. Intuition: if $x = 1$ the sum is already $1$; if $x = 0$ the term $xy$ is $0$ too.',
        },
        {
          type: 'derivation',
          title: 'Simplify $F = xy + x\\overline{y} + \\overline{x}y$',
          steps: [
            { tex: 'F = x(y + \\overline{y}) + \\overline{x}y', why: 'Factor $x$ out of the first two terms (distributive law).' },
            { tex: '= x \\cdot 1 + \\overline{x}y = x + \\overline{x}y', why: 'Complement law $y + \\overline{y} = 1$, then identity.' },
            { tex: '= (x + \\overline{x})(x + y)', why: 'The *other* distributive law: $x + \\overline{x}y = (x + \\overline{x})(x + y)$.' },
            { tex: '= 1 \\cdot (x + y) = x + y', why: 'Complement law, then identity.' },
          ],
          result: 'Three products and two ORs collapse to a single OR gate: $F = x + y$.',
        },
        {
          type: 'deepdive',
          title: 'Boolean algebras in general',
          blocks: [
            {
              type: 'p',
              text: 'Abstractly, a **Boolean algebra** is any set with two binary operations, a complement and two special elements $0$ and $1$ satisfying the identity, complement, commutative, associative and distributive laws; all the other laws in the table follow from these. $\\{0, 1\\}$ is the smallest one. The subsets of a set $U$, with $\\cup$, $\\cap$, set complement, $\\emptyset$ and $U$, form another, which is why De Morgan\'s laws hold for sets too. So do the $n$-bit integers with `|`, `&`, `~`, `0` and all-ones: a bitwise operation is $n$ copies of the Boolean one running side by side.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'True or false: $\\overline{xy} = \\overline{x}\\;\\overline{y}$ for all bits $x$ and $y$.',
      answer: false,
      explanation: 'False. De Morgan\'s law says $\\overline{xy} = \\overline{x} + \\overline{y}$: complementing a product turns it into a **sum** of complements. A counterexample to the claim: $x = 1, y = 0$ gives $\\overline{xy} = \\overline{0} = 1$ but $\\overline{x}\\;\\overline{y} = 0 \\cdot 1 = 0$. In code: `!(a && b)` is `!a || !b`, not `!a && !b`.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'A student simplifies $F = \\overline{\\overline{x}\\,y} \\cdot y$. Tap the first line that is wrong.',
      lines: [
        '$F = \\overline{\\overline{x}\\,y} \\cdot y$',
        '$= \\overline{\\overline{x}}\\;\\overline{y} \\cdot y$',
        '$= x\\,\\overline{y}\\,y$',
        '$= x \\cdot 0$',
        '$= 0$',
      ],
      errorLines: [2],
      explanation: 'Line 2 misapplies De Morgan\'s law: the complement of a **product** is the **sum** of the complements, $\\overline{\\overline{x}\\,y} = \\overline{\\overline{x}} + \\overline{y} = x + \\overline{y}$. Continuing correctly: $F = (x + \\overline{y})\\,y = xy + \\overline{y}y = xy + 0 = xy$. Check at $x = y = 1$: $\\overline{x}\\,y = 0$, so $\\overline{\\overline{x}\\,y} = 1$ and $F = 1 \\cdot 1 = 1$, which is not $0$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'From truth table to formula: sum of products',
      blocks: [
        {
          type: 'p',
          text: 'Suppose a designer hands you only a truth table. Can you always write an expression for it? Yes, and the method is mechanical. A **literal** is a variable or its complement. A [[dm-minterm]] in $x_1, \\dots, x_n$ is a product of $n$ literals, one per variable, such as $\\overline{x}\\,y\\,z$. The key fact: **a minterm is $1$ on exactly one row** of the truth table. $\\overline{x}\\,y\\,z$ is $1$ only when $x = 0$, $y = 1$, $z = 1$.',
        },
        {
          type: 'p',
          text: 'So to build $F$, take one minterm for each row where $F = 1$ (complement the variables that are $0$ in that row) and add them. The sum is $1$ exactly on those rows. This is the [[dm-sum-of-products]] form, also called disjunctive normal form (DNF). Example: the **majority** function $M(x, y, z)$, which outputs $1$ when at least two inputs are $1$ (think of three redundant sensors voting).',
        },
        {
          type: 'table',
          headers: ['$x$', '$y$', '$z$', '$M$', 'minterm (if $M = 1$)', 'maxterm (if $M = 0$)'],
          rows: [
            ['$0$', '$0$', '$0$', '$0$', '—', '$x + y + z$'],
            ['$0$', '$0$', '$1$', '$0$', '—', '$x + y + \\overline{z}$'],
            ['$0$', '$1$', '$0$', '$0$', '—', '$x + \\overline{y} + z$'],
            ['$0$', '$1$', '$1$', '$1$', '$\\overline{x}\\,y\\,z$', '—'],
            ['$1$', '$0$', '$0$', '$0$', '—', '$\\overline{x} + y + z$'],
            ['$1$', '$0$', '$1$', '$1$', '$x\\,\\overline{y}\\,z$', '—'],
            ['$1$', '$1$', '$0$', '$1$', '$x\\,y\\,\\overline{z}$', '—'],
            ['$1$', '$1$', '$1$', '$1$', '$x\\,y\\,z$', '—'],
          ],
        },
        {
          type: 'derivation',
          title: 'Sum-of-products form of the majority function, then simplify',
          steps: [
            { tex: 'M = \\overline{x}yz + x\\overline{y}z + xy\\overline{z} + xyz', why: 'One minterm per row with $M = 1$: rows $011, 101, 110, 111$.' },
            { tex: '= \\overline{x}yz + x\\overline{y}z + xy\\overline{z} + xyz + xyz + xyz', why: 'Idempotent law $xyz = xyz + xyz + xyz$: we may copy a term as often as we like. Each copy will pair with a different neighbour.' },
            { tex: '= (\\overline{x} + x)yz + x(\\overline{y} + y)z + xy(\\overline{z} + z)', why: 'Pair $xyz$ with each of the other three terms and factor (distributive law).' },
            { tex: '= yz + xz + xy', why: 'Complement law: each bracket is $1$.' },
          ],
          result: 'Four 3-input ANDs became three 2-input ANDs: $M = xy + xz + yz$.',
        },
        {
          type: 'p',
          text: 'Dually, the **product-of-sums** form (conjunctive normal form) uses one **maxterm** per row where $F = 0$: a sum of literals that is $0$ on exactly that row (complement the variables that are $1$). From the table, $M = (x + y + z)(x + y + \\overline{z})(x + \\overline{y} + z)(\\overline{x} + y + z)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why this matters: functional completeness',
          text: 'Since *every* truth table has a sum-of-products form, the three operations $\\{+, \\cdot, \\overline{\\phantom{x}}\\}$ can express every Boolean function: the set is [[dm-functional-completeness|functionally complete]]. De Morgan lets you drop one more: $x + y = \\overline{\\overline{x}\\;\\overline{y}}$, so $\\{\\cdot, \\overline{\\phantom{x}}\\}$ is already complete. In the next card you will see that a single operation suffices.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'fill',
      prompt: 'A function $F(x, y, z)$ equals $1$ on exactly the rows $(x, y, z) = 010$, $011$ and $110$. Write the minterm for each row.',
      template: 'Row $010$ gives ___ , row $011$ gives ___ , and row $110$ gives ___ .',
      blanks: [{ answers: ['$\\overline{x}\\,y\\,\\overline{z}$'] }, { answers: ['$\\overline{x}\\,y\\,z$'] }, { answers: ['$x\\,y\\,\\overline{z}$'] }],
      wordBank: ['$\\overline{x}\\,y\\,\\overline{z}$', '$\\overline{x}\\,y\\,z$', '$x\\,y\\,\\overline{z}$', '$x\\,\\overline{y}\\,z$', '$x + \\overline{y} + z$', '$\\overline{x}\\,\\overline{y}\\,z$'],
      hint: 'Keep a variable plain where the row has a $1$, and complement it where the row has a $0$.',
      explanation: 'A minterm is $1$ on exactly its row, so each $0$ in the row must appear complemented: $010 \\to \\overline{x}\\,y\\,\\overline{z}$, $011 \\to \\overline{x}\\,y\\,z$, $110 \\to x\\,y\\,\\overline{z}$. So $F = \\overline{x}y\\overline{z} + \\overline{x}yz + xy\\overline{z}$, which simplifies to $\\overline{x}y + y\\overline{z}$. The chip $x + \\overline{y} + z$ is a *maxterm* (it is $0$ on row $010$), used for product-of-sums, not here.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Logic gates and circuits',
      blocks: [
        {
          type: 'p',
          text: 'In hardware, each Boolean operation is a [[dm-logic-gate]]: a tiny transistor circuit with input wires and one output wire, where a high voltage means $1$ and a low voltage means $0$. Engineers draw them with standard symbols. Besides AND, OR and NOT, three combinations are so useful that they get their own symbols: **NAND** $\\overline{xy}$, **NOR** $\\overline{x + y}$ and **XOR** $x \\oplus y$.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 490 250" xmlns="http://www.w3.org/2000/svg"><path d="M65,40 H90 A20,20 0 0 1 90,80 H65 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><polyline points="38,50 65,50" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="38,70 65,70" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="30" y="55" font-size="14" text-anchor="middle">x</text><text x="30" y="75" font-size="14" text-anchor="middle">y</text><polyline points="110,60 160,60" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90" y="22" font-size="14" text-anchor="middle" class="t-blue">AND</text><text x="90" y="112" font-size="15" text-anchor="middle">xy</text><path d="M225,40 Q240,60 225,80 Q260,80 275,60 Q260,40 225,40 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><polyline points="198,50 230.6,50" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="198,70 230.6,70" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="55" font-size="14" text-anchor="middle">x</text><text x="190" y="75" font-size="14" text-anchor="middle">y</text><polyline points="275,60 320,60" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="250" y="22" font-size="14" text-anchor="middle" class="t-blue">OR</text><text x="250" y="112" font-size="15" text-anchor="middle">x + y</text><path d="M385,45 L415,60 L385,75 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="419.5" cy="60" r="4.5" stroke="currentColor" stroke-width="1.8" fill="none"/><polyline points="358,60 385,60" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350" y="65" font-size="14" text-anchor="middle">x</text><polyline points="424,60 480,60" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="410" y="22" font-size="14" text-anchor="middle" class="t-blue">NOT</text><text x="410" y="112" font-size="15" text-anchor="middle">x</text><line x1="405.5" y1="99" x2="414.5" y2="99" stroke="currentColor" stroke-width="1.3"/><path d="M65,165 H90 A20,20 0 0 1 90,205 H65 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="114.5" cy="185" r="4.5" stroke="currentColor" stroke-width="1.8" fill="none"/><polyline points="38,175 65,175" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="38,195 65,195" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="30" y="180" font-size="14" text-anchor="middle">x</text><text x="30" y="200" font-size="14" text-anchor="middle">y</text><polyline points="119,185 160,185" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90" y="147" font-size="14" text-anchor="middle" class="t-blue">NAND</text><text x="90" y="237" font-size="15" text-anchor="middle">xy</text><line x1="80" y1="224" x2="100" y2="224" stroke="currentColor" stroke-width="1.3"/><path d="M225,165 Q240,185 225,205 Q260,205 275,185 Q260,165 225,165 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="279.5" cy="185" r="4.5" stroke="currentColor" stroke-width="1.8" fill="none"/><polyline points="198,175 230.6,175" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="198,195 230.6,195" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="180" font-size="14" text-anchor="middle">x</text><text x="190" y="200" font-size="14" text-anchor="middle">y</text><polyline points="284,185 320,185" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="250" y="147" font-size="14" text-anchor="middle" class="t-blue">NOR</text><text x="250" y="237" font-size="15" text-anchor="middle">x + y</text><line x1="229" y1="224" x2="271" y2="224" stroke="currentColor" stroke-width="1.3"/><path d="M385,165 Q400,185 385,205 Q420,205 435,185 Q420,165 385,165 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M378,165 Q393,185 378,205" stroke="currentColor" stroke-width="1.8" fill="none"/><polyline points="358,175 383.6,175" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="358,195 383.6,195" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="350" y="180" font-size="14" text-anchor="middle">x</text><text x="350" y="200" font-size="14" text-anchor="middle">y</text><polyline points="435,185 480,185" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="410" y="147" font-size="14" text-anchor="middle" class="t-blue">XOR</text><text x="410" y="237" font-size="15" text-anchor="middle">x ⊕ y</text></svg>`,
          alt: 'Standard logic gate symbols: AND (flat back, round front), OR (curved back, pointed front), NOT (triangle with a bubble), NAND (AND with output bubble), NOR (OR with output bubble), XOR (OR with an extra curved line at the back).',
          caption: 'The six standard gates. A small **bubble** on an output means "complement": NAND is AND followed by NOT. XOR has an extra curved line at the back.',
          maxWidth: 480,
        },
        {
          type: 'p',
          text: 'A **combinational circuit** wires gates together; its output depends only on its current inputs. You read a circuit by labelling each gate\'s output with its expression, working from the inputs toward the output, and you build one by turning each operation of an expression into a gate.',
        },
        {
          type: 'theorem',
          name: 'NAND is functionally complete',
          tex: '\\overline{x} = x \\uparrow x, \\qquad xy = (x \\uparrow y) \\uparrow (x \\uparrow y), \\qquad x + y = (x \\uparrow x) \\uparrow (y \\uparrow y)',
          text: 'Here $x \\uparrow y = \\overline{xy}$ is NAND (Rosen writes $x \\mid y$). Since NOT, AND and OR can all be built from NAND, so can every Boolean function. The same holds for NOR, $x \\downarrow y = \\overline{x + y}$.',
        },
        {
          type: 'derivation',
          title: 'Why $(x \\uparrow y) \\uparrow (x \\uparrow y) = xy$',
          steps: [
            { tex: 'u \\uparrow u = \\overline{u\\,u} = \\overline{u}', why: 'Feeding the same signal $u$ into both inputs of a NAND gives NOT $u$ (idempotent law $uu = u$).' },
            { tex: '(x \\uparrow y) \\uparrow (x \\uparrow y) = \\overline{x \\uparrow y}', why: 'Apply the previous line with $u = x \\uparrow y$.' },
            { tex: '= \\overline{\\overline{xy}} = xy', why: 'Definition of NAND, then double complement.' },
          ],
          result: 'Two NAND gates make an AND gate. Chip factories love this: one kind of gate, laid out millions of times.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Shannon\'s master\'s thesis',
          text: 'In 1937 Claude Shannon showed in his MIT master\'s thesis that Boole\'s algebra describes relay switching circuits exactly: switches in series compute AND, switches in parallel compute OR. That observation turned circuit design from an art into algebra, and it underlies every digital computer since.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'mcq',
      prompt: 'Which expression does this circuit compute?',
      figure: {
        type: 'figure',
        svg: `<svg viewBox="0 0 370 150" xmlns="http://www.w3.org/2000/svg"><path d="M110,30 H135 A20,20 0 0 1 135,70 H110 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M110,105 L140,120 L110,135 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="144.5" cy="120" r="4.5" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M240,65 Q255,85 240,105 Q275,105 290,85 Q275,65 240,65 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><polyline points="40,40 110,40" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="28" y="45" font-size="14" text-anchor="middle">x</text><polyline points="40,60 110,60" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="28" y="65" font-size="14" text-anchor="middle">y</text><polyline points="40,120 110,120" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="28" y="125" font-size="14" text-anchor="middle">z</text><polyline points="155,50 200,50 200,75 245.6,75" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="149,120 200,120 200,95 245.6,95" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="290,85 340,85" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="352" y="90" font-size="15" text-anchor="middle" class="t-blue">F</text><text x="160" y="20" font-size="12" text-anchor="middle" class="t-gray">A</text><text x="160" y="98" font-size="12" text-anchor="middle" class="t-gray">B</text></svg>`,
        alt: 'Inputs x and y enter an AND gate (output A). Input z enters a NOT gate (output B). A and B enter an OR gate whose output is F.',
        maxWidth: 380,
      },
      options: [
        { text: '$F = xy + \\overline{z}$', correct: true, why: 'Gate A is AND: $xy$. Gate B is NOT: $\\overline{z}$. The final gate is OR: $xy + \\overline{z}$.' },
        { text: '$F = (x + y)\\,\\overline{z}$', why: 'This swaps the roles of the gates. The flat-backed gate with a round front is AND, and the curved one at the output is OR.' },
        { text: '$F = \\overline{xy + z}$', why: 'The bubble sits on the NOT gate acting on $z$ alone, not on the output of the OR gate.' },
        { text: '$F = xy\\,\\overline{z}$', why: 'The last gate has a curved back and a pointed front: it is OR, so its inputs are added, not multiplied.' },
      ],
      explanation: 'Label each gate output from left to right: $A = xy$ (AND), $B = \\overline{z}$ (NOT), and $F = A + B = xy + \\overline{z}$ (OR). Spot-check one input: at $(1, 0, 0)$ we get $A = 0$, $B = 1$, $F = 1$, matching the worked example from the first card.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'order',
      prompt: 'Show that NAND gates can build OR. Put the lines of the proof in order, starting from $(x \\uparrow x) \\uparrow (y \\uparrow y)$.',
      lines: [
        '$(x \\uparrow x) \\uparrow (y \\uparrow y)$',
        '$= \\overline{x} \\uparrow \\overline{y}$',
        '$= \\overline{\\overline{x}\\;\\overline{y}}$',
        '$= \\overline{\\overline{x}} + \\overline{\\overline{y}}$',
        '$= x + y$',
      ],
      explanation: 'First $x \\uparrow x = \\overline{x}$ and $y \\uparrow y = \\overline{y}$ (a NAND with both inputs tied together is a NOT). Then expand the outer NAND by its definition, $u \\uparrow v = \\overline{uv}$. De Morgan turns the complemented product into a sum of complements, and the double complements cancel. Three NAND gates make one OR gate.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Adders: arithmetic from logic',
      blocks: [
        {
          type: 'p',
          text: 'How does a CPU add? Look at adding two bits: $0 + 0 = 00$, $0 + 1 = 01$, $1 + 0 = 01$, $1 + 1 = 10$ in binary. The low bit (the **sum** $S$) is $1$ exactly when the inputs differ, which is XOR. The high bit (the **carry** $C$) is $1$ only when both are $1$, which is AND. That pair of gates is a **half adder**.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg"><path d="M170,30 Q185,50 170,70 Q205,70 220,50 Q205,30 170,30 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M163,30 Q178,50 163,70" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M170,110 H195 A20,20 0 0 1 195,150 H170 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><text x="30" y="45" font-size="14" text-anchor="middle">x</text><text x="30" y="75" font-size="14" text-anchor="middle">y</text><polyline points="40,40 60,40" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="40,70 90,70" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="60,40 168.6,40" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="60,40 60,120 170,120" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="60" cy="40" r="3" fill="currentColor"/><polyline points="90,70 90,60 168.6,60" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="90,70 90,140 170,140" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="90" cy="70" r="3" fill="currentColor"/><polyline points="220,50 300,50" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="310" y="55" font-size="14" text-anchor="start" class="t-blue">S = x ⊕ y</text><polyline points="215,130 300,130" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="310" y="135" font-size="14" text-anchor="start" class="t-red">C = xy</text><text x="195" y="22" font-size="11" text-anchor="middle" class="t-gray">XOR</text><text x="190" y="168" font-size="11" text-anchor="middle" class="t-gray">AND</text></svg>`,
          alt: 'Half adder: inputs x and y both feed an XOR gate producing S and an AND gate producing C.',
          caption: 'Half adder: $S = x \\oplus y$, $C = xy$. A dot marks where a wire splits.',
          maxWidth: 400,
        },
        {
          type: 'p',
          text: 'To add multi-bit numbers, every column after the first must also add the carry coming in from the column to its right. A [[dm-full-adder]] adds three bits $x$, $y$, $c_{\\text{in}}$ and outputs a sum bit and a carry. It can be built from two half adders and an OR gate.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 570 290" xmlns="http://www.w3.org/2000/svg"><text x="22" y="45" font-size="14" text-anchor="middle">x</text><text x="22" y="75" font-size="14" text-anchor="middle">y</text><text x="22" y="165" font-size="13" text-anchor="middle">cᵢₙ</text><path d="M130,30 Q145,50 130,70 Q165,70 180,50 Q165,30 130,30 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M123,30 Q138,50 123,70" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M130,210 H155 A20,20 0 0 1 155,250 H130 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M300,60 Q315,80 300,100 Q335,100 350,80 Q335,60 300,60 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M293,60 Q308,80 293,100" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M300,140 H325 A20,20 0 0 1 325,180 H300 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M420,175 Q435,195 420,215 Q455,215 470,195 Q455,175 420,175 Z" stroke="currentColor" stroke-width="1.8" fill="none"/><polyline points="34,40 60,40" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="34,70 85,70" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="60,40 128.6,40" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="60,40 60,220 130,220" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="60" cy="40" r="3" fill="currentColor"/><polyline points="85,70 85,60 128.6,60" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="85,70 85,240 130,240" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="85" cy="70" r="3" fill="currentColor"/><polyline points="180,50 230,50 230,70 298.6,70" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="230,70 230,150 300,150" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="230" cy="70" r="3" fill="currentColor"/><polyline points="40,160 260,160 260,90 298.6,90" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="260,160 260,170 300,170" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="260" cy="160" r="3" fill="currentColor"/><polyline points="350,80 520,80" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="526" y="85" font-size="15" text-anchor="start" class="t-blue">S</text><polyline points="345,160 395,160 395,185 425.6,185" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="175,230 395,230 395,205 425.6,205" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="470,195 520,195" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="526" y="200" font-size="14" text-anchor="start" class="t-red">Cₒᵤₜ</text><text x="201" y="68" font-size="12" text-anchor="middle" class="t-gray">x ⊕ y</text><text x="400" y="152" font-size="12" text-anchor="start" class="t-gray">cᵢₙ(x ⊕ y)</text><text x="260" y="248" font-size="12" text-anchor="middle" class="t-gray">xy</text><rect x="112" y="18" width="80" height="244" rx="8" fill="none" stroke="currentColor" stroke-dasharray="4 4" class="s-gray"/><rect x="282" y="50" width="80" height="140" rx="8" fill="none" stroke="currentColor" stroke-dasharray="4 4" class="s-gray"/><text x="152" y="278" font-size="11" text-anchor="middle" class="t-gray">half adder 1</text><text x="322" y="206" font-size="11" text-anchor="middle" class="t-gray">half adder 2</text></svg>`,
          alt: 'Full adder: half adder 1 combines x and y into x XOR y and xy. Half adder 2 combines x XOR y with the carry in, producing S and c_in(x XOR y). An OR gate combines xy and c_in(x XOR y) into the carry out.',
          caption: '$S = x \\oplus y \\oplus c_{\\text{in}}$ and $C_{\\text{out}} = xy + c_{\\text{in}}(x \\oplus y)$. Where two wires cross without a dot they are not connected.',
        },
        {
          type: 'table',
          headers: ['$x$', '$y$', '$c_{\\text{in}}$', '$C_{\\text{out}}$', '$S$', 'meaning'],
          rows: [
            ['$0$', '$0$', '$0$', '$0$', '$0$', '$0 = 00_2$'],
            ['$0$', '$0$', '$1$', '$0$', '$1$', '$1 = 01_2$'],
            ['$0$', '$1$', '$0$', '$0$', '$1$', '$1 = 01_2$'],
            ['$0$', '$1$', '$1$', '$1$', '$0$', '$2 = 10_2$'],
            ['$1$', '$0$', '$0$', '$0$', '$1$', '$1 = 01_2$'],
            ['$1$', '$0$', '$1$', '$1$', '$0$', '$2 = 10_2$'],
            ['$1$', '$1$', '$0$', '$1$', '$0$', '$2 = 10_2$'],
            ['$1$', '$1$', '$1$', '$1$', '$1$', '$3 = 11_2$'],
          ],
          caption: 'The two outputs $C_{\\text{out}}S$ spell the number of $1$s among the inputs in binary. $C_{\\text{out}}$ is the majority function you met earlier!',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $C_{\\text{out}} = xy + c_{\\text{in}}(x \\oplus y)$',
          text: 'There is a carry out when at least two of the three inputs are $1$. Either $x$ and $y$ are both $1$ (the term $xy$), or exactly one of them is $1$ and the carry in is $1$ (the term $c_{\\text{in}}(x \\oplus y)$). These cases cover the majority function\'s four rows $011, 101, 110, 111$.',
        },
        {
          type: 'p',
          text: 'Chain $n$ full adders, each one\'s carry out feeding the next one\'s carry in, and you get an $n$-bit **ripple-carry adder**. A carry out of the top bit means the true sum needs $n + 1$ bits: in an `uint8_t` this is the wraparound $200 + 100 = 300 - 256 = 44$.',
        },
        {
          type: 'code',
          title: 'adder.cpp',
          runnable: true,
          code: `#include <cstdio>

// One full adder, written with the gate operations only.
struct Bits { int sum, carry; };

Bits fullAdder(int x, int y, int cin) {
    int p = x ^ y;                      // half adder 1: XOR
    int sum = p ^ cin;                  // half adder 2: XOR
    int carry = (x & y) | (cin & p);    // the two ANDs feed an OR
    return {sum, carry};
}

// Ripple-carry adder: chain 8 full adders, least significant bit first.
unsigned rippleAdd(unsigned a, unsigned b, int& carryOut) {
    unsigned result = 0;
    int carry = 0;
    for (int i = 0; i < 8; ++i) {
        Bits r = fullAdder((a >> i) & 1, (b >> i) & 1, carry);
        result |= unsigned(r.sum) << i;
        carry = r.carry;
    }
    carryOut = carry;
    return result;
}

int main() {
    std::printf("x y c | S C\\n");
    for (int v = 0; v < 8; ++v) {
        int x = (v >> 2) & 1, y = (v >> 1) & 1, c = v & 1;
        Bits r = fullAdder(x, y, c);
        std::printf("%d %d %d | %d %d\\n", x, y, c, r.sum, r.carry);
    }
    int cout;
    unsigned s = rippleAdd(100, 55, cout);
    std::printf("100 + 55 = %u (carry out %d)\\n", s, cout);
    s = rippleAdd(200, 100, cout);
    std::printf("200 + 100 = %u (carry out %d)\\n", s, cout);
}`,
          output: `x y c | S C
0 0 0 | 0 0
0 0 1 | 1 0
0 1 0 | 1 0
0 1 1 | 0 1
1 0 0 | 1 0
1 0 1 | 0 1
1 1 0 | 0 1
1 1 1 | 1 1
100 + 55 = 155 (carry out 0)
200 + 100 = 44 (carry out 1)`,
          annotations: [
            { lines: '6-11', text: 'The full adder exactly as in the figure: two XORs for the sum, two ANDs into an OR for the carry. In C++, `^`, `&` and `|` on the bits $0$ and $1$ are XOR, AND and OR.' },
            { lines: '14-24', text: 'Bit $i$ of each number is `(a >> i) & 1`. The carry ripples from bit $0$ up to bit $7$, just like column addition by hand.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A 4-bit ripple-carry adder adds $x = 1011_2$ and $y = 0110_2$. There is a carry out of the top bit. What number do the four sum outputs $S_3S_2S_1S_0$ represent? Give it in decimal.',
      answer: '1',
      label: '$S_3S_2S_1S_0 =$',
      hint: 'Add column by column from the right, carrying as you go, or convert: $1011_2 = 11$ and $0110_2 = 6$.',
      explanation: 'Column by column from the right: $1 + 0 = 1$ (carry $0$); $1 + 1 = 10_2$, write $0$ carry $1$; $0 + 1 + 1 = 10_2$, write $0$ carry $1$; $1 + 0 + 1 = 10_2$, write $0$ carry $1$. So $S_3S_2S_1S_0 = 0001_2 = 1$ with carry out $1$. Check: $11 + 6 = 17 = 10001_2$, and the 4-bit adder keeps only the low four bits, $17 - 16 = 1$. That dropped carry is exactly integer overflow.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Karnaugh maps: minimizing by picture',
      blocks: [
        {
          type: 'p',
          text: 'Simplifying with identities works, but it needs insight (like duplicating $xyz$ three times for the majority function). A [[dm-karnaugh-map]] (K-map) turns that insight into a picture. It is a truth table folded into a grid so that **neighbouring cells differ in exactly one variable**. Then any two neighbouring $1$s combine, because $Pz + P\\overline{z} = P(z + \\overline{z}) = P$: the variable that changes disappears.',
        },
        {
          type: 'p',
          text: 'For three variables, use $2$ rows ($x$) and $4$ columns ($yz$). The columns go in **Gray-code order** $00, 01, 11, 10$, not counting order, so that each step changes one bit. The left and right edges are neighbours too ($10$ and $00$ differ in one bit): the map wraps around like the screen in *Asteroids*.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 420 225" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="20" x2="120" y2="60" stroke="currentColor" stroke-width="1.2"/><text x="86" y="58" font-size="13" text-anchor="middle" class="t-gray">x</text><text x="112" y="34" font-size="13" text-anchor="middle" class="t-gray">yz</text><text x="150" y="50" font-size="14" text-anchor="middle">00</text><text x="210" y="50" font-size="14" text-anchor="middle">01</text><text x="270" y="50" font-size="14" text-anchor="middle">11</text><text x="330" y="50" font-size="14" text-anchor="middle">10</text><text x="102" y="95" font-size="14" text-anchor="end">0</text><text x="102" y="155" font-size="14" text-anchor="end">1</text><rect x="120" y="60" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="150" y="96" font-size="17" text-anchor="middle" class="t-gray">0</text><rect x="180" y="60" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="210" y="96" font-size="17" text-anchor="middle" class="t-gray">0</text><rect x="240" y="60" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="270" y="96" font-size="17" text-anchor="middle">1</text><rect x="300" y="60" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="330" y="96" font-size="17" text-anchor="middle" class="t-gray">0</text><rect x="120" y="120" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="150" y="156" font-size="17" text-anchor="middle" class="t-gray">0</text><rect x="180" y="120" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="210" y="156" font-size="17" text-anchor="middle">1</text><rect x="240" y="120" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="270" y="156" font-size="17" text-anchor="middle">1</text><rect x="300" y="120" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="330" y="156" font-size="17" text-anchor="middle">1</text><rect x="245" y="65" width="50" height="110" rx="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-blue f-blue"/><rect x="190" y="130" width="100" height="40" rx="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-red f-red"/><rect x="254" y="134" width="92" height="32" rx="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-green f-green"/><text x="120" y="210" font-size="14" text-anchor="start" class="t-blue">blue: yz</text><text x="220" y="210" font-size="14" text-anchor="start" class="t-red">red: xz</text><text x="320" y="210" font-size="14" text-anchor="start" class="t-green">green: xy</text></svg>`,
          alt: 'Three-variable K-map of the majority function with rows x = 0, 1 and columns yz = 00, 01, 11, 10. Ones at x=0 yz=11 and at x=1 yz=01, 11, 10. Three groups of two: a vertical pair in column 11 (yz), and two overlapping horizontal pairs in row 1 (xz and xy).',
          caption: 'The majority function. Each group of two $1$s loses the one variable that changes inside it. Groups may overlap; the shared cell $xyz$ is the term we duplicated by hand.',
          maxWidth: 420,
        },
        {
          type: 'steps',
          items: [
            { title: 'Fill the map', text: 'Put each output of the truth table in its cell (watch the Gray-code order).' },
            { title: 'Circle groups', text: 'Cover every $1$ with rectangles of $1$s whose sizes are powers of two: $1, 2, 4, 8, \\dots$ cells. Groups may wrap around the edges and may overlap.' },
            { title: 'Make groups large and few', text: 'A group of $2^k$ cells eliminates $k$ variables, so bigger is simpler. Use as few groups as possible.' },
            { title: 'Read off each group', text: 'Keep only the variables that are constant across the group (plain if constant $1$, complemented if constant $0$). Add the terms.' },
          ],
        },
        {
          type: 'p',
          text: 'With four variables use a $4 \\times 4$ grid: rows $wx$ and columns $yz$, both in Gray-code order. Now top and bottom wrap as well as left and right, so the four **corners** are mutual neighbours. Below, $F = \\sum m(0, 1, 2, 5, 8, 9, 10)$ (the minterms with these row numbers, where $wxyz$ is read as a binary number).',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 440 310" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="20" x2="130" y2="60" stroke="currentColor" stroke-width="1.2"/><text x="96" y="58" font-size="13" text-anchor="middle" class="t-gray">wx</text><text x="124" y="32" font-size="13" text-anchor="middle" class="t-gray">yz</text><text x="156" y="50" font-size="14" text-anchor="middle">00</text><text x="208" y="50" font-size="14" text-anchor="middle">01</text><text x="260" y="50" font-size="14" text-anchor="middle">11</text><text x="312" y="50" font-size="14" text-anchor="middle">10</text><text x="116" y="91" font-size="14" text-anchor="end">00</text><text x="116" y="143" font-size="14" text-anchor="end">01</text><text x="116" y="195" font-size="14" text-anchor="end">11</text><text x="116" y="247" font-size="14" text-anchor="end">10</text><defs><clipPath id="dmkmA"><rect x="130" y="60" width="208" height="208"/></clipPath></defs><g clip-path="url(#dmkmA)"><rect x="134" y="38" width="96" height="70" rx="13" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-blue f-blue"/><rect x="134" y="220" width="96" height="70" rx="13" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-blue f-blue"/><rect x="114" y="44" width="58" height="58" rx="13" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-red f-red"/><rect x="296" y="44" width="58" height="58" rx="13" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-red f-red"/><rect x="114" y="226" width="58" height="58" rx="13" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-red f-red"/><rect x="296" y="226" width="58" height="58" rx="13" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-red f-red"/><rect x="195" y="73" width="26" height="78" rx="13" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.4" class="s-green f-green"/></g><rect x="130" y="60" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="156" y="92" font-size="16" text-anchor="middle">1</text><rect x="182" y="60" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="208" y="92" font-size="16" text-anchor="middle">1</text><rect x="234" y="60" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="260" y="92" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="286" y="60" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="312" y="92" font-size="16" text-anchor="middle">1</text><rect x="130" y="112" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="156" y="144" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="182" y="112" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="208" y="144" font-size="16" text-anchor="middle">1</text><rect x="234" y="112" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="260" y="144" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="286" y="112" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="312" y="144" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="130" y="164" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="156" y="196" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="182" y="164" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="208" y="196" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="234" y="164" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="260" y="196" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="286" y="164" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="312" y="196" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="130" y="216" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="156" y="248" font-size="16" text-anchor="middle">1</text><rect x="182" y="216" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="208" y="248" font-size="16" text-anchor="middle">1</text><rect x="234" y="216" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="260" y="248" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="286" y="216" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="312" y="248" font-size="16" text-anchor="middle">1</text><text x="70" y="302" font-size="14" text-anchor="start" class="t-blue">blue: x̄ȳ</text><text x="190" y="302" font-size="14" text-anchor="start" class="t-red">red: x̄z̄</text><text x="310" y="302" font-size="14" text-anchor="start" class="t-green">green: w̄ȳz</text></svg>`,
          alt: 'Four-variable K-map with ones at wx=00 yz=00,01,10; wx=01 yz=01; wx=10 yz=00,01,10. Blue group: the four cells in columns 00 and 01 of rows 00 and 10 (wrapping top to bottom), x-bar y-bar. Red group: the four corners, x-bar z-bar. Green group: column 01 of rows 00 and 01, w-bar y-bar z.',
          caption: 'Blue wraps from the bottom row to the top row; red takes the four corners. Each group of four drops two variables.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Read off the groups',
          steps: [
            { tex: '\\text{blue: rows } 00, 10;\\ \\text{cols } 00, 01 \\implies \\overline{x}\\,\\overline{y}', why: 'Across these four cells $x = 0$ and $y = 0$ stay fixed, while $w$ and $z$ change, so both disappear.' },
            { tex: '\\text{red: corners} \\implies \\overline{x}\\,\\overline{z}', why: 'The corners have $wx \\in \\{00, 10\\}$ and $yz \\in \\{00, 10\\}$: $x = 0$ and $z = 0$ fixed.' },
            { tex: '\\text{green: rows } 00, 01;\\ \\text{col } 01 \\implies \\overline{w}\\,\\overline{y}\\,z', why: 'The $1$ at $wxyz = 0101$ has no larger group available; pairing it with $0001$ keeps $w = 0, y = 0, z = 1$.' },
            { tex: 'F = \\overline{x}\\,\\overline{y} + \\overline{x}\\,\\overline{z} + \\overline{w}\\,\\overline{y}\\,z', why: 'Add the terms. Every $1$ is covered, and no group could be made bigger.' },
          ],
          result: 'Seven 4-literal minterms reduce to three short products.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Beyond four variables',
          text: 'K-maps get awkward past $4$ or $5$ variables. Software (the Quine–McCluskey algorithm, the Espresso heuristic) does the same "merge terms that differ in one variable" step systematically. Exact minimization is NP-hard in general, a phrase you will meet in the last lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'Use the Karnaugh map (rows $wx$, columns $yz$) to find the minimal sum-of-products form of $F$.',
      figure: {
        type: 'figure',
        svg: `<svg viewBox="0 0 440 282" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="20" x2="130" y2="60" stroke="currentColor" stroke-width="1.2"/><text x="96" y="58" font-size="13" text-anchor="middle" class="t-gray">wx</text><text x="124" y="32" font-size="13" text-anchor="middle" class="t-gray">yz</text><text x="156" y="50" font-size="14" text-anchor="middle">00</text><text x="208" y="50" font-size="14" text-anchor="middle">01</text><text x="260" y="50" font-size="14" text-anchor="middle">11</text><text x="312" y="50" font-size="14" text-anchor="middle">10</text><text x="116" y="91" font-size="14" text-anchor="end">00</text><text x="116" y="143" font-size="14" text-anchor="end">01</text><text x="116" y="195" font-size="14" text-anchor="end">11</text><text x="116" y="247" font-size="14" text-anchor="end">10</text><defs><clipPath id="dmkmB"><rect x="130" y="60" width="208" height="208"/></clipPath></defs><g clip-path="url(#dmkmB)"></g><rect x="130" y="60" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="156" y="92" font-size="16" text-anchor="middle">1</text><rect x="182" y="60" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="208" y="92" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="234" y="60" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="260" y="92" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="286" y="60" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="312" y="92" font-size="16" text-anchor="middle">1</text><rect x="130" y="112" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="156" y="144" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="182" y="112" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="208" y="144" font-size="16" text-anchor="middle">1</text><rect x="234" y="112" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="260" y="144" font-size="16" text-anchor="middle">1</text><rect x="286" y="112" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="312" y="144" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="130" y="164" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="156" y="196" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="182" y="164" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="208" y="196" font-size="16" text-anchor="middle">1</text><rect x="234" y="164" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="260" y="196" font-size="16" text-anchor="middle">1</text><rect x="286" y="164" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="312" y="196" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="130" y="216" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="156" y="248" font-size="16" text-anchor="middle">1</text><rect x="182" y="216" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="208" y="248" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="234" y="216" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="260" y="248" font-size="16" text-anchor="middle" class="t-gray">0</text><rect x="286" y="216" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="312" y="248" font-size="16" text-anchor="middle">1</text></svg>`,
        alt: 'Four-variable K-map with ones in the four corners (wx = 00 or 10, yz = 00 or 10) and in the central 2 by 2 block (wx = 01 or 11, yz = 01 or 11). All other cells are 0.',
        maxWidth: 420,
      },
      options: [
        { text: '$\\overline{w}\\,\\overline{x}\\,\\overline{z} + w\\,\\overline{x}\\,\\overline{z} + xz$', why: 'Correct as a formula, but not minimal: the top and bottom corner pairs are neighbours (the map wraps), so they merge into one group of four, $\\overline{x}\\,\\overline{z}$.' },
        { text: '$x \\oplus z$', why: 'That is $1$ when $x$ and $z$ *differ*. Here the $1$s are where $x$ and $z$ agree, so this is the complement of $F$.' },
        { text: '$xz + \\overline{x}\\,\\overline{z}$', correct: true, why: 'The central block has $x = 1, z = 1$; the four corners have $x = 0, z = 0$. Two groups of four, each dropping $w$ and $y$.' },
        { text: '$\\overline{x}\\,\\overline{z}$', why: 'This covers only the corners and misses the four $1$s in the middle.' },
      ],
      explanation: 'Two groups of four cover all eight $1$s. The middle block (rows $01, 11$; columns $01, 11$) keeps $x = 1$ and $z = 1$: term $xz$. The four corners (rows $00, 10$; columns $00, 10$) keep $x = 0$ and $z = 0$: term $\\overline{x}\\,\\overline{z}$. So $F = xz + \\overline{x}\\,\\overline{z}$, which is $1$ exactly when $x = z$: it is XNOR, $\\overline{x \\oplus z}$, and $w$ and $y$ are irrelevant.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Bitwise operations: 32 gates per instruction',
      blocks: [
        {
          type: 'p',
          text: 'In C++, the operators `&`, `|`, `^` and `~` apply AND, OR, XOR and NOT to **every bit position at once**: one instruction, 32 or 64 gates in parallel. Shifts `x << k` and `x >> k` slide the bits (multiplying or dividing an unsigned value by $2^k$). With a **mask** that has a single $1$ in position $k$, `1u << k`, you can work on one bit at a time.',
        },
        {
          type: 'table',
          headers: ['Task', 'C++', 'Boolean reason'],
          rows: [
            ['test bit $k$', '`x & (1u << k)`', '$b \\cdot 1 = b$, $b \\cdot 0 = 0$: keep only bit $k$'],
            ['set bit $k$', '`x |= 1u << k`', '$b + 1 = 1$, $b + 0 = b$'],
            ['clear bit $k$', '`x &= ~(1u << k)`', 'the mask is $0$ only at $k$'],
            ['toggle bit $k$', '`x ^= 1u << k`', '$b \\oplus 1 = \\overline{b}$, $b \\oplus 0 = b$'],
            ['clear lowest set bit', '`x & (x - 1)`', 'see below'],
            ['isolate lowest set bit', '`x & -x`', 'two\'s complement: $-x = \\overline{x} + 1$'],
          ],
        },
        {
          type: 'derivation',
          title: 'Why $x \\mathbin{\\&} (x - 1)$ clears the lowest $1$ bit',
          steps: [
            { tex: 'x = \\underbrace{\\cdots\\cdots}_{\\text{prefix } P}\\,1\\,\\underbrace{0 \\cdots 0}_{k \\text{ zeros}}', why: 'Write $x \\ne 0$ as some prefix, then its lowest $1$, then $k$ trailing zeros.' },
            { tex: 'x - 1 = P\\,0\\,\\underbrace{1 \\cdots 1}_{k \\text{ ones}}', why: 'Subtracting $1$ borrows through the trailing zeros: they become $1$s and the lowest $1$ becomes $0$. The prefix is untouched.' },
            { tex: 'x \\mathbin{\\&} (x - 1) = P\\,0\\,\\underbrace{0 \\cdots 0}_{k}', why: 'AND bit by bit: the prefix ANDs with itself ($P \\cdot P = P$, idempotent), and every lower position has a $0$ on one side.' },
          ],
          result: 'Example: $44 = 101100_2$, $43 = 101011_2$, $44 \\mathbin{\\&} 43 = 101000_2 = 40$. A consequence: $x$ is a power of two exactly when $x \\ne 0$ and $x \\mathbin{\\&} (x - 1) = 0$.',
        },
        {
          type: 'p',
          text: 'Repeating the trick until $x = 0$ counts the $1$ bits, the **population count** (popcount), in as many loop passes as there are $1$s (Brian Kernighan\'s method). C++20 gives you `std::popcount` in `<bit>`, which compiles to a single CPU instruction on modern hardware.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Bit flags for game entity state',
          text: 'Engines pack yes/no properties of an entity (alive, visible, burning, stunned…) into one integer, one [[dm-bit-mask|bit mask]] per property. A whole set of properties fits in a register, copying it is free, and a question such as "alive and not invulnerable?" is one AND and one compare. Collision layers in Unity and Unreal work the same way: two objects interact when `layerA & maskB` is nonzero. Under the hood this is the set-as-[[dm-bit-vector|bit vector]] idea: OR is union, AND is intersection.',
        },
        {
          type: 'code',
          title: 'bits.cpp',
          runnable: true,
          code: `#include <bit>
#include <cstdint>
#include <cstdio>

// Entity state as bit flags: one bit per yes/no property.
enum Flag : std::uint32_t {
    Alive     = 1u << 0,
    Visible   = 1u << 1,
    Burning   = 1u << 2,
    Stunned   = 1u << 3,
    Invulnerable = 1u << 4,
};

// Kernighan's popcount: x & (x - 1) clears the lowest set bit.
int popcountKernighan(std::uint32_t x) {
    int count = 0;
    while (x != 0) {
        x &= x - 1;
        ++count;
    }
    return count;
}

bool isPowerOfTwo(std::uint32_t x) { return x != 0 && (x & (x - 1)) == 0; }

int main() {
    std::uint32_t state = Alive | Visible;      // set two flags
    state |= Burning;                           // set a flag
    state &= ~Visible;                          // clear a flag
    state ^= Stunned;                           // toggle a flag
    bool canBeHit = (state & Alive) && !(state & Invulnerable);
    std::printf("state = 0x%02X, canBeHit = %d\\n", state, canBeHit);
    std::printf("flags set: %d (std::popcount says %d)\\n",
                popcountKernighan(state), std::popcount(state));

    std::uint32_t x = 44;                       // 101100 in binary
    std::printf("x & (x-1) = %u, lowest set bit x & -x = %u\\n",
                x & (x - 1), x & (~x + 1));
    std::printf("isPowerOfTwo(64) = %d, isPowerOfTwo(96) = %d\\n",
                isPowerOfTwo(64), isPowerOfTwo(96));
}`,
          output: `state = 0x0D, canBeHit = 1
flags set: 3 (std::popcount says 3)
x & (x-1) = 40, lowest set bit x & -x = 4
isPowerOfTwo(64) = 1, isPowerOfTwo(96) = 0`,
          annotations: [
            { lines: '6-12', text: 'Each flag is a distinct power of two, so each owns one bit.' },
            { lines: '15-22', text: 'Kernighan\'s loop: each pass deletes one $1$ bit, so it runs popcount$(x)$ times.' },
            { lines: '27-30', text: 'Set, clear and toggle: state goes $0011_2 \\to 0111_2 \\to 0101_2 \\to 1101_2 = \\texttt{0x0D}$.' },
            { lines: '37-38', text: '`~x + 1` is $-x$ in two\'s complement, written this way to avoid negating an unsigned value.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'numeric',
      prompt: 'Compute `x & (x - 1)` for `x = 52`. Give the result in decimal.',
      answer: '48',
      hint: 'Write $52$ in binary and clear its lowest $1$ bit.',
      explanation: '$52 = 32 + 16 + 4 = 110100_2$ and $51 = 110011_2$. ANDing keeps the prefix $110$ and zeroes everything from the lowest $1$ down: $110000_2 = 48$. In words, $x \\mathbin{\\&} (x - 1)$ removed the lowest set bit, worth $4$: $52 - 4 = 48$.',
    },
  ],
  takeaways: [
    'Boolean algebra on $\\{0, 1\\}$ uses complement, sum (OR, with $1 + 1 = 1$) and product (AND); there are $2^{2^n}$ Boolean functions of $n$ variables.',
    'The Boolean identities mirror the logical equivalences: De Morgan ($\\overline{xy} = \\overline{x} + \\overline{y}$), absorption ($x + xy = x$), both distributive laws, and duality.',
    'Every truth table has a sum-of-products form (one minterm per $1$ row) and a product-of-sums form (one maxterm per $0$ row), so $\\{+, \\cdot, \\overline{\\phantom{x}}\\}$, and even NAND alone, is functionally complete.',
    'A half adder is XOR plus AND; a full adder computes $S = x \\oplus y \\oplus c_{\\text{in}}$ and $C_{\\text{out}} = xy + c_{\\text{in}}(x \\oplus y)$, and chaining them adds binary numbers.',
    'Karnaugh maps use Gray-code order so neighbours differ in one variable; circling power-of-two groups (with wraparound) gives a minimal sum of products.',
    'In C++, `&`, `|`, `^`, `~` are bitwise gates; masks set, clear, toggle and test flags, and `x & (x - 1)` clears the lowest set bit.',
  ],
  reading: [
    {
      title: 'Wikipedia — Boolean algebra',
      url: 'https://en.wikipedia.org/wiki/Boolean_algebra',
      source: 'wikipedia',
      note: 'The laws, duality and normal forms in one place, plus the history from Boole to Shannon.',
    },
    {
      title: 'Wikipedia — Karnaugh map',
      url: 'https://en.wikipedia.org/wiki/Karnaugh_map',
      source: 'wikipedia',
      note: 'More worked K-map examples, including don\'t-care conditions and race hazards.',
    },
    {
      title: 'Wikipedia — Adder (electronics)',
      url: 'https://en.wikipedia.org/wiki/Adder_(electronics)',
      source: 'wikipedia',
      note: 'Half adders, full adders, and the faster carry-lookahead adders real CPUs use instead of rippling carries.',
    },
    {
      title: 'Sean Eron Anderson — Bit Twiddling Hacks',
      url: 'https://graphics.stanford.edu/~seander/bithacks.html',
      source: 'other',
      note: 'The classic collection of bit tricks (popcount, power-of-two tests, bit reversal) with explanations.',
    },
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Its logic chapters cover the same equivalences from the propositional side, useful for seeing the identities as logic laws.',
    },
  ],
};
