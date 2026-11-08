import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-computability',
  title: 'Grammars, Turing Machines and Computability',
  summary: 'Grammars and parse trees, the Chomsky hierarchy, Turing machines and the Church–Turing thesis, the halting problem, P versus NP, and a look back over the whole course.',
  minutes: 22,
  objectives: [
    'Derive strings from a phrase-structure grammar and draw parse trees for a context-free grammar of arithmetic expressions',
    'Place regular, context-free, context-sensitive and unrestricted languages in the Chomsky hierarchy with their matching machines',
    'Run a small Turing machine from its transition table',
    'State the Church–Turing thesis and explain why it is a thesis, not a theorem',
    'Prove that the halting problem is undecidable by diagonalization',
    'Explain P, NP and NP-completeness and what they mean for problems you meet in practice',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Grammars: generating a language',
      blocks: [
        {
          type: 'p',
          text: 'In the last lesson you saw that no finite automaton accepts $\\{0^n1^n : n \\ge 0\\}$, because it would have to count without bound. A **grammar** describes languages from the other direction: instead of a machine that *checks* strings, it gives rules that *generate* them, the way English grammar generates sentences from "sentence → subject verb object".',
        },
        {
          type: 'definition',
          term: 'Phrase-structure grammar',
          text: 'A [[dm-grammar|phrase-structure grammar]] $G = (V, T, S, P)$ has a vocabulary $V$, a subset $T \\subseteq V$ of **terminal** symbols (the letters of the final strings), a **start symbol** $S \\in V - T$, and a finite set $P$ of **productions** $w_1 \\to w_2$. The symbols in $V - T$ are **nonterminals**: placeholders that must eventually be rewritten.',
        },
        {
          type: 'p',
          text: 'A **derivation** starts from $S$ and repeatedly replaces an occurrence of the left side of a production by its right side; one such step is written $\\Rightarrow$. The **language** $L(G)$ is the set of strings of terminals that can be derived from $S$. We write $A \\to u \\mid v$ for the two productions $A \\to u$ and $A \\to v$, and $\\varepsilon$ for the empty string.',
        },
        {
          type: 'derivation',
          title: 'The grammar $S \\to 0S1 \\mid \\varepsilon$ derives $0011$',
          steps: [
            { tex: 'S \\Rightarrow 0S1', why: 'Apply $S \\to 0S1$: wrap one $0$ and one $1$ around the nonterminal.' },
            { tex: '\\Rightarrow 00S11', why: 'Apply $S \\to 0S1$ again to the $S$ in the middle.' },
            { tex: '\\Rightarrow 0011', why: 'Apply $S \\to \\varepsilon$: erase $S$. Only terminals remain, so the derivation is finished.' },
          ],
          result: 'After applying $S \\to 0S1$ $k$ times the string is $0^kS1^k$ (an easy [[dm-mathematical-induction|induction]] on $k$), so $L(G) = \\{0^n1^n : n \\ge 0\\}$: a grammar generates the language no finite automaton accepts.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why a grammar can do what a DFA cannot',
          text: 'The production $S \\to 0S1$ adds a $0$ and its matching $1$ **in the same step**, on either side of $S$. The pairing is built into the structure, so nothing needs to be counted. This "matching" power is exactly what nested structures need: parentheses, `{ }` blocks, HTML tags, and expressions inside expressions.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Using the grammar $S \\to 0S1 \\mid \\varepsilon$, how many derivation steps ($\\Rightarrow$) does it take to derive $000111$ from $S$?',
      answer: '4',
      hint: 'Each use of $S \\to 0S1$ adds one $0$ and one $1$; then you still have to get rid of $S$.',
      explanation: '$S \\Rightarrow 0S1 \\Rightarrow 00S11 \\Rightarrow 000S111 \\Rightarrow 000111$. Three applications of $S \\to 0S1$ create the three matched pairs, and one application of $S \\to \\varepsilon$ removes the nonterminal: $4$ steps. In general $0^n1^n$ takes $n + 1$ steps.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Context-free grammars and parse trees',
      blocks: [
        {
          type: 'p',
          text: 'In $S \\to 0S1$ the left side is a single nonterminal, so $S$ may be rewritten no matter what surrounds it. Grammars whose productions all have this form $A \\to w$ are called [[dm-context-free-grammar|context-free]]. They are how programming languages specify their syntax (the C++ standard\'s grammar is written this way). Here is the classic grammar for arithmetic expressions, with nonterminals $E$ (expression), $T$ (term), $F$ (factor) and the terminal $\\mathbf{id}$ standing for any number or variable name:',
        },
        {
          type: 'math',
          tex: 'E \\to E + T \\mid T \\qquad T \\to T * F \\mid F \\qquad F \\to (E) \\mid \\mathbf{id}',
        },
        {
          type: 'derivation',
          title: 'A leftmost derivation of $\\mathbf{id} + \\mathbf{id} * \\mathbf{id}$',
          steps: [
            { tex: 'E \\Rightarrow E + T', why: 'The whole expression is a sum, so start with $E \\to E + T$.' },
            { tex: '\\Rightarrow T + T \\Rightarrow F + T \\Rightarrow \\mathbf{id} + T', why: 'Rewrite the leftmost nonterminal each time: $E \\to T$, $T \\to F$, $F \\to \\mathbf{id}$.' },
            { tex: '\\Rightarrow \\mathbf{id} + T * F', why: 'The right operand of $+$ is a product: $T \\to T * F$.' },
            { tex: '\\Rightarrow \\mathbf{id} + F * F \\Rightarrow \\mathbf{id} + \\mathbf{id} * F \\Rightarrow \\mathbf{id} + \\mathbf{id} * \\mathbf{id}', why: '$T \\to F$, $F \\to \\mathbf{id}$, $F \\to \\mathbf{id}$. Only terminals remain.' },
          ],
          result: 'The derivation used $8$ steps. Its structure is clearer as a tree.',
        },
        {
          type: 'p',
          text: 'A [[dm-parse-tree]] records a derivation as a rooted tree: the root is the start symbol, each internal node is a nonterminal whose children are the right side of the production applied to it, and the leaves, read left to right, spell the string.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 430 330" xmlns="http://www.w3.org/2000/svg"><line x1="185.4" y1="38.6" x2="104.6" y2="86.4" stroke="currentColor" stroke-width="1.6"/><line x1="200.0" y1="47.0" x2="200.0" y2="78.0" stroke="currentColor" stroke-width="1.6"/><line x1="214.6" y1="38.6" x2="295.4" y2="86.4" stroke="currentColor" stroke-width="1.6"/><line x1="90.0" y1="112.0" x2="90.0" y2="143.0" stroke="currentColor" stroke-width="1.6"/><line x1="90.0" y1="177.0" x2="90.0" y2="208.0" stroke="currentColor" stroke-width="1.6"/><line x1="90.0" y1="242.0" x2="90.0" y2="273.0" stroke="currentColor" stroke-width="1.6"/><line x1="297.5" y1="106.6" x2="252.5" y2="148.4" stroke="currentColor" stroke-width="1.6"/><line x1="310.0" y1="112.0" x2="310.0" y2="143.0" stroke="currentColor" stroke-width="1.6"/><line x1="323.2" y1="105.7" x2="376.8" y2="149.3" stroke="currentColor" stroke-width="1.6"/><line x1="240.0" y1="177.0" x2="240.0" y2="208.0" stroke="currentColor" stroke-width="1.6"/><line x1="240.0" y1="242.0" x2="240.0" y2="273.0" stroke="currentColor" stroke-width="1.6"/><line x1="390.0" y1="177.0" x2="390.0" y2="208.0" stroke="currentColor" stroke-width="1.6"/><circle cx="200" cy="30" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="200" y="35" text-anchor="middle" font-size="14">E</text><circle cx="90" cy="95" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90" y="100" text-anchor="middle" font-size="14">E</text><circle cx="200" cy="95" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="200" y="100" text-anchor="middle" font-size="14" class="t-blue">+</text><circle cx="310" cy="95" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="310" y="100" text-anchor="middle" font-size="14">T</text><circle cx="90" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90" y="165" text-anchor="middle" font-size="14">T</text><circle cx="90" cy="225" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="90" y="230" text-anchor="middle" font-size="14">F</text><circle cx="90" cy="290" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="90" y="295" text-anchor="middle" font-size="13" class="t-blue">id</text><circle cx="240" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="240" y="165" text-anchor="middle" font-size="14">T</text><circle cx="310" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="310" y="165" text-anchor="middle" font-size="14" class="t-blue">*</text><circle cx="390" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="390" y="165" text-anchor="middle" font-size="14">F</text><circle cx="240" cy="225" r="17" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="240" y="230" text-anchor="middle" font-size="14">F</text><circle cx="240" cy="290" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="240" y="295" text-anchor="middle" font-size="13" class="t-blue">id</text><circle cx="390" cy="225" r="17" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="390" y="230" text-anchor="middle" font-size="13" class="t-blue">id</text></svg>`,
          alt: 'Parse tree. Root E has children E, +, T. The left E goes down E, T, F, id. The right T has children T, *, F; that T goes down to F then id, and that F goes to id.',
          caption: 'The parse tree of $\\mathbf{id} + \\mathbf{id} * \\mathbf{id}$. The $*$ sits **deeper** than the $+$, so it is evaluated first: the grammar encodes "multiplication before addition".',
          maxWidth: 420,
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why three layers instead of one nonterminal?',
          text: 'The shorter grammar $E \\to E + E \\mid E * E \\mid (E) \\mid \\mathbf{id}$ generates the same strings, but it is **ambiguous**: $\\mathbf{id} + \\mathbf{id} * \\mathbf{id}$ has two parse trees, one meaning $\\mathbf{id} + (\\mathbf{id} * \\mathbf{id})$ and one meaning $(\\mathbf{id} + \\mathbf{id}) * \\mathbf{id}$. For $2 + 3 * 4$ they give $14$ and $20$. A compiler cannot guess, so real grammars are layered: an $E$ is a sum of $T$s, a $T$ is a product of $F$s, and only parentheses can put a sum back inside a product.',
        },
        {
          type: 'p',
          text: 'A **recursive-descent parser** turns the grammar directly into code: one function per nonterminal, each calling the functions for the symbols on its right-hand side. The calls made while parsing trace out the parse tree. (The rule $E \\to E + T$ is rewritten as the loop "a $T$, then any number of $+\\,T$", which generates the same strings without infinite recursion.) This is how calculators, scripting languages and many game console commands read their input.',
        },
        {
          type: 'code',
          title: 'parser.cpp',
          runnable: true,
          code: `#include <cctype>
#include <cstdio>
#include <string>

// Recursive-descent evaluator for the grammar
//   E -> T { + T }      T -> F { * F }      F -> ( E ) | number
// One function per nonterminal; the call tree is the parse tree.
struct Parser {
    std::string s;
    size_t pos = 0;

    char peek() const { return pos < s.size() ? s[pos] : '\\0'; }

    long expr() {                      // E
        long value = term();
        while (peek() == '+') { ++pos; value += term(); }
        return value;
    }
    long term() {                      // T
        long value = factor();
        while (peek() == '*') { ++pos; value *= factor(); }
        return value;
    }
    long factor() {                    // F
        if (peek() == '(') {
            ++pos;                     // consume '('
            long value = expr();
            ++pos;                     // consume ')'
            return value;
        }
        long value = 0;
        while (std::isdigit(static_cast<unsigned char>(peek()))) value = 10 * value + (s[pos++] - '0');
        return value;
    }
};

int main() {
    for (const char* text : {"2+3*4", "(2+3)*4", "2*3+4*5", "((7))"}) {
        Parser p{text};
        std::printf("%-8s = %ld\\n", text, p.expr());
    }
}`,
          output: `2+3*4    = 14
(2+3)*4  = 20
2*3+4*5  = 26
((7))    = 7`,
          annotations: [
            { lines: '14-18', text: '$E$: a $T$, then repeatedly `+` and another $T$. Addition happens here, at the top of the tree, so it is done **last**.' },
            { lines: '19-23', text: '$T$: products of factors, finished before `expr` adds them up.' },
            { lines: '24-34', text: '$F$: a parenthesized expression (recursion back to the top) or a number.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'mcq',
      prompt: 'In the grammar $E \\to E + T \\mid T$, $T \\to T * F \\mid F$, $F \\to (E) \\mid \\mathbf{id}$, which production is applied at the **root** of the parse tree of $\\mathbf{id} * \\mathbf{id} + \\mathbf{id}$?',
      options: [
        { text: '$E \\to T$, followed by $T \\to T * F$', why: 'Then the whole string would be a product $T * F$ whose last factor $F$ derives $\\mathbf{id} + \\mathbf{id}$. But an $F$ can only contain $+$ inside parentheses, and there are none.' },
        { text: '$E \\to E + T$', correct: true, why: 'Since the string has a $+$ outside all parentheses, it must be a sum: $E \\Rightarrow E + T$ with $E \\Rightarrow^* \\mathbf{id} * \\mathbf{id}$ and $T \\Rightarrow^* \\mathbf{id}$.' },
        { text: '$T \\to T * F$', why: 'The root of every parse tree is the start symbol $E$, so the root production must have $E$ on its left side.' },
        { text: '$F \\to (E)$', why: 'The root is $E$, not $F$, and the string contains no parentheses at all.' },
      ],
      explanation: 'The operator applied last sits at the root. Because $T$s and $F$s can only produce a $+$ inside parentheses, the unparenthesized $+$ must come from $E \\to E + T$ at the top. Its left child $E$ derives $\\mathbf{id} * \\mathbf{id}$ (via $E \\to T \\to T * F$), so the product is computed first, as precedence demands: $2 * 3 + 4 = 10$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'concept',
      title: 'The Chomsky hierarchy',
      blocks: [
        {
          type: 'p',
          text: 'In 1956 the linguist Noam Chomsky classified grammars by the shape of their productions. Each restriction gives a smaller class of languages, and each class matches a kind of machine. This is the [[dm-chomsky-hierarchy]].',
        },
        {
          type: 'table',
          headers: ['Type', 'Productions allowed', 'Languages', 'Machine'],
          rows: [
            ['$0$', 'any $w_1 \\to w_2$ ($w_1$ contains a nonterminal)', 'unrestricted (recursively enumerable)', 'Turing machine'],
            ['$1$', '$w_1 \\to w_2$ with $|w_1| \\le |w_2|$', 'context-sensitive', 'linear-bounded automaton'],
            ['$2$', '$A \\to w$ ($A$ a single nonterminal)', 'context-free', 'pushdown automaton (FA + a stack)'],
            ['$3$', '$A \\to aB$ or $A \\to a$ ($a$ terminal)', 'regular', 'finite automaton'],
          ],
          caption: 'Types 1 and 3 may also allow $S \\to \\varepsilon$ so the empty string can be generated.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 500 290" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="480" height="270" rx="16" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.8" class="s-purple f-purple"/><text x="24" y="34" font-size="14" text-anchor="start" class="t-purple">Type 0: unrestricted</text><text x="24" y="52" font-size="12" text-anchor="start" class="t-gray">Turing machines</text><text x="476" y="40" font-size="12" text-anchor="end">e.g. programs that halt</text><rect x="28" y="62" width="444" height="208" rx="16" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.8" class="s-orange f-orange"/><text x="42" y="86" font-size="14" text-anchor="start" class="t-orange">Type 1: context-sensitive</text><text x="42" y="104" font-size="12" text-anchor="start" class="t-gray">linear-bounded automata</text><text x="458" y="92" font-size="12" text-anchor="end">e.g. 0ⁿ1ⁿ2ⁿ</text><rect x="46" y="114" width="408" height="146" rx="16" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.8" class="s-blue f-blue"/><text x="60" y="138" font-size="14" text-anchor="start" class="t-blue">Type 2: context-free</text><text x="60" y="156" font-size="12" text-anchor="start" class="t-gray">pushdown automata</text><text x="440" y="144" font-size="12" text-anchor="end">e.g. 0ⁿ1ⁿ</text><rect x="64" y="166" width="372" height="84" rx="16" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.8" class="s-green f-green"/><text x="78" y="190" font-size="14" text-anchor="start" class="t-green">Type 3: regular</text><text x="78" y="208" font-size="12" text-anchor="start" class="t-gray">finite automata</text><text x="422" y="196" font-size="12" text-anchor="end">e.g. (0 ∪ 1)*01</text></svg>`,
          alt: 'Four nested rounded rectangles. Outermost: Type 0 unrestricted, Turing machines, e.g. programs that halt. Inside: Type 1 context-sensitive, linear-bounded automata, e.g. 0^n 1^n 2^n. Inside: Type 2 context-free, pushdown automata, e.g. 0^n 1^n. Innermost: Type 3 regular, finite automata, e.g. (0 ∪ 1)*01.',
          caption: 'Each class strictly contains the next. Each example language belongs to its own band but not to the one inside it.',
          maxWidth: 500,
        },
        {
          type: 'p',
          text: 'A **pushdown automaton** is a finite automaton with an unbounded stack: to check $0^n1^n$ it pushes a symbol for each $0$ and pops one for each $1$. That one stack is exactly the extra power context-free grammars need, and it is why compilers parse with a stack. But a single stack cannot match *three* counts, so $\\{0^n1^n2^n\\}$ is not context-free. At the top of the hierarchy, type 0 grammars generate exactly the languages that Turing machines (next card) can recognize.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'The hierarchy inside a compiler',
          text: 'A compiler front end uses two levels of the hierarchy. The **lexer** splits source text into tokens (identifiers, numbers, operators) with regular expressions compiled to a DFA (type 3). The **parser** then checks the token sequence against a context-free grammar (type 2) and builds the syntax tree. Rules such as "a variable must be declared before it is used" are not context-free at all; they are checked afterwards, in ordinary code.',
        },
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'fill',
      prompt: 'Match each class of languages to its machine.',
      template: 'Regular languages are exactly those accepted by ___ automata, context-free languages by ___ automata, and type $0$ languages are those recognized by ___ machines.',
      blanks: [{ answers: ['finite'] }, { answers: ['pushdown'] }, { answers: ['Turing'] }],
      wordBank: ['finite', 'pushdown', 'Turing', 'linear-bounded', 'Mealy'],
      explanation: 'Type 3 (regular) ↔ finite automata, type 2 (context-free) ↔ pushdown automata (finite control plus a stack), type 1 (context-sensitive) ↔ linear-bounded automata, type 0 ↔ Turing machines. Mealy machines are finite-state machines with output: they translate inputs to outputs rather than accept languages.',
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'concept',
      title: 'Turing machines',
      blocks: [
        {
          type: 'p',
          text: 'In 1936 Alan Turing asked what a human "computer" (a person doing calculations with pencil and paper) can do in principle, and distilled the answer into a machine. A [[dm-turing-machine]] is a finite-state control plus an **unbounded tape** of cells, with a head that reads one cell at a time. Unlike a finite automaton, it can **write** on the tape and move **both** ways, so the tape is unlimited scratch memory.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="60" width="50" height="46" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="85" y="90" font-size="20" text-anchor="middle" class="t-gray">B</text><rect x="110" y="60" width="50" height="46" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="135" y="90" font-size="20" text-anchor="middle">1</text><rect x="160" y="60" width="50" height="46" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="185" y="90" font-size="20" text-anchor="middle">0</text><rect x="210" y="60" width="50" height="46" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="235" y="90" font-size="20" text-anchor="middle">1</text><rect x="260" y="60" width="50" height="46" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="285" y="90" font-size="20" text-anchor="middle">1</text><rect x="310" y="60" width="50" height="46" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="335" y="90" font-size="20" text-anchor="middle" class="t-gray">B</text><rect x="360" y="60" width="50" height="46" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="385" y="90" font-size="20" text-anchor="middle" class="t-gray">B</text><text x="38" y="90" font-size="20" text-anchor="middle">⋯</text><text x="432" y="90" font-size="20" text-anchor="middle">⋯</text><path d="M135,112 L123,132 L147,132 Z" fill="currentColor" class="f-blue"/><rect x="101" y="136" width="68" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="135" y="157" font-size="13" text-anchor="middle" class="t-blue">state s₀</text><text x="185" y="157" font-size="12" text-anchor="start" class="t-gray">read/write head</text><text x="60" y="44" font-size="12" text-anchor="start" class="t-gray">tape (unbounded in both directions)</text></svg>`,
          alt: 'A tape of cells containing B 1 0 1 1 B B, with dots at both ends. A triangular head points at the first 1, labelled state s0.',
          caption: 'The input $1011$ on the tape, surrounded by blanks $B$. The head starts on the leftmost digit in state $s_0$.',
          maxWidth: 460,
        },
        {
          type: 'definition',
          term: 'Turing machine',
          text: '$T = (S, I, f, s_0)$: a finite set of states $S$, a tape alphabet $I$ containing the blank $B$, a start state $s_0$, and a **partial** function $f : S \\times I \\to S \\times I \\times \\{L, R\\}$. If $f(s, x) = (s\', x\', d)$, then in state $s$ reading $x$ the machine writes $x\'$, moves one cell in direction $d$ and enters $s\'$. When $f(s, x)$ is undefined, the machine **halts**.',
        },
        {
          type: 'p',
          text: 'Here is a machine that adds $1$ to a binary number. State $s_0$ scans right to the end of the number; $s_1$ walks back left, adding the carry; $s_2$ is a halting state with no transitions.',
        },
        {
          type: 'table',
          headers: ['state', 'read $0$', 'read $1$', 'read $B$'],
          rows: [
            ['$s_0$', '$(s_0, 0, R)$', '$(s_0, 1, R)$', '$(s_1, B, L)$'],
            ['$s_1$', '$(s_2, 1, L)$', '$(s_1, 0, L)$', '$(s_2, 1, L)$'],
            ['$s_2$', '—', '—', '—'],
          ],
          caption: 'Each entry is (new state, symbol written, move). In $s_1$, a $1$ plus the carry gives $0$ and the carry continues; a $0$ or a blank absorbs the carry.',
        },
        {
          type: 'derivation',
          title: 'Run the machine on $1011$ (head position underlined)',
          steps: [
            { tex: 's_0: \\; B\\,\\underline{1}\\,0\\,1\\,1\\,B \\;\\leadsto\\; s_0: \\; B\\,1\\,0\\,1\\,1\\,\\underline{B}', why: 'Four moves right in $s_0$, rewriting each digit unchanged.' },
            { tex: 's_1: \\; B\\,1\\,0\\,1\\,\\underline{1}\\,B', why: 'Reading the blank: switch to $s_1$ and step back onto the last digit.' },
            { tex: 's_1: \\; B\\,1\\,0\\,\\underline{1}\\,0\\,B', why: '$f(s_1, 1) = (s_1, 0, L)$: $1 + 1 = 10_2$, write $0$, carry $1$ to the left.' },
            { tex: 's_1: \\; B\\,1\\,\\underline{0}\\,0\\,0\\,B', why: 'The same rule again: another $1$ becomes $0$.' },
            { tex: 's_2: \\; B\\,\\underline{1}\\,1\\,0\\,0\\,B', why: '$f(s_1, 0) = (s_2, 1, L)$: the carry is absorbed. No rule exists for $s_2$, so the machine halts.' },
          ],
          result: 'The tape now holds $1100_2 = 12 = 11 + 1$, after $8$ steps.',
        },
        {
          type: 'code',
          title: 'tm.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <map>
#include <string>
#include <utility>

// A Turing machine that adds 1 to a binary number.
// Transition: (state, symbol read) -> (new state, symbol to write, move).
struct Action { char state; char write; int move; };   // move: +1 = R, -1 = L

const std::map<std::pair<char, char>, Action> delta = {
    {{'0', '0'}, {'0', '0', +1}},   // s0: scan right over the number
    {{'0', '1'}, {'0', '1', +1}},
    {{'0', 'B'}, {'1', 'B', -1}},   //     hit the blank: turn around
    {{'1', '1'}, {'1', '0', -1}},   // s1: 1 + carry = 0, keep carrying left
    {{'1', '0'}, {'2', '1', -1}},   //     0 + carry = 1, done
    {{'1', 'B'}, {'2', '1', -1}},   //     ran off the left end: new leading 1
};                                  // s2: no transitions, so the machine halts

std::string increment(std::string number) {
    std::string tape = "B" + number + "B";
    int head = 1;                   // on the leftmost digit
    char state = '0';
    int steps = 0;
    while (true) {
        auto it = delta.find({state, tape[head]});
        if (it == delta.end()) break;               // no rule: halt
        const Action& a = it->second;
        tape[head] = a.write;
        state = a.state;
        head += a.move;
        if (head < 0) { tape = "B" + tape; head = 0; }               // grow the tape
        if (head == static_cast<int>(tape.size())) tape += "B";
        ++steps;
    }
    std::printf("%6s -> ", number.c_str());
    std::string result;
    for (char c : tape) if (c != 'B') result += c;
    std::printf("%-6s (%d steps)\\n", result.c_str(), steps);
    return result;
}

int main() {
    for (const char* n : {"1011", "10111", "111", "0"}) increment(n);
}`,
          output: `  1011 -> 1100   (8 steps)
 10111 -> 11000  (10 steps)
   111 -> 1000   (8 steps)
     0 -> 1      (3 steps)`,
          annotations: [
            { lines: '10-17', text: 'The transition table as a map from (state, symbol) to an action. Missing keys are where $f$ is undefined.' },
            { lines: '24-34', text: 'The whole machine: look up a rule, write, change state, move. Halting is simply "no rule applies".' },
            { lines: '31-32', text: 'The tape is unbounded: grow the string with blanks whenever the head walks off either end.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'numeric',
      prompt: 'Run the increment machine on the input $10111$. When it halts, what number is on the tape? Give it in decimal.',
      answer: '24',
      hint: '$s_0$ scans right to the blank; then $s_1$ turns trailing $1$s into $0$s until it meets a $0$, which becomes $1$.',
      explanation: '$s_0$ moves right past $10111$ and turns around at the blank. In $s_1$ the three trailing $1$s become $0$s (carrying left), then the $0$ in position two becomes $1$ and the machine halts in $s_2$. The tape reads $11000_2 = 16 + 8 = 24$. Check: $10111_2 = 23$, and $23 + 1 = 24$.',
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'concept',
      title: 'The Church–Turing thesis',
      blocks: [
        {
          type: 'p',
          text: 'Turing machines look primitive, yet nobody has found a computation they can\'t do. A Turing machine can simulate a CPU with RAM (slowly), and a C++ program can simulate a Turing machine, as you just saw. Alonzo Church\'s lambda calculus, recursive functions, register machines and every programming language turn out to compute **exactly the same** functions. That convergence supports the following claim.',
        },
        {
          type: 'theorem',
          name: 'Church–Turing thesis',
          text: 'Every function that can be computed by an effective step-by-step procedure (an algorithm) can be computed by a Turing machine.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is a thesis, not a theorem',
          text: 'A theorem needs precise hypotheses, but "effective procedure" is an informal, everyday idea. The [[dm-church-turing-thesis]] is a bridge between an intuition and a definition, so it can be supported by evidence (every model ever proposed agrees) but not proved. Its practical meaning: to show that **no** algorithm solves a problem, it suffices to show that no Turing machine does.',
        },
        {
          type: 'p',
          text: 'Turing also built a **universal Turing machine** $U$: given the description of any machine $T$ and an input $x$ on its tape, $U$ simulates $T$ on $x$. That is the idea of a stored-program computer, decades before one existed: one fixed piece of hardware runs any program supplied as data. Every emulator you have used, from an N64 emulator to a scripting VM in a game engine, is a universal machine at work.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Accidentally Turing complete',
          text: 'A system that can simulate any Turing machine (given unbounded memory) is called **Turing complete**. All mainstream programming languages are, and so are some surprising things: Conway\'s Game of Life, C++ templates evaluated at compile time, and players have built working CPUs out of Minecraft redstone. Turing completeness is a double-edged sword, as the next card shows: it brings undecidable questions with it.',
        },
      ],
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'True or false: the Church–Turing thesis is a theorem that Turing proved in 1936.',
      answer: false,
      explanation: 'False. It cannot be proved, because "algorithm" or "effective procedure" is not a mathematical definition. Turing did prove theorems in 1936 (including the undecidability of the halting problem), but the thesis is the claim that his precise definition captures the informal idea. The evidence is that every alternative model of computation proposed since computes exactly the same functions.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'The halting problem',
      blocks: [
        {
          type: 'p',
          text: 'A **decision problem** asks a yes/no question about each input. It is [[dm-decidable]] if some algorithm always halts with the correct answer. Here is the most famous question a programmer could wish to automate: given a program $P$ and an input $I$, will $P$ eventually **halt** on $I$, or run forever? This is the [[dm-halting-problem]].',
        },
        {
          type: 'theorem',
          name: 'Turing, 1936',
          text: 'The halting problem is **undecidable**: there is no program $H(P, I)$ that, for every program $P$ and input $I$, halts and correctly answers whether $P$ halts on $I$.',
        },
        {
          type: 'derivation',
          title: 'Proof by contradiction',
          steps: [
            { tex: '\\text{Suppose } H(P, I) \\text{ always halts and is always correct.}', why: 'Assume the opposite of what we want to prove (proof by contradiction).' },
            { tex: 'K(P): \\text{ if } H(P, P) = \\text{"halts" then loop forever, else halt}', why: 'Use $H$ to build a new program $K$. Feeding a program its own source code as input is legal: source code is just a string.' },
            { tex: 'K(K) \\text{ halts} \\iff H(K, K) = \\text{"does not halt"}', why: 'Run $K$ on itself. By the definition of $K$, it halts exactly when $H$ predicts it won\'t.' },
            { tex: '\\iff K(K) \\text{ does not halt}', why: 'Because $H$ is always correct, $H(K, K) = $ "does not halt" means $K(K)$ really does not halt.' },
            { tex: '\\text{Contradiction, so no such } H \\text{ exists.}', why: 'A statement equivalent to its own negation is impossible. The only assumption we made was that $H$ exists.' },
          ],
          result: 'No algorithm decides halting for all programs and inputs. ∎',
        },
        {
          type: 'code',
          title: 'the impossible program (pseudocode in C++ syntax)',
          code: 'bool halts(const std::string& program, const std::string& input);  // suppose this existed\n\nvoid trouble(const std::string& program) {\n    if (halts(program, program))\n        while (true) {}          // loop forever\n    // otherwise: return immediately (halt)\n}\n\n// trouble(source_of_trouble) halts  <=>  it doesn\'t. Contradiction.',
          annotations: [
            { lines: 1, text: 'The assumed decider $H$. The proof shows it cannot be written.' },
            { lines: '3-7', text: 'The program $K$ from the proof: it does the opposite of whatever `halts` predicts about it.' },
          ],
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 450 272" xmlns="http://www.w3.org/2000/svg"><text x="266" y="20" font-size="12" text-anchor="middle" class="t-gray">input</text><text x="30" y="123" font-size="12" text-anchor="middle" class="t-gray">program</text><text x="149" y="40" font-size="14" text-anchor="middle">P₁</text><text x="227" y="40" font-size="14" text-anchor="middle">P₂</text><text x="305" y="40" font-size="14" text-anchor="middle">P₃</text><text x="383" y="40" font-size="14" text-anchor="middle">P₄</text><text x="94" y="72" font-size="14" text-anchor="end">P₁</text><text x="94" y="106" font-size="14" text-anchor="end">P₂</text><text x="94" y="140" font-size="14" text-anchor="end">P₃</text><text x="94" y="174" font-size="14" text-anchor="end">P₄</text><rect x="110" y="50" width="78" height="34" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.2" class="f-blue"/><text x="149" y="72" font-size="13" text-anchor="middle" class="t-blue">halts</text><rect x="188" y="50" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="227" y="72" font-size="13" text-anchor="middle">loops</text><rect x="266" y="50" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="305" y="72" font-size="13" text-anchor="middle">halts</text><rect x="344" y="50" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="383" y="72" font-size="13" text-anchor="middle">halts</text><rect x="110" y="84" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="149" y="106" font-size="13" text-anchor="middle">loops</text><rect x="188" y="84" width="78" height="34" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.2" class="f-blue"/><text x="227" y="106" font-size="13" text-anchor="middle" class="t-blue">loops</text><rect x="266" y="84" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="305" y="106" font-size="13" text-anchor="middle">halts</text><rect x="344" y="84" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="383" y="106" font-size="13" text-anchor="middle">loops</text><rect x="110" y="118" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="149" y="140" font-size="13" text-anchor="middle">halts</text><rect x="188" y="118" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="227" y="140" font-size="13" text-anchor="middle">halts</text><rect x="266" y="118" width="78" height="34" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.2" class="f-blue"/><text x="305" y="140" font-size="13" text-anchor="middle" class="t-blue">halts</text><rect x="344" y="118" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="383" y="140" font-size="13" text-anchor="middle">loops</text><rect x="110" y="152" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="149" y="174" font-size="13" text-anchor="middle">loops</text><rect x="188" y="152" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="227" y="174" font-size="13" text-anchor="middle">halts</text><rect x="266" y="152" width="78" height="34" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.2"/><text x="305" y="174" font-size="13" text-anchor="middle">loops</text><rect x="344" y="152" width="78" height="34" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.2" class="f-blue"/><text x="383" y="174" font-size="13" text-anchor="middle" class="t-blue">halts</text><text x="94" y="224" font-size="15" text-anchor="end" class="t-red">K</text><rect x="110" y="202" width="78" height="34" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="149" y="224" font-size="13" text-anchor="middle" class="t-red">loops</text><rect x="188" y="202" width="78" height="34" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="227" y="224" font-size="13" text-anchor="middle" class="t-red">halts</text><rect x="266" y="202" width="78" height="34" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="305" y="224" font-size="13" text-anchor="middle" class="t-red">loops</text><rect x="344" y="202" width="78" height="34" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="383" y="224" font-size="13" text-anchor="middle" class="t-red">loops</text><text x="266" y="258" font-size="12" text-anchor="middle" class="t-gray">K flips the diagonal, so K differs from every Pᵢ on input Pᵢ</text></svg>`,
          alt: 'A table with programs P1 to P4 as rows and the same programs as inputs (columns). Entries say halts or loops. The diagonal entries are highlighted. A row K below flips each diagonal entry: loops, halts, loops, loops.',
          caption: 'Why it is called **diagonalization**: list all programs and their behaviour on every program as input. $K$ is built to disagree with the diagonal, so $K$ differs from every row, yet $K$ is a program and should be a row. It is the same [[dm-diagonal-argument|diagonal argument]] Cantor used to prove the real numbers uncountable.',
          maxWidth: 450,
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'What undecidability does and does not mean',
          text: 'It does **not** mean that we can never tell whether a particular program halts; often we can. It means no single algorithm works for **all** programs. By **Rice\'s theorem**, the same holds for every nontrivial question about what programs do ("does it ever print 42?", "is it a virus?"). This is why compilers and static analyzers warn about *possible* infinite loops or null dereferences: they must sometimes answer "I don\'t know".',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'order',
      prompt: 'Put the steps of the proof that the halting problem is undecidable in order.',
      lines: [
        'Assume a program $H(P, I)$ always halts and correctly says whether $P$ halts on input $I$.',
        'Build $K(P)$: run $H(P, P)$; if it says "halts", loop forever, otherwise halt.',
        'Consider running $K$ on its own description: $K(K)$.',
        '$K(K)$ halts if and only if $H(K, K)$ says it does not halt, that is, if and only if $K(K)$ does not halt.',
        'This contradiction shows that no such program $H$ exists.',
      ],
      explanation: 'A proof by contradiction starts with the assumption to be refuted (that $H$ exists), uses it to construct something ($K$), applies the construction to itself (the diagonal step $K(K)$), derives a statement equivalent to its own negation, and concludes that the assumption was false.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'error',
      prompt: 'A student claims to have solved the halting problem. Tap the first line where the reasoning fails.',
      lines: [
        'Given a program $P$ and input $I$, run $P$ on $I$ step by step.',
        'If $P$ halts, output "halts". This happens after finitely many steps.',
        'If $P$ is still running after $10^9$ steps, output "runs forever".',
        'Either way the procedure stops after finitely many steps, so it decides the halting problem.',
      ],
      errorLines: [3],
      explanation: 'Line 3 is unjustified: a program can run for more than $10^9$ steps and then halt (a loop counting to $10^{10}$, say), so "still running" does not mean "runs forever", and no fixed bound works for every program. Lines 1–2 are fine: simulation **does** confirm halting when it happens. That makes the halting problem *semi-decidable*: "yes" answers can be verified, but no procedure can always say "no". The conclusion in line 4 fails because line 3 can give wrong answers.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'P, NP and NP-completeness',
      blocks: [
        {
          type: 'p',
          text: 'Decidable is not the same as practical. In the algorithms unit you measured running time with big-O; computer scientists draw the line between "efficient" and "infeasible" at **polynomial time**, $O(n^k)$ for some fixed $k$, where $n$ is the input size.',
        },
        {
          type: 'list',
          items: [
            '**P** is the class of decision problems solvable in polynomial time. Examples: is there a path from $u$ to $v$ (BFS)? Is the shortest path shorter than $100$ (Dijkstra)? Does this graph have an [[dm-euler-circuit|Euler circuit]] (check that every degree is even, plus connectivity)? Is $n$ prime (polynomial in the number of digits, proved in 2002)?',
            '**NP** is the class of decision problems whose "yes" answers can be **verified** in polynomial time, given a suitable hint called a **certificate**. Does this graph have a [[dm-hamilton-circuit|Hamilton circuit]]? Hard to find, but if someone hands you a circuit you can check it in $O(n)$ time. Can this Boolean expression be made true ([[dm-satisfiability|SAT]])? Check a proposed assignment by evaluating it.',
          ],
        },
        {
          type: 'p',
          text: 'Every problem in P is in NP (just solve it and ignore the certificate), so $\\mathrm{P} \\subseteq \\mathrm{NP}$. Whether $\\mathrm{P} = \\mathrm{NP}$, that is, whether every quickly *checkable* problem is also quickly *solvable*, is the most famous open question in computer science, with a \\$1 million Clay Millennium Prize waiting for its answer. See [[dm-p-np|P and NP]].',
        },
        {
          type: 'definition',
          term: 'NP-complete',
          text: 'A problem is [[dm-np-complete]] if it is in NP and **every** problem in NP can be reduced to it in polynomial time (translated into an instance of it). NP-complete problems are the hardest problems in NP: a polynomial-time algorithm for any one of them would give one for all of NP, proving $\\mathrm{P} = \\mathrm{NP}$.',
        },
        {
          type: 'p',
          text: 'The **Cook–Levin theorem** (1971) showed that SAT, deciding whether a Boolean expression from the first lesson of this unit can be satisfied, is NP-complete. Thousands of problems followed: Hamilton circuit, $3$-coloring a graph, the decision version of the traveling salesperson problem, subset sum, scheduling, generalized Sudoku, Minesweeper consistency and Tetris. Notice the contrast with the graphs unit: Euler circuits are easy (in P), Hamilton circuits are NP-complete, although the questions sound almost identical.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg"><path d="M300,10 Q250,140 300,270 L470,270 L470,10 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4" class="s-red f-red"/><ellipse cx="220" cy="140" rx="190" ry="110" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.8" class="s-purple f-purple"/><ellipse cx="150" cy="150" rx="95" ry="70" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8" class="s-blue f-blue"/><text x="150" y="132" font-size="18" text-anchor="middle" class="t-blue">P</text><text x="150" y="155" font-size="11" text-anchor="middle" class="t-gray">sorting, shortest paths,</text><text x="150" y="170" font-size="11" text-anchor="middle" class="t-gray">MST, Euler circuits,</text><text x="150" y="185" font-size="11" text-anchor="middle" class="t-gray">primality</text><text x="250" y="52" font-size="18" text-anchor="middle" class="t-purple">NP</text><text x="250" y="233" font-size="11" text-anchor="middle" class="t-gray">factoring?</text><text x="345" y="120" font-size="13" text-anchor="middle" class="t-red">NP-complete</text><text x="345" y="138" font-size="11" text-anchor="middle" class="t-gray">SAT, Hamilton circuit,</text><text x="345" y="153" font-size="11" text-anchor="middle" class="t-gray">3-coloring, TSP,</text><text x="345" y="168" font-size="11" text-anchor="middle" class="t-gray">Sudoku (n²×n²)</text><text x="440" y="30" font-size="13" text-anchor="middle" class="t-red">NP-hard</text><text x="440" y="255" font-size="11" text-anchor="middle" class="t-gray">halting</text></svg>`,
          alt: 'Diagram assuming P is not NP: a large ellipse NP containing a smaller ellipse P on the left (sorting, shortest paths, MST, Euler circuits, primality). A dashed region labelled NP-hard extends to the right beyond NP; its overlap with NP is NP-complete (SAT, Hamilton circuit, 3-coloring, TSP, Sudoku). Factoring sits in NP outside both P and NP-complete with a question mark; halting is NP-hard outside NP.',
          caption: 'The landscape as most experts believe it to be (assuming $\\mathrm{P} \\ne \\mathrm{NP}$). **NP-hard** means at least as hard as every NP problem; the halting problem is NP-hard but not even decidable. Factoring is in NP but believed to be neither in P nor NP-complete, and RSA\'s security rests on it being hard.',
        },
        {
          type: 'graph',
          x: [0, 25],
          y: [0, 150000],
          yStep: 25000,
          functions: [
            { expr: 'c*x^3', label: '$c\\,n^3$ (polynomial)', color: 'blue' },
            { expr: '2^x', label: '$2^n$ (brute force over subsets)', color: 'red' },
          ],
          points: [
            { x: 'n', y: 'c*n^3', color: 'blue' },
            { x: 'n', y: '2^n', color: 'red' },
          ],
          sliders: [
            { name: 'c', min: 1, max: 20, step: 1, value: 1, label: 'constant factor $c$' },
            { name: 'n', min: 1, max: 25, step: 1, value: 10, label: 'input size $n$' },
          ],
          readouts: [
            { label: '$c\\,n^3 =$', expr: 'c*n^3', digits: 0 },
            { label: '$2^n =$', expr: '2^n', digits: 0 },
          ],
          caption: 'Raise $c$ to make the polynomial algorithm $20$ times slower: the exponential curve still overtakes it, just a few steps later (around $n \\approx 10$ for $c = 1$, $n \\approx 16.4$ for $c = 20$). Each extra input element **doubles** the brute-force work.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Meeting NP-complete problems in game development',
          text: 'Routing a delivery drone through every waypoint (TSP), packing loot into a grid inventory (bin packing), assigning registers in a compiler (graph coloring) and generating puzzle levels with exactly one solution all hide NP-hard problems. You don\'t give up; you change the question. Use exact search when $n$ is small, exploit special structure, accept approximations (an MST gives a TSP tour at most twice optimal when distances obey the triangle inequality), or use heuristics such as A*, greedy choices and local search that are fast and usually good enough for a 60 FPS budget.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A brute-force SAT solver tries every assignment of $0$s and $1$s to the variables of a Boolean expression. How many assignments must it check, in the worst case, for an expression with $20$ variables?',
      answer: '1048576',
      answerTex: '2^{20} = 1\\,048\\,576',
      hint: 'Each variable has $2$ possible values, independently (product rule).',
      explanation: 'By the product rule there are $2^{20} = 1\\,048\\,576$ assignments: the truth table has that many rows. Checking each one is fast (evaluate the expression), which is why SAT is in NP, but the number of rows doubles with every new variable. At $100$ variables there are $2^{100} \\approx 1.3 \\times 10^{30}$ assignments: checking a billion per second would take about $4 \\times 10^{13}$ years, thousands of times the age of the universe. Modern SAT solvers are much cleverer than brute force, yet no one knows a polynomial-time algorithm.',
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'mcq',
      prompt: 'Graph $3$-coloring is NP-complete. Suppose someone discovers a polynomial-time algorithm for it. What follows?',
      options: [
        { text: 'Only coloring problems get faster; SAT and Hamilton circuit stay as hard as before.', why: 'Every NP problem reduces to 3-coloring in polynomial time, so SAT and Hamilton circuit could be translated into 3-coloring and solved fast too.' },
        { text: 'The halting problem becomes decidable.', why: 'The halting problem is undecidable, which has nothing to do with running time: no algorithm solves it, fast or slow.' },
        { text: 'Every problem in NP can be solved in polynomial time, so $\\mathrm{P} = \\mathrm{NP}$.', correct: true, why: 'This is exactly what NP-completeness means: reduce any NP problem to 3-coloring in polynomial time, then run the fast algorithm.' },
        { text: 'Nothing, because 3-coloring is not actually in NP.', why: 'It is in NP: a proposed coloring is a certificate you can check edge by edge in polynomial time.' },
      ],
      explanation: 'If $A$ is NP-complete, every problem $B$ in NP has a polynomial-time reduction to $A$. A polynomial-time algorithm for $A$ composed with a polynomial-time reduction is still polynomial (a polynomial of a polynomial is a polynomial), so every $B$ would be in P, hence $\\mathrm{P} = \\mathrm{NP}$. This is why finding a fast algorithm for any single NP-complete problem would be a world-changing result, and why most researchers believe none exists.',
    },
    // ------------------------------------------------------------------ 17
    {
      kind: 'concept',
      title: 'Looking back: the whole course in one picture',
      blocks: [
        {
          type: 'p',
          text: 'You have reached the end of Discrete Mathematics. This last unit quietly used almost everything that came before it. Boolean algebra was the logic unit rewritten for hardware. The halting proof was a proof by contradiction built on Cantor\'s diagonal argument. The subset construction counted $2^n$ subsets, the mod-$3$ DFA ran on modular arithmetic, state diagrams and parse trees were graphs and trees, and P versus NP is the big-O analysis of algorithms pushed to its limit.',
        },
        {
          type: 'table',
          headers: ['Unit', 'The big idea', 'Where you will use it'],
          rows: [
            ['Logic', 'propositions, equivalences, quantifiers, inference rules', 'conditions in code, SAT, reading specifications'],
            ['Proofs', 'direct, contrapositive, contradiction, induction', 'proving algorithms correct, loop invariants'],
            ['Sets, functions, relations', 'set operations, bijections, cardinality, equivalence relations, orders', 'data structures, hashing, databases, dependency ordering'],
            ['Number theory', 'modular arithmetic, gcd, inverses, CRT', 'RSA, hashing, PRNGs, wraparound arithmetic'],
            ['Counting', 'product and sum rules, permutations, combinations, inclusion–exclusion', 'estimating search spaces, loot tables, test coverage'],
            ['Probability', 'conditional probability, Bayes, expected value', 'drop rates, randomized algorithms, AI decisions'],
            ['Algorithms', 'big-O, algorithm analysis, the master theorem', 'choosing algorithms that fit the frame budget'],
            ['Recurrences', 'modeling and solving recurrences', 'recursive algorithms, dynamic programming'],
            ['Graphs and trees', 'paths, connectivity, Dijkstra and A*, coloring, spanning trees, BSTs', 'pathfinding, networks, scene graphs, spatial partitioning'],
            ['Computation', 'Boolean circuits, automata, grammars, computability, P vs NP', 'bit tricks, game AI, parsers, knowing what cannot be done'],
          ],
        },
        {
          type: 'p',
          text: 'More important than any one formula is the habit of mind: define things precisely, ask *why* a rule is true, count without overcounting, prove before you trust, and know the difference between a problem that is hard and one that is impossible. Those habits are what interviewers at studios look for, and they are what will let you read papers on rendering, AI and networking as your career grows.',
        },
        {
          type: 'list',
          items: [
            '**Algorithms and data structures**: dynamic programming, network flow and amortized analysis build directly on the recurrence, graph and big-O units.',
            '**Theory of computation**: pumping lemmas, pushdown automata and complexity classes beyond NP (Sipser\'s *Introduction to the Theory of Computation* is the standard text).',
            '**Compilers and interpreters**: lexers are DFAs and parsers are grammars; writing a small scripting language for a game is a superb project.',
            '**Cryptography and security**: the number theory unit, plus the hardness assumptions from this lesson.',
            '**Game AI**: state machines, behaviour trees, utility AI and planning, all using the graphs and probability you now know.',
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'From Boole to your GPU',
          text: 'Boole published his algebra of logic in 1854 as pure philosophy. Turing defined his machines in 1936 to settle a question in the foundations of mathematics. Neither was trying to build a computer, and both ideas now run in every console and GPU on the planet. Discrete mathematics is that rare subject where the most abstract ideas turned out to be the most practical. Congratulations on finishing it.',
        },
      ],
    },
  ],
  takeaways: [
    'A phrase-structure grammar $(V, T, S, P)$ generates its language by derivations; $S \\to 0S1 \\mid \\varepsilon$ generates $\\{0^n1^n\\}$, which no finite automaton accepts.',
    'Context-free grammars ($A \\to w$) describe programming-language syntax; parse trees show structure, and layered grammars ($E$, $T$, $F$) avoid ambiguity and encode precedence.',
    'Chomsky hierarchy: regular ⊂ context-free ⊂ context-sensitive ⊂ unrestricted, matched by finite automata, pushdown automata, linear-bounded automata and Turing machines.',
    'A Turing machine is a finite control with an unbounded read/write tape; by the Church–Turing thesis (a thesis, not a theorem) it can compute anything an algorithm can.',
    'The halting problem is undecidable: a decider $H$ would let you build $K$ with $K(K)$ halting iff it does not, a diagonal contradiction.',
    'P = problems solvable in polynomial time, NP = problems whose yes-answers are verifiable in polynomial time; NP-complete problems (SAT, Hamilton circuit, 3-coloring) are the hardest in NP, and whether P = NP is open.',
  ],
  reading: [
    {
      title: 'Wikipedia — Halting problem',
      url: 'https://en.wikipedia.org/wiki/Halting_problem',
      source: 'wikipedia',
      note: 'The proof sketch, its history, and its connection to Gödel\'s incompleteness theorems.',
    },
    {
      title: 'Wikipedia — Turing machine',
      url: 'https://en.wikipedia.org/wiki/Turing_machine',
      source: 'wikipedia',
      note: 'Formal definitions, more example machines and the universal Turing machine.',
    },
    {
      title: 'Wikipedia — Chomsky hierarchy',
      url: 'https://en.wikipedia.org/wiki/Chomsky_hierarchy',
      source: 'wikipedia',
      note: 'A compact table of grammar types, languages and automata, with examples for each level.',
    },
    {
      title: 'Wikipedia — P versus NP problem',
      url: 'https://en.wikipedia.org/wiki/P_versus_NP_problem',
      source: 'wikipedia',
      note: 'Why the question matters, what a proof either way would imply, and why it has resisted every attack.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The whole course at MIT level, a great way to review every unit of this course with fresh problems.',
    },
    {
      title: 'Levin — Discrete Mathematics: An Open Introduction',
      url: 'https://discrete.openmathbooks.org/dmoi3.html',
      source: 'book',
      note: 'A free textbook covering logic, proofs, counting and graph theory, ideal for revisiting earlier units.',
    },
  ],
};
