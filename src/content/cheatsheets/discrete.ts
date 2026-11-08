import type { CheatSheet } from '../types';

export const discreteCheatSheets: CheatSheet[] = [
  // ------------------------------------------------------------------
  {
    id: 'dm-logic',
    title: 'Logic',
    course: 'discrete',
    icon: '🧠',
    description:
      'Connectives and their truth tables, the conditional and its relatives, logical equivalence laws, quantifier negation and the rules of inference.',
    sections: [
      {
        title: 'Connectives',
        items: [
          {
            label: 'Truth table summary',
            tex: '\\begin{array}{cc|ccccc} p & q & p \\land q & p \\lor q & p \\oplus q & p \\to q & p \\leftrightarrow q \\\\ \\hline \\mathrm{T} & \\mathrm{T} & \\mathrm{T} & \\mathrm{T} & \\mathrm{F} & \\mathrm{T} & \\mathrm{T} \\\\ \\mathrm{T} & \\mathrm{F} & \\mathrm{F} & \\mathrm{T} & \\mathrm{T} & \\mathrm{F} & \\mathrm{F} \\\\ \\mathrm{F} & \\mathrm{T} & \\mathrm{F} & \\mathrm{T} & \\mathrm{T} & \\mathrm{T} & \\mathrm{F} \\\\ \\mathrm{F} & \\mathrm{F} & \\mathrm{F} & \\mathrm{F} & \\mathrm{F} & \\mathrm{T} & \\mathrm{T} \\end{array}',
            text: '$\\neg p$ flips the value. $p \\to q$ is false **only** when $p$ is true and $q$ is false. A table with $n$ variables has $2^n$ rows.',
          },
          {
            label: 'Conditional rewrites',
            tex: 'p \\to q \\equiv \\neg p \\lor q, \\qquad p \\leftrightarrow q \\equiv (p \\to q) \\land (q \\to p), \\qquad \\neg(p \\to q) \\equiv p \\land \\neg q',
          },
          {
            label: '[[dm-converse|Converse]], inverse, [[dm-contrapositive|contrapositive]]',
            tex: '\\text{of } p \\to q: \\quad q \\to p, \\qquad \\neg p \\to \\neg q, \\qquad \\neg q \\to \\neg p \\equiv p \\to q',
            text: 'Only the contrapositive is equivalent to the original. The converse and the inverse are equivalent to each other.',
          },
          {
            label: '[[dm-tautology|Tautology]], [[dm-contradiction|contradiction]], [[dm-contingency|contingency]]',
            text: 'Always true (e.g. $p \\lor \\neg p$), always false (e.g. $p \\land \\neg p$), sometimes each. $A \\equiv B$ means $A \\leftrightarrow B$ is a tautology.',
          },
        ],
      },
      {
        title: 'Equivalence laws',
        items: [
          { label: 'Identity and domination', tex: 'p \\land \\mathrm{T} \\equiv p, \\quad p \\lor \\mathrm{F} \\equiv p, \\qquad p \\lor \\mathrm{T} \\equiv \\mathrm{T}, \\quad p \\land \\mathrm{F} \\equiv \\mathrm{F}' },
          { label: 'Idempotent and double negation', tex: 'p \\lor p \\equiv p, \\quad p \\land p \\equiv p, \\qquad \\neg(\\neg p) \\equiv p' },
          { label: 'Negation laws', tex: 'p \\lor \\neg p \\equiv \\mathrm{T}, \\qquad p \\land \\neg p \\equiv \\mathrm{F}' },
          { label: 'Commutative and associative', tex: 'p \\lor q \\equiv q \\lor p, \\quad (p \\lor q) \\lor r \\equiv p \\lor (q \\lor r) \\quad (\\text{same for } \\land)' },
          { label: 'Distributive', tex: 'p \\lor (q \\land r) \\equiv (p \\lor q) \\land (p \\lor r), \\qquad p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)' },
          { label: '[[dm-de-morgans-laws|De Morgan\'s laws]]', tex: '\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q, \\qquad \\neg(p \\lor q) \\equiv \\neg p \\land \\neg q' },
          { label: 'Absorption', tex: 'p \\lor (p \\land q) \\equiv p, \\qquad p \\land (p \\lor q) \\equiv p' },
        ],
      },
      {
        title: 'Quantifiers',
        items: [
          {
            label: 'Negating quantifiers (De Morgan)',
            tex: '\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x), \\qquad \\neg \\exists x\\, P(x) \\equiv \\forall x\\, \\neg P(x)',
            text: 'Push $\\neg$ inward, flipping each quantifier it passes: $\\neg \\forall x \\exists y\\, P(x, y) \\equiv \\exists x \\forall y\\, \\neg P(x, y)$.',
          },
          {
            label: 'Distributing',
            tex: '\\forall x\\,(P(x) \\land Q(x)) \\equiv \\forall x\\, P(x) \\land \\forall x\\, Q(x), \\qquad \\exists x\\,(P(x) \\lor Q(x)) \\equiv \\exists x\\, P(x) \\lor \\exists x\\, Q(x)',
            text: 'Not $\\forall$ over $\\lor$, nor $\\exists$ over $\\land$.',
          },
          {
            label: 'Order of nested quantifiers',
            text: 'Same quantifiers commute. Mixed ones do not: $\\forall x \\exists y\\, (x + y = 0)$ is true over $\\mathbb{Z}$, but $\\exists y \\forall x\\, (x + y = 0)$ is false.',
          },
        ],
      },
      {
        title: 'Rules of inference',
        items: [
          { label: '[[dm-modus-ponens|Modus ponens]]', tex: 'p, \\; p \\to q \\;\\therefore\\; q' },
          { label: '[[dm-modus-tollens|Modus tollens]]', tex: '\\neg q, \\; p \\to q \\;\\therefore\\; \\neg p' },
          { label: 'Hypothetical syllogism', tex: 'p \\to q, \\; q \\to r \\;\\therefore\\; p \\to r' },
          { label: 'Disjunctive syllogism', tex: 'p \\lor q, \\; \\neg p \\;\\therefore\\; q' },
          { label: 'Addition, simplification, conjunction', tex: 'p \\therefore p \\lor q, \\qquad p \\land q \\therefore p, \\qquad p, \\; q \\therefore p \\land q' },
          { label: '[[dm-resolution|Resolution]]', tex: 'p \\lor q, \\; \\neg p \\lor r \\;\\therefore\\; q \\lor r' },
          {
            label: 'Quantified rules',
            text: 'Universal instantiation: from $\\forall x\\, P(x)$ infer $P(c)$. Universal generalization: $P(c)$ for an **arbitrary** $c$ gives $\\forall x\\, P(x)$. Existential instantiation: from $\\exists x\\, P(x)$ name a witness $c$. Existential generalization: $P(c)$ gives $\\exists x\\, P(x)$.',
          },
          {
            label: '[[dm-fallacy|Fallacies]]',
            text: 'Affirming the consequent ($q, \\; p \\to q \\;\\therefore\\; p$) and denying the antecedent ($\\neg p, \\; p \\to q \\;\\therefore\\; \\neg q$) are **invalid**.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'dm-proofs',
    title: 'Proofs',
    course: 'discrete',
    icon: '✍️',
    description:
      'Templates for direct proof, contrapositive, contradiction, cases, existence and counterexamples, plus ordinary and strong induction.',
    sections: [
      {
        title: 'Proof techniques',
        items: [
          {
            label: '[[dm-direct-proof|Direct proof]] of $p \\to q$',
            text: 'Assume $p$. Use definitions and known results to derive $q$. Example template: "Let $n$ be odd, so $n = 2k + 1$ for some integer $k$. Then … $= 2(\\dots) + 1$, which is odd."',
          },
          {
            label: '[[dm-proof-by-contrapositive|Proof by contrapositive]]',
            text: 'Prove $\\neg q \\to \\neg p$ directly instead. Good when $\\neg q$ gives something concrete to work with (e.g. "if $n^2$ is even then $n$ is even": assume $n$ odd, show $n^2$ odd).',
          },
          {
            label: '[[dm-proof-by-contradiction|Proof by contradiction]]',
            text: 'To prove $p$: assume $\\neg p$ and derive a contradiction $r \\land \\neg r$. For $p \\to q$, assume $p \\land \\neg q$. Classics: $\\sqrt{2}$ is irrational, there are infinitely many primes, the halting problem is undecidable.',
          },
          {
            label: '[[dm-proof-by-cases|Proof by cases]]',
            tex: '\\big[(p_1 \\lor p_2 \\lor \\cdots \\lor p_n) \\to q\\big] \\equiv \\big[(p_1 \\to q) \\land \\cdots \\land (p_n \\to q)\\big]',
            text: 'The cases must cover every possibility (e.g. $n$ even / $n$ odd). "Without loss of generality" merges symmetric cases.',
          },
          {
            label: 'Biconditional $p \\leftrightarrow q$',
            text: 'Prove both $p \\to q$ and $q \\to p$. For several equivalent statements, prove a cycle $p_1 \\to p_2 \\to \\cdots \\to p_n \\to p_1$.',
          },
          {
            label: '[[dm-existence-proof|Existence]] and uniqueness',
            text: 'Constructive: exhibit a witness. Nonconstructive: show one must exist (e.g. by contradiction or pigeonhole). Uniqueness: show existence, then that any two witnesses $x, y$ satisfy $x = y$.',
          },
          {
            label: 'Disproving $\\forall x\\, P(x)$',
            text: 'One [[dm-counterexample|counterexample]] suffices: a single $c$ with $\\neg P(c)$. Examples, however many, never prove a universal statement.',
          },
        ],
      },
      {
        title: 'Induction',
        items: [
          {
            label: '[[dm-mathematical-induction|Mathematical induction]]',
            tex: '\\big[P(b) \\land \\forall k \\ge b\\,\\big(P(k) \\to P(k+1)\\big)\\big] \\to \\forall n \\ge b\\; P(n)',
          },
          {
            label: 'Induction template',
            text: '**Basis:** verify $P(b)$. **Inductive hypothesis:** assume $P(k)$ for an arbitrary integer $k \\ge b$. **Inductive step:** prove $P(k + 1)$, saying exactly where the hypothesis is used. **Conclusion:** by induction, $P(n)$ holds for all $n \\ge b$.',
          },
          {
            label: '[[dm-strong-induction|Strong induction]]',
            tex: '\\big[P(b) \\land \\forall k \\ge b\\,\\big(P(b) \\land \\cdots \\land P(k) \\to P(k+1)\\big)\\big] \\to \\forall n \\ge b\\; P(n)',
            text: 'Use when $P(k + 1)$ depends on earlier cases than $P(k)$ (prime factorizations, recurrences with two previous terms). Check enough base cases.',
          },
          {
            label: '[[dm-well-ordering-principle|Well-ordering principle]]',
            text: 'Every nonempty set of nonnegative integers has a least element. Equivalent to induction; used in "minimal counterexample" proofs.',
          },
          {
            label: 'Classic induction sums',
            tex: '\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}, \\qquad \\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}, \\qquad \\sum_{i=0}^{n} 2^i = 2^{n+1} - 1',
          },
          {
            label: 'Geometric sum',
            tex: '\\sum_{i=0}^{n} ar^i = \\frac{a(r^{n+1} - 1)}{r - 1} \\quad (r \\ne 1)',
          },
          {
            label: 'Common mistakes',
            text: 'Skipping or botching the basis; assuming $P(k + 1)$ in the inductive step; an inductive step that silently fails for the smallest $k$ (the "all horses are the same color" fallacy breaks at $k = 1$).',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'dm-sets-functions-relations',
    title: 'Sets, Functions & Relations',
    course: 'discrete',
    icon: '🔵',
    description:
      'Set identities and counting formulas, injective/surjective/bijective functions, cardinality, relation properties, equivalence relations and partial orders.',
    sections: [
      {
        title: 'Sets',
        items: [
          {
            label: 'Notation',
            text: '$\\mathbb{N} = \\{0, 1, 2, \\dots\\}$ (this course includes $0$), $\\mathbb{Z}$, $\\mathbb{Q}$, $\\mathbb{R}$. $A \\subseteq B$ means $\\forall x\\,(x \\in A \\to x \\in B)$; $A = B$ iff $A \\subseteq B$ and $B \\subseteq A$.',
          },
          { label: 'Difference and complement', tex: 'A - B = A \\cap \\overline{B}, \\qquad \\overline{A} = U - A' },
          { label: 'Commutative, associative, distributive', tex: 'A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C), \\qquad A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)' },
          { label: 'De Morgan\'s laws for sets', tex: '\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}, \\qquad \\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}' },
          { label: 'Identity, domination, complement', tex: 'A \\cup \\emptyset = A, \\quad A \\cap U = A, \\quad A \\cap \\emptyset = \\emptyset, \\quad A \\cup \\overline{A} = U, \\quad A \\cap \\overline{A} = \\emptyset' },
          { label: 'Absorption', tex: 'A \\cup (A \\cap B) = A, \\qquad A \\cap (A \\cup B) = A' },
          {
            label: 'Sizes',
            tex: '|A \\cup B| = |A| + |B| - |A \\cap B|, \\qquad |A \\times B| = |A|\\,|B|, \\qquad |\\mathcal{P}(A)| = 2^{|A|}',
          },
          {
            label: 'Sets as [[dm-bit-vector|bit vectors]]',
            code: 'uint32_t A, B;          // bit i set <=> element i in the set\nA | B;  A & B;  A & ~B;  // union, intersection, difference\nstd::popcount(A);       // |A|',
            lang: 'cpp',
          },
        ],
      },
      {
        title: 'Functions',
        items: [
          {
            label: '[[dm-injection|One-to-one]] (injective)',
            tex: 'f(a) = f(b) \\implies a = b',
          },
          {
            label: '[[dm-surjection|Onto]] (surjective)',
            tex: '\\forall y \\in B\\; \\exists x \\in A:\\; f(x) = y',
          },
          {
            label: '[[dm-bijection|Bijection]]',
            text: 'One-to-one and onto. $f$ has an [[inverse-function]] $f^{-1}$ exactly when it is a bijection. Composition: $(f \\circ g)(x) = f(g(x))$.',
          },
          {
            label: 'Counting functions $A \\to B$ ($|A| = m$, $|B| = n$)',
            tex: '\\text{all: } n^m, \\qquad \\text{one-to-one: } P(n, m) = \\frac{n!}{(n-m)!}, \\qquad \\text{onto: } \\sum_{i=0}^{n} (-1)^i \\binom{n}{i}(n-i)^m',
          },
          {
            label: '[[dm-floor-ceiling|Floor and ceiling]]',
            tex: '\\lfloor x \\rfloor = n \\iff n \\le x < n + 1, \\qquad \\lceil x \\rceil = n \\iff n - 1 < x \\le n',
          },
          {
            label: '[[dm-cardinality|Cardinality]]',
            text: '$|A| = |B|$ iff there is a bijection $A \\to B$. $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$ are [[dm-countable-set|countable]]; $\\mathbb{R}$ and $\\mathcal{P}(\\mathbb{N})$ are not (Cantor\'s [[dm-diagonal-argument|diagonal argument]]).',
          },
        ],
      },
      {
        title: 'Relations',
        items: [
          {
            label: 'Properties of $R$ on a set $A$',
            text: '[[dm-reflexive|Reflexive]]: $(a, a) \\in R$ for all $a$. [[dm-symmetric-relation|Symmetric]]: $(a, b) \\in R \\to (b, a) \\in R$. [[dm-antisymmetric|Antisymmetric]]: $(a, b), (b, a) \\in R \\to a = b$. [[dm-transitive|Transitive]]: $(a, b), (b, c) \\in R \\to (a, c) \\in R$.',
          },
          {
            label: 'In the matrix $M_R$',
            text: 'Reflexive: all $1$s on the diagonal. Symmetric: $M_R = M_R^{T}$. Antisymmetric: never $1$ in both $(i, j)$ and $(j, i)$ for $i \\ne j$. In the digraph: loops everywhere; arrows come in pairs; no pairs of opposite arrows.',
          },
          {
            label: 'Counting relations on an $n$-element set',
            tex: '\\text{all: } 2^{n^2}, \\qquad \\text{reflexive: } 2^{n(n-1)}, \\qquad \\text{symmetric: } 2^{n(n+1)/2}, \\qquad \\text{antisymmetric: } 2^n 3^{n(n-1)/2}',
          },
          {
            label: '[[dm-equivalence-relation|Equivalence relation]]',
            text: 'Reflexive, symmetric and transitive. Its [[dm-equivalence-class|equivalence classes]] $[a] = \\{b : (a, b) \\in R\\}$ form a [[dm-partition|partition]] of $A$, and every partition comes from one. Example: congruence mod $m$ has $m$ classes.',
          },
          {
            label: '[[dm-partial-order|Partial order]]',
            text: 'Reflexive, antisymmetric and transitive (e.g. $\\le$, $\\subseteq$, divisibility on $\\mathbb{Z}^+$). [[dm-total-order|Total order]]: also every two elements are comparable. Draw with a [[dm-hasse-diagram|Hasse diagram]]; a [[dm-topological-sort|topological sort]] lists the elements in a compatible total order.',
          },
          {
            label: '[[dm-transitive-closure|Transitive closure]]',
            text: 'The smallest transitive relation containing $R$: $R^* = R \\cup R^2 \\cup \\cdots \\cup R^n$. Warshall\'s algorithm computes it in $O(n^3)$.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'dm-number-theory',
    title: 'Number Theory',
    course: 'discrete',
    icon: '🔐',
    description:
      'Divisibility, the division algorithm, congruence rules, gcd and the Euclidean algorithm, Bézout, inverses, Fermat, the Chinese remainder theorem and RSA.',
    sections: [
      {
        title: 'Divisibility and congruences',
        items: [
          {
            label: 'Divides',
            tex: 'a \\mid b \\iff \\exists k \\in \\mathbb{Z}:\\; b = ak \\quad (a \\ne 0); \\qquad a \\mid b \\land a \\mid c \\implies a \\mid (mb + nc)',
          },
          {
            label: 'Division algorithm',
            tex: 'a = dq + r, \\quad 0 \\le r < d, \\qquad q = \\left\\lfloor \\frac{a}{d} \\right\\rfloor, \\quad r = a \\bmod d',
            text: 'For $d > 0$, $q$ and $r$ are unique. Example: $-11 = 3(-4) + 1$, so $-11 \\bmod 3 = 1$.',
          },
          {
            label: 'Congruence',
            tex: 'a \\equiv b \\pmod{m} \\iff m \\mid (a - b) \\iff a \\bmod m = b \\bmod m',
          },
          {
            label: 'Congruence rules',
            tex: 'a \\equiv b,\\; c \\equiv d \\pmod{m} \\implies a + c \\equiv b + d, \\quad ac \\equiv bd, \\quad a^k \\equiv b^k \\pmod{m}',
            text: 'So you may reduce mod $m$ at every step: $(a + b) \\bmod m = ((a \\bmod m) + (b \\bmod m)) \\bmod m$, and the same for $ab$. Dividing is **not** allowed unless the divisor is invertible mod $m$.',
          },
          {
            label: 'C++: a nonnegative remainder',
            code: 'int mod(int a, int m) { return ((a % m) + m) % m; }  // -11 % 3 == -2 in C++, mod(-11, 3) == 1',
            lang: 'cpp',
          },
          {
            label: 'Primes',
            text: 'Fundamental theorem of arithmetic: every integer $n > 1$ is a product of primes in exactly one way (up to order). A composite $n$ has a prime factor $\\le \\sqrt{n}$, so trial division up to $\\sqrt{n}$ tests primality. There are infinitely many primes.',
          },
        ],
      },
      {
        title: 'GCD, Bézout and inverses',
        items: [
          {
            label: 'gcd and lcm',
            tex: '\\gcd(a, b) \\cdot \\operatorname{lcm}(a, b) = ab \\quad (a, b > 0)',
            text: 'From factorizations: take the minimum (gcd) or maximum (lcm) exponent of each prime.',
          },
          {
            label: 'Euclidean algorithm',
            tex: '\\gcd(a, b) = \\gcd(b, a \\bmod b), \\qquad \\gcd(a, 0) = a',
            text: '$O(\\log \\min(a, b))$ steps. Example: $\\gcd(252, 198) = \\gcd(198, 54) = \\gcd(54, 36) = \\gcd(36, 18) = \\gcd(18, 0) = 18$.',
          },
          {
            label: 'Bézout\'s identity',
            tex: '\\gcd(a, b) = sa + tb \\quad \\text{for some integers } s, t',
            text: 'Find $s, t$ with the extended Euclidean algorithm (run Euclid, then back-substitute). Example: $18 = 4 \\cdot 252 - 5 \\cdot 198$.',
          },
          {
            label: 'Modular inverse',
            tex: '\\bar{a}\\,a \\equiv 1 \\pmod{m} \\text{ exists} \\iff \\gcd(a, m) = 1',
            text: 'If $sa + tm = 1$ then $\\bar{a} = s \\bmod m$. Solve $ax \\equiv b \\pmod{m}$ by $x \\equiv \\bar{a}b$. Example: $3 \\cdot 5 = 15 \\equiv 1 \\pmod 7$, so $\\bar{3} = 5$ mod $7$.',
          },
          {
            label: 'Fermat\'s little theorem',
            tex: 'p \\text{ prime},\\; p \\nmid a \\implies a^{p-1} \\equiv 1 \\pmod{p}; \\qquad a^p \\equiv a \\pmod{p} \\text{ for all } a',
            text: 'Consequence: $\\bar{a} \\equiv a^{p-2} \\pmod{p}$.',
          },
          {
            label: 'Euler\'s theorem',
            tex: '\\gcd(a, n) = 1 \\implies a^{\\varphi(n)} \\equiv 1 \\pmod{n}, \\qquad \\varphi(pq) = (p-1)(q-1) \\text{ for distinct primes } p, q',
          },
          {
            label: 'Chinese remainder theorem',
            tex: 'x \\equiv a_i \\pmod{m_i}\\ (i = 1..n), \\quad m_i \\text{ pairwise coprime} \\implies x \\equiv \\sum_{i} a_i M_i y_i \\pmod{M}',
            text: 'Here $M = m_1 m_2 \\cdots m_n$, $M_i = M / m_i$ and $y_i = M_i^{-1} \\bmod m_i$; the solution is unique mod $M$. Example: $x \\equiv 2 \\pmod 3$, $x \\equiv 3 \\pmod 5$, $x \\equiv 2 \\pmod 7$ gives $x \\equiv 23 \\pmod{105}$.',
          },
        ],
      },
      {
        title: 'Algorithms and cryptography',
        items: [
          {
            label: 'Fast modular exponentiation',
            code: 'uint64_t modpow(uint64_t b, uint64_t e, uint64_t m) {\n    uint64_t r = 1; b %= m;\n    while (e > 0) {\n        if (e & 1) r = r * b % m;   // use this bit of e\n        b = b * b % m;              // square for the next bit\n        e >>= 1;\n    }\n    return r;                       // O(log e) multiplications\n}',
            lang: 'cpp',
            text: 'Keep $m < 2^{32}$ so the products fit in 64 bits.',
          },
          {
            label: 'RSA',
            text: '1. Pick large primes $p, q$; let $n = pq$ and $\\varphi = (p - 1)(q - 1)$. 2. Pick $e$ with $\\gcd(e, \\varphi) = 1$. 3. Compute $d = e^{-1} \\bmod \\varphi$. Public key $(n, e)$, private key $d$. 4. Encrypt $c = m^e \\bmod n$; decrypt $m = c^d \\bmod n$. Security rests on the difficulty of factoring $n$.',
          },
          {
            label: 'RSA with small numbers',
            tex: 'p = 61,\\; q = 53:\\; n = 3233,\\; \\varphi = 3120,\\; e = 17,\\; d = 2753; \\qquad 65^{17} \\bmod 3233 = 2790, \\quad 2790^{2753} \\bmod 3233 = 65',
          },
          {
            label: 'Linear congruential generator',
            tex: 'x_{n+1} = (a\\,x_n + c) \\bmod m',
            text: 'Fast pseudorandom numbers (fine for gameplay, never for cryptography). Hashing $h(k) = k \\bmod m$ uses the same arithmetic.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'dm-counting',
    title: 'Counting',
    course: 'discrete',
    icon: '🎲',
    description:
      'Product and sum rules, pigeonhole, permutations and combinations with and without repetition, the binomial theorem, Pascal\'s identity, inclusion–exclusion, derangements and stars and bars.',
    sections: [
      {
        title: 'Basic rules',
        items: [
          { label: 'Product rule', text: 'A task done in a sequence of steps with $n_1, n_2, \\dots, n_k$ ways each can be done in $n_1 n_2 \\cdots n_k$ ways. Example: bit strings of length $n$: $2^n$.' },
          { label: '[[dm-sum-rule|Sum rule]]', text: 'If a task is done one way **or** another, with $n_1$ and $n_2$ ways and no overlap, there are $n_1 + n_2$ ways.' },
          { label: 'Subtraction rule', tex: '|A \\cup B| = |A| + |B| - |A \\cap B|' },
          { label: 'Division rule', text: 'If each outcome is counted exactly $d$ times, divide by $d$. Example: seatings of $n$ people at a round table: $n!/n = (n-1)!$.' },
          {
            label: '[[dm-pigeonhole-principle|Pigeonhole principle]]',
            tex: 'N \\text{ objects in } k \\text{ boxes} \\implies \\text{some box holds at least } \\left\\lceil \\frac{N}{k} \\right\\rceil',
            text: 'In particular, $k + 1$ objects in $k$ boxes put two in one box.',
          },
        ],
      },
      {
        title: 'Permutations and combinations',
        items: [
          {
            label: 'Permutations ($k$ of $n$, order matters)',
            tex: 'P(n, k) = n(n-1)\\cdots(n-k+1) = \\frac{n!}{(n-k)!}',
          },
          {
            label: 'Combinations ($k$ of $n$, order ignored)',
            tex: '\\binom{n}{k} = C(n, k) = \\frac{n!}{k!\\,(n-k)!} = \\frac{P(n, k)}{k!}',
          },
          {
            label: 'Choosing $k$ from $n$ types',
            tex: '\\begin{array}{l|cc} & \\text{repetition allowed} & \\text{no repetition} \\\\ \\hline \\text{order matters} & n^k & P(n, k) \\\\ \\text{order ignored} & \\binom{n + k - 1}{k} & \\binom{n}{k} \\end{array}',
          },
          {
            label: 'Permutations of a multiset',
            tex: '\\frac{n!}{n_1!\\,n_2!\\cdots n_k!} \\qquad (n_1 + \\cdots + n_k = n)',
            text: 'Example: arrangements of SUCCESS: $\\frac{7!}{3!\\,2!\\,1!\\,1!} = 420$.',
          },
          {
            label: 'Stars and bars ([[dm-combination-with-repetition|combinations with repetition]])',
            tex: 'x_1 + \\cdots + x_n = k,\\; x_i \\ge 0: \\binom{n + k - 1}{k}; \\qquad x_i \\ge 1: \\binom{k - 1}{n - 1}',
            text: '$k$ identical objects into $n$ distinct boxes. Example: $x_1 + x_2 + x_3 = 7$ has $\\binom{9}{7} = 36$ nonnegative solutions and $\\binom{6}{2} = 15$ positive ones.',
          },
        ],
      },
      {
        title: 'Binomial coefficients',
        items: [
          { label: '[[binomial-theorem|Binomial theorem]]', tex: '(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k' },
          { label: '[[pascals-triangle|Pascal\'s identity]]', tex: '\\binom{n+1}{k} = \\binom{n}{k-1} + \\binom{n}{k}' },
          { label: 'Symmetry and row sums', tex: '\\binom{n}{k} = \\binom{n}{n-k}, \\qquad \\sum_{k=0}^{n} \\binom{n}{k} = 2^n, \\qquad \\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0 \\;(n \\ge 1)' },
          { label: 'Vandermonde\'s identity', tex: '\\binom{m + n}{r} = \\sum_{k=0}^{r} \\binom{m}{r-k}\\binom{n}{k}' },
        ],
      },
      {
        title: 'Inclusion–exclusion',
        items: [
          {
            label: 'Three sets',
            tex: '|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|',
          },
          {
            label: '[[dm-inclusion-exclusion|General form]]',
            tex: '\\Big|\\bigcup_{i=1}^{n} A_i\\Big| = \\sum_i |A_i| - \\sum_{i<j} |A_i \\cap A_j| + \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1}|A_1 \\cap \\cdots \\cap A_n|',
          },
          {
            label: '[[dm-derangement|Derangements]] (no element in its own place)',
            tex: 'D_n = n!\\sum_{i=0}^{n} \\frac{(-1)^i}{i!} \\approx \\frac{n!}{e}, \\qquad D_n = (n-1)(D_{n-1} + D_{n-2})',
            text: '$D_1 = 0$, $D_2 = 1$, $D_3 = 2$, $D_4 = 9$, $D_5 = 44$. The chance a random permutation is a derangement tends to $1/e \\approx 0.368$.',
          },
          {
            label: 'Onto functions from an $m$-set to an $n$-set',
            tex: '\\sum_{i=0}^{n} (-1)^i \\binom{n}{i} (n - i)^m',
            text: 'Example: onto functions from $5$ elements to $3$: $243 - 96 + 3 = 150$.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'dm-probability',
    title: 'Discrete Probability',
    course: 'discrete',
    icon: '🃏',
    description:
      'Axioms and basic rules, conditional probability, independence, Bayes\' theorem, expected value and its linearity, variance, and the binomial and geometric distributions.',
    sections: [
      {
        title: 'Basic rules',
        items: [
          {
            label: 'Equally likely outcomes (Laplace)',
            tex: 'p(E) = \\frac{|E|}{|S|}',
          },
          {
            label: 'Axioms for a finite (or countable) sample space',
            tex: '0 \\le p(s) \\le 1, \\qquad \\sum_{s \\in S} p(s) = 1, \\qquad p(E) = \\sum_{s \\in E} p(s)',
          },
          { label: 'Complement', tex: 'p(\\overline{E}) = 1 - p(E)', text: 'Often the easy way: $p(\\text{at least one}) = 1 - p(\\text{none})$.' },
          { label: 'Union', tex: 'p(E \\cup F) = p(E) + p(F) - p(E \\cap F)' },
          {
            label: 'Birthday problem',
            tex: 'p(\\text{all } n \\text{ birthdays differ}) = \\prod_{i=0}^{n-1} \\frac{365 - i}{365}',
            text: 'For $n = 23$ a shared birthday has probability $\\approx 0.507$. Hash collisions behave the same way: with $m$ buckets, expect a collision after about $\\sqrt{\\pi m / 2}$ keys.',
          },
        ],
      },
      {
        title: 'Conditional probability and Bayes',
        items: [
          { label: 'Conditional probability', tex: 'p(E \\mid F) = \\frac{p(E \\cap F)}{p(F)} \\quad (p(F) > 0)' },
          { label: 'Multiplication rule', tex: 'p(E \\cap F) = p(E \\mid F)\\,p(F)' },
          { label: 'Independence', tex: 'E, F \\text{ independent} \\iff p(E \\cap F) = p(E)\\,p(F) \\iff p(E \\mid F) = p(E)' },
          { label: 'Law of total probability', tex: 'p(E) = p(E \\mid F)\\,p(F) + p(E \\mid \\overline{F})\\,p(\\overline{F})' },
          {
            label: 'Bayes\' theorem',
            tex: 'p(F \\mid E) = \\frac{p(E \\mid F)\\,p(F)}{p(E \\mid F)\\,p(F) + p(E \\mid \\overline{F})\\,p(\\overline{F})}',
            text: 'Watch the base rate $p(F)$: a $99\\%$ accurate test for a rare condition still gives mostly false positives.',
          },
        ],
      },
      {
        title: 'Random variables',
        items: [
          { label: 'Expected value', tex: 'E(X) = \\sum_{s \\in S} p(s)\\,X(s) = \\sum_{r} r \\cdot p(X = r)' },
          {
            label: 'Linearity of expectation',
            tex: 'E(aX + bY + c) = a\\,E(X) + b\\,E(Y) + c',
            text: 'Always true, even for dependent variables. Indicator trick: the expected number of events that happen is $\\sum_i p(E_i)$.',
          },
          { label: 'Product (independent only)', tex: 'X, Y \\text{ independent} \\implies E(XY) = E(X)\\,E(Y)' },
          {
            label: 'Variance and standard deviation',
            tex: 'V(X) = E\\big((X - E(X))^2\\big) = E(X^2) - E(X)^2, \\qquad \\sigma(X) = \\sqrt{V(X)}',
          },
          { label: 'Variance rules', tex: 'V(aX + b) = a^2\\,V(X); \\qquad X, Y \\text{ independent} \\implies V(X + Y) = V(X) + V(Y)' },
          { label: 'Chebyshev\'s inequality', tex: 'p\\big(|X - E(X)| \\ge r\\big) \\le \\frac{V(X)}{r^2}' },
        ],
      },
      {
        title: 'Distributions',
        items: [
          {
            label: 'Binomial (successes in $n$ independent trials)',
            tex: 'p(X = k) = \\binom{n}{k} p^k q^{n-k}, \\quad q = 1 - p; \\qquad E(X) = np, \\quad V(X) = npq',
          },
          {
            label: 'Geometric (trials until the first success)',
            tex: 'p(X = k) = (1 - p)^{k-1} p, \\quad k = 1, 2, \\dots; \\qquad E(X) = \\frac{1}{p}, \\quad V(X) = \\frac{1 - p}{p^2}',
            text: 'A loot drop with chance $p = 0.05$ takes $20$ kills on average. The geometric distribution is memoryless: past failures don\'t make success more likely.',
          },
          {
            label: 'Uniform and Bernoulli',
            text: 'A fair die roll has $E = 3.5$ and $V = 35/12$. A Bernoulli trial ($1$ with probability $p$, else $0$) has $E = p$, $V = pq$.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'dm-algorithms-recurrences',
    title: 'Algorithms & Recurrences',
    course: 'discrete',
    icon: '⚙️',
    description:
      'Big-O, big-Omega and big-Theta, the growth hierarchy, running times of common algorithms, the master theorem, and solving linear recurrences.',
    sections: [
      {
        title: 'Growth of functions',
        items: [
          {
            label: 'Big-O',
            tex: 'f(n) \\text{ is } O(g(n)) \\iff \\exists C, k:\\; |f(n)| \\le C\\,|g(n)| \\text{ for all } n > k',
          },
          {
            label: '[[dm-big-omega|Big-Omega]] and [[dm-big-theta|Big-Theta]]',
            tex: 'f \\text{ is } \\Omega(g) \\iff \\exists C > 0, k:\\; |f(n)| \\ge C\\,|g(n)| \\;(n > k); \\qquad f \\text{ is } \\Theta(g) \\iff f \\text{ is } O(g) \\text{ and } \\Omega(g)',
          },
          {
            label: 'Hierarchy',
            tex: '1 \\ll \\log n \\ll \\sqrt{n} \\ll n \\ll n \\log n \\ll n^2 \\ll n^3 \\ll 2^n \\ll n! \\ll n^n',
          },
          {
            label: 'Rules',
            text: 'Sums: $O(f) + O(g) = O(\\max(f, g))$. Products: $O(f) \\cdot O(g) = O(fg)$. A polynomial of degree $d$ is $\\Theta(n^d)$. Log bases differ by a constant factor, so $\\log_2 n$ and $\\log_{10} n$ are both $\\Theta(\\log n)$. $(\\log n)^c$ is $O(n^{\\varepsilon})$ and $n^c$ is $O(b^n)$ for every $c$, every $\\varepsilon > 0$ and every $b > 1$.',
          },
        ],
      },
      {
        title: 'Common running times',
        items: [
          {
            label: 'Searching and sorting',
            text: 'Linear search $O(n)$; [[dm-binary-search|binary search]] $O(\\log n)$ (sorted data). Bubble and [[dm-insertion-sort|insertion sort]] $O(n^2)$ worst case; [[dm-merge-sort|merge sort]] $\\Theta(n \\log n)$; [[dm-quicksort|quicksort]] $O(n \\log n)$ average, $O(n^2)$ worst. Comparison sorting needs $\\Omega(n \\log n)$ comparisons.',
          },
          {
            label: 'Number theory',
            text: 'Euclid\'s gcd $O(\\log \\min(a, b))$; fast modular exponentiation $O(\\log e)$ multiplications; trial-division primality $O(\\sqrt{n})$.',
          },
          {
            label: 'Graphs ($V$ vertices, $E$ edges)',
            text: 'BFS and DFS $O(V + E)$ with adjacency lists; Dijkstra $O((V + E)\\log V)$ with a binary heap; Prim $O(E \\log V)$; Kruskal $O(E \\log E)$; Warshall/Floyd $O(V^3)$.',
          },
          {
            label: 'Other',
            text: 'Hash-table lookup $O(1)$ expected; Fisher–Yates shuffle $O(n)$; naive matrix multiplication $O(n^3)$; brute-force subsets $O(2^n)$; brute-force TSP $O(n!)$.',
          },
        ],
      },
      {
        title: 'Divide and conquer',
        items: [
          {
            label: '[[dm-master-theorem|Master theorem]]',
            tex: 'f(n) = a\\,f(n/b) + c\\,n^d \\implies f(n) \\text{ is } \\begin{cases} O(n^d) & a < b^d \\\\ O(n^d \\log n) & a = b^d \\\\ O(n^{\\log_b a}) & a > b^d \\end{cases}',
            text: 'Valid for $a \\ge 1$, integer $b > 1$, $c > 0$, $d \\ge 0$.',
          },
          {
            label: 'Examples',
            text: 'Binary search: $a = 1, b = 2, d = 0$, so $O(\\log n)$. Merge sort: $a = 2, b = 2, d = 1$, so $O(n \\log n)$. Karatsuba multiplication: $a = 3, b = 2, d = 1$, so $O(n^{\\log_2 3}) \\approx O(n^{1.585})$. Strassen: $a = 7, b = 2, d = 2$, so $O(n^{\\log_2 7}) \\approx O(n^{2.807})$.',
          },
          {
            label: 'Common recurrences',
            tex: '\\begin{array}{ll} T(n) = T(n-1) + O(1) & O(n) \\\\ T(n) = T(n-1) + n & O(n^2) \\\\ T(n) = 2T(n-1) + 1 & O(2^n) \\\\ T(n) = T(n/2) + 1 & O(\\log n) \\\\ T(n) = 2T(n/2) + n & O(n \\log n) \\end{array}',
          },
        ],
      },
      {
        title: 'Solving recurrences',
        items: [
          {
            label: 'Linear homogeneous, degree 2',
            tex: 'a_n = c_1 a_{n-1} + c_2 a_{n-2} \\;\\longrightarrow\\; r^2 - c_1 r - c_2 = 0',
            text: 'Distinct roots $r_1 \\ne r_2$: $a_n = \\alpha_1 r_1^n + \\alpha_2 r_2^n$. Repeated root $r_0$: $a_n = (\\alpha_1 + \\alpha_2 n)\\,r_0^n$. Find the $\\alpha$s from the initial conditions.',
          },
          {
            label: 'Fibonacci (Binet\'s formula)',
            tex: 'F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}, \\qquad \\varphi = \\frac{1 + \\sqrt{5}}{2}, \\quad \\psi = \\frac{1 - \\sqrt{5}}{2}',
            text: 'With $F_0 = 0$, $F_1 = 1$. Since $|\\psi| < 1$, $F_n$ is the integer nearest $\\varphi^n / \\sqrt{5}$.',
          },
          {
            label: 'Nonhomogeneous',
            tex: 'a_n = a_n^{(h)} + a_n^{(p)}',
            text: 'Add a particular solution to the general homogeneous one. For $F(n) = (\\text{polynomial of degree } t) \\cdot s^n$, try $(p_t n^t + \\cdots + p_0)\\,s^n$, multiplied by $n^m$ if $s$ is a root of multiplicity $m$. Example: towers of Hanoi $H_n = 2H_{n-1} + 1$, $H_1 = 1$ gives $H_n = 2^n - 1$.',
          },
          {
            label: 'Generating functions',
            tex: 'G(x) = \\sum_{k \\ge 0} a_k x^k; \\qquad \\frac{1}{1 - ax} = \\sum_{k \\ge 0} a^k x^k, \\qquad \\frac{1}{(1 - x)^n} = \\sum_{k \\ge 0} \\binom{n + k - 1}{k} x^k',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'dm-graphs-trees-computation',
    title: 'Graphs, Trees & Computation',
    course: 'discrete',
    icon: '🕸️',
    description:
      'Handshaking, Euler and Hamilton conditions, Euler\'s formula and coloring, tree facts and traversals, shortest-path and spanning-tree algorithms, Boolean identities and an automata summary.',
    sections: [
      {
        title: 'Graphs',
        items: [
          {
            label: '[[dm-handshaking-theorem|Handshaking theorem]]',
            tex: '2|E| = \\sum_{v \\in V} \\deg(v)',
            text: 'So every graph has an even number of odd-degree vertices. Directed: $\\sum \\deg^-(v) = \\sum \\deg^+(v) = |E|$.',
          },
          {
            label: 'Special graphs',
            text: '$K_n$: $n(n-1)/2$ edges. $C_n$: $n$ edges. $K_{m,n}$: $mn$ edges. Hypercube $Q_n$: $2^n$ vertices, $n\\,2^{n-1}$ edges.',
          },
          {
            label: '[[dm-bipartite-graph|Bipartite]]',
            text: '$G$ is bipartite $\\iff$ it is $2$-colorable $\\iff$ it has no odd cycle (test with BFS in $O(V + E)$).',
          },
          {
            label: '[[dm-euler-circuit|Euler circuits and paths]]',
            text: 'A connected multigraph (with at least two vertices) has an Euler circuit $\\iff$ every vertex has even degree, and an Euler path but no circuit $\\iff$ exactly two vertices have odd degree (the path runs between them).',
          },
          {
            label: '[[dm-hamilton-circuit|Hamilton circuits]]',
            text: 'No simple test (deciding is NP-complete). Sufficient conditions for a simple graph with $n \\ge 3$ vertices: Dirac, $\\deg(v) \\ge n/2$ for every $v$; Ore, $\\deg(u) + \\deg(v) \\ge n$ for every pair of nonadjacent $u, v$.',
          },
          {
            label: 'Walks and the [[dm-adjacency-matrix|adjacency matrix]]',
            tex: '(A^k)_{ij} = \\text{number of walks of length } k \\text{ from } v_i \\text{ to } v_j',
          },
          {
            label: '[[dm-planar-graph|Euler\'s formula]] (connected planar graph)',
            tex: 'v - e + f = 2; \\qquad \\text{simple, } v \\ge 3:\\; e \\le 3v - 6; \\qquad \\text{no triangles: } e \\le 2v - 4',
            text: 'Hence $K_5$ and $K_{3,3}$ are not planar (Kuratowski: a graph is planar iff it contains no subdivision of either).',
          },
          {
            label: 'Coloring',
            text: 'Four color theorem: every planar graph has [[dm-chromatic-number|chromatic number]] $\\chi \\le 4$. $\\chi(K_n) = n$; $\\chi(C_n) = 2$ for even $n$, $3$ for odd $n$; $\\chi = 2$ iff bipartite with an edge.',
          },
        ],
      },
      {
        title: 'Trees',
        items: [
          {
            label: 'Tree facts',
            text: 'A tree is a connected graph with no cycles. Equivalently: any two vertices are joined by a unique simple path. A tree with $n$ vertices has $n - 1$ edges; adding any edge creates a cycle, removing any edge disconnects it.',
          },
          {
            label: '$m$-ary trees',
            tex: '\\text{full } m\\text{-ary: } n = mi + 1, \\;\\; \\ell = (m-1)i + 1; \\qquad \\ell \\le m^h \\implies h \\ge \\lceil \\log_m \\ell \\rceil',
            text: '$n$ vertices, $i$ internal vertices, $\\ell$ leaves, height $h$. A balanced binary tree with $n$ nodes has height $\\Theta(\\log n)$.',
          },
          {
            label: 'Traversals',
            text: '**Preorder:** root, then subtrees left to right. **Inorder** (binary): left, root, right; on a BST it lists keys in sorted order. **Postorder:** subtrees, then root (evaluates expression trees). **Level order:** BFS with a queue.',
          },
          {
            label: 'Binary search trees',
            text: 'Search, insert and delete take $O(h)$: $O(\\log n)$ when balanced, $O(n)$ in the worst case (keys inserted in sorted order).',
          },
          {
            label: 'Spanning trees',
            text: 'Every connected graph has one (BFS or DFS tree). $K_n$ has $n^{n-2}$ spanning trees (Cayley). A minimum spanning tree has $V - 1$ edges.',
          },
          {
            label: 'Shortest paths and MSTs',
            text: 'BFS: unweighted shortest paths, $O(V + E)$. [[dm-dijkstra|Dijkstra]]: nonnegative weights, $O((V + E)\\log V)$ with a binary heap. [[dm-a-star|A*]]: Dijkstra guided by an admissible heuristic. Prim: grow one tree, $O(E \\log V)$. Kruskal: add cheapest safe edges, $O(E \\log E)$ with union–find.',
          },
        ],
      },
      {
        title: 'Boolean algebra',
        items: [
          {
            label: 'Key identities',
            tex: 'x + \\overline{x} = 1, \\quad x\\overline{x} = 0, \\quad x + xy = x, \\quad x + yz = (x + y)(x + z), \\quad \\overline{xy} = \\overline{x} + \\overline{y}, \\quad \\overline{x + y} = \\overline{x}\\;\\overline{y}',
          },
          {
            label: '[[dm-sum-of-products|Normal forms]]',
            text: 'Sum of products: add the minterm of each row where $F = 1$. Product of sums: multiply the maxterm of each row where $F = 0$. There are $2^{2^n}$ Boolean functions of $n$ variables.',
          },
          {
            label: 'NAND is [[dm-functional-completeness|functionally complete]]',
            tex: '\\overline{x} = x \\uparrow x, \\qquad xy = (x \\uparrow y) \\uparrow (x \\uparrow y), \\qquad x + y = (x \\uparrow x) \\uparrow (y \\uparrow y)',
          },
          {
            label: '[[dm-full-adder|Adders]]',
            tex: '\\text{half: } S = x \\oplus y,\\; C = xy; \\qquad \\text{full: } S = x \\oplus y \\oplus c_{\\text{in}},\\; C_{\\text{out}} = xy + c_{\\text{in}}(x \\oplus y)',
          },
          {
            label: '[[dm-bit-mask|Bit tricks]] in C++',
            code: 'x & (1u << k)   // test bit k       x |= 1u << k    // set bit k\nx &= ~(1u << k) // clear bit k      x ^= 1u << k    // toggle bit k\nx & (x - 1)     // clear lowest 1   x & -x          // lowest 1 alone\nx && !(x & (x - 1))  // power of two?   std::popcount(x)  // count 1s',
            lang: 'cpp',
          },
        ],
      },
      {
        title: 'Automata and computability',
        items: [
          {
            label: '[[dm-dfa|DFA]]',
            tex: 'M = (S, I, f, s_0, F), \\quad f : S \\times I \\to S',
            text: 'Accepts a string iff the run ends in a state of $F$. An [[dm-nfa|NFA]] with $n$ states converts to a DFA with at most $2^n$ states ([[dm-subset-construction|subset construction]]).',
          },
          {
            label: '[[dm-regular-expression|Regular expressions]]',
            text: 'Built from $\\emptyset$, $\\varepsilon$, symbols, union $A \\cup B$ (`A|B`), concatenation $AB$ and star $A^*$. Kleene: regular expressions and finite automata describe the same languages. $\\{0^n1^n\\}$ is not regular.',
          },
          {
            label: '[[dm-chomsky-hierarchy|Chomsky hierarchy]]',
            text: 'Regular (finite automata) $\\subset$ context-free (pushdown automata) $\\subset$ context-sensitive (linear-bounded automata) $\\subset$ unrestricted (Turing machines).',
          },
          {
            label: 'Computability',
            text: 'Church–Turing thesis: algorithms = [[dm-turing-machine|Turing machines]]. The [[dm-halting-problem|halting problem]] is undecidable (diagonalization). $\\mathrm{P} \\subseteq \\mathrm{NP}$; [[dm-np-complete|NP-complete]] problems (SAT, Hamilton circuit, $3$-coloring, TSP decision) are the hardest in NP, and $\\mathrm{P} \\overset{?}{=} \\mathrm{NP}$ is open.',
          },
        ],
      },
    ],
  },
];
