import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-rules-of-inference',
  title: 'Rules of Inference',
  summary: 'Modus ponens, modus tollens, resolution and friends: the small, certified moves that every proof is built from, and the fallacies that imitate them.',
  minutes: 18,
  objectives: [
    'Define a valid argument and test validity with a truth table',
    'Name and apply modus ponens, modus tollens, hypothetical and disjunctive syllogism, simplification, conjunction, addition and resolution',
    'Recognise the fallacies of affirming the consequent and denying the antecedent, and refute them with a counterexample row',
    'Use universal and existential instantiation and generalization to reason about quantified statements',
    'Write a formal argument as a numbered sequence of justified steps',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Arguments and validity',
      blocks: [
        {
          type: 'p',
          text: 'A proof is a chain of small steps, each of which a skeptical reader must accept. This lesson is about those steps. An **argument** is a list of propositions called **premises** followed by a **conclusion**, usually written with $\\therefore$ ("therefore").',
        },
        {
          type: 'definition',
          term: 'Valid argument',
          text: 'An argument with premises $p_1, \\dots, p_n$ and conclusion $q$ is [[dm-valid-argument|valid]] if the conclusion is true **whenever** all the premises are true. Equivalently, $(p_1 \\land p_2 \\land \\dots \\land p_n) \\to q$ is a tautology.',
        },
        {
          type: 'p',
          text: 'Validity is about **form**, not facts. "If pigs fly, I am the king; pigs fly; therefore I am the king" is valid: *if* both premises were true, the conclusion would have to be. It just has a false premise. A valid argument whose premises really are true is called **sound**, and only a sound argument guarantees a true conclusion.',
        },
        {
          type: 'derivation',
          title: 'Test the form $p \\to q,\\; q \\to r \\;\\therefore\\; p \\to r$ with a truth table',
          steps: [
            { tex: '\\text{Keep only the rows where both premises are true}', why: 'These are the *critical rows*. Rows with a false premise cannot break validity, so we ignore them.' },
            { tex: '(p,q,r) \\in \\{\\text{TTT}, \\text{FTT}, \\text{FFT}, \\text{FFF}\\}', why: '$p \\to q$ rules out $p$ = T, $q$ = F, and $q \\to r$ rules out $q$ = T, $r$ = F. Four of the eight rows survive.' },
            { tex: 'p \\to r: \\; \\text{T}\\to\\text{T},\\; \\text{F}\\to\\text{T},\\; \\text{F}\\to\\text{T},\\; \\text{F}\\to\\text{F} \\;=\\; \\text{T, T, T, T}', why: 'Evaluate the conclusion in each critical row.' },
          ],
          result: 'The conclusion is true in every critical row, so the argument form is valid. It is called **hypothetical syllogism**: implications chain.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why we need rules, not just truth tables',
          text: 'A truth table checks validity, but it has $2^n$ rows and does not work at all once quantifiers range over infinite domains like $\\mathbb{Z}$. **Rules of inference** are small argument forms already proved valid. Chaining them gives a proof whose length grows with the reasoning, not with the number of variables, and that works over any domain.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'truefalse',
      prompt: 'A valid argument can have a false conclusion.',
      answer: true,
      explanation: 'Validity only promises: **if** all the premises are true, the conclusion is true. If some premise is false, a valid argument can reach a false conclusion: "All birds can fly; penguins are birds; therefore penguins can fly" is valid but unsound, because the first premise is false. A valid argument with all premises true (a *sound* argument) can never have a false conclusion.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The core rules of inference',
      blocks: [
        {
          type: 'p',
          text: 'Here are the [[dm-rule-of-inference|rules of inference]] you will use constantly. Each one is a valid form; each is backed by a tautology you could check with a truth table of at most $8$ rows.',
        },
        {
          type: 'table',
          headers: ['Rule', 'From', 'Conclude', 'Example'],
          rows: [
            ['[[dm-modus-ponens|Modus ponens]]', '$p$, $\\;p \\to q$', '$q$', 'The alarm is on. If the alarm is on, guards come. So guards come.'],
            ['[[dm-modus-tollens|Modus tollens]]', '$\\neg q$, $\\;p \\to q$', '$\\neg p$', 'No guards came. If the alarm were on, guards would come. So the alarm is off.'],
            ['Hypothetical syllogism', '$p \\to q$, $\\;q \\to r$', '$p \\to r$', 'Implications chain.'],
            ['Disjunctive syllogism', '$p \\lor q$, $\\;\\neg p$', '$q$', 'The key is in the chest or the vault. Not in the chest. So in the vault.'],
            ['Addition', '$p$', '$p \\lor q$', 'You may always weaken to an "or".'],
            ['Simplification', '$p \\land q$', '$p$', 'Take one part of an "and".'],
            ['Conjunction', '$p$, $\\;q$', '$p \\land q$', 'Combine two proved facts.'],
            ['[[dm-resolution|Resolution]]', '$p \\lor q$, $\\;\\neg p \\lor r$', '$q \\lor r$', 'Card 5 of this lesson.'],
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why modus tollens is valid',
          text: 'Modus tollens is modus ponens in disguise. $p \\to q$ is equivalent to its contrapositive $\\neg q \\to \\neg p$ (lesson 1). Given $\\neg q$, modus ponens on the contrapositive yields $\\neg p$. Debugging uses it constantly: "if my fix worked, the test would pass; the test fails; so my fix did not work."',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Inference in game AI',
          text: 'Rule-based AI (expert systems, some quest and dialogue engines) stores facts and `if … then …` rules and repeatedly applies modus ponens: whenever a rule\'s condition matches known facts, add its conclusion as a new fact, until nothing changes. This is called *forward chaining*. Prolog and many planners instead work *backward* from a goal, essentially using resolution.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: '"Either the save file is corrupted or the loader has a bug. The save file is not corrupted. Therefore the loader has a bug." Which rule is this?',
      options: [
        { text: 'Modus ponens', why: 'Modus ponens needs a conditional $p \\to q$ and its hypothesis $p$. There is no conditional here, only an "or".' },
        { text: 'Disjunctive syllogism', correct: true, why: 'From $p \\lor q$ and $\\neg p$, conclude $q$: one option of the "or" is eliminated, so the other must hold.' },
        { text: 'Modus tollens', why: 'Modus tollens works from a conditional and the negation of its conclusion. This argument eliminates one side of a disjunction instead.' },
        { text: 'Addition', why: 'Addition goes from $p$ to $p \\lor q$, building an "or". Here an "or" is being used up, not created.' },
      ],
      explanation: 'With $c$ = "the save is corrupted" and $b$ = "the loader has a bug", the argument is $c \\lor b,\\; \\neg c \\;\\therefore\\; b$: disjunctive syllogism. It is valid because the only row with $c \\lor b$ true and $c$ false has $b$ true.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'Fallacies: arguments that only look valid',
      blocks: [
        {
          type: 'p',
          text: 'Two invalid forms show up in arguments everywhere, from politics to bug reports. Each one is a real rule with something swapped.',
        },
        {
          type: 'compare',
          left: {
            title: 'Affirming the consequent (invalid)',
            tone: 'bad',
            tex: ['p \\to q', 'q', '\\therefore\\; p'],
            text: 'If the server is overloaded, the game lags. The game lags. So the server is overloaded? Maybe it is your Wi-Fi.',
          },
          right: {
            title: 'Denying the antecedent (invalid)',
            tone: 'bad',
            tex: ['p \\to q', '\\neg p', '\\therefore\\; \\neg q'],
            text: 'If the server is overloaded, the game lags. The server is not overloaded. So the game does not lag? It still can.',
          },
        },
        {
          type: 'p',
          text: 'To prove a form is invalid, you need just **one row** of the truth table in which every premise is true and the conclusion is false. For both fallacies above that row is $p$ = F, $q$ = T: the server is fine ($p$ false), the game lags anyway ($q$ true). Then $p \\to q$ is (vacuously) true, the second premise holds, and the conclusion fails.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Why these feel right',
          text: 'Affirming the consequent treats $p \\to q$ as if it were its **converse** $q \\to p$; denying the antecedent treats it as its **inverse** $\\neg p \\to \\neg q$. Lesson 1 showed neither is equivalent to the original. In proofs, the most common form of this [[dm-fallacy|fallacy]] is "I want to prove $P$; $P$ implies something true; therefore $P$." Showing that a claim leads to a true statement proves nothing.',
        },
        {
          type: 'code',
          title: 'validity.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <functional>
#include <vector>

using Prop = std::function<bool(bool, bool)>;

// Valid iff no assignment makes every premise true and the conclusion false.
void check(const char* name, const std::vector<Prop>& premises, const Prop& conclusion) {
    for (int bits = 0; bits < 4; ++bits) {
        bool p = bits & 2, q = bits & 1;
        bool allPremises = true;
        for (const Prop& h : premises) allPremises = allPremises && h(p, q);
        if (allPremises && !conclusion(p, q)) {
            std::printf("%-24s INVALID, counterexample p=%d q=%d\\n", name, p, q);
            return;
        }
    }
    std::printf("%-24s valid\\n", name);
}

bool implies(bool a, bool b) { return !a || b; }

int main() {
    Prop pq = [](bool p, bool q) { return implies(p, q); };      // p -> q
    check("modus ponens",          {pq, [](bool p, bool) { return p; }},  [](bool, bool q) { return q; });
    check("modus tollens",         {pq, [](bool, bool q) { return !q; }}, [](bool p, bool) { return !p; });
    check("affirming consequent",  {pq, [](bool, bool q) { return q; }},  [](bool p, bool) { return p; });
    check("denying antecedent",    {pq, [](bool p, bool) { return !p; }}, [](bool, bool q) { return !q; });
}`,
          output: `modus ponens             valid
modus tollens            valid
affirming consequent     INVALID, counterexample p=0 q=1
denying antecedent       INVALID, counterexample p=0 q=1`,
          annotations: [
            { lines: '9-10', text: 'Loop over the $4$ assignments of $(p, q)$ using the two low bits of `bits`.' },
            { lines: '11-12', text: 'A row is *critical* when every premise is true.' },
            { lines: '13-16', text: 'A critical row with a false conclusion is a counterexample: the form is invalid.' },
            { lines: '25-28', text: 'Premises are passed as a list of lambdas; the conclusion is the last argument.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'numeric',
      prompt: 'For the resolution argument $p \\lor q,\\; \\neg p \\lor r \\;\\therefore\\; q \\lor r$, how many of the $8$ rows of the truth table are **critical rows** (both premises true)?',
      label: 'critical rows $=$',
      answer: '4',
      hint: 'Split on $p$. If $p$ = T, which variable is forced? If $p$ = F?',
      explanation: 'If $p$ = T, the premise $\\neg p \\lor r$ forces $r$ = T and $q$ is free: rows TTT and TFT. If $p$ = F, the premise $p \\lor q$ forces $q$ = T and $r$ is free: rows FTT and FTF. That gives $4$ critical rows, and $q \\lor r$ is true in all four, which confirms that resolution is valid.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Building a formal argument step by step',
      blocks: [
        {
          type: 'p',
          text: 'A **formal proof** of a conclusion from premises is a numbered list of statements. Each line is either a premise or follows from earlier lines by a named rule. Here is a classic puzzle in game form.',
        },
        {
          type: 'list',
          items: [
            'The boss\'s shield is not up, and its core is glowing. ($\\neg s \\land c$)',
            'You use the sniper rifle only if the shield is up. ($u \\to s$)',
            'If you do not use the sniper rifle, you throw a grenade. ($\\neg u \\to g$)',
            'If you throw a grenade, you win the fight. ($g \\to w$)',
            '**Conclusion:** you win the fight. ($w$)',
          ],
        },
        {
          type: 'derivation',
          title: 'Formal proof of $w$',
          steps: [
            { tex: '1.\\;\\; \\neg s \\land c', why: 'Premise.' },
            { tex: '2.\\;\\; \\neg s', why: 'Simplification from line 1.' },
            { tex: '3.\\;\\; u \\to s', why: 'Premise.' },
            { tex: '4.\\;\\; \\neg u', why: 'Modus tollens from lines 2 and 3: the conclusion $s$ of line 3 is false, so its hypothesis $u$ is false.' },
            { tex: '5.\\;\\; \\neg u \\to g', why: 'Premise.' },
            { tex: '6.\\;\\; g', why: 'Modus ponens from lines 4 and 5.' },
            { tex: '7.\\;\\; g \\to w', why: 'Premise.' },
            { tex: '8.\\;\\; w', why: 'Modus ponens from lines 6 and 7.' },
          ],
          result: 'Every line is justified, so $w$ follows. Note that the premise "the core is glowing" was never needed: premises may be unused.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg"><line x1="68.0" y1="64.0" x2="68.0" y2="144.0" stroke="currentColor" stroke-width="1.6"/><path d="M68.0,144.0 L64.2,135.9 L71.8,135.9 Z" fill="currentColor"/><line x1="103.0" y1="160.0" x2="157.0" y2="160.0" stroke="currentColor" stroke-width="1.6"/><path d="M157.0,160.0 L148.9,163.8 L148.9,156.2 Z" fill="currentColor"/><line x1="192.0" y1="64.0" x2="192.0" y2="144.0" stroke="currentColor" stroke-width="1.6"/><path d="M192.0,144.0 L188.2,135.9 L195.8,135.9 Z" fill="currentColor"/><line x1="227.0" y1="160.0" x2="281.0" y2="160.0" stroke="currentColor" stroke-width="1.6"/><path d="M281.0,160.0 L272.9,163.8 L272.9,156.2 Z" fill="currentColor"/><line x1="316.0" y1="64.0" x2="316.0" y2="144.0" stroke="currentColor" stroke-width="1.6"/><path d="M316.0,144.0 L312.2,135.9 L319.8,135.9 Z" fill="currentColor"/><line x1="351.0" y1="160.0" x2="405.0" y2="160.0" stroke="currentColor" stroke-width="1.6"/><path d="M405.0,160.0 L396.9,163.8 L396.9,156.2 Z" fill="currentColor"/><line x1="440.0" y1="64.0" x2="440.0" y2="144.0" stroke="currentColor" stroke-width="1.6"/><path d="M440.0,144.0 L436.2,135.9 L443.8,135.9 Z" fill="currentColor"/><rect x="20" y="32" width="96" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-gray"/><text x="68" y="53" text-anchor="middle" font-size="14" class="t-gray">¬s ∧ c</text><rect x="144" y="32" width="96" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-gray"/><text x="192" y="53" text-anchor="middle" font-size="14" class="t-gray">u → s</text><rect x="268" y="32" width="96" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-gray"/><text x="316" y="53" text-anchor="middle" font-size="14" class="t-gray">¬u → g</text><rect x="392" y="32" width="96" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-gray"/><text x="440" y="53" text-anchor="middle" font-size="14" class="t-gray">g → w</text><rect x="33" y="144" width="70" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="68" y="165" text-anchor="middle" font-size="14" class="t-blue">¬s</text><rect x="157" y="144" width="70" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="192" y="165" text-anchor="middle" font-size="14" class="t-blue">¬u</text><rect x="281" y="144" width="70" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="316" y="165" text-anchor="middle" font-size="14" class="t-blue">g</text><rect x="405" y="144" width="70" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="440" y="165" text-anchor="middle" font-size="15" class="t-green">w</text><text x="96.0" y="108.5" text-anchor="middle" font-size="13">simp.</text><text x="130.0" y="150.5" text-anchor="middle" font-size="13">MT</text><text x="254.0" y="150.5" text-anchor="middle" font-size="13">MP</text><text x="378.0" y="150.5" text-anchor="middle" font-size="13">MP</text><text x="10" y="18" text-anchor="start" font-size="11" class="t-gray">premises (given)</text><text x="10" y="205" text-anchor="start" font-size="11" class="t-gray">derived, one rule per arrow</text></svg>',
          alt: 'Diagram: four premise boxes on top. Arrows lead down: from not s and c by simplification to not s; from not s and u implies s by modus tollens to not u; from not u and not u implies g by modus ponens to g; from g and g implies w by modus ponens to w.',
          caption: 'The same proof as a flow of facts. Each derived fact uses one rule and earlier facts. Working backward from $w$ ("what would give me $w$?") is often the best way to *find* such a chain.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How to find the chain',
          text: 'Work from both ends. Forward: what can I conclude immediately from the premises (split every $\\land$ with simplification)? Backward: which premise has the goal as its conclusion, and what would I need to fire it? Here $w$ needs $g$, $g$ needs $\\neg u$, and $\\neg u$ comes from $\\neg s$ by modus tollens.',
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'order',
      prompt: 'Premises: $\\neg q$, $\\;p \\to q$, $\\;p \\lor r$, $\\;(r \\lor s) \\to t$. Put the lines of the proof of $t$ in order.',
      lines: [
        '$\\neg q$ (premise)',
        '$\\neg p$ (modus tollens with $p \\to q$)',
        '$r$ (disjunctive syllogism with $p \\lor r$)',
        '$r \\lor s$ (addition)',
        '$t$ (modus ponens with $(r \\lor s) \\to t$)',
      ],
      distractors: ['$q$ (modus ponens with $p \\to q$)'],
      explanation: 'Each line uses the one before it. $\\neg q$ with $p \\to q$ gives $\\neg p$ (modus tollens). $\\neg p$ with $p \\lor r$ gives $r$ (disjunctive syllogism). Addition weakens $r$ to $r \\lor s$, which is exactly the hypothesis of the last premise, so modus ponens gives $t$. The distractor would need $p$ to be true, but we only know $\\neg p$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Premises: $p \\to q$, $\\;q \\to r$, $\\;r \\to s$, $\\;\\neg s$. How many of the four variables $p, q, r, s$ can you prove **false** from these premises?',
      label: 'count $=$',
      answer: '4',
      hint: 'Start from $\\neg s$ and apply modus tollens repeatedly.',
      explanation: '$\\neg s$ is a premise. Modus tollens with $r \\to s$ gives $\\neg r$; with $q \\to r$ it gives $\\neg q$; with $p \\to q$ it gives $\\neg p$. All $4$ variables are proved false. (Check: the only assignment satisfying all four premises is $p = q = r = s =$ F.) Falsity travels backward along a chain of implications, just as truth travels forward.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'Resolution: the rule computers use',
      blocks: [
        {
          type: 'theorem',
          name: 'Resolution',
          tex: '\\frac{p \\lor q \\qquad \\neg p \\lor r}{\\therefore\\; q \\lor r}',
          text: 'Two clauses that contain a variable and its negation combine into one clause with that variable removed.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why resolution is valid',
          text: 'Consider the two cases for $p$. If $p$ is true, then $\\neg p$ is false, so the second premise forces $r$; hence $q \\lor r$. If $p$ is false, the first premise forces $q$; hence $q \\lor r$. Either way $q \\lor r$ holds. (Proof by cases is a technique you will meet properly in Unit 2.)',
        },
        {
          type: 'p',
          text: 'Resolution is special because it is the **only** rule an automated prover needs. Put every premise into *clause form* (an "or" of variables and negated variables), add the **negation** of the goal, and resolve pairs of clauses. If you ever derive the empty clause (a contradiction), the goal is proved.',
        },
        {
          type: 'derivation',
          title: 'Prove $r$ from $p \\lor q$, $\\;\\neg p \\lor r$, $\\;\\neg q \\lor r$ by resolution',
          steps: [
            { tex: '1.\\;\\; p \\lor q \\qquad 2.\\;\\; \\neg p \\lor r \\qquad 3.\\;\\; \\neg q \\lor r', why: 'The premises, already in clause form.' },
            { tex: '4.\\;\\; \\neg r', why: 'Add the negation of the goal. We aim to show it leads to a contradiction.' },
            { tex: '5.\\;\\; q \\lor r', why: 'Resolve 1 and 2 on $p$.' },
            { tex: '6.\\;\\; r', why: 'Resolve 5 and 3 on $q$: $(q \\lor r)$ and $(\\neg q \\lor r)$ give $r \\lor r$, which is $r$.' },
            { tex: '7.\\;\\; \\square \\; (\\text{empty clause})', why: 'Resolve 6 and 4 on $r$: nothing is left. The premises plus $\\neg r$ are contradictory.' },
          ],
          result: 'Assuming $\\neg r$ led to a contradiction, so $r$ follows from the premises. SAT solvers and logic programming languages like Prolog are built on this procedure.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'fill',
      prompt: 'Apply resolution.',
      template: 'Resolving $\\neg a \\lor b$ with $a \\lor c$ on the variable $a$ gives the clause ___. Resolving $b$ with $\\neg b$ gives ___.',
      blanks: [{ answers: ['$b \\lor c$'] }, { answers: ['the empty clause'] }],
      wordBank: ['$b \\lor c$', 'the empty clause', '$a \\lor b \\lor c$', '$b \\land c$', '$\\neg b$'],
      explanation: 'Resolution deletes the clashing pair $a$, $\\neg a$ and joins what is left with $\\lor$: $b \\lor c$ (not $b \\land c$: we only know at least one of them holds). Resolving the one-variable clauses $b$ and $\\neg b$ deletes everything, leaving the empty clause, which signals a contradiction.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'Rules for quantified statements',
      blocks: [
        {
          type: 'p',
          text: '"All humans are mortal; Socrates is human; therefore Socrates is mortal" is obviously valid, but propositional logic cannot see why. We need four rules that move between quantified statements and statements about particular elements.',
        },
        {
          type: 'table',
          headers: ['Rule', 'From', 'Conclude', 'Condition'],
          rows: [
            ['Universal instantiation (UI)', '$\\forall x\\, P(x)$', '$P(c)$', 'for any element $c$ of the domain'],
            ['Universal generalization (UG)', '$P(c)$', '$\\forall x\\, P(x)$', '$c$ must be **arbitrary**: nothing assumed about it'],
            ['Existential instantiation (EI)', '$\\exists x\\, P(x)$', '$P(c)$', '$c$ is a **new** name for some element that works'],
            ['Existential generalization (EG)', '$P(c)$', '$\\exists x\\, P(x)$', 'for a specific element $c$'],
          ],
        },
        {
          type: 'derivation',
          title: '"Every enemy in the bunker is armed. Some enemy in the bunker is a sniper. So some sniper is armed."',
          steps: [
            { tex: '1.\\;\\; \\exists x\\, (B(x) \\land S(x))', why: 'Premise: some enemy is in the bunker and is a sniper.' },
            { tex: '2.\\;\\; B(c) \\land S(c)', why: 'Existential instantiation: call that enemy $c$, a fresh name.' },
            { tex: '3.\\;\\; \\forall x\\, (B(x) \\to A(x))', why: 'Premise: everyone in the bunker is armed.' },
            { tex: '4.\\;\\; B(c) \\to A(c)', why: 'Universal instantiation with the element $c$.' },
            { tex: '5.\\;\\; B(c), \\quad S(c)', why: 'Simplification from line 2 (twice).' },
            { tex: '6.\\;\\; A(c)', why: 'Modus ponens from lines 4 and 5. The combination UI + MP is called *universal modus ponens*.' },
            { tex: '7.\\;\\; S(c) \\land A(c)', why: 'Conjunction of lines 5 and 6.' },
            { tex: '8.\\;\\; \\exists x\\, (S(x) \\land A(x))', why: 'Existential generalization: $c$ is a witness.' },
          ],
          result: 'Valid. Note the order: we instantiated the existential **first**, so that $c$ was a fresh name, then applied the universal to that same $c$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why universal generalization is how every "for all" proof works',
          text: 'To prove "for every integer $n$, …", a proof says "let $n$ be an arbitrary integer" and reasons using **only** properties every integer has. Because nothing special about $n$ was used, the same argument works for each integer, which is exactly what UG records. If you secretly used $n = 4$, the argument is only about $4$. Unit 2 opens every direct proof this way.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'With existential instantiation the name must be **new**. From "some enemy is a sniper" and "some enemy is a medic" you may not call both of them $c$ and conclude that some enemy is a sniper and a medic.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Premises: "Every boss drops a legendary item." "Grimjaw does not drop a legendary item." What follows?',
      options: [
        { text: 'Grimjaw is a boss.', why: 'Nothing supports this; in fact the premises force the opposite.' },
        { text: 'Nothing follows about Grimjaw.', why: 'Universal instantiation turns the first premise into a statement about Grimjaw, and then modus tollens applies.' },
        { text: 'Grimjaw is not a boss.', correct: true, why: 'UI gives Boss(Grimjaw) $\\to$ Drops(Grimjaw); with $\\neg$Drops(Grimjaw), modus tollens gives $\\neg$Boss(Grimjaw).' },
        { text: 'No enemy drops a legendary item.', why: 'The premises are consistent with plenty of enemies dropping legendaries. One non-dropping enemy says nothing about the rest.' },
      ],
      explanation: 'Instantiate the universal at the particular element Grimjaw: $B(g) \\to L(g)$. The second premise is $\\neg L(g)$. Modus tollens yields $\\neg B(g)$. This pattern, *universal modus tollens*, is how a single counterexample refutes a general claim.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: 'Premises: "If the patch fixed the bug, the tests pass" ($f \\to t$), "the tests pass" ($t$), and "if the bug is fixed, we ship" ($f \\to s$). A teammate "proves" that we ship. Tap the first invalid step.',
      lines: [
        '$f \\to t$ (premise)',
        '$t$ (premise)',
        '$f$ (modus ponens from lines 1 and 2)',
        '$f \\to s$ (premise)',
        '$s$ (modus ponens from lines 3 and 4)',
      ],
      errorLines: [3],
      explanation: 'Line 3 affirms the consequent: from $f \\to t$ and $t$ it concludes $f$. Modus ponens needs the **hypothesis** $f$, not the conclusion $t$. The row $f$ = F, $t$ = T makes both premises true and $f$ false: the tests might pass because they never exercised the bug. Line 5 is a correct use of modus ponens, but it rests on the invalid line 3, so "we ship" is not proved.',
    },
  ],
  takeaways: [
    'An argument is valid when (premises) $\\to$ conclusion is a tautology; a valid argument with true premises (a sound one) has a true conclusion.',
    'Core rules: modus ponens, modus tollens, hypothetical and disjunctive syllogism, addition, simplification, conjunction and resolution.',
    'Affirming the consequent ($q$, $p \\to q$ ∴ $p$) and denying the antecedent ($\\neg p$, $p \\to q$ ∴ $\\neg q$) are invalid; the row $p$ = F, $q$ = T refutes both.',
    'A formal proof is a numbered list in which each line is a premise or follows from earlier lines by a named rule.',
    'Resolution plus "assume the negation of the goal" is a complete method used by automated provers and SAT solvers.',
    'Quantifier rules: instantiate $\\forall$ at any element, instantiate $\\exists$ with a fresh name, generalize to $\\forall$ only from an arbitrary element.',
  ],
  reading: [
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction (Section 3.2, Proofs)',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'Deductions, valid argument forms and how they turn into proofs, with exercises.',
    },
    {
      title: 'Wikipedia — Rule of inference',
      url: 'https://en.wikipedia.org/wiki/Rule_of_inference',
      source: 'wikipedia',
      note: 'A catalogue of the standard rules and how they are written in formal logic.',
    },
    {
      title: 'Wikipedia — Affirming the consequent',
      url: 'https://en.wikipedia.org/wiki/Affirming_the_consequent',
      source: 'wikipedia',
      note: 'More real-world examples of the most common logical fallacy.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The first readings connect inference rules to how mathematicians actually write proofs.',
    },
  ],
};
