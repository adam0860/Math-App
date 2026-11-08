import type { Lesson } from '../../types';

/** Exact P(at least two of n people share a birthday), 365 equally likely days. */
function birthday(n: number): number {
  let none = 1;
  for (let i = 0; i < n; i++) none *= (365 - i) / 365;
  return 1 - none;
}
const birthdayPoints = Array.from({ length: 35 }, (_, i) => 2 * i + 1).map((n) => ({
  x: n,
  y: Number(birthday(n).toFixed(6)),
  color: 'blue' as const,
}));

export const lesson: Lesson = {
  id: 'dm-probability',
  title: 'Probability and Sample Spaces',
  summary: 'Sample spaces, events and the axioms of probability; complements and unions; computing probabilities by counting (dice, cards, lotteries); the birthday problem and hash collisions; and estimating probabilities by Monte Carlo simulation in C++.',
  minutes: 19,
  objectives: [
    'Model a random experiment with a sample space and events, and compute $P(E) = |E|/|S|$ when outcomes are equally likely',
    'State the axioms of probability for a finite sample space and derive the complement and union rules from them',
    'Use the counting techniques of the previous unit to compute probabilities for dice, cards and lotteries',
    'Compute the birthday-problem probability and use it to estimate hash-collision risk',
    'Estimate a probability by Monte Carlo simulation and explain how its accuracy depends on the number of trials',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Sample spaces, events and equally likely outcomes',
      blocks: [
        {
          type: 'p',
          text: 'Probability turns uncertainty into numbers you can reason with — the drop chance of a legendary item, the odds that two keys collide in a hash table, the chance a randomized algorithm fails. In this unit, everything happens on a **finite** (or countable) set of possible outcomes, which is why it is called *discrete* probability, and the counting tools of the last unit do most of the work.',
        },
        {
          type: 'definition',
          term: 'Sample space and event',
          text: 'An **experiment** is a process with an uncertain result. Its [[dm-sample-space|sample space]] $S$ is the set of all possible outcomes. An [[dm-event|event]] is a subset $E \\subseteq S$; we say $E$ *occurs* if the outcome lies in $E$.',
        },
        {
          type: 'p',
          text: 'Roll two dice, one red and one blue. A good sample space is the set of ordered pairs $S = \\{1, \\dots, 6\\}^2$, with $|S| = 6 \\cdot 6 = 36$ outcomes (product rule). The event "the sum is $7$" is $E = \\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\}$.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 400 345" xmlns="http://www.w3.org/2000/svg"><text x="111.0" y="48" text-anchor="middle" font-size="14">1</text><text x="78" y="84.0" text-anchor="middle" font-size="14">1</text><text x="153.0" y="48" text-anchor="middle" font-size="14">2</text><text x="78" y="126.0" text-anchor="middle" font-size="14">2</text><text x="195.0" y="48" text-anchor="middle" font-size="14">3</text><text x="78" y="168.0" text-anchor="middle" font-size="14">3</text><text x="237.0" y="48" text-anchor="middle" font-size="14">4</text><text x="78" y="210.0" text-anchor="middle" font-size="14">4</text><text x="279.0" y="48" text-anchor="middle" font-size="14">5</text><text x="78" y="252.0" text-anchor="middle" font-size="14">5</text><text x="321.0" y="48" text-anchor="middle" font-size="14">6</text><text x="78" y="294.0" text-anchor="middle" font-size="14">6</text><rect x="92" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="111.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray">1,1</text><rect x="134" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="153.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray">1,2</text><rect x="176" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="195.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray">1,3</text><rect x="218" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="237.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray">1,4</text><rect x="260" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="279.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray">1,5</text><rect x="302" y="60" width="38" height="38" rx="6" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.8"/><text x="321.0" y="84.0" text-anchor="middle" font-size="12" class="t-blue">1,6</text><rect x="92" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="111.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray">2,1</text><rect x="134" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="153.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray">2,2</text><rect x="176" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="195.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray">2,3</text><rect x="218" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="237.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray">2,4</text><rect x="260" y="102" width="38" height="38" rx="6" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.8"/><text x="279.0" y="126.0" text-anchor="middle" font-size="12" class="t-blue">2,5</text><rect x="302" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="321.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray">2,6</text><rect x="92" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="111.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray">3,1</text><rect x="134" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="153.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray">3,2</text><rect x="176" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="195.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray">3,3</text><rect x="218" y="144" width="38" height="38" rx="6" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.8"/><text x="237.0" y="168.0" text-anchor="middle" font-size="12" class="t-blue">3,4</text><rect x="260" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="279.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray">3,5</text><rect x="302" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="321.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray">3,6</text><rect x="92" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="111.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray">4,1</text><rect x="134" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="153.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray">4,2</text><rect x="176" y="186" width="38" height="38" rx="6" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.8"/><text x="195.0" y="210.0" text-anchor="middle" font-size="12" class="t-blue">4,3</text><rect x="218" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="237.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray">4,4</text><rect x="260" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="279.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray">4,5</text><rect x="302" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="321.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray">4,6</text><rect x="92" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="111.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray">5,1</text><rect x="134" y="228" width="38" height="38" rx="6" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.8"/><text x="153.0" y="252.0" text-anchor="middle" font-size="12" class="t-blue">5,2</text><rect x="176" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="195.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray">5,3</text><rect x="218" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="237.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray">5,4</text><rect x="260" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="279.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray">5,5</text><rect x="302" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="321.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray">5,6</text><rect x="92" y="270" width="38" height="38" rx="6" class="f-blue s-blue" fill-opacity="0.25" stroke-width="1.8"/><text x="111.0" y="294.0" text-anchor="middle" font-size="12" class="t-blue">6,1</text><rect x="134" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="153.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray">6,2</text><rect x="176" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="195.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray">6,3</text><rect x="218" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="237.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray">6,4</text><rect x="260" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="279.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray">6,5</text><rect x="302" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray"/><text x="321.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray">6,6</text><text x="216" y="16" text-anchor="middle" font-size="13">second die</text><text x="30" y="184" text-anchor="middle" font-size="13" transform="rotate(-90 30 184)">first die</text><text x="216" y="334" text-anchor="middle" font-size="13" class="t-blue">sum = 7: 6 of the 36 outcomes</text></svg>',
          alt: 'A 6 by 6 grid of the outcomes of rolling two dice, labeled by first die (rows) and second die (columns). The six cells on the anti-diagonal, where the sum is 7, are highlighted in blue.',
          caption: 'The $36$ equally likely outcomes of two dice. The event "sum $= 7$" is the highlighted anti-diagonal.',
          maxWidth: 380,
        },
        {
          type: 'theorem',
          name: 'Probability with equally likely outcomes (Laplace)',
          tex: 'P(E) = \\frac{|E|}{|S|}',
          text: 'valid when $S$ is finite, nonempty, and every outcome is equally likely. For the dice: $P(\\text{sum} = 7) = 6/36 = 1/6$.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Equally likely is a modeling choice — choose outcomes that really are',
          text: 'The possible *sums* $2, 3, \\dots, 12$ form a perfectly good sample space with $11$ outcomes, but they are **not** equally likely: a sum of $2$ happens one way, a sum of $7$ six ways. Concluding $P(\\text{sum} = 7) = 1/11$ is a classic error. Treat the dice as distinguishable (red and blue), so each ordered pair has probability $1/36$, even if the real dice look identical.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'Two fair dice are rolled. What is the probability that the sum is $8$? Give an exact fraction.',
      hint: 'List the ordered pairs $(a, b)$ with $a + b = 8$ and $1 \\le a, b \\le 6$.',
      label: '$P =$',
      answer: '5/36',
      explanation: 'The ordered pairs are $(2,6), (3,5), (4,4), (5,3), (6,2)$: five outcomes out of $36$, so $P = 5/36 \\approx 0.139$. Note $(4,4)$ is counted once and $(3,5)$, $(5,3)$ twice — they really are different outcomes of the red and blue dice.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The axioms of probability',
      blocks: [
        {
          type: 'p',
          text: 'Outcomes are not always equally likely: a loaded die, a loot table where common items drop more often than legendary ones. The general definition assigns a probability to each outcome and asks for only two things.',
        },
        {
          type: 'definition',
          term: 'Probability distribution (finite or countable $S$)',
          text: 'A [[dm-probability-distribution|probability distribution]] on $S$ is a function $p : S \\to \\mathbb{R}$ with (1) $0 \\le p(s) \\le 1$ for every outcome $s$, and (2) $\\sum_{s \\in S} p(s) = 1$. The probability of an event is $P(E) = \\sum_{s \\in E} p(s)$.',
        },
        {
          type: 'p',
          text: 'The uniform distribution $p(s) = 1/|S|$ gives back Laplace\'s formula. A die loaded so that $6$ comes up with probability $1/3$ and the other faces equally often has $p(1) = \\cdots = p(5) = \\frac{1 - 1/3}{5} = \\frac{2}{15}$; then $P(\\text{even}) = \\frac{2}{15} + \\frac{2}{15} + \\frac{1}{3} = \\frac{3}{5}$.',
        },
        {
          type: 'p',
          text: 'Every other rule follows from these axioms. The key consequence is **additivity**: if $E \\cap F = \\emptyset$, then $P(E \\cup F) = P(E) + P(F)$, because the sum over $E \\cup F$ splits into the sum over $E$ plus the sum over $F$ — the sum rule, with probabilities as weights.',
        },
        {
          type: 'derivation',
          title: 'Deriving the complement and union rules',
          steps: [
            { tex: 'S = E \\cup \\overline{E}, \\quad E \\cap \\overline{E} = \\emptyset', why: 'Every outcome is either in $E$ or in its complement $\\overline{E} = S \\setminus E$, never both.' },
            { tex: '1 = P(S) = P(E) + P(\\overline{E})', why: 'Additivity, and $P(S) = \\sum_{s \\in S} p(s) = 1$ by the second axiom.' },
            { tex: 'P(\\overline{E}) = 1 - P(E)', why: 'Rearrange. In particular $P(\\emptyset) = 1 - P(S) = 0$.' },
            { tex: 'P(E \\cup F) = P(E) + P(F) - P(E \\cap F)', why: 'Each outcome of $E \\cap F$ contributes $p(s)$ to both $P(E)$ and $P(F)$; subtracting $P(E \\cap F)$ leaves it counted once — inclusion–exclusion with weights.' },
          ],
          result: 'Complement rule and union rule, valid for **every** distribution, uniform or not.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="420" height="190" rx="10" class="f-gray s-gray" fill-opacity="0.10" stroke-width="1.5"/><text x="24" y="34" font-size="15">S</text><circle cx="180" cy="105" r="72" class="f-blue s-blue" fill-opacity="0.22" stroke-width="2"/><circle cx="265" cy="105" r="72" class="f-orange s-orange" fill-opacity="0.22" stroke-width="2"/><text x="140" y="110" text-anchor="middle" font-size="16" class="t-blue">E</text><text x="305" y="110" text-anchor="middle" font-size="16" class="t-orange">F</text><text x="222" y="110" text-anchor="middle" font-size="13">E ∩ F</text><text x="380" y="185" text-anchor="middle" font-size="13" class="t-gray">outside E: Ē</text><text x="220" y="222" text-anchor="middle" font-size="13">P(E ∪ F) = P(E) + P(F) − P(E ∩ F),   P(Ē) = 1 − P(E)</text></svg>',
          alt: 'A shaded rectangle S containing two overlapping circles E and F, with the overlap labeled E intersect F and the area outside E labeled E bar. Below: P(E union F) = P(E) + P(F) − P(E intersect F), and P(E bar) = 1 − P(E).',
          caption: 'Events are sets, so set operations become probability rules: "or" is $\\cup$, "and" is $\\cap$, "not" is the complement.',
          maxWidth: 440,
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'A loot table is a probability distribution',
          text: 'A drop table such as `{common: 0.70, rare: 0.25, legendary: 0.05}` is exactly a distribution $p$ on $S = \\{\\text{common}, \\text{rare}, \\text{legendary}\\}$. The axioms are the sanity checks your code should assert: no negative weights, and the weights sum to $1$ (or, with integer weights, you divide by their sum). The next lessons compute what players should *expect* from such a table.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'order',
      prompt: 'Arrange the proof that $P(\\overline{E}) = 1 - P(E)$ from the axioms.',
      lines: [
        'The events $E$ and $\\overline{E}$ are disjoint and $E \\cup \\overline{E} = S$.',
        'By additivity for disjoint events, $P(S) = P(E) + P(\\overline{E})$.',
        'By the axioms, $P(S) = \\sum_{s \\in S} p(s) = 1$.',
        'Therefore $P(E) + P(\\overline{E}) = 1$, so $P(\\overline{E}) = 1 - P(E)$. $\\blacksquare$',
      ],
      explanation: 'First establish the set facts (disjoint, union is everything), then apply additivity, then the normalization axiom, then solve. Each step uses only what came before — the hallmark of a clean axiomatic proof.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'If $P(E) = 0.6$ and $P(F) = 0.5$, then $E$ and $F$ cannot be disjoint.',
      answer: true,
      explanation: 'If they were disjoint, additivity would give $P(E \\cup F) = 0.6 + 0.5 = 1.1 > 1$, which is impossible since every probability is at most $1$. In fact the union rule forces $P(E \\cap F) = P(E) + P(F) - P(E \\cup F) \\ge 1.1 - 1 = 0.1$: the events must overlap with probability at least $0.1$.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: '"At least one": complements in action',
      blocks: [
        {
          type: 'p',
          text: 'Seventeenth-century gamblers bet that a six would appear in four rolls of a die. Is that a good bet? "At least one six" is a messy union of overlapping events (six on roll 1, on roll 2, …). Its complement, "no six at all", is a clean product.',
        },
        {
          type: 'derivation',
          title: 'P(at least one 6 in 4 rolls)',
          steps: [
            { tex: '|S| = 6^4 = 1296', why: 'Outcomes are sequences of $4$ rolls, all equally likely.' },
            { tex: '|\\text{no six}| = 5^4 = 625', why: 'Each roll avoids $6$ in $5$ ways (product rule).' },
            { tex: 'P(\\text{at least one } 6) = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 0.5177', why: 'Complement rule.' },
          ],
          result: 'Slightly better than even — the gamblers were right to like this bet.',
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'The Chevalier de Méré\'s puzzle',
          text: 'The gambler de Méré reasoned that rolling a *double six* in $24$ throws of two dice should be just as good, since $24/36 = 4/6$. He lost money. The complement shows why: $1 - (35/36)^{24} \\approx 0.4914 < 0.5$. He asked Blaise Pascal, whose letters with Pierre de Fermat in 1654 are often called the birth of probability theory.',
        },
        {
          type: 'p',
          text: 'Unions of overlapping events use the union rule. Draw one card from a standard deck: $P(\\text{heart or face card}) = \\frac{13}{52} + \\frac{12}{52} - \\frac{3}{52} = \\frac{22}{52} = \\frac{11}{26}$, subtracting the $3$ heart face cards counted twice.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Adding probabilities of overlapping events',
          text: 'The tempting answer for four rolls is $4 \\cdot \\frac{1}{6} = \\frac{2}{3}$. Push it further: with $7$ rolls it would give $\\frac{7}{6} > 1$ — impossible. Adding is only valid for **disjoint** events, and "six on roll $1$" and "six on roll $2$" can both happen.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'error',
      prompt: 'A player wants the chance of opening at least one rare chest in $3$ tries, where each chest is rare with probability $0.2$ independently. Tap the first wrong line.',
      lines: [
        'Each try is rare with probability $0.2$, so it is *not* rare with probability $0.8$.',
        'The event "at least one rare" is the union of "try 1 rare", "try 2 rare", "try 3 rare".',
        'By additivity, $P(\\text{at least one rare}) = 0.2 + 0.2 + 0.2 = 0.6$.',
        'So the player has a $60\\%$ chance.',
      ],
      errorLines: [3],
      explanation: 'Additivity requires **disjoint** events, but two tries can both be rare. Use the complement: $P(\\text{no rare}) = 0.8^3 = 0.512$, so $P(\\text{at least one}) = 1 - 0.512 = 0.488$. (Inclusion–exclusion agrees: $3(0.2) - 3(0.04) + 0.008 = 0.488$.) The naive sum overestimates because it counts the double- and triple-rare outcomes several times.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Counting your way to probabilities: cards and lotteries',
      blocks: [
        {
          type: 'p',
          text: 'With equally likely outcomes, a probability is **a count divided by a count**. The whole previous unit becomes a probability toolkit: count the sample space, count the event, divide. The only rule: count both with the **same model** (both ordered, or both unordered).',
        },
        {
          type: 'derivation',
          title: 'A 6/49 lottery: you pick 6 numbers, 6 are drawn. P(exactly 3 match)?',
          steps: [
            { tex: '|S| = \\binom{49}{6} = 13{,}983{,}816', why: 'The draw is an unordered set of $6$ from $49$, each set equally likely.' },
            { tex: '\\binom{6}{3} = 20', why: 'Which $3$ of your $6$ numbers are among the drawn ones.' },
            { tex: '\\binom{43}{3} = 12{,}341', why: 'The other $3$ drawn numbers must come from the $43$ numbers you did **not** pick — otherwise you would have more than $3$ matches.' },
            { tex: 'P = \\frac{20 \\cdot 12{,}341}{13{,}983{,}816} = \\frac{246{,}820}{13{,}983{,}816} \\approx 0.0177', why: 'Product rule for the event, divided by the size of the sample space.' },
          ],
          result: 'About $1$ in $57$. The jackpot (all $6$) is $1/13{,}983{,}816$.',
        },
        {
          type: 'p',
          text: 'Poker works the same way: $P(\\text{full house}) = 3744 / 2{,}598{,}960 \\approx 0.00144$, using the counts from the permutations lesson. And complements still help: the chance a $5$-card hand contains **at least one ace** is $1 - \\binom{48}{5}/\\binom{52}{5} \\approx 0.341$.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Ordered or unordered — just be consistent',
          text: 'Drawing two cards, you can count ordered pairs ($52 \\cdot 51$ outcomes) or unordered pairs ($\\binom{52}{2}$ outcomes). Both give the same probability **as long as the event is counted the same way**: two aces is $4 \\cdot 3$ ordered pairs or $\\binom{4}{2}$ unordered ones, and $\\frac{12}{2652} = \\frac{6}{1326}$. Mixing an ordered numerator with an unordered denominator is a classic factor-of-$k!$ error.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'Two cards are dealt from a well-shuffled $52$-card deck. What is the probability that both are aces? Give an exact fraction or a decimal to $4$ places.',
      hint: 'Unordered: $\\binom{4}{2}$ good pairs out of $\\binom{52}{2}$.',
      label: '$P =$',
      answer: '1/221',
      minDecimals: 4,
      explanation: '$\\binom{4}{2} / \\binom{52}{2} = 6/1326 = 1/221 \\approx 0.0045$. Ordered: $\\frac{4 \\cdot 3}{52 \\cdot 51} = \\frac{12}{2652} = \\frac{1}{221}$ — the same, as it must be. (In the next lesson you will get it a third way, as $\\frac{4}{52} \\cdot \\frac{3}{51}$.)',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'concept',
      title: 'The birthday problem and hash collisions',
      blocks: [
        {
          type: 'p',
          text: 'The pigeonhole principle guarantees a shared birthday among $367$ people. But how many people make a shared birthday **likely**? Assume $365$ equally likely birthdays (ignore February 29) and independent people, so a room of $n$ people is a uniformly random sequence in $\\{1, \\dots, 365\\}^n$.',
        },
        {
          type: 'derivation',
          title: 'P(some two of $n$ people share a birthday)',
          steps: [
            { tex: '|S| = 365^n', why: 'Each person independently has one of $365$ birthdays.' },
            { tex: '|\\text{all different}| = 365 \\cdot 364 \\cdots (365 - n + 1) = P(365, n)', why: 'Person $1$ has $365$ choices, person $2$ must avoid one day, person $3$ must avoid two, … — a $k$-permutation count.' },
            { tex: 'P(\\text{shared}) = 1 - \\frac{365 \\cdot 364 \\cdots (365 - n + 1)}{365^n} = 1 - \\prod_{i=0}^{n-1}\\left(1 - \\frac{i}{365}\\right)', why: 'Complement rule, then split the fraction into $n$ factors.' },
            { tex: 'n = 23: \\quad P \\approx 0.5073', why: 'Multiply the $23$ factors (a computer helps).' },
          ],
          result: 'With just $23$ people, a shared birthday is more likely than not.',
        },
        {
          type: 'graph',
          x: [0, 72],
          y: [0, 1.05],
          xStep: 10,
          yStep: 0.25,
          height: 290,
          functions: [{ expr: '1 - e^(-x(x - 1)/730)', color: 'gray', dashed: true, label: 'approximation $1 - e^{-n(n-1)/730}$', domain: [1, 72] }],
          points: birthdayPoints,
          hlines: [{ y: 0.5, label: '50%', color: 'gray' }],
          vlines: [{ x: 'n', color: 'red', dashed: false }],
          sliders: [{ name: 'n', min: 1, max: 70, step: 1, value: 23, label: 'people $n$' }],
          readouts: [
            { label: 'pairs of people $\\binom{n}{2} =$', expr: 'n(n - 1)/2', digits: 0 },
            { label: '$P(\\text{shared}) \\approx 1 - e^{-n(n-1)/730} =$', expr: '1 - e^(-n(n - 1)/730)', digits: 4 },
          ],
          caption: 'Blue dots: the exact probability (odd $n$). Dashed: the approximation explained below, which tracks it closely. The curve crosses $50\\%$ at $n = 23$ and passes $99\\%$ by $n = 57$. The surprise comes from **pairs**: $23$ people form $\\binom{23}{2} = 253$ pairs, and any one of them can match.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Where the approximation comes from',
          text: 'For small $x$, $1 - x \\approx e^{-x}$ (the tangent line of $e^{-x}$ at $0$). So $\\prod_{i<n}(1 - i/N) \\approx e^{-(0 + 1 + \\cdots + (n-1))/N} = e^{-n(n-1)/(2N)}$ for $N$ equally likely values. Setting this to $1/2$ gives $n \\approx \\sqrt{2N\\ln 2} \\approx 1.18\\sqrt{N}$. Collisions become likely after about $\\sqrt{N}$ items, not $N$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Hash collisions arrive early',
          text: 'Replace "birthdays" by "hash values" and "$365$" by $N = 2^{32}$: after only about $1.18 \\sqrt{2^{32}} \\approx 77{,}000$ random keys, two of them probably share a 32-bit hash. That is why 32-bit IDs are unsafe as unique keys for large data sets, why cryptographic hashes need $256$ bits (so $\\sqrt{N} = 2^{128}$ is out of reach), and why a *birthday attack* on a $b$-bit hash costs about $2^{b/2}$ tries, not $2^b$.',
        },
        {
          type: 'table',
          headers: ['$n$', '10', '20', '23', '30', '40', '50', '57', '70'],
          rows: [['$P(\\text{shared})$', '$0.117$', '$0.411$', '$0.507$', '$0.706$', '$0.891$', '$0.970$', '$0.990$', '$0.999$']],
          caption: 'Exact values, computed from the product formula.',
        },
      ],
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'mcq',
      prompt: 'A game assigns each saved replay a random 32-bit ID ($N = 2^{32} \\approx 4.3$ billion possible IDs). Roughly how many replays must be saved before there is about a $50\\%$ chance that two share an ID?',
      options: [
        { text: 'About $2^{32} + 1 \\approx 4.3$ billion', why: 'That is the pigeonhole **guarantee**: with that many, a collision is certain. A collision becomes *likely* far earlier.' },
        { text: 'About $2^{31} \\approx 2.1$ billion', why: 'Half of $N$ is the intuitive guess, but it ignores that every **pair** of replays is a chance to collide, and the number of pairs grows like $n^2/2$.' },
        { text: 'About $77{,}000$', correct: true, why: '$n \\approx 1.18\\sqrt{N} = 1.18 \\cdot 2^{16} \\approx 77{,}000$. At that point there are about $3$ billion pairs, each colliding with probability $1/N$.' },
        { text: 'About $32$', why: 'That confuses the number of *bits* with the number of items. With $32$ items the collision chance is about $32 \\cdot 31 / (2 \\cdot 2^{32}) \\approx 10^{-7}$.' },
      ],
      explanation: 'The birthday bound: collisions become likely at about $\\sqrt{2N\\ln 2} \\approx 1.18\\sqrt{N}$ items. For $N = 2^{32}$ that is about $77{,}000$ (a precise calculation gives $77{,}164$). Lesson: if IDs must be unique, use $64$ or $128$ random bits, or a counter.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'Five strangers are in a room (365 equally likely birthdays). What is the probability that at least two of them share a birthday? Give a decimal to $4$ places.',
      hint: '$1 - \\frac{365 \\cdot 364 \\cdot 363 \\cdot 362 \\cdot 361}{365^5}$.',
      label: '$P \\approx$',
      answer: '1 - (365*364*363*362*361)/365^5',
      answerTex: '1 - \\frac{365 \\cdot 364 \\cdot 363 \\cdot 362 \\cdot 361}{365^5} \\approx 0.0271',
      tolerance: 0.0001,
      explanation: 'All different: $\\frac{365}{365} \\cdot \\frac{364}{365} \\cdot \\frac{363}{365} \\cdot \\frac{362}{365} \\cdot \\frac{361}{365} \\approx 0.9729$, so $P(\\text{shared}) \\approx 0.0271$. The approximation $1 - e^{-5 \\cdot 4/730} \\approx 0.0270$ is very close. With $5$ people there are only $10$ pairs, each matching with probability $1/365$, and $10/365 \\approx 0.027$ — a good estimate when the probability is small.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Monte Carlo: estimate by simulation',
      blocks: [
        {
          type: 'p',
          text: 'When a probability is hard to compute — a complicated game rule, a physics interaction, an AI decision — you can **simulate** the experiment many times and count. If the event occurs in $h$ of $N$ independent trials, the estimate is $\\hat{p} = h/N$. This is the [[dm-monte-carlo|Monte Carlo method]], named after the casino.',
        },
        {
          type: 'p',
          text: 'Why does it work? The law of large numbers (made precise in the expected-value lesson) says $h/N$ approaches the true probability $p$ as $N$ grows. How fast? The typical error is about $\\sqrt{p(1-p)/N} \\le \\frac{1}{2\\sqrt{N}}$. With $N = 10{,}000$ trials you get roughly $\\pm 0.005$; **each extra decimal digit costs $100$ times more trials**.',
        },
        {
          type: 'code',
          title: 'monte_carlo.cpp',
          runnable: true,
          code: `#include <array>
#include <cstdio>
#include <random>

std::mt19937_64 rng(2024);                       // fixed seed: same run every time

int uniform(int n) { return static_cast<int>(rng() % n); }  // 0..n-1 (bias ~1e-17)

bool sharedBirthday(int people) {
    std::array<bool, 365> seen{};
    for (int i = 0; i < people; ++i) {
        int day = uniform(365);
        if (seen[day]) return true;              // collision!
        seen[day] = true;
    }
    return false;
}

bool sixInFourRolls() {
    for (int i = 0; i < 4; ++i)
        if (uniform(6) == 5) return true;
    return false;
}

int main() {
    for (int trials : {100, 10'000, 1'000'000}) {
        int hits = 0;
        for (int t = 0; t < trials; ++t) hits += sharedBirthday(23);
        std::printf("birthday, 23 people, %7d trials: %.4f\\n", trials, double(hits) / trials);
    }
    int hits = 0;
    const int trials = 1'000'000;
    for (int t = 0; t < trials; ++t) hits += sixInFourRolls();
    std::printf("at least one six in 4 rolls:       %.4f\\n", double(hits) / trials);
    std::printf("exact values: 0.5073 and %.4f\\n", 671.0 / 1296);
}`,
          output: `birthday, 23 people,     100 trials: 0.4800
birthday, 23 people,   10000 trials: 0.5117
birthday, 23 people, 1000000 trials: 0.5071
at least one six in 4 rolls:       0.5176
exact values: 0.5073 and 0.5177`,
          annotations: [
            { lines: 5, text: '`std::mt19937_64` (the Mersenne Twister) produces the same sequence for the same seed on every compiler, so this output is reproducible. Games use fixed seeds the same way for replays and procedural generation.' },
            { lines: 7, text: '`rng() % n` is very slightly biased unless $n$ divides $2^{64}$; with a 64-bit generator the bias is about $n/2^{64}$, negligible here. (The expected-value lesson shows a case where this kind of bias is *not* negligible.)' },
            { lines: '9-16', text: 'The birthday experiment: draw days until one repeats. A `seen` array is a tiny hash set with $365$ buckets.' },
            { lines: '25-29', text: 'Watch the estimate settle: $100$ trials can be off by $0.05$; a million trials agree with the exact $0.5073$ to about $0.0005$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Use simulation to check your math (and your math to check simulations)',
          text: 'A quick simulation is the probability version of brute-force counting: if your formula says $0.51$ and the simulation of a million trials says $0.38$, one of them has a bug. Conversely, a simulation that disagrees with a known exact answer reveals bugs in the random-number code — a biased shuffle, an off-by-one in a range.',
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'fill',
      prompt: 'Monte Carlo accuracy.',
      template: 'The typical error of a Monte Carlo estimate shrinks like $1/\\sqrt{N}$. To make the error $10$ times smaller you need ___ times as many trials; to make it half as large you need ___ times as many.',
      blanks: [{ answers: ['100'] }, { answers: ['4'] }],
      wordBank: ['100', '4', '10', '2', '1000', '√10'],
      explanation: 'Error $\\propto 1/\\sqrt{N}$, so dividing the error by $c$ requires multiplying $\\sqrt{N}$ by $c$, i.e. $N$ by $c^2$: $10^2 = 100$ and $2^2 = 4$. This square-root law is why Monte Carlo is great for a rough answer and expensive for a precise one.',
    },
  ],
  takeaways: [
    'A sample space $S$ lists all outcomes; an event is a subset. With equally likely outcomes, $P(E) = |E|/|S|$ — choose outcomes that really are equally likely (ordered pairs of dice, not sums).',
    'Axioms: $p(s) \\ge 0$ and $\\sum_s p(s) = 1$. From them: additivity for disjoint events, $P(\\overline{E}) = 1 - P(E)$, and $P(E \\cup F) = P(E) + P(F) - P(E \\cap F)$.',
    'For "at least one", use the complement: $1 - P(\\text{none})$. Never add probabilities of overlapping events.',
    'Counting gives probabilities: lotteries $\\binom{6}{k}\\binom{43}{6-k}/\\binom{49}{6}$, poker hands, card draws — count numerator and denominator with the same model.',
    'Birthday problem: $1 - \\prod_{i<n}(1 - i/N)$; collisions become likely after about $1.18\\sqrt{N}$ items ($23$ people, about $77{,}000$ 32-bit hashes).',
    'Monte Carlo: estimate $p$ by $h/N$; the error shrinks like $1/\\sqrt{N}$.',
  ],
  reading: [
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The probability lectures build sample spaces with tree diagrams and analyze the birthday problem in detail.',
    },
    {
      title: 'Wikipedia — Birthday problem',
      url: 'https://en.wikipedia.org/wiki/Birthday_problem',
      source: 'wikipedia',
      note: 'Exact values, the approximations used in this lesson, and the connection to birthday attacks on hash functions.',
    },
    {
      title: 'Wikipedia — Monte Carlo method',
      url: 'https://en.wikipedia.org/wiki/Monte_Carlo_method',
      source: 'wikipedia',
      note: 'History (from the Manhattan Project to modern rendering) and the square-root law for the error.',
    },
  ],
};
