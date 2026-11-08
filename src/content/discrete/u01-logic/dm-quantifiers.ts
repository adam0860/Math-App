import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-quantifiers',
  title: 'Predicates and Quantifiers',
  summary: '"For every" and "there exists": the two words that turn statements about one value into statements about all of them.',
  minutes: 18,
  objectives: [
    'Evaluate predicates and decide the truth of $\\forall x\\, P(x)$ and $\\exists x\\, P(x)$ over a stated domain',
    'Negate quantified statements correctly, including statements with $\\to$ inside',
    'Explain why the order of nested quantifiers matters, using $\\forall x\\, \\exists y$ versus $\\exists y\\, \\forall x$',
    'Translate mathematical definitions and English sentences into quantified logic',
    'Implement quantifiers as loops (`std::all_of`, `std::any_of`) and explain vacuous truth on an empty domain',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Predicates: propositions with blanks',
      blocks: [
        {
          type: 'p',
          text: 'Propositional logic cannot say "every integer has a larger one". It can only say things about fixed facts. To talk about **all** or **some** values we need statements with variables in them.',
        },
        {
          type: 'definition',
          term: 'Predicate',
          text: 'A [[dm-predicate|predicate]] $P(x)$ is a statement containing a variable $x$ that becomes a proposition when a specific value is substituted for $x$. The set of allowed values is the [[dm-domain-of-discourse|domain]] (or universe of discourse).',
        },
        {
          type: 'p',
          text: 'Let $P(x)$ be "$x > 3$" with domain $\\mathbb{Z}$. Then $P(5)$ is the true proposition $5 > 3$ and $P(2)$ is false. $P(x)$ itself is neither: it is waiting for a value. Predicates can have several variables: with $Q(x, y)$ = "$x + y = 0$", $Q(3, -3)$ is true and $Q(1, 1)$ is false.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'A predicate is a function that returns `bool`',
          text: '`bool isAlive(const Enemy& e)` is a predicate whose domain is all enemies. Calling it on a specific enemy gives a definite `true` or `false`, exactly as substituting a value into $P(x)$ gives a proposition. You already write predicates every day: comparators, filters, `std::find_if` conditions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Let $P(x)$ be "$x^2 < 10$" with domain $\\{-4, -3, -2, -1, 0, 1, 2, 3, 4\\}$. For how many values in the domain is $P(x)$ true?',
      label: 'count $=$',
      answer: '7',
      hint: 'Check the largest values first: $3^2 = 9$ and $4^2 = 16$.',
      explanation: '$x^2 < 10$ holds for $x = -3, -2, -1, 0, 1, 2, 3$ (the largest square is $9$) and fails for $x = \\pm 4$ ($16 \\ge 10$). That is $7$ values. Each substitution produced its own proposition with its own truth value.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'For all, there exists',
      blocks: [
        {
          type: 'p',
          text: 'Besides substituting a value, there is a second way to turn a predicate into a proposition: **quantify** it, making a claim about how many values satisfy it.',
        },
        {
          type: 'definition',
          term: 'Quantifiers',
          text: 'The [[dm-universal-quantifier|universal quantification]] $\\forall x\\, P(x)$ ("for all $x$, $P(x)$") is true when $P(x)$ is true for **every** $x$ in the domain. The [[dm-existential-quantifier|existential quantification]] $\\exists x\\, P(x)$ ("there exists an $x$ such that $P(x)$") is true when $P(x)$ is true for **at least one** $x$ in the domain.',
        },
        {
          type: 'table',
          headers: ['Statement', 'True when', 'False when', 'To prove it false, show'],
          rows: [
            ['$\\forall x\\, P(x)$', '$P(x)$ holds for every $x$', 'some $x$ fails', 'one **counterexample**'],
            ['$\\exists x\\, P(x)$', '$P(x)$ holds for some $x$', 'every $x$ fails', 'that **all** values fail'],
          ],
        },
        {
          type: 'p',
          text: 'Over a finite domain $\\{x_1, \\dots, x_n\\}$, the quantifiers are just big connectives: $\\forall x\\, P(x) \\equiv P(x_1) \\land \\dots \\land P(x_n)$ and $\\exists x\\, P(x) \\equiv P(x_1) \\lor \\dots \\lor P(x_n)$. Infinite domains are where quantifiers become essential.',
        },
        {
          type: 'derivation',
          title: 'The domain changes the truth value: $\\forall x\\, (x^2 \\ge x)$',
          steps: [
            { tex: '\\text{Domain } \\mathbb{Z}: \\; x \\le 0 \\implies x^2 \\ge 0 \\ge x', why: 'A square is never negative, and $x$ is not positive.' },
            { tex: 'x \\ge 1 \\implies x^2 = x \\cdot x \\ge 1 \\cdot x = x', why: 'Multiply $x \\ge 1$ by the positive number $x$. Every integer is $\\le 0$ or $\\ge 1$, so the claim holds for all of them.' },
            { tex: '\\text{Domain } \\mathbb{R}: \\; x = \\tfrac{1}{2} \\implies x^2 = \\tfrac{1}{4} < \\tfrac{1}{2}', why: 'One counterexample is enough to make a "for all" statement false.' },
          ],
          result: 'Over $\\mathbb{Z}$ the statement is true; over $\\mathbb{R}$ it is false. A quantified statement means nothing until its domain is fixed.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Restricting the domain: $\\forall$ goes with $\\to$, $\\exists$ goes with $\\land$',
          text: '"Every positive integer $x$ has $x^2 \\ge x$" is $\\forall x\\, (x > 0 \\to x^2 \\ge x)$. "Some positive integer is even" is $\\exists x\\, (x > 0 \\land \\text{Even}(x))$. Swapping these is a classic error: $\\forall x\\, (x > 0 \\land \\dots)$ claims *every* integer is positive, and $\\exists x\\, (x > 0 \\to \\dots)$ is made true by any non-positive $x$ through vacuous truth. Writers often abbreviate with $\\forall x > 0$ or $\\exists x \\in \\mathbb{N}$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'With the domain $\\mathbb{R}$, the statement $\\forall x\\, (x^2 \\ge x)$ is true.',
      answer: false,
      explanation: 'A single counterexample makes a universal statement false. $x = \\tfrac{1}{2}$ gives $x^2 = \\tfrac{1}{4} < \\tfrac{1}{2}$; in fact every $x$ strictly between $0$ and $1$ is a counterexample. Over the integers the same statement is true, which is why the domain must always be stated.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Negating quantified statements',
      blocks: [
        {
          type: 'p',
          text: 'What is the opposite of "every enemy in the room is dead"? Not "every enemy is alive". It is "**some** enemy is alive": one survivor is enough to make the original false. Negation swaps the quantifier and pushes the $\\neg$ inside.',
        },
        {
          type: 'theorem',
          name: 'De Morgan\'s laws for quantifiers',
          tex: '\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x) \\qquad\\qquad \\neg \\exists x\\, P(x) \\equiv \\forall x\\, \\neg P(x)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why these are De Morgan\'s laws in disguise',
          text: 'On a finite domain, $\\forall$ is a big $\\land$ and $\\exists$ is a big $\\lor$. So $\\neg \\forall x\\, P(x) = \\neg(P(x_1) \\land \\dots \\land P(x_n)) \\equiv \\neg P(x_1) \\lor \\dots \\lor \\neg P(x_n) = \\exists x\\, \\neg P(x)$. The same reasoning, "the claim fails if and only if some case fails", holds for infinite domains too.',
        },
        {
          type: 'derivation',
          title: 'Negate $\\forall x\\, (x > 0 \\to x^2 > x)$',
          steps: [
            { tex: '\\neg \\forall x\\, (x > 0 \\to x^2 > x)', why: 'The statement to negate.' },
            { tex: '\\equiv \\exists x\\, \\neg(x > 0 \\to x^2 > x)', why: 'Quantifier De Morgan: $\\neg\\forall$ becomes $\\exists \\neg$.' },
            { tex: '\\equiv \\exists x\\, (x > 0 \\land \\neg(x^2 > x))', why: 'The negation of a conditional: $\\neg(p \\to q) \\equiv p \\land \\neg q$ (previous lesson).' },
            { tex: '\\equiv \\exists x\\, (x > 0 \\land x^2 \\le x)', why: 'Negate the comparison exactly: not $>$ is $\\le$.' },
          ],
          result: 'The negation says "some positive $x$ has $x^2 \\le x$". Over $\\mathbb{R}$ it is true ($x = \\tfrac{1}{2}$), so the original is false over $\\mathbb{R}$; over $\\mathbb{Z}$ the original is false too, because $x = 1$ gives $1 > 1$, which fails.',
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'The negation of a "for all … if … then …" statement is always "there exists … such that … and not …". That is exactly the shape of a **counterexample**: something that meets the hypothesis but breaks the conclusion.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'mcq',
      prompt: 'Which is the negation of $\\forall x\\, (\\text{Boss}(x) \\to \\text{WeakToFire}(x))$, "every boss is weak to fire"?',
      options: [
        { text: '$\\forall x\\, (\\text{Boss}(x) \\to \\neg\\text{WeakToFire}(x))$', why: 'This says *no* boss is weak to fire, which is much stronger than the negation. If one boss resists fire and another does not, both the original and this are false.' },
        { text: '$\\exists x\\, (\\text{Boss}(x) \\to \\neg\\text{WeakToFire}(x))$', why: 'With $\\to$ under $\\exists$ this is true as soon as some non-boss exists (vacuous truth). An existential should use $\\land$.' },
        { text: '$\\exists x\\, (\\text{Boss}(x) \\land \\neg\\text{WeakToFire}(x))$', correct: true, why: '$\\neg\\forall$ becomes $\\exists\\neg$, and $\\neg(p \\to q) \\equiv p \\land \\neg q$: some boss is not weak to fire.' },
        { text: '$\\exists x\\, (\\neg\\text{Boss}(x) \\land \\text{WeakToFire}(x))$', why: 'A non-boss that is weak to fire does not contradict "every boss is weak to fire". The negation must be about a boss.' },
      ],
      explanation: 'Negate in two moves: swap the quantifier ($\\neg\\forall x \\equiv \\exists x\\, \\neg$), then negate the conditional ($\\neg(p \\to q) \\equiv p \\land \\neg q$). Result: "there is a boss that is not weak to fire", which is precisely a counterexample to the original.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Nested quantifiers: order matters',
      blocks: [
        {
          type: 'p',
          text: 'Real definitions stack quantifiers. "Every integer has a larger one" is $\\forall x\\, \\exists y\\, (x < y)$ with domain $\\mathbb{Z}$. Read nested quantifiers **left to right** as a game: the $\\forall$ player picks a value trying to break the statement, the $\\exists$ player answers trying to make it true, and later choices may depend on earlier ones.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 540 290" xmlns="http://www.w3.org/2000/svg"><line x1="63.0" y1="60.0" x2="167.0" y2="60.0" stroke="currentColor" stroke-width="2.6" class="s-blue"/><path d="M167.0,60.0 L158.9,63.8 L158.9,56.2 Z" fill="currentColor" class="f-blue"/><line x1="63.0" y1="100.0" x2="167.0" y2="100.0" stroke="currentColor" stroke-width="2.6" class="s-blue"/><path d="M167.0,100.0 L158.9,103.8 L158.9,96.2 Z" fill="currentColor" class="f-blue"/><line x1="63.0" y1="140.0" x2="167.0" y2="140.0" stroke="currentColor" stroke-width="2.6" class="s-blue"/><path d="M167.0,140.0 L158.9,143.8 L158.9,136.2 Z" fill="currentColor" class="f-blue"/><line x1="63.0" y1="180.0" x2="167.0" y2="180.0" stroke="currentColor" stroke-width="2.6" class="s-blue"/><path d="M167.0,180.0 L158.9,183.8 L158.9,176.2 Z" fill="currentColor" class="f-blue"/><line x1="63.0" y1="220.0" x2="167.0" y2="220.0" stroke="currentColor" stroke-width="2.6" class="s-blue"/><path d="M167.0,220.0 L158.9,223.8 L158.9,216.2 Z" fill="currentColor" class="f-blue"/><line x1="342.2" y1="66.9" x2="456.1" y2="132.1" stroke="currentColor" stroke-width="1.6"/><path d="M456.1,132.1 L447.1,131.3 L450.9,124.7 Z" fill="currentColor"/><line x1="343.5" y1="103.8" x2="454.6" y2="135.6" stroke="currentColor" stroke-width="1.6"/><path d="M454.6,135.6 L445.7,137.1 L447.8,129.7 Z" fill="currentColor"/><line x1="344.0" y1="140.0" x2="454.0" y2="140.0" stroke="currentColor" stroke-width="1.6"/><path d="M454.0,140.0 L445.9,143.8 L445.9,136.2 Z" fill="currentColor"/><line x1="343.9" y1="212.1" x2="456.1" y2="147.9" stroke="currentColor" stroke-width="2.6" class="s-red" stroke-dasharray="5 4"/><path d="M456.1,147.9 L450.9,155.3 L447.1,148.7 Z" fill="currentColor" class="f-red"/><circle cx="50" cy="60" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="65" text-anchor="middle" font-size="13">1</text><circle cx="180" cy="60" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180" y="65" text-anchor="middle" font-size="13">2</text><circle cx="50" cy="100" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="105" text-anchor="middle" font-size="13">2</text><circle cx="180" cy="100" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180" y="105" text-anchor="middle" font-size="13">3</text><circle cx="50" cy="140" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="145" text-anchor="middle" font-size="13">3</text><circle cx="180" cy="140" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180" y="145" text-anchor="middle" font-size="13">4</text><circle cx="50" cy="180" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="185" text-anchor="middle" font-size="13">4</text><circle cx="180" cy="180" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180" y="185" text-anchor="middle" font-size="13">5</text><circle cx="50" cy="220" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="50" y="225" text-anchor="middle" font-size="13">5</text><circle cx="180" cy="220" r="13" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180" y="225" text-anchor="middle" font-size="13">6</text><circle cx="330" cy="60" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="330" y="65" text-anchor="middle" font-size="13">1</text><circle cx="330" cy="100" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="330" y="105" text-anchor="middle" font-size="13">2</text><circle cx="330" cy="140" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="330" y="145" text-anchor="middle" font-size="13">3</text><circle cx="330" cy="220" r="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="330" y="225" text-anchor="middle" font-size="13" class="t-red">y₀</text><circle cx="470" cy="140" r="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="470" y="145" text-anchor="middle" font-size="14" class="t-red">y₀</text><text x="410.9" y="203.6" text-anchor="middle" font-size="13" class="t-red">y₀ &lt; y₀ ✗</text><text x="115" y="20" text-anchor="middle" font-size="14">∀x ∃y (x &lt; y): true</text><text x="50" y="42" text-anchor="middle" font-size="13" class="t-gray">x</text><text x="180" y="42" text-anchor="middle" font-size="13" class="t-gray">its y</text><text x="50" y="250" text-anchor="middle" font-size="16">⋮</text><text x="180" y="250" text-anchor="middle" font-size="16">⋮</text><text x="115" y="276" text-anchor="middle" font-size="12" class="t-gray">each x gets its own y = x + 1</text><text x="330" y="186" text-anchor="middle" font-size="16">⋮</text><text x="395" y="20" text-anchor="middle" font-size="14">∃y ∀x (x &lt; y): false</text><text x="330" y="42" text-anchor="middle" font-size="13" class="t-gray">x</text><text x="395" y="276" text-anchor="middle" font-size="12" class="t-gray">any single y₀ fails when x = y₀</text><path d="M260 30 L260 280" stroke="currentColor" stroke-width="0.8" class="s-gray" fill="none"/></svg>',
          alt: 'Left: integers x from 1 to 5 each with an arrow to y equals x plus 1, showing for all x there exists y with x less than y. Right: arrows from 1, 2, 3 to a single y0; the arrow from x equal to y0 itself fails, showing there is no single y larger than every x.',
          caption: 'Swap the quantifiers and the meaning changes completely. In $\\forall x\\, \\exists y$ the choice of $y$ may depend on $x$; in $\\exists y\\, \\forall x$ one $y$ must work for every $x$ at once.',
        },
        {
          type: 'derivation',
          title: 'Prove $\\forall x\\, \\exists y\\, (x < y)$ and disprove $\\exists y\\, \\forall x\\, (x < y)$ over $\\mathbb{Z}$',
          steps: [
            { tex: '\\text{Let } x \\in \\mathbb{Z} \\text{ be arbitrary. Choose } y = x + 1.', why: 'For a $\\forall$ you must handle every $x$, so name a general one. For the $\\exists$ you get to pick $y$, and it may depend on $x$.' },
            { tex: 'x < x + 1 = y', why: 'True for every integer. So $\\forall x\\, \\exists y\\, (x < y)$ holds.' },
            { tex: '\\neg \\exists y\\, \\forall x\\, (x < y) \\equiv \\forall y\\, \\exists x\\, (x \\ge y)', why: 'Negate with quantifier De Morgan twice: each quantifier flips and $<$ becomes $\\ge$.' },
            { tex: '\\text{Given any } y, \\text{ choose } x = y: \\; y \\ge y', why: 'This proves the negation, so $\\exists y\\, \\forall x\\, (x < y)$ is false: no integer is larger than all integers, itself included.' },
          ],
          result: '$\\forall x\\, \\exists y\\, (x < y)$ is true but $\\exists y\\, \\forall x\\, (x < y)$ is false. In general $\\exists y\\, \\forall x\\, P \\to \\forall x\\, \\exists y\\, P$ always holds, but not the reverse.',
        },
        {
          type: 'p',
          text: 'Quantifiers of the **same** kind do commute: $\\forall x\\, \\forall y \\equiv \\forall y\\, \\forall x$ and $\\exists x\\, \\exists y \\equiv \\exists y\\, \\exists x$. Only mixing $\\forall$ and $\\exists$ makes the order matter. To negate a nested statement, flip every quantifier from left to right and negate the inside: $\\neg \\forall x\\, \\exists y\\, P(x, y) \\equiv \\exists x\\, \\forall y\\, \\neg P(x, y)$.',
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'Keys and locks',
          text: '"Every door has a key that opens it" ($\\forall$ door $\\exists$ key) is a normal building. "There is a key that opens every door" ($\\exists$ key $\\forall$ door) is a master key. The first does not imply the second.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'truefalse',
      prompt: 'With domain $\\mathbb{Z}$, the statement $\\exists y\\, \\forall x\\, (x + y = x)$ is true.',
      answer: true,
      explanation: 'Here a single $y$ must work for every $x$, and one does: $y = 0$, since $x + 0 = x$ for every integer $x$. So $\\exists y\\, \\forall x$ statements are not automatically false; they claim a "universal" witness, like the additive identity $0$ or a master key. Compare $\\exists y\\, \\forall x\\, (x < y)$, which fails because no single $y$ works.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'The domain is $D = \\{1, 2, 3, 4, 5, 6\\}$ for both variables. For how many $x \\in D$ is the statement $\\forall y\\, (x + y \\le 8)$ true?',
      label: 'count $=$',
      answer: '2',
      hint: 'For a fixed $x$, the hardest $y$ to satisfy is the largest one.',
      explanation: 'For a fixed $x$, "$x + y \\le 8$ for every $y \\in D$" fails as soon as the largest $y$, namely $6$, fails. So we need $x + 6 \\le 8$, i.e. $x \\le 2$: only $x = 1$ and $x = 2$. For $x = 3$, the value $y = 6$ is a counterexample ($9 > 8$).',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Translating definitions into logic',
      blocks: [
        {
          type: 'p',
          text: 'Mathematical definitions are quantified statements in disguise. Writing them in symbols shows exactly what you must prove and how to negate them. Here are some you will use in Unit 2 and beyond (domain $\\mathbb{Z}$ unless stated).',
        },
        {
          type: 'table',
          headers: ['English', 'Logic'],
          rows: [
            ['$n$ is even', '$\\exists k\\, (n = 2k)$'],
            ['Every integer has a larger one', '$\\forall x\\, \\exists y\\, (y > x)$'],
            ['There is a smallest natural number', '$\\exists m \\in \\mathbb{N}\\; \\forall n \\in \\mathbb{N}\\, (m \\le n)$'],
            ['Every nonzero rational has a reciprocal', '$\\forall x \\in \\mathbb{Q}\\, (x \\ne 0 \\to \\exists y \\in \\mathbb{Q}\\, (xy = 1))$'],
            ['$f$ is increasing', '$\\forall x\\, \\forall y\\, (x < y \\to f(x) < f(y))$'],
            ['$f$ is one-to-one', '$\\forall a\\, \\forall b\\, (f(a) = f(b) \\to a = b)$'],
          ],
          caption: 'The third row is true with $m = 0$; over $\\mathbb{Z}$ it would be false.',
        },
        {
          type: 'derivation',
          title: 'Translate: "Every player who beat the final boss has a trophy that no other player has."',
          steps: [
            { tex: 'B(p): p \\text{ beat the boss}, \\quad H(p, t): p \\text{ has trophy } t', why: 'Choose predicates. Domains: players for $p, q$ and trophies for $t$.' },
            { tex: '\\forall p\\, (B(p) \\to \\dots)', why: '"Every player who …" restricts a universal, so it uses $\\to$.' },
            { tex: '\\forall p\\, (B(p) \\to \\exists t\\, (H(p, t) \\land \\dots))', why: '"has a trophy that …" is an existential, so it uses $\\land$.' },
            { tex: '\\forall p\\, \\big(B(p) \\to \\exists t\\, (H(p, t) \\land \\forall q\\, (q \\ne p \\to \\neg H(q, t)))\\big)', why: '"no other player has it": every player $q$ different from $p$ does not have $t$.' },
          ],
          result: 'Three nested quantifiers, each placed where the English introduces it. The order matters: $t$ is chosen after $p$, so each player may have a different unique trophy.',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'A favorite exam task is "write the negation of this definition in positive form", for example "$f$ is not increasing": $\\exists x\\, \\exists y\\, (x < y \\land f(x) \\ge f(y))$. Flip each quantifier, then negate the inside using $\\neg(p \\to q) \\equiv p \\land \\neg q$. No $\\neg$ should remain in front of a quantifier.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Complete the definition of an odd integer in quantified form (domain $\\mathbb{Z}$).',
      template: '$n$ is odd means ___ $k$ such that $n =$ ___.',
      blanks: [{ answers: ['$\\exists$'] }, { answers: ['$2k + 1$'] }],
      wordBank: ['$\\exists$', '$\\forall$', '$2k + 1$', '$2k$', '$k + 1$'],
      explanation: '$n$ is odd when $\\exists k \\in \\mathbb{Z}\\, (n = 2k + 1)$: **some** integer $k$ works (for $n = 7$, $k = 3$). With $\\forall$ the definition would demand that $n = 2k + 1$ for every $k$ at once, which is impossible. $2k$ would define even, and $k + 1$ describes every integer.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'error',
      prompt: 'A student negates "every integer has an additive inverse", $\\forall x\\, \\exists y\\, (x + y = 0)$ over $\\mathbb{Z}$. Tap the first line that is wrong.',
      lines: [
        '$\\neg \\forall x\\, \\exists y\\, (x + y = 0)$',
        '$\\equiv \\exists x\\, \\neg \\exists y\\, (x + y = 0)$',
        '$\\equiv \\exists x\\, \\exists y\\, \\neg(x + y = 0)$',
        '$\\equiv \\exists x\\, \\exists y\\, (x + y \\ne 0)$',
        'This is true ($x = y = 1$), so the original statement is false.',
      ],
      errorLines: [3],
      explanation: 'Line 3 moves the $\\neg$ past $\\exists y$ without flipping it. The rule is $\\neg \\exists y\\, P \\equiv \\forall y\\, \\neg P$, so the correct negation is $\\exists x\\, \\forall y\\, (x + y \\ne 0)$: "some integer has no additive inverse". That is **false** (for any $x$, take $y = -x$), so the original statement is true. The student\'s line 4 only says "some sum is nonzero", which tells us nothing.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Quantifiers are loops',
      blocks: [
        {
          type: 'p',
          text: 'On a finite domain, a quantifier is a loop. $\\forall$ is a loop that returns `false` at the first failure (a counterexample) and `true` if it finishes. $\\exists$ is a loop that returns `true` at the first success (a witness) and `false` if it finishes. The standard library calls them `std::all_of` and `std::any_of`; nested quantifiers become nested loops in the same order.',
        },
        {
          type: 'code',
          title: 'quantifiers.cpp',
          runnable: true,
          code: `#include <algorithm>
#include <cstdio>
#include <vector>

int main() {
    std::vector<int> D;                       // the domain {-5, ..., 5}
    for (int v = -5; v <= 5; ++v) D.push_back(v);

    // forall x: x*x >= x
    bool a = std::all_of(D.begin(), D.end(), [](int x) { return x * x >= x; });
    // exists x: x is even and x > 3
    bool b = std::any_of(D.begin(), D.end(), [](int x) { return x % 2 == 0 && x > 3; });
    std::printf("forall x (x*x >= x): %d\\n", a);
    std::printf("exists x (even, > 3): %d\\n", b);

    // forall x exists y (x < y): an outer "all" around an inner "any"
    for (int x : D) {
        bool found = std::any_of(D.begin(), D.end(), [x](int y) { return x < y; });
        if (!found) { std::printf("forall x exists y (x < y) fails at x = %d\\n", x); break; }
    }

    // exists y forall x (x + y == x): an outer "any" around an inner "all"
    for (int y : D)
        if (std::all_of(D.begin(), D.end(), [y](int x) { return x + y == x; }))
            std::printf("exists y forall x (x + y == x): y = %d\\n", y);

    // Vacuous truth: quantifying over an empty domain
    std::vector<int> none;
    auto pred = [](int x) { return x > 100; };
    std::printf("empty: all_of = %d, any_of = %d\\n",
                std::all_of(none.begin(), none.end(), pred),
                std::any_of(none.begin(), none.end(), pred));
}`,
          output: `forall x (x*x >= x): 1
exists x (even, > 3): 1
forall x exists y (x < y) fails at x = 5
exists y forall x (x + y == x): y = 0
empty: all_of = 1, any_of = 0`,
          annotations: [
            { lines: 10, text: '$\\forall x\\, (x^2 \\ge x)$: true on this integer domain, as proved earlier for $\\mathbb{Z}$.' },
            { lines: 12, text: '$\\exists x\\, (\\text{Even}(x) \\land x > 3)$: the witness is $x = 4$. Note the $\\land$ under $\\exists$.' },
            { lines: '17-20', text: 'Nested $\\forall x\\, \\exists y$: true over $\\mathbb{Z}$, but **false** on this finite domain because $5$ has no larger element in $D$.' },
            { lines: '23-25', text: 'Nested $\\exists y\\, \\forall x$: search for one $y$ that works for every $x$. Only $y = 0$ does.' },
            { lines: '28-32', text: 'With nothing to check, `all_of` finds no counterexample (true) and `any_of` finds no witness (false).' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "for all" is true on an empty domain',
          text: '$\\forall x\\, P(x)$ is false only if there is a counterexample. An empty domain has no elements, hence no counterexample, so the statement is (vacuously) true. That matches $\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x)$: an existential over nothing is false, so its negation is true. Code relies on this all the time: "all enemies defeated?" must be `true` for a level with zero enemies, or the exit door never opens.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'A level has no enemies, so `enemies` is empty. What does `std::all_of(enemies.begin(), enemies.end(), isDead)` return?',
      options: [
        { text: '`true`, because there is no enemy that is not dead', correct: true, why: 'A universal statement over an empty domain has no counterexample, so it is vacuously true.' },
        { text: '`false`, because there is no dead enemy', why: 'That reasoning describes `any_of` (an existential), which is indeed `false` on an empty range. `all_of` looks for a counterexample instead.' },
        { text: 'It is undefined behavior to call it on an empty range', why: 'An empty range (`begin() == end()`) is perfectly valid; the loop simply runs zero times.' },
      ],
      explanation: '`all_of` returns `false` only when it finds an element failing the predicate. With no elements it finds nothing and returns `true`, exactly mirroring the vacuous truth of $\\forall x\\, P(x)$ over an empty domain. Conversely `any_of` returns `false` on an empty range.',
    },
  ],
  takeaways: [
    'A predicate $P(x)$ becomes a proposition when you substitute a value or quantify it; always state the domain.',
    '$\\forall x\\, P(x)$ is disproved by one counterexample; $\\exists x\\, P(x)$ is proved by one witness.',
    'Negation flips quantifiers: $\\neg\\forall x\\, P \\equiv \\exists x\\, \\neg P$ and $\\neg\\exists x\\, P \\equiv \\forall x\\, \\neg P$; the negation of $\\forall x\\, (p \\to q)$ is $\\exists x\\, (p \\land \\neg q)$.',
    'Restricted quantifiers: $\\forall$ pairs with $\\to$, $\\exists$ pairs with $\\land$.',
    'Order of mixed quantifiers matters: $\\forall x\\, \\exists y\\, (x < y)$ is true over $\\mathbb{Z}$, $\\exists y\\, \\forall x\\, (x < y)$ is false.',
    'In code, $\\forall$ is `std::all_of` (true on an empty range) and $\\exists$ is `std::any_of` (false on an empty range); nesting quantifiers nests loops.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Section 0.2, quantifiers and predicates)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Introduces predicates, quantifiers and their negations with many short examples.',
    },
    {
      title: 'Wikipedia — Quantifier (logic)',
      url: 'https://en.wikipedia.org/wiki/Quantifier_(logic)',
      source: 'wikipedia',
      note: 'The universal and existential quantifiers, their notation, nesting and negation.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The logic readings treat predicates and quantifiers with a computer-science flavor.',
    },
  ],
};
