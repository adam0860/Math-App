import type { GraphBlock, Lesson } from '../../types';

// Binomial distribution b(k; n, p) for k = 0..30, drawn as stems with dots.
const KS = Array.from({ length: 31 }, (_, k) => k);
const binomialGraph: GraphBlock = {
  type: 'graph',
  x: [-0.5, 30.5],
  y: [0, 0.6],
  xStep: 5,
  yStep: 0.1,
  height: 300,
  segments: KS.map((k) => ({
    from: [k, 0] as [number, number],
    to: [k, `nCr(n, min(${k}, n))*p^${k}*(1 - p)^max(n - ${k}, 0)*(sign(n - ${k} + 0.5) + 1)/2`] as [number, string],
    color: 'purple' as const,
  })),
  points: KS.map((k) => ({ x: k, y: `nCr(n, ${k})*p^${k}*(1 - p)^(n - ${k})`, color: 'purple' as const })),
  vlines: [{ x: 'n*p', label: 'np', color: 'orange' }],
  sliders: [
    { name: 'n', min: 1, max: 30, step: 1, value: 20, label: 'trials $n$' },
    { name: 'p', min: 0.01, max: 0.99, step: 0.01, value: 0.1, label: 'success probability $p$' },
  ],
  readouts: [
    { label: '$P(X = 0) = (1-p)^n =$', expr: '(1 - p)^n', digits: 4 },
    { label: '$P(X \\ge 1) =$', expr: '1 - (1 - p)^n', digits: 4 },
    { label: 'mean $np =$', expr: 'n*p', digits: 2 },
  ],
  caption: 'The binomial distribution: the stem at $k$ has height $P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}$. Start at $n = 20$, $p = 0.1$ (twenty kills, $10\\%$ drop rate): zero drops still has probability $0.12$. Slide $p$ to $0.5$ for a symmetric bell like Pascal\'s row; push $p$ toward $0$ or $1$ to skew it. The peak always sits near $np$ (orange line).',
};

export const lesson: Lesson = {
  id: 'dm-conditional-bayes',
  title: "Conditional Probability, Independence and Bayes' Theorem",
  summary: "How new information changes probabilities: conditional probability, independence, the multiplication rule and the law of total probability; Bayes' theorem for medical tests and spam filters; the Monty Hall problem with a simulation; and Bernoulli trials and the binomial distribution.",
  minutes: 21,
  objectives: [
    'Compute $P(E \\mid F) = P(E \\cap F)/P(F)$ by restricting the sample space, and decide whether two events are independent',
    'Use the multiplication rule and probability trees for multi-stage experiments, and the law of total probability to combine cases',
    "Derive Bayes' theorem and apply it to diagnostic tests and spam filtering, avoiding base-rate neglect",
    'Analyze the Monty Hall problem exactly and confirm the answer by simulation',
    'Model repeated independent trials with the binomial distribution $\\binom{n}{k}p^k(1-p)^{n-k}$',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Conditional probability: shrinking the sample space',
      blocks: [
        {
          type: 'p',
          text: 'You roll two dice behind a screen and a friend tells you "the sum is $8$". What is now the probability that the first die shows $3$? Before the hint it was $1/6$. After it, only the $5$ outcomes with sum $8$ remain possible, and they are still equally likely to each other — so the answer is $1/5$.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 400 365" xmlns="http://www.w3.org/2000/svg"><text x="111.0" y="48" text-anchor="middle" font-size="14">1</text><text x="78" y="84.0" text-anchor="middle" font-size="14">1</text><text x="153.0" y="48" text-anchor="middle" font-size="14">2</text><text x="78" y="126.0" text-anchor="middle" font-size="14">2</text><text x="195.0" y="48" text-anchor="middle" font-size="14">3</text><text x="78" y="168.0" text-anchor="middle" font-size="14">3</text><text x="237.0" y="48" text-anchor="middle" font-size="14">4</text><text x="78" y="210.0" text-anchor="middle" font-size="14">4</text><text x="279.0" y="48" text-anchor="middle" font-size="14">5</text><text x="78" y="252.0" text-anchor="middle" font-size="14">5</text><text x="321.0" y="48" text-anchor="middle" font-size="14">6</text><text x="78" y="294.0" text-anchor="middle" font-size="14">6</text><rect x="92" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="111.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">1,1</text><rect x="134" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="153.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">1,2</text><rect x="176" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="195.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">1,3</text><rect x="218" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="237.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">1,4</text><rect x="260" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="279.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">1,5</text><rect x="302" y="60" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="321.0" y="84.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">1,6</text><rect x="92" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="111.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">2,1</text><rect x="134" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="153.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">2,2</text><rect x="176" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="195.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">2,3</text><rect x="218" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="237.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">2,4</text><rect x="260" y="102" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="279.0" y="126.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">2,5</text><rect x="302" y="102" width="38" height="38" rx="6" class="f-orange s-orange" fill-opacity="0.2" stroke-width="1.8"/><text x="321.0" y="126.0" text-anchor="middle" font-size="12" class="t-orange">2,6</text><rect x="92" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="111.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">3,1</text><rect x="134" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="153.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">3,2</text><rect x="176" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="195.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">3,3</text><rect x="218" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="237.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">3,4</text><rect x="260" y="144" width="38" height="38" rx="6" class="f-purple s-purple" fill-opacity="0.4" stroke-width="2.4"/><text x="279.0" y="168.0" text-anchor="middle" font-size="12" class="t-purple">3,5</text><rect x="302" y="144" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="321.0" y="168.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">3,6</text><rect x="92" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="111.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">4,1</text><rect x="134" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="153.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">4,2</text><rect x="176" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="195.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">4,3</text><rect x="218" y="186" width="38" height="38" rx="6" class="f-orange s-orange" fill-opacity="0.2" stroke-width="1.8"/><text x="237.0" y="210.0" text-anchor="middle" font-size="12" class="t-orange">4,4</text><rect x="260" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="279.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">4,5</text><rect x="302" y="186" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="321.0" y="210.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">4,6</text><rect x="92" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="111.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">5,1</text><rect x="134" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="153.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">5,2</text><rect x="176" y="228" width="38" height="38" rx="6" class="f-orange s-orange" fill-opacity="0.2" stroke-width="1.8"/><text x="195.0" y="252.0" text-anchor="middle" font-size="12" class="t-orange">5,3</text><rect x="218" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="237.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">5,4</text><rect x="260" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="279.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">5,5</text><rect x="302" y="228" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="321.0" y="252.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">5,6</text><rect x="92" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="111.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">6,1</text><rect x="134" y="270" width="38" height="38" rx="6" class="f-orange s-orange" fill-opacity="0.2" stroke-width="1.8"/><text x="153.0" y="294.0" text-anchor="middle" font-size="12" class="t-orange">6,2</text><rect x="176" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="195.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">6,3</text><rect x="218" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="237.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">6,4</text><rect x="260" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="279.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">6,5</text><rect x="302" y="270" width="38" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" class="s-gray" stroke-opacity="0.45"/><text x="321.0" y="294.0" text-anchor="middle" font-size="12" class="t-gray" fill-opacity="0.45">6,6</text><text x="216" y="16" text-anchor="middle" font-size="13">second die</text><text x="30" y="184" text-anchor="middle" font-size="13" transform="rotate(-90 30 184)">first die</text><text x="216" y="332" text-anchor="middle" font-size="13" class="t-orange">F: sum = 8 (5 outcomes)</text><text x="216" y="350" text-anchor="middle" font-size="13" class="t-purple">E ∩ F: sum 8 and first die 3 (1 outcome)</text></svg>',
          alt: 'The 6 by 6 grid of two-dice outcomes. Five cells with sum 8 are highlighted in orange: (2,6), (3,5), (4,4), (5,3), (6,2). The cell (3,5) is highlighted more strongly in purple. All other cells are faded.',
          caption: 'Conditioning on $F$ ("sum is $8$") throws away everything outside $F$. Within the new, smaller sample space, $E$ ("first die is $3$") is $1$ outcome of $5$.',
          maxWidth: 380,
        },
        {
          type: 'definition',
          term: 'Conditional probability',
          text: 'For events $E, F$ with $P(F) > 0$, the [[dm-conditional-probability|conditional probability]] of $E$ given $F$ is $$P(E \\mid F) = \\frac{P(E \\cap F)}{P(F)}.$$',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why divide by $P(F)$?',
          text: 'Knowing that $F$ happened makes outcomes outside $F$ impossible, so their probability must drop to $0$. The outcomes inside $F$ keep their **relative** likelihoods, but their probabilities must be scaled up so they add to $1$ again: multiply each by $1/P(F)$. Summing the rescaled probabilities over $E \\cap F$ gives exactly $P(E \\cap F)/P(F)$. With equally likely outcomes this is simply $|E \\cap F|/|F|$.',
        },
        {
          type: 'derivation',
          title: 'Given that at least one die shows 6, what is P(both show 6)?',
          steps: [
            { tex: 'F = \\{\\text{at least one } 6\\}, \\quad |F| = 36 - 25 = 11', why: 'Complement: $5 \\cdot 5 = 25$ outcomes have no $6$.' },
            { tex: 'E \\cap F = \\{(6,6)\\}, \\quad |E \\cap F| = 1', why: 'Both sixes is inside $F$ already.' },
            { tex: 'P(E \\mid F) = \\frac{1/36}{11/36} = \\frac{1}{11}', why: 'Definition; the $36$s cancel, leaving $|E \\cap F|/|F|$.' },
          ],
          result: '$1/11$, not $1/6$: "at least one die is a 6" does not tell you *which* die, so it is weaker information than "the first die is a 6" (which would give $1/6$).',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'A random 4-bit string (all $16$ equally likely) is known to contain **at least two** $1$s. What is the probability that it contains **exactly three** $1$s? Exact fraction.',
      hint: 'Count strings with at least two $1$s using $\\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4}$.',
      label: '$P =$',
      answer: '4/11',
      explanation: 'The condition leaves $\\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4} = 6 + 4 + 1 = 11$ equally likely strings. Of these, $\\binom{4}{3} = 4$ have exactly three $1$s. So $P = 4/11$. (Unconditionally it would be $4/16 = 1/4$; the information that there are at least two $1$s makes three more likely.)',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'The multiplication rule and independence',
      blocks: [
        {
          type: 'p',
          text: 'Rearranging the definition gives a way to compute probabilities of "this and then that" — the probability version of the product rule.',
        },
        {
          type: 'theorem',
          name: 'Multiplication rule',
          tex: 'P(E \\cap F) = P(F)\\,P(E \\mid F), \\qquad P(E_1 \\cap E_2 \\cap E_3) = P(E_1)\\,P(E_2 \\mid E_1)\\,P(E_3 \\mid E_1 \\cap E_2)',
          text: 'and so on for more events (the *chain rule*): multiply the probability of each stage given everything before it.',
        },
        {
          type: 'p',
          text: 'Deal two cards: $P(\\text{both aces}) = \\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{1}{221}$ — the same answer as counting in the previous lesson, now as a two-stage process. The second factor is conditional: after one ace is gone, $3$ aces remain among $51$ cards.',
        },
        {
          type: 'definition',
          term: 'Independent events',
          text: 'Events $E$ and $F$ are [[dm-independent-events|independent]] if $P(E \\cap F) = P(E)\\,P(F)$. When $P(F) > 0$ this is equivalent to $P(E \\mid F) = P(E)$: learning that $F$ happened does not change the probability of $E$.',
        },
        {
          type: 'list',
          items: [
            '**Separate physical processes** are modeled as independent: two dice, successive coin flips, successive draws **with** replacement, separate loot rolls.',
            '**Draws without replacement are dependent**: the first card changes what is left.',
            '**Independence can be a surprise.** "Sum is $7$" and "first die is $3$" are independent: $P(\\text{both}) = 1/36 = \\frac{1}{6} \\cdot \\frac{1}{6}$. But "sum is $8$" and "first die is $3$" are not: $1/36 \\ne \\frac{5}{36} \\cdot \\frac{1}{6}$. (Every first die value allows exactly one way to reach $7$, but not to reach $8$.) Always check the definition.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Disjoint is not independent',
          text: 'Disjoint events with positive probabilities are as **dependent** as possible: if one happens, the other cannot, so $P(E \\cap F) = 0 \\ne P(E)P(F)$. Students often confuse "they do not overlap" with "they do not affect each other".',
        },
        {
          type: 'deepdive',
          title: 'Pairwise independence is not enough',
          blocks: [
            {
              type: 'p',
              text: 'Flip two fair coins. Let $A$ = "first is heads", $B$ = "second is heads", $C$ = "both coins agree". Each has probability $1/2$ and each pair is independent ($P(A \\cap C) = P(HH) = 1/4$, and so on). But $P(A \\cap B \\cap C) = P(HH) = 1/4 \\ne \\frac{1}{8}$: once you know $A$ and $B$, you know $C$. **Mutual** independence of several events requires the product formula for every subcollection.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'truefalse',
      prompt: 'If $E$ and $F$ are disjoint events with $P(E) > 0$ and $P(F) > 0$, then $E$ and $F$ are independent.',
      answer: false,
      explanation: 'Disjoint means $P(E \\cap F) = 0$, but independence would need $P(E \\cap F) = P(E)P(F) > 0$. So disjoint events with positive probability are always **dependent**: knowing $E$ occurred tells you for certain that $F$ did not. Example: on one die roll, "roll a $1$" and "roll a $2$".',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'mcq',
      prompt: 'Two fair dice are rolled. Which pair of events is **independent**?',
      options: [
        { text: '"The sum is $8$" and "the first die shows $3$"', why: '$P(\\text{both}) = 1/36$, but $P(\\text{sum } 8)P(\\text{first } 3) = \\frac{5}{36} \\cdot \\frac{1}{6} = \\frac{5}{216} \\ne \\frac{1}{36}$. Dependent.' },
        { text: '"At least one die shows $6$" and "the dice show the same number"', why: '$P(\\text{both}) = P((6,6)) = 1/36$, but $\\frac{11}{36} \\cdot \\frac{6}{36} = \\frac{66}{1296} \\ne \\frac{36}{1296}$. Dependent.' },
        { text: '"The sum is $7$" and "the first die shows $3$"', correct: true, why: '$P(\\text{both}) = P((3,4)) = 1/36 = \\frac{6}{36} \\cdot \\frac{6}{36}$. Whatever the first die shows, exactly one second-die value makes the sum $7$, so the first die carries no information about "sum is $7$".' },
        { text: '"The first die shows $6$" and "the sum is $12$"', why: '$P(\\text{sum } 12 \\mid \\text{first } 6) = 1/6$, but $P(\\text{sum } 12) = 1/36$. Knowing the first die is $6$ makes $12$ six times more likely. Dependent.' },
      ],
      explanation: 'Check the definition, $P(E \\cap F) = P(E)P(F)$, by counting. Intuition is unreliable here: "sum is $7$" feels connected to the first die, yet it is independent of it, while "sum is $8$" is not.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'Probability trees and the law of total probability',
      blocks: [
        {
          type: 'p',
          text: 'Multi-stage experiments are easiest to read as a **probability tree**: label each branch with the probability of that step *given* the path so far. By the multiplication rule, the probability of a complete path is the product along its branches; by additivity, the probability of an event is the sum over the paths that produce it.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 540 290" xmlns="http://www.w3.org/2000/svg"><line x1="46.3" y1="146.9" x2="160.0" y2="90.0" stroke="currentColor" stroke-width="1.6"/><line x1="46.3" y1="153.1" x2="160.0" y2="210.0" stroke="currentColor" stroke-width="1.6"/><line x1="250.0" y1="62.6" x2="325.0" y2="47.2" stroke="currentColor" stroke-width="1.6"/><line x1="250.0" y1="87.4" x2="325.0" y2="102.8" stroke="currentColor" stroke-width="1.6"/><line x1="250.0" y1="212.6" x2="325.0" y2="197.2" stroke="currentColor" stroke-width="1.6"/><line x1="250.0" y1="237.4" x2="325.0" y2="252.8" stroke="currentColor" stroke-width="1.6"/><circle cx="40" cy="150" r="7" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.6"/><rect x="130" y="60" width="120" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-blue"/><text x="190" y="80" text-anchor="middle" font-size="14" class="t-blue">normal chest</text><rect x="130" y="210" width="120" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-purple"/><text x="190" y="230" text-anchor="middle" font-size="14" class="t-purple">elite chest</text><rect x="325" y="26" width="70" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="360" y="45" text-anchor="middle" font-size="14" class="t-green">rare</text><rect x="325" y="96" width="70" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="360" y="115" text-anchor="middle" font-size="14">not rare</text><rect x="325" y="176" width="70" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="360" y="195" text-anchor="middle" font-size="14" class="t-green">rare</text><rect x="325" y="246" width="70" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="360" y="265" text-anchor="middle" font-size="14">not rare</text><text x="102.8" y="107.4" text-anchor="middle" font-size="13">0.7</text><text x="102.8" y="201.6" text-anchor="middle" font-size="13">0.3</text><text x="278.4" y="47.0" text-anchor="middle" font-size="13">0.05</text><text x="278.4" y="112.0" text-anchor="middle" font-size="13">0.95</text><text x="278.4" y="197.0" text-anchor="middle" font-size="13">0.2</text><text x="278.4" y="262.0" text-anchor="middle" font-size="13">0.8</text><text x="405" y="45" text-anchor="start" font-size="13" class="t-green">0.7 · 0.05 = 0.035</text><text x="405" y="115" text-anchor="start" font-size="13" class="t-gray">0.7 · 0.95 = 0.665</text><text x="405" y="195" text-anchor="start" font-size="13" class="t-green">0.3 · 0.2 = 0.06</text><text x="405" y="265" text-anchor="start" font-size="13" class="t-gray">0.3 · 0.8 = 0.24</text></svg>',
          alt: 'A probability tree. From the root, a branch labeled 0.7 leads to normal chest and one labeled 0.3 to elite chest. Normal chest branches to rare (0.05) and not rare (0.95); elite chest to rare (0.2) and not rare (0.8). Leaf products: 0.035, 0.665, 0.06, 0.24.',
          caption: 'A dungeon spawns a normal chest $70\\%$ of the time and an elite chest $30\\%$ of the time; their rare-drop rates differ. Path probabilities are products, and they add to $1$.',
          maxWidth: 500,
        },
        {
          type: 'theorem',
          name: 'Law of total probability',
          tex: 'P(E) = \\sum_{i} P(E \\mid F_i)\\,P(F_i)',
          text: 'whenever the events $F_1, F_2, \\dots$ **partition** $S$: they are pairwise disjoint, cover $S$, and each has positive probability. With two cases: $P(E) = P(E \\mid F)P(F) + P(E \\mid \\overline{F})P(\\overline{F})$.',
        },
        {
          type: 'derivation',
          title: 'P(rare drop) for the chests',
          steps: [
            { tex: 'P(R) = P(R \\cap N) + P(R \\cap L)', why: 'Every chest is normal ($N$) or elite ($L$), never both: split $R$ into two disjoint pieces.' },
            { tex: '= P(R \\mid N)P(N) + P(R \\mid L)P(L)', why: 'Multiplication rule on each piece.' },
            { tex: '= 0.05 \\cdot 0.7 + 0.2 \\cdot 0.3 = 0.035 + 0.06 = 0.095', why: 'Read the numbers off the tree: add the two green leaves.' },
          ],
          result: 'Overall, $9.5\\%$ of chests drop a rare item — a weighted average of $5\\%$ and $20\\%$, weighted by how often each chest appears.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'numeric',
      prompt: 'A zone spawns three enemy types: grunts ($50\\%$ of spawns, drop rate $2\\%$), brutes ($30\\%$, drop rate $5\\%$) and elites ($20\\%$, drop rate $10\\%$). What is the probability that a random spawn drops the item? Exact fraction or decimal.',
      hint: 'Law of total probability with three cases.',
      label: '$P =$',
      answer: '9/200',
      explanation: '$P(\\text{drop}) = 0.02 \\cdot 0.5 + 0.05 \\cdot 0.3 + 0.10 \\cdot 0.2 = 0.010 + 0.015 + 0.020 = 0.045 = 9/200$. The three enemy types partition the spawns, so the law applies. Note that the answer lies between the smallest and largest drop rates, as a weighted average must.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: "Bayes' theorem: reasoning backward",
      blocks: [
        {
          type: 'p',
          text: 'The tree gives probabilities **forward**: chest type, then drop. Often you observe the outcome and want to reason **backward**: "I got a rare drop — how likely is it that this was an elite chest?" Reversing a conditional probability is what [[dm-bayes-theorem|Bayes\' theorem]] does.',
        },
        {
          type: 'theorem',
          name: "Bayes' theorem",
          tex: 'P(F \\mid E) = \\frac{P(E \\mid F)\\,P(F)}{P(E)} = \\frac{P(E \\mid F)\\,P(F)}{P(E \\mid F)\\,P(F) + P(E \\mid \\overline{F})\\,P(\\overline{F})}',
          text: 'Proof: by the definition and the multiplication rule, $P(F \\mid E)P(E) = P(E \\cap F) = P(E \\mid F)P(F)$; divide by $P(E)$, and expand $P(E)$ by the law of total probability.',
        },
        {
          type: 'p',
          text: 'For the chests: $P(L \\mid R) = \\frac{0.2 \\cdot 0.3}{0.095} = \\frac{0.06}{0.095} = \\frac{12}{19} \\approx 0.63$. Elite chests are only $30\\%$ of chests but supply $63\\%$ of rare drops.',
        },
        {
          type: 'heading',
          text: 'The medical test that is "99% accurate"',
        },
        {
          type: 'p',
          text: 'A disease affects $1\\%$ of people. A test catches $99\\%$ of sick people (sensitivity) but also flags $5\\%$ of healthy people (false positives). You test positive. How worried should you be? Most people — including many doctors in published studies — guess around $95\\%$.',
        },
        {
          type: 'figure',
          svg: '<svg viewBox="0 0 540 296" xmlns="http://www.w3.org/2000/svg"><line x1="245.3" y1="45.0" x2="154.7" y2="100.0" stroke="currentColor" stroke-width="1.6"/><line x1="294.7" y1="45.0" x2="385.3" y2="100.0" stroke="currentColor" stroke-width="1.6"/><line x1="120.0" y1="130.0" x2="80.0" y2="190.0" stroke="currentColor" stroke-width="1.6"/><line x1="140.0" y1="130.0" x2="180.0" y2="190.0" stroke="currentColor" stroke-width="1.6"/><line x1="400.0" y1="130.0" x2="360.0" y2="190.0" stroke="currentColor" stroke-width="1.6"/><line x1="420.8" y1="130.0" x2="464.2" y2="190.0" stroke="currentColor" stroke-width="1.6"/><rect x="205" y="15" width="130" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="270" y="35" text-anchor="middle" font-size="14">10,000 people</text><rect x="75" y="100" width="110" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="130" y="120" text-anchor="middle" font-size="14" class="t-red">100 sick</text><rect x="345" y="100" width="130" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-green"/><text x="410" y="120" text-anchor="middle" font-size="14" class="t-green">9,900 healthy</text><rect x="20" y="190" width="100" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-red"/><text x="70" y="210" text-anchor="middle" font-size="14" class="t-red">99 test +</text><rect x="145" y="190" width="90" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="190" y="210" text-anchor="middle" font-size="14">1 test −</text><rect x="295" y="190" width="110" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6" class="s-orange"/><text x="350" y="210" text-anchor="middle" font-size="14" class="t-orange">495 test +</text><rect x="425" y="190" width="100" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="475" y="210" text-anchor="middle" font-size="14">9,405 test −</text><text x="189.6" y="59.9" text-anchor="middle" font-size="13">1%</text><text x="350.4" y="59.9" text-anchor="middle" font-size="13">99%</text><text x="83.4" y="153.4" text-anchor="middle" font-size="13">99%</text><text x="176.6" y="153.4" text-anchor="middle" font-size="13">1%</text><text x="363.4" y="153.4" text-anchor="middle" font-size="13">5%</text><text x="458.7" y="152.8" text-anchor="middle" font-size="13">95%</text><text x="270" y="262" text-anchor="middle" font-size="14">positives: 99 + 495 = 594, of whom only 99 are sick</text><text x="270" y="284" text-anchor="middle" font-size="14" class="t-red">P(sick | +) = 99/594 = 1/6 ≈ 17%</text></svg>',
          alt: 'A frequency tree. 10,000 people split into 100 sick (1%) and 9,900 healthy (99%). The 100 sick split into 99 test positive and 1 test negative. The 9,900 healthy split into 495 test positive and 9,405 test negative. Text: positives 99 + 495 = 594, of whom only 99 are sick; P(sick | +) = 99/594 = 1/6, about 17%.',
          caption: 'Natural frequencies make Bayes visible: imagine $10{,}000$ people. The false positives from the huge healthy group ($495$) swamp the true positives from the small sick group ($99$).',
          maxWidth: 500,
        },
        {
          type: 'derivation',
          title: 'The same answer with the formula',
          steps: [
            { tex: 'P(D) = 0.01,\\quad P(+ \\mid D) = 0.99,\\quad P(+ \\mid \\overline{D}) = 0.05', why: 'The prior (base rate), the sensitivity, and the false-positive rate.' },
            { tex: 'P(+) = 0.99 \\cdot 0.01 + 0.05 \\cdot 0.99 = 0.0099 + 0.0495 = 0.0594', why: 'Law of total probability: true positives plus false positives.' },
            { tex: 'P(D \\mid +) = \\frac{0.0099}{0.0594} = \\frac{1}{6} \\approx 0.167', why: "Bayes' theorem: the share of positives that are true positives." },
          ],
          result: 'Only about $17\\%$. A positive result raised the probability from $1\\%$ to $17\\%$ — a big update, but far from certainty. Ignoring the $1\\%$ base rate is called **base-rate neglect**.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'Spam filters are Bayes machines',
          text: 'A classic spam filter estimates, from training data, how often each word appears in spam and in legitimate mail, then applies Bayes\' theorem to each incoming message. If $40\\%$ of mail is spam, and the word "free" appears in $25\\%$ of spam but $2\\%$ of legitimate mail, then $P(\\text{spam} \\mid \\text{"free"}) = \\frac{0.25 \\cdot 0.4}{0.25 \\cdot 0.4 + 0.02 \\cdot 0.6} = \\frac{0.1}{0.112} \\approx 0.89$. *Naive Bayes* combines many words by assuming they are independent given the class — wrong in detail, but remarkably effective.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'order',
      prompt: "Arrange the derivation of Bayes' theorem for $P(F \\mid E)$ with $P(E) > 0$.",
      lines: [
        'By the definition of conditional probability, $P(F \\mid E) = \\dfrac{P(E \\cap F)}{P(E)}$.',
        'By the multiplication rule, $P(E \\cap F) = P(E \\mid F)\\,P(F)$.',
        'By the law of total probability, $P(E) = P(E \\mid F)P(F) + P(E \\mid \\overline{F})P(\\overline{F})$.',
        'Substituting both, $P(F \\mid E) = \\dfrac{P(E \\mid F)P(F)}{P(E \\mid F)P(F) + P(E \\mid \\overline{F})P(\\overline{F})}$. $\\blacksquare$',
      ],
      explanation: 'Start from the definition (it has the conditional we want on the left), rewrite the numerator with the multiplication rule, expand the denominator with the law of total probability, then substitute. Bayes\' theorem is nothing more than the definition of conditional probability used twice.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'error',
      prompt: 'A bug occurs in $1$ of every $1000$ builds. An automated check always flags a buggy build, but also wrongly flags $2\\%$ of good builds. A build is flagged. Tap the first wrong line in this analysis.',
      lines: [
        '$P(B) = 0.001$, $P(\\text{flag} \\mid B) = 1$, $P(\\text{flag} \\mid \\overline{B}) = 0.02$.',
        '$P(\\text{flag}) = P(\\text{flag} \\mid B)P(B) = 1 \\cdot 0.001 = 0.001$.',
        '$P(B \\mid \\text{flag}) = \\dfrac{P(\\text{flag} \\mid B)P(B)}{P(\\text{flag})} = \\dfrac{0.001}{0.001} = 1$.',
        'So a flagged build is certainly buggy.',
      ],
      errorLines: [2],
      explanation: 'Line 2 forgets the false positives. By the law of total probability, $P(\\text{flag}) = 1 \\cdot 0.001 + 0.02 \\cdot 0.999 = 0.02098$. Then $P(B \\mid \\text{flag}) = 0.001/0.02098 \\approx 0.048$: fewer than $5\\%$ of flagged builds are actually buggy, because good builds vastly outnumber bad ones. A check that fires on $2\\%$ of good builds will mostly cry wolf.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'numeric',
      prompt: '$40\\%$ of incoming mail is spam. The word "free" appears in $25\\%$ of spam messages and in $2\\%$ of legitimate messages. A message contains "free". What is the probability that it is spam? Exact fraction or decimal to $4$ places.',
      hint: '$P(\\text{spam} \\mid \\text{free}) = \\dfrac{0.25 \\cdot 0.4}{0.25 \\cdot 0.4 + 0.02 \\cdot 0.6}$.',
      label: '$P =$',
      answer: '25/28',
      minDecimals: 4,
      explanation: 'Numerator: $P(\\text{free} \\mid \\text{spam})P(\\text{spam}) = 0.25 \\cdot 0.4 = 0.1$. Denominator: $0.1 + 0.02 \\cdot 0.6 = 0.1 + 0.012 = 0.112$. So $P = 0.1/0.112 = 25/28 \\approx 0.8929$. One word moved the probability from $40\\%$ to about $89\\%$ because it is $12.5$ times more common in spam.',
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'concept',
      title: 'The Monty Hall problem',
      blocks: [
        {
          type: 'p',
          text: 'A game show has $3$ doors: a car behind one, goats behind the other two. You pick a door. The host, **who knows where the car is**, always opens one of the other two doors to reveal a goat (choosing at random if both hide goats), then offers you a switch. Should you switch?',
        },
        {
          type: 'p',
          text: 'Almost everyone says "two doors left, so it is $50$–$50$". That is wrong, and conditional probability shows why. Say you pick door $1$.',
        },
        {
          type: 'table',
          headers: ['Car behind', 'Probability', 'Host opens', 'Stay wins?', 'Switch wins?'],
          rows: [
            ['door 1', '$1/3$', 'door 2 or 3 (at random)', 'yes', 'no'],
            ['door 2', '$1/3$', 'door 3 (forced)', 'no', 'yes'],
            ['door 3', '$1/3$', 'door 2 (forced)', 'no', 'yes'],
          ],
          caption: 'Switching wins exactly when your first pick was wrong, which happens with probability $2/3$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the host\'s choice carries information',
          text: 'Your first pick is right with probability $1/3$, and nothing the host does can change that — he can *always* open a goat door, so his action is no evidence about your door. But he is **not** choosing at random between the other two doors: he must avoid the car. When the car is behind one of them (probability $2/3$), he is forced to leave it closed, and switching takes it. With Bayes: given you picked door $1$ and the host opened door $3$, $P(\\text{car at } 2 \\mid \\text{opens } 3) = \\frac{1 \\cdot \\frac{1}{3}}{\\frac{1}{2} \\cdot \\frac{1}{3} + 1 \\cdot \\frac{1}{3} + 0} = \\frac{2}{3}$.',
        },
        {
          type: 'code',
          title: 'monty_hall.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <random>

std::mt19937_64 rng(42);
int uniform(int n) { return static_cast<int>(rng() % n); }

int main() {
    const int games = 1'000'000;
    int stayWins = 0, switchWins = 0;
    for (int g = 0; g < games; ++g) {
        int car = uniform(3);                    // prize placed at random
        int pick = uniform(3);                   // player's first choice
        int open;                                // host opens a goat door, not the pick
        do { open = uniform(3); } while (open == car || open == pick);
        int other = 3 - pick - open;             // the remaining closed door
        stayWins += (pick == car);
        switchWins += (other == car);
    }
    std::printf("stay:   %.4f\\n", double(stayWins) / games);
    std::printf("switch: %.4f\\n", double(switchWins) / games);
}`,
          output: `stay:   0.3333
switch: 0.6667`,
          annotations: [
            { lines: 14, text: 'Rejection sampling: redraw until the door is neither the car nor the pick. When two goat doors qualify, each is equally likely — exactly the host\'s rule.' },
            { lines: 15, text: 'Doors are $0, 1, 2$, which sum to $3$, so the door that is neither picked nor opened is $3 - \\text{pick} - \\text{open}$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'history',
          title: 'Even experts got it wrong',
          text: 'When Marilyn vos Savant gave the "switch" answer in a 1990 magazine column, she received thousands of letters insisting she was wrong — many from people with PhDs. Simulations like the one above settled the argument. Modeling the host\'s **rule** correctly is the whole problem: if the host opened a door at random and happened to reveal a goat, switching would win only half the time.',
        },
      ],
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'mcq',
      prompt: 'Monty Hall with **4 doors** (one car). You pick a door; the host, who knows where the car is, opens one goat door among the other three. You then switch to one of the two remaining closed doors, chosen at random. What is your probability of winning?',
      options: [
        { text: '$1/4$', why: 'That is the probability of winning by **staying**. Switching does better.' },
        { text: '$1/2$', why: 'That assumes the two other closed doors share all of the $3/4$ probability *and* that you could pick the right one — but you choose between them at random.' },
        { text: '$3/8$', correct: true, why: 'Your first pick is wrong with probability $3/4$; then the car is behind one of the $2$ doors you might switch to, and you choose the right one with probability $1/2$: $\\frac{3}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$.' },
        { text: '$1/3$', why: 'That treats the $3$ remaining closed doors as equally likely, ignoring that your first door keeps its $1/4$.' },
      ],
      explanation: 'Stay: $1/4$. Switch: you win only if your first pick was wrong ($3/4$) **and** you then pick the car from the $2$ candidate doors ($1/2$), so $3/8 = 0.375 > 0.25$. Switching still helps, just less dramatically. An exact enumeration over all car positions and host choices gives the same $3/8$.',
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'concept',
      title: 'Bernoulli trials and the binomial distribution',
      blocks: [
        {
          type: 'p',
          text: 'Many experiments repeat the same yes/no trial: kill a monster (drop or no drop), flip a coin, send a packet (delivered or lost). A [[dm-bernoulli-trial|Bernoulli trial]] has two outcomes, *success* with probability $p$ and *failure* with probability $1 - p$. We study $n$ **independent** Bernoulli trials with the same $p$.',
        },
        {
          type: 'derivation',
          title: 'P(exactly $k$ successes in $n$ trials)',
          steps: [
            { tex: 'P(SSFSF) = p \\cdot p \\cdot (1-p) \\cdot p \\cdot (1-p) = p^3(1-p)^2', why: 'Any one specific sequence: multiply, since the trials are independent. Only the number of $S$s matters, not their positions.' },
            { tex: '\\text{each sequence with } k \\text{ successes has probability } p^k(1-p)^{n-k}', why: 'Same reasoning for any length $n$.' },
            { tex: '\\binom{n}{k} \\text{ such sequences}', why: 'A sequence is determined by **which** $k$ of the $n$ positions are successes.' },
            { tex: 'P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}, \\quad k = 0, 1, \\dots, n', why: 'The sequences are distinct outcomes (disjoint events), so add $\\binom{n}{k}$ equal probabilities.' },
          ],
          result: 'This is the [[dm-binomial-distribution|binomial distribution]] $b(k; n, p)$. By the binomial theorem the probabilities sum to $(p + (1-p))^n = 1$, as they must.',
        },
        binomialGraph,
        {
          type: 'p',
          text: 'A legendary item drops with probability $p = 0.1$ per kill. In $20$ kills: $P(\\text{exactly } 2) = \\binom{20}{2}(0.1)^2(0.9)^{18} \\approx 0.285$, and $P(\\text{at least one}) = 1 - 0.9^{20} \\approx 0.878$ — so about $1$ player in $8$ goes $20$ kills with nothing, and will complain on the forums. Designers use exactly these numbers to decide whether a drop rate "feels" fair.',
        },
      ],
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'numeric',
      prompt: 'A fair coin is flipped $5$ times. What is the probability of exactly $3$ heads? Exact fraction.',
      hint: '$\\binom{5}{3}\\left(\\frac{1}{2}\\right)^3\\left(\\frac{1}{2}\\right)^2$.',
      label: '$P =$',
      answer: '5/16',
      explanation: '$P(X = 3) = \\binom{5}{3}(1/2)^5 = 10/32 = 5/16$. With $p = 1/2$ every sequence has probability $1/2^n$, so the binomial probability is just $\\binom{n}{k}/2^n$ — the fraction of length-$5$ bit strings with three $1$s, linking straight back to the counting unit.',
    },
  ],
  takeaways: [
    '$P(E \\mid F) = P(E \\cap F)/P(F)$: restrict to $F$ and rescale. With equally likely outcomes, $|E \\cap F|/|F|$.',
    'Multiplication rule $P(E \\cap F) = P(F)P(E \\mid F)$; independence means $P(E \\cap F) = P(E)P(F)$. Disjoint events (positive probability) are dependent; check independence by the definition.',
    'Law of total probability: $P(E) = \\sum_i P(E \\mid F_i)P(F_i)$ over a partition — read it off a probability tree.',
    "Bayes: $P(F \\mid E) = \\frac{P(E \\mid F)P(F)}{P(E)}$. Never ignore the base rate: a $99\\%$-sensitive test for a $1\\%$ disease with $5\\%$ false positives gives only $1/6$.",
    'Monty Hall: switching wins $2/3$, because the host must avoid the car.',
    'Binomial distribution: $P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}$ for $n$ independent trials; $P(\\text{at least one}) = 1 - (1-p)^n$.',
  ],
  reading: [
    {
      title: 'MIT OCW 6.042J — Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The conditional probability lectures use the tree method for the Monty Hall problem and medical tests, exactly as in this lesson.',
    },
    {
      title: 'Wikipedia — Monty Hall problem',
      url: 'https://en.wikipedia.org/wiki/Monty_Hall_problem',
      source: 'wikipedia',
      note: 'Many explanations, the history of the controversy, and variants where the host behaves differently.',
    },
    {
      title: "Wikipedia — Bayes' theorem",
      url: "https://en.wikipedia.org/wiki/Bayes%27_theorem",
      source: 'wikipedia',
      note: 'Worked examples on drug testing and the base-rate fallacy, and the odds form of the theorem.',
    },
  ],
};
