import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-logical-equivalence',
  title: 'Truth Tables and Logical Equivalence',
  summary: 'Tautologies, De Morgan\'s laws and the algebra of logic: prove two conditions mean the same thing, then simplify real code with it.',
  minutes: 18,
  objectives: [
    'Classify a compound proposition as a tautology, a contradiction or a contingency',
    'Prove two propositions are logically equivalent with a truth table',
    'Apply the standard laws (De Morgan, distributive, absorption, double negation, $p \\to q \\equiv \\neg p \\lor q$) in a step-by-step equivalence proof',
    'Simplify and correctly negate `if` conditions in C++',
    'Explain what the satisfiability problem (SAT) asks and why brute force is hopeless for large inputs',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Always true, never true, sometimes true',
      blocks: [
        {
          type: 'p',
          text: 'Some compound propositions do not depend on the facts at all. "The door is open or the door is not open" is true no matter what the door is doing. Its truth comes from its **form**. Logic sorts formulas into three kinds by looking at their whole truth-table column.',
        },
        {
          type: 'definition',
          term: 'Tautology, contradiction, contingency',
          text: 'A [[dm-tautology|tautology]] is true in **every** row of its truth table. A [[dm-contradiction|contradiction]] is false in every row. A [[dm-contingency|contingency]] is neither: true in some rows and false in others.',
        },
        {
          type: 'table',
          headers: ['$p$', '$q$', '$p \\lor \\neg p$', '$p \\land \\neg p$', '$p \\to q$', '$(p \\land (p \\to q)) \\to q$'],
          rows: [
            ['T', 'T', 'T', 'F', 'T', 'T'],
            ['T', 'F', 'T', 'F', 'F', 'T'],
            ['F', 'T', 'T', 'F', 'T', 'T'],
            ['F', 'F', 'T', 'F', 'T', 'T'],
          ],
          caption: 'Columns 3 and 6 are all T (tautologies), column 4 is all F (a contradiction), and $p \\to q$ is a contingency.',
        },
        {
          type: 'derivation',
          title: 'Why $(p \\land (p \\to q)) \\to q$ is a tautology',
          steps: [
            { tex: '\\text{Rows with } p = \\text{F}: \\; p \\land (p \\to q) = \\text{F}', why: 'An "and" with a false input is false.' },
            { tex: '\\implies \\text{F} \\to q = \\text{T}', why: 'A conditional with a false hypothesis is vacuously true, whatever $q$ is.' },
            { tex: '\\text{Row } p = \\text{T}, q = \\text{F}: \\; p \\to q = \\text{F}, \\text{ so } p \\land (p \\to q) = \\text{F}', why: 'The inner conditional fails, so again the hypothesis of the outer one is false.' },
            { tex: '\\text{Row } p = \\text{T}, q = \\text{T}: \\; \\text{T} \\to \\text{T} = \\text{T}', why: 'The only row where the hypothesis is true also has a true conclusion.' },
          ],
          result: 'True in all four rows. This tautology is the logical heart of *modus ponens* (lesson 4): from $p$ and $p \\to q$ you may conclude $q$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why tautologies matter',
          text: 'A tautology is a statement you can rely on **without checking any facts**, which is exactly what a valid step in a proof needs to be. Every rule of reasoning you will use in this course is backed by some tautology, and every rule of simplification is backed by an equivalence (which, as you will see on the next card, is a tautology too).',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'mcq',
      prompt: 'Classify $(p \\to q) \\lor (q \\to p)$.',
      options: [
        { text: 'A contingency: it depends on how $p$ and $q$ are related', why: 'Check the rows: whenever $p \\to q$ fails ($p$ = T, $q$ = F), the other disjunct $q \\to p$ is $\\text{F} \\to \\text{T}$ = T. No row is false.' },
        { text: 'A tautology', correct: true, why: 'The only row where $p \\to q$ is false is $p$ = T, $q$ = F, and in that row $q \\to p$ is true. So the "or" is true in every row.' },
        { text: 'A contradiction', why: 'A contradiction is false in every row, but in row $p$ = T, $q$ = T both conditionals are true.' },
      ],
      explanation: 'It feels as if "$p$ implies $q$ or $q$ implies $p$" should be a strong claim, but logically it is free: any two propositions satisfy it. The trick is that each conditional is false in a different row, so they never fail together. This is a good reminder that logic\'s "implies" is about truth values, not causation.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Logical equivalence',
      blocks: [
        {
          type: 'p',
          text: 'Two formulas can look different but behave identically. `!(alive && visible)` and `!alive || !visible` give the same answer in every situation. Logic has a name and a symbol for this.',
        },
        {
          type: 'definition',
          term: 'Logical equivalence',
          text: 'Propositions $A$ and $B$ are **logically equivalent**, written $A \\equiv B$, if they have the same truth value in every row of the truth table. Equivalently, $A \\leftrightarrow B$ is a tautology.',
        },
        {
          type: 'p',
          text: 'Note that $\\equiv$ is not a connective like $\\leftrightarrow$. $p \\leftrightarrow q$ is a proposition that may be true or false; $A \\equiv B$ is a claim *about* two formulas, and it is either correct or not. The first and most useful equivalences are [[dm-de-morgans-laws|De Morgan\'s laws]].',
        },
        {
          type: 'theorem',
          name: 'De Morgan\'s laws',
          tex: '\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q \\qquad\\qquad \\neg(p \\lor q) \\equiv \\neg p \\land \\neg q',
          text: 'To negate an "and", negate each part and switch to "or" (and vice versa).',
        },
        {
          type: 'table',
          headers: ['$p$', '$q$', '$p \\land q$', '$\\neg(p \\land q)$', '$\\neg p$', '$\\neg q$', '$\\neg p \\lor \\neg q$'],
          rows: [
            ['T', 'T', 'T', '**F**', 'F', 'F', '**F**'],
            ['T', 'F', 'F', '**T**', 'F', 'T', '**T**'],
            ['F', 'T', 'F', '**T**', 'T', 'F', '**T**'],
            ['F', 'F', 'F', '**T**', 'T', 'T', '**T**'],
          ],
          caption: 'Proof of the first law by truth table: the two bold columns agree in all four rows.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg"><text x="120" y="24" text-anchor="middle" font-size="15">¬(p ∧ q)</text><path d="M10,40 h220 v130 h-220 Z M120.0,64.60 A46,46 0 0,1 120.0,145.40 A46,46 0 0,1 120.0,64.60 Z" fill-rule="evenodd" class="f-teal" fill="currentColor" fill-opacity="0.35" stroke="none"/><rect x="10" y="40" width="220" height="130" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="98" cy="105" r="46" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="142" cy="105" r="46" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="76" y="110" text-anchor="middle" font-size="15" font-style="italic">p</text><text x="164" y="110" text-anchor="middle" font-size="15" font-style="italic">q</text><text x="375" y="24" text-anchor="middle" font-size="15">¬p ∨ ¬q</text><path d="M265,40 h220 v130 h-220 Z M307,105 a46,46 0 1,0 92,0 a46,46 0 1,0 -92,0 Z" fill-rule="evenodd" class="f-blue" fill="currentColor" fill-opacity="0.25" stroke="none"/><path d="M265,40 h220 v130 h-220 Z M351,105 a46,46 0 1,0 92,0 a46,46 0 1,0 -92,0 Z" fill-rule="evenodd" class="f-red" fill="currentColor" fill-opacity="0.25" stroke="none"/><rect x="265" y="40" width="220" height="130" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="353" cy="105" r="46" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="397" cy="105" r="46" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="331" y="110" text-anchor="middle" font-size="15" font-style="italic">p</text><text x="419" y="110" text-anchor="middle" font-size="15" font-style="italic">q</text><text x="120" y="194" text-anchor="middle" font-size="12" class="t-gray">shaded: outside the overlap</text><text x="375" y="194" text-anchor="middle" font-size="12" class="t-gray">blue = ¬p, red = ¬q, purple = both</text><text x="375" y="210" text-anchor="middle" font-size="12" class="t-gray">any color: ¬p ∨ ¬q</text></svg>',
          alt: 'Two Venn diagrams with circles p and q. Left: everything except the overlap is shaded, representing not (p and q). Right: outside p is blue, outside q is red; together they cover everything except the overlap, representing not p or not q.',
          caption: 'The same law as pictures: "not in both circles" covers exactly the region "outside $p$ **or** outside $q$". Unit 3 states De Morgan\'s laws for sets.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "and" turns into "or"',
          text: '"The enemy is alive and visible" is false as soon as **one** part fails: either it is dead, or it is hidden (or both). Listing the ways a conjunction can fail is exactly a disjunction of negations. In the same way, "alive or visible" fails only when **both** parts fail: dead and hidden.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: '$\\neg(p \\land q) \\equiv \\neg p \\land \\neg q$',
      answer: false,
      explanation: 'This is the classic De Morgan mistake: negating the parts without switching the connective. Row $p$ = T, $q$ = F is a counterexample: $\\neg(p \\land q) = \\neg\\text{F} = \\text{T}$, but $\\neg p \\land \\neg q = \\text{F} \\land \\text{T} = \\text{F}$. The correct law is $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'numeric',
      prompt: 'In how many of the $8$ rows of the truth table of $(p \\to q) \\land (q \\to r)$ is the statement **true**?',
      label: 'true rows $=$',
      answer: '4',
      hint: 'Rule out the rows where $p \\to q$ fails ($p$ = T, $q$ = F) and the rows where $q \\to r$ fails ($q$ = T, $r$ = F).',
      explanation: '$p \\to q$ fails in the $2$ rows with $p$ = T, $q$ = F (any $r$). $q \\to r$ fails in the $2$ rows with $q$ = T, $r$ = F (any $p$). These four rows are all different (one set has $q$ = F, the other $q$ = T), so $8 - 4 = 4$ rows are true: TTT, FTT, FFT and FFF. Notice the pattern: once a true value appears, everything after it in the chain $p, q, r$ must be true.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The laws of logic',
      blocks: [
        {
          type: 'p',
          text: 'Truth tables always work, but they double in size with each variable. For bigger formulas we use a small set of proven equivalences, the **laws of logic**, and rewrite step by step, the way you simplify algebra. Here T stands for any tautology and F for any contradiction.',
        },
        {
          type: 'table',
          headers: ['Law', 'Form'],
          rows: [
            ['Identity', '$p \\land \\text{T} \\equiv p$, $\\;p \\lor \\text{F} \\equiv p$'],
            ['Domination', '$p \\lor \\text{T} \\equiv \\text{T}$, $\\;p \\land \\text{F} \\equiv \\text{F}$'],
            ['Idempotent', '$p \\lor p \\equiv p$, $\\;p \\land p \\equiv p$'],
            ['Double negation', '$\\neg\\neg p \\equiv p$'],
            ['Negation', '$p \\lor \\neg p \\equiv \\text{T}$, $\\;p \\land \\neg p \\equiv \\text{F}$'],
            ['Commutative', '$p \\lor q \\equiv q \\lor p$, $\\;p \\land q \\equiv q \\land p$'],
            ['Associative', '$(p \\lor q) \\lor r \\equiv p \\lor (q \\lor r)$, same for $\\land$'],
            ['Distributive', '$p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)$, $\\;p \\lor (q \\land r) \\equiv (p \\lor q) \\land (p \\lor r)$'],
            ['De Morgan', '$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$, $\\;\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$'],
            ['Absorption', '$p \\lor (p \\land q) \\equiv p$, $\\;p \\land (p \\lor q) \\equiv p$'],
            ['Conditional', '$p \\to q \\equiv \\neg p \\lor q$, $\\;p \\to q \\equiv \\neg q \\to \\neg p$'],
            ['Biconditional', '$p \\leftrightarrow q \\equiv (p \\to q) \\land (q \\to p)$'],
          ],
          caption: 'Every law here can be proved with a truth table of at most $8$ rows. Learn the names: proofs cite them.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $p \\to q \\equiv \\neg p \\lor q$',
          text: '$p \\to q$ is false only in the row $p$ = T, $q$ = F. $\\neg p \\lor q$ is false only when both $\\neg p$ and $q$ are false, which is the same row. Same single false row, same truth table. This is the law you use to turn any $\\to$ into $\\neg$ and $\\lor$, which is how code (with no `->` operator) expresses implication.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Logic distributes both ways',
          text: 'In arithmetic, $\\times$ distributes over $+$ but $+$ does not distribute over $\\times$: $2 + (3 \\cdot 4) \\ne (2 + 3)(2 + 4)$. In logic **both** work: $\\land$ distributes over $\\lor$ *and* $\\lor$ distributes over $\\land$. And unlike $\\land$ and $\\lor$, the conditional is neither commutative nor associative: $(p \\to q) \\to r \\not\\equiv p \\to (q \\to r)$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Proving equivalences with the laws',
      blocks: [
        {
          type: 'p',
          text: 'An equivalence proof is a chain $A \\equiv A_1 \\equiv A_2 \\equiv \\dots \\equiv B$ in which every link applies **one** named law to part of the formula. Because $\\equiv$ is transitive, the chain proves $A \\equiv B$. Each step can be checked by anyone, which is exactly what makes it a proof.',
        },
        {
          type: 'derivation',
          title: 'Show $\\neg(p \\lor (\\neg p \\land q)) \\equiv \\neg p \\land \\neg q$',
          steps: [
            { tex: '\\neg(p \\lor (\\neg p \\land q))', why: 'Start from the more complicated side; you will usually simplify toward the simpler one.' },
            { tex: '\\equiv \\neg p \\land \\neg(\\neg p \\land q)', why: 'De Morgan on the outer negation: $\\neg(A \\lor B) \\equiv \\neg A \\land \\neg B$ with $A = p$, $B = \\neg p \\land q$.' },
            { tex: '\\equiv \\neg p \\land (\\neg\\neg p \\lor \\neg q)', why: 'De Morgan again, on $\\neg(\\neg p \\land q)$.' },
            { tex: '\\equiv \\neg p \\land (p \\lor \\neg q)', why: 'Double negation: $\\neg\\neg p \\equiv p$.' },
            { tex: '\\equiv (\\neg p \\land p) \\lor (\\neg p \\land \\neg q)', why: 'Distribute $\\neg p \\land$ over the $\\lor$.' },
            { tex: '\\equiv \\text{F} \\lor (\\neg p \\land \\neg q)', why: 'Negation law: $\\neg p \\land p$ is a contradiction.' },
            { tex: '\\equiv \\neg p \\land \\neg q', why: 'Identity law: $\\text{F} \\lor A \\equiv A$.' },
          ],
          result: 'Proved. A quick shortcut (absorption-like) would also work, but this chain uses only laws from the table.',
        },
        {
          type: 'derivation',
          title: 'Show $(p \\land q) \\to (p \\lor q)$ is a tautology',
          steps: [
            { tex: '(p \\land q) \\to (p \\lor q) \\equiv \\neg(p \\land q) \\lor (p \\lor q)', why: 'Conditional law: $A \\to B \\equiv \\neg A \\lor B$.' },
            { tex: '\\equiv (\\neg p \\lor \\neg q) \\lor (p \\lor q)', why: 'De Morgan.' },
            { tex: '\\equiv (\\neg p \\lor p) \\lor (\\neg q \\lor q)', why: 'Associative and commutative laws let you regroup a chain of $\\lor$ freely.' },
            { tex: '\\equiv \\text{T} \\lor \\text{T} \\equiv \\text{T}', why: 'Negation law twice, then domination (or idempotent).' },
          ],
          result: 'The formula is equivalent to T, so it is a tautology: "if both hold, then at least one holds".',
        },
        {
          type: 'callout',
          variant: 'exam',
          text: 'Exams ask for equivalence proofs "using the laws of logic, not truth tables". Write one law per line and **name it**. Graders deduct for skipped steps (two laws in one line) more than for anything else. When stuck, convert every $\\to$ with the conditional law and push negations inward with De Morgan.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Order the lines of this equivalence proof that $\\neg(p \\to q) \\equiv p \\land \\neg q$, one law per step.',
      lines: [
        '$\\neg(p \\to q)$',
        '$\\equiv \\neg(\\neg p \\lor q)$ (conditional law)',
        '$\\equiv \\neg\\neg p \\land \\neg q$ (De Morgan)',
        '$\\equiv p \\land \\neg q$ (double negation)',
      ],
      distractors: ['$\\equiv \\neg p \\to \\neg q$ (negate both parts)'],
      explanation: 'First remove the arrow ($p \\to q \\equiv \\neg p \\lor q$), then push the negation inside with De Morgan (the $\\lor$ becomes $\\land$), then cancel the double negation. The result says a conditional is false exactly when the hypothesis is true and the conclusion false. The distractor is a common error: negating a conditional does **not** give another conditional.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'error',
      prompt: 'A student simplifies $\\neg(\\neg p \\land q) \\land (p \\lor q)$. Tap the first line that is wrong.',
      lines: [
        '$\\neg(\\neg p \\land q) \\land (p \\lor q)$',
        '$\\equiv (\\neg\\neg p \\land \\neg q) \\land (p \\lor q)$ (De Morgan)',
        '$\\equiv (p \\land \\neg q) \\land (p \\lor q)$ (double negation)',
        '$\\equiv \\neg q \\land (p \\land (p \\lor q))$ (commutative, associative)',
        '$\\equiv \\neg q \\land p$ (absorption)',
      ],
      errorLines: [2],
      explanation: 'Line 2 negates both parts but keeps the $\\land$. De Morgan switches the connective: $\\neg(\\neg p \\land q) \\equiv \\neg\\neg p \\lor \\neg q \\equiv p \\lor \\neg q$. Then $(p \\lor \\neg q) \\land (p \\lor q) \\equiv p \\lor (\\neg q \\land q) \\equiv p \\lor \\text{F} \\equiv p$ by the distributive, negation and identity laws. The correct simplification is just $p$. (Check row $p$ = T, $q$ = T: the original is $\\neg\\text{F} \\land \\text{T} = \\text{T}$, but the student\'s $\\neg q \\land p$ is F.)',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Simplifying conditions in code',
      blocks: [
        {
          type: 'p',
          text: 'Conditions in real code grow by accretion: someone adds a special case, someone else negates a block. The laws of logic let you clean them up **with a guarantee** that behavior does not change. Write each comparison or flag as a letter, simplify, translate back.',
        },
        {
          type: 'derivation',
          title: 'Simplify `!(alive && !stunned) || (alive && stunned)`',
          steps: [
            { tex: '\\neg(a \\land \\neg s) \\lor (a \\land s)', why: 'Let $a$ = `alive` and $s$ = `stunned`.' },
            { tex: '\\equiv (\\neg a \\lor \\neg\\neg s) \\lor (a \\land s)', why: 'De Morgan on the first part.' },
            { tex: '\\equiv \\neg a \\lor (s \\lor (a \\land s))', why: 'Double negation, then regroup the $\\lor$ chain (associative).' },
            { tex: '\\equiv \\neg a \\lor s', why: 'Absorption: $s \\lor (s \\land a) \\equiv s$ (after commuting $a \\land s$ to $s \\land a$).' },
          ],
          result: 'The condition is just `!alive || stunned`: "the enemy cannot act". Shorter, faster, and it says what it means.',
        },
        {
          type: 'compare',
          left: {
            title: 'Wrong negation',
            tone: 'bad',
            code: '// "not (hp > 0 and ammo > 0)"\nif (hp < 0 && ammo < 0) reload();',
            lang: 'cpp',
          },
          right: {
            title: 'Right negation',
            tone: 'good',
            code: '// De Morgan, and !(x > 0) is x <= 0\nif (hp <= 0 || ammo <= 0) reload();',
            lang: 'cpp',
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Two traps when negating conditions',
          text: 'First, De Morgan switches `&&` and `||`. Second, the negation of `x > 0` is `x <= 0`, **not** `x < 0`: the boundary case $x = 0$ must land on exactly one side. And remember the code exception from lesson 1: if an operand has side effects or is guarded by short-circuiting (`p != nullptr && p->hp > 0`), reordering operands is no longer safe even though the logic is equivalent.',
        },
        {
          type: 'code',
          title: 'equivalence.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <functional>

using Formula = std::function<bool(bool, bool, bool)>;

bool implies(bool a, bool b) { return !a || b; }

// Brute force: compare f and g on all 2^3 = 8 assignments.
void check(const char* name, const Formula& f, const Formula& g) {
    for (int bits = 0; bits < 8; ++bits) {
        bool p = bits & 4, q = bits & 2, r = bits & 1;
        if (f(p, q, r) != g(p, q, r)) {
            std::printf("%-15s NOT equivalent: p=%d q=%d r=%d\\n", name, p, q, r);
            return;
        }
    }
    std::printf("%-15s equivalent\\n", name);
}

int main() {
    check("De Morgan",
          [](bool p, bool q, bool) { return !(p && q); },
          [](bool p, bool q, bool) { return !p || !q; });
    check("distributive",
          [](bool p, bool q, bool r) { return p || (q && r); },
          [](bool p, bool q, bool r) { return (p || q) && (p || r); });
    check("absorption",
          [](bool p, bool q, bool) { return p || (p && q); },
          [](bool p, bool, bool) { return p; });
    check("fake De Morgan",
          [](bool p, bool q, bool) { return !(p && q); },
          [](bool p, bool q, bool) { return !p && !q; });
    check("-> associative?",
          [](bool p, bool q, bool r) { return implies(implies(p, q), r); },
          [](bool p, bool q, bool r) { return implies(p, implies(q, r)); });
}`,
          output: `De Morgan       equivalent
distributive    equivalent
absorption      equivalent
fake De Morgan  NOT equivalent: p=0 q=1 r=0
-> associative? NOT equivalent: p=0 q=0 r=0`,
          annotations: [
            { lines: 10, text: 'The $3$ low bits of `bits` run through all $8$ truth assignments: $000_2$ to $111_2$.' },
            { lines: 11, text: 'Extract each variable with a bit mask: bit 2 is $p$, bit 1 is $q$, bit 0 is $r$.' },
            { lines: '12-15', text: 'One disagreeing row is a **counterexample**: it proves the formulas are not equivalent.' },
            { lines: 17, text: 'Only after checking all $8$ rows may we claim equivalence. This is a truth-table proof, automated.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'Which condition is equivalent to `!(hp > 0 && ammo > 0)` for integers `hp` and `ammo`?',
      codeOptions: true,
      options: [
        { text: 'hp <= 0 && ammo <= 0', why: 'This negates each part but keeps `&&`. With `hp = 5`, `ammo = 0` the original is true (out of ammo) but this is false.' },
        { text: 'hp < 0 || ammo < 0', why: 'The connective is right, but `!(hp > 0)` is `hp <= 0`. With `hp = 0` the original is true while this is false.' },
        { text: 'hp <= 0 || ammo <= 0', correct: true, why: 'De Morgan turns `!(A && B)` into `!A || !B`, and `!(x > 0)` is `x <= 0`.' },
        { text: '!(hp > 0) && ammo > 0', why: 'This negates only the first part. It is true only when you are out of health but have ammo.' },
      ],
      explanation: 'Apply De Morgan, $\\neg(A \\land B) \\equiv \\neg A \\lor \\neg B$, then negate each comparison exactly: the opposite of $x > 0$ is $x \\le 0$. Read in English: "not (healthy and loaded)" means "out of health or out of ammo".',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Satisfiability: a preview of a famous hard problem',
      blocks: [
        {
          type: 'p',
          text: 'Flip the question around. Instead of "is this formula always true?", ask "can this formula be true **at all**?"',
        },
        {
          type: 'definition',
          term: 'Satisfiable',
          text: 'A formula is **satisfiable** if at least one assignment of truth values makes it true. Such an assignment is called a *satisfying assignment*. A formula is unsatisfiable exactly when it is a contradiction. The [[dm-satisfiability|satisfiability problem (SAT)]] asks: given a formula, is it satisfiable?',
        },
        {
          type: 'derivation',
          title: 'Find all satisfying assignments of $(p \\lor q) \\land (\\neg p \\lor r) \\land (\\neg q \\lor \\neg r)$',
          steps: [
            { tex: '\\text{Case } p = \\text{T}: \\; (\\neg p \\lor r) \\text{ forces } r = \\text{T}', why: 'With $\\neg p$ false, the clause $\\neg p \\lor r$ can only be satisfied by $r$.' },
            { tex: '\\implies (\\neg q \\lor \\neg r) \\text{ forces } q = \\text{F}', why: 'Now $\\neg r$ is false, so $\\neg q$ must be true.' },
            { tex: '\\implies (p, q, r) = (\\text{T}, \\text{F}, \\text{T}) \\text{ works}', why: 'Check the first clause: $p \\lor q$ = T. All three clauses hold.' },
            { tex: '\\text{Case } p = \\text{F}: \\; (p \\lor q) \\text{ forces } q = \\text{T} \\text{, then } (\\neg q \\lor \\neg r) \\text{ forces } r = \\text{F}', why: 'The same "forced move" reasoning, called *unit propagation*, which real SAT solvers use.' },
            { tex: '\\implies (\\text{F}, \\text{T}, \\text{F}) \\text{ works}', why: 'The middle clause $\\neg p \\lor r$ is true because $\\neg p$ is true.' },
          ],
          result: 'Exactly two of the eight assignments satisfy the formula, so it is satisfiable (and a contingency).',
        },
        {
          type: 'p',
          text: 'Checking one assignment is fast. The trouble is the number of assignments: $2^n$ for $n$ variables. Drag the slider to see what brute force costs at a billion assignments per second.',
        },
        {
          type: 'graph',
          x: [0, 14],
          y: [0, 3000],
          yStep: 500,
          functions: [
            { expr: '2^x', label: '$2^n$ (assignments to try)', color: 'red' },
            { expr: 'x^3', label: '$n^3$ (a polynomial, for comparison)', color: 'blue' },
          ],
          sliders: [{ name: 'n', min: 1, max: 100, step: 1, value: 30, label: 'variables $n$' }],
          readouts: [
            { label: 'assignments $2^n =$', expr: '2^n', digits: 0 },
            { label: 'seconds at $10^9$ per second $\\approx$', expr: '2^n/10^9', digits: 2 },
            { label: 'years $\\approx$', expr: '2^n/(10^9*3.156*10^7)', digits: 3 },
          ],
          caption: 'Past $n \\approx 10$ the exponential overtakes $n^3$, and it eventually overtakes every polynomial. At $n = 55$ brute force already takes about a year; at $n = 100$ it would take far longer than the age of the universe.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'SAT and P vs NP',
          text: 'In 1971 Stephen Cook proved that SAT is **NP-complete**: if anyone finds an algorithm that solves *every* SAT instance in polynomial time, then thousands of other hard problems (scheduling, routing, many puzzles) can be solved fast too. Whether such an algorithm exists is the P vs NP question, one of the great open problems in mathematics. Unit 11 returns to it.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'SAT solvers in practice',
          text: 'Despite the worst case, modern SAT solvers routinely handle formulas with millions of variables, using clever case splitting, unit propagation and learning from conflicts. They verify CPU designs, resolve package-manager dependencies, and can generate puzzle levels that have exactly one solution.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'numeric',
      prompt: 'How many of the $8$ truth assignments satisfy $(p \\lor q) \\land (\\neg p \\lor r) \\land (q \\lor \\neg r)$?',
      label: 'satisfying assignments $=$',
      answer: '3',
      hint: 'Split into the cases $p$ = T and $p$ = F, and see which values are forced.',
      explanation: 'If $p$ = T, the clause $\\neg p \\lor r$ forces $r$ = T, and then $q \\lor \\neg r$ forces $q$ = T: the assignment TTT, which also satisfies $p \\lor q$. If $p$ = F, the clause $p \\lor q$ forces $q$ = T; then $\\neg p \\lor r$ is already true and $q \\lor \\neg r$ is already true, so $r$ is free: FTT and FTF. Total: $1 + 2 = 3$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'truefalse',
      prompt: 'A formula is a tautology exactly when its negation is unsatisfiable.',
      answer: true,
      explanation: '$A$ is a tautology means $A$ is true in every row, which means $\\neg A$ is false in every row, i.e. no assignment satisfies $\\neg A$. This is how SAT solvers are used to *prove* things: to show $A$ always holds, ask the solver to satisfy $\\neg A$; if it reports "unsatisfiable", $A$ is a tautology.',
    },
  ],
  takeaways: [
    'A tautology is true in every row, a contradiction in none, a contingency in some.',
    '$A \\equiv B$ means $A$ and $B$ agree in every row, i.e. $A \\leftrightarrow B$ is a tautology. One disagreeing row disproves it.',
    'De Morgan: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$ and $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$. Also key: $p \\to q \\equiv \\neg p \\lor q$ and $\\neg(p \\to q) \\equiv p \\land \\neg q$.',
    'Equivalence proofs apply one named law per line; they scale to formulas too large for truth tables.',
    'When negating code conditions, switch `&&`/`||` and negate comparisons exactly (`>` becomes `<=`).',
    'SAT asks whether a formula can be true; brute force tries $2^n$ assignments, and no polynomial-time algorithm is known.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Section 3.1, Propositional Logic)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Covers truth tables, logical equivalence and De Morgan\'s laws, with exercises and solutions.',
    },
    {
      title: 'Wikipedia — De Morgan\'s laws',
      url: 'https://en.wikipedia.org/wiki/De_Morgan%27s_laws',
      source: 'wikipedia',
      note: 'The laws in logic, set theory and code, with Venn diagrams and their history.',
    },
    {
      title: 'Wikipedia — Boolean satisfiability problem',
      url: 'https://en.wikipedia.org/wiki/Boolean_satisfiability_problem',
      source: 'wikipedia',
      note: 'What SAT is, why it is NP-complete, and how practical solvers attack it.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The propositional logic readings include equivalence, validity and satisfiability from a CS perspective.',
    },
  ],
};
