import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-direct-proof',
  title: 'Direct Proof and Proof by Contrapositive',
  summary: 'What a proof really is, how definitions drive it, and your first two proof techniques: straight from hypothesis to conclusion, and backwards through the contrapositive.',
  minutes: 18,
  objectives: [
    'Explain what a proof is and why testing examples cannot replace one',
    'State the definitions of even, odd, divides and rational precisely, in quantified form',
    'Write direct proofs about parity, divisibility and rational numbers',
    'Prove a conditional by proving its contrapositive, and recognise when that is easier',
    'Spot common proof-writing mistakes, including reused variables and proof by example',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'What is a proof?',
      blocks: [
        {
          type: 'p',
          text: 'In Unit 1 you learned the rules of logic. A **proof** uses them for real: it is a complete, step-by-step argument that a statement is true, in which every step follows from the hypotheses, definitions, previously proved results or basic facts of algebra by valid reasoning.',
        },
        {
          type: 'definition',
          term: 'Theorem vocabulary',
          text: 'A **theorem** is a statement that has been proved. A **lemma** is a smaller theorem proved mainly to help prove a bigger one. A **corollary** follows quickly from a theorem just proved. A **conjecture** is a statement believed true but not yet proved. **Axioms** are the starting assumptions we accept without proof (for us: the usual algebra of integers and real numbers).',
        },
        {
          type: 'p',
          text: 'Most theorems have the form $\\forall x\\, (P(x) \\to Q(x))$, often with the "for all" left implicit: "if $n$ is odd, then $n^2$ is odd" means *for every integer* $n$. As you saw with universal generalization, you prove such a statement by taking an **arbitrary** $x$, assuming $P(x)$, and deducing $Q(x)$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why examples are not enough',
          text: 'A "for all integers" claim covers infinitely many cases. Checking a million of them is evidence, not proof: the claim "$n^2 + n + 41$ is prime" holds for $n = 0, 1, \\dots, 39$ and then fails at $n = 40$, where $40^2 + 40 + 41 = 41^2$. In software terms, tests show the presence of bugs, never their absence. A proof is a test that covers every input at once.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Proofs in a programmer\'s life',
          text: 'You will rarely write a formal proof at a game studio, but you will constantly *reason* like one: why this loop terminates, why this index never goes out of bounds, why this hash never collides on this input set, why this optimisation gives the same result. Algorithm interviews and code reviews are informal proofs.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Goldbach\'s statement "every even integer greater than $2$ is a sum of two primes" has been checked by computer up to $4 \\times 10^{18}$, but nobody has proved it. What is it called?',
      options: [
        { text: 'A theorem', why: 'A theorem must have a proof. Checking finitely many cases, however many, does not prove a statement about all even integers.' },
        { text: 'A lemma', why: 'A lemma is a proved helper result. Goldbach\'s statement is not proved at all.' },
        { text: 'A conjecture', correct: true, why: 'It is believed true (with enormous evidence) but has no proof: that is exactly a conjecture.' },
        { text: 'An axiom', why: 'Axioms are basic assumptions we agree to accept, like the rules of arithmetic. Goldbach\'s statement is something mathematicians want to *derive* from them.' },
      ],
      explanation: 'Goldbach\'s conjecture (1742) is one of the oldest open problems in mathematics. Its status shows why proofs matter: even $4 \\times 10^{18}$ confirmed cases leave infinitely many unchecked, and the $n^2 + n + 41$ example shows a pattern can break long after you stop looking.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Definitions are where proofs start',
      blocks: [
        {
          type: 'p',
          text: 'Beginners often ask "how do I even start a proof?" The answer is almost always: **write down the definitions**. A proof turns the hypothesis into algebra using a definition, manipulates the algebra, and turns the result back into words using another definition. So definitions must be exact.',
        },
        {
          type: 'table',
          headers: ['Term', 'Definition (all letters are integers unless stated)', 'Example'],
          rows: [
            ['$n$ is **even**', '$\\exists k \\in \\mathbb{Z}\\, (n = 2k)$', '$-6 = 2 \\cdot (-3)$'],
            ['$n$ is **odd**', '$\\exists k \\in \\mathbb{Z}\\, (n = 2k + 1)$', '$-7 = 2 \\cdot (-4) + 1$'],
            ['$a$ **divides** $b$, written $a \\mid b$ ($a \\ne 0$)', '$\\exists k \\in \\mathbb{Z}\\, (b = ak)$', '$3 \\mid 12$ since $12 = 3 \\cdot 4$'],
            ['$r \\in \\mathbb{R}$ is [[rational-number|rational]]', '$\\exists p, q \\in \\mathbb{Z}\\, (q \\ne 0 \\land r = \\tfrac{p}{q})$', '$0.75 = \\tfrac{3}{4}$'],
          ],
          caption: 'Every definition is an existential statement. To *use* one, name the witness ($k$, $p$, $q$). To *prove* one, produce a witness.',
        },
        {
          type: 'p',
          text: 'We will also use one basic fact about [[integer|integers]]: **every integer is even or odd, and not both.** (It follows from dividing by $2$ with a remainder of $0$ or $1$, which Unit 4 makes precise.) So "not even" and "odd" mean the same thing.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: '$a \\mid b$ is a statement, not a number',
          text: '$3 \\mid 12$ is the *true proposition* "3 divides 12". It is not the fraction $3/12$ and it is not the number $4$. Writing "$3 \\mid 12 = 4$" mixes up the two. Also note the direction: $3 \\mid 12$ is true but $12 \\mid 3$ is false.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'fill',
      prompt: 'Complete the definition of divisibility.',
      template: 'For integers $a \\ne 0$ and $b$, $a \\mid b$ means there is an integer $k$ with $b =$ ___. So $7 \\mid 21$ because the witness is $k =$ ___.',
      blanks: [{ answers: ['$ak$'] }, { answers: ['$3$'] }],
      wordBank: ['$ak$', '$3$', '$bk$', '$a + k$', '$\\tfrac{1}{3}$', '$21$'],
      explanation: '$a \\mid b$ means $b$ is an integer multiple of $a$: $b = ak$ for some $k \\in \\mathbb{Z}$. For $7 \\mid 21$ the witness is $k = 3$, since $21 = 7 \\cdot 3$. Writing $a = bk$ would reverse the meaning, and $k = \\tfrac{1}{3}$ is not an integer (it would "show" $21 \\mid 7$, which is false).',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Direct proof',
      blocks: [
        {
          type: 'p',
          text: 'A [[dm-direct-proof|direct proof]] of "if $P$ then $Q$" assumes $P$ is true and builds a chain of valid steps ending in $Q$. (If $P$ is false the conditional is vacuously true, so the only case that needs work is $P$ true.)',
        },
        {
          type: 'theorem',
          name: 'Theorem',
          text: 'The sum of two odd integers is even.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: '\\text{Let } m, n \\text{ be arbitrary odd integers.}', why: 'Arbitrary, so the result will hold for all odd integers (universal generalization).' },
            { tex: 'm = 2a + 1, \\quad n = 2b + 1 \\quad (a, b \\in \\mathbb{Z})', why: 'Unpack the definition of odd. Use **different** letters: $m$ and $n$ need not be equal.' },
            { tex: 'm + n = 2a + 2b + 2', why: 'Add the two equations.' },
            { tex: '= 2(a + b + 1)', why: 'Factor out $2$: we are aiming for the shape $2 \\cdot (\\text{integer})$.' },
            { tex: 'k = a + b + 1 \\in \\mathbb{Z}', why: 'Sums of integers are integers, so $k$ is a legitimate witness.' },
            { tex: 'm + n = 2k \\implies m + n \\text{ is even.} \\quad \\blacksquare', why: 'Repack the definition of even. The square $\\blacksquare$ (or "QED") marks the end of a proof.' },
          ],
          result: 'Notice the shape: **assume, unpack, compute, repack, conclude**.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg"><line x1="170.0" y1="46.0" x2="170.0" y2="74.0" stroke="currentColor" stroke-width="1.6"/><path d="M170.0,74.0 L166.2,65.9 L173.8,65.9 Z" fill="currentColor"/><line x1="170.0" y1="106.0" x2="170.0" y2="134.0" stroke="currentColor" stroke-width="1.6"/><path d="M170.0,134.0 L166.2,125.9 L173.8,125.9 Z" fill="currentColor"/><line x1="170.0" y1="166.0" x2="170.0" y2="194.0" stroke="currentColor" stroke-width="1.6"/><path d="M170.0,194.0 L166.2,185.9 L173.8,185.9 Z" fill="currentColor"/><line x1="170.0" y1="226.0" x2="170.0" y2="254.0" stroke="currentColor" stroke-width="1.6"/><path d="M170.0,254.0 L166.2,245.9 L173.8,245.9 Z" fill="currentColor"/><rect x="20" y="14" width="300" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="170" y="35" text-anchor="middle" font-size="13" class="t-blue">Assume: m and n are odd integers</text><rect x="20" y="74" width="300" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="170" y="95" text-anchor="middle" font-size="13">m = 2a + 1,  n = 2b + 1  (a, b ∈ ℤ)</text><rect x="20" y="134" width="300" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="170" y="155" text-anchor="middle" font-size="13">m + n = 2a + 2b + 2 = 2(a + b + 1)</text><rect x="20" y="194" width="300" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="170" y="215" text-anchor="middle" font-size="13">m + n = 2k  with  k = a + b + 1 ∈ ℤ</text><rect x="20" y="254" width="300" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="170" y="275" text-anchor="middle" font-size="13" class="t-green">Conclude: m + n is even</text><text x="334" y="64" text-anchor="start" font-size="12" class="t-purple">unpack the definition</text><text x="334" y="124" text-anchor="start" font-size="12" class="t-purple">algebra</text><text x="334" y="184" text-anchor="start" font-size="12" class="t-purple">a + b + 1 is an integer</text><text x="334" y="244" text-anchor="start" font-size="12" class="t-purple">repack the definition</text></svg>',
          alt: 'Flowchart of the proof: assume m and n odd; unpack to m = 2a+1, n = 2b+1; algebra gives m+n = 2(a+b+1); a+b+1 is an integer so m+n = 2k; conclude m+n even.',
          caption: 'Most first proofs follow this pipeline. The creative part is the algebra in the middle: rearranging until the target shape ($2k$, $2k + 1$, $ak$, …) appears.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 182" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="40" r="7" fill="currentColor" class="f-blue"/><circle cx="30" cy="62" r="7" fill="currentColor" class="f-blue"/><circle cx="52" cy="40" r="7" fill="currentColor" class="f-blue"/><circle cx="52" cy="62" r="7" fill="currentColor" class="f-blue"/><circle cx="74" cy="40" r="7" fill="currentColor" class="f-blue"/><circle cx="74" cy="62" r="7" fill="currentColor" class="f-blue"/><circle cx="96" cy="40" r="7" fill="currentColor" class="f-orange"/><text x="60" y="100" text-anchor="middle" font-size="13">m = 7 = 2·3 + 1</text><text x="140" y="56" text-anchor="middle" font-size="22">+</text><circle cx="170" cy="40" r="7" fill="currentColor" class="f-purple"/><circle cx="170" cy="62" r="7" fill="currentColor" class="f-purple"/><circle cx="192" cy="40" r="7" fill="currentColor" class="f-purple"/><circle cx="192" cy="62" r="7" fill="currentColor" class="f-purple"/><circle cx="214" cy="40" r="7" fill="currentColor" class="f-purple"/><circle cx="214" cy="62" r="7" fill="currentColor" class="f-purple"/><circle cx="236" cy="40" r="7" fill="currentColor" class="f-purple"/><circle cx="236" cy="62" r="7" fill="currentColor" class="f-purple"/><circle cx="258" cy="40" r="7" fill="currentColor" class="f-orange"/><text x="215" y="100" text-anchor="middle" font-size="13">n = 9 = 2·4 + 1</text><text x="290" y="56" text-anchor="middle" font-size="22">=</text><circle cx="320" cy="40" r="7" fill="currentColor" class="f-blue"/><circle cx="320" cy="62" r="7" fill="currentColor" class="f-blue"/><circle cx="342" cy="40" r="7" fill="currentColor" class="f-blue"/><circle cx="342" cy="62" r="7" fill="currentColor" class="f-blue"/><circle cx="364" cy="40" r="7" fill="currentColor" class="f-blue"/><circle cx="364" cy="62" r="7" fill="currentColor" class="f-blue"/><circle cx="386" cy="40" r="7" fill="currentColor" class="f-purple"/><circle cx="386" cy="62" r="7" fill="currentColor" class="f-purple"/><circle cx="408" cy="40" r="7" fill="currentColor" class="f-purple"/><circle cx="408" cy="62" r="7" fill="currentColor" class="f-purple"/><circle cx="430" cy="40" r="7" fill="currentColor" class="f-purple"/><circle cx="430" cy="62" r="7" fill="currentColor" class="f-purple"/><circle cx="452" cy="40" r="7" fill="currentColor" class="f-purple"/><circle cx="452" cy="62" r="7" fill="currentColor" class="f-purple"/><circle cx="474" cy="40" r="7" fill="currentColor" class="f-orange"/><circle cx="474" cy="62" r="7" fill="currentColor" class="f-orange"/><rect x="462" y="28" width="24" height="46" rx="8" fill="none" stroke="currentColor" class="s-orange" stroke-width="1.5" stroke-dasharray="3 3"/><text x="410" y="100" text-anchor="middle" font-size="13">16 = 2·(3 + 4 + 1)</text><text x="260" y="148" text-anchor="middle" font-size="13" class="t-gray">An odd number is pairs plus one leftover dot.</text><text x="260" y="168" text-anchor="middle" font-size="13" class="t-gray">The two leftovers pair up, so nothing is left over: the sum is even.</text></svg>',
          alt: 'Seven dots arranged as three pairs plus one leftover, plus nine dots as four pairs plus one leftover, equals sixteen dots in eight pairs with the two leftovers forming the last pair.',
          caption: 'The same proof as a picture: an odd number is "pairs plus one", and two leftovers make a pair. The algebra $2a + 1 + 2b + 1 = 2(a + b + 1)$ says exactly this.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'order',
      prompt: 'Put the lines of a direct proof that **the product of two odd integers is odd** in order.',
      lines: [
        'Let $m$ and $n$ be odd integers.',
        'Then $m = 2a + 1$ and $n = 2b + 1$ for some integers $a, b$.',
        'So $mn = 4ab + 2a + 2b + 1$.',
        'Hence $mn = 2(2ab + a + b) + 1$.',
        'Since $k = 2ab + a + b$ is an integer, $mn = 2k + 1$ is odd. $\\blacksquare$',
      ],
      distractors: ['Then $m = 2k + 1$ and $n = 2k + 1$ for some integer $k$.'],
      explanation: 'Assume, unpack (with different letters $a$ and $b$), multiply out $(2a + 1)(2b + 1) = 4ab + 2a + 2b + 1$, group the even part as $2(\\dots)$, then repack as $2k + 1$. The distractor uses the same $k$ for both numbers, which secretly assumes $m = n$ and proves only that the square of an odd number is odd.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'expr',
      prompt: 'In the proof above, $mn = (2a + 1)(2b + 1)$ is written as $2k + 1$. Give $k$ in terms of $a$ and $b$.',
      label: '$k =$',
      answer: '2a*b + a + b',
      answerTex: '2ab + a + b',
      variables: ['a', 'b'],
      hint: 'Expand $(2a + 1)(2b + 1)$, subtract $1$, and divide by $2$.',
      explanation: '$(2a + 1)(2b + 1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1$, so $k = 2ab + a + b$. The proof needs only that $k$ is an integer, which it is because integers are closed under multiplication and addition. Check with $m = 3$ ($a = 1$), $n = 5$ ($b = 2$): $k = 4 + 1 + 2 = 7$ and $2 \\cdot 7 + 1 = 15 = 3 \\cdot 5$.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Two more direct proofs: divisibility and rationals',
      blocks: [
        {
          type: 'theorem',
          name: 'Transitivity of divisibility',
          text: 'For integers $a, b, c$ with $a, b \\ne 0$: if $a \\mid b$ and $b \\mid c$, then $a \\mid c$.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: '\\text{Assume } a \\mid b \\text{ and } b \\mid c.', why: 'Direct proof: assume the hypothesis.' },
            { tex: 'b = ak, \\quad c = b\\ell \\quad (k, \\ell \\in \\mathbb{Z})', why: 'Unpack the definition of divides twice, with different witnesses $k$ and $\\ell$.' },
            { tex: 'c = (ak)\\ell = a(k\\ell)', why: 'Substitute $b = ak$ into $c = b\\ell$, then regroup (associativity).' },
            { tex: 'k\\ell \\in \\mathbb{Z} \\implies a \\mid c \\quad \\blacksquare', why: 'A product of integers is an integer, so $k\\ell$ is a witness for $a \\mid c$.' },
          ],
          result: 'Example: $3 \\mid 12$ ($k = 4$) and $12 \\mid 60$ ($\\ell = 5$), so $60 = 3 \\cdot 20$.',
        },
        {
          type: 'theorem',
          name: 'Rationals are closed under addition',
          text: 'If $r$ and $s$ are rational, then $r + s$ is rational.',
        },
        {
          type: 'derivation',
          title: 'Proof',
          steps: [
            { tex: 'r = \\frac{a}{b}, \\quad s = \\frac{c}{d}, \\quad a, b, c, d \\in \\mathbb{Z}, \\; b, d \\ne 0', why: 'Unpack the definition of rational for each number.' },
            { tex: 'r + s = \\frac{ad + bc}{bd}', why: 'Common denominator, ordinary fraction algebra.' },
            { tex: 'ad + bc \\in \\mathbb{Z}, \\quad bd \\in \\mathbb{Z}, \\quad bd \\ne 0', why: 'Integers are closed under $+$ and $\\times$; a product of nonzero numbers is nonzero. This last check is easy to forget and essential.' },
            { tex: '\\therefore\\; r + s \\in \\mathbb{Q} \\quad \\blacksquare', why: 'Repack: $r + s$ is an integer over a nonzero integer.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Work backward, write forward',
          text: 'On scratch paper, start from the goal: "I need $c = a \\cdot (\\text{something})$." Then look at what the hypotheses give you. Once you see the bridge, write the proof in the forward direction. The final proof hides the scratch work, which is why proofs can look like magic.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Follow the transitivity proof with $a = 3$, $b = 12$, $c = 60$. With $b = ak$ and $c = b\\ell$, the proof writes $c = a \\cdot (k\\ell)$. What is the witness $k\\ell$?',
      label: '$k\\ell =$',
      answer: '20',
      hint: 'Find $k$ from $12 = 3k$ and $\\ell$ from $60 = 12\\ell$.',
      explanation: '$12 = 3 \\cdot 4$ gives $k = 4$ and $60 = 12 \\cdot 5$ gives $\\ell = 5$, so $k\\ell = 20$, and indeed $60 = 3 \\cdot 20$. The proof does not need the specific numbers, only that $k\\ell$ is an integer; the example just makes the witness visible.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Writing proofs well',
      blocks: [
        {
          type: 'p',
          text: 'A proof is written for a reader, not for you. It should be checkable line by line by someone who did not see your scratch work. Good proofs follow a few conventions:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Say what you will prove and how', text: '"We prove the contrapositive." "Suppose $n$ is an odd integer." The reader should never have to guess the strategy.' },
            { title: 'Introduce every variable', text: '"Let $n$ be an integer." "…for some integer $k$." A letter that appears without introduction is a red flag.' },
            { title: 'Use full sentences', text: 'Equations are part of sentences, joined by words like "so", "since", "hence", "therefore". A column of bare equations is not a proof.' },
            { title: 'Justify non-obvious steps', text: 'Cite the definition, the earlier theorem or the algebra rule you used.' },
            { title: 'Mark the end', text: 'Finish with a sentence that states the conclusion, and $\\blacksquare$.' },
          ],
        },
        {
          type: 'compare',
          left: {
            title: 'Not a proof',
            tone: 'bad',
            text: '$3 + 5 = 8$, $7 + 9 = 16$, $-1 + 11 = 10$. These are all even, so the sum of two odd integers is even.',
          },
          right: {
            title: 'A proof',
            tone: 'good',
            text: 'Let $m$ and $n$ be odd integers. Then $m = 2a + 1$ and $n = 2b + 1$ for some integers $a$ and $b$. Hence $m + n = 2(a + b + 1)$, and since $a + b + 1$ is an integer, $m + n$ is even. $\\blacksquare$',
          },
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Graders look for three things: the definitions are stated and used (not just "obviously even"), the variables are introduced with their types, and the final line matches the claim exactly. A correct idea with a missing definition step typically loses as much credit as a small algebra slip.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'error',
      prompt: 'Find the first incorrect line in this attempted proof that "if $m$ and $n$ are even, then $m + n$ is divisible by $4$".',
      lines: [
        'Let $m$ and $n$ be even integers.',
        'Then $m = 2k$ and $n = 2k$ for some integer $k$.',
        'So $m + n = 2k + 2k = 4k$.',
        'Since $k$ is an integer, $4 \\mid m + n$. $\\blacksquare$',
      ],
      errorLines: [2],
      explanation: 'Line 2 uses the **same** witness $k$ for both numbers, which silently assumes $m = n$. Correctly, $m = 2a$ and $n = 2b$ for some integers $a, b$, so $m + n = 2(a + b)$: even, but not necessarily a multiple of $4$. In fact the "theorem" is false: $2 + 4 = 6$ is not divisible by $4$. Reusing a variable name is the most common way first proofs go wrong.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Proof by contrapositive',
      blocks: [
        {
          type: 'p',
          text: 'Try to prove directly: "if $n^2$ is even, then $n$ is even." Assume $n^2 = 2k$. Then $n = \\pm\\sqrt{2k}$, and now what? Square roots do not help us show something is an integer multiple of $2$. The hypothesis is hard to use.',
        },
        {
          type: 'p',
          text: 'Unit 1 gave us an escape: $p \\to q \\equiv \\neg q \\to \\neg p$. A [[dm-proof-by-contrapositive|proof by contrapositive]] proves $\\neg q \\to \\neg p$ directly instead. Here that means: if $n$ is **not** even (odd), then $n^2$ is **not** even (odd). Now the hypothesis gives us a formula for $n$, and squaring is easy.',
        },
        {
          type: 'derivation',
          title: 'Theorem: for every integer $n$, if $n^2$ is even, then $n$ is even.',
          steps: [
            { tex: '\\text{We prove the contrapositive: if } n \\text{ is odd, then } n^2 \\text{ is odd.}', why: 'State the method. "Not even" is "odd" because every integer is exactly one of the two.' },
            { tex: 'n = 2k + 1 \\quad (k \\in \\mathbb{Z})', why: 'Unpack: assume $n$ is odd.' },
            { tex: 'n^2 = 4k^2 + 4k + 1', why: 'Square the binomial: $(2k + 1)^2 = 4k^2 + 4k + 1$.' },
            { tex: '= 2(2k^2 + 2k) + 1', why: 'Factor $2$ out of the first two terms.' },
            { tex: 'n^2 \\text{ is odd, since } 2k^2 + 2k \\in \\mathbb{Z}. \\quad \\blacksquare', why: 'Repack the definition of odd. By contrapositive equivalence the original statement is proved.' },
          ],
          result: 'Combined with "if $n$ is even then $n^2$ is even" (try it: $(2k)^2 = 2(2k^2)$), this shows $n$ is even **if and only if** $n^2$ is even. The next lesson uses it to prove $\\sqrt{2}$ is irrational.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'When to reach for the contrapositive',
          text: 'Use it when the **conclusion\'s negation** gives you more to work with than the hypothesis does. Typical signals: the hypothesis involves a square, a product or a sum that is hard to "undo", while the negated conclusion hands you a formula ($n = 2k + 1$). Also: when the conclusion is itself a negative statement ("… then $x$ is not rational"), its negation is positive and usable.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Contrapositive, not converse',
          text: 'Proving "if $n$ is even then $n^2$ is even" does **not** prove "if $n^2$ is even then $n$ is even". That is the converse. You must negate **and** swap: assume not-$q$, derive not-$p$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'To prove "for real numbers $x, y$: if $x + y \\ge 2$, then $x \\ge 1$ or $y \\ge 1$" by contrapositive, what do you assume and what do you show?',
      options: [
        { text: 'Assume $x < 1$ and $y < 1$; show $x + y < 2$.', correct: true, why: 'The negation of "$x \\ge 1$ or $y \\ge 1$" is "$x < 1$ and $y < 1$" (De Morgan), and the negation of $x + y \\ge 2$ is $x + y < 2$.' },
        { text: 'Assume $x < 1$ or $y < 1$; show $x + y < 2$.', why: 'De Morgan was not applied: the negation of an "or" is an "and". With only $x < 1$ you cannot bound $x + y$ ($x = 0$, $y = 5$).' },
        { text: 'Assume $x \\ge 1$ or $y \\ge 1$; show $x + y \\ge 2$.', why: 'This is the converse. It is also false: $x = 1$, $y = -10$.' },
        { text: 'Assume $x + y < 2$; show $x < 1$ and $y < 1$.', why: 'This is the inverse (negate without swapping), which is equivalent to the converse, not to the original.' },
      ],
      explanation: 'The contrapositive of $p \\to q$ is $\\neg q \\to \\neg p$. Here $\\neg q$ is "$x < 1$ and $y < 1$" and $\\neg p$ is "$x + y < 2$". The proof is then one line: adding $x < 1$ and $y < 1$ gives $x + y < 2$. The direct route would have to rule out both $x < 1$ and $y < 1$ from a single inequality, which is clumsier.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Definitions in code: the negative-odd bug',
      blocks: [
        {
          type: 'p',
          text: 'Definitions matter in code too. Many programmers test oddness with `n % 2 == 1`. By our definition, $-3$ is odd ($-3 = 2 \\cdot (-2) + 1$), but in C++ the `%` operator truncates toward zero, so `-3 % 2` is `-1`, not `1`. The test silently returns `false` for every negative odd number.',
        },
        {
          type: 'code',
          title: 'parity.cpp',
          runnable: true,
          code: `#include <cstdio>

// Definition: n is odd iff n = 2k + 1 for some integer k.
bool isOddWrong(int n) { return n % 2 == 1; }   // breaks for negative n
bool isOdd(int n)      { return n % 2 != 0; }   // matches the definition

int main() {
    for (int n = -3; n <= 3; ++n)
        std::printf("n = %2d   n %% 2 = %2d   wrong: %d   right: %d\\n",
                    n, n % 2, isOddWrong(n), isOdd(n));

    // Testing a theorem on many cases is evidence, not proof.
    int checked = 0;
    for (int m = -999; m <= 999; m += 2)
        for (int n = -999; n <= 999; n += 2)
            if ((m + n) % 2 == 0) ++checked;
    std::printf("odd + odd was even in all %d tested pairs\\n", checked);
}`,
          output: `n = -3   n % 2 = -1   wrong: 0   right: 1
n = -2   n % 2 =  0   wrong: 0   right: 0
n = -1   n % 2 = -1   wrong: 0   right: 1
n =  0   n % 2 =  0   wrong: 0   right: 0
n =  1   n % 2 =  1   wrong: 1   right: 1
n =  2   n % 2 =  0   wrong: 0   right: 0
n =  3   n % 2 =  1   wrong: 1   right: 1
odd + odd was even in all 1000000 tested pairs`,
          annotations: [
            { lines: 4, text: 'For negative odd `n`, C++ gives `n % 2 == -1`, so this returns `false`. A real bug in grid code that uses negative tile coordinates (checkerboard patterns, hex offsets).' },
            { lines: 5, text: '"Remainder is nonzero" matches the definition for every sign. `(n & 1) != 0` also works on two\'s-complement machines.' },
            { lines: '13-16', text: 'One million passing cases, and still not a proof: the loop covers a finite box, the theorem covers all of $\\mathbb{Z}$. The four-line proof on the earlier card does.' },
          ],
        },
        {
          type: 'list',
          items: [
            '**Proof by example:** checking cases proves an "exists" claim, never a "for all" claim.',
            '**Reusing a variable:** $m = 2k + 1$, $n = 2k + 1$ assumes $m = n$.',
            '**Assuming the conclusion:** starting from "$m + n = 2k$" and working backward to a true statement proves nothing (the affirming-the-consequent fallacy).',
            '**Proving the converse:** showing $q \\to p$ when asked for $p \\to q$.',
            '**Dividing by something that might be $0$**, or forgetting to check that a witness is an integer.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'truefalse',
      prompt: 'In C++, the expression `-7 % 2 == 1` evaluates to `true`.',
      answer: false,
      explanation: 'C++ integer division truncates toward zero, so `-7 / 2` is `-3` and `-7 % 2` is $-7 - 2 \\cdot (-3) = -1$. Mathematically $-7$ is odd ($-7 = 2 \\cdot (-4) + 1$), so a parity test written as `n % 2 == 1` misclassifies it. Test `n % 2 != 0` instead. (Unit 4 defines $a \\bmod n$ to always lie in $\\{0, \\dots, n - 1\\}$, which differs from C++\'s `%` for negative numbers.)',
    },
  ],
  takeaways: [
    'A proof is a complete chain of justified steps; examples can support a "for all" claim but never prove it.',
    'Definitions are existential statements: even $n = 2k$, odd $n = 2k + 1$, $a \\mid b$ means $b = ak$, rational means $p/q$ with $q \\ne 0$.',
    'Direct proof: assume the hypothesis for an arbitrary element, unpack definitions, compute, repack, conclude.',
    'Proof by contrapositive proves $\\neg q \\to \\neg p$ instead of $p \\to q$; use it when the negated conclusion is easier to work with.',
    'Use different variables for different numbers, introduce every variable, and write in full sentences ending with $\\blacksquare$.',
    'In C++, `%` can be negative: test oddness with `n % 2 != 0`, not `n % 2 == 1`.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Section 3.2, Proofs)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Direct proof, proof by contrapositive and proof by contradiction with worked examples about parity and divisibility.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The opening chapters on proofs include advice on writing them well, with many examples.',
    },
    {
      title: 'Wikipedia — Direct proof',
      url: 'https://en.wikipedia.org/wiki/Direct_proof',
      source: 'wikipedia',
      note: 'Short article with the parity proofs from this lesson and more.',
    },
    {
      title: 'Wikipedia — Modulo (programming)',
      url: 'https://en.wikipedia.org/wiki/Modulo',
      source: 'wikipedia',
      note: 'How different languages define the remainder of a negative number, and why it causes bugs.',
    },
  ],
};
