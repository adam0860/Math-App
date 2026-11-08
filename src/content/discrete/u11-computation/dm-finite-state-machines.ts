import type { Lesson } from '../../types';

export const lesson: Lesson = {
  id: 'dm-finite-state-machines',
  title: 'Finite-State Machines and Regular Expressions',
  summary: 'Machines with a finite memory: state machines with output, automata that accept or reject strings, NFAs and the subset construction, regular expressions, and the state machines behind enemy AI.',
  minutes: 20,
  objectives: [
    'Run a finite-state machine with output from its state diagram or state table',
    'Decide whether a deterministic finite automaton accepts a string, and describe the language it accepts',
    'Design small DFAs by deciding what each state must remember',
    'Explain how the subset construction turns an NFA into an equivalent DFA',
    'Read and write regular expressions and state Kleene\'s theorem',
    'Implement an enemy-AI state machine and use `std::regex` in C++',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Machines with memory: states',
      blocks: [
        {
          type: 'p',
          text: 'The circuits of the last lesson have no memory: the output depends only on the current input. Most interesting systems also depend on **history**. A vending machine remembers how much money you inserted; a game controller remembers whether you are in a menu; a guard remembers whether it has spotted you. The simplest model of a system with memory is a [[dm-finite-state-machine]]: it is always in one of finitely many **states**, and each input moves it to a next state.',
        },
        {
          type: 'definition',
          term: 'Finite-state machine with output',
          text: '$M = (S, I, O, f, g, s_0)$: a finite set $S$ of states, an input alphabet $I$, an output alphabet $O$, a **transition function** $f : S \\times I \\to S$ (next state), an **output function** $g : S \\times I \\to O$ and a start state $s_0 \\in S$.',
        },
        {
          type: 'p',
          text: 'Here is a machine that reads bits and outputs $1$ exactly when the current input and the previous input are both $1$ (detecting "$11$" in a stream). It needs to remember only one thing: was the last input a $1$? State $s_0$ means no, state $s_1$ means yes. Each arrow is labelled **input/output**.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg"><path d="M133.2,71.0 C147.2,37.0 92.8,37.0 106.8,71.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M106.8,71.0 L100.2,64.9 L107.2,62.0 Z" fill="currentColor"/><path d="M303.2,71.0 C317.2,37.0 262.8,37.0 276.8,71.0" fill="none" stroke="currentColor" stroke-width="2.6" class="s-blue"/><path d="M276.8,71.0 L270.2,64.9 L277.2,62.0 Z" fill="currentColor" class="f-blue"/><path d="M143.2,101.0 Q205.0,117.0 266.8,101.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M266.8,101.0 L259.8,106.8 L257.9,99.3 Z" fill="currentColor"/><path d="M266.8,89.0 Q205.0,73.0 143.2,89.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M143.2,89.0 L150.2,83.2 L152.1,90.7 Z" fill="currentColor"/><circle cx="120" cy="95" r="24" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="120" y="100" text-anchor="middle" font-size="14">s₀</text><line x1="66" y1="95" x2="96" y2="95" stroke="currentColor" stroke-width="1.6"/><path d="M96.0,95.0 L87.9,98.8 L87.9,91.2 Z" fill="currentColor"/><circle cx="290" cy="95" r="24" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="290" y="100" text-anchor="middle" font-size="14">s₁</text><text x="120.0" y="36.0" text-anchor="middle" font-size="13">0/0</text><text x="290.0" y="36.0" text-anchor="middle" font-size="13" class="t-blue">1/1</text><text x="205.0" y="123.5" text-anchor="middle" font-size="13">1/0</text><text x="205.0" y="75.5" text-anchor="middle" font-size="13">0/0</text><text x="120" y="150" text-anchor="middle" font-size="12" class="t-gray">last input was not 1</text><text x="290" y="150" text-anchor="middle" font-size="12" class="t-gray">last input was 1</text></svg>`,
          alt: 'State diagram with states s0 (start) and s1. s0 loops to itself on 0/0 and goes to s1 on 1/0. s1 loops to itself on 1/1 and goes back to s0 on 0/0.',
          caption: 'The start state has an incoming arrow from nowhere. Only the blue loop, a $1$ read while the last input was $1$, outputs a $1$.',
          maxWidth: 400,
        },
        {
          type: 'table',
          headers: ['state', '$f$ on input $0$', '$f$ on input $1$', '$g$ on input $0$', '$g$ on input $1$'],
          rows: [
            ['$s_0$', '$s_0$', '$s_1$', '$0$', '$0$'],
            ['$s_1$', '$s_0$', '$s_1$', '$0$', '$1$'],
          ],
          caption: 'The same machine as a **state table**: one row per state, listing next states and outputs.',
        },
        {
          type: 'derivation',
          title: 'Run the machine on the input $01110$',
          steps: [
            { tex: 's_0 \\xrightarrow{0/0} s_0', why: 'Start in $s_0$. Reading $0$ keeps us in $s_0$ (last input not $1$) and outputs $0$.' },
            { tex: 's_0 \\xrightarrow{1/0} s_1', why: 'A $1$, but the previous input was $0$: output $0$, and now remember "last was $1$".' },
            { tex: 's_1 \\xrightarrow{1/1} s_1', why: 'A $1$ right after a $1$: output $1$.' },
            { tex: 's_1 \\xrightarrow{1/1} s_1', why: 'Again two $1$s in a row (the second and third $1$ overlap with the previous pair): output $1$.' },
            { tex: 's_1 \\xrightarrow{0/0} s_0', why: 'A $0$ resets the memory and outputs $0$.' },
          ],
          result: 'Input $01110$ produces output $00110$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why "finite" is the whole point',
          text: 'A state is a **summary of the past** that keeps exactly what the future needs. Here the full history could be any bit string, but only its last bit matters, so two states suffice. Designing a state machine means answering "what must I remember?" with finitely many cases. That restriction is what makes these machines cheap to run (one table lookup per input) and easy to reason about, and it is also their limitation, as you will see.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Mealy and Moore machines',
          text: 'When the output is attached to transitions, as here, the machine is called a **Mealy machine**. A **Moore machine** attaches the output to states instead. The two models are equally powerful; game AI usually thinks Moore-style ("in the Attack state, play the attack animation").',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'fill',
      prompt: 'Run the "$11$ detector" (start in $s_0$; it outputs $1$ exactly when the current input and the previous input are both $1$) on the input $110111$. Which output string does it produce?',
      template: 'Input $110111$ produces the output ___ .',
      blanks: [{ answers: ['$010011$'] }],
      wordBank: ['$010011$', '$110111$', '$010111$', '$000011$', '$011001$'],
      hint: 'Track the state after each input: $s_1$ means the previous input was $1$.',
      explanation: 'States and outputs: read $1$ in $s_0$ → output $0$, go to $s_1$; read $1$ in $s_1$ → output $1$; read $0$ → output $0$, back to $s_0$; read $1$ in $s_0$ → output $0$, go to $s_1$; read $1$ → $1$; read $1$ → $1$. Output: $010011$. The first $1$ never outputs $1$, because there is no previous $1$ before it.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Finite automata: accepting strings',
      blocks: [
        {
          type: 'p',
          text: 'Often we don\'t need an output on every step, only a final verdict: is this input string acceptable? Does this password have the right format, is this move sequence a valid combo, does this binary number have some property? Drop the output function and mark some states as **accepting**.',
        },
        {
          type: 'definition',
          term: 'Deterministic finite automaton (DFA)',
          text: 'A [[dm-dfa|DFA]] is $M = (S, I, f, s_0, F)$: states $S$, input alphabet $I$, transition function $f : S \\times I \\to S$, start state $s_0$ and a set $F \\subseteq S$ of **accepting** (final) states. $M$ **accepts** a string if reading it from $s_0$ ends in a state of $F$. The **language** $L(M)$ is the set of all strings $M$ accepts.',
        },
        {
          type: 'p',
          text: 'In a state diagram, accepting states are drawn as **double circles**. "Deterministic" means every state has exactly one arrow for each input symbol, so every string has exactly one path. This DFA accepts the bit strings that **end in $01$**.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg"><path d="M92.1,88.0 C106.1,54.0 53.9,54.0 67.9,88.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M67.9,88.0 L61.3,81.9 L68.3,79.0 Z" fill="currentColor"/><path d="M232.1,88.0 C246.1,54.0 193.9,54.0 207.9,88.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M207.9,88.0 L201.3,81.9 L208.3,79.0 Z" fill="currentColor"/><line x1="102.0" y1="110.0" x2="198.0" y2="110.0" stroke="currentColor" stroke-width="1.6"/><path d="M198.0,110.0 L189.9,113.8 L189.9,106.2 Z" fill="currentColor"/><path d="M241.3,115.5 Q290.0,128.0 334.8,116.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M334.8,116.5 L327.9,122.2 L326.0,114.8 Z" fill="currentColor"/><path d="M334.8,103.5 Q290.0,92.0 241.3,104.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M241.3,104.5 L248.2,98.8 L250.1,106.2 Z" fill="currentColor"/><path d="M337.4,122.9 Q220.0,190.0 99.1,120.9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M99.1,120.9 L108.1,121.6 L104.3,128.3 Z" fill="currentColor"/><circle cx="80" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="80" y="115" text-anchor="middle" font-size="14">q₀</text><line x1="28" y1="110" x2="58" y2="110" stroke="currentColor" stroke-width="1.6"/><path d="M58.0,110.0 L49.9,113.8 L49.9,106.2 Z" fill="currentColor"/><circle cx="220" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="220" y="115" text-anchor="middle" font-size="14">q₁</text><circle cx="360" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="360" cy="110" r="26" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="360" y="115" text-anchor="middle" font-size="14" class="t-green">q₂</text><text x="80.0" y="53.0" text-anchor="middle" font-size="13">1</text><text x="220.0" y="53.0" text-anchor="middle" font-size="13">0</text><text x="150.0" y="104.5" text-anchor="middle" font-size="13">0</text><text x="289.0" y="136.5" text-anchor="middle" font-size="13">1</text><text x="289.0" y="92.5" text-anchor="middle" font-size="13">0</text><text x="219.1" y="170.5" text-anchor="middle" font-size="13">1</text></svg>`,
          alt: 'DFA with states q0 (start), q1, q2 (accepting, double circle). q0 loops on 1 and goes to q1 on 0. q1 loops on 0 and goes to q2 on 1. q2 goes to q1 on 0 and back to q0 on 1.',
          caption: 'Each state remembers how much of the pattern $01$ we have just seen: $q_0$ = nothing useful, $q_1$ = "just read a $0$", $q_2$ = "just read $01$".',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Does the DFA accept $1001$?',
          steps: [
            { tex: 'q_0 \\xrightarrow{1} q_0', why: 'A $1$ cannot start the pattern $01$, so nothing useful is remembered: stay in $q_0$.' },
            { tex: 'q_0 \\xrightarrow{0} q_1', why: 'A $0$ might be the start of $01$.' },
            { tex: 'q_1 \\xrightarrow{0} q_1', why: 'Another $0$: the newest $0$ is still a possible start of $01$.' },
            { tex: 'q_1 \\xrightarrow{1} q_2', why: 'We have just read $01$.' },
            { tex: 'q_2 \\in F', why: 'The input is used up and we stopped in an accepting state.' },
          ],
          result: '$1001$ is accepted. It ends in $01$, as expected.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Only the final state counts',
          text: 'A DFA decides at the **end** of the input. Passing through an accepting state halfway means nothing: $0100$ visits $q_2$ after two symbols but ends in $q_1$, so it is rejected. Also note that the empty string $\\varepsilon$ is accepted exactly when the start state is accepting.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'Trace the DFA (start $q_0$; $q_0 \\xrightarrow{0} q_1$, $q_0 \\xrightarrow{1} q_0$, $q_1 \\xrightarrow{0} q_1$, $q_1 \\xrightarrow{1} q_2$, $q_2 \\xrightarrow{0} q_1$, $q_2 \\xrightarrow{1} q_0$) on the input $10010$. Put the transitions in the order they happen.',
      figure: {
        type: 'figure',
        svg: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg"><path d="M92.1,88.0 C106.1,54.0 53.9,54.0 67.9,88.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M67.9,88.0 L61.3,81.9 L68.3,79.0 Z" fill="currentColor"/><path d="M232.1,88.0 C246.1,54.0 193.9,54.0 207.9,88.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M207.9,88.0 L201.3,81.9 L208.3,79.0 Z" fill="currentColor"/><line x1="102.0" y1="110.0" x2="198.0" y2="110.0" stroke="currentColor" stroke-width="1.6"/><path d="M198.0,110.0 L189.9,113.8 L189.9,106.2 Z" fill="currentColor"/><path d="M241.3,115.5 Q290.0,128.0 334.8,116.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M334.8,116.5 L327.9,122.2 L326.0,114.8 Z" fill="currentColor"/><path d="M334.8,103.5 Q290.0,92.0 241.3,104.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M241.3,104.5 L248.2,98.8 L250.1,106.2 Z" fill="currentColor"/><path d="M337.4,122.9 Q220.0,190.0 99.1,120.9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M99.1,120.9 L108.1,121.6 L104.3,128.3 Z" fill="currentColor"/><circle cx="80" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="80" y="115" text-anchor="middle" font-size="14">q₀</text><line x1="28" y1="110" x2="58" y2="110" stroke="currentColor" stroke-width="1.6"/><path d="M58.0,110.0 L49.9,113.8 L49.9,106.2 Z" fill="currentColor"/><circle cx="220" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="220" y="115" text-anchor="middle" font-size="14">q₁</text><circle cx="360" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="360" cy="110" r="26" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="360" y="115" text-anchor="middle" font-size="14" class="t-green">q₂</text><text x="80.0" y="53.0" text-anchor="middle" font-size="13">1</text><text x="220.0" y="53.0" text-anchor="middle" font-size="13">0</text><text x="150.0" y="104.5" text-anchor="middle" font-size="13">0</text><text x="289.0" y="136.5" text-anchor="middle" font-size="13">1</text><text x="289.0" y="92.5" text-anchor="middle" font-size="13">0</text><text x="219.1" y="170.5" text-anchor="middle" font-size="13">1</text></svg>`,
        alt: 'The DFA for strings ending in 01: q0 start, q2 accepting.',
        maxWidth: 400,
      },
      lines: [
        '$q_0 \\xrightarrow{1} q_0$',
        '$q_0 \\xrightarrow{0} q_1$',
        '$q_1 \\xrightarrow{0} q_1$',
        '$q_1 \\xrightarrow{1} q_2$',
        '$q_2 \\xrightarrow{0} q_1$',
      ],
      explanation: 'Read the symbols $1, 0, 0, 1, 0$ in order, each time following the one arrow for that symbol out of the current state: $q_0 \\to q_0 \\to q_1 \\to q_1 \\to q_2 \\to q_1$. The run ends in $q_1$, which is not accepting, so $10010$ is rejected. Correct: it ends in $10$, not $01$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'error',
      prompt: 'A student decides whether the same DFA (strings ending in $01$; only $q_2$ accepting) accepts $0100$. Tap the first wrong line.',
      lines: [
        'Start in $q_0$.',
        'Read $0$: $q_0 \\to q_1$.',
        'Read $1$: $q_1 \\to q_2$.',
        'Read $0$: $q_2 \\to q_1$.',
        'Read $0$: $q_1 \\to q_1$.',
        'The run visited the accepting state $q_2$, so $0100$ is accepted.',
      ],
      errorLines: [6],
      explanation: 'Every transition is right, but the conclusion is not: acceptance depends only on the state where the input **ends**. The run ends in $q_1$, which is not accepting, so $0100$ is **rejected**, as it should be, since $0100$ does not end in $01$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Designing a DFA: what must each state remember?',
      blocks: [
        {
          type: 'p',
          text: 'Design challenge: accept exactly the binary numerals divisible by $3$, read from the most significant bit. You can\'t store the number (it could be huge), but you don\'t need to. Reading one more bit $b$ turns the value $n$ into $2n + b$. From modular arithmetic, $(2n + b) \\bmod 3$ depends only on $n \\bmod 3$. So the remainder $r \\in \\{0, 1, 2\\}$ is all the machine must remember.',
        },
        {
          type: 'math',
          tex: 'f(r, b) = (2r + b) \\bmod 3, \\qquad s_0 = 0, \\qquad F = \\{0\\}',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg"><path d="M103.2,96.0 C117.2,62.0 62.8,62.0 76.8,96.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M76.8,96.0 L70.2,89.9 L77.2,87.0 Z" fill="currentColor"/><path d="M383.2,96.0 C397.2,62.0 342.8,62.0 356.8,96.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M356.8,96.0 L350.2,89.9 L357.2,87.0 Z" fill="currentColor"/><path d="M116.9,127.7 Q160.0,140.0 206.9,126.6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M206.9,126.6 L200.1,132.5 L198.0,125.1 Z" fill="currentColor"/><path d="M206.9,113.4 Q160.0,100.0 116.9,112.3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M116.9,112.3 L123.7,106.4 L125.8,113.8 Z" fill="currentColor"/><path d="M253.1,126.6 Q300.0,140.0 346.9,126.6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M346.9,126.6 L340.1,132.5 L338.0,125.1 Z" fill="currentColor"/><path d="M346.9,113.4 Q300.0,100.0 253.1,113.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M253.1,113.4 L259.9,107.5 L262.0,114.9 Z" fill="currentColor"/><circle cx="90" cy="120" r="24" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="90" cy="120" r="28" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="90" y="125" text-anchor="middle" font-size="13" class="t-green">r=0</text><line x1="90" y1="178" x2="90" y2="148" stroke="currentColor" stroke-width="1.6"/><path d="M90.0,148.0 L93.8,156.1 L86.2,156.1 Z" fill="currentColor"/><circle cx="230" cy="120" r="24" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="230" y="125" text-anchor="middle" font-size="13">r=1</text><circle cx="370" cy="120" r="24" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="370" y="125" text-anchor="middle" font-size="13">r=2</text><text x="90.0" y="61.0" text-anchor="middle" font-size="13">0</text><text x="370.0" y="61.0" text-anchor="middle" font-size="13">1</text><text x="161.0" y="148.1" text-anchor="middle" font-size="13">1</text><text x="161.0" y="100.9" text-anchor="middle" font-size="13">1</text><text x="300.0" y="147.8" text-anchor="middle" font-size="13">0</text><text x="300.0" y="101.2" text-anchor="middle" font-size="13">0</text></svg>`,
          alt: 'DFA with three states r=0 (start and accepting), r=1, r=2. r=0 loops on 0, goes to r=1 on 1. r=1 goes to r=0 on 1 and r=2 on 0. r=2 loops on 1 and goes to r=1 on 0.',
          caption: 'Three states, one per remainder. Reading $0$ doubles the value, reading $1$ doubles it and adds $1$.',
          maxWidth: 440,
        },
        {
          type: 'derivation',
          title: 'Run it on $1001_2 = 9$',
          steps: [
            { tex: 'r = 0 \\xrightarrow{1} (2 \\cdot 0 + 1) \\bmod 3 = 1', why: 'The prefix $1$ has value $1$.' },
            { tex: 'r = 1 \\xrightarrow{0} (2 \\cdot 1 + 0) \\bmod 3 = 2', why: 'The prefix $10_2 = 2$.' },
            { tex: 'r = 2 \\xrightarrow{0} (2 \\cdot 2 + 0) \\bmod 3 = 1', why: 'The prefix $100_2 = 4 \\equiv 1 \\pmod 3$.' },
            { tex: 'r = 1 \\xrightarrow{1} (2 \\cdot 1 + 1) \\bmod 3 = 0', why: 'The whole numeral $1001_2 = 9 \\equiv 0$.' },
          ],
          result: 'The run ends in the accepting state $0$: $9$ is divisible by $3$.',
        },
        {
          type: 'p',
          text: 'In code, a DFA is just a 2D array indexed by state and symbol, and running it is one lookup per character. This is how lexers (the first stage of a compiler), network packet filters and many text-search tools run.',
        },
        {
          type: 'code',
          title: 'dfa.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdio>
#include <string>

// DFA for "binary number divisible by 3". State = value read so far, mod 3.
// delta[state][bit] = (2 * state + bit) % 3, written out as a table.
constexpr std::array<std::array<int, 2>, 3> delta = {{
    {0, 1},   // from r = 0: read 0 -> 0, read 1 -> 1
    {2, 0},   // from r = 1: read 0 -> 2, read 1 -> 0
    {1, 2},   // from r = 2: read 0 -> 1, read 1 -> 2
}};

bool accepts(const std::string& input) {
    int state = 0;                          // start state
    for (char c : input) state = delta[state][c - '0'];
    return state == 0;                      // accepting state: remainder 0
}

int main() {
    for (std::string s : {"0", "11", "110", "1001", "1011", "1111"}) {
        std::printf("%-5s (= %2d)  %s\\n", s.c_str(), std::stoi(s, nullptr, 2),
                    accepts(s) ? "accept" : "reject");
    }
}`,
          output: `0     (=  0)  accept
11    (=  3)  accept
110   (=  6)  accept
1001  (=  9)  accept
1011  (= 11)  reject
1111  (= 15)  accept`,
          annotations: [
            { lines: '7-11', text: 'The transition table $f$: row = current state, column = input bit.' },
            { lines: '13-17', text: 'Running a DFA: start in $s_0$, follow one arrow per symbol, then check membership in $F$.' },
          ],
        },
        {
          type: 'deepdive',
          title: 'What a finite automaton cannot do',
          blocks: [
            {
              type: 'p',
              text: 'No DFA accepts $L = \\{0^n1^n : n \\ge 0\\}$ (some $0$s followed by the same number of $1$s). Suppose a DFA with $k$ states did. Feed it the $k + 1$ strings $0^0, 0^1, \\dots, 0^k$. By the [[dm-pigeonhole-principle|pigeonhole principle]], two of them, $0^i$ and $0^j$ with $i < j$, end in the same state. From that state, reading $1^i$ must lead to acceptance, because $0^i1^i \\in L$. But then $0^j1^i$ is accepted too, although $j \\ne i$. Contradiction.',
            },
            {
              type: 'p',
              text: 'The moral: a finite automaton cannot count without bound. Balanced parentheses, nested `{ }` blocks and arithmetic expressions need more power, which is where grammars and the next lesson come in.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'Run the divisible-by-$3$ DFA ($f(r, b) = (2r + b) \\bmod 3$, start $r = 0$) on the input $1011$. In which state $r$ does it end?',
      answer: '2',
      label: '$r =$',
      hint: 'Update $r \\leftarrow (2r + b) \\bmod 3$ once per bit, from left to right.',
      explanation: '$r: 0 \\xrightarrow{1} 1 \\xrightarrow{0} 2 \\xrightarrow{1} (4 + 1) \\bmod 3 = 2 \\xrightarrow{1} (4 + 1) \\bmod 3 = 2$. The final state is $r = 2$, which is not accepting. Check: $1011_2 = 11 = 3 \\cdot 3 + 2$. The state really is the remainder of the prefix read so far.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Nondeterminism and the subset construction',
      blocks: [
        {
          type: 'p',
          text: 'Designing a DFA means planning for every symbol in every state. A [[dm-nfa|nondeterministic finite automaton (NFA)]] relaxes this: a state may have **several** arrows with the same symbol, or **none**. An NFA accepts a string if **at least one** way of reading it ends in an accepting state. Think of it as a machine that can guess, and is credited with the luckiest guess.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg"><path d="M92.1,78.0 C106.1,44.0 53.9,44.0 67.9,78.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M67.9,78.0 L61.3,71.9 L68.3,69.0 Z" fill="currentColor"/><line x1="102.0" y1="100.0" x2="198.0" y2="100.0" stroke="currentColor" stroke-width="1.6"/><path d="M198.0,100.0 L189.9,103.8 L189.9,96.2 Z" fill="currentColor"/><line x1="242.0" y1="100.0" x2="324.0" y2="100.0" stroke="currentColor" stroke-width="1.6"/><path d="M324.0,100.0 L315.9,103.8 L315.9,96.2 Z" fill="currentColor"/><circle cx="80" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="80" y="105" text-anchor="middle" font-size="14">p</text><line x1="28" y1="100" x2="58" y2="100" stroke="currentColor" stroke-width="1.6"/><path d="M58.0,100.0 L49.9,103.8 L49.9,96.2 Z" fill="currentColor"/><circle cx="220" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="220" y="105" text-anchor="middle" font-size="14">q</text><circle cx="350" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><circle cx="350" cy="100" r="26" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="350" y="105" text-anchor="middle" font-size="14" class="t-green">r</text><text x="80.0" y="43.0" text-anchor="middle" font-size="13">0, 1</text><text x="150.0" y="114.5" text-anchor="middle" font-size="13">0</text><text x="284.0" y="114.5" text-anchor="middle" font-size="13">1</text></svg>`,
          alt: 'NFA with states p (start), q, r (accepting). p loops on 0 and 1, p goes to q on 0, q goes to r on 1.',
          caption: 'An NFA for "ends in $01$": loop in $p$ for a while, then *guess* that the current $0$ is the second-to-last symbol. A wrong guess just dies (no arrow), which is harmless.',
          maxWidth: 420,
        },
        {
          type: 'p',
          text: 'NFAs are no more powerful than DFAs. The [[dm-subset-construction]] simulates all guesses at once: a DFA state is the **set** of NFA states we could be in. Start with $\\{p\\}$. From a set $T$ on symbol $a$, go to the set of all states reachable from some member of $T$ by an $a$-arrow. A set is accepting if it contains an accepting NFA state.',
        },
        {
          type: 'table',
          headers: ['DFA state (set)', 'on $0$', 'on $1$', 'accepting?'],
          rows: [
            ['$\\{p\\}$ (start)', '$\\{p, q\\}$', '$\\{p\\}$', 'no'],
            ['$\\{p, q\\}$', '$\\{p, q\\}$', '$\\{p, r\\}$', 'no'],
            ['$\\{p, r\\}$', '$\\{p, q\\}$', '$\\{p\\}$', 'yes (contains $r$)'],
          ],
          caption: 'Only three of the $2^3 = 8$ subsets are reachable. Rename them $q_0, q_1, q_2$ and you get exactly the DFA from earlier in this lesson.',
        },
        {
          type: 'derivation',
          title: 'Computing the row for $\\{p, q\\}$',
          steps: [
            { tex: '\\text{on } 0: \\; \\{p, q\\} \\to \\{p, q\\} \\cup \\emptyset = \\{p, q\\}', why: 'From $p$, a $0$ can lead to $p$ (loop) or $q$. From $q$ there is no $0$-arrow, contributing nothing.' },
            { tex: '\\text{on } 1: \\; \\{p, q\\} \\to \\{p\\} \\cup \\{r\\} = \\{p, r\\}', why: 'From $p$, a $1$ leads to $p$; from $q$, a $1$ leads to $r$. Take the union.' },
          ],
          result: 'Each DFA step tracks every NFA path at once, so the DFA accepts exactly when some NFA path does.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the price can be exponential',
          text: 'An NFA with $n$ states has $2^n$ subsets of states, so the DFA has at most $2^n$ states. Usually far fewer are reachable, but some languages really need the blow-up: "the $n$th symbol from the end is a $1$" has an $(n + 1)$-state NFA, while every DFA for it needs $2^n$ states (it must remember the last $n$ symbols). Nondeterminism buys **conciseness**, not new power.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'The subset construction is applied to an NFA with $5$ states. At most how many states can the resulting DFA have?',
      answer: '32',
      hint: 'Each DFA state is a set of NFA states.',
      explanation: 'Each DFA state is a subset of the $5$ NFA states, and a $5$-element set has $2^5 = 32$ subsets (including $\\emptyset$, the "dead" state reached when every guess has failed). So the DFA has at most $32$ states. In practice you only build the subsets that are reachable from the start set.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'truefalse',
      prompt: 'True or false: there is a language that some NFA accepts but no DFA accepts.',
      answer: false,
      explanation: 'False. The subset construction converts **every** NFA into a DFA accepting the same language. NFAs can be exponentially smaller, but they accept exactly the same class of languages, the [[dm-regular-language|regular languages]].',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Regular expressions and Kleene\'s theorem',
      blocks: [
        {
          type: 'p',
          text: 'State diagrams describe languages by machines. A [[dm-regular-expression]] describes them by a pattern. Over an alphabet $I$, the regular expressions are built from three base cases and three operations.',
        },
        {
          type: 'table',
          headers: ['Expression', 'Language it denotes', 'In code (regex syntax)'],
          rows: [
            ['$\\emptyset$', 'no strings at all', '—'],
            ['$\\varepsilon$', 'only the empty string', 'empty pattern'],
            ['$a$ (a symbol)', 'the one-symbol string $a$', '`a`'],
            ['$A \\cup B$ (union)', 'strings in $A$ or in $B$', '`A|B`'],
            ['$AB$ (concatenation)', 'a string from $A$ followed by one from $B$', '`AB`'],
            ['$A^*$ (Kleene star)', 'zero or more strings from $A$ joined together', '`A*`'],
          ],
        },
        {
          type: 'table',
          headers: ['Regular expression', 'Language'],
          rows: [
            ['$(0 \\cup 1)^*$', 'all bit strings, including $\\varepsilon$'],
            ['$(0 \\cup 1)^*01$', 'bit strings ending in $01$ (our DFA and NFA)'],
            ['$0^*10^*$', 'bit strings with exactly one $1$'],
            ['$(0 \\cup 1)^*1(0 \\cup 1)^*$', 'bit strings with at least one $1$'],
            ['$(00)^*$', 'strings of $0$s of even length'],
          ],
        },
        {
          type: 'theorem',
          name: 'Kleene\'s theorem',
          text: 'A language is accepted by some finite automaton (DFA or NFA) **if and only if** it is described by some regular expression. These are the **regular languages**.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the two descriptions match (intuition)',
          text: '**Regex to automaton:** build an NFA piece by piece. A symbol is one arrow. For $A \\cup B$, branch nondeterministically into the machine for $A$ or the one for $B$. For $AB$, connect the accepting states of $A$\'s machine to the start of $B$\'s. For $A^*$, loop from $A$\'s accepting states back to its start (and allow skipping it). Nondeterminism is exactly what makes these joins easy, and the subset construction then gives a DFA. **Automaton to regex:** remove states one at a time, relabelling the arrows that bypassed each removed state with regular expressions, until one arrow from start to accept remains.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Reading regular expressions',
          text: 'Star binds tightest, then concatenation, then union: $01^*$ means $0(1^*)$, not $(01)^*$, and $0 \\cup 1 0$ means $0 \\cup (10)$. Rosen writes union as $\\cup$; most other books and all programming languages use `|`.',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'mcq',
      prompt: 'Which regular expression describes exactly the bit strings that contain **exactly one** $1$?',
      options: [
        { text: '$(0 \\cup 1)^*1(0 \\cup 1)^*$', why: 'The starred parts may contain more $1$s, so this means "at least one $1$": $111$ matches.' },
        { text: '$0^*10^*$', correct: true, why: 'Any number of $0$s, then the single $1$, then any number of $0$s. Every string in the language has this shape, and nothing else does.' },
        { text: '$0^*1^*0^*$', why: 'The $1^*$ allows zero or several $1$s: it matches $000$ and $0110$.' },
        { text: '$10^*$', why: 'This forces the $1$ to come first, so it misses $010$ and $001$.' },
      ],
      explanation: 'A string with exactly one $1$ splits uniquely as (the $0$s before it)(the $1$)(the $0$s after it), and each block of $0$s, possibly empty, is described by $0^*$. So the language is $0^*10^*$. When checking a regex, test both directions: does every string in the language match, and does every match belong to the language?',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'State machines for enemy AI',
      blocks: [
        {
          type: 'p',
          text: 'Game AI is one of the most common places you will write a finite-state machine by hand. A guard is in one behaviour at a time: **Patrol** a route, **Chase** the player, **Attack** in range, **Flee** when badly hurt. Each behaviour is a state, the game events are the input alphabet, and the design document\'s "when X happens, switch to Y" rules are the transition function.',
        },
        {
          type: 'figure',
          svg: `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg"><path d="M132.0,136.8 Q190.6,125.4 244.4,67.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M244.4,67.0 L241.7,75.6 L236.0,70.4 Z" fill="currentColor"/><path d="M218.0,58.2 Q159.4,69.6 105.6,128.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M105.6,128.0 L108.3,119.4 L114.0,124.6 Z" fill="currentColor"/><path d="M275.6,67.0 Q329.4,125.4 388.0,136.8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M388.0,136.8 L379.3,139.0 L380.7,131.5 Z" fill="currentColor"/><path d="M414.4,128.0 Q360.6,69.6 302.0,58.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M302.0,58.2 L310.7,56.0 L309.3,63.5 Z" fill="currentColor"/><path d="M410.3,162.0 Q354.8,210.0 302.0,226.7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M302.0,226.7 L308.6,220.6 L310.9,227.9 Z" fill="currentColor"/><path d="M218.0,226.7 Q165.2,210.0 109.7,162.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M109.7,162.0 L118.4,164.4 L113.4,170.2 Z" fill="currentColor"/><rect x="48" y="128" width="84" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="90" y="150" text-anchor="middle" font-size="14" class="t-green">Patrol</text><line x1="90" y1="99" x2="90" y2="129" stroke="currentColor" stroke-width="1.6"/><path d="M90.0,129.0 L86.2,120.9 L93.8,120.9 Z" fill="currentColor"/><rect x="218" y="33" width="84" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="260" y="55" text-anchor="middle" font-size="14" class="t-orange">Chase</text><rect x="388" y="128" width="84" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="430" y="150" text-anchor="middle" font-size="14" class="t-red">Attack</text><rect x="218" y="223" width="84" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="260" y="245" text-anchor="middle" font-size="14" class="t-purple">Flee</text><text x="200.1" y="137.4" text-anchor="middle" font-size="13">seesPlayer</text><text x="319.9" y="137.4" text-anchor="middle" font-size="13">inRange</text><text x="368.1" y="229.3" text-anchor="middle" font-size="13">lowHealth</text><text x="156.7" y="220.6" text-anchor="middle" font-size="13">safe</text><text x="150" y="72" text-anchor="end" font-size="13">lostPlayer</text><text x="370" y="72" text-anchor="start" font-size="13">outOfRange</text></svg>`,
          alt: 'Enemy AI state diagram. Patrol (start) goes to Chase on seesPlayer. Chase goes to Attack on inRange and back to Patrol on lostPlayer. Attack goes back to Chase on outOfRange and to Flee on lowHealth. Flee goes to Patrol on safe.',
          caption: 'An enemy-AI state machine. Events that have no arrow out of the current state are ignored: a fleeing guard does not care that it sees the player.',
          maxWidth: 500,
        },
        {
          type: 'code',
          title: 'enemy.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

enum class State { Patrol, Chase, Attack, Flee };
enum class Event { SeesPlayer, LostPlayer, InRange, OutOfRange, LowHealth, Safe };

const char* name(State s) {
    switch (s) {
        case State::Patrol: return "Patrol";
        case State::Chase:  return "Chase";
        case State::Attack: return "Attack";
        case State::Flee:   return "Flee";
    }
    return "?";
}

const char* eventNames[] = {"seesPlayer", "lostPlayer", "inRange", "outOfRange", "lowHealth", "safe"};

// The transition function f(state, event). Events with no arrow are ignored.
State next(State s, Event e) {
    switch (s) {
        case State::Patrol:
            if (e == Event::SeesPlayer) return State::Chase;
            break;
        case State::Chase:
            if (e == Event::InRange) return State::Attack;
            if (e == Event::LostPlayer) return State::Patrol;
            break;
        case State::Attack:
            if (e == Event::OutOfRange) return State::Chase;
            if (e == Event::LowHealth) return State::Flee;
            break;
        case State::Flee:
            if (e == Event::Safe) return State::Patrol;
            break;
    }
    return s;  // no transition: stay put
}

int main() {
    std::vector<Event> events = {Event::InRange, Event::SeesPlayer, Event::InRange,
                                 Event::OutOfRange, Event::InRange, Event::LowHealth,
                                 Event::SeesPlayer, Event::Safe};
    State s = State::Patrol;
    std::printf("start: %s\\n", name(s));
    for (Event e : events) {
        State t = next(s, e);
        std::printf("%-6s --%-10s--> %s\\n", name(s), eventNames[static_cast<int>(e)], name(t));
        s = t;
    }
}`,
          output: `start: Patrol
Patrol --inRange   --> Patrol
Patrol --seesPlayer--> Chase
Chase  --inRange   --> Attack
Attack --outOfRange--> Chase
Chase  --inRange   --> Attack
Attack --lowHealth --> Flee
Flee   --seesPlayer--> Flee
Flee   --safe      --> Patrol`,
          annotations: [
            { lines: '4-5', text: 'States $S$ and inputs $I$ as `enum class` types: the compiler rejects invalid values.' },
            { lines: '20-38', text: 'The transition function $f : S \\times I \\to S$ as a `switch`. Missing arrows fall through to "stay in the same state", which makes $f$ total.' },
            { lines: '46-50', text: 'The game loop feeds events in; the first `inRange` is ignored because a patrolling guard has not seen the player yet.' },
          ],
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Where this goes in a real engine',
          text: 'In an engine, each state also has **enter**, **update** and **exit** actions (start the run animation on entering Chase, recompute the path to the player every update), which is a Moore-style output. As the number of states grows, transitions multiply, so studios move to **hierarchical** state machines (a "Combat" superstate containing Chase and Attack) or **behaviour trees**. Unreal Engine\'s Behavior Trees and animation state machines, and Unity\'s Animator, are all descendants of this lesson\'s diagrams.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'mcq',
      prompt: 'The guard starts in **Patrol** and receives the events `seesPlayer`, `inRange`, `lostPlayer`, `lowHealth`, `outOfRange`. In which state does it end?',
      figure: {
        type: 'figure',
        svg: `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg"><path d="M132.0,136.8 Q190.6,125.4 244.4,67.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M244.4,67.0 L241.7,75.6 L236.0,70.4 Z" fill="currentColor"/><path d="M218.0,58.2 Q159.4,69.6 105.6,128.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M105.6,128.0 L108.3,119.4 L114.0,124.6 Z" fill="currentColor"/><path d="M275.6,67.0 Q329.4,125.4 388.0,136.8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M388.0,136.8 L379.3,139.0 L380.7,131.5 Z" fill="currentColor"/><path d="M414.4,128.0 Q360.6,69.6 302.0,58.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M302.0,58.2 L310.7,56.0 L309.3,63.5 Z" fill="currentColor"/><path d="M410.3,162.0 Q354.8,210.0 302.0,226.7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M302.0,226.7 L308.6,220.6 L310.9,227.9 Z" fill="currentColor"/><path d="M218.0,226.7 Q165.2,210.0 109.7,162.0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M109.7,162.0 L118.4,164.4 L113.4,170.2 Z" fill="currentColor"/><rect x="48" y="128" width="84" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="90" y="150" text-anchor="middle" font-size="14" class="t-green">Patrol</text><line x1="90" y1="99" x2="90" y2="129" stroke="currentColor" stroke-width="1.6"/><path d="M90.0,129.0 L86.2,120.9 L93.8,120.9 Z" fill="currentColor"/><rect x="218" y="33" width="84" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="260" y="55" text-anchor="middle" font-size="14" class="t-orange">Chase</text><rect x="388" y="128" width="84" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="430" y="150" text-anchor="middle" font-size="14" class="t-red">Attack</text><rect x="218" y="223" width="84" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="260" y="245" text-anchor="middle" font-size="14" class="t-purple">Flee</text><text x="200.1" y="137.4" text-anchor="middle" font-size="13">seesPlayer</text><text x="319.9" y="137.4" text-anchor="middle" font-size="13">inRange</text><text x="368.1" y="229.3" text-anchor="middle" font-size="13">lowHealth</text><text x="156.7" y="220.6" text-anchor="middle" font-size="13">safe</text><text x="150" y="72" text-anchor="end" font-size="13">lostPlayer</text><text x="370" y="72" text-anchor="start" font-size="13">outOfRange</text></svg>`,
        alt: 'The enemy AI state diagram: Patrol, Chase, Attack, Flee.',
        maxWidth: 440,
      },
      options: [
        { text: 'Patrol', why: '`lostPlayer` only has an arrow out of Chase. The guard is in Attack when it arrives, so it is ignored.' },
        { text: 'Chase', why: '`outOfRange` would return Attack to Chase, but by then the guard is already in Flee, where `outOfRange` has no arrow.' },
        { text: 'Attack', why: 'The guard leaves Attack on `lowHealth`.' },
        { text: 'Flee', correct: true, why: 'Patrol → Chase → Attack, then `lostPlayer` is ignored, `lowHealth` → Flee, and `outOfRange` is ignored in Flee.' },
      ],
      explanation: 'Follow one arrow per event, staying put when the current state has no arrow for it: Patrol $\\xrightarrow{\\text{seesPlayer}}$ Chase $\\xrightarrow{\\text{inRange}}$ Attack $\\xrightarrow{\\text{lostPlayer}}$ Attack (ignored) $\\xrightarrow{\\text{lowHealth}}$ Flee $\\xrightarrow{\\text{outOfRange}}$ Flee (ignored). The ignored events are the classic source of "why didn\'t my enemy react?" bugs, which is why logging state transitions is a standard debugging tool.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'concept',
      title: 'Regular expressions in practice: std::regex',
      blocks: [
        {
          type: 'p',
          text: 'Programmers use regular expressions daily to validate input, search logs and parse text formats. C++11 added `<regex>`. The syntax extends the theory with conveniences that are all still regular: character classes such as `[A-Za-z]` (a union of symbols), `\\d` (a digit) and `\\w` (a letter, digit or underscore); `+` for "one or more" ($AA^*$); `?` for "optional" ($A \\cup \\varepsilon$); and `{m,n}` for "between $m$ and $n$ copies". Parentheses group and also **capture** the matched text.',
        },
        {
          type: 'code',
          title: 'regex.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <regex>
#include <string>

int main() {
    // Player names: a letter, then 2 to 15 letters, digits or underscores.
    const std::regex name(R"([A-Za-z][A-Za-z0-9_]{2,15})");
    for (std::string s : {"Agent47", "x", "Sgt_Rock", "9lives", "Battle Tank"})
        std::printf("%-12s %s\\n", s.c_str(),
                    std::regex_match(s, name) ? "valid" : "invalid");

    // Pull key=value pairs out of a save-file line.
    const std::string line = "hp=45;mp=12;gold=300";
    const std::regex pair(R"((\\w+)=(\\d+))");
    for (std::sregex_iterator it(line.begin(), line.end(), pair), end; it != end; ++it)
        std::printf("%s -> %d\\n", (*it)[1].str().c_str(), std::stoi((*it)[2].str()));
}`,
          output: `Agent47      valid
x            invalid
Sgt_Rock     valid
9lives       invalid
Battle Tank  invalid
hp -> 45
mp -> 12
gold -> 300`,
          annotations: [
            { lines: 7, text: 'A raw string `R"(...)"` avoids doubling every backslash. The pattern is one letter followed by $2$ to $15$ word characters, so names have $3$ to $16$ characters.' },
            { lines: 10, text: '`regex_match` requires the **whole** string to match, exactly like a DFA accepting or rejecting its entire input. `regex_search` instead looks for a matching substring.' },
            { lines: '14-16', text: 'Two capture groups: the key `(\\w+)` and the number `(\\d+)`. The iterator finds every match in the line.' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Library regexes are not always regular, or fast',
          text: 'Most regex libraries support **back-references** such as `(a+)b\\1` ("the same run of $a$s again"), which can describe non-regular languages, and they run patterns by backtracking rather than with a DFA. A badly written pattern like `(a+)+b` can then take exponential time on an input of many $a$s without a $b$ ("catastrophic backtracking"). `std::regex` is also notoriously slow, so do not run it every frame in a game loop; engines that need fast matching compile patterns to DFAs, which run in linear time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 16
    {
      kind: 'fill',
      prompt: 'Complete the `std::regex` pattern for weapon codes like `AK47` or `MP5`: exactly two uppercase letters followed by one to three digits.',
      template: 'R"([A-Z]___[0-9]___)"',
      templateIsCode: true,
      blanks: [{ answers: ['{2}'] }, { answers: ['{1,3}'] }],
      wordBank: ['{2}', '{1,3}', '+', '*', '{3}', '?'],
      hint: '`{n}` means exactly $n$ copies; `{m,n}` means between $m$ and $n$ copies.',
      explanation: '`[A-Z]{2}` is exactly two uppercase letters and `[0-9]{1,3}` is one to three digits, giving `[A-Z]{2}[0-9]{1,3}`. With `+` the pattern would allow any number of letters (`ABCD1`), with `*` it would also allow none, and with `{3}` it would demand exactly three digits and reject `MP5`. In the notation of this lesson, $[0\\text{–}9]\\{1,3\\}$ is shorthand for $D \\cup DD \\cup DDD$ where $D$ is the union of the ten digits, so the language is still regular.',
    },
  ],
  takeaways: [
    'A finite-state machine with output $(S, I, O, f, g, s_0)$ keeps a finite summary of its history; each input moves it to $f(s, x)$ and emits $g(s, x)$.',
    'A DFA $(S, I, f, s_0, F)$ accepts a string when the run ends in an accepting state (double circle); only the final state counts, and the set of accepted strings is its language.',
    'To design a DFA, decide what must be remembered: the remainder mod $3$ suffices to test divisibility by $3$. A finite automaton cannot count without bound, so $\\{0^n1^n\\}$ is not regular.',
    'An NFA may have several or no arrows per symbol and accepts if some path does; the subset construction gives an equivalent DFA with at most $2^n$ states.',
    'Regular expressions use union, concatenation and Kleene star; by Kleene\'s theorem they describe exactly the languages finite automata accept.',
    'Enemy AI is naturally an FSM (states = behaviours, inputs = events), and `std::regex` brings regular expressions to C++, with extensions that can make library regexes non-regular and slow.',
  ],
  reading: [
    {
      title: 'Robert Nystrom — Game Programming Patterns: State',
      url: 'https://gameprogrammingpatterns.com/state.html',
      source: 'book',
      note: 'A game programmer\'s walk from tangled `if` statements to finite-state machines, hierarchical states and pushdown automata.',
    },
    {
      title: 'Wikipedia — Deterministic finite automaton',
      url: 'https://en.wikipedia.org/wiki/Deterministic_finite_automaton',
      source: 'wikipedia',
      note: 'The formal definition, closure properties and DFA minimization.',
    },
    {
      title: 'Wikipedia — Powerset construction',
      url: 'https://en.wikipedia.org/wiki/Powerset_construction',
      source: 'wikipedia',
      note: 'The subset construction in detail, including the example that forces $2^n$ DFA states.',
    },
    {
      title: 'Wikipedia — Regular expression',
      url: 'https://en.wikipedia.org/wiki/Regular_expression',
      source: 'wikipedia',
      note: 'From Kleene\'s formal definition to the syntax of practical regex engines and the problems back-references cause.',
    },
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'Its state machine lectures use invariants to prove properties of state machines, a good next step after this lesson.',
    },
  ],
};
